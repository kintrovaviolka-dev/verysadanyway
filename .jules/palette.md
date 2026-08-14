## 2024-11-20 - Actionable Empty States
**Learning:** Dead-end empty states (like a plain "no results" message) disrupt user flow and require extra effort to recover from.
**Action:** Always provide an actionable recovery path (e.g., a "Clear search" button) in empty states, and ensure that programmatic focus is returned to the relevant input to maintain keyboard navigation context.
## 2024-11-20 - Custom Modal Accessibility
**Learning:** Custom modals built without the native HTML `<dialog>` tag lack built-in accessibility features (like keyboard focus management and screen reader roles).
**Action:** When implementing custom modals, always add `role="dialog"`, `aria-modal="true"`, and appropriate `aria-labelledby` attributes. Programmatically trap or shift focus to the modal when opened, close the modal on `Escape` key press, and restore focus to the previously active element upon closing.
