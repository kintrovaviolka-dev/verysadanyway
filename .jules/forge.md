## 2026-08-26 - Missing cases in cases.js
**Learning:** Found that cases.js did not contain all cases present in urgentni-prijem/src/data/cases/. We must ensure that the centralized data exports match individual file resources to avoid rendering issues.
**Action:** Always check array lengths or object keys against source directories when modifying aggregated data constants.
