// upv/data.js - Kompletní odborná databáze pro subportál mechanické ventilace (UPV)
// Vychází z doporučených postupů ČSARIM a ČSIM a mezinárodních standardů intenzivní péče.

const UPV_DATA = {
  // --- MODUL 1: ZÁKLADY UPV ---
  zaklady: {
    title: "Základy umělé plicní ventilace",
    description: "Klíčové patofyziologické a fyzikální principy mechaniky dýchání při UPV.",
    topics: [
      {
        title: "Rovnice pohybu (Equation of Motion)",
        icon: "📐",
        content: `Rovnice pohybu je základním fyzikálním popisem mechanické ventilace. Popisuje celkový tlak ($P_{aw}$), který musí ventilátor vyvinout k překonání pružných (elastických) a odporových (rezistenčních) vlastností plic a hrudní stěny:
        
        $$\\text{P}_{aw} = \\frac{\\text{V}}{\\text{C}} + (\\text{R} \\cdot \\dot{\\text{V}}) + \\text{PEEP}$$
        
        *   **$P_{aw}$** (Airway Pressure) – Tlak v dýchacích cestách generovaný ventilátorem.
        *   **$V$** (Volume) – Dechový objem (Tidal Volume, $V_T$).
        *   **$C$** (Compliance) – Poddajnost plic a hrudní stěny. Člen $V/C$ představuje **statický tlak** potřebný k překonání elastických sil plic.
        *   **$R$** (Resistance) – Odpor dýchacích cest.
        *   **$\\dot{V}$** (Flow) – Průtok plynu. Člen $R \\cdot \\dot{V}$ představuje **dynamický tlak** potřebný k překonání odporu dýchacích cest při proudění plynu.
        *   **PEEP** (Positive End-Expiratory Pressure) – Tlak na konci výdechu, který udržuje alveoly otevřené.`
      },
      {
        title: "Compliance (Poddajnost)",
        icon: "🎈",
        content: `Poddajnost ($C$) popisuje roztažitelnost plic a hrudní stěny. Je definována jako změna objemu vyvolaná jednotkovou změnou tlaku:
        
        $$\\text{C} = \\frac{\\Delta \\text{V}}{\\Delta \\text{P}}$$
        
        V klinické praxi rozlišujeme:
        1.  **Statickou compliance ($C_{stat}$)**: Měří se při nulovém průtoku (během inspirační pauzy). Odráží elastické vlastnosti plicní tkáně a hrudní stěny.
            $$C_{stat} = \\frac{V_T}{P_{plat} - PEEP}$$
            *Normální hodnota u ventilovaného pacienta s normálními plícemi:* $50–80\\text{ ml/cmH}_2\\text{O}$. U ARDS klesá pod $30$ nebo i $20\\text{ ml/cmH}_2\\text{O}$ ("baby lung").
        2.  **Dynamickou compliance ($C_{dyn}$)**: Měří se během proudění vzduchu. Zahrnuje i odpor dýchacích cest.
            $$C_{dyn} = \\frac{V_T}{PIP - PEEP}$$
        
        **Příčiny poklesu compliance:** ARDS, plicní edém, pneumonie, atelektáza, fibróza, pneumotorax, fluidotorax, obezita, distenze břicha.`
      },
      {
        title: "Rezistence (Odpor)",
        icon: "🌀",
        content: `Rezistence ($R$) představuje odpor, který dýchací cesty kladou proudícímu plynu. Je definována jako poměr změny tlaku k průtoku:
        
        $$\\text{R} = \\frac{\\text{PIP} - \\text{P}_{plat}}{\\dot{\\text{V}}}$$
        
        kde $\\dot{V}$ je inspirační průtok v litrech za sekundu (L/s).
        
        *Normální hodnota u intubovaného pacienta:* $5–10\\text{ cmH}_2\\text{O/L/s}$.
        
        **Příčiny zvýšení rezistence:**
        *   *Pacient:* Bronchospasmus, sekret v dýchacích cestách, otok sliznice, zalomení dýchacích cest, cizí těleso.
        *   *Ventilační okruh:* Příliš úzká endotracheální kanyla (ETK), zalomení hadic okruhu, obstrukce HME filtru.`
      },
      {
        title: "Elasticita (Pružnost)",
        icon: "🎗️",
        content: `Elasticita (elastance, $E$) je převrácenou hodnotou compliance ($E = 1/C$). Vyjadřuje tendenci plic smrštit se zpět do původního stavu po jejich roztažení. 
        
        Vysoká elasticita znamená, že plíce vyžadují velký tlak k dosažení určitého objemu (plicní tkáň je 'tuhá', např. u plicní fibrózy nebo ARDS).`
      },
      {
        title: "Mrtvý prostor (Dead Space)",
        icon: "💨",
        content: `Mrtvý prostor ($V_D$) je část vdechnutého objemu, která se neúčastní výměny plynů.
        
        Rozlišujeme:
        1.  **Anatomický mrtvý prostor**: Objem dýchacích cest (nos, ústa, hrtan, průdušnice, průdušky). U dospělého cca $2\\text{ ml/kg}$ ideální hmotnosti (cca $150\\text{ ml}$).
        2.  **Alveolární mrtvý prostor**: Alveoly, které jsou ventilované, ale nejsou perfundované (např. při plicní embolii, těžké hypotenzi).
        3.  **Fyziologický mrtvý prostor**: Součet anatomického a alveolárního mrtvého prostoru ($V_D/V_T$). U zdravých lidí činí cca $20–30\\%$, u ventilovaných pacientů s ARDS může přesáhnout $50–60\\%$.
        4.  **Mechanický (aparátový) mrtvý prostor**: Objem ventilačního okruhu od Y-spojky k pacientovi (ETK, HME filtr, katétrový uzavřený odsávací systém). **Klinická perla:** Minimalizace mechanického mrtvého prostoru je klíčová zejména u pediatrických pacientů nebo u pacientů s těžkým ARDS a hyperkapnií.`
      },
      {
        title: "Časová konstanta (Time Constant, Tau)",
        icon: "⏱️",
        content: `Časová konstanta ($\\tau$, řecké písmeno tau) vyjadřuje rychlost, s jakou se plíce plní nebo vyprazdňují. Je dána součinem rezistence a statické compliance:
        
        $$\\tau = \\text{R} \\cdot \\text{C}$$
        
        V praxi to znamená:
        *   Za **$1\\tau$** se plíce vyprázdní (nebo naplní) z **$63\\%$**.
        *   Za **$2\\tau$** z **$86\\%$**.
        *   Za **$3\\tau$** z **$95\\%$**.
        *   Za **$4–5\\tau$** z **$99\\%$** (považuje se za kompletní nádech/výdech).
        
        *Příklad:* Má-li pacient $R = 10\\text{ cmH}_2\\text{O/L/s}$ and $C = 0.05\\text{ L/cmH}_2\\text{O}$ ($50\\text{ ml/cmH}_2\\text{O}$), pak:
        $$\\tau = 10 \\cdot 0.05 = 0.5\\text{ sekund}$$
        Pro bezpečný a úplný výdech potřebuje tento pacient minimálně $3–4 \\cdot 0.5 = 1.5–2.0\\text{ s}$ expiračního času ($T_e$).
        
        **Klinické implikace:**
        *   *Obstrukční patologie (vysoká R, např. CHOPN, astma)*: Dlouhá časová konstanta. Hrozí neúplný výdech a rozvoj **Auto-PEEP (air trappingu)**. Vyžadují dlouhý expirační čas ($T_e$).
        *   *Restrikční patologie (nízká C, např. ARDS)*: Krátká časová konstanta. Plíce se plní i vyprazdňují velmi rychle, ale vyžadují vysoké tlaky. Vyžadují kratší expirační časy a protektivní objemy.`
      },
      {
        title: "Ventilace vs. Oxygenace",
        icon: "🔄",
        content: `Při UPV musíme striktně rozlišovat dva odlišné fyziologické procesy, které se řídí odlišnými parametry ventilátoru:
        
        ### 1. Oxygenace (Okysličení krve)
        *   Proces přestupu $O_2$ z alveolů do krve přes alveolo-kapilární membránu.
        *   Hlavní parametry na ventilátoru:
            *   **$FiO_2$** (Inhalační frakce kyslíku) – koncentrace kyslíku ve vdechované směsi ($21–100\\%$).
            *   **PEEP** (Pozitivní end-expirační tlak) – udržuje alveoly otevřené a brání jejich kolapsu (atelektázám), čímž zvětšuje plochu pro výměnu plynů.
            *   **Střední tlak v dýchacích cestách ($P_{mean}$)**.
        
        ### 2. Ventilace (Výměna plynů, eliminace $CO_2$)
        *   Fyzikální pohyb vzduchu do plic a ven, kterým se eliminuje oxid uhličitý ($CO_2$).
        *   Hlavní parametry na ventilátoru určující minutovou ventilaci ($M_V = V_T \\cdot RR$):
            *   **Dechový objem ($V_T$)** – množství vzduchu na jeden dech.
            *   **Dechová frekvence ($RR$)** – počet dechů za minutu.
        
        *Klinické pravidlo:* Má-li pacient vysoké $pCO_2$, musíme zvýšit **ventilaci** ($V_T$ nebo frekvenci). Má-li pacient nízké $pO_2$, musíme upravit **oxygenaci** ($FiO_2$ nebo PEEP).`
      }
    ]
  },

  // --- MODUL 2: DŮLEŽITÉ TLAKY ---
  tlaky: {
    title: "Důležité ventilační tlaky",
    description: "Vysvětlení tlaků měřených na ventilátoru a jejich klinický význam.",
    topics: [
      {
        id: "pip",
        title: "PIP (Peak Inspiratory Pressure)",
        abbreviation: "PIP",
        unit: "cmH₂O",
        safetyLimit: "< 35 cmH₂O",
        content: "Maximální tlak dosažený v dýchacích cestách na konci nádechu. Představuje celkovou sílu potřebnou k překonání jak odporu dýchacích cest (rezistence), tak tuhosti plic a hrudní stěny (elastance). Zvýšení PIP při stálém Plateau tlaku indikuje zvýšení odporu (např. sekrece v ETK, bronchospasmus)."
      },
      {
        id: "pplat",
        title: "Plateau Pressure (Tlak v plató)",
        abbreviation: "Pplat",
        unit: "cmH₂O",
        safetyLimit: "< 30 cmH₂O",
        content: "Tlak v dýchacích cestách naměřený na konci nádechu při **inspirační pauze** (nulový průtok plynu). Vzhledem k tomu, že plyn neproudí, odporový tlak ($R \\cdot \\dot{V}$) klesá na nulu a $P_{plat}$ přesně odráží tlak působící přímo na alveoly (statické napětí alveolů). Limitace $P_{plat} < 30\\text{ cmH}_2\\text{O}$ je klíčová k prevenci barotraumatu a volutraumatu."
      },
      {
        id: "peep",
        title: "PEEP (Pozitivní end-expirační tlak)",
        abbreviation: "PEEP",
        unit: "cmH₂O",
        safetyLimit: "5 - 20 cmH₂O",
        content: "Pozitivní tlak udržovaný v dýchacích cestách na konci výdechu. Zabraňuje kolapsu alveolů na konci expirace (atelektázám), stabilizuje plicní sklípky, zvyšuje funkční reziduální kapacitu (FRC) a zlepšuje oxygenaci snížením intrapulmonálního zkratu. Nastavení PEEP se liší: fyziologický PEEP je $5\\text{ cmH}_2\\text{O}$, u ARDS se používají střední až vysoké hodnoty ($10–20\\text{ cmH}_2\\text{O}$)."
      },
      {
        id: "autopeep",
        title: "Auto-PEEP (Vnitřní PEEP)",
        abbreviation: "Auto-PEEP",
        unit: "cmH₂O",
        safetyLimit: "< 5 cmH₂O (ideálně 0)",
        content: "Nezamýšlený přetlak v alveolech na konci výdechu, který vzniká v důsledku neúplného vydechnutí předchozího dechového objemu (tzv. air trapping). Typický pro pacienty s vysokou rezistencí (astma, CHOPN) nebo při nevhodném nastavení ventilátoru (krátký čas výdechu $T_e$, příliš vysoká frekvence). Zvyšuje dechovou práci pacienta, ztěžuje spouštění dechů (triggering) a může vést k oběhové instabilitě snížením žilního návratu."
      },
      {
        id: "pdiff",
        title: "Driving Pressure (Drivující tlak)",
        abbreviation: "ΔP (DP)",
        unit: "cmH₂O",
        safetyLimit: "< 15 cmH₂O",
        content: "Rozdíl mezi Plateau tlakem a celkovým PEEP. Představuje tlak potřebný k roztažení plic o daný dechový objem. \n$$\\Delta P = P_{plat} - PEEP$$\nJe jedním z nejdůležitějších prediktorů mortality u ARDS. Udržení driving pressure pod $15\\text{ cmH}_2\\text{O}$ dramaticky snižuje riziko ventilátorem indukovaného poškození plic (VILI). Lze jej snížit redukcí dechového objemu ($V_T$) nebo optimálním nastavením PEEP, které zlepší compliance plic."
      },
      {
        id: "pmean",
        title: "Mean Airway Pressure (Střední tlak)",
        abbreviation: "Pmean",
        unit: "cmH₂O",
        safetyLimit: "< 20 cmH₂O",
        content: "Průměrný tlak v dýchacích cestách během celého dechového cyklu (nádech i výdech). Koreluje s průměrnou alveolární expanzí a je hlavním determinantem oxygenace. Zvyšuje se zvýšením PEEP, PIP, prodloužením inspiračního času ($T_i$) nebo změnou poměru I:E. Vysoké hodnoty však mohou stlačit plicní kapiláry a snížit srdeční výdej."
      },
      {
        id: "ptp",
        title: "Transpulmonální tlak",
        abbreviation: "Ptp",
        unit: "cmH₂O",
        safetyLimit: "-10 až +25 cmH₂O",
        content: "Skutečný tlak působící na plicní parenchym, definovaný jako rozdíl mezi tlakem v alveolech ($P_{aw}$ při nulovém průtoku) a tlakem v pleurální dutině ($P_{pl}$, měřený nepřímo pomocí jícnové manometrické sondy jako $P_{es}$):\n$$P_{tp} = P_{aw} - P_{pl}$$\nUmožňuje odlišit tuhost plic od tuhosti hrudní stěny (např. u obézních pacientů, ascitu). Cílem je udržet pozitivní transpulmonální tlak na konci výdechu ($P_{tp, exp} > 0\\text{ cmH}_2\\text{O}$) k zabránění kolapsu plic a bezpečný tlak na konci nádechu ($P_{tp, insp} < 20–25\\text{ cmH}_2\\text{O}$) k zabránění overdistenze."
      }
    ]
  },

  // --- MODUL 3: VENTILAČNÍ REŽIMY ---
  rezimy: [
    {
      name: "VCV",
      fullName: "Volume Control Ventilation (Objemově řízená ventilace)",
      type: "Řízená ventilace (Objemová)",
      mechanics: {
        trigger: "Ventilátor (čas) nebo pacient (tlak/průtok)",
        limit: "Průtok (Flow limit) – průtok je konstantní",
        cycle: "Objem (Volume cycle) – nádech končí po dodání nastaveného dechového objemu V_T"
      },
      indications: "Základní režim při zahájení UPV, operační sály, pacienti v hluboké sedaci/analgézii, těžké ARDS (kde je nutná striktní kontrola dechového objemu k plicní protekci).",
      advantages: "Garantuje konstantní dechový objem ($V_T$) a minutovou ventilaci bez ohledu na změny mechanických vlastností plic (compliance/rezistence).",
      advantagesInfo: "Bezpečí v tom, že objem je stabilní i při změnách plicních patologií.",
      disadvantages: "Tlak v dýchacích cestách (PIP) se volně mění; při náhlém poklesu compliance hrozí nárůst tlaku a barotrauma. Horší synchronizace s aktivním pacientem.",
      standardParams: "V_T (6 ml/kg PBW), RR (12-16/min), PEEP (5-10 cmH₂O), FiO₂, Inspirační průtok (40-60 L/min), Tvar průtokové vlny (konstantní/decelerační)."
    },
    {
      name: "PCV",
      fullName: "Pressure Control Ventilation (Tlakově řízená ventilace)",
      type: "Řízená ventilace (Tlaková)",
      mechanics: {
        trigger: "Ventilátor (čas) nebo pacient (tlak/průtok)",
        limit: "Tlak (Pressure limit) – ventilátor udržuje konstantní tlak",
        cycle: "Čas (Time cycle) – nádech končí po uplynutí nastaveného času Ti"
      },
      indications: "ARDS (lepší distribuce plynu), pediatrie, pacienti s vysokým rizikem barotraumatu.",
      advantages: "Striktně limituje maximální tlak v dýchacích cestách. Decelerační průtoková křivka zajišťuje lepší oxygenaci a distribuci plynů.",
      advantagesInfo: "Tlakový limit chrání alveoly před nadměrným přetlakem.",
      disadvantages: "Dechový objem ($V_T$) není garantován. Při poklesu compliance plic hrozí hypoventilace a pokles minutové ventilace.",
      standardParams: "P_insp (tlak nad PEEP, 10-20 cmH₂O), Ti (0.8-1.2 s), RR, PEEP, FiO₂, Slope/Ramp (rychlost nárůstu tlaku)."
    },
    {
      name: "PSV",
      fullName: "Pressure Support Ventilation (Tlaková podpora)",
      type: "Spontánní s podporou",
      mechanics: {
        trigger: "Pacient (tlakem nebo průtokem – vyžaduje vlastní úsilí)",
        limit: "Tlak (Pressure limit) – ventilátor zvýší tlak na úroveň podpory",
        cycle: "Průtok (Flow cycle) – nádech končí při poklesu průtoku na definovanou mez (např. 25 %)"
      },
      indications: "Weaning (odpojování od ventilátoru), pacienti se zachovalou vlastní dechovou aktivitou.",
      advantages: "Vysoký komfort pacienta (sám si řídí frekvenci a čas nádechu), minimalizace sedace, trénink svalů.",
      advantagesInfo: "Snižuje atrofii bránice a zlepšuje celkový komfort.",
      disadvantages: "Není garantován žádný objem ani frekvence. Při apnoi pacienta hrozí fatální hypoventilace (nutná záložní apnoická ventilace).",
      standardParams: "P_supp (8-15 cmH₂O), PEEP, FiO₂, Trigger citlivost, Expiratory trigger threshold."
    },
    {
      name: "SIMV",
      fullName: "Synchronized Intermittent Mandatory Ventilation",
      type: "Smíšený režim",
      mechanics: {
        trigger: "Čas (řízený dech) synchronizovaný s pacientem, nebo pacient (spontánní dech)",
        limit: "Objem (SIMV-VC) nebo Tlak (SIMV-PC)",
        cycle: "Čas/Objem u řízených dechů, Průtok u spontánních dechů"
      },
      indications: "Přechodný režim mezi plnou kontrolou a weaningem (dnes spíše historický).",
      advantages: "Zajišťuje garantovanou minimální minutovou ventilaci při zachování možnosti spontánního dýchání pacienta.",
      advantagesInfo: "Brání úplné apnoi v kritických chvílích.",
      disadvantages: "Často zvyšuje dechovou práci a vyvolává asynchronie v důsledku nesouladu dechových vzorů.",
      standardParams: "Frekvence SIMV, V_T nebo P_insp, Ti, P_supp, PEEP, FiO₂."
    },
    {
      name: "CPAP",
      fullName: "Continuous Positive Airway Pressure",
      type: "Spontánní ventilace",
      mechanics: {
        trigger: "Pacient (spontánní dýchání)",
        limit: "Tlak (udržování konstantního přetlaku PEEP)",
        cycle: "Pacient (řízení vlastního nádechu i výdechu)"
      },
      indications: "Kardiogenní plicní edém, atelektázy, neinvazivní ventilace (NIV), závěrečná fáze odpojování.",
      advantages: "Zlepšuje funkční reziduální kapacitu plic (FRC), zlepšuje oxygenaci a brání kolapsu dýchacích cest.",
      advantagesInfo: "Nejfyziologičtější forma podpory, bez aktivního nafukování plic strojem.",
      disadvantages: "Neposkytuje žádnou mechanickou pomoc k překonání dechové práce pacienta (neřeší únavu dýchacích svalů).",
      standardParams: "PEEP/CPAP (5-12 cmH₂O), FiO₂."
    },
    {
      name: "APRV",
      fullName: "Airway Pressure Release Ventilation",
      type: "Speciální tlakový režim",
      mechanics: {
        trigger: "Čas (přepínání CPAP hladin Phigh a Plow)",
        limit: "Tlak (Phigh po 80-90 % dechového cyklu)",
        cycle: "Čas (krátké uvolnění tlaku na Plow k eliminaci CO2)"
      },
      indications: "Těžké ARDS s refrakterní hypoxií.",
      advantages: "Umožňuje spontánní dýchání při vysokém plicním náboru ($P_{high}$), zlepšuje V/Q poměr, snižuje sedaci.",
      advantagesInfo: "Zajišťuje maximální možný nábor alveolů po celou dobu.",
      disadvantages: "Složité nastavení. Nevhodné pro pacienty s těžkou obstrukční plicní chorobou.",
      standardParams: "P_high (25-30 cmH₂O), T_high (4.0-6.0 s), P_low (0 cmH₂O), T_low (0.4-0.6 s)."
    },
    {
      name: "NIV",
      fullName: "Non-Invasive Ventilation (Neinvazivní ventilace)",
      type: "Neinvazivní podpora",
      mechanics: {
        trigger: "Pacient (často s kompenzací leaků)",
        limit: "Tlak (dvouúrovňový přetlak BiPAP: IPAP a EPAP)",
        cycle: "Průtok (analogicky k PSV)"
      },
      indications: "Exacerbace CHOPN s acidózou, akutní srdeční selhání, plicní edém, prevence reintubace.",
      advantages: "Pacient není intubovaný, což snižuje riziko infekce (VAP), sedace a poškození dýchacích cest.",
      advantagesInfo: "Minimalizuje riziko nozokomiálních infekcí na JIP.",
      disadvantages: "Riziko úniků (leakage), klaustrofobie, otlaky na obličeji, riziko aspirace u poruch vědomí.",
      standardParams: "IPAP (10-18 cmH₂O), EPAP (4-8 cmH₂O), FiO₂, Trigger citlivost."
    },
    {
      name: "HFNC",
      fullName: "High-Flow Nasal Cannula (Vysokoprůtoková nosní kanyla)",
      type: "Kyslíková terapie (vysokoprůtoková)",
      mechanics: {
        trigger: "Žádný (kontinuální proud plynu)",
        limit: "Průtok (konstantní tok plynu, obvykle 40-60 L/min)",
        cycle: "Žádný"
      },
      indications: "Hypoxemické respirační selhání bez hyperkapnie, po extubaci, plicní edém.",
      advantages: "Vysoký komfort plynu (zvlhčení, ohřátí), vymývání mrtvého prostoru $CO_2$ z nosohltanu, mírný PEEP ($3–5\\text{ cmH}_2\\text{O}$).",
      advantagesInfo: "Zlepšuje komfort pacienta a toleranci kyslíku.",
      disadvantages: "Neposkytuje aktivní tlakovou podporu k ulehčení dechové práce (neuvolní unavené dýchací svaly).",
      standardParams: "Průtok (40-60 L/min), FiO₂ (21-100 %), Teplota (37 °C)."
    }
  ],

  // --- MODUL 4 a 5: ZDE BUDOU GRAFY A SMYČKY OVLÁDÁNY POMOCÍ JS A CANVAS ---
  // Informační texty k patologiím na křivkách (převzato z indexu pro tooltipy a popisy v app.js)
  krivkyInfo: {
    title: "Jak číst ventilační křivky",
    intro: "Zde je přehled toho, jak se patologické stavy projevují na časových křivkách tlaku (P-t), průtoku (F-t) a objemu (V-t)."
  },

  // --- MODUL 6: ASYNCHRONIE ---
  // Asynchronie jsou definovány v objektu asynchronie.items výše

  // --- MODUL 7: ARDS STRATEGIE ---
  // ARDS data jsou definována v objektu ards výše

  // --- MODUL 8: PEARLS ---
  // Pearls data jsou definována v objektu pearls výše
  
  // --- MODUL 9: WEANING & ODPOJOVÁNÍ ---
  weaning: {
    theory: [
      {
        title: "Kritéria připravenosti k odpojení (Screening)",
        items: [
          "**Vyřešení/zlepšení příčiny** respiračního selhání.",
          "**Oxygenace**: $paO_2/FiO_2 \\ge 150-200\\text{ mmHg}$ při $\\text{PEEP} \\le 8\\text{ cmH}_2\\text{O}$ a $FiO_2 \\le 40\\%$.",
          "**Hemodynamika**: Stabilní oběh bez nebo s minimální podporou vazopresorů (Noradrenalin $\\le 0.1\\text{ \\mu g/kg/min}$).",
          "**Vědomí a neurologický stav**: Pacient při vědomí, plní jednoduché příkazy, má dostatečný kašel a obranné reflexy (GCS $\\ge 8$).",
          "**Metabolismus**: Stabilní vnitřní prostředí, bez těžké acidózy ($pH \\ge 7.30$)."
        ]
      },
      {
        title: "Spontánní ventilační test (SBT - Spontaneous Breathing Trial)",
        items: [
          "**Metodika**: Test probíhá po dobu $30-120$ minut buď na **T-tubusu** (zcela bez podpory přístroje, pouze s přívodem zvlhčeného kyslíku), nebo s minimální tlakovou podporou (**CPAP/PS** $5-7\\text{ cmH}_2\\text{O}$).",
          "**Příznaky selhání testu** (indukující okamžitý návrat k řízené ventilaci):",
          "• Dechová frekvence $f > 35\\text{/min}$ nebo $< 8\\text{/min}$.",
          "• Pokles saturace $SpO_2 < 90\\%$ (nebo $< 88\\%$ u CHOPN) po dobu $> 5\\text{ minut}$.",
          "• Vývoj tachykardie ($HR > 140\\text{ bpm}$ nebo změna o $> 20\\%$).",
          "• Rozvoj hypertenze ($TK_{syst} > 180\\text{ mmHg}$) nebo hypotenze ($TK_{syst} < 90\\text{ mmHg}$).",
          "• Subjektivní příznaky: Úzkost, dušnost, zapojování pomocných svalů, opocení."
        ]
      },
      {
        title: "Kritéria úspěšné extubace",
        items: [
          "**Úspěšný SBT** trvající alespoň 30 minut.",
          "**Index RSBI < 105** na konci testu.",
          "Adekvátní **odkašlání** po odsátí a **cuff-leak test** (vyloučení edému hrtanu po vyfouknutí manžety endotracheální kanyly - únik vzduchu kolem kanyly by měl být $> 110\\text{ ml}$).",
          "Přítomnost **polykacího reflexu** a schopnost chránit dýchací cesty."
        ]
      }
    ],
    sbtCases: [
      {
        id: "pacient-a",
        name: "Jan (68 let) – Pooperační stav",
        history: "Pacient po plánované resekci tlustého střeva pro tumor. Ventilován 20 hodin pro protrahovaný úvod z anestezie. Nyní plně při vědomí, bez oběhové podpory.",
        vt_baseline: 480,
        rr_baseline: 16,
        spo2_baseline: 98,
        hr_baseline: 78,
        map_baseline: 82,
        pco2_baseline: 38,
        ph_baseline: 7.41,
        progression: [
          { minute: 0, rr: 16, vt: 480, hr: 78, spo2: 98, map: 82, pco2: 38, ph: 7.41, note: "SBT zahájen na CPAP/PS 5 cmH₂O. Pacient je klidný." },
          { minute: 10, rr: 17, vt: 470, hr: 79, spo2: 98, map: 83, pco2: 39, ph: 7.40, note: "Pravidelné dýchání, hemodynamika stabilní." },
          { minute: 20, rr: 18, vt: 460, hr: 81, spo2: 98, map: 84, pco2: 39, ph: 7.40, note: "Bez známek dechové tísně, bez opocení." },
          { minute: 30, rr: 18, vt: 470, hr: 80, spo2: 97, map: 85, pco2: 40, ph: 7.40, note: "SBT dokončen. Pacient toleruje výborně. RSBI = 38." }
        ],
        success: true,
        exit_recommendation: "Pacient splnil všechna kritéria SBT, RSBI je 38 (< 105). Extubace je vysoce doporučena. Cuff-leak test je pozitivní."
      },
      {
        id: "pacient-b",
        name: "Marie (72 let) – Svalová slabost po sepsi",
        history: "Pacientka ventilována 7 dní pro těžkou pneumokokovou sepsi s ARDS. Nyní bez podpory oběhu, zánětlivé parametry klesly, ale je patrná povšechná svalová slabost.",
        vt_baseline: 420,
        rr_baseline: 18,
        spo2_baseline: 95,
        hr_baseline: 85,
        map_baseline: 75,
        pco2_baseline: 41,
        ph_baseline: 7.39,
        progression: [
          { minute: 0, rr: 18, vt: 420, hr: 85, spo2: 95, map: 75, pco2: 41, ph: 7.39, note: "Zahájen test na T-tubusu. Pacientka spolupracuje." },
          { minute: 5, rr: 24, vt: 320, hr: 94, spo2: 93, map: 82, pco2: 44, ph: 7.36, note: "Nárůst dechové frekvence, objem klesá. Začíná být neklidná." },
          { minute: 15, rr: 32, vt: 240, hr: 112, spo2: 90, map: 92, pco2: 49, ph: 7.31, note: "Výrazná tachypnoe, mělké dýchání, zapojení krčních svalů. Opocení." },
          { minute: 25, rr: 36, vt: 210, hr: 125, spo2: 86, map: 98, pco2: 54, ph: 7.26, note: "Pacientka je vyčerpaná. RSBI = 171. SpO₂ klesá. SBT selhal!" }
        ],
        success: false,
        exit_recommendation: "Test SBT selhal kvůli závažné tachypnoi, poklesu saturace a svalové únavě (RSBI = 171 >> 105). Extubace je kontraindikována, pacientku je nutné ihned vrátit na tlakovou podporu ventilátoru (PSV/PCV) a nechat odpočinout."
      },
      {
        id: "pacient-c",
        name: "Karel (65 let) – Chronická hyperkapnie (CHOPN)",
        history: "Pacient s těžkým CHOPN (GOLD IV) ventilován 4 dny pro infekční exacerbaci. Nyní kompenzován, při vědomí, odkašlává, stabilní.",
        vt_baseline: 380,
        rr_baseline: 20,
        spo2_baseline: 91,
        hr_baseline: 88,
        map_baseline: 79,
        pco2_baseline: 52,
        ph_baseline: 7.37,
        progression: [
          { minute: 0, rr: 20, vt: 380, hr: 88, spo2: 91, map: 79, pco2: 52, ph: 7.37, note: "Zahájen SBT na CPAP 5 cmH₂O. Cílová saturace u CHOPN je 88-92 %." },
          { minute: 10, rr: 22, vt: 360, hr: 90, spo2: 90, map: 81, pco2: 54, ph: 7.36, note: "Dýchání klidné. Mírná hyperkapnie je u tohoto pacienta chronická." },
          { minute: 20, rr: 23, vt: 350, hr: 92, spo2: 91, map: 82, pco2: 55, ph: 7.35, note: "Pacient je klidný, komunikuje, toleruje test." },
          { minute: 30, rr: 24, vt: 360, hr: 94, spo2: 90, map: 83, pco2: 56, ph: 7.35, note: "SBT dokončen. RSBI = 67. Acidóza je kompenzovaná." }
        ],
        success: true,
        exit_recommendation: "Pacient splnil kritéria SBT pro chronického CHOPN pacienta. RSBI je 67 (< 105), pH 7.35 je stabilní. Extubaci lze zkusit, ideálně s okamžitým přechodem na neinvazivní podporu (NIV) nebo HFNC jako prevenci reintubace."
      }
    ]
  }
};

// Export dat pro použití v app.js (pokud bychom jeli přes moduly, ale pro vanilla JS je deklarujeme globálně)
window.UPV_DATA = UPV_DATA;
