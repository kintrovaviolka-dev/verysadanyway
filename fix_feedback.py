import re

with open('feedback.js', 'r') as f:
    content = f.read()

# Make it focus the commentInput explicitly instead
content = content.replace(
    "    overlay.classList.add('open');\n    const firstInput = overlay.querySelector('input, textarea, button');\n    if (firstInput) firstInput.focus();",
    "    overlay.classList.add('open');\n    if (commentInput) commentInput.focus();"
)

with open('feedback.js', 'w') as f:
    f.write(content)
