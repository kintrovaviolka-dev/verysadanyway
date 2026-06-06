import re
import os
import subprocess
import sys
import datetime

# Paths
CWD = r"c:\Users\viola\OneDrive\Plocha\coding\patfyza-main\landing-portal"
INPUT_FILE = os.path.join(CWD, "pf_incomplete.md")
TEMP_HTML = os.path.join(CWD, "temp_compiled.html")
OUTPUT_PDF = os.path.join(CWD, "patfyza_26.pdf")
CHROME_PATH = r"C:\Program Files\Google\Chrome\Application\chrome.exe"

def clean_math_str(math_str):
    # Replace LaTeX operators
    math_str = math_str.replace(r"\times", " × ")
    math_str = math_str.replace(r"\rightarrow", " → ")
    math_str = math_str.replace(r"\rightleftarrows", " ⇄ ")
    math_str = math_str.replace(r"\bullet", "•")
    math_str = math_str.replace(r"\ge", " ≥ ")
    math_str = math_str.replace(r"\le", " ≤ ")
    math_str = math_str.replace(r"\alpha", "α")
    math_str = math_str.replace(r"\beta", "β")
    math_str = math_str.replace(r"\gamma", "γ")
    math_str = math_str.replace(r"\delta", "δ")
    math_str = math_str.replace(r"\mu", "μ")
    math_str = math_str.replace(r"\,", " ")
    
    # Remove \text{...}
    math_str = re.sub(r"\\text\{([^}]+)\}", r"\1", math_str)
    
    # Superscripts: ^{...} or ^+ or ^-
    math_str = re.sub(r"\^\{([^}]+)\}", r"<sup>\1</sup>", math_str)
    math_str = re.sub(r"\^([a-zA-Z0-9\+\-\•]+)", r"<sup>\1</sup>", math_str)
    
    # Subscripts: \_{...} or \_... or _{...} or _...
    math_str = re.sub(r"\\_\{([^}]+)\}", r"<sub>\1</sub>", math_str)
    math_str = re.sub(r"\\_([a-zA-Z0-9\+\-\•]+)", r"<sub>\1</sub>", math_str)
    math_str = re.sub(r"_\{([^}]+)\}", r"<sub>\1</sub>", math_str)
    math_str = re.sub(r"_([a-zA-Z0-9\+\-\•]+)", r"<sub>\1</sub>", math_str)
    
    # Degrees C
    math_str = math_str.replace(r"^\circ C", "°C")
    math_str = math_str.replace(r"^\circ", "°")
    math_str = math_str.replace(r"° C", "°C")
    
    return math_str

def clean_math_block(match):
    content = match.group(1).strip()
    cleaned = clean_math_str(content)
    return f'<div class="math-block">{cleaned}</div>'

def clean_inline_math(match):
    content = match.group(1).strip()
    cleaned = clean_math_str(content)
    return f'<span class="math-inline">{cleaned}</span>'

def parse_braces(text, command, open_tag, close_tag):
    pattern = "\\" + command + "{"
    while True:
        idx = text.find(pattern)
        if idx == -1:
            break
        # find matching closing brace
        brace_count = 1
        pos = idx + len(pattern)
        while pos < len(text) and brace_count > 0:
            if text[pos] == '{':
                brace_count += 1
            elif text[pos] == '}':
                brace_count -= 1
            pos += 1
        if brace_count == 0:
            content = text[idx + len(pattern) : pos - 1]
            # recursively parse the content inside
            content = parse_all_formatting(content)
            text = text[:idx] + open_tag + content + close_tag + text[pos:]
        else:
            break
    return text

def discard_braces_command(text, command_name):
    pattern = "\\" + command_name + "{"
    while True:
        idx = text.find(pattern)
        if idx == -1:
            break
        brace_count = 1
        pos = idx + len(pattern)
        while pos < len(text) and brace_count > 0:
            if text[pos] == '{':
                brace_count += 1
            elif text[pos] == '}':
                brace_count -= 1
            pos += 1
        if brace_count == 0:
            text = text[:idx] + text[pos:]
        else:
            break
    return text

