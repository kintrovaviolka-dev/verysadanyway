# Palette's Journal
## 2024-11-20 - Missing ARIA Labels on Icon-only Buttons
**Learning:** Found multiple icon-only buttons (close panels) and an input field lacking explicit ARIA labels. This causes screen readers to skip announcing the button's purpose, hindering accessibility.
**Action:** Always ensure icon-only buttons (`.panel-close-btn`) and inputs have appropriate `aria-label` attributes to explicitly describe their function to assistive technologies.
## 2024-11-20 - Missing Focus Indicators for Keyboard Navigation
**Learning:** Interactive elements lacked clear `:focus-visible` styles, making keyboard navigation difficult for users who rely on it.
**Action:** Implemented a global `*:focus-visible` rule using the design system's accent color (`--accent-blue`) with proper outline offset to ensure clear visual feedback across all focusable elements when navigated via keyboard.
## 2024-11-20 - Adding Accessibility to Non-Semantic Interactive Elements
**Learning:** Found custom interactive elements (`.grade-card`, `.subject-card`) made from non-semantic tags (`div`) that act as buttons but lack inherent accessibility features. This prevents keyboard and screen reader users from accessing these core navigation functions.
**Action:** When creating custom button-like elements using `div` or `span`, always explicitly assign `role="button"`, `tabindex="0"`, appropriate `aria-label`s or `aria-disabled` states, and pair standard `click` event listeners with `keydown` event listeners that trigger on the 'Enter' and 'Space' keys to ensure full keyboard accessibility.

## 2024-05-24 - Keyboard Accessibility for Non-Semantic Interactive Cards
**Learning:** In this project, custom interactive elements (like the navigation cards `.grade-card` and `.subject-card`) are built using `div` tags. While styling might make them look clickable, screen readers and keyboard-only users cannot interact with them properly without explicit ARIA attributes and event listeners.
**Action:** When adding or modifying custom interactive elements (e.g. `div` or `span` used as a button), always explicitly provide `role="button"`, `tabindex="0"`, appropriate `aria-label`s if needed, and a `keydown` event listener for 'Enter' and 'Space' keys that triggers the element's click action while preventing default behavior.
