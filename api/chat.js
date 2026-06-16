// api/chat.js - Vercel Serverless Function Proxy for Gemini API

const rateLimitCache = new Map();
const LIMIT_WINDOW_MS = 60 * 1000; // 1 minute
const MAX_REQUESTS = 10;
const MIN_INTERVAL_MS = 2000; // 2 seconds between requests

// Periodically clean up rate limit cache
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
  return req.headers['x-forwarded-for'] || req.socket?.remoteAddress || 'unknown';
}

function checkReferer(req) {
  const referer = req.headers.referer || req.headers.referrer;
  const origin = req.headers.origin;
  const source = referer || origin;
  
  if (!source) return true; // Keep true for testing/dev

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
}

const systemInstructions = {
  general: "Jste zkušený lékařský asistent a mentor pro studenty lékařské fakulty. Pomáháte jim se studiem lékařských oborů. Odpovídejte věcně, stručně, odborně správně, česky a srozumitelně. Používejte přehledný markdown (nadpisy, odrážky, tučné písmo).",
  patfyz: "Jste odborník na patofyziologii. Pomáháte studentům lékařství porozumět funkčním změnám v organismu při nemoci, mechanismům patogeneze, kompenzačním reakcím a klinickým souvislostem. Odpovídejte věcně, stručně a odborně česky. Používejte markdown pro přehlednost.",
  patola: "Jste odborník na patologii (morfologickou patologii). Pomáháte studentům lékařství s makroskopickým a mikroskopickým popisem tkání, nekropsii, biopsii, klasifikací nádorů a patologickou anatomií. Odpovídejte věcně, stručně a odborně česky. Používejte markdown pro přehlednost.",
  farmakologie: "Jste odborník na farmakologii. Pomáháte studentům lékařství s mechanismy účinku léčiv, farmakokinetikou, nežádoucími účinky, indikacemi a interakcemi. Odpovídejte věcně, stručně a odborně česky. Používejte markdown pro přehlednost.",
  dermatologie: "Jste odborník na dermatovenerologii. Pomáháte studentům lékařství s chorobami kůže a pohlavními chorobami, diagnostikou, eflorescencemi a léčbou. Odpovídejte věcně, stručně a odborně česky. Používejte markdown pro přehlednost.",
  oset: "Jste odborník na ošetřovatelství a ošetřovatelskou péči. Pomáháte studentům lékařství a ošetřovatelství s ošetřovatelskými postupy, diagnózami a péčí o pacienta. Odpovídejte věcně, stručně a odborně česky. Používejte markdown pro přehlednost."
};

module.exports = async (req, res) => {
  // CORS Headers Configuration
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

  // Only allow POST for chat requests
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }

  // 1. Check referer/origin
  if (!checkReferer(req)) {
    return res.status(403).json({ error: "Access forbidden from this origin." });
  }

  // 2. Apply rate limiting
  const ip = getClientIp(req);
  const now = Date.now();
  
  if (!rateLimitCache.has(ip)) {
    rateLimitCache.set(ip, { timestamps: [now], lastRequest: now });
  } else {
    const clientData = rateLimitCache.get(ip);
    
    // Check spamming
    if (now - clientData.lastRequest < MIN_INTERVAL_MS) {
      return res.status(429).json({ error: "Prosím, počkejte chvíli před dalším dotazem (anti-spam)." });
    }

    clientData.timestamps = clientData.timestamps.filter(ts => now - ts < LIMIT_WINDOW_MS);
    if (clientData.timestamps.length >= MAX_REQUESTS) {
      const oldestTs = clientData.timestamps[0];
      const waitTime = Math.ceil((LIMIT_WINDOW_MS - (now - oldestTs)) / 1000);
      return res.status(429).json({ error: `Příliš mnoho požadavků. Prosím, počkejte ${waitTime} sekund.` });
    }

    clientData.timestamps.push(now);
    clientData.lastRequest = now;
  }

  // 3. Check API key configuration (on Vercel it should be added in Project Settings -> Environment Variables)
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey || apiKey === 'YOUR_API_KEY_HERE' || apiKey === 'your_gemini_api_key_here') {
    return res.status(503).json({ 
      error: "Gemini API asistent není na Vercelu nakonfigurován. Vložte platný API klíč do Environment Variables pod názvem GEMINI_API_KEY." 
    });
  }

  const { messages, subject } = req.body;

  if (!messages || !Array.isArray(messages) || messages.length === 0) {
    return res.status(400).json({ error: "Chybí konverzační historie." });
  }

  try {
    // Format messages for the Gemini API, ensuring strict alternation and user role start
    const contents = [];
    let lastRole = null;
    for (const msg of messages) {
      const role = msg.role === 'model' || msg.role === 'assistant' ? 'model' : 'user';
      if (role === lastRole) continue; // Skip consecutive identical roles to prevent Gemini API errors
      contents.push({
        role,
        parts: [{ text: msg.text }]
      });
      lastRole = role;
    }
    
    // The conversation must start with a user message
    if (contents.length > 0 && contents[0].role !== 'user') {
      contents.shift();
    }

    if (contents.length === 0) {
      return res.status(400).json({ error: "Historie po pročištění neobsahuje žádné platné dotazy." });
    }

    const systemInstructionText = systemInstructions[subject] || systemInstructions.general;

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
    console.error('Vercel Serverless Function Error:', error);
    res.status(500).json({ error: "Interní chyba serveru při zpracování dotazu." });
  }
};
