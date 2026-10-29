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

### USG School

Echokardiografický trenažér je dostupný na `/usg-school/`. Jde o výukovou
simulaci PLAX, nikoli nástroj pro diagnostiku. Rozložení se přizpůsobuje
počítači, tabletu i telefonu a na malých displejích lze stránku posouvat.

- **Na tomto zařízení:** táhněte po obrazu myší nebo prstem, případně použijte
  posuvníky náklonu, rotace a vychýlení. Jas obrazu, zmrazení a scénáře
  jsou dostupné přímo na monitoru.
- **Klávesnice:** zaměřte obraz klávesou Tab. Šipky mění náklon a rotaci,
  A/D vychýlení, F zmrazí nebo obnoví obraz a R vyrovná sondu.
  Klávesové zkratky nezasahují do ovládání posuvníků.
- **Telefon jako sonda:** přepněte zdroj ovládání a naskenujte QR kód nebo
  otevřete zobrazený odkaz. Na telefonu zvolte gyroskop či dotykové ovládání.
  Jas, zmrazení a scénář se v tomto režimu synchronizují mezi zařízeními.
  Gyroskop vyžaduje HTTPS a souhlas s použitím senzorů; dotykový režim je
  dostupný i bez nich. Adresa monitoru musí být dostupná z telefonu
  (`localhost` na telefonu neodkazuje na počítač).

Přenos mezi zařízeními používá PeerJS/WebRTC. Místní záložní přenos přes
BroadcastChannel funguje pouze mezi kartami stejného původu v jednom
prohlížeči, odděleně pro každou místnost. Když se nepodaří načíst QR
knihovnu, zůstává k dispozici přímý odkaz; simulátor lze používat i bez telefonu.

Testy rozložení a ovládání využívají existující Playwright runner v `drill/`:

```bash
npm --prefix drill ci
npm --prefix drill exec -- playwright install chromium
npm --prefix drill run test:e2e -- usg-school.spec.js
```

## 4. ročník — klíčové mechanismy

Všech šest předmětů označených na rozcestníku jako 4. ročník má sekci
**Klíčové mechanismy k pochopení** přímo na své stránce. Ve výchozím stavu
je sbalená do kompaktního řádku, aby neposouvala kartičky daleko od záhlaví.
Seznam lekcí, výklad a interaktivní prvky se zobrazí až po rozkliknutí.
Sekce obsahuje celkem
36 původních českých lekcí (šest na předmět): vysvětlení mechanismu, postup
uvažování, důležité rozdíly, častou chybu, otázku pro vybavení a rozbalitelné
vysvětlení. Psychiatrie je obsahově a vzhledově aktualizovaná bez nové laboratoře.

| Předmět | Nový interaktivní prvek |
| --- | --- |
| Farmakologie | Receptorová laboratoř: koncentrace, EC50, Emax, kompetitivní a nepřekonatelný antagonismus, parciální agonismus |
| Dermatologie | Ambulance v čase: tři postupné kazuistiky, devět rozhodnutí a zdůvodnění každé možnosti |
| Kardiologie | Objemová laboratoř: EDV, ESV, frekvence, EF, tepový objem a výdej; srovnání malé a dilatované komory |
| Radiologie | Nastavení CT okna na syntetickém HU fantomu včetně předvoleb a číselné škály odstínů |
| Neurologie | Zorná pole při lézích nervu, chiasmatu, traktu, Meyerovy kličky a parietální radiace na obou stranách |

Rozhraní podporuje telefon i počítač, původní přepínače motivu, klávesnici,
textové alternativy diagramů a omezení animací. V nových lekcích lze hledat
i bez diakritiky a filtrovat vlastní označení „Ještě zopakovat“. Záložka
„Zdroje a limity“ vysvětluje výuková zjednodušení a odkazuje na podklady;
nejde o klinický rozhodovací ani dávkovací nástroj.

Původní okruhy, atlasy, kvízy, poznámky a Leitnerův systém zůstávají dostupné.
Nové sebehodnocení a poslední otevřená lekce používají samostatný localStorage
klíč `ctvrtak-v2:<složka-předmětu>`; jejich změna neznámkuje původní kartičky.
Chyba čtení či zápisu úložiště se zobrazuje přímo ve výukovém bloku.
Přímé odkazy `#v2-<id-lekce>`, `#v2-lab` a `#v2-sources` sekci automaticky
rozbalí na příslušném obsahu. Samotný `#study-v2` ji pouze označí na stránce.
Identifikátory a klíče úložiště zůstávají stejné kvůli kompatibilitě.
Nový blok je česky, včetně kardiologie; její původní španělská verze funguje
nezávisle.

