import os

def replace_all(filename, replacements):
    with open(filename, 'r') as f:
        content = f.read()
    for old, new in replacements.items():
        content = content.replace(old, new)
    with open(filename, 'w') as f:
        f.write(content)

# api/chat.js
replace_all('api/chat.js', {
"""<<<<<<< HEAD
  // 2. Validate Authorization header
  const clientToken = process.env.CLIENT_TOKEN;
  if (!clientToken) {
    return res.status(500).json({ error: "Server configuration error: CLIENT_TOKEN is not set." });
  }
  const authHeader = req.headers.authorization;
  if (!authHeader || authHeader !== `Bearer ${clientToken}`) {
    return res.status(401).json({ error: "Access unauthorized. Missing or invalid Authorization header." });
  }

  // 3. Call stateless rate-limiter placeholder
=======
  // A browser client cannot keep a shared secret. Limit this public endpoint
  // instead of accepting a token that was previously returned by /api/config.
>>>>>>> origin/main""":
"""  // A browser client cannot keep a shared secret. Limit this public endpoint
  // instead of accepting a token that was previously returned by /api/config."""
})

# api/config.js
replace_all('api/config.js', {
"""<<<<<<< HEAD
  // CORS Headers Configuration
  const origin = req.headers.origin;
  const referer = req.headers.referer || req.headers.referrer;
  const source = origin || referer;

  let allowedOrigin = null;
  if (source) {
    try {
      const url = new URL(source);
      const hostname = url.hostname;""":
"""  // CORS Headers Configuration
  const origin = req.headers.origin;
  const referer = req.headers.referer || req.headers.referrer;
  const source = origin || referer;

  let allowedOrigin = null;
  if (source) {
    try {
      const url = new URL(source);
      const hostname = url.hostname;""",
"""<<<<<<< HEAD
  const clientToken = process.env.CLIENT_TOKEN;
  if (!clientToken) {
    return res.status(500).json({ error: "Server configuration error: CLIENT_TOKEN is not set." });
  }
  return res.status(200).json({ clientToken });
=======
  // Browser-delivered values cannot be authentication secrets. This endpoint
  // previously disclosed CLIENT_TOKEN, making the authorization check bypassable.
  return res.status(410).json({ error: 'This endpoint has been retired.' });
>>>>>>> origin/main""":
"""  // Browser-delivered values cannot be authentication secrets. This endpoint
  // previously disclosed CLIENT_TOKEN, making the authorization check bypassable.
  return res.status(410).json({ error: 'This endpoint has been retired.' });"""
})

# api/feedback.js
replace_all('api/feedback.js', {
"""<<<<<<< HEAD
  // 2. Validate Authorization token
  const clientToken = process.env.CLIENT_TOKEN;
  if (!clientToken) {
    return res.status(500).json({ error: "Server configuration error: CLIENT_TOKEN is not set." });
  }
  const authHeader = req.headers.authorization;
  if (!authHeader || authHeader !== `Bearer ${clientToken}`) {
    return res.status(401).json({ error: "Access unauthorized. Missing or invalid Authorization header." });
  }

=======
>>>>>>> origin/main""":
""""""
})

# server.js
replace_all('server.js', {
"""<<<<<<< HEAD
// --- CONFIG ENDPOINT ---
app.get('/api/config', (req, res) => {
  if (!checkReferer(req)) {
    return res.status(403).json({ error: "Access forbidden from this origin." });
  }
  const clientToken = process.env.CLIENT_TOKEN;
  if (!clientToken) {
    return res.status(500).json({ error: "Server configuration error: CLIENT_TOKEN is not set." });
  }
  res.json({ clientToken });
});

=======
>>>>>>> origin/main""":
"""""",
"""<<<<<<< HEAD
  const clientToken = process.env.CLIENT_TOKEN;
  if (!clientToken) {
    return res.status(500).json({ error: "Server configuration error: CLIENT_TOKEN is not set." });
  }
  const authHeader = req.headers.authorization;
  if (!authHeader || authHeader !== `Bearer ${clientToken}`) {
    return res.status(401).json({ error: "Access unauthorized. Missing or invalid Authorization header." });
  }

=======
>>>>>>> origin/main""":
""""""
})
