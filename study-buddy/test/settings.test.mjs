import test from 'node:test';
import assert from 'node:assert/strict';
import { notificationFor } from '../src/reminders.js';
import { validateReminderTimes } from '../src/settings.js';

test('připomínky akceptují pouze čtvrthodiny', () => {
  assert.equal(validateReminderTimes({
    morning_time: '07:30', morning_enabled: 1,
    evening_time: '20:00', evening_enabled: 1,
    late_time: '23:45', late_enabled: 1
  }).ok, true);
  assert.equal(validateReminderTimes({
    morning_time: '07:32', morning_enabled: 1,
    evening_time: '20:00', evening_enabled: 1,
    late_time: '23:45', late_enabled: 1
  }).ok, false);
});

test('dvě zapnuté připomínky nemohou sdílet stejný čas', () => {
  const result = validateReminderTimes({
    morning_time: '07:30', morning_enabled: 1,
    evening_time: '07:30', evening_enabled: 1,
    late_time: '23:45', late_enabled: 0
  });
  assert.equal(result.ok, false);
  assert.match(result.error, /každý svůj čas/);
});

test('ranní notifikace obsahuje laskavý souhrn', () => {
  const notif = notificationFor('morning-plan', {
    date: '2026-10-05',
    items: [
      { kind: 'topic', label: 'CT princip' },
      { kind: 'urgent', label: 'Tachykardie' }
    ]
  });
  assert.match(notif.title, /Dobré ráno/);
  assert.match(notif.body, /1 téma, 1 urgentní téma/);
});

test('večerní check-in nabízí laskavé možnosti', () => {
  const notif = notificationFor('evening-check-in', { date: '2026-10-05', items: [] });
  assert.equal(notif.title, '🐻‍❄️ Jemný večerní check-in');
  assert.match(notif.body, /laskavě/);
});

test('noční připomínka je nenásilná', () => {
  const notif = notificationFor('late-check-in', { date: '2026-10-05', items: [] });
  assert.equal(notif.title, '🐻‍❄️ Ještě minutka před spaním');
  assert.match(notif.body, /dnešní check-in/);
});
