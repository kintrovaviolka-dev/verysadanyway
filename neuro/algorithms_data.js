// algorithms_data.js - Databáze a struktury pro Akutní neurologické algoritmy a rozhodovací stromy
// Podle aktuálních národních guidelines ČNS ČLS JEP, ESO/AHA 2024-2026 a kurikula 4. ročníku LF OU

const ALGORITHMS_DATA = {
  // 1. AKUTNÍ IKTOVÝ PROTOKOL (CMP CODE)
  strokeCode: {
    title: "Akutní iktový protokol (Hyperakutní management CMP)",
    subtitle: "Časová okna, indikační kritéria reperfuzní léčby (i.v. trombolýza, mechanická trombektomie) a management krevního tlaku.",
    timeWindows: [
      {
        id: "window_early",
        timeRange: "0 až 4,5 hodiny od vzniku",
        name: "Standardní terapeutické okno",
        recommendations: [
          {
            type: "ivt",
            title: "Intravenózní trombolýza (IVT)",
            drug: "Altepláza (rtPA / Actilyse): 0,9 mg/kg (max. 90 mg) – 10 % bolus i.v. během 1 minuty, zbylých 90 % v infuzi 60 minut. Alternativa: Tenektepláza (TNK) 0,25 mg/kg jednorázový bolus.",
            conditions: "Bez krvácení na NCCT, TK < 185/110 mmHg, splněna indikační kritéria bez absolutních kontraindikací."
          },
          {
            type: "mt",
            title: "Mechanická trombektomie (MT)",
            description: "Indikována při průkazu uzávěru velké intrakraniální tepny (LVO - a. carotis interna, ACM úsek M1, a. basilaris) na CTA. U kandidátů IVT se podává trombolýza ihned bez čekání na efekt a pacient je paralelně transportován na angio-sál (tzv. bridging terapie)."
          }
        ]
      },
      {
        id: "window_extended_mt",
        timeRange: "4,5 až 6 hodin od vzniku",
        name: "Časové okno pro izolovanou trombektomii",
        recommendations: [
          {
            type: "mt",
            title: "Mechanická trombektomie (MT)",
            description: "Při uzávěru velké tepny v přední cirkulaci (LVO) je indikována mechanická trombektomie bez IVT (časové okno pro IVT již vypršelo)."
          }
        ]
      },
      {
        id: "window_late_mismatch",
        timeRange: "6 až 24 hodin od vzniku / Wake-up stroke (Iktus po probuzení)",
        name: "Rozšířené časové okno (Podmíněno perfuzním CT / Mismatch)",
        recommendations: [
          {
            type: "ctp",
            title: "Perfuzní CT (CTP) / MRI DWI-FLAIR Mismatch (Studie DEFUSE 3 & DAWN)",
            description: "Mechanická trombektomie je indikována i po 6–24 hodinách, pokud je prokázáno malé ireverzibilní ischemické jádro (Core < 70 ml) a velká zachránitelná ischemická penumbra (poměr mismatch Mismatch Ratio > 1,8)."
          }
        ]
      }
    ],
    bpManagement: {
      title: "Management krevního tlaku u akutní CMP",
      rules: [
        {
          scenario: "Před intravenózní trombolýzou (IVT)",
          target: "TKmusí být snížen pod 185/110 mmHg",
          action: "Urapidil (Ebrantil) 10–25 mg i.v. bolus během 2 min (opakovat dle potřeby) nebo Labetalol 10–20 mg i.v. Pokud TK neklesne pod 185/110, trombolýzu NELZE podat!"
        },
        {
          scenario: "Během a 24 hodin po trombolýze / trombektomii",
          target: "TK udržovat pod 180/105 mmHg",
          action: "Průběžná monitorace TK na iktové jednotce každých 15 min první 2 hodiny. Prevence intrakraniálního krvácení."
        },
        {
          scenario: "Pacienti BEZ reperfuzní léčby (Konzervativní postup)",
          target: "Tolerovat hypertenzi až do 220/120 mmHg",
          action: "NETLUMIT mírnou až střední hypertenzi! Hypertenze je kompenzační reakce zajišťující perfuzní tlak přes kolaterály do ischemické penumbry. Tlak snižovat pouze při TK > 220/120 mmHg (velmi pozvolna o max. 15 % za 24 hod)."
        }
      ]
    },
    contraindications: [
      { id: "ci_1", text: "Intrakraniální krvácení na akutním CT", absolute: true },
      { id: "ci_2", text: "Rozsáhlý rozvinutý ischemický infarkt (hypodenzita > 1/3 teritoria ACM nebo ASPECTS < 6)", absolute: true },
      { id: "ci_3", text: "Kranio-cerebrální trauma nebo nitrolební/spinální operace v posledních 3 měsících", absolute: true },
      { id: "ci_4", text: "Aktivní vnitřní krvácení (např. gastrointestinální masivní krvácení)", absolute: true },
      { id: "ci_5", text: "Těžká nekontrolovatelná hypertenze (TK trvale > 185/110 mmHg i přes i.v. antihypertenziva)", absolute: true },
      { id: "ci_6", text: "Těžká koagulopatie: Trombocyty < 100 × 10⁹/l, INR > 1,7, aPTT > 40 s", absolute: true },
      { id: "ci_7", text: "Plná antikoagulační léčba NOAC (apixaban, rivaroxaban, dabigatran) užitá v posledních 48 h (u dabigatranu lze podat antidotum Idarucizumab / Praxbind)", absolute: true },
      { id: "ci_8", text: "Podezření na subarachnoidální krvácení nebo disekci aorty", absolute: true }
    ]
  },

  // 2. STATUS EPILEPTICUS (TŘÍFÁZOVÝ ČASOVÝ PROTOKOL)
  statusEpilepticus: {
    title: "Protokol terapie Status Epilepticus (Časové fáze 0–60 min)",
    subtitle: "Čas je mozek (Time is Brain). Každá minuta trvající konvulze zvyšuje riziko ireverzibilního neuronálního zániku excitotoxicitou.",
    phases: [
      {
        phaseNum: 1,
        time: "0. až 5. minuta",
        name: "Fáze 1: Časný status (Stabilizace & Benzodiazepiny)",
        color: "emerald",
        badge: "0–5 min • 1. linie",
        steps: [
          "Zajištění dýchacích cest, inhalace O₂ maskou (8–10 l/min), monitorace SpO₂, EKG, TK.",
          "Statim glykémie z prstu (vyloučení hypoglykémie) – při hypoglykémii podat 40% Glukózu 40–80 ml i.v. + Thiamin 100 mg i.v. (prevence Wernickeovy encefalopatie).",
          "<strong>1. volba – Benzodiazepin i.v.:</strong>",
          "• <strong>Diazepam:</strong> 10 mg i.v. pomalu (2 mg/min), při neúspěchu opakovat 1x za 5 minut (max. 20 mg).",
          "• <strong>Clonazepam (Rivotril):</strong> 1 mg i.v. pomalu.",
          "• Pokud není i.v. přístup: <strong>Midazolam</strong> 10 mg bukálně / i.m. nebo Diazepam rektálně 10–20 mg."
        ]
      },
      {
        phaseNum: 2,
        time: "5. až 20. minuta",
        name: "Fáze 2: Etablovaný status (Nekonvulzivní antiepileptika i.v.)",
        color: "amber",
        badge: "5–20 min • 2. linie",
        steps: [
          "Pokud křeče přetrvávají po 2 dávkách benzodiazepinů, zahájit plnou nasycovací dávku ne-sedativního antiepileptika v rychlé infuzi:",
          "• <strong>Levetiracetam (Keppra):</strong> 60 mg/kg i.v. (max. 4500 mg) v infuzi během 10 minut. (Lék 1. volby pro excelentní bezpečnost a kardiovaskulární stabilitu).",
          "• <strong>Valproát sodný (Depakine):</strong> 40 mg/kg i.v. (max. 3000 mg) během 10 minut. (Kontraindikace: jaterní selhání, podezření na mitochondriální chorobu).",
          "• <strong>Lakosamid (Vimpat):</strong> 200–400 mg i.v. v infuzi během 5 minut."
        ]
      },
      {
        phaseNum: 3,
        time: "20. až 60. minuta a dále",
        name: "Fáze 3: Refrakterní status epilepticus (RSE – Celková anestezie)",
        color: "rose",
        badge: "> 20 min • 3. linie (ARO / JIP)",
        steps: [
          "Selhání 2. linie = Refrakterní status. Okamžitý překlad na ARO/JIP, orotracheální intubace + UPV, invazivní monitorace TK a <strong>kontinuální cEEG monitorace</strong> (cíl: potlačení paroxyzmů / Burst-Suppression pattern po dobu 24–48 h).",
          "• <strong>Propofol:</strong> Bolus 2 mg/kg i.v., poté kontinuální infuze 2–10 mg/kg/hod. (Pozor na Propofol Infusion Syndrome - PRIS při dávkách > 4–5 mg/kg/h po dobu > 48 h).",
          "• <strong>Midazolam:</strong> Bolus 0,2 mg/kg i.v., poté kontinuálně 0,1–2,0 mg/kg/hod.",
          "• <strong>Thiopental:</strong> Bolus 3–5 mg/kg i.v., poté kontinuálně 3–5 mg/kg/hod (nejúčinnější, ale vyžaduje vazopresorickou podporu pro těžkou hypotenzi)."
        ]
      }
    ]
  },

  // 3. ROZHODOVACÍ STROM PRO LUMBÁLNÍ PUNKCI (KDY JE NUTNÉ CT PŘED LP)
  lumbarPunctureProtocol: {
    title: "Protokol lumbální punkce & Pravidla „CT před LP“",
    subtitle: "Jak bezpečně provést lumbální punkci a zabránit fatální temporální / okcipitální herniaci.",
    criticalRule: "Při podezření na bakteriální purulentní meningitidu NIKDY NEODKLÁDEJTE ANTIBIOTIKA kvůli čekání na CT vyšetření! Okamžitě odeberte hemokultury, podejte i.v. Dexamethason + ATB (Ceftriaxon) a teprve poté transportujte pacienta na CT.",
    indicationsForCT: [
      {
        id: "ct_ind_1",
        title: "1. Kvantitativní porucha vědomí (GCS ≤ 12 / Sopor / Koma)",
        reason: "Zvýšené riziko difuzního edému mozku nebo strukturálního procesu."
      },
      {
        id: "ct_ind_2",
        title: "2. Ložiskový neurologický deficit",
        reason: "Hemiparéza, asymetrická paréza lícního nervu, obrna n. III s anizokorií nebo n. VI, afázie – svědčí pro ložiskovou intrakraniální lézi (tumor, absces, hematom)."
      },
      {
        id: "ct_ind_3",
        title: "3. Nově vzniklé epileptické záchvaty v posledním týdnu",
        reason: "Často provází ložiskovou strukturální expanzi nebo fokální kortikální encefalitidu."
      },
      {
        id: "ct_ind_4",
        title: "4. Edém papily zrakového nervu (Městnání na očním pozadí)",
        reason: "Jednoznačná známka intrakraniální hypertenze. Hrozí temporální herniace (tentoriální konus) po náhlém poklesu tlaku v páteřním kanálu."
      },
      {
        id: "ct_ind_5",
        title: "5. Závažný imunodeficit",
        reason: "HIV/AIDS, stav po transplantaci, imunosuprese – vysoké riziko mozkového abscesu, toxoplazmózy nebo kryptokokového granulomu."
      }
    ],
    contraindicationsToLP: [
      "Infekce kůže a měkkých tkání v místě vpichu (L3/L4 nebo L4/L5) – hrozí iatrogenní zanesení infekce do subarachnoidálního prostoru.",
      "Těžká nekorigovaná koagulopatie (Trombocyty < 50 × 10⁹/l, INR > 1,5, plná antikoagulace) – riziko spinálního epidurálního hematomu a paraplegie.",
      "Průkaz intrakraniální expanze s posunem středočárových struktur na CT."
    ]
  },

  // 4. MANAGEMENT INTRAKRANIÁLNÍ HYPERTENZE (ICP PROTOKOL)
  icpManagement: {
    title: "Management nitrolební hypertenze (ICP > 20 mmHg) a edému mozku",
    subtitle: "Stupňovitý protokol kontroly nitrolebního tlaku k prevenci mozkové ischémie a herniací.",
    tiers: [
      {
        tier: 1,
        name: "1. linie – Bazální neurointenzivní opatření",
        items: [
          "Elevace horní poloviny těla a hlavy o 30° ve střední rovině (usnadnění žilního odtoku z v. jugularis interna bez rotace krku).",
          "Normotermie (udržovat tělesnou teplotu < 37,5 °C – antipyretika, řízená hypotermie). Každý 1 °C vzestupu zvyšuje metabolické nároky mozku o 10 %.",
          "Analgezie a lehká sedace k prevenci bojování s ventilátorem a prudkých vzestupů ICP.",
          "Normokapnie (udržovat pCO₂ 4,5–5,0 kPa / 35–38 mmHg). Hypokapnie způsobuje vazokonstrikci a snižuje průtok krve mozkem!",
          "Normoglykémie (4–8 mmol/l) a euvolémie (vyvarovat se hypotonických infuzí typu 5% glukóza!)."
        ]
      },
      {
        tier: 2,
        name: "2. linie – Osmoterapie & Cílená farmakoterapie",
        items: [
          "<strong>20% Manitol:</strong> 0,5–1,0 g/kg i.v. v rychlé infuzi během 15–20 minut (opakovat po 4–6 hodinách dle ICP, hlídat osmolaritu séra < 320 mOsm/kg).",
          "<strong>Hypertonický solný roztok (3% nebo 7,5% NaCl):</strong> 2–3 ml/kg i.v. bolus (udržovat natrémii 145–155 mmol/l).",
          "<strong>Kortikoidy (Dexamethason 8–16 mg i.v.):</strong> Přísně indikován POUZE u VAZOGENNÍHO edému u intrakraniálních nádorů a abscesů. (Zcela neúčinný a škodlivý u ischemické CMP a kraniotraumat!)."
        ]
      },
      {
        tier: 3,
        name: "3. linie – Refrakterní intrakraniální hypertenze",
        items: [
          "Přechodná lehká hyperventilace (pCO₂ 4,0–4,5 kPa / 30–35 mmHg) jako most k definitivnímu řešení.",
          "Barbiturátové koma (Thiopental infuze) k maximálnímu snížení mozkového metabolismu kyslíku (CMRO₂).",
          "<strong>Dekompresivní kraniektomie:</strong> Neurochirurgické odstranění lebeční kosti u maligního infarktu v povodí ACM nebo těžkého expanzivního edému."
        ]
      }
    ]
  }
};

// Export pro browser
if (typeof window !== "undefined") {
  window.ALGORITHMS_DATA = ALGORITHMS_DATA;
}
