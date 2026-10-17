'use strict';

let connection;
let rawAngles = { alpha: 0, beta: 0, gamma: 0 };
let zeroAngles = null;
let currentAngles = { pitch: 0, roll: 0, yaw: 0 };
let isFrozen = false;
let currentGain = 1;
let activeCase = 'physiological';
let inputMode = null;
let telemetryTimer = null;
let sensorTimeout = null;
let orientationEventType = null;
const element = (id) => document.getElementById(id);
const roomId = new URLSearchParams(window.location.search).get('room');
const clampAngle = (value) => Math.max(-25, Math.min(25, value));

window.addEventListener('DOMContentLoaded', () => {
  if (roomId) {
    connection = new UsgConnection('probe', handleConnectionState, handleStationData);
    connection.initProbe(roomId);
    connection.sendTelemetry({ type: 'request-state' });
  } else {
    element('probeConnText').textContent = 'Bez připojeného monitoru';
    element('probeMessage').textContent = 'Chybí kód místnosti. Na monitoru zvolte Telefon jako sonda a otevřete jeho QR kód. Ovládání si můžete vyzkoušet i zde.';
  }
  if (!window.isSecureContext || typeof DeviceOrientationEvent === 'undefined') {
    element('enableSensorsBtn').disabled = true;
    element('sensorHelp').textContent = !window.isSecureContext
      ? 'Gyroskop vyžaduje HTTPS. Na této adrese použijte dotykové ovládání.'
      : 'Tento prohlížeč nenabízí pohybové senzory. Použijte dotykové ovládání.';
  }
  element('enableSensorsBtn').addEventListener('click', requestSensorPermission);
  element('enableTouchBtn').addEventListener('click', () => selectInputMode('touch'));
  element('changeModeBtn').addEventListener('click', () => {
    element('permissionOverlay').hidden = false;
    const button = element('enableSensorsBtn').disabled ? element('enableTouchBtn') : element('enableSensorsBtn');
    button.focus();
  });
  element('zeroBtn').addEventListener('click', zeroCalibrate);
  element('probeFreezeBtn').addEventListener('click', () => {
    isFrozen = !isFrozen;
    sendControls({ frozen: isFrozen });
    updateControls();
    triggerHaptic([25]);
  });
  element('gainSlider').addEventListener('input', (event) => {
    currentGain = Number(event.target.value);
    sendControls({ gain: currentGain });
    updateControls();
  });
  element('probeYaw').addEventListener('input', (event) => {
    if (inputMode !== 'touch' || isFrozen) return;
    currentAngles.yaw = Number(event.target.value);
    updateProbeVisuals();
  });
  document.querySelectorAll('[data-case]').forEach((button) => {
    button.addEventListener('click', () => {
      activeCase = button.dataset.case;
      sendControls({ activeCase });
      updateControls();
    });
  });
  setupTouchControls();
});

function handleConnectionState(state) {
  const messages = {
    connected: 'Monitor připojen',
    disconnected: 'Monitor odpojen',
    error: 'Spojení se nezdařilo',
    local: 'Pouze místní režim',
    'local-data': 'Monitor v tomto prohlížeči'
  };
  element('probeConnText').textContent = messages[state] || 'Připojování…';
  element('probeConnDot').classList.toggle('connected', state === 'connected' || state === 'local-data');
  element('probeConnDot').classList.toggle('error', state === 'error' || state === 'disconnected');
  if (state === 'connected') connection.sendTelemetry({ type: 'request-state' });
  if (state === 'error' || state === 'disconnected') {
    element('probeMessage').textContent = 'Zkontrolujte připojení a znovu otevřete aktuální QR kód na monitoru.';
  }
}

function handleStationData(data) {
  if (!data || data.type !== 'controls') return;
  if (typeof data.frozen === 'boolean') isFrozen = data.frozen;
  if (Number.isFinite(data.gain)) currentGain = Math.max(0.5, Math.min(1.6, data.gain));
  if (['physiological', 'pericardial_effusion'].includes(data.activeCase)) activeCase = data.activeCase;
  if (data.calibrate === true) zeroCalibrate();
  updateControls();
}

function sendControls(data) {
  connection?.sendTelemetry({ type: 'controls', ...data });
}

async function requestSensorPermission() {
  const button = element('enableSensorsBtn');
  button.disabled = true;
  try {
    if (typeof DeviceOrientationEvent.requestPermission === 'function') {
      const result = await DeviceOrientationEvent.requestPermission();
      if (result !== 'granted') {
        selectInputMode('touch');
        element('probeMessage').textContent = 'Přístup k senzorům byl zamítnut. Dotykové ovládání je připravené.';
        return;
      }
    }
    selectInputMode('sensor');
  } catch (error) {
    console.warn('[USG] Sensor permission failed:', error);
    selectInputMode('touch');
    element('probeMessage').textContent = 'Gyroskop se nepodařilo aktivovat. Pokračujte dotykem nebo zkontrolujte oprávnění prohlížeče.';
  } finally {
    button.disabled = false;
  }
}

