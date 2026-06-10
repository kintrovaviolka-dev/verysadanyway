// data_obecna.js - Podrobné popisy, kvízy a referenční hodnoty pro Farmakologii (Generováno automaticky)
const PHARM_DETAILS = {
  "pharm-1": {
    "definition": "Lékové formy pro enterální podání jsou určeny pro aplikaci léčiv do gastrointestinálního traktu (ústní dutina, žaludek, střevo, konečník) s cílem dosáhnout lokálního nebo systémového účinku po vstřebání.",
    "kinetics": [
      "Vstřebávání probíhá zejména v tenkém střevě díky velké ploše (klky) a vysoké vaskularizaci.",
      "Podléhá efektu prvního průchodu játry (first-pass efekt), kdy portální krev odtéká přímo do jater, kde dochází k biotransformaci léčiva.",
      "Biologická dostupnost (F) je často snížená a variabilní v závislosti na pH, plnosti žaludku a motility GIT."
    ],
    "dynamics": [
      "Působení léčiva nastupuje se zpožděním (latentní perioda 20-90 minut v závislosti na vyprazdňování žaludku).",
      "Moderní formy využívají modifikované uvolňování (MR, SR, ER, CR) pro prodloužení účinku a vyrovnání plazmatických hladin.",
      "Gastrorezistentní potahy chrání léčivo před kyselým pH žaludku nebo naopak žaludek před dráždivým léčivem (např. ASA)."
    ],
    "clinical": [
      "Enterální podání je nejbezpečnější, nejlevnější a nejčastější cesta aplikace (perorální - p.o., sublingvální - s.l., rektální - p.r.).",
      "U dětí se využívají tekuté formy (sirupy, suspenze) s korigovanou chutí; u starších lidí je třeba zvážit potíže s polykáním (dysfagie) a sníženou aciditu žaludku.",
      "Sublingvální a bukální podání obchází first-pass efekt a má rychlý nástup účinku (např. nitroglycerin u AP)."
    ],
    "pearl": "U tablet s modifikovaným uvolňováním (např. retardované formy) je přísně zakázáno jejich drcení či půlení, pokud to výrobce výslovně neumožňuje. Drcením dojde k okamžitému uvolnění celé dávky (dose dumping) a riziku toxicity!",
    "tableData": [
      {
        "name": "Průměrný nástup účinku p.o. tablet",
        "value": "30 - 60 minut"
      },
      {
        "name": "Nástup účinku s.l. forem",
        "value": "2 - 5 minut"
      },
      {
        "name": "Biologická dostupnost p.o. (rozsah)",
        "value": "5 - 100 %"
      }
    ],
    "quiz": [
      {
        "question": "Která z následujících perorálních lékových forem obchází first-pass efekt v játrech?",
        "options": [
          "Gastrorezistentní tablety",
          "Sublingvální tablety",
          "Šumivé tablety",
          "Tvrdé želatinové tobolky"
        ],
        "correct": 1,
        "explanations": [
          "Nesprávně. Gastrorezistentní tablety se uvolňují až ve střevě a vstřebané léčivo putuje portální žílou přímo do jater.",
          "Správně! Sublingvální podání umožňuje vstřebávání sliznicí dutiny ústní přímo do horní duté žíly, čímž obchází portální oběh a játra.",
          "Nesprávně. Šumivé tablety se polykají a po vstřebání v GIT podléhají first-pass efektu.",
          "Nesprávně. Želatinové tobolky se polykají a uvolňují se v žaludku/střevě, takže podléhají metabolizaci v játrech."
        ]
      },
      {
        "question": "Co znamená pojem 'dose dumping' u tablet s řízeným uvolňováním?",
        "options": [
          "Nedostatečné vstřebání léčiva v důsledku průjmu",
          "Kompletní zničení léčiva žaludeční kyselinou",
          "Rychlé a nekontrolované uvolnění celé dávky léčiva v důsledku porušení obalu (např. rozkousáním)",
          "Interakce léčiva s jídlem vedoucí k precipitaci v žaludku"
        ],
        "correct": 2,
        "explanations": [
          "Nesprávně. Průjem snižuje absorpci, ale nejedná se o dose dumping.",
          "Nesprávně. To by byla inaktivace léčiva, nikoliv dumping.",
          "Správně! Dose dumping (vysypání dávky) nastane při mechanickém poškození MR tablet, což vede k okamžité absorpci velké dávky a intoxikaci.",
          "Nesprávně. Precipitace je sražení léčiva, ne jeho prudké uvolnění."
        ]
      },
      {
        "question": "Jaký je hlavní důvod potahování tablet gastrorezistentní vrstvou?",
        "options": [
          "Zlepšení vzhledu a usnadnění polykání tablety",
          "Zajištění absorpce již v ústní dutině",
          "Ochrana léčivé látky před kyselým prostředím žaludku a ochrana žaludeční sliznice před drážděním",
          "Zvýšení vazby léčiva na plazmatické bílkoviny"
        ],
        "correct": 2,
        "explanations": [
          "Nesprávně. Polykání usnadňuje běžný potah (film), ne gastrorezistentní (acidorezistentní).",
          "Nesprávně. Gastrorezistentní tableta se v ústech nerozpouští.",
          "Správně! Gastrorezistentní (acidorezistentní) obal se nerozpouští při nízkém pH v žaludku, ale až při vyšším pH v duodenu.",
          "Nesprávně. Potah tablety nijak neovlivňuje plazmatickou vazbu léčiva."
        ]
      }
    ]
  },
  "pharm-2": {
    "definition": "Lékové formy pro parenterální podání obcházejí gastrointestinální trakt a aplikují se injekčně, infúzně nebo implantací přímo do tkání či cévního řečiště.",
    "kinetics": [
      "Intravenózní (i.v.) a intraarteriální (i.a.) podání má okamžitou a 100% biologickou dostupnost (F = 1).",
      "Subkutánní (s.c.) a intramuskulární (i.m.) podání závisí na prokrvení tkáně; absorpce je limitována difúzí a kapilárním průtokem.",
      "Zcela obchází first-pass metabolismus v játrech, což umožňuje přesné dávkování."
    ],
    "dynamics": [
      "Intravenózní podání poskytuje okamžitý nástup účinku (vteřiny až minuty), což je klíčové v urgentní medicíně.",
      "Depotní formy (např. i.m. suspenze nebo implantáty) uvolňují léčivo pomalu po dobu týdnů až měsíců.",
      "Rychlá infúze může způsobit hemodynamické výkyvy (red man syndrom u vankomycinu, hypotenze u rychlého podání MgSO4)."
    ],
    "clinical": [
      "Vyžadují přísnou sterilitu, apyrogenitu a izotonii roztoků k zamezení infekcí a poškození cév.",
      "U dětí je nutné pečlivě monitorovat rychlost i.v. infuzí infuzními pumpami kvůli riziku fluidního přetížení.",
      "U starých lidí s křehkými cévami se dává přednost podání do centrálního katetru u hyperosmolárních směsí."
    ],
    "pearl": "Intramuskulární podání je přísně kontraindikováno u pacientů na antikoagulační léčbě (např. warfarin, LMWH) nebo s trombocytopenií. Hrozí vznik rozsáhlých a život ohrožujících intramuskulárních hematomů!",
    "tableData": [
      {
        "name": "Biologická dostupnost i.v. podání",
        "value": "100 % (F = 1)"
      },
      {
        "name": "Maximální objem i.m. injekce (m. gluteus)",
        "value": "5 ml"
      },
      {
        "name": "Nástup účinku i.v. bolusu",
        "value": "10 - 60 sekund"
      }
    ],
    "quiz": [
      {
        "question": "Které parenterální podání zaručuje okamžitou a 100% biologickou dostupnost?",
        "options": [
          "Subkutánní (s.c.)",
          "Intramuskulární (i.m.)",
          "Intravenózní (i.v.)",
          "Intradermální (i.d.)"
        ],
        "correct": 2,
        "explanations": [
          "Nesprávně. Subkutánní podání vyžaduje vstřebávání z podkoží, které může trvat 15-30 minut a absorpce nemusí být kompletní.",
          "Nesprávně. Intramuskulární podání vyžaduje resorpci ze svalu, což závisí na lokálním průtoku krve.",
          "Správně! Při intravenózním podání se léčivo aplikuje přímo do systémové cirkulace, biologická dostupnost je proto definitoricky F=1 (100 %).",
          "Nesprávně. Intradermální podání slouží hlavně k testům a má velmi pomalou absorpci."
        ]
      },
      {
        "question": "Proč je intramuskulární podání kontraindikováno u pacientů na warfarinu?",
        "options": [
          "Warfarin inaktivuje léčivo přímo ve svalu",
          "Hrozí vznik rozsáhlého svalového hematomu v důsledku narušené koagulace",
          "Svalová tkáň má u těchto pacientů snížené prokrvení",
          "Zvyšuje se tím clearance warfarinu ledvinami"
        ],
        "correct": 1,
        "explanations": [
          "Nesprávně. Warfarin neinteraguje s léčivy fyzikálně-chemicky ve svalu.",
          "Správně! Injekce do svalu poškozuje drobné cévy. U antikoagulovaných pacientů sraženina nevzniká včas a krev se hromadí ve svalu, což vede k těžkému hematomu.",
          "Nesprávně. Prokrvení svalů není warfarinem ovlivněno.",
          "Nesprávně. Lokální aplikace neovlivňuje renální vylučování warfarinu."
        ]
      },
      {
        "question": "Co musí splňovat roztok určený pro intravenózní aplikaci?",
        "options": [
          "Musí být sterilní, apyrogenní a bez nerozpuštěných částic (pokud nejde o speciální nanoemulze)",
          "Musí být vždy kyselý (pH < 4.0) kvůli stabilitě",
          "Musí obsahovat vysokou koncentraci lipidů pro lepší stabilitu",
          "Musí mít vždy žluté zbarvení"
        ],
        "correct": 0,
        "explanations": [
          "Správně! Sterilita brání infekci, apyrogenita horečnaté reakci na endotoxiny a absence částic chrání plicní mikroembolizaci.",
          "Nesprávně. Silně kyselé roztoky dráždí cévy a vyvolávají flebitidu. pH by mělo být co nejblíže fyziologickému.",
          "Nesprávně. Lipidy se podávají jen ve specifických emulzích (např. parenterální výživa, propofol), standardní i.v. roztoky jsou vodné.",
          "Nesprávně. Barva roztoku závisí na léčivu, mnohé jsou čiré a bezbarvé."
        ]
      }
    ]
  },
  "pharm-3": {
    "definition": "Elektrolytové infúzní roztoky (krystaloidy) jsou vodné roztoky anorganických solí určené k intravenóznímu hrazení ztrát vody a iontů, úpravě osmolarity a volumoterapii v extracelulárním prostoru.",
    "kinetics": [
      "Krystaloidy volně procházejí kapilární membránou a distribuují se v celém extracelulárním prostoru (intersticium a plazma).",
      "Po podání zůstává v intravaskulárním řečišti pouze cca 20-25 % podaného objemu již po 30-60 minutách.",
      "Rychle se vylučují ledvinami (glomerulární filtrace)."
    ],
    "dynamics": [
      "Izotonické roztoky (např. Ringer-fundin, Plasmalyte, fyziologický roztok) nemění objem buněk.",
      "Fyziologický roztok (0.9% NaCl) obsahuje vysokou koncentraci chloridů (154 mmol/l), což může při masivním podání vyvolat hyperchloremickou metabolickou acidózu.",
      "Balancované roztoky obsahují organické anionty (laktát, acetát, malát), které se metabolizují na bikarbonát a pufrují acidózu."
    ],
    "clinical": [
      "Využívají se k léčbě dehydratace, hypovolemie (jako úvodní tekutina) a hrazení iontových dysbalancí.",
      "U dětí je nutná opatrnost kvůli menší toleranci k objemovému přetížení a sklonu k edému mozku při podání hypotonických roztoků.",
      "U starších osob s chronickým srdečním nebo renálním selháním hrozí při rychlém podání plicní edém."
    ],
    "pearl": "Takzvaný fyziologický roztok (0.9% NaCl) není biologicky fyziologický! Obsahuje 154 mmol/l Na+ a 154 mmol/l Cl-. Koncentrace chloridů je výrazně vyšší než v plazmě (100 mmol/l), což vede k renální vazokonstrikci a hyperchloremické acidóze. Preferujte balancované krystaloidy!",
    "tableData": [
      {
        "name": "Osmolarita plazmy",
        "value": "275 - 295 mOsm/l"
      },
      {
        "name": "Koncentrace Na+ ve fyziologickém roztoku",
        "value": "154 mmol/l"
      },
      {
        "name": "Retence i.v. krystaloidu v cévách po 1 hod",
        "value": "cca 20 - 25 %"
      }
    ],
    "quiz": [
      {
        "question": "Jaké riziko hrozí při podání velkého množství 0.9% NaCl (fyziologického roztoku)?",
        "options": [
          "Respirační alkalóza",
          "Hyperchloremická metabolická acidóza",
          "Hypokalémie se svalovou paralýzou",
          "Hypoglykemické kóma"
        ],
        "correct": 1,
        "explanations": [
          "Nesprávně. Roztoky neovlivňují plicní ventilaci a parciální tlak CO2 přímo.",
          "Správně! Vysoká koncentrace chloridů v 0.9% NaCl vytěsňuje hydrogenuhličitanové anionty, což vede k rozvoji hyperchloremické metabolické acidózy a renální vazokonstrikci.",
          "Nesprávně. Fyziologický roztok neobsahuje kalium, ale jeho podání přímo nevyvolává akutní svalovou paralýzu.",
          "Nesprávně. Roztok neobsahuje glukózu ani inzulín a nemá vliv na glykémii."
        ]
      },
      {
        "question": "Jaký je hlavní rozdíl mezi balancovanými krystaloidy a fyziologickým roztokem?",
        "options": [
          "Balancované roztoky obsahují koloidní částice škrobu",
          "Balancované roztoky mají složení iontů a pH blízké lidské plazmě a obsahují metabolizovatelné anionty (např. acetát, laktát)",
          "Fyziologický roztok se nesmí podávat intravenózně",
          "Balancované roztoky se vylučují pouze plícemi"
        ],
        "correct": 1,
        "explanations": [
          "Nesprávně. Krystaloidy neobsahují koloidy (škroby, želatinu).",
          "Správně! Balancované roztoky (Plasmalyte, Ringer-lactat) napodobují fyziologické koncentrace iontů a organické anionty slouží jako prekurzory bikarbonátu k udržení pH.",
          "Nesprávně. Fyziologický roztok se běžně intravenózně podává, i když má svá omezení.",
          "Nesprávně. Všechny krystaloidy se eliminují ledvinami, nikoli plícemi."
        ]
      },
      {
        "question": "Kam se distribuuje většina podaného izotonického krystaloidu po 1 hodině od i.v. infuze?",
        "options": [
          "Zůstává kompletně v krevních cévách",
          "Přesouvá se do intracelulárního prostoru (do buněk)",
          "Uniká do interstitia (extracelulární prostor mimo cévy)",
          "Vylučuje se slinami"
        ],
        "correct": 2,
        "explanations": [
          "Nesprávně. Kapilární membrána je pro ionty a vodu volně prostupná, roztok v cévách neudrží.",
          "Nesprávně. Izotonické roztoky nemají osmotický gradient a netlačí vodu do buněk.",
          "Správně! Cca 75-80 % podaného objemu krystaloidu uniká do intersticiálního prostoru během hodiny. Pro resuscitaci oběhu je proto potřeba větší objem krystaloidů.",
          "Nesprávně. Eliminace probíhá močí, nikoliv slinami."
        ]
      }
    ]
  },
  "pharm-4": {
    "definition": "Přípravky ke korekci poruch iontové a acidobazické rovnováhy jsou specifické roztoky elektrolytů (draslík, vápník, hořčík, hydrogenuhličitan sodný) určené k léčbě závažných život ohrožujících metabolických a elektrolytových dysbalancí.",
    "kinetics": [
      "Aplikují se převážně intravenózně s přesně definovanou rychlostí (zejména draslík).",
      "Rychle se distribuují do příslušných kompartmentů (draslík intracelulárně, vápník vazbou na proteiny a kosti).",
      "Eliminace je závislá na renálních funkcích."
    ],
    "dynamics": [
      "Hydrogenuhličitan sodný ($NaHCO_3$) přímo pufruje vodíkové ionty a zvyšuje pH krve u metabolické acidózy.",
      "Calcium gluconicum stabilizuje membránu kardiomyocytů u závažné hyperkalémie tím, že antagonizuje účinek draslíku na akční potenciál.",
      "Rychlé podání kalia může depolarizovat myokard a vyvolat srdeční zástavu v diastole."
    ],
    "clinical": [
      "Draslík se i.v. podává vždy zředěný a rychlostí maximálně 20 mmol/hod (standardně 10 mmol/hod) za EKG monitorace.",
      "U dětí se alkalizace bikarbonátem provádí velmi opatrně kvůli riziku intracerebrálního krvácení a hypokalémie.",
      "U starších pacientů s anurií je podání draslíku přísně kontraindikováno."
    ],
    "pearl": "Koncentrovaný roztok chloridu draselného (7.45% KCl) se NIKDY nesmí podat jako přímý i.v. bolus! Působí jako kardioplegický roztok (depolarizuje srdeční membrány a způsobí okamžitou asystolii). Vždy musí být naředěn do infuze a podáván kontrolovanou rychlostí!",
    "tableData": [
      {
        "name": "Maximální rychlost i.v. infuze draslíku",
        "value": "20 mmol / hodinu"
      },
      {
        "name": "Cílové pH krve",
        "value": "7.35 - 7.45"
      },
      {
        "name": "Fyziologická hladina draslíku v séru",
        "value": "3.5 - 5.1 mmol/l"
      }
    ],
    "quiz": [
      {
        "question": "Jaký je mechanismus účinku kalcium glukonátu při léčbě závažné hyperkalémie?",
        "options": [
          "Snižuje hladinu draslíku v séru stimulací jeho vylučování močí",
          "Přesouvá draslík z extracelulárního prostoru do buněk",
          "Antagonizuje účinek draslíku na membránu kardiomyocytů a stabilizuje srdeční rytmus bez ovlivnění hladiny draslíku",
          "Váže draslík v tenkém střevě a brání jeho absorpci"
        ],
        "correct": 2,
        "explanations": [
          "Nesprávně. Vápník nepůsobí jako kalium-šetřící diuretikum ani nepodporuje exkreci.",
          "Nesprávně. Přesun draslíku do buněk stimuluje inzulín s glukózou nebo beta-2 agonisté, nikoliv vápník.",
          "Správně! Kalcium glukonát je kardioprotektivní. Normalizuje dráždivost membrány kardiomyocytů narušenou hyperkalémií, čímž předchází maligním arytmiím.",
          "Nesprávně. Střevní vazbu draslíku provádí patiromer nebo polystyren sulfonát p.o./p.r."
        ]
      },
      {
        "question": "Jaké je hlavní riziko a maximální rychlost podávání draslíku (KCl) intravenózně?",
        "options": [
          "Dehydratace; max 100 mmol/hod",
          "Srdeční zástava v diastole; max 20 mmol/hod (standardně 10 mmol/hod)",
          "Hyperglykémie; max 5 mmol/hod",
          "Plicní edém; max 50 mmol/hod"
        ],
        "correct": 1,
        "explanations": [
          "Nesprávně. Draslík nevyvolává dehydrataci a 100 mmol/hod je smrtelná rychlost.",
          "Správně! Rychlý vzestup extracelulárního draslíku depolarizuje membránu srdce, což vede k arytmiím a asystolii. Bezpečná rychlost je do 10-20 mmol/hod.",
          "Nesprávně. KCl neovlivňuje metabolismus glukózy tímto způsobem.",
          "Nesprávně. Plicní edém hrozí spíše z nadbytku sodíku a vody, nikoliv specificky draslíku."
        ]
      },
      {
        "question": "Které léčivo se používá k přesunu draslíku do buněk (intracelulárně) u akutní hyperkalémie?",
        "options": [
          "Infúze glukózy s inzulínem (krátkodobě působícím)",
          "Furosemid",
          "Spironolakton",
          "Fyziologický roztok"
        ],
        "correct": 0,
        "explanations": [
          "Správně! Inzulín stimuluje Na+/K+ ATPázu na membráně buněk, což vede k rychlému přesunu draslíku do intracelulárního prostoru. Glukóza se přidává k prevenci hypoglykémie.",
          "Nesprávně. Furosemid zvyšuje vylučování draslíku močí, ale nepůsobí okamžitý přesun do buněk.",
          "Nesprávně. Spironolakton je antagonista aldosteronu a hladinu draslíku naopak zvyšuje (hrozí hyperkalémie).",
          "Nesprávně. Fyziologický roztok nemá vliv na intracelulární přesun draslíku."
        ]
      }
    ]
  },
  "pharm-5": {
    "definition": "Infúzní roztoky cukrů a volumexpandéry jsou přípravky určené k dodání volné vody a energie (glukóza) nebo k udržení a doplnění intravaskulárního objemu krve (koloidní volumexpandéry).",
    "kinetics": [
      "Roztoky glukózy (5%, 10%) se po zmetabolizování glukózy chovají jako čistá volná voda a distribuují se do celého těla (včetně buněk). V cévách zůstává jen 8 % objemu.",
      "Koloidy (albumin, želatina) obsahují makromolekuly, které neprocházejí kapilární membránou a drží vodu v cévách (onkotický tlak).",
      "Hydroxyethylškroby (HES) byly v EU staženy z trhu kvůli nefrotoxicitě a zvýšené mortalitě u kriticky nemocných."
    ],
    "dynamics": [
      "Koloidy zvyšují cirkulující objem efektivněji a dlouhodoběji než krystaloidy (poměr 1:1 vs 1:4 u krystaloidů).",
      "Koncentrovaná glukóza (20%, 40%) působí hyperosmolárně, dráždí žíly a vyžaduje podání do centrální žíly.",
      "Želatina může vyvolat anafylaktoidní reakce uvolněním histaminu."
    ],
    "clinical": [
      "Lidský albumin (5% nebo 20%) je indikován u pacientů s jaterní cirhózou (po paracentéze, při hepatorenálním syndromu) a těžkým hypoalbuminemickým edémem.",
      "U dětí se roztoky glukózy kombinují s elektrolyty k zamezení život ohrožující hyponatrémie.",
      "U starších pacientů s kardiálním selháním je nutné monitorovat objem podaných koloidů z důvodu rizika rychlého přetížení oběhu."
    ],
    "pearl": "Hydroxyethylškroby (HES) se již nesmějí v klinické praxi v EU používat pro resuscitaci oběhu. Rozsáhlé studie prokázaly, že u pacientů v sepsi a kritickém stavu způsobují akutní poškození ledvin vyžadující dialýzu a zvyšují riziko úmrtí!",
    "tableData": [
      {
        "name": "Podíl 5% glukózy, který zůstane v cévách",
        "value": "cca 8 - 10 %"
      },
      {
        "name": "Poločas želatiny v cirkulaci",
        "value": "2 - 4 hodiny"
      },
      {
        "name": "Onkotický tlak lidského albuminu 20%",
        "value": "4x vyšší než plazma"
      }
    ],
    "quiz": [
      {
        "question": "Proč byly hydroxyethylškroby (HES) staženy z klinického použití u kriticky nemocných pacientů?",
        "options": [
          "Způsobují těžkou hypoglykémii",
          "Zvyšují riziko akutního poškození ledvin (AKI) a celkovou mortalitu",
          "Vyvolávají okamžitou zástavu dechu",
          "Způsobují hemolýzu červených krvinek"
        ],
        "correct": 1,
        "explanations": [
          "Nesprávně. HES neovlivňují glykémii takovým způsobem.",
          "Správně! Klinické studie ukázaly, že HES poškozují tubulární buňky ledvin (osmotická nefróza) a u septických pacientů zvyšují potřebu náhrady funkce ledvin.",
          "Nesprávně. HES nemají přímý vliv na respirační centrum.",
          "Nesprávně. HES nepoškozují membránu erytrocytů přímo."
        ]
      },
      {
        "question": "Jak se v těle chová 5% roztok glukózy po intravenózním podání?",
        "options": [
          "Zůstává kompletně v cévách jako volumexpandér",
          "Glukóza je rychle zmetabolizována na $CO_2$ a vodu, a roztok se chová jako volná voda distribuující se do všech kompartmentů (včetně buněk)",
          "Precipituje v plicním řečišti",
          "Vylučuje se nezměněn plícemi"
        ],
        "correct": 1,
        "explanations": [
          "Nesprávně. 5% glukóza je izotonická před podáním, ale po vstupu do těla se glukóza metabolizuje a zbývá čistá voda, která v cévách nezůstává.",
          "Správně! Vzhledem k rychlé utilizaci glukózy buňkami zbývá bezsolutová voda, která se rovnoměrně rozdělí do celkové tělesné vody (2/3 intracelulárně, 1/3 extracelulárně). Není vhodná pro resuscitaci oběhu.",
          "Nesprávně. Glukóza je rozpustná a neprecipituje.",
          "Nesprávně. Voda se eliminuje ledvinami a kůží/dýcháním, ne metabolizovaná glukóza plícemi přímo."
        ]
      },
      {
        "question": "Který koloidní roztok je považován za přirozený a je indikován u pacientů s jaterním selháním a ascitem?",
        "options": [
          "Dextran",
          "Lidský albumin (např. 20%)",
          "Roztok želatiny",
          "Fyziologický roztok"
        ],
        "correct": 1,
        "explanations": [
          "Nesprávně. Dextran je syntetický polysacharid s rizikem krvácení a anafylaxe, nepoužívá se u cirhózy.",
          "Správně! Albumin je hlavní plazmatický protein tvořený játry. U cirhotiků je jeho tvorba snížena. Podání 20% albuminu zvyšuje onkotický tlak, stahuje tekutinu z intersticidia a chrání ledviny po paracentéze.",
          "Nesprávně. Želatina je syntetický koloid bez specifického přínosu pro pacienty s portální hypertenzí.",
          "Nesprávně. Fyziologický roztok je krystaloid, nikoli koloid."
        ]
      }
    ]
  },
  "pharm-6": {
    "definition": "Topické lékové formy pro užití v dermatologii jsou přípravky určené k aplikaci na kůži za účelem dosažení lokálního terapeutického účinku (protizánětlivý, antimikrobiální, hydratační, protektivní).",
    "kinetics": [
      "Absorpce (penetrace) kůží probíhá pasivní difúzí přes stratum corneum (největší bariéra).",
      "Faktory zvyšující absorpci: poškozená kůže (ekzém, popáleniny), okluze (krytí fólií), tenká kůže (obličej, skrotum) a lipofilita léčiva.",
      "Moderní formy využívají lipozomy a nanočástice pro zacílení do hlubších vrstev epidermis a dermis."
    ],
    "dynamics": [
      "Účinek závisí na typu základu (vehikula): masti (olej/voda) pro suchou a chronickou dermatidu (promaštění); krémy (emulze) pro subakutní stavy; gely a pasty pro mokvající léze.",
      "Lokální kortikosteroidy potlačují zánět, ale při dlouhodobém užívání vedou k atrofii kůže, striae a teleangiektáziím.",
      "Penetrační zesilovače (např. urea, propylenglykol) zvyšují hydrataci roztahováním keratinových struktur."
    ],
    "clinical": [
      "Výběr základu se řídí pravidlem 'na mokré mokré, na suché suché'.",
      "U dětí je poměr plochy těla k hmotnosti mnohem větší než u dospělých, což zvyšuje riziko systémové absorpce a toxicity (např. supresi osy HPA po kortikosteroidech).",
      "U starších osob je kůže tenčí (atrofická) s nižší hydratací, což mění permeabilitu pro léčiva."
    ],
    "pearl": "Při aplikaci silných lokálních kortikosteroidů (např. clobetasol) na velké plochy kůže nebo pod okluzní obvaz může dojít k tak významné systémové absorpci, že se vyvine iatrogenní Cushingův syndrom a supresi nadledvin! Vždy aplikujte v tenké vrstvě.",
    "tableData": [
      {
        "name": "Hlavní kožní bariéra pro prostup léčiv",
        "value": "Stratum corneum"
      },
      {
        "name": "Tloušťka kůže na očních víčkách (rychlá resorpce)",
        "value": "cca 0.5 mm"
      },
      {
        "name": "Základní pravidlo léčby",
        "value": "Na mokré mokré, na suché suché"
      }
    ],
    "quiz": [
      {
        "question": "Který kožní povrch vykazuje nejvyšší permeabilitu (propustnost) pro lokálně aplikovaná léčiva?",
        "options": [
          "Kůže dlaní a plosek nohou",
          "Kůže obličeje a skrota (šourku)",
          "Kůže zad",
          "Předloktí"
        ],
        "correct": 1,
        "explanations": [
          "Nesprávně. Kůže dlaní a plosek má tlustou rohovou vrstvu (stratum corneum), což absorpci výrazně omezuje.",
          "Správně! Kůže obličeje a genitálu má velmi tenkou epidermis a vysoké prokrvení, což usnadňuje průnik a zvyšuje i riziko systémových nežádoucích účinků.",
          "Nesprávně. Kůže na zádech má střední tloušťku a resorpce je pomalejší než na obličeji.",
          "Nesprávně. Předloktí se standardně používá jako referenční plocha s nízkou až střední propustností."
        ]
      },
      {
        "question": "Jaké pravidlo platí pro volbu základu u kožních onemocnění?",
        "options": [
          "Na suché léze aplikujeme alkoholové roztoky",
          "Na mokvající (vlhké) léze mastné masti",
          "Na suché léze mastné základy (masti); na mokvající léze vodné/vysušující základy (gely, lotia, pasty)",
          "Všechny stavy léčíme pudrem"
        ],
        "correct": 2,
        "explanations": [
          "Nesprávně. Alkohol kůži ještě více vysuší a podráždí.",
          "Nesprávně. Mast na mokvající ráně vytvoří neprodyšný film (okluzi), pod kterým dochází k retenci sekretu a maceraci kůže.",
          "Správně! Mastné základy (masti, mastné krémy) obnovují bariéru suché kůže. Mokvající rány vyžadují odpařování vody (gely, obklady) nebo absorpci exsudátu (pasty).",
          "Nesprávně. Pudr je vhodný jen na intertrigo, na chronický suchý ekzém nepatří."
        ]
      },
      {
        "question": "Jaký nežádoucí účinek hrozí při dlouhodobé aplikaci silných lokálních kortikosteroidů?",
        "options": [
          "Hypertrofie a ztluštění kůže",
          "Atrofie kůže, strie, teleangiektázie a riziko systémové suprese nadledvin",
          "Zvýšená pigmentace (melanóza)",
          "Zrychlené hojení ran bez jizev"
        ],
        "correct": 1,
        "explanations": [
          "Nesprávně. Kortikosteroidy tlumí syntézu kolagenu, kůži tedy ztenčují, nikoli ztlušťují.",
          "Správně! Kortikosteroidy inhibují fibroblasty a syntézu kolagenu, což vede ke ztenčení kůže (atrofie), popraskání elastických vláken (strie) a oslabení cév. Systémový průnik může potlačit osu HPA.",
          "Nesprávně. Častěji způsobují depigmentaci (zesvětlení) kůže.",
          "Nesprávně. Kortikosteroidy hojení ran naopak zpomalují a zvyšují riziko infekce."
        ]
      }
    ]
  },
  "pharm-7": {
    "definition": "Lékové formy pro transdermální a slizniční aplikaci systémově působících látek jsou navrženy tak, aby po lokální aplikaci na kůži nebo sliznici (sublingvální, nosní, vaginální) došlo k průniku léčiva do krevního oběhu s celkovým účinkem.",
    "kinetics": [
      "Transdermální terapeutické systémy (TTS náplasti) uvolňují léčivo konstantní rychlostí (nultý řád uvolňování, $dC/dt = konst.$).",
      "Zcela obchází first-pass metabolismus v játrech, což zvyšuje biologickou dostupnost lipofilních látek s vysokým jaterním clearance.",
      "Slizniční podání (např. sublingvální fentanyl, intranasální naloxon) má extrémně rychlou absorpci srovnatelnou s i.v. podáním."
    ],
    "dynamics": [
      "U TTS náplastí dochází k pozvolnému nástupu účinku (plazmatické hladiny stoupají hodiny) a po odstranění přetrvává depot v kůži.",
      "Slizniční formy se vyhýbají enzymatické degradaci v žaludku (např. peptidy jako desmopresin nosním sprejem).",
      "TTS náplasti vyžadují vysoce lipofilní látky s nízkou molekulovou hmotností (např. fentanyl, buprenorfin, nikotin, nitráty)."
    ],
    "clinical": [
      "TTS náplasti zajišťují stabilní hladinu bez píků, což snižuje výskyt nežádoucích účinků (např. u transdermálního rivastigminu u demence).",
      "Nezralá kůže novorozenců má vysokou propustnost; hrozí fatální intoxikace i z běžně aplikovaných látek na sliznice.",
      "U starých lidí je třeba zvážit úbytek podkožního tuku, což může ovlivnit rychlost resorpce z TTS depotu."
    ],
    "pearl": "TTS náplasti s obsahem opioidů (fentanyl, buprenorfin) se nesmějí vystavovat přímému působení tepla (horká koupel, vyhřívací dečky, vysoká horečka). Teplo výrazně zvyšuje prokrvení kůže a vasodilataci, což vede k prudkému zvýšení absorpce a riziku fatálního útlumu dýchání!",
    "tableData": [
      {
        "name": "Rychlost uvolňování léčiva z TTS",
        "value": "Konstantní (nultý řád)"
      },
      {
        "name": "Nástup účinku u s.l. fentanylu",
        "value": "5 - 10 minut"
      },
      {
        "name": "Doba působení jedné TTS fentanylu",
        "value": "72 hodin"
      }
    ],
    "quiz": [
      {
        "question": "Jaká kinetika uvolňování charakterizuje transdermální náplasti (TTS)?",
        "options": [
          "Kinetika 1. řádu (rychlost závisí na koncentraci)",
          "Kinetika 0. řádu (léčivo se uvolňuje konstantní rychlostí bez ohledu na koncentraci)",
          "Kinetika 2. řádu",
          "Nepravidelné pulzní uvolňování"
        ],
        "correct": 1,
        "explanations": [
          "Nesprávně. Kinetika 1. řádu by vedla k vysokému počátečnímu píku a postupnému zpomalení, což u stabilních náplastí nechceme.",
          "Správně! Membrána nebo matrix náplasti limituje prostup léčiva tak, že se uvolňuje fixní množství za jednotku času (např. 25 ug/hod u fentanylu).",
          "Nesprávně. Kinetika 2. řádu se u lékových forem nevyskytuje.",
          "Nesprávně. Cílem TTS je kontinuální a vyrovnané uvolňování, nikoliv pulzní."
        ]
      },
      {
        "question": "Proč je vystavení pacienta s fentanylovou náplastí horké lázni nebezpečné?",
        "options": [
          "Voda náplast spláchne a zruší účinek",
          "Horko způsobuje vasodilataci a zvýšené prokrvení kůže, což prudce zvýší absorpci a může vést k předávkování a zástavě dechu",
          "Teplo inaktivuje fentanyl na netoxické metabolity",
          "Fentanyl reaguje s chlórem ve vodě"
        ],
        "correct": 1,
        "explanations": [
          "Nesprávně. Moderní náplasti jsou voděodolné.",
          "Správně! Zvýšení kožní teploty nad 40 °C může zvýšit plazmatickou koncentraci fentanylu až o jednu třetinu. Hrozí těžká intoxikace opioidy s dechovou depresí.",
          "Nesprávně. Teplo fentanyl neinaktivuje.",
          "Nesprávně. Kůže chrání léčivo před chemickou reakcí s chlórem z vnějšku."
        ]
      },
      {
        "question": "Která z následujících vlastností je podmínkou pro to, aby mohla být látka formulována do transdermální náplasti (TTS)?",
        "options": [
          "Vysoká hydrofilita a molekulová hmotnost > 2000 Da",
          "Vysoká lipofilita, nízká molekulová hmotnost a vysoká účinnost (nízká terapeutická dávka)",
          "Schopnost tvořit krystaly v podkoží",
          "Úplná nerozpustnost ve vodě i tucích"
        ],
        "correct": 1,
        "explanations": [
          "Nesprávně. Velké a hydrofilní molekuly přes lipidovou bariéru kůže neprojdou.",
          "Správně! Stratum corneum propouští jen lipofilní molekuly (do cca 500 Da). Vzhledem k malé ploše náplasti musí být lék velmi potentní (dávka v miligramech či mikrogramech za den).",
          "Nesprávně. Krystalizace v podkoží by zablokovala absorpci.",
          "Nesprávně. Léčivo musí mít určitou rozpustnost v obou prostředích, aby mohlo difundovat."
        ]
      }
    ]
  },
  "pharm-8": {
    "definition": "Lékové formy pro inhalační aplikaci jsou určeny k vdechování plynů, par nebo aerosolů (kapky, prášky) s cílem dosáhnout lokálního účinku v dýchacích cestách nebo systémového účinku po vstřebání plicními alveoly.",
    "kinetics": [
      "Aerosoly musí mít optimální velikost částic (1 - 5 mikrometrů) pro depozici v bronchiálním stromu. Větší částice zachytí orofarynx, menší (< 1 um) pacient vydechne.",
      "Inhalační kortikosteroidy (IKS) podléhají clearance v plicích; spolknutý podíl (až 80-90 % bez použití spaceru) se vstřebává v GIT a podléhá first-pass efektu.",
      "Alveolární membrána je extrémně tenká a prokrvená, což umožňuje bleskovou systémovou resorpci plynných anestetik."
    ],
    "dynamics": [
      "Lokální bronchodilatancia (SABA, LABA, LAMA) působí přímo na receptory hladké svaloviny průdušek s minimem systémových kardiotoxických účinků.",
      "Inhalační kortikosteroidy (např. budesonid, flutikason) tlumí lokální zánět v průduškách u astmatu.",
      "Nedostatečná inhalační technika vede k depozici kortikosteroidů v ústech a rozvoji lokální kandidózy."
    ],
    "clinical": [
      "Klíčové je použití spacerů (nástavců) u aerosolových dávkovačů (pMDI), které sníží rychlost částic a zvýší depozici v plicích.",
      "U dětí do 4-5 let se inhalace provádí maskou napojenou na spacer; u starších dětí DPI (práškové inhalátory) vyžadující dostatečnou inspirační rychlost.",
      "U starších pacientů s kognitivním deficitem nebo artritidou rukou je vhodnější použití nebulizátorů nebo dechem aktivovaných inhalátorů."
    ],
    "pearl": "Po každé inhalaci inhalačního kortikosteroidu (IKS) si pacient musí důkladně vypláchnout ústa vodou a vodu vyplivnout (případně se najíst). Tím se odstraní zbytek steroidu ulpělého na sliznici orofaryngu, což předchází vzniku orofaryngeální kandidózy (moučnivky) a chropotu (dysfonii)!",
    "tableData": [
      {
        "name": "Optimální velikost inhalačních částic",
        "value": "1 - 5 um"
      },
      {
        "name": "Podíl spolknuté dávky z pMDI bez spaceru",
        "value": "až 80 - 90 %"
      },
      {
        "name": "Doba trvání post-inhalasního výplachu",
        "value": "cca 10 - 20 sekund"
      }
    ],
    "quiz": [
      {
        "question": "Jaká velikost částic aerosolu je optimální pro dosažení účinku v dolních dýchacích cestách (průduškách)?",
        "options": [
          "Větší než 20 mikrometrů",
          "1 až 5 mikrometrů",
          "Méně než 0.5 mikrometru",
          "Částice nehrají žádnou roli"
        ],
        "correct": 1,
        "explanations": [
          "Nesprávně. Částice > 10 um narážejí v ústní dutině a hltanu a do plic se nedostanou.",
          "Správně! Částice o velikosti 1-5 um sedimentují v bronchiálním stromu díky optimální setrvačnosti a gravitační sedimentaci.",
          "Nesprávně. Částice < 1 um se chovají jako plyn a jsou při výdechu vyfouknuty z plic ven bez depozice.",
          "Nesprávně. Velikost částic je nejdůležitější fyzikální vlastností určující účinnost inhalační léčby."
        ]
      },
      {
        "question": "K čemu slouží inhalační nástavec (spacer) u aerosolových dávkovačů (pMDI)?",
        "options": [
          "Zvyšuje dávku léčiva v jedné inhalaci",
          "Zpomaluje rychlost aerosolu a odpařuje hnací plyn, čímž snižuje depozici v ústech a zvyšuje podíl léčiva v plicích",
          "Filtruje bakterie z inhalátoru",
          "Zamezuje vstřebávání léčiva v alveolech"
        ],
        "correct": 1,
        "explanations": [
          "Nesprávně. Spacer nemění množství léčiva vystříknutého z ventilu.",
          "Správně! Spacer eliminuje potřebu koordinace stisku a nádechu, eliminuje náraz velkých rychlých kapek v krku a snižuje nežádoucí spolknutí steroidů.",
          "Nesprávně. Spacer není antibakteriální filtr.",
          "Nesprávně. Resorpci v alveolech nijak nebrání, podporuje žádoucí plicní depozici."
        ]
      },
      {
        "question": "Jakému lokálnímu nežádoucímu účinku předcházíme vypláchnutím úst po inhalaci budesonidu?",
        "options": [
          "Ztrátě chuti",
          "Orofaryngeální kandidóze (moučnivce) a chropotu",
          "Zubnímu kazu",
          "Zánětu slinných žláz"
        ],
        "correct": 1,
        "explanations": [
          "Nesprávně. Kortikosteroidy nezpsobují primárně ztrátu chuti (ageusii).",
          "Správně! Lokální imunosupresivní účinek kortikosteroidu ulpělého v hltanu usnadňuje přemnožení kvasinek (Candida albicans) a myopatii hlasivek (dysfonii).",
          "Nesprávně. IKS nepodporují vznik zubního kazu přímo.",
          "Nesprávně. Slinné žlázy nejsou inhalačními steroidy poškozovány."
        ]
      }
    ]
  },
  "pharm-9": {
    "definition": "Oční, nosní a ušní topické lékové formy jsou kapalné, polotuhé nebo tuhé přípravky určené k aplikaci na sliznici oka (spojivkový vak), nosní sliznici nebo do vnějšího zvukovodu k dosažení lokálního účinku.",
    "kinetics": [
      "Oční kapky vyžadují sterilitu a izotonii. Po nakapání dochází k rychlému odplavení slzami (biodostupnost v oku < 5-10 %).",
      "Systémová absorpce z oka probíhá přes nasolakrimální ductus (slzný kanálek) do nosní sliznice, kde se lék vstřebá přímo do krve bez first-pass efektu.",
      "Nosní decongestiva (např. oxymetazolin) mají rychlý lokální stahující účinek na cévy, ale při dlouhodobé aplikaci (> 5-7 dní) poškozují řasinkový epitel."
    ],
    "dynamics": [
      "Beta-blokátory v očních kapkách (např. timolol) snižují nitrooční tlak u glaukomu, ale po vstřebání mohou vyvolat systémové nežádoucí účinky (bradykardii, bronchospasmus).",
      "Nosní kortikosteroidy tlumí alergický zánět sliznice.",
      "Ušní kapky (otoguttae) působí lokálně na kůži zvukovodu; nesmějí se aplikovat při perforaci bubínku, pokud jsou ototoxické (např. aminoglykosidy)."
    ],
    "clinical": [
      "U očních kapek je důležitá technika komprese slzného kanálku (stlačení vnitřního koutku oka na 1-2 minuty), což minimalizuje systémovou absorpci.",
      "U dětí se dává přednost jednodávkovým obalům bez konzervantů (např. benzalkonium chlorid), které nedráždí oko.",
      "Ušní kapky se před aplikací musí zahřát na tělesnou teplotu, jinak chladný roztok drážděním vestibulárního aparátu vyvolá vertigo a nauzeu."
    ],
    "pearl": "Při aplikaci beta-blokátorů (např. timololu) ve formě očních kapek u pacientů s astmatem nebo těžkou bradykardií může dojít k systémové resorpci slzným kanálkem a vyvolání život ohrožujícího bronchospasmu či srdečního bloku. Vždy stlačte vnitřní koutek oka po aplikaci!",
    "tableData": [
      {
        "name": "Objem jedné kapky z kapátka",
        "value": "cca 30 - 50 ul"
      },
      {
        "name": "Maximální kapacita spojivkového vaku",
        "value": "cca 10 - 20 ul"
      },
      {
        "name": "Maximální doba užívání nosních decongestiv",
        "value": "5 - 7 dní"
      }
    ],
    "quiz": [
      {
        "question": "Proč se doporučuje stlačit vnitřní koutek oka (nasolakrimální kanálek) na 1-2 minuty po aplikaci očních kapek?",
        "options": [
          "Aby se zabránilo vypadnutí čočky",
          "Aby se minimalizoval odtok léčiva do nosu a jeho následná systémová absorpce s rizikem nežádoucích účinků",
          "Pro urychlení metabolismu léčiva přímo v oku",
          "Aby lék nestékal po tváři"
        ],
        "correct": 1,
        "explanations": [
          "Nesprávně. To s čočkami nesouvisí.",
          "Správně! Slzy odvádějí přebytečné léčivo do slzného vaku a nosní dutiny, kde se přes bohatě prokrvenou sliznici rychle vstřebává do systémového oběhu a obchází játra.",
          "Nesprávně. Stlačení neurychluje metabolickou degradaci v oku.",
          "Nesprávně. Estetické stékání po tváři není hlavním klinickým rizikem, tím je systémová toxicita."
        ]
      },
      {
        "question": "Co se může stát při dlouhodobém používání (nad 1 týden) nosních kapek s obsahem decongestiv (např. oxymetazolin)?",
        "options": [
          "Vzniká trvalá ztráta čichu",
          "Dochází k atrofii nosní sliznice a rozvoji medikamentózní rýmy (rhinitis medicamentosa) s rebound fenoménem (ucpání nosu)",
          "Způsobuje to hypertrofii mandlí",
          "Léčivo se kompletně inaktivuje a přestává účinkovat bez jakýchkoliv rizik"
        ],
        "correct": 1,
        "explanations": [
          "Nesprávně. Ztráta čichu (anosmie) není typickým následkem decongestiv.",
          "Správně! Dlouhodobá ischemie sliznice vede k reaktivní hyperémii (rebound fenoménu). Pacient má pocit ucpaného nosu a kape častěji, čímž vzniká závislost na kapkách (sanorinismus).",
          "Nesprávně. Decongestiva nemají vliv na velikost lymfatické tkáně mandlí.",
          "Nesprávně. Tachyfylaxe nastává, ale doprovází ji strukturální poškození sliznice."
        ]
      },
      {
        "question": "Proč je nutné ohřát ušní kapky v dlani na tělesnou teplotu před aplikací do ucha?",
        "options": [
          "Chladný roztok ničí bubínek",
          "Teplota aktivuje desinfekční přísady v kapkách",
          "Chladný roztok dráždí receptory polokruhovitých kanálků vnitřního ucha a vyvolává vertigo (závrať), nauzeu a nystagmus",
          "Chladný roztok se ve zvukovodu nevstřebává"
        ],
        "correct": 2,
        "explanations": [
          "Nesprávně. Bubínek chladem nepraskne.",
          "Nesprávně. Účinnost kapek není závislá na mírném ohřevu pro aktivaci.",
          "Správně! Kalorická stimulace vnitřního ucha chladnou tekutinou vyvolává reakci vestibulárního aparátu (tzv. kalorický nystagmus a vertigo). Ohřátí na ~37 °C tomu spolehlivě zabrání.",
          "Nesprávně. Ušní kapky působí lokálně, resorpce do krve zvukovodem není cílem."
        ]
      }
    ]
  },
  "pharm-10": {
    "definition": "Lékové formy k topické rektální a vaginální aplikaci jsou pevné (supozitoria, globule), polotuhé (masti, krémy) nebo tekuté (klyzmata, pěny) přípravky určené k zavedení do konečníku nebo pochvy k dosažení lokálního účinku.",
    "kinetics": [
      "Rektální podání obchází first-pass efekt v játrech z cca 50-70 %. Dolní a střední rektální žíly odtékají přímo do v. cava inferior, horní rektální žíla do v. portae.",
      "Absorpce z rektálního slizu je nepravidelná a pomalá kvůli malé ploše a absenci klků.",
      "Vaginální sliznice je vysoce vaskularizovaná; po podání vaginálních forem (např. estrogenů) může docházet k částečné systémové absorpci."
    ],
    "dynamics": [
      "Rektální pěny a klyzmata (např. s mesalazinem nebo budesonidem) působí lokálně protizánětlivě na sliznici tlustého střeva u ulcerózní kolitidy.",
      "Vaginální globule (např. s clotrimazolem) působí lokálně antimykoticky.",
      "Rektální supozitoria (např. s paracetamolem) tlumí systémově bolest a horečku u pacientů, kteří nemohou polykat."
    ],
    "clinical": [
      "Rektální cesta je výhodná u dětí při febrilních křečích (diazepam p.r.) nebo při zvracení (antiemetika p.r.).",
      "Při zavádění supozitorií u dětí se doporučuje přidržet hýždě u sebe, aby nedošlo k reflexnímu vypuzení.",
      "U starších pacientů s hemoroidy může být aplikace rektálních forem bolestivá a hrozí riziko poranění sliznice."
    ],
    "pearl": "Rektální čípky se nesmí zavádět příliš hluboko do konečníku, pokud cílíme na systémový účinek bez first-pass efektu. Hluboké zavedení posune čípek do oblasti drénované v. rectalis superior, která ústí do portálního oběhu, a lék tak bude metabolizován v játrech!",
    "tableData": [
      {
        "name": "Podíl first-pass efektu u rektálního podání",
        "value": "cca 30 - 50 % (horní žíla)"
      },
      {
        "name": "Průměrný pH rektální tekutiny",
        "value": "7.2 - 7.4"
      },
      {
        "name": "Objem tekutiny v rektu",
        "value": "pouze 1 - 3 ml"
      }
    ],
    "quiz": [
      {
        "question": "Proč rektální podání léčiv (např. supozitorií) pouze částečně obchází first-pass efekt v játrech?",
        "options": [
          "Protože sliznice konečníku léčivo kompletně inaktivuje",
          "Vzhledem k anatomickému uspořádání žilního odtoku: dolní a střední rektální žíly vedou krev přímo do v. cava inferior (mimo játra), zatímco horní rektální žíla vede krev do v. portae (do jater)",
          "Rektum neobsahuje žádné cévy a vstřebávání probíhá lymfou",
          "First-pass efektu se nelze rektálně vyhnout vůbec"
        ],
        "correct": 1,
        "explanations": [
          "Nesprávně. Rektální sliznice má nízkou enzymatickou aktivitu a léčivo nedeaktivuje.",
          "Správně! Anatomická hranice určuje osud léčiva. Pokud se čípek rozpustí v dolní části rekta, většina dávky obchází játra. Pokud se posune vysoko, vstřebá se do portálního řečiště.",
          "Nesprávně. Rektum je bohatě zásobeno cévními pleteněmi (plexus hemorrhoidalis).",
          "Nesprávně. Částečně se mu vyhnout lze, a to z cca 50-70 % podle polohy rozpuštěného čípku."
        ]
      },
      {
        "question": "Která z následujících situací je hlavní indikací pro podání diazepamu rektálně (ve formě rektálního roztoku/tuby)?",
        "options": [
          "Chronická léčba úzkosti u dospělých",
          "Akutní febrilní křeče nebo status epilepticus u malých dětí s nemožností i.v. přístupu",
          "Preventivní podání před spaním u dětí",
          "Léčba zácpy"
        ],
        "correct": 1,
        "explanations": [
          "Nesprávně. Pro chronickou léčbu se rektální formy nepoužívají z praktických důvodů.",
          "Správně! Rektální diazepam (např. Diazepam Desitin) se velmi rychle vstřebává sliznicí a účinkuje do několika minut, což z něj činí ideální lék první volby pro rodiče/záchranáře při křečích u dětí.",
          "Nesprávně. Preventivní podání benzodiazepinu bez akutní indikace je u dětí nebezpečné.",
          "Nesprávně. Diazepam nemá laxativní účinek."
        ]
      },
      {
        "question": "Proč je lokální aplikace estrogenů (např. estriolu) ve vaginálních krémech u postmenopauzálních žen výhodná?",
        "options": [
          "Působí čistě systémově a nemá žádný lokální efekt",
          "Poskytuje vysokou lokální koncentraci v urogenitálním traktu (léčba atrofické vaginitidy) s minimálními systémovými hladinami a riziky",
          "Úplně potlačuje syntézu cholesterolu v játrech",
          "Zabraňuje otěhotnění"
        ],
        "correct": 1,
        "explanations": [
          "Nesprávně. Cílem je lokální efekt na vaginální sliznici.",
          "Správně! Nízké dávky estriolu aplikované lokálně obnovují sliznici pochvy a močové trubice, zmírňují suchost a infekce, přičemž systémová expozice je minimální (bezpečnější z hlediska tromboembolických komplikací).",
          "Nesprávně. Estrogeny neovlivňují syntézu cholesterolu v játrech přes lokální vaginální aplikaci tímto způsobem.",
          "Nesprávně. Estriol v této formě a dávce nepůsobí jako antikoncepce."
        ]
      }
    ]
  },
  "pharm-11": {
    "definition": "Absorpce (vstřebávání) je proces průniku léčiva z místa podání do systémové cirkulace. Biologická dostupnost (F) vyjadřuje podíl podané dávky, který se dostane v nezměněné formě do systémového oběhu.",
    "kinetics": [
      "Transport přes membrány probíhá nejčastěji prostou pasivní difúzí (lipofilní a neionizované látky), usnadněnou difúzí nebo aktivním transportem.",
      "P-glykoprotein (P-gp) funguje jako efluxní pumpa na enterocytech a limituje absorpci mnoha léčiv (např. digoxinu).",
      "Henderson-Hasselbalchova rovnice určuje ionizaci slabých kyselin a zásad: slabé kyseliny se lépe vstřebávají v kyselém pH žaludku, slabé zásady v zásaditém pH střeva."
    ],
    "dynamics": [
      "Rychlost a rozsah absorpce určují rychlost nástupu a trvání účinku léčiva.",
      "Bioekvivalence dvou přípravků se posuzuje porovnáním plochy pod křivkou (AUC), maximální koncentrace (Cmax) a času k jejímu dosažení (tmax).",
      "Potrava může absorpci zpomalit (prodloužení tmax) nebo snížit tvorbou nerozpustných chelátů (např. vápník v mléce + ciprofloxacin)."
    ],
    "clinical": [
      "Vápník, železo nebo antacida mohou snížit biologickou dostupnost tetracyklinů a fluoroquinolonů až o 80 %.",
      "U dětí je acidita žaludku snížená (vyšší pH u novorozenců), což zvyšuje absorpci kyselině-labilních látek (peniciliny).",
      "U starých lidí je zpomaleno vyprazdňování žaludku a snížen lokální průtok krve splanchnikem."
    ],
    "pearl": "U léčiv s úzkým terapeutickým indexem (např. cyklosporin, digoxin) může i malá změna biologické dostupnosti vyvolaná záměnou přípravků (generická substituce s jinou pomocnou látkou) vést k terapeutickému selhání nebo naopak k toxickému předávkování!",
    "tableData": [
      {
        "name": "Standardní rozmezí bioekvivalence (90% CI)",
        "value": "80 - 125 %"
      },
      {
        "name": "Vliv first-pass efektu na F nitroglycerinu p.o.",
        "value": "F < 1 %"
      },
      {
        "name": "pH u novorozenců v žaludku po porodu",
        "value": "6.0 - 8.0"
      }
    ],
    "quiz": [
      {
        "question": "Jak se definuje biologická dostupnost (F)?",
        "options": [
          "Podíl dávky léčiva, který se vyloučí ledvinami v nezměněné formě",
          "Podíl podané dávky léčiva, který se dostane v aktivní formě do systémové cirkulace",
          "Rychlost, jakou se léčivo metabolizuje v játrech",
          "Množství léčiva navázané na plazmatické proteiny"
        ],
        "correct": 1,
        "explanations": [
          "Nesprávně. To je renální exkretovaná frakce ($f_e$), ne biologická dostupnost.",
          "Správně! Vyjadřuje se jako frakce (od 0 do 1) nebo procento (0-100 %). U i.v. podání je definována jako 100 %.",
          "Nesprávně. Rychlost metabolismu popisuje clearance nebo poločas, ne dostupnost.",
          "Nesprávně. To je vazebná frakce, ne biologická dostupnost."
        ]
      },
      {
        "question": "Který membránový transportér (efluxní pumpa) snižuje absorpci léčiv z lumen střeva?",
        "options": [
          "Cytochrom P450 3A4",
          "P-glykoprotein (P-gp, MDR1)",
          "Organický transportér aniontů (OAT)",
          "Sodíkovo-draslíková pumpa (Na+/K+ ATPáza)"
        ],
        "correct": 1,
        "explanations": [
          "Nesprávně. CYP3A4 je metabolický enzym, nikoliv transportní protein, ačkoliv s P-gp úzce spolupracuje.",
          "Správně! P-glykoprotein aktivně pumpuje cizorodé látky (včetně mnoha léčiv) z enterocytu zpět do lumen střeva, čímž limituje jejich absorpci.",
          "Nesprávně. OAT transportuje látky převážně v ledvinách a játrech.",
          "Nesprávně. Na+/K+ ATPáza udržuje membránový potenciál, nepumpuje xenobiotika do lumen střeva."
        ]
      },
      {
        "question": "Co se porovnává při zkouškách bioekvivalence generických léčiv s originálními?",
        "options": [
          "Pouze chemická čistota účinné látky",
          "Plocha pod křivkou koncentrace (AUC), maximální koncentrace (Cmax) a čas k jejímu dosažení (tmax)",
          "Cena a dostupnost na trhu",
          "Rychlost vylučování léčiva stolicí"
        ],
        "correct": 1,
        "explanations": [
          "Nesprávně. Chemická čistota je nutná, ale zkoušky bioekvivalence sledují chování v organismu in vivo.",
          "Správně! Bioekvivalenční studie testují, zda generický přípravek vykazuje stejný profil absorpce (AUC, Cmax, tmax) jako referenční originální lék u zdravých dobrovolníků.",
          "Nesprávně. Ekonomické parametry nejsou součástí farmakokinetického hodnocení bioekvivalence.",
          "Nesprávně. Stolice není standardním parametrem bioekvivalence, měří se koncentrace v plazmě."
        ]
      }
    ]
  },
  "pharm-12": {
    "definition": "Distribuce je reverzibilní prostup léčiva ze systémové cirkulace do tkání a orgánů. Distribuční objem ($V_d$) je teoretický objem tělesné vody, ve kterém by se léčivo muselo rovnoměrně rozpustit, aby dosáhlo stejné koncentrace jako v plazmě.",
    "kinetics": [
      "Distribuce závisí na prokrvení tkání, rozpustnosti léčiva (lipofilní procházejí snadněji), vazbě na proteiny a přítomnosti tkáňových bariér (např. hematoencefalická bariéra).",
      "Vazba na plazmatické proteiny: kyselá léčiva se vážou na albumin, zásaditá léčiva na alfa-1-acid glykoprotein. Aktivní je pouze volná (nenavázaná) frakce léčiva.",
      "Léčiva s vysokou vazbou na tkáně (např. digoxin, amiodaron) mají obrovský $V_d$ (stovky až tisíce litrů), který výrazně převyšuje objem lidského těla."
    ],
    "dynamics": [
      "Léčiva s malým $V_d$ (kolem 3-5 L) zůstávají v krevním řečišti (např. heparin), zatímco s velkým $V_d$ se masivně ukládají v tkáních.",
      "Hematoencefalická bariéra (HEB) využívá těsné spoje (tight junctions) cévního endotelu a transportéry P-gp k zamezení prostupu hydrofilních a toxických látek.",
      "Vytěsnění léčiva z vazby na albumin jinou látkou (např. salicyláty vytěsní warfarin) zvýší volnou frakci a může vyvolat toxické projevy."
    ],
    "clinical": [
      "U dětí je podíl celkové tělesné vody vyšší (až 80 % u novorozenců), což vyžaduje vyšší dávky hydrofilních léčiv na kg hmotnosti.",
      "U starších lidí dochází k úbytku tělesné vody a svalů a nárůstu tělesného tuku, což prodlužuje poločas a akumulaci lipofilních léčiv (např. diazepamu).",
      "Při hypoalbuminémii (cirhóza, nefrotický syndrom) stoupá volná frakce vysoce vazebných léčiv (warfarin, fenytoin), což vyžaduje úpravu dávkování."
    ],
    "pearl": "Distribuční objem ($V_d$) přímo určuje velikost nasycovací dávky (loading dose). U léků s obrovským $V_d$ (např. digoxin, amiodaron) musíme podat na začátku léčby vysokou nasycovací dávku, abychom saturovali tkáňové rezervoáry a rychle dosáhli terapeutické hladiny v plazmě!",
    "tableData": [
      {
        "name": "Objem plazmy u 70kg dospělého",
        "value": "cca 3 litry"
      },
      {
        "name": "Distribuční objem digoxinu",
        "value": "cca 350 - 500 litrů"
      },
      {
        "name": "Podíl tělesného tuku u starých lidí (nárůst)",
        "value": "až o 35 %"
      }
    ],
    "quiz": [
      {
        "question": "Co platí pro volnou (nenavázanou) frakci léčiva v plazmě?",
        "options": [
          "Je farmakologicky neaktivní a nemůže být eliminována ledvinami",
          "Je farmakologicky aktivní, může difundovat do tkání, vázat se na receptory a podléhat eliminaci",
          "Je chráněna před metabolismem v játrech",
          "Její koncentrace je nulová u všech léčiv"
        ],
        "correct": 1,
        "explanations": [
          "Nesprávně. Nenavázaná frakce je naopak jediná aktivní a eliminovatelná.",
          "Správně! Pouze volné léčivo prochází membránami a vykazuje účinek. Vazba na proteiny funguje jako depotní rezervoár.",
          "Nesprávně. Volné léčivo je metabolizováno enzymy, navázané je chráněno.",
          "Nesprávně. Volná frakce je přítomna u všech léčiv v různých poměrech (od 1 % do 100 %)."
        ]
      },
      {
        "question": "Jaký vliv má úbytek svalové hmoty a nárůst tělesného tuku u starších lidí na distribuci diazepamu (lipofilní lék)?",
        "options": [
          "Distribuce se nemění",
          "Snižuje se distribuční objem a zkracuje poločas",
          "Zvyšuje se distribuční objem a výrazně se prodlužuje poločas eliminace (hrozí kumulace a toxicita)",
          "Diazepam se u starých lidí nevstřebává"
        ],
        "correct": 2,
        "explanations": [
          "Nesprávně. Stárnutí výrazně mění distribuční parametry.",
          "Nesprávně. U lipofilních léčiv se distribuční objem zvyšuje s množstvím tuku.",
          "Správně! Diazepam se ukládá v tukové tkáni, která slouží jako obrovský depot. Poločas se u starších osob může prodloužit z 24 až na 80-90 hodin.",
          "Nesprávně. Absorpce diazepamu p.o. zůstává dobrá, mění se však distribuce a eliminace."
        ]
      },
      {
        "question": "Pokud má léčivo distribuční objem (Vd) 500 litrů u 70kg pacienta, co to znamená?",
        "options": [
          "Pacient musel vypít 500 litrů vody",
          "Léčivo je extrémně hydrofilní a zůstává v plazmě",
          "Léčivo se masivně distribuuje a váže se v tkáních (např. ve svalech či tuku), takže jeho koncentrace v plazmě je velmi nízká",
          "Léčivo se nevstřebalo do krevního oběhu"
        ],
        "correct": 2,
        "explanations": [
          "Nesprávně. Distribuční objem je teoretický/matematický prostor, nikoliv fyzický objem tělesné vody.",
          "Nesprávně. Hydrofilní léčiva mají malý $V_d$ (cca 10-20 litrů).",
          "Správně! Velký $V_d$ (> 50 litrů) značí, že většina léčiva opustila plazmu a akumuluje se v tkáních. Plazmatická hladina je pak zlomkem celkového množství v těle.",
          "Nesprávně. $V_d$ se počítá pouze pro absorbované léčivo."
        ]
      }
    ]
  },
  "pharm-13": {
    "definition": "Metabolismus (biotransformace) je enzymatická přeměna léčiv v organismu, jejímž cílem je převést lipofilní látky na hydrofilnější metabolity, které lze snadno vyloučit ledvinami či žlučí.",
    "kinetics": [
      "Metabolismus probíhá hlavně v játrech (hepatocyty) a dělí se na 2 fáze: Fáze I (funkcionalizace - oxidace, redukce, hydrolýza) a Fáze II (konjugace - glukuronidace, sulfatace, acetylace).",
      "Cytochrom P450 (CYP) je rodina hemoproteinových monooxygenáz v endoplazmatickém retikulu zodpovědná za většinu reakcí Fáze I.",
      "Inhibice enzymů (např. ketokonazolem, grapefruitem) okamžitě blokuje metabolismus ko-medikace, což vede k jejímu hromadění a toxicitě. Indukce enzymů (např. rifampicinem) zrychluje metabolismus a snižuje účinnost."
    ],
    "dynamics": [
      "Některá léčiva se podávají jako neaktivní proléčiva (prodrugs) a metabolická aktivace je nezbytná pro jejich účinek (např. kodein na morfin přes CYP2D6, clopidogrel přes CYP2C19).",
      "Některé metabolity jsou aktivní (např. diazepam se mění na aktivní oxazepam) a prodlužují účinek.",
      "Toxické metabolity (např. NAPQI u paracetamolu) vznikají při saturaci standardních drah a vyžadují konjugaci s glutathionem."
    ],
    "clinical": [
      "U novorozenců je metabolická kapacita jater nezralá; deficit glukuronidace vede k toxicitě chloramfenikolu (syndrom šedého kojence).",
      "U starších osob klesá hmotnost jater a průtok krve portálním oběhem až o 40 %, což snižuje clearance léčiv s vysokou extrakcí.",
      "Při jaterní cirhóze je nutné snižovat dávky léčiv metabolizovaných v játrech a zvážit riziko encefalopatie."
    ],
    "pearl": "Grapefruitový džus je silným a ireversibilním inhibitorem střevního CYP3A4. Vypití pouhé jedné sklenice džusu může zablokovat metabolismus běžně užívaných statinů (simvastatin, atorvastatin) nebo blokátorů vápníkových kanálků, což vede k mnohonásobnému zvýšení plazmatických hladin a riziku rhabdomyolýzy či těžké hypotenze!",
    "tableData": [
      {
        "name": "Podíl léčiv metabolizovaných systémem CYP450",
        "value": "cca 75 %"
      },
      {
        "name": "Doba potřebná k indukci enzymů (plný rozvoj)",
        "value": "1 - 2 týdny"
      },
      {
        "name": "Rychlost inhibice enzymů (nástup)",
        "value": "téměř okamžitě (24 hod)"
      }
    ],
    "quiz": [
      {
        "question": "Co je hlavním cílem biotransformace (metabolismu) léčiv v těle?",
        "options": [
          "Zvýšení lipofility léčiva pro lepší průnik do mozku",
          "Převod léčiva na hydrofilnější (polárnější) formu, kterou lze snáze vyloučit močí nebo žlučí",
          "Zvýšení vazby léčiva na plazmatické proteiny",
          "Urychlení resorpce léčiva v žaludku"
        ],
        "correct": 1,
        "explanations": [
          "Nesprávně. Zvýšení lipofility by bránilo exkreci ledvinami, protože lipofilní molekuly se v tubulech pasivně reabsorbují zpět do krve.",
          "Správně! Ledviny neumí účinně vyloučit lipofilní látky. Metabolismus je transformuje na polární konjugáty, které se v nefronu nereabsorbují.",
          "Nesprávně. Konjugáty mají obvykle nižší vazbu na proteiny a vyšší clearance.",
          "Nesprávně. Metabolismus probíhá po absorpci, nikoliv před ní."
        ]
      },
      {
        "question": "Jak se liší vliv induktoru a inhibitoru cytochromu P450 na ko-medikaci?",
        "options": [
          "Induktor metabolismus zpomaluje, inhibitor jej zrychluje",
          "Induktor zrychluje metabolismus léčiva (snižuje jeho hladinu a účinek); inhibitor metabolismus zpomaluje (zvyšuje hladinu a hrozí toxicita)",
          "Oba mají stejný vliv a zvyšují účinnost léčiva",
          "Nemají žádný vliv na koncentraci léčiva"
        ],
        "correct": 1,
        "explanations": [
          "Nesprávně. Je to přesně naopak.",
          "Správně! Induktory (např. rifampicin, fenobarbital) zvyšují syntézu enzymů, což zrychluje clearance. Inhibitory (např. erytromycin, ketokonazol) blokují aktivní místo enzymu.",
          "Nesprávně. Působí protichůdně a jejich interakce jsou klinicky velmi nebezpečné.",
          "Nesprávně. Interakce přes CYP450 jsou nejčastější příčinou lékových interakcí."
        ]
      },
      {
        "question": "Která z následujících látek je aktivována metabolismem (jedná se o prodrug)?",
        "options": [
          "Diazepam",
          "Paracetamol",
          "Clopidogrel",
          "Penicilin G"
        ],
        "correct": 2,
        "explanations": [
          "Nesprávně. Diazepam je sám o sobě aktivní, i když jeho metabolity jsou také aktivní.",
          "Nesprávně. Paracetamol je aktivní přímo, metabolismem vzniká spíše nežádoucí toxický metabolit.",
          "Správně! Clopidogrel (antiagregans) je proléčivo, které musí být v játrech dvoustupňově oxidováno enzymy CYP2C19 a CYP3A4 na aktivní thiolový metabolit.",
          "Nesprávně. Penicilin G je aktivní přímo a vylučuje se ledvinami nezměněn."
        ]
      }
    ]
  },
  "pharm-14": {
    "definition": "Eliminace je nevratné odstranění léčiva z těla, které zahrnuje biotransformaci (metabolismus v játrech) a exkreci (vylučování ledvinami, žlučí, plícemi atd.). Biologický poločas ($t_{1/2}$) je čas potřebný k poklesu koncentrace léčiva v plazmě o polovinu.",
    "kinetics": [
      "Celková clearance ($Cl$) je objem plazmy zcela očištěný od léčiva za jednotku času ($Cl = Cl_{renal} + Cl_{hepatic} + Cl_{other}$).",
      "Kinetika 1. řádu: rychlost eliminace je přímo úměrná koncentraci ($dC/dt = -k \\cdot C$). Poločas $t_{1/2}$ je konstantní a nezávislý na dávce.",
      "Kinetika 0. řádu (nelineární): eliminační mechanismy (enzymy, transportéry) jsou saturovány. Rychlost eliminace je konstantní ($dC/dt = -k$) a nezávislá na koncentraci (např. alkohol, vysoké dávky salicylátů, fenytoin)."
    ],
    "dynamics": [
      "Poločas $t_{1/2}$ určuje dobu do kompletního vyloučení (cca 4-5 poločasů) a také čas k dosažení ustáleného stavu (steady state, $C_{ss}$) při opakovaném podávání.",
      "Renální eliminace zahrnuje glomerulární filtraci (pouze volné léčivo), aktivní tubulární sekreci (přenašeči OAT/OCT) a pasivní tubulární reabsorpci (závislou na pH moči).",
      "Alkalizace moči (podáním bikarbonátu) zvyšuje ionizaci slabých kyselin (např. salicylátů), což brání reabsorpci a urychluje jejich vyloučení ledvinami."
    ],
    "clinical": [
      "Při renální insuficienci klesá clearance a prodlužuje se $t_{1/2}$ hydrofilních léčiv (např. vankomycin, aminoglykosidy), což vyžaduje snížení dávek nebo prodloužení intervalu.",
      "U dětí je glomerulární filtrace plně zralá až kolem 1. roku života; u novorozenců je vylučování výrazně pomalejší.",
      "U starších pacientů dochází k fyziologickému poklesu renálních funkcí (klesá GFR) i bez přítomnosti onemocnění ledvin (vhodné kalkulovat clearance kreatininu dle Cockcroft-Gaulta)."
    ],
    "pearl": "K dosažení ustáleného stavu (steady state) při kontinuálním podávání léčiva je vždy potřeba 4 až 5 biologických poločasů ($t_{1/2}$), a to bez ohledu na velikost dávky nebo interval podávání! Stejná doba (4-5 poločasů) je nutná k vymizení léčiva z organismu po vysazení.",
    "tableData": [
      {
        "name": "Počet poločasů k dosažení Steady State",
        "value": "4 - 5 t1/2"
      },
      {
        "name": "Kinetika eliminace alkoholu u dospělého",
        "value": "0. řád (cca 0.1 g/kg/hod)"
      },
      {
        "name": "Podíl vyloučeného léčiva po 3 poločasech (1. řád)",
        "value": "87.5 %"
      }
    ],
    "quiz": [
      {
        "question": "Jaký je hlavní rozdíl mezi eliminační kinetikou 1. řádu a 0. řádu?",
        "options": [
          "U 0. řádu je poločas proměnlivý, protože rychlost eliminace je konstantní a nezávislá na koncentraci léčiva (enzymy jsou saturovány)",
          "U 1. řádu se vyloučí konstantní množství gramů léčiva za hodinu",
          "Kinetika 0. řádu platí pro všechna léčiva při velmi nízkých koncentracích",
          "Kinetika 1. řádu neumožňuje dosáhnout ustáleného stavu"
        ],
        "correct": 0,
        "explanations": [
          "Správně! U 1. řádu se vylučuje konstantní frakce/procento za hodinu (t1/2 je konstantní). U 0. řádu jsou enzymy nasycené, tělo odbourává stále stejné množství (např. 10g alkoholu za hodinu) a poločas se prodlužuje s rostoucí koncentrací.",
          "Nesprávně. Konstantní množství za hodinu se vylučuje u 0. řádu.",
          "Nesprávně. U nízkých koncentrací platí 1. řád, 0. řád nastupuje až po saturaci enzymů při vysokých koncentracích.",
          "Nesprávně. Kinetika 1. řádu je základním předpokladem pro dosažení stabilního ustáleného stavu."
        ]
      },
      {
        "question": "Za jak dlouho (v násobcích poločasu t1/2) se po zahájení pravidelného dávkování dosáhne ustáleného stavu (steady state)?",
        "options": [
          "Za 1 poločas",
          "Za 4 až 5 poločasů",
          "Za 10 poločasů",
          "Závisí to pouze na hmotnosti pacienta"
        ],
        "correct": 1,
        "explanations": [
          "Nesprávně. Po 1 poločase se dosáhne teprve 50 % koncentrace steady state.",
          "Správně! Po 4-5 poločasech je koncentrace v plazmě na úrovni ~95-97 % finálního ustáleného stavu. Teprve tehdy má smysl provádět odběr krve pro TDM.",
          "Nesprávně. 10 poločasů je zbytečně dlouhá doba, stabilita nastává dříve.",
          "Nesprávně. Hmotnost mění distribuční objem, ale čas k dosažení steady state závisí pouze na poločasu."
        ]
      },
      {
        "question": "Jak ovlivní alkalizace moči hydrogenuhličitanem sodným vylučování slabé kyseliny (např. kyseliny salicylové při otravě aspirinem)?",
        "options": [
          "Zvýší její reabsorpci a zpomalí vylučování",
          "Způsobí její ionizaci (látka nese náboj), což zabrání její pasivní reabsorpci v tubulech a urychlí vylučování močí",
          "Inaktivuje glukuronidaci v játrech",
          "Nemá žádný vliv na renální clearance"
        ],
        "correct": 1,
        "explanations": [
          "Nesprávně. Reabsorpci zvyšuje acidifikace moči, kdy je kyselina neionizovaná a snadno prochází lipidovou membránou zpět.",
          "Správně! Slabé kyseliny jsou v zásaditém pH ionizovány. Nabité molekuly neprocházejí membránami (tzv. ion trapping) a zůstávají v moči, což urychluje eliminaci.",
          "Nesprávně. Bikarbonát nepůsobí na jaterní konjugaci.",
          "Nesprávně. Úprava pH moči je standardní eliminační metodou u intoxikace salicyláty nebo fenobarbitalem."
        ]
      }
    ]
  },
  "pharm-15": {
    "definition": "Nespecifický účinek léčiv je dán jejich fyzikálně-chemickými vlastnostmi (osmolarita, pH, adsorpce). Specifický účinek je zprostředkován vazbou na konkrétní cílové struktury - receptory.",
    "kinetics": [
      "Vazba léčiva na receptor ($R$) se řídí zákonem o působení aktivní hmoty a je charakterizována disociační konstantou ($K_D$).",
      "Koncentrace volného léčiva u receptoru přímo ovlivňuje podíl obsazených receptorů (receptor occupancy, $RO = C / (C + K_D)$).",
      "Při $C = K_D$ je obsazeno přesně 50 % receptorů."
    ],
    "dynamics": [
      "Afinita vyjadřuje schopnost léčiva vázat se na receptor. Vnitřní aktivita ($\u0007lpha$, účinnost) je schopnost vyvolat biologickou odpověď.",
      "Plný agonista ($\u0007lpha = 1$) vyvolá maximální odpověď; parciální agonista ($0 < \u0007lpha < 1$) vyvolá pouze částečnou odpověď i při 100% obsazení receptorů.",
      "Antagonista ($\u0007lpha = 0$) má afinitu, ale nemá vnitřní aktivitu (blokuje vazbu agonistů)."
    ],
    "clinical": [
      "Příkladem nespecifického léčiva je aktivní uhlí (fyzikální adsorpce toxinů v střevě) nebo osmotická laxativa (laktulóza).",
      "Parciální agonisté (např. buprenorfin u léčby závislosti na opioidech) mají stropní efekt (ceiling effect), což snižuje riziko předávkování (dechové deprese).",
      "Beta-blokátory (antagonisté) blokují vazbu endogenních katecholaminů na beta-receptory srdce."
    ],
    "pearl": "Parciální agonista může působit jako agonista (při absenci plného agonisty) nebo jako funkční antagonista (při přítomnosti plného agonisty, kterého vytěsní z vazby, čímž sníží celkovou odpověď systému). Tento princip se využívá u antipsychotik (aripiprazol) nebo léčby závislosti (buprenorfin)!",
    "tableData": [
      {
        "name": "Vnitřní aktivita plného agonisty (alfa)",
        "value": "1.0"
      },
      {
        "name": "Vnitřní aktivita antagonistu (alfa)",
        "value": "0.0"
      },
      {
        "name": "Definice KD (disociační konstanty)",
        "value": "koncentrace pro 50% obsazení receptorů"
      }
    ],
    "quiz": [
      {
        "question": "Jak se definuje afinita a vnitřní aktivita (účinnost) léčiva?",
        "options": [
          "Afinita je schopnost vyvolat biologický efekt, vnitřní aktivita je schopnost vázat se na receptor",
          "Afinita je schopnost léčiva vázat se na receptor; vnitřní aktivita je schopnost této vazby vyvolat biologickou odpověď",
          "Oba pojmy znamenají rychlost eliminace z těla",
          "Afinita platí jen pro enzymy, vnitřní aktivita pro hormony"
        ],
        "correct": 1,
        "explanations": [
          "Nesprávně. Definice jsou prohozené.",
          "Správně! Afinita určuje, jak snadno a pevně se lék naváže. Vnitřní aktivita (od 0 do 1) určuje, zda a jak silně aktivuje receptor a signalizační kaskádu.",
          "Nesprávně. Jsou to čistě farmakodynamické parametry, nesouvisí s vylučováním.",
          "Nesprávně. Tyto pojmy jsou základními kameny receptorové teorie obecné farmakologie."
        ]
      },
      {
        "question": "Jak se chová parciální agonista v přítomnosti plného agonisty?",
        "options": [
          "Zesiluje účinek plného agonisty nad jeho maximum",
          "Vytěsňuje plného agonistu z receptorů a snižuje celkový biologický účinek systému (chová se jako antagonista)",
          "Okamžitě metabolizuje plného agonistu",
          "Nemá na plného agonistu žádný vliv"
        ],
        "correct": 1,
        "explanations": [
          "Nesprávně. Parciální agonista nemůže překročit účinek plného agonisty, naopak jej omezuje.",
          "Správně! Protože má vysokou afinitu, obsadí receptory, ale jeho vnitřní aktivita je menší než 1. Celkový efekt tkáně proto klesá (působí jako funkční antagonista).",
          "Nesprávně. Interakce probíhá na úrovni receptoru, nikoliv biotransformace.",
          "Nesprávně. Soutěží o stejná vazebná místa, vliv je tedy významný."
        ]
      },
      {
        "question": "Které z následujících léčiv působí na základě nespecifického fyzikálně-chemického mechanismu účinku?",
        "options": [
          "Atropin (blokátor muskarinových receptorů)",
          "Aktivní uhlí (adsorpce toxických látek na povrchu)",
          "Metoprolol (blokátor beta-1 receptorů)",
          "Ibuprofen (inhibitor enzymu cyklooxygenázy)"
        ],
        "correct": 1,
        "explanations": [
          "Nesprávně. Atropin je vysoce specifický receptorový antagonista.",
          "Správně! Aktivní uhlí nevstupuje do receptorových interakcí, působí čistě fyzikálně (vysoká povrchová adsorpční schopnost pórů v GIT).",
          "Nesprávně. Metoprolol se váže selektivně na beta-1 receptory.",
          "Nesprávně. Ibuprofen specificky inhibuje enzym COX."
        ]
      }
    ]
  },
  "pharm-16": {
    "definition": "Vztah léčiva a receptoru popisuje molekulární interakce určující selektivitu (schopnost vázat se na jeden subtyp receptoru) a stereospecifitu (optické izomery vykazují odlišnou biologickou aktivitu).",
    "kinetics": [
      "Selektivita je koncentračně závislá. Při nízkých koncentracích se léčivo váže pouze na preferovaný receptor, při vysokých koncentracích vazba ztrácí selektivitu.",
      "Izomery (enantiomery) se liší v afinitě a metabolismu (chiral switching - přechod na čistý eutomer, např. z citalopramu na escitalopram).",
      "Eutomer je farmakologicky aktivní enantiomer; distomer je méně aktivní nebo toxický enantiomer (např. R-thalidomid je sedativum, S-thalidomid je teratogen)."
    ],
    "dynamics": [
      "Stereospecifita je dána tříbodovým kontaktem léčiva s asymetrickým vazebným místem na receptoru (Pfeifferovo pravidlo).",
      "Rozdíl v účinnosti enantiomerů může být řádový (např. S-warfarin je 3-5x účinnější inhibitor než R-warfarin).",
      "Chirální léčiva podávaná jako racemické směsi (50:50) obsahují dvě chemicky odlišné látky s různou farmakodynamikou i farmakokinetikou."
    ],
    "clinical": [
      "Escitalopram (S-citalopram) má vyšší účinnost a méně nežádoucích účinků než racemický citalopram.",
      "U dětí je nutná zvýšená opatrnost při podávání racemátů, protože jejich metabolické dráhy pro distomer mohou být nezralé.",
      "Beersova kritéria upozorňují na ztrátu selektivity starších anticholinergik s rizikem delirium u seniorů."
    ],
    "pearl": "Tragédie s thalidomidem (Contergan) v 60. letech 20. století byla způsobena teratogenitou S-enantiomeru, který způsoboval amélii a fokomélii u dětí. R-enantiomer byl bezpečné sedativum. Protože však oba enantiomery v těle podléhají rychlé vzájemné přeměně (racemizují in vivo), podání samotného čistého R-enantiomeru by tragédii nezabránilo!",
    "tableData": [
      {
        "name": "Poměr účinnosti S- vs R-warfarinu",
        "value": "3 - 5 : 1"
      },
      {
        "name": "Podíl racemických léčiv na trhu",
        "value": "cca 30 - 40 %"
      },
      {
        "name": "Escitalopram ve srovnání s Citalopramem",
        "value": "čistý S-enantiomer (eutomer)"
      }
    ],
    "quiz": [
      {
        "question": "Co znamená pojem 'distomer' u chirálních léčiv?",
        "options": [
          "Léčivo určené pro distální tubuly ledvin",
          "Farmakologicky méně aktivní, neaktivní nebo nežádoucí enantiomer v racemické směsi",
          "Aktivní forma léčiva po metabolické aktivaci v játrech",
          "Způsob podávání transdermální cestou"
        ],
        "correct": 1,
        "explanations": [
          "Nesprávně. Distomer nemá souvislost s anatomií ledvin.",
          "Správně! Chirální léčivo obsahuje aktivní eutomer a méně aktivní distomer. Někdy může být distomer zodpovědný za toxicitu (např. u thalidomidu).",
          "Nesprávně. To je aktivní metabolit, nikoliv optický izomer.",
          "Nesprávně. Jedná se o stereochemický pojem, nikoliv lékovou formu."
        ]
      },
      {
        "question": "Jak se mění selektivita léčiva vůči receptorům se zvyšující se koncentrací (dávkou)?",
        "options": [
          "Selektivita se zvyšuje",
          "Selektivita se ztrácí, léčivo se začíná vázat i na jiné typy receptorů a stoupá riziko nežádoucích účinků",
          "Selektivita zůstává absolutně stejná za všech okolností",
          "Léčivo přestává účinkovat úplně"
        ],
        "correct": 1,
        "explanations": [
          "Nesprávně. Vyšší dávky selektivitu snižují.",
          "Správně! Žádný lék není 100% specifický. Selektivita je vždy relativní a s rostoucí dávkou a saturací primárního receptoru dochází k vazbě na mimocílové receptory (off-target efekt).",
          "Nesprávně. Konstantní selektivita je mýtus, závisí na koncentraci.",
          "Nesprávně. Účinek obvykle roste, ale doprovází jej nežádoucí efekty."
        ]
      },
      {
        "question": "Proč je klinicky výhodný tzv. 'chirální switch' (přechod z racemátu na čistý eutomer, např. z citalopramu na escitalopram)?",
        "options": [
          "Čistý eutomer má nižší cenu",
          "Umožňuje snížit dávku, zvýšit účinnost, zlepšit snášenlivost a snížit variabilitu odpovědi pacienta",
          "Zabraňuje metabolické degradaci v žaludku",
          "Urychluje vylučování z těla plícemi"
        ],
        "correct": 1,
        "explanations": [
          "Nesprávně. Vývoj čistého enantiomeru je nákladnější, cena je obvykle vyšší.",
          "Správně! Odstraněním neaktivního či interferujícího distomeru (R-enantiomer citalopramu např. mírně tlumí účinek S-enantiomeru na přenašeči SERT) získáme čistější farmakodynamický profil.",
          "Nesprávně. Stereochemie neovlivňuje acidolabilitu v žaludku přímo.",
          "Nesprávně. Vylučování plícemi s tím nesouvisí."
        ]
      }
    ]
  },
  "pharm-17": {
    "definition": "Receptory jsou proteiny specializované na příjem chemického signálu. Dělí se na 4 základní typy: 1. Ionotropní (ligandem řízené kanály), 2. Metabotropní (spřažené s G-proteiny), 3. Receptory s vlastní enzymatickou aktivitou (tyrosinkinázy) a 4. Intracelulární (jaderné) receptory.",
    "kinetics": [
      "Časový průběh přenosu signálu (transdukce): nejrychlejší jsou ionotropní (milisekundy), metabotropní (sekundy), tyrosinkinázy (minuty), nejpomalejší jsou vnitrobuněčné receptory (hodiny až dny).",
      "Vnitřní signalizace je zesilována kaskádami druhých poslů ($cAMP$, $IP_3$, $DAG$, $Ca^{2+}$).",
      "Dlouhodobá stimulace agonistou vede k down-regulaci (internalizaci a degradaci) receptorů (desenzitizace, tolerance). Dlouhodobá blokáda antagonistou vede k up-regulaci (supersenzitivitě, hrozí rebound fenomén po vysazení)."
    ],
    "dynamics": [
      "Metabotropní GPCR receptory: $G_s$ stimuluje adenylátcyklázu (roste $cAMP$, např. beta-1), $G_i$ ji inhibuje (klesá $cAMP$, např. alfa-2), $G_q$ aktivuje fosfolipázu C (roste $IP_3$/$DAG$ a vápník, např. alfa-1).",
      "Intracelulární receptory (např. pro kortikosteroidy, thyroidní hormony) po vazbě ligandu fungují jako transkripční faktory v jádře a modulují syntézu proteinů.",
      "Ionotropní receptory (např. $GABA_A$, nikotinový ACh receptor) přímo mění membránový potenciál otevřením kanálu pro $Cl^-$, $Na^+$ nebo $K^+$."
    ],
    "clinical": [
      "Při náhlém vysazení beta-blokátorů hrozí rebound fenomén (tachykardie, hypertenze, arytmie) kvůli up-regulaci beta-receptorů během léčby.",
      "Glukokortikoidy (působící přes intracelulární receptory) mají pomalý nástup protizánětlivého účinku (hodiny), protože vyžadují syntézu nových proteinů (lipokortinu).",
      "Benzodiazepiny zvyšují afinitu $GABA_A$ receptoru k GABA, což zvýší influx $Cl^-$ iontů a vyvolá hyperpolarizaci (sedativní účinek)."
    ],
    "pearl": "Dlouhodobé podávání beta-2 agonistů (např. salbutamolu u astmatu) bez doprovodné protizánětlivé terapie vede k down-regulaci a desenzitizaci beta-2 receptorů v průduškách. Pacient pak může v případě akutního astmatického záchvatu zjistit, že lék ztratil svou bronchodilatační účinnost!",
    "tableData": [
      {
        "name": "Rychlost odezvy ionotropních receptorů",
        "value": "< milisekundy"
      },
      {
        "name": "Rychlost odezvy jaderných receptorů",
        "value": "hodiny až dny"
      },
      {
        "name": "Druzí poslové spřažení s Gq proteinem",
        "value": "IP3, DAG, Ca2+"
      }
    ],
    "quiz": [
      {
        "question": "Který typ receptorů vykazuje nejpomalejší buněčnou odpověď (nástup v řádu hodin až dnů)?",
        "options": [
          "Ligandem řízené iontové kanály (ionotropní)",
          "Receptory spřažené s G-proteiny (metabotropní)",
          "Intracelulární (jaderné) receptory ovlivňující transkripci genů",
          "Receptorové tyrosinkinázy (např. inzulínový receptor)"
        ],
        "correct": 2,
        "explanations": [
          "Nesprávně. Ionotropní receptory jsou nejrychlejší (milisekundy).",
          "Nesprávně. GPCR receptory reagují v sekundách.",
          "Správně! Intracelulární receptory (pro steroidy, vitamín D, tyroxin) po aktivaci migrují do jádra, kde mění transkripci DNA. Tvorba mRNA a nových proteinů trvá hodiny až dny.",
          "Nesprávně. Tyrosinkinázy spouštějí fosforylační kaskády v minutách."
        ]
      },
      {
        "question": "Proč hrozí u pacienta s hypertenzí po náhlém a prudkém vysazení beta-blokátorů riziko hypertenzní krize a tachykardie (tzv. rebound fenomén)?",
        "options": [
          "Beta-blokátory se po vysazení mění na agonisty",
          "Dlouhodobá blokáda vedla k up-regulaci (zvýšení počtu a citlivosti) beta-receptorů, které jsou po vysazení léku zaplaveny endogenními katecholaminy",
          "Ledviny přestanou vylučovat vodu",
          "Dochází k okamžité destrukci myokardu"
        ],
        "correct": 1,
        "explanations": [
          "Nesprávně. Antagonisté nemění svou chemickou povahu na agonisty.",
          "Správně! Blokáda receptorů vyvolá kompenzační zvýšení jejich hustoty (up-regulaci). Po odstranění antagonisty má tělo přecitlivělé srdce na adrenalin a noradrenalin, což vede k hyperaktivitě oběhu.",
          "Nesprávně. Rebound fenomén je spojen s receptorovou citlivostí v srdci a cévách, ne primárně s renálním selháním.",
          "Nesprávně. Nedochází k destrukci, ale k funkčnímu přetížení oběhu."
        ]
      },
      {
        "question": "Která z následujících signalizačních drah je spojena s aktivací Gs proteinu?",
        "options": [
          "Aktivace fosfolipázy C s nárůstem IP3 a vápníku",
          "Inhibice adenylátcyklázy a pokles hladiny cAMP",
          "Stimulace adenylátcyklázy s nárůstem hladiny cAMP a aktivací proteinové kinázy A (PKA)",
          "Otevření chloridového kanálu"
        ],
        "correct": 2,
        "explanations": [
          "Nesprávně. To je dráha $G_q$ proteinu.",
          "Nesprávně. To je dráha $G_i$ proteinu.",
          "Správně! Stimulační G-protein ($G_s$) aktivuje enzym adenylátcyklázu, která syntetizuje druhého posla cAMP z ATP. cAMP pak aktivuje PKA.",
          "Nesprávně. Otevření kanálu je typické pro ionotropní receptory, nikoliv přenos přes G-proteiny."
        ]
      }
    ]
  },
  "pharm-18": {
    "definition": "Dávkování určuje množství léčiva podané v jednom časovém intervalu. Terapeutická šíře je rozmezí mezi minimální terapeutickou a minimální toxickou koncentrací. Terapeutický index ($TI$) kvantifikuje bezpečnost léčiva ($TI = TD_{50} / ED_{50}$).",
    "kinetics": [
      "Vztah dávky a koncentrace v plazmě určuje rovnice ustáleného stavu: $C_{ss} = (F \\cdot Dávka) / (Cl \\cdot \tau)$.",
      "Nasycovací dávka (loading dose, $LD$) slouží k rychlému dosažení $C_{ss}$: $LD = (V_d \\cdot C_{ss}) / F$.",
      "Udržovací dávka (maintenance dose, $MD$) nahrazuje eliminované množství: $MD = (Cl \\cdot C_{ss} \\cdot \tau) / F$."
    ],
    "dynamics": [
      "Vztah koncentrace a účinku se popisuje sigmoidní křivkou Emax: $E = (E_{max} \\cdot C) / (EC_{50} + C)$. $EC_{50}$ vyjadřuje potenci (účinnost při 50 % $E_{max}$).",
      "Léčiva s úzkým terapeutickým indexem ($TI < 2$ nebo úzké terapeutické okno, např. digoxin, lithium, vankomycin, warfarin) mají malou toleranci k výkyvům hladin.",
      "Dávkově-závislý účinek může být nelineární u léčiv vykazujících saturaci transportérů nebo metabolismu (např. fenytoin)."
    ],
    "clinical": [
      "Při renálním selhání se udržovací dávka ($MD$) musí snížit úměrně poklesu clearance, nasycovací dávka ($LD$) se nemění (protože $V_d$ se nemění).",
      "U dětí se dávky kalkulují podle tělesného povrchu ($BSA$), který lépe koreluje s clearance než pouhá hmotnost.",
      "U starých lidí se doporučuje strategii 'start low and go slow' z důvodu vyšší citlivosti k nežádoucím účinkům."
    ],
    "pearl": "Při renálním selhání se nasycovací dávka ($LD$) NIKDY neupravuje (nesnižuje)! Distribuční objem pacienta zůstává stejný a my musíme naplnit tento objem k dosažení terapeutické hladiny. Upravuje se až následná udržovací dávka ($MD$), která závisí na snížené clearance!",
    "tableData": [
      {
        "name": "Definice úzkého terapeutického indexu (TI)",
        "value": "TI < 2"
      },
      {
        "name": "Vzorec pro nasycovací dávku (LD)",
        "value": "LD = Vd * Css / F"
      },
      {
        "name": "Vztah clearance a udržovací dávky (MD)",
        "value": "MD je přímo úměrná Cl"
      }
    ],
    "quiz": [
      {
        "question": "Co vyjadřuje hodnota EC50 na křivce závislosti účinku na koncentraci léčiva?",
        "options": [
          "Koncentraci léčiva, která vyvolá 50 % maximálního možného účinku (vyjadřuje potenci léčiva)",
          "Poločas eliminace léčiva u 50 % pacientů",
          "Toxickou dávku pro 50 % buněk",
          "Množství receptorů obsazených za 50 minut"
        ],
        "correct": 0,
        "explanations": [
          "Správně! Čím nižší je hodnota $EC_{50}$, tím vyšší je potence léčiva (k vyvolání polovičního účinku stačí menší množství).",
          "Nesprávně. To by byla farmakokinetická hodnota poločasu, nesouvisí s křivkou odpovědi na dávku.",
          "Nesprávně. Toxickou koncentraci pro 50 % populace popisuje $TD_{50}$ nebo $TC_{50}$.",
          "Nesprávně. Časový faktor není součástí statické křivky koncentrace-účinek."
        ]
      },
      {
        "question": "Jak se upravuje dávkování u pacienta se sníženou funkcí ledvin (renální insuficiencí) při zahájení léčby?",
        "options": [
          "Sníží se nasycovací dávka (LD), ale udržovací dávka (MD) zůstane stejná",
          "Nasycovací dávka (LD) se ponechá standardní (plná), ale následná udržovací dávka (MD) se sníží (nebo se prodlouží interval podávání)",
          "Obě dávky se zvýší k překonání renální rezistence",
          "Všechny dávky se vysadí bez náhrady"
        ],
        "correct": 1,
        "explanations": [
          "Nesprávně. Snížením nasycovací dávky by pacient nedosáhl účinné koncentrace, což může být fatální u těžkých infekcí (vankomycin).",
          "Správně! $LD$ závisí na $V_d$, který se poškozením ledvin nemění. Udržovací dávka $MD$ však závisí na clearance, která je snížena, proto se musí zredukovat k zabránění kumulace.",
          "Nesprávně. Zvýšení obou dávek by vedlo k prudké intoxikaci.",
          "Nesprávně. Léčba je nutná, pouze se upravuje režim."
        ]
      },
      {
        "question": "Léčiva s úzkým terapeutickým indexem (TI):",
        "options": [
          "Jsou bezpečná a nevyžadují žádnou monitoraci",
          "Mají malý rozdíl mezi dávkou účinnou a dávkou vyvolávající toxické účinky, vyžadují opatrné dávkování a často TDM",
          "Účinkují pouze v úzké části těla",
          "Mají velmi krátký poločas eliminace"
        ],
        "correct": 1,
        "explanations": [
          "Nesprávně. Jsou potenciálně vysoce nebezpečná a monitoraci vyžadují.",
          "Správně! Malé zvýšení dávky (např. u digoxinu, lithia, warfarinu) může překročit hranici toxicity. Vyžadují individualizované dávkování.",
          "Nesprávně. Pojem \"úzký\" se vztahuje k bezpečnostnímu rozpětí koncentrací, nikoliv k anatomické selektivitě.",
          "Nesprávně. Poločas s terapeutickým indexem nesouvisí (např. digoxin má dlouhý poločas, heparin krátký, a oba mají úzký TI)."
        ]
      }
    ]
  },
  "pharm-19": {
    "definition": "Terapeutické monitorování léčiv (TDM) je klinická metoda měření koncentrace léčiva v séru k optimalizaci farmakoterapie u pacientů s vysokou farmakokinetickou variabilitou nebo úzkým terapeutickým oknem.",
    "kinetics": [
      "Odběr vzorku krve se provádí zásadně v ustáleném stavu (steady state, po 4-5 poločasech).",
      "Měří se buď údolní koncentrace (trough level, $C_{min}$ - těsně před další dávkou) nebo vrcholová koncentrace (peak level, $C_{max}$ - např. 30 min po infuzi).",
      "Moderní TDM využívá bayesovské modelování (populační PK) k predikci individuální clearance pacienta ze singulárního odběru."
    ],
    "dynamics": [
      "TDM předchází suboptimální terapii (neúčinnosti) a toxickému poškození orgánů.",
      "Cílové rozmezí digoxinu: 0.5 - 0.9 ug/l (pro srdeční selhání); vankomycinu: 15 - 20 mg/l (trough pro závažné infekce).",
      "Koncentrace volného (aktivního) léčiva může kolísat při změnách plazmatických proteinů (např. u fenytoinu)."
    ],
    "clinical": [
      "Indikace TDM: úzký terapeutický index, ne lineární kinetika, podezření na non-compliance, renální selhání, závažný stav (sepse).",
      "Odběr u aminoglykosidů: peak určuje účinnost (musí být vysoký), trough toxicitu (musí být nízký < 1 mg/l).",
      "U dětí je clearance aminoglykosidů zvýšená, vyžadují proto vyšší dávky v mg/kg a častější TDM."
    ],
    "pearl": "Odběr krve na stanovení minimální (údolní, trough) koncentrace vankomycinu či digoxinu se musí provést těsně před podáním další plánované dávky (typicky 10-30 minut před). Odběr provedený dříve (např. uprostřed intervalu) poskytne falešně vysoké hodnoty a povede k chybnému snížení dávky!",
    "tableData": [
      {
        "name": "Doba odběru trough koncentrace",
        "value": "10 - 30 min před další dávkou"
      },
      {
        "name": "Poločas eliminace vankomycinu (norma)",
        "value": "6 - 8 hodin"
      },
      {
        "name": "Terap. okno digoxinu u srdečního selhání",
        "value": "0.5 - 0.9 ug/l"
      }
    ],
    "quiz": [
      {
        "question": "Kdy je nutné odebrat krevní vzorek pro stanovení minimální (trough) koncentrace léčiva při TDM?",
        "options": [
          "Přesně 1 hodinu po podání dávky",
          "Těsně před podáním další plánované dávky (10-30 minut před), v ustáleném stavu",
          "Uprostřed dávkovacího intervalu",
          "Ihned po probuzení pacienta, bez ohledu na čas podání"
        ],
        "correct": 1,
        "explanations": [
          "Nesprávně. 1 hodinu po podání se měří vrcholová (peak) koncentrace.",
          "Správně! Minimální (údolní) hladina odráží clearance těla. Odběr se provádí v ustáleném stavu (steady state), aby nedošlo k podhodnocení akumulace.",
          "Nesprávně. Uprostřed intervalu je koncentrace nestabilní a neodpovídá trough definici.",
          "Nesprávně. Čas spánku pacienta není spojen s farmakokinetickým profilem odběru."
        ]
      },
      {
        "question": "Které z následujících léčiv NEVYŽADUJE standardně TDM?",
        "options": [
          "Gentamicin",
          "Digoxin",
          "Amoxicilin (běžný penicilinový antibiotikum)",
          "Lithium"
        ],
        "correct": 2,
        "explanations": [
          "Nesprávně. Gentamicin má úzký terapeutický index a vysokou nefro/ototoxicitu, TDM vyžaduje.",
          "Nesprávně. Digoxin má úzký terapeutický index a vysoké riziko arytmií, TDM vyžaduje.",
          "Správně! Amoxicilin má široký terapeutický index (vysoké rozpětí bezpečnosti). I při vysokých plazmatických hladinách je toxicita minimální, TDM proto není potřeba.",
          "Nesprávně. Lithium má úzký terapeutický index (hrozí neurotoxicita a renální poškození), TDM je u něj nezbytné."
        ]
      },
      {
        "question": "Proč je důležité provádět TDM u aminoglykosidů (např. gentamicinu)?",
        "options": [
          "Rychle vyvolávají závislost",
          "Vykazují vysokou orgánovou toxicitu (nefrotoxicita, ototoxicita) a jejich clearance výrazně závisí na renálních funkcích",
          "Mají nízkou biologickou dostupnost po i.v. podání",
          "Způsobují těžkou hypoglykémii"
        ],
        "correct": 1,
        "explanations": [
          "Nesprávně. Aminoglykosidy nejsou návykové látky.",
          "Správně! Hromadění aminoglykosidů v ledvinách a vnitřním uchu je přímo úměrné minimální (trough) koncentraci. Monitorace pomáhá udržet trough < 1.0 mg/l.",
          "Nesprávně. Po i.v. podání je biologická dostupnost 100 % (F=1) u všech léčiv.",
          "Nesprávně. Aminoglykosidy neovlivňují hladinu glukózy v krvi."
        ]
      }
    ]
  },
  "pharm-20": {
    "definition": "Farmakoterapie ve stáří (geriatrická farmakologie) řeší změny chování léčiv u pacientů nad 65 let v důsledku orgánového stárnutí, přítomnosti polymorbidity a vysokého rizika polypragmázie.",
    "kinetics": [
      "Snížení celkové tělesné vody a svalů zmenšuje $V_d$ hydrofilních léčiv (např. digoxinu) -> vyšší plazmatické koncentrace.",
      "Zvýšení podílu tuku zvětšuje $V_d$ lipofilních léčiv (např. diazepamu) -> prodloužení poločasu eliminace.",
      "Fyziologický pokles renální clearance (GFR) až o 1 % ročně po 40. roce snižuje exkreci léčiv vylučovaných ledvinami."
    ],
    "dynamics": [
      "Zvýšená citlivost CNS k anticholinergikům (delirium, kognitivní deficit) a k tlumivým látkám (benzodiazepiny - riziko pádů).",
      "Snížená citlivost beta-receptorů k agonistům i antagonistům.",
      "Oslbení baroreflexů zvyšuje riziko ortostatické hypotenze po antihypertenzivech."
    ],
    "clinical": [
      "Beersova kritéria a STOPP/START kritéria definují nevhodná léčiva u seniorů (potenciálně nevhodná léčiva - PIM).",
      "Vysoká zátěž anticholinergiky (anticholinergic burden) zhoršuje demenci, způsobuje zácpu a retenci moči.",
      "Preskripční kaskáda: léčba nežádoucího účinku jednoho léku podáním dalšího léku (např. NSAID vyvolá hypertenzi -> přidá se amlodipin)."
    ],
    "pearl": "U starších pacientů může hladina sérového kreatininu zůstat ve 'fyziologickém' rozmezí i při závažném poklesu renálních funkcí. Je to dáno úbytkem svalové hmoty (sarkopenií), která produkuje méně kreatininu. K odhadu GFR se proto musí vždy vypočítat clearance kreatininu matematicky (např. vzorcem Cockcroft-Gault)!",
    "tableData": [
      {
        "name": "Pokles GFR po 40. roce života (ročně)",
        "value": "cca 1 %"
      },
      {
        "name": "Poločas diazepamu u seniorů (prodloužení)",
        "value": "až 80 - 100 hodin"
      },
      {
        "name": "Anticholinergika jako rizikový faktor",
        "value": "vyvolávají delirium a pády"
      }
    ],
    "quiz": [
      {
        "question": "Proč může mít starší pacient významně sníženou funkci ledvin, i když má hladina kreatininu v séru normální hodnotu?",
        "options": [
          "Protože ledviny seniorů vylučují kreatinin jinou cestou",
          "V důsledku úbytku svalové hmoty (sarkopenie) se tvoří méně kreatininu; pokles produkce maskuje pokles renálního vylučování",
          "Starší lidé nepijí dostatek vody",
          "Kreatinin se u starších osob ukládá v kostech"
        ],
        "correct": 1,
        "explanations": [
          "Nesprávně. Kreatinin se vylučuje pouze glomerulární filtrací a minimálně sekrecí.",
          "Správně! Hladina kreatininu závisí na svalové hmotě. U starších hubených lidí je produkce nízká. Normální hladina v séru proto může skrývat závažné renální selhání (GFR např. 30 ml/min).",
          "Nesprávně. Dehydratace hladinu kreatininu v séru spíše zvyšuje, nemaskuje pokles GFR.",
          "Nesprávně. Kreatinin v kostech neprecipituje."
        ]
      },
      {
        "question": "Co popisuje termín 'preskripční kaskáda' v geriatrické farmakoterapii?",
        "options": [
          "Systém slev na léky pro seniory",
          "Předepsání nového léčiva k léčbě nežádoucího účinku již užívaného léčiva, který byl nesprávně interpretován jako nové onemocnění",
          "Postupné vysazování všech léků u pacienta",
          "Zvýšení compliance pacienta pomocí dávkovače"
        ],
        "correct": 1,
        "explanations": [
          "Nesprávně. Jde o farmakoterapeutické riziko, ne o finanční bonus.",
          "Správně! Klasickým příkladem je podání NSAID (např. na klouby) -> vzestup tlaku -> lékař přidá antihypertenzivum -> vznikne otok kotníků -> lékař přidá diuretikum. Výsledkem je polypragmázie.",
          "Nesprávně. Vysazování nevhodných léků se nazývá depreskripce.",
          "Nesprávně. Preskripční kaskáda naopak riziko non-compliance zvyšuje."
        ]
      },
      {
        "question": "Která skupina léčiv je v Beersových kritériích označena za vysoce rizikovou u seniorů z důvodu pádů a zlomenin?",
        "options": [
          "Dlouhodobě působící benzodiazepiny (např. diazepam, flunitrazepam)",
          "Selektivní beta-1 blokátory (metoprolol)",
          "Inhalační bronchodilatancia",
          "Lidský albumin"
        ],
        "correct": 0,
        "explanations": [
          "Správně! Benzodiazepiny vyvolávají u seniorů sedaci, svalovou relaxaci (myorelaxaci) a ataxii, což v kombinaci se sníženými reflexy dramaticky zvyšuje riziko pádů a zlomenin krčku femuru.",
          "Nesprávně. Beta-blokátory mohou vyvolat ortostatickou hypotenzi, ale nejsou hlavním psychofarmakologickým rizikem pádů v Beersových seznamech jako BZD.",
          "Nesprávně. Inhalační léčiva působí lokálně a riziko pádů nezvyšují.",
          "Nesprávně. Albumin je krystaloidní/koloidní náhrada bez vlivu na koordinaci pohybů."
        ]
      }
    ]
  },
  "pharm-21": {
    "definition": "Pediatrická farmakologie se zabývá specifiky účinku a chování léčiv u dětí od novorozeneckého věku do dospívání, kdy organismus prochází dynamickým vývojem a zráním orgánových systémů.",
    "kinetics": [
      "Žaludeční pH je po porodu zvýšené (kolem 6-8) kvůli nízké produkci HCl, což mění absorpci (peniciliny se vstřebávají více, slabé kyseliny jako fenobarbital méně).",
      "Podíl tělesné vody u novorozenců je obrovský (až 75-80 % hmotnosti), což vyžaduje vyšší dávky hydrofilních léčiv (např. gentamicin) v přepočtu na kg.",
      "Zrání enzymů jater (glukuronidace) a glomerulární filtrace trvá měsíce až rok."
    ],
    "dynamics": [
      "Některé receptory jsou u dětí nezralé nebo vykazují paradoxní reakce (např. excitace po antihistaminikách nebo barbiturátech místo sedace).",
      "Rychle se dělící tkáně jsou citlivé k poškození (např. inhibice růstových chrupavek tetracykliny nebo fluorochinolony).",
      "Zvýšená citlivost k valproátu (riziko fatální hepatotoxicity u dětí do 2 let)."
    ],
    "clinical": [
      "Dávkování se provádí striktně podle tělesné hmotnosti (mg/kg) nebo povrchu těla (mg/m2). Nikdy se neuplatňuje pouhý odhad z dávky dospělého.",
      "Tetracyklinová antibiotika jsou kontraindikována u dětí do 8 let z důvodu chelace vápníku a trvalého žlutohnědého zbarvení zubní skloviny.",
      "NSAID (např. kyselina acetylsalicylová) jsou kontraindikovány u dětí do 12-15 let s virovým onemocněním kvůli riziku rozvoje Reyeova syndromu (fatální hepatocerebrální poškození)."
    ],
    "pearl": "Podání kyseliny acetylsalicylové (acylpyrinu, aspirinu) dětem při horečnatém virovém onemocnění (např. chřipka, plané neštovice) je přísně kontraindikováno. Hrozí rozvoj vzácného, ale z 30-40 % fatálního Reyeova syndromu, který se projevuje akutním selháním jater (mikrovezikulární steatózou) a těžkou encefalopatií!",
    "tableData": [
      {
        "name": "Voda v těle novorozence (podíl)",
        "value": "75 - 80 % hmotnosti"
      },
      {
        "name": "Glomerulární filtrace (zralost na úroveň dospělého)",
        "value": "kolem 12. měsíce věku"
      },
      {
        "name": "Věk pro bezpečné podání tetracyklinů",
        "value": "> 8 let"
      }
    ],
    "quiz": [
      {
        "question": "Proč je kyselina acetylsalicylová (aspirin) kontraindikována u dětí do 12-15 let s horečnatým virovým onemocněním?",
        "options": [
          "Způsobuje šedé zbarvení zubů",
          "Zvyšuje riziko vzniku Reyeova syndromu (fatální poškození jater a mozku)",
          "Vyvolává okamžitou závislost na salicylátech",
          "Snižuje účinnost očkování"
        ],
        "correct": 1,
        "explanations": [
          "Nesprávně. Zbarvení zubů způsobují tetracykliny.",
          "Správně! Reyeův syndrom je charakterizován mitochondriálním poškozením, edémem mozku a jaterní steatózou. Horečku u dětí tlumíme paracetamolem nebo ibuprofenem.",
          "Nesprávně. Salicyláty nevyvolávají psychickou ani fyzickou závislost.",
          "Nesprávně. Hlavním důvodem je akutní toxicita a mortalita syndromu, nikoliv imunitní interakce."
        ]
      },
      {
        "question": "Jak se liší distribuce hydrofilních léčiv (např. aminoglykosidů) u novorozenců ve srovnání s dospělými?",
        "options": [
          "Novorozenci mají méně tělesné vody, vyžadují proto menší dávky na kg",
          "Novorozenci mají vyšší podíl celkové tělesné vody, což zvětšuje distribuční objem (Vd) na kg a vyžaduje vyšší úvodní dávku (mg/kg) k dosažení stejné plazmatické hladiny",
          "Distribuce je shodná",
          "Hydrofilní léčiva se u dětí distribuují pouze do kostí"
        ],
        "correct": 1,
        "explanations": [
          "Nesprávně. Podíl vody je u novorozence naopak nejvyšší v celém životě.",
          "Správně! Vzhledem k velkému extracelulárnímu objemu vody je hydrofilní lék více naředěn. Nasycovací dávka v mg/kg proto musí být vyšší než u dospělých, i když interval se prodlužuje kvůli pomalejší eliminaci.",
          "Nesprávně. Dětská farmakokinetika vykazuje zásadní odlišnosti.",
          "Nesprávně. Hydrofilní léčiva se distribuují do veškeré extracelulární tekutiny."
        ]
      },
      {
        "question": "Jaký nežádoucí účinek na skelet a chrup mají tetracykliny u dětí?",
        "options": [
          "Způsobují předčasný uzávěr růstových štěrbin bez vlivu na zuby",
          "Chelatují vápník v rostoucích kostech a zubech, což vede k defektům skloviny a trvalému žlutohnědému zbarvení zubů",
          "Zvyšují kazivost zubů uvolněním cukrů",
          "Způsobují hypertrofii dásní"
        ],
        "correct": 1,
        "explanations": [
          "Nesprávně. Tetracykliny postihují kosti i chrup současně.",
          "Správně! Tetracykliny tvoří stabilní komplexy s fosforečnanem vápenatým. Ukládají se v kalcifikujících tkáních během jejich vývoje (těhotenství a dětství do 8 let), což trvale poškozuje chrup.",
          "Nesprávně. Mechanismus je dán chelatací vápníku v matrici zubu, nikoliv sacharidy.",
          "Nesprávně. Hypertrofii dásní způsobuje spíše cyklosporin, fenytoin nebo blokátory vápníkových kanálků."
        ]
      }
    ]
  },
  "pharm-22": {
    "definition": "Farmakoterapie v těhotenství a laktaci řeší bezpečnost léčiv pro vyvíjející se plod (teratogenita) a kojence (prostup do mateřského mléka) s ohledem na těhotenské změny farmakokinetiky matky.",
    "kinetics": [
      "V těhotenství stoupá objem plazmy (až o 50 %) a srdeční výdej -> zvětšuje se $V_d$ a klesá koncentrace mnoha léčiv.",
      "Renální clearance (GFR) matky stoupá až o 50 % v prvních dvou trimestrech -> urychlená eliminace hydrofilních látek.",
      "Prostup přes placentu: procházejí zejména malé lipofilní molekuly (difúze). Velké nabité molekuly (např. heparin) placentou neprocházejí."
    ],
    "dynamics": [
      "Teratogeny vyvolávají strukturální vady. Kritické období je organogeneze (3. až 8. týden těhotenství).",
      "Fetotoxicita: poškození plodu v 2. a 3. trimestru (např. inhibitory ACE způsobují poškození ledvin plodu, NSAID uzavírají ductus arteriosus předčasně).",
      "Laktace: prostup do mléka se hodnotí pomocí poměru mléko/plazma (M/P ratio) a relativní dávky pro kojence (Relative Infant Dose, RID). RID < 10 % je považována za bezpečnou."
    ],
    "clinical": [
      "Moderní klasifikace bezpečnosti opouští staré kategorie FDA (A, B, C, D, X) a nahrazuje je narativním hodnocením rizik (pravidlo PLLR).",
      "Bezpečná antihypertenziva v graviditě: methyldopa, labetalol, nifedipin. Kontraindikována jsou ACEI a sartany (teratogenní).",
      "Bezpečné antikoagulans: nízkomolekulární hepariny (LMWH). Warfarin je přísně kontraindikován (warfarinový syndrom plodu - chondrodysplazie, krvácení do CNS)."
    ],
    "pearl": "Užívání nesteroidních antiflogistik (NSAIDs - např. ibuprofenu, diklofenaku) ve třetím trimestru těhotenství je přísně zakázáno. Blokáda syntézy prostaglandinů (zejména PGE2) může vyvolat předčasný uzávěr Botallovy dučeje (ductus arteriosus) u plodu, což vede k fatální plicní hypertenzi novorozence a oligohydramniu!",
    "tableData": [
      {
        "name": "Bezpečný limit Relative Infant Dose (RID)",
        "value": "< 10 %"
      },
      {
        "name": "Nárůst objemu plazmy u těhotné ženy",
        "value": "až o 50 %"
      },
      {
        "name": "Kritická fáze pro vznik hrubých malformací",
        "value": "3. - 8. týden (organogeneze)"
      }
    ],
    "quiz": [
      {
        "question": "Proč je heparin (a nízkomolekulární hepariny - LMWH) bezpečný pro léčbu trombózy u těhotných, zatímco warfarin je kontraindikován?",
        "options": [
          "Heparin se v těhotenství nevstřebává do krve matky",
          "Warfarin je levnější",
          "Heparin má obrovskou, vysoce nabitou molekulu, která neprochází placentární bariérou; warfarin je malá lipofilní molekula, která snadno prostupuje a poškozuje plod",
          "Heparin působí pouze v plicích matky"
        ],
        "correct": 2,
        "explanations": [
          "Nesprávně. LMWH se podávají s.c. a vstřebávají se dobře do oběhu matky.",
          "Nesprávně. Ekonomické srovnání není důvodem biologické bezpečnosti pro plod.",
          "Správně! Heparin (a LMWH) zůstává v krevním řečišti matky. Warfarin prochází placentou, inhibuje syntézu koagulačních faktorů u plodu a interferuje s vývojem chrupavek a kostí (fetální warfarinový syndrom).",
          "Nesprávně. Heparin působí systémově v celé cirkulaci matky."
        ]
      },
      {
        "question": "Jaký závažný následek u plodu může mít užívání inhibitorů ACE (léků na tlak) ve 2. a 3. trimestru těhotenství?",
        "options": [
          "Předčasné narození dvojčat",
          "Renální dysgenezi (selhání ledvin plodu), anurii matky, těžký oligohydramnion a hypoplazii plic plodu",
          "Zbarvení kostry plodu do modra",
          "Zvýšení porodní hmotnosti"
        ],
        "correct": 1,
        "explanations": [
          "Nesprávně. ACEI neovlivňují četnost vícečetných těhotenství.",
          "Správně! Blokáda RAAS u plodu narušuje vývoj jeho ledvin, které produkují plodovou vodu. Výsledkem je oligohydramnion, deformace plodu (Potterové fenotyp) a fatální plicní hypoplazie.",
          "Nesprávně. ACEI nezpůsobují zbarvení tkání.",
          "Nesprávně. Naopak vedou k intrauterinní růstové retardaci plodu."
        ]
      },
      {
        "question": "Co vyjadřuje hodnota Relative Infant Dose (RID) při posuzování bezpečnosti léčiv během kojení?",
        "options": [
          "Podíl léčiva vyloučený stolicí kojence",
          "Procento dávky matky (přepočtené na kg hmotnosti), které kojenec obdrží prostřednictvím mateřského mléka",
          "Počet dávek, které musí matka vynechat",
          "Rychlost degradace mléka v prsu matky"
        ],
        "correct": 1,
        "explanations": [
          "Nesprávně. Vylučování kojence je sekundární parametr, RID hodnotí expozici.",
          "Správně! RID vyjadřuje dětskou expozici. Hodnota RID < 10 % (ideálně < 1 %) je považována za klinicky bezpečnou. Většina běžných antihypertenziv či analgetik má RID < 1 %.",
          "Nesprávně. RID je bezrozměrné procento, nikoliv počet dávek.",
          "Nesprávně. Léčiva mléko v prsu nedegradují."
        ]
      }
    ]
  },
  "pharm-23": {
    "definition": "Názvosloví léčiv zahrnuje názvy chemické, generické (mezinárodní nechráněné názvy - INN) a obchodní (chráněné značky). Hromadně vyráběné léčivé přípravky (HVLP) jsou vyráběny průmyslově; individuálně připravované (IPLP, magistraliter) se připravují v lékárně.",
    "kinetics": [
      "HVLP mají standardizovanou a ověřenou farmakokinetiku (uvolňování a biologická dostupnost jsou testovány).",
      "U IPLP může kinetika kolísat v závislosti na kvalitě přípravy základu, homogenitě suspenze nebo kvalitě suroviny.",
      "Označování léčiv: krabičky HVLP musí obsahovat název, sílu, lékovou formu, exspiraci, šarži a Braillovo písmo."
    ],
    "dynamics": [
      "HVLP i IPLP obsahují definované množství účinné látky (remidium), pomocných látek (vehikulum, konstituens) a korigencií.",
      "Pomocné látky (např. laktóza, siřičitany) nemají vlastní terapeutický účinek, ale mohou vyvolat nežádoucí reakce (intoleranci, alergii).",
      "Generická substituce: lékárník může zaměnit lék za jiný se stejnou účinnou látkou, silou a lékovou formou, pokud lékař na receptu neuvedl 'Nezaměňovat'."
    ],
    "clinical": [
      "Generické názvy (INN) umožňují lékařům komunikovat mezinárodně bez ohledu na komerční názvy (např. paracetamol je INN, Paralen/Panadol jsou obchodní názvy).",
      "IPLP se využívají v dermatologii (masti na míru) nebo v pediatrii (příprava velmi nízkých dávek, které se komerčně nevyrábějí).",
      "Při preskripci se musí dbát na kontrolu exspirace a správné uchovávání (např. chladový řetězec u inzulínů)."
    ],
    "pearl": "Vždy pište na recepty generické názvy (INN) léčiv, zejména u hospitalizovaných pacientů. Zabraňuje to duplicitnímu podání stejné účinné látky pod dvěma různými komerčními názvy (např. podání Paralenu a Panadolu současně), což je častá příčina fatálního předávkování paracetamolem a selhání jater!",
    "tableData": [
      {
        "name": "INN zkratka znamená",
        "value": "International Nonproprietary Name"
      },
      {
        "name": "Podíl HVLP na trhu v ČR",
        "value": "přes 98 %"
      },
      {
        "name": "Značení receptů s modrým pruhem",
        "value": "pro omamné látky sk. I (narkotika)"
      }
    ],
    "quiz": [
      {
        "question": "Jaký je rozdíl mezi HVLP a IPLP?",
        "options": [
          "HVLP se připravují pouze pro veterinární účely, IPLP pro lidi",
          "HVLP (hromadně vyráběné) se vyrábějí průmyslově v továrnách s fixním složením; IPLP (magistraliter) se připravují individuálně v lékárně na základě receptu pro konkrétního pacienta",
          "HVLP neobsahují pomocné látky, IPLP ano",
          "IPLP mají neomezenou dobu použitelnosti"
        ],
        "correct": 1,
        "explanations": [
          "Nesprávně. Obě formy jsou určeny pro humánní i veterinární použití.",
          "Správně! HVLP představují drtivou většinu trhu. IPLP (např. míchané masti, dělené prášky) umožňují individualizaci terapie (citlivost, chybějící dětské dávky).",
          "Nesprávně. Obě formy obsahují účinnou i pomocnou látku.",
          "Nesprávně. IPLP mají naopak velmi krátkou exspiraci (dny až týdny) kvůli absenci průmyslových konzervantů."
        ]
      },
      {
        "question": "Co označuje zkratka INN u názvosloví léčiv?",
        "options": [
          "Interní identifikační číslo lékárny",
          "Mezinárodní nechráněný (generický) název účinné látky, nezávislý na komerčním výrobci (např. ibuprofenum)",
          "Název patentovaného originálního léku",
          "Zkratku pro neúčinné pomocné látky"
        ],
        "correct": 1,
        "explanations": [
          "Nesprávně. Jedná se o standardizovaný vědecký název, ne interní kód.",
          "Správně! INN (International Nonproprietary Name) zaručuje, že lékaři a lékárníci na celém světě jednoznačně identifikují účinnou látku bez ohledu na to, pod jakým komerčním názvem se prodává.",
          "Nesprávně. Originální lék nese komerční název (brand name), INN je generický název.",
          "Nesprávně. Pomocné látky mají své specifické lékopisné názvy."
        ]
      },
      {
        "question": "Může lékárník provést generickou substituci (záměnu předepsaného léku za jiný se stejnou látkou)?",
        "options": [
          "Nikdy, je to nezákonné",
          "Ano, ale pouze pokud s tím pacient souhlasí a lékař na recept výslovně neuvedl poznámku 'Nezaměňovat'",
          "Ano, bez vědomí pacienta i lékaře",
          "Pouze u homeopatik"
        ],
        "correct": 1,
        "explanations": [
          "Nesprávně. Generická substituce je v ČR legální a běžná praxe.",
          "Správně! Substituce šetří peníze plátcům i pacientům. Lékárník musí zachovat stejnou účinnou látku, cestu podání a sílu. Pokud lékař napíše 'Nezaměňovat' (např. u úzkého TI), substituce je zakázána.",
          "Nesprávně. Pacient s tím musí souhlasit a lékárník jej musí informovat.",
          "Nesprávně. Vztahuje se na všechna běžná alopatická léčiva."
        ]
      }
    ]
  },
  "pharm-24": {
    "definition": "Omamné a psychotropní látky (OPL) jsou přípravky s vysokým rizikem vzniku závislosti a zneužívání. Nakládání s nimi a jejich předepisování podléhá přísné zákonné regulaci (zákon o návykových látkách).",
    "kinetics": [
      "Většina OPL (zejména silná analgetika - opioidy a psychostimulancia) vykazuje rychlý průnik do mozku přes hematoencefalickou bariéru díky vysoké lipofilitě.",
      "Kinetika se mění při zneužívání (např. drcení retardovaných forem zrychlí absorpci a vyvolá prudký pík v CNS).",
      "Metabolismus probíhá v játrech, vylučování ledvinami (často se monitoruje přítomnost metabolitů v moči pro forenzní účely)."
    ],
    "dynamics": [
      "Opioidy (skupina I, např. fentanyl, morfin, oxykodon) stimulují mu-opioidní receptory, což vede k analgezii, ale také k euforii a útlumu dechového centra.",
      "Psychostimulancia (např. methylfenidát) zvyšují koncentraci dopaminu a noradrenalinu v synaptické štěrbině.",
      "Dlouhodobé užívání vede k toleranci (potřeba vyšších dávek k vyvolání stejného účinku) a rozvoji fyzické i psychické závislosti."
    ],
    "clinical": [
      "Léčiva s vysokým rizikem zneužívání (skupina OL 1 a PL 1) se předepisují výhradně na recepty s modrým pruhem (tiskopisy s přísnou evidencí).",
      "Recept s modrým pruhem má omezenou platnost (v ČR standardně 14 dní) a lze na něj předepsat omezené množství (maximálně na 30 dní léčby).",
      "Zdravotnická zařízení musí vést knihu evidující příjem a výdej OPL, která se uchovává po dobu 5 let."
    ],
    "pearl": "Recept s modrým pruhem se v ČR vyžaduje pro silné opioidy (morfin, fentanyl, oxykodon) a stimulancia (methylfenidát). Naopak slabé opioidy (tramadol, kodein) a běžné benzodiazepiny se předepisují na klasický recept, i když spadají pod regulaci zneužívání návykových látek!",
    "tableData": [
      {
        "name": "Platnost receptu s modrým pruhem v ČR",
        "value": "14 dní"
      },
      {
        "name": "Doba uchování evidenční knihy OPL",
        "value": "5 let"
      },
      {
        "name": "Maximální doba krytí léčby na modrý recept",
        "value": "30 dní"
      }
    ],
    "quiz": [
      {
        "question": "Který z následujících receptů / tiskopisů je vyžadován pro předepsání silného opioidu (např. morfinu pro onkologického pacienta)?",
        "options": [
          "Běžný elektronický recept (eRecept) bez jakýchkoliv omezení",
          "Recept s modrým pruhem (v papírové formě nebo se specifickým příznakem v eReceptu)",
          "Recept s červeným pruhem",
          "Tyto léky se nesmí předepisovat domů vůbec"
        ],
        "correct": 1,
        "explanations": [
          "Nesprávně. Běžný recept na silné návykové látky sk. I nestačí.",
          "Správně! Recept s modrým pruhem (či jeho elektronický ekvivalent s OPL příznakem) podléhá přísnému evidenčnímu režimu k zamezení zneužívání a padělání.",
          "Nesprávně. Červený pruh se na receptech nevyskytuje (červené pruhy bývají např. na žádankách o transfúzi, ale recepty mají modrý).",
          "Nesprávně. Pacienti v paliativní péči je běžně užívají doma, ale preskripce podléhá přísné regulaci."
        ]
      },
      {
        "question": "Jaká je standardní platnost receptu s modrým pruhem předepisujícího omamné látky?",
        "options": [
          "1 rok",
          "14 dní",
          "5 dní",
          "Platí neomezeně"
        ],
        "correct": 1,
        "explanations": [
          "Nesprávně. Dlouhá platnost by zvyšovala riziko zneužití a kumulace zásob.",
          "Správně! Platnost je zkrácena na 14 dní včetně dne vystavení, aby se zajistilo, že pacient lék vyzvedne v souvislosti s aktuální potřebou.",
          "Nesprávně. 5 dní platí např. recept na antibiotika, modrý recept má 14 dní.",
          "Nesprávně. Žádný lékařský recept neplatí neomezeně."
        ]
      },
      {
        "question": "Které z následujících léčiv spadá pod nejpřísnější regulaci (modrý recept) a je indikovano u dětí s ADHD?",
        "options": [
          "Diazepam",
          "Methylfenidát (Ritalin)",
          "Ibuprofen",
          "Atropin"
        ],
        "correct": 1,
        "explanations": [
          "Nesprávně. Diazepam je psychotropní látka, ale v ČR se předepisuje na běžný recept.",
          "Správně! Methylfenidát je derivát amfetaminu (stimulans). Zvyšuje pozornost u ADHD, ale má vysoké riziko zneužití, proto podléhá režimu receptu s modrým pruhem.",
          "Nesprávně. Ibuprofen je volně prodejný non-opioidní analgetikum.",
          "Nesprávně. Atropin je parasympatolytikum bez rizika závislosti."
        ]
      }
    ]
  },
  "pharm-25": {
    "definition": "Právní předpisy o léčivech (zákon o léčivech) upravují výzkum, výrobu, registraci, distribuci a výdej léčivých přípravků. Český lékopis (Pharmacopoea Bohemoica) je závazná norma definující kvalitu, přípravu, zkoušení a uchovávání léčiv.",
    "kinetics": [
      "Právní předpisy vyžadují splnění standardů správné klinické praxe (GCP) a správné výrobní praxe (GMP) pro zajištění konstantní kvality a kinetiky léčiv.",
      "Registrační proces (SÚKL v ČR, EMA v EU) schvaluje dokumentaci SPC (Souhrn údajů o přípravku), která obsahuje detailní kinetické parametry (absorpce, clearance).",
      "Lékopis definuje zkoušky totožnosti a čistoty surovin pro přípravu IPLP."
    ],
    "dynamics": [
      "SPC a Příbalová informace (PIL) obsahují závazné informace o mechanismu účinku, kontraindikacích a nežádoucích účincích.",
      "Lékopis stanovuje maximální jednotlivé a denní dávky léčiv (Tabulka I a II lékopisu), které lékárník nesmí překročit bez výslovného souhlasu lékaře na receptu.",
      "Při otravách lékopis uvádí seznam antidot a jejich specifikace."
    ],
    "clinical": [
      "Státní ústav pro kontrolu léčiv (SÚKL) provádí farmakovigilanci (sběr a vyhodnocování hlášení o nežádoucích účincích léčiv).",
      "Zdroje informací pro klinickou praxi: AISLP (automatizovaný informační systém léčivých přípravků), SPC dostupné na webu SÚKLu.",
      "Při předepisování dávek nad limit stanovený lékopisem musí lékař uvést vykřičník (!) a slovní přepis dávky, jinak lékárník lék nevydá."
    ],
    "pearl": "Souhrn údajů o přípravku (SPC) je právně závazný dokument schválený při registraci léčiva. Obsahuje nejspolehlivější, vědecky ověřené informace o dávkování, kinetice a interakcích. Používání léků v rozporu s SPC se nazývá 'off-label' použití a lékař za něj nese plnou právní odpovědnost!",
    "tableData": [
      {
        "name": "Zkratka lékové databáze v ČR",
        "value": "AISLP"
      },
      {
        "name": "Český národní lékový regulátor",
        "value": "SÚKL"
      },
      {
        "name": "Symbol pro překročení max. dávky na receptu",
        "value": "vykřičník (!) a podpis lékaře"
      }
    ],
    "quiz": [
      {
        "question": "K čemu slouží Souhrn údajů o přípravku (SPC)?",
        "options": [
          "Je to reklamní leták pro pacienty",
          "Je to oficiální, právně závazný dokument schválený při registraci, určený pro zdravotnické pracovníky, obsahující ověřené informace o léčivu",
          "Příručka pro skladování léků v továrně",
          "Učebnice pro studenty farmacie"
        ],
        "correct": 1,
        "explanations": [
          "Nesprávně. Leták pro pacienty se nazývá PIL (Příbalová informace).",
          "Správně! SPC (Summary of Product Characteristics) je klíčový dokument pro každého lékaře, definuje povolené indikace, dávkování, farmakokinetiku a nežádoucí účinky.",
          "Nesprávně. Pravidla pro výrobu a skladování upravuje správná výrobní praxe (GMP).",
          "Nesprávně. SPC slouží jako referenční příručka v klinické praxi, nikoliv jako obecná učebnice."
        ]
      },
      {
        "question": "Co musí udělat lékař na receptu, pokud chce pacientovi úmyslně předepsat dávku léčiva vyšší než je maximální dávka uvedená v lékopisu?",
        "options": [
          "Napsat na recept poznámku 'Předávkovat'",
          "Označit dávku vykřičníkem (!), napsat ji slovy v latině a připojit svůj podpis a razítko",
          "Nesmí to udělat za žádných okolností, lékárník to nesmí vydat",
          "Zavolat lékárníkovi telefonem bez zápisu do receptu"
        ],
        "correct": 1,
        "explanations": [
          "Nesprávně. Slovní vyjádření musí mít předepsanou lékopisnou formu.",
          "Správně! Vykřičník a slovní přepis dávky (např. *doses singulares maximae!*) potvrzuje lékárníkovi, že se lékař nepřepsal a bere na sebe plnou odpovědnost za nestandardní dávku.",
          "Nesprávně. V odůvodněných případech (onkologie, tolerance) je to povoleno.",
          "Nesprávně. Zápis na receptu je nutným právním dokladem."
        ]
      },
      {
        "question": "Která instituce v ČR je zodpovědná za registraci humánních léčiv, povolování klinických hodnocení a sledování nežádoucích účinků (farmakovigilanci)?",
        "options": [
          "Ministerstvo zdravotnictví přímo",
          "Státní ústav pro kontrolu léčiv (SÚKL)",
          "Česká lékařská komora",
          "Evropský parlament"
        ],
        "correct": 1,
        "explanations": [
          "Nesprávně. Ministerstvo je nadřízený orgán, ale konkrétní agendu deleguje na specializovaný ústav.",
          "Správně! SÚKL je správní úřad s celorepublikovou působností, který dohlíží na bezpečnost a kvalitu léčiv v ČR.",
          "Nesprávně. Komora je samosprávná stavovská organizace sdružující lékaře, neřeší registraci léků.",
          "Nesprávně. Evropská registrace spadá pod EMA (European Medicines Agency), ne pod parlament."
        ]
      }
    ]
  },
  "pharm-26": {
    "definition": "Závislost na tabáku je chronické, recidivující onemocnění (diagnóza F17) charakterizované fyzickou závislostí na nikotinu a silnou psychosociální vazbou na rituál kouření.",
    "kinetics": [
      "Inhalovaný nikotin z tabákového kouře se vstřebává plícemi extrémně rychle (dosažení mozku za 7-10 sekund, což je rychlejší než i.v. aplikace).",
      "Poločas eliminace nikotinu je krátký (cca 2 hodiny), což nutí kuřáka k častému opakování dávky k udržení hladiny.",
      "Hlavním metabolitem nikotinu v játrech je kotinin (metabolizovaný přes CYP2A6), který se používá jako biomarker expozice s poločasem 16-20 hodin."
    ],
    "dynamics": [
      "Nikotin stimuluje pre- i postsynaptické nikotinové acetylcholinové receptory (nAChR, zejména subtyp alfa-4-beta-2) v CNS.",
      "Aktivace nAChR vede k masivnímu uvolnění dopaminu v nucleus accumbens (systém odměny), což je klíčové pro vznik závislosti.",
      "Při chronickém užívání dochází k up-regulaci nAChR receptorů, což po vysazení vyvolává těžký abstinenční syndrom."
    ],
    "clinical": [
      "Farmakoterapie zahrnuje: 1. Náhradní terapii nikotinem (NRT - náplasti, žvýkačky), 2. Vareniklin (parciální agonista nAChR alfa-4-beta-2, nejúčinnější lék), 3. Bupropion (inhibitor zpětného vychytávání dopaminu a noradrenalinu).",
      "U dětí a dospívajících je mozek k závislosti na nikotinu mnohem vnímavější; užívání e-cigaret (vapování) poškozuje neurovývoj.",
      "Starší kuřáci mají vysoké kardiovaskulární riziko; vareniklin a NRT jsou bezpečné, ale vyžadují individualizovaný přístup."
    ],
    "pearl": "Vareniklin (Champix) je parciální agonista alfa-4-beta-2 nikotinových receptorů. Působí duálně: 1. Mírně stimuluje receptory k potlačení abstinenčních příznaků (agonismus), 2. Zároveň blokuje plnou stimulaci receptorů při případném kouření (antagonismus), čímž kuřákovi bere pocit uspokojení z cigarety!",
    "tableData": [
      {
        "name": "Doba dosažení mozku po inhalaci nikotinu",
        "value": "7 - 10 sekund"
      },
      {
        "name": "Poločas eliminace nikotinu",
        "value": "cca 2 hodiny"
      },
      {
        "name": "Hlavní receptor podílející se na závislosti",
        "value": "nAChR alfa-4-beta-2"
      }
    ],
    "quiz": [
      {
        "question": "Jaký je mechanismus účinku vareniklinu v léčbě závislosti na tabáku?",
        "options": [
          "Je to čistý antagonista, který vyvolává zvracení po požití nikotinu",
          "Je to parciální agonista nikotinových acetylcholinových receptorů (alfa-4-beta-2), který tlumí abstinenční příznaky a zároveň blokuje účinek nikotinu z cigaret",
          "Fyzicky blokuje vstřebávání nikotinu v plicích",
          "Působí jako enzymatický induktor cytochromu P450"
        ],
        "correct": 1,
        "explanations": [
          "Nesprávně. Vareniklin nevyvolává averzivní zvracení (jako např. disulfiram u alkoholu).",
          "Správně! Jako parciální agonista vykazuje duální efekt. Snižuje touhu po cigaretě (craving) a brání euforii, pokud si pacient přesto zapálí.",
          "Nesprávně. Inhalaci a plicní resorpci nikotinu nijak mechanicky nebrání.",
          "Nesprávně. Jeho metabolické interakce přes CYP450 jsou zanedbatelné, vylučuje se ledvinami nezměněn."
        ]
      },
      {
        "question": "Který biomarker se v klinické praxi standardně používá ke stanovení expozice tabákovému kouři u kuřáků i pasivních kuřáků?",
        "options": [
          "Metabolit kotinin (v moči, slinách nebo plazmě)",
          "Oxid uhličitý ve vydechovaném vzduchu",
          "Hladina inzulínu nalačno",
          "Kreatinin v moči"
        ],
        "correct": 0,
        "explanations": [
          "Správně! Kotinin je hlavní metabolit nikotinu. Vzhledem k delšímu poločasu (16-20h oproti 2h u nikotinu) spolehlivě detekuje užívání tabáku v posledních 2-3 dnech.",
          "Nesprávně. Měří se spíše oxid uhelnatý (CO) k posouzení kapacity hemoglobinu, ale kotinin je specifičtější.",
          "Nesprávně. Glykémie ani inzulín nesouvisí s expozicí nikotinu.",
          "Nesprávně. Kreatinin slouží k hodnocení renálních funkcí nebo ředění moči, nikoliv jako marker tabáku."
        ]
      },
      {
        "question": "Jak bupropion pomáhá při odvykání kouření?",
        "options": [
          "Váže se přímo na nikotin a neutralizuje ho v krvi",
          "Inhibuje zpětné vychytávání dopaminu a noradrenalinu v CNS, čímž napodobuje zvýšení dopaminu vyvolané nikotinem a zmírňuje abstinenční syndrom",
          "Způsobuje znecitlivění chuťových pohárků na jazyku",
          "Působí jako anestetikum na dýchací cesty"
        ],
        "correct": 1,
        "explanations": [
          "Nesprávně. Nejedná se o chelatační činidlo ani protilátku.",
          "Správně! Bupropion (původně antidepresivum) zvyšuje hladinu dopaminu v drahách odměny, což potlačuje psychické abstinenční příznaky (chuť kouřit, dysforii).",
          "Nesprávně. Chuť nemění.",
          "Nesprávně. Nepůsobí lokálně anesteticky."
        ]
      }
    ]
  },
  "pharm-27": {
    "definition": "Léková závislost (diagnóza F11-F19) je stav charakterizovaný nutkavou potřebou opakovaně užívat psychoaktivní látku (craving), ztrátou kontroly nad jejím užíváním, rozvojem tolerance a vznikem fyzického či psychického abstinenčního syndromu po vysazení.",
    "kinetics": [
      "Rychlost rozvoje závislosti koreluje s farmakokinetikou: látky s rychlým nástupem účinku (např. i.v. heroin, inhalovaný kokain, sublingvální alprazolam) mají nejvyšší adiktivní potenciál.",
      "Dlouhodobě působící agonisté (např. methadon) mají pomalou absorpci a dlouhý poločas, což zabraňuje vzniku euforického píku (flashe) a mírní abstinenční příznaky.",
      "Clearance návykových látek klesá při orgánovém poškození (např. alkoholická cirhóza)."
    ],
    "dynamics": [
      "Benzodiazepiny stimulují $GABA_A$ receptor (alosterická modulace chloridového kanálu) -> anxiolýza, sedace, vysoké riziko závislosti.",
      "Opioidy stimulují mí-receptory a tlumí aktivitu GABAergních neuronů v VTA, což vede k disinhibici dopaminových neuronů a uvolnění dopaminu.",
      "Tolerance vzniká down-regulací receptorů nebo adaptací intracelulární signalizace (např. up-regulací adenylátcyklázy)."
    ],
    "clinical": [
      "Rizikové skupiny léků: benzodiazepiny (anxiolytika - např. alprazolam, diazepam), Z-laátky (hypnotika - zolpidem), opioidní analgetika (fentanyl, oxykodon, tramadol), barbituráty.",
      "Léčba závislosti využívá substituční terapii: methadon (plný agonista) nebo buprenorfin (parciální agonista) u opioidů.",
      "U starších pacientů je preskripce BZD spojena s rizikem akumulace (kvůli prodlouženému poločasu), útlumu kognice, pádů a zlomenin."
    ],
    "pearl": "Benzodiazepiny by se neměly z důvodu vysokého rizika závislosti předepisovat kontinuálně na dobu delší než 4 až 6 týdnů (včetně fáze vysazování). U hypnotik (Z-látky jako zolpidem) je bezpečný limit pouze 2 až 4 týdny! Dlouhodobá léčba chronické nespavosti či úzkosti benzodiazepiny je non-lege artis.",
    "tableData": [
      {
        "name": "Bezpečný limit preskripce anxiolytických BZD",
        "value": "4 - 6 týdnů"
      },
      {
        "name": "Poločas substitučního methadonu",
        "value": "24 - 36 hodin"
      },
      {
        "name": "Substituční opioidní parciální agonista",
        "value": "Buprenorfin"
      }
    ],
    "quiz": [
      {
        "question": "Která z následujících farmakokinetických vlastností léčiva nejvíce zvyšuje jeho adiktivní potenciál (riziko závislosti)?",
        "options": [
          "Dlouhý poločas eliminace a pomalá absorpce",
          "Rychlý nástup účinku (rychlý průnik do CNS a dosažení maximální koncentrace) s prudkým vzestupem hladiny",
          "Vysoká hydrofilita a vylučování žlučí",
          "Nízká vazba na plazmatické bílkoviny"
        ],
        "correct": 1,
        "explanations": [
          "Nesprávně. Pomalu nastupující léky nevyvolávají prudkou euforii a závislost se rozvíjí pomaleji.",
          "Správně! Rychlý vzestup koncentrace v mozku vyvolá intenzivní pocit odměny (euforie, flash). Proto jsou zneužívány spíše krátkodobě a rychle účinkující formy (např. alprazolam vs chlordiazepoxid).",
          "Nesprávně. Hydrofilní látky hůře procházejí HEB a mají nižší adiktivní potenciál.",
          "Nesprávně. Vazba na proteiny přímo adiktivní potenciál neurčuje."
        ]
      },
      {
        "question": "Která skupina léčiv představuje v ordinaci praktického lékaře nejčastější riziko rozvoje iatrogenní (lékařem způsobené) závislosti při dlouhodobé preskripci?",
        "options": [
          "Selektivní beta-blokátory",
          "Benzodiazepiny (např. alprazolam) a Z-látky (např. zolpidem)",
          "Statiny k léčbě cholesterolu",
          "Protonové inhibitory (PPI)"
        ],
        "correct": 1,
        "explanations": [
          "Nesprávně. Beta-blokátory vyvolávají po vysazení rebound fenomén, ale nejedná se o závislost s cravingem.",
          "Správně! Tyto látky se často předepisují na úzkosti a nespavost. Tolerance a závislost se vyvíjí velmi rychle (již po několika týdnech pravidelného užívání).",
          "Nesprávně. Statiny nemají žádné psychoaktivní účinky.",
          "Nesprávně. PPI mohou mít rebound fenomén překyselení po vysazení, ale nevyvolávají závislost."
        ]
      },
      {
        "question": "Jaký je princip substituční léčby závislosti na heroinu pomocí methadonu?",
        "options": [
          "Methadon vyvolává averzivní reakci (zvracení) po užití heroinu",
          "Methadon je dlouhodobě působící opioidní receptorový agonista; podává se perorálně jednou denně, udržuje stabilní hladinu bez euforie a potlačuje abstinenční syndrom a craving",
          "Methadon urychluje metabolismus heroinu v játrech",
          "Methadon trvale poškozuje opioidní receptory"
        ],
        "correct": 1,
        "explanations": [
          "Nesprávně. Averzi vyvolává disulfiram u alkoholu, methadon ne.",
          "Správně! Vzhledem k dlouhému poločasu (až 36h) a p.o. podání nedochází k fluktuacím hladin. Pacient netrpí abstinenčními příznaky a je schopen sociální rehabilitace.",
          "Nesprávně. Jaterní metabolismus heroinu neovlivňuje.",
          "Nesprávně. Vazba je reverzibilní a receptory nepoškozuje."
        ]
      }
    ]
  },
  "pharm-28": {
    "definition": "Interakce léčiv ve fázi absorpce a distribuce jsou typy farmakokinetických interakcí, kdy jedno léčivo mění rychlost nebo rozsah vstřebávání anebo vazebný profil a rozdělení druhého léčiva v těle.",
    "kinetics": [
      "Interakce při absorpci: 1. Změna pH žaludku (antacida, PPIs snižují rozpustnost slabých kyselin), 2. Chelatace (multivalentní ionty $Ca^{2+}$, $Fe^{2+}$, $Al^{3+}$ vážou tetracykliny a chinolony), 3. Ovlivnění motility (metoklopramid zrychluje, opioidy zpomalují pasáž).",
      "Interakce při distribuci: Soutěž o vazebná místa na plazmatickém albuminu (vytěsnění).",
      "Při vytěsnění stoupá volná frakce ($f_u$) vytěsněného léčiva. Protože však stoupá i jeho clearance, koncentrace volného léčiva se v ustáleném stavu obvykle vrátí k původní hodnotě, pokud léčivo nemá nelineární eliminaci."
    ],
    "dynamics": [
      "Vytěsňovací interakce (např. NSAIDs vytěsňují warfarin) jsou klinicky nebezpečné zejména tehdy, pokud vytěsňující látka zároveň inhibuje metabolismus vytěsněné látky.",
      "Chelatace v žaludku vede k poklesu biologické dostupnosti pod kritickou mez (terapeutické selhání u antibiotik).",
      "Antacida snižují vstřebávání ketokonazolu, který vyžaduje kyselé pH k disociaci."
    ],
    "clinical": [
      "Fluorochinolony (např. ciprofloxacin) se nesmí podávat současně s mléčnými výrobky, minerálkami nebo doplňky stravy s obsahem vápníku/hořčíku. Nutný odstup minimálně 2 hodiny před nebo 4-6 hodin po.",
      "U dětí je nutné zamezit podávání antacid s obsahem hliníku, která mohou navíc vyvolat zácpu.",
      "Při podání salicylátů pacientům na fenytoinu stoupá volná (toxická) hladina fenytoinu v plazmě."
    ],
    "pearl": "Chelatační interakce v žaludku jsou naprosto spolehlivé - pokud pacient zapije ciprofloxacin (nebo doxycyklin) mlékem či užije antacidum s vápníkem/hořčíkem, biologická dostupnost antibiotika klesne pod 20 %. Hrozí kritické selhání antimikrobiální léčby a rozvoj bakteriální rezistence!",
    "tableData": [
      {
        "name": "Minimální časový odstup při chelataci",
        "value": "2 hodiny před / 4-6 hodin po"
      },
      {
        "name": "Frakce warfarinu navázaná na albumin",
        "value": "99 % (volné pouze 1 %)"
      },
      {
        "name": "Vytěsňující látka s vysokou afinitou",
        "value": "Salicyláty (NSAIDs)"
      }
    ],
    "quiz": [
      {
        "question": "Proč je nebezpečné zapíjet fluorochinolonová antibiotika (např. ciprofloxacin) mlékem nebo minerální vodou?",
        "options": [
          "Mléko urychluje metabolickou degradaci antibiotika v játrech",
          "Dvojmocné kationty (Ca2+, Mg2+) v mléce/minerálkách tvoří s antibiotikem v žaludku nerozpustné a nevstřebatelné cheláty, což dramaticky snižuje jeho účinnost",
          "Mléko zvyšuje vylučování antibiotika plícemi",
          "Antibiotikum způsobuje srážení mléka v krku"
        ],
        "correct": 1,
        "explanations": [
          "Nesprávně. Jaterní metabolismus není chelatací v GIT ovlivněn.",
          "Správně! Vzniklé komplexy (cheláty) jsou příliš velké a polární, než aby prošly pasivní difúzí sliznicí tenkého střeva. Lék odejde stolicí bez účinku.",
          "Nesprávně. Antibiotika se plícemi standardně neeliminují.",
          "Nesprávně. Srážení mléka v žaludku je fyziologické a nemá vliv na systémovou toxicitu."
        ]
      },
      {
        "question": "Jaký vliv má podání inhibitoru protonové pumpy (PPI - např. omeprazolu) na absorpci slabě kyselých léčiv, která vyžadují kyselé pH pro rozpuštění?",
        "options": [
          "Absorpce se výrazně zvýší",
          "Zvýšením pH v žaludku se sníží rozpustnost a disociace těchto léčiv, což vede k významnému poklesu jejich vstřebávání",
          "Způsobí okamžitou destrukci omeprazolu",
          "Absorpce se nemění"
        ],
        "correct": 1,
        "explanations": [
          "Nesprávně. Zvýšení pH snižuje absorpci látek závislých na kyselém prostředí (např. ketokonazol, itrakonazol, železo).",
          "Správně! Snížení acidity (vzestup pH) mění ionizaci a rozpustnost. Látka se nerozpustí v žaludeční tekutině a nemůže se vstřebat v tenkém střevě.",
          "Nesprávně. Omeprazol je stabilní při snížení acidity, acidita ho naopak degraduje (proto má enterosolventní mikropelety).",
          "Nesprávně. Změna pH je jednou z nejčastějších příčin lékových interakcí v žaludku."
        ]
      },
      {
        "question": "Co se stane bezprostředně po vytěsnění warfarinu (který je z 99 % navázán na albumin) z vazebných míst salicylátem?",
        "options": [
          "Celková koncentrace warfarinu se zdvojnásobí",
          "Koncentrace volného (aktivního) warfarinu v plazmě se okamžitě zvýší, což může dočasně zvýšit riziko krvácení, dokud se nezvýší jeho eliminace",
          "Warfarin začne krystalizovat v cévách",
          "Warfarin se přemění na heparin"
        ],
        "correct": 1,
        "explanations": [
          "Nesprávně. Celková koncentrace (volné + vázané) se spíše sníží kvůli zvýšené eliminaci volného podílu.",
          "Správně! Vytěsněním stoupne volná frakce (např. z 1 % na 2 %, což je 100% nárůst volné účinné hladiny). Hrozí přechodná toxicita. Následně se ustaví nová rovnováha.",
          "Nesprávně. Krystalizace v cévách z vytěsnění nehrozí.",
          "Nesprávně. Záměna chemické struktury v krvi na jinou třídu antikoagulancií není možná."
        ]
      }
    ]
  },
  "pharm-29": {
    "definition": "Interakce léčiv ve fázi biotransformace a eliminace jsou nejvýznamnější farmakokinetické interakce, při nichž jedno léčivo mění aktivitu metabolických enzymů (zejména CYP450) nebo ovlivňuje renální a biliární vylučování druhého léčiva.",
    "kinetics": [
      "Interakce při biotransformaci: 1. Inhibice enzymů (okamžitý vzestup hladin ko-medikace, riziko toxicity), 2. Indukce enzymů (postupný pokles hladin ko-medikace během 1-2 týdnů, riziko selhání léčby).",
      "Interakce při eliminaci: 1. Kompetice o aktivní tubulární sekreci (např. probenecid nebo NSAIDs blokují sekreci methotrexátu přes transportéry OAT1/OAT3, což vede k toxickému hromadění methotrexátu).",
      "Změna renálního clearance: P-glykoproteinová inhibice v ledvinách (např. amiodaron snižuje clearance digoxinu)."
    ],
    "dynamics": [
      "Inhibice biotransformace (např. klarithromycin inhibuje CYP3A4, čímž blokuje metabolismus simvastatinu) vede k rhabdomyolýze.",
      "Indukce biotransformace (např. třezalka tečkovaná indukuje CYP3A4, což snižuje hladinu cyklosporinu u pacientů po transplantaci a vede k rejekci štěpu).",
      "Změna pH moči: podání acetazolamidu (alkalizace) urychlí vylučování kyselých látek."
    ],
    "clinical": [
      "Kombinace inhibitorů CYP3A4 (např. ritonavir, ketokonazol) s benzodiazepiny metabolizovanými touto dráhou (alprazolam, midazolam) je riziková (prodloužená sedace).",
      "U dětí je nutné zvážit, že induktory (např. fenobarbital) mohou urychlit metabolismus antiepileptik a vyžadovat vyšší dávkování.",
      "U starších osob s preexistujícím CKD je interakce na úrovni renální sekrece (např. NSAIDs + digoxin) velmi nebezpečná."
    ],
    "pearl": "Kombinace methotrexátu a NSAIDs (např. ibuprofenu) je vysoce riziková. NSAIDs inhibují renální syntézu prostaglandinů (snižují GFR) a zároveň kompetitivně blokují OAT transportéry v tubulech, které vylučují methotrexát. Výsledkem je prudký vzestup toxicity methotrexátu s útlumem kostní dřeně (myelotoxicitou) a mukositidou!",
    "tableData": [
      {
        "name": "Klíčový renální transportér pro slabé kyseliny",
        "value": "OAT (Organic Anion Transporter)"
      },
      {
        "name": "Vliv třezalky tečkované na antikoncepci",
        "value": "indukce CYP3A4 (selhání antikoncepce)"
      },
      {
        "name": "Vliv klarithromycinu na statiny",
        "value": "inhibice CYP3A4 (riziko rhabdomyolýzy)"
      }
    ],
    "quiz": [
      {
        "question": "Co se stane s pacientem po transplantaci užívajícím cyklosporin (imunosupresivum metabolizované přes CYP3A4), pokud začne pít čaj z třezalky tečkované?",
        "options": [
          "Cyklosporin se stane toxičtějším",
          "Třezalka indukuje CYP3A4 v játrech, což výrazně zrychlí metabolismus cyklosporinu, jeho hladina klesne pod terapeutickou mez a hrozí rejekce (odhojení) transplantovaného orgánu",
          "Třezalka zablokuje vylučování cyklosporinu ledvinami",
          "Účinek se nijak nezmění"
        ],
        "correct": 1,
        "explanations": [
          "Nesprávně. Hladina cyklosporinu naopak klesne, takže toxicita nehrozí, hrozí však selhání účinku.",
          "Správně! Třezalka tečkovaná (Hypericum perforatum) je silným induktorem CYP3A4 a P-gp. Její užívání je kontraindikováno u pacientů na imunosupresivech, warfarinu či HIV medikaci.",
          "Nesprávně. Třezalka nezpůsobuje renální retenci cyklosporinu.",
          "Nesprávně. Tato interakce je klasickým příkladem závažného a život ohrožujícího selhání imunosuprese."
        ]
      },
      {
        "question": "Proč je nebezpečné kombinovat methotrexát s nesteroidními antiflogistiky (NSAIDs, např. ibuprofenem)?",
        "options": [
          "Ibuprofen neutralizuje methotrexát v krvi",
          "NSAIDs kompetitivně blokují renální tubulární transportéry (OAT), které methotrexát vylučují, a snižují GFR; to vede k akumulaci methotrexátu v těle a těžké myelotoxicitě (útlumu kostní dřeně)",
          "Tato kombinace způsobuje okamžité selhání plic",
          "Ibuprofen zabraňuje vstřebávání methotrexátu v žaludku"
        ],
        "correct": 1,
        "explanations": [
          "Nesprávně. Interakce neprobíhá fyzikálně-chemicky v systémové krvi.",
          "Správně! Methotrexát má úzký terapeutický index. Inhibice jeho renálního vylučování vede k pancytopenii, mukositidě a renálnímu selhání.",
          "Nesprávně. Akutní plicní poškození může nastat z toxicity methotrexátu (methotrexátová pneumonitida), ale primární mechanismus interakce je renální.",
          "Nesprávně. Absorpce v žaludku není tímto mechanismem ovlivněna."
        ]
      },
      {
        "question": "Jaký je časový průběh lékových interakcí vyvolaných inhibicí vs indukcí jaterních enzymů?",
        "options": [
          "Indukce nastupuje okamžitě, inhibice až po několika týdnech",
          "Inhibice enzymu se projeví téměř okamžitě (do 24-48 hodin); indukce vyžaduje syntézu nových enzymů a plně se rozvine až za 1-2 týdny",
          "Obě interakce nastupují přesně za 5 minut",
          "Indukce trvá pouze 1 hodinu a pak mizí"
        ],
        "correct": 1,
        "explanations": [
          "Nesprávně. Je to naopak. Inhibice blokuje stávající enzymy, což je rychlý děj. Indukce vyžaduje genovou transkripci.",
          "Správně! U inhibice dochází k rychlé saturaci enzymu (např. po první dávce klarithromycinu). Indukce (např. rifampicinem) vyžaduje čas na syntézu nových proteinů a stejný čas na jejich degradaci po vysazení.",
          "Nesprávně. Molekulární procesy v buňkách vyžadují čas, 5 minut nestačí.",
          "Nesprávně. Indukovaný stav přetrvává dny až týdny po vysazení induktoru, dokud nedojde k přirozenému turnoveru enzymů."
        ]
      }
    ]
  },
  "pharm-30": {
    "definition": "Léková alergie je imunologicky zprostředkovaná nežádoucí reakce na léčivo (antigen), která nevykazuje závislost na dávce a vyžaduje předchozí senzibilizaci organismu.",
    "kinetics": [
      "Léčiva s nízkou molekulovou hmotností (např. penicilin) fungují jako hapteny. Aby vyvolala imunitní odpověď, musí se kovalentně vázat na endogenní nosné proteiny.",
      "Rychlost rozvoje reakce: u typu I (IgE) dochází k degranulaci žírných buněk během minut po expozici.",
      "U typu IV (opožděná buněčná reakce) se kožní projevy (např. exantém, DRESS syndrom, SJS/TEN) rozvíjejí s latencí 1-3 týdny."
    ],
    "dynamics": [
      "Klasifikace dle Coombse a Gella: Typ I (anafylaxe, bronchospasmus), Typ II (cytotoxická - např. poléková hemolytická anémie), Typ III (imunokomplexy - sérová nemoc, vaskulitida), Typ IV (buněčně zprostředkovaná - kontaktní dermatitida, SJS/TEN).",
      "Křížová reaktivita: pacienti s těžkou anafylaktickou reakcí na peniciliny mají vyšší riziko alergie na cephalosporiny I. a II. generace.",
      "Polékový Stevens-Johnsonův syndrom (SJS) a toxická epidermální nekrolýza (TEN) jsou charakterizovány masivní apoptózou keratinocytů zprostředkovanou CD8+ T-lymfocyty."
    ],
    "clinical": [
      "Rizikové skupiny léků: beta-laktamová antibiotika (peniciliny, cefalosporiny), sulfonamidy (co-trimoxazol), lokální anestetika (esterová spíše než amidová), NSAIDs.",
      "U dětí je nutné odlišit pravou alergii na amoxicilin od virového exantému vyvolaného podáním amoxicilinu u infekční mononukleózy (EBV).",
      "Při anafylaxi je lékem první volby adrenalin podaný intramuskulárně do anterolaterální části stehna (m. vastus lateralis)."
    ],
    "pearl": "Při podání amoxicilinu (nebo ampicilinu) pacientovi s infekční mononukleózou (způsobenou virem EBV) dojde v 80 až 90 % případů k rozvoji makulopapulárního exantému po celém těle. Nejedná se o pravou lékovou alergii, ale o imunopatologickou reakci spojenou s virovou infekcí!",
    "tableData": [
      {
        "name": "Lék první volby u anafylaxe",
        "value": "Adrenalin i.m. (0.3 - 0.5 mg)"
      },
      {
        "name": "Křížová reakce peniciliny - cefalosporiny I. gen",
        "value": "cca 3 - 5 %"
      },
      {
        "name": "Latence u alergické reakce typu IV",
        "value": "48 - 72 hodin (až týdny)"
      }
    ],
    "quiz": [
      {
        "question": "Která třída imunopatologických reakcí (dle Coombse a Gella) je zodpovědná za rozvoj akutního anafylaktického šoku po podání penicilinu?",
        "options": [
          "Typ II (cytotoxická reakce zprostředkovaná IgG/IgM)",
          "Typ I (časná přecitlivělost zprostředkovaná IgE protilátkami a degranulací žírných buněk)",
          "Typ III (imunokomplexová reakce)",
          "Typ IV (opožděná buněčná reakce zprostředkovaná T-lymfocyty)"
        ],
        "correct": 1,
        "explanations": [
          "Nesprávně. Typ II způsobuje např. hemolytickou anémii, ne anafylaktický šok.",
          "Správně! Po vazbě antigenu na IgE navázané na mastocytech dojde k uvolnění histaminu, leukotrienů a prostaglandinů, což vyvolá vasodilataci, hypotenzi a bronchokonstrikci.",
          "Nesprávně. Typ III způsobuje sérovou nemoc se zpožděním 1-2 týdnů.",
          "Nesprávně. Typ IV je opožděná reakce (např. kontaktní ekzém nebo SJS/TEN)."
        ]
      },
      {
        "question": "Co se doporučuje podat jako první a nejdůležitější krok při rozvoji anafylaktického šoku v terénu?",
        "options": [
          "Hydrokortizon i.v.",
          "Adrenalin (epinefrin) intramuskulárně (i.m.) do stehna",
          "Dithiaden (antihistaminikum) p.o.",
          "Inhalaci salbutamolu"
        ],
        "correct": 1,
        "explanations": [
          "Nesprávně. Kortikosteroidy mají pomalý nástup účinku (hodiny) a v akutní fázi život nezachrání.",
          "Správně! Adrenalin působí okamžitě: stimuluje alfa-1 receptory (vasokonstrikce, zvýšení tlaku), beta-1 (zvýšení srdeční akce) a beta-2 (bronchodilatace a stabilizace žírných buněk). Aplikace i.m. je bezpečnější a rychlejší než i.v.",
          "Nesprávně. Perorální antihistaminika účinkují příliš pomalu a u pacienta v šoku s hypotenzí se nevstřebají.",
          "Nesprávně. Salbutamol pomůže na bronchospasmus, ale neřeší kolaps oběhu (hypotenzi)."
        ]
      },
      {
        "question": "Co je to hapten ve vztahu k lékovým alergiím?",
        "options": [
          "Specifický typ bílé krvinky",
          "Malá molekula léčiva, která sama o sobě není imunogenní, ale stane se antigenem po kovalentní vazbě na tělesný protein",
          "Látka, která tlumí alergickou reakci",
          "Alergen přítomný v pylu rostlin"
        ],
        "correct": 1,
        "explanations": [
          "Nesprávně. Hapten je chemická molekula, nikoliv buňka.",
          "Správně! Většina léčiv má malou molekulu a imunitní systém je ignoruje. Teprve po vazbě na makromolekulární nosič (např. albumin) vytvoří komplex, který imunitní buňky rozpoznají jako cizorodý.",
          "Nesprávně. Hapten alergii spouští, netlumí ji.",
          "Nesprávně. Jedná se o obecný termín, v kontextu farmakologie se vztahuje na nízkomolekulární léčiva."
        ]
      }
    ]
  },
  "pharm-31": {
    "definition": "Nežádoucí účinek léčiva (NÚL) je jakákoliv nepříznivá a nezamýšlená odezva na léčivo, která se objeví při dávkách běžně používaných k profylaxi, diagnostice nebo léčbě.",
    "kinetics": [
      "Dávková závislost: nežádoucí účinky typu A jsou závislé na kinetice (při akumulaci léčiva nebo snížené clearance stoupá riziko NÚL).",
      "U farmakokinetických interakcí (např. inhibice CYP) dochází ke zvýšení $C_{max}$ a AUC, což posune hladinu léčiva do toxického pásma.",
      "Časový faktor: nežádoucí účinky mohou být časné (rychle po podání), kumulativní (chronické) nebo opožděné (karcinogenita)."
    ],
    "dynamics": [
      "Klasifikace Rawlins-Thompson (Type A-F):",
      "Type A (Augmented): předvídatelné, závislé na dávce, vycházejí z farmakologického mechanismu (např. krvácení po warfarinu, bradykardie po beta-blokátorech).",
      "Type B (Bizarre): nepředvídatelné, nezávislé na dávce, imunologické či genetické (např. anafylaxe po penicilinu, maligní hypertermie po halotanu).",
      "Type C (Chronic): spojené s délkou léčby (např. supresi nadledvin po kortikosteroidech); Type D (Delayed): opožděné (teratogenita, karcinogenita); Type E (End-of-use): po vysazení (rebound); Type F (Failure): selhání účinku (např. nekvalitní šarže)."
    ],
    "clinical": [
      "Většina klinicky pozorovaných NÚL (cca 80 %) spadá do typu A, lze jim předejít úpravou dávkování podle věku a renálních funkcí.",
      "U dětí je nutná opatrnost u látek ovlivňujících vývoj (např. zpomalení růstu po kortikosteroidech).",
      "U starších osob je výskyt NÚL až 4x vyšší z důvodu polypragmázie a snížené adaptability homeostatických mechanismů."
    ],
    "pearl": "Polékové prodloužení intervalu QTc na EKG je závažným nežádoucím účinkem typu A (blokáda draslíkového hERG kanálu). Léčiva jako clarithromycin, haloperidol, amiodaron nebo sotalol zvyšují riziko maligní komorové arytmie typu torsade de pointes a náhlé smrti, zejména u pacientů s hypokalémií!",
    "tableData": [
      {
        "name": "Podíl nežádoucích účinků typu A (předvídatelné)",
        "value": "cca 80 %"
      },
      {
        "name": "Nežádoucí účinky typu B (bizarre)",
        "value": "idiosynkratické a alergické (20 %)"
      },
      {
        "name": "Kritická délka QTc intervalu (riziko arytmií)",
        "value": "> 500 ms"
      }
    ],
    "quiz": [
      {
        "question": "Jak se klasifikují nežádoucí účinky typu A (Augmented) a typu B (Bizarre) podle Rawlinse a Thompsona?",
        "options": [
          "Typ A jsou alergie, Typ B jsou předávkování",
          "Typ A jsou předvídatelné, závislé na dávce a souvisí s mechanismem účinku; Typ B jsou nepředvídatelné, nezávislé na dávce a nesouvisí s primárním mechanismem (např. alergie)",
          "Typ A jsou pouze u dětí, Typ B u dospělých",
          "Typ A se vyskytují jen u inhalací, Typ B u injekcí"
        ],
        "correct": 1,
        "explanations": [
          "Nesprávně. Definice jsou prohozené.",
          "Správně! Typ A (např. hypoglykémie po inzulínu) lze řešit snížením dávky. Typ B (např. agranulocytóza po metamizolu) vyžaduje okamžité a trvalé vysazení léku.",
          "Nesprávně. Obě skupiny se vyskytují v celé populaci.",
          "Nesprávně. Klasifikace se vztahuje na všechna léčiva bez ohledu na cestu podání."
        ]
      },
      {
        "question": "Do jakého typu nežádoucích účinků spadá rozvoj rebound fenoménu (např. nespavost po náhlém vysazení hypnotik)?",
        "options": [
          "Type A (Augmented)",
          "Type E (End-of-use / z ukončení léčby)",
          "Type D (Delayed)",
          "Type C (Chronic)"
        ],
        "correct": 1,
        "explanations": [
          "Nesprávně. Typ A nastává během léčby při vysokých hladinách.",
          "Správně! Nežádoucí účinky typu E jsou spojeny s vysazením léku. Patří sem abstinenční syndrom u závislostí nebo rebound hypertenze po clonidinu.",
          "Nesprávně. Typ D jsou opožděné účinky, které se projeví měsíce až roky po expozici (např. sekundární nádory).",
          "Nesprávně. Typ C souvisí s dlouhodobým kumulativním podáváním (např. osteoporóza po kortikoidech)."
        ]
      },
      {
        "question": "Co je příčinou vzniku nežádoucích účinků typu B (Bizarre / idiosynkratické)?",
        "options": [
          "Nedostatečné napití pacienta před užitím",
          "Genetické odchylky (enzymové deficity) nebo imunopatologické reakce (alergie) pacienta",
          "Záměna tablet v lékárně",
          "Příliš rychlé polykání tablety"
        ],
        "correct": 1,
        "explanations": [
          "Nesprávně. Hydratace neovlivňuje idiosynkratické reakce.",
          "Správně! Idiosynkrazie je abnormální citlivost genetického původu (např. hemolýza po antimalarikách u pacientů s deficitem glukóza-6-fosfát dehydrogenázy).",
          "Nesprávně. Záměna léků je medikační pochybení, nikoliv nežádoucí účinek samotného léčiva.",
          "Nesprávně. Rychlost polykání nemá vliv na imunologickou reaktivitu."
        ]
      }
    ]
  },
  "pharm-32": {
    "definition": "Vývoj a registrace nových léčiv je komplexní proces testování bezpečnosti a účinnosti molekuly. Skládá se z preklinického zkoumání (in vitro, in vivo na zvířatech) a čtyř fází klinického hodnocení na lidech.",
    "kinetics": [
      "Fáze I klinického hodnocení zkoumá základní farmakokinetiku (ADME), tolerabilitu a bezpečnost u malé skupiny (20-80) zdravých dobrovolníků.",
      "Studie bioekvivalence (Fáze I) zjišťují, zda má generikum stejný časový profil koncentrací (AUC, Cmax) jako originál.",
      "Ve Fázi II a III se upřesňuje vliv onemocnění na farmakokinetické parametry (např. clearance u pacientů s dysfunkcí orgánů)."
    ],
    "dynamics": [
      "Preklinické fáze zkoumají afinitu k receptorům a zjišťují farmakodynamický profil (efekt, toxicita na zvířatech).",
      "Fáze II zjišťuje účinnost (efficacy) a dávkové rozmezí u homogenní skupiny pacientů (100-300) s daným onemocněním.",
      "Fáze III prokazuje účinnost a bezpečnost na velkých souborech pacientů (tisíce) ve srovnání s placebem nebo standardní léčbou (randomizované, dvojitě zaslepené studie)."
    ],
    "clinical": [
      "Fáze IV (postmarketingové sledování) probíhá po registraci a uvedení léku na trh; zaměřuje se na vzácné nežádoucí účinky, dlouhodobou bezpečnost a interakce v reálné populaci.",
      "U dětí je provádění klinických studií eticky velmi přísně regulováno a vyžaduje schválení etickou komisí a specifické pediatrické plány (PIP).",
      "Registrační dokumentace obsahuje Souhrn údajů o přípravku (SPC) a Příbalovou informaci (PIL) schválené regulátorem (SÚKL, EMA, FDA)."
    ],
    "pearl": "Fáze IV (post-marketingové sledování) je klíčová pro odhalení vzácných nežádoucích účinků (s frekvencí např. 1 z 10 000 pacientů), které nelze odhalit v předchozích fázích z důvodu limitovaného počtu účastníků (tisíce). Příkladem je stažení rofecoxibu (Vioxx) z trhu kvůli zvýšenému riziku infarktů až po registraci!",
    "tableData": [
      {
        "name": "Počet zdravých dobrovolníků ve Fázi I",
        "value": "20 - 80 osob"
      },
      {
        "name": "Hlavní cíl Fáze II klinického hodnocení",
        "value": "účinnost a nalezení optimální dávky"
      },
      {
        "name": "Zlatý standard Fáze III studií",
        "value": "randomizované, dvojitě slepé, kontrolované"
      }
    ],
    "quiz": [
      {
        "question": "Která fáze klinického hodnocení nových léčiv se provádí na zdravých dobrovolnících za účelem zhodnocení bezpečnosti a farmakokinetiky?",
        "options": [
          "Fáze I",
          "Fáze II",
          "Fáze III",
          "Fáze IV"
        ],
        "correct": 0,
        "explanations": [
          "Správně! Fáze I testuje bezpečnost, toleranci a farmakokinetiku (jak tělo s lékem nakládá) u zdravých lidí (výjimkou jsou např. onkologická léčiva, která se kvůli toxicitě testují přímo na pacientech).",
          "Nesprávně. Fáze II se provádí na menší skupině vybraných nemocných pacientů k ověření účinnosti a stanovení dávkování.",
          "Nesprávně. Fáze III probíhá na velkých souborech pacientů k definitivnímu průkazu účinnosti před registrací.",
          "Nesprávně. Fáze IV je postmarketingové sledování po schválení léku."
        ]
      },
      {
        "question": "Co je hlavním cílem Fáze IV klinického hodnocení?",
        "options": [
          "Nalezení chemického vzorce látky",
          "Sledování bezpečnosti, dlouhodobých účinků a odhalení vzácných nežádoucích účinků v běžné klinické praxi po registraci a uvedení léku na trh",
          "Testování léku na zvířatech",
          "Stanovení ceny léku"
        ],
        "correct": 1,
        "explanations": [
          "Nesprávně. Výzkum struktury probíhá v preklinické fázi.",
          "Správně! Fáze IV (farmakovigilance) zachycuje rizika, která se projevila až při masovém užívání v heterogenní populaci (starší lidé, polymorbidní pacienti).",
          "Nesprávně. Testy na zvířatech jsou součástí preklinického výzkumu.",
          "Nesprávně. Stanovení ceny a úhrad je administrativní proces (v ČR provádí SÚKL a pojišťovny), ne klinické hodnocení."
        ]
      },
      {
        "question": "Co znamená termín 'dvojité zaslepení' (double-blind) v klinických studiích Fáze III?",
        "options": [
          "Pacient ani ošetřující lékař/zkoušející nevědí, zda pacient dostává aktivní lék nebo placebo/komparátor",
          "Studie se provádí za tmy",
          "Pacient má zavázané oči během aplikace",
          "Účinek léku se hodnotí pouze u nevidomých pacientů"
        ],
        "correct": 0,
        "explanations": [
          "Správně! Dvojité zaslepení minimalizuje riziko zkreslení (bias) ze strany pacienta (placebo efekt) i lékaře (subjektivní hodnocení zlepšení). Odhalení probíhá až při finální statistické analýze.",
          "Nesprávně. Jedná se o metodologický pojem, nikoliv o světelné podmínky.",
          "Nesprávně. Fyzické zavázání očí se nepoužívá, léky jsou vizuálně identické (zaslepené balení).",
          "Nesprávně. Studie se provádí u běžné cílové populace pro danou indikaci."
        ]
      }
    ]
  },
  "pharm-33": {
    "definition": "Cytochrom P450 3A4 (CYP3A4) je nejvýznamnější a nejhojnější izoenzym biotransformace v lidském těle. Nachází se v hepatocytech a enterocytech tenkého střeva a metabolizuje přibližně 50 % všech klinicky užívaných léčiv.",
    "kinetics": [
      "Díky vysoké expresi ve střevní sliznici je CYP3A4 zodpovědný za výrazný presystémový (first-pass) metabolismus mnoha perorálních léčiv.",
      "Inhibitory CYP3A4 (např. ketokonazol, ritonavir, klarithromycin, grapefruitový džus) vyvolávají rychlý a nebezpečný vzestup plazmatických hladin jeho substrátů.",
      "Induktory CYP3A4 (např. rifampicin, carbamazepin, fenytoin, třezalka) stimulují transkripci přes pregnanový X receptor (PXR), což urychluje clearance a snižuje AUC substrátů."
    ],
    "dynamics": [
      "Substráty CYP3A4: statiny (simvastatin, atorvastatin), blokátory vápníkových kanálků (nifedipin, amlodipin), benzodiazepiny (midazolam, alprazolam), makrolidová antibiotika.",
      "Kombinace simvastatinu s inhibitorem CYP3A4 vede k akumulaci statinu ve svalech, inhibici syntézy koenzymu Q10 a rozvoji rabdomyolýzy s myoglobinurií.",
      "Aktivuje některá proléčiva (např. sunitinib)."
    ],
    "clinical": [
      "U starších osob je aktivita CYP3A4 mírně snížena, což v kombinaci s polypragmázií zvyšuje riziko závažných interakcí.",
      "Při podání midazolamu (sedativum) pacientovi užívajícímu ritonavir (inhibitor) hrozí prodloužený útlum vědomí a apnoe.",
      "Pacienti na atorvastatinu by měli být poučeni o zákazu pití grapefruitové šťávy."
    ],
    "pearl": "Kombinace klarithromycinu (silný inhibitor CYP3A4) se simvastatinem je přísně kontraindikována. Blokáda metabolismu zvýší koncentraci simvastatinové kyseliny v plazmě více než 5násobně, což dramaticky zvyšuje riziko život ohrožující rabdomyolýzy a akutního poškození ledvin!",
    "tableData": [
      {
        "name": "Podíl metabolizovaných léků přes CYP3A4",
        "value": "cca 50 %"
      },
      {
        "name": "Silný induktor CYP3A4",
        "value": "Rifampicin"
      },
      {
        "name": "Silný inhibitor CYP3A4 (potravina)",
        "value": "Grapefruitový džus"
      }
    ],
    "quiz": [
      {
        "question": "Které z následujících léčiv je silným inhibitorem CYP3A4 a může způsobit předávkování simvastatinem?",
        "options": [
          "Rifampicin",
          "Klarithromycin",
          "Třezalka tečkovaná",
          "Furosemid"
        ],
        "correct": 1,
        "explanations": [
          "Nesprávně. Rifampicin je silný induktor, hladinu simvastatinu by snížil.",
          "Správně! Klarithromycin (makrolid) covalentně modifikuje CYP3A4 a brání metabolismu simvastatinu, což vede k rhabdomyolýze.",
          "Nesprávně. Třezalka je induktor CYP3A4.",
          "Nesprávně. Furosemid je diuretikum bez přímého vlivu na enzymy CYP450."
        ]
      },
      {
        "question": "Kde se v těle nachází nejvyšší koncentrace izoenzymu CYP3A4?",
        "options": [
          "Pouze v ledvinách",
          "V játrech (hepatocytech) a v buňkách sliznice tenkého střeva (enterocytech)",
          "V plicních alveolech",
          "V kosterním svalstvu"
        ],
        "correct": 1,
        "explanations": [
          "Nesprávně. Ledviny vykazují nízkou aktivitu CYP3A4.",
          "Správně! Přítomnost v enterocytech střeva je zodpovědná za to, že se střevní CYP3A4 podílí na first-pass efektu ještě před vstupem léčiva do jater.",
          "Nesprávně. Plíce mají specifické enzymy (např. CYP2E1), ale ne v takovém množství jako játra.",
          "Nesprávně. Svaly neprovádějí biotransformaci přes systém CYP450."
        ]
      },
      {
        "question": "Co se stane s účinkem midazolamu (krátkodobý benzodiazepin metabolizovaný přes CYP3A4) u pacienta, který dlouhodobě užívá rifampicin (silný induktor CYP3A4)?",
        "options": [
          "Účinek midazolamu bude výrazně prodloužen a zesílen",
          "Účinek midazolamu bude výrazně zeslaben až potlačen (rychle se zmetabolizuje)",
          "Midazolam se stane toxickým pro ledviny",
          "Indukce nemá na midazolam žádný vliv"
        ],
        "correct": 1,
        "explanations": [
          "Nesprávně. Prodloužení nastane při inhibici (např. erythromycinem).",
          "Správně! Indukovaný CYP3A4 zlikviduje midazolam extrémně rychle. Dávka, která běžně pacienta uspí, u něj nemusí vyvolat žádnou sedaci.",
          "Nesprávně. Midazolam ani jeho metabolity nejsou nefrotoxické.",
          "Nesprávně. Midazolam je citlivým substrátem a vliv induktorů je zásadní."
        ]
      }
    ]
  },
  "pharm-34": {
    "definition": "Cytochrom P450 2D6 (CYP2D6) je vysoce polymorfní jaterní enzym zodpovědný za metabolismus cca 25 % léčiv, včetně beta-blokátorů, antidepresiv, antipsychotik a opioidů.",
    "kinetics": [
      "Vykazuje extrémní genetickou variabilitu v populaci. Rozlišujeme: 1. Pomalé metabolizátory (PM - chybí aktivní enzym), 2. Intermediární (IM), 3. Rychlé (EM - standard), 4. Ultra-rychlé metabolizátory (UM - amplifikace genů, vysoká aktivita).",
      "Pomalí metabolizátoři (cca 7-10 % kavkazské populace) mají zvýšené riziko nežádoucích účinků standardních dávek (např. metoprololu).",
      "Inhibitory CYP2D6 (např. paroxetin, fluoxetin, chinidin) mohou zablokovat metabolismus jeho substrátů."
    ],
    "dynamics": [
      "Aktivuje proléčivo kodein na morfin. Pomalí metabolizátoři z kodeinu nemají žádnou úlevu od bolesti (netvoří morfin).",
      "Ultra-rychlí metabolizátoři (až 10 % v některých afrických/arabských populacích) tvoří z kodeinu morfin extrémně rychle, což vede k intoxikaci (dechové depresi) i po standardních dávkách.",
      "Aktivuje tamoxifen na endoxifen (aktivní metabolit u karcinomu prsu)."
    ],
    "clinical": [
      "U dětí je užívání kodeinu kontraindikováno po tonzilektomii/adenoidotomii z důvodu rizika fatální dechové deprese u ultra-rychlých metabolizátorů.",
      "Při kombinaci metoprololu s paroxetinem (inhibitor CYP2D6) stoupá riziko těžké bradykardie.",
      "Farmakogenetické testování CYP2D6 pomáhá personalizovat dávkování antidepresiv (tricyklických)."
    ],
    "pearl": "Kodein je v pediatrii přísně kontraindikován pro léčbu bolesti a kašle. Pokud je dítě ultra-rychlým metabolizátorem CYP2D6, i malá dávka kodeinu se v jeho játrech okamžitě přemění na toxické množství morfinu, což vedlo k několika zdokumentovaným úmrtím dětí na zástavu dechu ve spánku!",
    "tableData": [
      {
        "name": "Podíl pomalých metabolizátorů CYP2D6 v ČR",
        "value": "cca 7 - 8 %"
      },
      {
        "name": "Léčivo aktivované přes CYP2D6",
        "value": "Kodein (na morfin)"
      },
      {
        "name": "Silný inhibitor CYP2D6 (antidepresivum)",
        "value": "Fluoxetin / Paroxetin"
      }
    ],
    "quiz": [
      {
        "question": "Proč nemá podání kodeinu (proléčiva) žádný analgetický účinek u pacienta, který je pomalým metabolizátorem (PM) CYP2D6?",
        "options": [
          "Protože se kodein nevstřebá ze střeva",
          "Jeho játra nedokážou přeměnit kodein na účinný morfin, který je zodpovědný za analgezii",
          "Kodein u těchto pacientů okamžitě krystalizuje v ledvinách",
          "Pomalí metabolizátoři mají zablokované opioidní receptory"
        ],
        "correct": 1,
        "explanations": [
          "Nesprávně. Absorpce kodeinu je normální.",
          "Správně! Kodein má sám o sobě velmi nízkou afinitu k mu-opioidním receptorům. Analgetický efekt závisí na jeho o-demetylaci na morfin enzymem CYP2D6. Pomalí metabolizátoři tento enzym nemají funkční.",
          "Nesprávně. Kodein v ledvinách neprecipituje.",
          "Nesprávně. Opioidní receptory jsou u těchto pacientů v pořádku, chybí však ligand (morfin)."
        ]
      },
      {
        "question": "Jaké nebezpečí hrozí ultra-rychlému metabolizátorovi (UM) CYP2D6 při užití standardní dávky kodeinu?",
        "options": [
          "Lék nebude vůbec účinkovat",
          "Hrozí rychlá přeměna kodeinu na vysoké množství morfinu a rozvoj těžké intoxikace opioidy (útlum dýchání, mióza, koma)",
          "Způsobí to těžké poškození jaterních buněk",
          "Způsobí to kožní alergickou reakci typu I"
        ],
        "correct": 1,
        "explanations": [
          "Nesprávně. Účinek bude naopak extrémně silný a nebezpečný.",
          "Správně! Ultra-rychlí metabolizátoři mají duplikovaný gen pro CYP2D6, enzym pracuje nadměrně a bleskově saturuje oběh morfinem.",
          "Nesprávně. Morfin není přímo hepatotoxický, poškozuje CNS a tlumí dech.",
          "Nesprávně. Nejedná se o imunopatologickou reakci na antigen, ale o toxické předávkování metabolitem."
        ]
      },
      {
        "question": "Které z následujících léčiv je silným inhibitorem CYP2D6 a může způsobit interakci s metoprololem?",
        "options": [
          "Paroxetin (SSRI antidepresivum)",
          "Rifampicin",
          "Aktivní uhlí",
          "Diazepam"
        ],
        "correct": 0,
        "explanations": [
          "Správně! Paroxetin a fluoxetin jsou silné inhibitory CYP2D6. Blokují metabolismus metoprololu, což vede k jeho hromadění a riziku těžké bradykardie a hypotenze.",
          "Nesprávně. Rifampicin je induktor, nikoliv inhibitor, a působí hlavně na CYP3A4.",
          "Nesprávně. Aktivní uhlí působí pouze v lumen střeva adsorpcí, neovlivňuje enzymy v játrech.",
          "Nesprávně. Diazepam se metabolizuje přes CYP2C19 a CYP3A4 a nemá vliv na aktivitu CYP2D6."
        ]
      }
    ]
  },
  "pharm-35": {
    "definition": "Cytochrom P450 1A2 (CYP1A2) je jaterní enzym metabolizující kofein, theofylin (bronchodilatans), některá antipsychotika (clozapin, olanzapin) a melatonin. Je významný svou citlivostí k indukci látkami z cigaretového kouře.",
    "kinetics": [
      "Polycyklické aromatické uhlovodíky (PAH) v tabákovém kouři jsou silnými induktory CYP1A2 přes arylhydrokarbonový receptor (AhR).",
      "Kuřáci metabolizují theofylin a clozapin podstatně rychleji než nekuřáci, což vyžaduje vyšší dávkování.",
      "Inhibitory CYP1A2 (zejména ciprofloxacin - fluoroquinolon) blokují metabolismus theofylinu, což vyvolává toxické reakce."
    ],
    "dynamics": [
      "Substrát kofein se přes CYP1A2 demetyluje na paraxanthin. Inhibice enzymu (např. ciprofloxacinem) prodlužuje účinek kofeinu (bušení srdce, nespavost).",
      "Theofylin má úzké terapeutické okno (10-20 mg/l). Jeho akumulace vyvolává arytmie, zvracení a křeče.",
      "Biotransformuje některé prokarcinogeny (např. heterocyklické aminy z pečeného masa) na aktivní karcinogeny."
    ],
    "clinical": [
      "Při náhlém vysazení kouření (např. při hospitalizaci) u pacienta na clozapinu (antipsychotikum) dochází k de-indukci CYP1A2. Hladina clozapinu v krvi stoupá a hrozí toxicita (útlum, křeče, agranulocytóza).",
      "Kombinace ciprofloxacinu s theofylinem je nebezpečná; vyžaduje snížení dávky theofylinu a monitoraci TDM.",
      "Novorozenci mají velmi nízkou aktivitu CYP1A2, poločas kofeinu je u nich extrémně dlouhý (až 80 hodin)."
    ],
    "pearl": "Tabákový kouř indukuje CYP1A2, nikoli samotný nikotin! Proto u pacientů, kteří přejdou z cigaret na nikotinové náplasti či elektronické cigarety, dochází k poklesu indukce (clearance klesá a hladiny léků jako clozapin či olanzapin v plazmě stoupají) stejně jako u úplných nekuřáků!",
    "tableData": [
      {
        "name": "Poločas kofeinu u dospělých (norma)",
        "value": "3 - 5 hodin"
      },
      {
        "name": "Poločas kofeinu u novorozenců (nedostatek CYP1A2)",
        "value": "až 80 hodin"
      },
      {
        "name": "Léčivo s rizikem toxicity při vysazení kouření",
        "value": "Clozapin / Olanzapin"
      }
    ],
    "quiz": [
      {
        "question": "Jak ovlivňuje kouření cigaret metabolismus antipsychotik clozapinu a olanzapinu?",
        "options": [
          "Kouření blokuje jejich vstřebávání v plicích",
          "Polycyklické aromatické uhlovodíky v kouři indukují enzym CYP1A2, což zrychluje metabolismus těchto léků a snižuje jejich plazmatickou hladinu u kuřáků (vyžadují vyšší dávky)",
          "Kouření způsobuje okamžité sražení antipsychotik v plazmě",
          "Kouření nemá na tyto léky žádný vliv"
        ],
        "correct": 1,
        "explanations": [
          "Nesprávně. Antipsychotika se polykají, plíce neovlivňují absorpci.",
          "Správně! Kuřáci potřebují k dosažení terapeutické hladiny clozapinu často o 50 % vyšší dávku než nekuřáci. Při zanechání kouření je nutné dávku redukovat.",
          "Nesprávně. K chemickému srážení v krvi nedochází.",
          "Nesprávně. Interakce přes CYP1A2 je jednou z nejznámějších klinických interakcí s životním stylem."
        ]
      },
      {
        "question": "Které antibiotikum je silným inhibitorem CYP1A2 a může způsobit intoxikaci theofylinem?",
        "options": [
          "Amoxicilin",
          "Ciprofloxacin",
          "Penicilin G",
          "Metronidazol"
        ],
        "correct": 1,
        "explanations": [
          "Nesprávně. Amoxicilin neinteraguje s enzymy CYP450.",
          "Správně! Ciprofloxacin (fluoroquinolon) blokuje aktivitu CYP1A2. Společné podání s theofylinem může zvýšit AUC theofylinu na dvojnásobek a vyvolat život ohrožující toxicitu.",
          "Nesprávně. Peniciliny jsou vylučovány převážně glomerulární filtrací a tubulární sekrecí bez interakce s CYP.",
          "Nesprávně. Metronidazol inhibuje spíše CYP2C9, vliv na CYP1A2 je zanedbatelný."
        ]
      },
      {
        "question": "Co se stane s poločasem kofeinu u novorozence ve srovnání s dospělým?",
        "options": [
          "Poločas je u novorozence extrémně zkrácen na 10 minut",
          "Poločas je výrazně prodloužen (až na 80-100 hodin) z důvodu nezralosti enzymu CYP1A2 v dětských játrech",
          "Poločas je naprosto stejný",
          "Novorozenci kofein nemetabolizují vůbec a ten se vylučuje kůží"
        ],
        "correct": 1,
        "explanations": [
          "Nesprávně. Zkrácení nenastává, clearance je u novorozence velmi nízká.",
          "Správně! Novorozenci mají minimální expresi CYP1A2. Kofein (užívaný např. k léčbě apnoe nedonošených) se proto eliminuje velmi pomalu, což vyžaduje specifická dávkovací schémata.",
          "Nesprávně. Dětská játra zrají postupně, parametry se shodovat nemohou.",
          "Nesprávně. Kofein se metabolizuje pomalu v játrech a vylučuje se ledvinami, exkrece kůží je zanedbatelná."
        ]
      }
    ]
  },
  "pharm-36": {
    "definition": "Cytochromy P450 2C9 a 2C19 (CYP2C9, CYP2C19) jsou významné jaterní enzymy. CYP2C9 metabolizuje kyselá léčiva s úzkým terapeutickým indexem (S-warfarin, fenytoin). CYP2C19 metabolizuje clopidogrel (aktivace), inhibitory protonové pumpy (PPI) a diazepam.",
    "kinetics": [
      "Polymorfismus CYP2C9: mutace ($*2$ a $*3$) snižují aktivitu enzymu. Nositelé těchto alel metabolizují S-warfarin pomalu a vyžadují výrazně nižší dávky k zamezení krvácení.",
      "Polymorfismus CYP2C19: cca 2-5 % kavkazské populace a až 20 % asijské populace jsou pomalí metabolizátoři (PM) CYP2C19. Netvoří dostatek aktivního metabolitu clopidogrelu.",
      "Inhibitory CYP2C19 (např. omeprazol) blokují aktivaci clopidogrelu, což snižuje jeho antiagregační účinek."
    ],
    "dynamics": [
      "S-warfarin (substrát CYP2C9) je 5x účinnější než R-warfarin. Blokáda CYP2C9 stravou (amiodaron, metronidazol) okamžitě prodlužuje INR.",
      "Clopidogrel je proléčivo aktivované přes CYP2C19. U pomalých metabolizátorů nedochází k dostatečné inhibici destiček, což zvyšuje riziko trombózy ve stentech.",
      "PPI (např. omeprazol, esomeprazol) jsou substráty i inhibitory CYP2C19. Pantoprazol má nejmenší afinitu k CYP2C19 a je bezpečnější pro kombinaci."
    ],
    "clinical": [
      "Při zahájení léčby warfarinem je u pacientů s polymorfismem CYP2C9 (alely *2/*3) vysoké riziko předávkování a krvácení v prvních dnech (PGx-guided dosing).",
      "Kombinace clopidogrelu s omeprazolem se nedoporučuje z důvodu ztráty antiagregačního účinku clopidogrelu. Bezpečnější alternativou je pantoprazol nebo přechod na prasugrel/ticagrelor (nezávislé na CYP2C19).",
      "TDM fenytoinu (substrát CYP2C9) je nutné kvůli nelineární kinetice; nasycení enzymu vede k prudkému vzestupu toxicity."
    ],
    "pearl": "Užívání omeprazolu společně s antiagreganciem clopidogrelem zvyšuje riziko kardiovaskulárních příhod (např. restenózy stentu). Omeprazol kompetitivně inhibuje CYP2C19, který je nezbytný pro přeměnu clopidogrelu na jeho aktivní formu. Pokud pacient potřebuje PPI, předepište pantoprazol, který CYP2C19 neinhibuje!",
    "tableData": [
      {
        "name": "Hlavní enzym metabolizující S-warfarin",
        "value": "CYP2C9"
      },
      {
        "name": "Podíl pomalých metabolizátorů CYP2C19 v Asii",
        "value": "až 20 %"
      },
      {
        "name": "PPI s nejnižším rizikem interakce s clopidogrelem",
        "value": "Pantoprazol"
      }
    ],
    "quiz": [
      {
        "question": "Proč vyžadují pacienti s genetickými variantami CYP2C9*2 nebo CYP2C9*3 výrazně nižší udržovací dávky warfarinu?",
        "options": [
          "Protože tyto varianty zvyšují srážlivost krve přímo",
          "Tyto varianty kódují enzym se sníženou aktivitou, což zpomaluje clearance účinnějšího S-warfarinu a zvyšuje riziko krvácení při standardních dávkách",
          "Tyto varianty způsobují zrychlené vylučování warfarinu ledvinami",
          "Warfarin u nich neúčinkuje vůbec"
        ],
        "correct": 1,
        "explanations": [
          "Nesprávně. Polymorfismus nemění koagulační kaskádu, ale metabolismus farmaka.",
          "Správně! Pacienti s těmito alelami (tzv. poor metabolizers) mají snížený jaterní clearance warfarinu. Standardní úvodní dávka u nich vyvolá extrémní prodloužení INR a krvácivé komplikace.",
          "Nesprávně. Eliminace ledvinami je minimální, dominantní je jaterní metabolismus.",
          "Nesprávně. Účinek je naopak silnější a hůře kontrolovatelný."
        ]
      },
      {
        "question": "Jaký klinický problém nastává u pacienta, který je pomalým metabolizátorem CYP2C19, při léčbě clopidogrelem po implantaci koronárního stentu?",
        "options": [
          "Lék u něj vyvolá těžké poškození žaludku",
          "Clopidogrel (proléčivo) se dostatečně neaktivuje, což vede k selhání protidestičkového účinku a vysokému riziku trombózy stentu a infarktu myokardu",
          "Dojde k okamžitému krvácení z dásní",
          "Lék se přemění na aspirin"
        ],
        "correct": 1,
        "explanations": [
          "Nesprávně. Aktivace v játrech nezvyšuje lokální žaludeční toxicitu.",
          "Správně! Bez aktivního metabolitu clopidogrel neblokuje ADP receptory P2Y12 na destičkách. Tito pacienti by měli dostat jiná antiagregancia (např. prasugrel, ticagrelor).",
          "Nesprávně. Krvácení hrozí spíše při předávkování, u PM je účinek nízký.",
          "Nesprávně. Enzymy nemohou změnit chemickou strukturu na jinou molekulu."
        ]
      },
      {
        "question": "Který inhibitor protonové pumpy (PPI) vykazuje nejnižší riziko interakce s clopidogrelem?",
        "options": [
          "Omeprazol",
          "Esomeprazol",
          "Pantoprazol",
          "Všechny mají naprosto stejné riziko"
        ],
        "correct": 2,
        "explanations": [
          "Nesprávně. Omeprazol je silný inhibitor CYP2C19 a interakce je u něj nejvyjádřenější.",
          "Nesprávně. Esomeprazol je S-izomer omeprazolu a sdílí stejný inhibiční profil vůči CYP2C19.",
          "Správně! Pantoprazol se metabolizuje odlišnými drahami (hlavně sulfatací) a má minimální afinitu k CYP2C19, proto je doporučován jako bezpečnější alternativa při antiagregační léčbě.",
          "Nesprávně. Rozdíly mezi PPI v inhibici CYP2C19 jsou klinicky významné a popsané v SPC."
        ]
      }
    ]
  },
  "pharm-37": {
    "definition": "Význam TDM (Terapeutického monitorování léčiv) spočívá v optimalizaci terapeutického režimu pacienta měřením koncentrací léčiv v krvi k zajištění maximální účinnosti a minimální toxicity.",
    "kinetics": [
      "TDM zohledňuje individuální farmakokinetické parametry pacienta (renální a hepatální funkce, věk, genetické odchylky).",
      "Měřená hladina pomáhá spočítat skutečnou clearance ($Cl = Dávka / AUC$) a upravit dávkování na míru.",
      "Měření se provádí v ustáleném stavu (steady state), kdy se rychlost přívodu rovná rychlosti eliminace."
    ],
    "dynamics": [
      "TDM je indikováno u léčiv, kde koncentrace v krvi koreluje s klinickým účinkem lépe než samotná dávka.",
      "Předchází závažným orgánovým toxicitám (např. nefrotoxicita vankomycinu, neurotoxicita lithia, arytmie digoxinu).",
      "Pomáhá odlišit non-compliance (pacient lék nebere) od terapeutické rezistence (pacient na lék neodpovídá)."
    ],
    "clinical": [
      "Indikace pro TDM: 1. Úzký terapeutický index, 2. Vysoká interindividuální variabilita, 3. Chybějící snadno měřitelný klinický biomarker (např. tlak u antihypertenziv), 4. Závažné stavy (JIP, sepse).",
      "U dětí je TDM klíčové kvůli rychlým změnám clearance v závislosti na věku a růstu.",
      "U starších lidí pomáhá TDM předcházet kumulaci léků při tichém renálním selhání."
    ],
    "pearl": "TDM se nepoužívá u léčiv, která mají snadno měřitelný klinický nebo laboratorní parametr účinku. Například u antihypertenziv měříme krevní tlak, u antikoagulancií INR (warfarin) nebo aPTT (heparin), u antidiabetik glykémii a glykovaný hemoglobin. Měření hladin těchto léků v krvi nemá žádný klinický přínos!",
    "tableData": [
      {
        "name": "Hlavní indikace TDM (Terapeutický index)",
        "value": "úzké terapeutické okno"
      },
      {
        "name": "Stabilní hladina k odběru (Steady State)",
        "value": "po 4 - 5 poločasech"
      },
      {
        "name": "Příklad léku, kde TDM NENÍ potřeba",
        "value": "Warfarin (měří se INR)"
      }
    ],
    "quiz": [
      {
        "question": "Pro které z následujících léčiv je měření hladiny v plazmě (TDM) zbytečné a neprovádí se?",
        "options": [
          "Gentamicin",
          "Metoprolol (beta-blokátor pro hypertenzi)",
          "Lithium",
          "Vankomycin"
        ],
        "correct": 1,
        "explanations": [
          "Nesprávně. Gentamicin má vysokou toxicitu a úzké okno, TDM vyžaduje.",
          "Správně! U metoprololu (a antihypertenziv obecně) sledujeme přímo klinický efekt - snížení krevního tlaku a srdeční frekvence. Měření koncentrace metoprololu v krvi nemá klinické opodstatnění.",
          "Nesprávně. Lithium má extrémně úzké okno (toxicita stoupá nad 1.2 mmol/l), TDM je u něj nezbytné.",
          "Nesprávně. Vankomycin vyžaduje TDM k zabránění nefrotoxicity a zajištění účinku."
        ]
      },
      {
        "question": "V jaké fázi léčby se standardně provádí odběr krve pro TDM k úpravě udržovací dávky?",
        "options": [
          "Ihned po podání první dávky",
          "Po dosažení ustáleného stavu (steady state), což odpovídá 4-5 biologickým poločasům léčiva",
          "Pouze při rozvoji šokového stavu",
          "Přesně 24 hodin po propuštění z nemocnice"
        ],
        "correct": 1,
        "explanations": [
          "Nesprávně. Po 1. dávce hladiny neodrážejí dlouhodobou akumulaci v těle.",
          "Správně! V ustáleném stavu (steady state) jsou koncentrace stabilní a odrážejí rovnováhu mezi dávkováním a eliminací. Odběr dříve by podhodnotil skutečnou expozici.",
          "Nesprávně. V šoku se TDM provádí urgentně, ale standardní nastavení dávky vyžaduje odběr ve steady state.",
          "Nesprávně. Čas propuštění nesouvisí s farmakokinetickými zákonitostmi akumulace."
        ]
      },
      {
        "question": "Která z následujících situací je přímou indikací k provedení TDM?",
        "options": [
          "Léčba běžného nachlazení paracetamolem",
          "Podezření na non-compliance (pacient neužívá předepsaný lék s úzkým terapeutickým indexem)",
          "Užívání vitamínu C",
          "Aplikace očních kapek s lokálním antiseptikem"
        ],
        "correct": 1,
        "explanations": [
          "Nesprávně. Paracetamol u nachlazení má široké bezpečné rozpětí.",
          "Správně! Pokud pacient nereaguje na léčbu (např. antiepileptiky) a hladina v krvi je nulová nebo extrémně nízká, prokáže se tím non-compliance před tím, než lékař zbytečně zvýší dávku.",
          "Nesprávně. Vitamíny nepodléhají TDM.",
          "Nesprávně. Lokální oční kapky se nevstřebávají v množství vyžadujícím systémové TDM."
        ]
      }
    ]
  },
  "pharm-38": {
    "definition": "Základní předpoklady pro TDM léčiv definují podmínky, za kterých má měření koncentrací v krvi smysl a přináší klinický prospěch pro management pacienta.",
    "kinetics": [
      "Předpoklad 1: Existuje jasný vztah mezi koncentrací léčiva v plazmě a jeho klinickým/toxickým účinkem.",
      "Předpoklad 2: Existuje vysoká interindividuální (mezi lidmi) variabilita ve farmakokinetických parametrech ($V_d$, clearance).",
      "Poločas léčiva musí být takový, aby umožňoval praktické načasování odběru."
    ],
    "dynamics": [
      "Předpoklad 3: Terapeutický index je úzký (malý rozdíl mezi účinnou a toxickou hladinou).",
      "Předpoklad 4: Účinek léčiva nelze snadno monitorovat jiným přímým klinickým parametrem (např. koagulace, krevní tlak).",
      "Dostupnost validované a rychlé laboratorní analytické metody (např. imunoanalýza, chromatografie)."
    ],
    "clinical": [
      "Pokud by neexistoval vztah mezi koncentrací a efektem (např. ireversibilní inhibitory jako aspirin), měření hladiny by nemělo smysl.",
      "U dětí je variabilita clearance velmi vysoká, což splňuje předpoklad pro nutnost TDM.",
      "U kriticky nemocných v sepsi se rychle mění distribuční objem a funkce ledvin, což mění kinetiku a vyžaduje okamžité TDM."
    ],
    "pearl": "Pro provádění TDM musí být k dispozici definované referenční (terapeutické) rozmezí koncentrací. Pokud laboratoř naměří hodnotu, ale klinické studie neurčily, jaká hladina je účinná a jaká toxická, je výsledek pro klinické rozhodování lékaře nepoužitelný!",
    "tableData": [
      {
        "name": "Předpoklad vazby účinku",
        "value": "koncentrace v plazmě koreluje s efektem"
      },
      {
        "name": "Nutný farmakokinetický rys",
        "value": "vysoká variabilita clearance mezi pacienty"
      },
      {
        "name": "Požadavek na laboratoř",
        "value": "rychlá a přesná analytická metoda (do hodin)"
      }
    ],
    "quiz": [
      {
        "question": "Který z následujících bodů je ZÁKLADNÍM předpokladem pro smysluplné provádění TDM?",
        "options": [
          "Léčivo se musí vylučovat výhradně stolicí",
          "Mezi koncentrací léčiva v plazmě a jeho terapeutickým či toxickým účinkem existuje jasně prokázaný vztah (korelace)",
          "Lék se musí podávat pouze v inhalační formě",
          "Lék nesmí mít žádné nežádoucí účinky"
        ],
        "correct": 1,
        "explanations": [
          "Nesprávně. Cesta vylučování není limitujícím předpokladem.",
          "Správně! Pokud by koncentrace v krvi neodrážela koncentraci u receptorů a velikost účinku, měření hladin by lékaři neposkytlo žádnou informaci pro úpravu dávky.",
          "Nesprávně. Inhalační léky naopak TDM vyžadují zřídka, protože působí lokálně.",
          "Nesprávně. Kdyby lék neměl nežádoucí účinky, nebylo by potřeba hlídat horní hranici toxicity."
        ]
      },
      {
        "question": "Proč se TDM neprovádí u tzv. 'hit-and-run' léčiv (léčiv, která se ireversibilně vážou na cíl, např. aspirin blokující destičky)?",
        "options": [
          "Protože se tato léčiva nevstřebávají",
          "Účinek přetrvává dlouho poté, co léčivo kompletně vymizelo z plazmy; plazmatická koncentrace proto neodráží aktuální farmakodynamický stav",
          "Tato léčiva jsou příliš levná",
          "Mají extrémně dlouhý poločas v krvi"
        ],
        "correct": 1,
        "explanations": [
          "Nesprávně. Aspirin se vstřebává rychle a kompletně.",
          "Správně! Aspirin kovalentně a ireversibilně acetyluje COX-1 v destičkách na celou dobu jejich života (7-10 dní). Hladina aspirinu v plazmě klesne k nule za hodinu, ale účinek trvá týden. TDM je proto bezpředmětné.",
          "Nesprávně. Cena léčiva neovlivňuje biologické předpoklady pro TDM.",
          "Nesprávně. Naopak mají v plazmě velmi krátký poločas (aspirin cca 20 minut)."
        ]
      },
      {
        "question": "Co z následujícího brání rutinnímu provádění TDM u nového léčiva?",
        "options": [
          "Příliš modrá barva tablet",
          "Absence definovaného terapeutického rozmezí plazmatických koncentrací a chybějící rychlá analytická metoda v laboratoři",
          "Podávání léku nalačno",
          "Vysoká rozpustnost ve vodě"
        ],
        "correct": 1,
        "explanations": [
          "Nesprávně. Barva tablety nemá vliv na laboratorní analýzu.",
          "Správně! Bez znalosti mezí (co je málo a co už je moc) nelze výsledek interpretovat. Laboratoř musí být schopna dodat výsledek rychle (např. před podáním další dávky).",
          "Nesprávně. Doba jídla ovlivňuje absorpci, ale ne proveditelnost TDM.",
          "Nesprávně. Hydrofilita usnadňuje stanovení v plazmě."
        ]
      }
    ]
  },
  "pharm-39": {
    "definition": "Digoxin je kardiotonikum (srdeční glykosid) s úzkým terapeutickým indexem užívaný k léčbě chronického srdečního selhání a ke kontrole komorové frekvence u fibrilace síní.",
    "kinetics": [
      "Vykazuje velmi velký distribuční objem ($V_d \\approx 5-7\\,L/kg$) kvůli masivní vazbě v kosterním svalstvu a myokardu. Není přítomen v tuku.",
      "Distribuce do tkání je pomalá (distribuční fáze trvá 6-8 hodin).",
      "Eliminuje se převážně ledvinami v nezměněné formě (cca 70-80 %); poločas je dlouhý (cca 36-48 hodin při normálních funkcích ledvin)."
    ],
    "dynamics": [
      "Mechanismus: selektivní inhibice Na+/K+ ATPázy. To vede k nárůstu intracelulárního sodíku, což zpomalí Na+/Ca2+ výměník a zvýší koncentraci vápníku v buňce (pozitivní inotropie).",
      "Zvyšuje tonus vagus (negativní chronotropie a dromotropie - zpomalení převodu AV uzlem).",
      "Toxické účinky: arytmie (extrasystoly, AV blokády), nauzea, zvracení, barevné žlutozelené vidění (xanthopsie)."
    ],
    "clinical": [
      "Odběr pro TDM se musí provést nejméně 6 až 8 hodin (lépe > 12h) po podání poslední dávky, aby byla ukončena distribuční fáze.",
      "Cílová terapeutická koncentrace: 0.5 - 0.9 ug/l (ng/ml) u srdečního selhání. Hladiny nad 1.2-1.5 ug/l jsou rizikové.",
      "Toxicity digoxinu výrazně napomáhá hypokalémie, hypomagnezémie a hyperkalcémie (draslík kompetuje s digoxinem o vazbu na Na+/K+ ATPázu)."
    ],
    "pearl": "Hypokalémie dramaticky zvyšuje toxicitu digoxinu, a to i při zcela 'normálních' plazmatických hladinách digoxinu! Draslík soutěží s digoxinem o vazebné místo na Na+/K+ ATPáze. Snížená hladina draslíku v séru uvolní vazebná místa pro digoxin, což vede k jeho nadměrné vazbě a toxicitě. Vždy kontrolujte kalémii!",
    "tableData": [
      {
        "name": "Terapeutické rozmezí (srdeční selhání)",
        "value": "0.5 - 0.9 ug/l (ng/ml)"
      },
      {
        "name": "Čas odběru krve po podání dávky",
        "value": "minimálně 6 - 8 hodin"
      },
      {
        "name": "Poločas eliminace digoxinu (norma)",
        "value": "36 - 48 hodin"
      }
    ],
    "quiz": [
      {
        "question": "Proč se krev pro stanovení hladiny digoxinu (TDM) nesmí odebírat dříve než za 6-8 hodin po podání dávky?",
        "options": [
          "Digoxin se v krvi dříve vůbec neobjeví",
          "Léčivo vykazuje dlouhou distribuční fázi; odběr během prvních hodin by zachytil falešně vysokou hladinu v plazmě před tím, než se lék stihne rozdistribuovat do svalů a srdce",
          "Dříve odebraná krev by se v laboratoři srazila",
          "Digoxin se dříve odbourává v plících"
        ],
        "correct": 1,
        "explanations": [
          "Nesprávně. Peak v plazmě nastává za 1-3 hodiny, lék v krvi přítomen je.",
          "Správně! Distribuce digoxinu trvá dlouho. Pro interpretaci výsledku je nutné měřit hladinu po ustavení rovnováhy mezi krví a tkáněmi (svaly), což trvá minimálně 6-8 hodin.",
          "Nesprávně. Srážlivost krve není přítomností digoxinu v prvních hodinách ovlivněna.",
          "Nesprávně. Digoxin nepodléhá plicnímu metabolismu."
        ]
      },
      {
        "question": "Která iontová dysbalance nejvíce zvyšuje riziko toxicity digoxinu (vznik arytmií), a to i při normální plazmatické hladině léku?",
        "options": [
          "Hyperkalémie (vysoký draslík)",
          "Hypokalémie (nízký draslík)",
          "Hyponatrémie (nízký sodík)",
          "Hypokalcémie (nízký vápník)"
        ],
        "correct": 1,
        "explanations": [
          "Nesprávně. Hyperkalémie účinky digoxinu spíše oslabuje (kompetice o vazbu).",
          "Správně! Při nízké koncentraci extracellularního draslíku dochází k uvolnění vazebných míst na sodíkovo-draslíkové pumpě, což usnadní vazbu digoxinu a prohloubí jeho inhibiční účinek.",
          "Nesprávně. Sodík s digoxinem přímo na receptoru nekompetuje tak významným způsobem pro klinickou toxicitu.",
          "Nesprávně. Riziko naopak zvyšuje hyperkalcémie (vápník zvyšuje inotropii a dráždivost srdce synergně s digoxinem)."
        ]
      },
      {
        "question": "Jaký je hlavní eliminační orgán digoxinu a jak se mění jeho poločas při selhání tohoto orgánu?",
        "options": [
          "Játra; poločas se nemění",
          "Ledviny; při anurii se poločas prodlužuje ze standardních 36 hodin až na 5-7 dní (hrozí masivní kumulace)",
          "Plíce; poločas se zkracuje",
          "Kůže; vylučuje se potem"
        ],
        "correct": 1,
        "explanations": [
          "Nesprávně. Játra metabolizují jen malou část (cca 15-20 %) digoxinu.",
          "Správně! Digoxin se vylučuje glomerulární filtrací a tubulární sekrecí. Při poklesu funkce ledvin dramaticky klesá clearance a lék se v těle hromadí. Dávku je nutné redukovat.",
          "Nesprávně. Plícemi se digoxin neeliminuje.",
          "Nesprávně. Exkrece potem je pro digoxin zanedbatelná."
        ]
      }
    ]
  },
  "pharm-40": {
    "definition": "Vankomycin je glykopeptidové antibiotikum s úzkým terapeutickým indexem, určené k léčbě závažných infekcí způsobených grampozitivními bakteriemi (zejména MRSA).",
    "kinetics": [
      "Po perorálním podání se prakticky nevstřebává (F ≈ 0), podává se proto výhradně v.v. infuzí (p.o. se podává pouze lokálně u Clostridioides difficile).",
      "Vazba na proteiny je střední (50-60 %); distribuce do tkání je dobrá, ale špatně prostupuje do likvoru (pokud není zánět mening).",
      "Eliminuje se výhradně ledvinami glomerulární filtrací (cca 90 %); poločas u zdravých je 6-8 hodin, při renální insuficienci se prodlužuje na dny."
    ],
    "dynamics": [
      "Inhibuje syntézu peptidoglykanu bakteriální stěny vazbou na D-alanyl-D-alaninový konec prekurzorů.",
      "Vykazuje časově závislý účinek; klíčovým prediktorem účinnosti je poměr plochy pod křivkou k minimální inhibiční koncentraci ($AUC_{24}/MIC \\ge 400-600$).",
      "Nežádoucí účinky: nefrotoxicita (zejména v kombinaci s aminoglykosidy), ototoxicity a histaminový Red Man syndrom (vyvolaný rychlou infuzí)."
    ],
    "clinical": [
      "Odběr trough (údolní) koncentrace se provádí těsně před 4. nebo 5. dávkou (dosažení steady state). Cílová hodnota: 15 - 20 mg/l u těžkých infekcí (pneumonie, sepse, osteomyelitida). Hladiny pod 10 mg/l zvyšují riziko rezistence (VISA).",
      "Moderní doporučení přecházejí z pouhého sledování trough hladin na kontinuální monitoraci AUC/MIC.",
      "U dětí je clearance vankomycinu zvýšená; vyžadují vyšší dávky na kg a kratší intervaly (např. po 6-8 hodinách)."
    ],
    "pearl": "Red Man syndrom (syndrom červeného muže - zrudnutí obličeje, krku a trupu, doprovázené hypotenzí a svěděním) není pravá IgE alergická reakce! Jedná se o přímé uvolnění histaminu z mastocytů způsobené příliš rychlou infuzí vankomycinu. Prevencí je podávání infuze pomalu (minimálně po dobu 60 minut na každých 1000 mg)!",
    "tableData": [
      {
        "name": "Cílová trough koncentrace (těžké infekce)",
        "value": "15 - 20 mg/l"
      },
      {
        "name": "Prediktor účinnosti AUC24 / MIC",
        "value": "400 - 600"
      },
      {
        "name": "Minimální doba infuze (na 1 g)",
        "value": "60 minut"
      }
    ],
    "quiz": [
      {
        "question": "Proč je nutné podávat vankomycin k léčbě systémových infekcí (např. sepse) výhradně intravenózně?",
        "options": [
          "Perorální vankomycin se z GIT prakticky nevstřebává (biodostupnost F je téměř nulová)",
          "Perorální vankomycin je toxický pro žaludek",
          "Intravenózní podání je levnější",
          "Vankomycin se v žaludku mění na penicilin"
        ],
        "correct": 0,
        "explanations": [
          "Správně! Molekula vankomycinu je příliš velká a hydrofilní, než aby prošla střevní sliznicí. Perorální podání se využívá výhradně pro lokální léčbu kolitidy způsobené *C. difficile*.",
          "Nesprávně. Není přímo žaludečně toxický, jen se nevstřebává.",
          "Nesprávně. Intravenózní podání je technicky a ekonomicky náročnější (vyžaduje sterilní roztoky, jehly, infuzní pumpy).",
          "Nesprávně. Chemická přeměna glykopeptidu na beta-laktam v žaludku není možná."
        ]
      },
      {
        "question": "Jaká je cílová minimální (trough) koncentrace vankomycinu v plazmě před další dávkou u závažných infekcí (např. pneumonie nebo endokarditida)?",
        "options": [
          "Méně než 1 mg/l",
          "15 až 20 mg/l",
          "Více než 50 mg/l",
          "Cílová hladina není definována"
        ],
        "correct": 1,
        "explanations": [
          "Nesprávně. Hladina < 1 mg/l je zcela neúčinná (subterapeutická) a vede k selekci rezistentních kmenů.",
          "Správně! Rozmezí 15-20 mg/l zajišťuje dostatečný průnik do tkání a dosažení optimálního poměru $AUC/MIC \\ge 400$ při minimalizaci rizika poškození ledvin.",
          "Nesprávně. Koncentrace nad 25-30 mg/l výrazně zvyšují riziko těžké nefrotoxicity.",
          "Nesprávně. Terapeutické rozmezí je jasně definováno mezinárodními guidelines pro TDM."
        ]
      },
      {
        "question": "Jak lze zabránit rozvoji tzv. 'Red Man' syndromu při podávání vankomycinu?",
        "options": [
          "Podat lék nalačno",
          "Výrazně zpomalit rychlost intravenózní infuze (podávat minimálně 60 minut)",
          "Aplikovat lék intramuskulárně",
          "Podat vankomycin ledově studený"
        ],
        "correct": 1,
        "explanations": [
          "Nesprávně. Jídlo neovlivňuje systémovou histaminovou reakci z i.v. infuze.",
          "Správně! Syndrom červeného muže je reakce závislá na rychlosti podání. Pomalá infuze (rychlostí max 10-15 mg/min) zabrání prudkému uvolnění histaminu z žírných buněk.",
          "Nesprávně. I.m. aplikace vankomycinu je zakázána, roztok je silně dráždivý a způsobil by svalovou nekrózu.",
          "Nesprávně. Teplota roztoku musí být blízká tělesné teplotě k zamezení dráždění cév a flebitidy."
        ]
      }
    ]
  },
  "pharm-41": {
    "definition": "Aminoglykosidy (gentamicin, amikacin, tobramycin) jsou baktericidní antibiotika s úzkým terapeutickým indexem určená k léčbě závažných gramnegativních infekcí.",
    "kinetics": [
      "Jsou silně hydrofilní, mají malý distribuční objem ($V_d \\approx 0.25\\,L/kg$, distribuují se pouze do extracelulární tekutiny).",
      "Placenta ani HEB pro ně nejsou snadno prostupné.",
      "Vylučují se výhradně ledvinami glomerulární filtrací v nezměněné formě; poločas je krátký (cca 2 hodiny u dospělých s normální funkcí ledvin)."
    ],
    "dynamics": [
      "Inhibují syntézu proteinů vazbou na 30S podjednotku bakteriálního ribozomu.",
      "Vykazují koncentračně závislý účinek (účinnost roste s poměrem $C_{max}/MIC$, cíl je $\\ge 8-10$) a výrazný postantibiotický efekt (PAE).",
      "Nežádoucí účinky: akumulují se v buňkách proximálního tubulu ledvin (nefrotoxicita) a vnitřního ucha (ototoxicita - kohleární i vestibulární, často ireversibilní)."
    ],
    "clinical": [
      "Dávkování jednou denně (extended-interval dosing, např. 5-7 mg/kg gentamicinu) využívá PAE a snižuje toxicitu (buňky ledvin se stihnou desaturovat).",
      "TDM u dávkování jednou denně: trough hladina před další dávkou musí klesnout pod 1 mg/l (gentamicin) k zamezení akumulace a toxicity.",
      "U dětí je $V_d$ na kg vyšší, vyžadují proto vyšší jednorázové dávky v mg/kg (např. 7.5 mg/kg u novorozenců)."
    ],
    "pearl": "Dávkování aminoglykosidů jednou denně (pulzní podání) je bezpečnější a účinnější než rozdělení dávky do 3 denních dávek. Vysoký vrchol (peak) zajistí silný baktericidní účinek, zatímco dlouhé období velmi nízkých koncentrací na konci intervalu umožní ledvinám vyloučit lék z tubulárních buněk, což dramaticky snižuje nefrotoxicitu!",
    "tableData": [
      {
        "name": "Cílový trough gentamicinu (prevence toxicity)",
        "value": "< 1.0 mg/l (ug/ml)"
      },
      {
        "name": "Poločas gentamicinu u dospělých",
        "value": "cca 2 hodiny"
      },
      {
        "name": "Cílový peak/MIC poměr pro účinek",
        "value": "8 - 10"
      }
    ],
    "quiz": [
      {
        "question": "Proč je režim podávání aminoglykosidů jednou denně (pulzní dávkování) méně nefrotoxický než podávání 3x denně?",
        "options": [
          "Jedna dávka denně se v játrech rychleji zmetabolizuje",
          "Vazba aminoglykosidů v ledvinách je saturovatelná. Vysoká jednorázová koncentrace nasycuje transportéry a zbytek proteče močí ven; dlouhý interval pak umožní vymytí (depleci) léku z buněk ledvin",
          "Při podání jednou denně lék neprochází ledvinami",
          "Jedna dávka má menší biologickou dostupnost"
        ],
        "correct": 1,
        "explanations": [
          "Nesprávně. Aminoglykosidy se v játrech nemetabolizují vůbec.",
          "Správně! Endocytóza aminoglykosidů do buněk proximálního tubulu (přes receptor megalin-cubilin) je saturovatelný proces. Trvalé nízké hladiny při podávání 3x denně vedou k nepřetržité akumulaci, zatímco pulzní podání dává ledvinám čas na očištění.",
          "Nesprávně. Všechny aminoglykosidy se eliminují výhradně ledvinami.",
          "Nesprávně. Po intravenózním podání (standardní cesta) je biologická dostupnost vždy 100 %."
        ]
      },
      {
        "question": "Jaká hodnota údolní (trough) koncentrace gentamicinu před další dávkou je kritická pro minimalizaci rizika ototoxicity a nefrotoxicity?",
        "options": [
          "Méně než 1.0 mg/l",
          "Přesně 10.0 mg/l",
          "Více než 20.0 mg/l",
          "Hladina trough nemá na toxicitu vliv"
        ],
        "correct": 0,
        "explanations": [
          "Správně! Hromadění ve vnitřním uchu a ledvinách je přímo úměrné expozici na konci dávkovacího intervalu. Trough < 1.0 mg/l (pro gentamicin/tobramycin) zaručuje bezpečné vymytí z tkání.",
          "Nesprávně. Trough 10 mg/l by během několika dní způsobil těžké poškození ledvin a hluchotu.",
          "Nesprávně. Hladina > 20 mg/l je v zóně extrémní toxicity.",
          "Nesprávně. Trough hladina je nejdůležitějším parametrem bezpečnosti aminoglykosidů sledovaným při TDM."
        ]
      },
      {
        "question": "Které závažné a často ireversibilní nežádoucí účinky jsou typické pro aminoglykosidy?",
        "options": [
          "Kožní exantém a sucho v ústech",
          "Nefrotoxicita (akutní poškození ledvin) a ototoxicita (poškození sluchu a rovnováhy)",
          "Hyperglykémie a osteoporóza",
          "Plicní fibróza"
        ],
        "correct": 1,
        "explanations": [
          "Nesprávně. Tyto účinky nejsou specifické pro tuto třídu a nejsou závažné.",
          "Správně! Ototoxicita postihuje vláskové buňky v hlemýždi (ztráta sluchu pro vysoké frekvence) a vestibulární aparát (ataxie, závratě). Nefrotoxicita se projevuje proteinurií a poklesem GFR.",
          "Nesprávně. Aminoglykosidy neovlivňují glukózu ani kostní metabolismus.",
          "Nesprávně. Plicní fibrózu vyvolává např. amiodaron nebo bleomycin, nikoliv aminoglykosidy."
        ]
      }
    ]
  },
  "pharm-42": {
    "definition": "Teofylin (methylxantin) je bronchodilatační a protizánětlivé léčivo s úzkým terapeutickým indexem, užívané k doplňkové léčbě těžkého astmatu a CHOPN.",
    "kinetics": [
      "Absorpce po p.o. podání je rychlá a úplná (F ≈ 1), u retardovaných forem pozvolná.",
      "Metabolizuje se v játrech převážně přes CYP1A2 (cca 90 %); clearance vykazuje vysokou interindividuální variabilitu.",
      "Poločas eliminace je u zdravých nekuřáků cca 8 hodin. U kuřáků je zkrácen na 4-5 hodin kvůli indukci CYP1A2. U cirhotiků a při srdečním selhání je prodloužen na 20-30 hodin."
    ],
    "dynamics": [
      "Mechanismus: neselektivní inhibice fosfodiesteráz (PDE3 a PDE4), což zvyšuje intracelulární cAMP a vyvolává relaxaci hladké svaloviny průdušek.",
      "Antagonizuje adenosinové receptory (může vyvolat tachykardii a stimulaci CNS).",
      "Terapeutické rozmezí: 10 - 20 mg/l (nebo 5-15 mg/l pro vyšší bezpečnost). Toxicita nad 20 mg/l se projevuje těžkou nauzeou, zvracením, arytmiemi (supraventrikulární tachykardie) a epileptickými křečemi."
    ],
    "clinical": [
      "TDM theofylinu je indikováno při neúčinnosti, podezření na toxicitu nebo při změně kuřáckých návyků pacienta.",
      "Kofein a ciprofloxacin (inhibitory) významně zvyšují plazmatické hladiny theofylinu.",
      "U dětí je clearance theofylinu zvýšená (hypermetabolismus), vyžadují vyšší dávky na kg než dospělí."
    ],
    "pearl": "U kuřáků s CHOPN, kteří jsou hospitalizováni pro exacerbaci a přestanou v nemocnici kouřit, dochází k rychlému poklesu clearance theofylinu (de-indukci CYP1A2). Pokud se dávka theofylinu včas nesníží, hrozí rozvoj těžké intoxikace s maligními arytmiemi a křečemi!",
    "tableData": [
      {
        "name": "Standardní terapeutické rozmezí theofylinu",
        "value": "10 - 20 mg/l (ug/ml)"
      },
      {
        "name": "Poločas eliminace u kuřáků (zkrácení)",
        "value": "4 - 5 hodin"
      },
      {
        "name": "Poločas eliminace u nekuřáků",
        "value": "cca 8 hodin"
      }
    ],
    "quiz": [
      {
        "question": "Jak ovlivňuje kouření cigaret clearance a dávkování theofylinu?",
        "options": [
          "Kouření metabolismus theofylinu zpomaluje, kuřáci vyžadují nižší dávky",
          "Látky v tabákovém kouři indukují jaterní CYP1A2, což výrazně zrychluje clearance theofylinu; kuřáci proto vyžadují vyšší dávky (často až o 50-80 %) k dosažení účinku",
          "Kouření zabraňuje vylučování theofylinu močí",
          "Účinek se nemění"
        ],
        "correct": 1,
        "explanations": [
          "Nesprávně. Kouření clearance naopak výrazně zrychluje.",
          "Správně! Indukce CYP1A2 u kuřáků zkracuje poločas theofylinu. Při zanechání kouření (např. při hospitalizaci) stoupá riziko intoxikace, pokud se dávka neupraví.",
          "Nesprávně. Renální exkrece theofylinu je minoritní (cca 10 %), hlavní je jaterní metabolismus.",
          "Nesprávně. Vliv kouření na theofylin je klasickou a klinicky vysoce významnou interakcí."
        ]
      },
      {
        "question": "Jaké závažné příznaky doprovázejí předávkování (intoxikaci) theofylinem při překročení koncentrace 20-25 mg/l?",
        "options": [
          "Těžká zácpa a bradykardie",
          "Úporné zvracení, srdeční arytmie (tachykardie, fibrilace síní) a epileptické křeče refrakterní na léčbu",
          "Ztráta sluchu",
          "Modré zbarvení kůže"
        ],
        "correct": 1,
        "explanations": [
          "Nesprávně. Theofylin stimuluje GIT (vyvolává zvracení/průjem) a srdce (vyvolává tachykardii).",
          "Správně! Nadměrná stimulace beta-receptorů a blokáda adenosinu vyvolává kardiální excitaci a neurotoxicitu (křeče vyvolané stimulací CNS). Zvracení je často prvním varovným signálem.",
          "Nesprávně. Ototoxicita je typická pro aminoglykosidy, theofylin sluch nepoškozuje.",
          "Nesprávně. Cyanóza může nastat druhotně při zástavě dechu, ale nejedná se o přímý barevný efekt léku."
        ]
      },
      {
        "question": "Který z následujících léků je kontraindikován (nebo vyžaduje extrémní opatrnost) u pacientů užívajících theofylin z důvodu inhibice CYP1A2?",
        "options": [
          "Paracetamol",
          "Ciprofloxacin (fluoroquinolonové antibiotikum)",
          "Ibuprofen",
          "Metoprolol"
        ],
        "correct": 1,
        "explanations": [
          "Nesprávně. Paracetamol neinhibuje CYP1A2.",
          "Správně! Ciprofloxacin je silný inhibitor CYP1A2. Společné podání může zablokovat clearance theofylinu a vyvolat život ohrožující arytmie.",
          "Nesprávně. Ibuprofen nemá vliv na metabolismus theofylinu.",
          "Nesprávně. Metoprolol je sám substrátem CYP2D6, CYP1A2 neinhibuje."
        ]
      }
    ]
  },
  "pharm-43": {
    "definition": "TDM antiepileptik (např. fenytoinu, karbamazepinu, kyseliny valproové, levetiracetamu) se provádí k individualizaci léčby, kontrole compliance a minimalizaci neurotoxicity.",
    "kinetics": [
      "Fenytoin vykazuje nelineární kinetiku (saturace metabolismu CYP2C9 v terapeutickém rozmezí). Malé zvýšení dávky může vést k obrovskému vzestupu plazmatické hladiny.",
      "Karbamazepin je známý svou schopností autoindukce (indukuje svůj vlastní metabolismus přes CYP3A4); poločas se po 2-3 týdnech léčby zkracuje z 35 na 15 hodin.",
      "Valproát vykazuje vysokou vazbu na proteiny (90 %), která je však saturovatelná; při vyšších koncentracích stoupá volná (aktivní) frakce."
    ],
    "dynamics": [
      "Blokují napěťově řízené sodíkové kanály (fenytoin, karbamazepin) nebo zvyšují GABAergní transmisi (valproát).",
      "Nežádoucí účinky: nystagmus, ataxie, diplopie (projevy neurotoxicity při vysokých hladinách).",
      "Kyselina valproová může vyvolat idiopatickou hepatotoxicitu a hyperamonemickou encefalopatii (inhibice cyklu močoviny)."
    ],
    "clinical": [
      "Terapeutická rozmezí: fenytoin 10 - 20 mg/l; karbamazepin 4 - 12 mg/l; valproát 50 - 100 mg/l.",
      "U dětí je metabolismus antiepileptik zrychlený; vyžadují vyšší dávkování v mg/kg a pravidelnou kontrolu hladin.",
      "U těhotných žen hladiny antiepileptik klesají (zvýšený $V_d$ a clearance), což vyžaduje častější TDM k zamezení záchvatů (zejména u lamotriginu)."
    ],
    "pearl": "Fenytoin má jedinečnou farmakokinetiku s nasycováním jaterních enzymů (CYP2C9) již v běžném terapeutickém rozmezí (10-20 mg/l). Jakmile se enzymy nasytí, kinetika se mění z 1. řádu na 0. řád - clearance klesá a i minimální navýšení dávky (např. o 10 %) může zdvojnásobit plazmatickou hladinu a vyvolat těžkou cerebelární toxicitu (ataxii, nystagmus, dysartrii)!",
    "tableData": [
      {
        "name": "Terapeutické rozmezí fenytoinu",
        "value": "10 - 20 mg/l"
      },
      {
        "name": "Terapeutické rozmezí kyseliny valproové",
        "value": "50 - 100 mg/l"
      },
      {
        "name": "Fenomén typický pro karbamazepin",
        "value": "autoindukce (zkrácení t1/2)"
      }
    ],
    "quiz": [
      {
        "question": "Proč je dávkování fenytoinu klinicky velmi obtížné a vyžaduje pravidelné TDM?",
        "options": [
          "Fenytoin se nevstřebává z trávicího traktu",
          "Fenytoin vykazuje nelineární kinetiku (saturaci metabolismu); po nasycení enzymů vede i malá změna dávky k prudkému, neproporcionálnímu zvýšení hladiny v krvi a toxicitě",
          "Fenytoin vyvolává okamžitou slepotu",
          "Lék se vylučuje pouze slzami"
        ],
        "correct": 1,
        "explanations": [
          "Nesprávně. Absorpce fenytoinu je dobrá.",
          "Správně! Saturace enzymů CYP2C9 způsobuje přechod na kinetiku nultého řádu. Vztah mezi dávkou a hladinou přestává být lineární, což činí TDM klíčovým bezpečnostním nástrojem.",
          "Nesprávně. Vyvolává nystagmus a diplopii (dvojité vidění), nikoliv slepotu.",
          "Nesprávně. Hlavní cestou eliminace je jaterní metabolismus, nikoliv slzy."
        ]
      },
      {
        "question": "Co znamená pojem 'autoindukce' u karbamazepinu?",
        "options": [
          "Léčivo stimuluje vlastní absorpci ve střevě",
          "Karbamazepin indukuje syntézu enzymů CYP3A4, které ho metabolizují; to vede k tomu, že si lék sám zrychluje svůj metabolismus a jeho poločas se po několika týdnech léčby zkrátí na polovinu",
          "Lék se sám přeměňuje na jinou chemickou látku v krabičce",
          "Způsobuje automatické záchvaty"
        ],
        "correct": 1,
        "explanations": [
          "Nesprávně. Absorpce se autoindukcí nemění.",
          "Správně! Na začátku léčby je poločas dlouhý (až 35 hodin). Postupnou indukcí vlastního metabolismu poločas klesá na 12-17 hodin. Lékař proto musí po 2-3 týdnech dávku obvykle zvýšit.",
          "Nesprávně. Fyzikálně-chemická degradace v balení není autoindukcí v těle.",
          "Nesprávně. Je to antiepileptikum, záchvaty tlumí, nevyvolává."
        ]
      },
      {
        "question": "Jaké neurologické příznaky typicky indikují toxickou hladinu antiepileptik (např. fenytoinu či karbamazepinu) v plazmě?",
        "options": [
          "Hluchota a slepota",
          "Nystagmus (kmitavý pohyb očí), mozečková ataxie (porucha koordinace chůze, vrávorání), diplopie (dvojité vidění) a dysartrie",
          "Svalová atrofie končetin",
          "Paréza lícního nervu"
        ],
        "correct": 1,
        "explanations": [
          "Nesprávně. Smyslové orgány nejsou takto akutně poškozovány.",
          "Správně! Tyto cerebelární příznaky jsou klasickými a snadno rozpoznatelnými známkami předávkování antiepileptiky. Pokud se objeví, je nutné odebrat krev na TDM a snížit dávku.",
          "Nesprávně. Svalová atrofie je chronický strukturální děj, ne projev akutní neurotoxicity.",
          "Nesprávně. Paréza nervus facialis má infekční či chladovou etiologii, nesouvisí s hladinou antiepileptik."
        ]
      }
    ]
  },
  "pharm-44": {
    "definition": "TDM antidepresiv (zejména tricyklických antidepresiv - TCA) se provádí k prevenci závažné kardiotoxicity a neurotoxicity, ověření compliance a optimalizaci dávky u pacientů s pomalým metabolismem (polymorfismy CYP2D6).",
    "kinetics": [
      "Tricyklická antidepresiva (TCA - např. amitriptylin, imipramin) mají velký distribuční objem ($V_d > 10\\,L/kg$) a vysokou vazbu na proteiny.",
      "Metabolizují se v játrech přes CYP2D6, CYP2C19 a CYP3A4 na aktivní metabolity (např. amitriptylin na nortriptylin).",
      "Poločas eliminace je dlouhý (20-40 hodin), steady state se dosahuje za 5-7 dní."
    ],
    "dynamics": [
      "Blokují zpětné vychytávání serotoninu a noradrenalinu (antidepresivní účinek).",
      "Blokují muskarinové ($M_1$), histaminové ($H_1$) a alfa-1 receptory (anticholinergní a sedativní nežádoucí účinky).",
      "Toxické účinky: blokáda sodíkových kanálků v myokardu prodlužuje interval QRS a QT, což vyvolává maligní komorové arytmie a srdeční selhání."
    ],
    "clinical": [
      "TDM u TCA je indikováno z bezpečnostních důvodů (terapeutické okno amitriptylinu + nortriptylinu je 80 - 250 ug/l, toxicita > 300-500 ug/l).",
      "U SSRI (např. sertralin, escitalopram) se TDM rutinně neprovádí (široký TI), provádí se jen u rezistentních stavů k ověření compliance.",
      "U starších osob je podávání TCA spojeno s rizikem zmatenosti, retence moči, glaukomu a pádů (silný anticholinergní efekt)."
    ],
    "pearl": "Předávkování tricyklickými antidepresivy (např. amitriptylinem v suicidálním pokusu) je život ohrožující emergency. Blokáda sodíkových kanálů v srdci vede k rozšíření komplexu QRS (> 100-120 ms) a maligním arytmiím. Lékem první volby je podání hydrogenuhličitanu sodného (NaHCO3) i.v., který zvýšením pH a koncentrace sodíku antagonizuje blokádu kanálů!",
    "tableData": [
      {
        "name": "Terapeutické rozmezí amitriptylin + nortriptylin",
        "value": "80 - 250 ug/l"
      },
      {
        "name": "Kritická šířka QRS na EKG (riziko arytmií)",
        "value": "> 100 - 120 ms"
      },
      {
        "name": "Antidotum při kardiotoxicitě TCA",
        "value": "NaHCO3 (infúze)"
      }
    ],
    "quiz": [
      {
        "question": "Proč je předávkování tricyklickými antidepresivy (TCA, např. amitriptylinem) vysoce nebezpečné a život ohrožující?",
        "options": [
          "Způsobují okamžité prasknutí žaludku",
          "Blokují sodíkové kanály v myokardu, což vede k rozšíření QRS komplexu, prodloužení QTc a vzniku fatálních komorových arytmií a šoku",
          "Vyvolávají těžký zápal plic",
          "Způsobují nevratnou ztrátu paměti během 5 minut"
        ],
        "correct": 1,
        "explanations": [
          "Nesprávně. Žaludek po požití TCA nepraská.",
          "Správně! Kardiotoxicita je hlavním rizikem předávkování TCA. Sledování šířky QRS na EKG je nepřímým ukazatelem závažnosti otravy.",
          "Nesprávně. Plicní tkáň není primárním cílem toxicity TCA, útlum dýchání může nastat sekundárně při komatu.",
          "Nesprávně. Kognitivní deficit a zmatenost (delirium) nastávají kvůli anticholinergnímu bloku, ale nejsou bezprostřední příčinou smrti a jsou reverzibilní."
        ]
      },
      {
        "question": "Jaký lék se podává jako specifická léčba (antidotum) při kardiotoxicitě vyvolané tricyklickými antidepresivy k stabilizaci myokardu?",
        "options": [
          "Furosemid",
          "Intravenózní hydrogenuhličitan sodný (NaHCO3)",
          "Atropin",
          "Inzulín s glukózou"
        ],
        "correct": 1,
        "explanations": [
          "Nesprávně. Furosemid (diuretikum) nemá vliv na sodíkové kanály srdce.",
          "Správně! Bikarbonát sodný zvyšuje pH (což snižuje afinitu TCA k sodíkovým kanálům) a vysoká koncentrace Na+ iontů překonává blokádu kanálu zvýšením gradientu.",
          "Nesprávně. Atropin (anticholinergikum) by zhoršil anticholinergní syndrom vyvolaný TCA.",
          "Nesprávně. Inzulín s glukózou se používá u hyperkalémie nebo předávkování beta-blokátory, ne u TCA."
        ]
      },
      {
        "question": "Proč se TDM běžně neprovádí u moderních antidepresiv typu SSRI (např. escitalopram, sertralin)?",
        "options": [
          "Protože se v těle nevstřebávají",
          "Mají široký terapeutický index (vysokou bezpečnost), takže riziko předávkování a toxicity je minimální i při kolísání hladin",
          "Nemají žádné účinky na mozek",
          "Všechny laboratoře je odmítají měřit"
        ],
        "correct": 1,
        "explanations": [
          "Nesprávně. Absorpce SSRI je vynikající.",
          "Správně! SSRI jsou kardiovaskulárně bezpečná. I při masivním předávkování je toxicita nízká, TDM proto není pro bezpečnost pacienta nutné.",
          "Nesprávně. Mají silný a specifický antidepresivní účinek inhibicí SERT.",
          "Nesprávně. Laboratoře je měřit umí, ale z klinického hlediska to není nákladově efektivní pro běžné pacienty."
        ]
      }
    ]
  },
  "pharm-45": {
    "definition": "TDM antipsychotik se zaměřuje na sledování koncentrací neuroleptik v séru k ověření compliance pacienta, minimalizaci extrapyramidových nežádoucích účinků a optimalizaci léčby u rezistentní schizofrenie (zejména u clozapinu).",
    "kinetics": [
      "Antipsychotika jsou lipofilní látky s velkým $V_d$ a dlouhým poločasem.",
      "Metabolizují se přes různé izoenzymy CYP (CYP1A2 u clozapinu/olanzapinu, CYP2D6 u haloperidolu/risperidonu).",
      "Clozapin vykazuje nelineární kinetiku a jeho clearance klesá při zánětu (vzestup cytokinů tlumí CYP1A2)."
    ],
    "dynamics": [
      "Blokují dopaminové $D_2$ receptory (antipsychotický účinek, ale riziko extrapyramidových symptomů - EPS při obsazení > 80 % receptorů).",
      "Atypická antipsychotika (MARTA, SDA) blokují také serotoninové $5-HT_{2A}$ receptory.",
      "Clozapin má nízkou afinitu k $D_2$, ale působí na široké spektrum dalších receptorů; vyvolává agranulocytózu (vyžaduje pravidelný monitoring krevního obrazu)."
    ],
    "clinical": [
      "Clozapin vyžaduje TDM: minimální terapeutická koncentrace je 350 ug/l (ng/ml). Hladiny nad 600-1000 ug/l zvyšují riziko epileptických křečí.",
      "U pacientů se schizofrenií je non-compliance velmi častá (až 50 %); TDM spolehlivě odhalí vynechávání medikace.",
      "U starších osob stoupá riziko prodloužení QTc a rozvoje tardivní dyskineze (NÚL)."
    ],
    "pearl": "Clozapin (Leponex) je indikován u schizofrenie rezistentní na léčbu. Vyžaduje přísný monitoring: 1. TDM (cíl > 350 ug/l), 2. Pravidelný odběr krevního obrazu (každý týden v prvních 18 týdnech) z důvodu rizika život ohrožující agranulocytózy (pokles neutrofilů pod 1.5 x 10^9/l)!",
    "tableData": [
      {
        "name": "Minimální účinná koncentrace clozapinu",
        "value": "350 ug/l (ng/ml)"
      },
      {
        "name": "Limitní počet leukocytů pro podání clozapinu",
        "value": "> 3.0 x 10^9/l"
      },
      {
        "name": "EPS nežádoucí účinky nastávají při obsazení D2",
        "value": "> 80 % receptorů"
      }
    ],
    "quiz": [
      {
        "question": "U kterého antipsychotika je TDM klinicky nejvýznamnější a doporučováno mezinárodními doporučeními pro léčbu rezistentní schizofrenie?",
        "options": [
          "Haloperidol",
          "Clozapin",
          "Aripiprazol",
          "Melatonin"
        ],
        "correct": 1,
        "explanations": [
          "Nesprávně. Haloperidol TDM umožňuje, ale není to striktně vyžadováno pro běžný management jako u clozapinu.",
          "Správně! Clozapin má úzké okno (účinek nastupuje při > 350 ug/l, toxicita/křeče nad 600-800 ug/l). Clearance kolísá (např. vlivem kouření), TDM je proto standardem péče.",
          "Nesprávně. Aripiprazol má široký TI a nízkou toxicitu.",
          "Nesprávně. Melatonin je hormon regulující spánek, nikoliv antipsychotikum."
        ]
      },
      {
        "question": "Jaký závažný a potenciálně fatální nežádoucí účinek na krevní obraz vyžaduje pravidelné kontroly leukocytů u pacientů užívajících clozapin?",
        "options": [
          "Polycytémie (nadbytek erytrocytů)",
          "Agranulocytóza (kritický pokles počtu granulocytů a zvýšené riziko sepse)",
          "Trombocytóza",
          "Lymfocytární leukémie"
        ],
        "correct": 1,
        "explanations": [
          "Nesprávně. Clozapin erytrocyty nezvyšuje.",
          "Správně! Agranulocytóza (incidence cca 0.8 %) je idiosynkratická reakce typu B. Pokud klesne počet leukocytů pod 3.0 x 10^9/l nebo neutrofilů pod 1.5 x 10^9/l, musí být léčba clozapinem okamžitě a trvale ukončena.",
          "Nesprávně. Způsobuje spíše pokles buněk, nikoliv trombocytózu.",
          "Nesprávně. Clozapin nevyvolává nádorové bujení bílé řady."
        ]
      },
      {
        "question": "Co se stane, pokud obsazenost dopaminových D2 receptorů antipsychotiky v striatu překročí 80 %?",
        "options": [
          "Pacient získá nadpřirozenou sílu",
          "Výrazně stoupá riziko vzniku extrapyramidových nežádoucích účinků (EPS - např. parkinsonismus, dystonie, akatizie)",
          "Účinek antipsychotika zcela vymizí",
          "Pacient upadne do hlubokého spánku bez dalších příznaků"
        ],
        "correct": 1,
        "explanations": [
          "Nesprávně. Fyzická síla se vazbou na $D_2$ nemění.",
          "Správně! Terapeutické okno antipsychotického účinku leží mezi 65 % a 80 % obsazenosti $D_2$ receptorů. Překročení 80 % nevede k vyššímu účinku, ale k rozvoji motorických poruch (EPS).",
          "Nesprávně. Účinek přetrvává, ale je doprovázen těžkou motorickou toxicitou.",
          "Nesprávně. EPS jsou charakterizovány neklidem (akatizií) nebo křečemi, nikoliv klidným spánkem."
        ]
      }
    ]
  },
  "pharm-46": {
    "definition": "Personalizovaná farmakoterapie (precision medicine) je moderní lékařský přístup přizpůsobující výběr léčiva a jeho dávkování individuálním vlastnostem pacienta na základě jeho klinického stavu, biomarkerů, TDM a farmakogenomiky (PGx).",
    "kinetics": [
      "PGx identifikuje polymorfismy genů pro metabolické enzymy (např. CYP2D6, CYP2C9, CYP2C19, DPYD, UGT1A1) a přenašeče (SLCO1B1).",
      "Farmakogenetické biomarkery pomáhají predikovat individuální clearance a distribuci před podáním první dávky (a-priori individualizace).",
      "Pacienti s deficitem DPYD (dihydropyrimidin dehydrogenázy) mají extrémně snížený metabolismus 5-fluorouracilu (chemoterapie) a hrozí jim fatální toxicita."
    ],
    "dynamics": [
      "Identifikace genetických variant receptorů nebo terčových struktur (např. testování HLA antigenů).",
      "Přítomnost alely HLA-B*5701 spouští těžkou, život ohrožující hypersenzitivní reakci na abakavir (antiretrovirus u HIV).",
      "Genotypizace VKORC1 (vitamin K epoxid reduktáza) spolu s CYP2C9 predikuje citlivost na warfarin."
    ],
    "clinical": [
      "Před zahájením léčby abakavirem je ze zákona povinné provést genetické testování na přítomnost alely HLA-B*5701. Pokud je pacient pozitivní, lék se nesmí podat.",
      "SLCO1B1 polymorfismus predikuje riziko statinové myopatie (snížený transport simvastatinu do hepatocytů zvyšuje jeho hladinu v krvi).",
      "Personalizace léčby u dětí zohledňuje vývojové fáze (ontogenezi) enzymových systémů spolu s genetikou."
    ],
    "pearl": "Před předepsáním abakaviru (lék na HIV) je povinné vyšetřit přítomnost alely HLA-B*5701. Pokud je pacient nositelem této alely, podání abakaviru u něj vyvolá generalizovanou systémovou alergickou reakci (horečka, exantém, dušnost, GIT potíže), která může být při opětovné expozici (rechallenge) fatální!",
    "tableData": [
      {
        "name": "Povinný test před zahájením abakaviru",
        "value": "HLA-B*5701 status"
      },
      {
        "name": "Genetický marker rizika myopatie po simvastatinu",
        "value": "SLCO1B1 gen"
      },
      {
        "name": "Enzym určující toxicitu 5-fluorouracilu",
        "value": "DPYD"
      }
    ],
    "quiz": [
      {
        "question": "Proč je před zahájením léčby abakavirem (antiretrovirotikum) povinné provést genetické vyšetření na přítomnost alely HLA-B*5701?",
        "options": [
          "Lék by bez této alely neúčinkoval",
          "U nositelů alely HLA-B*5701 vyvolá abakavir těžkou a potenciálně fatální systémovou hypersenzitivní (alergickou) reakci",
          "Tato alela způsobuje rychlé vylučování abakaviru močí",
          "Test určuje správnou cenu léčiva"
        ],
        "correct": 1,
        "explanations": [
          "Nesprávně. Účinnost na virus HIV není přítomností této alely přímo podmíněna.",
          "Správně! Vazba abakaviru na antigen-prezentující štěrbinu molekuly HLA-B*5701 aktivuje CD8+ T-lymfocyty, což spustí těžkou imunologickou reakci. Pozitivní pacienti nesmí abakavir nikdy dostat.",
          "Nesprávně. HLA-B*5701 je MHC antigen na povrchu buněk, neovlivňuje renální clearance.",
          "Nesprávně. Testování je medicínským bezpečnostním standardem, nemá vliv na cenotvorbu."
        ]
      },
      {
        "question": "Který genetický marker (transporter organických aniontů) predikuje zvýšené riziko myopatie a rabdomyolýzy při léčbě simvastatinem?",
        "options": [
          "Polymorfismus genu SLCO1B1 (přenašeč OATP1B1)",
          "CYP1A2 status",
          "HLA-DR4 antigen",
          "Deficit laktázy"
        ],
        "correct": 0,
        "explanations": [
          "Správně! Gen SLCO1B1 kóduje přenašeč, který vychytává statiny z krve do hepatocytů. Snížená funkce (např. varianta c.521T>C) vede k vysokým systémovým hladinám simvastatinu v krvi a svalové toxicitě.",
          "Nesprávně. CYP1A2 statiny nemetabolizuje.",
          "Nesprávně. HLA-DR4 souvisí s náchylností k revmatoidní artritidě, ne k myopatii po statinech.",
          "Nesprávně. Deficit laktázy způsobuje střevní intoleranci mléka, nesouvisí se statinovou myopatií."
        ]
      },
      {
        "question": "Co hrozí pacientovi s vrozeným deficitem enzymu dihydropyrimidin dehydrogenázy (DPYD) při léčbě standardní chemoterapií 5-fluorouracilem?",
        "options": [
          "Nádor se zvětší",
          "Hrozí rozvoj těžké a potenciálně život ohrožující toxicity (těžká myelosuprese, mukositida, průjmy, neurotoxicita) z důvodu neschopnosti lék odbourat",
          "Lék se okamžitě vyloučí plícemi bez jakéhokoliv účinku",
          "Pacient získá rezistenci na chemoterapii"
        ],
        "correct": 1,
        "explanations": [
          "Nesprávně. Nádorová citlivost s DPYD přímo nesouvisí, ale toxicita zabrání podání účinné dávky.",
          "Správně! DPYD je hlavním enzymem odbourávajícím fluoropyrimidiny (> 80 %). Při jeho deficitu se lék hromadí a poškozuje dělící se buňky kostní dřeně a sliznic. Před léčbou se doporučuje screening (genotypizace nebo měření uracilu).",
          "Nesprávně. 5-FU se plícemi neeliminuje.",
          "Nesprávně. Deficit metabolického enzymu zvyšuje citlivost k nežádoucím účinkům, nezpůsobuje lékovou rezistenci nádoru."
        ]
      }
    ]
  }
};

