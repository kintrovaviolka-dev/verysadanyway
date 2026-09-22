// data.js - Kompletní databáze Kardiologie pro 4. ročník všeobecného lékařství
// 12 modulů (3-fázový rozpad: Teorie/Learn -> Active Recall -> Final Breakdown/Tahák) + 115+ Spaced Repetition karet
// Aktualizováno dle nejnovějších ESC Guidelines (2023–2026)

const CARDIOLOGY_DATA = {
  modules: [
  {
    "id": "aks",
    "number": 1,
    "title": "Akutní koronární syndromy (AKS)",
    "shortDesc": "STEMI, NSTEMI a nestabilní AP. 2023 ESC Guidelines, 0h/1h hs-cTn algoritmus, načasování SKG, DAPT strategie, pre-treatment a sekundární prevence.",
    "icon": "🫀",
    "badge": "2023 ESC Guidelines",
    "badgeColor": "rose",
    "theory": {
      "banner": {
        "tag": "Hlavní změna paradigmatu (2023 ESC Guidelines)",
        "title": "AKS jako jedno integrované spektrum onemocnění",
        "text": "Poprvé ESC spojila doporučení pro STEMI i NSTEMI do jednoho společného dokumentu (ESC 2023 ACS Guidelines). Akutní koronární syndrom představuje kontinuum od nestabilní anginy pectoris přes NSTEMI až po transmurální STEMI, sdílející společný patofyziologický podklad (ruptura či eroze aterosklerotického plátu s nasedající intraluminální trombózou)."
      },
      "sections": [
        {
          "title": "1. Patofyziologie & Triáž: STEMI vs. NSTE-AKS",
          "color": "rose",
          "content": "\n                            <p class=\"mb-3 text-slate-300 leading-relaxed\">\n                                Patofyziologicky rozlišujeme <strong>rupturu plátu</strong> (častější u mužů s tenkou fibrózní čepičkou a velkým lipidovým jádrem), <strong>erozi plátu</strong> (častější u žen a mladších kuřáků s intaktní fibrózní čepičkou) a <strong>kalcifikovaný uzlík</strong>.\n                            </p>\n                            <div class=\"grid md:grid-cols-2 gap-3 my-3 text-xs\">\n                                <div class=\"p-3.5 bg-rose-950/40 border border-rose-500/30 rounded-xl\">\n                                    <span class=\"font-bold text-rose-400 text-sm\">🚨 STEMI (ST-Elevation MI)</span>\n                                    <p class=\"text-slate-300 mt-1 leading-relaxed\">Úplný transmurální uzávěr epikardiální koronární tepny červeným trombem bohatým na fibrin. Okamžitá indikace k reperfuzi (primární PCI do 90 min od diagnózy, resp. 60 min v PCI centru).</p>\n                                </div>\n                                <div class=\"p-3.5 bg-amber-950/40 border border-amber-500/30 rounded-xl\">\n                                    <span class=\"font-bold text-amber-400 text-sm\">⚠️ NSTE-AKS (NSTEMI & Nestabilní AP)</span>\n                                    <p class=\"text-slate-300 mt-1 leading-relaxed\">Subtotální okluze tepny bílým destičkovým trombem nebo distální mikroembolizace. Rozlišení NSTEMI vs. NAP závisí na pozitivitě vysoce senzitivního troponinu (hs-cTn).</p>\n                                </div>\n                            </div>\n                        "
        },
        {
          "title": "2. Rychlá diagnostika: 0h / 1h a 0h / 2h hs-cTn algoritmus",
          "color": "emerald",
          "content": "\n                            <p class=\"mb-3 text-slate-300 text-xs leading-relaxed\">\n                                Základem rychlé diagnostiky u NSTE-AKS je stanovení <strong>vysoce senzitivního srdečního troponinu (hs-cTnI / hs-cTnT)</strong>. ESC doporučuje prioritně <strong>0h / 1h algoritmus</strong> (případně 0h / 2h):\n                            </p>\n                            <div class=\"grid md:grid-cols-3 gap-3 my-3\">\n                                <div class=\"bg-emerald-950/40 border border-emerald-500/30 p-3.5 rounded-xl\">\n                                    <div class=\"text-emerald-400 font-bold mb-1 text-xs\">📉 RULE-OUT (Vyloučení)</div>\n                                    <p class=\"text-[11px] text-slate-300 leading-relaxed\">Vstupní hs-cTn je <strong>extrémně nízký</strong> (např. hs-cTnT &lt; 5 ng/l) <strong>NEBO</strong> vstupní hs-cTn je nízký a po 1h nedošlo k žádnému nárůstu (Δ1h pod cut-off mezí). Pacient může být po vyloučení jiné patologie bezpečně propuštěn k ambulantnímu došetření.</p>\n                                </div>\n                                <div class=\"bg-amber-950/40 border border-amber-500/30 p-3.5 rounded-xl\">\n                                    <div class=\"text-amber-400 font-bold mb-1 text-xs\">👀 OBSERVE (Pozorování)</div>\n                                    <p class=\"text-[11px] text-slate-300 leading-relaxed\">Pacienti nesplňující kritéria pro rule-out ani rule-in. Vyžadují <strong>třetí odběr hs-cTn za 3 hodiny</strong> a urgentní echokardiografii (TTE) k posouzení kinetiky levé komory.</p>\n                                </div>\n                                <div class=\"bg-rose-950/40 border border-rose-500/30 p-3.5 rounded-xl\">\n                                    <div class=\"text-rose-400 font-bold mb-1 text-xs\">📈 RULE-IN (Potvrzení)</div>\n                                    <p class=\"text-[11px] text-slate-300 leading-relaxed\">Vstupní hodnota hs-cTn je <strong>výrazně zvýšená</strong> (např. hs-cTnT &ge; 52 ng/l) <strong>NEBO</strong> je přítomen signifikantní vzestup za 1 hodinu (Δ1h &ge; 5 ng/l). Okamžitá indikace k hospitalizaci na koronární jednotce a invazivní SKG.</p>\n                                </div>\n                            </div>\n                        "
        },
        {
          "title": "3. Načasování invazivní koronarografie (SKG) & Reperfuze",
          "color": "amber",
          "content": "\n                            <div class=\"space-y-3 text-xs\">\n                                <div class=\"p-3.5 rounded-xl bg-rose-950/40 border border-rose-500/40\">\n                                    <div class=\"font-bold text-rose-400 mb-1\">🚨 Okamžitá invazivní strategie (&lt; 2 hodiny - Emergency)</div>\n                                    <p class=\"text-slate-300 mb-2\"><strong>Všichni pacienti se STEMI</strong> a <strong>NSTE-AKS s velmi vysokým rizikem</strong>:</p>\n                                    <ul class=\"list-disc ml-5 text-slate-300 space-y-1\">\n                                        <li>Kardiogenní šok nebo hemodynamická nestabilita.</li>\n                                        <li>Refrakterní či rekurentní klidová stenokardie vzdorující farmakoterapii.</li>\n                                        <li>Život ohrožující arytmie (fibrilace komor, setrvalá komorová tachykardie) nebo oběhová zástava.</li>\n                                        <li>Mechanické komplikace infarktu (ruptura papilárního svalu, defekt septa).</li>\n                                        <li>Akutní srdeční selhání způsobené probíhající ischémií.</li>\n                                        <li>Dynamické změny úseku ST-T (zejména intermitentní ST elevace).</li>\n                                    </ul>\n                                </div>\n                                <div class=\"p-3.5 rounded-xl bg-amber-950/40 border border-amber-500/40\">\n                                    <div class=\"font-bold text-amber-400 mb-1\">⏱️ Včasná invazivní strategie (&lt; 24 hodin)</div>\n                                    <p class=\"text-slate-300 mb-2\"><strong>NSTE-AKS s vysokým rizikem (Třída IIa):</strong></p>\n                                    <ul class=\"list-disc ml-5 text-slate-300 space-y-1\">\n                                        <li>Potvrzená diagnóza NSTEMI dle 0h/1h algoritmu hs-cTn.</li>\n                                        <li>GRACE rizikové skóre &gt; 140 bodů.</li>\n                                        <li>Dynamické ischemické změny ST-T (deprese ST &ge; 1 mm nebo inverze T).</li>\n                                    </ul>\n                                </div>\n                                <div class=\"p-3.5 rounded-xl bg-slate-900 border border-slate-700\">\n                                    <div class=\"font-bold text-cyan-400 mb-1\">💉 Fibrinolýza u STEMI: Kdy a jak?</div>\n                                    <p class=\"text-slate-300\">\n                                        Pokud odhadovaný čas od diagnózy STEMI do zavedení vodiče (FMC-to-wire) <strong>přesahuje 120 minut</strong>, je indikována okamžitá <strong>systémová fibrinolýza</strong> (Tenektepláza i.v. bolus dle hmotnosti) do <strong>10 minut</strong> od diagnózy, následovaná okamžitým transportem do PCI centra k provedení SKG za 2–24 hodin (farmakoinvazivní strategie).\n                                    </p>\n                                </div>\n                            </div>\n                        "
        },
        {
          "title": "4. Antiagregace, Antikoagulace & Zákaz Pre-treatmentu",
          "color": "cyan",
          "content": "\n                            <div class=\"space-y-3 text-xs\">\n                                <div class=\"p-3.5 bg-slate-900 border border-rose-500/40 rounded-xl\">\n                                    <h5 class=\"font-bold text-rose-400 mb-1.5 text-xs\">❌ Zákaz rutinního pre-treatmentu u NSTE-AKS (Třída III)</h5>\n                                    <p class=\"text-slate-300 leading-relaxed\">\n                                        Rutinní podání P2Y12 inhibitoru (prasugrel, ticagrelor, clopidogrel) <em>před znalostí koronární anatomie</em> se u NSTE-AKS plánovaných k časné SKG <strong>nedoporučuje (Třída III)</strong>. Zvyšuje krvácení, neprokazuje ischemický benefit a blokuje možnost akutního kardiochirurgického bypassu (CABG). Lék se podává až on-table na katetrizačním sále po verifikaci stenózy vhodné k PCI!\n                                    </p>\n                                </div>\n                                <div class=\"p-3.5 bg-slate-900 border border-slate-700 rounded-xl\">\n                                    <h5 class=\"font-bold text-cyan-400 mb-1.5 text-xs\">💊 DAPT Strategie (Prasugrel vs. Ticagrelor)</h5>\n                                    <p class=\"text-slate-300 leading-relaxed\">\n                                        Při PCI pro AKS má přednost <strong>Prasugrel</strong> (nasycovací dávka 60 mg, dále 10 mg/d; redukce na 5 mg při věku &ge; 75 let nebo hmotnosti &lt; 60 kg) před <strong>Ticagrelorem</strong> (180 mg nasycovací, dále 90 mg 2× denně) na základě studie ISAR-REACT 5. <em>Pozor: Prasugrel je kontraindikován u pacientů po CMP/TIA!</em>\n                                    </p>\n                                </div>\n                                <div class=\"p-3.5 bg-slate-900 border border-cyan-500/30 rounded-xl\">\n                                    <h5 class=\"font-bold text-cyan-400 mb-1.5 text-xs\">🩸 Fibrilace síní + AKS podstupující PCI</h5>\n                                    <p class=\"text-slate-300 leading-relaxed\">\n                                        Trojitá antitrombotická terapie (<strong>TAT: NOAC v plné dávce + Aspirin + Clopidogrel 75 mg</strong>) je omezena pouze na <strong>dobu hospitalizace (&le; 1 týden)</strong>. Následuje Duální terapie (<strong>DAT: NOAC + Clopidogrel</strong>) do 12 měsíců. Od 12. měsíce zůstává pouze monoterapie NOAC. Nikdy nepodávejte Prasugrel ani Ticagrelor v TAT (Třída III)!\n                                    </p>\n                                </div>\n                            </div>\n                        "
        },
        {
          "title": "5. Sekundární prevence & 'The Big 5' po AKS",
          "color": "purple",
          "content": "\n                            <div class=\"p-3.5 bg-slate-900 border border-purple-500/30 rounded-xl text-xs text-slate-300 space-y-2\">\n                                <p><strong>Agresivní hypolipidemická léčba:</strong> Cíl LDL cholesterolu u všech pacientů po AKS je <strong>&lt; 1,4 mmol/l A SOUČASNĚ pokles o &ge; 50 %</strong> z výchozí hodnoty. Krok 1: Vysokointenzivní statin (Atorvastatin 40–80 mg / Rosuvastatin 20–40 mg). Krok 2: Přidání Ezetimibu 10 mg. Krok 3: Přidání inhibitoru PCSK9 (Evolocumab / Alirocumab) nebo Kyseliny bempedové / Inclisiranu.</p>\n                                <div class=\"p-2.5 bg-slate-800 rounded-lg border border-slate-700\">\n                                    <span class=\"font-bold text-purple-400\">Pilíře sekundární prevence ('The Big 5'):</span>\n                                    <ol class=\"list-decimal ml-5 mt-1 space-y-0.5 text-[11px]\">\n                                        <li><strong>DAPT:</strong> Aspirin + Prasugrel/Ticagrelor po dobu 12 měsíců.</li>\n                                        <li><strong>Statin vysoké intenzity + Ezetimib:</strong> LDL &lt; 1,4 mmol/l.</li>\n                                        <li><strong>Betablokátor:</strong> Zejména u LVEF &le; 40 % nebo po transmurálním STEMI.</li>\n                                        <li><strong>ACE inhibitor / ARB:</strong> U LVEF &le; 40 %, srdečního selhání, DM nebo hypertenze.</li>\n                                        <li><strong>MRA (Spironolakton/Eplerenon):</strong> U LVEF &le; 40 % a přítomnosti symptomů srdečního selhání.</li>\n                                    </ol>\n                                </div>\n                            </div>\n                        "
        }
      ]
    },
    "recall": {
      "scenarios": [
        {
          "id": "aks-r1",
          "title": "Kazuistika 1: Pre-treatment u NSTE-AKS",
          "question": "68letý muž je přijat na interní ambulanci pro 2 hodiny trvající tlakovou bolest za sternem. EKG: deprese ST ve svodech V4-V6 o 1,5 mm bez ST elevací. Vstupní hs-cTnI je pozitivní (95 ng/l). Koronarografii plánujete na zítra ráno (za 14 hodin). Máte pacientovi na lůžku podat nasycovací dávku Prasugrelu 60 mg?",
          "answer": "NEMÁTE. Rutinní pre-treatment P2Y12 inhibitorem u NSTE-AKS před znalostí koronární anatomie se dle ESC 2023 Guidelines nedoporučuje (Třída III), pokud je plánována invazivní strategie do 24 hodin. Nasycovací dávka se podá až on-table na katetrizačním sále po zobrazení koronárního řečiště a rozhodnutí o PCI.",
          "pearl": "Pre-treatment zvyšuje riziko závažného krvácení bez snížení ischemických příhod a komplikuje případný akutní kardiochirurgický bypass (CABG)."
        },
        {
          "id": "aks-r2",
          "title": "Kazuistika 2: Fibrilace síní + AKS po PCI (Trojkombinace)",
          "question": "72letý pacient po úspěšné PCI s implantací DES pro NSTEMI má chronickou fibrilaci síní a užívá Apixaban 5 mg 2× denně (CHA2DS2-VASc = 4). Jaká je doporučená standardní kombinace antitrombotik při dimisi?",
          "answer": "Trojitá terapie (TAT: Apixaban v plné dávce + Aspirin 100 mg + Clopidogrel 75 mg) pouze po dobu hospitalizace / maximálně do 1 týdne od PCI. Při dimisi pokračuje Duální terapie (DAT: Apixaban 5 mg bid + Clopidogrel 75 mg) do 12 měsíců. Od 12. měsíce zůstává pouze samotný Apixaban v monoterapii.",
          "pearl": "Nikdy nekombinujte NOAC s Prasugrelem nebo Ticagrelorem v rámci trojité kombinace (Třída III) kvůli extrémnímu riziku fatálního krvácení!"
        },
        {
          "id": "aks-r3",
          "title": "Kazuistika 3: De-eskalace protidestičkové léčby po STEMI",
          "question": "Pacient 14 dní po STEMI léčený DAPT (Aspirin + Prasugrel) si stěžuje na drobné sufúze na předloktích po lehké manuální práci. Je indikován okamžitý přechod z Prasugrelu na Clopidogrel?",
          "answer": "NENÍ. De-eskalace protidestičkové léčby (přechod z Prasugrelu/Ticagreloru na Clopidogrel) se během prvních 30 dnů po AKS nedoporučuje (Třída III). Riziko akutní trombózy stentu a fatálního reinfarktu je v prvních 30 dnech nejvyšší. Drobné kožní sufúze bez slizničního či orgánového krvácení nejsou důvodem ke změně.",
          "pearl": "V prvním měsíci po AKS je trombogenní aktivita plátu a stentu maximální; de-eskalace je možná až po 30 dnech (ideálně po 3–6 měsících u stabilních pacientů)."
        }
      ],
      "quiz": {
        "title": "Rozhodovací kvíz: Kardiogenní šok a mechanické komplikace",
        "prompt": "62letý pacient 4. den po STEMI spodní stěny náhle upadá do kardiogenního šoku (TK 75/40 mmHg, tachypnoe, chrůpky nad plícemi). Poslechově je přítomen nově vzniklý drsný holosystolický šelest s maximem na hrotu a propagací do axily. Jaká je nejpravděpodobnější diagnóza a okamžitý krok?",
        "options": [
          {
            "text": "A) Ruptura posteromediálního papilárního svalu s akutní masivní mitrální regurgitací -> okamžité emergentní ECHO a urgentní kardiochirurgická operace",
            "isCorrect": true
          },
          {
            "text": "B) Ruptura volné stěny levé komory -> okamžitá perikardiocentéza na lůžku",
            "isCorrect": false
          },
          {
            "text": "C) Infarkt pravé komory -> agresivní volumoterapie krystaloidy",
            "isCorrect": false
          },
          {
            "text": "D) Poléková hypotenze po ACE inhibitorech -> vysazení léků a observace",
            "isCorrect": false
          }
        ],
        "explanation": "Nový holosystolický šelest na hrotu s plicním edémem a šokem u infarktu spodní stěny (povodí ACD) značí rupturu posteromediálního papilárního svalu (který má solitární cévní zásobení) a akutní mitrální regurgitaci. Vyžaduje emergentní TTE a urgentní kardiochirurgický výkon."
      }
    },
    "breakdown": {
      "classThree": [
        "Rutinní podávání kyslíku pacientům s AKS, pokud je saturace SpO2 &ge; 90 % (hyperoxie způsobuje koronární vazokonstrikci a zvyšuje tvorbu volných radikálů).",
        "Rutinní pre-treatment P2Y12 inhibitorem u NSTE-AKS před znalostí koronární anatomie při včasné invazivní strategii &lt; 24h.",
        "De-eskalace protidestičkové léčby z potentních inhibitorů (Prasugrel/Ticagrelor) na Clopidogrel v prvních 30 dnech po AKS.",
        "Kombinace Prasugrelu nebo Ticagreloru s perorálním antikoagulanciem (NOAC/VKA) v rámci trojité kombinace (TAT).",
        "Rutinní manuální tromboaspirace během primární PCI u STEMI (studie TOTAL neprokázala benefit a ukázala vyšší riziko CMP).",
        "Podávání NSAID (vyjma ASA) u pacientů po AKS (zvyšují riziko reinfarktu, srdečního selhání a ruptury myokardu)."
      ],
      "mustKnow": [
        "EKG kritéria STEMI: ST elevace v bodě J ve 2 sousedních svodech (muži &lt; 40 let: &ge; 2,5 mm ve V2–V3; muži &ge; 40 let: &ge; 2,0 mm; ženy: &ge; 1,5 mm; ostatní svody &ge; 1,0 mm) nebo nový LBBB/RBBB s klinickou ischémií.",
        "Časová okna reperfuze: FMC-to-wire &lt; 90 min (v PCI centru &lt; 60 min). Pokud odhadovaný dojezd &gt; 120 min -> fibrinolýza do 10 min.",
        "Potence P2Y12 inhibitorů: Prasugrel &gt; Ticagrelor &gt; Clopidogrel. Prasugrel je kontraindikován při anamnéze CMP/TIA.",
        "Lipidový cíl ESC 2023: LDL-C &lt; 1,4 mmol/l a pokles o &ge; 50 % od bazální hodnoty.",
        "The Big 5 po AKS: DAPT (12M) + Statin vysoké intenzity + Betablokátor + ACEi/ARB + MRA."
      ]
    },
    "guidelineLinks": [
      {
        "title": "2023 ESC Guidelines for the management of acute coronary syndromes",
        "year": 2023,
        "journal": "European Heart Journal",
        "doi": "10.1093/eurheartj/ehad191",
        "url": "https://academic.oup.com/eurheartj/article/44/38/3720/7243210"
      }
    ]
  },
  {
    "id": "midef",
    "number": 2,
    "title": "5. Univerzální definice infarktu myokardu (2026)",
    "shortDesc": "Myokardiální poškození (injury) vs. infarkt myokardu (infarction), typy 1–5 IM, diagnostika MINOCA a klinická interpretace dynamiky troponinu.",
    "icon": "🔬",
    "badge": "2026 Nová definice",
    "badgeColor": "emerald",
    "theory": {
      "banner": {
        "tag": "Zásadní klinický koncept (2026 Konsenzus)",
        "title": "Myocardial Injury (Poškození) vs. Myocardial Infarction (Infarkt)",
        "text": "Zvýšená hodnota srdečního troponinu (cTn) nad 99. percentil horního referenčního limitu definuje **poškození myokardu (Myocardial Injury)**. Aby byl stav klasifikován jako **infarkt myokardu (Myocardial Infarction)**, musí být přítomna signifikantní dynamika troponinu (vzestup a/nebo pokles) A SOUČASNĚ alespoň jeden klinický průkaz akutní ischémie myokardu!"
      },
      "sections": [
        {
          "title": "1. Diagnostická kritéria infarktu myokardu (Typ 1 a Typ 2)",
          "color": "emerald",
          "content": "\n                            <div class=\"p-3.5 bg-slate-900 border border-slate-700 rounded-xl text-xs text-slate-300 leading-relaxed\">\n                                <p class=\"mb-2 font-bold text-emerald-400\">Definice infarktu myokardu vyžaduje:</p>\n                                <p class=\"mb-2\">Detekci vzestupu a/nebo poklesu hodnot cTn s alespoň jednou hodnotou nad 99. percentilem URL (horní referenční limit) a <strong>současnou přítomnost alespoň 1 z následujících ischemických kritérií:</strong></p>\n                                <ul class=\"list-disc ml-5 space-y-1 text-slate-300\">\n                                    <li>Symptomy akutní myokardiální ischémie (typická stenokardie, ekvivalenty).</li>\n                                    <li>Nové ischemické EKG změny (nové ST-T elevace či deprese, nová inverze T vln).</li>\n                                    <li>Vznik nových patologických kmitů Q na EKG.</li>\n                                    <li>Zobrazovací průkaz nové ztráty viabilního myokardu nebo nové regionální poruchy kinetiky stěny v ischemickém vzorci.</li>\n                                    <li>Průkaz intrakoronárního trombu angiograficky nebo při pitvě.</li>\n                                </ul>\n                            </div>\n                        "
        },
        {
          "title": "2. Přehled 5 klinických typů infarktu myokardu",
          "color": "amber",
          "content": "\n                            <div class=\"space-y-2.5 text-xs\">\n                                <div class=\"p-3 bg-slate-900 border-l-4 border-rose-500 rounded-r-xl\">\n                                    <span class=\"font-bold text-rose-400 text-sm\">Typ 1 IM (Aterotrombotický koronární infarkt)</span>\n                                    <p class=\"text-slate-300 mt-1 leading-relaxed\">Způsoben rupturou, ulcerací, fisurou nebo erozí aterosklerotického plátu s intraluminálním trombem v jedné či více koronárních tepnách vedoucím k redukci průtoku krve a distální embolizaci.</p>\n                                </div>\n                                <div class=\"p-3 bg-slate-900 border-l-4 border-amber-500 rounded-r-xl\">\n                                    <span class=\"font-bold text-amber-400 text-sm\">Typ 2 IM (Nepoměr nabídky a poptávky O2 bez akutní trombózy)</span>\n                                    <p class=\"text-slate-300 mt-1 leading-relaxed\">Ischémie vzniklá nepoměrem mezi dodávkou kyslíku myokardu (spasmus koronárních tepen, mikrovaskulární dysfunkce, SCAD, těžká anémie, hypotenze, hypoxémie) a spotřebou kyslíku (tachykardie, tachyarytmie, těžká hypertenze s hypertrofií LK). Léčba spočívá v korekci vyvolávající příčiny!</p>\n                                </div>\n                                <div class=\"p-3 bg-slate-900 border-l-4 border-purple-500 rounded-r-xl\">\n                                    <span class=\"font-bold text-purple-400 text-sm\">Typ 3 IM (Náhlá srdeční smrt)</span>\n                                    <p class=\"text-slate-300 mt-1 leading-relaxed\">Srdeční smrt s ischemickými symptomy a předpokládanou novou ischémií na EKG nebo fibrilací komor, kdy pacient zemře dříve, než bylo možné odebrat krev na srdeční biomarkery.</p>\n                                </div>\n                                <div class=\"p-3 bg-slate-900 border-l-4 border-cyan-500 rounded-r-xl\">\n                                    <span class=\"font-bold text-cyan-400 text-sm\">Typ 4 IM (Infarkt spojený s PCI)</span>\n                                    <p class=\"text-slate-300 mt-1 leading-relaxed\">\n                                        <strong>4a:</strong> Periprocedurální IM při PCI (vzestup cTn &gt; 5× nad 99. percentil URL u normální výchozí hodnoty + ischemické známky).<br>\n                                        <strong>4b:</strong> Trombóza stentu prokázaná angiograficky či autopticky.<br>\n                                        <strong>4c:</strong> Restenóza ve stentu.\n                                    </p>\n                                </div>\n                                <div class=\"p-3 bg-slate-900 border-l-4 border-blue-500 rounded-r-xl\">\n                                    <span class=\"font-bold text-blue-400 text-sm\">Typ 5 IM (Infarkt spojený s CABG)</span>\n                                    <p class=\"text-slate-300 mt-1 leading-relaxed\">Perioperační IM po kardiochirurgickém bypassu (vzestup cTn &gt; 10× nad 99. percentil URL během prvních 48 hodin po operaci s novým patologickým Q, novou okluzí štěpu či ztrátou viability myokardu).</p>\n                                </div>\n                            </div>\n                        "
        },
        {
          "title": "3. MINOCA: Diagnostický a vyšetřovací algoritmus",
          "color": "cyan",
          "content": "\n                            <div class=\"p-3.5 bg-cyan-950/30 border border-cyan-500/30 rounded-xl text-xs text-slate-300 leading-relaxed space-y-2\">\n                                <p><strong>MINOCA (Myocardial Infarction with Non-Obstructive Coronary Arteries):</strong> Pracovní diagnóza u pacientů splňujících kritéria infarktu myokardu (cTn dynamika + ischemické projevy), kteří mají na akutní koronarografii <strong>normální nález nebo stenózy &lt; 50 %</strong>.</p>\n                                <p><strong>Diagnostický postup k určení konečné diagnózy (Třída I):</strong></p>\n                                <ol class=\"list-decimal ml-5 space-y-1\">\n                                    <li><strong>Transtorakální ECHO (TTE):</strong> Posouzení regionální kinetiky (apikální balonování u Takotsubo, perikardiální výpotek).</li>\n                                    <li><strong>Magnetická rezonance srdce (CMR - Kardio MR):</strong> Klíčové vyšetření s pozdním sycením gadoliniem (LGE). Subendokardiální/transmurální LGE = skutečný infarkt (Typ 1 embolizace, Typ 2 spasmus); Subepikardiální/mid-myokardiální LGE = <em>akutní myokarditida</em> (tvoří až 30–40 % všech MINOCA!); Absence LGE + edém hrotu = <em>Takotsubo kardiomyopatie</em>.</li>\n                                    <li><strong>Intrakoronární zobrazování (OCT / IVUS):</strong> Průkaz disekce (SCAD), eroze plátu či ruptury.</li>\n                                </ol>\n                            </div>\n                        "
        }
      ]
    },
    "recall": {
      "scenarios": [
        {
          "id": "midef-r1",
          "title": "Kazuistika 1: Sepse vs. Infarkt Typu 2",
          "question": "80letá polymorbidní pacientka je hospitalizována pro těžkou urosepsi s febriliemi, hypotenzí (TK 80/50 mmHg) a sinusovou tachykardií 145/min. EKG vykazuje horizontální deprese ST 1,5 mm ve svodech V4-V6. Vstupní hs-cTnI je 60 ng/l, za 3 hodiny 220 ng/l. Na urgentní koronarografii jsou tepny difuzně sklerotické bez akutního trombu a bez uzávěru. O jaký typ IM se jedná a jaký je léčebný postup?",
          "answer": "Jedná se o Infarkt myokardu Typu 2 (mismatch mezi nabídkou a poptávkou kyslíku bez akutní aterotrombózy). Způsobený tachykardií zkracující diastolické koronární plnění a hypotenzí při sepsi. Léčba nespočívá v PCI, ale v kauzální terapii vyvolávající příčiny: agresivní léčba sepse antibiotiky, volumoterapie krystaloidy pro normalizaci tlaku a zpomalení srdeční frekvence.",
          "pearl": "U IM typu 2 nepodáváme rutinně plnou DAPT ani antikoagulaci, pokud není přítomna jiná kardiovaskulární indikace."
        },
        {
          "id": "midef-r2",
          "title": "Kazuistika 2: Emoční stres a MINOCA",
          "question": "52letá žena po náhlém úmrtí partnera přijata pro prudkou retrosternální bolest a dušnost. EKG: elevace ST 2 mm ve V2-V5. Troponin hs-cTnI stoupá na 1200 ng/l. Na urgentní SKG jsou koronární tepny zcela hladké bez stenóz. ECHO ukazuje akinézu hrotu a středních segmentů LK s hyperkontrakcí báze (EF LK 35 %). Jaká je diagnóza a jaké vyšetření ji definitivně potvrdí?",
          "answer": "Pracovní diagnóza je MINOCA, klinicky vysoce suspektní pro Takotsubo syndrom (stresová kardiomyopatie). Zlatým standardem k definitivnímu potvrzení je Magnetická rezonance srdce (CMR), která prokáže transmurální edém myokardu v oblasti hrotu bez přítomnosti pozdního sycení gadoliniem (LGE) a vyloučí akutní myokarditidu.",
          "pearl": "Takotsubo syndrom se léčí podpůrně jako srdeční selhání (ACEi, betablokátory, diuretika) a funkce LK se typicky plně zotaví během 4–8 týdnů."
        }
      ],
      "quiz": {
        "title": "Rozhodovací kvíz: Myocardial Injury vs. Myocardial Infarction",
        "prompt": "Který z následujících pacientů má POUZE chronické poškození myokardu (Chronic Myocardial Injury) a NEMÁ infarkt myokardu?",
        "options": [
          {
            "text": "A) 65letý pacient s chronickým onemocněním ledvin (eGFR 25 ml/min) se stabilní hodnotou hs-cTnT 48 ng/l při opakovaných odběrech s odstupem 3 měsíců, bez stenokardií a bez EKG dynamiky",
            "isCorrect": true
          },
          {
            "text": "B) Pacient s tlakem na hrudi, inverzí T vln ve V4-V6 a vzestupem hs-cTnI z 12 na 180 ng/l",
            "isCorrect": false
          },
          {
            "text": "C) Pacient po úspěšné KPR pro komorovou fibrilaci s novým patologickým kmitém Q ve svodech II, III, aVF",
            "isCorrect": false
          },
          {
            "text": "D) Pacient se sepsí, dušností, novou akinézou spodní stěny na ECHO a vzestupem hs-cTn",
            "isCorrect": false
          }
        ],
        "explanation": "Chronicky zvýšená hodnota troponinu bez akutního vzestupu či poklesu (bez dynamiky) a bez jakýchkoli klinických či zobrazovacích známek akutní ischémie myokardu splňuje definici chronického poškození myokardu (Chronic Myocardial Injury), typicky přítomného u pokročilé renální insuficience, chronického srdečního selhání či amyloidózy."
      }
    },
    "breakdown": {
      "classThree": [
        "Považovat každou izolovanou elevaci troponinu za akutní infarkt myokardu Typu 1 a automaticky indikovat emergentní invazivní koronarografii.",
        "Podávat agresivní protidestičkovou (DAPT) a antikoagulační léčbu pacientům s chronickým poškozením myokardu bez průkazu koronární ischémie.",
        "Opomenout vyšetření magnetickou rezonancí srdce (CMR) u pacientů s pracovní diagnózou MINOCA (vede k chybnému přehlédnutí myokarditidy)."
      ],
      "mustKnow": [
        "Myocardial Injury = cTn &gt; 99. percentil URL.",
        "Myocardial Infarction = cTn &gt; 99. percentil s dynamikou (vzestup/pokles) + klinický průkaz akutní ischémie.",
        "Typ 1: Ruptura/eroze aterosklerotického plátu s trombózou.",
        "Typ 2: Mismatch mezi dodávkou a spotřebou O2 (hypotenze, sepse, tachykardie, anémie, spasmus).",
        "Typ 4a: PCI-related IM (cTn &gt; 5× URL). Typ 5: CABG-related IM (cTn &gt; 10× URL).",
        "MINOCA: IM s angiograficky normálními tepnami (&lt; 50 % stenóza) -> vyžaduje TTE + CMR."
      ]
    },
    "guidelineLinks": [
      {
        "title": "Fourth Universal Definition of Myocardial Infarction / 2026 Consensus Update",
        "year": 2026,
        "journal": "European Heart Journal",
        "doi": "10.1093/eurheartj/ehy462",
        "url": "https://academic.oup.com/eurheartj/article/40/3/237/5079549"
      }
    ]
  },
  {
    "id": "hf",
    "number": 3,
    "title": "Srdeční selhání (2026 ESC Guidelines)",
    "shortDesc": "Nová klasifikace stadií A–D, 4 pilíře bazální farmakoterapie (FMT/GDMT) pro HFrEF, SGLT2i pro HFpEF, intravenózní železo, Vericiguat a indikace ICD/CRT.",
    "icon": "🫁",
    "badge": "2026 ESC Guidelines",
    "badgeColor": "cyan",
    "theory": {
      "banner": {
        "tag": "Revoluce v léčbě srdečního selhání",
        "title": "4 Pilíře bazální léčby HFrEF a rozšíření SGLT2i na celé spektrum",
        "text": "Nejnovější ESC doporučení staví na okamžitém zahájení 4 pilířů základní medikamentózní léčby (FMT: ARNI/ACEi, Betablokátor, MRA, SGLT2i) u všech pacientů s HFrEF (EF &le; 40 %). Inhibitory SGLT2 (Dapagliflozin, Empagliflozin) mají nově doporučení Třídy I napříč celým spektrem ejekční frakce včetně HFmrEF a HFpEF!"
      },
      "sections": [
        {
          "title": "1. Klasifikace srdečního selhání dle EF LK a Stadií A–D",
          "color": "cyan",
          "content": "\n                            <div class=\"grid md:grid-cols-3 gap-3 my-3 text-xs\">\n                                <div class=\"p-3 bg-slate-900 border border-rose-500/30 rounded-xl\">\n                                    <span class=\"font-bold text-rose-400 text-sm\">HFrEF (Reduced EF)</span>\n                                    <p class=\"text-slate-300 mt-1\">LVEF <strong>&le; 40 %</strong>. Přítomna těžká systolická dysfunkce LK. Jednoznačný průkaz mortality pro 4 pilíře FMT, ICD a CRT.</p>\n                                </div>\n                                <div class=\"p-3 bg-slate-900 border border-amber-500/30 rounded-xl\">\n                                    <span class=\"font-bold text-amber-400 text-sm\">HFmrEF (Mildly Reduced EF)</span>\n                                    <p class=\"text-slate-300 mt-1\">LVEF <strong>41–49 %</strong>. Zvýšené natriuretické peptidy (BNP &ge; 35 pg/ml nebo NT-proBNP &ge; 125 pg/ml) + strukturální postižení srdce. Třída I pro SGLT2i.</p>\n                                </div>\n                                <div class=\"p-3 bg-slate-900 border border-emerald-500/30 rounded-xl\">\n                                    <span class=\"font-bold text-emerald-400 text-sm\">HFpEF (Preserved EF)</span>\n                                    <p class=\"text-slate-300 mt-1\">LVEF <strong>&ge; 50 %</strong>. Známky diastolické dysfunkce a zvýšených plnících tlaků LK. Třída I pro SGLT2i (Dapagliflozin/Empagliflozin).</p>\n                                </div>\n                            </div>\n                            <div class=\"p-3.5 bg-slate-900 border border-slate-700 rounded-xl text-xs text-slate-300\">\n                                <span class=\"font-bold text-cyan-400\">Klasifikace stadií srdečního selhání (A -> D):</span>\n                                <ul class=\"list-disc ml-5 mt-1.5 space-y-1\">\n                                    <li><strong>Stádium A (V riziku):</strong> Přítomny rizikové faktory (hypertenze, DM, obezita, KVS nemoc), bez symptomů a bez strukturální vady.</li>\n                                    <li><strong>Stádium B (Pre-heart failure):</strong> Asymptomatický pacient, ale MAJÍ strukturální vadu (hypertrofie LK, jizva, porucha kinetiky) nebo zvýšené BNP/NT-proBNP.</li>\n                                    <li><strong>Stádium C (Symptomatické HF):</strong> Aktuální nebo předchozí symptomy srdečního selhání spojené se strukturálním a/nebo funkčním postižením srdce.</li>\n                                    <li><strong>Stádium D (Pokročilé / Advanced HF):</strong> Těžké refrakterní symptomy v klidu (NYHA IV) vzdorující maximální terapii -> indikace k LVAD či transplantaci srdce.</li>\n                                </ul>\n                            </div>\n                        "
        },
        {
          "title": "2. Čtyři pilíře farmakoterapie HFrEF (Foundational Medical Therapy - FMT)",
          "color": "emerald",
          "content": "\n                            <p class=\"mb-3 text-xs text-slate-300 leading-relaxed\">U každého pacienta s HFrEF musí být co nejrychleji nasazena a vytitrována <strong>čtyřkombinace léků (Třída I, Level A)</strong>, která redukuje mortalitu o více než 60 %:</p>\n                            <div class=\"grid sm:grid-cols-2 gap-3 text-xs\">\n                                <div class=\"p-3 bg-emerald-950/30 border border-emerald-500/30 rounded-xl\">\n                                    <div class=\"font-bold text-emerald-400\">1. ARNI (Sacubitril/Valsartan) / ACEi</div>\n                                    <p class=\"text-slate-300 mt-1\">Sacubitril/valsartan má přednost před ACEi (studie PARADIGM-HF). Při převodu z ACEi nutná <strong>wash-out perioda 36 hodin!</strong></p>\n                                </div>\n                                <div class=\"p-3 bg-emerald-950/30 border border-emerald-500/30 rounded-xl\">\n                                    <div class=\"font-bold text-emerald-400\">2. Betablokátory (Evidence-based)</div>\n                                    <p class=\"text-slate-300 mt-1\">Pouze 4 molekuly s průkazem redukce mortality: <strong>Bisoprolol, Metoprolol sukcinát, Karvedilol, Nebivolol</strong>. Nasazovat v kompenzovaném stavu!</p>\n                                </div>\n                                <div class=\"p-3 bg-emerald-950/30 border border-emerald-500/30 rounded-xl\">\n                                    <div class=\"font-bold text-emerald-400\">3. MRA (Antagonisté mineralokortikoidních rec.)</div>\n                                    <p class=\"text-slate-300 mt-1\"><strong>Spironolakton</strong> (25–50 mg) nebo <strong>Eplerenon</strong>. Snižují fibrózu myokardu. Nutná kontrola kalémie a kreatininu.</p>\n                                </div>\n                                <div class=\"p-3 bg-emerald-950/30 border border-emerald-500/30 rounded-xl\">\n                                    <div class=\"font-bold text-emerald-400\">4. SGLT2 inhibitory (Glifloziny)</div>\n                                    <p class=\"text-slate-300 mt-1\"><strong>Dapagliflozin</strong> 10 mg 1×d nebo <strong>Empagliflozin</strong> 10 mg 1×d. Bez nutnosti titrace, účinné nezávisle na přítomnosti diabetu!</p>\n                                </div>\n                            </div>\n                        "
        },
        {
          "title": "3. Specifická doplňková léčba & Intravenózní železo",
          "color": "amber",
          "content": "\n                            <div class=\"space-y-2.5 text-xs\">\n                                <div class=\"p-3 bg-slate-900 border border-amber-500/30 rounded-xl\">\n                                    <span class=\"font-bold text-amber-400\">💉 Intravenózní suplementace železa (Třída I/IIa)</span>\n                                    <p class=\"text-slate-300 mt-1\">\n                                        Deficit železa (feritin &lt; 100 &mu;g/l NEBO feritin 100–299 &mu;g/l s nasycením transferinu TSAT &lt; 20 %) je přítomen u &gt; 50 % pacientů se srdečním selháním. Podání <strong>karboxymaltózy železité (FCM)</strong> nebo <strong>derizomaltózy železité i.v.</strong> významně zlepšuje symptomy, kvalitu života a snižuje hospitalizace pro HF. <em>Perorální železo je neúčinné!</em>\n                                    </p>\n                                </div>\n                                <div class=\"p-3 bg-slate-900 border border-slate-700 rounded-xl\">\n                                    <span class=\"font-bold text-cyan-400\">💊 Vericiguat & Finerenon</span>\n                                    <p class=\"text-slate-300 mt-1\">\n                                        <strong>Vericiguat:</strong> Stimulátor solubilní guanylátcyklázy (sGC) indikovaný u pacientů s HFrEF po nedávné dekompenzaci navzdory FMT.<br>\n                                        <strong>Finerenon:</strong> Nesteroidní MRA s prokázaným nefro- a kardioprotektivním účinkem u diabetiků s CKD a u HFmrEF/HFpEF (studie FINEARTS-HF).\n                                    </p>\n                                </div>\n                            </div>\n                        "
        },
        {
          "title": "4. Přístrojová léčba: ICD a Biventrikulární stimulace (CRT)",
          "color": "purple",
          "content": "\n                            <div class=\"grid md:grid-cols-2 gap-3 text-xs\">\n                                <div class=\"p-3 bg-slate-900 border border-purple-500/30 rounded-xl\">\n                                    <span class=\"font-bold text-purple-400\">⚡ ICD (Kardioverter-defibrilátor)</span>\n                                    <p class=\"text-slate-300 mt-1\"><strong>Primární prevence náhlé smrti:</strong> Indikován u symptomatických pacientů (NYHA II–III) s <strong>LVEF &le; 35 %</strong> navzdory &ge; 3 měsícům optimální farmakoterapie (OMT), s očekávaným přežitím &gt; 1 rok (u ischemické etiologie Třída I, u neischemické Třída IIa).</p>\n                                </div>\n                                <div class=\"p-3 bg-slate-900 border border-purple-500/30 rounded-xl\">\n                                    <span class=\"font-bold text-purple-400\">🔋 CRT (Srdeční resynchronizační léčba)</span>\n                                    <p class=\"text-slate-300 mt-1\">Indikována u pacientů v sinusovém rytmu s LVEF &le; 35 %, symptomy NYHA II–IV navzdory OMT a <strong>blokádou levého raménka (LBBB)</strong> s šíří <strong>QRS &ge; 130–150 ms</strong> (Třída I). Resynchronizuje mechanický stah pravé a levé komory.</p>\n                                </div>\n                            </div>\n                        "
        }
      ]
    },
    "recall": {
      "scenarios": [
        {
          "id": "hf-r1",
          "title": "Kazuistika 1: Bezpečný přechod z ACEi na ARNI",
          "question": "64letý pacient s ischemickou kardiomyopatií a LVEF 28 % užívá Ramipril 10 mg denně. Pro přetrvávající námahovou dušnost NYHA II chcete zahájit léčbu Sacubitril/Valsartanem (ARNI). Jak musíte postupovat ohledně časování první dávky?",
          "answer": "Musíte Ramipril vysadit a dodržet striktní wash-out periodu minimálně 36 hodin před podáním první dávky Sacubitril/Valsartanu. Důvodem je prevence masivní akumulace bradykininu a vzniku potenciálně fatálního angioedému.",
          "pearl": "Při převodu ze sartanů (ARB) na ARNI wash-out perioda není nutná, lék lze nasadit následující den."
        },
        {
          "id": "hf-r2",
          "title": "Kazuistika 2: Terapie HFpEF se zachovanou ejekční frakcí",
          "question": "72letá obézní diabetička s hypertenzí je vyšetřována pro námahovou dušnost NYHA III a otoky kotníků. Na ECHO je LVEF 56 %, hypertrofie LK s E/e' 14 (zvýšené plnící tlaky), NT-proBNP 1650 pg/ml. Který lék má jednoznačné doporučení Třídy I pro redukci KV úmrtí a hospitalizací u HFpEF?",
          "answer": "SGLT2 inhibitor (Dapagliflozin 10 mg nebo Empagliflozin 10 mg denně). Na základě randomizovaných studií DELIVER a EMPEROR-Preserved jsou glifloziny základním lékem volby s doporučením Třídy I u HFpEF.",
          "pearl": "Kličková diuretika (Furosemid) se přidávají symptomaticky k dosažení a udržení euvolemie."
        }
      ],
      "quiz": {
        "title": "Rozhodovací kvíz: Akutní srdeční selhání",
        "prompt": "Pacient je přijat pro akutní dekompenzaci srdečního selhání s plicním edémem. Je teplý a vlhký ('warm and wet'): TK 185/105 mmHg, TF 115/min, tachypnoický, poslechově oboustranně chrůpky, SpO2 86 % na vzduchu. Jaký je prioritní farmakoterapeutický krok?",
        "options": [
          {
            "text": "A) Oxygenoterapie / NIV, i.v. bolus kličkového diuretika (Furosemid) a i.v. vazodilatancia (Nitráty) ke snížení afterloadu a plnících tlaků",
            "isCorrect": true
          },
          {
            "text": "B) Okamžitá infuze inotropika (Dobutamin) a vazopresoru (Noradrenalin)",
            "isCorrect": false
          },
          {
            "text": "C) Rychlý převod 1000 ml fyziologického roztoku k podpoře preloadu",
            "isCorrect": false
          },
          {
            "text": "D) Okamžité podání vysoké dávky i.v. betablokátoru k redukci tachykardie",
            "isCorrect": false
          }
        ],
        "explanation": "U hypertenzního plicního edému s teplou periférií je hlavní příčinou redistribuce tekutin do plic vlivem vysokého afterloadu. Léčbou volby je kombinace oxygenoterapie (při SpO2 < 90 %), i.v. vazodilatancií (nitroglycerin/izosorbid dinitrát) a i.v. kličkového diuretika (furosemid)."
      }
    },
    "breakdown": {
      "classThree": [
        "Podání Sacubitril/Valsartanu (ARNI) dříve než 36 hodin po poslední dávce ACE inhibitoru (riziko život ohrožujícího angioedému).",
        "Nasazování nebo navyšování dávky betablokátoru u pacientů v akutním těžce dekompenzovaném srdečním selhání.",
        "Podávání nesteroidních antirevmatik (NSAID) a glitazonů (způsobují retenci sodíku a vody a dekompenzaci HF).",
        "Podávání nondihydropyridinových BKK (Verapamil, Diltiazem) u HFrEF (mají negativně inotropní účinek a zhoršují prognózu).",
        "Rutinní podávání perorálního železa při sideropenii u srdečního selhání (je neúčinné z důvodu hepcidinové blokády vstřebávání)."
      ],
      "mustKnow": [
        "HFrEF: LVEF &le; 40 %; HFmrEF: 41–49 %; HFpEF: &ge; 50 %.",
        "4 pilíře FMT pro HFrEF: ARNI/ACEi + Betablokátor (Bisoprolol/Metoprolol suc/Carvedilol/Nebivolol) + MRA (Spironolakton/Eplerenon) + SGLT2i (Dapagliflozin/Empagliflozin).",
        "SGLT2 inhibitory jsou Třída I pro HFrEF, HFmrEF i HFpEF.",
        "i.v. železo (karboxymaltóza / derizomaltóza) je indikováno při feritinu &lt; 100 &mu;g/l nebo 100–299 s TSAT &lt; 20 %.",
        "ICD: Primární prevence při EF &le; 35 % navzdory &ge; 3 měsícům OMT. CRT: LBBB + QRS &ge; 130–150 ms + EF &le; 35 %."
      ]
    },
    "guidelineLinks": [
      {
        "title": "2023 Focused Update of the 2021 ESC Guidelines for the diagnosis and treatment of acute and chronic heart failure",
        "year": 2023,
        "journal": "European Heart Journal",
        "doi": "10.1093/eurheartj/ehad195",
        "url": "https://academic.oup.com/eurheartj/article/44/37/3627/7243213"
      }
    ]
  },
  {
    "id": "htn",
    "number": 4,
    "title": "Arteriální hypertenze (2024 ESC Guidelines)",
    "shortDesc": "Nová kategorie zvýšeného TK (Elevated BP), přísnější cílové hodnoty 120–129 mmHg, fixní dvoj- a trojkombinace v 1 tabletě, renální denervace a sekundární hypertenze.",
    "icon": "🩺",
    "badge": "2024 ESC Guidelines",
    "badgeColor": "amber",
    "theory": {
      "banner": {
        "tag": "Zásadní změny v ESC 2024 Guidelines",
        "title": "Kategorie 'Zvýšený TK' a sjednocený cílový systolický tlak 120–129 mmHg",
        "text": "ESC 2024 nově zavádí 3 kategorie krevního tlaku: 1. **Nezvýšený TK (< 120/70 mmHg)**, 2. **Zvýšený TK (Elevated BP: 120–139 / 70–89 mmHg)** a 3. **Hypertenze (&ge; 140/90 mmHg)**. Cílový systolický tlak při léčbě je sjednocen na **120–129 mmHg** u naprosté většiny dospělých pacientů, pokud je léčba dobře tolerována."
      },
      "sections": [
        {
          "title": "1. Nová klasifikace TK dle ESC 2024",
          "color": "amber",
          "content": "\n                            <div class=\"grid md:grid-cols-3 gap-3 my-3 text-xs\">\n                                <div class=\"p-3 bg-emerald-950/30 border border-emerald-500/30 rounded-xl\">\n                                    <span class=\"font-bold text-emerald-400\">1. Nezvýšený TK (Non-elevated)</span>\n                                    <p class=\"text-slate-300 mt-1\">TK <strong>&lt; 120/70 mmHg</strong>. Optimální hodnota s nejnižším kardiovaskulárním rizikem.</p>\n                                </div>\n                                <div class=\"p-3 bg-amber-950/30 border border-amber-500/30 rounded-xl\">\n                                    <span class=\"font-bold text-amber-400\">2. Zvýšený TK (Elevated BP)</span>\n                                    <p class=\"text-slate-300 mt-1\">STK <strong>120–139 mmHg</strong> a/nebo DTK <strong>70–89 mmHg</strong>. Intervence životního stylu; farmakoterapie při vysokém KV riziku.</p>\n                                </div>\n                                <div class=\"p-3 bg-rose-950/30 border border-rose-500/30 rounded-xl\">\n                                    <span class=\"font-bold text-rose-400\">3. Hypertenze (Hypertension)</span>\n                                    <p class=\"text-slate-300 mt-1\">STK <strong>&ge; 140 mmHg</strong> a/nebo DTK <strong>&ge; 90 mmHg</strong> v ordinaci (při ABPM ve dne &ge; 135/85 mmHg, v noci &ge; 120/70 mmHg).</p>\n                                </div>\n                            </div>\n                        "
        },
        {
          "title": "2. Léčebný algoritmus: Fixní kombinace (Single-Pill Combination - SPC)",
          "color": "emerald",
          "content": "\n                            <div class=\"p-3.5 bg-slate-900 border border-slate-700 rounded-xl text-xs text-slate-300 leading-relaxed space-y-2.5\">\n                                <p><strong>Základní pravidlo ESC 2024:</strong> Zahájení léčby <strong>fixní dvojkombinací v jedné tabletě (SPC)</strong> je doporučeno pro naprostou většinu pacientů (Třída I).</p>\n                                <div class=\"grid sm:grid-cols-3 gap-3\">\n                                    <div class=\"p-2.5 bg-slate-800 rounded-lg border border-slate-600\">\n                                        <span class=\"font-bold text-amber-400\">Krok 1: Dvojkombinace (SPC)</span>\n                                        <p class=\"text-[11px] mt-1 text-slate-300\"><strong>ACEi nebo ARB + BKK</strong> (dihydropyridin) NEBO <strong>thiazidové/thiazid-like diuretikum</strong> (Indapamid/Chlortalidon).</p>\n                                    </div>\n                                    <div class=\"p-2.5 bg-slate-800 rounded-lg border border-slate-600\">\n                                        <span class=\"font-bold text-amber-400\">Krok 2: Trojkombinace (SPC)</span>\n                                        <p class=\"text-[11px] mt-1 text-slate-300\"><strong>ACEi/ARB + BKK + Thiazid/thiazid-like diuretikum</strong> v 1 tabletě (A + C + D).</p>\n                                    </div>\n                                    <div class=\"p-2.5 bg-slate-800 rounded-lg border border-slate-600\">\n                                        <span class=\"font-bold text-amber-400\">Krok 3: Rezistentní hypertenze</span>\n                                        <p class=\"text-[11px] mt-1 text-slate-300\">Trojkombinace + <strong>Spironolakton</strong> (25–50 mg) nebo Eplerenon / Amilorid / Betablokátor.</p>\n                                    </div>\n                                </div>\n                                <p class=\"text-slate-400 text-[11px]\"><em>Renální denervace (RDN):</em> ESC 2024 přiznává katetrové renální denervaci doporučení Třídy IIa/IIb jako doplňkové metodě u ověřené rezistentní hypertenze.</p>\n                            </div>\n                        "
        },
        {
          "title": "3. Sekundární arteriální hypertenze (Screening & Diagnostika)",
          "color": "rose",
          "content": "\n                            <div class=\"p-3.5 bg-slate-900 border border-rose-500/30 rounded-xl text-xs text-slate-300 space-y-2\">\n                                <p class=\"font-bold text-rose-400\">Kdy aktivně pátrat po sekundární hypertenzi?</p>\n                                <ul class=\"list-disc ml-5 space-y-1\">\n                                    <li><strong>Mladý věk (&lt; 35 let)</strong> nebo náhlý nástup těžké hypertenze.</li>\n                                    <li><strong>Rezistentní hypertenze:</strong> Nekontrolovaný TK navzdory trojkombinaci antihypertenziv v maximálních tolerovaných dávkách včetně diuretika.</li>\n                                    <li><strong>Primární hyperaldosteronismus (Connův syndrom):</strong> Hypokalémie (spontánní či po nízké dávce diuretika). Screening: <strong>poměr aldosteron/renin (ARR)</strong> nalačno po vysazení MRA na 4–6 týdnů.</li>\n                                    <li><strong>Renovaskulární hypertenze:</strong> Aterosklerotická stenóza renální tepny u starších kuřáků nebo <em>fibromuskulární dysplazie (FMD)</em> u mladých žen. Diagnostika: Duplexní sono, CT/MR angiografie renálních tepen.</li>\n                                    <li><strong>Feochromocytom:</strong> Paroxysmální hypertenze s klasickou triádou (bolesti hlavy, profúzní pocení, palpitace). Screening: plazmatické nebo močové <em>volné frakcionované metanefriny</em>.</li>\n                                    <li><strong>Syndrom obstrukční spánkové apnoe (OSAS):</strong> Chrápání, denní spavost, non-dipper profil na ABPM. Nejčastější sekundární příčina!</li>\n                                </ul>\n                            </div>\n                        "
        }
      ]
    },
    "recall": {
      "scenarios": [
        {
          "id": "htn-r1",
          "title": "Kazuistika 1: Podezření na Connův syndrom",
          "question": "44letý muž s rezistentní hypertenzí (TK 168/104 mmHg na kombinaci Perindopril + Amlodipin + Indapamid) má při laboratorním screeningu kalémii 3,0 mmol/l. Jaký je iniciální screeningový test pro primární hyperaldosteronismus a jakou medikaci musíte před testem s předstihem vysadit?",
          "answer": "Screeningovým testem volby je stanovení poměru plazmatického aldosteronu k plazmatické reninovové aktivitě/koncentraci (ARR = Aldosterone-to-Renin Ratio). Alespoň 4 týdny před odběrem je nutné vysadit antagonisty mineralokortikoidních receptorů (Spironolakton, Eplerenon) a kalium-šetřící diuretika, které falešně modulují osu RAAS.",
          "pearl": "Normokalémie nevylučuje primární hyperaldosteronismus; až 50 % pacientů s Conn syndromem má normální hladinu draslíku."
        },
        {
          "id": "htn-r2",
          "title": "Kazuistika 2: Hypertenzní emergence vs. Urgence",
          "question": "58letý muž přichází s TK 210/125 mmHg, silnou bolestí hlavy a rozostřeným viděním. Na očním pozadí jsou přítomny čerstvé plaménkovité hemoragie a edém papily. Jaký je rozdíl mezi hypertenzní emergencí a urgencí a jaký je cíl úvodního poklesu TK?",
          "answer": "Jedná se o hypertenzní emergenci (maligní hypertenzi s akutním poškozením cílových orgánů - retinopatie/encefalopatie). Vyžaduje přijetí na JIP a kontinuální i.v. léčbu (např. Urapidil, Labetalol, Nitroprusid). Cílem je kontrolovaný pokles středního arteriálního tlaku (MAP) o maximálně 20–25 % během první hodiny, aby nedošlo k ischémii mozku, myokardu či ledvin.",
          "pearl": "Jedinou výjimkou s nutností okamžitého radikálního poklesu STK pod 120 mmHg během 10–20 minut je akutní disekce aorty."
        }
      ],
      "quiz": {
        "title": "Rozhodovací kvíz: Kontraindikované kombinace antihypertenziv",
        "prompt": "Která z následujících kombinací léků je v guidelines ESC přísně ZAKÁZÁNA (kontraindikována - Třída III)?",
        "options": [
          {
            "text": "A) Současné podávání ACE inhibitoru (např. Ramipril) a Sartanu (např. Telmisartan) nebo inhibitoru reninu",
            "isCorrect": true
          },
          {
            "text": "B) ACE inhibitor + Blokátor vápníkových kanálů (Amlodipin)",
            "isCorrect": false
          },
          {
            "text": "C) Sartan + Thiazid-like diuretikum (Indapamid)",
            "isCorrect": false
          },
          {
            "text": "D) Trojkombinace ACEi + BKK + Spironolakton",
            "isCorrect": false
          }
        ],
        "explanation": "Duální blokáda RAAS (kombinace ACEi + ARB nebo přímého inhibitoru reninu aliskirenu) je v ESC guidelines striktně kontraindikována (Třída III). Velké studie (ONTARGET, ALTITUDE) prokázaly, že duální blokáda nepřináší žádný KV benefit, ale dramaticky zvyšuje riziko těžké hypotenze, hyperkalémie a akutního renálního selhání."
      }
    },
    "breakdown": {
      "classThree": [
        "Současná kombinace dvou různých blokátorů systému RAAS (ACE inhibitor + sartan / přímý inhibitor reninu).",
        "Předepisování betablokátorů jako rutinní lék 1. volby pro nekomplikovanou esenciální hypertenzi (s výjimkou specifických indikací jako ICHS, arytmie, HF či těhotenství).",
        "Příliš prudký pokles krevního tlaku u akutního ischemického iktu, pokud pacient není indikován k systémové trombolýze.",
        "Podávání krátkodobě působícího nifedipinu pod jazyk při hypertenzní krizi (nekontrolovaný prudký pokles TK s rizikem infarktu a CMP)."
      ],
      "mustKnow": [
        "Nové kategorie 2024: Nezvýšený (&lt; 120/70), Zvýšený TK (120–139 / 70–89), Hypertenze (&ge; 140/90 mmHg).",
        "Cílový TK při léčbě: Systolický TK 120–129 mmHg a diastolický 70–79 mmHg pro většinu pacientů.",
        "Základ terapie: Fixní dvojkombinace (Single-Pill Combination: ACEi/ARB + BKK nebo diuretikum).",
        "Rezistentní hypertenze: Trojkombinace v plných dávkách vč. diuretika + přidání Spironolaktonu 25–50 mg.",
        "Hypertenzní emergence: i.v. titrovaná léčba (Urapidil, Labetalol) s poklesem MAP o max. 25 % v 1. hodině."
      ]
    },
    "guidelineLinks": [
      {
        "title": "2024 ESC Guidelines for the management of elevated blood pressure and hypertension",
        "year": 2024,
        "journal": "European Heart Journal",
        "doi": "10.1093/eurheartj/ehae178",
        "url": "https://academic.oup.com/eurheartj/article/45/38/3912/7741010"
      }
    ]
  },
  {
    "id": "afib",
    "number": 5,
    "title": "Fibrilace a flutter síní (2024 ESC Guidelines)",
    "shortDesc": "Nový AF-CARE management rámec, CHA2DS2-VA skóre, indikace NOAC, časná kontrola rytmu vs. frekvence a katetrová ablace plicních žil (PVI).",
    "icon": "⚡",
    "badge": "2024 ESC Guidelines",
    "badgeColor": "purple",
    "theory": {
      "banner": {
        "tag": "Nový integrovaný rámec (2024 ESC)",
        "title": "AF-CARE: Komplexní péče o pacienta s fibrilací síní",
        "text": "ESC 2024 nahrazuje starší schémata integrovaným přístupem **AF-CARE**: **C** (Comorbidity management - léčba komorbidit a rizikových faktorů), **A** (Avoid stroke - antikoagulace dle skóre CHA2DS2-VA), **R** (Rate & Rhythm control - časná rytmizace a katetrová ablace) a **E** (Evaluation - dynamické přehodnocování). Zvýrazněn je význam časné katetrové ablace jako metody 1. volby!"
      },
      "sections": [
        {
          "title": "1. AF-CARE Rámec krok za krokem",
          "color": "purple",
          "content": "\n                            <div class=\"grid sm:grid-cols-2 gap-3 my-3 text-xs\">\n                                <div class=\"p-3 bg-slate-900 border border-purple-500/30 rounded-xl\">\n                                    <span class=\"font-bold text-purple-400\">C: Comorbidities & Risk Factors</span>\n                                    <p class=\"text-slate-300 mt-1\">Léčba hypertenze, redukce hmotnosti při obezitě (cíl &ge; 10 % úbytek), kompenzace diabetu, léčba spánkové apnoe (CPAP) a eliminace alkoholu.</p>\n                                </div>\n                                <div class=\"p-3 bg-slate-900 border border-purple-500/30 rounded-xl\">\n                                    <span class=\"font-bold text-purple-400\">A: Avoid stroke / Anticoagulation</span>\n                                    <p class=\"text-slate-300 mt-1\">Prevence CMP pomocí <strong>CHA2DS2-VA skóre</strong>. Preference přímých perorálních antikoagulancií (NOAC: Apixaban, Rivaroxaban, Dabigatran, Edoxaban) před Warfarinem.</p>\n                                </div>\n                                <div class=\"p-3 bg-slate-900 border border-purple-500/30 rounded-xl\">\n                                    <span class=\"font-bold text-purple-400\">R: Rate and Rhythm Control</span>\n                                    <p class=\"text-slate-300 mt-1\">Kontrola frekvence (betablokátory, verapamil/diltiazem, digoxin) a <strong>časná kontrola rytmu</strong> (katetrizační ablace PVI, kardioverze, antiarytmika) pro zachování sinusového rytmu.</p>\n                                </div>\n                                <div class=\"p-3 bg-slate-900 border border-purple-500/30 rounded-xl\">\n                                    <span class=\"font-bold text-purple-400\">E: Evaluation & Re-assessment</span>\n                                    <p class=\"text-slate-300 mt-1\">Pravidelné přehodnocování symptomů, kvality života, progrese arytmie a renálních/jaterních funkcí pro bezpečné dávkování NOAC.</p>\n                                </div>\n                            </div>\n                        "
        },
        {
          "title": "2. Stratifikace rizika CMP: CHA2DS2-VA a Indikace NOAC",
          "color": "cyan",
          "content": "\n                            <div class=\"p-3.5 bg-slate-900 border border-cyan-500/30 rounded-xl text-xs text-slate-300 space-y-2\">\n                                <p><strong>CHA2DS2-VA skóre:</strong> C (Srdeční selhání = 1), H (Hypertenze = 1), A2 (Věk &ge; 75 let = <strong>2 body</strong>), D (Diabetes = 1), S2 (Předchozí CMP/TIA/tromboembolie = <strong>2 body</strong>), V (Vaskulární onemocnění = 1), A (Věk 65–74 let = 1).</p>\n                                <div class=\"p-2.5 bg-cyan-950/40 border border-cyan-500/30 rounded-lg\">\n                                    <span class=\"font-bold text-cyan-400\">Indikační pravidla pro perorální antikoagulaci (NOAC):</span>\n                                    <ul class=\"list-disc ml-5 mt-1 space-y-0.5 text-[11px]\">\n                                        <li><strong>Skóre &ge; 2 body:</strong> Antikoagulace jednoznačně <strong>DOPORUČENA (Třída I, Level A)</strong>.</li>\n                                        <li><strong>Skóre = 1 bod:</strong> Antikoagulace by měla být <strong>ZVAŽOVÁNA (Třída IIa, Level B)</strong>.</li>\n                                        <li><strong>Skóre = 0 bodů:</strong> Antikoagulace ani protidestičková léčba se <strong>NEDOPORUČUJE (Třída III)</strong>.</li>\n                                    </ul>\n                                </div>\n                                <p class=\"text-[11px] text-slate-400\"><em>Krvácivé riziko (HAS-BLED skóre):</em> Slouží k identifikaci a ovlivnění modifikovatelných rizikových faktorů krvácení, <strong>nikdy ne jako důvod k nepodání antikoagulace</strong>!</p>\n                            </div>\n                        "
        },
        {
          "title": "3. Kontrola rytmu: Kardioverze, Ablace & Farmakoterapie",
          "color": "rose",
          "content": "\n                            <div class=\"space-y-2.5 text-xs text-slate-300\">\n                                <div class=\"p-3 bg-slate-900 border border-slate-700 rounded-xl\">\n                                    <span class=\"font-bold text-rose-400\">⚡ Elektrická vs. Farmakologická kardioverze</span>\n                                    <p class=\"mt-1\">\n                                        Při trvání FS &gt; 48 hodin (nebo neznámé délce) je kardioverze bezpečná pouze po <strong>&ge; 3 týdnech účinné antikoagulace (NOAC)</strong> NEBO po <strong>jícnové echokardiografii (TEE)</strong> vylučující trombus v oušku levé síně. Po kardioverzi musí antikoagulace pokračovat &ge; 4 týdny (při CHA2DS2-VA &ge; 1 trvale).\n                                    </p>\n                                </div>\n                                <div class=\"p-3 bg-slate-900 border border-emerald-500/30 rounded-xl\">\n                                    <span class=\"font-bold text-emerald-400\">🔥 Katetrová ablace izolace plicních žil (PVI)</span>\n                                    <p class=\"mt-1\">\n                                        Dle ESC 2024 je katetrizační PVI ablace <strong>doporučena jako terapie 1. volby (Třída I)</strong> u symptomatické paroxysmální i perzistentní FS k redukci recidiv arytmie a zlepšení funkce LK, a u pacientů s FS a srdečním selháním se sníženou EF (studie CASTLE-AF).\n                                    </p>\n                                </div>\n                            </div>\n                        "
        }
      ]
    },
    "recall": {
      "scenarios": [
        {
          "id": "af-r1",
          "title": "Kazuistika 1: Antikoagulace po úspěšné ablaci",
          "question": "66letý muž s hypertenzí a diabetem podstoupil úspěšnou radiofrekvenční ablaci plicních žil (PVI) pro paroxysmální fibrilaci síní. Při kontrole po 6 měsících je na 7denním EKG Holteru trvalý sinusový rytmus bez jediné epizody FS. Pacient žádá o vysazení Apixabanu. Jak rozhodnete?",
          "answer": "Apixaban NEVYSADÍTE. Indikace dlouhodobé antikoagulace závisí výhradně na pacientově tromboembolickém riziku (CHA2DS2-VA = 3 body: věk 66 = 1, hypertenze = 1, DM = 1), nikoli na zdánlivém vymizení arytmie po ablaci. Až u 30 % pacientů se po ablaci vyskytují asymptomatické mikropavoučky FS, které nesou plné riziko kardioembolické CMP.",
          "pearl": "Úspěšná ablace ani kardioverze neopravňuje k vysazení antikoagulace u pacientů s CHA2DS2-VA skóre &ge; 2 (muži) resp. &ge; 3 (ženy)."
        },
        {
          "id": "af-r2",
          "title": "Kazuistika 2: Fibrilace síní u syndromu WPW (FBI Tachykardie)",
          "question": "26letý mladík je přivezen pro bušení srdce a synkopu. EKG: nepravidelná tachykardie se širokými bizarními QRS komplexy a frekvencí 240/min (Fast, Broad, Irregular - FBI pattern). O jakou arytmii jde a jaký lék je přísně kontraindikován?",
          "answer": "Jedná se o preexcitovanou fibrilaci síní s antegrádním převodem přídatnou drahou (Kentovým svazkem) u WPW syndromu. Přísně kontraindikovány jsou léky blokující AV uzel (Adenosin, Verapamil, Diltiazem, Betablokátory, Digoxin)! Zablokování AV uzlu způsobí, že všechny vzruchy projdou nekontrolovaně přídatnou drahou přímo na komory s okamžitým přechodem do fibrilace komor. Lékem volby je urgentní elektrická kardioverze nebo i.v. Ibutilid.",
          "pearl": "Mnemotechnika FBI = Fast, Broad, Irregular -> podezření na AF + WPW -> zákaz blokátorů AV uzlu, okamžitý výboj!"
        }
      ],
      "quiz": {
        "title": "Rozhodovací kvíz: Farmakologická kardioverze",
        "prompt": "60letý pacient s paroxysmální fibrilací síní trvající 6 hodin a známou těžkou ischemickou chorobou srdeční (po infarktu myokardu, LVEF 35 %) má být medikamentózně kardiovertován na sinusový rytmus. Který z léků je vhodný?",
        "options": [
          {
            "text": "A) Amiodaron i.v. infuze",
            "isCorrect": true
          },
          {
            "text": "B) Flecainid i.v. bolus",
            "isCorrect": false
          },
          {
            "text": "C) Propafenon perorálně ('Pill in the pocket')",
            "isCorrect": false
          },
          {
            "text": "D) Verapamil i.v.",
            "isCorrect": false
          }
        ],
        "explanation": "U pacientů se strukturálním postižením srdce (ICHS, po prodělaném IM, hypertrofie LK či srdeční selhání s redukovanou EF) jsou antiarytmika třídy Ic (Flecainid, Propafenon) přísně kontraindikována pro vysoké riziko proarytmie a náhlé smrti (studie CAST). Lékem volby pro farmakologickou kardioverzi u strukturálního onemocnění srdce je Amiodaron i.v."
      }
    },
    "breakdown": {
      "classThree": [
        "Podávání antiarytmik třídy Ic (Flecainid, Propafenon) pacientům se strukturálním postižením srdce, po IM nebo se srdečním selháním.",
        "Podávání blokátorů AV uzlu (Adenosin, Verapamil, Diltiazem, Betablokátory, Digoxin) u preexcitované fibrilace síní s WPW syndromem (riziko fibrilace komor).",
        "Podávání kyseliny acetylsalicylové (aspirinu) nebo duální protidestičkové léčby jako náhrady za NOAC pro prevenci CMP u fibrilace síní.",
        "Vysazení antikoagulace po úspěšné katetrizační ablaci u pacientů s vysokým CHA2DS2-VA skóre.",
        "Kardioverze fibrilace síní trvající &gt; 48 hodin bez předchozí &ge; 3týdenní účinné antikoagulace nebo bez vyloučení trombu jícnovou echokardiografií (TEE)."
      ],
      "mustKnow": [
        "AF-CARE rámec: Comorbidities, Avoid stroke, Rate/Rhythm control, Evaluation.",
        "CHA2DS2-VA skóre: &ge; 2 body indikace NOAC (Třída I), 1 bod zvážit NOAC (Třída IIa), 0 bodů bez OAC.",
        "NOAC (Apixaban, Rivaroxaban, Dabigatran, Edoxaban) mají přednost před Warfarinem.",
        "PVI katetrizační ablace je Třída I pro symptomatickou FS a FS se srdečním selháním.",
        "FBI tachykardie (Fast, Broad, Irregular) = AF + WPW -> urgentní elektroimpulzoterapie (DC výboj)!"
      ]
    },
    "guidelineLinks": [
      {
        "title": "2024 ESC Guidelines for the management of atrial fibrillation",
        "year": 2024,
        "journal": "European Heart Journal",
        "doi": "10.1093/eurheartj/ehae176",
        "url": "https://academic.oup.com/eurheartj/article/45/38/3314/7740997"
      }
    ]
  },
  {
    "id": "arytmie",
    "number": 6,
    "title": "Supraventrikulární a komorové arytmie",
    "shortDesc": "Diferenciální diagnostika úzkokomorových a širokokomorových tachykardií, AVNRT, AVRT/WPW, elektrická bouře, antiarytmika a katetrové ablace.",
    "icon": "⚡",
    "badge": "ESC Guidelines",
    "badgeColor": "amber",
    "theory": {
      "banner": {
        "tag": "Diferenciální diagnostika tachyarytmií",
        "title": "Úzkokomorové (QRS < 120 ms) vs. Širokokomorové (QRS &ge; 120 ms) tachykardie",
        "text": "Základním klinickým krokem je posouzení hemodynamické stability (hypotenze, synkopa, šok, plicní edém = okamžitá synchronizovaná elektrická kardioverze) a šíře komplexu QRS. Každá širokokomorová tachykardie musí být až do vyvrácení považována za **komorovou tachykardii (KT)**, neboť podání blokátorů AV uzlu u KT může způsobit fatální kolaps!"
      },
      "sections": [
        {
          "title": "1. Paroxysmální SVT: AVNRT vs. AVRT vs. Síňová tachykardie",
          "color": "amber",
          "content": "\n                            <div class=\"grid md:grid-cols-3 gap-3 my-3 text-xs\">\n                                <div class=\"p-3 bg-slate-900 border border-slate-700 rounded-xl\">\n                                    <span class=\"font-bold text-amber-400\">1. AVNRT (Nodální re-entry)</span>\n                                    <p class=\"text-slate-300 mt-1\">Nejčastější SVT (60 %). Reentry v AV uzlu (rychlá a pomalá dráha). Na EKG: chybějící nebo retrográdní P schovaná v QRS (pseudo r' ve V1, pseudo s ve spodních svodech). RP interval &lt; 70 ms.</p>\n                                </div>\n                                <div class=\"p-3 bg-slate-900 border border-slate-700 rounded-xl\">\n                                    <span class=\"font-bold text-cyan-400\">2. AVRT (Ortodromní / WPW)</span>\n                                    <p class=\"text-slate-300 mt-1\">30 % SVT. Reentry přes přídatný Kentův svazek (antegrádně AV uzlem, retrográdně drahou). Úzký QRS, retrográdní vlna P je viditelná za QRS (v segmentu ST). RP &gt; 70 ms.</p>\n                                </div>\n                                <div class=\"p-3 bg-slate-900 border border-slate-700 rounded-xl\">\n                                    <span class=\"font-bold text-purple-400\">3. Síňová tachykardie (AT)</span>\n                                    <p class=\"text-slate-300 mt-1\">Ektopické ložisko v síni. EKG: abnormální morfologie vlny P s frekvencí 130–240/min, RP &gt; PR (tzv. long-RP tachykardie). Vagus ani adenosin ji obvykle nezruší, pouze odhalí P vlny.</p>\n                                </div>\n                            </div>\n                        "
        },
        {
          "title": "2. Akutní management SVT: Vagus a Adenosin",
          "color": "emerald",
          "content": "\n                            <div class=\"p-3.5 bg-slate-900 border border-emerald-500/30 rounded-xl text-xs text-slate-300 space-y-2\">\n                                <p><strong>Krok 1: Vagové manévry (Modifikovaný Valsalva manévr dle studie REVERT):</strong> Pacient provádí usilovný výdech do stříkačky (tlak 40 mmHg) vsedě po dobu 15 s, následně je položen na záda s pasivním zvednutím dolních končetin o 45° na 15 s. Úspěšnost terminace stoupá ze 17 % na <strong>43 %</strong>!</p>\n                                <p><strong>Krok 2: Adenosin i.v. bolus:</strong> Rychlý i.v. bolus <strong>6 mg</strong> do velké kubitální žíly s okamžitým proplachem 20 ml fyziologického roztoku. Při neúspěchu eskalace na <strong>12 mg</strong>, případně <strong>18 mg</strong>. <em>Kontraindikace: těžké astma bronchiale!</em></p>\n                                <p><strong>Krok 3: Nondihydropyridinové BKK / Betablokátory:</strong> Verapamil 5–10 mg i.v. pomalu nebo Metoprolol 5 mg i.v.</p>\n                            </div>\n                        "
        },
        {
          "title": "3. Komorové arytmie, Elektrická bouře & ICD",
          "color": "rose",
          "content": "\n                            <div class=\"space-y-2.5 text-xs text-slate-300\">\n                                <div class=\"p-3 bg-slate-900 border border-rose-500/30 rounded-xl\">\n                                    <span class=\"font-bold text-rose-400\">🚨 Elektrická bouře (Electrical Storm)</span>\n                                    <p class=\"mt-1\">\n                                        Definována jako <strong>&ge; 3 samostatné epizody setrvalé KT/FK během 24 hodin</strong> vyžadující kardioverzi/defibrilaci. Urgentní protokol: hluboká sedace/analgosedace, i.v. neslektivní betablokátor (Esmolol / Propranolol) + i.v. Amiodaron, korekce kalémie/magnezémie, urgentní SKG k vyloučení ischémie a urgentní katetrová ablace KT či blokáda ganglion stellatum.\n                                    </p>\n                                </div>\n                                <div class=\"p-3 bg-slate-900 border border-slate-700 rounded-xl\">\n                                    <span class=\"font-bold text-cyan-400\">🛡️ Indikace ICD v sekundární prevenci</span>\n                                    <p class=\"mt-1\">\n                                        Implantace ICD je jednoznačně indikována (Třída I) u pacientů po přežité zástavě oběhu pro fibrilaci komor (FK) nebo po hemodynamicky nestabilní komorové tachykardii (KT), pokud nebyla vyvolána plně reverzibilní příčinou (např. akutní IM během prvních 48 hodin).\n                                    </p>\n                                </div>\n                            </div>\n                        "
        }
      ]
    },
    "recall": {
      "scenarios": [
        {
          "id": "ary-r1",
          "title": "Kazuistika 1: Širokokomorová tachykardie nejasného původu",
          "question": "62letý muž s anamnézou infarktu myokardu před 4 lety přichází na urgentní příjem s palpitacemi a TK 105/70 mmHg. EKG: pravidelná tachykardie s frekvencí 165/min, šíře QRS 150 ms s morfologií LBBB. Lékař zvažuje podat Verapamil i.v. k ověření, zda nejde o SVT s aberací. Je tento postup správný?",
          "answer": "POSTUP JE CHYBNÝ A ŽIVOT OHROŽUJÍCÍ. U každé širokokomorové tachykardie u pacienta s anamnézou infarktu myokardu či strukturálního onemocnění srdce je pravděpodobnost komorové tachykardie (KT) vyšší než 90 %. Podání verapamilu u KT vede k vazodilataci, těžkému negativně inotropnímu účinku a okamžitému kardiogennímu kolapsu či fibrilaci komor. Lékem volby je Amiodaron i.v. nebo synchronizovaná elektrická kardioverze.",
          "pearl": "Zlaté pravidlo urgentní kardiologie: Širokokomorová tachykardie je KT, dokud se neprokáže opak. Verapamil a diltiazem jsou u širokých QRS přísně zakázány!"
        },
        {
          "id": "ary-r2",
          "title": "Kazuistika 2: Torsades de Pointes a dlouhý QT interval",
          "question": "55letá žena léčená sotalolem a ciprofloxacinem pro močovou infekci náhle opakovaně kolabuje. Monitor ukazuje polymorfní komorovou tachykardii s vřetenovitým stáčením osy QRS kolem izoelektrické linie (Torsades de Pointes) s výchozím QTc 560 ms. Jaká je okamžitá medikamentózní léčba volby?",
          "answer": "Intravenózní podání síranu hořečnatého (Magnesium sulfuricum 2 g i.v. pomalým bolusem během 1–2 minut, případně s následnou kontinuální infuzí), okamžité vysazení všech léků prodlužujících QT interval, normalizace kalémie (k horní hranici 4,5–5,0 mmol/l) a zrychlení srdeční frekvence (temporary pacing nebo izoprenalin) k zabránění bradykardických spouštěčů.",
          "pearl": "Magnezium i.v. je lékem první volby u Torsades de Pointes i při normální hladině hořčíku v séru!"
        }
      ],
      "quiz": {
        "title": "Rozhodovací kvíz: Brugada kritéria pro širokokomorové tachykardie",
        "prompt": "Který z následujících EKG znaků jednoznačně POTVRZUJE diagnózu komorové tachykardie (KT) s téměř 100% specificitou?",
        "options": [
          {
            "text": "A) Přítomnost AV disociace (nezávislé vlny P disociované od širokých QRS komplexů) nebo fúzní/splynulé stahy (Fusion beats)",
            "isCorrect": true
          },
          {
            "text": "B) Pravidelná frekvence 150/min",
            "isCorrect": false
          },
          {
            "text": "C) Šíře QRS komplexu 125 ms",
            "isCorrect": false
          },
          {
            "text": "D) Pozitivní odpověď na masáž karotického sinu",
            "isCorrect": false
          }
        ],
        "explanation": "Průkaz atrioventrikulární (AV) disociace (kdy síně depolarizují nezávisle na komorách, což se projeví náhodnými P vlnami, splynulými stahy 'fusion beats' nebo zachycenými sinusovými stahy 'capture beats') je patognomickým znakem komorové tachykardie se specificitou blížící se 100 %."
      }
    },
    "breakdown": {
      "classThree": [
        "Podávání Verapamilu nebo Diltiazemu u širokokomorových tachykardií nejasného původu (riziko kardiogenního šoku a asystolie u KT).",
        "Podávání blokátorů AV uzlu (Adenosin, Betablokátory, Verapamil, Digoxin) u preexcitované fibrilace síní (WPW).",
        "Aplikace masáže karotického sinu u pacientů se šelestem nad karotidami nebo anamnézou TIA/CMP v posledních 6 měsících.",
        "Podávání antiarytmik prodlužujících QT interval (např. Sotalol, Dronedaron) u pacientů s bazálním QTc &gt; 480 ms."
      ],
      "mustKnow": [
        "Hemodynamická nestabilita při tachyarytmii = okamžitá synchronizovaná elektrická kardioverze!",
        "SVT algoritmus: Modifikovaný Valsalva manévr -> Adenosin 6-12-18 mg i.v. rapid bolus.",
        "Širokokomorová tachykardie (QRS &ge; 120 ms) = považuj vždy za KT, lékem volby je Amiodaron i.v.",
        "Elektrická bouře: &ge; 3 epizody KT/FK za 24h -> sedace + i.v. betablokátor + i.v. amiodaron.",
        "Torsades de Pointes (dlouhé QT): Lékem volby je Magnesium sulfuricum 2 g i.v."
      ]
    },
    "guidelineLinks": [
      {
        "title": "2019 ESC Guidelines for the management of patients with supraventricular tachycardia",
        "year": 2019,
        "journal": "European Heart Journal",
        "doi": "10.1093/eurheartj/ehz467",
        "url": "https://academic.oup.com/eurheartj/article/41/5/655/5556821"
      },
      {
        "title": "2022 ESC Guidelines for the management of patients with ventricular arrhythmias and the prevention of sudden cardiac death",
        "year": 2022,
        "journal": "European Heart Journal",
        "doi": "10.1093/eurheartj/ehac262",
        "url": "https://academic.oup.com/eurheartj/article/43/40/3997/6675633"
      }
    ]
  },
  {
    "id": "chlopne",
    "number": 7,
    "title": "Chlopenní vady a intervenční kardiologie",
    "shortDesc": "Aortální stenóza (kritéria těžké AS, low-flow low-gradient), TAVI vs. SAVR rozhodovací algoritmus, mitrální regurgitace (primární vs. sekundární, TEER / MitraClip) a chlopenní protézy.",
    "icon": "🚪",
    "badge": "ESC/EACTS Guidelines",
    "badgeColor": "rose",
    "theory": {
      "banner": {
        "tag": "Moderní management chlopenních vad",
        "title": "Heart Team, stratifikace těžké AS a miniinvazivní intervence (TAVI & TEER)",
        "text": "Rozhodování o intervenci chlopenních vad dnes řídí multidisciplinární **Heart Team**. Katetrizační implantace aortální chlopně (**TAVI**) se stala dominantní metodou u pacientů ve věku &ge; 75 let nebo s vysokým operačním rizikem, zatímco transkatétrová 'edge-to-edge' plastika (**TEER / MitraClip**) přináší průlom v léčbě těžké sekundární mitrální regurgitace."
      },
      "sections": [
        {
          "title": "1. Aortální stenóza: Diagnostická kritéria & Klasifikace",
          "color": "rose",
          "content": "\n                            <div class=\"p-3.5 bg-slate-900 border border-slate-700 rounded-xl text-xs text-slate-300 space-y-2\">\n                                <p class=\"font-bold text-rose-400\">Echokardiografická triáda těžké aortální stenózy (High-Gradient AS):</p>\n                                <div class=\"grid sm:grid-cols-3 gap-2 text-[11px]\">\n                                    <div class=\"p-2 bg-rose-950/40 border border-rose-500/30 rounded-lg text-center\">\n                                        <div class=\"font-bold text-rose-400\">Plocha ústí (AVA)</div>\n                                        <div class=\"text-white font-mono mt-0.5\">&lt; 1,0 cm²</div>\n                                        <div class=\"text-slate-400 text-[10px]\">(index AVAi &lt; 0,6 cm²/m²)</div>\n                                    </div>\n                                    <div class=\"p-2 bg-rose-950/40 border border-rose-500/30 rounded-lg text-center\">\n                                        <div class=\"font-bold text-rose-400\">Střední gradient (Mean ΔP)</div>\n                                        <div class=\"text-white font-mono mt-0.5\">&ge; 40 mmHg</div>\n                                    </div>\n                                    <div class=\"p-2 bg-rose-950/40 border border-rose-500/30 rounded-lg text-center\">\n                                        <div class=\"font-bold text-rose-400\">Maximální rychlost (Vmax)</div>\n                                        <div class=\"text-white font-mono mt-0.5\">&ge; 4,0 m/s</div>\n                                    </div>\n                                </div>\n                                <p><strong>Low-Flow, Low-Gradient AS (Nízkoprůtoková AS s nízkým gradientem):</strong></p>\n                                <ul class=\"list-disc ml-5 space-y-1 text-[11px]\">\n                                    <li><em>Klasická (s redukovanou EF LK &lt; 50 %):</em> Vyžaduje <strong>nízkodávkový Dobutaminový zátěžový test (DSE)</strong> k odlišení skutečně těžké AS od 'pseudostenózy' a ověření kontraktilní rezervy.</li>\n                                    <li><em>Paradoxní (se zachovanou EF LK &ge; 50 %):</em> Typicky u starších hypertoniček s malou hypertrofickou komorou. Diagnózu potvrdí <strong>CT kalciové skóre aortální chlopně</strong> (Agatston skóre &gt; 3000 u mužů, &gt; 1600 u žen = těžká AS).</li>\n                                </ul>\n                            </div>\n                        "
        },
        {
          "title": "2. Indikace intervence u AS: TAVI vs. Chirurgická náhrada (SAVR)",
          "color": "amber",
          "content": "\n                            <div class=\"p-3.5 bg-slate-900 border border-amber-500/30 rounded-xl text-xs text-slate-300 space-y-2\">\n                                <p><strong>Základní indikace:</strong> Všichni <strong>symptomatičtí pacienti s těžkou AS</strong> (triáda: angina, synkopa, dušnost) a asymptomatičtí pacienti s poklesem LVEF &lt; 50 % nebo patologickým zátěžovým testem (Třída I).</p>\n                                <div class=\"grid sm:grid-cols-2 gap-3 mt-2\">\n                                    <div class=\"p-2.5 bg-slate-800 border border-slate-600 rounded-lg\">\n                                        <span class=\"font-bold text-cyan-400\">TAVI (Katetrová implantace)</span>\n                                        <ul class=\"list-disc ml-4 mt-1 text-[11px] space-y-0.5\">\n                                            <li>Věk <strong>&ge; 75 let</strong>.</li>\n                                            <li>Vysoké chirurgické riziko (STS skóre / EuroSCORE II &gt; 8 %).</li>\n                                            <li>Přítomnost 'porcelánové aorty' nebo předchozí sternotomie.</li>\n                                            <li>Vhodný transfemorální cévní přístup.</li>\n                                        </ul>\n                                    </div>\n                                    <div class=\"p-2.5 bg-slate-800 border border-slate-600 rounded-lg\">\n                                        <span class=\"font-bold text-amber-400\">SAVR (Chirurgická náhrada)</span>\n                                        <ul class=\"list-disc ml-4 mt-1 text-[11px] space-y-0.5\">\n                                            <li>Věk <strong>&lt; 75 let</strong> a nízké riziko (STS &lt; 4 %).</li>\n                                            <li>Nutnost současného kardiochirurgického výkonu (CABG, operace aorty).</li>\n                                            <li>Bikuspidální aortální chlopně s rizikem dilatace ascendentní aorty.</li>\n                                        </ul>\n                                    </div>\n                                </div>\n                            </div>\n                        "
        },
        {
          "title": "3. Mitrální regurgitace: Primární vs. Sekundární & TEER (MitraClip)",
          "color": "cyan",
          "content": "\n                            <div class=\"space-y-2.5 text-xs text-slate-300\">\n                                <div class=\"p-3 bg-slate-900 border border-slate-700 rounded-xl\">\n                                    <span class=\"font-bold text-cyan-400\">1. Primární (Degenerativní) Mitrální Regurgitace</span>\n                                    <p class=\"mt-1\">Postižení samotného aparátu chlopně (prolaps cípu, ruptura šlašinky, myxomatózní degenerace). <strong>Léčbou volby je kardiochirurgická plastika chlopně (Mitral Valve Repair)</strong>, která má přednost před náhradou.</p>\n                                </div>\n                                <div class=\"p-3 bg-slate-900 border border-emerald-500/30 rounded-xl\">\n                                    <span class=\"font-bold text-emerald-400\">2. Sekundární (Funkční) Mitrální Regurgitace & TEER</span>\n                                    <p class=\"mt-1\">\n                                        Chlopenní cípy jsou strukturálně normální; regurgitace vzniká dilatací prstence a tetheringem cípů v důsledku remodelace LK při kardiomyopatii nebo po infarktu. Krok 1: Maximální optimalizace farmakoterapie HF (FMT) a CRT. Pokud těžká regurgitace přetrvává: <strong>Transkatétrová 'edge-to-edge' oprava (TEER / MitraClip)</strong> dle studie COAPT přináší dramatické snížení mortality a hospitalizací (Třída I/IIa).\n                                    </p>\n                                </div>\n                            </div>\n                        "
        },
        {
          "title": "4. Antitrombotická léčba po náhradách chlopní",
          "color": "purple",
          "content": "\n                            <div class=\"p-3.5 bg-slate-900 border border-purple-500/30 rounded-xl text-xs text-slate-300 space-y-2\">\n                                <div class=\"p-2 bg-rose-950/40 border border-rose-500/40 rounded-lg\">\n                                    <span class=\"font-bold text-rose-400\">⚙️ Mechanická chlopenní protéza</span>\n                                    <p class=\"mt-0.5\">Doživotní antikoagulace <strong>Warfarinem (VKA)</strong>. <strong>NOAC jsou u mechanických chlopní přísně ZAKÁZÁNY (Třída III)</strong> dle studie RE-ALIGN! Cílové INR: <strong>2,5–3,0</strong> pro mechanickou aortální chlopně bez rizika; <strong>3,0–3,5</strong> pro mitrální mechanickou protézu nebo při rizikových faktorech.</p>\n                                </div>\n                                <div class=\"p-2 bg-slate-800 rounded-lg border border-slate-700\">\n                                    <span class=\"font-bold text-cyan-400\">🌿 Biologická chlopenní protéza / TAVI</span>\n                                    <p class=\"mt-0.5\">Po chirurgické bio-protéze VKA nebo NOAC po dobu prvních 3 měsíců, dále Aspirin 100 mg denně. Po TAVI bez jiné indikace k OAC: celoživotní <strong>monoterapie Aspirinem</strong> (DAPT po TAVI zvyšuje krvácení bez benefitu).</p>\n                                </div>\n                            </div>\n                        "
        }
      ]
    },
    "recall": {
      "scenarios": [
        {
          "id": "chl-r1",
          "title": "Kazuistika 1: Volba antikoagulace u mechanické chlopně",
          "question": "54letý pacient s implantovanou mechanickou mitrální protézou přichází s žádostí o převedení z Warfarinu na moderní Apixaban (Eliquis) pro obtížné hlídání INR a časté odběry krve. Jaká je správná odpověď lékaře?",
          "answer": "Převedení na NOAC (Apixaban, Rivaroxaban, Dabigatran, Edoxaban) je u mechanických chlopenních protéz PŘÍSNĚ ZAKÁZÁNO (ESC Třída III). Randomizovaná studie RE-ALIGN prokázala, že NOAC u mechanických chlopní selhávají a vedou k dramatickému vzestupu fatálních trombóz chlopně a embolických mozkových příhod ve srovnání s Warfarinem. Pacient musí trvale pokračovat ve Warfarinu s cílovým INR 3,0–3,5.",
          "pearl": "Jedinou schválenou a účinnou antikoagulací pro mechanické chlopenní protézy je Warfarin (VKA)."
        },
        {
          "id": "chl-r2",
          "title": "Kazuistika 2: TAVI vs. SAVR u 78letého pacienta",
          "question": "78letý aktivní senior je vyšetřován pro nově vzniklou námahovou dušnost a presynkopy. Na ECHO je plocha aortálního ústí AVA 0,7 cm², střední gradient 48 mmHg, Vmax 4,4 m/s (těžká AS), LVEF 55 %. CT angiografie prokazuje prostupné femorální tepny a příznivou anatomii aortálního kořene. Kterou intervenční metodu doporučí Heart Team?",
          "answer": "Heart Team doporučí Transkatétrovou implantaci aortální chlopně transfemorálním přístupem (TAVI). Dle platných ESC/EACTS Guidelines je u pacientů ve věku &ge; 75 let s příznivou anatomií transfemorálního přístupu TAVI preferovanou metodou volby (Třída I, Level A) před klasickou chirurgickou operací (SAVR).",
          "pearl": "TAVI nabízí srovnatelnou až nižší perioperační mortalitu, výrazně kratší dobu rekonvalescence a vyhnutí se mimotělnímu oběhu a sternotomii."
        }
      ],
      "quiz": {
        "title": "Rozhodovací kvíz: Klasická vs. Paradoxní Low-Flow Low-Gradient AS",
        "prompt": "U pacienta s podezřením na těžkou aortální stenózu naměříte plochu ústí AVA 0,8 cm², ale střední gradient je pouze 28 mmHg a ejekční frakce LK je 30 %. Které vyšetření je klíčové k rozlišení skutečně těžké AS od pseudostenózy?",
        "options": [
          {
            "text": "A) Nízkodávková dobutaminová zátěžová echokardiografie (DSE)",
            "isCorrect": true
          },
          {
            "text": "B) Zátěžové EKG na bicyklovém ergometru",
            "isCorrect": false
          },
          {
            "text": "C) Magnetická rezonance srdce",
            "isCorrect": false
          },
          {
            "text": "D) Okamžitá pravostranná srdeční katetrizace",
            "isCorrect": false
          }
        ],
        "explanation": "Při klasické Low-Flow Low-Gradient aortální stenóze (redukovaná EF LK < 50 %, indexovaný tepový objem SVi < 35 ml/m²) slabé srdce nedokáže vygenerovat dostatečný tlakový gradient. Nízkodávkový Dobutaminový test (DSE) zvýší kontraktilitu LK: pokud plocha AVA zůstane < 1,0 cm² a gradient stoupne > 40 mmHg, jde o skutečně těžkou AS. Pokud se plocha AVA rozšíří > 1,0 cm², šlo o pseudostenózu."
      }
    },
    "breakdown": {
      "classThree": [
        "Podávání NOAC (přímých perorálních antikoagulancií) pacientům s mechanickou chlopenní protézou (Třída III).",
        "Provádění zátěžového testu (ergometrie) u symptomatických pacientů s těžkou aortální stenózou (riziko synkopy a zástavy srdce).",
        "Odkládání chirurgické či katetrové intervence u pacientů se symptomatickou těžkou aortální stenózou (roční mortalita neléčené symptomatické AS přesahuje 50 %).",
        "Rutinní podávání duální protidestičkové léčby (DAPT) po TAVI bez jiné indikace (zvyšuje krvácení bez redukce ischemie)."
      ],
      "mustKnow": [
        "Kritéria těžké AS: AVA &lt; 1,0 cm² (AVAi &lt; 0,6 cm²/m²), Mean gradient &ge; 40 mmHg, Vmax &ge; 4,0 m/s.",
        "Symptomatická triáda AS: Stenokardie, synkopa, dušnost (při vzniku symptomů prudký nárůst mortality).",
        "TAVI vs. SAVR: Věk &ge; 75 let a transfemorální přístup -> TAVI; Věk &lt; 75 let a nízké riziko -> SAVR.",
        "Mechanická protéza = pouze Warfarin (INR 2,5–3,5 dle pozice chlopně). NOAC jsou kontraindikovány!",
        "Sekundární mitrální regurgitace: FMT + CRT -> při refrakteritě TEER (MitraClip dle studie COAPT)."
      ]
    },
    "guidelineLinks": [
      {
        "title": "2021 ESC/EACTS Guidelines for the management of valvular heart disease",
        "year": 2021,
        "journal": "European Heart Journal",
        "doi": "10.1093/eurheartj/ehab395",
        "url": "https://academic.oup.com/eurheartj/article/43/7/561/6358479"
      }
    ]
  },
  {
    "id": "kmp",
    "number": 8,
    "title": "Kardiomyopatie a myokarditidy (2023 ESC Guidelines)",
    "shortDesc": "Fenotypový přístup, Hypertrofická kardiomyopatie (HCM) a léčba Mavacamtenem, Dilatační (DCM), Arytmogenní (ARVC), Srdeční amyloidóza (ATTR vs. AL) a Kardio MR u myokarditid.",
    "icon": "🧬",
    "badge": "2023 ESC Guidelines",
    "badgeColor": "cyan",
    "theory": {
      "banner": {
        "tag": "Nový fenotypový a genetický přístup (2023 ESC)",
        "title": "Kardiomyopatie: Od morfologie k cílené molekulární léčbě",
        "text": "Guidelines ESC 2023 zavádějí fenotypovou klasifikaci: HCM, DCM, NDLVC (Non-dilated LV cardiomyopathy), ARVC a RCM. Klíčovým pilířem je časné **genetické testování a kaskádový rodinný screening**, spolu s nasazením revolučních cílených léků: **Mavacamten** pro obstrukční HCM a **Tafamidis** pro transthyretinovou amyloidózu srdce (ATTR)."
      },
      "sections": [
        {
          "title": "1. Hypertrofická kardiomyopatie (HCM) & Obstrukce výtokového traktu (LVOT)",
          "color": "cyan",
          "content": "\n                            <div class=\"p-3.5 bg-slate-900 border border-slate-700 rounded-xl text-xs text-slate-300 space-y-2\">\n                                <p><strong>Definice HCM:</strong> Tloušťka stěny levé komory v kterémkoli segmentu <strong>&ge; 15 mm</strong> (nebo <strong>&ge; 13 mm</strong> při pozitivní rodinné anamnéze), kterou nelze vysvětlit pouze abnormálními podmínkami plnění (hypertenze, aortální stenóza). Nejčastěji mutace genů sarkomery (MYBPC3, MYH7).</p>\n                                <p><strong>Obstrukční HCM (oHCM):</strong> Gradient ve výtokovém traktu levé komory (LVOT) v klidu nebo při provokaci (Valsalva) <strong>&ge; 30 mmHg</strong> (hemodynamicky významný při &ge; 50 mmHg). Způsoben asymetrickou hypertrofií septa a systolickým dopředným pohybem mitrální chlopně (SAM fenomén).</p>\n                                <div class=\"p-2.5 bg-cyan-950/40 border border-cyan-500/30 rounded-lg\">\n                                    <span class=\"font-bold text-cyan-400\">💊 Průlom v farmakoterapii: Mavacamten</span>\n                                    <p class=\"mt-1 text-[11px]\">\n                                        <strong>Mavacamten</strong> je první selektivní alosterický inhibitor srdečního myosinu (snižuje nadměrnou tvorbu aktin-myosinových můstků). Ve studiích EXPLORER-HCM a VALOR-HCM dramaticky snížil LVOT gradient, symptomy NYHA a potřebu invazivní septální redukce! Dále se používají neselektivní betablokátory a Verapamil.\n                                    </p>\n                                </div>\n                            </div>\n                        "
        },
        {
          "title": "2. Srdeční amyloidóza: ATTR vs. AL & Scintigrafie",
          "color": "amber",
          "content": "\n                            <div class=\"p-3.5 bg-slate-900 border border-amber-500/30 rounded-xl text-xs text-slate-300 space-y-2\">\n                                <p><strong>Srdeční amyloidóza:</strong> Infiltrace extracelulárního prostoru myokardu nerozpustnými fibrilami amyloidu, vedoucí k těžké restrikci a pseudohypertrofii (tlusté stěny, ale <strong>nízká voltáž na EKG!</strong>).</p>\n                                <div class=\"grid sm:grid-cols-2 gap-3 mt-1 text-[11px]\">\n                                    <div class=\"p-2.5 bg-slate-800 rounded-lg border border-slate-700\">\n                                        <span class=\"font-bold text-amber-400\">ATTR Amyloidóza (Transthyretinová)</span>\n                                        <p class=\"mt-1\">Divoký typ (senilní wtATTR, &gt; 70 let) nebo hereditární (hATTR). Diagnostika: <strong>Kostní scintigrafie (99mTc-DPD/PYP)</strong> s nálezem Perugini grade 2–3 při negativních lehkých řetězcích umožňuje <em>nebioptickou diagnózu</em>! Léčba: <strong>Tafamidis</strong> (stabilizátor tetrameru transthyretinu).</p>\n                                    </div>\n                                    <div class=\"p-2.5 bg-slate-800 rounded-lg border border-slate-700\">\n                                        <span class=\"font-bold text-rose-400\">AL Amyloidóza (Z lehkých řetězců)</span>\n                                        <p class=\"mt-1\">Monoklonální gamapatie plazmatických buněk. Detekce: volné lehké řetězce v séru (sFLC) a imunofixace moči/séra. Vyžaduje urgentní hematologickou léčbu (Daratumumab + CyBorD chemoterapie).</p>\n                                    </div>\n                                </div>\n                            </div>\n                        "
        },
        {
          "title": "3. Akutní myokarditida: Kardio MR a Lake Louise kritéria",
          "color": "rose",
          "content": "\n                            <div class=\"p-3.5 bg-slate-900 border border-rose-500/30 rounded-xl text-xs text-slate-300 space-y-2\">\n                                <p><strong>Magnetická rezonance srdce (CMR)</strong> je neinvazivní metodou volby. Diagnostika se opírá o <strong>aktualizovaná Lake Louise kritéria</strong>:</p>\n                                <ul class=\"list-disc ml-5 space-y-1 text-[11px]\">\n                                    <li>Průkaz <strong>edému myokardu</strong> (zvýšený signál v T2 vážení nebo zvýšený T2 mapping).</li>\n                                    <li>Průkaz <strong>nekrózy / fibrózy myokardu</strong> (zvýšený nativní T1 mapping, extracelulární objem ECV, nebo pozdní sycení gadoliniem <em>LGE v subepikardiální/mid-myokardiální distribuci</em>).</li>\n                                </ul>\n                                <p class=\"text-[11px] text-slate-400\"><em>Režimová opatření:</em> Striktní zákaz těžké fyzické a sportovní zátěže po dobu <strong>3–6 měsíců</strong> od ataky myokarditidy (sport v akutní fázi drasticky zvyšuje riziko fatálních komorových arytmií!).</p>\n                            </div>\n                        "
        }
      ]
    },
    "recall": {
      "scenarios": [
        {
          "id": "kmp-r1",
          "title": "Kazuistika 1: Diagnostika srdeční amyloidózy",
          "question": "76letý muž s anamnézou operace karpálního tunelu oboustranně před 5 lety je vyšetřován pro nově vzniklé srdeční selhání. Na ECHO je symetrická hypertrofie stěn LK 17 mm se zrnitým vzhledem myokardu (sparkling appearance) a apikálním šetřením (apical sparing). EKG však vykazuje nízkou voltáž QRS v končetinových svodech. Jaká je nejpravděpodobnější diagnóza a jaký nebioptický diagnostický algoritmus zvolíte?",
          "answer": "Klinický obraz (hypertrofie na ECHO + nízká voltáž na EKG + operace karpálních tunelů) je typický pro transthyretinovou srdeční amyloidózu (ATTR). Nebioptický diagnostický algoritmus ESC vyžaduje: 1. Vyloučení AL amyloidózy (volné lehké řetězce kappa/lambda v séru a imunofixace séra a moči - musí být negativní), 2. Scintigrafii skeletu pomocí 99mTc-DPD (nebo PYP). Záchyt radiofarmaka v myokardu stupně Perugini 2 nebo 3 při negativních lehkých řetězcích definitivně potvrzuje diagnózu ATTR amyloidózy bez nutnosti endomyokardiální biopsie.",
          "pearl": "Kombinace tlustých stěn na ECHO a mikrvoltáže na EKG je patognomickým znakem amyloidózy srdce!"
        },
        {
          "id": "kmp-r2",
          "title": "Kazuistika 2: Farmakoterapie obstrukční HCM",
          "question": "38letý muž s obstrukční hypertrofickou kardiomyopatií (tloušťka septa 22 mm, klidový LVOT gradient 65 mmHg) trpí námahovou dušností a stenokardiemi. Který z léků je u obstrukční HCM přísně kontraindikován (Třída III) a proč?",
          "answer": "Kontraindikovány jsou periferní vazodilatancia (dihydropyridinové BKK jako Amlodipin, Nitráty) a pozitivně inotropní látky (Digoxin). Vazodilatancia snižují afterload a plnění levé komory, což vede k ještě těsnějšímu zúžení výtokového traktu LK, zhoršení SAM fenoménu mitrální chlopně a prudkému nárůstu LVOT obstrukce až k synkopě.",
          "pearl": "Lékem volby u oHCM jsou neselektivní betablokátory, verapamil, nebo specifický inhibitor srdečního myosinu Mavacamten."
        }
      ],
      "quiz": {
        "title": "Rozhodovací kvíz: Sport po akutní myokarditidě",
        "prompt": "22letý vrcholový fotbalista prodělal nekomplikovanou akutní myokarditidu s lehkou elevací troponinu, normální EF LK a LGE na kardio MR. Kdy se může bezpečně vrátit k plnému tréninku a soutěžním zápasům?",
        "options": [
          {
            "text": "A) Až po 3–6 měsících klidového režimu, po kompletní normalizaci biomarkerů, EKG, Holterova monitorování a zátěžového testu",
            "isCorrect": true
          },
          {
            "text": "B) Ihned po poklesu troponinu do normy (cca za 1 týden)",
            "isCorrect": false
          },
          {
            "text": "C) Za 14 dní při subjektivním vymizení únavy",
            "isCorrect": false
          },
          {
            "text": "D) Vrcholový sport je již doživotně zakázán",
            "isCorrect": false
          }
        ],
        "explanation": "Dle ESC doporučení pro sportovní kardiologii musí být po akutní myokarditidě striktně přerušen soutěžní sport i intenzivní trénink na dobu 3 až 6 měsíců. Fyzická zátěž v rekonvalescenci dramaticky akceleruje virovou replikaci, zánět a zvyšuje riziko maligních komorových arytmií a náhlé srdeční smrti."
      }
    },
    "breakdown": {
      "classThree": [
        "Podávání vazodilatancií (Nitráty, Dihydropyridinové BKK) a Digoxinu u pacientů s obstrukční formou HCM (zvyšují LVOT obstrukci).",
        "Provozování intenzivního a soutěžního sportu během akutní fáze myokarditidy a po dobu 3–6 měsíců rekonvalescence.",
        "Podávání nesteroidních antirevmatik (NSAID) v akutní fázi myokarditidy (zhoršují hojení myokardu a zvyšují mortalitu v experimentálních modelech).",
        "Opomenutí genetického testování a rodinného screeningu u příbuzných 1. stupně u pacientů s potvrzenou hereditární kardiomyopatií."
      ],
      "mustKnow": [
        "HCM: Tloušťka stěny &ge; 15 mm (nebo &ge; 13 mm při FA). oHCM: LVOT gradient &ge; 30 mmHg (léčba: Mavacamten, betablokátory).",
        "Amyloidóza srdce: 'Tlusté stěny na ECHO + nízká voltáž na EKG'. Diagnóza ATTR: 99mTc-DPD scintigrafie (grade 2–3) + negativní sFLC.",
        "Léčba ATTR amyloidózy: Tafamidis (stabilizátor transthyretinu, snižuje mortalitu a hospitalizace).",
        "Kardio MR u myokarditidy: Lake Louise kritéria (T2 edém + subepikardiální/mid-myokardiální LGE).",
        "Režim po myokarditidě: Zákaz sportu po dobu 3–6 měsíců."
      ]
    },
    "guidelineLinks": [
      {
        "title": "2023 ESC Guidelines for the management of cardiomyopathies",
        "year": 2023,
        "journal": "European Heart Journal",
        "doi": "10.1093/eurheartj/ehad194",
        "url": "https://academic.oup.com/eurheartj/article/44/37/3503/7243212"
      }
    ]
  },
  {
    "id": "zanety",
    "number": 9,
    "title": "Infekční endokarditida a onemocnění perikardu (2023 ESC)",
    "shortDesc": "2023 Modifikovaná Duke-ESC kritéria, indikace urgentní kardiochirurgie, profylaxe IE, akutní perikarditida (Kolchicin), tamponáda a konstriktivní perikarditida.",
    "icon": "🛡️",
    "badge": "2023 ESC Guidelines",
    "badgeColor": "emerald",
    "theory": {
      "banner": {
        "tag": "Inovace v diagnostice zánětů srdce (ESC 2023)",
        "title": "Multimodální zobrazování (PET/CT, CTA) a racionální profylaxe IE",
        "text": "Nová doporučení ESC 2023 pro infekční endokarditidu (IE) integrují pokročilé zobrazovací metody (**18F-FDG PET/CT** a **CT angiografii srdce**) přímo mezi **hlavní diagnostická kritéria**. Antibiotická profylaxe zůstává striktně vyhrazena pouze pro pacienty s nejvyšším rizikem podstupující rizikové stomatologické výkony."
      },
      "sections": [
        {
          "title": "1. Modifikovaná Duke-ESC kritéria pro diagnostiku IE (2023)",
          "color": "emerald",
          "content": "\n                            <div class=\"p-3.5 bg-slate-900 border border-slate-700 rounded-xl text-xs text-slate-300 space-y-2\">\n                                <p><strong>Diagnóza jisté IE:</strong> 2 Hlavní kritéria NEBO 1 Hlavní + 3 Vedlejší NEBO 5 Vedlejších kritérií.</p>\n                                <div class=\"grid sm:grid-cols-2 gap-3 mt-1 text-[11px]\">\n                                    <div class=\"p-2.5 bg-slate-800 rounded-lg border border-slate-700\">\n                                        <span class=\"font-bold text-emerald-400\">⭐ Hlavní kritéria (Major Criteria)</span>\n                                        <ul class=\"list-disc ml-4 mt-1 space-y-1\">\n                                            <li><strong>Pozitivní hemokultury:</strong> Typické mikroorganismy (<em>Staphylococcus aureus, Enterococcus faecalis, Viridující streptokoky, Streptococcus bovis, HACEK</em>) ze 2 samostatných odběrů.</li>\n                                            <li><strong>Pozitivní zobrazovací nález:</strong> Vegetace, absces, pseudoaneurysma, nová dehiscence chlopně na <strong>TTE/TEE</strong>, NEBO průkaz patologického metabolismu na <strong>18F-FDG PET/CT</strong>, NEBO paravalvulární léze na <strong>CT angiografii srdce</strong>.</li>\n                                        </ul>\n                                    </div>\n                                    <div class=\"p-2.5 bg-slate-800 rounded-lg border border-slate-700\">\n                                        <span class=\"font-bold text-cyan-400\">🔹 Vedlejší kritéria (Minor Criteria)</span>\n                                        <ul class=\"list-disc ml-4 mt-1 space-y-0.5\">\n                                            <li>Predispozice (chlopenní vada, i.v. drogy).</li>\n                                            <li>Horečka &ge; 38,0 °C.</li>\n                                            <li><strong>Vaskulární léze:</strong> Embolie do tepen, septické plicní infarkty, Janewayovy léze (nebolestivé makuly na dlaních/ploskách), intrakraniální krvácení.</li>\n                                            <li><strong>Imunologické léze:</strong> Glomerulonefritida, Oslerovy uzlíky (bolestivé uzlíky na bříškách prstů), Rothovy skvrny na sítnici, revmatoidní faktor.</li>\n                                        </ul>\n                                    </div>\n                                </div>\n                            </div>\n                        "
        },
        {
          "title": "2. Indikace urgentní kardiochirurgické operace u IE",
          "color": "rose",
          "content": "\n                            <div class=\"p-3.5 bg-slate-900 border border-rose-500/30 rounded-xl text-xs text-slate-300 space-y-2\">\n                                <p class=\"font-bold text-rose-400\">Tři hlavní indikace k časné kardiochirurgické operaci (během hospitalizace / do 24–72 h):</p>\n                                <ol class=\"list-decimal ml-5 space-y-1\">\n                                    <li><strong>Srdeční selhání:</strong> Akutní těžká regurgitace aortální nebo mitrální chlopně s plicním edémem či kardiogenním šokem (emergentní operace do 24 h).</li>\n                                    <li><strong>Nekontrolovaná infekce:</strong> Tvorba paravalvulárního abscesu, pseudoaneurysmatu, píštěle, nebo perzistující febrilie a pozitivní hemokultury &gt; 7–10 dní navzdory adekvátní ATB terapii.</li>\n                                    <li><strong>Prevence embolizace:</strong> Velká pohyblivá vegetace <strong>&gt; 10 mm po prodělané embolické příhodě</strong> nebo izolovaná velká vegetace <strong>&gt; 15 mm</strong> (u aortální či mitrální chlopně).</li>\n                                </ol>\n                            </div>\n                        "
        },
        {
          "title": "3. Akutní perikarditida & Srdeční tamponáda",
          "color": "amber",
          "content": "\n                            <div class=\"space-y-2.5 text-xs text-slate-300\">\n                                <div class=\"p-3 bg-slate-900 border border-slate-700 rounded-xl\">\n                                    <span class=\"font-bold text-amber-400\">Akutní perikarditida: Diagnostika a léčba</span>\n                                    <p class=\"mt-1\">\n                                        Diagnóza vyžaduje alespoň <strong>2 ze 4 kritérií:</strong> 1. Pleurální bolest na hrudi (zhoršuje se nádechem a vleže, ulevuje v předklonu), 2. Perikardiální třecí šelest, 3. EKG: konkávní elevace ST s <strong>depresemi úseku PR</strong> ve většině svodů, 4. Nový perikardiální výpotek na ECHO.<br>\n                                        <strong>Léčba 1. volby (Třída I):</strong> NSAID (Ibuprofen 600 mg 3×d nebo Aspirin 750–1000 mg 3×d) + <strong>Kolchicin 0,5 mg 1–2× denně po dobu 3 měsíců</strong> (kolchicin snižuje recidivy perikarditidy o 50 %!).\n                                    </p>\n                                </div>\n                                <div class=\"p-3 bg-slate-900 border border-rose-500/30 rounded-xl\">\n                                    <span class=\"font-bold text-rose-400\">🚨 Srdeční tamponáda (Beckova triáda)</span>\n                                    <p class=\"mt-1\">\n                                        Útlak srdečních oddílů tekutinou v perikardu. <strong>Beckova triáda:</strong> 1. Hypotenze, 2. Zvýšená náplň krčních žil (městnání), 3. Tiché/vzdálené srdeční ozvy. Dále <strong>pulsus paradoxus</strong> (pokles STK &gt; 10 mmHg při nádechu). Urgentní léčba: <strong>perikardiocentéza</strong> pod echokardiografickou kontrolou.\n                                    </p>\n                                </div>\n                            </div>\n                        "
        }
      ]
    },
    "recall": {
      "scenarios": [
        {
          "id": "zan-r1",
          "title": "Kazuistika 1: Antibiotická profylaxe infekční endokarditidy",
          "question": "62letý pacient po chirurgické náhradě aortální chlopně mechanickou protézou jde zítra na extrakci zubu moudrosti a dentální hygienu se zásahem do dásní. Má indikovanou ATB profylaxi? Jaký lék a kdy podáte?",
          "answer": "ANO, má jednoznačnou indikaci k ATB profylaxi. Pacienti s chlopenními protézami (mechanickými i biologickými) a po TAVI patří do skupiny nejvyššího rizika IE. Při výkonech na gingivě a dentálních extrakcích se podává Amoxicilin 2 g perorálně (u dětí 50 mg/kg) jednorázově 30–60 minut před výkonem. Při alergii na peniciliny se volí Clindamycin 600 mg nebo Azithromycin 500 mg p.o.",
          "pearl": "Profylaxe IE se dnes již NEDOPORUČUJE u středně rizikových vad (izolovaný prolaps mitrální chlopně, bikuspidální chlopeň bez náhrady) ani u gastroskopie/kolonoskopie bez probíhající infekce."
        },
        {
          "id": "zan-r2",
          "title": "Kazuistika 2: Terapie první ataky akutní perikarditidy",
          "question": "28letý muž má 3 dny ostrou bolest za sternem ulevující v předklonu, na EKG difuzní konkávní ST elevace a PR deprese. Diagnostikována nekomplikovaná virová perikarditida. Jaká je doporučená kombinace léků a jak dlouho trvá léčba?",
          "answer": "Léčbou volby je kombinace vysokodávkovaného NSAID (Ibuprofen 600 mg po 8 hodinách nebo Aspirin 750–1000 mg po 8 hodinách s gastroprotekcí PPI) po dobu 1–2 týdnů do vymizení symptomů a normalizace CRP + Kolchicin 0,5 mg 1× denně (při hmotnosti < 70 kg) nebo 0,5 mg 2× denně po dobu 3 měsíců.",
          "pearl": "Kortikoidy (prednison) nejsou lékem 1. volby; zvyšují riziko chronických recidiv perikarditidy a jsou vyhrazeny pouze pro autoimunitní etiologie nebo nesnášenlivost NSAID."
        }
      ],
      "quiz": {
        "title": "Rozhodovací kvíz: EKG diferenciální diagnostika perikarditidy vs. STEMI",
        "prompt": "Který z následujících EKG nálezů svědčí jednoznačně pro akutní perikarditidu a NIKOLI pro akutní infarkt myokardu (STEMI)?",
        "options": [
          {
            "text": "A) Difuzní konkávní elevace ST ve většině svodů s depresí úseku PR (a zrcadlovou ST depresí a PR elevací pouze v aVR)",
            "isCorrect": true
          },
          {
            "text": "B) Konvexní elevace ST ('tombstone') lokalizované v anatomickém povodí (např. V1–V4) se zrcadlovými depresemi ST ve spodních svodech",
            "isCorrect": false
          },
          {
            "text": "C) Přítomnost patologických kmitů Q a vymizení kmitů R",
            "isCorrect": false
          },
          {
            "text": "D) Negativní terminální vlny T při přetrvávajících ST elevacích",
            "isCorrect": false
          }
        ],
        "explanation": "Akutní perikarditida způsobuje zánět epikardu na celém povrchu srdce, proto jsou ST elevace difuzní (neodpovídají jedné koronární tepně), mají miskovitý/konkávní tvar a jsou provázeny typickou depresí úseku PR (v důsledku zánětu síní). Zrcadlové deprese ST perikarditida NEMÁ (vyjma svodu aVR a V1)."
      }
    },
    "breakdown": {
      "classThree": [
        "Podávání antibiotické profylaxe IE u nízko a středně rizikových pacientů nebo při nekontaminovaných výkonech mimo stomatologii (gastroskopie, kolonoskopie, porod).",
        "Rutinní podávání kortikosteroidů jako léku 1. volby u akutní virové perikarditidy (zvyšují riziko relapsů a chronicity).",
        "Podávání antikoagulancií pacientům s akutní perikarditidou a perikardiálním výpotkem (riziko přechodu do hemoperikardu a tamponády).",
        "Odkládání emergentní perikardiocentézy u pacienta s manifestní srdeční tamponádou."
      ],
      "mustKnow": [
        "Diagnóza IE (2023 ESC-Duke): 2 hlavní kritéria (hemokultury + TTE/TEE/PET-CT) nebo 1 hlavní + 3 vedlejší.",
        "Indikace kardiochirurgie u IE: 1. Srdeční selhání s akutní vadou, 2. Nekontrolovaná infekce/absces, 3. Vegetace &gt; 10 mm po embolii nebo &gt; 15 mm.",
        "Profylaxe IE: Pouze vysokorizikoví (chlopenní protézy, prodělaná IE) u stomatologických výkonů (Amoxicilin 2 g p.o. 30–60 min před).",
        "Perikarditida triáda: Bolest ulevující v předklonu + třecí šelest + konkávní ST a PR deprese. Léčba: NSAID + Kolchicin (3 měsíce).",
        "Srdeční tamponáda: Beckova triáda (hypotenze, tiché ozvy, městnání na krku) + pulsus paradoxus -> perikardiocentéza."
      ]
    },
    "guidelineLinks": [
      {
        "title": "2023 ESC Guidelines for the management of endocarditis",
        "year": 2023,
        "journal": "European Heart Journal",
        "doi": "10.1093/eurheartj/ehad193",
        "url": "https://academic.oup.com/eurheartj/article/44/39/3948/7243211"
      }
    ]
  },
  {
    "id": "pe",
    "number": 10,
    "title": "Plicní embolie a onemocnění cév (2024/2022 ESC)",
    "shortDesc": "Stratifikace rizika PE dle sPESI a hemodynamiky, systémová trombolýza vs. katetrová trombektomie, aortální disekce Stanford A/B a PAOD (ischemická choroba DK).",
    "icon": "🫁",
    "badge": "2024/2022 ESC Guidelines",
    "badgeColor": "amber",
    "theory": {
      "banner": {
        "tag": "Moderní vaskulární a plicní management",
        "title": "Riziková stratifikace PE a cévní guidelines 2024 (PAOD & Aorta)",
        "text": "Léčba plicní embolie se striktně řídí **stratifikací časného rizika**: vysoce riziková PE (šok/hypotenze) vyžaduje okamžitou **reperfuzi (systémová trombolýza nebo katetrová intervence)**, zatímco intermediální a nízkoriziková PE se léčí antikoagulací (NOAC). Nová doporučení ESC 2024 pro periferní tepny (PAOD) kladou důraz na kombinovanou antitrombotickou léčbu (Aspirin + nízko-dávkovaný Rivaroxaban)."
      },
      "sections": [
        {
          "title": "1. Stratifikace rizika akutní plicní embolie",
          "color": "rose",
          "content": "\n                            <div class=\"grid md:grid-cols-3 gap-3 my-3 text-xs\">\n                                <div class=\"p-3 bg-rose-950/40 border border-rose-500/40 rounded-xl\">\n                                    <span class=\"font-bold text-rose-400\">🚨 Vysoké riziko (High Risk)</span>\n                                    <p class=\"text-slate-300 mt-1 leading-relaxed\">\n                                        <strong>Hemodynamická nestabilita:</strong> Zástava oběhu, obstrukční šok nebo perzistentní hypotenze (STK &lt; 90 mmHg / pokles o &ge; 40 mmHg trvající &gt; 15 min). Okamžitá <strong>systémová trombolýza</strong> (rtPA 100 mg i.v. / 2h) nebo katetrová trombektomie + nefrakcionovaný heparin (UFH).\n                                    </p>\n                                </div>\n                                <div class=\"p-3 bg-amber-950/40 border border-amber-500/40 rounded-xl\">\n                                    <span class=\"font-bold text-amber-400\">⚠️ Středně vysoké riziko (Interm-High)</span>\n                                    <p class=\"text-slate-300 mt-1 leading-relaxed\">\n                                        Hemodynamicky stabilní, ale <strong>sPESI &ge; 1</strong> A SOUČASNĚ přítomna <strong>dysfunkce pravé komory (ECHO/CT) A pozitivní troponin (cTn)</strong>. Hospitalizace na monitorovaném lůžku, LMWH/NOAC, záchranná reperfuze při zhoršení.\n                                    </p>\n                                </div>\n                                <div class=\"p-3 bg-emerald-950/40 border border-emerald-500/40 rounded-xl\">\n                                    <span class=\"font-bold text-emerald-400\">✅ Nízké riziko (Low Risk)</span>\n                                    <p class=\"text-slate-300 mt-1 leading-relaxed\">\n                                        Stabilní, sPESI = 0, bez dysfunkce PK a s negativním troponinem. Zahájení léčby perorálním antikoagulanciem (<strong>NOAC: Apixaban, Rivaroxaban</strong>) a možnost časného propuštění do domácí péče.\n                                    </p>\n                                </div>\n                            </div>\n                        "
        },
        {
          "title": "2. Akutní aortální syndromy: Disekce Stanford A vs. Stanford B",
          "color": "amber",
          "content": "\n                            <div class=\"p-3.5 bg-slate-900 border border-amber-500/30 rounded-xl text-xs text-slate-300 space-y-2\">\n                                <p><strong>Akutní disekce aorty:</strong> Prudká, nesnesitelná 'trhavá' bolest na hrudi či mezi lopatkami, propagující se podél aorty.</p>\n                                <div class=\"grid sm:grid-cols-2 gap-3 mt-1\">\n                                    <div class=\"p-2.5 bg-rose-950/40 border border-rose-500/30 rounded-lg\">\n                                        <span class=\"font-bold text-rose-400\">Stanford Typ A (Vzestupná aorta)</span>\n                                        <p class=\"mt-1 text-[11px]\">Postihuje ascendentní aortu. Riziko ruptury do perikardu (tamponáda), okluze koronárek (infarkt) a aortální regurgitace. <strong>Jednoznačná indikace k emergentní kardiochirurgické operaci!</strong></p>\n                                    </div>\n                                    <div class=\"p-2.5 bg-slate-800 rounded-lg border border-slate-700\">\n                                        <span class=\"font-bold text-cyan-400\">Stanford Typ B (Sestupná aorta)</span>\n                                        <p class=\"mt-1 text-[11px]\">Začíná distálně od odstupu levé a. subclavia. Nekardiální léčba: intenzivní kontrola TK a TF pomocí i.v. betablokátorů (Labetalol / Esmolol, <strong>cíl STK 100–120 mmHg a TF &lt; 60/min</strong>). Při komplikacích (malperfuze, ruptura) <strong>TEVAR</strong>.</p>\n                                    </div>\n                                </div>\n                            </div>\n                        "
        },
        {
          "title": "3. Ischemická choroba dolních končetin (PAOD / PAD - 2024 ESC)",
          "color": "cyan",
          "content": "\n                            <div class=\"p-3.5 bg-slate-900 border border-cyan-500/30 rounded-xl text-xs text-slate-300 space-y-2\">\n                                <p><strong>Diagnostika:</strong> Index kotník-paže (<strong>ABI = Ankle-Brachial Index</strong>). Hodnota <strong>ABI &le; 0,90</strong> je diagnostická pro PAOD; ABI &gt; 1,40 značí mediokalcinózu (tuhé nestlačitelné tepny u diabetiků/CKD).</p>\n                                <p><strong>Antitrombotická léčba dle ESC 2024 (Studie COMPASS):</strong></p>\n                                <div class=\"p-2.5 bg-cyan-950/40 border border-cyan-500/30 rounded-lg text-[11px]\">\n                                    U symptomatické PAOD nebo po revaskularizaci končetin je doporučena duální vaskulární protekce: <strong>Aspirin 100 mg 1× denně + vaskulární dávka Rivaroxabanu 2,5 mg 2× denně</strong> (snižuje závažné končetinové příhody MALE i celkovou mortalitu).\n                                </div>\n                            </div>\n                        "
        }
      ]
    },
    "recall": {
      "scenarios": [
        {
          "id": "pe-r1",
          "title": "Kazuistika 1: Masivní plicní embolie s hypotenzí",
          "question": "56letá obézní žena 10 dní po ortopedické operaci náhle kolabuje na lůžku. Je bledá, opocená, TK 70/45 mmHg, TF 130/min, SpO2 82 % na masce. Urgentní bed-side ECHO ukazuje dilatovanou pravou komoru s paradoxním pohybem septa (McConnellovo znamení) a trikuspidální regurgitaci. Jaký je okamžitý reperfúzní postup?",
          "answer": "Jedná se o vysoce rizikovou (masivní) plicní embolii s obstrukčním šokem. Okamžitým postupem volby je systémová trombolýza (rekombinantní tkáňový aktivátor plazminogenu rtPA / Altepláza 100 mg i.v. během 2 hodin, případně zrychlený režim 50 mg během 15 minut při hrozící zástavě) společně s bolusem nefrakcionovaného heparinu (UFH) a kyslíkovou/vazopresorickou podporou (Noradrenalin).",
          "pearl": "Při absolutní kontraindikaci trombolýzy (nedávné intrakraniální krvácení) je alternativou emergentní katetrová mechanická embolektomie nebo chirurgická embolektomie v mimotělním oběhu."
        },
        {
          "id": "pe-r2",
          "title": "Kazuistika 2: Akutní disekce aorty a kontrola tlaku",
          "question": "60letý hypertonik přichází s krutou trhavou bolestí mezi lopatkami a TK 195/110 mmHg. Urgentní CT angiografie prokazuje disekci hrudní aorty typu Stanford B (bez postižení ascendentní aorty a bez malperfuze orgánů). Jaké jsou cílové hodnoty tlaku a tepové frekvence a jaké léky nasadíte jako první?",
          "answer": "Cílem je urgentní snížení systolického tlaku na 100–120 mmHg a tepové frekvence pod 60/min během 10–20 minut. Lékem první volby jsou intravenózní betablokátory (Labetalol kontinuálně nebo Esmolol i.v.). Důvodem podání betablokátoru PŘED případnými přímými vazodilatancii (nitroprusid) je snížení strmosti pulzní vlny (dP/dt) a prevence reflexní tachykardie, která by disekci dále propagovala.",
          "pearl": "Nikdy nepodávejte samotný nitroprusid či hydralazin bez předchozí plné betablokády (riziko rychlé ruptury aorty zvýšením smykového napětí dP/dt)!"
        }
      ],
      "quiz": {
        "title": "Rozhodovací kvíz: Indikace CT plicní angiografie (CTPA)",
        "prompt": "Mladá 24letá žena bez předchozích onemocnění přichází pro mírnou píchavou bolest na hrudi vázanou na pohyb. Má normální TK i TF, bez otoků končetin, saturace 99 %. Dle Wellsova skóre má nízkou klinickou pravděpodobnost PE (< 2 body). Jaký je správný postup?",
        "options": [
          {
            "text": "A) Aplikovat PERC pravidlo (nebo vyšetřit D-dimery); pokud jsou negativní, plicní embolie je bezpečně vyloučena bez nutnosti CT angiografie",
            "isCorrect": true
          },
          {
            "text": "B) Okamžitě provést urgentní CT plicní angiografii (CTPA)",
            "isCorrect": false
          },
          {
            "text": "C) Zahájit plnou antikoagulační léčbu LMWH",
            "isCorrect": false
          },
          {
            "text": "D) Provést ventilačně-perfuzní scintigrafii plic",
            "isCorrect": false
          }
        ],
        "explanation": "U pacientů s nízkou klinickou pravděpodobností PE (dle Wellsova skóre nebo Geneva skóre) aplikujeme pravidlo PERC (Pulmonary Embolism Rule-out Criteria) nebo stanovíme vysoce senzitivní D-dimery. Pokud jsou negativní, PE je s 99% spolehlivostí vyloučena a pacientka není zbytečně vystavena radiační a kontrastní zátěži z CT angiografie."
      }
    },
    "breakdown": {
      "classThree": [
        "Provádění CT plicní angiografie (CTPA) u hemodynamicky nestabilního pacienta v šoku před zahájením resuscitace a bedside echokardiografie.",
        "Podávání přímých vazodilatancií (Nitroprusid sodný) u akutní aortální disekce bez předchozího podání betablokátoru (riziko progrese disekce zvýšením dP/dt).",
        "Rutinní podávání systémové trombolýzy u hemodynamicky stabilních pacientů s nízkorizikovou plicní embolií.",
        "Implantace kaválního filtru (IVC filter) u pacientů s PE bez absolutní kontraindikace antikoagulace."
      ],
      "mustKnow": [
        "Vysokoriziková PE = hypotenze/šok -> okamžitá systémová trombolýza (rtPA 100 mg) + UFH.",
        "Intermediální PE = sPESI &ge; 1 -> TTE/CT (pravá komora) + cTn (troponin).",
        "Nízkoriziková PE = sPESI 0 -> NOAC (Apixaban / Rivaroxaban) a časné propuštění.",
        "Aortální disekce Stanford A (ascendentní) = urgentní operace; Stanford B = betablokátory i.v. (cíl STK 100–120 mmHg) + TEVAR.",
        "PAOD diagnostika: ABI &le; 0,90. Antitrombotická léčba: Aspirin 100 mg + Rivaroxaban 2,5 mg bid (COMPASS)."
      ]
    },
    "guidelineLinks": [
      {
        "title": "2024 ESC Guidelines for the management of peripheral arterial and aortic diseases",
        "year": 2024,
        "journal": "European Heart Journal",
        "doi": "10.1093/eurheartj/ehae179",
        "url": "https://academic.oup.com/eurheartj/article/45/38/3702/7741011"
      },
      {
        "title": "2022 ESC/ERS Guidelines for the diagnosis and treatment of pulmonary hypertension",
        "year": 2022,
        "journal": "European Heart Journal",
        "doi": "10.1093/eurheartj/ehac237",
        "url": "https://academic.oup.com/eurheartj/article/43/38/3618/6673946"
      }
    ]
  },
  {
    "id": "ccs",
    "number": 11,
    "title": "Chronické koronární syndromy (2024 ESC Guidelines)",
    "shortDesc": "Předtestová pravděpodobnost (PTP) a Clinical Likelihood, CCTA jako metoda 1. volby, funkční hodnocení FFR/iFR, ANOCA/INOCA a antianginózní medikace.",
    "icon": "📈",
    "badge": "2024 ESC Guidelines",
    "badgeColor": "cyan",
    "theory": {
      "banner": {
        "tag": "Nová doporučení (2024 ESC Guidelines)",
        "title": "Dominance CCTA a koncept ischemie bez obstrukce (INOCA)",
        "text": "Doporučení ESC 2024 pro Chronické koronární syndromy (CCS) definitivně potvrzují **Koronární CT angiografii (CCTA)** jako neinvazivní vyšetření 1. volby u symptomatických pacientů s nízkou až střední pravděpodobností ICHS. Velký důraz je kladen na funkční intrakoronární měření (FFR/iFR) a management mikrovaskulární anginy (**INOCA / ANOCA**)."
      },
      "sections": [
        {
          "title": "1. Diagnostický postup: PTP, Clinical Likelihood & CCTA",
          "color": "cyan",
          "content": "\n                            <div class=\"p-3.5 bg-slate-900 border border-slate-700 rounded-xl text-xs text-slate-300 space-y-2\">\n                                <p><strong>Krok 1: Posouzení symptomů a Clinical Likelihood:</strong> Hodnocení charakteru bolesti (typická vs. atypická vs. nekardiální), věku, pohlaví a rizikových faktorů (kouření, DM, dyslipidémie, rodinná anamnéza, kalciové skóre CAC).</p>\n                                <div class=\"grid sm:grid-cols-2 gap-3 mt-1 text-[11px]\">\n                                    <div class=\"p-2.5 bg-cyan-950/40 border border-cyan-500/30 rounded-lg\">\n                                        <span class=\"font-bold text-cyan-400\">🔍 CCTA (Koronární CT angiografie) - Třída I</span>\n                                        <p class=\"mt-1\">Doporučena jako <strong>iniciální vyšetření volby</strong> u pacientů s nízkou až střední klinickou pravděpodobností (5–50 %). Vynikající negativní prediktivní hodnota; zobrazí nejen lumenní stenózu, ale i charakter plátu (vysokorizikové pláty s tenkou čepičkou).</p>\n                                    </div>\n                                    <div class=\"p-2.5 bg-slate-800 rounded-lg border border-slate-700\">\n                                        <span class=\"font-bold text-amber-400\">⚡ Neinvazivní funkční zátěžové zobrazování</span>\n                                        <p class=\"mt-1\"><strong>Zátěžová magnetická rezonance (Stress CMR), Zátěžové ECHO (DSE) nebo PET/SPECT</strong> jsou preferovány u pacientů s vysokou pravděpodobností (&gt; 50 %), známou ICHS či předchozí revaskularizací k průkazu funkční ischémie.</p>\n                                    </div>\n                                </div>\n                            </div>\n                        "
        },
        {
          "title": "2. Invazivní funkční hodnocení stenóz: FFR a iFR",
          "color": "emerald",
          "content": "\n                            <div class=\"p-3.5 bg-slate-900 border border-emerald-500/30 rounded-xl text-xs text-slate-300 space-y-2\">\n                                <p>Při selektivní koronarografii (SKG) nelze vizuálně přesně stanovit hemodynamický význam hraničních stenóz (40–90 %). Indikováno je <strong>intrakoronární funkční měření tlakovým vodičem:</strong></p>\n                                <ul class=\"list-disc ml-5 space-y-1 text-[11px]\">\n                                    <li><strong>FFR (Frakční průtoková rezerva):</strong> Měření poměru tlaků za stenózou a v aortě při maximální hyperémii (navozené i.v. adenosinem). Hodnota <strong>FFR &le; 0,80</strong> prokazuje hemodynamicky významnou ischémii a indikuje PCI/CABG (Třída I).</li>\n                                    <li><strong>iFR (Instantaneous Wave-Free Ratio):</strong> Měření v klidové fázi diastoly (bez nutnosti podání adenosinu). Hodnota <strong>iFR &le; 0,89</strong> je ekvivalentem FFR &le; 0,80.</li>\n                                </ul>\n                            </div>\n                        "
        },
        {
          "title": "3. Antianginózní farmakoterapie & INOCA / ANOCA",
          "color": "purple",
          "content": "\n                            <div class=\"p-3.5 bg-slate-900 border border-purple-500/30 rounded-xl text-xs text-slate-300 space-y-2\">\n                                <p><strong>Stupňovitá antiischemická léčba:</strong></p>\n                                <ul class=\"list-disc ml-5 space-y-1 text-[11px]\">\n                                    <li><strong>1. Linie:</strong> <em>Betablokátor</em> (snižuje TF a spotřebu O2) a/nebo <em>Dihydropyridinový blokátor vápníkových kanálů</em> (Amlodipin, Felodipin - vazodilatace).</li>\n                                    <li><strong>2. Linie:</strong> Přidání dlouhodobě působících nitrátů, <em>Ranolazinu</em> (inhibitor pozdního sodíkového proudu), <em>Trimetazidinu</em> (modulátor metabolismu myokardu) nebo <em>Ivabradinu</em> (inhibitor If kanálu v SA uzlu při sinusovém rytmu).</li>\n                                </ul>\n                                <div class=\"p-2.5 bg-slate-800 rounded-lg border border-slate-700 text-[11px]\">\n                                    <span class=\"font-bold text-purple-400\">INOCA (Ischemia with Non-Obstructive Coronary Arteries):</span>\n                                    Ischémie myokardu při angiograficky normálních tepnách. Zahrnuje <strong>koronární mikrovaskulární dysfunkci (CMD)</strong> (léčba: ACEi, statiny, betablokátory) a <strong>vazospastickou anginu (Prinzmetalova angina)</strong> (léčba: BKK + nitráty, <em>betablokátory jsou u čistého spazmu kontraindikovány!</em>).\n                                </div>\n                            </div>\n                        "
        }
      ]
    },
    "recall": {
      "scenarios": [
        {
          "id": "ccs-r1",
          "title": "Kazuistika 1: Výběr iniciálního diagnostického testu u CCS",
          "question": "52letý nekuřák s mírnou hypertenzí si stěžuje na občasné nepříjemné tlaky na hrudi při chůzi do schodů, které v klidu do 5 minut odezní. Klidové EKG je normální. Dle kalkulátoru ESC 2024 je jeho předtestová pravděpodobnost ICHS 18 % (středně nízká). Které neinvazivní vyšetření je dle ESC 2024 metodou první volby?",
          "answer": "Metodou první volby je Koronární CT angiografie (CCTA - Třída I, Level A). U pacientů s nízkou až střední klinickou pravděpodobností má CCTA nejvyšší diagnostickou přesnost, dokáže vyloučit přítomnost aterosklerózy s vysokou negativní prediktivní hodnotou a bezpečně odvrátit zbytečnou invazivní katetrizaci.",
          "pearl": "Klasické zátěžové EKG na bicyklu má nízkou senzitivitu i specificitu a ESC jej již nedoporučuje jako primární diagnostický test."
        },
        {
          "id": "ccs-r2",
          "title": "Kazuistika 2: Indikace PCI na základě FFR",
          "question": "Při plánované koronarografii pro stabilní anginu pectoris je na střední RIA nalezena izolovaná 60% stenóza. Následně provedené intrakoronární měření frakční průtokové rezervy ukazuje FFR = 0,86. Je indikována implantace stentu (PCI)?",
          "answer": "NENÍ. Hodnota FFR &gt; 0,80 prokazuje, že stenóza není hemodynamicky významná a nepůsobí myokardiální ischémii (studie FAME a DEFER). Implantace stentu by pacientovi nepřinesla prognostický ani symptomatický benefit a vystavila by ho zbytečnému riziku trombózy a restenózy stentu. Pacient má být léčen konzervativně optimální farmakoterapií (statin, antiagregační léčba, úprava životosprávy).",
          "pearl": "PCI stenóz s FFR &gt; 0,80 nezlepšuje přežití a zvyšuje riziko periprocedurálního infarktu."
        }
      ],
      "quiz": {
        "title": "Rozhodovací kvíz: Vazospastická (Prinzmetalova) angina pectoris",
        "prompt": "Která léková skupina je u čisté vazospastické anginy pectoris (způsobené spazmy epikardiálních tepen) KONTRAINDIKOVÁNA, protože může zhoršit vazokonstrikci?",
        "options": [
          {
            "text": "A) Neselektivní betablokátory (blokují vazodilatační beta-2 receptory a umožňují převahu vazokonstrikčních alfa-1 receptorů)",
            "isCorrect": true
          },
          {
            "text": "B) Blokátory kalciových kanálů (Amlodipin, Diltiazem)",
            "isCorrect": false
          },
          {
            "text": "C) Dlouhodobě působící nitráty",
            "isCorrect": false
          },
          {
            "text": "D) Statiny",
            "isCorrect": false
          }
        ],
        "explanation": "U vazospastické (Prinzmetalovy) anginy pectoris vedou neselektivní betablokátory (např. Propranolol, Sotalol) k blokádě beta-2 adrenergních receptorů hladké svaloviny koronárních cév. Tím dochází k neoponované stimulaci alfa-1 receptorů noradrenalinem a k provokaci těžkého koronárního spazmu. Lékem volby jsou blokátory vápníkových kanálů a nitráty."
      }
    },
    "breakdown": {
      "classThree": [
        "Rutinní provádění invazivní revaskularizace (PCI) u angiografických stenóz bez průkazu ischémie (FFR &gt; 0,80 nebo iFR &gt; 0,89).",
        "Podávání neselektivních betablokátorů u pacientů s vazospastickou (Prinzmetalovou) anginou pectoris.",
        "Používání klasického zátěžového EKG (bicyklová ergometrie) jako primárního testu k vyloučení ICHS.",
        "Současné podávání nitrátů a inhibitorů fosfodiesterázy-5 (Sildenafil, Tadalafil) - riziko těžké refrakterní hypotenze a smrti!"
      ],
      "mustKnow": [
        "Diagnostika CCS: CCTA je metoda 1. volby u nízké/střední pravděpodobnosti (PTP 5–50 %).",
        "Funkční intrakoronární vyšetření: FFR &le; 0,80 nebo iFR &le; 0,89 indikuje revaskularizaci (Třída I).",
        "1. linie antianginózní medikace: Betablokátor + Dihydropyridinový BKK (Amlodipin).",
        "INOCA/ANOCA: Ischémie bez obstrukce -> mikrovaskulární dysfunkce nebo koronární spazmy.",
        "Statiny vysoké intenzity jsou indikovány u všech pacientů s prokázanou koronární aterosklerózou (LDL &lt; 1,4 mmol/l)."
      ]
    },
    "guidelineLinks": [
      {
        "title": "2024 ESC Guidelines for the management of chronic coronary syndromes",
        "year": 2024,
        "journal": "European Heart Journal",
        "doi": "10.1093/eurheartj/ehae177",
        "url": "https://academic.oup.com/eurheartj/article/45/38/3415/7741009"
      }
    ]
  },
  {
    "id": "ekg",
    "number": 12,
    "title": "EKG diferenciální diagnostika v praxi",
    "shortDesc": "Modifikovaná Sgarbossa kritéria u LBBB a stimulace, de Winter T vlny, Wellensův syndrom, Brugada syndrom, syndromy dlouhého a krátkého QT a EKG známky plicní embolie.",
    "icon": "📈",
    "badge": "ESC EKG Consensus",
    "badgeColor": "emerald",
    "theory": {
      "banner": {
        "tag": "Pokročilá interpretace EKG",
        "title": "Ischemické ekvivalenty a vrozené arytmické syndromy",
        "text": "Řada život ohrožujících koronárních uzávěrů se neprojeví klasickou ST elevací, ale **STEMI ekvivalenty** (de Winterovy T vlny, Wellensův syndrom, pozitivní Smith-Sgarbossa kritéria při LBBB). Rozpoznání těchto vzorců a vrozených syndromů (Brugada, Long QT) je klíčovou kompetencí moderního lékaře."
      },
      "sections": [
        {
          "title": "1. Infarkt myokardu při blokádě levého raménka (LBBB): Modifikovaná Sgarbossa kritéria",
          "color": "emerald",
          "content": "\n                            <div class=\"p-3.5 bg-slate-900 border border-emerald-500/30 rounded-xl text-xs text-slate-300 space-y-2\">\n                                <p>Běžný LBBB maskuje klasické ST elevace. <strong>Modifikovaná Sgarbossa kritéria (Smith-Sgarbossa):</strong></p>\n                                <div class=\"grid sm:grid-cols-3 gap-2.5 text-[11px] mt-1\">\n                                    <div class=\"p-2 bg-rose-950/40 border border-rose-500/40 rounded-lg\">\n                                        <div class=\"font-bold text-rose-400\">1. Konkordantní ST elevace</div>\n                                        <p class=\"mt-0.5\">ST elevace <strong>&ge; 1 mm</strong> ve svodu s pozitivním QRS (5 bodů - vysoká specificita 98 %).</p>\n                                    </div>\n                                    <div class=\"p-2 bg-amber-950/40 border border-amber-500/40 rounded-lg\">\n                                        <div class=\"font-bold text-amber-400\">2. Konkordantní ST deprese</div>\n                                        <p class=\"mt-0.5\">ST deprese <strong>&ge; 1 mm ve svodech V1, V2 nebo V3</strong> (3 body - svědčí pro zadní infarkt).</p>\n                                    </div>\n                                    <div class=\"p-2 bg-purple-950/40 border border-purple-500/40 rounded-lg\">\n                                        <div class=\"font-bold text-purple-400\">3. Smithovo pravidlo diskordance</div>\n                                        <p class=\"mt-0.5\">Diskordantní ST elevace s poměrem <strong>ST / S &le; -0,25</strong> (ST elevace dosahuje &gt; 25 % hloubky kmitu S).</p>\n                                    </div>\n                                </div>\n                            </div>\n                        "
        },
        {
          "title": "2. Ischemické STEMI ekvivalenty: de Winter & Wellens",
          "color": "rose",
          "content": "\n                            <div class=\"space-y-2.5 text-xs text-slate-300\">\n                                <div class=\"p-3 bg-slate-900 border border-rose-500/30 rounded-xl\">\n                                    <span class=\"font-bold text-rose-400\">⚡ de Winter T-vlnový vzorec (Akutní proximální uzávěr RIA/LAD)</span>\n                                    <p class=\"mt-1\">\n                                        Přítomen u cca 2 % infarktů přední stěny: <strong>Junkční deprese ST 1–3 mm ve svodech V1–V6</strong> přecházející do <strong>vysokých, symetrických, špičatých vln T</strong> bez klasických ST elevací. Ekvivalent akutního STEMI -> indikace k okamžité primární PCI!\n                                    </p>\n                                </div>\n                                <div class=\"p-3 bg-slate-900 border border-amber-500/30 rounded-xl\">\n                                    <span class=\"font-bold text-amber-400\">⚠️ Wellensův syndrom (Kritická stenóza proximální RIA)</span>\n                                    <p class=\"mt-1\">\n                                        Vyskytuje se v bezbolestném období po atace stenokardie: <strong>Typ A (25 %):</strong> Bifázické vlny T ve V2–V3. <strong>Typ B (75 %):</strong> Hluboce a symetricky invertované vlny T ve V2–V4. Varuje před hrozícím masivním transmurálním infarktem přední stěny (zákaz zátěžových testů, nutná včasná SKG!).\n                                    </p>\n                                </div>\n                            </div>\n                        "
        },
        {
          "title": "3. Vrozené syndromy: Brugada & Long QT (LQTS)",
          "color": "cyan",
          "content": "\n                            <div class=\"grid sm:grid-cols-2 gap-3 text-xs text-slate-300\">\n                                <div class=\"p-3 bg-slate-900 border border-cyan-500/30 rounded-xl\">\n                                    <span class=\"font-bold text-cyan-400\">⚡ Brugada syndrom (Typ 1)</span>\n                                    <p class=\"mt-1\">Kanálopatie sodíkového kanálu (SCN5A). EKG Typ 1 ('coved-type'): <strong>ST elevace &ge; 2 mm následovaná negativní vlnou T</strong> v pravostranných hrudních svodech (V1, V2). Odmaskován horečkou či blokátory Na kanálu (Ajmalin). Riziko fibrilace komor -> indikace ICD.</p>\n                                </div>\n                                <div class=\"p-3 bg-slate-900 border border-purple-500/30 rounded-xl\">\n                                    <span class=\"font-bold text-purple-400\">⏱️ Syndrom dlouhého QT (LQTS)</span>\n                                    <p class=\"mt-1\">Korigovaný interval <strong>QTc &gt; 480 ms</strong> (Bazettův vzorec: QTc = QT / &radic;RR). LQT1 (plavání/námaha), LQT2 (akustické podněty/emoce), LQT3 (spánek/klid). Riziko Torsades de Pointes. Léčba: Betablokátory (Nadolol/Propranolol), ICD.</p>\n                                </div>\n                            </div>\n                        "
        }
      ]
    },
    "recall": {
      "scenarios": [
        {
          "id": "ekg-r1",
          "title": "Kazuistika 1: Rozpoznání de Winterova vzorce",
          "question": "46letý kuřák je přivezen pro 45 minut trvající silnou retrosternální pálivou bolest a opocení. Na EKG není přítomna žádná ST elevace, ale ve svodech V2-V5 je patrná junkční deprese ST o 2 mm pokračující do nápadně vysokých, pozitivních a symetrických vln T. Jaká je diagnóza a jaký je další postup?",
          "answer": "Jedná se o de Winterův EKG vzorec, který je ekvivalentem akutního STEMI přední stěny a značí akutní totální uzávěr proximální ramus interventricularis anterior (RIA/LAD). Pacient musí být okamžitě transportován na katetrizační sál k provedení primární PCI bez čekání na výsledky laboratorních troponinů!",
          "pearl": "De Winterovy T vlny se vyskytují u 2 % pacientů s akutním uzávěrem LAD a jejich přehlédnutí mívá fatální následky."
        },
        {
          "id": "ekg-r2",
          "title": "Kazuistika 2: Wellensův syndrom po odeznění stenokardie",
          "question": "58letá žena měla před 3 hodinami epizodu kruté bolesti na hrudi, která spontánně odezněla. Nyní je zcela bez potíží. EKG v klidu ukazuje symetrické hluboké inverze T vln o hloubce 5 mm ve svodech V2, V3 a V4, bez ST elevací a bez patologických Q kmitů. Je bezpečné pacientku odeslat na bicyklovou ergometrii?",
          "answer": "NENÍ TO BEZPEČNÉ (Je to přísně kontraindikováno!). EKG obraz odpovídá Wellensovu syndromu typu B, který signalizuje kritickou proximální stenózu RIA (LAD). Provedení zátěžového testu (ergometrie) může vyvolat masivní transmurální infarkt přední stěny nebo fibrilaci komor. Pacientka vyžaduje hospitalizaci na monitorovaném lůžku a urgentní koronarografii.",
          "pearl": "Wellensův syndrom se projevuje právě v bezbolestném intervalu po proběhlé ischémii."
        }
      ],
      "quiz": {
        "title": "Rozhodovací kvíz: Hyperkalémie a urgentní EKG změny",
        "prompt": "Pacient s anurií a chronickým selháním ledvin má na EKG vysoké, úzké, symetrické 'stanovité' vlny T, oploštělé vlny P a široké QRS komplexy (140 ms). V krevním obraze je kalémie 7,6 mmol/l. Co je nejurgentnějším prvním krokem léčby?",
        "options": [
          {
            "text": "A) Okamžité podání Calcium gluconicum 10% (nebo Calcium chloratum) i.v. pro okamžitou stabilizaci myokardiální membrány",
            "isCorrect": true
          },
          {
            "text": "B) Perorální podání pryskyřice vázající draslík (Resonium)",
            "isCorrect": false
          },
          {
            "text": "C) Inhalace beta-2 mimetika (Salbutamol)",
            "isCorrect": false
          },
          {
            "text": "D) Infuze inzulinu s glukózou",
            "isCorrect": false
          }
        ],
        "explanation": "Kalcium podané nitrožilně nesnižuje samotnou hladinu draslíku v plazmě, ale během 1–3 minut antagonizuje toxický vliv hyperkalémie na membránový akční potenciál kardiomyocytů a chrání myokard před bezprostředním vznikem fibrilace komor či asystolie. Teprve po aplikaci vápníku podáváme léky přesunující draslík do buněk (inzulin + glukóza, bikarbonát, salbutamol) a zahajujeme dialýzu."
      }
    },
    "breakdown": {
      "classThree": [
        "Provádění zátěžových testů (ergometrie) u pacientů s EKG obrazem Wellensova syndromu (riziko infarktu a zástavy).",
        "Podávání vápníku i.v. pacientům s podezřením na intoxikaci digitalisem (může vyvolat ireverzibilní zástavu v systole - 'stone heart').",
        "Zpoždění primární PCI u pacienta s de Winterovými T vlnami kvůli absenci klasických ST elevací.",
        "Podávání nitrátů a diuretik u infarktu spodní stěny s extenzí na pravou komoru (svod V4R)."
      ],
      "mustKnow": [
        "Smith-Sgarbossa kritéria u LBBB: 1. Konkordantní STE &ge; 1 mm, 2. Konkordantní STD &ge; 1 mm ve V1–V3, 3. Diskordance ST/S &le; -0,25.",
        "de Winter: Junkční STD ve V1–V6 + vysoké špičaté T vlny = akutní uzávěr proximální RIA.",
        "Wellens: Hluboce invertované (typ B) nebo bifázické (typ A) T vlny ve V2–V4 = kritická stenóza RIA.",
        "Brugada syndrom: STE &ge; 2 mm typu 'coved' ve V1–V2.",
        "Hyperkalémie: Stanovité T -&gt; rozšíření QRS -&gt; sinusoida -&gt; zástava srdce. Okamžitě Calcium i.v.!"
      ]
    },
    "guidelineLinks": [
      {
        "title": "Clinical recommendations for the interpretation of the 12-lead electrocardiogram",
        "year": 2024,
        "journal": "European Heart Journal",
        "doi": "10.1093/eurheartj/ehae200",
        "url": "https://academic.oup.com/eurheartj/article/45/38/3314/7740997"
      }
    ]
  }
],

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

// ==========================================
// EKG MASTERCLASS - VERSIÓN EN ESPAÑOL (ES)
// ==========================================
const EKG_MASTERCLASS_DATA_ES = {
  desatero: [
    {
      step: 1,
      title: "1. Ritmo y origen del impulso",
      icon: "⚡",
      rule: "Cada complejo QRS debe estar precedido por una onda P positiva en las derivaciones I, II y aVF, y negativa en aVR.",
      details: "Ritmo sinusal vs. fibrilación auricular (ausencia de ondas P, intervalos R-R completamente irregulares), flutter auricular (ondas F en 'dientes de sierra', frec. auricular ~300 lpm), ritmo de la unión AV (onda P retrógrada o ausente, frecuencia 40–60 lpm), ritmo idioventricular (QRS ancho sin relación con ondas P, frecuencia 20–40 lpm).",
      clinicalPearl: "Si la onda P es negativa en la derivación II, el impulso no se origina en el nodo SA, sino en la parte baja de la aurícula o en la unión AV (ritmo auricular ectópico)."
    },
    {
      step: 2,
      title: "2. Frecuencia cardíaca (FC)",
      icon: "⏱️",
      rule: "A velocidad estándar de 25 mm/s: FC = 300 / número de cuadros grandes entre dos ondas R consecutivas.",
      details: "Secuencia mnemotécnica por cuadros grandes: 1 cuadro = 300 lpm, 2 = 150 lpm, 3 = 100 lpm, 4 = 75 lpm, 5 = 60 lpm, 6 = 50 lpm. En ritmos irregulares (ej. fibrilación auricular): cuente el número de complejos QRS en una tira de 10 segundos (50 cuadros grandes) y multiplique por 6.",
      clinicalPearl: "¡A una velocidad de papel de 50 mm/s se debe dividir entre 600 en lugar de 300!"
    },
    {
      step: 3,
      title: "3. Eje eléctrico cardíaco",
      icon: "🧭",
      rule: "Evalúe la polaridad neta del complejo QRS en las derivaciones frontales I y aVF.",
      details: "• Eje normal (-30° a +90°): I positivo, aVF positivo.<br>• Desviación a la izquierda (-30° a -90°): I positivo, aVF negativo (compruebe la derivación II: si II es negativo, confirma hemibloqueo anterior izquierdo / HBAI).<br>• Desviación a la derecha (+90° a +180°): I negativo, aVF positivo (hipertrofia de VD, hemibloqueo posterior izquierdo, tromboembolismo pulmonar).<br>• Eje indeterminado / 'Tierra de nadie' (-90° a 180°): I negativo, aVF negativo (muy característico de taquicardia ventricular).",
      clinicalPearl: "Regla de los pulgares: I positivo y aVF positivo = ambos pulgares hacia arriba = eje eléctrico normal."
    },
    {
      step: 4,
      title: "4. Onda P (Despolarización auricular)",
      icon: "🌊",
      rule: "Duración normal < 120 ms (3 cuadros pequeños), amplitud < 2.5 mm en derivación II.",
      details: "• P-pulmonale (crecimiento de aurícula derecha): onda P alta y picuda ≥ 2.5 mm en II, III, aVF (EPOC, cor pulmonale, hipertensión pulmonar).<br>• P-mitrale (crecimiento de aurícula izquierda): onda P ancha y bimodal (mellada) ≥ 120 ms en II con separación entre vértices ≥ 40 ms, y componente negativo profundo en V1 (estenosis/insuficiencia mitral, cardiopatía hipertensiva).",
      clinicalPearl: "La aurícula derecha se despolariza primero (primera mitad de la onda P) y la aurícula izquierda después (segunda mitad)."
    },
    {
      step: 5,
      title: "5. Intervalo PR / PQ (Conducción aurículo-ventricular)",
      icon: "⏳",
      rule: "Duración normal: 120–200 ms (de 3 a 5 cuadros pequeños).",
      details: "• Acortamiento (< 120 ms): Síndromes de preexcitación (Wolff-Parkinson-White con onda delta), síndrome de Lown-Ganong-Levine, ritmo de la unión.<br>• Prolongación (> 200 ms): Bloqueo AV de primer grado.<br>• Descenso del segmento PR: Hallazgo precoz muy típico de pericarditis aguda o infarto auricular.",
      clinicalPearl: "El retraso fisiológico del impulso ocurre en el nodo AV, permitiendo que las aurículas vacíen su contenido en los ventrículos antes de la sístole ventricular."
    },
    {
      step: 6,
      title: "6. Complejo QRS (Despolarización ventricular)",
      icon: "📈",
      rule: "Duración normal < 120 ms (idealmente < 100 ms).",
      details: "• QRS ancho (≥ 120 ms): Bloqueo de rama izquierda (BRI / LBBB), bloqueo de rama derecha (BRD / RBBB), taquicardia ventricular, extrasístoles ventriculares, preexcitación.<br>• Onda Q patológica: duración ≥ 40 ms (1 cuadro pequeño) o profundidad > 25 % del voltaje de la onda R en la misma derivación -> indica necrosis miocárdica transmural establecida.<br>• Criterios de hipertrofia ventricular izquierda: Sokolow-Lyon (S en V1 + R en V5/V6 > 35 mm).",
      clinicalPearl: "Una pequeña onda q septal fisiológica en I, aVL, V5–V6 es normal y refleja la despolarización inicial del septo de izquierda a derecha."
    },
    {
      step: 7,
      title: "7. Segmento ST (Repolarización ventricular precoz)",
      icon: "🎯",
      rule: "En condiciones normales es isoeléctrico al nivel de la línea base TP/PR.",
      details: "• Elevación del ST: Convexa con cambios recíprocos = SCACEST (STEMI); Cóncava difusa sin imágenes especulares = Pericarditis aguda; Convexa en V1–V2 = Brugada; Elevación del punto J con melladura = Repolarización precoz.<br>• Descenso del ST: Horizontal o descendente = Isquemia subendocárdica (SCASEST / angina estable); En cubeta = Efecto digitálico (Digoxina); Asimétrico con T negativa = Patrón de sobrecarga sistólica del ventrículo izquierdo.",
      clinicalPearl: "El punto J (unión del final del complejo QRS con el inicio del segmento ST) es la referencia estándar para medir elevaciones y depresiones."
    },
    {
      step: 8,
      title: "8. Onda T (Repolarización ventricular rápida)",
      icon: "📉",
      rule: "Normalmente es asimétrica y tiene la misma polaridad (concordante) que el vector principal del complejo QRS.",
      details: "• Ondas T altas, picudas y simétricas ('en tienda de campaña'): Hiperpotasemia o fase hiperaguda de infarto de miocardio.<br>• Ondas T invertidas profundas y simétricas: Isquemia miocárdica crítica (Síndrome de Wellens en territorio de descendente anterior), hemorragia intracraneal (ondas T cerebrales), TEP (en V1–V4).<br>• Ondas T aplanadas o bifásicas con onda U: Hipopotasemia.",
      clinicalPearl: "La onda T invertida solo es fisiológica en aVR (donde todo es negativo) y frecuentemente en V1 (en mujeres jóvenes sanas también en V2)."
    },
    {
      step: 9,
      title: "9. Intervalo QT / QTc (Sístole eléctrica ventricular)",
      icon: "🔬",
      rule: "Se mide desde el inicio del QRS hasta el final de la onda T. QTc corregido (fórmula de Bazett): QTc = QT / √RR.",
      details: "• QTc normal: hombres < 450 ms, mujeres < 460 ms.<br>• QTc prolongado (> 500 ms = riesgo crítico): Síndrome de QT largo congénito (LQTS), fármacos (amiodarona, sotalol, macrólidos, psicofármacos), hipopotasemia, hipocalcemia -> Riesgo inminente de Torsades de Pointes.<br>• QTc acortado (< 340 ms): Hipercalcemia, intoxicación digitálica, síndrome de QT corto congénito.",
      clinicalPearl: "Regla visual rápida: si el intervalo QT dura más de la mitad del intervalo R-R precedente (a frecuencia normal), el QTc está casi con certeza prolongado."
    },
    {
      step: 10,
      title: "10. Onda U y derivaciones especiales",
      icon: "👁️",
      rule: "Pequeña deflexión positiva que sigue a la onda T, más visible en derivaciones precordiales V2–V4.",
      details: "• Onda U prominente (> 1–2 mm): Típica de hipopotasemia severa, bradicardia extrema y fármacos antiarrítmicos.<br>• Onda U negativa: Siempre patológica; indica isquemia miocárdica severa o sobrecarga grave del ventrículo izquierdo.<br>• Derivaciones complementarias: V7–V9 (pared posterior / dorsal ante sospecha de infarto dorsal con descenso del ST en V1–V3), V3R–V6R (infarto de ventrículo derecho ante SCACEST inferior).",
      clinicalPearl: "¡En todo infarto de cara inferior (II, III, aVF), registre SIEMPRE las derivaciones derechas V3R–V6R para descartar infarto del ventrículo derecho!"
    }
  ],

  anatomy: [
    {
      id: "sa-node",
      name: "Nodo Sinoauricular (SA) y Miocardio Auricular",
      location: "Parte superior de la aurícula derecha, cerca de la desembocadura de la vena cava superior",
      ecgCorrelate: "Onda P",
      mechanism: "Despolarización espontánea de las células marcapasos (corrientes de canales If 'funny'). El impulso se propaga primero por la aurícula derecha hacia abajo y adelante, y a través del haz de Bachmann hacia la aurícula izquierda hacia atrás y a la izquierda.",
      vector: "El vector resultante se dirige hacia abajo, a la izquierda y adelante (+60°); por ello la onda P es positiva en I, II, aVF y negativa en aVR.",
      pathology: "Enfermedad del seno enfermo (pausas y bloqueos sinoauriculares), taquicardias auriculares, P-pulmonale (aurícula derecha) y P-mitrale (aurícula izquierda)."
    },
    {
      id: "av-node",
      name: "Nodo Auriculoventricular (AV) y Haz de His",
      location: "Parte inferior del septo interauricular en el triángulo de Koch",
      ecgCorrelate: "Segmento PR / PQ (línea isoeléctrica entre el final de P y el inicio de QRS)",
      mechanism: "Conducción lenta mediada por canales lentos de Ca2+. El retraso fisiológico (~0.08–0.12 s) permite que las aurículas finalicen la eyección de sangre a los ventrículos antes de la contracción ventricular.",
      vector: "Eléctricamente silente en el ECG de superficie debido a la pequeña masa de tejido -> se manifiesta como una pausa isoeléctrica.",
      pathology: "Bloqueo AV de 1.er grado (PR prolongado), bloqueo AV de 2.º grado (Mobitz I / Wenckebach nodal vs. Mobitz II infranodal en Haz de His), bloqueo AV de 3.er grado / completo, TRNAV (reentrada nodal AV por doble vía nodal)."
    },
    {
      id: "septum",
      name: "Septo Interventricular (Ramas del Haz de His)",
      location: "Porción proximal del septo interventricular muscular y membranoso",
      ecgCorrelate: "Fase inicial del QRS (onda q septal en derivaciones laterales / onda r en V1)",
      mechanism: "La rama izquierda del haz de His (LBB) se ramifica primero y despolariza el septo interventricular de IZQUIERDA A DERECHA.",
      vector: "El vector septal inicial se dirige DE IZQUIERDA A DERECHA, hacia adelante y arriba. Esto genera una pequeña onda q fisiológica en I, aVL, V5–V6 y una pequeña onda r en V1.",
      pathology: "En el bloqueo de rama izquierda (BRI), la onda q septal desaparece (el septo se despolariza anómalamente de derecha a izquierda); en el infarto septal aparece onda Q patológica en V1–V2."
    },
    {
      id: "ventricles",
      name: "Paredes Libres Ventriculares y Fibras de Purkinje",
      location: "Subendocardio -> miocardio transmural -> subepicardio ventricular",
      ecgCorrelate: "Cuerpo principal del complejo QRS (ondas R y S)",
      mechanism: "Conducción rápida por las fibras de Purkinje desde el endocardio hacia el epicardio. La masa del ventrículo izquierdo es 3 veces mayor que la del derecho, dominando el campo eléctrico total.",
      vector: "El vector ventricular principal se dirige hacia la IZQUIERDA, ABAJO y ATRÁS. Produce ondas R altas y dominantes en V5–V6, I, II, y ondas S profundas en V1–V2.",
      pathology: "Hipertrofia ventricular izquierda (ondas R gigantes en V5–V6, S profundas en V1), bloqueo de rama izquierda (complejo QRS ancho en M), bloqueo de rama derecha (patrón rsR' en 'orejas de conejo' en V1)."
    },
    {
      id: "repolarization",
      name: "Repolarización Ventricular",
      location: "Subepicardio -> subendocardio (¡Dirección OPUESTA a la despolarización!)",
      ecgCorrelate: "Segmento ST y Onda T",
      mechanism: "Los cardiomiocitos epicárdicos tienen un potencial de acción más corto que los subendocárdicos debido a la menor presión mecánica sistólica. Por ello, la repolarización comienza en el EPICARDIO y avanza hacia el ENDOCARDIO.",
      vector: "Al propagarse en dirección opuesta con carga eléctrica contraria, el vector neto apunta hacia el epicardio, resultando en una onda T POSITIVA con la misma orientación del QRS (concordancia fisiológica).",
      pathology: "Isquemia miocárdica (inversión de T, elevación/depresión del ST), prolongación del potencial de acción (LQTS), hiperpotasemia (ondas T picudas en tienda de campaña)."
    }
  ],

  ionAndTemperature: [
    {
      id: "hyperkalemia",
      name: "Hiperpotasemia / Hiperkalemia (K⁺ > 5.5 mmol/l)",
      severity: "Emergencia médica crítica",
      color: "rose",
      ecgWaveform: "Ondas T picudas -> Pérdida de P -> QRS ancho -> Patrón sinusoidal -> Paro cardíaco",
      changes: [
        "<strong>Leve (5.5–6.5 mmol/l):</strong> Ondas T altas, estrechas, simétricas y picudas con base estrecha ('en tienda de campaña'), más evidentes en II, III, V2–V4.",
        "<strong>Moderada (6.5–7.5 mmol/l):</strong> Prolongación del PR, aplanamiento y desaparición progresiva de ondas P, ensanchamiento del QRS, elevaciones del ST que simulan SCACEST.",
        "<strong>Grave (> 7.5–8.0 mmol/l):</strong> Fusión del QRS ensanchado con la onda T formando una onda sinusoidal continua (sine wave), fibrilación ventricular o asistolia inminente."
      ],
      pearl: "La administración intravenosa inmediata de Gluconato de Calcio al 10% estabiliza la membrana miocárdica en 1–3 minutos y normaliza el ECG sin alterar la concentración sérica de potasio."
    },
    {
      id: "hypokalemia",
      name: "Hipopotasemia / Hipokalemia (K⁺ < 3.5 mmol/l)",
      severity: "Alto riesgo arritmogénico",
      color: "cyan",
      ecgWaveform: "Aplanamiento de T -> Descenso de ST -> Onda U prominente -> Fusión T-U (falso QT largo)",
      changes: [
        "Aplanamiento e inversión progresiva de las ondas T.",
        "Descenso leve del segmento ST (0.5–1.0 mm).",
        "Aparición de una <strong>onda U prominente</strong> (> 1 mm, frecuentemente mayor que la propia onda T en V2–V3).",
        "Aparente prolongación del intervalo QT (en realidad es un intervalo QU por fusión de las ondas T y U).",
        "Alto riesgo de arritmias ventriculares y auriculares malignas, especialmente en pacientes tratados con digoxina."
      ],
      pearl: "Hipopotasemia + Digoxina = toxicidad digitálica grave con alto riesgo de arritmias letales (bigeminismo ventricular, taquicardia ventricular bidireccional)."
    },
    {
      id: "hypercalcemia",
      name: "Hipercalcemia (Ca²⁺ > 2.6 mmol/l)",
      severity: "Acortamiento del periodo refractario",
      color: "amber",
      ecgWaveform: "Acortamiento extremo del segmento ST y del intervalo QT",
      changes: [
        "Marcado <strong>acortamiento del intervalo QT / QTc</strong> (< 360 ms).",
        "El segmento ST es prácticamente inexistente: la onda T nace inmediatamente al finalizar el complejo QRS.",
        "En hipercalcemias graves (> 3.5 mmol/l): ensanchamiento del QRS, bradicardia sinusal, bloqueos AV y elevación del punto J."
      ],
      pearl: "Ante el hallazgo de un intervalo QT anormalmente corto en el ECG, solicite siempre calcemia para descartar hiperparatiroidismo primario o neoplasia oculta."
    },
    {
      id: "hypocalcemia",
      name: "Hipocalcemia (Ca²⁺ < 2.1 mmol/l)",
      severity: "Prolongación de la fase de meseta del potencial de acción",
      color: "purple",
      ecgWaveform: "Prolongación aislada del segmento ST con morfología normal de onda T -> QT largo",
      changes: [
        "Marcada <strong>prolongación del intervalo QT / QTc</strong>.",
        "Signo clave: la prolongación del QT se debe a un <strong>alargamiento aislado del segmento ST isoeléctrico</strong>, mientras que la onda T mantiene forma y anchura normales (a diferencia de la hipopotasemia).",
        "Riesgo de arritmias ventriculares polimórficas (Torsades de Pointes)."
      ],
      pearl: "La hipocalcemia prolonga específicamente la fase 2 (meseta) del potencial de acción miocárdico por enlentecimiento de la corriente de entrada de Ca2+."
    },
    {
      id: "hypothermia",
      name: "Hipotermia sistémica (Temperatura central < 32–35 °C)",
      severity: "Depresión miocárdica por frío",
      color: "blue",
      ecgWaveform: "Onda de Osborn (onda J) + Bradicardia sinusal + Artefactos por temblor muscular + Prolongación de intervalos",
      changes: [
        "<strong>Onda de Osborn (onda J):</strong> Deflexión positiva patognomónica en la unión del final del QRS con el inicio del segmento ST, más prominente en derivaciones precordiales V3–V6 e inferiores II, III, aVF. Su altura es proporcional al grado de hipotermia.",
        "Bradicardia sinusal progresiva (en hipotermia profunda evoluciona a fibrilación auricular con respuesta ventricular lenta).",
        "Prolongación de todos los intervalos electrocardiográficos: PR, QRS y QT.",
        "Artefactos en la línea de base por temblor muscular que pueden simular fibrilación auricular."
      ],
      pearl: "En hipotermia severa (< 28 °C), el miocardio es extremadamente irritable; cualquier estímulo mecánico (ej. inserción de vía venosa central) puede desencadenar fibrilación ventricular refractaria."
    }
  ],

  syndromesAndCongenital: [
    {
      id: "brugada",
      name: "Síndrome de Brugada",
      type: "Canalopatía hereditaria (gen SCN5A - canal de Na⁺ cardíaco)",
      icon: "⚡",
      ecgCriteria: "Tipo 1 (diagnóstico): Elevación convexa del segmento ST (en aleta de tiburón / coved-type) ≥ 2 mm seguida de onda T negativa en V1–V2 (o en espacios intercostales superiores 2.º y 3.º). Tipo 2 (saddleback): Elevación del ST en silla de montar ≥ 0.5 mm con onda T positiva o bifásica.",
      clinicalPresentation: "Pacientes jóvenes (predominio en varones) con síncopes en reposo o durante el sueño, antecedentes familiares de muerte súbita cardíaca. Arritmias: taquicardia ventricular polimórfica y fibrilación ventricular.",
      triggers: "Fiebre (¡la fiebre desenmascara el patrón de Brugada al empeorar la inactivación del canal de Na+!), alcohol, comidas copiosas, fármacos bloqueadores del canal de sodio (ajmalina, flecainida, antidepresivos tricíclicos).",
      management: "En pacientes con parada cardíaca recuperada o síncope cardiogénico: indicación de Desfibrilador Automático Implantable (DAI / ICD). En tormenta arrítmica aguda: infusión i.v. de Isoprenalina o quinidina. ¡Tratamiento antipirético enérgico e inmediato ante fiebre!"
    },
    {
      id: "wpw",
      name: "Síndrome de Wolff-Parkinson-White (WPW)",
      type: "Vía accesoria auriculoventricular congénita (Haz de Kent)",
      icon: "⚡",
      ecgCriteria: "Tríada clásica: 1. Intervalo PR corto (< 120 ms), 2. Onda Delta (empastamiento inicial de la rama ascendente del QRS por preexcitación ventricular a través del haz de Kent), 3. Complejo QRS ensanchado (> 110–120 ms) con alteraciones secundarias de la repolarización ST-T.",
      clinicalPresentation: "Episodios paroxísticos de palpitaciones taquicárdicas en personas jóvenes (taquicardia por reentrada AV ortodrómica o antidrómica).",
      dangerAlert: "🚨 <strong>Fibrilación Auricular en WPW (FBI: Fast, Broad, Irregular):</strong> ¡Emergencia médica extrema! La conducción por la vía accesoria puede superar 250–300 lpm y degenerar en fibrilación ventricular. <strong>¡PROHIBIDOS los fármacos frenadores del nodo AV (Adenosina, Verapamilo, Digoxina, Betabloqueantes)!</strong> El tratamiento de elección es la cardioversión eléctrica urgente o Ibutilida / Procainamida i.v.",
      management: "Tratamiento curativo de primera línea: Ablación por catéter con radiofrecuencia de la vía accesoria (tasa de éxito > 95 %)."
    },
    {
      id: "lqts",
      name: "Síndrome de QT Largo (LQTS)",
      type: "Canalopatías genéticas (LQT1–LQT3) y formas adquiridas farmacológicas",
      icon: "🧬",
      ecgCriteria: "Prolongación del intervalo QTc corregido > 460–480 ms (valores > 500 ms confieren alto riesgo de Torsades de Pointes). LQT1: ondas T anchas y de base amplia (desencadenado por ejercicio físico y natación). LQT2: ondas T de baja amplitud y melladas/bifásicas (desencadenado por estímulos auditivos bruscos: despertador, teléfono, sobresaltos). LQT3: segmento ST largo e isoeléctrico con onda T tardía y puntiaguda (desencadenado durante el sueño y reposo).",
      clinicalPresentation: "Síncopes inducidos por estrés emocional, ejercicio o sobresaltos sonoros, historia familiar de muerte súbita precoz.",
      management: "Betabloqueantes no selectivos (Nadolol, Propranolol), evitar estrictamente fármacos prolongadores del QT (consultar CredibleMeds), suplementación de magnesio y potasio, implante de DAI en pacientes de alto riesgo."
    },
    {
      id: "arvc",
      name: "Miocardiopatía Arritmogénica del Ventrículo Derecho (DAVD / CAVD)",
      type: "Enfermedad genética de los desmosomas cardíacos (Placoglobina, Desmoplaquina)",
      icon: "💔",
      ecgCriteria: "1. <strong>Onda Épsilon (Epsilon wave):</strong> Pequeña muesca o deflexión de bajo voltaje al final del complejo QRS en la transición hacia el segmento ST en derivaciones V1–V3 (presente en ~30 % de casos). 2. Inversión de ondas T en derivaciones derechas V1–V3 en mayores de 14 años. 3. Prolongación del tiempo de activación terminal del QRS (> 55 ms en V1–V3).",
      clinicalPresentation: "Deportistas jóvenes con palpitaciones, taquicardias ventriculares con morfología de bloqueo de rama izquierda (origen en VD) y muerte súbita durante el esfuerzo atlético.",
      management: "Restricción absoluta de deportes competitivos y de alta intensidad, betabloqueantes, ablación de taquicardia ventricular por catéter, implante de DAI."
    },
    {
      id: "early-repoc",
      name: "Patrón de Repolarización Precoz (Early Repolarization)",
      type: "Variante electrofisiológica común (benigna vs. maligna)",
      icon: "✨",
      ecgCriteria: "Elevación del punto J ≥ 1 mm en al menos 2 derivaciones contiguas con melladura (notching) o empastamiento (slurring) característico en la rama descendente de la onda R, seguida de elevación cóncava del segmento ST y ondas T altas y positivas.",
      clinicalPresentation: "Hallazgo muy frecuente y benigno en jóvenes deportistas y personas atléticas en derivaciones V2–V5 (asociado a alto tono vagal).",
      management: "En deportistas jóvenes asintomáticos constituye una variante fisiológica normal que no requiere tratamiento ni restricción deportiva."
    }
  ],

  pacemakers: [
    {
      id: "vvi-apex",
      name: "VVI - Estimulación Unicameral del Ápex del Ventrículo Derecho",
      recognitionLevel: "Fácilmente reconocible (Hallazgo clásico)",
      recognitionBadge: "easy",
      code: "VVI (Ventricle paced, Ventricle sensed, Inhibited)",
      icon: "⚡",
      waveformTag: "Espícula nítida -> QRS ancho (>140 ms) con patrón de BRI -> Onda S profunda en V1 -> Eje a la izquierda",
      leadDetails: "Derivación V1: complejo QS/S negativo y profundo. Derivaciones I, aVL: onda R ancha y positiva. Eje: desviación marcada a la izquierda (-30° a -90°).",
      leadMarkers: [
        { label: "Espícula de estimulación", desc: "Deflexión vertical aguda de gran voltaje inmediatamente antes del inicio del QRS" },
        { label: "QRS ancho (>140 ms)", desc: "Morfología típica de bloqueo de rama izquierda (patrón BRI / LBBB)" },
        { label: "Onda T discordante", desc: "Descenso del ST y onda T negativa en sentido opuesto a la deflexión principal del QRS" }
      ],
      leadOrigin: "Electrodo anclado en el ápex (punta) del ventrículo derecho",
      mechanism: "El estímulo nace en el miocardio del ápex ventricular derecho y se propaga de célula a célula por conducción muscular lenta (0.5 m/s) de abajo hacia arriba y de derecha a izquierda (hacia el ventrículo izquierdo), generando un QRS ancho similar al bloqueo de rama izquierda.",
      vectorLogic: "El vector de despolarización se aleja del ápex del VD (anterior e inferior) hacia la base del VI (posterior, superior e izquierdo), produciendo ondas S profundas en V1 y R altas en I y aVL.",
      clinicalPearl: "La estimulación crónica y predominante desde el ápex del VD genera disincronía mecánica del ventrículo izquierdo (miocardiopatía inducida por marcapasos). Actualmente se prefiere la estimulación fisiológica del sistema de conducción (CSP)."
    },
    {
      id: "aai",
      name: "AAI - Estimulación Auricular",
      recognitionLevel: "Dificultad intermedia (Espícula auricular sutil)",
      recognitionBadge: "medium",
      code: "AAI (Atrium paced, Atrium sensed, Inhibited)",
      icon: "🫀",
      waveformTag: "Espícula auricular -> Onda P -> Complejo QRS estrecho y fisiológico (<100 ms)",
      leadDetails: "Derivaciones II, III, aVF: espícula vertical precediendo a la onda P. Intervalo PR normal y complejo QRS estrecho normal.",
      leadMarkers: [
        { label: "Espícula auricular", desc: "Pequeño artefacto agudo inmediatamente antes de la onda P" },
        { label: "Onda P estimulada", desc: "Morfología dependiente de la posición del electrodo en la aurícula" },
        { label: "QRS estrecho (<100 ms)", desc: "Conducción fisiológica íntegra a través del nodo AV y ramas del Haz de His" }
      ],
      leadOrigin: "Electrodo situado en la orejuela de la aurícula derecha o en el septo interauricular",
      mechanism: "Indicado en la disfunción aislada del nodo sinusal con conducción auriculoventricular preservada. El marcapasos despolariza la aurícula y el impulso continúa de forma natural por el nodo AV y el sistema His-Purkinje hacia los ventrículos.",
      vectorLogic: "Vector auricular artificial desde la orejuela derecha; vector ventricular completamente normal por activación fisiológica.",
      clinicalPearl: "Si un paciente con marcapasos AAI desarrolla bloqueo AV con los años, los ventrículos quedarán desprotegidos; por ello, en la actualidad se implanta con mayor frecuencia un sistema bicameral DDD."
    },
    {
      id: "ddd-dual",
      name: "DDD - Estimulación Bicameral Secuencial AV",
      recognitionLevel: "Muy fácil en estimulación completa (2 espículas)",
      recognitionBadge: "easy",
      code: "DDD (Atrium & Ventricle paced, sensed, dual tracked)",
      icon: "⚡",
      waveformTag: "Espícula auricular -> Onda P -> Retraso AV programado -> Espícula ventricular -> QRS ancho",
      leadDetails: "En estimulación bicameral completa (Ap-Vp) se observan dos espículas: la primera antes de la onda P y la segunda tras el intervalo AV programado antes del QRS.",
      leadMarkers: [
        { label: "1.ª Espícula Auricular (Ap)", desc: "Genera la contracción auricular conservando la 'patada auricular' (+20 % del gasto cardíaco)" },
        { label: "Retraso AV programado", desc: "Simulación electrónica del retardo fisiológico en el nodo AV" },
        { label: "2.ª Espícula Ventricular (Vp)", desc: "Desencadena la despolarización ventricular con patrón de BRI" }
      ],
      leadOrigin: "Dos electrodos: uno en la aurícula derecha y otro en el ventrículo derecho",
      mechanism: "Permite 4 modalidades de funcionamiento según la actividad intrínseca: 1. As-Vs (solo monitoriza), 2. As-Vp (sensa P propia y estimula ventrículo tras bloqueo AV), 3. Ap-Vs (estimula aurícula en bradicardia sinusal y conduce normal al ventrículo), 4. Ap-Vp (estimula aurícula y ventrículo).",
      vectorLogic: "En Ap-Vp combina la despolarización auricular artificial con la activación ventricular desde el ápex del VD.",
      clinicalPearl: "El modo DDD previene el 'síndrome de marcapasos' (que ocurre en VVI por contracción auricular contra válvulas AV cerradas con regurgitación y mareos)."
    },
    {
      id: "biv-crt",
      name: "BiV / TRC - Terapia de Resincronización Cardíaca (TRC-P / TRC-D)",
      recognitionLevel: "Dificultad intermedia a avanzada (Onda R dominante en V1 y QRS resincronizado)",
      recognitionBadge: "medium",
      code: "BiV / CRT (Biventricular Pacing)",
      icon: "🔄",
      waveformTag: "Espículas BiV -> Onda R dominante en derivación V1 -> QRS más estrecho que en estimulación de VD",
      leadDetails: "Derivación V1: onda R positiva prominente o patrón RSR' (a diferencia del QS profundo de VVI). Eje: desviación a la derecha. Anchura QRS: reducción de duración respecto al BRI basal.",
      leadMarkers: [
        { label: "Espícula biventricular", desc: "Artefacto de estimulación simultánea (o con retraso LV-RV en milisegundos)" },
        { label: "Onda R positiva en V1", desc: "Signo patognomónico de activación del ventrículo izquierdo desde la pared posterolateral hacia V1" },
        { label: "QRS resincronizado", desc: "Complejo más estrecho por despolarización simultánea de ambas paredes ventriculares" }
      ],
      leadOrigin: "Tres electrodos: 1. Aurícula derecha, 2. Ventrículo derecho, 3. Ventrículo izquierdo introducido por el seno coronario a la pared posterolateral",
      mechanism: "En pacientes con insuficiencia cardíaca y BRI existe retraso en la contracción de la pared lateral del VI. La TRC estimula simultáneamente el endocardio del VD y el epicardio del VI a través del seno coronario, restaurando la sincronía contráctil mecánica.",
      vectorLogic: "El electrodo de VI despolariza la pared lateral de izquierda a derecha y hacia adelante, proyectando el vector hacia la derivación anterior V1 -> produce una onda R positiva en V1.",
      clinicalPearl: "¡La presencia de una onda R dominante y positiva en V1 en un ECG con marcapasos es la clave diagnóstica de estimulación biventricular efectiva!"
    },
    {
      id: "csp-his-lbbp",
      name: "CSP - Estimulación Fisiológica del Sistema de Conducción (Haz de His y LBBAP)",
      recognitionLevel: "¡MUY DIFÍCIL / TRAMPA FRECUENTE! (QRS estrecho, microespícula casi invisible)",
      recognitionBadge: "hard",
      code: "CSP (Conduction System Pacing: HBP / LBBAP)",
      icon: "🎯",
      waveformTag: "Microespícula sutil -> QRS ESTRECHO Y FISIOLÓGICO (<100-115 ms) -> Eje y onda T normales",
      leadDetails: "En la estimulación del Haz de His (HBP), la morfología del QRS es idéntica a un ECG normal con conducción nativa. En la estimulación del área de rama izquierda (LBBAP), puede existir un discreto patrón rSr' en V1 con tiempo al pico de R en V6 normal (<75 ms).",
      leadMarkers: [
        { label: "Microespícula discreta", desc: "Artefacto bipolar de baja energía, muy pequeño y apenas perceptible en el ECG estándar" },
        { label: "QRS estrecho y normal", desc: "Duración < 100–120 ms, preservando el eje eléctrico y la repolarización normal" },
        { label: "Sincronía fisiológica", desc: "Ausencia total de patrón de BRI o retraso mecánico ventricular" }
      ],
      leadOrigin: "Electrodo fijado directamente en el Haz de His o atornillado profundamente a través del septo hacia el subendocardio de la rama izquierda (LBBAP)",
      mechanism: "Técnica vanguardista de estimulación cardíaca. En lugar de estimular el músculo cardíaco no especializado, se conecta directamente al sistema His-Purkinje. El impulso viaja a 2–4 m/s activando ambos ventrículos con sincronía fisiológica perfecta.",
      vectorLogic: "El vector sigue la vía anatómica nativa de las ramas de Tawara desde el septo a las paredes libres ventriculares.",
      clinicalPearl: "⚠️ ¡ATENCIÓN EN EL EXAMEN! Si observa un complejo QRS estrecho y normal, examine con atención la línea isoeléctrica previa: una pequeña espícula vertical revela estimulación fisiológica del Haz de His (CSP) y no un ritmo sinusal espontáneo."
    },
    {
      id: "pm-failure-capture",
      name: "Fallo de Marcapasos: Pérdida de Captura (Failure to Capture)",
      recognitionLevel: "Fallo grave fácilmente identificable",
      recognitionBadge: "danger",
      code: "Malfunction: Loss of Capture",
      icon: "🚨",
      waveformTag: "Espícula de marcapasos en la línea isoeléctrica -> NINGUNA onda P ni complejo QRS posterior -> Pausa asistólica",
      leadDetails: "Aparece la espícula de estimulación en el momento programado, pero el miocardio no responde eléctricamente (la línea base permanece plana).",
      leadMarkers: [
        { label: "Espícula huérfana", desc: "El generador emite el impulso eléctrico pero el miocardio no se despolariza" },
        { label: "Ausencia de respuesta miocárdica", desc: "Sin onda P (en estimulación auricular) ni QRS (en ventricular)" },
        { label: "Riesgo de bradicardia extrema / parada", desc: "Puede provocar síncope por crisis de Stokes-Adams" }
      ],
      leadOrigin: "Desplazamiento del electrodo, fibrosis en el punto de contacto (bloqueo de salida), aumento del umbral de estimulación, infarto en el sitio del electrodo, hiperpotasemia severa",
      mechanism: "El dispositivo funciona y emite el pulso programado, pero la energía no alcanza el umbral de voltaje necesario para despolarizar los miocardiocitos circundantes, o el electrodo se ha desplazado mecánicamente.",
      vectorLogic: "No se genera ningún vector de despolarización.",
      clinicalPearl: "Ante una pérdida aguda de captura, compruebe siempre los niveles séricos de potasio (¡la hiperpotasemia eleva drásticamente el umbral de estimulación!) y solicite una radiografía de tórax para verificar la posición del cable."
    },
    {
      id: "pm-undersensing",
      name: "Fallo de Marcapasos: Infrasensado / 'Marcapasos Ciego' (Undersensing)",
      recognitionLevel: "Alto riesgo arritmogénico (Fenómeno de R sobre T)",
      recognitionBadge: "danger",
      code: "Malfunction: Undersensing (Failure to Sense)",
      icon: "⚠️",
      waveformTag: "Espículas asíncronas cayendo sobre complejos QRS u ondas T propias -> ¡Riesgo de fibrilación ventricular!",
      leadDetails: "El marcapasos ignora los latidos espontáneos del paciente y emite espículas a frecuencia fija independientemente de la actividad cardíaca propia.",
      leadMarkers: [
        { label: "Espícula asíncrona", desc: "La espícula cae justo tras una onda R propia o sobre la cima de la onda T" },
        { label: "Fenómeno de R sobre T", desc: "Estímulo eléctrico en el periodo vulnerable de la repolarización ventricular" },
        { label: "Desencadenante de arritmias letales", desc: "Puede inducir taquicardia ventricular polimórfica o fibrilación ventricular inmediata" }
      ],
      leadOrigin: "Sensibilidad mal calibrada (umbral en mV demasiado alto), pérdida de amplitud del electrograma intrínseco, daño en el aislante del cable",
      mechanism: "En condiciones normales, el marcapasos 'escucha' la actividad eléctrica intrínseca y se inhibe si el paciente genera su propio latido. En el infrasensado, el dispositivo no detecta la señal y sigue disparando asíncronamente.",
      vectorLogic: "Conflicto aleatorio entre el frente de onda nativo y el estímulo ectópico del marcapasos.",
      clinicalPearl: "El infrasensado es sumamente peligroso por el riesgo de inducir fibrilación ventricular al disparar sobre la onda T (fenómeno de R sobre T)."
    },
    {
      id: "pm-oversensing",
      name: "Fallo de Marcapasos: Sobresensado / 'Marcapasos Hipersensible' (Oversensing)",
      recognitionLevel: "Dificultad intermedia (Pausas en el ECG sin espículas esperadas)",
      recognitionBadge: "warning",
      code: "Malfunction: Oversensing",
      icon: "🛑",
      waveformTag: "Ausencia de espículas esperadas -> Pausa asistólica inadecuada -> Síncope en pacientes dependientes de marcapasos",
      leadDetails: "Cuando la frecuencia cardíaca cae por debajo del límite mínimo, el marcapasos NO estimula porque interpreta erróneamente señales parásitas como si fueran latidos cardíacos propios.",
      leadMarkers: [
        { label: "Falta de espícula en la pausa", desc: "La frecuencia desciende por debajo del límite pero el marcapasos no actúa" },
        { label: "Señal parásita errónea", desc: "Causada por potenciales musculares del pectoral (miopotenciales), ondas T gigantes o interferencias electromagnéticas" },
        { label: "Inhibición inapropiada", desc: "El generador cree equivocadamente que el corazón acaba de contraerse por sí mismo" }
      ],
      leadOrigin: "Sensibilidad excesiva (umbral en mV demasiado bajo), fractura del conductor del cable que genera ruido eléctrico, contracción del músculo pectoral mayor",
      mechanism: "El marcapasos detecta señales eléctricas externas o fisiológicas no deseadas (ej. contracción del músculo pectoral al hacer fuerza con los brazos) y las clasifica erróneamente como ondas R ventriculares, inhibiendo la estimulación y causando pausas asistólicas.",
      vectorLogic: "Ausencia de vector por inhibición; línea isoeléctrica.",
      clinicalPearl: "Prueba diagnóstica a la cabecera del paciente: pídale que junte las palmas de las manos y haga fuerza pectoral isométrica. Si aparecen pausas en el monitor con inhibición del marcapasos, confirma sobresensado por miopotenciales."
    }
  ],

  masterclassQuiz: [
    {
      id: "emq-1",
      question: "¿Qué fenómeno electrocardiográfico se origina por la despolarización fisiológica del septo interventricular de izquierda a derecha y por qué desaparece en el bloqueo de rama izquierda (BRI / LBBB)?",
      options: [
        { text: "A) La pequeña onda q fisiológica en derivaciones laterales (I, aVL, V5-V6): en el BRI el septo se despolariza anómalamente de derecha a izquierda.", isCorrect: true },
        { text: "B) La onda Épsilon: en el BRI queda oculta por la despolarización de la pared libre.", isCorrect: false },
        { text: "C) La onda S en la derivación V1: en el BRI se transforma en una onda R alta.", isCorrect: false },
        { text: "D) La onda U: en el BRI desaparece debido al acortamiento de la repolarización.", isCorrect: false }
      ],
      explanation: "En condiciones normales, el septo interventricular se despolariza primero de izquierda a derecha a través de los fascículos de la rama izquierda, generando una pequeña onda q en I, aVL, V5-V6. En el bloqueo de rama izquierda, esta conducción se interrumpe y el septo se despolariza en sentido opuesto (de derecha a izquierda), haciendo desaparecer la onda q septal fisiológica."
    },
    {
      id: "emq-2",
      question: "Varón de 24 años trasladado a urgencias tras un síncope durante un cuadro febril. El ECG en V1–V2 muestra una elevación convexa del punto J de 3 mm con onda T negativa. ¿Cuál es el diagnóstico y la medida inmediata prioritaria?",
      options: [
        { text: "A) Síndrome de Brugada tipo 1: administración inmediata de antipiréticos para controlar la fiebre e ingreso en telemetría", isCorrect: true },
        { text: "B) SCACEST agudo de cara anterior: coronariografía urgente inmediata", isCorrect: false },
        { text: "C) Pericarditis aguda: dosis altas de ibuprofeno y colchicina", isCorrect: false },
        { text: "D) Síndrome de Wolff-Parkinson-White: bolo de adenosina", isCorrect: false }
      ],
      explanation: "Se trata de un Síndrome de Brugada Tipo 1 (elevación convexa del ST en aleta de tiburón en V1-V2). La fiebre es el desencadenante crítico más frecuente de arritmias ventriculares al acentuar la disfunción de los canales de sodio cardíacos. El tratamiento antipirético enérgico e inmediato es vital para prevenir la fibrilación ventricular."
    },
    {
      id: "emq-3",
      question: "En un paciente con hipotermia accidental grave (temperatura central de 29 °C), ¿cómo se denomina la deflexión patognomónica visible en la unión del complejo QRS con el segmento ST?",
      options: [
        { text: "A) Onda de Osborn (onda J)", isCorrect: true },
        { text: "B) Onda Épsilon", isCorrect: false },
        { text: "C) Onda Delta", isCorrect: false },
        { text: "D) Onda U prominente", isCorrect: false }
      ],
      explanation: "La onda de Osborn (onda J) es el hallazgo clásico y patognomónico de la hipotermia sistémica. Se produce en la unión del final del QRS con el segmento ST debido a un gradiente de voltaje transmural acentuado entre el epicardio y el endocardio por el frío."
    },
    {
      id: "emq-4",
      question: "¿Por qué está estrictamente contraindicado administrar adenosina o verapamilo a un paciente con fibrilación auricular preexcitada (WPW) con taquicardia irregular de QRS ancho a 260 lpm?",
      options: [
        { text: "A) El bloqueo del nodo AV desvía todos los impulsos auriculares masivos hacia la vía accesoria de conducción rápida, provocando fibrilación ventricular y parada cardíaca.", isCorrect: true },
        { text: "B) Estos fármacos desencadenan hiperpotasemia fulminante.", isCorrect: false },
        { text: "C) Provocan rotura del septo interventricular.", isCorrect: false },
        { text: "D) Bloquean los receptores beta pulmonares causando broncoespasmo grave.", isCorrect: false }
      ],
      explanation: "En la fibrilación auricular con WPW (taquicardia FBI: Fast, Broad, Irregular), el nodo AV protege a los ventrículos frenando parte de los impulsos. Si se bloquea el nodo AV con adenosina o verapamilo, las 300–400 ondas auriculares por minuto pasan sin resistencia por el haz de Kent al ventrículo, desencadenando fibrilación ventricular inmediata. El tratamiento es la cardioversión eléctrica o Ibutilida."
    },
    {
      id: "emq-5",
      question: "Revisa el ECG de un paciente con marcapasos: el complejo QRS es estrecho (< 110 ms) y con morfología idéntica a un ritmo sinusal normal, pero precedido por una microespícula vertical muy discreta. ¿De qué tipo de estimulación se trata?",
      options: [
        { text: "A) Estimulación fisiológica del sistema de conducción (Haz de His / CSP)", isCorrect: true },
        { text: "B) Estimulación clásica unicameral VVI desde el ápex del ventrículo derecho", isCorrect: false },
        { text: "C) Estimulación ventricular izquierda aislada por seno coronario", isCorrect: false },
        { text: "D) Pérdida de captura del generador", isCorrect: false }
      ],
      explanation: "Se trata de estimulación fisiológica del sistema de conducción (His-Bundle Pacing o LBBAP). Al conectarse directamente al Haz de His, el impulso viaja a gran velocidad por las fibras de Purkinje y genera un complejo QRS estrecho fisiológico, a diferencia del QRS ancho con patrón de BRI que produce la estimulación apical del VD."
    },
    {
      id: "emq-6",
      question: "¿Cuál es el signo electrocardiográfico clave que confirma la captura y estimulación efectiva del ventrículo izquierdo en un paciente con marcapasos biventricular (TRC)?",
      options: [
        { text: "A) Onda R positiva y dominante en la derivación V1 (o morfología RSR')", isCorrect: true },
        { text: "B) Onda QS profunda y ancha en derivaciones I y aVL", isCorrect: false },
        { text: "C) Desaparición completa de las ondas P en todas las derivaciones", isCorrect: false },
        { text: "D) Acortamiento del intervalo QT por debajo de 300 ms", isCorrect: false }
      ],
      explanation: "En la terapia de resincronización (TRC), el electrodo del seno coronario estimula la pared posterolateral del ventrículo izquierdo de izquierda a derecha en dirección a V1. Esto genera una onda R positiva prominente en la derivación V1, siendo el marcador electrocardiográfico por excelencia de estimulación ventricular izquierda activa."
    }
  ]
};

// Export pro globální i modulární použití
if (typeof window !== "undefined") {
  window.CARDIOLOGY_DATA = CARDIOLOGY_DATA;
  window.EKG_MASTERCLASS_DATA = EKG_MASTERCLASS_DATA;
  window.EKG_MASTERCLASS_DATA_ES = EKG_MASTERCLASS_DATA_ES;
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = { CARDIOLOGY_DATA, EKG_MASTERCLASS_DATA, EKG_MASTERCLASS_DATA_ES };
}



