# scripts/build_drill_modules.py
# Python script to build MedDrill modules for PWA, integrating Kardiologie practice questions,
# Urgentní příjem questions from otazky_ze_hry.ts, UPV quiz, and ANESTHESIA_QUIZ_CS.

import os
import json
import re

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DRILL_MODULES_DIR = os.path.join(BASE_DIR, 'drill', 'data', 'modules')
MANIFEST_PATH = os.path.join(BASE_DIR, 'drill', 'data', 'manifest.json')

os.makedirs(DRILL_MODULES_DIR, exist_ok=True)

import unicodedata

def slugify(text):
    if not text:
        return ''
    text = unicodedata.normalize('NFKD', text)
    text = text.encode('ASCII', 'ignore').decode('utf-8').lower()
    text = re.sub(r'[^a-z0-9]+', '-', text).strip('-')
    return text

def clean_html(text):
    if not text:
        return ''
    text = re.sub(r'<[^>]*>', '', text)
    text = text.replace('&nbsp;', ' ').replace('&lt;', '<').replace('&gt;', '>').replace('&amp;', '&').replace('&quot;', '"').replace('&#039;', "'")
    return text.strip()

# -------------------------------------------------------------
# 1. KARDIOLOGIE (4. ročník)
# -------------------------------------------------------------
print("Building Kardiologie...")
kardio_existing_path = os.path.join(DRILL_MODULES_DIR, 'kardio.json')
with open(kardio_existing_path, 'r', encoding='utf-8') as f:
    kardio_json = json.load(f)

# Keep the base questions from data.js (first 49)
base_kardio_questions = [q for q in kardio_json['questions'] if not q['id'].startswith('kardio-practice-')]

# Now read kardio/practice_data.js
practice_data_path = os.path.join(BASE_DIR, 'kardio', 'practice_data.js')
with open(practice_data_path, 'r', encoding='utf-8') as f:
    practice_content = f.read()

# Extract question objects from practice_data.js using regex
# Objects match pattern { id: "...", type: "...", ... }
practice_questions = []

# Parse single-choice questions
# { id: "sc-01", type: "single", category: "AKS a infarkt", question: "...", options: [...], correct: 1, explanation: "..." }
sc_matches = re.findall(
    r'\{\s*id:\s*"([^"]+)",\s*type:\s*"single",\s*category:\s*"([^"]+)",\s*question:\s*"([^"]+)",\s*options:\s*\[(.*?)\]\s*,\s*correct:\s*(\d+),\s*explanation:\s*"([^"]+)"\s*\}',
    practice_content,
    re.DOTALL
)

for q_id, cat, quest, opts_raw, corr, expl in sc_matches:
    # Parse options array
    opts = [opt.strip().strip('"').strip("'") for opt in re.findall(r'"([^"]*)"', opts_raw)]
    if not opts:
        opts = [opt.strip().strip('"').strip("'") for opt in re.findall(r"'([^']*)'", opts_raw)]
    
    slug_cat = slugify(cat)
    practice_questions.append({
        "id": f"kardio-practice-{q_id}",
        "subjectId": "kardio",
        "subjectTitle": "Kardiologie",
        "grade": 4,
        "topicId": f"kardio-{slug_cat}",
        "topicTitle": f"Kardiologie: {cat}",
        "type": "single_choice",
        "question": quest,
        "options": opts,
        "correctIndex": int(corr),
        "explanation": expl,
        "pearl": f"{cat}: {expl[:160]}..." if len(expl) > 160 else f"{cat}: {expl}",
        "tags": ["Single Choice", cat, "ESC Guidelines"]
    })

# Parse type-in (fill_in) questions
# { id: "ti-01", type: "type-in", category: "AKS a infarkt", question: "...", answers: [...], answerLabel: "...", explanation: "..." }
ti_matches = re.findall(
    r'\{\s*id:\s*"([^"]+)",\s*type:\s*"type-in",\s*category:\s*"([^"]+)",\s*question:\s*"([^"]+)",\s*answers:\s*\[(.*?)\]\s*,\s*answerLabel:\s*"([^"]+)",\s*explanation:\s*"([^"]+)"\s*\}',
    practice_content,
    re.DOTALL
)

