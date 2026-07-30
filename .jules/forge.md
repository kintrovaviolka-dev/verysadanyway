## 2026-07-31 - Grammar/Typo adjustments in quiz data
**Learning:** Found typo-like strings in raw string data (e.g., 'dalsímu', 'finrinouidní', 'Buergova' instead of 'dalšímu', 'fibrinoidní', 'Buergerova'). These are in standard `.js` files and were safely updated using regex/search-and-replace strings because the original objects lack robust parsers to modify them natively.
**Action:** Always search standard `.js` data structures for static typos using raw string searching, since they lack JSON tooling support for automated edits.
