## 2024-11-20 - Actionable Empty States
**Learning:** Dead-end empty states (like a plain "no results" message) disrupt user flow and require extra effort to recover from.
**Action:** Always provide an actionable recovery path (e.g., a "Clear search" button) in empty states, and ensure that programmatic focus is returned to the relevant input to maintain keyboard navigation context.
## 2024-11-20 - Custom Modal Accessibility
**Learning:** Custom modals built without the native HTML `<dialog>` tag lack built-in accessibility features (like keyboard focus management and screen reader roles).
**Action:** When implementing custom modals, always add `role="dialog"`, `aria-modal="true"`, and appropriate `aria-labelledby` attributes. Programmatically trap or shift focus to the modal when opened, close the modal on `Escape` key press, and restore focus to the previously active element upon closing.
## 2024-05-18 - ARIA toggle states for custom filtering buttons
**Learning:** When using custom `div` elements with `role="button"` for filtering (like `.grade-card`), adding an `active` class is not enough for screen readers. They need `aria-pressed="true" / "false"` to convey the selected toggle state to assistive technologies. Additionally, filtering logic reliant on `parseInt` needs to account for special universal string values like `"all"` to prevent breaking features (e.g. universal study materials disappearing on click).
**Action:** Always pair visual active classes with semantic ARIA toggle attributes (`aria-pressed`, `aria-expanded`, or `aria-selected` depending on the interaction pattern) and validate filtering inputs against string constants when processing data attributes.

## $(date +%Y-%m-%d) - Feedback Modal Accessibility
**Learning:** The custom feedback modal (`#feedback-modal-overlay`) injected by `feedback.js` was completely missing standard ARIA roles and its trigger buttons were missing state indicators, which is a common pattern for dynamically injected components in this app.
**Action:** Always verify dynamically injected custom modals have `role="dialog"`, `aria-modal="true"`, and `aria-labelledby`, and ensure their trigger buttons maintain `aria-expanded` and `aria-controls` states.
