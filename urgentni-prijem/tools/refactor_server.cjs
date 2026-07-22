const fs = require('fs');
const path = require('path');

const serverPath = path.join(__dirname, '../server.ts');
let content = fs.readFileSync(serverPath, 'utf-8');

// 1. Replace imports
const oldImports = `import express from "express";
import path from "path";
import dotenv from "dotenv";
import { GoogleGenAI, Type } from "@google/genai";
import { createServer as createViteServer } from "vite";`;

const newImports = `import express from "express";
import path from "path";
import dotenv from "dotenv";
import { GoogleGenAI, Type } from "@google/genai";
import { createServer as createViteServer } from "vite";
import { getAllCases, getCaseById, getCasesByFilter, CaseDefinition } from "./src/data/cases/index";`;

content = content.replace(oldImports, newImports);

// 2. Replace CASES block
const startToken = 'const CASES: Record<string, CaseDefinition> = {';
const startIndex = content.indexOf(startToken);
const endToken = '};\n\n// Simple In-Memory Game Store';
const endIndex = content.indexOf(endToken, startIndex);

if (startIndex === -1 || endIndex === -1) {
  console.error("Could not locate CASES block");
  process.exit(1);
}

const caseDefToken = 'interface CaseDefinition {';
const caseDefIndex = content.indexOf(caseDefToken);

if (caseDefIndex === -1) {
  console.error("Could not locate CaseDefinition block");
  process.exit(1);
}

const replacementCases = `const CASES: Record<string, CaseDefinition> = {};

function getFallbackCase(specialty?: string, level?: number): CaseDefinition {
  let list = getCasesByFilter(specialty, level);
  if (list.length === 0 && specialty) {
    list = getCasesByFilter(specialty);
  }
  if (list.length === 0 && level) {
    list = getCasesByFilter(undefined, level);
  }
  if (list.length === 0) {
    list = getAllCases();
  }
  const randomIndex = Math.floor(Math.random() * list.length);
  return list[randomIndex];
}

// Load cases into the CASES cache
function loadCasesIntoCache() {
  const all = getAllCases();
  for (const c of all) {
    CASES[c.id] = c;
  }
  console.log(\`Loaded \${all.length} cases into memory cache.\\n\`);
}
loadCasesIntoCache();`;

const casesEnd = endIndex + 2; // includes };
content = content.substring(0, caseDefIndex) + replacementCases + content.substring(casesEnd);

// 3. Replace /api/case/init
const oldInit = `  // 1. Initialise a patient case
  app.post("/api/case/init", (req, res) => {
    const { difficulty } = req.body; // "1", "2", or "3"
    const caseId = difficulty || "1";
    const caseDef = CASES[caseId];

    if (!caseDef) {
      return res.status(400).json({ error: "Neplatná úroveň obtížnosti" });
    }

    const sessionId = "session_" + Math.random().toString(36).substring(2, 9);`;

const newInitAndApis = `  // 1. Initialise a patient case
  app.post("/api/case/init", (req, res) => {
    const { difficulty } = req.body; // Case ID or level ("1", "2", "3")
    let caseId = difficulty || "1";
    
    if (caseId === "1" || caseId === "2" || caseId === "3") {
      const candidates = getCasesByFilter(undefined, parseInt(caseId, 10));
      if (candidates.length > 0) {
        const randomIndex = Math.floor(Math.random() * candidates.length);
        caseId = candidates[randomIndex].id;
      }
    }

    const caseDef = CASES[caseId];

    if (!caseDef) {
      return res.status(400).json({ error: "Neplatný případ nebo úroveň obtížnosti" });
    }

    const sessionId = "session_" + Math.random().toString(36).substring(2, 9);`;

content = content.replace(oldInit, newInitAndApis);

// 4. Insert other APIs before /api/case/session/:sessionId
const fetchSessionToken = '  // 2. Fetch current session status';
const fetchSessionIndex = content.indexOf(fetchSessionToken);

if (fetchSessionIndex === -1) {
  console.error("Could not locate fetch session route");
  process.exit(1);
}

