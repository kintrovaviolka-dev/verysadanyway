# -*- coding: utf-8 -*-
import json
import re

file_path = 'mikra/data_mikra.js'
with open(file_path, 'r', encoding='utf-8') as f:
    text = f.read()

text = re.sub(r'//.*', '', text)

m = re.search(r'const MIKRA_QUESTIONS\s*=\s*\[', text)
if not m:
    print("Could not find MIKRA_QUESTIONS")
    exit(1)

start_idx = m.end() - 1
end_idx = text.rfind('];')

array_content = text[start_idx:end_idx+1].strip()

# Convert JS object literal to JSON
json_str = re.sub(r'([{,]\s*)([a-zA-Z_][a-zA-Z0-9_]*)\s*:', r'\1"\2":', array_content)
json_str = re.sub(r',\s*([\]}])', r'\1', json_str)

try:
    data = json.loads(json_str)
    print("Successfully parsed all 40 questions! Count:", len(data))
    
    # Check each question
    for idx, q in enumerate(data):
        q_id = q.get('id', f'Missing ID at index {idx}')
        cislo = q.get('cislo', 'Missing cislo')
        
        # Check cast_a
        cast_a = q.get('cast_a')
        if not cast_a:
            print(f"Error in {q_id}: cast_a is missing!")
            continue
        title_a = cast_a.get('title')
        if not title_a:
            print(f"Error in {q_id} (Part A): title is missing!")
        content_a = cast_a.get('content')
        if content_a is None:
            print(f"Error in {q_id} (Part A): content is missing!")
            
        # Check cast_b
        cast_b = q.get('cast_b')
        if not cast_b:
            print(f"Error in {q_id}: cast_b is missing!")
            continue
        title_b = cast_b.get('title')
        if not title_b:
            print(f"Error in {q_id} (Part B): title is missing!")
        content_b = cast_b.get('content')
        if content_b is None:
            print(f"Error in {q_id} (Part B): content is missing!")
            
        # Check root keys
        for key in q.keys():
            if ' ' in key or ':' in key:
                print(f"CRITICAL root key typo in {q_id}: '{key}'")
        for key in cast_a.keys():
            if ' ' in key or ':' in key:
                print(f"CRITICAL cast_a key typo in {q_id}: '{key}'")
        for key in cast_b.keys():
            if ' ' in key or ':' in key:
                print(f"CRITICAL cast_b key typo in {q_id}: '{key}'")
except Exception as e:
    print("Failed to convert/parse all questions as JSON:", e)
