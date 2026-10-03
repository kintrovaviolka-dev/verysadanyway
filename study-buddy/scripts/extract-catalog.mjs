import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import vm from 'node:vm';

const root = resolve(import.meta.dirname, '..', '..');

function evaluate(file, expression) {
  const context = { window: {}, console };
  vm.createContext(context);
  const source = readFileSync(resolve(root, file), 'utf8');
  vm.runInContext(`${source}\n; globalThis.__result = ${expression};`, context, { timeout: 5_000 });
  return context.__result;
}

function toTopics(subject, sourcePath, entries) {
  return entries.map((item) => ({
    id: `${subject}:${item.id}`,
    subject,
    title: item.title,
    sourcePath,
    // První průchod je o jedné dobře ohraničené otázce/okruhu, ne o perfektním naučení celé kapitoly.
    // Pět minut znamená: otevřít, aktivně si vybavit odpověď a krátce zkontrolovat.
    estimatedMinutes: 5
  }));
}

function toQuestions(subject, sourcePath, entries) {
  return entries.flatMap((entry) => (entry.quiz ?? []).map((quiz, index) => {
    const correctIndex = quiz.correct ?? quiz.correctIndex ?? quiz.correctAnswerIndex;
    if (!Array.isArray(quiz.options) || !Number.isInteger(correctIndex)) return null;
    return {
      id: `${subject}:${entry.id}:${quiz.id ?? index + 1}`,
      subject,
      topicId: `${subject}:${entry.id}`,
      topicTitle: entry.title,
      sourcePath,
      caseContext: quiz.caseContext ?? null,
      question: quiz.question,
      options: quiz.options,
      correctIndex,
      explanation: quiz.explanation ?? ''
    };
  }).filter(Boolean));
}

const radiology = evaluate('radiolka/data.js', 'window.DATA_RADIOLOGIE');
const dermatology = evaluate('derma/data.js', 'DATA_DERMATOLOGIE');
const neurology = evaluate('neuro/data.js', 'NEUROLOGY_DATA.modules');
const anesthesiaSource = readFileSync(resolve(root, 'clinical-learning-portal/src/data/quizzes.ts'), 'utf8')
  .replace(/^import[^\n]+\n/, '')
  .replace(/export const ANESTHESIA_QUIZ\s*:\s*QuizQuestion\[\]\s*=/, 'globalThis.ANESTHESIA_QUIZ =');
const anesthesiaContext = { globalThis: {} };
vm.createContext(anesthesiaContext);
vm.runInContext(anesthesiaSource, anesthesiaContext, { timeout: 5_000 });
const anesthesia = anesthesiaContext.globalThis.ANESTHESIA_QUIZ;
const catalog = [
  ...toTopics('radiology', '/radiolka/', radiology),
  ...toTopics('dermatology', '/derma/', dermatology),
  ...toTopics('neurology', '/neuro/', neurology)
];
const questions = [
  ...toQuestions('radiology', '/radiolka/', radiology),
  ...toQuestions('dermatology', '/derma/', dermatology),
  ...toQuestions('neurology', '/neuro/', neurology),
  ...toQuestions('urgent', '/clinical-portal/', [{ id: 'anesthesia', title: 'Urgentní medicína a anesteziologie', quiz: anesthesia }])
];

const destination = resolve(root, 'study-buddy/src/catalog.generated.js');
mkdirSync(dirname(destination), { recursive: true });
writeFileSync(destination, `// Generated from the local study modules; do not hand-edit.\nexport const TOPIC_CATALOG = ${JSON.stringify(catalog, null, 2)};\n\nexport const URGENT_TOPICS = ${JSON.stringify([
  { id: 'urgent-adult-tachycardia', title: 'Adult tachycardia approach', minutes: 10 },
  { id: 'urgent-last', title: 'Systémová toxicita lokálních anestetik (LAST)', minutes: 10 },
  { id: 'urgent-anafilaxe', title: 'Anafylaxe: první minuty a dávkování adrenalinu', minutes: 10 },
  { id: 'urgent-airway', title: 'Obtížné dýchací cesty a CICO', minutes: 10 },
  { id: 'urgent-sepsis', title: 'Sepsa a septický šok: první hodina', minutes: 10 },
  { id: 'urgent-bradycardia', title: 'Symptomatická bradykardie', minutes: 10 },
  { id: 'urgent-hyperk', title: 'Hyperkalémie s EKG změnami', minutes: 10 }
], null, 2)};\n`);
const questionDestination = resolve(root, 'study-buddy/src/questions.generated.js');
writeFileSync(questionDestination, `// Generated from existing verified quizzes; do not hand-edit.\nexport const QUESTION_CATALOG = ${JSON.stringify(questions, null, 2)};\n`);
console.log(`Vytvořen katalog: ${catalog.length} témat a ${questions.length} otázek.`);
