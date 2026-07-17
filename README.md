# Lékařský Studijní Portál

Lékařský Studijní Portál je interaktivní vzdělávací webová aplikace (rozcestník) primárně určená pro studenty 3. ročníku oboru Všeobecné lékařství (např. LF OU). Aplikace poskytuje komplexní nástroje pro studium, testování znalostí a sledování pokroku.

## Hlavní funkce

- **Rozcestník pro studium:** Přehledné rozdělení materiálů podle předmětů (Patologie, Patofyziologie, Farmakologie, atd.).
- **Interaktivní kvízy a testy:** Integrované kvízy vycházející ze strukturovaných datových souborů pro ověření znalostí.
- **Gamifikace:** Systém pro sledování postupu (XP, úrovně, streaks), který motivuje ke každodennímu studiu. Postup je ukládán na straně klienta (`localStorage`).
- **Generování PDF materiálů:** Python skript pro kompilaci studijních poznámek z Markdownu a LaTeXu do přehledných PDF dokumentů.
- **Gemini AI Asistent:** Integrace s Google Gemini API pro pokročilou nápovědu a interaktivní učení.
- **Modulární struktura:** Samostatné aplikace pro různé domény (klinický portál, urgentní příjem, atd.).

## Použité technologie

- **Frontend:** HTML5, CSS3, Vanilla JavaScript
- **Backend:** Express.js (`server.js`) pro lokální obsluhu a API integraci
- **AI Integration:** Google Gemini API
- **Nástroje:** Python (PDF kompilace, příprava dat)

## Struktura projektu

```
.
├── README.md                      # Tento soubor
├── package.json                   # Node.js závislosti
├── server.js                      # Express backend
├── index.html                     # Hlavní vstupní bod
├── app.js                         # Aplikační logika
├── style.css                      # Styly
├── compile_pdf.py                 # Python skript pro PDF generování
├── data_*.js                      # Datové soubory kvízů
├── clinical-learning-portal/      # Gemini AI studio aplikace
├── urgentní-příjem/               # Gemini AI studio aplikace
└── derma/                         # Materiály k dermatologii
    farmakologie/                  # Materiály k farmakologii
    ...                            # Další předmětové složky
```

## Instalace a spuštění

### Možnost 1: Pomocí Node.js / Express (Doporučeno)

Tato metoda spustí Express server, který obsluhuje aplikaci.

1. Ujistěte se, že máte nainstalovaný [Node.js](https://nodejs.org/).
2. Nainstalujte závislosti:
   ```bash
   npm install
   ```
3. Vytvořte soubor `.env` a nastavte konfiguraci (např. PORT):
   ```bash
   PORT=3000
   ```
4. Spusťte vývojový server:
   ```bash
   npm run dev
   ```
   nebo produkční server:
   ```bash
   npm start
   ```
5. Otevřete prohlížeč a přejděte na `http://localhost:3000`.

### Možnost 2: Pomocí Python HTTP Serveru

Pokud chcete pouze prohlížet frontendovou část bez backendu:

1. Ujistěte se, že máte nainstalovaný [Python 3](https://www.python.org/).
2. Spusťte server v kořenovém adresáři projektu:
   ```bash
   python3 -m http.server 8000
   ```
3. Otevřete prohlížeč a přejděte na `http://localhost:8000`.

## Spuštění Gemini AI aplikací

Projektu obsahuje dvě Gemini AI Studio aplikace v podsložkách:

### clinical-learning-portal/
```bash
cd clinical-learning-portal
npm install
npm run dev
```

### urgentní-příjem/
```bash
cd urgentní-příjem
npm install
npm run dev
```

Pro oba projektů je potřeba nastavit `GEMINI_API_KEY` v souboru `.env.local`.

## Příprava PDF materiálů

Pro zkompilování PDF ze zdrojových Markdown/LaTeX souborů spusťte:

```bash
python3 compile_pdf.py
```

*Poznámka: Tento skript může vyžadovat další závislosti (např. `pandoc`, `pdflatex`) a případnou úpravu cest uvnitř skriptu.*

## Gamifikace a uživatelský postup

Aplikace sleduje uživatelský postup pomocí:

- **XP (Experience Points):** Body za vyřešené kvízy a testy
- **Úrovně:** Postup na vyšší úrovně se zvyšujícími se XP
- **Streaky:** Sledování počtu po sobě jdoucích dní studia
- **Místní úložiště:** Veškerá data jsou uložena v `localStorage` prohlížeče

## Užitečné příkazy

```bash
# Instalace všech závislostí
npm install

# Spuštění vývojového serveru
npm run dev

# Spuštění produkčního serveru
npm start

# Generování PDF
python3 compile_pdf.py
```

## Příspívání

Příspěvky jsou vítány! Pokud chcete přispět:

1. Vytvořte fork projektu
2. Vytvořte feature branch (`git checkout -b feature/amazing-feature`)
3. Commitněte své změny (`git commit -m 'Add amazing feature'`)
4. Pushněte do branch (`git push origin feature/amazing-feature`)
5. Otevřete Pull Request

## Licence

Projekt je dostupný pod licencí MIT.

## Kontakt

Pro otázky a návrhy se prosím obraťte na správce projektu.
