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
        
        *Příklad:* Má-li pacient $R = 10\\text{ cmH}_2\\text{O/L/s}$ a $C = 0.05\\text{ L/cmH}_2\\text{O}$ ($50\\text{ ml/cmH}_2\\text{O}$), pak:
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
      disadvantages: "Tlak v dýchacích cestách (PIP) se volně mění; při náhlém poklesu compliance hrozí prudký nárůst tlaku a barotrauma. Horší synchronizace s aktivním pacientem (konstantní průtok nemusí pokrýt potřebu pacienta - flow starvation).",
      standardParams: "V_T (6 ml/kg PBW), RR (12-16/min), PEEP (5-10 cmH₂O), FiO₂, Inspirační průtok (40-60 L/min), Tvar průtokové vlny (konstantní/decelerační)."
    },
    {
      name: "PCV",
      fullName: "Pressure Control Ventilation (Tlakově řízená ventilace)",
      type: "Řízená ventilace (Tlaková)",
      mechanics: {
        trigger: "Ventilátor (čas) nebo pacient (tlak/průtok)",
        limit: "Tlak (Pressure limit) – ventilátor udržuje konstantní nastavený tlak po celý nádech",
        cycle: "Čas (Time cycle) – nádech končí po uplynutí nastaveného času Ti"
      },
      indications: "ARDS (lepší distribuce plynu v plicích), pediatrie (kanyly bez obturační manžety), pacienti s rizikem barotraumatu.",
      advantages: "Striktně limituje maximální tlak v dýchacích cestách (prevence barotraumatu). Decelerační průtoková křivka zajišťuje lepší a homogennější distribuci plynu v alveolech a lepší oxygenaci.",
      disadvantages: "Dechový objem ($V_T$) není garantován. Při poklesu compliance nebo zvýšení rezistence dýchacích cest dochází k poklesu $V_T$ a hrozí hypoventilace.",
      standardParams: "P_insp (tlak nad PEEP, obvykle 10-20 cmH₂O), Ti (0.8-1.2 s), RR, PEEP, FiO₂, Slope/Ramp (rychlost nárůstu tlaku)."
    },
    {
      name: "PSV",
      fullName: "Pressure Support Ventilation (Tlaková podpora)",
      type: "Spontánní s podporou",
      mechanics: {
        trigger: "Pacient (tlakem nebo průtokem – pacient musí mít vlastní dechovou aktivitu)",
        limit: "Tlak (Pressure limit) – ventilátor zvýší tlak na nastavenou hodnotu podpory",
        cycle: "Průtok (Flow cycle) – nádech končí, když klesne inspirační průtok na určité procento maximální hodnoty (obvykle 25 %)"
      },
      indications: "Weaning (odpojování od ventilátoru), pacienti se zachovalou vlastní dechovou aktivitou, zotavení po anestezii.",
      advantages: "Vysoký komfort pacienta (sám si určuje frekvenci, čas nádechu i průtok), trénink dýchacích svalů, minimalizace sedace.",
      disadvantages: "Není garantován žádný objem ani frekvence. Při apnoi pacient neventiluje (nutné nastavení záložní apnoické ventilace - backup ventilation).",
      standardParams: "P_supp (tlaková podpora, 8-15 cmH₂O), PEEP, FiO₂, Trigger citlivost, Expiratory trigger (ukončení nádechu, např. 25-30 % peak flow)."
    },
    {
      name: "SIMV",
      fullName: "Synchronized Intermittent Mandatory Ventilation",
      type: "Smíšený režim",
      mechanics: {
        trigger: "Čas (řízený dech) synchronizovaný s pacientem, nebo pacient (spontánní dech)",
        limit: "Objem (u SIMV-VC) nebo Tlak (u SIMV-PC)",
        cycle: "Čas/Objem u řízených dechů, Průtok u spontánních (podporovaných) dechů"
      },
      indications: "Přechodný režim mezi plně řízenou ventilací a spontánním dýcháním (dnes již méně užívaný, nahrazován PSV).",
      advantages: "Garantuje minimální minutovou ventilaci nastaveným počtem řízených dechů, přičemž mezi nimi dovoluje pacientovi spontánně dýchat s tlakovou podporou.",
      disadvantages: "Může vést k vysoké dechové práci a asynchronii, pokud je nevhodně nastaven poměr řízených a spontánních dechů. Zbytečně komplikovaný koncept.",
      standardParams: "Řízená frekvence SIMV, V_T nebo P_insp, Ti, P_supp pro spontánní dechy, PEEP, FiO₂."
    },
    {
      name: "CPAP",
      fullName: "Continuous Positive Airway Pressure (Kontinuální pozitivní tlak)",
      type: "Spontánní ventilace",
      mechanics: {
        trigger: "Pacient (spontánní dýchání)",
        limit: "Tlak (udržování konstantního přetlaku PEEP)",
        cycle: "Pacient (řízení vlastního nádechu i výdechu)"
      },
      indications: "Spontánně dýchající pacienti s hypoxemickým selháním (kardiogenní plicní edém, atelektázy), neinvazivní ventilace (NIV), závěrečná fáze odpojování.",
      advantages: "Zabraňuje kolapsu dýchacích cest a alveolů, zlepšuje oxygenaci a funkční reziduální kapacitu bez nutnosti dechové asistence (nulová podpora tlaku).",
      disadvantages: "Neposkytuje žádnou mechanickou podporu k překonání dechové práce pacienta (neodstraňuje únavu dýchacích svalů). Vyžaduje plně bdělého a spolupracujícího pacienta.",
      standardParams: "PEEP/CPAP (5-12 cmH₂O), FiO₂."
    },
    {
      name: "APRV",
      fullName: "Airway Pressure Release Ventilation",
      type: "Speciální tlakový režim",
      mechanics: {
        trigger: "Čas (přepínání mezi dvěma hladinami CPAP tlaku: Phigh a Plow)",
        limit: "Tlak (Phigh po většinu času)",
        cycle: "Čas (rychlé uvolnění tlaku na kratičký čas Tlow k eliminaci CO2)"
      },
      indications: "Těžké refrakterní hypoxemické selhání plic (těžké ARDS), kde standardní metody selhávají.",
      advantages: "Umožňuje pacientovi spontánně dýchat na vysoké hladině tlaku ($P_{high}$), což maximalizuje nábor alveolů (recruitment) bez oběhového kolapsu a barotraumatu. Zlepšuje poměr ventilace/perfúze.",
      disadvantages: "Náročné na pochopení a správné nastavení ($T_{low}$ musí být extrémně krátký, aby nedošlo k derecruitmentu - kolapsu plic). Kontraindikován u těžkých obstrukčních poruch.",
      standardParams: "P_high (25-30 cmH₂O), T_high (4.0-6.0 s), P_low (0 cmH₂O), T_low (0.4-0.6 s, nastaveno podle expirační průtokové křivky tak, aby výdech skončil při 50-75 % peak flow k prevenci kolapsu)."
    },
    {
      name: "NIV",
      fullName: "Non-Invasive Ventilation (Neinvazivní ventilace)",
      type: "Neinvazivní podpora",
      mechanics: {
        trigger: "Pacient (často s pokročilou kompenzací úniků masky)",
        limit: "Tlak (dvouúrovňový přetlak - BiPAP: IPAP a EPAP)",
        cycle: "Průtok (analogicky k PSV)"
      },
      indications: "Akutní exacerbace CHOPN s respirační acidózou, akutní kardiogenní plicní edém, prevence reintubace u rizikových pacientů.",
      advantages: "Pacient nemusí být intubován (tím se vyhýbáme rizikům ventilátorové pneumonie VAP, sedace, poranění dýchacích cest). Zachování polykání, řeči a kašle.",
      disadvantages: "Úniky kolem masky (leakage), otlaky na obličeji, klaustrofobie, riziko aspirace u pacientů s poruchou vědomí. Nelze použít u nestabilních pacientů.",
      standardParams: "IPAP (Inspirační tlak, 10-18 cmH₂O), EPAP (Expirační tlak, 4-8 cmH₂O), FiO₂, citlivost triggerů upravená pro úniky."
    },
    {
      name: "HFNC",
      fullName: "High-Flow Nasal Cannula (Vysokoprůtoková kyslíková terapie)",
      type: "Kyslíková terapie (Nejedná se o mechanický ventilátor v pravém slova smyslu)",
      mechanics: {
        trigger: "Není (kontinuální tok plynu)",
        limit: "Průtok (nastaven vysoký konstantní tok plynu, obvykle 40-60 L/min)",
        cycle: "Není"
      },
      indications: "Hypoxemické respirační selhání (bez hyperkapnie!), např. pneumonie, počínající ARDS, po extubaci.",
      advantages: "Vysoký průtok pokrývá nebo převyšuje špičkový inspirační průtok pacienta, což zajišťuje přesné dodání $FiO_2$. Generuje mírný PEEP ($3–5\\text{ cmH}_2\\text{O}$), zvlhčuje a ohřívá směs (komfort, clearance sekretu), vyplachuje mrtvý prostor $CO_2$ z nosohltanu.",
      disadvantages: "Neposkytuje aktivní inspirační podporu tlaku (při závažném vyčerpání pacienta a vysoké dechové práci nestačí). Riziko oddálení intubace u pacientů, kteří selhávají.",
      standardParams: "Flow (40-60 L/min u dospělých), FiO₂ (21-100 %), Teplota (37 °C)."
    }
  ],

  // --- MODUL 4: VENTILAČNÍ KŘIVKY (SKALÁRNÍ GRAFY) ---
  krivky: {
    title: "Ventilační křivky (Skalární grafy)",
    description: "Analýza časových průběhů tlaku, průtoku a objemu je klíčem k odhalení patologií na ventilátoru.",
    categories: [
      {
        name: "Tlak–čas (P-t)",
        states: {
          normal: {
            title: "Normální průběh",
            desc: "U VCV lineární nárůst tlaku k PIP s následným poklesem na Pplat během inspirační pauzy a návratem na nastavenou hodnotu PEEP na konci výdechu. U PCV rychlý obdélníkový nárůst tlaku, který se drží na konstantní hladině po celou dobu Ti."
          },
          resistance: {
            title: "Zvýšená rezistence (Odpor dýchacích cest)",
            desc: "Výrazně se zvyšuje rozdíl mezi špičkovým tlakem (PIP) a plateau tlakem ($PIP - P_{plat}$). Samotný $P_{plat}$ zůstává normální (pokud se nemění compliance plic). Typické pro bronchospasmus, hlen v ETK nebo zalomenou kanylu."
          },
          compliance: {
            title: "Snížená compliance (Poddajnost plic)",
            desc: "Dochází k paralelnímu nárůstu špičkového tlaku (PIP) i plateau tlaku ($P_{plat}$). Rozdíl mezi nimi ($PIP - P_{plat}$) zůstává konstantní. Typické pro ARDS, plicní edém, pneumotorax nebo rozvoj atelektáz."
          },
          autopeep: {
            title: "Auto-PEEP / Air Trapping",
            desc: "Na křivce tlaku u spontánně dýchajícího pacienta je patrné, že pacient musí před spuštěním nádechu vyvinout obrovské inspirační úsilí (pokles tlaku hluboko pod PEEP), aby překonal vnitřní přetlak v plících a sepnul citlivostní ventilátorový trigger."
          }
        }
      },
      {
        name: "Objem–čas (V-t)",
        states: {
          normal: {
            title: "Normální průběh",
            desc: "Během nádechu křivka objemu plynule stoupá k cílovému dechovému objemu ($V_T$). Během výdechu křivka plynule klesá zpět k nulové linii. Křivka je symetrická."
          },
          leak: {
            title: "Leak (Únik vzduchu z okruhu)",
            desc: "Expirační rameno křivky nedosáhne nulové linie (objem se 'zastaví' nad nulou a pak prudce spadne při začátku dalšího nádechu). Rozdíl mezi inspiračním a expiračním objemem představuje velikost úniku (např. netěsnící manžeta ETK, netěsnost ventilačního okruhu)."
          },
          retence: {
            title: "Retence objemu (Air trapping)",
            desc: "Objem se nestihne kompletně vydechnout a křivka je přerušena dalším inspiračním cyklem. Dlouhodobě vede k progresivní hyperinflaci plic a barotraumatu."
          }
        }
      },
      {
        name: "Průtok–čas (F-t)",
        states: {
          normal: {
            title: "Normální režimy (VCV vs. PCV)",
            desc: "U VCV (objemově řízené) je průtok konstantní (čtvercový/obdélníkový tvar při nádechu). U PCV (tlakově řízené) průtok prudce vystřelí na začátku a poté lineárně/exponenciálně klesá (decelerační křivka). Výdechový průtok je u obou pasivní (decelerační pod nulovou osou)."
          },
          obstrukce: {
            title: "Obstrukce (Zúžení dýchacích cest)",
            desc: "Expirační průtoková křivka dosahuje velmi nízkého vrcholu (nízký Peak Expiratory Flow) a její návrat k nule trvá abnormálně dlouho (plošší a protáhlejší tvar pod osou). Typické pro astma, bronchospasmus."
          },
          bronchodilatace: {
            title: "Bronchodilatační odpověď",
            desc: "Při úspěšném podání bronchodilatancia (např. Ventolin) se expirační křivka zkracuje, vrchol špičkového expiračního průtoku se zvětšuje (strmější sklon k nule), což prokazuje pokles odporu."
          },
          airtrapping: {
            title: "Air trapping (Auto-PEEP)",
            desc: "Expirační průtok **nedosáhne nuly** před zahájením dalšího inspiračního cyklu. Křivka je náhle 'odříznuta' a skokem se vrací do inspirační části. To dokazuje, že v plicích zůstal zachycený vzduch pod tlakem."
          }
        }
      }
    ]
  },

  // --- MODUL 5: VENTILAČNÍ SMYČKY (LOOPS) ---
  smycky: {
    title: "Ventilační smyčky",
    description: "Smyčky kombinují dvě proměnné (Tlak-Objem nebo Průtok-Objem) a poskytují rychlou vizuální diagnostiku plicní mechaniky.",
    topics: [
      {
        name: "Tlak-Objemová smyčka (P-V Loop)",
        description: "Zobrazuje vztah mezi tlakem v dýchacích cestách (osa X) a objemem plic (osa Y). Sklon smyčky odpovídá statické compliance (čím je plíce tužší, tím plošší je smyčka).",
        states: {
          normal: {
            title: "Normální stav",
            desc: "Smyčka má eliptický tvar, orientovaný šikmo vzhůru pod úhlem cca 45 stupňů. Inspirační část běží spodem, expirační vrchem."
          },
          overdistension: {
            title: "Overdistenze (Zobákovitý tvar / 'Bird Beak')",
            desc: "Na konci nádechu smyčka prudce zploští (vytvoří se horizontální 'zobák'). Znamená to, že další nárůst tlaku již nevede k nárůstu objemu - plíce je přeplněná (přepjatá). Řešením je snížení dechového objemu ($V_T$) nebo inspiračního tlaku."
          },
          recruitment: {
            title: "Nábor alveolů (Lower Inflection Point)",
            desc: "Bod na začátku inspiračního ramene, kde dochází k náhlému zlomu a strmému vzestupu křivky. Představuje tlak, při kterém se otevírají zkolabované plicní sklípky. Nastavení PEEP těsně nad tento bod chrání plíce před cyklickým kolapsem."
          },
          leak: {
            title: "Leak (Nedovřená smyčka)",
            desc: "Smyčka se nevrací do výchozího bodu na ose Y (objem 0). Expirační rameno končí nad nulovou linkou a padá kolmo dolů, což značí ztrátu objemu únikem vzduchu mimo expirační chlopeň ventilátoru."
          },
          restriction: {
            title: "Restrikce (Plošší smyčka)",
            desc: "Smyčka je výrazně skloněná k horizontální ose X (velmi nízký sklon). K dosažení malého objemu je zapotřebí vysokého tlaku, což je typické pro těžký plicní edém, ARDS či plicní fibrózu (extrémně nízká compliance)."
          }
        }
      },
      {
        name: "Průtok-Objemová smyčka (F-V Loop)",
        description: "Zobrazuje vztah mezi objemem plic (osa X) a průtokem dýchacích plynů (osa Y). Nádech probíhá obvykle nad nulovou linií (nebo pod ní, dle nastavení displeje ventilátoru), výdech na opačné straně.",
        states: {
          normal: {
            title: "Normální stav",
            desc: "Plynulý nádech (konstantní u VCV, decelerační u PCV) a rychlý výdech s prudkým startem na špičkový expirační průtok, který pak lineárně klesá zpět k nulovému objemu."
          },
          obstruction: {
            title: "Obstrukce (Prohnuté expirium / Scooped out)",
            desc: "Expirační část smyčky vykazuje typické 'prohnutí' (konkávní tvar směrem k ose). Proudění vzduchu při výdechu je limitováno odporem dýchacích cest (bronchospasmus, astma, CHOPN)."
          },
          airtrapping: {
            title: "Nedokončená smyčka (Air trapping)",
            desc: "Expirační křivka se nevrací do nulového průtoku na ose Y, ale je náhle useknuta před dosažením nuly a skočí na začátek dalšího dechu. Indikuje přítomnost Auto-PEEP."
          }
        }
      }
    ]
  },

  // --- MODUL 6: ASYNCHRONIE VENTILÁTOR-PACIENT ---
  asynchronie: {
    title: "Asynchronie ventilátor–pacient",
    description: "Asynchronie představují nesoulad mezi dechovým úsilím pacienta a dodávkou plynů z ventilátoru. Vyskytují se u více než 25 % ventilovaných pacientů a prodlužují dobu UPV a pobyt na JIP.",
    items: [
      {
        id: "delayed-trigger",
        name: "Delayed triggering (Opožděný trigger)",
        monitor: {
          graphType: "static",
          desc: "Na křivce tlaku a průtoku je vidět zřetelný pokles tlaku (úsilí pacienta) následovaný zpožděním (např. 100-300 ms) předtím, než ventilátor zahájí inspirační průtok."
        },
        pathology: "Časový nesoulad mezi neurologickým začátkem nádechu pacienta a mechanickým otevřením chlopně ventilátoru. Způsobuje výrazné zvýšení dechové práce pacienta (WOB).",
        causes: "Nejčastěji přítomnost Auto-PEEP (pacient musí nejprve 'překonat' vnitřní přetlak v plících, než dokáže aktivovat trigger), nízká citlivost triggeru (příliš vysoká hodnota v L/min či cmH₂O), pomalá odezva ventilátoru.",
        treatment: "1. Správně nastavit citlivost triggeru (např. průtokový trigger na 1.5 - 2.0 L/min).\n2. Snížit Auto-PEEP (prodloužit expirační čas, snížit dechovou frekvenci).\n3. Zvýšit vnější PEEP na cca 75-80 % vnitřního Auto-PEEP, což pacientovi usnadní triggerování."
      },
      {
        id: "ineffective-trigger",
        name: "Ineffective triggering (Neúčinný trigger)",
        monitor: {
          graphType: "static",
          desc: "Na křivce průtoku během expirace je patrná malá výchylka směrem k nule (snaha pacienta nadechnout se), která však nepřekročí citlivost triggeru a nespustí nádech. Tlak v dýchacích cestách v ten moment mírně klesne."
        },
        pathology: "Neurologický povel k nádechu proběhne, ale ventilátor jej ignoruje a nedodá dechový objem. Velmi frustrující pro pacienta, vede k dyspnoi a neklidu.",
        causes: "Vysoký Auto-PEEP, těžká slabost dýchacích svalů (např. kritická myopatie na JIP), nadměrná sedace tlumící dechové centrum, příliš necitlivě nastavený trigger.",
        treatment: "1. Zvýšit citlivost triggeru.\n2. Snížit Auto-PEEP (optimalizovat expirační čas, podání bronchodilatancií).\n3. Snížit hloubku sedace (umožnit posílení vlastního dechového úsilí pacienta).\n4. Aplikovat vnější PEEP k vyrovnání Auto-PEEP."
      },
      {
        id: "auto-trigger",
        name: "Auto-triggering (Autotrigger)",
        monitor: {
          graphType: "static",
          desc: "Ventilátor cykluje s velmi vysokou frekvencí, která neodpovídá klinickému stavu pacienta. Na křivkách chybí jakákoliv známka předchozího poklesu tlaku (pacientského úsilí) před zahájením nádechu."
        },
        pathology: "Ventilátor spouští nádechy sám bez reálného úsilí pacienta. Vede k hyperventilaci, respirační alkalóze a air trappingu.",
        causes: "Příliš citlivě nastavený trigger (např. flow trigger < 0.5 L/min), kondenzovaná voda ve ventilačních hadicích (která se pohybuje a simuluje průtok), úniky v okruhu (leakage), srdeční oscilace (údery srdce přenášené na plíce a dýchací cesty spouštějí citlivý trigger).",
        treatment: "1. Snížit citlivost triggeru (např. zvýšit z 1.0 L/min na 2.0-2.5 L/min, nebo přepnout na tlakový trigger).\n2. Vylít kondenzovanou vodu z hadic a zkontrolovat těsnost okruhu.\n3. Pokud jsou příčinou kardiogenní oscilace, zvýšit práh průtokového triggeru nebo přepnout na tlakový trigger."
      },
      {
        id: "flow-starvation",
        name: "Flow starvation (Nedostatečný průtok)",
        monitor: {
          graphType: "static",
          desc: "Na tlakové křivce u VCV (s konstantním průtokem) dochází během nádechu k propadu tlaku (křivka je prohnutá dolů - 'vykousnutá' místo lineárně rostoucí). Vypadá jako sedlo."
        },
        pathology: "Průtok dodávaný ventilátorem je nižší než inspirační požadavek (hlad) aktivně dýchajícího pacienta. Způsobuje obrovský pocit dušení a extrémní zapojení pomocných dýchacích svalů.",
        causes: "Příliš nízko nastavený konstantní průtok u VCV (např. < 40 L/min), vysoký dechový pohon pacienta při nedostatečné sedaci.",
        treatment: "1. Zvýšit inspirační průtok u VCV (na 60-80 L/min).\n2. Přepnout z konstantního průtoku na decelerační.\n3. Zvážit přechod na tlakově řízený režim (PCV nebo PSV), kde je průtok proměnlivý a automaticky se přizpůsobuje úsilí pacienta.\n4. Optimalizovat analgosedaci."
      },
      {
        id: "excessive-flow",
        name: "Excessive flow (Nadměrný průtok)",
        monitor: {
          graphType: "static",
          desc: "Tlaková křivka vykazuje na samém začátku nádechu ostrý hrot (pressure spike/overshoot), po kterém tlak prudce klesá na stabilnější úroveň."
        },
        pathology: "Ventilátor dodává plyn na začátku nádechu příliš rychle, což vede k turbulenci a prudkému nárůstu tlaku v horních dýchacích cestách ještě před naplněním alveolů.",
        causes: "Příliš strmý nárůst tlaku (příliš krátký nastavený čas nárůstu tlaku - Slope/Ramp/Rise Time), příliš vysoký počáteční průtok.",
        treatment: "1. Prodloužit čas nárůstu tlaku (Slope / Rise Time) – obvykle na 0.1 - 0.2 sekundy.\n2. U spontánních režimů snížit úroveň tlakové podpory, pokud je celkově nadbytečná."
      },
      {
        id: "early-cycling",
        name: "Early cycling (Předčasné ukončení)",
        monitor: {
          graphType: "static",
          desc: "Na konci nádechu je na průtokové křivce vidět ostrý pokles průtoku k nule, doprovázený okamžitým prudkým poklesem tlaku s drobným hrotem směrem dolů, po kterém následuje pokračující dechové úsilí pacienta (aktivní nádech pokračuje i během ventilátorové expirace)."
        },
        pathology: "Ventilátor ukončí dodávku inspiračního tlaku (přepne do výdechu) dříve, než skončí neurologický nádech pacienta. Zvyšuje dechovou práci a může vést k dvojitému triggerování.",
        causes: "Nastavený inspirační čas ($T_i$) je příliš krátký (u PCV), nebo je kritérium ukončení nádechu (expiratory trigger threshold) nastaveno příliš vysoko (např. 40-50 % peak flow u PSV místo standardních 25 %).",
        treatment: "1. Prodloužit inspirační čas ($T_i$) u řízených režimů.\n2. Snížit hodnotu expiračního triggeru u PSV (např. z 40 % na 20-25 % peak flow), čímž se prodlouží doba nádechu."
      },
      {
        id: "late-cycling",
        name: "Late cycling (Opožděné ukončení)",
        monitor: {
          graphType: "static",
          desc: "Na konci nádechu dochází na tlakové křivce k ostrému hrotu směrem nahoru (tlakovému překmitu), což značí, že pacient se snaží aktivně vydechnout proti stále běžícímu nádechu z ventilátoru. Expirace začíná aktivním vytlačením vzduchu pacientem."
        },
        pathology: "Ventilátor pokračuje v dodávce nádechu i poté, co pacient již neurologicky zahájil výdech. Dochází k boji s ventilátorem a aktivnímu zapojení expiračních svalů břicha.",
        causes: "Příliš dlouhý nastavený inspirační čas ($T_i$) u PCV, příliš nízko nastavené kritérium ukončení nádechu u PSV (např. 5-10 % u pacientů s CHOPN, kteří mají dlouhé plnění plic v důsledku vysoké rezistence).",
        treatment: "1. Zkrátit inspirační čas ($T_i$) u PCV.\n2. U PSV zvýšit práh expiračního triggeru (např. z 25 % na 40-50 % peak flow), což umožní ventilátoru přepnout do výdechu dříve, jakmile průtok začne klesat."
      },
      {
        id: "double-trigger",
        name: "Double triggering (Dvojitý trigger)",
        monitor: {
          graphType: "static",
          desc: "Dva po sobě jdoucí nádechy oddělené extrémně krátkým expiračním časem (prakticky chybí výdech). Dechový objem druhého dechu se přičítá k prvnímu (stacking volume), což vede k extrémním tlakům."
        },
        pathology: "Neurologické dechové úsilí pacienta je delší a silnější než nastavený čas nádechu ventilátoru. Na konci prvního dechu pacient stále nasává vzduch, což okamžitě aktivuje trigger pro druhý dech.",
        causes: "Příliš malý nastavený dechový objem ($V_T$) nebo příliš krátký inspirační čas ($T_i$) u těžce ventilovaných pacientů s vysokým dechovým pohonem (např. ARDS).",
        treatment: "1. Zvýšit dechový objem (pokud to dovolují limity ochranné ventilace plic) nebo prodloužit $T_i$.\n2. Zvýšit úroveň sedace nebo analgezie (snížení dechového pohonu pacienta).\n3. Přepnout na tlakově řízenou ventilaci s dostatečnou podporou."
      },
      {
        id: "reverse-trigger",
        name: "Reverse triggering (Reverzní trigger)",
        monitor: {
          graphType: "static",
          desc: "Řízený dech ventilátoru (strojový nádech) vyvolá reflexní stah bránice pacienta uprostřed nebo na konci tohoto nádechu, což se projeví jako pokles tlaku nebo zvýšení průtoku v pozdní fázi inspirační křivky."
        },
        pathology: "Fenomén popsaný u hluboce sedovaných pacientů, kdy pasivní roztažení plic ventilátorem stimuluje napínací receptory a reflexně vyvolá aktivní stah bránice (entrainment). Může vést k breath-stackingu (dvojitému dechu) a poškození plic.",
        causes: "Neuromuskulární vazba (entrainment) u pacientů v analgosedaci bez kompletní myorelaxace.",
        treatment: "1. Pokud dochází k breath stackingu, zvýšit sedaci nebo přechodně podat myorelaxancia.\n2. Pokud je pacient stabilní, snížit sedaci a převést jej na spontánnější režim (PSV), aby sám řídil dechy."
      }
    ]
  },

  // --- MODUL 7: ARDS VENTILAČNÍ STRATEGIE ---
  ards: {
    title: "ARDS ventilační strategie",
    description: "Standardizovaný klinický protokol ochranné plicní ventilace u syndromu akutní respirační tísně (ARDS).",
    checklist: [
      {
        title: "Nízké dechové objemy (Protektivní ventilace)",
        target: "4–6 ml/kg PBW (Predicted Body Weight)",
        rationale: "Zabraňuje volutraumatu (přepětí alveolů objemem). Výpočet ideální (predikované) hmotnosti PBW se provádí podle vzorců:\n*   **Muži:** $50 + 2.3 \\cdot (\\text{výška v cm} - 152.4)$\n*   **Ženy:** $45.5 + 2.3 \\cdot (\\text{výška v cm} - 152.4)$\n*Klinické pravidlo:* Dechový objem nastavujeme zásadně podle PBW (podle výšky), nikoli podle aktuální hmotnosti pacienta!"
      },
      {
        title: "Optimální limitace Driving Pressure (Drivující tlak)",
        target: "ΔP < 15 cmH₂O",
        rationale: "Driving pressure ($\\Delta P = P_{plat} - PEEP$) je klíčovým parametrem plicního poškození. Pokud je $\\Delta P > 15\\text{ cmH}_2\\text{O}$, je nutné snížit $V_T$ (až na $4\\text{ ml/kg}$ PBW) nebo optimalizovat PEEP."
      },
      {
        title: "Limitace Plateau tlaku (Pplat)",
        target: "Pplat < 30 cmH₂O",
        rationale: "Udržování $P_{plat} < 30\\text{ cmH}_2\\text{O}$ je základním limitem pro ochranu plic před barotraumatem. U pacientů s výrazně sníženou compliance hrudní stěny (obezita, ascites) lze tolerovat o něco vyšší hodnoty, ideálně vedené transpulmonálním tlakem."
      },
      {
        title: "Titrace PEEP (Otevřená plíce)",
        target: "Střední až vysoký PEEP (10–20 cmH₂O)",
        rationale: "PEEP titrujeme s cílem maximalizovat nábor alveolů a zabránit atelektotraunatu (cyklickému otevírání a zavírání alveolů). Používá se metoda titrace podle nejlepší statické compliance, nejnižšího driving pressure nebo standardní tabulky PEEP/FiO₂ (ARDS Network)."
      },
      {
        title: "Permisivní hyperkapnie",
        target: "pH > 7.20 (pCO₂ tolerováno dle stavu)",
        rationale: "K dosažení nízkých objemů a tlaků tolerujeme zvýšenou hladinu oxidu uhličitého v krvi ($pCO_2$) za předpokladu, že pH neklesne pod $7.20$. Kontraindikováno u nitrolební hypertenze, těžké pravokomorové dysfunkce a těžké oběhové instability."
      },
      {
        title: "Prone positioning (Polohování na břicho)",
        target: "Indikováno při PaO₂ / FiO₂ < 150 mmHg",
        rationale: "Polohování na břicho se provádí minimálně na $16$ hodin denně. Zlepšuje poměr ventilace/perfúze (odlehčením dorzálních segmentů plic stlačených srdcem a mediastinem), usnadňuje odchod sekretu a vede k homogennější distribuci tlaků v plíci, což snižuje riziko VILI."
      },
      {
        title: "Neuromuskulární blokáda (Myorelaxace)",
        target: "U těžkého ARDS (PaO₂/FiO₂ < 120 mmHg)",
        rationale: "Kontinuální infúze myorelaxancia (např. cisatrakurium) po dobu prvních $24–48$ hodin u těžkého ARDS pomáhá eliminovat asynchronie, boj s ventilátorem a předcházet poškození plic vyvolanému samotným pacientem (P-SILI - Patient Self-Induced Lung Injury)."
      }
    ]
  },

  // --- MODUL 8: ICU PEARLS & RYCHLÁ DIAGNOSTIKA ---
  pearls: [
    {
      condition: "↑ PIP + normální Pplat",
      result: "Zvýšená rezistence (odpor) dýchacích cest.",
      action: "Odsajte pacienta, zkontrolujte polohu a průchodnost ETK (zalomení, kousání), podejte bronchodilatancia při bronchospasmu, zkontrolujte HME filtr."
    },
    {
      condition: "↑ PIP + ↑ Pplat",
      result: "Snížená compliance (poddajnost) plic nebo hrudní stěny.",
      action: "Zkontrolujte polohu ETK (riziko intubace do pravé průdušky), vylučte pneumotorax (RTG, ultrazvuk), plicní edém, atelektázu, progresi ARDS, nebo distenzi břicha. Proveďte auskultaci."
    },
    {
      condition: "Expirační průtok nedosáhne nuly před dalším dechem",
      result: "Přítomen Auto-PEEP / Air trapping.",
      action: "Prodlužte expirační čas ($T_e$) snížením dechové frekvence ($RR$) nebo zkrácením inspiračního času ($T_i$). Podejte bronchodilatancia. Zvyšte vnější PEEP k usnadnění triggerování."
    },
    {
      condition: "Prohnuté (Scooped) expirium na průtokové smyčce",
      result: "Obstrukce dýchacích cest (limitace výdechového průtoku).",
      action: "Typické pro astmatický záchvat nebo exacerbaci CHOPN. Vyžaduje intenzivní bronchodilatační léčbu a dlouhý čas na výdech."
    },
    {
      condition: "PV smyčka vykazuje tvar 'bird-beak' (zobák)",
      result: "Overdistenze plic na konci nádechu.",
      action: "Snižte dechový objem ($V_T$) nebo snižte inspirační tlak (Pplat). Plíce je přeplňovaná a hrozí poškození tkáně."
    },
    {
      condition: "Cílová hodnota Driving pressure",
      result: "Driving pressure < 15 cmH₂O je nezbytný pro protekci plic.",
      action: "Pokud je hodnota vyšší, zvažte snížení dechového objemu z 6 ml/kg na 5 či 4 ml/kg PBW, nebo titrujte PEEP k dosažení lepší compliance."
    },
    {
      condition: "Tlakový propad (sedlo) na začátku nádechu u VCV",
      result: "Flow starvation (nedostatečný průtok ventilátoru).",
      action: "Zvyšte rychlost inspiračního průtoku (Flow) z např. 45 L/min na 60-70 L/min, případně zkraťte čas nárůstu tlaku u PCV."
    },
    {
      condition: "Dva nádechy těsně po sobě bez výdechu",
      result: "Double triggering (dvojitý trigger).",
      action: "Svědčí o nedostatečném objemu nebo inspiračním čase při vysokém dechovém pohonu. Zvyšte dechový objem (pokud je bezpečný), prodlužte Ti nebo zvyšte sedaci."
    }
  ],

  // --- INTERAKTIVNÍ KVÍZ: 20 PRÉMIOVÝCH OTÁZEK ---
  quiz: [
    {
      id: 1,
      question: "Která z následujících patologií způsobí zvýšení špičkového inspiračního tlaku (PIP), zatímco Plateau tlak (Pplat) zůstane nezměněn?",
      options: [
        "Progrese syndromu ARDS",
        "Zalomení endotracheální kanyly nebo nahromadění sekretu v ní",
        "Rozvoj tenzního pneumotoraxu",
        "Masivní fluidotorax vpravo"
      ],
      correct: 1,
      explanation: "Zvýšení PIP při normálním (stabilním) Pplat znamená nárůst odporu dýchacích cest (rezistence), protože rozdíl PIP - Pplat vyjadřuje tlak potřebný k překonání rezistence ($R \\cdot \\dot{V}$). Zalomení kanyly nebo sekret zvyšují rezistenci. ARDS, pneumotorax a fluidotorax snižují compliance plic, což by vedlo k nárůstu jak PIP, tak Pplat."
    },
    {
      id: 2,
      question: "Pacient s těžkým ARDS o výšce 180 cm a hmotnosti 110 kg (obézní) je ventilován v režimu VCV. Podle jaké hmotnosti by měl být nastaven cílový dechový objem (VT)?",
      options: [
        "Podle aktuální hmotnosti 110 kg, tj. cca 660 ml",
        "Podle ideální (predikované) hmotnosti PBW pro výšku 180 cm, tj. cca 75 kg (objem cca 450 ml)",
        "Podle průměru mezi aktuální a ideální hmotností (cca 90 kg)",
        "Dechový objem se u obézních neupravuje a nastavuje se fixně 600 ml všem"
      ],
      correct: 1,
      explanation: "Ochranná plicní ventilace u ARDS vyžaduje nastavení $V_T$ na $4–6\\text{ ml/kg}$ predikované hmotnosti (PBW), která závisí na výšce a pohlaví pacienta, nikoli na jeho aktuální hmotnosti. Velikost plic totiž koreluje s výškou, nikoli s tukovou tkání. Použití aktuální hmotnosti u obézního pacienta by vedlo k závažnému volutraumatu a barotrauma (overdistenzi plic)."
    },
    {
      id: 3,
      question: "Co přesně vyjadřuje driving pressure (drivující tlak) na ventilátoru a jaký je jeho bezpečný limit u ARDS?",
      options: [
        "Rozdíl mezi PIP a PEEP, limit je < 35 cmH₂O",
        "Rozdíl mezi Pplat a PEEP, limit je < 15 cmH₂O",
        "Rozdíl mezi PIP a Pplat, limit je < 10 cmH₂O",
        "Průměrný tlak v dýchacích cestách během cyklu, limit je < 20 cmH₂O"
      ],
      correct: 1,
      explanation: "Driving pressure ($\\Delta P$) je definován jako rozdíl mezi Plateau tlakem a PEEP ($\\Delta P = P_{plat} - PEEP$). Představuje tlak působící přímo na alveoly během roztažení dechovým objemem. Bezpečný limit u ARDS je striktně $<15\\text{ cmH}_2\\text{O}$; překročení tohoto limitu je spojeno se zvýšenou mortalitou v důsledku poškození plic (VILI)."
    },
    {
      id: 4,
      question: "Při analýze křivky průtoku (Flow-time) zjistíte, že expirační průtok nedosahuje nulové linie předtím, než začne další nádech. Jakou patologii to indikuje a jak ji vyřešíte?",
      options: [
        "Indikuje únik z okruhu (leak); řešením je nafouknout manžetu ETK",
        "Indikuje rozvoj Auto-PEEP (air trapping); řešením je prodloužit expirační čas (snížit frekvenci nebo zkrátit Ti)",
        "Indikuje hyperventilaci pacienta; řešením je zvýšit dechovou frekvenci",
        "Indikuje příliš vysoký průtok; řešením je snížit špičkový inspirační průtok"
      ],
      correct: 1,
      explanation: "Pokud expirační průtok nedosáhne nuly před začátkem dalšího nádechu, znamená to, že výdech byl předčasně přerušen a část vzduchu zůstala zachycena v plicích. To vede k rozvoji Auto-PEEP (air trappingu). K vyřešení je nutné poskytnout více času na výdech ($T_e$), což docílíme snížením dechové frekvence ($RR$) nebo zkrácením inspiračního času ($T_i$)."
    },
    {
      id: 5,
      question: "Jak se měří Plateau tlak (Pplat) a proč je jeho hodnota klinicky důležitější než PIP?",
      options: [
        "Měří se na konci výdechu při expirační pauze; odráží stav odporu dýchacích cest",
        "Měří se na konci nádechu při inspirační pauze; odráží statické napětí působící přímo na alveoly",
        "Měří se kontinuálně během celého dechu; odráží práci dýchacích svalů",
        "Měří se pouze nepřímo pomocí jícnové sondy"
      ],
      correct: 1,
      explanation: "Pplat se měří při nulovém průtoku na konci nádechu pomocí inspirační pauzy (obvykle 0.5 - 2 s). Jelikož plyn neproudí, odporový tlak v dýchacích cestách klesá na nulu a měřený tlak odpovídá tlaku přímo v plicních sklípcích. Je klinicky důležitější než PIP, protože PIP obsahuje odporovou složku, která plicní sklípky nepoškozuje, zatímco Pplat přímo odráží riziko mechanického poškození alveolů (barotrauma)."
    },
    {
      id: 6,
      question: "Jaký je hlavní rozdíl mezi tlakově řízeným režimem (PCV) a režimem s tlakovou podporou (PSV)?",
      options: [
        "U PCV si pacient sám určuje dechovou frekvenci, u PSV je frekvence striktně pevně nastavená ventilátorem",
        "U PCV je nádech časově cyklovaný (končí po uplynutí Ti), zatímco u PSV je nádech průtokově cyklovaný (končí při poklesu průtoku na určité procento)",
        "PCV je neinvazivní režim, PSV se používá výhradně u intubovaných pacientů",
        "V režimu PCV je průtok konstantní, u PSV je decelerační"
      ],
      correct: 1,
      explanation: "V režimu PCV (Pressure Control) je nádech ukončen časově (čas nádechu $T_i$ je pevně nastaven) a ventilátor dodá dech bez ohledu na aktivitu pacienta. V režimu PSV (Pressure Support) je nádech spuštěn pacientem a ukončen (cyklován) průtokově – ventilátor ukončí podporu, jakmile inspirační průtok klesne pod stanovenou mez (obvykle 25 % maximálního průtoku), což dává pacientovi kontrolu nad délkou nádechu."
    },
    {
      id: 7,
      question: "Co znamená pojem 'Lower Inflection Point' (dolní inflexní bod) na tlak-objemové (P-V) smyčce plic?",
      options: [
        "Bod, ve kterém dochází k poškození plic v důsledku overdistenze (přepětí)",
        "Tlak, při kterém dochází k masivnímu otevření (náboru) zkolabovaných alveolů na začátku nádechu",
        "Tlak na konci výdechu, kdy dochází k úplnému vyprázdnění plic",
        "Bod na výdechové části smyčky, kde začíná kolaps alveolů"
      ],
      correct: 1,
      explanation: "Dolní inflexní bod (LIP) na P-V smyčce představuje tlak, při kterém dochází k náhlému zvýšení compliance plic v důsledku otevření (náboru, recruitmentu) dýchacích cest a zkolabovaných plicních sklípků. Nastavení hodnoty PEEP těsně nad tento bod (např. o 1-2 cmH₂O) zabraňuje opakovanému cyklickému kolapsu a otevírání plic na konci výdechu (atelektotrauma)."
    },
    {
      id: 8,
      question: "Při kontrole ventilátoru u pacienta s těžkým ARDS v režimu VCV vidíte na displeji, že se křivka tlaku (P-t) prohýbá směrem dolů ('sedlo' / prohnutý tvar) během nádechu. Pacient zapojuje pomocné svaly. Co je příčinou?",
      options: [
        "Příliš vysoký nastavený dechový objem (overdistenze)",
        "Nedostatečný inspirační průtok (flow starvation) – pacient má vyšší hlad po vzduchu, než ventilátor dodává",
        "Rozvoj pneumotoraxu",
        "Nadměrně vysoký nastavený PEEP"
      ],
      correct: 1,
      explanation: "Tento jev se nazývá 'flow starvation' (hlad po průtoku). Pacient vyvíjí silné inspirační úsilí, které nasává vzduch rychleji, než činí konstantní nastavený průtok u VCV. To způsobí pokles (propad) tlaku v okruhu pod teoretickou křivku. Řešením je zvýšení inspiračního průtoku, změna tvaru vlny na decelerační, nebo přechod na tlakově řízený režim (PCV/PSV), kde se průtok přizpůsobuje pacientovi."
    },
    {
      id: 9,
      question: "Jaká je definice a klinický význam transpulmonálního tlaku (Ptp)?",
      options: [
        "Rozdíl mezi PIP a Pplat; určuje odpor dýchacích cest",
        "Rozdíl mezi tlakem v alveolech a tlakem v pleurální dutině; odráží skutečné napětí působící na plicní tkáň",
        "Tlak měřený na pravé srdeční síni u ventilovaného pacienta",
        "Tlak potřebný k překonání odporu endotracheální kanyly"
      ],
      correct: 1,
      explanation: "Transpulmonální tlak ($P_{tp} = P_{aw} - P_{pl}$) je rozdíl mezi alveolárním tlakem a pleurálním tlakem (který se měří nepřímo jako jícnový tlak). Je to reálný tlak, který napíná plicní tkáň. Pomáhá odlišit vliv tuhých plic (ARDS) od tuhé hrudní stěny (např. obezita, ascites, rigidita hrudníku). Cílem je udržet expirační transpulmonální tlak $>0\\text{ cmH}_2\\text{O}$ (prevence kolapsu) a inspirační $<20–25\\text{ cmH}_2\\text{O}$ (prevence poškození)."
    },
    {
      id: 10,
      question: "Proč je u pacientů s těžkým ARDS indikováno polohování na břicho (prone positioning) a jak dlouho by mělo trvat?",
      options: [
        "Zlepšuje komfort pacienta; indikováno na 2-4 hodiny denně",
        "Zlepšuje oxygenaci homogenizací ventilace a odlehčením dorzálních segmentů plic; indikováno na minimálně 16 hodin denně",
        "Snižuje riziko aspirace; indikováno pouze při krmení sondou na 1 hodinu",
        "Polohuje se pouze z důvodu prevence dekubitů na zádech, nemá respirační účinek"
      ],
      correct: 1,
      explanation: "Prone positioning (polohování na břicho) u pacientů s těžkým ARDS ($PaO_2/FiO_2 < 150\\text{ mmHg}$) významně snižuje mortalitu. Způsobuje nábor dorzálních plicních segmentů, které jsou v poloze na zádech stlačeny srdcem, mediastinem a břišními orgány. Tím se dramaticky homogenizuje ventilace, snižuje se intrapulmonální zkrat a zlepšuje oxygenace. Aby mělo polohování vliv na přežití, musí trvat minimálně $16$ hodin v jednom cyklu."
    },
    {
      id: 11,
      question: "Co vyjadřuje časová konstanta (Tau) plic a jaký má význam pro nastavení výdechu u pacienta s CHOPN?",
      options: [
        "Tau je poměr PIP/PEEP a určuje rychlost spuštění nádechu",
        "Tau je součinem rezistence a compliance; u pacientů s CHOPN je dlouhá, proto vyžadují delší čas na výdech (Te), aby nedošlo k Auto-PEEP",
        "Tau vyjadřuje čas potřebný k ohřátí a zvlhčení vdechované směsi",
        "Tau je fixní konstanta 0.5 s pro všechny dospělé pacienty"
      ],
      correct: 1,
      explanation: "Časová konstanta ($\\tau = R \\cdot C$) určuje rychlost plnění a vyprazdňování plic. Jeden časový úsek $\\tau$ odpovídá vyprázdnění $63\\%$ objemu, přičemž kompletní výdech vyžaduje $4–5\\tau$. U pacientů s CHOPN je vysoká rezistence ($R$), což výrazně prodlužuje $\\tau$. Pokud je nastaven krátký čas výdechu ($T_e$), plíce se nestihnou vyprázdnit, vzniká Auto-PEEP a air trapping. Tito pacienti potřebují dlouhý čas $T_e$."
    },
    {
      id: 12,
      question: "Která z následujících asynchronií se projevuje tak, že ventilátor dodá dva nádechy těsně po sobě bez adekvátního výdechu mezi nimi (tzv. breath stacking)?",
      options: [
        "Auto-triggering (Autotrigger)",
        "Double triggering (Dvojitý trigger)",
        "Late cycling (Opožděné ukončení)",
        "Delayed triggering (Opožděný trigger)"
      ],
      correct: 1,
      explanation: "Double triggering (dvojitý trigger) vzniká tehdy, když neurologický nádech pacienta trvá déle než nastavený čas nádechu na ventilátoru. Pacient na konci prvního mechanického nádechu stále vyvíjí podtlak, čímž okamžitě spustí (triggeruje) druhý nádech. Dochází k nahromadění objemu obou dechů (breath stacking), což extrémně zvyšuje Plateau tlak a riziko barotraumatu."
    },
    {
      id: 13,
      question: "Která z následujících možností nejlépe definuje 'permisivní hyperkapnii' a kdy je kontraindikována?",
      options: [
        "Záměrné udržování nízkého pCO₂ k navození alkalózy; kontraindikováno u renálního selhání",
        "Strategie tolerování vyšších hladin pCO₂ a mírné acidózy (pH > 7.20) s cílem udržet nízké protektivní objemy a tlaky; kontraindikována u nitrolební hypertenze",
        "Povolení vysokého pCO₂ pouze u pacientů s plicní embolií; kontraindikována u astmatu",
        "Zvýšení ventilace k dosažení nulového pCO₂ v krvi; kontraindikována u sepse"
      ],
      correct: 1,
      explanation: "Permisivní hyperkapnie je akceptace vyšších hodnot $pCO_2$ a poklesu pH krve až k $7.20$ u pacientů s těžkým ARDS. Umožňuje nám to udržet protektivní ventilaci s nízkým dechovým objemem ($4–6\\text{ ml/kg}$ PBW) a nízkými tlaky. Je však absolutně kontraindikována u pacientů s nitrolební hypertenzí (CO₂ způsobuje vazodilataci mozkových cév a zvyšuje intrakraniální tlak), těžkou pravokomorovou dysfunkcí a těžkou oběhovou nestabilitou."
    },
    {
      id: 14,
      question: "Jak se změní Tlak-Objemová (P-V) smyčka u pacienta, u kterého dojde k rozvoji masivního plicního edému (výrazný pokles compliance)?",
      options: [
        "Smyčka se napřímí směrem vertikálně nahoru (strmější sklon)",
        "Smyčka se položí směrem horizontálně doprava (plošší sklon)",
        "Smyčka se neuzavře a její konec zůstane viset ve vzduchu",
        "Plicní edém smyčku nijak neovlivní"
      ],
      correct: 1,
      explanation: "Sklon P-V smyčky přímo odpovídá poddajnosti (compliance) plic. Při plicním edému, ARDS nebo atelektázách plíce tuhne (klesá compliance). K dosažení stejného objemu je zapotřebí mnohem vyššího tlaku, což se na grafu projeví oploštěním smyčky (nakloněním směrem dolů k ose tlaku X)."
    },
    {
      id: 15,
      question: "Co je to 'Reverse triggering' (reverzní trigger) a u jaké skupiny pacientů se s ním typicky setkáváme?",
      options: [
        "Spuštění nádechu přístrojem při selhání záložní ventilace; u pacientů s bdělým vědomím",
        "Mechanický nádech přístroje vyvolá reflexní svalový stah bránice pacienta; u hluboce sedovaných pacientů",
        "Nádech spuštěný únikem vzduchu kolem masky; u pacientů na neinvazivní ventilaci (NIV)",
        "Vydechování pacienta proti inspiračnímu ventilu; u pacientů při probouzení"
      ],
      correct: 1,
      explanation: "Reverzní trigger je typ asynchronie, při kterém pasivní roztažení plic ventilátorem (strojový nádech) reflexně stimuluje dechové centrum pacienta a vyvolá aktivní stah bránice uprostřed nebo na konci strojového nádechu (entrainment). Typicky se vyskytuje u hluboce sedovaných pacientů (v bezvědomí nebo farmakologickém útlumu) bez myorelaxace. Může vést k breath stackingu."
    },
    {
      id: 16,
      question: "Při ventilaci pacienta v režimu PSV (tlaková podpora) dochází k tomu, že ventilátor přepíná do výdechu (cykluje) příliš pozdě, což nutí pacienta aktivně zapojovat expirační svaly na konci nádechu. Jak situaci upravíte?",
      options: [
        "Snížím dechovou frekvenci na ventilátoru",
        "Zvýším procentuální práh expiračního triggeru (např. z 25 % na 40 % špičkového průtoku)",
        "Snížím PEEP",
        "Zkrátím inspirační čas Ti na ventilátoru"
      ],
      correct: 1,
      explanation: "Tento stav se nazývá opožděné cyklování (late cycling). V režimu PSV ventilátor cykluje do výdechu, jakmile inspirační průtok klesne na nastavené procento špičkového průtoku (expiratory trigger, např. 25 %). U pacientů s vysokým odporem dýchacích cest (CHOPN) klesá průtok velmi pomalu, což prodlužuje nádech nad neurologické přání pacienta. Zvýšením prahu (např. na 40 % nebo 50 %) přinutíme ventilátor přepnout do výdechu dříve, při vyšší rychlosti proudění vzduchu."
    },
    {
      id: 17,
      question: "U ventilovaného pacienta s podezřením na obstrukci dýchacích cest (bronchospasmus) provedete diagnostické vyhodnocení. Který z následujících nálezů na monitoru ventilátoru potvrzuje diagnózu?",
      options: [
        "Smyčka P-V má tvar 'bird-beak' (zobák) a Plateau tlak je zvýšený nad 30 cmH₂O",
        "Expirační průtoková křivka je protáhlá s nízkým vrcholem a smyčka F-V vykazuje prohnutý (konkávní) tvar",
        "Při inspirační pauze dojde k vymizení rozdílu mezi PIP a Pplat",
        "Křivka tlaku (P-t) vykazuje ostrý hrot (spike) na začátku nádechu"
      ],
      correct: 1,
      explanation: "Obstrukce dýchacích cest výrazně omezuje rychlost vydechování vzduchu. Na časové křivce průtoku (Flow-time) se to projeví nízkým vrcholem expiračního průtoku a jeho pomalým, protáhlým návratem k nule. Na smyčce Průtok-Objem (F-V loop) je typické konkávní prohnutí (tzv. 'scooped' expirium). Ostatní možnosti popisují overdistenzi, nulovou rezistenci nebo nevhodný Rise time."
    },
    {
      id: 18,
      question: "Při titraci PEEP u pacienta s ARDS chcete nastavit tzv. 'otevřenou plíci'. Který z parametrů je nejspolehlivějším vodítkem, že zvolený PEEP zlepšil provzdušnění plic bez nadměrného přepětí tkáně?",
      options: [
        "Pokles špičkového tlaku (PIP) na nejnižší možnou hodnotu",
        "Pokles driving pressure (drivujícího tlaku) a nárůst statické compliance plic",
        "Pokles dechové frekvence pacienta",
        "Nárůst poměru I:E na 1:1"
      ],
      correct: 1,
      explanation: "Správně zvolený PEEP vede k otevření zkolabovaných alveolů, čímž se zvětší funkční plocha plic a zlepší se jejich poddajnost (statická compliance). Zlepšení compliance plic se při konstantním dechovém objemu ($V_T$) projeví poklesem driving pressure ($\\Delta P = V_T / C_{stat}$). Pokud PEEP naopak způsobí overdistenzi, compliance klesne a driving pressure vzroste. Hledáme tedy PEEP s nejnižším driving pressure."
    },
    {
      id: 19,
      question: "Která z následujících metod kyslíkové terapie dokáže u spontánně dýchajícího hypoxemického pacienta generovat mírný pozitivní tlak na konci výdechu (PEEP) a zároveň přesně garantovat nastavené FiO2?",
      options: [
        "Standardní kyslíková maska s rezervoárem (polomaska)",
        "Vysokoprůtoková nosní kanyla (HFNC)",
        "Kyslíkové brýle s nízkým průtokem (2 L/min)",
        "Venturiho maska"
      ],
      correct: 1,
      explanation: "HFNC (High-Flow Nasal Cannula) dodává ohřátou a zvlhčenou směs plynů o vysokém průtoku (až 60 L/min), což převyšuje špičkový inspirační průtok pacienta a garantuje přesné nastavené $FiO_2$. Díky vysokému průtoku generuje v dýchacích cestách mírný přetlak (PEEP cca $3–5\\text{ cmH}_2\\text{O}$ v závislosti na tom, zda má pacient zavřená ústa) a účinně vymývá $CO_2$ z anatomického mrtvého prostoru nosohltanu."
    },
    {
      id: 20,
      question: "Který z následujících stavů představuje absolutní kontraindikaci pro použití neinvazivní ventilace (NIV) pomocí obličejové masky?",
      options: [
        "Exacerbace CHOPN s respirační acidózou (pH 7.28)",
        "Bezprostřední oběhový kolaps, zástava dechu, bezvědomí nebo neschopnost chránit dýchací cesty",
        "Počínající kardiogenní plicní edém se střední dušností",
        "Pooperační atelektázy po kardiochirurgickém výkonu"
      ],
      correct: 1,
      explanation: "NIV vyžaduje plně spolupracujícího pacienta se zachovalými obrannými reflexy dýchacích cest (kašel, polykání) a stabilním oběhem. Bezvědomí, neschopnost chránit dýchací cesty (riziko aspirace zvratků), dechová zástava a těžký šok jsou absolutními kontraindikacemi NIV a vyžadují okamžitou intubaci a zahájení invazivní UPV. Ostatní možnosti jsou naopak primárními indikacemi pro zahájení NIV."
    }
  ],

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
  },

  // --- MODUL 10: ALARMOVÝ TRENAŽÉR JIP ---
  alarmTrainer: {
    scenarios: [
      {
        id: 1,
        title: "Případ A: Náhlý nárůst odporu v dýchacích cestách",
        description: "Pacient po břišní operaci, tlumený, s alarmem vysokého tlaku na ventilátoru.",
        initialVitals: {
          pip: 42,
          peep: 8,
          vt: 450,
          rr: 14,
          mv: 6.3,
          spo2: 97,
          hr: 82,
          bp: "135/85"
        },
        alarmName: "🚨 ALARM: VYSOKÝ PIP (Špičkový tlak > 40 cmH₂O)",
        dangerFields: ["pip"],
        vitalsProgression: {
          secondsPassed: [
            { sec: 15, spo2: 95, hr: 88, bp: "140/90" },
            { sec: 30, spo2: 91, hr: 95, bp: "145/95" },
            { sec: 40, spo2: 86, hr: 105, bp: "150/100" }
          ]
        },
        diagnostics: {
          stethoscope: "Oboustranně jsou slyšitelné hrubé, vlhké chropoty. Výrazné oslabení dýchání bilaterálně.",
          ambubag: "Ruční ventilace (baggování) přes Ambubag klade **vysoký odpor**. Cítíte značnou tuhost při stlačení vaku, což ukazuje na mechanickou překážku v dýchacích cestách pacienta.",
          circuit: "Okruh pacienta je kompletně zapojený, hadice nejsou zalomené ani odpojené. Voda v kondenzačních nádobkách je v normě."
        },
        correctAction: "suction",
        results: {
          success: {
            title: "ZÁCHRANA PACIENTA ÚSPĚŠNÁ",
            summary: "Po odsátí z endotracheální kanyly (ETK) došlo k uvolnění velkého množství hustého sputa (hlenové zátky). Špičkový tlak (PIP) okamžitě klesl ze 42 na 24 cmH₂O, saturace SpO₂ stoupla na 98 % a srdeční akce se zklidnila.",
            rationale: "<strong>Klinický rozbor:</strong> U tlumených pacientů na JIP bez dostatečné toalety dýchacích cest (odsávání, ohřívání a zvlhčování) dochází k zahuštění sekretu a ucpání ETK (hlenová zátka). To vede k náhlému zvýšení odporu dýchacích cest, nárůstu PIP a hypoventilaci. Správným krokem je odsátí z ETK. Odpojení na Ambubag sice potvrdí, že problém je v pacientovi (vysoký odpor vaku), ale samotný problém nevyřeší. Jehlová dekomprese by byla chybou a vystavila by pacienta riziku iatrogenního PNO."
          },
          fail: {
            title: "KLINICKÝ KOLAPS PACIENTA",
            summary: "Pacient byl vystaven dlouhodobé obstrukci dýchacích cest. Kvůli váhání či nesprávnému postupu došlo k těžké hypoxii (SpO₂ < 70 %), bradykardii a následné zástavě oběhu.",
            rationale: "Při alarmu vysokého PIP je nutné rychle jednat podle D.O.P.E. Ucpání hlenem (Obstruction) je jednou z nejčastějších příčin, kterou lze okamžitě vyřešit odsátím z ETK."
          }
        }
      },
      {
        id: 2,
        title: "Případ B: Rychlý propad saturace a šokový stav",
        description: "Pacient na UPV po úrazu hrudníku. Náhlý rozvoj těžké hypoxémie a hypotenze.",
        initialVitals: {
          pip: 46,
          peep: 8,
          vt: 350,
          rr: 16,
          mv: 5.6,
          spo2: 82,
          hr: 118,
          bp: "80/45"
        },
        alarmName: "🚨 ALARM: VYSOKÝ PIP + TĚŽKÁ HYPOXIE + HYPOTENZE",
        dangerFields: ["pip", "spo2", "bp"],
        vitalsProgression: {
          secondsPassed: [
            { sec: 10, spo2: 78, hr: 125, bp: "70/40" },
            { sec: 20, spo2: 72, hr: 132, bp: "65/35" },
            { sec: 30, spo2: 60, hr: 45, bp: "50/25" }
          ]
        },
        diagnostics: {
          stethoscope: "Vpravo je dýchání **zcela vymizelé**! Vlevo slyšitelné čisté vezikulární dýchání. Hrudník se vpravo zdá mírně vyklenutý.",
          ambubag: "Ruční ventilace vakem je **extrémně obtížná a tuhá**. Tlak v dýchacích cestách neklesá a vak lze stlačit jen s velkým úsilím.",
          circuit: "Okruh je v pořádku. Všechny spoje drží, nikde nic nesyčí ani neuchází."
        },
        correctAction: "puncture",
        results: {
          success: {
            title: "ZÁCHRANA PACIENTA ÚSPĚŠNÁ",
            summary: "Provedena okamžitá jehlová dekomprese (punkce) tenzního pneumotoraxu (PNO) vpravo (ve 2. mezižeberním prostoru v medioklavikulární čáře). Z jehly unikl vzduch pod přetlakem, tlak PIP poklesl na 23 cmH₂O, saturace SpO₂ stoupla na 97 % a krevní tlak se stabilizoval na 115/75 mmHg.",
            rationale: "<strong>Klinický rozbor:</strong> Tenzní pneumotorax (PNO) je život ohrožující stav, kdy vzduch uniká do pleurální dutiny a nemůže ven. Dochází ke stlačení plíce, přetlačení mediastina na zdravou stranu a kompresi velkých žil, což vede k obstrukčnímu šoku (hypotenzi) a hypoxii. Odsátí z ETK nebo rekonexe okruhu jsou bez efektu a ztrácí drahocenný čas. Jedinou správnou urgentní akcí je uvolnění přetlaku jehlovou dekompresí."
          },
          fail: {
            title: "KLINICKÝ KOLAPS PACIENTA",
            summary: "V důsledku tenzního přetlaku v hrudníku a útlaku velkých žil došlo k rozvoji elektromechanické disociace (PEA) a srdeční zástavě.",
            rationale: "Tenzní PNO vyžaduje okamžitou punkci. Každá sekunda prodlení prohlubuje oběhové selhání kvůli zamezení žilního návratu k srdci."
          }
        }
      },
      {
        id: 3,
        title: "Případ C: Pokles tlaků a objemů na nulu",
        description: "Pacient v bezvědomí, z ničeho nic dochází k přerušení ventilace a poklesu dechového objemu.",
        initialVitals: {
          pip: 4,
          peep: 0,
          vt: 0,
          rr: 0,
          mv: 0.0,
          spo2: 98,
          hr: 70,
          bp: "120/80"
        },
        alarmName: "🚨 ALARM: APNOE / NÍZKÁ MINUTOVÁ VENTILACE",
        dangerFields: ["pip", "vt", "mv"],
        vitalsProgression: {
          secondsPassed: [
            { sec: 15, spo2: 95, hr: 80, bp: "125/82" },
            { sec: 30, spo2: 89, hr: 96, bp: "135/88" },
            { sec: 45, spo2: 78, hr: 110, bp: "140/90" }
          ]
        },
        diagnostics: {
          stethoscope: "Nad plícemi je **ticho bilat**. Neslyšíte žádný proud vzduchu ani dechové šelesty. Vzduch však syčí kdesi v okolí lůžka.",
          ambubag: "Po odpojení pacienta a napojení na Ambubag je stlačování vaku **zcela volné a bez odporu**. Vzduch uniká mimo pacienta.",
          circuit: "Při pohledu na okruh vidíte, že pacientská hadice se **zcela rozpojila** v místě spoje u HME filtru těsně nad tracheální rourkou!"
        },
        correctAction: "reconnect",
        results: {
          success: {
            title: "ZÁCHRANA PACIENTA ÚSPĚŠNÁ",
            summary: "Znovuzapojením okruhu u tracheální rourky došlo k okamžitému obnovení dodávky objemů, tlak PIP se vrátil na 22 cmH₂O, PEEP na 8 cmH₂O a dechové objemy stouply na cílových 450 ml. Saturace se udržela v normě.",
            rationale: "<strong>Klinický rozbor:</strong> Rozpojení okruhu (Equipment/Disconnection) je častý mechanický problém na JIP. Projevuje se okamžitým poklesem tlaku a dechového objemu na nulu. Test na Ambubag ukáže nulový odpor, protože hadice je rozpojená. Správným krokem je kontrola okruhu a znovuzapojení. Zbytečné odsávání pacienta nebo podávání léků oddaluje rekonexi a vede k hypoxii."
          },
          fail: {
            title: "KLINICKÝ KOLAPS PACIENTA",
            summary: "Pacient byl ponechán bez přívodu kyslíku a ventilace příliš dlouho. Rozvinula se těžká hypoxémie a acidóza vedoucí k zástavě dechu a oběhu.",
            rationale: "Při nulových tlacích a objemech je první povinností zkontrolovat celistvost okruhu. Rychlé znovuzapojení okamžitě odvrátí hrozící asfyxii."
          }
        }
      },
      {
        id: 4,
        title: "Případ D: Intenzivní pískoty a prodloužený výdech",
        description: "Pacient s anamnézou astmatu na řízené ventilaci. Postupný vzestup PIP a protahování výdechové fáze.",
        initialVitals: {
          pip: 44,
          peep: 10,
          vt: 380,
          rr: 15,
          mv: 5.7,
          spo2: 92,
          hr: 105,
          bp: "145/95"
        },
        alarmName: "🚨 ALARM: VYSOKÝ PIP (Zúžení dýchacích cest)",
        dangerFields: ["pip", "spo2"],
        vitalsProgression: {
          secondsPassed: [
            { sec: 15, spo2: 89, hr: 112, bp: "150/100" },
            { sec: 30, spo2: 84, hr: 120, bp: "155/105" },
            { sec: 45, spo2: 75, hr: 128, bp: "160/110" }
          ]
        },
        diagnostics: {
          stethoscope: "Oboustranně slyšíte výrazné prodloužené exspirium s **difúzními suchými pískoty, vrzoty** a distančním sípáním.",
          ambubag: "Ventilace vakem Ambubag je **velmi tuhá**. Cítíte odpor po celou dobu stlačování vaku, což odpovídá difúznímu zúžení (spasmu) průdušek.",
          circuit: "Okruh je těsný a správně zapojený, hadice jsou průchodné."
        },
        correctAction: "bronchodilator",
        results: {
          success: {
            title: "ZÁCHRANA PACIENTA ÚSPĚŠNÁ",
            summary: "Podáním inhalačního Ventolinu přes speciální adaptér v okruhu UPV a prohloubením sedace (Propofol + Sufentanil) došlo k uvolnění hladké svaloviny průdušek. Tlak PIP klesl na 26 cmH₂O, dechový objem se stabilizoval a výdechová fáze se zkrátila. Saturace stoupla na 98 %.",
            rationale: "<strong>Klinický rozbor:</strong> Bronchospasmus (Obstruction) je stav zúžení průdušek vyvolaný hyperreaktivitou (např. u astmatu/CHOPN nebo při reakci na ETK). Způsobuje enormní nárůst odporu dýchacích cest a ohrožuje pacienta dynamic-hyperinflací (Auto-PEEP). Řešením je okamžité podání bronchodilatancií (beta-sympatomimetika) a prohloubení sedace, které tlumí bronchokonstrikční reflexy. Odsátí z ETK nepomůže a může bronchospasmus naopak zhoršit podrážděním sliznice. Jehlová dekomprese je kontraindikovaná, protože plíce není zkolabovaná PNO."
          },
          fail: {
            title: "KLINICKÝ KOLAPS PACIENTA",
            summary: "V důsledku těžkého bronchospasmu a narůstajícího Auto-PEEP (dynamické hyperinflace) došlo k zamezení žilního návratu, kritickému poklesu minutového objemu srdce a srdeční zástavě.",
            rationale: "Bronchospasmus na UPV vyžaduje rychlou bronchodilatační léčbu. Neřešená obstrukce exspiria vede ke kritickému zadržování vzduchu a oběhovému kolapsu."
          }
        }
      }
    ]
  }
};

// Export dat pro použití v app.js
window.UPV_DATA = UPV_DATA;
