import test from 'node:test';
import assert from 'node:assert/strict';
import { gradeBearMinimum, pickBearMinimum } from '../src/bear-minimum.js';

const catalog = [
  { id: 'a', topicId: 'topic-1', question: 'A?', options: ['a', 'b'], correctIndex: 1, explanation: 'Proto B.' },
  { id: 'b', topicId: 'topic-1', question: 'B?', options: ['a', 'b'], correctIndex: 0, explanation: 'Proto A.' },
  { id: 'c', topicId: 'topic-2', question: 'C?', options: ['a', 'b'], correctIndex: 0, explanation: 'Proto A.' }
];

test('Bear minimum neposílá správné odpovědi do prohlížeče a neopakuje téma', () => {
  const picked = pickBearMinimum(catalog, 5, () => 0.5);
  assert.equal(picked.length, 2);
  assert.equal(new Set(picked.map((question) => question.topicId)).size, 2);
  assert.equal('correctIndex' in picked[0], false);
  assert.equal('explanation' in picked[0], false);
});

test('Bear minimum vyhodnocuje odpovědi pouze na serveru', () => {
  assert.deepEqual(gradeBearMinimum(catalog, [{ id: 'a', answerIndex: 1 }, { id: 'c', answerIndex: 1 }]), {
    total: 2,
    correct: 1,
    results: [
      { id: 'a', correct: true, explanation: 'Proto B.' },
      { id: 'c', correct: false, explanation: 'Proto A.' }
    ]
  });
});
