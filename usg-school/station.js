'use strict';

let engine;
let connection;
let inputMode = 'local';
let probeUrl = '';

const element = (id) => document.getElementById(id);
const setText = (id, text) => {
  if (element(id).textContent !== text) element(id).textContent = text;
};
const axes = ['pitch', 'roll', 'yaw'];
const clampAngle = (value) => Math.max(-25, Math.min(25, value));

window.addEventListener('DOMContentLoaded', () => {
  engine = new UsgEngine('usgCanvas', 'ecgCanvas', 'gizmoCanvas');
  connection = new UsgConnection('station', handleConnectionState, handleProbeData);
  connection.initStation();

  element('localModeBtn').addEventListener('click', () => setInputMode('local'));
  element('phoneModeBtn').addEventListener('click', () => setInputMode('probe'));
  element('stationFreezeBtn').addEventListener('click', toggleFreeze);
  element('calibrateBtn').addEventListener('click', calibrateProbe);
  element('stationGain').addEventListener('input', (event) => applyControls({ gain: Number(event.target.value) }));
  element('copyProbeUrlBtn').addEventListener('click', copyProbeLink);
  document.querySelectorAll('[data-case]').forEach((button) => {
    button.addEventListener('click', () => applyControls({ activeCase: button.dataset.case }));
  });
  axes.forEach((axis) => {
    element(`${axis}Slider`).addEventListener('input', (event) => {
      if (inputMode === 'local' && !engine.isFrozen) {
        engine.setProbeData({ [axis]: Number(event.target.value) });
        updateTelemetryUI();
      }
    });
  });
  setupCanvasControls();
  updateTelemetryUI();
  setInterval(updateTelemetryUI, 50);
});

function handleConnectionState(state, value) {
  const messages = {
    ready: 'Čekám na telefon',
    connected: 'Telefon připojen',
    local: 'Párování přes síť není dostupné. Fungují jen karty tohoto prohlížeče.',
    'local-data': 'Sonda dostupná v tomto prohlížeči',
    disconnected: 'Telefon odpojen. Znovu otevřete odkaz na sondu.',
    error: 'Spojení se nezdařilo. Můžete ovládat na tomto zařízení.'
  };
  element('connStatusText').textContent = messages[state] || 'Připojování…';
  element('connDot').classList.toggle('connected', state === 'connected' || state === 'local-data');
  element('connDot').classList.toggle('error', state === 'error' || state === 'disconnected');
  if (state === 'ready') {
    element('roomIdBadge').textContent = value;
    generateQrCode(value);
  }
  if (state === 'connected') sendControlState();
}

function handleProbeData(data) {
  if (!data || typeof data !== 'object') return;
  if (data.type === 'request-state') {
    sendControlState();
    return;
  }
  if (inputMode !== 'probe') return;
  if (data.type === 'controls') {
    applyControls(data, false);
  } else {
    engine.setProbeData({ pitch: data.pitch, roll: data.roll, yaw: data.yaw });
  }
}

function sendControlState() {
  connection.sendTelemetry({
    type: 'controls',
    gain: engine.gain,
    frozen: engine.isFrozen,
    activeCase: engine.activeCase
  });
}

function setInputMode(mode) {
  inputMode = mode;
  const remote = mode === 'probe';
  element('localModeBtn').setAttribute('aria-pressed', String(!remote));
  element('phoneModeBtn').setAttribute('aria-pressed', String(remote));
  element('phonePanel').hidden = !remote;
  element('usgCanvas').dataset.remote = String(remote);
  element('calibrateText').textContent = remote ? 'Kalibrovat 0°' : 'Vyrovnat sondu';
  element('controlModeHelp').textContent = remote
    ? 'Naskenujte kód níže. Polohu řídí telefon, jas a scénář lze měnit na obou zařízeních.'
    : 'Bez párování. Použijte obraz nebo posuvníky níže.';
  if (remote) sendControlState();
  else engine.setProbeData(Object.fromEntries(axes.map((axis) => [axis, clampAngle(engine.targetOrientation[axis])])));
  updateTelemetryUI();
}

function applyControls(data, send = true) {
  engine.setProbeData({ gain: data.gain, frozen: data.frozen, activeCase: data.activeCase });
  if (send && inputMode === 'probe') sendControlState();
  updateTelemetryUI();
}

function toggleFreeze() {
  applyControls({ frozen: !engine.isFrozen });
}

function calibrateProbe() {
  engine.zeroOffset = { pitch: 0, roll: 0, yaw: 0 };
  engine.targetOrientation = { pitch: 0, roll: 0, yaw: 0 };
  if (!engine.isFrozen) engine.currentOrientation = { pitch: 0, roll: 0, yaw: 0 };
  if (inputMode === 'probe') connection.sendTelemetry({ type: 'controls', calibrate: true });
  updateTelemetryUI();
}

