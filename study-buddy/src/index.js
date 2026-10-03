import { TOPIC_CATALOG, URGENT_TOPICS } from './catalog.generated.js';
import { QUESTION_CATALOG } from './questions.generated.js';
import { KEY_TOPICS } from './key-topics.generated.js';
import webpush from 'web-push';
import { gradeBearMinimum, pickBearMinimum } from './bear-minimum.js';
import { isActiveThisSemester } from './curriculum.js';
import {
  addDays,
  datesBetween,
  findFirstFittingDate,
  parseIcsEvents,
  studyCapacity
} from './planner.js';
import { notificationFor } from './reminders.js';

const json = (body, init = {}) => Response.json(body, {
  headers: { 'Cache-Control': 'no-store', ...init.headers }, ...init
});
const KEY_REVIEW_MINUTES = 3;
const BEAR_MINIMUM_QUESTION_COUNT = 10;
const BEAR_MINIMUM_CATALOG = QUESTION_CATALOG.filter(isActiveThisSemester);

function czechDate(date = new Date()) {
  const fields = new Intl.DateTimeFormat('en-CA', {
    timeZone: 'Europe/Prague', year: 'numeric', month: '2-digit', day: '2-digit'
  }).formatToParts(date);
  const value = Object.fromEntries(fields.filter(({ type }) => type !== 'literal').map(({ type, value }) => [type, value]));
  return `${value.year}-${value.month}-${value.day}`;
}

function czechTime(date = new Date()) {
  return new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Europe/Prague', hour: '2-digit', minute: '2-digit', hourCycle: 'h23'
  }).format(date);
}

function localDurationMinutes(startsAt, endsAt) {
  const start = Date.parse(`${startsAt}Z`);
  const end = Date.parse(`${endsAt}Z`);
  return Math.max(0, Math.round((end - start) / 60_000));
}

async function readJson(request) {
  try { return await request.json(); } catch { return null; }
}

function isAuthorized(request, env) {
  // Lokální vývoj bez secretu zůstává pohodlný; nasazená aplikace vyžaduje osobní kód.
  if (!env.APP_SETUP_TOKEN) return true;
  const token = request.headers.get('X-Study-Buddy-Token');
  return Boolean(token && token.length === env.APP_SETUP_TOKEN.length && token === env.APP_SETUP_TOKEN);
}

function hasPushSecrets(env) {
  return Boolean(env.VAPID_PUBLIC_KEY && env.VAPID_PRIVATE_KEY && env.VAPID_SUBJECT);
}

function isValidSubscription(subscription) {
  try {
    const endpoint = new URL(subscription?.endpoint);
    return endpoint.protocol === 'https:' && typeof subscription?.keys?.p256dh === 'string' && typeof subscription?.keys?.auth === 'string';
  } catch { return false; }
}

async function sendPush(env, payload, endpoint = null) {
  if (!hasPushSecrets(env)) return { sent: 0, skipped: 'missing-vapid-secrets' };
  const statement = endpoint
    ? env.DB.prepare('SELECT endpoint, subscription_json FROM push_subscriptions WHERE endpoint = ?').bind(endpoint)
    : env.DB.prepare('SELECT endpoint, subscription_json FROM push_subscriptions');
  const { results } = await statement.all();
  if (!results.length) return { sent: 0, skipped: 'no-subscriptions' };
  webpush.setVapidDetails(env.VAPID_SUBJECT, env.VAPID_PUBLIC_KEY, env.VAPID_PRIVATE_KEY);
  const expired = [];
  let sent = 0;
  for (const row of results) {
    try {
      await webpush.sendNotification(JSON.parse(row.subscription_json), JSON.stringify({ ...payload, data: { url: '/' } }), {
        TTL: 60 * 60 * 6,
        urgency: 'normal',
        topic: payload.tag.slice(0, 32)
      });
      sent += 1;
    } catch (error) {
      if (error?.statusCode === 404 || error?.statusCode === 410) expired.push(row.endpoint);
      else console.error('Push notification failed', error?.statusCode ?? error?.message);
    }
  }
  if (expired.length) await env.DB.batch(expired.map((deadEndpoint) => env.DB.prepare('DELETE FROM push_subscriptions WHERE endpoint = ?').bind(deadEndpoint)));
  return { sent, expired: expired.length };
}

