export default {
  title: "Dermatologie",
  legacy: "#cards-grid",
  lab: "skin",
  labTitle: "Dermatologické kazuistiky",
  labLead: "Tři postupné případy s diferenciální rozvahou a vysvětlením jednotlivých možností.",
  sources: [
    { id: "morphology", label: "DermNet: Terminology in dermatology", url: "https://dermnetnz.org/topics/terminology" },
    { id: "urticaria", label: "DermNet: Urticaria — an overview", url: "https://dermnetnz.org/topics/urticaria-an-overview" },
    { id: "purpura", label: "DermNet: Purpura", url: "https://dermnetnz.org/topics/purpura" },
    { id: "drug", label: "DermNet: Morbilliform drug reaction", url: "https://dermnetnz.org/topics/morbilliform-drug-reaction" },
    { id: "melanoma", label: "DermNet: ABCDEs of melanoma", url: "https://dermnetnz.org/topics/abcdes-of-melanoma" },
    { id: "eczema", label: "DermNet: Contact dermatitis", url: "https://dermnetnz.org/topics/contact-dermatitis" }
  ],
  lessons: [
    {
      id: "popis", title: "Od eflorescence k pracovní hypotéze", minutes: 6,
      intro: "„Červená vyrážka“ není diagnóza ani dostatečný popis. Strukturovaný nález zpřesňuje uvažování i předání pacienta.",
      explanation: [
        "Primární eflorescence zachycuje základní proces: makula mění barvu bez elevace, papula je drobná solidní elevace, vezikula obsahuje tekutinu a pustula hnisavý obsah. Plak označuje plošně vyvýšené ložisko. Sekundární změny, například krusta, šupina a exkoriace, mohou původní obraz překrýt.",
        "K popisu přidejte lokalizaci, symetrii, ohraničení, povrch, uspořádání a příznaky. Prohlédnutí sliznic, nehtů a kštice může změnit pracovní diagnózu. Distribuce ve flexurách, na extenzorech, v dermatomu či v místě kontaktu není dekorativní detail, ale vodítko k mechanismu."
      ],
      steps: ["Určete nejméně změněnou primární lézi a popište ji bez názvu nemoci.", "Doplňte distribuci a časový vývoj jedné léze i celého výsevu.", "Zformulujte dvě možné příčiny a znak, který je od sebe odliší."],
      compare: [["Šupina", "Viditelné odlučování rohové vrstvy."], ["Krusta", "Zaschlé sérum, krev či hnis; může zakrývat erozi."]],
      pitfall: "Pustula nemusí znamenat bakteriální infekci. Morfologie popisuje nález, nikoli automaticky etiologii.",
      question: "Jaký údaj chybí ve větě „pacient má svědivé papuly“ pro smysluplnou diferenciální diagnostiku?",
      answer: "Především lokalizace a distribuce, trvání, vývoj jednotlivých lézí, expozice a doprovodné příznaky. Stejná eflorescence může vzniknout u více různých chorob.",
      sourceIds: ["morphology"]
    },
    {
      id: "erytem", title: "Erytém, purpura a tlak sklíčkem", minutes: 5,
      intro: "Změna barvy může pocházet z krve v cévách, krve mimo cévy nebo z pigmentu. Diaskopie pomáhá tyto možnosti rozlišit.",
      explanation: [
        "Erytém při rozšíření cév obvykle při tlaku bledne, protože krev lze z drobných cév vytlačit. Purpura vzniká extravazací erytrocytů a tlakem nemizí. Petechie jsou drobné purpurické tečky, větší projevy se označují jako ekchymózy; velikost sama ale nevysvětluje příčinu.",
        "Hmatná purpura podporuje podezření na zánět drobných cév, není však sama o sobě konečnou diagnózou. Rozvahu mění horečka, rychlost výsevu, krvácení jinde, bolesti břicha, kloubů nebo renální projevy. Neblednoucí výsev u celkově nemocného pacienta je varovný nález vyžadující urgentní posouzení."
      ],
      steps: ["Zkontrolujte blednutí a pohmatový charakter, pokud to situace umožňuje.", "Zhodnoťte celkový stav dříve než kosmetickou podobu výsevu.", "Ptejte se na infekci, léčiva, krvácení a orgánové příznaky."],
      compare: [["Blednoucí erytém", "Často vazodilatace; nevylučuje závažný stav v časné fázi."], ["Neblednoucí purpura", "Krev mimo cévní lumen; příčina může být cévní, destičková i jiná."]],
      pitfall: "Negativní domácí „skleničkový test“ není spolehlivé vyloučení závažné infekce.",
      question: "Proč neblednutí neříká, zda má pacient vaskulitidu, trombocytopenii nebo infekci?",
      answer: "Test ukazuje chování krve v kůži, ne příčinu extravazace. Rozlišení vyžaduje anamnézu, celkový stav a cílené vyšetření.",
      sourceIds: ["purpura", "morphology"]
    },
    {
      id: "urtika", title: "Kopřivka: sledujte jednu lézi", minutes: 6,
      intro: "Rozdíl mezi „vyrážka trvá týden“ a „jeden pupen trvá týden“ může změnit celou diagnózu.",
      explanation: [
        "Urtika je přechodný otok povrchové dermis, obvykle svědivý a blednoucí. Jednotlivý pupen zpravidla mizí do 24 hodin bez rezidua, zatímco nové mohou vznikat jinde. Angioedém zasahuje hlubší tkáně a může trvat déle; nemusí být provázen kopřivkou ani stejným mechanismem.",
        "Přetrvávání jedné léze déle než 24 hodin, bolest nebo následná purpura vedou k úvaze o urtikariální vaskulitidě a dalších napodobujících stavech. Kopřivka společně s dechovými či oběhovými obtížemi nesmí být zredukována na kožní problém: je nutné posoudit anafylaxi."
      ],
      steps: ["Zjistěte životnost jednoho konkrétního pupenu, případně využijte časované fotografie.", "Odlište svědění od bolesti a pátrejte po reziduální pigmentaci či purpuře.", "Při otoku zhodnoťte hlas, dýchání, polykání a oběhové příznaky."],
      compare: [["Běžná urtika", "Migruje, jednotlivě obvykle do 24 hodin mizí."], ["Podezření na vaskulitidu", "Fixované, často bolestivé léze s purpurou či reziduem."]],
      pitfall: "Ne každá chronická kopřivka je potravinová alergie. Neřízené eliminační diety mohou být zbytečně zatěžující.",
      question: "Pacient má výsevy dva týdny, ale každý pupen mizí za několik hodin. Je to proti diagnóze urtikarie?",
      answer: "Ne. Rozhodující je krátké trvání jednotlivé léze, nikoli celková doba opakovaných výsevů. Pro označení chronické urtikarie se obvykle používá hranice šesti týdnů.",
      sourceIds: ["urticaria"]
    },
    {
      id: "ekzem", title: "Ekzém, kontakt a porušená bariéra", minutes: 6,
      intro: "Zánět kůže a porucha bariéry se vzájemně posilují. Samotný vzhled často neurčí, zda jde o iritační, nebo alergický mechanismus.",
      explanation: [
        "Iritační kontaktní dermatitida vzniká poškozením bariéry například opakovaným mytím, detergenty a mokrou prací. Alergická kontaktní dermatitida je opožděná imunitní reakce po senzibilizaci. Oba mechanismy se mohou kombinovat a projevy se mohou šířit i mimo zřejmé místo kontaktu.",
        "Akutní ekzém může mokvat a tvořit vezikuly, chronický bývá zhrubělý, šupinatý a s ragádami. Základem rozvahy je mapa expozic, pracovní i domácí režim a časový vztah. Epikutánní testy slouží k vyšetření kontaktní alergie; nejsou totéž co prick testy pro okamžitou hypersenzitivitu."
      ],
      steps: ["Zmapujte kosmetiku, rukavice, kovy, dezinfekci i pracovní materiály.", "Popište akutní a chronické změny a zvažte sekundární infekci.", "Vysvětlete ochranu bariéry a potřebu cíleného vyšetření namísto náhodného střídání přípravků."],
      compare: [["Iritační dermatitida", "Nevyžaduje předchozí alergickou senzibilizaci."], ["Alergická kontaktní dermatitida", "Vyžaduje senzibilizaci a souvislost s konkrétním alergenem."]],
      pitfall: "Pozitivní epikutánní test má význam teprve po posouzení, zda odpovídá reálné expozici a nálezu.",
      question: "Proč rukavice nemusí ekzém rukou automaticky vyřešit?",
      answer: "Mohou zvyšovat vlhkost a okluzi nebo obsahovat relevantní alergeny. Důležitý je materiál, způsob používání, délka expozice a péče o bariéru.",
      sourceIds: ["eczema"]
    },
    {
      id: "lekovy-vysev", title: "Lékový exantém a varovné příznaky", minutes: 7,
      intro: "Nejdůležitější otázka není jen „který lék?“, ale také „je to ještě nekomplikovaný výsev?“",
      explanation: [
        "Morbilliformní lékový exantém bývá symetrický, často začíná na trupu a může svědit. Při prvním podání se obvykle objevuje s odstupem dnů až týdnů; při opakované expozici může nastoupit rychleji. Do časové osy patří i léky již vysazené a volně prodejné přípravky.",
        "Kožní bolest, puchýře, slizniční eroze, vysoká horečka, otok obličeje nebo známky orgánového postižení vyžadují urgentní odborné zhodnocení. SJS/TEN a DRESS nejsou jen rozsáhlejší běžná vyrážka. Jejich rozlišení potřebuje celkový nález, laboratorní vyšetření a někdy biopsii."
      ],
      steps: ["Sestavte časovou osu všech nových léčiv a vývoje obtíží.", "Vyšetřete sliznice a cíleně pátrejte po bolesti kůže a systémových příznacích.", "Při varovných znacích neodkládejte akutní péči kvůli čekání na fotografickou konzultaci."],
      compare: [["Nekomplikovaný exantém", "Bez slizničních erozí a orgánového postižení; i tak potřebuje posouzení."], ["Závažná kožní reakce", "Bolest, puchýře, sliznice či systémové projevy mění naléhavost."]],
      pitfall: "Normální fotografie nehodnotí dýchání, krevní tlak, bolest ani orgánové poškození.",
      question: "Co změní naléhavost u pacienta se symetrickým exantémem po novém léku?",
      answer: "Zejména bolest kůže, puchýře, slizniční eroze, horečka, otok obličeje a orgánové příznaky. Tyto znaky vyžadují urgentní zhodnocení závažné lékové reakce.",
      sourceIds: ["drug"]
    },
    {
      id: "pigment", title: "Pigmentové léze: změna je informace", minutes: 6,
      intro: "ABCDE je pomůcka pro podezření, nikoli domácí test, kterým lze melanom bezpečně vyloučit.",
      explanation: [
        "Asymetrie, nepravidelný okraj, variabilní barva, větší průměr a vývoj v čase patří mezi klasická vodítka. Malá léze však může být maligní a některé melanomy nejsou pigmentované. Důležitý je také znak ošklivého káčátka: léze odlišná od ostatních névů konkrétního člověka.",
        "Nodulární léze může růst rychle a nemusí splňovat všechny znaky ABCDE. Dermatoskopie zvyšuje diagnostické možnosti v rukou zkušeného vyšetřujícího; definitivní posouzení podezřelé léze se opírá o histologii. Fotografie má hodnotu pro sledování změn, ale nenahrazuje vyšetření."
      ],
      steps: ["Porovnejte lézi s ostatními a ptejte se na skutečnou změnu v čase.", "Zaznamenejte krvácení, růst a nové obtíže, nikoli jen aktuální průměr.", "Podezřelou lézi směřujte k odbornému zhodnocení; neřešte ji destruktivním kosmetickým výkonem bez diagnózy."],
      compare: [["ABCDE", "Strukturovaná pomůcka k zachycení podezřelých znaků."], ["Histologie", "Posouzení odebrané tkáně potřebné pro definitivní diagnózu."]],
      pitfall: "Průměr pod 6 mm ani pravidelné zbarvení samy o sobě melanom nevylučují.",
      question: "Proč může být nová rychle rostoucí růžová papula důležitá, i když není tmavá?",
      answer: "Některé maligní léze včetně amelanotického melanomu nemají typický pigment. Vývoj a odlišnost od ostatních projevů jsou důvodem k odbornému posouzení.",
      sourceIds: ["melanoma"]
    }
  ]
};
