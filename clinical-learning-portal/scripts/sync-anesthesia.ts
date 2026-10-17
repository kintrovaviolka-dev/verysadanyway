import { readFileSync, writeFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { fileURLToPath } from 'node:url';
import { ESSENTIALS_LESSONS, ESSENTIALS_SOURCES, ESSENTIALS_VERSION } from '../src/data/essentials';
import { ANESTHESIA_QUIZ_CS } from '../src/data/quizzes_cs';
import { MEDICAL_QUESTIONS } from '../../urgentni-prijem/otazky_ze_hry';

interface DrillQuestion {
  id: string;
  type: 'single_choice' | 'case_study' | 'fill_in';
  [key: string]: unknown;
}
interface DrillSubject {
  id: string;
  revision: string;
  totalQuestions: number;
  counts: Record<DrillQuestion['type'], number>;
  sizeBytes: number;
  sizeFormatted: string;
}

const modulePath = fileURLToPath(new URL('../../drill/data/modules/urgent.json', import.meta.url));
const manifestPath = fileURLToPath(new URL('../../drill/data/manifest.json', import.meta.url));
const originalModule = readFileSync(modulePath, 'utf8');
const bank: { questions: DrillQuestion[] } = JSON.parse(originalModule);
const manifest: { version: string; lastUpdated: string; subjects: DrillSubject[] } = JSON.parse(readFileSync(manifestPath, 'utf8'));
const subject = manifest.subjects.find(item => item.id === 'urgent');
if (!subject || !Array.isArray(bank.questions) || bank.questions.some(item => !item || typeof item.id !== 'string')) {
  throw new Error('Cannot synchronise anesthesia: invalid MedDrill bank or manifest');
}

const common = { subjectId: 'urgent', subjectTitle: 'Urgentní příjem', grade: 5, type: 'single_choice' as const };
const updates: DrillQuestion[] = [
  ...ANESTHESIA_QUIZ_CS.map(item => ({
    ...common,
    id: `urgent-anest-${item.id}`,
    topicId: 'urgent-anestezie-aim',
    topicTitle: 'Anesteziologie & Krizové stavy',
    question: [item.caseContext, item.question].filter(Boolean).join('\n\n'),
    options: item.options,
    correctIndex: item.correctAnswerIndex,
    explanation: item.explanation,
    tags: ['Anesteziologie', 'Kazuistika'],
    studyPath: '/clinical-learning-portal/#pharmacology',
  })),
  ...MEDICAL_QUESTIONS.filter(item => item.id === 'aim_q01' || item.id === 'aim_q03').map(item => ({
    ...common,
    id: `urgent-game-${item.id}`,
    topicId: 'urgent-anestezie-aim',
    topicTitle: item.category,
    question: item.question,
    options: item.options,
    correctIndex: item.correctIndex,
    explanation: item.rationale,
    tags: ['Anesteziologie', 'Bezpečnost'],
    references: [item.clinicalSource],
  })),
  ...ESSENTIALS_LESSONS.flatMap(lesson => lesson.cases.map(item => ({
    ...common,
    id: `urgent-essentials-${item.id}`,
    topicId: `urgent-essentials-${lesson.id}`,
    topicTitle: lesson.title.cs,
    question: `${item.presentation.cs}\n\n${item.question.cs}`,
    options: item.options.map(option => option.cs),
    correctIndex: item.correctIndex,
    explanation: item.explanation.cs,
    tags: ['Anesteziologie', 'Praktické základy'],
    references: lesson.sources.map(id => ESSENTIALS_SOURCES[id].url),
    contentVersion: ESSENTIALS_VERSION,
    clinicalReview: 'pending',
    studyPath: `/clinical-learning-portal/#essentials/${lesson.id}`,
  }))),
];

// Preserve unrelated questions and stable IDs used by students' saved progress.
const replacements = new Map(updates.map(item => [item.id, item]));
bank.questions = bank.questions
  .filter(item => !item.id.startsWith('urgent-essentials-') || replacements.has(item.id))
  .map(item => {
    const replacement = replacements.get(item.id);
    replacements.delete(item.id);
    return replacement ?? item;
  });
bank.questions.push(...replacements.values());
const output = JSON.stringify(bank, null, 2);
const counts = { single_choice: 0, case_study: 0, fill_in: 0 };
for (const question of bank.questions) {
  if (!(question.type in counts)) throw new Error(`Unknown question type: ${question.id}`);
  counts[question.type]++;
}
Object.assign(subject, {
  revision: `${manifest.version}-${createHash('sha256').update(output).digest('hex').slice(0, 12)}`,
  totalQuestions: bank.questions.length,
  counts,
  sizeBytes: Buffer.byteLength(output),
  sizeFormatted: `${Math.round(Buffer.byteLength(output) / 1024)} kB`,
});
if (originalModule !== output) {
  writeFileSync(modulePath, output);
  manifest.lastUpdated = new Date().toISOString();
}
writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));
console.log(`Anesthesia content synchronised: ${updates.length} questions; unrelated MedDrill content preserved.`);
