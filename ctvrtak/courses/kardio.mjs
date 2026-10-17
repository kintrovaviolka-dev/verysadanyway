export default {
  title: "Kardiologie",
  legacy: "#modules-view",
  lab: "hemodynamics",
  labTitle: "Srdeční objemy a výdej",
  labLead: "Vztah EDV, ESV, ejekční frakce, tepového objemu a srdeční frekvence.",
  sources: [
    { id: "physiology", label: "CV Physiology: Regulation of Stroke Volume", url: "https://cvphysiology.com/cardiac-function/cf002" },
    { id: "syncope", label: "ESC: 2018 Syncope Guidelines", url: "https://doi.org/10.1093/eurheartj/ehy037" },
    { id: "acs", label: "ESC: 2023 Acute Coronary Syndromes", url: "https://doi.org/10.1093/eurheartj/ehad191" },
    { id: "hf", label: "ESC: 2021 Heart Failure Guidelines", url: "https://doi.org/10.1093/eurheartj/ehab368" },
    { id: "af", label: "ESC: 2024 Atrial Fibrillation Guidelines", url: "https://doi.org/10.1093/eurheartj/ehae176" },
    { id: "valves", label: "ESC/EACTS: 2021 Valvular Heart Disease Guidelines", url: "https://doi.org/10.1093/eurheartj/ehab395" }
  ],
  lessons: [
    {
      id: "objemy", title: "EF, tepový objem a výdej", minutes: 6,
      intro: "Ejekční frakce je poměr, ne množství krve. Vždy se ptejte: podíl z jakého objemu?",
      explanation: [
        "Tepový objem je rozdíl mezi enddiastolickým a endsystolickým objemem. Ejekční frakce vyjadřuje, jaký podíl enddiastolického objemu byl vypuzen. Srdeční výdej zohledňuje ještě frekvenci. Malá komora může mít normální EF, ale malý tepový objem; dilatovaná komora může při nízké EF vypuzovat podobný absolutní objem.",
        "Preload souvisí s napětím vláken před kontrakcí, afterload se zátěží při vypuzování. Objem není totožný s plnicím tlakem: tuhá komora může mít vysoký tlak při relativně malém objemu. EF je navíc závislá na zatížení, takže sama neměří čistou kontraktilitu a nevylučuje srdeční selhání."
      ],
      steps: ["Spočítejte tepový objem jako EDV minus ESV.", "Teprve potom vyjádřete EF v procentech a výdej v litrech za minutu.", "Výsledek propojte s příznaky kongesce, perfuzí, chlopenním nálezem a velikostí komory."],
      compare: [["EF", "Poměr vypuzeného objemu k EDV; bezrozměrný údaj v procentech."], ["Srdeční výdej", "Objem za minutu; závisí na tepovém objemu i frekvenci."]],
      pitfall: "Při významné regurgitaci není celkový tepový objem totožný s dopředným výdejem.",
      question: "Komora A: EDV 140 ml, ESV 56 ml. Komora B: EDV 70 ml, ESV 28 ml. Co je stejné a co odlišné?",
      answer: "Obě mají EF 60 %. A vypudí 84 ml, B jen 42 ml. Při stejné frekvenci je výdej B poloviční; samotná EF tento rozdíl skryje.",
      sourceIds: ["physiology", "hf"]
    },
    {
      id: "bolest", title: "Bolest na hrudi: neuzavřít příliš brzy", minutes: 7,
      intro: "První normální EKG ani první normální troponin nejsou univerzální propustka domů.",
      explanation: [
        "Při akutní bolesti nejprve hodnotíme stabilitu, časový průběh a bezprostředně nebezpečné příčiny. Vedle akutního koronárního syndromu patří do rozvahy akutní aortální syndrom, plicní embolie, tenzní pneumotorax nebo jiné závažné stavy podle nálezu. Typická bolest zvyšuje podezření, atypický popis však ischemii nevylučuje.",
        "Troponin je marker poškození myokardu, ne automatický důkaz koronární trombózy. Infarkt vyžaduje dynamiku poškození spolu s důkazem ischemie v odpovídajícím kontextu. Intervaly odběrů a rozhodovací hranice závisejí na použitém testu a validovaném algoritmu; nelze přenášet jedno číslo mezi laboratořemi."
      ],
      steps: ["Zhodnoťte vitální funkce, příznaky šoku a čas od začátku obtíží.", "EKG interpretujte v kontextu; při trvajícím podezření je důležité opakování a srovnání.", "Sériový troponin spojte s klinickým obrazem, nikoli s univerzální internetovou hranicí."],
      compare: [["Poškození myokardu", "Zvýšení troponinu; může mít ischemické i neischemické příčiny."], ["Infarkt myokardu", "Akutní poškození plus důkaz ischemie."]],
      pitfall: "Pozitivní troponin u sepse nebo tachyarytmie automaticky neznamená infarkt 1. typu.",
      question: "Proč je u časně přicházejícího pacienta jeden negativní troponin nedostatečný?",
      answer: "Odběr může předcházet detekovatelnému vzestupu. Další postup závisí na době obtíží, klinické pravděpodobnosti, EKG a konkrétním validovaném laboratorním algoritmu.",
      sourceIds: ["acs"]
    },
    {
      id: "dusnost", title: "Dušnost: kongesce versus hypoperfuze", minutes: 6,
      intro: "Pacient může být zavodněný, špatně perfundovaný, obojí, nebo ani jedno. Tyto osy nesplývají.",
      explanation: [
        "Kongesce se může projevit ortopnoí, zvýšenou náplní krčních žil, otoky či plicními chrůpky. Hypoperfuzi podporují chladné periferie, oligurie, porucha vědomí a známky oběhové nestability. Jediný znak má omezenou výpověď, proto se hodnotí jejich soubor a vývoj.",
        "Srdeční selhání je klinický syndrom; samotná dušnost ani nízká EF diagnózu nevyčerpávají. Natriuretické peptidy a echokardiografie pomáhají, ale výsledky mění věk, renální funkce, fibrilace síní či obezita. Je nutné hledat spouštěč zhoršení: ischemii, infekci, arytmii, chlopenní problém nebo změnu medikace."
      ],
      steps: ["Oddělte známky zadržování tekutin od známek nedostatečné perfuze.", "Vyhledejte spouštěč a nekardiální příčiny dušnosti.", "Sledujte změnu klinického stavu a orgánových funkcí, ne jen jednu hodnotu EF."],
      compare: [["Kongesce", "Zvýšené plnicí tlaky a hromadění tekutin."], ["Hypoperfuze", "Nedostatečný průtok orgány; může vzniknout i bez nápadných otoků."]],
      pitfall: "Zachovaná EF nevylučuje srdeční selhání a otoky nemusejí mít srdeční původ.",
      question: "Má pacient s normální EF a ortopnoí automaticky nekardiální dušnost?",
      answer: "Ne. Je třeba posoudit plnicí tlaky, strukturální změny, chlopně, rytmus a alternativní příčiny. Srdeční selhání se může vyskytovat i se zachovanou EF.",
      sourceIds: ["hf"]
    },
    {
      id: "arytmie", title: "Arytmie: nejprve pacient, potom název", minutes: 7,
      intro: "Přesný mechanismus rytmu je důležitý, ale u nestabilního pacienta nesmí zdržet neodkladné řešení.",
      explanation: [
        "Systematický popis EKG zahrnuje frekvenci, pravidelnost, šířku QRS a vztah síňové a komorové aktivity. Hemodynamická tolerance se neposuzuje jen podle čísla frekvence: důležité jsou hypotenze, porucha vědomí, ischemické obtíže a akutní srdeční selhání.",
        "Fibrilace síní přidává dvě oddělené otázky: jak řešit symptomy a rytmus a jak snížit tromboembolické riziko. Obnovení sinusového rytmu samo neruší potřebu posouzení antikoagulace. Širokokomplexová tachykardie vyžaduje opatrnost; nesprávné předpokládání supraventrikulárního původu může být nebezpečné."
      ],
      steps: ["Přiřaďte rytmu klinickou stabilitu a hledejte reverzibilní spouštěče.", "Popište QRS a pravidelnost dříve, než vyslovíte konkrétní diagnózu.", "U fibrilace síní oddělte kontrolu symptomů od prevence tromboembolie."],
      compare: [["Kontrola frekvence / rytmu", "Řeší toleranci arytmie a symptomy."], ["Prevence tromboembolie", "Řídí se individuálním rizikem a kontextem, ne pouze aktuálním EKG."]],
      pitfall: "Nepravidelná širokokomplexová tachykardie může znamenat preexcitovanou fibrilaci síní; nejde o rutinní situaci pro blokádu AV uzlu.",
      question: "Proč sinusový rytmus po kardioverzi automaticky neznamená možnost ukončit antikoagulaci?",
      answer: "Riziko souvisí i s pacientem, trváním arytmie, okolnostmi výkonu a možností recidivy. Další postup vyžaduje posouzení podle aktuálních doporučení a klinického kontextu.",
      sourceIds: ["af"]
    },
    {
      id: "selest", title: "Šelest jako stopa, ne měřítko závažnosti", minutes: 6,
      intro: "Hlasitý šelest nemusí znamenat nejtěžší vadu. Při nízkém průtoku může být závažná vada překvapivě tichá.",
      explanation: [
        "Popis šelestu zahrnuje fázi srdečního cyklu, maximum, propagaci, charakter a změnu s manévry. U aortální stenózy je typický systolický ejekční šelest s propagací do karotid, u mitrální regurgitace holosystolický šelest s maximem na hrotu; skutečné nálezy ale nemusí být učebnicové.",
        "Echokardiografické hodnocení kombinuje anatomii, rychlosti, gradienty, plochu ústí či parametry regurgitace a dopad na srdeční oddíly. Průtok ovlivňuje měřené hodnoty. Akutní těžká regurgitace může způsobit plicní edém bez dlouhodobé dilatace komory, zatímco chronická vada může být dlouho kompenzovaná."
      ],
      steps: ["Zařaďte šelest do systoly nebo diastoly a popište místo a propagaci.", "Spojte nález se synkopou, dušností, bolestí a známkami selhání.", "Na echu hledejte soulad více parametrů; nesuďte podle jediné rychlosti."],
      compare: [["Akutní regurgitace", "Rychlý vzestup tlaků bez času pro adaptaci."], ["Chronická regurgitace", "Objemová adaptace může dlouho maskovat zhoršování."]],
      pitfall: "Normální či vysoká EF u regurgitační vady nemusí znamenat normální dopřednou funkci.",
      question: "Proč může mít pacient s akutní těžkou mitrální regurgitací nedilatovanou levou komoru?",
      answer: "Komora ještě neměla čas projít chronickou objemovou remodelací. Akutní tlaková zátěž levé síně a plicního řečiště může přesto vyvolat dramatický stav.",
      sourceIds: ["valves", "physiology"]
    },
    {
      id: "synkopa", title: "Synkopa: mechanismus a rizikový kontext", minutes: 6,
      intro: "Krátká ztráta vědomí je popis události. Synkopa konkrétně vzniká přechodnou globální hypoperfuzí mozku.",
      explanation: [
        "Reflexní synkopa může mít spouštěč, vegetativní prodromy a rychlou úpravu. Ortostatická souvisí s poklesem tlaku po postavení, často za účasti dehydratace nebo medikace. Kardiální příčina je závažnější zejména při známém strukturálním onemocnění, arytmii nebo události při námaze či vleže.",
        "Anamnéza svědka pomáhá odlišit synkopu, epileptický záchvat a další příčiny. Krátké záškuby se mohou objevit i při synkopě, takže samy epilepsii neprokazují. Podstatné jsou okolnosti, délka bezvědomí, zotavení, poranění a přidružené příznaky; základní vyšetření zahrnuje klinické zhodnocení a EKG."
      ],
      steps: ["Rekonstruujte situaci před událostí, během ní a po ní, ideálně se svědkem.", "Hledejte námahový či klidový vznik, palpitace a rodinnou anamnézu náhlé smrti.", "Uvažujte o medikaci a ortostáze, ale nepřehlédněte strukturální či elektrickou příčinu."],
      compare: [["Rychlá úplná úprava", "Podporuje synkopu, ale sama neurčuje její příčinu."], ["Dlouhá zmatenost po události", "Vede k širší diferenciální rozvaze včetně epileptického záchvatu."]],
      pitfall: "Normální jednorázové EKG nevylučuje intermitentní arytmii.",
      question: "Proč má synkopa při námaze jinou váhu než kolaps po dlouhém stání v horku?",
      answer: "Námahová událost zvyšuje podezření na strukturální srdeční překážku nebo arytmii. Kontext mění riziko i potřebnou naléhavost vyšetření.",
      sourceIds: ["syncope"]
    }
  ]
};