async function getSettings(db) {
  return await db.prepare('SELECT * FROM settings WHERE id = 1').first() ?? {
    timezone: 'Europe/Prague', morning_time: '07:30', evening_time: '20:00', late_time: '23:40',
    morning_enabled: 1, evening_enabled: 1, late_enabled: 1, weekday_minutes: 40, weekend_minutes: 90
  };
}

async function seedTopics(db) {
  const catalog = [...TOPIC_CATALOG, ...URGENT_TOPICS.map((topic) => ({
    id: topic.id, subject: 'urgent', title: topic.title, sourcePath: '/clinical-portal/', estimatedMinutes: topic.minutes, section: null
  }))];
  if (!catalog.length) throw new Error('Katalog témat není vygenerovaný. Spusť nejdřív npm run catalog.');
  await db.batch(catalog.map((topic) => db.prepare(`
    INSERT INTO topics (id, subject, title, source_path, estimated_minutes, is_active, is_key)
    VALUES (?, ?, ?, ?, ?, ?, ?)
    ON CONFLICT(id) DO UPDATE SET
      title = excluded.title,
      source_path = excluded.source_path,
      estimated_minutes = excluded.estimated_minutes,
      is_active = excluded.is_active,
      is_key = excluded.is_key
  `).bind(topic.id, topic.subject, topic.title, topic.sourcePath, topic.estimatedMinutes, isActiveThisSemester(topic) ? 1 : 0, KEY_TOPICS.some(({ topicId }) => topicId === topic.id) ? 1 : 0)));
}

function makeBlocks(events) {
  const bySubject = new Map();
  for (const event of events) {
    if (!event.subject) continue;
    const current = bySubject.get(event.subject) ?? { subject: event.subject, label: event.subject, startsOn: event.studyDate, endsOn: event.studyDate };
    current.startsOn = current.startsOn < event.studyDate ? current.startsOn : event.studyDate;
    current.endsOn = current.endsOn > event.studyDate ? current.endsOn : event.studyDate;
    if (event.summary.includes('(')) current.label = event.summary.slice(event.summary.lastIndexOf('(') + 1, -1);
    bySubject.set(event.subject, current);
  }
  return [...bySubject.values()].map((block) => ({ ...block, id: `${block.subject}:${block.startsOn}:${block.endsOn}` }));
}

async function replaceCalendar(db, events) {
  const blocks = makeBlocks(events);
  await db.batch([
    db.prepare('DELETE FROM calendar_events'),
    db.prepare('DELETE FROM course_blocks'),
    ...events.map((event) => db.prepare(`
      INSERT INTO calendar_events (id, starts_at, ends_at, study_date, summary, subject, location)
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `).bind(event.id, event.startsAt, event.endsAt, event.studyDate, event.summary, event.subject, event.location)),
    ...blocks.map((block) => db.prepare(`
      INSERT INTO course_blocks (id, subject, label, starts_on, ends_on) VALUES (?, ?, ?, ?, ?)
    `).bind(block.id, block.subject, block.label, block.startsOn, block.endsOn))
  ]);
  return blocks;
}

async function busyMinutesByDate(db, startDate, endDate) {
  const { results } = await db.prepare(`
    SELECT study_date, starts_at, ends_at FROM calendar_events WHERE study_date BETWEEN ? AND ?
  `).bind(startDate, endDate).all();
  const result = new Map();
  for (const event of results) {
    result.set(event.study_date, (result.get(event.study_date) ?? 0) + localDurationMinutes(event.starts_at, event.ends_at));
  }
  return result;
}

async function createPlanItem(db, item) {
  await db.prepare(`
    INSERT INTO plan_items (id, plan_date, kind, topic_id, label, estimated_minutes, pass_number, status, origin_date, created_at)
    VALUES (?, ?, ?, ?, ?, ?, ?, 'pending', ?, ?)
  `).bind(crypto.randomUUID(), item.planDate, item.kind, item.topicId ?? null, item.label, item.minutes, item.passNumber ?? 1, item.originDate ?? item.planDate, new Date().toISOString()).run();
}

