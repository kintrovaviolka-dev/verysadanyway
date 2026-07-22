import fs from "fs";
import path from "path";

export interface CaseDefinition {
  id: string;
  level: number;
  difficulty: "easy" | "medium" | "hard";
  specialty: string;
  title: string;
  name: string;
  age: number;
  sex: string;
  mainComplaint: string;
  complaintDetail: string;
  history: string[];
  allergies: string[];
  triageClass: string;
  vitals: {
    tf: number;
    tk_sys: number;
    tk_dia: number;
    spo2: number;
    gcs: number;
    temp: number;
    rr: number;
  };
  secretDiagnosis: string;
  secretDiagnosisCode: string;
  labsResult: Record<string, string>;
  imagingResult: Record<string, string>;
  
  patientHistory?: string[];
  vitalSigns?: Record<string, number>;
  physicalExam?: string;
  labValues?: Record<string, string>;
  decisionNodes?: Array<{
    question: string;
    options: string[];
    feedback: string;
  }>;
  feedback?: string;
}

const CASES_DIR = path.join(process.cwd(), "src/data/cases");

export function getAllCases(): CaseDefinition[] {
  try {
    if (!fs.existsSync(CASES_DIR)) {
      return [];
    }
    const files = fs.readdirSync(CASES_DIR);
    const cases: CaseDefinition[] = [];
    for (const file of files) {
      if (file.endsWith(".json")) {
        const filePath = path.join(CASES_DIR, file);
        const content = fs.readFileSync(filePath, "utf-8");
        cases.push(JSON.parse(content));
      }
    }
    // Sort cases by numeric ID to maintain consistent ordering
    return cases.sort((a, b) => {
      const idA = parseInt(a.id, 10) || 999;
      const idB = parseInt(b.id, 10) || 999;
      return idA - idB;
    });
  } catch (error) {
    console.error("Failed to read cases directory:", error);
    return [];
  }
}

export function getCaseById(id: string): CaseDefinition | null {
  try {
    const filePath = path.join(CASES_DIR, `${id}.json`);
    if (fs.existsSync(filePath)) {
      const content = fs.readFileSync(filePath, "utf-8");
      return JSON.parse(content);
    }
    return null;
  } catch (error) {
    console.error(`Failed to read case ${id}:`, error);
    return null;
  }
}

export function getCasesByFilter(specialty?: string, level?: number): CaseDefinition[] {
  let cases = getAllCases();
  if (specialty && specialty !== "all") {
    cases = cases.filter(c => c.specialty.toLowerCase() === specialty.toLowerCase());
  }
  if (level) {
    cases = cases.filter(c => c.level === level);
  }
  return cases;
}