function updateTelemetryUI() {
  axes.forEach((axis) => {
    const value = engine.targetOrientation[axis];
    element(`${axis}Slider`).value = value;
    setText(`val${axis[0].toUpperCase()}${axis.slice(1)}`, value.toFixed(1) + '°');
  });
  element('angleControls').disabled = inputMode === 'probe' || engine.isFrozen;
  setText('accuracyPercent', engine.accuracyScore + '%');
  element('accuracyBar').style.width = engine.accuracyScore + '%';
  element('accuracyMeter').setAttribute('aria-valuenow', engine.accuracyScore);
  setText('guideFeedback', engine.guidanceText);
  element('stationGain').value = engine.gain;
  setText('stationGainValue', `${Math.round(engine.gain * 50)} dB`);
  setText('gainDisplay', `Gain ${Math.round(engine.gain * 50)} dB`);
  element('stationFreezeBtn').setAttribute('aria-pressed', String(engine.isFrozen));
  setText('freezeIcon', engine.isFrozen ? '▷' : 'Ⅱ');
  setText('freezeText', engine.isFrozen ? 'Obnovit obraz' : 'Zmrazit obraz');
  setText('scanState', engine.isFrozen ? 'Zmrazeno' : 'Živý obraz');
  element('scanState').classList.toggle('frozen', engine.isFrozen);
  element('usgCanvas').dataset.frozen = String(engine.isFrozen);
  document.querySelectorAll('[data-case]').forEach((button) => {
    const active = button.dataset.case === engine.activeCase;
    button.classList.toggle('active', active);
    button.setAttribute('aria-pressed', String(active));
  });
  setText('activeCaseTitle', engine.activeCase === 'physiological'
    ? 'Fyziologický PLAX' : 'Perikardiální výpotek');
}

function setupCanvasControls() {
  const canvas = element('usgCanvas');
  let drag = null;
  canvas.addEventListener('pointerdown', (event) => {
    if (event.button !== 0 || !event.isPrimary || inputMode !== 'local' || engine.isFrozen) return;
    drag = { id: event.pointerId, x: event.clientX, y: event.clientY, ...engine.targetOrientation };
    canvas.setPointerCapture(event.pointerId);
    canvas.focus({ preventScroll: true });
  });
  canvas.addEventListener('pointermove', (event) => {
    if (!drag || drag.id !== event.pointerId || inputMode !== 'local' || engine.isFrozen) return;
    engine.setProbeData({
      pitch: clampAngle(drag.pitch + (event.clientY - drag.y) * 0.15),
      roll: clampAngle(drag.roll + (event.clientX - drag.x) * 0.15)
    });
  });
  ['pointerup', 'pointercancel', 'lostpointercapture'].forEach((name) => {
    canvas.addEventListener(name, () => { drag = null; });
  });
  canvas.addEventListener('keydown', (event) => {
    if (event.ctrlKey || event.metaKey || event.altKey) return;
    const key = event.key.toLowerCase();
    if (key === 'f' || key === 'r') {
      event.preventDefault();
      if (!event.repeat) key === 'f' ? toggleFreeze() : calibrateProbe();
      return;
    }
    const movement = {
      arrowup: ['pitch', -1], arrowdown: ['pitch', 1],
      arrowleft: ['roll', -1], arrowright: ['roll', 1],
      a: ['yaw', -1], d: ['yaw', 1]
    }[key];
    if (!movement || inputMode !== 'local' || engine.isFrozen) return;
    event.preventDefault();
    const [axis, direction] = movement;
    engine.setProbeData({ [axis]: clampAngle(engine.targetOrientation[axis] + direction) });
    updateTelemetryUI();
  });
}

async function generateQrCode(roomId) {
  const url = new URL('probe.html', window.location.href);
  url.searchParams.set('room', roomId);
  if (['localhost', '127.0.0.1', '[::1]'].includes(url.hostname)) {
    try {
      const response = await fetch('/api/lan-ip');
      if (!response.ok) throw new Error(`LAN address request failed: ${response.status}`);
      const data = await response.json();
      if (typeof data.ip === 'string' && data.ip !== '127.0.0.1') {
        url.hostname = data.ip;
        if (data.port) url.port = data.port;
      } else {
        element('connectionHelp').textContent = 'Odkaz je dostupný jen na tomto počítači. Pro telefon otevřete monitor přes adresu dostupnou v síti; gyroskop vyžaduje HTTPS.';
      }
    } catch (error) {
      console.warn('[USG] LAN address unavailable:', error);
      element('connectionHelp').textContent = 'Síťovou adresu se nepodařilo zjistit. Otevřete monitor přes adresu dostupnou z telefonu; gyroskop vyžaduje HTTPS.';
    }
  }
  if (connection.roomId !== roomId) return;
  probeUrl = url.href;
  element('probeDirectUrlText').textContent = probeUrl;
  element('probeDirectUrlText').href = probeUrl;
  element('copyProbeUrlBtn').disabled = false;
  const container = element('qrcode');
  container.replaceChildren();
  if (typeof QRCode === 'undefined') {
    container.textContent = 'QR kód není dostupný. Použijte odkaz níže.';
    return;
  }
  new QRCode(container, {
    text: probeUrl, width: 140, height: 140,
    colorDark: '#0b111b', colorLight: '#ffffff', correctLevel: QRCode.CorrectLevel.M
  });
  container.querySelector('img')?.setAttribute('alt', 'QR kód pro připojení telefonu');
}

async function copyProbeLink() {
  try {
    await navigator.clipboard.writeText(probeUrl);
    element('copyStatus').textContent = 'Odkaz je zkopírovaný.';
  } catch (error) {
    console.warn('[USG] Clipboard unavailable:', error);
    element('copyStatus').textContent = 'Kopírování není dostupné. Označte a zkopírujte odkaz nad tlačítkem.';
    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(element('probeDirectUrlText'));
    selection.removeAllRanges();
    selection.addRange(range);
  }
}
