# -*- coding: utf-8 -*-
import json
import re

file_path = 'mikra/data_mikra.js'
with open(file_path, 'r', encoding='utf-8') as f:
    text = f.read()

# Strip single line comments
text_no_comments = re.sub(r'//.*', '', text)

m = re.search(r'const MIKRA_QUESTIONS\s*=\s*\[', text_no_comments)
if not m:
    print("Could not find MIKRA_QUESTIONS")
    exit(1)

start_idx = m.end() - 1
end_idx = text_no_comments.rfind('];')

array_content = text_no_comments[start_idx:end_idx+1].strip()

# Convert JS object literal to JSON
json_str = re.sub(r'([{,]\s*)([a-zA-Z_][a-zA-Z0-9_]*)\s*:', r'\1"\2":', array_content)
json_str = re.sub(r',\s*([\]}])', r'\1', json_str)

try:
    data = json.loads(json_str)
    print(f"Total Questions: {len(data)}")
    
    total_quizzes = 0
    missing_explanations = 0
    option_count_issues = 0
    
    for q in data:
        q_id = q.get('id')
        cislo = q.get('cislo')
        cast_a = q.get('cast_a', {})
        cast_b = q.get('cast_b', {})
        
        # Check quizzes in cast_a
        for quiz in cast_a.get('quiz', []):
            total_quizzes += 1
            opts = quiz.get('options', [])
            if len(opts) != 4:
                option_count_issues += 1
                print(f"[{q_id} Part A] Quiz question option count is {len(opts)}: '{quiz.get('q')}'")
            if not quiz.get('explanation'):
                missing_explanations += 1
                print(f"[{q_id} Part A] Missing explanation: '{quiz.get('q')}'")
                
        # Check quizzes in cast_b
        for quiz in cast_b.get('quiz', []):
            total_quizzes += 1
            opts = quiz.get('options', [])
            if len(opts) != 4:
                option_count_issues += 1
                print(f"[{q_id} Part B] Quiz question option count is {len(opts)}: '{quiz.get('q')}'")
            if not quiz.get('explanation'):
                missing_explanations += 1
                print(f"[{q_id} Part B] Missing explanation: '{quiz.get('q')}'")
                
    print(f"Total Active Recall Quiz Questions: {total_quizzes}")
    print(f"Quizzes with option count != 4: {option_count_issues}")
    print(f"Quizzes missing explanations: {missing_explanations}")
    
except Exception as e:
    print("Failed to convert/parse all questions as JSON:", e)
