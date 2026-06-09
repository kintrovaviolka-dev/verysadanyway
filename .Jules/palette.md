# Palette's Journal
## 2024-11-20 - Missing ARIA Labels on Icon-only Buttons
**Learning:** Found multiple icon-only buttons (close panels) and an input field lacking explicit ARIA labels. This causes screen readers to skip announcing the button's purpose, hindering accessibility.
**Action:** Always ensure icon-only buttons (`.panel-close-btn`) and inputs have appropriate `aria-label` attributes to explicitly describe their function to assistive technologies.
## 2024-11-20 - Missing Focus Indicators for Keyboard Navigation
**Learning:** Interactive elements lacked clear `:focus-visible` styles, making keyboard navigation difficult for users who rely on it.
**Action:** Implemented a global `*:focus-visible` rule using the design system's accent color (`--accent-blue`) with proper outline offset to ensure clear visual feedback across all focusable elements when navigated via keyboard.
## 2024-11-20 - Missing role="button" and tabindex on interactive DIVs
**Learning:** Found multiple interactive cards (grade selection, subject selection) implemented as `<div>` elements without `role="button"` or `tabindex="0"`. This prevents keyboard users from navigating to these elements using the Tab key, and screen readers from announcing them as interactive elements.
**Action:** Always ensure that non-semantic interactive elements (like `div` or `span` used as buttons) have `role="button"`, `tabindex="0"`, and event listeners for keyboard activation (Enter and Space keys) to provide full keyboard and screen reader accessibility.
