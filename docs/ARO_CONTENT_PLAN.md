# Obsahová revize ARO

Stav: 29. 10. 2026. Aktuální pokrytí viz dvanáctý průchod níže. Uživatel potvrdil jednu otázku z každého bloku.

## Obsahový kontrakt

Každá otázka má stabilní ID A01–A25 nebo B01–B30. Názvy a čísla nyní vycházejí
z úvodního seznamu `aro_materialy/skripta.md`. Dvě další sady otázek v DOCX
zatím nejsou porovnány. Nedělat tichou změnu číslování.

`prompts` jsou autorská osnova pro ústní odpověď, ne zrevidovaný klinický výklad.
`lessonIds` odkazují na tematické dodatky. Přítomnost dodatku neznamená, že
je aktualizovaná celá otázka. Sebehodnocení uživatele je zcela nezávislé.

Pro plnou odpověď v další iteraci doplnit samostatná pole:
1. Krátká úvodní odpověď vlastními slovy (30–60 sekund).
2. Systematický výklad na přibližně 5 minut podle přesného znění otázky.
3. Vysvětlení mechanismů a klinické souvislosti.
4. Typické doplňující dotazy zkoušejícího a odhalitelná odpověď.
5. Časté chyby a konkrétní opravy starých skript.
6. Zdroje s verzí, datem kontroly, příslušnou sekcí a rozsahem ověření.
7. Explicitní mezery, nejistoty a lokální odlišnosti.

Při dávkách uvádět populaci, jednotky, cestu, indikaci a kontext. Děti ani
novorozence neodvozovat prostým zmenšením dospělého algoritmu. Oddělit
obecný algoritmus od zvláštních situací. Stáří zdroje samo o sobě neznamená
neplatnost; datum přístupu nezaměňovat s datem vydání.

## Zdrojový registr prvního průchodu

