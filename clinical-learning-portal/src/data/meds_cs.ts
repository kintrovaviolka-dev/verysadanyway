import { Medication } from '../types';

export const ANESTHESIA_MEDS_CS: Medication[] = [
  {
    id: 'propofol',
    name: 'Propofol',
    genericName: 'Propofol (Diprivan)',
    category: 'induction',
    categoryLabel: 'Indukční anestetikum',
    class: 'Alkylfenolový derivát / GABA-A agonista',
    mechanism: 'Potencuje GABA-A receptory, zvyšuje vodivost pro chloridové ionty, což vede k hyperpolarizaci a rychlé cerebrální depresi.',
    indications: [
      'Úvod do celkové anestezie',
      'Vedení celkové anestezie (TIVA - "Total Intravenous Anesthesia")',
      'Sedace na JIP / procedurální sedace'
    ],
    dosageInduction: '1,5 - 2,5 mg/kg IV bolus (Snížit dávku na 1,0 - 1,5 mg/kg u starších pacientů nebo při ASA III/IV).',
    pediatricDosage: '2,5 - 3,5 mg/kg IV (vyšší dávka z důvodu většího "volume of distribution" u dětí).',
    standardPrep: '1% emulze (10 mg/mL) ve 20mL nebo 50mL ampulích/lahvičkách.',
    onset: '30 - 45 sekund (Rychlý "arm-brain" čas).',
    duration: '5 - 10 minut (v důsledku rychlé redistribuce z "vessel-rich group").',
    contraindications: [
      'Přecitlivělost na propofol, vaječný lecithin nebo sójový olej (opatrnost)',
      'Hemodynamická nestabilita / těžký hypovolemický šok',
      'Těžká aortální stenóza (vysoká citlivost na vazodilataci)'
    ],
    adverseEffects: [
      'Výrazná hypotenze (systémová vazodilatace a mírná deprese myokardu)',
      'Dávkově závislá deprese dýchání a přechodná apnoe',
      'Bolest při injekci (lze minimalizovat předchozím podáním lidokainu nebo použitím velké žíly)',
      'Myoklonus při úvodu (neepileptický)'
    ],
    pearls: [
      'Má silné antiemetické účinky, díky čemuž je lékem volby pro pacienty s vysokým rizikem PONV ("Postoperative Nausea and Vomiting").',
      'Výjimečně dobře tlumí reflexy dýchacích cest, což usnadňuje zavedení laryngeální masky (LMA) bez použití "muscle relaxants".',
      'Dlouhodobá vysokodávková infuze (>48 hodin, >5 mg/kg/h) může vést k Propofol Infusion Syndrome (PRIS): těžká metabolická acidóza, rhabdomyolysis, hyperkalémie a kardiovaskulární kolaps.'
    ]
  },
  {
    id: 'ketamine',
    name: 'Ketamine',
    genericName: 'Ketamin (Ketalar)',
    category: 'induction',
    categoryLabel: 'Indukční anestetikum / Analgetikum',
    class: 'Fenicyklidinový derivát / antagonista NMDA receptorů',
    mechanism: 'Nekompetitivní antagonista NMDA receptorů, inhibuje glutamátem zprostředkovaný excitační přenos; také inhibuje zpětné vychytávání katecholaminů.',
    indications: [
      'Úvod do celkové anestezie (zejména u šoku, hypovolemie nebo těžkého bronchospasmu)',
      'Analgetické adstringens v subanestetických dávkách (např. chronická bolest, pooperační bolest)',
      'Procedurální sedace v dětském lékařství nebo urgentní medicíně'
    ],
    dosageInduction: '1,0 - 2,0 mg/kg IV nebo 4,0 - 10,0 mg/kg IM.',
    pediatricDosage: '1,5 - 2,0 mg/kg IV nebo 4,0 - 8,0 mg/kg IM.',
    standardPrep: '10 mg/mL, 50 mg/mL, nebo 100 mg/mL roztoky.',
    onset: '30 - 60 sekund IV; 3 - 5 minut IM.',
    duration: '10 - 20 minut IV (poločas redistribuce). Úplné zotavení trvá 1-2 hodiny.',
    contraindications: [
      'Těžká nekompenzovaná hypertenze nebo ischemická choroba srdeční',
      'Zvýšený vnitrooční tlak nebo penetrující poranění oka (relativní)',
      'Anamnéza psychotického onemocnění / schizofrenie (vysoké riziko halucinací)'
    ],
    adverseEffects: [
      'Sympatická stimulace: přechodná hypertenze, tachykardie a zvýšené nároky myokardu na kyslík',
      'Emergence delirium, živé sny nebo halucinace (lze zmírnit současným podáním midazolamu)',
      'Hypersalivace (lze zmírnit glykopyrrolátem)',
      'Laryngospasmus (vzácný, ale zvýšené riziko z důvodu zachovaných reflexů horních dýchacích cest)'
    ],
    pearls: [
      'Způsobuje "dissociative anesthesia": pacient se zdá bdělý (otevřené oči, upřený pohled), ale je odpojen od okolí a necítí bolest.',
      'Udržuje ochranné reflexy dýchacích cest a spontánní dýchání lépe než jakékoli jiné indukční anestetikum (i když po rychlé IV aplikaci může apnoe přesto nastat).',
      'Působí jako silný bronchodilatátor uvolňováním endogenních katecholaminů. Vynikající volba pro pacienty s aktivním těžkým astmatem nebo "status asthmaticus".'
    ]
  },
  {
    id: 'etomidate',
    name: 'Etomidate',
    genericName: 'Etomidát (Amidate)',
    category: 'induction',
    categoryLabel: 'Indukční anestetikum',
    class: 'Karboxylovaný imidazolový derivát / GABA-A agonista',
    mechanism: 'Usnadňuje GABA-A receptorový přenos, čímž hyperpolarizuje neuronální membrány.',
    indications: [
      'Úvod do celkové anestezie, zejména u pacientů s těžkým kardiovaskulárním onemocněním, chlopenní dysfunkcí, hypovolemií nebo ICHS.'
    ],
    dosageInduction: '0,2 - 0,3 mg/kg IV.',
    pediatricDosage: '0,2 - 0,3 mg/kg IV (běžně se nepoužívá pod 10 let věku, pokud není pacient hemodynamicky nestabilní).',
    standardPrep: '2 mg/mL roztok.',
    onset: '30 - 60 sekund.',
    duration: '3 - 5 minut (rychlé zotavení v důsledku redistribuce).',
    contraindications: [
      'Známá přecitlivělost na etomidát',
      'Těžká sepse / septický šok (relativní, z důvodu adrenální suprese)',
      'Adrenální insuficience'
    ],
    adverseEffects: [
      'Myoklonus (mimovolní pohyby svalů při úvodu) - velmi časté, pokud není pacient předem léčen fentanylem nebo midazolamem',
      'Adrenokortikální suprese: inhibuje 11-beta-hydroxylázu, čímž blokuje syntézu kortizolu po dobu 12-24 hodin po jedné dávce',
      'Bolest při aplikaci a vysoký výskyt pooperační nevolnosti a zvracení (PONV)'
    ],
    pearls: [
      'Hemodynamicky nejstabilnější dostupné indukční anestetikum. Zanedbatelná deprese myokardu a vazodilatace; krevní tlak zůstává při úvodu stabilní.',
      'Neuvolňuje histamin, díky čemuž je neuvěřitelně bezpečný pro pacienty s vysokým alergickým potenciálem nebo těžkým reaktivním onemocněním dýchacích cest.',
      'Otázka adrenální suprese zůstává předmětem diskusí. I když jedna dávka prodlužuje období bez kortizolu, velké RCT studie ukazují minimální klinicky významný vliv na mortalitu u septických pacientů. Kontinuální infuze jsou však přísně zakázány.'
    ]
  },
  {
    id: 'succinylcholine',
    name: 'Succinylcholine',
    genericName: 'Sukcinylcholin (Anectine / Sux)',
    category: 'paralytics',
    categoryLabel: 'Svalové relaxans',
    class: 'Depolarizující neuromuskulární blokátor (NMB)',
    mechanism: 'Působí jako agonista na nikotinových acetylcholinových receptorech na motorické ploténce, způsobuje prolongovanou depolarizaci, která brání dalším akčním potenciálům.',
    indications: [
      'Rapid Sequence Induction (RSI) a intubace k rychlému zajištění dýchacích cest',
      'Léčba akutního laryngospasmu'
    ],
    dosageInduction: '1,0 - 1,5 mg/kg IV (podle skutečné tělesné hmotnosti) nebo 3 - 4 mg/kg IM (pokud není IV přístup).',
    pediatricDosage: '1,5 - 2,0 mg/kg IV (kojenci vyžadují vyšší dávky z důvodu většího objemu extracelulární tekutiny).',
    standardPrep: '20 mg/mL roztok.',
    onset: '30 - 60 sekund IV (nejrychlejší nástup ze všech relaxancií).',
    duration: '5 - 10 minut (rychlá hydrolýza plazmatickou cholinesterázou / pseudocholinesterázou).',
    contraindications: [
      'Známá genetická abnormalita pseudocholinesterázy (prodloužená paralýza)',
      'Hyperkalémie nebo riziko hyperkalémie (popáleniny starší než 24 hodin, poranění míchy/paralýza, těžká crush zranění, chronická atrofie z nepoužívání)',
      'Anamnéza maligní hypertermie (absolutní spouštěč)',
      'Penetrující poranění oka (depolarizace přechodně zvyšuje vnitrooční tlak)'
    ],
    adverseEffects: [
      'Přechodná hyperkalémie (typicky bezpečně zvyšuje draslík o 0,5 - 1,0 mEq/L, ale nebezpečné u rizikových skupin)',
      'Fascikulace (svalové záškuby), které mohou způsobit pooperační bolest svalů (myalgii)',
      'Bradykardie (zejména u dětských pacientů nebo po druhé dávce - u dětí předem podat atropin)',
      'Maligní hypertermie (těžký spouštěč - vyžaduje dantrolen)'
    ],
    pearls: [
      'Klasický "gold standard" pro Rapid Sequence Induction (RSI) díky bezkonkurenční kombinaci rychlého nástupu (30-60s) a krátkého trvání (~5-10min).',
      'Pokud intubace selže a ventilace maskou je nemožná, krátké trvání je klíčovou záchrannou sítí — pacient rychle obnoví spontánní ventilaci.',
      'Nemá chemický "reversal agent"; je nutné vyčkat na metabolismus plazmatickou pseudocholinesterázou.'
    ]
  },
  {
    id: 'rocuronium',
    name: 'Rocuronium',
    genericName: 'Rokuronium bromid (Zemuron)',
    category: 'paralytics',
    categoryLabel: 'Svalové relaxans',
    class: 'Nedepolarizující NMB (Aminosteroid)',
    mechanism: 'Působí jako kompetitivní antagonista na nikotinových acetylcholinových receptorech, brání vazbě acetylcholinu a zabraňuje depolarizaci.',
    indications: [
      'Usnadnění tracheální intubace během rutinního úvodu nebo Rapid Sequence Induction (RSI)',
      'Intraoperační kosterní svalová relaxace během chirurgického výkonu',
      'Paralýza na JIP k usnadnění umělé plicní ventilace'
    ],
    dosageInduction: '0,6 mg/kg IV pro standardní intubaci; 1,0 - 1,2 mg/kg IV pro Rapid Sequence Induction (RSI).',
    pediatricDosage: '0,6 - 1,0 mg/kg IV.',
    standardPrep: '10 mg/mL roztok.',
    onset: '60 - 90 sekund (při RSI dávce 1,2 mg/kg nástup odpovídá sukcinylcholinu, cca 60 sekund).',
    duration: '35 - 50 minut (střednědobě působící, prodlouženo při poruše jater nebo u starších osob).',
    contraindications: [
      'Přecitlivělost na rokuronium nebo jiné aminosteroidní neuromuskulární blokátory'
    ],
    adverseEffects: [
      'Prodloužená neuromuskulární blokáda (zejména při hypotermii nebo acidóze)',
      'Anafylaxe (vzácná, ale neuromuskulární blokátory jsou nejčastější příčinou perioperační anafylaxe)'
    ],
    pearls: [
      'Často nahrazuje sukcinylcholin pro RSI u pacientů s hyperkalémií, selháním ledvin, neuromuskulárním onemocněním nebo popáleninami.',
      'Může být okamžitě zrušen v jakékoli hloubce blokády pomocí Sugammadexu (Bridion) v příslušných dávkách (2, 4, nebo 16 mg/kg v závislosti na hloubce).',
      'Nezpůsobuje fascikulace ani nezvyšuje vnitrooční tlak.'
    ]
  },
  {
    id: 'fentanyl',
    name: 'Fentanyl',
    genericName: 'Fentanyl (Sublimaze)',
    category: 'analgesics',
    categoryLabel: 'Analgetikum (Opioid)',
    class: 'Syntetický opioid / agonista mu-receptorů',
    mechanism: 'Váže se na mu-opioidní receptory v centrálním nervovém systému, tlumí vzestupné dráhy bolesti a mění vnímání bolesti a reakci na ni.',
    indications: [
      'Analgetické adstringens při úvodu do anestezie (tlumí sympatickou presorickou reakci na intubaci)',
      'Intraoperační kontrola bolesti',
      'Pooperační analgezie a sedace na JIP'
    ],
    dosageInduction: '1 - 2 mcg/kg IV (až 5 - 10 mcg/kg pro kardioanestezii nebo silnou supresi reflexů).',
    pediatricDosage: '1 - 2 mcg/kg IV.',
    standardPrep: '50 mcg/mL roztok.',
    onset: '1 - 2 minuty IV.',
    duration: '30 - 60 minut (střednědobé, rychlé ukončení účinku v důsledku redistribuce do tuku a svalů).',
    contraindications: [
      'Těžká deprese dýchání (pokud pacient není intubován nebo ventilován)',
      'Přecitlivělost na fentanyl nebo opioidy'
    ],
    adverseEffects: [
      'Deprese dýchání a sekundární apnoe',
      'Bradykardie (centrální vagová stimulace)',
      'Nevolnost a zvracení (stimulace chemoreceptorové spouštěcí zóny)',
      'Pruritus (svědění - i když s mnohem menším uvolňováním histaminu než morfin)',
      'Rigidita hrudní stěny ("stiff chest syndrome") při rychlém IV podání vysokých dávek (>5 mcg/kg) - léčí se svalovými relaxancii'
    ],
    pearls: [
      'Hlavní lék používaný k utlumení "pressor response" (hypertenze a tachykardie) způsobené laryngoskopií a tracheální intubací.',
      'Vysoce lipofilní, rychle přechází přes hematoencefalickou bariéru a prakticky neuvolňuje histamin — což zajišťuje vysokou hemodynamickou stabilitu.',
      'Při depresi dýchání může být antagonizován Naloxonem (0,04 - 0,4 mg IV).'
    ]
  },
  {
    id: 'midazolam',
    name: 'Midazolam',
    genericName: 'Midazolam (Versed)',
    category: 'sedatives',
    categoryLabel: 'Sedativum / Anxiolytikum',
    class: 'Benzodiazepin',
    mechanism: 'Zesiluje inhibiční účinek GABA-A receptorů zvýšením frekvence otevírání chloridových kanálů, což vede k sedaci a amnézii.',
    indications: [
      'Preoperační anxiolýza a sedace (premedikace)',
      'Procedurální sedace',
      'Co-indukční lék ke snížení požadovaných dávek indukčních anestetik'
    ],
    dosageInduction: '0,02 - 0,1 mg/kg IV titrace (obvykle premedikační dávka 1 - 2,5 mg).',
    pediatricDosage: '0,25 - 0,5 mg/kg perorálně (max 15 mg) nebo 0,05 - 0,15 mg/kg IV.',
    standardPrep: '1 mg/mL nebo 5 mg/mL roztoky.',
    onset: '1 - 3 minuty IV; 15 - 20 minut perorálně.',
    duration: '30 - 120 minut (krátkodobě působící ve srovnání s diazepamem nebo lorazepamem).',
    contraindications: [
      'Akutní glaukom s úzkým úhlem',
      'Těžká deprese dýchání (nemonitorovaná)',
      'Těžká porucha funkce jater'
    ],
    adverseEffects: [
      'Dávkově závislá deprese dýchání a obstrukce dýchacích cest',
      'Hypotenze (zejména v kombinaci s opioidy)',
      'Paradoxní excitace/neklid (vzácné, častější u dětí nebo starších osob)'
    ],
    pearls: [
      'Navozuje vynikající anterográdní amnézii (pacient si nepamatuje události po podání, což je u úvodu do anestezie vysoce žádoucí).',
      'Ve své ampuli je vodorozpustný, ale při fyziologickém pH se stává vysoce lipofilním, což umožňuje rychlý nástup účinku v mozku.',
      'Antagonizovatelný Flumazenilem (0,2 mg IV frakcionovaně, až do 1 mg celkem).'
    ]
  },
  {
    id: 'phenylephrine',
    name: 'Phenylephrine',
    genericName: 'Fenyleftrin (Neo-Synephrine)',
    category: 'vasoactive',
    categoryLabel: 'Kardiovaskulární / Vasoaktivní látka',
    class: 'Čistý alpha-1 adrenergní agonista',
    mechanism: 'Přímo stimuluje alpha-1 receptory cévní hladké svaloviny, způsobuje vazokonstrikci a zvyšuje systémovou cévní rezistenci (SVR) a krevní tlak.',
    indications: [
      'Léčba hypotenze při celkové nebo spinální anestezii',
      'Vazodilatační šok (neurogenní šok, sepse)'
    ],
    dosageInduction: '40 - 100 mcg IV bolusy (Často připravované jako "Neo sticks" o koncentraci 100 mcg/mL). Infuze: 0,1 - 2,0 mcg/kg/min.',
    pediatricDosage: '5 - 10 mcg/kg IV bolus.',
    standardPrep: '10 mg/mL lahvička (Musí se naředit! Obvykle 10 mg zředěno ve 100 mL na koncentraci 100 mcg/mL).',
    onset: 'Okamžitý IV.',
    duration: '15 - 20 minut.',
    contraindications: [
      'Těžká bradykardie (relativní, protože vazokonstrikce způsobuje reflexní bradykardii)',
      'Těžká ischemická choroba srdeční / akutní ischemie myokardu (zvýšený afterload)'
    ],
    adverseEffects: [
      'Reflexní bradykardie (baroreceptorová reakce na náhlé zvýšení TK)',
      'Snížený srdeční výdej (v důsledku nadměrného afterloadu a reflexní bradykardie)',
      'Arytmie / tkáňová nekróza při extravazaci (periferní infiltrace)'
    ],
    pearls: [
      'Lék volby k léčbě hypotenze vyvolané spinální anestezií (spinální blokáda způsobuje těžkou sympatickou vazodilataci; fenyleftrin tomu přímo čelí).',
      'Nezpůsobuje tachykardii — na rozdíl od efedrinu — takže je ideální pro tachykardické hypotenzní pacienty.',
      'Dbejte na reflexní bradykardii; pokud srdeční frekvence klesne příliš nízko (<45-50) při stoupajícím TK, fenyleftrin vysaďte a zvažte podání glykopyrrolátu nebo efedrinu.'
    ]
  },
  {
    id: 'ephedrine',
    name: 'Ephedrine',
    genericName: 'Efedrin',
    category: 'vasoactive',
    categoryLabel: 'Kardiovaskulární / Vasoaktivní látka',
    class: 'Sympatomimetikum (Smíšený alpha/beta agonista)',
    mechanism: 'Přímo stimuluje alpha- a beta-adrenergní receptory a nepřímo zvyšuje krevní tlak a srdeční frekvenci uvolňováním endogenního noradrenalinu.',
    indications: [
      'Hypotenze vyvolaná anestezií, zejména pokud je doprovázena relativní bradykardií.'
    ],
    dosageInduction: '5 - 10 mg IV bolusy titrované podle účinku.',
    pediatricDosage: '0,1 - 0,2 mg/kg IV bolus.',
    standardPrep: '50 mg/mL lahvička (Obvykle se ředí na 5 mg/mL v 10mL stříkačce).',
    onset: '1 - 2 minuty IV.',
    duration: '10 - 60 minut.',
    contraindications: [
      'Tachykardie nebo aktivní ischemie myokardu',
      'Pacienti užívající inhibitory monoaminooxidázy (MAOI - riziko hypertenzní krize)'
    ],
    adverseEffects: [
      'Tachykardie, palpitace nebo arytmie',
      'Ischemie myokardu z důvodu zvýšených nároků na kyslík',
      'Tachyfylaxe: opakované dávky vedou ke snižování účinnosti, protože dochází k vyčerpání zásob endogenního noradrenalinu.'
    ],
    pearls: [
      'Obnovuje krevní tlak a zároveň zvyšuje nebo udržuje srdeční frekvenci. Ideální, pokud je hypotenze doprovázena bradykardií (na rozdíl od fenyleftrinu, který SF zpomaluje).',
      'Mimořádně dobře udržuje děložní průtok krve při porodnické spinální anestezii, historicky preferován u císařských řezů.',
      'Vzhledem k tomu, že silně spoléhá na nepřímé uvolňování noradrenalinu, jeho účinek je snížen u pacientů s deplecí katecholaminů (např. chronické těžké srdeční selhání, chronické užívání kokainu).'
    ]
  },
  {
    id: 'sugammadex',
    name: 'Sugammadex',
    genericName: 'Sugammadex (Bridion)',
    category: 'reversal',
    categoryLabel: 'Reversal agent',
    class: 'Selektivní vazač relaxancií (SRBA)',
    mechanism: 'Modifikovaný gama-cyklodextrin, který enkapsuluje neuromuskulární blokátory (rokuronium > vekuronium) v plazmě, čímž jim brání ve vazbě na receptory a posouvá koncentrační gradient pryč z neuromuskulární ploténky.',
    indications: [
      'Reverz mírné nebo hluboké neuromuskulární blokády vyvolané rokuroniem nebo vekuroniem.',
      'Okamžitý reverz rokuronia po scénáři "Can\'t Intubate, Can\'t Oxygenate" (CICO).'
    ],
    dosageInduction: '2,0 mg/kg IV pro mírný blok (návrat TOF 2); 4,0 mg/kg pro hluboký blok (post-tetanický počet 1-2); 16,0 mg/kg pro okamžitý záchranný reverz rokuronia v naléhavé situaci.',
    standardPrep: '100 mg/mL roztok ve 2mL nebo 5mL lahvičkách.',
    onset: '1 - 3 minuty (ruší svalový blok výrazně rychleji a kompletněji než kombinace anticholinesteráz a antimuskarinik).',
    duration: 'Vysoce stabilní. Vylučován nezměněn ledvinami.',
    contraindications: [
      'Těžká porucha funkce ledvin / dialýza (nedoporučuje se, protože cyklodextrinový komplex se vylučuje ledvinami)',
      'Těžká přecitlivělost'
    ],
    adverseEffects: [
      'Anafylaxe (vzácná, vyskytuje se u cca 0,3%)',
      'Přechodná bradykardie / prodloužení QT intervalu',
      'Interakce s perorální antikoncepcí: váže se na progesteron, což činí jednu dávku ekvivalentní vynechání jedné denní pilulky (pacientky musí po dobu 7 dnů používat doplňkovou antikoncepci).'
    ],
    pearls: [
      'Absolutní revoluce v bezpečnosti anestezie! Nemá žádné autonomní vedlejší účinky — zcela obchází riziko těžké bradykardie a bronchospasmu, které hrozí u reverzu Neostigminem.',
      'Dokáže zrušit hluboký, vysokodávkový blok rokuroniem (1,2 mg/kg) za méně než 3 minuty — rychleji než přirozené zotavení ze sukcinylcholinu, což řeší bezpečnostní dilemata u RSI.',
      'Neruší depolarizující látky (sukcinylcholin) ani benzylisochinoliny (cisatrakurium).'
    ]
  },
  {
    id: 'thiopental',
    name: 'Thiopental',
    genericName: 'Thiopental sodium (Pentothal)',
    category: 'induction',
    categoryLabel: 'Indukční anestetikum',
    class: 'Barbiturát / modulátor GABA-A',
    mechanism: 'Váže se na GABA-A receptory, prodlužuje dobu otevření chloridových kanálů, což vede k hyperpolarizaci neuronů a rychlé cerebrální depresi.',
    indications: [
      'Úvod do celkové anestezie (zejména v neuroanestezii při zvýšeném ICP)',
      'Refrakterní status epilepticus',
      'Cerebrální protekce při fokální ischemii'
    ],
    dosageInduction: '3,0 - 5,0 mg/kg IV bolus (Snížit na 1,5 - 2,5 mg/kg u starších nebo hemodynamicky nestabilních pacientů).',
    pediatricDosage: '5,0 - 7,0 mg/kg IV (vyšší dávkové požadavky kvůli rychlému metabolismu a většímu distribučnímu objemu).',
    standardPrep: 'Rekonstituovaný prášek, typicky připravovaný jako 2,5% roztok (25 mg/mL).',
    onset: '15 - 30 sekund.',
    duration: '5 - 15 minut (rychlý pokles účinku v důsledku redistribuce do kosterního svalstva).',
    contraindications: [
      'Akutní intermitentní porfyrie nebo porfyrie variegata (absolutní)',
      'Těžký kardiovaskulární kolaps nebo hypovolemický šok',
      'Známá přecitlivělost na barbituráty'
    ],
    adverseEffects: [
      'Výrazná arteriální vazodilatace a deprese myokardu (hypotenze)',
      'Deprese dýchání a apnoe',
      'Těžká tkáňová nekróza a spasmus při intraarteriálním podání nebo extravazaci (vysoce alkalické pH ~10,5)',
      'Laryngospasmus nebo bronchospasmus při manipulaci v dýchacích cestách před dosažením dostatečné hloubky anestezie'
    ],
    pearls: [
      'Silný cerebrální vazokonstriktor: snižuje průtok krve mozkem (CBF), cerebrální metabolický obrat kyslíku (CMRO2) a intrakraniální tlak (ICP), což z něj činí vynikající neuroprotektivum.',
      'Absolutní kontraindikace u porfyrie: indukuje ALA syntetázu, což spouští život ohrožující porfyrickou krizi (paralýza, kruté bolesti břicha).',
      'Při náhodném podání do arterie ponechte kanylu na místě, aplikujte vazodilatancia (např. papaverin, lidokain) a heparinizujte k prevenci trombózy.'
    ]
  },
  {
    id: 'dexmedetomidine',
    name: 'Dexmedetomidine',
    genericName: 'Dexmedetomidin (Precedex / Dexdor)',
    category: 'sedatives',
    categoryLabel: 'Sedativum',
    class: 'Vysoce selektivní agonista alpha-2 receptorů',
    mechanism: 'Selektivně stimuluje presynaptické alpha-2 receptory v locus coeruleus, čímž snižuje uvolňování noradrenalinu a vede ke kooperativní sedaci (napodobující přirozený spánek) a analgezii.',
    indications: [
      'Sedace na JIP u ventilovaných pacientů',
      'Procedurální sedace (např. při bdělé intubaci)',
      'Adstringens k redukci spotřeby opioidů a prevenci pooperačního deliria'
    ],
    dosageInduction: 'Nasycovací dávka: 0,5 - 1,0 mcg/kg IV během 10 minut (často se vynechává kvůli riziku bradykardie/hypotenze). Udržovací: 0,2 - 0,7 mcg/kg/h kontinuální infuzí.',
    pediatricDosage: 'Sedace: 0,2 - 1,0 mcg/kg/h IV.',
    standardPrep: '100 mcg/mL, musí být zředěn na 4 mcg/mL pro infuzi.',
    onset: '10 - 15 minut (pomalejší než propofol nebo midazolam).',
    duration: '1 - 2 hodiny po ukončení infuze (eliminační poločas ~2 hodiny).',
    contraindications: [
      'Těžká bradykardie nebo pokročilý AV blok (2. nebo 3. stupně) bez kardiostimulátoru',
      'Dekompenzované srdeční selhání nebo těžká hypotenze'
    ],
    adverseEffects: [
      'Bradykardie (v důsledku snížení sympatického tonu a aktivace vagu)',
      'Hypotenze (při rychlém podání nasycovací dávky může nastat přechodná hypertenze kvůli periferní alpha-2b vazokonstrikci)',
      'Sucho v ústech'
    ],
    pearls: [
      'Poskytuje "kooperativní sedaci": pacient je snadno probuditelný, schopen spolupráce a plnění příkazů, což usnadňuje odpojování (weaning) od ventilátoru.',
      'Nezpůsobuje depresi dýchání (neovlivňuje dechové centrum ani reakci na hyperkapnii), což z něj činí velmi bezpečné sedativum pro neintubované pacienty.',
      'Vysoce účinný v prevenci "emergence delirium" u dětí a při tlumení pooperační třesavky.'
    ]
  },
  {
    id: 'norepinephrine',
    name: 'Norepinephrine',
    genericName: 'Noradrenalin (Levophed)',
    category: 'vasoactive',
    categoryLabel: 'Kardiovaskulární / Vasoaktivní',
    class: 'Přímé sympatomimetikum (agonista alpha-1 > beta-1)',
    mechanism: 'Přímo stimuluje alpha-1 receptory a způsobuje silnou arteriální a žilní vazokonstrikci; mírně stimuluje beta-1 receptory, čímž zvyšuje kontraktilitu myokardu.',
    indications: [
      'Lék první volby u septického, kardiogenního nebo neurogenního šoku',
      'Refrakterní hypotenze nereagující na tekutinovou resuscitaci'
    ],
    dosageInduction: 'Kontinuální infuze: 0,05 - 1,0 mcg/kg/min IV, titrováno na cílový střední arteriální tlak (MAP > 65 mmHg).',
    pediatricDosage: '0,05 - 0,5 mcg/kg/min IV infuzí.',
    standardPrep: 'Typicky 4 mg ve 250 mL fyziologického roztoku (16 mcg/mL) nebo koncentrovaný roztok 4 mg v 50 mL (80 mcg/mL) do lineárního dávkovače.',
    onset: '1 - 2 minuty IV.',
    duration: '1 - 2 minuty po zastavení infuze (rychlá metabolizace COMT a MAO).',
    contraindications: [
      'Hypovolemie (před zahájením je nutné doplnit objem, kromě urgentních život zachraňujících situací)',
      'Známá přecitlivělost na noradrenalin'
    ],
    adverseEffects: [
      'Závažná orgánová nebo končetinová ischemie při nadměrné vazokonstrikci',
      'Reflexní bradykardie (často maskovaná beta-1 chronotropií)',
      'Arytmie (tachykardie, fibrilace síní)',
      'Nekróza tkáně při extravazaci'
    ],
    pearls: [
      'Noradrenalin je absolutním lékem první volby u septického šoku; má nižší výskyt arytmií a nižší mortalitu ve srovnání s dopaminem.',
      'Extravazace je urgentní stav! Při paravenózním podání okamžitě aplikujte lokálně phentolamin (alpha-blokátor) k zamezení nekrózy.',
      'Přednostně se podává do centrálního žilního katetru; periferní podání je možné pouze krátkodobě do velké a bezpečné žíly.'
    ]
  },
  {
    id: 'atropine',
    name: 'Atropine',
    genericName: 'Atropin sulfát',
    category: 'vasoactive',
    categoryLabel: 'Kardiovaskulární / Vasoaktivní',
    class: 'Anticholinergikum / Antimuskarinikum',
    mechanism: 'Nekompetitivní antagonista acetylcholinu na muskarinových receptorech. Blokuje parasympatický (vagový) vliv na SA a AV uzel, což zvyšuje srdeční frekvenci.',
    indications: [
      'Symptomatická nebo hemodynamicky nestabilní bradykardie (ACLS lék první volby)',
      'Snížení sekrece slin a v dýchacích cestách před operací',
      'Antidotum při otravě organofosfáty nebo cholinergní krizi'
    ],
    dosageInduction: 'Bradykardie: 1,0 mg IV bolus, opakovat každých 3-5 minut (max. celková dávka 3,0 mg). Tlumivý efekt na sekreci: 0,4 - 0,6 mg IV/IM.',
    pediatricDosage: '0,02 mg/kg IV (minimální jednorázová dávka 0,1 mg k zamezení paradoxní bradykardie).',
    standardPrep: '0,5 mg/mL nebo 1,0 mg/mL ampule.',
    onset: '2 - 4 minuty IV.',
    duration: '2 - 4 hodiny (účinek na zornici přetrvává déle).',
    contraindications: [
      'Známá přecitlivělost na anticholinergika',
      'Glaukom s uzavřeným úhlem (hrozí akutní záchvat)',
      'Tyreotoxikóza nebo akutní ischémie myokardu (tachykardie zvyšuje spotřebu kyslíku)'
    ],
    adverseEffects: [
      'Tachykardie, palpitace, arytmie',
      'Anticholinergní příznaky: sucho v ústech, rozmazané vidění (mydriáza), retence moči, zácpa, zmatenost/delirium (zejména u starších osob)'
    ],
    pearls: [
      'Dle aktualizovaných doporučení ACLS byla úvodní dávka u bradykardie zvýšena z 0,5 mg na 1,0 mg IV.',
      'Dávky nižší než 0,5 mg u dospělých jsou zakázány; mohou vyvolat paradoxní bradykardii centrální stimulací vagu.',
      'Atropin je neúčinný u pacientů po transplantaci srdce (chybí vagová inervace) a je málo účinný u AV blokády II. stupně typu Mobitz II a AV blokády III. stupně s širokým QRS komplexem (zde je indikována kardiostimulace).'
    ]
  },
  {
    id: 'naloxone',
    name: 'Naloxone',
    genericName: 'Naloxon (Narcan)',
    category: 'reversal',
    categoryLabel: 'Antidotum / Reversal agent',
    class: 'Nekompetitivní antagonista opioidních receptorů',
    mechanism: 'Kompetitivní antagonista s vysokou afinitou k receptorům mu, kappa a delta. Vytěsňuje molekuly opioidů z vazby a kompletně ruší jejich účinky.',
    indications: [
      'Reverz (zrušení) útlumu dýchání a sedace vyvolané opioidy',
      'Diagnostika a léčba podezření na akutní předávkování opioidy'
    ],
    dosageInduction: 'Pooperační reverz: 0,04 - 0,1 mg IV postupně titrovat k obnově dýchání bez ztráty analgezie. Akutní předávkování: 0,4 - 2,0 mg IV/IM/IN každé 2-3 minuty podle potřeby.',
    pediatricDosage: '0,01 - 0,1 mg/kg IV/IM.',
    standardPrep: '0,4 mg/mL ampule.',
    onset: '1 - 2 minuty IV; 2 - 5 minut IM.',
    duration: '30 - 90 minut (kratší než účinek většiny opioidů, hrozí riziko návratu dechové deprese).',
    contraindications: [
      'Známá přecitlivělost na naloxon',
      'Opioidní závislost (relativní - vyvolá akutní odvykací syndrom)'
    ],
    adverseEffects: [
      'Akutní abstinenční syndrom: extrémní neklid, pocení, nauzea, zvracení, hypertenze, tachykardie',
      'Akutní plicní edém nebo maligní arytmie (způsobené masivním vyplavením katecholaminů při rychlém zrušení analgezie)'
    ],
    pearls: [
      'Klíčové varování: účinek naloxonu (45-90 min) je kratší než účinek většiny opioidů (např. morfin, fentanyl). Pacient musí být sledován z důvodu rizika návratu hypoventilace ("renarkotizace").',
      'U pooperačních pacientů titrujte v minidávkách (např. po 0,04 mg), abyste obnovili dýchání, ale ponechali pacientovi analgezii.',
      'Rychlý zvrat účinku opioidů může vyvolat masivní sympatickou reakci, která u rizikových kardiaků může vést k plicnímu edému, hypertenzní krizi nebo srdeční zástavě.'
    ]
  },
  {
    id: 'neostigmine',
    name: 'Neostigmine',
    genericName: 'Neostigmin methylsulfát',
    category: 'reversal',
    categoryLabel: 'Antidotum / Reversal agent',
    class: 'Inhibitor acetylcholinesterázy',
    mechanism: 'Reverzibilně inhibuje acetylcholinesterázu, čímž brání štěpení acetylcholinu. Nahromaděný acetylcholin v nervosvalové ploténce pak vytěsňuje nedepolarizující svalová relaxancia z receptorů.',
    indications: [
      'Reverz (zrušení) blokády vyvolané nedepolarizujícími svalovými relaxancii (rokuronium, cisatrakurium) na konci operace',
      'Léčba myasthenia gravis nebo akutní střevní pseudoobstrukce (Ogilvieho syndrom)'
    ],
    dosageInduction: '0,03 - 0,07 mg/kg IV (max. jednorázová dávka 5,0 mg). Musí být VŽDY podán společně s anticholinergikem (glykopyrrolát nebo atropin) k zabránění těžké bradykardie.',
    pediatricDosage: '0,03 - 0,07 mg/kg IV v kombinaci s atropinem.',
    standardPrep: '0,5 mg/mL nebo 1,0 mg/mL ampule.',
    onset: '7 - 11 minut (pomalý nástup, vyžaduje přítomnost spontánních záškubů na TOF).',
    duration: '60 - 120 minut.',
    contraindications: [
      'Mechanická neprůchodnost střev nebo močových cest',
      'Těžká bradykardie nebo aktivní bronchospasmus',
      'Přecitlivělost na neostigmin'
    ],
    adverseEffects: [
      'Těžká bradykardie, AV blokády až asystolie (parasympatická hyperstimulace)',
      'Bronchokonstrikce a zvýšená sekrece v dýchacích cestách (bronchospasmus)',
      'Zvýšená motilita střev, křeče v břiše, hypersalivace',
      'Miosis'
    ],
    pearls: [
      'Musí být VŽDY podán společně s atropinem (0,015 mg/kg) nebo glykopyrrolátem (0,2 mg na každých 1,0 mg neostigminu) k vyblokování závažných muskarinových účinků (bradykardie, asystolie, bronchospasmus).',
      'Lze podat pouze při známkách spontánního odeznívání blokády (minimálně 2-4 záškuby na TOF monitoru). Pokud je podán při hluboké blokádě, může nadbytek acetylcholinu blokádu naopak prohloubit.',
      'Neúčinkuje na sukcinylcholin! Naopak prodlužuje jeho účinek, protože neostigmin inhibuje také plazmatickou pseudocholinesterázu.'
    ]
  },
  {
    id: 'dexamethasone',
    name: 'Dexamethasone',
    genericName: 'Dexamethason (Decadron / Fortecortin)',
    category: 'reversal',
    categoryLabel: 'Antiemetikum / Kortikosteroid',
    class: 'Syntetický kortikosteroid / agonista glukokortikoidních receptorů',
    mechanism: 'Potlačuje zánět a imunitní odpověď; snižuje syntézu prostaglandinů a uvolňování serotoninu v CNS, čímž předchází pooperační nevolnosti a zvracení (PONV).',
    indications: [
      'Profylaxe pooperační nevolnosti a zvracení (PONV)',
      'Prevence a léčba edému hrtanu / otoku dýchacích cest',
      'Adjuvantní léčba anafylaxe nebo těžké laryngitidy'
    ],
    dosageInduction: '4 - 10 mg IV bolus (typicky podáván krátce po úvodu k profylaxi PONV).',
    pediatricDosage: '0,15 - 0,5 mg/kg IV (max. 10 mg).',
    standardPrep: '4 mg/mL nebo 8 mg/mL ampule.',
    onset: '1 - 2 hodiny (opožděný genomický účinek, ačkoliv protizánětlivý efekt začíná dříve).',
    duration: '36 - 72 hodin (dlouhý biologický poločas).',
    contraindications: [
      'Aktivní systémové plísňové infekce',
      'Těžký nekompenzovaný diabetes (relativní)',
      'Přecitlivělost na dexamethason'
    ],
    adverseEffects: [
      'Přechodné pálení v perineální oblasti (při rychlém IV podání u bdělého pacienta)',
      'Hyperglykémie (zvyšuje hladinu glukózy v krvi)',
      'Zpomalené hojení ran nebo zvýšené riziko infekce (při dlouhodobém užívání, vzácné u jedné dávky)',
      'Nespavost nebo mírný neklid'
    ],
    pearls: [
      'Vysoce účinný v profylaxi PONV, zejména v kombinaci s ondansetronem (působí synergicky přes různé receptory).',
      'Varujte bdělé pacienty před rychlým podáním: způsobuje typický, odeznívající, ale intenzivní pocit pálení/svědění v perineu.',
      'Výrazně snižuje otok dýchacích cest po traumatické nebo dlouhé intubaci; ideální k prevenci poextubačního stridoru.'
    ]
  }
];
