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
  },
  {
    id: 'q9',
    caseContext: '32letá žena je plánována k elektivní laparoskopické appendektomii. Během předoperačního vyšetření zmíní, že se v její rodině vyskytuje akutní intermitentní porfyrie (AIP). Rezidentní anesteziolog připravuje Thiopental k úvodu do anestezie.',
    question: 'Jaký je nejvhodnější postup ohledně použití Thiopentalu u této pacientky?',
    options: [
      'Podat Thiopental podle plánu; AIP není kontraindikací.',
      'Zcela se vyhnout Thiopentalu; je to silný induktor ALA syntetázy a může vyvolat život ohrožující krizi.',
      'Podat Thiopental, ale kombinovat jej s vysokou dávkou Fentanylu k prevenci porfyrické krize.',
      'Vyhnout se Thiopentalu pouze tehdy, pokud má pacientka v době operace aktivní bolesti břicha.'
    ],
    correctAnswerIndex: 1,
    explanation: 'Thiopental (a všechny barbituráty) jsou absolutně kontraindikovány u pacientů s akutní intermitentní porfyrií (AIP) nebo jinými jaterními porfyriemi. Barbituráty indukují enzym delta-aminolevulinovou kyselinu (ALA) syntetázu, což vede k masivní akumulaci porfyrinů. To může vyvolat těžkou, život ohrožující porfyrickou krizi charakterizovanou krutými bolestmi břicha, psychiatrickými příznaky, autonomní nestabilitou a vzestupnou motorickou paralýzou. Bezpečnými alternativami jsou Propofol nebo Ketamin.',
    medicationId: 'thiopental'
  },
  {
    id: 'q10',
    caseContext: '45letý muž s těžkou CHOPN je na JIP po urgentní operaci břicha. Je extubovaný, ale vysoce neklidný, tachykardický a odmítá masku neinvazivní ventilace (NIV), což ho vystavuje vysokému riziku reintubace.',
    question: 'Které sedativum je nejvhodnější k léčbě jeho neklidu, aniž by byl ohrožen jeho dechový pohon?',
    options: [
      'Kontinuální infuze Propofolu',
      'Bolusové podávání Midazolamu podle potřeby',
      'Kontinuální infuze Dexmedetomidinu',
      'Kontinuální infuze Fentanylu'
    ],
    correctAnswerIndex: 2,
    explanation: 'Dexmedetomin je mezi sedativy jedinečný tím, že poskytuje "kooperativní sedaci" a nezpůsobuje depresi dýchání (na rozdíl od propofolu, benzodiazepinů nebo opioidů). Působí na presynaptické alpha-2 receptory v locus coeruleus a zachovává pacientův dechový pohon a reakci na hyperkapnii. Díky tomu je ideálním lékem pro neklidné pacienty, kteří musí udržet spontánní dýchání, např. při neinvazivní ventilaci (NIV/BiPAP) nebo při odpojování od ventilátoru.',
    medicationId: 'dexmedetomidine'
  },
  {
    id: 'q11',
    caseContext: 'Pacient v septickém šoku dostává kontinuální infuzi Noradrenalinu přes dočasnou periferní kanylu na předloktí. Během vizity si všimnete, že místo vpichu je oteklé, chladné a bledé a pacient si stěžuje na silnou pálivou bolest.',
    question: 'Jaký je nejrychlejší a nejvhodnější postup?',
    options: [
      'Zvýšit rychlost infuze k udržení cílového tlaku a přiložit teplý obklad.',
      'Okamžitě zastavit infuzi, aspirovat zbytky léčiva z kanyly a lokálně aplikovat subkutánně Phentolamin.',
      'Přiložit ledové obklady a propláchnout kanylu 10 mL heparinizovaného fyziologického roztoku.',
      'Snížit rychlost infuze na polovinu a zvednout ruku nad úroveň srdce.'
    ],
    correctAnswerIndex: 1,
    explanation: 'Extravazace Noradrenalinu je urgentní stav, protože lokální vazokonstrikce může způsobit těžkou ischemickou nekrózu a rozpad tkáně. Infuze musí být okamžitě zastavena. Kanylu ponechte na místě k pokusu o aspiraci zbytku léčiva, poté aplikujte antidotum Phentolamin (alpha-blokátor, obvykle 5-10 mg zředěných v 10 mL fyziologického roztoku) přes kanylu a infiltrujte subkutánně okolí kanyly k potlačení vazokonstrikce.',
    medicationId: 'norepinephrine'
  },
  {
    id: 'q12',
    caseContext: 'Anesteziolog léčí 75letého muže, u kterého se během operace rozvinula těžká sinusová bradykardie (SF 32 bpm) a hypotenze (TK 72/40 mmHg). Rezident připravuje Atropin, ale z obavy před tachykardií podá velmi nízkou dávku 0,1 mg IV.',
    question: 'Jaký je pravděpodobný farmakologický důsledek podání této sub-terapeutické dávky Atropinu?',
    options: [
      'Mírné, ale dostatečné zvýšení srdeční frekvence na přibližně 50 bpm.',
      'Žádná změna srdeční frekvence; 0,1 mg je u dospělých zcela neúčinné.',
      'Paradoxní zhoršení bradykardie a riziko srdeční blokády.',
      'Okamžitá těžká sinusová tachykardie a ischémie myokardu.'
    ],
    correctAnswerIndex: 2,
    explanation: 'Nízké dávky Atropinu (méně než 0,5 mg u dospělých nebo 0,1 mg u dětí) mohou způsobit paradoxní zhoršení bradykardie. K tomu dochází proto, že nízké dávky blokují presynaptické inhibitory muskarinových (M1) receptorů na zakončeních bloudivého nervu (nervus vagus), což zvyšuje uvolňování acetylcholinu, případně přímou centrální stimulací vagu. Proto je standardní dávka Atropinu u dospělých dle ACLS 1,0 mg IV a nižším dávkám je třeba se striktně vyhnout.',
    medicationId: 'atropine'
  },
  {
    id: 'q13',
    caseContext: 'Úspěšně jste zrušili (reverzovali) depresi dýchání (dechová frekvence 4/min, SpO2 78 %) u pooperačního pacienta na dospávacím pokoji podáním Naloxonu 0,2 mg IV. Pacient je nyní bdělý, orientovaný a dýchá frekvencí 14/min se SpO2 98 %.',
    question: 'Jaký je nejvýznamnější požadavek na sledování tohoto pacienta po podání Naloxonu?',
    options: [
      'Pacienta lze okamžitě propustit na standardní oddělení, protože dýchací cesty jsou zajištěné.',
      'Pacienta pečlivě sledovat po dobu alespoň 1-2 hodin, protože účinek Naloxonu je kratší než u většiny opioidů, což hrozí návratem útlumu dýchání.',
      'Kontrolovat zornice pacienta každých 5 minut; pokud jsou rozšířené (mydriáza), podat další dávku Naloxonu.',
      'U všech pacientů po podání Naloxonu okamžitě zahájit kontinuální infuzi Naloxonu.'
    ],
    correctAnswerIndex: 1,
    explanation: 'Doba účinku Naloxonu (přibližně 30-90 minut) je výrazně kratší než doba účinku většiny klinicky používaných opioidů (např. morfin, fentanyl). Jakmile se Naloxon metabolizuje a vyloučí, zbývající molekuly opioidů se mohou znovu navázat na receptory a způsobit opakovaný útlum dýchání a sedaci ("renarkotizaci"). Proto musí být pacienti sledováni po dobu nejméně 1-2 hodin po poslední dávce Naloxonu.',
    medicationId: 'naloxone'
  },
  {
    id: 'q14',
    caseContext: 'Na konci operace chirurgický tým požaduje zrušení (reverz) blokády rokuroniem. Pacient má počet záškubů na Train-of-Four (TOF) 3. Rezident anesteziologie se rozhodne podat Neostigmin 2,5 mg IV.',
    question: 'Jaký další farmakologický krok MUSÍ rezident při podání Neostigminu učinit?',
    options: [
      'Podat Neostigmin samostatně; žádná další látka není nutná.',
      'Společně podat anticholinergikum (např. glykopyrrolát nebo atropin) k zablokování závažných muskarinových nežádoucích účinků.',
      'Společně podat Sugammadex k zdvojnásobení rychlosti odeznění blokády.',
      'Podat beta-blokátor k prevenci těžké tachykardie způsobené Neostigminem.'
    ],
    correctAnswerIndex: 1,
    explanation: 'Neostigmin je inhibitor acetylcholinesterázy, který zvyšuje hladinu acetylcholinu na nikotinových receptorech (čímž ruší svalovou blokádu) i na muskarinových receptorech. Muskarinová stimulace způsobuje těžkou bradykardii, AV blokády, bronchospasmus, hypersalivaci a zvýšenou motilitu střev. Aby se zabránilo těmto život ohrožujícím parasympatickým účinkům, musí být Neostigmin VŽDY podáván společně s anticholinergikem (glykopyrrolát nebo atropin).',
    medicationId: 'neostigmine'
  },
  {
    id: 'q15',
    caseContext: '60letý muž podstupuje rozsáhlý ortopedický operační výkon. Má vysoké riziko pooperační nevolnosti a zvracení (PONV) podle skóre Apfel. Anesteziolog se rozhodne podat Dexamethason krátce po úvodu do anestezie.',
    question: 'Jaký je hlavní mechanismus a klinická výhoda Dexamethasonu v této situaci?',
    options: [
      'Působí jako okamžité sedativum, čímž snižuje potřebu Propofolu.',
      'Je to silné antiemetikum, které snižuje syntézu prostaglandinů a centrální hladinu serotoninu a působí synergicky s Ondansetronem.',
      'Zvrátí nervosvalovou blokádu urychlením uvolňování acetylcholinu.',
      'Je to čisté analgetikum, které zcela nahrazuje potřebu intraoperačních opioidů.'
    ],
    correctAnswerIndex: 1,
    explanation: 'Dexamethason (4-10 mg IV) je vysoce účinné antiemetikum používané k profylaxi PONV. Působí snížením syntézy prostaglandinů a poklesem centrálního serotoninu. V kombinaci s antagonistou receptoru 5-HT3, jako je Ondansetron, vykazuje významný synergický efekt. Podává se krátce po úvodu kvůli pomalejšímu nástupu (1-2 hodiny). Bdělé pacienty je třeba před rychlým podáním varovat před přechodným svěděním/pálením v perineální oblasti.',
    medicationId: 'dexamethasone'
  }
];
