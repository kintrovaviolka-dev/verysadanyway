let calendarIcs = null;
let today = null;
let pushSubscription = null;

const $ = (selector) => document.querySelector(selector);
const message = $('#message');
const setup = $('#setup');
const todayPanel = $('#today');
const setupButton = $('#setup-button');
const setupStatus = $('#setup-status');
const checkinStatus = $('#checkin-status');
const unlockPanel = $('#unlock');
const notificationPanel = $('#notifications');
const notificationStatus = $('#notification-status');
const bearMinimumPanel = $('#bear-minimum');
const keyTopicsPanel = $('#key-topics');
const settingsPanel = $('#settings');
const settingsForm = $('#settings-form');
const settingsStatus = $('#settings-status');
const saveSettingsButton = $('#save-settings-button');
const replanButton = $('#replan-button');
const bearQuiz = $('#bear-quiz');
const heroBear = $('#hero-bear');
const bearBubble = $('#bear-bubble');
const bearMonitor = $('#bear-monitor');

let bearQuestions = [];
let bearAnswers = [];
let bearTodayComplete = false;
let bubbleTimer = null;
let bearAnswerLocked = false;

const accessToken = () => localStorage.getItem('study-buddy-access-token') || '';

const BEAR_CHEERS = [
  { quote: 'Věřím ti! Každý malý krok se počítá. 💕', monitor: 'SpO₂ 100%' },
  { quote: 'I pět minut má dnes obrovský smysl. 🌸', monitor: 'klidný tep' },
  { quote: 'Medicína je maraton, ne sprint. Dýchej. 🏃‍♀️', monitor: 'ETCO₂ v klidu' },
  { quote: 'Nezapomeň se napít čaje nebo vody a protáhnout ramena. ☕', monitor: 'tekutiny ✓' },
  { quote: 'Odpočinek není odměna za výkon, ale nutná součást učení. 🌿', monitor: 'sedace: jemná' },
  { quote: 'I když dnes dáš jen Bear minimum, jsi skvělá! 🐻‍❄️', monitor: 'minimum ✓' },
  { quote: 'Žádný stres. Tvůj budoucí pacient ti jednou poděkuje. 🩺', monitor: 'dýchací cesty ✓' },
  { quote: 'Laskavost k sobě samé je nejlepší studijní strategie. ✨', monitor: 'péče o sebe ✓' }
];

function cheerFromBear() {
  if (!heroBear || !bearBubble) return;
  heroBear.classList.remove('bear-happy');
  void heroBear.offsetWidth; // trigger reflow
  heroBear.classList.add('bear-happy');
  const cue = BEAR_CHEERS[Math.floor(Math.random() * BEAR_CHEERS.length)];
  bearBubble.textContent = cue.quote;
  if (bearMonitor) bearMonitor.textContent = cue.monitor;
  bearBubble.classList.remove('hidden');
  clearTimeout(bubbleTimer);
  bubbleTimer = setTimeout(() => {
    bearBubble.classList.add('hidden');
  }, 4000);
}

heroBear?.addEventListener('click', cheerFromBear);
heroBear?.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    cheerFromBear();
  }
});

async function apiFetch(path, options = {}) {
  const headers = new Headers(options.headers || {});
  if (accessToken()) headers.set('X-Study-Buddy-Token', accessToken());
  return fetch(path, { ...options, headers });
}

function kindLabel(item) {
  if (item.passNumber === 2) return 'Klíčové opakování';
  return ({ urgent: 'Urgent / anestezie', topic: 'Téma bloku', cards: 'Kartičky' })[item.kind] ?? 'Učení';
}

function getLearnUrl(item) {
  const portal = 'https://kintrovav.vercel.app';
  if (item.kind === 'urgent') return `${portal}/clinical-portal/`;
  if (item.sourcePath) return `${portal}${item.sourcePath}`;
  return null;
}

function populateSettings(settings) {
  if (!settings) return;
  const morningTime = $('#setting-morning-time');
  const morningEnabled = $('#setting-morning-enabled');
  const eveningTime = $('#setting-evening-time');
  const eveningEnabled = $('#setting-evening-enabled');
  const lateTime = $('#setting-late-time');
  const lateEnabled = $('#setting-late-enabled');
  const weekdayMinutes = $('#setting-weekday-minutes');
  const weekendMinutes = $('#setting-weekend-minutes');

  if (morningTime) morningTime.value = settings.morning_time || '07:30';
  if (morningEnabled) morningEnabled.checked = settings.morning_enabled !== 0;
  if (eveningTime) eveningTime.value = settings.evening_time || '20:00';
  if (eveningEnabled) eveningEnabled.checked = settings.evening_enabled !== 0;
  if (lateTime) lateTime.value = settings.late_time || '23:45';
  if (lateEnabled) lateEnabled.checked = settings.late_enabled !== 0;
  if (weekdayMinutes) weekdayMinutes.value = settings.weekday_minutes || 40;
  if (weekendMinutes) weekendMinutes.value = settings.weekend_minutes || 90;
}

