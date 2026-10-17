<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://ai.google.dev/static/site-assets/images/share-ais-513315318.png" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/4a1aa651-b8a1-418b-b669-ade03442c7c8

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

The development server redirects `/` to the stable Vite source entry
`app.html`. Production builds produce `dist/index.html`; the root repository
build copies this into the published static portal without overwriting the
source entry.

The welcome screen and progress dashboard link to
`/clinical-learning-portal/#essentials`, the bilingual practical anesthesia
course. CICO questions prioritise eFONA without waiting for a saturation
threshold or sugammadex. Scores and AI feedback are study aids, not a real
examination board or certification of clinical competence.

After changing shared anesthesia content, run
`npm --prefix clinical-learning-portal run sync:content` from the repository
root to refresh MedDrill and study-buddy. See the clinical portal README for
the content sources, scope and browser checks.