def parse_all_formatting(text):
    # Standard braced commands
    text = parse_braces(text, "textbf", '<strong>', '</strong>')
    text = parse_braces(text, "textit", '<em>', '</em>')
    text = parse_braces(text, "framebox", '<div class="framebox">', '</div>')
    text = parse_braces(text, "parbox", '<div class="parbox">', '</div>')
    
    # Specific braced size switches {\Huge text} etc.
    for cmd, tag_open, tag_close in [
        (r"\Huge", '<span class="huge">', '</span>'),
        (r"\Large", '<span class="large">', '</span>'),
        (r"\large", '<span class="medium-large">', '</span>'),
        (r"\small", '<span class="small">', '</span>'),
        (r"\bfseries", '<strong>', '</strong>'),
        (r"\normalfont", '<span style="font-weight: normal;">', '</span>'),
    ]:
        pattern = "{" + cmd
        while True:
            idx = text.find(pattern)
            if idx == -1:
                pattern_no_space = "{" + cmd.strip()
                idx = text.find(pattern_no_space)
                if idx == -1:
                    break
                pat_len = len(pattern_no_space)
            else:
                pat_len = len(pattern)
                
            brace_count = 1
            pos = idx + pat_len
            while pos < len(text) and brace_count > 0:
                if text[pos] == '{':
                    brace_count += 1
                elif text[pos] == '}':
                    brace_count -= 1
                pos += 1
            if brace_count == 0:
                content = text[idx + pat_len : pos - 1]
                content = parse_all_formatting(content)
                text = text[:idx] + tag_open + content + tag_close + text[pos:]
            else:
                break
                
    # Discard spacing commands completely
    text = discard_braces_command(text, "vspace")
    
    # Clean up single LaTeX commands
    text = text.replace(r"\noindent", "")
    text = text.replace(r"\centering", "")
    text = text.replace(r"\vfill", "")
    text = text.replace(r"\bfseries", "")
    text = text.replace(r"\normalfont", "")
    text = text.replace(r"\*", "*")
    text = text.replace(r"\\", "<br>")
    text = text.replace(r"\small", "")
    text = text.replace(r"\large", "")
    text = text.replace(r"\Large", "")
    text = text.replace(r"\Huge", "")
    
    # Replace math blocks $$...$$ and inline math $...$
    text = re.sub(r"\$\$(.*?)\$\$", clean_math_block, text, flags=re.DOTALL)
    text = re.sub(r"(?<!\$)\$(?!\$)(.*?)\$", clean_inline_math, text)
    
    return text

