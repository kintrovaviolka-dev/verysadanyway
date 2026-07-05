const express = require('express');
const fs = require('fs');
const path = require('path');

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

// Serve static files from root directory
app.use(express.static(__dirname));

// --- RATE LIMITING MIDDLEWARE ---
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
  radiologie: "Jste odborník na radiologii a zobrazovací metody. Pomáháte studentům lékařství s fyzikálními principy RTG, CT, MR, UZ, intervenční radiologie, radiační ochranou, indikacemi vyšetření a popisem patologií v obrazech. Odpovídejte věcně, stručně a odborně česky. Používejte markdown pro přehlednost."
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

// --- CHAT ENDPOINT ---
// --- CONFIG ENDPOINT ---
app.get('/api/config', (req, res) => {
  // 1. Check Referer/Origin to protect against external hotlinking
  if (!checkReferer(req)) {
    return res.status(403).json({ error: "Access forbidden from this origin." });
  }
  const clientToken = process.env.CLIENT_TOKEN || 'super_secret_medical_study_token_2026';
  res.json({ clientToken });
});

// --- FEEDBACK ENDPOINT ---
app.post('/api/feedback', async (req, res) => {
  // 1. Check Referer/Origin to protect against external hotlinking
  if (!checkReferer(req)) {
    return res.status(403).json({ error: "Access forbidden from this origin." });
  }

  // 2. Validate Authorization header
  const clientToken = process.env.CLIENT_TOKEN || 'super_secret_medical_study_token_2026';
  const authHeader = req.headers.authorization;
  if (!authHeader || authHeader !== `Bearer ${clientToken}`) {
    return res.status(401).json({ error: "Access unauthorized. Missing or invalid Authorization header." });
  }

  const { type, subject, name, message } = req.body;

  // Simple input validation
  if (!message || message.trim() === "") {
    return res.status(400).json({ error: "Zpráva nesmí být prázdná." });
  }

  const payload = {
    type: type || "general",
    subject: subject || "general",
    name: name || "Anonymní",
    message: message
  };

  const sheetUrl = process.env.FEEDBACK_SHEET_URL;

  if (!sheetUrl) {
    // If sheet URL is not configured (e.g. local development), log to console and return success
    console.log("===================================================");
    console.log("  [LOCAL FEEDBACK RECEIVED] (FEEDBACK_SHEET_URL not set)");
    console.log(`  Type:    ${payload.type}`);
    console.log(`  Subject: ${payload.subject}`);
    console.log(`  Name:    ${payload.name}`);
    console.log(`  Message: ${payload.message}`);
    console.log("===================================================");
    
    return res.status(200).json({ status: "success", info: "Logged to console locally." });
  }

  try {
    const fetchResponse = await fetch(sheetUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    if (!fetchResponse.ok) {
      throw new Error(`Google Apps Script returned status ${fetchResponse.status}`);
    }

    const result = await fetchResponse.json();
    return res.status(200).json(result);
  } catch (error) {
    console.error("Error sending feedback to Google Sheets:", error);
    return res.status(500).json({ error: "Chyba při odesílání zpětné vazby na Google Sheets." });
  }
});

// --- CHAT ENDPOINT ---
app.post('/api/chat', async (req, res) => {
  // 1. Check Referer/Origin to protect against external hotlinking
  if (!checkReferer(req)) {
    return res.status(403).json({ error: "Access forbidden from this origin." });
  }

  // 2. Validate Authorization header
  const clientToken = process.env.CLIENT_TOKEN || 'super_secret_medical_study_token_2026';
  const authHeader = req.headers.authorization;
  if (!authHeader || authHeader !== `Bearer ${clientToken}`) {
    return res.status(401).json({ error: "Access unauthorized. Missing or invalid Authorization header." });
  }

  // 3. Apply rate limiting
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

  // 4. Check Gemini API key configuration
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
    // Format messages for the Gemini API, stitching consecutive same-role messages
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
    
    // The conversation must start with a user message
    if (contents.length > 0 && contents[0].role !== 'user') {
      contents.shift();
    }

    if (contents.length === 0) {
      return res.status(400).json({ error: "Historie po pročištění neobsahuje žádné platné dotazy." });
    }

    const systemInstructionText = systemInstructions[subject] || systemInstructions.general;

    // Call Google Gemini API with streaming
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:streamGenerateContent?alt=sse&key=${apiKey}`;
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
          {
            category: "HARM_CATEGORY_HARASSMENT",
            threshold: "BLOCK_NONE"
          },
          {
            category: "HARM_CATEGORY_HATE_SPEECH",
            threshold: "BLOCK_NONE"
          },
          {
            category: "HARM_CATEGORY_SEXUALLY_EXPLICIT",
            threshold: "BLOCK_NONE"
          },
          {
            category: "HARM_CATEGORY_DANGEROUS_CONTENT",
            threshold: "BLOCK_NONE"
          }
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

    // Set streaming headers
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
        buffer = lines.pop(); // keep partial line in buffer

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
          } catch (e) {
            // Ignore parse errors for incomplete JSON
          }
        }
      }
    } else if (body) {
      for await (const chunk of body) {
        buffer += decoder.decode(chunk, { stream: true });
        const lines = buffer.split("\n");
        buffer = lines.pop(); // keep partial line in buffer

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
          } catch (e) {
            // Ignore parse errors for incomplete JSON
          }
        }
      }
    }

    // Parse remaining buffer
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
    // If headers haven't been sent, return JSON. Otherwise just end the response.
    if (!res.headersSent) {
      res.status(500).json({ error: "Interní chyba serveru při zpracování dotazu." });
    } else {
      res.end();
    }
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`===================================================`);
  console.log(`  Lékařský Studijní Portál spuštěn na portu ${PORT}`);
  console.log(`  Otevřete: http://localhost:${PORT}`);
  console.log(`===================================================`);
});
