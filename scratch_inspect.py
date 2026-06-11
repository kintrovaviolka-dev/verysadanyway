import re

file_path = "/Users/violakintrova/.gemini/antigravity/brain/85741bea-b96e-4dff-bfd4-be09292ff6d5/scratch/remaining_derma_raw.txt"

with open(file_path, "r", encoding="utf-8") as f:
    lines = f.readlines()

print(f"Total lines: {len(lines)}")

for idx, line in enumerate(lines):
    # Print lines that look like topic headers (e.g., "28. ...", "=== STRANA ...")
    stripped = line.strip()
    if re.match(r'^\d+\.', stripped) or "=== STRANA" in stripped:
        print(f"Line {idx+1}: {stripped}")
