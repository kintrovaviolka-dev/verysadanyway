<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://ai.google.dev/static/site-assets/images/share-ais-513315318.png" />
</div>

# clinical-learning-portal

This folder contains the Gemini AI Studio application used as an interactive clinical learning aid. The app is intended to run locally during development (AI Studio provides the hosted environment for deployment).

Live AI Studio app: https://ai.studio/apps/510ec1a6-a714-48fb-a59d-d4524fe20087

Prerequisites

- Node.js (LTS recommended)
- npm
- A Google Gemini API key if you want to enable the assistant features

Run locally

1. Install dependencies:

```bash
npm install
```

2. Create `.env.local` (or `.env`) and add your Gemini API key:

```bash
GEMINI_API_KEY=your_gemini_api_key_here
```

3. Start the development server:

```bash
npm run dev
```

Notes

- The app expects GEMINI_API_KEY to be available at runtime for features that call the Gemini API. If the key is missing, the UI will still run but assistant features will be disabled or mocked.
- Check package.json inside this folder for available scripts (dev, build, start).
- For production deployment, follow AI Studio deployment docs or build with `npm run build` if provided.
