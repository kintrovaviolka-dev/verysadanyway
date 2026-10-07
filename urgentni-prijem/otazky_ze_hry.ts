import { MedicalQuestion } from '../types';

export const MEDICAL_QUESTIONS: MedicalQuestion[] = [
    {
        id: 'aim_q01',
        category: 'Krizové stavy na sále & Toxikologie',
        difficulty: 'Pokročilá',
        question: 'Jaká je doporučená úvodní bolusová dávka 20% lipidové emulze (Intralipid) při systémové toxicitě lokálními anestetiky (LAST) s oběhovým selháním?',
        options: [
            '1,5 ml/kg intravenózně během 1 minuty',
            '0,5 ml/kg intravenózně během 10 minut',
            '5,0 ml/kg jako rychlý přetlakový bolus',
            '100 ml fixně bez ohledu na hmotnost pacienta'
        ],
        correctIndex: 0,
        rationale: 'Při LAST je standardním doporučeným postupem (ASRA/ESRA) iniciální bolus 20% lipidové emulze v dávce 1,5 ml/kg během 1 minuty, následovaný kontinuální infuzí 0,25 ml/kg/min (až 0,5 ml/kg/min při přetrvávající nestabilitě). Bolus lze při neúspěchu resuscitace 1-2x zopakovat.',
        clinicalSource: 'ASRA Practice Advisory on Local Anesthetic Systemic Toxicity / ČSARIM'
    },
    {
        id: 'aim_q02',
        category: 'Krizové stavy na sále & Toxikologie',
        difficulty: 'Expert',
        question: 'Při rozvoji fulminantní maligní hypertermie po úvodu sevofluranem a sukcinylcholinem je lékem volby Dantrolen. Jaká je jeho iniciální intravenózní bolusová dávka?',
        options: [
            '2,5 mg/kg i.v. (opakovat dle odezvy až do dávky 10 mg/kg)',
            '0,5 mg/kg i.v. v pomalé infuzi',
            '10 mg/kg i.v. jednorázově jako maximální strop',
            '1,0 mg/kg i.v. pouze po laboratorním průkazu laktátové acidózy'
        ],
        correctIndex: 0,
        rationale: 'Iniciální dávka Dantrolenu (inhibitor ryanodinových receptorů RyR1) je 2,5 mg/kg i.v. co nejrychleji. Podávání se opakuje po 1 mg/kg každých 5-10 minut, dokud neodezní hypermetabolismus, tachykardie a rigidita (kumulativně až 10 mg/kg i více).',
        clinicalSource: 'EMHG (European Malignant Hyperthermia Group) Guidelines'
    },
    {
        id: 'aim_q03',
        category: 'Farmakologie & Indukce',
        difficulty: 'Pokročilá',
        question: 'Jaká dávka Sugammadexu je indikována pro okamžitou reverzi (rescue reversal) hluboké nervosvalové blokády 3 minuty po podání rokuronia v dávce 1,2 mg/kg (např. při situaci Can not intubate, can not oxygenate)?',
        options: [
            '16 mg/kg i.v.',
            '4 mg/kg i.v.',
            '2 mg/kg i.v.',
            '8 mg/kg i.v.'
        ],
        correctIndex: 0,
        rationale: 'Pro okamžitou reverzi po intubační dávce rokuronia (1,2 mg/kg) je doporučena dávka 16 mg/kg Sugammadexu. Běžná reverze při návratu 1-2 záškubů na PTC (post-tetanic count) vyžaduje 4 mg/kg, při návratu T2 na TOF stačí 2 mg/kg.',
        clinicalSource: 'ESAIC Guidelines on Neuromuscular Blockade Reversal'
    },
    {
        id: 'aim_q04',
        category: 'Dýchací cesty & Ventilace',
        difficulty: 'Expert',
        question: 'Který z následujících parametrů představuje nejspolehlivější cíl protektivní plicní ventilace u pacienta se středně těžkým ARDS ke snížení mortality spojené s VILI?',
        options: [
            'Driving pressure (P_plat - PEEP) < 14-15 cmH2O',
            'Špičkový inspirační tlak (P_peak) < 40 cmH2O',
            'Dechový objem striktně 10 ml/kg aktuální tělesné hmotnosti',
            'PaO2/FiO2 ratio udržované nad 400 mmHg za cenu vysoké FiO2'
        ],
        correctIndex: 0,
        rationale: 'Podle Amato et al. a aktuálních doporučení pro ARDS je driving pressure (hnací tlak = P_plat minus celkový PEEP) klíčovým prediktorem přežití. Hodnota by měla být držena < 14–15 cmH2O při dechovém objemu 4–8 ml/kg ideální (predikované) tělesné hmotnosti (PBW).',
        clinicalSource: 'Amato MB et al. (NEJM) / ARDS Network Guidelines'
    },
    {
        id: 'aim_q05',
        category: 'Kritické stavy & Šok',
        difficulty: 'Pokročilá',
        question: 'Který vazopresor je lékem 1. volby v iniciální resuscitaci septického šoku k dosažení cílového středního arteriálního tlaku (MAP ≥ 65 mmHg)?',
        options: [
            'Noradrenalin (Norepinefrin)',
            'Dopamin',
            'Fenylefrin',
            'Adrenalin jako iniciální monoterapie'
        ],
        correctIndex: 0,
        rationale: 'Doporučení Surviving Sepsis Campaign (SSC) 2021 jednoznačně staví Noradrenalin na 1. místo. Dopamin je spojen s vyšším výskytem tachyarytmií a vyšší mortalitou. Vazopresin se přidává jako 2. linie při refrakterní hypotenzi.',
        clinicalSource: 'Surviving Sepsis Campaign Guidelines 2021'
    },
    {
        id: 'aim_q06',
        category: 'Farmakologie & Indukce',
        difficulty: 'Expert',
        question: 'U kterého z následujících pacientů je podání Suxamethonia (sukcinylcholinu) po 72 hodinách od úrazu PŘÍSNĚ KONTRAINDIKOVÁNO z důvodu rizika letální hyperkalémie?',
        options: [
            'Pacient s popáleninami 3. stupně na 35 % povrchu těla',
            'Pacient s izolovanou zlomeninou bérce bez kompartment syndromu',
            'Pacient s lehkým otřesem mozku a normálním EEG',
            'Pacient s plánovanou apendektomií bez neurologického nálezu'
        ],
        correctIndex: 0,
        rationale: 'U rozsáhlých popálenin, denervačních syndromů, míšních lézí a těžkých crush zranění dochází po 24-48 hodinách k proliferaci mimojunkčních (extrajunkčních) nikotinových acetylcholinových receptorů. Suxamethonium způsobí masivní eflux draslíku z buněk s rizikem maligních arytmií a asystolie.',
        clinicalSource: 'Miller\'s Anesthesia / ČSARIM Doporučené postupy'
    },
    {
        id: 'aim_q07',
        category: 'Dýchací cesty & Ventilace',
        difficulty: 'Pokročilá',
        question: 'Co je podle DAS (Difficult Airway Society) guidelines definitivním krokem v plánu D ("Can not intubate, can not oxygenate" - CICO)?',
        options: [
            'Chirurgická krikothyreoidotomie (scalpel-bougie-tube FONA)',
            'Opakovaný pokus o intubaci jiným videolaryngoskopem',
            'Zavedení dvou laryngeálních masek nad sebe',
            'Okamžité podání další dávky myorelaxancia a vyčkání'
        ],
        correctIndex: 0,
        rationale: 'Plán D při CICO stavu vyžaduje okamžitý přístup na krku (Front of Neck Access - FONA) pomocí techniky skalpel – zavaděč (bougie) – tracheální rourka vel. 6,0 mm s balónkem. Zdržování dalšími laryngoskopiemi vede k hypoxickému poškození mozku.',
        clinicalSource: 'DAS Guidelines for Management of Unanticipated Difficult Intubation'
    },
    {
        id: 'aim_q08',
        category: 'Kardioanestezie & ECMO',
        difficulty: 'Expert',
        question: 'Co označuje pojem "Harlekýnský syndrom" (North-South syndrom) u pacienta na femoro-femorálním veno-arteriálním (VA) ECMO?',
        options: [
            'Hypoxii horní poloviny těla (mozek, koronárky) při zachovalé ejekci vlastního hypoxického myokardu vůči retrográdnímu oxygenovanému toku z ECMO',
            'Trombózu ECMO oxygenátoru spojenou s masivní intravaskulární hemolýzou',
            'Ischemii ipsilaterální dolní končetiny v důsledku okluze femorální arterie kanylou',
            'Koagulopatii způsobenou předávkováním protaminsulfátu'
        ],
        correctIndex: 0,
        rationale: 'Při periferním VA-ECMO se oxygenovaná krev vrací retrográdně z femorální arterie do aorty. Pokud se vlastní srdeční výdej pacienta obnoví, ale plíce jsou těžce poškozené, nativní levá komora pumpuje neokysličenou krev do věnčitých tepen a mozku (truncus brachiocephalicus), což vede k hypoxii mozku a myokardu navzdory normálním plynům v dolní polovině těla.',
        clinicalSource: 'ELSO (Extracorporeal Life Support Organization) Guidelines'
    },
    {
        id: 'aim_q09',
        category: 'Neurointenzivní péče & Vnitřní prostředí',
        difficulty: 'Pokročilá',
        question: 'Jaká je doporučená cílová hodnota mozkového perfuzního tlaku (CPP = MAP - ICP) u dospělého pacienta po těžkém kraniocerebrálním poranění (TBI) dle Brain Trauma Foundation?',
        options: [
            '60 – 70 mmHg',
            '30 – 40 mmHg',
            '90 – 110 mmHg',
            'Striktně pod 50 mmHg k prevenci vazogenního edému'
        ],
        correctIndex: 0,
        rationale: 'Brain Trauma Foundation doporučuje udržovat CPP v rozmezí 60–70 mmHg. Hodnoty pod 50–60 mmHg vedou k ischémii mozku, zatímco agresivní navyšování CPP nad 70 mmHg vazopresory zvyšuje riziko plicního edému a ARDS.',
        clinicalSource: 'Brain Trauma Foundation Guidelines 4th Edition'
    },
    {
        id: 'aim_q10',
        category: 'Farmakologie & Indukce',
        difficulty: 'Expert',
        question: 'Který biochemický mechanismus je primární příčinou adrenální insuficience (suprese syntézy kortizolu) po podání Etomidátu?',
        options: [
            'Dávkově závislá reverzibilní inhibice enzymu 11-beta-hydroxylázy',
            'Přímá nekróza buněk zona fasciculata nadledvin',
            'Blokáda ACTH receptorů v hypofýze',
            'Inhibice enzymu aromatázy v periferní tkáni'
        ],
        correctIndex: 0,
        rationale: 'Etomidát inhibuje enzym 11-beta-hydroxylázu v kůře nadledvin (která konvertuje 11-deoxykortizol na kortizol). I jediná indukční dávka etomidátu potlačuje syntézu kortizolu na 24-48 hodin, proto se nedoporučuje v kontinuální sedaci na JIP.',
        clinicalSource: 'Stoelting\'s Pharmacology and Physiology in Anesthetic Practice'
    },
    {
        id: 'aim_q11',
        category: 'Krizové stavy na sále & Toxikologie',
        difficulty: 'Pokročilá',
        question: 'Při interpretaci rotační tromboelastometrie (ROTEM) u krvácejícího traumatického pacienta zjistíte: EXTEM CT normální, EXTEM A10 22 mm (snížené), FIBTEM A10 4 mm (výrazně snížené). Jaká je primární cílená hemostyptická léčba?',
        options: [
            'Koncentrát fibrinogenu (nebo kryoprecipitát)',
            'Čerstvě zmražená plazma v poměru 1:1 k erytrocytům',
            'Rekombinantní faktor VIIa (NovoSeven)',
            'Pouze infuze kyseliny tranexamové bez dalších koagulačních faktorů'
        ],
        correctIndex: 0,
        rationale: 'FIBTEM měří sraženinu po inaktivaci krevních destiček cytochalasinem D, takže jeho amplituda (A10 / MCF) odráží čistě hladinu a polymeraci fibrinogenu. FIBTEM A10 < 8-10 mm je jasnou indikací k podání fibrinogenu (cílová hodnota FIBTEM A10 > 10-12 mm odpovídá plazmatickému fibrinogenu > 1,5-2,0 g/l).',
        clinicalSource: 'European Trauma Guidelines on Massive Bleeding / ČSARIM'
    },
    {
        id: 'aim_q12',
        category: 'Dýchací cesty & Ventilace',
        difficulty: 'Expert',
        question: 'Při kapnografii v průběhu celkové anestezie zaznamenáte náhlý pokles end-tidal CO2 (EtCO2) k nulovým hodnotám se zachovalou mechanickou ventilací. Která příčina je NEJMÉNĚ pravděpodobná?',
        options: [
            'Maligní hypertermie v iniciální fázi',
            'Diskonexe dýchacího okruhu nebo extubace do jícnu',
            'Masivní plicní embolie s totální zástavou perfuze plic',
            'Náhlá zástava oběhu (srdeční asystolie)'
        ],
        correctIndex: 0,
        rationale: 'Maligní hypertermie způsobuje prudký VZESTUP produkce CO2 (hyperkapnii s vysokým EtCO2 nereagujícím na zvýšení minutové ventilace). Nulový EtCO2 signalizuje ztrátu ventilace (diskonexe, jícen) nebo ztrátu plicního průtoku (srdeční zástava, masivní embolie).',
        clinicalSource: 'Ward\'s Anaesthetic Equipment / ČSARIM'
    },
    {
        id: 'aim_q13',
        category: 'Farmakologie & Indukce',
        difficulty: 'Pokročilá',
        question: 'Proč má ultra-krátce působící opioid Remifentanil kontextově-senzitivní poločas eliminace (context-sensitive half-time) pouhé 3-4 minuty i po mnoha hodinách kontinuální infuze?',
        options: [
            'Je rychle hydrolyzován nespecifickými krevními a tkáňovými esterázami',
            'Je okamžitě vychytáván tukovou tkání s ireverzibilní vazbou',
            'Podléhá bleskové renální filtraci v glomerulech bez tubulární reabsorpce',
            'Je metabolizován výhradně enzymem CYP3A4 v játrech s vysokou extrakcí'
        ],
        correctIndex: 0,
        rationale: 'Remifentanil obsahuje esterovou vazbu, díky níž je štěpen nespecifickými esterázami v krvi a tkáních. Nekumuluje se a jeho poločas nezávisí na délce infuze ani na jaterních či renálních funkcích.',
        clinicalSource: 'Goodman & Gilman\'s Pharmacological Basis of Therapeutics'
    },
    {
        id: 'aim_q14',
        category: 'Neurointenzivní péče & Vnitřní prostředí',
        difficulty: 'Expert',
        question: 'Dle Stewartova fyzikálně-chemického přístupu k acidobazické rovnováze je infuze velkého objemu fyziologického roztoku (0,9% NaCl, [Na+] 154 mmol/l, [Cl-] 154 mmol/l) příčinou metabolické acidózy protože:',
        options: [
            'Způsobuje pokles efektivní diference silných iontů (SID = [Na+] + [K+] - [Cl-]), což vede k disociaci vody a vzestupu [H+]',
            'Přímo obsahuje vysokou koncentraci volných vodíkových iontů H3O+',
            'Blokuje renální sekreci kyseliny močové a ketolátek',
            'Inhibuje karboanhydrázu v erytrocytech'
        ],
        correctIndex: 0,
        rationale: 'Fyziologický roztok má SID rovnou nule (154 - 154 = 0). Jeho podání ředí plazmatickou SID (normálně cca 40-42 mmol/l). Pokles SID nutí vodu k disociaci (H2O -> H+ + OH-), aby byl zachován elektroneutrální náboj, což zvyšuje koncentraci H+ a vyvolává hyperchloremickou metabolickou acidózu.',
        clinicalSource: 'Stewart PA. Modern Quantitative Acid-Base Chemistry'
    },
    {
        id: 'aim_q15',
        category: 'Kardioanestezie & ECMO',
        difficulty: 'Pokročilá',
        question: 'Jaký je správný poměr a způsob neutralizace heparinu protaminsulfátem po odpojení pacienta od mimotělního oběhu (CPB)?',
        options: [
            '1 mg protaminu na 100 IU podaného heparinu, podávat velmi pomalu i.v. (riziko těžké hypotenze a plicní vazokonstrikce)',
            '10 mg protaminu na 100 IU heparinu v rychlém bolusu',
            '0,1 mg protaminu na 100 IU heparinu pouze subkutánně',
            'Protamin se podává fixně 500 mg do centrální žíly během 10 sekund'
        ],
        correctIndex: 0,
        rationale: 'Standardní neutralizační dávka je cca 1 mg protaminu na 100 IU reziduálního heparinu (titrováno dle ACT - Activated Clotting Time). Rychlé podání protaminu může vyvolat těžkou systémovou vazodilataci, fatální plicní hypertenzi a katastrofální selhání pravé komory.',
        clinicalSource: 'Kaplan\'s Cardiac Anesthesia / EACTAIC Guidelines'
    },
    {
        id: 'aim_q16',
        category: 'Farmakologie & Indukce',
        difficulty: 'Pokročilá',
        question: 'Který z následujících projevů NENÍ typickou součástí syndromu infuze propofolu (PRIS - Propofol Infusion Syndrome)?',
        options: [
            'Hyperkalcémie a respirační alkalóza',
            'Těžká metabolická laktátová acidóza',
            'Rhabdomyolýza a myoglobinurie',
            'Refrakterní bradykardie progredující do asystolie a kardiogenní šok'
        ],
        correctIndex: 0,
        rationale: 'PRIS se typicky projevuje refrakterní bradykardií, selháním myokardu, těžkou metabolickou acidózou, rhabdomyolýzou, hyperkalémií, hyperlipidémií a hepatomegalií. Vzniká při dávkách > 4-5 mg/kg/h podávaných déle než 48 hodin.',
        clinicalSource: 'ESAIC / Critical Care Medicine PRIS Consensus'
    },
    {
        id: 'aim_q17',
        category: 'Kritické stavy & Šok',
        difficulty: 'Expert',
        question: 'Jaký je mechanismus účinku Levosimendanu a proč je výhodný u kardiogenního šoku s ischémií myokardu?',
        options: [
            'Zvyšuje citlivost troponinu C na vápník bez zvýšení intracelulárního Ca2+, čímž zvyšuje inotropii bez vzestupu spotřeby kyslíku myokardem',
            'Blokuje beta-1 adrenergní receptory a stimuluje glykolýzu',
            'Přímo inhibuje fosfodiestrázu-5 s selektivní koronární vazokonstrikcí',
            'Zvyšuje influx extracelulárního vápníku přes L-typ kanály'
        ],
        correctIndex: 0,
        rationale: 'Levosimendan je kalciový senzitizér: váže se na troponin C dependentně na vápníku a zároveň otevírá ATP-senzitivní draslíkové kanály ve hladké svalovině cév (způsobuje vazodilataci). Zvyšuje kontraktilitu, aniž by zvyšoval intracelulární hladinu Ca2+ či spotřebu O2 myokardem a nezpůsobuje proarytmii.',
        clinicalSource: 'ESC Guidelines on Acute Heart Failure'
    },
    {
        id: 'aim_q18',
        category: 'Dýchací cesty & Ventilace',
        difficulty: 'Pokročilá',
        question: 'Při monitorování nervosvalové blokády metodou TOF (Train of Four) na m. adductor pollicis je pro bezpečnou extubaci pacienta na konci anestezie požadována hodnota TOF ratio (T4/T1):',
        options: [
            '≥ 0,90 (90 %)',
            '≥ 0,50 (50 %)',
            '≥ 0,70 (70 %)',
            'Stačí vymizení známek fade při manuální palpaci'
        ],
        correctIndex: 0,
        rationale: 'Hranice TOF poměru ≥ 0,90 je mezinárodním standardem pro bezpečnou extubaci. Při TOF ratio < 0,9 přetrvává svalová slabost hltanu a bránice, hrozí hypofaryngeální obstrukce a aspirace. Vizuální ani palpační hodnocení není spolehlivé pro detekci fade nad 0,4.',
        clinicalSource: 'ESAIC / ASA Guidelines on Neuromuscular Monitoring'
    },
    {
        id: 'aim_q19',
        category: 'Neurointenzivní péče & Vnitřní prostředí',
        difficulty: 'Expert',
        question: 'Při rychlé korekci chronické těžké hyponatrémie ([Na+] < 115 mmol/l) hrozí které závažné neurologické postižení?',
        options: [
            'Centrální pontinní myelinolýza (osmotický demyelinizační syndrom)',
            'Akutní mozkový edém s temporální herniací',
            'Subarachnoidální krvácení z ruptury aneuryzmatu',
            'Ischemický iktus v povodí arteria cerebri media'
        ],
        correctIndex: 0,
        rationale: 'Při chronické hyponatrémii se neurony adaptují ztrátou intracelulárních osmolytů. Rychlé zvýšení plazmatického natria (více než o 8-10 mmol/l za 24 hodin) způsobí dehydrataci buněk a destrukci myelinových pochev v pontu (osmotická demyelinizace) s kvadruparézou a locked-in syndromem.',
        clinicalSource: 'European Clinical Practice Guidelines on Diagnosis and Treatment of Hyponatraemia'
    },
    {
        id: 'aim_q20',
        category: 'Krizové stavy na sále & Toxikologie',
        difficulty: 'Pokročilá',
        question: 'Co je podle doporučení ERC 2021 lékem 1. volby u anafylaktického šoku na operačním sále a jaká je jeho úvodní intramuskulární (nebo titrovaná i.v.) dávka u dospělého?',
        options: [
            'Adrenalin 0,5 mg i.m. (nebo 50 mcg i.v. titrovaně při monitorovaném lůžku)',
            'Hydrokortizon 100 mg i.v. jako okamžitý zachránce života',
            'Bisulepin 1 mg i.v. v pomalé infuzi',
            'Kalcium glukonát 10% 10 ml bolusem'
        ],
        correctIndex: 0,
        rationale: 'Adrenalin je jediným kauzálním lékem anafylaxe. Způsobuje alfa-1 vazokonstrikci (zvýšení tlaku), beta-1 inotropii a beta-2 bronchodilataci + inhibici degranulace mastocytů. Kortikoidy a antihistaminika jsou léky 2. linie a neovlivňují akutní asfyxii a kolaps.',
        clinicalSource: 'ERC Guidelines 2021 / Resuscitation Council UK Anaphylaxis'
    },
    {
        id: 'aim_q21',
        category: 'Farmakologie & Indukce',
        difficulty: 'Pokročilá',
        question: 'Které inhalační anestetikum vyžaduje speciální vyhřívaný a tlakovaný odpařovač (např. Tec 6) kvůli svému nízkému bodu varu (cca 23,5 °C při atmosférickém tlaku)?',
        options: [
            'Desfluran',
            'Sevofluran',
            'Isofluran',
            'Halotan'
        ],
        correctIndex: 0,
        rationale: 'Desfluran má bod varu 22,8–23,5 °C a velmi vysokou tenzi par při pokojové teplotě. Proto vyžaduje elektronicky vyhřívaný odpařovač (zahřátý na cca 39 °C a natlakovaný na 2 atmosféry), aby bylo dosaženo přesného a bezpečného dávkování par.',
        clinicalSource: 'Dorsch and Dorsch: Understanding Anesthesia Equipment'
    },
    {
        id: 'aim_q22',
        category: 'Kritické stavy & Šok',
        difficulty: 'Expert',
        question: 'U pacienta na řízené mechanické ventilaci monitorujete variaci pulzního tlaku (PPV - Pulse Pressure Variation) nebo variaci systolického objemu (SVV). Která podmínka MUSÍ být splněna, aby byla PPV > 13 % spolehlivým prediktorem fluid responsiveness?',
        options: [
            'Sinusový rytmus, plně řízená ventilace bez spontánního dechového úsilí a dechový objem ≥ 8 ml/kg PBW',
            'Fibrilace síní s rychlou komorovou odpovědí',
            'Spontánní ventilace s dechovým objemem 4 ml/kg',
            'Pravostranné srdeční selhání s těžkou trikuspidální regurgitací'
        ],
        correctIndex: 0,
        rationale: 'Dynamické parametry preloadu (PPV/SVV) založené na kardiopulmonálních interakcích vyžadují: sinusový rytmus (bez arytmií), zcela pasivního pacienta (bez spontánních dechů), dechový objem aspoň 8 ml/kg a uzavřený hrudník bez těžké plicní hypertenze.',
        clinicalSource: 'Michard F. Changes in arterial pulse pressure during mechanical ventilation. Am J Respir Crit Care Med'
    },
    {
        id: 'aim_q23',
        category: 'Dýchací cesty & Ventilace',
        difficulty: 'Pokročilá',
        question: 'Jaký je patofyziologický důsledek a správné ventilační nastavení při vzniku "auto-PEEPu" (dynamické hyperinflace / air trapping) u pacienta s těžkým bronchospazmem a astmatem?',
        options: [
            'Nedochází k dokončení exspiria před dalším nádechem; řešením je prodloužení exspiračního času (poměr I:E 1:3 až 1:4) a snížení dechové frekvence',
            'Příliš rychlý výdech; řešením je zkrácení doby exspiria a zvýšení dechové frekvence nad 30/min',
            'Nadměrná eliminace CO2; řešením je zvýšení dechového objemu na 12 ml/kg',
            'Kolaps alveolů; řešením je okamžité zvýšení externího PEEP na 20 cmH2O'
        ],
        correctIndex: 0,
        rationale: 'Při obstrukci dýchacích cest (astma, CHOPN) je limitován exspirační průtok. Krátký exspirační čas způsobí kumulaci vzduchu v plicích, vzestup nitrohrudního tlaku, barotrauma a útlak žilního návratu s hypotenzí. Nutností je nízká frekvence (10-12/min) a dlouhý čas na výdech (I:E 1:3 až 1:5).',
        clinicalSource: 'Intensive Care Medicine / Principles of Critical Care'
    },
    {
        id: 'aim_q24',
        category: 'Kardioanestezie & ECMO',
        difficulty: 'Expert',
        question: 'Při kanylaci pro Veno-Venózní (VV) ECMO u refrakterního ARDS je hlavním cílem podpory:',
        options: [
            'Izolovaná oxygenace a eliminace CO2 s ulehčením plicím bez přímé hemodynamické podpory srdečních komor',
            'Přímá podpora čerpací funkce levé komory obcházející plicní řečiště',
            'Kompletní náhrada funkce pravé i levé komory a perfuze koronárních tepen',
            'Zajištění renální hemofiltrace v okruhu bez nutnosti dialyzačního přístroje'
        ],
        correctIndex: 0,
        rationale: 'VV-ECMO odebírá odkysličenou krev z centrálního žilního řečiště, oxygenuje ji a odstraňuje CO2, a vrací ji zpět do pravé síně. Neobchází srdce a neposkytuje oběhovou podporu (vyžaduje zachovalou funkci LK a PK). Umožňuje ultra-protektivní ventilaci plic.',
        clinicalSource: 'Extracorporeal Life Support Organization (ELSO) Red Book'
    },
    {
        id: 'aim_q25',
        category: 'Farmakologie & Indukce',
        difficulty: 'Pokročilá',
        question: 'Jaký je mechanismus účinku Ketaminu a které z následujících tvrzení o něm platí?',
        options: [
            'Je nekompetitivním antagonistou NMDA receptorů; zachovává faryngeální reflexy a má bronchodilatační a sympatomimetický účinek',
            'Je čistým agonistou GABA-A receptorů s výraznou vazodilatací a poklesem srdečního výdeje',
            'Blokuje alfa-2 adrenergní receptory s navozením hluboké bradykardie',
            'Způsobuje silnou bronchokonstrikci a je přísně zakázán u astmatiků'
        ],
        correctIndex: 0,
        rationale: 'Ketamin blokuje NMDA receptory (glutamátové) v CNS. Vyvolává disociativní anestezii, zvyšuje sympatickou aktivitu (při zachovalých zásobách katecholaminů zvyšuje TK a TF) a působí jako silný bronchodilatátor, což z něj činí ideální anestetikum pro indukci u těžkého bronchospazmu či šoku.',
        clinicalSource: 'Stoelting\'s Pharmacology and Physiology in Anesthetic Practice'
    },
    {
        id: 'aim_q26',
        category: 'Krizové stavy na sále & Toxikologie',
        difficulty: 'Expert',
        question: 'V jakém časovém okně po traumatu s těžkým krvácením je nutné podat Kyselinu Tranexamovou (TXA), aby dle studií CRASH-2 a CRASH-3 signifikantně snižovala mortalitu?',
        options: [
            'Do 3 hodin od úrazu (pozdější podání po 3 hodinách mortalitu naopak zvyšuje)',
            'Až po potvrzení hyperfibrinolýzy v laboratorním koagulogramu',
            'Výhradně do 15 minut od úrazu, později již nemá žádný efekt',
            'Kdykoliv v průběhu prvních 24 hodin bez omezení'
        ],
        correctIndex: 0,
        rationale: 'Studie CRASH-2 i CRASH-3 prokázaly, že TXA podaná do 3 hodin od traumatu významně snižuje riziko úmrtí na krvácení. Podání po více než 3 hodinách vedlo k paradoxnímu zvýšení mortality, pravděpodobně v důsledku trombotických komplikací v pozdější fázi koagulopatie.',
        clinicalSource: 'CRASH-2 & CRASH-3 Collaborators (The Lancet)'
    },
    {
        id: 'aim_q27',
        category: 'Neurointenzivní péče & Vnitřní prostředí',
        difficulty: 'Pokročilá',
        question: 'Proč je u pacienta s akutní intrakraniální hypertenzí přísně zakázána profylaktická a dlouhodobá hyperventilace na hodnoty PaCO2 < 4,0 kPa (30 mmHg)?',
        options: [
            'Způsobuje těžkou cerebrální vazokonstrikci s kritickým poklesem průtoku krve mozkem a sekundární cerebrální ischémií',
            'Způsobuje vazodilataci mozkových tepen a okamžitý nárůst intrakraniálního tlaku',
            'Vyvolává masivní přesun draslíku do extracelulárního prostoru s hyperkalémií',
            'Vede k okamžitému rozvoji edému plic z hypokapnie'
        ],
        correctIndex: 0,
        rationale: 'Cerebrální cévní rezistence je extrémně citlivá na hladinu PaCO2. Pokles PaCO2 vede k vazokonstrikci arteriol a sice sníží objem krve v lebce, ale při PaCO2 < 4,0 kPa vyvolává těžkou mozkovou hypoperfuzi a ischemickou nekrózu tkáně.',
        clinicalSource: 'Brain Trauma Foundation Guidelines'
    },
    {
        id: 'aim_q28',
        category: 'Farmakologie & Indukce',
        difficulty: 'Pokročilá',
        question: 'Jaký je cílový interval hodnot Bispektrálního indexu (BIS) pro zajištění adekvátní hloubky celkové anestezie a minimalizaci rizika intraoperačního bdění (awareness)?',
        options: [
            '40 – 60',
            '80 – 100',
            '10 – 20',
            '65 – 85'
        ],
        correctIndex: 0,
        rationale: 'BIS škála: 90-100 je plné vědomí, 60-80 lehká/střední sedace, 40-60 adekvátní celková anestezie, < 40 hluboká anestezie / burst suppression, 0 je izoelektrické EEG. Hodnoty 40-60 představují doporučený interval pro celkovou anestezii.',
        clinicalSource: 'ASA Practice Advisory for Intraoperative Awareness and Brain Function Monitoring'
    },
    {
        id: 'aim_q29',
        category: 'Kritické stavy & Šok',
        difficulty: 'Expert',
        question: 'Při masivní krevní transfuzi (více než 10 krevních konzerv) dochází k toxicitě citrátu sodného. Jaký laboratorní a klinický nález je pro ni charakteristický?',
        options: [
            'Pokles ionizovaného vápníku (hypokalcémie), prodloužení QT intervalu a metabolická alkalóza po metabolizaci citrátu na bikarbonát',
            'Závažná hyperkalcémie a hyperchloremická acidóza',
            'Hyperfosfatémie a okamžitá zástava v systole',
            'Pokles natria pod 100 mmol/l a osmotický edém mozku'
        ],
        correctIndex: 0,
        rationale: 'Citrát v konzervačním roztoku váže volné ionty vápníku -> dochází k hypokalcémii s tetanií, hypotenzí, poruchou kontraktility myokardu a prodloužením QT. Následně játra metabolizují citrát na hydrogenuhličitan, což vede k metabolické alkalóze.',
        clinicalSource: 'Transfusion Medicine and Hemostasis: Clinical and Laboratory Aspects'
    },
    {
        id: 'aim_q30',
        category: 'Krizové stavy na sále & Toxikologie',
        difficulty: 'Pokročilá',
        question: 'Pacient na sále v celkové anestezii náhle vyvine hypotenzi (TK 60/30), tachykardii, hypoxii, asymetrický poslech na plicích (vpravo oslabené dýchání), tympanický poklep vpravo a náhlý nárůst špičkového inspiračního tlaku na ventilátoru. Jaký je okamžitý krok?',
        options: [
            'Okamžitá punkční dekomprese tenzního pneumotoraxu jehlou velkého kalibru ve 4.-5. mezižebří v přední axilární čáře (nebo 2. mezižebří medioklavikulárně)',
            'Provedení kontrolního skiagrafického RTG snímku plic a vyčkání na popis',
            'Zvýšení dechového objemu a navýšení PEEP na 15 cmH2O',
            'Podání bolusu amiodaronu a vyčkání na normalizaci EKG'
        ],
        correctIndex: 0,
        rationale: 'Tenzní pneumotorax je klinická diagnóza, která nesnese odklad na rentgenové vyšetření. V přetlakové ventilaci vede k rychlému kolapsu žilního návratu a zástavě oběhu. Řešením je okamžitá jehlová torakocentéza / torakostomie.',
        clinicalSource: 'ATLS (Advanced Trauma Life Support) 10th Edition'
    },
    {
        id: 'aim_q31',
        category: 'Farmakologie & Indukce',
        difficulty: 'Pokročilá',
        question: 'Jak působí Dexmedetomidin v intenzivní péči a anesteziologii a jaká je jeho klíčová přednost oproti benzodiazepinům a propofolu?',
        options: [
            'Je selektivní centrální alfa-2 agonista; poskytuje kooperativní sedaci a analgezii bez významného útlumu dechového centra',
            'Je antagonista serotoninových 5-HT3 receptorů s hlubokou svalovou relaxací',
            'Je čistý GABA agonista s masivním vazokonstrikčním účinkem na periférii',
            'Je inhibitor acetylcholinesterázy stimulující dýchání a srdeční frekvenci'
        ],
        correctIndex: 0,
        rationale: 'Dexmedetomidin stimuluje alfa-2 receptory v locus coeruleus. Poskytuje sedaci připomínající fyziologický spánek, ze které je pacient snadno probuditelný ke komunikaci, má analgetické účinky a minimální vliv na dechový pohon (nespustí apnoi).',
        clinicalSource: 'Crit Care Med / Dexmedetomidine in ICU Sedation Guidelines'
    },
    {
        id: 'aim_q32',
        category: 'Dýchací cesty & Ventilace',
        difficulty: 'Expert',
        question: 'Která definice dle Berlínských kritérií z roku 2012 správně vymezuje TĚŽKÝ ARDS (Severe ARDS)?',
        options: [
            'PaO2 / FiO2 ≤ 100 mmHg při PEEP ≥ 5 cmH2O s bilaterálními infiltráty na RTG/CT ne plně vysvětlitelnými srdečním selháním',
            'PaO2 / FiO2 mezi 200 a 300 mmHg bez ohledu na PEEP',
            'PaO2 / FiO2 ≤ 50 mmHg výhradně při nutnosti ECMO',
            'Infiltrát na RTG pouze v jednom plicním laloku a PaO2 / FiO2 < 200 mmHg'
        ],
        correctIndex: 0,
        rationale: 'Berlínská definice ARDS: Mírný (Mild) = PaO2/FiO2 201–300 mmHg; Střední (Moderate) = PaO2/FiO2 101–200 mmHg; Těžký (Severe) = PaO2/FiO2 ≤ 100 mmHg (vše při PEEP ≥ 5 cmH2O).',
        clinicalSource: 'The ARDS Definition Task Force. JAMA 2012'
    },
    {
        id: 'aim_q33',
        category: 'Kardioanestezie & ECMO',
        difficulty: 'Pokročilá',
        question: 'Při resuscitaci refrakterní fibrilace komor (VF) nebo bezpulzové komorové tachykardie (pVT) dle ERC 2021 se podává antiarytmikum Amiodaron. Kdy a v jaké dávce?',
        options: [
            '300 mg i.v. po 3. neúspěšném výboji; při přetrvávání VF/pVT další dávka 150 mg po 5. výboji',
            '150 mg i.v. ihned před 1. výbojem',
            '1000 mg v rychlé infuzi během prvních 2 minut KPR',
            'Amiodaron se podává až po obnovení spontánního oběhu (ROSC)'
        ],
        correctIndex: 0,
        rationale: 'Při defibrilovatelných rytmech (VF/pVT) se po 3. výboji podává Adrenalin 1 mg a Amiodaron 300 mg (případně Lidokain 100 mg). Po 5. výboji se podává druhá dávka Amiodaronu 150 mg (nebo Lidokain 50 mg).',
        clinicalSource: 'ERC Guidelines 2021: Adult Advanced Life Support'
    },
    {
        id: 'aim_q34',
        category: 'Neurointenzivní péče & Vnitřní prostředí',
        difficulty: 'Expert',
        question: 'Jaký je rozdíl mezi 20% Mannitolem a 3% Hypertonickým solným roztokem (HTS) při terapii intrakraniální hypertenze s edémem mozku?',
        options: [
            'Mannitol vyvolává osmotickou diurézu s rizikem hypovolemie a hypotenze, zatímco 3% HTS expanduje intravaskulární objem a stabilizuje krevní tlak',
            'Mannitol zvyšuje systémový tlak a nelze jej podat při dehydrataci',
            '3% HTS snižuje sodík v plazmě a způsobuje masivní diurézu',
            'Oba roztoky fungují identicky a nemají žádný vliv na cirkulující objem'
        ],
        correctIndex: 0,
        rationale: 'Mannitol působí jako silné osmotické diuretikum -> hrozí hypovolemie, pokles MAP a tím pokles CPP. Hypertonický NaCl (3-7,5%) vytváří osmotický gradient přes intaktní hematoencefalickou bariéru, přitahuje vodu z edematózního mozku a zároveň působí jako volumexpandér.',
        clinicalSource: 'Neurocritical Care Society Guidelines for Management of Cerebral Edema'
    },
    {
        id: 'aim_q35',
        category: 'Farmakologie & Indukce',
        difficulty: 'Pokročilá',
        question: 'Který z následujících faktorů NENÍ součástí skórovacího systému dle Apfela pro predikci pooperační nevolnosti a zvracení (PONV)?',
        options: [
            'Mužské pohlaví',
            'Ženské pohlaví',
            'Nekuřáctví',
            'Anamnéza PONV nebo kinetózy a plánované pooperační opioidy'
        ],
        correctIndex: 0,
        rationale: 'Apfel skóre hodnotí 4 nezávislé rizikové faktory: 1. Ženské pohlaví, 2. Nekuřák, 3. Anamnéza kinetózy nebo PONV, 4. Použití pooperačních opioidů. Každý faktor přidává cca 20 % rizika (0 = 10 %, 4 = cca 80 %). Mužské pohlaví je naopak protektivní.',
        clinicalSource: 'Apfel CC et al. / Consensus Guidelines for the Management of PONV'
    },
    {
        id: 'aim_q36',
        category: 'Krizové stavy na sále & Toxikologie',
        difficulty: 'Expert',
        question: 'Při podezření na masivní vzduchovou embolii při operaci v sedící poloze (např. v neurochirurgii) je jedním z polohovacích manévrů Durantův manévr. Jak je pacient polohován?',
        options: [
            'Poloha na levém boku s hlavou níže (Trendelenburg) k zachycení vzduchové bubliny v hrotu pravé komory',
            'Poloha na pravém boku s hlavou nahoře k vypuzení vzduchu do plicnice',
            'Sedící poloha s elevací nohou',
            'Prone position (na břiše) s hyperlordózou'
        ],
        correctIndex: 0,
        rationale: 'Durantův manévr (levý laterální dekubitus + Trendelenburg) napomáhá zadržení vzduchové zátky v hrotu pravé komory mimo výtokový trakt pravé komory (RVOT), čímž brání obstrukci kmene arteria pulmonalis.',
        clinicalSource: 'Barash Clinical Anesthesia / Neuroanesthesia Air Embolism Management'
    },
    {
        id: 'aim_q37',
        category: 'Kritické stavy & Šok',
        difficulty: 'Pokročilá',
        question: 'Která definice septického šoku odpovídá konsenzu Sepsis-3 z roku 2016?',
        options: [
            'Sepse vyžadující vazopresory k udržení MAP ≥ 65 mmHg a s hladinou sérového laktátu > 2,0 mmol/l navzdory adekvátní tekutinové resuscitaci',
            'Pouhá přítomnost horečky > 38 °C a leukocytózy při infekci močových cest',
            'Pokles systolického tlaku pod 90 mmHg reagující okamžitě na 500 ml krystaloidu',
            'Bakteriémie s normální hladinou laktátu bez nutnosti vazopresorů'
        ],
        correctIndex: 0,
        rationale: 'Dle Sepsis-3 je septický šok podmnožinou sepse s hlubokými oběhovými a buněčnými/metabolickými abnormalitami: nutnost vazopresorů k MAP ≥ 65 mmHg + laktát > 2 mmol/l (18 mg/dl) navzdory tekutinám. Úmrtnost přesahuje 40 %.',
        clinicalSource: 'The Third International Consensus Definitions for Sepsis and Septic Shock (Sepsis-3)'
    },
    {
        id: 'aim_q38',
        category: 'Dýchací cesty & Ventilace',
        difficulty: 'Pokročilá',
        question: 'Při videolaryngoskopii je glotická vizualizace klasifikována modifikovanou Cormack-Lehane škálou. Stupeň 3b označuje:',
        options: [
            'Epiglottis přitisknutá k zadní stěně faryngu, nelze ji elevovat od zadní stěny hltanu',
            'Kompletní přehled celého hlasivkového vchodu včetně přední komisury',
            'Pouze zadní část hlasivek a arytenoidní chrupavky',
            'Viditelná volná epiglottis, ale žádná část hlasivek (lze ji elevovat)'
        ],
        correctIndex: 0,
        rationale: 'Cormack-Lehane modifikace (Cook): 1 = celá glotis, 2a = část hlasivek, 2b = pouze arytenoidy/zadní štěrbina, 3a = epiglottis elevovatelná, 3b = epiglottis přilepená k faryngu (nelze podebrat), 4 = není vidět ani epiglottis.',
        clinicalSource: 'Cook TM. A new practical classification of laryngeal view. Anaesthesia'
    },
    {
        id: 'aim_q39',
        category: 'Farmakologie & Indukce',
        difficulty: 'Expert',
        question: 'Jaký je vliv jaterní a renální dysfunkce na eliminaci neuromuskulárního blokátoru Cisatrakuria (Cisatracurium)?',
        options: [
            'Minimální, protože podléhá spontánní neenzymatické degradaci v plazmě (Hofmannova eliminace) a esterové hydrolýze',
            'Způsobuje 10násobné prodloužení účinku kvůli výhradní renální exkreci',
            'Je absolutně kontraindikován při selhání jater kvůli blokádě syntézy pseudocholinesterázy',
            'Poločas se zkracuje kvůli vazbě na bilirubin'
        ],
        correctIndex: 0,
        rationale: 'Cisatrakurium (benzylisochinolinové myorelaxans) podléhá Hofmannově eliminaci (teplotně a pH dependentní spontánní rozpad v plazmě) a nespecifické esterázové hydrolýze. Doba účinku a zotavení je proto nezávislá na funkci ledvin i jater.',
        clinicalSource: 'Miller\'s Anesthesia / Stoelting Pharmacology'
    },
    {
        id: 'aim_q40',
        category: 'Kardioanestezie & ECMO',
        difficulty: 'Expert',
        question: 'Jaký vliv má intraaortální balonková kontrapulzace (IABP) na hemodynamiku levé komory během srdečního cyklu?',
        options: [
            'Nafouknutí balonu v diastole zvyšuje diastolický tlak v aortě a koronární perfuzi; vyfouknutí těsně před systolou snižuje afterload levé komory',
            'Nafouknutí v systole zvyšuje systolický tlak a vyfouknutí v diastole zvyšuje preload',
            'Trvalé nafouknutí nahrazuje činnost aortální chlopně při její těžké regurgitaci',
            'Zvyšuje afterload pravé komory přetlakem v plicnici'
        ],
        correctIndex: 0,
        rationale: 'IABP synchronizovaně nafukuje balon v časné diastole (hned po uzávěru aortální chlopně - dikrotický zářez), což zvýší koronární a mozkový průtok. Těsně před otevřením aortální chlopně (v izovolumické kontrakci) se balon rychle vyfoukne, čímž vytvoří podtlak a výrazně sníží afterload LK.',
        clinicalSource: 'Hensley\'s Practical Approach to Cardiac Anesthesia'
    },
    {
        id: 'aim_q41',
        category: 'Neurointenzivní péče & Vnitřní prostředí',
        difficulty: 'Pokročilá',
        question: 'Jaká je doporučená strategie managementu teploty (TTM - Targeted Temperature Management) u dospělých pacientů po mimonemocniční zástavě oběhu (OHCA) s komatem dle ERC/ESICM 2021/2022?',
        options: [
            'Aktivní prevence horečky s cílovou teplotou ≤ 37,5 °C (nebo udržování kontrolované hypotermie 32–36 °C po dobu minimálně 24-72 hodin)',
            'Hluboká hypotermie na 28 °C po dobu 7 dnů',
            'Řízená hypertermie na 38,5 °C pro stimulaci imunitní odpovědi',
            'Ponechání teploty zcela bez měření a intervence'
        ],
        correctIndex: 0,
        rationale: 'Dle studií TTM2 a doporučení ERC/ESICM je klíčové striktně předcházet horečce (teplotě > 37,5 °C) po dobu alespoň 72 hodin. Kontrolovaná hypotermie 32-36 °C zůstává alternativou, ale prevence febrilií má srovnatelný neurologický benefit.',
        clinicalSource: 'ERC-ESICM Guidelines on Temperature Management After Cardiac Arrest'
    },
    {
        id: 'aim_q42',
        category: 'Krizové stavy na sále & Toxikologie',
        difficulty: 'Pokročilá',
        question: 'Při methemoglobinémii (např. po předávkování prilokainem, benzokainem či dapsone) pulzní oxymetr typicky vykazuje:',
        options: [
            'Falešnou saturaci SpO2 fixovanou kolem 85 % bez ohledu na skutečný parciální tlak kyslíku PaO2',
            'Vždy 100 % SpO2 bez jakýchkoliv odchylek',
            'Spadnutí naměřené hodnoty SpO2 na 0 %',
            'Přesnou shodu se saturací z arteriálních krevních plynů'
        ],
        correctIndex: 0,
        rationale: 'Methemoglobin má stejný absorpční koeficient při vlnových délkách 660 nm i 940 nm (poměr R = 1,0). Konvenční dvou-vlnový pulzní oxymetr interpretuje poměr 1,0 jako saturaci přesně 85 %, i když pacient může mít těžkou hypoxémii.',
        clinicalSource: 'Barker SJ. Pulse Oximetry and Dyshemoglobins. Anesthesiology'
    },
    {
        id: 'aim_q43',
        category: 'Farmakologie & Indukce',
        difficulty: 'Pokročilá',
        question: 'Fenylefrin se v anesteziologii často používá k léčbě hypotenze po spinální anestezii. Jaký je jeho farmakologický profil?',
        options: [
            'Čistý přímý agonista alfa-1 adrenergních receptorů; zvyšuje SVR, což může vyvolat reflexní baroreceptorovou bradykardii',
            'Čistý beta-1 agonista zvyšující kontraktilitu a tepovou frekvenci',
            'Kombinovaný alfa-2 a beta-2 antagonista',
            'Přímý dárce oxidu dusnatého způsobující plicní vazodilataci'
        ],
        correctIndex: 0,
        rationale: 'Fenylefrin je selektivní přímý alfa-1 agonista vyvolávající vazokonstrikci arteriol i venul. Zvyšuje systémovou vaskulární rezistenci (SVR) a preload, ale v důsledku vzestupu TK spouští vagový reflex vedoucí k bradykardii a případně poklesu srdečního výdeje.',
        clinicalSource: 'Miller\'s Anesthesia / Stoelting Pharmacology'
    },
    {
        id: 'aim_q44',
        category: 'Dýchací cesty & Ventilace',
        difficulty: 'Expert',
        question: 'Při ventilaci pacienta v pronační poloze (prone positioning) u těžkého ARDS dochází ke zlepšení oxygenace především díky:',
        options: [
            'Homogennější distribuci transpulmonálního tlaku a ventilačně-perfuzního poměru (V/Q) se snížením dorzálních atelektáz',
            'Výraznému zvýšení minutového srdečního výdeje o více než 50 %',
            'Úplnému vymizení produkce hlenu v bronších',
            'Zmenšení celkového funkčního reziduálního objemu plic'
        ],
        correctIndex: 0,
        rationale: 'V pronační poloze leží srdce na sternu (neutlačuje dorzální laloky plic) a vertikální gradient pleurálního tlaku je mnohem rovnoměrnější. Tím dochází k rekrutování dorzálních plicních sklípků, lepší shodě ventilace s perfuzí a snížení střižného napětí (VILI). Dle studie PROSEVA snižuje mortalitu.',
        clinicalSource: 'Guerin C et al. (PROSEVA Study Group). NEJM'
    },
    {
        id: 'aim_q45',
        category: 'Kritické stavy & Šok',
        difficulty: 'Pokročilá',
        question: 'U septického šoku nereagujícího na adekvátní volumoterapii a vysoké dávky noradrenalinu (např. > 0,25 mcg/kg/min) doporučují SSC guidelines 2021 přidat jako druhý vazopresor:',
        options: [
            'Vazopresin (v dávce 0,03 IU/min)',
            'Fenytoin',
            'Nitroprusid sodný',
            'Propranolol'
        ],
        correctIndex: 0,
        rationale: 'Vazopresin v fixní dávce 0,03 IU/min (působící přes V1 receptory) je doporučeným aditivem k noradrenalinu k navýšení MAP a snížení dávek katecholaminů (šetřící efekt).',
        clinicalSource: 'Surviving Sepsis Campaign Guidelines 2021'
    },
    {
        id: 'aim_q46',
        category: 'Farmakologie & Indukce',
        difficulty: 'Expert',
        question: 'Jaká je definice Minimální alveolární koncentrace (MAC) inhalačního anestetika?',
        options: [
            'Alveolární koncentrace anestetika při 1 atmosféře, která zabrání motorické reakci na standardní chirurgický řez u 50 % pacientů',
            'Koncentrace, při které 100 % pacientů ztratí vědomí a reflexy',
            'Minimální koncentrace v krvi způsobující izoelektrické EEG',
            'Procento anestetika v odpařovači nutné k zahájení úvodu do anestezie'
        ],
        correctIndex: 0,
        rationale: '1 MAC je definován jako ustálená alveolární koncentrace inhalačního plynu za normálního tlaku, při níž 50 % jedinců nereaguje účelným pohybem na standardní bolestivý podnět (kožní incizi). MAC pro Sevofluran u dospělého je cca 2,0 %, pro Isofluran 1,15 %, pro Desfluran cca 6,0 %.',
        clinicalSource: 'Eger EI 2nd. MAC: Concepts and developments. Anesthesiology'
    },
    {
        id: 'aim_q47',
        category: 'Krizové stavy na sále & Toxikologie',
        difficulty: 'Pokročilá',
        question: 'Při vysoké spinální blokádě (High/Total Spinal Anesthesia) dochází k blokádě sympatických vláken T1-T4 (kardioakcelerační vlákna). Jaký je typický klinický obraz?',
        options: [
            'Těžká hypotenze doprovázená paradoxní hlubokou bradykardií a respirační tísní / zástavou',
            'Těžká hypertenze s extrémní tachykardií',
            'Pouze izolovaná ztráta hybnosti prstů bez vlivu na oběh',
            'Hyperventilace s bronchospazmem a hypertermií'
        ],
        correctIndex: 0,
        rationale: 'Vysoká spinální blokáda vyřadí sympatický tonus cév (vazodilatace a venózní pooling) a navíc zablokuje vlákna T1-T4 zásobující srdce -> dochází k těžké hypotenzi s neschopností kompenzatorní tachykardie, naopak se rozvíjí těžká bradykardie (často asystolie). Nutná je okamžitá elevace nohou, tekutiny, efedrin/adrenalin a zajištění dýchacích cest.',
        clinicalSource: 'Chestnut\'s Obstetric Anesthesia / Regional Anesthesia Complications'
    },
    {
        id: 'aim_q48',
        category: 'Kardioanestezie & ECMO',
        difficulty: 'Pokročilá',
        question: 'Který krevní derivát / koncentrát má nejvyšší koncentraci fibrinogenu a je indikován při jeho kritickém nedostatku, pokud není dostupný lyofilizovaný koncentrát lidského fibrinogenu?',
        options: [
            'Kryoprecipitát',
            'Čerstvě zmražená plazma (FFP)',
            'Erytrocytární masa (EM)',
            'Trombocytární koncentrát z aferézy'
        ],
        correctIndex: 0,
        rationale: 'Kryoprecipitát obsahuje cca 15 g/l fibrinogenu (asi 10x vyšší koncentrace než běžná plazma), dále faktor VIII, von Willebrandův faktor a faktor XIII. FFP obsahuje pouze cca 2 g/l fibrinogenu, takže pro korekci hypofibrinogenémie by bylo nutné podat obrovské objemy s rizikem oběhového přetížení (TACO).',
        clinicalSource: 'British Journal of Anaesthesia / Transfusion Guidelines'
    },
    {
        id: 'aim_q49',
        category: 'Dýchací cesty & Ventilace',
        difficulty: 'Pokročilá',
        question: 'Při intubaci pacienta s plným žaludkem metodou rychlého úvodu do anestezie (RSI - Rapid Sequence Induction) se tradičně provádí Sellickův manévr. Na kterou anatomickou strukturu se vyvíjí tlak?',
        options: [
            'Na prstencovou chrupavku (cartilago cricoidea) směrem dozadu proti tělům krčních obratlů',
            'Na štítnou chrupavku (cartilago thyroidea) směrem nahoru a doprava',
            'Na jazylku (os hyoideum)',
            'Přímo na sternální jamku'
        ],
        correctIndex: 0,
        rationale: 'Sellickův manévr spočívá v aplikaci tlaku na prstencovou chrupavku (jediný kompletní chrupavčitý prstenec dýchacích cest), čímž se teoreticky stlačí jícen proti obratli C6 a zabrání pasivní regurgitaci žaludečního obsahu do faryngu.',
        clinicalSource: 'Sellick BA. Cricoid pressure to control regurgitation. The Lancet'
    },
    {
        id: 'aim_q50',
        category: 'Neurointenzivní péče & Vnitřní prostředí',
        difficulty: 'Expert',
        question: 'Jak se vypočítá aniontová mezera (Anion Gap) v séru a která z uvedených příčin způsobuje metabolickou acidózu s VYSOKOU aniontovou mezerou (HAGMA)?',
        options: [
            'AG = [Na+] - ([Cl-] + [HCO3-]); Příčina: Diabetická ketoacidóza nebo laktátová acidóza',
            'AG = [Na+] + [Cl-] - [HCO3-]; Příčina: Průjem se ztrátou bikarbonátu',
            'AG = [K+] - [Na+]; Příčina: Renální tubulární acidóza',
            'AG = [HCO3-] - [Cl-]; Příčina: Infuze velkého objemu 0,9% NaCl'
        ],
        correctIndex: 0,
        rationale: 'Anion Gap = [Na+] - ([Cl-] + [HCO3-]), normální hodnota je 8-12 mmol/l. HAGMA vzniká kumulací neměřených aniontů: Laktát, Ketolátky (DKA, hladovění), Toxiny (Metanol, Etylenglykol, Salicyláty) a Urémie (zkratka GOLD MARK / MUDPILES). Průjmy a infuze NaCl způsobují acidózu s NORMÁLNÍ aniontovou mezerou (NAGMA).',
        clinicalSource: 'Rose & Post: Clinical Physiology of Acid-Base and Electrolyte Disorders'
    }
];

/**
 * Randomizes the 4 answer choices (A, B, C, D) and recalculates the correctIndex.
 */
export function shuffleQuestionOptions(question: MedicalQuestion): MedicalQuestion {
    const originalCorrectOption = question.options[question.correctIndex];

    // Fisher-Yates shuffle on copy of options
    const optionsWithMeta = question.options.map((opt, idx) => ({
        text: opt,
        isCorrect: idx === question.correctIndex
    }));

    for (let i = optionsWithMeta.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = optionsWithMeta[i];
        optionsWithMeta[i] = optionsWithMeta[j];
        optionsWithMeta[j] = temp;
    }

    const shuffledOptions = optionsWithMeta.map((o) => o.text) as [string, string, string, string];
    const newCorrectIndex = optionsWithMeta.findIndex((o) => o.isCorrect);

    return {
        ...question,
        options: shuffledOptions,
        correctIndex: newCorrectIndex >= 0 ? newCorrectIndex : 0
    };
}
