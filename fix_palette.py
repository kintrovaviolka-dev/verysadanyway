import re

with open('.jules/palette.md', 'r') as f:
    content = f.read()

content = content.replace(
"""## 2025-02-28 - Custom Modal Accessibility Enhancement
**Learning:** Custom modals implemented via JavaScript (`feedback.js`) and plain `div` tags lack built-in ARIA properties. This hinders screen reader compatibility and keyboard navigation access.
**Action:** When working on custom modals, make sure to add `role="dialog"`, `aria-modal="true"`, and appropriate `aria-labelledby` attributes. Also ensure that keyboard focus is explicitly trapped by focusing an internal interactive element (e.g. `textarea`, `input`, or `button`) on open and properly restored back to the trigger upon closing.
""",
""
)

with open('.jules/palette.md', 'w') as f:
    f.write(content)
