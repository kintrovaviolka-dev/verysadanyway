import { Medication } from '../types';

export const ANESTHESIA_MEDS_CS: Medication[] = [
  {
    id: 'propofol',
    name: 'Propofol',
    genericName: 'Propofol (Diprivan)',
    category: 'induction',
    categoryLabel: 'Indukční anestetikum',
    class: 'Alkylfenolový derivát / pozitivní allosterický modulátor receptorů GABA-A',
    mechanism: 'Pozitivní allosterický modulátor receptorů GABA-A: váže se na transmembránovou doménu β-podjednotek (hlavně β2 a β3), čímž dramaticky zvyšuje afinitu receptoru k endogenní GABA a prodlužuje dobu otevření chloridového kanálu. Ve vyšších dávkách chloridové póry přímo otevírá (GABA-mimetický účinek) i bez přítomnosti GABA. Výsledný masivní influx Cl⁻ způsobuje hyperpolarizaci neuronů a rychlou cerebrální depresi (hypnóza a amnézie bez analgetického účinku). Doplňkově inhibuje NMDA glutamátové receptory a moduluje napěťově řízené kalciové kanály. V kardiovaskulárním systému vyvolává výraznou systémovou arteriální i venózní vazodilataci (potlačením centrálního sympatického tonu a přímou inhibicí intracelulární mobilizace Ca²⁺ v hladkém svalu cév) spolu s mírnou negativní inotropií; zásadní je, že otupuje baroreflex (často chybí kompenzatorní tachykardie), což vede k precipitaci hypotenze. V dechovém centru působí na dávce závislý útlum ventilace se snížením odpovědi na hyperkapnii i hypoxii.',
    indications: [
      'Úvod do celkové anestezie (indukce)',
      'Vedení celkové anestezie (TIVA – Total Intravenous Anesthesia)',
      'Procedurální sedace a sedace ventilovaných pacientů na JIP'
    ],
    dosageInduction: '1,5 - 2,5 mg/kg IV bolus (snížit dávku na 1,0 - 1,5 mg/kg u geriatrických pacientů nebo při ASA III/IV).',
    pediatricDosage: '2,5 - 3,5 mg/kg IV (vyšší dávkové nároky z důvodu většího distribučního objemu u dětí).',
    standardPrep: '1% emulze (10 mg/mL) ve 20mL nebo 50mL ampulích/lahvičkách; k dispozici též 2% emulze (20 mg/mL).',
    onset: '30 - 45 sekund (rychlý cirkulační čas „arm-brain“).',
    duration: '5 - 10 minut (v důsledku rychlé redistribuce z vysoce prokrvených orgánů do svalů a tuku).',
    contraindications: [
      'Přecitlivělost na propofol, vaječný lecitin nebo sójový olej (zvýšená obezřetnost)',
      'Těžká hemodynamická nestabilita a dekompenzovaný hypovolemický šok',
      'Kritická aortální stenóza (vysoká vulnerabilita k náhlému poklesu systémového afterloadu)'
    ],
    adverseEffects: [
      'Výrazná hypotenze (pokles preloadu i afterloadu v kombinaci se supresí baroreflexu)',
      'Dávkově závislá deprese dýchání až přechodná apnoe',
      'Bolest při intravenózní injekci (lze minimalizovat podáním lidokainu 0,5 mg/kg IV předem nebo volbou široké žíly)',
      'Myoklonie a mimovolní záškuby při úvodu (neepileptického původu)'
    ],
    pearls: [
      'Má silné antiemetické účinky (zprostředkované modulací dopaminových drah a antagonizmem 5-HT3 receptorů v area postrema), díky čemuž je lékem volby u pacientů s vysokým rizikem PONV.',
      'Mimořádně efektivně potlačuje faryngeální a laryngeální reflexy, což umožňuje snadné zavedení laryngeální masky (LMA) bez nutnosti svalové relaxace.',
      'Dlouhodobá vysokodávková infuze (>48 h, >4–5 mg/kg/h) může vést k syndromu infuze propofolu (PRIS): inhibice mitochondriální beta-oxidace mastných kyselin a rozpojení oxidativní fosforylace $\\rightarrow$ těžká metabolická acidóza, rhabdomyolýza, hyperkalémie, renální a kardiální selhání.'
    ]
  },
  {
    id: 'ketamine',
    name: 'Ketamine',
    genericName: 'Ketamin (Ketalar / Calypsol)',
    category: 'induction',
    categoryLabel: 'Indukční anestetikum / Analgetikum',
    class: 'Arylcyklohexylamin / nekompetitivní antagonista NMDA receptorů',
    mechanism: 'Nekompetitivní antagonista NMDA receptorů: váže se na fencyklidinové (PCP) vazebné místo uvnitř otevřeného iontového kanálu NMDA receptoru, čímž blokuje transmembránový influx Ca²⁺ a Na⁺ při glutamátové stimulaci. Vyvolává funkční a elektrofyziologickou disociaci mezi limbickým systémem a thalamokortikální projekcí („disociativní anestezie“ – pacient má otevřené oči a zachované reflexy DC, ale je ve stavu hluboké analgezie, amnézie a katatonie). Dále působí jako agonista na opioidních receptorech (μ, κ) a inhibuje neuronální zpětné vychytávání (reuptake) noradrenalinu, dopaminu a serotoninu. Na kardiovaskulární systém působí dvoufázově: u pacientů s intaktním sympatikem vyvolává nepřímou stimulaci (vzestup SF, TK a CO centrální aktivací sympatiku a blokádou reuptake). Zásadní moderní poznatek: ketamin je sám o sobě přímým myokardiálním depresivem (negativním inotropikem). U kriticky nemocných v protrahovaném šoku s deplecí endogenních zásob katecholaminů převáží jeho přímý kardiodepresivní efekt a může dojít k paradoxnímu těžkému kardiovaskulárnímu kolapsu! Působí též silnou bronchodilataci přímou relaxací hladké svaloviny a uvolněním katecholaminů.',
    indications: [
      'Úvod do anestezie u hemodynamicky kompromitovaných pacientů (hypovolemie, traumatický šok, sepse s rezervou sympatiku)',
      'Těžký refrakterní bronchospasmus a status asthmaticus',
      'Procedurální analgosedace v urgentní medicíně a dětské anestezii',
      'Adjuvantní subanestetická infuze pro multimodální a pooperační analgezii (prevence chronifikace bolesti)'
    ],
    dosageInduction: '1,0 - 2,0 mg/kg IV nebo 4,0 - 8,0 mg/kg IM.',
    pediatricDosage: '1,5 - 2,0 mg/kg IV nebo 3,0 - 5,0 mg/kg IM.',
    standardPrep: '10 mg/mL (1%) nebo 50 mg/mL (5%) roztok.',
    onset: '30 - 60 sekund IV; 3 - 5 minut IM.',
    duration: '10 - 20 minut IV (v důsledku redistribuce; úplné neuropsychické zotavení 60–120 minut).',
    contraindications: [
      'Závažná dekompenzovaná arteriální hypertenze, nekontrolovaná ICHS, disekce aorty',
      'Penetrující poranění očního bulbu nebo těžký glaukom (přechodný nárůst nitroočního tlaku)',
      'Aktivní psychotické onemocnění nebo anamnéza schizofrenie'
    ],
    adverseEffects: [
      'Sympatomimetická stimulace myokardu: hypertenze, tachykardie, zvýšená spotřeba O₂ v myokardu',
      'Emergence delirium: živé nepříjemné sny, zmatenost, halucinace (lze signifikantně potlačit ko-administrací midazolamu)',
      'Hypersalivace a hypersekrece v dýchacích cestách (lze profylakticky tlumit atropinem či glykopyrrolátem)',
      'Zvýšené riziko laryngospasmu z důvodu dráždění sekretů při zachovaných reflexech DC'
    ],
    pearls: [
      'Při zachování spontánního dýchání a reflexů hltanu může při rychlé IV injekci přesto nastat přechodná apnoe – monitorace a připravenost k ventilaci maskou je nezbytná.',
      'S(+)-enantiomer (esketamin) má přibližně dvojnásobnou analgetickou a anestetickou potenci oproti racemátu s nižším výskytem psychomotorických nežádoucích účinků a rychlejší eliminací.',
      'Pozor na podání u vyčerpaného septického či polytraumatizovaného pacienta: pokud jsou katecholaminy vyčerpány, projeví se přímá kardiodeprese a pacient může prudce zkolabovat.'
    ]
  },
  {
    id: 'etomidate',
    name: 'Etomidate',
    genericName: 'Etomidát (Amidate / Hypnomidate)',
    category: 'induction',
    categoryLabel: 'Indukční anestetikum',
    class: 'Karboxylovaný imidazolderivát / vysoce selektivní pozitivní modulátor receptorů GABA-A',
    mechanism: 'Vysoce selektivní pozitivní allosterický modulátor receptorů GABA-A (specifická vazba na rozhraní α a β2/β3 podjednotek), zvyšující transmembránový proud chloridových iontů a neuronální hyperpolarizaci. Vyznačuje se unikátním kardiovaskulárním profilem: neovlivňuje sympatický tonus, nepůsobí dilataci periferních ani kapacitních cév, nemá negativně inotropní účinek na myokard a ponechává intaktní baroreceptorové reflexy. Zajišťuje maximální stabilitu středního arteriálního tlaku (MAP) a srdečního výdeje. Zásadní endokrinní účinek: reverzibilně a vysoce afinitně inhibuje mitochondriální enzym 11β-hydroxylázu (CYP11B1) v kůře nadledvin, která konvertuje 11-deoxykortisol na kortizol a 11-deoxykortikosteron na kortikosteron. Již jediná indukční dávka vede k signifikantní adrenokortikální supresi (pokles syntézy kortizolu a aldosteronu) přetrvávající 12–24 hodin. Snižuje mozkový metabolický obrat kyslíku (CMRO2) i intrakraniální tlak (ICP) při zachovaném perfuzním tlaku mozku (CPP).',
    indications: [
      'Úvod do celkové anestezie u pacientů se závažným kardiálním onemocněním (ICHS, kardiomyopatie, těžké chlopenní vady)',
      'Rapid Sequence Induction (RSI) u hemodynamicky nestabilních traumat a šokových stavů s nutností stability oběhu'
    ],
    dosageInduction: '0,2 - 0,3 mg/kg IV.',
    pediatricDosage: '0,2 - 0,3 mg/kg IV (u dětí <10 let se používá méně často, indikováno při nestabilitě oběhu).',
    standardPrep: '2 mg/mL roztok v propylenglykolu nebo lipidové emulzi.',
    onset: '30 - 60 sekund.',
    duration: '3 - 5 minut (krátké působení dané rychlou redistribucí do méně prokrvených tkání).',
    contraindications: [
      'Známá přecitlivělost na etomidát nebo složky nosiče',
      'Primární insuficience kůry nadledvin (Addisonova choroba)',
      'Kontinuální infuzní podávání (přísně zakázáno z důvodu letální adrenální insuficience)'
    ],
    adverseEffects: [
      'Přechodná inhibice 11β-hydroxylázy s adrenální supresí (snížená odpověď na stres po dobu 12–24 h)',
      'Vysoký výskyt myoklonií při úvodu (až u 50–70 % pacientů; lze potlačit premedikací fentanylem nebo midazolamem)',
      'Vysoká incidence pooperační nauzey a zvracení (PONV)',
      'Bolest v místě vpichu a tromboflebitida (při formulaci s propylenglykolem)'
    ],
    pearls: [
      'Hemodynamicky nejstabilnější indukční anestetikum: udržuje perfuzní tlak myokardu i mozku lépe než kterákoli alternativa.',
      'Neuvolňuje histamin a nezpůsobuje bronchokonstrikci, proto je bezpečný u pacientů s reaktivním onemocněním dýchacích cest a alergiemi.',
      'Vliv jednorázové dávky na mortalitu u septického šoku zůstává předmětem odborných diskusí: ačkoliv blokuje syntézu kortizolu, jednorázové podání při urgentní intubaci v šoku je mnohdy akceptováno díky prevenci oběhové zástavy. Kontinuální sedace na JIP je však absolutně zakázána.'
    ]
  },
  {
    id: 'succinylcholine',
    name: 'Succinylcholine',
    genericName: 'Sukcinylcholin / Suxamethonium (Succinylcholin VUAB)',
    category: 'paralytics',
    categoryLabel: 'Svalové relaxans',
    class: 'Depolarizující neuromuskulární blokátor (kvartérní amoniový derivát)',
    mechanism: 'Jediný klinicky užívaný depolarizující neuromuskulární blokátor (tvořený dvěma spojenými molekulami acetylcholinu). Působí jako přímý agonista nikotinových cholinergních receptorů (nAChR) na postsynaptické motorické ploténce kosterního svalu. Otevírá iontové kanály receptoru a vyvolává masivní depolarizaci, která se klinicky manifestuje generalizovanými svalovými záškuby (fascikulacemi). Vzhledem k tomu, že sukcinylcholin není v synaptické štěrbině štěpen acetylcholinesterázou, udržuje motorickou ploténku trvale depolarizovanou. To vede k inaktivaci napěťově řízených sodíkových kanálů na perijunkční membráně (Fáze I blokáda), čímž je znemožněn vznik dalšího akčního potenciálu. Při prolongované expozici přechází v desenzitizační Fázi II blokádu. Je metabolizován až po difuzi do plazmy pseudocholinesterázou (butyrylcholinesterázou). Vyvolává fyziologický eflux draslíku z buněk (vzestup kalémie o 0,5 mmol/L; u pacientů s up-regulací nezralých extrajunkčních receptorů po popáleninách, traumatech míchy a denervacích hrozí letální hyperkalémie). Přímou stimulací kardiálních M2 receptorů může vyvolat bradykardii až asystolii.',
    indications: [
      'Bleskový úvod do celkové anestezie (Rapid Sequence Induction – RSI) k prevenci aspirace',
      'Akutní řešení těžkého laryngospasmu nereagujícího na přetlakovou ventilaci kyslíkem'
    ],
    dosageInduction: '1,0 - 1,5 mg/kg IV (podle skutečné tělesné hmotnosti – TBW) nebo 3,0 - 4,0 mg/kg IM (při absenci žilního vstupu).',
    pediatricDosage: '1,5 - 2,0 mg/kg IV (kojenci vyžadují vyšší dávky kvůli většímu extracelulárnímu objemu tekutin).',
    standardPrep: '100 mg suché substance k rekonstituci (50 mg/mL) nebo 20 mg/mL roztok.',
    onset: '30 - 60 sekund IV (nejrychlejší nástup ze všech svalových relaxancií).',
    duration: '5 - 10 minut (blesková hydrolýza plazmatickou pseudocholinesterázou).',
    contraindications: [
      'Anamnéza nebo genetická dispozice k maligní hypertermii (absolutní spouštěč!)',
      'Genetický deficit pseudocholinesterázy (atypická plazmatická cholinesteráza – prolongovaná paralýza)',
      'Riziko masivní hyperkalémie: popáleniny starší 24 hodin, míšní léze/paraplegie, polytrauma s crush syndromem, nervosvalová onemocnění (ALS, Guillain-Barré, svalové dystrofie)',
      'Preexistující těžká hyperkalémie a penetrující poranění oka (přechodný vzestup nitroočního tlaku)'
    ],
    adverseEffects: [
      'Přechodný vzestup sérové kalémie (o 0,5 mmol/L normálně, letální nárůst u rizikových pacientů)',
      'Svalové fascikulace následované difuzní pooperační myalgií',
      'Sinusová bradykardie nebo nodální rytmus (časté po 2. dávce nebo u dětí vlivem stimulace M2 receptorů)',
      'Spuštění maligní hypertermie (nekontrolovaný eflux Ca²⁺ přes ryanodinový receptor RYR1)'
    ],
    pearls: [
      'Klasický zlatý standard pro RSI díky bezkonkurenční kombinaci nástupu do 45 s a spontánního odeznění do 10 min.',
      'Nemá žádný specifický chemický reverzní lék (antidotum) – podání neostigminu je přísně kontraindikováno, protože neostigmin inhibuje pseudocholinesterázu a blokádu naopak výrazně prodlužuje!',
      'U dětí je nutné před podáním sukcinylcholinu profylakticky aplikovat atropin k prevenci těžké vagové bradykardie.'
    ]
  },
  {
    id: 'rocuronium',
    name: 'Rocuronium',
    genericName: 'Rokuronium bromid (Esmeron / Zemuron)',
    category: 'paralytics',
    categoryLabel: 'Svalové relaxans',
    class: 'Nedepolarizující neuromuskulární blokátor (aminosteroidní derivát)',
    mechanism: 'Kompetitivní antagonista nikotinových acetylcholinových receptorů (nAChR) na postsynaptické motorické ploténce kosterního svalu. Brání vazbě endogenního acetylcholinu na α-podjednotky receptoru, aniž by způsobil konformační změnu a otevření kanálu (probíhá bez jakékoli depolarizace či fascikulací). Paralýza nastává při obsazení >75–80 % receptorů, hluboký blok při >90 %. Vykazuje střední afinitu k receptoru, což vyžaduje vyšší molekulární koncentraci v plazmě; to vytváří strmý koncentrační gradient mezi cévním řečištěm a motorickou ploténkou a umožňuje mimořádně rychlý nástup účinku. Při RSI dávce (1,0–1,2 mg/kg, odpovídající 4× ED95) nastupuje intubační relaxace již za 45–60 sekund, čímž je plně srovnatelný se sukcinylcholinem. Nemá ganglioplegické ani vagolytické účinky, neuvolňuje histamin a zachovává kardiovaskulární stabilitu. Je eliminován převážně játry (vychytávání hepatocyty a biliární exkrece ~70 %) a ledvinami (~30 %); je specificky a bleskově reverzibilní sugammadexem v jakékoli hloubce bloku.',
    indications: [
      'Usnadnění orotracheální intubace při rutinním úvodu i při bleskovém úvodu (RSI)',
      'Zajištění svalové relaxace během chirurgického výkonu',
      'Terapeutická myorelaxace na JIP (např. synchronizace s UPV při těžkém ARDS)'
    ],
    dosageInduction: '0,6 mg/kg IV pro standardní intubaci (2× ED95); 1,0 - 1,2 mg/kg IV pro Rapid Sequence Induction (RSI).',
    pediatricDosage: '0,6 - 1,0 mg/kg IV (podobný profil jako u dospělých, u kojenců mírně prodloužené trvání).',
    standardPrep: '10 mg/mL roztok v 5mL nebo 10mL lahvičkách.',
    onset: '60 - 90 sekund při dávce 0,6 mg/kg; 45 - 60 sekund při RSI dávce 1,0–1,2 mg/kg.',
    duration: '35 - 50 minut (střednědobě působící; výrazně prodlouženo u hepatální dysfunkce a geriatrických pacientů).',
    contraindications: [
      'Přecitlivělost na rokuronium nebo jiné aminosteroidní látky'
    ],
    adverseEffects: [
      'Prodloužená reziduální neuromuskulární blokáda (zejména při hypotermii, acidóze nebo jaterním selhání)',
      'Perioperační anafylaxe (neuromuskulární blokátory patří mezi nejčastější spouštěče IgE-zprostředkované anafylaxe v anestezii)'
    ],
    pearls: [
      'V moderní praxi nahrazuje sukcinylcholin pro RSI všude tam, kde hrozí hyperkalémie, u popálenin, renálního selhání nebo susceptibility k maligní hypertermii.',
      'Dostupnost sugammadexu umožňuje okamžité zrušení bloku kdykoliv (dávka 16 mg/kg zruší i masivní blok po 1,2 mg/kg během 3 minut).',
      'Nevyvolává fascikulace, nezvyšuje nitrooční, nitrolební ani intragastrický tlak.'
    ]
  },
  {
    id: 'fentanyl',
    name: 'Fentanyl',
    genericName: 'Fentanyl (Sublimaze)',
    category: 'analgesics',
    categoryLabel: 'Analgetikum (Opioid)',
    class: 'Syntetický lipofilní opioid (4-anilidopiperidinový derivát) / agonista μ-receptorů',
    mechanism: 'Vysoce potentní selektivní plný agonista na μ-opioidních receptorech (MOR, spřažených s inhibičním Gi/Go proteinem) v CNS a zadních rozích míšních. Aktivace receptoru inhibuje adenylátcyklázu (pokles intracelulárního cAMP), uzavírá presynaptické napěťově řízené kalciové kanály (tlumí uvolňování excitačních neurotransmiterů jako substance P a glutamát) a otevírá postsynaptické draslíkové kanály (GIRK), čímž způsobuje hyperpolarizaci neuronů a blokádu ascendentních nociceptivních drah. Vzhledem k extrémní lipofilitě (1000× vyšší než morfin) bleskově prostupuje hematoencefalickou bariérou. Krátké trvání účinku jednorázového bolusu (30–60 min) je způsobeno rychlou redistribucí z centrálního kompartmentu do svalů a tuku; při opakovaných dávkách nebo dlouhé infuzi se periferní tkáně nasytí a kontext-senzitivní poločas (CSHT) prudce narůstá. Neuvolňuje histamin a zachovává vysokou oběhovou stabilitu; stimulací vagu v kmeni může způsobit bradykardii. Rychlé podání vysokých dávek může vyvolat rigiditu hrudní stěny („wooden chest syndrome“).',
    indications: [
      'Analgetická složka při úvodu do celkové anestezie (tlumí presorickou a tachykardickou reakci na laryngoskopii)',
      'Intraoperační a pooperační analgezie',
      'Analgetická sedace ventilovaných pacientů na resuscitačních lůžkách JIP'
    ],
    dosageInduction: '1 - 2 mcg/kg IV (až 5 - 10 mcg/kg u kardioanestezie k hlubokému potlačení stresové odpovědi).',
    pediatricDosage: '1 - 2 mcg/kg IV.',
    standardPrep: '50 mcg/mL (0,05 mg/mL) roztok ve 2mL nebo 10mL ampulích.',
    onset: '1 - 2 minuty IV.',
    duration: '30 - 60 minut (krátké po jednorázové dávce dané redistribucí).',
    contraindications: [
      'Těžká deprese dýchání a obstrukce dýchacích cest (u nemonitorovaného/neventilovaného pacienta)',
      'Přecitlivělost na fentanyl nebo jiné piperidiny'
    ],
    adverseEffects: [
      'Dávkově závislý útlum dechového centra (pokles dechové frekvence a otupení odpovědi na CO₂)',
      'Centrální bradykardie (vagová stimulace jader v prodloužené míše)',
      'Rigidita hrudní stěny („stiff/wooden chest syndrome“) při rychlé IV aplikaci bolusu >5 mcg/kg (řeší se myorelaxanciem)',
      'Pooperační nevolnost a zvracení (PONV stimulací chemoreceptorové spouštěcí zóny)'
    ],
    pearls: [
      'Klíčový lék k potlačení sympatické hypertenzní a tachykardické reakce při tracheální intubaci.',
      'Neuvolňuje histamin (na rozdíl od morfinu), proto nezpůsobuje bronchospasmus ani periferní vazodilataci s hypotenzí.',
      'V případě závažné dechové deprese je specificky antagonizovatelný naloxonem (0,04–0,4 mg IV).'
    ]
  },
  {
    id: 'midazolam',
    name: 'Midazolam',
    genericName: 'Midazolam (Versed / Dormicum)',
    category: 'sedatives',
    categoryLabel: 'Sedativum / Anxiolytikum',
    class: 'Krátkodobě působící imidazobenzodiazepin / modulátor GABA-A',
    mechanism: 'Pozitivní allosterický modulátor receptorů GABA-A v CNS: váže se na specifické rozhraní mezi podjednotkami α (α1, α2, α3, α5) a γ2. Zvyšuje afinitu receptoru k endogenní GABA a zvyšuje frekvenci otevírání chloridových kanálů v přítomnosti GABA. Influx Cl⁻ vede k hyperpolarizaci postsynaptických membrán a tlumení neuronální excitability v mozkové kůře, limbickém systému a retikulární formaci. Způsobuje silnou anterográdní amnézii, anxiolýzu, sedaci, antikonvulzivní aktivitu a centrální myorelaxaci. Unikátní fyzikálně-chemická vlastnost: při pH < 4 v ampuli má otevřený imidazolový kruh a je hydrofilní (stabilní vodný roztok, bezbolestná aplikace, nepůsobí flebitidu); po podání se při fyziologickém pH krve (7,4) kruh uzavře, stává se vysoce lipofilním a bleskově proniká hematoencefalickou bariérou do mozku. Je metabolizován jaterním enzymem CYP3A4 na aktivní metabolit 1-hydroxymidazolam, který se eliminuje ledvinami.',
    indications: [
      'Premedikace před anesteziologickým výkonem (anxiolýza a navození amnézie)',
      'Procedurální sedace u diagnostických a menších terapeutických zákroků (např. koloskopie, bronchoskopie)',
      'Ko-indukce při úvodu do celkové anestezie (synergicky snižuje potřebnou dávku propofolu)',
      'Terapie akutních epileptických záchvatů a status epilepticus'
    ],
    dosageInduction: '0,02 - 0,1 mg/kg IV pomalu titrováno (obvyklá premedikační dávka u dospělých 1 - 2,5 mg IV).',
    pediatricDosage: '0,25 - 0,5 mg/kg perorálně (max 15 mg) nebo 0,05 - 0,15 mg/kg IV.',
    standardPrep: '1 mg/mL nebo 5 mg/mL roztok.',
    onset: '1 - 3 minuty IV; 15 - 20 minut perorálně.',
    duration: '30 - 120 minut (v závislosti na dávce a renálních funkcích).',
    contraindications: [
      'Závažná dechová insuficience bez zajištění dýchacích cest',
      'Akutní glaukom s uzavřeným úhlem',
      'Těžká jaterní encefalopatie'
    ],
    adverseEffects: [
      'Dávkově závislá hypoventilace a obstrukce horních cest dýchacích (výrazná synergie s opioidy!)',
      'Hypotenze (v důsledku snížení sympatického tonu)',
      'Paradoxní reakce (excitace, agitovanost, agresivita – častější u dětí a geriatrických pacientů)'
    ],
    pearls: [
      'Vyniká nejhlubší anterográdní amnézií ze všech běžných anestetik – pacient si nepamatuje nepříjemné procedury provedené po podání léku.',
      'U starších pacientů titrujte velmi opatrně: mají sníženou jaterní clearance, vyšší citlivost CNS a hrozí u nich pooperační zmatenost.',
      'Je specificky a promptně reverzibilní flumazenilem (0,2 mg IV frakcionovaně).'
    ]
  },
  {
    id: 'phenylephrine',
    name: 'Phenylephrine',
    genericName: 'Fenyleftrin (Neo-Synephrine)',
    category: 'vasoactive',
    categoryLabel: 'Kardiovaskulární / Vasoaktivní látka',
    class: 'Selektivní přímé sympatomimetikum (čistý agonista receptorů α1)',
    mechanism: 'Syntetické přímé sympatomimetikum s čistou a vysoce selektivní agonistickou aktivitou na post-synaptických α1-adrenergních receptorech spřažených s Gq proteinem. Aktivuje fosfolipázu C (PLC), která štěpí PIP2 na IP3 a diacylglycerol (DAG); IP3 uvolňuje Ca²⁺ ze sarkoplazmatického retikula do cytosolu hladkého svalu cév, což vyvolává intenzivní vazokonstrikci prekapilárních arteriol i kapacitních žil. Výsledkem je prudký vzestup systémové cévní rezistence (SVR) a středního arteriálního tlaku (MAP). DŮLEŽITÝ HEMODYNAMICKÝ DŮSLEDEK: Vzestup afterloadu a stimulace baroreceptorů v karotickém sinu a aortálním oblouku spouští silnou reflexní vagovou bradykardii. Jelikož fenyleftrin postrádá jakoukoli β1-inotropní stimulaci, kombinace bradykardie a vysokého afterloadu často vede k POKLESU TEPOVÉHO OBJEMU (SV) A SRDEČNÍHO VÝDEJE (CO). V moderní porodnické anestezii je zlatým standardem pro prevenci a terapii hypotenze při spinálním bloku u císařského řezu, protože udržuje krevní tlak bez stimulace fetálního metabolismu a bez vzniku fetální acidózy.',
    indications: [
      'Hypotenze vyvolaná spinální, epidurální nebo celkovou anestezií (lék první volby u císařských řezů)',
      'Vazoplegický stav spojený s tachykardií (kde je nežádoucí další stimulace srdeční frekvence)',
      'Udržení koronárního perfuzního tlaku při těžké aortální stenóze'
    ],
    dosageInduction: '40 - 100 mcg IV bolusy (tzv. „Neo sticks“ 100 mcg/mL); kontinuální infuze 0,1 - 2,0 mcg/kg/min.',
    pediatricDosage: '5 - 10 mcg/kg IV bolus.',
    standardPrep: '10 mg/mL ampule (POZOR: nutno ředit! Obvykle 10 mg do 100 mL na 100 mcg/mL, nebo 1 mg do 100 mL na 10 mcg/mL).',
    onset: 'Téměř okamžitý po IV podání (10 - 30 sekund).',
    duration: '15 - 20 minut.',
    contraindications: [
      'Těžká bradykardie (kontraindikováno z důvodu dalšího prohloubení reflexní bradykardií)',
      'Kardiogenní šok nebo těžká dekompenzace levé komory (zvýšení afterloadu komoru přetíží)',
      'Ischemická choroba srdeční s limitovaným srdečním výdejem'
    ],
    adverseEffects: [
      'Reflexní baroreceptorová bradykardie (může vyžadovat přerušení podání)',
      'Signifikantní pokles srdečního výdeje (CO) a perfuze některých orgánů v důsledku nadměrné vazokonstrikce',
      'Lokální tkáňová ischémie a nekróza při paravenózní extravazaci'
    ],
    pearls: [
      'Ideální vazopresor u hypotenzního pacienta, který je již tachykardický – na rozdíl od efedrinu nezvyšuje srdeční frekvenci.',
      'V porodnictví nahradil efedrin jako lék volby pro léčbu hypotenze po spinálu: efektivně brání mateřské nevolnosti a zajišťuje výrazně vyšší pH pupečníkové krve plodu.',
      'Pokud při vzestupu krevního tlaku srdeční frekvence klesne pod 45–50 bpm, fenyleftrin zastavte a zvažte sympatomimetikum s inotropním účinkem (efedrin, noradrenalin).'
    ]
  },
  {
    id: 'ephedrine',
    name: 'Ephedrine',
    genericName: 'Efedrin (Ephedrine)',
    category: 'vasoactive',
    categoryLabel: 'Kardiovaskulární / Vasoaktivní látka',
    class: 'Smíšené sympatomimetikum (nepřímý uvolňovač noradrenalinu + přímý agonista)',
    mechanism: 'Smíšeně působící sympatomimetikum s duálním účinkem: působí nepřímo tím, že vstupuje přes transportér NET do presynaptických sympatických zakončení a přes vezikulární transportér VMAT-2 vytěsňuje endogenní noradrenalin ze zásobních vezikul do synaptické štěrbiny (přičemž blokuje i jeho zpětné vychytávání); přímo navíc slaběji stimuluje adrenergní receptory β1, β2 a α1. Opakované podávání vede k tachyfylaxi (vyčerpání presynaptických zásob noradrenalinu). POSUN V CHÁPÁNÍ ÚČINKU: V minulosti se předpokládalo, že efedrin zvyšuje krevní tlak arteriální vazokonstrikcí (nárůstem SVR) podobně jako fenyleftrin. Moderní hemodynamické studie (analýza pulzní vlny, echokardiografie a měření středního systémového plnicího tlaku) však prokázaly, že efedrin zvyšuje arteriální tlak primárně VZESTUPEM SRDEČNÍHO VÝDEJE (CO) A TEPOVÉHO OBJEMU (SV)! Způsobuje stimulaci α1 receptorů v kapacitním řečišti (zejména splanchnickém), což vede k VENOKONSTRIKCI, mobilizaci nestresovaného objemu krve a zvýšení žilního návratu (preloadu / Pmsf). Spolu s přímou i nepřímou inotropní a chronotropní stimulací myokardu (β1) to zvyšuje tepový objem a srdeční výdej. Arteriální systémová vaskulární rezistence (SVR) se přitom prakticky nemění nebo může dokonce mírně klesnout kvůli současné β2 vazodilataci. ZMĚNA V PORODNICTVÍ: Ačkoliv byl historicky preferován u císařských řezů, moderní mezinárodní guidelines (SOAP, ESAIC) jej nahradily fenyleftrinem (nebo infuzí noradrenalinu), protože volně přechází placentou, stimuluje fetální β-receptory, zvyšuje metabolismus plodu a spotřebu kyslíku, což prokazatelně způsobuje fetální laktátovou acidózu (nižší pH v pupečníkové tepně).',
    indications: [
      'Anestezií indukovaná hypotenze doprovázená bradykardií nebo nízkou normokardií',
      'Hypotenze u pacientů, kde je žádoucí podpora srdečního výdeje a kontraktility bez dramatického zvýšení afterloadu',
      'Bronchospasmus asociovaný s hypotenzí (adjuvantní bronchodilatační efekt přes β2)'
    ],
    dosageInduction: '5 - 10 mg IV bolusy frakcionovaně, titrováno podle dosaženého hemodynamického účinku (max cca 30–50 mg).',
    pediatricDosage: '0,1 - 0,2 mg/kg IV bolus.',
    standardPrep: '50 mg/mL ampule (nutno ředit: 1 mL + 9 mL FR do 10mL stříkačky $\\rightarrow$ koncentrace 5 mg/mL).',
    onset: '1 - 2 minuty IV.',
    duration: '10 - 60 minut.',
    contraindications: [
      'Tachykardie a závažné tachyarytmie',
      'Akutní koronární syndrom / nestabilní angina pectoris (zvýšení spotřeby O₂ v myokardu)',
      'Současná léčba inhibitory monoaminooxidázy (MAOI – riziko fatální hypertenzní krize)'
    ],
    adverseEffects: [
      'Tachykardie, palpitace, ventrikulární nebo supraventrikulární arytmie',
      'Ischémie myokardu při nepoměru mezi dodávkou a spotřebou kyslíku',
      'Tachyfylaxe (rychlý pokles terapeutické odpovědi při opakovaných dávkách z důvodu vyčerpání zásob noradrenalinu)',
      'Fetální acidóza při použití u císařského řezu'
    ],
    pearls: [
      'Moderní fyziologický princip: zvyšuje TK zvýšením srdečního výdeje a žilního návratu (venokonstrikcí), nikoliv nárůstem arteriální rezistence (SVR). Je ideální, pokud je hypotenze spojena s bradykardií.',
      'Neúčinkuje spolehlivě u pacientů s chronicky depletovanými zásobami katecholaminů (např. chronické srdeční selhání, dlouhodobý pobyt na JIP, abusus kokainu/amfetaminů) – zde je nutné volit přímý katecholamin (noradrenalin).',
      'Porodnický posun v guidelines: dříve preferovaný lék u spinálu pro císařský řez byl opuštěn ve prospěch fenyleftrinu a noradrenalinu kvůli riziku fetální acidózy.'
    ]
  },
  {
    id: 'sugammadex',
    name: 'Sugammadex',
    genericName: 'Sugammadex (Bridion)',
    category: 'reversal',
    categoryLabel: 'Reversal agent',
    class: 'Selektivní vazač svalových relaxancií (SRBA – Selective Relaxant Binding Agent)',
    mechanism: 'Modifikovaný cyklický oligosacharid ze skupiny γ-cyklodextrinů tvořený osmi glukopyranózovými jednotkami s centrální hydrofobní dutinou a osmi negativně nabitými postranními karboxylovými řetězci. Vytváří těsný inkluzní komplex 1:1 s aminosteroidními nedepolarizujícími relaxancii. Jeho lipofilní dutina prostorově dokonale odpovídá čtyřem steroidním kruhům rokuronia (extrémně vysoká vazebná afinita s asociační konstantou Ka ≈ 10⁷ M⁻¹); s vekuroniem váže cca 3× slaběji, vazba na pankuronium je minimální. V intravaskulárním prostoru bleskově enkapsuluje volné rokuronium. Pokles volného rokuronia v plazmě vytvoří strmý koncentrační gradient, který vytáhne molekuly rokuronia z vazby na nikotinových nAChR receptorech motorické ploténky zpět do cévního řečiště, kde jsou okamžitě ireverzibilně uzamčeny v dutině cyklodextrinu. Blokáda odeznívá během 1,5–3 minut nezávisle na počáteční hloubce bloku. Neovlivňuje acetylcholinesterázu ani muskarinové receptory a nevyžaduje podání antimuskarinik. Komplex je z 95 % eliminován v nezměněné formě glomerulární filtrací ledvinami.',
    indications: [
      'Rutinní reverze mírné až hluboké nervosvalové blokády vyvolané rokuroniem nebo vekuroniem na konci operace',
      'Okamžitá reverze hlubokého bloku bezprostředně po podání rokuronia (1,2 mg/kg) při krizovém scénáři'
    ],
    dosageInduction: 'Dospělí, podle skutečné tělesné hmotnosti (TBW): 2 mg/kg IV při návratu T2 na TOF stimulaci; 4 mg/kg IV při hlubokém bloku (TOF count 0, PTC 1–2); 16 mg/kg IV pro okamžitou reverzi cca 3 minuty po podání rokuronia 1,2 mg/kg dle SPC.',
    standardPrep: '100 mg/mL roztok ve 2mL (200 mg) nebo 5mL (500 mg) lahvičkách.',
    onset: '1,5 - 3 minuty (obnovuje TOF ratio > 0,9 signifikantně rychleji a spolehlivěji než neostigmin).',
    duration: 'Komplex je chemicky stabilní a nedisociuje; eliminován ledvinami.',
    contraindications: [
      'Těžká porucha funkce ledvin s eGFR < 30 mL/min nebo dialýza (nedoporučuje se z důvodu prodlouženého setrvání komplexu v těle)',
      'Těžká přecitlivělost na sugammadex nebo pomocné látky'
    ],
    adverseEffects: [
      'Závažná bradykardie až asystolie (vzácný, ale život ohrožující fenomén – nutná monitorace EKG!)',
      'Anafylaktické a hypersenzitivní reakce (výskyt cca 0,3 % v důsledku preexistujících protilátek proti cyklodextrinům)',
      'Interakce s hormonální antikoncepcí: váže progesteron (podání odpovídá vynechání 1 denní tablety – nutnost bariérové antikoncepce po 7 dní)'
    ],
    pearls: [
      'Zásadní pravidlo při CICO (Cannot Intubate, Cannot Oxygenate): podání sugammadexu nesmí oddálit chirurgické zajištění dýchacích cest (eFONA) – reverze relaxace nezaručuje obnovení průchodnosti anatomicky uzavřených nebo oteklých dýchacích cest!',
      'Neruší depolarizující látky (sukcinylcholin) ani benzylisochinolinová relaxancia (cisatrakurium, atrakurium).',
      'Po aplikaci sugammadexu nelze pacienta v případě nutnosti reoperace spolehlivě relaxovat rokuroniem po dobu 24 hodin (doporučeno použít relaxans z jiné třídy, např. cisatrakurium).'
    ]
  },
  {
    id: 'thiopental',
    name: 'Thiopental',
    genericName: 'Thiopental sodium (Pentothal / Thiopental VUAB)',
    category: 'induction',
    categoryLabel: 'Indukční anestetikum',
    class: 'Ultrakrátce působící thiobarbiturát / modulátor receptorů GABA-A',
    mechanism: 'Ultrakrátce působící thiobarbiturát (sírou substituovaný barbiturát). Pozitivní allosterický modulátor receptorů GABA-A: váže se na specifická alosterická místa na receptorovém komplexu a prodlužuje dobu otevření chloridového kanálu vyvolanou GABA (na rozdíl od benzodiazepinů, které zvyšují frekvenci otevírání). Při vysokých koncentracích otevírá chloridové kanály přímo bez přítomnosti GABA a navíc inhibuje excitační glutamátové receptory typu AMPA/kainát. Způsobuje bleskový nástup hluboké hypnózy během 15–30 sekund. CEREBROPROTEKTIVNÍ MECHANISMUS: Vyvolává mohutnou vazokonstrikci intrakraniálních cév, čímž snižuje průtok krve mozkem (CBF) a intrakraniální tlak (ICP). Současně dramaticky tlumí neuronální metabolickou aktivitu – snižuje mozkovou spotřebu kyslíku (CMRO2) až o 50 % (až k dosažení izoelektrického EEG), čímž chrání ischemickou mozkovou tkáň a udržuje perfuzní tlak mozku (CPP). V kardiovaskulárním systému působí výraznou venodilataci (snížení žilního návratu a preloadu) a přímou depresi myokardu, což u hypovolémie vyvolává hlubokou hypotenzi. Absolutně kontraindikován u akutních porfyrií, protože indukuje enzym ALAS1 (syntetázu kyseliny delta-aminolevulové) a vyvolává život ohrožující neuroviscerální krizi.',
    indications: [
      'Úvod do celkové anestezie v neuroanestezii u pacientů se zvýšeným nitrolebním tlakem (ICP)',
      'Refrakterní status epilepticus nereagující na benzodiazepiny a antiepileptika',
      'Mozková protekce během operací s dočasným uzávěrem mozkových tepen (karotická endarterektomie)'
    ],
    dosageInduction: '3,0 - 5,0 mg/kg IV bolus (redukovat na 1,5 - 2,5 mg/kg u geriatrických či hemodynamicky křehkých pacientů).',
    pediatricDosage: '5,0 - 7,0 mg/kg IV (vyšší dávkové požadavky u dětí z důvodu rychlého metabolismu a většího distribučního objemu).',
    standardPrep: 'Suchá substance 0,5 g nebo 1,0 g; rekonstituuje se vodou na 2,5% roztok (25 mg/mL, pH ~10,5).',
    onset: '15 - 30 sekund („arm-brain“ cirkulační čas).',
    duration: '5 - 15 minut (rychlé probuzení způsobené redistribucí do svalstva a viscerálních orgánů).',
    contraindications: [
      'Akutní intermitentní porfyrie a porfyrie variegata (absolutní kontraindikace!)',
      'Těžký kardiovaskulární kolaps a dekompenzovaný hypovolemický šok',
      'Status asthmaticus (riziko bronchospasmu při manipulaci v dýchacích cestách v lehké anestezii)'
    ],
    adverseEffects: [
      'Výrazná hypotenze v důsledku venodilatace (pokles žilního návratu) a deprese kontraktility myokardu',
      'Apnoe a deprese dechového centra',
      'Těžká tkáňová nekróza a vazospasmus při náhodné intraarteriální injekci nebo paravenózní extravazaci (vysoká alkalita pH ~10,5)',
      'Laryngospasmus a bronchospasmus při dráždění dýchacích cest v mělké rovině anestezie'
    ],
    pearls: [
      'Neuroprotektivní etalon: snižuje intrakraniální tlak a mozkový metabolismus kyslíku spolehlivěji než většina jiných látek.',
      'Absolutní zákaz u porfyrie: indukce jaterní ALA syntetázy vyvolá fatální krizi s quadriplegií a těžkými bolestmi břicha.',
      'Při náhodné aplikaci do arterie kanylu nikdy nevytahujte: aplikujte přes ni vazodilatancia (papaverin, lidokain, fentolamin) a heparinizujte k prevenci trombózy končetiny.'
    ]
  },
  {
    id: 'dexmedetomidine',
    name: 'Dexmedetomidine',
    genericName: 'Dexmedetomidin (Precedex / Dexdor)',
    category: 'sedatives',
    categoryLabel: 'Sedativum / Adjuvantní analgetikum',
    class: 'Superselektivní agonista receptorů α2-adrenergních',
    mechanism: 'Superselektivní plný agonista presynaptických i postsynaptických α2-adrenergních receptorů (poměr selektivity α2:α1 je 1620:1, tedy cca 8× vyšší než u klonidinu). Stimuluje α2 receptory spřažené s Gi proteinem v locus coeruleus v mozkovém kmeni. Inhibice adenylátcyklázy, otevření vnitřně usměrňujících draslíkových kanálů a blokáda napěťových vápníkových kanálů vede k útlumu spontánní elektrické aktivity noradrenergních neuronů a potlačení ascendentních budivých signálů. KLINICKÝ FENOMÉN KOOPERATIVNÍ SEDACE: Navozuje sedativní stav, který věrně napodobuje fyziologický non-REM spánek (fázi N2). Pacient zůstává snadno probuditelný slovním oslovením či lehkým dotykem, je schopen plné spolupráce, komunikace a orientovaného vyšetření, přičemž po ukončení stimulace opět spontánně usíná. ZÁSADNÍ RESPIRAČNÍ VÝHODA: Na rozdíl od propofolu, opioidů a benzodiazepinů nevyvolává primární depresi dechového centra – zachovává spontánní ventilaci i fyziologickou ventilační odpověď na hyperkapnii. Přes spinální α2 receptory v substantia gelatinosa zadních rohů míšních vykazuje aditivní analgetický účinek (šetří spotřebu opioidů). Snižuje sympatický tonus, hladinu cirkulujících katecholaminů a prokazatelně snižuje incidenci pooperačního deliria u pacientů na JIP.',
    indications: [
      'Sedace intubovaných a ventilovaných pacientů na JIP s cílem časného odpojení (weaning)',
      'Procedurální sedace neintubovaných pacientů před nebo během diagnostických/chirurgických výkonů (např. bdělá intubace fibroneuroskopem)',
      'Prevence a terapie pooperačního deliria u rizikových pacientů na JIP',
      'Adjuvantní analgezie k redukci spotřeby opioidů v perioperačním období'
    ],
    dosageInduction: 'Nasycovací dávka: 0,5 - 1,0 mcg/kg IV během 10–20 minut (v anesteziologii se často vynechává k prevenci bradykardie/hypotenze). Udržovací infuze: 0,2 - 1,4 mcg/kg/h.',
    pediatricDosage: '0,2 - 1,0 mcg/kg/h IV kontinuální infuzí.',
    standardPrep: '100 mcg/mL koncentrát (musí se ředit, typicky na 4 mcg/mL v 50mL stříkačce).',
    onset: '10 - 15 minut (pomalejší nástup než propofol či midazolam).',
    duration: '1 - 2 hodiny po zastavení infuze (eliminační poločas cca 2 hodiny).',
    contraindications: [
      'Závažná bradykardie nebo pokročilá síňokomorová blokáda (AV blok II. a III. stupně bez funkčního pacemakeru)',
      'Těžká dekompenzovaná arteriální hypotenze a těžká dysfunkce LK'
    ],
    adverseEffects: [
      'Bradykardie (centrální sympatolýza a zvýšený tonus n. vagus)',
      'Hypotenze (centrální pokles cévního tonu; pozor: rychlý bolus může vyvolat paradoxní přechodnou hypertenzi vlivem stimulace periferních vaskulárních receptorů α2B)',
      'Sucho v ústech (xerostomie)'
    ],
    pearls: [
      'Zlatý standard pro bdělou intubaci: pacient je klidný, toleruje flexibilní bronchoskop v dýchacích cestách a spontánně dýchá.',
      'Nezpůsobuje depresi dýchání ani dechovou zástavu – ideální pro neintubované rizikové pacienty se syndromem spánkové apnoe (OSAS).',
      'U dětí je vysoce efektivní v prevenci „emergence agitation“ po anestezii sevofluranem.'
    ]
  },
  {
    id: 'norepinephrine',
    name: 'Norepinephrine',
    genericName: 'Noradrenalin (Levophed / Noradrenalin Léčiva)',
    category: 'vasoactive',
    categoryLabel: 'Kardiovaskulární / Vasoaktivní látka',
    class: 'Přirozený katecholamin / silné sympatomimetikum (α1 > β1 ≫ β2)',
    mechanism: 'Přirozený endogenní katecholamin a silný přímý adrenergní agonista s převahou účinku na receptorech α1 a α2 a vyváženou stimulací myokardiálních β1 receptorů (s minimálním vlivem na β2 receptory). Stimulací α1 receptorů cévního hladkého svalu (přes Gq protein a signální kaskádu IP3/DAG) vyvolává intenzivní arteriální vazokonstrikci, prudce zvyšuje systémovou vaskulární rezistenci (SVR) a střední arteriální tlak (MAP). HEMODYNAMICKÝ BENEFIT NA PRELOAD A SRDEČNÍ VÝDEJ: Konstrikcí splanchnického a systémového kapacitního řečiště mobilizuje nestresovaný objem krve do aktivního oběhu, zvyšuje střední systémový plnicí tlak (Pmsf) a mohutně podporuje žilní návrat (preload) k pravé komoře. Díky současné stimulaci myokardiálních β1 receptorů (pozitivní inotropie a dromotropie) potlačuje reflexní bradykardii vyvolanou baroreflexem; tepový objem (SV) a srdeční výdej (CO) jsou tak spolehlivě zachovány nebo mírně zvýšeny (na rozdíl od čistého α1-agonisty fenyleftrinu, který CO snižuje). STATUS V MODERNÍ MEDICÍNĚ: Zlatý standard a vazopresor první volby u septického šoku (doporučení Surviving Sepsis Campaign), vazoplegického šoku a těžké vazodilatace. Vykazuje signifikantně nižší arytmogenitu a nižší mortalitu než dopamin. V anesteziologii je stále častěji podáván v časné nízkodávkové infuzi k preciznímu udržení perfuze orgánů.',
    indications: [
      'Vazopresor první volby u septického šoku a syndromu systémové zánětlivé odpovědi (SIRS)',
      'Vazoplegický syndrom po kardiochirurgických operacích nebo po navození celkové/spinální anestezie',
      'Neurogenní a kardiogenní šok (v kombinaci s inotropikem při těžké vazodilataci)'
    ],
    dosageInduction: 'Kontinuální infuze: 0,02 - 1,0 mcg/kg/min IV, titrováno na cílový střední arteriální tlak (MAP ≥ 65 mmHg).',
    pediatricDosage: '0,05 - 0,5 mcg/kg/min IV kontinuální infuzí.',
    standardPrep: 'Centrální: 4 mg ve 50 mL FR (80 mcg/mL); periferní bezpečné ředění: 4 mg ve 250 mL FR (16 mcg/mL).',
    onset: '1 - 2 minuty IV.',
    duration: '1 - 2 minuty po ukončení infuze (blesková metabolizace COMT a MAO a neuronální reuptake).',
    contraindications: [
      'Nekorigovaná těžká hypovolemie (před podáním vazopresoru je nutné zahájit volumoterapii, vyjma krizového záchranného překlenutí kolapsu)',
      'Závažné tachyarytmie a fibrilace komor'
    ],
    adverseEffects: [
      'Periferní a splanchnická tkáňová ischémie při nadměrné vazokonstrikci a hypovolémii',
      'Srdeční arytmie (tachykardie, fibrilace síní) vyvolané stimulací β1 receptorů',
      'Extenzivní tkáňová nekróza při paravenózní extravazaci z periferní žíly'
    ],
    pearls: [
      'Jednoznačný vazopresor č. 1 v intenzivní péči: v Landmark studii SOAP II prokázal nižší mortalitu a méně arytmií ve srovnání s dopaminem.',
      'Při náhodné extravazaci ihned aplikujte lokálně fentolamin (5–10 mg v 10 mL FR) k blokádě α-receptorů a odvrácení ischemické nekrózy kůže.',
      'Moderní anesteziologická praxe bezpečně připouští časnou periferní infuzi nízké koncentrace (16 mcg/mL) přes velkou periferní žílu, než je zaveden CŽK.'
    ]
  },
  {
    id: 'atropine',
    name: 'Atropine',
    genericName: 'Atropin sulfát (Atropin Biotika)',
    category: 'vasoactive',
    categoryLabel: 'Kardiovaskulární / Vasoaktivní látka',
    class: 'Přírodní parasympatolytikum / kompetitivní antimuskarinikum',
    mechanism: 'Přírodní terciární amoniový alkaloid fungující jako kompetitivní reverzibilní antagonista acetylcholinu na všech subtipech muskarinových receptorů (M1–M5). KARDIÁLNÍ MECHANISMUS: V myokardu selektivně blokuje muskarinové M2 receptory v sinoatriálním (SA) a atrioventrikulárním (AV) uzlu, které jsou spřaženy s inhibičním Gi proteinem. Odstraněním parasympatického (tonického vagového) tlumivého vlivu zvyšuje intracelulární cAMP, urychluje spontánní diastolickou depolarizaci (fázi 4 akčního potenciálu) v SA uzlu a zkracuje refrakterní periodu AV uzlu, což vede k pozitivní chronotropii a dromotropii. AKTUALIZOVANÉ DOPORUČENÍ GUIDELINES (ERC / AHA ACLS): Úvodní doporučená bolusová dávka u dospělých s hemodynamicky nestabilní bradykardií byla zvýšena z dřívějších 0,5 mg na 1,0 mg IV (opakovat každých 3–5 min do celkové vagolytické dávky 3,0 mg). PARADOXNÍ BRADYKARDIE PŘI NÍZKÝCH DÁVKÁCH: Podání nízkých sub-terapeutických dávek (<0,5 mg) je u dospělých rizikové a kontraindikované; blokuje totiž presynaptické inhibiční M1 autoreceptory na postgangliových vagových zakončeních (které fyziologicky brání nadměrnému uvolňování acetylcholinu), což vede k paradoxnímu prohloubení bradykardie. V dýchacích cestách blokuje M3 receptory, potlačuje bronchiální sekreci a vyvolává mírnou bronchodilataci. Je neúčinný u denervovaného srdce (po transplantaci srdce) a málo efektivní u infranodálních převodních poruch (Mobitz II, kompletní AV blok s širokým QRS).',
    indications: [
      'Symptomatická a hemodynamicky nestabilní sinusová bradykardie (lék první volby dle ERC/AHA)',
      'Prevence vagové bradykardie při manipulaci v dýchacích cestách (zvláště u dětí před sukcinylcholinem)',
      'Snížení sekrece v dýchacích cestách a slinných žlázách před anestezorologickými výkony',
      'Specifické antidotum při otravě organofosfáty, karbamáty nebo nervově paralytickými látkami'
    ],
    dosageInduction: 'Nestabilní bradykardie: 1,0 mg IV bolus každých 3-5 minut (maximální celková vagolytická dávka je 3,0 mg). Antisialagogum: 0,4 - 0,6 mg IV/IM.',
    pediatricDosage: '0,02 mg/kg IV (minimální jednorázová dávka 0,1 mg k prevenci paradoxní bradykardie; max jednotlivá dávka 0,5 mg).',
    standardPrep: '0,5 mg/mL nebo 1,0 mg/mL ampule.',
    onset: '1 - 2 minuty IV.',
    duration: '2 - 4 hodiny (oční účinky jako mydriáza mohou přetrvávat déle).',
    contraindications: [
      'Glaukom s uzavřeným úhlem (vyvolá mydriázu a akutní glaukomový záchvat)',
      'Akutní koronární syndrom a tachyarytmie (nežádoucí tachykardie výrazně zvyšuje spotřebu O₂)',
      'Těžká mechanická stenóza v GIT a hypertrofie prostaty s retencí moči'
    ],
    adverseEffects: [
      'Sinusová tachykardie, palpitace, komorové arytmie',
      'Anticholinergní syndrom: sucho v ústech, mydriáza, cykloplegie (rozmazané vidění), suchá horká kůže, zácpa a retence moči',
      'Centrální anticholinergní syndrom: agitovanost, zmatenost, delirium (zejména u geriatrických pacientů, protože atropin prostupuje přes HEB)'
    ],
    pearls: [
      'Změna v doporučeních ACLS/ERC: zahajujte dávkou 1,0 mg IV, nikoliv 0,5 mg, aby se předešlo paradoxnímu zpomalení srdeční frekvence.',
      'Dávky pod 0,5 mg jsou u dospělých nevhodné: blok presynaptických M1 receptorů vede k paradoxní bradykardii.',
      'U transplantovaného srdce atropin nefunguje: srdce postrádá vagovou inervaci, proto je při bradykardii nutné použít přímé sympatomimetikum (isoprenalin, adrenalin) nebo kardiostimulaci.'
    ]
  },
  {
    id: 'naloxone',
    name: 'Naloxone',
    genericName: 'Naloxon (Narcan / Intube)',
    category: 'reversal',
    categoryLabel: 'Antidotum / Reversal agent',
    class: 'Čistý kompetitivní antagonista opioidních receptorů',
    mechanism: 'Čistý syntetický kompetitivní antagonista opioidních receptorů bez vlastní vnitřní agonistické aktivity. Vykazuje nejvyšší vazebnou afinitu k μ-opioidním receptorům (MOR), se slabší afinitou ke κ a δ receptorům. Kompetitivně vytěsňuje molekuly exogenních i endogenních opioidů z receptorové vazebné štěrbiny, aniž by aktivoval intracelulární signální dráhy Gi proteinu. Bleskově ruší veškeré opioidní účinky v CNS i na periferii – promptně obnovuje dechovou frekvenci i dechový objem, normalizuje citlivost dechového centra k hyperkapnii, odstraňuje miózu a zvrátí sedaci i analgezii. ZÁSADNÍ KINETICKÝ ROZPŮL ($t_{1/2}$ MISMATCH): Eliminační poločas naloxonu je extrémně krátký (pouze 30–90 minut). Účinek většiny klinických opioidů (morfin, methadon, oxykodon, buprenorfin, transdermální fentanyl) přetrvává podstatně déle (3–24+ hodin). Po vymizení naloxonu z receptorů hrozí fenomén RENARKOTIZACE s návratem fatální dechové deprese, což vyžaduje dlouhodobé monitorování pacienta. SYMPATICKÁ KATECHOLAMINOVÁ BOUŘE: Nekontrolovaná rychlá aplikace vysoké dávky u závislých osob nebo pooperačních pacientů způsobí masivní sympatoadrenální exces v důsledku bleskového nástupu kruté bolesti a abstinenčního syndromu. Může precipitovat hypertenzní krizi, maligní komorové arytmie a těžký akutní nekardiogenní edém plic. V pooperační péči se proto titruje v přísných mikrodávkách (0,04 mg IV každé 2 minuty).',
    indications: [
      'Promptní zrušení život ohrožující dechové deprese vyvolané přirozenými nebo syntetickými opioidy',
      'Diagnostika a akutní léčba intoxikace opioidy v přednemocniční a neodkladné péči',
      'Pooperační titrační reverze nadměrné sedace a hypoventilace při zachování analgezie'
    ],
    dosageInduction: 'Pooperační titrace: 0,04 - 0,08 mg IV po 2 minutách do obnovení ventilace; masivní předávkování/zástava dechu: 0,4 - 2,0 mg IV/IM/IN každé 2-3 minuty (max 10 mg).',
    pediatricDosage: '0,01 - 0,1 mg/kg IV/IM/IO.',
    standardPrep: '0,4 mg/mL ampule (pro pooperační titraci nařeďte 1 mL do 10 mL FR $\\rightarrow$ 0,04 mg/mL).',
    onset: '1 - 2 minuty IV; 2 - 5 minut IM/IN.',
    duration: '30 - 90 minut (signifikantně kratší než poločas většiny agonistů).',
    contraindications: [
      'Známá těžká přecitlivělost na naloxon',
      'Opioidní závislost (relativní – podávat s maximální opatrností k prevenci prudkého abstinenčního syndromu)'
    ],
    adverseEffects: [
      'Akutní abstinenční syndrom: masivní agitovanost, diaforéza, zvracení, křeče, tachykardie a hypertenze',
      'Akutní nekardiogenní plicní edém a maligní arytmie (způsobené masivním vyplavením endogenních katecholaminů při náhlém zvratu)',
      'Kompletní ztráta pooperační analgezie s rozvojem neztišitelné bolesti'
    ],
    pearls: [
      'Zásadní klinické nebezpečí: renarkotizace! Poločas naloxonu je pouze 45–90 min. Pacient, který se probudí, může za 1 hodinu znovu upadnout do apnoické kómy. Sledování minimálně 2–4 hodiny je povinné.',
      'Pooperační pravidlo: nikdy nepodávejte celou ampuli (0,4 mg) IV naráz po operaci! Nařeďte lék na 0,04 mg/mL a titrujte po 1 mL, dokud pacient nezačne adekvátně dýchat, aniž by se probudil do kruté bolesti.',
      'Intranazální aplikace (Narcan nosní sprej) je etablovanou metodou první pomoci pro laiky a záchranné složky v terénu.'
    ]
  },
  {
    id: 'neostigmine',
    name: 'Neostigmine',
    genericName: 'Neostigmin methylsulfát (Syntostigmin)',
    category: 'reversal',
    categoryLabel: 'Antidotum / Reversal agent',
    class: 'Reverzibilní inhibitor acetylcholinesterázy (anticholinesteráza)',
    mechanism: 'Karbamátový reverzibilní inhibitor enzymu acetylcholinesterázy (AChE) a butyrylcholinesterázy. Váže se na esteratické i aniontové aktivní místo enzymu a tvoří karbamylovaný enzymový komplex. Hydrolýza tohoto komplexu probíhá extrémně pomalu (desítky minut oproti mikrosekundám u přirozeného acetylcholinu), čímž dočasně blokuje enzymatické štěpení acetylcholinu v synaptických štěrbinách. Dochází k masivní akumulaci endogenního acetylcholinu v motorické ploténce, který v souladu se zákonem o působení hmoty kompetitivně vytěsňuje molekuly nedepolarizujících relaxancií (rokuronium, vekuronium, cisatrakurium) z nikotinových nAChR receptorů a obnovuje nervosvalový přenos. NESELEKTIVITA A ZÁVAŽNÉ MUSKARINOVÉ ÚČINKY: Nahromaděný acetylcholin stimuluje nejen nikotinové receptory svalu, ale také všechny muskarinové receptory parasympatiku (M1, M2, M3). Způsobuje těžkou bradykardii, sinoatriální zástavu, AV blokády, bronchospasmus, masivní sekreci v dýchacích cestách a hypermotilitu střev. Proto se MUSÍ VŽDY PODÁVAT S ANTIMUSKARINIKEM (glykopyrrolát 0,2 mg na 1 mg neostigminu, nebo atropin 0,015 mg/kg), které má sladěný farmakokinetický nástup. PODMÍNKY BEZPEČNÉHO PODÁNÍ: Lze podat pouze tehdy, pokud již započala spontánní obnova bloku (minimálně 2, lépe 4 odpovědi na stimulaci TOF). Podání do hlubokého bloku je neúčinné a může vyvolat paradoxní depolarizační blokádu z nadbytku acetylcholinu. Nepůsobí na sukcinylcholin – inhibicí pseudocholinesterázy naopak blokádu sukcinylcholinem výrazně prodlužuje!',
    indications: [
      'Reverze reziduální nedepolarizující nervosvalové blokády (rokuronium, atrakurium, cisatrakurium) po operaci',
      'Symptomatická terapie myasthenia gravis',
      'Akutní pseudoobstrukce tlustého střeva (Ogilvieho syndrom)'
    ],
    dosageInduction: '0,03 - 0,05 mg/kg IV (max. jednorázová dávka 5,0 mg). VŽDY podat v kombinaci s atropinem (0,015 mg/kg) nebo glykopyrrolátem (0,2 mg na 1 mg neostigminu).',
    pediatricDosage: '0,03 - 0,05 mg/kg IV vždy s atropinem (0,015 - 0,02 mg/kg).',
    standardPrep: '0,5 mg/mL ampule (Syntostigmin).',
    onset: '7 - 11 minut (pomalý nástup, vyžaduje čas k vytěsnění relaxancia z receptorů).',
    duration: '60 - 120 minut.',
    contraindications: [
      'Mechanická obstrukce trávicího nebo močového traktu',
      'Těžká bradykardie, převodní poruchy nebo nekorigovaný bronchospasmus',
      'Přecitlivělost na neostigmin nebo bromidy/methylsulfáty'
    ],
    adverseEffects: [
      'Těžká bradykardie, junkční rytmus, AV blokády až asystolie (muskarinový efekt M2)',
      'Bronchokonstrikce, bronchospasmus a masivní bronchiální hypersekrece (M3 efekt)',
      'Zvýšená salivace, nauzea, křečovité bolesti břicha, průjem',
      'Svalové záškuby a paradoxní slabost při předávkování (cholinergní krize)'
    ],
    pearls: [
      'Zlaté bezpečnostní pravidlo: NIKDY neaplikujte neostigmin bez antimuskarinika! Hrozí bezprostřední vagová zástava oběhu a těžký bronchospasmus.',
      'Podmínka účinnosti: lze aplikovat výhradně při známkách spontánního odeznívání bloku (minimálně 2 záškuby na TOF monitoru, ideálně 4 záškuby). Podání do hlubokého bloku je neúčinné a nebezpečné.',
      'V moderní praxi je u aminosteroidů (rokuronium) preferován sugammadex, neostigmin však zůstává klíčový pro reverzi benzylisochinolinů (cisatrakurium).'
    ]
  },
  {
    id: 'dexamethasone',
    name: 'Dexamethasone',
    genericName: 'Dexamethason (Decadron / Fortecortin)',
    category: 'reversal',
    categoryLabel: 'Antiemetikum / Glukokortikoid',
    class: 'Dlouhodobě působící syntetický glukokortikoid',
    mechanism: 'Dlouhodobě působící, vysoce potentní syntetický fluorovaný glukokortikoid s minimální mineralokortikoidní aktivitou (protizánětlivá potence je cca 25–30× vyšší než u hydrokortizonu). Po pasivním vstupu do buněk se váže na cytoplazmatické glukokortikoidní receptory (GR). Komplex disociuje od proteinů tepelného šoku (Hsp90) a dimerizuje, načež translokuje do jádra. Zde působí genomicky: 1) Transrepresí přímo inhibuje klíčové prozánětlivé transkripční faktory (NF-κB a AP-1), čímž potlačuje expresi genů pro prozánětlivé cytokiny (IL-1, IL-6, TNF-α), cyklooxygenázu-2 (COX-2) a inducibilní syntázu NO (iNOS); 2) Transaktivací stimuluje syntézu protizánětlivých proteinů, zejména lipokortinu-1 (anexinu A1), který inhibuje fosfolipázu A2 (PLA2) a blokuje kaskádu kyseliny arachidonové. ANTIEMETICKÝ MECHANISMUS (PONV): Tlumí centrální syntézu prostaglandinů v mozkovém kmeni, moduluje serotonergní transmisi v tractus solitarius a chemoreceptorové zóně, snižuje permeabilitu hematoencefalické bariéry pro cirkulující emetogeny a prokazatelně zvyšuje hustotu a citlivost 5-HT3 receptorů k jejich antagonistům (synergie s ondansetronem). Vzhledem k tomu, že mechanismus vyžaduje de novo syntézu a transkripci proteinů, nástup účinku trvá 1–2 hodiny – proto se k profylaxi PONV musí podávat již při úvodu do anestezie. Biologický poločas je 36–72 hodin. Snižuje pooperační otok měkkých tkání hrtanu a faryngu, čímž předchází postextubačnímu stridoru.',
    indications: [
      'Profylaxe pooperační nevolnosti a zvracení (PONV) u středního a vysokého rizika dle skóre Apfelové',
      'Prevence a terapie poextubačního stridoru a edému dýchacích cest (po obtížné intubaci)',
      'Adjuvantní léčba těžké anafylaxe a bronchospasmu',
      'Prodloužení analgezie při periferních nervových blokádách (adjuvans k lokálnímu anestetiku)'
    ],
    dosageInduction: 'Profylaxe PONV: 4 - 8 mg IV bolus podaný při úvodu do anestezie; prevence edému dýchacích cest: 8 - 12 mg IV.',
    pediatricDosage: '0,15 - 0,3 mg/kg IV (max. 8–10 mg).',
    standardPrep: '4 mg/mL nebo 8 mg/mL ampule.',
    onset: '1 - 2 hodiny (genomický účinek vyžadující syntézu proteinů).',
    duration: '36 - 72 hodin (dlouhý biologický poločas).',
    contraindications: [
      'Systémové neléčené mykotické infekce',
      'Těžká dekompenzovaná diabetická ketoacidóza nebo nekontrolovaná hyperglykémie (relativní)',
      'Známá přecitlivělost na dexamethason'
    ],
    adverseEffects: [
      'Přechodné intenzivní pálení, píchání a svědění v perineální a anogenitální oblasti při rychlé IV injekci u bdělého pacienta (vlivem fosfátového esteru)',
      'Přechodná pooperační hyperglykémie (vyžaduje monitoraci glykémie u diabetiků)',
      'Mírné poruchy spánku nebo agitovanost v pooperačním období'
    ],
    pearls: [
      'Zásadní časování: dexamethason podávejte IHNED při úvodu do anestezie! Vzhledem k genomickému mechanismu potřebuje 1–2 hodiny k nástupu antiemetického účinku.',
      'Kombinační profylaxe PONV: podání dexamethasonu (4–8 mg) v úvodu a ondansetronu (4 mg) na konci operace poskytuje maximální synergickou ochranu.',
      'Před aplikací u bdělého pacienta jej vždy varujte před přechodným nepříjemným pocitem pálení v rozkroku; pomalé podání v infuzi tento fenomén eliminuje.'
    ]
  }
];
