// data.js - Kompletní databáze Kardiologie pro 4. ročník všeobecného lékařství
// 12 modulů (3-fázový rozpad: Teorie/Learn -> Active Recall -> Final Breakdown/Tahák) + 110+ Spaced Repetition karet

const CARDIOLOGY_DATA = {
  modules: [
    {
      id: "aks",
      number: 1,
      title: "Akutní koronární syndromy (AKS)",
      shortDesc: "STEMI, NSTEMI a nestabilní AP. 2023 ESC Guidelines, 0h/1h hs-cTn algoritmus, načasování SKG, DAPT strategie a pre-treatment.",
      icon: "🫀",
      badge: "2023 ESC Guidelines",
      badgeColor: "rose",
      theory: {
        banner: {
          tag: "Hlavní změna paradigmatu (2023 ESC)",
          title: "AKS jako jedno integrované spektrum onemocnění",
          text: "Poprvé ESC spojila doporučení pro STEMI i NSTEMI do jednoho společného dokumentu. Zdůrazňuje se, že akutní koronární syndrom je kontinuum od nestabilní anginy pectoris přes NSTEMI až po transmurální STEMI, sdílející společnou patofyziologii (ruptura nebo eroze aterosklerotického plátu s nasedající trombózou)."
        },
        sections: [
          {
            title: "Rychlá diagnostika: hs-cTn (0h / 1h nebo 0h / 2h algoritmus)",
            color: "rose",
            content: `
              <p class="mb-4 text-slate-300">Základem diagnostiky u NSTE-AKS je stanovení <strong>vysoce senzitivního srdečního troponinu (hs-cTnI / hs-cTnT)</strong>. Odběry se provádějí v čase 0 h a 1 h (případně 2 h).</p>
              <div class="grid md:grid-cols-3 gap-4 my-4">
                <div class="bg-emerald-950/40 border border-emerald-500/30 p-4 rounded-xl">
                  <div class="text-emerald-400 font-bold mb-1">📉 RULE-OUT (Vyloučení)</div>
                  <p class="text-xs text-slate-300 leading-relaxed">Velmi nízká vstupní hodnota hs-cTn (0h) <strong>NEBO</strong> nízká vstupní hodnota a žádný nárůst za 1h (Δ1h pod mezí). Nízké riziko, zvažte propuštění a ambulantní došetření.</p>
                </div>
                <div class="bg-amber-950/40 border border-amber-500/30 p-4 rounded-xl">
                  <div class="text-amber-400 font-bold mb-1">👀 OBSERVE (Pozorování)</div>
                  <p class="text-xs text-slate-300 leading-relaxed">Pacienti nesplňující kritéria pro rule-out ani rule-in. Zde je nutný <strong>třetí odběr za 3 hodiny</strong> a provedení urgentní echokardiografie.</p>
                </div>
                <div class="bg-rose-950/40 border border-rose-500/30 p-4 rounded-xl">
                  <div class="text-rose-400 font-bold mb-1">📈 RULE-IN (Potvrzení)</div>
                  <p class="text-xs text-slate-300 leading-relaxed">Výrazně zvýšený hs-cTn při přijetí <strong>NEBO</strong> signifikantní absolutní vzestup za 1h/2h. Indikace k hospitalizaci na koronární jednotce a invazivní koronarografii.</p>
                </div>
              </div>
            `
          },
          {
            title: "Načasování invazivní strategie (Selektivní koronarografie - SKG)",
            color: "amber",
            content: `
              <div class="space-y-3">
                <div class="p-4 rounded-xl bg-rose-950/30 border border-rose-500/30">
                  <div class="font-bold text-rose-400 text-sm mb-1">🚨 Okamžitá invazivní strategie (&lt; 2 hodiny - Emergency)</div>
                  <p class="text-xs text-slate-300 mb-2"><strong>Všichni STEMI</strong> (cíl FMC-to-wire &lt; 90 min) a <strong>NSTE-AKS s velmi vysokým rizikem</strong>:</p>
                  <ul class="list-disc ml-5 text-xs text-slate-300 space-y-1">
                    <li>Kardiogenní šok nebo hemodynamická nestabilita.</li>
                    <li>Refrakterní či rekurentní klidová bolest na hrudi vzdorující medikaci.</li>
                    <li>Život ohrožující arytmie (maligní KT/FK) nebo poreanimační stav.</li>
                    <li>Akutní srdeční selhání jasně v důsledku probíhající ischémie.</li>
                    <li>Dynamické změny ST-T úseku (zvláště intermitentní ST elevace).</li>
                  </ul>
                </div>
                <div class="p-4 rounded-xl bg-amber-950/30 border border-amber-500/30">
                  <div class="font-bold text-amber-400 text-sm mb-1">⏱️ Včasná invazivní strategie (&lt; 24 hodin)</div>
                  <p class="text-xs text-slate-300 mb-2"><strong>NSTE-AKS s vysokým rizikem</strong> (doporučení Třídy IIa - během hospitalizace):</p>
                  <ul class="list-disc ml-5 text-xs text-slate-300 space-y-1">
                    <li>Potvrzený NSTEMI (dle hs-cTn algoritmu).</li>
                    <li>GRACE rizikové skóre &gt; 140 bodů.</li>
                    <li>Dynamické změny úseku ST nebo vln T (symptomatické či němé).</li>
                  </ul>
                </div>
              </div>
            `
          },
          {
            title: "Antiagregační a antikoagulační léčba (DAPT a Pre-treatment pravidla)",
            color: "cyan",
            content: `
              <div class="grid md:grid-cols-2 gap-4">
                <div class="p-4 rounded-xl bg-slate-900 border border-slate-700">
                  <h4 class="font-bold text-cyan-400 mb-2 text-sm">❌ Zákaz pre-treatmentu u NSTE-AKS</h4>
                  <p class="text-xs text-slate-300 leading-relaxed">
                    Rutinní podávání P2Y12 inhibitoru (prasugrel / ticagrelor / clopidogrel) před znalostí koronární anatomie se u NSTE-AKS <strong>nedoporučuje (Třída III)</strong>, pokud se plánuje časná SKG do 24h. Zvyšuje krvácení a blokuje možnost urgentního CABG. Lék se podává až na sále (on-table) po potvrzení PCI.
                  </p>
                </div>
                <div class="p-4 rounded-xl bg-slate-900 border border-slate-700">
                  <h4 class="font-bold text-cyan-400 mb-2 text-sm">💊 Výběr P2Y12 inhibitoru a DAPT</h4>
                  <p class="text-xs text-slate-300 leading-relaxed">
                    Při PCI pro AKS má přednost <strong>Prasugrel</strong> (60 mg load, 10 mg/d) před Ticagrelorem (na základě studie ISAR-REACT 5). Standardní DAPT = <strong>12 měsíců</strong> (ASA + silný P2Y12). U stabilních pacientů bez příhody lze po 3–6 měsících zvážit monoterapii P2Y12 inhibitorem.
                  </p>
                </div>
              </div>
            `
          }
        ]
      },
      recall: {
        scenarios: [
          {
            id: "aks-r1",
            title: "Otázka 1: Pre-treatment u NSTE-AKS",
            question: "68letý muž je přijat na interní ambulanci pro tlakovou bolest za sternem. EKG: deprese ST ve svodech V4-V6 o 1,5 mm bez ST elevací. Odběr hs-cTnI je pozitivní. Koronarografii plánujete na zítra ráno (do 16 hodin). Máte pacientovi na lůžku podat nasycovací dávku Prasugrelu?",
            answer: "NEMÁTE. Rutinní pre-treatment P2Y12 inhibitorem u NSTE-AKS před znalostí koronární anatomie se nedoporučuje (ESC Třída III), pokud je plánována invazivní strategie do 24 hodin. Nasycovací dávka se podá až na katetrizačním sále po zobrazení koronárního řečiště a rozhodnutí o PCI.",
            pearl: "Pre-treatment zvyšuje riziko krvácení bez redukce ischemických příhod a komplikuje případný akutní aortokoronární bypass (CABG)."
          },
          {
            id: "aks-r2",
            title: "Otázka 2: Fibrilace síní + AKS (Antitrombotická strategie)",
            question: "72letý pacient po úspěšné PCI s implantací DES pro NSTEMI má chronickou fibrilaci síní a bere Apixaban (CHA2DS2-VASc = 4). Jaká je doporučená standardní kombinace antitrombotik při propuštění?",
            answer: "Trojitá terapie (TAT: NOAC + Aspirin + Clopidogrel) pouze po dobu hospitalizace / do 1 týdne, následovaná Duální terapií (DAT: NOAC v plné dávce + Clopidogrel 75 mg) po dobu do 12 měsíců. Od 12. měsíce zůstává pouze monoterapie NOAC.",
            pearl: "Nikdy nekombinujte NOAC s Prasugrelem nebo Ticagrelorem v rámci trojité kombinace (Třída III) kvůli extrémnímu riziku fatálního krvácení."
          },
          {
            id: "aks-r3",
            title: "Otázka 3: De-eskalace protidestičkové léčby",
            question: "Pacient 14 dní po STEMI léčený DAPT (Aspirin + Prasugrel) si stěžuje na drobné hematomy na předloktích. Doporučíte okamžitý přechod z Prasugrelu na Clopidogrel?",
            answer: "NEDOPORUČÍTE. De-eskalace protidestičkové léčby (z Prasugrelu/Ticagreloru na Clopidogrel) se během prvních 30 dnů po AKS nedoporučuje (Třída III). Riziko akutní trombózy stentu a reinfarktu je v prvním měsíci nejvyšší.",
            pearl: "Při běžných kožních hematomech bez známek závažného krvácení pacienta uklidníme a medikaci v prvních 30 dnech neměníme."
          }
        ],
        quiz: {
          title: "Rozhodovací minikvíz: Kardiogenní šok a mechanické komplikace",
          prompt: "62letý pacient se STEMI spodní stěny náhle 4. den po příjezdu prudce hypotenzní (TK 75/40 mmHg), tachypnoický, poslechově nový drsný holosystolický šelest s maximem na hrotu a v axile s propagací, na plicích oboustranně vlhké chrůpky. Jaká je nejpravděpodobnější diagnóza a okamžitý krok?",
          options: [
            { text: "A) Ruptura papilárního svalu s akutní mitrální regurgitací -> okamžité emergentní ECHO a kardiochirurgická revize", isCorrect: true },
            { text: "B) Ruptura volné stěny levé komory -> okamžitá perikardiocentéza na lůžku", isCorrect: false },
            { text: "C) Progrese infarktu pravé komory -> volumoterapie 2 litry krystaloidů", isCorrect: false },
            { text: "D) Poléková hypotenze po ACE inhibitorech -> vysazení léků a monitorace", isCorrect: false }
          ],
          explanation: "Nový holosystolický šelest s plicním edémem a kardiogenním šokem u IM spodní stěny (často v povodí ACD zásobující posteromediální papilární sval jediným cévním přítokem) značí rupturu papilárního svalu a masivní akutní mitrální regurgitaci. Vyžaduje urgentní echokardiografii a urgentní kardiochirurgickou operaci."
        }
      },
      breakdown: {
        classThree: [
          "Rutinní podávání kyslíku pacientům s AKS, pokud je saturace SpO2 ≥ 90 %.",
          "Rutinní pre-treatment P2Y12 inhibitorem u NSTE-AKS před koronarografií při invazivní strategii &lt; 24h.",
          "De-eskalace protidestičkové léčby v prvních 30 dnech po prodělaném AKS.",
          "Použití Prasugrelu nebo Ticagreloru v trojité kombinaci (TAT) s perorálním antikoagulanciem (NOAC / VKA).",
          "Rutinní manuální tromboaspirace během primární PCI u STEMI."
        ],
        mustKnow: [
          "Definice STEMI: ST elevace v bodě J ve 2 sousedních svodech (muži &lt; 40 let: ≥ 2.5 mm ve V2-V3; muži ≥ 40 let: ≥ 2.0 mm; ženy: ≥ 1.5 mm; ostatní svody ≥ 1.0 mm) nebo nový LBBB/RBBB s ischemickými příznaky.",
          "Zlaté časové okno: FMC-to-wire &lt; 90 min (přímo v PCI centru &lt; 60 min). Pokud odhadovaný dojezd do PCI centra přesahuje 120 minut, indikuje se systémová fibrinolýza do 10 minut.",
          "Sekundární prevence AKS: 'The Big 5' = DAPT (12M), Statin vysoké intenzity (LDL cíl &lt; 1,4 mmol/l a pokles o ≥ 50 %), ACEi/ARB (při EF &lt; 40 %, DM nebo HTN), Betablokátor (při EF &lt; 40 %), MRA (spironolakton/eplerenon při EF &lt; 40 % a srdečním selhání)."
        ]
      }
    },
    {
      id: "midef",
      number: 2,
      title: "5. Univerzální definice infarktu myokardu (2026)",
      shortDesc: "Myokardiální poškození vs. infarkt myokardu, typy 1–5 IM, MINOCA a klinická interpretace dynamiky troponinu.",
      icon: "🔬",
      badge: "2026 Nová definice",
      badgeColor: "emerald",
      theory: {
        banner: {
          tag: "Zásadní rozlišení",
          title: "Myocardial Injury (Poškození) vs. Myocardial Infarction (Infarkt)",
          text: "Zvýšená hodnota srdečního troponinu nad 99. percentil horního referenčního limitu definuje **poškození myokardu (Myocardial Injury)**. Abychom stav klasifikovali jako **infarkt myokardu (MI)**, musí být přítomna dynamika troponinu (vzestup/pokles) A ZÁROVEŇ alespoň jeden klinický průkaz akutní ischémie myokardu!"
        },
        sections: [
          {
            title: "5 Typů infarktu myokardu",
            color: "emerald",
            content: `
              <div class="space-y-3">
                <div class="p-3 bg-slate-900 border-l-4 border-rose-500 rounded-r-xl">
                  <span class="font-bold text-rose-400 text-sm">Typ 1 IM (Aterotrombotický)</span>
                  <p class="text-xs text-slate-300 mt-1">Spuštěn rupturou, fisurou, erozí nebo disekcí aterosklerotického plátu s intraluminálním trombem ve věnčité tepně.</p>
                </div>
                <div class="p-3 bg-slate-900 border-l-4 border-amber-500 rounded-r-xl">
                  <span class="font-bold text-amber-400 text-sm">Typ 2 IM (Nepoměr nabídky a poptávky O2)</span>
                  <p class="text-xs text-slate-300 mt-1">Ischémie způsobená nepoměrem mezi dodávkou a spotřebou kyslíku bez akutní aterotrombózy (např. těžká anémie, sepse, tachykardie, hypotenze, vazospasmus, SCAD).</p>
                </div>
                <div class="p-3 bg-slate-900 border-l-4 border-purple-500 rounded-r-xl">
                  <span class="font-bold text-purple-400 text-sm">Typ 3 IM (Náhlá srdeční smrt)</span>
                  <p class="text-xs text-slate-300 mt-1">Srdeční smrt s ischemickými symptomy a EKG změnami, kdy pacient zemře dříve, než bylo možné odebrat krev na troponiny.</p>
                </div>
                <div class="p-3 bg-slate-900 border-l-4 border-cyan-500 rounded-r-xl">
                  <span class="font-bold text-cyan-400 text-sm">Typ 4 IM (Vázaný na PCI)</span>
                  <p class="text-xs text-slate-300 mt-1"><strong>4a:</strong> Periprocedurální IM při PCI (vzestup cTn &gt; 5× nad 99. percentil u normální baze). <strong>4b:</strong> Trombóza stentu prokázaná angiograficky či autopticky. <strong>4c:</strong> Restenóza ve stentu.</p>
                </div>
                <div class="p-3 bg-slate-900 border-l-4 border-blue-500 rounded-r-xl">
                  <span class="font-bold text-blue-400 text-sm">Typ 5 IM (Vázaný na CABG)</span>
                  <p class="text-xs text-slate-300 mt-1">Perioperační IM po aortokoronárním bypassu (vzestup cTn &gt; 10× nad 99. percentil u normální baze s novým patologickým Q či novou okluzí štěpu).</p>
                </div>
              </div>
            `
          },
          {
            title: "MINOCA (Myocardial Infarction with Non-Obstructive Coronary Arteries)",
            color: "cyan",
            content: `
              <p class="text-xs text-slate-300 leading-relaxed mb-3">
                Diagnóza MINOCA je pracovní diagnóza u pacientů s jasným infarktem myokardu (troponinová dynamika + ischemické známky), kteří mají na koronarografii <strong>normální nález nebo stenózy &lt; 50 %</strong>.
              </p>
              <div class="p-3 bg-cyan-950/40 border border-cyan-500/30 rounded-xl text-xs text-slate-200">
                <strong>Zlatý standard vyšetření:</strong> Magnetická rezonance srdce (CMR) je <strong>doporučena u všech pacientů s MINOCA (Třída I)</strong> k odlišení skutečného infarktu (subendokardiální LGE), myokarditidy (subepikardiální/mid-myokardiální LGE) a Takotsubo syndromu (typická balonovitá dyskineze bez LGE).
              </div>
            `
          }
        ]
      },
      recall: {
        scenarios: [
          {
            id: "midef-r1",
            title: "Otázka 1: Rozlišení typu IM",
            question: "82letá polymorbidní pacientka přijata pro urosepsi s febriliemi, hypotenzí (TK 80/50) a sinusovou tachykardií 140/min. EKG: difuzní horizontální deprese ST 1 mm. Kontrolní hs-cTnI stoupá z 45 na 180 ng/l. Koronární anatomie je chronicky sklerotická bez čerstvého trombu. O jaký typ IM se jedná?",
            answer: "Infarkt myokardu Typu 2. Ischémie myokardu vznikla nepoměrem mezi dodávkou kyslíku (hypotenze, tachykardie zkracující diastolické plnění koronárek) a zvýšenou poptávkou myokardu při sepsi, bez akutní ruptury plátu.",
            pearl: "Léčba IM typu 2 nespočívá v urgentní PCI, ale v kauzální korekci vyvolávající příčiny (léčba sepse, hydratace, úprava tlaku a frekvence)."
          },
          {
            id: "midef-r2",
            title: "Otázka 2: Diagnostický postup u MINOCA",
            question: "48letá žena bez KV rizikových faktorů po těžkém emočním stresu přijata pro typickou bolest na hrudi, elevace ST ve V2-V4 a troponin 850 ng/l. Na urgentní SKG jsou koronární tepny hladké bez obstrukce (&lt; 20 %). Jaké vyšetření je nezbytně indikováno k dořešení diagnózy?",
            answer: "Magnetická rezonance srdce (CMR - kardio MR). Dokáže s vysokou specificitou rozlišit Takotsubo kardiomyopatii, akutní myokarditidu nebo drobný embolizační infarkt.",
            pearl: "Až 30-40 % původně označených MINOCA jsou ve skutečnosti myokarditidy."
          }
        ],
        quiz: {
          title: "Kvíz: Myocardial Injury vs Infarkt",
          prompt: "Který z následujících pacientů má POUZE poškození myokardu (Myocardial Injury) a NEMÁ infarkt myokardu dle 5. univerzální definice?",
          options: [
            { text: "A) Pacient s chronickou renální insuficiencí s dlouhodobě stabilně zvýšeným hs-cTn 60 ng/l bez symptomů, bez EKG změn a bez dynamiky troponinu.", isCorrect: true },
            { text: "B) Pacient s tlakem na hrudi, inverzí T vln a vzestupem hs-cTn z 15 na 150 ng/l.", isCorrect: false },
            { text: "C) Pacient po KPR s novým patologickým kmitém Q ve svodech II, III, aVF a vzestupem hs-cTn.", isCorrect: false },
            { text: "D) Pacient se sepsí, novou poruchou kinetiky spodní stěny na ECHO a vzestupem hs-cTn.", isCorrect: false }
          ],
          explanation: "Chronicky zvýšený troponin bez akutního vzestupu/poklesu a bez jakýchkoli ischemických projevů (bolest, nové EKG změny, nová porucha kinetiky) splňuje pouze definici chronického poškození myokardu (chronic myocardial injury)."
        }
      },
      breakdown: {
        classThree: [
          "Nepovažovat každé izolované zvýšení troponinu automaticky za akutní koronární trombózu (Typ 1 IM) indikovanou k urgentní katetrizaci.",
          "Neprovádět rutinní invazivní léčbu (heparin, DAPT) u pacientů s chronickým stabilním poškozením myokardu bez ischémie."
        ],
        mustKnow: [
          "Kritéria IM: Vzestup nebo pokles hs-cTn nad 99. percentil + alespoň 1 z: ischemické symptomy, nové ischemické EKG změny (ST-T nebo nový Q kmit), průkaz nové ztráty viabilního myokardu / nové poruchy kinetiky na zobrazovacích metodách, nebo průkaz intrakoronárního trombu při angiografii.",
          "5 typů: 1 = aterotrombóza plátu; 2 = mismatch O2; 3 = náhlá smrt; 4 = PCI-related; 5 = CABG-related."
        ]
      }
    },
    {
      id: "hf",
      number: 3,
      title: "Srdeční selhání (2026 ESC Guidelines)",
      shortDesc: "Nová klasifikace stadií A–D, zánik HFmrEF, 4 pilíře Foundational Medical Therapy (FMT), akutní selhání a kardiogenní šok.",
      icon: "🫁",
      badge: "2026 ESC Guidelines",
      badgeColor: "cyan",
      theory: {
        banner: {
          tag: "2026 Revoluce v Guidelines",
          title: "Zjednodušená klasifikace a nová nomenklatura léčby",
          text: "Guidelines 2026 sjednocují klasifikaci: ruší se kategorie HFmrEF (mírně snížená EF) a pacienti se dělí binárně na **HFrEF (EF ≤ 40 %)** a **HFpEF (EF > 40 %)**. Zavádí se americký model **stadií A–D** s obrovským důrazem na prevenci a starý termín GDMT je nahrazen dělením na **FMT (Foundational Medical Therapy)** a **AMT (Additional Medical Therapy)**."
        },
        sections: [
          {
            title: "Stadia srdečního selhání (A -> D)",
            color: "cyan",
            content: `
              <div class="grid sm:grid-cols-2 gap-3 text-xs">
                <div class="p-3 bg-slate-900 border border-slate-700 rounded-xl">
                  <div class="font-bold text-slate-200">Stádium A: V riziku (At Risk)</div>
                  <p class="text-slate-400 mt-1">Pacienti s hypertenzí, DM, obezitou, KVS onemocněním, ale BEZ strukturálního postižení srdce a BEZ biomarkerů/symptomů.</p>
                </div>
                <div class="p-3 bg-slate-900 border border-slate-700 rounded-xl">
                  <div class="font-bold text-cyan-400">Stádium B: Pre-heart failure</div>
                  <p class="text-slate-400 mt-1">Asymptomatičtí pacienti, ale MAJÍ strukturální vadu (hypertrofie LK, porucha kinetiky) NEBO zvýšené natriuretické peptidy (BNP/NT-proBNP).</p>
                </div>
                <div class="p-3 bg-slate-900 border border-amber-500/50 rounded-xl">
                  <div class="font-bold text-amber-400">Stádium C: Symptomatické selhání</div>
                  <p class="text-slate-400 mt-1">Pacienti s aktuálními nebo předchozími symptomy srdečního selhání (dušnost, otoky, únava) a strukturálním postižením.</p>
                </div>
                <div class="p-3 bg-slate-900 border border-rose-500/50 rounded-xl">
                  <div class="font-bold text-rose-400">Stádium D: Pokročilé (Advanced HF)</div>
                  <p class="text-slate-400 mt-1">Těžké refrakterní symptomy v klidu navzdory maximální terapii. Indikace k mechanické srdeční podpoře (LVAD) či transplantaci srdce.</p>
                </div>
              </div>
            `
          },
          {
            title: "4 Pilíře bazální léčby HFrEF (Foundational Medical Therapy - FMT)",
            color: "emerald",
            content: `
              <p class="text-xs text-slate-300 mb-3">U každého pacienta s HFrEF (EF ≤ 40 %) musí být co nejrychleji nasazena **čtyřkombinace (FMT)**, která snižuje mortalitu o více než 60 %:</p>
              <div class="grid sm:grid-cols-2 gap-3">
                <div class="p-3 bg-emerald-950/30 border border-emerald-500/30 rounded-xl">
                  <div class="font-bold text-emerald-400 text-xs">1. ARNI (Sacubitril/Valsartan)</div>
                  <p class="text-[11px] text-slate-300 mt-0.5">Nebo ACEi/ARB při nesnášenlivosti. ARNI má přednost jako lék první volby.</p>
                </div>
                <div class="p-3 bg-emerald-950/30 border border-emerald-500/30 rounded-xl">
                  <div class="font-bold text-emerald-400 text-xs">2. Betablokátory</div>
                  <p class="text-[11px] text-slate-300 mt-0.5">Pouze 4 s průkazem mortality: Bisoprolol, Metoprolol sukcinát, Karvedilol, Nebivolol.</p>
                </div>
                <div class="p-3 bg-emerald-950/30 border border-emerald-500/30 rounded-xl">
                  <div class="font-bold text-emerald-400 text-xs">3. MRA (Antagonisté mineralokortikoidních rec.)</div>
                  <p class="text-[11px] text-slate-300 mt-0.5">Spironolakton nebo Eplerenon. Kontrola kalémie a renálních funkcí!</p>
                </div>
                <div class="p-3 bg-emerald-950/30 border border-emerald-500/30 rounded-xl">
                  <div class="font-bold text-emerald-400 text-xs">4. SGLT2 inhibitory (Glifloziny)</div>
                  <p class="text-[11px] text-slate-300 mt-0.5">Dapagliflozin nebo Empagliflozin. Účinné u HFrEF i HFpEF, s diabetem i bez něj!</p>
                </div>
              </div>
            `
          }
        ]
      },
      recall: {
        scenarios: [
          {
            id: "hf-r1",
            title: "Otázka 1: Záměna ACE inhibitoru za ARNI",
            question: "Pacient s HFrEF stabilně užívá Ramipril 10 mg denně. Rozhodli jste se pro indikovaný přechod na Sacubitril/Valsartan (ARNI). Jak dlouhé musí být bezlékové okno (wash-out perioda) mezi poslední dávkou Ramiprilu a první tabletou ARNI?",
            answer: "Alespoň 36 hodin. Současné či bezprostřední podání ACEi a ARNI vede k masivní akumulaci bradykininu a způsobuje život ohrožující angioedém.",
            pearl: "U přechodu ze sartanů (ARB) na ARNI wash-out perioda není nutná, lék lze podat rovnou následující den."
          },
          {
            id: "hf-r2",
            title: "Otázka 2: Léčba HFpEF (Zachovaná ejekční frakce)",
            question: "74letá pacientka s hypertenzí a obezitou má námahovou dušnost NYHA III, NT-proBNP 1400 pg/ml, na ECHO je EF LK 55 % a známky diastolické dysfunkce (HFpEF). Která léková skupina má dnes jednoznačný průkaz snížení KV mortality a hospitalizací pro HFpEF (Třída I)?",
            answer: "SGLT2 inhibitory (Empagliflozin nebo Dapagliflozin). Na základě studií EMPEROR-Preserved a DELIVER jsou glifloziny základním lékem volby pro HFpEF.",
            pearl: "Smyčková diuretika (furosemid) se přidávají symptomaticky k dosažení euvolemie."
          }
        ],
        quiz: {
          title: "Kvíz: Léčba akutního srdečního selhání",
          prompt: "U pacienta přijatého pro akutní plicní edém (vlhký a teplý profil: TK 175/100, tachypnoe, chrůpky do 1/2 plic, SpO2 88 %) je prioritním krokem v urgentní farmakoterapii:",
          options: [
            { text: "A) Kyslík (při SpO2 < 90 %), i.v. Furosemid v bolusu a i.v. Nitráty (vazodilatancia) ke snížení afterloadu a preloadu", isCorrect: true },
            { text: "B) Okamžitá infuze Dobutaminu a Noradrenalinu", isCorrect: false },
            { text: "C) Rychlý převod 1000 ml fyziologického roztoku", isCorrect: false },
            { text: "D) Okamžité nasazení vysoké dávky beta-blokátoru i.v.", isCorrect: false }
          ],
          explanation: "U hypertenzního plicního edému ('warm and wet') je klíčové snížení plnících tlaků a afterloadu kombinací i.v. nitrátů (izosorbid dinitrát / nitroglycerin) a i.v. kličkového diuretika (furosemid) spolu s oxygenoterapií/NIV."
        }
      },
      breakdown: {
        classThree: [
          "Podání ARNI do 36 hodin od poslední dávky ACE inhibitoru (riziko angioedému).",
          "Zahajování nebo navyšování betablokátoru během akutní těžké dekompenzace srdečního selhání.",
          "Podávání nesteroidních antiflogistik (NSAID) a glitazonů (zhoršují retenci tekutin a dekompenzují HF).",
          "Podávání nondihydropyridinových BKK (verapamil, diltiazem) u HFrEF (negativně inotropní efekt)."
        ],
        mustKnow: [
          "FMT 4 pilíře: ARNI/ACEi + Betablokátor + MRA + SGLT2i. Každý pacient s HFrEF má mít všechny čtyři.",
          "Diuretika nemají vliv na dlouhodobou mortalitu, ale jsou nezbytná k udržení euvolemie.",
          "ICD (implantabilní kardioverter-defibrilátor) je indikován v primární prevenci u symptomatických pacientů (NYHA II–III) s EF ≤ 35 % navzdory ≥ 3 měsícům optimální farmakoterapie."
        ]
      }
    },
    {
      id: "htn",
      number: 4,
      title: "Arteriální hypertenze (2024 ESC Guidelines)",
      shortDesc: "Nová kategorie zvýšeného TK, cílové hodnoty 120–129 mmHg, fixní dvojkombinace v 1 tabletě a diagnostika sekundární hypertenze.",
      icon: "🩺",
      badge: "2024 ESC Guidelines",
      badgeColor: "amber",
      theory: {
        banner: {
          tag: "Nová klasifikace (2024 ESC)",
          title: "Zpřísnění cílů a nová kategorie 'Zvýšený krevní tlak'",
          text: "ESC 2024 zavádí 3 kategorie krevního tlaku: 1. **Neklasifikovaný / Normální TK (< 120/70 mmHg)**, 2. **Zvýšený TK (Elevated BP: 120–139 / 70–89 mmHg)** a 3. **Hypertenze (≥ 140/90 mmHg)**. Cílový systolický tlak pro většinu dospělých léčených pacientů je nově sjednocen na **120–129 mmHg** (pokud je dobře tolerován)."
        },
        sections: [
          {
            title: "Strategie zahájení léčby: Fixní kombinace (Single-Pill Combination)",
            color: "amber",
            content: `
              <div class="p-4 bg-slate-900 border border-slate-700 rounded-xl text-xs text-slate-300 leading-relaxed">
                <p class="mb-2"><strong>Základní pravidlo 2024:</strong> Zahájení léčby hypertenze <strong>dvojkombinací v jedné tabletě (SPC)</strong> je doporučeno pro naprostou většinu pacientů (Třída I).</p>
                <div class="grid sm:grid-cols-3 gap-3 my-3">
                  <div class="p-2.5 bg-slate-800 rounded-lg border border-slate-600">
                    <span class="font-bold text-amber-400">Krok 1: Dvojkombinace (SPC)</span>
                    <p class="text-[11px] mt-1 text-slate-300">ACEi nebo ARB + BKK (dihydropyridin) NEBO thiazidové/thiazid-like diuretikum.</p>
                  </div>
                  <div class="p-2.5 bg-slate-800 rounded-lg border border-slate-600">
                    <span class="font-bold text-amber-400">Krok 2: Trojkombinace (SPC)</span>
                    <p class="text-[11px] mt-1 text-slate-300">ACEi/ARB + BKK + Thiazidové/thiazid-like diuretikum v 1 tabletě.</p>
                  </div>
                  <div class="p-2.5 bg-slate-800 rounded-lg border border-slate-600">
                    <span class="font-bold text-amber-400">Krok 3: Rezistentní HT</span>
                    <p class="text-[11px] mt-1 text-slate-300">Trojkombinace + Spironolakton (25–50 mg) nebo betablokátor/centrální látka.</p>
                  </div>
                </div>
                <p class="text-slate-400">Monoterapie je vyhrazena pouze pro křehké geriatrické pacienty nebo nízkorizikovou mírnou hypertenzi (TK &lt; 150/95 mmHg).</p>
              </div>
            `
          },
          {
            title: "Sekundární arteriální hypertenze (Kdy pátrat?)",
            color: "rose",
            content: `
              <ul class="list-disc ml-5 text-xs text-slate-300 space-y-1.5">
                <li><strong>Mladý věk (&lt; 35 let)</strong> nebo náhlý vznik těžké hypertenze.</li>
                <li><strong>Rezistentní hypertenze</strong> (neuspokojivý TK navzdory trojkombinaci v plných dávkách vč. diuretika).</li>
                <li><strong>Hypokalémie</strong> (spontánní nebo po nízkých dávkách diuretik) -> podezření na <em>primární hyperaldosteronismus (Connův syndrom)</em> -> vyšetření poměru aldosteron/renin (ARR).</li>
                <li><strong>Asymetrie ledvin / šelest nad renálními tepnami</strong> -> <em>renovaskulární hypertenze</em> (ateroskleróza u starších, fibromuskulární dysplazie u mladých žen).</li>
                <li><strong>Záchvatovitá hypertenze s triádou (bolest hlavy, pocení, palpitace)</strong> -> <em>feochromocytom</em> (plazmatické/močové metanefriny).</li>
                <li><strong>Syndrom spánkové apnoe (OSAS)</strong> – nejčastější sekundární příčina!</li>
              </ul>
            `
          }
        ]
      },
      recall: {
        scenarios: [
          {
            id: "htn-r1",
            title: "Otázka 1: Diagnostika primárního hyperaldosteronismu",
            question: "42letý pacient s refrakterní hypertenzí (TK 165/105 na trojkombinaci) má v krevním obraze kalémii 3,1 mmol/l. Jaký je iniciální screeningový test pro podezření na Connův syndrom a jaké léky musíte před testem vysadit?",
            answer: "Stanovení poměru plazmatického aldosteronu k plazmatické reninovové aktivitě / koncentraci (ARR = Aldosterone-to-Renin Ratio). Alespoň 4 týdny předem je nutné vysadit antagonisty mineralokortikoidních receptorů (Spironolakton, Eplerenon).",
            pearl: "Pokud je ARR pozitivní, následuje konfirmační test (např. zátěžový test fyziologickým roztokem) a CT nadledvin."
          },
          {
            id: "htn-r2",
            title: "Otázka 2: Hypertenzní krize – Emergence vs Urgence",
            question: "Jaký je zásadní rozdíl mezi hypertenzní emergencí (emergency) a hypertenzní urgencí (urgency) a jak se liší jejich léčba?",
            answer: "Hypertenzní emergence je těžká elevace TK (obvykle > 180/120 mmHg) PROVÁZENÁ akutním progredujícím poškozením cílových orgánů (např. akutní plicní edém, aortální disekce, eklampsie, encefalopatie). Vyžaduje hospitalizaci na JIP a parenterální (i.v.) léčbu s řízeným poklesem TK. Hypertenzní urgence orgánové poškození nemá a léčí se perorálně v ambulantním režimu.",
            pearl: "Při hypertenzní emergenci (vyjma aortální disekce) nesmí tlak v první hodině klesnout o více než 25 %, aby nedošlo k ischémii mozku či ledvin."
          }
        ],
        quiz: {
          title: "Kvíz: Volba antihypertenziv",
          prompt: "Která z následujících kombinací antihypertenziv je ZAKÁZANÁ (kontraindikovaná) kvůli vysokému riziku hyperkalémie, hypotenze a renálního selhání?",
          options: [
            { text: "A) Současné podávání ACE inhibitoru (např. Perindopril) a Sartanu (např. Telmisartan)", isCorrect: true },
            { text: "B) ACE inhibitor + Blokátor kalciových kanálů", isCorrect: false },
            { text: "C) Sartan + Indapamid", isCorrect: false },
            { text: "D) Trojkombinace ACEi + BKK + Spironolakton", isCorrect: false }
          ],
          explanation: "Duální blokáda RAAS (kombinace ACEi + ARB nebo inhibitoru reninu) je v guidelines přísně kontraindikována (Třída III) na základě studií ONTARGET a ALTITUDE, protože signifikantně zvyšuje výskyt renálního selhání a hyperkalémie bez kardiovaskulárního benefitu."
        }
      },
      breakdown: {
        classThree: [
          "Současná kombinace dvou blokátorů RAAS (ACE inhibitor + sartan / přímý inhibitor reninu).",
          "Předepisování betablokátorů jako rutinní lék 1. volby pro nekomplikovanou esenciální hypertenzi (výjimkou je ICHS, arytmie, srdeční selhání).",
          "Příliš prudký pokles TK u ischemické cévní mozkové příhody (pokud není indikována trombolýza)."
        ],
        mustKnow: [
          "Cílový TK: 120–129 / 70–79 mmHg pro většinu pacientů.",
          "Základní pilíř: Fixní dvojkombinace v 1 tabletě (Single-Pill Combination) již od začátku léčby.",
          "Hypertenzní emergence: i.v. terapie (Urapidil, Labetalol, Nitroglycerin, Nitroprusid)."
        ]
      }
    },
    {
      id: "afib",
      number: 5,
      title: "Fibrilace a flutter síní (2024 ESC Guidelines)",
      shortDesc: "CARE strategie, CHA2DS2-VA skóre (odstranění ženského pohlaví), indikace NOAC, kontrola rytmu vs. frekvence a katetrizační ablace.",
      icon: "⚡",
      badge: "2024 ESC Guidelines",
      badgeColor: "purple",
      theory: {
        banner: {
          tag: "2024 ESC Změna skórování",
          title: "CARE strategie a zánik 'Sc' v CHA2DS2-VASc skóre",
          text: "Guidelines 2024 zavádějí komplexní **CARE přístup** (Comorbidity management, Avoid stroke, Reduce symptoms, Evaluate). Klíčovou novinkou je úprava tromboembolického skóre na **CHA2DS2-VA** – ženské pohlaví (Sc) již není samostatným bodem, protože samotné pohlaví bez dalších KV rizikových faktorů nezvyšuje riziko CMP!"
        },
        sections: [
          {
            title: "Indikace antikoagulační léčby (CHA2DS2-VA)",
            color: "purple",
            content: `
              <div class="p-4 bg-slate-900 border border-slate-700 rounded-xl text-xs space-y-3">
                <p class="text-slate-300"><strong>Kdy nasadit NOAC (Apixaban, Edoxaban, Rivaroxaban, Dabigatran):</strong></p>
                <div class="grid sm:grid-cols-3 gap-3">
                  <div class="p-3 bg-rose-950/40 border border-rose-500/30 rounded-lg">
                    <span class="font-bold text-rose-400 text-sm">Skóre ≥ 2 body</span>
                    <p class="text-slate-300 mt-1">Antikoagulace je <strong>JASNĚ INDIKOVÁNA (Třída I)</strong>.</p>
                  </div>
                  <div class="p-3 bg-amber-950/40 border border-amber-500/30 rounded-lg">
                    <span class="font-bold text-amber-400 text-sm">Skóre = 1 bod</span>
                    <p class="text-slate-300 mt-1">Antikoagulace <strong>MÁ BÝT ZVÁŽENA (Třída IIa)</strong>.</p>
                  </div>
                  <div class="p-3 bg-emerald-950/40 border border-emerald-500/30 rounded-lg">
                    <span class="font-bold text-emerald-400 text-sm">Skóre = 0 bodů</span>
                    <p class="text-slate-300 mt-1">Antikoagulace <strong>NENÍ INDIKOVÁNA (Třída III)</strong>.</p>
                  </div>
                </div>
                <p class="text-slate-400">NOAC mají jednoznačnou přednost před Warfarinem (VKA) u všech non-valvulárních fibrilací síní.</p>
              </div>
            `
          },
          {
            title: "Kontrola rytmu vs. Kontrola frekvence & Katetrizační ablace",
            color: "cyan",
            content: `
              <div class="grid md:grid-cols-2 gap-4 text-xs">
                <div class="p-3 bg-slate-900 border border-slate-700 rounded-xl">
                  <h4 class="font-bold text-cyan-400 mb-1">Kontrola frekvence (Rate Control)</h4>
                  <p class="text-slate-300 leading-relaxed">
                    Cílová klidová TF &lt; 100–110/min. Léky 1. volby: <strong>Betablokátory</strong> nebo nondihydropyridinové BKK (Verapamil/Diltiazem – pouze při zachované EF &gt; 40 %!). U srdečního selhání Digoxin.
                  </p>
                </div>
                <div class="p-3 bg-slate-900 border border-slate-700 rounded-xl">
                  <h4 class="font-bold text-cyan-400 mb-1">Katetrizační ablace (PVI)</h4>
                  <p class="text-slate-300 leading-relaxed">
                    Izolace plicních žil (PVI) je v roce 2024 doporučena jako <strong>léčba první volby (Třída I)</strong> u symptomatické paroxyzmální FS i před selháním antiarytmik, a zvláště u pacientů s FS a srdečním selháním (HFrEF)!
                  </p>
                </div>
              </div>
            `
          }
        ]
      },
      recall: {
        scenarios: [
          {
            id: "af-r1",
            title: "Otázka 1: Kdy je Warfarin stále nenahraditelný?",
            question: "U kterých dvou specifických skupin pacientů s fibrilací síní jsou NOAC (přímá orální antikoagulancia) přísně kontraindikována a lékem volby zůstává Warfarin s cílovým INR?",
            answer: "1. Pacienti s mechanickou srdeční chlopní. 2. Pacienti se středně těžkou až těžkou mitrální stenózou (typicky poreumatickou).",
            pearl: "U biologických chlopní nebo po plastice chlopně jsou NOAC po počátečním hojení bezpečná."
          },
          {
            id: "af-r2",
            title: "Otázka 2: Elektrická kardioverze a jícnová echokardiografie",
            question: "Pacient přichází s palpitacemi trvajícími 4 dny. EKG potvrzuje fibrilaci síní s rychlou komorovou odpovědí. Antikoagulancia dosud neužíval. Chcete provést plánovanou elektrickou kardioverzi. Jaký je postup?",
            answer: "Pokud arytmie trvá > 48 hodin a pacient nebyl řádně antikoagulován alespoň 3 týdny, je nutné PŘED kardioverzí provést transezofageální echokardiografii (TEE / TEECHO) k vyloučení trombu v oušku levé síně. Následně musí antikoagulace pokračovat minimálně 4 týdny po výkonu.",
            pearl: "Při hemodynamické nestabilitě (šok, plicní edém) se provádí okamžitá emergentní kardioverze s bolusem heparinu bez čekání na TEE."
          }
        ],
        quiz: {
          title: "Kvíz: Antiarytmika u fibrilace síní",
          prompt: "Které z následujících antiarytmik je BEZPEČNÉ k udržení sinusového rytmu u pacienta s fibrilací síní a těžkou dysfunkcí levé komory (EF LK 28 %)?",
          options: [
            { text: "A) Amiodaron", isCorrect: true },
            { text: "B) Propafenon (Třída Ic)", isCorrect: false },
            { text: "C) Flekainid (Třída Ic)", isCorrect: false },
            { text: "D) Dronedaron", isCorrect: false }
          ],
          explanation: "Antiarytmika třídy Ic (Propafenon, Flekainid) i Dronedaron jsou u strukturálního postižení srdce a snížené EF LK přísně kontraindikována pro vysoké riziko proarytmie a úmrtí (studie CAST). U HFrEF je jediným bezpečným antiarytmicem Amiodaron."
        }
      },
      breakdown: {
        classThree: [
          "Podávání NOAC pacientům s mechanickou srdeční chlopní nebo významnou mitrální stenózou.",
          "Podávání antiarytmik třídy Ic (Propafenon, Flekainid) pacientům po infarktu myokardu nebo s HFrEF.",
          "Podávání Verapamilu nebo Diltiazemu pacientům s HFrEF (EF ≤ 40 %).",
          "Podávání antiagregační monoterapie (Aspirin) k prevenci CMP u fibrilace síní (neúčinné a krvácivé)."
        ],
        mustKnow: [
          "CHA2DS2-VA skóre: C (selhání 1b), H (hypertenze 1b), A2 (věk ≥75 2b), D (diabetes 1b), S2 (CMP/TIA 2b), V (vaskulární onemocnění 1b), A (věk 65–74 1b).",
          "Pill-in-the-pocket strategie: Jednorázové užití Propafenonu (450–600 mg) u vybraných pacientů bez strukturálního onemocnění srdce.",
          "Katetrizační ablace (PVI) má Třídu I doporučení u symptomatické FS i u FS se srdečním selháním."
        ]
      }
    },
    {
      id: "arytmie",
      number: 6,
      title: "Ostatní arytmie a převodní poruchy",
      shortDesc: "Supraventrikulární tachykardie (AVNRT, AVRT/WPW), komorové tachykardie, AV blokády I.–III. stupně a raménkové blokády.",
      icon: "⚡",
      badge: "Kardiologie & EKG",
      badgeColor: "blue",
      theory: {
        banner: {
          tag: "Diferenciální diagnostika",
          title: "Tachykardie s úzkým vs. širokým QRS komplexem",
          text: "Úzký QRS (&lt; 120 ms) = původ supraventrikulární (AVNRT, AVRT, fibrilace/flutter síní, sinusová tachykardie). Široký QRS (≥ 120 ms) = **v 80 % komorová tachykardie (KT)**, dokud se neprokáže opak! Nikdy nepodávejte verapamil na nejasnou tachykardii se širokým QRS!"
        },
        sections: [
          {
            title: "Supraventrikulární tachykardie (SVT)",
            color: "blue",
            content: `
              <div class="space-y-3 text-xs text-slate-300">
                <div class="p-3 bg-slate-900 border border-slate-700 rounded-xl">
                  <span class="font-bold text-blue-400">AVNRT (AV nodální reentry tachykardie)</span>
                  <p class="mt-1">Nejčastější pravidelná SVT. Náhlý vznik a zánik (palpitace v krku - 'frog sign'). EKG: štíhlé QRS, vlna P skryta v QRS nebo těsně za ním (pseudo r' ve V1).</p>
                  <p class="mt-1 text-slate-400"><strong>Léčba:</strong> Vagové manévry (modifikovaný Valsalva manévr), při neúspěchu <strong>i.v. Adenosin</strong> v rychlém bolusu (6 mg -> 12 mg). Kurativní: radiofrekvenční ablace pomalé dráhy.</p>
                </div>
                <div class="p-3 bg-slate-900 border border-slate-700 rounded-xl">
                  <span class="font-bold text-blue-400">WPW syndrom (Wolff-Parkinson-White / AVRT)</span>
                  <p class="mt-1">Přídatná Kentova dráha. EKG v klidu: krátký PQ (&lt; 120 ms), <strong>delta vlna</strong>, rozšířený QRS.</p>
                  <p class="mt-1 text-rose-300"><strong>Pozor na fibrilaci síní u WPW (FBI tachykardie - Fast, Broad, Irregular):</strong> Převod přes přídatnou dráhu může dosáhnout frekvence &gt; 250–300/min a přejít do fibrilace komor! Blokátory AV uzlu (verapamil, digoxin, adenosin) jsou ZAKÁZÁNY! Lék volby: elektrická kardioverze nebo i.v. Ibutilid / prokainamid.</p>
                </div>
              </div>
            `
          },
          {
            title: "Převodní poruchy (AV blokády & Raménková ramínka)",
            color: "amber",
            content: `
              <div class="grid sm:grid-cols-2 gap-3 text-xs">
                <div class="p-3 bg-slate-900 border border-slate-700 rounded-xl">
                  <span class="font-bold text-amber-400">AV blokády</span>
                  <ul class="list-disc ml-4 mt-1 text-slate-300 space-y-1">
                    <li><strong>1. stupeň:</strong> PQ &gt; 200 ms, každé P je převedeno.</li>
                    <li><strong>2. stupeň Mobitz I (Wenckebach):</strong> postupné prodlužování PQ až do vypadnutí QRS. Obvykle benigní v AV uzlu.</li>
                    <li><strong>2. stupeň Mobitz II:</strong> konstantní PQ a náhlé vypadnutí QRS. Vysoce rizikové (pod AV uzlem) -> indikace ke kardiostimulátoru (PM)!</li>
                    <li><strong>3. stupeň (kompletní):</strong> disociace síní a komor (PP pravidelné, RR pravidelné, nesouvisí). Indikace k trvalé kardiostimulaci!</li>
                  </ul>
                </div>
                <div class="p-3 bg-slate-900 border border-slate-700 rounded-xl">
                  <span class="font-bold text-amber-400">Raménkové blokády (LBBB vs RBBB)</span>
                  <ul class="list-disc ml-4 mt-1 text-slate-300 space-y-1">
                    <li><strong>LBBB (Blokáda levého raménka):</strong> QRS ≥ 120 ms, hluboké široké S ve V1–V2, široké vroubkované R (tvar M) ve V5–V6 a I, aVL. Maskuje infarktové změny! Nový LBBB při bolesti na hrudi = ekvivalent STEMI!</li>
                    <li><strong>RBBB (Blokáda pravého raménka):</strong> QRS ≥ 120 ms, tvar rsR' (králičí ouška) ve V1–V2, široké S ve V5–V6. Často i u zdravých či při plicní embolii.</li>
                  </ul>
                </div>
              </div>
            `
          }
        ]
      },
      recall: {
        scenarios: [
          {
            id: "ary-r1",
            title: "Otázka 1: Zástava srdce a rytmy",
            question: "Které 2 srdeční rytmy při srdeční zástavě jsou defibrilovatelné a které 2 jsou nedefibrilovatelné?",
            answer: "Defibrilovatelné: 1. Fibrilace komor (FK), 2. Bezpulzová komorová tachykardie (pVT). Nedefibrilovatelné: 1. Asystolie, 2. Bezpulzová elektrická aktivita (PEA).",
            pearl: "U defibrilovatelných rytmů se podává Adrenalin 1 mg i.v. až po 3. výboji (a dále po každém druhém cyklu) spolu s Amiodaronem 300 mg i.v."
          },
          {
            id: "ary-r2",
            title: "Otázka 2: Léčba akutní bradykardie",
            question: "Pacient s akutním infarktem spodní stěny má bradykardii s TF 32/min, hypotenzi 70/40 mmHg a bledost. EKG ukazuje AV blokádu III. stupně. Jaký je okamžitý farmakologický krok první volby?",
            answer: "Atropin 0,5 mg – 1,0 mg i.v. bolus (lze opakovat do max. dávky 3 mg). Pokud pacient nereaguje, okamžitě zahájit dočasnou transkutánní kardiostimulaci nebo infuzi isoprenalinu/adrenalinu a transportovat k zavedení dočasné transvenózní elektrostimulace.",
            pearl: "U blokád v Hisově svazku (Mobitz II nebo infra-nodální bloky) Atropin často nepomůže a je nutná kardiostimulace."
          }
        ],
        quiz: {
          title: "Kvíz: Torsades de Pointes",
          prompt: "Pacientka užívající sotalol a ciprofloxacin má na EKG prodloužený korigovaný interval QTc = 560 ms a rozvíjí záchvat polymorfní komorové tachykardie typu Torsades de Pointes. Co je lékem první volby?",
          options: [
            { text: "A) Magnesium sulfát (Síran hořečnatý) 2g i.v. v pomalé injekci", isCorrect: true },
            { text: "B) Amiodaron 300 mg i.v.", isCorrect: false },
            { text: "C) Verapamil 5 mg i.v.", isCorrect: false },
            { text: "D) Digoxin 0,5 mg i.v.", isCorrect: false }
          ],
          explanation: "Magnesium sulfát i.v. je lékem volby pro Torsades de Pointes asociované s dlouhým QT intervalem. Amiodaron je v této situaci přísně kontraindikován, protože sám dále prodlužuje interval QT a mohl by vyvolat fatální zástavu."
        }
      },
      breakdown: {
        classThree: [
          "Podávání Verapamilu nebo Diltiazemu u nejasné tachykardie se širokým QRS komplexem (hrozí asystolie či kolaps při KT).",
          "Podávání AV nodálních blokátorů (Adenosin, Verapamil, Digoxin, Betablokátory) při fibrilaci síní s preexcitací (WPW syndrom).",
          "Podávání léků prodlužujících QT interval (Amiodaron, Sotalol, Makrolidy, Chinolony) při známém syndromu dlouhého QT (LQTS) nebo Torsades de Pointes."
        ],
        mustKnow: [
          "Adenosin u AVNRT: Rychlý i.v. bolus s následným proplachem 20 ml fyziologického roztoku a zvednutím končetiny (krátký poločas &lt; 10 sekund).",
          "Indikace k trvalému kardiostimulátoru: Symptomatická sinusová bradykardie, AV blokáda II. stupně typu Mobitz II, AV blokáda III. stupně, alternující raménková blokáda.",
          "Nově vzniklý LBBB + klinika ischemické bolesti = indikace k okamžité katetrizaci jako STEMI."
        ]
      }
    },
    {
      id: "chlopne",
      number: 7,
      title: "Chlopenní vady",
      shortDesc: "Aortální stenóza a regurgitace, mitrální stenóza a regurgitace, trikuspidální vady, TAVI vs. chirurgická náhrada.",
      icon: "🚪",
      badge: "Valvulární vady",
      badgeColor: "rose",
      theory: {
        banner: {
          tag: "Chlopenní kardiologie",
          title: "Aortální stenóza jako nejčastější vada dospělých",
          text: "Aortální stenóza (AS) je nejčastější chlopenní vadou v rozvinutých zemích (senilní kalcifikující nebo na vrozeně bikuspidální chlopni). Klasická triáda symptomů: **Dušnost, Angina pectoris, Synkopa**. Po nástupu symptomů bez operace prudce stoupá mortalita (medián přežití 2–3 roky)!"
        },
        sections: [
          {
            title: "Aortální stenóza (AS) & TAVI vs SAVR",
            color: "rose",
            content: `
              <div class="p-4 bg-slate-900 border border-slate-700 rounded-xl text-xs space-y-3">
                <div class="font-bold text-rose-400">Kritéria těžké aortální stenózy:</div>
                <div class="grid sm:grid-cols-3 gap-2 text-slate-300">
                  <div class="p-2 bg-slate-800 rounded">Plocha ústí (AVA): <strong>&lt; 1,0 cm²</strong> (nebo &lt; 0,6 cm²/m²)</div>
                  <div class="p-2 bg-slate-800 rounded">Střední tlakový gradient (meanPG): <strong>≥ 40 mmHg</strong></div>
                  <div class="p-2 bg-slate-800 rounded">Maximální rychlost (Vmax): <strong>≥ 4,0 m/s</strong></div>
                </div>
                <div class="mt-2 text-slate-300">
                  <strong>Volba intervence:</strong>
                  <ul class="list-disc ml-5 mt-1 space-y-1">
                    <li><strong>TAVI (Transkatétrová implantace):</strong> Preferována u pacientů <strong>≥ 75 let</strong> nebo při vysokém chirurgickém riziku (STS/EuroSCORE).</li>
                    <li><strong>SAVR (Chirurgická náhrada):</strong> Preferována u mladších pacientů <strong>&lt; 75 let</strong> s nízkým rizikem nebo při nutnosti současného CABG či operace aorty.</li>
                  </ul>
                </div>
              </div>
            `
          },
          {
            title: "Přehled poslechových nálezů chlopenních vad",
            color: "cyan",
            content: `
              <div class="grid sm:grid-cols-2 gap-3 text-xs">
                <div class="p-3 bg-slate-900 border border-slate-700 rounded-xl">
                  <span class="font-bold text-cyan-400">Aortální stenóza (AS)</span>
                  <p class="text-slate-300 mt-1">Drsný ejekční systolický šelest v 2. mezižebří vpravo u sterna s propagací do karotid. Oslabená 2. ozva, pulsus tardus et parvus.</p>
                </div>
                <div class="p-3 bg-slate-900 border border-slate-700 rounded-xl">
                  <span class="font-bold text-cyan-400">Aortální regurgitace (AR)</span>
                  <p class="text-slate-300 mt-1">Časný diastolický decrescendo šelest ve 2. mezižebří vpravo a v Erbově bodě. Vysoký systolický a nízký diastolický tlak (velká tlaková amplituda, Corriganův mrštný puls).</p>
                </div>
                <div class="p-3 bg-slate-900 border border-slate-700 rounded-xl">
                  <span class="font-bold text-emerald-400">Mitrální regurgitace (MR)</span>
                  <p class="text-slate-300 mt-1">Holosystolický foukavý šelest na hrotu s propagací do levé axily. Zeslabená 1. ozva, často 3. ozva.</p>
                </div>
                <div class="p-3 bg-slate-900 border border-slate-700 rounded-xl">
                  <span class="font-bold text-emerald-400">Mitrální stenóza (MS)</span>
                  <p class="text-slate-300 mt-1">Akcentovaná 1. ozva na hrotu, opening snap (otevírací lupnutí mitrální chlopně) a nízkofrekvenční diastolický vír (rumble) s presystolickým zesílením.</p>
                </div>
              </div>
            `
          }
        ]
      },
      recall: {
        scenarios: [
          {
            id: "chl-r1",
            title: "Otázka 1: Mechanická vs. Biologická chlopeň",
            question: "Mladý 34letý muž podstupuje náhradu aortální chlopně. Byla mu implantována mechanická protéza. Jaká je celoživotní antitrombotická terapie a jaké je cílové INR?",
            answer: "Celoživotní antikoagulace Warfarinem s cílovým INR 2,0–3,0 (pro aortální pozici bez dalších rizik) nebo 2,5–3,5 (pro mitrální pozici nebo při rizikových faktorech). NOAC jsou přísně kontraindikována!",
            pearl: "Biologická chlopeň nevyžaduje celoživotní antikoagulaci (pouze 3–6 měsíců po operaci), ale má omezenou životnost (10–15 let)."
          },
          {
            id: "chl-r2",
            title: "Otázka 2: Těžká asymptomatická aortální stenóza",
            question: "68letý muž má na echokardiografii těžkou aortální stenózu (AVA 0,7 cm², meanPG 48 mmHg), ale tvrdí, že nemá žádné potíže. Jakým vyšetřením objektivizujete jeho asymptomatičnost a indikaci k operaci?",
            answer: "Bicyklová ergometrie / zátěžový test. Pokud se při zátěži objeví symptomy (dušnost, bolest na hrudi, závrať) nebo pokles krevního tlaku pod výchozí hodnotu, pacient je považován za symptomatického a je indikován k náhradě chlopně (Třída I).",
            pearl: "Zátěžový test je u již symptomatické těžké AS přísně kontraindikován!"
          }
        ],
        quiz: {
          title: "Kvíz: Akutní aortální regurgitace",
          prompt: "U pacienta s akutní těžkou aortální regurgitací (např. při disekci aorty typu A nebo infekční endokarditidě) je přísně KONTRAINDIKOVÁNO použití:",
          options: [
            { text: "A) Intraaortální balonkové kontrapulzace (IABP)", isCorrect: true },
            { text: "B) Vazodilatancií (Nitroprusid)", isCorrect: false },
            { text: "C) Chirurgické náhrady chlopně", isCorrect: false },
            { text: "D) Diuretik při plicním městnání", isCorrect: false }
          ],
          explanation: "Intraaortální balonková kontrapulpace (IABP) se nafukuje v diastole. Při nedomykavosti aortální chlopně by nafouknutí balonku v diastole dramaticky zhoršilo regurgitační proud zpět do levé komory a způsobilo fatální přetížení LK a plicní edém."
        }
      },
      breakdown: {
        classThree: [
          "Použití NOAC u pacientů s mechanickou srdeční chlopní (vedlo k vyššímu počtu trombóz a krvácení než Warfarin).",
          "Provádění zátěžového testu (ergometrie) u pacientů se známou symptomatickou těžkou aortální stenózou.",
          "Použití intraaortální balonkové kontrapulzace (IABP) u těžké aortální regurgitace."
        ],
        mustKnow: [
          "Těžká AS = AVA &lt; 1,0 cm², mean gradient ≥ 40 mmHg, Vmax ≥ 4,0 m/s.",
          "TAVI je standardem u pacientů ≥ 75 let, SAVR u mladších &lt; 75 let.",
          "Při mechanické chlopni je jediným schváleným lékem Warfarin s pravidelnou kontrolou INR."
        ]
      }
    },
    {
      id: "kmp",
      number: 8,
      title: "Kardiomyopatie (KMP)",
      shortDesc: "Dilatační (DCMP), Hypertrofická obstrukční/neobstrukční (HOCM/HCM), Restrikční (RCMP), ARVD a Takotsubo kardiomyopatie.",
      icon: "💔",
      badge: "Myokardiální nemoci",
      badgeColor: "purple",
      theory: {
        banner: {
          tag: "Dělení kardiomyopatií",
          title: "Strukturální a funkční onemocnění srdečního svalu",
          text: "Kardiomyopatie jsou primární onemocnění myokardu neadekvátní ischemickému původu či chlopenním vadám. Dělí se na: **Hypertrofické (HCM/HOCM)**, **Dilatační (DCMP)**, **Restrikční (RCMP)**, **Arytmogenní kardiomyopatie pravé komory (ARVC/ARVD)** a specifické syndromy jako **Takotsubo (stresová KMP)**."
        },
        sections: [
          {
            title: "Hypertrofická kardiomyopatie (HCM / HOCM)",
            color: "purple",
            content: `
              <div class="p-4 bg-slate-900 border border-slate-700 rounded-xl text-xs space-y-2 text-slate-300">
                <p>Nejčastější genetické srdeční onemocnění (autozomálně dominantní mutace sarkomerických proteinů - MYH7, MYBPC3). Typická je **asymetrická hypertrofie mezikomorového septa (tloušťka stěny ≥ 15 mm)** bez jiné zjevné příčiny.</p>
                <div class="p-3 bg-purple-950/40 border border-purple-500/30 rounded-lg">
                  <span class="font-bold text-purple-400">SAM fenomén (Systolic Anterior Motion):</span>
                  <p class="mt-1">Přední cíp mitrální chlopně je v systole nasáván Venturiho efektem do výtokového traktu LK (LVOT) -> dynamická obstrukce výtoku (HOCM) a sekundární mitrální regurgitace.</p>
                </div>
                <p><strong>Léčba HOCM:</strong> Neselektivní betablokátory, Verapamil, nebo nový selektivní inhibitor srdečního myozinu <strong>Mavacamten</strong>. Chirurgická myektomie či alkoholová ablace septa při refrakterní obstrukci.</p>
              </div>
            `
          },
          {
            title: "Takotsubo kardiomyopatie (Syndrom zlomeného srdce)",
            color: "rose",
            content: `
              <div class="p-3 bg-slate-900 border border-slate-700 rounded-xl text-xs text-slate-300 space-y-1.5">
                <p>Přechodná dysfunkce myokardu spuštěná extrémním emočním či fyzickým stresem a masivním vyplavením katecholaminů. Nejčastěji u postmenopauzálních žen.</p>
                <p><strong>Klinika:</strong> Imituje akutní STEMI (bolest na hrudi, ST elevace, pozitivní troponin). Na SKG jsou věnčité tepny <strong>bez obstrukce</strong>. Typický echokardiografický obraz: <strong>apikální balonování</strong> (akineze hrotu LK s hyperkinezí baze).</p>
                <p class="text-emerald-400 font-medium">Prognóza je obvykle příznivá, funkce LK se během týdnů až měsíců plně upraví.</p>
              </div>
            `
          }
        ]
      },
      recall: {
        scenarios: [
          {
            id: "kmp-r1",
            title: "Otázka 1: Léky kontraindikované u HOCM",
            question: "Které běžné kardiologické léky jsou přísně kontraindikovány u pacientů s hypertrofickou obstrukční kardiomyopatií (HOCM), protože zhoršují obstrukci výtokového traktu levé komory (LVOT gradient)?",
            answer: "1. Pozitivně inotropní látky (Digoxin, katecholaminy). 2. Nitráty a vazodilatancia (snižují plnění LK a preload, což zhorší nasávání cípu chlopně do LVOT). 3. Dihydropyridinové blokátory kalciových kanálů a vysoké dávky diuretik.",
            pearl: "U HOCM chceme komoru 'plnou a klidnou' – proto jsou lékem volby betablokátory a Verapamil."
          },
          {
            id: "kmp-r2",
            title: "Otázka 2: Arytmogenní kardiomyopatie (ARVD/ARVC)",
            question: "Mladý sportovec kolabuje při fotbalovém zápase. EKG ukazuje negativní T vlny ve V1–V3 a ve svodu V1 je na konci QRS přítomna drobná vlna epsilon. Na jaké onemocnění pomyslíte a jaká je jeho patofyziologie?",
            answer: "Arytmogenní kardiomyopatie pravé komory (ARVC/ARVD). Dochází k postupné fibroticko-tukové degeneraci myokardu pravé komory s vysokým rizikem maligních komorových arytmií a náhlé srdeční smrti u mladých sportovců.",
            pearl: "Vlna Epsilon ve svodech V1-V2 je patognomickým EKG znakem ARVD."
          }
        ],
        quiz: {
          title: "Kvíz: Restrikční kardiomyopatie a Amyloidóza",
          prompt: "U 72letého pacienta se srdečním selháním s nízkou voltáží na EKG, ale masivně ztluštělými stěnami levé komory na ECHO (tzv. zářící 'sparkling' myokard) je nejčastější příčinou:",
          options: [
            { text: "A) Srdeční amyloidóza (AL nebo transthyretinová ATTR amyloidóza)", isCorrect: true },
            { text: "B) Ischemická choroba srdeční", isCorrect: false },
            { text: "C) Sarkoidóza", isCorrect: false },
            { text: "D) Dilatační kardiomyopatie", isCorrect: false }
          ],
          explanation: "Kombinace nízké voltáže QRS komplexů na EKG a současně těžké hypertrofie stěn LK na echokardiografii je klasickým diskrepantním znakem srdeční amyloidózy (depozice amyloidových fibril). Diagnostika zahrnuje scintigrafii skeletu (99mTc-DPD) a stanovení volných lehkých řetězců."
        }
      },
      breakdown: {
        classThree: [
          "Podávání Digoxinu, Nitrátů a dihydropyridinových BKK u hypertrofické obstrukční kardiomyopatie (HOCM).",
          "Doporučování intenzivního vrcholového a kontaktního sportu pacientům s HCM, ARVC nebo prokázaným laminovým defektem (LMNA mutace).",
          "Podávání nesteroidních antiflogistik a vysokých dávek vazodilatancií u těžké restrikční kardiomyopatie."
        ],
        mustKnow: [
          "HCM: Tloušťka stěny LK ≥ 15 mm bez jiné příčiny. Asymetrická hypertrofie septa, SAM fenomén.",
          "Léčba HOCM: Betablokátory, Mavacamten, myektomie. Digoxin a nitráty jsou ZAKÁZÁNY.",
          "Takotsubo: Apikální balonování, čisté koronárky, obvykle reverzibilní po odeznění stresu."
        ]
      }
    },
    {
      id: "zanety",
      number: 9,
      title: "Zánětlivá a perikardiální onemocnění",
      shortDesc: "Infekční endokarditida (Duke kritéria), Myokarditida, Akutní perikarditida, Srdeční tamponáda a Konstriktivní perikarditida.",
      icon: "🔥",
      badge: "Infekce & Perikard",
      badgeColor: "rose",
      theory: {
        banner: {
          tag: "Život ohrožující stavy",
          title: "Infekční endokarditida a Srdeční tamponáda",
          text: "Infekční endokarditida (IE) je septické onemocnění s vysokou mortalitou (až 20–30 %). Diagnostika staví na modifikovaných **Duke kritériích** (hemokultury + TEECHO). Srdeční tamponáda je mechanická obstrukce plnění srdce tekutinou v perikardu s klasickou **Beckovou triádou**."
        },
        sections: [
          {
            title: "Infekční endokarditida (Duke kritéria & Terapie)",
            color: "rose",
            content: `
              <div class="p-4 bg-slate-900 border border-slate-700 rounded-xl text-xs space-y-2 text-slate-300">
                <span class="font-bold text-rose-400">Hlavní Dukeova kritéria:</span>
                <ul class="list-disc ml-4 space-y-1">
                  <li><strong>Pozitivní hemokultury:</strong> Typické mikroorganismy (S. aureus, Viridující streptokoky, Enterokoky, HACEK) ze 2 samostatných odběrů.</li>
                  <li><strong>Průkaz postižení endokardu:</strong> Vegetace, absces, nová dehiscence chlopenní protézy na TEE/TTE nebo nová chlopenní regurgitace.</li>
                </ul>
                <p class="mt-2"><strong>ATB léčba:</strong> Dlouhodobá baktericidní i.v. terapie (4–6 týdnů). Empiricky např. Ampicilin + Oxacilin/Gentamicin nebo Vankomycin + Gentamicin u nozokomiálních/protetických infekcí.</p>
              </div>
            `
          },
          {
            title: "Akutní perikarditida vs. Srdeční tamponáda",
            color: "cyan",
            content: `
              <div class="grid sm:grid-cols-2 gap-3 text-xs">
                <div class="p-3 bg-slate-900 border border-slate-700 rounded-xl">
                  <span class="font-bold text-cyan-400">Akutní perikarditida</span>
                  <p class="text-slate-300 mt-1">Ostrá pleuritická bolest na hrudi, která <strong>polevuje v předklonu</strong> a zhoršuje se vleže a při nádechu. EKG: <strong>konkávní difuzní ST elevace</strong> s depresemi úseku PR.</p>
                  <p class="text-slate-400 mt-1"><strong>Léčba:</strong> Vysoké dávky NSAID (Ibuprofen 600 mg á 8h / Aspirin) + <strong>Kolchicin 0,5 mg denně na 3 měsíce</strong> (prevence recidivy!).</p>
                </div>
                <div class="p-3 bg-slate-900 border border-rose-500/40 rounded-xl">
                  <span class="font-bold text-rose-400">Srdeční tamponáda</span>
                  <p class="text-slate-300 mt-1"><strong>Beckova triáda:</strong> 1. Hypotenze, 2. Zvýšená náplň krčních žil, 3. Oslabené srdeční ozvy (tiché srdce). Přítomen <strong>pulsus paradoxus</strong> (pokles TKs o &gt; 10 mmHg při nádechu).</p>
                  <p class="text-emerald-400 font-bold mt-1">Léčba: Urgentní perikardiocentéza pod UZ kontrolou!</p>
                </div>
              </div>
            `
          }
        ]
      },
      recall: {
        scenarios: [
          {
            id: "zan-r1",
            title: "Otázka 1: Profylaxe infekční endokarditidy",
            question: "Kteří pacienti a při jakých výkonech mají dnes podle guidelines indikovanou antibiotickou profylaxi infekční endokarditidy?",
            answer: "Pouze pacienti s VYSOKÝM rizikem: 1. Pacienti s chlopenní protézou (SAVR/TAVI) nebo po plastice chlopně s cizím materiálem. 2. Pacienti s prodělanou epizodou IE v minulosti. 3. Pacienti s vrozenou cyanotickou srdeční vadou. Profylaxe (Amoxicilin 2g p.o. 30–60 min před výkonem) se podává POUZE při stomatologických výkonech narušujících gingivu či periapikální oblast zubu.",
            pearl: "Při gastroskopii, kolonoskopii či gynekologických zákrocích se rutinní profylaxe IE již nepodává."
          },
          {
            id: "zan-r2",
            title: "Otázka 2: EKG diferenciální diagnóza perikarditidy a STEMI",
            question: "Jak bezpečně odlišíte na EKG akutní perikarditidu od akutního STEMI?",
            answer: "Perikarditida má difuzní konkávní ST elevace napříč svody (I, II, aVF, V2-V6) s typickou depresí PQ/PR úseku a bez zrcadlových ST depresí (vyjma svodu aVR). STEMI má lokalizované konvexní ST elevace v anatomickém povodí koronární tepny s typickými recipročními (zrcadlovými) depresemi ST a postupným vývojem Q kmitu.",
            pearl: "Při perikarditidě se nikdy nevytváří patologický kmit Q."
          }
        ],
        quiz: {
          title: "Kvíz: Léčba perikarditidy",
          prompt: "Který lék je standardně přidáván k NSAID u první epizody akutní perikarditidy, protože prokazatelně snižuje riziko recidivy o více než 50 %?",
          options: [
            { text: "A) Kolchicin (0,5 mg 1–2× denně po dobu 3 měsíců)", isCorrect: true },
            { text: "B) Systémové kortikoidy ve vysoké dávce (Prednison 1 mg/kg)", isCorrect: false },
            { text: "C) Warfarin", isCorrect: false },
            { text: "D) Amiodaron", isCorrect: false }
          ],
          explanation: "Kolchicin je lékem 1. volby v kombinaci s NSAID/Aspirinem. Kortikoidy jsou u neinfekční perikarditidy vyhrazeny až jako druhá volba při nesnášenlivosti NSAID, protože samy o sobě zvyšují riziko chronické recidivy perikarditidy."
        }
      },
      breakdown: {
        classThree: [
          "Rutinní podávání kortikoidů jako léčba 1. volby u akutní perikarditidy (zvyšují riziko relapsu).",
          "Podávání antikoagulancií u akutní perikarditidy bez jiné jasné indikace (riziko hemoperikardu a tamponády).",
          "Podávání profylaxe endokarditidy u nízkorizikových pacientů nebo při běžných nekrvavých zákrocích."
        ],
        mustKnow: [
          "Endokarditida: Odběr alespoň 3 párů hemokultur před nasazením ATB! TEECHO k průkazu vegetací.",
          "Tamponáda: Beckova triáda (hypotenze, tiché srdce, náplň krčních žil) + pulsus paradoxus -> perikardiocentéza.",
          "Perikarditida: Bolest v předklonu ustupuje, konkávní ST elevace + PR deprese -> Ibuprofen + Kolchicin."
        ]
      }
    },
    {
      id: "pe",
      number: 10,
      title: "Plicní embolie & Plicní hypertenze",
      shortDesc: "Akutní plicní embolie (ESC stratifikace rizika, sPESI, systémová trombolýza, NOAC), cor pulmonale a 5 skupin plicní hypertenze.",
      icon: "🫁",
      badge: "Plicní cirkulace",
      badgeColor: "cyan",
      theory: {
        banner: {
          tag: "ESC Guidelines pro PE",
          title: "Stratifikace rizika plicní embolie a indikace trombolýzy",
          text: "Plicní embolie se stratifikuje podle přítomnosti **hemodynamické nestability (šok, těžká hypotenze)** na: **Vysoké riziko (High Risk)** vs. **Střední (Intermediate)** vs. **Nízké riziko (Low Risk)**. Pouze u vysokého rizika je indikována okamžitá systémová trombolýza!"
        },
        sections: [
          {
            title: "Riziková stratifikace plicní embolie",
            color: "cyan",
            content: `
              <div class="space-y-3 text-xs">
                <div class="p-3 bg-rose-950/40 border border-rose-500/30 rounded-xl">
                  <div class="font-bold text-rose-400">🚨 Vysoké riziko (High Risk / Masivní PE)</div>
                  <p class="text-slate-300 mt-0.5">Přítomnost kardiogenního šoku nebo perzistující hypotenze (TKs &lt; 90 mmHg nebo pokles o ≥ 40 mmHg po dobu &gt; 15 min). <strong>Léčba: Okamžitá systémová trombolýza (Altepláza 100 mg i.v.)</strong> + nefrakcionovaný heparin (UFH). CT angiografie pouze pokud je pacient schopen transportu!</p>
                </div>
                <div class="p-3 bg-amber-950/40 border border-amber-500/30 rounded-xl">
                  <div class="font-bold text-amber-400">Intermediate-High riziko:</div>
                  <p class="text-slate-300 mt-0.5">Normální TK, ale přítomna dysfunkce pravé komory na ECHO/CT A ZÁROVEŇ pozitivní troponin. <strong>Léčba: Antikoagulace (LMWH/NOAC)</strong> + monitorace na JIP (při zhoršení záchranná trombolýza).</p>
                </div>
                <div class="p-3 bg-emerald-950/40 border border-emerald-500/30 rounded-xl">
                  <div class="font-bold text-emerald-400">Nízké riziko (Low Risk):</div>
                  <p class="text-slate-300 mt-0.5">sPESI = 0 bodů, bez dysfunkce PK a negativní troponin. Lze zvážit časné propuštění a domácí léčbu NOAC (Rivaroxaban / Apixaban).</p>
                </div>
              </div>
            `
          },
          {
            title: "Plicní hypertenze (Definice a 5 klinických skupin)",
            color: "blue",
            content: `
              <p class="text-xs text-slate-300 mb-2"><strong>Hemodynamická definice:</strong> Střední tlak v plicnici (mPAP) <strong>&gt; 20 mmHg</strong> v klidu při pravostranné srdeční katetrizaci.</p>
              <div class="grid sm:grid-cols-2 gap-2 text-xs text-slate-300">
                <div class="p-2.5 bg-slate-900 border border-slate-700 rounded-lg"><strong>Skupina 1:</strong> Plicní arteriální hypertenze (PAH - idiopatická, hereditární, léky).</div>
                <div class="p-2.5 bg-slate-900 border border-slate-700 rounded-lg"><strong>Skupina 2:</strong> Plicní hypertenze při onemocnění levého srdce (nejčastější! HFrEF, HFpEF, chlopenní vady).</div>
                <div class="p-2.5 bg-slate-900 border border-slate-700 rounded-lg"><strong>Skupina 3:</strong> Plicní hypertenze při plicních onemocněních a hypoxii (CHOPN, fibrózy).</div>
                <div class="p-2.5 bg-slate-900 border border-slate-700 rounded-lg"><strong>Skupina 4:</strong> Chronická tromboembolická plicní hypertenze (CTEPH) - potenciálně kurabilní endarterektomií!</div>
              </div>
            `
          }
        ]
      },
      recall: {
        scenarios: [
          {
            id: "pe-r1",
            title: "Otázka 1: EKG známky přetížení pravé komory",
            question: "Jaké jsou typické EKG známky akutního cor pulmonale / masivní plicní embolie?",
            answer: "1. Sinusová tachykardie (nejčastější!). 2. Klasický vzorec S1Q3T3 (hluboké S ve svodu I, kmit Q ve svodu III, negativní T ve svodu III). 3. Nový inkompletní nebo kompletní blok pravého raménka (RBBB). 4. Inverze vln T v pravostranných prekordiálních svodech V1–V4. 5. P-pulmonale.",
            pearl: "Normální EKG však plicní embolii nikdy nevylučuje!"
          },
          {
            id: "pe-r2",
            title: "Otázka 2: Délka antikoagulační léčby po PE",
            question: "Jak dlouho má být léčen pacient po první atace plicní embolie, která byla vyvolána velkým přechodným rizikovým faktorem (např. polytrauma a ortopedická operace) vs. pacient s nevyvolanou (idiopatickou) embolií?",
            answer: "Vyvolaná embolie známým přechodným faktorem: terapie trvá minimálně 3 měsíce (a po odstranění faktoru lze ukončit). Nevyvolaná (idiopatická) embolie nebo recidiva: doporučena dlouhodobá až celoživotní antikoagulace (pokud pacient nemá vysoké riziko krvácení).",
            pearl: "Léky 1. volby pro perorální léčbu PE jsou NOAC (Apixaban, Rivaroxaban, Edoxaban, Dabigatran)."
          }
        ],
        quiz: {
          title: "Kvíz: D-dimery v diagnostice PE",
          prompt: "U kterého z následujících pacientů má stanovení hladiny D-dimerů nejvyšší diagnostickou hodnotu pro bezpečné vyloučení plicní embolie?",
          options: [
            { text: "A) U pacienta s nízkou nebo střední klinickou pravděpodobností dle Wellsova/Ženevského skóre", isCorrect: true },
            { text: "B) U pacienta s vysokou klinickou pravděpodobností a šokem", isCorrect: false },
            { text: "C) U polymorbidního onkologického pacienta po těžkém traumatu", isCorrect: false },
            { text: "D) U těhotné pacientky ve 3. trimestru", isCorrect: false }
          ],
          explanation: "D-dimery mají vynikající senzitivitu a negativní prediktivní hodnotu (> 99 %) u pacientů s NÍZKOU nebo STŘEDNÍ pravděpodobností. U vysoké pravděpodobnosti se D-dimery nenabírají a jde se rovnou na CT angiografii."
        }
      },
      breakdown: {
        classThree: [
          "Podávání systémové trombolýzy u hemodynamicky stabilních pacientů s PE s nízkým rizikem.",
          "Spoléhání se na negativitu D-dimerů u pacienta s vysokou klinickou pravděpodobností PE (nutno provést CT plicní angiografii).",
          "Podávání specifické léčby plicní arteriální hypertenze (prostacykliny, ERA) u pacientů s plicní hypertenzí 2. skupiny (při onemocnění levého srdce - zhorší plicní edém)."
        ],
        mustKnow: [
          "Vysoké riziko PE (šok/hypotenze) = okamžitá systémová trombolýza (Altepláza 100 mg i.v.).",
          "Léčba stabilní PE: NOAC (Apixaban, Rivaroxaban bez nutnosti LMWH přemostění; Dabigatran/Edoxaban po 5 dnech LMWH).",
          "Plicní hypertenze: mPAP &gt; 20 mmHg. Nejčastější je 2. skupina (levé srdce)."
        ]
      }
    },
    {
      id: "ccs",
      number: 11,
      title: "Chronické koronární syndromy (CCS)",
      shortDesc: "Stabilní angina pectoris, předtestová pravděpodobnost (PTP), CT koronarografie vs. funkční zátěžové testy, antianginózní léčba.",
      icon: "🫀",
      badge: "Ischemická choroba",
      badgeColor: "amber",
      theory: {
        banner: {
          tag: "Moderní diagnostika ICHS",
          title: "CT koronarografie vs. Zátěžové testy",
          text: "ESC klade důraz na neinvazivní anatomické i funkční testování. **CT koronarografie (CCTA)** je preferovaným testem u pacientů s nízkou až střední předtestovou pravděpodobností (PTP) k vyloučení stenóz věnčitých tepen díky své vysoké negativní prediktivní hodnotě."
        },
        sections: [
          {
            title: "Diagnostický algoritmus u podezření na CCS",
            color: "amber",
            content: `
              <div class="space-y-2 text-xs text-slate-300">
                <p>1. Zhodnocení symptomů (typická vs. atypická AP vs. nekardiální bolest) a stanovení předtestové pravděpodobnosti (PTP) na základě věku, pohlaví a charakteru bolesti.</p>
                <div class="grid sm:grid-cols-2 gap-3 my-2">
                  <div class="p-3 bg-slate-900 border border-slate-700 rounded-xl">
                    <span class="font-bold text-amber-400">Anatomické vyšetření (CT koronarografie)</span>
                    <p class="mt-1">Lék volby u nižší/střední PTP bez známé ICHS, dobré přehlednosti a absence těžkých kalcifikací.</p>
                  </div>
                  <div class="p-3 bg-slate-900 border border-slate-700 rounded-xl">
                    <span class="font-bold text-amber-400">Funkční ischemické testy (Zátěžové ECHO, CMR, SPECT)</span>
                    <p class="mt-1">Preferovány u vyšší PTP, u pacientů se známou ICHS nebo po předchozí revaskularizaci (stenty, CABG).</p>
                  </div>
                </div>
              </div>
            `
          },
          {
            title: "Antianginózní a prognostická farmakoterapie",
            color: "emerald",
            content: `
              <div class="grid sm:grid-cols-2 gap-3 text-xs">
                <div class="p-3 bg-slate-900 border border-slate-700 rounded-xl">
                  <span class="font-bold text-emerald-400">Prognostická léčba (snižuje KV riziko):</span>
                  <ul class="list-disc ml-4 mt-1 text-slate-300 space-y-1">
                    <li><strong>Aspirin 100 mg/d</strong> (nebo Clopidogrel při intoleranci).</li>
                    <li><strong>Statin vysoké intenzity</strong> (cíl LDL &lt; 1,4 mmol/l) ± Ezetimib.</li>
                    <li><strong>ACE inhibitor / ARB</strong> (při hypertenzi, DM, EF &lt; 40 %).</li>
                  </ul>
                </div>
                <div class="p-3 bg-slate-900 border border-slate-700 rounded-xl">
                  <span class="font-bold text-emerald-400">Symptomatická antianginózní léčba:</span>
                  <ul class="list-disc ml-4 mt-1 text-slate-300 space-y-1">
                    <li><strong>1. volba:</strong> Betablokátory a/nebo blokátory kalciových kanálů (BKK).</li>
                    <li><strong>2. volba:</strong> Dlouhodobě působící nitráty, Ranolazin, Ivabradin, Trimetazidin.</li>
                    <li><strong>Akutní úleva:</strong> Sublingvální nitroglycerin (sprej/tablety).</li>
                  </ul>
                </div>
              </div>
            `
          }
        ]
      },
      recall: {
        scenarios: [
          {
            id: "ccs-r1",
            title: "Otázka 1: 3 znaky typické anginy pectoris",
            question: "Která 3 klasická kritéria definují typickou anginu pectoris?",
            answer: "1. Retrosternální tlaková/pálivá bolest či nepohodlí charakteristické kvality a trvání. 2. Vyvolaná fyzickou námahou nebo emočním stresem. 3. Ustoupí v klidu nebo po podání sublingválního nitroglycerinu během několika minut (do 5 min). (Atypická AP splňuje 2 z těchto 3 kritérií).",
            pearl: "Pokud bolest píchá u jednoho bodu a zhoršuje se polohou těla či pohmatem, jedná se téměř jistě o nekardiální (muskuloskeletální) původ."
          },
          {
            id: "ccs-r2",
            title: "Otázka 2: Ivabradin – mechanismus a indikace",
            question: "Jaký je mechanismus účinku Ivabradinu a jaká je podmínka pro jeho účinnost u pacienta s anginou pectoris?",
            answer: "Ivabradin selektivně blokuje If kanály v sinoatriálním (SA) uzlu, čímž snižuje tepovou frekvenci bez ovlivnění kontraktility myokardu a krevního tlaku. Podmínkou účinnosti je přítomnost sinusového rytmu (u fibrilace síní je neúčinný) a klidová TF ≥ 70/min.",
            pearl: "Ivabradin je ideální u pacientů s kontraindikací betablokátorů (např. těžké astma) nebo v kombinaci s BB při nedostatečné kontrole tepu."
          }
        ],
        quiz: {
          title: "Kvíz: Cíle léčby LDL cholesterolu u CCS",
          prompt: "U pacienta s prokázanou stabilní ICHS (velmi vysoké KV riziko) je podle ESC guidelines cílová hodnota LDL cholesterolu:",
          options: [
            { text: "A) LDL < 1,4 mmol/l a současně pokles o ≥ 50 % oproti výchozí hodnotě", isCorrect: true },
            { text: "B) LDL < 2,6 mmol/l", isCorrect: false },
            { text: "C) LDL < 3,0 mmol/l", isCorrect: false },
            { text: "D) LDL < 1,8 mmol/l bez nutnosti procentuálního poklesu", isCorrect: false }
          ],
          explanation: "U všech pacientů s manifestním kardiovaskulárním onemocněním (velmi vysoké riziko) je cílem pokles LDL-C o alespoň 50 % z výchozí hodnoty a dosažení absolutní hodnoty < 1,4 mmol/l (< 55 mg/dl)."
        }
      },
      breakdown: {
        classThree: [
          "Provádění CT koronarografie u pacientů s těžkou arytmií, vysokou nekontrolovanou TF nebo masivními kalcifikacemi (nízká výtěžnost a artefakty).",
          "Podávání Ivabradinu pacientům bez sinusového rytmu (např. u fibrilace síní).",
          "Podávání nitrátů současně s inhibitory fosfodiesterázy-5 (Sildenafil, Tadalafil) do 24–48 hodin (hrozí fatální refrakterní hypotenze)."
        ],
        mustKnow: [
          "Diagnostika: CT koronarografie vylučuje anatomickou stenózu; zátěžové testy (ECHO/CMR/SPECT) prokazují ischémii.",
          "Prognostická léčba: Statin (LDL &lt; 1,4) + Aspirin 100 mg/d + ACEi/ARB.",
          "Revaskularizace (PCI vs. CABG): Zlepšuje prognózu u postižení kmene levé věnčité tepny (LM), proximální RIA nebo třítepenného postižení s dysfunkcí LK."
        ]
      }
    },
    {
      id: "ekg",
      number: 12,
      title: "EKG diagnostický kompas v kardiologii",
      shortDesc: "Lokalizace infarktů, zrcadlové změny, raménkové bloky, iontové dysbalance (hyperkalémie, hypokalémie, kalcémie) a syndrom dlouhého QT.",
      icon: "📈",
      badge: "EKG & Diagnostika",
      badgeColor: "emerald",
      theory: {
        banner: {
          tag: "Rychlý přehled EKG",
          title: "Topografická anatomie infarktů na 12svodovém EKG",
          text: "Podle svodů s elevacemi ST spolehlivě lokalizujeme postiženou koronární tepnu: **Spodní (diafragmální) stěna (II, III, aVF)** -> ACD / RCx. **Přední stěna a septum (V1–V4)** -> RIA. **Laterální stěna (I, aVL, V5–V6)** -> RCx / RIA. **Zadní stěna (deprese V1–V3)** -> ACD / RCx."
        },
        sections: [
          {
            title: "Přehled EKG lokalizací infarktu myokardu",
            color: "emerald",
            content: `
              <div class="grid sm:grid-cols-2 gap-3 text-xs text-slate-300">
                <div class="p-3 bg-slate-900 border border-slate-700 rounded-xl">
                  <span class="font-bold text-rose-400">Spodní stěna (II, III, aVF)</span>
                  <p class="mt-1">Povodí arteria coronaria dextra (ACD) v 85 % nebo RCx. Často provázeno bradykardií a AV blokádami. Zrcadlové ST deprese ve svodu aVL!</p>
                </div>
                <div class="p-3 bg-slate-900 border border-slate-700 rounded-xl">
                  <span class="font-bold text-rose-400">Přední stěna (V1–V4) / Anteroseptální</span>
                  <p class="mt-1">Povodí ramus interventricularis anterior (RIA/LAD). Velký rozsah ohroženého myokardu levé komory, riziko kardiogenního šoku a ruptury mezikomorového septa.</p>
                </div>
                <div class="p-3 bg-slate-900 border border-slate-700 rounded-xl">
                  <span class="font-bold text-rose-400">Laterální stěna (I, aVL, V5–V6)</span>
                  <p class="mt-1">Povodí ramus circumflexus (RCx) nebo diagonálních větví RIA. Zrcadlové ST deprese ve spodních svodech (III, aVF).</p>
                </div>
                <div class="p-3 bg-slate-900 border border-slate-700 rounded-xl">
                  <span class="font-bold text-rose-400">Zadní (posterio-bazální) stěna</span>
                  <p class="mt-1">Horizontální ST deprese a vysoké štíhlé R ve V1–V3. Nutno dotočit zadní svody V7–V9 (zde ST elevace ≥ 0,5 mm potvrzují STEMI zadní stěny)!</p>
                </div>
              </div>
            `
          },
          {
            title: "Iontové dysbalance na EKG",
            color: "amber",
            content: `
              <div class="grid sm:grid-cols-2 gap-3 text-xs text-slate-300">
                <div class="p-3 bg-slate-900 border border-slate-700 rounded-xl">
                  <span class="font-bold text-amber-400">Hyperkalémie (K+ &gt; 5,5 mmol/l)</span>
                  <p class="mt-1">1. Vysoké, hrotnaté, symetrické vlny T (tzv. stanové T). 2. Oploštění a vymizení vlny P, prodloužení PQ. 3. Široký bizardní QRS komplex (sinusoidální křivka -> hrozí asystolie či komorová fibrilace). <strong>Léčba: Calcium gluconicum i.v. k membránové stabilizaci!</strong></p>
                </div>
                <div class="p-3 bg-slate-900 border border-slate-700 rounded-xl">
                  <span class="font-bold text-cyan-400">Hypokalémie (K+ &lt; 3,5 mmol/l)</span>
                  <p class="mt-1">Oploštění či inverze vln T, deprese úseku ST, vznik prominentní <strong>vlny U</strong> a zdánlivé prodloužení intervalu QT (QU interval). Vysoké riziko komorových arytmií!</p>
                </div>
              </div>
            `
          }
        ]
      },
      recall: {
        scenarios: [
          {
            id: "ekg-r1",
            title: "Otázka 1: Infarkt pravé komory",
            question: "U pacienta s akutním STEMI spodní stěny (elevace ve II, III, aVF) naměříte těžkou hypotenzi po podání 1 vstřiku nitroglycerinu pod jazyk. Na co musíte okamžitě pomyslet, jaké EKG svody dotočit a jaká je léčba?",
            answer: "Pomyslet na současný infarkt pravé komory (cca 30–40 % spodních infarktů). Dotočit pravostranné prekordiální svody V3R–V6R (ST elevace ≥ 0,5–1,0 mm ve V4R potvrzuje infarkt PK). Léčba: Okamžitá volumoterapie (i.v. krystaloidy) k udržení plnícího tlaku PK! Nitráty a diuretika jsou přísně zakázány.",
            pearl: "Pravá komora je závislá na preloadu – vazodilatancia vedou k prudkému kolapsu minutového výdeje."
          },
          {
            id: "ekg-r2",
            title: "Otázka 2: Sgarbossina kritéria",
            question: "K čemu slouží Sgarbossina (nebo modifikovaná Smith-Sgarbossina) kritéria na EKG?",
            answer: "Slouží k diagnostice akutního STEMI u pacientů s přítomnou blokádou levého raménka Tawarova (LBBB) nebo komorovou stimulací kardiostimulátorem (VVI), které za normálních okolností zakrývají klasické ischemické ST elevace.",
            pearl: "Klíčové je kritérium konkordantní ST elevace ≥ 1 mm ve svodech s pozitivním QRS."
          }
        ],
        quiz: {
          title: "Kvíz: Hyperkalémie a Calcium gluconicum",
          prompt: "Pacient s anurií má na EKG stanové vysoké vlny T a rozšířené QRS komplexy (K+ 7,8 mmol/l). Co je nejurgentnějším krokem k zabránění bezprostřední zástavy srdce?",
          options: [
            { text: "A) Aplikace Calcium gluconicum 10% (nebo Calcium chloratum) i.v. pro okamžitou stabilizaci myokardiální membrány", isCorrect: true },
            { text: "B) Okamžité podání perorálního iontoměniče (Resonium)", isCorrect: false },
            { text: "C) Inhalace Salbutamolu", isCorrect: false },
            { text: "D) Infuze inzulinu s glukózou", isCorrect: false }
          ],
          explanation: "Kalcium i.v. nesnižuje hladinu draslíku v séru, ale antagonizuje toxický účinek hyperkalémie na membránový potenciál kardiomyocytů a během 1–3 minut stabilizuje myokard před vznikem komorové fibrilace/asystolie. Teprve poté podáváme inzulin s glukózou či dialyzujeme."
        }
      },
      breakdown: {
        classThree: [
          "Podávání nitrátů a diuretik u STEMI spodní stěny se současným infarktem pravé komory (V4R elevace).",
          "Podávání vápníku i.v. pacientům s intoxikací digitalisem (může vyvolat ireverzibilní srdeční zástavu v systole - stone heart).",
          "Zpoždění primární PCI u pacienta s typickou ischemickou bolestí a novým LBBB."
        ],
        mustKnow: [
          "Spodní stěna: II, III, aVF (ACD). Přední stěna: V1–V4 (RIA). Laterální: I, aVL, V5–V6 (RCx).",
          "Zadní infarkt: Zrcadlové deprese ve V1–V3 -> dotoč V7–V9.",
          "Infarkt pravé komory: V4R elevace -> lékem jsou tekutiny, zákaz nitrátů!",
          "Hyperkalémie: Stanové T -> rozšíření QRS -> zástava. Okamžitě Calcium i.v.!"
        ]
      }
    }
  ],

  // 110+ Spaced Repetition karet pro komplexní opakování celého oboru kardiologie
  flashcards: [
    // --- AKS & Koronární syndromy (1-15) ---
    {
      id: "fc-1",
      moduleId: "aks",
      category: "Akutní koronární syndromy",
      question: "Jaké je časové okno pro primární PCI od stanovení diagnózy STEMI (FMC-to-wire)?",
      answer: "Do 90 minut (přímo v PCI centru do 60 minut). Pokud dojezd do PCI centra přesáhne 120 minut, je indikována okamžitá systémová fibrinolýza do 10 minut od diagnózy.",
      highYield: "FMC-to-wire < 90 min; Lýza do 10 min pokud dojezd > 120 min."
    },
    {
      id: "fc-2",
      moduleId: "aks",
      category: "Akutní koronární syndromy",
      question: "Jaký je dle ESC 2023 doporučený postup s pre-treatmentem P2Y12 u NSTE-AKS?",
      answer: "Rutinní pre-treatment P2Y12 inhibitorem před znalostí koronární anatomie se NEDOPORUČUJE (Třída III), pokud se plánuje včasná katetrizace do 24 hodin. Podává se až on-table po zobrazení tepen.",
      highYield: "NSTE-AKS: Pre-treatment P2Y12 je Třída III!"
    },
    {
      id: "fc-3",
      moduleId: "aks",
      category: "Akutní koronární syndromy",
      question: "Kterému P2Y12 inhibitoru dává ESC 2023 přednost při PCI pro AKS?",
      answer: "Prasugrelu před Ticagrelorem (na základě studie ISAR-REACT 5). Clopidogrel se volí při vysokém riziku krvácení nebo nutnosti antikoagulace.",
      highYield: "Prasugrel > Ticagrelor > Clopidogrel u AKS na PCI."
    },
    {
      id: "fc-4",
      moduleId: "aks",
      category: "Akutní koronární syndromy",
      question: "Jaká je standardní délka DAPT po AKS a kdy lze zvážit de-eskalaci na monoterapii?",
      answer: "Standardní délka je 12 měsíců. Po 3–6 měsících bez ischemické příhody lze zvážit přechod na monoterapii P2Y12 inhibitorem (vysazení aspirinu). De-eskalace v prvních 30 dnech je zakázána!",
      highYield: "Standard DAPT = 12M. V prvních 30 dnech de-eskalace zakázána."
    },
    {
      id: "fc-5",
      moduleId: "aks",
      category: "Akutní koronární syndromy",
      question: "Jaké jsou indikace k okamžité emergentní koronarografii (< 2h) u NSTE-AKS?",
      answer: "Kardiogenní šok / hemodynamická nestabilita, refrakterní bolest na hrudi vzdorující lékům, život ohrožující arytmie / KPR, akutní srdeční selhání z ischémie, dynamické změny ST-T.",
      highYield: "Very High Risk NSTE-AKS = SKG < 2h."
    },
    {
      id: "fc-6",
      moduleId: "aks",
      category: "Akutní koronární syndromy",
      question: "Kdy je u pacienta s AKS indikováno podání kyslíku?",
      answer: "Pouze při hypoxémii s periferní saturací SpO2 < 90 %. Rutinní podávání O2 u normoxických pacientů je kontraindikováno (Třída III) kvůli vazokonstrikci a oxidačnímu stresu.",
      highYield: "Kyslík jen při SpO2 < 90 %!"
    },
    {
      id: "fc-7",
      moduleId: "aks",
      category: "Akutní koronární syndromy",
      question: "Jaká je antitrombotická strategie u pacienta s fibrilací síní po PCI pro AKS?",
      answer: "Trojitá terapie (NOAC + Aspirin + Clopidogrel) po dobu hospitalizace (do 1 týdne), poté Duální terapie (NOAC + Clopidogrel) do 12 měsíců, následně samotný NOAC.",
      highYield: "TAT ≤ 1 týden -> DAT (NOAC + Clopidogrel) do 12M -> monoterapie NOAC."
    },
    {
      id: "fc-8",
      moduleId: "aks",
      category: "Akutní koronární syndromy",
      question: "Jaká je definice EKG kritérií pro STEMI v bodě J?",
      answer: "ST elevace ve 2 sousedních svodech: V2-V3: muži < 40 let ≥ 2.5 mm; muži ≥ 40 let ≥ 2.0 mm; ženy ≥ 1.5 mm. Všechny ostatní svody ≥ 1.0 mm.",
      highYield: "V2-V3 dle věku a pohlaví (1.5 - 2.5 mm), ostatní svody ≥ 1 mm."
    },
    {
      id: "fc-9",
      moduleId: "aks",
      category: "Akutní koronární syndromy",
      question: "Která větev věnčité tepny je nejčastěji postižena při infarktu spodní stěny a jaké komplikace hrozí?",
      answer: "Arteria coronaria dextra (ACD, v 85 %) nebo RCx. Komplikace: bradykardie, AV blokády (zásobení AV uzlu), infarkt pravé komory, ruptura posteromediálního papilárního svalu.",
      highYield: "Spodní IM = ACD -> AV bloky, infarkt PK, ruptura papilárního svalu."
    },
    {
      id: "fc-10",
      moduleId: "aks",
      category: "Akutní koronární syndromy",
      question: "Jaké je cílové LDL u pacienta po infarktu myokardu?",
      answer: "LDL < 1,4 mmol/l (< 55 mg/dl) a současně redukce o ≥ 50 % z výchozí hodnoty. Základem je statin vysoké intenzity (Atorvastatin 80 mg / Rosuvastatin 40 mg) ± Ezetimib.",
      highYield: "Cíl LDL po AKS: < 1,4 mmol/l a pokles o ≥ 50 %."
    },

    // --- 5. Definice IM & MINOCA (11-20) ---
    {
      id: "fc-11",
      moduleId: "midef",
      category: "Definice IM & MINOCA",
      question: "Co odlišuje infarkt myokardu od pouhého poškození myokardu (Myocardial Injury)?",
      answer: "Infarkt myokardu vyžaduje vzestup/pokles troponinu nad 99. percentil A ZÁROVEŇ alespoň jeden průkaz akutní ischémie (symptomy, nové EKG změny, nová porucha kinetiky na ECHO/CMR, intrakoronární trombus).",
      highYield: "Infarkt = Troponinová dynamika + Průkaz ischémie."
    },
    {
      id: "fc-12",
      moduleId: "midef",
      category: "Definice IM & MINOCA",
      question: "Co je podstatou Infarktu myokardu Typu 2?",
      answer: "Ischémie vzniklá nepoměrem mezi nabídkou a poptávkou kyslíku v myokardu bez akutní aterotrombózy (např. těžká sepse, anémie, tachykardie, hypotenze, vazospasmus).",
      highYield: "Typ 2 = Mismatch O2 nabídka/poptávka bez ruptury plátu."
    },
    {
      id: "fc-13",
      moduleId: "midef",
      category: "Definice IM & MINOCA",
      question: "Co znamená zkratka MINOCA a jaká jsou její 3 diagnostická kritéria?",
      answer: "Myocardial Infarction with Non-Obstructive Coronary Arteries. 1. Splněna kritéria infarktu myokardu, 2. Na SKG normální tepny či stenózy < 50 %, 3. Není jiná zjevná neischemická příčina.",
      highYield: "MINOCA = Infarkt + SKG stenózy < 50 %."
    },
    {
      id: "fc-14",
      moduleId: "midef",
      category: "Definice IM & MINOCA",
      question: "Jaké vyšetření je vyšetřením 1. volby (Třída I) k dořešení diagnózy MINOCA?",
      answer: "Magnetická rezonance srdce (CMR). Dokáže rozlišit skutečný infarkt (subendokardiální LGE), myokarditidu (subepikardiální LGE) a Takotsubo kardiomyopatii.",
      highYield: "MINOCA -> okamžitě indikovat kardio MR (CMR)!"
    },
    {
      id: "fc-15",
      moduleId: "midef",
      category: "Definice IM & MINOCA",
      question: "Jak je definován Infarkt myokardu Typu 4a a 4b?",
      answer: "Typ 4a je periprocedurální infarkt vázaný na PCI (vzestup cTn > 5× nad 99. percentil s ischémií). Typ 4b je trombóza stentu prokázaná angiograficky či autopticky.",
      highYield: "4a = periprocedurální PCI; 4b = trombóza stentu."
    },

    // --- Srdeční selhání (21-35) ---
    {
      id: "fc-16",
      moduleId: "hf",
      category: "Srdeční selhání",
      question: "Jak se v guidelines 2026 dělí srdeční selhání podle ejekční frakce?",
      answer: "Binárně na dvě kategorie: HFrEF (EF LK ≤ 40 %, snížená) a HFpEF (EF LK > 40 %, zachovaná). Šedá zóna HFmrEF byla zrušena.",
      highYield: "2026: HFrEF (EF ≤ 40 %) vs. HFpEF (EF > 40 %)."
    },
    {
      id: "fc-17",
      moduleId: "hf",
      category: "Srdeční selhání",
      question: "Které 4 lékové skupiny tvoří pilíře bazální léčby HFrEF (Foundational Medical Therapy - FMT)?",
      answer: "1. ARNI (Sacubitril/Valsartan) nebo ACEi/ARB, 2. Betablokátory (Bisoprolol, Metoprolol sukcinát, Karvedilol, Nebivolol), 3. MRA (Spironolakton/Eplerenon), 4. SGLT2 inhibitory (Dapagliflozin/Empagliflozin).",
      highYield: "FMT 4 pilíře: ARNI + BB + MRA + SGLT2i."
    },
    {
      id: "fc-18",
      moduleId: "hf",
      category: "Srdeční selhání",
      question: "Proč musí být při přechodu z ACE inhibitoru na ARNI dodržen odstup 36 hodin?",
      answer: "K zabránění masivní akumulace bradykininu, která způsobuje život ohrožující angioedém (současná blokáda degradace bradykininu ACE i neprilysinem).",
      highYield: "Přechod ACEi -> ARNI: nutný wash-out 36 hodin!"
    },
    {
      id: "fc-19",
      moduleId: "hf",
      category: "Srdeční selhání",
      question: "Která léková třída má Třídu I doporučení pro snížení mortality a hospitalizací u HFpEF (EF > 40 %)?",
      answer: "SGLT2 inhibitory (Empagliflozin nebo Dapagliflozin).",
      highYield: "HFpEF základ léčby = SGLT2 inhibitory (glifloziny)."
    },
    {
      id: "fc-20",
      moduleId: "hf",
      category: "Srdeční selhání",
      question: "Jaká jsou 4 stadia srdečního selhání dle nové klasifikace?",
      answer: "Stádium A: V riziku (At Risk - hypertenze, DM), Stádium B: Pre-heart failure (strukturální vada / BNP bez symptomů), Stádium C: Symptomatické selhání, Stádium D: Pokročilé refrakterní selhání (Advanced HF).",
      highYield: "Stadia A (riziko), B (pre-HF), C (symptomy), D (pokročilé)."
    },
    {
      id: "fc-21",
      moduleId: "hf",
      category: "Srdeční selhání",
      question: "Kdy je indikován implantabilní kardioverter-defibrilátor (ICD) v primární prevenci u HFrEF?",
      answer: "U symptomatických pacientů (NYHA II–III) s EF LK ≤ 35 % navzdory alespoň 3 měsícům optimální farmakoterapie (FMT), s předpokládaným přežitím > 1 rok.",
      highYield: "ICD primární prevence: EF ≤ 35 %, NYHA II-III po ≥ 3 měsících FMT."
    },
    {
      id: "fc-22",
      moduleId: "hf",
      category: "Srdeční selhání",
      question: "Kdy je indikována srdeční resynchronizační léčba (CRT)?",
      answer: "U pacientů s HFrEF (EF ≤ 35 %), sinusovým rytmem, trvajícími symptomy (NYHA II-IV) a širokým QRS komplexem s morfologií LBBB trvajícím ≥ 130–150 ms.",
      highYield: "CRT: EF ≤ 35 % + LBBB s QRS ≥ 130-150 ms na sinusovém rytmu."
    },
    {
      id: "fc-23",
      moduleId: "hf",
      category: "Srdeční selhání",
      question: "Jaký je hemodynamický profil nejčastějšího typu akutního srdečního selhání a jak se léčí?",
      answer: "Profil 'Warm and Wet' (teplý a vlhký - plicní městnání, dobrá perfuze, vysoký/normální TK). Léčba: i.v. kličková diuretika (furosemid) + vazodilatancia (i.v. nitráty) + oxygenoterapie/NIV.",
      highYield: "Warm & Wet = městnání bez šoku -> Furosemid i.v. + Nitráty i.v."
    },
    {
      id: "fc-24",
      moduleId: "hf",
      category: "Srdeční selhání",
      question: "Co definuje kardiogenní šok ('Cold and Wet / Cold and Dry')?",
      answer: "Těžká tkáňová hypoperfuze způsobená primárním srdečním selháním: hypotenze (TKs < 90 mmHg), oligurie (< 0,5 ml/kg/h), chladná akra, porucha vědomí, elevace laktátu > 2 mmol/l.",
      highYield: "Kardiogenní šok: TKs < 90 + hypoperfuze + laktát > 2."
    },
    {
      id: "fc-25",
      moduleId: "hf",
      category: "Srdeční selhání",
      question: "Který inotropní lék / vazopresor je lékem 1. volby u kardiogenního šoku k obnovení perfuzního tlaku?",
      answer: "Noradrenalin (vazopresor 1. volby pro zvýšení MAP) v kombinaci s Dobutaminem (inotropikum ke zvýšení srdečního výdeje).",
      highYield: "Šok: Noradrenalin + Dobutamin."
    },

    // --- Arteriální hypertenze (36-45) ---
    {
      id: "fc-26",
      moduleId: "htn",
      category: "Arteriální hypertenze",
      question: "Jaké jsou 3 kategorie krevního tlaku dle ESC 2024 Guidelines?",
      answer: "1. Normální TK (< 120/70 mmHg), 2. Zvýšený TK (Elevated BP: 120–139 / 70–89 mmHg), 3. Hypertenze (≥ 140/90 mmHg v ambulanci).",
      highYield: "Normální (<120/70), Zvýšený (120-139/70-89), Hypertenze (≥140/90)."
    },
    {
      id: "fc-27",
      moduleId: "htn",
      category: "Arteriální hypertenze",
      question: "Jaký je dle ESC 2024 cílový systolický krevní tlak pro většinu léčených dospělých?",
      answer: "120–129 mmHg (pokud je dobře tolerován).",
      highYield: "Cílový TK: 120–129 mmHg."
    },
    {
      id: "fc-28",
      moduleId: "htn",
      category: "Arteriální hypertenze",
      question: "Jaká je základní strategie zahájení farmakoterapie hypertenze dle ESC?",
      answer: "Fixní dvojkombinace v jedné tabletě (SPC - Single Pill Combination): ACEi nebo ARB + Blokátor kalciových kanálů (BKK) nebo Thiazidové/thiazid-like diuretikum.",
      highYield: "Zahájení léčby: Dvojkombinace v 1 tabletě (SPC)!"
    },
    {
      id: "fc-29",
      moduleId: "htn",
      category: "Arteriální hypertenze",
      question: "Jak je definována rezistentní hypertenze a co je lékem další volby?",
      answer: "Neuspokojivý TK (≥ 140/90 mmHg) navzdory užívání trojkombinace (ACEi/ARB + BKK + diuretikum) v maximálních tolerovaných dávkách. Lék další volby: Spironolakton (25–50 mg denně).",
      highYield: "Rezistentní HT = 3 léky vč. diuretika nezabírají -> přidej Spironolakton."
    },
    {
      id: "fc-30",
      moduleId: "htn",
      category: "Arteriální hypertenze",
      question: "Proč je kombinace ACE inhibitoru a Sartanu přísně zakázána?",
      answer: "Duální blokáda RAAS signifikantně zvyšuje výskyt hyperkalémie, hypotenze a akutního renálního selhání bez kardiovaskulárního benefitu (studie ONTARGET).",
      highYield: "ACEi + ARB = Třída III (zakázaná kombinace)!"
    },
    {
      id: "fc-31",
      moduleId: "htn",
      category: "Arteriální hypertenze",
      question: "Jaký screeningový test indikujete při podezření na primární hyperaldosteronismus (Connův syndrom)?",
      answer: "Poměr plazmatického aldosteronu k plazmatickému reninu (ARR = Aldosterone-to-Renin Ratio). Před testem nutno vysadit MRA na alespoň 4 týdny.",
      highYield: "Screening Conna: Poměr aldosteron/renin (ARR)."
    },
    {
      id: "fc-32",
      moduleId: "htn",
      category: "Arteriální hypertenze",
      question: "Jaká je triáda symptomů typická pro feochromocytom?",
      answer: "Záchvatovitá bolest hlavy, profúzní pocení a palpitace (často s bledostí a těžkým záchvatem hypertenze). Screening: plazmatické nebo močové volné metanefriny.",
      highYield: "Feochromocytom: Bolest hlavy + Pocení + Palpitace."
    },
    {
      id: "fc-33",
      moduleId: "htn",
      category: "Arteriální hypertenze",
      question: "Jaký je rozdíl v terapii hypertenzní emergence vs. hypertenzní urgence?",
      answer: "Emergence (přítomno akutní orgánové poškození - plicní edém, disekce, encefalopatie) vyžaduje okamžitou i.v. léčbu na JIP (Urapidil, Labetalol, Nitroglycerin). Urgence (bez orgánového poškození) se léčí perorálně ambulantně.",
      highYield: "Emergence = orgánové poškození -> i.v. léčba na JIP."
    },

    // --- Fibrilace síní & Arytmie (46-65) ---
    {
      id: "fc-34",
      moduleId: "afib",
      category: "Fibrilace síní",
      question: "Jaké skóre se dle ESC 2024 používá k indikaci antikoagulace u fibrilace síní?",
      answer: "CHA2DS2-VA skóre (ženské pohlaví Sc bylo zrušeno). Body: C=1, H=1, A2(věk≥75)=2, D=1, S2(CMP/TIA)=2, V=1, A(věk 65-74)=1.",
      highYield: "CHA2DS2-VA (muži i ženy: ≥ 2 body = indikace NOAC Třída I)."
    },
    {
      id: "fc-35",
      moduleId: "afib",
      category: "Fibrilace síní",
      question: "Kdy jsou NOAC u fibrilace síní kontraindikována a lékem volby je Warfarin?",
      answer: "U pacientů s mechanickou srdeční chlopní a u pacientů se středně těžkou až těžkou poreumatickou mitrální stenózou.",
      highYield: "Warfarin nutný jen pro: mechanické chlopně a mitrální stenózu."
    },
    {
      id: "fc-36",
      moduleId: "afib",
      category: "Fibrilace síní",
      question: "Jaké vyšetření je nutné před plánovanou kardioverzí u FS trvající > 48 hodin bez předchozí antikoagulace?",
      answer: "Transezofageální echokardiografie (TEECHO) k vyloučení intrakardiálního trombu v oušku levé síně (LAA). Alternativou jsou alespoň 3 týdny řádné antikoagulace před výkonem.",
      highYield: "FS > 48h bez antikoagulace -> TEECHO před kardioverzí!"
    },
    {
      id: "fc-37",
      moduleId: "afib",
      category: "Fibrilace síní",
      question: "Jaké je postavení katetrizační ablace (PVI) v ESC 2024 Guidelines?",
      answer: "Třída I doporučení jako léčba 1. volby u symptomatické paroxyzmální FS i před selháním antiarytmik a u pacientů s FS a srdečním selháním (HFrEF).",
      highYield: "Ablace (PVI) = Třída I u paroxyzmální FS a HFrEF."
    },
    {
      id: "fc-38",
      moduleId: "afib",
      category: "Fibrilace síní",
      question: "Které antiarytmikum lze bezpečně podat k udržení sinusového rytmu u pacienta s FS a HFrEF (EF 25 %)?",
      answer: "Pouze Amiodaron. Antiarytmika třídy Ic (Propafenon, Flekainid) i Dronedaron jsou při snížené EF a po infarktu přísně kontraindikována pro proarytmii.",
      highYield: "Strukturální vada / nízká EF = jedině Amiodaron."
    },
    {
      id: "fc-39",
      moduleId: "arytmie",
      category: "Ostatní arytmie",
      question: "Jaký je postup při akutním ukončení pravidelné SVT s úzkým QRS (AVNRT)?",
      answer: "1. Vagové manévry (modifikovaný Valsalva manévr), 2. Rychlý i.v. bolus Adenosinu (6 mg -> 12 mg s proplachem), 3. Verapamil/Metoprolol i.v., 4. Elektrická kardioverze při nestabilitě.",
      highYield: "AVNRT: Valsalva -> Adenosin 6mg i.v. -> 12mg i.v."
    },
    {
      id: "fc-40",
      moduleId: "arytmie",
      category: "Ostatní arytmie",
      question: "Proč jsou blokátory AV uzlu (Verapamil, Adenosin, Digoxin) zakázány u fibrilace síní s preexcitací (WPW)?",
      answer: "Zablokování AV uzlu způsobí, že všechny vzruchy projdou nekontrolovaně přídatnou Kentovou dráhou do komor, což vede k extrémní tachykardii (> 300/min) a přechodu do fibrilace komor.",
      highYield: "FS + WPW: AV blokátory zakázány! Lék = kardioverze / Ibutilid."
    },
    {
      id: "fc-41",
      moduleId: "arytmie",
      category: "Ostatní arytmie",
      question: "Co je EKG obrazem AV blokády II. stupně Mobitz II a jaká je léčba?",
      answer: "Konstantní PQ interval s náhlým výpadkem QRS komplexu (např. 2:1 nebo 3:1). Léčba: Indikace k implantaci trvalého kardiostimulátoru (vysoké riziko přechodu do kompletního AV bloku).",
      highYield: "Mobitz II = konstantní PQ + výpadek QRS -> nutný kardiostimulátor."
    },
    {
      id: "fc-42",
      moduleId: "arytmie",
      category: "Ostatní arytmie",
      question: "Jaké EKG znaky charakterizují blokádu levého raménka (LBBB)?",
      answer: "Šířka QRS ≥ 120 ms, hluboké široké S ve V1-V2, široký rozštěpený kmit R (tvar M) ve svodech I, aVL, V5-V6 a vymizení septálního q v I, V5-V6.",
      highYield: "LBBB: QRS ≥ 120 ms, tvar M ve V5-V6, hluboké S ve V1."
    },
    {
      id: "fc-43",
      moduleId: "arytmie",
      category: "Ostatní arytmie",
      question: "Jaký je lék první volby pro polymorfní komorovou tachykardii Torsades de Pointes?",
      answer: "Magnesium sulfát (Síran hořečnatý) 2g i.v. bolus. Současně vysadit všechny léky prodlužující QT a korigovat kalémii.",
      highYield: "Torsades de Pointes = Magnesium sulfát i.v.!"
    },

    // --- Chlopenní vady (66-80) ---
    {
      id: "fc-44",
      moduleId: "chlopne",
      category: "Chlopenní vady",
      question: "Jaká jsou echokardiografická kritéria pro těžkou aortální stenózu?",
      answer: "Plocha ústí (AVA) < 1,0 cm² (nebo indexovaná AVA < 0,6 cm²/m²), střední tlakový gradient meanPG ≥ 40 mmHg a maximální rychlost Vmax ≥ 4,0 m/s.",
      highYield: "Těžká AS: AVA < 1.0 cm², mean gradient ≥ 40 mmHg, Vmax ≥ 4 m/s."
    },
    {
      id: "fc-45",
      moduleId: "chlopne",
      category: "Chlopenní vady",
      question: "Jaká je klasická triáda symptomů u aortální stenózy?",
      answer: "1. Námahová dušnost (srdeční selhání), 2. Angina pectoris, 3. Námahová synkopa.",
      highYield: "Triáda AS: Dušnost + Angina + Synkopa."
    },
    {
      id: "fc-46",
      moduleId: "chlopne",
      category: "Chlopenní vady",
      question: "Kdy je u aortální stenózy preferována TAVI a kdy chirurgická náhrada (SAVR)?",
      answer: "TAVI je preferována u pacientů ve věku ≥ 75 let nebo při vysokém operačním riziku. SAVR je preferována u pacientů < 75 let s nízkým rizikem nebo při nutnosti současného bypassu.",
      highYield: "TAVI: věk ≥ 75 let / vysoké riziko. SAVR: < 75 let / nízké riziko."
    },
    {
      id: "fc-47",
      moduleId: "chlopne",
      category: "Chlopenní vady",
      question: "Jaký je typický poslechový nález u mitrální regurgitace?",
      answer: "Holosystolický foukavý šelest na hrotu s propagací do levé axily, často s oslabenou 1. ozvou a přítomností 3. ozvy.",
      highYield: "Mitrální regurgitace: Holosystolický šelest na hrotu do axily."
    },
    {
      id: "fc-48",
      moduleId: "chlopne",
      category: "Chlopenní vady",
      question: "Proč je intraaortální balonková kontrapulzace (IABP) kontraindikována u aortální regurgitace?",
      answer: "Nafouknutí balonku v diastole dramaticky zvýší zpětný tok krve do levé komory přes nedomykavou chlopeň a způsobí fatální plicní edém.",
      highYield: "IABP je přísně zakázána u aortální regurgitace!"
    },

    // --- Kardiomyopatie & Myokarditidy (81-95) ---
    {
      id: "fc-49",
      moduleId: "kmp",
      category: "Kardiomyopatie",
      question: "Co je SAM fenomén u hypertrofické kardiomyopatie (HOCM)?",
      answer: "Systolic Anterior Motion – přední cíp mitrální chlopně je během systoly nasáván Venturiho efektem do výtokového traktu LK, což způsobuje dynamickou obstrukci LVOT a mitrální regurgitaci.",
      highYield: "SAM = nasávání cípu chlopně do LVOT při HOCM."
    },
    {
      id: "fc-50",
      moduleId: "kmp",
      category: "Kardiomyopatie",
      question: "Jaké léky jsou přísně kontraindikovány u HOCM?",
      answer: "Pozitivně inotropní látky (Digoxin), vazodilatancia a nitráty, a vysoké dávky diuretik (snižují plnění LK a zhoršují obstrukci výtokového traktu).",
      highYield: "HOCM: Digoxin, Nitráty a vazodilatancia jsou zakázány!"
    },
    {
      id: "fc-51",
      moduleId: "kmp",
      category: "Kardiomyopatie",
      question: "Co je Mavacamten a jaký je jeho mechanismus účinku?",
      answer: "První selektivní alosterický inhibitor srdečního myozinu. Snižuje tvorbu aktino-myozinových můstků, čímž snižuje hyperkontraktilitu myokardu a odstraňuje obstrukci LVOT u HOCM.",
      highYield: "Mavacamten = inhibitor srdečního myozinu pro HOCM."
    },
    {
      id: "fc-52",
      moduleId: "kmp",
      category: "Kardiomyopatie",
      question: "Jaký je typický nález u Takotsubo kardiomyopatie na SKG a ECHO?",
      answer: "Na koronarografii jsou věnčité tepny hladké bez obstrukce (< 50 %). Na echokardiografii je typické apikální balonování (akineze hrotu s hyperkinezí baze).",
      highYield: "Takotsubo: Apikální balonování + čisté koronárky na SKG."
    },
    {
      id: "fc-53",
      moduleId: "kmp",
      category: "Kardiomyopatie",
      question: "Které EKG a ECHO známky svědčí pro srdeční amyloidózu?",
      answer: "Nízká voltáž QRS komplexů na EKG v kontrastu s masivně ztluštělými stěnami levé komory (tzv. zářící 'sparkling' myokard) a těžkou diastolickou dysfunkcí na ECHO.",
      highYield: "Amyloidóza: Nízká voltáž na EKG + tlusté stěny na ECHO."
    },

    // --- Zánětlivá onemocnění & Perikard (96-105) ---
    {
      id: "fc-54",
      moduleId: "zanety",
      category: "Záněty & Perikard",
      question: "Jaká jsou 2 hlavní Dukeova kritéria pro infekční endokarditidu?",
      answer: "1. Pozitivní hemokultury (typické mikroorganismy ze 2 samostatných odběrů). 2. Průkaz postižení endokardu na zobrazovacích metodách (vegetace, absces, nová dehiscence protézy na TEE/TTE).",
      highYield: "Hlavní Duke kritéria: Typické hemokultury + Vegetace na ECHO."
    },
    {
      id: "fc-55",
      moduleId: "zanety",
      category: "Záněty & Perikard",
      question: "Které složky tvoří Beckovu triádu u srdeční tamponády?",
      answer: "1. Hypotenze, 2. Zvýšená náplň krčních žil, 3. Oslabené (vzdálené/tiché) srdeční ozvy.",
      highYield: "Beckova triáda tamponády: Hypotenze + Náplň krčních žil + Tiché ozvy."
    },
    {
      id: "fc-56",
      moduleId: "zanety",
      category: "Záněty & Perikard",
      question: "Co je pulsus paradoxus a u kterého stavu se vyskytuje?",
      answer: "Pokles systolického krevního tlaku o více než 10 mmHg během klidného nádechu. Klasická známka srdeční tamponády (a těžkého astmatu / konstriktivní perikarditidy).",
      highYield: "Pulsus paradoxus = pokles TKs > 10 mmHg při nádechu u tamponády."
    },
    {
      id: "fc-57",
      moduleId: "zanety",
      category: "Záněty & Perikard",
      question: "Jaká je standardní farmakoterapie 1. volby u akutní perikarditidy?",
      answer: "Vysoké dávky NSAID (např. Ibuprofen 600 mg á 8h nebo Aspirin) + Kolchicin (0,5 mg denně po dobu 3 měsíců k prevenci recidivy).",
      highYield: "Perikarditida: NSAID + Kolchicin na 3 měsíce."
    },
    {
      id: "fc-58",
      moduleId: "zanety",
      category: "Záněty & Perikard",
      question: "U kterých pacientů je dnes indikována antibiotická profylaxe infekční endokarditidy?",
      answer: "Pouze u vysoce rizikových pacientů (chlopenní náhrada, předchozí IE, cyanotické vrozené vady) a pouze při stomatologických výkonech narušujících dáseň.",
      highYield: "Profylaxe IE: Jen chlopenní protézy/předchozí IE + stomatologie."
    },

    // --- Plicní embolie & EKG & Ostatní (106-115) ---
    {
      id: "fc-59",
      moduleId: "pe",
      category: "Plicní embolie",
      question: "Kdy je u plicní embolie indikována okamžitá systémová trombolýza?",
      answer: "Pouze u vysoce rizikové (High Risk / masivní) plicní embolie provázené kardiogenním šokem nebo perzistující hypotenzí (TKs < 90 mmHg).",
      highYield: "Trombolýza u PE jen při hypotenzi / šoku (High Risk)!"
    },
    {
      id: "fc-60",
      moduleId: "pe",
      category: "Plicní embolie",
      question: "Co znamená nález S1Q3T3 na EKG?",
      answer: "Hluboké S ve svodu I, kmit Q ve svodu III a negativní T ve svodu III. Znak akutního přetížení pravé komory (akutní cor pulmonale / plicní embolie).",
      highYield: "S1Q3T3 = akutní přetížení pravého srdce u masivní PE."
    },
    {
      id: "fc-61",
      moduleId: "pe",
      category: "Plicní embolie",
      question: "Jaká je hemodynamická definice plicní hypertenze při pravostranné katetrizaci?",
      answer: "Střední tlak v plicnici v klidu (mPAP) > 20 mmHg.",
      highYield: "Plicní hypertenze: mPAP > 20 mmHg."
    },
    {
      id: "fc-62",
      moduleId: "ekg",
      category: "EKG diagnostika",
      question: "Jaké svody na EKG zobrazují spodní, přední a laterální stěnu LK?",
      answer: "Spodní stěna: II, III, aVF (ACD). Přední a septální stěna: V1–V4 (RIA). Laterální stěna: I, aVL, V5–V6 (RCx / RIA).",
      highYield: "Spodní: II, III, aVF; Přední: V1-V4; Laterální: I, aVL, V5-V6."
    },
    {
      id: "fc-63",
      moduleId: "ekg",
      category: "EKG diagnostika",
      question: "Jaké EKG změny provázejí těžkou hyperkalémii?",
      answer: "1. Vysoké hrotnaté symetrické vlny T ('stanové T'), 2. Oploštění a vymizení vln P, 3. Široký bizardní QRS komplex přecházející do sinusoidální křivky.",
      highYield: "Hyperkalémie: Stanové T -> vymizení P -> široký QRS -> zástava."
    },
    {
      id: "fc-64",
      moduleId: "ekg",
      category: "EKG diagnostika",
      question: "Proč podáváme Calcium gluconicum i.v. při těžké hyperkalémii s EKG změnami?",
      answer: "Vápník nesnižuje kalémii, ale stabilizuje membránový potenciál kardiomyocytů a chrání srdce před vznikem komorové fibrilace a asystolie během 1–3 minut.",
      highYield: "Calcium i.v. = okamžitá ochrana myokardu před maligní arytmií!"
    },
    {
      id: "fc-65",
      moduleId: "ccs",
      category: "Chronické koronární syndromy",
      question: "Jaká je neinvazivní metoda 1. volby k vyloučení ICHS u pacienta s nízkou až střední pravděpodobností?",
      answer: "CT koronarografie (CCTA) díky své velmi vysoké negativní prediktivní hodnotě (> 99 %).",
      highYield: "Nízká/střední PTP = CT koronarografie (CCTA)."
    },
    // --- Další zkoušková témata & Farmakologie (66-115+) ---
    {
      id: "fc-66",
      moduleId: "aks",
      category: "Akutní koronární syndromy",
      question: "Co je Wellensův syndrom na EKG a co signalizuje?",
      answer: "Bifázické nebo hluboce symetricky invertované vlny T ve svodech V2–V3 bez patologických Q kmitů a s normálním/mírně zvýšeným troponinem. Signalizuje kritickou proximální stenózu RIA (LAD) – hrozí masivní přední transmurální infarkt!",
      highYield: "Wellensův syndrom: Bifázické/invertované T ve V2-V3 = kritická stenóza RIA!"
    },
    {
      id: "fc-67",
      moduleId: "aks",
      category: "Akutní koronární syndromy",
      question: "Co je de Winterův EKG vzorec?",
      answer: "Deprese ST úseku v bodě J o 1–3 mm ve svodech V1–V6 s plynulým přechodem do vysokých, symetrických, pozitivních vln T (spolu s elevací ST v aVR). Ekvivalent akutního STEMI proximální RIA bez klasických ST elevací!",
      highYield: "de Winterův vzorec: ST deprese v bodě J + vysoké symetrické T = STEMI ekvivalent."
    },
    {
      id: "fc-68",
      moduleId: "aks",
      category: "Akutní koronární syndromy",
      question: "Jaké jsou 3 mechanické komplikace infarktu myokardu?",
      answer: "1. Ruptura volné stěny levé komory (tamponáda, elektromechanická disociace), 2. Ruptura mezikomorového septa (defekt septa, drsný holosystolický šelest u sterna), 3. Ruptura papilárního svalu (akutní mitrální regurgitace, plicní edém, šok).",
      highYield: "Mechanické komplikace IM: Ruptura stěny, septa nebo papilárního svalu."
    },
    {
      id: "fc-69",
      moduleId: "aks",
      category: "Akutní koronární syndromy",
      question: "Jaká je Killipova klasifikace akutního infarktu myokardu?",
      answer: "Killip I: bez známek srdečního selhání (mortalita ~5 %). Killip II: městnání na plicích (chrůpky do 1/2 plicních polí) nebo 3. ozva. Killip III: těžký plicní edém (chrůpky nad 1/2 plic). Killip IV: kardiogenní šok (mortalita > 50 %).",
      highYield: "Killip I (bez městnání), II (bazální chrůpky), III (plicní edém), IV (kardiogenní šok)."
    },
    {
      id: "fc-70",
      moduleId: "aks",
      category: "Akutní koronární syndromy",
      question: "Proč je podání nitrátů kontraindikováno při infarktu pravé komory?",
      answer: "Pravá komora je závislá na adekvátním preloadu (plnícím tlaku). Venodilatace způsobená nitráty dramaticky sníží žilní návrat do pravé komory, což způsobí těžký pokles srdečního výdeje a fatální hypotenzi.",
      highYield: "Infarkt PK: Zákaz nitrátů a diuretik! Lékem je volumoterapie."
    },
    {
      id: "fc-71",
      moduleId: "hf",
      category: "Srdeční selhání",
      question: "Které 4 betablokátory mají jednoznačný průkaz snížení mortality u HFrEF?",
      answer: "1. Bisoprolol, 2. Metoprolol sukcinát (s řízeným uvolňováním), 3. Karvedilol, 4. Nebivolol.",
      highYield: "Betablokátory pro HF: Bisoprolol, Metoprolol sukcinát, Karvedilol, Nebivolol."
    },
    {
      id: "fc-72",
      moduleId: "hf",
      category: "Srdeční selhání",
      question: "Jak působí Sacubitril v kombinaci Sacubitril/Valsartan (ARNI)?",
      answer: "Sacubitril inhibuje enzym neprilysin, který běžně odbourává natriuretické peptidy (ANP, BNP, CNP) a bradykinin. Tím zvyšuje jejich hladinu, což vede k vazodilataci, natriuréze a inhibici fibrózy myokardu.",
      highYield: "Sacubitril = inhibitor neprilysinu -> zvyšuje natriuretické peptidy."
    },
    {
      id: "fc-73",
      moduleId: "hf",
      category: "Srdeční selhání",
      question: "Jak ovlivňuje léčba ARNI laboratorní hodnoty BNP a NT-proBNP?",
      answer: "Sacubitril inhibuje degradaci BNP, proto hladina BNP paradoxně stoupá a nelze ji použít k monitoraci! NT-proBNP není substrátem neprilysinu, takže jeho hladina po ARNI klesá a slouží jako spolehlivý marker úspěšnosti léčby.",
      highYield: "Při léčbě ARNI monitorujeme NT-proBNP, nikoliv samotné BNP!"
    },
    {
      id: "fc-74",
      moduleId: "hf",
      category: "Srdeční selhání",
      question: "Jaký je mechanismus kardioprotektivního účinku SGLT2 inhibitorů (gliflozinů)?",
      answer: "Zvýšení glykosurie a osmotické natriurézy (bez aktivace sympatiku), zlepšení energetického metabolismu myokardu (využití ketolátek), snížení intersticiálního edému, krevního tlaku a snížení nitroledvinného tlaku.",
      highYield: "SGLT2i: Osmotická natriuréza, ketolátky pro srdce, nefroprotekce."
    },
    {
      id: "fc-75",
      moduleId: "hf",
      category: "Srdeční selhání",
      question: "Co je Vericiguat a kdy se u srdečního selhání zvažuje?",
      answer: "Stimulátor solubilní guanylátcyklázy (sGC). Zvyšuje tvorbu cGMP a obnovuje citlivost na oxid dusnatý (NO). Zvažuje se jako přídavná léčba u pacientů s HFrEF po nedávné dekompenzaci navzdory FMT.",
      highYield: "Vericiguat = stimulátor sGC u zhoršujícího se HFrEF."
    },
    {
      id: "fc-76",
      moduleId: "htn",
      category: "Arteriální hypertenze",
      question: "Jaký je rozdíl mezi ambulantním 24h měřením TK (ABPM) a domácím měřením (HBPM) z hlediska prahových hodnot pro hypertenzi?",
      answer: "Ambulantní TK v ordinaci: ≥ 140/90 mmHg. Domácí měření (HBPM průměr): ≥ 135/85 mmHg. 24h monitorování (ABPM): 24hodinový průměr ≥ 130/80 mmHg (denní průměr ≥ 135/85, noční průměr ≥ 120/70 mmHg).",
      highYield: "Meze hypertenze: Ordinace 140/90; Domácí 135/85; 24h ABPM 130/80."
    },
    {
      id: "fc-77",
      moduleId: "htn",
      category: "Arteriální hypertenze",
      question: "Co je hypertenze bílého pláště a maskovaná hypertenze?",
      answer: "Hypertenze bílého pláště: vysoký TK v ordinaci, ale normální doma a na ABPM. Maskovaná hypertenze: normální TK v ordinaci, ale zvýšený TK v domácím prostředí / na ABPM (spojena s vysokým kardiovaskulárním rizikem!).",
      highYield: "Maskovaná HT = normální u lékaře, vysoká doma -> nebezpečná!"
    },
    {
      id: "fc-78",
      moduleId: "htn",
      category: "Arteriální hypertenze",
      question: "Jaká je cílová hodnota TK při akutní disekci aorty?",
      answer: "Okamžité a agresivní snížení systolického TK pod 120 (nebo 100–120) mmHg a tepové frekvence pod 60/min do 20 minut! Lék volby: i.v. betablokátor (Labetalol / Esmolol) + i.v. vazodilatans (Nitroprusid/Urapidil).",
      highYield: "Disekce aorty: TKs < 120 mmHg a TF < 60/min do 20 min (Labetalol)."
    },
    {
      id: "fc-79",
      moduleId: "afib",
      category: "Fibrilace síní",
      question: "Jaké jsou 4 formy fibrilace síní dle časového průběhu?",
      answer: "1. Paroxyzmální (končí spontánně do 7 dnů, typicky do 48h), 2. Perzistentní (trvá > 7 dnů nebo vyžaduje kardioverzi), 3. Dlouhodobě perzistentní (trvá > 1 rok při strategii kontroly rytmu), 4. Permanentní (trvalá, akceptovaná pacientem i lékařem).",
      highYield: "FS: Paroxyzmální (<7d), Perzistentní (>7d), Dlouhodobě perzistentní (>1r), Permanentní."
    },
    {
      id: "fc-80",
      moduleId: "afib",
      category: "Fibrilace síní",
      question: "Jaké je HAS-BLED skóre a k čemu slouží?",
      answer: "Skóre hodnotící riziko krvácení při antikoagulační léčbě (Hypertension, Abnormal renal/liver function, Stroke, Bleeding history, Labile INR, Elderly >65, Drugs/alcohol). Skóre ≥ 3 značí vysoké riziko. Neslouží k vysazení NOAC, ale k identifikaci a nápravě ovlivnitelných rizik!",
      highYield: "HAS-BLED ≥ 3 = vysoké riziko krvácení -> korigovat ovlivnitelné faktory."
    },
    {
      id: "fc-81",
      moduleId: "afib",
      category: "Fibrilace síní",
      question: "Co je 'Pill-in-the-pocket' přístup u fibrilace síní?",
      answer: "Samostatné jednorázové perorální užití antiarytmika (Propafenon 450–600 mg nebo Flekainid 200–300 mg) pacientem při záchvatu paroxyzmální FS. Podmínka: pacient nemá strukturální vadu srdce a bezpečnost byla předem otestována v nemocnici.",
      highYield: "Pill-in-the-pocket = jednorázový Propafenon bez strukturální vady."
    },
    {
      id: "fc-82",
      moduleId: "afib",
      category: "Fibrilace síní",
      question: "Kdy se indikuje uzávěr ouška levé síně (LAA closure)?",
      answer: "U pacientů s fibrilací síní s vysokým rizikem cévní mozkové příhody, kteří mají absolutní a trvalou kontraindikaci dlouhodobé antikoagulační léčby (např. po těžkém spontánním intrakraniálním krvácení).",
      highYield: "LAA uzávěr = vysoké riziko CMP + trvalá kontraindikace antikoagulace."
    },
    {
      id: "fc-83",
      moduleId: "arytmie",
      category: "Ostatní arytmie",
      question: "Co charakterizuje flutter síní na EKG a jaká je jeho kurativní léčba?",
      answer: "Pravidelná síňová aktivita s typickým obrazem 'zubů pily' (F vlny) s frekvencí 250–350/min, typicky převáděná 2:1 (komorová TF ~150/min). Kurativní léčbou je radiofrekvenční katetrizační ablace kavo-trikuspidálního isthmu (CTI ablace s úspěšností > 95 %).",
      highYield: "Flutter síní: Zuby pily, převod 2:1 -> kurabilní ablací isthmu (CTI)."
    },
    {
      id: "fc-84",
      moduleId: "arytmie",
      category: "Ostatní arytmie",
      question: "Jaká jsou Brugadova kritéria pro rozlišení komorové tachykardie (KT) od SVT s aberací?",
      answer: "1. Absence RS komplexu ve všech hrudních svodech (konkordance), 2. Interval RS > 100 ms v některém hrudním svodu, 3. Přítomnost AV disociace, 4. Morfologická kritéria pro KT ve V1-V2 a V6.",
      highYield: "Brugadova kritéria: AV disociace, konkordance a RS > 100 ms svědčí pro KT."
    },
    {
      id: "fc-85",
      moduleId: "arytmie",
      category: "Ostatní arytmie",
      question: "Co je Brugada syndrom a jaké má EKG znaky?",
      answer: "Genetická kanálopatie (mutace Na+ kanálu SCN5A) způsobující náhlou srdeční smrt. EKG Typ 1: Elevace bodu J ≥ 2 mm s klenutým (coved-type) úsekem ST a negativní vlnou T ve svodech V1–V2 (často provokována horečkou či blokátory Na+ kanálů - ajmalinový test).",
      highYield: "Brugada: Klenutá ST elevace ve V1-V2 + mutace SCN5A -> riziko fibrilace komor."
    },
    {
      id: "fc-86",
      moduleId: "arytmie",
      category: "Ostatní arytmie",
      question: "Jaký je rozdíl mezi monofázickým a bifázickým defibrilačním výbojem?",
      answer: "Monofázický výboj vysílá proud jedním směrem (nutná energie 360 J). Bifázický výboj mění polaritu v průběhu výboje, je efektivnější při nižší energii (150–200 J) a způsobuje menší poškození myokardu.",
      highYield: "Bifázický defibrilátor: standardně 150–200 J."
    },
    {
      id: "fc-87",
      moduleId: "chlopne",
      category: "Chlopenní vady",
      question: "Co je Heydeův syndrom?",
      answer: "Koincidence těžké kalcifikující aortální stenózy a gastrointestinálního krvácení z angiodysplazií v trávicím traktu, způsobené získanou deficiencí von Willebrandova faktoru (střižný stres na stenotické chlopni mechanicky rozbíjí multimery vWF). Po náhradě chlopně krvácení vymizí!",
      highYield: "Heydeův syndrom = Aortální stenóza + GI krvácení z angiodysplazií."
    },
    {
      id: "fc-88",
      moduleId: "chlopne",
      category: "Chlopenní vady",
      question: "Co je prolaps mitrální chlopně (Barlowova choroba)?",
      answer: "Systolické vyklenutí jednoho nebo obou cípů mitrální chlopně o > 2 mm nad rovinu mitrálního anulu do levé síně v důsledku myxomatózní degenerace cípů. Poslech: mezosystolický klik následovaný pozdním systolickým šelestem.",
      highYield: "Prolaps mitrální chlopně: Mezosystolický klik + pozdní systolický šelest."
    },
    {
      id: "fc-89",
      moduleId: "chlopne",
      category: "Chlopenní vady",
      question: "Jaké jsou klinické a poslechové znaky těžké trikuspidální regurgitace?",
      answer: "Zvýšená náplň a systolická pulzace krčních žil, pulzující hepatomegalie, otoky DKK, ascites. Poslechově: holosystolický šelest u dolního okraje sterna vlevo, který zesiluje při nádechu (tzv. Rivero-Carvallovo znamení).",
      highYield: "Trikuspidální regurgitace: Šelest zesiluje v nádechu (Rivero-Carvallo)."
    },
    {
      id: "fc-90",
      moduleId: "chlopne",
      category: "Chlopenní vady",
      question: "Co je MitraClip (TEER - Transcatheter Edge-to-Edge Repair)?",
      answer: "Katetrizační perkutánní sešití předního a zadního cípu mitrální chlopně (vytvoření dvojitého ústí) přes femorální žílu a transseptální punkci. Indikován u pacientů s těžkou sekundární nebo primární mitrální regurgitací při vysokém chirurgickém riziku.",
      highYield: "MitraClip = katetrizační léčba těžké mitrální regurgitace."
    },
    {
      id: "fc-91",
      moduleId: "kmp",
      category: "Kardiomyopatie",
      question: "Jaká je nejčastější příčina dilatační kardiomyopatie (DCMP)?",
      answer: "Genetické mutace (až 40 %, nejčastěji gen pro titin - TTN, dále lamin A/C - LMNA), postmyokarditická autoimunitní reakce, toxické vlivy (alkohol, antracyklinová chemoterapie, kokain) a peripartální kardiomyopatie.",
      highYield: "DCMP: Mutace titinu (TTN), postmyokarditická, alkohol, kardiotoxická chemoterapie."
    },
    {
      id: "fc-92",
      moduleId: "kmp",
      category: "Kardiomyopatie",
      question: "Proč je mutace genu pro lamin A/C (LMNA) u DCMP tak obávaná?",
      answer: "Způsobuje vysoké riziko náhlé srdeční smrti v důsledku maligních komorových arytmií a těžkých převodních poruch i při pouze mírně snížené ejekční frakci LK. Je indikací k časné implantaci ICD!",
      highYield: "LMNA mutace = extrémní arytmogenní riziko -> časná indikace ICD."
    },
    {
      id: "fc-93",
      moduleId: "kmp",
      category: "Kardiomyopatie",
      question: "Jaké jsou 2 hlavní typy srdeční amyloidózy a jak se léčí?",
      answer: "1. AL amyloidóza (z lehkých řetězců při plazmocelulární dyskrazii / myelomu -> chemoterapie/daratumumab). 2. ATTR amyloidóza (transthyretinová, senilní wild-type nebo hereditární -> stabilizátor tetrameru Tafamidis).",
      highYield: "Amyloidóza: AL (lehké řetězce -> hematoonkologie) vs. ATTR (Tafamidis)."
    },
    {
      id: "fc-94",
      moduleId: "zanety",
      category: "Záněty & Perikard",
      question: "Co jsou Oslerovy uzly, Janewayovy léze a Rothovy skvrny?",
      answer: "Periferní známky infekční endokarditidy: Oslerovy uzly = bolestivé erytematózní uzlíky na bříškách prstů (imunokomplexy). Janewayovy léze = nebolestivé hemoragické makuly na dlaních a ploskách (septické mikroembolie). Rothovy skvrny = retinální hemoragie se světlým centrem.",
      highYield: "Oslerovy uzly (bolestivé), Janewayovy léze (nebolestivé), Rothovy skvrny (sítnice)."
    },
    {
      id: "fc-95",
      moduleId: "zanety",
      category: "Záněty & Perikard",
      question: "Které mikroorganismy tvoří skupinu HACEK?",
      answer: "Haemophilus, Aggregatibacter, Cardiobacterium, Eikenella, Kingella. Skupina gramnegativních bakterií způsobujících subakutní infekční endokarditidu s obtížnou kultivací (vyžadují prodlouženou inkubaci).",
      highYield: "HACEK = Haemophilus, Aggregatibacter, Cardiobacterium, Eikenella, Kingella."
    },
    {
      id: "fc-96",
      moduleId: "zanety",
      category: "Záněty & Perikard",
      question: "Co je konstriktivní perikarditida a jaké má hemodynamické známky?",
      answer: "Chronické fibrózní ztluštění a kalcifikace perikardu, které rigidně brání diastolickému plnění srdce. Znaky: Kussmaulovo znamení (paradoxní zvýšení náplně krčních žil při nádechu), perikardiální klepnutí (pericardial knock) v časné diastole a kalcifikace perikardu na RTG/CT.",
      highYield: "Konstriktivní perikarditida: Kussmaulovo znamení + kalcifikace perikardu."
    },
    {
      id: "fc-97",
      moduleId: "pe",
      category: "Plicní embolie",
      question: "Jaká je definice zjednodušeného PESI skóre (sPESI) pro plicní embolii?",
      answer: "Hodnotí 6 proměnných (každá za 1 bod): Věk > 80 let, Anamnéza malignity, Chronické kardiopulmonální onemocnění, TF ≥ 110/min, TKs < 100 mmHg, SpO2 < 90 %. Skóre 0 = nízké riziko (30denní mortalita 1 %); Skóre ≥ 1 = zvýšené riziko.",
      highYield: "sPESI = 0 bodů definuje nízkorizikovou PE vhodnou k časnému propuštění."
    },
    {
      id: "fc-98",
      moduleId: "pe",
      category: "Plicní embolie",
      question: "Co je McConnellovo znamení na echokardiografii?",
      answer: "Akineze volné stěny pravé komory se zachovanou hyperkinezí samotného hrotu pravé komory. Vysoce specifický echokardiografický znak pro akutní masivní plicní embolii.",
      highYield: "McConnellovo znamení = akineze stěny PK se zachovaným hrotem u PE."
    },
    {
      id: "fc-99",
      moduleId: "pe",
      category: "Plicní embolie",
      question: "Co je CTEPH a jaká je její kauzální léčba?",
      answer: "Chronická tromboembolická plicní hypertenze (4. skupina PH). Vzniká organizací a fibrotizací trombů v plicních tepnách po proběhlé PE. Kauzální léčbou 1. volby je chirurgická plicní endarterektomie (PEA) v hypotermní zástavě oběhu.",
      highYield: "CTEPH: Vzniká po PE -> kurabilní plicní endarterektomií (PEA)."
    },
    {
      id: "fc-100",
      moduleId: "ccs",
      category: "Chronické koronární syndromy",
      question: "Co je frakční průtoková rezerva (FFR / iFR) při koronarografii?",
      answer: "Invazivní fyziologické měření tlakového gradientu před a za koronární stenózou při maximální farmakologické hyperémii (adenosin). Hodnota FFR ≤ 0,80 (nebo iFR ≤ 0,89) prokazuje hemodynamickou významnost stenózy a indikuje provedení PCI.",
      highYield: "FFR ≤ 0,80 prokazuje ischémii a indikuje implantaci stentu."
    },
    {
      id: "fc-101",
      moduleId: "ccs",
      category: "Chronické koronární syndromy",
      question: "Co je vazospastická (Prinzmetalova) angina pectoris?",
      answer: "Spasmus epikardiální koronární tepny způsobující klidovou ischémii (typicky v noci a časně ráno) s přechodnými ST elevacemi na EKG. Lékem volby jsou blokátory kalciových kanálů a nitráty. Betablokátory jsou KONTRAINDIKOVÁNY (mohou zhoršit vazokonstrikci aktivací alfa receptorů!).",
      highYield: "Prinzmetalova AP: Klidový spasmus, ST elevace -> léčba BKK, zákaz betablokátorů!"
    },
    {
      id: "fc-102",
      moduleId: "ekg",
      category: "EKG diagnostika",
      question: "Co je syndrom dlouhého QT (LQTS) a jaká je hodnota prodlouženého QTc?",
      answer: "Porucha repolarizace myokardu s rizikem Torsades de Pointes a náhlé smrti. Prodloužený korigovaný interval (dle Bazzetova vzorce QTc = QT / odmocnina z RR): QTc > 450 ms u mužů a > 460 ms u žen (hodnoty > 500 ms představují extrémní riziko arytmií).",
      highYield: "LQTS: QTc > 450/460 ms (při QTc > 500 ms extrémní riziko TdP)."
    },
    {
      id: "fc-103",
      moduleId: "ekg",
      category: "EKG diagnostika",
      question: "Jaké EKG znaky svědčí pro hypertrofii levé komory (Sokolow-Lyonův index)?",
      answer: "Sokolow-Lyonův index: kmit S ve svodu V1 + kmit R ve svodu V5 nebo V6 > 35 mm (3,5 mV). Cornellův voltážový index: R v aVL + S ve V3 > 28 mm (muži) / > 20 mm (ženy).",
      highYield: "Sokolow-Lyon pro HLK: S ve V1 + R ve V5/V6 > 35 mm."
    },
    {
      id: "fc-104",
      moduleId: "ekg",
      category: "EKG diagnostika",
      question: "Jaké EKG změny provázejí intoxikaci digitalisem (Digoxinem)?",
      answer: "1. Miskovité deprese úseku ST (tvar 'Salvador Dalí' kníru), 2. Zkrácení intervalu QT, 3. Oploštění/inverze vlny T, 4. Arytmie: komorová bigeminie, junkční tachykardie, síňová tachykardie s AV blokem.",
      highYield: "Digoxin: Miskovité ST deprese + zkrácení QT + komorová bigeminie."
    },
    {
      id: "fc-105",
      moduleId: "ekg",
      category: "EKG diagnostika",
      question: "Co je syndrom předčasné repolarizace vs. Osbornova vlna?",
      answer: "Předčasná repolarizace: benigní elevace bodu J se zářezem (notch) a konkávní ST elevace u mladých sportovců. Osbornova vlna (J-vlna): prominentní pozitivní výchylka na přechodu QRS a ST segmentu typická pro těžkou hypotermii (teplota těla < 32 °C).",
      highYield: "Osbornova vlna (J-vlna) = patognomický znak hypotermie."
    },
    {
      id: "fc-106",
      moduleId: "aks",
      category: "Akutní koronární syndromy",
      question: "Jaké jsou absolutní kontraindikace systémové fibrinolýzy u STEMI?",
      answer: "Předchozí intrakraniální hemoragie kdykoliv, ischemická CMP v posledních 6 měsících, známý tumor/cévní malformace CNS, těžké trauma/operace hlavy v posledních 3 týdnech, aktivní krvácení do GIT v posledním měsíci, podezření na disekci aorty.",
      highYield: "Fibrinolýza kontraindikace: Anamnéza CMP, tumor CNS, aktivní GIT krvácení, disekce."
    },
    {
      id: "fc-107",
      moduleId: "hf",
      category: "Srdeční selhání",
      question: "Co je Finerenon a jaké je jeho postavení v nefrologii a kardiologii?",
      answer: "Nesteroidní selektivní antagonista mineralokortikoidních receptorů (nsMRA). Ve studiích FIDELIO a FIGARO prokázal významné snížení renální progrese a kardiovaskulárních příhod u pacientů s chronickým onemocněním ledvin a diabetem 2. typu.",
      highYield: "Finerenon = nesteroidní MRA s vysokou kardio- a nefroprotekcí."
    },
    {
      id: "fc-108",
      moduleId: "htn",
      category: "Arteriální hypertenze",
      question: "Která antihypertenziva jsou bezpečná v těhotenství a která jsou přísně teratogenní?",
      answer: "Bezpečná: Metyldopa, Labetalol, Nifedipin (s pomalým uvolňováním). Přísně teratogenní a kontraindikovaná (Třída III): ACE inhibitory, Sartany (ARB) a přímé inhibitory reninu (způsobují agenezi renálních tubulů a oligohydramnion).",
      highYield: "Těhotenství: Metyldopa / Labetalol. ACEi a sartany jsou přísně zakázány!"
    },
    {
      id: "fc-109",
      moduleId: "afib",
      category: "Fibrilace síní",
      question: "Jaké antidotum máme pro zvrácení účinku dabigatranu a jaké pro inhibitory faktoru Xa (apixaban/rivaroxaban)?",
      answer: "Dabigatran -> Idarucizumab (Praxbind, monoklonální protilátka). Inhibitory faktoru Xa (Apixaban, Rivaroxaban) -> Andexanet alfa (rekombinantní inaktivovaný faktor Xa) nebo koncentrát protrombinového komplexu (PCC).",
      highYield: "Antidota: Dabigatran -> Idarucizumab; Anti-Xa -> Andexanet alfa / PCC."
    },
    {
      id: "fc-110",
      moduleId: "arytmie",
      category: "Ostatní arytmie",
      question: "Jaké jsou 4 reverzibilní příčiny srdeční zástavy (4H a 4T)?",
      answer: "4H: Hypoxie, Hypovolémie, Hyperkalémie / Hypokalémie / metabolické poruchy, Hypotermie. 4T: Tenzní pneumotorax, Tamponáda srdeční, Toxické látky (intoxikace), Trombóza (koronární nebo plicní embolie).",
      highYield: "Reverzibilní příčiny KPR: 4H (Hypoxie, Hypovolemie, Hyper/hypokalemie, Hypotermie) + 4T (Tenzní PNO, Tamponáda, Toxiny, Tromboembolie)."
    },
    {
      id: "fc-111",
      moduleId: "chlopne",
      category: "Chlopenní vady",
      question: "Co je Austin Flintův šelest?",
      answer: "Nízkofrekvenční diastolický šelest na hrotu u těžké aortální regurgitace. Vzniká vibrací předního cípu mitrální chlopně, který je narážen proudem regurgitující krve z aortální chlopně, což vytváří relativní mitrální stenózu.",
      highYield: "Austin Flintův šelest = diastolický šelest na hrotu u těžké aortální regurgitace."
    },
    {
      id: "fc-112",
      moduleId: "kmp",
      category: "Kardiomyopatie",
      question: "Co je nekardiální Fabryho choroba způsobující hypertrofii myokardu?",
      answer: "X-vázaná střádavá lysosomální choroba způsobená deficitem enzymu alfa-galaktosidázy A (akumulace globotriaosylceramidu Gb3). Způsobuje těžkou koncentrickou hypertrofii LK imitující HCM, provázenou neuropatickou bolestí, angiokeratomy a renálním selháním.",
      highYield: "Fabryho choroba = deficit alfa-galaktosidázy A -> hypertrofie LK + renální postižení."
    },
    {
      id: "fc-113",
      moduleId: "zanety",
      category: "Záněty & Perikard",
      question: "Jaká je definice myokarditidy na kardio MR (Lake Louise kritéria)?",
      answer: "Průkaz alespoň 1 kritéria myokardiálního edému (zvýšený signál v T2 vážení nebo T2 mapping) A ZÁROVEŇ alespoň 1 kritéria myokardiálního poškození/neinfarktové fibrózy (pozdní sycení gadoliniem - LGE subepikardiálně/midmyokardiálně nebo T1 mapping).",
      highYield: "Lake Louise kritéria: T2 edém + T1/LGE subepikardiální sycení."
    },
    {
      id: "fc-114",
      moduleId: "pe",
      category: "Plicní embolie",
      question: "Jaké je terapeutické okno pro trombolýzu u hemodynamicky nestabilní masivní PE?",
      answer: "Největší benefit má trombolýza podaná do 48 hodin od vzniku symptomů, ale může být účinná až do 14 dnů u pacientů s perzistujícími tromby a nestabilitou.",
      highYield: "Trombolýza u PE: Ideálně do 48h, zvažována až do 14 dnů."
    },
    {
      id: "fc-115",
      moduleId: "ccs",
      category: "Chronické koronární syndromy",
      question: "Kdy je u stabilní ICHS jednoznačně indikována revaskularizace (CABG / PCI) pro zlepšení prognózy a přežití?",
      answer: "1. Stenóza kmene levé věnčité tepny (LM) > 50 %, 2. Stenóza proximální RIA (LAD) > 50 %, 3. Vícecévní postižení se sníženou ejekční frakcí LK (< 35 %), 4. Velká plocha ischemie (> 10 % myokardu LK).",
      highYield: "Prognostická revaskularizace: Kmen LM, proximální RIA, 3 tepny + nízká EF LK."
    }
  ]
};

