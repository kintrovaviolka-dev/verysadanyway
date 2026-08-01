## 2026-07-31 - Grammar/Typo adjustments in quiz data
**Learning:** Found typo-like strings in raw string data (e.g., 'dalsímu', 'finrinouidní', 'Buergova' instead of 'dalšímu', 'fibrinoidní', 'Buergerova'). These are in standard `.js` files and were safely updated using regex/search-and-replace strings because the original objects lack robust parsers to modify them natively.
**Action:** Always search standard `.js` data structures for static typos using raw string searching, since they lack JSON tooling support for automated edits.
## 2026-08-01 - Avoid leaving throwaway scripts in repo
**Learning:** After using a one-off automation script (like `fix_typos.py`) to perform complex string replacements, it was flagged during code review as an unnecessary artifact that clutters the repository.
**Action:** Always delete temporary scripts used for text replacements or file modifications before completing the pre-commit review phase and creating a PR.
