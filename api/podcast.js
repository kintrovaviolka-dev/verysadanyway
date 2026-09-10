const express = require('express');
const router = express.Router();
const multer = require('multer');
const pdfParse = require('pdf-parse');
const mammoth = require('mammoth');
const path = require('path');
const fs = require('fs');
const { exec } = require('child_process');
const crypto = require('crypto');
const { GoogleGenAI, Type } = require('@google/genai');

// --- MULTER CONFIGURATION ---
// Store files in memory so we do not clutter the disk
const storage = multer.memoryStorage();
const upload = multer({
  storage: storage,
  limits: { fileSize: 5 * 1024 * 1024 } // Limit to 5 MB
});

// --- IN-MEMORY RATE LIMITING FOR PODCAST ENDPOINTS ---
const podcastLimitCache = new Map();
const LIMIT_WINDOW_MS = 60 * 60 * 1000; // 1 hour window
const MAX_SCRIPT_REQUESTS = 10;          // Max 10 script generations per hour
const MAX_AUDIO_REQUESTS = 10;           // Max 10 audio generations per hour

function checkRateLimit(ip, type) {
  const now = Date.now();
  if (!podcastLimitCache.has(ip)) {
    podcastLimitCache.set(ip, { script: [], audio: [] });
  }

  const clientData = podcastLimitCache.get(ip);
  const timestamps = clientData[type];

  // Filter timestamps within the window
  const activeTimestamps = timestamps.filter(ts => now - ts < LIMIT_WINDOW_MS);
  const maxLimit = type === 'script' ? MAX_SCRIPT_REQUESTS : MAX_AUDIO_REQUESTS;

  if (activeTimestamps.length >= maxLimit) {
    return { allowed: false, waitMinutes: Math.ceil((LIMIT_WINDOW_MS - (now - activeTimestamps[0])) / 60000) };
  }

  activeTimestamps.push(now);
  clientData[type] = activeTimestamps;
  return { allowed: true };
}

function getClientIp(req) {
  return req.headers['x-forwarded-for'] || req.socket.remoteAddress || 'unknown';
}

// --- REFERER & TOKEN VALIDATION MIDDLEWARE ---
function validateAccess(req, res, next) {
  // Referer Validation
  const referer = req.headers.referer || req.headers.referrer;
  const origin = req.headers.origin;
  
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

  if ((referer && !checkDomain(referer)) || (origin && !checkDomain(origin))) {
    return res.status(403).json({ error: "Access forbidden from this origin." });
  }

  // Token Validation
  const clientToken = process.env.CLIENT_TOKEN || 'super_secret_medical_study_token_2026';
  const authHeader = req.headers.authorization;
  if (!authHeader || authHeader !== `Bearer ${clientToken}`) {
    return res.status(401).json({ error: "Přístup odmítnut. Chybí nebo je neplatný Authorization token." });
  }

  next();
}

// --- CAPTCHA VALIDATION HELPER ---
function validateCaptcha(req, res, next) {
  const { captcha } = req.body;
  
  // If it's a multipart form (file upload), captcha fields might be directly in req.body
  const num1 = parseInt(req.body.captchaNum1 || (captcha && captcha.num1));
  const num2 = parseInt(req.body.captchaNum2 || (captcha && captcha.num2));
  const solution = parseInt(req.body.captchaSolution || (captcha && captcha.solution));

  if (isNaN(num1) || isNaN(num2) || isNaN(solution)) {
    return res.status(400).json({ error: "Chybí ověření proti botům (Captcha)." });
  }

  if (num1 + num2 !== solution) {
    return res.status(400).json({ error: "Neplatný výsledek Captcha testu. Zkuste to prosím znovu." });
  }

  next();
}

// --- EXTRACT TEXT FROM UPLOADED FILE ---
async function extractText(file) {
  const ext = path.extname(file.originalname).toLowerCase();
  
  if (ext === '.pdf') {
    const data = await pdfParse(file.buffer);
    if (data.numpages > 5) {
      throw new Error("Nahrané PDF má více než 5 stran. Zkraťte prosím dokument.");
    }
    return data.text;
  } else if (ext === '.docx') {
    const result = await mammoth.extractRawText({ buffer: file.buffer });
    const text = result.value;
    // Word limit for DOCX (approx 2500 words is ~5 pages)
    const wordCount = text.trim().split(/\s+/).length;
    if (wordCount > 2500 || text.length > 15000) {
      throw new Error("Nahraný Word dokument je příliš dlouhý. Maximální limit je ekvivalent 5 stran (cca 15 000 znaků).");
    }
    return text;
  } else if (ext === '.txt') {
    const text = file.buffer.toString('utf8');
    if (text.length > 15000) {
      throw new Error("Nahraný textový soubor je příliš dlouhý. Maximální limit je 15 000 znaků.");
    }
    return text;
  } else {
    throw new Error("Nepodporovaný formát souboru. Nahrajte prosím soubor ve formátu PDF, DOCX nebo TXT.");
  }
}