// ==========================================
// EKG MASTERCLASS - DATOVÝ MODUL
// ==========================================
const EKG_MASTERCLASS_DATA = {
  desatero: [
    {
      step: 1,
      title: "1. Rytmus a původ vzruchu",
      icon: "⚡",
      rule: "Před každým QRS je přítomna pozitivní vlna P ve svodech I, II a aVF, a negativní v aVR.",
      details: "Sinusový rytmus vs. fibrilace síní (chybí vlny P, nepravidelný interval RR), flutter síní (zuby pily), junkční rytmus (retrográdní nebo chybějící P, frekvence 40–60/min), idioventrikulární rytmus (široké QRS bez vazby na P, frekvence 20–40/min).",
      clinicalPearl: "Pokud je vlna P ve svodu II negativní, vzruch nevzniká v SA uzlu, ale níže v síni nebo v AV junkci (tzv. ektopický síňový rytmus)."
    },
    {
      step: 2,
      title: "2. Srdeční frekvence (TF)",
      icon: "⏱️",
      rule: "Při posunu 25 mm/s: TF = 300 / počet velkých čtverců mezi dvěma kmity R.",
      details: "Mnemotechnická řada na velké čtverce: 1 čtverec = 300/min, 2 = 150/min, 3 = 100/min, 4 = 75/min, 5 = 60/min, 6 = 50/min. Při nepravidelném rytmu: spočítejte počet QRS na pruhu 10 sekund (50 velkých čtverců) a vynásobte šesti.",
      clinicalPearl: "Při posunu 50 mm/s se dělí číslem 600 namísto 300!"
    },
    {
      step: 3,
      title: "3. Elektrická osa srdeční",
      icon: "🧭",
      rule: "Hodnoťte polaritu (součet R a S) v končetinových svodech I a aVF.",
      details: "• Normální osa (-30° až +90°): I pozitivní, aVF pozitivní.<br>• Sklon doleva (-30° až -90°): I pozitivní, aVF negativní (ověřte svod II – pokud je II negativní, jde o patologický levý sklon / LAH).<br>• Sklon doprava (+90° až +180°): I negativní, aVF pozitivní (hypertrofie PK, LPH, plicní embolie).<br>• Extrémní osa / 'No man's land' (-90° až 180°): I negativní, aVF negativní (typické pro komorovou tachykardii).",
      clinicalPearl: "Pravidlo palců: Pozitivní I a pozitivní aVF = oba palce nahoru = normální osa."
    },
    {
      step: 4,
      title: "4. Vlna P (Síňová depolarizace)",
      icon: "🌊",
      rule: "Normální šířka < 120 ms (3 malé čtverečky), výška < 2,5 mm ve svodu II.",
      details: "• P-pulmonale (hypertrofie pravé síně): vysoká hrotnatá vlna P ≥ 2,5 mm ve svodech II, III, aVF (CHOPN, plicní hypertenze).<br>• P-mitrale (hypertrofie levé síně): široká dvouvrcholová (bifidní) vlna P ≥ 120 ms ve svodu II s odstupem vrcholů ≥ 40 ms a bifázické P s hlubokou negativní fází ve V1 (mitrální vady, arteriální hypertenze).",
      clinicalPearl: "Pravá síň se depolarizuje jako první (první polovina P), levá síň jako druhá (druhá polovina P)."
    },
    {
      step: 5,
      title: "5. Interval PQ / PR (Převod síň-komora)",
      icon: "⏳",
      rule: "Normální trvání: 120–200 ms (3 až 5 malých čtverečků).",
      details: "• Zkrácení (< 120 ms): Preexcitace (WPW syndrom - přítomnost delta vlny), LGL syndrom, junkční rytmus.<br>• Prodloužení (> 200 ms): AV blokáda I. stupně.<br>• Deprese úseku PQ: Typická pro akutní perikarditidu nebo síňový infarkt.",
      clinicalPearl: "Fyziologické zpoždění vzruchu vzniká v AV uzlu, což dává síním čas dopumpovat krev do komor před jejich systolou."
    },
    {
      step: 6,
      title: "6. Komplex QRS (Ventrikulární depolarizace)",
      icon: "📈",
      rule: "Normální šířka < 120 ms (ideálně < 100 ms).",
      details: "• Široký QRS (≥ 120 ms): Blokáda levého raménka (LBBB), blokáda pravého raménka (RBBB), komorová tachykardie, komorová extrasystola, preexcitace.<br>• Patologický kmit Q: šířka ≥ 40 ms (1 malý čtvereček) nebo hloubka > 25 % výšky kmitu R v témže svodu -> značí prodělaný transmurální infarkt (nekrózu).<br>• Voltážová kritéria pro hypertrofii LK: Sokolow-Lyon (S ve V1 + R ve V5/V6 > 35 mm).",
      clinicalPearl: "Drobné septální q ve svodech I, aVL, V5–V6 je normální fyziologický nález (depolarizace septa zleva doprava)."
    },
    {
      step: 7,
      title: "7. Úsek ST (Časná repolarizace komor)",
      icon: "🎯",
      rule: "Za normálních okolností je izoelektrický na úrovni TP/PR segmentu.",
      details: "• ST elevace: Konvexní (klenuté) lokalizované se zrcadlovými depresemi = STEMI; Konkávní difuzní bez zrcadlových depresí = Perikarditida; Klenuté ve V1–V2 = Brugada; Elevace bodu J s 'notchingem' = Časná repolarizace.<br>• ST deprese: Horizontální či descendentní = subendokardiální ischémie (NSTEMI, stabilní AP); Miskovité = vliv digitalisu (Digoxinu); Asymetrické s negativním T ve svodech s vysokým R = přetížení LK (strain pattern).",
      clinicalPearl: "Bod J (J-point) je přechod mezi koncem komplexu QRS a začátkem úseku ST – zde měříme elevace a deprese!"
    },
    {
      step: 8,
      title: "8. Vlna T (Rychlá repolarizace komor)",
      icon: "📉",
      rule: "Za normálních okolností je asymetrická a má stejný směr jako hlavní výchylka QRS (konkordantní).",
      details: "• Vysoké štíhlé symetrické T ('stanovité'): Hyperkalémie nebo hyperakutní fáze STEMI.<br>• Hluboké symetrické negativní T: Ischémie myokardu (Wellensův syndrom), intrakraniální krvácení (cerebrální T vlny), plicní embolie (ve V1–V4).<br>• Oploštělé T / trifázické vlny: Hypokalémie.",
      clinicalPearl: "Negativní vlna T je fyziologická pouze ve svodu aVR (kde je vše negativní) a často ve svodu V1 (u mladých žen i ve V2)."
    },
    {
      step: 9,
      title: "9. Interval QT / QTc (Elektrická systola komor)",
      icon: "🔬",
      rule: "Měří se od začátku QRS do konce vlny T. Korigovaný QTc (Bazett): QTc = QT / √RR.",
      details: "• Normální QTc: muži < 450 ms, ženy < 460 ms.<br>• Prodloužený QTc (> 500 ms = extrémní riziko): Syndrom dlouhého QT (LQTS), léky (amiodaron, sotalol, makrolidy, psychofarmaka), hypokalémie, hypokalcémie, hypomagnezémie -> Hrozí fatální polymorfní KT (Torsades de Pointes).<br>• Zkrácený QTc (< 340 ms): Hyperkalcémie, intoxikace digitalisem, vrozený SQTS.",
      clinicalPearl: "Rychlý odhad: Pokud je interval QT delší než polovina předchozího intervalu RR (při normální TF), je QTc téměř jistě prodloužený."
    },
    {
      step: 10,
      title: "10. Vlna U a doplňkové svody",
      icon: "👁️",
      rule: "Drobná pozitivní vlna následující po vlně T, nejlépe viditelná ve svodech V2–V4.",
      details: "• Prominentní vlna U (> 1–2 mm): Typická pro těžkou hypokalémii, bradykardii a léčbu antiarytmiky.<br>• Negativní vlna U: Patologická, značí těžkou ischémii myokardu nebo přetížení LK.<br>• Doplňkové svody: V7–V9 (zadní stěna u podezření na dorzální infarkt při ST depresích ve V1–V3), V3R–V6R (infarkt pravé komory u spodního STEMI).",
      clinicalPearl: "U spodního infarktu myokardu (svody II, III, aVF) VŽDY natočte pravostranné svody V3R–V6R k vyloučení infarktu pravé komory!"
    }
  ],

  anatomy: [
    {
      id: "sa-node",
      name: "Sinoatriální (SA) uzel & Síňový myokard",
      location: "Horní část pravé síně při ústí horní duté žíly",
      ecgCorrelate: "Vlna P",
      mechanism: "Spontánní depolarizace pacemakerových buněk (If 'funny' kanály). Vzruch se šíří nejprve pravou síní dolů a dopředu, a přes Bachmannův svazek do levé síně dozadu a doleva.",
      vector: "Výsledný vektor směřuje dolů, doleva a dopředu (+60°), proto je P pozitivní ve svodech I, II, aVF a negativní v aVR.",
      pathology: "Sick Sinus Syndrome (SA blokády, zástavy), síňové tachykardie, hypertrofie pravé síně (P-pulmonale) a levé síně (P-mitrale)."
    },
    {
      id: "av-node",
      name: "Atrioventrikulární (AV) uzel & Hisův svazek",
      location: "Dolní část mezisíňového septa v Kochově trojúhelníku",
      ecgCorrelate: "PQ / PR úsek (izoelektrická linie mezi koncem P a začátkem QRS)",
      mechanism: "Pomalé vedení vzruchu (zprostředkované pomalými Ca2+ kanály). Fyziologické zpoždění o ~0,08–0,12 s umožňuje dokončení síňového plnění komor.",
      vector: "Elektricky tichý na povrchovém EKG (malá masa tkáně) -> projevuje se jako izoelektrická pauza.",
      pathology: "AV blokáda I. stupně (prodloužený PR), AV blokáda II. stupně (Mobitz I / Wenckebach v AV uzlu vs. Mobitz II v Hisově svazku), AV blokáda III. stupně, AVNRT (duální AV nodální dráha)."
    },
    {
      id: "septum",
      name: "Mezikomorové septum (Tawarova raménka)",
      location: "Proximální část mezikomorového septa",
      ecgCorrelate: "Iniciální fáze QRS (kmit q v laterálních svodech / r ve V1)",
      mechanism: "Levé raménko (LBB) se dělí dříve a depolarizuje mezikomorové septum zleva doprava!",
      vector: "Iniciální septální vektor směřuje ZLEVA DOPRAVA, dopředu a nahoru. Proto vidíme drobné fyziologické q ve svodech I, aVL, V5–V6 a malý kmit r ve V1.",
      pathology: "Při LBBB zaniká fyziologické septální q (septum se depolarizuje abnormálně zprava doleva), při infarktu septa vzniká patologické Q ve V1–V2."
    },
    {
      id: "ventricles",
      name: "Volné stěny levé a pravé komory (Purkyňova vlákna)",
      location: "Subendokard -> intramurální myokard -> subepikard komor",
      ecgCorrelate: "Hlavní tělo komplexu QRS (kmit R a S)",
      mechanism: "Rychlý rozvod vzruchu Purkyňovými vlákny z endokardu k epikardu. Masa levé komory je 3× větší než pravé, proto její elektrické pole zcela dominuje.",
      vector: "Hlavní komorový vektor směřuje DOLEVA, DOLŮ a DOZADU. Proto je dominantní vysoký kmit R ve svodech V5–V6 a I, II, a hluboký kmit S ve svodech V1–V2.",
      pathology: "Hypertrofie levé komory (obří R ve V5–V6, hluboké S ve V1), LBBB (široký M-tvar QRS), RBBB (rsR' ouška ve V1 z opožděné depolarizace PK)."
    },
    {
      id: "repolarization",
      name: "Ventrikulární repolarizace",
      location: "Subepikard -> subendokard (OPAČNÝ směr než depolarizace!)",
      ecgCorrelate: "Úsek ST a vlna T",
      mechanism: "Epikardiální kardiomyocyty mají kratší akční potenciál než subendokardiální (kvůli vyššímu tlaku na subendokard během systoly). Proto repolarizace začíná na EPIKARDU a postupuje k ENDOKARDU.",
      vector: "Protože repolarizace probíhá opačným směrem s opačným elektrickým nábojem (vektor směřuje k epikardu), je výsledná vlna T POZITIVNÍ a má stejný směr jako QRS komplex (konkordance)!",
      pathology: "Ischémie (inverze T, ST elevace/deprese), prodloužení akčního potenciálu (LQTS), iontové poruchy (stanovité T u hyperkalémie)."
    }
  ],

  ionAndTemperature: [
    {
      id: "hyperkalemia",
      name: "Hyperkalémie (K⁺ > 5,5 mmol/l)",
      severity: "Kritická pohotovost",
      color: "rose",
      ecgWaveform: "Stanovité T -> Ztráta P -> Široký QRS -> Sinusoida -> Asystolie",
      changes: [
        "<strong>Mírná (5,5–6,5 mmol/l):</strong> Vysoké, úzké, symetrické a hrotnaté vlny T s úzkou bází ('stanové T' - tented T waves), nejlépe ve svodech II, III, V2–V4.",
        "<strong>Střední (6,5–7,5 mmol/l):</strong> Prodloužení intervalu PR, oploštění a postupné vymizení vln P, rozšíření komplexu QRS, ST elevace imitující STEMI.",
        "<strong>Těžká (> 7,5–8,0 mmol/l):</strong> Masivní rozšíření QRS splynuté s vlnou T do sinusoidální křivky (sine wave), komorová fibrilace nebo asystolie."
      ],
      pearl: "Okamžitá aplikace Calcium gluconicum 10% i.v. stabilizuje membránu kardiomyocytů během 1–3 minut a normalizuje EKG křivku, aniž by snížila sérový draslík!"
    },
    {
      id: "hypokalemia",
      name: "Hypokalémie (K⁺ < 3,5 mmol/l)",
      severity: "Vysoké arytmogenní riziko",
      color: "cyan",
      ecgWaveform: "Oploštění T -> Deprese ST -> Prominentní vlna U -> Fúze T-U (zdánlivé dlouhé QT)",
      changes: [
        "Oploštění až inverze vln T.",
        "Mírná deprese úseku ST (0,5–1,0 mm).",
        "Vznik prominentní <strong>vlny U</strong> (výška > 1 mm, často vyšší než samotné oploštělé T ve V2–V3).",
        "Zdánlivé prodloužení QT intervalu (ve skutečnosti jde o interval QU způsobený splynutím T a U vlny).",
        "Vysoké riziko supraventrikulárních i komorových arytmií, zvláště při současné léčbě digitalisem!"
      ],
      pearl: "Hypokalémie + Digoxin = extrémní toxicita a riziko fatálních arytmií (komorová bigeminie, obousměrná komorová tachykardie)."
    },
    {
      id: "hypercalcemia",
      name: "Hyperkalcémie (Ca²⁺ > 2,6 mmol/l)",
      severity: "Zkrácení refrakterní periody",
      color: "amber",
      ecgWaveform: "Extrémní zkrácení intervalu ST a QT intervalu",
      changes: [
        "Výrazné <strong>zkrácení intervalu QT / QTc</strong> (< 360 ms).",
        "Úsek ST je prakticky nepřítomný – vlna T začíná bezprostředně na konci komplexu QRS.",
        "Při těžké hyperkalcémii (> 3,5 mmol/l) se může objevit rozšíření QRS, bradykardie, AV blokády a elevation bodu J imitující infarkt."
      ],
      pearl: "Při nálezu nápadně krátkého QT na EKG vždy odeberte iontogram a kalcium k vyloučení primárního hyperparatyreoidismu nebo malignity!"
    },
    {
      id: "hypocalcemia",
      name: "Hypokalcémie (Ca²⁺ < 2,1 mmol/l)",
      severity: "Prodloužení plató fáze akčního potenciálu",
      color: "purple",
      ecgWaveform: "Prodloužení ST úseku s normální tloušťkou vlny T -> Prodloužený QT interval",
      changes: [
        "Výrazné <strong>prodloužení intervalu QT / QTc</strong>.",
        "Důležité: Prodloužení QT je způsobeno <strong>izolovaným prodloužením izoelektrického ST segmentu</strong>, zatímco samotná vlna T má normální tvar a šířku (na rozdíl od hypokalémie, kde se mění tvar T a vzniká vlna U).",
        "Riziko vzniku maligních komorových arytmií (Torsades de Pointes)."
      ],
      pearl: "Hypokalcémie prodlužuje fázi 2 (plató) akčního potenciálu kardiomyocytů (pomalý vtok Ca2+)."
    },
    {
      id: "hypothermia",
      name: "Hypotermie (Teplota jádra < 32–35 °C)",
      severity: "Enviromentální kardiální deprese",
      color: "blue",
      ecgWaveform: "Osbornova vlna (J-vlna) + Sinusová bradykardie + Třesové artefakty + Prodloužení všech intervalů",
      changes: [
        "<strong>Osbornova vlna (J-vlna):</strong> Patognomická pozitivní výchylka / hrb na přechodu konce QRS a začátku ST úseku, nejvýraznější v prekordiálních svodech V3–V6 a končetinových II, III, aVF. Její výška koreluje s hloubkou hypotermie.",
        "Progresivní sinusová bradykardie (při hluboké hypotermii přechod do fibrilace síní s pomalou komorovou odpovědí).",
        "Prodloužení všech intervalů: PR, QRS i QT intervalu.",
        "Artefakty ze svalového třesu na izoelektrické linii imitující fibrilaci síní."
      ],
      pearl: "Při těžké hypotermii (< 28 °C) je myokard extrémně citlivý na mechanické podráždění (např. zavedení CŽK) s rizikem vyvolání refrakterní fibrilace komor!"
    }
  ],

  syndromesAndCongenital: [
    {
      id: "brugada",
      name: "Brugada syndrom",
      type: "Dědičná kanálopatie (SCN5A - Na⁺ kanál)",
      icon: "⚡",
      ecgCriteria: "Typ 1 (diagnostický): Klenutá (coved-type) ST elevace ≥ 2 mm plynule přecházející do negativní vlny T ve svodech V1–V2 (případně umístěných do 2. a 3. mezižebří). Typ 2 (saddleback): Sedlovitá ST elevace ≥ 0,5 mm s pozitivní nebo bifázickou vlnou T.",
      clinicalPresentation: "Mladí pacienti (častěji muži asijského původu) s náhlou synkopou v klidu nebo ve spánku, rodinná anamnéza náhlé srdeční smrti. Arytmie: polymorfní komorová tachykardie a fibrilace komor.",
      triggers: "Horečka (horečka demaskuje EKG obraz!), alkohol, přejedení, léky blokující sodíkový kanál (ajmalin, flekainid, tricyklická antidepresiva).",
      management: "Při zástavě či synkopě indikace k implantaci ICD (implantabilní kardioverter-defibrilátor). Akutní léčba arytmické bouře: i.v. Isoprenalin nebo chinidin. Okamžitá antipyretická léčba při horečce!"
    },
    {
      id: "wpw",
      name: "WPW syndrom (Wolff-Parkinson-White)",
      type: "Vrozená přídatná atrioventrikulární dráha (Kentův svazek)",
      icon: "⚡",
      ecgCriteria: "Klasická triáda: 1. Zkrácený interval PR (< 120 ms), 2. Delta vlna (pomalý náběh vzestupné části kmitu R způsobený předčasnou depolarizací komory přes Kentův svazek), 3. Rozšířený QRS komplex (> 110–120 ms) se sekundárními ST-T změnami.",
      clinicalPresentation: "Záchvaty palpitací u mladých lidí (ortodromní nebo antidromní AVRT).",
      dangerAlert: "🚨 <strong>Fibrilace síní u WPW (FBI - Fast, Broad, Irregular):</strong> Extrémně nebezpečná arytmie! Převod přes přídatnou dráhu může dosáhnout frekvence > 250–300/min a přejít do fibrilace komor. <strong>ZÁKAZ AV blokátorů (Adenosin, Verapamil, Digoxin, Betablokátory)</strong>! Lékem volby je urgentní elektrická kardioverze nebo i.v. Ibutilid / Prokainamid.",
      management: "Kurativní léčba první volby: Radiofrekvenční katetrizační ablace přídatné dráhy (úspěšnost > 95 %)."
    },
    {
      id: "lqts",
      name: "Syndrom dlouhého QT (LQTS)",
      type: "Genetické kanálopatie (LQT1–LQT3) & Získané polékové formy",
      icon: "🧬",
      ecgCriteria: "Prodloužení korigovaného QTc intervalu > 460–480 ms (hodnoty > 500 ms = vysoké riziko Torsades de Pointes). LQT1: široká symetrická vlna T (spouštěčem je námaha a plavání). LQT2: oploštělá, vroubkovaná/dvouvrcholová vlna T (spouštěčem je sluchový podnět - budík, telefon, leknutí). LQT3: dlouhý izoelektrický ST segment a pozdní úzká vlna T (spouštěčem je spánek a klid).",
      clinicalPresentation: "Synkopy při emočním vypětí, námaze nebo zvukovém šoku, náhlá smrt v mladém věku.",
      management: "Neselektivní betablokátory (Nadolol, Propranolol), zákaz rizikových léků (databáze CredibleMeds), suplementace magnézia a kalia, při vysokém riziku ICD."
    },
    {
      id: "arvc",
      name: "Arytmogenní kardiomyopatie pravé komory (ARVC / ARVD)",
      type: "Genetické onemocnění desmozomů (Plakoglobin, Desmoplakin)",
      icon: "💔",
      ecgCriteria: "1. <strong>Vlna Epsilon (Epsilon wave):</strong> Drobné vroubkování / zářez na konci komplexu QRS na přechodu do ST segmentu ve svodech V1–V3 (vyskytuje se až u 30 % pacientů). 2. Inverze vln T v pravostranných svodech V1–V3 u osob starších 14 let. 3. Prodloužený terminální aktivační interval (S-upstroke) > 55 ms ve V1–V3.",
      clinicalPresentation: "Mladí sportovci s palpitacemi, komorovými tachykardiemi s morfologií LBBB (původ v PK) a náhlou srdeční smrtí při sportovní zátěži.",
      management: "Zákaz vrcholového a soutěžního sportu, betablokátory, katetrizační ablace komorových tachykardií, implantace ICD."
    },
    {
      id: "early-repoc",
      name: "Syndrom časné repolarizace (Early Repolarization Pattern)",
      type: "Elektrofyziologická varianta (benigní vs. maligní)",
      icon: "✨",
      ecgCriteria: "Elevace bodu J ≥ 1 mm ve 2 sousedních svodech s typickým zářezem (notching) nebo zaoblením (slurring) na sestupném raménku kmitu R, následovaná konkávní elevací ST úseku a vysokou pozitivní vlnou T.",
      clinicalPresentation: "Nejčastěji benigní nález u mladých trénovaných sportovců ve svodech V2–V5 (vyvolaný vysokým tonem vagu).",
      management: "U asymptomatických mladých sportovců se jedná o normální variantu nevyžadující žádnou léčbu ani omezení sportu."
    }
  ],

  pacemakers: [
    {
      id: "vvi-apex",
      name: "VVI - Jednodutinová stimulace pravé komory z hrotu (RV Apex Pacing)",
      recognitionLevel: "Snadno poznatelné (Klasický nález)",
      recognitionBadge: "easy",
      code: "VVI (Ventricle paced, Ventricle sensed, Inhibited)",
      icon: "⚡",
      waveformTag: "Ostrý Spike -> Široký QRS (>140 ms) s obrazem LBBB -> Hluboké S ve V1 -> Osa doleva nahoru",
      leadDetails: "Svod V1: hluboký rozeklaný QS/S komplex. Svody I, aVL: široký pozitivní kmit R. Osa: sklon doleva nahoru (-30° až -90°).",
      leadMarkers: [
        { label: "Pacing Spike", desc: "Vysoký vertikální zářez (artefakt) těsně před začátkem QRS" },
        { label: "Široký QRS (>140 ms)", desc: "Morfologie blokády levého raménka (LBBB pattern)" },
        { label: "Diskordantní T", desc: "ST deprese a negativní T vlna směřující opačně než hlavní kmit QRS" }
      ],
      leadOrigin: "Elektroda zašroubována v hrotu (apexu) pravé komory",
      mechanism: "Vzruch nevzniká v převodním systému, ale v myokardu hrotu pravé komory. Odtud se šíří pomalým nespecializovaným svalovým vedením (myocyt od myocytu rychlostí jen 0,5 m/s) zdola nahoru a zprava doleva (do levé komory). Proto je komorový komplex výrazně široký a připomíná blokádu levého raménka.",
      vectorLogic: "Vektor směřuje OD hrotu PK (odpředu a zdola) K bázi LK (dozadu, doleva a nahoru). Proto je ve svodu V1 hluboké negativní S a ve svodu I a aVL vysoké R.",
      clinicalPearl: "Dlouhodobá vysokoprocentní stimulace z apexu PK vyvolává elektrickou a mechanickou dyssynchronii levé komory (tzv. pacing-induced cardiomyopathy). Dnes se proto preferuje stimulace septa nebo převodního systému (CSP)."
    },
    {
      id: "aai",
      name: "AAI - Síňová stimulace (Atrial Pacing)",
      recognitionLevel: "Středně snadné (Při slabém spiku lze přehlédnout)",
      recognitionBadge: "medium",
      code: "AAI (Atrium paced, Atrium sensed, Inhibited)",
      icon: "🫀",
      waveformTag: "Síňový Spike -> Vlna P -> Normální štíhlý QRS komplex (<100 ms)",
      leadDetails: "Svody II, III, aVF: vertikální spike předcházející vlnu P. Následuje normální fyziologický interval PR a zcela normální štíhlý komplex QRS.",
      leadMarkers: [
        { label: "Atriální Spike", desc: "Drobný ostrý kmit těsně před začátkem vlny P" },
        { label: "Stimulovaná P vlna", desc: "Morfologie závisí na poloze elektrody v síni" },
        { label: "Štíhlý QRS (<100 ms)", desc: "Intaktní fyziologický převod přes AV uzel a Tawarova raménka" }
      ],
      leadOrigin: "Elektroda v oušku pravé síně (RA appendage) nebo v mezisíňovém septu",
      mechanism: "Používá se u izolované dysfunkce sinusového uzlu (Sick Sinus Syndrome) se zachovalým intaktním AV převodem. Stimulátor dodá impulz do síně, vznikne vlna P a vzruch dále pokračuje přirozenou cestou přes AV uzel, Hisův svazek a Tawarova raménka do komor.",
      vectorLogic: "Síňový vektor se šíří z ouška PS přes síně; komorový vektor je zcela fyziologický, protože komory jsou aktivovány normálním His-Purkyňovým systémem.",
      clinicalPearl: "Pokud u pacienta s AAI stimulátorem dojde k progresi do AV blokády, komory nebudou stimulovány! Proto se dnes u většiny pacientů rovnou volí dvoudutinový systém DDD."
    },
    {
      id: "ddd-dual",
      name: "DDD - Dvoudutinová sekvenční AV stimulace (Dual-Chamber Pacing)",
      recognitionLevel: "Velmi snadné při AV stimulaci (2 spiky)",
      recognitionBadge: "easy",
      code: "DDD (Atrium & Ventricle paced, sensed, dual tracked)",
      icon: "⚡",
      waveformTag: "Síňový Spike -> P vlna -> AV zpoždění (150-200 ms) -> Komorový Spike -> Široký QRS",
      leadDetails: "Při plné oboustranné stimulaci (Ap-Vp) vidíme dvojici spiků: první před vlnou P, druhý po nastaveném intervalu AV zpoždění před širokým QRS.",
      leadMarkers: [
        { label: "1. Síňový Spike (Ap)", desc: "Spustí síňovou kontrakci pro zachování 'atrial kick' (+20 % plnění komor)" },
        { label: "Programované AV zpoždění", desc: "Elektronicky napodobené zpoždění v AV uzlu" },
        { label: "2. Komorový Spike (Vp)", desc: "Spustí komorový komplex s morfologií LBBB" }
      ],
      leadOrigin: "Dvě elektrody: jedna v pravé síni, druhá v pravé komoře",
      mechanism: "Umožňuje 4 různé pracovní stavy dle vlastní srdeční aktivity: 1. As-Vs (jen hlídá, žádný spike), 2. As-Vp (snímá vlastní P a stimuluje komoru po AV bloku), 3. Ap-Vs (stimuluje síň při sinusové bradykardii a komora se stáhne sama), 4. Ap-Vp (stimuluje síň i komoru).",
      vectorLogic: "Při Ap-Vp kombinuje umělou depolarizaci síně a následnou umělou depolarizaci komory z hrotu PK.",
      clinicalPearl: "DDD zachovává fyziologickou sekvenci síně-komory a zabraňuje vzniku 'pacemakerového syndromu' (který vzniká u VVI při asynchronní kontrakci síní proti uzavřeným chlopním)."
    },
    {
      id: "biv-crt",
      name: "BiV / CRT - Biventrikulární stimulace / Srdeční resynchronizace (CRT-P / CRT-D)",
      recognitionLevel: "Střední až pokročilé (Hledejte pozitivní R ve V1 a užší QRS)",
      recognitionBadge: "medium",
      code: "BiV / CRT (Biventricular Pacing)",
      icon: "🔄",
      waveformTag: "Pacing Spikes -> Dominantní kmit R ve svodu V1 -> Užší QRS než u čisté RV stimulace",
      leadDetails: "Svod V1: pozitivní kmit R nebo tvar RSR' (na rozdíl od hlubokého QS u VVI!). Osa: sklon doprava. Šířka QRS: zkrácení QRS oproti výchozímu LBBB.",
      leadMarkers: [
        { label: "Biventrikulární Spike", desc: "Současný (nebo s mikrosekundovým odstupem LV-RV) stimulační artefakt" },
        { label: "Pozitivní R ve V1", desc: "Důkaz aktivace levé komory z posterolaterální stěny směrem k pravostranným svodům" },
        { label: "Resynchronizovaný QRS", desc: "Užší komplex díky současné aktivaci obou komor ze dvou stran" }
      ],
      leadOrigin: "Tři elektrody: 1. Pravá síň, 2. Pravá komora, 3. Levá komora zavedená přes sinus coronarius na posterolaterální epikard LK",
      mechanism: "U pacientů se srdečním selháním a LBBB dochází k opožděné kontrakci boční stěny LK. CRT stimuluje pravou komoru (endokardiálně) a levomodukovanou laterální stěnu LK (epikardiálně přes koronární sinus) současně. Obě stěny se stáhnou naráz, což obnoví synchronní mechanickou pumpu srdce.",
      vectorLogic: "Protože elektroda LK stimuluje laterální stěnu zleva doprava a odpředu, výsledný vektor směřuje k pravostrannému svodu V1 → to vytváří dominantní pozitivní kmit R ve V1 (klíčový diagnostický znak stimulace levé komory!).",
      clinicalPearl: "Pozitivní kmit R ve svodu V1 na EKG se stimulátorem je nejdůležitějším vodítkem, že je aktivní levokomorová (biventrikulární) stimulace!"
    },
    {
      id: "csp-his-lbbp",
      name: "CSP - Fyziologická stimulace převodního systému (His-Bundle & LBBAP)",
      recognitionLevel: "VELMI OBTÍŽNÉ / CHYTÁK! (Štíhlý QRS, spike je nenápadný)",
      recognitionBadge: "hard",
      code: "CSP (Conduction System Pacing: HBP / LBBAP)",
      icon: "🎯",
      waveformTag: "Nenápadný mikro-spike -> ŠTÍHLÝ FYZIOLOGICKÝ QRS (<100-115 ms) -> Normální osa a T vlna",
      leadDetails: "Při stimulaci Hisova svazku (HBP) je tvar QRS zcela k nerozeznání od normálního nativního štíhlého EKG. Při LBBAP (stimulace oblasti levého raménka) může být diskrétní obraz rSr' ve V1, ale s normálním časem k vrcholu R ve V6 (<75 ms).",
      leadMarkers: [
        { label: "Diskrétní mikro-spike", desc: "Moderní bipolární nízkoenergetický spike, na standardním EKG často sotva postřehnutelný" },
        { label: "Štíhlý fyziologický QRS", desc: "Trvání <100–120 ms, zachovaná normální osa i repolarizace" },
        { label: "Fyziologická synchronie", desc: "Žádný obraz LBBB ani opoždění volné stěny" }
      ],
      leadOrigin: "Elektroda zašroubována přímo do Hisova svazku nebo hluboko transseptálně z pravé komory až k subendokardu levého raménka (LBBA)",
      mechanism: "Nejmodernější metoda kardiostimulace 21. století. Místo nefyziologické stimulace myokardu se elektroda napojí přímo na intaktní specializovaný převodní systém. Elektrický vzruch běží superrychlými Purkyňovými vlákny (2–4 m/s) a aktivuje obě komory v dokonalé fyziologické harmonii.",
      vectorLogic: "Vektor se šíří přirozenou anatomickou cestou Tawarových ramének z mezikomorového septa k volným stěnám obou komor. Výsledkem je normální fyziologický vektor depolarizace.",
      clinicalPearl: "⚠️ POZOR NA CHYTÁK U STÁTNIC / ZKOUŠKY! Když vidíte štíhlý normální QRS, pozorně se podívejte před jeho začátek na izoelektrickou čáru. Pokud je tam drobný ostrý vertikální spike, jde o fyziologickou stimulaci Hisova svazku (CSP), nikoliv o běžné sinusové EKG!"
    },
    {
      id: "pm-failure-capture",
      name: "Porucha: Ztráta záchytu (Failure to Capture)",
      recognitionLevel: "Snadno poznatelná závažná porucha",
      recognitionBadge: "danger",
      code: "Malfunction: Loss of Capture",
      icon: "🚨",
      waveformTag: "Ostrý Pacing Spike na izoelektrické linii -> ŽÁDNÁ P vlna ani QRS komplex -> Asystolická pauza",
      leadDetails: "Na EKG vidíme v pravidelném intervalu stimulační artefakt (spike), ale myokard na něj elektricky vůbec neodpoví (linie zůstává plochá).",
      leadMarkers: [
        { label: "Osiřelý Pacing Spike", desc: "Stimulátor impuls vyslal, ale tkáň se nedepolarizovala" },
        { label: "Chybějící odpověď myokardu", desc: "Nenásleduje P vlna (u síňové) ani QRS (u komorové stimulace)" },
        { label: "Hrozící bradykardie / asystolie", desc: "Pacient může kolabovat (Adam-Stokesův záchvat)" }
      ],
      leadOrigin: "Dislokace elektrody, fibróza v místě kontaktu (exit block), vzestup prahu stimulace, infarkt myokardu v místě hrotu, těžká hyperkalémie",
      mechanism: "Stimulátor funguje a vyšle naprogramovaný elektrický impuls. Impuls však nedosáhne prahového napětí potřebného k vyvolání akčního potenciálu okolních kardiomyocytů, nebo je elektroda mechanicky uvolněná mimo stěnu srdce.",
      vectorLogic: "Žádný depolarizační vektor nevzniká.",
      clinicalPearl: "Při akutním záchytu zkontrolujte hladinu draslíku (hyperkalémie dramaticky zvyšuje stimulační práh!) a polohu elektrody na RTG hrudníku."
    },
    {
      id: "pm-undersensing",
      name: "Porucha: Nedostatečné snímání / 'Slepý stimulátor' (Undersensing)",
      recognitionLevel: "Vysoké arytmogenní riziko (R-na-T fenomén)",
      recognitionBadge: "danger",
      code: "Malfunction: Undersensing (Failure to Sense)",
      icon: "⚠️",
      waveformTag: "Asynchronní Spikes padající do vlastních QRS a T vln -> Riziko fibrilace komor!",
      leadDetails: "Stimulátor ignoruje vlastní spontánní srdeční stahy pacienta a střílí spiky s pevnou frekvencí bez ohledu na probíhající depolarizaci.",
      leadMarkers: [
        { label: "Asynchronní Spike", desc: "Spike dopadá těsně za vlastní kmit R nebo přímo na vrchol vlny T" },
        { label: "R-na-T fenomén", desc: "Elektrický impuls do vulnerabilní fáze repolarizace komor" },
        { label: "Spouštěč komorové tachykardie", desc: "Může okamžitě indukovat polymorfní KT nebo komorovou fibrilaci" }
      ],
      leadOrigin: "Chybně nastavená citlivost (příliš vysoký práh mV), pokles voltáže nativního signálu, poškození izolačního pláště elektrody",
      mechanism: "Za normálních okolností stimulátor 'poslouchá' vlastní elektrickou aktivitu srdce a pokud pacient vytvoří vlastní stah, stimulaci inhibuje. Při undersensingu je přístroj 'hluchý/slepý' a pokračuje v asynchronní stimulaci.",
      vectorLogic: "Nahodilý souboj mezi vlastním šířením vzruchu a umělým ektopickým vektorem stimulátoru.",
      clinicalPearl: "Undersensing je extrémně nebezpečný právě kvůli riziku zásahu do vlny T (tzv. R-na-T fenomén), který je klasickým spouštěčem maligní fibrilace komor!"
    },
    {
      id: "pm-oversensing",
      name: "Porucha: Přestřelování / 'Příliš vyděšený stimulátor' (Oversensing)",
      recognitionLevel: "Středně snadné (Pauzy na EKG bez spikeu)",
      recognitionBadge: "warning",
      code: "Malfunction: Oversensing",
      icon: "🛑",
      waveformTag: "Chybění očekávaného spiku -> Neadekvátní asystolická pauza -> Synkopa u pacemaker-dependentního pacienta",
      leadDetails: "Při poklesu tepové frekvence pod nastavený limit stimulátor NESPUSTÍ stimulaci, protože mylně 'vidí' elektrický signál tam, kde žádný stah neproběhl.",
      leadMarkers: [
        { label: "Chybějící Spike v pauze", desc: "Frekvence klesne pod dolní limit, ale stimulátor nestimuluje" },
        { label: "Falešný signál", desc: "Způsoben myopotenciály z velkého prsního svalu, T-vlnou nebo elektromagnetickým rušením" },
        { label: "Inhibice stimulace", desc: "Přístroj se mylně domnívá, že srdce se právě stáhlo samo" }
      ],
      leadOrigin: "Přecitlivěle nastavená detekce (příliš nízký práh mV), zlomený vodič elektrody generující falešný šum, svalové myopotenciály při cvičení paží",
      mechanism: "Stimulátor detekuje cizí elektrické signály (např. kontrakci m. pectoralis major při zvedání břemene nebo vysokou vlnu T) a vyhodnotí je jako vlastní komorový kmit R. V reakci na to správně (ale na základě falešného vstupu) inhibuje stimulaci, což vede k asystolii.",
      vectorLogic: "Absence jakéhokoliv vektoru, izoelektrická čára.",
      clinicalPearl: "Typický test u lůžka: nechte pacienta zatnout prsní svaly (přitlačit dlaně k sobě) nebo hýbat paží. Pokud se na monitoru objeví asystolická pauza a vynechání stimulace, jde o myopotenciálový oversensing!"
    }
  ],

  masterclassQuiz: [
    {
      id: "emq-1",
      question: "Který EKG fenomén vzniká opožděnou depolarizací mezikomorového septa zleva doprava a proč chybí při blokádě levého raménka (LBBB)?",
      options: [
        { text: "A) Fyziologický kmit q v laterálních svodech (I, aVL, V5-V6) – při LBBB se septum depolarizuje abnormálně zprava doleva z pravého raménka.", isCorrect: true },
        { text: "B) Vlna Epsilon – při LBBB je překryta depolarizací volné stěny.", isCorrect: false },
        { text: "C) Kmit S ve svodu V1 – při LBBB se mění na vysoký kmit R.", isCorrect: false },
        { text: "D) Vlna U – při LBBB mizí kvůli zkrácení repolarizace.", isCorrect: false }
      ],
      explanation: "Za normálních okolností se mezikomorové septum depolarizuje jako první zleva doprava přes vlákna levého raménka, což vytváří drobný negativní kmit q ve svodech I, aVL, V5-V6. Při LBBB je levé raménko nefunkční, septum se depolarizuje abnormálně zprava doleva, a proto normální septální q vymizí!"
    },
    {
      id: "emq-2",
      question: "24letý muž přivezen po synkopě při horečnaté viróze. EKG ve svodech V1–V2 ukazuje klenutou elevaci bodu J o 3 mm s negativní vlnou T. O jaký syndrom se jedná a jaký je okamžitý krok?",
      options: [
        { text: "A) Brugada syndrom typ 1 – okamžité podání antipyretik k sražení horečky a hospitalizace na telemetrii", isCorrect: true },
        { text: "B) Akutní STEMI přední stěny – okamžitá koronarografie", isCorrect: false },
        { text: "C) Akutní perikarditida – vysoké dávky ibuprofenu a kolchicinu", isCorrect: false },
        { text: "D) WPW syndrom – podání adenosinu", isCorrect: false }
      ],
      explanation: "Jedná se o Brugada syndrom Typ 1 (klenutá ST elevace ve V1-V2). Horečka je klíčovým spouštěčem arytmií a demaskuje Brugada EKG obraz zhoršením inaktivace Na+ kanálu. Okamžitá antipyretická terapie je zásadní pro snížení rizika komorové fibrilace!"
    },
    {
      id: "emq-3",
      question: "U pacienta s těžkou hypotermií (teplota těla 29 °C) nacházíte na EKG bradykardii a prominentní vlnu na přechodu QRS a ST úseku. Jak se tato vlna nazývá?",
      options: [
        { text: "A) Osbornova vlna (J-vlna)", isCorrect: true },
        { text: "B) Vlna Epsilon", isCorrect: false },
        { text: "C) Delta vlna", isCorrect: false },
        { text: "D) Vlna U", isCorrect: false }
      ],
      explanation: "Osbornova vlna (J-wave) je patognomickým znakem hypotermie. Vzniká na přechodu QRS a ST segmentu v důsledku výrazného napěťového gradientu mezi epikardem a endokardem při nízké tělesné teplotě."
    },
    {
      id: "emq-4",
      question: "Proč je u pacienta s fibrilací síní a preexcitací (WPW syndrom - nepravidelná širokokomplexová tachykardie s TF 260/min) přísně zakázáno podat Adenosin nebo Verapamil?",
      options: [
        { text: "A) Blokáda AV uzlu přesměruje veškeré síňové vzruchy do přídatné Kentovy dráhy, což může vést k okamžitému přechodu do fibrilace komor a srdeční zástavě.", isCorrect: true },
        { text: "B) Tyto léky způsobují masivní hyperkalémii.", isCorrect: false },
        { text: "C) Vyvolávají rupturu mezikomorového septa.", isCorrect: false },
        { text: "D) Blokují beta receptory v plicích a způsobí bronchospasmus.", isCorrect: false }
      ],
      explanation: "U fibrilace síní s WPW (tzv. FBI tachykardie - Fast, Broad, Irregular) chrání AV uzel komory tím, že část vzruchů nepropustí. Pokud AV uzel zablokujeme adenosinem nebo verapamilem, všechny vzruchy s frekvencí 300–400/min projdou bez odporu Kentovým svazkem přímo na komory a vyvolají komorovou fibrilaci! Lékem volby je elektrická kardioverze nebo Ibutilid."
    },
    {
      id: "emq-5",
      question: "Prohlížíte EKG pacienta s implantovaným kardiostimulátorem. Komplex QRS je štíhlý (<110 ms) a tvarově k nerozeznání od normálního sinusového rytmu, ale před každým QRS je drobný ostrý vertikální mikro-spike. O jaký typ stimulace se jedná?",
      options: [
        { text: "A) Fyziologická stimulace převodního systému (His-Bundle Pacing / CSP)", isCorrect: true },
        { text: "B) Klasická VVI stimulace z hrotu pravé komory", isCorrect: false },
        { text: "C) Izolovaná stimulace levé komory přes sinus coronarius", isCorrect: false },
        { text: "D) Ztráta záchytu (Failure to capture)", isCorrect: false }
      ],
      explanation: "Jedná se o fyziologickou stimulaci převodního systému (His-Bundle Pacing nebo LBBAP). Díky přímému napojení elektrody na Hisův svazek se vzruch šíří fyziologickou rychlostí přes Purkyňova vlákna a vytváří štíhlý, fyziologický QRS komplex, na rozdíl od širokého LBBB obrazu při stimulaci z hrotu PK!"
    },
    {
      id: "emq-6",
      question: "Který EKG znak je klíčovým důkazem správné funkce a stimulace levé komory u biventrikulárního stimulátoru (CRT)?",
      options: [
        { text: "A) Dominantní pozitivní kmit R ve svodu V1 (nebo RSR' tvar)", isCorrect: true },
        { text: "B) Hluboký kmit QS ve svodech I a aVL", isCorrect: false },
        { text: "C) Úplné vymizení vln P ve všech svodech", isCorrect: false },
        { text: "D) Zkrácení QT intervalu pod 300 ms", isCorrect: false }
      ],
      explanation: "Při biventrikulární stimulaci (CRT) elektroda v sinus coronarius stimuluje posterolaterální stěnu levé komory zleva doprava směrem k pravostrannému svodu V1. To vytváří dominantní pozitivní kmit R ve svodu V1, což je klíčový EKG marker aktivní stimulace levé komory!"
    }
  ]
};

// Export pro globální i modulární použití
if (typeof window !== "undefined") {
  window.CARDIOLOGY_DATA = CARDIOLOGY_DATA;
  window.EKG_MASTERCLASS_DATA = EKG_MASTERCLASS_DATA;
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = { CARDIOLOGY_DATA, EKG_MASTERCLASS_DATA };
}

