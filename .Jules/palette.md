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
## 2024-11-20 - Keyboard Accessibility on Custom Cards
**Learning:** Adding keydown listeners to custom card-based navigation components is required for accessibility, but when cards are "locked" and interactable (to show a reason for being locked), using `aria-disabled="true"` instead of removing `tabindex` is vital so keyboard users can still discover them and read the locked message.
**Action:** When implementing locked features that provide explanatory feedback, retain `tabindex="0"` and use `aria-disabled="true"` so all users receive the feedback when interacting.
## 2024-05-19 - Discoverable Disabled States for Custom Elements
**Learning:** When using custom interactive elements (like `div` cards) that act as buttons, adding `aria-disabled="true"` instead of completely removing them from tab order or using `disabled` allows screen reader users to discover the element and hear the explanation for its locked state. Also `aria-hidden="true"` should be added to emoji/icons inside buttons to avoid screen readers reading them aloud confusingly.
**Action:** When creating custom button-like elements that are locked or disabled but should still be discoverable (like level selectors), always use `role="button"`, `tabindex="0"`, and `aria-disabled="true"`. Make sure to attach keyboard event listeners for Enter and Space (with `e.preventDefault()`).

## 2024-11-20 - Accurately Tracking Native Dialog State for ARIA
**Learning:** When using standard floating action buttons (FABs) that control native `<dialog>` elements or expandable panels, explicitly tracking their state via `aria-expanded` and `aria-haspopup`/`aria-controls` is essential. However, simply updating the state on manual button clicks is insufficient. If a dialog is closed via native methods like the `Esc` key, the FAB's `aria-expanded` state can fall out of sync with the true UI state, misleading screen reader users.
**Action:** When connecting toggle buttons to native `<dialog>` elements or other closeable overlays, always attach an event listener to the native `close` event of the target element (e.g., `dialog.addEventListener("close", ...)`). This guarantees the toggle button's `aria-expanded` attribute accurately resets to `"false"` regardless of how the dialog was closed (e.g., explicit UI close button, Escape key, or form submission).
