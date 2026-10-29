# ARO — průběžný stav a předání

Aktualizace: 2026-10-29. Zadání: nový český miniportál k ústní zkoušce LF OU,
podobný farmakologii/dermatologii, s nově ověřovaným obsahem. Uživatel výslovně
žádá průběžnou dokumentaci pro pokračování jiným agentem.

## Zadání a rozhodnutí
- Uživatel 29. 10. výslovně chce postupně dopracovat všechny osnovy; pokračovat po menších dávkách, včetně pěti otázek dosud pouze s dodatkem.
- Jedna losovaná otázka z každého bloku (uživatel potvrdil).
- `aro_materialy/skripta.md`: seznam 25 otázek A + 30 otázek B na řádcích 1–110.
- Zatím nečíst celou knihovnu PDF/DOCX. Skripta jsou zdroj struktury, nikoli autorita pro aktuální terapii.
- Nový statický modul `/aro/`, bez závislostí a bez AI poplatků; propojit s hlavním rozcestníkem a veřejným buildem.
- Rozlišovat úplnost odpovědi, rozsah ověření a uživatelovo sebehodnocení. Neoznačovat celý kurz jako aktualizovaný.
- Začít mapou všech 55 otázek a konkrétními revidovanými moduly. Zbytek transparentně označit jako pracovní osnovy.
- Žádný deployment nebyl požadován.

## Nálezy
- Skripta ř. 1863–1973: endotracheální podání léků, atropin u asystolie/PEA,
  desetinásobná eskalace dětského adrenalinu. Nepřebírat do aktivních odpovědí.
- Skripta ř. 111 a dále: plošná laboratorní a věkově indikovaná RTG vyšetření.
- ERC 2025: https://www.erc.edu/science-research/guidelines/guidelines-2025/guidelines-2025-english
- PONV: Fifth Consensus Guidelines, DOI 10.1213/ANE.0000000000007816;
  online 2025-11-14, časopisecky 2026-09-01. Nezaměňovat s čínským konsenzem 2025.
- SCCM má již SSC adult 2026; nenazývat 2021 poslední verzí.

## Aktuální stav (po kontrole 30. 10. 2026)
- 55 otázek: **23 zpracovaných odpovědí (A04, A07, A18, A20, B04, B05, B06, B11, B12, B17, B18, B19, B20, B21, B22, B23, B24, B25, B26, B27, B28, B29, B30)**, 5 pouze s dodatkem,
  27 zatím pouze s osnovou. B27/B28/B29 doplněny 30. 10. 2026.
- Celý blok B17–B30 (intenzivní péče a urgentní stavy) je nyní kompletně zpracován.
- `aro/answers.mjs`: nové souvislé odpovědi a registr primárních zdrojů.
- Každá odpověď má úvod k ústní, pět až sedm částí výkladu, opravy skript,
  tři kontrolní otázky, vymezený rozsah a citace ke každé části.
- UI rozlišuje zpracovanou odpověď / dodatek / osnovu; filtr odpovědí,
  dynamický počet a pokrytí. Výklad je dostupný i při odhalení v losování.
- Uložení pokroku a ID otázek se nemění. Následují právní/etické otázky (A23–A25), anesteziologie (A01–A14) a zbývající otázky B (B01–B03, B07–B10, B13–B14).
- Historické záznamy prvního průchodu níže jsou jen historie.

