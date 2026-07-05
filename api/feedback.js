// api/feedback.js - Vercel Serverless Function Proxy for Feedback and Tips
// Securely forwards client feedback submissions to Google Sheets.

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

  // Only allow POST for feedback submissions
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }

  // 1. Check referer/origin to protect against external abuse
  if (!checkReferer(req)) {
    return res.status(403).json({ error: "Access forbidden from this origin." });
  }

  // 2. Validate Authorization token
  const clientToken = process.env.CLIENT_TOKEN || 'super_secret_medical_study_token_2026';
  const authHeader = req.headers.authorization;
  if (!authHeader || authHeader !== `Bearer ${clientToken}`) {
    return res.status(401).json({ error: "Access unauthorized. Missing or invalid Authorization header." });
  }

  const { type, subject, name, message } = req.body;

  // Simple validation
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

  // Fallback for missing backend URL config
  if (!sheetUrl) {
    console.warn("FEEDBACK_SHEET_URL environment variable is not defined.");
    return res.status(200).json({ 
      status: "success", 
      info: "FEEDBACK_SHEET_URL is not set. Action simulated successfully." 
    });
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
      throw new Error(`Google Apps Script web app returned status ${fetchResponse.status}`);
    }

    const result = await fetchResponse.json();
    return res.status(200).json(result);
  } catch (error) {
    console.error("Error proxying feedback to Google Sheets:", error);
    return res.status(500).json({ error: "Chyba při komunikaci s databází Google Sheets." });
  }
};
