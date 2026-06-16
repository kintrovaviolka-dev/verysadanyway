const express = require('express');
const fs = require('fs');
const path = require('path');

// --- LOAD ENVIRONMENT VARIABLES MANUALLY ---
// This ensures compatibility with older Node versions without dotenv dependency
const envPath = path.join(__dirname, '.env');
if (fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, 'utf8');
  envContent.split('\n').forEach(line => {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) return;
    const firstEquals = trimmed.indexOf('=');
    if (firstEquals === -1) return;
    const key = trimmed.substring(0, firstEquals).trim();
    const value = trimmed.substring(firstEquals + 1).trim().replace(/^['"]|['"]$/g, '');
    if (!process.env[key]) {
      process.env[key] = value;
    }
  });
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
  const source = referer || origin;
  
  if (!source) return true; // Fallback if headers are absent (e.g. CLI tools)

  try {
    const url = new URL(source);
    const hostname = url.hostname;
    
    // Allow localhost, local IP addresses, and vercel.app domains
    const allowed = ['localhost', '127.0.0.1', '::1'];
    const isLocal = allowed.some(domain => hostname === domain);
    const isVercel = hostname === 'vercel.app' || hostname.endsWith('.vercel.app');
    
    return isLocal || isVercel;
  } catch (e) {
    return false;
  }
}

// --- GEMINI SYSTEM INSTRUCTIONS ---
const systemInstructions = {
  general: "Jste zkušený lékařský asistent a mentor pro studenty lékařské fakulty. Pomáháte jim se studiem lékařských oborů. Odpovídejte věcně, stručně, odborně správně, česky a srozumitelně. Používejte přehledný markdown (nadpisy, odrážky, tučné písmo).",
  patfyz: "Jste odborník na patofyziologii. Pomáháte studentům lékařství porozumět funkčním změnám v organismu při nemoci, mechanismům patogeneze, kompenzačním reakcím a klinickým souvislostem. Odpovídejte věcně, stručně a odborně česky. Používejte markdown pro přehlednost.",
  patola: "Jste odborník na patologii (morfologickou patologii). Pomáháte studentům lékařství s makroskopickým a mikroskopickým popisem tkání, nekropsii, biopsii, klasifikací nádorů a patologickou anatomií. Odpovídejte věcně, stručně a odborně česky. Používejte markdown pro přehlednost.",
  farmakologie: "Jste odborník na farmakologii. Pomáháte studentům lékařství s mechanismy účinku léčiv, farmakokinetikou, nežádoucími účinky, indikacemi a interakcemi. Odpovídejte věcně, stručně a odborně česky. Používejte markdown pro přehlednost.",
  dermatologie: "Jste odborník na dermatovenerologii. Pomáháte studentům lékařství s chorobami kůže a pohlavními chorobami, diagnostikou, eflorescencemi a léčbou. Odpovídejte věcně, stručně a odborně česky. Používejte markdown pro přehlednost.",
  oset: "Jste odborník na ošetřovatelství a ošetřovatelskou péči. Pomáháte studentům lékařství a ošetřovatelství s ošetřovatelskými postupy, diagnózami a péčí o pacienta. Odpovídejte věcně, stručně a odborně česky. Používejte markdown pro přehlednost."
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
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  }

  // Handle preflight OPTIONS request
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
  next();
});

// --- CHAT ENDPOINT ---
app.post('/api/chat', async (req, res) => {
  // 1. Check Referer/Origin to protect against external hotlinking
  if (!checkReferer(req)) {
    return res.status(403).json({ error: "Access forbidden from this origin." });
  }

  // 2. Apply rate limiting
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

  // 3. Check Gemini API key configuration
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
    // Format messages for the Gemini API
    const contents = messages.map(msg => ({
      role: msg.role === 'model' || msg.role === 'assistant' ? 'model' : 'user',
      parts: [{ text: msg.text }]
    }));

    const systemInstructionText = systemInstructions[subject] || systemInstructions.general;

    // Call Google Gemini API
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`;
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
          maxOutputTokens: 800,
        }
      })
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error('Gemini API Error:', errorData);
      return res.status(response.status).json({ 
        error: `Chyba při komunikaci s Gemini API: ${errorData.error?.message || response.statusText}` 
      });
    }

    const data = await response.json();
    const responseText = data.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!responseText) {
      return res.status(502).json({ error: "Gemini API nevrátila žádnou odpověď." });
    }

    res.json({ text: responseText });
  } catch (error) {
    console.error('Proxy Server Error:', error);
    res.status(500).json({ error: "Interní chyba serveru při zpracování dotazu." });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`===================================================`);
  console.log(`  Lékařský Studijní Portál spuštěn na portu ${PORT}`);
  console.log(`  Otevřete: http://localhost:${PORT}`);
  console.log(`===================================================`);
});
