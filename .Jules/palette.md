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
## 2024-11-20 - Adding Accessibility to Form Required Indicators
**Learning:** Found form fields that were semantically required (using `required` attribute) but lacked visual indicators for sighted users. Adding a standard asterisk `*` can confuse screen readers by redundantly announcing "asterisk" or "star" on top of the "required" field state.
**Action:** When adding visual 'required' indicators (e.g., asterisks) to form fields, explicitly hide them from screen readers using `aria-hidden="true"` inside a `span` tag to prevent redundant readouts when the associated input element is already marked with the `required` attribute.
## 2024-11-20 - Escape Key Dismissal for Floating Panels
**Learning:** Found custom floating panels (like the Chatbot and Settings overlay) that lack support for dismissal via the `Escape` key. This traps keyboard users who expect standard dialog behavior and breaks their navigation flow. Additionally, focus was not being properly restored to the trigger element (like the FAB) after closing.
**Action:** Always implement a global `keydown` event listener that checks for the `Escape` key when custom floating panels or overlays are open. Ensure this dismisses the active layer (e.g., closing an overlay before the main panel) and explicitly restores focus (`.focus()`) back to the element that triggered the panel to maintain keyboard navigation context.
## 2024-11-20 - Actionable Empty States for Search
**Learning:** Empty states in search components were a dead end, merely stating "no results" without offering a quick way to recover.
**Action:** Always provide an actionable recovery path in empty states, such as a "Clear search" or "Reset filters" button, to guide users back to the content instead of leaving them stranded.
