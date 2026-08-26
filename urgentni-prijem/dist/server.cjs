var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// server.ts
var import_express = __toESM(require("express"), 1);
var import_path2 = __toESM(require("path"), 1);
var import_crypto = __toESM(require("crypto"), 1);
var import_dotenv = __toESM(require("dotenv"), 1);
var import_genai = require("@google/genai");
var import_vite = require("vite");

// src/data/cases/index.ts
var import_fs = __toESM(require("fs"), 1);
var import_path = __toESM(require("path"), 1);
var CASES_DIR = import_path.default.join(process.cwd(), "src/data/cases");
function getAllCases() {
  try {
    if (!import_fs.default.existsSync(CASES_DIR)) {
      return [];
    }
    const files = import_fs.default.readdirSync(CASES_DIR);
    const cases = [];
    for (const file of files) {
      if (file.endsWith(".json")) {
        const filePath = import_path.default.join(CASES_DIR, file);
        const content = import_fs.default.readFileSync(filePath, "utf-8");
        cases.push(JSON.parse(content));
      }
    }
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
function getCasesByFilter(specialty, level) {
  let cases = getAllCases();
  if (specialty && specialty !== "all") {
    cases = cases.filter((c) => c.specialty.toLowerCase() === specialty.toLowerCase());
  }
  if (level) {
    cases = cases.filter((c) => c.level === level);
  }
  return cases;
}

// server.ts
import_dotenv.default.config();
var PORT = 3e3;
var ai = null;
function getGeminiClient() {
  if (!ai) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      console.warn("GEMINI_API_KEY environment variable is not defined. Using rule-based fallback clinical engine.");
      throw new Error("GEMINI_API_KEY is missing");
    }
    ai = new import_genai.GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build"
        }
      }
    });
  }
  return ai;
}
var CASES = {};
function getFallbackCase(specialty, level) {
  let list = getCasesByFilter(specialty, level);
  if (list.length === 0 && specialty) {
    list = getCasesByFilter(specialty);
  }
  if (list.length === 0 && level) {
    list = getCasesByFilter(void 0, level);
  }
  if (list.length === 0) {
    list = getAllCases();
  }
  const randomIndex = Math.floor(Math.random() * list.length);
  return list[randomIndex];
}
function loadCasesIntoCache() {
  const all = getAllCases();
  for (const c of all) {
    CASES[c.id] = c;
  }
  console.log(`Loaded ${all.length} cases into memory cache.
`);
}
loadCasesIntoCache();
var sessions = {};
function recordVitalsHistory(session) {
  if (!session.vitalsHistory) {
    session.vitalsHistory = [];
  }
  const existing = session.vitalsHistory.find((h) => h.time === session.elapsedTime);
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
  const app = (0, import_express.default)();
  app.use(import_express.default.json());
  app.post("/api/case/init", (req, res) => {
    const { difficulty } = req.body;
    let caseId = difficulty || "1";
    if (caseId === "1" || caseId === "2" || caseId === "3") {
      const candidates = getCasesByFilter(void 0, parseInt(caseId, 10));
      if (candidates.length > 0) {
        const randomIndex = Math.floor(Math.random() * candidates.length);
        caseId = candidates[randomIndex].id;
      }
    }
    const caseDef = CASES[caseId];
    if (!caseDef) {
      return res.status(400).json({ error: "Neplatn\xFD p\u0159\xEDpad nebo \xFArove\u0148 obt\xED\u017Enosti" });
    }
    const sessionId = `session_${import_crypto.default.randomUUID()}`;
    const session = {
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
        { time: "14:22", text: "Pacient p\u0159ijat na urgentn\xED p\u0159\xEDjem RZP.", source: "system" }
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
        oxygen: "\u017D\xE1dn\xE9 zaji\u0161t\u011Bn\xED",
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
  app.get("/api/cases", (req, res) => {
    const { specialty, difficulty } = req.query;
    let levelNum;
    if (typeof difficulty === "string") {
      levelNum = parseInt(difficulty, 10);
    }
    const cases = getCasesByFilter(
      typeof specialty === "string" ? specialty : void 0,
      levelNum
    );
    res.json(cases);
  });
  app.post("/api/case/generate", async (req, res) => {
    const { specialty, difficulty } = req.body;
    const level = parseInt(difficulty, 10) || 1;
    const difficultyStr = level === 3 ? "hard" : level === 2 ? "medium" : "easy";
    const selectedSpecialty = specialty || "Kardiologie";
    try {
      const gemini = getGeminiClient();
      const prompt = `
Jsi \u0161pi\u010Dkov\xFD klinick\xFD architekt a l\xE9ka\u0159sk\xFD trena\u017E\xE9r. Vygeneruj kompletn\xED, vysoce realistick\xFD klinick\xFD p\u0159\xEDpad pro urgentn\xED p\u0159\xEDjem ("Urgentn\xED p\u0159\xEDjem") v \u010De\u0161tin\u011B, kter\xFD odpov\xEDd\xE1 zadan\xFDm parametr\u016Fm:
- Obor (Specialty): ${selectedSpecialty}
- Obt\xED\u017Enost (Level): ${level} (1 = snadn\xE1, 2 = st\u0159edn\xED, 3 = kritick\xE1/\u0161okov\xE1)

P\u0159\xEDpad mus\xED p\u0159esn\u011B odpov\xEDdat n\xE1sleduj\xEDc\xEDmu JSON sch\xE9matu:
{
  "id": "gen_${Math.random().toString(36).substring(2, 9)}",
  "level": ${level},
  "difficulty": "${difficultyStr}",
  "specialty": "${selectedSpecialty}",
  "title": "Stru\u010Dn\xFD n\xE1zev diagn\xF3zy (nap\u0159. Akutn\xED infarkt myokardu)",
  "name": "Jm\xE9no a p\u0159\xEDjmen\xED pacienta (\u010Desk\xE9, nap\u0159. Jan Nov\xE1k)",
  "age": v\u011Bk pacienta (\u010D\xEDslo),
  "sex": "Mu\u017E" nebo "\u017Dena",
  "mainComplaint": "Hlavn\xED pot\xED\u017E (nap\u0159. Bolest na hrudi)",
  "complaintDetail": "Podrobn\xFD popis pot\xED\u017E\xED pacienta p\u0159i p\u0159\xEDjmu",
  "history": ["Seznam osobn\xED anamn\xE9zy (nap\u0159. ICHS, hypertenze)"],
  "allergies": ["Alergie (nap\u0159. PENICILIN, nebo Bez zn\xE1m\xFDch alergi\xED)"],
  "triageClass": "Stupe\u0148 tri\xE1\u017Ee ESI (1 a\u017E 5, kde 1 = Resuscitace, 2 = Kritick\xFD, 3 = Nal\xE9hav\xFD, 4 = Standardn\xED, 5 = Nenal\xE9hav\xFD)",
  "vitals": {
    "tf": tepov\xE1 frekvence (\u010D\xEDslo),
    "tk_sys": krevn\xED tlak systolick\xFD (\u010D\xEDslo),
    "tk_dia": krevn\xED tlak diastolick\xFD (\u010D\xEDslo),
    "spo2": saturace kysl\xEDkem v % (\u010D\xEDslo),
    "gcs": Glasgow Coma Scale 3-15 (\u010D\xEDslo),
    "temp": teplota v \xB0C (\u010D\xEDslo),
    "rr": dechov\xE1 frekvence (\u010D\xEDslo)
  },
  "secretDiagnosis": "Definitivn\xED utajen\xE1 diagn\xF3za pacienta",
  "secretDiagnosisCode": "MKN-10 k\xF3d diagn\xF3zy (nap\u0159. I21.1)",
  "labsResult": {
    "ko": "Zpr\xE1va z krevn\xEDho obrazu",
    "biochem": "Zpr\xE1va z biochemie (v\u010Detn\u011B troponinu, CRP, atd.)",
    "coag": "Zpr\xE1va z koagulace",
    "mochem": "Zpr\xE1va z mo\u010Di chemicky",
    "abr": "Zpr\xE1va z Astrupa (ABR)"
  },
  "imagingResult": {
    "ekg": "Popis 12svodov\xE9ho EKG",
    "rtg": "Popis RTG hrudn\xEDku",
    "echo": "Popis echokardiografie",
    "ct": "Popis CT vy\u0161et\u0159en\xED"
  },
  "patientHistory": ["Seznam osobn\xED anamn\xE9zy"],
  "vitalSigns": {
    "tf": tepov\xE1 frekvence,
    "tk_sys": systolick\xFD tlak,
    "tk_dia": diastolick\xFD tlak,
    "spo2": saturace,
    "gcs": gcs,
    "temp": teplota,
    "rr": dechov\xE1 frekvence
  },
  "physicalExam": "Popis fyzik\xE1ln\xEDho vy\u0161et\u0159en\xED pacienta",
  "labValues": {
    "ko": "Zpr\xE1va z krevn\xEDho obrazu",
    "biochem": "Zpr\xE1va z biochemie"
  },
  "decisionNodes": [
    {
      "question": "Ot\xE1zka k prvn\xEDmu kroku l\xE9\u010Dby",
      "options": ["Mo\u017Enost A", "Mo\u017Enost B", "Mo\u017Enost C"],
      "feedback": "Zp\u011Btn\xE1 vazba ke spr\xE1vn\xE9 odpov\u011Bdi"
    }
  ],
  "feedback": "Celkov\xE9 klinick\xE9 doporu\u010Den\xED pro \u0159e\u0161en\xED tohoto p\u0159\xEDpadu."
}

Ujisti se, \u017Ee v\xFDstup je platn\xFD a syntakticky bezchybn\xFD JSON objekt a neobsahuje \u017E\xE1dn\xFD text okolo. V\u0161echny l\xE9ka\u0159sk\xE9 popisy, hodnoty a zpr\xE1vy must be klinicky p\u0159esn\xE9, realistick\xE9 a napsan\xE9 v \u010De\u0161tin\u011B podle standard\u016F \u010CLS JEP.
`;
      const response = await gemini.models.generateContent({
        model: "gemini-3.5-flash",
        contents: prompt,
        config: {
          responseMimeType: "application/json"
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
        id: "gen_fallback_" + Math.random().toString(36).substring(2, 9)
      };
      CASES[clonedCase.id] = clonedCase;
      res.json(clonedCase);
    }
  });
  app.get("/api/case/session/:sessionId", (req, res) => {
    const { sessionId } = req.params;
    const session = sessions[sessionId];
    if (!session) {
      return res.status(404).json({ error: "Relace nebyla nalezena" });
    }
    res.json(session);
  });
  function formatClinicalContext(session) {
    const caseDef = CASES[session.caseId];
    return `
=== KLINICK\xDD STAV PACIENTA ===
Jm\xE9no: ${session.patient.name} (${session.patient.age} let, ${session.patient.sex})
Hlavn\xED obt\xED\u017Ee: ${session.patient.mainComplaint} - ${session.patient.complaintDetail}
Anamn\xE9za: ${session.patient.history.join(", ")}
Alergie: ${session.patient.allergies.length > 0 ? session.patient.allergies.join(", ") : "Bez zn\xE1m\xFDch alergi\xED"}
Aktu\xE1ln\xED vit\xE1ln\xED funkce:
- Tepov\xE1 frekvence (TF): ${session.vitals.tf} bpm
- Krevn\xED tlak (TK): ${session.vitals.tk_sys}/${session.vitals.tk_dia} mmHg
- Saturace O2: ${session.vitals.spo2}%
- GCS: ${session.vitals.gcs}/15
- Teplota: ${session.vitals.temp} \xB0C
- Dechov\xE1 frekvence (DF): ${session.vitals.rr}/min

Proveden\xE9 intervence / Terapie:
- Kysl\xEDk: ${session.therapies.oxygen}
- \u017Diln\xED p\u0159\xEDstup (i.v.): ${session.therapies.ivAccess}
- Inf\xFAze: ${session.therapies.infusion || "\u017D\xE1dn\xE1"}
- Medikace: ${session.therapies.meds.length > 0 ? session.therapies.meds.map((m) => `${m.name} ${m.dose} ${m.route}`).join(", ") : "\u017D\xE1dn\xE1"}

Objednan\xE1 vy\u0161et\u0159en\xED:
- Laborato\u0159 objedn\xE1no: ${session.labsOrdered.join(", ")} (Hotovo: ${session.labsReady.join(", ")})
- Zobrazovac\xED metody objedn\xE1no: ${session.imagingOrdered.join(", ")} (Hotovo: ${session.imagingReady.join(", ")})

Uplynul\xFD \u010Das: ${session.elapsedTime} minut od p\u0159\xEDjmu.
Skute\u010Dn\xE1 diagn\xF3za (kterou l\xE9ka\u0159 odhaluje): ${caseDef.secretDiagnosis}
`;
  }
  app.post("/api/case/action", async (req, res) => {
    const { sessionId, actionId, actionText, details } = req.body;
    const session = sessions[sessionId];
    if (!session) {
      return res.status(404).json({ error: "Relace nebyla nalezena" });
    }
    const sendSession = (s) => {
      recordVitalsHistory(s);
      return res.json(s);
    };
    const caseDef = CASES[session.caseId];
    const timestamp = new Date(14 * 3600 * 1e3 + 22 * 60 * 1e3 + session.elapsedTime * 60 * 1e3).toTimeString().substring(0, 5);
    session.elapsedTime += Math.floor(Math.random() * 3) + 1;
    const isCardiacAction = (id, text, det) => {
      const cardiacKeywords = ["defibril", "v\xFDboj", "shock", "amiodar", "adrenalin", "epinefrin", "noradrenalin", "norepinefrin", "dobutamin", "kardioverze", "lidokain", "atropin"];
      if (id === "add_medication" && det && det.name) {
        const medName = det.name.toLowerCase();
        if (cardiacKeywords.some((kw) => medName.includes(kw))) return true;
      }
      if (text) {
        const textLow = text.toLowerCase();
        if (cardiacKeywords.some((kw) => textLow.includes(kw))) return true;
      }
      return false;
    };
    if (isCardiacAction(actionId, actionText, details) && !session.rhythmInterpreted) {
      session.actionLog.push({
        time: timestamp,
        text: "Pokus o kardiovaskul\xE1rn\xED z\xE1krok zablokov\xE1n: chyb\xED klinick\xE1 interpretace EKG rytmu.",
        source: "system"
      });
      return res.json({
        ...session,
        actionLog: [
          ...session.actionLog,
          {
            time: timestamp,
            text: "\u274C Akce zam\u010Dena! Nejprve mus\xEDte nato\u010Dit 12svodov\xE9 EKG a klinicky interpretovat b\u011B\u017E\xEDc\xED rytmus kliknut\xEDm na monitor.",
            source: "result"
          }
        ]
      });
    }
    if (actionId) {
      if (actionId === "interpret_rhythm") {
        session.rhythmInterpreted = true;
        session.actionLog.push({
          time: timestamp,
          text: "\u{1F513} EKG rytmus pacienta byl \xFAsp\u011B\u0161n\u011B klinicky interpretov\xE1n. Kardiovaskul\xE1rn\xED intervence jsou odblokov\xE1ny.",
          source: "system"
        });
        return sendSession(session);
      }
      if (actionId === "confirm_triage") {
        const { triageClass } = details;
        session.triageConfirmed = true;
        session.selectedTriageClass = triageClass;
        let scoreMessage = `Triage potvrzena na stupe\u0148 ${triageClass}.`;
        if (triageClass !== caseDef.triageClass) {
          scoreMessage += ` (Pozor: Tri\xE1\u017En\xED sestra p\u016Fvodn\u011B doporu\u010Dovala stupe\u0148 ${caseDef.triageClass}).`;
        }
        session.actionLog.push({ time: timestamp, text: scoreMessage, source: "system" });
        return sendSession(session);
      }
      if (actionId === "oxygen_setup") {
        const { value } = details;
        session.therapies.oxygen = value;
        session.actionLog.push({ time: timestamp, text: `Zah\xE1jena oxygenoterapie: ${value}.`, source: "user" });
        if (session.caseId === "1" && session.vitals.spo2 < 95) {
          session.vitals.spo2 = Math.min(98, session.vitals.spo2 + 4);
          session.vitals.rr = Math.max(16, session.vitals.rr - 2);
        } else if (session.caseId === "2" && session.vitals.spo2 < 95) {
          session.vitals.spo2 = Math.min(96, session.vitals.spo2 + 6);
          session.vitals.rr = Math.max(18, session.vitals.rr - 3);
        } else if (session.caseId === "3" && session.vitals.spo2 < 95) {
          session.vitals.spo2 = Math.min(92, session.vitals.spo2 + 4);
        } else if (session.caseId === "9" && session.vitals.spo2 < 95) {
          session.vitals.spo2 = Math.min(99, session.vitals.spo2 + 3);
        } else if (session.caseId === "10" && session.vitals.spo2 < 95) {
          session.vitals.spo2 = Math.min(93, session.vitals.spo2 + 4);
        } else if (session.caseId === "11" && session.vitals.spo2 < 95) {
          session.vitals.spo2 = Math.min(94, session.vitals.spo2 + 2);
        } else if (session.caseId === "12" && session.vitals.spo2 < 95) {
          session.vitals.spo2 = Math.min(89, session.vitals.spo2 + 5);
        } else if (session.caseId === "13") {
          session.vitals.spo2 = Math.min(100, session.vitals.spo2 + 2);
        }
        return sendSession(session);
      }
      if (actionId === "iv_setup") {
        const { value } = details;
        session.therapies.ivAccess = value;
        session.actionLog.push({ time: timestamp, text: `Zaveden perifern\xED \u017Eiln\xED kat\xE9tr (i.v.): ${value}.`, source: "user" });
        return sendSession(session);
      }
      if (actionId === "infusion_setup") {
        const { value } = details;
        session.therapies.infusion = value;
        session.actionLog.push({ time: timestamp, text: `Zah\xE1jena infuze: ${value}.`, source: "user" });
        if (session.caseId === "3") {
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
          return res.status(400).json({ error: "Vypl\u0148te n\xE1zev, d\xE1vku a zp\u016Fsob pod\xE1n\xED l\xE9ku." });
        }
        session.therapies.meds.push({ name, dose, route });
        session.actionLog.push({ time: timestamp, text: `Pod\xE1n l\xE9k: ${name} ${dose} ${route}.`, source: "user" });
        const nLow = name.toLowerCase();
        if (session.caseId === "1") {
          if (nLow.includes("anopyrin") || nLow.includes("aspirin") || nLow.includes("acetylsalicyl")) {
            session.actionLog.push({ time: timestamp, text: "\xDA\u010Dinek kyseliny acetylsalicylov\xE9 nastupuje. Blok\xE1da agregace desti\u010Dek zah\xE1jena.", source: "system" });
          }
          if (nLow.includes("heparin")) {
            session.actionLog.push({ time: timestamp, text: "Antikoagulace heparinem aktivn\xED.", source: "system" });
          }
          if (nLow.includes("nitroglycerin") || nLow.includes("isoket")) {
            session.vitals.tk_sys = Math.max(110, session.vitals.tk_sys - 15);
            session.vitals.tf = Math.max(80, session.vitals.tf - 5);
            session.actionLog.push({ time: timestamp, text: "Vazodilata\u010Dn\xED \xFA\u010Dinek nitroglycerinu. Sn\xED\u017Een\xED dot\xED\u017Een\xED srdce, \xFAleva od stenokardi\xED.", source: "system" });
          }
        } else if (session.caseId === "2") {
          if (nLow.includes("heparin") || nLow.includes("clexane") || nLow.includes("fraxiparin")) {
            session.actionLog.push({ time: timestamp, text: "Antikoagulace zah\xE1jena. Zabr\xE1n\u011Bn\xED propagaci trombu v plicnici.", source: "system" });
          }
        } else if (session.caseId === "3") {
          if (nLow.includes("exacyl") || nLow.includes("tranexam")) {
            session.actionLog.push({ time: timestamp, text: "Kyselina tranexamov\xE1 pod\xE1na. Antifibrinolytick\xE1 stabilizace krevn\xED sra\u017Eeniny aktivn\xED.", source: "system" });
          }
        } else if (session.caseId === "9") {
          if (nLow.includes("diazepam") || nLow.includes("midazolam") || nLow.includes("apaurin")) {
            session.vitals.rr = 18;
            session.vitals.tf = Math.max(100, session.vitals.tf - 10);
            session.actionLog.push({ time: timestamp, text: "Pod\xE1n benzodiazepin. Svalov\xE9 k\u0159e\u010De a z\xE1\u0161kuby bezprost\u0159edn\u011B ust\xE1vaj\xED, d\xFDch\xE1n\xED se zklid\u0148uje. P\u0159etrv\xE1v\xE1 hlubok\xFD \xFAtlum v\u011Bdom\xED (postikt\xE1ln\xED sp\xE1nek).", source: "system" });
          }
          if (nLow.includes("paracetamol") || nLow.includes("panadol") || nLow.includes("ibuprofen") || nLow.includes("nurofen") || nLow.includes("novalgin")) {
            session.vitals.temp = Math.max(37.4, session.vitals.temp - 1.5);
            session.vitals.tf = Math.max(105, session.vitals.tf - 15);
            session.actionLog.push({ time: timestamp, text: "Pod\xE1no antipyretikum. Hore\u010Dka postupn\u011B kles\xE1, co\u017E zm\xEDr\u0148uje celkov\xFD metabolick\xFD stres pacienta.", source: "system" });
          }
        } else if (session.caseId === "10") {
          if (nLow.includes("salbutamol") || nLow.includes("ventolin") || nLow.includes("ipratropium") || nLow.includes("atrovent")) {
            session.vitals.spo2 = Math.min(96, session.vitals.spo2 + 5);
            session.vitals.rr = Math.max(26, session.vitals.rr - 8);
            session.actionLog.push({ time: timestamp, text: "Pod\xE1na inhala\u010Dn\xED bronchodilata\u010Dn\xED terapie nebulizac\xED. Poslechov\u011B doch\xE1z\xED k \u010D\xE1ste\u010Dn\xE9mu rozvzd\u011Bn\xED d\xFDch\xE1n\xED, ustupuje fenom\xE9n 'tich\xFDch plic'.", source: "system" });
          }
          if (nLow.includes("solu-medrol") || nLow.includes("solumedrol") || nLow.includes("methylprednisolon") || nLow.includes("dexamethas") || nLow.includes("dexamed")) {
            session.vitals.rr = Math.max(30, session.vitals.rr - 4);
            session.actionLog.push({ time: timestamp, text: "Syst\xE9mov\xE9 kortikosteroidy pod\xE1ny. Nastupuje protiz\xE1n\u011Btliv\xFD \xFA\u010Dinek, kter\xFD zredukuje otok sliznice d\xFDchac\xEDch cest.", source: "system" });
          }
          if (nLow.includes("magnes") || nLow.includes("magn\xE9z") || nLow.includes("mgso4")) {
            session.vitals.spo2 = Math.min(99, session.vitals.spo2 + 5);
            session.vitals.rr = Math.max(20, session.vitals.rr - 10);
            session.actionLog.push({ time: timestamp, text: "Magnesium sulf\xE1t pod\xE1n v pomal\xE9 i.v. infuzi. Doch\xE1z\xED k v\xFDrazn\xE9 relaxaci hladk\xE9ho svalstva bronch\u016F, dechov\xE1 t\xEDse\u0148 ustupuje a saturace stoup\xE1.", source: "system" });
          }
        } else if (session.caseId === "11") {
          if (nLow.includes("ceftriaxon") || nLow.includes("cefota") || nLow.includes("lentocilin")) {
            session.actionLog.push({ time: timestamp, text: "Pod\xE1na \u0161irokospektr\xE1 antibiotika i.v. C\xEDlen\xE9 kryt\xED Haemophilus influenzae b zah\xE1jeno.", source: "system" });
          }
          if (nLow.includes("dexamethas") || nLow.includes("dexamed") || nLow.includes("solu-medrol")) {
            session.actionLog.push({ time: timestamp, text: "Pod\xE1ny kortikoidy i.v. s c\xEDlem sn\xED\u017Eit masivn\xED z\xE1n\u011Btliv\xFD otok epiglotis.", source: "system" });
          }
        } else if (session.caseId === "12") {
          if (nLow.includes("noradrenalin") || nLow.includes("norepinefrin")) {
            session.vitals.tk_sys = Math.min(105, session.vitals.tk_sys + 22);
            session.vitals.tk_dia = Math.min(65, session.vitals.tk_dia + 15);
            session.actionLog.push({ time: timestamp, text: "Zah\xE1jena kontinu\xE1ln\xED infuze noradrenalinu i.v. Krevn\xED tlak se zvy\u0161uje sm\u011Brem k bezpe\u010Dn\xE9mu p\xE1smu, zlep\u0161uje se perf\xFAze koron\xE1rn\xEDch a mozkov\xFDch tepen.", source: "system" });
          }
          if (nLow.includes("dobutamin")) {
            session.vitals.tf = Math.max(100, session.vitals.tf - 8);
            session.actionLog.push({ time: timestamp, text: "Zah\xE1jena kontinu\xE1ln\xED infuze dobutaminu i.v. Inotropn\xED podpora posiluje kontraktilitu oslaben\xE9ho levokomorov\xE9ho myokardu.", source: "system" });
          }
          if (nLow.includes("furosemid") || nLow.includes("lasix")) {
            session.vitals.spo2 = Math.min(94, session.vitals.spo2 + 8);
            session.vitals.rr = Math.max(20, session.vitals.rr - 6);
            session.actionLog.push({ time: timestamp, text: "Pod\xE1n Furosemid i.v. Venodilata\u010Dn\xED \xFA\u010Dinek uleh\u010Duje lev\xE9 komo\u0159e a n\xE1sledn\xFD diuretick\xFD efekt zm\xEDr\u0148uje plicn\xED ed\xE9m.", source: "system" });
          }
          if (nLow.includes("heparin")) {
            session.actionLog.push({ time: timestamp, text: "Antikoagulace heparinem i.v. aktivn\xED.", source: "system" });
          }
          if (nLow.includes("anopyrin") || nLow.includes("aspirin")) {
            session.actionLog.push({ time: timestamp, text: "Pod\xE1na kyselina acetylsalicylov\xE1. Protide\u0161ti\u010Dkov\xFD \xFA\u010Dinek zah\xE1jen.", source: "system" });
          }
        } else if (session.caseId === "13") {
          if (nLow.includes("actilyse") || nLow.includes("alteplas") || nLow.includes("trombolyz")) {
            session.actionLog.push({ time: timestamp, text: "Zah\xE1jeno pod\xE1v\xE1n\xED syst\xE9mov\xE9 trombol\xFDzy (Actilyse i.v. bolus a kontinu\xE1ln\xED infuze). Rekanalizace uzav\u0159en\xE9 mozkov\xE9 tepny zapo\u010Dala.", source: "system" });
          }
          if (nLow.includes("urapidil") || nLow.includes("ebrantil")) {
            session.vitals.tk_sys = Math.max(140, session.vitals.tk_sys - 25);
            session.vitals.tk_dia = Math.max(80, session.vitals.tk_dia - 10);
            session.actionLog.push({ time: timestamp, text: "Urapidil i.v. bolusov\u011B/infuzn\u011B pod\xE1n. Krevn\xED tlak kontrolovan\u011B kles\xE1 pod limitn\xEDch 185/110 mmHg, co\u017E umo\u017E\u0148uje bezpe\u010Dn\xE9 pod\xE1n\xED trombol\xFDzy.", source: "system" });
          }
        }
        return sendSession(session);
      }
      if (actionId === "order_labs") {
        const { labs } = details;
        const addedLabs = [];
        labs.forEach((l) => {
          if (!session.labsOrdered.includes(l)) {
            session.labsOrdered.push(l);
            addedLabs.push(l);
          }
        });
        if (addedLabs.length > 0) {
          session.actionLog.push({
            time: timestamp,
            text: `Odesl\xE1na \u017E\xE1danka do laborato\u0159e STATIM: ${addedLabs.map((l) => l.toUpperCase()).join(", ")}.`,
            source: "user"
          });
          const delayMinutes = 10;
          setTimeout(() => {
            addedLabs.forEach((l) => {
              if (sessions[sessionId] && !sessions[sessionId].labsReady.includes(l)) {
                sessions[sessionId].labsReady.push(l);
                sessions[sessionId].labsResultsReceived[l] = caseDef.labsResult[l] || "N\xE1lez bez patologie.";
                sessions[sessionId].actionLog.push({
                  time: new Date(14 * 3600 * 1e3 + 22 * 60 * 1e3 + (session.elapsedTime + delayMinutes) * 60 * 1e3).toTimeString().substring(0, 5),
                  text: `V\xFDsledky STATIM laborato\u0159e k dispozici: ${l.toUpperCase()}.`,
                  source: "result"
                });
              }
            });
          }, 4e3);
        }
        return sendSession(session);
      }
      if (actionId === "order_imaging") {
        const { method } = details;
        if (!session.imagingOrdered.includes(method)) {
          session.imagingOrdered.push(method);
          session.actionLog.push({
            time: timestamp,
            text: `Na\u0159\xEDzeno urgentn\xED vy\u0161et\u0159en\xED: ${method.toUpperCase()}.`,
            source: "user"
          });
          const delayMinutes = method === "ekg" || method === "echo" ? 3 : 8;
          setTimeout(() => {
            if (sessions[sessionId] && !sessions[sessionId].imagingReady.includes(method)) {
              sessions[sessionId].imagingReady.push(method);
              sessions[sessionId].imagingResultsReceived[method] = caseDef.imagingResult[method] || "N\xE1lez bez patologie.";
              sessions[sessionId].actionLog.push({
                time: new Date(14 * 3600 * 1e3 + 22 * 60 * 1e3 + (session.elapsedTime + delayMinutes) * 60 * 1e3).toTimeString().substring(0, 5),
                text: `V\xFDsledek vy\u0161et\u0159en\xED ${method.toUpperCase()} je p\u0159ipraven k zobrazen\xED.`,
                source: "result"
              });
            }
          }, delayMinutes * 400);
        }
        return sendSession(session);
      }
      if (actionId === "activate_trauma") {
        session.traumaTeamActivated = true;
        session.actionLog.push({
          time: timestamp,
          text: "\u{1F6A8} AKTIVOV\xC1N TRAUMA T\xDDM URGENTN\xCDHO P\u0158\xCDJMU! (Chirurg, traumatolog, ARO a radiolog se sch\xE1z\xED na s\xE1le).",
          source: "user"
        });
        return sendSession(session);
      }
    }
    if (actionText && actionText.trim()) {
      session.actionLog.push({ time: timestamp, text: `L\xE9ka\u0159: "${actionText}"`, source: "user" });
      try {
        const gemini = getGeminiClient();
        const clinicalContext = formatClinicalContext(session);
        const prompt = `
Jsi pokro\u010Dil\xE9 vyhodnocovac\xED j\xE1dro hry pro simul\xE1tor klinick\xE9ho rozhodov\xE1n\xED na \u010Desk\xE9m urgentn\xEDm p\u0159\xEDjmu.
Va\u0161\xEDm \xFAkolem je analyzovat klinick\xFD z\xE1sah/akci, kterou zadal l\xE9ka\u0159 (u\u017Eivatel) v \u010Desk\xE9m jazyce.

KONTEXT PACIENTA:
${clinicalContext}

ZADAN\xC1 AKCE L\xC9KA\u0158E (v \u010De\u0161tin\u011B):
"${actionText}"

SM\u011ARNICE PRO VYHODNOCEN\xCD:
1. Akce mus\xED b\xFDt konkr\xE9tn\xED. Obecn\xE1 vyj\xE1d\u0159en\xED jako "ud\u011Bl\xE1m odb\u011Bry" nebo "d\xE1m l\xE9ky" jsou NEPLATN\xC1.
   - Pokud u\u017Eivatel napsal n\u011Bco obecn\xE9ho, nastav "isSpecific" na false a do "message" napi\u0161 v\xFDzvu s vysv\u011Btlen\xEDm, co p\u0159esn\u011B m\xE1 specifikovat (nap\u0159. "Kter\xE9 konkr\xE9tn\xED odb\u011Bry?" nebo "Kter\xFD l\xE9k a v jak\xE9 d\xE1vce chcete podat?").
2. Pokud jde o l\xE9ky, mus\xED uv\xE9st n\xE1zev l\xE9ku, d\xE1vku a cestu pod\xE1n\xED (nap\u0159. "Anopyrin 250mg p.o." nebo "Nitroglycerin 0.5mg s.l." nebo "Heparin 5000 IU i.v."). "Stoptussin" nebo obecn\u011B "d\xE1m l\xE9ky proti bolesti" bez specifikace je nep\u0159ijateln\xE9.
3. Pokud l\xE9ka\u0159 na\u0159\xEDd\xED konkr\xE9tn\xED platn\xFD krok pro danou diagn\xF3zu, popi\u0161 reakci pacienta, vylep\u0161en\xED/zhor\u0161en\xED vit\xE1ln\xEDch funkc\xED (vitalsDelta) a p\u0159idej to do klinick\xE9ho z\xE1znamu.
4. Pokud l\xE9ka\u0159 na\u0159\xEDd\xED kritick\xFD nebo urgentn\xED odb\u011Br (nap\u0159. KO, biochemie, troponin, koagulace, D-Dimery, ABR/Astrup), detekuj to a nastav p\u0159\xEDslu\u0161n\xE9 laborato\u0159e v poli "requestedLabs", a "isLabsOrdered" na true.
5. Reaguj profesion\xE1ln\u011B, v odborn\xE9 \u010De\u0161tin\u011B s klinickou v\xE1\u017Enost\xED.

Odpov\u011Bz V\xDDHRADN\u011A v platn\xE9m form\xE1tu JSON s n\xE1sleduj\xEDc\xED strukturou (nepou\u017E\xEDvej markdown obal krom\u011B \u010Dist\xE9ho json):
{
  "isSpecific": boolean,
  "success": boolean,
  "message": "Detailn\xED klinick\xE9 vyj\xE1d\u0159en\xED o proveden\xE9 akci, jej\xEDm v\xFDsledku nebo nutnosti up\u0159esn\u011Bn\xED.",
  "actionLogEntry": "Zkr\xE1cen\xFD text pro ofici\xE1ln\xED dekurs pacienta (nap\u0159. 'Zavedena i.v. linka, odebr\xE1na STATIM laborato\u0159')",
  "vitalsDelta": {
    "tk_sys": number, // zm\u011Bna sys tlaku (nap\u0159. -10, +5)
    "tk_dia": number, // zm\u011Bna dia tlaku
    "tf": number,     // zm\u011Bna tepov\xE9 frekvence (nap\u0159. -15)
    "spo2": number,   // zm\u011Bna saturace v %
    "rr": number      // zm\u011Bna dechov\xE9 frekvence
  },
  "isLabsOrdered": boolean,
  "requestedLabs": string[] // nap\u0159. ["ko", "biochem", "coag", "abr"]
}
`;
        const response = await gemini.models.generateContent({
          model: "gemini-3.5-flash",
          contents: prompt,
          config: {
            responseMimeType: "application/json"
          }
        });
        const resText = response.text || "";
        const data = JSON.parse(resText.trim());
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
            data.requestedLabs.forEach((l) => {
              const labKey = l.toLowerCase();
              if (["ko", "biochem", "coag", "mochem", "abr"].includes(labKey) && !session.labsOrdered.includes(labKey)) {
                session.labsOrdered.push(labKey);
                setTimeout(() => {
                  if (sessions[sessionId] && !sessions[sessionId].labsReady.includes(labKey)) {
                    sessions[sessionId].labsReady.push(labKey);
                    sessions[sessionId].actionLog.push({
                      time: new Date(14 * 3600 * 1e3 + 22 * 60 * 1e3 + (session.elapsedTime + 10) * 60 * 1e3).toTimeString().substring(0, 5),
                      text: `V\xFDsledky STATIM laborato\u0159e k dispozici: ${labKey.toUpperCase()}.`,
                      source: "result"
                    });
                  }
                }, 4e3);
              }
            });
          }
        }
        session.actionLog.push({ time: timestamp, text: data.message, source: "result" });
      } catch (err) {
        console.error("Gemini action error or key missing, running fallback rules:", err);
        const textLow = actionText.toLowerCase();
        let feedback = "";
        let logEntry = "";
        let isSpecific = true;
        if (textLow.includes("odb\u011Br") || textLow.includes("nabrat") || textLow.includes("laborato\u0159")) {
          const specificLabs = [];
          if (textLow.includes("ko") || textLow.includes("obraz")) specificLabs.push("ko");
          if (textLow.includes("biochem") || textLow.includes("troponin") || textLow.includes("kreatin") || textLow.includes("ionty")) specificLabs.push("biochem");
          if (textLow.includes("koagul") || textLow.includes("aptt") || textLow.includes("quick") || textLow.includes("inr")) specificLabs.push("coag");
          if (textLow.includes("mo\u010D") || textLow.includes("sediment")) specificLabs.push("mochem");
          if (textLow.includes("abr") || textLow.includes("astrup") || textLow.includes("plyny")) specificLabs.push("abr");
          if (specificLabs.length === 0) {
            isSpecific = false;
            feedback = "Kter\xE9 konkr\xE9tn\xED odb\u011Bry chcete nabrat? Specifikujte pros\xEDm (nap\u0159. STATIM KO, Biochemie - troponin, koagulace, ABR).";
          } else {
            specificLabs.forEach((l) => {
              if (!session.labsOrdered.includes(l)) {
                session.labsOrdered.push(l);
                setTimeout(() => {
                  if (sessions[sessionId] && !sessions[sessionId].labsReady.includes(l)) {
                    sessions[sessionId].labsReady.push(l);
                    sessions[sessionId].actionLog.push({
                      time: new Date(14 * 3600 * 1e3 + 22 * 60 * 1e3 + (sessions[sessionId].elapsedTime + 10) * 60 * 1e3).toTimeString().substring(0, 5),
                      text: `V\xFDsledky STATIM laborato\u0159e k dispozici: ${l.toUpperCase()}.`,
                      source: "result"
                    });
                  }
                }, 4e3);
              }
            });
            logEntry = `Odebr\xE1na krev na STATIM laborato\u0159: ${specificLabs.map((l) => l.toUpperCase()).join(", ")}.`;
            feedback = `Sestra odebrala krev na vybran\xE9 panely: ${specificLabs.map((l) => l.toUpperCase()).join(", ")}. V\xFDsledky budou do 10-15 minut.`;
          }
        } else if (textLow.includes("ekg") || textLow.includes("nato\u010Dit")) {
          if (!session.imagingOrdered.includes("ekg")) {
            session.imagingOrdered.push("ekg");
            setTimeout(() => {
              if (sessions[sessionId] && !sessions[sessionId].imagingReady.includes("ekg")) {
                sessions[sessionId].imagingReady.push("ekg");
              }
            }, 1e3);
          }
          logEntry = "Nato\u010Deno 12svodov\xE9 EKG.";
          feedback = "EKG sestra ihned nat\xE1\u010D\xED. V\xFDsledek je p\u0159ipraven k nahl\xE9dnut\xED na z\xE1lo\u017Ece zobrazovac\xEDch metod.";
        } else if (textLow.includes("anopyrin") || textLow.includes("aspirin")) {
          session.therapies.meds.push({ name: "Anopyrin", dose: "400mg", route: "p.o. rozkousat" });
          logEntry = "Pod\xE1n Anopyrin 400mg p.o.";
          feedback = "Pacient rozkousal a polkl Anopyrin 400mg p.o. Kyselina acetylsalicylov\xE1 zahajuje protide\u0161ti\u010Dkov\xFD \xFA\u010Dinek.";
        } else if (textLow.includes("heparin")) {
          session.therapies.meds.push({ name: "Heparin", dose: "5000 IU", route: "i.v. bolus" });
          logEntry = "Pod\xE1n Heparin 5000 IU i.v.";
          feedback = "Pod\xE1no 5000 IU nefrakcionovan\xE9ho heparinu i.v. Antikoagula\u010Dn\xED \xFA\u010Dinek aktivn\xED.";
        } else if (textLow.includes("kysl\xEDk") || textLow.includes("oxygen")) {
          session.therapies.oxygen = "O2 Maska 6L/min";
          logEntry = "Zah\xE1jena inhalace kysl\xEDku maskou.";
          feedback = "Zaveden kysl\xEDk 6L/min p\u0159es obli\u010Dejovou masku. Saturace O2 se zlep\u0161uje.";
          session.vitals.spo2 = Math.min(99, session.vitals.spo2 + 5);
        } else {
          isSpecific = false;
          feedback = "Zadali jste obecnou nebo neinterpretovatelnou akci. Up\u0159esn\u011Bte konkr\xE9tn\xED l\xE9k s d\xE1vkou a cestou (nap\u0159. 'Anopyrin 400mg p.o.') nebo p\u0159esn\xFD diagnostick\xFD po\u017Eadavek (nap\u0159. 'Nato\u010D\xEDm 12svodov\xE9 EKG').";
        }
        if (logEntry) {
          session.actionLog.push({ time: timestamp, text: logEntry, source: "system" });
        }
        session.actionLog.push({ time: timestamp, text: feedback, source: "result" });
      }
    }
    sendSession(session);
  });
  app.post("/api/case/consult", async (req, res) => {
    const { sessionId, specialty, message } = req.body;
    const session = sessions[sessionId];
    if (!session) {
      return res.status(404).json({ error: "Relace nebyla nalezena" });
    }
    const sendSession = (s) => {
      recordVitalsHistory(s);
      return res.json(s);
    };
    const caseDef = CASES[session.caseId];
    const timestamp = new Date(14 * 3600 * 1e3 + 22 * 60 * 1e3 + session.elapsedTime * 60 * 1e3).toTimeString().substring(0, 5);
    if (!session.chatHistory[specialty]) {
      session.chatHistory[specialty] = [];
    }
    session.chatHistory[specialty].push({
      sender: "MUDr. " + (session.level === 3 ? "Ku\u010Dera (Urgent)" : "Nov\xE1k (Urgent)"),
      text: message,
      time: timestamp
    });
    session.elapsedTime += 2;
    let reply = "Rozum\xEDm. M\xE1te k dispozici 12svodov\xE9 EKG, v\xFDsledky laboratorn\xEDch odb\u011Br\u016F a stabilizovali jste vit\xE1ln\xED funkce?";
    try {
      const gemini = getGeminiClient();
      const clinicalContext = formatClinicalContext(session);
      const prompt = `
Jsi l\xE9ka\u0159sk\xFD konzultant specializace [${specialty}] pracuj\xEDc\xED v \u010Desk\xE9 nemocnici.
Va\u0161\xEDm \xFAkolem je odpov\u011Bd\u011Bt slou\u017E\xEDc\xEDmu l\xE9ka\u0159i na urgentn\xEDm p\u0159\xEDjmu, kter\xFD s v\xE1mi konzultuje pacienta.

SPECIALISTA: ${specialty} (nap\u0159. Kardiolog, Neurolog, Chirurg, ARO)
AKTUALN\xCD STAV PACIENTA NA URGENTU:
${clinicalContext}

PERSONA SPECIALISTY:
- Kardiolog: Velmi vyt\xED\u017Een\xFD. U STEMI (Case 1) vy\u017Eaduje 12svodov\xE9 EKG, pod\xE1n\xED Anopyrinu a Heparinu k odsouhlasen\xED transportu na katetriza\u010Dn\xED s\xE1l (PCI). U kardiogenn\xEDho \u0161oku (Case 12) vy\u017Eaduje pod\xE1n\xED noradrenalinu/dobutaminu a Furosemidu (pokr\xE1j\xED plicn\xED ed\xE9m) a okam\u017Eit\xFD transport na katetriza\u010Dn\xED s\xE1l.
- Chirurg: Vy\u017Eaduje jasn\xE9 indikace k operaci. U polytraumatu chce FAST USG a stabilizaci ob\u011Bhu (trauma t\xFDm!). U pankreatitidy (Case 7) schvaluje konzervativn\xED postup na JIP, masivn\xED infuze a analgezii.
- Neurolog: U c\xE9vn\xED mozkov\xE9 p\u0159\xEDhody (Case 13) striktn\u011B vy\u017Eaduje urgentn\xED CT mozku k vylou\u010Den\xED krv\xE1cen\xED. Pokud je CT bez hemoragie, trv\xE1 na okam\u017Eit\xE9m zah\xE1jen\xED syst\xE9mov\xE9 trombol\xFDzy (Actilyse i.v.) v terapeutick\xE9m okn\u011B. Chce udr\u017Eet krevn\xED tlak pod 185/110 mmHg.
- ARO: Vy\u017Eaduje adekv\xE1tn\xED stabilizaci d\xFDchac\xEDch cest (intubace u polytraumatu, GCS < 9, nebo epiglottitidy). 
  - U febriln\xEDch k\u0159e\u010D\xED (Case 9) doporu\u010Duje paracetamol/ibuprofen a studen\xE9 z\xE1baly, pokud k\u0159e\u010De pominuly po diazepamu. 
  - U t\u011B\u017Ek\xE9ho d\u011Btsk\xE9ho astmatu (Case 10) po\u017Eaduje inhala\u010Dn\xED Ventolin/Atrovent, i.v. kortikoidy, a p\u0159\xEDpadn\u011B i.v. magnesium sulf\xE1t.
  - U epiglottitidy (Case 11) varuje p\u0159ed jak\xFDmkoliv stresov\xE1n\xEDm d\xEDt\u011Bte nebo vy\u0161et\u0159en\xEDm krku \u0161pachtl\xED (hroz\xED udu\u0161en\xED!) a doporu\u010Duje urgentn\xED \u0159\xEDzenou intubaci na s\xE1le s p\u0159\xEDtomnost\xED ARO l\xE9ka\u0159e.
- Vedouc\xED l\xE9ka\u0159 (Sokratick\xFD mentor): Je to zku\u0161en\xFD prim\xE1\u0159 a pedagog. Nikdy ned\xE1v\xE1 p\u0159\xEDm\xE9 odpov\u011Bdi ani n\xE1vody, co d\u011Blat. M\xEDsto toho odpov\xEDd\xE1 pokl\xE1d\xE1n\xEDm nav\xE1d\u011Bj\xEDc\xEDch (Sokratick\xFDch) ot\xE1zek, upozor\u0148uje na detaily v anamn\xE9ze nebo vit\xE1ln\xEDch funkc\xEDch a motivuje studenta, aby s\xE1m p\u0159i\u0161el na spr\xE1vn\xFD postup (nap\u0159. 'Co n\xE1m \u0159\xEDk\xE1 ta saturace 83%?' nebo 'Pod\xEDvejte se znovu na EKG k\u0159ivku, opravdu tam nevid\xEDte \u017E\xE1dnou abnormalitu?').

Napi\u0161te realistickou, klinicky spr\xE1vnou odpov\u011B\u010F v \u010De\u0161tin\u011B, kter\xE1 odr\xE1\u017E\xED \u010Deskou nemocni\u010Dn\xED realitu (m\xEDrn\u011B form\xE1ln\xED, p\u0159\xEDm\xE1, n\u011Bkdy m\xEDrn\u011B kousav\xE1 nebo skeptick\xE1, pokud l\xE9ka\u0159 na urgentu zapomn\u011Bl z\xE1sadn\xED kroky).

Zpr\xE1va od l\xE9ka\u0159e na urgentn\xEDm p\u0159\xEDjmu:
"${message}"

Napi\u0161 pouze samotn\xFD text odpov\u011Bdi v \u010De\u0161tin\u011B. Nepou\u017E\xEDvej uvozovky ani markdown form\xE1tov\xE1n\xED.
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
          const hasAnopyrin = session.therapies.meds.some((m) => m.name.toLowerCase().includes("anopyrin"));
          const hasHeparin = session.therapies.meds.some((m) => m.name.toLowerCase().includes("heparin"));
          if (hasEkg && hasAnopyrin && hasHeparin) {
            reply = "Skv\u011Bl\xE9, podle EKG a podan\xE9 terapie se jedn\xE1 o jasn\xE9 STEMI spodn\xED st\u011Bny. Pacient je stabilizovan\xFD, ihned ho transportujte na katetriza\u010Dn\xED s\xE1l (PCI s\xE1l). T\xFDm je p\u0159ipraven.";
          } else {
            reply = "Bez nato\u010Den\xE9ho 12svodov\xE9ho EKG a pod\xE1n\xED Anopyrinu (400mg p.o.) s Heparinem (5000 IU i.v.) pacienta na s\xE1l nep\u0159ijmu. Dopl\u0148te terapii a zavolejte znovu!";
          }
        } else if (session.caseId === "12") {
          const hasEkg = session.imagingReady.includes("ekg");
          const hasVasoactive = session.therapies.meds.some((m) => m.name.toLowerCase().includes("noradrenalin") || m.name.toLowerCase().includes("norepinefrin") || m.name.toLowerCase().includes("dobutamin"));
          if (hasEkg && hasVasoactive) {
            reply = "U pana Hor\xE1ka s masivn\xEDm p\u0159edn\xEDm STEMI a rozvinut\xFDm kardiogenn\xEDm \u0161okem je rekanalizace infarktov\xE9 tepny absolutn\xED prioritou! V\xFDborn\u011B, \u017Ee jste zah\xE1jili noradrenalin a dobutamin k udr\u017Een\xED perf\xFAze. Pod\xE1n\xED Furosemidu pro plicn\xED ed\xE9m schvaluji, ale opatrn\u011B na tlak. Pacienta ihned s monitorov\xE1n\xEDm transportujte k n\xE1m na PCI s\xE1l!";
          } else {
            reply = "Tohle je kardiogenn\xED \u0161ok p\u0159i extenzivn\xEDm p\u0159edn\xEDm STEMI s t\u011B\u017Ek\xFDm plicn\xEDm ed\xE9mem! Okam\u017Eit\u011B nato\u010Dte 12svodov\xE9 EKG a mus\xEDte nasadit vazopresorickou a inotropn\xED podporu (kontinu\xE1ln\u011B Noradrenalin a Dobutamin) k udr\u017Een\xED tlaku, jinak n\xE1m p\u0159i transportu na katetriza\u010Dn\xED s\xE1l zem\u0159e. Pak zavolejte znovu!";
          }
        } else if (session.caseId === "8") {
          reply = "U p\u0159ed\xE1vkov\xE1n\xED tricyklick\xFDmi antidepresivy vid\xEDm na EKG masivn\xED roz\u0161\xED\u0159en\xED QRS a prodlou\u017Een\xED QTc. Je to vysoce rizikov\xE9 pro komorov\xE9 arytmie! Okam\u017Eit\u011B podejte infuzi Natrium Bikarbon\xE1tu (NaHCO3) i.v. k alkalizaci, to stabilizuje myokard. Pokud dojde k z\xE1stav\u011B, volejte ihned ARO.";
        } else {
          reply = "U tohoto pacienta to nevypad\xE1 na akutn\xED koron\xE1rn\xED syndrom vy\u017Eaduj\xEDc\xED katetrizaci. Dopl\u0148te echo k l\u016F\u017Eku a vylu\u010Dte plicn\xED embolizaci.";
        }
      } else if (specialty === "Chirurg") {
        if (session.caseId === "3") {
          if (session.traumaTeamActivated) {
            reply = "Jsem na cest\u011B na urgent. P\u0159ipravte FAST USG k l\u016F\u017Eku a zahajte masivn\xED transfuzn\xED protokol, pacient krv\xE1c\xED!";
          } else {
            reply = "Aktivujte neprodlen\u011B Trauma T\xFDm! Tohle je masivn\xED polytrauma v \u0161oku, mus\xEDme kooperovat anestezii, chirurgii a radiologii.";
          }
        } else if (session.caseId === "7") {
          reply = "Ano, klinick\xFD obraz i extr\xE9mn\xED elevace amyl\xE1z a lip\xE1z jasn\u011B sv\u011Bd\u010D\xED pro akutn\xED bili\xE1rn\xED pankreatitidu. Pacientka pot\u0159ebuje masivn\xED infuzn\xED hydrataci krystaloidy, \xFApln\xFD klid nala\u010Dno a kvalitn\xED analgezii (nap\u0159. Novalgin nebo opi\xE1ty). Pokud sonografie b\u0159icha vylou\u010Dila perforaci, budeme postupovat konzervativn\u011B. P\u0159ijeme ji na chirurgickou JIP.";
        } else {
          reply = "Objednejte ultrazvuk b\u0159icha a zhodno\u0165te lok\xE1ln\xED peritone\xE1ln\xED p\u0159\xEDznaky. Pokud bude n\xE1lez pozitivn\xED, zavolejte.";
        }
      } else if (specialty === "Neurolog") {
        if (session.caseId === "13") {
          const hasCt = session.imagingReady.includes("ct");
          const hasThrombolysis = session.therapies.meds.some((m) => m.name.toLowerCase().includes("actilyse") || m.name.toLowerCase().includes("alteplas") || m.name.toLowerCase().includes("trombolyz"));
          if (hasCt) {
            if (hasThrombolysis) {
              reply = "Nativn\xED CT mozku je negativn\xED na krv\xE1cen\xED, co\u017E perfektn\u011B otev\xEDr\xE1 cestu pro syst\xE9movou trombol\xFDzu. Skv\u011Bl\xE9, \u017Ee jste Actilyse ji\u017E zah\xE1jili v \u010Dasn\xE9m okn\u011B! Sledujte neurologick\xFD deficit (NIHSS) a krevn\xED tlak, kter\xFD dr\u017Ete pod 180/105 mmHg (p\u0159\xEDpadn\u011B podejte Urapidil). Pacientku ihned p\u0159eb\xEDr\xE1me na na\u0161i iktovou jednotku.";
            } else {
              reply = "CT vylou\u010Dilo krv\xE1cen\xED a potvrzuje \u010Dasn\xE9 ischemick\xE9 zm\u011Bny vpravo. Pacientka je v \u010Dasn\xE9m terapeutick\xE9m okn\u011B (p\u0159\xEDznaky trvaj\xED jen 1 hodinu), tak\u017Ee je absolutn\u011B indikov\xE1na k pod\xE1n\xED syst\xE9mov\xE9 trombol\xFDzy (Actilyse 0.9 mg/kg i.v. - 10% bolus, zbytek hodina infuze). Pod\xE1n\xED ihned zahajte a j\xE1 p\u0159ipravuji l\u016F\u017Eko na iktov\xE9 jednotce.";
            }
          } else {
            reply = "U podez\u0159en\xED na hyperakutn\xED c\xE9vn\xED mozkovou p\u0159\xEDhodu s t\u011B\u017Ek\xFDm deficitem (NIHSS 16) mus\xEDme okam\u017Eit\u011B prov\xE9st nativn\xED CT mozku k vylou\u010Den\xED krv\xE1cen\xED! Bez toho nelze podat trombol\xFDzu a riskovali bychom fat\xE1ln\xED intracerebr\xE1ln\xED hemoragii. Po\u0161lete ji ihned na CT a jakmile uvid\xEDte sn\xEDmky, volejte m\u011B zp\u011Bt!";
          }
        } else {
          reply = "Neurologick\xE9 symptomy u tohoto p\u0159\xEDpadu nejsou dominantn\xED. Pokud vylou\u010D\xEDte metabolickou \u010Di kardi\xE1ln\xED p\u0159\xED\u010Dinu, m\u016F\u017Eeme pacienta konzultovat ambulantn\u011B.";
        }
      } else if (specialty === "ARO") {
        if (session.caseId === "3") {
          const hasIntubation = session.therapies.oxygen.toLowerCase().includes("intub") || session.therapies.oxygen.toLowerCase().includes("etk");
          if (!hasIntubation) {
            reply = "Pacient m\xE1 GCS 9 a dechov\xE9 selh\xE1v\xE1n\xED! Pro\u010D je\u0161t\u011B nen\xED zaintubovan\xFD? Okam\u017Eit\u011B zajist\u011Bte d\xFDchac\xED cesty (ETK), nalo\u017Ete p\xE1nevn\xED p\xE1s a pak ho p\u0159evezmeme na resuscita\u010Dn\xED l\u016F\u017Eko.";
          } else {
            reply = "V\xFDborn\u011B, d\xFDchac\xED cesty jsou zaji\u0161t\u011Bny. Jak\xFD je hemoglobin a lakt\xE1t? Podali jste kyselinu tranexamovou? Pokra\u010Dujte v transfuz\xEDch, l\u016F\u017Eko JIP/ARO je p\u0159ipraven\xE9.";
          }
        } else if (session.caseId === "4") {
          reply = "Pro Tobi\xE1\u0161ka (3 roky) s podez\u0159en\xEDm na subglotickou laryngitidu je kl\xED\u010Dov\xE9 zajistit chladn\xFD vlhk\xFD vzduch a podat Dexamethason (0.6 mg/kg i.v./p.o.) nebo Rectodelt \u010D\xEDpek. Pokud m\xE1 inspira\u010Dn\xED stridor i v naprost\xE9m klidu, p\u0159ipravte inhala\u010Dn\xED adrenalin (1:1000) p\u0159es nebuliz\xE1tor. Hlavn\u011B ho zbyte\u010Dn\u011B nestresujte odb\u011Bry a pl\xE1\u010Dem, to otok zhor\u0161\xED. Budeme ho monitorovat.";
        } else if (session.caseId === "5") {
          reply = "Pozor, to vypad\xE1 na rozv\xEDjej\xEDc\xED se fulminantn\xED meningokokovou sepsi! Rychle zajist\u011Bte perifern\xED vstupy, podejte Ceftriaxon (STATIM i.v.) a okam\u017Eit\u011B zahajte agresivn\xED volumoterapii krystaloidy pro rozv\xEDjej\xEDc\xED se \u0161ok. Kysl\xEDk samoz\u0159ejmost\xED. Jsem na cest\u011B k v\xE1m, p\u0159evezmeme ji na d\u011Btskou resuscita\u010Dn\xED p\xE9\u010Di.";
        } else if (session.caseId === "6") {
          reply = "U anafylaxe s hypotenz\xED a bronchospasmem/laryngospasmem okam\u017Eit\u011B aplikujte Adrenalin 0.5 mg i.m. (do stehna) - to je absolutn\xED l\xE9k prvn\xED volby! Soub\u011B\u017En\u011B zapn\u011Bte pln\xFD kysl\xEDk, podejte i.v. krystaloidy pod tlakem, Dithiaden i.v. a Solu-Medrol i.v. Pokud otok hrtanu ohroz\xED d\xFDchac\xED cesty, p\u0159ipravte se na urgentn\xED intubaci, jdu k v\xE1m!";
        } else if (session.caseId === "8") {
          reply = "Pacient v soporu (GCS 8) s intoxikac\xED kardiotoxick\xFDmi antidepresivy vy\u017Eaduje okam\u017Eit\u011B zaji\u0161t\u011Bn\xED d\xFDchac\xEDch cest intubac\xED kv\u016Fli riziku aspirace a \xFAtlumu dechu. EKG ukazuje hroziv\u011B \u0161irok\xFD QRS - ihned podejte Natrium Bikarbon\xE1t 8.4% i.v. k alkalizaci s\xE9ra (c\xEDlov\xE9 pH 7.45-7.50). Bez zaintubov\xE1n\xED a pod\xE1n\xED bikarbon\xE1tu ho nep\u0159ijmeme, jdu v\xE1m s intubac\xED pomoct.";
        } else if (session.caseId === "9") {
          reply = "U Honz\xEDka (febriln\xED k\u0159e\u010De) plat\xED: jeliko\u017E k\u0159e\u010De po rekt\xE1ln\xEDm diazepamu ustaly, nesp\u011Bchejte s agresivn\xED terapi\xED. Podejte antipyretika (Paracetamol nebo Ibuprofen \u010D\xEDpek) a chlape\u010Dka fyzik\xE1ln\u011B chla\u010Fte vla\u017En\xFDmi z\xE1baly. Monitorujte dech a saturaci. Kdyby se k\u0159e\u010De opakovaly, zavolejte n\xE1s k zaji\u0161t\u011Bn\xED d\xFDchac\xEDch cest, ale nyn\xED ho sp\xED\u0161e nechme v klidu dospat a hledejte zdroj hore\u010Dky (ou\u0161ka, krk).";
        } else if (session.caseId === "10") {
          const hasInhalation = session.therapies.meds.some((m) => m.name.toLowerCase().includes("ventolin") || m.name.toLowerCase().includes("salbutamol") || m.name.toLowerCase().includes("atrovent") || m.name.toLowerCase().includes("ipratropium"));
          const hasSteroids = session.therapies.meds.some((m) => m.name.toLowerCase().includes("solu") || m.name.toLowerCase().includes("methylprednisolon") || m.name.toLowerCase().includes("dexamet"));
          if (hasInhalation && hasSteroids) {
            reply = "Skv\u011Ble, inhala\u010Dn\xED bronchodilatancia s i.v. Solu-Medrolem jsou z\xE1klad. Pokud m\xE1 Sofinka st\xE1le t\u011B\u017Ekou dechovou t\xEDse\u0148, nasa\u010Fte magnesium sulf\xE1t (MgSO4) v pomal\xE9 infuzi, to uvoln\xED k\u0159e\u010D hladk\xFDch sval\u016F. Kysl\xEDk d\xE1vejte kontinu\xE1ln\u011B. Kdyby se objevily zn\xE1mky dechov\xE9ho vy\u010Derp\xE1n\xED, poruchy v\u011Bdom\xED nebo tich\xE9ho hrudn\xEDku, okam\u017Eit\u011B b\u011B\u017E\xEDm intubovat.";
          } else {
            reply = "T\u011B\u017Ek\xFD status asthmaticus u d\xEDt\u011Bte vy\u017Eaduje neprodlen\xE9 pod\xE1n\xED inhala\u010Dn\xEDho Ventolinu s Atroventem (nebulizac\xED) a STATIM Solu-Medrol (1-2 mg/kg i.v.)! Bez t\xE9to intensivn\xED bronchodilata\u010Dn\xED a protiz\xE1n\u011Btliv\xE9 l\xE9\u010Dby se d\xFDchac\xED cesty neuvoln\xED. Ihned to podejte a monitorujte saturaci.";
          }
        } else if (session.caseId === "11") {
          reply = "\u{1F6A8} POZOR! Tohle je jasn\xE1 akutn\xED epiglotitida (Ad\xE1mek, 4 roky), extr\xE9mn\xED urgentn\xED situace v pediatrii! Jak\xFDkoliv stres, n\xE1siln\xE9 odb\u011Bry krve nebo vy\u0161et\u0159ov\xE1n\xED hrdla \u0161pachtl\xED jsou P\u0158\xCDSN\u011A ZAK\xC1Z\xC1NY pro riziko reflexn\xEDho laryngospasmu a okam\u017Eit\xE9ho udu\u0161en\xED! Nechte chlapce v klidu sed\u011Bt u maminky, podejte zvlh\u010Den\xFD kysl\xEDk, pokud to snese bez pl\xE1\u010De. J\xE1 okam\u017Eit\u011B b\u011B\u017E\xEDm na urgent s intuba\u010Dn\xEDm i tracheotomick\xFDm setem. Budeme intubovat kontrolovan\u011B v anestezii!";
        } else {
          reply = "Pokud je pacient stabiln\xED a nepot\u0159ebuje um\u011Blou plicn\xED ventilaci ani vazopresory, ulo\u017Ete ho na standardn\xED intern\xED odd\u011Blen\xED nebo JIP.";
        }
      } else if (specialty.includes("Vedouc\xED l\xE9ka\u0159")) {
        if (session.caseId === "1" || session.caseId === "12" || session.caseId === "14") {
          reply = "Pod\xEDvejte se pozorn\u011B na EKG monitor pacienta a zhodno\u0165te rytmus. Vid\xEDte tam n\u011Bjak\xE9 zn\xE1mky ischemie? Jakou terapii mus\xEDme podat u akutn\xEDho infarktu a jak\xE1 vy\u0161et\u0159en\xED jsou kl\xED\u010Dov\xE1?";
        } else if (session.caseId === "2" || session.caseId === "15") {
          reply = "Co si mysl\xEDte o t\xE9 kombinaci du\u0161nosti, tachykardie a rizikov\xFDch faktor\u016F? Jak\xE9 vy\u0161et\u0159en\xED by n\xE1m potvrdilo embolii nebo exacerbaci CHOPN, a co ta hl\xE1\u0161en\xE1 alergie pacienta?";
        } else if (session.caseId === "3") {
          reply = "M\xE1me tu t\u011B\u017Ek\xE9 trauma. Co je prvn\xED prioritou u pacienta se zhor\u0161en\xFDm v\u011Bdom\xEDm a rozv\xEDjej\xEDc\xEDm se \u0161okem? Zkontrolovali jste d\xFDchac\xED cesty, fixaci p\xE1te\u0159e a p\xE1nev?";
        } else if (session.caseId === "4" || session.caseId === "9" || session.caseId === "10" || session.caseId === "11" || session.caseId === "17") {
          reply = "U d\u011Btsk\xFDch pacient\u016F s dechovou t\xEDsn\xED nebo k\u0159e\u010Demi je kl\xED\u010Dov\xFD klidn\xFD p\u0159\xEDstup bez zbyte\u010Dn\xE9ho stresov\xE1n\xED. Jak\xE1 farmakoterapie sni\u017Euje otok cest \u010Di k\u0159e\u010De? A je bezpe\u010Dn\xE9 d\u011Blat vy\u0161et\u0159en\xED krku \u0161pachtl\xED?";
        } else if (session.caseId === "5") {
          reply = "Petechie, sepse a \u0161ok u d\xEDt\u011Bte. Kter\xE1 l\xE9\u010Dba je nejv\xEDce \u010Dasov\u011B senzitivn\xED a mus\xED se podat hned v prvn\xED hodin\u011B? Jak zajist\xEDme ob\u011Bh?";
        } else if (session.caseId === "6") {
          reply = "Anafylaxe s hypotenz\xED a bronchospasmem. Co je absolutn\xED l\xE9k prvn\xED volby a jak\xE1 je spr\xE1vn\xE1 cesta pod\xE1n\xED? Podali jste dostatek tekutin a antihistaminika?";
        } else if (session.caseId === "7") {
          reply = "Akutn\xED pankreatitida vy\u017Eaduje intenzivn\xED hydrataci krystaloidy k prevenci \u0161oku a \xFA\u010Dinnou analgezii. Jak\xFD je n\xE1lez na b\u0159i\u0161e a co uk\xE1zala laborato\u0159?";
        } else if (session.caseId === "8") {
          reply = "U p\u0159ed\xE1vkov\xE1n\xED tricyklick\xFDmi antidepresivy vid\xEDme \u0161irok\xFD QRS a prodlou\u017Een\xFD QTc. Jak\xFD specifick\xFD l\xE9k i.v. stabilizuje myokard a zabr\xE1n\xED arytmi\xEDm? Jsou d\xFDchac\xED cesty chr\xE1n\u011Bny p\u0159i GCS 8?";
        } else if (session.caseId === "13" || session.caseId === "16") {
          reply = "U akutn\xED c\xE9vn\xED mozkov\xE9 p\u0159\xEDhody hraje \u010Das z\xE1sadn\xED roli. Kter\xE9 zobrazovac\xED vy\u0161et\u0159en\xED mus\xEDme prov\xE9st STATIM k vylou\u010Den\xED krv\xE1cen\xED? A co krevn\xED tlak, dr\u017E\xEDte ho v bezpe\u010Dn\xFDch mez\xEDch?";
        } else if (session.caseId === "18") {
          reply = "Akutn\xED po\u0161kozen\xED ledvin preren\xE1ln\xED etiologie. Jak\xE9 l\xE9ky mus\xEDme okam\u017Eit\u011B vysadit? Jak budeme m\u011B\u0159it diur\xE9zu a jak\xFD je stav hydratace?";
        } else {
          reply = "Zkuste se zamyslet nad hlavn\xEDmi pot\xED\u017Eemi pacienta. Jsou vit\xE1ln\xED funkce stabiln\xED? Jak\xE9 diagnostick\xE9 kroky a terapii doporu\u010Duj\xED standardy \u010CLS JEP?";
        }
      }
    }
    session.chatHistory[specialty].push({
      sender: "MUDr. \u010Cern\xFD (" + specialty + ")",
      text: reply,
      time: timestamp
    });
    session.actionLog.push({
      time: timestamp,
      text: `Konzultov\xE1no s odbornost\xED ${specialty}.`,
      source: "system"
    });
    sendSession(session);
  });
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
      const timelineStr = session.actionLog.map((l) => `[${l.time}] ${l.text}`).join("\n");
      const medsStr = session.therapies.meds.map((m) => `${m.name} ${m.dose} ${m.route}`).join(", ");
      const prompt = `
Jsi p\u0159\xEDsn\xE1 a vysoce odborn\xE1 atesta\u010Dn\xED komise slo\u017Een\xE1 z p\u0159edn\xEDch \u010Desk\xFDch l\xE9ka\u0159\u016F urgentn\xED medic\xEDny.
Va\u0161\xEDm \xFAkolem je vyhodnotit simulovan\xFD z\xE1sah l\xE9ka\u0159e na urgentn\xEDm p\u0159\xEDjmu ("Urgentn\xED p\u0159\xEDjem") a vypracovat detailn\xED "Zp\u011Btnou vazbu" (Debriefing) v \u010De\u0161tin\u011B.

SKUTE\u010CN\xDD STAV PACIENTA:
- Diagn\xF3za: ${caseDef.secretDiagnosis} (K\xF3d MKN-10: ${caseDef.secretDiagnosisCode})
- \xDArove\u0148 obt\xED\u017Enosti: ${session.level}

ROZHODNUT\xCD U\u017DIVATELE (L\xC9KA\u0158E):
- Zvolen\xE1 dispozice/p\u0159eklad: ${disposition} (Mo\u017Enosti: home - propustit dom\u016F, ward - standardn\xED odd., icu - JIP/ARO, surgery - opera\u010Dn\xED s\xE1l/katetriza\u010Dn\xED PCI s\xE1l)
- Zadan\xFD k\xF3d diagn\xF3zy MKN-10: ${diagnosisCode}
- Epikr\xEDza (shrnut\xED l\xE9ka\u0159e): "${epikriza}"
- Bezpe\u010Dnostn\xED checklist (safety): ${checklist ? checklist.join(", ") : "\u017E\xE1dn\xFD"}

PR\u016EB\u011AH KLINICK\xC9HO Z\xC1SAHU (LOG \u010CASOV\xC9 OSY):
${timelineStr}

TERAPEUTICK\xC9 \xDADAJE:
- Zaji\u0161t\u011Bn\xED kysl\xEDku: ${session.therapies.oxygen}
- \u017Diln\xED vstup: ${session.therapies.ivAccess}
- Podan\xE9 infuze: ${session.therapies.infusion}
- Podan\xE9 l\xE9ky: ${medsStr || "\u017D\xE1dn\xE9"}
- Celkov\xFD str\xE1ven\xFD \u010Das na l\u016F\u017Eku: ${session.elapsedTime} minut

Napi\u0161te podrobnou zp\u011Btnou vazbu rozd\u011Blenou do 4 sekc\xED:
1. SPRAVNOST DIAGN\xD3ZY: Vyhodno\u0165te p\u0159esnost zadan\xE9ho k\xF3du MKN-10 (${diagnosisCode}) a epikr\xEDzy. Pro srovn\xE1n\xED, spr\xE1vn\xE1 diagn\xF3za je ${caseDef.secretDiagnosis} (k\xF3d ${caseDef.secretDiagnosisCode}).
2. TERAPEUTICK\xDD POSTUP: Vyhodno\u0165te, zda l\xE9ka\u0159 podal v\u0161echny kritick\xE9 l\xE9ky a z\xE1kroky podle \u010Desk\xFDch doporu\u010Den\xFDch postup\u016F \u010CLS JEP.
   - Pro STEMI (Case 1) je kritick\xE9: 12svodov\xE9 EKG, Anopyrin (Aspirin), Heparin, transport na s\xE1l. Nitroglycerin je vhodn\xFD.
   - Pro Embolii (Case 2) je kritick\xE9: Kysl\xEDk, Heparin/LMWH, CT plicnice (nebo bedside Echo kv\u016Fli alergii na j\xF3d!).
   - Pro Polytrauma (Case 3) je kritick\xE9: Kr\u010Dn\xED l\xEDmec, zaji\u0161t\u011Bn\xED d\xFDchac\xEDch cest (intubace pro GCS 9), kyselina tranexamov\xE1 (Exacyl), masivn\xED transfuzn\xED protokol, FAST USG, p\xE1nevn\xED p\xE1s.
   - Pro Subglotickou laryngitidu u d\xEDt\u011Bte (Case 4) je kritick\xE9: chladn\xFD vzduch/inhalace, pod\xE1n\xED kortikosteroid\u016F (Dexamethason i.v./p.o. nebo Rectodelt \u010D\xEDpek). Pokud je t\u011B\u017Ek\xFD stridor v klidu, pak inhala\u010Dn\xED adrenalin. Vyvarovat se zbyte\u010Dn\xE9mu stresov\xE1n\xED d\xEDt\u011Bte (pl\xE1\u010D zhor\u0161uje otok).
   - Pro Meningokokovou sepse u d\xEDt\u011Bte (Case 5) je kritick\xE9: rychl\xFD i.v. vstup, okam\u017Eit\xE9 pod\xE1n\xED \u0161irokospektr\xFDch antibiotik (Ceftriaxon nebo Penicilin G) STATIM, volumoterapie (krystaloidy v bolusech) k zal\xE9\u010Den\xED septick\xE9ho \u0161oku, oxygenoterapie.
   - Pro Anafylaktick\xFD \u0161ok (Case 6) je kritick\xE9: pod\xE1n\xED Adrenalinu i.m. (nebo i.v. p\u0159i selh\xE1n\xED ob\u011Bhu) jako l\xE9k prvn\xED volby, high-flow kysl\xEDk, agresivn\xED volumoterapie, antihistaminika (Dithiaden i.v.) a kortikosteroidy (Methylprednisolon/Solu-Medrol i.v.).
   - Pro Akutn\xED pankreatitidu (Case 7) je kritick\xE9: masivn\xED infuzn\xED hydratace (krystaloidy, Ringer), \xFA\u010Dinn\xE1 analgetizace (metamizol, metamizol + opioidy), klid nala\u010Dno, monitorov\xE1n\xED. Pozor na alergii na j\xF3d p\u0159i CT.
   - Pro Intoxikaci tricyklick\xFDmi antidepresivy (Case 8) je kritick\xE9: pod\xE1n\xED Natrium Bikarbon\xE1tu (NaHCO3 8.4%) i.v. k alkalizaci s\xE9ra p\u0159i roz\u0161\xED\u0159en\xED QRS na EKG, zaji\u0161t\u011Bn\xED d\xFDchac\xEDch cest (intubace u hlubok\xE9ho bezv\u011Bdom\xED GCS 8), aktivn\xED uhl\xED, EKG monitoring.
   Vy\u010Dt\u011Bte opomenut\xED kl\xED\u010Dov\xFDch l\xE9k\u016F \u010Di zbyte\u010Dn\xE9 wasting time.
3. EFEKTIVITA A \u010CAS: Vyhodno\u0165te str\xE1ven\xFD \u010Das (${session.elapsedTime} min). Byl postup rychl\xFD, nebo l\xE9ka\u0159 pl\xFDtval \u010Dasem na zbyte\u010Dn\xE1 vy\u0161et\u0159en\xED (nap\u0159. pos\xEDlat nestabiln\xEDho pacienta s traumatem v \u0161oku na celot\u011Blov\xE9 CT p\u0159ed stabilizac\xED ob\u011Bhu a pod\xE1n\xEDm transfuz\xED)?
4. KOMUNIKACE: Byly konzultace se specialisty adekv\xE1tn\xED a v\u010Dasn\xE9?

Uve\u010Fte tak\xE9 CELKOV\xC9 HODNOCEN\xCD vyj\xE1d\u0159en\xE9 v procentech (0% a\u017E 100%) na z\xE1klad\u011B l\xE9ka\u0159sk\xE9 preciznosti a bezpe\u010Dnosti pacienta.

Odpov\u011Bzte v\xFDhradn\u011B v \u010De\u0161tin\u011B, form\xE1tujte srozumiteln\u011B v Markdownu s elegantn\xED strukturou. Nepou\u017E\xEDvejte promo hant\xFDrku ani anglicismy, mluvte jako v\xE1\u017Een\xFD \u010Desk\xFD prim\xE1\u0159.
`;
      const response = await gemini.models.generateContent({
        model: "gemini-3.5-flash",
        contents: prompt
      });
      session.debriefing = response.text || "Hodnocen\xED se nepoda\u0159ilo vygenerovat.";
    } catch (err) {
      console.error("Evaluation generation error:", err);
      let score = 50;
      let review = "### 1. Spr\xE1vnost diagn\xF3zy\n";
      const isCorrectDiag = diagnosisCode.trim().toUpperCase().includes(caseDef.secretDiagnosisCode.toUpperCase()) || epikriza.toLowerCase().includes(caseDef.secretDiagnosis.toLowerCase().substring(0, 10));
      if (isCorrectDiag) {
        score += 20;
        review += `\u2705 **V\xFDborn\u011B.** Stanovil jste spr\xE1vnou diagn\xF3zu: **${caseDef.secretDiagnosis}** (K\xF3d: ${caseDef.secretDiagnosisCode}). Va\u0161e epikr\xEDza je klinicky srozumiteln\xE1.

`;
      } else {
        review += `\u274C **Chyba.** Spr\xE1vn\xE1 diagn\xF3za byla **${caseDef.secretDiagnosis}** (K\xF3d MKN-10: ${caseDef.secretDiagnosisCode}). Va\u0161e zadan\xE1 diagn\xF3za neodpov\xEDd\xE1 klinick\xE9mu obrazu pacienta.

`;
      }
      review += "### 2. Terapeutick\xFD postup\n";
      if (session.caseId === "1") {
        const hasEkg = session.imagingReady.includes("ekg");
        const hasAnopyrin = session.therapies.meds.some((m) => m.name.toLowerCase().includes("anopyrin"));
        const hasHeparin = session.therapies.meds.some((m) => m.name.toLowerCase().includes("heparin"));
        if (hasEkg && hasAnopyrin && hasHeparin) {
          score += 20;
          review += "\u2705 **Perfektn\xED zvl\xE1dnut\xED AKS.** Nato\u010Dil jste 12svodov\xE9 EKG, v\u010Das podal du\xE1ln\xED antiagregaci (Anopyrin) a provedl plnou antikoagulaci Heparinem podle standard\u016F \u010CLS JEP.\n";
        } else {
          review += "\u274C **Z\xE1va\u017En\xE9 nedostatky v terapii STEMI!** Zapomn\u011Bl jste podat bu\u010F kyselinu acetylsalicylovou (Anopyrin) p.o. rozkousat, nebo nefrakcionovan\xFD Heparin i.v. Tyto kroky zachra\u0148uj\xED \u017Eivot p\u0159ed uz\xE1v\u011Brem v\u011Bn\u010Dit\xE9 tepny.\n";
        }
      } else if (session.caseId === "2") {
        const hasOxygen = !session.therapies.oxygen.includes("\u017D\xE1dn\xE9");
        const hasHeparin = session.therapies.meds.some((m) => m.name.toLowerCase().includes("heparin") || m.name.toLowerCase().includes("clexane") || m.name.toLowerCase().includes("fraxiparin"));
        if (hasOxygen && hasHeparin) {
          score += 20;
          review += "\u2705 **Spr\xE1vn\xFD postup u plicn\xED embolie.** Podal jste v\u010Das kysl\xEDk a zah\xE1jil antikoagula\u010Dn\xED l\xE9\u010Dbu. Pozor na hl\xE1\u0161enou alergii na j\xF3d - CT angiografie plicnice s kontrastem vy\u017Eadovala adekv\xE1tn\xED premedikaci nebo nahrazen\xED Bedside echokardiografi\xED!\n";
        } else {
          review += "\u274C **Nedostate\u010Dn\xE1 l\xE9\u010Dba plicn\xED embolie.** Selhal jste v rychl\xE9m zah\xE1jen\xED antikoagulace (Heparin/LMWH) nebo adekv\xE1tn\xEDm zaji\u0161t\u011Bn\xED hypoxie pod\xE1n\xEDm kysl\xEDku.\n";
        }
      } else if (session.caseId === "3") {
        const hasIntubation = session.therapies.oxygen.toLowerCase().includes("intub") || session.therapies.oxygen.toLowerCase().includes("etk");
        const hasExacyl = session.therapies.meds.some((m) => m.name.toLowerCase().includes("exacyl") || m.name.toLowerCase().includes("tranexam"));
        const hasTransfusion = session.therapies.infusion.toLowerCase().includes("transf") || session.therapies.infusion.toLowerCase().includes("erytr");
        if (hasIntubation && hasExacyl && hasTransfusion) {
          score += 20;
          review += "\u2705 **Excelentn\xED zvl\xE1dnut\xED masivn\xEDho polytraumatu.** V\u010Das jste zaintuboval pacienta se zhor\u0161en\xFDm v\u011Bdom\xEDm (GCS 9), podal kyselinu tranexamovou (Exacyl) pro kontrolu vnit\u0159n\xEDho krv\xE1cen\xED a zah\xE1jil masivn\xED krevn\xED p\u0159evody.\n";
        } else {
          review += "\u274C **Z\xE1va\u017En\xE1 pochyben\xED u polytraumatu v hemoragick\xE9m \u0161oku!** Opomn\u011Bl jste bu\u010F intubaci pro ochranu d\xFDchac\xEDch cest (GCS 9 vy\u017Eaduje zaji\u0161t\u011Bn\xED ETK!), pod\xE1n\xED Exacylu, nebo v\u010Dasn\xFD masivn\xED transfuzn\xED protokol k n\xE1hrad\u011B ztr\xE1t krve.\n";
        }
      } else if (session.caseId === "4") {
        const hasDexamethason = session.therapies.meds.some((m) => m.name.toLowerCase().includes("dexamethas") || m.name.toLowerCase().includes("rectodelt") || m.name.toLowerCase().includes("prednison"));
        if (hasDexamethason) {
          score += 20;
          review += "\u2705 **Spr\xE1vn\xFD postup u d\u011Btsk\xE9 subglotick\xE9 laryngitidy.** Podal jste v\u010Das kortikosteroidy (Dexamethason/Rectodelt), kter\xE9 sni\u017Euj\xED otok hrtanu. U d\u011Bt\xED je kl\xED\u010Dov\xE9 minimalizovat stres a pl\xE1\u010D a pod\xE1vat chladn\xFD vzduch.\n";
        } else {
          review += "\u274C **Chyba v terapii laryngitidy!** Zapomn\u011Bl jste podat syst\xE9mov\xE9 kortikosteroidy (Dexamethason / Rectodelt \u010D\xEDpek). Tyto l\xE9ky jsou z\xE1kladn\xEDm kamenem sn\xED\u017Een\xED otoku hrtanu u d\xEDt\u011Bte.\n";
        }
      } else if (session.caseId === "5") {
        const hasAb = session.therapies.meds.some((m) => m.name.toLowerCase().includes("ceftriax") || m.name.toLowerCase().includes("penicilin") || m.name.toLowerCase().includes("ampicilin"));
        const hasInfusion = !session.therapies.infusion.includes("\u017D\xE1dn\xE9");
        if (hasAb && hasInfusion) {
          score += 20;
          review += "\u2705 **\u017Divot zachra\u0148uj\xEDc\xED postup u meningokokov\xE9 sepse.** Okam\u017Eit\u011B jste zajistil i.v. vstup, zah\xE1jil volumoterapii pro za\u010D\xEDnaj\xEDc\xED \u0161ok a podal \u0161irokospektr\xE1 antibiotika (Ceftriaxon) STATIM. Tento agresivn\xED p\u0159\xEDstup zachr\xE1nil d\xEDt\u011B p\u0159ed fat\xE1ln\xED progres\xED.\n";
        } else {
          review += "\u274C **Z\xE1va\u017En\xE9 selh\xE1n\xED v l\xE9\u010Db\u011B meningokokov\xE9 sepse!** U meningokokov\xE9 sepse s petechiemi hraje roli ka\u017Ed\xE1 minuta. Zapomn\u011Bl jste podat okam\u017Eit\u011B i.v. \u0161irokospektr\xE1 antibiotika (Ceftriaxon) nebo dostate\u010Dn\u011B hradit ob\u011Bh infuzemi.\n";
        }
      } else if (session.caseId === "6") {
        const hasAdrenalin = session.therapies.meds.some((m) => m.name.toLowerCase().includes("adrenalin") || m.name.toLowerCase().includes("epinephrin"));
        if (hasAdrenalin) {
          score += 20;
          review += "\u2705 **Skv\u011Bl\xE9 zvl\xE1dnut\xED anafylaktick\xE9ho \u0161oku.** Podal jste v\u010Das Adrenalin, co\u017E je l\xE9k prvn\xED volby. Terapii jste vhodn\u011B doplnil kortikosteroidy, antihistaminiky (Dithiaden) a infuzn\xED podporou.\n";
        } else {
          review += "\u274C **Kritick\xE1 chyba p\u0159i anafylaktick\xE9m \u0161oku!** Nepodal jste Adrenalin - l\xE9k prvn\xED volby u anafylaxe doprov\xE1zen\xE9 hypotenz\xED a stridorem. Samotn\xFD Dithiaden nebo Solu-Medrol bez adrenalinu pacienta nezachr\xE1n\xED.\n";
        }
      } else if (session.caseId === "7") {
        const hasInfusion = !session.therapies.infusion.includes("\u017D\xE1dn\xE9");
        const hasAnalgetic = session.therapies.meds.some((m) => m.name.toLowerCase().includes("novalgin") || m.name.toLowerCase().includes("metamizol") || m.name.toLowerCase().includes("fentanyl") || m.name.toLowerCase().includes("sufent") || m.name.toLowerCase().includes("paracet") || m.name.toLowerCase().includes("dolsin"));
        if (hasInfusion && hasAnalgetic) {
          score += 20;
          review += "\u2705 **Korektn\xED postup u akutn\xED pankreatitidy.** Zajistil jste dostate\u010Dnou infuzn\xED volumoterapii (prevence hypovolemick\xE9ho \u0161oku p\u0159i 't\u0159et\xEDm prostoru') a adekv\xE1tn\xED ti\u0161en\xED bolesti analgetiky.\n";
        } else {
          review += "\u274C **Chyby v managementu pankreatitidy.** Pacientka s akutn\xED pankreatitidou vy\u017Eaduje masivn\xED hydrataci krystaloidy k prevenci mikrocirkula\u010Dn\xEDho selh\xE1n\xED pankreatu a \xFA\u010Dinnou analgezii. Jedno z toho chyb\u011Blo.\n";
        }
      } else if (session.caseId === "8") {
        const hasBikarbonat = session.therapies.meds.some((m) => m.name.toLowerCase().includes("bikarbonat") || m.name.toLowerCase().includes("bicarbon") || m.name.toLowerCase().includes("nahco3"));
        if (hasBikarbonat) {
          score += 20;
          review += "\u2705 **Vynikaj\xEDc\xED toxikologick\xFD z\xE1sah.** Rozpoznal jste TCA kardiotoxicitu (prodlou\u017Een\xE9 QRS, tachykardie) a v\u010Das podal infuzi Natrium Bikarbon\xE1tu (NaHCO3) k alkalizaci s\xE9ra a stabilizaci sod\xEDkov\xFDch kan\xE1l\u016F myokardu.\n";
        } else {
          review += "\u274C **Z\xE1va\u017En\xE9 opomenut\xED u intoxikace TCA!** P\u0159i t\u011B\u017Ek\xE9m p\u0159ed\xE1vkov\xE1n\xED tricyklick\xFDmi antidepresivy s roz\u0161\xED\u0159en\xEDm QRS komplexu na EKG je kritick\xFDm a \u017Eivot zachra\u0148uj\xEDc\xEDm krokem pod\xE1n\xED Natrium Bikarbon\xE1tu i.v. k antagonizaci kardiotoxicity.\n";
        }
      }
      review += "\n### 3. Efektivita a \u010Das\n";
      if (session.elapsedTime < 30) {
        score += 10;
        review += `\u26A1 **Vynikaj\xEDc\xED rychlost.** Vy\u0159e\u0161eno za ${session.elapsedTime} minut. Pacient byl minim\xE1ln\u011B ohro\u017Een prodlu\u017Eov\xE1n\xEDm diagn\xF3zy.
`;
      } else {
        review += `\u26A0\uFE0F **Ztr\xE1ta drahocenn\xE9ho \u010Dasu.** Str\xE1vil jste ${session.elapsedTime} minut na urgentn\xEDm p\u0159\xEDjmu. U urgentn\xEDch stav\u016F (STEMI, masivn\xED \u0161ok) rozhoduj\xED minuty.
`;
      }
      review += "\n### 4. Komunikace\n";
      review += "\u{1F4AC} Konzultace se specialisty byly provedeny. Doporu\u010Dujeme volat konzili\xE1\u0159e a\u017E po dokon\u010Den\xED z\xE1kladn\xED stabilizace a diagnostiky (EKG, vit\xE1ly).\n";
      review += `

## **CELKOV\xC9 HODNOCEN\xCD: ${Math.min(100, score)}%**`;
      session.debriefing = review;
    }
    res.json(session);
  });
  if (process.env.NODE_ENV !== "production") {
    const vite = await (0, import_vite.createServer)({
      server: { middlewareMode: true },
      appType: "spa"
    });
    app.use(vite.middlewares);
  } else {
    const distPath = import_path2.default.join(process.cwd(), "dist");
    app.use(import_express.default.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(import_path2.default.join(distPath, "index.html"));
    });
  }
  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}
startServer();
//# sourceMappingURL=server.cjs.map