| Dodatek | Primární zdroj | Ověřený rozsah | Další práce |
| --- | --- | --- | --- |
| preop | [NICE NG45](https://www.nice.org.uk/guidance/ng45/chapter/recommendations), 2016 | Rutinní testy, § 1.7–1.10 a tabulky | ASA, lačnění, léky, české místní postupy; NG45 nezahrnuje těhotné/kardiochirurgii/neurochirurgii |
| bls | [ERC Adult BLS 2025](https://www.erc.edu/media/wrhj5sye/gl2025-04-bls-e.pdf) | Základní dospělý algoritmus, časné volání, komprese, ventilace, AED | Úplná odpověď A15/A16, zvláštní situace |
| als | [ERC Adult ALS 2025](https://www.erc.edu/media/vedoa2ga/gl2025-05-als-e.pdf) | Základní algoritmus, dávky a načasování, IV/IO, 4H/4T, kapnografie | Energie výbojů podle přístroje, airway, peri-arrest, péče po ROSC |
| ponv | [Gan et al., 5th consensus executive summary](https://doi.org/10.1213/ANE.0000000000007816) | Dvě intervence při jakémkoli riziku dospělých; limity eskalace; záchranná léčba jiné třídy | Rizikové faktory, konkrétní léčiva/dávky, kontraindikace a pediatrie |
| sepsis | [SCCM SSC 2026](https://www.sccm.org/survivingsepsiscampaign/guidelines-and-resources/surviving-sepsis-campaign-adult-guidelines) | Časná ATB podle pravděpodobnosti/šoku, kultury, laktát, individualizace tekutin | Definice, vazopresory, zdroj infekce, orgánová podpora |

PONV bibliografie ověřena také na https://pubmed.ncbi.nlm.nih.gov/41237407/:
online 14. 11. 2025, číslo časopisu 1. 9. 2026. Nejde o dva odlišné konsenzy.
DOI při přímém otevření přesměrovalo na nepřístupný Ovid; text executive
summary byl dostupný přes indexovaný výstup vydavatele. Plný supplement
AA/F568 jsme v tomto průchodu nečetli. Neuvádět, že byl zrevidován celý dokument.

## Priorita dalšího pokračování

1. A18 — zpracováno ve druhém průchodu: ERC PLS a NLS 2025 odděleně.
   Dávky ani text se nepřebíraly ze skript.
2. B04 — zpracováno ve druhém průchodu; perioperační rozšíření A04 zbývá.
   A20/B30 zpracovány ve čtvrtém průchodu. Další dávka A04/A07.
3. A04/A07 — maligní hypertermie, LAST, reziduální blokáda; dokončit PONV.
4. B05/B06 — krvácení a trauma. B11/B12 — úplná sepse a antibiotika.
5. B15–B18 — respirační selhání, asthma, ARDS a UPV.
6. A01–A14 — dokončit anesteziologii a bolest; pak další orgánová témata B.
7. A23–A25 — aktuální česká legislativa, smrt mozku a etika s místním kontextem.

Po každé dávce aktualizovat tento soubor i ARO_HANDOFF.md a příslušné
indikátory ve webu. Počet zpracovaných odpovědí a pokrytí je nyní odvozen v `coverage()`;
`contentStatus()` a filtrace rozlišují odpověď, dodatek a osnovu.

## Co se úmyslně nepřenáší ze skript

Skriptové dávkování ani léčebná doporučení nejsou automaticky importována.
Nevystavovat celou knihovnu na web, neodkazovat veřejné klienty na zdrojové
PDF/DOCX. U revidovaných odpovědí vytvářet vlastní stručný výklad; nekopírovat
rozsáhlé pasáže guideline. U nerevidovaných témat neslibovat aktuálnost.


## Schéma souvislých odpovědí — druhý průchod
`aro/answers.mjs` exportuje `answers` pod ID otázky a `answerSources`.
Každý záznam: `title`, `reviewed` (ISO), `edition`, `scope`, `opening`,
`openingRefs`, `sections[{title, paragraphs, refs}]`, `corrections[]`,
`checks[{question, answer, refs}]`. Každé `refs` obsahuje ID z registru zdrojů.
Zdroj nese `label`, `url`, `locator` (konkrétní sekce). Renderer text escapuje.

Aktuální odpovědi:
- **A18**: PBLS, PALS, ventilace při porodu, komprese/léky NLS, péče po ROSC.
- **B04**: příčiny a rozpoznání, ABC/adrenalin, děti/cesta podání, refrakterní
  průběh a pomocné léky, následná péče.

NLS ERC má rozmezí 10–30 mikrogramů/kg; RCUK implementace má pevně 20.
V odpovědi je výslovně použito ERC rozmezí. Pragmatický interval ERC PLS/NLS
je 4 minuty; nezaměňovat s dospělým ALS. RCUK PLS stránka někde uvádí 3–5 min,
proto má PALS oddíl citaci přímo na ERC. Nouzové intratracheální podání v NLS
je uvedeno jako výjimka. Vždy odlišit koncentraci pro i.m. anafylaxi 1 mg/ml
od intravaskulárního NLS 0,1 mg/ml.

NICE NG258 (2026) bylo identifikováno, ale stránky i PDF vracely 403. Přesné
nové podmínky propuštění nečerpat ze sekundárních souhrnů, které si navíc
protiřečí. B04 zatím uvádí individualizaci observace a návaznou péči.


## Opakovaná kontrola 28. 10. 2026

| Oblast | Kontrola a výsledek |
| --- | --- |
| A18 PBLS | RCUK 2025, Basic life support / Chest compressions / AED: doplněny podmínky zahájení, 10 s, adolescent 5–6 cm a priorita osamělého zachránce. |
| A18 PALS | ERC PLS 2025, concise guidelines s. 19–20: po 3. výboji nyní samostatně adrenalin 10 µg/kg (max. 1 mg) a amiodaron 5 mg/kg (max. 300 mg). Původní společná věta mohla dávku přiřadit oběma lékům. |
| A18 NLS | RCUK 2025, PEEP and CPAP; ERC NLS concise guidelines s. 11: odděleny CPAP a PPV/PEEP, UVC preferován, po nouzové ET dávce při HR <60 ihned intravaskulární dávka po získání vstupu; titrace O₂ podle SpO₂. |
| B04 | WAO 2020, tabulka 2 včetně poznámky k inhalovaným alergenům; ERC special circumstances 2025 a RCUK 2021/2025. Upřesněna výjimka izolovaného bronchospasmu a dospělý kontext tekutin. |
| Předoperační testy | NICE NG45: rutinní RTG/moč/echo a tabulky testů znovu porovnány. Bez změny doporučení. Přímá stránka vracela 403; dostupné indexované znění NICE. |
| BLS/ALS | ERC 2025: bez změny dávek nebo načasování; ALS název má dvě skupiny rytmů, nikoli dva rytmy; doplněna cesta léků. |
| PONV | Executive summary 5. konsenzu opět potvrzuje dvě intervence při jakémkoli riziku a nedostatečnou evidenci rutinní eskalace na ≥3. Rozsah stále pouze stručný dodatek, nikoli celý konsenzus. |
| Sepse | SCCM SSC 2026: potvrzeno rozlišení ATB podle pravděpodobnosti infekce/šoku a podmíněné ≥30 ml/kg za 3 h; doplněna priorita léčby před zdržením odběry. |

Revize nemění pokrytí (2 odpovědi, 7 otázek s dodatky, 46 osnov).
Zbývající osnovy byly pročteny jako tematické seznamy; jejich existence
neznamená ověření budoucích léčebných doporučení. Právní otázky zůstávají
bez právního výkladu. Uživatelská preference: stručný věcný úvod, žádné
motivační slogany ani opakované obecné návody, jak se učit.


## A20/B30 — zdroje a rozsah (28. 10. 2026)

Nový aktuální stav: **4 odpovědi, 7 otázek s dodatkem, 44 osnov**.
Historická pokrytí výše patří předchozím průchodům.

- A20: [DAS 2025](https://doi.org/10.1016/j.bja.2025.10.006), online 7. 11. 2025,
  BJA 136 (2026) 283–307. BJA přímé otevření 403; originální článek přečten
  z PDF https://emergencymed.org.il/wp-content/uploads/2026/03/Difficult-Airway-Society-2025-guidelines-for-management-of.pdf
  a indexovaného textu. Ověřeny plány A–D, 3+1 intubačních pokusů, max. 3 SAD,
  průběžná oxygenace, kapnografie a eFONA. Limity nejsou povinnost je vyčerpat.
- Doplňkové primární zdroje: ASA 2022 (indexované doporučení anticipated airway,
  DOI 10.1097/ALN.0000000000004002), DAS awake 2019 (oficiální web),
  DAS/AoA a další 2024 cervical spine (PDF FPHC), AHA BLS 2025 (zprůchodnění).
  Registr answerSources obsahuje přesné odkazy a lokátory.
- B30: RCUK 2025 PLS (FBAO a advanced airway), RCH Acute upper airway
  obstruction, Croup, Emergency airway management a Foreign bodies inhaled.
  Croup dávkování prezentováno jako místní RCH, ne český národní standard.
  Stránka Foreign bodies inhaled při přímém načtení vracela 404; plný
  indexovaný text byl dostupný. Veřejná citace zachovává původní URL.
- Starší datum RCH upper-airway (2021) není vydáváno za novou guideline 2026;
  kontrolováno aktuálně dostupné znění. Resuscitační postup je zvlášť podle 2025.
- Dosud nebyly doplněny nové otázky k tonutí ani dospělé/pediatrické CICO
  technické návody. Neprezentovat odpovědi jako kompletní klinické protokoly.

Další práce: A04/A07 (maligní hypertermie, LAST, reziduální blokáda), pak
B05/B06 a B11/B12. Počty v UI se odvozují automaticky; testovací očekávání
stavu byla změněna na 4/7/44. Nepřidávat motivační úvod.


## A04/A07 — pátý průchod (28. 10. 2026)

Aktuálně **6 odpovědí / 6 otázek pouze s dodatkem / 43 osnov**. A04 má nově
odpověď i původní PONV dodatek; celkový počet vazeb otázek na dodatky je pořád 7.
Další priorita B05/B06, potom B11/B12; A04/A07 už nejsou další plánovaná dávka.

- MH: [EMHG 2024](https://www.emhg.org/recommendations-1/2024/11/4/recognising-and-managing-a-malignant-hyperthermia-crisis-v2024), Box 1–2,
  a MHAUS mechanismus. 2–2,5 mg/kg skutečné hmotnosti, max 300 mg na dávku,
  opakování po 10 min (při delší přípravě co nejrychleji). Nekopírovat objemy
  rozpouštědla mezi různými formulacemi dantrolenu. Monitorace nejméně 24 h.
- LAST: [ASRA checklist 2020](https://asra.com/docs/default-source/guidelines-articles/local-anesthetic-systemic-toxicity-rgb.pdf?sfvrsn=33b348e_2),
  celý jednostránkový PDF přečten. Stránka ASRA nyní uvádí probíhající revizi
  a očekávání aktualizace začátkem 2027; nevymýšlet „LAST guidelines 2026“.
  Doplněn ASRA 2017/2018 advisory pro variabilní kliniku a prevenci.
- ASA 2023 NMB: primární indexovaný text DOI 10.1097/ALN.0000000000004379
  a PDF; kvantitativní adductor pollicis, TOF ratio ≥0,9, antagonizace dle hloubky.
- AoA QRH: jednotlivé PDF 2-2 hypoxie, 2-4 hypotenze, 3-6 laryngospasmus
  (2018) a 3-4 bronchospasmus (2023) načteny z oficiálního webu.
  Jsou to nadále nabízené karty, ne nová doporučení 2026. Zastaralejší QRH
  MH/LAST karty nepoužity místo konkrétních novějších doporučení výše.
- OAA 2024 karta 2-7 high central neuraxial block: porodnický kontext,
  odsun dělohy je v odpovědi výslovně označen jako porodnické opatření.
- ASA 2023 neurologické komplikace: urgentní zobrazení při progresivním
  deficitu/kompresi. Publikace je porodnická; neuvádět její incidence ani
  časová porodnická pravidla jako obecná pro všechny pacienty.
- ASRA antitrombotika 2025 (5. vydání): principy neuraxiálních/hlubokých
  blokád; kompletní intervalové tabulky nebyly převáděny.
- Multisociety PDPH DOI 10.1136/rapm-2023-104817: indexovaný primární text,
  přímá BMJ stránka vracela 403. Diagnóza, red flags, konzervativní léčba,
  krevní zátka a neúčinnost rutinního ležení jako prevence.
- Farmakologie: SmPC lidokainu, bupivakainu, ropivakainu a chloroprokainu
  z eMC. Nejde o tvrzení o české registraci konkrétního balení.

Opravy proti skriptům A04 ř. přibližně 630–850 a A07 1033–1100:
nezaměňovat všechny relaxanty za MH triggery, klinické testy za TOF,
pevnou posloupnost CNS→srdce za pravidlo LAST. Číslování/názvy zachovány.


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
- Stav: **23 odpovědí / 5 pouze s dodatkem / 27 osnov**. Celá sekvence B17–B30 je kompletní.
- B27 (akutní diabetologie): úrovně hypoglykemie ADA 1–3, neuroglykopenie vs adrenergní projevy, 10–20% glukóza; DKA vs HHS patofyziologie a diagnostika; tekutiny (balancované krystaloidy, korigovaný Na); kalium (K < 3,3 mmol/l = stop inzulinu!) a kontinuální inzulin s přidáním glukózy při 11–14 mmol/l k dohojení acidózy; zákaz rutinního bikarbonátu a edém mozku.
- B28 (obecná toxikologie): ABCDE priorita, toxidromy (anticholinergní, cholinergní, opioidní, sympatomimetický, sedativní), zákaz vyvolání zvracení, přísné indikace výplachu žaludku do 60 min, kontraindikace leptadel/pěnidel/uhlovodíků/bezvědomí bez intubace, carbo adsorbens, indikace hemodialýzy dle EXTRIP a přehled antidot.
- B29 (vybrané intoxikace): paracetamol (NAPQI, vyčerpání glutathionu, jaterní nekróza, nomogram, N-acetylcystein); toxické alkoholy (metanol a etylenglykol, formiát vs oxalát, osmolální gap a HAGMA, fomepizol/etanol, hemodialýza); oxid uhelnatý (COHb, klam pulzní oxymetrie, 100% O₂ a HBO); opioidy (titrace naloxonu k dechu, ne probuzení; relaps pro krátký poločas) a etanol; psychofarmaka (benzodiazepiny vs rizika flumazenilu, tricyklická antidepresiva, blokáda Na kanálu, rozšíření QRS a léčba 8,4% natrium bikarbonátem).
- Zdroje: ADA 2024–2026, JBDS-IP 2023/2024, TIS ČR, AACT/EAPCCT, EXTRIP, NPIS/MHRA, UHMS, WHO/ERC 2025.
- Ověření: 7/7 datových testů, 20/20 prohlížečových scénářů (včetně mobilního testu na 320 px). Veřejný build aktualizován.
