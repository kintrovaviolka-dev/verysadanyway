# Lékařský studijní portál

Tento repozitář obsahuje několik vzájemně propojených projektů zaměřených na medicínské studium, opakování látky a podporu učení. Hlavní část tvoří webový rozcestník pro studenty oboru všeobecné lékařství, doplněný o otázky, studijní data, AI asistenta a specializované mini-aplikace pro různé oblasti.

## Co projekt řeší

- Rozcestník studijních materiálů podle předmětů a témat
- Interaktivní kvízy a testy založené na strukturovaných datech
- Správa pokroku studenta (XP, úrovně, streaky, lokální stav v prohlížeči)
- Generování PDF poznámek z Markdownu a LaTeXu
- Integrace s Google Gemini API pro interaktivní nápovědu a evaluaci odpovědí
- Více modulů v jednom repozitáři pro různé studijní scénáře a specializace

## Aktualní architektura projektu

Repozitář není jen jedna aplikace, ale hub pro několik souvisejících částí:

- hlavní webová aplikace (`index.html`, `app.js`, `server.js`, `style.css`)
- sada datových souborů pro kvízy a otázky (`data_*.js`, `cases.js`, `feedback.js`)
- backend Express API a lokální server
- subaplikace `clinical-learning-portal/` a `urgentni-prijem/`
- modul `study-buddy/` pro další funkce a správu dat / worker funkcionality
- obsah a materiály pro jednotlivé předměty a typy studijních bloků (`derma/`, `farmakologie/`, `kardio/`, `neuro/`, `psych/`, atd.)

## Použité technologie

- Frontend: HTML, CSS, JavaScript (vanilla)
- Backend: Node.js + Express
- AI integrace: Google Gemini API (`@google/genai`)
- Build tooling: Vite
- PDF pipeline: Python + Markdown/LaTeX
- Další moduly: React/Vite ve specializovaných podsložkách, Cloudflare Wrangler pro `study-buddy`

## Struktura repozitáře

```text
.
├── .env.example                 # Příklad environment proměnných
├── .gitignore
├── README.md                    # Dokumentace projektu
├── app.js                       # Hlavní aplikační logika
├── benchmark2.js                # Benchmark / úlohy pro testování dat
├── cases.js                     # Datové sady pro scénáře a případy
├── clinical-learning-portal/    # React/Vite app pro klinické učení
├── compile_pdf.py               # Python skript pro generování PDF
├── data_*.js                    # Kvízová a studijní data
├── derma/                       # Materiály z dermatologie
├── farmakologie/                # Farmakologie
├── feedback.js                  # Zpětná vazba a hodnocení
├── index.html                   # Vstupní bod aplikace
├── kardio/                      # Kardiologie
├── mikro/                       # (podle aktuálního obsahu repozitáře)
├── neuro/                       # Neurologie
├── package.json                  # Hlavní Node.js konfig.
├── package-lock.json
├── pnpm-lock.yaml
├── psych/                       # Psychiatrie / psych
├── server.js                    # Express server a API
├── study-buddy/                 # Doplňkový modul / worker
├── style.css                    # Stylování aplikace
├── test/                        # Testy projektu
├── urgentni-prijem/             # Specializovaná app pro urgentní příjem
├── upv/                         # Další studijní assets / moduly
├── vercel.json                  # Konfigurace deploymentu
├── api/                         # API a testy
├── ...                          # další předmětové a tematické složky
└── *.pdf                        # Vygenerované nebo distribuované PDF materiály
```

> Poznámka: některé složky v repozitáři jsou tematické nebo experimentální a jejich přesná role se může měnit s vývojem projektu.

## Požadavky

- Node.js 18+
- npm (nebo pnpm)
- Python 3 pro PDF pipeline
- Klíč `GEMINI_API_KEY` pro AI funkce

## Instalace

### 1) Klonování a instalace závislostí

```bash
git clone https://github.com/kintrovaviolka-dev/verysadanyway.git
cd verysadanyway
npm install
```

### 2) Nastavení prostředí

Vytvořte soubor `.env` podle `.env.example`:

```bash
cp .env.example .env
```

Obsah `.env` by měl obsahovat alespoň:

```env
GEMINI_API_KEY="your_gemini_api_key_here"
```

Pro další lokální konfiguraci můžete doplnit i port serveru, pokud je to v aktuální verzi použito.

## Spuštění aplikace

### Hlavní aplikace

```bash
npm run dev
```

nebo v produkčním režimu:

```bash
npm start
```

Po spuštění otevřete prohlížeč na:

```text
http://localhost:3000
```

### Pokročilé podaplikace

#### clinical-learning-portal

```bash
cd clinical-learning-portal
npm install
npm run dev
```

#### urgentni-prijem

```bash
cd urgentni-prijem
npm install
npm run dev
```

#### study-buddy

```bash
cd study-buddy
npm install
npm run dev
```

## Build a testy

Hlavní repozitář obsahuje základní skripty:

```bash
npm test
npm run build
```

`npm run build` zajišťuje build specializovaných podaplikací pro klinický portál a urgentní příjem.

## Generování PDF

K vygenerování studijních PDF z Markdown/LaTeX zdrojů slouží:

```bash
python3 compile_pdf.py
```

Tento proces může vyžadovat další nástroje, například `pandoc` nebo `pdflatex`, podle konkrétního výstupu a dat.

## AI funkce

Gemini je využíván pro:

- generování scénářů a studijních variant
- vyhodnocení odpovědí
- nápovědu pro studenty
- interaktivní debriefing po řešení kvízů a případů

## Vývojový přístup

Repozitář je strukturovaný tak, aby byl časem rozšiřitelný o nové části a předměty. Většina dat je v JS/JSON/Markdown formátu, takže je snadné přidávat nové sady otázek, témata a moduly bez zásadní změny základní aplikace.

## Přispívání

Přispívání je vítáno. Doporučený workflow:

1. Vytvoř fork repozitáře
2. Vytvoř feature branch
3. Uprav a otestuj změny
4. Otevři pull request

## Poznámka o licenci

Tento repozitář má v současné podobě primárně osobní a vzdělávací charakter. Pokud je v projektu v budoucnu přidána explicitní licence, doplní se zde odpovídající text.

## Kontakt

Pro dotazy, návrhy či zpětnou vazbu kontaktujte autora nebo správce repozitáře přes GitHub profil / repository settings.

---

Tento soubor je navržen tak, aby lépe odpovídal aktuálnímu stavu projektu a pomohl novému návštěvníkovi rychle orientovat se v jeho struktuře a provozu.
