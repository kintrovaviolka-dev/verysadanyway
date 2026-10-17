export default {
  title: "Farmakologie",
  legacy: "#cards-grid",
  lab: "receptors",
  labTitle: "Receptorová laboratoř",
  labLead: "Vliv koncentrace agonisty a druhu antagonismu na koncentračně-účinkovou křivku.",
  sources: [
    { id: "receptors", label: "MSD Manual: Drug–Receptor Interactions", url: "https://www.msdmanuals.com/professional/clinical-pharmacology/pharmacodynamics/drug-receptor-interactions" },
    { id: "kinetics", label: "MSD Manual: Overview of Pharmacokinetics", url: "https://www.msdmanuals.com/professional/clinical-pharmacology/pharmacokinetics/overview-of-pharmacokinetics" },
    { id: "antibiotics", label: "WHO: The WHO AWaRe antibiotic book", url: "https://www.who.int/publications/i/item/9789240062382" },
    { id: "safety", label: "WHO: Medication Without Harm", url: "https://www.who.int/initiatives/medication-without-harm" }
  ],
  lessons: [
    {
      id: "receptor", title: "Potence není účinnost", minutes: 6,
      intro: "Dvě léčiva mohou dosáhnout stejného maxima při velmi odlišných koncentracích. Z grafu proto čtěte vodorovnou i svislou osu.",
      explanation: [
        "EC50 je koncentrace vyvolávající polovinu maximálního účinku daného agonisty. Nižší EC50 znamená vyšší potenci v daném systému, nikoli automaticky lepší léčivo. Emax vyjadřuje maximální dosažitelnou odpověď. Afinita popisuje vazbu k receptoru; není totéž co EC50, kterou ovlivňuje také přenos signálu a receptorová rezerva.",
        "Reverzibilní kompetitivní antagonista v jednoduchém rovnovážném modelu posouvá křivku doprava bez snížení Emax. Nepřekonatelný antagonismus může Emax snížit; skutečný průběh závisí i na rezervě receptorů. Parciální agonista má v témže systému nižší vnitřní aktivitu a při současné přítomnosti plného agonisty může snižovat celkovou odpověď."
      ],
      steps: ["Určete, zda porovnáváte koncentraci, dávku, nebo čas. Tyto osy nejsou zaměnitelné.", "Porovnejte nejprve maxima, potom koncentrace pro srovnatelný účinek.", "V laboratoři zvyšte antagonistu a odlište posun doprava od snížení stropu."],
      compare: [["Kompetitivní antagonismus", "Vyšší koncentrace agonisty může blokádu překonat; EC50 roste."], ["Parciální agonismus", "Nižší strop odpovědi neznamená menší afinitu k receptoru."]],
      pitfall: "Vyšší potence neznamená vyšší klinickou účinnost ani širší terapeutické rozmezí.",
      question: "Léčivo A má EC50 2 a Emax 60 %, B má EC50 20 a Emax 100 %. Které je potentnější a které má vyšší maximální účinek?",
      answer: "A je potentnější v tomto modelu, protože má nižší EC50. B má vyšší maximální účinek. Bez údajů o toxicitě a klinickém cíli nelze určit, které je pro pacienta vhodnější.",
      sourceIds: ["receptors"]
    },
    {
      id: "expozice", title: "Dávka → expozice → odpověď", minutes: 7,
      intro: "Neúčinnost může vzniknout před receptorem: lék se nevstřebá, rychle se eliminuje nebo pacient léčbu neužívá.",
      explanation: [
        "Biologická dostupnost určuje, jaká část podané dávky vstoupí do systémového oběhu. Distribuční objem je zdánlivý prostor, který spojuje množství léčiva v těle s jeho plazmatickou koncentrací. Clearance vyjadřuje objem plazmy očištěný od léčiva za čas; nejde o množství látky vyloučené za hodinu.",
        "V lineárním modelu závisí nasycovací dávka hlavně na distribučním objemu a cílové koncentraci, udržovací dávkování na clearance. Po změně dávky se nový ustálený stav obvykle přibližuje za čtyři až pět poločasů. To neplatí bez výhrad u nelineární kinetiky nebo aktivních metabolitů."
      ],
      steps: ["Než označíte terapii za rezistentní, ověřte užívání, cestu podání a dobu od zahájení.", "Změnu distribučního objemu oddělte od změny clearance.", "Při interpretaci koncentrace zapište čas odběru vůči dávce; izolované číslo nestačí."],
      compare: [["Distribuční objem", "Ovlivňuje počáteční koncentraci a nasycovací dávku."], ["Clearance", "Ovlivňuje expozici při opakovaném podávání a potřebnou udržovací dávku."]],
      pitfall: "Při renálním selhání nelze automaticky stejným poměrem snížit nasycovací i udržovací dávku.",
      question: "Co se v lineárním modelu stane s průměrnou koncentrací při stejné dávce a intervalu, klesne-li clearance na polovinu?",
      answer: "V ustáleném stavu se průměrná koncentrace přibližně zdvojnásobí, pokud se nemění dostupnost. Dosažení nového stavu trvá; konkrétní úprava patří do souhrnu údajů o přípravku a klinického kontextu.",
      sourceIds: ["kinetics"]
    },
    {
      id: "interakce", title: "Interakce: koncentrace, nebo účinek?", minutes: 6,
      intro: "Dva léky se mohou ovlivnit i bez změny plazmatické koncentrace. Mechanismus interakce určuje, co má smysl sledovat.",
      explanation: [
        "Farmakokinetická interakce mění absorpci, distribuci, metabolismus nebo eliminaci. Enzymová inhibice může zvýšit koncentraci substrátu; indukce obvykle nastupuje i odeznívá pomaleji, protože mění množství enzymu. U proléčiva se směr klinického účinku může obrátit, protože metabolismus vytváří aktivní látku.",
        "Farmakodynamická interakce se odehrává na úrovni účinku. Kombinace sedativ může zesílit útlum, více léků prodlužujících QT zvyšuje riziko při současné hypokalemii. Antikoagulans s NSAID zvyšuje riziko krvácení více mechanismy; normální koncentrace jednoho léčiva tak bezpečnost kombinace nepotvrzuje."
      ],
      steps: ["Sepište i volně prodejné přípravky, doplňky a nově vysazené léky.", "Určete oběť a původce interakce; u proléčiva sledujte aktivní metabolit.", "Navrhněte cílenou kontrolu: klinický stav, ionty, EKG či koncentraci podle mechanismu."],
      compare: [["Inhibice metabolismu", "Často rychlejší nástup; záleží na poločasu obou látek."], ["Indukce metabolismu", "Nástup a odeznění mohou přetrvávat dny až týdny."]],
      pitfall: "Databázové upozornění není samo o sobě důvodem léčbu zrušit; význam závisí na dávce, alternativách a riziku pacienta.",
      question: "Proč samotná kontrola koncentrace nestačí při kombinaci dvou léků prodlužujících QT?",
      answer: "Jde také o sčítání elektrofyziologického účinku. Riziko mění ionty, bradykardie, další léky a srdeční onemocnění; potřebujete klinický kontext a případně EKG.",
      sourceIds: ["kinetics", "safety"]
    },
    {
      id: "nezadouci", title: "Nežádoucí účinek není vždy alergie", minutes: 6,
      intro: "Správný popis reakce pomáhá zabránit opakování škody i zbytečnému vyloučení celé lékové skupiny.",
      explanation: [
        "Predikovatelné nežádoucí účinky často navazují na farmakologický mechanismus a expozici, například krvácení při antikoagulaci. Hypersenzitivita má jiný mechanismus a její tíže nemusí odpovídat běžnému dávkovému vztahu. Nauzea po antibiotiku sama o sobě neprokazuje imunitně zprostředkovanou alergii.",
        "Kauzalita stojí na časové souvislosti, známém profilu léčiva, alternativních příčinách a vývoji po změně léčby. Zlepšení po vysazení podezření podporuje, ale samo je nedokazuje. U závažné reakce se neprovádí neřízené opakované podání jen pro potvrzení souvislosti."
      ],
      steps: ["Zaznamenejte konkrétní léčivo, čas, příznaky a závažnost, ne pouze slovo alergie.", "Přednostně rozpoznejte dušnost, oběhovou nestabilitu, kožní bolest či slizniční postižení.", "Uvažujte o hlášení podezření na nežádoucí účinek; není nutné čekat na jistou kauzalitu."],
      compare: [["Intolerance", "Například gastrointestinální potíže bez známek hypersenzitivity."], ["Závažná hypersenzitivita", "Vyžaduje odborné zhodnocení a přesnou dokumentaci; ne domácí provokaci."]],
      pitfall: "Časová následnost není důkaz příčiny. Nezapomeňte na infekci, základní chorobu ani další současně nasazené léky.",
      question: "Jaký zápis má větší hodnotu než „alergie na antibiotika“?",
      answer: "Název látky, datum a interval od dávky, popis projevů, orgánové postižení, léčba reakce a její výsledek. Takový zápis umožňuje bezpečnější následné alergologické rozhodnutí.",
      sourceIds: ["safety"]
    },
    {
      id: "antibiotika", title: "Antibiotikum: cíl, místo, expozice", minutes: 7,
      intro: "Citlivost mikroba je pouze jedna část rozhodnutí. Záleží také na místě infekce, zdroji a hostiteli.",
      explanation: [
        "Antibiotikum musí dosáhnout účinné expozice v místě infekce. Laboratorní citlivost nenahradí úvahu o penetraci do tkáně, biofilmu či abscesu. U některých infekcí je odstranění nebo drenáž zdroje stejně důležitá jako volba látky. Odběr materiálu má být správně načasovaný, ale nesmí nepřiměřeně zdržet neodkladnou léčbu.",
        "Farmakokineticko-farmakodynamické ukazatele popisují různé vztahy mezi expozicí a účinkem: čas nad MIC, poměr vrcholové koncentrace k MIC nebo AUC/MIC. Nelze z nich odvodit univerzální dávkovací návod pro všechny látky. Po získání výsledků se znovu hodnotí spektrum, cesta podání i nutná délka léčby."
      ],
      steps: ["Pojmenujte pravděpodobný zdroj a relevantní patogeny, ne pouze horečku.", "Zohledněte alergickou anamnézu, orgánové funkce a lokální rezistenci.", "Při kontrole léčby ověřte kultivaci, odpověď, možnost zúžení spektra a ukončení."],
      compare: [["Empirická léčba", "Vychází z pravděpodobných původců a klinické závažnosti."], ["Cílená léčba", "Reaguje na mikrobiologii, zdroj a klinický průběh, ne jen na jeden výsledek."]],
      pitfall: "Širší spektrum automaticky neznamená lepší léčbu. Kolonizace není totéž co infekce vyžadující antibiotikum.",
      question: "Proč citlivost izolátu in vitro nezaručuje vyléčení abscesu?",
      answer: "Výsledek neřeší dostatečnou expozici v ložisku ani potřebu kontroly zdroje. Záleží na lokalizaci, velikosti, hostiteli a možnosti drenáže.",
      sourceIds: ["antibiotics", "kinetics"]
    },
    {
      id: "revize", title: "Léková revize v šesti otázkách", minutes: 5,
      intro: "Racionální preskripce nekončí vydáním receptu. Každé léčivo potřebuje indikaci, cíl a plán kontroly.",
      explanation: [
        "U každého přípravku hledejte aktuální indikaci, měřitelný přínos, vhodnou dávku a riziko. Polyfarmacie není pouze vysoký počet léků; problémem je i duplicita, chybějící indikace nebo kaskáda, kdy se nežádoucí účinek léčí dalším přípravkem místo rozpoznání příčiny.",
        "Starší člověk může mít zvýšenou citlivost k sedativům, anticholinergní zátěži a ortostatické hypotenzi. Renální funkce, hmotnost a schopnost správně užívat léčbu mění bezpečnost. Depreskripce je plánovaný proces se sledováním; některé léky vyžadují postupné snižování a nesmějí se náhle vysadit."
      ],
      steps: ["Co pacient skutečně užívá, proč a s jakým přínosem?", "Je dávka přiměřená funkci orgánů a nehrozí duplicita či interakce?", "Co budeme kontrolovat, kdy léčbu přehodnotíme a kdo plán vysvětlí pacientovi?"],
      compare: [["Rekonciliace medikace", "Ověření přesného seznamu a odstranění nesrovnalostí při přechodech péče."], ["Léková revize", "Posouzení vhodnosti, účinnosti a bezpečnosti celého režimu."]],
      pitfall: "Seznam v dokumentaci se nemusí shodovat s tím, co pacient užívá doma.",
      question: "Po nasazení sedativa přibývají pády. Proč není prvním krokem automaticky další lék na závratě?",
      answer: "Může jít o preskripční kaskádu. Je třeba vyšetřit příčinu pádů, časový vztah, ortostázu a celou medikaci; případná úprava sedativa musí mít bezpečný plán.",
      sourceIds: ["safety"]
    }
  ]
};