for q_id, cat, quest, ans_raw, ans_label, expl in ti_matches:
    ans_list = [a.strip().strip('"').strip("'") for a in re.findall(r'"([^"]*)"', ans_raw)]
    if not ans_list:
        ans_list = [a.strip().strip('"').strip("'") for a in re.findall(r"'([^']*)'", ans_raw)]
    
    slug_cat = slugify(cat)
    practice_questions.append({
        "id": f"kardio-practice-{q_id}",
        "subjectId": "kardio",
        "subjectTitle": "Kardiologie",
        "grade": 4,
        "topicId": f"kardio-{slug_cat}",
        "topicTitle": f"Kardiologie: {cat}",
        "type": "fill_in",
        "question": quest,
        "sentence": f"Správné doplnění: {ans_label}. {expl}",
        "acceptedAnswers": ans_list,
        "hint": f"{cat} ({ans_label[:1]}...)",
        "explanation": expl,
        "pearl": f"Klíčový fakt ({cat}): {ans_label} – {expl}",
        "tags": ["Dopisovací", cat, "ESC Guidelines"]
    })

all_kardio_questions = base_kardio_questions + practice_questions
kardio_json['questions'] = all_kardio_questions

with open(kardio_existing_path, 'w', encoding='utf-8') as f:
    json.dump(kardio_json, f, ensure_ascii=False, indent=2)

print(f"Kardiologie saved: {len(all_kardio_questions)} questions (49 base + {len(practice_questions)} practice).")

# -------------------------------------------------------------
# 2. URGENTNÍ PŘÍJEM & ANESTÉZIE (5. ročník)
# -------------------------------------------------------------
print("Building Urgentní příjem...")
urgent_existing_path = os.path.join(DRILL_MODULES_DIR, 'urgent.json')
with open(urgent_existing_path, 'r', encoding='utf-8') as f:
    urgent_json = json.load(f)

# Keep base 18 case studies
base_urgent_cases = [q for q in urgent_json['questions'] if q['id'].startswith('urgent-case-')]

new_urgent_questions = []

# A. 50 expert otázek z urgentni-prijem/otazky_ze_hry.ts
game_path = os.path.join(BASE_DIR, 'urgentni-prijem', 'otazky_ze_hry.ts')
if os.path.exists(game_path):
    with open(game_path, 'r', encoding='utf-8') as f:
        game_content = f.read()

    # Parse questions from otazky_ze_hry.ts
    # Pattern: id: '...', category: '...', difficulty: '...', question: '...', options: [...], correctIndex: N, rationale: '...', clinicalSource: '...'
    game_blocks = re.findall(r'\{\s*id:\s*[\'"]([^\'"]+)[\'"].*?category:\s*[\'"]([^\'"]+)[\'"].*?difficulty:\s*[\'"]([^\'"]+)[\'"].*?question:\s*[\'"]([^\'"]+)[\'"].*?options:\s*\[(.*?)\]\s*,\s*correctIndex:\s*(\d+).*?rationale:\s*[\'"]([^\'"]+)[\'"].*?clinicalSource:\s*[\'"]([^\'"]+)[\'"].*?\}', game_content, re.DOTALL)
    
    for q_id, cat, diff, quest, opts_raw, corr, rat, src in game_blocks:
        opts = [opt.strip().strip('\'').strip('"') for opt in re.findall(r'[\'"]([^\'"]+)[\'"]', opts_raw)]
        slug_cat = slugify(cat)
        new_urgent_questions.append({
            "id": f"urgent-game-{q_id}",
            "subjectId": "urgent",
            "subjectTitle": "Urgentní příjem",
            "grade": 5,
            "topicId": f"urgent-{slug_cat}",
            "topicTitle": cat,
            "type": "single_choice",
            "question": quest,
            "options": opts,
            "correctIndex": int(corr),
            "explanation": rat,
            "pearl": f"Zdroj: {src}",
            "tags": ["Single Choice", cat, diff, "Urgentní medicína"]
        })
    print(f"Loaded {len(game_blocks)} questions from otazky_ze_hry.ts")