function renderToday(payload) {
  today = payload;
  setup.classList.add('hidden');
  todayPanel.classList.remove('hidden');
  const date = new Date(`${payload.date}T12:00:00`).toLocaleDateString('cs-CZ', { weekday: 'long', day: 'numeric', month: 'long' });
  $('#date-label').textContent = date;
  $('#minute-count').textContent = `${payload.totalMinutes} min`;
  $('#snowflake-count').textContent = payload.bear?.snowflakes ?? 0;
  const flowerEl = $('#flower-count');
  if (flowerEl) flowerEl.textContent = payload.bear?.flowers ?? 0;
  bearTodayComplete = Boolean(payload.bear?.today);
  if (payload.bear?.today) {
    $('#bear-intro').textContent = `Dnešní Bear minimum už je hotové (${payload.bear.today.correctAnswers}/${payload.bear.today.totalQuestions}). Můžeš se zastavit — nebo si dát dalších 10 otázek jen pro radost.`;
    $('#start-bear-minimum').textContent = 'Dát si jiných 10 otázek';
  } else {
    $('#bear-intro').textContent = 'Deset ověřených otázek. I minuta se počítá.';
    $('#start-bear-minimum').textContent = '🐻‍❄️ Dát si Bear minimum (10 otázek)';
  }
  message.textContent = payload.items.length ? 'Dnešek je naplánovaný tak, aby byl proveditelný.' : 'Dnešek má být volnější. Odpočiň si bez výčitek.';
  if (payload.settings) populateSettings(payload.settings);

  $('#items').replaceChildren(...payload.items.map((item) => {
    const row = document.createElement('div');
    row.className = `item-row ${item.kind}`;

    const label = document.createElement('label');
    label.className = `item ${item.kind}`;
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.dataset.itemId = item.id;

    const text = document.createElement('span');
    const meta = document.createElement('small');
    meta.textContent = `${kindLabel(item)} · ${item.minutes} min`;
    const title = document.createElement('strong');
    title.textContent = item.label;
    text.append(meta, title);
    label.append(checkbox, text);

    const actionWrap = document.createElement('div');
    actionWrap.className = 'item-actions';

    const learnUrl = getLearnUrl(item);
    if (learnUrl) {
      const link = document.createElement('a');
      link.className = 'learn-btn';
      link.href = learnUrl;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      link.innerHTML = 'Otevřít v portálu <span aria-hidden="true">↗</span>';
      link.addEventListener('click', () => {
        row.classList.add('item-highlight');
      });
      actionWrap.append(link);
    } else if (item.kind === 'cards') {
      const cardsBtn = document.createElement('button');
      cardsBtn.type = 'button';
      cardsBtn.className = 'learn-btn cards-action-btn';
      cardsBtn.innerHTML = '🐻 Spustit kartičky';
      cardsBtn.addEventListener('click', (event) => {
        event.preventDefault();
        $('#bear-minimum').scrollIntoView({ behavior: 'smooth' });
        if (!$('#start-bear-minimum').classList.contains('hidden')) {
          $('#start-bear-minimum').click();
        }
      });
      actionWrap.append(cardsBtn);
    }

    row.append(label, actionWrap);
    return row;
  }));
}

async function fetchToday() {
  const response = await apiFetch('/api/today');
  if (!response.ok) throw new Error('Dnešní plán se nepodařilo načíst.');
  return response.json();
}

function subjectLabel(subject) {
  return ({ radiology: 'Radiologie', dermatology: 'Dermatologie', neurology: 'Neurologie' })[subject] ?? subject;
}

