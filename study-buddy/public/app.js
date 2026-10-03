let calendarIcs = null;
let today = null;

const $ = (selector) => document.querySelector(selector);
const message = $('#message');
const setup = $('#setup');
const todayPanel = $('#today');
const setupButton = $('#setup-button');
const setupStatus = $('#setup-status');
const checkinStatus = $('#checkin-status');

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
  const response = await fetch('/api/today');
  if (!response.ok) throw new Error('Dnešní plán se nepodařilo načíst.');
  return response.json();
}

async function refresh() {
  const status = await (await fetch('/api/status')).json();
  if (!status.events) {
    setup.classList.remove('hidden');
    message.textContent = 'Začneme jedním malým krokem: načteme rozvrh.';
    return;
  }
  renderToday(await fetchToday());
}

$('#calendar-file').addEventListener('change', async (event) => {
  calendarIcs = await event.target.files[0]?.text();
  setupButton.disabled = !calendarIcs;
  setupStatus.textContent = calendarIcs ? 'Rozvrh je připravený.' : '';
});

setupButton.addEventListener('click', async () => {
  setupButton.disabled = true;
  setupStatus.textContent = 'Třídím rozvrh a rozkládám témata do klidných dnů…';
  const response = await fetch('/api/setup', { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ calendarIcs }) });
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
  const response = await fetch('/api/check-in', {
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

refresh().catch((error) => { message.textContent = error.message; });
