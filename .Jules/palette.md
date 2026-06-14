# Palette's Journal
## 2024-11-20 - Missing ARIA Labels on Icon-only Buttons
**Learning:** Found multiple icon-only buttons (close panels) and an input field lacking explicit ARIA labels. This causes screen readers to skip announcing the button's purpose, hindering accessibility.
**Action:** Always ensure icon-only buttons (`.panel-close-btn`) and inputs have appropriate `aria-label` attributes to explicitly describe their function to assistive technologies.
## 2024-11-20 - Missing Focus Indicators for Keyboard Navigation
**Learning:** Interactive elements lacked clear `:focus-visible` styles, making keyboard navigation difficult for users who rely on it.
**Action:** Implemented a global `*:focus-visible` rule using the design system's accent color (`--accent-blue`) with proper outline offset to ensure clear visual feedback across all focusable elements when navigated via keyboard.
## 2024-11-20 - Keyboard Accessibility on Non-semantic Interactive Elements
**Learning:** Interactive components built with non-semantic elements (like `div` cards) cannot be activated by users relying on keyboard navigation because they lack native focus and key handling.
**Action:** When building custom interactive elements using `div` or `span`, always explicitly provide `role="button"`, `tabindex="0"`, descriptive `aria-label`s, and `keydown` event listeners for 'Enter' and 'Space' keys to mirror native button behavior.