function mergePharmDetails() {
  if (!window.COMPLETE_QUESTIONS) return;
  window.COMPLETE_QUESTIONS.forEach(q => {
    const rich = PHARM_DETAILS[q.id];
    if (rich) {
      const kineticsHTML = rich.kinetics ? rich.kinetics.map(k => `<li>${k}</li>`).join("") : "";
      const dynamicsHTML = rich.dynamics ? rich.dynamics.map(d => `<li>${d}</li>`).join("") : "";
      const clinicalHTML = rich.clinical ? rich.clinical.map(c => `<li>${c}</li>`).join("") : "";
      
      const tableRowsHTML = rich.tableData ? rich.tableData.map(row => `
        <tr>
          <td style="padding: 10px; border: 1px solid var(--border-color); font-weight: 500;">${row.name}</td>
          <td style="padding: 10px; border: 1px solid var(--border-color); font-weight: 600; color: var(--color-primary);">${row.value}</td>
        </tr>
      `).join("") : "";

      q.detailContent = `
        <div class="medical-detail">
          <section>
            <h3>1. Definice a úvod</h3>
            <p><strong>${q.title}</strong>: ${rich.definition}</p>
          </section>
          
          <section>
            <h3>2. Osud léčiva v organismu (Farmakokinetika / ADME)</h3>
            <ul>
              ${kineticsHTML}
            </ul>
          </section>

          <section>
            <h3>3. Mechanismus účinku (Farmakodynamika)</h3>
            <ul>
              ${dynamicsHTML}
            </ul>
          </section>

          <section class="clinical-pearl">
            <h4>Klinická perla / Bezpečnostní upozornění</h4>
            <p>${rich.pearl}</p>
          </section>

          <section>
            <h3>4. Klinická aplikace, dávkování a zvláštní skupiny</h3>
            <ul>
              ${clinicalHTML}
            </ul>
          </section>

          <section style="margin-top: 24px; border-top: 2px solid var(--border-color); padding-top: 20px;">
            <h3>5. Klíčové parametry, referenční rozmezí a TDM kritéria</h3>
            <table style="width: 100%; border-collapse: collapse; margin-top: 12px;">
              <thead>
                <tr style="background-color: var(--bg-tertiary);">
                  <th style="padding: 10px; border: 1px solid var(--border-color); text-align: left;">Parametr / Kritérium</th>
                  <th style="padding: 10px; border: 1px solid var(--border-color); text-align: left;">Hodnota / Klinický význam</th>
                </tr>
              </thead>
              <tbody>
                ${tableRowsHTML}
              </tbody>
            </table>
          </section>
        </div>
      `;
      
      q.quiz = rich.quiz;
    }
  });
}

mergePharmDetails();
window.PHARM_DETAILS = PHARM_DETAILS;