async function freeLaterBlockSlot(db, { currentBlock, blocksBySubject, usedByDate, capacityByDate }) {
  const { results: candidates } = await db.prepare(`
    SELECT p.*, t.subject
    FROM plan_items p JOIN topics t ON t.id = p.topic_id
    WHERE p.status = 'pending'
      AND p.kind = 'topic'
      AND p.pass_number = 1
      AND p.plan_date BETWEEN ? AND ?
    ORDER BY p.plan_date DESC, p.rowid DESC
  `).bind(currentBlock.starts_on, currentBlock.ends_on).all();
  for (const candidate of candidates) {
    const laterBlock = (blocksBySubject.get(candidate.subject) ?? [])
      .filter((block) => block.ends_on > currentBlock.ends_on)
      .sort((a, b) => a.ends_on.localeCompare(b.ends_on))[0];
    if (!laterBlock) continue;
    const afterCurrent = addDays(currentBlock.ends_on, 1);
    const startDate = laterBlock.starts_on > afterCurrent ? laterBlock.starts_on : afterCurrent;
    const targetDate = findFirstFittingDate({
      startDate, endDate: laterBlock.ends_on, minutes: candidate.estimated_minutes, usedByDate, capacityByDate
    });
    if (!targetDate) continue;
    await db.prepare("UPDATE plan_items SET status = 'moved' WHERE id = ?").bind(candidate.id).run();
    await createPlanItem(db, {
      planDate: targetDate, kind: candidate.kind, topicId: candidate.topic_id, label: candidate.label,
      minutes: candidate.estimated_minutes, passNumber: candidate.pass_number, originDate: candidate.origin_date
    });
    usedByDate.set(candidate.plan_date, (usedByDate.get(candidate.plan_date) ?? 0) - candidate.estimated_minutes);
    usedByDate.set(targetDate, (usedByDate.get(targetDate) ?? 0) + candidate.estimated_minutes);
    return true;
  }
  return false;
}

