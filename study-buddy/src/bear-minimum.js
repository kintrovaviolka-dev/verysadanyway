const visibleQuestion = ({ correctIndex, explanation, ...question }) => question;

function shuffled(items, random = Math.random) {
  const copy = [...items];
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const replacement = Math.floor(random() * (index + 1));
    [copy[index], copy[replacement]] = [copy[replacement], copy[index]];
  }
  return copy;
}

export function pickBearMinimum(catalog, count = 10, random = Math.random) {
  const chosen = [];
  const usedTopics = new Set();
  for (const question of shuffled(catalog, random)) {
    if (usedTopics.has(question.topicId)) continue;
    chosen.push(question);
    usedTopics.add(question.topicId);
    if (chosen.length === count) break;
  }
  // Katalog může být dočasně malý při lokálním vývoji; raději nabídneme méně než opakovat otázku.
  return chosen.map(visibleQuestion);
}

export function gradeBearMinimum(catalog, answers) {
  const byId = new Map(catalog.map((question) => [question.id, question]));
  const uniqueAnswers = new Map();
  for (const answer of answers ?? []) {
    if (typeof answer?.id === 'string' && Number.isInteger(answer.answerIndex)) uniqueAnswers.set(answer.id, answer.answerIndex);
  }
  const results = [];
  for (const [id, answerIndex] of uniqueAnswers) {
    const question = byId.get(id);
    if (!question) continue;
    results.push({ id, correct: question.correctIndex === answerIndex, explanation: question.explanation });
  }
  return { total: results.length, correct: results.filter((result) => result.correct).length, results };
}
