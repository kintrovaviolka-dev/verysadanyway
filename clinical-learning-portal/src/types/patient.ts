export interface PatientCase {
  id: string; version: string; title: string; opening: string;
  age: number; specialty: string; difficulty: string;
}
export interface PatientSession {
  token: string; sessionId: string; case: PatientCase; expiresAt: number;
  turnsRemaining: number; preview: boolean;
}
export interface PatientCatalog {
  preview: boolean; total: number;
  specialties: { id: string; label: string; count: number }[];
  difficulties: string[]; maxTurns: number;
}
export interface Criterion {
  id: string; label: string; met: boolean;
  evidence: { kind: 'question' | 'diagnosis' | 'differential'; turn?: number; entry?: number; quote: string } | null;
}
export interface PatientEvaluation {
  sessionId: string; caseId: string; caseVersion: string; title: string; specialty: string; score: number;
  breakdown: { history: number; diagnosis: number; differential: number };
  historyCriteria: Criterion[]; diagnosisCriterion: Criterion; differentialCriteria: Criterion[];
  concealment: {
    label: string; uncovered: boolean; reason: string; hiddenDetail: string;
    guardedEvidence: { turn: number; question: string; answer: string } | null;
    revealEvidence: { turn: number; question: string; answer: string } | null;
  } | null;
  unmatched: { diagnosis: string | null; differentials: string[] };
  scoringNote: string; explanation: string; mistakes: string[];
  source: { dataset: string; revision: string; license: string; url: string };
  references: { pmid: string; title: string; year: number }[];
  adaptation: string; preview: boolean; completedAt: string;
}
export interface PatientProgress {
  sessionId: string; caseId: string; caseVersion: string; title: string;
  specialty: string; score: number; completedAt: string; preview: boolean;
}
