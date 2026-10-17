export default {
  title: "Psychiatrie",
  legacy: "#main-content",
  sources: [
    { id: "delirium", label: "NICE CG103: Delirium", url: "https://www.nice.org.uk/guidance/cg103/chapter/Recommendations" },
    { id: "depression", label: "NICE NG222: Depression in adults", url: "https://www.nice.org.uk/guidance/ng222/chapter/Recommendations" },
    { id: "bipolar", label: "NICE CG185: Bipolar disorder", url: "https://www.nice.org.uk/guidance/cg185/chapter/Recommendations" },
    { id: "psychosis", label: "NICE CG178: Psychosis and schizophrenia", url: "https://www.nice.org.uk/guidance/cg178/chapter/Recommendations" },
    { id: "harm", label: "NICE NG225: Self-harm — assessment and management", url: "https://www.nice.org.uk/guidance/ng225/chapter/Recommendations" },
    { id: "care", label: "WHO: mhGAP guideline, third edition", url: "https://www.who.int/publications/i/item/9789240084278" }
  ],
  lessons: [
    {
      id: "rozhovor", title: "Rozhovor, pozorování a formulace", minutes: 7,
      intro: "Psychiatrický nález není seznam zaškrtnutých příznaků. Je to popis aktuálního stavu zasazený do života člověka.",
      explanation: [
        "Rozhovor začíná otevřenou otázkou a pacientovým vlastním popisem potíží. Cíleně doplňujeme časový průběh, dopad na fungování, spánek, náladu, vnímání, myšlení, návykové látky a somatické obtíže. Pozorujeme kontakt, psychomotoriku a řeč; oddělujeme přímé pozorování od informace pacienta a od vlastní interpretace.",
        "Biopsychosociální formulace vysvětluje, co člověka predisponuje, co potíže spustilo, co je udržuje a co chrání. Nenahrazuje diagnostiku, ale propojuje ji s plánem péče. Pracujeme s pacientovým cílem a preferencemi, srozumitelně vysvětlujeme důvěrnost i její zákonné limity při bezprostředním ohrožení."
      ],
      steps: ["Nechte pacienta nejprve vyjádřit hlavní problém vlastními slovy.", "Doplňte čas, funkční dopad, somatiku a látky bez hodnotících soudů.", "Shrňte pracovní porozumění a ověřte, že pacient shrnutí rozumí."],
      compare: [["Popis", "Pacient říká, že slyší hlas, když je sám."], ["Interpretace", "Hypotéza o poruše vnímání, kterou je třeba dále objasnit."]],
      pitfall: "Nesouhlas s lékařem sám o sobě neznamená chybění náhledu ani neschopnost rozhodovat.",
      question: "Co přidává biopsychosociální formulace nad samotný diagnostický štítek?",
      answer: "Propojuje zranitelnost, spouštěče, udržující faktory a zdroje podpory. Pomáhá vytvořit individuální plán a vysvětlit, proč má konkrétní intervence smysl.",
      sourceIds: ["care", "psychosis"]
    },
    {
      id: "delirium", title: "Delirium není „jen zmatenost“", minutes: 7,
      intro: "Nově vzniklá porucha pozornosti s kolísáním stavu je signál k hledání akutní tělesné příčiny.",
      explanation: [
        "Delirium se rozvíjí akutně nebo subakutně a typicky kolísá. Porucha pozornosti je klíčová; přidává se změna bdělosti a dalších kognitivních funkcí. Hypoaktivní forma může vypadat jen jako ospalost nebo nezájem a bývá snadno přehlédnuta. Demence může být rizikovým podkladem, na který se delirium nasedá.",
        "Pátráme po infekci, hypoxii, metabolické poruše, bolesti, retenci, změně medikace či odnětí návykové látky. Orientační nástroj, například 4AT ve vhodném prostředí, podporuje detekci, ale nenahrazuje klinické posouzení. Součástí péče je reorientace, zajištění sluchu a zraku, spánkového režimu a bezpečí."
      ],
      steps: ["Zjistěte obvyklý stav od blízkých a čas změny.", "Vyšetřete pozornost, bdělost a kolísání, nejen orientaci místem.", "Hledejte a řešte vyvolávající příčiny; pouhé utlumení pacienta problém neřeší."],
      compare: [["Delirium", "Akutní změna a kolísání, často výrazná porucha pozornosti."], ["Demence", "Typicky dlouhodobý pokles; akutní zhoršení vyžaduje hledat další příčinu."]],
      pitfall: "Klidný a málo reagující pacient může mít hypoaktivní delirium, nikoli pouze únavu.",
      question: "Proč u člověka s demencí nelze novou dezorientaci automaticky připsat progresi?",
      answer: "Náhlá změna může znamenat delirium nasedající na demenci. Je třeba porovnat stav s obvyklým fungováním a hledat akutní, často léčitelné příčiny.",
      sourceIds: ["delirium"]
    },
    {
      id: "nalada", title: "Deprese, zármutek a bipolarita", minutes: 7,
      intro: "Aktuální skleslost je začátek rozhovoru, nikoli jeho diagnostický závěr.",
      explanation: [
        "Při hodnocení depresivních příznaků sledujeme trvání, anhedonii, energii, spánek, kognitivní a somatické změny i funkční dopad. Zármutek a depresivní porucha se mohou překrývat; kontext ztráty neznamená automaticky nepřítomnost závažné deprese. Diagnózu neurčuje samotné skóre dotazníku.",
        "Před uzavřením unipolární deprese se ptáme na období neobvykle zvýšené či podrážděné nálady s větší aktivitou, sníženou potřebou spánku a změnami chování. Hypomanie nemusí být pacientem vnímána jako problém. Důležitá je longitudinální anamnéza, rodinné souvislosti, látky a informace od blízkých se souhlasem pacienta."
      ],
      steps: ["Zmapujte příznaky, trvání a schopnost fungovat.", "Cíleně se ptejte na dřívější období aktivace a snížené potřeby spánku.", "Proberte bezpečí, podpůrné vztahy a možnosti společného léčebného plánu."],
      compare: [["Nespavost", "Člověk chce spát, ale nemůže a bývá unavený."], ["Snížená potřeba spánku", "Spí málo, přesto se cítí nezvykle aktivní; důležité vodítko k aktivaci."]],
      pitfall: "Antidepresivum není univerzální odpověď na každou skleslost; bipolární průběh mění léčebnou rozvahu.",
      question: "Proč je otázka „bylo někdy období, kdy jste potřeboval/a výrazně méně spánku?“ užitečnější než jen „měl/a jste mánii?“",
      answer: "Pacient nemusí znát termín mánie ani považovat zvýšenou aktivitu za nemoc. Konkrétní změny spánku a chování pomáhají zachytit relevantní minulou epizodu.",
      sourceIds: ["depression", "bipolar"]
    },
    {
      id: "psychoza", title: "Psychotické příznaky nejsou jedna diagnóza", minutes: 7,
      intro: "Halucinace či blud vyžadují popis a kontext. Automatický závěr „schizofrenie“ je předčasný.",
      explanation: [
        "Halucinace je vjem bez odpovídajícího zevního podnětu, iluze mylné zpracování existujícího podnětu. Blud hodnotíme v kulturním a situačním kontextu, s ohledem na přesvědčení, korigovatelnost a dopad. Zkoumáme také formu myšlení, náladu, kognici a funkční vývoj.",
        "Psychotické příznaky mohou provázet afektivní poruchu, intoxikaci, odnětí látky, neurologické či jiné somatické onemocnění. Akutní porucha pozornosti a kolísání vede k podezření na delirium. V komunikaci je vhodné uznat tíseň, ale nepotvrzovat neověřený obsah přesvědčení ani se nepouštět do konfrontačního dokazování."
      ],
      steps: ["Ptejte se neutrálně na konkrétní prožitek a jeho dopad.", "Zmapujte čas, náladu, pozornost, látky, léky a somatický stav.", "Vyhodnoťte bezpečí a nabídněte srozumitelný plán dalšího vyšetření."],
      compare: [["Validace emocí", "Rozumím, že je pro vás tato zkušenost děsivá."], ["Potvrzení obsahu", "Tvrdit bez důkazu, že sledování či pronásledování skutečně probíhá."]],
      pitfall: "Není správné člověka zesměšnit ani automaticky souhlasit s jeho přesvědčením.",
      question: "Jak reagovat na větu „někdo mě sleduje“, aniž potvrdíte blud nebo ztratíte kontakt?",
      answer: "Uznat prožívaný strach, klidně popsat, že tuto skutečnost nemůžete potvrdit, a zaměřit se na bezpečí, obtíže a nabídku pomoci.",
      sourceIds: ["psychosis", "delirium"]
    },
    {
      id: "bezpeci", title: "Bezpečí bez falešné jistoty skóre", minutes: 6,
      intro: "Citlivá přímá otázka na sebevražedné myšlenky je součástí péče, nikoli něco, čemu je vhodné se vyhnout.",
      explanation: [
        "Hodnocení zahrnuje aktuální myšlenky, naléhavost, záměr, předchozí jednání, dostupnost podpory, intoxikaci a schopnost přijmout pomoc. Rozhovor má být nehodnotící a konkrétní. Rizikové i ochranné faktory se mění v čase; jeden ochranný faktor nemůže vyloučit bezprostřední ohrožení.",
        "Predikční škála ani rozdělení na nízké, střední a vysoké riziko nemají samy rozhodovat o propuštění nebo přístupu k léčbě. Důležitá je individuální formulace, společný bezpečnostní plán a návaznost péče. Při bezprostředním ohrožení má přednost neodkladná odborná pomoc a zajištění bezpečí."
      ],
      steps: ["Ptejte se přímo a empaticky, bez zlehčování a bez moralizování.", "Hodnoťte aktuální situaci, dostupnou podporu a potřebu neodkladné pomoci.", "Vytvořte konkrétní návaznost: s kým se spojit, kam se obrátit a kdy bude další kontakt."],
      compare: [["Bezpečnostní plán", "Společně vytvořené konkrétní kroky a kontakty pro zhoršení."], ["Pouhý slib", "Není zárukou bezpečí ani náhradou klinického posouzení."]],
      pitfall: "Zápis „popírá suicidální myšlenky“ bez širšího kontextu nenahrazuje zhodnocení bezpečí.",
      question: "Proč nízké skóre samo neopravňuje k závěru, že je propuštění bezpečné?",
      answer: "Skóre neumí spolehlivě předpovědět individuální jednání a nezachycuje celý kontext. Rozhoduje klinické posouzení, aktuální potřeby, podpora a reálný plán následné péče.",
      sourceIds: ["harm", "depression"]
    },
    {
      id: "lecba", title: "Léčebný plán: účinek, zátěž, preference", minutes: 7,
      intro: "Úspěch není jen menší počet příznaků. Důležité je fungování, přijatelnost léčby a pacientův vlastní cíl.",
      explanation: [
        "Psychofarmakoterapie se propojuje s psychoterapeutickými, sociálními a režimovými intervencemi podle typu a závažnosti poruchy. Při zahájení léčby je třeba vysvětlit očekávaný nástup účinku, možné nežádoucí účinky a plán kontroly. Nespokojenost či nepravidelné užívání mohou odrážet zátěž léčby, stigma, cenu nebo neporozumění.",
        "U antipsychotik se podle přípravku a rizika sledují například hmotnost, metabolické parametry, extrapyramidové projevy a další nežádoucí účinky. Při hodnocení antidepresiv je důležitý průběh symptomů, aktivace a bezpečí. Náhlé vysazení některých psychofarmak může vyvolat obtíže; úprava má mít plán a následnou kontrolu."
      ],
      steps: ["Domluvte se na cíli, který je pro pacienta srozumitelný a významný.", "Zapište, jak poznáte přínos i nežádoucí účinek a kdy proběhne kontrola.", "Při neúspěchu znovu posuďte diagnózu, užívání, dávku, délku léčby a psychosociální kontext."],
      compare: [["Odpověď na léčbu", "Významné zlepšení oproti výchozímu stavu."], ["Zotavení a fungování", "Širší cíl zahrnující vztahy, práci, studium a kvalitu života."]],
      pitfall: "Označení „nespolupracující pacient“ často zakryje konkrétní a řešitelnou překážku léčby.",
      question: "Jaký je užitečný první krok, když pacient přestal užívat předepsaný lék?",
      answer: "Neodsuzující rozhovor o důvodu: nežádoucí účinky, obavy, dostupnost nebo jiná překážka. Teprve potom lze společně navrhnout bezpečný a přijatelný plán.",
      sourceIds: ["depression", "psychosis", "care"]
    }
  ]
};