def compile_pdf():
    print("Reading pf_incomplete.md...")
    with open(INPUT_FILE, "r", encoding="utf-8") as f:
        content = f.read()
    
    # Clean up comment lines starting with %
    content = re.sub(r'^\s*%.*$', '', content, flags=re.MULTILINE)
    
    # Format current date in Czech for \today
    months_cz = ["ledna", "února", "března", "dubna", "května", "června", "července", "srpna", "září", "října", "listopadu", "prosince"]
    now = datetime.datetime.now()
    today_cz = f"{now.day}. {months_cz[now.month-1]} {now.year}"
    content = content.replace(r"\today", today_cz)
    
    # Extract titlepage
    titlepage_match = re.search(r'\\begin\{titlepage\}(.*?)\\end\{titlepage\}', content, re.DOTALL)
    titlepage_html = ""
    if titlepage_match:
        titlepage_content = titlepage_match.group(1).strip()
        titlepage_parsed = parse_all_formatting(titlepage_content)
        
        tp_elements = []
        raw_parts = re.split(r'\n\s*\n', titlepage_parsed)
        for part in raw_parts:
            part = part.strip()
            if not part:
                continue
            if "Patologická Fyziologie" in part:
                tp_elements.append(f'<h1 class="main-title">{part}</h1>')
            elif "Kompletní" in part:
                tp_elements.append(f'<p class="subtitle">{part}</p>')
            elif "framebox" in part or "parbox" in part or "info-box" in part or "Structure" in part or "Struktura" in part:
                tp_elements.append(part)
            else:
                tp_elements.append(f'<p class="tp-meta">{part}</p>')
        
        titlepage_html = f'<div class="titlepage">\n' + "\n".join(tp_elements) + '\n</div>'
    
    # Extract document body
    body_match = re.search(r'\\begin\{document\}(.*?)\\end\{document\}', content, re.DOTALL)
    if body_match:
        body_content = body_match.group(1)
        body_content = re.sub(r'\\begin\{titlepage\}.*?\\end\{titlepage\}', '', body_content, flags=re.DOTALL).strip()
    else:
        body_content = content
        
    # TOC tracker
    toc_data = []
    sec_counter = 0
    subsec_counter = 0
    
    # Temporarily match and replace structural headings to build TOC
    def sec_repl(match):
        nonlocal sec_counter, subsec_counter
        title = match.group(1)
        sec_counter += 1
        subsec_counter = 0
        sec_id = f"sec-{sec_counter}"
        fmt_title = parse_all_formatting(title)
        plain_title = re.sub('<[^<]+?>', '', fmt_title)
        toc_data.append((1, sec_id, f"{sec_counter}. {plain_title}"))
        return f'\n\n<h2 id="{sec_id}" class="section-title"><span class="section-num">{sec_counter}.</span> {fmt_title}</h2>\n\n'
        
    def subsec_repl(match):
        nonlocal subsec_counter
        title = match.group(1)
        subsec_counter += 1
        subsec_id = f"sec-{sec_counter}-{subsec_counter}"
        fmt_title = parse_all_formatting(title)
        plain_title = re.sub('<[^<]+?>', '', fmt_title)
        toc_data.append((2, subsec_id, f"{sec_counter}.{subsec_counter} {plain_title}"))
        return f'\n\n<h3 id="{subsec_id}" class="subsection-title"><span class="subsection-num">{sec_counter}.{subsec_counter}</span> {fmt_title}</h3>\n\n'

    def para_repl(match):
        title = match.group(1)
        fmt_title = parse_all_formatting(title)
        return f'\n\n<h4 class="paragraph-title">{fmt_title}</h4>\n\n'
    
    body_content = re.sub(r'\\section\{([^}]+)\}', sec_repl, body_content)
    body_content = re.sub(r'\\subsection\{([^}]+)\}', subsec_repl, body_content)
    body_content = re.sub(r'\\paragraph\{([^}]+)\}', para_repl, body_content)
    
    # Parse formatting for the rest of the body
    body_parsed = parse_all_formatting(body_content)
    
    # Replace list environments
    body_parsed = body_parsed.replace(r"\begin{itemize}", "<ul>")
    body_parsed = body_parsed.replace(r"\end{itemize}", "</ul>")
    body_parsed = body_parsed.replace(r"\begin{enumerate}", "<ol>")
    body_parsed = body_parsed.replace(r"\end{enumerate}", "</ol>")
    body_parsed = body_parsed.replace(r"\item", "<li>")
    body_parsed = body_parsed.replace(r"\newpage", '<div class="page-break"></div>')
    
    # Split the body by paragraphs
    raw_paragraphs = re.split(r'\n\s*\n', body_parsed)
    body_html_parts = []
    
    for para in raw_paragraphs:
        para = para.strip()
        if not para:
            continue
            
        # Avoid double-wrapping block tags in <p>
        if (para.startswith("<h2") or 
            para.startswith("<h3") or 
            para.startswith("<h4") or 
            para.startswith("<ul") or 
            para.startswith("</ul") or 
            para.startswith("<ol") or 
            para.startswith("</ol") or 
            para.startswith("<li") or 
            para.startswith("<div") or 
            para.startswith("</div") or 
            para.startswith("<p")):
            body_html_parts.append(para)
        else:
            body_html_parts.append(f"<p>{para}</p>")
            
    body_html = "\n\n".join(body_html_parts)
    
    # Build Table of Contents HTML
    toc_html = ['<div class="toc-container">', '<h2 class="toc-title">Obsah</h2>', '<ul class="toc-list">']
    for level, link_id, title in toc_data:
        if level == 1:
            toc_html.append(f'<li class="toc-item toc-level-1"><a href="#{link_id}">{title}</a><span class="toc-dots"></span></li>')
        else:
            toc_html.append(f'<li class="toc-item toc-level-2"><a href="#{link_id}">{title}</a><span class="toc-dots"></span></li>')
    toc_html.append('</ul>')
    toc_html.append('</div>')
    toc_string = "\n".join(toc_html)
    
    # Replace Table of Contents placeholder
    body_html = body_html.replace('<p>\\tableofcontents</p>', toc_string)
    body_html = body_html.replace('\\tableofcontents', toc_string)
    
    # Combine titlepage and body
    full_html_body = titlepage_html + "\n\n" + body_html
    
    # Embedded style sheet
    css_styles = """
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Outfit:wght@400;600;700&family=Noto+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap');
    
    * {
        box-sizing: border-box;
    }
    
    body {
        font-family: 'Noto Sans', 'Inter', sans-serif;
        color: #1e293b;
        line-height: 1.6;
        font-size: 11pt;
        background: #ffffff;
        margin: 0;
        padding: 0;
    }
    
    @page {
        size: A4;
        margin: 2.5cm 2cm;
    }
    
    /* Cover Page (Strictly sized for single page fit) */
    .titlepage {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        height: 22.5cm; /* Fits exactly on A4 print height without splitting */
        padding: 20px;
        text-align: center;
        page-break-after: always;
        page-break-inside: avoid;
        border: 2px solid #0c2340;
        border-radius: 12px;
        margin: 0.5cm auto;
        position: relative;
        max-width: 95%;
    }
    
    .titlepage::before {
        content: '';
        position: absolute;
        top: 10px;
        left: 10px;
        right: 10px;
        bottom: 10px;
        border: 1px solid #006666;
        pointer-events: none;
        border-radius: 8px;
    }
    
    .titlepage .main-title {
        font-family: 'Outfit', sans-serif;
        font-size: 30pt;
        color: #0c2340;
        margin: 15px 0 5px 0;
        font-weight: 700;
        letter-spacing: 0.5px;
    }
    
    .titlepage .subtitle {
        font-family: 'Outfit', sans-serif;
        font-size: 15pt;
        color: #006666;
        margin: 0 0 20px 0;
        font-weight: 600;
        line-height: 1.4;
        max-width: 85%;
    }
    
    .titlepage .tp-meta {
        font-size: 11pt;
        margin: 5px 0;
        color: #334155;
    }
    
    .titlepage strong {
        color: #0c2340;
        font-size: 12pt;
    }
    
    /* Titlepage custom framebox (info box) */
    .titlepage .framebox {
        border: 1.5px solid #006666;
        background: #f0fdfa;
        padding: 20px;
        border-radius: 8px;
        margin: 10px auto;
        max-width: 90%;
        text-align: center;
        page-break-inside: avoid;
    }
    
    .titlepage .framebox .parbox {
        border: none;
        background: transparent;
        padding: 0;
        margin: 0;
    }
    
    .titlepage .framebox p, .titlepage .framebox span {
        font-size: 9.5pt;
        color: #006666;
        line-height: 1.6;
        margin: 0;
    }
    
    /* Document Body styling */
    p {
        margin-top: 0;
        margin-bottom: 12pt;
        text-align: justify;
    }
    
    .page-break {
        page-break-after: always;
    }
    
    /* Headings */
    h2.section-title {
        font-family: 'Outfit', sans-serif;
        color: #0c2340;
        font-size: 18pt;
        font-weight: 700;
        margin-top: 36pt;
        margin-bottom: 16pt;
        page-break-before: always;
        border-bottom: 2.5px solid #0c2340;
        padding-bottom: 6px;
    }
    
    h2.section-title .section-num {
        color: #006666;
        margin-right: 8px;
    }
    
    h3.subsection-title {
        font-family: 'Outfit', sans-serif;
        color: #006666;
        font-size: 13.5pt;
        font-weight: 600;
        margin-top: 24pt;
        margin-bottom: 12pt;
        border-bottom: 1px solid rgba(0, 102, 102, 0.15);
        padding-bottom: 4px;
    }
    
    h3.subsection-title .subsection-num {
        color: #8b5cf6;
        margin-right: 8px;
    }
    
    h4.paragraph-title {
        font-family: 'Outfit', sans-serif;
        color: #1e293b;
        font-size: 11pt;
        font-weight: 700;
        margin-top: 16pt;
        margin-bottom: 8pt;
        text-transform: uppercase;
        letter-spacing: 0.5px;
    }
    
    /* Lists */
    ul, ol {
        margin-top: 0;
        margin-bottom: 12pt;
        padding-left: 24px;
    }
    
    li {
        margin-bottom: 6pt;
        text-align: justify;
    }
    
    li strong {
        color: #0c2340;
    }
    
    /* Math blocks and inline math */
    .math-block {
        text-align: center;
        margin: 18pt 0;
        padding: 12px;
        background: #f8fafc;
        border: 1px solid #e2e8f0;
        border-radius: 8px;
        font-family: 'Inter', sans-serif;
        font-weight: 500;
        color: #0f172a;
        font-size: 10.5pt;
        page-break-inside: avoid;
    }
    
    .math-inline {
        font-family: 'Inter', sans-serif;
        font-weight: 500;
        background: #f1f5f9;
        padding: 1px 5px;
        border-radius: 4px;
        color: #0f172a;
        font-size: 9.5pt;
        white-space: nowrap;
    }
    
    /* Info box (framebox) in Body */
    .framebox {
        border-left: 4px solid #006666;
        background: #f8fafc;
        padding: 16px 20px;
        margin: 20px 0;
        border-radius: 0 8px 8px 0;
        border-top: 1px solid #e2e8f0;
        border-right: 1px solid #e2e8f0;
        border-bottom: 1px solid #e2e8f0;
        page-break-inside: avoid;
    }
    
    /* Table of Contents */
    .toc-container {
        page-break-after: always;
        padding: 20px 0;
    }
    
    .toc-title {
        font-family: 'Outfit', sans-serif;
        color: #0c2340;
        font-size: 22pt;
        font-weight: 700;
        margin-bottom: 24pt;
        border-bottom: 3px solid #0c2340;
        padding-bottom: 10px;
    }
    
    .toc-list {
        list-style: none;
        padding: 0;
        margin: 0;
    }
    
    .toc-item {
        display: flex;
        align-items: baseline;
        margin-bottom: 10pt;
    }
    
    .toc-item a {
        color: #1e293b;
        text-decoration: none;
        font-family: 'Outfit', sans-serif;
        transition: color 0.2s;
    }
    
    .toc-item a:hover {
        color: #006666;
    }
    
    .toc-level-1 {
        font-weight: 700;
        font-size: 12pt;
        margin-top: 16pt;
        color: #0c2340;
    }
    
    .toc-level-1 a {
        color: #0c2340;
    }
    
    .toc-level-2 {
        font-size: 10.5pt;
        padding-left: 20px;
        font-weight: 400;
    }
    
    .toc-dots {
        flex-grow: 1;
        border-bottom: 1px dotted #cbd5e1;
        margin: 0 10px;
        position: relative;
        top: -4px;
    }
    
    /* LaTeX font size structures mapping */
    .huge { font-size: 20pt; font-weight: 700; }
    .large { font-size: 15pt; font-weight: 600; }
    .medium-large { font-size: 12pt; }
    .small { font-size: 9.5pt; }
    """
    
    html_template = f"""<!DOCTYPE html>
<html lang="cs">
<head>
    <meta charset="UTF-8">
    <title>Patofyziologie - Vypracované Otázky</title>
    <style>
    {css_styles}
    </style>
</head>
<body>
    {full_html_body}
</body>
</html>
"""
    
    print("Writing temp HTML file...")
    with open(TEMP_HTML, "w", encoding="utf-8") as f:
        f.write(html_template)
        
    # Check if target PDF is locked (open in reader)
    if os.path.exists(OUTPUT_PDF):
        try:
            os.remove(OUTPUT_PDF)
            print("Successfully removed old PDF for overwrite.")
        except PermissionError:
            print(f"\n[ERROR] The output file '{OUTPUT_PDF}' is currently open in your PDF reader.")
            print("Please close your PDF reader/browser tab viewing this PDF and re-run the compilation.\n")
            if os.path.exists(TEMP_HTML):
                os.remove(TEMP_HTML)
            sys.exit(1)
        except Exception as e:
            print(f"Warning: Could not remove old PDF: {e}")

    print("Compiling HTML to PDF using Chrome Headless...")
    # Invoke chrome headless to print to PDF without header and footer margins
    chrome_cmd = [
        CHROME_PATH,
        "--headless",
        "--disable-gpu",
        "--no-sandbox",
        f"--print-to-pdf={OUTPUT_PDF}",
        "--no-pdf-header-footer",  # Strips default headers & footers (time, title, url, page numbers)
        TEMP_HTML
    ]
    
    try:
        result = subprocess.run(chrome_cmd, capture_output=True, text=True, check=True)
        print("Success! PDF compiled to:", OUTPUT_PDF)
        if os.path.exists(TEMP_HTML):
            os.remove(TEMP_HTML)
    except subprocess.CalledProcessError as e:
        print("Error during PDF compilation:", e)
        print("Stdout:", e.stdout)
        print("Stderr:", e.stderr)
        sys.exit(1)

if __name__ == "__main__":
    compile_pdf()