async function scheduleSemester(db, today) {
  const settings = await getSettings(db);
  const { results: rawBlocks } = await db.prepare('SELECT * FROM course_blocks').all();
  // Blok, který skončí dříve, nemá být vytlačen dlouhým semestrovým předmětem.
  const blocks = rawBlocks.sort((a, b) => a.ends_on.localeCompare(b.ends_on));
  const blocksBySubject = new Map();
  for (const block of blocks) blocksBySubject.set(block.subject, [...(blocksBySubject.get(block.subject) ?? []), block]);
  const managedBlocks = blocks.filter((block) => ['radiology', 'dermatology', 'neurology'].includes(block.subject) && block.ends_on >= today);
  if (!managedBlocks.length) return { scheduled: 0, unplanned: [] };
  const latestEnd = managedBlocks.reduce((latest, block) => latest > block.ends_on ? latest : block.ends_on, today);
  const busy = await busyMinutesByDate(db, today, latestEnd);
  const capacityByDate = new Map();
  const usedByDate = new Map();
  for (const date of datesBetween(today, latestEnd)) {
    const weekday = new Date(`${date}T12:00:00`).getDay();
    const supportReserve = weekday === 0 || weekday === 6 ? 0 : 15; // urgentní téma + kartičky
    capacityByDate.set(date, Math.max(0, studyCapacity({
      date, busyMinutes: busy.get(date) ?? 0, weekdayMinutes: settings.weekday_minutes, weekendMinutes: settings.weekend_minutes
    }) - supportReserve));
  }
  const { results: existing } = await db.prepare("SELECT plan_date, estimated_minutes, topic_id, pass_number FROM plan_items WHERE status = 'pending'").all();
  const planned = new Set();
  for (const row of existing) {
    usedByDate.set(row.plan_date, (usedByDate.get(row.plan_date) ?? 0) + row.estimated_minutes);
    if (row.topic_id) planned.add(`${row.topic_id}:${row.pass_number}`);
  }

  let scheduled = 0;
  const keyUnplanned = [];
  for (const block of managedBlocks) {
    if (!['radiology', 'dermatology', 'neurology'].includes(block.subject)) continue;
    const start = block.starts_on > today ? block.starts_on : today;
    if (start > block.ends_on) continue;
    const { results: topics } = await db.prepare(`
      SELECT * FROM topics WHERE subject = ? AND is_active = 1 ORDER BY id
    `).bind(block.subject).all();
    for (const topic of topics) {
      const key = `${topic.id}:1`;
      if (planned.has(key)) continue;
      const date = findFirstFittingDate({
        startDate: start, endDate: block.ends_on, minutes: topic.estimated_minutes, usedByDate, capacityByDate
      });
      if (!date) continue;
      await createPlanItem(db, { planDate: date, kind: 'topic', topicId: topic.id, label: topic.title, minutes: topic.estimated_minutes });
      usedByDate.set(date, (usedByDate.get(date) ?? 0) + topic.estimated_minutes);
      planned.add(key);
      scheduled += 1;
    }
    const keyTopics = KEY_TOPICS.filter((topic) => topic.subject === block.subject);
    for (const keyTopic of keyTopics) {
      const key = `${keyTopic.topicId}:2`;
      if (planned.has(key)) continue;
      const firstPass = await db.prepare(`
        SELECT plan_date, estimated_minutes FROM plan_items
        WHERE topic_id = ? AND kind = 'topic' AND pass_number = 1 AND status != 'moved'
        ORDER BY plan_date LIMIT 1
      `).bind(keyTopic.topicId).first();
      if (!firstPass) { keyUnplanned.push(keyTopic); continue; }
      let date = findFirstFittingDate({
        startDate: addDays(firstPass.plan_date, 1), endDate: block.ends_on,
        minutes: Math.min(KEY_REVIEW_MINUTES, firstPass.estimated_minutes), usedByDate, capacityByDate
      });
      while (!date && await freeLaterBlockSlot(db, { currentBlock: block, blocksBySubject, usedByDate, capacityByDate })) {
        date = findFirstFittingDate({
          startDate: addDays(firstPass.plan_date, 1), endDate: block.ends_on,
          minutes: Math.min(KEY_REVIEW_MINUTES, firstPass.estimated_minutes), usedByDate, capacityByDate
        });
      }
      if (!date) { keyUnplanned.push(keyTopic); continue; }
      await createPlanItem(db, {
        planDate: date, kind: 'topic', topicId: keyTopic.topicId,
        label: `↺ ${keyTopic.title} — klíčové opakování`, minutes: Math.min(KEY_REVIEW_MINUTES, firstPass.estimated_minutes),
        passNumber: 2
      });
      usedByDate.set(date, (usedByDate.get(date) ?? 0) + firstPass.estimated_minutes);
      planned.add(key);
      scheduled += 1;
    }
  }
  const { results: unplanned } = await db.prepare(`
    SELECT t.subject, t.title FROM topics t
    WHERE t.subject IN ('radiology', 'dermatology', 'neurology')
      AND t.is_active = 1
      AND NOT EXISTS (SELECT 1 FROM plan_items p WHERE p.topic_id = t.id AND p.kind = 'topic' AND p.pass_number = 1 AND p.status != 'moved')
    ORDER BY t.subject, t.id
  `).all();
  return { scheduled, unplanned, keyUnplanned };
}