async function renderKeyTopics() {
  const response = await apiFetch('/api/key-topics');
  if (!response.ok) return;
  const { topics } = await response.json();
  if (!topics?.length) return;
  const groups = Object.groupBy(topics, ({ subject }) => subject);
  $('#key-topic-list').replaceChildren(...Object.entries(groups).map(([subject, entries]) => {
    const group = document.createElement('details');
    group.open = false;
    const summary = document.createElement('summary');
    summary.append(document.createTextNode(subjectLabel(subject)));
    const count = document.createElement('span');
    count.textContent = entries.length;
    summary.append(count);
    group.append(summary);
    const list = document.createElement('ul');
    entries.forEach((topic) => {
      const item = document.createElement('li');
      const title = document.createElement('strong');
      title.textContent = topic.title;
      const reason = document.createElement('small');
      reason.textContent = topic.reason;
      item.append(title, reason);
      list.append(item);
    });
    group.append(list);
    return group;
  }));
  keyTopicsPanel.classList.remove('hidden');
}

async function refresh() {
  const response = await apiFetch('/api/status');
  if (response.status === 401) {
    unlockPanel.classList.remove('hidden');
    setup.classList.add('hidden');
    todayPanel.classList.add('hidden');
    settingsPanel.classList.add('hidden');
    notificationPanel.classList.add('hidden');
    message.textContent = 'Tvůj plán je soukromý. Nejdřív ho prosím odemkni.';
    return false;
  }
  if (!response.ok) throw new Error('Plán se nepodařilo načíst.');
  const status = await response.json();
  unlockPanel.classList.add('hidden');
  if (!status.events) {
    setup.classList.remove('hidden');
    message.textContent = 'Začneme jedním malým krokem: načteme rozvrh.';
    return true;
  }
  renderToday(await fetchToday());
  bearMinimumPanel.classList.remove('hidden');
  await renderKeyTopics();
  settingsPanel.classList.remove('hidden');
  notificationPanel.classList.remove('hidden');
  await refreshPushStatus();
  return true;
}

$('#calendar-file').addEventListener('change', async (event) => {
  calendarIcs = await event.target.files[0]?.text();
  setupButton.disabled = !calendarIcs;
  setupStatus.textContent = calendarIcs ? 'Rozvrh je připravený.' : '';
});

setupButton.addEventListener('click', async () => {
  setupButton.disabled = true;
  setupStatus.textContent = 'Třídím rozvrh a rozkládám témata do klidných dnů…';
  const response = await apiFetch('/api/setup', { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ calendarIcs }) });
  const result = await response.json();
  if (!response.ok) {
    setupStatus.textContent = result.error ?? 'Nastavení neproběhlo.';
    setupButton.disabled = false;
    return;
  }
  setupStatus.textContent = result.planning.unplanned.length
    ? `Rozvrh je načtený, ale ${result.planning.unplanned.length} témat se do zvolených časových limitů nevešlo. Před nasazením upravíme kapacitu.`
    : `Hotovo: ${result.events} událostí, ${result.status.topics} témat je rozložených do bloků.`;
  await refresh();
});

async function checkIn(result) {
  const completedItemIds = [...document.querySelectorAll('[data-item-id]:checked')].map((input) => input.dataset.itemId);
  checkinStatus.textContent = 'Méďa přepočítává zbytek týdne…';
  const response = await apiFetch('/api/check-in', {
    method: 'POST', headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ result, date: today.date, completedItemIds })
  });
  const payload = await response.json();
  if (!response.ok) { checkinStatus.textContent = payload.error ?? 'Nepodařilo se to uložit.'; return; }
  checkinStatus.textContent = payload.moved ? `${payload.moved} věcí jsem laskavě přesunul na vhodnější den.` : 'Zapsáno. Skvělá práce!';
  renderToday(payload.today);
}

$('#all-done').addEventListener('click', () => checkIn('all'));
$('#partial-done').addEventListener('click', () => checkIn('partial'));
$('#nothing-done').addEventListener('click', () => checkIn('none'));

function renderBearQuestion() {
  const index = bearAnswers.length;
  const question = bearQuestions[index];
  if (!question) return;
  $('#bear-intro').textContent = `Otázka ${index + 1} z ${bearQuestions.length} · ${question.topicTitle}`;
  bearQuiz.replaceChildren();
  const prompt = document.createElement('p');
  prompt.className = 'question-prompt';
  prompt.textContent = question.question;
  bearQuiz.append(prompt);
  const options = document.createElement('div');
  options.className = 'quiz-options';
  question.options.forEach((option, answerIndex) => {
    const button = document.createElement('button');
    button.className = 'quiz-option';
    button.textContent = option;
    button.addEventListener('click', () => {
      if (bearAnswerLocked) return;
      bearAnswerLocked = true;
      button.classList.add('is-selected');
      options.querySelectorAll('button').forEach((optionButton) => { optionButton.disabled = true; });
      bearAnswers.push({ id: question.id, answerIndex });
      window.setTimeout(() => {
        bearAnswerLocked = false;
        if (bearAnswers.length < bearQuestions.length) renderBearQuestion();
        else completeBearMinimum();
      }, 130);
    });
    options.append(button);
  });
  bearQuiz.append(options);
}

