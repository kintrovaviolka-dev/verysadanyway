const express = require('express');
const fs = require('fs');
const path = require('path');
const { GoogleGenAI, Type } = require('@google/genai');
const { CASES } = require('./cases');

// --- LOAD ENVIRONMENT VARIABLES ---
// Load environment variables natively in Node.js (v20.12+)
// This is a programmatic fallback if --env-file wasn't passed via CLI
if (typeof process.loadEnvFile === 'function') {
  try {
    process.loadEnvFile(path.join(__dirname, '.env'));
  } catch (e) {
    // Ignore if .env does not exist or load fails
  }
}

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Serve clinical-portal alias
app.use('/clinical-portal', express.static(path.join(__dirname, 'clinical-learning-portal')));

// Serve static files from root directory
app.use(express.static(__dirname));

// --- LAZY GEMINI CLIENT ---
let aiClient = null;
function getGeminiClient() {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey || apiKey === 'YOUR_API_KEY_HERE' || apiKey === 'your_gemini_api_key_here') {
    throw new Error("GEMINI_API_KEY is not configured. Please add your key to the .env file.");
  }
  if (!aiClient) {
    aiClient = new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        },
      },
    });
  }
  return aiClient;
}

// --- RATE LIMITING MIDDLEWARE FOR CHAT ---
const rateLimitCache = new Map();
const LIMIT_WINDOW_MS = 60 * 1000; // 1 minute
const MAX_REQUESTS = 10;
const MIN_INTERVAL_MS = 2000; // 2 seconds between requests

// Clear old entries from cache every 10 minutes to prevent memory leaks
setInterval(() => {
  const now = Date.now();
  for (const [ip, data] of rateLimitCache.entries()) {
    data.timestamps = data.timestamps.filter(ts => now - ts < LIMIT_WINDOW_MS);
    if (data.timestamps.length === 0) {
      rateLimitCache.delete(ip);
    }
  }
}, 10 * 60 * 1000);

function getClientIp(req) {
  return req.headers['x-forwarded-for'] || req.socket.remoteAddress || 'unknown';
}

function checkReferer(req) {
  const referer = req.headers.referer || req.headers.referrer;
  const origin = req.headers.origin;
  
  if (!referer && !origin) return false;
  
  const checkDomain = (source) => {
    if (!source) return true;
    try {
      const url = new URL(source);
      const hostname = url.hostname;
      
      const allowed = ['localhost', '127.0.0.1', '::1'];
      const isLocal = allowed.some(domain => hostname === domain);
      const isVercel = hostname === 'vercel.app' || hostname.endsWith('.vercel.app');
      
      return isLocal || isVercel;
    } catch (e) {
      return false;
    }
  };
  
  if (referer && !checkDomain(referer)) return false;
  if (origin && !checkDomain(origin)) return false;
  
  return true;
}

// --- GEMINI SYSTEM INSTRUCTIONS ---
const systemInstructions = {
  general: "Jste zkušený lékařský asistent a mentor pro studenty lékařské fakulty. Pomáháte jim se studiem lékařských oborů. Odpovídejte věcně, stručně, odborně správně, česky a srozumitelně. Používejte přehledný markdown (nadpisy, odrážky, tučné písmo).",
  patfyz: "Jste odborník na patofyziologii. Pomáháte studentům lékařství porozumět funkčním změnám v organismu při nemoci, mechanismům patogeneze, kompenzačním reakcím a klinickým souvislostem. Odpovídejte věcně, stručně a odborně česky. Používejte markdown pro přehlednost.",
  patola: "Jste odborník na patologii (morfologickou patologii). Pomáháte studentům lékařství s makroskopickým a mikroskopickým popisem tkání, nekropsii, biopsii, klasifikací nádorů a patologickou anatomií. Odpovídejte věcně, stručně a odborně česky. Používejte markdown pro přehlednost.",
  farmakologie: "Jste odborník na farmakologii. Pomáháte studentům lékařství s mechanismy účinku léčiv, farmakokinetikou, nežádoucími účinky, indikacemi a interakcemi. Odpovídejte věcně, stručně a odborně česky. Používejte markdown pro přehlednost.",
  dermatologie: "Jste odborník na dermatovenerologii. Pomáháte studentům lékařství s chorobami kůže a pohlavními chorobami, diagnostikou, eflorescencemi a léčbou. Odpovídejte věcně, stručně a odborně česky. Používejte markdown pro přehlednost.",
  oset: "Jste odborník na ošetřovatelství a ošetřovatelskou péči. Pomáháte studentům lékařství a ošetřovatelství s ošetřovatelskými postupy, diagnózami a péčí o pacienta. Odpovídejte věcně, stručně a odborně česky. Používejte markdown pro přehlednost.",
  radiologie: "Jste odborník na radiologii a zobrazovací metody. Pomáháte studentům lékařství s fyzikálními principy RTG, CT, MR, UZ, intervenční radiologie, radiační ochranou, indikacemi vyšetření a popisem patologií v obrazech. Odpovídejte věcně, stručně a odborně česky. Používejte markdown pro přehlednost.",
  mikra: "Jste odborník na mikrobiologii. Pomáháte studentům lékařství s bakteriologií, virologií, mykologií, parazitologií a diagnostickými metodami. Odpovídejte věcně, stručně a odborně česky. Používejte markdown pro přehlednost."
};

