// data_pathology_zapocet.js - Automaticky vygenerovaná a vyřešená databáze otázek pro Patologii (3. ročník)
// Zdrojem je soubor kontrolni-otazky-vyplněné-a-zvýrazněné.md
const PATHOLOGY_ZAPOCET_QUESTIONS = [
  {
    "id": 1,
    "question": "Co neplatí o barvení hematoxylin-eosinem?",
    "options": [
      "Běžné barvení histologických řezů",
      "Amyloid se barví žlutozeleně",
      "Neutrální lipidy se nebarví",
      "Železo (hemosiderin) se barví rezavě hnědě",
      "Melanin má hnědou barvu"
    ],
    "correct": 1
  },
  {
    "id": 2,
    "question": "Který z následujících orgánů má kapiláry nepropustné pro velké molekuly krevní plasmy?",
    "options": [
      "Mozek",
      "Štítná žláza",
      "Plíce",
      "Játra",
      "Ledviny"
    ],
    "correct": 0
  },
  {
    "id": 3,
    "question": "Co není charakteristické pro maligní hypertenzi?",
    "options": [
      "Poškození, které vyvolává, vede k dalšímu zvýšení krevního tlaku",
      "Dochází k akumulaci plasmatických proteinů ve stěně cév",
      "Dochází k fibrinoidní nekróze stěny arteriol",
      "Dochází k proliferaci buněk hladkého svalu arteriol",
      "Ve stěnách cév jsou přítomny četné makrofágy obsahující lipidy"
    ],
    "correct": 4
  },
  {
    "id": 4,
    "question": "Která vaskulopatie postihuje horní cesty dýchací a ledviny?",
    "options": [
      "Polyarteritis nodosa",
      "Obrovskobuněčná arteritis Horton",
      "Wegenerova granulomatóza",
      "Buergerova choroba",
      "Diabetická angiopatie"
    ],
    "correct": 2
  },
  {
    "id": 5,
    "question": "Vakovitá aneurysma mozkových arterií",
    "options": [
      "Bývají běřně komplikována rupturou následovanou subdurálním krvácením",
      "Bývají způsobena defektem intimy",
      "Jsou přítomna přibližně u 1% populace",
      "Nejčastěji jsou aterosklerotického původu",
      "Jejich trombóza je nebezpečnou komplikací"
    ],
    "correct": 2
  },
  {
    "id": 6,
    "question": "25 let stará nekuřačka má problémy se zrakem a má nízký puls na a.radialis",
    "options": [
      "Mönckenbergova choroba",
      "Takayasuova choroba",
      "Syfilis",
      "Granulomatózní zánět temporální arterie",
      "Wegenerova granulomatóza"
    ],
    "correct": 1
  },
  {
    "id": 7,
    "question": "Co není charakteristické pro hypersenzitivní (leukoklastickou) vaskulitidu?",
    "options": [
      "Postihuje arterioly, kapiláry a venuly",
      "Může postihnout glomeruly",
      "Kůže se postižena vzácně",
      "Typická je fibrinoidní nekróza stěny cév",
      "Klinicky se projevuje jako purpura"
    ],
    "correct": 2
  },
  {
    "id": 8,
    "question": "Nejčastější komplikací trombózy dolních končetin je?",
    "options": [
      "Infarkt mozku",
      "Infarkt ledviny",
      "Infarkt myokardu",
      "Infarkt plic",
      "Infarkt střeva"
    ],
    "correct": 3
  },
  {
    "id": 9,
    "question": "Varikózní věny dolních končetin mají nejmenší souvislost s:",
    "options": [
      "Těhotenstvím",
      "Jaterní cirhózou",
      "Insuficiencí venózních chlopní",
      "Trombózou žil dolních končetin",
      "Familiární predispozicí"
    ],
    "correct": 1
  },
  {
    "id": 10,
    "question": "Které údaje týkající se glomangiomů jsou pravdivé?",
    "options": [
      "Glomangiomy vznikají ze specializovaných struktur spojených s regulací tlaku",
      "Typicky se nacházejí v blízkosti proximálních interfalangeálních kloubů",
      "Jsou většinou bolestivé",
      "Jsou většinou maligní",
      "Glomangiomy většinou obklopují nervy"
    ],
    "correct": 2
  },
  {
    "id": 11,
    "question": "Mezi maligní cévní tumary patří",
    "options": [
      "Kaposihi sarkom",
      "Hygroma coli cysticum",
      "Rhabdomyosarkom",
      "Glomangiom",
      "Juvenilní hemangiom"
    ],
    "correct": 0
  },
  {
    "id": 12,
    "question": "Marfanův syndrom provází",
    "options": [
      "Zvrásnělý endotel v oblasti aortálního oblouku",
      "Uzávěry drobných artétií,které mají za následek gangrény",
      "arachnodaktylie",
      "Flebitis",
      "Amyloid ve stěnách tepen"
    ],
    "correct": 2
  },
  {
    "id": 13,
    "question": "Co je nejméně charakteristické pro Takayasuovu chorobu?",
    "options": [
      "Vede k juvenilním gangrénám",
      "Nehmatný puls na horních končetinách",
      "Vede k ischemii mozkové tkáně",
      "Vyskytuje se u mladších žen",
      "Postihuje větve aurtálního oblouku"
    ],
    "correct": 0
  },
  {
    "id": 14,
    "question": "Trombangiitis obliterans",
    "options": [
      "Obturující trombóza s obliterací lumin arterií a vén",
      "Postihuje zejména mladší ženy",
      "= nemoc Budd-Chiariho",
      "= bezpulzová nemoc",
      "Mnohočetná drobná aneuryzmata na drobných cévách"
    ],
    "correct": 0
  },
  {
    "id": 15,
    "question": "Abnormální rozdíl krevního tlaku mezi horními a dolními končetinami není konzistentní s",
    "options": [
      "Disekujícím aneuryzmatem aorty",
      "Arteritidou Takayasu",
      "Lerichovým syndromem",
      "Postduktální koarktací aorty",
      "feochromocytomem"
    ],
    "correct": 4
  },
  {
    "id": 16,
    "question": "Juvenilní hemangiom",
    "options": [
      "Je tumor hraniční malignity",
      "Má tendenci ke spontánní regresi",
      "Je maligní cévní tumor častý u pacientů s AIDS",
      "= tzv. oheň",
      "Je typický pro Milroyovu chorobu"
    ],
    "correct": 1
  },
  {
    "id": 17,
    "question": "Jedno z tvrzení týkakajících se příčin vzniku ulcerací dolních končetin u diabetiků není spránvé",
    "options": [
      "Může být přítomna diabetická neuropatie, která interferuje s hojením",
      "Snížené vstřebávání tuků vede ke snížení hladiny vitamínu K",
      "Místní prokrvení může být zhoršené vzhledem k diabetické mikrovaskulární angiopatii",
      "Akcelerovaná arterioskleróza může snížit průtok tepnami dolníchkončetin",
      "U diabetiků jsou časté sekundární infekce"
    ],
    "correct": 1
  },
  {
    "id": 18,
    "question": "Dívka (10 let) ztrácí váhu, ač často a více jí. Stále si stěžuje na hlad. Nápadně často pije a močí. V posledních dnech je nápadně ospalá.Které vyšetření je nejvíce indikováno?",
    "options": [
      "Hladina tyroxinu (T4) v séru",
      "Hladina glukózy v séru",
      "Hladina sérového kortizovu",
      "Hladina kalcia v séru",
      "Clearence kreatininu"
    ],
    "correct": 1
  },
  {
    "id": 19,
    "question": "Lymfedém dolní končetiny a infekce",
    "options": [
      "Plasmodium vivax",
      "Entamoeba histolytica",
      "Strongyloides stercoralis",
      "Schistosoma mansoni",
      "Filaria bankrofti (dnes Wuchereria bancrofti)"
    ],
    "correct": 4
  },
  {
    "id": 20,
    "question": "Ložiska přechodného kožního edému se nazývají",
    "options": [
      "Kopřivka",
      "Anasarka",
      "Ascites",
      "Hydrops",
      "Hydrothorax"
    ],
    "correct": 0
  },
  {
    "id": 21,
    "question": "Anasarka je",
    "options": [
      "Morfologický obraz tkáně připomínající rybí maso",
      "Maligní mezenchymální nádor",
      "Výpotek v břišní dutině",
      "Hydroptické prosáknutí podkoží",
      "Lymfostatický edém obecně"
    ],
    "correct": 3
  },
  {
    "id": 22,
    "question": "Látku, která nejvíce přispívá k onkotickému tlaku plasmy, produkují:",
    "options": [
      "Nadledviny",
      "Endotel",
      "Ledviny",
      "Játra",
      "Plíce"
    ],
    "correct": 3
  },
  {
    "id": 23,
    "question": "Co nevede k tvorbě edému",
    "options": [
      "Zvýšená cévní permeabilita",
      "Zvýšený onkotický tlak plasmy",
      "Selhávání srdce",
      "Lymfatická obstrukce",
      "Venózní obstrukce"
    ],
    "correct": 1
  },
  {
    "id": 24,
    "question": "Co nevyvolává akutní edém plic?",
    "options": [
      "Transfúze velkého množství krve",
      "Urémie",
      "Pravostranné srdeční selhávání",
      "Aspirace žaludeční šťávy",
      "Vdechnutí horkého vzduchu při požáru"
    ],
    "correct": 2
  },
  {
    "id": 25,
    "question": "Které spojení není správné?",
    "options": [
      "Anasarka = generalizovaný podkožní edém",
      "Edém = abnormální nahromadění tekutiny",
      "Výpotek = hromadění tekutiny v tělní dutině",
      "Transsudád = tekutina s nízkou hustotou (≤ 1,02 g/l)",
      "Myxedém = generalizovaná edém při selhávání levin"
    ],
    "correct": 4
  },
  {
    "id": 26,
    "question": "1 gram které látky rozpuštěné v 1 litru destilované vody bude mít nejvyšší osmotický tlak?",
    "options": [
      "Albumin",
      "IgG",
      "Glukóza",
      "Urea",
      "Chlorid sodný"
    ],
    "correct": 4
  },
  {
    "id": 27,
    "question": "Co vyvolá edém primárním ovlivněním cévní permeability?",
    "options": [
      "Nefróza",
      "Cirhóza jater",
      "Anafylaktický šok",
      "Levostranné srdeční selhání",
      "Elefantiáza"
    ],
    "correct": 2
  },
  {
    "id": 28,
    "question": "Žena (30) přichází s chrapotem, zesíleným při infekci horních cest dýchacích. Laryngoskopie ukáže drobné papilární exrescence hlasových vazů. Jaká etiologie je nejpravděpodobnější?",
    "options": [
      "Autoimunitní",
      "Bakteriální",
      "Virová",
      "Plísňová",
      "Parazitární"
    ],
    "correct": 2
  },
  {
    "id": 29,
    "question": "Žena (25) měla těžký porod s krvácením vyžadujícím transfúzi.  Po porodu nebyla schopna kojit. 6 měsíců po porodu ještě nemá obnovený menstruační cyklus. Pravděpodobně má:",
    "options": [
      "Addisonovu chorobu",
      "Simmondsovu kachexii",
      "Její onemocnění má vztah k hypotenzi v průběhu porodu",
      "Prolaktin produkující adenom hypofýzy",
      "Waterhouse – Fridrichsenův syndrom"
    ],
    "correct": 2
  },
  {
    "id": 30,
    "question": "Muž (49) si stěžuje na bolesti hlavy a sekreci z prsů. Neurologicky prokázaný oboustranný výpadek v zorném poli.",
    "options": [
      "Pravděpodobně má Simmondsův syndrom.",
      "Se stavem je kompatibilní RTG nález cystického tumoru mozku",
      "Se stavem je kompatibilní RTG nález radiotransparentní expanze v oblasti selly",
      "Jedná se o enzymatický defekt konverze 17-hydroxyprogesteronu na 11-deoxykortisol",
      "Pravděpodobně má sekundární amenorheu."
    ],
    "correct": 2
  },
  {
    "id": 31,
    "question": "Graves-Basedowa choroba",
    "options": [
      "THS-RF ↑, TSH ↑, T4 ↑",
      "THS-RF ↓, TSH ↓, T4 ↑",
      "THS-RF ↑, TSH ↓, T4 ↓",
      "THS-RF ↑, TSH ↑, T4 ↓",
      "THS-RF ↓, TSH ↑, T4 ↑"
    ],
    "correct": 1
  },
  {
    "id": 32,
    "question": "Která autoim. choroba je charakterizována depozity imunokomplexů v kůži, plicích a ledvinách?",
    "options": [
      "Systémový lupus erythematosus",
      "Sjögrenův syndrom",
      "Systémová sklerodermie",
      "Reakce graft versus host",
      "Calcinosis cutis"
    ],
    "correct": 0
  },
  {
    "id": 33,
    "question": "Ke kterým buňkám má HIV afinitu?",
    "options": [
      "CD4+ T lymfocytům",
      "CD8+ T lymfocytům",
      "NK buňkám",
      "Dendritickým buňkám",
      "B lymfocytům"
    ],
    "correct": 0
  },
  {
    "id": 34,
    "question": "Který Ig má nejvyšší koncentraci v séru?",
    "options": [
      "IgA",
      "IgD",
      "IgE",
      "IgG",
      "IgM"
    ],
    "correct": 3
  },
  {
    "id": 35,
    "question": "Pacient s deficiencí T lymfocytů bude mít zvýšené riziko infkce níže uvedenými patogeny kromě:",
    "options": [
      "Mycobacterium tuberculosis",
      "Cytomegalovirus",
      "Pneumocystis carinii",
      "Staphylococcus aureus",
      "mykózy"
    ],
    "correct": 3
  },
  {
    "id": 36,
    "question": "Koagulační poruchy vyskytující se u chronických jaterních chorob typicky nezahrnují deficienci:",
    "options": [
      "Faktoru I (fibrinigen)",
      "Faktoru II (protrombin)",
      "Faktoru VII",
      "Faktroru VIII",
      "Trombocytů"
    ],
    "correct": 3
  },
  {
    "id": 37,
    "question": "Chronická aktivní virová hepatitida a",
    "options": [
      "Malloryho hyalin",
      "Převážně centrilobolární lokalizace zánětu",
      "Destrukce perifetie portobiliárních prostorů (limiting plate)",
      "Steatóza",
      "Periportální cholestáza"
    ],
    "correct": 2
  },
  {
    "id": 38,
    "question": "Sekundární biliární cirhóza nesouvisí s",
    "options": [
      "Malabsorpcí tuku",
      "Antimitochondriálními protilátkami",
      "Destruktivní nehnisavou cholangitidou",
      "Žlučovými jezírky",
      "Lymfocytárním infiltrátem v portobilích"
    ],
    "correct": 1
  },
  {
    "id": 39,
    "question": "Jaterní cirhóza, portální hypertenze, ascites, jícnové varixy, sklon ke krvácení a",
    "options": [
      "Edém plic",
      "Naevi aranei",
      "Varices crurum",
      "Hyperalbuminémie",
      "Urémie"
    ],
    "correct": 1
  },
  {
    "id": 40,
    "question": "Pacient s pokročilou cirhózou nebude mít",
    "options": [
      "Hypoalbuminémii",
      "Gynekomastii",
      "Trombocytózu",
      "Ascites",
      "Zvětšenou slezinu"
    ],
    "correct": 2
  },
  {
    "id": 41,
    "question": "Co z následujícího je nejméně charakteristické pro karcinom žlučníku",
    "options": [
      "Žloutenka",
      "Většinou se jedná o adenokarcinom",
      "Má špatnou prognózu",
      "Je zpravidla lokálně invazivní",
      "Je častější u žen"
    ],
    "correct": 0
  },
  {
    "id": 42,
    "question": "Co z následujícího není charakteristické pro játra chronických alkoholiků",
    "options": [
      "Riziko vývoje cirhózy 10%",
      "Riziko vzniku hepatocelulátního karcinomu je 10%",
      "Riziko vzniku hepatocelulárního karcinoum je 10% u těch, kteří mají cirhózu",
      "Cirhóza se vyvine nejčastěji po 10-15 letech pití",
      "Steatóza"
    ],
    "correct": 1
  },
  {
    "id": 43,
    "question": "Správná asociace je",
    "options": [
      "Porto-centrální cirhóza ≈ primární biliární cirhóza",
      "Porto-centrální fibróza  ≈ chronické srdeční selhání",
      "Porto-centrální cirhóza ≈ chronická cholestáza",
      "Centro-centrální cirhóza ≈ chronická aktivní hepatitida",
      "Porto-centrální cithóza ≈ alkohol"
    ],
    "correct": 4
  },
  {
    "id": 44,
    "question": "Nekróza hepatocytů u virové hepatitidy A",
    "options": [
      "Nebude žádná",
      "Bude způsobena cytotoxickými protilátkami",
      "Bude způsobena aktivací komplementu",
      "Bude způsobena NK buňkami",
      "Bude způsobena přímým cytotoxickým účinkem viru"
    ],
    "correct": 3
  },
  {
    "id": 45,
    "question": "Dívka (4) má časté infekce resp.traktu a zaostává růstem. Jaterní biopsie ukázala četné hepatocyty s okrouhlými cytopl. inkuzemi, PAS+ i po natrávení. Pravděpodobná dg. je:",
    "options": [
      "Wilsonova choroba",
      "α1-antitrypsin deficience",
      "Obrovskobuněčná dětská hepatitida",
      "Chronická perzistující virová hepatitida typu B",
      "Časně vzniikající primární biliární cirhóza"
    ],
    "correct": 1
  },
  {
    "id": 46,
    "question": "Pacient (27), po lehké hepatitidě biopsie. Zjištěny Kupferovy buňky s hnědým pigmentem. Pigment pravděpodobně obsahuje:",
    "options": [
      "Melanin, hemosiderin",
      "Hemosiderin, lipofuscin",
      "Lipofuscin, bilirubin, melanin",
      "Bilirubin, lipofuscin",
      "Thorotrast"
    ],
    "correct": 1
  },
  {
    "id": 47,
    "question": "Delta agens",
    "options": [
      "≈ Non A  non B hepatitida",
      "≈ fulminantní hepatitida",
      "≈ anikterická hepatitida",
      "Sexuální přenos je častý",
      "Nejčastější příčina posttransfúzní hepatitidy"
    ],
    "correct": 1
  },
  {
    "id": 48,
    "question": "Konstriktivní perikarditida",
    "options": [
      "≈ makronodulární cirhóza jater",
      "≈ portální lymfocytární infiltrát",
      "≈ proliferace žlučových vývodů",
      "≈ dilatace jaterních sinů",
      "≈ nekrózy na periferiích lobulů"
    ],
    "correct": 3
  },
  {
    "id": 49,
    "question": "Co způsobí spíš virus hepatitidy A než virus hepatitidy B?",
    "options": [
      "Žloutenku",
      "Fulminantní hepatitidu s jaterním selháním",
      "Chronickou agresivní hepatitidu",
      "Epidemii",
      "Jaterní cirhózu"
    ],
    "correct": 3
  },
  {
    "id": 50,
    "question": "Muž (60) je přiveden na ambulanci s deformací levého nohy v oblasti kyčle, stalo se při vstávání z křesla. RTG ukáže linie fraktury probíhající přes krček a přítomnost lytického ložiska v oblasti fraktury. RTG hrudníku – nepravidelné zastínění v horního laloku pravé plíce. Frakturu lze nejlépe popsat jako:",
    "options": [
      "Kominutivní",
      "Složenou",
      "Vkleslou",
      "Patologickou",
      "Lytickou"
    ],
    "correct": 3
  },
  {
    "id": 51,
    "question": "Pacient (60) léčený na DM a vysoký tlak přikulhá a stěžuje si na prudkou bolest v palci u pravé nohy. Metakarpofalangeání kloub je červený, oteklý a bolestivý. Ze synovie je aspirováno 0,5 ml lehce zkalené tekutiny a v ní několik dlouhých, štíhlých jehlicovitých polarizujících krystalů. Dg.?",
    "options": [
      "Reiterův syndrom",
      "Dna",
      "Pseudodna",
      "Bakteriální artritis",
      "Revmatoidní artritis"
    ],
    "correct": 1
  },
  {
    "id": 52,
    "question": "Žena (40), bolesti v hrudní stěně. RTG – solitární osteolytické ložisko. Biopsie – četné histiocyty, S-100 pozitivní, příměs mnohojaderných buněk, eosinofilů a lymfocytů. Žádné další orgány postiženy nejsou. Dg.?",
    "options": [
      "Plazmocytární myeloidní leukemie",
      "Hodgkinova choroba – nodulární skleróza",
      "m. Letterer-Siwe",
      "Eosinofilní granulom",
      "Metastéza velkobuněčného karcinomu plic"
    ],
    "correct": 3
  },
  {
    "id": 53,
    "question": "K příčinám aplastické anémie nepatří:",
    "options": [
      "Celotělové ozáření",
      "Infekční mononukleóza",
      "Krevní ztráta",
      "Chloramfenikol",
      "Karcinom metastazující do kosti"
    ],
    "correct": 2
  },
  {
    "id": 54,
    "question": "Které z následujících onemocnění nejčastěji způsobuje anémii z nedostatku železa?",
    "options": [
      "Jaterní cirhóza",
      "Peptický vřed",
      "Kardiomyopatie",
      "Pankreatitis",
      "Renální selhávání"
    ],
    "correct": 1
  },
  {
    "id": 55,
    "question": "Které spojení je správné?",
    "options": [
      "Sliznice ≈ trombóza",
      "Moč ≈ hematokrit",
      "Kostní dřeň ≈ hematomyelie",
      "Pleurální dutina ≈ hemascos",
      "Kůže ≈ purpura"
    ],
    "correct": 4
  },
  {
    "id": 56,
    "question": "Počet retikulocytů je ukazatelem:",
    "options": [
      "Zánětu",
      "Schopnosti kostní dřeně produkovat erytrocyty",
      "Variability velikosti erytrocytů",
      "Nedostatku kyseliny listové",
      "Leukemické varianty retikulárního sarkomu"
    ],
    "correct": 1
  },
  {
    "id": 57,
    "question": "Disseminovaná intravaskulární koagulopatie vzniká při",
    "options": [
      "Embolii plodové vody",
      "Jaterní cirhóze",
      "Diabetu",
      "Operacích a nádorech srdce",
      "Krvácení do CNS"
    ],
    "correct": 0
  },
  {
    "id": 58,
    "question": "Sférocytóza souvisí s",
    "options": [
      "Perniciózní anémií",
      "Hypochromní anémií",
      "Aplastickou anémií",
      "Kongenitální hemolytickou anémií",
      "Polycytémií"
    ],
    "correct": 3
  },
  {
    "id": 59,
    "question": "Která z následujících kožních lézí je považována za prekancerózu?",
    "options": [
      "Fibrózní histiocytom",
      "Lichen planus",
      "Psoriasis vulgaris",
      "Verruca seborhoica",
      "Solitární (aktinická) keratóza"
    ],
    "correct": 4
  },
  {
    "id": 60,
    "question": "Hyperplastická epidermis čepovitě vybíhá proti dermis – jedná se o:",
    "options": [
      "Akantózu",
      "Parakeratózu",
      "Hypergranulomatózu",
      "Papilomatózu",
      "Hyperkeratózu"
    ],
    "correct": 0
  },
  {
    "id": 61,
    "question": "Biopsie ze spodiny kožní ulcerace prokázala proliferaci drobných cév a fibroblastů s tvorbou jemných kolagenních vláken. To je typické pro:",
    "options": [
      "Bazaliom",
      "Bulózní pemphigoid",
      "Granulační tkáň",
      "Pepmphigus vulgaris",
      "Radiálná fázi růstu maligního melanomu"
    ],
    "correct": 2
  },
  {
    "id": 62,
    "question": "Psoriasis vulgaris charakterizuje",
    "options": [
      "Hemosideróza, fibróza koria, degenerace elastiky",
      "Parakeratóza, akantóza, vymizení stratum granulosum",
      "Akantolýza, exsudace",
      "Edém epidermis, zánětlivá celulizace",
      "Vaskulitida, akantóza, exsudace"
    ],
    "correct": 1
  },
  {
    "id": 63,
    "question": "Které z následujících spijení není správné?",
    "options": [
      "Ephelides ≈ tmavnou po ozáření sluncem",
      "Intradermální névus ≈ hnízda névových buněk bez souvislosti s epidermis",
      "Pemphigus vulgaris ≈ přechodná afekce postihující těhotné ženy",
      "Halo névus – pigmentovaný névus v regresi",
      "Maligní melanom ≈ většinou vzniká de novo"
    ],
    "correct": 2
  },
  {
    "id": 64,
    "question": "Plochá afekce nenarušující porch, průměr menší než 1cm. Jedná se o:",
    "options": [
      "Bulla",
      "Eroze",
      "Makula",
      "Papula",
      "Vezikula"
    ],
    "correct": 2
  },
  {
    "id": 65,
    "question": "Nefrotický syndrom je charakteristický pro",
    "options": [
      "Intersticiální nefritidu",
      "Membranózní glomerulonefritidu",
      "Pyelonefritidu",
      "Akutní glomerulonefritidu s tvorbou srpků",
      "Polycystózu ledvin"
    ],
    "correct": 1
  },
  {
    "id": 66,
    "question": "Edém u nefrotického syndromu souvisí s",
    "options": [
      "Selháváním levé komory srdeční",
      "Poruchou jaterní syntézy albuminu",
      "Ztrátou bílkovin močí",
      "Ztrátou sodíku, draslíku, dusíku a bikarbonátů močí",
      "Sniženou jaterní produkcí imunoglobinů"
    ],
    "correct": 2
  },
  {
    "id": 67,
    "question": "Loehleinova nefritida",
    "options": [
      "Je následek revmatické endokarditidy",
      "Jedná se o eozinofilní intersticiální nefritidu",
      "Je vyvolaná leptospirou",
      "Je doprovodné přechodné postižení ledvin u spalniček",
      "Doprovází endocarditis lenta"
    ],
    "correct": 4
  },
  {
    "id": 68,
    "question": "Nejčastější příčinou nefrotického syndromu u malých dětí je",
    "options": [
      "Diabetická nefróza",
      "Lipoidní nefróza",
      "Akutní glomerulonefritida",
      "Hypochloremická nefróza",
      "Hemoglobinurická nefróza"
    ],
    "correct": 1
  },
  {
    "id": 69,
    "question": "Která z následujících glomerulopatií je charakterizována subepiteliálními depozity s výběžky bazální membrány (spikes)?",
    "options": [
      "IgA nefropatie (Berger)",
      "Membranoproliferativní glomerulonefritida",
      "Membranózní glomerulopatie",
      "Postinfekční glomerulonefritida",
      "Goodpastureův syndrom"
    ],
    "correct": 2
  },
  {
    "id": 70,
    "question": "Diabetes mellitus se může v ledvinách projevit jako glomeruloskleróza Kimmelsteil-Wilsonova a",
    "options": [
      "Steatóza a střádání glykogenu v buňkách proximálních tubulů",
      "„drátěné kličky“ a postupná skleróza glomerulů",
      "Exsudace polymorfonukleárů, zmnožení buněk, fokální hyalinizace",
      "Goodpastureův syndrom",
      "Vznikem hepatorenálního syndromu"
    ],
    "correct": 0
  },
  {
    "id": 71,
    "question": "Pacient s leukémií prodělává léčbu chemoterapeutiky, počet maligních buněk v krvi výrazně klesl. Náhle vznikla ledvinná kolika, pacient posléze vymočil drobný kamének složený nejpíše z:",
    "options": [
      "Kalcium oxalátu",
      "Fosfátu",
      "Urátů",
      "Cystinu",
      "Bilirubinu"
    ],
    "correct": 2
  },
  {
    "id": 72,
    "question": "Muž (65), úraz spojený s rozdrcením LDK v oblasti stehna. 24 hodin po přijetí anurický, urea, kalium, kreatinin zvýšené, stav vyžaduje hemodialýzu. Dva dny poté končetina amputována. Za dva týdny nastává polyurie. Situace odpovídá:",
    "options": [
      "Bakteriálnímu zánětu distálních tubulů",
      "Nekróze glomerulů",
      "Dekompenzaci nefrosklerózy aterosklerotického původu",
      "Progresivnímu renálnímu selhávání vyžadujícímu transplantaci ledvin",
      "Postupné úprave stavu ledvin s dobrou prognózou"
    ],
    "correct": 4
  },
  {
    "id": 73,
    "question": "Pro Grawitzův karcinom ledvin není charakteristické:",
    "options": [
      "Než se objeví hematurie, může dosáhnout značné velikosti",
      "Je častější u dětí než u dospělých",
      "Skládá se často ze světlých buněk",
      "Krvácení do tumoru je časté",
      "Metastázuje často do kostí a plic"
    ],
    "correct": 1
  },
  {
    "id": 74,
    "question": "Který z následujících faktorů určuje prognózu karcinomu mammy nejvíce?",
    "options": [
      "Velikost primárního ložiska",
      "Přítomnost vzdálených metastáz",
      "Histologický typ tumoru",
      "Histologický grade tumoru",
      "Přítomnost či chybění estrogenových a progesteronových receptorů"
    ],
    "correct": 1
  },
  {
    "id": 75,
    "question": "Pro Pagetův karcinom prsní bradavky je typické",
    "options": [
      "Časné metastázování do CNS a kostí",
      "Invazivní růst",
      "Nápadně světlé velké nádorové buňky s hyperchromními jádry",
      "Papilární uspořádání",
      "Výrazná hlenotvorba"
    ],
    "correct": 2
  },
  {
    "id": 76,
    "question": "Žena (40) si všimla zatvrdliny v prsu. Fyzikální vyšetření – tuhý, 3cm velký útvar nepravidelného tvaru s vkleslinou přilehlé kůže. Biopsie – chronický zánět, nekrotická tuková tkáň, kalcifikace. Jaká je nejpravděpodobnější anamnestická asociace.",
    "options": [
      "Nullipara",
      "Estrogenní terapie",
      "Kojení",
      "Trauma",
      "Plicní tuberkulóza"
    ],
    "correct": 3
  },
  {
    "id": 77,
    "question": "Muž (70), anamnéza – horečka, noční pocení, bolest hlavy, cyanóza obličeje a krku, dilatované povrchové žíly krku a hrudníku. CT – špatně definovaná solidní hmota postihující přední a horní mediastinum. Fyzikální nález je nejpravděpodobněji způsoben:",
    "options": [
      "Paraneoplastickým syndromem",
      "Srdečním selháním",
      "Kompresí horní duté žíly",
      "Rupturou jícnu",
      "Plicní obstrukcí"
    ],
    "correct": 2
  },
  {
    "id": 78,
    "question": "Které tvrzení o dně neplatí?",
    "options": [
      "Je způsobena zvýšenou hladinou kyseliny močové",
      "Postižení trpí opakovanými atakami akutní artritidy",
      "Postiženo bývá zpravidla více kloubů",
      "Charakteristickou lézí jsou dnavé tofy",
      "Precipitované urátová krystaly porušují lyzosomální membrány"
    ],
    "correct": 2
  },
  {
    "id": 79,
    "question": "Použitá plena dítěte na novorozeneckém oddělení v koši na odpadky ztmavla. Na jakou chorobu zaujmete podezření?",
    "options": [
      "Zelený zákal",
      "Cystickou fibrózu",
      "Mukopolysacharidózu",
      "Fenylketonurii",
      "Alkaptonurii"
    ],
    "correct": 4
  },
  {
    "id": 80,
    "question": "Muž (45), abstinent, zemřel na jaterní cirhózu. Vždy vypadal hezky „opáleně“. Před smrtí si píchal insulín. Jeho bratr rovněž zemřel mladý. Jakou měl pravděpodobně chorobu?",
    "options": [
      "M. Niemann-Pick",
      "Fenylketonurii",
      "Wilsonovu chorobu",
      "Hemochromatózu",
      "Alkaptonurii"
    ],
    "correct": 3
  },
  {
    "id": 81,
    "question": "Porucha metabolizmu mědi je:",
    "options": [
      "Wilsonova choroba",
      "Thalasemia",
      "Pompeho choroba",
      "Hunterova choroba",
      "Ochronóza"
    ],
    "correct": 0
  },
  {
    "id": 82,
    "question": "Která z následujících látek se hromadí u Niemann-Pickovy choroby?",
    "options": [
      "Glykogen",
      "Glukocerebrosidy",
      "Sfingomyelin",
      "Gangliosidy",
      "Mukopolysacharidy"
    ],
    "correct": 2
  },
  {
    "id": 83,
    "question": "Dítě, které již bylo schopné samo sedět a natahovalo se po nabízených předmětech, nyní pouze leží na jedno místě a nejeví zájem o okolí. Ignoruje hlasité zvuky, kterých se dříve bálo. Oftalmologické vyšetření odhalilo neobvykle červenou makulu. Pravděpodobná dg.?",
    "options": [
      "Deficienci α1-anitrypsinu",
      "Fenylketonurii",
      "Tay-Sachsou nemoc",
      "Turnerův syndrom",
      "Wilsonovu chorobu"
    ],
    "correct": 2
  },
  {
    "id": 84,
    "question": "Koncentrace fenylalaninu v séru dítěte po narození byla normální. Ve dvou letech má fenylketonurii s ireverzibilním počkozením mozku. Situace je pravděpodobně příkladem:",
    "options": [
      "Falešně negativního výsledku testu",
      "Analytické chyby",
      "Měření nevhodné substance",
      "Špatné interpretace výsledku",
      "Testu provedeného v nevhodnou dobu"
    ],
    "correct": 4
  },
  {
    "id": 85,
    "question": "Mukoviscidóza",
    "options": [
      "Patří mezi tukové dystrofie",
      "Patří mezi albuminoidní dystrofie",
      "Je příčina myxedému",
      "Může vést k mekoniovému ileu",
      "Může vést k rozvoji jádrového ikteru (kernikterus)"
    ],
    "correct": 3
  },
  {
    "id": 86,
    "question": "Morbus Gierke",
    "options": [
      "Patří s m.Pompe mezi glykogenózy",
      "Je spojen s gargoylismem",
      "≈ charakteristické Mikuliczovy buňky",
      "Neboli tabes dorsalis",
      "Je forma generalizované plicní amyloidózy"
    ],
    "correct": 0
  },
  {
    "id": 87,
    "question": "Faktor, který nejméně přispívá ke vzniku amyloidózy, je:",
    "options": [
      "Chronický zánět",
      "Defektní nebo chybějící amyláza",
      "Dědičná dispozice",
      "Malignita plazmatických buněk",
      "Revmatiodní artritida"
    ],
    "correct": 1
  },
  {
    "id": 88,
    "question": "Co z následujícího neplatí o Tay-Sachcově chorobě?",
    "options": [
      "Je slepota s třešňově červenou makulou",
      "Postižený zpravidla umírá do dvou let věku",
      "Je těžká mentální retardace",
      "Je jaterní cirhóza",
      "Jedná se o vrozené metabolické onemocnění"
    ],
    "correct": 3
  },
  {
    "id": 89,
    "question": "Regrese a ztráte již dosažené úrovně neurologického vývoje je charakteristická pro",
    "options": [
      "Lipidózy",
      "Defekt α1-antitrypsinu",
      "Glykogenózy",
      "Ochronózy",
      "Studenty 3. ročníku LF"
    ],
    "correct": 0
  },
  {
    "id": 90,
    "question": "Depozita kalcia v mitochondriích jsou ukazatelem",
    "options": [
      "Abnormálního metabolizmi kalcia",
      "Hypertrofie",
      "Irreversibilního poškození buňky",
      "Normálního metabolizmu",
      "Dystrofické kalcifikace"
    ],
    "correct": 2
  },
  {
    "id": 91,
    "question": "U kterého stavu spojeného se smrtí buněk bude zevní tvar buněk zachován nejdéle?",
    "options": [
      "Absces",
      "Flegmonózní apendicitida",
      "Infarkt mozku",
      "Srdeční infarkt",
      "Tuberkulóza"
    ],
    "correct": 3
  },
  {
    "id": 92,
    "question": "Sekvestr",
    "options": [
      "Vznikne při resorpci nekrotické mozkové tkáně",
      "Je ložisko volně uložené nekrotické tkáně",
      "Je periodicita malarické horečky",
      "31. 12.",
      "Vzniká při miliární formě TBC"
    ],
    "correct": 1
  },
  {
    "id": 93,
    "question": "Zenkerova vosková nekróza je varianta",
    "options": [
      "Nekrózy kolikvační",
      "Nekrózy koagulační",
      "Suché gangrény",
      "Nekrózy prosté",
      "Nekrózy hemorhagické"
    ],
    "correct": 1
  },
  {
    "id": 94,
    "question": "Kaseifikační nekróza je varianta",
    "options": [
      "Vlhké gangrény",
      "Nekrózy kolikvační",
      "Nekrózy prosté",
      "Nekrózy koagulační",
      "Suchá gangrény"
    ],
    "correct": 3
  },
  {
    "id": 95,
    "question": "Prostá nekróza se typicky vyskytuje",
    "options": [
      "V kůži",
      "V játrech",
      "Ve štítné žláze",
      "V mozku",
      "V ledvinách"
    ],
    "correct": 0
  },
  {
    "id": 96,
    "question": "Zahnův infarkt",
    "options": [
      "Je zcela čerstvý infarkt myokardu",
      "Je jakýkoliv infarkt v játrech",
      "Je infarkt v játrech vzniklý uzávěrem a.hepatica",
      "Je jaterní infarkt vzniklý intrahepatálním uzávěrem větve v.portae",
      "Je infarkt sleziny"
    ],
    "correct": 3
  },
  {
    "id": 97,
    "question": "Reperfúzní poškození tkáně je zprostředkováno",
    "options": [
      "Toxickými kyslíkovými radikály",
      "TNF",
      "Amyloidovým proteinem",
      "Endotoxinem",
      "Apoptózou"
    ],
    "correct": 0
  },
  {
    "id": 98,
    "question": "Co z následujícího je nejspolehlivějším indikátorem buněčné smrti?",
    "options": [
      "Eosinofilie cytoplasmy",
      "Granularita cytoplasmy",
      "Karyolýza",
      "Zduření buňky",
      "Nahromadění lipofuscinu"
    ],
    "correct": 2
  },
  {
    "id": 99,
    "question": "Karyorrhexis odpovídá:",
    "options": [
      "Tmavému, zmenšenému jádru",
      "Jádru rozpadlému na několik částí",
      "Enzymaticky natrávené tukové buňce",
      "Buňce s velkým objemem mitochondrií",
      "Výměně iontů přes póry buněčné membrány"
    ],
    "correct": 1
  },
  {
    "id": 100,
    "question": "Který z následujících orgánů bývá postižen infaktem jen vzácně?",
    "options": [
      "Játra",
      "Mozek",
      "Ledvina",
      "Dolní končetina",
      "Srdce"
    ],
    "correct": 0
  },
  {
    "id": 101,
    "question": "Křídově bílá depozita v nekrotické tkáni způsobená zmýdelnatěním jsou spojena s :",
    "options": [
      "Apoptózou",
      "Kaseózní nekrózou",
      "Nekrózou tukové tkáně",
      "Likvefační nekrózou",
      "Zenkerovou nekrózou"
    ],
    "correct": 2
  },
  {
    "id": 102,
    "question": "Rabies",
    "options": [
      "Virové inkluze jsou v cytoplazmě gangliových buněk",
      "V barvení hematoxylin-eosinem jsou inkluze tmavě hnědé až černé",
      "Není-li provedena vakcinace mezi infekcí a projevy nemoci,je onemocnění smrtelné až ve 30%",
      "Interval mezi infekcí a projevy nemoci závisí na místě vstupu",
      "Typické je chronické hnisání v místě vstupu"
    ],
    "correct": 3
  },
  {
    "id": 103,
    "question": "Sclerosis multiplex je charakterizovaná:",
    "options": [
      "Demyelinizací periferních nervů",
      "Kortiko-kortikální „U“ – vlákna jsou zachována",
      "Dědičnost je autosomálně domimantní",
      "Ataky choroby bývají střídány dlouhodobými remisemi",
      "Přítomností spirálovitých mikroorganismů v placích"
    ],
    "correct": 3
  },
  {
    "id": 104,
    "question": "Myelin v CNS je tvořen a udržován:",
    "options": [
      "Astrocyty",
      "Oligodendroglií",
      "Schwannovýmy buňkami",
      "Axony",
      "Mikroglií"
    ],
    "correct": 1
  },
  {
    "id": 105,
    "question": "U kterého z následujících onemocnění byla potvrzena virová etiologie?",
    "options": [
      "Krabbeho choroba",
      "Hurlerové choroba",
      "Subakutní sklerotizující panencefalitida",
      "Huntingtonova chorea",
      "Alzheimerova choroba"
    ],
    "correct": 2
  },
  {
    "id": 106,
    "question": "Leukodystrofie",
    "options": [
      "Je enzymatická porucha",
      "Postihují zpravidla již novorozence",
      "Je charakterizovaná ložisky demyelinizace nepravidelně rozloženými v CNS",
      "≈ imunosuprese",
      "≈ intrauterinní anoxie"
    ],
    "correct": 0
  },
  {
    "id": 107,
    "question": "Holoprosencefalie",
    "options": [
      "Bývá spojena s obstrukcí akveduktu",
      "Bývá spojena s herniací mozečkových tonsil",
      "Postižení umírají zpravidla po pubertě",
      "Bývá způsobena intrauterinní infekcí HSV",
      "Frontálně chybí interhemisferická fisura"
    ],
    "correct": 4
  },
  {
    "id": 108,
    "question": "Mentální retardace u 10 leté dívky může souviset s",
    "options": [
      "Holoprosencefalií",
      "Těžkou intrauterinní toxoplazmózou",
      "Trizomií 21",
      "Tay-Sachsovou chorobou",
      "Spina bifida oculta"
    ],
    "correct": 2
  },
  {
    "id": 109,
    "question": "Ependymální hematomy se nejčastěji vyskytují",
    "options": [
      "U plodů ve druhém trimestru",
      "Při sclerosis multiplex",
      "U předčasně narozených dětí s RDS",
      "U hyperaktivních batolat",
      "U dětí s trizomií 21-22"
    ],
    "correct": 2
  },
  {
    "id": 110,
    "question": "Meningitis u novorozenců",
    "options": [
      "≈ velmi dobrá prognóza",
      "≈ toxoplazmóza",
      "≈ E.coli",
      "≈ meningokoky",
      "≈ améby"
    ],
    "correct": 2
  },
  {
    "id": 111,
    "question": "Který z následujících defektů neurální trubice má nejlepší prognózu?",
    "options": [
      "Anencefalie",
      "Spina bifida occulta",
      "Rachischizis",
      "Encefalokéla",
      "Meningomyelokéla"
    ],
    "correct": 1
  },
  {
    "id": 112,
    "question": "Který z následujících pojmů nesouvisí s Wernického encefalopatií?",
    "options": [
      "Alkoholizmus",
      "Chybění thiaminu",
      "Chybění B6",
      "Hypothalamus",
      "Corpora mamillaria"
    ],
    "correct": 2
  },
  {
    "id": 113,
    "question": "Pro sclerosis multiplex neplatí",
    "options": [
      "Postihuje bílou i šedou hmotu CNS",
      "Může postihnou též optický trakt",
      "Periferní nervstvo je postiženo jen vzácně",
      "Nemocnění probíhá v atakách střídaných různě dlouhými remisemi",
      "Jedná se o onemocnění způsobené spalničkovým virem"
    ],
    "correct": 4
  },
  {
    "id": 114,
    "question": "Meningitida způsobená N.meningitidis postihuje nejčastěji",
    "options": [
      "Předčasně narozené děti",
      "Děti narozené v termínu",
      "Mladé dospělé",
      "Dospělé vyššího věku, často alkoholiky",
      "Pacienty s AIDS"
    ],
    "correct": 2
  },
  {
    "id": 115,
    "question": "Likvor s vysokým obsahem bílkovin, nízkým obsahem glukózy a četnými neutrifily je typický pro",
    "options": [
      "Absces hemisféry mozečku",
      "Virovou encefalitidu",
      "Bakteriální meningitidu",
      "Klíšťovou meningoencefalitidu",
      "Arnold-Chiariho syndrom"
    ],
    "correct": 2
  },
  {
    "id": 116,
    "question": "Tuberkulózní meningitida",
    "options": [
      "≈ chronický intracerebelárální absces",
      "≈ komunikující hydrocefalus",
      "≈ v likvoru bývají přítomny acidorezistentní mykobakterie",
      "≈ četné polymorfonukleáry v CNS",
      "≈ granulomatózní proces na mozkové bazi"
    ],
    "correct": 4
  },
  {
    "id": 117,
    "question": "Pacient umírá na virovou chorobu spojenou s postižením CNS omezeným na šedou hmotu. Dg.?",
    "options": [
      "Poliomyelitis",
      "Panencefalitis",
      "Leukoencefalitis",
      "Polioencefalitis",
      "Polioencefalomyelitis"
    ],
    "correct": 0
  },
  {
    "id": 118,
    "question": "Subdurální hematom",
    "options": [
      "≈ arteriální krvácení",
      "≈ ruptura vakovitého aneuryzma",
      "≈ hypertenze",
      "≈ arteriovenózní malformace",
      "≈ venózní krvácení"
    ],
    "correct": 4
  },
  {
    "id": 119,
    "question": "O amyotrofické laterální skleróze neplatí",
    "options": [
      "Přítomna je atrofie svalů",
      "Bývají přítomna Negriho tělíska",
      "Bývá postižen dolní motoneuron",
      "Průběh choroby bývá progresivní",
      "Charakteristické jsou svalové fascikulace"
    ],
    "correct": 1
  },
  {
    "id": 120,
    "question": "Sclerosis multiplex není charakterizována",
    "options": [
      "Primárním postižením axonů",
      "Destrukcí myelinu",
      "Sekundární gliózou",
      "Nepravidelným rozložením postižených oblastí",
      "Chronickým průběhem"
    ],
    "correct": 0
  },
  {
    "id": 121,
    "question": "Co není charakteristické pro Alzheimerovu chorobu?",
    "options": [
      "Neurofibrilární tangles",
      "Plaky",
      "Lewyho tělíska",
      "Kotrikální atrofie",
      "Demence"
    ],
    "correct": 2
  },
  {
    "id": 122,
    "question": "K Parkinsonově chorobě patří",
    "options": [
      "Hyperpigmentace locus coeruleus",
      "Hyperpigmentace substatantia nigra",
      "Atrofie kosterního svalstva",
      "Postižení dopaminergních neuronů",
      "Svalová hypermotilita"
    ],
    "correct": 3
  },
  {
    "id": 123,
    "question": "Co z následujícího není charakteristické pro glioma multiforme",
    "options": [
      "Nejčastější je u osob starších 50 let",
      "Časté jsou nekrózy s palisádovitým postavením okolních buněk",
      "Ohraničení tumoru je ostré",
      "Bývají přítomna obrovské nádorové buňky",
      "Mitotická aktivita bývá vysoká"
    ],
    "correct": 2
  },
  {
    "id": 124,
    "question": "Které z následujících tvrzení neplatí o mozkomíšním moku?",
    "options": [
      "Normální objem je 150ml",
      "Tvoří se v chorioidálním plexu",
      "Při leptomeningitidě bývá množství bílkoviny zvýšeno",
      "Při chronickém abscesu mozkové hemisféry obsahuje množství polymorfonukleárů",
      "Hromadění moku v komorách způsobuje tlakovou atrofii hemisfér"
    ],
    "correct": 3
  },
  {
    "id": 125,
    "question": "Mozkový edém nesouvisí s",
    "options": [
      "Ischémií mozkové tkáně",
      "Herniací",
      "Zvýšeným intrakraniálním tlakem",
      "Zrychlením srdeční akce",
      "Edémem papily očního nervu"
    ],
    "correct": 3
  },
  {
    "id": 126,
    "question": "Nekomunikující hydrocefalus nemá souvislost s",
    "options": [
      "Papilomem chorioidálního plexu",
      "TBC meningitidou",
      "Tumory mozkového kmene",
      "Ependymomem",
      "Malformací Arnold-Chiariho"
    ],
    "correct": 1
  },
  {
    "id": 127,
    "question": "Mezi poruchy způsobené alkoholem nepatří",
    "options": [
      "Atrofie mozkové kůry",
      "Atrofie dorzálních míšních traktů",
      "Periferní neuropatie",
      "Wernického-Korsakoffův syndrom",
      "Hepatální encefalopatie"
    ],
    "correct": 1
  },
  {
    "id": 128,
    "question": "Huntingtonova chorea",
    "options": [
      "≈ atrofie proximálních svalů končetin",
      "≈ atrofie míšních motorických drah",
      "≈ postižení bazálních ganglií",
      "≈ postižení mozečku",
      "≈ postižení thalamu"
    ],
    "correct": 2
  },
  {
    "id": 129,
    "question": "Které z následujících spojení není správné?",
    "options": [
      "Myastenia gravis ≈ thymom",
      "Myastenia gravis ≈ hyperplazie thymu",
      "Periferní neuropatie ≈ skupinová atrofie svalových vláken",
      "Dermatomyositis ≈ polymorfonukleární infiltrace svalu",
      "Dlouhodobé znehybnění končetiny ≈ atrofie svalových vláken II.typu"
    ],
    "correct": 3
  },
  {
    "id": 130,
    "question": "K neurogenní svalové atrofii patří",
    "options": [
      "Atrofická angulární svalová vlákna",
      "Chybění dystrofinu",
      "Perivaskulární smíšený zánětlivý infiltrát",
      "Drobné disperzní nekrózy svalu",
      "Jizvení"
    ],
    "correct": 0
  },
  {
    "id": 131,
    "question": "Biopsie svalu ukázala typové seskupení vláken. Může se jednat o:",
    "options": [
      "Dermatomyositis",
      "Amyotrofickou laterílní sklerózu",
      "Myastenia gravis",
      "Svalovou dystrofii Duchenne",
      "Atrofii z nečinnosti"
    ],
    "correct": 1
  },
  {
    "id": 132,
    "question": "Hlavním elementem v procesu jizvení nekrotické mozkové tkáně jsou:",
    "options": [
      "Fibroblasty",
      "Astrocyty",
      "Mikroglie",
      "Oligodendroglie",
      "Transformované ependymální buňky"
    ],
    "correct": 1
  },
  {
    "id": 133,
    "question": "Které z následujících spojení je správné",
    "options": [
      "Sclerosis multiplex ≈ chronická fibroproduktivní leptomeningitis",
      "Virová meningitis ≈ neexistuje",
      "Pachymeningitida ≈ rabies",
      "Tuberkulóza ≈ bazilární meningitida",
      "Meduloblastom ≈ hemisféry telencefala"
    ],
    "correct": 3
  },
  {
    "id": 134,
    "question": "Které z následujících spojení není správné?",
    "options": [
      "Meningeom ≈ arachnoidea",
      "Glioblastoma multiforme ≈ Schwannovy buňky",
      "Meduloblastom ≈ rozetovité uspořádání",
      "Oligodendrogliom ≈ psamomatózní tělíska",
      "m. Recklinghausen ≈ neurinom akustiku"
    ],
    "correct": 1
  },
  {
    "id": 135,
    "question": "Které z následujících spojení není správné?",
    "options": [
      "Myelin ≈ oligodendroglie",
      "Fagocytóza ≈ mikroglie",
      "Hromadění likvoru v komorách ≈ nekomunikující hydrocefalus",
      "Schwannovy buňky ≈ hematoencefalická bariéra",
      "Astrocyty ≈ mozková „jizva“"
    ],
    "correct": 3
  },
  {
    "id": 136,
    "question": "Které následující spojení není správné?",
    "options": [
      "Intrauterinní sonografické vyšetření ≈ kongenitální hydrocefalus",
      "Hladina AFP v amniové tekutině ≈ m.Down",
      "Intrauterinní sonografické vyšetření ≈ anencefalus",
      "Kultivace amniových buněk ≈ m.Down",
      "Kultivace amniových buněk ≈ hemofilie"
    ],
    "correct": 1
  },
  {
    "id": 137,
    "question": "Které z následujících spojení je správné?",
    "options": [
      "Kraniofaryngeom ≈ suprasellární tumor",
      "Schwannom ≈ arachnoidéální výstelka",
      "Neurinom ≈ blokáda akveduktu",
      "Meduloblastom ≈ postihuje pouze dospělé",
      "Glioblastom ≈ nekrotizuje jen vzácně"
    ],
    "correct": 0
  },
  {
    "id": 138,
    "question": "Které z následujících spojení není správné?",
    "options": [
      "N. meningitidis ≈ novorozenci",
      "S .pneumoniae ≈ purulentní meningitida u alkoholiků",
      "T .pallidum ≈ povšechná mozková atrofie",
      "M.tuberculosis ≈ chronická byzilární meningitida",
      "Améby ≈ rychle probíhající, zpravidla smrtelná meningitida"
    ],
    "correct": 0
  },
  {
    "id": 139,
    "question": "Které z následujících spojení není správné?",
    "options": [
      "Alkohol ≈ Korsakoffova psychóza",
      "Mozková purpura ≈ otrava CO",
      "Chybění vitanímu B12 ≈ subakutní kombinovaná degenerace",
      "Subdurální hematom ≈ vakovité aneuryzma",
      "Epidurální hematom ≈ fraktura lebky"
    ],
    "correct": 3
  },
  {
    "id": 140,
    "question": "Holoprosencefalie souvisí s:",
    "options": [
      "Herniací tonzil mozečku",
      "Trizomií 21",
      "Kongenitální infekcí HSV",
      "Obstrukcí akveduktu",
      "Malformací hemisfér telencefala"
    ],
    "correct": 4
  },
  {
    "id": 141,
    "question": "Arnosdovu-Chiariho malformaci představuje hydrocefalus a",
    "options": [
      "Oploštělý pons",
      "Syringomyelie",
      "Kyklopie",
      "Meningomyelokéla",
      "Glaukom"
    ],
    "correct": 3
  },
  {
    "id": 142,
    "question": "Který z následujících tumorů je nejtypičtější pro dětský věk?",
    "options": [
      "Meningeom",
      "Meduloblastom",
      "Glioblastom",
      "Oligodendrogliom",
      "Schwannom"
    ],
    "correct": 1
  },
  {
    "id": 143,
    "question": "Které tvrzení neplatí o chronickém mozkovém abscesu?",
    "options": [
      "Je ohraničen membránou tvořenou mj. i kolagenním vazivem",
      "V okolí je glióza",
      "Má tendenci šířit se směrem do komor",
      "Nejčastějším původcem je M. tuberculosis",
      "Častější je u i.v. narkomanů"
    ],
    "correct": 3
  },
  {
    "id": 144,
    "question": "Otrava oxidem uhelnatým bývá charakterizována",
    "options": [
      "Petechiálním krvácením do mozku",
      "Hyperpigmentace substantia nigra",
      "Neurofibrilárními „tangles“",
      "Lewyho tělíska",
      "Prokrvácením a gliózou v oblasti corpora mamillaria"
    ],
    "correct": 0
  },
  {
    "id": 145,
    "question": "Epidurální hematom je obvykle spojen s traumatickou rupturou",
    "options": [
      "Přemosťujících vém",
      "a. cerebri media",
      "a. meningea media",
      "a. temporalis",
      "sinus longitundinalis superior"
    ],
    "correct": 2
  },
  {
    "id": 146,
    "question": "Který z následujících způsobů šíření infekce se v CNS neuplatňuje?",
    "options": [
      "Krevními cévami",
      "Přímým lokálním šířením",
      "Lymfatiky",
      "Periferními nervy",
      "Traumaticky"
    ],
    "correct": 2
  },
  {
    "id": 147,
    "question": "Mezi pomalé virózy patří",
    "options": [
      "Polyradikuloneuritis Guillain-Barré",
      "Vzteklina",
      "Sclerosis multiplex",
      "Subakutní spongiformní encefalopatie Creutzfeldt-Jacob ???",
      "Encefalitis Economo"
    ],
    "correct": 3
  },
  {
    "id": 148,
    "question": "Subdurální hematom je obvykle spojen s traumatickou rupturou",
    "options": [
      "Přemosťujících vén",
      "a. cerebri media",
      "a. meningea media",
      "a. temporalis",
      "Sinus longitudinalis superior"
    ],
    "correct": 0
  },
  {
    "id": 149,
    "question": "Který z následujících tumorů CNS je nejčastější u dospělých",
    "options": [
      "Ependymom",
      "Gangliogliom",
      "Glioblastoma multiforme",
      "Neuroblastom",
      "Oligodendroglion"
    ],
    "correct": 2
  },
  {
    "id": 150,
    "question": "Mozkové krvácení u nezralých novorozenců vznikne nejspíše",
    "options": [
      "V chorioidálním plexu",
      "V bílé hmotě mozkové",
      "V kůře mozkové",
      "V germinální matrix subependymálně",
      "Na mozkové bazi"
    ],
    "correct": 3
  },
  {
    "id": 151,
    "question": "Který z následujících tumorů CNS nepatří mezi gliomy?",
    "options": [
      "Astrocytom",
      "Oligodendrogliom",
      "Ependymom",
      "Gliblastoma multiforme",
      "Meningeom"
    ],
    "correct": 4
  },
  {
    "id": 152,
    "question": "Pro primární epilepsii je charakteristické:",
    "options": [
      "Zánik gangliových buněk v hippocampu",
      "Difúzní glióza mozku",
      "Zánik gangliových buněk v bazálních gangliích",
      "Laminární destukce motorické zóny kůry",
      "Přechodný edém mozku bez dalších změn"
    ],
    "correct": 4
  },
  {
    "id": 153,
    "question": "Commotio cerebri má tyto změny:",
    "options": [
      "Encefalomalacie v místě nárazu",
      "Encefalomalacie v místě protinárazu",
      "Encefalomalacie v místě nárazu i protinárazu",
      "Subdurální hematom",
      "Žádné makroskopické změny nejsou přítomny"
    ],
    "correct": 4
  },
  {
    "id": 154,
    "question": "Při prasknutí Willisova okruhu vzniká:",
    "options": [
      "Apoplexia cerebri",
      "Subarachnoidální hematom",
      "Subdurální hematom",
      "Hematoencefalus",
      "Subdurální hygrom"
    ],
    "correct": 1
  },
  {
    "id": 155,
    "question": "Alzheimerovy změny glie jsou v neostriatu při:",
    "options": [
      "Wernickeově pseudoencefalii alkoholiků",
      "Juvenilním diabetu",
      "Wilsonově hepatolentikulární degenaraci",
      "Senilní demenci",
      "Tay-Sachsově chorobě"
    ],
    "correct": 2
  },
  {
    "id": 156,
    "question": "Sclerosis multiplex je:",
    "options": [
      "Následek mozkové arteriosklerózy",
      "Typ chronické leukoencefalitidy",
      "Kolagonóza postihující kůži a jiné orgány",
      "Následek novorozenecké asfyxie",
      "Nenédorové onemocnění mozku s hamartomy kůže a ledvin"
    ],
    "correct": 1
  },
  {
    "id": 157,
    "question": "Při spinální atrofii svalů (dětská obrna) nalezneme:",
    "options": [
      "Skupiny atrofických, normálních i hypertrofických svalových vlákem",
      "Lipomatózní pseudohypertrofii svalu",
      "Hnědou atrofii svalových vláken",
      "Atrofii svalu s lipomatózní pseudohypertrofií",
      "Atrofii svalu s jizvením, které vede ke kontraktuře"
    ],
    "correct": 0
  },
  {
    "id": 158,
    "question": "K obrazu tuberózní sklerózy nepatří:",
    "options": [
      "Atypická astroglie v mozkové kůře",
      "Deformace mozkové gyrifikace",
      "Hamartomatózní nádorky v obličeji",
      "Rhabdomyoblastický sarkom",
      "Lipomy a leiomyomy v ledvinách"
    ],
    "correct": 3
  },
  {
    "id": 159,
    "question": "Littleova choroba je:",
    "options": [
      "Angioretikuliom mozečku s cystózou ledvin",
      "Lipidóza s postižením RES a mozku",
      "Následky poporodního poškození mozku",
      "Polyglandulární atrofie s hormonální nanosomií",
      "Familiární defekt imunity s atrofií thymu"
    ],
    "correct": 2
  },
  {
    "id": 160,
    "question": "Amyotrofická laterální skleróza je:",
    "options": [
      "Periferní arterioskleróza s atrofií svalstva končetin",
      "Degenerace pyramidové dráhy s neurogenní atrofii svalů, hlavně na rukou",
      "Kongenitální atonie svalů s vyjímkou svalů dýchacích",
      "Chronická leukoencefalitida s atrofií extenzorů končetin",
      "Nevyléčitelný následek dětské obrny"
    ],
    "correct": 1
  },
  {
    "id": 161,
    "question": "Které z následujících nádorů nejméně často metastazují do CNS?",
    "options": [
      "Karcinomy jater",
      "Karcinomy prsu",
      "Karcinomy plic",
      "Maligní melanomy",
      "Karcinomy ledvin"
    ],
    "correct": 0
  },
  {
    "id": 162,
    "question": "Astrocytomy postihující děti",
    "options": [
      "Metastazují do plic",
      "Mitotická aktivita bývá vysoká",
      "Jsou zpravidla (>70%) benigní",
      "Zpravidla se jedná o meningeomy",
      "Bývají přítomny na obou stranách telencefala současně"
    ],
    "correct": 2
  },
  {
    "id": 163,
    "question": "Mezi leokodystrofie patří",
    "options": [
      "Sclerosis multiplex",
      "Huntingtonova choroba",
      "Alzheimerova choroba",
      "Kuru",
      "Krabbeho choroba"
    ],
    "correct": 4
  },
  {
    "id": 164,
    "question": "Abnormální růst tkáně, pro který se často používá termín „premaligní“",
    "options": [
      "≈ atrofie",
      "≈ dyspazie",
      "≈ hyperplazie",
      "≈ hypertrofie",
      "≈ metaplazie"
    ],
    "correct": 1
  },
  {
    "id": 165,
    "question": "Pacient (45). Thorakotomie, při níž byl odstraněn 2cm velký solidní tumor plíce. Peroperační vyšetření – směs zralé hyalinní chrupavky a respiračního epitelu. Do které kategorie tumor pravděpodobně patří?",
    "options": [
      "Benigní tumor",
      "Maligní tumor",
      "Choristom",
      "Hamartom",
      "Hyperplazie"
    ],
    "correct": 3
  },
  {
    "id": 166,
    "question": "Russelova tělíska jsou:",
    "options": [
      "Inkluze v gangliových buňkách při vzteklině",
      "Inkluze v hepatocytech při hepatitidě",
      "Gamaglobuliny v plazmocytech",
      "Intranukleární inkluze v buňkách epidermis při varicelle",
      "Intraplazmatická tělíska v buňkách při variole"
    ],
    "correct": 2
  },
  {
    "id": 167,
    "question": "Metaplastické zvápenění postihuje:",
    "options": [
      "Plíce, ledviny, játra",
      "Ledviny, plíce, žaludek",
      "Játra, pankreas, duodenum",
      "Plexus chorioideus, straré céní tromy",
      "Plíce, srdce, koronární artérie"
    ],
    "correct": 1
  },
  {
    "id": 168,
    "question": "Při těžké srdeční insuficienci může vzniknout ikterus:",
    "options": [
      "Obstrukční",
      "Hemolytický a obstrukční",
      "Hepatocelulární",
      "Jádrový (kernikterus)",
      "Není žádná souvislost s ikterem"
    ],
    "correct": 2
  },
  {
    "id": 169,
    "question": "Mezi různé typy hyperplazie nepatří",
    "options": [
      "Fyziologická hormonální hyperplazie, např. zvětšení pohlavních orgánů během puberty",
      "Kompenzatorní hyperplazie, např. při úpravě stavu po částečné hepatektomii",
      "Adaptivní hyperplazie, např. lymfoidní hyperplazie lymfatické tkáně při zánětu",
      "Kongenitální, např. u mozků plodů, jejich matky v noci poslouchají nahrávky přednášek…",
      "Humorální, např. hyperplazie štítné žlázy pří Graves-Basedowově chorobě"
    ],
    "correct": 3
  },
  {
    "id": 170,
    "question": "Bílý trombus je spožen převážně z:",
    "options": [
      "Erytrocytů",
      "Hyalinu",
      "Neutrofilů",
      "Fibrinu a trombocytů",
      "Monocytů"
    ],
    "correct": 3
  },
  {
    "id": 171,
    "question": "Do zánětlivého exsudátu proniká z bílkovin jako první",
    "options": [
      "Fibrinogen",
      "Albumin",
      "γ-globulin",
      "α-globulin",
      "C-reaktivní protein"
    ],
    "correct": 1
  },
  {
    "id": 172,
    "question": "Parazitický thorakopagus patří mezi:",
    "options": [
      "Monstra simplica",
      "Monstra duplicia asymmetrica",
      "Monstra duplicia symmetria – duplicitas parallela anterior",
      "Monstra duplicia symmetria – duplicitas parallela posterior",
      "Nepatří mezi monstra"
    ],
    "correct": 1
  },
  {
    "id": 173,
    "question": "Schlofferův nádor je:",
    "options": [
      "Metastáza hlenotvorného karcinomu do ovarií",
      "Hormonálně aktivní nádor ze specifického mezodermu gonád",
      "Bronchogenní kercinom plicního hrotu rostoucí do sympatiku",
      "Hemoblastom obličejových kostí",
      "Reparativní proces"
    ],
    "correct": 4
  },
  {
    "id": 174,
    "question": "Geneticky podmíněná porucha pojivové tkáně je:",
    "options": [
      "Cutis laxa",
      "Klinefelterův syndrom",
      "Mondorova nemoc",
      "Sjögrenův syndrom",
      "Recklinghausenova choroba"
    ],
    "correct": 0
  },
  {
    "id": 175,
    "question": "Uzávěr ductus cysticus vede k",
    "options": [
      "Obstrukčímu ikteru",
      "Biliární cirhóze",
      "Cholelithiáze",
      "Hydropsu žlučníku",
      "Papilitis stenosans cholangitica"
    ],
    "correct": 3
  },
  {
    "id": 176,
    "question": "Koplikovy skvrny jsou",
    "options": [
      "Na kůži tváří",
      "Na sliznici jazyka",
      "Při spalničkách",
      "Při spále",
      "Při AIDS"
    ],
    "correct": 2
  },
  {
    "id": 177,
    "question": "Které tvrzení o hypoplazii je pravdivé?",
    "options": [
      "Je typická pro ovaria postmenopauzálních žen",
      "Může být humorální, např. hypolazie štítné žlázy při Graves-Basedowově chorobě",
      "Nikdy nepostihuje srdce, protože kardiomyocyty nejsou schopny dělení",
      "Je to získané fyziologické zmenšení orgánu",
      "Hypoplastický orgán nedosáhl v průběhu vývoje obvyklé velikosti"
    ],
    "correct": 4
  },
  {
    "id": 178,
    "question": "Změna diferenciace proliferujících rezervních buněk, která vede ke změně jedné zralé tkáně v jinou, se nazývá:",
    "options": [
      "Dysplazie",
      "Metaplazie",
      "Hyperplazie",
      "Dysfagie",
      "Paraplegie"
    ],
    "correct": 1
  },
  {
    "id": 179,
    "question": "Muž (20), zabit při autonehodě. Pitva prokázala krvácení mezi meningy a lebku, krvácení do tunica vaginalis a krev v osrdečníku. Který popis odpovídá pitevmi nálezu?",
    "options": [
      "Subdurální krvácení, hemosalpinx, hemothorax",
      "Hematocolpos, purpura, hemartros",
      "Hemopericardium, hematocele, epidurální hematom",
      "Hemoperikard, hematocolpos, subdurální hematom",
      "Epidurální hematom, hematokele, hematocolpos"
    ],
    "correct": 2
  },
  {
    "id": 180,
    "question": "Změna jednoho diferencovaného typu epitelu v jiný diferencovaný typ se nazývá",
    "options": [
      "Atrofie",
      "Dysplazie",
      "Hyperplazie",
      "Hypertrofie",
      "Metaplazie"
    ],
    "correct": 4
  },
  {
    "id": 181,
    "question": "Zvýšené riziko trombózy není u",
    "options": [
      "Dehydratace",
      "Trombocytózy",
      "Anémie",
      "Diabetu",
      "Venostázy"
    ],
    "correct": 2
  },
  {
    "id": 182,
    "question": "Který z následujících stavů lze nejlépe ystihnout pojmem pasivní hyperémie",
    "options": [
      "Zčervenání obličeje v chladu",
      "Kožní vazodilatace za horkého dne",
      "Překrvení svalu jako následek cvičení",
      "Zánět",
      "Muškátová játra"
    ],
    "correct": 4
  },
  {
    "id": 183,
    "question": "Čerstvá krev ve stolici se označuje termínem",
    "options": [
      "Epistaxe",
      "Hematemeza",
      "Enteroragie",
      "Hemoptýza",
      "Meléna"
    ],
    "correct": 2
  },
  {
    "id": 184,
    "question": "Které z následujících tvrzení je pravdivé?",
    "options": [
      "Pravděpodobnost vzniku gangrény je menší u infarktu jejuna než u infarktu jetar",
      "Koronární trombóza je častější než koronární embolizace"
    ],
    "correct": 1
  },
  {
    "id": 185,
    "question": "c. Likvefační nekróza je je pravděpodobnější u 10 dní starého infarktu sleziny než u stejně starého infarktu mozku",
    "options": [
      "Petechie mají větší velikost než ekchymózy",
      "Glomerulus má větší regenerační schopnost než epitel renálního tubulu"
    ],
    "correct": 0
  },
  {
    "id": 186,
    "question": "Krev ve sputu",
    "options": [
      "Hemoptýza",
      "Hematochézie",
      "Hemateméza",
      "Hematomyelie",
      "Meléna"
    ],
    "correct": 0
  },
  {
    "id": 187,
    "question": "Která z následujících látek se hromadí extracelulárně?",
    "options": [
      "Amyloid",
      "Glykogen",
      "Lipofuscin",
      "Tuk",
      "Melanin"
    ],
    "correct": 0
  },
  {
    "id": 188,
    "question": "Které z následujících spojení je správné?",
    "options": [
      "Chronický zánět ≈ amyloid AL",
      "Agregáty intermediárních filament v hepatocytech ≈ alkoholický hyalin",
      "Hyalin na povrchu vnitřních orgánů ≈ Mondorova choroba",
      "Lipofuscin ≈ barvení Berlínskou modří",
      "Depozita kalcia v ekrotické tkáni ≈ metastatická kalcifikace"
    ],
    "correct": 1
  },
  {
    "id": 189,
    "question": "Co je příkladem celulární, tkáňové či orgánové adaptace?",
    "options": [
      "Infarkt myokardu",
      "Hypertrofie myokardu",
      "Lipomatózní atrofie myokardu",
      "Amyloidóza myokardu",
      "Rozpad membrám myokardiálních buněk"
    ],
    "correct": 1
  },
  {
    "id": 190,
    "question": "Hepatocyty mohou v cytoplazmě obsahovat hnědý zrnitý pigment. Může se jedna o:",
    "options": [
      "Hemosiderin, lipofuscin nebo bilirubin",
      "Lipofuscin, antrakotický pigment, Malloryho hyalin",
      "Malloryho hyalin, lipofuscin, hemosiderin",
      "Antrakotický pigment, amyloid, lipofuscin",
      "Bilirubin, neutrální lipidy, hemosicerin, melanin"
    ],
    "correct": 0
  },
  {
    "id": 191,
    "question": "Hypoxie",
    "options": [
      "≈ natrávení buněčné membrány",
      "≈ porucha oxidativná fosforylace v mitochondriích",
      "≈ ruptura buněčné membrány mechanického typu",
      "≈ otrava buněčné membránové pumpy",
      "≈ stimulace buněčné mombránové pumpy"
    ],
    "correct": 1
  },
  {
    "id": 192,
    "question": "U kterého stavu je nejpravděpodobnjší pozitivní reakce na železo v postiženém orgánu?",
    "options": [
      "Melanisis coli",
      "Červené a zelené tetování",
      "Renální argyrosis",
      "Siderosis bulbi",
      "Plicní antrakóza"
    ],
    "correct": 3
  },
  {
    "id": 193,
    "question": "U pacienta s dlouhodobě probíhající revmatoidní artritidou se vyvinula amyloidóza. Amyloid je pravděpodobně typu",
    "options": [
      "AA",
      "AL",
      "AS",
      "AE",
      "ARA"
    ],
    "correct": 0
  },
  {
    "id": 194,
    "question": "Po popálení se kůže ulcerovala, ale potom zhojila. Na zhojené kůži rostou chlupy. Jde o spáleninu",
    "options": [
      "I. stupně",
      "II. stupně",
      "III. stupně",
      "IV. stupně",
      "V. stupně"
    ],
    "correct": 1
  },
  {
    "id": 195,
    "question": "Lipomatóza je příklad",
    "options": [
      "Nahromadění cholesterolu v makrofázích",
      "Nahromadění neutrálních tuků v hepatocytech při alkoholické hepatitidě",
      "Přítomnost tukových buněk mezi svalovými vlákny pravé komory",
      "Natrávení tukové tkáně peritonea při akutní nekróze pankreatu",
      "Hyperlipidémie při nefrotickém syndromu"
    ],
    "correct": 2
  },
  {
    "id": 196,
    "question": "Co je typický následek buněčné ischemie?",
    "options": [
      "Zvýšená oxidativná fosforylace",
      "Zvýšená hladina intracelulárního kalcia",
      "Snížené množství intracelulární vody",
      "Zvýšené množství intracelulárního kalia",
      "Zvýšení proteosyntézy"
    ],
    "correct": 1
  },
  {
    "id": 197,
    "question": "Který děj je spolu s mitotickou aktivitou a růstem charakteristický pro přestavbu tkání v průběhu embryonálního vývoje?",
    "options": [
      "Anasarka",
      "Dysplazie",
      "Autolýza",
      "Apoptóza",
      "Dystrofie"
    ],
    "correct": 3
  },
  {
    "id": 198,
    "question": "Dítě (3), z města, mentálně zaostává za vrstevníky. Laboratorně anémie a bazofilní tečkování erytrocytů. Nejpravděpodobnější je otrava",
    "options": [
      "Arzenem",
      "Olovem",
      "Rtutí",
      "Methanolem",
      "Oxidem uhelnatým"
    ],
    "correct": 1
  },
  {
    "id": 199,
    "question": "Který z následujících stavů má nejnižší pravděpodobnost rozpoznání v dětském věku?",
    "options": [
      "Downův syndrom",
      "Galaktosémie",
      "Klinefelterův syndrom",
      "Trizomie 13",
      "Trizomie 18"
    ],
    "correct": 2
  },
  {
    "id": 200,
    "question": "Pevnost tkáně způsobená obsahem tekutin",
    "options": [
      "≈ amyloidóza",
      "≈ antrakóza",
      "≈ pyknóza",
      "≈ turgor",
      "≈ exsudát"
    ],
    "correct": 3
  },
  {
    "id": 201,
    "question": "V hematoxylin-eosinu růžově se barvící bezstrukturní hmota odpovídá zahoustlému sekretu",
    "options": [
      "Amyloid",
      "Corpora amylacea",
      "Pyknóza",
      "Turgor",
      "Exsudát"
    ],
    "correct": 1
  },
  {
    "id": 202,
    "question": "Mitochondrie obsahují enzymy, které zajišťují",
    "options": [
      "Aktivaci a syntézu aminokyselin",
      "Glykolýzu",
      "Oxidativní fosforylaci",
      "Syntézu mastných kyselin",
      "Odbourávání mastných kyselin"
    ],
    "correct": 2
  },
  {
    "id": 203,
    "question": "Která z následujících tkání bude nejvíce postižena ozářením?",
    "options": [
      "Střevní epitel",
      "Glie",
      "Rostoucí chrupavka",
      "Endotel",
      "Vazivo"
    ],
    "correct": 0
  },
  {
    "id": 204,
    "question": "Genetické onemocnění nejlépe charakterizuje tvrzení:",
    "options": [
      "Vždy se manifestuje po narození",
      "Může postihnou celé chromozómy nebo jednotlivé geny",
      "Může být způsobenu intrauterinním traumatem",
      "Manifestuje se různými typy srdečních vad",
      "Často souvisí s ozářením plodu ve třetím trimestru"
    ],
    "correct": 1
  },
  {
    "id": 205,
    "question": "Na periférii trombu jsou fibroblastické priliferace a kapiláry vrůstající do nitra trombu. Popis odpovídá:",
    "options": [
      "Apoptóze",
      "Fibrinolýze",
      "Rozpouštění trombu",
      "Organizaci",
      "Regeneraci"
    ],
    "correct": 3
  },
  {
    "id": 206,
    "question": "Při pitvě byla v aortě krevní sraženína, makroskopicky se skládající ze dvou částí: světlé nažloutlé a tmavě červené. Tento popis odpovídá:",
    "options": [
      "Krevní sraženině vzniklé po zastavení krevního proudu",
      "Krevní sraženině vzniklé v proudící krvi",
      "Krevní sraaženina obsahuje fragmenty aterosklerotického plátu",
      "Embolu z žil dolních končetin",
      "Embolu vzniklym v souvislosti s traumatem doprovázeným mnohočetnými kostními frakturami"
    ],
    "correct": 0
  },
  {
    "id": 207,
    "question": "Metalaxie",
    "options": [
      "Prostorová přestavba tkáně – adaptace na změněné podmínky",
      "≈ sekundární ložisko karcinomu prostaty v páteři",
      "Jeví se makroskopisky jako jahodový žlučník",
      "≈ Wilmsův tumor ledviny",
      "Aseptická nekróza postihující konce dlouhých kostí"
    ],
    "correct": 0
  },
  {
    "id": 208,
    "question": "Mezi retenční cysty patří",
    "options": [
      "Dermoidní cysta",
      "Ganglion",
      "Ranula",
      "Echinokoková cysta",
      "Cysticky dilatované prostory mozkových komor při hydrocefalu"
    ],
    "correct": 2
  },
  {
    "id": 209,
    "question": "Pseudoabsces (empyém) je",
    "options": [
      "Dutina bez výstelky",
      "Ohraničen pyogenní membráno",
      "≈ studený absces (u TBC)",
      "Typický pro osteomyelitis",
      "Může vzniknout při hnisavém zánětu v tuba uterina"
    ],
    "correct": 4
  },
  {
    "id": 210,
    "question": "Co není charakteristické pro Sampsonovu cystu?",
    "options": [
      "Příklad hemorhagické cysty",
      "Ve stěně bývá přítomen železitý pigment",
      "Následek endometriózy",
      "Retenční cysta endometriální žlázky",
      "Umístěna na ovariu"
    ],
    "correct": 3
  },
  {
    "id": 211,
    "question": "Hypertrofie nikdy není",
    "options": [
      "Vaskulární",
      "Hormonální",
      "Senilní",
      "Kompenzatorní",
      "Nervově podmíněná"
    ],
    "correct": 2
  },
  {
    "id": 212,
    "question": "Hypertrofie dělohy v těhotenství je",
    "options": [
      "Pracovní",
      "Nervově podmíněná",
      "Hormonální",
      "Vaskulární",
      "Kompenzatorní"
    ],
    "correct": 2
  },
  {
    "id": 213,
    "question": "Co je typické pro reverzibilní poškození buňky?",
    "options": [
      "Karyolýza",
      "Depozita kalcia v mitochondriích",
      "Výstup enzymů přes buněčné membrány do krevního oběhu",
      "Depozita lipidů z důvodu snížené proteolýzy",
      "Ruptura plazmatické membrány"
    ],
    "correct": 3
  },
  {
    "id": 214,
    "question": "Apoptóza je",
    "options": [
      "Prostupování leukocytů přes stěnu kapiláry",
      "Zánik izolované buňky",
      "Náhlé masivní krvácení v mozkové tkáni",
      "Součást Hornerova syndromu",
      "Druh aseptické kostní nekrózy"
    ],
    "correct": 1
  },
  {
    "id": 215,
    "question": "Pro primární amyloidózu není charakteristické",
    "options": [
      "Postihuje např. svalstvo kardiovaskulární (?)",
      "Provází určité (primární) onemocnění",
      "Reakce amyloidu jsou nepravidelné event. žádné",
      "Často bývá hereditární",
      "Pstihuje svalstvo jazyka"
    ],
    "correct": 1
  },
  {
    "id": 216,
    "question": "Atrofia fusca je",
    "options": [
      "Druh numerické atrofie",
      "Provázena hromaděním lipofuscinu v buňkách",
      "Charakteristická pro CNS",
      "Charakteristická pro kostní dřeň",
      "Charakteristická pro thymus"
    ],
    "correct": 1
  },
  {
    "id": 217,
    "question": "Atria mortis klasické patologie jsou",
    "options": [
      "Srdce, játra, ledviny",
      "Srdce, mozek, plíce",
      "Srdce, plíce, játra",
      "Srdce, mozek, játra",
      "Mozek, plíce, játra"
    ],
    "correct": 1
  },
  {
    "id": 218,
    "question": "Fetus maceratus je príklad",
    "options": [
      "Vlivu chladu na těhotenství",
      "Posmrtných změn po intoxikaci",
      "Hniloby",
      "Posmrtné autolýzy",
      "Nízké účinnosti fixačního činidla"
    ],
    "correct": 3
  },
  {
    "id": 219,
    "question": "Pseudomelanóza břišních orgánů a břišní stěny je způsobena",
    "options": [
      "Sirovodíkem (sulfan)",
      "Sirouhlíkem",
      "Žlučovými kyselinami",
      "Kyselinou chlorovodíkovou",
      "Pepsinem"
    ],
    "correct": 0
  },
  {
    "id": 220,
    "question": "Posmrtná ztuhlost",
    "options": [
      "Je způsobena uvolněním proteáz",
      "Začíná na končetinách",
      "Začíná ve žvýkacím svalstvu",
      "Vzniká působením amylázy na glykogen ve svalových vláknech",
      "Je způsobena posmrtným srážením krve v kapilárách"
    ],
    "correct": 2
  },
  {
    "id": 221,
    "question": "Dítě (4 týdny), srdeční transplantace. Explantované srdce mělo atrézii mitrální chlopně, levá komora neobvykle malá. Stav levé komory lze vystihnou pojmem",
    "options": [
      "Atrofie",
      "Ektopie",
      "Hamartom",
      "Hypolázie",
      "Aplázie"
    ],
    "correct": 3
  },
  {
    "id": 222,
    "question": "Primární amyloidóza typicky postihuje",
    "options": [
      "Tenké střevo a lymfatické uzliny",
      "Játra, ledviny a slezinu",
      "Nadledviny",
      "Svalstvo kardiovaskulárního ústrojí a jazyka",
      "Svalstvo jazyka"
    ],
    "correct": 3
  },
  {
    "id": 223,
    "question": "Councilmanova tělíska v hepatocytech a Kupfferových buňkách při virových hepatitidách",
    "options": [
      "≈ zduřelé mitochondrie",
      "≈ apoptotické tělíska",
      "≈ hydroptický Golgiho komplex",
      "≈ dilatované cisterny endoplasmatického retikula",
      "≈ pyknotická jádra"
    ],
    "correct": 1
  },
  {
    "id": 224,
    "question": "Na RTG páteře byly zjištěny osteoplastické metastázy. Pravděpodobný původ prim. nádoru?",
    "options": [
      "Játra",
      "Cervix uteri",
      "Colon",
      "Prostata",
      "Ledvina"
    ],
    "correct": 3
  },
  {
    "id": 225,
    "question": "Který znak se vyskytuje spíše u benigních než u maligních nádorů?",
    "options": [
      "Infiltrativní růst",
      "Nekróza",
      "Krvácení",
      "Mitotická aktivita",
      "Hypocelularita"
    ],
    "correct": 4
  },
  {
    "id": 226,
    "question": "Který tumor se vyskytuje nejčastěji u dětí do 5 let?",
    "options": [
      "Chronická lymfatická leukémie B",
      "Wilmsův tumor",
      "Glioblastoma multiforme",
      "Maligní fibrózní histiocytom",
      "Osteosarkom"
    ],
    "correct": 1
  },
  {
    "id": 227,
    "question": "Muž (55), 35 let těžký kuřák, bronchiskopie z důvodu chronického kašle. Mikroskopisky částečná náhrada respiračního epitelu epitelem vrstevnatým dlaždicovým. Jádra dlaždicového epitelu zvětšená, hyperchromatická, uspořádání epitelu poněkud nepravidelné. Pravděpodobná dg.?",
    "options": [
      "Dlaždicová metaplazie",
      "Infiltrující spinocelulární karcinom",
      "Dlaždicová dysplazie",
      "Dlaždicová hyperplazie",
      "Dlaždicová hypertrofie"
    ],
    "correct": 2
  },
  {
    "id": 228,
    "question": "Pacient umírá několik dní po infarktu myokardu. Při pitvě prokázán, dále nalezena bledší, na periferii prokrvácená ložiska klínovitého tvaru v obou levinách. Do které části pitevního protokolu patří údaj o nálezu těchto ložisek?",
    "options": [
      "Základní choroba",
      "Komplikace",
      "Příčina smrti",
      "Vedlejší nález",
      "O těchto ložiscích se pitevní protokol zmiňovat nebude…"
    ],
    "correct": 1
  },
  {
    "id": 229,
    "question": "Pacien umírá několik dní po ruptuře gangrenózní apendicitidy. Jaká bude nejvhodnější formulace příčiny smrti na pitevním protokolu?",
    "options": [
      "Srdeční selhání",
      "Sepse",
      "Difúzní peritonitida",
      "Appendicitis accuta gangrenosa",
      "Ileus"
    ],
    "correct": 3
  },
  {
    "id": 230,
    "question": "Genetický materiál EBV lze nalézt v buňkách",
    "options": [
      "Afrického typu Burkittova lymfomu",
      "Uroteliálního karcinomu močového měchýře",
      "Spinocelulárního karcinomu děložního čípku",
      "Spinocelulárního karcinomu děložního jícnu",
      "Spinocelulárního karcinomu děložního jazyka"
    ],
    "correct": 0
  },
  {
    "id": 231,
    "question": "Která z následujících asociací je správná?",
    "options": [
      "EBV ≈ nasofaryngeální karcinou",
      "AIDS ≈ lymfomy, zejm. T řady",
      "HPV typ 18 ≈ karcinom žaludku",
      "Hepatitis B ≈ karcinom prsu",
      "Herpes simplex typ II ≈ Burkittův lymfom"
    ],
    "correct": 0
  },
  {
    "id": 232,
    "question": "Diferenciace nádoru",
    "options": [
      "Vyjadřuje, jak se nádorová tkáň podobá tkáni normální",
      "Je vysoká u anaplastických nádorů",
      "Diferencované nádory jsou nezralé",
      "Čím je nádor diferencovanější, tím větší je diference od normální tkáně",
      "Více diferencované nádory mají zpravidla horší prognózu než méně diferencované nádory"
    ],
    "correct": 0
  },
  {
    "id": 233,
    "question": "Co neplatí o neuroblastomu?",
    "options": [
      "Je to nádor středního dospělého věku",
      "Může vzniknout v dřeni nadledvin",
      "Může vzniknout v zadním mediastinu",
      "Může vylučovat katecholaminy",
      "Histologicky bývají přítomny rozetovité formace"
    ],
    "correct": 0
  },
  {
    "id": 234,
    "question": "Maligní nádory zpravidla mají",
    "options": [
      "Sníženou kontaktní inhibici",
      "Zvýšenou mezibuněčnou kohezi",
      "Nízký poměr jádro/cytoplazma",
      "Nízkou mitotickou aktivitu",
      "Nízku invazivitu růstu"
    ],
    "correct": 0
  },
  {
    "id": 235,
    "question": "Ve srovnání s maligními nádory platí pro nádory benigní:",
    "options": [
      "Bývají ohraničené",
      "Vaskularizace bývá vyšší",
      "Diferenciace je nižší",
      "Mitotická aktivita je vyšší",
      "Hyperchromázie buněk je častější"
    ],
    "correct": 0
  },
  {
    "id": 236,
    "question": "Proliferativní frakci maligního nádoru tvoří buňky ve fázi",
    "options": [
      "S, G2, M",
      "G2, M",
      "M, G1, S",
      "G1",
      "G0"
    ],
    "correct": 0
  },
  {
    "id": 237,
    "question": "Co je nejpravděpodobnější nádor u desetiletého chlapce?",
    "options": [
      "Chondrosarkom",
      "Liposarkom",
      "Maligní fibrózní histiocytom",
      "Maligní Schwannom",
      "Rhabdomyosarkom"
    ],
    "correct": 4
  },
  {
    "id": 238,
    "question": "Co z následujícího naplatí o plazmocytomu?",
    "options": [
      "Čašto je provázen ukládáním amyloidu",
      "Často je provázen paraproteinurií",
      "Je to maligní lymfom B řady",
      "Četné osteoplastické metastázy",
      "≈ mnohotný myelom"
    ],
    "correct": 3
  },
  {
    "id": 239,
    "question": "Embryonální karcinom",
    "options": [
      "≈ maligní nádor postihující zárodek",
      "Patří mezi vrozené nádory",
      "Je vysoce maligní",
      "Produkuje vysoká množství hCG",
      "Nic takového neexistuje"
    ],
    "correct": 2
  },
  {
    "id": 240,
    "question": "Choriokarcinom",
    "options": [
      "Maligní nádor vychazející z trofoblastických struktur",
      "Nikdy nepostihuje muže",
      "Typické jsou prstencové buňky",
      "Jedná se o nádor ze zbytků chorda dorsalis",
      "Patří mezi epiteliální nádory"
    ],
    "correct": 0
  },
  {
    "id": 241,
    "question": "Chordom",
    "options": [
      "≈ nádor míchy",
      "≈ benigní nádor z chrupavky",
      "Bývá složen z buněk s obsahem glykogenu",
      "Často je lokalizován v horní nebo dolní čelisti",
      "Lokalizován bývá v podkuží, často posttraumatického původu"
    ],
    "correct": 2
  },
  {
    "id": 242,
    "question": "Paraganglion",
    "options": [
      "≈ hromadění mezenchymového hlenu na podkladě traumatizace",
      "Patří mezi neuroektodermové nádory",
      "V cytoplazmě přítomna glanula impregnovatelná stříbrem",
      "Nic takového neexistuje (??? např. Zuckerkandelův orgán,…)",
      "Histologické uspořádání bývá solidně alveolární"
    ],
    "correct": 4
  },
  {
    "id": 243,
    "question": "Žena(45), aspirační biopsie nádoru parotis.V aspirátu clindrické, hlen produkující buňky, dlaždicový epitel a chrupavčitý materiál. Tato léze",
    "options": [
      "Je zpavidla maligní",
      "Je teratogenního původu",
      "Bývá spojena s revmatoidní artritidou",
      "Má vysokou pravděpodobnost recidivy po (neúplné) resekci",
      "Afekce má souvislost se zubem"
    ],
    "correct": 3
  },
  {
    "id": 244,
    "question": "Z následujících nádorů mezi mezenchymové nádory nepatří:",
    "options": [
      "Aponeurotický fibrom",
      "Fibroleiomyom",
      "Lipom",
      "Liposarkom",
      "Fibromezoteliom"
    ],
    "correct": 4
  },
  {
    "id": 245,
    "question": "Který z uvedených nádorů nemá nádorové stroma?",
    "options": [
      "Cylinrom",
      "Fibrosarkom",
      "Neuroblastom",
      "Melanoblastom",
      "Kapilární hemangiom"
    ],
    "correct": 1
  },
  {
    "id": 246,
    "question": "Typickou lokalizací embryonálního rhabdomyosarkomu je",
    "options": [
      "Pánevní dno",
      "Přední mediastinum",
      "Zadní mediastinum",
      "Spodina lební",
      "Spodina dutiny ústní"
    ],
    "correct": 0
  },
  {
    "id": 247,
    "question": "Letterer-Siweova nemoc je",
    "options": [
      "Maligní retikulóza dětí mladších dvou let",
      "Retikulóza charakterizovaná střádáním",
      "Retikulóza charakterizovaná granulomatózním uspořádáním",
      "Retikulóza charakterizovaná vznikem solitárních ložisek v kostech",
      "Plazmocytární leukóza"
    ],
    "correct": 0
  },
  {
    "id": 248,
    "question": "Se záchvatovitým zarudnutím kůže, průjmem, asmatickým stavem a srdeční vadou se ztluštěním trikuspidální chlopně souvisí",
    "options": [
      "Lymfoepiteliom",
      "Hodgkinova nemoc",
      "Cylindrom",
      "Karcinoid",
      "Malobuněčný (ovískový) karcinom"
    ],
    "correct": 3
  },
  {
    "id": 249,
    "question": "Mezi nespecifické procesy provázející malignity viscerálních orgánů patří",
    "options": [
      "Acanthosis nigricans",
      "Lentigo",
      "Solitární keratóza",
      "Povrchové ulcerace",
      "Vitiligo"
    ],
    "correct": 0
  },
  {
    "id": 250,
    "question": "Argentafinní střevní karcinoid produkuje nejčastěji",
    "options": [
      "Adrenalin",
      "Heparin",
      "Serotonin",
      "Kyselinu vanilmandlovou",
      "Inzulín"
    ],
    "correct": 2
  },
  {
    "id": 251,
    "question": "Biopsie lymfatické uzliny prokáže metastázu maligního nádoru z buněk tvořících keratin. Pravděpodobný původ primárního nádoru je:",
    "options": [
      "Játra",
      "Cervix uteri",
      "Colon",
      "Štítná žláza",
      "Ledvina"
    ],
    "correct": 1
  },
  {
    "id": 252,
    "question": "Epulis je",
    "options": [
      "Aberantní struma při kořeni jazyka",
      "Tumor dásní",
      "Získaná dystrofie vaziva mezenchymálního původu",
      "Získaná forma zubního kazu na mléčném chrupu",
      "Nádor uretery"
    ],
    "correct": 1
  },
  {
    "id": 253,
    "question": "Žena (32), dříve zdravá. Nebolestivé zduření v levém mandibulárním úhlu, afekce 1x2 cm, 2 měsíce beze změn. Tuhé, solitární, biopsie prokázala přítomnost epiteliálních elementů a myxoidní tkáně. Pravděpodobná dg.?",
    "options": [
      "Warthinův nádor (adenolymfom)",
      "Sjögrenův syndrom",
      "Lymfoepiteliom",
      "Sialolithiasis",
      "Pleomorfní adenom"
    ],
    "correct": 4
  },
  {
    "id": 254,
    "question": "Epileptik (30) si stěžuje na krvácení z dásní. Zjištěna hyparplazie dásní. Pravděpdobně",
    "options": [
      "Se jedná o epulis",
      "Jde o vedlejší účinek protiepileptické léčby",
      "Jde o následek opakované traumatizace v průběhu záchvatů",
      "Jde o běžné idiopatické onemocnění spojené s epilepsií",
      "Jde o následek parodontózy"
    ],
    "correct": 1
  },
  {
    "id": 255,
    "question": "Radikulární cysta",
    "options": [
      "Je kostní cysta postihujícíc nejčastěji radius",
      "Vzniká epitelizací chronického abscesu u mrtvého zubu",
      "Je cystický nádor vznikající ze zubního zárodku",
      "Je cystická změna vznikající po zánětu měkkých plen míšních kořenů",
      "Souvisí obvykle s parodontózou"
    ],
    "correct": 1
  },
  {
    "id": 256,
    "question": "Který z uvedených nádorů má nejlepší prognózu?",
    "options": [
      "Karcinom tonzily",
      "Lymfoepiteliom nodohltanu",
      "Karcinom jazyka",
      "Karcinom rtu",
      "Karcinom jícnu"
    ],
    "correct": 3
  },
  {
    "id": 257,
    "question": "Pro rozlišením mezi intravitální enzymatickou tukovou nekrózou a posmrtným uvolněním trávicích enzymů je nejspolehlivějším znakem",
    "options": [
      "Rozpuštění tkáně",
      "Karyorhexis",
      "Přítomnost kalciových preparátů",
      "Přítomnost neutrofilů",
      "Převážné postižení exokrinní části pankreatu"
    ],
    "correct": 3
  },
  {
    "id": 258,
    "question": "Chronická pankreatitida",
    "options": [
      "≈ vysoká amyláza v séru",
      "≈ vysoká amyláza v moči",
      "≈ pseudocysty pankreatu",
      "≈ Balserovy nekózy",
      "≈ edém pankreatu"
    ],
    "correct": 2
  },
  {
    "id": 259,
    "question": "Pseudocysta pankreatu",
    "options": [
      "≈ vystlaná hlenotvorným epitelem",
      "≈ kongenitální anomálie spojená s cystickou fibrózou",
      "Má stěnu tvořenou vazivem, výstelka chybí",
      "Je získaný stav, predispozice je autosomálně dominantně dědičná",
      "Je neoplastického původu, vystlaná dyspalstickým epitelem"
    ],
    "correct": 2
  },
  {
    "id": 260,
    "question": "Co je nejméně typické pro pacienty s hyperplazií parathyroidedy?",
    "options": [
      "Chronická renální choroba s hyperfosfatémií",
      "Zvětšení několika parathyreoidálních žláz",
      "Zvětšení jední parathyreoidální žlázy s atrofií ostatních",
      "Mnohočetné nádory kostí",
      "Sekundární hyperparathyreoidismus"
    ],
    "correct": 2
  },
  {
    "id": 261,
    "question": "Toxické reakce na terapeitické použití kyslíku u nedonošených novorozenců jsou:",
    "options": [
      "Hyalinní membrány v plicích, retrolentální fibroplazie",
      "Atelektáza, bronchopneumonie",
      "Renální tubulární nekróza, nekrózy jaterního parenchymu",
      "Bronchopneuminie, edém mozku",
      "Nekróza jaterního parenchymu, karnifikace v plicích"
    ],
    "correct": 0
  },
  {
    "id": 262,
    "question": "Které období je nejtypičtější pro vznik fetálních malformací?",
    "options": [
      "12 hodin před a po koncepci",
      "První dva týdny gravidity",
      "První trimestr gravidity",
      "Druhý trimestr gravidity",
      "Třetí trimestr gravidity"
    ],
    "correct": 2
  },
  {
    "id": 263,
    "question": "Dítě (3 dny). Žloutenka, petechie, zvětšená játra a slezina, mikrocefalus. Pro co je stav typický?",
    "options": [
      "Dysrafický vývojový defekt",
      "Metabolické střádavé onemocnění, zejm. lipidózu",
      "Toxoplazmovou, cytmegalovirovou nebo herpesvirovou infekci matky",
      "Vývojovou anomálií ledvin spojenou s oligohydramnion",
      "Nezralost z jekékoliv příčiny"
    ],
    "correct": 2
  },
  {
    "id": 264,
    "question": "Maligní plicní nádor složený z malých okrouhlých buněk s úzkým lemem cytoplazmy",
    "options": [
      "Chirurgická léčba bývá úspěšná",
      "Má silný vztah ke kouření",
      "Zpravidlo vzniká u mladších jedinců, stejně často u mužů i žen",
      "Metastatický rozsev je vzácný",
      "Charakteristicky postihuje plicní periferii"
    ],
    "correct": 1
  },
  {
    "id": 265,
    "question": "S chronickou bronchitidou zpravidla nesouvisí",
    "options": [
      "Hypertrofie hlenových žlázek v bronších",
      "Produktivní kašel",
      "Hyalinní membrány",
      "Zvýšený odpor dýchacích cest",
      "Častě infekce"
    ],
    "correct": 2
  },
  {
    "id": 266,
    "question": "Tracheoezofageální píštěl se zpravidla klinicky projevuje",
    "options": [
      "Nijak – je asymtopmatická",
      "Jako cystický útvar supraklavikulárně",
      "Jako levopravý srdeční shut",
      "Žaludek je dilatovaný, obsahuje vzduch",
      "Postižené dítě polyká, ale stolice neodchází"
    ],
    "correct": 3
  },
  {
    "id": 267,
    "question": "Nedostatek α1-antitrypsinu je spojený s",
    "options": [
      "Adenomy jater, centroacinózními nekrózami jaterního parenchymu",
      "Centroacinárním nebo panacinárním emfyzémem, eozinofilními inkluzemi v hepatocytech",
      "Eozinofilními inkluzemi v hepatocytech",
      "Sníženou aktivitou trypsinu, kombinovanou hypovitaminózou",
      "Malabsorpčním syndromem, sníženou aktivitou trypsinu"
    ],
    "correct": 1
  },
  {
    "id": 268,
    "question": "Mikroskopický vzhled bronchopneumonie je",
    "options": [
      "Konsolidace celého plicního laloku",
      "Difúzní intersticiální infiltrace alveolárních přepážek",
      "Fokální nepravidelná zánětlivá infiltrace",
      "Segmentální konsolidace plicního laloku",
      "Velké množství intraalveolárních makrofágů"
    ],
    "correct": 2
  },
  {
    "id": 269,
    "question": "Postižení Mycoplasma pneimoniae lze nejlépe popsat jako",
    "options": [
      "Intersticiální zánět",
      "Fokální akutní hnisavý proces",
      "Konsolidaci celého plicního laloku",
      "Tvorbu abscesů",
      "Mnohočetné plicní granulomy"
    ],
    "correct": 0
  },
  {
    "id": 270,
    "question": "Co není charakteristické pro Goodpastureův syndrom?",
    "options": [
      "Krvavé sputum",
      "Renální selhání",
      "Nejčastější výskyt u dětí",
      "Proliferativní glomerulonefritis",
      "Tvorba protilátek proti bazální membráně glomerulů"
    ],
    "correct": 2
  },
  {
    "id": 271,
    "question": "Který znak je nejméně charakteristický pro čerstvý plicní infarkt",
    "options": [
      "Fibrinózní pleuritida",
      "Častější u pacientů se srdečním selháním",
      "Bledá barva ložiska",
      "Mají klínovitý tvar",
      "Mohou vést k akutní plisní hypertenzi"
    ],
    "correct": 2
  },
  {
    "id": 272,
    "question": "Podvyživený alkoholik (50) s těžkým zubním kazem. Stěžuje si na bolest vpravo na hrudníku a celkovou slabost.. Příznaky trvají 14 dní. Má zvýšenou teplotu a vykašlavá hojné sputum. RTG – tekutinou naplněné ložisko 2cm v horním laloku pravé plíce. Pravděpodobná dg.?",
    "options": [
      "Plicní absces",
      "Plicní infarkt",
      "Bronchiektázie",
      "Spinocelulární karcinom",
      "Atypická pneumonie"
    ],
    "correct": 0
  },
  {
    "id": 273,
    "question": "Vietnamec (40) má chronický kašel a noční poty. RTG hrudníku – apikálná infiltráty . Vyšeteni sputa negativní, transbronchiální biopsie – granulomy  s přítomnost obrovských buněk.  Dg.?",
    "options": [
      "Sarkoidóza",
      "Berylióza",
      "Tuberkulóza",
      "Obrovskobuněčný karcinom",
      "Pneumokoková pneumonie"
    ],
    "correct": 2
  },
  {
    "id": 274,
    "question": "„Kapiláry ve stěnách alveolů jsou dilatovány a přeplněnz erytrocyty, v alveolech přítomny četné makrofágy obsahující hemisiderin v cytoplasmě, je přítomno malé množství edémoné tekutiny a mírné fibrózní ztluštění sept…“ Popis nejlépe odpovídá:",
    "options": [
      "Těžké obustranné varixy dolních končetin",
      "Mitrální stenóza s chronickou dekompenzací",
      "Akutní bronchopneumonie",
      "Akutní infarkt myokardu",
      "Stádium červené hepatizace při krupúózní pneumonii"
    ],
    "correct": 1
  },
  {
    "id": 275,
    "question": "Co odpovídá bronchospazmu vyvolanému hypersenzitivní reakcí I.typu (IgE)",
    "options": [
      "Atopické (alergické) astma bronchiale",
      "Syndrom Hamman-Rich",
      "Bronchiektázie",
      "Pneumokonióza",
      "Bronchocentrická granulomatóza"
    ],
    "correct": 0
  },
  {
    "id": 276,
    "question": "Vakovité bronchiektázie zpravidla nesouvisejí s",
    "options": [
      "Sekundární amyloidózou",
      "Cor pulmonale chronicum",
      "Bronchogenním karcinomem",
      "Metastatickým abscesem mozku",
      "Chronickou sepsí"
    ],
    "correct": 2
  },
  {
    "id": 277,
    "question": "TBC bronchopneumonie se podle rozsahu ložisek od nejmenších po největší: miliární - ??? – nodózní – lobulární – lobární. Na místo ??? patří:",
    "options": [
      "Retikulární",
      "Bronchiolární",
      "Acinózní",
      "Mikroabscedující",
      "Disseminovaná"
    ],
    "correct": 2
  },
  {
    "id": 278,
    "question": "U deficience α1-antitrypsinu bývá postižení plic",
    "options": [
      "Centroacinózní emfyzém",
      "Panacinární emfyzém",
      "Intersticiální emfyzém",
      "Kompenzační emfyzém",
      "Bulózní emfyzém"
    ],
    "correct": 1
  },
  {
    "id": 279,
    "question": "Kryptorchizmus",
    "options": [
      "Je vždy bilaterální",
      "Je způsoben zpravidna infertilitou",
      "Varle je bolestivé",
      "Frekence nádorů varlete bývá zvýšená",
      "Je typický pro Klinefelterův syndrom"
    ],
    "correct": 3
  },
  {
    "id": 280,
    "question": "Co není charakteristické pro hyperplazii prostaty?",
    "options": [
      "Hematurie, bolestivost",
      "Periuretrální (centrální) lokalizace",
      "Je prekanceróza",
      "Infekce močového traktu",
      "Hypertrofie event. dilatace stěny močového měchýře"
    ],
    "correct": 2
  },
  {
    "id": 281,
    "question": "Kolik Barrových tělísek je zpravidla přtomno u osoby s klasickou formou Klinefelterova sy.?",
    "options": [
      "0",
      "1",
      "2",
      "3",
      "4"
    ],
    "correct": 1
  },
  {
    "id": 282,
    "question": "Akutní orchitis",
    "options": [
      "Je vždy oboustranná",
      "Může doprovázet infekční parotitis",
      "Zánět má granulomatózní charakter",
      "Chirurgická terapie je indikována",
      "Produkce hCG je zvýšená"
    ],
    "correct": 1
  },
  {
    "id": 283,
    "question": "Gynekomastie",
    "options": [
      "A seminom",
      "Bývá vždy oboustranná",
      "A Turnerův syndrom",
      "A Klinefelterův syndrom",
      "A jaterní cirhóza"
    ],
    "correct": 2
  },
  {
    "id": 284,
    "question": "Který z infekčních agens má vztah ke vzniku CIN (cervikální intraepiteliální neoplazie)?",
    "options": [
      "Mycoplasma hominis",
      "Chlamydia  trachomatis",
      "HPV (Human Papilloma Virus)",
      "Gardelella vaginalis",
      "Trichomonas vaginalis"
    ],
    "correct": 2
  },
  {
    "id": 285,
    "question": "Multipara(35), v prvním trimestru abnormálně zvětšená děloha a zvýšený hCG. Možná dg.?",
    "options": [
      "Hydatiformní mola, choriokarcinom",
      "Placenta accreta, hydatiformní mola, choriokarcinom",
      "Děložní leiomyomy",
      "Choriokarcinom",
      "Ektopická gravidita"
    ],
    "correct": 0
  },
  {
    "id": 286,
    "question": "Multipara(35), v prvním trimestru abnormálně zvětšená děloha a zvýšený hCG. Nebezpečnou komplikací může být?",
    "options": [
      "Těžká hyperplazie epitelu čípku děložního",
      "Placenta accreta",
      "Děložní leiomyomy",
      "Choriokarcinom",
      "Ektopická gravidita"
    ],
    "correct": 3
  },
  {
    "id": 287,
    "question": "Žena (28), abnormální cytologie, proto biopsie čípku děložního. V oblasti endocervixu byl nalezen pravidelný dlaždicový epitel, na povrchu i ve žlázkách. Dg.?",
    "options": [
      "Dlaždicová dysplazie",
      "Dlaždicová metaplazie",
      "Endocervikální atrofie",
      "Dlaždicová hyperplazie",
      "Endocervikální involuce"
    ],
    "correct": 1
  },
  {
    "id": 288,
    "question": "Nejdůležitější role PAP cytologického vyšetření je",
    "options": [
      "Screening asymtomatických pacientek pro možné preinvazivní nebo invazivní karcinomy čípku",
      "Potvrzení dg. Podezřelých afekcí čípku děložního",
      "Sledování a vyhodnocování vaginálních infekcí",
      "Vyhledávání maligních buněk pocházejících z nádorů uložených výše v genitálním traktu, které není možno vizualizovat prostou kolposkopií",
      "Vyhodnocovat fázi cyklu a endometriální hyperplazii či karcinom"
    ],
    "correct": 0
  },
  {
    "id": 289,
    "question": "Pro proliferační fázi endometria (časná až střední proliferace) není charakteristické",
    "options": [
      "Žlázky jsou úzké",
      "Ve žlázkách je sekret",
      "Epitel žlázek je mitoticky aktivní",
      "Endometriální stroma je mitoticky aktivní",
      "Sliznice je nízká"
    ],
    "correct": 1
  },
  {
    "id": 290,
    "question": "Ovula Nabothi",
    "options": [
      "≈ Gartnerovy vývody",
      "≈ fibroepiteliální polypy",
      "≈ endometrióza",
      "≈ dlaždiová metaplazie",
      "≈ hromadění keratinových šupin"
    ],
    "correct": 3
  },
  {
    "id": 291,
    "question": "Malé atrofické endometriální žlázky a výrazná pseudodeciduální reakce budou nejpravděpodobněji přítomny u",
    "options": [
      "Ženy v menopauze",
      "Arias-Stellovy reakce",
      "Nádoru z buněk granulózy v ovariu",
      "Progesteronové terapie",
      "Sekrečního endometria"
    ],
    "correct": 3
  },
  {
    "id": 292,
    "question": "Žena (20) zemřela při autonehodě. Při pitvě zjištěno, že její gonády mají testikulární charakter. Sekundární sexuální znaky jako u normální ženy. Karyotyp 46, XY. Jedná se o",
    "options": [
      "Turnerův syndrom",
      "Ženskou homosexualitu",
      "Ženský pseudohermafrotitizmus",
      "Mužský pseudohermafroditizmus",
      "Pravý hermafroditizmus"
    ],
    "correct": 3
  },
  {
    "id": 293,
    "question": "Kongenitální virilizmus s hyperplazií kůry nadledvin je výsledkem",
    "options": [
      "Produkce obnormálního ACTH",
      "Hormonální poruchy u matky v graviditě",
      "Sex chromozomální aberace",
      "Současné anencefalie",
      "Enzymatického defektu při tvorbě steroidů"
    ],
    "correct": 4
  },
  {
    "id": 294,
    "question": "Adenokarcinom endometria",
    "options": [
      "Při diagnóze se uplatňuje exfoliativní cytologie",
      "Vaginální krvácení bývá jen vzácně",
      "Výskyt má vztah k orálním kontraceptivům",
      "Důležitým prognostickým kritériem je mitotická aktivita",
      "Důležitým prognostickým kritériem je hloubka infiltrace děložní stěny"
    ],
    "correct": 4
  },
  {
    "id": 295,
    "question": "Trpaslík achondroplastický",
    "options": [
      "Bývá mentálně retardovaný",
      "Je způsoben genetickou poruchou enchondrální osifikace",
      "Souvisí s vrozenou poruchou mukopolysacharidů",
      "Patří mezi proporcionální poruchy růstu",
      "Je zvýšená fragilita kostí"
    ],
    "correct": 1
  },
  {
    "id": 296,
    "question": "Nádor, který se charakteristicky skládá z epiteloidní a vřetenobuněčné složky?",
    "options": [
      "Rhabdomyosarkom",
      "Synoviální sarkom",
      "Maligní melanom",
      "Liposarkom",
      "Maligní fibrózní histiocytom"
    ],
    "correct": 1
  },
  {
    "id": 297,
    "question": "Která z následujících terapií je sama o sobě nejúčinnější pří léčbě sarkomů?",
    "options": [
      "Chemoterapie",
      "Imunoterapie",
      "Široká excize do zdravé tkáně",
      "Radiační terapie",
      "Hormonální terapie"
    ],
    "correct": 2
  },
  {
    "id": 298,
    "question": "Které z následujících tvrzení není správné?",
    "options": [
      "Chování sarkomů je zpravidla určeno jejich nejméně diferencovanou složkou",
      "Sarkomy vznikají z mezodermu",
      "Maligní mezenchymální nádorny jsou častější než maligní nádory epiteliální",
      "Kaposiho sarkom může vzniknout i u pacientů, kteří nemají AIDS",
      "Non-Hodgkinské lymfomy bývají častější u pacientů s imunosupresí"
    ],
    "correct": 2
  },
  {
    "id": 299,
    "question": "Pacient umírá dva dny po protrahovaném hemorhagickém šoku. Pitevní nález neukáže:",
    "options": [
      "Fokální krvácení sliznice tlustého střeva",
      "Plicní edém",
      "Depleci lipidů v kůře nadledvin",
      "Nekrózu epitelu ledvinných tubutů",
      "Subependymální hematomy"
    ],
    "correct": 4
  },
  {
    "id": 300,
    "question": "Co je kompatibilní s hypovolemickým šokem?",
    "options": [
      "Generalizovaný edém a dušnost",
      "Horečka",
      "Bledá vlhká kůže",
      "Infekce grammnegativními mikroorganizmy",
      "Edém plic"
    ],
    "correct": 2
  },
  {
    "id": 301,
    "question": "Co nepatří mezi komplikace šoku?",
    "options": [
      "Gliom",
      "Nekrotizující enterokolitis",
      "Šoková plíce",
      "Akutní tubulární nekróza (ledvin)",
      "Hemorhagická nekróza kůry nadledvin"
    ],
    "correct": 0
  },
  {
    "id": 302,
    "question": "Muž (60) si stěžuje na námahovou bolest hrudníku. Poslední dobou několikrát zkolaboval. Systolický ejekční šelšst s propagací do karotidy. EKG – hypertrofie levé komory. Nejpravděpodobnější souvislost je?",
    "options": [
      "Infarkt myokardu",
      "Ztuštělá a zvápenatělá aortální chlopeň",
      "Mitrální chlopeň je ztluštělá, šlašinky jsou ztluštělé a srostlé",
      "Rozdíl mezi systolickým a diastolickým tlakem bude zvýšený",
      "Defekt mezikomorového septa"
    ],
    "correct": 1
  },
  {
    "id": 303,
    "question": "Která z následujících srdečních vad vede k rozvoji pozdní cyanózy?",
    "options": [
      "Fallotova tetralogie",
      "Malý defekt komorového septa",
      "Perzistující foramen ovale",
      "Dustus arteriosus patens",
      "Preduktální koarktace aorty"
    ],
    "correct": 3
  },
  {
    "id": 304,
    "question": "Pro mitrální stenózu je charakteristická",
    "options": [
      "Hypertrofie levé komory",
      "Dilatace levé komory",
      "Výrazná tepová vlna",
      "Dilatace levé předsíně",
      "Systémová hypertenze"
    ],
    "correct": 3
  },
  {
    "id": 305,
    "question": "Pacient (25), intermitentní teploty, a krevní kultury pozitivní na S.aureus, náhle vzniká plicní edém a srdeční selhání. Pravděpodobný důvod?",
    "options": [
      "Ruptura papilárního svalu",
      "Ruptura šlašinky",
      "Masivní plicní tromboembolizace",
      "Akutní revmatická horečka",
      "Systémový lupus erytematodes"
    ],
    "correct": 1
  },
  {
    "id": 306,
    "question": "Žena (55), námahová dušnost. Lehký plicní edém, nepravidelný pulz, dilatovaná levá předsíň, levá komora je normální. Pravděpodobně",
    "options": [
      "Postupně dojde k rozvoji plicní hypertenze",
      "Je zvýšené tiziko plicní tromembolizace",
      "Jená se o vrozenou srdeční vadu",
      "Je přítomna fibrilace komor",
      "Pitva by ve svalovoně prokázala dekolorované ložisko"
    ],
    "correct": 0
  },
  {
    "id": 307,
    "question": "Mezi součásti komplexu revmatické artritidy nepatří:",
    "options": [
      "Perikarditida",
      "Polyartritida",
      "Koplikovy skvrny",
      "Erytema marginatum",
      "Podkožní uzly"
    ],
    "correct": 2
  },
  {
    "id": 308,
    "question": "Muž (60) s koronární aterosklerózou má masivní akutní IM. Jaterní biopsie by ukázala?",
    "options": [
      "Centrilobulární nekrózy",
      "Zonální nekrózy",
      "Periportální nekrózy",
      "Panlobulární nekrózy",
      "Disperzní monocelulární nekrózy"
    ],
    "correct": 0
  },
  {
    "id": 309,
    "question": "Truncus arteriosus",
    "options": [
      "Nemocní přežívají ovbykle jen krátce",
      "Vede k rozvoji pozdní cyanózy",
      "Jde o perzistenci fetálního zkratu a.pulmonalis → aorta",
      "Je provázen hypertenzí v dolní polovině těla (adultní typ)",
      "Vede k tvorbě rozsáhlých kolaterál"
    ],
    "correct": 0
  },
  {
    "id": 310,
    "question": "Fallotova tetralogie: defekt komorového septa, dextropozice s nasedáním aorty nad defektem, hypeertrofie pravé komory a …",
    "options": [
      "Otevřený ductus arteriosus",
      "Anémie",
      "Stenóza plicní arterie",
      "Cyanóza omezená na dolní polovinu těla",
      "Defekt septa síní"
    ],
    "correct": 2
  },
  {
    "id": 311,
    "question": "Ductus arteriosus:",
    "options": [
      "Prenatálně je je směr toku z aorty do plicnice",
      "Perzistence duktu je časně cyanotická vada",
      "Perzistence je provázena hypertenzí v horní polovině těla (adultní typ)",
      "Normálně se uzavírá krátce před narozením",
      "Perzistence vede k rozvoji plicní hypertenze"
    ],
    "correct": 4
  },
  {
    "id": 312,
    "question": "Cor villosum",
    "options": [
      "Je následek srdeční tamponády",
      "Je následek virová hepatitidy",
      "Je časté u déle přežívajících IM",
      "Je časté při chronické endokarditidě",
      "Je druh fibrinózního zánětu"
    ],
    "correct": 4
  },
  {
    "id": 313,
    "question": "Co z následujícího neplatí o endokarditis lenta?",
    "options": [
      "Může vlíst k rozsáhlé tvordě trombů na srdečních chlopních",
      "Trvá měsíce až roky",
      "Na atrteriích mohou vznikat aneuryzmata",
      "Je nejčastější příčinou chlopeních vad",
      "Bývá doprovázena Loehleinovou nefritidou"
    ],
    "correct": 3
  },
  {
    "id": 314,
    "question": "Co z následujícího neplatí o difterická myokarditidě?",
    "options": [
      "Je následek účinku bakteriálního toxinu",
      "Jsou přítomny drobné abscesy v myokardu",
      "Je přítomna smíšená zánětlivá infiltrace myokardu",
      "Je přítomna myolýza až rozpad svalových buněk",
      "Je přítomna steatóza myokardu"
    ],
    "correct": 1
  },
  {
    "id": 315,
    "question": "Truncus brachiocephalicus",
    "options": [
      "Při této vadě bývá ductus arteriosus široce průchodný",
      "Odstupuje z aortálního oblouku",
      "Vede k objemovému přetížení pravé komory",
      "Je následek nesouměrných rozdělení truncus arteriosus communis",
      "Většina postižených umírá krátce po narození"
    ],
    "correct": 1
  },
  {
    "id": 316,
    "question": "Co může vést k izolované hypertrofii pravé srdeční komory?",
    "options": [
      "Kyfoskolióza",
      "Feochromocytom",
      "Glomerulonefritida",
      "Arterioskleróza",
      "Hyperaldosterinizmus"
    ],
    "correct": 0
  },
  {
    "id": 317,
    "question": "Cor villosum vzniká při zánětu",
    "options": [
      "Serózním",
      "Nehnisavém",
      "Hnisavém",
      "Fibrinózním",
      "Gangrenózním"
    ],
    "correct": 3
  },
  {
    "id": 318,
    "question": "Akutní selhání levé komory se projevuje",
    "options": [
      "Jícnovými varixy, ascitem a cyanózou",
      "Hemoperikardem",
      "Ascitem, otoky dolních končetin a hepar mochatum (muškátová játra)",
      "Edémem plic apřípadně hemoptýzou",
      "Krvácením do nadledvin"
    ],
    "correct": 3
  },
  {
    "id": 319,
    "question": "Onemocnění vyvolávající výraznou hyperplazii lymfoidní tkáně střev (Peyerských plaků):",
    "options": [
      "Celiakie",
      "Cholera",
      "Břišná tyfus",
      "Hirsprungova choroba",
      "Peutz-Jeghersův syndrom"
    ],
    "correct": 2
  },
  {
    "id": 320,
    "question": "Který z následujících polypů nejspíše maligně ztransformuje?",
    "options": [
      "Hyperplastický polyp",
      "Juvenilní polyp",
      "Peutz-Jeghrsonův polyp",
      "Tubulární adenom",
      "Vilózní adenom"
    ],
    "correct": 4
  },
  {
    "id": 321,
    "question": "Kojenec (18 měs.) afebrilní, poněkud podvyživený má stále častější epizody prudkého zvracení následujícího po jídle. Zvratky obsahují pouze potravu, nikoliv krev. Pravděpodobná dg.?",
    "options": [
      "Atrézii ilea",
      "Whippelovu chorobu",
      "Stenózu pyloru",
      "Zenkerův divertikl",
      "Syndrom Mallory-Weiss"
    ],
    "correct": 2
  },
  {
    "id": 322,
    "question": "Typický zánětlivý element při časných fázích infekce S.typhi je:",
    "options": [
      "Polymorfonukleární leukocyt",
      "Eozinofil",
      "Monocyt",
      "Obrovská mnohojaderná buňka",
      "Plazmatická buňka"
    ],
    "correct": 2
  },
  {
    "id": 323,
    "question": "Ve které z níže uveených dvojich chorob GIT je první choroba pravděpodobně fatálnější?",
    "options": [
      "Karcinom žaludku – karcinom kolon",
      "Tromboembolus do a.mesenterrca inf. – tromboembolus do a.mesenterica sup",
      "Hepatitis A – Hepatitis B",
      "Stafylokoková enterotoxikóza – pseudomembranózní enterokoliktis",
      "Léčená celiakie – léčená cystická fibróza pankreatu"
    ],
    "correct": 0
  },
  {
    "id": 324,
    "question": "Který z následujících stavů je nejčastějším následkem chronikého duodenálního vředu?",
    "options": [
      "Achlorhydrie",
      "Karcinom",
      "Peritonitis",
      "Obstrukce žlučových cest",
      "Melena"
    ],
    "correct": 4
  },
  {
    "id": 325,
    "question": "Chronická gastritida a peptický vřed…",
    "options": [
      "Enterobacter cloacae",
      "E. coli",
      "H. pylori",
      "K. pneumoniae",
      "Citrobacter freudii"
    ],
    "correct": 2
  },
  {
    "id": 326,
    "question": "Metastatické nádorové buňky v ovariu, které produkují hlen, pocházejí nejspíše z:",
    "options": [
      "Astrocytomu",
      "Endometriálního karcinomu",
      "Karcinomu děložního čípku",
      "Gastrointestinálního karcinomu",
      "Maligního melanomu"
    ],
    "correct": 3
  },
  {
    "id": 327,
    "question": "Hyperplastický střevní polyp",
    "options": [
      "Je charakteristický pro děti",
      "Je krytý metaplastickým dlaždicovým epitelem",
      "Je obvykle větší než 2 cm v průměru",
      "Přechod v adenokarcinom není pravděpodobný",
      "Zpravidla je zdrojem krvácení"
    ],
    "correct": 3
  },
  {
    "id": 328,
    "question": "Barret",
    "options": [
      "≈ jícen",
      "≈ žaludek",
      "≈ tenké střevo",
      "≈ tlusté střevo",
      "≈ rektum"
    ],
    "correct": 0
  },
  {
    "id": 329,
    "question": "Žena (32), rektální krvácení, četné polypy na sliznici kolon i rekta. Biopsie odpovídá tublárnímu adenomu. Dĺe izolována tumorózní hmota v sigmoideu, histologicky odpovídající invazivnímu adenokarcinomu. Které tvrzení není správné?",
    "options": [
      "Onemocnění je autozomálně dominantní",
      "Maligní transformace některých polypů je velmi častá po třetí dekádě",
      "Polypů může být přítomno i víc než tisíc",
      "Kompletní kolektomie je indikovaná",
      "Pacienta je nutno bedlivě sledovat a včas odstranit maligně se transformující polypy"
    ],
    "correct": 4
  },
  {
    "id": 330,
    "question": "Pro Whippelovu chorobu není charakteristické",
    "options": [
      "Ulcerace v tenkém střevě, hlavně v ileu",
      "Rozšíření a snížení střevních klků",
      "PAS-pozitivní makrofágy obsahující bakterie",
      "Sekundární malabsorpční syndrom",
      "Zvětšení mezenteriálních uzlin"
    ],
    "correct": 0
  },
  {
    "id": 331,
    "question": "Pseudomembranózní zánět tlustého střeva způsobuje?",
    "options": [
      "Clostridium Welchii",
      "Vibrio cholerae",
      "Shigella dysenteriae",
      "Crohnova choroba",
      "Helicobacter pylori"
    ],
    "correct": 2
  },
  {
    "id": 332,
    "question": "Mezi běžné komplikace žaludečního vředu nepatří?",
    "options": [
      "Perforace žaludeční stěny",
      "Penetrace vředu do pankreatu",
      "Deformace nebo stenóza žaludku",
      "Gastroschisis",
      "Krvácení"
    ],
    "correct": 3
  },
  {
    "id": 333,
    "question": "Co je pro colitis ulserosa nejtypičtější:",
    "options": [
      "Postihuje především tenké střevo",
      "Má pseudomembranózní charakter",
      "Vede k těžké dehydrataci",
      "Ve sliznici jsou přítomny kryptové abscesy",
      "Nezřídka dochází k perforaci střevní stěny za vzniku píštělí"
    ],
    "correct": 3
  },
  {
    "id": 334,
    "question": "Co je nejméně typické pro celiakální sprue:",
    "options": [
      "Projevuje se malabsorbcí",
      "Jsou snížené a rozšířené střevní klky",
      "Je způsobena alergií na gluten",
      "V enterocytech je deficit disacharidáz",
      "V buňkách jsou přítomny PAS-pozitivní bakterie"
    ],
    "correct": 4
  },
  {
    "id": 335,
    "question": "Muž (23) s perianálními píštělemi a častou obstrukcí střeva v oblasti distálního ilea má pravděpodobně",
    "options": [
      "Ulcerace souvisle postihující střevo od rekta až po distální ileum",
      "Intususcepci způsobenou juvenilním polypem",
      "Multifokální transmurální zánět střeva",
      "Mnohočetné adenomy tlustého střeva a anamnestický údaj o výskytu karcinomu tlustého střeva mezi rodinnými příslušníky",
      "Dlouhotrvající zácpy a chybění gangliových buněk ve stěně distálního rekta"
    ],
    "correct": 2
  },
  {
    "id": 336,
    "question": "Treitzova hernie je",
    "options": [
      "Intususcepce",
      "Nepravá hernie",
      "Nástěnná hernie",
      "Hernia mesocolica",
      "Infarzovaná hernie"
    ],
    "correct": 3
  },
  {
    "id": 337,
    "question": "Gastritis typu A postihuje",
    "options": [
      "Žaludeční fundus",
      "Pylorickou sliznici",
      "Sliznici celého žaludku",
      "Pylorickou sliznici s přechodem na sliznici duodena",
      "Sliznici celého žaludku a zpravidla i duodena"
    ],
    "correct": 0
  },
  {
    "id": 338,
    "question": "Svalová dystrofie Duchenne",
    "options": [
      "Je onemocnění zánětlivého původu",
      "Pseudohypertrofie lýtek je následek regenerace svalu",
      "Jedná se o autoimunitní onemocnění",
      "Porucha je na úrovni svalových buněk",
      "Porucha je na úrovni dolního motoneuronu"
    ],
    "correct": 3
  },
  {
    "id": 339,
    "question": "Muž (60) si stěžuje na diplopii. Fyzikální vyšetření – celková slabost svalstva, oboustranná ptóza. RTG – tumorózní hmota v předním mediastinu. Histologie tumoru pravděpodobně ukáže:",
    "options": [
      "Maligní dlaždicové buňky",
      "Benigní epiteliální buňky smíšené s lymfocyty",
      "Buňky Reed-Sternbergovy",
      "Zralou tkáň všch tří zárodečných listů",
      "Mezralé nádorové buňky"
    ],
    "correct": 1
  },
  {
    "id": 340,
    "question": "Chlapec (4) trpí progresivní svalovou slabostí postihující proximální svalové skupiny po dobu asi 6 měsíců. S-kreatinkináza je výrazně zvýšená. Jeho starší bratr (10) trpí podobnou chorobou; nyní je upoután na křeslo a na lýtcích má tukovou pseudohypertrofii. Pravděpodobná dg.?",
    "options": [
      "Duchenneova muskulární dystrofie",
      "Dermatomyositis",
      "Myastenia gravis",
      "Amyotrofická laterální skleróza",
      "Infantilní spinální svalová atrofie Werding-Hoffman"
    ],
    "correct": 0
  },
  {
    "id": 341,
    "question": "Typický znak kretenizmu je",
    "options": [
      "Zvětšený jazyk, široký nos",
      "Abnormální palmární a plantární rýhy",
      "Průjmy",
      "Hyperexcitabilita",
      "IQ průměrně 112"
    ],
    "correct": 0
  },
  {
    "id": 342,
    "question": "Riedelovu strumu charakterizuje následující tvrzení:",
    "options": [
      "Štítná žláza je nápadně tuhá",
      "Je tuberkulózního původu",
      "Jedná se o druh hnisavé thyreoiditidy",
      "Ve štítné žláze jsou přítomné mnohočetné adenomy",
      "Přítomny jsou četné obrovské buňky a granulomy"
    ],
    "correct": 0
  },
  {
    "id": 343,
    "question": "Co je nejméně charakteristické pro akutní zánět močového měchýře?",
    "options": [
      "Je častější u žen",
      "Vede ke zvýšenému výskytu uroteliálního karcinomu",
      "Nejčastěji je způsoben E.coli",
      "Bývá přítomno značné překrvení sliznice",
      "Může být způsoben terapií cytostatiky"
    ],
    "correct": 1
  },
  {
    "id": 344,
    "question": "Avitaminózy B2 (riboflavin) se projevuju jako",
    "options": [
      "Poruchy syntézy kolagenu spojené s krvácením",
      "Beri-beri",
      "Pfrynoderma (nadměrná keratinizace laždicového epitelu)",
      "Neuroanemický syndrom",
      "Anguli infectiosi oris (cheilóza)"
    ],
    "correct": 4
  },
  {
    "id": 345,
    "question": "Deficit niacinu je spojen s",
    "options": [
      "Noční slepotou",
      "Hemorhagickou diatézou",
      "Poruchou syntézy vaziva",
      "Neuromuskulárními a srdečními poruchami a edémy",
      "Dermatitidou, diarheou a demencí"
    ],
    "correct": 4
  },
  {
    "id": 346,
    "question": "Která z následujících substancí je důležitá pro usmrcení bakterií v lyzosomech?",
    "options": [
      "Aktivní kyslíkové metabolity",
      "Komplement",
      "Opsonin",
      "Protilátky",
      "Prostaglandiny"
    ],
    "correct": 0
  },
  {
    "id": 347,
    "question": "Toxoplazmóza se v dospělosti nejčastěji projevuje jako",
    "options": [
      "Chorioretinitida",
      "Mnohočetné pseudocysty v CNS",
      "Granulomatózní záněty jater",
      "Zduření krčních lymfatických uzlin",
      "Atypická intersticiální pneumonie"
    ],
    "correct": 3
  },
  {
    "id": 348,
    "question": "Slezina při sepsi bude",
    "options": [
      "Zmenšená, tuhá, s B reakcí, v sinech budou neutrofily",
      "Zvětšená, tuhá, tmavě červeně zbarvená, v sinech budou neutrofily, periplenitis pseudocartilaginea",
      "Zvětšená, měkká, v sinech budou neutrofily, lymfatické folikuly budou hyperplastické",
      "Tuhá, s aktivací Kupfferových buněk, neutrofily v sinech, zpravidla mírně zvětšená",
      "Výrazně zvětšená, s četnými infarkty, na pouzdře fibrinózná nálet"
    ],
    "correct": 2
  },
  {
    "id": 349,
    "question": "Mezi stafylokokové infekce nepatří",
    "options": [
      "Furunkl",
      "Pemphigus neonati",
      "Spála",
      "Pseudomembranózní enterokolitida",
      "Panaritium"
    ],
    "correct": 2
  },
  {
    "id": 350,
    "question": "U pacienta s rozsáhlými popáleninami je nejpravděpodobněji infekce vyvolána…",
    "options": [
      "Campylobacter fetus",
      "Clostridium difficile",
      "Listeria monocytogenes",
      "Neisseria meningitidis",
      "Pseudomonas aeruginosa"
    ],
    "correct": 4
  },
  {
    "id": 351,
    "question": "Histologický rys, který identifikuje zánět jako hnisavý, je:",
    "options": [
      "Přítomnost obrovských buněk",
      "Odumřelé nebo odumírající neutrofily",
      "Tvorba lymfatických folikulů",
      "Vrůstání kapilár do zánětlivého ložiska",
      "Exsudace fibrinu"
    ],
    "correct": 1
  },
  {
    "id": 352,
    "question": "U kterého ze zánětů je nález nekrózy nejméně pravděpodobný?",
    "options": [
      "Granulomatózního",
      "Hnisavého",
      "Pseudomembranózního",
      "Katarálního",
      "Erozivního"
    ],
    "correct": 3
  },
  {
    "id": 353,
    "question": "Která z trojic názvů zánětů pochází z různých orgánových systémů?",
    "options": [
      "Iridocyclitis, keratitis, conjunctivitis",
      "Bursitis, gastritis, cystitis",
      "Stomatitis, cheilitis, cystitis",
      "Stomatitis, encephalitis, sialadenitis",
      "Pyelitis, cystitis, ureteritis"
    ],
    "correct": 1
  },
  {
    "id": 354,
    "question": "Chlapec (6) přijat na JIP. Puls stěží hmatný, tachykardie, rozsáhlé ekchymózy, známky DIC. Onemocnění začalo 6 hodin před přijetím. Úmrtí hodinu po přijetí. Pravděpodobný patogen?",
    "options": [
      "Streptokoky B skupiny",
      "N.meningitidis",
      "S.aureus",
      "S.bovis",
      "S.pneumoniae"
    ],
    "correct": 1
  },
  {
    "id": 355,
    "question": "Aby bylo možno zánět označit jako hnisavý, musí obsahovat",
    "options": [
      "Granulační tkáň",
      "Krystaly cholesterolu",
      "Obrovské vícejaderné buňky",
      "Rozpadlé nebo zanikající neutrofily",
      "Lymfocyty"
    ],
    "correct": 3
  },
  {
    "id": 356,
    "question": "Infekce Mycobacterium tuberculosis je možná díky",
    "options": [
      "Afinitě mykobakterií k endotelu kapilár",
      "Motilitě mykobakterií",
      "Produkovanému endotoxinu",
      "Produkovanému exotoxinu",
      "Množení mykobakterií v cytoplazmě makrofágů"
    ],
    "correct": 4
  },
  {
    "id": 357,
    "question": "Muž (45), inzulín-dependentní DM, bolesti v krku. Bělavé, snadno odstranitelné povlaky na sliznici faryngu. Dg.:",
    "options": [
      "Difterie",
      "Leukolakie",
      "Toxoplazmóza",
      "Kandidóza",
      "Infekce Pneumocystis carinii"
    ],
    "correct": 3
  },
  {
    "id": 358,
    "question": "Toxická granulace znamená",
    "options": [
      "Zvětšení primárních granul v neutrofilech",
      "Změny ve vlasech a nehtech způsobené otravou arzenem",
      "Nadměrná tvorba tkáně složené z fibroblastů a kapilár jako reakce na přetrvávající infekci v ráně",
      "Odpověď melanocytů na nadměrné ozáření UV",
      "Sekundární imunitní reakce při TBC…"
    ],
    "correct": 0
  },
  {
    "id": 359,
    "question": "Dětský typ TBC",
    "options": [
      "Dominuje porogenní šíření",
      "Zvýšená hladina protilátek",
      "Typické jsou nekaseifikující granulomy",
      "Těžké formy vedou k pneumonia alba",
      "Jedna z forem je skrofulóza"
    ],
    "correct": 4
  },
  {
    "id": 360,
    "question": "Granulomatózní zánět nesouvisí s",
    "options": [
      "Aktivovanýmy makrofágy",
      "Zvýšenou hladinou protilátek",
      "Bakteriálními lipidy",
      "Nerozpustnými materiály",
      "T lymfocyty"
    ],
    "correct": 1
  },
  {
    "id": 361,
    "question": "Weilova nemoc",
    "options": [
      "Ikterus, meningitida",
      "Meningitida, pneumonie",
      "Myozitida, ikterus",
      "Pneumonie, meningitida",
      "Masivní průjmy, ikterus"
    ],
    "correct": 0
  },
  {
    "id": 362,
    "question": "Nemoc Brill-Zinserova je",
    "options": [
      "TBC lymfadenitida krčních uzlin",
      "Typ maligního non-Hodgkinského lymfomu",
      "Forma thorakální aktinomykózy",
      "Chronická forma skvrnitého tyfu",
      "Druh kořní retikulózy dětského věku"
    ],
    "correct": 3
  },
  {
    "id": 363,
    "question": "Ascaridosis je způsoben",
    "options": [
      "Roupem",
      "Škrkavkou",
      "Motolicí",
      "Klíštětem",
      "Plísní"
    ],
    "correct": 1
  },
  {
    "id": 364,
    "question": "Krupózní pneumonie není zpravidla provázena",
    "options": [
      "Pleuritidou",
      "Bronchtidou",
      "Exsudací fibrinu",
      "Exsudací neutrofilů",
      "Karnifikací [básník asi chce naznačit, že zhojení ad integrum je častější…]"
    ],
    "correct": 1
  },
  {
    "id": 365,
    "question": "Ameloblastom",
    "options": [
      "Patří mezi vysoce maligní non-Hodgkinské lymfomy",
      "Je to maligní melanom s blokádou vyzrávání pigmentu",
      "Postihuje čelisti",
      "≈ smíšený tumor štítné žlázy",
      "Postihuje ovaria dětí do 10 let"
    ],
    "correct": 2
  },
  {
    "id": 366,
    "question": "Co neplatí o adenokarcinomu pankreatu?",
    "options": [
      "Postihuje častěji kaudu",
      "Prognóza je velmi špatná",
      "Žloutenka je častá",
      "Bývá přítomna doprovodná migrující tromboflebitida",
      "Nádorové buňky produkují hlen"
    ],
    "correct": 0
  },
  {
    "id": 367,
    "question": "Žena (46) má náhlý záchvat bolesti břicha, zvrací, přechází do šoku. Hladiny lipázy je zvýšená. Co z následujícího má vztah ke stanovení dg.?",
    "options": [
      "Epilepsie v anamnéze",
      "Operace pro atrezii ilea v dětství",
      "Před 10 lety stanovena dg. colitis ulcerosa",
      "Rodinná oslava předchozí večer",
      "Rodinná anamnéza s výskytem DM a ICHS"
    ],
    "correct": 3
  },
  {
    "id": 368,
    "question": "Mezi možné příčiny malabsonbce nepatří",
    "options": [
      "Celiakie",
      "Crohnova choroba",
      "Chronická pankreatitida",
      "Mukoviscidóza",
      "Chronická gastritida"
    ],
    "correct": 4
  },
  {
    "id": 369,
    "question": "V H-E preparátech se tukové vakuoly jeví opticky prázdné, protože…",
    "options": [
      "Tuk se nepřibarvuje",
      "Tuk byl odstraněn při fixaci",
      "Tuk byl z tkáně odstraněn při přípravě parafinového bločku",
      "Tuk je rozpustný v barvicím roztoku",
      "Tuk je hydrofobní a hydrofilními barvivy se nebarví"
    ],
    "correct": 2
  },
  {
    "id": 370,
    "question": "Při barvení H-E se bude dystrofická kalcifikace barvit",
    "options": [
      "Téměř bíle",
      "Šedofialově",
      "Hnědě až černě",
      "Nebude se barvit",
      "Bude se barvit jen v kryo"
    ],
    "correct": 1
  },
  {
    "id": 371,
    "question": "Při barvení H-E se jádra lymfocytů barví",
    "options": [
      "Tmavě modře, jsou bazofilní",
      "Světle modře, glykogen je častečně vyplaven",
      "Sytě oranžově",
      "Vůbec",
      "Jemně růžově"
    ],
    "correct": 0
  },
  {
    "id": 372,
    "question": "K osteoporóze starších žen nemá vztah",
    "options": [
      "Fraktura krčku stehenní kosti",
      "Kyfóza",
      "Fraktura obratlů",
      "Pagetova choroba",
      "Chronické bolesti"
    ],
    "correct": 3
  },
  {
    "id": 373,
    "question": "Nejčastější maligní tumor postihující kosti je",
    "options": [
      "Obrovskobuněčný kostní nádor",
      "Metastazující karcinom",
      "Osteochondrom",
      "Osteosarkom",
      "Synoviální sarkom"
    ],
    "correct": 1
  },
  {
    "id": 374,
    "question": "Osteomalacie nesouvisí s",
    "options": [
      "Chronickou renální insuficiencí",
      "Znehybněním kostí",
      "Malabsorpčnímy stavy",
      "Křivicí",
      "Deficitem vit.D"
    ],
    "correct": 1
  },
  {
    "id": 375,
    "question": "Chlapec (12) má bolesti a otok DK. RTG –Codmanův trojúhelník. Nejpravděpodobnější dg.?",
    "options": [
      "Chondrosarkom",
      "Osteomyelitida",
      "Osteosarkom",
      "Mnohočetný myelom",
      "Aneuryzmatická kostní cysta"
    ],
    "correct": 2
  },
  {
    "id": 376,
    "question": "Muž (25), bolest v dolní části zad a 6 měsíců trvající problémy s chůzí, je citlivý v dolní části zad, má zarudlé spojivky, na tvrdém patře nebolestivý vřed a několik šupinatých lézí na ploskách nohou. Dg.?",
    "options": [
      "Ankylózní spondylitida",
      "Revmatiodní artritida",
      "Systémový lupus etytematodes",
      "Kawasakiho choroba",
      "Reiterova choroba"
    ],
    "correct": 4
  },
  {
    "id": 377,
    "question": "Vyberte správné tvrzení týkající se osteomyelitidy",
    "options": [
      "Sekvestr je nektorická kortikalis a involukrum je periostální reaktivní kost",
      "Sekvestr je nektorická kortikalis a involukrum je infekční nidus kostní dřeně",
      "Sekvestr je  periostální reaktivní kost a involukrum je nektorická kortikalis",
      "Sekvestr je sekvestrovaný infekční nidus kostní dřeně a involukrum je nekrotická kortikalis",
      "Sekvestr je sekvestrovaný infekční nidus kostní dřeně a involukrum je periostální reaktivní kost"
    ],
    "correct": 0
  },
  {
    "id": 378,
    "question": "Co z následujícího je nejtypičtější pro revmatoidní artritidu?",
    "options": [
      "Depozita kyseliny močové v kloubní dutině",
      "Depozita kalciových solí v kloubní dutině",
      "Plazmocytární a lymfocytární infltrace synovie",
      "Antinukleární protilátky v séru",
      "Degenerace chrupavky, praskliny a tvorba cyst pod chrupavkou"
    ],
    "correct": 2
  },
  {
    "id": 379,
    "question": "Heberdenovy uzly",
    "options": [
      "Vyskytují se podél páteře",
      "Jsou patrné pouze na RTG",
      "Jsou podmíněny fibrinoidní nekrózou",
      "Vyskytují se na žebrech po prodělané rachitis",
      "Jsou podmíněny osteofyty"
    ],
    "correct": 4
  },
  {
    "id": 380,
    "question": "Co je pravdivé tvrzení o procesu charakterizovaném kvantitativní ztrátou kostní tkáně se ztenčením kostních trabekul?",
    "options": [
      "Nastává při nedostatku vit.D",
      "Vyskytuje se ve hlavici femuru u mladších jediců",
      "Chrupavka bývá zpravidla tmavá",
      "Proces se nazývá osteoporóza",
      "Jedná se o maligní proces postihující mladší jedince"
    ],
    "correct": 3
  },
  {
    "id": 381,
    "question": "Epifyzální léze produkující chrupavku u 20 letého muže je pravděpodobně",
    "options": [
      "Chondroblastom",
      "Chondrom",
      "Chondrosarkom",
      "Obrovskobuněčný kostní nádor",
      "Osteosarkom"
    ],
    "correct": 0
  },
  {
    "id": 382,
    "question": "Spondylosis deformans je",
    "options": [
      "Forma rachitis",
      "Forma revmatického onemocnění",
      "Bechtěrevova choroba",
      "Artróza lokalizované na obratlích",
      "Následek výhřezu nucleus pulposum"
    ],
    "correct": 3
  },
  {
    "id": 383,
    "question": "Muž (60) má pancytopenii, splenomegalii. Biopsie kostní dřeně – infiltrace lymfoidními elementy, tartarát-rezistentní kyselá fosfatáza pozitivní. U některých buněk vláknité výběžky (EM).",
    "options": [
      "Akutní lymfoblastická leukémie",
      "Hairy cell leukémie",
      "Hodgkinova choroba",
      "Mycosis fungoides",
      "m. Letterer-Siwe"
    ],
    "correct": 1
  },
  {
    "id": 384,
    "question": "Dívka (13) má bolesti hlavy a diabetes insipidus. TGR baze lební – ostelytické ložisko. Biopsie – směs lymfocytů, eozinofilů, obrovských mnohojaderných buněk, histiocytů. S-100 pozitivní.",
    "options": [
      "Průběh je obvykle rychlý a fatální",
      "Průběh choroby je agresivnější u starších pacientů",
      "V séru bude patologický monoklonální IgG",
      "Kostní dřeň bude pravděpodobně infiltrována blastickými elementy",
      "Histiocytární elementy budou mít v plazmě Bierbeckova granula"
    ],
    "correct": 4
  },
  {
    "id": 385,
    "question": "Pro který stav je abnormální první a normální druhá část Schillingova testu?",
    "options": [
      "Perniciózní anémie",
      "Malabsorpce v ileu",
      "Syndrom slepé kličky",
      "Střevní paraziti",
      "Karcinom céka"
    ],
    "correct": 0
  },
  {
    "id": 386,
    "question": "Hereditární sférocytóza",
    "options": [
      "≈ délka života erytrocytů je normální",
      "≈ osmotická fragilita erytrocytů je zvýšená",
      "≈ proti erytrocytům se tvoří protilátky",
      "≈ erytrocyty jsou zvýšeně senzitivní na komplement",
      "≈ hladina konjugovaného bilirubinu v séru je vyšší než hladina nekonjugovaného"
    ],
    "correct": 1
  },
  {
    "id": 387,
    "question": "Žena (40) má teplotu, příznaky postižení CNS a sníženou tvornu moči. Trombocytopenie, fragmentace erytrocytů, koagulace v normě(PT a PTT). Pravděpodobná dg.?",
    "options": [
      "DIC",
      "Infekční mononukleóza",
      "Imunitní trombocytopenická purpura",
      "Trombotická trombocytopenická purpura",
      "von Willebrandtova choroba"
    ],
    "correct": 3
  },
  {
    "id": 388,
    "question": "Trombocytopenie nebývá vyvolány",
    "options": [
      "Grawitzovýn karcinomem ledvin",
      "Myelofbrózou",
      "Akutní leukémií",
      "Výraznou splenomegalií",
      "Některými léky (metothrexan)"
    ],
    "correct": 0
  },
  {
    "id": 389,
    "question": "U polycyteamia vera nebývá",
    "options": [
      "Vysoký počet krevních destiček",
      "Vysoký hematokrit",
      "Vysoká hladina Epo",
      "Zvýšená pravděpodobnost IM",
      "Akrální cyanóza"
    ],
    "correct": 2
  },
  {
    "id": 390,
    "question": "Filadelfský chromozom je přítomen u",
    "options": [
      "Centrocytárních lymfomů",
      "Burkittova lymfomu",
      "Downova syndromu",
      "Hairy cell leukémie",
      "Chronické myeloidní leukémie"
    ],
    "correct": 4
  },
  {
    "id": 391,
    "question": "Zvýšená viskozita krve nebývá u",
    "options": [
      "Polycytaemia vera",
      "Myelomu",
      "Chronické ztráty krve",
      "Waldenströmovy makroglobulinémie",
      "Dehydratace"
    ],
    "correct": 2
  },
  {
    "id": 392,
    "question": "U kterého stavu bývá slezina zmenšená?",
    "options": [
      "Myelofibróza",
      "Srpkovitá anémie",
      "Infekční mononukleóza",
      "Chronická myeloidní leukémie",
      "Thalasemia major"
    ],
    "correct": 1
  },
  {
    "id": 393,
    "question": "Splenektomie zvyšuje riziko vzniku",
    "options": [
      "Hodgkinovy choroby",
      "Idiopatické trombocytopenické purpury",
      "Myeloidní metaplazie",
      "Pneumokokové infekce",
      "Polycytaemia vera"
    ],
    "correct": 3
  },
  {
    "id": 394,
    "question": "Muž (72). Anizocytóza a poikilocytóza. Zvýšený průměrný objem erytrocytů, hzpersegmentovaná jádra neutrofilů. Pravděpodobná dg.:",
    "options": [
      "Hypoplazie kostní dřeně",
      "Perniciózní anémie",
      "Srpkovitá anémie",
      "thalasemie",
      "Anémie spojená s chronickou renální chorobou"
    ],
    "correct": 1
  },
  {
    "id": 395,
    "question": "Pacient (49), delirium tremens. Je anemický, zvýšená objem erytrocytů, větší obsah hemoglobinu v erytrocytech. Pravděpodobnou příčinou anémie je chybění",
    "options": [
      "Vitamínu C",
      "Kyseliny listové",
      "Vitamínu D",
      "Vitamínu K",
      "Niacinu"
    ],
    "correct": 1
  },
  {
    "id": 396,
    "question": "Při DIC je časté krvácení, protože…",
    "options": [
      "Dochází k urychlené spotřebe a vyčerpání koagulačních faktorů",
      "Dochází k tvorbě protilátek proti trombocytům",
      "Bývá přítomna hyperémie sleziny a trombocytóza",
      "Produkce fibrinogenu je zvýšená",
      "Došlo k průniku lipidů kostní dřeně do oběhu"
    ],
    "correct": 0
  },
  {
    "id": 397,
    "question": "Které spojení není správné?",
    "options": [
      "Anémie ≈ snížený objem krve",
      "Makrocytární anémie ≈ erytrocyty jsou větší než norma",
      "Poikilocytóza ≈ zvýšené kolísání velikosti erytrocytů",
      "Lymfocytopenie ≈ snížení počtu lymfocytů v krvi",
      "Posun do leva ≈ zvýšené množství nezralých neutrofilů v krvi"
    ],
    "correct": 0
  },
  {
    "id": 398,
    "question": "Který znak není charakteristický pro perniciózní anémii?",
    "options": [
      "Familiární výskyt",
      "Hunterova glositida",
      "Demyelinizace zadních provazců",
      "Zbytky jádra v erytrocytech",
      "Výskyt megaloblastů v kostní dřeni"
    ],
    "correct": 3
  },
  {
    "id": 399,
    "question": "Perforující poranění oka vede často k…",
    "options": [
      "Retrolentární fibroplazii",
      "Primárnímu glaukomu",
      "Kataraktě",
      "Sympatické oftalmii",
      "Zelenému zákalu"
    ],
    "correct": 3
  },
  {
    "id": 400,
    "question": "Trachom je způsoben",
    "options": [
      "Chlamydiemi",
      "Viry",
      "Mykózou",
      "Prvoky",
      "Autoimunitní reakcí"
    ],
    "correct": 0
  },
  {
    "id": 401,
    "question": "Které tvrzení neplatí o glandula pinealis?",
    "options": [
      "S věkem kalcifikuje",
      "Nejčastější typ adenomu produkuje prolaktin",
      "Pinealoblastomy jsou vysove maligní",
      "Může být místemvzniku primárního seminomu",
      "Produkuje melatonin"
    ],
    "correct": 1
  }
];

window.PATHOLOGY_ZAPOCET_QUESTIONS = PATHOLOGY_ZAPOCET_QUESTIONS;
console.log("Pathology zapocet questions loaded:", window.PATHOLOGY_ZAPOCET_QUESTIONS.length);
