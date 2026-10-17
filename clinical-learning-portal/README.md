<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://ai.google.dev/static/site-assets/images/share-ais-513315318.png" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/510ec1a6-a714-48fb-a59d-d4524fe20087

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## Praktické základy anesteziologie

Kurz je na `/clinical-learning-portal/#essentials`, dostupný také z domovské
stránky, urgentního příjmu a UPV. Šest lekcí (`last`, `airway`, `blood-gas`,
`regional`, `inhalational`, `perioperative`) obsahuje výklad, postupy, rizika,
odkazy na odborné podklady a celkem 17 kazuistik v češtině a angličtině.
Přímý odkaz například: `/clinical-learning-portal/#essentials/blood-gas`.

Obsah je v `src/data/essentials.ts`, UI v `src/components/EssentialsModule.tsx`.
První odpovědi se ukládají do `localStorage` pod klíčem
`anesthesia_essentials_progress`; opakování vymaže jen odpovědi dané lekce.
Verze obsahu umožňuje rozpoznat zastaralý pokrok. Při neplatných datech nebo
nedostupném úložišti se zobrazí upozornění, nikoli falešné potvrzení uložení.

Kurz je výukový přehled pro dospělé, nikoli certifikace, kompletní specializační
příprava či náhrada supervize a praktického nácviku. Nebyl srovnán s Propofolks
ani externě klinicky schválen. Před klinickým použitím je nezbytná odborná revize
a ověření aktuálních doporučení a lokálních protokolů. Datum verze není datem
externí odborné revize.

### Sestavení a odvozené otázky

`app.html` je stabilní zdrojový vstup Vite. `index.html` může být publikovaný
build, proto se nesmí znovu používat jako zdroj sestavení. Vývojový server
přesměruje `/` na `/app.html`; produkční build vytvoří `dist/index.html`.

```sh
npm run sync:content
npm run lint
npm test
npm run build
```

`sync:content` aktualizuje anesteziologické otázky v MedDrill, dvě bezpečnostní
otázky z `urgentni-prijem/otazky_ze_hry.ts`, nový kurz a hash/revizi urgentního
modulu. Zachovává ostatní otázky i jejich ID. Poté přegeneruje otázky
studijního pomocníka ze stejné české banky. Spouští se i při buildu klinického
portálu; ručně neupravujte odvozené JSON/JS soubory. Příkaz kořenového
`build:drill` potřebuje instalované závislosti klinického portálu a také
synchronizuje tyto otázky.

Pro publikování statické kopie obou portálů používá repozitář kořenový
`npm run build`. Prohlížečové testy spouštějte až nad aktualizovanými
publikovanými kopiemi:

```sh
npm --prefix drill run test:e2e -- anesthesia-essentials.spec.js
```

Testy pokrývají přímé odkazy, všech 17 odpovědí, ukládání/reset, oba jazyky,
mobilní rozložení, chyby úložiště, oddělené indikace sugammadexu a studijní
(nikoli atestační) hodnocení. Klinickou správnost nenahrazují.
