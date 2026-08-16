# Bezpečnostní audit — 8. 8. 2026

## Opraveno

### Kritické: veřejně vydávaný „tajný“ token

`/api/config` vracel hodnotu `CLIENT_TOKEN` přímo prohlížeči a klient ji pak
posílal v hlavičce `Authorization`. Každý návštěvník si proto mohl token přečíst
a ochranu API napodobit. Endpoint byl vyřazen, klientská závislost odstraněna a
server nyní chrání veřejně dostupné AI API limitem požadavků a validací vstupů.

### Vysoké: náklady a DoS přes AI endpointy

Veřejné endpointy přijímaly neomezené JSON body a některé vedly přímo k placeným
voláním Gemini. Přidán je limit těla 64 KiB, maximálně 30 chatových zpráv po
4 000 znacích, limit 10 chatových volání/IP/minutu a společný limit 60 API
volání/IP/minutu. Opravy jsou v `server.js` a `api/chat.js`.

### Střední: předvídatelné ID relace

Relace simulátoru vznikala přes `Math.random()` se zhruba 36 bity entropie.
Nyní se vytváří pomocí `crypto.randomUUID()`.

### Střední: chybějící základní HTTP ochrany

Server nyní posílá `X-Content-Type-Options: nosniff`,
`Referrer-Policy: strict-origin-when-cross-origin` a `X-Frame-Options:
SAMEORIGIN`.

## Zjištění vyžadující nasazovací rozhodnutí

1. Limity v paměti serverless instance nejsou globální a při škálování je lze
   obejít. Před produkčním provozem s placeným Gemini API nastavte perzistentní
   limit na hraně (např. Vercel WAF/Firewall) nebo Redis/Upstash. Toto je
   nejdůležitější zbývající riziko zneužití nákladů.
2. Kontroly `Origin`/`Referer` nejsou autentizace — hlavičky lze mimo prohlížeč
   podvrhnout. Slouží jen jako doplňková ochrana pro prohlížeče.
3. `urgentni-prijem/server.ts` a klientské skripty `radiolka/app.js` a `farmakologie/app.js`
   byly analogicky upraveny (odstranění závislosti na `/api/config` a nasazení `crypto.randomUUID()`).
4. Aplikace renderuje obsah přes `innerHTML` na více místech. U hlavního chatu
   je Markdown před vložením escapovaný; u obsahu studijních dat je bezpečnost
   závislá na tom, že data jsou důvěryhodná. Uživatelsky upravitelné nebo
   vzdálené hodnoty se do těchto míst nesmí dostat bez sanitizace.

## Ověření a nasazení

Zdrojové změny byly staticky zkontrolovány a ověřeny proti API kontraktu.
Pracovní strom byl inicializován a propojen se vzdáleným repozitářem `kintrovaviolka-dev/verysadanyway`.
Všechny klientské závislosti na `/api/config` a `CLIENT_TOKEN` byly kompletně odstraněny
ze všech submodulů projektu (`app.js`, `radiolka/app.js`, `farmakologie/app.js`, `PatientSimulator.tsx`).
