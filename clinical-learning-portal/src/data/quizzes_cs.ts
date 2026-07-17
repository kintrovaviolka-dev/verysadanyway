import { QuizQuestion } from '../types';

export const ANESTHESIA_QUIZ_CS: QuizQuestion[] = [
  {
    id: 'q1',
    caseContext: '68letý muž s anamnézou těžké aortální stenózy a těžkého hypovolemického šoku v důsledku aktivního krvácení z horní části zažívacího traktu vyžaduje okamžitou endotracheální intubaci. Jeho krevní tlak je aktuálně 78/42 mmHg a srdeční frekvence je 112 bpm.',
    question: 'Které indukční anestetikum je pro tohoto pacienta hemodynamicky nejstabilnější a nejvhodnější volbou?',
    options: [
      'Propofol 2 mg/kg IV',
      'Ketamin 2 mg/kg IV',
      'Etomidát 0,3 mg/kg IV',
      'Midazolam 0,1 mg/kg IV'
    ],
    correctAnswerIndex: 2,
    explanation: 'Etomidát (0,2 - 0,3 mg/kg IV) je lékem volby u hemodynamicky nestabilních pacientů v šoku, zejména u pacientů s chlopenními vadami jako aortální stenóza. Má zanedbatelný vliv na kontraktilitu myokardu a systémovou cévní rezistenci. Propofol je zde kontraindikován, protože způsobuje hlubokou vazodilataci a depresi myokardu. I když se ketamin u šoku rovněž používá, jeho sympatická stimulace zvyšuje srdeční frekvenci a nároky myokardu na kyslík, což je při těžké aortální stenóze velmi nebezpečné.',
    medicationId: 'etomidate'
  },
  {
    id: 'q2',
    caseContext: 'Obézní 42letá žena je plánována k urgentní laparoskopické cholecystektomii. Má anamnézu gastroesofageálního refluxu (GERD) a vyžaduje Rapid Sequence Induction (RSI) a intubaci. K usnadnění rychlé intubace plánujete použít sukcinylcholin.',
    question: 'Ve které z následujících klinických situací by byl sukcinylcholin ABSOLUTNĚ kontraindikován?',
    options: [
      'Pacient s odhadovaným GFR 45 mL/min (středně těžké chronické onemocnění ledvin)',
      'Pacient s kompletním přerušením míchy v úrovni T6 utrpěným před 12 měsíci',
      'Pacient s anamnézou těžké pooperační nevolnosti a zvracení (PONV)',
      'Pacient s dokumentovanou alergií na penicilin a vejce'
    ],
    correctAnswerIndex: 1,
    explanation: 'Sukcinylcholin je absolutně kontraindikován u pacientů s chronickým poškozením míchy (typicky od 24-48 hodin po úrazu až do 1-2 let či trvale). Denervace svalu vede k "up-regulation" extrajunkčních nikotinových acetylcholinových receptorů. Pokud se sukcinylcholin na tyto receptory naváže, způsobí masivní uvolnění draslíku, což vede k hyperkalémii, komorové fibrilaci a srdeční zástavě. Lehká až střední porucha ledvin není kontraindikací, pokud není přítomna aktivní těžká hyperkalémie.',
    medicationId: 'succinylcholine'
  },
  {
    id: 'q3',
    caseContext: 'Pacient o hmotnosti 70 kg (ideální tělesná hmotnost) s normální funkcí jater a ledvin je uváděn do rutinní anestezie pro ortopedickou operaci. Anesteziolog podává rokuronium 50 mg IV (cca 0,7 mg/kg) k usnadnění intubace.',
    question: 'Během zajišťování dýchacích cest se anesteziolog 2 minuty po podání léku setká se scénářem "Can\'t Intubate, Can\'t Oxygenate" (CICO). Jaký je nejvhodnější záchranný "reversal" režim?',
    options: [
      'Podat Neostigmin 0,05 mg/kg IV v kombinaci s glykopyrrolátem',
      'Vyčkat 30-40 minut na přirozenou redistribuci a clearance rokuronia',
      'Okamžitě podat Sugammadex 16,0 mg/kg IV',
      'Okamžitě podat Sugammadex 2,0 mg/kg IV'
    ],
    correctAnswerIndex: 2,
    explanation: 'Pro nouzový záchranný reverz hluboké neuromuskulární blokády rokuroniem krátce po podání úvodní dávky 1,2 mg/kg nebo 0,6 mg/kg je požadovaná dávka Sugammadexu 16,0 mg/kg IV. Tato dávka kompletně enkapsuluje cirkulující molekuly rokuronia v plazmě, čímž obnoví nervosvalový přenos a spontánní dýchání za méně než 3 minuty, což může u krize "Can\'t Intubate, Can\'t Oxygenate" (CICO) zachránit život. Dávka 2,0 mg/kg je určena pouze pro mírný blok (při TOF 2) a Neostigmin nedokáže zrušit hluboký, bezprostřední blok.',
    medicationId: 'sugammadex'
  },
  {
    id: 'q4',
    caseContext: '28letý muž s anamnézou těžkého "brittle asthma" je přivezen na sál k urgentní appendektomii. Aktivně sípá a poslechově má expirační pískoty ve všech plicních polích.',
    question: 'Které indukční anestetikum je pro tohoto pacienta nejvýhodnější díky svým aktivním bronchodilatačním účinkům?',
    options: [
      'Propofol',
      'Ketamin',
      'Etomidát',
      'Midazolam'
    ],
    correctAnswerIndex: 1,
    explanation: 'Ketamin je vysoce přínosný u pacientů s aktivním astmatem nebo bronchospasmem. Stimuluje sympatický nervový systém, což způsobuje uvolňování endogenních katecholaminů, které přímo stimulují beta-2 receptory v plicích k relaxaci hladké svaloviny a bronchodilataci. Působí také přímo relaxačně na hladkou svalovinu dýchacích cest. Propofol má také určité bronchodilatační účinky, ale Ketamin je jedinečně silný a preferovaný u aktivních astmatických krizí vyžadujících intubaci.',
    medicationId: 'ketamine'
  },
  {
    id: 'q5',
    caseContext: 'Během úvodu do celkové anestezie pomocí Propofolu 150 mg a Fentanylu 100 mcg u 65leté ženy klesá krevní tlak pacienta ze 128/76 mmHg na 82/48 mmHg. Její srdeční frekvence se také zpomaluje ze 74 bpm na 52 bpm.',
    question: 'Která vasoaktivní látka a dávka je nejvhodnější první volbou k obnovení její hemodynamiky?',
    options: [
      'Fenyleftrin 50-100 mcg IV bolus',
      'Efedrin 5-10 mg IV bolus',
      'Atropin 0,5 mg IV bolus',
      'Epinefrin 1 mg IV push'
    ],
    correctAnswerIndex: 1,
    explanation: 'Efedrin (5-10 mg IV bolus) je zde ideálním lékem, protože pacientka trpí hypotenzí (TK 82/48) i bradykardií (SF 52 bpm), což je typický kombinovaný nežádoucí účinek propofolu a opioidů. Efedrin stimuluje alpha a beta receptory, což zvyšuje systémovou cévní rezistenci (zvyšuje TK) a zvyšuje srdeční frekvenci. Fenyleftrin je čistý alpha-1 agonista, který by sice zvýšil TK, ale způsobil by další pokles SF reflexní bradykardií, což je u bradykardického pacienta nevhodné.',
    medicationId: 'ephedrine'
  },
  {
    id: 'q6',
    caseContext: 'Připravujete indukční dávku Propofolu pro stabilní 80letou ženu (vážící 60 kg) podstupující plánovanou operaci kýly. V anamnéze má kompenzovanou hypertenzi a osteoartrózu.',
    question: 'Jaká je nejvhodnější upravená indukční dávka Propofolu pro tuto geriatrickou pacientku?',
    options: [
      '120 mg až 150 mg IV bolus (2,0 - 2,5 mg/kg)',
      '60 mg až 90 mg IV bolus (1,0 - 1,5 mg/kg)',
      '30 mg až 40 mg IV bolus (0,5 mg/kg)',
      '180 mg až 210 mg IV bolus (3,0 - 3,5 mg/kg)'
    ],
    correctAnswerIndex: 1,
    explanation: 'U starších pacientů (typicky nad 65-70 let) se požadovaná indukční dávka Propofolu snižuje o 30-50 % (na přibližně 1,0 - 1,5 mg/kg IV). Starší pacienti mají snížený distribuční objem, pomalejší clearance a zvýšenou citlivost ke kardiodepresivním účinkům Propofolu (riziko těžké hypotenze). Pro 60kg pacienta je správné rozmezí 60-90 mg.',
    medicationId: 'propofol'
  },
  {
    id: 'q7',
    caseContext: 'Pacientka je vedena v míšní (spinální) anestezii pro císařský řez. Bezprostředně po intrathekálním bloku se pacientce zatočí hlava a krevní tlak klesá na 88/44 mmHg. Její srdeční frekvence je 98 bpm.',
    question: 'Která vasoaktivní látka je preferována v porodnické spinální anestezii k léčbé hypotenze, aniž by způsobovala acidózu plodu nebo mateřskou tachykardii?',
    options: [
      'Noradrenalin',
      'Efedrin',
      'Fenyleftrin',
      'Dopamin'
    ],
    correctAnswerIndex: 2,
    explanation: 'Fenyleftrin (40 - 100 mcg IV bolusy nebo kontinuální infuze) je preferovaným lékem volby pro léčbu hypotenze vyvolané spinální anestezií u porodů. Rozsáhlé klinické studie ukázaly, že fenyleftrin udržuje průtok krve dělohou a je spojen s příznivějším acidobazickým stavem plodu (méně acidózy plodu) ve srovnání s efedrinem. Rovněž koriguje tepovou frekvenci matky, čímž předchází nadměrné tachykardii.',
    medicationId: 'phenylephrine'
  },
  {
    id: 'q8',
    caseContext: '28letá žena je plánována k elektivní laparoskopické operaci. Během anesteziologické konzultace uvádí, že její sestra prodělala život ohrožující, masivní nárůst tělesné teploty, svalovou rigiditu a vysokou hladinu CO2 během drobné operace kolene v celkové anestezii.',
    question: 'Který z následujících léků je potenciálním spouštěčem tohoto podezření na dědičné onemocnění (Maligní hypertermie) a musí být přísně vyvarován?',
    options: [
      'Propofol',
      'Rokuronium',
      'Sukcinylcholin',
      'Ketamin'
    ],
    correctAnswerIndex: 2,
    explanation: 'Maligní hypertermie (MH) je vzácná, život ohrožující dědičná hypermetabolická krize spouštěná expozicí volatilním inhalačním anestetikům (např. Sevofluran, Isofluran) nebo depolarizujícímu svalovému relaxanciu sukcinylcholinu. Způsobuje nekontrolované uvolňování vápníku ze sarkoplazmatického retikula, což vede k těžké svalové rigiditě, hypertermii, metabolické acidóze, rhabdomyolýze a tachykardii. Nedepolarizující relaxancia jako Rokuronium a indukční látky jako Propofol/Ketamin jsou u MH-susceptibilních pacientů zcela bezpečné.',
    medicationId: 'succinylcholine'
  }
];