Implementace je ve `ctvrtak/`: data jednotlivých předmětů v `courses/`,
rozhraní v `portal.mjs` a `portal.css`, laboratoře v `labs.mjs`,
výpočty v `models.mjs` a postupné případy v `skin-cases.mjs`.
Jde o statické ES moduly bez nových produkčních závislostí či build kroku.
Spouštějte přes HTTP (`npm start` nebo lokální statický server), nikoli
přímo přes `file://`. Tento blok nemění ani negeneruje obsah MedDrill PWA.

```bash
npm run test:ctvrtak
npm --prefix drill ci
npm --prefix drill exec -- playwright install chromium
npm run test:ctvrtak:e2e
```

První příkaz ověřuje obsah a matematické/anatomické invarianty modelů.
Prohlížečové testy používají existující Playwright konfiguraci a kontrolují
všech šest předmětů v šířkách 320, 390 a 1440 px, laboratoře, navigaci,
motivy, oddělené ukládání a dostupnost původního obsahu. Původní portály
nadále používají své externí knihovny; nový blok je na nich nezávislý.

## Build a testy

Hlavní repozitář obsahuje základní skripty:

```bash
npm test
npm run build
```

`npm run build` zajišťuje build specializovaných podaplikací pro klinický portál a urgentní příjem.

### Cloudflare Workers – nasazení z GitHubu

V Cloudflare Workers Builds zvolte produkční větev `main` a kořenový adresář
repozitáře. Build příkaz je `npm run build`, deploy příkaz `npx wrangler deploy`.
Nasazujte nový commit z této větve; opakování starého buildu použije jeho původní
soubory bez opravy.

Kořenový `wrangler.jsonc` nastavuje `assets.directory` na `.public-build`.
Build do tohoto adresáře připraví hlavní portál, předmětové weby včetně modulů
`ctvrtak/` a sestavené aplikace `clinical-learning-portal/` a `urgentni-prijem/`.
Wrangler proto při nasazení nemusí automaticky konfigurovat Vite.
Repozitář samotný není adresářem veřejných souborů.

Kontrola bez publikování:

```bash
npm run build
npx wrangler deploy --dry-run
```

Tento Worker obsluhuje statický web; Node/Express server `server.js`, funkce
`api/*` a přepisy z `vercel.json` se v něm nespouštějí. AI funkce vyžadující API
potřebují samostatný backend nebo adaptaci pro Workers. Konfigurace pro Vercel
zůstává v `vercel.json`. Chybějící stránky vracejí 404, protože portál obsahuje
více samostatných HTML aplikací.

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

## ARO — příprava k ústní zkoušce

Nový statický portál je na `/aro/` a v rozcestníku 5. ročníku. Obsahuje
55 otázek, losování jedné otázky z každého okruhu, časovač,
poznámky, sebehodnocení a export přípravy. A04 (komplikace celkové anestezie), A07 (regionální anestezie), A18 (dětská a novorozenecká KPR),
A20 (dýchací cesty), B04 (anafylaxe), B05 (krvácení), B06 (polytrauma), B11 (sepse), B12 (antibiotická léčba), B17 (ARDS), B18 (UPV), B19 (ABR), B20 (ionty a osmolalita), B21 (výživa), B22 (analgosedace), B23/B24 (levostranné a pravostranné srdeční selhání), B25 (plicní embolie), B26 (renální a jaterní selhání), B27 (akutní diabetologie), B28 (obecná toxikologie), B29 (vybrané intoxikace) a B30 (dětská obstrukce) mají zpracované
zkouškové odpovědi s citacemi a kontrolními otázkami. Pět tematických dodatků
je připojeno k sedmi otázkám (A04 a B11 už mají i odpověď); pět otázek má pouze
osnovu s dodatkem a ostatních 27 zatím obsahuje jen osnovu.
Pokrok se ukládá lokálně pod `aro-study-v1`. Portál nevolá AI ani placené API.

Stav a pokračování: [docs/ARO_HANDOFF.md](docs/ARO_HANDOFF.md).
Obsahový plán a zdroje: [docs/ARO_CONTENT_PLAN.md](docs/ARO_CONTENT_PLAN.md).

```bash
node --test test/aro.test.mjs
npm --prefix drill run test:e2e -- aro.spec.js
npm run build:public
```
