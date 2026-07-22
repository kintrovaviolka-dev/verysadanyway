import React, { createContext, useContext, useState, useEffect } from "react";
import { StudentProgress, CompletedCase, QuizScore, IncorrectDecision } from "../types";
import { CLINICAL_QUIZZES } from "../data/quizzes";

export interface ReviewItem {
  id: string; // e.g. 'quiz_[id]' or 'case_[caseId]_node_[index]'
  type: "quiz" | "decision";
  specialty: "Emergency" | "Anesthesia";
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  sourceTitle: string;
}

interface CaseDefinition {
  id: string;
  title: string;
  name: string;
  specialty: string;
  decisionNodes?: Array<{
    question: string;
    options: string[];
    feedback: string;
  }>;
}

interface ProgressContextType {
  progress: StudentProgress;
  logCaseCompletion: (caseId: string, title: string, specialty: string, score: number, elapsedTime: number) => void;
  logQuizScore: (quizId: string, title: string, specialty: string, score: number, total: number) => void;
  logIncorrectChoice: (questionId: string, specialty: string, selectedChoice: string, questionText: string, correctChoice?: string) => void;
  clearIncorrectChoice: (questionId: string) => void;
  exportProgressJSON: () => string;
  importProgressJSON: (jsonStr: string) => { success: boolean; error?: string };
  resetProgress: () => void;
  getSpecialtyMastery: () => { Emergency: number; Anesthesia: number };
  getReviewSession: () => ReviewItem[];
  getPendingReviewItemsCount: () => number;
}

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

const LOCAL_STORAGE_KEY = "clinical_portal_progress";

const DEFAULT_PROGRESS: StudentProgress = {
  completedCases: [],
  quizScores: [],
  incorrectDecisions: []
};

export const mapSpecialtyToCore = (spec: string): "Emergency" | "Anesthesia" => {
  const low = spec.toLowerCase();
  if (low.includes("anest") || low.includes("aro") || low.includes("resus")) {
    return "Anesthesia";
  }
  // All other specialties from cases (Kardiologie, Traumatologie, Toxikologie, Neurologie, Nefrologie, Infektologie, Chirurgie) map to Emergency
  return "Emergency";
};