async function ensureDailySupport(db, date) {
  const settings = await getSettings(db);
  const weekday = new Date(`${date}T12:00:00`).getDay();
  if (weekday === 0 || weekday === 6) return;
  const { results: already } = await db.prepare('SELECT kind FROM plan_items WHERE plan_date = ? AND status = ?').bind(date, 'pending').all();
  const existingKinds = new Set(already.map((item) => item.kind));
  const busy = await busyMinutesByDate(db, date, date);
  const capacity = studyCapacity({ date, busyMinutes: busy.get(date) ?? 0, weekdayMinutes: settings.weekday_minutes, weekendMinutes: settings.weekend_minutes });
  const { total = 0 } = await db.prepare('SELECT COALESCE(SUM(estimated_minutes), 0) AS total FROM plan_items WHERE plan_date = ? AND status = ?').bind(date, 'pending').first();
  let remaining = capacity - total;
  if (!existingKinds.has('urgent') && remaining >= 10) {
    const { total: count = 0 } = await db.prepare("SELECT COUNT(*) AS total FROM plan_items WHERE kind = 'urgent'").first();
    const topic = URGENT_TOPICS[Number(count) % URGENT_TOPICS.length];
    await createPlanItem(db, { planDate: date, kind: 'urgent', topicId: topic.id, label: topic.title, minutes: 10 });
    remaining -= 10;
  }
  if (!existingKinds.has('cards') && remaining >= 5) {
    await createPlanItem(db, { planDate: date, kind: 'cards', label: '5 krátkých kartiček na aktivní vybavení', minutes: 5 });
  }
}

async function rescheduleItems(db, items, fromDate) {
  const settings = await getSettings(db);
  const endDate = addDays(fromDate, 21);
  const busy = await busyMinutesByDate(db, addDays(fromDate, 1), endDate);
  const { results: future } = await db.prepare(`
    SELECT plan_date, estimated_minutes FROM plan_items WHERE plan_date > ? AND status = 'pending'
  `).bind(fromDate).all();
  const used = new Map();
  for (const row of future) used.set(row.plan_date, (used.get(row.plan_date) ?? 0) + row.estimated_minutes);
  const capacity = new Map();
  for (const date of datesBetween(addDays(fromDate, 1), endDate)) {
    capacity.set(date, studyCapacity({ date, busyMinutes: busy.get(date) ?? 0, weekdayMinutes: settings.weekday_minutes, weekendMinutes: settings.weekend_minutes }));
  }
  for (const item of items) {
    const date = findFirstFittingDate({ startDate: addDays(fromDate, 1), endDate, minutes: item.estimated_minutes, usedByDate: used, capacityByDate: capacity });
    await db.prepare("UPDATE plan_items SET status = 'moved' WHERE id = ?").bind(item.id).run();
    if (!date) continue;
    await createPlanItem(db, { planDate: date, kind: item.kind, topicId: item.topic_id, label: item.label, minutes: item.estimated_minutes, passNumber: item.pass_number, originDate: item.origin_date });
    used.set(date, (used.get(date) ?? 0) + item.estimated_minutes);
  }
}

async function todayPayload(db, date = czechDate()) {
  await ensureDailySupport(db, date);
  const [{ results: items }, settings, blocks, todayBear, allBears, allDoneItems] = await Promise.all([
    db.prepare(`
    SELECT p.id, p.kind, p.topic_id AS topicId, p.label, p.estimated_minutes AS minutes,
           p.pass_number AS passNumber, p.status, t.source_path AS sourcePath
    FROM plan_items p
    LEFT JOIN topics t ON t.id = p.topic_id
    WHERE p.plan_date = ? AND p.status = 'pending'
    ORDER BY CASE p.kind WHEN 'urgent' THEN 0 WHEN 'topic' THEN 1 ELSE 2 END, p.rowid
    `).bind(date).all(),
    getSettings(db),
    db.prepare('SELECT subject, label, starts_on, ends_on FROM course_blocks ORDER BY starts_on').all(),
    db.prepare('SELECT correct_answers AS correctAnswers, total_questions AS totalQuestions FROM bear_minimum_sessions WHERE study_date = ?').bind(date).first(),
    db.prepare('SELECT COUNT(*) AS total FROM bear_minimum_sessions').first(),
    db.prepare("SELECT COUNT(*) AS total FROM plan_items WHERE status = 'done'").first()
  ]);
  return {
    date,
    items,
    totalMinutes: items.reduce((sum, item) => sum + item.minutes, 0),
    settings,
    blocks: blocks.results,
    bear: {
      today: todayBear ?? null,
      snowflakes: Number(allBears.total ?? 0),
      flowers: Number(allDoneItems?.total ?? 0)
    }
  };
}

