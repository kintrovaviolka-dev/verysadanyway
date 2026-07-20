// data_mikra.js – Mikrobiologie, 3. ročník 1. semestr
// Prvních 20 dvojotázek (část A = bakteriologie, část B = virologie/mykologie/diagnostika)
// Zdroj: skripta_1.md (pro agenta, nestudenti)

const MIKRA_QUESTIONS = [
  {
    id: "mikra-1",
    cislo: 1,
    skupina_a: "Bakteriologie",
    skupina_b: "Diagnostika",
    cast_a: {
      title: "Nefermentující gramnegativní tyčinky",
      keywords: ["Pseudomonas", "Acinetobacter", "Stenotrophomonas", "nozokomiální", "cystická fibróza"],
      content: {
        definice: "Heterogenní skupina gramnegativních tyčinek neschopných fermentovat glukózu. Klíčové rody: <strong>Pseudomonas, Acinetobacter, Stenotrophomonas, Burkholderia</strong>. Fakultativní nebo obligátní aeroby, fakultativně anaerobní metabolismus chybí.",
        etiologie: "<strong>Pseudomonas aeruginosa:</strong> přítomná ve vodě, půdě, vzduchu; oportunní patogen. Rezistentní na mnohá ATB díky přirozené rezistenci a plazmidové rezistenci. Modrý pigment <em>pyocyanin</em>, zelený <em>fluorescein</em>. Kultivace: krevní agar a selektivní agarový Cetrimid agar. Test oxidázy pozitivní.<br><br><strong>Acinetobacter baumannii:</strong> G- kokobacily, původce nozokomiálních infekcí (pneumonie, sepse, infekce ran). Typická je multirezistence.<br><br><strong>Stenotrophomonas maltophilia:</strong> prostředí (voda, půda), imunosuprimovaní – pneumonie; intrinsická rezistence na karbapenemy.",
        patogeneze: "Faktory virulence <em>P. aeruginosa</em>: alginátu tvorba (biofilm u CF), endotoxin (LPS), exotoxin A (inhibice proteosyntézy), proteasy (elastasa, alkalická protease), hemolyziny (fosfolipáza C, ramnolipidy), typ III sekreční systém (vstřikuje toxiny do buněk hostitele). <em>Acinetobacter</em>: pouzdro, LPS, tvorba biofilmu.",
        klinicky: "<strong>P. aeruginosa:</strong><br>• Cystická fibróza – chronická pneumonie, biofilm<br>• Popáleniny – hnisavé infekce ran (modrozelený hnis)<br>• Nozokomiální pneumonie u UPV pacientů<br>• Uroinfekce u katetrizovaných<br>• Otitis externa maligna (diabetici)<br>• Endoftalmitida, bakterémie a sepse<br><br><strong>Acinetobacter:</strong> Nozokomiální pneumonie, BSI, infekce ran.<br><strong>Stenotrophomonas:</strong> Pneumonie u imunosuprimovaných, krev.",
        laborator: "Kultivace na KA / selektivní BCSA agar (pro CF). Pseudomonas: kolonie s charakteristickým pachem a zbarvením. Biochemie: oxidáza +, fermentace glukózy -, různé oxidázy. Citlivost na ATB (MIC). PCR u biofilmových infekcí CF.",
        terapie: "P. aeruginosa: antipseudomonální peniciliny (piperacilin-tazobaktam), cefalosporiny 3.–4. gen (ceftazidim, cefepim), karbapenemy (imipenem), aminoglykosidy, fluorochinolony. VŽDY kombinovaná terapie! Acinetobacter: karbapenemy, kolistin u XDRAB."
      },
      quiz: [
        {
          q: "Který pigment produkuje Pseudomonas aeruginosa a způsobuje modrozelené zbarvení?",
          options: ["Melanin", "Pyocyanin", "Fluorescein", "Pyorubrin"],
          correct: 1,
          explanation: "P. aeruginosa produkuje modrý pigment pyocyanin a zelený fluorescein (pyoverdine). Kombinace dává charakteristické modrozelené zbarvení."
        },
        {
          q: "Která vlastnost Pseudomonas aeruginosa je klíčová pro chronickou infekci u pacientů s cystickou fibrózou?",
          options: ["Produkce exotoxinu A", "Tvorba alginátového biofilmu", "Produkce hemolyzinů", "Flagelární pohyblivost"],
          correct: 1,
          explanation: "Alginát tvoří biofilm, který chrání P. aeruginosa před fagocytózou a antibiotiky – klíčový faktor chronické kolonizace plic u CF."
        },
        {
          q: "Acinetobacter baumannii je znám zejména jako:",
          options: ["Komunitní patogen GIT", "Multirezistentní nozokomiální patogen", "Původce legionářské nemoci", "Původce kapavky"],
          correct: 1,
          explanation: "A. baumannii je typický MDRAB/XDRAB nozokomiální patogen, způsobující pneumonie na JIP, infekce ran, sepse – obávána je jeho multirezistence."
        }
      ]
    },
    cast_b: {
      title: "Přímá diagnostika virů",
      keywords: ["PCR", "kultivace", "elektronová mikroskopie", "cytopatický efekt", "antigeny"],
      content: {
        definice: "Přímá virologická diagnostika detekuje virus, jeho antigeny nebo nukleové kyseliny přímo ve vzorku pacienta. Cílem je prokázat přítomnost viru – na rozdíl od nepřímé diagnostiky (průkaz protilátek).",
        metody: "<strong>1. Izolace viru – kultivace:</strong><br>• Tkáňové kultury (buněčné linie: Vero, HeLa, MRC-5) – standardní<br>• Embryonované slepičí vejce (influenza, poxviry)<br>• Laboratorní zvíře (vzácně)<br>• Průkaz replikace: cytopatický efekt (CPE) – buněčné změny (zaokrouhlení, syncytia, inclusion bodies)<br>• Nevýhody: pomalé (dny–týdny), nutná živá buněčná kultura, nákladné<br><br><strong>2. Elektronová mikroskopie (EM):</strong><br>• Negativní kontrastování – přímá vizualizace virových partikulí ve stolici (rotaviry, noroviry)<br>• Imunoelektronová mikroskopie (IEM) – protilátkami označené viry<br>• Výhoda: přímý morfologický průkaz, nevyžaduje znalost viru<br>• Nevýhoda: potřeba minimálně 10⁶ virů/ml, nákladný přístroj<br><br><strong>3. Přímý průkaz antigenu:</strong><br>• ELISA – průkaz virových antigenů (influenza, RSV, rotavirus, HAV)<br>• Imunofluorescence (IF) – přímá (DIF) nebo nepřímá (IIF); rychlá<br>• Latexová aglutinace – rychlý test<br>• Imunochromatografie (rapid antigen test) – influenza, COVID-19<br><br><strong>4. Molekulární metody – průkaz NK:</strong><br>• PCR (standardní i real-time/qPCR) – nejcitlivější a nejspecifičtější<br>• RT-PCR pro RNA viry (přepis RNA→cDNA→amplifikace)<br>• Multiplexová PCR – průkaz více virů v jedné reakci<br>• Sekvenování (NGS) – kompletní charakterizace genomu",
        materialy: "Výtěry (nosohltanový, rektální), BAL, likvor, krev (hemokultivace), moč, stolice, bioptické vzorky, bioptáty kůže a sliznic. Odběr co nejdříve po vzniku příznaků!",
        vyhody_nevyhody: "<strong>Výhody PCR:</strong> vysoká citlivost, rychlost (hodiny), quantifikace (viral load), detekce i u imunosuprimovaných<br><strong>Nevýhody PCR:</strong> riziko kontaminace, falešná pozitivita (mrtvý virus), nákladné<br><br><strong>Výhody kultivace:</strong> live virus, možnost testovat citlivost na virostatika<br><strong>Nevýhody kultivace:</strong> pomalé, biosafety požadavky"
      },
      quiz: [
        {
          q: "Který základní znak potvrzuje replikaci viru v tkáňové kultuře?",
          options: ["Zákal kultivačního média", "Cytopatický efekt (CPE)", "Pozitivní Gramovo barvení", "Tvorba spor"],
          correct: 1,
          explanation: "Cytopatický efekt (CPE) jsou morfologické změny buněk (zaokrouhlení, lýza, tvorba syncytií, inkluzní tělíska) způsobené virem – klíčový důkaz virové replikace."
        },
        {
          q: "Která metoda přímé diagnostiky virů je nejcitlivější?",
          options: ["Elektronová mikroskopie", "ELISA antigenový test", "Real-time PCR", "Kultivace na tkáňových kulturách"],
          correct: 2,
          explanation: "Real-time (kvantitativní) PCR je nejcitlivější – detekuje i jednotky kopií nukleové kyseliny ve vzorku."
        },
        {
          q: "Pro průkaz rotavirů ve stolici se nejčastěji používá:",
          options: ["Kultivace na tkáňových kulturách", "ELISA průkaz antigenu ve stolici", "Sérologický průkaz protilátek", "Gramovo barvení"],
          correct: 1,
          explanation: "ELISA průkaz antigenu ve stolici je pro rotaviry standardní – vysoká citlivost i specifita, vhodná pro rutinní diagnostiku."
        }
      ]
    }
  },
  {
    id: "mikra-2",
    cislo: 2,
    skupina_a: "Bakteriologie",
    skupina_b: "Diagnostika",
    cast_a: {
      title: "Bordetella, Brucella",
      keywords: ["Bordetella pertussis", "pertussis toxin", "Brucella", "zoonóza", "černý kašel"],
      content: {
        definice: "<strong>Bordetella:</strong> G- kokobacily, striktně aerobní. Nejdůležitější B. pertussis (původce černého kašle) a B. parapertussis.<br><strong>Brucella:</strong> G- kokobacily, intracelulární parazit. Zoonotický patogen – přenos ze zvířat na člověka.",
        etiologie: "<strong>Bordetella pertussis:</strong> Pouzdro (K-antigen), pertussis toxin (PT), filamentózní hemaglutinin (FHA), pertaktin – faktory virulence a adheze. Kultivace obtížná – Bordet-Gengou (BG) agar nebo Jones-Kendrick agar, inkubace 7–10 dní. Kolonie: «perlové kapičky».<br><br><strong>Brucella spp.:</strong> B. melitensis (ovce, kozy, nejvíce patogenní), B. abortus (skot), B. suis (prasata), B. canis (psi). Intracelulární – přežívá v makrofázích. Kultivuje se na KA nebo tryptikáza sójovém agaru, 5–10 % CO₂, 37 °C.",
        patogeneze: "<strong>Bordetella:</strong> Kolonizace řasinkového epitelu DC → PT inhibuje Gi protein → zvýšení cAMP → exkrece hlenu, dysfunkce řasinek, lymfocytóza. Adenylátcyklázový toxin: inhibice fagocytózy.<br><br><strong>Brucella:</strong> Inhalace / ingescí pronikají do lymfatické tkáně → fagocytóza makrofágy, přežití a množení intracelulárně → šíření lymfohematogenní, tvoří granulomy (játra, slezina, kostní dřeň).",
        klinicky: "<strong>Černý kašel (pertussis):</strong><br>• Katarální fáze (1–2 týdny): rýma, kašel – velmi nakažlivé<br>• Paroxysmální fáze (2–6 týdnů): záchvaty kašle zakončené inspiračním hvízdáním (whoop), zvracení po kašlání, apnoe u kojenců<br>• Fáze rekonvalescence: kašel postupně ustupuje<br>Komplikace: pneumonie, encefalopatie, mort u kojenců<br><br><strong>Brucelóza:</strong><br>• Zvlněná horečka (febris undulans) – kolísavá horečka, profuzní noční poty, bolesti svalů a kloubů, únava<br>• Hepatosplenomegalie, lymfadenopatie<br>• Komplikace: endokarditida, neurobrucelóza, orchitida",
        laborator: "<strong>Bordetella:</strong> PCR z nasofaryngeálního výtěru (metoda volby), kultivace BG agaru (pomalá), sérologie (ELISA anti-PT IgA, IgG) – jen retrospektivně.<br><strong>Brucella:</strong> Kultivace z krve/kostní dřeně (BSL-3!), sérologie (Wrightova aglutinace – průkaz protilátky, pozitivní ≥ 1:160), ELISA, PCR.",
        terapie: "<strong>Bordetella:</strong> Azitromycin (1. volba), kotrimoxazol. Prevence: hexavakcína (DTaP/IPV/Hib/HBV) – 3 dávky + přeočkování.<br><strong>Brucella:</strong> Doxycyklin 6 týdnů + rifampicin (nebo streptomycin) – kombinace nutná."
      },
      quiz: [
        {
          q: "Která fáze černého kašle je nejnakažlivější?",
          options: ["Fáze rekonvalescence", "Paroxysmální fáze", "Katarální fáze", "Inkubační fáze"],
          correct: 2,
          explanation: "Katarální fáze (1–2 týdny) – příznaky jako běžná rýma a kašel, ale B. pertussis se vylučuje v největším množství. Pacient je velmi nakažlivý."
        },
        {
          q: "Který druh Brucella je nejpatogeničtější pro člověka?",
          options: ["B. abortus", "B. canis", "B. melitensis", "B. suis"],
          correct: 2,
          explanation: "Brucella melitensis (ovce, kozy) způsobuje nejzávažnější formy brucelózy u člověka."
        },
        {
          q: "Pertussis toxin způsobuje lymfocytózu mechanizmem:",
          options: ["Aktivace T-lymfocytů přes superantigen", "Inhibice Gi proteinu → zvýšení cAMP → inhibice migrace lymfocytů", "Blokáda receptorů pro chemokiny", "Přímá destrukce neutrofilů"],
          correct: 1,
          explanation: "PT inhibuje Gi protein → neinhibovaná adenylátcykláza → zvýšení cAMP → inhibice migrace lymfocytů z krve → lymfocytóza."
        }
      ]
    },
    cast_b: {
      title: "Nepřímá diagnostika virů (sérologie)",
      keywords: ["ELISA", "KFR", "HIT", "protilátky", "IgM", "IgG", "serokonverze"],
      content: {
        definice: "Nepřímá (sérologická) diagnostika detekuje specifické protilátky v séru pacienta jako reakci na virovou infekci. Nevýhoda: pozitivní nález protilátek neznamená aktivní infekci (může být přetrvávající IgG po prodělané infekci).",
        metody: "<strong>1. ELISA (Enzyme-Linked Immunosorbent Assay):</strong><br>• Nejpoužívanější sérologická metoda<br>• Detekuje IgM (akutní infekce), IgG (prodělaná/chronická), IgA (slizniční)<br>• Průkaz specifických protilátek nebo virových antigenů<br>• Automatizovatelná, vysoká citlivost a specifita<br><br><strong>2. KFR (Komplementfixační reakce):</strong><br>• Klasická metoda, stále používána<br>• Průkaz celkových protilátek (IgG + IgM)<br>• Pozitivní výsledek: serokonverze nebo 4násobný vzestup titru ve 2 sérech<br>• Nevýhoda: nerozlišuje IgM a IgG<br><br><strong>3. HIT (Hemaglutinačně inhibiční test):</strong><br>• Pro viry se schopností hemaglutinace (chřipka, zarděnky, klíšťová encefalitida)<br>• Protilátky inhibují hemaglutinaci erytrocytů virem<br>• Pozitivní výsledek: 4násobný vzestup titru<br><br><strong>4. VNT (Virus neutralizační test):</strong><br>• Zlatý standard, nejspecifičtější<br>• Neutralizační protilátky zamezí CPE v tkáňové kultuře<br>• Pracný, provádí se v referenčních laboratořích<br><br><strong>5. Nepřímá imunofluorescence (IIF):</strong><br>• Průkaz protilátek pomocí fluorescenčně značených anti-imunoglobulinů<br><br><strong>Interpretace výsledků:</strong><br>• IgM přítomnost → akutní infekce<br>• IgG bez IgM → prodělaná infekce nebo vakcinace<br>• 4násobný vzestup IgG v párovém séru → aktivní infekce<br>• Serokonverze = přechod ze séronegativního na séropozitivní",
        vzorek: "Párová séra: 1. odběr v akutní fázi, 2. odběr za 2–3 týdny. Oba vzorky se vyšetřují současně pro srovnání titrů protilátek."
      },
      quiz: [
        {
          q: "Co znamená serokonverze při sérologické diagnostice virové infekce?",
          options: ["Vzestup IgM nad IgG", "Přechod ze séronegativního na séropozitivní nález", "Pokles titru protilátek na nulu", "Průkaz viru v séru"],
          correct: 1,
          explanation: "Serokonverze = pacient byl séronegativní a ve 2. séru se poprvé prokázaly specifické protilátky – jasný průkaz primární infekce."
        },
        {
          q: "Která imunoglobulinová třída svědčí nejspolehlivěji pro akutní virovou infekci?",
          options: ["IgA", "IgG", "IgM", "IgE"],
          correct: 2,
          explanation: "IgM jsou první protilátky, které se tvoří při akutní infekci a rychle klesají. Přítomnost IgM svědčí pro akutní nebo recentní infekci."
        },
        {
          q: "4násobný vzestup titru protilátek v párovém séru při KFR svědčí pro:",
          options: ["Prodělanou infekci", "Aktivní (aktuální) infekci", "Imunitu po vakcinaci", "Nespecifickou reakci"],
          correct: 1,
          explanation: "4násobný vzestup titru IgG v párovém séru (odebraném s odstupem 2–3 týdnů) je diagnostickým kritériem aktivní infekce."
        }
      ]
    }
  },
  {
    id: "mikra-3",
    cislo: 3,
    skupina_a: "Bakteriologie",
    skupina_b: "Virologie",
    cast_a: {
      title: "Legionella, Gardnerella",
      keywords: ["Legionella pneumophila", "legionářská nemoc", "Pontiacká horečka", "Gardnerella vaginalis", "bakteriální vaginóza"],
      content: {
        definice: "<strong>Legionella:</strong> G- pleomorfní tyčinky, intracelulární patogen. Dělí se na desítky druhů – L. pneumophila (85 % infekcí) je nejdůležitější.<br><strong>Gardnerella vaginalis:</strong> G- nebo gramlabilní drobné tyčinky, jediný druh rodu. Součást poševní flóry, spouštěč bakteriální vaginózy.",
        etiologie: "<strong>Legionella:</strong> Prostředí – teplá voda (klimatizace, hydroterapie, vodovodní systémy). Inhalace aerosolů. Barvení: špatně se barví Gramem (unikátní mastné kyseliny v buněčné stěně), lépe stříbrem. Kultivace: médium BCYE (s cysteinem a ACES pufrem).<br><br><strong>Gardnerella:</strong> Součást normální poševní mikroflóry. Při přemnožení (po narušení hormonální rovnováhy, vymizení laktobacilů) → bakteriální vaginóza. Kultivace: dvojvrstvý krevní agar, hemolytické kolonie.",
        patogeneze: "<strong>Legionella:</strong> Inhalace aerosolů → fagocytóza alveolárními makrofágy → přežívá a množí se intracelulárně → destrukce plicní tkáně, vznik mikroabscesů.<br><strong>Gardnerella:</strong> Vymizení laktobacilů (produkujících H₂O₂) → přemnožení → bakteriální vaginóza (klíčové buňky = epiteliální buňky pokryté bakteriemi).",
        klinicky: "<strong>Legionářská nemoc:</strong> Těžká pneumonie, horečka, třesavka, suchý kašel, bolesti na hrudi, zmatenost, mikroabscesy v plicích. Mortalita 15–20 %. Predispozice: nízká imunita, kuřáci, stáří.<br><strong>Pontiacká horečka:</strong> Lehké chřipkovité onemocnění, 2–5 dní, spontánně odezní.<br><br><strong>Bakteriální vaginóza:</strong> Vazký zapáchající výtok (fish odor = zápach po rybině), zesílení alkalickým prostředím (sperma). MOP II. typ (bez leukocytů, bez laktobacilů, přítomny klíčové buňky).",
        laborator: "<strong>Legionella:</strong> ELISA průkaz antigenu v moči (80 % citlivost, jen pro sérotyp 1), kultivace na BCYE, PCR z BAL/tracheálního aspirátu, sérologie (4násobný vzestup protilátek).<br><strong>Gardnerella:</strong> Přímý průkaz – kapka 10% KOH z výtoku → rybí zápach (aminový test), kultivace, pH pochvy > 4,5, klíčové buňky v mikroskopu.",
        terapie: "<strong>Legionella:</strong> Azitromycin nebo levofloxacin (těžké případy), erytromycin/tetracyklin (lehčí).<br><strong>Gardnerella:</strong> Metronidazol (perorálně nebo vaginálně), řešení hormonální rovnováhy."
      },
      quiz: [
        {
          q: "Proč se Legionella špatně barví Gramovým barvením?",
          options: ["Nemá buněčnou stěnu", "Obsahuje unikátní mastné kyseliny v buněčné stěně", "Je příliš malá", "Je intracelulární"],
          correct: 1,
          explanation: "Stěna Legionelly obsahuje unikátní větvené mastné kyseliny, které způsobují špatné barvení Gramem. Lépe se barví stříbrem nebo Giemsa."
        },
        {
          q: "Jakým způsobem je možné rychle diagnostikovat infekci Legionella pneumophila sérotyp 1?",
          options: ["Kultivace na BCYE agaru", "ELISA průkaz antigenu v moči", "Gramovo barvení sputa", "Weilova-Felixova reakce"],
          correct: 1,
          explanation: "ELISA průkaz legionelového antigenu v moči je rychlý (hodiny) a citlivý (80 %) test pro L. pneumophila sérotyp 1."
        },
        {
          q: "Klíčové buňky (clue cells) v poševním sekretu jsou charakteristické pro:",
          options: ["Kapavku", "Trichomoniázu", "Bakteriální vaginózu", "Kandidovou kolpitidu"],
          correct: 2,
          explanation: "Klíčové buňky = vaginální epiteliální buňky pokryté vrstvou bakterií (Gardnerella a dalšími anaeroby) – patognomický nález bakteriální vaginózy."
        }
      ]
    },
    cast_b: {
      title: "Chřipka a chřipkové viry",
      keywords: ["influenza", "hemaglutinin", "neuraminidáza", "antigenní drift", "shift", "pandemie"],
      content: {
        definice: "Chřipkové viry (Influenzavirus A, B, C) – čeleď Orthomyxoviridae, obalené RNA viry se segmentovaným genomem (8 segmentů u A a B, 7 u C). Infekce akutních dýchacích cest.",
        klasifikace: "<strong>Influenza A:</strong> H1–H18, N1–N11 – podtypy dle hemaglutininu (H) a neuraminidázy (N). Způsobuje epidemie i pandemie. Rezervoár: vodní ptáci.<br><strong>Influenza B:</strong> Jen dva linie (Victoria, Yamagata). Epidemie, ne pandemie.<br><strong>Influenza C:</strong> Jen mírné infekce.",
        patogeneze: "<strong>Hemaglutinin (H):</strong> Vazba na sialic acid receptory (α2,6 u člověka v HCD; α2,3 u ptáků v DC dolní). Fúze obalové membrány s endozomální → uvolnění viru.<br><strong>Neuraminidáza (N):</strong> Štěpí sialic acid → uvolnění nových virionů z povrchu buňky, usnadnění šíření.<br><strong>Antigenní drift:</strong> Bodové mutace v H/N genech → nový sérotyp, epidemie. Každoroční změny.<br><strong>Antigenní shift:</strong> Přeskupení genomových segmentů (reassortment) – nová kombinace H a N → pandemie (1918 španělská chřipka H1N1, 2009 prasečí chřipka).",
        klinicky: "Inkubace 1–4 dny. Náhlý začátek: horečka ≥ 38 °C, myalgie, artralgie, bolest hlavy, suchý kašel, slabost. Komplikace: bakteriální superinfekce (Staphylococcus, Streptococcus pneumoniae, H. influenzae), virová pneumonie, encefalitida. Rizikoví: starší, děti, těhotné, imunosuprimovaní, chronicky nemocní.",
        laborator: "PCR (nasopharyngeal swab) – nejcitlivější. Rychlé antigeny testy (citlivost 50–70 %, specifita > 90 %). Kultivace na embryonovaném vejci nebo MDCK buňkách. Sérologie (HIT, KFR) – retrospektivně.",
        prevence: "Každoroční vakcinace (inaktivovaná nebo živá atenuovaná), reformulace dle WHO doporučení. Antivirotika: oseltamivir (Tamiflu), zanamivir (inhib. neuraminidázy) – do 48 hod. od příznaků."
      },
      quiz: [
        {
          q: "Antigenní shift u chřipkového viru A vede k:",
          options: ["Každoroční malé antigenní variabilitě", "Vyměně celých genomových segmentů → nový podtyp → pandemie", "Bodovým mutacím v hemaglutininu", "Imunitní odpovědi ve sliznici"],
          correct: 1,
          explanation: "Antigenní shift = přeskupení (reassortment) celých genomových segmentů mezi dvěma různými chřipkovými viry (např. lidský a ptačí) → nový podtyp H/N → imunologicky naivní populace → pandemie."
        },
        {
          q: "Jaká je funkce neuraminidázy chřipkového viru?",
          options: ["Vazba viru na buněčný receptor", "Uvolnění nových virionů z povrchu infikované buňky", "Replikace virové RNA", "Tvorba obalové membrány"],
          correct: 1,
          explanation: "Neuraminidáza štěpí kyselinu sialovou → oddělí nové viriony od povrchu buňky → umožní šíření infekce. Inhibitory neuraminidázy (oseltamivir) blokují tento krok."
        },
        {
          q: "Které receptory pro hemaglutinin influenza viru jsou přítomny v horních dýchacích cestách člověka?",
          options: ["α2,3-sialyl receptory", "α2,6-sialyl receptory", "ACE2 receptory", "CD4 receptory"],
          correct: 1,
          explanation: "Lidské HCD obsahují α2,6-sialyl receptory – na ně se váže hemaglutinin sezónních chřipek. Ptáci mají α2,3 receptory v dolní DC – proto ptačí chřipka (H5N1) špatně infikuje HCD člověka."
        }
      ]
    }
  },
  {
    id: "mikra-4",
    cislo: 4,
    skupina_a: "Bakteriologie",
    skupina_b: "Virologie",
    cast_a: {
      title: "Intracelulární G- tyčinky: Rickettsia, Coxiella, Chlamydia, Francisella",
      keywords: ["Rickettsia", "Coxiella burnetii", "Chlamydia", "horečka Q", "tularémie", "intracelulární"],
      content: {
        definice: "Skupína gramnegativních obligátních nebo fakultativních intracelulárních bakterií – neschopné dlouhodobého přežívání mimo buňku hostitele. Zvláštní kultivační nároky (tkáňové kultury nebo embryonovaná vejce).",
        etiologie: "<strong>Chlamydia/Chlamydophila:</strong> C. trachomatis (trachom, STI, psittakóza), C. psittaci (psittakóza), C. pneumoniae (pneumonie). Dvoufázový životní cyklus: elementární tělísko (infekční) → retikulární tělísko (replikuje se intracelulárně).<br><br><strong>Coxiella burnetii:</strong> Původce horečky Q. Tvoří spóry (odolná). Zoonóza (skot, ovce). Přenos: inhalace prachu, konzumace nepasterizovaného mléka.<br><br><strong>Rickettsia:</strong> Přenášeny členovci (klíšťata, vši, blechy). R. rickettsii (Spotted Fever), R. prowazekii (epidemický tyfus). Barvení: Giemsa, Gimenez.<br><br><strong>Francisella tularensis:</strong> Zoonotická infekce (tularémie). Přenos: kontakt s hlodavci, bodnutí klíštětem. BSL-3 patogen.",
        klinicky: "<strong>Chlamydia trachomatis:</strong> Urogenitální infekce (NGU, servarianty D–K), trachom (slepota, sérovary A–C), lymfogranuloma venereum (L1–L3).<br><strong>Q horečka:</strong> Akutní: chřipkovitá onemocnění, pneumonie, hepatitida. Chronická: endokarditida (až léta po infekci).<br><strong>Rickettsiální nemoci:</strong> Tyfusová horečka (vši), středomořská horečka (klíšťata), rickettsiální neštovice.<br><strong>Tularémie:</strong> Ulceroglandulární, okularglandulární, pneumonická forma.",
        laborator: "Chlamydie: PCR z výtěru, kultivace na McCoy buňkách, sérologie ELISA (IgM, IgG). Coxiella: sérologie ELISA/IFA (fáze I a II antigeny). Rickettsia: klinický obraz + sérologie (IFA). Francisella: kultivace BSL-3, PCR, sérologie.",
        terapie: "Doxycyklin – volba pro všechny. Azitromycin alternativa pro Chlamydie. Fluorochinolony pro Chlamydia pneumoniae."
      },
      quiz: [
        {
          q: "Jaká jsou dvě formy životního cyklu Chlamydií?",
          options: ["Vegetativní a sporulující", "Elementární tělísko a retikulární tělísko", "Trofozoiti a cysty", "Hyfy a konidie"],
          correct: 1,
          explanation: "Elementární tělísko (EB) = malá, metabolicky neaktivní, infekční forma; retikulární tělísko (RB) = velká forma, intracelulárně se dělí, ale není infekční."
        },
        {
          q: "Která bakterie je původcem horečky Q?",
          options: ["Rickettsia rickettsii", "Francisella tularensis", "Coxiella burnetii", "Chlamydia psittaci"],
          correct: 2,
          explanation: "Coxiella burnetii způsobuje horečku Q – zoonózu přenášenou ze skotu, ovcí. Tvoří spóry, přežívá v prostředí, přenáší se inhalací kontaminovaného prachu."
        }
      ]
    },
    cast_b: {
      title: "Respirační viry (jiné než chřipka)",
      keywords: ["parainfluenza", "RSV", "adenovirus", "rhinovirus", "coronavirus", "metapneumovirus"],
      content: {
        definice: "Respirační viry způsobující infekce dýchacích cest od běžné rýmy po těžkou pneumonii. Patří sem viry různých čeledí.",
        viry: "<strong>Viry parainfluenzy (PIV 1–4):</strong> Čeleď Paramyxoviridae. RNA viry, obalené. PIV 1, 3 = Respirovirus; PIV 2, 4 = Rubulovirus. Antigenně stálé. PIV 1,2 → krup; PIV 3 → bronchiolitis u kojenců. Nejzávažnější u dětí < 2 roky (hrozí obstrukce DC).<br><br><strong>RS virus (RSV):</strong> Čeleď Paramyxoviridae, rod Pneumovirus. RNA obalený virus. Napadené buňky tvoří syncytia. Nejzávažnější bronchiolitida u novorozenců a kojenců (mateřské protilátky nechrání!). Léčba: ribavirin u těžkých stavů.<br><br><strong>Adenoviry:</strong> Čeleď Adenoviridae, neobalené DNA viry. 51 sérotypů. Velmi odolné. Způsobují: katary HCD (hlav. děti), adenovirová pneumonie, faryngokonjunktivální horečka (typ 3,4,7), epidemická keratokonjunktivitida (typ 8,37), hemoragická cystitida (typ 11), virová gastroenteritida (typ 40,41).<br><br><strong>Rhinoviry:</strong> Čeleď Picornaviridae, neobalené RNA viry. > 100 sérotypů. Hlavní původce infekční rýmy, otitidy, sinusitidy.<br><br><strong>Coronaviry:</strong> Čeleď Coronaviridae, obalené RNA viry. Tvar: věnec kuželovitých výběžků (corona = koruna). Způsobují rýmy, vzácně pneumonie. SARS-CoV (2002–2003, smrtnost 10 %), MERS-CoV (2012, smrtnost 40 %), SARS-CoV-2 (COVID-19).<br><br><strong>Lidský metapneumovirus:</strong> Paramyxoviridae/Pneumovirus – podobný RSV, lehčí průběh.",
        diagnostika: "1) PCR – přímý průkaz z výtěru nosohltanu, BAL, tracheal. aspirát. 2) KFR – sérologie (4násobný vzestup titru). 3) ELISA – průkaz IgG, IgM, IgA. Rapid antigenní testy pro RSV, adenoviry."
      },
      quiz: [
        {
          q: "RSV (respirační syncytiální virus) je nejnebezpečnější pro:",
          options: ["Dospělé s CHOPN", "Novorozence a kojence do 6 měsíců", "Školní děti", "Starší osoby s diabetem"],
          correct: 1,
          explanation: "RSV způsobuje závažné bronchiolitis a bronchopneumonie u novorozenců a kojenců. Mateřské protilátky neposkytují ochranu – proto tato věková skupina nejvíce ohrožena."
        },
        {
          q: "Který sérotyp adenoviru způsobuje hemoragickou cystitidu?",
          options: ["Typ 3", "Typ 8", "Typ 11", "Typ 41"],
          correct: 2,
          explanation: "Adenovirus typ 11 je hlavní příčinou hemoragické cystitidy (krvavá moč, dysurie), nejčastěji u dětí a imunosuprimovaných."
        }
      ]
    }
  },
  {
    id: "mikra-5",
    cislo: 5,
    skupina_a: "Bakteriologie",
    skupina_b: "Virologie",
    cast_a: {
      title: "Campylobacter, Helicobacter",
      keywords: ["Campylobacter jejuni", "Helicobacter pylori", "mikroaerofilní", "vřed", "gastritida", "průjem"],
      content: {
        definice: "Gramnegativní mikroaerofilní tyčinky. Campylobacter: hlavní příčina bakteriální gastroenteritidy. Helicobacter pylori: klíčový faktor vzniku gastritidy a vředové choroby.",
        etiologie: "<strong>Campylobacter jejuni:</strong> Pohyblivý bičíkem. Kultivace: selektivní média (Skirrow, Karmali/CSM agar), 5% O₂, 10% CO₂, 85% N₂, při 42 °C (termofilia!), 24–72 h. Oxidáza i kataláza pozitivní.<br><br><strong>Helicobacter pylori:</strong> Spirální tvar, pohyb šroubovitý. Produkuje ureas, katalázu, oxidázu. Kultivace: čokoládový agar, Thayerův-Martinův agar, 5% O₂, 10% CO₂, 37 °C, 7 dní.",
        patogeneze: "<strong>C. jejuni:</strong> Proniká slizniční epitel střeva → zánět (krev ve stolici). Toxiny (CDT – cytolethal distending toxin).<br><br><strong>H. pylori:</strong> Usazuje se v žaludeční sliznici. Ureasa → amoniakový oblak → alkalické mikroprostředí → přežívání. Produkuje glykosulfatázu → destrukce epitelu → gastritida → vředy. CagA protein (virulentní kmeny) → malignita.",
        klinicky: "<strong>C. jejuni:</strong> Bolesti břicha, průjem (krev ve stolici), horečka – odezní 1 týden bez ATB. Sepse při průniku do krve. Zdroj: nedopečené kuřecí maso.<br><br><strong>H. pylori:</strong> Chronická gastritida, vředy žaludku a duodena. Asociace s MALT lymfomem žaludku a adenokarcinomem.",
        laborator: "<strong>Campylobacter:</strong> Kultivace + mikroskopie stolice, oxidázová reakce, test citlivosti. ELISA průkaz antigenu ve stolici.<br><strong>H. pylori:</strong> Biopsie žaludeční sliznice: histologie, kultivace, ureasový test; dechový test (¹³C-urea → ¹³CO₂ ve výdechu); ELISA (antigen ve stolici, protilátky v séru).",
        terapie: "<strong>Campylobacter:</strong> Makrolidy (azitromycin, klaritromycin), aminoglykosidy, doxycyklin.<br><strong>H. pylori (eradikace):</strong> Trojkombinace: amoxicilin + klaritromycin + omeprazol (PPI). Alternativa: amoxicilin + metronidazol + vizmut."
      },
      quiz: [
        {
          q: "Proč se Campylobacter jejuni kultivuje při 42 °C?",
          options: ["Vyšší teplota urychluje růst", "Selekce termofilního C. jejuni (střevní teplota ptáků)", "Potlačuje normální střevní mikroflóru", "Obě b) a c)"],
          correct: 3,
          explanation: "42 °C odpovídá tělesné teplotě ptáků (hlavní zdroj C. jejuni) – při této teplotě C. jejuni roste, ale většina komenzální střevní mikroflóry nikoliv (selektivní kultivace)."
        },
        {
          q: "Jak Helicobacter pylori přežívá v kyselém prostředí žaludku?",
          options: ["Tvorba spor", "Ureasa produkuje amoniak → alkalické mikroprostředí kolem bakterie", "Buněčná stěna odolná vůči kyselinám", "Intracelulární přežívání v parietálních buňkách"],
          correct: 1,
          explanation: "H. pylori produkuje ureázu, která štěpí močovinu na NH₃ a CO₂ → amoniakový oblak kolem bakterie neutralizuje kyselinu → přežití v kyselém žaludku."
        },
        {
          q: "Dechový test pro diagnostiku H. pylori je postaven na principu:",
          options: ["Dechová alergie na H. pylori", "Značená ¹³C-urea je rozložena ureasou → ¹³CO₂ ve výdechu", "Průkaz protilátek v kondenzátu výdechu", "PCR z vydechovaného vzduchu"],
          correct: 1,
          explanation: "Pacient spolkne ¹³C (nebo ¹⁴C) značenou ureu. Urease H. pylori ji štěpí → ¹³CO₂ se vstřebá a vydechuje se – detekovatelné speciálním přístrojem."
        }
      ]
    },
    cast_b: {
      title: "Virové gastroenteritidy",
      keywords: ["rotaviry", "noroviry", "adenoviry", "gastroenteritida", "fekálně-orální", "EIA"],
      content: {
        definice: "Virové záněty GIT způsobují průjmy, zvracení, horečku. Malá infekční dávka (10–100 virů). Neobalené viry jsou mimořádně stabilní, odolné vůči dezinfekci, žluči a střevním proteázám.",
        viry: "<strong>Rotaviry:</strong> Neobalené RNA viry, 60–70 nm. 7 séroskupin (A–G), u lidí A,B,C. Infekční dávka 10 v.j. Přenos: fekálně-orální, zimní sezóna. Ohrožení: děti 2–4 měsíce. Inkubace: < 48 h. Projevy: horečka, zvracení, průjem (3–8 dní). Očkování: ROTARIX (2 dávky), ROTATEQ (3 dávky).<br><br><strong>Noroviry:</strong> Rod Norovirus, neobalené RNA viry, < 30 nm. Infekce celoroční, i dospělí. Infekční dávka 10 v.j. Přenos: fekálně-orální, kontaminované potraviny (ústřice!), vzdušná cesta. Průjem a zvracení 3–7 dní, spontánní úzdrava.<br><br><strong>Adenoviry (enterální):</strong> Typy 40, 41 – způsobují gastroenteritidy hlavně u malých dětí. Delší inkubace (5–10 dní), delší trvání.<br><br><strong>Astroviry:</strong> Neobalené RNA viry, ≤ 30 nm. 8 sérotypů. Mírné infekce u malých dětí.",
        diagnostika: "<strong>EIA (ELISA):</strong> Průkaz antigenu ve stolici – pro rotaviry, noroviry, adenoviry, astroviry. Vysoká citlivost, vhodná pro větší počet vzorků.<br><strong>Elektronová mikroskopie:</strong> Rychlá detekce všech virů ve vzorku, nutno ≥ 10⁶ v/ml.<br><strong>PCR:</strong> Nejcitlivější, GE screening – všechny typy. Doporučena u negativní EIA s těžkým průběhem.<br><strong>Imunochromatografie:</strong> Rychlý test, nízká specifita.",
        terapie: "Symptomatická: rehydratace, doplnění minerálů. Žádná specifická antivirová léčba. Karanténa (zvl. v kolektivních zařízeních)."
      },
      quiz: [
        {
          q: "Která věková skupina je nejvíce ohrožena těžkou infekcí rotavirem?",
          options: ["Dospělí nad 60 let", "Teenageři", "Kojenci (2–4 měsíce)", "Těhotné ženy"],
          correct: 2,
          explanation: "Primoinfekce rotavirem je nejzávažnější u kojenců ve věku 2–4 měsíce – imunita ještě není vyvinuta. Krátkodobá imunita po infekci vede k opakovaným reinfekcím."
        },
        {
          q: "Noroviry jsou v epidemiologii gastroenteritid nebezpečné zejména proto, že:",
          options: ["Jsou přenášeny vzdušnou cestou a kontaktem, infekční dávka je velmi nízká", "Způsobují chronické infekce", "Jsou obalené a tedy snadno ničitelné dezinfekcí", "Způsobují jen infekce u imunosuprimovaných"],
          correct: 0,
          explanation: "Noroviry: infekční dávka 10 virových jednotek, přenos fekálně-orální i vzdušnou cestou (aerosolem při zvracení) – snadné šíření v uzavřených kolektivech (lodě, domovy, nemocnice)."
        }
      ]
    }
  },
  {
    id: "mikra-6",
    cislo: 6,
    skupina_a: "Bakteriologie",
    skupina_b: "Virologie",
    cast_a: {
      title: "Enterobakterie (kromě E. coli)",
      keywords: ["Enterobacteriaceae", "Klebsiella", "Proteus", "Serratia", "antigen O", "antigen H", "fekálně-orální"],
      content: {
        definice: "Čeleď Enterobacteriaceae – nejdůležitější G- tyčinky v klinické mikrobiologii. Gramnegativní, nesporulující, fakultativně anaerobní. Běžné a podmíněně patogenní organismy spjaté se střevem obratlovců.",
        morfologie: "Gramnegativní tyčinky, většina pohyblivá (výjimky: klebsiely, shigely, Y. pestis). Třídění dle antigenů: <strong>O-antigen</strong> (tělový, polysacharidový, termostabilní), <strong>H-antigen</strong> (bičíkový, flagelin, pohyblivé druhy), <strong>K-antigen</strong> (kapsulární polysacharid/polypeptid).",
        kultivace: "Rostou na většině půd. Diagnostika: fermentace laktosy na Endově/MacConkeyho agaru (laktosapozitivní = purpurové kolonie), produkce H₂S (XLD, DC agar pro salmonely), chromogenní agary.",
        klinicky: "Střevní infekce, mimostřevní infekce (uro, sepse, meningitidy u novorozenců). <strong>Klebsiella pneumoniae:</strong> Pneumonie, nozokomiální UTI, sepse; má pouzdro. <strong>Proteus mirabilis:</strong> UTI (alkalizuje moč), ledvinové kameny. <strong>Enterobacter, Serratia:</strong> Nozokomiální infekce. <strong>Morganella, Providencia:</strong> UTI."
      },
      quiz: [
        {
          q: "Které enterobakterie jsou nepohyblivé?",
          options: ["E. coli a Salmonella", "Klebsiella, Shigella a Yersinia pestis", "Proteus a Providencia", "Serratia a Morganella"],
          correct: 1,
          explanation: "Klebsiella (pouzdro místo bičíku), Shigella a Yersinia pestis jsou nepohyblivé enterobakterie – nemají H-antigen."
        },
        {
          q: "Laktosapozitivní kolonie enterobakterií na Endově agaru mají charakteristický:",
          options: ["Černý střed", "Kovový lesk (metalický lesk)", "Žluté zbarvení", "Průsvitný vzhled"],
          correct: 1,
          explanation: "E. coli a další laktosapozitivní enterobakterie na Endově agaru tvoří kolonie s kovovým (metalickým) leskem – prasátkovité kolonie."
        }
      ]
    },
    cast_b: {
      title: "Neuroinfekce (virové)",
      keywords: ["encefalitida", "meningitida", "enteroviry", "herpetické viry", "klíšťová encefalitida", "vzteklina"],
      content: {
        definice: "Zánětlivá onemocnění CNS způsobená viry. Mozek = encefalitida; meningy = meningitida; mícha = myelitida; míšní kořeny = radikulitida; periferní nervy = neuritida.",
        puvodci: "<strong>Enteroviry:</strong> Meningitida/meningoencefalitida, většinou lehký průběh. Děti. EV71 → rombencefalitida.<br><br><strong>Herpetické viry:</strong><br>• VZV: encefalitida/cerebellitida (komplikace varicelly), pásový opar<br>• HSV-1: nejzávažnější herpetická encefalitida (hemoragická nekróza temporálního laloku), neléčená smrtnost 70 %<br>• CMV: encefalitida hlavně u HIV+<br>• HHV-6: exanthema subitum, vzácně encefalitida<br><br><strong>Arboviry:</strong><br>• Klíšťová encefalitida (KE): bifázický průběh (viremická fáze → asymptomatické období → neurologická fáze). Přenáší klíšťata Ixodes. Prevence: vakcinace.<br>• West Nile virus: 80 % asymptomaticky<br>• Virus japonské encefalitidy (JV Asie)<br><br><strong>Vzteklina (rabies):</strong> Čeleď Rhabdoviridae. Patogenní pro všechny teplokrevné. Inkubace dlouhá (30 dní–rok). Negriho tělíska v nervových buňkách. Šíří se centripetálně podél nervů do CNS. Smrtnost 100 %. Prevence: očkování psů, lišek, antirabická vakcína do 48h od pokousání.",
        diagnostika: "Přímý průkaz: PCR z likvoru (metoda volby). Kultivace na tkáňových kulturách. Elektronová mikroskopie. Nepřímý průkaz: specifické protilátky v krvi i likvoru (intrathekální syntéza).",
        klinicky: "Náhlý začátek s horečkou, bolest hlavy (meningitida), ložiskové neurologické příznaky, epileptické záchvaty, porucha vědomí a chování (encefalitida). Likvor: lymfocytární pleocytóza."
      },
      quiz: [
        {
          q: "Bifázický průběh je typický pro:",
          options: ["Herpetickou encefalitidu", "Enterovirovou meningitidu", "Klíšťovou encefalitidu", "Vzteklinu"],
          correct: 2,
          explanation: "Klíšťová encefalitida: 1. viremická fáze (horečka, myalgie) → 2. asymptomatické období (2–10 dní) → 3. neurologická fáze (meningoencefalitida). Bifázický průběh."
        },
        {
          q: "Která herpetická encefalitida je nejzávažnější a postihuje temporální laloky?",
          options: ["CMV encefalitida", "VZV cerebellitida", "HSV-1 encefalitida", "HHV-6 encefalitida"],
          correct: 2,
          explanation: "HSV-1 encefalitida: hemoragická nekróza temporálních laloků, neléčená smrtnost 70 %, přeživší těžce postiženi. Léčba: aciklovir do 48 h od příznaků."
        }
      ]
    }
  },
  {
    id: "mikra-7",
    cislo: 7,
    skupina_a: "Bakteriologie",
    skupina_b: "Virologie",
    cast_a: {
      title: "Escherichia coli, Shigella",
      keywords: ["E. coli", "EPEC", "ETEC", "EHEC", "STEC", "Shigella", "shigelóza", "úplavice", "enterotoxin"],
      content: {
        definice: "<strong>Escherichia coli:</strong> Nejdůležitější enterobakterie, součást normální střevní mikroflóry. Ve střevě patogenní jen při specifických faktorech virulence. Mimo střevo vždy patogenní.<br><strong>Shigella:</strong> G- nepohyblivé tyčinky (4 druhy: S. flexneri, sonnei, dysenteriae, boydii), původce bakteriální úplavice (shigelózy).",
        ecoli_kmeny: "<strong>EPEC</strong> (enteropatogenní): Novorozenecké průjmy, adherence na sliznici.<br><strong>ETEC</strong> (enterotoxigenní): Enterotoxiny ST (tepelně stabilní) a LT (tepelně labilní, zvyšuje cAMP → hypersekrece). Cestovatelský průjem, rozvojové země.<br><strong>EIEC</strong> (enteroinvazivní): Invaze do střeva → krvavý průjem.<br><strong>STEC/VTEC/EHEC</strong> (shiga-like toxiny): Nejzávažnější. Krvavé průjmy, infekční dávka 10 bakterií. Hemolyticko-uremický syndrom (HUS). Zdroj: hovězí. ATB nedoporučena (uvolnění toxinů).<br><strong>EAggEC</strong>: Cestovatelské průjmy v Asii.<br><strong>UPEC</strong>: Uroinfekce (80 % UTI).",
        shigella: "<strong>Shigelóza = úplavice:</strong> Čistě lidská infekce. Infekční dávka 100 bakterií. Inkubace 3–7 dní. Projevy: tenesmy, průjem s hlenem a hnisem, horečka, slabost. Shiga toxin (S. dysenteriae): enterotoxické, neurotoxické, cytotoxické účinky. Přenos: fekálně-orální („nemoc špinavých rukou"). Léčba: doplnění tekutin, ATB (endiaron, kotrimoxazol) jen zpočátku.",
        diagnostika: "E. coli: kultivace (Endův agar – metalický lesk), biochemie, PYR-test (negativní u E. coli, odlišení od Klebsielly), ELISA antigenu, sorbitolový MacConkey (STEC). Shigella: kultivace (rektální výtěr), biochemie, O-antigenová typizace."
      },
      quiz: [
        {
          q: "Proč je ATB léčba u infekce EHEC/STEC kontraindikována?",
          options: ["EHEC je resistentní na všechna ATB", "ATB uvolní shiga toxiny z lyzovaných bakterií → zhoršení HUS", "ATB nejsou účinná v průsvitu střeva", "Zvyšuje riziko alergické reakce"],
          correct: 1,
          explanation: "Při lýze STEC bakterií (antibiotiky) se masivně uvolní shiga-like toxiny → proniknou do krve → hemolyticko-uremický syndrom (HUS) s akutním selháním ledvin."
        },
        {
          q: "Tenesmy jsou typickým příznakem u:",
          options: ["Salmonelózy", "Cholerovitého onemocnění", "Shigelózy", "Norovirózy"],
          correct: 2,
          explanation: "Tenesmy = frekventované bolestivé nutkání na stolici bez efektivní defekace – patognomický příznak shigelózy, způsobený zánětem distálního tlustého střeva."
        },
        {
          q: "Enterotoxin LT (tepelně labilní) kmene ETEC způsobuje průjem mechanizmem:",
          options: ["Invasí do slizniční buňky", "Aktivace adenylátcyklázy → zvýšení cAMP → hypersekrece iontů a vody do střeva", "Přímé poškození sliznice střeva", "Supresí imunitní odpovědi"],
          correct: 1,
          explanation: "LT toxin ETEC aktivuje adenylátcyklázu → zvyšuje intracelulární cAMP → otevření chloridových kanálů → hypersekrece vody a elektrolytů → vodnatý průjem (mechanismus stejný jako u choleragenu Vibrio cholerae)."
        }
      ]
    },
    cast_b: {
      title: "Herpetické viry",
      keywords: ["HSV-1", "HSV-2", "VZV", "CMV", "EBV", "HHV-6", "herpetické", "DNA viry", "latence"],
      content: {
        definice: "Čeleď Herpesviridae – obalené DNA viry, 120–200 nm. Kapsida kubické symetrie (20-stěn). Na člověka patogenní 8 virů, děleny do 3 podčeledí (alfa, beta, gama). Klíčová vlastnost: LATENCE – po primární infekci přetrvávají v buňkách hostitele jako latentní genom → reaktivace.",
        viry: "<strong>α-herpesvirinae:</strong><br>• VZV (Varicella-zoster): primárně plané neštovice, latence v gangliích → reaktivace → pásový opar (herpes zoster)<br>• HSV-1: gingivostomatitida, keratokonjunktivitida, encefalitida (temporální laloky), latence v trigeminálním gangliu → herpes labialis<br>• HSV-2: herpes genitalis, generalizovaný herpes novorozenců, latence v sakrálních gangliích<br><br><strong>β-herpesvirinae:</strong><br>• CMV (lidský cytomegalovirus): inaparentní, kongenitální CMV (nejčastější vrozená virová infekce), pneumonie + retinitida u HIV+, transplantáty<br>• HHV-6: 6. dětská nemoc (exanthema subitum), reaktivace po transplantaci<br>• HHV-7: podobný HHV-6<br><br><strong>γ-herpesvirinae:</strong><br>• EBV (Epstein-Barrové): infekční mononukleóza (horečka, anginóza, lymfadenopatie, hepatosplenomegalie), onkogenní (Burkittův lymfom, NPC)<br>• HHV-8: Kaposiho sarkom (HIV+)",
        diagnostika: "Přímý průkaz: PCR z likvoru (encefalitida), výtěry, krev (CMV). PCR je metoda volby pro CNS infekce. Sérologie (průkaz protilátek IgG, IgM). Intrathekální protilátky (důkaz CNS infekce).",
        terapie: "Aciklovir: HSV-1, HSV-2, VZV. Ganciklovir, valganciklovir: CMV. Foskarnet: aciklovir-rezistentní HSV/CMV."
      },
      quiz: [
        {
          q: "Ve kterém gangliu přetrvává HSV-1 v latentním stadiu?",
          options: ["Sakrálním gangliu", "Trigeminálním gangliu", "Dorsálním kořenovém gangliu C2–C4", "Celiakálním plexu"],
          correct: 1,
          explanation: "HSV-1 latentně přetrvává v trigeminálním (Gasserově) gangliu. Při reaktivaci (stres, infekce, UV záření) způsobuje herpes labialis nebo keratitidu."
        },
        {
          q: "Infekční mononukleózu (EBV) charakterizuje typická triáda:",
          options: ["Horečka, exantém, průjem", "Horečka, tonzilofaryngitida, lymfadenopatie (± hepatosplenomegalie)", "Kašel, rýma, konjunktivitida", "Vyrážka, artritida, karditida"],
          correct: 1,
          explanation: "Klasická triáda EBV mononukleózy: horečka + hnisavá angína + generalizovaná lymfadenopatie (zejm. krční uzliny) + hepatosplenomegalie. Monospot test (heterofilní protilátky)."
        }
      ]
    }
  },
  {
    id: "mikra-8",
    cislo: 8,
    skupina_a: "Bakteriologie",
    skupina_b: "Virologie",
    cast_a: {
      title: "Salmonella, Yersinia",
      keywords: ["Salmonella", "Yersinia pestis", "Yersinia enterocolitica", "tyfus", "mor", "enterobakterie"],
      content: {
        definice: "<strong>Salmonella enterica:</strong> G- enterobakterie. Primárně antropopatogenní (S. Typhi, S. Paratyphi) a primárně zoopatogenní (S. Typhimurium, S. Enteritidis).<br><strong>Yersinia:</strong> Y. pestis (původce moru), Y. enterocolitica a Y. pseudotuberculosis (střevní infekce).",
        salmonella_antrop: "<strong>Břišní tyfus (S. Typhi):</strong> Pouzderný Vi antigen. Pronikají lymfatickými uzlinami do krve (primární bakteriémie). Inkubace 10–14 dní. Projevy: septické horečky, bolest hlavy, růžové skvrny (roseoly) na kůži. Komplikace: střevní hemoragie, perforace. Mortalita 20 %. Laboratorní průkaz: kultivace z krve, kostní dřeně; sérologie (Widalova reakce, 4násobný vzestup titru O+H antiséra).",
        salmonella_zoo: "<strong>Zoopatogenní Salmonella:</strong> Nejčastější bakteriální střevní nákaza v ČR. Přenos: drůbež, vejce. Klasická gastroenteritida: průjem bez krve, horečka. ATB nedoporučena (prodlouží vylučování). Probiotika, prevence: správná příprava potravin.",
        yersinia: "<strong>Y. pestis (mor):</strong> 3 formy: dýmějový (bubonický), plicní, septický. Přenáší blecha Xenopsylla cheopis ze zvířat (krysy). Mortalita 30–75 % neléčený. ATB: fluorochinolony, streptomycin.<br><strong>Y. enterocolitica/pseudotuberculosis:</strong> Střevní infekce, lymfotropní (napadají apendix → pseudoapendicitida). Kultivace při chladničkových teplotách. Zdroj: vepřové. ATB: fluorochinolony, cefalosporiny 3. gen.",
        diagnostika: "Salmonella: laktosanegativní kolonie (Endův agar), bledé s černým středem (XLD agar), kultivace ze stolice (selen. bujón jako pomnožení), aglutinace (Kauffmann-White schéma). Yersinia: CIN agar, biochemie, aglutinace."
      },
      quiz: [
        {
          q: "Proč se ATB léčba nedoporučuje při nekomplikované zoopatogenní salmonelóze?",
          options: ["Salmonela je přirozeně rezistentní", "ATB zkrátí dobu příznaků, ale prodlouží dobu vylučování Salmonely", "ATB způsobují silné vedlejší účinky", "Průjem by se zhoršil"],
          correct: 1,
          explanation: "ATB léčba u nekomplikované salmonelózy zkrátí klinické příznaky, ale paradoxně prodlouží střevní vylučování salmonel → záchovat přirozenou imunitní odpověď."
        },
        {
          q: "Widalova reakce se používá k diagnostice:",
          options: ["Salmonella Typhimurium gastroenteritidy", "Břišního tyfu (S. Typhi)", "Yersiniózy", "Shigellózy"],
          correct: 1,
          explanation: "Widalova aglutinační reakce detekuje protilátky proti O a H antigenům S. Typhi. Pozitivní = sérum aglutinuje i ve stokrát zředěném stavu s oběma antigeny."
        }
      ]
    },
    cast_b: {
      title: "Arboviry",
      keywords: ["arbovirus", "klíšťata", "dengue", "West Nile", "Chikungunya", "Flaviviridae", "přenos"],
      content: {
        definice: "Arboviry (Arthropod-Born Viruses) – přenášeny krví sajícími členovci (komáři, klíšťata, koutule). RNA viry různých čeledí: Flaviviridae, Togaviridae, Bunyaviridae, Reoviridae. Zoonózy – člověk je náhodným hostitelem.",
        viry: "<strong>1. Klíšťová encefalitida (TBE):</strong> Flaviviridae/Flavivirus. Rezervoár: drobní savci. Vektor: Ixodes ricinus. Termolabilní (pasterizace). Acidorezistentní (mléko). Diagnostika: ELISA (IgM, IgG). Vakcinace: dostupná.<br><br><strong>2. West Nile virus:</strong> Flaviviridae. Rezervoár: ptáci. Vektor: komár Culex. 80 % asymptomaticky.<br><br><strong>3. Dengue:</strong> Flaviviridae. 4 sérotypy (opakovaná infekce jiným sérotypem → hemoragická horečka dengue, šokový syndrom). Vektor: Aedes. Diagnostika: PCR, NS-1 antigen.<br><br><strong>4. Chikungunya:</strong> Togaviridae/Alfavirus. Vektor: Aedes. Výrazná artralgie (měsíce).<br><br><strong>5. Japonská encefalitida:</strong> Flaviviridae. JV Asie. Vektor: Culex. Vakcinace dostupná.",
        klinicky: "Inaparentní průběh → akutní horečnatá onemocnění → artralgie → CNS onemocnění → hemoragická horečka.",
        klimaticke_zmeny: "Oteplování → rozšiřování klíšťat a komárů na vyšší nadmořskou výšku → zvýšená incidence arbovirových infekcí v Evropě. Záplavy → přemnožení komárů."
      },
      quiz: [
        {
          q: "Hemoragická horečka dengue vzniká typicky při:",
          options: ["Primoinfekcí dengue u kojenců", "Reinfekci jiným sérotypem dengue u dětí", "Infekci u imunosuprimovaných", "Přenosu krvavou transfuzí"],
          correct: 1,
          explanation: "Při reinfekci jiným sérotypem dengue existující protilátky zesilují vstup viru do makrofágů (antibody-dependent enhancement) → těžší průběh → hemoragická horečka dengue (DHF) nebo šokový syndrom (DSS)."
        }
      ]
    }
  },
  {
    id: "mikra-9",
    cislo: 9,
    skupina_a: "Bakteriologie",
    skupina_b: "Virologie",
    cast_a: {
      title: "Vibrio, Aeromonas, Plesiomonas",
      keywords: ["Vibrio cholerae", "cholera", "Aeromonas", "Plesiomonas", "choleragen", "dehydratace"],
      content: {
        definice: "Gramnegativní tyčinky z vodního prostředí, pohyblivé, oxidáza a kataláza pozitivní, fakultativně anaerobní. Způsobují průjmová onemocnění.",
        vibrio: "<strong>Rod Vibrio (60 druhů, 12 patogenních):</strong> Krátké ohnuté G- tyčinky, halofilní. Přežívají ve slané vodě, plodech moře, rybách.<br><br><strong>Vibrio cholerae:</strong> Původce cholery. Serotypy O1 a O139 → epidemická cholera. Choleragen (enterotoxin): váže se na GM1 gangliosid entrocytů → aktivuje adenylátcyklázu → zvýšení cAMP → hypersekrece (Cl⁻, Na⁺, H₂O) → rýžová stolice, rychlá dehydratace, šok, smrt. Léčba: rehydratace (klíčová!) + ATB (gentamicin, tetracyklin). Diagnostika: mikroskopie v temném poli, kultivace na TCŽS (žluté kolonie), alkalická peptonová voda (pomnožení).",
        aeromonas: "<strong>Rod Aeromonas:</strong> A. hydrophila, caviae, sobria. Krátké G- tyčinky, pohyblivé, oxidáza/kataláza +. Rezistentní na vibrostatikum O/129. Onemocnění: průjmy (děti), infekce ran vodou (myonekróza u starších mužů). Léčba: aminoglykosidy, chinolony.",
        plesiomonas: "<strong>Plesiomonas shigelloides:</strong> Jediný zástupce rodu. G- tyčinky, podobné Shigellám antigenně. Průjmy a vzácně septikémie. Léčba: širokospektrá ATB.",
        diagnostika: "String-test (Vibrio – vlákno z kapky deoxycholátu), oxidázový test, vibrostatický test (O/129). Kultivace Aeromonas: TCŽS agar (žluté kolonie s modrou zónou)."
      },
      quiz: [
        {
          q: "Mechanismus průjmu při choleře je:",
          options: ["Destrukce střevní sliznice toxinem", "Choleragen aktivuje adenylátcyklázu → zvýšení cAMP → hypersekrece vody a elektrolytů", "Invaze Vibria do slizničních buněk", "Produkce neurotoxinu"],
          correct: 1,
          explanation: "Choleragen (CT) se váže na GM1 receptor enterocytů → aktivuje adenylátcyklázu → cAMP ↑ → otevření CFTR kanálů → hypersekrece Cl⁻, Na⁺, H₂O → profúzní vodnatý průjem (rýžová stolice)."
        }
      ]
    },
    cast_b: {
      title: "Exantémové virové infekce",
      keywords: ["spalničky", "zarděnky", "plané neštovice", "příušnice", "exantém", "Koplikovy skvrny", "Greggův syndrom"],
      content: {
        definice: "Virová infekční onemocnění s charakteristickým kožním exantémem (vyrážkou). Většina je preventabilní vakcinací.",
        viry: "<strong>Příušnice (parotitis):</strong> Paramyxoviridae/Rubulavirus. RNA obalený virus. Inkubace 16–18 dní. Projevy: zduření příušnic, podjazykových žláz, horečka. Komplikace: aseptická meningitida (50–60 % asymptomaticky), orchitida (20–30 %, vzácně sterilita). Vakcinace: Priorix (MMR).<br><br><strong>Spalničky (morbilli):</strong> Paramyxoviridae/Morbillivirus. Koplikovy skvrny (bílé skvrny na bukální sliznici – patognomické!). Projevy: horečka, kašel, rýma, konjunktivitida → makulopapulózní exantém. Komplikace: bronchopneumonie, SSPE (subakutní sklerotizující panencefalitida – léta po infekci).<br><br><strong>Zarděnky (rubeola):</strong> Togaviridae/Rubivirus. Lehký průběh u dětí. Komplikace: <strong>Greggův syndrom</strong> (vrozený zarděnkový syndrom v I. trimestru těhotenství) – katarakta, srdeční vady, hluchota, mikrocefalie. Vakcinace: MMR.<br><br><strong>Plané neštovice (varicella):</strong> Herpesviridae/VZV. Inkubace 10–21 dní. Exantém s puchýřky v různých stádiích. Reaktivace: pásový opar (herpes zoster).<br><br><strong>5. dětská nemoc:</strong> Parvovirus B19 – erythema infectiosum, lícní erytém (slap cheek). Nebezpečné v těhotenství (hydrops fetalis).<br><br><strong>6. dětská nemoc:</strong> HHV-6 – exanthema subitum/roseola infantum. Vysoká horečka 1–3 dny, poté exantém na trupu.",
        diagnostika: "Příušnice, spalničky, zarděnky: kultivace + PCR (Stenonův výtěr, moč) nebo sérologie (ELISA IgM/IgG, KFR). Varicella: PCR z puchýřkové tekutiny."
      },
      quiz: [
        {
          q: "Koplikovy skvrny jsou patognomické pro:",
          options: ["Zarděnky", "Spalničky", "Příušnice", "Plané neštovice"],
          correct: 1,
          explanation: "Koplikovy skvrny = drobné bílé/šedavé skvrny s červeným lemem na bukální sliznici (oproti 2. moláru) – typické pouze pro spalničky, předcházejí exantému."
        },
        {
          q: "Greggův syndrom je způsoben infekcí matky v 1. trimestru těhotenství:",
          options: ["CMV", "Rubeolou (zarděnky)", "HSV-2", "Parvovirus B19"],
          correct: 1,
          explanation: "Greggův (vrozený zarděnkový) syndrom: infekce zarděnkami v 1. trimestru → vrozené vývojové vady: katarakta, srdeční vady, hluchota, mikrocefalie, hepatosplenomegalie."
        }
      ]
    }
  },
  {
    id: "mikra-10",
    cislo: 10,
    skupina_a: "Bakteriologie",
    skupina_b: "Virologie",
    cast_a: {
      title: "Pasteurella, Haemophilus",
      keywords: ["Pasteurella multocida", "Haemophilus influenzae", "epiglotitida", "meningitida", "kousnutí", "satelitový fenomén"],
      content: {
        definice: "<strong>Pasteurella multocida:</strong> Malý G- kokobacil s bipolárním barvením. Komenzál horních DC zvířat (kočky, psi).<br><strong>Haemophilus:</strong> Drobné nepohyblivé G- tyčinky. Čeleď Pasteurellaceae. Závislé na růstových faktorech X (hemin) a V (NAD).",
        pasteurella: "Infekce u člověka: kousnutí/škrábnutí (5 % psi, 30 % kočky). Lokální infekce ran (abscesy, celulitida, osteomyelitida), pneumonie, vzácně meningitida. Kultivace: krevní agar, 37 °C, nehemolytické duhové kolonie. Citlivá na většinu ATB (neobvyklé u G-), rezistentní na makrolidy. Léčba: amoxicilin-klavulanát.",
        haemophilus: "<strong>H. influenzae sérotyp b (Hib):</strong> Polysacharid PRP (POLYRIBOSYLRIBITOLFOSFÁT) – nejvíce invazivní. Akutní epiglotitida (děti 2–5 let, hrozí udušení), bakteriální meningitida (3–8 % mortalita), septická artritida.<br>Diagnostika: čokoládový agar (vyžaduje faktory X+V), satelitový fenomén (hemofilové rostou v okolí S. aureus kolonií), bacitracin rezistentní. Latexová aglutinace – sérotyp. Vakcinace: Hib vakcína (součást hexavakcíny).<br><br><strong>H. ducreyi:</strong> Původce měkkého vředu (ulcus molle) – STI. Bolestivé genitální ulcerace.<br><strong>H. aegyptius:</strong> Purulentní konjunktivitida u dětí.",
        terapie: "Haemophilus: amoxicilin; kmeny produkující beta-laktamázu: co-amoxiclav, cefuroxim, klaritromycin, kotrimoxazol."
      },
      quiz: [
        {
          q: "Satelitový fenomén u Haemophilu znamená:",
          options: ["Schopnost H. influenzae přežívat v satelitech (vzdušném prostoru)", "Hemofilové rostou v okolí S. aureus kolonií (S. aureus uvolní faktor V z erytrocytů)", "Schopnost hemolýzy", "Asociace s jinými bakteriemi"],
          correct: 1,
          explanation: "S. aureus hemolyzuje erytrocyty → uvolní faktor V (NAD) → Haemophilus (vyžadující V faktor) roste jen v okolí stafylokokových kolonií = satelitový (komet) fenomén."
        },
        {
          q: "Akutní epiglotitida způsobená H. influenzae je nejnebezpečnější u:",
          options: ["Novorozenců do 1 měsíce", "Dětí 2–5 let", "Dospělých nad 50 let", "Těhotných žen"],
          correct: 1,
          explanation: "H. influenzae sérotyp b způsobuje akutní epiglotitidu u dětí 2–5 let. Edém epiglotidu hrozí úplnou obstrukcí dýchacích cest – urgentní stav."
        }
      ]
    },
    cast_b: {
      title: "Virové hepatitidy",
      keywords: ["HAV", "HBV", "HCV", "HBsAg", "HBeAg", "chronická hepatitida", "cirhóza", "inkubace"],
      content: {
        definice: "Zánětlivé onemocnění jaterní tkáně způsobené primárně hepatotropními viry (HAV, HBV, HCV, HDV, HEV) nebo jinými viry (EBV, CMV).",
        viry: "<strong>HAV:</strong> RNA virus, Picornaviridae. Přenos: fekálně-orální. Inkubace: 15–50 dní. Ikterický průběh: děti < 5 let 10 %; dospělí ≥ 14 let 70 %. Nepřechází do chronicity. Vakcinace inaktivovanou vakcínou.<br><br><strong>HBV:</strong> DNA virus, Hepadnaviridae. Přenos: krev (parenterálně), sexuálně, perinatálně. Inkubace: 45–180 dní. Australský antigen = HBsAg (povrchový antigen). Daneovy částice = infekční viriony. Chronická hepatitida → cirhóza → hepatocelulární karcinom. Vakcinace: rekombinantní HBsAg.<br><br><strong>HCV:</strong> RNA virus, Flaviviridae. Přenos: krev. Inkubace: 15–160 dní. 6 genotypů. Chronicita 70 %! Léčba: DAA (přímá antivirotika) – sofosbuvir, daklatasvir – vysoce účinná.<br><br><strong>HDV:</strong> RNA deltavirus – HBV dependentní (nutný HBsAg obal). Koinfekce nebo superinfekce. Přenos: krev.<br><br><strong>HEV:</strong> RNA virus, Hepeviridae. Přenos: fekálně-orální (kontaminovaná voda). Smrtnost: 1–3 %, těhotné ženy 25 %.",
        diagnostika: "<strong>HBV markery:</strong> HBsAg (marker infekce), anti-HBc IgM (akutní), anti-HBc IgG (proběhlá/chronická), HBeAg (aktivní replikace), anti-HBe (rep. zastavena), HBV DNA (PCR).<br><strong>HAV:</strong> anti-HAV IgM (akutní), anti-HAV IgG (prodělaná/imunita).<br><strong>HCV:</strong> HCV Ag/Ab + PCR (HCV RNA)."
      },
      quiz: [
        {
          q: "Který marker HBV svědčí pro aktivní replikaci viru a vysokou infekčnost?",
          options: ["Anti-HBs", "Anti-HBc IgG", "HBeAg", "HBsAg"],
          correct: 2,
          explanation: "HBeAg (e-antigen HBV) svědčí pro aktivní virovou replikaci a vysokou infekčnost pacienta. Serokonverze HBeAg → anti-HBe značí ústup virové replikace."
        },
        {
          q: "HCV infekce přechází do chronicity v:",
          options: ["10 % případů", "30 % případů", "50 % případů", "70 % případů"],
          correct: 3,
          explanation: "Hepatitida C přechází do chronicity u 70 % infikovaných – proto je HCV nejzávažnějším chronickým hepatitickým virem. Moderní přímá antivirotika (DAA) dosahují > 95% vyléčení."
        }
      ]
    }
  },
  {
    id: "mikra-11",
    cislo: 11,
    skupina_a: "Bakteriologie",
    skupina_b: "Virologie",
    cast_a: {
      title: "Neisserie",
      keywords: ["Neisseria gonorrhoeae", "kapavka", "Neisseria meningitidis", "meningokok", "diplokoky", "IgA proteáza"],
      content: {
        definice: "G- aerobní koky, striktně aerobní. Diplokoky (párové uspořádání, zploštělé strany k sobě). Kapnofilní (vyžadují CO₂). Citlivé na vyschnutí a teplotu. Oxidáza a kataláza pozitivní.",
        gonorrhoeae: "<strong>Neisseria gonorrhoeae (gonokok):</strong> Původce kapavky (gonorrhoea). Pohlavně přenosná – přenos pouze sliznicí. Kultivace: čokoládový agar (nebo selektivní Thayerův-Martinův agar), předehřátý (teplotní šok!). Štěpí pouze glukózu.<br>Faktory virulence: piliny/fimbrie (adherence, antifagocytóza), LOS (endotoxin, lýze C), Opa faktor (endocytóza), IgA-proteáza, porin. Patogeneze: neinvazivní zánět urogenitálních sliznic → hnisavý výtok z uretry. U žen: salpingitis, peritonitida, sepse = DGI (diseminovaná gonokoková infekce).",
        meningitidis: "<strong>Neisseria meningitidis (meningokok):</strong> Kultivace: čokoládový + krevní agar, odolnější než gonokok. Štěpí glukózu a maltosu. Nosičství: 10 % zdravé populace (farynx). Invazivní infekce: sepse (DIC), purulentní meningitida. Kapsulární antigeny → vakcinace (4valentní vakcína A, C, W135, Y). Faktory virulence: IgA-proteáza, LOS, fimbrie, Opa, Opc, systém vázající transferin.",
        diagnostika: "Gonokok: výtěr z uretry/cervixu na vatovém tamponu → čokoládový agar. Mikroskopie: diplokoky v leukocytech. PCR (nejcitlivější). Meningokok: krev + likvor, mikroskopie, latexová aglutinace, kultivace.",
        terapie: "Kapavka: cefalosporiny 3. gen. (ceftriaxon), spektinomycin; rostoucí rezistence na fluorochinolony a peniciliny. Meningokokové infekce: penicilin (citlivé), ampicilin (rezistentní)."
      },
      quiz: [
        {
          q: "Jaká je charakteristická schopnost gonokoka, která mu umožňuje unikat protilátkové imunitě?",
          options: ["Tvorba spor", "Genová konverze pilů (fimbrií) → produkce nových sérotypů", "Intracelulární přežívání v lymfocytech", "Pouzdro z kyseliny hyaluronové"],
          correct: 1,
          explanation: "Gonokok má schopnost genové konverze – mění antigeny pilů (fimbrií) → produkuje nové sérotypy, vůči nimž imunita ještě neexistuje → uniká protilátkám."
        },
        {
          q: "Zdraví nositelé meningokoka (10 % populace) ho nejčastěji nesou v:",
          options: ["Nosohltanu/faryngu", "Střevě", "Uretře", "Kůži"],
          correct: 0,
          explanation: "Meningokok kolonizuje sliznici nosohltanu/faryngu bezpříznakových nosičů (10 % zdravé populace). Invazivní onemocnění vzniká jen u disponovaných jedinců."
        }
      ]
    },
    cast_b: {
      title: "Virové hemoragické horečky",
      keywords: ["Ebola", "Marburg", "Lassa", "hantaviry", "dengue hemoragická", "hemoragické", "petechie"],
      content: {
        definice: "Virová hemoragická horečka (VHF) – skupiny závažných virových onemocnění s horečkou a hemoragickými projevy (krvácení). Zahrnují viry z čeledí Flaviviridae, Filoviridae, Bunyaviridae a Arenaviridae.",
        viry: "<strong>Filoviridae:</strong> Marburg, Ebola (smrtnost 50–80 %). RNA viry, vláknitý tvar, přenášejí se přímým kontaktem.<br><strong>Arenaviridae:</strong> Lassa (smrtnost 10 %), Junin (J. Amerika), Machupo. Rezervoár: hlodavci.<br><strong>Bunyaviridae:</strong> Hantaviry (selhání ledvin), CCHF (Krymsko-konžská hemoragická horečka, klíšťata), horečka Údolí Rift.<br><strong>Flaviviridae:</strong> Žlutá zimnice, dengue hemoragická, omská hemoragická horečka.",
        klinicky: "Inkubace: 3–21 dní. Náhlá vysoká horečka, bolest hlavy, svalů, průjem, zvracení, kašel. Hemoragické projevy: petechie, melena, hemateméza, krvácení ze sliznic. Neurologické příznaky, edém krku (Lassa), selhání ledvin (hantaviry), škytavka (Ebola).",
        diagnostika: "PCR z krve/biopsie kůže/orgánu. Sérologie (ELISA, Western blot, IFA) – průkaz virových antigenů nebo IgM. Vyžaduje BSL-4 laboratoř (Ebola, Marburg, Lassa).",
        terapie: "Ribavirin (Lassa, hantaviry, CCHF). Podpůrná péče. Žlutá zimnice: vakcinace živou atenuovanou vakcínou."
      },
      quiz: [
        {
          q: "Která BSL (biosafety level) je vyžadována pro práci s Ebolou a Marburgem?",
          options: ["BSL-1", "BSL-2", "BSL-3", "BSL-4"],
          correct: 3,
          explanation: "Ebola a Marburg jsou BSL-4 patogeny – vyžadují práci v prostředí s nejvyšší biologickou bezpečností (plně hermetické oblečení, negativní tlak v laboratoři, neopravitelné poškození)."
        }
      ]
    }
  },
  {
    id: "mikra-12",
    cislo: 12,
    skupina_a: "Bakteriologie",
    skupina_b: "Diagnostika",
    cast_a: {
      title: "Gramnegativní anaerobní bakterie",
      keywords: ["Bacteroides fragilis", "Prevotella", "Fusobacterium", "anaerobní", "smíšené infekce", "VL agar"],
      content: {
        definice: "G- anaerobní bakterie – součást normální mikroflóry (nosohltan, vagina, urethra, GIT). Potenciální původci endogenních infekcí při narušení anatomické bariéry.",
        kultivace: "Choulostivé na O₂. Přísně anaerobní podmínky. VL agar (doporučeno s vit. K a heminem) nebo VL-bujon. Relativně pomalý růst (3–5 dní).",
        rody: "<strong>Bacteroides fragilis (skupina):</strong> Nejdůležitější – G- pleomorfní tyčinky. Infekce břišní dutiny, malé pánve, vaginy. Rezistence na penicilín a kanamaycin. Tvorba beta-laktamázy.<br><br><strong>Porphyromonas:</strong> Pigmentované (hnědočerné) kolonie, fluoreskují v UV. P. gingivalis (dutina ústní, parodontitida).<br><br><strong>Prevotella melaninogenica:</strong> Černý pigment (bez fluorescence). Onemocnění HCD – anginy, sinusitidy. Beta-laktamázy → narušení nechráněných penicilinů.<br><br><strong>Fusobacterium:</strong> Vláknité tyčinky. F. nucleatum: empyémy, abscesy, pneumonie. F. necrophorum: jaterní abscesy. Fusospirochetózy (s ústními spirochétami).<br><br><strong>Veillonella parvula:</strong> G- anaerobní koky. Sepse, endokarditidy.<br><br><strong>Mobiluncus:</strong> Zakřivené gramlabilní tyčinky. Přítomny ve vaginóze.",
        terapie: "Metronidazol (volba), klindamycin, chloramfenikol, peniciliny chráněné inhibitory beta-laktamáz. Často nutný chirurgický výkon.",
        diagnostika: "Přímý průkaz: mikroskopie vzorku, kultivace (přísná anaerobie). Identifikace: biochemická aktivita, plynová chromatografie. Nepřímý průkaz běžně neprovádí."
      },
      quiz: [
        {
          q: "Bacteroides fragilis je specifický rezistencí na:",
          options: ["Metronidazol a klindamycin", "Penicilin a kanamycin (a tvorba beta-laktamázy)", "Vankomycin a rifampicin", "Cefalosporiny 3. gen."],
          correct: 1,
          explanation: "B. fragilis je rezistentní na penicilín a kanamycin a produkuje beta-laktamázu – narušuje beta-laktamová ATB. Volba léčby: metronidazol nebo inhibitory beta-laktamáz."
        },
        {
          q: "Fusospirochetózy vznikají smíšenou infekcí:",
          options: ["Fusobakterie + Treponema pallidum", "Fusobakterie + ústní spirochéty → gangrenózní rozpad tkáně", "Fusobakterie + Bacteroides", "Fusobakterie + Prevotella"],
          correct: 1,
          explanation: "Fusospirochetózy (Vincentova angína, cancrum oris) – smíšená infekce Fusobacterium spp. s ústními spirochétami → typická gangrenózní destrukce sliznic."
        }
      ]
    },
    cast_b: {
      title: "Molekulárně biologické metody: hybridizace a amplifikace",
      keywords: ["PCR", "hybridizace", "sonda", "amplifikace", "nukleová kyselina", "specifita", "citlivost"],
      content: {
        definice: "Molekulárně-biologické diagnostické metody detekují nukleové kyseliny (DNA/RNA) mikroorganismů. Kultivačně nezávislé, vynikají rychlostí, specifitou a citlivostí.",
        hybridizace: "<strong>Hybridizační metoda:</strong> Princip: komplementární párování šetřeného vlákna NK se sondou (jednovláknitá DNA/RNA/oligonukleotid). Vazba sondy na cílovou sekvenci → detekce.<br>• Klasická hybridizace: detekce streptokoků, gonokoků, chlamydií<br>• In situ hybridizace: patologická laboratoř, etiologická role mikroba v tkáni<br>• bDNA hybridizace: detekce HIV, HBV, HCV (amplifikace signálu)<br>• Hybrid capture assay (RNA sonda): HBV, HCMV, papilomaviry<br>Nevýhoda: nižší citlivost (nutno 10⁴–10⁵ kopií).",
        amplifikace: "<strong>Amplifikační metoda (PCR):</strong> Zmnožení prokazované NK → zesílení signálu. Největší rozvoj: PCR. Umožní detekci jediné kopie cílové DNA. Využití: charakterizace genomu bakterií.<br>Nevýhoda: Příliš citlivé (falešná pozitivita z kontaminace).",
        vzorek: "Vzorky: periferní krev, mozkomíšní mok, výtěry sliznic. Nutno dbát kontaminaci z normální mikroflóry."
      },
      quiz: [
        {
          q: "Jaká je hlavní výhoda amplifikačních metod (PCR) oproti hybridizačním?",
          options: ["PCR je levnější", "PCR detekuje jedinou kopii DNA, hybridizace potřebuje 10⁴–10⁵ kopií", "Hybridizace je náchylnější ke kontaminaci", "PCR nevyžaduje čistou DNA"],
          correct: 1,
          explanation: "Amplifikační metody (PCR) mají výrazně vyšší analytickou citlivost – detekují i jednu kopii cílové DNA ve vzorku. Hybridizační metody potřebují minimálně 10⁴–10⁵ kopií DNA pro detekovatelný signál."
        }
      ]
    }
  },
  {
    id: "mikra-13",
    cislo: 13,
    skupina_a: "Bakteriologie",
    skupina_b: "Diagnostika",
    cast_a: {
      title: "Stafylokoky",
      keywords: ["Staphylococcus aureus", "MRSA", "koagulása", "protein A", "toxický šok", "enterotoxin", "hemolyziny"],
      content: {
        definice: "Rod Staphylococcus, čeleď Micrococcaceae. G+ koky, nepravidelné shluky (trsy hroznů), nepohyblivé, netvoří spory. Fakultativně anaerobní. Kataláza a oxidáza pozitivní. Děleny na koagulásapozitivní a koagulásanegativní.",
        aureus: "<strong>Staphylococcus aureus:</strong> Zlatě pigmentované kolonie, beta-hemolýza na KA. Antigenní stavba: peptidoglykán (endotoxin-like), polysacharid A (adheze), protein A (blokuje opsonizaci vazbou na Fc fragment Ig).<br><br>Faktory virulence: koagulása (přeměna fibrinogenu → fibrin → tvorba abscesů), hyaluronidáza (šíření tkáněmi), lipázy (mazové žlázy), nukleázy, penicilinása. Toxiny: hemolyziny (alfa, beta, gama, delta), Pantonův-Valentinův leukocidin (PVL – lýza neutrofilů/makrofágů), enterotoxiny (termostabilní → potravinová intoxikace), TSST-1 (syndrom toxického šoku).",
        patogenita: "Pyodermie (impetigo, folikulitis, ječné zrno), hnisavé rány, empyémy, endokarditida, osteomyelitida, pneumonie (post-chřipková), sepse. MRSA (methicilin-rezistentní S. aureus): problém nozokomiálních infekcí.",
        koagneg: "<strong>Koagulásanegativní stafylokoky (KNS):</strong> S. epidermidis (nejčastější), S. saprophyticus (UTI). Oportunní patogeny disponovaných pacientů – katetry, implantáty, novorozenci. Biofilm. Rezistence na protistafylokoková ATB (gen mecA). Léčba: rifampicin + vankomycin.",
        diagnostika: "Hnis (mikro), hemokultivace, exsudáty. KA + thioglykolátový bujon. Koagulásový test (slide – vázaná koagulása; zkumavkový – volná koagulása). Latexová aglutinace (protein A)."
      },
      quiz: [
        {
          q: "Proč jsou stafylokokové infekce charakterizovány tvorbou abscesů?",
          options: ["Stafylokoky produkují kapslí", "Koagulása přeměňuje fibrinogen na fibrin → ochranné ložisko abscesu kolem bakterií", "Produkce PVL toxinu likviduje neutrofily", "Schopnost intracelulárního přežití"],
          correct: 1,
          explanation: "Koagulása S. aureus reaguje s plazmatickým faktorem → přeměna fibrinogenu na fibrin → fibrinová vrstva obklopuje bakterie → absces jako \"opevnění\" S. aureus před fagocytózou."
        },
        {
          q: "Syndrom toxického šoku způsobuje:",
          options: ["Protein A", "TSST-1 (superantigen)", "Koagulása", "PVL toxin"],
          correct: 1,
          explanation: "TSST-1 (toxic shock syndrome toxin 1) je superantigen – aktivuje obrovské množství T-buněk → masivní vyplavení cytokinů → toxický šok s horečkou, hypotenzí a orgánovým selháním."
        }
      ]
    },
    cast_b: {
      title: "PCR – polymerázová řetězová reakce",
      keywords: ["PCR", "termocyklér", "denaturace", "hybridizace", "elongace", "primer", "Taq polymeráza", "real-time PCR"],
      content: {
        definice: "PCR = Polymerase Chain Reaction. Metoda zmnožení specifického úseku DNA in vitro. Probíhá v termocykleru (střídá teploty). Počet kopií roste exponenciálně (1→2→4→8→…).",
        kroky: "<strong>3 kroky PCR cyklu:</strong><br>1. <strong>Denaturace</strong> (95 °C): rozpad vodíkových můstků mezi vlákny DNA → jednořetězcové vlákna<br>2. <strong>Hybridizace/Annealing</strong> (50–60 °C): primery nasedají na komplementární místa jednořetězcové DNA<br>3. <strong>Elongace</strong> (65–75 °C): Taq polymeráza syntetizuje nový komplementární řetězec od 3' konce primeru",
        komponenty: "• Templát (DNA) – minimální množství, nesmí být inhibováno<br>• Primery – oligonukleotidy 17–28 nt, specifické pro danou sekvenci, forward + reverse<br>• Taq polymeráza (termostabilní, z Thermus aquaticus, přidá 150 bází/s, neaktivní při 90 °C ale odolá)<br>• Deoxynukleosidtrifosfáty (dATP, dCTP, dGTP, dTTP)<br>• Pufr s Mg²⁺ (kofaktor polymerázy)",
        varianty: "<strong>Real-time PCR (qPCR):</strong> Kvantitativní – detekuje a kvantifikuje PCR produkty v průběhu reakce pomocí fluorescence. Přesné, rychlé, detekce patogenů + viral load.<br><strong>Nested PCR:</strong> 2-stupňová PCR s vnějšími a vnitřními primery – velmi citlivá (málo templátu).<br><strong>RT-PCR:</strong> Reverzní transkripce RNA → cDNA → PCR. Pro RNA viry (influenza, HCV, SARS-CoV-2).",
        nastaveni_primeru: "Délka primeru: 17–28 nt. Rovnoměrné GC/AT zastoupení. Podobná teplota tání obou primerů. Primery nesmí být vzájemně komplementární (hairpins, dimery)."
      },
      quiz: [
        {
          q: "Proč se Taq polymeráza používá v PCR místo běžné DNA polymerázy?",
          options: ["Je levnější", "Je termostabilní – přežije denaturační teplotu (95 °C) a pracuje při 72 °C", "Je specifičtější pro virovou DNA", "Produkuje méně chyb"],
          correct: 1,
          explanation: "Taq polymeráza pochází z termofilní bakterie Thermus aquaticus – je termostabilní. Přežívá denaturaci při 95 °C a pracuje optimálně při 72 °C (elongace), zatímco standardní DNA polymerázy by se denaturovaly."
        },
        {
          q: "RT-PCR (reverzně-transkripční PCR) se používá pro:",
          options: ["Detekci DNA patogenů", "Amplifikaci RNA virů (přepis RNA → cDNA → PCR)", "Kvantifikaci DNA v reálném čase", "Sekvenování genů"],
          correct: 1,
          explanation: "RT-PCR = nejprve reverzní transkriptáza přepíše RNA do cDNA (templát), pak probíhá standardní PCR. Nezbytná pro RNA viry: influenza, HCV, HIV, SARS-CoV-2."
        }
      ]
    }
  },
  {
    id: "mikra-14",
    cislo: 14,
    skupina_a: "Bakteriologie",
    skupina_b: "Diagnostika",
    cast_a: {
      title: "Beta-hemolytické (pyogenní) streptokoky",
      keywords: ["Streptococcus pyogenes", "S. agalactiae", "M-protein", "streptolyzin", "revmatická horečka", "angína", "impetigo"],
      content: {
        definice: "Beta-hemolytické streptokoky způsobují úplnou hemolýzu na krevním agaru. Nejdůležitější: S. pyogenes (skupina A) a S. agalactiae (skupina B).",
        pyogenes: "<strong>S. pyogenes:</strong> Průměr 0,6–1 μm, řetízky. Na KA: drobné lesklé kolonie s výraznou beta-hemolýzou. Antigenní stavba: polysacharid C (skupin. specifický), M-protein (100 sérotypů, typově specifická imunita), T-protein.<br><br>Faktory virulence: M-protein (antifagocytóza, adheze, invazin), pouzdro z hyaluronové kyseliny (antifagocytóza), streptolyzin O (toxický pro mono+leuko), streptolyzin S (lýza fagocytovaných leukocytů), streptokináza, hyaluronidáza, SPE (pyrogenní exotoxiny → superantigen → spála, TSS).<br><br>Onemocnění: angína (tonzilofaryngitida – bez kašle/rýmy!), spála (rash + malinový jazyk), pyodermie (impetigo, lymfangitida), sepse, pneumonie. Pozdní imunologické následky: revmatická horečka (karditida, artritis), akutní glomerulonefritida.",
        agalactiae: "<strong>S. agalactiae (skupina B):</strong> Větší kolonie, neostře ohraničená beta-hemolýza. CAMP test pozitivní. Antigenní struktura: skupinový antigen B, serotypy III a V. Onemocnění: novorozenecká meningitida a sepse (časná + pozdní forma), UTI u dospělých.",
        diagnostika: "Kultivace z výtěru mandlí na KA (37 °C, 18–48 h). S. pyogenes: bacitracin citlivý, PYR +. S. agalactiae: CAMP test, bacitracin rezistentní, latexová aglutinace (antigen B).",
        terapie: "Penicilin (volba pro S. pyogenes, S. agalactiae). Makrolidy při alergii. Cíl: prevence revmatické horečky a GN."
      },
      quiz: [
        {
          q: "M-protein S. pyogenes působí antifagocytárně, protože:",
          options: ["Tvoří ochrannou kapsuli", "Váže regulační faktor komplementu H → inhibuje aktivaci komplementu alternativní cestou", "Produkuje toxin pro makrofágy", "Váže fibrinogen → fibrinová ochrana"],
          correct: 1,
          explanation: "M-protein váže faktor H (regulátor komplementu) → inhibuje aktivaci komplementu alternativní cestou → nemůže proběhnout opsonizace → S. pyogenes odolá fagocytóze."
        },
        {
          q: "Pozitivní CAMP test (zesílení hemolýzy v okolí S. aureus) je charakteristický pro:",
          options: ["S. pyogenes", "S. pneumoniae", "S. agalactiae (skupina B)", "Enterokoka"],
          correct: 2,
          explanation: "CAMP test: S. agalactiae produkuje CAMP faktor → interaguje s beta-lyzinem S. aureus → výrazné zvýšení hemolýzy v oblasti mezi oběma bakteriemi = diagnostický znak skupiny B streptokoka."
        }
      ]
    },
    cast_b: {
      title: "Sekvenování DNA, 16S rRNA, taxonomie bakterií",
      keywords: ["sekvenování", "Sangerova metoda", "16S rRNA", "taxonomie", "NGS", "ddNTP", "fylogenetický strom"],
      content: {
        definice: "Sekvenování DNA = zjištění primární struktury (pořadí nukleotidů) v molekule DNA. Metoda volby pro identifikaci mikroorganismů a fylogenetické studie.",
        sangerova_metoda: "<strong>Sangerovo sekvenování (dideoxy metoda):</strong><br>1. Syntéza komplementárního vlákna podle ssDNA templátu<br>2. ddNTPs (dideoxynukleosidtrifosfáty) – chybí OH skupina na 3' konci → po zapojení zastaví elongaci<br>3. Dnes: 4 různé fluorescenční značky pro každý ddNTP → sloučení do jedné zkumavky<br>4. Analýza: kapilární elektroforéza → laser detekuje barvu fragmentů → chromatogram (\"peaks\")<br>Výsledek: sekvence DNA = pořadí peaků v chromatogramu",
        rRNA_16S: "<strong>16S rRNA – zlatý standard pro bakteriální taxonomii:</strong><br>• 1542 nukleotidů – tvoří menší 30S podjednotku ribosomu prokaryot<br>• Obsahuje konzervované oblasti (společné všem prokaryotům) a variabilní oblasti (druhově specifické)<br>• Sekvenování 16S rRNA genu → identifikace bakteriálního druhu<br>• Tvorba fylogenetických stromů (příbuznost mikroorganismů)<br>• Detekce nekultivovatelných bakterií (metagenomika)",
        ngs: "<strong>NGS (Next Generation Sequencing):</strong> Masivně paralelní sekvenování celého genomu. Umožňuje celogenomovou typizaci, detekci genů rezistence, outbreak analýzu."
      },
      quiz: [
        {
          q: "ddNTPs (dideoxynukleosidtrifosfáty) zastavují replikaci, protože:",
          options: ["Jsou radioaktivní", "Nemají OH skupinu na 3' konci → nelze přidat další nukleotid", "Jsou příliš velké pro aktivní místo polymerázy", "Inhibují Taq polymerázu"],
          correct: 1,
          explanation: "ddNTPs postrádají OH skupinu na 3' konci → po zapojení do řetězce nemůže proběhnout tvorba phosphodiesterové vazby s dalším nukleotidem → terminace elongace."
        },
        {
          q: "Proč se 16S rRNA gen používá jako molekulární hodiny pro bakteriální taxonomii?",
          options: ["Je nejkratší bakteriální gen", "Obsahuje konzervované i druhově specifické (variabilní) oblasti umožňující identifikaci i příbuznost", "Lze ho snadno amplifikovat pomocí PCR", "Je přítomen jen u patogenních bakterií"],
          correct: 1,
          explanation: "16S rRNA kombinuje konzervované oblasti (umožní použít univerzální primery → amplifikace všech bakterií) s variabilními oblastmi (specifické pro daný druh → identifikace). Sekvence odráží evoluční vzdálenost."
        }
      ]
    }
  },
  {
    id: "mikra-15",
    cislo: 15,
    skupina_a: "Bakteriologie",
    skupina_b: "Mykologie",
    cast_a: {
      title: "Viridující streptokoky a Pneumokoky",
      keywords: ["Streptococcus pneumoniae", "S. mutans", "alfa-hemolýza", "optochin", "zubní kaz", "komunitní pneumonie"],
      content: {
        definice: "Viridující streptokoky = alfa-hemolytické nebo non-beta-hemolytické streptokoky. Součást normální mikroflóry úst a nosohltanu. S. pneumoniae (pneumokok) = hlavní původce komunitní pneumonie.",
        usni_streptokoky: "<strong>Ústní (orální) streptokoky:</strong> S. mutans, S. sobrinus, S. salivarius, S. sanguinis, S. oralis, S. gordonii. Leucinaminopeptidáza pozitivní, PYR negativní, nerostou v 6,5% NaCl.<br>Patogenita: oportunní – jen u disponovaných. Subakutní bakteriální endokarditida (SBE) = Loudavá sepse – kolonizace poškozených chlopní po bakteriémii z DÚ. S. mutans skupina → zubní kaz (glukosyltransferázy → glukany → plak → kyseliny → destrukce skloviny).<br>Léčba: cefotaxim, ceftriaxon, vankomycin (odolnost na peniciliny, makrolidy).",
        pneumokok: "<strong>S. pneumoniae (pneumokok):</strong> G+ opouzdřený ovoidní kok, krátké řetízky, «lancetovitý» tvar diplo. Kultivace: vlhké obohacené půdy, CO₂, miskovité kolonie (autolýza ve středu). Alfa-hemolýza za přítomnosti O₂. Průkaz: optochinový test (zóna inhibice), žluč-solubilita (autolytické enzymy), PcG test (citlivost na penicilín = inhibiční zóna na KA).<br><br>Faktory virulence: polysacharidové pouzdro (antifagocytóza – HLAVNÍ faktor), adheziny (PspA, PspC, CbpA), invaziny (hyaluronidáza, neuraminidáza), pneumolyzin (nekrotizující, zánětu podporující), autolysin.<br><br>Onemocnění: komunitní pneumonie (20 %), purulentní meningitida (>60 let, batolata), otitis media, mastoiditida, sinusitida. Vakcinace: chemovakcína (23 sérotypů PnCPS), konjugovaná (13-valentní, PCV13) – pro děti.",
        diagnostika: "Kultivace z krve, likvoru, synoviální tekutiny, sputa. Hemokultivace (pneumonie). Latexová aglutinace (likvor). Mikroskopie: lancetovité diplokoky s nebarveným pouzdrem."
      },
      quiz: [
        {
          q: "Optochinový test se používá k odlišení S. pneumoniae od ostatních viridujících streptokoků. Pneumokok:",
          options: ["Je rezistentní na optochin", "Tvoří zónu inhibice kolem optochinového disku", "Je citlivý na bacitracin", "Tvoří modré kolonie"],
          correct: 1,
          explanation: "S. pneumoniae je citlivý na optochin (ethylhydrocupein) → tvoří inhibiční zónu ≥ 14 mm. Ostatní viridující streptokoky jsou na optochin rezistentní – klíčový diferenciační test."
        },
        {
          q: "Hlavní faktor virulence pneumokoka je:",
          options: ["Pneumolyzin", "Neuramidáza", "Polysacharidové pouzdro", "Protein A"],
          correct: 2,
          explanation: "Polysacharidové pouzdro S. pneumoniae je hlavním faktorem virulence – chrání bakterii před fagocytózou. 92 různých typů pouzdra → sérotypová specificita vakcinace."
        }
      ]
    },
    cast_b: {
      title: "Kvasinky a kvasinkové mikroorganismy (Candida)",
      keywords: ["Candida albicans", "kandidóza", "flukonazol", "amfotericin B", "mykóza", "soor", "imunosuprese"],
      content: {
        definice: "Mykotická onemocnění jsou způsobena mikroskopickými houbami (mikromycety) – kvasinky a plísně. Kvasinky: kulatý/oválný tvar, množení pučením. Nejčastější systémové mykózy: kandidóza, aspergilóza, kryptokokóza.",
        mikromycety: "Eukaryota. Základní sterol: ergosterol (cíl antimykotik). Buněčná stěna: peptidomanonany, beta-glukany, chitin (bez peptidoglykanu a LPS).",
        candida: "<strong>Kandida (Candida):</strong> Kvasinky rodu Candida. 9 druhů patogenních pro člověka. Nejčastěji C. albicans, dále C. krusei, C. tropicalis, C. glabrata (nozokomiální MRSA analog), C. auris.<br><br>Rizikové faktory: neutropenie, ATB léčba (poruší baktovag. flóru), CŽK, diabetes mellitus, imunosuprese, kortikosteroidy.<br><br><strong>Formy kandidózy:</strong><br>• Kožní: diabetici (intertrigo, onychomykóza, balanitida)<br>• Slizniční: soor (mapovité bílé povlaky DÚ/hltanu – HIV, chemo, ATB), kandida kolpitida (tvarohový výtok, pálení)<br>• Systémová/orgánová: GIT, DC, UG trakt<br>• Diseminovaná + sepse: nejzávažnější – CŽK, horečka, exantém, retinální infiltráty",
        diagnostika: "Mikroskopie + kultivace biologického materiálu. Histologie biopsie. Hemokultivace (diseminace). ELISA (beta-D-glukan – biomarker invasivní mykózy).",
        terapie: "Systémová antimykotika: flukonazol (1. volba, dobrá tolerance), amfotericin B (těžký průběh, vedlejší účinky), vorikonazol (neutropeničtí), caspofungin/micafungin (echinokandiny)."
      },
      quiz: [
        {
          q: "Soor (oropharyngeální kandidóza) se typicky vyskytuje u:",
          options: ["Zdravých dospělých", "Pacientů na ATB, HIV+ a onkologických pacientů na chemoterapii", "Dětí na školách", "Těhotných žen v 3. trimestru"],
          correct: 1,
          explanation: "Soor = oropharyngeální kandidóza (mapovité bílé povlaky na ústní sliznici). Vzniká při narušení lokální imunity: ATB léčba (poruší baktovaginální flóru), HIV+, imunosuprese, kortikoidy."
        },
        {
          q: "Základní sterol buněčné membrány hub, na který cílí antimykotika, je:",
          options: ["Cholesterol", "Ergosterol", "Sitosterol", "Lanosterol"],
          correct: 1,
          explanation: "Ergosterol je specifický sterol hub (ekvivalent cholesterolu u savců). Na ergosterol cílí amfotericin B (přímá vazba) a azolová antimykotika (inhibice biosyntézy ergosterolu)."
        }
      ]
    }
  },
  {
    id: "mikra-16",
    cislo: 16,
    skupina_a: "Bakteriologie",
    skupina_b: "Mykologie",
    cast_a: {
      title: "Enterokoky, Leuconostoc, Pediococcus, nutričně variantní streptokoky",
      keywords: ["Enterococcus faecalis", "E. faecium", "VRE", "vankomycin", "endokarditida", "UTI", "Leuconostoc"],
      content: {
        definice: "Enterokoky: G+ oválné koky, facultativně anaerobní, kataláza negativní. Původně streptokoky skupiny D (Lancefieldova klasifikace). 90 % infekcí: E. faecalis; 7 % E. faecium.",
        enterokoky: "Kultivace: KA (drobné šedobílé kolonie, virescence), Slanetzova-Bertleyho půda (růžové/červené kolonie). Hydrolyzují PYR a LAP – PYR+ LAP+. Odolné na teploty a pH. Skupinový antigen D (glycerol-teichoová kyselina).<br><br>Patogenita: uroinfekce, infekce ran, nitrobřišní záněty, endokarditida (drogaři), bakterémie, peritonitida. Nozokomiální infekce u pacientů s katetry a ATB.<br><br>Faktory virulence: želatináza, substanci feromony, sacharidové adhesiny, cytolysin (bakteriocin). Vzrůstající rezistence na vankomycin (VRE!).<br><br>Léčba: UTI – ampicilin, fluorochinolony, nitrofurantoin. Sepse/endokarditida: aminoglykosidy + penicilin/ampicilin nebo glykopeptidy.",
        leuconostoc: "<strong>Leuconostoc:</strong> Rostliny, siláž, mléko. Patogeny pro imunosuprimované (abscesy, hemokultura). Léčba: penicilin, karbapenemy.",
        pediococcus: "<strong>Pediococcus:</strong> Potravinářství. Rezistentní na vankomycin.",
        nutritionally_variant: "<strong>Nutričně variantní streptokoky (NVS):</strong> Rody Abiotrophia a Granulicatella. G+, kataláza neg., PYR+. Potřebují cystein nebo vit. B5. Na KA rostou jen satelitovým fenoménem (u S. aureus). Endokarditidy, sepse."
      },
      quiz: [
        {
          q: "Vankomycin-rezistentní Enterococcus (VRE) je problémový zejména v:",
          options: ["Komunitních infekcích u dětí", "Nozokomiálním prostředí u pacientů s ATB léčbou a katetry", "Potravních otravách", "Respiračních infekcích"],
          correct: 1,
          explanation: "VRE je typický nozokomiální patogen – selektuje se při léčbě vankomycinem a širokospektrými ATB. Infekce u pacientů s CŽK, CMP, s imunosupresí – obtížně léčitelné."
        }
      ]
    },
    cast_b: {
      title: "Aspergilové infekce",
      keywords: ["Aspergillus fumigatus", "aspergilóza", "invazivní aspergilóza", "aspergilom", "ABPA", "vorikonazol"],
      content: {
        definice: "Aspergillus: kosmopolitní houby, řadí se mezi vláknité houby (plísně). Původci nozokomiálních infekcí. Cestou vstupu jsou dýchací cesty (konidiospóry).",
        typy: "<strong>1. Invazivní aspergilóza (IA):</strong> Nejzávažnější forma. A. fumigatus (nejčastěji). Konidiospóry v plicích dozrávají, pronikají do cév, CNS, krve. Rizikoví: leukémie, AIDS, CHOPN, chemo, transplantace plic, kortikosteroidy. Projevy: horečka, kašel, dyspnoe, hemoptýza. CT hrudníku: uzlíky + halo-sign. Diagnostika: histopatologie, kultivace, CT, ELISA (galaktomannan), PCR. Léčba: vorikonazol, amfotericin B, caspofungin, micafungin.<br><br><strong>2. Alergická bronchopulmonální aspergilóza (ABPA):</strong> Hypersenzitivita (I. a III. typ) na aspergilové antigeny u astmatiků, CF. Projevy: pisklavé dýchání, hnědé sputum, eozinofilie. Léčba: kortikosteroidy + itrakonazol.<br><br><strong>3. Chronická nekrotizující plicní aspergilóza:</strong> Pomalý průběh u CHOPN, TBC. Nekróza plicní tkáně. Léčba: vorikonazol, itrakonazol.<br><br><strong>4. Aspergilom:</strong> Nejčastější forma. Mycetoma v preexistující plicní dutině (po TBC, sarkoidóze). Hemoptýza. CT: móbilní útvar v dutině. Léčba: itrakonazol, chirurgie (u hemoptýzy).",
        diagnostika: "Histopatologie: septované hyfy pod úhlem 45° (Aspergillus, šikmé větven). ELISA galaktomannan (marker invazivní aspergilózy z BAL nebo séra). CT hrudníku: halo-sign, air crescent sign."
      },
      quiz: [
        {
          q: "Halo-sign na CT hrudníku (uzlík obklopený zákalem – ground glass) je typický pro:",
          options: ["Bakteriální pneumonii", "Plicní TBC", "Invazivní aspergilózu", "Virovou pneumonii"],
          correct: 2,
          explanation: "Halo-sign na CT hrudníku = area ground-glass opacity kolem nodulu → způsoben hemoragickou infiltrací nebo angioinvazí Aspergillus. Typický pro invazivní aspergilózu u neutropeniků."
        }
      ]
    }
  },
  {
    id: "mikra-17",
    cislo: 17,
    skupina_a: "Bakteriologie",
    skupina_b: "Mykologie",
    cast_a: {
      title: "Korynebakteria, Bacillus",
      keywords: ["Corynebacterium diphtheriae", "záškrt", "diftérie", "difteriový toxin", "Bacillus anthracis", "antrax", "spóry"],
      content: {
        definice: "<strong>Corynebacterium:</strong> G+ tyčinky, fakultativně aerobní, nesporulující. Kyjovitý tvar («havraní křídla»). Nejdůležitější: C. diphtheriae.<br><strong>Bacillus:</strong> G+ sporulující aerobní tyčinky. B. anthracis (antrax), B. cereus (potravinová intoxikace).",
        diphteriae: "<strong>C. diphtheriae:</strong> Záškrt – původce. Toxin produkovaný jen kmeny lysogenizovanými fágem β (kódujícím gen pro toxin). <strong>Diftériový toxin</strong>: inhibice EF-2 (translokáza) → zastavení proteosyntézy → buněčná smrt. Projevy: pseudomembrány v krku (šedavý povlak), stridory, srdeční a nervové komplikace (myokarditida, polyneuropatie). Kultivace: Löfflerovo medium, telluritový agar (černé kolonie).<br>Prevence: DTaP vakcinace. Léčba: antidifteriové antitoxin + penicilín/erytromycin.",
        bacillus: "<strong>B. anthracis:</strong> Původce antraxu. Tvoří spory odolné desítky let v půdě. 3 formy: kožní (karbunkl, maligní pustula – nejběžnější, 20 % mortalita bez léčby), plicní (inhalační, nejsmrtelnější – 80 % mort.), střevní. Bioterrorismus. Diagnóza: kultivace, PCR. Léčba: ciprofloxacin nebo doxycyklin.<br><br><strong>B. cereus:</strong> Potravinová intoxikace – 2 typy: zvracivý (rýžová forma, termostabilní ST toxin) a průjmový (LT enterotoxin). 6–24 h inkubace."
      },
      quiz: [
        {
          q: "Diftériový toxin inhibuje:",
          options: ["Proteosyntézu blokací EF-2 (translokázy)", "Syntézu nukleových kyselin", "Metabolismus ATP", "Tvorbu buněčné stěny"],
          correct: 0,
          explanation: "Diftériový toxin (DTx) je ADP-ribosyltransferáza → ribosyluje EF-2 (elongation factor 2/translokáza) → zastaví translokaci ribosomů → přeruší proteosyntézu → buněčná smrt (myokard, nervy)."
        }
      ]
    },
    cast_b: {
      title: "Laboratorní metody v mykologii",
      keywords: ["přímý průkaz", "kultivace", "KOH preparát", "Sabouraudův agar", "antimykotická citlivost", "histologie"],
      content: {
        definice: "Diagnostika mykotických infekcí zahrnuje přímý průkaz houby ve vzorku, kultivaci, sérologické metody (průkaz antigenů/protilátek) a molekulární metody.",
        metody: "<strong>1. Přímý mikroskopický průkaz:</strong><br>• Nativní preparát v 10–20% KOH (rozloží keratinové struktury → průkaz hyf a kvasinek)<br>• Calcoflour white fluorescenční barvení (chitin ve stěně hub)<br>• Gramovo barvení (kvasinky barví G+)<br>• PAS barvení (histologie – hyfy červeně)<br>• Grocott methenamine silver (GMS) – histologie, nejlepší pro hyfy<br><br><strong>2. Kultivace:</strong><br>• Sabouraudův dextrózo-agar (SDA) – standardní<br>• Při 25–30 °C (dermatofyty) a 37 °C (kvasinky, patogenní houby)<br>• Selektivní půdy (Candida CHROMagar – barevné kolonie → druhová identifikace)<br>• Dlouhá inkubace (týdny pro Aspergillus, dermatofyty)<br><br><strong>3. Sérologické metody:</strong><br>• ELISA galaktomannan (invazivní aspergilóza z séra/BAL)<br>• (1→3)-beta-D-glukan (obecný marker invazivní mykózy)<br>• Kryptokokový antigen (latexová aglutinace z likvoru/séra)<br><br><strong>4. Molekulární metody:</strong><br>• PCR z BAL, biopsie (detekce DNA Aspergillus, Candida)<br><br><strong>5. Antimykotická citlivost (AFST):</strong><br>• MIC pro flukonazol, vorikonazol, kaspofungin<br>• Diluce v bujonu (referenční) nebo Etest"
      },
      quiz: [
        {
          q: "KOH preparát se v mykologické diagnostice používá k:",
          options: ["Barvení buněčných stěn", "Rozložení keratinu/tkáně → průkaz hyf a kvasinek v nativním vzorku", "Průkazu virů", "Sterilizaci vzorku"],
          correct: 1,
          explanation: "10–20% KOH (hydroxid draselný) chemicky rozloží keratin a lidské buňky ve vzorku (kůže, nehet, vlasy) → průhledný preparát → houbové elementy (hyfy, kvasinky) jsou detekovatelné mikroskopicky."
        }
      ]
    }
  },
  {
    id: "mikra-18",
    cislo: 18,
    skupina_a: "Bakteriologie",
    skupina_b: "Mykologie",
    cast_a: {
      title: "Listeria, Erysipelothrix, Lactobacillus",
      keywords: ["Listeria monocytogenes", "listeriόza", "Erysipelothrix", "Lactobacillus", "perinataální infekce", "meningitida"],
      content: {
        definice: "<strong>Listeria monocytogenes:</strong> G+ tyčinky, pohyblivé (převrhující pohyb), fakultativně intracelulární. Přežívá při 4 °C (chladnička)! Zoonóza.<br><strong>Erysipelothrix rhusiopathiae:</strong> G+ tyčinka, zoonóza (prasata, ryby).<br><strong>Lactobacillus:</strong> G+ tyčinky, mléčné bakterie, probiota.",
        listeria: "<strong>Listeria monocytogenes:</strong> Kultivace: KA – beta-hemolytické kolonie, pohyb (deštníkový pohyb v semi-solid agaru). CAMP test +. Antigenní: O a H-antigeny, 13 sérotypů (4b – nejpatogennější).<br><br>Patogeneza: ActA protein → využití aktinu hostitele k intracelulárnímu pohybu (bez lýzy buňky). Listeriolysin O (LLO) → únik z fagozomu.<br><br>Klinicky: Gastroenteritida (zdraví jedinci), meningitida + sepse (starší, imunosuprimovaní, transplantace), perinatální listeriόza (těhotné → placentou na plod → granulomatosis infantiseptica, novorozenecká meningitida). Zdroj: nepasterizované mléčné výrobky, uzeniny, rybí produkty.<br>Léčba: ampicilin + gentamicin.",
        erysipelothrix: "<strong>Erysipelothrix rhusiopathiae:</strong> Erysipeloid (kožní infekce po poranění u zpracovatelů masa/ryb). Léčba: penicilin.",
        lactobacillus: "<strong>Lactobacillus:</strong> Normální mikroflóra DÚ, vaginy, GIT. Produkují kyselinu mléčnou + H₂O₂ → ochrana pochvy. Probiotika. Vzácně patogenní u imunosuprimovaných."
      },
      quiz: [
        {
          q: "Proč je Listeria monocytogenes nebezpečná v potravinách uložených v chladničce?",
          options: ["Produkuje termostabilní toxin", "Roste a přežívá při 4 °C – standardní teplotě chladničky", "Tvoří spory odolné chladu", "Je odolná na zmrazení"],
          correct: 1,
          explanation: "L. monocytogenes je psychrofilní – roste při 4 °C (i méně). Na rozdíl od většiny patogenů ji chladnička nezabíjí, ale jen zpomaluje. Pomnožuje se v chladírenských potravinách (paštiková, uzeniny, sýry)."
        }
      ]
    },
    cast_b: {
      title: "Kryptokokóza, Mukormykóza, Pneumocystis jirovecii",
      keywords: ["Cryptococcus neoformans", "kryptokokóza", "Mucor", "Rhizopus", "Pneumocystis jirovecii", "PCP", "meningitida"],
      content: {
        definice: "Závažné systémové mykózy způsobené specifickými houbovými patogeny. Většina ohrožuje imunosuprimované.",
        kryptokokoza: "<strong>Cryptococcus neoformans:</strong> Kvasinka s masivním mukopolysacharidovým pouzdrem (průkaz tuší – negativní barvení v likvoru). Rezervoár: ptačí trus (holubi). Inhalace spor → plicní infekce → šíří se do CNS. Kryptokoková meningitida – závažná, typicky HIV+ (CD4 < 100). Diagnostika: likvor (tušový preparát, latexová aglutinace kryptokokového antigenu = nejcitlivější). Léčba: amfotericin B + flucytosin (indukce), flukonazol (udržovací).",
        mukormykoza: "<strong>Mukormykóza:</strong> Skupina infekcí způsobená plísněmi Mucorales (Mucor, Rhizopus, Lichtheimia). Angioinvazivní – napadá cévy → nekróza. Formy: rinosinusorbitální (nejvíce u DM s ketoacidózou!), plicní, diseminovaná. CT: reverzní halo sign. Léčba: amfotericin B + chirurgická debridement.",
        pcp: "<strong>Pneumocystis jirovecii pneumonie (PCP):</strong> Původně považován za prvok, nyní houby. Atypická pneumonie – difúzní intersticiální infiltráty (CT: ground-glass). Typická u HIV+ (CD4 < 200). Diagnostika: BAL (průkaz cyst Calcoflour barvením, PCR). Léčba: kotrimoxazol (TMP-SMX) – volba; alternativa: pentamidin, atovaquone."
      },
      quiz: [
        {
          q: "Průkaz tušovým (India ink) preparátem v likvoru je typický pro:",
          options: ["Bakteriální meningitidu", "Kryptokokovou meningitidu (Cryptococcus neoformans)", "TBC meningitidu", "Virovou meningitidu"],
          correct: 1,
          explanation: "Tušový preparát (negativní barvení): tušové partikule se vylučují z oblasti kolem masivního pouzdra kryptokok → průhledný halo kolem kvasinky na černém pozadí. Patognomický nález kryptokokové meningitidy."
        }
      ]
    }
  },
  {
    id: "mikra-19",
    cislo: 19,
    skupina_a: "Bakteriologie",
    skupina_b: "Mykologie",
    cast_a: {
      title: "Nocardia, Actinomyces a příbuzné G+ tyčinky",
      keywords: ["Nocardia", "Actinomyces", "aktinomykóza", "nokardiόza", "aerobní", "anaerobní", "větvené tyčinky"],
      content: {
        definice: "<strong>Nocardia:</strong> G+ vláknitá aerobní bakterie, slabě acidorezistentní (částečně kyselinorezistentní – modifikované barvení dle Ziehl-Neelsena). Výtrusná vlákna. Volně žijící v půdě.<br><strong>Actinomyces:</strong> G+ anaerobní/mikroaerofilní větvené tyčinky. Součást normální ústní mikroflóry.",
        nocardia: "<strong>Nocardia (N. asteroides, N. brasiliensis):</strong> Inhalace → plicní infekce u imunosuprimovaných. Abscesy v plicích, mozku, kůži. Diagnostika: barvení Ziehl-Neelsen (modif. = slabá kyselinorezistence), kultivace (pomalu na KA nebo speciálních půdách). Léčba: kotrimoxazol (TMP-SMX, dlouhodobě), imipenem, amikacin.",
        actinomyces: "<strong>Actinomyces israelii:</strong> Endogenní infekce – proniká přes porušenou sliznici (zubní ošetření, úraz). Aktinomykóza: pomalu progredující granulomatózní infekce s tuhými ložisky a píštělemi (fistulami). Typicky: cerviofaciální forma (čelist, krk), hrudní, abdominální. Síranová zrna (sulfur granules) v hnisu. Diagnostika: kultivace (anaerobní, pomalá), síranová zrna v histologii. Léčba: vysoké dávky penicilínu (6–12 měsíců).",
        dalsi: "<strong>Tropheryma whipplei:</strong> Whippleova choroba – malabsorpce, artritis, lymfadenopatie. Diagnostika: PAS barvení biopsie tenkého střeva. Léčba: kotrimoxazol."
      },
      quiz: [
        {
          q: "Síranová zrna (sulfur granules) v hnisu jsou typická pro:",
          options: ["Nokardiózu", "Aktinomykózu", "Stafylokokový absces", "Aspergilózu"],
          correct: 1,
          explanation: "Síranová (sírová) zrna = makroskopicky viditelné žluté shluky bakterií (Actinomyces) obklopené neutrofily ve vláknité struktuře – typický patognomonický nález aktinomykózy."
        }
      ]
    },
    cast_b: {
      title: "Endemické a vzácné mykózy (Histoplasma, Coccidioides, Blastomyces)",
      keywords: ["Histoplasma capsulatum", "histoplazmóza", "Coccidioides", "Blastomyces", "dimorfní houby", "endemické mykózy"],
      content: {
        definice: "Endemické mykózy jsou způsobeny dimorfními houbami (teplota-dependentní dimorfismus: plísňová forma v prostředí vs. kvasinkový/tělní tvar v hostiteli). Jsou geograficky vázány.",
        viry: "<strong>Histoplasma capsulatum:</strong> Amerika (Ohio-Mississippi údolí), Afrika. Rezervoár: ptačí trus, netopýři. Inhalace konidií → plicní infekce (většina inaparentní). U imunosuprimovaných: diseminovaná histoplazmóza (játra, slezina, kostní dřeň). Diagnostika: kultivace, sérologická (precipitace, CF), Histoplasma urin antigen (ELISA). Léčba: itrakonazol (lehké), amfotericin B (těžké).<br><br><strong>Coccidioides immitis:</strong> JZ USA, Latinská Amerika (Valley Fever). Inhalace artrokonidií. V hostiteli: sférulie s endosporami. Plicní infekce (akutní, chronická, kaverna). Diseminace do mozku, kostí, kůže. Diagnostika: mikroskopie (sférulie), sérologie (CF, EIA). Léčba: flukonazol, amfotericin B.<br><br><strong>Blastomyces dermatitidis:</strong> Severní Amerika. Plíce + kůže + kosti. Diagnostika: mikroskopie (velké kvasinky s broad-based pučením), kultivace. Léčba: itrakonazol.",
        dimorfismus: "Dimorfní houby: při 25–28 °C (prostředí) → plísňová forma (hyfy, konidie); při 37 °C (tkáně) → kvasinkový/parazitický tvar. Konverze je klíčová pro patogenitu."
      },
      quiz: [
        {
          q: "Dimorfismus hub znamená, že:",
          options: ["Houby tvoří dva typy spor", "Houby mění morfologii (plísně/kvasinky) v závislosti na teplotě/prostředí", "Houby jsou viditelné dvěma mikroskopickými technikami", "Houby napadají dva orgány současně"],
          correct: 1,
          explanation: "Dimorfní houby: při nízké teplotě prostředí (25–28 °C) rostou jako plísně (hyfy/konidie), při tělesné teplotě hostitele (37 °C) konvertují na kvasinkový nebo jiný parazitický tvar – to je klíčová adaptace pro infekci."
        }
      ]
    }
  },
  {
    id: "mikra-20",
    cislo: 20,
    skupina_a: "Bakteriologie",
    skupina_b: "Mykologie",
    cast_a: {
      title: "Grampozitivní anaerobní koky a tyčinky (Clostridium, Peptostreptococcus)",
      keywords: ["Clostridium difficile", "Clostridium perfringens", "Clostridium tetani", "C. botulinum", "Peptostreptococcus", "plynatá sněť", "botulizmus"],
      content: {
        definice: "<strong>Clostridium:</strong> G+ anaerobní sporulující tyčinky. Spory velmi odolné. Saprofyti v půdě a střevě. Produkují exotoxiny.<br><strong>Peptostreptococcus (Finegoldia, Anaerococcus):</strong> G+ anaerobní koky, součást normální flóry.",
        clostridium: "<strong>C. perfringens:</strong> Plynatá sněť (myonekróza). Toxin alfa (lecitináza, fosfolipáza C → lýza membrán). Inkubace hodin. Léčba: chirurgická débridement + penicilin + hyperbarická O₂.<br><br><strong>C. tetani:</strong> Tetanus. Spory v půdě. Tetanospasmin (neurotoxin): blokuje inhibiční synapse (glycin, GABA) → tonicko-klonické křeče, opistotonus. Prevence: tetanická vakcína (DTaP). Léčba: antitoxin (TIG) + penicilin + sedace.<br><br><strong>C. botulinum:</strong> Botulizmus. Botulotoxin: nejsilnější biologický toxin, blokuje uvolnění acetylcholinu v nervosvalové ploténce → chabá obrna. Formy: potravinový, novorozenecký (konzumace medu!), ranový. Léčba: antitoxin.<br><br><strong>C. difficile:</strong> Pseudomembranózní kolitida po ATB (klindamycin, ampicilin, cefalosporiny). Toxiny A (enterotoxin) + B (cytotoxin). Diagnostika: ELISA toxiny A+B v stolici nebo PCR tcdB. Léčba: metronidazol, vankomycin p.o., fidaxomicin.",
        peptostreptococcus: "<strong>Peptostreptococcus (Finegoldia, Parvimonas):</strong> Normální mikroflóra DÚ, vaginy, GIT. Smíšené anaerobi infekce (abscesy, peritonitidy, aspirační pneumonie). Léčba: penicilin, klindamycin, metronidazol."
      },
      quiz: [
        {
          q: "Botulotoxin způsobuje paralýzu mechanizmem:",
          options: ["Blokace glycinových receptorů na inhibičních synapích", "Inhibice uvolnění acetylcholinu v nervosvalové ploténce", "Destrukce motorických nervů", "Aktivace cholinestrázy"],
          correct: 1,
          explanation: "Botulotoxin štěpí SNARE proteiny (synaptobrevin) → znemožní fúzi váčků s acetylcholinem s presynaptickou membránou → žádné uvolnění ACh → chabá (periferní) paralýza."
        },
        {
          q: "Pseudomembranózní kolitida způsobená C. difficile typicky vzniká po:",
          options: ["Konzumaci kontaminovaného masa", "Dlouhodobé antibiotické léčbě (klindamycin, cefalosporiny)", "Inhalaci spor C. difficile", "Kousnutí zvířetem"],
          correct: 1,
          explanation: "ATB léčba narušuje normální střevní mikroflóru → přemnožení C. difficile (rezistentní na mnohá ATB) → produkce toxinů A a B → destrukce sliznice kolon → pseudomembranózní kolitida (hlen, krev, průjem)."
        }
      ]
    },
    cast_b: {
      title: "Dermatofyty a povrchové mykózy",
      keywords: ["Trichophyton", "Microsporum", "Epidermophyton", "tinea", "dermatofytóza", "keratin", "onychomykóza"],
      content: {
        definice: "Dermatofyty – houby schopné utilizovat keratin – napadají kůži, vlasy, nehty. Tři rody: Trichophyton, Microsporum, Epidermophyton. Způsobují dermatofytózy (tinea).",
        formy: "<strong>Tinea capitis:</strong> Infekce vlasů (Trichophyton, Microsporum) – plešatění, vypadávání vlasů.<br><strong>Tinea corporis:</strong> Prstencové léze na hladké kůži.<br><strong>Tinea pedis:</strong> Atletická noha – meziprstí, chodidla (T. rubrum, T. mentagrophytes).<br><strong>Tinea unguium (onychomykóza):</strong> Infekce nehtů – žloutnutí, zhrubnutí, drolení (T. rubrum). Nejobtížněji léčitelná.<br><strong>Tinea cruris:</strong> Třísla, šourek.<br><strong>Tinea versicolor (Pityriasis):</strong> Způsobena Malassezia furfur – hypo/hyperpigmentované skvrny na trupu.",
        diagnostika: "KOH preparát z kůže/vlasů/nehtů → průkaz hyf a artrokonidií. Kultivace: Sabouraudův agar, 25–28 °C, 2–4 týdny. Wood's lamp (UV světlo) – fluorescence M. canis (zelená).",
        terapie: "Lokální: azolová antifungika (klotrimazol, ekonazol), terbinafin. Systémová (tinea capitis, onychomykóza): terbinafin, itrakonazol, griseofulvin. Onychomykóza: terbinafin 3–6 měsíců."
      },
      quiz: [
        {
          q: "KOH preparát v dermatologické diagnostice mykóz slouží k:",
          options: ["Barvení buněčných stěn hub", "Rozkladu keratinu a lidských buněk → průkaz hyf/spor v nativním preparátu", "Sterilizaci vzorku před kultivací", "Průkazu protilátky IgG"],
          correct: 1,
          explanation: "KOH (10–20%) rozloží keratin a lidské struktury → průhledný preparát. Houbové elementy (hyfy, artrokonidie) jsou viditelné fázovým kontrastem nebo barvením calcoflour white (fluorescence chitinu)."
        }
      ]
    }
  },
  {
    id: "mikra-21",
    cislo: 21,
    skupina_a: "Bakteriologie",
    skupina_b: "Mykologie",
    cast_a: {
      title: "Mycobacterium tuberculosis",
      keywords: ["TBC", "Kochův bacil", "Ziehl-Neelsen", "Löwenstein-Jensen", "antituberotika", "Mantoux"],
      content: {
        definice: "<strong>Mycobacterium tuberculosis (Kochův bacil, BK):</strong> Štíhlá, acidorezistentní tyčinka. Obligátně aerobní, intracelulární patogen. Součást M. tuberculosis komplexu (spolu s <em>M. bovis, M. africanum, BCG kmenem</em>). Nevytváří toxiny; virulence závisí na schopnosti přežívat a množit se uvnitř nevnímavých makrofágů.",
        etiologie: "<strong>Acidorezistence:</strong> Dána vysokým obsahem lipidů a mykolových kyselin v buněčné stěně (až 60 % suché hmotnosti). Zabraňuje klasickému barvení dle Grama.<br><strong>Barvení:</strong> Metoda dle Ziehla-Neelsena (karbolfuchsin za horka → odbarvení kyselým alkoholem → dobarvení malachitovou zelení/methylenovou modří; tyčinky červené na modrém pozadí). Fluorescenční barvení (auramin O / rhodamin).<br><strong>Kultivace:</strong> Pomalá (3–6 týdnů). Pevná vaječná půda Löwenstein-Jensenova (drolivé kolonie typu R, krémové, květákovité). Tekutá Šulova půda (krupicovitý sediment).",
        patogeneze: "Inhalace kapének do alveolů → pohlcení alveolárními makrofágy → inhibice fúze fagosomu s lysosomem → tvorba tuberkulózního granulomu (kaseózní nekróza v centru, Langhansovy obrovské buňky, epiteloidní buňky, T-lymfocyty). Ghonův primární komplex = plicní ložisko + zánět regionálních mízních uzlin.",
        klinicky: "<strong>Primární TBC:</strong> Většinou asymptomatická nebo lehká; zhojení kalcifikací (Ghonův komplex). U dětí risk TBC meningitidy (báze lebeční) nebo krtic (scrofulosis – krční lymfadenitida).<br><strong>Postprimární (reaktivovaná) TBC:</strong> Postižení plicních hrotů (apikální segmenty). Příznaky: chronický kašel, hemoptýza, noční poty, subfebrilie, váhový úbytek, kachexie. Extrapulmonální formy: urogenitální TBC, kostní TBC (Pottova nemoc), lupus vulgaris (kožní).",
        laborator: "1. Mikroskopie (Z-N barvení, reakce pozitivní při ≥10⁴ BK/ml sputa).<br>2. Kultivace (L-J, Šula, MGIT automatizovaný systém).<br>3. Molekulární metody (real-time PCR, GeneXpert – detekce DNA i rezistence na rifampicin).<br>4. Nepřímé testy: Mantoux II (tuberkulinový kožní test) a IGRA (Interferon-Gamma Release Assay – QuantiFERON-TB, stanovení IFN-γ u T-lymfocytů).",
        terapie: "Kombinovaná antituberulotická terapie podávaná pod dohledem (DOTS). <strong>Iniciální fáze (2 měsíce):</strong> čtyřkombinace HRZE – Isoniazid (H), Rifampicin (R), Pyrazinamid (Z), Ethambutol (E). <strong>Pokračovací fáze (4–6 měsíců):</strong> dvojkombinace HR (Isoniazid + Rifampicin)."
      },
      quiz: [
        {
          q: "Která barvící metoda se používá pro průkaz Mycobacterium tuberculosis?",
          options: ["Barvení dle Grama", "Barvení dle Ziehla-Neelsena", "Giemsovo barvení", "Burriho metoda"],
          correct: 1,
          explanation: "Metoda Ziehla-Neelsena využívá karbolfuchsin za horka a odbarvení kyselým alkoholem. Acidorezistentní mykobakterie zůstanou zářivě červené."
        },
        {
          q: "Která čtyřkombinace antituberkulotik se podává v iniciální 2měsíční fázi léčení TBC?",
          options: ["Penicilin, Streptomycin, Doxycyklin, Ciprofloxacin", "Isoniazid, Rifampicin, Pyrazinamid, Ethambutol", "Vancomycin, Gentamicin, Metronidazol, Azitromycin", "Fluconazol, Klindamycin, Cotrimoxazol, Erytromycin"],
          correct: 1,
          explanation: "Standardní iniciální regimen pro TBC je HRZE: Isoniazid, Rifampicin, Pyrazinamid a Ethambutol po dobu 2 měsíců."
        }
      ]
    },
    cast_b: {
      title: "Pneumocystová pneumonie (PJP)",
      keywords: ["Pneumocystis jirovecii", "intersticiální pneumonie", "AIDS", "cotrimoxazol", "indukované sputum"],
      content: {
        definice: "<strong>Pneumocystis jirovecii (dříve P. carinii):</strong> Atrofická mikromyceta (historicky řazená mezi prvoky, dnes ascomycetní houba). Původce oportunní intersticiální pneumonie (PCP/PJP) u pacientů s těžkou poruchou buněčné imunity (CD4+ T-lymfocyty < 200/µl – AIDS, hematologické malignity, imunosuprese po transplantaci).",
        etiologie: "Pneumocystis má stěnu bohatou na β-1,3-D-glukan. V plicích existuje ve formě trofozoitů (adherují k pneumocytům I. typu) a cyst (obsahují 8 introcystických tělísek/sporozoitů). Nelze kultivovat na běžných in vitro médiích!",
        patogeneze: "Reaktivace latentní nákazy nebo nová inhalace → selhání CD4+ T-buněčné imunity → nekontrolované množení pneumocyst v alveolech → alveoly plněny pěnovitým exsudátem bohatým na proteiny a houby → ztluštění alveolokapilární membrány → těžká porucha difuze O₂ a hypoxémie.",
        klinicky: "Atypická pneumonie s pozvolným nástupem: triáda neproduktivní (suchý) dráždivý kašel, progresivní námahová dušnost (dyspnoe), febrilie/subfebrilie. Fyzikální nález na plicích často chudý (nesoulad mezi nálezem a dušností). RTG hrudníku: oboustranné difuzní retikulonodulární infiltráty (připomínající mléčné sklo).",
        laborator: "Přímý průkaz: Indukované sputum (po inhalaci 15% NaCl) nebo bronchoalveolární laváž (BAL – 90% záchyt).<br>1. Mikroskopie: Grocottovo stříbření (černé cysty), Giemsa nebo IF s konklonálními protilátkami.<br>2. PCR (real-time PCR): vysoká citlivost a specifita.<br>3. Stanovení (1,3)-β-D-glukanu v séru (pomocný marker invazivních mykóz).",
        terapie: "<strong>Lék volby:</strong> Vysokodávkovaný Co-trimoxazol (Trimethoprim-Sulfamethoxazol) i.v. nebo p.o. po dobu 21 dnů. Při závažné hypoxii (PaO₂ < 70 mmHg) se přidávají kortikosteroidy (Prednison). Alternativy: Pentamidin, Atovaquon, Clindamycin + Primaquin."
      },
      quiz: [
        {
          q: "Pneumocystis jirovecii je z taxonomického hlediska:",
          options: ["Prvok (Protozoon)", "Gramnegativní bakterie", "Houba (Mikromyceta)", "Virus"],
          correct: 2,
          explanation: "Přestože byla Pneumocystis jirovecii dlouho považována za prvoka, sekvenování DNA prokázalo, že patří mezi houby (mikromycety, Ascomycota)."
        },
        {
          q: "Lékem první volby v terapii i profilaxi pneumocystové pneumonie je:",
          options: ["Amfotericin B", "Co-trimoxazol (TMP-SMX)", "Penicilin G", "Ciprofloxacin"],
          correct: 1,
          explanation: "Co-trimoxazol ve vysoké dávce je lékem první volby pro léčbu i chemoprofilaxi pneumocystové pneumonie u imunokompromitovaných."
        }
      ]
    }
  },
  {
    id: "mikra-22",
    cislo: 22,
    skupina_a: "Bakteriologie",
    skupina_b: "Mykologie",
    cast_a: {
      title: "Atypická (netuberkulózní) mykobakteria",
      keywords: ["NTM", "M. avium", "M. kansasii", "M. marinum", "mykobakteriózy", "mycolacton"],
      content: {
        definice: "<strong>Atypická (netuberkulózní, NTM) mykobakteria:</strong> Podmíněně patogenní mykobakteria běžně se vyskytující v prostředí (půda, voda, prach, vodovodní potrubí). Není pozorován přenos z člověka na člověka. Vyvolávají tzv. mykobakteriózy u osob s oslabenou imunitou nebo poškozenými plícemi (CHOPN, silikóza, bronchiektázie, HIV).",
        etiologie: "<strong>Klinicky významné druhy:</strong><br>• <strong>M. avium-intracellulare komplex (MAC):</strong> Lymfadenitida krčních uzlin u dětí, TBC-like plicní procesy u CHOPN a těžké diseminované infekce u pacientů s AIDS.<br>• <strong>M. kansasii:</strong> Časté v průmyslových a důlních oblastech (Ostravsko). Vyvolává plicní infekce identické s TBC; je však dobře citlivé na antituberkulotika.<br>• <strong>M. marinum:</strong> Vyskytuje se v akváriích a bazénech. Po poranění kůže způsobuje chronické granulomatózní léze na končetinách (tzv. akvarijní granulom).<br>• <strong>M. ulcerans:</strong> Tropické onemocnění (vřed Buruli) vyvolané exotoxinem <em>mycolactonem</em>, způsobuje rozsáhlé nekrotické destrukce kůže.<br>• <strong>M. abscessus / M. chelonae / M. fortuitum:</strong> Rychle rostoucí mykobakteria, původci nosokomiálních infekcí ran po plastických operacích, liposukcích, tetování a pedikúře.",
        laborator: "<strong>Zpracování vzorku:</strong><br>1. Dekontaminace (např. 4% NaOH dle Petroffa) pro odstranění běžné flóry, využití acidorezistence mykobakterií.<br>2. Homogenizace a centrifugace vzorku.<br>3. Kultivace: Löwenstein-Jensen, Šula, MGIT (při 37 °C, u M. marinum a M. ulcerans při 30 °C!). Spolehlivá identifikace pomocí PCR / DNA sond / hmotnostní spektrometrie MALDI-TOF.",
        terapie: "Často rezistentní k běžným antituberkulotikům. Terapie vyžaduje dlouhodobou kombinaci makrolidů (Klaritromycin/Azitromycin) + Ethambutol + Rifampicin/Rifabutin."
      },
      quiz: [
        {
          q: "Které netuberkulózní mykobakterium vyvolává tzv. 'akvarijní granulom' po poranění ve vodě?",
          options: ["Mycobacterium kansasii", "Mycobacterium marinum", "Mycobacterium bovis", "Mycobacterium leprae"],
          correct: 1,
          explanation: "M. marinum se vyskytuje ve sladké i slané vodě a akváriích. Vstupuje drobnými oděrkami a tvoří perilymfatické granulomatózní léze na kůži."
        }
      ]
    },
    cast_b: {
      title: "Dermatomykózy a povrchové mykózy",
      keywords: ["Dermatofyty", "Trichophyton", "Microsporum", "Epidermophyton", "Candida", "Pityriasis versicolor"],
      content: {
        definice: "<strong>Dermatomykózy:</strong> Houbová onemocnění kůže, vlasů a nehtů vyvolaná dermatofyty, kvasinkami nebo Malasseziemi.",
        etiologie: "<strong>1. Dermatofytózy (Tinea):</strong> Vláknité houby využívající keratin. Rody: <em>Trichophyton, Microsporum, Epidermophyton</em>.<br>• Tinea capitis (vlasy – M. canis, T. tonsurans)<br>• Tinea corporis (trup – T. rubrum)<br>• Tinea pedis (atletická noha – T. rubrum, T. interdigitale – 50 % populace)<br>• Tinea unguium / Onychomykóza (nehty – T. rubrum)<br><br><strong>2. Kandidózy kůže a sliznic:</strong> <em>Candida albicans</em>. Manifestace v místech zápařky (intertrigo), orificií a kožních řas u diabetiků a obézních osob. Svědivé zarudnutí s macerovaným bílým lemem a satelitními pustulami.<br><br><strong>3. Keratomykózy:</strong> Postihují pouze rohovou vrstvu epidermis.<br>• <em>Pityriasis versicolor:</em> Původce <em>Malassezia furfur</em>. Hypo- nebo hyperpigmentované makuly na hrudníku a zádech, odlupující se šupinky.<br>• <em>Erythrasma:</em> Corynebacterium minutissimum (bakteriální pseudo-mykóza), ohraničené červenohnědé skvrny v tříslech, červená fluorescence v Woodově lampě.",
        diagnostika: "Odběr šupin kůže, podnehtové drti nebo vlasů. Louhový preparát: 10–20% KOH (+ Parkerův inkoust) k rozvolnění keratinu → přímá mikroskopie hyf a artrokonidií. Kultivace na Sabouraudově / Mykosel agaru (1–4 týdny, 25 °C). Woodova lampa (UV fluorescence u Microsporum).",
        terapie: "Lokální: Allylaminy (Terbinafin – na dermatofyty), Imidazoly (Clotrimazol, Bifonazol), Polyeny (Nystatin – na kvasinky). Systémová (onychomykóza, tinea capitis): Terbinafin p.o., Fluconazol, Itraconazol."
      },
      quiz: [
        {
          q: "Pityriasis versicolor je povrchové mykotické onemocnění vyvolané:",
          options: ["Trichophyton rubrum", "Malassezia furfur", "Candida albicans", "Microsporum canis"],
          correct: 1,
          explanation: "Malassezia furfur tvoří charakteristické šupinaté hyper/hypopigmentované skvrny na trupu (Pityriasis versicolor)."
        }
      ]
    }
  },
  {
    id: "mikra-23",
    cislo: 23,
    skupina_a: "Bakteriologie",
    skupina_b: "Mykologie",
    cast_a: {
      title: "Mycobacterium leprae a odběry na mykobakteria",
      keywords: ["M. leprae", "lepra", "Hansenův bacil", "facies leontina", "dekontaminace", "Petroff"],
      content: {
        definice: "<strong>Mycobacterium leprae (Hansenův bacil):</strong> Acidorezistentní bakterie s tropismem pro periferní nervy (Schwannovy buňky) a kůži. Nelze kultivovat na umělých médiích in vitro!",
        etiologie: "Dlouhá generační doba (12–14 dní). Množí se v chladnějších částech těla (kůže, nosní sliznice, uši, prsty). Přenos kapénkovou infekcí nosním sekretem při dlouhodobém těsném kontaktu.",
        patogeneze: "<strong>Tuberkuloidní lepra:</strong> Silná T-buněčná imunita (Th1). Množství granulomů a poškození periferních nervů (necitlivé depigmentované skvrny, ztráta citlivosti). Bakterie mikroskopicky téměř nelze prokázat.<br><strong>Lepromatózní lepra:</strong> Deficitní buněčná imunita. Masivní množení lepromatózních buněk plných mykobakterií. Znetvoření obličeje (facies leontina), propadnutí nosu, slepota, ztráta prstů. V mikroskopii hojné shluky tyčinek (globi).",
        laborator: "<strong>Diagnostika M. leprae:</strong> Seškraby z kožních lézí nebo nosní sliznice barvené dle Ziehla-Neelsena (průkaz acidorezistentních tyčinek a globi v makrofázích). Terapie: Dapsone + Rifampicin + Clofazimine.<br><br><strong>Odběr a zpracování vzorků na ostatní TBC/NTM:</strong><br>• Plicní TBC: 3 vzorky sputa 3 dny po sobě ráno, BAL, žaludeční výplach u dětí.<br>• Dekontaminace vzorků s nespecifickou flórou: 4% NaOH (metoda dle Petroffa) zničí běžné bakterie, acidorezistentní mykobakterie přežijí.<br>• Očkování na Löwenstein-Jensen (vaječná) a Šulovu (tekutá) půdu."
      },
      quiz: [
        {
          q: "Proč nelze Mycobacterium leprae dokázat kultivací na Löwenstein-Jensenově půdě?",
          options: ["Je to anaerobní bakterie", "Je to obligátní intracelulární patogen nelze kultivovat in vitro", "Kultivační půdu zničí svými toxiny", "Roste pouze v agarovém médiu s krví"],
          correct: 1,
          explanation: "M. leprae nelze kultivovat na umělých živných médiích in vitro (množí se pouze v živých tkáních, např. u pásovců nebo imunosuprimovaných myší)."
        }
      ]
    },
    cast_b: {
      title: "Fusarióza, feohyfomykózy a chromoblastomykózy",
      keywords: ["Fusarium", "feohyfomykózy", "chromoblastomykóza", "sklerotická tělíska", "mykotoxiny"],
      content: {
        definice: "Vzácnější oportunní a subkutánní houbové infekce vyvolané vláknitými mikromycetami.",
        etiologie: "<strong>1. Fusarióza:</strong> Rody <em>Fusarium solani, F. oxysporum</em>. Původci onychomykóz, keratóz, endoftalmitid a u imunosuprimovaných pacientů těžkých diseminovaných infekcí. Produkují mykotoxiny.<br><strong>2. Feohyfomykózy:</strong> Infekce vyvolané tmave pigmentovanými (dematiaceovými) vláknitými houbami tvořícími v kůži tmavé septované hyfy (rody <em>Alternaria, Bipolaris, Cladophialophora</em> – abscesy CNS).<br><strong>3. Chromoblastomykóza:</strong> Chronická tropická subkutánní mykóza (rody <em>Phialophora, Cladosporium, Fonsecaea</em>). Vzniká po poranění kůže (nohy, ruce). V tkáni tvoří typická <strong>sklerotická (muriformní) tělíska</strong> – tmavě hnědé kulovité kvasinkovité buňky.",
        diagnostika: "Histologie a KOH preparát (nález tmavých hyf nebo sklerotických tělísek). Kultivace na Sabouraudově agaru.",
        terapie: "Amfotericin B, Vorikonazol, Posakonazol, chirurgie."
      },
      quiz: [
        {
          q: "Typickým mikroskopickým nálezem v tkáňovém vzorku u chromoblastomykózy jsou:",
          options: ["Cysty Pneumocystis jirovecii", "Sklerotická (muriformní) tělíska", "Endospory Coccidioides", "Sphaeruly"],
          correct: 1,
          explanation: "Pro chromoblastomykózu jsou patognomická sklerotická tělíska (hnědé silnostěnné kulovité buněčné sestavy v tkáni)."
        }
      ]
    }
  },
  {
    id: "mikra-24",
    cislo: 24,
    skupina_a: "Diagnostika",
    skupina_b: "Virologie",
    cast_a: {
      title: "Antimykotika – klasifikace a mechanizmus účinku",
      keywords: ["Amfotericin B", "Azoly", "Echinokandiny", "Flucytosin", "Terbinafin", "ergosterol"],
      content: {
        definice: "<strong>Antimykotika:</strong> Léčiva určená k terapii fungálních infekcí. Cílí na struktury specifické pro houbovou buňku (ergosterol v membráně, β-1,3-D-glukan v buněčné stěně).",
        etiologie: "<strong>Rozdělení podle mehanismu účinku:</strong><br><br><strong>1. Polyeny (Amfotericin B, Nystatin, Natamycin):</strong><br>• Vážou se na ergosterol v buněčné membráně → tvorba pórů → únik K⁺ a lýza.<br>• <em>Amfotericin B:</em> Zlatý standard pro invazivní mykózy. Výrazná nefrotoxicita (konstrikce renálních cév, ztráty K⁺/Mg²⁺), akutní infuzní reakce (febrilie, třesavka). Nystatin vyhrazen pouze pro lokální podání.<br><br><strong>2. Azoly (Imidazoly: Ketoconazol, Clotrimazol; Triazoly: Fluconazol, Itraconazol, Voriconazol, Posaconazol):</strong><br>• Inhibice 14-α-demethylázy lanosterolu (cytochrom P450) → blokáda syntézy ergosterolu.<br>• Fungistatický účinek.<br>• Nežádoucí účinky: hepatotoxicita, inhibice CYP450 (interakce!), gynekomastie u ketokonazolu.<br><br><strong>3. Echinokandiny (Caspofungin, Micafungin, Anidulafungin):</strong><br>• Inhibice β-(1,3)-D-glukan syntetázy → narušení buněčné stěny houby.<br>• Fungicidní pro Kandidy, fungistatické pro Aspergily. Výborná tolerance, nízká toxicita. První volba pro kandidémii.<br><br><strong>4. Antimetabolity (Flucytosin / 5-FC):</strong><br>• Konverze na 5-fluorouracil v houbové buňce → inhibice RNA a DNA syntézy. Použití v kombinaci s Amfotericinem B u kryptokokové meningitidy.<br><br><strong>5. Allylaminy (Terbinafin):</strong><br>• Inhibice skvalenepoxidázy → fungicidní účinek. Léčba dermatofytóz a onychomykóz.",
        laborator: "Testování citlivosti: Diskový difuzní test, E-test (gradientový), mikrodiluční bujónová metoda (EUCAST / CLSI)."
      },
      quiz: [
        {
          q: "Která skupina antimykotik působí inhibicí syntézy β-(1,3)-D-glukanu buněčné stěny hub?",
          options: ["Polyeny", "Azoly", "Echinokandiny", "Allylaminy"],
          correct: 2,
          explanation: "Echinokandiny (caspofungin, anidulafungin) blokují tvorbu β-(1,3)-D-glukanu, čímž způsobují osmotickou lýzu houbové buňky."
        }
      ]
    },
    cast_b: {
      title: "HIV – charakteristika, klinika a diagnostika",
      keywords: ["HIV-1", "AIDS", "CD4+ lymfocyty", "opportunní infekce", "Western blot", "HAART/ART"],
      content: {
        definice: "<strong>HIV (Human Immunodeficiency Virus):</strong> Obalený ssRNA-RT virus z čeledi <em>Retroviridae</em>, rod <em>Lentivirus</em>. Způsobuje chronickou destrukci CD4+ T-lymfocytů vedoucí k AIDS (Acquired Immunodeficiency Syndrome).",
        etiologie: "Dva typy: HIV-1 (pohlavní přenos celosvětově), HIV-2 (Západní Afrika, méně patogenní). Viriony obsahují 2 kopie gRNA, reverzní transkriptázu, integrázu, proteázu a obalové glykoproteiny gp120 a gp41.<br>Vstup do buňky: gp120 se váže na receptor CD4 a koreceptory CCR5 nebo CXCR4 na T-lymfocytech a makrofázích.",
        patogeneze: "Přenos krví, sexuálním stykem a vertikálně (z matky na plod/mlékem). Replikace viru v lymfatické tkáni → pozvolný pokles CD4+ T-buněk. Pokles CD4 < 200/µl definuje pokročilé stádium AIDS s vysokým rizikem oportunních infekcí (Pneumocystis, Toxoplasma, CMV, Cándida esophagitis, TBC) a malignit (Kaposiho sarkom vyvolaný HHV-8, non-Hodgkinovy lymfomy).",
        klinicky: "1. Akutní retrovirální syndrom (2–4 týdny po infekci): chřipkovité onemocnění, exantém, lymfadenopatie.<br>2. Klinická latence (roky až desetiletí): asymptomatické množení viru.<br>3. Symptomatická fáze / AIDS: horečky, průjmy, úbytek váhy (wasting syndrom), oportunní infekce.",
        laborator: "• Screening: Kombinovaný test 4. generace (průkaz protilátek anti-HIV-1/2 a antigenu p24 v séru).<br>• Konfirmace: Western blot nebo Line Immunoassay (LIA).<br>• Sledování: Kvantitativní real-time RT-PCR (virová nálož / viral load) a stanovení absolutního počtu CD4+ lymfocytů flow-cytometrií.",
        terapie: "Antiretrovirová terapie (ART / HAART): Kombinace 3 léčiv (např. 2x NRTI + 1x NNRTI nebo integrázový inhibitor). Cíl: nedetekovatelná virová nálož."
      },
      quiz: [
        {
          q: "Který antigen se detekuje v kombinovaném sérologickém testu 4. generace pro včasnou diagnostiku HIV?",
          options: ["gp120", "p24", "gp41", "p17"],
          correct: 1,
          explanation: "Kapsidový antigen p24 se objevuje v séru ještě před tvorbou protilátek (v okně 2–3 týdnů po nákaze)."
        }
      ]
    }
  },
  {
    id: "mikra-25",
    cislo: 25,
    skupina_a: "Bakteriologie",
    skupina_b: "Parazitologie",
    cast_a: {
      title: "Mykoplasmata a chlamydie",
      keywords: ["Mycoplasma pneumoniae", "Chlamydia trachomatis", "elementární tělísko", "atypická pneumonie", "tetracykliny"],
      content: {
        definice: "<strong>Mykoplasmata a Chlamydie:</strong> Bakterie neschopné syntetizovat klasickou pevnou peptidoglykanovou buněčnou stěnu, nebo obligátní intracelulární patogeni.",
        etiologie: "<strong>1. Mykoplasmata (Mycoplasma pneumoniae, M. hominis, Ureaplasma urealyticum):</strong><br>• Nemají buněčnou stěnu (jsou pleomorfní, rezistentní k β-laktamům!). Buněčná membrána obsahuje cholesterol.<br>• <em>M. pneumoniae:</em> Adherin P1 k řasinkám. Vyvolává primární atypickou pneumonii (komunitní, stěhovavé plicní infiltráty na RTG, chladové aglutininy).<br>• <em>M. hominis a U. urealyticum:</em> Urogenitální nákazy (uretritidy, cervicitidy, post-partum febrilie).<br><br><strong>2. Chlamydie (Chlamydia trachomatis, Chlamydophila pneumoniae, C. psittaci):</strong><br>• Obligátně intracelulární patogeni (energetičtí parazité, neschopní tvořit ATP). Gram-like stěna bez peptidoglykanu.<br>• Dvojfázový životní cyklus: <strong>Elementární tělísko (EB)</strong> = infekční, metabolicky inaktivní, extracelulární; <strong>Retikulární tělísko (RB)</strong> = metabolicky aktivní, dělí se intracelulárně ve fagosomu.<br>• <em>C. trachomatis:</em> Sériovary A-C (Trachom – slepota), D-K (trachomové urogenitální nákazy, novorozenecká konjunktivitida a pneumonie), L1-L3 (Lymphogranuloma venereum).<br>• <em>C. psittaci:</em> Psitakóza (papouščí nemoc, těžká atypická pneumonie se splenomegalií).",
        laborator: "Kultivace chlamydií pouze na tkáňových kulturách (McCoy buňky). Metody volby: Real-time PCR (NAAT testy z moče/výtěrů). Výtěry ze spojivky, uretry, cervixu.",
        terapie: "Makrolidy (Azitromycin) nebo Tetracykliny (Doxycyklin). β-laktamy jsou NEÚČINNÉ!"
      },
      quiz: [
        {
          q: "Forma chlamydie, která je infekční a přežívá v extracelulárním prostředí, se nazývá:",
          options: ["Retikulární tělísko", "Elementární tělísko", "Tachyzoit", "Sporozoit"],
          correct: 1,
          explanation: "Elementární tělísko (EB) je infekční forma chlamydie s denzním jádrem a pevnou membránou přizpůsobená přežití mimo buňku."
        }
      ]
    },
    cast_b: {
      title: "Trypanosomy – spavá nemoc a Chagasova choroba",
      keywords: ["Trypanosoma brucei", "Trypanosoma cruzi", "moucha tse-tse", "Chagasova nemoc", "Winterbottom", "Romana"],
      content: {
        definice: "<strong>Trypanosomy:</strong> Bičíkovití krevní a tkáňoví prvoci (Kinetoplastea) přenášení krvesajícím hmyzem v Africe a Latinské Americe.",
        etiologie: "<strong>1. Africká trypanosomóza (Spavá nemoc):</strong><br>• <em>Trypanosoma brucei gambiense</em> (Západní Afrika, chronická) a <em>T. b. rhodesiense</em> (Východní Afrika, akutní).<br>• Extracelulární paraziti v krevní plazmě a likvoru. Antigenická variace povrchového glykoproteinu (VSG) způsobuje opakované vlny virémie.<br>• Přenašeč: Moucha Tse-tse (rod <em>Glossina</em>).<br>• Průběh: Šankr v místě kousnutí → Lymfatická fáze (zduření krčních uzlin = Winterbottomovo znamení, nepravidelné horečky) → CNS fáze (meningoencefalitida, letargie, inverze spánku, koma).<br><br><strong>2. Americká trypanosomóza (Chagasova nemoc):</strong><br>• <em>Trypanosoma cruzi:</em> Intracelulární (amastigoti ve svalech a nervových pleteních) i extracelulární (trypomastigoti v krvi).<br>• Přenašeč: Dravé ploštice (rod <em>Triatoma / Rhodnius</em> – defekace při sání na kůži).<br>• Akutní fáze: Chagoma (kožní uzel), Romanův příznak (jednostranný nebolestivý otok víčka a spojivky), hepatosplenomegalie, myocarditis.<br>• Chronická fáze (po 10–20 letech): Dilatační kardiomyopatie, megacolon, megaesophagus (destrukce myenterického pleteně).",
        laborator: "Mikroskopie periferní krve (tlustá kapka, nátěr barvený Giemsou), likvoru. PCR. U Chagasovy choroby v chronické fázi sérologie (ELISA) nebo xenodiagnostika.",
        terapie: "Africká: Suramin / Pentamidin (1. fáze), Melarsoprol / Eflornithin (2. fáze – CNS). Americká: Nifurtimox, Benznidazol."
      },
      quiz: [
        {
          q: "Jednostranný otok očních víček (Romanův příznak) je typický pro akutní fázi:",
          options: ["Spavé nemoci", "Chagasovy nemoci", "Leishmaniózy", "Toxoplazmózy"],
          correct: 1,
          explanation: "Romanův příznak (otok obou víček jednoho oka po vpravení výkalů ploštice) je patognomický pro akutní Trypanosoma cruzi nákazu."
        }
      ]
    }
  },
  {
    id: "mikra-26",
    cislo: 26,
    skupina_a: "Bakteriologie",
    skupina_b: "Parazitologie",
    cast_a: {
      title: "Spirochety (Borrelia, Treponema, Leptospira)",
      keywords: ["Borrelia burgdorferi", "Treponema pallidum", "Leptospira", "Erythema migrans", "Syfilis", "Weilova nemoc"],
      content: {
        definice: "<strong>Spirochety:</strong> Tenké, spirálovité, gramnegativní flexibilní bakterie s aktivním kmitavým pohybem zprostředkovaným endoflagely v periplasmatickém prostoru.",
        etiologie: "<strong>1. Rod Borrelia:</strong><br>• <em>Lymská borelióza:</em> B. burgdorferi s.s., B. afzelii (kožní formy), B. garinii (neuroborelióza). Přenašeč: Klíště <em>Ixodes ricinus</em>. Fáze: 1. Časná lokalizovaná (Erythema migrans – červená skvrna s výbledem v centru); 2. Časná diseminovaná (neuroborelióza – Bannwarthův syndrom, borreliový lymfocytom, karditida); 3. Pozdní (Acrodermatitis chronica atrophicans, chronická artritida). Terapie: Doxycyklin, Amoxicilin, Ceftriaxon i.v.<br>• <em>Návratné horečky:</em> B. recurrentis (veš šatní). Intermitentní horečnaté periody.<br><br><strong>2. Rod Treponema (T. pallidum subsp. pallidum – Syfilis / Lues):</strong><br>• Přenos pohlavně nebo transplacentárně.<br>• Primární syfilis: Tvrdý nebolestivý vřed (Ulcus durum) + zvětšení uzlin.<br>• Sekundární syfilis: Generalizovaný vyrážkový exantém, condylomata lata na sliznicích.<br>• Terciární syfilis: Gummata (granulomy), kardiovaskulární syfilis (aneurysma aorty), neurosyfilis (tabes dorsalis, progresivní paralysis). Kongenitální syfilis (Hutchinsonovy zuby, hluchota). Terapie: Depotní Penicilin G.<br><br><strong>3. Rod Leptospira (L. icterohaemorrhagiae, L. grippotyphosa):</strong><br>• Zoonóza (moč hlodavců → voda). Anikterická forma (chřipkovité onemocnění, aseptická meningitida) vs. Ikterická forma (Weilova nemoc – ikterus, selhání ledvin, krvácení).",
        laborator: "• Borelióza: Sérologie (ELISA + konfirmace Western blot).<br>• Syfilis: Přímá mikroskopie v zástinu z spodiny ulcus durum; Netreponemové testy (RRR, VDRL) a Treponemové testy (TPHA, TPAE, ELISA, WB).<br>• Leptospiry: Mikroskopický aglutinační test (MAT)."
      },
      quiz: [
        {
          q: "Tvrdý nebolestivý vřed (Ulcus durum) v místě vstupu infekce je projev:",
          options: ["Primární syfilis", "Sekundární syfilis", "Lymské boreliózy 1. fází", "Leptospirózy"],
          correct: 0,
          explanation: "Ulcus durum je patognomickým projevem primárního stádia syfilis (Treponema pallidum) vznikajícím cca 3 týdny po infekci."
        }
      ]
    },
    cast_b: {
      title: "Leishmanie – kožní, slizniční a viscerální leishmanióza",
      keywords: ["Leishmania donovani", "Leishmania tropica", "Phlebotomus", "Kala-azar", "amastigoti", "espundia"],
      content: {
        definice: "<strong>Leishmanie:</strong> Intracelulární prvoci napadající makrofágy a buněčné složky retikuloendotelového systému. Přenášeni krvesajícím hmyzem rodu <em>Phlebotomus</em> (Starý svět) a <em>Lutzomyia</em> (Nový svět).",
        etiologie: "<strong>Dvě vývojové formy:</strong> Promastigoti (extracelulární s bičíkem u přenašeče) a Amastigoti (bezbičíkatí intracelulární v makrofázích savce).<br><br><strong>1. Kožní leishmanióza Starého světa:</strong> <em>L. major</em> (vlhký vřed), <em>L. tropica</em> (suchý vřed). Nezhoubné ložiskové vředy kůže (leishmaniom) hojící se jizvou.<br><strong>2. Kožně-slizniční leishmanióza Nového světa:</strong> <em>L. braziliensis</em> (espundia). Závažná forma s destrukcí nosní přepážky, patra a obličeje.<br><strong>3. Viscerální leishmanióza (Kala-azar):</strong> <em>L. donovani, L. infantum, L. chagasi</em>. Napadá játra, slezinu a kostní dřeň. Symptomy: masivní hepatosplenomegalie, iregulární horečky, pancytopenie, kachexie, hyperpigmentace kůže. Bez léčby smrtelná!",
        laborator: "Mikroskopie Giemsou obarvených nátěrů z aspirátu kostní dřeně, sleziny nebo uzlin (nález amastigotů v makrofázích). PCR.",
        terapie: "Preparáty 5-mocného antimonu (stiboglukát), Lipozomální Amfotericin B, Miltefosin."
      },
      quiz: [
        {
          q: "Který orgánový systém je primárně postižen při viscerální leishmanióze (Kala-azar)?",
          options: ["Plíce a pleura", "Retikuloendotelový systém (játra, slezina, kostní dřeň)", "Střední ucho a labyrinth", "Periferní nervy"],
          correct: 1,
          explanation: "L. donovani se množí v makrofázích jater, sleziny a kostní dřeně, což vede k hepatosplenomegalii a útlumu kostní dřeně."
        }
      ]
    }
  },
  {
    id: "mikra-27",
    cislo: 27,
    skupina_a: "Farmakoterapie",
    skupina_b: "Parazitologie",
    cast_a: {
      title: "Peniciliny a inhibitory β-laktamáz",
      keywords: ["Penicilin G", "Oxacilin", "Amoxicilin", "Augmentin", "Piperacilin", "β-laktamázy"],
      content: {
        definice: "<strong>Peniciliny:</strong> Základní skupina β-laktamových baktericidních antibiotik. Blokují syntézu buněčné stěny vazbou na PBP (Penicillin-Binding Proteins).",
        etiologie: "<strong>Rozdělení penicilinů:</strong><br><br><strong>1. Základní peniciliny (úzkospektré):</strong><br>• <em>Penicilin G (benzylpenicilin):</em> i.v./i.m. Lék volby pro meningokokové a streptokokové meningitidy, pneumokokové infekce, syfilis, klostridiové infekce měkkých tkání, actinomykózu.<br>• <em>Penicilin V (fenoxymethylpenicilin):</em> p.o. Lék volby pro streptokokovou tonzilofaryngitidu (S. pyogenes).<br><br><strong>2. Antistafylokokové peniciliny (rezistentní k penicillináze):</strong><br>• <em>Oxacilin:</em> i.v. Lék volby pro citlivé stafylokokové infekce (MSSA – osteomyelitida, endokarditida, sepse).<br><br><strong>3. Aminopeniciliny (širokospektré):</strong><br>• <em>Ampicilin (i.v.), Amoxicilin (p.o.):</em> Léčba komunitních respiračních (pneumokok, hemofil) a uroinfekcí. Ampicilin je lékem volby pro <em>Listeria monocytogenes</em> a enterokokové endokarditidy.<br><br><strong>4. Peniciliny s inhibitory β-laktamáz:</strong><br>• <em>Amoxicilin + kyselina klavulanová (Augmentin):</em> p.o./i.v. Působí na kmeny produkující běžné β-laktamázy (H. influenzae, M. catarrhalis, E. coli, B. fragilis, MSSA). Kousnutí zvířetem/člověkem, sinuzitidy, komunitní smíšené infekce.<br>• <em>Ampicilin + sulbaktam (Unasyn):</em> i.v. analog.<br><br><strong>5. Antipseudomonádové peniciliny:</strong><br>• <em>Piperacilin + tazobaktam (Tazocin):</em> i.v. Širokospektrý přípravek účinný na <em>Pseudomonas aeruginosa</em> a závažné nozokomiální nosičské a břišní infekce."
      },
      quiz: [
        {
          q: "Který penicilin je lékem prví volby pro závažné stavy vyvolané Listeria monocytogenes?",
          options: ["Oxacilin", "Ampicilin", "Penicilin V", "Piperacilin"],
          correct: 1,
          explanation: "Ampicilin (obvykle v kombinaci s Gentamicinem) je lékem volby pro infekce způsobené Listeria monocytogenes."
        }
      ]
    },
    cast_b: {
      title: "Střevní protozoární nákazy (Giardia, Entamoeba, Cryptosporidium)",
      keywords: ["Giardia intestinalis", "Entamoeba histolytica", "Cryptosporidium", "metronidazol", "amébová dysenterie"],
      content: {
        definice: "<strong>Střevní protozoózy:</strong> Průjmová onemocnění vyvolaná prvoky napadajícími sliznici tenkého a tlustého střeva.",
        etiologie: "<strong>1. Giardia intestinalis (lamblia):</strong><br>• Trofozoit tvaru rozkrojené hrušky se 2 jádry a přísavným diskem. Cysty se 4 jádry. Fekálně-orální přenos kontaminovanou vodou/potravou.<br>• Kolonizuje duodenum a jejunum (non-invazivní) → kryje enterocyty → malabsorpce tuků a vitamínů.<br>• Příznaky: mastné páchnoucí průjmy bez krve, flatulence, epigastrické křeče. Terapie: Metronidazol / Tinidazol.<br><br><strong>2. Entamoeba histolytica (Měňavka úplavičná):</strong><br>• Forma <em>minuta</em> (lumilární neinvazivní, tvoří 4-jaderné cysty) a Forma <em>magna</em> (invazivní s fagocytovanými erytrocyty).<br>• Působí nekrózy a lahvovité vředy v tlustém střevě → <strong>Amébová dysenterie</strong> (bolestivé malinové stolice s krví a hlenem, bez febrilií). Mimostřevní forma: Amébový jaterní absces (čokoládově hnisavá náplň). Terapie: Metronidazol + luminalní amebicid (Cloroxin).<br><br><strong>3. Cryptosporidium parvum / hominis:</strong><br>• Střevní kokcidie. Tvoří infekční silnostěnné oocysty (přežívají v chlorované vodě) a tenkostěnné oocysty (autoinfekce).<br>• Vodnaté průjmy u dětí; u pacientů s AIDS způsobuje profuzní, život ohrožující průjmy. Terapie: Rehydratace, Nitazoxanid, Spiramycin."
      },
      quiz: [
        {
          q: "Stolice s krví a hlenem charakteru 'malinového želé' bez vysokých horeček je typická pro:",
          options: ["Giardiózu", "Amébovou dysenterii (Entamoeba histolytica)", "Cryptosporidiózu", "Salmonelózu"],
          correct: 1,
          explanation: "Entamoeba histolytica forma magna narušuje stěnu tlustého střeva za vzniku ulcerací a typické stolicu tvaru malinového rosolu."
        }
      ]
    }
  },
  {
    id: "mikra-28",
    cislo: 28,
    skupina_a: "Farmakoterapie",
    skupina_b: "Parazitologie",
    cast_a: {
      title: "Cefalosporiny – generace a indikace",
      keywords: ["Cefazolin", "Cefuroxim", "Cefotaxim", "Ceftriaxon", "Ceftazidim", "Cefepim"],
      content: {
        definice: "<strong>Cefalosporiny:</strong> Širokospektrá β-laktamová baktericidní antibiotika rozdělená do 5 generací podle spektra účinku a odolnosti vůči β-laktamázám.",
        etiologie: "<strong>1. Cefalosporiny I. generace (Cefazolin i.v., Cefadroxil p.o.):</strong><br>• Účinné na G+ koky (MSSA, streptokoky) a základní G- tyčky (E. coli, P. mirabilis). Perioperační atb profylaxe v chirurgii.<br><br><strong>2. Cefalosporiny II. generace (Cefuroxim i.v./p.o.):</strong><br>• Rozšířený účinek na H. influenzae, M. catarrhalis, Klebsiella. Respirační a močové infekce.<br><br><strong>3. Cefalosporiny III. generace:</strong><br>• <em>Základní (Cefotaxim, Ceftriaxon i.v.):</em> Vysoká účinnost na G- tyčky a pneumokoky, průnik do likvoru! Indikace: Purulentní meningitidy, těžké komunitní pneumonie, urosepse, Ceftriaxon = jednorázová léčba kapavky. Neúčinkují na Pseudomonas!<br>• <em>Antipseudomonádové (Ceftazidim i.v.):</em> Vysoká účinnost na <em>Pseudomonas aeruginosa</em>.<br><br><strong>4. Cefalosporiny IV. generace (Cefepim i.v.):</strong><br>• Vysoce odolné vůči AmpC β-laktamázám (Enterobacter, Serratia). Těžké nozokomiální infekce, febrilní neutropenie.<br><br><strong>5. Cefalosporiny V. generace (Ceftarolin):</strong><br>• Vázají PBP2a → účinné i na MRSA (Methicillin-Resistant S. aureus)."
      },
      quiz: [
        {
          q: "Který cefalosporin III. generace má výrazný protipseudomonádový účinek?",
          options: ["Cefotaxim", "Ceftriaxon", "Ceftazidim", "Cefazolin"],
          correct: 2,
          explanation: "Ceftazidim je cefalosporin 3. generace se specifickým vysokým účinkem proti Pseudomonas aeruginosa."
        }
      ]
    },
    cast_b: {
      title: "Trichomonas vaginalis a urogenitální bičíkovci",
      keywords: ["Trichomonas vaginalis", "trichomoniáza", "poševní výtok", "metronidazol", "axostyl"],
      content: {
        definice: "<strong>Trichomonas vaginalis (Bičenka poševní):</strong> Bičíkovec napadající urogenitální trakt člověka. Přenáší se výhradně sexuálním stykem. Netvoří cysty!",
        etiologie: "Trofozoit má hruškovitý tvar, 4 volné přední bičíky, 1 bičík tvořící undulující membránu a osní tyčinku (axostyl). Přemnožuje se při zvýšení pH pochvy (> 4.5).",
        klinicky: "• <strong>Ženy:</strong> Akutní vaginitida/kolpitida. Hojný, zpěněný, zelenokřídlový páchnoucí výtok, zarudnutí sliznice (jahodové hrdlo), dysurie a pruritus.<br>• <strong>Muži:</strong> Většinou asymptomatické nosičství v uretře a prostatě; méně často způsobuje mírnou uretritidu.",
        laborator: "1. Nativní mikroskopický preparát z poševního sekretu (záchyt kmitajících trichomonád).<br>2. Kultivace na speciálních transportně-kultivačních médiích (C.A.T. médium).<br>3. Giermsovo barvení nátěru, PCR.",
        terapie: "Metronidazol p.o. (jednorázově 2g nebo 500mg 7 dní). **MANDATORNÍ je současná přísná léčba obou sexuálních partnerů!**"
      },
      quiz: [
        {
          q: "Proč je nutné přiléčit sexuálního partnera při záchytu Trichomonas vaginalis u ženy?",
          options: ["Partner má vždy těžkou formou orchitidy", "Muži bývají asymptomatičtí přenašeči a došlo by k okamžité reinfekci", "Trichomonas způsobuje neplodnost u mužů do 24h", "Prvok se přenáší pouze vzduchem v domácnosti"],
          correct: 1,
          explanation: "Muži bývají bezpříznakovými rezerváory v uretře; bez léčby obou partnerů nastává ping-pong efekt okamžité reinfekce."
        }
      ]
    }
  },
  {
    id: "mikra-29",
    cislo: 29,
    skupina_a: "Farmakoterapie",
    skupina_b: "Parazitologie",
    cast_a: {
      title: "Karbapenemy a karbapenemázy",
      keywords: ["Meropenem", "Imipenem", "Ertapenem", "KPC", "NDM", "ESBL", "nozokomiální"],
      content: {
        definice: "<strong>Karbapenemy:</strong> Ultra-širokospektrá β-laktamová záložní antibiotika vyhrazená pro těžké nozokomiální infekce a kmeny s produkcí ESBL a AmpC.",
        etiologie: "<strong>Zástupci:</strong> Meropenem, Imipenem (+ Cilastatin pro inhibici renální dehydropeptidázy), Ertapenem.<br>• Účinek: Baktericidní na G+, G- (včetně P. aeruginosa a Acinetobacter) i anaeroby (B. fragilis). Ertapenem NEÚČINKUJE na Pseudomonas a Acinetobacter!<br>• Neúčinkují na MRSA a Enterococcus faecium.<br><br><strong>Karbapenemázy:</strong> β-laktamázy schopné hydrolyzovat karbapenemy.<br>• Třída A: KPC (Klebsiella pneumoniae carbapenemase).<br>• Třída B (Metalo-β-laktamázy / MBL): NDM-1 (New Delhi), VIM, IMP.<br>• Třída D: OXA-48 (u Enterobakterií a Acinetobacteru)."
      },
      quiz: [
        {
          q: "Který karbapenem Nemá účinek proti Pseudomonas aeruginosa?",
          options: ["Meropenem", "Imipenem", "Ertapenem", "Doripenem"],
          correct: 2,
          explanation: "Ertapenem má sice dlouhý poločas (dávkování 1x denně), ale chybí mu účinnost proti Pseudomonas aeruginosa a Acinetobacter spp."
        }
      ]
    },
    cast_b: {
      title: "Volně žijící améby (Naegleria, Acanthamoeba, Balamuthia)",
      keywords: ["Naegleria fowleri", "Acanthamoeba", "Balamuthia", "PAM", "amébová keratitida", "kontaktní čočky"],
      content: {
        definice: "<strong>Volně žijící (amfizoické) améby:</strong> Měňavky běžně žijící v prostředí (teplá voda, půda), které mohou způsobit letální neuroinfekce a oční infekce.",
        etiologie: "<strong>1. Naegleria fowleri:</strong> Původce **Primární amébové meningoencefalitidy (PAM)**. Z teplé vody (koupání v bazénech/jezerech) proniká přes cribriformní desku čichového nervu do mozku → fulminantní hnisavá hemorrhagic-nekrotická meningoencefalitida. Smrtnost > 98 % během několika dnů! Terapie: Amfotericin B + Miltefosin.<br><br><strong>2. Acanthamoeba spp.:</strong><br>• *Granulomatózní amébová encefalitida (GAE):* U imunosuprimovaných osob (chronické léze mozku).<br>• *Amébová keratitida:* U nositelů kontaktních čoček (oplachování čočky vodou z vodovodu). Krutá bolest oka, ulcerace rohovky, prstencový infiltrát. Terapie: Chlorhexidin / Propamidin oční kapky.<br><br><strong>3. Balamuthia mandrillaris:</strong> GAE u dětí i dospělých, téměř 100% mortalita."
      },
      quiz: [
        {
          q: "Naegleria fowleri proniká do mozku člověka nejčastěji při koupání cestou:",
          options: ["Zvukovodu", "Sliznice nosní přes lamina cribrosa čichové kosti", "Oční spojivky", "Kousnutím komára"],
          correct: 1,
          explanation: "Voda s trofozoity vnikne do nosu → parazit proniká podél nervus olfactorius přes lamina cribrosa přímo do čelního laloku mozku."
        }
      ]
    }
  },
  {
    id: "mikra-30",
    cislo: 30,
    skupina_a: "Farmakoterapie",
    skupina_b: "Parazitologie",
    cast_a: {
      title: "Aminoglykosidy – spektrum a toxicita",
      keywords: ["Gentamicin", "Amikacin", "Tobramycin", "Streptomycin", "nefrotoxicita", "ototoxicita"],
      content: {
        definice: "<strong>Aminoglykosidy:</strong> Rychle baktericidní antibiotika inhibující proteosyntézu ireverzibilní vazbou na 30S podjednotku ribozomu. Vyznačují se výrazným koncentračně závislým účinkem a postantibiotickým efektem (PAE).",
        etiologie: "<strong>Spektrum účinku:</strong> Aerobní G- tyčky (Enterobakterie, <em>Pseudomonas aeruginosa</em>) a stafylokoky. Neúčinkují na anaeroby a streptokoky/enterokoky (chybí přenašečový systém; kombinují se však se zástupci β-laktamů!).<br><br><strong>Zástupci:</strong><br>• <em>Gentamicin:</em> Základní aminoglykosid (sepse, endokarditidy v synergii s PNC).<br>• <em>Amikacin:</em> Rezervní aminoglykosid odolný k mnoha inaktivujícím enzymům.<br>• <em>Tobramycin:</em> Vysoká účinnost na P. aeruginosa (i v inhalacích u CF).<br>• <em>Streptomycin:</em> Antituberkulotikum 1. linie, tularemie.<br><br><strong>Toxicita:</strong><br>1. Nefrotoxicita (reverzibilní poškození tubulů).<br>2. Ototoxicita (ireverzibilní poškození kohleárního a vestibulárního aparátu). Nutný TDM (Therapeutic Drug Monitoring – sledování údolních a vrcholových hladin v séru)."
      },
      quiz: [
        {
          q: "Které dva hlavní toxické nežádoucí účinky limitují podávání aminoglykosidů?",
          options: ["Hepatotoxicita a kardiotoxicita", "Nefrotoxicita a ototoxicita", "Kardiomyopatie a myelotoxita", "Pankreatitida a neurotoxicita"],
          correct: 1,
          explanation: "Aminoglykosidy se kumulují v ledvinných tubulech a ve vnitřním uchu, což působí nefrotoxicitu a ototoxicitu."
        }
      ]
    },
    cast_b: {
      title: "Toxoplasmóza – Toxoplasma gondii",
      keywords: ["Toxoplasma gondii", "kočka", "oocysta", "tkáňová cysta", "kongenitální toxoplazmóza", "Janků"],
      content: {
        definice: "<strong>Toxoplasma gondii:</strong> Oportunní tkáňová kokcidie. Definitivním hostitelem jsou kočkovité šelmy, mezihostitelem všichni teplokrevní živočichové včetně člověka.",
        etiologie: "<strong>Infekční stádia:</strong><br>1. Oocysty (vylučované trusem koček, zrají v prostředí 2–3 dny).<br>2. Tachyzoiti (rychle se dělící trofozoiti v akutní fázi).<br>3. Bradyzoiti / Tkáňové cysty (ve svalech a mozku mezihostitele v chronické fázi).<br><br><strong>Klinické formy:</strong><br>• <em>Postnatální získaná toxoplazmóza:</em> U imunokompetentních často asymptomatická nebo uzlinová forma (příznaky chřipky, cervikální lymfadenitida).<br>• <em>Kongenitální toxoplazmóza (Morbus Janků):</em> Transplacentární přenos při primoinfekci matky v graviditě. Triáda: Hydrocefalus, intrakraniální kalcifikace, chorioretinitida.<br>• <em>Reaktivovaná toxoplazmóza u AIDS:</em> Toxoplazmová encefalitida (ložiskové nekrotické léze mozku s prstencovitým sycením na CT/MR).",
        laborator: "1. Sérologie: ELISA (IgM, IgA pro akutní nákazu; IgG s testem avidity k odlišení staré/nové nákazy), KFR.<br>2. Real-time PCR (amniová tekutina u gravidity, likvor).",
        terapie: "Pyrimethamin + Sulfadiazine (+ kyselina folinová). U těhotných v 1. trimestru Spiramycin."
      },
      quiz: [
        {
          q: "Které zvíře je definitivním hostitelem Toxoplasma gondii a vylučuje oocysty trusem?",
          options: ["Pes", "Kočka", "Prase", "Skot"],
          correct: 1,
          explanation: "Pouze v střevním epitelu kočkovitých šelem probíhá sexuální cyklus T. gondii zakončený tvorbou a vylučováním oocyst."
        }
      ]
    }
  },
  {
    id: "mikra-31",
    cislo: 31,
    skupina_a: "Farmakoterapie",
    skupina_b: "Parazitologie",
    cast_a: {
      title: "Fluorochinolony – spektrum a indikace",
      keywords: ["Ciprofloxacin", "Moxifloxacin", "DNA-gyráza", "topoizomeráza IV", "respirační chinolony", "kontraindikace"],
      content: {
        definice: "<strong>Fluorochinolony:</strong> Baktericidní syntetická chemoterapeutika. Působí koncentračně závislým efektem a mají vynikající tkáňovou distribuci. Kontraindikovány jsou u dětí (riziko poškození kloubních chrupavek) a těhotných.",
        etiologie: "<strong>Mechanismus účinku:</strong> Inhibice bakteriálních enzymů <strong>DNA gyrázy</strong> (u G- bakterií, brání rozvolnění nadšroubovicového vinutí DNA) a <strong>topoizomerázy IV</strong> (u G+ bakterií, brání separaci replikovaných dceřiných chromozomů).<br><br><strong>Rozdělení a zástupci:</strong><br>• <em>Ciprofloxacin (II. gen):</em> Výborný účinek na G- aerobní bakterie. <strong>Nejsilnější protipseudomonádový chinolon!</strong> Neúčinný na pneumokoky a anaeroby. Indikace: Uroinfekce, otitis externa maligna (P. aeruginosa), legionelóza, závažné infekční průjmy (Salmonella, Shigella).<br>• <em>Moxifloxacin (IV. gen – respirační chinolon):</em> Zvýšená účinnost na G+ bakterie (včetně <em>S. pneumoniae</em>), atypické patogeny (Chlamydia, Mycoplasma) a anaeroby. Indikace: Komunitní respirační infekce (alternativa u závažné alergie na β-laktamy)."
      },
      quiz: [
        {
          q: "Který fluorochinolon má nejsilnější antimikrobiální účinek proti Pseudomonas aeruginosa?",
          options: ["Moxifloxacin", "Ciprofloxacin", "Ofloxacin", "Norfloxacin"],
          correct: 1,
          explanation: "Ciprofloxacin je nejúčinnější protipseudomonádový fluorochinolon, používaný např. u maligní otitis externa."
        }
      ]
    },
    cast_b: {
      title: "Malárie – Plasmodium sp.",
      keywords: ["Plasmodium falciparum", "Anopheles", "horečka terciána", "horečka kvartána", "tlustá kapka", "chinin"],
      content: {
        definice: "<strong>Malárie:</strong> Transmisivní horečnaté onemocnění vyvolané intracelulárními parazity rodu <em>Plasmodium</em>. Přenašečem je samička komára <em>Anopheles</em>.",
        etiologie: "<strong>Klinicky významné druhy:</strong><br>• <em>P. falciparum:</em> Tropická malárie (nejtěžší, nepravidelná horečka, risk ucpání kapilár – mozková malárie, orgánové selhání, DIC).<br>• <em>P. vivax a P. ovale:</em> Třídenní malárie (horečka terciána – paroxysmy co 48h). Mohou přežívat v játrech jako hypnozoiti → recidivy.<br>• <em>P. malariae:</em> Čtyřdenní malárie (horečka kvartána – paroxysmy co 72h).<br><br><strong>Životní cyklus:</strong> Komár vstříkne <strong>sporozoity</strong> → jaterní (exoerytrocytární) fáze (množení v hepatocytech, uvolnění merozoitů) → erytrocytární fáze (merozoity napadají erytrocyty → prstence → schizonti → prasknutí erytrocytu vyvolá horečnatý záchvat). Vznik gametocytů (nasávány komárem).",
        laborator: "Odběr krve při záchvatu (vzestup horečky).<br>1. Mikroskopie: <strong>Tlustá kapka</strong> (koncentrační metoda pro průkaz přítomnosti plasmodií) a <strong>tenký krevní nátěr</strong> (obarvený Giemsou, pro přesné určení druhu a stupně parazitémie).<br>2. Imunochromatografické rychlotesty (detekce HRP-2 nebo LDH).",
        terapie: "Artemisinin-based kombinovaná terapie (ACT), Chinin (pro těžké formy), Chlorochin (pro citlivé kmeny), Primachin (k eliminaci hypnozoitů v játrech)."
      },
      quiz: [
        {
          q: "Která metoda se v laboratoři standardně používá k určení druhu plasmodia u pacienta s malárií?",
          options: ["Kultivace na Sabouraudově agaru", "Tlustá kapka", "Tenký krevní nátěr barvený Giemsou", "Průkaz protilátek KFR"],
          correct: 2,
          explanation: "Tenký krevní nátěr zachovává morfologii erytrocytů a umožňuje spolehlivě odlišit jednotlivé druhy plasmodií."
        }
      ]
    }
  },
  {
    id: "mikra-32",
    cislo: 32,
    skupina_a: "Farmakoterapie",
    skupina_b: "Parazitologie",
    cast_a: {
      title: "Makrolidy, azalidy a linkosamidy",
      keywords: ["Klaritromycin", "Azitromycin", "Klindamycin", "inhibice proteosyntézy", "atypické pneumonie", "toxický šok"],
      content: {
        definice: "<strong>Makrolidy, azalidy a linkosamidy:</strong> Bakteriostatická antibiotika blokující proteosyntézu vazbou na 50S podjednotku ribozomu. Vykazují vysoké tkáňové koncentrace a dobrou účinnost na intracelulární patogeny.",
        etiologie: "<strong>1. Makrolidy a azalidy:</strong><br>• Spektrum: G+ koky, atypické patogeny (Mycoplasma, Chlamydia, Legionella), někteří G- (Campylobacter, Bordetella).<br>• <em>Erytromycin:</em> Krátkodobý, GIT nežádoucí účinky. Lék volby pro záškrt, pertusi, mycoplasmovou pneumonii.<br>• <em>Klaritromycin:</em> Střednědobý. Součást eradikace <em>Helicobacter pylori</em>.<br>• <em>Azitromycin:</em> Dlouhodobý azalid s extrémním tkáňovým poločasem (léčba 3 dny). Urogenitální chlamydióza, legionelóza.<br>• <em>Spiramycin:</em> Léčba toxoplasmózy u těhotných.<br><br><strong>2. Linkosamidy (Klindamycin):</strong><br>• Spektrum: G+ koky (stafylokoky, streptokoky) a <strong>striktní anaeroby</strong> (včetně <em>Bacteroides fragilis</em>).<br>• Indikace: Abscedující nitrobřišní a pánevní infekce (v kombinaci), infekce kostí a kloubů. Jako inhibitor proteosyntézy potlačuje tvorbu toxinů u stafylokokového/streptokokového syndromu toxického šoku."
      },
      quiz: [
        {
          q: "Které antibiotikum se jako inhibitor proteosyntézy přidává k potlačení produkce toxinů u syndromu toxického šoku?",
          options: ["Amoxicilin", "Klindamycin", "Gentamicin", "Ciprofloxacin"],
          correct: 1,
          explanation: "Klindamycin tlumí proteosyntézu v bakteriální buňce, čímž zastavuje syntézu a uvolňování bakteriálních exotoxinů."
        }
      ]
    },
    cast_b: {
      title: "Motolice (Trematoda) – Schistosomy",
      keywords: ["Schistosoma", "krevnička", "cerkárie", "elefantiáza", "hematurie", "praziquantel"],
      content: {
        definice: "<strong>Schistosomy (krevničky):</strong> Ploší červi (motolice) s odděleným pohlavím. Způsobují schistosomózu (bilharziózu) – závažné urogenitální a střevní/jaterní onemocnění v tropech.",
        etiologie: "<strong>Klinicky významné druhy:</strong><br>• <em>Schistosoma haematobium:</em> Urogenitální schistosomóza. Samičky kladou vajíčka s trnem do žilního plexu močového měchýře. Příznaky: terminální hematurie, cystitida, tvorba granulomů a kalcifikace měchýře (riziko karcinomu!).<br>• <em>Schistosoma mansoni a S. japonicum:</em> Střevní a jaterní schistosomóza. Vajíčka pronikají do střeva (krvavé průjmy) a portálního oběhu jater (granulomy, periportální fibróza, portální hypertenze, splenomegalie, ascites).<br><br><strong>Životní cyklus:</strong> Vajíčka vyloučená močí/stolicí do vody → líhne se miracidium → vývoj v plži (mezihostitel) → cerkárie opouštějí plže a aktivně provrtávají kůži člověka při koupání → migrace krví do cílových žil.",
        laborator: "Mikroskopický průkaz typických vajíček s trnem (močový sediment po cvičení u S. haematobium, stolice u S. mansoni/japonicum). ELISA.",
        terapie: "Lék volby: Praziquantel."
      },
      quiz: [
        {
          q: "Který druh krevničky typicky způsobuje urogenitální formu schistosomózy s hematurií a fibrózou močového měchýře?",
          options: ["Schistosoma mansoni", "Schistosoma japonicum", "Schistosoma haematobium", "Fasciola hepatica"],
          correct: 2,
          explanation: "Schistosoma haematobium dospívá v cévních pleteních močového měchýře, kam klade vajíčka s typickým terminálním trnem."
        }
      ]
    }
  },
  {
    id: "mikra-33",
    cislo: 33,
    skupina_a: "Farmakoterapie",
    skupina_b: "Parazitologie",
    cast_a: {
      title: "Tetracykliny a glycylcykliny",
      keywords: ["Doxycyklin", "Tigecyklin", "zubní sklovina", "atypické patogeny", "lymsea borelióza", "MDR patogeny"],
      content: {
        definice: "<strong>Tetracykliny a glycylcykliny:</strong> Širokospektrá bakteriostatická antibiotika inhibující proteosyntézu vazbou na 30S podjednotku ribozomu.",
        etiologie: "<strong>1. Tetracykliny (Doxycyklin):</strong><br>• Široké spektrum: G+, G-, atypičtí patogeny (Chlamydia, Mycoplasma, Rickettsia, Coxiella), spirochety, některé prvoky.<br>• Indikace: Lymská borelióza (časná kožní fáze), urogenitální chlamydióza, tularemie, brucelóza, leptospiróza.<br>• Nežádoucí účinky: Ukládání do kostí a zubní skloviny u dětí (kontraindikace do 8 let), fototoxicita, GIT intolerance.<br><br><strong>2. Glycylcykliny (Tigecyklin):</strong><br>• Odvozen od tetracyklinů, odolný vůči běžným mechanismům rezistence (eflux, protekce ribozomu).<br>• Spektrum: Extrémně široké, působí na MRSA, VRE, ESBL a G- rezistentní kmeny. **Neúčinkuje na Pseudomonas a Proteus!**<br>• Indikace: Pouze jako alternativa u multirezistentních smíšených infekcí kůže a nitrobřišních procesů. V séru dosahuje nízkých koncentrací (nehodí se pro urosepsi/bakteriemii)."
      },
      quiz: [
        {
          q: "Proč jsou tetracykliny (např. Doxycyklin) kontraindikovány u dětí do 8 let a těhotných?",
          options: ["Způsobují akutní selhání ledvin", "Vážou se na vápník a ukládají se v kostech a vyvíjející se zubní sklovině", "Vyvolávají aplastickou anémii", "Způsobují chabou obrnu svalstva"],
          correct: 1,
          explanation: "Tetracykliny chelatují vápník a ukládají se v kalcifikujících tkáních, což vede k trvalé diskoloraci zubů a defektům skloviny."
        }
      ]
    },
    cast_b: {
      title: "Plicní a jaterní motolice (Fasciola, Paragonimus)",
      keywords: ["Fasciola hepatica", "Paragonimus westermani", "bahnatka", "metacerkárie", "rak", "hemoptýza"],
      content: {
        definice: "<strong>Plicní a jaterní motolice:</strong> Ploší červi parazitující v parenchymu a vývodech jater a plic mezihostitelů a definitivních hostitelů.",
        etiologie: "<strong>1. Fasciola hepatica (Motolice jaterní):</strong><br>• Žije ve žlučovodech ovcí, skotu a člověka.<br>• Životní cyklus: Vajíčko do vody → miracidium → sladkovodní plž (bahnatka malá) → cerkárie encystuje na vodních rostlinách (metacerkárie / adoleskárie). Člověk se nakazí pozřením rostlin (řeřišnice). Larva proniká ze střeva do jater a žlučovodů (žije až 9 let).<br>• Projevy: Hepatomegalie, ucpání žlučovodů, cholangitida, eosinofilie. Terapie: Triklabendazol.<br><br><strong>2. Paragonimus westermani (Motolice plicní):</strong><br>• Uhnízděná v cystických ložiscích plic.<br>• Cyklus: První mezihostitel plž → druhý mezihostitel sladkovodní krab/rak (encystace metacerkárií). Člověk se nakazí pozřením syrových korýšů. Larvy migrují přes střevo a bránici do plic.<br>• Projevy: Suchý kašel, vykašlávání rezavého sputa s rybím pachem (obsahuje vajíčka), hemoptýza (napodobuje TBC). Terapie: Praziquantel.",
        laborator: "Mikroskopický průkaz vajíček ve stolici/duodenální šťávě (Fasciola) nebo ve sputu/stolici (Paragonimus). Sérologie (ELISA)."
      },
      quiz: [
        {
          q: "Jak se člověk nejčastěji nakazí motolicí plicní (Paragonimus westermani)?",
          options: ["Pozřením nedostatečně tepelně upravených sladkovodních krabů nebo raků", "Vdechnutím infekčních vajíček z prachu", "Aktivním provrtáním cerkárií kůží při koupání", "Kousnutím komára Anopheles"],
          correct: 0,
          explanation: "Infekčním stádiem P. westermani jsou metacerkárie ve svalech sladkovodních krabů a raků; k nákaze dochází jejich konzumací za syrova."
        }
      ]
    }
  },
  {
    id: "mikra-34",
    cislo: 34,
    skupina_a: "Farmakoterapie",
    skupina_b: "Parazitologie",
    cast_a: {
      title: "Rifampicin, metronidazol, nitrofurantoin a fidaxomycin",
      keywords: ["Rifampicin", "Metronidazol", "Nitrofurantoin", "Fidaxomycin", "Clostridium difficile", "uroinfekce"],
      content: {
        definice: "<strong>Rifampicin, metronidazol, nitrofurantoin a fidaxomycin:</strong> Různorodá skupina atb a chemoterapeutik se specifickými indikacemi (TBC, anaeroby, uroinfekce, klostridiová kolitida).",
        etiologie: "<strong>1. Rifampicin:</strong><br>• Blokuje bakteriální RNA-polymerázu. Výborný průnik do tkání a makrofágů. Rychlý vznik rezistence (nikdy v monoterapii!). Indikace: Tuberkulóza, multirezistentní stafylokokové infekce (s rifampicinem u implantátů), profylaxe meningokokové meningitidy.<br><br><strong>2. Metronidazol:</strong><br>• Nitroimidazol. Ve striktně anaerobním prostředí se redukuje na toxické radikály štěpící DNA. Indikace: **Infekce vyvolané anaeroby** (B. fragilis, Clostridia), gynekologické nitrobřišní procesy, pseudomembranózní kolitida (C. difficile), protozoární infekce (Trichomonas, Entamoeba, Giardia).<br><br><strong>3. Nitrofurantoin:</strong><br>• Cílí na bakteriální ribozomy a metabolické enzymy. Dosahuje terapeutické koncentrace **pouze v moči** (rychlá eliminace). Indikace: Nekomplikované uroinfekce (cystitidy). Rezistentní jsou Proteus a Pseudomonas.<br><br><strong>4. Fidaxomycin:</strong><br>• Úzkospektré makrocyklické atb. Minimálně se vstřebává z GIT. Selektivně účinkuje na <em>Clostridium difficile</em> (nižší riziko recidivy než u vankomycinu)."
      },
      quiz: [
        {
          q: "Které z léčiv je indikováno výhradně pro nekomplikované infekce močových cest (cystitidy) kvůli absenci systémového účinku?",
          options: ["Rifampicin", "Metronidazol", "Nitrofurantoin", "Fidaxomycin"],
          correct: 2,
          explanation: "Nitrofurantoin se po podání rychle vylučuje do moče, kde dosahuje vysokých koncentrací, zatímco sérové a tkáňové hladiny jsou neúčinné."
        }
      ]
    },
    cast_b: {
      title: "Tasemnice (Cestoda) – střevní a tkáňové formy",
      keywords: ["Taenia saginata", "Taenia solium", "cysticerkóza", "boubel", "skolex", "praziquantel"],
      content: {
        definice: "<strong>Tasemnice:</strong> Ploší červi cizopasící ve střevě dospělého hostitele (střevní teniózy) nebo ve tkáních jako larvy (tkáňové formy). Nemají trávicí trakt, živiny vstřebávají povrchem těla.",
        etiologie: "<strong>1. Tasemnice bezbranná (Taenia saginata):</strong><br>• Mezihostitel: skot (boubel = <em>Cysticercus bovis</em> ve svalech). Definitivní hostitel: pouze člověk.<br>• Skolex nese pouze přísavky (bez háčků). Články jsou aktivně pohyblivé, děloha je bohatě větvená (> 15 větví).<br>• Projevy: mírné zažívací potíže. Terapie: Praziquantel, Niklosamid.<br><br><strong>2. Tasemnice dlouhočlenná (Taenia solium):</strong><br>• Mezihostitel: prase, **ale i člověk!** Definitivní hostitel: pouze člověk.<br>• Skolex nese přísavky i věnec háčků (ozbrojená). Články nepohyblivé, děloha chudě větvená (< 12 větví).<br>• Střevní forma: tenióza (pozření vepřového s boubelem <em>Cysticercus cellulosae</em>).<br>• Tkáňová forma: **Cysticerkóza**. Vzniká pozřením vajíček T. solium (kontaminovaná potrava/voda, autoinfekce při zvracení článků). Larvy (cysticerkové) migrují do svalů, oka a CNS (neurocysticerkóza – vyvolává epilepsii, nitrolební hypertenzi, hydrocefalus). Terapie: Albendazol + dexamethason, chirurgie."
      },
      quiz: [
        {
          q: "Pozřením čeho se člověk nakazí nebezpečnou tkáňovou formou tasemnice – cysticerkózou (Taenia solium)?",
          options: ["Pozřením larvy (boubele) v hovězím mase", "Pozřením vajíček Taenia solium", "Pozřením dospělého červa", "Průnikem larev přes kůži při chůzi naboso"],
          correct: 1,
          explanation: "Cysticerkóza vzniká tehdy, pokud člověk funguje jako mezihostitel, což nastává výhradně po pozření vajíček (nikoli larev) T. solium."
        }
      ]
    }
  },
  {
    id: "mikra-35",
    cislo: 35,
    skupina_a: "Diagnostika",
    skupina_b: "Parazitologie",
    cast_a: {
      title: "Diagnostika sepse a infekcí krevního řečiště",
      keywords: ["sepse", "hemokultura", "SIRS", "biomarkery", "prokalcitonin", "katétrová sepse"],
      content: {
        definice: "<strong>Sepse:</strong> Život ohrožující orgánová dysfunkce způsobená dysregulovanou odpovědí hostitele na infekci. Běžně se hodnotí pomocí qSOFA (alterace vědomí, hypotenze, tachypnoe) nebo kritérií SIRS.",
        etiologie: "<strong>Hemokultivace:</strong> Zlatý standard diagnostiky.<br>• Odběr: Vždy před zahájením ATB léčby! Zajištění aseptického postupu (desinfekce kůže k zamezení kontaminace kožním staphylococcus epidermidis).<br>• Sada: 1 aerobní + 1 anaerobní lahvička. Odebírají se standardně 2 sady (ze dvou různých venepunkcí, celkem 4 lahvičky). Objem krve: 8–10 ml na lahvičku.<br>• Detekce: Automatizované kultivační systémy detekují nárůst CO₂ produkovaný metabolizujícími bakteriemi.<br><br><strong>Biomarkery sepse:</strong><br>• Prokalcitonin (PCT): vysoce specifický pro bakteriální infekce (stoupá do 4–6 hodin).<br>• CRP: nespecifický protein akutní fáze (stoupá do 12–24 hodin).<br>• Presepsin, IL-6.<br><br><strong>Infekce krevního řečiště (BSI):</strong> Často asociované s centrálními žilními katétry (CRBSI – katétrová sepse). Diagnostika vyžaduje současný odběr hemokultury z katétru a z periferie s průkazem shodného patogena a kratšího času k pozitivitě z katétru."
      },
      quiz: [
        {
          q: "Jaký objem krve se standardně odebírá do jedné hemokultivační lahvičky u dospělých?",
          options: ["1–2 ml", "8–10 ml", "20–30 ml", "0,5 ml"],
          correct: 1,
          explanation: "Optimální poměr krve a kultivačního média vyžaduje 8–10 ml krve pro zachování citlivosti záchytu patogenů."
        }
      ]
    },
    cast_b: {
      title: "Echinokokózy – Echinococcus granulosus a multilocularis",
      keywords: ["Echinococcus granulosus", "Echinococcus multilocularis", "hydatida", "alveokokóza", "psovití", "albendazol"],
      content: {
        definice: "<strong>Echinokokózy:</strong> Závažné tkáňové helmintózy vyvolané larválními stádii (cystami) měchožilů.",
        etiologie: "<strong>1. Echinococcus granulosus (Měchožil zhoubný):</strong><br>• Definitivní hostitel: psovité šelmy. Mezihostitel: ovce, skot, člověk (slepá ulička).<br>• Člověk se nakazí pozřením vajíček (kontakt s psem, kontaminované lesní plody). Larva proniká stěnou střeva → portální oběh → játra (60–70 %), plíce. Tvoří jednokomorové cysty (**hydatidy**, průměr až 20 cm) s vazivovým obalem hostitele. Uvnitř dceřiné cysty a skolexy. Nebezpečí anafylaktického šoku při prasknutí cysty! Terapie: Albendazol, chirurgie (metoda PAIR).<br><br><strong>2. Echinococcus multilocularis (Měchožil větvený):</strong><br>• Definitivní hostitel: liška, pes. Mezihostitel: drobní hlodavci, člověk.<br>• Způsobuje **alveolární hydatidózu**. Larva v játrech tvoří drobné, infiltrující cysty, které agresivně prorůstají tkání a metastázují (chová se jako maligní tumor). Hostitel netvoří ohraničující pouzdro. Smrtnost bez léčby > 90 %! Terapie: radikální resekce + celoživotní podávání Albendazolu."
      },
      quiz: [
        {
          q: "Který patogen způsobuje alveolární hydatidózu, která svými vlastnostmi infiltrace a metastazování připomíná maligní nádor?",
          options: ["Echinococcus granulosus", "Echinococcus multilocularis", "Taenia solium", "Fasciola hepatica"],
          correct: 1,
          explanation: "Echinococcus multilocularis (měchožil větvený) tvoří multiloculární infiltrující cysty bez vazivového ohraničení, které metastázují do mozku a plic."
        }
      ]
    }
  },
  {
    id: "mikra-36",
    cislo: 36,
    skupina_a: "Diagnostika",
    skupina_b: "Parazitologie",
    cast_a: {
      title: "Infekce dýchacích cest a odběry",
      keywords: ["sputum", "výtěr z krku", "Amies", "Bordet-Gengou", "legionela", "BAL"],
      content: {
        definice: "<strong>Infekce dýchacích cest:</strong> Nejčastější infekce v komunitě. Tři čtvrtiny jsou virového původu. Bakteriální etiologie vyžaduje specifickou diagnostiku.",
        etiologie: "<strong>Metodika odběrů a kultivace:</strong><br>• <strong>Výtěr z krku:</strong> Sterilní vatový tampón, stěr z mandlí a patrových oblouků bez doteku sliznice úst. Transport v Amiesově transportní půdě. Očkování na krevní agar (záchyt <em>Streptococcus pyogenes</em>).<br>• <strong>Výtěr z nosu:</strong> K záchytu nosičství (např. MRSA).<br>• <strong>Sputum:</strong> Ranní sputum z hloubky dýchacích cest po vypláchnutí úst vodou. Kontrola kvality pod mikroskopem: vzorek s vysokým počtem dlaždicových epitelových buněk a málo leukocyty jsou pouze sliny (nehodnotí se). Očkování na krevní agar, Endovu půdu, čokoládový agar (pro Haemophilus v synergii se stafylokokem).<br>• <strong>Záchyt specifických patogenů:</strong><br>  - <em>Bordetella pertussis:</em> Výtěr z nosohltanu, kultivace na Bordet-Gengouově agaru / PCR.<br>  - <em>Legionella pneumophila:</em> sputum/BAL na BCYE agar, průkaz antigenu v moči.<br>  - <em>Corynebacterium diphtheriae:</em> Claubergova půda s telluričitanem."
      },
      quiz: [
        {
          q: "Jak se pod mikroskopem hodnotí kvalita sputa před kultivačním vyšetřením?",
          options: ["Podle zbarvení hlenu", "Podle poměru polymorfonukleárních leukocytů a dlaždicových epitelových buněk", "Podle přítomnosti bublin vzduchu", "Podle přítomnosti laktobacilů"],
          correct: 1,
          explanation: "Kvalitní sputum z DDC obsahuje mnoho leukocytů a málo dlaždicových epitelií z dutiny ústní. Převaha plochých epitelií značí kontaminaci slinami."
        }
      ]
    },
    cast_b: {
      title: "Střevní nematodózy (Enterobius, Ascaris, Strongyloides, Ancylostoma)",
      keywords: ["Enterobius vermicularis", "Ascaris lumbricoides", "roup dětský", "škrkavka", "Grahamova metoda", "Loefflerův syndrom"],
      content: {
        definice: "<strong>Střevní nematodózy:</strong> Infekce vyvolané hlísticemi (obloukovitými červi) parazitujícími v gastrointestinálním traktu.",
        etiologie: "<strong>1. Enterobius vermicularis (Roup dětský):</strong><br>• Samičky kladou asymetrická vajíčka v noci v perianálních řasách. Autoinfekce (škrábání → prsty do úst).<br>• Projevy: perianální pruritus (svědění), neklid, nespavost u dětí.<br>• Diagnostika: **Grahamova metoda** (otisk průhledné lepicí pásky z perianální oblasti ráno před mytím). Vajíčka ve stolici chybí!<br><br><strong>2. Ascaris lumbricoides (Škrkavka dětská):</strong><br>• Cyklus: Pozření vajíček → uvolnění larev ve střevě → migrace přes stěnu střeva, játra do plic → vykašlání a spolknutí → dospívání v tenkém střevě.<br>• Projevy: Plicní fáze (Loefflerův syndrom – kašel, dušnost, eosinofilní infiltráty, eosinofilie); Střevní fáze (zažívací potíže, u dětí risk obstrukce střeva). Diagnostika: Průkaz vajíček ve stolici.<br><br><strong>3. Strongyloides stercoralis (Hádě střevní):</strong><br>• Parazitují partenogenetické samičky zavrtané v sliznici střeva. Larvy pronikají kůží z půdy. Risk hyperinfekčního syndromu u imunosuprimovaných. Diagnostika: Nález pohyblivých larev ve stolici.<br><br><strong>4. Ancylostoma duodenale (Měchovec lidský):</strong><br>• Fixace v duodenu ozubenou ústní kapsulou → saje krev → rozvoj mikrocytární sideropenické anémie. Larvy pronikají kůží z půdy."
      },
      quiz: [
        {
          q: "Grahamova metoda (lepicí páska) je standardní diagnostickou metodou pro průkaz:",
          options: ["Ascaris lumbricoides", "Enterobius vermicularis", "Strongyloides stercoralis", "Taenia saginata"],
          correct: 1,
          explanation: "Roup dětský (E. vermicularis) klade vajíčka v perianální krajině, nikoli do stolice, proto se k průkazu používá otisk lepicí pásky."
        }
      ]
    }
  },
  {
    id: "mikra-37",
    cislo: 37,
    skupina_a: "Diagnostika",
    skupina_b: "Parazitologie",
    cast_a: {
      title: "Infekce kůže a měkkých tkání, normální flóra",
      keywords: ["Staphylococcus aureus", "Streptococcus pyogenes", "normální flóra", "erysipelas", "nosokomiální", "kolonizační rezistence"],
      content: {
        definice: "<strong>Infekce kůže a měkkých tkání (SSTI):</strong> Široká škála zánětů od povrchových pyodermií po život ohrožující nekrotizující fasciitidy. Jsou úzce spjaté s narušením bariéry kůže a fyziologické flóry.",
        etiologie: "<strong>Fyziologická mikroflóra kůže:</strong> Koaguláza-negativní stafylokoky (<em>S. epidermidis</em>), korynebakterie, propionibakterie (<em>Cutibacterium acnes</em>). Zajišťují kolonizační rezistenci.<br><br><strong>Typické patogeny a jednotky:</strong><br>• Impetigo, furunkl, karbunkl: <em>Staphylococcus aureus</em>, případně <em>Streptococcus pyogenes</em>.<br>• Erysipel (růže): <em>Streptococcus pyogenes</em> (ohraničené zarudnutí, horečka, postihuje dermis a lymfatické cévy).<br>• Celulitida: <em>S. aureus, S. pyogenes</em> (neohraničený zánět podkoží).<br>• Nekrotizující fasciitida: Streptococcus pyogenes (skupina A, 'masožravé bakterie') nebo polymikrobiální (Clostridia, anaeroby).<br>• Infekce ran: Po kousnutí zvířetem (<em>Pasteurella multocida</em>), operační rány (stafylokoky, enterobakterie), popáleniny (<em>Pseudomonas aeruginosa</em>).",
        laborator: "Odběr hnisu (nejlépe aspirace stříkačkou z hloubky, nikoli povrchový stěr tamponem). Kultivace na KA, Endově půdě, anaerobní kultivace."
      },
      quiz: [
        {
          q: "Který patogen je hlavním původcem erysipelu (růže) – ostře ohraničeného kožního zánětu s horečkou?",
          options: ["Staphylococcus aureus", "Streptococcus pyogenes", "Pseudomonas aeruginosa", "Propionibacterium acnes"],
          correct: 1,
          explanation: "Erysipel je klasická streptokoková infekce vyvolaná Streptococcus pyogenes (skupina A), šířící se lymfatickými cévami."
        }
      ]
    },
    cast_b: {
      title: "Tkáňové nematodózy (Toxocara, Trichinella, Dracunculus)",
      keywords: ["Toxocara canis", "Trichinella spiralis", "Dracunculus medinensis", "larva migrans", "svalovec Stočený"],
      content: {
        definice: "<strong>Tkáňové nematodózy:</strong> Onemocnění způsobená larvami hlístic, které migrují lidskými tkáněmi a orgány bez dokončení vývoje v dospělého červa (člověk je mezihostitelem).",
        etiologie: "<strong>1. Toxocara canis / cati (Škrkavka psí/kočičí):</strong><br>• Definitivní hostitel: pes, kočka. Člověk se nakazí pozřením vajíček (kontaminovaný písek na pískovištích). Larvy se uvolní v střevě, migrují tělem a uvíznou v tkáních → **Toxokaróza**.<br>• *Viscerální forma (larva migrans visceralis):* hepatomegalie, plicní příznaky, horečka, eosinofilie.<br>• *Oční forma (larva migrans ocularis):* larva uvízne v oku, granulom sítnice (hrozí enukleace pro záměnu s retinoblastomem). Terapie: Albendazol.<br><br><strong>2. Trichinella spiralis (Svalovec stočený):</strong><br>• Přenos pozřením syrového masa (černé prase, divočák) s opouzdřenými larvami. Larvy dozrávají ve střevě, samičky rodí živé larvy → migrace krví do příčně pruhovaných svalů (bránice, žvýkací svaly, jazyk) → opouzdření.<br>• Projevy: horečky, myalgie (bolest svalů), periorbitální edém obličeje, dyspnoe (při postižení bránice). Terapie: Albendazol + kortikosteroidy.<br><br><strong>3. Dracunculus medinensis (Vlasovec medinský):</strong><br>• Přenos pitnou vodou s buchanatkami (mezihostitel s larvou). Samička migruje do podkoží dolních končetin, tvoří bolestivý vřed. Při kontaktu s vodou rodí larvy. Terapie: Namotávání červa na dřívko."
      },
      quiz: [
        {
          q: "Který parazit se přenáší na člověka konzumací nedostatečně tepelně upraveného masa divočáků a tvoří cysty ve svalech?",
          options: ["Toxocara canis", "Trichinella spiralis", "Dracunculus medinensis", "Ascaris lumbricoides"],
          correct: 1,
          explanation: "Trichinella spiralis (svalovec) parazituje u prasat a divoké zvěře; larvy se usídlují v svalových vláknech hostitele."
        }
      ]
    }
  },
  {
    id: "mikra-38",
    cislo: 38,
    skupina_a: "Diagnostika",
    skupina_b: "Parazitologie",
    cast_a: {
      title: "Sexuálně přenosné infekce (STI)",
      keywords: ["Kapavka", "Syfilis", "Chlamydie", "Herpes genitalis", "diagnostika STI", "uretritida"],
      content: {
        definice: "<strong>Sexuálně přenosné infekce (STI):</strong> Skupina nákaz přenášených převážně pohlavním stykem, postihující urogenitální aparát i celkový organismus.",
        etiologie: "<strong>Klíčoví původci a diagnostika:</strong><br><br><strong>1. Bakteriální STI:</strong><br>• <em>Kapavka (Neisseria gonorrhoeae):</em> Hnisavá uretritida u mužů, cervicitida u žen. Diagnostika: Mikroskopie (G- intraselulární diplokoky v PMN leukocytech), kultivace na čokoládovém agaru, PCR (NAAT).<br>• <em>Syfilis (Treponema pallidum):</em> Ulcus durum, exantém, pozdní orgánové změny. Diagnostika: zástinová mikroskopie, sérologie (netreponemové RRR a treponemové TPHA, ELISA, WB).<br>• <em>Urogenitální chlamydióza (Chlamydia trachomatis sérotypy D-K):</em> Často asymptomatická, risk neplodnosti. Diagnostika: PCR (NAAT) z prvního proudu moče (muži) nebo cervikálního stěru (ženy).<br><br><strong>2. Virové STI:</strong><br>• <em>Herpes genitalis (HSV-2):</em> Bolestivé puchýřky na genitálu. Diagnostika: PCR, průkaz inkluzí.<br>• <em>Papilomaviry (HPV):</em> Sériovary 6, 11 (condylomata acuminata), 16, 18 (karcinom děložního hrdla). Diagnostika: PCR.<br>• <em>HIV a HBV.</em><br><br><strong>3. Ostatní STI:</strong><br>• Kandidózy (kvasinky), Trichomoniáza (bičenka poševní), Svrab (zákožka)."
      },
      quiz: [
        {
          q: "Která diagnostická metoda je nejcitlivější a v současnosti doporučovaná jako zlatý standard pro průkaz Chlamydia trachomatis v urogenitálním traktu?",
          options: ["Gramovo barvení", "Kultivace na krevním agaru", "Metody PCR a NAAT (amplifikace nukleových kyselin)", "Weilova-Felixova reakce"],
          correct: 2,
          explanation: "NAAT (PCR) testy vykazují nejvyšší specifitu a citlivost u chlamydií, které nelze kultivovat na neživých médiích."
        }
      ]
    },
    cast_b: {
      title: "Filárie – Wuchereria, Brugia, Loa Loa, Onchocerca",
      keywords: ["Wuchereria bancrofti", "Brugia malayi", "Loa loa", "Onchocerca volvulus", "elefantiáza", "mikrofilárie"],
      content: {
        definice: "<strong>Filárie (vlasovci):</strong> Tkáňové hlístice parazitující v mízním systému, podkoží nebo oku. Samičky rodí živé larvy (**mikrofilárie**), které kolují v krvi nebo kůži a jsou přenášeny krevsajícím hmyzem.",
        etiologie: "<strong>Klinicky významné druhy:</strong><br>• <em>Wuchereria bancrofti a Brugia malayi (Vlasovec mízní/malajský):</em> Dospělci žijí v lymfatických cévách. Lymfostáza → **elefantiáza** (sloní noha, masivní otoky končetin/šourku), chylurie (míza v moči). Přenašeč: komáři. Mikrofilárie kolují v krvi v noci (*microfilaria nocturna*).<br>• <em>Loa loa (Vlasovec oční):</em> Dospělci migrují podkožím (Calabarské otoky) a pod oční spojivkou. Přenašeč: ovád (rod <em>Chrysops</em>). Mikrofilárie v krvi přes den (*microfilaria diurna*). Terapie: Ivermektin, chirurgická extrakce z oka.<br>• <em>Onchocerca volvulus (Vlasovec kožní):</em> Dospělci v podkožních uzlech. Larvy migrují kůží (dermatitida) a do oka → **říční slepota** (onchocerkóza – hlavní příčina slepoty v tropech). Přenašeč: muchnička (rod <em>Simulium</em>). Terapie: Ivermektin."
      },
      quiz: [
        {
          q: "Který parazit přenášený muchničkami je původcem tzv. 'říční slepoty' v tropických oblastech?",
          options: ["Wuchereria bancrofti", "Loa loa", "Onchocerca volvulus", "Brugia malayi"],
          correct: 2,
          explanation: "Onchocerca volvulus (vlasovec kožní) způsobuje říční slepotu po migraci larev do struktur oční rohovky a sítnice."
        }
      ]
    }
  },
  {
    id: "mikra-39",
    cislo: 39,
    skupina_a: "Diagnostika",
    skupina_b: "Parazitologie",
    cast_a: {
      title: "Infekce centrálního nervového systému a likvor",
      keywords: ["meningitida", "likvor", "lumbální punkce", "purulentní", "aseptická", "PCR"],
      content: {
        definice: "<strong>Infekce CNS:</strong> Život ohrožující stavy (meningitidy, encefalitidy, abscesy) vyžadující urgentní diagnostiku z mozkomíšního moku (likvoru) odebraného lumbální punkcí.",
        etiologie: "<strong>Diferenciální diagnostika likvoru:</strong><br>• <strong>Purulentní (bakteriální) meningitida:</strong> Likvor je zakalený, vysoký tlak, vysoký počet buněk (polymorfonukleáry v tisících), extrémní zvýšení bílkoviny (hyperproteinorhachie), **výrazný pokles glukózy** (pod 40 % glykémie). Původci: <em>N. meningitidis, S. pneumoniae, H. influenzae</em>, u novorozenců <em>S. agalactiae</em>, u starších <em>Listeria</em>.<br>• <strong>Aseptická (virová) meningitida:</strong> Likvor čirý, mírně zvýšený tlak, buňky v desítkách/stovek (lymfocyty), protein lehce zvýšený, **glukóza v normě**. Původci: Enteroviry, virus klíšťové encefalitidy, HSV-2, příušnice.<br>• <strong>Tuberculózní / Mykotická meningitida:</strong> Likvor čirý/opálový, lymfocyty, vysoký protein, nízká glukóza.",
        laborator: "Odběr likvoru do sterilní zkumavky, rychlý transport. Diagnostika: 1. Mikroskopie (Gramovo barvení, acidorezistence u TBC); 2. Rychlý průkaz antigenů (latexová aglutinace); 3. Kultivace (KA, čokoládový agar); 4. Multiplexová PCR (detekce DNA/RNA nejčastějších virů a bakterií)."
      },
      quiz: [
        {
          q: "Pro purulentní (hnisavou bakteriální) meningitidu je v biochemickém nálezu likvoru typický:",
          options: ["Vysoká glukóza a nízký protein", "Výrazný pokles glukózy a vysoký protein (hyperproteinorhachie)", "Čirý vzhled a převaha lymfocytů", "Absence jakýchkoli buněk"],
          correct: 1,
          explanation: "Bakterie spotřebovávají glukózu z likvoru k metabolismu → prudký pokles glukózy (laktát naopak stoupá) doprovázený vysokou bílkovinou ze zánětlivého exsudátu."
        }
      ]
    },
    cast_b: {
      title: "Členovci (Arthropoda) jako parazité a vektory",
      keywords: ["Ixodes ricinus", "komár", "vektor", "nymfa", "čmelík kuří", "přenašeči"],
      content: {
        definice: "<strong>Členovci:</strong> Největší živočišný kmen. V medicínské mikrobiologii fungují jako ektoparazité (přímé poškození) nebo jako **vektory** (přenašeči) infekčních patogenů.",
        etiologie: "<strong>Klíčoví zástupci a jimi přenášená onemocnění:</strong><br><br><strong>1. Roztoči (Acari):</strong><br>• <em>Ixodes ricinus (Klíště obecné):</em> Tříhostitelský cyklus (larva, nymfa, dospělec). Nymfy a dospělci přenášejí: Lymskou boreliózu (bakterie), klíšťovou encefalitidu (virus), anaplazmózu.<br>• <em>Dermacentor reticulatus (Piják lužní):</em> Jižní Morava. Přenos tularémie, babesiózy.<br>• <em>Neotrombicula autumnalis (Sametka podzimní):</em> Larvy vyvolávají v srpnu svědivou trombikulózu (srpnová vyrážka).<br>• <em>Demodex folliculorum (Trudník tukový):</em> Parazituje v mazových žlázách a řasách (kosmetický vliv).<br>• <em>Dermatophagoides (Prachovka):</em> Alergeny v exkretech roztočů (astma, rýma).<br><br><strong>2. Hmyz (Insecta):</strong><br>• <em>Komáři (Culicidae):</em> Samičky přenášejí malárii (<em>Anopheles</em>), žlutou zimnici, dengue, virus Zika (<em>Aedes</em>), západonilskou horečku (<em>Culex</em>).<br>• <em>Blechy (Siphonaptera):</em> <em>Pulex irritans</em> (blecha obecná). Vektor moru (<em>Yersinia pestis</em>) a skvrnitého tyfu (<em>Rickettsia typhi</em>).<br>• <em>Mouchy (Diptera):</em> Moucha tse-tse (spavá nemoc), muchničky (říční slepota)."
      },
      quiz: [
        {
          q: "Které vývojové stádium klíštěte Ixodes ricinus nepřenáší na člověka žádné patogeny?",
          options: ["Larva", "Nymfa", "Dospělá samička", "Sameček"],
          correct: 0,
          explanation: "Larva klíštěte se líhne z vajíčka neinfikovaná (transovariální přenos u většiny patogenů neprobíhá nebo je vzácný) a nakazí se až při prvním sání na drobných hlodavcích."
        }
      ]
    }
  },
  {
    id: "mikra-40",
    cislo: 40,
    skupina_a: "Diagnostika",
    skupina_b: "Parazitologie",
    cast_a: {
      title: "Gastrointestinální infekce a odběr stolice",
      keywords: ["Salmonella", "Shigella", "Campylobacter", "rotaviry", "rektální výtěr", "Amies"],
      content: {
        definice: "<strong>Gastrointestinální infekce:</strong> Průjmová onemocnění doprovázená zvracením, horečkou a dehydratací. Rozlišují se bakteriální enteroinfekce, virové gastroenteritidy a intoxikace z potravin.",
        etiologie: "<strong>Metodika odběru a vyšetření:</strong><br>• <strong>Bakteriologie:</strong> Rektální výtěr (odběrový tampón se zavede cca 5 cm do konečníku, otočí se a vloží do Amiesovy transportní půdy). Záchyt: <em>Salmonella enteritidis, Campylobacter jejuni</em> (krev ve stolici, nejčastější u nás), <em>Shigella sonnei</em> (tenesmy, hlen), <em>Yersinia enterocolitica</em>, patogenní <em>E. coli</em>.<br>• <strong>Virologie a Parazitologie:</strong> Kus kusové stolice (velikosti vlašského ořechu). Detekce rotavirů, norovirů (ELISA, latexová aglutinace, PCR) a vajíček/cyst prvoků.<br>• <strong>Intoxikace z potravy:</strong> Rychlý nástup (do 6h - zvracení, bez horečky). Způsobeno preformovaným toxinem: <em>Staphylococcus aureus</em> (enterotoxin) nebo <em>Bacillus cereus</em>."
      },
      quiz: [
        {
          q: "Jaký odběrový materiál je dostatečný pro rutinní bakteriologické vyšetření stolice (průkaz Salmonel, Campylobacterů)?",
          options: ["Kus kusové stolice ve sterilní nádobce", "Rektální výtěr na tamponu v transportní půdě (např. Amiesově)", "Otisk lepicí páskou z konečníku", "Odběr močového sedimentu"],
          correct: 1,
          explanation: "Rektální výtěr zavedený do Amiesovy transportní půdy je standardní a dostatečný materiál pro běžnou kultivaci střevních bakteriálních patogenů."
        }
      ]
    },
    cast_b: {
      title: "Zákožka svrabová a vši",
      keywords: ["Sarcoptes scabiei", "svrab", "Pediculus capitis", "veš dětská", "veš šatní", "hnidy"],
      content: {
        definice: "<strong>Zákožka svrabová a vši:</strong> Ektoparazitičtí členovci (roztoči a hmyz) cizopasící v kůži, ochlupení nebo na oděvech člověka.",
        etiologie: "<strong>1. Zákožka svrabová (Sarcoptes scabiei):</strong><br>• Samičky si vrtají chodbičky v stratum corneum epidermis, kde kladou vajíčka. Samečci po kopulaci hynou. Přenos těsným kontaktem (kůže na kůži, sex) a prádlem.<br>• Projevy: **Svrab (scabies)**. Intenzivní svědění (horší v teple pod peřinou), papuly a chodbičky v místech jemné kůže (meziprstí rukou, zápěstí, podpaží, genitál – trenýrkový příznak). U imunosuprimovaných *Scabies norvegica* (těžká krustózní forma).<br>• Diagnostika: seškrab kůže z konce chodbičky, rozpuštění v 10% KOH → mikroskopický průkaz roztoče/vajíček. Terapie: Permethrin 5% krém na celé tělo, sirná mast.<br><br><strong>2. Vši (Anoplura):</strong><br>• Bezkřídlý hmyz, živí se sáním krve. Samičky lepí vajíčka (**hnidy**) na vlasy/vlákna.<br>• <em>Veš dětská (Pediculus capitis):</em> Cizopasí ve vlasech (spánková a týlní krajina). Pruritus, riziko sekundární impetiginizace ranek. Diagnostika: nález živých vší/hnid. Terapie: Pedikulocida.<br>• <em>Veš šatní (Pediculus humanus):</em> Žije v záhybech oděvů, na tělo leze jen sát. **Vektor skvrnitého tyfu (Rickettsia prowazekii) a návratné horečky**.<br>• <em>Veš muňka (Phthirus pubis):</em> Pubické ochlupení, zanechává namodralé skvrny (maculae caeruleae)."
      },
      quiz: [
        {
          q: "Který zástupce vší je významným vektorem (přenašečem) epidemického skvrnitého tyfu?",
          options: ["Veš dětská (Pediculus capitis)", "Veš šatní (Pediculus humanus)", "Veš muňka (Phthirus pubis)", "Zákožka svrabová"],
          correct: 1,
          explanation: "Veš šatní (P. humanus) přenáší Rickettsia prowazekii (skvrnitý tyfus) a Borrelia recurrentis (návratná horečka) ve svých výkalech vetřených do kůže při škrábání."
        }
      ]
    }
  }
];


