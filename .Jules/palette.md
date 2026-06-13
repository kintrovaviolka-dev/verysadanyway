# Palette's Journal
## 2024-11-20 - Missing ARIA Labels on Icon-only Buttons
**Learning:** Found multiple icon-only buttons (close panels) and an input field lacking explicit ARIA labels. This causes screen readers to skip announcing the button's purpose, hindering accessibility.
**Action:** Always ensure icon-only buttons (`.panel-close-btn`) and inputs have appropriate `aria-label` attributes to explicitly describe their function to assistive technologies.
## 2024-11-20 - Missing Focus Indicators for Keyboard Navigation
**Learning:** Interactive elements lacked clear `:focus-visible` styles, making keyboard navigation difficult for users who rely on it.
**Action:** Implemented a global `*:focus-visible` rule using the design system's accent color (`--accent-blue`) with proper outline offset to ensure clear visual feedback across all focusable elements when navigated via keyboard.
## 2024-11-20 - Missing Keyboard Support on Div Cards
**Learning:** Primary navigation cards (`.grade-card`, `.subject-card`) built using `div` elements lacked native keyboard support and semantic meaning for screen readers. Using `div` tags with `click` listeners meant keyboard users could not tab to them or activate them with Enter/Space.
**Action:** Always ensure that interactable `div` elements have `role="button"`, `tabindex="0"`, appropriate `aria-label`s, and explicit `keydown` event listeners for the 'Enter' and 'Space' keys to provide a complete interactive experience.