## Cizí změny — zachovat
Při zahájení byl pracovní strom rozpracovaný: .env.example, .gitignore,
package.json, server.js, vercel.json, clinical-learning-portal (včetně dist),
api/patient*, private-patient/* a import/test skripty. Nepřepisovat a nevracet.
`aro_materialy/` je nesledovaná složka uživatele, nepublikovat celé podklady.

## Implementováno v prvním průchodu
- `aro/index.html`, `style.css`, `app.mjs`: responzivní statický portál, motiv,
  hledání bez diakritiky, filtry, detaily `#A01`…`#B30`, losování A+B,
  skryté osnovy, časovač podle skutečného času, poznámky a sebehodnocení,
  Markdown export, obsluha chyb localStorage.
- `aro/questions.mjs`: všech 55 názvů z úvodního seznamu + autorské osnovy.
- `aro/lessons.mjs`: 5 stručných zdrojovaných dodatků (preop, BLS, ALS,
  PONV, sepse), připojeno k A01/A04/A08/A15/A16/A17/B11. Nejde o úplné
  vypracování těchto sedmi otázek. 48 ostatních má pouze osnovu.
- `aro/model.mjs`: čisté funkce losování, filtrace a validace uloženého stavu.
- `index.html`, `app.js`: karta ARO a odkaz na nový modul.
- `scripts/build_public.cjs`: `aro` v allowlistu veřejných assetů; materiály
  `aro_materialy` ani `docs` se nezveřejňují.
- `test/aro.test.mjs`, `drill/e2e/aro.spec.js`: datové a prohlížečové testy.

## Probíhající validace
- 5/5 Node testů prošlo.
- `npm run build:public` prošel, využil již existující dist ostatních aplikací.
- Playwright nejprve blokován sandboxem při otevření portu; opakován s
  povoleným lokálním serverem. Výsledek doplnit po dokončení.

## Závěr ověření prvního průchodu
- 5/5 datových testů, 8/8 prohlížečových scénářů prošlo (poslední scénář
  přechodu z rozcestníku spuštěn samostatně). Šířky 1440, 390 a 320 px,
  bez horizontálního přetékání a bez JS výjimek na ARO.
- Vizuálně prohlédnuty screenshoty `/tmp/aro-1440.png` a `/tmp/aro-320.png`.
- Ukládání po reloadu, ošetření blokovaného úložiště, bezpečné zobrazení
  poznámek, export, skrytí osnov, časovač/pauza/konec a tmavý motiv ověřeny.
- Hlavní rozcestník → 5. ročník → ARO funguje i klávesou Enter.
- Build veřejných souborů prošel. Kompletní build ostatních aplikací se
  znovu nespouštěl; použity jejich již existující dist.
- Lokální náhled: http://127.0.0.1:4174/aro/ (Python server nad `.public-build`,
  pouze loopback; jeho životnost závisí na běžící relaci). Pro obnovu:
  `npm run build:public` a `python3 -m http.server 4174 --bind 127.0.0.1 --directory .public-build`.
- Nasazení ani git commit neprovedeny.
- Globální `git diff --check` hlásí existující whitespace v cizích změnách
  AnesthesiaModule.tsx. Nové změny ARO tím dotčeny nejsou.

## Navázání pro dalšího agenta
1. Přečti tento soubor a `docs/ARO_CONTENT_PLAN.md`, poté `aro/lessons.mjs`.
2. Není nutné znovu pročítat všechny podklady. Úvodní seznam je už ve
   `aro/questions.mjs`; pracovní osnovy nejsou hotové odpovědi.
3. Dokončuj obsah po tematických dávkách podle priorit v obsahovém plánu.
   A04, A07, A18, A20, B04 a B30 už mají odpovědi. Pokračuj B05/B06 (krvácení a trauma), pak B11/B12; každou dávku zdrojuj.
4. Před změnami ověř aktuální git status a zachovej ostatní rozpracovanou práci.
5. Po změně logiky spusť příslušné testy, po změně obsahu validaci dat,
   aktualizuj dokumentaci a veřejný build pro lokální náhled.

Historický stav prvního průchodu: 55 osnov, 5 stručných dodatků / 7 otázek,
0 zpracovaných odpovědí. Aktuální stav je uveden nahoře.

## Druhý průchod — obsah dokončen (26. 10. 2026)
Uživatel požádal pokračovat ve zpracování obsahu. Doplněny souvislé
zkouškové odpovědi A18 (PLS/NLS) a B04 (anafylaxe), se sekčními citacemi,
kontrolními otázkami a opravami skript. Nový stav
„zpracovaná odpověď“ je oddělen od původních tematických dodatků.

Ověřené nuance: ERC PLS 2025 prakticky opakuje adrenalin po 4 min;
NLS ERC 10–30 mikrogramů/kg intravaskulárně, RCUK implementace volí 20.
PLS a NLS nemají stejné dávkování ani poměr komprese/ventilace. Endotracheální
adrenalin je nouzová možnost NLS, zákaz z dospělého ALS nezobecňovat.
RCUK uvádí jako poslední samostatnou guideline anafylaxe stále květen 2021,
na ni odkazuje i guidance 2025. NICE NG258 2026 nalezeno, ale plné stránky
vracejí 403; konkrétní nové observační intervaly nelze vydávat za přečtené.


### Soubory a ověření druhého průchodu
- Nový `aro/answers.mjs`; změny `aro/app.mjs`, `model.mjs`, `index.html`,
  `style.css`; rozšířené datové a browser testy. Žádná další závislost.
- `contentStatus(q)` určuje stav podle registru odpovědí a `lessonIds`.
  Počet odpovědí a rozdělení osnov se počítají, nejsou ručně napsané v HTML.
- 7/7 Node testů prošlo; veřejný build prošel. Browser výsledek níže.
- Léčebná doporučení ověřena proti primárním zdrojům; neproběhla nezávislá
  lékařská revize. Označení „zpracovaná“ znamená rozsah odpovědi, nikoli garanci.
- Plný text NICE NG258 nešel otevřít. Nové přesné propouštěcí intervaly nejsou
  v odpovědi uvedeny. Je popsán obecný přístup podle dostupného RCUK.
- Druhý průchod dokončen: 10/10 Playwright scénářů prošlo; spolu s datovými
  testy 17/17. Nové scénáře ověřují zdroje/sekce, kontrolní otázky na 320px,
  filtr odpovědí a deterministicky vylosovanou A18 se skrytým výkladem.
- Vizuálně ověřen `/tmp/aro-answer-mobile.png`. Build aktualizován.
- Původní náhled na 4174 stále běží. První curl byl omezen sandboxem;
  ověření s povoleným přístupem uspělo. HTTP obsah answers.mjs je byte-for-byte
  shodný s aktuálním souborem. Nový server nebylo třeba spouštět.


## Třetí průchod — obsahová kontrola a zkrácení úvodu (28. 10. 2026)
- Zadání: znovu obsahově projít portál a odstranit nadbytečný motivační úvod.
- Pročteno všech 55 pracovních osnov. Jsou to tematické body, nikoli 55
  klinicky ověřených odpovědí. Číslování a rozsah zůstávají stejné.
- Proti primárním zdrojům znovu kontrolovány A18, B04 a všech pět dodatků.
  Podrobné nálezy jsou v ARO_CONTENT_PLAN.md; odkazy zůstávají u sekcí výkladu.
- A18: explicitní nereagování a nejvýše 10 s hodnocení dýchání, hloubka
  kompresí adolescenta, priorita KPR před odchodem osamělého zachránce pro AED.
  Oddělené dávky adrenalinu a amiodaronu po třetím výboji, podmínky CPAP/PEEP,
  titrace O₂, preference UVC a intravaskulární dávka po nouzovém ET adrenalinu.
- B04: výjimka z diagnostického kritéria izolovaného bronchospasmu dle WAO;
  dospělá populace u tekutinového bolusu; jednoznačné rozlišení dávkování
  při zachovaném oběhu a při zástavě. Nové propouštěcí intervaly nepřidány.
- ALS: opraven zavádějící název „dva rytmy“, explicitní i.v./i.o. cesta.
  Sepse: doplněno, že kultury nemají významně zdržet antibiotika.
- UI: kompaktní hlavička místo hero a dekorativní dvojice; odstraněny slogany
  nad sekcemi a panel „malý studijní rituál“. Preferovat tento věcný tón i dál.
- 7/7 datových a 10/10 Playwright testů prošlo. Vizuálně zkontrolován mobil
  320 px; screenshot /tmp/aro-320.png. Veřejný build aktualizován.
- Neproběhla nezávislá lékařská revize ani deployment. Pokračovat dle priorit
  A20/B30; tento průchod nepřidal nové zpracované otázky.


## Čtvrtý průchod — A20/B30 (28. 10. 2026)
- Přidány dvě odpovědi, každá s pěti sekcemi, třemi kontrolními otázkami,
  opravami skript a zdroji u každé sekce. Stav nyní 4 odpovědi / 7 dodatků / 44 osnov.
- A20: základní pomůcky, plánování a bdělá intubace, DAS 2025 A–D, poranění
  krční páteře podle multi-society 2024, kapnografie a návazná péče.
- B30: rozpoznání obstrukce, croup, epiglotitida a diferenciální diagnostika,
  cizí těleso dle ERC/RCUK 2025, dětské zajištění dýchacích cest.
- Přečteny jen odpovídající pasáže skript (A20 ř. 2025–2093, B30 ř. 5846–5947).
  Nepřebírat zavěšení kojence za nohy, rutinní sedaci při laryngitidě,
  potvrzení intubace jen poslechem ani univerzální nazální vzduchovod při
  maxilofaciálním traumatu. Názvy a číslování zůstaly beze změny.
- Rozsah B30 výslovně odděluje astma B16, anafylaxi B04 a KPR A18; tonutí
  a praktická technika dětského invazivního přístupu nejsou vypracovány.
- Dávky croup vycházejí z konkrétního RCH postupu (těžký: dexamethason
  0,6 mg/kg max 12 mg; život ohrožující: adrenalin 5 ml 1 mg/ml nebulizovaně).
  Nezaměňovat se starší RCH obecnou upper-airway stránkou s jiným maximem.
- Podrobnosti dostupnosti zdrojů a další pořadí: ARO_CONTENT_PLAN.md.
- Ověření dokončeno: 7/7 datových testů a 11/11 Playwright scénářů prošlo.
  Veřejný build prošel; mobilní B30 vizuálně zkontrolována na
  /tmp/aro-B30-mobile.png. Scoped diff --check čistý. Bez deploymentu.


## Pátý průchod — A04/A07 (28. 10. 2026)
- Nové odpovědi A04 a A07, každá 6 sekcí a 3 kontrolní otázky. Číslování beze změny.
- A04: respirační a oběhové komplikace, anafylaxe, maligní hypertermie,
  reziduální blokáda, probouzení. Původní doplněk PONV zůstává připojen.
- A07: lokální anestetika/adjuvancia, rozpoznání a léčba LAST, vysoký blok,
  kompresivní neurologické komplikace, antitrombotika a postpunkční bolest hlavy.
- Nové zdroje v answerSources: EMHG 2024, ASRA LAST 2020, ASA NMB 2023,
  OAA 2024, ASA neuro 2023, ASRA antitrombotika 2025, multisociety PDPH,
  AoA QRH a SmPC. Verze a omezení jsou uvedené v obsahovém plánu.
- Důležité: dantrolen v mg/kg versus lipid v ml/kg; dávkování LAST se liší
  od standardního ALS. MH není definována horečkou a jejím spouštěčem nejsou
  automaticky všechna relaxancia. Kontrola síly ruky nenahrazuje kvantitativní TOF.
- Pokrytí je nyní 6 odpovědí + 6 otázek pouze s dodatkem + 43 osnov.
  Samotný filtr „Se zdrojovaným dodatkem“ vrací stále 7: zahrnuje také A04.
  Počty nejsou rozbité; contentStatus dává přednost odpovědi. UI nyní skloňuje počty.
- Zatím nejde o kompletní krizové protokoly ani nezávislou lékařskou revizi.
- Ověření dokončeno: 7/7 datových a 12/12 Playwright testů prošlo.
  Nový scénář kontroluje A04 s PONV, A07 na 320 px a A07 v losování
  se skrytým výkladem a zachovanými poznámkami. Vizuálně ověřen screenshot
  /tmp/aro-LAST-mobile.png. Veřejný build i scoped diff --check prošly.
  Bez deploymentu; lokální náhled používá aktualizovaný .public-build.


## Šestý průchod — B05/B06 (29. 10. 2026)
- Stav: **8 odpovědí / 6 otázek pouze s dodatkem / 41 osnov**. Filtr dodatků stále 7.
- B05: rozpoznání krvácení, hemostáza, transfuzní tým, cíle tlaku podle poranění CNS,
  TXA a fibrinogen pro dospělého po úrazu; samostatně hranice použití TXA v GIT.
- B06: definice, xABCDE, primární a opakované vyšetření, stabilita před zobrazením.
  Každá odpověď má 5 sekcí, 3 otázky a opravy skript; ID a losování se nemění.
- Skripta čtena cíleně ř. 2918–3065. U B05 je léčba nedopsaná (????), u B06
  nepřebíráme pevná epidemiologická procenta ani ISS jako jedinou definici.
- Primární zdroje: evropské krvácení 6. vydání 2023 (dávky/cíle), NICE NG39 2016
  (indexovaný text; přímé otevření vrací 403), RCUK First Aid 2025, původní
  Berlínský konsenzus 2014, oficiální oznámení ACS o ATLS 11 2025 (jen xABCDE,
  ne celý manuál). BSG/ACPGBI 2026 ověřeno v indexovaném plném textu stanoviska.
- BSH veřejný souhrn 2022, stránka revize 2025: pouze organizace péče. UHS místní
  postup 2022 používáme pro základní vyšetření; starší dávkové protokoly ani
  lokální cíle neuroresuscitace z něj nepřebíráme. Starší datum samo neznamená
  neplatnost; verze jsou v portálu viditelné. Nejde o nezávislou lékařskou revizi.
- Další dávka B11 (sepse a septický šok) / B12 (adekvátní antibiotická léčba
  těžkých infekcí). Doplněk sepse již existuje; zachovat rozlišení dodatku
  a úplné odpovědi. Poté pokračovat zbývajícími osnovami, včetně UPV/ARDS.
- Ověření: 7/7 datových testů; 12/13 prohlížečových napoprvé, poslední
  prošel po opravě starého očekávaného počtu 6 → 8. Nový scénář B05/B06 prošel.
  Mobilní screenshot /tmp/aro-trauma-mobile.png vizuálně ověřen. Veřejný build
  a scoped diff --check prošly. Bez deploymentu.


## Sedmý průchod — B11/B12 (29. 10. 2026)
- Aktuálně **10 odpovědí / 5 otázek pouze s dodatkem / 40 osnov**.
  B11 má odpověď i původní doplněk sepse; filtr dodatků stále vrací 7 otázek.
- B11: Sepsis-3, rozpoznání, odběry, čas ATB, kontrola zdroje, individualizace
  tekutin, noradrenalin a další vazopresory, kortikosteroidy. B12: výběr podle
  ložiska a rezistence, PK/PD, nasycovací dávka, TDM, délka a převod na p.o.
- Skripta čtena cíleně: B11/B12 ř. 3745–3870. Opravy: infekční SIRS není
  aktuální definice; masivní tekutiny bez ohledu na přetížení nejsou cíl;
  dopamin není rovnocenná první volba; délka ATB/antimykotik není paušální.
- Ověřeno SSC 2026 na veřejné stránce SCCM s doporučeními. IDSA AMR stránka
  nyní obsahuje vydání **2026**, nahrazující starší verze; podklady k 1. 3. 2026.
  Použity obecné principy, nikoli americká empirická schémata pro české oddělení.
- Další zdroje: původní Sepsis-3 2016, CDC odběr hemokultur, SCCM kortikosteroidy
  2024 (běžný režim 200 mg hydrokortizonu/den, ne jediný povinný režim),
  multisociety PK/TDM 2020, vankomycinový konsenzus 2020, IDSA kandidémie 2016.
  TDM 2020 ověřeno z indexovaného textu PMC a tabulky PDF ESCMID; přímé PMC
  otevření vracelo CAPTCHA, Springer poskytoval jen abstrakt. Vankomycin má
  vlastní specifický zdroj pro AUC, nepřebíráme starší trough cíle z obecného TDM.
- B11 výslovně omezuje rozsah na dospělé a časnou léčbu; podrobné orgánové
  protokoly zbývají. B12 není předpis konkrétních ATB pro každé ložisko.
  Zkouškové odpovědi nemají nezávislou lékařskou revizi.
- Ověření: 7/7 datových a 14/14 prohlížečových testů prošlo; nový scénář ověřuje
  B11 s dodatkem, B12 na mobilu a v losování včetně skrytého výkladu a poznámek.
  Veřejný build a scoped diff --check prošly. Screenshot /tmp/aro-antibiotics-mobile.png.
  Bez deploymentu, lokální náhled je aktualizovaný.
- Další doporučená dávka: B17 (ARDS) / B18 (UPV). Přečíst příslušné pasáže skript,
  ověřit aktuální definici a doporučení a pokračovat stejným zdrojovaným formátem.


## Osmý průchod — B17/B18 (29. 10. 2026)
- Stav **12 odpovědí / 5 pouze s dodatkem / 38 osnov**. Cíl uživatele je postupně
  dopracovat všech 55 otázek, nikoli ponechat osnovy jako finální stav.
- B17: globální definice ARDS, rozdíl od Berlína, P/F a HFNO, protektivní
  ventilace, pronace, kortikosteroidy, VV-ECMO a NMBA dle SCCM 2026.
- B18: indikace, AC/PCV/PSV/CPAP, PBW a příklad VT, tlaky, auto-PEEP,
  alarmy, péče o rourku a odvykání se SBT. Každá odpověď 5 sekcí + 3 otázky.
- Skripta cíleně ř. 4409–4582. Nepřebírat povinný tlak v zaklínění, tvrzení
  o prevenci jako jediné účinné terapii, pevný VT 500 ml a záměnu SBT/extubace.
- Hlavní zdroje: globální definice 2023/2024 (workshopový konsenzus, ne shodná
  populace se staršími studiemi), ATS 2024, ESICM 2023, SCCM NMBA 2026,
  AARC assessment a SBT 2024, SRLF/SFMU 2024. NMBA podmíněně při P/F <150
  a přetrvávající hypoxemii nebo nedosažení cílů při sedaci; není povinné u všech.
- Základní mechanismy režimů ověřeny v indexovaném ATS primeru 2021; jeho URL
  přesměrovává, proto veřejná citace míří na dostupné AACN výukové PDF. Z něj
  nepřebíráme starší hranice PEEP či doporučení inverse-ratio jako léčbu ARDS.
  Vanderbilt slouží k výkladu mechaniky/alarmů; AARC/UHC k bezpečnosti;
  ARDSNet FACTT k PBW a VT, výslovně historický protokol, ne nová guideline.
- Přímé PMC ARDS vracelo CAPTCHA, použity dostupné indexované originální texty;
  SCCM 2026 a AARC SBT přímo přečteny. Nejde o nezávislou klinickou revizi.
- 7/7 datových a 15/15 Playwright testů prošlo. Mobilní screenshot
  /tmp/aro-ventilation-mobile.png vizuálně ověřen. Build a scoped diff --check
  čisté. Bez deploymentu; aktualizován lokální veřejný build.
- Další dávka B19 (acidobazická rovnováha) / B20 (ionty a osmolalita).
  Pak pokračovat ostatními osnovami a nakonec dokončit i otázky pouze s dodatkem.


## Devátý průchod — B19/B20 (29. 10. 2026)
- Stav **14 odpovědí / 5 pouze s dodatkem / 36 osnov**. Cíl zůstává všech 55 odpovědí.
- B19: čtyři procesy, kompenzace versus smíšená porucha, Winterův vzorec,
  AG korigovaný na albumin, příklady a léčba příčiny. 5 sekcí + 3 otázky.
- B20: tonicita, symptomatická hyponatremie a limity korekce, hypernatremie,
  K, Mg a Ca. 7 sekcí + 3 otázky. Dávky vždy s koncentrací, cestou a kontextem.
- Skripta cíleně B19/B20 (ř. 4583–5000); opraveny záměny kompenzace/smíšené
  poruchy, buněčné dehydratace/edému a neškodné hyperkalemie při acidóze.
- UKKA má aktualizaci **červenec 2026**: použita pro akutní hyperkalemii,
  včetně ekvivalentních dávek Ca, inzulinu/glukózy a následné monitorace.
- Další zdroje: SRLF/SFMU 2019, BICARICU-2 2025 (bez přínosu pro primární
  mortalitní výsledek), evropská hyponatremie 2014, Society for Endocrinology
  symptomatická hyponatremie 2022, CDI 2018, Ca 2016/dodatek 2019; NHS SPS
  K/Mg 2024. Merck je autorský klinický výklad, NHS hypernatremie místní postup,
  produktová informace Mg slouží pouze k toxicitě. Neoznačovat všechny zdroje
  za nové společenské guidelines. Přímý přístup některých PDF/PMC byl omezen;
  použity indexované originální texty. Bez nezávislé lékařské revize.
- Další dávka: **B21 výživa / B22 analgosedace**, poté další osnovy a nakonec
  otázky dosud pouze s dodatkem. ID, losování a uložený pokrok zachovány.
- Ověření: 7/7 datových a 16/16 prohlížečových testů prošlo. Veřejný build
  a scoped diff --check čisté. Mobilní snímek /tmp/aro-electrolytes-mobile.png
  ověřen; bez deploymentu, aktualizován lokální veřejný build.


## Desátý průchod — B21/B22 (29. 10. 2026)
- Stav **16 odpovědí / 5 pouze s dodatkem / 34 osnov**. Pokračovat až k úplným 55.
- B21: hodnocení rizika bez záměny albuminu za malnutrici, EN/PN, kalorimetrie,
  postupné cíle, bilance a refeeding. B22: bolest/RASS/delirium, analgezie před
  sedací, rizika léčiv, PADIS 2025, CAM-ICU a ABCDEF. Každá 5 sekcí + 3 otázky.
- Skripta cíleně od nadpisu B21 (ř. 4945) po konec B22: zejména nepřebírat
  vodu 100–150 ml/kg/den, albumin jako izolovaný marker výživy a plošný cíl
  amnézie či kontinuální sedace. Ramsay nenahrazuje hodnocení bolesti/deliria.
- Zdroje: ESPEN praktická revize 2023 (veřejné PDF), ESICM EN 2017,
  ASPEN albumin 2021 a refeeding 2020, NICE CG32 (indexovaný původní text;
  přímá stránka 403). Refeeding příklad NICE je označený specifickým rizikem;
  thiamin/monitorace a těžké deficity podle ASPEN. Nejde o univerzální ICU dávku.
- PADIS 2018 doplněno cílenou aktualizací 2025: dexmedetomidin podmíněně při
  prioritě lehké sedace/omezení deliria; nikoli pro všechny indikace. Antipsychotika
  bez doporučení pro/proti léčbě deliria. Dále originální SCCM ABCDEF,
  Vanderbilt CAM-ICU, QUT tabulka RASS a SmPC propofolu/dexmedetomidinu/midazolamu.
  Starší zdroje nejsou vydávány za nové guidelines; bez nezávislé lékařské revize.
- Další dvojice **B23/B24 — levostranné/pravostranné srdeční selhání**. Ověřit
  akutní i chronickou část, zejména zastaralou roli morfinu a lékový přehled.
- Ověření: 7/7 datových a 17/17 prohlížečových testů prošlo. Veřejný build
  i scoped diff --check čisté. Mobilní snímek /tmp/aro-sedation-mobile.png
  vizuálně ověřen. Bez deploymentu; lokální veřejný build aktualizován.


## Jedenáctý průchod — B23/B24 (29. 10. 2026)
- Stav **18 odpovědí / 5 pouze s dodatkem / 32 osnov**. Každá nová odpověď
  má 5 sekcí a 3 kontrolní otázky; ID, losování a pokrok zachovány.
- B23: mechanismus, spouštěče, kongesce/perfuze, diagnostika, akutní podpora
  a léčba po stabilizaci. B24: příčiny PK, septum/interdependence, echo,
  opatrné rozhodování o tekutinách, ventilace a léčba podle skupiny PH.
- Skripta B23/B24 cíleně: zastaralé plošné doporučení morfinu, kopie léčby LK
  pro PK a přílišné zjednodušení zaklínění/klinické diferenciální diagnostiky.
- Důležitý nový zdroj: **ESC HF 2026, vydáno 28. 8. 2026, DOI ehag100**.
  Oficiální ESC stránka i indexovaný plný originální text potvrzují nové
  HFrEF <50 % / HFpEF ≥50 %, opuštění samostatné HFmrEF a základní léčbu
  MRA + SGLT2-I také pro HFpEF. U HFpEF EF nebyla dříve <50 %.
  Nevracet automaticky na staré hranice! Indikace ICD/CRT mají vlastní limity.
- Ověřeny oddíly 5–7, 13 a tabulka 9 ESC 2026. Přímé OUP otevření vracelo
  chybu CDN; použity indexované originální pasáže. Akutní stabilní principy
  mají také citaci ESC 2021, výslovně starší zdroj ověřený proti 2026.
- Další zdroje: NICE CG187, ACC 2024 oficiální souhrn (titrace po kompenzaci,
  ne aktuální ESC klasifikace), ACVC/ESC akutní cor pulmonale 2024 (PMC přímo
  přečteno), AHA 2018 fyziologie PK, ESC/ERS PH 2022. Merck 2025 pouze
  autorský výklad kliniky. Podrobné dávky reperfuze PE nepřebírány; patří B25.
- Nejde o nezávislou lékařskou revizi. Další dvojice **B25/B26**; předem
  ověřit aktuální PE/AKI/ALF doporučení, nezaměnit draft guidelines za finální.
- Ověření: 7/7 datových a 18/18 prohlížečových testů prošlo. Veřejný build
  a scoped diff --check čisté. Mobilní snímek /tmp/aro-heart-mobile.png
  vizuálně ověřen. Bez deploymentu; lokální veřejný build aktualizován.


## Dvanáctý průchod — B25/B26 (29. 10. 2026)
- Stav **20 odpovědí / 5 pouze s dodatkem / 30 osnov**. B25 má 5 sekcí,
  B26 kvůli dvěma orgánům 7 sekcí; obě 3 kontrolní otázky.
- B25: stabilita, pravděpodobnost/D-dimer, zobrazení, stratifikace, antikoagulace
  versus reperfuze a následná péče. AHA/ACC multisociety 2026 je vydané,
  kategorie A–E nezaměňovat za evropské ESC 2019 ani skriptová stadia I–IV.
  NICE NG158 pro diagnostiku/antikoagulaci; bez podrobného dávkového protokolu.
- B26: KDIGO definice a stadia, příčiny AKI, RRT a metody, ALF versus ACLF,
  časný kontakt centra, mozek/koagulace a orgánová podpora/transplantace.
- **KDIGO AKI/AKD 2026 není k datu kontroly finální:** oficiální stránka říká,
  že po veřejném připomínkování připravují publikaci. Použita vydaná KDIGO 2012
  + NICE NG148, návrh není zdrojem klinických doporučení. Kritéria stadia 3
  neznamenají automatickou indikaci dialýzy bez klinického kontextu.
- ALF: AASLD position paper 2011 pro definici/časné předání/NAC, SCCM 2023
  část II pro neurologii a výměnu plazmy. Update 2022 je odborný přehled,
  nikoli nová guideline. Oddělit ALF od ACLF doporučení; rutinní invazivní
  ICP monitoring nedoporučen dle SCCM (podmíněně, velmi nízká jistota).
- Skripta cíleně ř. 5260–5525: neopakovat plošné vyloučení PE D-dimerem,
  jedinou sekvenci heparin/warfarin, povinný heparin CRRT, automatické
  glomerulonefritida → ATB/kortikoidy, či univerzální hyperventilaci u ALF.
- Zdroje ověřeny veřejnými originálními/indexovanými texty; KDIGO stav a SCCM
  přímo otevřeny. Bez nezávislé lékařské revize. Další dávka **B27/B28**,
  následně B29 a zbývající osnovy i otázky pouze s dodatkem.
- Ověření: 7/7 datových a 19/19 prohlížečových testů prošlo. Veřejný build
  a scoped diff --check čisté. Mobilní snímek /tmp/aro-organ-failure-mobile.png
  vizuálně ověřen. Bez deploymentu; lokální veřejný build aktualizován.


## Třináctý průchod — B27/B28/B29 (30. 10. 2026)
- Stav **23 odpovědí / 5 pouze s dodatkem / 27 osnov**. Celá sekvence B17–B30
  (intenzivní medicína, vnitřní prostředí, selhání orgánů, toxikologie a obstrukce)
  je nyní kompletně zpracována.
- B27 (akutní diabetologie): úrovně hypoglykemie (ADA 1–3), neuroglykopenie vs
  adrenergní projevy, 10–20% glukóza / glukagon; patofyziologie a diagnostika DKA
  a HHS; tekutinová resuscitace a dynamika osmolality; kalium (< 3,3 mmol/l = STOP
  inzulinu) a kontinuální inzulin s časným přidáním glukózy (při 11–14 mmol/l) pro
  dohojení acidózy; zákaz rutinního bikarbonátu, edém mozku a vyvolávající příčiny.
- B28 (obecná toxikologie): priorita ABCDE před hledáním jedu, úskalí anamnézy,
  klasické toxidromy (anticholinergní, cholinergní, opioidní, sympatomimetický,
  sedativní); moderní dekontaminace (zákaz nuceného zvracení, striktní indikace
  výplachu žaludku do 60 min u intubovaného/při vědomí, kontraindikace leptadel/pěnidel/uhlovodíků,
  jednorázové a opakované aktivní uhlí); mimotělní eliminace (EXTRIP kritéria pro hemodialýzu)
  a přehled klíčových antidot.
- B29 (vybrané intoxikace): paracetamol (NAPQI, vyčerpání glutathionu, jaterní nekróza,
  Rumack-Matthew nomogram, i.v. N-acetylcystein); toxické alkoholy (metanol a etylenglykol,
  formiát/sítnice vs oxalát/ledviny, osmolální a HAGMA gap, fomepizol/etanol, hemodialýza);
  oxid uhelnatý (COHb, posun disociační křivky, fatální klam pulzní oxymetrie, 100% O₂ a HBO);
  opioidy (hypoventilace, titrace naloxonu k dechu nikoli probuzení, riziko relapsu kvůli
  krátkému poločasu) a etanol; psychofarmaka (benzodiazepiny a rizika flumazenilu,
  tricyklická antidepresiva, blokáda Na kanálů, rozšíření QRS a léčba 8,4% natrium bikarbonátem).
- Zdroje: ADA/EASD 2024–2026, JBDS-IP 2023/2024, TIS ČR, AACT/EAPCCT, EXTRIP, NPIS/MHRA, UHMS, WHO/ERC 2025.
- Ověření: 7/7 datových testů, 20/20 prohlížečových scénářů (včetně nového testu diabetologie/toxikologie na mobilu 320 px).
- Aktualizován veřejný build a index.html.
