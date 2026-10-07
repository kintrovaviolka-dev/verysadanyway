// farmakologie/cases_data.js
// 10 prémiových klinických kazuistik z farmakologie se zaměřením na lékové interakce, toxicitu, antidota a klinické rozhodování.

const PHARMACOLOGY_CASES = [
  {
    id: "farma-case-01",
    title: "Intoxikace digoxinem při hypokalémii vyvolané diuretiky",
    category: "Kardiovaskulární farmakologie",
    difficulty: "Pokročilá",
    scenario: "74letá pacientka léčená digoxinem pro permanentní fibrilaci síní a furosemidem pro chronické srdeční selhání přichází pro týden trvající nechutenství, zvracení, žlutozelené vidění (xantopsie) a palpitace. Na EKG je zachycena komorová bigeminie a 'misko-vité' deprese ST segmentu. Laboratorně: sérový draslík 2,8 mmol/l, kreatinin 135 µmol/l. Jaký je molekulární mechanismus této toxicity a jaký je okamžitý léčebný postup?",
    solution: "1. Mechanismus: Furosemid způsobil hypokalémii. Ionty K+ a digoxin kompetují o stejné vazebné místo na vnějším povrchu membránové Na+/K+-ATPázy. Při hypokalémii dochází k masivnímu navázání digoxinu na enzym i při normální plazmatické hladině glykosidu, což vede k intracelulárnímu hromadění Ca2+ a vzniku pozdních následných depolarizací (DADs -> komorové arytmie).\n2. Léčba: Okamžitě vysadit digoxin i furosemid. Zahájit pomalou i.v. substituci kalia (cílit na 4,5–5,0 mmol/l) a magnézia. Při život ohrožujících arytmiích nebo těžké hyperkalémii/předávkování podat specifické antidotum – Fab fragmenty protilátek proti digoxinu (DigiFab). Jako antiarytmikum volby lze použít fenytoin nebo lidokain (neovlivňují AV vedení negativně).",
    keyTakeaway: "Hypokalémie dramaticky potencuje vazbu digoxinu na Na+/K+-ATPázu. U pacientů na kličkových diureticích je nutná pravidelná monitorace iontogramu nebo kombinace se šetřiči draslíku (MRA).",
    pearl: "K+ a digoxin soutěží o stejné vazebné místo na Na+/K+-ATPáze. Při hypokalémii stoupá toxicita digoxinu i při jeho 'normální' sérové koncentraci.",
    tags: ["Kazuistika", "Kardiologie", "Toxikologie", "Digoxin", "Interakce"]
  },
  {
    id: "farma-case-02",
    title: "Serotoninový syndrom při kombinaci SSRI a analgetika",
    category: "Neuropsychofarmakologie",
    difficulty: "Pokročilá",
    scenario: "32letá žena léčená sertralinem (100 mg/den) pro depresi navštívila pohotovost pro akutní lumboischialgii. Byl jí předepsán tramadol (100 mg 3x denně). O 12 hodin později je přivezena rodinou pro výrazný neklid, zmatenost, třes a profúzní pocení. Při vyšetření: TK 165/95 mmHg, TF 122/min, teplota 39,1 °C, mydriáza, hyperaktivní střevní zvuky, spontánní i indukovatelný klonus dolních končetin a hyperreflexie. Jaká je diagnóza a terapie?",
    solution: "1. Diagnóza: Serotoninový syndrom (splněna Hunterova kritéria – klonus + hypertermie + agitovanost/diaforéza). Vznikl farmakodynamickou interakcí: sertralin (inhibitor zpětného vychytávání 5-HT) + tramadol (slabý inhibitor zpětného vychytávání 5-HT i NA se stimulací uvolňování serotoninu).\n2. Terapie: Okamžité vysazení obou serotoninergních léčiv. Podpora vitálních funkcí, agresivní fyzikální chlazení a i.v. hydratace. Sedace benzodiazepiny (např. diazepam i.v.) ke ztlumení svalové rigidity a třesu. U těžkých a refrakterních stavů specifický 5-HT2A antagonista Cyproheptadin (úvodní dávka 12 mg p.o./sondou).",
    keyTakeaway: "Kombinace SSRI/SNRI s tramadolem, triptany, linezolidem, třezalkou nebo IMAO nese vysoké riziko život ohrožujícího serotoninového syndromu. Klíčovým rozlišovacím znakem od NMS je přítomnost klonu a hyperreflexie.",
    pearl: "Hunterova kritéria pro serotoninový syndrom: spontánní klonus, indukovatelný klonus s agitací nebo diaforézou, oční klonus, nebo tremor + hyperreflexie.",
    tags: ["Kazuistika", "Psychiatrie", "Serotonin", "Interakce", "Antidotum"]
  },
  {
    id: "farma-case-03",
    title: "Toxické poškození jater paracetamolem a časná intervence",
    category: "Toxikologie & Analgetika",
    difficulty: "Střední",
    scenario: "19letá dívka požila v suicidálním úmyslu před 6 hodinami cca 30 tablet paracetamolu (15 g). Nyní pociťuje pouze lehkou nauseu, jinak je zcela asymptomatická, jaterní testy i koagulace jsou zatím v normě. Plazmatická hladina paracetamolu odebraná v 6. hodině je 180 mg/l (nad léčebnou křivkou Rumack-Matthewova nomogramu). Jaký je mechanismus toxicity a proč je nutné zahájit terapii ihned, i když je pacientka asymptomatická?",
    solution: "1. Mechanismus: Při terapeutické dávce se 90 % paracetamolu konjuguje na glukuronidy a sulfáty. Cca 5–10 % je metabolizováno enzymy CYP2E1 na vysoce reaktivní a cytotoxický metabolit NAPQI (N-acetyl-p-benzochinonimin), který je okamžitě detoxikován glutathionem. Při předávkování se konjugační dráhy i zásoby glutathionu v hepatocytech vyčerpají (<30 % normy). Volný NAPQI se kovalentně váže na hepatocelulární proteiny a způsobuje centrilobulární jaterní nekrózu, která se laboratorně i klinicky manifestuje až za 24–48 hodin.\n2. Terapie: Okamžité podání N-acetylcysteinu (NAC) i.v. (iniciální bolus 150 mg/kg během 60 min, následně kontinuální infuze). NAC slouží jako prekurzor pro syntézu glutathionu a přímo inaktivuje NAPQI. Zahájení do 8 hodin od požití nabízí téměř 100% hepatoprotekci.",
    keyTakeaway: "Bezprostřední klinická pohoda po požití paracetamolu je zrádná; jaterní selhání nastupuje se zpožděním 48–72 hodin. N-acetylcystein je nejúčinnější při podání do 8 hodin.",
    pearl: "N-acetylcystein dodává sulfhydrylové (-SH) skupiny pro regeneraci jaterního glutathionu a přímo konjuguje toxický elektrofilní metabolit NAPQI.",
    tags: ["Kazuistika", "Hepatologie", "Toxikologie", "Paracetamol", "Antidotum"]
  },
  {
    id: "farma-case-04",
    title: "Krvácivá komplikace warfarinu po nasazení makrolidového antibiotika",
    category: "Antikoagulancia & CYP interakce",
    difficulty: "Pokročilá",
    scenario: "68letý muž s mechanickou aortální chlopní dlouhodobě stabilně užívá warfarin (INR stabilně 2,5–3,0). Pro komunitní pneumonii mu praktický lékař předepsal klarithromycin 500 mg 2x denně. Pátý den léčby se u pacienta objeví masivní epistaxe, hematurie a mnohočetné hematomy na trupu. Laboratorně: INR > 9,0, hemoglobin klesl ze 145 na 102 g/l. Jaká je podstata interakce a jak postupovat u pacienta s mechanickou chlopní?",
    solution: "1. Podstata interakce: Warfarin je racemická směs (S- a R-enantiomer). Silnější S-warfarin je metabolizován převážně enzymem CYP2C9, R-warfarin přes CYP3A4 a CYP1A2. Klarithromycin je silný inhibitor CYP3A4 a střední inhibitor CYP2C9, navíc potlačuje střevní mikroflóru produkující vitamin K2. Došlo k masivnímu snížení clearance warfarinu a kumulaci léčiva.\n2. Postup u mechanické chlopně: Okamžitě vysadit warfarin a klarithromycin. Vzhledem k závažnému krvácení podat koncentrát protrombinového komplexu (PCC – Beriplex/Octaplex, obsahuje faktory II, VII, IX, X), který zastaví krvácení okamžitě bez objemového přetížení. Podat nízkou dávku vitaminu K1 (1–2 mg p.o. nebo pomalu i.v.), ale vyvarovat se vysokých dávek (např. 10 mg), které by zablokovaly warfarinový účinek na týdny a ohrozily pacienta trombózou mechanické chlopně.",
    keyTakeaway: "Makrolidy (klarithromycin, erythromycin), azolová antimykotika (flukonazol, vorikonazol) a amiodaron dramaticky zvyšují hladinu a účinek warfarinu inhibicí CYP enzymů.",
    pearl: "U pacientů s mechanickou chlopní při předávkování warfarinem preferujeme PCC a pouze velmi nízkou dávku vitaminu K (1–2 mg), abychom nezpůsobili refrakterní hyperkoagulační stav.",
    tags: ["Kazuistika", "Antikoagulancia", "Interakce", "CYP450", "PCC"]
  },
  {
    id: "farma-case-05",
    title: "Intoxikace beta-blokátory a protokol high-dose inzulínu",
    category: "Toxikologie & Kardiologie",
    difficulty: "Expert",
    scenario: "55letý muž užil v suicidálním úmyslu 20 tablet metoprololu retard (celkem 2000 mg). Přivezen na urgentní příjem v těžkém kardiogenním šoku: TK 65/35 mmHg, TF 32/min (sinusová bradykardie s AV blokem I. stupně), studená akra, mírná hypoglykémie (glykémie 3,2 mmol/l). Tekutinová resuscitace a podání atropinu 1 mg i.v. byly bez jakéhokoliv efektu. Jaká specifická antidota a pokročilé postupy jsou indikovány?",
    solution: "1. Glukagon i.v.: Lék 1. volby (bolus 5–10 mg i.v. během 2–3 min, následovaný kontinuální infuzí 2–5 mg/h). Glukagon stimuluje specifické glukagonové receptory na myocytech nezávislé na beta-receptorech, aktivuje adenylátcyklázu a zvyšuje intracelulární cAMP -> pozitivně inotropní a chronotropní efekt.\n2. High-Dose Insulin Euglycemic Therapy (HIET): Podání bolusu inzulínu 1 IU/kg i.v. + infuze 1–10 IU/kg/h spolu s 10–20% glukózou (k udržení euglykémie 6–11 mmol/l) a kalia. V šoku myokard přechází ze spalování mastných kyselin na glukózu; vysoké dávky inzulínu dramaticky zlepšují utilizaci sacharidů myokardem a působí jako silné inotropikum.\n3. Lipidová emulze (Intralipid 20%): Lze zvážit zejména u lipofilních beta-blokátorů (např. propranolol, metoprolol) k 'lipid sink' efektu.",
    keyTakeaway: "Při předávkování beta-blokátory je atropin často neúčinný. Klíčem k přežití je časné podání glukagonu a zahájení high-dose inzulínového protokolu (HIET).",
    pearl: "Glukagon obchází zablokované beta-adrenergní receptory přímou aktivací adenylátcyklázy přes vlastní receptor, čímž zvyšuje intracelulární cAMP.",
    tags: ["Kazuistika", "Toxikologie", "Beta-blokátory", "Antidotum", "HIET"]
  },
  {
    id: "farma-case-06",
    title: "Rhabdomyolýza po kombinaci statinu se silným inhibitorem CYP3A4",
    category: "Lipidologie & CYP interakce",
    difficulty: "Pokročilá",
    scenario: "61letý pacient po infarktu myokardu dlouhodobě užívá simvastatin v maximální dávce 40 mg večer. Pro atypickou pneumonii byl praktickým lékařem zaléčen klarithromycinem. Po 4 dnech přichází pro kruté difuzní bolesti a slabost stehen a lýtek, neschopnost chůze a nápadně tmavou moč barvy černého čaje. V laboratoři: kreatinkináza (CK) 48 000 IU/l (norma < 3,2), myoglobin v séru 6 500 µg/l, kreatinin 280 µmol/l (baseline 85), v moči chemicky krev +++ bez nálezu erytrocytů v sedimentu. Jaká je diagnóza a léčba?",
    solution: "1. Diagnóza: Akutní rhabdomyolýza s myoglobinurickým akutním renálním selháním (pigmentová nefropatie) vyvolaná lékovou interakcí. Simvastatin je proléčivo s vysokým first-pass metabolismem přes CYP3A4 a nízkou biologickou dostupností (5 %). Klarithromycin inhiboval CYP3A4, což způsobilo desetinásobné zvýšení plazmatické expozice aktivní kyseliny simvastatinové a přímou toxicitu na mitochondrie kosterního svalu.\n2. Léčba: Okamžité vysazení simvastatinu i klarithromycinu. Masivní intravenózní hydratace krystaloidy (cílit na diurézu 200–300 ml/h k vyplavení myoglobinu z renálních tubulů). Alkalizace moči (bikarbonát sodný) k prevenci precipitace Tamm-Horsfallova proteinu s myoglobinem v kyselém prostředí tubulů (cílové pH moči > 6,5). Monitorace a korekce hyperkalémie.",
    keyTakeaway: "Simvastatin a lovastatin jsou extrémně závislé na CYP3A4. Při nutnosti léčby inhibitory CYP3A4 (makrolidy, azoly, diltiazem) se musí statin přechodně vysadit, nebo zaměnit za statin nezávislý na CYP3A4 (rosuvastatin, pravastatin).",
    pearl: "Kyselina myoglobinová precipituje v distálním tubulu především v kyselém prostředí (pH < 5,6) a tvoří toxické ferrihemátové válce; alkalizace moči bikarbonátem tomuto procesu brání.",
    tags: ["Kazuistika", "Lipidologie", "Interakce", "Statiny", "Rhabdomyolýza"]
  },
  {
    id: "farma-case-07",
    title: "Metforminová laktátová acidóza (MALA) u dehydratovaného diabetika",
    category: "Diabetologie & Metabolismus",
    difficulty: "Expert",
    scenario: "72letá diabetička léčená metforminem (1000 mg 2x denně) prodělala dvoudenní febrilní gastroenteritidu s profúzními průjmy a zvracením. Rodina ji přiváží somnolentní, s hlubokým Kussmaulovým dýcháním. Při vyšetření: TK 85/50 mmHg, TF 105/min, suché sliznice. ABR z arteriální krve: pH 6,95, pCO2 2,1 kPa, HCO3- 4,2 mmol/l, Base Excess -26 mmol/l, laktát 16,5 mmol/l (norma < 2,0), anion gap 32 mmol/l. Glykémie 8,5 mmol/l, urea 28 mmol/l, kreatinin 410 µmol/l (výchozí 90). Jaký je patofyziologický mechanismus MALA a jaká je kauzální léčba?",
    solution: "1. Mechanismus: Metformin je vylučován ledvinami v nezměněné formě tubulární sekrecí (OCT2 transportéry). Těžká dehydratace vedla k prerenálnímu selhání ledvin a masivní kumulaci metforminu v organismu. Metformin ve vysokých koncentracích inhibuje mitochondriální komplex I dýchacího řetězce a jaterní pyruvátkarboxylázu. To zastaví glukoneogenezi z laktátu a pyruvátu v játrech a přepne buněčný metabolismus na anaerobní glykolýzu -> masivní produkce a hromadění kyseliny mléčné s těžkou laktátovou acidózou s vysokým anion gapem.\n2. Kauzální léčba: Okamžité zahájení intermitentní nebo kontinuální hemodialýzy (HD/CRRT). Hemodialýza má dvojí klíčový přínos: 1. Rychle a efektivně eliminuje metformin z krevního oběhu (metformin má malou molekulu, neváže se na bílkoviny plazmy); 2. Koriguje těžkou acidózu a doplňuje hydrogenuhličitany bez rizika objemového přetížení a hypernatrémie.",
    keyTakeaway: "Metformin se musí přechodně vysadit při jakémkoliv akutním stavu spojeném s dehydratací, sepsí, šokem nebo před podáním jodové kontrastní látky.",
    pearl: "Metformin inhibuje mitochondriální komplex I dýchacího řetězce; při renální kumulaci zablokuje aerobní respiraci a přeměnu laktátu na glukózu v játrech.",
    tags: ["Kazuistika", "Diabetologie", "Toxicita", "Metformin", "Dialýza"]
  },
  {
    id: "farma-case-08",
    title: "Disulfiramová (antabusová) reakce po metronidazolu a alkoholu",
    category: "Antiinfektiva & Metabolické interakce",
    difficulty: "Střední",
    scenario: "26letá žena užívá perorální metronidazol (500 mg po 8 hodinách) pro trichomoniázu. Během oslavy narozenin vypila dvě sklenky bílého vína. Během 15 minut se u ní rozvinulo intenzivní zarudnutí obličeje a dekoltu (flushing), pulzující bolest hlavy, profúzní zvracení, palpitace, pocit dušnosti a tachykardie 130/min při TK 90/55 mmHg. Vyděšená vyhledala pohotovost s podezřením na těžkou anafylaktickou reakci. Jaká je skutečná podstata této reakce?",
    solution: "1. Podstata: Jde o disulfiramovou (antabusovou) reakci. Alkohol (ethanol) je v těle metabolizován alkoholdehydrogenázou (ADH) na toxický acetaldehyd, který je následně enzymem acetaldehyddehydrogenázou (ALDH) přeměněn na neškodný acetát.\n2. Mechanismus: Metronidazol (podobně jako disulfiram, některá cefalosporinová ATB s N-methylthiotetrazolovým řetězcem jako cefotetan či cefamandol, nebo griseofulvin) reverzibilně inhibuje acetaldehyddehydrogenázu (ALDH). Po požití alkoholu dochází k prudkému a masivnímu vzestupu toxického acetaldehydu v krvi (5–10x vyšší hladina), což vede k vazodilataci, hypotenzi, uvolnění histaminu, tachykardii a zvracení.\n3. Terapie: Symptomatická léčba – uložení do polohy na zádech, i.v. krystaloidy k doplnění cirkulujícího objemu, antiemetika (ondansetron), event. antihistaminika a anxiolytika. Reakce odezní po zmetabolizování ethanolu.",
    keyTakeaway: "Při léčbě metronidazolem a minimálně 48 hodin po jejím skončení je striktně zakázána konzumace jakéhokoliv alkoholu i léků obsahujících ethanol.",
    pearl: "Blokáda acetaldehyddehydrogenázy způsobí akumulaci acetaldehydu, který je přímým spouštěčem flushingu, palpitací, zvracení a hypotenze.",
    tags: ["Kazuistika", "Antibiotika", "Interakce", "Metronidazol", "Alkohol"]
  },
  {
    id: "farma-case-09",
    title: "Opioidní intoxikace a fenomén renarkotizace po naloxonu",
    category: "Toxikologie & Analgetika",
    difficulty: "Pokročilá",
    scenario: "28letý muž je nalezen na toaletě v bezvědomí. RZP zjišťuje: GCS 3, cyanóza, dechová frekvence 4 dechy za minutu, chrčivé dýchání, zornice špendlíkovité (mystická mióza 1 mm, fotoreakce minimální), TK 90/50 mmHg. Lékař RZP aplikoval naloxon 0,4 mg i.v. Během 90 sekund pacient procitá k plnému vědomí, je plně orientován a odmítá transport do nemocnice s tím, že se cítí naprosto zdráv. Proč lékař NESMÍ pacienta ponechat na místě bez hospitalizace?",
    solution: "1. Fenomén renarkotizace: Naloxon je čistý kompetitivní antagonista na všech typech opioidních receptorů (především µ-receptorech). Má však velmi krátký biologický poločas eliminace ($T_{1/2} \\approx 30–60\\text{ minut}$), zatímco většina zneužívaných opioidů (např. heroin, morfin, oxykodon, a zejména syntetické opioidy jako metadon či fentanyl s depotním efektem) má poločas eliminace 3–24 hodin.\n2. Důsledek: Po odeznění účinku naloxonu (cca za 45–60 minut) se molekuly opioidu, které zůstaly v organismu, znovu naváží na uvolněné µ-opioidní receptory. U pacienta dojde k opětovnému rozvoji hlubokého bezvědomí, zástavě dechu a asfyxii (renarkotizace).\n3. Správný postup: Pacient musí být observován na monitorovaném lůžku minimálně 4–6 hodin (u dlouhodobě působících opioidů jako metadon 24 hodin) s připraveností podat opakované dávky naloxonu nebo zahájit kontinuální infuzi.",
    keyTakeaway: "Poločas eliminace naloxonu (30–60 min) je výrazně kratší než poločas většiny opioidů. Hrozí fatální renarkotizace po odeznění antidota.",
    pearl: "Klasická triáda intoxikace opioidy: mióza (špendlíkovité zornice), deprese dechu (bradypnoe/apnoe) a bezvědomí. Rychlé probuzení po naloxonu je zároveň diagnostickým testem.",
    tags: ["Kazuistika", "Opioidy", "Toxikologie", "Naloxon", "Renarkotizace"]
  },
  {
    id: "farma-case-10",
    title: "Předávkování tricyklickými antidepresivy (TCA) a záchranná role bikarbonátu",
    category: "Psychofarmakologie & Arytmologie",
    difficulty: "Expert",
    scenario: "48letá žena byla nalezena v bezvědomí s prázdným platem od amitriptylinu (požila cca 2500 mg). Na příjmu: GCS 5, suchá horká kůže, široké nereagující zornice (anticholinergní toxidrom), TK 75/40 mmHg. Na EKG je zachycena tachykardie s bizarním širokým QRS komplexem (šířka QRS 165 ms) a dominantní R vlnou ve svodu aVR (výška R > 3 mm). Během natáčení EKG u pacientky dochází ke krátkému běhu komorové tachykardie. Jaký je mechanismus kardiotoxicity TCA a proč je infuze 8,4% hydrogenuhličitanu sodného (NaHCO3) lékem 1. volby?",
    solution: "1. Mechanismus kardiotoxicity TCA: Amitriptylin a další TCA mají silný chinidinový účinek (blokáda rychlých napěťově řízených sodíkových kanálů Nav1.5 v myokardu, fáze 0 akčního potenciálu). To zpomaluje vedení vzruchu komorami, což se projeví rozšířením QRS (>100 ms zvyšuje riziko křečí, >160 ms riziko maligních komorových arytmií), prodloužením PR a terminálním pravostranným zpožděním (R ve svodu aVR > 3 mm).\n2. Účinek bikarbonátu sodného (NaHCO3): Bikarbonát působí dvojím synergickým mechanismem:\n   a) **Zvýšení extracelulární koncentrace sodíku (Na+)**: Masivní příval Na+ iontů překonává kompetitivní blokádu sodíkových kanálů koncentračním gradientem.\n   b) **Alkalizace séra (cílové pH 7,45–7,55)**: Zvýšení pH převádí molekuly TCA z ionizované formy do neionizované (lipofilní), která má výrazně nižší afinitu k vazebnému místu na Nav1.5 sodíkovém kanálu, což vede k disociaci léčiva z receptoru.\n3. Kontraindikace: Antiarytmika třídy IA (chinidin, prokainamid), IC (propafenon, flekainid) i amiodaron jsou přísně kontraindikovány, protože blokádu Na/K kanálů ještě zhoršují!",
    keyTakeaway: "Rozšíření QRS nad 100 ms a vysoká R vlna v aVR u intoxikace TCA jsou absolutní indikací k okamžitému bolusovému podání hypertonického bikarbonátu sodného (1–2 mmol/kg i.v.).",
    pearl: "Bikarbonát sodný léčí kardiotoxicitu TCA dodáním sodíkového gradientu a alkalizací séra (pH 7,45–7,55), která snižuje vazbu TCA na rychlé sodíkové kanály.",
    tags: ["Kazuistika", "Tricyklická antidepresiva", "Kardiotoxicita", "Bikarbonát", "Toxikologie"]
  }
];

if (typeof window !== "undefined") window.PHARMACOLOGY_CASES = PHARMACOLOGY_CASES;
if (typeof module !== "undefined" && module.exports) module.exports = { PHARMACOLOGY_CASES };
