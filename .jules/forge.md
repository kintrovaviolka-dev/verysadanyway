## 2026-08-26 - Missing cases in cases.js
**Learning:** Found that cases.js did not contain all cases present in urgentni-prijem/src/data/cases/. We must ensure that the centralized data exports match individual file resources to avoid rendering issues.
**Action:** Always check array lengths or object keys against source directories when modifying aggregated data constants.
## 2026-08-27 - Localization of medical key terms
**Learning:** Found that localized arrays like `keyTerms` might contain English terms (e.g., "differentiation") copied from external sources or translation errors. These strings are hardcoded in the JS file and used in the UI.
**Action:** When updating content, check adjacent strings and arrays for translation consistency, particularly for highly specific medical terms.