async function appStatus(db) {
  const [events, topics, blocks, subscriptions] = await Promise.all([
    db.prepare('SELECT COUNT(*) AS total FROM calendar_events').first(),
    db.prepare('SELECT COUNT(*) AS total FROM topics').first(),
    db.prepare('SELECT COUNT(*) AS total FROM course_blocks').first(),
    db.prepare('SELECT COUNT(*) AS total FROM push_subscriptions').first()
  ]);
  return { events: events.total, topics: topics.total, blocks: blocks.total, subscriptions: subscriptions.total, catalogReady: TOPIC_CATALOG.length > 0, questionCatalogReady: QUESTION_CATALOG.length > 0, keyTopicsReady: KEY_TOPICS.length > 0 };
}

async function handleApi(request, env) {
  const url = new URL(request.url);
  const date = url.searchParams.get('date') ?? czechDate();
  if (!isAuthorized(request, env)) return json({ error: 'Zadej přístupový kód medvídka.' }, { status: 401 });
  if (request.method === 'GET' && url.pathname === '/api/status') return json(await appStatus(env.DB));
  if (request.method === 'GET' && url.pathname === '/api/settings') return json(await getSettings(env.DB));
  if (request.method === 'POST' && url.pathname === '/api/settings') {
    const body = await readJson(request);
    if (!body) return json({ error: 'Neplatná data nastavení.' }, { status: 400 });
    const current = await getSettings(env.DB);
    const timePattern = /^([01]\d|2[0-3]):[0-5]\d$/;
    const morning_time = typeof body.morning_time === 'string' && timePattern.test(body.morning_time) ? body.morning_time : current.morning_time;
    const evening_time = typeof body.evening_time === 'string' && timePattern.test(body.evening_time) ? body.evening_time : current.evening_time;
    const late_time = typeof body.late_time === 'string' && timePattern.test(body.late_time) ? body.late_time : current.late_time;
    const morning_enabled = typeof body.morning_enabled === 'boolean' ? (body.morning_enabled ? 1 : 0) : (body.morning_enabled === 0 || body.morning_enabled === 1 ? body.morning_enabled : (current.morning_enabled ?? 1));
    const evening_enabled = typeof body.evening_enabled === 'boolean' ? (body.evening_enabled ? 1 : 0) : (body.evening_enabled === 0 || body.evening_enabled === 1 ? body.evening_enabled : (current.evening_enabled ?? 1));
    const late_enabled = typeof body.late_enabled === 'boolean' ? (body.late_enabled ? 1 : 0) : (body.late_enabled === 0 || body.late_enabled === 1 ? body.late_enabled : (current.late_enabled ?? 1));
    const weekday_minutes = Number.isInteger(body.weekday_minutes) && body.weekday_minutes >= 5 && body.weekday_minutes <= 180 ? body.weekday_minutes : current.weekday_minutes;
    const weekend_minutes = Number.isInteger(body.weekend_minutes) && body.weekend_minutes >= 10 && body.weekend_minutes <= 360 ? body.weekend_minutes : current.weekend_minutes;

    await env.DB.prepare(`
      INSERT INTO settings (id, morning_time, evening_time, late_time, morning_enabled, evening_enabled, late_enabled, weekday_minutes, weekend_minutes)
      VALUES (1, ?, ?, ?, ?, ?, ?, ?, ?)
      ON CONFLICT(id) DO UPDATE SET
        morning_time = excluded.morning_time,
        evening_time = excluded.evening_time,
        late_time = excluded.late_time,
        morning_enabled = excluded.morning_enabled,
        evening_enabled = excluded.evening_enabled,
        late_enabled = excluded.late_enabled,
        weekday_minutes = excluded.weekday_minutes,
        weekend_minutes = excluded.weekend_minutes
    `).bind(morning_time, evening_time, late_time, morning_enabled, evening_enabled, late_enabled, weekday_minutes, weekend_minutes).run();

    const updated = await getSettings(env.DB);
    return json({ ok: true, settings: updated });
  }
  if (request.method === 'GET' && url.pathname === '/api/today') return json(await todayPayload(env.DB, date));
  if (request.method === 'GET' && url.pathname === '/api/key-topics') return json({ topics: KEY_TOPICS });
  if (request.method === 'POST' && url.pathname === '/api/replan') {
    // Přepočítáváme jen dosud nedokončené druhé průchody; hotové opakování je historie, ne práce navíc.
    if (KEY_TOPICS.length) await env.DB.batch(KEY_TOPICS.map(({ topicId }) => env.DB.prepare(`
      UPDATE plan_items SET status = 'moved'
      WHERE topic_id = ? AND pass_number = 2 AND status = 'pending'
    `).bind(topicId)));
    await seedTopics(env.DB);
    const planning = await scheduleSemester(env.DB, czechDate());
    return json({ ok: true, planning, today: await todayPayload(env.DB) });
  }
  if (request.method === 'GET' && url.pathname === '/api/bear-minimum') {
    const questions = pickBearMinimum(BEAR_MINIMUM_CATALOG, BEAR_MINIMUM_QUESTION_COUNT);
    if (questions.length !== BEAR_MINIMUM_QUESTION_COUNT) return json({ error: 'Zatím nemám dost různých ověřených témat pro Bear minimum.' }, { status: 503 });
    return json({ questions });
  }
  if (request.method === 'GET' && url.pathname === '/api/push/public-key') {
    if (!hasPushSecrets(env)) return json({ error: 'Push notifikace ještě nejsou na serveru nastavené.' }, { status: 503 });
    return json({ publicKey: env.VAPID_PUBLIC_KEY });
  }

  if (request.method === 'POST' && url.pathname === '/api/push/subscribe') {
    const body = await readJson(request);
    if (!isValidSubscription(body?.subscription)) return json({ error: 'Neplatné push předplatné.' }, { status: 400 });
    const now = new Date().toISOString();
    await env.DB.prepare(`
      INSERT INTO push_subscriptions (endpoint, subscription_json, created_at, updated_at) VALUES (?, ?, ?, ?)
      ON CONFLICT(endpoint) DO UPDATE SET subscription_json = excluded.subscription_json, updated_at = excluded.updated_at
    `).bind(body.subscription.endpoint, JSON.stringify(body.subscription), now, now).run();
    return json({ ok: true });
  }

  if (request.method === 'POST' && url.pathname === '/api/push/test') {
    const body = await readJson(request);
    if (typeof body?.endpoint !== 'string') return json({ error: 'Chybí cílové zařízení.' }, { status: 400 });
    const result = await sendPush(env, {
      title: '🐻‍❄️ Medvídek je vzhůru!',
      body: 'Zkušební notifikace funguje. Až bude čas, ozvu se jemně a bez výčitek.',
      tag: `test-${czechDate()}`
    }, body.endpoint);
    return json({ ok: true, ...result });
  }

  if (request.method === 'POST' && url.pathname === '/api/bear-minimum/complete') {
    const body = await readJson(request);
    const score = gradeBearMinimum(BEAR_MINIMUM_CATALOG, body?.answers);
    if (score.total !== BEAR_MINIMUM_QUESTION_COUNT) return json({ error: 'Pošli prosím všech deset odpovědí najednou.' }, { status: 400 });
    const studyDate = czechDate();
    await env.DB.prepare(`
      INSERT INTO bear_minimum_sessions (study_date, total_questions, correct_answers, completed_at)
      VALUES (?, ?, ?, ?)
      ON CONFLICT(study_date) DO UPDATE SET
        total_questions = excluded.total_questions,
        correct_answers = excluded.correct_answers,
        completed_at = excluded.completed_at
    `).bind(studyDate, score.total, score.correct, new Date().toISOString()).run();
    return json({ ok: true, ...score });
  }

  if (request.method === 'POST' && url.pathname === '/api/setup') {
    const body = await readJson(request);
    if (!body?.calendarIcs || typeof body.calendarIcs !== 'string' || body.calendarIcs.length > 600_000) return json({ error: 'Nahraj platný iCal soubor do 600 kB.' }, { status: 400 });
    try {
      const events = parseIcsEvents(body.calendarIcs);
      if (!events.length) return json({ error: 'V iCalu jsem nenašel žádné události.' }, { status: 400 });
      await seedTopics(env.DB);
      const blocks = await replaceCalendar(env.DB, events);
      await env.DB.prepare(`INSERT INTO settings (id, initialized_at) VALUES (1, ?) ON CONFLICT(id) DO UPDATE SET initialized_at = excluded.initialized_at`).bind(new Date().toISOString()).run();
      const planning = await scheduleSemester(env.DB, czechDate());
      return json({ ok: true, events: events.length, blocks, planning, status: await appStatus(env.DB) });
    } catch (error) {
      return json({ error: error.message || 'Nastavení se nepodařilo dokončit.' }, { status: 500 });
    }
  }

  if (request.method === 'POST' && url.pathname === '/api/check-in') {
    const body = await readJson(request);
    if (!['all', 'partial', 'none'].includes(body?.result)) return json({ error: 'Neplatný typ check-inu.' }, { status: 400 });
    const targetDate = body.date ?? czechDate();
    const { results: items } = await env.DB.prepare("SELECT * FROM plan_items WHERE plan_date = ? AND status = 'pending'").bind(targetDate).all();
    const completed = new Set(body.completedItemIds ?? []);
    const done = body.result === 'all' ? items : items.filter((item) => completed.has(item.id));
    const undone = body.result === 'all' ? [] : items.filter((item) => !completed.has(item.id));
    if (done.length) await env.DB.batch(done.map((item) => env.DB.prepare("UPDATE plan_items SET status = 'done', completed_at = ? WHERE id = ?").bind(new Date().toISOString(), item.id)));
    if (undone.length) await rescheduleItems(env.DB, undone, targetDate);
    await env.DB.prepare('INSERT INTO check_ins (id, study_date, result, note, created_at) VALUES (?, ?, ?, ?, ?)').bind(crypto.randomUUID(), targetDate, body.result, body.note ?? null, new Date().toISOString()).run();
    return json({ ok: true, moved: undone.length, today: await todayPayload(env.DB, targetDate) });
  }
  return json({ error: 'Nenalezeno.' }, { status: 404 });
}

