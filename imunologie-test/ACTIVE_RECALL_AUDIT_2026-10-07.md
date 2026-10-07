# Audit active-recall otázek — Imunologie

Datum kontroly: 7. 10. 2026  
Rozsah: všech 348 položek v `questions.json`. Kontrola zahrnovala strukturu, jednoznačnost klíče, věcnou správnost, kvalitu distraktorů a klinickou aktuálnost.

## Zapracování oprav

Všechny níže uvedené změny byly následně zapracovány do `questions.json`. Po úpravě má všech 348 položek právě čtyři volby, platný index správné odpovědi, neprázdné vysvětlení a žádné doslovně duplicitní otázky ani doslovně duplicitní možnosti v jedné otázce.

## Souhrn

- 343 položek mají čtyři volby; pět položek má pouze odpovědi Ano/Ne.
- 30 položek vyžaduje úpravu (některé v několika kategoriích).
- Jsou nalezeny dvě skupiny doslovně duplicitních otázek: imunologická tolerance (ID 86, 172, 188) a pasivní imunizace (ID 113, 164).
- Nejzávažnější jsou otázky s nulou nebo více správnými odpověďmi a položky s potenciálně škodlivým klinickým zjednodušením.

## Nálezy

| ID | Typ problému | Nalezený problém | Navržená oprava | Priorita |
|---:|---|---|---|---|
| 36 | Jednoznačnost / obsah | Otázka na cytokiny akutní fáze neobsahuje IL-6, hlavní induktor hepatální odpovědi; klíč `IL-1 a TNF-α` je jen částečný. | Přeformulovat na „Který cytokin je hlavním induktorem syntézy proteinů akutní fáze?“ s klíčem IL-6, nebo explicitně se ptát na cytokiny podílející se na reakci. | vysoká |
| 38 | Terminologie | Používá zastaralé označení „primární biliární cirhóza“. | Nahradit „primární biliární cholangitida (PBC)“ ve volbě i vysvětlení. | střední |
| 50 | Neověřený lokální údaj | Tvrzení o statisticky nejčastější příčině sekundárních imunodeficitů v ČR nemá uvedený zdroj a závisí na populaci i definici. | Označit k doložení českým epidemiologickým zdrojem, nebo otázku zobecnit na časté příčiny sekundární imunodeficience. | střední |
| 60 | Více správných odpovědí | Anti-endomyziální i anti-tyreoglobulinové protilátky jsou orgánově specifické; navíc jsou dvě shodné varianty tyreoglobulinu. | Otázku zúžit na konkrétní orgán/nemoc a odstranit duplicitní volbu. | kritická |
| 63 | Nejednoznačnost | Znění „která látka není v lyzozomálních granulích fagocytů“ má několik nepatřičných voleb; neumožňuje jediný obhajitelný klíč. | Nahradit čtyřmi enzymy/proteiny granul fagocytů a jedním konkrétním distraktorem. | kritická |
| 64 | Věcná přesnost | Pro obranu proti extracelulárním bakteriím uvádí klíč „nitrobuněčné zabíjení“; to není obecný určující mechanismus a formulace směšuje děje. | Uvést opsonizaci (Ig, C3b), komplement a fagocytózu; případně se ptát zvlášť na intracelulární patogeny. | vysoká |
| 86, 172, 188 | Duplicita | Tři doslovně stejné otázky na imunologickou toleranci bez jiného vzdělávacího cíle. | Ponechat jednu, zbylé nahradit otázkami na centrální/periferní toleranci či anergii. | střední |
| 89 | Více správných odpovědí | „Epitopy“ i „epitop“ jsou pro otázku o místech na antigenu věcně správné. | Nechat jen jednu z těchto voleb a doplnit skutečný distraktor. | kritická |
| 94 | Duplicitní správná volba | „Složkami C5b–C9“ a „C5b–C9“ vyjadřují totéž. | Zachovat jen jednu odpověď; ostatní nabídnout jako jiné komplexy komplementu. | kritická |
| 109 | Nejednoznačnost / klinika | „Vakcína proti pneumokokům“ není typ vakcíny a polysacharidová i konjugovaná pneumokoková vakcína mají odlišné použití; otázka nemá jedinou bezpečnou odpověď pro všechny imunokompromitované. | Ptát se na živé vs. neživé vakcíny a doplnit, že rozhodnutí závisí na typu imunosuprese. | vysoká |
| 113, 164 | Duplicita | Dvakrát stejná otázka na pasivní imunizaci. | Ponechat přesnější ID 164; druhou nahradit rozdílem aktivní/pasivní imunizace. | střední |
| 119 | Jednoznačnost | Možnosti „IL-1 a TNF“ a „IL-1 a TNF-α“ jsou ekvivalentní. | Jednu odstranit; pro nejlepší odpověď zahrnout IL-6. | vysoká |
| 128 | Více obhajitelných odpovědí | Odpovědi 2 i 3 správně popisují adaptivní imunitu oproti vrozené. | Přeformulovat jako jednu konkrétní vlastnost, např. imunologická paměť. | vysoká |
| 140 | Klinická nepřesnost | Čisté polysacharidové vakcíny mají u dětí do 2 let slabou odpověď, nikoli „nepůsobí u malých dětí“; konjugované polysacharidové vakcíny fungují. | Upřesnit „čistá polysacharidová vakcína u dětí mladších 2 let“ a kontrastovat ji s konjugovanou. | vysoká |
| 150, 242 | Více správných odpovědí | „Na 6. chromozomu“ i „na krátkém raménku 6. chromozomu“ jsou správné odpovědi. | Ponechat přesnější variantu a nahradit druhou distraktorem. | kritická |
| 163 | Duplicitní význam | Dvě volby synonymně definují MHC restrikci. | Jednu odstranit a nahradit jiným mechanismem. | vysoká |
| 168 | Duplicitní význam | „IgG a IgM protilátkami“ a „IgG a IgM“ jsou totéž. | Nechat jednu volbu. | kritická |
| 173 | Více správných odpovědí | Tři volby téměř shodně popisují oddálenou hypersenzitivitu. | Zachovat jedinou, přesně formulovanou možnost a doplnit relevantní distraktory. | kritická |
| 181 | Klinická aktuálnost | „Nejnadějnější léčebná metoda“ je neurčité a zastaralé znění. | Ptát se na současný standard: HSCT; uvést, že u vhodných genetických forem existuje genová terapie. | vysoká |
| 197, 278 | Zastaralý postup | Transfer faktor a „hormony thymu“ nejsou standardní léčbou poruch buněčné imunity. | Otázky vyřadit nebo označit výslovně jako historický koncept; nahradit je HSCT, léčbou příčiny a antiinfekční profylaxí dle diagnózy. | kritická |
| 203, 302 | Duplicitní správná volba | Dvě odpovědi souběžně a správně popisují kostní dřeň jako primární lymfatický orgán a místo zrání/diferenciace B buněk. | Ponechat jednu formulaci a nahradit druhou distraktorem. | kritická |
| 217 | Příliš obecné tvrzení | Nízký komplement není obecnou charakteristikou všech systémových autoimunit; závisí na diagnóze a aktivitě (typicky spotřeba u aktivního SLE). | Zúžit na aktivní SLE/imunokomplexovou aktivitu a uvést C3/C4. | vysoká |
| 218 | Duplicitní význam / terminologie | Správné volby 0 a 2 jsou tentýž název PBC, navíc se starým označením „cirhóza“. | Zachovat jen „primární biliární cholangitida“ a přidat odlišné nemoci. | kritická |
| 223 | Žádná jednoznačná odpověď | Hypersenzitivita IV. typu není zprostředkována žádným imunoglobulinem; všechny čtyři nabízené izotypy tedy vyhovují otázce „který se neuplatňuje“. | Ptát se „která buňka zprostředkovává…“ nebo nabídnout „žádný imunoglobulin“. | kritická |
| 232 | Žádná jednoznačná odpověď | ELISA, Western blot, turbidimetrie i průtoková cytometrie mohou být neizotopové; klíč ELISA je neobhajitelný. | Zrušit nebo položit jednoznačnou otázku na princip konkrétní metody. | kritická |
| 238 | Věcná chyba | Definice „genetické varianty izotypů mezi jedinci“ popisuje alotyp, nikoli izotyp. | Klíč změnit na „třídy Ig dané konstantní oblastí těžkého řetězce, společné jedincům druhu“; původní definici využít pro alotyp. | kritická |
| 260 | Klinická neúplnost | Diagnostika alergie na penicilin není jen prick test a specifické IgE; zahrnuje anamnézu/rizikovou stratifikaci, kožní testy a podle rizika provokaci. | Přeformulovat jako postup pro podezření na bezprostřední IgE reakci a doplnit anamnézu i kontrolovanou perorální provokaci. | vysoká |
| 261 | Příliš absolutní tvrzení | Většina reakcí po kyselině acetylsalicylové není IgE-zprostředkovaná, existují však vzácné selektivní IgE reakce. | Změnit na „Je většina reakcí…?“ nebo rozlišit zkříženě reaktivní COX-1 reakce od selektivní alergie. | vysoká |
| 263 | Nevymezená klinická otázka | Na sliznici úst se nevyskytuje jediný univerzální typ hypersenzitivity; bez konkrétního onemocnění je klíč IV. typu neobhajitelný. | Uvést konkrétní diagnózu, např. kontaktní stomatitidu. | kritická |
| 271 | Zastaralé absolutní tvrzení | Rutinní očkování veřejnosti se neprovádí, ale vakcinace proti pravým neštovicím/orthopoxvirům existuje pro vybrané rizikové skupiny a mimořádné situace. | Změnit na „Provádí se rutinní očkování veřejnosti?“ → ne; vysvětlení doplnit o profesní/rizikové indikace. | vysoká |
| 276 | Klinicky rizikové zjednodušení | PEP proti vzteklině se nepodává automaticky po pokousání „neznámým zvířetem“; indikuje se po posouzení expozice, druhu zvířete, lokality a možnosti vyšetření/zvířecí observace. | Ptát se na nutnost neodkladného odborného posouzení po možné expozici; v doplnění uvést ránu, HRIG a vakcínu dle doporučení. | kritická |
| 281 | Zastaralé znění | Monoklonální protilátky nejsou obecně „myšího původu“; dnes mohou být myší, chimérické, humanizované i plně lidské/recombinantní. | Omezit otázku na historickou hybridomovou techniku, nebo uvést variabilní původ současných mAb. | vysoká |
| 298 | Více správných odpovědí | CD8 ani TCR nejsou integriny; možnost „CD8, TCR a ICAM“ proto není jediná věcně čistá odpověď. | Ptát se přímo na konkrétní integrin (např. LFA-1, VLA-4) a nabídnout jednotlivé molekuly. | kritická |
| 300 | Duplicitní správná volba | „IL-1 a TNF“ a „IL-1 a TNF-α“ jsou totožné. | Ponechat jednu volbu. | kritická |
| 303 | Více správných odpovědí | Beraní krvinky, hypersenzitivita IV. typu i MAC nejsou obsahem granul fagocytů; klíč „endogenní pyrogen“ není jediný. | Nahradit čtyřmi konkrétními složkami granula a jedním jednoznačným distraktorem. | kritická |
| 310 | Věcná nepřesnost | Komplement se může podílet i na neutralizaci/inhabitci virové infekce; „neutralizace virů“ proto není bezpečný příklad funkce, která do komplementu nepatří. | Zvolit jednoznačně nesouvisející proces (např. tvorba protilátek) a upravit vysvětlení. | vysoká |
| 333 | Více správných odpovědí | C3a, C5a i MAC nejsou hlavní opsoniny; otázka má více správných voleb. | Otázku obrátit na „který fragment je hlavní opsonin?“ → C3b, s relevantními distraktory. | kritická |
| 346 | Klinická nepřesnost | Úplná shoda HLA I, HLA II a ABO není univerzální podmínkou transplantace orgánu; požadavky závisí na typu transplantace, základní je kompatibilita ABO a imunologické vyšetření. | Zúžit na principy kompatibility/předtransplantačního vyšetření, ne na absolutní „musí být shodné“. | vysoká |
| 347 | Nevymezenost | Bez určení diagnózy i mechanismu může být relevantních více složek komplementu; „C5a“ není univerzální jediný klíč pro imunokomplexové nemoci. | Ptát se konkrétně na anafylatoxin v imunokomplexovém zánětu (C5a), nebo na spotřebu C3/C4 u aktivního SLE. | vysoká |
| 348 | Příliš obecné / zastaralé | Citlivost metody závisí na analytu a provedení; RIA není univerzálně „nejcitlivější“ a není rutinní standard ve stejném smyslu jako ELISA. | Určit konkrétní analytický princip, nebo otázku vyřadit. | střední |

