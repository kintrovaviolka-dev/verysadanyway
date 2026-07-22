import express from "express";
import path from "path";
import dotenv from "dotenv";
import { GoogleGenAI, Type } from "@google/genai";
import { createServer as createViteServer } from "vite";
import { getAllCases, getCaseById, getCasesByFilter, CaseDefinition } from "./src/data/cases/index";

dotenv.config();

const PORT = 3000;

// Lazy initialize Gemini client
let ai: GoogleGenAI | null = null;
function getGeminiClient(): GoogleGenAI {
  if (!ai) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      console.warn("GEMINI_API_KEY environment variable is not defined. Using rule-based fallback clinical engine.");
      throw new Error("GEMINI_API_KEY is missing");
    }
    ai = new GoogleGenAI({
      apiKey: apiKey,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        },
      },
    });
  }
  return ai;
}

// Case Database Structure
interface PatientVitals {
  tf: number;
  tk_sys: number;
  tk_dia: number;
  spo2: number;
  gcs: number;
  temp: number;
  rr: number;
}

const CASES: Record<string, CaseDefinition> = {};

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
  console.log(`Loaded ${all.length} cases into memory cache.\n`);
}
loadCasesIntoCache();

// Simple In-Memory Game Store
interface GameSession {
  sessionId: string;
  caseId: string;
  level: number;
  patient: {
    name: string;
    age: number;
    sex: string;
    mainComplaint: string;
    complaintDetail: string;
    history: string[];
    allergies: string[];
    triageClass: string;
  };
  vitals: PatientVitals;
  vitalsHistory?: Array<{ time: number; tf: number; tk_sys: number; tk_dia: number; spo2: number; rr: number }>;
  elapsedTime: number; // in minutes
  actionLog: Array<{ time: string; text: string; source: "user" | "system" | "result" }>;
  chatHistory: Record<string, Array<{ sender: string; text: string; time: string }>>; // specialty -> messages
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

const sessions: Record<string, GameSession> = {};

function recordVitalsHistory(session: GameSession) {
  if (!session.vitalsHistory) {
    session.vitalsHistory = [];
  }
  const existing = session.vitalsHistory.find(h => h.time === session.elapsedTime);
  if (existing) {
    existing.tf = session.vitals.tf;
    existing.tk_sys = session.vitals.tk_sys;
    existing.tk_dia = session.vitals.tk_dia;
    existing.spo2 = session.vitals.spo2;
    existing.rr = session.vitals.rr;
  } else {
    session.vitalsHistory.push({
      time: session.elapsedTime,
      tf: session.vitals.tf,
      tk_sys: session.vitals.tk_sys,
      tk_dia: session.vitals.tk_dia,
      spo2: session.vitals.spo2,
      rr: session.vitals.rr
    });
  }
}

async function startServer() {
  const app = express();
  app.use(express.json());

  // API Endpoints
  
  // 1. Initialise a patient case
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

    const sessionId = "session_" + Math.random().toString(36).substring(2, 9);
    
    // Set up initial session
    const session: GameSession = {
      sessionId,
      caseId,
      level: caseDef.level,
      patient: {
        name: caseDef.name,
        age: caseDef.age,
        sex: caseDef.sex,
        mainComplaint: caseDef.mainComplaint,
        complaintDetail: caseDef.complaintDetail,
        history: caseDef.history,
        allergies: caseDef.allergies,
        triageClass: caseDef.triageClass
      },
      vitals: { ...caseDef.vitals },
      vitalsHistory: [
        {
          time: 0,
          tf: caseDef.vitals.tf,
          tk_sys: caseDef.vitals.tk_sys,
          tk_dia: caseDef.vitals.tk_dia,
          spo2: caseDef.vitals.spo2,
          rr: caseDef.vitals.rr
        }
      ],
      elapsedTime: 0,
      actionLog: [
        { time: "14:22", text: "Pacient přijat na urgentní příjem RZP.", source: "system" }
      ],
      chatHistory: {
        "Kardiolog": [],
        "Chirurg": [],
        "Neurolog": [],
        "ARO": []
      },
      labsOrdered: [],
      labsReady: [],
      labsResultsReceived: {},
      imagingOrdered: [],
      imagingReady: [],
      imagingResultsReceived: {},
      therapies: {
        oxygen: "Žádné zajištění",
        ivAccess: "Nezaveden",
        infusion: "",
        meds: []
      },
      isCompleted: false,
      traumaTeamActivated: false,
      triageConfirmed: false,
      selectedTriageClass: "",
      rhythmInterpreted: false
    };

    sessions[sessionId] = session;
    res.json(session);
  });

  // 1b. Fetch all cases (filtered by specialty/difficulty)
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
      
      const prompt = `
Jsi špičkový klinický architekt a lékařský trenažér. Vygeneruj kompletní, vysoce realistický klinický případ pro urgentní příjem ("Urgentní příjem") v češtině, který odpovídá zadaným parametrům:
- Obor (Specialty): ${selectedSpecialty}
- Obtížnost (Level): ${level} (1 = snadná, 2 = střední, 3 = kritická/šoková)

Případ musí přesně odpovídat následujícímu JSON schématu:
{
  "id": "gen_${Math.random().toString(36).substring(2, 9)}",
  "level": ${level},
  "difficulty": "${difficultyStr}",
  "specialty": "${selectedSpecialty}",
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
`;

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

  // 2. Fetch current session status
  app.get("/api/case/session/:sessionId", (req, res) => {
    const { sessionId } = req.params;
    const session = sessions[sessionId];
    if (!session) {
      return res.status(404).json({ error: "Relace nebyla nalezena" });
    }
    res.json(session);
  });

  // Helper: Format clinical state as a string to feed to Gemini
  function formatClinicalContext(session: GameSession): string {
    const caseDef = CASES[session.caseId];
    return `
=== KLINICKÝ STAV PACIENTA ===
Jméno: ${session.patient.name} (${session.patient.age} let, ${session.patient.sex})
Hlavní obtíže: ${session.patient.mainComplaint} - ${session.patient.complaintDetail}
Anamnéza: ${session.patient.history.join(", ")}
Alergie: ${session.patient.allergies.length > 0 ? session.patient.allergies.join(", ") : "Bez známých alergií"}
Aktuální vitální funkce:
- Tepová frekvence (TF): ${session.vitals.tf} bpm
- Krevní tlak (TK): ${session.vitals.tk_sys}/${session.vitals.tk_dia} mmHg
- Saturace O2: ${session.vitals.spo2}%
- GCS: ${session.vitals.gcs}/15
- Teplota: ${session.vitals.temp} °C
- Dechová frekvence (DF): ${session.vitals.rr}/min

Provedené intervence / Terapie:
- Kyslík: ${session.therapies.oxygen}
- Žilní přístup (i.v.): ${session.therapies.ivAccess}
- Infúze: ${session.therapies.infusion || "Žádná"}
- Medikace: ${session.therapies.meds.length > 0 ? session.therapies.meds.map(m => `${m.name} ${m.dose} ${m.route}`).join(", ") : "Žádná"}

Objednaná vyšetření:
- Laboratoř objednáno: ${session.labsOrdered.join(", ")} (Hotovo: ${session.labsReady.join(", ")})
- Zobrazovací metody objednáno: ${session.imagingOrdered.join(", ")} (Hotovo: ${session.imagingReady.join(", ")})

Uplynulý čas: ${session.elapsedTime} minut od příjmu.
Skutečná diagnóza (kterou lékař odhaluje): ${caseDef.secretDiagnosis}
`;
  }

  // 3. Process actions (structured or free-text)
  app.post("/api/case/action", async (req, res) => {
    const { sessionId, actionId, actionText, details } = req.body;
    const session = sessions[sessionId];
    if (!session) {
      return res.status(404).json({ error: "Relace nebyla nalezena" });
    }

    const sendSession = (s: GameSession) => {
      recordVitalsHistory(s);
      return res.json(s);
    };

    const caseDef = CASES[session.caseId];
    const timestamp = new Date(14 * 3600 * 1000 + 22 * 60 * 1000 + session.elapsedTime * 60 * 1000)
      .toTimeString()
      .substring(0, 5);

    // Increment elapsed time slightly for each action
    session.elapsedTime += Math.floor(Math.random() * 3) + 1; // 1-3 minutes

    // Check if rhythm is interpreted for critical cardiac actions
    const isCardiacAction = (id: string, text: string, det: any) => {
      const cardiacKeywords = ["defibril", "výboj", "shock", "amiodar", "adrenalin", "epinefrin", "noradrenalin", "norepinefrin", "dobutamin", "kardioverze", "lidokain", "atropin"];
      if (id === "add_medication" && det && det.name) {
        const medName = det.name.toLowerCase();
        if (cardiacKeywords.some(kw => medName.includes(kw))) return true;
      }
      if (text) {
        const textLow = text.toLowerCase();
        if (cardiacKeywords.some(kw => textLow.includes(kw))) return true;
      }
      return false;
    };

    if (isCardiacAction(actionId, actionText, details) && !session.rhythmInterpreted) {
      session.actionLog.push({
        time: timestamp,
        text: "Pokus o kardiovaskulární zákrok zablokován: chybí klinická interpretace EKG rytmu.",
        source: "system"
      });
      return res.json({
        ...session,
        actionLog: [
          ...session.actionLog,
          {
            time: timestamp,
            text: "❌ Akce zamčena! Nejprve musíte natočit 12svodové EKG a klinicky interpretovat běžící rytmus kliknutím na monitor.",
            source: "result"
          }
        ]
      });
    }

    // A. Structured Actions Handling
    if (actionId) {
      if (actionId === "interpret_rhythm") {
        session.rhythmInterpreted = true;
        session.actionLog.push({
          time: timestamp,
          text: "🔓 EKG rytmus pacienta byl úspěšně klinicky interpretován. Kardiovaskulární intervence jsou odblokovány.",
          source: "system"
        });
        return sendSession(session);
      }

      if (actionId === "confirm_triage") {
        const { triageClass } = details;
        session.triageConfirmed = true;
        session.selectedTriageClass = triageClass;
        
        let scoreMessage = `Triage potvrzena na stupeň ${triageClass}.`;
        if (triageClass !== caseDef.triageClass) {
          scoreMessage += ` (Pozor: Triážní sestra původně doporučovala stupeň ${caseDef.triageClass}).`;
        }

        session.actionLog.push({ time: timestamp, text: scoreMessage, source: "system" });
        return sendSession(session);
      }

      if (actionId === "oxygen_setup") {
        const { value } = details; // e.g. "O2 Brýle 2L/min", "O2 Maska 10L/min"
        session.therapies.oxygen = value;
        session.actionLog.push({ time: timestamp, text: `Zahájena oxygenoterapie: ${value}.`, source: "user" });

        // Update SpO2 based on therapy
        if (session.caseId === "1" && session.vitals.spo2 < 95) {
          session.vitals.spo2 = Math.min(98, session.vitals.spo2 + 4);
          session.vitals.rr = Math.max(16, session.vitals.rr - 2);
        } else if (session.caseId === "2" && session.vitals.spo2 < 95) {
          session.vitals.spo2 = Math.min(96, session.vitals.spo2 + 6);
          session.vitals.rr = Math.max(18, session.vitals.rr - 3);
        } else if (session.caseId === "3" && session.vitals.spo2 < 95) {
          // In polytrauma, needs intubation or high flow to fully fix SpO2
          session.vitals.spo2 = Math.min(92, session.vitals.spo2 + 4);
        } else if (session.caseId === "9" && session.vitals.spo2 < 95) {
          session.vitals.spo2 = Math.min(99, session.vitals.spo2 + 3);
        } else if (session.caseId === "10" && session.vitals.spo2 < 95) {
          session.vitals.spo2 = Math.min(93, session.vitals.spo2 + 4); // Nebulizer needed for full relief
        } else if (session.caseId === "11" && session.vitals.spo2 < 95) {
          session.vitals.spo2 = Math.min(94, session.vitals.spo2 + 2); // Extremely dangerous airway, needs intubation
        } else if (session.caseId === "12" && session.vitals.spo2 < 95) {
          session.vitals.spo2 = Math.min(89, session.vitals.spo2 + 5); // Pulmonary edema, needs CPAP/NIV and Furosemid
        } else if (session.caseId === "13") {
          session.vitals.spo2 = Math.min(100, session.vitals.spo2 + 2);
        }

        return sendSession(session);
      }

      if (actionId === "iv_setup") {
        const { value } = details; // e.g. "Pravá antekubita 18G"
        session.therapies.ivAccess = value;
        session.actionLog.push({ time: timestamp, text: `Zaveden periferní žilní katétr (i.v.): ${value}.`, source: "user" });
        return sendSession(session);
      }

      if (actionId === "infusion_setup") {
        const { value } = details;
        session.therapies.infusion = value;
        session.actionLog.push({ time: timestamp, text: `Zahájena infuze: ${value}.`, source: "user" });

        if (session.caseId === "3") {
          // Infusion improves BP slightly in hemorrhagic shock, but needs transfusion
          if (value.toLowerCase().includes("transf") || value.toLowerCase().includes("erytr") || value.toLowerCase().includes("plazm")) {
            session.vitals.tk_sys = Math.min(100, session.vitals.tk_sys + 15);
            session.vitals.tk_dia = Math.min(60, session.vitals.tk_dia + 10);
            session.vitals.tf = Math.max(105, session.vitals.tf - 15);
          } else {
            session.vitals.tk_sys = Math.min(90, session.vitals.tk_sys + 5);
          }
        }
        return sendSession(session);
      }

      if (actionId === "add_medication") {
        const { name, dose, route } = details;
        if (!name || !dose || !route) {
          return res.status(400).json({ error: "Vyplňte název, dávku a způsob podání léku." });
        }

        session.therapies.meds.push({ name, dose, route });
        session.actionLog.push({ time: timestamp, text: `Podán lék: ${name} ${dose} ${route}.`, source: "user" });

        // clinical reactions to drugs
        const nLow = name.toLowerCase();
        if (session.caseId === "1") {
          // ACS
          if (nLow.includes("anopyrin") || nLow.includes("aspirin") || nLow.includes("acetylsalicyl")) {
            session.actionLog.push({ time: timestamp, text: "Účinek kyseliny acetylsalicylové nastupuje. Blokáda agregace destiček zahájena.", source: "system" });
          }
          if (nLow.includes("heparin")) {
            session.actionLog.push({ time: timestamp, text: "Antikoagulace heparinem aktivní.", source: "system" });
          }
          if (nLow.includes("nitroglycerin") || nLow.includes("isoket")) {
            session.vitals.tk_sys = Math.max(110, session.vitals.tk_sys - 15);
            session.vitals.tf = Math.max(80, session.vitals.tf - 5);
            session.actionLog.push({ time: timestamp, text: "Vazodilatační účinek nitroglycerinu. Snížení dotížení srdce, úleva od stenokardií.", source: "system" });
          }
        } else if (session.caseId === "2") {
          // PE
          if (nLow.includes("heparin") || nLow.includes("clexane") || nLow.includes("fraxiparin")) {
            session.actionLog.push({ time: timestamp, text: "Antikoagulace zahájena. Zabránění propagaci trombu v plicnici.", source: "system" });
          }
        } else if (session.caseId === "3") {
          // Trauma
          if (nLow.includes("exacyl") || nLow.includes("tranexam")) {
            session.actionLog.push({ time: timestamp, text: "Kyselina tranexamová podána. Antifibrinolytická stabilizace krevní sraženiny aktivní.", source: "system" });
          }
        } else if (session.caseId === "9") {
          // Febrile seizures
          if (nLow.includes("diazepam") || nLow.includes("midazolam") || nLow.includes("apaurin")) {
            session.vitals.rr = 18;
            session.vitals.tf = Math.max(100, session.vitals.tf - 10);
            session.actionLog.push({ time: timestamp, text: "Podán benzodiazepin. Svalové křeče a záškuby bezprostředně ustávají, dýchání se zklidňuje. Přetrvává hluboký útlum vědomí (postiktální spánek).", source: "system" });
          }
          if (nLow.includes("paracetamol") || nLow.includes("panadol") || nLow.includes("ibuprofen") || nLow.includes("nurofen") || nLow.includes("novalgin")) {
            session.vitals.temp = Math.max(37.4, session.vitals.temp - 1.5);
            session.vitals.tf = Math.max(105, session.vitals.tf - 15);
            session.actionLog.push({ time: timestamp, text: "Podáno antipyretikum. Horečka postupně klesá, což zmírňuje celkový metabolický stres pacienta.", source: "system" });
          }
        } else if (session.caseId === "10") {
          // Status asthmaticus
          if (nLow.includes("salbutamol") || nLow.includes("ventolin") || nLow.includes("ipratropium") || nLow.includes("atrovent")) {
            session.vitals.spo2 = Math.min(96, session.vitals.spo2 + 5);
            session.vitals.rr = Math.max(26, session.vitals.rr - 8);
            session.actionLog.push({ time: timestamp, text: "Podána inhalační bronchodilatační terapie nebulizací. Poslechově dochází k částečnému rozvzdění dýchání, ustupuje fenomén 'tichých plic'.", source: "system" });
          }
          if (nLow.includes("solu-medrol") || nLow.includes("solumedrol") || nLow.includes("methylprednisolon") || nLow.includes("dexamethas") || nLow.includes("dexamed")) {
            session.vitals.rr = Math.max(30, session.vitals.rr - 4);
            session.actionLog.push({ time: timestamp, text: "Systémové kortikosteroidy podány. Nastupuje protizánětlivý účinek, který zredukuje otok sliznice dýchacích cest.", source: "system" });
          }
          if (nLow.includes("magnes") || nLow.includes("magnéz") || nLow.includes("mgso4")) {
            session.vitals.spo2 = Math.min(99, session.vitals.spo2 + 5);
            session.vitals.rr = Math.max(20, session.vitals.rr - 10);
            session.actionLog.push({ time: timestamp, text: "Magnesium sulfát podán v pomalé i.v. infuzi. Dochází k výrazné relaxaci hladkého svalstva bronchů, dechová tíseň ustupuje a saturace stoupá.", source: "system" });
          }
        } else if (session.caseId === "11") {
          // Epiglottitis
          if (nLow.includes("ceftriaxon") || nLow.includes("cefota") || nLow.includes("lentocilin")) {
            session.actionLog.push({ time: timestamp, text: "Podána širokospektrá antibiotika i.v. Cílené krytí Haemophilus influenzae b zahájeno.", source: "system" });
          }
          if (nLow.includes("dexamethas") || nLow.includes("dexamed") || nLow.includes("solu-medrol")) {
            session.actionLog.push({ time: timestamp, text: "Podány kortikoidy i.v. s cílem snížit masivní zánětlivý otok epiglotis.", source: "system" });
          }
        } else if (session.caseId === "12") {
          // Cardiogenic shock
          if (nLow.includes("noradrenalin") || nLow.includes("norepinefrin")) {
            session.vitals.tk_sys = Math.min(105, session.vitals.tk_sys + 22);
            session.vitals.tk_dia = Math.min(65, session.vitals.tk_dia + 15);
            session.actionLog.push({ time: timestamp, text: "Zahájena kontinuální infuze noradrenalinu i.v. Krevní tlak se zvyšuje směrem k bezpečnému pásmu, zlepšuje se perfúze koronárních a mozkových tepen.", source: "system" });
          }
          if (nLow.includes("dobutamin")) {
            session.vitals.tf = Math.max(100, session.vitals.tf - 8);
            session.actionLog.push({ time: timestamp, text: "Zahájena kontinuální infuze dobutaminu i.v. Inotropní podpora posiluje kontraktilitu oslabeného levokomorového myokardu.", source: "system" });
          }
          if (nLow.includes("furosemid") || nLow.includes("lasix")) {
            session.vitals.spo2 = Math.min(94, session.vitals.spo2 + 8);
            session.vitals.rr = Math.max(20, session.vitals.rr - 6);
            session.actionLog.push({ time: timestamp, text: "Podán Furosemid i.v. Venodilatační účinek ulehčuje levé komoře a následný diuretický efekt zmírňuje plicní edém.", source: "system" });
          }
          if (nLow.includes("heparin")) {
            session.actionLog.push({ time: timestamp, text: "Antikoagulace heparinem i.v. aktivní.", source: "system" });
          }
          if (nLow.includes("anopyrin") || nLow.includes("aspirin")) {
            session.actionLog.push({ time: timestamp, text: "Podána kyselina acetylsalicylová. Protideštičkový účinek zahájen.", source: "system" });
          }
        } else if (session.caseId === "13") {
          // iCMP
          if (nLow.includes("actilyse") || nLow.includes("alteplas") || nLow.includes("trombolyz")) {
            session.actionLog.push({ time: timestamp, text: "Zahájeno podávání systémové trombolýzy (Actilyse i.v. bolus a kontinuální infuze). Rekanalizace uzavřené mozkové tepny započala.", source: "system" });
          }
          if (nLow.includes("urapidil") || nLow.includes("ebrantil")) {
            session.vitals.tk_sys = Math.max(140, session.vitals.tk_sys - 25);
            session.vitals.tk_dia = Math.max(80, session.vitals.tk_dia - 10);
            session.actionLog.push({ time: timestamp, text: "Urapidil i.v. bolusově/infuzně podán. Krevní tlak kontrolovaně klesá pod limitních 185/110 mmHg, což umožňuje bezpečné podání trombolýzy.", source: "system" });
          }
        }

        return sendSession(session);
      }

      if (actionId === "order_labs") {
        const { labs } = details; // Array of strings: "ko", "biochem", "coag", "mochem", "abr"
        const addedLabs: string[] = [];
        
        labs.forEach((l: string) => {
          if (!session.labsOrdered.includes(l)) {
            session.labsOrdered.push(l);
            addedLabs.push(l);
          }
        });

        if (addedLabs.length > 0) {
          session.actionLog.push({
            time: timestamp,
            text: `Odeslána žádanka do laboratoře STATIM: ${addedLabs.map(l => l.toUpperCase()).join(", ")}.`,
            source: "user"
          });

          // Simulate lab processing delay
          const delayMinutes = 10;
          setTimeout(() => {
            addedLabs.forEach(l => {
              if (sessions[sessionId] && !sessions[sessionId].labsReady.includes(l)) {
                sessions[sessionId].labsReady.push(l);
                sessions[sessionId].labsResultsReceived[l] = caseDef.labsResult[l] || "Nález bez patologie.";
                sessions[sessionId].actionLog.push({
                  time: new Date(14 * 3600 * 1000 + 22 * 60 * 1000 + (session.elapsedTime + delayMinutes) * 60 * 1000).toTimeString().substring(0, 5),
                  text: `Výsledky STATIM laboratoře k dispozici: ${l.toUpperCase()}.`,
                  source: "result"
                });
              }
            });
          }, 4000); // 4 seconds mock delay in real time
        }
        return sendSession(session);
      }

      if (actionId === "order_imaging") {
        const { method } = details; // "ekg", "rtg", "echo", "ct"
        if (!session.imagingOrdered.includes(method)) {
          session.imagingOrdered.push(method);
          session.actionLog.push({
            time: timestamp,
            text: `Nařízeno urgentní vyšetření: ${method.toUpperCase()}.`,
            source: "user"
          });

          // Simulate delay
          const delayMinutes = method === "ekg" || method === "echo" ? 3 : 8;
          setTimeout(() => {
            if (sessions[sessionId] && !sessions[sessionId].imagingReady.includes(method)) {
              sessions[sessionId].imagingReady.push(method);
              sessions[sessionId].imagingResultsReceived[method] = caseDef.imagingResult[method] || "Nález bez patologie.";
              sessions[sessionId].actionLog.push({
                time: new Date(14 * 3600 * 1000 + 22 * 60 * 1000 + (session.elapsedTime + delayMinutes) * 60 * 1000).toTimeString().substring(0, 5),
                text: `Výsledek vyšetření ${method.toUpperCase()} je připraven k zobrazení.`,
                source: "result"
              });
            }
          }, delayMinutes * 400); // quick mock delay
        }
        return sendSession(session);
      }

      if (actionId === "activate_trauma") {
        session.traumaTeamActivated = true;
        session.actionLog.push({
          time: timestamp,
          text: "🚨 AKTIVOVÁN TRAUMA TÝM URGENTNÍHO PŘÍJMU! (Chirurg, traumatolog, ARO a radiolog se schází na sále).",
          source: "user"
        });
        return sendSession(session);
      }
    }

    // B. Free-Text Clinical Actions Evaluation (using Gemini API as primary, falling back if key is missing)
    if (actionText && actionText.trim()) {
      session.actionLog.push({ time: timestamp, text: `Lékař: "${actionText}"`, source: "user" });

      try {
        const gemini = getGeminiClient();
        const clinicalContext = formatClinicalContext(session);

        const prompt = `
Jsi pokročilé vyhodnocovací jádro hry pro simulátor klinického rozhodování na českém urgentním příjmu.
Vaším úkolem je analyzovat klinický zásah/akci, kterou zadal lékař (uživatel) v českém jazyce.

KONTEXT PACIENTA:
${clinicalContext}

ZADANÁ AKCE LÉKAŘE (v češtině):
"${actionText}"

SMĚRNICE PRO VYHODNOCENÍ:
1. Akce musí být konkrétní. Obecná vyjádření jako "udělám odběry" nebo "dám léky" jsou NEPLATNÁ.
   - Pokud uživatel napsal něco obecného, nastav "isSpecific" na false a do "message" napiš výzvu s vysvětlením, co přesně má specifikovat (např. "Které konkrétní odběry?" nebo "Který lék a v jaké dávce chcete podat?").
2. Pokud jde o léky, musí uvést název léku, dávku a cestu podání (např. "Anopyrin 250mg p.o." nebo "Nitroglycerin 0.5mg s.l." nebo "Heparin 5000 IU i.v."). "Stoptussin" nebo obecně "dám léky proti bolesti" bez specifikace je nepřijatelné.
3. Pokud lékař nařídí konkrétní platný krok pro danou diagnózu, popiš reakci pacienta, vylepšení/zhoršení vitálních funkcí (vitalsDelta) a přidej to do klinického záznamu.
4. Pokud lékař nařídí kritický nebo urgentní odběr (např. KO, biochemie, troponin, koagulace, D-Dimery, ABR/Astrup), detekuj to a nastav příslušné laboratoře v poli "requestedLabs", a "isLabsOrdered" na true.
5. Reaguj profesionálně, v odborné češtině s klinickou vážností.

Odpověz VÝHRADNĚ v platném formátu JSON s následující strukturou (nepoužívej markdown obal kromě čistého json):
{
  "isSpecific": boolean,
  "success": boolean,
  "message": "Detailní klinické vyjádření o provedené akci, jejím výsledku nebo nutnosti upřesnění.",
  "actionLogEntry": "Zkrácený text pro oficiální dekurs pacienta (např. 'Zavedena i.v. linka, odebrána STATIM laboratoř')",
  "vitalsDelta": {
    "tk_sys": number, // změna sys tlaku (např. -10, +5)
    "tk_dia": number, // změna dia tlaku
    "tf": number,     // změna tepové frekvence (např. -15)
    "spo2": number,   // změna saturace v %
    "rr": number      // změna dechové frekvence
  },
  "isLabsOrdered": boolean,
  "requestedLabs": string[] // např. ["ko", "biochem", "coag", "abr"]
}
`;

        const response = await gemini.models.generateContent({
          model: "gemini-3.5-flash",
          contents: prompt,
          config: {
            responseMimeType: "application/json",
          }
        });

        const resText = response.text || "";
        const data = JSON.parse(resText.trim());

        // Apply state updates from Gemini response
        if (data.success && data.isSpecific) {
          if (data.vitalsDelta) {
            const delta = data.vitalsDelta;
            if (delta.tf) session.vitals.tf = Math.max(40, Math.min(200, session.vitals.tf + delta.tf));
            if (delta.tk_sys) session.vitals.tk_sys = Math.max(60, Math.min(250, session.vitals.tk_sys + delta.tk_sys));
            if (delta.tk_dia) session.vitals.tk_dia = Math.max(30, Math.min(150, session.vitals.tk_dia + delta.tk_dia));
            if (delta.spo2) session.vitals.spo2 = Math.max(50, Math.min(100, session.vitals.spo2 + delta.spo2));
            if (delta.rr) session.vitals.rr = Math.max(8, Math.min(50, session.vitals.rr + delta.rr));
          }

          if (data.actionLogEntry) {
            session.actionLog.push({ time: timestamp, text: data.actionLogEntry, source: "system" });
          }

          if (data.isLabsOrdered && data.requestedLabs) {
            data.requestedLabs.forEach((l: string) => {
              const labKey = l.toLowerCase();
              if (["ko", "biochem", "coag", "mochem", "abr"].includes(labKey) && !session.labsOrdered.includes(labKey)) {
                session.labsOrdered.push(labKey);
                setTimeout(() => {
                  if (sessions[sessionId] && !sessions[sessionId].labsReady.includes(labKey)) {
                    sessions[sessionId].labsReady.push(labKey);
                    sessions[sessionId].actionLog.push({
                      time: new Date(14 * 3600 * 1000 + 22 * 60 * 1000 + (session.elapsedTime + 10) * 60 * 1000).toTimeString().substring(0, 5),
                      text: `Výsledky STATIM laboratoře k dispozici: ${labKey.toUpperCase()}.`,
                      source: "result"
                    });
                  }
                }, 4000);
              }
            });
          }
        }

        // Add feedback message to timeline
        session.actionLog.push({ time: timestamp, text: data.message, source: "result" });

      } catch (err) {
        console.error("Gemini action error or key missing, running fallback rules:", err);
        // Fallback rule engine if Gemini fails or is not configured
        const textLow = actionText.toLowerCase();
        
        let feedback = "";
        let logEntry = "";
        let isSpecific = true;

        if (textLow.includes("odběr") || textLow.includes("nabrat") || textLow.includes("laboratoř")) {
          const specificLabs = [];
          if (textLow.includes("ko") || textLow.includes("obraz")) specificLabs.push("ko");
          if (textLow.includes("biochem") || textLow.includes("troponin") || textLow.includes("kreatin") || textLow.includes("ionty")) specificLabs.push("biochem");
          if (textLow.includes("koagul") || textLow.includes("aptt") || textLow.includes("quick") || textLow.includes("inr")) specificLabs.push("coag");
          if (textLow.includes("moč") || textLow.includes("sediment")) specificLabs.push("mochem");
          if (textLow.includes("abr") || textLow.includes("astrup") || textLow.includes("plyny")) specificLabs.push("abr");

          if (specificLabs.length === 0) {
            isSpecific = false;
            feedback = "Které konkrétní odběry chcete nabrat? Specifikujte prosím (např. STATIM KO, Biochemie - troponin, koagulace, ABR).";
          } else {
            specificLabs.forEach(l => {
              if (!session.labsOrdered.includes(l)) {
                session.labsOrdered.push(l);
                setTimeout(() => {
                  if (sessions[sessionId] && !sessions[sessionId].labsReady.includes(l)) {
                    sessions[sessionId].labsReady.push(l);
                    sessions[sessionId].actionLog.push({
                      time: new Date(14 * 3600 * 1000 + 22 * 60 * 1000 + (sessions[sessionId].elapsedTime + 10) * 60 * 1000).toTimeString().substring(0, 5),
                      text: `Výsledky STATIM laboratoře k dispozici: ${l.toUpperCase()}.`,
                      source: "result"
                    });
                  }
                }, 4000);
              }
            });
            logEntry = `Odebrána krev na STATIM laboratoř: ${specificLabs.map(l => l.toUpperCase()).join(", ")}.`;
            feedback = `Sestra odebrala krev na vybrané panely: ${specificLabs.map(l => l.toUpperCase()).join(", ")}. Výsledky budou do 10-15 minut.`;
          }
        } else if (textLow.includes("ekg") || textLow.includes("natočit")) {
          if (!session.imagingOrdered.includes("ekg")) {
            session.imagingOrdered.push("ekg");
            setTimeout(() => {
              if (sessions[sessionId] && !sessions[sessionId].imagingReady.includes("ekg")) {
                sessions[sessionId].imagingReady.push("ekg");
              }
            }, 1000);
          }
          logEntry = "Natočeno 12svodové EKG.";
          feedback = "EKG sestra ihned natáčí. Výsledek je připraven k nahlédnutí na záložce zobrazovacích metod.";
        } else if (textLow.includes("anopyrin") || textLow.includes("aspirin")) {
          session.therapies.meds.push({ name: "Anopyrin", dose: "400mg", route: "p.o. rozkousat" });
          logEntry = "Podán Anopyrin 400mg p.o.";
          feedback = "Pacient rozkousal a polkl Anopyrin 400mg p.o. Kyselina acetylsalicylová zahajuje protideštičkový účinek.";
        } else if (textLow.includes("heparin")) {
          session.therapies.meds.push({ name: "Heparin", dose: "5000 IU", route: "i.v. bolus" });
          logEntry = "Podán Heparin 5000 IU i.v.";
          feedback = "Podáno 5000 IU nefrakcionovaného heparinu i.v. Antikoagulační účinek aktivní.";
        } else if (textLow.includes("kyslík") || textLow.includes("oxygen")) {
          session.therapies.oxygen = "O2 Maska 6L/min";
          logEntry = "Zahájena inhalace kyslíku maskou.";
          feedback = "Zaveden kyslík 6L/min přes obličejovou masku. Saturace O2 se zlepšuje.";
          session.vitals.spo2 = Math.min(99, session.vitals.spo2 + 5);
        } else {
          isSpecific = false;
          feedback = "Zadali jste obecnou nebo neinterpretovatelnou akci. Upřesněte konkrétní lék s dávkou a cestou (např. 'Anopyrin 400mg p.o.') nebo přesný diagnostický požadavek (např. 'Natočím 12svodové EKG').";
        }

        if (logEntry) {
          session.actionLog.push({ time: timestamp, text: logEntry, source: "system" });
        }
        session.actionLog.push({ time: timestamp, text: feedback, source: "result" });
      }
    }

    sendSession(session);
  });

  // 4. Live Chat with consultant
  app.post("/api/case/consult", async (req, res) => {
    const { sessionId, specialty, message } = req.body;
    const session = sessions[sessionId];
    if (!session) {
      return res.status(404).json({ error: "Relace nebyla nalezena" });
    }

    const sendSession = (s: GameSession) => {
      recordVitalsHistory(s);
      return res.json(s);
    };

    const caseDef = CASES[session.caseId];
    const timestamp = new Date(14 * 3600 * 1000 + 22 * 60 * 1000 + session.elapsedTime * 60 * 1000)
      .toTimeString()
      .substring(0, 5);

    // Save user message
    if (!session.chatHistory[specialty]) {
      session.chatHistory[specialty] = [];
    }
    session.chatHistory[specialty].push({
      sender: "MUDr. " + (session.level === 3 ? "Kučera (Urgent)" : "Novák (Urgent)"),
      text: message,
      time: timestamp
    });

    session.elapsedTime += 2; // Consulting takes 2 minutes

    let reply = "Rozumím. Máte k dispozici 12svodové EKG, výsledky laboratorních odběrů a stabilizovali jste vitální funkce?";

    try {
      const gemini = getGeminiClient();
      const clinicalContext = formatClinicalContext(session);

      const prompt = `
Jsi lékařský konzultant specializace [${specialty}] pracující v české nemocnici.
Vaším úkolem je odpovědět sloužícímu lékaři na urgentním příjmu, který s vámi konzultuje pacienta.

SPECIALISTA: ${specialty} (např. Kardiolog, Neurolog, Chirurg, ARO)
AKTUALNÍ STAV PACIENTA NA URGENTU:
${clinicalContext}

PERSONA SPECIALISTY:
- Kardiolog: Velmi vytížený. U STEMI (Case 1) vyžaduje 12svodové EKG, podání Anopyrinu a Heparinu k odsouhlasení transportu na katetrizační sál (PCI). U kardiogenního šoku (Case 12) vyžaduje podání noradrenalinu/dobutaminu a Furosemidu (pokrájí plicní edém) a okamžitý transport na katetrizační sál.
- Chirurg: Vyžaduje jasné indikace k operaci. U polytraumatu chce FAST USG a stabilizaci oběhu (trauma tým!). U pankreatitidy (Case 7) schvaluje konzervativní postup na JIP, masivní infuze a analgezii.
- Neurolog: U cévní mozkové příhody (Case 13) striktně vyžaduje urgentní CT mozku k vyloučení krvácení. Pokud je CT bez hemoragie, trvá na okamžitém zahájení systémové trombolýzy (Actilyse i.v.) v terapeutickém okně. Chce udržet krevní tlak pod 185/110 mmHg.
- ARO: Vyžaduje adekvátní stabilizaci dýchacích cest (intubace u polytraumatu, GCS < 9, nebo epiglottitidy). 
  - U febrilních křečí (Case 9) doporučuje paracetamol/ibuprofen a studené zábaly, pokud křeče pominuly po diazepamu. 
  - U těžkého dětského astmatu (Case 10) požaduje inhalační Ventolin/Atrovent, i.v. kortikoidy, a případně i.v. magnesium sulfát.
  - U epiglottitidy (Case 11) varuje před jakýmkoliv stresováním dítěte nebo vyšetřením krku špachtlí (hrozí udušení!) a doporučuje urgentní řízenou intubaci na sále s přítomností ARO lékaře.

Napište realistickou, klinicky správnou odpověď v češtině, která odráží českou nemocniční realitu (mírně formální, přímá, někdy mírně kousavá nebo skeptická, pokud lékař na urgentu zapomněl zásadní kroky).

Zpráva od lékaře na urgentním příjmu:
"${message}"

Napiš pouze samotný text odpovědi v češtině. Nepoužívej uvozovky ani markdown formátování.
`;

      const response = await gemini.models.generateContent({
        model: "gemini-3.5-flash",
        contents: prompt
      });

      if (response.text) {
        reply = response.text.trim();
      }
    } catch (err) {
      console.error("Consultation error or missing key, using fallback:", err);
      
      if (specialty === "Kardiolog") {
        if (session.caseId === "1") {
          const hasEkg = session.imagingReady.includes("ekg");
          const hasAnopyrin = session.therapies.meds.some(m => m.name.toLowerCase().includes("anopyrin"));
          const hasHeparin = session.therapies.meds.some(m => m.name.toLowerCase().includes("heparin"));

          if (hasEkg && hasAnopyrin && hasHeparin) {
            reply = "Skvělé, podle EKG a podané terapie se jedná o jasné STEMI spodní stěny. Pacient je stabilizovaný, ihned ho transportujte na katetrizační sál (PCI sál). Tým je připraven.";
          } else {
            reply = "Bez natočeného 12svodového EKG a podání Anopyrinu (400mg p.o.) s Heparinem (5000 IU i.v.) pacienta na sál nepřijmu. Doplňte terapii a zavolejte znovu!";
          }
        } else if (session.caseId === "12") {
          const hasEkg = session.imagingReady.includes("ekg");
          const hasVasoactive = session.therapies.meds.some(m => m.name.toLowerCase().includes("noradrenalin") || m.name.toLowerCase().includes("norepinefrin") || m.name.toLowerCase().includes("dobutamin"));

          if (hasEkg && hasVasoactive) {
            reply = "U pana Horáka s masivním předním STEMI a rozvinutým kardiogenním šokem je rekanalizace infarktové tepny absolutní prioritou! Výborně, že jste zahájili noradrenalin a dobutamin k udržení perfúze. Podání Furosemidu pro plicní edém schvaluji, ale opatrně na tlak. Pacienta ihned s monitorováním transportujte k nám na PCI sál!";
          } else {
            reply = "Tohle je kardiogenní šok při extenzivním předním STEMI s těžkým plicním edémem! Okamžitě natočte 12svodové EKG a musíte nasadit vazopresorickou a inotropní podporu (kontinuálně Noradrenalin a Dobutamin) k udržení tlaku, jinak nám při transportu na katetrizační sál zemře. Pak zavolejte znovu!";
          }
        } else if (session.caseId === "8") {
          reply = "U předávkování tricyklickými antidepresivy vidím na EKG masivní rozšíření QRS a prodloužení QTc. Je to vysoce rizikové pro komorové arytmie! Okamžitě podejte infuzi Natrium Bikarbonátu (NaHCO3) i.v. k alkalizaci, to stabilizuje myokard. Pokud dojde k zástavě, volejte ihned ARO.";
        } else {
          reply = "U tohoto pacienta to nevypadá na akutní koronární syndrom vyžadující katetrizaci. Doplňte echo k lůžku a vylučte plicní embolizaci.";
        }
      } else if (specialty === "Chirurg") {
        if (session.caseId === "3") {
          if (session.traumaTeamActivated) {
            reply = "Jsem na cestě na urgent. Připravte FAST USG k lůžku a zahajte masivní transfuzní protokol, pacient krvácí!";
          } else {
            reply = "Aktivujte neprodleně Trauma Tým! Tohle je masivní polytrauma v šoku, musíme kooperovat anestezii, chirurgii a radiologii.";
          }
        } else if (session.caseId === "7") {
          reply = "Ano, klinický obraz i extrémní elevace amyláz a lipáz jasně svědčí pro akutní biliární pankreatitidu. Pacientka potřebuje masivní infuzní hydrataci krystaloidy, úplný klid nalačno a kvalitní analgezii (např. Novalgin nebo opiáty). Pokud sonografie břicha vyloučila perforaci, budeme postupovat konzervativně. Přijeme ji na chirurgickou JIP.";
        } else {
          reply = "Objednejte ultrazvuk břicha a zhodnoťte lokální peritoneální příznaky. Pokud bude nález pozitivní, zavolejte.";
        }
      } else if (specialty === "Neurolog") {
        if (session.caseId === "13") {
          const hasCt = session.imagingReady.includes("ct");
          const hasThrombolysis = session.therapies.meds.some(m => m.name.toLowerCase().includes("actilyse") || m.name.toLowerCase().includes("alteplas") || m.name.toLowerCase().includes("trombolyz"));

          if (hasCt) {
            if (hasThrombolysis) {
              reply = "Nativní CT mozku je negativní na krvácení, což perfektně otevírá cestu pro systémovou trombolýzu. Skvělé, že jste Actilyse již zahájili v časném okně! Sledujte neurologický deficit (NIHSS) a krevní tlak, který držte pod 180/105 mmHg (případně podejte Urapidil). Pacientku ihned přebíráme na naši iktovou jednotku.";
            } else {
              reply = "CT vyloučilo krvácení a potvrzuje časné ischemické změny vpravo. Pacientka je v časném terapeutickém okně (příznaky trvají jen 1 hodinu), takže je absolutně indikována k podání systémové trombolýzy (Actilyse 0.9 mg/kg i.v. - 10% bolus, zbytek hodina infuze). Podání ihned zahajte a já připravuji lůžko na iktové jednotce.";
            }
          } else {
            reply = "U podezření na hyperakutní cévní mozkovou příhodu s těžkým deficitem (NIHSS 16) musíme okamžitě provést nativní CT mozku k vyloučení krvácení! Bez toho nelze podat trombolýzu a riskovali bychom fatální intracerebrální hemoragii. Pošlete ji ihned na CT a jakmile uvidíte snímky, volejte mě zpět!";
          }
        } else {
          reply = "Neurologické symptomy u tohoto případu nejsou dominantní. Pokud vyloučíte metabolickou či kardiální příčinu, můžeme pacienta konzultovat ambulantně.";
        }
      } else if (specialty === "ARO") {
        if (session.caseId === "3") {
          const hasIntubation = session.therapies.oxygen.toLowerCase().includes("intub") || session.therapies.oxygen.toLowerCase().includes("etk");
          if (!hasIntubation) {
            reply = "Pacient má GCS 9 a dechové selhávání! Proč ještě není zaintubovaný? Okamžitě zajistěte dýchací cesty (ETK), naložte pánevní pás a pak ho převezmeme na resuscitační lůžko.";
          } else {
            reply = "Výborně, dýchací cesty jsou zajištěny. Jaký je hemoglobin a laktát? Podali jste kyselinu tranexamovou? Pokračujte v transfuzích, lůžko JIP/ARO je připravené.";
          }
        } else if (session.caseId === "4") {
          reply = "Pro Tobiáška (3 roky) s podezřením na subglotickou laryngitidu je klíčové zajistit chladný vlhký vzduch a podat Dexamethason (0.6 mg/kg i.v./p.o.) nebo Rectodelt čípek. Pokud má inspirační stridor i v naprostém klidu, připravte inhalační adrenalin (1:1000) přes nebulizátor. Hlavně ho zbytečně nestresujte odběry a pláčem, to otok zhorší. Budeme ho monitorovat.";
        } else if (session.caseId === "5") {
          reply = "Pozor, to vypadá na rozvíjející se fulminantní meningokokovou sepsi! Rychle zajistěte periferní vstupy, podejte Ceftriaxon (STATIM i.v.) a okamžitě zahajte agresivní volumoterapii krystaloidy pro rozvíjející se šok. Kyslík samozřejmostí. Jsem na cestě k vám, převezmeme ji na dětskou resuscitační péči.";
        } else if (session.caseId === "6") {
          reply = "U anafylaxe s hypotenzí a bronchospasmem/laryngospasmem okamžitě aplikujte Adrenalin 0.5 mg i.m. (do stehna) - to je absolutní lék první volby! Souběžně zapněte plný kyslík, podejte i.v. krystaloidy pod tlakem, Dithiaden i.v. a Solu-Medrol i.v. Pokud otok hrtanu ohrozí dýchací cesty, připravte se na urgentní intubaci, jdu k vám!";
        } else if (session.caseId === "8") {
          reply = "Pacient v soporu (GCS 8) s intoxikací kardiotoxickými antidepresivy vyžaduje okamžitě zajištění dýchacích cest intubací kvůli riziku aspirace a útlumu dechu. EKG ukazuje hrozivě široký QRS - ihned podejte Natrium Bikarbonát 8.4% i.v. k alkalizaci séra (cílové pH 7.45-7.50). Bez zaintubování a podání bikarbonátu ho nepřijmeme, jdu vám s intubací pomoct.";
        } else if (session.caseId === "9") {
          reply = "U Honzíka (febrilní křeče) platí: jelikož křeče po rektálním diazepamu ustaly, nespěchejte s agresivní terapií. Podejte antipyretika (Paracetamol nebo Ibuprofen čípek) a chlapečka fyzikálně chlaďte vlažnými zábaly. Monitorujte dech a saturaci. Kdyby se křeče opakovaly, zavolejte nás k zajištění dýchacích cest, ale nyní ho spíše nechme v klidu dospat a hledejte zdroj horečky (ouška, krk).";
        } else if (session.caseId === "10") {
          const hasInhalation = session.therapies.meds.some(m => m.name.toLowerCase().includes("ventolin") || m.name.toLowerCase().includes("salbutamol") || m.name.toLowerCase().includes("atrovent") || m.name.toLowerCase().includes("ipratropium"));
          const hasSteroids = session.therapies.meds.some(m => m.name.toLowerCase().includes("solu") || m.name.toLowerCase().includes("methylprednisolon") || m.name.toLowerCase().includes("dexamet"));

          if (hasInhalation && hasSteroids) {
            reply = "Skvěle, inhalační bronchodilatancia s i.v. Solu-Medrolem jsou základ. Pokud má Sofinka stále těžkou dechovou tíseň, nasaďte magnesium sulfát (MgSO4) v pomalé infuzi, to uvolní křeč hladkých svalů. Kyslík dávejte kontinuálně. Kdyby se objevily známky dechového vyčerpání, poruchy vědomí nebo tichého hrudníku, okamžitě běžím intubovat.";
          } else {
            reply = "Těžký status asthmaticus u dítěte vyžaduje neprodlené podání inhalačního Ventolinu s Atroventem (nebulizací) a STATIM Solu-Medrol (1-2 mg/kg i.v.)! Bez této intensivní bronchodilatační a protizánětlivé léčby se dýchací cesty neuvolní. Ihned to podejte a monitorujte saturaci.";
          }
        } else if (session.caseId === "11") {
          reply = "🚨 POZOR! Tohle je jasná akutní epiglotitida (Adámek, 4 roky), extrémní urgentní situace v pediatrii! Jakýkoliv stres, násilné odběry krve nebo vyšetřování hrdla špachtlí jsou PŘÍSNĚ ZAKÁZÁNY pro riziko reflexního laryngospasmu a okamžitého udušení! Nechte chlapce v klidu sedět u maminky, podejte zvlhčený kyslík, pokud to snese bez pláče. Já okamžitě běžím na urgent s intubačním i tracheotomickým setem. Budeme intubovat kontrolovaně v anestezii!";
        } else {
          reply = "Pokud je pacient stabilní a nepotřebuje umělou plicní ventilaci ani vazopresory, uložte ho na standardní interní oddělení nebo JIP.";
        }
      }
    }

    session.chatHistory[specialty].push({
      sender: "MUDr. Černý (" + specialty + ")",
      text: reply,
      time: timestamp
    });

    // Log the consultation to timeline
    session.actionLog.push({
      time: timestamp,
      text: `Konzultováno s odborností ${specialty}.`,
      source: "system"
    });

    sendSession(session);
  });

  // 5. Close patient case and generate evaluation report (Debriefing)
  app.post("/api/case/close", async (req, res) => {
    const { sessionId, disposition, diagnosisCode, epikriza, checklist } = req.body;
    const session = sessions[sessionId];
    if (!session) {
      return res.status(404).json({ error: "Relace nebyla nalezena" });
    }

    session.isCompleted = true;
    const caseDef = CASES[session.caseId];

    try {
      const gemini = getGeminiClient();
      
      // Build detail of the game for Gemini to score
      const timelineStr = session.actionLog.map(l => `[${l.time}] ${l.text}`).join("\n");
      const medsStr = session.therapies.meds.map(m => `${m.name} ${m.dose} ${m.route}`).join(", ");

      const prompt = `
Jsi přísná a vysoce odborná atestační komise složená z předních českých lékařů urgentní medicíny.
Vaším úkolem je vyhodnotit simulovaný zásah lékaře na urgentním příjmu ("Urgentní příjem") a vypracovat detailní "Zpětnou vazbu" (Debriefing) v češtině.

SKUTEČNÝ STAV PACIENTA:
- Diagnóza: ${caseDef.secretDiagnosis} (Kód MKN-10: ${caseDef.secretDiagnosisCode})
- Úroveň obtížnosti: ${session.level}

ROZHODNUTÍ UŽIVATELE (LÉKAŘE):
- Zvolená dispozice/překlad: ${disposition} (Možnosti: home - propustit domů, ward - standardní odd., icu - JIP/ARO, surgery - operační sál/katetrizační PCI sál)
- Zadaný kód diagnózy MKN-10: ${diagnosisCode}
- Epikríza (shrnutí lékaře): "${epikriza}"
- Bezpečnostní checklist (safety): ${checklist ? checklist.join(", ") : "žádný"}

PRŮBĚH KLINICKÉHO ZÁSAHU (LOG ČASOVÉ OSY):
${timelineStr}

TERAPEUTICKÉ ÚDAJE:
- Zajištění kyslíku: ${session.therapies.oxygen}
- Žilní vstup: ${session.therapies.ivAccess}
- Podané infuze: ${session.therapies.infusion}
- Podané léky: ${medsStr || "Žádné"}
- Celkový strávený čas na lůžku: ${session.elapsedTime} minut

Napište podrobnou zpětnou vazbu rozdělenou do 4 sekcí:
1. SPRAVNOST DIAGNÓZY: Vyhodnoťte přesnost zadaného kódu MKN-10 (${diagnosisCode}) a epikrízy. Pro srovnání, správná diagnóza je ${caseDef.secretDiagnosis} (kód ${caseDef.secretDiagnosisCode}).
2. TERAPEUTICKÝ POSTUP: Vyhodnoťte, zda lékař podal všechny kritické léky a zákroky podle českých doporučených postupů ČLS JEP.
   - Pro STEMI (Case 1) je kritické: 12svodové EKG, Anopyrin (Aspirin), Heparin, transport na sál. Nitroglycerin je vhodný.
   - Pro Embolii (Case 2) je kritické: Kyslík, Heparin/LMWH, CT plicnice (nebo bedside Echo kvůli alergii na jód!).
   - Pro Polytrauma (Case 3) je kritické: Krční límec, zajištění dýchacích cest (intubace pro GCS 9), kyselina tranexamová (Exacyl), masivní transfuzní protokol, FAST USG, pánevní pás.
   - Pro Subglotickou laryngitidu u dítěte (Case 4) je kritické: chladný vzduch/inhalace, podání kortikosteroidů (Dexamethason i.v./p.o. nebo Rectodelt čípek). Pokud je těžký stridor v klidu, pak inhalační adrenalin. Vyvarovat se zbytečnému stresování dítěte (pláč zhoršuje otok).
   - Pro Meningokokovou sepse u dítěte (Case 5) je kritické: rychlý i.v. vstup, okamžité podání širokospektrých antibiotik (Ceftriaxon nebo Penicilin G) STATIM, volumoterapie (krystaloidy v bolusech) k zaléčení septického šoku, oxygenoterapie.
   - Pro Anafylaktický šok (Case 6) je kritické: podání Adrenalinu i.m. (nebo i.v. při selhání oběhu) jako lék první volby, high-flow kyslík, agresivní volumoterapie, antihistaminika (Dithiaden i.v.) a kortikosteroidy (Methylprednisolon/Solu-Medrol i.v.).
   - Pro Akutní pankreatitidu (Case 7) je kritické: masivní infuzní hydratace (krystaloidy, Ringer), účinná analgetizace (metamizol, metamizol + opioidy), klid nalačno, monitorování. Pozor na alergii na jód při CT.
   - Pro Intoxikaci tricyklickými antidepresivy (Case 8) je kritické: podání Natrium Bikarbonátu (NaHCO3 8.4%) i.v. k alkalizaci séra při rozšíření QRS na EKG, zajištění dýchacích cest (intubace u hlubokého bezvědomí GCS 8), aktivní uhlí, EKG monitoring.
   Vyčtěte opomenutí klíčových léků či zbytečné wasting time.
3. EFEKTIVITA A ČAS: Vyhodnoťte strávený čas (${session.elapsedTime} min). Byl postup rychlý, nebo lékař plýtval časem na zbytečná vyšetření (např. posílat nestabilního pacienta s traumatem v šoku na celotělové CT před stabilizací oběhu a podáním transfuzí)?
4. KOMUNIKACE: Byly konzultace se specialisty adekvátní a včasné?

Uveďte také CELKOVÉ HODNOCENÍ vyjádřené v procentech (0% až 100%) na základě lékařské preciznosti a bezpečnosti pacienta.

Odpovězte výhradně v češtině, formátujte srozumitelně v Markdownu s elegantní strukturou. Nepoužívejte promo hantýrku ani anglicismy, mluvte jako vážený český primář.
`;

      const response = await gemini.models.generateContent({
        model: "gemini-3.5-flash",
        contents: prompt
      });

      session.debriefing = response.text || "Hodnocení se nepodařilo vygenerovat.";

    } catch (err) {
      console.error("Evaluation generation error:", err);
      // Fallback deterministic debriefing generator
      let score = 50;
      let review = "### 1. Správnost diagnózy\n";
      
      const isCorrectDiag = diagnosisCode.trim().toUpperCase().includes(caseDef.secretDiagnosisCode.toUpperCase()) || epikriza.toLowerCase().includes(caseDef.secretDiagnosis.toLowerCase().substring(0, 10));
      if (isCorrectDiag) {
        score += 20;
        review += `✅ **Výborně.** Stanovil jste správnou diagnózu: **${caseDef.secretDiagnosis}** (Kód: ${caseDef.secretDiagnosisCode}). Vaše epikríza je klinicky srozumitelná.\n\n`;
      } else {
        review += `❌ **Chyba.** Správná diagnóza byla **${caseDef.secretDiagnosis}** (Kód MKN-10: ${caseDef.secretDiagnosisCode}). Vaše zadaná diagnóza neodpovídá klinickému obrazu pacienta.\n\n`;
      }

      review += "### 2. Terapeutický postup\n";
      if (session.caseId === "1") {
        const hasEkg = session.imagingReady.includes("ekg");
        const hasAnopyrin = session.therapies.meds.some(m => m.name.toLowerCase().includes("anopyrin"));
        const hasHeparin = session.therapies.meds.some(m => m.name.toLowerCase().includes("heparin"));
        
        if (hasEkg && hasAnopyrin && hasHeparin) {
          score += 20;
          review += "✅ **Perfektní zvládnutí AKS.** Natočil jste 12svodové EKG, včas podal duální antiagregaci (Anopyrin) a provedl plnou antikoagulaci Heparinem podle standardů ČLS JEP.\n";
        } else {
          review += "❌ **Závažné nedostatky v terapii STEMI!** Zapomněl jste podat buď kyselinu acetylsalicylovou (Anopyrin) p.o. rozkousat, nebo nefrakcionovaný Heparin i.v. Tyto kroky zachraňují život před uzávěrem věnčité tepny.\n";
        }
      } else if (session.caseId === "2") {
        const hasOxygen = !session.therapies.oxygen.includes("Žádné");
        const hasHeparin = session.therapies.meds.some(m => m.name.toLowerCase().includes("heparin") || m.name.toLowerCase().includes("clexane") || m.name.toLowerCase().includes("fraxiparin"));
        
        if (hasOxygen && hasHeparin) {
          score += 20;
          review += "✅ **Správný postup u plicní embolie.** Podal jste včas kyslík a zahájil antikoagulační léčbu. Pozor na hlášenou alergii na jód - CT angiografie plicnice s kontrastem vyžadovala adekvátní premedikaci nebo nahrazení Bedside echokardiografií!\n";
        } else {
          review += "❌ **Nedostatečná léčba plicní embolie.** Selhal jste v rychlém zahájení antikoagulace (Heparin/LMWH) nebo adekvátním zajištění hypoxie podáním kyslíku.\n";
        }
      } else if (session.caseId === "3") {
        const hasIntubation = session.therapies.oxygen.toLowerCase().includes("intub") || session.therapies.oxygen.toLowerCase().includes("etk");
        const hasExacyl = session.therapies.meds.some(m => m.name.toLowerCase().includes("exacyl") || m.name.toLowerCase().includes("tranexam"));
        const hasTransfusion = session.therapies.infusion.toLowerCase().includes("transf") || session.therapies.infusion.toLowerCase().includes("erytr");

        if (hasIntubation && hasExacyl && hasTransfusion) {
          score += 20;
          review += "✅ **Excelentní zvládnutí masivního polytraumatu.** Včas jste zaintuboval pacienta se zhoršeným vědomím (GCS 9), podal kyselinu tranexamovou (Exacyl) pro kontrolu vnitřního krvácení a zahájil masivní krevní převody.\n";
        } else {
          review += "❌ **Závažná pochybení u polytraumatu v hemoragickém šoku!** Opomněl jste buď intubaci pro ochranu dýchacích cest (GCS 9 vyžaduje zajištění ETK!), podání Exacylu, nebo včasný masivní transfuzní protokol k náhradě ztrát krve.\n";
        }
      } else if (session.caseId === "4") {
        const hasDexamethason = session.therapies.meds.some(m => m.name.toLowerCase().includes("dexamethas") || m.name.toLowerCase().includes("rectodelt") || m.name.toLowerCase().includes("prednison"));
        
        if (hasDexamethason) {
          score += 20;
          review += "✅ **Správný postup u dětské subglotické laryngitidy.** Podal jste včas kortikosteroidy (Dexamethason/Rectodelt), které snižují otok hrtanu. U dětí je klíčové minimalizovat stres a pláč a podávat chladný vzduch.\n";
        } else {
          review += "❌ **Chyba v terapii laryngitidy!** Zapomněl jste podat systémové kortikosteroidy (Dexamethason / Rectodelt čípek). Tyto léky jsou základním kamenem snížení otoku hrtanu u dítěte.\n";
        }
      } else if (session.caseId === "5") {
        const hasAb = session.therapies.meds.some(m => m.name.toLowerCase().includes("ceftriax") || m.name.toLowerCase().includes("penicilin") || m.name.toLowerCase().includes("ampicilin"));
        const hasInfusion = !session.therapies.infusion.includes("Žádné");
        
        if (hasAb && hasInfusion) {
          score += 20;
          review += "✅ **Život zachraňující postup u meningokokové sepse.** Okamžitě jste zajistil i.v. vstup, zahájil volumoterapii pro začínající šok a podal širokospektrá antibiotika (Ceftriaxon) STATIM. Tento agresivní přístup zachránil dítě před fatální progresí.\n";
        } else {
          review += "❌ **Závažné selhání v léčbě meningokokové sepse!** U meningokokové sepse s petechiemi hraje roli každá minuta. Zapomněl jste podat okamžitě i.v. širokospektrá antibiotika (Ceftriaxon) nebo dostatečně hradit oběh infuzemi.\n";
        }
      } else if (session.caseId === "6") {
        const hasAdrenalin = session.therapies.meds.some(m => m.name.toLowerCase().includes("adrenalin") || m.name.toLowerCase().includes("epinephrin"));
        
        if (hasAdrenalin) {
          score += 20;
          review += "✅ **Skvělé zvládnutí anafylaktického šoku.** Podal jste včas Adrenalin, což je lék první volby. Terapii jste vhodně doplnil kortikosteroidy, antihistaminiky (Dithiaden) a infuzní podporou.\n";
        } else {
          review += "❌ **Kritická chyba při anafylaktickém šoku!** Nepodal jste Adrenalin - lék první volby u anafylaxe doprovázené hypotenzí a stridorem. Samotný Dithiaden nebo Solu-Medrol bez adrenalinu pacienta nezachrání.\n";
        }
      } else if (session.caseId === "7") {
        const hasInfusion = !session.therapies.infusion.includes("Žádné");
        const hasAnalgetic = session.therapies.meds.some(m => m.name.toLowerCase().includes("novalgin") || m.name.toLowerCase().includes("metamizol") || m.name.toLowerCase().includes("fentanyl") || m.name.toLowerCase().includes("sufent") || m.name.toLowerCase().includes("paracet") || m.name.toLowerCase().includes("dolsin"));
        
        if (hasInfusion && hasAnalgetic) {
          score += 20;
          review += "✅ **Korektní postup u akutní pankreatitidy.** Zajistil jste dostatečnou infuzní volumoterapii (prevence hypovolemického šoku při 'třetím prostoru') a adekvátní tišení bolesti analgetiky.\n";
        } else {
          review += "❌ **Chyby v managementu pankreatitidy.** Pacientka s akutní pankreatitidou vyžaduje masivní hydrataci krystaloidy k prevenci mikrocirkulačního selhání pankreatu a účinnou analgezii. Jedno z toho chybělo.\n";
        }
      } else if (session.caseId === "8") {
        const hasBikarbonat = session.therapies.meds.some(m => m.name.toLowerCase().includes("bikarbonat") || m.name.toLowerCase().includes("bicarbon") || m.name.toLowerCase().includes("nahco3"));
        
        if (hasBikarbonat) {
          score += 20;
          review += "✅ **Vynikající toxikologický zásah.** Rozpoznal jste TCA kardiotoxicitu (prodloužené QRS, tachykardie) a včas podal infuzi Natrium Bikarbonátu (NaHCO3) k alkalizaci séra a stabilizaci sodíkových kanálů myokardu.\n";
        } else {
          review += "❌ **Závažné opomenutí u intoxikace TCA!** Při těžkém předávkování tricyklickými antidepresivy s rozšířením QRS komplexu na EKG je kritickým a život zachraňujícím krokem podání Natrium Bikarbonátu i.v. k antagonizaci kardiotoxicity.\n";
        }
      }

      review += "\n### 3. Efektivita a čas\n";
      if (session.elapsedTime < 30) {
        score += 10;
        review += `⚡ **Vynikající rychlost.** Vyřešeno za ${session.elapsedTime} minut. Pacient byl minimálně ohrožen prodlužováním diagnózy.\n`;
      } else {
        review += `⚠️ **Ztráta drahocenného času.** Strávil jste ${session.elapsedTime} minut na urgentním příjmu. U urgentních stavů (STEMI, masivní šok) rozhodují minuty.\n`;
      }

      review += "\n### 4. Komunikace\n";
      review += "💬 Konzultace se specialisty byly provedeny. Doporučujeme volat konziliáře až po dokončení základní stabilizace a diagnostiky (EKG, vitály).\n";

      review += `\n\n## **CELKOVÉ HODNOCENÍ: ${Math.min(100, score)}%**`;
      session.debriefing = review;
    }

    res.json(session);
  });

  // Serve static files in production
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
