# ARO — aktivní vybavování (1. 11. 2026)

## Zadání a rozpracování
- Samostatná část procvičování: single choice s vysvětlením, krátké doplnění (1–2 slova), nenávodné postupně odhalované kazuistiky.
- Plán banky: 55 single choice + 55 krátkých otázek (každý okruh zastoupen), 10 klinických případů s více kroky. Případy hodnotí uživatel podle kritérií, nikoli automatický odhad správnosti dávky.
- Náhodné pořadí možností i otázek. Distraktory podobné délky, bez „vše uvedené“. Zdroje se zobrazují až s vysvětlením.
- Doplnění: diakritika, velikost písmen, explicitní synonyma; velmi omezené překlepy. Čísla, jednotky a krátké zkratky bez fuzzy shody. Neznámou formulaci lze po porovnání ručně uznat.
- Osnova a vlastní příprava přesunuty do dvou zavřených details nad výkladem; uživatelské poznámky a hodnocení zachovat.
- Audit: nově doplněné výklady mají často jen 237–316 slov v hlavním těle. Obsah rozšířit podle mezer, nikoli jen splnit počet slov; zejména A02/A03/A09/A12/A17/A21, B02/B08/B09/B10/B14/B16.
- Ověřované primární podklady: ERC/RCUK 2025 ALS, ASRA LAST checklist 2020, EMHG 2024, RCH croup, evropské trauma 2023, ADA/EASD 2024.

Stav: implementováno a ověřeno; finální výsledky níže.

## Implementováno
- `aro/recall-bank.mjs`: 55 ručně napsaných SC + 55 doplnění, explicitní synonymní varianty, vysvětlení a klíče do společného registru zdrojů.
- `aro/recall-cases.mjs`: 10 fiktivních autorských případů × 3 kroky; anafylaxe, DKA, MH, LAST, trauma, croup, ALS, infekce CNS, iktus, vysoký neuraxiální blok. Zobrazuje se jen aktuální/již dokončený krok; diagnostický název až ve výsledku.
- `aro/recall-model.mjs`: Fisher–Yates pro úlohy i možnosti; přesná normalizovaná shoda, pak nejvýše jeden překlep/transpozice u slov ≥5 znaků. Čísla a krátké zkratky se fuzzy nehodnotí; významově nebezpečné záměny jsou blokované. Nejde o AI ani obecné sémantické porozumění.
- `aro/recall-ui.mjs`: samostatná navigace `#recall`, filtry, sady, feedback, výsledek, opakování chyb v právě dokončené sadě. `#recall-A09` předvybere téma. V jednom běhu nejsou duplicity. SC nelze změnit po odhalení.
- Kazuistiky mají volný text a sebehodnocení podle konkrétních bodů. Dávky, jednotky a pořadí léčby se automaticky nesoudí. Automatické skóre a sebehodnocení/ruční uznání jsou oddělené.
- `aro-recall-v1` uchovává poslední výsledek každé úlohy. Rozehraná sada a texty případů žijí jen v paměti do reloadu, což UI výslovně uvádí. Původní `aro-study-v1` a poznámky zůstaly beze změny.
- Dvě sbalená `<details>` nad výkladem: osnova a Moje příprava. Výklad má jeden čitelný sloupec, bez velkého postranního panelu.
- `aro/answers-depth.mjs` rozšiřuje 12 stručných odpovědí (A02/A03/A09/A12/A17/A21, B02/B08/B09/B10/B14/B16), po třech cílených odstavcích ve stávajících oddílech. Nepřidává výplň do kratších algoritmů BLS/START. Stávající kontrolní otázky zachovány.
- Kontrola délkové nápovědy: nejdelší správná možnost je pouze v 9/55 SC (16 %); polohy se míchají nezávisle. Nejde o psychometricky validovanou banku.

## Zdroje a rozsah ověření
Dávkové kroky znovu ověřeny 1. 11. 2026: RCUK anafylaxe (0,5 mg i.m. dospělý), ADA/EASD 2024 (K >3,5 před inzulinem, 0,1 a 0,05 j/kg/h), EMHG 2024 (dantrolen 2–2,5 mg/kg, max. 300 mg jednotlivá dávka), ASRA LAST checklist (20% lipidy, 1,5 ml/kg a 0,25 ml/kg/min), evropské trauma 2023 (TXA 1 g/10 min + 1 g/8 h do 3 h), RCH croup (nebulizovaný adrenalin, dexamethason, observace), ERC/RCUK ALS 2025. Odkazy jsou v registru `answerSources` a u konkrétního feedbacku. Přímý přístup k některým stránkám NICE vracel 403; část ověření vychází z oficiálních indexovaných výňatků a existujících zdrojovaných výkladů. Nové fyziologické rozvedení navazuje na místní skripta; nejde o nezávislou lékařskou revizi celého kurzu.


## Finální ověření
- 14/14 datových a logických testů (8 původních + 6 nových): pokrytí 55 témat, zdroje, správné možnosti, filtry, míchání, číselné a významové záměny, synonyma/překlepy, struktura případů a rozšířené výklady.
- 30/30 prohlížečových scénářů (21 původních + 9 nových): všechny původní odpovědi na 320 px; sbalené proužky a zachování poznámek; SC, short, manuální uznání, postupné případy, povinné sebehodnocení, opakování chyb, ukládání/jeho selhání a šířky 320/390/1440 px. První běh odhalil nesprávné předpoklady v testech (zavřené nastavení při nové sadě a nejednoznačný selektor čísla), opraveny; aplikace nepřestala fungovat.
- Finální logy `/tmp/aro-recall-unit-final.log`, `/tmp/aro-recall-browser-final.log`; původní scénáře také `/tmp/aro-recall-browser.log`.
- Místní náhled běží na 4174 z `.public-build`, zkontrolován přímo v uživatelově kartě. Veřejné nasazení ani commit se neprováděly. Testy neznamenají nezávislou medicínskou validaci banky.
- Obsahově ještě odstraněny snadno odhadnutelné distraktory založené na slově „pouze“ v B01/B15/B22/B26; správná možnost není systematicky nejdelší. Dlouhodobé vylepšování banky může vycházet z reálných chyb při procvičování.