async function completeBearMinimum() {
  $('#bear-status').textContent = 'Méďa kontroluje odpovědi…';
  const response = await apiFetch('/api/bear-minimum/complete', {
    method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ answers: bearAnswers })
  });
  const result = await response.json();
  if (!response.ok) {
    $('#bear-status').textContent = result.error ?? 'Vyhodnocení se nepodařilo.';
    return;
  }
  bearQuiz.classList.add('hidden');
  $('#start-bear-minimum').classList.remove('hidden');
  $('#start-bear-minimum').textContent = 'Dát si jiných 10 otázek';
  $('#bear-intro').textContent = `✨ Hotovo: ${result.correct}/${result.total}. Přibyla ti sněhová vločka do sbírky — i krátký krok se počítá!`;
  if (!bearTodayComplete) {
    $('#snowflake-count').textContent = String(Number($('#snowflake-count').textContent || 0) + 1);
  }
  bearTodayComplete = true;
  $('#bear-status').textContent = result.correct === result.total ? 'Nádhera! Teď už můžeš klidně odpočívat.' : 'Bez výčitek: tohle je mapa pro tebe, ne známkování.';
}

$('#start-bear-minimum').addEventListener('click', async () => {
  try {
    $('#bear-status').textContent = 'Vybírám deset otázek…';
    const response = await apiFetch('/api/bear-minimum');
    const payload = await response.json();
    if (!response.ok || payload.questions?.length !== 10) throw new Error(payload.error ?? 'Otázky se zatím nepodařilo připravit.');
    bearQuestions = payload.questions;
    bearAnswers = [];
    bearAnswerLocked = false;
    $('#start-bear-minimum').classList.add('hidden');
    bearQuiz.classList.remove('hidden');
    $('#bear-status').textContent = '';
    renderBearQuestion();
  } catch (error) {
    $('#bear-status').textContent = error.message;
  }
});

function base64urlToUint8Array(base64url) {
  const padded = base64url + '='.repeat((4 - (base64url.length % 4)) % 4);
  const binary = atob(padded.replace(/-/g, '+').replace(/_/g, '/'));
  return Uint8Array.from(binary, (character) => character.charCodeAt(0));
}

async function registerServiceWorker() {
  if (!('serviceWorker' in navigator) || !('PushManager' in window) || !('Notification' in window)) return null;
  return navigator.serviceWorker.register('/sw.js');
}

async function refreshPushStatus() {
  const supported = 'serviceWorker' in navigator && 'PushManager' in window && 'Notification' in window;
  if (!supported) {
    $('#enable-notifications').classList.add('hidden');
    notificationStatus.textContent = 'Tento prohlížeč nepodporuje push. Na iPhonu otevři aplikaci přidanou na plochu.';
    return;
  }
  const registration = await registerServiceWorker();
  pushSubscription = await registration.pushManager.getSubscription();
  if (Notification.permission === 'granted' && pushSubscription) {
    $('#enable-notifications').classList.add('hidden');
    $('#test-notification').classList.remove('hidden');
    notificationStatus.textContent = 'Notifikace jsou zapnuté pro toto zařízení.';
    return;
  }
  $('#enable-notifications').classList.remove('hidden');
  $('#test-notification').classList.add('hidden');
  notificationStatus.textContent = 'Zapni je jedním kliknutím. Na iPhonu musí být aplikace nejdřív přidaná na plochu.';
}

$('#unlock-button').addEventListener('click', async () => {
  const code = $('#access-code').value.trim();
  if (!code) return;
  localStorage.setItem('study-buddy-access-token', code);
  $('#unlock-status').textContent = 'Ověřuji kód…';
  try {
    const authorized = await refresh();
    if (!authorized) throw new Error('Tenhle přístupový kód neznám. Zkus prosím kód ze souboru STUDY_BUDDY_ACCESS_CODE.txt.');
    $('#unlock-status').textContent = '';
  } catch (error) {
    localStorage.removeItem('study-buddy-access-token');
    $('#unlock-status').textContent = error.message;
  }
});

