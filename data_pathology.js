// data_pathology.js - Databáze otázek a kvízů pro Patologii (3. ročník)
const PATHOLOGY_QUESTIONS = [
  // Obecná patologie
  {
    id: "pat-1",
    category: "Obecná patologie",
    title: "Nekróza – definice, typy, patogeneze a hojení. Rozdíl mezi nekrózou a apoptózou.",
    organSystem: "Obecné procesy",
    keyTerms: ["Nekróza", "Apoptóza", "Koagulační nekróza", "Kolikvační nekróza", "Kaseózní nekróza", "Gangréna"],
    quiz: [
      {
        question: "Který typ nekrózy je typický pro ischemické poškození mozkové tkáně?",
        options: [
          "Koagulační nekróza",
          "Kolikvační nekróza",
          "Kaseózní nekróza",
          "Fibrinoidní nekróza"
        ],
        correct: 1,
        explanations: [
          "Nesprávně. Koagulační nekróza postihuje solidní orgány bohaté na proteiny (srdce, ledviny), nikoli mozek.",
          "Správně! Mozková tkáň je bohatá na lipidy a chudá na proteiny. Při ischemii dochází k rychlému zkapalnění (kolikvaci) tkáně hydrolytickými enzymy.",
          "Nesprávně. Kaseózní nekróza je typická pro tuberkulózu.",
          "Nesprávně. Fibrinoidní nekróza postihuje cévní stěny u imunopatologických zánětů."
        ]
      },
      {
        question: "Jaký je hlavní rozdíl mezi nekrózou a apoptózou z hlediska zánětlivé odpovědi?",
        options: [
          "Nekróza nevyvolává zánět, protože buňky se scvrkávají.",
          "Apoptóza vyvolává masivní zánět z důvodu uvolnění lysozomálních enzymů.",
          "Nekróza vyvolává zánět (demarkační lem) v důsledku prasknutí membrány a uvolnění intracelulárního obsahu, zatímco apoptóza zánět nevyvolává.",
          "Oba procesy vyvolávají shodnou zánětlivou odpověď."
        ],
        correct: 2,
        explanations: [
          "Nesprávně. Nekróza je vždy doprovázena zánětem.",
          "Nesprávně. Apoptóza je tichá, buňky jsou pohlceny bez poškození okolí.",
          "Správně! Při nekróze dochází k destrukci plazmatické membrány a úniku biochemických signálů (DAMPs), což aktivuje imunitní buňky. Apoptické buňky tvoří apoptická tělíska, která jsou rychle fagocytována.",
          "Nesprávně. Zánětlivý profil obou procesů je zcela odlišný."
        ]
      }
    ]
  },
  {
    id: "pat-2",
    category: "Obecná patologie",
    title: "Atrofie – typy (fyziologická, patologická), patogeneze. Intracelulární akumulace a dystrofie.",
    organSystem: "Obecné procesy",
    keyTerms: ["Atrofie", "Steatóza", "Dystrofie", "Lipofuscin", "Amyloidóza"],
    quiz: [
      {
        question: "Který pigment se hromadí v buňkách při tzv. hnědé atrofii (atrophia fusca) z opotřebování?",
        options: [
          "Melanin",
          "Hemosiderin",
          "Lipofuscin",
          "Bilirubin"
        ],
        correct: 2,
        explanations: [
          "Nesprávně. Melanin je kožní pigment.",
          "Nesprávně. Hemosiderin vzniká z rozpadlého hemoglobinu.",
          "Správně! Lipofuscin je pigment z opotřebování (wear-and-tear pigment). Vzniká polymerací lipidů a proteinů z poškozených organel a hromadí se v lysozomech stárnoucích či atrofických buněk.",
          "Nesprávně. Bilirubin je žlučové barvivo."
        ]
      }
    ]
  },
  {
    id: "pat-3",
    category: "Obecná patologie",
    title: "Amyloidóza – klasifikace (lokalizovaná, systémová, AL, AA, senilní), stavba amyloidu a diagnostika.",
    organSystem: "Lokomotorický a autoimunitní systém",
    keyTerms: ["Amyloid", "AL amyloidóza", "AA amyloidóza", "Kongo červeň", "Dvojlom v polarizovaném světle"],
    quiz: [
      {
        question: "Které barvení a optická vlastnost jsou klíčové pro histopatologický průkaz amyloidu?",
        options: [
          "Barvení HE a žlutá fluorescence",
          "Barvení Kongo červení a zelený dvojlom v polarizovaném světle",
          "Barvení podle Gansa a modrý odstín",
          "PAS reakce a červené zbarvení"
        ],
        correct: 1,
        explanations: [
          "Nesprávně. V běžném HE barvení vypadá amyloid jako amorfní růžová hmota, což není specifické.",
          "Správně! Vazba Kongo červeně na beta-skládaný list amyloidu mění optické vlastnosti tkáně. V polarizačním mikroskopu pak amyloid vykazuje charakteristický jablkově zelený dvojlom (anizotropii).",
          "Nesprávně. Gansovo barvení neexistuje pro amyloid.",
          "Nesprávně. PAS reakce barví glykoproteiny, nikoliv specificky amyloid."
        ]
      }
    ]
  },
  {
    id: "pat-4",
    category: "Obecná patologie",
    title: "Akutní zánět – exsudativní typy (serózní, fibrózní, hnisavý, gangrenózní), celkové a lokální projevy.",
    organSystem: "Obecné procesy",
    keyTerms: ["Vazodilatace", "Exsudát", "Fibrin", "Hnis", "Chemotaxe", "Rubor, Calor, Tumor, Dolor, Functio laesa"],
    quiz: [
      {
        question: "Co je hlavní příčinou vzniku otoku (tumor) v časné fázi akutního exsudativního zánětu?",
        options: [
          "Zvýšený hydrostatický tlak v tepnách a pokles tvorby lymfy",
          "Zvýšení permeability (propustnosti) kapilár a venul mediované histaminem, což umožňuje únik tekutiny a proteinů do intersticia",
          "Ucpání všech odvodných žil krevními sraženinami",
          "Množení bakterií přímo v intersticiálním prostoru"
        ],
        correct: 1,
        explanations: [
          "Nesprávně. Lymfatická drenáž je naopak v zánětu stimulována.",
          "Správně! Histamin, bradykinin a leukotrieny vyvolají kontrakci endotelových buněk a vznik štěrbin. Tekutina bohatá na proteiny (exsudát) uniká do tkáně, což vede k lokálnímu otoku.",
          "Nesprávně. Trombóza není primární příčinou otoku u běžného zánětu.",
          "Nesprávně. Bakterie sice mohou otok zhoršit, ale primárním mechanismem je vaskulární odpověď."
        ]
      }
    ]
  },
  {
    id: "pat-5",
    category: "Obecná patologie",
    title: "Chronický a granulomatózní zánět – patogeneze, buňky (epiteloidní, Langhansovy), příklady (TBC, sarkoidóza, syfilis).",
    organSystem: "Obecné procesy",
    keyTerms: ["Granulom", "Langhansovy buňky", "Epiteloidní histiocyty", "Kaseózní nekróza", "Tuberculosis"],
    quiz: [
      {
        question: "Která buňka je charakteristická pro granulomatózní zánět a vzniká splynutím aktivovaných makrofágů?",
        options: [
          "Plazmatická buňka",
          "Langhansova obrovská buňka",
          "Reedové-Sternbergové buňka",
          "Neutrofilní segment"
        ],
        correct: 1,
        explanations: [
          "Nesprávně. Plazmatické buňky tvoří protilátky a nesplývají.",
          "Správně! Pod vlivem IFN-gamma produkovaného Th1 lymfocyty se makrofágy mění na epiteloidní histiocyty, které mohou splynout a vytvořit mnohojaderné Langhansovy obrovské buňky.",
          "Nesprávně. Reedové-Sternbergové buňka je nádorová buňka u Hodgkinova lymfomu.",
          "Nesprávně. Neutrofily jsou typické pro akutní hnisavý zánět."
        ]
      }
    ]
  },
  
  // Speciální patologie
  {
    id: "pat-16",
    category: "Speciální patologie",
    title: "Ateroskleróza – patogeneze (teorie poškození endotelu), stadia (lipidový proužek, plát), komplikace.",
    organSystem: "Kardiovaskulární systém",
    keyTerms: ["Endoteliální dysfunkce", "Foam cells (pěnové buňky)", "Vazivový plát", "Ruptura plátu", "Thrombóza"],
    quiz: [
      {
        question: "Jak vznikají tzv. pěnové buňky (foam cells) v časném stadiu patogeneze aterosklerózy?",
        options: [
          "Z hladkých svalových buněk požírajících kolagen",
          "Z monocytů/makrofágů, které v intimě nekontrolovaně fagocytují oxidované LDL částice (oxLDL) přes scavengerové receptory",
          "Z poškozených endotelových buněk, které absorbují vodu",
          "Z tukových buněk migrujících z podkoží"
        ],
        correct: 1,
        explanations: [
          "Nesprávně. Pěnové buňky nepožírají kolagen.",
          "Správně! Monocyty migrují do subendotelového prostoru, diferencují se v makrofágy a přes scavengerové receptory pohlcují oxLDL. Protože tyto receptory nepodléhají negativní regulaci, makrofágy se přeplní lipidy a získají pěnovitý vzhled.",
          "Nesprávně. Endotelové buňky pěnové buňky netvoří.",
          "Nesprávně. Tukové buňky nemigrují do cévní stěny z podkoží."
        ]
      }
    ]
  },
  {
    id: "pat-17",
    category: "Speciální patologie",
    title: "Ischemická choroba srdeční – infarkt myokardu (makroskopické a mikroskopické změny v čase, komplikace).",
    organSystem: "Kardiovaskulární systém",
    keyTerms: ["Myomalacie", "Koagulační nekróza", "Jizvení", "Ruptura stěny", "Fibrózní perikarditida"],
    quiz: [
      {
        question: "Kdy po vzniku akutního infarktu myokardu je stěna komory nejvíce ohrožena rupturou a tamponádou srdeční?",
        options: [
          "Během prvních 2 hodin z důvodu spasmu cév",
          "Mezi 3. a 7. dnem, kdy vrcholí odklízení nekrózy makrofágy (myomalacie) a granulomová tkáň ještě není dostatečně pevná",
          "Po 6 týdnech, kdy dochází k retrakci vazivové jizvy",
          "K ruptuře dochází pouze při nasedající endokarditidě"
        ],
        correct: 1,
        explanations: [
          "Nesprávně. V prvních hodinách je tkáň sice nekrotická, ale drží pohromadě.",
          "Správně! V tomto období dochází k odbourávání nekrotických kardiomyocytů enzymatickým působením makrofágů (myomalacie). Pevnost stěny je v tomto okamžiku minimální, což při vysokém tlaku v komoře snadno vyvolá rupturu stěny či septa.",
          "Nesprávně. Po 6 týdnech je již vytvořena pevná vazivová jizva, riziko ruptury je minimální.",
          "Nesprávně. Ruptura je přímou komplikací nekrózy a hojení infarktu, nikoli zánětu chlopní."
        ]
      }
    ]
  },
  {
    id: "pat-18",
    category: "Speciální patologie",
    title: "Zánětlivá onemocnění plic – pneumonie lobární a bronchopneumonie (etiologie, morfologická stadia lobární pneumonie).",
    organSystem: "Respirační systém",
    keyTerms: ["Lobární pneumonie", "Bronchopneumonie", "Kongesce", "Červená hepatizace", "Šedá hepatizace", "Rezoluce"],
    quiz: [
      {
        question: "Které stadium lobární pneumonie je charakteristické vyplněním alveolů fibrinem, erytrocyty a neutrofily, což dává plíci tuhou konzistenci podobnou játrům?",
        options: [
          "Stadium kongesce (překrvení)",
          "Stadium červené hepatizace (z játření)",
          "Stadium šedé hepatizace",
          "Stadium rezoluce (vstřebávání)"
        ],
        correct: 1,
        explanations: [
          "Nesprávně. Stadium kongesce se vyznačuje pouze překrvením a edémem bez masivního fibrinu.",
          "Správně! Ve stadiu červené hepatizace (hepatisatio rubra) je alveolární prostor zcela vyplněn exsudátem bohatým na fibrin a erytrocyty. Plíce je bezvzdušná, tmavě červená a tuhá jako játra.",
          "Nesprávně. Ve stadiu šedé hepatizace dochází k rozpadu erytrocytů a převažují neutrofily s fibrinem.",
          "Nesprávně. Stadium rezoluce je stadiem hojení, kdy dochází k enzymatickému zkapalnění exsudátu."
        ]
      }
    ]
  },
  {
    id: "pat-19",
    category: "Speciální patologie",
    title: "Nádory plic – bronchogenní karcinom (dlaždicobuněčný, malobuněčný, adenokarcinom) – histologie, lokalizace a prognóza.",
    organSystem: "Respirační systém",
    keyTerms: ["Dlaždicobuněčný karcinom", "Adenokarcinom", "Malobuněčný karcinom", "Paraneoplastický syndrom", "Neuroendokrinní differentiation"],
    quiz: [
      {
        question: "Který typ plicního karcinomu je typicky lokalizován centrálně, vykazuje neuroendokrinní diferenciaci, je extrémně agresivní a často spojen s paraneoplastickými syndromy?",
        options: [
          "Adenokarcinom plic",
          "Malobuněčný plicní karcinom (SCLC)",
          "Dlaždicobuněčný karcinom",
          "Velkobuněčný nediferencovaný karcinom"
        ],
        correct: 1,
        explanations: [
          "Nesprávně. Adenokarcinom je lokalizován periferně a nevychází z neuroendokrinních buněk.",
          "Správně! Malobuněčný karcinom (Small Cell Lung Carcinoma) vychází z Kulchitského neuroendokrinních buněk průdušek. Tvoří hormony (ACTH, ADH), což vyvolává paraneoplastické syndromy, a roste centrálně.",
          "Nesprávně. Dlaždicobuněčný karcinom roste centrálně, ale tvoří keratin a mezibuněčné můstky, nejedná se o neuroendokrinní tumor.",
          "Nesprávně. Velkobuněčný karcinom nevykazuje specifické neuroendokrinní vlastnosti."
        ]
      }
    ]
  },
  {
    id: "pat-20",
    category: "Speciální patologie",
    title: "Jaterní cirhóza – etiopatogeneze, morfologie (regenerační uzly, portální fibróza), komplikace.",
    organSystem: "Gastroenterologie a hepatologie",
    keyTerms: ["Itoovy buňky (hvězdicové)", "Regenerační uzly", "Portální fibróza", "Jaterní selhání", "Hepatocelulární karcinom"],
    quiz: [
      {
        question: "Které buňky v játrech jsou po aktivaci chronickým poškozením (např. alkoholem) hlavními producenty kolagenu a vaziva, což vede k fibrotizaci lalůčků?",
        options: [
          "Kupfferovy buňky (makrofágy)",
          "Hepatocyty",
          "Itoovy hvězdicové buňky (stellate cells) v Disseově prostoru",
          "Cholangiocyty"
        ],
        correct: 2,
        explanations: [
          "Nesprávně. Kupfferovy buňky produkují zánětlivé cytokiny, ale netvoří kolagen přímo.",
          "Nesprávně. Hepatocyty při poškození odumírají, kolagen netvoří.",
          "Správně! Itoovy buňky za fyziologických okolností ukládají vitamín A. Při chronickém poškození se transdiferencují na myofibroblasty, které začnou masivně produkovat kolagen typu I a III do Disseova prostoru, což naruší fenestrace sinusoid.",
          "Nesprávně. Cholangiocyty tvoří epitel žlučovodů."
        ]
      }
    ]
  }
];

// Spustíme registraci databáze
window.PATHOLOGY_QUESTIONS = PATHOLOGY_QUESTIONS;
