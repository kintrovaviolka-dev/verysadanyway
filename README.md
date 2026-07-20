# Lékařský Studijní Portál / Medical Study Portal

Krátký přehled

Lékařský Studijní Portál je sbírka jednoduchých webových aplikací a nástrojů určených pro klinické učení a přípravu studijních materiálů. Projekt obsahuje hlavní frontend (statické stránky + volitelný Express backend), nástroje pro generování PDF z Markdown/LaTeX a několik samostatných AI Studio (Gemini) aplikací.

Hlavní funkce

- Rozcestník a organizace studijních materiálů podle předmětů (patologie, farmakologie, dermatologie, ...).
- Interaktivní kvízy a testy založené na datových souborech (data_*.js).
- Základní gamifikace (XP, úrovně, streaks) uložená v localStorage.
- Skript pro kompilaci PDF materiálů (compile_pdf.py).
- Dvě samostatné Gemini AI Studio aplikace (viz složky níže) pro interaktivní asistenci.

Použité technologie

- Frontend: HTML5, CSS3, Vanilla JavaScript
- Backend: Node.js + Express (server.js) — použitý lokálně, nevyžadovaný pro čistě statický provoz
- AI: Google Gemini (integrace v podsložkách/AI studiu)
- Nástroje: Python (skript pro generování PDF), případně pandoc/pdflatex

Repo struktura (aktuální)

```
.
├── README.md
├── package.json
├── server.js                 # (volitelný) Express backend pro lokální vývoj
├── index.html                # hlavní frontend vstup
├── app.js                    # aplikační logika
├── style.css                 # styly
├── compile_pdf.py            # Python skript pro generování PDF
├── data_*.js                 # datové soubory kvízů
├── clinical-learning-portal/ # Gemini AI Studio app (lokální runner)
├── clinical-portal/          # Gemini/AI studio varianty / rozšíření
├── urgentní-příjem/          # Gemini AI Studio app (urgentní příjem)
└── derma/                    # materiály k dermatologii (a další předmětové složky)
```

Instalace a spuštění

Poznámka: projekt lze provozovat buď jako statický web (bez backendu) nebo s lokálním Express serverem.

1) Lokální vývoj s Node.js / Express (doporučeno pro plnou funkcionalitu)

- Požadavky: Node.js, npm

```bash
npm install
# pokud v package.json existuje skript pro vývoj
npm run dev
# nebo produkčně
npm start
```

- Pokud používáte Express backend (`server.js`), nastavte volitelně `.env` soubor s proměnnými (např. PORT=3000).

2) Pouze frontend (statický)

- Pokud chcete pouze prohlížet frontend bez backendu:

```bash
python3 -m http.server 8000
# nebo (Python 2)
# python -m SimpleHTTPServer 8000
```

- Otevřete `http://localhost:8000`.

Spuštění Gemini AI (AI Studio) aplikací

Projekt obsahuje samostatné AI Studio aplikace ve složkách. Každá se spouští nezávisle:

- clinical-learning-portal/
- clinical-portal/
- urgentní-příjem/

Postup (v rámci každé podsložky):

```bash
cd clinical-learning-portal
npm install
# přidejte GEMINI_API_KEY do .env.local nebo .env podle README v podsložce
npm run dev
```

Ujistěte se, že ve ` .env.local` nebo v systému máte nastavenou proměnnou GEMINI_API_KEY, pokud chcete používat Gemini integrace.

Generování PDF materiálů

- Pro kompilaci PDF z Markdown/LaTeX spusťte:

```bash
python3 compile_pdf.py
```

- Tento skript může vyžadovat další nástroje (pandoc, pdflatex) — viz komentáře v `compile_pdf.py` a nainstalujte je podle potřeby.

Gamifikace a ukládání průběhu

- Místní ukládání (localStorage) drží jednoduchý stav uživatele: XP, úroveň, streaky apod.
- Data jsou zatím lokální (není trvalé uživatelské DB ani autentizace).

Užitečné příkazy

```bash
# Instalace
npm install

# Vývoj (repo root nebo jednotlivé podsložky)
npm run dev

# Produkce
npm start

# Generování PDF
python3 compile_pdf.py
```

Příspěvky

Příspěvky jsou vítány:

1. Fork projektu
2. Vytvořte branch: `git checkout -b feature/nazev`
3. Commit: `git commit -m "Add: popis změny"`
4. Push a otevřete Pull Request

Licence

Projekt je licencován pod MIT.

Kontakt

Pro dotazy nebo nahlášení chyb otevřete issue v tomto repozitáři nebo použijte kontaktní údaje správce projektu.
