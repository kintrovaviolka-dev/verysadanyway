export type MedCategory =
  | 'induction'
  | 'paralytics'
  | 'analgesics'
  | 'sedatives'
  | 'vasoactive'
  | 'reversal';

export interface Medication {
  id: string;
  name: string;
  genericName?: string;
  category: MedCategory;
  categoryLabel: string;
  class: string;
  mechanism: string;
  indications: string[];
  dosageInduction: string; // dosage information
  standardPrep: string; // how to mix or prepare
  pediatricDosage?: string;
  onset: string;
  duration: string;
  contraindications: string[];
  adverseEffects: string[];
  pearls: string[];
}

export interface QuizQuestion {
  id: string;
  caseContext?: string; // a brief patient vignette
  question: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
  medicationId?: string; // link to medication for context
}

export interface EmergencyAlgorithm {
  id: string;
  title: string;
  shortDescription: string;
  detailedDescription: string;
  category: 'cardiac_arrest' | 'respiratory' | 'shock' | 'other';
  startStepId: string;
  steps: Record<string, AlgorithmStep>;
}

export interface AlgorithmStepVitals {
  hr?: string | number;
  bp?: string;
  spo2?: string | number;
  rr?: string | number;
  etco2?: string | number;
  rhythm?: string;
}

export interface AlgorithmStep {
  id: string;
  title: string;
  description: string;
  vitals?: AlgorithmStepVitals;
  type: 'decision' | 'intervention' | 'outcome_success' | 'outcome_failure';
  choices?: {
    text: string;
    nextStepId: string;
    rationale: string;
    isCorrect?: boolean;
  }[];
  criticalNote?: string;
}

export interface AIScenarioState {
  title: string;
  presentation: string;
  vitals: {
    hr: number | string;
    bp: string;
    spo2: number | string;
    rr: number | string;
    temp: string;
    rhythm?: string;
  };
  background: string;
  actions: string[];
}

export interface AIEvaluationResponse {
  outcome: string;
  vitals: {
    hr: number | string;
    bp: string;
    spo2: number | string;
    rr: number | string;
    temp: string;
    rhythm?: string;
  };
  feedback: string;
  isTerminated: boolean;
  isSuccess: boolean;
  actions: string[];
}
