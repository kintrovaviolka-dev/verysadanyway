export const skinCases = [
  {
    title: "Svědivé mapy", summary: "Studentka, 22 let, má třetí den svědivé vyvýšené mapy na trupu. Je bez dušnosti, oběhově stabilní.",
    steps: [
      {
        finding: "Na fotografii z rána jsou pupeny v jiných místech než při vyšetření. Zatím nevíte, jak dlouho přetrvává jeden pupen.",
        question: "Která otázka nejvíce zpřesní morfologickou rozvahu?",
        options: ["Jak dlouho vydrží jedna konkrétní léze?", "Jaká je přesná značka pracího prášku?", "Kolik pupenů je právě na fotografii?"],
        correct: 0,
        reasons: ["Ano. Životnost jednotlivé léze rozlišuje přechodnou urtiku od fixovaného zánětlivého projevu.", "Expozice může být důležitá, ale nezačínejte předpokladem alergie. Nejdřív potřebujete charakter léze.", "Počet odhaduje rozsah, ale méně pomůže rozlišit přechodnou urtiku od fixované léze."]
      },
      {
        finding: "Jeden pupen mizí za 2–4 hodiny beze stopy, jiné vznikají vedle. Pupeny svědí a tlakem blednou.",
        question: "Která pracovní hypotéza nejlépe odpovídá průběhu?",
        options: ["Urtikariální vaskulitida", "Urtikarie", "Bakteriální celulitida"],
        correct: 1,
        reasons: ["Vaskulitidu více podporují fixované, často bolestivé léze s trváním přes 24 hodin a reziduální purpurou.", "Správně. Přechodné svědivé pupeny bez rezidua jsou typické pro urtikarii.", "Celulitida netvoří takto rychle mizející a migrující pupeny; častější je fixovaný bolestivý zánět."]
      },
      {
        finding: "Před uzavřením rozhovoru ještě ověřujete bezpečí. Jde o modelovou otázku, nikoli skutečné zhoršení pacientky.",
        question: "Který nový příznak by nejvýrazněji změnil naléhavost?",
        options: ["Další svědivý pupen na paži", "Podobný výsev včera večer", "Dušnost, změna hlasu nebo kolaps"],
        correct: 2,
        reasons: ["Nový pupen odpovídá migraci výsevu. Sám nemá stejnou váhu jako dechové či oběhové obtíže.", "Opakování patří do anamnézy, ale samo neurčuje akutní ohrožení.", "Ano. Je nutné neodkladně posoudit anafylaxi či ohrožení dýchacích cest, ne pokračovat pouze v kožní rozvaze."]
      }
    ],
    takeaway: "Sledujte jednu lézi v čase. Přechodnost podporuje urtikarii; dechové a oběhové příznaky mění prioritu.",
    sourceId: "urticaria"
  },
  {
    title: "Skvrny na bércích", summary: "Muž, 46 let, přichází s novými červenofialovými tečkami na obou bércích. Zatím je stabilní, bez horečky.",
    steps: [
      {
        finding: "Při tlaku průhledným sklíčkem projevy neblednou. Část je na pohmat lehce vyvýšená.",
        question: "Co z tohoto nálezu lze skutečně vyvodit?",
        options: ["Je to s jistotou meningokoková sepse", "Jde o purpurický charakter, příčinu musíme došetřit", "Jde určitě o neškodnou alergii"],
        correct: 1,
        reasons: ["Neblednutí neurčuje mikroorganismus ani diagnózu. Celkový stav a další nálezy jsou zásadní.", "Správně. Krev mimo cévy tlakem nezmizí. Hmatnost podporuje cévní zánět, ale není jeho definitivním důkazem.", "Alergii ani neškodnost nelze odvodit z barvy. Neblednoucí výsev si zaslouží klinické zhodnocení."]
      },
      {
        finding: "Pacient nově uvádí bolesti kloubů a tmavší moč. Výsev trvá několik dnů.",
        question: "Který směr dalšího vyšetření nejlépe navazuje?",
        options: ["Jen fotografie za měsíc", "Automatická diagnóza kontaktního ekzému", "Posouzení systémového postižení včetně moči a renálních funkcí"],
        correct: 2,
        reasons: ["Možné orgánové příznaky nejsou vhodné pro pouhé odložené fotografické sledování.", "Neblednoucí hmatná purpura s kloubními a močovými příznaky není typický popis kontaktního ekzému.", "Ano. Kožní nález může být součástí systémového procesu; vyšetření se nesmí zastavit na kůži."]
      },
      {
        finding: "Zvažujete diferenciální diagnózu hmatné purpury a vhodné potvrzení. Klinická pracovní hypotéza ještě není histologický závěr.",
        question: "Které tvrzení je nejpřesnější?",
        options: ["Rozvahu podpoří cílené laboratorní vyšetření a podle nálezu správně odebraná biopsie", "Neblednutí samo potvrzuje konkrétní vaskulitidu", "Normální teplota vylučuje všechny závažné příčiny"],
        correct: 0,
        reasons: ["Správně. Typ a stáří léze i způsob odběru mají pro histologii a případnou imunofluorescenci význam.", "Diascopie popisuje chování projevu, ne konkrétní etiologii nebo imunologický podtyp.", "Absence horečky není univerzální známka neškodnosti; zejména orgánové příznaky zůstávají důležité."]
      }
    ],
    takeaway: "Neblednoucí a hmatná léze je vodítko. Ptejte se po systémových příznacích a nepřeskakujte od nálezu k jisté etiologii.",
    sourceId: "purpura"
  },
  {
    title: "Exantém po léčivu", summary: "Žena, 38 let, má po nově nasazeném léku symetrický výsev na trupu. Léčivo začala užívat před dvanácti dny.",
    steps: [
      {
        finding: "Fotografie ukazuje červené makuly a papuly. Z fotografie nelze určit bolest, stav sliznic ani celkový stav.",
        question: "Co potřebujete zjistit před označením za běžný exantém?",
        options: ["Pouze přesný odstín červené", "Bolest kůže, slizniční projevy, horečku a orgánové příznaky", "Jestli fotografie vznikla při denním světle"],
        correct: 1,
        reasons: ["Barva může pomoci popisu, ale nevyřeší varovné klinické příznaky.", "Ano. Tyto informace odlišují nekomplikovaný výsev od podezření na závažnou reakci.", "Technika fotografie je užitečná, ale nemůže nahradit posouzení příznaků a stavu."]
      },
      {
        finding: "Pacientka udává bolest kůže, horečku a nově bolestivé eroze v ústech.",
        question: "Jak se mění priorita?",
        options: ["Stačí zkusit nový kosmetický krém", "Vyčkat týden, zda se vytvoří více puchýřů", "Urgentní odborné zhodnocení závažné lékové reakce"],
        correct: 2,
        reasons: ["Kosmetická intervence neřeší možnost závažné kožní reakce a nemá odložit akutní vyšetření.", "Čekání na další vývoj při varovných znacích může oddálit potřebnou akutní péči.", "Správně. Kožní bolest, sliznice a horečka vyžadují neodkladné vyšetření; fotografický dojem nestačí."]
      },
      {
        finding: "Při předání potřebujete popsat časový průběh a medikaci. Nejde o návod k samostatné léčbě.",
        question: "Které předání je nejhodnotnější?",
        options: ["Názvy všech léčiv, začátky i ukončení, vývoj příznaků a varovné známky", "Pouze „alergie na léky“", "Znovu podat podezřelý lék, aby se ověřila souvislost"],
        correct: 0,
        reasons: ["Ano. Přesná časová osa včetně vysazených přípravků pomůže určit možného původce a závažnost.", "Obecný štítek ztrácí klinicky důležité informace a může nesprávně vyloučit nesouvisející přípravky.", "Při podezření na závažnou reakci je neřízená opakovaná expozice nebezpečná a není diagnostickým krokem."]
      }
    ],
    takeaway: "Nejdřív bezpečí a varovné příznaky, potom hledání původce. Přesná léková časová osa má větší cenu než obecný štítek alergie.",
    sourceId: "drug"
  }
];