## Ověřené klinické body

- Rutinní vakcinace veřejnosti proti pravým neštovicím byla po eradikaci ukončena, přesto existují vakcíny a doporučení pro vybrané profesní/rizikové skupiny. Proto je odpověď „Ne“ bez upřesnění zavádějící (ID 271). [CDC — Smallpox Vaccine Safety](https://www.cdc.gov/vaccine-safety/vaccines/smallpox.html), [CDC/ACIP — JYNNEOS](https://www.cdc.gov/acip/evidence-to-recommendations/jynneos-orthopoxvirus-primary-pq1-etr.html)
- PEP proti vzteklině následuje až po posouzení možné expozice; neplatí prosté pravidlo „po pokousání neznámým zvířetem“ (ID 276). [CDC — Rabies PEP](https://www.cdc.gov/rabies/hcp/clinical-care/post-exposure-prophylaxis.html)
- Vyšetření hlášené alergie na penicilin staví na anamnéze a rizikové stratifikaci, kožním testu u indikovaných osob a podle rizika na kontrolované perorální provokaci; samotné prick testy a specifické IgE nejsou úplný algoritmus (ID 260). [CDC — Penicillin allergy](https://www.cdc.gov/std/treatment-guidelines/penicillin-allergy.htm)
- U SCID je standardem hematopoetická transplantace; pro některé formy je dostupná genová terapie (ID 181). [Immune Deficiency Foundation — SCID](https://primaryimmune.org/understanding-primary-immunodeficiency/types-of-pi/severe-combined-immunodeficiency-scid)

## Položky vyžadující odborné potvrzení zdrojem

- ID 50: česká epidemiologická priorita příčin sekundárních imunodeficiencí.
- ID 217: přesné znění vztahu koncentrací C3/C4 k jednotlivým systémovým autoimunitám a aktivitě nemoci.
- ID 347: vhodně vymezená role jednotlivých složek komplementu v imunokomplexových nemocích.
- ID 197 a 278: zda mají být historické koncepty transfer faktoru a thymových hormonů součástí zamýšleného sylabu, nikoli klinického doporučení.
