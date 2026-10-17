export default {
  title: "Radiologie",
  legacy: "#cards-grid",
  lab: "windowing",
  labTitle: "Nastavení CT okna",
  labLead: "Vliv středu a šířky okna na zobrazení hodnot v syntetickém HU fantomu.",
  sources: [
    { id: "window", label: "Radiopaedia: Windowing (CT)", url: "https://radiopaedia.org/articles/windowing-ct" },
    { id: "ct", label: "RadiologyInfo: Body CT", url: "https://www.radiologyinfo.org/en/info/bodyct" },
    { id: "mr", label: "RadiologyInfo: Body MRI", url: "https://www.radiologyinfo.org/en/info/bodymr" },
    { id: "diffusion", label: "Questions and Answers in MRI: T2 shine-through", url: "https://mriquestions.com/t2-shine-through.html" },
    { id: "contrast", label: "RadiologyInfo: Contrast materials", url: "https://www.radiologyinfo.org/en/info/safety-contrast" },
    { id: "chest", label: "Radiology Masterclass: Chest X-ray quality", url: "https://www.radiologymasterclass.co.uk/tutorials/chest/chest_quality/chest_xray_quality_start" },
    { id: "us", label: "RadiologyInfo: General ultrasound", url: "https://www.radiologyinfo.org/en/info/genus" }
  ],
  lessons: [
    {
      id: "indikace", title: "Vyšetření začíná otázkou", minutes: 6,
      intro: "Správná žádanka neobsahuje jen příznak, ale otázku, jejíž odpověď změní další postup.",
      explanation: [
        "Volba metody závisí na pravděpodobné diagnóze, naléhavosti, dostupnosti a stavu pacienta. CT je rychlé a dobře zobrazuje řadu akutních stavů, ale využívá ionizující záření. MR poskytuje výborný kontrast měkkých tkání bez ionizujícího záření, má však jiné časové a bezpečnostní nároky. Ultrazvuk umožňuje dynamické vyšetření bez záření, jeho možnosti omezují akustické podmínky a zkušenost vyšetřujícího.",
        "Stejná oblast těla může vyžadovat odlišný protokol podle otázky. Nativní CT, arteriální fáze a portovenózní fáze nejsou zaměnitelné. Nevhodně zvolená fáze může snížit výpovědní hodnotu i technicky kvalitního snímku. Radiolog proto potřebuje kontext, předchozí nálezy a informaci o zásadních rizicích."
      ],
      steps: ["Napište pracovní diagnózu a konkrétní otázku, ne jen „bolest břicha“.", "Zvažte, zda je pacient stabilní a zda vyšetření skutečně změní péči.", "Předejte informace o těhotenství, implantátech, renálních funkcích a předchozí reakci na kontrast podle typu vyšetření."],
      compare: [["Metoda", "CT, MR, RTG či ultrazvuk."], ["Protokol", "Konkrétní nastavení, oblast, sekvence nebo fáze kontrastu uvnitř metody."]],
      pitfall: "„CT s kontrastem“ není jeden univerzální protokol pro všechny cévní a orgánové otázky.",
      question: "Proč může běžné CT hrudníku bez vhodné angiografické fáze nedostatečně odpovědět na otázku plicní embolie?",
      answer: "K posouzení lumen plicních tepen je nutná vhodná kontrastní náplň a načasování. Samotný název oblasti vyšetření nezaručuje správný protokol.",
      sourceIds: ["ct", "mr", "us"]
    },
    {
      id: "ct-okno", title: "HU, šířka okna a úroveň", minutes: 7,
      intro: "Změna okna nemění naměřené CT hodnoty. Mění pouze to, jak se převedou na odstíny šedi.",
      explanation: [
        "Hounsfieldova škála vztahuje útlum rentgenového záření k vodě. Voda má přibližně 0 HU, vzduch −1000 HU; hodnoty tkání závisejí na složení a podmínkách akvizice. Obrazovka nedokáže současně dobře rozlišit celý rozsah, proto se zobrazuje vybrané okno.",
        "Střed okna určuje centrální HU hodnotu, šířka rozsah mezi černou a bílou. V jednoduchém lineárním modelu leží meze na středu minus a plus polovině šířky. Úzké okno zdůrazní malé rozdíly, ale více hodnot se slije do čisté černé či bílé. Široké okno zachová větší rozsah za cenu menšího kontrastu blízkých hodnot."
      ],
      steps: ["Začněte oknem vhodným pro hledanou tkáň.", "Porovnejte stejnou oblast ve více oknech a vhodných rovinách.", "V laboratoři sledujte rozdíl 35 a 65 HU při úzkém a širokém okně."],
      compare: [["Úzké okno", "Vyšší kontrast podobných HU, menší zobrazený rozsah."], ["Široké okno", "Větší rozsah HU, menší rozdíl odstínů u podobných tkání."]],
      pitfall: "Bílá struktura nemusí být kost; mohla jen překročit horní mez právě zvoleného okna.",
      question: "Jaké jsou meze modelového okna se středem 40 HU a šířkou 80 HU?",
      answer: "Dolní mez je 0 HU a horní 80 HU. Hodnoty pod dolní mezí budou černé, nad horní bílé. Přesná implementace klinického DICOM zobrazení může používat mírně jinou konvenci hranic.",
      sourceIds: ["window"]
    },
    {
      id: "rtg-hrudnik", title: "RTG hrudníku: nejdřív kvalita", minutes: 6,
      intro: "Rotace, projekce a nádech mohou napodobit patologii. Popis bez kontroly techniky je rizikový.",
      explanation: [
        "Nejprve ověřte pacienta, datum, stranu a projekci. AP snímek může zvětšovat srdeční stín oproti standardní PA projekci. Nedostatečný nádech zahušťuje bazální kresbu a může zvyšovat zdánlivou velikost srdce. Rotace mění šířku mediastina a symetrii hrudníku.",
        "Potom postupujte stále stejným systémem: dýchací cesty, plíce a pleura, srdce a mediastinum, bránice, kosti a měkké tkáně, případně katétry a další pomůcky. První nalezená abnormalita nesmí ukončit prohlížení. Srovnání se starším snímkem často odliší akutní změnu od chronického nálezu."
      ],
      steps: ["Zkontrolujte projekci, rotaci, nádech a expozici.", "Prohlédněte i apex, retrokardiální oblast a kostofrenické úhly.", "Formulujte nález, jeho pravděpodobný význam a omezení vyšetření."],
      compare: [["AP projekce", "Srdeční stín může být projekčně zvětšený."], ["PA projekce", "Vhodnější pro standardní posouzení velikosti srdce při dobré technice."]],
      pitfall: "Normální RTG hrudníku nevylučuje plicní embolii ani všechny časné plicní patologie.",
      question: "Proč nelze bez výhrady označit velký srdeční stín na přenosném AP snímku za kardiomegalii?",
      answer: "AP projekce a často i horší nádech mohou srdeční stín zvětšovat. Je nutné zohlednit techniku, starší snímky a další vyšetření.",
      sourceIds: ["chest"]
    },
    {
      id: "mr-signal", title: "MR: jas není diagnóza", minutes: 7,
      intro: "Význam světlé léze se mění se sekvencí. Neexistuje jedno univerzální „MR zbarvení“ tkáně.",
      explanation: [
        "T1 a T2 vážení zvýrazňují jiné vlastnosti relaxace. Tekutina bývá na běžném T2 váženém obraze světlá a na T1 tmavá, ale existují výjimky podle složení a sekvence. FLAIR potlačuje signál volné tekutiny podobné likvoru, a pomáhá tak zvýraznit některé parenchymové změny v blízkosti komor a sulků.",
        "Vysoký signál na difuzně váženém obraze sám neprokazuje restrikci. Je nutné hodnotit ADC mapu, protože vysoký T2 signál se může přenést do DWI jako T2 shine-through. Skutečná restrikce se typicky pojí s nízkým ADC, ale interpretace vždy závisí na anatomii a klinickém kontextu."
      ],
      steps: ["Než hodnotíte jas, pojmenujte sekvenci a rovinu.", "Nález sledujte na více sekvencích, ne na izolovaném výřezu.", "DWI porovnejte s ADC a zohledněte artefakty i časový průběh."],
      compare: [["DWI vysoké + ADC nízké", "Podporuje skutečnou restrikci difuze."], ["DWI vysoké bez nízkého ADC", "Může jít o T2 shine-through; potřebuje kontext."]],
      pitfall: "MR nemá ionizující záření, ale není bez bezpečnostních omezení: zásadní jsou implantáty, kov a podmínky konkrétního zařízení.",
      question: "Proč nestačí u podezření na akutní ischemii hodnotit pouze světlé ložisko na DWI?",
      answer: "Je nutné ověřit ADC a anatomickou i klinickou souvislost, jinak může být T2 shine-through nebo artefakt zaměněn za restrikci.",
      sourceIds: ["mr", "diffusion"]
    },
    {
      id: "ultrazvuk", title: "Ultrazvuk: artefakt jako vodítko", minutes: 6,
      intro: "Část obrazu nevzniká přímým zobrazením struktury, ale interakcí zvuku s prostředím. I to může být užitečné.",
      explanation: [
        "Anechogenní jednoduchá tekutina často vede k zesílení za strukturou, protože má malý útlum. Naopak silně odrážející či tlumící rozhraní, například konkrement, může vytvářet akustický stín. Ne každá tmavá struktura je cysta: záleží na nastavení, okolí a více projekcích.",
        "Dopplerovská barva zobrazuje směr a parametry toku vzhledem k sondě a zvolené mapě, nikoli automaticky tepnu červeně a žílu modře. Příliš vysoká rychlost vůči nastavení může způsobit aliasing. Přítlak sondy, hloubka, gain i úhel mohou změnit to, co zdánlivě vidíme."
      ],
      steps: ["Ověřte strukturu ve dvou rovinách a upravte hloubku i gain.", "Hledejte zesílení, stín a další akustické znaky.", "Doppler interpretujte podle barevné škály, směru a nastavení, ne podle názvu cévy."],
      compare: [["Zesílení za strukturou", "Často malý útlum při průchodu tekutinou."], ["Akustický stín", "Nedostatek signálu za výrazně tlumícím či odrážejícím rozhraním."]],
      pitfall: "Nepřítomnost barevného signálu nemusí znamenat nepřítomnost toku; nastavení může být pro pomalý tok nevhodné.",
      question: "Je modrá céva na barevném Doppleru vždy žíla?",
      answer: "Ne. Barva odpovídá směru toku vzhledem k sondě podle zvolené mapy. Tepna i žíla mohou být při různých směrech zobrazeny stejnou barvou.",
      sourceIds: ["us"]
    },
    {
      id: "bezpecnost", title: "Kontrast a radiační ochrana bez zkratek", minutes: 6,
      intro: "Bezpečnost znamená přiměřené vyšetření správného pacienta, ne automatické odmítání každého rizika.",
      explanation: [
        "Při indikaci ionizujícího vyšetření posuzujeme očekávaný přínos a optimalizujeme protokol. Riziko se liší podle oblasti, počtu fází a pacienta. Ultrazvuk nebo MR mohou být vhodnou alternativou, ale ne za cenu ztráty odpovědi na urgentní klinickou otázku.",
        "Jodové a gadoliniové kontrastní látky mají odlišné použití a rizikové profily. Důležitá je předchozí reakce na konkrétní kontrast, renální funkce podle situace a další individuální faktory. Alergie na mořské plody není zvláštní alergií na jod. Konečný postup patří k lokálnímu protokolu a posouzení radiologem."
      ],
      steps: ["Ověřte indikaci a možnost stejně výpovědné alternativy.", "Ptejte se na konkrétní průběh minulé kontrastní reakce, ne jen na štítek alergie.", "Volte potřebný protokol a počet fází; další fáze má mít vlastní klinický důvod."],
      compare: [["Odůvodnění", "Má vyšetření pro tohoto pacienta přínos?"], ["Optimalizace", "Jak získat potřebnou informaci s přiměřenou zátěží?"]],
      pitfall: "Strach z rizika nesmí bez rozvahy odložit potřebné vyšetření život ohrožujícího stavu.",
      question: "Proč se před kontrastním CT ptáme na minulou reakci podrobněji než jen ano/ne?",
      answer: "Rozhoduje typ přípravku, charakter, načasování a tíže reakce. Nauzea a anafylaktická reakce mají jiný význam pro plánování dalšího vyšetření.",
      sourceIds: ["contrast", "ct"]
    }
  ]
};