// --- CORS MIDDLEWARE FOR MULTI-REPO SUPPORT ---
app.use((req, res, next) => {
  const origin = req.headers.origin;
  const referer = req.headers.referer || req.headers.referrer;
  const source = origin || referer;
  
  let allowedOrigin = null;
  if (source) {
    try {
      const url = new URL(source);
      const hostname = url.hostname;
      
      const allowed = ['localhost', '127.0.0.1', '::1'];
      const isLocal = allowed.some(domain => hostname === domain);
      const isVercel = hostname === 'vercel.app' || hostname.endsWith('.vercel.app');
      
      if (isLocal || isVercel) {
        allowedOrigin = url.origin;
      }
    } catch (e) {}
  }
  
  if (allowedOrigin) {
    res.setHeader('Access-Control-Allow-Origin', allowedOrigin);
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  }

  // Handle preflight OPTIONS request
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
  next();
});

// --- CONFIG ENDPOINT ---
app.get('/api/config', (req, res) => {
  if (!checkReferer(req)) {
    return res.status(403).json({ error: "Access forbidden from this origin." });
  }
  const clientToken = process.env.CLIENT_TOKEN;
  res.json({ clientToken });
});

// --- CHAT ENDPOINT ---
app.post('/api/chat', async (req, res) => {
  if (!checkReferer(req)) {
    return res.status(403).json({ error: "Access forbidden from this origin." });
  }

  const clientToken = process.env.CLIENT_TOKEN;
  const authHeader = req.headers.authorization;
  if (!clientToken || !authHeader || authHeader !== `Bearer ${clientToken}`) {
    return res.status(401).json({ error: "Access unauthorized. Missing or invalid Authorization header." });
  }

  const ip = getClientIp(req);
  const limitStatus = (() => {
    const now = Date.now();
    if (!rateLimitCache.has(ip)) {
      rateLimitCache.set(ip, { timestamps: [now], lastRequest: now });
      return { allowed: true };
    }

    const clientData = rateLimitCache.get(ip);
    if (now - clientData.lastRequest < MIN_INTERVAL_MS) {
      return { allowed: false, reason: "Prosím, počkejte chvíli před dalším dotazem (anti-spam)." };
    }

    clientData.timestamps = clientData.timestamps.filter(ts => now - ts < LIMIT_WINDOW_MS);
    if (clientData.timestamps.length >= MAX_REQUESTS) {
      const oldestTs = clientData.timestamps[0];
      const waitTime = Math.ceil((LIMIT_WINDOW_MS - (now - oldestTs)) / 1000);
      return { allowed: false, reason: `Příliš mnoho požadavků. Prosím, počkejte ${waitTime} sekund.`, waitSeconds: waitTime };
    }

    clientData.timestamps.push(now);
    clientData.lastRequest = now;
    return { allowed: true };
  })();

  if (!limitStatus.allowed) {
    return res.status(429).json({ error: limitStatus.reason });
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey || apiKey === 'YOUR_API_KEY_HERE' || apiKey === 'your_gemini_api_key_here') {
    return res.status(503).json({ 
      error: "Gemini API asistent není nakonfigurován. Vložte platný API klíč do souboru .env v kořeni projektu." 
    });
  }

  const { messages, subject } = req.body;

  if (!messages || !Array.isArray(messages) || messages.length === 0) {
    return res.status(400).json({ error: "Chybí konverzační historie." });
  }

  try {
    const contents = [];
    for (const msg of messages) {
      const role = msg.role === 'model' || msg.role === 'assistant' ? 'model' : 'user';
      if (contents.length > 0 && contents[contents.length - 1].role === role) {
        contents[contents.length - 1].parts.push({ text: msg.text });
      } else {
        contents.push({
          role,
          parts: [{ text: msg.text }]
        });
      }
    }
    
    if (contents.length > 0 && contents[0].role !== 'user') {
      contents.shift();
    }

    if (contents.length === 0) {
      return res.status(400).json({ error: "Historie po pročištění neobsahuje žádné platné dotazy." });
    }

    const systemInstructionText = systemInstructions[subject] || systemInstructions.general;

    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:streamGenerateContent?alt=sse&key=${apiKey}`;
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents,
        systemInstruction: {
          parts: [{ text: systemInstructionText }]
        },
        generationConfig: {
          temperature: 0.7,
          maxOutputTokens: 1500,
        },
        safetySettings: [
          { category: "HARM_CATEGORY_HARASSMENT", threshold: "BLOCK_NONE" },
          { category: "HARM_CATEGORY_HATE_SPEECH", threshold: "BLOCK_NONE" },
          { category: "HARM_CATEGORY_SEXUALLY_EXPLICIT", threshold: "BLOCK_NONE" },
          { category: "HARM_CATEGORY_DANGEROUS_CONTENT", threshold: "BLOCK_NONE" }
        ]
      })
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error('Gemini API Error:', errorData);
      return res.status(response.status).json({ 
        error: `Chyba při komunikaci s Gemini API: ${errorData.error?.message || response.statusText}` 
      });
    }

    res.writeHead(200, {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      'Connection': 'keep-alive',
      'X-Accel-Buffering': 'no'
    });

    const decoder = new TextDecoder("utf-8");
    let buffer = "";
    const body = response.body;

    if (body && typeof body.getReader === 'function') {
      const reader = body.getReader();
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split("\n");
        buffer = lines.pop();

        for (const line of lines) {
          const trimmed = line.trim();
          if (!trimmed.startsWith("data: ")) continue;
          const jsonStr = trimmed.substring(6);
          try {
            const parsed = JSON.parse(jsonStr);
            const text = parsed.candidates?.[0]?.content?.parts?.[0]?.text;
            if (text) {
              res.write(`data: ${JSON.stringify({ text })}\n\n`);
            }
          } catch (e) {}
        }
      }
    } else if (body) {
      for await (const chunk of body) {
        buffer += decoder.decode(chunk, { stream: true });
        const lines = buffer.split("\n");
        buffer = lines.pop();

        for (const line of lines) {
          const trimmed = line.trim();
          if (!trimmed.startsWith("data: ")) continue;
          const jsonStr = trimmed.substring(6);
          try {
            const parsed = JSON.parse(jsonStr);
            const text = parsed.candidates?.[0]?.content?.parts?.[0]?.text;
            if (text) {
              res.write(`data: ${JSON.stringify({ text })}\n\n`);
            }
          } catch (e) {}
        }
      }
    }

    if (buffer.length > 0) {
      const trimmed = buffer.trim();
      if (trimmed.startsWith("data: ")) {
        try {
          const parsed = JSON.parse(trimmed.substring(6));
          const text = parsed.candidates?.[0]?.content?.parts?.[0]?.text;
          if (text) {
            res.write(`data: ${JSON.stringify({ text })}\n\n`);
          }
        } catch (e) {}
      }
    }

    res.end();
  } catch (error) {
    console.error('Proxy Server Error:', error);
    if (!res.headersSent) {
      res.status(500).json({ error: "Interní chyba serveru při zpracování dotazu." });
    } else {
      res.end();
    }
  }
});

// ==========================================
// --- CLINICAL LEARNING PORTAL ENDPOINTS ---
// ==========================================

app.get('/api/health', (req, res) => {
  const hasKey = !!process.env.GEMINI_API_KEY && process.env.GEMINI_API_KEY !== 'YOUR_API_KEY_HERE' && process.env.GEMINI_API_KEY !== 'your_gemini_api_key_here';
  res.json({
    status: 'ok',
    geminiConfigured: hasKey,
    timestamp: new Date().toISOString()
  });
});

app.post('/api/gemini/generate-scenario', async (req, res) => {
  try {
    const { topic, patientType, difficulty, language } = req.body;
    const client = getGeminiClient();
    const isCzech = language === 'cs';

    const prompt = `Generate an interactive Emergency Medicine scenario.
    Topic/Chief Complaint: ${topic || 'Chest Pain / ACS'}
    Patient Type: ${patientType || 'Adult'}
    Clinical Difficulty: ${difficulty || 'Medium'}
    Output Language: ${isCzech ? 'Czech' : 'English'}

    Please output a medically accurate presentation, realistic vital signs, brief relevant medical background, and 4 challenging choice options. One option must be the clear best next step, two should be plausible but lower priority, and one should be a potential hazard or inappropriate delay.
    ${isCzech ? 'CRITICAL CZECH TRANSLATION RULE: Do NOT use automatic-looking or awkward translated words ("parasite words"). If there is no standard, widely accepted natural Czech medical term, use the standard professional English medical term in double quotes (e.g., "RSI", "CICO", "reversal agent", "induction agent", "vessel-rich group", "arm-brain", "EpiPen", "airway", "shock", "delirium"). Keep all other descriptions in elegant, natural, professional Czech medical jargon.' : ''}`;

    const response = await client.models.generateContent({
      model: 'gemini-3.5-flash',
      contents: prompt,
      config: {
        systemInstruction: `You are an expert Emergency Medicine clinical educator. Your job is to create a realistic, high-fidelity clinical decision simulation in JSON format.
        Make sure the medical scenario feels realistic. The vital signs should match the pathology (e.g. hypoxic patients are tachycardic and tachypneic; shock patients are hypotensive).
        The list of "actions" should represent immediate potential actions at the bedside.`,
        responseMimeType: 'application/json',
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            title: { type: Type.STRING },
            presentation: { type: Type.STRING },
            vitals: {
              type: Type.OBJECT,
              properties: {
                hr: { type: Type.STRING },
                bp: { type: Type.STRING },
                spo2: { type: Type.STRING },
                rr: { type: Type.STRING },
                temp: { type: Type.STRING },
                rhythm: { type: Type.STRING }
              },
              required: ['hr', 'bp', 'spo2', 'rr', 'temp']
            },
            background: { type: Type.STRING },
            actions: {
              type: Type.ARRAY,
              items: { type: Type.STRING }
            }
          },
          required: ['title', 'presentation', 'vitals', 'background', 'actions']
        }
      }
    });

    if (!response.text) throw new Error('No content returned from Gemini.');
    res.json(JSON.parse(response.text.trim()));
  } catch (error) {
    console.error('Scenario generation error:', error);
    res.status(500).json({ error: error.message || 'Failed to generate scenario' });
  }
});

app.post('/api/gemini/evaluate-action', async (req, res) => {
  try {
    const { history, actionTaken, difficulty, language } = req.body;
    const client = getGeminiClient();
    const isCzech = language === 'cs';

    const prompt = `Evaluate the action taken by the clinician.
    
    Simulation History:
    ${JSON.stringify(history, null, 2)}
    
    Action Taken: "${actionTaken}"
    Difficulty: ${difficulty || 'Medium'}
    Output Language: ${isCzech ? 'Czech' : 'English'}

    Analyze the clinical correctness of this action. 
    1. Update the patient's state, description, and vitals based on this action.
    2. Provide direct educational "feedback" explaining why this was correct or incorrect, with official guidelines (e.g. AHA, ERC, ASA) if applicable.
    3. Determine if the simulation is terminated (meaning the patient is either fully stabilized/transferred or has died/resuscitated/irreversibly deteriorated).
    4. Set isSuccess to true if the patient is fully stabilized, or false if they died or are still in active crisis.
    5. If NOT terminated, provide 4 new choices for actions. If terminated, leave actions empty.
    ${isCzech ? 'CRITICAL CZECH TRANSLATION RULE: Do NOT use automatic-looking or awkward translated words ("parasite words"). If there is no standard, widely accepted natural Czech medical term, use the standard professional English medical term in double quotes (e.g., "RSI", "CICO", "reversal agent", "induction agent", "vessel-rich group", "arm-brain", "EpiPen", "airway", "shock", "delirium"). Keep all other descriptions in elegant, natural, professional Czech medical jargon.' : ''}`;

    const response = await client.models.generateContent({
      model: 'gemini-3.5-flash',
      contents: prompt,
      config: {
        systemInstruction: `You are an expert Emergency Medicine clinical examiner. Evaluate the action taken by the student.
        Respond with realistic physiological responses. For example, giving IV fluids to hypovolemic patients increases BP. Administering correct reversal agents improves ventilation.
        Provide constructive, instructive, and supportive medical critique. Do not make choices trivial; include subtle diagnostic pitfalls (e.g. check for hyperkalemia before succinylcholine).`,
        responseMimeType: 'application/json',
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            outcome: { type: Type.STRING },
            vitals: {
              type: Type.OBJECT,
              properties: {
                hr: { type: Type.STRING },
                bp: { type: Type.STRING },
                spo2: { type: Type.STRING },
                rr: { type: Type.STRING },
                temp: { type: Type.STRING },
                rhythm: { type: Type.STRING }
              },
              required: ['hr', 'bp', 'spo2', 'rr', 'temp']
            },
            feedback: { type: Type.STRING },
            isTerminated: { type: Type.BOOLEAN },
            isSuccess: { type: Type.BOOLEAN },
            actions: {
              type: Type.ARRAY,
              items: { type: Type.STRING }
            }
          },
          required: ['outcome', 'vitals', 'feedback', 'isTerminated', 'isSuccess', 'actions']
        }
      }
    });

    if (!response.text) throw new Error('No content returned from Gemini.');
    res.json(JSON.parse(response.text.trim()));
  } catch (error) {
    console.error('Action evaluation error:', error);
    res.status(500).json({ error: error.message || 'Failed to evaluate action' });
  }
});

// ===================================
// --- URGENTNÍ PŘÍJEM GAME ENGINE ---
// ===================================

const sessions = {};

function recordVitalsHistory(session) {
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

function formatClinicalContext(session) {
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

app.post("/api/case/init", (req, res) => {
  const { difficulty } = req.body;
  const caseId = difficulty || "1";
  const caseDef = CASES[caseId];

  if (!caseDef) {
    return res.status(400).json({ error: "Neplatná úroveň obtížnosti" });
  }

  const sessionId = "session_" + Math.random().toString(36).substring(2, 9);
  
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
      { time: "14:22", text: "Pacient přijat na urgentní příjem RZP.", source: "system" }
    ],
    chatHistory: {
      "Kardiolog": [],
      "Chirurg": [],
      "Neurolog": [],
      "ARO": [],
      "Vedoucí lékař (Sokratický mentor)": []
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
    selectedTriageClass: ""
  };

  sessions[sessionId] = session;
  res.json(session);
});

app.get("/api/case/session/:sessionId", (req, res) => {
  const { sessionId } = req.params;
  const session = sessions[sessionId];
  if (!session) {
    return res.status(404).json({ error: "Relace nebyla nalezena" });
  }
  res.json(session);
});

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
  const timestamp = new Date(14 * 3600 * 1000 + 22 * 60 * 1000 + session.elapsedTime * 60 * 1000)
    .toTimeString()
    .substring(0, 5);

  session.elapsedTime += Math.floor(Math.random() * 3) + 1;

  if (actionId) {
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
      const { value } = details;
      session.therapies.oxygen = value;
      session.actionLog.push({ time: timestamp, text: `Zahájena oxygenoterapie: ${value}.`, source: "user" });

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
      session.actionLog.push({ time: timestamp, text: `Zaveden periferní žilní katétr (i.v.): ${value}.`, source: "user" });
      return sendSession(session);
    }

    if (actionId === "infusion_setup") {
      const { value } = details;
      session.therapies.infusion = value;
      session.actionLog.push({ time: timestamp, text: `Zahájena infuze: ${value}.`, source: "user" });

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
        return res.status(400).json({ error: "Vyplňte název, dávku a způsob podání léku." });
      }

      session.therapies.meds.push({ name, dose, route });
      session.actionLog.push({ time: timestamp, text: `Podán lék: ${name} ${dose} ${route}.`, source: "user" });

      const nLow = name.toLowerCase();
      if (session.caseId === "1") {
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
        if (nLow.includes("heparin") || nLow.includes("clexane") || nLow.includes("fraxiparin")) {
          session.actionLog.push({ time: timestamp, text: "Antikoagulace zahájena. Zabránění propagaci trombu v plicnici.", source: "system" });
        }
      } else if (session.caseId === "3") {
        if (nLow.includes("exacyl") || nLow.includes("tranexam")) {
          session.actionLog.push({ time: timestamp, text: "Kyselina tranexamová podána. Antifibrinolytická stabilizace krevní sraženiny aktivní.", source: "system" });
        }
      } else if (session.caseId === "9") {
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
        if (nLow.includes("ceftriaxon") || nLow.includes("cefota") || nLow.includes("lentocilin")) {
          session.actionLog.push({ time: timestamp, text: "Podána širokospektrá antibiotika i.v. Cílené krytí Haemophilus influenzae b zahájeno.", source: "system" });
        }
        if (nLow.includes("dexamethas") || nLow.includes("dexamed") || nLow.includes("solu-medrol")) {
          session.actionLog.push({ time: timestamp, text: "Podány kortikoidy i.v. s cílem snížit masivní zánětlivý otok epiglotis.", source: "system" });
        }
      } else if (session.caseId === "12") {
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
          text: `Odeslána žádanka do laboratoře STATIM: ${addedLabs.map(l => l.toUpperCase()).join(", ")}.`,
          source: "user"
        });

        const delayMinutes = 10;
        setTimeout(() => {
          addedLabs.forEach(l => {
            if (sessions[sessionId] && !sessions[sessionId].labsReady.includes(l)) {
              sessions[sessionId].labsReady.push(l);
              sessions[sessionId].labsResultsReceived[l] = caseDef.labsResult[l] || "Nález bez patologie.";
              sessions[sessionId].actionLog.push({
                time: new Date(14 * 3600 * 1000 + 22 * 60 * 1000 + (sessions[sessionId].elapsedTime + delayMinutes) * 60 * 1000).toTimeString().substring(0, 5),
                text: `Výsledky STATIM laboratoře k dispozici: ${l.toUpperCase()}.`,
                source: "result"
              });
            }
          });
        }, 4000);
      }
      return sendSession(session);
    }

    if (actionId === "order_imaging") {
      const { method } = details;
      if (!session.imagingOrdered.includes(method)) {
        session.imagingOrdered.push(method);
        session.actionLog.push({
          time: timestamp,
          text: `Nařízeno urgentní vyšetření: ${method.toUpperCase()}.`,
          source: "user"
        });

        const delayMinutes = method === "ekg" || method === "echo" ? 3 : 8;
        setTimeout(() => {
          if (sessions[sessionId] && !sessions[sessionId].imagingReady.includes(method)) {
            sessions[sessionId].imagingReady.push(method);
            sessions[sessionId].imagingResultsReceived[method] = caseDef.imagingResult[method] || "Nález bez patologie.";
            sessions[sessionId].actionLog.push({
              time: new Date(14 * 3600 * 1000 + 22 * 60 * 1000 + (sessions[sessionId].elapsedTime + delayMinutes) * 60 * 1000).toTimeString().substring(0, 5),
              text: `Výsledek vyšetření ${method.toUpperCase()} je připraven k zobrazení.`,
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
        text: "🚨 AKTIVOVÁN TRAUMA TÝM URGENTNÍHO PŘÍJMU! (Chirurg, traumatolog, ARO a radiolog se schází na sále).",
        source: "user"
      });
      return sendSession(session);
    }
  }

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
    "tk_sys": number,
    "tk_dia": number,
    "tf": number,
    "spo2": number,
    "rr": number
  },
  "isLabsOrdered": boolean,
  "requestedLabs": string[]
}
`;

      const response = await gemini.models.generateContent({
        model: "gemini-3.5-flash",
        contents: prompt,
        config: { responseMimeType: "application/json" }
      });

      const data = JSON.parse((response.text || "").trim());

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
                    time: new Date(14 * 3600 * 1000 + 22 * 60 * 1000 + (sessions[sessionId].elapsedTime + 10) * 60 * 1000).toTimeString().substring(0, 5),
                    text: `Výsledky STATIM laboratoře k dispozici: ${labKey.toUpperCase()}.`,
                    source: "result"
                  });
                }
              }, 4000);
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

      if (logEntry) session.actionLog.push({ time: timestamp, text: logEntry, source: "system" });
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
  const timestamp = new Date(14 * 3600 * 1000 + 22 * 60 * 1000 + session.elapsedTime * 60 * 1000)
    .toTimeString()
    .substring(0, 5);

  if (!session.chatHistory[specialty]) {
    session.chatHistory[specialty] = [];
  }
  session.chatHistory[specialty].push({
    sender: "MUDr. " + (session.level === 3 ? "Kučera (Urgent)" : "Novák (Urgent)"),
    text: message,
    time: timestamp
  });

  session.elapsedTime += 2;

  let reply = "Rozumím. Máte k dispozici 12svodové EKG, výsledky laboratorních odběrů a stabilizovali jste vitální funkce?";

  try {
    const gemini = getGeminiClient();
    const clinicalContext = formatClinicalContext(session);

    const prompt = `
Jsi lékařský konzultant specializace [${specialty}] pracující v české nemocnici.
Vaším úkolem je odpovědět sloužícímu lékaři na urgentním příjmu, který s vámi konzultuje pacienta.

SPECIALISTA: ${specialty} (např. Kardiolog, Neurolog, Chirurg, ARO, Vedoucí lékař (Sokratický mentor))
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
- Vedoucí lékař (Sokratický mentor): Ty jsi vedoucí lékař (primář) oddělení urgentního příjmu a mentor studenta. Tvojí rolí je pomáhat studentovi najít správnou diagnózu a terapeutické kroky pomocí sokratovské metody tázání. Neříkej mu diagnózu ani správné kroky napřímo! Místo toho klaď návodné otázky, upozorňuj na nesrovnalosti v jeho dosavadním postupu, odkazuj ho na vitální funkce, anamnézu nebo provedená vyšetření a veď ho k logickému uvažování (např. "Podíval ses na krevní tlak? Myslíš, že u takto hypotenzního pacienta je bezpečné podávat tento lék?" nebo "Co nám říká to rozšíření QRS na EKG?"). Reaguj česky, konstruktivně, podporujícím, ale profesionálním tónem.

Napište realistickou, klinicky správnou odpověď v češtině, která odráží českou nemocniční realitu (mírně formální, přímá, někdy mírně kousavá nebo skeptická, pokud lékař na urgentu zapomněl zásadní kroky).

Zpráva od lékaře na urgentním příjmu:
"${message}"

Napiš pouze samotný text odpovědi v češtině. Nepoužívej uvozovky ani markdown formátování.
`;

    const response = await gemini.models.generateContent({
      model: "gemini-3.5-flash",
      contents: prompt
    });

    if (response.text) reply = response.text.trim();
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
          reply = "Bez natočeného 12svodového EKG and podání Anopyrinu (400mg p.o.) s Heparinem (5000 IU i.v.) pacienta na sál nepřijmu. Doplňte terapii a zavolejte znovu!";
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
          reply = "U podezření na hyperakutní cévní mozkovou příhode s těžkým deficitem (NIHSS 16) musíme okamžitě provést nativní CT mozku k vyloučení krvácení! Bez toho nelze podat trombolýzu a riskovali bychom fatální intracerebrální hemoragii. Pošlete ji ihned na CT a jakmile uvidíte snímky, volejte mě zpět!";
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
    } else if (specialty === "Vedoucí lékař (Sokratický mentor)") {
      reply = "Jako váš primář chci, abyste sami našli správné řešení. Podívejte se pozorně na monitor vitálních funkcí a provedená vyšetření. Co vám říkají ty hodnoty a nálezy o stavu pacienta? Jaké jsou vaše priority v stabilizaci a jaké specifické léky nebo zákroky jsou indikovány podle doporučených postupů?";
    }
  }

  session.chatHistory[specialty].push({
    sender: "MUDr. Černý (" + specialty + ")",
    text: reply,
    time: timestamp
  });

  session.actionLog.push({
    time: timestamp,
    text: `Konzultováno s odborností ${specialty}.`,
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
    const timelineStr = session.actionLog.map(l => `[${l.time}] ${l.text}`).join("\n");
    const medsStr = session.therapies.meds.map(m => `${m.name} ${m.dose} ${m.route}`).join(", ");

    const prompt = `
Jsi přísná a vysoce odborná atestační komise složená z předních českých lékařů urgentní medicíny.
Vaším úkolem je vyhodnotit simulovaný zásah lékaře na urgentním příjmu ("Urgentní příjem") a vypracovat detailní "Zpětnou vazbu" (Debriefing) v češtině.

SKUTEČNÝ STAV PACIENTA:
- Diagnóza: ${caseDef.secretDiagnosis} (Kód MKN-10: ${caseDef.secretDiagnosisCode})
- Úroveň obtížnosti: ${session.level}

ROZHODNUTÍ UŽIVATELE (LÉKAŘE):
- Zvolená dispozice/překlad: ${disposition}
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
3. EFEKTIVITA A ČAS: Vyhodnoťte strávený čas (${session.elapsedTime} min). Byl postup rychlý, nebo lékař plýtval časem na zbytečná vyšetření (např. posílat nestabilního pacienta s traumatem v šoku na celotělové CT před stabilizací oběhu)?
4. KOMUNIKACE: Byly konzultace se specialisty adekvátní a včasné?

Uveďte také CELKOVÉ HODNOCENÍ vyjádřené v procentech (0% až 100%) na základě lékařské preciznosti a bezpečnosti pacienta.

Odpovězte výhradně v češtině, formátujte srozumitelně v Markdownu s elegantní strukturou.
`;

    const response = await gemini.models.generateContent({
      model: "gemini-3.5-flash",
      contents: prompt
    });

    session.debriefing = response.text || "Hodnocení se nepodařilo vygenerovat.";
  } catch (err) {
    console.error("Evaluation generation error:", err);
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
        review += "❌ **Závažné nedostatky v terapii STEMI!** Zapomněl jste podat buď kyselinu acetylsalicylovou (Anopyrin) p.o. rozkousat, nebo nefrakcionovaný Heparin i.v.\n";
      }
    } else if (session.caseId === "2") {
      const hasOxygen = !session.therapies.oxygen.includes("Žádné");
      const hasHeparin = session.therapies.meds.some(m => m.name.toLowerCase().includes("heparin") || m.name.toLowerCase().includes("clexane") || m.name.toLowerCase().includes("fraxiparin"));
      
      if (hasOxygen && hasHeparin) {
        score += 20;
        review += "✅ **Správný postup u plicní embolie.** Podal jste včas kyslík a zahájil antikoagulační léčbu.\n";
      } else {
        review += "❌ **Nedostatečná léčba plicní embolie.** Selhal jste v rychlém zahájení antikoagulace nebo kyslíku.\n";
      }
    } else if (session.caseId === "3") {
      const hasIntubation = session.therapies.oxygen.toLowerCase().includes("intub") || session.therapies.oxygen.toLowerCase().includes("etk");
      const hasExacyl = session.therapies.meds.some(m => m.name.toLowerCase().includes("exacyl") || m.name.toLowerCase().includes("tranexam"));
      const hasTransfusion = session.therapies.infusion.toLowerCase().includes("transf") || session.therapies.infusion.toLowerCase().includes("erytr");

      if (hasIntubation && hasExacyl && hasTransfusion) {
        score += 20;
        review += "✅ **Excelentní zvládnutí masivního polytraumatu.** Včas jste zaintuboval pacienta se zhoršeným vědomím (GCS 9), podal kyselinu tranexamovou a transfúze.\n";
      } else {
        review += "❌ **Závažná pochybení u polytraumatu v hemoragickém šoku!** Opomněl jste buď intubaci, podání Exacylu, nebo transfúzní protokol.\n";
      }
    }

    review += `\n\n## **CELKOVÉ HODNOCENÍ: ${Math.min(100, score)}%**`;
    session.debriefing = review;
  }

  res.json(session);
});

