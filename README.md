# Lékařský Studijní Portál

Lékařský Studijní Portál je interaktivní vzdělávací webová aplikace (rozcestník) primárně určená pro studenty 3. ročníku oboru Všeobecné lékařství (např. LF OU). Aplikace studentům usnadňuje přípravu na zkoušky a zápočty z klíčových předmětů jako je Patologie (Patola), Patofyziologie (Patfyz) a Ošetřovatelství.

## Hlavní funkce

*   **Rozcestník pro studium:** Přehledné rozdělení materiálů podle předmětů (Patologie, Patofyziologie, Farmakologie, atd.).
*   **Interaktivní kvízy a testy:** Integrované kvízy (vycházející ze souborů jako `data_pathology.js`, `data_pathology_zapocet.js`, `data_patfyz_bridge.js`) pro ověření znalostí.
*   **Gamifikace:** Systém pro sledování postupu (XP, úrovně, streaks), který motivuje ke každodennímu studiu. Postup je ukládán na straně klienta (`localStorage`).
*   **Generování PDF materiálů:** Projekt obsahuje Python skript (`compile_pdf.py`), který umožňuje kompilaci studijních poznámek z Markdownu a LaTeXu do přehledných PDF dokumentů.
*   **Gemini Asistent:** Aplikace je navržena pro integraci s AI asistentem pro pokročilou nápovědu.

## Použité technologie

*   **Frontend:** Čistý HTML5, CSS3, Vanilla JavaScript (aplikace nefunguje přes žádný komplexní build systém jako Webpack/Vite).
*   **Backend:** Express.js (`server.js`) pro lokální obsluhu a případnou integraci API (např. pro AI asistenta).
*   **Nástroje:** Python (skript `compile_pdf.py` a další nástroje pro přípravu dat).

## Instalace a spuštění

Projekt nevyžaduje komplexní instalaci. Pro spuštění v lokálním vývojovém prostředí existují dva hlavní způsoby:

### Možnost 1: Pomocí Node.js / Express (Doporučeno)

Tato metoda spustí Express server, který obsluhuje soubory.

1.  Ujistěte se, že máte nainstalovaný [Node.js](https://nodejs.org/).
2.  Nainstalujte závislosti:
    ```bash
    npm install
    ```
3.  Spusťte vývojový server příkazem pro dev skript z package.json nebo produkční pomocí start skriptu (node server.js).
4.  Otevřete prohlížeč a přejděte na adresu (obvykle `http://localhost:3000` nebo port specifikovaný v `.env`).

### Možnost 2: Pomocí Python HTTP Serveru (Jednoduché spuštění frontendu)

Pokud chcete pouze prohlížet frontendovou část, můžete využít vestavěný HTTP server v Pythonu.

1.  Ujistěte se, že máte nainstalovaný [Python 3](https://www.python.org/).
2.  Spusťte server v kořenovém adresáři projektu příkazem `python3 -m http.server 8000` (doporučujeme na pozadí).
3.  Otevřete prohlížeč a přejděte na `http://localhost:8000`.

## Příprava PDF materiálů

Pro zkompilování PDF ze zdrojových Markdown/LaTeX souborů spusťte:
```bash
python3 compile_pdf.py
```
*(Poznámka: Tento skript může vyžadovat další závislosti a úpravu cest uvnitř skriptu.)*

## Struktura projektu

*   `index.html` - Hlavní vstupní bod aplikace.
*   `app.js` - Hlavní aplikační logika (gamifikace, UI interakce).
*   `style.css` - Kaskádové styly.
*   `server.js` - Express backend.
*   `data_*.js` - Soubory obsahující data kvízů.
*   `compile_pdf.py` - Nástroj na generování PDF.
*   `derma/`, `farmakologie/` - Složky obsahující materiály k daným oborům.
