// api/chat.js - Vercel Serverless Function Proxy for Gemini API

// Wrapper for future stateless rate limiter injection (e.g. Upstash/Redis)
async function checkExternalRateLimit(ip) {
  // TODO: Implement Upstash Redis rate limiting check here.
  // Example:
  // const { success } = await redis.limit(ip);
  // if (!success) throw new Error("Rate limit exceeded");
  return { allowed: true };
}

function getClientIp(req) {
  return req.headers['x-forwarded-for'] || req.socket?.remoteAddress || 'unknown';
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
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
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

  // 2. Validate Authorization header
  const clientToken = process.env.CLIENT_TOKEN || 'super_secret_medical_study_token_2026';
  const authHeader = req.headers.authorization;
  if (!authHeader || authHeader !== `Bearer ${clientToken}`) {
    return res.status(401).json({ error: "Access unauthorized. Missing or invalid Authorization header." });
  }

  // 3. Call stateless rate-limiter placeholder
  const ip = getClientIp(req);
  try {
    const rateLimit = await checkExternalRateLimit(ip);
    if (!rateLimit.allowed) {
      return res.status(429).json({ error: "Příliš mnoho požadavků." });
    }
  } catch (error) {
    return res.status(429).json({ error: error.message });
  }

  // 4. Check API key configuration
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
    console.error('Vercel Serverless Function Error:', error);
    // If headers haven't been sent, return JSON. Otherwise just end the response.
    if (!res.headersSent) {
      res.status(500).json({ error: "Interní chyba serveru při zpracování dotazu." });
    } else {
      res.end();
    }
  }
};