# B. 15 anesteziologických & krizových otázek z clinical-learning-portal/src/data/quizzes_cs.ts
anest_quiz_path = os.path.join(BASE_DIR, 'clinical-learning-portal', 'src', 'data', 'quizzes_cs.ts')
if os.path.exists(anest_quiz_path):
    with open(anest_quiz_path, 'r', encoding='utf-8') as f:
        anest_content = f.read()

    anest_blocks = re.findall(r'\{\s*id:\s*[\'"]([^\'"]+)[\'"].*?caseContext:\s*[\'"]([^\'"]+)[\'"].*?question:\s*[\'"]([^\'"]+)[\'"].*?options:\s*\[(.*?)\]\s*,\s*correctAnswerIndex:\s*(\d+).*?explanation:\s*[\'"]([^\'"]+)[\'"].*?medicationId:\s*[\'"]([^\'"]+)[\'"].*?\}', anest_content, re.DOTALL)
    
    for q_id, case_ctx, quest, opts_raw, corr, expl, med_id in anest_blocks:
        opts = [opt.strip().strip('\'').strip('"') for opt in re.findall(r'[\'"]([^\'"]+)[\'"]', opts_raw)]
        full_question = f"{case_ctx}\n\n{quest}"
        new_urgent_questions.append({
            "id": f"urgent-anest-{q_id}",
            "subjectId": "urgent",
            "subjectTitle": "Urgentní příjem",
            "grade": 5,
            "topicId": "urgent-anestezie-aim",
            "topicTitle": "Anesteziologie & Krizové stavy",
            "type": "single_choice",
            "question": full_question,
            "options": opts,
            "correctIndex": int(corr),
            "explanation": expl,
            "pearl": f"Klíčové léčivo / postup: {med_id.capitalize()}",
            "tags": ["Single Choice", "Anesteziologie", "AIM", "Krizový stav"]
        })
    print(f"Loaded {len(anest_blocks)} questions from quizzes_cs.ts")

# C. 20 otázek z UPV (upv/data.js)
upv_data_path = os.path.join(BASE_DIR, 'upv', 'data.js')
if os.path.exists(upv_data_path):
    with open(upv_data_path, 'r', encoding='utf-8') as f:
        upv_content = f.read()

    upv_matches = re.findall(r'\{\s*id:\s*(\d+),\s*question:\s*"([^"]+)",\s*options:\s*\[(.*?)\]\s*,\s*correct:\s*(\d+),\s*explanation:\s*"([^"]+)"\s*\}', upv_content, re.DOTALL)
    for q_id, quest, opts_raw, corr, expl in upv_matches:
        opts = [opt.strip().strip('"').strip("'") for opt in re.findall(r'"([^"]*)"', opts_raw)]
        new_urgent_questions.append({
            "id": f"urgent-upv-{q_id}",
            "subjectId": "urgent",
            "subjectTitle": "Urgentní příjem",
            "grade": 5,
            "topicId": "urgent-upv-ventilace",
            "topicTitle": "Umělá plicní ventilace & ARDS",
            "type": "single_choice",
            "question": quest,
            "options": opts,
            "correctIndex": int(corr),
            "explanation": expl,
            "pearl": "Zásady protektivní plicní ventilace a nastavení ventilátoru dle ČSARIM/ARDSNet.",
            "tags": ["Single Choice", "UPV", "Ventilace", "Intenzivní péče"]
        })
    print(f"Loaded {len(upv_matches)} questions from upv/data.js")

all_urgent_questions = base_urgent_cases + new_urgent_questions
urgent_json['questions'] = all_urgent_questions

with open(urgent_existing_path, 'w', encoding='utf-8') as f:
    json.dump(urgent_json, f, ensure_ascii=False, indent=2)

print(f"Urgentní příjem saved: {len(all_urgent_questions)} questions (18 cases + {len(new_urgent_questions)} single-choice tests).")

# -------------------------------------------------------------
# 3. FARMAKOLOGIE (4. ročník) - Přidání kazuistik
# -------------------------------------------------------------
print("Building Farmakologie...")
farma_existing_path = os.path.join(DRILL_MODULES_DIR, 'farma.json')
with open(farma_existing_path, 'r', encoding='utf-8') as f:
    farma_json = json.load(f)

# Keep base questions that are not farma-case-
base_farma_questions = [q for q in farma_json['questions'] if not q['id'].startswith('farma-case-')]

