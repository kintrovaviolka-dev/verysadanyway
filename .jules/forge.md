## 2026-08-26 - Missing cases in cases.js
**Learning:** Found that cases.js did not contain all cases present in urgentni-prijem/src/data/cases/. We must ensure that the centralized data exports match individual file resources to avoid rendering issues.
**Action:** Always check array lengths or object keys against source directories when modifying aggregated data constants.
## 2026-08-27 - Localization of medical key terms
**Learning:** Found that localized arrays like `keyTerms` might contain English terms (e.g., "differentiation") copied from external sources or translation errors. These strings are hardcoded in the JS file and used in the UI.
**Action:** When updating content, check adjacent strings and arrays for translation consistency, particularly for highly specific medical terms.
## 2024-11-20 - Unicode escape regex caution
**Learning:** The markdown parser in `farmakologie/data_core.js` safely replaces explicit unescaped Unicode anomalies (like `\u0007lpha`) caused by raw `\alpha` evaluation. However, naively attempting to extend this logic to other raw escape sequences like `\n` or `\t` using global replace regex (e.g., `/\x0Au/g`) is incredibly dangerous as it permanently destroys valid whitespace and random string parts (e.g., replacing standard newlines globally).
**Action:** Always test unicode global replacements on real-world strings with standard spaces and newlines, not just isolated examples. Never globally strip or replace standard control characters like `\n`, `\t`, or `\r` unless wrapped with extremely tight boundary context.
