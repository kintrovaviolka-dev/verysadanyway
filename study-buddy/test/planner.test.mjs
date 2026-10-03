import test from 'node:test';
import assert from 'node:assert/strict';
import { classifyCourse, findFirstFittingDate, parseIcsEvents, studyCapacity } from '../src/planner.js';
import { notificationFor } from '../src/reminders.js';

test('rozpozná předměty z názvu události', () => {
  assert.equal(classifyCourse('UZM/9RAOL - Přednáška (Radiation protection)').subject, 'radiology');
  assert.equal(classifyCourse('KNP/9NE1L - Cvičení (Neurology I.)').subject, 'neurology');
  assert.equal(classifyCourse('Neznámá akce'), null);
});

test('načte iCal včetně zalomeného řádku', () => {
  const events = parseIcsEvents('BEGIN:VEVENT\nUID:test-1\nDTSTART;TZID=Europe/Prague:20261012T085500\nDTEND;TZID=Europe/Prague:20261012T122500\nSUMMARY:KNP/9NE1L - Cvičení (Neurology I.)\nLOCATION:X032\nEND:VEVENT\n');
  assert.deepEqual(events[0], {
    id: 'test-1', startsAt: '2026-10-12T08:55:00', endsAt: '2026-10-12T12:25:00', studyDate: '2026-10-12',
    summary: 'KNP/9NE1L - Cvičení (Neurology I.)', subject: 'neurology', location: 'X032'
  });
});

test('kapacita chrání pracovní den s dlouhou výukou', () => {
  assert.equal(studyCapacity({ date: '2026-10-12', busyMinutes: 330 }), 10);
  assert.equal(studyCapacity({ date: '2026-10-17', busyMinutes: 600 }), 90);
});

test('rest hledá nejbližší den, do kterého se vejde', () => {
  const used = new Map([['2026-10-05', 35], ['2026-10-06', 10]]);
  const capacity = new Map([['2026-10-05', 40], ['2026-10-06', 40]]);
  assert.equal(findFirstFittingDate({ startDate: '2026-10-05', endDate: '2026-10-06', minutes: 18, usedByDate: used, capacityByDate: capacity }), '2026-10-06');
});

test('ranní notifikace shrne skutečný plán', () => {
  const reminder = notificationFor('morning-plan', { date: '2026-10-05', items: [{ kind: 'topic' }, { kind: 'topic' }, { kind: 'urgent' }, { kind: 'cards' }] });
  assert.match(reminder.body, /2 témata/);
  assert.match(reminder.body, /urgentní téma/);
});
