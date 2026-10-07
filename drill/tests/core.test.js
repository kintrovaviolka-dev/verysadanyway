const test = require('node:test');
const assert = require('node:assert/strict');
const core = require('../core.js');

test('daily selection prefers oldest due cards and is capped at 20', () => {
  const questions = Array.from({ length: 25 }, (_, index) => ({ id: `q-${index}` }));
  const states = new Map(questions.map((question, index) => [question.id, { nextReviewDate: 100 + index }]));
  const result = core.getDailySelection(questions, states, 200, 20);

  assert.equal(result.questions.length, 20);
  assert.equal(result.dueCount, 25);
  assert.equal(result.remainingDue, 5);
  assert.equal(result.newCount, 0);
  assert.deepEqual(result.questions.map(question => question.id), questions.slice(0, 20).map(question => question.id));
});

test('daily selection fills a short due queue with new cards', () => {
  const questions = [{ id: 'due' }, { id: 'fresh-b' }, { id: 'fresh-a' }];
  const states = new Map([['due', { nextReviewDate: 10 }]]);
  const result = core.getDailySelection(questions, states, 10, 20);

  assert.deepEqual(result.questions.map(question => question.id), ['due', 'fresh-a', 'fresh-b']);
  assert.equal(result.newCount, 2);
});

test('case-study ratings map to the agreed SRS boxes', () => {
  assert.deepEqual(core.getSrsRatingUpdate({ box: 4 }, 'bad', 0), {
    box: 1, intervalDays: 1, isCorrect: false, nextReviewDate: 86400000
  });
  assert.deepEqual(core.getSrsRatingUpdate({ box: 4 }, 'medium', 0), {
    box: 2, intervalDays: 3, isCorrect: true, nextReviewDate: 259200000
  });
  assert.equal(core.getSrsRatingUpdate({ box: 4 }, 'good', 0).box, 5);
});

test('sprint countdown never returns negative seconds', () => {
  assert.equal(core.getRemainingSeconds(1000, 0), 1);
  assert.equal(core.getRemainingSeconds(1000, 1000), 0);
  assert.equal(core.getRemainingSeconds(1000, 2000), 0);
});

test('local day keys do not use UTC conversion and revisions compare safely', () => {
  const local = new Date(2026, 9, 7, 0, 5).getTime();
  assert.equal(core.localDateKey(local), '2026-10-07');
  assert.equal(core.isNewerRevision('2026.3.0', '2026.2.0'), true);
  assert.equal(core.isNewerRevision('2026.3.0', '2026.3.0'), false);
});