# Read farmakologie/cases_data.js
farma_cases_path = os.path.join(BASE_DIR, 'farmakologie', 'cases_data.js')
new_farma_cases = []
if os.path.exists(farma_cases_path):
    with open(farma_cases_path, 'r', encoding='utf-8') as f:
        farma_cases_content = f.read()
    
    # Parse case objects
    # Pattern: id: "...", title: "...", category: "...", difficulty: "...", scenario: "...", solution: "...", keyTakeaway: "...", pearl: "...", tags: [...]
    case_blocks = re.findall(
        r'\{\s*id:\s*"([^"]+)",\s*title:\s*"([^"]+)",\s*category:\s*"([^"]+)",\s*difficulty:\s*"([^"]+)",\s*scenario:\s*"([^"]+)",\s*solution:\s*"([^"]+)",\s*keyTakeaway:\s*"([^"]+)",\s*pearl:\s*"([^"]+)",\s*tags:\s*\[(.*?)\]\s*\}',
        farma_cases_content,
        re.DOTALL
    )
    for c_id, title, cat, diff, scen, sol, kt, pearl, tags_raw in case_blocks:
        tags = [t.strip().strip('"').strip("'") for t in re.findall(r'"([^"]*)"', tags_raw)]
        slug_cat = slugify(cat)
        # Unescape \n in solution and scenario if parsed from string
        scen_clean = scen.replace('\\n', '\n')
        sol_clean = sol.replace('\\n', '\n')
        new_farma_cases.append({
            "id": c_id,
            "subjectId": "farma",
            "subjectTitle": "Farmakologie",
            "grade": 4,
            "topicId": f"farma-{slug_cat}",
            "topicTitle": f"Kazuistika: {cat}",
            "type": "case_study",
            "title": title,
            "vignette": {
                "scenario": scen_clean,
                "solution": sol_clean,
                "keyTakeaway": kt
            },
            "explanation": sol_clean,
            "pearl": pearl,
            "tags": tags
        })
    print(f"Loaded {len(new_farma_cases)} case studies from farmakologie/cases_data.js")

all_farma_questions = base_farma_questions + new_farma_cases
farma_json['questions'] = all_farma_questions

with open(farma_existing_path, 'w', encoding='utf-8') as f:
    json.dump(farma_json, f, ensure_ascii=False, indent=2)

print(f"Farmakologie saved: {len(all_farma_questions)} questions ({len(base_farma_questions)} base + {len(new_farma_cases)} cases).")

# -------------------------------------------------------------
# 4. REBUILD MANIFEST.JSON
# -------------------------------------------------------------
print("\nRebuilding manifest.json...")
subject_order = ['patola', 'imuno', 'mikra', 'kardio', 'neuro', 'psych', 'derma', 'farma', 'urgent']
manifest = {
    "version": "2026.2.0",
    "lastUpdated": "2026-10-07T15:55:00.000Z",
    "subjects": []
}

for sub_id in subject_order:
    sub_path = os.path.join(DRILL_MODULES_DIR, f"{sub_id}.json")
    if not os.path.exists(sub_path):
        continue
    with open(sub_path, 'r', encoding='utf-8') as f:
        sub_data = json.load(f)
    
    questions = sub_data.get('questions', [])
    sc_count = sum(1 for q in questions if q.get('type') == 'single_choice')
    cs_count = sum(1 for q in questions if q.get('type') == 'case_study')
    fi_count = sum(1 for q in questions if q.get('type') == 'fill_in')
    
    file_bytes = os.path.getsize(sub_path)
    
    manifest["subjects"].append({
        "id": sub_data.get('id', sub_id),
        "title": sub_data.get('title', sub_id),
        "grade": sub_data.get('grade', 4),
        "icon": sub_data.get('icon', '📚'),
        "color": sub_data.get('color', '#06b6d4'),
        "totalQuestions": len(questions),
        "counts": {
            "single_choice": sc_count,
            "case_study": cs_count,
            "fill_in": fi_count
        },
        "sizeBytes": file_bytes,
        "sizeFormatted": f"{round(file_bytes / 1024)} kB",
        "file": f"/drill/data/modules/{sub_id}.json"
    })
    print(f"✅ [{sub_data.get('title')}] {len(questions)} otázek ({sc_count} SCQ, {cs_count} Kazuistik, {fi_count} Doplňovaček) -> {round(file_bytes / 1024)} kB")

with open(MANIFEST_PATH, 'w', encoding='utf-8') as f:
    json.dump(manifest, f, ensure_ascii=False, indent=2)

total_q = sum(s['totalQuestions'] for s in manifest['subjects'])
print(f"\n🎉 Hotovo! Celkový manifest uložen do {MANIFEST_PATH}")
print(f"Celkem témat: {len(manifest['subjects'])}")
print(f"Celkem otázek v MedDrill bance: {total_q}")