$('#enable-notifications').addEventListener('click', async () => {
  try {
    notificationStatus.textContent = 'Připravuji spojení s méďou…';
    const keyResponse = await apiFetch('/api/push/public-key');
    const keyPayload = await keyResponse.json();
    if (!keyResponse.ok) throw new Error(keyPayload.error || 'Chybí nastavení push notifikací.');
    const permission = await Notification.requestPermission();
    if (permission !== 'granted') throw new Error('Notifikace nejsou povolené. Můžeš je kdykoli povolit v nastavení zařízení.');
    const registration = await registerServiceWorker();
    pushSubscription = await registration.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: base64urlToUint8Array(keyPayload.publicKey)
    });
    const response = await apiFetch('/api/push/subscribe', { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ subscription: pushSubscription.toJSON() }) });
    const result = await response.json();
    if (!response.ok) throw new Error(result.error || 'Předplatné se neuložilo.');
    await refreshPushStatus();
  } catch (error) {
    notificationStatus.textContent = error.message;
  }
});

$('#test-notification').addEventListener('click', async () => {
  try {
    notificationStatus.textContent = 'Posílám zkušební pípnutí…';
    const response = await apiFetch('/api/push/test', { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ endpoint: pushSubscription?.endpoint }) });
    const result = await response.json();
    if (!response.ok || !result.sent) throw new Error(result.error || 'Notifikace se zatím nedoručila.');
    notificationStatus.textContent = 'Odesláno — notifikace by měla za chvilku vyskočit.';
  } catch (error) {
    notificationStatus.textContent = error.message;
  }
});

settingsForm?.addEventListener('submit', async (event) => {
  event.preventDefault();
  saveSettingsButton.disabled = true;
  settingsStatus.textContent = 'Ukládám nastavení…';
  try {
    const body = {
      morning_time: $('#setting-morning-time').value,
      morning_enabled: $('#setting-morning-enabled').checked ? 1 : 0,
      evening_time: $('#setting-evening-time').value,
      evening_enabled: $('#setting-evening-enabled').checked ? 1 : 0,
      late_time: $('#setting-late-time').value,
      late_enabled: $('#setting-late-enabled').checked ? 1 : 0,
      weekday_minutes: parseInt($('#setting-weekday-minutes').value, 10),
      weekend_minutes: parseInt($('#setting-weekend-minutes').value, 10)
    };
    const response = await apiFetch('/api/settings', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(body)
    });
    const result = await response.json();
    if (!response.ok) throw new Error(result.error || 'Nepodařilo se uložit nastavení.');
    populateSettings(result.settings);
    settingsStatus.textContent = '✨ Nastavení bylo uloženo. Méďa se přizpůsobil.';
  } catch (error) {
    settingsStatus.textContent = error.message;
  } finally {
    saveSettingsButton.disabled = false;
  }
});

replanButton?.addEventListener('click', async () => {
  replanButton.disabled = true;
  settingsStatus.textContent = 'Ukládám nastavení a přepočítávám plán…';
  try {
    const body = {
      morning_time: $('#setting-morning-time').value,
      morning_enabled: $('#setting-morning-enabled').checked ? 1 : 0,
      evening_time: $('#setting-evening-time').value,
      evening_enabled: $('#setting-evening-enabled').checked ? 1 : 0,
      late_time: $('#setting-late-time').value,
      late_enabled: $('#setting-late-enabled').checked ? 1 : 0,
      weekday_minutes: parseInt($('#setting-weekday-minutes').value, 10),
      weekend_minutes: parseInt($('#setting-weekend-minutes').value, 10)
    };
    const settingsResponse = await apiFetch('/api/settings', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(body)
    });
    const settingsResult = await settingsResponse.json();
    if (!settingsResponse.ok) throw new Error(settingsResult.error || 'Nepodařilo se uložit nastavení.');
    populateSettings(settingsResult.settings);
    const response = await apiFetch('/api/replan', { method: 'POST' });
    const result = await response.json();
    if (!response.ok) throw new Error(result.error || 'Přeplánování selhalo.');
    renderToday(result.today);
    await renderKeyTopics();
    settingsStatus.textContent = `🌱 Plán byl přepočítán (naplánováno ${result.planning.scheduled} kroků).`;
  } catch (error) {
    settingsStatus.textContent = error.message;
  } finally {
    replanButton.disabled = false;
  }
});

refresh().catch((error) => { message.textContent = error.message; });
