export default {
  title: "Neurologie",
  legacy: "#main-content",
  lab: "vision",
  labTitle: "Mapa zorných drah",
  labLead: "Výpadky zorných polí podle místa a strany léze zrakové dráhy.",
  sources: [
    { id: "vision", label: "NCBI Bookshelf: Neuroscience — Visual Field Deficits", url: "https://www.ncbi.nlm.nih.gov/books/NBK10912/" },
    { id: "exam", label: "MSD Manual: How to Assess the Motor System", url: "https://www.msdmanuals.com/professional/neurologic-disorders/neurologic-examination/how-to-assess-the-motor-system" },
    { id: "stroke", label: "NICE NG128: Stroke and transient ischaemic attack", url: "https://www.nice.org.uk/guidance/ng128/chapter/recommendations" },
    { id: "headache", label: "NICE CG150: Headaches in over 12s", url: "https://www.nice.org.uk/guidance/cg150/chapter/Recommendations" },
    { id: "epilepsy", label: "NICE NG217: Epilepsies", url: "https://www.nice.org.uk/guidance/ng217/chapter/1-Diagnosis-and-assessment-of-epilepsy" },
    { id: "dizziness", label: "SAEM GRACE-3: Acute dizziness and vertigo", url: "https://www.saem.org/publications/grace/grace-3" }
  ],
  lessons: [
    {
      id: "lokalizace", title: "Kde je léze? Až potom proč", minutes: 6,
      intro: "Stejná slabost může vzniknout v mozku, míše, kořeni, nervu, nervosvalové ploténce nebo svalu.",
      explanation: [
        "Topická diagnóza určuje místo postižení podle rozložení poruchy. Hemiparéza s afázií ukazuje jinam než distální slabost v teritoriu jednoho nervu. Rozlišení centrálního a periferního motoneuronu pomáhá, ale jednotlivé příznaky nejsou absolutní: například akutní centrální léze může zpočátku probíhat s hypotonií.",
        "Etiologii zpřesňuje čas. Náhlý deficit je podezřelý z cévní příčiny, postupný rozvoj během dnů může ukazovat na zánět a chronická progrese na degenerativní či expanzivní proces. Toto jsou orientační vzorce, nikoli pravidla bez výjimek. Vždy hledejte nález, který s navrženou lokalizací nesouhlasí."
      ],
      steps: ["Popište distribuci motorického, senzitivního a dalších deficitů.", "Navrhněte nejmenší anatomickou oblast vysvětlující celý nález.", "Přidejte časový průběh, systémové příznaky a diferenciální etiologii."],
      compare: [["Topická diagnóza", "Která část nervového systému je postižena?"], ["Etiologická diagnóza", "Jaký proces ji poškodil?"]],
      pitfall: "Název symptomu, například vertigo či parestezie, není topická diagnóza.",
      question: "Proč periferní léze nervus peroneus nevysvětlí zároveň afázii?",
      answer: "Afázie je porucha jazykových funkcí mozku. Kombinace vyžaduje jinou lokalizaci, vícečetné postižení nebo nové posouzení nálezu; nelze vše připsat jednomu perifernímu nervu.",
      sourceIds: ["exam"]
    },
    {
      id: "zorne-pole", title: "Co se kříží v chiasmatu", minutes: 7,
      intro: "Zorné pole není sítnice. Pravá polovina světa se promítá do levé části zrakového systému za chiasmatem.",
      explanation: [
        "Obraz se na sítnici promítá obráceně. Vlákna z nazálních polovin sítnic se v chiasmatu kříží, z temporálních nikoli. Léze jednoho zrakového nervu proto postihuje jedno oko, zatímco retrochiasmatická léze typicky zasahuje stejnou polovinu zorného pole obou očí — homonymní výpadek.",
        "Centrální postižení chiasmatu může vést k bitemporální hemianopsii. Temporální část optické radiace, Meyerova klička, nese informace z horní části kontralaterálního zorného pole; parietální radiace z dolní části. Skutečné léze často vytvářejí neúplné vzorce a samotné zorné pole nemusí přesně určit jednu strukturu."
      ],
      steps: ["Rozhodněte, zda je porucha monokulární, nebo přítomná v obou očích.", "U obou očí odlište homonymní a heteronymní výpadek.", "Stranu retrochiasmatické léze určete proti straně výpadku a doplňte další neurologické příznaky."],
      compare: [["Levá retrochiasmatická léze", "Typicky pravostranný homonymní výpadek."], ["Levá Meyerova klička", "Typicky pravostranný horní kvadrantový výpadek v obou očích."]],
      pitfall: "Levý zrakový nerv neznamená levou polovinu zorného pole obou očí.",
      question: "Kam lokalizujete pravostrannou horní homonymní kvadrantanopsii v učebnicovém modelu?",
      answer: "Do levé temporální optické radiace, Meyerovy kličky. Jde o orientační lokalizaci; částečné léze dalších částí zrakové dráhy mohou vytvářet podobný obraz.",
      sourceIds: ["vision"]
    },
    {
      id: "motorika", title: "Centrální a periferní paréza", minutes: 6,
      intro: "Síla je jen jedna část vyšetření. Doplňte tonus, reflexy, trofiku a rozložení slabosti.",
      explanation: [
        "Centrální postižení bývá spojeno s hyperreflexií, spasticitou a patologickými pyramidovými jevy. Periferní léze může vést k hyporeflexii, hypotonii, atrofii a někdy fascikulacím. Časný stav, souběh nemocí a technika vyšetření však mohou obraz změnit.",
        "Kořenová léze se řídí myotomem a může mít radikulární bolest; léze periferního nervu kombinuje motorické a senzitivní postižení podle jeho průběhu. Porucha nervosvalového přenosu typicky vede ke kolísavé unavitelnosti bez senzitivního deficitu. Myopatie často postihuje proximální svaly, ale existují významné výjimky."
      ],
      steps: ["Porovnejte strany a proximální i distální skupiny.", "Zkoušejte reflexy, čití, trofiku a případnou unavitelnost.", "Ověřte, zda distribuce odpovídá kořeni, nervu, centrální dráze nebo svalovému procesu."],
      compare: [["Kořen", "Myotom a dermatom; může ovlivnit svaly více periferních nervů."], ["Periferní nerv", "Motorické a senzitivní teritorium konkrétního nervu."]],
      pitfall: "Normální čití nevylučuje motorickou periferní poruchu ani poruchu nervosvalové ploténky.",
      question: "Proč izolovaná slabost dorzální flexe nohy nestačí k diagnóze léze peroneálního nervu?",
      answer: "Stejný projev může mít kořenová nebo centrální příčina. Rozhoduje širší motorický vzorec, čití, reflexy, bolest a další vyšetření.",
      sourceIds: ["exam"]
    },
    {
      id: "akutni-deficit", title: "Náhlý deficit a čas posledního zdraví", minutes: 7,
      intro: "U podezření na cévní mozkovou příhodu je čas klinická informace, ne administrativní kolonka.",
      explanation: [
        "Zásadní je čas, kdy byl člověk naposledy prokazatelně bez příznaků, nikoli pouze čas jejich nalezení. K podezření vedou náhle vzniklé poruchy řeči, hybnosti, čití, zraku či koordinace. Nízká glykemie může cévní příhodu napodobit a je rychle ověřitelná, ale její kontrola nesmí nahradit další akutní postup.",
        "Nativní CT pomáhá odlišit krvácení; časná ischemie nemusí být na něm nápadná. Další cévní nebo perfuzní zobrazení se řídí klinickým stavem a lokálním iktovým protokolem. Přechodné odeznění příznaků neznamená nízké riziko a vyžaduje urgentní posouzení možné TIA."
      ],
      steps: ["Zaznamenejte přesný čas posledního stavu bez příznaků a průběh.", "Zhodnoťte vitální funkce, glykemii a neurologický deficit.", "Neodkládejte aktivaci akutní péče kvůli čekání na spontánní zlepšení."],
      compare: [["Čas nalezení", "Okamžik, kdy si někdo deficitu všiml."], ["Poslední známý zdravý stav", "Poslední doložený čas bez nových příznaků."]],
      pitfall: "Normální časné nativní CT nevylučuje ischemickou cévní příhodu.",
      question: "Pacient se probudí s parézou. Je automaticky začátkem příhody čas probuzení?",
      answer: "Ne. Začátek je nejistý a klíčový je poslední známý stav bez příznaků. Možnosti léčby se posuzují podle akutního specialistického protokolu a zobrazovacích nálezů.",
      sourceIds: ["stroke"]
    },
    {
      id: "zavrate", title: "Závrať: čas, spouštěč, doprovod", minutes: 6,
      intro: "Pouhé rozdělení na „točení“ a „nejistotu“ často nestačí. Užitečnější je přesná časová charakteristika.",
      explanation: [
        "Odlište krátké epizody vyvolané konkrétní polohou od spontánních epizod a kontinuálního akutního vestibulárního syndromu. Pohyb hlavy zhoršuje řadu závratí; to není totéž jako krátký záchvat skutečně vyvolaný polohou. Nový neurologický deficit, výrazná porucha stoje nebo další varovné znaky zvyšují podezření na centrální příčinu.",
        "HINTS není univerzální test pro každou závrať. Má vymezené použití u vhodně vybraného akutního vestibulárního syndromu, zejména s nystagmem, a vyžaduje výcvik. Nesprávné použití u přechodných obtíží nebo nezkušeným vyšetřujícím může falešně uklidnit."
      ],
      steps: ["Zjistěte trvání, četnost a skutečné spouštěče.", "Vyšetřete chůzi, koordinaci, okohybnost a další neurologické funkce.", "Používejte cílené testy jen pro syndrom, pro který jsou určené, a v rámci vlastní kompetence."],
      compare: [["Spouštěná epizoda", "Krátký stav vznikající po konkrétním podnětu."], ["Kontinuální syndrom", "Trvající obtíže, které pohyb pouze zhoršuje."]],
      pitfall: "Absence hemiparézy nevylučuje cévní příhodu v zadním povodí.",
      question: "Proč zhoršení trvalé závrati při otočení hlavy samo nepotvrzuje benigní polohové vertigo?",
      answer: "Pohyb zhoršuje mnoho vestibulárních stavů. BPPV má typický krátký polohou vyvolaný průběh a odpovídající vyšetřovací nález, ne pouze nesnášenlivost pohybu.",
      sourceIds: ["dizziness"]
    },
    {
      id: "bolest-a-zachvat", title: "Bolest hlavy a první záchvat: varovný kontext", minutes: 7,
      intro: "Známý symptom v novém kontextu si zaslouží novou rozvahu. „Mívá migrény“ nevysvětluje každou další bolest.",
      explanation: [
        "U bolesti hlavy jsou varovné náhlý maximální začátek, nový neurologický deficit, horečka s meningeálními příznaky, změna charakteru nebo rizikový stav pacienta. K rozhodnutí patří vývoj, fyzikální nález a indikované zobrazení či další vyšetření. Chronická migréna nevylučuje sekundární příčinu nové atypické bolesti.",
        "První podezřelý epileptický záchvat vyžaduje popis události, svědeckou anamnézu a pátrání po akutní vyvolávající příčině. Jediná událost není automaticky diagnóza epilepsie. Normální EEG ji nevylučuje; EEG se interpretuje společně s klinikou. Je třeba odlišit synkopu a další neepileptické příčiny."
      ],
      steps: ["Ptejte se, co je oproti obvyklému stavu nové.", "U záchvatu rekonstruujte začátek, průběh a zotavení se svědkem.", "Nezaměňujte pomocný nález za diagnózu a nepřehlédněte akutní symptomatickou příčinu."],
      compare: [["Epileptický záchvat", "Jednotlivá klinická událost."], ["Epilepsie", "Onemocnění definované predispozicí k opakovaným neprovokovaným záchvatům podle odborných kritérií."]],
      pitfall: "Normální EEG mezi událostmi neznamená, že pacient záchvat neměl.",
      question: "Proč náhlá nejhorší bolest hlavy vyžaduje jiné uvažování než dlouhodobě stejné opakované migrény?",
      answer: "Náhlý maximální začátek je varovný znak sekundární příčiny, například krvácení. Neodkladné posouzení nesmí být nahrazeno předpokladem, že jde o další běžnou migrénu.",
      sourceIds: ["headache", "epilepsy"]
    }
  ]
};
