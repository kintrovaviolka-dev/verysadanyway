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
        shigella: "<strong>Shigelóza = úplavice:</strong> Čistě lidská infekce. Infekční dávka 100 bakterií. Inkubace 3–7 dní. Projevy: tenesmy, průjem s hlenem a hnisem, horečka, slabost. Shiga toxin (S. dysenteriae): enterotoxické, neurotoxické, cytotoxické účinky. Přenos: fekálně-orální ('nemoc špinavých rukou'). Léčba: doplnění tekutin, ATB (endiaron, kotrimoxazol) jen zpočátku.",
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
        },
        {
          q: "Který členovec slouží jako hlavní vektor pro virus klíšťové encefalitidy (TBEV) ve střední Evropě?",
          options: ["Komár rodu Culex", "Blecha morová (Xenopsylla cheopis)", "Klíště obecné (Ixodes ricinus)", "Veš šatní (Pediculus humanus)"],
          correct: 2,
          explanation: "Klíště obecné (Ixodes ricinus) je hlavním vektorem i rezervoárem viru klíšťové encefalitidy ve střední Evropě. Přenos nastává při sání krve klíštěte na hostiteli."
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
        },
        {
          q: "Která selektivní půda se standardně používá pro kultivaci a odlišení Vibrio cholerae od ostatních vibrií?",
          options: ["Krevní agar s bacitracinem", "Cetrimidový agar", "TCŽS agar (thiosulfát-citrát-žlučové soli-sacharóza)", "Endův agar"],
          correct: 2,
          explanation: "TCŽS (TCBS) agar je vysoce selektivní půda pro vibria. Vibrio cholerae fermentuje sacharózu, a proto na něm roste v podobě charakteristických žlutých kolonií."
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
          explanation: "Ebola a Marburg are BSL-4 patogeny – vyžadují práci v prostředí s nejvyšší biologickou bezpečností (plně hermetické oblečení, negativní tlak v laboratoři, neopravitelné poškození)."
        },
        {
          q: "Který z následujících virů způsobujících hemoragické horečky má jako hlavní rezervoár hlodavce a přenáší se vdechováním jejich aerosolizovaných exkretů?",
          options: ["Virus Lassa (čeleď Arenaviridae)", "Virus Marburg (čeleď Filoviridae)", "Virus Ebola (čeleď Filoviridae)", "Virus Žluté zimnice (čeleď Flaviviridae)"],
          correct: 0,
          explanation: "Virus Lassa (Arenaviridae) má jako hlavní rezervoár hlodavce rodu Mastomys natalensis. Člověk se nejčastěji nakazí vdechnutím aerosolu kontaminovaného močí či trusem těchto hlodavců, případně přímým kontaktem."
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
        },
        {
          q: "Která z následujících hybridizačních metod se používá přímo na tkáňovém řezu v patologické laboratoři k lokalizaci virové DNA v hostitelské buňce bez nutnosti extrakce DNA?",
          options: ["PCR (polymerázová řetězová reakce)", "In situ hybridizace (ISH)", "Multiplexová PCR", "Sangerovo sekvenování"],
          correct: 1,
          explanation: "In situ hybridizace (ISH) umožňuje přímou vizualizaci a lokalizaci specifické nukleové kyseliny přímo v buňkách nebo tkáňových řezech (in situ = na místě) bez její předchozí izolace."
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
    "id": "mikra-15",
    "cislo": 15,
    "skupina_a": "Bakteriologie",
    "skupina_b": "Mykologie",
    "cast_a": {
        "title": "Viridující streptokoky a Pneumokoky",
        "keywords": [
            "Streptococcus pneumoniae",
            "S. mutans",
            "alfa-hemolýza",
            "optochin",
            "zubní kaz",
            "komunitní pneumonie"
        ],
        "content": {
            "definice": "<strong>Viridující streptokoky:</strong> Alfa-hemolytické nebo non-hemolytické streptokoky, fyziologicky osídlující ústní dutinu a nosohltan. <strong>S. pneumoniae (pneumokok):</strong> Významný opouzdřený lidský patogen vyvolávající lobární pneumonii, meningitidu a otitidu.",
            "etiologie": "• Ústní streptokoky (např. <em>S. mutans, S. salivarius, S. sanguinis</em>) tvoří zubní plak (štěpením sacharidů na kyseliny demineralizují sklovinu) a při bakteriémii kolonizují poškozené srdeční chlopně.<br>• <em>S. pneumoniae</em> je grampozitivní lancetovitý diplokok s polysacharidovým pouzdrem.",
            "patogeneze": "Pouzdro pneumokoka brání opsonizaci a fagocytóze. Pneumolyzin působí cytotoxicky (tvoří póry v membránách hostitelských buněk a inhibuje řasinkový epitel). Autolyzin (LytA) spouští lýzu stěny a uvolnění toxinů.",
            "klinicky": "• Ústní streptokoky: Zubní kaz, subakutní bakteriální endokarditida (SBE, loudavá sepse).<br>• S. pneumoniae: Lobární pneumonie (rezavé sputum), purulentní meningitida, otitis media (časté u dětí), sinusitida.",
            "laborator": "Mikroskopie: grampozitivní lancetovité diplokoky s jasným haló pouzdra. Kultivace: miskovité kolonie s alfa-hemolýzou. Diferenciace pneumokoka: <strong>optochinový test (citlivý)</strong> a <strong>žlučová rozpustnost (rozpustný)</strong>, viridující streptokoky jsou rezistentní.",
            "terapie": "Lék volby: Penicilin G (při citlivosti). Při rezistenci Cefotaxim / Ceftriaxon nebo Vankomycin."
        },
        "quiz": [
            {
                "q": "Optochinový test se používá k odlišení S. pneumoniae od ostatních viridujících streptokoků. Pneumokok:",
                "options": [
                    "Je rezistentní na optochin",
                    "Tvoří zónu inhibice kolem optochinového disku",
                    "Je citlivý na bacitracin",
                    "Tvoří modré kolonie"
                ],
                "correct": 1,
                "explanation": "S. pneumoniae je citlivý na optochin (ethylhydrocuprein) → tvoří inhibiční zónu >= 14 mm. Ostatní viridující streptokoky jsou rezistentní."
            },
            {
                "q": "Hlavním faktorem virulence Streptococcus pneumoniae, který brání opsonizaci a fagocytóze, je:",
                "options": [
                    "Pneumolyzin",
                    "Teikoová kyselina",
                    "Polysacharidové pouzdro",
                    "M-protein"
                ],
                "correct": 2,
                "explanation": "Polysacharidové pouzdro maskuje povrchové antigeny bakteriální stěny a brání navázání C3b and fagocytóze."
            },
            {
                "q": "Který ústní streptokok je klíčovým původcem zubního kazu díky tvorbě glukanů ze sacharózy?",
                "options": [
                    "Streptococcus mutans",
                    "Streptococcus pneumoniae",
                    "Streptococcus pyogenes",
                    "Streptococcus agalactiae"
                ],
                "correct": 0,
                "explanation": "S. mutans syntetizuje pomocí glukosyltransferázy nerozpustné glukany, které tvoří matrix zubního plaku a metabolizují cukry na kyseliny."
            }
        ]
    },
    "cast_b": {
        "title": "Kvasinky a kvasinkové mikroorganismy (Candida, Cryptococcus)",
        "keywords": [
            "Candida albicans",
            "Cryptococcus neoformans",
            "flukonazol",
            "amfotericin B",
            "soor",
            "imunosuprese"
        ],
        "content": {
            "definice": "<strong>Kvasinky:</strong> Jednobuněčné houby (mikromycety) množící se pučením. Hlavním oportunním patogenem je rod <em>Candida</em> (součást běžné flóry sliznic) a rod <em>Cryptococcus</em>.",
            "etiologie": "• <em>Candida albicans:</em> Oportunní patogen. Ostatní druhy (<em>C. glabrata, C. krusei</em>) vykazují sníženou citlivost k azolům.<br>• <em>Cryptococcus neoformans:</em> Obalený kvasinkový organismus se silným polysacharidovým pouzdrem (zdroj: holubí trus).",
            "klinicky": "• Candida: Soor (moudr - bílé povlaky DÚ), vulvovaginální kandidóza (tvarohový výtok, svědění), intertrigo v kožních záhybech diabetiků, invazivní kandidémie u neutropenie.<br>• Cryptococcus: Plicní kryptokokóza a život ohrožující subakutní meningoencefalitida u AIDS.",
            "laborator": "Candida: Nativní preparát (pučící buňky a pseudohyfy), kultivace na Sabouraudově agaru a chromogenních půdách. Cryptococcus: <strong>tušový preparát (negativní barvení pouzdra)</strong>, latexová aglutinace kapsulárního antigenu v likvoru.",
            "terapie": "Lokální: Nystatin, Clotrimazol. Systémová: Fluconazol, Echinokandiny (Caspofungin - lék volby pro kandidémii), Amfotericin B + Flucytosin (kryptokokóza)."
        },
        "quiz": [
            {
                "q": "Která z následujících kvasinek je přirozeně (intrinsicky) rezistentní vůči flukonazolu?",
                "options": [
                    "Candida albicans",
                    "Candida krusei",
                    "Candida tropicalis",
                    "Candida parapsilosis"
                ],
                "correct": 1,
                "explanation": "Candida krusei vykazuje přirozenou rezistenci k flukonazolu; k léčbě se používají echinokandiny, vorikonazol či amfotericin B."
            },
            {
                "q": "Která diagnostická metoda se používá k průkazu polysacharidového pouzdra Cryptococcus neoformans v likvoru?",
                "options": [
                    "Ziehl-Neelsenovo barvení",
                    "Tušový preparát (Burriho negativní barvení)",
                    "Gramovo barvení za horka",
                    "Neisserovo barvení"
                ],
                "correct": 1,
                "explanation": "Polysacharidové pouzdro nepropouští částice tuše, takže se kryptokokové buňky zobrazí jako jasné dvorce na tmavém pozadí."
            },
            {
                "q": "Co je lékem první volby u invazivní systémové kandidózy (kandidémie) u neutropenického pacienta?",
                "options": [
                    "Nystatin lokálně",
                    "Echinokandiny (např. Caspofungin)",
                    "Penicilin G",
                    "Metronidazol"
                ],
                "correct": 1,
                "explanation": "Echinokandiny blokují syntézu beta-glukanu stěny a jsou fungicidní vůči candidám s minimální toxicitou."
            }
        ]
    }
},
{
    "id": "mikra-16",
    "cislo": 16,
    "skupina_a": "Bakteriologie",
    "skupina_b": "Mykologie",
    "cast_a": {
        "title": "Enterokoky, Leuconostoc, Pediococcus, nutričně variantní streptokoky",
        "keywords": [
            "Enterococcus faecalis",
            "Enterococcus faecium",
            "VRE",
            "Leuconostoc",
            "vankomycin",
            "resistentní"
        ],
        "content": {
            "definice": "<strong>Enterokoky:</strong> G+ koky v řetízcích, dříve řazené mezi streptokoky D. Součást běžné flóry GIT, vysoce odolné (rostou v 6,5% NaCl, při 45 °C a v přítomnosti žluči). Oportunní nosokomiální patogeny.",
            "etiologie": "• <em>Enterococcus faecalis (85 %):</em> Běžnější, citlivější.<br>• <em>Enterococcus faecium (10 %):</em> Častěji rezistentní k ampicilinu a vankomycinu (VRE z genů vanA/vanB - změna zakončení peptidoglykanu z D-Ala-D-Ala na D-Ala-D-Lac).<br>• <em>Leuconostoc, Pediococcus:</em> G+ koky, přirozeně rezistentní k vankomycinu.",
            "klinicky": "Nozokomiální infekce močových cest (spojené s katetrem), nitrobřišní a pánevní abscesy, bakteriemie, subakutní endokarditida.",
            "laborator": "Kultivace: šedavé kolonie, PYR test pozitivní, žluč-esculinový agar (štěpení esculinu barví půdu do černa). VRE se potvrzuje PCR detekcí genů vanA/B.",
            "terapie": "Lék volby: Ampicilin. Pro endokarditidy synergická kombinace Ampicilin + Gentamicin (aminoglykosid). U VRE: Linezolid, Daptomycin nebo Tigecyklin."
        },
        "quiz": [
            {
                "q": "Které dva rody grampozitivních koků vykazují přirozenou (intrinsickou) rezistenci k vankomycinu?",
                "options": [
                    "Staphylococcus a Streptococcus",
                    "Leuconostoc a Pediococcus",
                    "Enterococcus a Peptostreptococcus",
                    "Streptococcus a Enterococcus"
                ],
                "correct": 1,
                "explanation": "Leuconostoc a Pediococcus mají pozměněnou stěnu zakončenou D-Ala-D-laktátem, takže na ně vankomycin nepůsobí."
            },
            {
                "q": "Jaký je mechanismus rezistence u kmenů VRE (vankomycin-rezistentní enterokoky)?",
                "options": [
                    "Změna cílového místa vazby glykopeptidů v buněčné stěně (D-Ala-D-Laktát namísto D-Ala-D-Ala)",
                    "Produkce specifické vankomycinázy štěpící antibiotikum",
                    "Aktivní efluxní pumpa odstraňující léčivo z buňky",
                    "Ztráta porinových kanálků v membráně"
                ],
                "correct": 0,
                "explanation": "Geny vanA a vanB kódují enzymy měnící terminální dipeptid peptidoglykanu na D-Ala-D-laktát, ke kterému má vankomycin nízkou afinitu."
            },
            {
                "q": "Které antibiotikum je doporučeným lékem volby pro terapii infekcí způsobených VRE kmeny?",
                "options": [
                    "Ampicilin",
                    "Ceftriaxon",
                    "Linezolid",
                    "Imipenem"
                ],
                "correct": 2,
                "explanation": "Linezolid (inhibitor proteosyntézy) je schválen pro léčbu závažných infekcí způsobených VRE."
            }
        ]
    },
    "cast_b": {
        "title": "Aspergilové infekce",
        "keywords": [
            "Aspergillus fumigatus",
            "aspergilom",
            "ABPA",
            "galaktomannan",
            "vorikonazol",
            "inhalace spor"
        ],
        "content": {
            "definice": "<strong>Aspergillus spp. (A. fumigatus, A. flavus, A. niger):</strong> Vláknité houby (plísně) se septovanými hyfami větvícími se pod úhlem 45°. Původci plicních a systémových mykóz u imunokompromitovaných.",
            "etiologie": "Nákaza inhalací konidií (spor) z vnějšího prostředí. Virulenci zvyšuje produkce proteáz a elastáz poškozujících tkáň plic.",
            "klinicky": "1. <strong>Aspergilom:</strong> Růst mycelia v preexistující dutině plic (např. po TBC), projevuje se hemoptýzou.<br>2. <strong>Alergická bronchopulmonální aspergilóza (ABPA):</strong> Hypersenzitivní reakce u astmatiků a pacientů s cystickou fibrózou.<br>3. <strong>Invazivní plicní aspergilóza (IPA):</strong> Těžká angioinvazivní infekce u pacientů s hlubokou neutropenií (hematologické malignity) vedoucí k plicním infarktům a hematogenní diseminaci do CNS.",
            "laborator": "Mikroskopie: septované hyfy větvené pod ostrým úhlem (45°). Kultivace: Sabouraudův agar (sametové kolonie). Průkaz <strong>galaktomannanu</strong> v séru a BAL, detekce β-1,3-D-glukanu.",
            "terapie": "Lék volby: **Vorikonazol** (nebo Isavukonazol / liposomální Amfotericin B). Aspergilom se léčí chirurgickou resekcí."
        },
        "quiz": [
            {
                "q": "Které antimykotikum je lékem první volby pro léčbu invazivní plicní aspergilózy?",
                "options": [
                    "Fluconazol",
                    "Vorikonazol",
                    "Nystatin",
                    "Flucytosin"
                ],
                "correct": 1,
                "explanation": "Vorikonazol vykazuje vyšší účinnost a nižší toxicitu než amfotericin B, a proto je lékem první volby pro léčbu invazivní aspergilózy."
            },
            {
                "q": "Detekce kterého specifického buněčného antigenu v séru a bronchoalveolární laváži (BAL) pomáhá diagnostikovat invazivní aspergilózu?",
                "options": [
                    "Galaktomannan",
                    "Mannan",
                    "Kapsulární antigen",
                    "Teikoová kyselina"
                ],
                "correct": 0,
                "explanation": "Galaktomannan je polysacharid přítomný v buněčné stěně rodu Aspergillus, uvolňovaný během aktivního růstu hyf."
            }
        ]
    }
},
{
    "id": "mikra-17",
    "cislo": 17,
    "skupina_a": "Bakteriologie",
    "skupina_b": "Mykologie",
    "cast_a": {
        "title": "Korynebakteria, Bacillus sp.",
        "keywords": [
            "Corynebacterium diphtheriae",
            "Bacillus anthracis",
            "Bacillus cereus",
            "difterický toxin",
            "antrax",
            "Clauberg"
        ],
        "content": {
            "definice": "<strong>Grampozitivní tyčinky:</strong> Corynebacterium je nesporulující pleomorfní aerobní tyčinka, Bacillus tvoří odolné endospory.",
            "etiologie": "• <em>C. diphtheriae:</em> Původce záškrtu (diftérie). Kmeny produkující difterický toxin (fágem kódovaný AB toxin).<br>• <em>B. anthracis:</em> Původce antraxu (sněti slezinné). Spory přetrvávají v půdě.<br>• <em>B. cereus:</em> Spory kontaminují rýži a těstoviny.",
            "patogeneze": "• Difterický toxin: ADP-ribosylace EF-2 → blokáda proteosyntézy → nekróza sliznice.<br>• Antraxový toxin: Edémový faktor (aktivuje adenylátcyklázu) + Letální faktor (štěpí MAP-kinázy) + Protektivní antigen (vazba na buňku).<br>• B. cereus: Emetický toxin (cereulid, termostabilní preformovaný v rýži) nebo enterotoxin (termolabilní ve střevě).",
            "klinicky": "• Záškrt: Pablánová (pseudomembranózní) angína, bull neck (otok krku), toxic myocarditis, dušení.<br>• Antrax: Kožní (pustula maligna - černý nebolestivý vřed), plicní (hadrářská nemoc - mediastinitida, krvavý exsudát), gastrointestinální.<br>• B. cereus: Alimentární intoxikace (emetický typ s rychlým nástupem nebo průjmový typ s delší inkubací).",
            "laborator": "• C. diphtheriae: Mikroskopie (kyjovité tyčinky, Neisserovo barvení na metachromatická Ernst-Babesova zrna). Kultivace na Claubergově telluritovém agaru (černé kolonie). Elekův test na průkaz toxigenicity.<br>• B. anthracis: G+ tyčky s bambusovým vzhledem.",
            "terapie": "Záškrt: Antitoxin + Penicilin G / Erytromycin. Antrax: Ciprofloxacin / Doxycyklin."
        },
        "quiz": [
            {
                "q": "Jaký je molekulární mechanismus účinku difterického exotoxinu?",
                "options": [
                    "Štěpení synaptických proteinů SNARE",
                    "ADP-ribosylace elongačního faktoru 2 (EF-2) a zástava proteosyntézy",
                    "Degradace fosfolipidů buněčné membrány",
                    "Stimulace adenylátcyklázy"
                ],
                "correct": 1,
                "explanation": "Difterický toxin je A-B toxin, jehož aktivní podjednotka A katalyzuje přenos ADP-ribózy na EF-2, čímž zastaví translokaci ribozomů a proteosyntézu."
            },
            {
                "q": "Které medium a biochemická vlastnost se využívají k diagnostice záškrtu (C. diphtheriae)?",
                "options": [
                    "Růžové kolonie na Endově agaru",
                    "Telluritový agar (Claubergova půda), na kterém bakterie tvoří černé kolonie",
                    "Kyselé pH na Sabouraudově agaru",
                    "Modré zbarvení na Löwenstein-Jensenově půdě"
                ],
                "correct": 1,
                "explanation": "C. diphtheriae redukuje telluričitan draselný v Claubergově půdě na kovový tellur, což barví kolonie šedočerně."
            },
            {
                "q": "Které stádium Bacillus anthracis je odpovědné za přenos a extrémní odolnost v prostředí?",
                "options": [
                    "Vegetativní buňka",
                    "Bakteriální spóra (endospóra)",
                    "Toxinový komplex",
                    "Kapsulární antigen"
                ],
                "correct": 1,
                "explanation": "Endospory Bacillus anthracis jsou vysoce odolné vůči teplu, suchu i dezinfekci a mohou přežívat v půdě desítky let."
            }
        ]
    },
    "cast_b": {
        "title": "Laboratorní techniky přímého a nepřímého průkazu mykotických nákaz",
        "keywords": [
            "Sabouraudův agar",
            "KOH preparát",
            "galaktomannan",
            "β-D-glukan",
            "Calcofluor",
            "latexová aglutinace"
        ],
        "content": {
            "definice": "<strong>Diagnostika mykóz:</strong> Zahrnuje rychlou mikroskopii, kultivaci (zlatý standard), stanovení solubilních antigenů a PCR.",
            "laborator": "1. <strong>Mikroskopie:</strong> Nativní preparát s 10–20% KOH (rozpustí lidský keratin a epitelie), Calcofluor white (fluorescenční barvení chitinu ve stěně hub).<br>2. <strong>Kultivace:</strong> Sabouraudův glukózový agar (SDA) s chloramfenikolem (k zábraně růstu bakterií), kultivace při 25–30 °C po dobu 1–4 týdnů.<br>3. <strong>Sérologie / Antigeny:</strong> Průkaz kapsulárního antigenu <em>Cryptococcus</em> v likvoru aglutinací, detekce **galaktomannanu** (Aspergillus) a **(1,3)-β-D-glukanu** (panfungální marker invazivních mykóz s výjimkou zygomycet a kryptokoků) v séru."
        },
        "quiz": [
            {
                "q": "Který polysaccharide buněčné stěny hub slouží jako panfungální marker v séru pro včasnou diagnózu invazivních mykóz (např. kandidémie, aspergilózy)?",
                "options": [
                    "(1,3)-β-D-glukan",
                    "Galaktomannan",
                    "LPS (lipopolysacharid)",
                    "Peptidoglykan"
                ],
                "correct": 0,
                "explanation": "(1,3)-beta-D-glukan je součástí stěny většiny medicínsky významných hub a detekuje se v séru; chybí však u zygomycet a kryptokoků."
            },
            {
                "q": "Proč se k Sabouraudovu agaru při kultivaci hub standardně přidává chloramfenikol?",
                "options": [
                    "K potlačení růstu kontaminujících bakterií",
                    "K urychlení klíčení spor hub",
                    "K inhibici růstu saprofytických kvasinek",
                    "K úpravě pH půdy"
                ],
                "correct": 0,
                "explanation": "Chloramfenikol je stabilní širokospektré antibiotikum, které brání přerůstání pomalu rostoucích hub doprovodnými bakteriemi."
            }
        ]
    }
},
{
    "id": "mikra-18",
    "cislo": 18,
    "skupina_a": "Bakteriologie",
    "skupina_b": "Mykologie",
    "cast_a": {
        "title": "Listeria, laktobacily",
        "keywords": [
            "Listeria monocytogenes",
            "Lactobacillus",
            "chladová kultivace",
            "ampicilin",
            "Döderleinův bacil"
        ],
        "content": {
            "definice": "<strong>Listeria a Lactobacillus:</strong> Grampozitivní, nesporulující pravidelné tyčinky.",
            "etiologie": "• <em>Listeria monocytogenes:</em> Pohyblivý, fakultativně anaerobní patogen. Vyskytuje se v půdě, siláži, exkretech zvířat. Schopná růst při chladničkových teplotách (4 °C) a v solích.<br>• <em>Lactobacillus spp.:</em> Mikroaerofilní/anaerobní tyčky, fermentující cukry na kyselinu mléčnou.",
            "klinicky": "• Listeria: U těhotných chřipkovité příznaky → infekce plodu (granulomatosis infantiseptica, abort, předčasný porod). U novorozenců (časná a pozdní sepse/meningitida) a u seniorů/imunodeficitů purulentní meningitida.<br>• Laktobacily: Součást normální mikroflóry pochvy (Döderleinův bacil - udržuje pH < 4.5, brání vaginózám) a GIT. Zřídka vyvolávají oportunní endokarditidu.",
            "laborator": "• Listeria: Kultivace na KA (úzká zóna beta-hemolýzy, roste při 4 °C - chladový obohacovací test), pozitivní kataláza, charakteristický vířivý pohyb (tumbling motility) při 25 °C.<br>• Laktobacily: PYR a kataláza negativní, kultivace na MRS agaru.",
            "terapie": "Lék volby pro Listerii: **Ampicilin** (popř. s Gentamicinem). **Listeria vykazuje přirozenou rezistenci k cefalosporinům!**"
        },
        "quiz": [
            {
                "q": "Proč je při empirické antibiotické léčbě hnisavé meningitidy u novorozenců a starších dospělých nutné kombinovat cefalosporiny III. generace s Ampicilinem?",
                "options": [
                    "Protože Listeria monocytogenes vykazuje intrinsickou (přirozenou) rezistenci k cefalosporinům",
                    "Pro synergický účinek na Streptococcus pneumoniae",
                    "Cefalosporiny nepůsobí na Haemophilus influenzae",
                    "Ampicilin snižuje otok mozku"
                ],
                "correct": 0,
                "explanation": "Listeria monocytogenes je přirozeně rezistentní ke všem cefalosporinům, proto je nutné u rizikových skupin (novorozenci, senioři, imunosuprimovaní) přidat k empirické léčbě ampicilin."
            },
            {
                "q": "Který mikroorganismus tvoří klíčovou součást vaginální mikroflóry zdravé ženy a udržuje kyselé pH pochvy?",
                "options": [
                    "Gardnerella vaginalis",
                    "Lactobacillus spp. (Döderleinův bacil)",
                    "Candida albicans",
                    "Streptococcus agalactiae"
                ],
                "correct": 1,
                "explanation": "Laktobacily produkují kyselinu mléčnou a H2O2, čímž udržují kyselé pH pochvy (< 4,5), které inhibuje růst anaerobů a kvasinek."
            },
            {
                "q": "Jaký charakteristický typ pohyb vužíva Listeria monocytogenes při pokojové teplotě (20–25 °C)?",
                "options": [
                    "Rychlý přímý pohyb bičíky",
                    "Vířivý / přemetový pohyb (tumbling motility)",
                    "Plazivý pohyb (swarming)",
                    "Bakterie je zcela nepohyblivá"
                ],
                "correct": 1,
                "explanation": "Listeria monocytogenes má při teplotách pod 30 °C peritrichální bičíky vyvolávající typický přemetový (tumbling) pohyb, zatímco při 37 °C bičíky netvoří."
            }
        ]
    },
    "cast_b": {
        "title": "Kryptokoková meningoencefalitida",
        "keywords": [
            "Cryptococcus neoformans",
            "holubí trus",
            "tušový preparát",
            "latexová aglutinace",
            "amfotericin B"
        ],
        "content": {
            "definice": "<strong>Kryptokokóza:</strong> Závažná oportunní infekce vyvolaná opouzdřenou kvasinkou <em>Cryptococcus neoformans</em>.",
            "etiologie": "Inhalace kvasinek či spor ze suchého trusu holubů a jiných ptáků. Kvasinka má silné polysacharidové pouzdro (glukuronoxylomannan) chránící před fagocytózou a metabolizuje dopamin na melanin.",
            "klinicky": "Primární plicní ložiska (často asymptomatická) → hematogenní diseminace s afinitou k CNS. Subakutní/chronická purulentní meningitida a meningoencefalitida (bolesti hlavy, horečka, meningismus, edém papily). Hlavní příčina úmrtí u pacientů s AIDS.",
            "laborator": "Mikroskopie likvoru: **tušový preparát** (negativní barvení odhalí silná pouzdra). Průkaz kapsulárního antigenu latexovou aglutinací nebo LFA v likvoru a séru (citlivost >95 %). Kultivace na SDA (hladké krémové kolonie).",
            "terapie": "Indukční fáze: **Amfotericin B i.v. + Flucytosin** po dobu 2 týdnů. Konsolidační a udržovací fáze: Fluconazol p.o."
        },
        "quiz": [
            {
                "q": "Který zástupce mykóz je nejčastějším původcem subakutní meningoencefalitidy u pacientů v pokročilém stádiu AIDS?",
                "options": [
                    "Aspergillus fumigatus",
                    "Cryptococcus neoformans",
                    "Mucor indicus",
                    "Candida krusei"
                ],
                "correct": 1,
                "explanation": "Cryptococcus neoformans vykazuje vysokou neurotropii a je nejčastější příčinou plísňové meningitidy u HIV pozitivních pacientů."
            },
            {
                "q": "Co tvoří hlavní faktor virulence Cryptococcus neoformans chránící kvasinku před imunitním systémem hostitele?",
                "options": [
                    "Masivní polysacharidové pouzdro",
                    "Termolabilní enterotoxin",
                    "Endotoxická stěna s LPS",
                    "Bičík s tumbling pohybem"
                ],
                "correct": 0,
                "explanation": "Tlusté polysacharidové pouzdro brání fagocytóze a opsonizaci a potlačuje leukocytární infiltraci."
            }
        ]
    }
},
{
    "id": "mikra-19",
    "cislo": 19,
    "skupina_a": "Bakteriologie",
    "skupina_b": "Mykologie",
    "cast_a": {
        "title": "Nocardia, Arcanobacterium a příbuzné G+ tyčinky",
        "keywords": [
            "Nocardia asteroides",
            "Arcanobacterium haemolyticum",
            "kyselozdornost",
            "abscesy plic",
            "cotrimoxazol"
        ],
        "content": {
            "definice": "<strong>Nocardia a Arcanobacterium:</strong> G+ tyčinky s odlišnou morfologií a spektrem onemocnění.",
            "etiologie": "• <em>Nocardia (N. asteroides, N. brasiliensis):</em> Aerobní, větvící se vláknité tyčinky, slabě acidorezistentní (částečně kyselovzdorné). Půdní bakterie.<br>• <em>Arcanobacterium haemolyticum:</em> Pleomorfní, fakultativně anaerobní tyčinka vyvolávající záněty krku.",
            "klinicky": "• Nokardióza: Inhalační nákaza u imunosuprimovaných (glukokortikoidy, transplantace). Plicní nokardióza (nekrotizující pneumonie, abscesy) s častou hematogenní diseminací do mozku (abscesy CNS) a kůže.<br>• Arcanobacterium: Faryngitida a tonzilitida s drobným exantémem napodobujícím spálu (postihuje adolescenty, vyžaduje odlišení od S. pyogenes).",
            "laborator": "• Nocardia: Barvení dle Grama (G+ větvící se nitě) a modifikované barvení dle Ziehla-Neelsena (Kinyoun) – slabě acidorezistentní. Kultivace trvá až 2 týdny (křídově bílé, vrásčité kolonie).<br>• Arcanobacterium: Kultivace na krevním agaru (velmi drobná beta-hemolýza), kataláza negativní.",
            "terapie": "Nokardióza: **Co-trimoxazol** (lék volby, dlouhodobě 6–12 měsíců). Arcanobacterium: Erytromycin nebo Penicilin."
        },
        "quiz": [
            {
                "q": "Která z následujících vlastností je charakteristická pro rod Nocardia a odlišuje jej od rodu Actinomyces?",
                "options": [
                    "Je to striktní anaerob",
                    "Je to striktní aerob a je částečně acidorezistentní (kyselovzdorný)",
                    "Působí výhradně vaginózy",
                    "Tvoří termostabilní endospory"
                ],
                "correct": 1,
                "explanation": "Nocardia je striktní aerob a díky mykolovým kyselinám ve stěně je slabě acidorezistentní (zatímco Actinomyces je anaerobní a acidorezistentní není)."
            },
            {
                "q": "Lékem první volby pro terapii plicní a systémové nokardiózy je:",
                "options": [
                    "Co-trimoxazol (TMP-SMX)",
                    "Penicilin G i.v.",
                    "Metronidazol",
                    "Amfotericin B"
                ],
                "correct": 0,
                "explanation": "Vysokodávkovaný Co-trimoxazol je lékem první volby a podává se po dobu několika měsíců pro zamezení relapsu."
            },
            {
                "q": "Který patogen vyvolává u mladistvých faryngitidu doprovázenou skarlatiniformním (spálovým) exantémem, čímž napodobuje Streptococcus pyogenes?",
                "options": [
                    "Nocardia asteroides",
                    "Arcanobacterium haemolyticum",
                    "Listeria monocytogenes",
                    "Bacillus anthracis"
                ],
                "correct": 1,
                "explanation": "Arcanobacterium haemolyticum vyvolává u adolescentů angínu s kožním exantémem; je přirozeně rezistentní k některým antibiotikům, ale dobře citlivý na erytromycin."
            }
        ]
    },
    "cast_b": {
        "title": "Mukormykóza (Zygomykóza)",
        "keywords": [
            "Mucor",
            "Rhizopus",
            "rhinocerebrální",
            "angioinvaze",
            "diabetes",
            "amfotericin B"
        ],
        "content": {
            "definice": "<strong>Mukormykóza (zygomykóza):</strong> Rychle progredující, vysoce agresivní oportunní mykóza způsobená plísněmi rodu <em>Mucor, Rhizopus, Lichtheimia</em>.",
            "etiologie": "Široké, neseptované nebo málo septované hyfy větvící se pod úhlem 90°. Rizikové skupiny: pacienti s dekompenzovaným diabetem a ketoacidózou, hematologičtí pacienti v neutropenii.",
            "patogeneze": "Vysoká angioinvazivita → hyfy prorůstají stěnou cév → trombóza a infarkt tkáně → rozsáhlé černé nekrózy.",
            "klinicky": "1. <strong>Rhinocerebrální mukormykóza:</strong> Začíná v nosní dutině a sinech, prorůstá přes lamina cribrosa do orbity a mozku. Černé nekrotické povlaky na tvrdém patře a nosní sliznici, proptóza oka, parézy.<br>2. <strong>Plicní a diseminovaná forma.</strong>",
            "laborator": "Rychlá mikroskopie z biopsie/aspirátu: nález širokých neseptovaných hyf větvících se v úhlu 90°. Kultivace roste rychle (vlnovité plísňové kolonie).",
            "terapie": "1. **Radikální chirurgický débridement** nekrotické tkáně (klíč k přežití). 2. **Liposomální Amfotericin B i.v.** nebo **Isavukonazol**."
        },
        "quiz": [
            {
                "q": "Které stádium dekompenzace diabetu představuje kritický rizikový faktor pro rozvoj rhinocerebrální mukormykózy?",
                "options": [
                    "Chronická mírná hyperglykémie",
                    "Diabetická ketoacidóza (nízké pH stimuluje růst zygomycet)",
                    "Hypoglykemické koma",
                    "Diabetická retinopatie"
                ],
                "correct": 1,
                "explanation": "V kyselém prostředí (ketoacidóze) a při dostupnosti volného železa rostou zygomycety extrémně rychle a snadno invadují cévy."
            },
            {
                "q": "Jak vypadají mikroskopická vlákna (hyfy) zygomycet (Mucor, Rhizopus) v nativním preparátu z tkáně?",
                "options": [
                    "Úzké, septované hyfy větvící se pod ostrým úhlem 45°",
                    "Široké, neseptované (cenocytické) hyfy větvící se pod pravým úhlem 90°",
                    "Drobné pučící kvasinky s pseudohyfami",
                    "Jednoduché bičíkaté trofozoity"
                ],
                "correct": 1,
                "explanation": "Zygomycety charakterizují robustní neseptovaná vlákna větvená v pravém úhlu, na rozdíl od Aspergilla, který je úzký a septovaný pod úhlem 45°."
            }
        ]
    }
},
{
    "id": "mikra-20",
    "cislo": 20,
    "skupina_a": "Bakteriologie",
    "skupina_b": "Mykologie",
    "cast_a": {
        "title": "Grampozitivní anaerobní koky a tyčinky",
        "keywords": [
            "Clostridium difficile",
            "Clostridium perfringens",
            "Clostridium tetani",
            "C. botulinum",
            "Peptostreptococcus"
        ],
        "content": {
            "definice": "<strong>G+ anaerobní tyčinky (Clostridium) a koky (Peptostreptococcus):</strong> Striktně anaerobní mikroorganismy. Rod Bacillus tvoří spory v aerobním prostředí, rodu Clostridium anaerobně. Peptostreptococcus je součástí běžné flóry.",
            "etiologie": "• <em>C. perfringens:</em> Plynatá sněť. Exotoxin alfa-toxin (lecitináza štěpící buněčné membrány).<br>• <em>C. tetani:</em> Tetanus. Tetanospasmin (neurotoxin blokuje uvolnění GABA a glycinu).<br>• <em>C. botulinum:</em> Botulismus. Botulotoxin (neurotoxin blokuje uvolnění acetylcholinu).<br>• <em>C. difficile:</em> Pseudomembranózní kolitida po ATB. Toxiny A (enterotoxin) a B (cytotoxin).",
            "klinicky": "• Plynatá sněť: Myonekróza s krepitací (plyn ve tkáni), sepse.<br>• Tetanus: Trismus (křeč žvýkacích svalů), risus sardonicus, opistotonus, spastická paralýza.<br>• Botulismus: Chabá paralýza (diplopie, dysfagie, dyspnoe). U kojenců z medu.<br>• C. difficile: Profúzní průjmy, hlen, pseudomembrány na sliznici tlustého střeva.",
            "laborator": "Odběr materiálu v anaerobních transportních systémech. Kultivace na VL agaru v anaerostatu. Průkaz toxinů C. difficile ve stolici (ELISA / PCR).",
            "terapie": "C. perfringens: chirurgie + Penicilin G. Tetanus: Antitoxin (TIG) + Metronidazol + očkování. C. difficile: **Vankomycin p.o.** nebo **Fidaxomycin p.o.**"
        },
        "quiz": [
            {
                "q": "Který z následujících toxinů působí jako zinková metaloproteáza štěpící synaptobrevin, čímž blokuje uvolnění inhibičních mediátorů glycinu a GABA v míše?",
                "options": [
                    "Botulotoxin",
                    "Tetanospasmin",
                    "Difterický toxin",
                    "Choleratoxin"
                ],
                "correct": 1,
                "explanation": "Tetanospasmin retrográdně putuje do míšních interneuronů, kde zablokuje uvolnění tlumivých mediátorů → nekontrolovaná stimulace motorických neuronů a spastické křeče."
            },
            {
                "q": "Proč je podávání Vankomycinu intravenózně neúčinné při léčbě kolitidy vyvolané Clostridioides difficile?",
                "options": [
                    "Vankomycin neproniká stěnou kapilár",
                    "Vankomycin se po i.v. podání nevylučuje do střevního lumen a nedosáhne tam terapeutické koncentrace",
                    "C. difficile je přirozeně rezistentní k vankomycinu",
                    "C. difficile se nachází pouze v krvi"
                ],
                "correct": 1,
                "explanation": "Vankomycin se z trávicího traktu téměř nevstřebává, což se využívá při podání p.o. (kdy působí přímo ve střevě). Při podání i.v. se do střeva nedostane."
            },
            {
                "q": "Který klostridiový toxin funguje jako lecitináza (fosfolipáza C) rozrušující buněčné membrány a vyvolávající myonekrózu u plynaté sněti?",
                "options": [
                    "Alfa-toxin Clostridium perfringens",
                    "Tetanospasmin",
                    "Toxin B Clostridium difficile",
                    "Botulotoxin"
                ],
                "correct": 0,
                "explanation": "Alfa-toxin C. perfringens hydrolyzuje lecitin v buněčných membránách erytrocytů, destiček a svalových buněk, což vede k nekróze a hemolýze."
            }
        ]
    },
    "cast_b": {
        "title": "Endemické a vzácné mykózy",
        "keywords": [
            "Histoplasma",
            "Coccidioides",
            "Blastomyces",
            "dimorfismus",
            "mykózy"
        ],
        "content": {
            "definice": "<strong>Endemické (systémové) mykózy:</strong> Infekce vyvolané dimorfními houbami, které vykazují vysokou geografickou vázanost a postihují i imunokompetentní hostitele.",
            "etiologie": "Původci vykazují teplotní dimorfismus (při 25 °C plísňová forma v půdě, při 37 °C kvasinkové buňky nebo sférulie v tkáni hostitele). Inhalace konidií/artrokonidií ze suché půdy.<br>• <em>Histoplasma capsulatum:</em> USA (Mississippi), ptačí a netopýří trus.<br>• <em>Coccidioides immitis:</em> JZ USA, suchá pouštní půda. V hostiteli tvoří sférulie s endosporami.<br>• <em>Blastomyces dermatitidis:</em> Severní Amerika.",
            "laborator": "Mikroskopie (morfologie v tkáni: např. u Histoplasmy drobné intracelulární kvasinky v makrofázích, u Coccidioides sférulie). Kultivace na SDA s rizikem nákazy personálu! Průkaz antigenů v moči/séru.",
            "terapie": "Mírné formy: Itrakonazol. Závažné/diseminované: i.v. **Amfotericin B**."
        },
        "quiz": [
            {
                "q": "Který rezervoár je typický pro zdroj nákazy Histoplasma capsulatum v endemických oblastech?",
                "options": [
                    "Půda bohatá na ptačí a netopýří trus (jeskyně, kurníky)",
                    "Sladkovodní ryby",
                    "Domácí kočky",
                    "Nesterilní jehly"
                ],
                "correct": 0,
                "explanation": "Ptačí a netopýří exkrementy poskytují ideální organické médium pro růst plísňové formy Histoplasma capsulatum."
            },
            {
                "q": "Nález robustních, kulatých struktur zvaných 'sférulie' naplněných desítkami drobných endospor v plicní biopsii je typický pro:",
                "options": [
                    "Coccidioides immitis",
                    "Histoplasma capsulatum",
                    "Blastomyces dermatitidis",
                    "Candida albicans"
                ],
                "correct": 0,
                "explanation": "Coccidioides immitis v hostiteli netvoří kvasinky, nýbrž sférulie (průměr 20–80 µm), které praskají a uvolňují endospory."
            }
        ]
    }
},
{
    "id": "mikra-21",
    "cislo": 21,
    "skupina_a": "Bakteriologie",
    "skupina_b": "Mykologie",
    "cast_a": {
        "title": "Mycobacterium tuberculosis",
        "keywords": [
            "TBC",
            "Kochův bacil",
            "Ziehl-Neelsen",
            "Löwenstein-Jensen",
            "antituberotika",
            "Mantoux"
        ],
        "content": {
            "definice": "<strong>Mycobacterium tuberculosis (Kochův bacil, BK):</strong> Štíhlá acidorezistentní tyčinka. Obligátně aerobní, intracelulární patogen.",
            "etiologie": "Buněčná stěna s vysokým obsahem lipidů a mykolových kyselin (až 60 % suché hmotnosti) → způsobuje acidorezistenci (odolnost k odbarvení kyselým alkoholem) a gram-labilní barvení.",
            "patogeneze": "Inhalace kapének → pohlcení alveolárními makrofágy → inhibice fúze fagosomu s lysosomem → intracelulární přežívání a dělení → aktivace Th1 buněk → tvorba tuberkulózního granulomu s kaseózní nekrózou (Langhansovy buňky). Primární (Ghonův) komplex = plicní ložisko + regionální lymfadenitida.",
            "klinicky": "• Primární TBC: Většinou asymptomatická, zhojení kalcifikací.<br>• Postprimární (reaktivovaná) TBC: Postihuje plicní hroty. Kašel, hemoptýza, noční poty, kachexie (úbytek hmotnosti). Extrapulmonální: bazální meningitida (hlavně u dětí), urogenitální, kostní (Pottova nemoc).",
            "laborator": "1. Mikroskopie: **Ziehl-Neelsenovo barvení** (červené tyčinky na modrém pozadí). 2. Kultivace: Löwenstein-Jensenova pevná půda (krémové drolivé kolonie, roste 3–6 týdnů), Šulova tekutá půda. 3. PCR GeneXpert (detekce DNA a rezistence k rifampicinu). 4. Nepřímé: IGRA (QuantiFERON-TB) a Mantoux (tuberkulinový test).",
            "terapie": "Iniciální fáze (2 měsíce): čtyřkombinace HRZE (Isoniazid, Rifampicin, Pyrazinamid, Ethambutol). Pokračovací fáze (4 měsíce): dvojkombinace HR."
        },
        "quiz": [
            {
                "q": "Která barvící metoda se používá pro průkaz Mycobacterium tuberculosis?",
                "options": [
                    "Barvení dle Grama",
                    "Barvení dle Ziehla-Neelsena",
                    "Giemsovo barvení",
                    "Burriho metoda"
                ],
                "correct": 1,
                "explanation": "Ziehl-Neelsenovo barvení využívá karbolfuchsin za horka a odbarvení kyselým alkoholem. Acidorezistentní mykobakterie zůstanou červené."
            },
            {
                "q": "Která čtyřkombinace antituberkulotik se podává v iniciální 2měsíční fázi léčení TBC?",
                "options": [
                    "Penicilin, Streptomycin, Doxycyklin, Ciprofloxacin",
                    "Isoniazid, Rifampicin, Pyrazinamid, Ethambutol",
                    "Vancomycin, Gentamicin, Metronidazol, Azitromycin",
                    "Fluconazol, Klindamycin, Cotrimoxazol, Erytromycin"
                ],
                "correct": 1,
                "explanation": "Standardní iniciální regimen pro TBC je HRZE: Isoniazid, Rifampicin, Pyrazinamid a Ethambutol po dobu 2 měsíců."
            },
            {
                "q": "Které buňky tvoří charakteristické jádro tuberkulózního granulomu v plicích?",
                "options": [
                    "Neutrofilní granulocyty",
                    "Langhansovy obrovské vícejaderné buňky a epiteloidní buňky",
                    "Eosinofily",
                    "Mastocyty"
                ],
                "correct": 1,
                "explanation": "Při TBC granulomu splývají aktivované makrofágy v epiteloidní buňky a Langhansovy vícejaderné obrovské buňky obklopující kaseózní nekrózu."
            }
        ]
    },
    "cast_b": {
        "title": "Pneumocystová pneumonie (PJP)",
        "keywords": [
            "Pneumocystis jirovecii",
            "intersticiální pneumonie",
            "AIDS",
            "cotrimoxazol",
            "indukované sputum"
        ],
        "content": {
            "definice": "<strong>Pneumocystis jirovecii:</strong> Atypická mikromyceta (ascomycetní houba). Původce oportunní intersticiální pneumonie u pacientů s poklesem CD4+ T-lymfocytů < 200/µl (AIDS).",
            "etiologie": "Nemá ergosterol v membráně (neúčinkují azoly a amfotericin B!), stěna obsahuje 1,3-β-D-glukan. Nelze kultivovat in vitro!",
            "patogeneze": "Reaktivace latentní nákazy v alveolech → plnění alveolů pěnovitým exsudátem → ztluštění alveolokapilární membrány → severe hypoxémie.",
            "klinicky": "Triáda: neproduktivní dráždivý kašel, progresivní námahová dyspnoe a subfebrilie.",
            "laborator": "BAL (bronchoalveolární laváž) nebo indukované sputum. Barvení stříbřením dle Grocotta, imunofluorescence s mAb, PCR.",
            "terapie": "Lék volby: Vysokodávkovaný Co-trimoxazol (TMP-SMX) i.v. po dobu 21 dní. Při hypoxii kortikosteroidy."
        },
        "quiz": [
            {
                "q": "Pneumocystis jirovecii je z taxonomického hlediska:",
                "options": [
                    "Prvok (Protozoon)",
                    "Gramnegativní bakterie",
                    "Houba (Mikromyceta)",
                    "Virus"
                ],
                "correct": 2,
                "explanation": "Sekvenování DNA jednoznačně zařadilo Pneumocystis jirovecii mezi houby."
            },
            {
                "q": "Lékem první volby v terapii i profilaxi pneumocystové pneumonie je:",
                "options": [
                    "Amfotericin B",
                    "Co-trimoxazol (TMP-SMX)",
                    "Penicilin G",
                    "Ciprofloxacin"
                ],
                "correct": 1,
                "explanation": "Co-trimoxazol (Trimethoprim-Sulfamethoxazol) je lékem první volby pro léčbu i profilaxi PJP."
            },
            {
                "q": "Pneumocystová pneumonie se rozvíjí typicky u HIV pozitivních pacientů, pokud poklesne hladina CD4+ T-lymfocytů pod:",
                "options": [
                    "500 / µl",
                    "200 / µl",
                    "50 / µl",
                    "1000 / µl"
                ],
                "correct": 1,
                "explanation": "Kritickou hranicí pro vznik PJP je pokles CD4+ T-buněk pod 200 v 1 mm³ krve."
            }
        ]
    }
},
{
    "id": "mikra-22",
    "cislo": 22,
    "skupina_a": "Bakteriologie",
    "skupina_b": "Mykologie",
    "cast_a": {
        "title": "Atypická (netuberkulózní) mykobakteria",
        "keywords": [
            "NTM",
            "M. avium",
            "M. kansasii",
            "M. marinum",
            "mykobakteriózy",
            "mycolacton"
        ],
        "content": {
            "definice": "<strong>Atypická (netuberkulózní, NTM) mykobakteria:</strong> Enviromentální mykobakteria v půdě a vodě. Nepřenášejí se z člověka na člověka.",
            "etiologie": "• <em>M. avium complex (MAC):</em> Plicní procesy u CHOPN, diseminované nákazy u AIDS.<br>• <em>M. kansasii:</em> Plicní plaky identické s TBC.<br>• <em>M. marinum:</em> Z vod a akvárií. U člověka tvoří akvarijní granulom na kůži končetin po poranění.<br>• <em>M. ulcerans:</em> Tvoří toxin mycolacton vyvolávající vřed Buruli v tropech.",
            "laborator": "Dekontaminace 4% NaOH (Petroff), kultivace (L-J, Šula) při 37 °C (u M. marinum při 30 °C!). identification pomocí MALDI-TOF, PCR.",
            "terapie": "Dlouhodobá kombinace: Klaritromycin/Azitromycin + Ethambutol + Rifampicin."
        },
        "quiz": [
            {
                "q": "Které netuberkulózní mykobakterium vyvolává tzv. 'akvarijní granulom' po poranění ve vodě?",
                "options": [
                    "Mycobacterium kansasii",
                    "Mycobacterium marinum",
                    "Mycobacterium bovis",
                    "Mycobacterium leprae"
                ],
                "correct": 1,
                "explanation": "M. marinum se vyskytuje ve vodě a akváriích a vstupuje drobnými oděrkami na kůži."
            },
            {
                "q": "Čím se liší netuberkulózní mykobakteriózy od klasické tuberkulózy vyvolané M. tuberculosis?",
                "options": [
                    "Nejsou acidorezistentní",
                    "Nepřenášejí se z člověka na člověka (jsou to enviromentální nákazy)",
                    "Způsobují je spirochety",
                    "Nelze je léčit žádnými antibiotiky"
                ],
                "correct": 1,
                "explanation": "NTM nákazy vznikají z prostředí; přenos z člověka na člověka nenastává."
            }
        ]
    },
    "cast_b": {
        "title": "Dermatomykózy a povrchové mykózy",
        "keywords": [
            "Dermatofyty",
            "Trichophyton",
            "Microsporum",
            "Epidermophyton",
            "Candida",
            "Pityriasis versicolor"
        ],
        "content": {
            "definice": "<strong>Dermatomykózy:</strong> Houbová onemocnění kůže, vlasů a nehtů vyvolaná dermatofyty, kvasinkami nebo Malasseziemi.",
            "etiologie": "• Dermatofytózy (Tinea): Vláknité houby využívající keratin. Rody: <em>Trichophyton, Microsporum, Epidermophyton</em>.<br>• Kandidózy kůže: <em>Candida albicans</em> (intertrigo, onychomykóza).<br>• <em>Pityriasis versicolor:</em> <em>Malassezia furfur</em>.<br>• <em>Erythrasma:</em> Corynebacterium minutissimum (bakteriální pseudo-mykóza).",
            "laborator": "KOH preparát (hydroxid rozpustí keratin) → přímá mikroskopie hyf a artrokonidií. Kultivace na Sabouraudově / Mykosel agaru. Woodova lampa (UV fluorescence u Microsporum).",
            "terapie": "Lokální: Terbinafin, Clotrimazol, Bifonazol, Nystatin. Systémová: Terbinafin p.o., Fluconazol, Itraconazol."
        },
        "quiz": [
            {
                "q": "Pityriasis versicolor je povrchové mykotické onemocnění vyvolané:",
                "options": [
                    "Trichophyton rubrum",
                    "Malassezia furfur",
                    "Candida albicans",
                    "Microsporum canis"
                ],
                "correct": 1,
                "explanation": "Malassezia furfur tvoří charakteristické šupinaté hyper/hypopigmentované skvrny na trupu."
            },
            {
                "q": "Které činidlo se přidává k seškrabu kůže při přímé mikroskopii pro rozvolnění lidského keratinu?",
                "options": [
                    "Čistý ethanol",
                    "10–20% KOH (hydroxid draselný)",
                    "Kyselina chlorovodíková",
                    "Formalín"
                ],
                "correct": 1,
                "explanation": "Hydroxid draselný rozpustí lidský keratin a epitelie, což odhalí odolné stěny houbových hyf."
            }
        ]
    }
},
{
    "id": "mikra-23",
    "cislo": 23,
    "skupina_a": "Bakteriologie",
    "skupina_b": "Mykologie",
    "cast_a": {
        "title": "Mycobacterium leprae a odběry na mykobakteria",
        "keywords": [
            "M. leprae",
            "lepra",
            "Hansenův bacil",
            "facies leontina",
            "dekontaminace",
            "Petroff"
        ],
        "content": {
            "definice": "<strong>Mycobacterium leprae (Hansenův bacil):</strong> Acidorezistentní bakterie s tropismem pro periferní nervy (Schwannovy buňky) a kůži. Nelze kultivovat in vitro!",
            "etiologie": "Přenos dlouhodobým těsným kontaktem. Vyvolává buď tuberkuloidní lepru (silná Th1 imunita, málo bakterií), nebo lepromatózní lepru (slabí Th1, masivní infekce).",
            "klinicky": "• Tuberkuloidní: necitlivé depigmentované skvrny na kůži, postižení nervů.<br>• Lepromatózní: znetvoření obličeje (facies leontina), ztráta prstů, slepota, masivní ložiska.",
            "laborator": "Seškraby z kožních lézí nebo nosní sliznice barvené dle Ziehla-Neelsena (acidorezistentní tyčinky a globi).<br>Odběr na TBC: 3 vzorky sputa, dekontaminace 4% NaOH (Petroff) k selekci mykobakterií."
        },
        "quiz": [
            {
                "q": "Proč nelze Mycobacterium leprae dokázat kultivací na Löwenstein-Jensenově půdě?",
                "options": [
                    "Je to anaerobní bakterie",
                    "Je to obligátní intracelulární patogen nelze kultivovat in vitro",
                    "Kultivační půdu zničí svými toxiny",
                    "Roste pouze v agarovém médiu s krví"
                ],
                "correct": 1,
                "explanation": "M. leprae nelze kultivovat na umělých živných médiích in vitro (množí se pouze v živých tkáních)."
            },
            {
                "q": "Metoda dekontaminace nesterilních vzorků sputa dle Petroffa před kultivací TBC využívá vlastností mykobakterií odolávat působení:",
                "options": [
                    "4% NaOH (hydroxidu sodného)",
                    "Horké vodě",
                    "Čistému acetonu",
                    "Ultrafialovému záření"
                ],
                "correct": 0,
                "explanation": "Působení 4% NaOH zničí doprovodnou flóru úst a dýchacích cest, zatímco odolné stěny mykobakterií přežijí."
            }
        ]
    },
    "cast_b": {
        "title": "Fusarióza, feohyfomykózy a chromoblastomykózy",
        "keywords": [
            "Fusarium",
            "feohyfomykózy",
            "chromoblastomykóza",
            "sklerotická tělíska",
            "mykotoxiny"
        ],
        "content": {
            "definice": "Vzácnější oportunní a subkutánní houbové infekce vyvolané vláknitými mikromycetami.",
            "etiologie": "• Fusarióza: Rody <em>Fusarium solani, F. oxysporum</em>. Keratózy, onychomykózy a u neutropenických těžké diseminované infekce.<br>• Feohyfomykózy: Působeny tmavě pigmentovanými (dematiaceovými) houbami (melanin ve stěně, e.g. <em>Alternaria, Cladophialophora</em>).<br>• Chromoblastomykóza: Tropická subkutánní infekce po poranění, tvořící <strong>sklerotická (muriformní) tělíska</strong> (hnědé buňky)."
        },
        "quiz": [
            {
                "q": "Typickým mikroskopickým nálezem v tkáňovém vzorku u chromoblastomykózy jsou:",
                "options": [
                    "Cysty Pneumocystis jirovecii",
                    "Sklerotická (muriformní) tělíska",
                    "Endospory Coccidioides",
                    "Sphaeruly"
                ],
                "correct": 1,
                "explanation": "Pro chromoblastomykózu jsou patognomická sklerotická tělíska (hnědé silnostěnné kulovité buněčné sestavy)."
            },
            {
                "q": "Jaké zbarvení mají vlákna a struktury feohyfomykózních hub v mikroskopickém preparátu?",
                "options": [
                    "Bezbarvé / průhledné",
                    "Tmavě hnědé až černé (díky melaninu v buněčné stěně)",
                    "Světle růžové",
                    "Zelenožluté"
                ],
                "correct": 1,
                "explanation": "Dematiaceoví houby syntetizují melanin, který dává jejich hyfám a konidiím tmavě hnědé až černé zbarvení."
            }
        ]
    }
},
{
    "id": "mikra-24",
    "cislo": 24,
    "skupina_a": "Farmakoterapie",
    "skupina_b": "Virologie",
    "cast_a": {
        "title": "Antimykotika – klasifikace a mechanizmus účinku",
        "keywords": [
            "Amfotericin B",
            "Azoly",
            "Echinokandiny",
            "Flucytosin",
            "Terbinafin",
            "ergosterol"
        ],
        "content": {
            "definice": "<strong>Antimykotika:</strong> Léčiva určená k terapii fungálních infekcí. Cílí na struktury specifické pro houbovou buňku (ergosterol v membráně, β-1,3-D-glukan v buněčné stěně).",
            "klasifikace": "• <strong>Polyeny (Amfotericin B, Nystatin):</strong> Vážou se na ergosterol → tvorba pórů → lýza. Výrazná nefrotoxicita.<br>• <strong>Azoly (Fluconazol, Voriconazol, Posaconazol):</strong> Inhibice 14-α-demethylázy lanosterolu → blokáda syntézy ergosterolu. Fungistatické.<br>• <strong>Echinokandiny (Caspofungin, Micafungin, Anidulafungin):</strong> Inhibice β-(1,3)-D-glukan syntetázy → narušení buněčné stěny. Fungicidní pro Kandidy.<br>• <strong>Antimetabolity (Flucytosin):</strong> Inhibice RNA a DNA syntézy. Použití u kryptokokové meningitidy.<br>• <strong>Allylaminy (Terbinafin):</strong> Inhibice skvalenepoxidázy → na dermatofyty."
        },
        "quiz": [
            {
                "q": "Která skupina antimykotik působí inhibicí syntézy β-(1,3)-D-glukanu buněčné stěny hub?",
                "options": [
                    "Polyeny",
                    "Azoly",
                    "Echinokandiny",
                    "Allylaminy"
                ],
                "correct": 2,
                "explanation": "Echinokandiny (caspofungin, anidulafungin) blokují tvorbu β-(1,3)-D-glukanu, čímž způsobují osmotickou lýzu houbové buňky."
            },
            {
                "q": "Hlavním orgánově limitujícím nežádoucím účinkem systémově podávaného Amfotericinu B je:",
                "options": [
                    "Nefrotoxicita",
                    "Kardiomyopatie",
                    "Aplastická anémie",
                    "Ototoxicita"
                ],
                "correct": 0,
                "explanation": "Amfotericin B vyvolává renální vasokonstrikci a přímé poškození tubulů vedoucí k nefrotoxicitě."
            },
            {
                "q": "Flucytosin (5-FC) se v terapii systémových mykóz podává nejčastěji v kombinaci s Amfotericinem B u:",
                "options": [
                    "Kandidové kolpitidy",
                    "Kryptokokové meningitidy",
                    "Tinea pedis",
                    "Pityriasis versicolor"
                ],
                "correct": 1,
                "explanation": "Kombinace Amfotericinu B a Flucytosinu je u kryptokokové meningitidy (C. neoformans) synergická."
            }
        ]
    },
    "cast_b": {
        "title": "HIV – charakteristika, klinika a diagnostika",
        "keywords": [
            "HIV-1",
            "AIDS",
            "CD4+ lymfocyty",
            "opportunní infekce",
            "Western blot",
            "HAART/ART"
        ],
        "content": {
            "definice": "<strong>HIV (Human Immunodeficiency Virus):</strong> Obalený ssRNA-RT virus z čeledi <em>Retroviridae</em>, rod <em>Lentivirus</em>. Způsobuje chronickou destrukci CD4+ T-lymfocytů vedoucí k AIDS.",
            "etiologie": "Obsahuje reverzní transkriptázu, integrázu, proteázu a obalové glykoproteiny gp120 a gp41. gp120 se váže na CD4 a koreceptory CCR5/CXCR4.",
            "klinicky": "• Akutní retrovirální syndrom (chřipkovité příznaky, p24 antigen).<br>• Klinická latence.<br>• AIDS (CD4 < 200/µl): oportunní infekce (PJP, kryptokokóza, CMV, Toxoplasma) a Kaposiho sarkom.",
            "laborator": "Screening: ELISA 4. generace (průkaz protilátek a antigenu p24). Konfirmace: Western blot / LIA. Sledování: RT-PCR (virová nálož) a počet CD4+ lymfocytů.",
            "terapie": "Kombinovaná antiretrovirová terapie (ART / HAART) kombinující různé třídy léků (NRTI, NNRTI, integrázové a proteázové inhibitory)."
        },
        "quiz": [
            {
                "q": "Který antigen se detekuje v kombinovaném sérologickém testu 4. generace pro včasnou diagnostiku HIV?",
                "options": [
                    "gp120",
                    "p24",
                    "gp41",
                    "p17"
                ],
                "correct": 1,
                "explanation": "Kapsidový antigen p24 se objevuje v séru ještě před tvorbou protilátek (v okně 2–3 týdnů po nákaze)."
            },
            {
                "q": "Pokles počtu CD4+ T-lymfocytů pod jakou hranici je kritériem pro definici stádia AIDS?",
                "options": [
                    "500 / µl",
                    "200 / µl",
                    "50 / µl",
                    "1000 / µl"
                ],
                "correct": 1,
                "explanation": "Hladina CD4+ lymfocytů pod 200/µl indikuje těžký imunodeficit."
            }
        ]
    }
},
{
    "id": "mikra-25",
    "cislo": 25,
    "skupina_a": "Bakteriologie",
    "skupina_b": "Parazitologie",
    "cast_a": {
        "title": "Mykoplasmata a chlamydie",
        "keywords": [
            "Mycoplasma pneumoniae",
            "Chlamydia trachomatis",
            "elementární tělísko",
            "atypická pneumonie",
            "tetracykliny"
        ],
        "content": {
            "definice": "<strong>Mykoplasmata a Chlamydie:</strong> Bakterie bez klasické peptidoglykanové stěny, respektive obligátní intracelulární patogeni.",
            "etiologie": "• Mykoplasmata (M. pneumoniae, Ureaplasma): nemají stěnu (pouze steroly v membráně) → rezistence k β-laktamům!<br>• Chlamydie (C. trachomatis, C. pneumoniae): životní cyklus s **elementárním tělískem** (infekční, extracelulární) a **retikulárním tělískem** (intracelulární, dělí se).",
            "klinicky": "• M. pneumoniae: atypická pneumonie (chladové aglutininy, suchý kašel).<br>• C. trachomatis: sérotypy A-C (trachom), D-K (uretritidy, cervicitidy, novorozenecká konjunktivitida), L1-L3 (Lymphogranuloma venereum).",
            "laborator": "Chlamydie nelze kultivovat na agaru! Metoda volby: PCR (NAAT).",
            "terapie": "Makrolidy (Azitromycin) nebo Tetracykliny (Doxycyklin). β-laktamy jsou neúčinné!"
        },
        "quiz": [
            {
                "q": "Forma chlamydie, která je infekční a přežívá v extracelulárním prostředí, se nazývá:",
                "options": [
                    "Retikulární tělísko",
                    "Elementární tělísko",
                    "Tachyzoit",
                    "Sporozoit"
                ],
                "correct": 1,
                "explanation": "Elementární tělísko (EB) je infekční forma chlamydie přizpůsobená přežití mimo buňku hostitele."
            },
            {
                "q": "Proč jsou peniciliny a cefalosporiny zcela neúčinné při léčbě infekcí vyvolaných Mycoplasma pneumoniae?",
                "options": [
                    "Mykoplasmata produkují masivně penicilinázu",
                    "Mykoplasmata nemají buněčnou stěnu (chybí peptidoglykan)",
                    "Mykoplasmata jsou striktní anaeroby",
                    "Mykoplasmata se vyskytují pouze v nehtové ploténce"
                ],
                "correct": 1,
                "explanation": "Mykoplasmata postrádají buněčnou stěnu a peptidoglykan, na jehož syntézu β-laktamová antibiotika cílí."
            }
        ]
    },
    "cast_b": {
        "title": "Trypanosomy – spavá nemoc a Chagasova choroba",
        "keywords": [
            "Trypanosoma brucei",
            "Trypanosoma cruzi",
            "moucha tse-tse",
            "Chagasova nemoc",
            "Winterbottom",
            "Romana"
        ],
        "content": {
            "definice": "<strong>Trypanosomy:</strong> Bičíkovití krevní a tkáňoví prvoci přenášení krvesajícím hmyzem.",
            "etiologie": "• Africká trypanosomóza: <em>Trypanosoma brucei</em>. Přenáší moucha Tse-tse. Povrchový VSG antigen podléhá rychlé variaci.<br>• Americká trypanosomóza: <em>Trypanosoma cruzi</em>. Přenáší dravé ploštice výkaly při kousnutí.",
            "klinicky": "• Spavá nemoc: Winterbottomovo znamení (zduření krčních uzlin) → CNS fáze (meningoencefalitida, somnolence, koma).<br>• Chagasova nemoc: Romanův příznak (otok víčka) → chronická kardiomyopatie, megacolon a megaesophagus.",
            "laborator": "Mikroskopie periferní krve (tlustá kapka a nátěr barvený Giemsou), likvoru. Průkaz amastigotů v biopsii.",
            "terapie": "Africká: Suramin, Pentamidin (1. fáze), Melarsoprol, Eflornithin (2. fáze). Americká: Benznidazol, Nifurtimox."
        },
        "quiz": [
            {
                "q": "Který členovec slouží jako hlavní přenašeč (vektor) spavé nemoci vyvolané Trypanosoma brucei?",
                "options": [
                    "Komár rodu Anopheles",
                    "Moucha Tse-tse (rod Glossina)",
                    "Dravá ploštice (rod Triatoma)",
                    "Blecha morová"
                ],
                "correct": 1,
                "explanation": "Spavou nemoc přenáší moucha Tse-tse (Glossina) slinami během sání krve hostitele."
            },
            {
                "q": "Co tvoří charakteristický klinický nález u akutní fáze Chagasova onemocnění?",
                "options": [
                    "Opistotonus",
                    "Romanův příznak (jednostranný nebolestivý otok očních víček a spojivky)",
                    "Winterbottomovo znamení",
                    "Zubní kaz"
                ],
                "correct": 1,
                "explanation": "Romanův příznak je klasický projev průniku T. cruzi do spojivky po vmasírování výkalů ploštice."
            }
        ]
    }
},
{
    "id": "mikra-26",
    "cislo": 26,
    "skupina_a": "Bakteriologie",
    "skupina_b": "Parazitologie",
    "cast_a": {
        "title": "Spirochety (Borrelia, Treponema, Leptospira)",
        "keywords": [
            "Borrelia burgdorferi",
            "Treponema pallidum",
            "Leptospira interrogans",
            "syfilis",
            "borelióza",
            "Weilova nemoc"
        ],
        "content": {
            "definice": "<strong>Spirochety:</strong> Tenké spirálovité bakterie s endoflagely zajišťujícími rotační pohyb.",
            "etiologie": "• <em>Treponema pallidum:</em> Původce syfilis. Nelze kultivovat in vitro.<br>• <em>Borrelia burgdorferi:</em> Původce Lymské boreliózy. Přenašeč klíště <em>Ixodes ricinus</em>.<br>• <em>Leptospira interrogans:</em> Původce leptospirózy. Přenos vodou kontaminovanou močí hlodavců.",
            "klinicky": "• Syfilis: 1. stadium (ulcus durum), 2. stadium (exantém, condylomata lata), 3. stadium (gummata, tabes dorsalis, kardiovaskulární postižení).<br>• Borelióza: 1. stadium (erythema migrans), 2. stadium (neuroborelióza, lymfocytom, meningoradikulitida), 3. stadium (artritida, acrodermatitis chronica atrophicans).<br>• Leptospiróza: chřipkovité stadium → Weilova nemoc (žloutenka, renální selhání, krvácení).",
            "laborator": "Syfilis: zástinová mikroskopie z vředu, screening netreponemový (RRR, VDRL), konfirmace specifickými treponemovými testy (TPHA, ELISA, WB). Borelióza: sérologie ELISA + Western Blot.",
            "terapie": "Syfilis: Lék volby: **Penicilin G** (i.m. benzathin-penicilin). Borelióza: Doxycyklin, Ceftriaxon."
        },
        "quiz": [
            {
                "q": "Který sérologický test na syfilis patří mezi specifické treponemové testy používané k potvrzení reaktivity screeningu?",
                "options": [
                    "RRR (Rychlá reaginová reakce)",
                    "VDRL (Venereal Disease Research Laboratory)",
                    "TPHA (Treponema pallidum hemaglutinační test)",
                    "Weilova-Felixova reakce"
                ],
                "correct": 2,
                "explanation": "TPHA využívá specifické treponemové antigeny a zůstává pozitivní po celý život i po úspěšném vyléčení."
            },
            {
                "q": "Jaký klinický projev je typický pro první stádium Lymské boreliózy a objevuje se obvykle 1–3 týdny po přisátí klíštěte?",
                "options": [
                    "Opistotonus",
                    "Erythema migrans (stěhovavé zarudnutí s centrálním vyblednutím)",
                    "Ulcus durum",
                    "Karditida"
                ],
                "correct": 1,
                "explanation": "Erythema migrans je patognomická kožní léze s průměrem větším než 5 cm, která se centrifugálně šíří a uprostřed bledne."
            }
        ]
    },
    "cast_b": {
        "title": "Leishmanie – kožní, slizniční a viscerální leishmanióza",
        "keywords": [
            "Leishmania donovani",
            "kala-azar",
            "pískomil",
            "amastigot",
            "antimon"
        ],
        "content": {
            "definice": "<strong>Leishmanie:</strong> Intracelulární prvoci napadající makrofágy. Přenašečem je krevsající hmyz rodu <em>Phlebotomus</em>.",
            "etiologie": "• Viscerální leishmanióza (kala-azar): <em>Leishmania donovani, L. infantum</em>.<br>• Kožní leishmanióza (orientální vřed): <em>L. tropica, L. major</em>.<br>• Mukokutánní leishmanióza (espundia): <em>L. braziliensis</em> (destrukce chrupavek nosu a úst).",
            "klinicky": "Viscerální (kala-azar): splenomegalie, hepatomegalie, horečky, pancytopenie a šedavá hyperpigmentace kůže (černá nemoc). Kožní: nebolestivý vřed s vyvýšenými okraji v místě kousnutí.",
            "laborator": "Nález **amastigotů** (bezbičíkatých buněk s kinetoplastem) v nátěrech z kostní dřeně, sleziny nebo biopsie z okrajů vředu barvených Giemsou. PCR.",
            "terapie": "Pentavalentní antimon (Meglumin), Amfotericin B, Miltefosin."
        },
        "quiz": [
            {
                "q": "Které stádium leishmanií se nachází v buňkách mononukleárního fagocytárního systému (makrofázích) infikovaného člověka?",
                "options": [
                    "Promastigot (bičíkatá forma)",
                    "Amastigot (bezbičíkatá intracelulární forma)",
                    "Sporozoit",
                    "Cysta"
                ],
                "correct": 1,
                "explanation": "Promastigoti z phlebotoma jsou pohlceni makrofágy, kde ztrácejí bičík a transformují se v amastigoty."
            },
            {
                "q": "Viscerální leishmanióza (kala-azar) vyvolaná Leishmania donovani se projevuje triádou:",
                "options": [
                    "Horečka, masivní hepatosplenomegalie a pancytopenie",
                    "Hematurie, dysurie a kalcifikace měchýře",
                    "Chabá paréza, slepota a vypadávání vlasů",
                    "Opistotonus, trismus a risus sardonicus"
                ],
                "correct": 0,
                "explanation": "Masivní splenomegalie s útlumem kostní dřeně a horečkami je typický obraz kala-azar."
            }
        ]
    }
},
{
    "id": "mikra-27",
    "cislo": 27,
    "skupina_a": "Farmakoterapie",
    "skupina_b": "Parazitologie",
    "cast_a": {
        "title": "Peniciliny – základní a kombinované",
        "keywords": [
            "Penicilin G",
            "Amoxicilin",
            "Kyselina klavulanová",
            "ampicilin",
            "oxacilin",
            "betalaktamáza"
        ],
        "content": {
            "definice": "<strong>Peniciliny:</strong> β-laktamová baktericidní antibiotika. Blokují transpeptidázy (PBP - penicillin-binding proteins) odpovědné za syntézu peptidoglykanu stěny.",
            "klasifikace": "• <strong>Základní:</strong> Penicilin G (i.v. - syfilis, streptokokové infekce, meningokok), Penicilin V (p.o. - streptokoková tonzilitida).<br>• <strong>Odolné k penicilináze:</strong> Oxacilin (lék volby pro citlivé S. aureus - MSSA).<br>• <strong>Aminopeniciliny:</strong> Ampicilin, Amoxicilin (G+, Listeria, enterokoky, někteří G-).<br>• <strong>Potencované peniciliny (s inhibitory β-laktamáz):</strong> Amoxicilin/klavulanát (p.o.), Ampicilin/sulbaktam (i.v.), Piperacilin/tazobaktam (i.v. - s protipseudomonádovým účinkem)."
        },
        "quiz": [
            {
                "q": "Které antibiotikum je lékem první volby pro cílenou léčbu infekcí vyvolaných meticilin-citlivým Staphylococcus aureus (MSSA)?",
                "options": [
                    "Oxacilin",
                    "Ampicilin",
                    "Penicilin G",
                    "Vankomycin"
                ],
                "correct": 0,
                "explanation": "Oxacilin je stabilní vůči stafylokokové beta-laktamáze a představuje lék volby pro závažné MSSA infekce."
            },
            {
                "q": "Který inhibitor beta-laktamáz se přidává k amoxicilinu k obnovení jeho účinku proti kmenům produkujícím širokospektré beta-laktamázy?",
                "options": [
                    "Sulbaktam",
                    "Tazobaktam",
                    "Kyselina klavulanová",
                    "Cilastatin"
                ],
                "correct": 2,
                "explanation": "Kyselina klavulanová se ireverzibilně váže na aktivní místo beta-laktamázy (sebevražedný inhibitor) a chrání amoxicilin před degradací."
            }
        ]
    },
    "cast_b": {
        "title": "Střevní protozoární nákazy (Giardia, Entamoeba, Cryptosporidium)",
        "keywords": [
            "Giardia lamblia",
            "Entamoeba histolytica",
            "Cryptosporidium parvum",
            "dysenterie",
            "cysty",
            "metronidazol"
        ],
        "content": {
            "definice": "<strong>Střevní protozoózy:</strong> Infekce vyvolané jednobuněčnými prvoky, přenášené fekálně-orální cestou pozřením odolných cyst z kontaminované vody nebo potravy.",
            "etiologie": "• <em>Entamoeba histolytica:</em> Původce amébové úplavice. Invazivní trofozoit tvoří proteázy, narušuje sliznici (vředy tvaru lahve).<br>• <em>Giardia lamblia (bičenka střevní):</em> Trofozoit s přísavným diskem přisedá na enterocyty duodena → malabsorpce tuků.<br>• <em>Cryptosporidium parvum:</em> Coccidie parazitující v enterocytech. Oocysty jsou acidorezistentní.",
            "klinicky": "• Amébiáza: krvavé hlenovité průjmy s tenesmy (amébová úplavice), komplikací je amébový absces jater (čokoládový hnis).<br>• Giardiáza: vodnaté, mastné a silně páchnoucí stolice, nadýmání, hubnutí.<br>• Kryptosporidióza: profúzní vodnaté průjmy; u pacientů s AIDS těžká dehydratace s rizikem smrti.",
            "laborator": "Mikroskopie stolice (nativ a barvení Faustovou koncentrační metodou k průkazu cyst). Průkaz antigenů (ELISA), PCR. U Cryptosporidia barvení dle Miláčka (modifikované Ziehl-Neelsen).",
            "terapie": "Metronidazol (pro Amébu a Giardii). Pro Cryptosporidium: Nitazoxanid, rehydratace."
        },
        "quiz": [
            {
                "q": "Který střevní prvok způsobuje krvavě-hlenovité průjmy a může u pacienta vyvolat mimostřevní komplikaci v podobě jaterního abscesu?",
                "options": [
                    "Giardia lamblia",
                    "Entamoeba histolytica",
                    "Cryptosporidium parvum",
                    "Trichomonas vaginalis"
                ],
                "correct": 1,
                "explanation": "Entamoeba histolytica invaduje střevní stěnu a portálním oběhem může vycestovat do jater, kde zakládá amébový absces."
            },
            {
                "q": "Giardia lamblia parazituje v tenkém střevě (duodenu) člověka. Její přítomnost vede typicky k:",
                "options": [
                    "Tvorbě hlubokých vředů s krvácením",
                    "Malabsorpci tuků (steatorhei) a nadýmání bez přítomnosti krve ve stolici",
                    "Vzniku plicních eozinofilních infiltrátů",
                    "Ztrátě vlasů"
                ],
                "correct": 1,
                "explanation": "Trofozoiti mechanicky pokrývají sliznici duodena a jejuna přísavnými disky, čímž blokují absorpci tuků."
            }
        ]
    }
},
{
    "id": "mikra-28",
    "cislo": 28,
    "skupina_a": "Farmakoterapie",
    "skupina_b": "Parazitologie",
    "cast_a": {
        "title": "Cefalosporiny – rozdělení a indikace",
        "keywords": [
            "Cefazolin",
            "Cefuroxim",
            "Ceftriaxon",
            "Cefepim",
            "Ceftarolin",
            "pseudomonas"
        ],
        "content": {
            "definice": "<strong>Cefalosporiny:</strong> β-laktamová baktericidní antibiotika. Vyšší odolnost k β-laktamázám než peniciliny. S vyšší generací roste účinnost na G- a klesá/mění se účinnost na G+.",
            "klasifikace": "• <strong>I. generace (Cefazolin i.v.):</strong> Výborný na G+ (stafylokoky, streptokoky). Cefazolin je lékem volby pro chirurgickou profylaxi!<br>• <strong>II. generace (Cefuroxim, Cefoxitin):</strong> Vyšší G- spektrum. Komunitní infekce.<br>• <strong>III. generace (Ceftriaxon, Cefotaxim, Ceftazidim):</strong> Ceftriaxon/Cefotaxim výborně pronikají do likvoru (léčba meningitid). **Ceftazidim má protipseudomonádový účinek!**<br>• <strong>IV. generace (Cefepim):</strong> Široké G+ i G- spektrum včetně <em>P. aeruginosa</em>. Sepse.<br>• <strong>V. generace (Ceftarolin):</strong> Účinný na **MRSA** (vazba na mutantní PBP2a)."
        },
        "quiz": [
            {
                "q": "Který cefalosporin III. generace má výrazný protipseudomonádový účinek?",
                "options": [
                    "Cefotaxim",
                    "Ceftriaxon",
                    "Ceftazidim",
                    "Cefazolin"
                ],
                "correct": 2,
                "explanation": "Ceftazidim je cefalosporin 3. generace se specifickým vysokým účinkem proti Pseudomonas aeruginosa."
            },
            {
                "q": "Jednorázové i.m. nebo i.v. podání Ceftriaxonu je standardním způsobem léčby pro:",
                "options": [
                    "Nekomplikovanou kapavku (Neisseria gonorrhoeae)",
                    "Lymskou boreliózu 3. fáze",
                    "Pneumocystovou pneumonii",
                    "Pseudomembranózní kolitidu"
                ],
                "correct": 0,
                "explanation": "Ceftriaxon (500 mg až 1 g i.m. s lidokainem) je lékem volby pro nekomplikované kapavčité infekce."
            }
        ]
    },
    "cast_b": {
        "title": "Trichomonas vaginalis a urogenitální bičíkovci",
        "keywords": [
            "Trichomonas vaginalis",
            "trichomoniáza",
            "poševní výtok",
            "metronidazol",
            "axostyl"
        ],
        "content": {
            "definice": "<strong>Trichomonas vaginalis (Bičenka poševní):</strong> Bičíkovec napadající urogenitální trakt člověka. Přenáší se výhradně sexuálním stykem. **Netvoří cystické stádium!**",
            "etiologie": "Trofozoit tvaru hrušky se 4 volnými bičíky, undulující membránou a osní tyčinkou (axostyl). Přemnožuje se při poševním pH > 4.5.",
            "klinicky": "Ženy: zpěněný, hojný zelenokřídlový páchnoucí výtok, jahodové hrdlo, dysurie, pruritus.<br>Muži: asymptomatické nosičství v uretře a prostatě; mírná uretritida.",
            "laborator": "1. Nativní preparát z poševního sekretu (záchyt kmitajících trofozoitů).<br>2. Kultivace v C.A.T. médiu, PCR.",
            "terapie": "Metronidazol p.o. **Vždy je nutná současná léčba obou sexuálních partnerů!**"
        },
        "quiz": [
            {
                "q": "Proč je nutné přiléčit sexuálního partnera při záchytu Trichomonas vaginalis u ženy?",
                "options": [
                    "Partner má vždy těžkou formou orchitidy",
                    "Muži bývají asymptomatičtí přenašeči a došlo by k okamžité reinfekci",
                    "Trichomonas způsobuje neplodnost u mužů do 24h",
                    "Prvok se přenáší pouze vzduchem v domácnosti"
                ],
                "correct": 1,
                "explanation": "Muži bývají bezpříznakovými rezervoáry v uretře; bez léčby obou partnerů nastává okamžitá reinfekce."
            },
            {
                "q": "Čím se Trichomonas vaginalis liší od většiny ostatních střevních a tkáňových prvoků?",
                "options": [
                    "Vytváří extrémně odolné dvojité cysty",
                    "Vytváří pouze trofozoity a zcela netvoří cystické stádium",
                    "Nemá žádná jádra ani bičíky",
                    "Množí se pouze v erytrocytech"
                ],
                "correct": 1,
                "explanation": "Trichomonas vaginalis existuje výhradně ve formě trofozoitu a netvoří odolné cysty, proto je odkázána na přímý přenos slizničním kontaktem."
            }
        ]
    }
},
{
    "id": "mikra-29",
    "cislo": 29,
    "skupina_a": "Farmakoterapie",
    "skupina_b": "Parazitologie",
    "cast_a": {
        "title": "Karbapenemy a karbapenemázy",
        "keywords": [
            "Meropenem",
            "Imipenem",
            "Ertapenem",
            "KPC",
            "NDM",
            "ESBL",
            "nozokomiální"
        ],
        "content": {
            "definice": "<strong>Karbapenemy:</strong> Ultra-širokospektrá β-laktamová záložní antibiotika vyhrazená pro těžké nozokomiální infekce a kmeny s produkcí ESBL a AmpC.",
            "klasifikace": "Meropenem, Imipenem (+ Cilastatin), Ertapenem.<br>• Účinek: Baktericidní na G+, G- (včetně P. aeruginosa) a anaeroby.<br>• Ertapenem NEÚČINKUJE na Pseudomonas a Acinetobacter!<br>• Karbapenemázy: KPC (třída A), NDM-1 / MBL (třída B), OXA-48 (třída D).",
            "terapie": "Nozokomiální sepse, febrilní neutropenie, závažné intraabdominální infekce."
        },
        "quiz": [
            {
                "q": "Který karbapenem nemá účinek proti Pseudomonas aeruginosa?",
                "options": [
                    "Meropenem",
                    "Imipenem",
                    "Ertapenem",
                    "Doripenem"
                ],
                "correct": 2,
                "explanation": "Ertapenem má sice dlouhý poločas, ale chybí mu účinnost proti Pseudomonas aeruginosa a Acinetobacter spp."
            },
            {
                "q": "Novodobé Metalo-β-laktamázy (MBL, např. NDM-1) způsobují rezistenci bakterií vůči karbapenemům a vyžadují k činnosti iont:",
                "options": [
                    "Vápníku (Ca²⁺)",
                    "Zinku (Zn²⁺)",
                    "Železa (Fe³⁺)",
                    "Hořčíku (Mg²⁺)"
                ],
                "correct": 1,
                "explanation": "Metalo-beta-laktamázy (třída B, např. NDM-1) využívají ve svém aktivním místě iont zinku Zn²⁺ k hydrolytickému štěpení β-laktamového kruhu."
            }
        ]
    },
    "cast_b": {
        "title": "Volně žijící améby (Naegleria, Acanthamoeba, Balamuthia)",
        "keywords": [
            "Naegleria fowleri",
            "Acanthamoeba",
            "Balamuthia",
            "PAM",
            "amébová keratitida",
            "kontaktní čočky"
        ],
        "content": {
            "definice": "<strong>Volně žijící (amfizoické) améby:</strong> Měňavky běžně žijící v prostředí (teplá voda, půda), které mohou způsobit letální neuroinfekce a oční infekce.",
            "etiologie": "1. <em>Naegleria fowleri:</em> Primární amébová meningoencefalitida (PAM) po koupání v teplé vodě přes čichovou kost. Smrtnost > 98 %.<br>2. <em>Acanthamoeba spp.:</em> Amébová keratitida u nositelů kontaktních čoček (nákaza z vodovodu). GAE u imunodeficitů.<br>3. <em>Balamuthia mandrillaris:</em> Chronická granulomatózní encefalitida.",
            "terapie": "Naegleria: Amfotericin B + Miltefosin. Acanthamoeba keratitida: Chlorhexidin / Propamidin oční kapky."
        },
        "quiz": [
            {
                "q": "Naegleria fowleri proniká do mozku člověka nejčastěji při koupání cestou:",
                "options": [
                    "Zvukovodu",
                    "Sliznice nosní přes lamina cribrosa čichové kosti",
                    "Oční spojivky",
                    "Kousnutím komára"
                ],
                "correct": 1,
                "explanation": "Voda s trofozoity vnikne do nosu → parazit proniká podél nervus olfactorius přes lamina cribrosa přímo do čelního laloku mozku."
            },
            {
                "q": "Nebezpečná amébová keratitida způsobená Acanthamoeba spp. vzniká nejčastěji v souvislosti s:",
                "options": [
                    "Konzumací mořských ryb",
                    "Nedostatečnou hygienou a oplachováním kontaktních čoček vodovodní vodou",
                    "Inhalací spor v lesním prostředí",
                    "Aplikací očních kapek s neomycinem"
                ],
                "correct": 1,
                "explanation": "Oplachování neschválených kontaktních čoček vodou z vodovodu přenáší Acanthamoebu na rohovku s vznikem krutě bolestivé keratitidy."
            }
        ]
    }
},
{
    "id": "mikra-30",
    "cislo": 30,
    "skupina_a": "Farmakoterapie",
    "skupina_b": "Parazitologie",
    "cast_a": {
        "title": "Aminoglykosidy – spektrum a toxicita",
        "keywords": [
            "Gentamicin",
            "Amikacin",
            "Tobramycin",
            "Streptomycin",
            "nefrotoxicita",
            "ototoxicita"
        ],
        "content": {
            "definice": "<strong>Aminoglykosidy:</strong> Rychle baktericidní antibiotika inhibující proteosyntézu ireverzibilní vazbou na 30S podjednotku ribozomu.",
            "klasifikace": "Gentamicin, Amikacin, Tobramycin, Streptomycin.<br>• Spektrum: Aerobní G- tyčky a stafylokoky. Neúčinkují na anaeroby.<br>• Toxicita: Nefrotoxicita a Ototoxicita. Vyžadují TDM (monitrování hladin).",
            "terapie": "G- urosepse, endokarditidy (v synergii s peniciliny)."
        },
        "quiz": [
            {
                "q": "Které dva hlavní toxické nežádoucí účinky limitují podávání aminoglykosidů?",
                "options": [
                    "Hepatotoxicita a kardiotoxicita",
                    "Nefrotoxicita a ototoxicita",
                    "Kardiomyopatie a myelotoxita",
                    "Pankreatitida a neurotoxicita"
                ],
                "correct": 1,
                "explanation": "Aminoglykosidy se kumulují v ledvinných tubulech a ve vnitřním uchu, což působí nefrotoxicitu a ototoxicitu."
            },
            {
                "q": "Aminoglykosidy usmrcují bakterie mechanizmem inhibice proteosyntézy po vazbě na:",
                "options": [
                    "50S podjednotku ribozomu",
                    "30S podjednotku ribozomu",
                    "RNA-polymerázu",
                    "DNA-gyrázu"
                ],
                "correct": 1,
                "explanation": "Aminoglykosidy se vazují na 30S podjednotku ribozomu, čímž způsobují chybné čtení mRNA a zástavu proteosyntézy."
            }
        ]
    },
    "cast_b": {
        "title": "Toxoplasmóza – Toxoplasma gondii",
        "keywords": [
            "Toxoplasma gondii",
            "kočka",
            "oocysta",
            "tkáňová cysta",
            "kongenitální toxoplazmóza",
            "Janků"
        ],
        "content": {
            "definice": "<strong>Toxoplasma gondii:</strong> Oportunní tkáňová kokcidie. Definitivním hostitelem jsou kočkovité šelmy, mezihostitelem všichni teplokrevní živočichové včetně člověka.",
            "etiologie": "1. Oocysty (vylučované trusem koček). 2. Tachyzoiti (akutní fáze). 3. Bradyzoiti / Tkáňové cysty (chronické stádium ve svalech a mozku).",
            "klinicky": "• Postnatální: lymfadenitida krčních uzlin.<br>• Kongenitální (Morbus Janků): Triáda: Hydrocefalus, intrakraniální kalcifikace, chorioretinitida.<br>• HIV/AIDS: Toxoplazmová encefalitida z reaktivace.",
            "laborator": "ELISA (IgM, IgG, test avidity IgG), PCR z amniové tekutiny nebo likvoru.",
            "terapie": "Pyrimethamin + Sulfadiazine (+ kyselina folinová). Těhotné: Spiramycin."
        },
        "quiz": [
            {
                "q": "Které zvíře je definitivním hostitelem Toxoplasma gondii a vylučuje oocysty trusem?",
                "options": [
                    "Pes",
                    "Kočka",
                    "Prase",
                    "Skot"
                ],
                "correct": 1,
                "explanation": "Pouze v střevním epitelu kočkovitých šelem probíhá sexuální cyklus T. gondii zakončený tvorbou a vylučováním oocyst."
            },
            {
                "q": "Klasická klinická triáda u kongenitální toxoplazmózy (Morbus Janků) zahrnuje:",
                "options": [
                    "Kataraktu, hluchotu a srdeční vadu",
                    "Hydrocefalus, chorioretinitidu a intrakraniální kalcifikace",
                    "Mikrocefalii, anémii a hepatitidu",
                    "Spina bifida, rozštěp patra a polydaktylii"
                ],
                "correct": 1,
                "explanation": "Těžká kongenitální toxoplazmóza novorozenců se projevuje hydrocefalem, intrakraniálními kalcifikacemi a zánětem sítnice a cévnatky."
            }
        ]
    }
},
{
    "id": "mikra-31",
    "cislo": 31,
    "skupina_a": "Farmakoterapie",
    "skupina_b": "Parazitologie",
    "cast_a": {
        "title": "Fluorochinolony – spektrum a indikace",
        "keywords": [
            "Ciprofloxacin",
            "Moxifloxacin",
            "DNA-gyráza",
            "topoizomeráza IV",
            "respirační chinolony",
            "kontraindikace"
        ],
        "content": {
            "definice": "<strong>Fluorochinolony:</strong> Baktericidní syntetická chemoterapeutika. Působí koncentračně závislým efektem a mají vynikající tkáňovou distribuci. Kontraindikovány jsou u dětí (riziko poškození kloubních chrupavek) a těhotných.",
            "etiologie": "Inhibice bakteriální <strong>DNA gyrázy</strong> (G- bakterie) a <strong>topoizomerázy IV</strong> (G+ bakterie) → blokáda replikace DNA.",
            "klasifikace": "• <em>Ciprofloxacin (II. gen):</em> Výborný účinek na G- aerobní bakterie. **Nejsilnější protipseudomonádový chinolon!** Neúčinný na pneumokoky.<br>• <em>Moxifloxacin (IV. gen):</em> Respirační chinolon. Účinný na G+ koky (pneumokok), atypické patogeny a anaeroby.",
            "klinicky": "Ciprofloxacin: Uroinfekce, otitis externa maligna, salmonelóza, shigelóza, legionelóza.<br>Moxifloxacin: Závažné komunitní pneumonie u alergiků na penicilin.",
            "terapie": "Podání p.o. i i.v. Pozor na tendinitidy a ruptury Achillovy šlachy."
        },
        "quiz": [
            {
                "q": "Který fluorochinolon má nejsilnější antimikrobiální účinek proti Pseudomonas aeruginosa?",
                "options": [
                    "Moxifloxacin",
                    "Ciprofloxacin",
                    "Ofloxacin",
                    "Norfloxacin"
                ],
                "correct": 1,
                "explanation": "Ciprofloxacin je nejúčinnější protipseudomonádový fluorochinolon."
            },
            {
                "q": "Proč jsou fluorochinolony kontraindikovány u dětí a dospívajících v období růstu?",
                "options": [
                    "Způsobují nevratnou hluchotu",
                    "Vypalují ledvinné glomeruly",
                    "Způsobují chondrotoxicitu s poškozením růstových chrupavek",
                    "Vyvolávají hypoglykemické koma"
                ],
                "correct": 2,
                "explanation": "Fluorochinolony mohou poškodit vývoj kloubních chrupavek (chondrotoxicita) u rostoucího organismu."
            }
        ]
    },
    "cast_b": {
        "title": "Malárie – Plasmodium sp.",
        "keywords": [
            "Plasmodium falciparum",
            "Anopheles",
            "horečka terciána",
            "horečka kvartána",
            "tlustá kapka",
            "chinin"
        ],
        "content": {
            "definice": "<strong>Malárie:</strong> Transmisivní horečnaté onemocnění vyvolané intracelulárními parazity rodu <em>Plasmodium</em>. Přenašečem je samička komára <em>Anopheles</em>.",
            "etiologie": "• <em>P. falciparum:</em> Tropická malárie (nepravidelná horečka, risk mozkové malárie).<br>• <em>P. vivax / P. ovale:</em> Horečka terciána (co 48h, hypnozoiti v játrech).<br>• <em>P. malariae:</em> Horečka kvartána (co 72h).",
            "patogeneze": "Sporozoity → jaterní schizogonie → uvolnění merozoitů → napadení erytrocytů → schizonti → rozpad erytrocytů vyvolá horečnatý záchvat.",
            "laborator": "Odběr krve při vzestupu horečky. Mikroskopie: **Tlustá kapka** a **tenký krevní nátěr** barvený Giemsou. Antigeny HRP-2 a LDH.",
            "terapie": "ACT kombinace, Chinin i.v., Chlorochin, Primachin."
        },
        "quiz": [
            {
                "q": "Která metoda se v laboratoři standardně používá k určení druhové příslušnosti plasmodia u pacienta s malárií?",
                "options": [
                    "Kultivace na Sabouraudově agaru",
                    "Tlustá kapka",
                    "Tenký krevní nátěr barvený Giemsou",
                    "Průkaz protilátek KFR"
                ],
                "correct": 2,
                "explanation": "Tenký krevní nátěr zachovává neporušenou morfologii erytrocytů a umožňuje přesné určení druhu plasmodia."
            },
            {
                "q": "Které stádium Plasmodium vivax a P. ovale přežívá v játrech a způsobuje pozdní relapsy malárie?",
                "options": [
                    "Tachyzoity",
                    "Hypnozoity",
                    "Sporozoity",
                    "Merozoity"
                ],
                "correct": 1,
                "explanation": "Hypnozoiti jsou dormantní jaterní formy P. vivax a P. ovale, které mohou vyvolat reaktivaci malárie."
            }
        ]
    }
},
{
    "id": "mikra-32",
    "cislo": 32,
    "skupina_a": "Farmakoterapie",
    "skupina_b": "Parazitologie",
    "cast_a": {
        "title": "Makrolidy, azalidy a linkosamidy",
        "keywords": [
            "Klaritromycin",
            "Azitromycin",
            "Klindamycin",
            "inhibice proteosyntézy",
            "atypické pneumonie",
            "toxický šok"
        ],
        "content": {
            "definice": "<strong>Makrolidy, azalidy a linkosamidy:</strong> Bakteriostatická antibiotika inhibující proteosyntézu vazbou na 50S podjednotku ribozomu.",
            "klasifikace": "1. <strong>Makrolidy/azalidy:</strong> Erytromycin (diftérie, pertuse), Klaritromycin (eradikace H. pylori), Azitromycin (chlamydie, legionely), Spiramycin (toxoplazmóza těhotných).<br>2. <strong>Linkosamidy:</strong> Klindamycin (stafylokoky, streptokoky a striktní anaeroby jako <em>Bacteroides fragilis</em>).",
            "terapie": "Klindamycin potlačuje tvorbu exotoxinů u staphylokokového/streptokokového syndromu toxického šoku (TSS)."
        },
        "quiz": [
            {
                "q": "Které antibiotikum se jako inhibitor proteosyntézy přidává k potlačení produkce toxinů u syndromu toxického šoku?",
                "options": [
                    "Amoxicilin",
                    "Klindamycin",
                    "Gentamicin",
                    "Ciprofloxacin"
                ],
                "correct": 1,
                "explanation": "Klindamycin tlumí proteosyntézu v bakteriální buňce, čímž zastavuje syntézu a uvolňování exotoxinů."
            },
            {
                "q": "Které antibiotikum je indikováno pro léčbu toxoplazmózy u těhotných žen v 1. trimestru?",
                "options": [
                    "Spiramycin",
                    "Klaritromycin",
                    "Ciprofloxacin",
                    "Klindamycin"
                ],
                "correct": 0,
                "explanation": "Spiramycin se akumuluje v placentární tkáni a brání přestupu T. gondii na plod."
            }
        ]
    },
    "cast_b": {
        "title": "Motolice (Trematoda) – Schistosomy",
        "keywords": [
            "Schistosoma",
            "krevnička",
            "cerkárie",
            "elefantiáza",
            "hematurie",
            "praziquantel"
        ],
        "content": {
            "definice": "<strong>Schistosomy (krevničky):</strong> Ploší červi vyvolávající urogenitální a střevní schistosomózu.",
            "etiologie": "• <em>Schistosoma haematobium:</em> Urogenitální forma. Vajíčka s terminálním trnem kladena do žil močového měchýře.<br>• <em>Schistosoma mansoni:</em> Střevní/jaterní forma. Vajíčka s bočním trnem.",
            "patogeneze": "Cerkárie z plžů (mezihostitel) provrtávají kůži člověka při koupání → migrace do žilních pletení.",
            "klinicky": "S. haematobium: terminální hematurie, granulomatózní cystitida, riziko karcinomu měchýře.<br>S. mansoni: krvavý průjem, portální hypertenze.",
            "laborator": "Mikroskopie vajíček s trnem (močový sediment u S. haematobium, stolice u S. mansoni).",
            "terapie": "Lék volby: Praziquantel."
        },
        "quiz": [
            {
                "q": "Který druh krevničky typicky způsobuje urogenitální formu schistosomózy s hematurií a fibrózou močového měchýře?",
                "options": [
                    "Schistosoma mansoni",
                    "Schistosoma japonicum",
                    "Schistosoma haematobium",
                    "Fasciola hepatica"
                ],
                "correct": 2,
                "explanation": "Schistosoma haematobium dospívá v cévních pleteních močového měchýře, kam klade vajíčka s typickým terminálním trnem."
            },
            {
                "q": "Infekční stádium schistosom, které ve sladké vodě aktivně provrtává kůži člověka, se nazývá:",
                "options": [
                    "Miracidium",
                    "Cerkárie",
                    "Metacerkárie",
                    "Sporocysta"
                ],
                "correct": 1,
                "explanation": "Cerkárie opouštějí tělo plže a během koupání aktivně pronikají neporušenou pokožkou člověka."
            }
        ]
    }
},
{
    "id": "mikra-33",
    "cislo": 33,
    "skupina_a": "Farmakoterapie",
    "skupina_b": "Parazitologie",
    "cast_a": {
        "title": "Tetracykliny a glycylcykliny",
        "keywords": [
            "Doxycyklin",
            "Tigecyklin",
            "atypické patogeny",
            "borelióza",
            "zubní sklovina",
            "VRE"
        ],
        "content": {
            "definice": "<strong>Tetracykliny a glycylcykliny:</strong> Širokospektrá bakteriostatická antibiotika inhibující proteosyntézu vazbou na 30S podjednotku ribozomu.",
            "klasifikace": "• <strong>Tetracykliny (Doxycyklin):</strong> Široké spektrum (atypická pneumonie, chlamydie, rickettsie, spirochety/borelióza). Kontraindikovány u dětí do 8 let (ukládají se v kostech a sklovině, žluté zbarvení).<br>• <strong>Glycylcykliny (Tigecyklin):</strong> Vyhýbá se efluxu. Působí na multirezistentní MRSA, VRE, ESBL. Neúčinný na <em>Pseudomonas</em>."
        },
        "quiz": [
            {
                "q": "Proč jsou tetracykliny (např. Doxycyklin) kontraindikovány u dětí do 8 let a těhotných?",
                "options": [
                    "Způsobují akutní selhání ledvin",
                    "Vážou se na vápník a ukládají se v kostech a vyvíjející se zubní sklovině",
                    "Vyvolávají aplastickou anémii",
                    "Způsobují chabou obrnu svalstva"
                ],
                "correct": 1,
                "explanation": "Tetracykliny chelatují vápník a ukládají se v kalcifikujících tkáních, což vede k trvalé diskoloraci zubů."
            },
            {
                "q": "Na které z následujících bakterií nemá Tigecyklin (glycylcyklin) žádný účinek?",
                "options": [
                    "MRSA",
                    "VRE",
                    "Pseudomonas aeruginosa",
                    "ESBL produkující E. coli"
                ],
                "correct": 2,
                "explanation": "Tigecyklin je přirozeně neúčinný proti Pseudomonas aeruginosa a Proteus spp."
            }
        ]
    },
    "cast_b": {
        "title": "Plicní a jaterní motolice (Fasciola, Paragonimus)",
        "keywords": [
            "Fasciola hepatica",
            "Paragonimus westermani",
            "bahnatka",
            "metacerkárie",
            "rak",
            "hemoptýza"
        ],
        "content": {
            "definice": "<strong>Plicní a jaterní motolice:</strong> Ploší červi parazitující v parenchymu jater a plic.",
            "etiologie": "• <em>Fasciola hepatica (Motolice jaterní):</em> V žlučovodech. Přenos metacerkáriemi z řeřišnice. Cholangitida.<br>• <em>Paragonimus westermani (Motolice plicní):</em> Metacerkárie v rakoch/kraboch. Hemoptýza a kašel (napodobuje TBC).",
            "laborator": "Mikroskopie vajíček ve stolici/duodenální šťávě (Fasciola) nebo ve sputu (Paragonimus).",
            "terapie": "Fasciola: Triklabendazol. Paragonimus: Praziquantel."
        },
        "quiz": [
            {
                "q": "Jak se člověk nejčastěji nakazí motolicí plicní (Paragonimus westermani)?",
                "options": [
                    "Pozřením nedostatečně tepelně upravených sladkovodních krabů nebo raků",
                    "Vdechnutím infekčních vajíček z prachu",
                    "Aktivním provrtáním cerkárií kůží při koupání",
                    "Kousnutím komára Anopheles"
                ],
                "correct": 0,
                "explanation": "Infekčním stádiem P. westermani jsou metacerkárie ve svalech sladkovodních krabů a raků."
            },
            {
                "q": "Pozřením které kontaminované potraviny dochází k nákaze motolicí jaterní (Fasciola hepatica)?",
                "options": [
                    "Surových ryb",
                    "Vodních rostlin (např. divoké řeřišnice) s přichycenými metacerkáriemi",
                    "Nedovařeného hovězího masa",
                    "Nepasterizovaného ovčího mléka"
                ],
                "correct": 1,
                "explanation": "Metacerkárie F. hepatica se přichycují na vodní rostliny (řeřišnice), jejichž konzumací za syrova dochází k infekci."
            }
        ]
    }
},
{
    "id": "mikra-34",
    "cislo": 34,
    "skupina_a": "Farmakoterapie",
    "skupina_b": "Parazitologie",
    "cast_a": {
        "title": "Rifampicin, metronidazol, nitrofurantoin a fidaxomycin",
        "keywords": [
            "Rifampicin",
            "Metronidazol",
            "Nitrofurantoin",
            "Fidaxomycin",
            "Clostridium difficile",
            "uroinfekce"
        ],
        "content": {
            "definice": "<strong>Specifická antibiotika a chemoterapeutika:</strong>",
            "klasifikace": "• <em>Rifampicin:</em> Blokuje RNA-polymerázu. TBC, stafylokokové nákazy na cizích tělesech. Rychlá rezistence (vždy v kombinaci).<br>• <em>Metronidazol:</em> Štěpí DNA v anaerobním prostředí. Anaeroby (<em>B. fragilis</em>), C. difficile kolitida, Giardia, Trichomonas.<br>• <em>Nitrofurantoin:</em> Účinný pouze v moči. Nekomplikované cystitidy.<br>• <em>Fidaxomycin:</em> Nevstřebává se z GIT. Selektivní pro kolitidy vyvolané <em>Clostridium difficile</em>.",
            "terapie": "Metronidazol p.o./i.v. Při podávání kontraindikován alkohol (disulfiramový efekt!)."
        },
        "quiz": [
            {
                "q": "Které z léčiv je indikováno výhradně pro nekomplikované infekce močových cest (cystitidy) kvůli absenci systémového účinku?",
                "options": [
                    "Rifampicin",
                    "Metronidazol",
                    "Nitrofurantoin",
                    "Fidaxomycin"
                ],
                "correct": 2,
                "explanation": "Nitrofurantoin se rychle vylučuje do moče, kde dosahuje vysokých koncentrací."
            },
            {
                "q": "Která reakce vzniká při požití alkoholu během léčby Metronidazolem?",
                "options": [
                    "Disulfiramový (antabusový) efekt – nevolnost, zvracení, hypotenze",
                    "Aplastická anémie",
                    "Syndrom šedého dítěte",
                    "Akutní selhání ledvin"
                ],
                "correct": 0,
                "explanation": "Metronidazol inhibuje aldehyddehydrogenázu, což způsobuje nahromadění acetaldehydu."
            }
        ]
    },
    "cast_b": {
        "title": "Tasemnice (Cestoda) – střevní a tkáňové formy",
        "keywords": [
            "Taenia saginata",
            "Taenia solium",
            "cysticerkóza",
            "boubel",
            "skolex",
            "praziquantel"
        ],
        "content": {
            "definice": "<strong>Tasemnice:</strong> Ploší červi cizopasící ve střevě dospělého hostitele nebo ve tkáních jako larvy (boubele).",
            "etiologie": "• <em>Taenia saginata (bezbranná):</em> Mezihostitel skot. Skolex bez háčků. Střevní tenióza.<br>• <em>Taenia solium (dlouhočlenná):</em> Mezihostitel prase i **člověk**. Skolex s háčky.<br>  - Střevní: tenióza z nedovařeného masa s boubely.<br>  - Tkáňová: **Cysticerkóza** z pozření vajíček! Neurocysticerkóza vyvolává epileptické záchvaty.",
            "laborator": "Průkaz článků a vajíček ve stolici. U cysticerkózy MR mozku, sérologie.",
            "terapie": "Tenióza: Praziquantel. Cysticerkóza: Albendazol + Dexamethason."
        },
        "quiz": [
            {
                "q": "Pozřením čeho se člověk nakazí nebezpečnou tkáňovou formou tasemnice – cysticerkózou (Taenia solium)?",
                "options": [
                    "Pozřením larvy (boubele) v hovězím mase",
                    "Pozřením vajíček Taenia solium",
                    "Pozřením dospělého červa",
                    "Průnikem larev přes kůži při chůzi naboso"
                ],
                "correct": 1,
                "explanation": "Cysticerkóza vzniká tehdy, pokud člověk pozře vajíčka T. solium a stane se mezihostitelem larev."
            },
            {
                "q": "Která tasemnice má skolex opatřený kromě čtyř přísavek také věncem úchopových háčků?",
                "options": [
                    "Taenia saginata",
                    "Taenia solium",
                    "Hymenolepis nana",
                    "Diphyllobothrium latum"
                ],
                "correct": 1,
                "explanation": "Taenia solium má na svém rostellu charakteristický věnec chitinových háčků."
            }
        ]
    }
},
{
    "id": "mikra-35",
    "cislo": 35,
    "skupina_a": "Diagnostika",
    "skupina_b": "Parazitologie",
    "cast_a": {
        "title": "Diagnostika sepse a infekcí krevního řečiště",
        "keywords": [
            "sepse",
            "hemokultura",
            "SIRS",
            "biomarkery",
            "prokalcitonin",
            "katétrová sepse"
        ],
        "content": {
            "definice": "<strong>Sepse:</strong> Život ohrožující orgánová dysfunkce způsobená dysregulovanou odpovědí na infekci.",
            "etiologie": "<strong>Hemokultivace:</strong> Zlatý standard.<br>• Odběr před započetím ATB. Aseptická desinfekce kůže k zamezení kontaminace <em>S. epidermidis</em>.<br>• Odebírají se 2 sady (1 aerobní + 1 anaerobní lahvička na sadu). Objem krve: 8–10 ml/lahvička.<br>• Katétrová sepse (CRBSI): Odběr z katétru i z periferie současně.",
            "laborator": "Biomarkery: <strong>Prokalcitonin (PCT)</strong> – stoupá do 4–6 hodin specificky u bakteriálních sepsí. CRP stoupá do 12–24h."
        },
        "quiz": [
            {
                "q": "Jaký objem krve se standardně odebírá do jedné hemokultivační lahvičky u dospělých?",
                "options": [
                    "1–2 ml",
                    "8–10 ml",
                    "20–30 ml",
                    "0,5 ml"
                ],
                "correct": 1,
                "explanation": "Optimální poměr krve a kultivačního média vyžaduje 8–10 ml krve."
            },
            {
                "q": "Který biomarker v séru stoupá nejrychleji a nejspecifičtěji u bakteriální sepse?",
                "options": [
                    "Kreatinin",
                    "Prokalcitonin (PCT)",
                    "CRP",
                    "Albumin"
                ],
                "correct": 1,
                "explanation": "Prokalcitonin stoupá velmi rychle (4–6 hodin po začátku se bakteriální sepse)."
            }
        ]
    },
    "cast_b": {
        "title": "Echinokokózy – Echinococcus granulosus a multilocularis",
        "keywords": [
            "Echinococcus granulosus",
            "Echinococcus multilocularis",
            "hydatida",
            "alveokokóza",
            "psovití",
            "albendazol"
        ],
        "content": {
            "definice": "<strong>Echinokokózy:</strong> Závažné tkáňové helmintózy vyvolané larvami měchožilů.",
            "etiologie": "• <em>Echinococcus granulosus:</em> Pes (def.), ovce/člověk (mezihost.). Cesty: jednokomorové cysty (**hydatidy**) v játrech a plicích. Nebezpečí anafylaxe při prasknutí.<br>• <em>Echinococcus multilocularis:</em> Liška (def.). Alveolární hydatida – droboučké cysty agresivně infiltrující játra (chová se jako maligní nádor). Smrtnost bez léčby > 90 %.",
            "terapie": "Albendazol. Chirurgické řešení."
        },
        "quiz": [
            {
                "q": "Který patogen způsobuje alveolární hydatidózu, která svými vlastnostmi infiltrace a metastazování připomíná maligní nádor?",
                "options": [
                    "Echinococcus granulosus",
                    "Echinococcus multilocularis",
                    "Taenia solium",
                    "Fasciola hepatica"
                ],
                "correct": 1,
                "explanation": "Echinococcus multilocularis tvoří infiltrující cysty bez ohraničení v játrech."
            },
            {
                "q": "Proč je prasknutí hydatidové cysty Echinococcus granulosus v těle pacienta nebezpečné?",
                "options": [
                    "Způsobuje okamžitý rozvoj diabetu",
                    "Rozlévá tekutinu s rizikem smrtelného anafylaktického šoku a diseminace dceřiných cyst",
                    "Způsobuje infarkt myokardu",
                    "Vede k okamžité slepotě"
                ],
                "correct": 1,
                "explanation": "Hydatidová tekutina vyvolává těžkou anafylaktickou reakci a uvolněné skolexy zakládají sekundární cysty."
            }
        ]
    }
},
{
    "id": "mikra-36",
    "cislo": 36,
    "skupina_a": "Diagnostika",
    "skupina_b": "Parazitologie",
    "cast_a": {
        "title": "Infekce dýchacích cest a odběry",
        "keywords": [
            "sputum",
            "výtěr z krku",
            "Amies",
            "Bordet-Gengou",
            "legionela",
            "BAL"
        ],
        "content": {
            "definice": "<strong>Infekce dýchacích cest:</strong> Diagnostika závisí na správném odběru a vyhodnocení biologického materiálu.",
            "etiologie": "• Výtěr z krku: z mandlí a patrových oblouků (Amiesova půda → krevní agar pro <em>S. pyogenes</em>).<br>• Sputum: z hloubky dýchacích cest. Kontrola pod mikroskopem: hodnocení poměru PMN leukocytů a plochých epitelových buněk ze slin.<br>• Specifické půdy: <em>Bordetella pertussis</em> (Bordet-Gengou / Regan-Lowe), <em>Legionella</em> (BCYE agar).",
            "laborator": "Sputum odebírat ráno nalačno po vypláchnutí úst vodou."
        },
        "quiz": [
            {
                "q": "Jak se pod mikroskopem hodnotí kvalita sputa před kultivačním vyšetřením?",
                "options": [
                    "Podle zbarvení hlenu",
                    "Podle poměru polymorfonukleárních leukocytů a dlaždicových epitelových buněk",
                    "Podle přítomnosti bublin vzduchu",
                    "Podle přítomnosti laktobacilů"
                ],
                "correct": 1,
                "explanation": "Kvalitní sputum z DDC obsahuje mnoho leukocytů a málo dlaždicových epitelií ze slin."
            },
            {
                "q": "Která speciální půda se používá pro kultivační průkaz Bordetella pertussis (černého kašle)?",
                "options": [
                    "Endův agar",
                    "Bordet-Gengouova půda s krví",
                    "Sabouraudův agar",
                    "Claubergova půda"
                ],
                "correct": 1,
                "explanation": "Bordetella pertussis vyžaduje pro nárůst bramborovo-glycerinový agar s krví."
            }
        ]
    },
    "cast_b": {
        "title": "Střevní nematodózy (Enterobius, Ascaris, Strongyloides, Ancylostoma)",
        "keywords": [
            "Enterobius vermicularis",
            "Ascaris lumbricoides",
            "roup dětský",
            "škrkavka",
            "Grahamova metoda",
            "Loefflerův syndrom"
        ],
        "content": {
            "definice": "<strong>Střevní hlístice:</strong> Obloukovití červi parazitující v traktu človeka.",
            "etiologie": "• <em>Enterobius vermicularis (Roup):</em> Perianální pruritus v noci. Diagnostika: **Grahamova metoda** (otisk lepicí pásky).<br>• <em>Ascaris lumbricoides (Škrkavka):</em> Plicní fáze (Loefflerův eozinofilní syndrom) → střevní fáze (obstrukce). Průkaz vajíček ve stolici.<br>• <em>Strongyloides stercoralis:</em> Rhabditiformní larvy ve stolici.<br>• <em>Ancylostoma duodenale:</em> Saje krev v duodenu → sideropenická anémie.",
            "terapie": "Mebendazol, Albendazol."
        },
        "quiz": [
            {
                "q": "Grahamova metoda (lepicí páska) je standardní diagnostickou metodou pro průkaz:",
                "options": [
                    "Ascaris lumbricoides",
                    "Enterobius vermicularis",
                    "Strongyloides stercoralis",
                    "Taenia saginata"
                ],
                "correct": 1,
                "explanation": "Roup dětský klade vajíčka v perianálních řasách, proto se odebírají otiskem lepicí pásky."
            },
            {
                "q": "Která hlístice způsobuje při migraci larev plícemi tvoření přechodných eozinofilních infiltrátů (Loefflerův syndrom)?",
                "options": [
                    "Enterobius vermicularis",
                    "Ascaris lumbricoides",
                    "Trichomonas vaginalis",
                    "Taenia solium"
                ],
                "correct": 1,
                "explanation": "Larvy Ascaris lumbricoides migrují ze střeva přes plíce do dýchacích cest, což vyvolává plynoucí plicní eosinofilii."
            }
        ]
    }
},
{
    "id": "mikra-37",
    "cislo": 37,
    "skupina_a": "Diagnostika",
    "skupina_b": "Parazitologie",
    "cast_a": {
        "title": "Infekce kůže a měkkých tkání, normální flóra",
        "keywords": [
            "Staphylococcus aureus",
            "Streptococcus pyogenes",
            "normální flóra",
            "erysipelas",
            "nosokomiální",
            "kolonizační rezistence"
        ],
        "content": {
            "definice": "<strong>Infekce kůže a měkkých tkání:</strong> Od hnisavých pyodermií po nekrotizující záněty.",
            "etiologie": "• Normální flóra kůže: <em>S. epidermidis, Cutibacterium acnes, Corynebacterium</em>.<br>• Erysipel (růže): <em>Streptococcus pyogenes</em> (ostře ohraničené zarudnutí, lymfangitida, febrilie).<br>• Impetigo, furunkl: <em>S. aureus, S. pyogenes</em>.<br>• Nekrotizující fasciitida: <em>S. pyogenes</em> (skupina A) nebo polymikrobiální anaeroby.",
            "laborator": "Aspirace hnisu stříkačkou z hloubky zánětu, nikoli povrchový stěr."
        },
        "quiz": [
            {
                "q": "Který patogen je hlavním původcem erysipelu (růže) – ostře ohraničeného kožního zánětu s horečkou?",
                "options": [
                    "Staphylococcus aureus",
                    "Streptococcus pyogenes",
                    "Pseudomonas aeruginosa",
                    "Propionibacterium acnes"
                ],
                "correct": 1,
                "explanation": "Erysipel je streptokoková infekce způsobená Streptococcus pyogenes (skupina A)."
            },
            {
                "q": "Která bakterie je hlavním anaerobním zástupcem fyziologické mikroflóry kožních mazových žláz?",
                "options": [
                    "Cutibacterium (Propionibacterium) acnes",
                    "Staphylococcus aureus",
                    "Pseudomonas aeruginosa",
                    "Clostridium perfringens"
                ],
                "correct": 0,
                "explanation": "Cutibacterium acnes je lipofilní anaerob žijící v pórách a mazových žlázách kůže."
            }
        ]
    },
    "cast_b": {
        "title": "Tkáňové nematodózy (Toxocara, Trichinella, Dracunculus)",
        "keywords": [
            "Toxocara canis",
            "Trichinella spiralis",
            "Dracunculus medinensis",
            "larva migrans",
            "svalovec stočený"
        ],
        "content": {
            "definice": "<strong>Tkáňové nematodózy:</strong> Larvy hlístic migrují tkáněmi nevhodného hostitele.",
            "etiologie": "• <em>Toxocara canis:</em> Ze psů (vajíčka z pískovišť). Larva migrans visceralis (játra, eozinofilie) a ocularis (sítnice).<br>• <em>Trichinella spiralis (Svalovec):</em> Z kanců. Larvy se spirálovitě opouzdřují ve svalech (myalgie, periorbitální edém).<br>• <em>Dracunculus medinensis:</em> Pitnou vodou s buchanatkami. Červ v podkoží dolních končetin.",
            "terapie": "Albendazol + kortikosteroidy."
        },
        "quiz": [
            {
                "q": "Který parazit se přenáší na člověka konzumací nedostatečně tepelně upraveného masa divočáků a tvoří cysty ve svalech?",
                "options": [
                    "Toxocara canis",
                    "Trichinella spiralis",
                    "Dracunculus medinensis",
                    "Ascaris lumbricoides"
                ],
                "correct": 1,
                "explanation": "Trichinella spiralis se přenáší nákazou ze svaloviny černého vepřového masa nebo divočáků."
            },
            {
                "q": "Nález granulomu na sítnici oka u dítěte s anamnézou hraní na pískovišti vzbuzuje podezření na:",
                "options": [
                    "Larva migrans ocularis (Toxocara canis)",
                    "Trichinellózu",
                    "Skvrnitý tyfus",
                    "Leptospirózu"
                ],
                "correct": 0,
                "explanation": "Larvy Toxocara canis uvíznuté v cévách oka tvoří retinální granulom."
            }
        ]
    }
},
{
    "id": "mikra-38",
    "cislo": 38,
    "skupina_a": "Diagnostika",
    "skupina_b": "Parazitologie",
    "cast_a": {
        "title": "Sexuálně přenosné infekce (STI)",
        "keywords": [
            "Kapavka",
            "Syfilis",
            "Chlamydie",
            "Herpes genitalis",
            "diagnostika STI",
            "uretritida"
        ],
        "content": {
            "definice": "<strong>STI:</strong> Přenos pohlavním stykem.",
            "etiologie": "• <em>Neisseria gonorrhoeae:</em> Hnisavá uretritida. Mikroskopie: G- diplokoky v PMN leukocytech. Čokoládový agar.<br>• <em>Treponema pallidum:</em> Syfilis. Zástinová mikroskopie, RRR, TPHA, ELISA.<br>• <em>Chlamydia trachomatis (D-K):</em> PCR (NAAT) z prvního proudu moče.<br>• <em>HSV-2, HPV, HIV, Trichomonas.</em>"
        },
        "quiz": [
            {
                "q": "Která diagnostická metoda je nejcitlivější a v současnosti doporučovaná jako zlatý standard pro průkaz Chlamydia trachomatis v urogenitálním traktu?",
                "options": [
                    "Gramovo barvení",
                    "Kultivace na krevním agaru",
                    "Metody PCR a NAAT (amplifikace nukleových kyselin)",
                    "Weilova-Felixova reakce"
                ],
                "correct": 2,
                "explanation": "NAAT (PCR) testy vykazují nejvyšší specifitu a citlivost pro průkaz chlamydií."
            },
            {
                "q": "Mikroskopický záchyt gramnegativních intruleukocytárních diplokoků v hnisavém sekretu uretry u muže potvrzuje dg.:",
                "options": [
                    "Syfilis",
                    "Kapavky (Neisseria gonorrhoeae)",
                    "Chlamydiové uretritidy",
                    "Trichomoniázy"
                ],
                "correct": 1,
                "explanation": "Intracelulárně uložené G- diplokoky v neutrofilech jsou patognomické pro akutní kapavku."
            }
        ]
    },
    "cast_b": {
        "title": "Filárie – Wuchereria, Brugia, Loa Loa, Onchocerca",
        "keywords": [
            "Wuchereria bancrofti",
            "Brugia malayi",
            "Loa loa",
            "Onchocerca volvulus",
            "elefantiáza",
            "mikrofilárie"
        ],
        "content": {
            "definice": "<strong>Vlasovci:</strong> Tkáňové hlístice rodící mikrofilárie.",
            "etiologie": "• <em>Wuchereria bancrofti:</em> Žije v mízních cévách → **elefantiáza** končetin. Přenašeč: komáři.<br>• <em>Loa loa:</em> Migruje v podkoží a pod oční spojivkou (Calabarské otoky). Přenašeč: ovádi.<br>• <em>Onchocerca volvulus:</em> Uzly v kůži, larvy způsobují **říční slepotu**. Přenašeč: muchničky.",
            "terapie": "Ivermektin, Diethylkarbamazin."
        },
        "quiz": [
            {
                "q": "Který parazit přenášený muchničkami je původcem tzv. 'říční slepoty' v tropických oblastech?",
                "options": [
                    "Wuchereria bancrofti",
                    "Loa loa",
                    "Onchocerca volvulus",
                    "Brugia malayi"
                ],
                "correct": 2,
                "explanation": "Onchocerca volvulus vyvolává po migraci larev rohovkové nekrózy a slepotu."
            },
            {
                "q": "Který vlasovec je charakteristický svou migrací přímo pod oční spojivkou a přenáší se ovády Chrysops?",
                "options": [
                    "Wuchereria bancrofti",
                    "Loa loa (vlasovec oční)",
                    "Onchocerca volvulus",
                    "Dracunculus medinensis"
                ],
                "correct": 1,
                "explanation": "Loa loa dospělec viditelně přechází přes oční bělmo a spojivku."
            }
        ]
    }
},
{
    "id": "mikra-39",
    "cislo": 39,
    "skupina_a": "Diagnostika",
    "skupina_b": "Parazitologie",
    "cast_a": {
        "title": "Infekce centrálního nervového systému a likvor",
        "keywords": [
            "meningitida",
            "likvor",
            "lumbální punkce",
            "purulentní",
            "aseptická",
            "PCR"
        ],
        "content": {
            "definice": "<strong>Infekce CNS:</strong> Urgentní stav vyžadující rozbor likvoru z lumbální punkce.",
            "etiologie": "• <strong>Purulentní meningitida:</strong> Zakalený likvor, tisíce polymorfonukleárů, **výrazný pokles glukózy**, vysoký protein. (Pneumokok, Meningokok, Hemofil, Listeria).<br>• <strong>Aseptická meningitida:</strong> Čirý likvor, lymfocyty, **glukóza v normě**. (Enteroviry, klíšťová encefalitida, HSV-2).",
            "laborator": "Gramovo barvení, latexová aglutinace antigenů, PCR, kultivace."
        },
        "quiz": [
            {
                "q": "Pro purulentní (hnisavou bakteriální) meningitidu je v biochemickém nálezu likvoru typický:",
                "options": [
                    "Vysoká glukóza a nízký protein",
                    "Výrazný pokles glukózy a vysoký protein (hyperproteinorhachie)",
                    "Čirý vzhled a převaha lymfocytů",
                    "Absence jakýchkoli buněk"
                ],
                "correct": 1,
                "explanation": "Bakterie spotřebovávají glukózu → výrazná hypoglykorhachie a vysoký zánětlivý protein."
            },
            {
                "q": "Vzhled mozkomíšního moku a normální hladina glukózy při převaze lymfocytů svědčí pro meningitidu:",
                "options": [
                    "Purulentní meningokokové",
                    "Virové (aseptické)",
                    "Pseudomonádové",
                    "Klostridiové"
                ],
                "correct": 1,
                "explanation": "Virové meningitidy nezpůsobují spotřebu glukózy, proto zůstává koncentrace glukózy v likvoru v rozmezí normy."
            }
        ]
    },
    "cast_b": {
        "title": "Členovci (Arthropoda) jako parazité a vektory",
        "keywords": [
            "Ixodes ricinus",
            "komár",
            "vektor",
            "nymfa",
            "čmelík kuří",
            "přenašeči"
        ],
        "content": {
            "definice": "<strong>Členovci:</strong> Ektoparazité a přenašeči patogenů.",
            "etiologie": "• <em>Ixodes ricinus (Klíště):</em> Nymfy/dospělci přenášejí boreliózu, klíšťovou encefalitidu, anaplazmózu.<br>• <em>Komáři (Culicidae):</em> <em>Anopheles</em> (malárie), <em>Aedes</em> (dengue, zika, žlutá zimnice), <em>Culex</em> (západonilská horečka).<br>• <em>Blechy:</em> <em>Pulex irritans</em>, <em>Xenopsylla cheopis</em> (mor - <em>Yersinia pestis</em>).<br>• <em>Mouchy:</em> Tse-tse (spavá nemoc), muchničky (říční slepota)."
        },
        "quiz": [
            {
                "q": "Které vývojové stádium klíštěte Ixodes ricinus nepřenáší na člověka žádné patogeny?",
                "options": [
                    "Larva",
                    "Nymfa",
                    "Dospělá samička",
                    "Sameček"
                ],
                "correct": 0,
                "explanation": "Larvy se líhnou nenakažené a patogeny získají až prvním sáním."
            },
            {
                "q": "Komár rodu Aedes is hlavním přenašečem:",
                "options": [
                    "Malárie",
                    "Spavé nemoci",
                    "Viru Dengue, Žluté zimnice a viru Zika",
                    "Moru"
                ],
                "correct": 2,
                "explanation": "Komáři rodu Aedes jsou přenašeči arbovirů (Dengue, Zika, žlutá zimnice)."
            }
        ]
    }
},
{
    "id": "mikra-40",
    "cislo": 40,
    "skupina_a": "Diagnostika",
    "skupina_b": "Parazitologie",
    "cast_a": {
        "title": "Gastrointestinální nákazy a odběr stolice",
        "keywords": [
            "Salmonella",
            "Shigella",
            "Campylobacter",
            "rotaviry",
            "rektální výtěr",
            "Amies"
        ],
        "content": {
            "definice": "<strong>Gastrointestinální nákazy:</strong> Záněty střev vyvolané bakteriemi, viry a parazity.",
            "etiologie": "• Bakteriologický odběr: **Rektální výtěr** v Amiesově transportní půdě.<br>• Virologický / parazitologický odběr: Kusová stolice na rotaviry/noroviry (ELISA, PCR) a cysty parazitů.<br>• Preformované toxiny: <em>Staphylococcus aureus, Bacillus cereus</em>."
        },
        "quiz": [
            {
                "q": "Jaký odběrový materiál je dostatečný pro rutinní bakteriologické vyšetření stolice (průkaz Salmonel, Campylobacterů)?",
                "options": [
                    "Kus kusové stolice ve sterilní nádobce",
                    "Rektální výtěr na tamponu v transportní půdě (např. Amiesově)",
                    "Otisk lepicí páskou z konečníku",
                    "Odběr močového sedimentu"
                ],
                "correct": 1,
                "explanation": "Rektální výtěr v Amiesově transportní půdě je standardním vzorkem."
            },
            {
                "q": "Průjmové onemocnění s velmi rychlým nástupem (do 1–6 hodin po jídle) s dominujícím zvracením bez horečky svědčí pro:",
                "options": [
                    "Infekci Salmonella enteritidis",
                    "Bakteriální intoxikaci preformovaným enterotoxinem (např. S. aureus)",
                    "Břišní tyfus",
                    "Kryptosporidiózu"
                ],
                "correct": 1,
                "explanation": "Krátká inkubační doba bez horečky je typická pro alimentární intoxikace preformovaným stefylokokovým enterotoxinem."
            }
        ]
    },
    "cast_b": {
        "title": "Zákožka svrabová a vši",
        "keywords": [
            "Sarcoptes scabiei",
            "svrab",
            "Pediculus capitis",
            "veš dětská",
            "veš šatní",
            "hnidy"
        ],
        "content": {
            "definice": "<strong>Ektoparazitičtí členovci:</strong>",
            "etiologie": "• <em>Sarcoptes scabiei (Zákožka svrabová):</em> Vrtá chodbičky v kožní rohovce. Svrab (scabies). Intenzivní svědění v teple. Diagnóza: seškrab v 10% KOH. Léčba: Permethrin krém.<br>• <em>Pediculus capitis (Veš dětská):</em> Hnidy ve vlasech.<br>• <em>Pediculus humanus (Veš šatní):</em> V záhybech šatů. **Vektor skvrnitého tyfu (Rickettsia prowazekii)**."
        },
        "quiz": [
            {
                "q": "Který zástupce vší je významným vektorem (přenašečem) epidemického skvrnitého tyfu?",
                "options": [
                    "Veš dětská (Pediculus capitis)",
                    "Veš šatní (Pediculus humanus)",
                    "Veš muňka (Phthirus pubis)",
                    "Zákožka svrabová"
                ],
                "correct": 1,
                "explanation": "Veš šatní (P. humanus) přenáší Rickettsia prowazekii."
            },
            {
                "q": "Které mikroskopické vyšetření se používá k průkazu zákožky svrabové z kožního seškrabu?",
                "options": [
                    "Gramovo barvení",
                    "Nativní preparát po projasnění 10–20% KOH",
                    "Kultivace na krevním agaru",
                    "PCR z krve"
                ],
                "correct": 1,
                "explanation": "Seškrab kůže z chodbičky se kapkou 10–20% KOH projasní, čímž se rozpustí keratin."
            }
        ]
    }
}
];