export default {
  async fetch(request, env) {
    const { pathname } = new URL(request.url);
    if (pathname.startsWith('/api/')) return handleApi(request, env);
    return env.ASSETS.fetch(request);
  },
  async scheduled(controller, env, ctx) {
    ctx.waitUntil((async () => {
      const settings = await getSettings(env.DB);
      const scheduledAt = new Date(controller.scheduledTime || Date.now());
      const time = czechTime(scheduledAt);
      const date = czechDate(scheduledAt);
      const jobType = (time === settings.morning_time && (settings.morning_enabled ?? 1)) ? 'morning-plan'
        : (time === settings.evening_time && (settings.evening_enabled ?? 1)) ? 'evening-check-in'
        : (time === settings.late_time && (settings.late_enabled ?? 1)) ? 'late-check-in'
        : null;
      if (!jobType) return;
      const id = `${jobType}:${date}`;
      const exists = await env.DB.prepare('SELECT id FROM job_runs WHERE id = ?').bind(id).first();
      if (exists) return;
      if (jobType === 'late-check-in') {
        const checkIn = await env.DB.prepare('SELECT id FROM check_ins WHERE study_date = ? ORDER BY created_at DESC LIMIT 1').bind(date).first();
        if (checkIn) {
          await env.DB.prepare('INSERT INTO job_runs (id, job_type, ran_at, result) VALUES (?, ?, ?, ?)').bind(id, jobType, new Date().toISOString(), 'skipped-check-in-recorded').run();
          return;
        }
      }
      const plan = await todayPayload(env.DB, date);
      const delivery = await sendPush(env, notificationFor(jobType, plan));
      await env.DB.prepare('INSERT INTO job_runs (id, job_type, ran_at, result) VALUES (?, ?, ?, ?)').bind(id, jobType, new Date().toISOString(), JSON.stringify(delivery)).run();
    })());
  }
};