export function ProgressProvider({ children }: { children: React.ReactNode }) {
  const [progress, setProgress] = useState<StudentProgress>(DEFAULT_PROGRESS);
  const [cases, setCases] = useState<CaseDefinition[]>([]);

  // Load progress from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (
          parsed &&
          Array.isArray(parsed.completedCases) &&
          Array.isArray(parsed.quizScores) &&
          Array.isArray(parsed.incorrectDecisions)
        ) {
          setProgress(parsed);
        } else {
          console.warn("Invalid storage format, falling back to default");
          setProgress(DEFAULT_PROGRESS);
        }
      }
    } catch (e) {
      console.error("Failed to load progress from localStorage:", e);
      setProgress(DEFAULT_PROGRESS);
    }

    // Fetch case definitions for building decision nodes review
    fetch("/api/cases")
      .then((res) => {
        if (res.ok) return res.json();
        throw new Error("Failed to fetch cases");
      })
      .then((data) => setCases(data))
      .catch((err) => console.error("Error loading cases in context:", err));
  }, []);

  // Save progress to localStorage on update
  const saveProgress = (newProgress: StudentProgress) => {
    setProgress(newProgress);
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newProgress));
    } catch (e) {
      console.error("Failed to save progress to localStorage:", e);
    }
  };

  const logCaseCompletion = (caseId: string, title: string, specialty: string, score: number, elapsedTime: number) => {
    const timestamp = new Date().toISOString();
    let resolvedSpecialty = specialty;
    if (!resolvedSpecialty) {
      const caseDef = cases.find((c) => c.id === caseId);
      resolvedSpecialty = caseDef ? caseDef.specialty : "Emergency";
    }
    const mappedSpecialty = mapSpecialtyToCore(resolvedSpecialty);
    const newCase: CompletedCase = {
      caseId,
      title,
      specialty: mappedSpecialty,
      score,
      elapsedTime,
      timestamp
    };

    // Keep only the highest score for a case to measure best performance, or log all attempts?
    // Let's store all attempts to show history, but we can filter when calculating metrics.
    const completedCases = [...progress.completedCases, newCase];
    saveProgress({ ...progress, completedCases });
  };

  const logQuizScore = (quizId: string, title: string, specialty: string, score: number, total: number) => {
    const timestamp = new Date().toISOString();
    let resolvedSpecialty = specialty;
    if (!resolvedSpecialty) {
      const match = quizId.match(/(?:case|imaging)_([a-zA-Z0-9]+)/);
      const caseId = match ? match[1] : "";
      const caseDef = cases.find((c) => c.id === caseId);
      resolvedSpecialty = caseDef ? caseDef.specialty : "Emergency";
    }
    const mappedSpecialty = mapSpecialtyToCore(resolvedSpecialty);
    const newQuiz: QuizScore = {
      quizId,
      title,
      specialty: mappedSpecialty,
      score,
      total,
      timestamp
    };
    const quizScores = [...progress.quizScores, newQuiz];
    saveProgress({ ...progress, quizScores });
  };

  const logIncorrectChoice = (
    questionId: string,
    specialty: string,
    selectedChoice: string,
    questionText: string,
    correctChoice?: string
  ) => {
    const timestamp = new Date().toISOString();
    let resolvedSpecialty = specialty;
    if (!resolvedSpecialty) {
      const match = questionId.match(/(?:case|imaging)_([a-zA-Z0-9]+)/);
      const caseId = match ? match[1] : "";
      const caseDef = cases.find((c) => c.id === caseId);
      resolvedSpecialty = caseDef ? caseDef.specialty : "Emergency";
    }
    const mappedSpecialty = mapSpecialtyToCore(resolvedSpecialty);
    const newIncorrect: IncorrectDecision = {
      questionId,
      specialty: mappedSpecialty,
      selectedChoice,
      correctChoice,
      questionText,
      timestamp
    };
    // Append to list of incorrect choices
    const incorrectDecisions = [...progress.incorrectDecisions, newIncorrect];
    saveProgress({ ...progress, incorrectDecisions });
  };

  // When a user answers a review item correctly, we remove their incorrect logs for that item
  const clearIncorrectChoice = (questionId: string) => {
    const incorrectDecisions = progress.incorrectDecisions.filter((d) => d.questionId !== questionId);
    saveProgress({ ...progress, incorrectDecisions });
  };

  const exportProgressJSON = () => {
    return JSON.stringify(progress, null, 2);
  };

  const importProgressJSON = (jsonStr: string) => {
    try {
      const parsed = JSON.parse(jsonStr);
      if (!parsed) {
        return { success: false, error: "Prázdný soubor." };
      }

      // JSON Schema Validation
      const hasCompletedCases = Array.isArray(parsed.completedCases);
      const hasQuizScores = Array.isArray(parsed.quizScores);
      const hasIncorrectDecisions = Array.isArray(parsed.incorrectDecisions);

      if (!hasCompletedCases || !hasQuizScores || !hasIncorrectDecisions) {
        return { success: false, error: "Neplatný formát zálohy: chybí požadovaná datová pole." };
      }

      // Validate objects in arrays
      const validCases = parsed.completedCases.every(
        (c: any) => typeof c.caseId === "string" && typeof c.score === "number" && typeof c.specialty === "string"
      );
      const validQuizzes = parsed.quizScores.every(
        (q: any) => typeof q.quizId === "string" && typeof q.score === "number" && typeof q.total === "number"
      );
      const validDecisions = parsed.incorrectDecisions.every(
        (d: any) => typeof d.questionId === "string" && typeof d.selectedChoice === "string"
      );

      if (!validCases || !validQuizzes || !validDecisions) {
        return { success: false, error: "Některé záznamy v záloze mají poškozenou strukturu." };
      }

      // Normalize specialties in imported data
      const normalizedCompleted = parsed.completedCases.map((c: any) => ({
        ...c,
        specialty: mapSpecialtyToCore(c.specialty)
      }));
      const normalizedQuizzes = parsed.quizScores.map((q: any) => ({
        ...q,
        specialty: mapSpecialtyToCore(q.specialty)
      }));
      const normalizedDecisions = parsed.incorrectDecisions.map((d: any) => ({
        ...d,
        specialty: mapSpecialtyToCore(d.specialty)
      }));

      const newProgress: StudentProgress = {
        completedCases: normalizedCompleted,
        quizScores: normalizedQuizzes,
        incorrectDecisions: normalizedDecisions
      };

      saveProgress(newProgress);
      return { success: true };
    } catch (e) {
      return { success: false, error: "Neplatný soubor JSON." };
    }
  };

  const resetProgress = () => {
    saveProgress(DEFAULT_PROGRESS);
  };

  const getSpecialtyMastery = () => {
    const mastery = {
      Emergency: 50,
      Anesthesia: 50
    };

    // Calculate Emergency Mastery
    // Calculate Anesthesia Mastery
    const calculateForSpecialty = (spec: "Emergency" | "Anesthesia") => {
      let base = 50;

      // Completed cases influence
      const casesInSpec = progress.completedCases.filter((c) => c.specialty === spec);
      casesInSpec.forEach((c) => {
        // High score adds up to +12 points, low score subtracts up to -12 points
        const effect = (c.score - 50) / 4.16; 
        base += effect;
      });

      // Quiz scores influence
      const quizzesInSpec = progress.quizScores.filter((q) => q.specialty === spec);
      quizzesInSpec.forEach((q) => {
        const ratio = q.total > 0 ? q.score / q.total : 0;
        if (ratio >= 0.75) {
          base += 6; // Excellent quiz result
        } else if (ratio < 0.5) {
          base -= 6; // Poor quiz result
        }
      });

      // Errors deduction (Unique errors penalty)
      const uniqueErrors = new Set(progress.incorrectDecisions.filter((d) => d.specialty === spec).map((d) => d.questionId));
      base -= uniqueErrors.size * 8; // Penalty of -8% per unique incorrect item

      return Math.max(5, Math.min(100, Math.round(base)));
    };

    mastery.Emergency = calculateForSpecialty("Emergency");
    mastery.Anesthesia = calculateForSpecialty("Anesthesia");

    return mastery;
  };

  // Compile all review items
  const getAllReviewItems = (): ReviewItem[] => {
    const items: ReviewItem[] = [];

    // 1. Add questions from quizzes.ts
    CLINICAL_QUIZZES.forEach((q) => {
      items.push({
        id: `quiz_${q.id}`,
        type: "quiz",
        specialty: q.specialty,
        question: q.question,
        options: q.options,
        correctIndex: q.correctIndex,
        explanation: q.explanation,
        sourceTitle: "Klinický kvíz"
      });
    });

    // 2. Add decision nodes from cases
    cases.forEach((c) => {
      if (c.decisionNodes && c.decisionNodes.length > 0) {
        const mappedSpec = mapSpecialtyToCore(c.specialty);
        c.decisionNodes.forEach((node, idx) => {
          items.push({
            id: `case_${c.id}_node_${idx}`,
            type: "decision",
            specialty: mappedSpec,
            question: node.question,
            options: node.options,
            correctIndex: 0, // In case files, the first option (index 0) is the correct one
            explanation: node.feedback,
            sourceTitle: `Případ: ${c.name} (${c.title})`
          });
        });
      }
    });

    return items;
  };

  const getPendingReviewItemsCount = () => {
    // Unique question IDs that the user has missed and not yet cleared (still in incorrectDecisions)
    const uniqueIncorrectIds = new Set(progress.incorrectDecisions.map((d) => d.questionId));
    return uniqueIncorrectIds.size;
  };

  const getReviewSession = (): ReviewItem[] => {
    const allItems = getAllReviewItems();
    
    // Group mistakes count by item ID
    const mistakeCounts: Record<string, number> = {};
    progress.incorrectDecisions.forEach((d) => {
      mistakeCounts[d.questionId] = (mistakeCounts[d.questionId] || 0) + 1;
    });

    // Sort items by priority:
    // 1. Items with mistakeCount > 0, sorted descending by mistake count
    // 2. Weakest specialties items first (if no mistakes logged)
    const mastery = getSpecialtyMastery();
    const weakerSpecialty = mastery.Emergency <= mastery.Anesthesia ? "Emergency" : "Anesthesia";

    const missedItems = allItems.filter((item) => (mistakeCounts[item.id] || 0) > 0);
    const regularItems = allItems.filter((item) => !(mistakeCounts[item.id] || 0));

    // Sort missed items by mistake count descending
    missedItems.sort((a, b) => (mistakeCounts[b.id] || 0) - (mistakeCounts[a.id] || 0));

    // Sort regular items so that items of the weaker specialty come first
    regularItems.sort((a, b) => {
      if (a.specialty === weakerSpecialty && b.specialty !== weakerSpecialty) return -1;
      if (a.specialty !== weakerSpecialty && b.specialty === weakerSpecialty) return 1;
      return 0;
    });

    // Combine: we want a session of 6 items.
    // We take all missed items first (capped at 6), and fill the rest with regular items.
    const session = [...missedItems];
    if (session.length < 6) {
      const remainingCount = 6 - session.length;
      session.push(...regularItems.slice(0, remainingCount));
    } else {
      return session.slice(0, 6);
    }

    return session;
  };

  return (
    <ProgressContext.Provider
      value={{
        progress,
        logCaseCompletion,
        logQuizScore,
        logIncorrectChoice,
        clearIncorrectChoice,
        exportProgressJSON,
        importProgressJSON,
        resetProgress,
        getSpecialtyMastery,
        getReviewSession,
        getPendingReviewItemsCount
      }}
    >
      {children}
    </ProgressContext.Provider>
  );
}

export function useProgress() {
  const context = useContext(ProgressContext);
  if (context === undefined) {
    throw new Error("useProgress must be used within a ProgressProvider");
  }
  return context;
}