function selectInputMode(mode) {
  inputMode = mode;
  clearTimeout(sensorTimeout);
  window.removeEventListener('deviceorientation', handleOrientation);
  window.removeEventListener('deviceorientationabsolute', handleOrientation);
  orientationEventType = null;
  zeroAngles = null;
  currentAngles = { pitch: 0, roll: 0, yaw: 0 };
  element('permissionOverlay').hidden = true;
  element('changeModeBtn').hidden = false;
  element('inputModeLabel').textContent = mode === 'sensor' ? 'GYROSKOP AKTIVNÍ' : 'DOTYKOVÉ OVLÁDÁNÍ';
  if (roomId) element('probeMessage').textContent = '';
  element('touchYawControl').hidden = mode !== 'touch';
  if (mode === 'sensor') {
    window.addEventListener('deviceorientation', handleOrientation);
    window.addEventListener('deviceorientationabsolute', handleOrientation);
    sensorTimeout = setTimeout(() => {
      if (zeroAngles !== null) return;
      selectInputMode('touch');
      element('probeMessage').textContent = 'Senzor neposílá data. Použijte dotyk nebo zkontrolujte oprávnění k pohybovým senzorům.';
    }, 3000);
  }
  if (telemetryTimer === null) telemetryTimer = setInterval(sendTelemetryPacket, 33);
  updateProbeVisuals();
  element('visualizerArea').focus({ preventScroll: true });
}

function handleOrientation(event) {
  if (inputMode !== 'sensor' || !Number.isFinite(event.beta) || !Number.isFinite(event.gamma)) return;
  if (orientationEventType !== null && orientationEventType !== event.type) return;
  orientationEventType = event.type;
  rawAngles = { alpha: Number.isFinite(event.alpha) ? event.alpha : 0, beta: event.beta, gamma: event.gamma };
  if (zeroAngles === null) zeroAngles = { ...rawAngles };
  const delta = (angle, zero) => ((angle - zero + 540) % 360) - 180;
  currentAngles = {
    pitch: delta(rawAngles.beta, zeroAngles.beta),
    roll: delta(rawAngles.gamma, zeroAngles.gamma),
    yaw: delta(rawAngles.alpha, zeroAngles.alpha)
  };
  updateProbeVisuals();
}

function zeroCalibrate() {
  if (inputMode === 'sensor' && zeroAngles !== null) zeroAngles = { ...rawAngles };
  currentAngles = { pitch: 0, roll: 0, yaw: 0 };
  updateProbeVisuals();
  sendTelemetryPacket();
  triggerHaptic([30]);
}

function updateControls() {
  element('probeFreezeBtn').setAttribute('aria-pressed', String(isFrozen));
  element('freezeBtnText').textContent = isFrozen ? 'Obnovit obraz' : 'Zmrazit obraz';
  element('gainSlider').value = currentGain;
  element('gainValText').textContent = Math.round(currentGain * 50) + ' dB';
  element('probeYaw').disabled = isFrozen;
  document.querySelectorAll('[data-case]').forEach((button) => {
    button.setAttribute('aria-pressed', String(button.dataset.case === activeCase));
  });
  updateProbeVisuals();
}

function updateProbeVisuals() {
  ['pitch', 'roll', 'yaw'].forEach((axis) => {
    element(`lbl${axis[0].toUpperCase()}${axis.slice(1)}`).textContent = currentAngles[axis].toFixed(1) + '°';
  });
  element('probeYaw').value = currentAngles.yaw;
  element('probeYawValue').textContent = currentAngles.yaw.toFixed(1) + '°';
  element('probeModel').style.transform = `rotateZ(${currentAngles.roll}deg) rotateX(${-currentAngles.pitch}deg) rotateY(${currentAngles.yaw * 0.5}deg)`;
  const aligned = Math.hypot(currentAngles.pitch, currentAngles.roll, currentAngles.yaw) < 4;
  const hud = element('probeHudState');
  hud.classList.toggle('perfect', aligned && inputMode !== null && !isFrozen);
  hud.textContent = isFrozen ? 'Obraz je zmrazený. Pokračujte tlačítkem Obnovit obraz.'
    : inputMode === null ? 'Vyberte gyroskop nebo dotykové ovládání.'
    : inputMode === 'touch' ? 'Tažením naklánějte a otáčejte sondu. Posuvníkem níže měníte vychýlení.'
    : aligned ? 'Sonda je vyrovnaná v referenční poloze PLAX.'
    : 'Upravte náklon a rotaci k vyrovnání řezu.';
}

function sendTelemetryPacket() {
  if (inputMode === null) return;
  connection?.sendTelemetry({ ...currentAngles });
}

function setupTouchControls() {
  const area = element('visualizerArea');
  let drag = null;
  area.addEventListener('pointerdown', (event) => {
    if (inputMode !== 'touch' || isFrozen || event.button !== 0 || !event.isPrimary) return;
    drag = { id: event.pointerId, x: event.clientX, y: event.clientY, ...currentAngles };
    area.setPointerCapture(event.pointerId);
    area.focus({ preventScroll: true });
  });
  area.addEventListener('pointermove', (event) => {
    if (!drag || drag.id !== event.pointerId || inputMode !== 'touch' || isFrozen) return;
    currentAngles.pitch = clampAngle(drag.pitch + (event.clientY - drag.y) * 0.2);
    currentAngles.roll = clampAngle(drag.roll + (event.clientX - drag.x) * 0.2);
    updateProbeVisuals();
  });
  ['pointerup', 'pointercancel', 'lostpointercapture'].forEach((name) => {
    area.addEventListener(name, () => { drag = null; });
  });
  area.addEventListener('keydown', (event) => {
    if (inputMode !== 'touch' || isFrozen || event.ctrlKey || event.metaKey || event.altKey) return;
    const movement = {
      ArrowUp: ['pitch', -1], ArrowDown: ['pitch', 1],
      ArrowLeft: ['roll', -1], ArrowRight: ['roll', 1],
      a: ['yaw', -1], d: ['yaw', 1]
    }[event.key];
    if (!movement) return;
    event.preventDefault();
    const [axis, direction] = movement;
    currentAngles[axis] = clampAngle(currentAngles[axis] + direction);
    updateProbeVisuals();
  });
}

function triggerHaptic(pattern) {
  if (navigator.vibrate) navigator.vibrate(pattern);
}
