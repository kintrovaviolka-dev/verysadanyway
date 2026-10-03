import test from 'node:test';
import assert from 'node:assert/strict';
import { KEY_TOPICS } from '../src/key-topics.generated.js';
import { TOPIC_CATALOG } from '../src/catalog.generated.js';
import { isActiveThisSemester } from '../src/curriculum.js';

test('AI výběr je pod deseti tématy na blok a obsahuje jen aktivní katalog', () => {
  const catalog = new Map(TOPIC_CATALOG.map((topic) => [topic.id, topic]));
  for (const subject of ['radiology', 'dermatology', 'neurology']) {
    const chosen = KEY_TOPICS.filter((topic) => topic.subject === subject);
    assert.ok(chosen.length >= 3 && chosen.length < 10);
    assert.equal(new Set(chosen.map((topic) => topic.topicId)).size, chosen.length);
    chosen.forEach((topic) => assert.equal(isActiveThisSemester(catalog.get(topic.topicId)), true));
  }
});
