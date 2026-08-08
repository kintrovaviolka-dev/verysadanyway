## 2024-11-20 - Actionable Empty States
**Learning:** Dead-end empty states (like a plain "no results" message) disrupt user flow and require extra effort to recover from.
**Action:** Always provide an actionable recovery path (e.g., a "Clear search" button) in empty states, and ensure that programmatic focus is returned to the relevant input to maintain keyboard navigation context.
## 2026-08-08 - Added ARIA label to feedback textarea
**Learning:** Found a dynamic injection of a `<textarea>` in `feedback.js` without a visible `<label>` or `aria-label`. Relying solely on `placeholder` attributes is a known accessibility issue as screen readers may skip them.
**Action:** Always ensure that dynamically injected form fields, especially those relying only on placeholders for visual context, are explicitly given an `aria-label` to provide an accessible name for screen reader users.
