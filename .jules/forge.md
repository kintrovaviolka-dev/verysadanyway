## 2026-08-26 - Missing cases in cases.js
**Learning:** Found that cases.js did not contain all cases present in urgentni-prijem/src/data/cases/. We must ensure that the centralized data exports match individual file resources to avoid rendering issues.
**Action:** Always check array lengths or object keys against source directories when modifying aggregated data constants.
## 2026-08-27 - Localization of medical key terms
**Learning:** Found that localized arrays like `keyTerms` might contain English terms (e.g., "differentiation") copied from external sources or translation errors. These strings are hardcoded in the JS file and used in the UI.
**Action:** When updating content, check adjacent strings and arrays for translation consistency, particularly for highly specific medical terms.
## 2024-11-20 - Unicode escape regex caution
**Learning:** The markdown parser in `farmakologie/data_core.js` safely replaces explicit unescaped Unicode anomalies (like `\u0007lpha`) caused by raw `\alpha` evaluation. However, naively attempting to extend this logic to other raw escape sequences like `\n` or `\t` using global replace regex (e.g., `/\x0Au/g`) is incredibly dangerous as it permanently destroys valid whitespace and random string parts (e.g., replacing standard newlines globally).
**Action:** Always test unicode global replacements on real-world strings with standard spaces and newlines, not just isolated examples. Never globally strip or replace standard control characters like `\n`, `\t`, or `\r` unless wrapped with extremely tight boundary context.

## 2024-10-01 - Execution Plan Specificity for Submit Tool
**Learning:** When generating an execution plan that includes the `submit` tool, the `request_plan_review` checker will reject vague descriptions of arguments (e.g. "a title and description").
**Action:** Always provide concrete string definitions for all 4 required positional arguments (`branch_name`, `commit_message`, `title`, and `description`) directly within the plan step to satisfy the Specificity Rule.
## 2026-10-20 - Do not commit built drill modules when only fixing source data
**Learning:** When executing `scripts/build_drill_modules.js` locally, it may fail or produce incomplete JSON builds if local dependencies or module resolvers (like `tsx`) are missing, resulting in massive data loss (e.g., deleting entire subjects from `manifest.json` or deleting dozens of questions from module files).
**Action:** When fixing typos in source data files (like `data_pathology_zapocet.js`), avoid running the build script or staging its generated artifact outputs (`drill/data/modules/*.json`, `drill/data/manifest.json`). Only commit the actual source file that was fixed, and let the remote CI/CD pipeline handle building the artifacts safely.
