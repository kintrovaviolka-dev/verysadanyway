## 2024-11-20 - Actionable Empty States
**Learning:** Dead-end empty states (like a plain "no results" message) disrupt user flow and require extra effort to recover from.
**Action:** Always provide an actionable recovery path (e.g., a "Clear search" button) in empty states, and ensure that programmatic focus is returned to the relevant input to maintain keyboard navigation context.
## 2024-11-20 - Adding Accessibility to Injected Modals and Textareas
**Learning:** Found that custom modals injected dynamically via JavaScript (`feedback.js`) often lack fundamental accessibility attributes for dialogs, causing screen readers to misinterpret the context. Additionally, standalone `<textarea>` elements without an explicit connected `<label>` are unreadable to assistive technologies without an `aria-label`.
**Action:** When creating or injecting custom modals, always add `role="dialog"`, `aria-modal="true"`, and `aria-labelledby="[id_of_title]"` to the wrapper element. For standalone textareas or inputs, explicitly provide an `aria-label` attribute describing their purpose.