// ==========================================
// --- VITE MIDDLEWARE & STATIC SERVING ---
// ==========================================

// Explicit redirection rules to ensure trailing slashes are appended
app.get('/clinical-portal', (req, res) => {
  res.redirect(301, '/clinical-portal/');
});

app.get('/clinical-learning-portal', (req, res) => {
  res.redirect(301, '/clinical-portal/');
});

app.get('/upv', (req, res) => {
  res.redirect(301, '/upv/');
});

app.get('/urgentni-prijem-game', (req, res) => {
  res.redirect(301, '/urgentni-prijem/');
});

app.get('/urgentni-prijem', (req, res) => {
  res.redirect(301, '/urgentni-prijem/');
});

if (process.env.NODE_ENV !== 'production') {
  try {
    const { createServer: createViteServer } = require('vite');
    
    const initViteDev = async () => {
      try {
        const clinicalVite = await createViteServer({
          root: path.join(__dirname, 'clinical-learning-portal'),
          server: { middlewareMode: true },
          appType: 'spa'
        });
        app.use('/clinical-portal', clinicalVite.middlewares);
        app.use('/clinical-learning-portal', clinicalVite.middlewares);
        console.log('Mounted Vite dev middleware for clinical-learning-portal at /clinical-portal/');
      } catch (err) {
        console.warn('Vite dev server for clinical-learning-portal could not be initialized. Falling back to static serving.', err.message);
        app.use('/clinical-portal', express.static(path.join(__dirname, 'clinical-learning-portal/dist')));
        app.use('/clinical-learning-portal', express.static(path.join(__dirname, 'clinical-learning-portal/dist')));
      }

      try {
        const urgentVite = await createViteServer({
          root: path.join(__dirname, 'urgentni-prijem'),
          server: { middlewareMode: true },
          appType: 'spa'
        });
        app.use('/urgentni-prijem', urgentVite.middlewares);
        app.use('/urgentni-prijem-game', urgentVite.middlewares);
        console.log('Mounted Vite dev middleware for urgentni-prijem at /urgentni-prijem/');
      } catch (err) {
        console.warn('Vite dev server for urgentni-prijem could not be initialized. Falling back to static serving.', err.message);
        app.use('/urgentni-prijem', express.static(path.join(__dirname, 'urgentni-prijem/dist')));
        app.use('/urgentni-prijem-game', express.static(path.join(__dirname, 'urgentni-prijem/dist')));
      }

      app.use('/upv', express.static(path.join(__dirname, 'upv')));
    };
    initViteDev();
  } catch (e) {
    console.warn('Vite dev server module could not be loaded. Falling back to static serving for all.', e.message);
    app.use('/clinical-portal', express.static(path.join(__dirname, 'clinical-learning-portal/dist')));
    app.use('/clinical-learning-portal', express.static(path.join(__dirname, 'clinical-learning-portal/dist')));
    app.use('/urgentni-prijem', express.static(path.join(__dirname, 'urgentni-prijem/dist')));
    app.use('/urgentni-prijem-game', express.static(path.join(__dirname, 'urgentni-prijem/dist')));
    app.use('/upv', express.static(path.join(__dirname, 'upv')));
  }
} else {
  // Serve static files from compiled dist folders in production
  app.use('/clinical-portal', express.static(path.join(__dirname, 'clinical-learning-portal/dist')));
  app.use('/clinical-learning-portal', express.static(path.join(__dirname, 'clinical-learning-portal/dist')));
  app.use('/urgentni-prijem', express.static(path.join(__dirname, 'urgentni-prijem/dist')));
  app.use('/urgentni-prijem-game', express.static(path.join(__dirname, 'urgentni-prijem/dist')));
  app.use('/upv', express.static(path.join(__dirname, 'upv')));
}

// Export app for serverless or start server locally
if (process.env.VERCEL || require.main !== module) {
  module.exports = app;
} else {
  app.listen(PORT, () => {
    console.log(`===================================================`);
    console.log(`  Lékařský Studijní Portál spuštěn na portu ${PORT}`);
    console.log(`  Otevřete: http://localhost:${PORT}`);
    console.log(`===================================================`);
  });
}
