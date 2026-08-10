## 2024-11-20 - Actionable Empty States
**Learning:** Dead-end empty states (like a plain "no results" message) disrupt user flow and require extra effort to recover from.
**Action:** Always provide an actionable recovery path (e.g., a "Clear search" button) in empty states, and ensure that programmatic focus is returned to the relevant input to maintain keyboard navigation context.

## 2024-11-20 - Non-blocking Toast Accessibility
**Learning:** Dynamically injected toast notifications or popups (like support prompts) can go unnoticed by screen readers if they lack proper roles, or they can disrupt flow if they steal focus.
**Action:** When adding dynamic notifications or toasts, always use `role="status"` and `aria-live="polite"` on the container so they are announced smoothly without interrupting the user's current task.
