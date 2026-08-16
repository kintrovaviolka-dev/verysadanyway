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
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  }

  // Handle preflight OPTIONS request
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // 1. Check referer/origin
  if (!checkReferer(req)) {
    return res.status(403).json({ error: "Access forbidden from this origin." });
  }

  const clientToken = process.env.CLIENT_TOKEN;
  if (!clientToken) {
    return res.status(500).json({ error: "Server configuration error: CLIENT_TOKEN is not set." });
  }
  return res.status(200).json({ clientToken });
=======
  // Browser-delivered values cannot be authentication secrets. This endpoint
  // previously disclosed CLIENT_TOKEN, making the authorization check bypassable.
  return res.status(410).json({ error: 'This endpoint has been retired.' });
>>>>>>> origin/main
};
