export interface PatientVitals {
  tf: number;
  tk_sys: number;
  tk_dia: number;
  spo2: number;
  gcs: number;
  temp: number;
  rr: number;
}

export interface Patient {
  name: string;
  age: number;
  sex: string;
  mainComplaint: string;
  complaintDetail: string;
  history: string[];
  allergies: string[];
  triageClass: string;
}

export interface ActionLogItem {
  time: string;
  text: string;
  source: "user" | "system" | "result";
}

export interface ChatMessage {
  sender: string;
  text: string;
  time: string;
}

export interface VitalsHistoryEntry {
  time: number; // minutes elapsed
  tf: number;
  tk_sys: number;
  tk_dia: number;
  spo2: number;
  rr: number;
}

export interface GameSession {
  sessionId: string;
  caseId: string;
  level: number;
  patient: Patient;
  vitals: PatientVitals;
  vitalsHistory?: VitalsHistoryEntry[];
  elapsedTime: number;
  actionLog: ActionLogItem[];
  chatHistory: Record<string, ChatMessage[]>;
  labsOrdered: string[];
  labsReady: string[];
  labsResultsReceived: Record<string, string>;
  imagingOrdered: string[];
  imagingReady: string[];
  imagingResultsReceived: Record<string, string>;
  therapies: {
    oxygen: string;
    ivAccess: string;
    infusion: string;
    meds: Array<{ name: string; dose: string; route: string }>;
  };
  isCompleted: boolean;
  debriefing?: string;
  traumaTeamActivated: boolean;
  triageConfirmed: boolean;
  selectedTriageClass: string;
  rhythmInterpreted?: boolean;
}

export interface CompletedCase {
  caseId: string;
  title: string;
  specialty: string;
  score: number; // overall accuracy %
  elapsedTime: number;
  timestamp: string;
}

export interface QuizScore {
  quizId: string;
  title: string;
  specialty: string;
  score: number;
  total: number;
  timestamp: string;
}

export interface IncorrectDecision {
  questionId: string;
  specialty: string;
  selectedChoice: string;
  correctChoice?: string;
  questionText: string;
  timestamp: string;
}

export interface DomainMastery {
  specialty: "Emergency" | "Anesthesia";
  mastery: number; // 0 to 100
}

export interface StudentProgress {
  completedCases: CompletedCase[];
  quizScores: QuizScore[];
  incorrectDecisions: IncorrectDecision[];
}