// --- GET/POST /api/generate-script ---
router.post('/generate-script', validateAccess, upload.single('file'), async (req, res) => {
  const ip = getClientIp(req);
  const limit = checkRateLimit(ip, 'script');
  if (!limit.allowed) {
    return res.status(429).json({ error: `Příliš mnoho požadavků na generování skriptů. Zkuste to znovu za ${limit.waitMinutes} minut.` });
  }

  // Check if API key is present
  const geminiApiKey = process.env.GEMINI_API_KEY;
  if (!geminiApiKey || geminiApiKey === 'your_gemini_api_key_here' || geminiApiKey === 'YOUR_API_KEY_HERE') {
    return res.status(503).json({ error: "Gemini API klíč není nakonfigurován. Nastavte GEMINI_API_KEY v .env souboru." });
  }

  try {
    let sourceText = "";

    // 1. Get text from file or raw text input
    if (req.file) {
      try {
        sourceText = await extractText(req.file);
      } catch (err) {
        return res.status(400).json({ error: err.message });
      }
    } else if (req.body.text) {
      sourceText = req.body.text.trim();
      if (sourceText.length > 15000) {
        return res.status(400).json({ error: "Vložený text je příliš dlouhý. Maximální limit je 15 000 znaků." });
      }
    }

    if (!sourceText) {
      return res.status(400).json({ error: "Nebyl nahrán žádný soubor ani zadán žádný text." });
    }

    // Double check captcha for non-files (files already went through validateCaptcha via middleware, but let's make sure it's valid)
    const captchaNum1 = parseInt(req.body.captchaNum1);
    const captchaNum2 = parseInt(req.body.captchaNum2);
    const captchaSolution = parseInt(req.body.captchaSolution);
    if (!isNaN(captchaNum1) && !isNaN(captchaNum2) && !isNaN(captchaSolution)) {
      if (captchaNum1 + captchaNum2 !== captchaSolution) {
        return res.status(400).json({ error: "Neplatný výsledek Captcha testu." });
      }
    }

    // 2. Call Gemini API
    const ai = new GoogleGenAI({ apiKey: geminiApiKey });
    const systemInstruction = `Jste zkušený tvůrce výukových podcastů pro studenty lékařských a vysokých škol. Vaším úkolem je převést dodaný text (studijní podklady) do přirozeného, poutavého a edukačního rozhovoru mezi Učitelem (Teacher) a Studentem (Student) v českém jazyce.

Pravidla tvorby scénáře:
1. Jazyk: Rozhovor musí být kompletně v české lékařské a odborné terminologii (jako na českých lékařských fakultách). Nepoužívejte krkolomné překlady.
2. Role Učitele (Teacher): Vysvětluje klíčové pojmy, patofyziologické mechanismy, klinické souvislosti a odpovídá na otázky. Mluví profesionálně, ale srozumitelně.
3. Role Studenta (Student): Klade zvídavé doplňující otázky, shrnuje svými slovy, co pochopil (např. "Aha, takže pokud..."), a upozorňuje na typické chytáky u zkoušek.
4. Dynamika: Repliky musí být relativně krátké (žádné dlouhé monology). Rozhovor by měl doomed mít logický úvod, rozbor hlavních bodů a stručný závěr. Generujte přibližně 10 až 20 replik celkem.
5. Intonace/emoce: Můžete na začátek vybraných vět vložit stručné emocionální vodítko v hranatých závorkách (např. "[nadšeně] To je skvělá otázka!", "[zamyšleně] To zní složitě, jak to funguje?", "[vysvětluje] Tento proces..."). Používejte je střídmě pro oživení hlasové syntézy.
6. Výstup musí striktně odpovídat JSON schématu s polem replik.`;

    const prompt = `Zde jsou podklady pro tvorbu podcastu:
    
---
${sourceText}
---

Převeďte tyto podklady do dialogu mezi Učitelem a Studentem ve formátu JSON podle schématu.`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.5-flash',
      contents: prompt,
      config: {
        systemInstruction: systemInstruction,
        responseMimeType: 'application/json',
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            dialogue: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  speaker: { 
                    type: Type.STRING,
                    enum: ['Teacher', 'Student']
                  },
                  text: { type: Type.STRING }
                },
                required: ['speaker', 'text']
              }
            }
          },
          required: ['dialogue']
        }
      }
    });

    const resultJson = JSON.parse(response.text);
    return res.json(resultJson);

  } catch (error) {
    console.error("Gemini Error:", error);
    return res.status(500).json({ error: "Chyba při komunikaci s Gemini API: " + error.message });
  }
});

// GET fallback for generate-script
router.get('/generate-script', (req, res) => {
  res.status(405).json({ error: "Metoda GET není povolena. Pro generování scénáře použijte metodu POST s nahraným souborem." });
});