const additionalApis = `  // 1b. Fetch all cases (filtered by specialty/difficulty)
  app.get("/api/cases", (req, res) => {
    const { specialty, difficulty } = req.query;
    let levelNum: number | undefined;
    if (typeof difficulty === "string") {
      levelNum = parseInt(difficulty, 10);
    }
    const cases = getCasesByFilter(
      typeof specialty === "string" ? specialty : undefined,
      levelNum
    );
    res.json(cases);
  });

  // 1c. Generate AI case
  app.post("/api/case/generate", async (req, res) => {
    const { specialty, difficulty } = req.body;
    const level = parseInt(difficulty, 10) || 1;
    const difficultyStr = level === 3 ? "hard" : level === 2 ? "medium" : "easy";
    const selectedSpecialty = specialty || "Kardiologie";

    try {
      const gemini = getGeminiClient();
      
      const prompt = \`
Jsi špičkový klinický architekt a lékařský trenažér. Vygeneruj kompletní, vysoce realistický klinický případ pro urgentní příjem ("Urgentní příjem") v češtině, který odpovídá zadaným parametrům:
- Obor (Specialty): \${selectedSpecialty}
- Obtížnost (Level): \${level} (1 = snadná, 2 = střední, 3 = kritická/šoková)

Případ musí přesně odpovídat následujícímu JSON schématu:
{
  "id": "gen_\${Math.random().toString(36).substring(2, 9)}",
  "level": \${level},
  "difficulty": "\${difficultyStr}",
  "specialty": "\${selectedSpecialty}",
  "title": "Stručný název diagnózy (např. Akutní infarkt myokardu)",
  "name": "Jméno a příjmení pacienta (české, např. Jan Novák)",
  "age": věk pacienta (číslo),
  "sex": "Muž" nebo "Žena",
  "mainComplaint": "Hlavní potíž (např. Bolest na hrudi)",
  "complaintDetail": "Podrobný popis potíží pacienta při příjmu",
  "history": ["Seznam osobní anamnézy (např. ICHS, hypertenze)"],
  "allergies": ["Alergie (např. PENICILIN, nebo Bez známých alergií)"],
  "triageClass": "Stupeň triáže ESI (1 až 5, kde 1 = Resuscitace, 2 = Kritický, 3 = Naléhavý, 4 = Standardní, 5 = Nenaléhavý)",
  "vitals": {
    "tf": tepová frekvence (číslo),
    "tk_sys": krevní tlak systolický (číslo),
    "tk_dia": krevní tlak diastolický (číslo),
    "spo2": saturace kyslíkem v % (číslo),
    "gcs": Glasgow Coma Scale 3-15 (číslo),
    "temp": teplota v °C (číslo),
    "rr": dechová frekvence (číslo)
  },
  "secretDiagnosis": "Definitivní utajená diagnóza pacienta",
  "secretDiagnosisCode": "MKN-10 kód diagnózy (např. I21.1)",
  "labsResult": {
    "ko": "Zpráva z krevního obrazu",
    "biochem": "Zpráva z biochemie (včetně troponinu, CRP, atd.)",
    "coag": "Zpráva z koagulace",
    "mochem": "Zpráva z moči chemicky",
    "abr": "Zpráva z Astrupa (ABR)"
  },
  "imagingResult": {
    "ekg": "Popis 12svodového EKG",
    "rtg": "Popis RTG hrudníku",
    "echo": "Popis echokardiografie",
    "ct": "Popis CT vyšetření"
  },
  "patientHistory": ["Seznam osobní anamnézy"],
  "vitalSigns": {
    "tf": tepová frekvence,
    "tk_sys": systolický tlak,
    "tk_dia": diastolický tlak,
    "spo2": saturace,
    "gcs": gcs,
    "temp": teplota,
    "rr": dechová frekvence
  },
  "physicalExam": "Popis fyzikálního vyšetření pacienta",
  "labValues": {
    "ko": "Zpráva z krevního obrazu",
    "biochem": "Zpráva z biochemie"
  },
  "decisionNodes": [
    {
      "question": "Otázka k prvnímu kroku léčby",
      "options": ["Možnost A", "Možnost B", "Možnost C"],
      "feedback": "Zpětná vazba ke správné odpovědi"
    }
  ],
  "feedback": "Celkové klinické doporučení pro řešení tohoto případu."
}

Ujisti se, že výstup je platný a syntakticky bezchybný JSON objekt a neobsahuje žádný text okolo. Všechny lékařské popisy, hodnoty a zprávy must be klinicky přesné, realistické a napsané v češtině podle standardů ČLS JEP.
\`;

      const response = await gemini.models.generateContent({
        model: "gemini-3.5-flash",
        contents: prompt,
        config: {
          responseMimeType: "application/json",
        }
      });

      const resText = response.text || "";
      const generatedCase = JSON.parse(resText.trim());

      if (!generatedCase.id || !generatedCase.title || !generatedCase.vitals || !generatedCase.secretDiagnosisCode) {
        throw new Error("Invalid schema generated by Gemini");
      }

      CASES[generatedCase.id] = generatedCase;
      res.json(generatedCase);
    } catch (error) {
      console.error("Gemini case generation failed, using fallback:", error);
      const fallbackCase = getFallbackCase(selectedSpecialty, level);
      const clonedCase = {
        ...fallbackCase,
        id: "gen_fallback_" + Math.random().toString(36).substring(2, 9),
      };
      CASES[clonedCase.id] = clonedCase;
      res.json(clonedCase);
    }
  });

`;

content = content.substring(0, fetchSessionIndex) + additionalApis + content.substring(fetchSessionIndex);

fs.writeFileSync(serverPath, content, 'utf-8');
console.log("Successfully refactored server.ts!");
