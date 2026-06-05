// data_patfyz_bridge.js - Most pro načítání zkouškových otázek a kvízů z Patofyziologie
const PATFYZ_EXAM_QUESTIONS = [
  {
    "id": "pf-gen-1",
    "category": "Obecná patofyziologie",
    "title": "Definice nemoci a zdraví - pojmy: etiologie, patogeneze, etiopatogeneze, symptom, syndrom. Průběh a zakončení nemocí. Iatrogenita. Psychosomatika.",
    "organSystem": "Ostatní / Systémové procesy"
  },
  {
    "id": "pf-gen-2",
    "category": "Obecná patofyziologie",
    "title": "Ateroskleróza. Poruchy metabolismu lipidů - etiopatogeneze, akutní a chronické komplikace, následky.",
    "organSystem": "Ostatní / Systémové procesy"
  },
  {
    "id": "pf-gen-3",
    "category": "Obecná patofyziologie",
    "title": "Poruchy bilance kalia (K+) - etiopatogeneze, následky.",
    "organSystem": "Ostatní / Systémové procesy"
  },
  {
    "id": "pf-gen-4",
    "category": "Obecná patofyziologie",
    "title": "Trombóza - rozdělení a příklady, projevy, následky.",
    "organSystem": "Kardiovaskulární systém"
  },
  {
    "id": "pf-gen-5",
    "category": "Obecná patofyziologie",
    "title": "Hypovolemický šok. Hemoragický šok-etiopatogeneze a následky.",
    "organSystem": "Ostatní / Systémové procesy"
  },
  {
    "id": "pf-gen-6",
    "category": "Obecná patofyziologie",
    "title": "Stres a všeobecný adaptační syndrom - charakteristika, fáze, etiopatogeneze.",
    "organSystem": "Ostatní / Systémové procesy"
  },
  {
    "id": "pf-gen-7",
    "category": "Obecná patofyziologie",
    "title": "Vliv celkové a částečné imobilizace.",
    "organSystem": "Ostatní / Systémové procesy"
  },
  {
    "id": "pf-gen-8",
    "category": "Obecná patofyziologie",
    "title": "Systémová zánětlivá odpověď- etiopatogeneze, následky.",
    "organSystem": "Ostatní / Systémové procesy"
  },
  {
    "id": "pf-gen-9",
    "category": "Obecná patofyziologie",
    "title": "Nespecifický a specifický imunitní systém - poruchy funkce, principy.",
    "organSystem": "Ostatní / Systémové procesy"
  },
  {
    "id": "pf-gen-10",
    "category": "Obecná patofyziologie",
    "title": "Imunopatologické reakce - rozdělení, etiopatogeneze. Principy autoimunitních reakcí - mechanizmy. Atopie. Imunotolerance.",
    "organSystem": "Ostatní / Systémové procesy"
  },
  {
    "id": "pf-gen-11",
    "category": "Obecná patofyziologie",
    "title": "Poškození vlivem fyzikálních vlivů - chlad, teplo, el. proudu, elektromagnetické a ionizující záření.",
    "organSystem": "Ostatní / Systémové procesy"
  },
  {
    "id": "pf-gen-12",
    "category": "Obecná patofyziologie",
    "title": "Embolie - rozdělení. Plicní embolie - etiopatogeneze, projevy, následky. Periferní a paradoxní embolie.",
    "organSystem": "Respirační systém"
  },
  {
    "id": "pf-gen-13",
    "category": "Obecná patofyziologie",
    "title": "Poruchy acidobazické rovnováhy - klasifikace poruch, kompenzace a korekce, příčiny a následky. Příčiny smrti při poruchách acidobazické rovnováhy.",
    "organSystem": "Ostatní / Systémové procesy"
  },
  {
    "id": "pf-gen-14",
    "category": "Obecná patofyziologie",
    "title": "Diseminovaná intravaskulární koagulace (DIC) - etiopatogeneze, projevy, následky.",
    "organSystem": "Hematologie"
  },
  {
    "id": "pf-gen-15",
    "category": "Obecná patofyziologie",
    "title": "Kardiogenní a obstrukční šok - etiopatogeneze a následky.",
    "organSystem": "Kardiovaskulární systém"
  },
  {
    "id": "pf-gen-16",
    "category": "Obecná patofyziologie",
    "title": "Dehydratace - etiopatogeneze, následky.",
    "organSystem": "Ostatní / Systémové procesy"
  },
  {
    "id": "pf-gen-17",
    "category": "Obecná patofyziologie",
    "title": "Reaktivní kyslíkové a dusíkové sloučeniny - role za fyziologického stavu a v patogenezi nemocí. Ischemicko-reperfúzní syndrom - etiopatogeneze, příklady.",
    "organSystem": "Respirační systém"
  },
  {
    "id": "pf-gen-18",
    "category": "Obecná patofyziologie",
    "title": "Hyperhydratace - etiopatogeneze, následky.",
    "organSystem": "Ostatní / Systémové procesy"
  },
  {
    "id": "pf-gen-19",
    "category": "Obecná patofyziologie",
    "title": "Obezita - etiopatogeneze, následky, role v patogenezi nemocí.",
    "organSystem": "Ostatní / Systémové procesy"
  },
  {
    "id": "pf-gen-20",
    "category": "Obecná patofyziologie",
    "title": "Šok-definice, etiopatogeneze, rozdělení.",
    "organSystem": "Ostatní / Systémové procesy"
  },
  {
    "id": "pf-gen-21",
    "category": "Obecná patofyziologie",
    "title": "Poškození a smrt buňky - reversibilní a ireversibilní, nekróza, apoptóza, autofagie.",
    "organSystem": "Ostatní / Systémové procesy"
  },
  {
    "id": "pf-gen-22",
    "category": "Obecná patofyziologie",
    "title": "Horečka - etiopatogeneze, průběh (fáze) horečky, pozitivní a negativní vliv horečky na organismus.",
    "organSystem": "Ostatní / Systémové procesy"
  },
  {
    "id": "pf-gen-23",
    "category": "Obecná patofyziologie",
    "title": "Nádorové bujení - teorie vzniku nádorů, růst nádoru, tvorba metastáz, příčiny smrti u nádorových onemocnění, nádorové markery, paraneoplastický syndrom.",
    "organSystem": "Ostatní / Systémové procesy"
  },
  {
    "id": "pf-gen-24",
    "category": "Obecná patofyziologie",
    "title": "Malnutrice - etiopatogeneze, následky, role v patogenezi nemocí.",
    "organSystem": "Ostatní / Systémové procesy"
  },
  {
    "id": "pf-gen-25",
    "category": "Obecná patofyziologie",
    "title": "Hypoxie a hyperoxie buňky - příčiny, adaptace, následky.",
    "organSystem": "Ostatní / Systémové procesy"
  },
  {
    "id": "pf-gen-26",
    "category": "Obecná patofyziologie",
    "title": "Edém - rozdělení, etiopatogeneze, klinická manifestace, následky.",
    "organSystem": "Ostatní / Systémové procesy"
  },
  {
    "id": "pf-gen-27",
    "category": "Obecná patofyziologie",
    "title": "Poruchy růstu. Poruchy puberty. Stárnutí a smrt organismu.",
    "organSystem": "Ostatní / Systémové procesy"
  },
  {
    "id": "pf-gen-28",
    "category": "Obecná patofyziologie",
    "title": "Respirační acidóza a alkalóza - etiopatogeneze, následky.",
    "organSystem": "Respirační systém"
  },
  {
    "id": "pf-gen-29",
    "category": "Obecná patofyziologie",
    "title": "Metabolická acidóza a alkalóza - etiopatogeneze, následky.",
    "organSystem": "Ostatní / Systémové procesy"
  },
  {
    "id": "pf-gen-30",
    "category": "Obecná patofyziologie",
    "title": "Bolest - etiopatogeneze, klasifikace, poruchy vnímání bolesti, principy farmakologického ovlivnění.",
    "organSystem": "Ostatní / Systémové procesy"
  },
  {
    "id": "pf-gen-31",
    "category": "Obecná patofyziologie",
    "title": "Dušnost - rozdělení, etiopatogeneze, následky.",
    "organSystem": "Ostatní / Systémové procesy"
  },
  {
    "id": "pf-gen-32",
    "category": "Obecná patofyziologie",
    "title": "Septický a anafylaktický šok - etiopatogeneze a následky.",
    "organSystem": "Ostatní / Systémové procesy"
  },
  {
    "id": "pf-gen-33",
    "category": "Obecná patofyziologie",
    "title": "Obstipace a průjem - etiopatogeneze a následky. Syndrom dráždivého tračníku, pseudomembranózní kolitida.",
    "organSystem": "Ostatní / Systémové procesy"
  },
  {
    "id": "pf-gen-34",
    "category": "Obecná patofyziologie",
    "title": "Poruchy metabolismu železa (Fe2+/Fe3+) - etiopatogeneze a následky.",
    "organSystem": "Ostatní / Systémové procesy"
  },
  {
    "id": "pf-gen-35",
    "category": "Obecná patofyziologie",
    "title": "Ikterus- etiopatogeneze.",
    "organSystem": "Gastroenterologie a hepatologie"
  },
  {
    "id": "pf-gen-36",
    "category": "Obecná patofyziologie",
    "title": "Poruchy bilance kalcia (Ca2+) a fosfátů - etiopatogeneze, projevy, následky.",
    "organSystem": "Ostatní / Systémové procesy"
  },
  {
    "id": "pf-gen-37",
    "category": "Obecná patofyziologie",
    "title": "Sepse, syndrom multiorgánové dysfunkce (MODS) - etiopatogeneze, projevy a následky.",
    "organSystem": "Ostatní / Systémové procesy"
  },
  {
    "id": "pf-gen-38",
    "category": "Obecná patofyziologie",
    "title": "Krvácení - etiopatogeneze, rozdělení, následky.",
    "organSystem": "Ostatní / Systémové procesy"
  },
  {
    "id": "pf-gen-39",
    "category": "Obecná patofyziologie",
    "title": "Poruchy bilance natria (Na+) a chloridů (Cl-) - etiopatogeneze, následky, regulace. Osmotický a onkotický tlak.",
    "organSystem": "Ostatní / Systémové procesy"
  },
  {
    "id": "pf-gen-40",
    "category": "Obecná patofyziologie",
    "title": "Lokální zánětová odpověď - princip a význam, složky zánětové odpovědi.",
    "organSystem": "Ostatní / Systémové procesy"
  },
  {
    "id": "pf-gen-41",
    "category": "Obecná patofyziologie",
    "title": "Poruchy vědomí - etiopatogeneze, základní rozdělení podle kvantity a kvality. Synkopa.",
    "organSystem": "Nervový systém a smysly"
  },
  {
    "id": "pf-gen-42",
    "category": "Obecná patofyziologie",
    "title": "Ischemie - etiopatogeneze ischemie, změny na orgánové úrovni: myokard, centrální nervový systém, ledviny, GIT, končetiny.",
    "organSystem": "Nefrologie a urologie"
  },
  {
    "id": "pf-gen-43",
    "category": "Obecná patofyziologie",
    "title": "Nauzea, zvracení - etiopatogeneze, následky.",
    "organSystem": "Ostatní / Systémové procesy"
  },
  {
    "id": "pf-gen-44",
    "category": "Obecná patofyziologie",
    "title": "Poškození vlivem chemických vlivů - intoxikace (paracetamol, metanol, oxid uhelnatý), alkohol, kouření.",
    "organSystem": "Ostatní / Systémové procesy"
  },
  {
    "id": "pf-gen-45",
    "category": "Obecná patofyziologie",
    "title": "Hyperglykemie - etiopatogeneze, akutní a chronické komplikace, následky.",
    "organSystem": "Endokrinní systém"
  },
  {
    "id": "pf-gen-46",
    "category": "Obecná patofyziologie",
    "title": "Geneticky podmíněné nemoci - rozdělení, příklady. Monofaktoriální a multifaktoriální dědičnost.",
    "organSystem": "Ostatní / Systémové procesy"
  },
  {
    "id": "pf-gen-47",
    "category": "Obecná patofyziologie",
    "title": "Časový faktor v patogenezi nemocí, pojmy kompenzace a dekompenzace, strukturální a funkční orgánová/tkáňová dysfunkce.",
    "organSystem": "Ostatní / Systémové procesy"
  },
  {
    "id": "pf-gen-48",
    "category": "Obecná patofyziologie",
    "title": "Metabolický syndrom X - etiopatogeneze, projevy, následky.",
    "organSystem": "Ostatní / Systémové procesy"
  },
  {
    "id": "pf-gen-49",
    "category": "Obecná patofyziologie",
    "title": "Hypoglykemie - etiopatogeneze, komplikace, následky.",
    "organSystem": "Endokrinní systém"
  },
  {
    "id": "pf-gen-50",
    "category": "Obecná patofyziologie",
    "title": "Poškození vlivem fyzikálních vlivů tlaku, crush syndrom (rhabdomyolýza), zvuk.",
    "organSystem": "Lokomotorický a autoimunitní systém"
  },
  {
    "id": "pf-spec1-1",
    "category": "Speciální I. (Kardio, Resp, Nefro, Hema)",
    "title": "Srdeční zástava. Maligní arytmie: fibrilace komor, setrvalá komorová tachykardie a asystolie - etiopatogeneze a následky. Elektromechanická disociace",
    "organSystem": "Kardiovaskulární systém"
  },
  {
    "id": "pf-spec1-2",
    "category": "Speciální I. (Kardio, Resp, Nefro, Hema)",
    "title": "Anemie - obecná charakteristika, etiopatogeneze, rozdělení, následky. Anemický syndrom",
    "organSystem": "Hematologie"
  },
  {
    "id": "pf-spec1-3",
    "category": "Speciální I. (Kardio, Resp, Nefro, Hema)",
    "title": "Základní charakteristika plicních onemocnění: obstrukce a restrikce etiopatogeneze",
    "organSystem": "Respirační systém"
  },
  {
    "id": "pf-spec1-4",
    "category": "Speciální I. (Kardio, Resp, Nefro, Hema)",
    "title": "Portální hypertenze - etiopatogeneze, projevy, následky",
    "organSystem": "Gastroenterologie a hepatologie"
  },
  {
    "id": "pf-spec1-5",
    "category": "Speciální I. (Kardio, Resp, Nefro, Hema)",
    "title": "Trombocytopenie a trombocytopatie - etiopatogeneze, projevy, následky",
    "organSystem": "Kardiovaskulární systém"
  },
  {
    "id": "pf-spec1-6",
    "category": "Speciální I. (Kardio, Resp, Nefro, Hema)",
    "title": "Systémová arteriální hypotenze etiopatogeneze a následky",
    "organSystem": "Kardiovaskulární systém"
  },
  {
    "id": "pf-spec1-7",
    "category": "Speciální I. (Kardio, Resp, Nefro, Hema)",
    "title": "Tachyarytmie: supraventrikulární a ventrikulární - etiopatogeneze, rozdělení, následky. Fibrilace a flutter síní. Extrasystoly. Reentry. Preexcitační syndromy",
    "organSystem": "Kardiovaskulární systém"
  },
  {
    "id": "pf-spec1-8",
    "category": "Speciální I. (Kardio, Resp, Nefro, Hema)",
    "title": "Pravostranné srdeční selhání - akutní a chronická etiologie, patogeneze, projevy, následky",
    "organSystem": "Kardiovaskulární systém"
  },
  {
    "id": "pf-spec1-9",
    "category": "Speciální I. (Kardio, Resp, Nefro, Hema)",
    "title": "Srdeční selhání - obecná charakteristika etiopatogeneze, projevy, následky. Systolická a diastolická dysfunkce",
    "organSystem": "Kardiovaskulární systém"
  },
  {
    "id": "pf-spec1-10",
    "category": "Speciální I. (Kardio, Resp, Nefro, Hema)",
    "title": "Akutní tubulární nekróza - etiopatogeneze, projevy, následky",
    "organSystem": "Nefrologie a urologie"
  },
  {
    "id": "pf-spec1-11",
    "category": "Speciální I. (Kardio, Resp, Nefro, Hema)",
    "title": "Srdeční arytmie - etiopatogeneze, klasifikace, projevy, následky",
    "organSystem": "Kardiovaskulární systém"
  },
  {
    "id": "pf-spec1-12",
    "category": "Speciální I. (Kardio, Resp, Nefro, Hema)",
    "title": "Sekundární hypertenze - etiopatogeneze, akutní a chronické komplikace, následky",
    "organSystem": "Kardiovaskulární systém"
  },
  {
    "id": "pf-spec1-13",
    "category": "Speciální I. (Kardio, Resp, Nefro, Hema)",
    "title": "Restrikční plicní nemoci - etiopatogeneze, symptomy a následky. Vnější a vnitřní příčiny restrikce",
    "organSystem": "Respirační systém"
  },
  {
    "id": "pf-spec1-14",
    "category": "Speciální I. (Kardio, Resp, Nefro, Hema)",
    "title": "Primární (esenciální) hypertenze etiopatogeneze, akutní a chronické komplikace, následky",
    "organSystem": "Kardiovaskulární systém"
  },
  {
    "id": "pf-spec1-15",
    "category": "Speciální I. (Kardio, Resp, Nefro, Hema)",
    "title": "Transfúze krve a krevních derivátů - etiopatogeneze nejčastějších komplikací. Základy problematiky transplantace kostní dřeně. GvH a HvG reakce",
    "organSystem": "Hematologie"
  },
  {
    "id": "pf-spec1-16",
    "category": "Speciální I. (Kardio, Resp, Nefro, Hema)",
    "title": "Poruchy ventilačně-perfúzního poměru - etiopatogeneze, projevy, následky",
    "organSystem": "Respirační systém"
  },
  {
    "id": "pf-spec1-17",
    "category": "Speciální I. (Kardio, Resp, Nefro, Hema)",
    "title": "Poruchy venózního řečiště. - etiopatogeneze, projevy, následky. Poruchy lymfatického cévního systému - etiopatogeneze, projevy, následky",
    "organSystem": "Kardiovaskulární systém"
  },
  {
    "id": "pf-spec1-18",
    "category": "Speciální I. (Kardio, Resp, Nefro, Hema)",
    "title": "Poruchy plicní difúze - etiopatogeneze, symptomy a následky. Poruchy alveolo-kapilární membrány. Alveolo-arteriální diference",
    "organSystem": "Respirační systém"
  },
  {
    "id": "pf-spec1-19",
    "category": "Speciální I. (Kardio, Resp, Nefro, Hema)",
    "title": "Poruchy plicní cirkulace etiopatogeneze, následky. Plicní hypertenze - etiopatogeneze, projevy, následky",
    "organSystem": "Kardiovaskulární systém"
  },
  {
    "id": "pf-spec1-20",
    "category": "Speciální I. (Kardio, Resp, Nefro, Hema)",
    "title": "Trombotické mikroangiopatie (HUS aHUS, TTP) - etiopatogeneze, projevy, následky",
    "organSystem": "Kardiovaskulární systém"
  },
  {
    "id": "pf-spec1-21",
    "category": "Speciální I. (Kardio, Resp, Nefro, Hema)",
    "title": "Polycytémie - etiopatogeneze, následky. Hyperviskózní syndrom",
    "organSystem": "Hematologie"
  },
  {
    "id": "pf-spec1-22",
    "category": "Speciální I. (Kardio, Resp, Nefro, Hema)",
    "title": "Pneumothorax - etiopatogeneze, typy projevy, následky. Fluidothorax etiopatogeneze, typy, projevy, následky",
    "organSystem": "Ostatní / Systémové procesy"
  },
  {
    "id": "pf-spec1-23",
    "category": "Speciální I. (Kardio, Resp, Nefro, Hema)",
    "title": "Pneumonie - etiopatogeneze, rozdělení, projevy, následky",
    "organSystem": "Respirační systém"
  },
  {
    "id": "pf-spec1-24",
    "category": "Speciální I. (Kardio, Resp, Nefro, Hema)",
    "title": "Plicní edém etiopatogeneze, rozdělení, projevy, následky",
    "organSystem": "Respirační systém"
  },
  {
    "id": "pf-spec1-25",
    "category": "Speciální I. (Kardio, Resp, Nefro, Hema)",
    "title": "Patofyziologie sleziny - splenomegalie, hypersplenismus, následky splenektomie",
    "organSystem": "Hematologie"
  },
  {
    "id": "pf-spec1-26",
    "category": "Speciální I. (Kardio, Resp, Nefro, Hema)",
    "title": "Obstrukční plicní nemoci - obecná charakteristika, etiopatogeneze, projevy, následky",
    "organSystem": "Respirační systém"
  },
  {
    "id": "pf-spec1-27",
    "category": "Speciální I. (Kardio, Resp, Nefro, Hema)",
    "title": "Obstrukce horních dýchacích cest - etiopatogeneze, projevy, následky",
    "organSystem": "Respirační systém"
  },
  {
    "id": "pf-spec1-28",
    "category": "Speciální I. (Kardio, Resp, Nefro, Hema)",
    "title": "Nefrotický a nefritický syndrom - etiopatogeneze, rozdíly, projevy, následky",
    "organSystem": "Nefrologie a urologie"
  },
  {
    "id": "pf-spec1-29",
    "category": "Speciální I. (Kardio, Resp, Nefro, Hema)",
    "title": "Leukopenie - etiopatogeneze, projevy, následky",
    "organSystem": "Hematologie"
  },
  {
    "id": "pf-spec1-30",
    "category": "Speciální I. (Kardio, Resp, Nefro, Hema)",
    "title": "Levostranné srdeční selhání - akutní a chronická etiologie, patogeneze, projevy, následky",
    "organSystem": "Kardiovaskulární systém"
  },
  {
    "id": "pf-spec1-31",
    "category": "Speciální I. (Kardio, Resp, Nefro, Hema)",
    "title": "Leukocytóza - nenádorová i nádorová, etiopatogeneze. Leukemie a lymfomy. Myelopatie - myeloproliferace, myeloftíza, myelofibróza",
    "organSystem": "Hematologie"
  },
  {
    "id": "pf-spec1-32",
    "category": "Speciální I. (Kardio, Resp, Nefro, Hema)",
    "title": "Ischemická choroba srdeční - etiopatogeneze, formy, akutní a chronické komplikace, následky. Angina pectoris. Akutní koronární syndrom",
    "organSystem": "Kardiovaskulární systém"
  },
  {
    "id": "pf-spec1-33",
    "category": "Speciální I. (Kardio, Resp, Nefro, Hema)",
    "title": "Intersticiální plicní nemoci - etiopatogeneze, rozdělení, projevy, následky. Cystická fibróza",
    "organSystem": "Respirační systém"
  },
  {
    "id": "pf-spec1-34",
    "category": "Speciální I. (Kardio, Resp, Nefro, Hema)",
    "title": "Chronické selhání ledvin a terminální fáze ledvinových onemocnění - etiopatogeneze, rozdělení podle příčin, projevy, následky",
    "organSystem": "Nefrologie a urologie"
  },
  {
    "id": "pf-spec1-35",
    "category": "Speciální I. (Kardio, Resp, Nefro, Hema)",
    "title": "Chronické respirační selhání - rozdělení, etiopatogeneze, projevy, následky",
    "organSystem": "Respirační systém"
  },
  {
    "id": "pf-spec1-36",
    "category": "Speciální I. (Kardio, Resp, Nefro, Hema)",
    "title": "Chronická obstrukční plicní nemoc (chronická bronchitida a emfyzém plic) a astma bronchiale - etiopatogeneze a rozdíly, symptomy",
    "organSystem": "Respirační systém"
  },
  {
    "id": "pf-spec1-37",
    "category": "Speciální I. (Kardio, Resp, Nefro, Hema)",
    "title": "Hypokoagulační stavy - etiopatogeneze, projevy, následky",
    "organSystem": "Hematologie"
  },
  {
    "id": "pf-spec1-38",
    "category": "Speciální I. (Kardio, Resp, Nefro, Hema)",
    "title": "Hyperkoagulační stavy - etiopatogeneze, projevy, následky. Trombofilní stavy",
    "organSystem": "Kardiovaskulární systém"
  },
  {
    "id": "pf-spec1-39",
    "category": "Speciální I. (Kardio, Resp, Nefro, Hema)",
    "title": "Hlavní vrozené a získané srdeční vady příčiny, projevy, následky, kompenzační mechanismy. Kardiomyopatie - rozdělení, etiopatogeneze, projevy, následky",
    "organSystem": "Kardiovaskulární systém"
  },
  {
    "id": "pf-spec1-40",
    "category": "Speciální I. (Kardio, Resp, Nefro, Hema)",
    "title": "Hemostáza - základní deskripce poruch primární (cévy a trombocyty), sekundární (koagulační kaskáda) a terciární (trombolýza) hemostázy",
    "organSystem": "Kardiovaskulární systém"
  },
  {
    "id": "pf-spec1-41",
    "category": "Speciální I. (Kardio, Resp, Nefro, Hema)",
    "title": "Endokarditidy. Myokarditidy. Perikarditidy - etiopatogeneze, projevy, následky. Srdeční tamponáda",
    "organSystem": "Kardiovaskulární systém"
  },
  {
    "id": "pf-spec1-42",
    "category": "Speciální I. (Kardio, Resp, Nefro, Hema)",
    "title": "Glomerulopatie - etiopatogeneze, projevy, následky",
    "organSystem": "Nefrologie a urologie"
  },
  {
    "id": "pf-spec1-43",
    "category": "Speciální I. (Kardio, Resp, Nefro, Hema)",
    "title": "Bradyarytmie - etiopatogeneze a následky poruch tvorby a vedení vzruchu. Sinoatriální, atrioventrikulární a raménkové blokády",
    "organSystem": "Kardiovaskulární systém"
  },
  {
    "id": "pf-spec1-44",
    "category": "Speciální I. (Kardio, Resp, Nefro, Hema)",
    "title": "Anémie ze zvýšených ztrát a snížené produkce erytrocytů - etiopatogeneze, následky",
    "organSystem": "Hematologie"
  },
  {
    "id": "pf-spec1-45",
    "category": "Speciální I. (Kardio, Resp, Nefro, Hema)",
    "title": "Anemie ze zvýšené konsumpce erytrocytů. Hemolýza - etiopatogeneze, následky",
    "organSystem": "Hematologie"
  },
  {
    "id": "pf-spec1-46",
    "category": "Speciální I. (Kardio, Resp, Nefro, Hema)",
    "title": "Atelektáza. etiopatogeneze, projevy, následky",
    "organSystem": "Respirační systém"
  },
  {
    "id": "pf-spec1-47",
    "category": "Speciální I. (Kardio, Resp, Nefro, Hema)",
    "title": "ARDS - etiopatogeneze, klasifikace, projevy, následky",
    "organSystem": "Respirační systém"
  },
  {
    "id": "pf-spec1-48",
    "category": "Speciální I. (Kardio, Resp, Nefro, Hema)",
    "title": "Akutní respirační selhání - rozdělení, etiopatogeneze, projevy, následky",
    "organSystem": "Respirační systém"
  },
  {
    "id": "pf-spec1-49",
    "category": "Speciální I. (Kardio, Resp, Nefro, Hema)",
    "title": "Akutní ischemie myokardu - etiopatogeneze, následky. Akutní infarkt myokardu - etiopatogeneze, rozdělení, akutní a chronické komplikace",
    "organSystem": "Kardiovaskulární systém"
  },
  {
    "id": "pf-spec1-50",
    "category": "Speciální I. (Kardio, Resp, Nefro, Hema)",
    "title": "Akutní poškození ledvin - etiopatogeneze, rozdělení podle příčin, projevy, následky",
    "organSystem": "Nefrologie a urologie"
  },
  {
    "id": "pf-spec2-1",
    "category": "Speciální II. (GIT, Endo, Neuro, Loko)",
    "title": "Vředová choroba gastroduodena - etiopatogeneze a komplikace. Gastritidy - etiopatogeneze, projevy, následky",
    "organSystem": "Gastroenterologie a hepatologie"
  },
  {
    "id": "pf-spec2-2",
    "category": "Speciální II. (GIT, Endo, Neuro, Loko)",
    "title": "Urolitiáza - etiopatogeneze, typy kamenů, komplikace, projevy, následky",
    "organSystem": "Nefrologie a urologie"
  },
  {
    "id": "pf-spec2-3",
    "category": "Speciální II. (GIT, Endo, Neuro, Loko)",
    "title": "Urgentní stavy vzniklé z endokrinních příčin",
    "organSystem": "Endokrinní systém"
  },
  {
    "id": "pf-spec2-4",
    "category": "Speciální II. (GIT, Endo, Neuro, Loko)",
    "title": "Traumatické poškození mozku - etiopatogeneze, projevy, následky. Komoce, kontuze, epidurální a subdurální hematom",
    "organSystem": "Nervový systém a smysly"
  },
  {
    "id": "pf-spec2-5",
    "category": "Speciální II. (GIT, Endo, Neuro, Loko)",
    "title": "Poruchy vestibulárního systému a mozečku - etiopatogeneze, rozdělení, projevy, následky. Ataxie",
    "organSystem": "Nervový systém a smysly"
  },
  {
    "id": "pf-spec2-6",
    "category": "Speciální II. (GIT, Endo, Neuro, Loko)",
    "title": "Regulace funkce endokrinního systému - negativní zpětná vazba, příklady etiopatogeneze poruch endokrinního systému",
    "organSystem": "Endokrinní systém"
  },
  {
    "id": "pf-spec2-7",
    "category": "Speciální II. (GIT, Endo, Neuro, Loko)",
    "title": "Preeklampsie, eklampsie, HELLP syndrom",
    "organSystem": "Ostatní / Systémové procesy"
  },
  {
    "id": "pf-spec2-8",
    "category": "Speciální II. (GIT, Endo, Neuro, Loko)",
    "title": "Poruchy tubulů a sběrných kanálků - etiopatogeneze, projevy, následky. Tubulointersticiální nefritida.",
    "organSystem": "Nefrologie a urologie"
  },
  {
    "id": "pf-spec2-9",
    "category": "Speciální II. (GIT, Endo, Neuro, Loko)",
    "title": "Systémová autoimunitní onemocnění - revmatoidní artritida, systémový lupus erytematodes, sklerodermie, Sjögrenův syndrom, polymyozitida, dermatomyozitida.",
    "organSystem": "Lokomotorický a autoimunitní systém"
  },
  {
    "id": "pf-spec2-10",
    "category": "Speciální II. (GIT, Endo, Neuro, Loko)",
    "title": "Poruchy spánku - etiopatogeneze, obecné dělení, projevy, následky. Obstrukční spánková apnoe.",
    "organSystem": "Nervový systém a smysly"
  },
  {
    "id": "pf-spec2-11",
    "category": "Speciální II. (GIT, Endo, Neuro, Loko)",
    "title": "Poruchy sluchu a zraku - etiopatogeneze, projevy, následky",
    "organSystem": "Nervový systém a smysly"
  },
  {
    "id": "pf-spec2-12",
    "category": "Speciální II. (GIT, Endo, Neuro, Loko)",
    "title": "Poruchy menstruačního cyklu - etiopatogeneze. Poruchy hypotalamo-hypofyzárně-ovariální osy",
    "organSystem": "Ostatní / Systémové procesy"
  },
  {
    "id": "pf-spec2-13",
    "category": "Speciální II. (GIT, Endo, Neuro, Loko)",
    "title": "Poruchy kostního metabolismu - osteoporóza, osteomalacie, rachitida",
    "organSystem": "Lokomotorický a autoimunitní systém"
  },
  {
    "id": "pf-spec2-14",
    "category": "Speciální II. (GIT, Endo, Neuro, Loko)",
    "title": "Onemocnění žlučníku a žlučových cest-cholecystitida a cholangoitida. Cholecystolitiáza a choledocholitiáza - etiopatogeneze, projevy, následky",
    "organSystem": "Gastroenterologie a hepatologie"
  },
  {
    "id": "pf-spec2-15",
    "category": "Speciální II. (GIT, Endo, Neuro, Loko)",
    "title": "Poruchy endokrinních funkcí ledvin - etiopatogeneze, projevy, následky.",
    "organSystem": "Nefrologie a urologie"
  },
  {
    "id": "pf-spec2-16",
    "category": "Speciální II. (GIT, Endo, Neuro, Loko)",
    "title": "Poruchy bazálních ganglií - etiopatogeneze, projevy. Parkinsonova nemoc. Poruchy limbického systému a emocí - etiopatogeneze, projevy, následky.",
    "organSystem": "Ostatní / Systémové procesy"
  },
  {
    "id": "pf-spec2-17",
    "category": "Speciální II. (GIT, Endo, Neuro, Loko)",
    "title": "Poranění míchy - etiopatogeneze, projevy, následky. Transverzální míšní léze",
    "organSystem": "Nervový systém a smysly"
  },
  {
    "id": "pf-spec2-18",
    "category": "Speciální II. (GIT, Endo, Neuro, Loko)",
    "title": "Poruchy kognitivních funkcí - paměť, pozornost, učení, řeč, vnímání, chápání. Demence. Alzheimerova choroba - etiopatogeneze, projevy, následky",
    "organSystem": "Nervový systém a smysly"
  },
  {
    "id": "pf-spec2-19",
    "category": "Speciální II. (GIT, Endo, Neuro, Loko)",
    "title": "Hemoragické cévní mozkové příhody - etiopatogeneze, projevy, následky",
    "organSystem": "Nervový systém a smysly"
  },
  {
    "id": "pf-spec2-20",
    "category": "Speciální II. (GIT, Endo, Neuro, Loko)",
    "title": "Nespecifická zánětlivá onemocnění střev-Crohnova choroba, ulcerativní kolitida",
    "organSystem": "Gastroenterologie a hepatologie"
  },
  {
    "id": "pf-spec2-21",
    "category": "Speciální II. (GIT, Endo, Neuro, Loko)",
    "title": "Nemoci dutiny ústní. Poruchy polykání, Poruchy jícnu - etiopatogeneze, projevy, následky. Dyspepsie. Refluxní choroba jícnu",
    "organSystem": "Gastroenterologie a hepatologie"
  },
  {
    "id": "pf-spec2-22",
    "category": "Speciální II. (GIT, Endo, Neuro, Loko)",
    "title": "Myopatie, rhabdomyolýza - etiopatogeneze, projevy, následky.",
    "organSystem": "Lokomotorický a autoimunitní systém"
  },
  {
    "id": "pf-spec2-23",
    "category": "Speciální II. (GIT, Endo, Neuro, Loko)",
    "title": "Krvácení do GIT - formy, příčiny, lokalizace, projevy, následky.",
    "organSystem": "Gastroenterologie a hepatologie"
  },
  {
    "id": "pf-spec2-24",
    "category": "Speciální II. (GIT, Endo, Neuro, Loko)",
    "title": "Kóma - etiopatogeneze, projevy a následky. Vegetativní stav, locked-in syndrome. Smrt mozku - definice, etiopatogeneze a projevy.",
    "organSystem": "Nervový systém a smysly"
  },
  {
    "id": "pf-spec2-25",
    "category": "Speciální II. (GIT, Endo, Neuro, Loko)",
    "title": "Ischemické cévní mozkové příhody - etiopatogeneze, projevy, následky.",
    "organSystem": "Nervový systém a smysly"
  },
  {
    "id": "pf-spec2-26",
    "category": "Speciální II. (GIT, Endo, Neuro, Loko)",
    "title": "Intrakraniální hypertenze - etiopatogeneze, Poruchy autoregulace průtoku krve mozkem.",
    "organSystem": "Kardiovaskulární systém"
  },
  {
    "id": "pf-spec2-27",
    "category": "Speciální II. (GIT, Endo, Neuro, Loko)",
    "title": "Chronické selhání jater - jaterní steatóza a cirhóza. Hepatorenální syndrom - etiopatogeneze.",
    "organSystem": "Nefrologie a urologie"
  },
  {
    "id": "pf-spec2-28",
    "category": "Speciální II. (GIT, Endo, Neuro, Loko)",
    "title": "Chronická pankreatitida a poruchy exokrinní činnosti pankreatu - etiopatogeneze, projevy, následky",
    "organSystem": "Gastroenterologie a hepatologie"
  },
  {
    "id": "pf-spec2-29",
    "category": "Speciální II. (GIT, Endo, Neuro, Loko)",
    "title": "Hypotyreóza - etiopatogeneze, projevy, následky. Struma",
    "organSystem": "Ostatní / Systémové procesy"
  },
  {
    "id": "pf-spec2-30",
    "category": "Speciální II. (GIT, Endo, Neuro, Loko)",
    "title": "Hypotalamo-hypofyzární systém - úroveň hypotalamu, adenohypofýzy, a neurohypofýzy - etiopatogeneze, projevy, následky",
    "organSystem": "Endokrinní systém"
  },
  {
    "id": "pf-spec2-31",
    "category": "Speciální II. (GIT, Endo, Neuro, Loko)",
    "title": "Akutní pankreatitida - etiopatogeneze, projevy, následky.",
    "organSystem": "Gastroenterologie a hepatologie"
  },
  {
    "id": "pf-spec2-32",
    "category": "Speciální II. (GIT, Endo, Neuro, Loko)",
    "title": "Hypertyreóza - etiopatogeneze, projevy, následky",
    "organSystem": "Ostatní / Systémové procesy"
  },
  {
    "id": "pf-spec2-33",
    "category": "Speciální II. (GIT, Endo, Neuro, Loko)",
    "title": "Hyperparatyreóza - etiopatogeneze, projevy, následky",
    "organSystem": "Ostatní / Systémové procesy"
  },
  {
    "id": "pf-spec2-34",
    "category": "Speciální II. (GIT, Endo, Neuro, Loko)",
    "title": "Hyperkortizolismus. Cushingova nemoc a syndrom - etiopatogeneze, projevy, následky",
    "organSystem": "Endokrinní systém"
  },
  {
    "id": "pf-spec2-35",
    "category": "Speciální II. (GIT, Endo, Neuro, Loko)",
    "title": "Hyperaldosteronismus - etiopatogeneze, rozdělení, projevy, následky. Connův syndrom",
    "organSystem": "Endokrinní systém"
  },
  {
    "id": "pf-spec2-36",
    "category": "Speciální II. (GIT, Endo, Neuro, Loko)",
    "title": "Onemocnění tlustého střeva divertikulóza, polypóza a karcinom- etiopatogeneze a následky. Ileus - etiopatogeneze, projevy, následky",
    "organSystem": "Gastroenterologie a hepatologie"
  },
  {
    "id": "pf-spec2-37",
    "category": "Speciální II. (GIT, Endo, Neuro, Loko)",
    "title": "Feochromocytom, mnohočetné endokrinní neoplazie - etiopatogeneze, projevy, následky. Zollinger Ellisonův syndrom. Gastroenteropankreatický hormonální systém.",
    "organSystem": "Gastroenterologie a hepatologie"
  },
  {
    "id": "pf-spec2-38",
    "category": "Speciální II. (GIT, Endo, Neuro, Loko)",
    "title": "Epilepsie - etiopatogeneze, klasifikace, projevy, následky.",
    "organSystem": "Nervový systém a smysly"
  },
  {
    "id": "pf-spec2-39",
    "category": "Speciální II. (GIT, Endo, Neuro, Loko)",
    "title": "Edém mozku - etiopatogeneze, projevy, následky. Cytotoxický edém a vazogenní edém, intersticiální edém.",
    "organSystem": "Nervový systém a smysly"
  },
  {
    "id": "pf-spec2-40",
    "category": "Speciální II. (GIT, Endo, Neuro, Loko)",
    "title": "Diabetes mellitus - základní rozdělení, etiopatogeneze, projevy, následky.",
    "organSystem": "Endokrinní systém"
  },
  {
    "id": "pf-spec2-41",
    "category": "Speciální II. (GIT, Endo, Neuro, Loko)",
    "title": "Diabetes mellitus - akutní a chronické komplikace - etiopatogeneze, projevy, následky",
    "organSystem": "Endokrinní systém"
  },
  {
    "id": "pf-spec2-42",
    "category": "Speciální II. (GIT, Endo, Neuro, Loko)",
    "title": "Demyelinizace - etiopatogeneze, projevy, následky. Roztroušená mozkomíšní skleróza.",
    "organSystem": "Nervový systém a smysly"
  },
  {
    "id": "pf-spec2-43",
    "category": "Speciální II. (GIT, Endo, Neuro, Loko)",
    "title": "Cévní mozkové příhody - etiopatogeneze, základní rozdělení, projevy, následky. Transitorní ischemická ataka",
    "organSystem": "Nervový systém a smysly"
  },
  {
    "id": "pf-spec2-44",
    "category": "Speciální II. (GIT, Endo, Neuro, Loko)",
    "title": "Centrální a periferní paréza - etiopatogeneze, projevy, následky",
    "organSystem": "Nervový systém a smysly"
  },
  {
    "id": "pf-spec2-45",
    "category": "Speciální II. (GIT, Endo, Neuro, Loko)",
    "title": "Autonomní nervový systém - poruchy funkce, efekt na orgánové systémy",
    "organSystem": "Nervový systém a smysly"
  },
  {
    "id": "pf-spec2-46",
    "category": "Speciální II. (GIT, Endo, Neuro, Loko)",
    "title": "Artróza - etiopatogeneze, projevy, následky",
    "organSystem": "Lokomotorický a autoimunitní systém"
  },
  {
    "id": "pf-spec2-47",
    "category": "Speciální II. (GIT, Endo, Neuro, Loko)",
    "title": "Akutní selhání jater - etiopatogeneze, projevy, následky. Jaterní encefalopatie.",
    "organSystem": "Gastroenterologie a hepatologie"
  },
  {
    "id": "pf-spec2-48",
    "category": "Speciální II. (GIT, Endo, Neuro, Loko)",
    "title": "Hypoparatyreóza - etiopatogeneze, projevy, následky.",
    "organSystem": "Ostatní / Systémové procesy"
  },
  {
    "id": "pf-spec2-49",
    "category": "Speciální II. (GIT, Endo, Neuro, Loko)",
    "title": "Akutní a chronické hepatitidy - etiopatogeneze, rozdělení, projevy, následky.",
    "organSystem": "Gastroenterologie a hepatologie"
  },
  {
    "id": "pf-spec2-50",
    "category": "Speciální II. (GIT, Endo, Neuro, Loko)",
    "title": "Adenokortikální insuficience - Addisonova choroba. Adrenální (addisonská) krize - etiopatogeneze, projevy, následky.",
    "organSystem": "Endokrinní systém"
  },
  {
    "id": "pf-pract-1",
    "category": "Praktická témata",
    "title": "Vyšetření červené krevní řady",
    "organSystem": "Hematologie"
  },
  {
    "id": "pf-pract-2",
    "category": "Praktická témata",
    "title": "Vyšetření mozkomíšního moku",
    "organSystem": "Ostatní / Systémové procesy"
  },
  {
    "id": "pf-pract-3",
    "category": "Praktická témata",
    "title": "Vyšetření tekutin ze třetího prostoru (fluidothorax, fluidoperikard, ascites)",
    "organSystem": "Ostatní / Systémové procesy"
  },
  {
    "id": "pf-pract-4",
    "category": "Praktická témata",
    "title": "Vyšetření krevního tlaku - sekundární hypertenze",
    "organSystem": "Kardiovaskulární systém"
  },
  {
    "id": "pf-pract-5",
    "category": "Praktická témata",
    "title": "Laboratorní markery zánětu",
    "organSystem": "Ostatní / Systémové procesy"
  },
  {
    "id": "pf-pract-6",
    "category": "Praktická témata",
    "title": "Vyšetření poruch plazmatické koagulace",
    "organSystem": "Hematologie"
  },
  {
    "id": "pf-pract-7",
    "category": "Praktická témata",
    "title": "Vyšetření acidobazické rovnováhy. Laktát",
    "organSystem": "Ostatní / Systémové procesy"
  },
  {
    "id": "pf-pract-8",
    "category": "Praktická témata",
    "title": "EKG - posouzení srdeční osy a intervalů, hypertrofie srdečních oddílů",
    "organSystem": "Kardiovaskulární systém"
  },
  {
    "id": "pf-pract-9",
    "category": "Praktická témata",
    "title": "Vyšetření výměny krevních plynů a plicní difuzní kapacity",
    "organSystem": "Respirační systém"
  },
  {
    "id": "pf-pract-10",
    "category": "Praktická témata",
    "title": "Pulzní oxymetrie",
    "organSystem": "Respirační systém"
  },
  {
    "id": "pf-pract-11",
    "category": "Praktická témata",
    "title": "Vyšetření plicní hypertenze, tlak v zaklínění",
    "organSystem": "Kardiovaskulární systém"
  },
  {
    "id": "pf-pract-12",
    "category": "Praktická témata",
    "title": "EKG - základní rozbor křivky, topografie svodů",
    "organSystem": "Kardiovaskulární systém"
  },
  {
    "id": "pf-pract-13",
    "category": "Praktická témata",
    "title": "Laboratorní markery poruchy jaterních funkcí - obecná charakteristika",
    "organSystem": "Gastroenterologie a hepatologie"
  },
  {
    "id": "pf-pract-14",
    "category": "Praktická témata",
    "title": "Laboratorní markery ischemie myokardu",
    "organSystem": "Ostatní / Systémové procesy"
  },
  {
    "id": "pf-pract-15",
    "category": "Praktická témata",
    "title": "Vyšetření parametrů bronchiální obstrukce",
    "organSystem": "Respirační systém"
  },
  {
    "id": "pf-pract-16",
    "category": "Praktická témata",
    "title": "Laboratorní vyšetření moči. Hematurie",
    "organSystem": "Nefrologie a urologie"
  },
  {
    "id": "pf-pract-17",
    "category": "Praktická témata",
    "title": "Echokardiografie",
    "organSystem": "Kardiovaskulární systém"
  },
  {
    "id": "pf-pract-18",
    "category": "Praktická témata",
    "title": "Laboratorní markery akutního renálního poškození",
    "organSystem": "Nefrologie a urologie"
  },
  {
    "id": "pf-pract-19",
    "category": "Praktická témata",
    "title": "Laboratorní markery diabetes mellitus",
    "organSystem": "Endokrinní systém"
  },
  {
    "id": "pf-pract-20",
    "category": "Praktická témata",
    "title": "EKG - posouzení srdeční frekvence a rytmu",
    "organSystem": "Kardiovaskulární systém"
  },
  {
    "id": "pf-pract-21",
    "category": "Praktická témata",
    "title": "Vyšetření krevních destiček",
    "organSystem": "Ostatní / Systémové procesy"
  },
  {
    "id": "pf-pract-22",
    "category": "Praktická témata",
    "title": "Laboratorní markery akutní pankreatitidy",
    "organSystem": "Gastroenterologie a hepatologie"
  },
  {
    "id": "pf-pract-23",
    "category": "Praktická témata",
    "title": "Vyšetření jaterních enzymů",
    "organSystem": "Gastroenterologie a hepatologie"
  },
  {
    "id": "pf-pract-24",
    "category": "Praktická témata",
    "title": "Vyšetření funkce nadledvinek",
    "organSystem": "Nefrologie a urologie"
  },
  {
    "id": "pf-pract-25",
    "category": "Praktická témata",
    "title": "Vyšetření hemostázy - obecná charakteristika",
    "organSystem": "Hematologie"
  },
  {
    "id": "pf-pract-26",
    "category": "Praktická témata",
    "title": "Vyšetření funkce glomerulů",
    "organSystem": "Nefrologie a urologie"
  },
  {
    "id": "pf-pract-27",
    "category": "Praktická témata",
    "title": "Laboratorní markery ikteru a cholestázy",
    "organSystem": "Gastroenterologie a hepatologie"
  },
  {
    "id": "pf-pract-28",
    "category": "Praktická témata",
    "title": "Vyšetření aktivity neuronů. EEG",
    "organSystem": "Nervový systém a smysly"
  },
  {
    "id": "pf-pract-29",
    "category": "Praktická témata",
    "title": "Spirometrie - obecná charakteristika a principy",
    "organSystem": "Ostatní / Systémové procesy"
  },
  {
    "id": "pf-pract-30",
    "category": "Praktická témata",
    "title": "Předtransfúzní vyšetření",
    "organSystem": "Hematologie"
  },
  {
    "id": "pf-pract-31",
    "category": "Praktická témata",
    "title": "Vyšetření iontogramu",
    "organSystem": "Ostatní / Systémové procesy"
  },
  {
    "id": "pf-pract-32",
    "category": "Praktická témata",
    "title": "Kolonoskopie",
    "organSystem": "Gastroenterologie a hepatologie"
  },
  {
    "id": "pf-pract-33",
    "category": "Praktická témata",
    "title": "Vyšetření funkce tubulů",
    "organSystem": "Nefrologie a urologie"
  },
  {
    "id": "pf-pract-34",
    "category": "Praktická témata",
    "title": "Koronarografie",
    "organSystem": "Ostatní / Systémové procesy"
  },
  {
    "id": "pf-pract-35",
    "category": "Praktická témata",
    "title": "Vyšetření intrakraniálního tlaku. Funkce hlavových nervů",
    "organSystem": "Nervový systém a smysly"
  },
  {
    "id": "pf-pract-36",
    "category": "Praktická témata",
    "title": "Vyšetření funkce hypofýzy",
    "organSystem": "Endokrinní systém"
  },
  {
    "id": "pf-pract-37",
    "category": "Praktická témata",
    "title": "Posouzení stavu vědomí (kvantitativně, kvalitativně) - základní skórovací systémy",
    "organSystem": "Nervový systém a smysly"
  },
  {
    "id": "pf-pract-38",
    "category": "Praktická témata",
    "title": "Vyšetření krevního tlaku - primární hypertenze",
    "organSystem": "Kardiovaskulární systém"
  },
  {
    "id": "pf-pract-39",
    "category": "Praktická témata",
    "title": "Proteiny akutní fáze",
    "organSystem": "Ostatní / Systémové procesy"
  },
  {
    "id": "pf-pract-40",
    "category": "Praktická témata",
    "title": "Zátěžová vyšetření kardiorespiračního systému",
    "organSystem": "Kardiovaskulární systém"
  },
  {
    "id": "pf-pract-41",
    "category": "Praktická témata",
    "title": "Bronchoskopie",
    "organSystem": "Respirační systém"
  },
  {
    "id": "pf-pract-42",
    "category": "Praktická témata",
    "title": "Vyšetření fibrinolýzy",
    "organSystem": "Respirační systém"
  },
  {
    "id": "pf-pract-43",
    "category": "Praktická témata",
    "title": "Vyšetření parametrů plicní restrikce",
    "organSystem": "Respirační systém"
  },
  {
    "id": "pf-pract-44",
    "category": "Praktická témata",
    "title": "Gastroskopie",
    "organSystem": "Gastroenterologie a hepatologie"
  },
  {
    "id": "pf-pract-45",
    "category": "Praktická témata",
    "title": "Základní vyšetření reprodukčního systému",
    "organSystem": "Ostatní / Systémové procesy"
  },
  {
    "id": "pf-pract-46",
    "category": "Praktická témata",
    "title": "Laboratorní markery hemolýzy",
    "organSystem": "Hematologie"
  },
  {
    "id": "pf-pract-47",
    "category": "Praktická témata",
    "title": "Vyšetření bílé krevní řady",
    "organSystem": "Hematologie"
  },
  {
    "id": "pf-pract-48",
    "category": "Praktická témata",
    "title": "Vyšetření funkce štítné žlázy a příštítných tělísek",
    "organSystem": "Endokrinní systém"
  },
  {
    "id": "pf-pract-49",
    "category": "Praktická témata",
    "title": "Laboratorní markery rhabdomyolýzy",
    "organSystem": "Lokomotorický a autoimunitní systém"
  },
  {
    "id": "pf-pract-50",
    "category": "Praktická témata",
    "title": "Srdeční katetrizace, vyšetření krevního tlaku v jednotlivých srdečních oddílech",
    "organSystem": "Kardiovaskulární systém"
  }
];
const PATFYZ_QUIZ = [
  {
    "question": "Jak se liší diastolické srdeční selhání (HFpEF) od systolického (HFrEF)?",
    "options": [
      "U HFpEF je poškozena systolická vyprazdňovací schopnost levé komory (nízká EF).",
      "U HFpEF je poškozena relaxace a plnění tuhé komory, přičemž ejekční frakce (EF) zůstává zachovaná (> 50 %).",
      "HFpEF je doprovázeno kompletní ztrátou elektrické aktivity v síních.",
      "U HFrEF nedochází k aktivaci baroreflexu a sympatiku."
    ],
    "correct": 1,
    "explanations": [
      "Nesprávně. Toto popisuje HFrEF (systolické selhání).",
      "Správně! Diastolické selhání (HFpEF) se vyznačuje normální stažlivostí, ale komora je ztuhlá (např. v důsledku hypertrofie u hypertenze) a klade odpor plnění, což zvyšuje tlak v plicním řečišti a vyvolává dušnost.",
      "Nesprávně. Síně fungují normálně, problém leží v plnění levé komory.",
      "Nesprávně. Neurohumorální aktivace (sympatikus, RAAS) nastává u obou forem."
    ]
  },
  {
    "question": "Proč se hypoxémie způsobená významným pravolevým plicním zkratem (shuntem) nezlepší při inhalaci 100% kyslíku?",
    "options": [
      "Vdechovaný kyslík vyvolá křečovité stažení všech plicních kapilár.",
      "Kyslík v kapilárách reaguje s CO2 za vzniku toxických plynů.",
      "Krev protéká plicními úseky, které nejsou vůbec ventilované (např. atelektáza, exsudát), takže se s inhalovaným kyslíkem nemůže smísit.",
      "Hemoglobin v krvi zkratu ztrácí schopnost vázat jakýkoliv kyslík."
    ],
    "correct": 2,
    "explanations": [
      "Nesprávně. Kyslík naopak působí plicní vazodilataci.",
      "Nesprávně. Nedochází k žádné takové chemické reakci.",
      "Správně! Protože postižené alveoly jsou nevzdušné, kyslík se do nich nedostane. Krev protékající kolem nich odchází neokysličená a mísí se s okysličenou krví z fungujících částí plic, což stahuje celkovou saturaci dolů.",
      "Nesprávně. Vazebná schopnost hemoglobinu je zachována."
    ]
  },
  {
    "question": "Které EKG změny jsou charakteristické pro střední až závažnou hyperkalémii?",
    "options": [
      "Vznik vln U, deprese úseku ST a prodloužení QT intervalu.",
      "Vysoké, hrotité T vlny, oploštění až vymizení P vln a rozšíření QRS komplexu.",
      "Zkrácení PR intervalu a přítomnost delta vlny.",
      "Extrémní tachykardie s úzkými QRS komplexy."
    ],
    "correct": 1,
    "explanations": [
      "Nesprávně. Vlny U a prodloužení QT jsou známkou hypokalémie.",
      "Správně! Zvýšený extracelulární draslík depolarizuje membránu kardiomyocytů, což inaktivuje rychlé sodíkové kanály. To zpomaluje vedení vzruchu (široký QRS) a zrychluje repolarizaci (vysoké T).",
      "Nesprávně. Toto je typické pro preexcitační syndrom (WPW).",
      "Nesprávně. Hyperkalémie vede k bradyarytmiím, sinoatriálnímu bloku a případné asystolii."
    ]
  },
  {
    "question": "Jak se patofyziologicky projevuje fáze rekonvalescence u akutní tubulární nekrózy (ATN)?",
    "options": [
      "Extrémním poklesem glomerulární filtrace s anurií.",
      "Rozvojem masivní polyurie (i > 4-5 l/den) z důvodu nezralosti regenerujících buněk tubulů, které nedokážou koncentrovat moč.",
      "Ukládáním kalciových krystalů do ledvinného intersticia.",
      "Okamžitým poklesem hladiny urey a kreatininu v séru na normu."
    ],
    "correct": 1,
    "explanations": [
      "Nesprávně. Anurie je typická pro udržovací fázi.",
      "Správně! Nově vytvořené epitelové buňky tubulů potřebují čas na plné vyzrání a obnovení exprese iontových transportérů. Ultrafiltrát odchází ven bez reabsorpce, což vyvolává masivní polyurii a hrozí dehydratací.",
      "Nesprávně. Krystalizace je typická pro urolitiázu.",
      "Nesprávně. Urea a kreatinin klesají pomalu, zpočátku mohou i nadále stoupat."
    ]
  },
  {
    "question": "Co je hlavním patofyziologickým rysem renální osteodystrofie u pacientů s chronickým selháním ledvin (CKD)?",
    "options": [
      "Nadměrné ukládání uremických toxinů do chrupavek.",
      "Zvýšená tubulární sekrece fosfátů.",
      "Deficit aktivního vitamínu D (kalcitriolu) kvůli poruše jeho hydroxylace v ledvinách, což vede k hypokalcémii a sekundární hyperparatyreóze.",
      "Nadbytek růstového hormonu."
    ],
    "correct": 2,
    "explanations": [
      "Nesprávně. Uremické toxiny kosti přímo nedemineralizují.",
      "Nesprávně. Filtrace a sekrece fosfátů je u CKD naopak snížena (retence fosfátů).",
      "Správně! Výsledná hypokalcémie a hyperfosfatémie stimulují příštítná tělíska k nadprodukci parathormonu (PTH). Ten odbourává vápník z kostí (resorpce), což vede k osteomalacii a osteoporóze.",
      "Nesprávně. Růstový hormon se na tomto procesu nepodílí."
    ]
  },
  {
    "question": "Jaký patofyziologický jev je podstatou rozvoje ascitu u portální hypertenze?",
    "options": [
      "Zvýšená syntéza albuminu v játrech.",
      "Masivní splanchnická vazodilatace mediovaná oxidem dusnatým (NO), která vede k poklesu efektivního krevního objemu a aktivaci systému RAAS s retencí sodíku a vody ledvinami.",
      "Zúžení žlučovodů kamenem.",
      "Pokles hydrostatického tlaku ve vrátnicové žíle."
    ],
    "correct": 1,
    "explanations": [
      "Nesprávně. Syntéza albuminu je u cirhózy naopak snížena.",
      "Správně! Kombinace zvýšeného hydrostatického tlaku v portálním řečišti, sníženého onkotického tlaku (hypoalbuminémie) a masivní retence vody/sodíku (aktivované systémem RAAS v reakci na splanchnickou vazodilataci) vede k prosakování tekutiny do břišní dutiny.",
      "Nesprávně. Žlučovod s ascitem nesouvisí.",
      "Nesprávně. Tlak ve vrátnicové žíle stoupá."
    ]
  },
  {
    "question": "Co charakterizuje bezpulsovou elektrickou aktivitu (PEA) při srdeční zástavě?",
    "options": [
      "Vymizení EKG křivky (izoelektrická linie).",
      "EKG vykazuje koordinovaný rytmus (např. sinusový), ale chybí mechanická kontrakce srdce a minutový výdej z důvodu např. tenzního PNO či tamponády.",
      "Rychlá a chaotická elektrická aktivita komor s frekvencí 400/min.",
      "Selektivní ochrnutí sympatiku."
    ],
    "correct": 1,
    "explanations": [
      "Nesprávně. Toto popisuje asystolii.",
      "Správně! U PEA (dříve elektromechanická disociace) elektrická aktivita funguje, ale srdce nemůže pumpovat krev (mechanická překážka jako tamponáda, tenzní pneumothorax) nebo chybí intracelulární vápník k vyvolání kontrakce.",
      "Nesprávně. Toto je fibrilace komor.",
      "Nesprávně. PEA je porucha kontrakce myokardu, nikoli selektivní paréza sympatiku."
    ]
  },
  {
    "question": "Která z následujících patologií je příčinou Bernard-Soulierova syndromu?",
    "options": [
      "Defekt receptoru GP IIb/IIIa znemožňující agregaci destiček přes fibrinogen.",
      "Defekt receptoru GP Ib/IX/V, který slouží pro adhezi destiček k subendotelovému kolagenu přes von Willebrandův faktor.",
      "Absolutní nedostatek megakaryocytů.",
      "Inhibice cyklooxygenázy (COX-1) aspirinem."
    ],
    "correct": 1,
    "explanations": [
      "Nesprávně. Defekt GP IIb/IIIa způsobuje Glanzmannovu trombastenii.",
      "Správně! Bernard-Soulierův syndrom je vrozená trombocytopatie charakterizovaná defektem receptoru pro von Willebrandův faktor (vWF), což znemožňuje adhezi destiček k poškozené cévní stěně.",
      "Nesprávně. Jde o kvalitativní poruchu stávajících destiček.",
      "Nesprávně. Aspirin způsobuje získanou trombocytopatii."
    ]
  }
];

window.PATFYZ_EXAM_QUESTIONS = PATFYZ_EXAM_QUESTIONS;
window.PATFYZ_QUIZ = PATFYZ_QUIZ;