// --- POST /api/generate-audio ---
router.post('/generate-audio', validateAccess, validateCaptcha, async (req, res) => {
  const ip = getClientIp(req);
  const limit = checkRateLimit(ip, 'audio');
  if (!limit.allowed) {
    return res.status(429).json({ error: `Příliš mnoho požadavků na generování zvuku. Zkuste to znovu za ${limit.waitMinutes} minut.` });
  }

  const { dialogue } = req.body;
  if (!dialogue || !Array.isArray(dialogue) || dialogue.length === 0) {
    return res.status(400).json({ error: "Neplatný nebo prázdný scénář." });
  }

  // Ochrana: max 25 replik na jeden podcast
  if (dialogue.length > 25) {
    return res.status(400).json({ error: "Scénář obsahuje příliš mnoho replik. Maximální limit je 25 replik na jeden podcast." });
  }

  // Validace konfigurace Fish AI
  const fishApiKey = process.env.FISH_AI_API_KEY;
  const teacherVoiceId = process.env.SPEAKER_TEACHER_VOICE_ID;
  const studentVoiceId = process.env.SPEAKER_STUDENT_VOICE_ID;

  if (!fishApiKey || fishApiKey === 'your_fish_ai_api_key_here') {
    return res.status(503).json({ error: "Fish AI API klíč není nakonfigurován. Nastavte FISH_AI_API_KEY v .env souboru." });
  }
  if (!teacherVoiceId || !studentVoiceId || teacherVoiceId === 'your_teacher_voice_reference_id_here' || studentVoiceId === 'your_student_voice_reference_id_here') {
    return res.status(503).json({ error: "Voice ID pro Učitele nebo Studenta nejsou nakonfigurovány v .env souboru." });
  }

  // Vytvořit složku pro dočasné soubory, pokud neexistuje
  const tempAudioDir = path.join(__dirname, '../temp-audio');
  if (!fs.existsSync(tempAudioDir)) {
    fs.mkdirSync(tempAudioDir, { recursive: true });
  }

  const sessionToken = crypto.randomBytes(16).toString('hex');
  const tempFiles = [];

  try {
    // 1. Vygenerovat jednotlivé repliky z Fish AI
    for (let i = 0; i < dialogue.length; i++) {
      const replica = dialogue[i];
      const voiceId = replica.speaker === 'Teacher' ? teacherVoiceId : studentVoiceId;
      
      const response = await fetch('https://api.fish.audio/v1/tts', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${fishApiKey}`,
          'Content-Type': 'application/json',
          'model': 's2.1-pro-free'
        },
        body: JSON.stringify({
          text: replica.text,
          reference_id: voiceId,
          format: 'mp3'
        })
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Fish AI API error (Replika ${i + 1}): [${response.status}] ${errorText}`);
      }

      // Uložit dočasné audio
      const chunkBuffer = Buffer.from(await response.arrayBuffer());
      const chunkPath = path.join(tempAudioDir, `temp_${sessionToken}_${i}.mp3`);
      fs.writeFileSync(chunkPath, chunkBuffer);
      tempFiles.push(chunkPath);
    }

    // 2. Sloučit soubory pomocí ffmpeg
    const finalFileName = `podcast_${sessionToken}.mp3`;
    const finalOutputPath = path.join(tempAudioDir, finalFileName);

    // Vytvořit seznam pro ffmpeg concat
    const listFilePath = path.join(tempAudioDir, `list_${sessionToken}.txt`);
    const listContent = tempFiles.map(f => `file '${path.resolve(f)}'`).join('\n');
    fs.writeFileSync(listFilePath, listContent, 'utf8');

    // Spustit ffmpeg sloučení bez re-enkódování (rychlé a bezeztrátové)
    await new Promise((resolve, reject) => {
      exec(`ffmpeg -y -f concat -safe 0 -i "${listFilePath}" -c copy "${finalOutputPath}"`, (error, stdout, stderr) => {
        // Vždy smazat seznam
        try {
          fs.unlinkSync(listFilePath);
        } catch (e) {}

        if (error) {
          reject(new Error("FFmpeg sloučení selhalo: " + error.message));
        } else {
          resolve();
        }
      });
    });

    // 3. Vrátit odkaz na finální soubor
    return res.json({ audioUrl: `/temp-audio/${finalFileName}` });

  } catch (error) {
    console.error("Audio Generation Error:", error);
    return res.status(500).json({ error: "Chyba při generování audia: " + error.message });
  } finally {
    // 4. Vyčistit dočasné soubory replik
    for (const file of tempFiles) {
      try {
        if (fs.existsSync(file)) {
          fs.unlinkSync(file);
        }
      } catch (e) {
        console.error("Failed to clean up temp file:", file, e);
      }
    }
  }
});

module.exports = router;
