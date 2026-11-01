import type { PatientCatalog, PatientEvaluation, PatientProgress, PatientSession } from '../types/patient';
const progressKey = 'ai_patient_progress_v1';
async function post(path: string, body: unknown) {
  const response = await fetch(`/api/patient/${path}`, {
    method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body), signal: AbortSignal.timeout(45000),
  });
  if (!response.ok) {
    const payload = await response.json().catch(() => ({}));
    throw new Error(payload.error || 'Požadavek se nepodařilo dokončit. Zkuste to znovu.');
  }
  return response;
}
export async function getPatientCatalog(): Promise<PatientCatalog> {
  const res = await fetch('/api/patient/catalog', { signal: AbortSignal.timeout(15000) });
  if (!res.ok) throw new Error('Seznam případů není dostupný.');
  return res.json();
}
export async function startPatient(specialty: string, difficulty: string, excludeCaseId?: string): Promise<PatientSession> {
  return (await post('start', { specialty, difficulty, excludeCaseId })).json();
}
export async function sendPatientMessage(token: string, question: string, onText: (text: string) => void): Promise<{ text: string; token: string; turnsRemaining: number }> {
  const response = await post('message', { token, question });
  if (!response.body) throw new Error('Odpověď pacienta je prázdná. Zkuste otázku znovu.');
  const reader = response.body.getReader();
  const decoder = new TextDecoder();
  let buffer = '', text = '';
  let state: { token: string; turnsRemaining: number } | undefined;
  const consume = (line: string) => {
    if (!line.startsWith('data: ')) return;
    const event = JSON.parse(line.slice(6));
    if (typeof event.text === 'string') { text += event.text; onText(text); }
    if (event.state && typeof event.state.token === 'string' && Number.isInteger(event.state.turnsRemaining)) state = event.state;
  };
  try {
    for (;;) {
      const chunk = await reader.read();
      buffer += decoder.decode(chunk.value, { stream: !chunk.done });
      const lines = buffer.split('\n'); buffer = lines.pop() || ''; lines.forEach(consume);
      if (chunk.done) break;
    }
    if (buffer.trim()) consume(buffer);
    if (!state || !text) throw new Error('Přenos odpovědi se přerušil. Otázka nebyla uložena, zkuste ji znovu.');
    return { text, ...state };
  } finally { reader.releaseLock(); }
}
export async function evaluatePatient(token: string, diagnosis: string, differentials: string[]): Promise<PatientEvaluation> {
  return (await post('evaluate', { token, diagnosis, differentials })).json();
}
export function readPatientProgress(): PatientProgress[] {
  try {
    const value = JSON.parse(localStorage.getItem(progressKey) || '[]');
    return Array.isArray(value) ? value.filter(v => typeof v?.sessionId === 'string' && typeof v?.caseId === 'string' && typeof v?.title === 'string' && typeof v?.score === 'number' && Number.isFinite(v.score) && v.score >= 0 && v.score <= 100).slice(-100) : [];
  } catch { return []; }
}
export function savePatientProgress(result: PatientEvaluation) {
  const entry: PatientProgress = {
    sessionId: result.sessionId, caseId: result.caseId, caseVersion: result.caseVersion, title: result.title,
    specialty: result.specialty, score: result.score, completedAt: result.completedAt, preview: result.preview,
  };
  const progress = readPatientProgress().filter(item => item.sessionId !== entry.sessionId);
  localStorage.setItem(progressKey, JSON.stringify([...progress, entry].slice(-100)));
}
