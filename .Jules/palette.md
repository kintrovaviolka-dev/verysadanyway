# Palette's Journal
## 2024-11-20 - Missing ARIA Labels on Icon-only Buttons
**Learning:** Found multiple icon-only buttons (close panels) and an input field lacking explicit ARIA labels. This causes screen readers to skip announcing the button's purpose, hindering accessibility.
**Action:** Always ensure icon-only buttons (`.panel-close-btn`) and inputs have appropriate `aria-label` attributes to explicitly describe their function to assistive technologies.
## 2024-11-20 - Missing Focus Indicators for Keyboard Navigation
**Learning:** Interactive elements lacked clear `:focus-visible` styles, making keyboard navigation difficult for users who rely on it.
**Action:** Implemented a global `*:focus-visible` rule using the design system's accent color (`--accent-blue`) with proper outline offset to ensure clear visual feedback across all focusable elements when navigated via keyboard.
## 2024-11-20 - Non-Semantic Interactive Elements Lacking Keyboard Support
**Learning:** Custom interactive elements, like divs used as clickable cards (`.subject-card`, `.grade-card`), were missing the `role="button"` attribute, `tabindex="0"`, and keyboard event listeners for 'Enter' and 'Space'. This prevented keyboard-only and screen reader users from accessing and activating these core navigation items.
**Action:** When using non-semantic HTML elements for interaction, explicitly set `role`, manage `tabindex` for focusability, and bind both click and keydown events to ensure full accessibility.
