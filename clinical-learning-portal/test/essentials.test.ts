import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import test from 'node:test';
import {
  ESSENTIALS_LESSONS,
  ESSENTIALS_SOURCES,
  ESSENTIALS_VERSION,
  parseEssentialsProgress,
} from '../src/data/essentials';
import { ANESTHESIA_QUIZ } from '../src/data/quizzes';
import { ANESTHESIA_QUIZ_CS } from '../src/data/quizzes_cs';
import { ANESTHESIA_MEDS } from '../src/data/meds';
import { ANESTHESIA_MEDS_CS } from '../src/data/meds_cs';
import { MEDICAL_QUESTIONS } from '../../urgentni-prijem/otazky_ze_hry';

test('all six lessons include bilingual teaching, workflows, sources and explained cases', () => {
  assert.deepEqual(ESSENTIALS_LESSONS.map(item => item.id), ['last', 'airway', 'blood-gas', 'regional', 'inhalational', 'perioperative']);
  const ids = new Set<string>();
  for (const lesson of ESSENTIALS_LESSONS) {
    assert.ok(lesson.sections.length >= 3);
    assert.ok(lesson.steps.length >= 4);
    assert.ok(lesson.cases.length >= 2);
    assert.ok(lesson.sources.length > 0);
    for (const id of lesson.sources) assert.equal(new URL(ESSENTIALS_SOURCES[id].url).protocol, 'https:');
    const translations = [lesson.title, lesson.goal, lesson.pitfall, ...lesson.steps,
      ...lesson.sections.flatMap(section => [section.heading, section.body]),
      ...lesson.cases.flatMap(item => [item.presentation, item.question, item.explanation, ...item.options])];
    for (const value of translations) {
      assert.ok(value.cs.trim().length > 0);
      assert.ok(value.en.trim().length > 0);
    }
    for (const item of lesson.cases) {
      assert.ok(!ids.has(item.id), `Duplicate case ${item.id}`);
      ids.add(item.id);
      assert.ok(Number.isInteger(item.correctIndex) && item.correctIndex >= 0 && item.correctIndex < item.options.length);
      for (const lang of ['cs', 'en'] as const) {
        assert.equal(new Set(item.options.map(option => option[lang])).size, item.options.length);
      }
    }
  }
  assert.equal(ids.size, 17);
});

test('progress accepts first-option and incorrect answers without treating them as unanswered', () => {
  const answers = { 'last-recognition': 0, 'airway-cico': 0 };
  assert.deepEqual(parseEssentialsProgress(JSON.stringify({ version: ESSENTIALS_VERSION, answers })), answers);
  assert.deepEqual(parseEssentialsProgress(null), {});
});

test('malformed, stale and out-of-range progress is rejected explicitly', () => {
  for (const raw of ['{', 'null', '{}', JSON.stringify({ version: 'old', answers: {} })]) {
    assert.throws(() => parseEssentialsProgress(raw));
  }
  for (const answers of [[], { unknown: 0 }, { 'airway-cico': -1 }, { 'airway-cico': 3 }, { 'airway-cico': 0.5 }, { 'airway-cico': '0' }]) {
    assert.throws(() => parseEssentialsProgress(JSON.stringify({ version: ESSENTIALS_VERSION, answers })));
  }
});

test('both language versions teach eFONA, not waiting for reversal, in CICO', () => {
  for (const bank of [ANESTHESIA_QUIZ, ANESTHESIA_QUIZ_CS]) {
    const item = bank.find(entry => entry.id === 'q3')!;
    assert.match(item.options[item.correctAnswerIndex], /eFONA/);
    assert.match(item.explanation, /eFONA/);
    assert.match(item.explanation, /must not delay|nesmí oddálit/);
  }
  for (const bank of [ANESTHESIA_MEDS, ANESTHESIA_MEDS_CS]) {
    const item = bank.find(entry => entry.id === 'sugammadex')!;
    assert.match(item.pearls.join(' '), /eFONA/);
    assert.match(item.dosageInduction, /PTC/);
  }
  const reversal = MEDICAL_QUESTIONS.find(item => item.id === 'aim_q03')!;
  assert.match(reversal.rationale, /eFONA/);
  assert.doesNotMatch(reversal.question, /can not oxygenate/i);
});

test('worked examples preserve units, compensation and LAST timing', () => {
  const cases = ESSENTIALS_LESSONS.flatMap(lesson => lesson.cases);
  const lipid = cases.find(item => item.id === 'last-lipid')!;
  assert.match(lipid.options[lipid.correctIndex].en, /90 mL over 2–3 minutes.*15 mL\/min/);
  assert.match(cases.find(item => item.id === 'abg-winter')!.explanation.en, /26 ± 2 mmHg/);
  assert.match(cases.find(item => item.id === 'abg-gap')!.explanation.en, /17 mmol\/L/);
  const last = MEDICAL_QUESTIONS.find(item => item.id === 'aim_q01')!;
  assert.match(last.options[last.correctIndex], /2–3 minut/);
});

test('published MedDrill content matches authoritative cases and manifest hashes', () => {
  const raw = readFileSync(new URL('../../drill/data/modules/urgent.json', import.meta.url), 'utf8');
  const bank = JSON.parse(raw);
  for (const lesson of ESSENTIALS_LESSONS) {
    for (const item of lesson.cases) {
      const exported = bank.questions.find((entry: { id: string }) => entry.id === `urgent-essentials-${item.id}`);
      assert.ok(exported);
      assert.deepEqual(exported.options, item.options.map(option => option.cs));
      assert.equal(exported.correctIndex, item.correctIndex);
      assert.equal(exported.explanation, item.explanation.cs);
      assert.equal(exported.studyPath, `/clinical-learning-portal/#essentials/${lesson.id}`);
    }
  }
  const cico = bank.questions.find((entry: { id: string }) => entry.id === 'urgent-anest-q3');
  assert.equal(cico.explanation, ANESTHESIA_QUIZ_CS.find(item => item.id === 'q3')!.explanation);
  const manifest = JSON.parse(readFileSync(new URL('../../drill/data/manifest.json', import.meta.url), 'utf8'));
  const subject = manifest.subjects.find((entry: { id: string }) => entry.id === 'urgent');
  assert.equal(subject.totalQuestions, bank.questions.length);
  assert.equal(subject.sizeBytes, Buffer.byteLength(raw));
  assert.ok(subject.revision.endsWith(createHash('sha256').update(raw).digest('hex').slice(0, 12)));
});
