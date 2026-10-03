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
const bearQuiz = $('#bear-quiz');
let bearQuestions = [];
let bearAnswers = [];

const accessToken = () => localStorage.getItem('study-buddy-access-token') || '';

async function apiFetch(path, options = {}) {
  const headers = new Headers(options.headers || {});
  if (accessToken()) headers.set('X-Study-Buddy-Token', accessToken());
  return fetch(path, { ...options, headers });
}

function kindLabel(kind) {
  return ({ urgent: 'Urgent / anestezie', topic: 'Téma bloku', cards: 'Kartičky' })[kind] ?? 'Učení';
}

function renderToday(payload) {
  today = payload;
  setup.classList.add('hidden');
  todayPanel.classList.remove('hidden');
  const date = new Date(`${payload.date}T12:00:00`).toLocaleDateString('cs-CZ', { weekday: 'long', day: 'numeric', month: 'long' });
  $('#date-label').textContent = date;
  $('#minute-count').textContent = `${payload.totalMinutes} min`;
  message.textContent = payload.items.length ? 'Dnešek je naplánovaný tak, aby byl proveditelný.' : 'Dnešek má být volnější. Odpočiň si bez výčitek.';
  $('#items').replaceChildren(...payload.items.map((item) => {
    const label = document.createElement('label');
    label.className = `item ${item.kind}`;
    label.innerHTML = `<input type="checkbox" data-item-id="${item.id}" /><span><small>${kindLabel(item.kind)} · ${item.minutes} min</small><strong>${item.label}</strong></span>`;
    return label;
  }));
}

async function fetchToday() {
  const response = await apiFetch('/api/today');
  if (!response.ok) throw new Error('Dnešní plán se nepodařilo načíst.');
  return response.json();
}

async function refresh() {
  const response = await apiFetch('/api/status');
  if (response.status === 401) {
    unlockPanel.classList.remove('hidden');
    setup.classList.add('hidden');
    todayPanel.classList.add('hidden');
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
  checkinStatus.textContent = 'Medvídek přepočítává zbytek týdne…';
  const response = await apiFetch('/api/check-in', {
    method: 'POST', headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ result, date: today.date, completedItemIds })
  });
  const payload = await response.json();
  if (!response.ok) { checkinStatus.textContent = payload.error ?? 'Nepodařilo se to uložit.'; return; }
  checkinStatus.textContent = payload.moved ? `${payload.moved} věcí jsem laskavě přesunul na vhodnější den.` : 'Zapsáno. Dobrá práce.';
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
      bearAnswers.push({ id: question.id, answerIndex });
      if (bearAnswers.length < bearQuestions.length) renderBearQuestion();
      else completeBearMinimum();
    });
    options.append(button);
  });
  bearQuiz.append(options);
}

async function completeBearMinimum() {
  $('#bear-status').textContent = 'Medvídek kontroluje odpovědi…';
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
  $('#start-bear-minimum').textContent = 'Dát si jiných 5 otázek';
  $('#bear-intro').textContent = `✨ Hotovo: ${result.correct}/${result.total}. Medvídek ti přidal sněhovou vločku — i krátký krok se počítá.`;
  $('#bear-status').textContent = result.correct === result.total ? 'Nádhera. Teď už můžeš klidně skončit.' : 'Bez výčitek: tohle je mapa, ne známkování.';
}

$('#start-bear-minimum').addEventListener('click', async () => {
  try {
    $('#bear-status').textContent = 'Vybírám pět otázek…';
    const response = await apiFetch('/api/bear-minimum');
    const payload = await response.json();
    if (!response.ok || payload.questions?.length !== 5) throw new Error(payload.error ?? 'Otázky se zatím nepodařilo připravit.');
    bearQuestions = payload.questions;
    bearAnswers = [];
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
    notificationStatus.textContent = 'Připravuji spojení s medvídkem…';
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

refresh().catch((error) => { message.textContent = error.message; });
