export interface QuizItem {
  id: string;
  specialty: "Emergency" | "Anesthesia";
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  severity: "low" | "medium" | "high";
}

export const CLINICAL_QUIZZES: QuizItem[] = [
  {
    id: "em_1",
    specialty: "Emergency",
    question: "Který lék a způsob podání je první volbou u pacienta v anafylaktickém šoku s hypotenzí a stridorem?",
    options: [
      "Adrenalin 0,5 mg i.m. (intramuskulárně) do anterolaterální části stehna",
      "Adrenalin 1 mg i.v. (intravenózně) bolusově",
      "Dexamethason 8 mg i.v. jako okamžitá monoterapie",
      "Salbutamol 2,5 mg v nebulizaci"
    ],
    correctIndex: 0,
    explanation: "U anafylaxe je první volbou intramuskulární podání adrenalinu (0,5 mg u dospělých). Rychle se vstřebává, má bezpečnější profil než i.v. bolus (který hrozí arytmiemi a infarktem) a působí rychleji než kortikosteroidy či antihistaminika.",
    severity: "high"
  },
  {
    id: "em_2",
    specialty: "Emergency",
    question: "Při monitorování pacienta v bezvědomí zjistíte na monitoru komorovou fibrilaci (VF). Jaký je okamžitý terapeutický krok?",
    options: [
      "Okamžitá defibrilace výbojem (200 J bifázicky) a pokračování v KPR",
      "Podání Amiodaronu 300 mg i.v. bolus",
      "Zavedení laryngeální masky a zahájení umělé plicní ventilace",
      "Prekordiální úder a kontrola pulzu na a. carotis po dobu 30 sekund"
    ],
    correctIndex: 0,
    explanation: "Komorová fibrilace je defibrilovatelný rytmus. Klíčem k přežití je co nejrychlejší podání výboje. Medikace (Amiodaron) a zajištění dýchacích cest mají nižší prioritu a provádějí se až po neúspěšných úvodních výbojích a během kontinuální KPR.",
    severity: "high"
  },
  {
    id: "em_3",
    specialty: "Emergency",
    question: "Proč je podání Nitroglycerinu relativně nebo absolutně kontraindikováno u akutního infarktu myokardu (STEMI) spodní stěny?",
    options: [
      "Může vyvolat kritický pokles krevního tlaku kvůli postižení pravé komory (RV), která je závislá na preloadu",
      "Zvyšuje riziko vzniku komorové tachykardie typu Torsades de Pointes",
      "Způsobuje spasmolytickou reakci věnčitých tepen",
      "Neutralizuje účinek podané kyseliny acetylsalicylové"
    ],
    correctIndex: 0,
    explanation: "STEMI spodní stěny (postižení větví RCA) často postihuje i pravou komoru (RV infarkt). Pravá komora je rigidní a její plnění (preload) závisí na žilním návratu. Nitroglycerin jako venodilatans sníží preload, což může vést k těžké hypotenzi a kardiogennímu šoku.",
    severity: "medium"
  },
  {
    id: "em_4",
    specialty: "Emergency",
    question: "Při hromadném neštěstí provádíte triáž metodou START. Kterého z následujících pacientů označíte červenou páskou (Třída 1 - urgentní)?",
    options: [
      "Pacienta s tenzním pneumotoraxem, dechovou frekvencí 32/min, slabým radiálním pulzem a poruchou vědomí",
      "Pacienta s otevřenou zlomeninou femuru, který komunikuje a má kapilární návrat 1,5 sekundy",
      "Pacienta s devastačním poraněním hlavy, bez spontánního dýchání i po uvolnění dýchacích cest",
      "Pacienta s popáleninami II. stupně na 10% tělesného povrchu, který chodí a stěžuje si na silnou bolest"
    ],
    correctIndex: 0,
    explanation: "Pacient s tenzním pneumotoraxem vykazuje známky bezprostředního ohrožení života (tachyfnoe > 30/min, hemodynamická nestabilita, alterace vědomí), což odpovídá červené prioritě (Třída I). Bezdešný pacient po uvolnění DC je černá (Třída IV), zlomenina s dobrou perfúzí je žlutá (Třída II) a chodící pacient zelená (Třída III).",
    severity: "high"
  },
  {
    id: "an_1",
    specialty: "Anesthesia",
    question: "U pacienta s plným žaludkem indikovaného k urgentní operaci provádíte úvod do anestezie metodou RSI (Rapid Sequence Induction). Které relaxans zvolíte pro nejrychlejší nástup účinku?",
    options: [
      "Sukcinylcholin (1-1,5 mg/kg i.v.) nebo Rokuronium (1-1,2 mg/kg i.v.)",
      "Cisatrakurium (0,15 mg/kg i.v.)",
      "Pankuronium (0,1 mg/kg i.v.)",
      "Vecuronium (0,08 mg/kg i.v.)"
    ],
    correctIndex: 0,
    explanation: "Sukcinylcholin (depolarizující relaxans) a vysoká dávka Rokuronia (nedepolarizující relaxans) mají nejrychlejší nástup účinku (do 60 sekund), což je klíčové pro rychlé zajištění dýchacích cest intubací a prevenci aspirace žaludečního obsahu u neracionálního pacienta.",
    severity: "medium"
  },
  {
    id: "an_2",
    specialty: "Anesthesia",
    question: "U pacienta se po aplikaci vysoké dávky lokálního anestetika (např. Bupivakainu) rozvine těžká systémová toxicita (LAST) provázená křečemi a srdeční zástavou. Co je specifickým antidotem?",
    options: [
      "20% lipidová emulze (Intralipid) i.v. bolus a infuze",
      "Flumazenil i.v. opakovaně",
      "Atropin 1 mg i.v. a Adrenalin 10 mg i.v.",
      "Magnesium sulfát 4 g i.v. během 2 minut"
    ],
    correctIndex: 0,
    explanation: "Specifickou léčbou systémové toxicity lokálních anestetik (LAST) je podání 20% lipidové emulze (Intralipid). Lipidy fungují jako 'lipidový dřez' (lipid sink), který vyváže lipofilní lokální anestetikum z krevního oběhu a myokardu, čímž obnoví srdeční činnost.",
    severity: "high"
  },
  {
    id: "an_3",
    specialty: "Anesthesia",
    question: "Během úvodu do anestezie nastane situace 'nemohu intubovat, nemohu oxygenovat' (cannot intubate, cannot oxygenate - CICO). Pokusy o intubaci i zavedení supraglotické pomůcky selhaly a saturace klesá pod 60 %. Jaký je další doporučený postup?",
    options: [
      "Okamžité provedení krikotyreoidotomie (chirurgické zajištění dýchacích cest)",
      "Pokračování v pokusech o intubaci s jiným typem laryngoskopu",
      "Aplikace vysokých dávek Dexamethasonu a vyčkávání na probuzení pacienta",
      "Zahájení nepřímé masáže srdce a resuscitace"
    ],
    correctIndex: 0,
    explanation: "CICO situace je nejzávažnější komplikací v anesteziologii. Pokud nelze pacienta intubovat ani ventilovat maskou či laryngeální maskou, dochází k rychlé hypoxické zástavě oběhu. Jediným řešením je okamžitý front-of-neck přístup přes lig. cricothyroideum (krikotyreoidotomie).",
    severity: "high"
  },
  {
    id: "an_4",
    specialty: "Anesthesia",
    question: "Které z následujících anestetik je nejvhodnější pro úvod do celkové anestezie u hemodynamicky nestabilního pacienta (např. v hemoragickém či septickém šoku) pro minimální vliv na krevní tlak?",
    options: [
      "Ketamin nebo Etomidát",
      "Propofol",
      "Thiopental",
      "Midazolam ve vysoké dávce"
    ],
    correctIndex: 0,
    explanation: "Ketamin (sympatomimetický účinek) a Etomidát (kardiostabilní profil) mají minimální tlumivý vliv na myokard a cévní tonus, a jsou proto léky volby u šokových stavů. Propofol a Thiopental způsobují výraznou vazodilataci a pokles kontraktility, což by u nestabilního pacienta mohlo vést k oběhovému kolapsu.",
    severity: "medium"
  }
];
