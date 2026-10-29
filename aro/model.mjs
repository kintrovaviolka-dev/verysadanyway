import {answers} from './answers.mjs';
export const STORAGE_KEY = 'aro-study-v1';
export const normalize = value => String(value).normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
export function drawPair(questions, random = Math.random) {
  return ['A', 'B'].map(group => {
    const pool = questions.filter(q => q.group === group);
    if (!pool.length) throw new Error(`Chybí okruh ${group}`);
    return pool[Math.min(pool.length - 1, Math.floor(random() * pool.length))];
  });
}
export function filterQuestions(questions, {search = '', group = '', filter = ''}, progress = {}) {
  const needle = normalize(search.trim());
  return questions.filter(q => (!group || q.group === group) &&
    (!needle || normalize([q.id, q.title, ...q.prompts, ...(q.lessonIds.includes('ponv') ? ['PONV nauzea zvracení'] : [])].join(' ')).includes(needle)) &&
    (!filter || (filter === 'answer' ? Boolean(answers[q.id]) : filter === 'updated' ? q.lessonIds.length > 0 : filter === 'draft' ? !answers[q.id] && q.lessonIds.length === 0 : (progress[q.id]?.status || 'new') === filter)));
}
export function validateProgress(value, questions) {
  if (!value || typeof value !== 'object' || Array.isArray(value)) throw new Error('Neplatný formát pokroku');
  const clean = {};
  for (const q of questions) {
    const item = value[q.id];
    if (item && typeof item === 'object') clean[q.id] = {
      status: ['new','repeat','ready'].includes(item.status) ? item.status : 'new',
      note: typeof item.note === 'string' ? item.note.slice(0, 20000) : ''
    };
  }
  return clean;
}

export function contentStatus(q) {
  return answers[q.id] ? 'answer' : q.lessonIds.length ? 'supplement' : 'outline';
}
