// calculators_data.js - Databáze a schémata pro neurologické kalkulátory a likvorový interpretátor
// Podle aktuálních guidelines ČNS ČLS JEP, ESO/AHA 2024-2026 a kurikula LF OU

const CALCULATORS_DATA = {
  // 1. NIHSS (National Institutes of Health Stroke Scale)
  nihss: {
    title: "NIHSS (National Institutes of Health Stroke Scale)",
    description: "Zlatý standard pro kvantifikaci neurologického deficitu u akutního ischemického a hemoragického iktu. Rozsah 0–42 bodů.",
    items: [
      {
        id: "1a",
        title: "1a. Úroveň vědomí (Level of Consciousness)",
        options: [
          { score: 0, label: "0 - Bdělý, plně reagující" },
          { score: 1, label: "1 - Somnolentní, probudí se na lehké oslovení/dotyk" },
          { score: 2, label: "2 - Soporózní, vyžaduje opakované/bolestivé podněty k reakci" },
          { score: 3, label: "3 - Koma, nereaguje nebo jen reflexní motorika" }
        ]
      },
      {
        id: "1b",
        title: "1b. Otázky na vědomí (Měsíc v roce + Věk pacienta)",
        options: [
          { score: 0, label: "0 - Obě odpovědi správně" },
          { score: 1, label: "1 - Jedna odpověď správně (nebo intubace/dysartrie bez afázie)" },
          { score: 2, label: "2 - Ani jedna odpověď správně (nebo afázie/koma)" }
        ]
      },
      {
        id: "1c",
        title: "1c. Příkazy na vědomí (Zavřít/otevřít oči + Sevřít/otevřít ruku)",
        options: [
          { score: 0, label: "0 - Oba úkoly provedeny správně" },
          { score: 1, label: "1 - Jeden úkol proveden správně" },
          { score: 2, label: "2 - Ani jeden úkol neproveden správně" }
        ]
      },
      {
        id: "2",
        title: "2. Pohyby očních bulbů (Best Gaze)",
        options: [
          { score: 0, label: "0 - Normální pohledové pohyby" },
          { score: 1, label: "1 - Částečná paréza pohledu (lze překonat oculocefalickým reflexem)" },
          { score: 2, label: "2 - Nucená konjugovaná deviace bulbů k jedné straně" }
        ]
      },
      {
        id: "3",
        title: "3. Zorné pole (Visual Fields)",
        options: [
          { score: 0, label: "0 - Bez výpadku zorného pole" },
          { score: 1, label: "1 - Částečná hemianopsie / kvadrantanopsie" },
          { score: 2, label: "2 - Kompletní homonymní hemianopsie" },
          { score: 3, label: "3 - Bilaterální hemianopsie (kortikální slepota)" }
        ]
      },
      {
        id: "4",
        title: "4. Paréza lícního nervu (Facial Palsy)",
        options: [
          { score: 0, label: "0 - Normální symetrická hybnost obličeje" },
          { score: 1, label: "1 - Minimální asymetrie (vyhlazená nasolabiální rýha, asymetrie úsměvu)" },
          { score: 2, label: "2 - Paréza dolní poloviny obličeje (centrální léze n. VII)" },
          { score: 3, label: "3 - Kompletní jednostranná plegie obličeje (vč. čela a oka)" }
        ]
      },
      {
        id: "5a",
        title: "5a. Motorika PHK (Pravá horní končetina - předpažení 10 s)",
        options: [
          { score: 0, label: "0 - Udrží předpažení celých 10 s bez poklesu" },
          { score: 1, label: "1 - Pokles končetiny před uplynutím 10 s (nedotkne se lůžka)" },
          { score: 2, label: "2 - Poklesne na lůžko, ale vyvine odpor proti gravitaci" },
          { score: 3, label: "3 - Žádný odpor proti gravitaci (pohyb jen po podložce)" },
          { score: 4, label: "4 - Plegie (žádný volní pohyb)" }
        ]
      },
      {
        id: "5b",
        title: "5b. Motorika LHK (Levá horní končetina - předpažení 10 s)",
        options: [
          { score: 0, label: "0 - Udrží předpažení celých 10 s bez poklesu" },
          { score: 1, label: "1 - Pokles končetiny před uplynutím 10 s (nedotkne se lůžka)" },
          { score: 2, label: "2 - Poklesne na lůžko, ale vyvine odpor proti gravitaci" },
          { score: 3, label: "3 - Žádný odpor proti gravitaci (pohyb jen po podložce)" },
          { score: 4, label: "4 - Plegie (žádný volní pohyb)" }
        ]
      },
      {
        id: "6a",
        title: "6a. Motorika PDK (Pravá dolní končetina - zvednutí 30° na 5 s)",
        options: [
          { score: 0, label: "0 - Udrží zvednutí celých 5 s bez poklesu" },
          { score: 1, label: "1 - Pokles končetiny před uplynutím 5 s" },
          { score: 2, label: "2 - Poklesne na lůžko před 5 s, ale překoná gravitaci" },
          { score: 3, label: "3 - Žádný odpor proti gravitaci (pouze pohyb po lůžku)" },
          { score: 4, label: "4 - Plegie (žádný pohyb)" }
        ]
      },
      {
        id: "6b",
        title: "6b. Motorika LDK (Levá dolní končetina - zvednutí 30° na 5 s)",
        options: [
          { score: 0, label: "0 - Udrží zvednutí celých 5 s bez poklesu" },
          { score: 1, label: "1 - Pokles končetiny před uplynutím 5 s" },
          { score: 2, label: "2 - Poklesne na lůžko před 5 s, ale překoná gravitaci" },
          { score: 3, label: "3 - Žádný odpor proti gravitaci (pouze pohyb po lůžku)" },
          { score: 4, label: "4 - Plegie (žádný pohyb)" }
        ]
      },
      {
        id: "7",
        title: "7. Končetinová ataxie (Prst-nos a pata-koleno)",
        options: [
          { score: 0, label: "0 - Bez ataxie (nebo plegická končetina nehodnotitelná)" },
          { score: 1, label: "1 - Ataxie přítomna na jedné končetině" },
          { score: 2, label: "2 - Ataxie přítomna na 2 a více končetinách" }
        ]
      },
      {
        id: "8",
        title: "8. Senzitivita (Píchnutí špendlíkem)",
        options: [
          { score: 0, label: "0 - Normální citlivost, bez hypestézie" },
          { score: 1, label: "1 - Mírná až střední jednostranná hypestézie" },
          { score: 2, label: "2 - Těžká anestezie / pacient si neuvědomuje dotyk" }
        ]
      },
      {
        id: "9",
        title: "9. Řeč a afázie (Popis obrázku, pojmenování předmětů)",
        options: [
          { score: 0, label: "0 - Normální řeč, bez afázie" },
          { score: 1, label: "1 - Lehká až střední afázie (plynulost/porozumění zhoršeno, ale komunikuje)" },
          { score: 2, label: "2 - Těžká afázie (výrazně fragmentovaná řeč, těžké neporozumění)" },
          { score: 3, label: "3 - Globální afázie / mutismus (žádná exprese ani porozumění)" }
        ]
      },
      {
        id: "10",
        title: "10. Dysartrie (Artikulace slov)",
        options: [
          { score: 0, label: "0 - Normální artikulace" },
          { score: 1, label: "1 - Lehká až střední dysartrie (slova jsou srozumitelná s obtížemi)" },
          { score: 2, label: "2 - Těžká dysartrie / anartrie (zcela nesrozumitelná řeč / intubován)" }
        ]
      },
      {
        id: "11",
        title: "11. Extinkce / Inpozornost (Hemi-neglect syndrom)",
        options: [
          { score: 0, label: "0 - Normální, bez inpozornosti" },
          { score: 1, label: "1 - Vizuální, taktilní nebo sluchová extinkce při bilaterální stimulaci" },
          { score: 2, label: "2 - Těžký neglect (opomíjí celou polovinu vlastního těla a prostoru)" }
        ]
      }
    ]
  },

  // 2. GCS & FOUR SCORE
  gcs: {
    title: "GCS (Glasgow Coma Scale) & FOUR Score",
    description: "Standardní hodnocení hloubky poruchy vědomí u kraniotraumat a kritických stavů.",
    eye: [
      { score: 4, label: "4 - Spontánní otevírání očí" },
      { score: 3, label: "3 - Otevírání očí na oslovení / hlasový podnět" },
      { score: 2, label: "2 - Otevírání očí na bolestivý podnět" },
      { score: 1, label: "1 - Žádné otevírání očí" }
    ],
    verbal: [
      { score: 5, label: "5 - Plně orientovaný, přiléhavá konverzace" },
      { score: 4, label: "4 - Dezorientovaný / zmatená konverzace" },
      { score: 3, label: "3 - Neadekvátní slova / nesouvislé výkřiky" },
      { score: 2, label: "2 - Nesrozumitelné zvuky / sténání" },
      { score: 1, label: "1 - Žádná verbální odpověď" }
    ],
    motor: [
      { score: 6, label: "6 - Vyhoví výzvám na pohyb" },
      { score: 5, label: "5 - Cílená lokalizace bolestivého podnětu" },
      { score: 4, label: "4 - Necílená úniková flexe na bolest" },
      { score: 3, label: "3 - Abnormální dekortikační flexe (flekční rigidita)" },
      { score: 2, label: "2 - Decerebrační extenze (extenční rigidita)" },
      { score: 1, label: "1 - Žádná motorická odpověď (atonie)" }
    ],
    fourScore: {
      eye: [
        { score: 4, label: "4 - Oči otevřené, sleduje nebo mrká na výzvu" },
        { score: 3, label: "3 - Oči otevřené, ale nesleduje výzvy" },
        { score: 2, label: "2 - Oči zavřené, otevírá na hlas" },
        { score: 1, label: "1 - Oči zavřené, otevírá na bolest" },
        { score: 0, label: "0 - Oči zůstávají zavřené i na bolest" }
      ],
      motor: [
        { score: 4, label: "4 - Ukáže palec / mír / pěst na výzvu" },
        { score: 3, label: "3 - Lokalizuje bolestivý podnět" },
        { score: 2, label: "2 - Flekční odpověď na bolest" },
        { score: 1, label: "1 - Extenční odpověď na bolest" },
        { score: 0, label: "0 - Žádná odpověď nebo myoklonus" }
      ],
      brainstem: [
        { score: 4, label: "4 - Zornicové i korneální reflexy přítomny" },
        { score: 3, label: "3 - Jedna zornice široká a areaktivní" },
        { score: 2, label: "2 - Zornicový NEBO korneální reflex vyhaslý" },
        { score: 1, label: "1 - Zornicový I korneální reflex vyhaslý" },
        { score: 0, label: "0 - Vyhaslý zornicový, korneální i kašlací reflex" }
      ],
      respiration: [
        { score: 4, label: "4 - Pravidelné spontánní dýchání" },
        { score: 3, label: "3 - Cheyneovo-Stokesovo dýchání" },
        { score: 2, label: "2 - Spontánní dýchání nad frekvenci ventilátoru" },
        { score: 1, label: "1 - Dýchá ve frekvenci ventilátoru" },
        { score: 0, label: "0 - Apnoe nebo plná závislost na ventilátoru" }
      ]
    }
  },

  // 3. ABCD2 SKÓRE PRO TIA
  abcd2: {
    title: "ABCD² Skóre (Stratifikace rizika CMP po TIA)",
    description: "Odhaduje 2-denní, 7-denní a 90-denní riziko vzniku ischemické mozkové příhody po tranzitorní ischemické atace (TIA).",
    items: [
      {
        id: "a_age",
        name: "A - Věk (Age)",
        options: [
          { score: 1, label: "Věk ≥ 60 let (+1 bod)" },
          { score: 0, label: "Věk < 60 let (0 bodů)" }
        ]
      },
      {
        id: "b_bp",
        name: "B - Krevní tlak (Blood Pressure při prvním vyšetření)",
        options: [
          { score: 1, label: "TK ≥ 140/90 mmHg (+1 bod)" },
          { score: 0, label: "TK < 140/90 mmHg (0 bodů)" }
        ]
      },
      {
        id: "c_clinical",
        name: "C - Klinické příznaky (Clinical features)",
        options: [
          { score: 2, label: "Jednostranná svalová slabost / paréza (+2 body)" },
          { score: 1, label: "Porucha řeči bez jednostranné slabosti (+1 bod)" },
          { score: 0, label: "Jiné příznaky (např. izolovaná hypestézie, amaurosis fugax) (0 bodů)" }
        ]
      },
      {
        id: "d_duration",
        name: "D - Doba trvání příznaků (Duration of symptoms)",
        options: [
          { score: 2, label: "Trvání ≥ 60 minut (+2 body)" },
          { score: 1, label: "Trvání 10–59 minut (+1 bod)" },
          { score: 0, label: "Trvání < 10 minut (0 bodů)" }
        ]
      },
      {
        id: "d_diabetes",
        name: "D - Diabetes mellitus",
        options: [
          { score: 1, label: "Přítomen diabetes mellitus (+1 bod)" },
          { score: 0, label: "Bez diabetu (0 bodů)" }
        ]
      }
    ]
  },

  // 4. HUNT-HESS & FISHER (SAH)
  sah: {
    title: "Hunt-Hess & Fisher skóre (Subarachnoidální krvácení)",
    description: "Klinická závažnost a CT stratifikace rizika vazospasmů při ruptuře intrakraniálního aneuryzmatu.",
    huntHess: [
      { grade: "Stupeň 1", score: 1, label: "Asymptomatický nebo mírná bolest hlavy a lehký meningismus (úmrtnost ~5 %)" },
      { grade: "Stupeň 2", score: 2, label: "Střední až krutá bolest hlavy, meningeální ztuhlost šíje, léze hlavových nervů bez parézy (úmrtnost ~10 %)" },
      { grade: "Stupeň 3", score: 3, label: "Somnolence, zmatenost, mírný ložiskový neurologický deficit (úmrtnost ~20 %)" },
      { grade: "Stupeň 4", score: 4, label: "Stupor / sopor, těžká hemiparéza, vegetativní nestabilita (úmrtnost ~40 %)" },
      { grade: "Stupeň 5", score: 5, label: "Hluboké koma, decerebrační rigidita, moribundní stav (úmrtnost >70 %)" }
    ],
    fisher: [
      { grade: "Fisher 1", score: 1, label: "Žádné detekovatelné krvácení na CT (vazospasmy velmi vzácné)" },
      { grade: "Fisher 2", score: 2, label: "Difuzní tenká vrstva krve v subarachnoidálním prostoru < 1 mm (nízké riziko vazospasmů)" },
      { grade: "Fisher 3", score: 3, label: "Lokalizovaná tlustá krevní sraženina / vrstva krve ≥ 1 mm (MAXIMÁLNÍ riziko těžkých vazospasmů ~40 %)" },
      { grade: "Fisher 4", score: 4, label: "Intracerebrální nebo intraventrikulární krvácení s tenkou/žádnou difuzní SAH vrstvou" }
    ]
  },

  // 5. INTERAKTIVNÍ LIKVOROVÝ INTERPRETÁTOR (DIAGNOSTIKA CSF)
  csfPatterns: [
    {
      id: "bacterial_purulent",
      name: "Akutní bakteriální hnisavá meningitida",
      severity: "critical",
      badge: "🚨 ŽIVOT OHROŽUJÍCÍ STAV",
      appearance: "Zkalený, purulentní, mléčný až žlutavý",
      cytology: "Výrazná pleocytóza (stovky až desetitisíce / μl), masivní převaha NEUTROFILNÍCH granulocytů (> 80 %)",
      protein: "Výrazná hyperproteinorachie (často 1,5 až > 5,0 g/l)",
      glucose: "Výrazná hypoglykorachie (< 2,2 mmol/l), poměr likvor/glykémie < 0,3",
      lactate: "Vysoký laktát (> 3,5–4,0 mmol/l) - klíčový marker odlišení od virů!",
      etiology: ["Neisseria meningitidis (Meningokok)", "Streptococcus pneumoniae (Pneumokok)", "Listeria monocytogenes (novorozenci, senioři, imunosuprimovaní)", "Haemophilus influenzae typ b"],
      immediateTherapy: "STATIM i.v. Dexamethason 10 mg (před podáním ATB k prevenci hluchoty a edému) + Ceftriaxon 2x 2g i.v. (+ Ampicilin 4x 3g i.v. při podezření na Listerii u věku > 50 let)."
    },
    {
      id: "viral_aseptic",
      name: "Virová / Aseptická (serózní) meningitida a meningoencefalitida",
      severity: "moderate",
      badge: "🦠 VIROVÁ ETIOLOGIE",
      appearance: "Čirý nebo lehce opalescentní",
      cytology: "Střední pleocytóza (desítky až stovky / μl), převaha MONONUKLEÁRŮ / LYMFOCYTŮ (zpočátku může být přechodný záchyt neutrofilů)",
      protein: "Normální nebo mírně zvýšená bílkovina (0,5–1,2 g/l)",
      glucose: "Normální glykorachie (> 2,8 mmol/l), poměr likvor/glykémie > 0,5",
      lactate: "Normální laktát (< 2,5 mmol/l) - spolehlivě vylučuje bakteriální etiologii!",
      etiology: ["Enteroviry (Echoviry, Coxsackie)", "Virus klíšťové encefalitidy (TBEV)", "Herpes simplex virus (HSV-1: temporální nekrotizující encefalitida, HSV-2: meningitida)", "Varicella Zoster virus (VZV)"],
      immediateTherapy: "Při podezření na herpetickou meningoencefalitidu (zmatenost, afázie, křeče, temporální léze na MRI) STATIM Aciklovir 10 mg/kg i.v. po 8 hod. U ostatních symptomatická léčba, antiedematika."
    },
    {
      id: "tuberculous_csf",
      name: "Tuberkulózní meningitida (Meningitis basilaris tbc)",
      severity: "critical",
      badge: "⚠️ CHRONICKÝ SPECIFICKÝ ZÁNĚT",
      appearance: "Čirý až opalizující, při stání tvoří 'fibrinovou pavučinku' (síťku)",
      cytology: "Smíšená lymfocytární a mononukleární pleocytóza (100–500 / μl)",
      protein: "Extrémní hyperproteinorachie (2,0 až > 8,0 g/l) v důsledku těžkého bazeálního exsudátu",
      glucose: "Těžká hypoglykorachie (poměr likvor/glykémie často < 0,2)",
      lactate: "Zvýšený laktát (3,0–6,0 mmol/l)",
      etiology: ["Mycobacterium tuberculosis"],
      immediateTherapy: "Čtyřkombinace antituberkulotik (Izoniazid + Rifampicin + Pyrazinamid + Ethambutol) + systémové kortikoidy (prevence bazeálních infarktů a hydrocefalu)."
    },
    {
      id: "neuroborreliosis",
      name: "Lymeská neuroborrelióza (Garin-Bujadoux-Bannwarth syndrom)",
      severity: "moderate",
      badge: "🌲 SPIROCHETOVÁ INFEKCE",
      appearance: "Čirý",
      cytology: "Lymfoplazmocelulární pleocytóza (desítky až stovky / μl s přítomností plazmatických buněk)",
      protein: "Zvýšená bílkovina (0,8–2,5 g/l)",
      glucose: "Normální glykorachie",
      lactate: "Normální nebo hraniční",
      etiology: ["Borrelia burgdorferi sensu lato"],
      immediateTherapy: "Intratekální syntéza specifických protilátek (AI - protilátkový index v likvoru/séru > 1,5). Léčba: Ceftriaxon 2 g i.v. 1x denně po dobu 14–21 dní nebo Doxycyklin 200 mg p.o."
    },
    {
      id: "subarachnoid_hemorrhage_csf",
      name: "Subarachnoidální krvácení (SAH - Likvorový nález)",
      severity: "critical",
      badge: "🩸 KRVÁCENÍ DO LIKVOROVÝCH CEST",
      appearance: "Sanguinolentní (krvavý) ve všech zkumavkách, po centrifugaci XANTOCHROMNÍ (žlutavý supernatant způsobený bilirubinem z lýzy erytrocytů)",
      cytology: "Záplava erytrocytů (tisíce až miliony / μl), erytrofágy a siderofágy",
      protein: "Zvýšená bílkovina (poměrně k příměsi plné krve: +0,01 g/l na každých 1000 erytrocytů)",
      glucose: "Může být lehce snížená",
      lactate: "Lehce zvýšený",
      etiology: ["Ruptura aneuryzmatu Willisova okruhu", "Perimesencefalické neaneuryzmatické krvácení", "Arteriovenózní malformace (AVM)"],
      immediateTherapy: "Třízkumavkový test: Při arteficiálním poranění cévky klesá intenzita krve od 1. k 3. zkumavce a supernatant je ČIRÝ. U SAH je krev ve všech třech zkumavkách stejná a supernatant je po 6–12 h XANTOCHROMNÍ! STATIM CTA / DSA a neurochirurgické/endovaskulární ošetření (coiling/clipping)."
    },
    {
      id: "multiple_sclerosis_csf",
      name: "Roztroušená skleróza (Autoimunitní demyelinizace)",
      severity: "moderate",
      badge: "🧠 AUTOIMUNITNÍ DEMYELINIZACE",
      appearance: "Čirý",
      cytology: "Normální nebo mírná lymfocytární pleocytóza (< 20–30 / μl)",
      protein: "Normální nebo jen diskrétně zvýšená celková bílkovina (< 0,8 g/l)",
      glucose: "Normální",
      lactate: "Normální",
      specialMarkers: "OLIGOKLONÁLNÍ PÁSY (OCB v izoelektrické fokusaci - Typ 2: Pásy přítomny pouze v likvoru, nikoliv v séru = lokální intratekální syntéza IgG; přítomny u > 95 % pacientů s RS). Zvýšený index IgG.",
      etiology: ["Roztroušená skleróza (RS / Sclerosis multiplex)"],
      immediateTherapy: "Akutní ataka: Methylprednisolon 3–5 g i.v. (1 g denně). Následně eskalace na chorobu modifikující léčbu (DMT)."
    },
    {
      id: "guillain_barre_csf",
      name: "Guillainův-Barré syndrom (AIDP - Albuminocytologická disociace)",
      severity: "severe",
      badge: "⚡ AKUTNÍ POLYRADIKULONEURITIDA",
      appearance: "Čirý až lehce viskózní",
      cytology: "NORMÁLNÍ počet buněk (< 5 elementů / μl - bez pleocytózy!)",
      protein: "VÝRAZNĚ ZVÝŠENÁ BÍLKOVINA (> 1,0–4,0 g/l) - typicky stoupá od 2. týdne onemocnění",
      glucose: "Normální",
      lactate: "Normální",
      specialMarkers: "ALBUMINOCYTOLOGICKÁ DISOCIACE = Vysoká bílkovina bez buněčné reakce (způsobeno zánětlivým poškozením hematoencefalické bariéry v oblasti míšních kořenů bez intratekální buněčné infiltrace).",
      etiology: ["Akutní zánětlivá demyelinizační polyradikuloneuropatie (AIDP / GBS) po infekci Campylobacter jejuni, CMV, EBV"],
      immediateTherapy: "Intravenózní imunoglobuliny (IVIG 0,4 g/kg/den po 5 dní) nebo plazmaferéza. Kortikoidy jsou u GBS neúčinné!"
    }
  ]
};

// Export pro browser
if (typeof window !== "undefined") {
  window.CALCULATORS_DATA = CALCULATORS_DATA;
}
