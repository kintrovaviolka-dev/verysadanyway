// data.js - Kompletní databáze Obecné a Speciální neurologie pro 4. ročník LF OU
const NEUROLOGY_DATA = {
  "title": "Neurologie • Kompletní studijní portál LF OU",
  "subtitle": "Interaktivní příprava ke zkoušce z neurologie: Obecná neurologie (25 otázek) a Speciální neurologie (42 otázek) s Leitner flashcards, aktivním vybavováním a testovou bankou.",
  "version": "2.0.0",
  "meta": {
    "faculty": "Lékařská fakulta Ostravské univerzity (LF OU)",
    "year": "4. ročník Všeobecného lékařství",
    "totalModules": 67,
    "totalCards": 201,
    "totalQuizQuestions": 134,
    "totalRecallScenarios": 67
  },
  "sections": [
    {
      "id": "all",
      "label": "Všechny okruhy (67)",
      "count": 67,
      "icon": "📚"
    },
    {
      "id": "obecna",
      "label": "Obecná neurologie (25)",
      "count": 25,
      "icon": "⚡"
    },
    {
      "id": "specialni",
      "label": "Speciální neurologie (42)",
      "count": 42,
      "icon": "🏥"
    }
  ],
  "categories": [
    {
      "id": "all",
      "label": "Všechny kategorie",
      "icon": "⚡"
    },
    {
      "id": "motorika_nervy",
      "label": "Motorika, svaly & reflexy",
      "icon": "💪"
    },
    {
      "id": "senzitivita_micha_kmen",
      "label": "Citlivost, mícha & kmen",
      "icon": "🧠"
    },
    {
      "id": "hlavove_nervy",
      "label": "Hlavové nervy",
      "icon": "👁️"
    },
    {
      "id": "hemisfery_vedomi_likvor",
      "label": "Laloky, řeč, vědomí & meningy",
      "icon": "🗣️"
    },
    {
      "id": "vysetreni_systemy",
      "label": "Klinické vyšetření & mozeček",
      "icon": "🩺"
    },
    {
      "id": "paraklinika",
      "label": "EEG, EMG, zobrazování & likvor",
      "icon": "🔬"
    },
    {
      "id": "epilepsie_vedomi",
      "label": "Epilepsie & záchvaty",
      "icon": "⚡"
    },
    {
      "id": "cevni_urgentni",
      "label": "Cévní mozkové příhody (CMP)",
      "icon": "🩸"
    },
    {
      "id": "urgentni_trauma",
      "label": "Neurotraumata & urgentní stavy",
      "icon": "🚨"
    },
    {
      "id": "infekce_tumory",
      "label": "Neuroinfekce & Nádory CNS",
      "icon": "🦠"
    },
    {
      "id": "neurodegenerace",
      "label": "Neurodegenerace & Demence",
      "icon": "🧩"
    },
    {
      "id": "bolesti_hlavy",
      "label": "Bolesti hlavy & Migréna",
      "icon": "⚡"
    },
    {
      "id": "autoimunitni_demyelinizace",
      "label": "RS & Demyelinizace CNS/PNS",
      "icon": "🛡️"
    },
    {
      "id": "vertebrogenni",
      "label": "Vertebrogenní & Úžinové syndromy",
      "icon": "🦴"
    },
    {
      "id": "periferni_autonomni",
      "label": "Polyneuropatie & Autonomní systém",
      "icon": "🌐"
    },
    {
      "id": "nervosvalovy_prenos",
      "label": "Nervosvalová ploténka & Myopatie",
      "icon": "⚡"
    },
    {
      "id": "toxicke_metabolicke",
      "label": "Metabolické, toxické & karenční",
      "icon": "🧪"
    },
    {
      "id": "likvor_cirkulace",
      "label": "Likvor & Hydrocefalus",
      "icon": "💧"
    },
    {
      "id": "vrozene_vyvojove",
      "label": "DMO & Vývojová onemocnění",
      "icon": "👶"
    }
  ],
  "modules": [
    {
      "id": "q01-centralni-rizeni-motoriky",
      "number": 1,
      "section": "obecna",
      "sectionLabel": "Obecná neurologie",
      "badgePrefix": "O01",
      "title": "Centrální řízení motoriky, motorická kůra, anatomie prvního motoneuronu",
      "shortDesc": "Primární motorický kortex (gyrus praecentralis, Brodmann 4), tractus corticospinalis a corticonuclearis, capsula interna, decussatio pyramidum a syndrom centrální parézy.",
      "category": "motorika_nervy",
      "badge": "Motorický systém",
      "badgeColor": "cyan",
      "theory": {
        "banner": {
          "tag": "Motorický systém • 1. motoneuron",
          "title": "Centrální řízení volní motoriky",
          "text": "Volní motorika je iniciována v primárním motorickém kortexu a premotorických oblastech. První (horní) motoneuron (Betzovy pyramidové buňky) vysílá axony přes capsula interna, mozkový kmen a míšní provazce k druhému (dolnímu) motoneuronu v předních rozích míšních nebo jádrech hlavových nervů."
        },
        "sections": [
          {
            "title": "1. Korová reprezentace a somatotopie (motorický homunkulus)",
            "color": "cyan",
            "content": "\n                    <p class=\"mb-3\"><strong>Primární motorický kortex (M1):</strong> Gyrus praecentralis (Brodmannova area 4). Somatotopické uspořádání (motorický homunculus dle Penfielda):</p>\n                    <ul class=\"list-disc pl-5 space-y-1 mb-3 text-sm\">\n                        <li><strong>Mediální plocha a vertex:</strong> Dolní končetina, noha a perineum (zásobováno <em>a. cerebri anterior</em>).</li>\n                        <li><strong>Konvexita hemisféry:</strong> Horní končetina, ruka (velká plocha reprezentace), prsty, obličej, jazyk, hltan (zásobováno <em>a. cerebri media</em>).</li>\n                        <li><strong>Premotorická kůra (area 6) a suplementární motorická oblast (SMA):</strong> Plánování komplexních motorických sekvencí a bimanuální koordinace.</li>\n                        <li><strong>Frontální okohybné pole (FEF, area 8):</strong> Volní konjugované pohyby bulbů na kontralaterální stranu.</li>\n                    </ul>\n                    <div class=\"alert-box alert-cyan mt-2\">\n                        <strong>⚡ Klinická korelace:</strong> Okluze <em>a. cerebri anterior</em> způsobí převahu krurální parézy (DKK), zatímco okluze <em>a. cerebri media</em> způsobí převahu faciobrachiální parézy (obličej + HK kontralaterálně).\n                    </div>\n                "
          },
          {
            "title": "2. Průběh pyramidové dráhy (Tractus corticospinalis & corticonuclearis)",
            "color": "sky",
            "content": "\n                    <div class=\"space-y-3\">\n                        <div class=\"p-3 rounded-lg bg-slate-900 border border-slate-700\">\n                            <span class=\"font-bold text-cyan-300\">1. Corona radiata & Capsula interna:</span>\n                            <p class=\"text-xs text-slate-300 mt-1\">Vlákna konvergují do capsula interna: <em>tr. corticonuclearis</em> prochází přes <strong>genu</strong>, <em>tr. corticospinalis</em> přes <strong>crus posterius</strong> (somatotopie zpředu dozadu: HK, trup, DK).</p>\n                        </div>\n                        <div class=\"p-3 rounded-lg bg-slate-900 border border-slate-700\">\n                            <span class=\"font-bold text-cyan-300\">2. Mozkový kmen:</span>\n                            <p class=\"text-xs text-slate-300 mt-1\">Mesencephalon: <em>crura cerebri</em> (prostřední 3/5). Pons: roztříštěno pontinními jádry. Medulla oblongata: <em>pyramides medullae</em>.</p>\n                        </div>\n                        <div class=\"p-3 rounded-lg bg-slate-900 border border-slate-700\">\n                            <span class=\"font-bold text-emerald-400\">3. Decussatio pyramidum (Křížení):</span>\n                            <p class=\"text-xs text-slate-300 mt-1\">Na rozhraní prodloužené míchy a hřbetní míchy se <strong>80–90 % vláken kříží</strong> jako <em>tractus corticospinalis lateralis</em> (probíhá v postranním míšním provazci). Zbylých 10–20 % běží nekříženě jako <em>tractus corticospinalis anterior</em> a kříží se až v příslušném míšním segmentu.</p>\n                        </div>\n                    </div>\n                "
          },
          {
            "title": "3. Syndrom centrální (spastické) parézy vs. periferní parézy",
            "color": "indigo",
            "content": "\n                    <div class=\"overflow-x-auto my-3\">\n                        <table class=\"min-w-full text-xs text-left text-slate-200 border border-slate-700\">\n                            <thead class=\"bg-slate-800 text-cyan-300 uppercase font-mono\">\n                                <tr>\n                                    <th class=\"p-2 border border-slate-700\">Znak</th>\n                                    <th class=\"p-2 border border-slate-700\">Centrální (1. motoneuron)</th>\n                                    <th class=\"p-2 border border-slate-700\">Periferní (2. motoneuron)</th>\n                                </tr>\n                            </thead>\n                            <tbody>\n                                <tr class=\"border-b border-slate-800 bg-slate-900/50\">\n                                    <td class=\"p-2 font-bold\">Svalový tonus</td>\n                                    <td class=\"p-2 text-rose-300\">Spastický (fenomén sklapovacího nože, Wernicke-Mann)</td>\n                                    <td class=\"p-2 text-cyan-300\">Hypotonie až atonie (chabost)</td>\n                                </tr>\n                                <tr class=\"border-b border-slate-800\">\n                                    <td class=\"p-2 font-bold\">Šlachové reflexy</td>\n                                    <td class=\"p-2 text-rose-300\">Hyperreflexie, rozšířená zóna, polykinetická odpověď, klonus</td>\n                                    <td class=\"p-2 text-cyan-300\">Hyporeflexie až vyhasnutí (areflexie)</td>\n                                </tr>\n                                <tr class=\"border-b border-slate-800 bg-slate-900/50\">\n                                    <td class=\"p-2 font-bold\">Svalové atrofie</td>\n                                    <td class=\"p-2\">Pouze mírná inaktivní (pozdní)</td>\n                                    <td class=\"p-2 text-amber-300\">Časná, těžká neurogenní atrofie</td>\n                                </tr>\n                                <tr class=\"border-b border-slate-800\">\n                                    <td class=\"p-2 font-bold\">Fascikulace</td>\n                                    <td class=\"p-2\">NE</td>\n                                    <td class=\"p-2 text-amber-300\">ANO (při lézi předních rohů míšních - ALS)</td>\n                                </tr>\n                                <tr class=\"bg-slate-900/50\">\n                                    <td class=\"p-2 font-bold\">Pyramidové iritační jevy</td>\n                                    <td class=\"p-2 text-rose-400 font-bold\">POZITIVNÍ (Babinski, Rossolimo, Juster)</td>\n                                    <td class=\"p-2\">Negativní</td>\n                                </tr>\n                            </tbody>\n                        </table>\n                    </div>\n                "
          }
        ]
      },
      "recall": {
        "scenarios": [
          {
            "id": "rec-q01-1",
            "title": "Kazuistika: Náhlá slabost končetin po cévní příhodě",
            "question": "62letý pacient po CMP v oblasti capsula interna vlevo vykazuje spastickou hemiparézu vpravo. Jaké typické držení těla (Wernicke-Mannovo) očekáváte na HK a DK a proč?",
            "answer": "Wernicke-Mannovo spastické držení vzniká převahou antigravitačního svalstva: na horní končetině převládá flexe (addukce ramene, flexe v lokti, pronace a flexe zápěstí a prstů), na dolní končetině převládá extenze (extenze v kyčli a koleni, plantární flexe a inverze nohy - pes equinovarus), což vede k typické cirkumdukční (kositelské) chůzi.",
            "pearl": "Akutně po lézi 1. motoneuronu (např. akutní CMP či míšní šok) jsou končetiny zpočátku chabé a hyporeflexní (diachisis); spasticita a hyperreflexie se vyvíjejí až v horizontu dnů až týdnů."
          }
        ]
      },
      "cards": [
        {
          "id": "fc-q01-1",
          "front": "Kde dochází ke křížení pyramidové dráhy a jaké procento vláken se kříží?",
          "back": "V <em>decussatio pyramidum</em> na rozhraní prodloužené míchy a hřbetní míchy. Kříží se cca <strong>80–90 % vláken</strong> (tractus corticospinalis lateralis); 10–20 % běží nekříženě (tractus corticospinalis anterior).",
          "hint": "Rozhraní medulla oblongata a mícha."
        },
        {
          "id": "fc-q01-2",
          "front": "Jmenujte 4 základní příznaky syndromu léze centrálního motoneuronu (1. motoneuron).",
          "back": "1. <strong>Spasticita</strong> (zvýšený tonus s fenoménem sklapovacího nože)<br>2. <strong>Hyperreflexie</strong> šlachově-okosticových reflexů + klonus<br>3. <strong>Pyramidové iritační jevy</strong> (např. pozitivní Babinski)<br>4. <strong>Zánik kožních reflexů</strong> (břišní) + absence časných neurogenních atrofií.",
          "hint": "Tonus, reflexy, iritační jevy, atrofie."
        },
        {
          "id": "fc-q01-3",
          "front": "Jaká je lokalizace vláken pro HK a DK v capsula interna?",
          "back": "Všechna pyramidová vlákna pro trup a končetiny procházejí v <strong>crus posterius</strong> capsula interna (somatotopicky zpředu dozadu: HK -> trup -> DK). V <strong>genu</strong> probíhá <em>tractus corticonuclearis</em> pro hlavové nervy.",
          "hint": "Genu vs. crus posterius."
        }
      ],
      "quiz": [
        {
          "id": "q01-test1",
          "question": "Při lézi primární motorické kůry na mediální ploše hemisféry v povodí arteria cerebri anterior vzniká:",
          "options": [
            "Převaha parézy horní končetiny a obličeje kontralaterálně",
            "Převaha parézy dolní končetiny (krurální paréza) kontralaterálně",
            "Homolaterální chabá obrna končetin",
            "Izolovaná kvadrantová anopsie"
          ],
          "correctIndex": 1,
          "explanation": "Na mediální ploše gyrusu praecentralis je lokalizována korová reprezentace dolní končetiny, která je vaskularizována z arteria cerebri anterior."
        },
        {
          "id": "q01-test2",
          "question": "Který z následujících nálezů svědčí pro periferní (chabou) a NIKOLIV centrální lézi?",
          "options": [
            "Pozitivní Babinského reflex",
            "Spastický fenomén sklapovacího nože",
            "Přítomnost fascikulací a časných svalových atrofií",
            "Klonus pately a nohy"
          ],
          "correctIndex": 2,
          "explanation": "Fascikulace a časná výrazná neurogenní atrofie jsou typickými známkami denervace při lézi 2. (dolního) motoneuronu."
        }
      ]
    },
    {
      "id": "q02-periferni-nerv-nervosvalovy-prenos",
      "number": 2,
      "section": "obecna",
      "sectionLabel": "Obecná neurologie",
      "badgePrefix": "O02",
      "title": "Periferní nerv, nervosvalový přenos, kosterní sval",
      "shortDesc": "Stavba motorické jednotky, patofyziologie periferní chabé parézy, nervosvalová ploténka (myasthenia gravis vs. LEMS) a myogenní syndrom (myopatie, myositidy).",
      "category": "motorika_nervy",
      "badge": "PNS & Svaly",
      "badgeColor": "sky",
      "theory": {
        "banner": {
          "tag": "Neuromuskulární aparát • 2. motoneuron",
          "title": "Periferní nervový systém a svalová jednotka",
          "text": "Motorická jednotka se skládá z těla motoneuronu (v předním rohu míšním nebo jádře HN), jeho axonu v periferním nervu, nervosvalových plotének a všech svalových vláken, která inervuje. Poruchy mohou vznikat na úrovni axonu/myelinu (neuropatie), synapse (myastenie) nebo svalového vlákna (myopatie)."
        },
        "sections": [
          {
            "title": "1. Periferní nerv a syndrom periferní (chabé) parézy",
            "color": "cyan",
            "content": "\n                    <p class=\"mb-3\">Léze periferního motoneuronu (kdekoliv od předního rohu míšního po nervosvalové zakončení) způsobuje kompletní výpadek motorické inervace svalových vláken:</p>\n                    <ul class=\"list-disc pl-5 space-y-1 mb-3 text-sm\">\n                        <li><strong>Chabá hypotonie / atonie:</strong> Ztráta svalového tonu v důsledku přerušení reflexního oblouku.</li>\n                        <li><strong>Areflexie / hyporeflexie:</strong> Vyhasnutí příslušných šlachově-okosticových reflexů.</li>\n                        <li><strong>Neurogenní svalová atrofie:</strong> Rychlý rozvoj (do 2–3 týdnů) úbytku svalové hmoty v denervované distribuci.</li>\n                        <li><strong>Fascikulace a fibrilace:</strong> Spontánní záškuby motorických jednotek (viditelné fascikulace typické pro lézi předních rohů - ALS; fibrilace zachytitelné na EMG).</li>\n                    </ul>\n                "
          },
          {
            "title": "2. Nervosvalový přenos a jeho poruchy (Myastenie vs. Lambert-Eaton)",
            "color": "sky",
            "content": "\n                    <div class=\"grid md:grid-cols-2 gap-3 my-3\">\n                        <div class=\"p-3 rounded-lg bg-slate-900 border border-slate-700\">\n                            <div class=\"font-bold text-cyan-400 mb-1\">🩺 Myasthenia Gravis</div>\n                            <p class=\"text-xs text-slate-300 mb-2\"><strong>Mechanismus:</strong> Autoimunitní protilátky proti <em>postsynaptickým nikotinovým acetylcholinovým receptorům (AChR)</em> nebo <em>MuSK</em>.</p>\n                            <p class=\"text-xs text-slate-300 mb-2\"><strong>Klinika:</strong> Kolísavá slabost a patologická unavitelnost, zhoršuje se zátěží a večer. Predilekce: okohybné svaly (ptóza, diplopie), bulbární (dysfagie, dysartrie), proximální pletence.</p>\n                            <p class=\"text-xs text-emerald-400\"><strong>Diagnostika/léčba:</strong> EMG dekrement při repetitivní stimulaci, inhibitory AChE (pyridostigmin), kortikoidy, tymektomie.</p>\n                        </div>\n                        <div class=\"p-3 rounded-lg bg-slate-900 border border-slate-700\">\n                            <div class=\"font-bold text-amber-400 mb-1\">🔬 Lambert-Eatonův myastenický syndrom (LEMS)</div>\n                            <p class=\"text-xs text-slate-300 mb-2\"><strong>Mechanismus:</strong> Protilátky proti <em>presynaptickým napěťově řízeným Ca2+ kanálům (VGCC)</em>. Často paraneoplastický (malobuněčný karcinom plic - SCLC).</p>\n                            <p class=\"text-xs text-slate-300 mb-2\"><strong>Klinika:</strong> Slabost proximálního svalstva DKK, chůze do schodů, autonomní příznaky (sucho v ústech, erektilní dysfunkce), reflexy jsou snížené, ale po volní kontrakci se <strong>přechodně zlepšují (fenomén facilitace)</strong>.</p>\n                            <p class=\"text-xs text-emerald-400\"><strong>EMG:</strong> Nízký výchozí CMAP, inkrement při vysokofrekvenční stimulaci.</p>\n                        </div>\n                    </div>\n                "
          },
          {
            "title": "3. Myogenní syndrom (Myopatie, Svalové dystrofie)",
            "color": "indigo",
            "content": "\n                    <p class=\"mb-2 text-sm\">Primární postižení svalového vlákna (struktury kontraktilního aparátu, sarkolemy či enzymů):</p>\n                    <ul class=\"list-disc pl-5 space-y-1 mb-3 text-sm\">\n                        <li><strong>Distribuce slabosti:</strong> Symetrická, <em>proximální</em> pletencová (ramenní a pánevní pletenec - potíže při vstávání ze židle, česání, chůze kolébavá - myopatická/kachní, Gowersovo znamení „šplhání po vlastním těle“).</li>\n                        <li><strong>Svalový tonus a reflexy:</strong> Tonus je normální nebo snížený, šlachové reflexy odpovídají stupni svalové atrofie (nejsou selektivně vyhaslé na počátku).</li>\n                        <li><strong>Laboratoř a EMG:</strong> Elevace sérové kreatinkinázy (CK, myoglobin). Jehlové EMG prokazuje <em>myogenní lézi</em> (nízká amplituda, zkrácené trvání akčních potenciálů motorických jednotek - MUAP, bohatý interferenční obraz při malé síle).</li>\n                    </ul>\n                "
          }
        ]
      },
      "recall": {
        "scenarios": [
          {
            "id": "rec-q02-1",
            "title": "Kazuistika: Mladá žena s večerní ptózou a dvojitým viděním",
            "question": "28letá pacientka si stěžuje, že se jí odpoledne a večer zavírá pravé oční víčko a při čtení vidí dvojitě. Ráno po probuzení je zcela bez obtíží. Jaký diagnostický test u lůžka můžete provést a jaké protilátky odeberete?",
            "answer": "Podezření na Myasthenia gravis. U lůžka provedeme 'Ice-pack test' (přiložení ledu na víčko na 2 minuty – chlad inhibuje acetylcholinesterázu a zlepší ptózu) nebo Simpsonův test pohledu vzhůru (zhoršení ptózy po 1 minutě fixace vzhůru). Laboratorně odebíráme protilátky proti AChR (anti-acetylcholinový receptor) a anti-MuSK. Indikujeme CT mediastina k vyloučení thymomu.",
            "pearl": "U myastenie NIKDY nepodávejte léky blokující nervosvalový přenos jako aminoglykosidy, fluorochinolony, beta-blokátory či hořčík i.v., které mohou vyvolat myastenickou krizi."
          }
        ]
      },
      "cards": [
        {
          "id": "fc-q02-1",
          "front": "Jaký je hlavní rozdíl v patofyziologii mezi Myasthenia gravis a LEMS?",
          "back": "<strong>Myasthenia gravis:</strong> Postsynaptický autoimunitní blok (anti-AChR nebo anti-MuSK protilátky).<br><strong>LEMS:</strong> Presynaptický blok uvolňování acetylcholinu (anti-VGCC Ca2+ kanály, často paraneoplastický u SCLC).",
          "hint": "Postsynapse vs. presynapse."
        },
        {
          "id": "fc-q02-2",
          "front": "Co je to Gowersovo znamení a pro co je typické?",
          "back": "Fenomén, kdy pacient při vstávání ze země 'šplhá rukama po vlastních dolních končetinách' v důsledku těžké slabosti pánevního pletence a gluteálního svalstva. Typické pro <strong>proximální myopatie a svalové dystrofie (např. Duchenneova dystrofie)</strong>.",
          "hint": "Vstávání z podlahy u myopatií."
        },
        {
          "id": "fc-q02-3",
          "front": "Jaký je EMG nález u myogenní léze na jehlovém EMG?",
          "back": "Akční potenciály motorických jednotek (MUAP) mají <strong>nízkou amplitudu</strong>, <strong>zkrácené trvání</strong> a vysokou polyfázii. Při minimální volní kontrakci vzniká předčasný bohatý interferenční obraz.",
          "hint": "Amplituda a trvání MUAP."
        }
      ],
      "quiz": [
        {
          "id": "q02-test1",
          "question": "Pro Lambert-Eatonův myastenický syndrom (LEMS) je charakteristické:",
          "options": [
            "Protilátky proti postsynaptickým nikotinovým ACh receptorům",
            "Zhoršování svalové síly bezprostředně po opakované zátěži",
            "Přechodné zlepšení síly a reflexů po krátké volní kontrakci (facilitace) a asociace se SCLC",
            "Přítomnost fascikulací jazyka a končetin"
          ],
          "correctIndex": 2,
          "explanation": "LEMS je presynaptická porucha způsobená protilátkami proti Ca2+ kanálům (VGCC). Projevuje se typickou facilitací po svalové kontrakci a silnou asociací s malobuněčným karcinomem plic."
        },
        {
          "id": "q02-test2",
          "question": "Základním lékem první volby v symptomatické terapii Myasthenia gravis je:",
          "options": [
            "Inhibitor acetylcholinesterázy (pyridostigmin)",
            "Beta-2 mimetikum (salbutamol)",
            "Baklofen",
            "Levodopa"
          ],
          "correctIndex": 0,
          "explanation": "Pyridostigmin (Mestinon) inhibuje enzym acetylcholinesterázu v synaptické štěrbině, čímž prodlužuje a zvyšuje dostupnost acetylcholinu pro zbývající receptory."
        }
      ]
    },
    {
      "id": "q03-senzitivni-system-korova-oblast",
      "number": 3,
      "section": "obecna",
      "sectionLabel": "Obecná neurologie",
      "badgePrefix": "O03",
      "title": "Senzitivní systém, senzitivní korová oblast mozku",
      "shortDesc": "Zadněprovazcové čití (fasciculus gracilis et cuneatus), anterolaterální systém (tr. spinothalamicus), talamická jádra, primární somatosenzorický kortex (gyrus postcentralis) a disociované poruchy čití.",
      "category": "senzitivita_micha_kmen",
      "badge": "Senzitivní systém",
      "badgeColor": "cyan",
      "theory": {
        "banner": {
          "tag": "Senzitivní systém • Aferentace",
          "title": "Organizace somatosenzorického systému",
          "text": "Senzitivní dráhy přenášejí informace z periferie přes trojneuronový řetězec do primární somatosenzorické kůry (gyrus postcentralis). Zahrnují epikritické hluboké čití (zadní provazce) a protopatické čití bolesti a teploty (spinotalamický trakt)."
        },
        "sections": [
          {
            "title": "1. Dráha zadních provazců (Lemniskální systém - Epikritické čití)",
            "color": "cyan",
            "content": "\n                    <p class=\"mb-3\">Přenáší <strong>taktilní diskriminační čití</strong>, <strong>vibrační citlivost (pallestézii)</strong> a <strong>hlubokou propriocepci</strong> (polohocit a pohybocit):</p>\n                    <ul class=\"list-disc pl-5 space-y-1 mb-3 text-sm\">\n                        <li><strong>1. neuron:</strong> Pseudounipolární buňka spinálního ganglia -> zadní kořen -> vstupuje do zadních provazců bez přepojení:\n                            <ul class=\"list-circle pl-5 mt-1\">\n                                <li><em>Fasciculus gracilis (Golli):</em> Mediálně, z dolní poloviny těla (Th6 a níže).</li>\n                                <li><em>Fasciculus cuneatus (Burdachi):</em> Laterálně, z horní poloviny těla (nad Th6).</li>\n                            </ul>\n                        </li>\n                        <li><strong>2. neuron:</strong> V <em>nucleus gracilis et cuneatus</em> v prodloužené míše -> axony se kříží jako <strong>fibrae arcuatae internae (decussatio lemnisci medialis)</strong> a stoupají jako <em>lemniscus medialis</em> do talamu.</li>\n                        <li><strong>3. neuron:</strong> V <em>VPL (nucleus ventralis posterolateralis thalami)</em> -> axony procházejí přes crus posterius capsula interna do primární senzitivní kůry (gyrus postcentralis).</li>\n                    </ul>\n                "
          },
          {
            "title": "2. Anterolaterální systém (Tractus spinothalamicus - Protopatické čití)",
            "color": "sky",
            "content": "\n                    <p class=\"mb-3\">Přenáší <strong>nocicepci (bolest)</strong>, <strong>termocepci (teplo/chlad)</strong> a hrubé dotykové čití:</p>\n                    <ul class=\"list-disc pl-5 space-y-1 mb-3 text-sm\">\n                        <li><strong>1. neuron:</strong> Spinální ganglion -> zadní roh míšní.</li>\n                        <li><strong>2. neuron:</strong> Neurony zadního rohu míšního (substantia gelatinosa Rolandi) -> axony se <strong>kříží v commissura alba anterior</strong> v rozsahu 1–2 míšních segmentů a stoupají v anterolaterálním provazci jako <em>tractus spinothalamicus lateralis et anterior</em> do talamu.</li>\n                        <li><strong>3. neuron:</strong> <em>VPL jádro talamu</em> -> capsula interna -> gyrus postcentralis.</li>\n                    </ul>\n                "
          },
          {
            "title": "3. Typy senzitivních poruch a disociace čití",
            "color": "indigo",
            "content": "\n                    <div class=\"space-y-3\">\n                        <div class=\"p-3 rounded-lg bg-slate-900 border border-slate-700\">\n                            <span class=\"font-bold text-amber-400\">Syringomyelická disociace (léze centrální šedi míšní):</span>\n                            <p class=\"text-xs text-slate-300 mt-1\">Vyhasnutí <strong>čití bolesti a teploty</strong> při <strong>zachovalém hlubokém čití a jemném dotyku</strong> (postižen je křížící se tr. spinothalamicus v commissura alba anterior, zadní provazce jsou ušetřeny).</p>\n                        </div>\n                        <div class=\"p-3 rounded-lg bg-slate-900 border border-slate-700\">\n                            <span class=\"font-bold text-cyan-400\">Tabická disociace (léze zadních provazců - Tabes dorsalis, deficit B12):</span>\n                            <p class=\"text-xs text-slate-300 mt-1\">Vyhasnutí <strong>propriocepce, vibrace a diskriminace</strong> při <strong>zachovalém vnímání bolesti a tepla</strong>. Vede k senzorické ataxii (pozitivní Romberg II se zavřenýma očima).</p>\n                        </div>\n                        <div class=\"p-3 rounded-lg bg-slate-900 border border-slate-700\">\n                            <span class=\"font-bold text-purple-400\">Korová senzitivní porucha (Gyrus postcentralis, Brodmann 3, 1, 2):</span>\n                            <p class=\"text-xs text-slate-300 mt-1\">Porucha diskriminačního čití, <em>astereognozie</em> (neschopnost poznat předmět hmatem), <em>agrafestézie</em> (nerozpoznání čísel kreslených na kůži), <em>dvoubodová diskriminace</em>.</p>\n                        </div>\n                    </div>\n                "
          }
        ]
      },
      "recall": {
        "scenarios": [
          {
            "id": "rec-q03-1",
            "title": "Kazuistika: Popáleniny prstů bez pocitu bolesti",
            "question": "35letý pacient si opakovaně popálil prsty o plotnu, aniž by cítil jakoukoliv bolest. Při vyšetření má v plášťovité distribuci (C4–Th2) vyhaslé vnímání tepla a bolesti, ale hmat, polohocit a vibrace jsou zcela intaktní. O jaký syndrom jde a co je anatomickou příčinou?",
            "answer": "Jedná se o syringomyelickou disociaci čití v plášťovité distribuci, typickou pro syringomyelii (dutinová expanze v centrálním míšním kanálu). Dutina komprimuje křížící se vlákna tractus spinothalamicus v commissura alba anterior, zatímco zadní provazce (fasciculus gracilis et cuneatus) ležící dorzálně zůstávají intaktní.",
            "pearl": "Při poškození talamu (Dejerine-Roussy syndrom) vzniká kontralaterální hemianestézie s těžkými pálivými talamickými bolestmi a alodynií nereagující na běžná analgetika."
          }
        ]
      },
      "cards": [
        {
          "id": "fc-q03-1",
          "front": "Kde dochází ke křížení dráhy zadních provazců a kde spinotalamické dráhy?",
          "back": "<strong>Zadní provazce:</strong> Kříží se až v <em>prodloužené míše</em> (decussatio lemnisci medialis).<br><strong>Spinotalamická dráha:</strong> Kříží se hned <em>v míše</em> v commissura alba anterior (1–2 segmenty nad vstupem).",
          "hint": "Kmen vs. míšní segmenty."
        },
        {
          "id": "fc-q03-2",
          "front": "Definujte syringomyelickou disociaci čití.",
          "back": "Selektivní ztráta vnímání <strong>bolesti a teploty</strong> (protopatické čití) při <strong>zachovalém hlubokém a taktilním čití</strong> (epikritické čití).",
          "hint": "Bolest/teplo vs. polohocit/vibrace."
        },
        {
          "id": "fc-q03-3",
          "front": "Co je to astereognozie a pro lézi které struktury svědčí?",
          "back": "Neschopnost identifikovat hmatem předmět vložený do ruky při zavřených očích (tvar, materiál). Svědčí pro lézi <strong>kontralaterálního parietálního somatosenzorického kortexu</strong>.",
          "hint": "Poznávání předmětů hmatem."
        }
      ],
      "quiz": [
        {
          "id": "q03-test1",
          "question": "Fasciculus gracilis (Golli) přivádí senzitivní vlákna z:",
          "options": [
            "Horní končetiny a krku (C1–Th5)",
            "Dolní poloviny těla a dolních končetin (Th6 a níže)",
            "Obličeje a trojklanného nervu",
            "Vnitřních orgánů pánve výhradně pro motoriku"
          ],
          "correctIndex": 1,
          "explanation": "Fasciculus gracilis leží mediálně v zadních provazcích a vede propriocepci a diskriminační čití z dolních končetin a dolního trupu (od Th6 kaudálně)."
        },
        {
          "id": "q03-test2",
          "question": "Při tabické disociaci čití (např. u funikulární myelózy při deficitu vitamínu B12) nacházíme:",
          "options": [
            "Ztrátu vnímání bolesti a tepla při intaktní propriocepci",
            "Ztrátu hlubokého čití, polohocitu a vibrace se senzorickou ataxií při zachovalém vnímání bolesti a tepla",
            "Kompletní anestézii všech modalit na jedné polovině těla",
            "Hypestézii v distribuci n. ischiadicus"
          ],
          "correctIndex": 1,
          "explanation": "Tabická disociace vzniká poškozením zadních provazců míšních: vyhasíná propriocepce, polohocit a vibrace (pallestézie), což způsobuje pád při zavření očí (pozitivní Romberg II), zatímco spinotalamický trakt je ušetřen."
        }
      ]
    },
    {
      "id": "q04-misni-syndromy",
      "number": 4,
      "section": "obecna",
      "sectionLabel": "Obecná neurologie",
      "badgePrefix": "O04",
      "title": "Míšní syndromy",
      "shortDesc": "Kompletní transverzální léze míšní, Brown-Séquardův syndrom hemisekce míchy, syndrom arteria spinalis anterior, syndrom zadních provazců, syndrom centrální míšní šedi, conus medullaris a cauda equina.",
      "category": "senzitivita_micha_kmen",
      "badge": "Míšní léze",
      "badgeColor": "cyan",
      "theory": {
        "banner": {
          "tag": "Míšní topografie • Syndromologie",
          "title": "Klinické míšní syndromy",
          "text": "Mícha představuje vysoce organizovaný konduktor motorických, senzitivních a autonomních drah. Topografická diagnostika míšních lézí umožňuje přesnou lokalizaci výšky a rozsahu poškození (extramedulární komprese, intramedulární expanze, ischémie či trauma)."
        },
        "sections": [
          {
            "title": "1. Kompletní transverzální léze míšní (Míšní transekce)",
            "color": "cyan",
            "content": "\n                    <ul class=\"list-disc pl-5 space-y-1 mb-3 text-sm\">\n                        <li><strong>Akutní fáze (Míšní šok - diaschisis):</strong> Chabá paréza/plegie pod úrovní léze, areflexie, atonický neurogenní močový měchýř s retencí moči a inkontinencí z přetékání (ischuria paradoxa), paralytický ileus, anestézie od daného dermatomu kaudálně.</li>\n                        <li><strong>Chronická fáze (Spastická):</strong> Postupný rozvoj spastické paraparézy/kvadruparézy, hyperreflexie, pozitivní pyramidové iritační jevy (Babinski), automatický (spastický) močový měchýř s reflexním vyprazdňováním.</li>\n                        <li><strong>Hladina léze:</strong>\n                            <ul class=\"list-circle pl-5 mt-1\">\n                                <li><em>C1–C4:</em> Kvadruplegie, obrna bránice (n. phrenicus C3–C5) -> nutnost UPV.</li>\n                                <li><em>C5–Th1:</em> Kvadruparéza s různým postižením horních končetin (C5 deltoideus, C6 biceps, C7 triceps, C8 flexory prstů, Th1 interossei).</li>\n                                <li><em>Thorakální mícha:</em> Spastická paraplegie DKK, porucha čití od příslušného dermatomu (Th4 mamily, Th10 pupek, Th12 třísla).</li>\n                            </ul>\n                        </li>\n                    </ul>\n                "
          },
          {
            "title": "2. Parciální míšní syndromy (Brown-Séquard, a. spinalis anterior)",
            "color": "sky",
            "content": "\n                    <div class=\"grid md:grid-cols-2 gap-3 my-3\">\n                        <div class=\"p-3 rounded-lg bg-slate-900 border border-slate-700\">\n                            <div class=\"font-bold text-cyan-400 mb-1\">🌓 Brown-Séquardův syndrom (Hemisekce míchy)</div>\n                            <p class=\"text-xs text-slate-300 mb-1\"><strong>Homolaterálně (na straně léze):</strong> Centrální paréza pod lézí (tr. corticospinalis) + výpadek hlubokého čití, polohocitu a vibrace (zadní provazce) + v úrovni léze pruh periferní parézy a anestézie.</p>\n                            <p class=\"text-xs text-rose-300\"><strong>Kontralaterálně (naproti lézi):</strong> Výpadek vnímání bolesti a tepla začínající 1–2 dermatomy pod lézí (přerušený křížící se tr. spinothalamicus).</p>\n                        </div>\n                        <div class=\"p-3 rounded-lg bg-slate-900 border border-slate-700\">\n                            <div class=\"font-bold text-amber-400 mb-1\">🩸 Syndrom a. spinalis anterior (Ischémie předních 2/3 míchy)</div>\n                            <p class=\"text-xs text-slate-300 mb-1\"><strong>Postiženo:</strong> Přední rohy (chabá obrna v segmentu), pyramidové dráhy (spastická paraparéza pod lézí), spinotalamické dráhy (ztráta vnímání bolesti a tepla) + sfinkterové poruchy.</p>\n                            <p class=\"text-xs text-emerald-400 font-bold\">ZACHOVÁNO: Zadní provazce jsou intaktní (vaskularizovány z aa. spinales posteriores) -> polohocit a vibrace zůstávají zachovány!</p>\n                        </div>\n                    </div>\n                "
          },
          {
            "title": "3. Syndrom conus medullaris vs. cauda equina",
            "color": "indigo",
            "content": "\n                    <div class=\"overflow-x-auto my-3\">\n                        <table class=\"min-w-full text-xs text-left text-slate-200 border border-slate-700\">\n                            <thead class=\"bg-slate-800 text-cyan-300 uppercase font-mono\">\n                                <tr>\n                                    <th class=\"p-2 border border-slate-700\">Znak</th>\n                                    <th class=\"p-2 border border-slate-700\">Syndrom conus medullaris (S3–S5, L1 obratel)</th>\n                                    <th class=\"p-2 border border-slate-700\">Syndrom cauda equina (L2–S5 kořeny)</th>\n                                </tr>\n                            </thead>\n                            <tbody>\n                                <tr class=\"border-b border-slate-800 bg-slate-900/50\">\n                                    <td class=\"p-2 font-bold\">Bolest</td>\n                                    <td class=\"p-2\">Mírná, perianální, oboustranná symetrická</td>\n                                    <td class=\"p-2 text-rose-300 font-bold\">Intenzivní radikulární bolest do dolních končetin (často asymetrická)</td>\n                                </tr>\n                                <tr class=\"border-b border-slate-800\">\n                                    <td class=\"p-2 font-bold\">Motorický deficit</td>\n                                    <td class=\"p-2\">Žádný nebo minimální</td>\n                                    <td class=\"p-2 text-rose-300 font-bold\">Výrazná asymetrická chabá paréza DKK (L2–S1)</td>\n                                </tr>\n                                <tr class=\"border-b border-slate-800 bg-slate-900/50\">\n                                    <td class=\"p-2 font-bold\">Porucha citlivosti</td>\n                                    <td class=\"p-2\">Sedlovitá anestézie (perianogenitální S3–S5), symetrická</td>\n                                    <td class=\"p-2\">Sedlovitá anestézie + výpadky v dermatomemech DKK, asymetrická</td>\n                                </tr>\n                                <tr class=\"border-b border-slate-800\">\n                                    <td class=\"p-2 font-bold\">Sfinktery</td>\n                                    <td class=\"p-2 text-amber-400 font-bold\">Časná inkontinence/retence moči a stolice, impotence</td>\n                                    <td class=\"p-2\">Pozdější nástup poruchy sfinkterů</td>\n                                </tr>\n                                <tr class=\"bg-slate-900/50\">\n                                    <td class=\"p-2 font-bold\">Reflexy</td>\n                                    <td class=\"p-2\">Vyhaslý anální reflex, L2–S2 zachovány</td>\n                                    <td class=\"p-2 text-amber-300\">Vyhaslý patelární (L4) a/nebo Achillovy šlachy (S1)</td>\n                                </tr>\n                            </tbody>\n                        </table>\n                    </div>\n                "
          }
        ]
      },
      "recall": {
        "scenarios": [
          {
            "id": "rec-q04-1",
            "title": "Kazuistika: Bodné poranění páteře s asymetrickým nálezem",
            "question": "25letý muž po bodném poranění v oblasti hrudní páteře Th8 vpravo má spastickou parézu pravé dolní končetiny a vyhaslý polohocit a vibraci na pravé noze. Na levé dolní končetině necítí vpichy jehlou ani teplou vodu, ale motorika levé nohy je intaktní. O jaký syndrom se jedná?",
            "answer": "Jedná se o klasický Brown-Séquardův syndrom (hemisekce míchy vpravo v úrovni Th8). Na straně léze (vpravo) je přerušena pyramidová dráha (spastická paréza) a zadní provazce (ztráta propriocepce/vibrace). Kontralaterálně (vlevo) je přerušen již zkřížený tractus spinothalamicus, což vede ke ztrátě čití bolesti a termického čití.",
            "pearl": "Syndrom cauda equina (např. při masivní mediální hernii disku L4/L5) představuje absolutní neurochirurgickou urgenci s nutností dekomprese do 24–48 hodin, jinak hrozí trvalá sfinkterová inkontinence a paraparéza."
          }
        ]
      },
      "cards": [
        {
          "id": "fc-q04-1",
          "front": "Jaký je charakter senzitivního a motorického výpadku u Brown-Séquardova syndromu?",
          "back": "<strong>Homolaterálně:</strong> Centrální spastická paréza + ztráta propriocepce a vibrace (zadní provazce).<br><strong>Kontralaterálně:</strong> Ztráta vnímání bolesti a teploty (spinotalamický trakt).",
          "hint": "Co je na straně léze a co naproti."
        },
        {
          "id": "fc-q04-2",
          "front": "Které senzitivní modality zůstávají ZACHOVÁNY při syndromu arteria spinalis anterior?",
          "back": "<strong>Hluboké čití, polohocit a vibrace</strong> (epikritické čití zadních provazců), protože zadní provazce jsou zásobeny párovými <em>aa. spinales posteriores</em>.",
          "hint": "Zadní provazce a jejich cévní zásobení."
        },
        {
          "id": "fc-q04-3",
          "front": "Jaký je hlavní rozdíl mezi syndromem conus medullaris a cauda equina?",
          "back": "<strong>Conus medullaris:</strong> Časná sfinkterová porucha, symetrická sedlovitá anestézie, bez těžké motorické parézy DKK.<br><strong>Cauda equina:</strong> Těžká krutá radikulární bolest do DKK, asymetrická chabá paréza DKK, vyhaslé reflexy L/S, sfinktery mohou nastupovat později.",
          "hint": "Bolest, paréza a symetrie."
        }
      ],
      "quiz": [
        {
          "id": "q04-test1",
          "question": "Při míšní lézi v úrovni Th4 očekáváme senzitivní hladinu anestézie v úrovni:",
          "options": [
            "Pupku (umbilicus)",
            "Prsních bradavek (mamillární linie)",
            "Tříselných vazů",
            "Klíčních kostí"
          ],
          "correctIndex": 1,
          "explanation": "Dermatom Th4 odpovídá úrovni prsních bradavek (mamillární čára). Úroveň Th10 odpovídá pupku a Th12 tříslům."
        },
        {
          "id": "q04-test2",
          "question": "V akutní fázi transverzální léze míšní (fáze míšního šoku) je neurologický nález pod úrovní léze charakterizován:",
          "options": [
            "Spastickou paraparézou s hyperreflexií a klonem",
            "Chabou plegií, areflexií, atonickým močovým měchýřem a anestézií",
            "Zvýšenou svalovou rigiditou fenoménu ozubeného kola",
            "Hyperkinezemi typu chorey a atetózy"
          ],
          "correctIndex": 1,
          "explanation": "V akutním stádiu míšního šoku dochází vlivem náhlé ztráty supraspinální facilitace k chabé plegii, vyhasnutí všech reflexů a atonii sfinkterů. Spasticita nastupuje až sekundárně."
        }
      ]
    },
    {
      "id": "q05-mozkovy-kmen-diencephalon",
      "number": 5,
      "section": "obecna",
      "sectionLabel": "Obecná neurologie",
      "badgePrefix": "O05",
      "title": "Mozkový kmen a diencephalon, anatomie a syndromy",
      "shortDesc": "Mesencephalon, pons, medulla oblongata, retikulární formace, alternující kmenové syndromy (Weber, Millard-Gubler, Wallenberg), talamus (Dejerine-Roussy) a hypotalamické dysfunkce.",
      "category": "senzitivita_micha_kmen",
      "badge": "Kmen & Mezidomoví",
      "badgeColor": "cyan",
      "theory": {
        "banner": {
          "tag": "Kmenové syndromy • Diencephalon",
          "title": "Mozkový kmen a mezimozek",
          "text": "Mozkový kmen integruje jádra hlavových nervů (III–XII), ascendentní a descendentní dráhy a retikulární formaci zajišťující bdělost a vitální funkce. Poškození kmene vede k alternujícím syndromům (homolaterální obrna hlavového nervu + kontralaterální hemiparéza/hemihypestézie)."
        },
        "sections": [
          {
            "title": "1. Anatomické oddíly kmene a jádra hlavových nervů",
            "color": "cyan",
            "content": "\n                    <ul class=\"list-disc pl-5 space-y-1 mb-3 text-sm\">\n                        <li><strong>Mesencephalon (Střední mozek):</strong> Crura cerebri, tegmentum, tectum (čtverohrbolí). Jádra <strong>n. III (oculomotorius)</strong> a <strong>n. IV (trochlearis)</strong>. Nucleus ruber, substantia nigra, nucleus Edinger-Westphal (parasympatikus pro pupilokonstrikci).</li>\n                        <li><strong>Pons Varoli (Most):</strong> Jádra <strong>n. V (trigeminus)</strong>, <strong>n. VI (abducens)</strong>, <strong>n. VII (facialis)</strong> a <strong>n. VIII (vestibulocochlearis)</strong>. Ponto-cerebelární dráhy v brachia pontis.</li>\n                        <li><strong>Medulla oblongata (Prodloužená mícha):</strong> Jádra <strong>n. IX (glossopharyngeus)</strong>, <strong>n. X (vagus)</strong>, <strong>n. XI (accessorius)</strong> a <strong>n. XII (hypoglossus)</strong>. Vitální centra oběhu a dýchání, nucleus ambiguus, nucleus tractus solitarii, olivární komplex.</li>\n                        <li><strong>Formacio reticularis:</strong> ARAS (Ascendentní retikulární aktivační systém) zodpovědný za udržení bdělého stavu vědomí.</li>\n                    </ul>\n                "
          },
          {
            "title": "2. Přehled alternujících kmenových syndromů",
            "color": "sky",
            "content": "\n                    <div class=\"space-y-3\">\n                        <div class=\"p-3 rounded-lg bg-slate-900 border border-slate-700\">\n                            <span class=\"font-bold text-cyan-300\">Weberův syndrom (Mesencefalický ventrální):</span>\n                            <p class=\"text-xs text-slate-300 mt-1\"><strong>Homolaterálně:</strong> Obrna n. III (ptóza, mydriáza, divergentní strabismus).<br><strong>Kontralaterálně:</strong> Centrální hemiparéza (tr. corticospinalis v crus cerebri).</p>\n                        </div>\n                        <div class=\"p-3 rounded-lg bg-slate-900 border border-slate-700\">\n                            <span class=\"font-bold text-sky-300\">Millard-Gublerův syndrom (Pontinní ventrální):</span>\n                            <p class=\"text-xs text-slate-300 mt-1\"><strong>Homolaterálně:</strong> Periferní paréza n. VII + paréza n. VI (konvergentní strabismus).<br><strong>Kontralaterálně:</strong> Spastická hemiparéza končetin.</p>\n                        </div>\n                        <div class=\"p-3 rounded-lg bg-slate-900 border border-slate-700\">\n                            <span class=\"font-bold text-rose-400 font-bold\">Wallenbergův syndrom (Dorzolaterální medulární - okluze PICA / a. vertebralis):</span>\n                            <p class=\"text-xs text-slate-300 mt-1\"><strong>Homolaterálně:</strong> Hornerův syndrom (ptóza, mióza, enoftalmus - léze sympatiku), vestibulocerebelární ataxie + nystagmus, výpadek čití na obličeji (n. V), paréza měkkého patra a hlasivky (n. IX, X - dysfagie, dysfonie).<br><strong>Kontralaterálně:</strong> Výpadek čití pro bolest a teplotu na těle a končetinách (tr. spinothalamicus). <em>Pozn.: Síla končetin bývá zachována!</em></p>\n                        </div>\n                    </div>\n                "
          },
          {
            "title": "3. Diencephalon: Thalamický a hypotalamický syndrom",
            "color": "indigo",
            "content": "\n                    <div class=\"grid md:grid-cols-2 gap-3 my-3\">\n                        <div class=\"p-3 rounded-lg bg-slate-900 border border-slate-700\">\n                            <div class=\"font-bold text-purple-400 mb-1\">🧠 Thalamický syndrom (Dejerine-Roussy)</div>\n                            <p class=\"text-xs text-slate-300 mb-1\">Vzniká typicky po ischémii v povodí <em>a. thalamogeniculata</em>:</p>\n                            <ul class=\"list-disc pl-4 text-xs text-slate-300 space-y-1\">\n                                <li>Kontralaterální hemihypestézie všech modalit.</li>\n                                <li>Intenzivní pálivá kauzalgická bolest (talamická bolest) provokovaná i lehkým dotykem (alodynie).</li>\n                                <li>Přechodná lehká hemiparéza, senzorická hemiataxie, talamická ruka (athetotické postavení prstů).</li>\n                            </ul>\n                        </div>\n                        <div class=\"p-3 rounded-lg bg-slate-900 border border-slate-700\">\n                            <div class=\"font-bold text-amber-400 mb-1\">🌡️ Hypotalamický syndrom</div>\n                            <p class=\"text-xs text-slate-300 mb-1\">Porucha řízení endokrinních a autonomních funkcí:</p>\n                            <ul class=\"list-disc pl-4 text-xs text-slate-300 space-y-1\">\n                                <li>Diabetes insipidus (deficit ADH - polyurie, polydipsie).</li>\n                                <li>Poruchy termoregulace (hypertermie / hypotermie).</li>\n                                <li>Poruchy příjmu potravy (hyperfagie s obezitou nebo kachexie).</li>\n                                <li>Narušení cirkadiánního rytmu spánku a bdění.</li>\n                            </ul>\n                        </div>\n                    </div>\n                "
          }
        ]
      },
      "recall": {
        "scenarios": [
          {
            "id": "rec-q05-1",
            "title": "Kazuistika: Akutní vertigo, škytavka, dysfagie a Hornerův syndrom",
            "question": "58letý hypertonik byl přivezen pro náhle vzniklé těžké točení hlavy, zvracení, neztišitelnou škytavku, chrapot a potíže s polykáním. Při vyšetření má vpravo ptózu a miózu, ataxii pravostranných končetin a necitlivost pravé poloviny obličeje. Na levé polovině těla necítí chlad a teplo. Svalová síla končetin je symetrická. Který kmenový syndrom a okluze které cévy to způsobily?",
            "answer": "Jedná se o Wallenbergův syndrom (dorzolaterální medulární syndrom) způsobený okluzí arteria cerebelli inferior posterior (PICA) nebo arteria vertebralis vpravo. Zahrnuje poškození nucleus ambiguus (n. IX, X - dysfagie, chrapot), tractus spinalis n. V (obličejová hypestézie), descendentního sympatiku (Horner), pedunculus cerebellaris inferior (ataxie) a tractus spinothalamicus (kontralaterální termoanestézie těla).",
            "pearl": "Wallenbergův syndrom je jedním z mála kmenových syndromů, kde je motorická pyramidová dráha ušetřena, takže pacient NEMÁ končetinovou parézu, ale má těžkou ataxii a dysfagii."
          }
        ]
      },
      "cards": [
        {
          "id": "fc-q05-1",
          "front": "Co je to alternující kmenový syndrom a jaké je obecné pravidlo pro lokalizaci?",
          "back": "Kombinace <strong>homolaterální periferní obrny hlavového nervu</strong> (na straně léze v kmeni) a <strong>kontralaterální centrální hemiparézy / hemihypestézie</strong> končetin a trupu.",
          "hint": "Hlavový nerv vs. končetiny."
        },
        {
          "id": "fc-q05-2",
          "front": "Jaké jsou hlavní klinické projevy Wallenbergova dorzolaterálního medulárního syndromu?",
          "back": "1. <strong>Homolaterálně:</strong> Hornerův syndrom, ataxie HKK, dysfagie/dysfonie (n. IX/X), znecitlivění obličeje (n. V).<br>2. <strong>Kontralaterálně:</strong> Porucha vnímání bolesti a teploty na těle.<br>3. <strong>Další:</strong> Vertigo, zvracení, nystagmus, škytavka.",
          "hint": "PICA syndrom."
        },
        {
          "id": "fc-q05-3",
          "front": "Co charakterizuje talamický syndrom dle Dejerine-Roussy?",
          "back": "Kontralaterální <strong>hemihypestézie</strong> všech modalit spojená s krutou spontánní <strong>talamickou bolestí</strong>, alodynií, hyperpatií a přechodnou senzorickou ataxií.",
          "hint": "Thalamus a chronická bolest."
        }
      ],
      "quiz": [
        {
          "id": "q05-test1",
          "question": "Weberův syndrom je způsoben lézí v mesencephalonu a projevuje se:",
          "options": [
            "Homolaterální parézou n. oculomotorius (III) a kontralaterální spastickou hemiparézou",
            "Homolaterální parézou n. facialis a kontralaterální hemiparézou",
            "Bilaterální hluchotou a ataxií",
            "Bitemporální hemianopsií a obezitou"
          ],
          "correctIndex": 0,
          "explanation": "Weberův syndrom postihuje ventrální mesencephalon: vlákna n. III a crura cerebri (pyramidovou dráhu), což vede k homolaterální mydriáze s ptózou a kontralaterální hemiparéze."
        },
        {
          "id": "q05-test2",
          "question": "Která z následujících cév je nejčastěji okludována při vzniku Wallenbergova syndromu?",
          "options": [
            "Arteria cerebri anterior",
            "Arteria cerebelli inferior posterior (PICA) nebo arteria vertebralis",
            "Arteria communicans posterior",
            "Arteria basilaris v apexu"
          ],
          "correctIndex": 1,
          "explanation": "Wallenbergův dorzolaterální medulární syndrom vzniká uzávěrem PICA (arteria cerebelli inferior posterior) nebo její mateřské arteria vertebralis."
        }
      ]
    },
    {
      "id": "q06-hlavove-nervy-okohybnost",
      "number": 6,
      "section": "obecna",
      "sectionLabel": "Obecná neurologie",
      "badgePrefix": "O06",
      "title": "Přehled hlavových nervů, anatomie a funkce a postižení okohybné inervace",
      "shortDesc": "Okohybné nervy (n. III oculomotorius, n. IV trochlearis, n. VI abducens), supranukleární a internukleární oftalmoplegie (INO, fasciculus longitudinalis medialis), pupilární reflexy a diplopie.",
      "category": "hlavove_nervy",
      "badge": "Okohybnost",
      "badgeColor": "cyan",
      "theory": {
        "banner": {
          "tag": "Hlavové nervy • Okohybný aparát",
          "title": "Okohybné nervy a supranukleární řízení pohledu",
          "text": "Okohybnost je zajišťována třemi páry hlavových nervů (III, IV, VI) a jemně koordinována kmenovými centry a fasciculus longitudinalis medialis (FLM). Rozlišujeme periferní parézy jednotlivých nervů, internukleární oftalmoplegii (INO) a supranukleární parézy pohledu."
        },
        "sections": [
          {
            "title": "1. Jednotlivé okohybné nervy a klinický obraz jejich lézí",
            "color": "cyan",
            "content": "\n                    <div class=\"space-y-3\">\n                        <div class=\"p-3 rounded-lg bg-slate-900 border border-slate-700\">\n                            <span class=\"font-bold text-cyan-300\">N. oculomotorius (III. hlavový nerv):</span>\n                            <p class=\"text-xs text-slate-300 mt-1\"><strong>Inervace:</strong> <em>m. levator palpebrae superioris</em>, <em>m. rectus medialis, superior, inferior</em>, <em>m. obliquus inferior</em>. Parasympatická vlákna (Edinger-Westphal) inervují <em>m. sphincter pupillae</em> (zúžení zornice) a <em>m. ciliaris</em> (akomodace).</p>\n                            <p class=\"text-xs text-rose-300 mt-1\"><strong>Obraz kompletní obrny:</strong> Těžká ptóza víčka, bulbus stáčen zevně a lehce dolů (převaha n. VI a IV - divergentní strabismus), <strong>široká nereagující zornice (mydriáza)</strong>, ztráta akomodace a vertikální/horizontální diplopie.</p>\n                            <p class=\"text-xs text-amber-300\">⚠️ <em>Klinická perla:</em> Akutní n. III s mydriázou je suspektní z aneuryzmatu <em>a. communicans posterior</em> (AComP) nebo uncální herniace!</p>\n                        </div>\n                        <div class=\"p-3 rounded-lg bg-slate-900 border border-slate-700\">\n                            <span class=\"font-bold text-sky-300\">N. trochlearis (IV. hlavový nerv):</span>\n                            <p class=\"text-xs text-slate-300 mt-1\"><strong>Inervace:</strong> <em>m. obliquus superior</em> (stáčí bulbus dovnitř a dolů).</p>\n                            <p class=\"text-xs text-slate-300 mt-1\"><strong>Klinika:</strong> Vertikální/šikmá diplopie nejvýraznější při pohledu dolů a dovnitř (čtení, chůze ze schodů). Pacient kompenzačně <strong>uklání hlavu na zdravou stranu (Bielschowského fenomén)</strong>.</p>\n                        </div>\n                        <div class=\"p-3 rounded-lg bg-slate-900 border border-slate-700\">\n                            <span class=\"font-bold text-indigo-300\">N. abducens (VI. hlavový nerv):</span>\n                            <p class=\"text-xs text-slate-300 mt-1\"><strong>Inervace:</strong> <em>m. rectus lateralis</em> (abdukce bulbu zevně).</p>\n                            <p class=\"text-xs text-slate-300 mt-1\"><strong>Klinika:</strong> Vázne abdukce oka zevně, konvergentní strabismus, horizontální diplopie při pohledu na stranu léze. Nerv má nejdelší intrakraniální průběh -> velmi citlivý na nitrolební hypertenzi (falešný lokalizační příznak).</p>\n                        </div>\n                    </div>\n                "
          },
          {
            "title": "2. Internukleární oftalmoplegie (INO) a léze FLM",
            "color": "sky",
            "content": "\n                    <p class=\"mb-2 text-sm\"><strong>Fasciculus longitudinalis medialis (FLM):</strong> Spojuje jádro n. VI v pontu (abdukce) s kontralaterálním jádrem n. III v mesencephalonu (addukce druhého oka pro konjugovaný pohled).</p>\n                    <div class=\"alert-box alert-cyan my-2\">\n                        <strong>🔍 Klinický obraz INO (např. vlevo):</strong> Při pohledu vpravo levé oko <strong>neaddukuje</strong> (vázne addukce na straně léze FLM) a pravé oko abdukuje s hrubým <strong>disociovaným nystagmem</strong>. Konvergence na blízko bývá ZACHOVÁNA.\n                    </div>\n                    <p class=\"text-xs text-slate-300\"><strong>Nejčastější etiologie:</strong> U mladých pacientů <em>roztroušená skleróza (často bilaterální INO)</em>, u starších pacientů <em>kmenová ischémie</em>.</p>\n                "
          },
          {
            "title": "3. Pupilární reakce a zornicové syndromy",
            "color": "indigo",
            "content": "\n                    <ul class=\"list-disc pl-5 space-y-1 mb-3 text-sm\">\n                        <li><strong>Fotoreakce (Přímá a nepřímá):</strong> Aferentace n. II (opticus) -> pretectální jádra -> oboustranně Edinger-Westphal -> eferentace parasympatikem n. III -> m. sphincter pupillae.</li>\n                        <li><strong>Hornerův syndrom:</strong> Ptóza (m. tarsalis), mióza (denervace m. dilatator), enoftalmus + anhidróza poloviny obličeje (léze krčního sympatiku).</li>\n                        <li><strong>Argyll-Robertsonova zornice:</strong> Oboustranná úzká nepravidelná zornice, která <strong>nereaguje na osvit, ale reaguje na konvergenci/akomodaci</strong> (typické pro neurolues / tabes dorsalis).</li>\n                        <li><strong>Adieho tonická zornice:</strong> Benigní rozšířená zornice s pomalou, tonickou reakcí na světlo a akomodaci (často u mladých žen se sníženými šlachovými reflexy - Holmes-Adie syndrom).</li>\n                    </ul>\n                "
          }
        ]
      },
      "recall": {
        "scenarios": [
          {
            "id": "rec-q06-1",
            "title": "Kazuistika: Akutní bolest hlavy s ptózou a mydriázou",
            "question": "52letá žena byla přivezena na urgentní příjem pro prudkou bolest hlavy za pravým okem. Při pohledu má kompletní ptózu pravého víčka, pravé oko stočené zevně a pravou zornici širokou (mydriatickou), nereagující na světlo. Jaká je nejpravděpodobnější diagnóza a jaký urgentní výkon musíte ihned indikovat?",
            "answer": "Akutní paréza n. III s postižením parasympatiku (mydriázou) vyvolaná kompresí nervu expanzivním aneurysmatem arteria communicans posterior (AComP) v oblasti Willisova okruhu. Hrozí bezprostřední ruptura s fatálním subarachnoidálním krvácením (SAB). Indikujeme urgentní CT angiografii (CTA) mozku a konzultaci neurochirurgie/intervenční radiologie k ošetření aneuryzmatu (coiling/clipping).",
            "pearl": "Izolovaná 'diabetická' mikrovaskulární ischémie n. III obvykle ŠETŘÍ zornici (parasympatická vlákna běží po povrchu nervu a jsou ušetřena), zatímco komprese zvenčí (aneuryzma, tumor, uncus) začíná mydriázou."
          }
        ]
      },
      "cards": [
        {
          "id": "fc-q06-1",
          "front": "Jak se projeví kompletní léze n. oculomotorius (III. nerv)?",
          "back": "1. <strong>Těžká ptóza</strong> horního víčka.<br>2. <strong>Divergentní strabismus</strong> (bulbus stočen zevně a dolů).<br>3. <strong>Mydriáza</strong> (široká zornice bez reakce na osvit) a porucha akomodace.",
          "hint": "Ptóza, postavení bulbu a zornice."
        },
        {
          "id": "fc-q06-2",
          "front": "Popište klinický nález u internukleární oftalmoplegie (INO) vlevo.",
          "back": "Při pohledu doprava levé oko <strong>neaddukuje</strong> (vázne addukce vlevo), zatímco pravé oko abdukuje za přítomnosti <strong>monokulárního nystagmu</strong>. Konvergence na blízko je intaktní.",
          "hint": "Léze FLM, addukce vs. nystagmus."
        },
        {
          "id": "fc-q06-3",
          "front": "Co tvoří triádu Hornerova syndromu a jaký je jeho mechanismus?",
          "back": "Triáda: <strong>Ptóza</strong>, <strong>mióza</strong> a <strong>enoftalmus</strong> (+ event. ipsilaterální anhidróza). Mechanismus: Léze <strong>okosympatické dráhy</strong> (např. Pancoastův tumor plic, disekce a. carotis interna, Wallenbergův syndrom).",
          "hint": "Sympatikus a zornice."
        }
      ],
      "quiz": [
        {
          "id": "q06-test1",
          "question": "Pacient při chůzi ze schodů vidí vertikálně dvojitě a kompenzačně uklání hlavu na zdravou stranu (Bielschowského příznak). Který nerv je postižen?",
          "options": [
            "N. abducens (VI)",
            "N. trochlearis (IV)",
            "N. oculomotorius (III)",
            "N. opticus (II)"
          ],
          "correctIndex": 1,
          "explanation": "N. trochlearis (IV) inervuje m. obliquus superior, který sklápí bulbus dolů a dovnitř. Jeho obrna způsobuje diplopii při pohledu dolů (ze schodů) a kompenzační úklon hlavy k protilehlému rameni."
        },
        {
          "id": "q06-test2",
          "question": "Bilateralní internukleární oftalmoplegie (INO) u mladého dospělého je vysoce suspektní z:",
          "options": [
            "Roztroušené sklerózy (demylinizace FLM)",
            "Myasthenia gravis",
            "Nedostatku thiaminu (Wernickeova encefalopatie)",
            "Meningeomu sulcus olfactorius"
          ],
          "correctIndex": 0,
          "explanation": "U mladých dospělých je bilaterální INO klasickým a typickým příznakem roztroušené sklerózy (RS) v důsledku demyelinizační léze ve fasciculus longitudinalis medialis v mozkovém kmeni."
        }
      ]
    },
    {
      "id": "q07-hlavove-nervy-trigeminus",
      "number": 7,
      "section": "obecna",
      "sectionLabel": "Obecná neurologie",
      "badgePrefix": "O07",
      "title": "Přehled hlavových nervů, anatomie a funkce a postižení n. trigeminus",
      "shortDesc": "N. trigeminus (V), větve V1 (ophthalmicus), V2 (maxillaris), V3 (mandibularis), senzitivní inervace obličeje, motorika žvýkacích svalů, korneální reflex a neuralgie trigeminu.",
      "category": "hlavove_nervy",
      "badge": "N. Trigeminus",
      "badgeColor": "cyan",
      "theory": {
        "banner": {
          "tag": "Hlavové nervy • N. V",
          "title": "N. trigeminus a orofaciální inervace",
          "text": "Nervus trigeminus (V. hlavový nerv) je mohutný smíšený nerv zajišťující senzitivní inervaci celého obličeje, dutiny ústní, nosní, předních 2/3 jazyka a tvrdé pleny mozkové, a motorickou inervaci žvýkacích svalů."
        },
        "sections": [
          {
            "title": "1. Anatomické větve a senzitivní inervace",
            "color": "cyan",
            "content": "\n                    <ul class=\"list-disc pl-5 space-y-1 mb-3 text-sm\">\n                        <li><strong>Ganglion trigeminale (Gasseri):</strong> Leží v impressio trigemini na hrotu pyramidy (Meckelova dutina). Odtud vystupují 3 větve:\n                            <ul class=\"list-circle pl-5 mt-1\">\n                                <li><strong>V1 - N. ophthalmicus (fissura orbitalis superior):</strong> Čelo, horní víčko, hřbet nosu, rohovka a spojivka oka (aferentace korneálního reflexu), dura mater přední jámy.</li>\n                                <li><strong>V2 - N. maxillaris (foramen rotundum):</strong> Dolní víčko, tvář, horní ret, horní zuby, patro a nosní dutina.</li>\n                                <li><strong>V3 - N. mandibularis (foramen ovale):</strong> Dolní čelist, dolní ret, brada, dolní zuby, spánková krajina, přední 2/3 jazyka (obecná senzitivita - chuť vede chorda tympani n. VII!).</li>\n                            </ul>\n                        </li>\n                        <li><strong>Kmenová jádra:</strong> <em>Nucl. principalis</em> (taktilní čití), <em>nucl. spinalis</em> (bolest a teplota - sahá až do C2), <em>nucl. mesencephalicus</em> (propriocepce žvýkacích svalů).</li>\n                    </ul>\n                "
          },
          {
            "title": "2. Motorická inervace a reflexy",
            "color": "sky",
            "content": "\n                    <ul class=\"list-disc pl-5 space-y-1 mb-3 text-sm\">\n                        <li><strong>Motorická složka (radix motoria, pouze ve V3):</strong> Inervuje žvýkací svaly (<em>m. masseter</em>, <em>m. temporalis</em>, <em>m. pterygoideus medialis et lateralis</em>), dále <em>m. mylohyoideus</em>, <em>venter anterior m. digastrici</em>, <em>m. tensor tympani</em> a <em>m. tensor veli palatini</em>.</li>\n                        <li><strong>Při paréze žvýkacích svalů:</strong> Při otevření úst se dolní čelist <strong>uchyluje na stranu léze</strong> (převaha kontralaterálního m. pterygoideus lateralis).</li>\n                        <li><strong>Korneální reflex:</strong> Aferentace: <strong>V1 (n. nasociliaris)</strong> -> eferentace: <strong>n. VII (m. orbicularis oculi)</strong> -> bilaterální sevření víček při dotyku štětičkou na rohovku.</li>\n                        <li><strong>Maseterový reflex:</strong> Aferentace i eferentace: <strong>V3</strong> -> poklep na bradu vyvolá sevření čelistí. Hyperreflexie svědčí pro pseudobulbární syndrom (supranukleární lézi nad pontem).</li>\n                    </ul>\n                "
          },
          {
            "title": "3. Neuralgie n. trigeminus (Tic douloureux)",
            "color": "indigo",
            "content": "\n                    <div class=\"space-y-3\">\n                        <div class=\"p-3 rounded-lg bg-slate-900 border border-slate-700\">\n                            <span class=\"font-bold text-amber-400\">Klasická / primární neuralgie trigeminu:</span>\n                            <p class=\"text-xs text-slate-300 mt-1\"><strong>Etiologie:</strong> Neurovaskulární konflikt (komprese kořene n. V kličkou <em>a. cerebelli superior</em> v mostomozečkovém koutu vedoucí k fokální demyelinizaci).</p>\n                            <p class=\"text-xs text-slate-300 mt-1\"><strong>Klinika:</strong> Záchvatovitá, extrémně krutá, šlehající bolest charakteru elektrického výboje trvající sekundy až 2 minuty. Nejčastěji ve větvích <strong>V2 a V3</strong>. Provokována spoušťovými zónami (trigger points) při mluvení, žvýkání, čištění zubů, holení, závanu větru. <em>Senzitivní deficit v mezidobí chybí!</em></p>\n                            <p class=\"text-xs text-emerald-400 mt-1\"><strong>Léčba:</strong> 1. volba: <strong>Karbamazepin</strong> (nebo oxkarbazepin). Při selhání: mikrovaskulární dekomprese (operace dle Jannetty) nebo radiochirurgie Leksellovým gama nožem.</p>\n                        </div>\n                        <div class=\"p-3 rounded-lg bg-slate-900 border border-slate-700\">\n                            <span class=\"font-bold text-rose-400\">Sekundární neuralgie (symptomatická):</span>\n                            <p class=\"text-xs text-slate-300 mt-1\">Etiologie: Roztroušená skleróza, tumor mostomozečkového koutu (vestibulární schwannom, meningeom), herpes zoster ophthalmicus. Bolest bývá trvalejší a je přítomen <strong>objektivní senzitivní výpadek nebo vyhaslý korneální reflex</strong>.</p>\n                        </div>\n                    </div>\n                "
          }
        ]
      },
      "recall": {
        "scenarios": [
          {
            "id": "rec-q07-1",
            "title": "Kazuistika: Kruté záchvaty bolesti tváře při čištění zubů",
            "question": "68letá pacientka trpí 3 měsíce záchvaty nesnesitelné bodavé bolesti v pravé tváři a dolní čelisti, které trvají 10–30 sekund a spouští se při jídle a čištění zubů. Neurologický nález včetně citlivosti obličeje a korneálního reflexu je zcela v normě. O jaké onemocnění jde a jaký lék zvolíte jako první krok terapie?",
            "answer": "Jedná se o klasickou neuralgii n. trigeminus (V2/V3 vpravo), nejčastěji způsobenou neurovaskulárním konfliktem s a. cerebelli superior. Lékem první volby je antiepileptikum carbamazepin (Biston, Tegretol) v postupně titrované dávce, případně oxcarbazepin.",
            "pearl": "Pokud se neuralgie trigeminu objeví u mladého člověka (pod 40 let) nebo je oboustranná či provázená hypestézií, musíte provést MR mozku k vyloučení demyelinizační plaky roztroušené sklerózy v kmeni."
          }
        ]
      },
      "cards": [
        {
          "id": "fc-q07-1",
          "front": "Jaký je reflexní oblouk korneálního reflexu?",
          "back": "<strong>Aferentace:</strong> N. ophthalmicus (V1) n. trigeminus.<br><strong>Centrum:</strong> Pons Varoli.<br><strong>Eferentace:</strong> N. facialis (VII) -> m. orbicularis oculi (oboustranné sevření víček).",
          "hint": "Trigeminus -> Facialis."
        },
        {
          "id": "fc-q07-2",
          "front": "Na kterou stranu se uchyluje dolní čelist při paréze motorické složky n. trigeminus a proč?",
          "back": "Čelist se při otevření úst uchyluje <strong>na stranu léze</strong> v důsledku převahy zdravého kontralaterálního <em>m. pterygoideus lateralis</em>, který vysunuje čelist dopředu a mediálně.",
          "hint": "Ipsilaterálně k lézi."
        },
        {
          "id": "fc-q07-3",
          "front": "Jaký je lék první volby u klasické neuralgie n. trigeminus?",
          "back": "<strong>Karbamazepin</strong> (nebo oxkarbazepin). Blokuje napěťově řízené sodíkové kanály a tlumí ektopické výboje v demyelinizovaném kořeni nervu.",
          "hint": "Antiepileptikum na sodíkové kanály."
        }
      ],
      "quiz": [
        {
          "id": "q07-test1",
          "question": "Která větev n. trigeminus prochází přes foramen ovale a obsahuje i motorická vlákna?",
          "options": [
            "N. ophthalmicus (V1)",
            "N. maxillaris (V2)",
            "N. mandibularis (V3)",
            "N. intermedius"
          ],
          "correctIndex": 2,
          "explanation": "N. mandibularis (V3) prochází přes foramen ovale baze lební a jako jediná ze tří větví n. V obsahuje motorickou složku pro žvýkací svaly."
        },
        {
          "id": "q07-test2",
          "question": "Pro klasickou (primární) neuralgii n. trigeminus je typické:",
          "options": [
            "Trvalá tupá bolest s těžkou poruchou citlivosti na obličeji",
            "Paroxysmální šlehající bolest trvající sekundy, spouštěná lehkým dotykem, bez objektivního senzitivního deficitu",
            "Obrna mimických svalů na stejné straně obličeje",
            "Vyhasnutí patelárního reflexu"
          ],
          "correctIndex": 1,
          "explanation": "Klasická neuralgie trigeminu je charakterizována krátkými, bleskovými záchvaty kruté bolesti s trigger zónami, přičemž objektivní neurologický senzitivní nález je v normě."
        }
      ]
    },
    {
      "id": "q08-hlavove-nervy-facialis",
      "number": 8,
      "section": "obecna",
      "sectionLabel": "Obecná neurologie",
      "badgePrefix": "O08",
      "title": "Přehled hlavových nervů, anatomie a funkce a postižení n. facialis",
      "shortDesc": "N. facialis (VII), inervace mimických svalů, n. intermedius (chuť, lakrimace, salivace), rozdíl mezi centrální a periferní (Bellovou) parézou, Ramsay-Huntův syndrom a lícní synkinézy.",
      "category": "hlavove_nervy",
      "badge": "N. Facialis",
      "badgeColor": "cyan",
      "theory": {
        "banner": {
          "tag": "Hlavové nervy • N. VII",
          "title": "N. facialis a mimická inervace",
          "text": "Nervus facialis (VII. hlavový nerv) je smíšený nerv. Hlavní motorická část inervuje veškeré mimické svaly obličeje. Senzitivní, chuťová a parasympatická vlákna běží v n. intermedius (chuť z předních 2/3 jazyka, slzení, slinění)."
        },
        "sections": [
          {
            "title": "1. Rozdíl mezi centrální a periferní parézou n. facialis",
            "color": "cyan",
            "content": "\n                    <div class=\"overflow-x-auto my-3\">\n                        <table class=\"min-w-full text-xs text-left text-slate-200 border border-slate-700\">\n                            <thead class=\"bg-slate-800 text-cyan-300 uppercase font-mono\">\n                                <tr>\n                                    <th class=\"p-2 border border-slate-700\">Znak</th>\n                                    <th class=\"p-2 border border-slate-700\">Centrální paréza n. VII (Supranukleární)</th>\n                                    <th class=\"p-2 border border-slate-700\">Periferní paréza n. VII (Infranukleární - Bellova)</th>\n                                </tr>\n                            </thead>\n                            <tbody>\n                                <tr class=\"border-b border-slate-800 bg-slate-900/50\">\n                                    <td class=\"p-2 font-bold\">Lokalizace léze</td>\n                                    <td class=\"p-2\">Kortex (gyrus praecentralis), capsula interna, kmen nad jádrem</td>\n                                    <td class=\"p-2\">Jádro n. VII v pontu nebo kmen periferního nervu</td>\n                                </tr>\n                                <tr class=\"border-b border-slate-800\">\n                                    <td class=\"p-2 font-bold\">Postižení čela</td>\n                                    <td class=\"p-2 text-emerald-400 font-bold\">ČELO JE UŠETŘENO (pacient vrásčí čelo symetricky!)</td>\n                                    <td class=\"p-2 text-rose-400 font-bold\">POSTIŽENO CELÉ POLOVINA OBLIČEJE VČETNĚ ČELA</td>\n                                </tr>\n                                <tr class=\"border-b border-slate-800 bg-slate-900/50\">\n                                    <td class=\"p-2 font-bold\">Důvod rozdílu</td>\n                                    <td class=\"p-2\">Horní větev pro čelo má <strong>bilaterální korovou inervaci</strong> z obou hemisfér</td>\n                                    <td class=\"p-2\">Přerušena jsou všechna vlákna pro celou polovinu obličeje</td>\n                                </tr>\n                                <tr class=\"border-b border-slate-800\">\n                                    <td class=\"p-2 font-bold\">Oční štěrbina</td>\n                                    <td class=\"p-2\">Oko dovře (lagoftalmus chybí)</td>\n                                    <td class=\"p-2 text-rose-300 font-bold\">Lagoftalmus (nedovření oka), Bellův příznak (stáčení bulbu vzhůru)</td>\n                                </tr>\n                                <tr class=\"bg-slate-900/50\">\n                                    <td class=\"p-2 font-bold\">Ústní koutek</td>\n                                    <td class=\"p-2 text-rose-300\">Pokleslý kontralaterální ústní koutek</td>\n                                    <td class=\"p-2 text-rose-300\">Pokleslý homolaterální koutek, vyhlazená nazolabiální rýha</td>\n                                </tr>\n                            </tbody>\n                        </table>\n                    </div>\n                "
          },
          {
            "title": "2. Topografická diagnostika léze n. facialis podél průběhu",
            "color": "sky",
            "content": "\n                    <div class=\"space-y-2 text-xs text-slate-300\">\n                        <div class=\"p-2 rounded bg-slate-900 border border-slate-700\">\n                            <strong class=\"text-cyan-300\">1. Vnitřní zvukovod / mostomozečkový kout (porus acusticus internus):</strong> Kompletní periferní paréza + porucha slzení (suché oko - <em>n. petrosus major</em>) + hyperakuze (<em>n. stapedius</em>) + porucha chuti (<em>chorda tympani</em>) + často léze n. VIII (tinnitus, nedoslýchavost).\n                        </div>\n                        <div class=\"p-2 rounded bg-slate-900 border border-slate-700\">\n                            <strong class=\"text-cyan-300\">2. Ganglion geniculi (Falopianský kanál nad odstupem n. petrosus major):</strong> Periferní paréza + porucha slzení + hyperakuze + porucha chuti na předních 2/3 jazyka.\n                        </div>\n                        <div class=\"p-2 rounded bg-slate-900 border border-slate-700\">\n                            <strong class=\"text-cyan-300\">3. V kanálu pod odstupem n. stapedius:</strong> Periferní paréza + porucha chuti a slinění (slzení a sluch jsou normální).\n                        </div>\n                        <div class=\"p-2 rounded bg-slate-900 border border-slate-700\">\n                            <strong class=\"text-cyan-300\">4. Foramen stylomastoideum (distální výstup):</strong> <em>Čistě motorická periferní paréza</em> mimického svalstva (chuť, slzení i sluch intaktní).\n                        </div>\n                    </div>\n                "
          },
          {
            "title": "3. Bellova paréza a Ramsay-Huntův syndrom",
            "color": "indigo",
            "content": "\n                    <ul class=\"list-disc pl-5 space-y-1 mb-3 text-sm\">\n                        <li><strong>Bellova idiopatická paréza:</strong> Nejčastější příčina (edém nervu ve Foramen stylomastoideum / Falopiově kanálu, často po prochlazení či reaktivaci HSV-1). Náhlý vznik, lagoftalmus, pokles koutku. <strong>Terapie:</strong> Časné podání <em>kortikoidů p.o.</em> (prednison 60 mg/den po dobu 7–10 dní), oční kapky/mast a krytí oka na noc (prevence expoziční keratitidy!).</li>\n                        <li><strong>Ramsay-Huntův syndrom (Herpes zoster oticus):</strong> Reaktivace VZV v ganglion geniculi. Periferní paréza n. VII + herpetické vezikuly v zevním zvukovodu a na boltci + krutá bolest ucha + často léze n. VIII (závrať, těžká nedoslýchavost). Terapie: Vankomycin/aciklovir i.v. + kortikoidy.</li>\n                    </ul>\n                "
          }
        ]
      },
      "recall": {
        "scenarios": [
          {
            "id": "rec-q08-1",
            "title": "Kazuistika: Ranní pokles koutku a nedovření oka",
            "question": "40letý muž se probudil s pokleslým pravým koutkem úst, vytékáním tekutiny z úst při pití a nemožností dovřít pravé oko. Při vyšetření nemůže svrštit čelo vpravo, pravá nazolabiální rýha je vyhlazená a při pokusu o zavření oka se pravý bulbus stáčí vzhůru (Bellův fenomén). Jak odlišíte, zda jde o CMP nebo Bellovu parézu, a jaký lék ihned nasadíte?",
            "answer": "Protože je postižena CELÁ polovina obličeje VČETNĚ ČELA (neschopnost vrásčit čelo) a je přítomen lagoftalmus s Bellovým fenoménem, jedná se o periferní parézu n. facialis (Bellovu parézu), nikoliv CMP (která by byla centrální a čelo by bylo ušetřeno). Okamžitě nasadíme systémové kortikoidy (prednison 1 mg/kg/den) a zajistíme ochranu rohovky (umělé slzy přes den, mast a kompresivní krytí na noc).",
            "pearl": "Při neúplné regeneraci n. VII mohou vzniknout aberantní reinervace – např. syndrom 'krokodýlích slz' (gustolakrimální reflex – pacient při jídle slzí místo slinění)."
          }
        ]
      },
      "cards": [
        {
          "id": "fc-q08-1",
          "front": "Proč je u centrální parézy n. facialis zachována hybnost čela?",
          "back": "Protože jádro n. VII pro horní větev (m. frontalis) dostává <strong>bilaterální kortikonukleární inervaci z obou mozkových hemisfér</strong>. Dolní polovina obličeje má inervaci pouze zkříženou.",
          "hint": "Bilaterální korová inervace."
        },
        {
          "id": "fc-q08-2",
          "front": "Co je to Bellův fenomén?",
          "back": "Při pokusu o zavření oka u periferní parézy n. VII se <strong>bulbus fyziologicky stáčí vzhůru a mírně zevně</strong>. Při nedovření víčka (lagoftalmu) je tento pohyb viditelný přes štěrbinu (bělmo).",
          "hint": "Stáčení bulbu vzhůru při lagoftalmu."
        },
        {
          "id": "fc-q08-3",
          "front": "Co charakterizuje Ramsay-Huntův syndrom?",
          "back": "1. <strong>Periferní paréza n. facialis</strong>.<br>2. <strong>Herpetické vezikuly v zevním zvukovodu</strong> a na boltci (Herpes zoster oticus).<br>3. Bolest ucha + často léze n. VIII (závrať, tinitus, nedoslýchavost).",
          "hint": "VZV v ganglion geniculi."
        }
      ],
      "quiz": [
        {
          "id": "q08-test1",
          "question": "U pacienta s cévní mozkovou příhodou v pravé hemisféře očekáváme na obličeji:",
          "options": [
            "Kompletní periferní parézu všech větví n. VII vpravo",
            "Centrální parézu n. VII vlevo s poklesem levého ústního koutku a se ZACHOVANÝM vrásčením čela",
            "Vyhaslý korneální reflex oboustranně",
            "Výrazný lagoftalmus s Bellovým příznakem vpravo"
          ],
          "correctIndex": 1,
          "explanation": "Při hemisférické CMP vzniká kontralaterální centrální paréza n. VII. Horní větev (čelo) má bilaterální inervaci a zůstává intaktní; pokleslý je pouze kontralaterální ústní koutek."
        },
        {
          "id": "q08-test2",
          "question": "Základním kauzálním/patogenetickým lékem první volby u akutní Bellovy idiopatické parézy n. facialis je:",
          "options": [
            "Systémová kortikoterapie (prednison p.o.) zahájená do 72 hodin",
            "Antibiotická léčba penicilinem",
            "Intravenózní heparinizace",
            "Vysokodávkovaný warfarin"
          ],
          "correctIndex": 0,
          "explanation": "Časné zahájení léčby perorálními kortikoidy (prednison) do 72 hodin výrazně redukuje zánětlivý edém nervu ve Falopiově kanálu a maximalizuje pravděpodobnost plné úpravy funkce."
        }
      ]
    },
    {
      "id": "q09-syndromy-mozkovych-laloku",
      "number": 9,
      "section": "obecna",
      "sectionLabel": "Obecná neurologie",
      "badgePrefix": "O09",
      "title": "Syndromy mozkových laloků",
      "shortDesc": "Frontální syndrom (prefrontální, motorický, Foster-Kennedy), temporální syndrom (Klüver-Bucy, paměť, sluch), parietální syndrom (Gerstmann, neglect syndrom) a okcipitální syndrom (korová slepota, Antonův syndrom).",
      "category": "hemisfery_vedomi_likvor",
      "badge": "Mozkové laloky",
      "badgeColor": "cyan",
      "theory": {
        "banner": {
          "tag": "Hemisférické syndromy • Kortikální topografie",
          "title": "Klinické syndromy mozkových laloků",
          "text": "Mozková kůra je funkčně rozdělena do čtyř laloků a asociačních arejí. Rozlišujeme symptomy z dominantní hemisféry (řeč, praxie, kalkulie) a nedominantní hemisféry (prostorová orientace, neglect, prozódie)."
        },
        "sections": [
          {
            "title": "1. Frontální syndrom",
            "color": "cyan",
            "content": "\n                    <ul class=\"list-disc pl-5 space-y-1 mb-3 text-sm\">\n                        <li><strong>Prefrontální syndrom:</strong> Změny osobnosti, abulie, apatie, ztráta iniciativy (pseudodepresivní forma) NEBO desinhibice, moria (nevhodné vtipkování), impulzivita, ztráta sociálních zábran (pseudopsychopatická forma). Porucha exekutivních funkcí a plánování.</li>\n                        <li><strong>Axiální / primitivní reflexy (frontální uvolňovací jevy):</strong> Úchopový reflex (Grasp reflex), sací reflex, palmomentální reflex, labiální reflex.</li>\n                        <li><strong>Motorické poruchy:</strong> Frontální apraxie chůze (astasie-abasie), paratonia (Gegenhalten - odpor proti pasivnímu pohybu), Brocova motorická afázie (dominantní hemisféra).</li>\n                        <li><strong>Foster-Kennedyho syndrom:</strong> Tumor spodiny frontálního laloku (meningeom sulcus olfactorius) -> homolaterální atrofie n. opticus a anosmie + kontralaterální městnavá papila (z nitrolební hypertenze).</li>\n                    </ul>\n                "
          },
          {
            "title": "2. Parietální syndrom",
            "color": "sky",
            "content": "\n                    <ul class=\"list-disc pl-5 space-y-1 mb-3 text-sm\">\n                        <li><strong>Dominantní hemisféra (Gyrus angularis et supramarginalis):</strong>\n                            <div class=\"alert-box alert-cyan mt-1 mb-2\">\n                                <strong>🧩 Gerstmannův syndrom:</strong> 1. Akalkulie (porucha počítání), 2. Agrafie (porucha psaní bez afázie), 3. Prstová agnozie (neschopnost pojmenovat prsty), 4. Pravolevá dezorientace.\n                            </div>\n                            Dále <em>ideomotorická a ideoatorní apraxie</em>.\n                        </li>\n                        <li><strong>Nedominantní hemisféra (Pravostranný parietální kortex):</strong>\n                            <ul class=\"list-circle pl-5 mt-1\">\n                                <li><strong>Neglect syndrom (syndrom opomíjení):</strong> Pacient ignoruje levou polovinu prostoru i vlastního těla (jí jen z pravé půlky talíře, holí jen pravou tvář).</li>\n                                <li><strong>Anosognózie:</strong> Popírání vlastní nemoci či těžké hemiplegie.</li>\n                                <li><strong>Asomatognózie:</strong> Nepoznávání vlastních levostranných končetin.</li>\n                            </ul>\n                        </li>\n                        <li><strong>Obecně:</strong> Astereognozie, agrafestézie, kontralaterální dolní homonymní kvadrantanopsie.</li>\n                    </ul>\n                "
          },
          {
            "title": "3. Temporální a okcipitální syndrom",
            "color": "indigo",
            "content": "\n                    <div class=\"grid md:grid-cols-2 gap-3 my-3\">\n                        <div class=\"p-3 rounded-lg bg-slate-900 border border-slate-700\">\n                            <div class=\"font-bold text-cyan-400 mb-1\">👂 Temporální syndrom</div>\n                            <p class=\"text-xs text-slate-300 mb-1\"><strong>Dominantní:</strong> Wernickeova senzorická afázie (Brodmann 22).</p>\n                            <p class=\"text-xs text-slate-300 mb-1\"><strong>Hipokampus & mediální temporální lalok:</strong> Výpadky epizodické paměti, neschopnost ukládat nové informace (anterográdní amnézie).</p>\n                            <p class=\"text-xs text-slate-300 mb-1\"><strong>Temporální epilepsie:</strong> Čichové a chuťové aury (uncinátní krize), déja-vu, jamais-vu, automatismy (mlaskání, žvýkání).</p>\n                            <p class=\"text-xs text-amber-300\"><strong>Klüver-Bucyho syndrom (oboustranná léze):</strong> Hyperorality, hypersexualita, vizuální agnozie a ztráta strachu.</p>\n                        </div>\n                        <div class=\"p-3 rounded-lg bg-slate-900 border border-slate-700\">\n                            <div class=\"font-bold text-purple-400 mb-1\">👁️ Okcipitální syndrom</div>\n                            <p class=\"text-xs text-slate-300 mb-1\"><strong>Jednostranná léze (sulcus calcarinus):</strong> Kontralaterální homonymní hemianopsie se zachováním centrálního vidění (makulární šetření).</p>\n                            <p class=\"text-xs text-slate-300 mb-1\"><strong>Oboustranná léze:</strong> <em>Korová slepota</em> (ztráta zraku při intaktních pupilárních reflexech!).</p>\n                            <p class=\"text-xs text-rose-300\"><strong>Antonův syndrom:</strong> Vizuální anosognózie – slepý pacient popírá, že nevidí, a konfabuluje zrakové vjemy.</p>\n                        </div>\n                    </div>\n                "
          }
        ]
      },
      "recall": {
        "scenarios": [
          {
            "id": "rec-q09-1",
            "title": "Kazuistika: Pacient ignorující levou stranu prostoru a těla",
            "question": "70letý pacient po rozsáhlém infarktu pravého parietálního laloku odmítá, že by měl ochrnutou levou ruku ('ta ruka není moje, někdo mi ji položil do postele'), oholil si jen pravou tvář a na talíři snědl jen jídlo vpravo. O jaký soubor příznaků se jedná a jaká je anatomická lokalizace?",
            "answer": "Jedná se o hemispatioální Neglect syndrom (syndrom opomíjení) spojený s anosognózií (nepoznávání nemoci/parézy) a asomatognózií (popírání vlastního těla). Příčinou je léze asociačního kortexu nedominantního (obvykle pravého) parietálního laloku.",
            "pearl": "Gerstmannův syndrom (akalkulie, agrafie, prstová agnozie, pravolevá dezorientace) vzniká lézí DOMINANTNÍHO gyrus angularis, zatímco Neglect vzniká lézí NEDOMINANTNÍHO parietálního laloku."
          }
        ]
      },
      "cards": [
        {
          "id": "fc-q09-1",
          "front": "Vyjmenujte 4 složky Gerstmannova syndromu a jeho lokalizaci.",
          "back": "1. <strong>Akalkulie</strong> (porucha počítání)<br>2. <strong>Agrafie</strong> (porucha psaní)<br>3. <strong>Prstová agnozie</strong> (nerozpoznání prstů)<br>4. <strong>Pravolevá dezorientace</strong>.<br>Lokalizace: <em>Gyrus angularis dominantní parietální hemisféry</em>.",
          "hint": "Počítání, psaní, prsty, strany."
        },
        {
          "id": "fc-q09-2",
          "front": "Co charakterizuje korovou slepotu a Antonův syndrom?",
          "back": "<strong>Korová slepota:</strong> Oboustranná léze primárního zrakového kortexu v okcipitálních lalocích (ztráta zraku, ale fotoreakce zornic je zachována).<br><strong>Antonův syndrom:</strong> Anosognózie korové slepoty – pacient popírá slepotu a konfabuluje.",
          "hint": "Okcipitální kortex a anosognózie."
        },
        {
          "id": "fc-q09-3",
          "front": "Co je to Foster-Kennedyho syndrom?",
          "back": "Kombinace: 1. <strong>Homolaterální atrofie n. opticus a anosmie</strong> (přímý tlak tumoru na spodinu frontálního laloku) + 2. <strong>Kontralaterální městnavá papila</strong> (z celkové nitrolební hypertenze).",
          "hint": "Tumor baze frontálního laloku."
        }
      ],
      "quiz": [
        {
          "id": "q09-test1",
          "question": "Který z následujících příznaků je typický pro poškození prefrontálního kortexu frontálního laloku?",
          "options": [
            "Bitemporální hemianopsie",
            "Moria (nemístné žertování), desinhibice a přítomnost axiálních úchopových reflexů",
            "Gerstmannův syndrom",
            "Wernickeova afázie"
          ],
          "correctIndex": 1,
          "explanation": "Poškození prefrontální kůry vede k prefrontálnímu syndromu s morií, desinhibicí chování, poruchou úsudku a návratem primitivních reflexů (úchopový, sací)."
        },
        {
          "id": "q09-test2",
          "question": "Uncinátní krize s čichovými či chuťovými halucinacemi a snovými stavy (déja-vu) jsou typické pro lézi:",
          "options": [
            "Mediálního temporálního laloku (uncus gyri parahippocampalis)",
            "Okcipitálního laloku",
            "Předního rohu míšního",
            "Mozečkového vermis"
          ],
          "correctIndex": 0,
          "explanation": "Uncinátní krize jsou fokální epileptické záchvaty vycházející z uncus gyri parahippocampalis v mediálním temporálním laloku, kde je korová reprezentace čichu."
        }
      ]
    },
    {
      "id": "q10-poruchy-reci-afazie",
      "number": 10,
      "section": "obecna",
      "sectionLabel": "Obecná neurologie",
      "badgePrefix": "O10",
      "title": "Poruchy řeči, afázie",
      "shortDesc": "Kortikální řečová centra (Broca, Wernicke, fasciculus arcuatus), Brocova motorická expresivní afázie, Wernickeova senzorická perceptivní afázie, globální a kondukční afázie, dysartrie vs. dysfonie.",
      "category": "hemisfery_vedomi_likvor",
      "badge": "Afázie & Řeč",
      "badgeColor": "cyan",
      "theory": {
        "banner": {
          "tag": "Vyšší korové funkce • Řeč",
          "title": "Afázie a poruchy řečové komunikace",
          "text": "Afázie je získaná porucha produkce a/nebo porozumění řeči způsobená ložiskovým poškozením dominantní (obvykle levé) mozkové hemisféry. Je nutné ji striktně odlišit od dysartrie (porucha artikulace) a dysfonie (porucha tvorby hlasu v hrtanu)."
        },
        "sections": [
          {
            "title": "1. Klasifikace a anatomie korových afázií",
            "color": "cyan",
            "content": "\n                    <div class=\"overflow-x-auto my-3\">\n                        <table class=\"min-w-full text-xs text-left text-slate-200 border border-slate-700\">\n                            <thead class=\"bg-slate-800 text-cyan-300 uppercase font-mono\">\n                                <tr>\n                                    <th class=\"p-2 border border-slate-700\">Typ afázie</th>\n                                    <th class=\"p-2 border border-slate-700\">Anatomická lokalizace</th>\n                                    <th class=\"p-2 border border-slate-700\">Fluence (plynulost)</th>\n                                    <th class=\"p-2 border border-slate-700\">Porozumění</th>\n                                    <th class=\"p-2 border border-slate-700\">Opakování</th>\n                                </tr>\n                            </thead>\n                            <tbody>\n                                <tr class=\"border-b border-slate-800 bg-slate-900/50\">\n                                    <td class=\"p-2 font-bold text-cyan-300\">Brocova (motorická / expresivní)</td>\n                                    <td class=\"p-2\">Gyrus frontalis inferior (Brodmann 44, 45)</td>\n                                    <td class=\"p-2 text-rose-400 font-bold\">Nefluentní (telegrafický styl, namáhavá řeč)</td>\n                                    <td class=\"p-2 text-emerald-400 font-bold\">Zachováno (relativně dobré)</td>\n                                    <td class=\"p-2 text-rose-300\">Porušeno</td>\n                                </tr>\n                                <tr class=\"border-b border-slate-800\">\n                                    <td class=\"p-2 font-bold text-sky-300\">Wernickeova (senzorická / perceptivní)</td>\n                                    <td class=\"p-2\">Gyrus temporalis superior (Brodmann 22)</td>\n                                    <td class=\"p-2 text-emerald-400 font-bold\">Fluentní (logorea, slovní salát, parafázie)</td>\n                                    <td class=\"p-2 text-rose-400 font-bold\">Těžce porušeno (nerozumí ani sobě)</td>\n                                    <td class=\"p-2 text-rose-300\">Těžce porušeno</td>\n                                </tr>\n                                <tr class=\"border-b border-slate-800 bg-slate-900/50\">\n                                    <td class=\"p-2 font-bold text-rose-400\">Globální afázie</td>\n                                    <td class=\"p-2\">Rozsáhlá perisylvijská oblast (Broca + Wernicke + fasc. arcuatus)</td>\n                                    <td class=\"p-2 text-rose-400\">Nefluentní (téměř mutismus či stereotypie)</td>\n                                    <td class=\"p-2 text-rose-400\">Těžce porušeno</td>\n                                    <td class=\"p-2 text-rose-400\">Těžce porušeno</td>\n                                </tr>\n                                <tr class=\"bg-slate-900/50\">\n                                    <td class=\"p-2 font-bold text-purple-300\">Kondukční afázie</td>\n                                    <td class=\"p-2\">Fasciculus arcuatus (spojení Wernicke -> Broca)</td>\n                                    <td class=\"p-2 text-emerald-400\">Fluentní</td>\n                                    <td class=\"p-2 text-emerald-400\">Zachováno</td>\n                                    <td class=\"p-2 text-rose-400 font-bold\">Izolovaně těžce porušeno opakování!</td>\n                                </tr>\n                            </tbody>\n                        </table>\n                    </div>\n                "
          },
          {
            "title": "2. Znaky afatické řeči (Parafázie, Neologismy, Anomie)",
            "color": "sky",
            "content": "\n                    <ul class=\"list-disc pl-5 space-y-1 mb-3 text-sm\">\n                        <li><strong>Fonematická (literální) parafázie:</strong> Záměna či přesmyknutí hlásek ve slově (např. „stůl“ -> „spůl“, „tužka“ -> „kužka“).</li>\n                        <li><strong>Sémantická (verbální) parafázie:</strong> Záměna celého slova za slovo z příbuzného významového okruhu (např. řekne „vidlička“ místo „lžíce“, „pes“ místo „kočka“).</li>\n                        <li><strong>Neologismy:</strong> Vymýšlení zcela neexistujících, zkomolených slov (typické pro Wernickeovu afázii -> tzv. žargonová afázie / slovní salát).</li>\n                        <li><strong>Anomie (Amnestická afázie):</strong> Neschopnost vybavit si správný název předmětu při zachovaném vědomí jeho funkce (pacient předmět opisuje: „to, čím se píše“).</li>\n                    </ul>\n                "
          },
          {
            "title": "3. Diferenciální diagnóza: Afázie vs. Dysartrie vs. Dysfonie",
            "color": "indigo",
            "content": "\n                    <div class=\"grid md:grid-cols-3 gap-3 my-3\">\n                        <div class=\"p-3 rounded-lg bg-slate-900 border border-slate-700\">\n                            <div class=\"font-bold text-cyan-400 mb-1\">🧠 Afázie</div>\n                            <p class=\"text-xs text-slate-300\">Porucha <strong>symbolické funkce řeči</strong> (jazykového kódu) v mozkové kůře. Postižena je řeč, čtení (alexie) i psaní (agrafie).</p>\n                        </div>\n                        <div class=\"p-3 rounded-lg bg-slate-900 border border-slate-700\">\n                            <div class=\"font-bold text-sky-400 mb-1\">👅 Dysartrie</div>\n                            <p class=\"text-xs text-slate-300\">Čistá porucha <strong>motorické artikulace</strong> svalů řeči (jazyk, patro, rty). Jazyková stavba, gramatika, porozumění, čtení i psaní jsou <strong>zcela intaktní</strong>. (Příčiny: kmen, mozeček, Parkinson, ALS).</p>\n                        </div>\n                        <div class=\"p-3 rounded-lg bg-slate-900 border border-slate-700\">\n                            <div class=\"font-bold text-purple-400 mb-1\">🗣️ Dysfonie</div>\n                            <p class=\"text-xs text-slate-300\">Porucha <strong>fonace (tvorby hlasu)</strong> v hrtanu (chrapot, šepot) při paréze n. laryngeus recurrens (n. X) nebo zánětu hlasivek.</p>\n                        </div>\n                    </div>\n                "
          }
        ]
      },
      "recall": {
        "scenarios": [
          {
            "id": "rec-q10-1",
            "title": "Kazuistika: Pacient plynule mluví, ale jeho řeč nedává smysl",
            "question": "74letá pacientka po CMP v povodí levé a. cerebri media mluví velmi rychle, plynule a s intonací, ale její projev je plný zkomolených slov a nedává žádný smysl ('slovní salát'). Na výzvu 'otevřete ústa' nereaguje a na otázky odpovídá nesouvisle. O jaký typ afázie se jedná a kde je léze?",
            "answer": "Jedná se o Wernickeovu (senzorickou / perceptivní) afázii. Řeč je plynulá (fluentní) s logoreou a parafáziemi (žargonová afázie), ale porozumění řeči je těžce narušeno. Pacientka si svou poruchu neuvědomuje (anosognózie afázie). Léze je lokalizována v zadní části gyrus temporalis superior dominantní (levé) hemisféry (Wernickeova korová oblast, Brodmann 22).",
            "pearl": "U Brocovy expresivní afázie je pacient nefluentní, mluví s obrovským úsilím v telegrafickém stylu, ale VELMI DOBŘE ROZUMÍ a svou vadu si frustrovaně uvědomuje."
          }
        ]
      },
      "cards": [
        {
          "id": "fc-q10-1",
          "front": "Jaký je hlavní rozdíl mezi Brocovou a Wernickeovou afázií?",
          "back": "<strong>Brocova afázie:</strong> Nefluentní, namáhavá produkce řeči, ale <em>dobré porozumění</em> (pacient si deficit uvědomuje).<br><strong>Wernickeova afázie:</strong> Fluentní řeč (logorea, parafázie), ale <em>těžká porucha porozumění</em> (pacient si deficit neuvědomuje).",
          "hint": "Plynulost vs. porozumění."
        },
        {
          "id": "fc-q10-2",
          "front": "Kde je anatomická léze u kondukční afázie a jaký je její klíčový příznak?",
          "back": "Léze je ve <strong>fasciculus arcuatus</strong> (asociační dráha spojující Wernickeovo a Brocovo centrum). Klíčový příznak: <strong>Izolovaně těžce porušené opakování slov a vět</strong> při zachované fluenci i porozumění.",
          "hint": "Fasciculus arcuatus a opakování."
        },
        {
          "id": "fc-q10-3",
          "front": "Jaký je zásadní rozdíl mezi afázií a dysartrií?",
          "back": "<strong>Afázie:</strong> Korová porucha tvorby a chápání jazykového symbolického kódu (postiženo je i psaní a čtení).<br><strong>Dysartrie:</strong> Čistě motorická porucha artikulace svalů mluvidel; psaní a porozumění jsou <strong>intaktní</strong>.",
          "hint": "Jazykový kód vs. motorická artikulace."
        }
      ],
      "quiz": [
        {
          "id": "q10-test1",
          "question": "Brocovo motorické řečové centrum je anatomicky lokalizováno v:",
          "options": [
            "Gyrus frontalis inferior (area 44, 45 dle Brodmanna) v dominantní hemisféře",
            "Gyrus temporalis superior (area 22)",
            "Gyrus postcentralis parietálního laloku",
            "Flocculonodulárním laloku mozečku"
          ],
          "correctIndex": 0,
          "explanation": "Brocovo centrum motorické expresivní řeči leží v zadní části gyrus frontalis inferior (pars opercularis a triangularis, Brodmannovy areje 44 a 45) dominantní hemisféry."
        },
        {
          "id": "q10-test2",
          "question": "Pacient po cévní mozkové příhodě rozumí řeči, mluví plynule, ale při pokusu zopakovat po vyšetřujícím větu 'Na stromě sedí pták' zcela selhává a komolí slova. O jakou afázii jde?",
          "options": [
            "Globální afázii",
            "Kondukční afázii",
            "Brocovu afázii",
            "Transkortikální motorickou afázii"
          ],
          "correctIndex": 1,
          "explanation": "Kondukční afázie vzniká přerušením fasciculus arcuatus: pacient má zachované porozumění i fluentní spontánní řeč, ale má selektivně těžce porušenou schopnost opakovat předložená slova a věty."
        }
      ]
    },
    {
      "id": "q11-poruchy-kognitivnich-funkci",
      "number": 11,
      "section": "obecna",
      "sectionLabel": "Obecná neurologie",
      "badgePrefix": "O11",
      "title": "Poruchy kognitivních funkcí",
      "shortDesc": "Agnozie (zraková, sluchová, taktilní), apraxie (ideomotorická, ideoatorní, konstrukční), amnézie (retrográdní, anterográdní), syndromy demence a kognitivní testování (MMSE, MoCA, Test hodin).",
      "category": "hemisfery_vedomi_likvor",
      "badge": "Kognitivní funkce",
      "badgeColor": "cyan",
      "theory": {
        "banner": {
          "tag": "Vyšší korové funkce • Kognice",
          "title": "Poruchy gnostických, praktických a paměťových funkcí",
          "text": "Kognitivní funkce zahrnují paměť, pozornost, exekutivní funkce, řeč, gnostické schopnosti (rozpoznávání) a praktické dovednosti (motorické programy). Jejich poruchy vznikají při ložiskových lézích asociačního kortexu nebo difuzních neurodegeneracích."
        },
        "sections": [
          {
            "title": "1. Agnozie (Poruchy rozpoznávání)",
            "color": "cyan",
            "content": "\n                    <p class=\"mb-2 text-sm\">Neschopnost rozpoznat a interpretovat smyslové vjemy při zachované primární funkci smyslového orgánu:</p>\n                    <ul class=\"list-disc pl-5 space-y-1 mb-3 text-sm\">\n                        <li><strong>Zraková agnozie:</strong> Pacient vidí předmět, ale nepozná ho zrakem (pozná ho až hmatem či sluchem). Léze okcipitotemporálního asociačního kortexu.\n                            <ul class=\"list-circle pl-5 mt-1\">\n                                <li><em>Prozopagnozie:</em> Neschopnost rozpoznat známé tváře (léze gyrus fusiformis oboustranně).</li>\n                                <li><em>Akinetopsie:</em> Neschopnost vnímat pohyb předmětů (vidí věci v 'přerušovaných snímcích').</li>\n                            </ul>\n                        </li>\n                        <li><strong>Taktilní agnozie (Astereognozie):</strong> Neschopnost poznat předmět hmatem při zavřených očích (léze kontralaterálního parietálního laloku).</li>\n                        <li><strong>Sluchová agnozie:</strong> Neschopnost rozpoznat význam zvuků (např. zvonění telefonu, štěkot psa) při intaktním sluchu. <em>Slovní hluchota:</em> Neschopnost dekódovat mluvenou řeč (izolovaná porucha porozumění řeči při zachovaném sluchu).</li>\n                    </ul>\n                "
          },
          {
            "title": "2. Apraxie (Poruchy účelných pohybů)",
            "color": "sky",
            "content": "\n                    <p class=\"mb-2 text-sm\">Neschopnost vykonat naučený účelný pohyb při zachované svalové síle, hybnosti a koordinaci (není paréza ani ataxie):</p>\n                    <ul class=\"list-disc pl-5 space-y-1 mb-3 text-sm\">\n                        <li><strong>Ideomotorická apraxie:</strong> Pacient ví, co má udělat (má plán), ale <em>nedokáže to provést na výzvu</em> či imitovat (např. nedokáže ukázat, jak si čistí zuby nebo jak se salutuje; spontánně však pohyb občas provede). Léze dominantního parietálního laloku nebo corpus callosum.</li>\n                        <li><strong>Ideoatorní apraxie:</strong> Ztráta samotného <em>motorického plánu a sekvence kroků</em>. Pacient selhává v komplexních úkonech (např. při vaření čaje vloží čajový sáček do prázdného hrnku a snaží se ho zapálit sirkou). Léze temporoparietální kůry.</li>\n                        <li><strong>Konstrukční apraxie:</strong> Neschopnost poskládat či nakreslit 2D/3D objekty (kresba krychle, hodin). Typické pro lézi parietálního laloku (zejména vpravo).</li>\n                        <li><strong>Oblékací apraxie (Dressing apraxia):</strong> Neschopnost správně se obléknout (léze pravého parietálního laloku).</li>\n                    </ul>\n                "
          },
          {
            "title": "3. Amnézie a screeningové kognitivní testy",
            "color": "indigo",
            "content": "\n                    <ul class=\"list-disc pl-5 space-y-1 mb-3 text-sm\">\n                        <li><strong>Anterográdní amnézie:</strong> Neschopnost ukládat a vštěpovat si <em>nové informace</em> po vzniku léze (poškození hipokampu a Papezova okruhu - typické pro časnou Alzheimerovu nemoc).</li>\n                        <li><strong>Retrográdní amnézie:</strong> Ztráta vzpomínek na události <em>před vznikem</em> léze/traumatu (časový gradient dle Ribotova zákona – starší vzpomínky jsou lépe chráněny).</li>\n                        <li><strong>Tranzitorní globální amnézie (TGA):</strong> Náhlá přechodná (trvající do 24 h) těžká anterográdní amnézie s opakovanými dotazy („Kde to jsem? Co se stalo?“), plně se upraví.</li>\n                        <li><strong>Kognitivní testy:</strong>\n                            <ul class=\"list-circle pl-5 mt-1\">\n                                <li><strong>MMSE (Mini-Mental State Examination):</strong> Max. 30 bodů. Norma > 27 b., mírná kognitivní porucha (MCI) 24–27 b., demence < 24 b.</li>\n                                <li><strong>MoCA (Montreal Cognitive Assessment):</strong> Citlivější než MMSE pro záchyt časné MCI a vaskulární/frontální poruchy. Norma ≥ 26 bodů.</li>\n                                <li><strong>Test kreslení hodin (Clock Drawing Test):</strong> Rychlý test vizuokonstrukce, exekutivních funkcí a prostorové orientace.</li>\n                            </ul>\n                        </li>\n                    </ul>\n                "
          }
        ]
      },
      "recall": {
        "scenarios": [
          {
            "id": "rec-q11-1",
            "title": "Kazuistika: Neschopnost nakreslit hodiny a rozpoznat známé tváře",
            "question": "65letý pacient bez paréz nedokáže na výzvu ukázat, jak se používá kladivo ani nakreslit ciferník hodin (čísla píše pouze na pravou polovinu kruhu). Na fotografiích navíc nepozná svou manželku ani dceru, dokud na něj nepromluví. O jaké kognitivní syndromy se jedná?",
            "answer": "Pacient vykazuje ideomotorickou apraxii (neschopnost předvést pantomimu použití nástroje), konstrukční apraxii s neglectem vlevo při kreslení hodin (parietální léze vpravo) a prozopagnozii (zrakovou agnozii tváří při zachovaném sluchovém poznání po hlase, způsobenou lézí v gyrus fusiformis).",
            "pearl": "U prozopagnozie pacient okamžitě pozná své blízké, jakmile promluví, protože sluchové asociační dráhy a paměť hlasu jsou intaktní."
          }
        ]
      },
      "cards": [
        {
          "id": "fc-q11-1",
          "front": "Definujte rozdíl mezi ideomotorickou a ideoatorní apraxií.",
          "back": "<strong>Ideomotorická apraxie:</strong> Pacient má plán, ale <em>nedokáže provést jednotlivé gesta a úkony na výzvu</em> (porucha realizace).<br><strong>Ideoatorní apraxie:</strong> Pacient <em>ztratil samotný koncept a posloupnost kroků</em> u komplexních činností s předměty.",
          "hint": "Plán vs. realizace pohybu."
        },
        {
          "id": "fc-q11-2",
          "front": "Co je to prozopagnozie a kde je anatomická léze?",
          "back": "Neschopnost <strong>rozpoznávat známé lidské tváře zrakem</strong> (pacient pozná lidi až podle hlasu či chůze). Léze je v <strong>gyrus fusiformis (occipitotemporální kůra)</strong>, často oboustranně.",
          "hint": "Rozpoznávání tváří."
        },
        {
          "id": "fc-q11-3",
          "front": "Jaké je bodové rozmezí v testu MMSE a jaké je skóre pro suspektní demenci?",
          "back": "Maximum je <strong>30 bodů</strong>. Skóre <strong>< 24 bodů</strong> svědčí pro přítomnost demence (24–27 b. odpovídá lehké kognitivní poruše - MCI).",
          "hint": "Limit pro demenci v MMSE."
        }
      ],
      "quiz": [
        {
          "id": "q11-test1",
          "question": "Neschopnost ukládat a pamatovat si nové informace vzniklé po úrazu či poškození mozku se označuje jako:",
          "options": [
            "Retrográdní amnézie",
            "Anterográdní amnézie",
            "Senzorická afázie",
            "Ideomotorická apraxie"
          ],
          "correctIndex": 1,
          "explanation": "Anterográdní amnézie je neschopnost fixovat a ukládat nové zážitky a informace do dlouhodobé paměti po inzultu mozku (poškození hipokampu)."
        },
        {
          "id": "q11-test2",
          "question": "Který kognitivní test je nejcitlivější pro časný záchyt mírné kognitivní poruchy (MCI) a exekutivní dysfunkce?",
          "options": [
            "MoCA (Montreal Cognitive Assessment)",
            "Glasgow Coma Scale",
            "Barthel index",
            "NIHSS"
          ],
          "correctIndex": 0,
          "explanation": "MoCA test je výrazně citlivější než MMSE zejména pro včasný záchyt MCI, exekutivní dysfunkce a prostorové orientace."
        }
      ]
    },
    {
      "id": "q12-poruchy-vedomi",
      "number": 12,
      "section": "obecna",
      "sectionLabel": "Obecná neurologie",
      "badgePrefix": "O12",
      "title": "Kvalitativní a kvantitativní poruchy vědomí",
      "shortDesc": "Kvantitativní poruchy (somnolence, sopor, koma), Glasgow Coma Scale (GCS), kvalitativní poruchy (delirium, obnubilace), synkopa, locked-in syndrom, apalický syndrom a smrt mozku.",
      "category": "hemisfery_vedomi_likvor",
      "badge": "Poruchy vědomí",
      "badgeColor": "cyan",
      "theory": {
        "banner": {
          "tag": "Neurologický urgent • Stav vědomí",
          "title": "Kvantitativní a kvalitativní poruchy vědomí",
          "text": "Vědomí má dvě základní složky: bdělost (vigilitu, řízenou kmenovým ARAS) a obsah vědomí (luciditu, kognitivní a afektivní funkce řízené mozkovou kůrou). Rozlišujeme kvantitativní útlum bdělosti (somnolence až koma) a kvalitativní dezorganizaci (delirium, obluzené vědomí)."
        },
        "sections": [
          {
            "title": "1. Kvantitativní poruchy vědomí (Stupně bezvědomí)",
            "color": "cyan",
            "content": "\n                    <div class=\"space-y-3\">\n                        <div class=\"p-3 rounded-lg bg-slate-900 border border-slate-700\">\n                            <span class=\"font-bold text-cyan-300\">1. Somnolence (Ospalost):</span>\n                            <p class=\"text-xs text-slate-300 mt-1\">Pacient spí, ale <strong>lze ho snadno probudit běžným slovním oslovením</strong>. Po probuzení adekvátně spolupracuje a odpovídá, bez stimulace však znovu upadá do spánku.</p>\n                        </div>\n                        <div class=\"p-3 rounded-lg bg-slate-900 border border-slate-700\">\n                            <span class=\"font-bold text-sky-300\">2. Sopor:</span>\n                            <p class=\"text-xs text-slate-300 mt-1\">Hluboké bezvědomí. Pacienta <strong>lze probudit pouze silným bolestivým podnětem</strong> (např. tlak na sternum či supraorbitální nerv). Reakce je pouze krátká, neklidná, nesouvislá a pacient ihned usíná.</p>\n                        </div>\n                        <div class=\"p-3 rounded-lg bg-slate-900 border border-slate-700\">\n                            <span class=\"font-bold text-rose-400\">3. Kóma (Coma):</span>\n                            <p class=\"text-xs text-slate-300 mt-1\">Hluboké bezvědomí, pacienta <strong>nelze probudit žádným, ani maximálním bolestivým podnětem</strong>. Na bolest reaguje pouze necílenou motorickou reakcí (dekortikační flexe / decerebrační extenze) nebo vůbec nereaguje (atonické hluboké koma s areflexií).</p>\n                        </div>\n                    </div>\n                "
          },
          {
            "title": "2. Glasgow Coma Scale (GCS)",
            "color": "sky",
            "content": "\n                    <div class=\"overflow-x-auto my-3\">\n                        <table class=\"min-w-full text-xs text-left text-slate-200 border border-slate-700\">\n                            <thead class=\"bg-slate-800 text-cyan-300 uppercase font-mono\">\n                                <tr>\n                                    <th class=\"p-2 border border-slate-700\">Otevírání očí (E: 1–4)</th>\n                                    <th class=\"p-2 border border-slate-700\">Slovní odpověď (V: 1–5)</th>\n                                    <th class=\"p-2 border border-slate-700\">Motorická odpověď (M: 1–6)</th>\n                                </tr>\n                            </thead>\n                            <tbody>\n                                <tr class=\"border-b border-slate-800 bg-slate-900/50\">\n                                    <td class=\"p-2\">4 = Spontánní</td>\n                                    <td class=\"p-2\">5 = Orientovaná, správná</td>\n                                    <td class=\"p-2\">6 = Vyhoví výzvám</td>\n                                </tr>\n                                <tr class=\"border-b border-slate-800\">\n                                    <td class=\"p-2\">3 = Na oslovení</td>\n                                    <td class=\"p-2\">4 = Dezorientovaná, konfúzní</td>\n                                    <td class=\"p-2\">5 = Cílená reakce na bolest (lokalizuje)</td>\n                                </tr>\n                                <tr class=\"border-b border-slate-800 bg-slate-900/50\">\n                                    <td class=\"p-2\">2 = Na bolest</td>\n                                    <td class=\"p-2\">3 = Nepřiléhavá slova</td>\n                                    <td class=\"p-2\">4 = Úniková reakce (flexe)</td>\n                                </tr>\n                                <tr class=\"border-b border-slate-800\">\n                                    <td class=\"p-2\">1 = Žádná</td>\n                                    <td class=\"p-2\">2 = Nesrozumitelné zvuky (sten)</td>\n                                    <td class=\"p-2 text-amber-300\">3 = Dekortikační flexe (patologická)</td>\n                                </tr>\n                                <tr class=\"bg-slate-900/50\">\n                                    <td class=\"p-2\"></td>\n                                    <td class=\"p-2\">1 = Žádná</td>\n                                    <td class=\"p-2 text-rose-400\">2 = Decerebrační extenze</td>\n                                </tr>\n                                <tr>\n                                    <td class=\"p-2\"></td>\n                                    <td class=\"p-2\"></td>\n                                    <td class=\"p-2 font-bold text-rose-500\">1 = Žádná motorika (atonie)</td>\n                                </tr>\n                            </tbody>\n                        </table>\n                    </div>\n                    <div class=\"alert-box alert-cyan text-xs mt-2\">\n                        <strong>⚡ GCS Hodnocení:</strong> Skóre <strong>15 = plné vědomí</strong>, skóre <strong>≤ 8 = definice kómatu</strong> (indikace k zajištění dýchacích cest intubací - 'GCS pod 8 = intubovat nutno'). Minimum = 3 body.\n                    </div>\n                "
          },
          {
            "title": "3. Zvláštní stavy bezvědomí, Locked-in a Smrt mozku",
            "color": "indigo",
            "content": "\n                    <ul class=\"list-disc pl-5 space-y-1 mb-3 text-sm\">\n                        <li><strong>Locked-in syndrom (Syndrom uzamčení):</strong> Pacient je <em>plně při vědomí, lucidní a vnímá vše kolem</em>, ale je kompletně kvadruplegický s anartrií v důsledku léze ventrálního pontu (přerušení pyramidových drah). Komunikuje <strong>pouze vertikálními pohyby očí a mrkáním</strong>!</li>\n                        <li><strong>Vegetativní stav (Apalický syndrom / Nereagující vigilita):</strong> Pacient má otevřené oči a zachovaný cyklus spánku a bdění (funkční ARAS), ale <strong>zcela chybí obsah vědomí a kontakt s okolím</strong> (difuzní zánik mozkové kůry po anoxii).</li>\n                        <li><strong>Smrt mozku (Brain death):</strong> Ireverzibilní zástava všech funkcí celého mozku včetně mozkového kmene. Diagnostika: Hluboké areflexní kóma, vyhasnutí všech kmenových reflexů (korneální, pupilární, vestibulookulární, kašlací), <strong>apnoický test</strong> a potvrzení zástavy intrakraniální perfuze (panangiografie, transkraniální doppler, perfuzní scintigrafie).</li>\n                    </ul>\n                "
          }
        ]
      },
      "recall": {
        "scenarios": [
          {
            "id": "rec-q12-1",
            "title": "Kazuistika: Pacient po úrazu hlavy s asymetrickou motorikou",
            "question": "30letý motocyklista po nárazu hlavou otevírá oči pouze na bolestivý podnět, vydává nesrozumitelné steny a na bolest reaguje flekčním únikem horní končetiny. Jaké je jeho celkové skóre GCS a jaký je další bezprostřední postup?",
            "answer": "GCS kalkulace: Otevírání očí na bolest (E2) + Nesrozumitelné zvuky (V2) + Úniková flexe na bolest (M4) = celkem GCS 8 bodů. Skóre GCS ≤ 8 definuje kóma a vyžaduje okamžité zajištění dýchacích cest orotracheální intubací s řízenou ventilací (prevence aspirace a hypoxie) a provedení urgentního nativního CT mozku k vyloučení intrakraniálního krvácení.",
            "pearl": "U Locked-in syndromu je pacient při plném vědomí. Pokud pacient na ARO po kmenové CMP nereaguje na výzvy, VŽDY ho vyzvěte, aby se podíval vzhůru a mrkl víčky!"
          }
        ]
      },
      "cards": [
        {
          "id": "fc-q12-1",
          "front": "Jaké je bodové rozmezí GCS a od jaké hodnoty je definováno kóma s nutností intubace?",
          "back": "Rozmezí je <strong>3 až 15 bodů</strong>. Kóma je definováno při <strong>GCS ≤ 8 bodů</strong> (indikace k orotracheální intubaci a umělé plicní ventilaci).",
          "hint": "Minimální a mezní skóre."
        },
        {
          "id": "fc-q12-2",
          "front": "Popište Locked-in syndrom (lokalizace léze a způsob komunikace).",
          "back": "Léze je ve <strong>ventrální části pontu</strong> (trombóza a. basilaris). Pacient má intaktní vědomí, ale je kvadruplegický s obrnou hlavových nervů; komunikuje <strong>výhradně vertikálními pohyby bulbů a mrkáním</strong>.",
          "hint": "Ventrální pons a vertikální pohled."
        },
        {
          "id": "fc-q12-3",
          "front": "Jaké jsou základní kmenové reflexy, které musí vymizet při stanovení smrti mozku?",
          "back": "1. <strong>Fotoreakce</strong> (zornicový reflex)<br>2. <strong>Korneální reflex</strong><br>3. <strong>Vestibulookulární reflex</strong> (kalorický/okulocefalický)<br>4. <strong>Faryngeální a tracheální (kašlací) reflex</strong><br>5. Negativní <strong>apnoický test</strong>.",
          "hint": "Zornice, rohovka, kalorie, kašel, apnoe."
        }
      ],
      "quiz": [
        {
          "id": "q12-test1",
          "question": "Při vyšetření pacienta v bezvědomí po traumatu zjistíte: otevírá oči na oslovení (E3), slovně produkuje nevhodná nesouvislá slova (V3) a na výzvu stiskne ruku (M6). Výsledné GCS je:",
          "options": [
            "10 bodů",
            "12 bodů",
            "14 bodů",
            "8 bodů"
          ],
          "correctIndex": 1,
          "explanation": "GCS = E3 (na oslovení) + V3 (nevhodná slova) + M6 (vyhoví výzvám) = 3 + 3 + 6 = 12 bodů."
        },
        {
          "id": "q12-test2",
          "question": "Pro apalický syndrom (vegetativní stav) je charakteristické:",
          "options": [
            "Plná lucidita s vertikálními pohyby očí",
            "Zachovaná bdělost s otevřenýma očima a cyklem spánku/bdění, ale úplná absence vědomí sebe sama a kontaktu s okolím",
            "Trvalá mydriáza s vyhaslou fotoreakcí",
            "Záchvaty psychomotorického neklidu a halucinací"
          ],
          "correctIndex": 1,
          "explanation": "Při vegetativním stavu (apalickém syndromu) funguje kmenový ARAS (pacient má otevřené oči a cyklus spánek-bdění), ale korové funkce jsou zcela vyhaslé (chybí kontakt s okolím)."
        }
      ]
    },
    {
      "id": "q13-likvor-hydrocephalus",
      "number": 13,
      "section": "obecna",
      "sectionLabel": "Obecná neurologie",
      "badgePrefix": "O13",
      "title": "Likvor, jeho cirkulace, hydrocephalus",
      "shortDesc": "Tvorba moku v plexus choroideus, likvorové cesty (Monro, aqueductus Sylvii, Magendie, Luschka), resorpce v granulích Pacchioni, obstrukční vs. komunikující hydrocefalus a normotenzní hydrocefalus (NPH, Hakimova triáda).",
      "category": "hemisfery_vedomi_likvor",
      "badge": "Likvor & Hydrocefalus",
      "badgeColor": "cyan",
      "theory": {
        "banner": {
          "tag": "Likvorový systém • Hydrocefalus",
          "title": "Fyziologie mozkomíšního moku a hydrocefalus",
          "text": "Mozkomíšní mok (CSF) chrání CNS mechanicky i metabolicky. Denně se vytvoří cca 500 ml moku (celkový objem 150 ml, obměna 3–4× denně). Porucha rovnováhy mezi tvorbou, cirkulací a resorpcí vede k hydrocefalu."
        },
        "sections": [
          {
            "title": "1. Tvorba a cirkulace mozkomíšního moku",
            "color": "cyan",
            "content": "\n                    <ul class=\"list-disc pl-5 space-y-1 mb-3 text-sm\">\n                        <li><strong>Tvorba:</strong> V <em>plexus choroideus</em> postranních komor, III. a IV. komory aktivní sekrecí a ultrafiltrací (rychlostí cca 0,35 ml/min = 500 ml/den).</li>\n                        <li><strong>Likvorová cirkulace (anatomická cesta):</strong>\n                            <p class=\"p-2 bg-slate-900 rounded font-mono text-cyan-300 my-2 text-xs\">\n                                Postranní komory -> Foramina Monroi -> III. komora -> Aqueductus mesencephali (Sylvii) -> IV. komora -> Apertura mediana (Magendie) + Aperturae laterales (Luschkae) -> Cisterna magna & Subarachnoidální prostor mozku a míchy.\n                            </p>\n                        </li>\n                        <li><strong>Resorpce:</strong> V <em>granulationes arachnoideales (Pacchioni)</em> do durálních venózních splavů (zejména sinus sagittalis superior) a podél pochev míšních a hlavových nervů do lymfatických cév.</li>\n                    </ul>\n                "
          },
          {
            "title": "2. Dělení hydrocefalu (Obstrukční vs. Komunikující)",
            "color": "sky",
            "content": "\n                    <div class=\"grid md:grid-cols-2 gap-3 my-3\">\n                        <div class=\"p-3 rounded-lg bg-slate-900 border border-slate-700\">\n                            <div class=\"font-bold text-cyan-400 mb-1\">🚧 Obstrukční (Nekomunikující) hydrocefalus</div>\n                            <p class=\"text-xs text-slate-300 mb-1\"><strong>Příčina:</strong> Mechanická překážka v komorovém systému.</p>\n                            <p class=\"text-xs text-slate-300 mb-1\"><strong>Predilekční místa:</strong> Stenóza aqueductu Sylvii (tumory tecta, ependymom), koloidní cysta foramen Monroi, tumor IV. komory (meduloblastom), Chiariho malformace.</p>\n                            <p class=\"text-xs text-emerald-400\"><strong>Terapie:</strong> Endoskopická ventrikulostomie III. komory (ETV) nebo ventrikuloperitoneální (VP) shunt.</p>\n                        </div>\n                        <div class=\"p-3 rounded-lg bg-slate-900 border border-slate-700\">\n                            <div class=\"font-bold text-sky-400 mb-1\">🌊 Komunikující (Neobstrukční) hydrocefalus</div>\n                            <p class=\"text-xs text-slate-300 mb-1\"><strong>Příčina:</strong> Porucha resorpce likvoru v Pacchionských granulacích nebo vzácně hyperprodukce (papilom plexus choroideus).</p>\n                            <p class=\"text-xs text-slate-300 mb-1\"><strong>Etiologie:</strong> Následek po proběhlém subarachnoidálním krvácení (SAB), po bakteriální meningitidě (obturace granulí krví/zánětlivým exsudátem).</p>\n                            <p class=\"text-xs text-emerald-400\"><strong>Terapie:</strong> Ventrikuloperitoneální (VP) shunt.</p>\n                        </div>\n                    </div>\n                "
          },
          {
            "title": "3. Normotenzní hydrocefalus (NPH - Hakimova triáda)",
            "color": "indigo",
            "content": "\n                    <div class=\"alert-box alert-cyan my-2\">\n                        <strong>🧠 Hakimova triáda u NPH (Normotensive Hydrocephalus):</strong>\n                        <ol class=\"list-decimal pl-5 mt-1 text-xs space-y-1\">\n                            <li><strong>Porucha chůze (Magnetická apraxie chůze):</strong> Široká baze, šouravá chůze, nohy jakoby přilepené k podlaze (nejčasnější příznak).</li>\n                            <li><strong>Kognitivní porucha (Demence subkortikálního typu):</strong> Bradypsychismus, apatie, porucha exekutivy.</li>\n                            <li><strong>Urinární inkontinence:</strong> Zpočátku imperativní mikce, později inkontinence.</li>\n                        </ol>\n                    </div>\n                    <p class=\"text-xs text-slate-300 mt-2\"><strong>Diagnostika a léčba:</strong> CT/MR prokazuje ventrikulomegalii nepoměrnou ke korové atrofii (Evansův index > 0,3). <strong>Likvorový tap-test (odpouštěcí test):</strong> Evakuace 30–50 ml moku lumbální punkcí -> při NPH dojde k <em>výraznému dočasnému zlepšení chůze</em>! Léčba: Zavedení VP shuntu s programovatelným ventilem.</p>\n                "
          }
        ]
      },
      "recall": {
        "scenarios": [
          {
            "id": "rec-q13-1",
            "title": "Kazuistika: Senior se šouravou chůzí, zapomnětlivostí a únikem moči",
            "question": "72letý muž je vyšetřován pro 6 měsíců progredující nejistotu při chůzi ('nohy se mu lepí k zemi'), zapomnětlivost a nově vzniklé epizody úniku moči. Na MR mozku jsou výrazně rozšířené postranní komory bez významnější korové atrofie. O jaké onemocnění jde a jaký test potvrdí indikaci k operaci?",
            "answer": "Jedná se o normotenzní hydrocefalus (NPH) s klasickou Hakimovou triádou (porucha chůze, demence, inkontinence). Indikaci k neurochirurgickému zavedení ventrikuloperitoneálního (VP) shuntu potvrdí pozitivní lumbální odpouštěcí test (Tap-test): po lumbální punkci s evakuací 40–50 ml moku se do několika hodin prokazatelně zlepší rychlost a stabilita chůze.",
            "pearl": "NPH je jednou z mála reverzibilních příčin demence v seniorském věku – včasné zavedení shuntu může pacienta vrátit k soběstačnosti."
          }
        ]
      },
      "cards": [
        {
          "id": "fc-q13-1",
          "front": "Popište průchod moku komorovým systémem z postranních komor do subarachnoidálního prostoru.",
          "back": "Postranní komory -> <strong>Foramen interventriculare (Monroi)</strong> -> III. komora -> <strong>Aqueductus Sylvii</strong> -> IV. komora -> <strong>Apertura mediana (Magendie) a laterales (Luschka)</strong> -> cisterna magna a subarachnoidální prostor.",
          "hint": "Monro -> Sylvius -> Magendie/Luschka."
        },
        {
          "id": "fc-q13-2",
          "front": "Vyjmenujte 3 složky Hakimovy triády u normotenzního hydrocefalu (NPH).",
          "back": "1. <strong>Porucha chůze</strong> (šouravá, magnetická apraxie chůze)<br>2. <strong>Demence</strong> (subkortikální zpomalení)<br>3. <strong>Urinární inkontinence</strong> (imperativní mikce).",
          "hint": "Chůze, hlava, moč."
        },
        {
          "id": "fc-q13-3",
          "front": "Co je to likvorový Tap-test (odpouštěcí test)?",
          "back": "Lumbální punkce s odběrem <strong>30–50 ml moku</strong> a objektivním testováním chůze před a po punkci. Výrazné zlepšení chůze potvrdí NPH a indikuje zavedení <strong>VP shuntu</strong>.",
          "hint": "Odběr 40 ml a test chůze."
        }
      ],
      "quiz": [
        {
          "id": "q13-test1",
          "question": "Kde dochází k hlavní fyziologické resorpci mozkomíšního moku do žilního systému?",
          "options": [
            "V plexus choroideus III. komory",
            "V Pacchionských granulacích (granulationes arachnoideales) v durálních splavech",
            "V míšním centrálním kanálku",
            "V ependymu postranních komor"
          ],
          "correctIndex": 1,
          "explanation": "Resorpce likvoru probíhá jednosměrnými chlopňovými strukturami – Pacchionskými granulacemi arachnoidey prominujícími do durálních žilních splavů (zejména sinus sagittalis superior)."
        },
        {
          "id": "q13-test2",
          "question": "Při obstrukci na úrovni aqueductus mesencephali (Sylvii) na CT mozku uvidíme rozšíření:",
          "options": [
            "Pouze IV. komory",
            "Postranních komor a III. komory, zatímco IV. komora má normální či zúžený kalibr",
            "Všech čtyř komor symetricky",
            "Pouze subarachnoidálního prostoru na konvexitě"
          ],
          "correctIndex": 1,
          "explanation": "Při uzávěru Sylviova mokovodu vázne odtok z III. komory, takže dochází k dilataci komor nad překážkou (obě postranní komory + III. komora), zatímco IV. komora ležící pod mokovodem zůstává štíhlá."
        }
      ]
    },
    {
      "id": "q14-nitrolebni-hypertenze-hypotenze",
      "number": 14,
      "section": "obecna",
      "sectionLabel": "Obecná neurologie",
      "badgePrefix": "O14",
      "title": "Syndrom nitrolební hypertenze a hypotenze",
      "shortDesc": "Monro-Kellieova doktrína, nitrolební tlak (ICP), edém mozku (vazogenní vs. cytotoxický), Cushingova triáda, mozkové herniace (temporální uncinální, okcipitální foraminální), likvorová hypotenze a postpunkční syndrom.",
      "category": "hemisfery_vedomi_likvor",
      "badge": "ICP & Herniace",
      "badgeColor": "cyan",
      "theory": {
        "banner": {
          "tag": "Neurointenzivní péče • ICP",
          "title": "Nitrolební tlak a herniace mozku",
          "text": "Intrakraniální dutina má rigidní objem tvořený třemi kompartmenty: mozkem (80 %), krví (10 %) a likvorem (10 %). Monro-Kellieova doktrína definuje, že nárůst objemu jednoho kompartmentu musí být kompenzován poklesem jiného, jinak dochází k prudkému vzestupu nitrolebního tlaku (ICP) s rizikem fatální herniace."
        },
        "sections": [
          {
            "title": "1. Syndrom nitrolební hypertenze (ICP > 20 mmHg)",
            "color": "cyan",
            "content": "\n                    <ul class=\"list-disc pl-5 space-y-1 mb-3 text-sm\">\n                        <li><strong>Klinická triáda:</strong>\n                            <ol class=\"list-decimal pl-5 mt-1\">\n                                <li><strong>Bolest hlavy:</strong> Difuzní, tupá, maximální ráno po probuzení, zhoršuje se kašlem, předklonem a tlačením na stolici.</li>\n                                <li><strong>Zvracení:</strong> Často obloukem (projektilové zvracení), bez předchozí nauzey, nalačno.</li>\n                                <li><strong>Městnavá papila n. opticus:</strong> Oboustranný edém terče zrakového nervu při oftalmoskopii (pozdní známka).</li>\n                            </ol>\n                        </li>\n                        <li><strong>Cushingova triáda (Pozdní známka dekompenzace a kmenové tísně):</strong>\n                            <div class=\"alert-box alert-cyan mt-1\">\n                                <strong>⚠️ Cushingova triáda:</strong> 1. <strong>Arteriální hypertenze</strong> (se širokým pulzním tlakem) + 2. <strong>Bradykardie</strong> + 3. <strong>Nepravidelné dýchání</strong> (bradypnoe / Cheyne-Stokes).\n                            </div>\n                        </li>\n                        <li><strong>Paréza n. abducens (VI):</strong> Diplopie (falešný lokalizační příznak).</li>\n                    </ul>\n                "
          },
          {
            "title": "2. Mozkové herniace (Mozkové kónusy)",
            "color": "sky",
            "content": "\n                    <div class=\"space-y-3\">\n                        <div class=\"p-3 rounded-lg bg-slate-900 border border-slate-700\">\n                            <span class=\"font-bold text-rose-400 font-bold\">1. Temporální (Transtentoriální / Uncální) herniace:</span>\n                            <p class=\"text-xs text-slate-300 mt-1\">Tlak uncus gyri parahippocampalis přes incisura tentorii na mesencephalon.<br><strong>Příznaky:</strong> <strong>Ipsilaterální mydriáza s vyhaslou fotoreakcí</strong> (útlak n. III), kontralaterální hemiparéza, rychlý pokles vědomí do kómatu.</p>\n                        </div>\n                        <div class=\"p-3 rounded-lg bg-slate-900 border border-slate-700\">\n                            <span class=\"font-bold text-rose-400 font-bold\">2. Okcipitální (Foraminální / Tonzilární) herniace:</span>\n                            <p class=\"text-xs text-slate-300 mt-1\">Vsunutí tonzil mozečku do <em>foramen magnum</em> s kompresí prodloužené míchy.<br><strong>Příznaky:</strong> Opistotonus, šíjová ztuhlost, náhlá <strong>zástava dechu a oběhu</strong>, smrt.</p>\n                        </div>\n                        <div class=\"p-3 rounded-lg bg-slate-900 border border-slate-700\">\n                            <span class=\"font-bold text-amber-300\">3. Subfalcinní (Cingulární) herniace:</span>\n                            <p class=\"text-xs text-slate-300 mt-1\">Přetlačení gyrus cinguli pod falx cerebri -> komprese <em>a. cerebri anterior</em> (ischemický infarkt frontálního laloku s parézou DK).</p>\n                        </div>\n                    </div>\n                "
          },
          {
            "title": "3. Syndrom nitrolební hypotenze a postpunkční syndrom",
            "color": "indigo",
            "content": "\n                    <p class=\"mb-2 text-sm\">Vzniká úbytkem likvoru (likvorea po traumatu/operaci nebo po lumbální punkci dural leak):</p>\n                    <ul class=\"list-disc pl-5 space-y-1 mb-3 text-sm\">\n                        <li><strong>Posturální (ortostatická) bolest hlavy:</strong> Vzniká či prudce narůstá ve stoji/sedě a <strong>zcela mizí nebo se výrazně zmírní vleže</strong> na zádech. Doprovázena nauzeou, tinnitem, diplopií (tah za n. VI).</li>\n                        <li><strong>Postpunkční syndrom:</strong> Bolest hlavy vznikající po lumbální punkci netěsností dury. <strong>Prevence:</strong> Používání <em>atraumatických (tužkových / Sprotte) jehel</em>, dostatečná hydratace. <strong>Terapie:</strong> Klid na lůžku, kofein, i.v. hydratace, při přetrvávání <em>epidurální krevní zátka (blood patch)</em>.</li>\n                    </ul>\n                "
          }
        ]
      },
      "recall": {
        "scenarios": [
          {
            "id": "rec-q14-1",
            "title": "Kazuistika: Progradující anizokorie u pacienta s epidurálním hematomem",
            "question": "32letý pacient po pádu na lyžích byl po přechodném bezvědomí ('lucidní interval') přijat na sledování. Po 2 hodinách začíná být somnolentní a jeho pravá zornice je široká (mydriatická) a nereaguje na osvit. Na levostranných končetinách se objevuje spastická paréza. Jaký proces probíhá a co musíte okamžitě udělat?",
            "answer": "Probíhá rozvoj akutního epidurálního hematomu (z a. meningea media) s expanzí v pravé spánkové jámě a počínající temporální (uncální) herniací přes tentorium cerebelli. Pravý uncus komprimuje pravý n. III (mydriáza) a pravý mozkový pedunculus (levostranná hemiparéza). Jedná se o absolutní neurochirurgickou urgenci – okamžité podání manitolu i.v. / hypertonického NaCl k osmotickému snížení ICP a okamžitá kraniotomie s evakuací hematomu.",
            "pearl": "Lumbální punkce je při intrakraniální hypertenzi a ložiskovém procesu v mozku STRIKTNĚ KONTRAINDIKOVÁNA, protože náhlý pokles tlaku pod foramen magnum vyvolá okamžité zaklínění mozečkových tonzil (okcipitální kónus) se zástavou dechu."
          }
        ]
      },
      "cards": [
        {
          "id": "fc-q14-1",
          "front": "Co tvoří Cushingovu triádu u nitrolební hypertenze?",
          "back": "1. <strong>Systémová arteriální hypertenze</strong> (se širokým pulzním tlakem)<br>2. <strong>Bradykardie</strong><br>3. <strong>Respirační deprese / nepravidelné dýchání</strong>.<br>Znamená dekompenzaci ICP s útlakem mozkového kmene!",
          "hint": "TK, pulz, dýchání."
        },
        {
          "id": "fc-q14-2",
          "front": "Jaké jsou klinické příznaky temporální (uncální) herniace?",
          "back": "1. <strong>Homolaterální mydriáza</strong> s vyhaslou fotoreakcí (komprese n. III).<br>2. <strong>Kontralaterální hemiparéza</strong> (komprese pyramidové dráhy v crus cerebri).<br>3. Rychlý pokles vědomí do kómatu.",
          "hint": "Zornice na straně léze + hemiparéza naproti."
        },
        {
          "id": "fc-q14-3",
          "front": "Jaký je typický charakter bolesti hlavy u syndromu likvorové hypotenze (postpunkčního syndromu)?",
          "back": "Typická <strong>ortostatická (posturální) bolest hlavy</strong>: prudce se zhoršuje ve vzpřímené poloze (stoj, sed) a <strong>zcela vymizí nebo výrazně uleví po ulehnutí do horizontály</strong>.",
          "hint": "Vzpřímená poloha vs. horizontála."
        }
      ],
      "quiz": [
        {
          "id": "q14-test1",
          "question": "Které vyšetření je absolutně kontraindikováno u pacienta se suspektním nitrolebním expanzivním procesem a městnavou papilou před provedením CT mozku?",
          "options": [
            "Magnetická rezonance",
            "Lumbální punkce",
            "Elektroencefalografie (EEG)",
            "Dopplerovská sonografie karotid"
          ],
          "correctIndex": 1,
          "explanation": "Lumbální punkce při intrakraniální expanzi a edému mozku hrozí vytvořením tlakového gradientu a fatální okcipitální herniací mozečkových tonzil do foramen magnum."
        },
        {
          "id": "q14-test2",
          "question": "Pro postpunkční syndrom po lumbální punkci platí:",
          "options": [
            "Bolest hlavy vzniká typicky vleže a ustupuje při postavení",
            "Vzniká v důsledku přetrvávajícího úniku likvoru duralním defektem s trakcí za meningy a mozkové cévy ve svislé poloze",
            "Je vyvolán bakteriální kontaminací subarachnoidálního prostoru",
            "Vždy vyžaduje okamžitou kraniotomii"
          ],
          "correctIndex": 1,
          "explanation": "Postpunkční syndrom je způsoben likvorovou hypotenzí při přetrvávající mikropíštěli v tvrdé pleně; gravitace ve stoji vyvolává pokles mozku a tah za senzitivní meningy a cévy."
        }
      ]
    },
    {
      "id": "q15-meningealni-syndrom",
      "number": 15,
      "section": "obecna",
      "sectionLabel": "Obecná neurologie",
      "badgePrefix": "O15",
      "title": "Meningeální syndrom",
      "shortDesc": "Anatomie mozkových plen, patofyziologie meningeálního dráždění, meningeální příznaky (opozice šíje, Brudzinski I-II, Kernig, Amosova trojnožka, spine sign) a odlišení infekční meningitidy od SAB.",
      "category": "hemisfery_vedomi_likvor",
      "badge": "Meningeální jevy",
      "badgeColor": "cyan",
      "theory": {
        "banner": {
          "tag": "Neurologická propedeutika • Meningy",
          "title": "Meningeální syndrom a jeho vyšetření",
          "text": "Meningeální syndrom vzniká drážděním senzitivních receptorů v mozkových a míšních plenách (dura, arachnoidea, pia mater) zánětem (meningitida), krví (subarachnoidální krvácení - SAB) nebo karcinomatózou plen. Vede k reflexnímu spazmu paravertebrálního a šíjového svalstva."
        },
        "sections": [
          {
            "title": "1. Subjektivní příznaky meningeálního syndromu",
            "color": "cyan",
            "content": "\n                    <ul class=\"list-disc pl-5 space-y-1 mb-3 text-sm\">\n                        <li><strong>Krutá difuzní bolest hlavy:</strong> Šíří se do šíje a zad, zhoršuje se pohybem hlavy, světlem a hlukem.</li>\n                        <li><strong>Fotofobie (světloplachost) a fonofobie:</strong> Přecitlivělost na zrakové a zvukové podněty.</li>\n                        <li><strong>Celková hyperestézie:</strong> Nesnášenlivost běžného dotyku kůže (alodynie).</li>\n                        <li><strong>Nevolnost a zvracení:</strong> Často centrální, bez předchozí dietní chyby.</li>\n                        <li><strong>Držení těla:</strong> U těžkých stavů <em>opistotonus</em> (tělo prohnuté do oblouku dozadu v hyperextenzi) a poloha 'nataženého kohoutku' (na boku s flektovanými DKK a zakloněnou hlavou).</li>\n                    </ul>\n                "
          },
          {
            "title": "2. Objektivní meningeální příznaky a testy u lůžka",
            "color": "sky",
            "content": "\n                    <div class=\"space-y-3\">\n                        <div class=\"p-3 rounded-lg bg-slate-900 border border-slate-700\">\n                            <span class=\"font-bold text-cyan-300\">1. Opozice (ztuhlost) šíje (Rigiditas nuchae):</span>\n                            <p class=\"text-xs text-slate-300 mt-1\">Pacient vleže na zádech nedokáže pasivně flektovat hlavu a dotknout se bradou sterna (měří se vzdálenost brada–sternum na počet prstů, např. 'šíje vázne na 3 prsty'). Rotace hlavy do stran bývá volná!</p>\n                        </div>\n                        <div class=\"p-3 rounded-lg bg-slate-900 border border-slate-700\">\n                            <span class=\"font-bold text-sky-300\">2. Brudzinského příznaky (I. a II.):</span>\n                            <p class=\"text-xs text-slate-300 mt-1\"><strong>Brudzinski I (šíjový):</strong> Při pasivní flexi hlavy pacient reflexně flektuje obě dolní končetiny v kyčlích a kolenou.<br><strong>Brudzinski II (kontralaterální / lícní):</strong> Tlak na jařmový oblouk vyvolá flexi v loktech a rameni / pasivní flexe jedné DK vyvolá flexi druhé DK.</p>\n                        </div>\n                        <div class=\"p-3 rounded-lg bg-slate-900 border border-slate-700\">\n                            <span class=\"font-bold text-indigo-300\">3. Kernigův příznak:</span>\n                            <p class=\"text-xs text-slate-300 mt-1\">Pacient leží na zádech, vyšetřující ohne DK v kyčli do 90°. Při pokusu o následné natažení (extenzi) kolene vzniká silná bolest a reflexní odpor flexorů stehna (pacient nedovolí extenzi v koleni nad 135°).</p>\n                        </div>\n                        <div class=\"p-3 rounded-lg bg-slate-900 border border-slate-700\">\n                            <span class=\"font-bold text-purple-300\">4. Příznak trojnožky (Amosův příznak):</span>\n                            <p class=\"text-xs text-slate-300 mt-1\">Při posazení na lůžku se pacient nemůže posadit bez opory rukou vzadu za zády (opírá se o ruce jako o třetí nohu, aby odlehčil napětí mening).</p>\n                        </div>\n                    </div>\n                "
          },
          {
            "title": "3. Diferenciální diagnostika: Meningitida vs. SAB vs. Meningismus",
            "color": "indigo",
            "content": "\n                    <div class=\"overflow-x-auto my-3\">\n                        <table class=\"min-w-full text-xs text-left text-slate-200 border border-slate-700\">\n                            <thead class=\"bg-slate-800 text-cyan-300 uppercase font-mono\">\n                                <tr>\n                                    <th class=\"p-2 border border-slate-700\">Jednotka</th>\n                                    <th class=\"p-2 border border-slate-700\">Nástup a charakter</th>\n                                    <th class=\"p-2 border border-slate-700\">Teplota / Laboratoř</th>\n                                    <th class=\"p-2 border border-slate-700\">Nález v likvoru</th>\n                                </tr>\n                            </thead>\n                            <tbody>\n                                <tr class=\"border-b border-slate-800 bg-slate-900/50\">\n                                    <td class=\"p-2 font-bold text-rose-400\">Akutní bakteriální meningitida</td>\n                                    <td class=\"p-2\">Rychlý (hodiny), sepse, petechie/purpura (meningokok), alterace vědomí</td>\n                                    <td class=\"p-2 text-rose-300\">Horečka > 38.5 °C, vysoké CRP a prokalcitonin</td>\n                                    <td class=\"p-2 text-amber-300 font-bold\">Zkalený/hnisavý likvor, tisíce neutrofilů, nízká glukóza (< 40 % glykémie), vysoký laktát a bílkovina</td>\n                                </tr>\n                                <tr class=\"border-b border-slate-800\">\n                                    <td class=\"p-2 font-bold text-amber-400\">Subarachnoidální krvácení (SAB)</td>\n                                    <td class=\"p-2 text-rose-400 font-bold\">Bleskový vznik ('úder blesku / baseballovou pálkou'), bez prodromů</td>\n                                    <td class=\"p-2\">Zpočátku afebrilní, leukocytóza bez elevace CRP</td>\n                                    <td class=\"p-2 text-rose-400 font-bold\">Krvavý/xantochromní likvor (po centrifugaci žlutavý), erytrocyty, siderofágy</td>\n                                </tr>\n                                <tr class=\"bg-slate-900/50\">\n                                    <td class=\"p-2 font-bold text-sky-300\">Meningismus</td>\n                                    <td class=\"p-2\">Meningeální dráždění při vysoké horečce u extrakraniální infekce (angína, pneumonie)</td>\n                                    <td class=\"p-2\">Závisí na primární infekci</td>\n                                    <td class=\"p-2 text-emerald-400 font-bold\">Zcela normální nález v moku (sterilní, čirý)</td>\n                                </tr>\n                            </tbody>\n                        </table>\n                    </div>\n                "
          }
        ]
      },
      "recall": {
        "scenarios": [
          {
            "id": "rec-q15-1",
            "title": "Kazuistika: Mladík s bleskovou bolestí hlavy a opozicí šíje bez horečky",
            "question": "24letý sportovec pocítil při zvedání činky náhlou extrémně prudkou bolest hlavy v záhlaví ('jako úder obuškem'), po které zvracel. Při vyšetření je afebrilní, při vědomí, šíje vázne na 3 prsty, Brudzinski I pozitivní. Nativní CT mozku provedené 2 hodiny po vzniku potíží je negativní. Jaký je další obligátní diagnostický krok?",
            "answer": "Při negativním nativním CT mozku u pacienta s klinickým podezřením na subarachnoidální krvácení (SAB) je OBLIGÁTNÍ provést lumbální punkci (s odstupem optimálně 6–12 hodin od vzniku potíží pro rozvoj xantochromie způsobené rozpadem erytrocytů na oxyhemoglobin a bilirubin). Likvor se centrifuguje – xantochromní supernatant potvrzuje SAB i při negativním CT.",
            "pearl": "Při podezření na bakteriální meningitidu musí být antibiotika (ceftriaxon + ampicilin + dexamethason) podána do 60 minut od příchodu; pokud CT zdrží lumbální punkci, odeberte hemokultury a podejte ATB IHNED ještě před CT!"
          }
        ]
      },
      "cards": [
        {
          "id": "fc-q15-1",
          "front": "Jak se vyšetřuje a hodnotí Brudzinského šíjový příznak (Brudzinski I)?",
          "back": "Pacient leží na zádech. Vyšetřující pasivně předkloní (flektuje) hlavu pacienta. Test je <strong>pozitivní, pokud pacient reflexně flektuje dolní končetiny v kolenou a kyčlích</strong>.",
          "hint": "Flexe hlavy vyvolá flexi nohou."
        },
        {
          "id": "fc-q15-2",
          "front": "Jaký je nález v likvoru u akutní hnisavé (bakteriální) meningitidy?",
          "back": "1. <strong>Vzhled:</strong> Zkalený až hnisavý (opakní).<br>2. <strong>Cytologie:</strong> Masivní pleocytóza (stovky až tisíce elementů, převaha <em>polymorfonukleárních neutrofilů</em>).<br>3. <strong>Biochemie:</strong> Vysoký protein (bílkovina), <strong>extrémně nízká glukóza</strong> (< 40 % glykémie) a <strong>vysoký laktát (> 3,5 mmol/l)</strong>.",
          "hint": "Neutrofily, nízká glukóza, vysoký laktát."
        },
        {
          "id": "fc-q15-3",
          "front": "Co je to xantochromie likvoru a co prokazuje?",
          "back": "Žlutavé až nažloutlé zbarvení supernatantu mozkomíšního moku <strong>po centrifugaci</strong> způsobené přítomností bilirubinu a hemoglobinu z rozpadlých erytrocytů. Prokazuje <strong>subarachnoidální krvácení (SAB)</strong> a odlišuje ho od arteficiálního zakrvácení při traumatické punkci.",
          "hint": "Žlutý supernatant po centrifugaci moku."
        }
      ],
      "quiz": [
        {
          "id": "q15-test1",
          "question": "Při vyšetření Kernigova příznaku vyšetřující provádí:",
          "options": [
            "Pasivní flexi dolní končetiny v kyčli do 90° a následný pokus o extenzi v kolenním kloubu",
            "Poklep kladívkem pod patelu",
            "Tlak prstem na processus mastoideus",
            "Rotaci hlavy v krční páteři"
          ],
          "correctIndex": 0,
          "explanation": "Kernigův příznak se testuje pokusem o extenzi bérce při 90° flexi v kyčli; reflexní spazmus hamstringů způsobený meningeálním drážděním extenzi kolene zablokuje a vyvolá bolest."
        },
        {
          "id": "q15-test2",
          "question": "Pro meningismus (na rozdíl od skutečné meningitidy) je typické:",
          "options": [
            "Přítomnost meningeálních příznaků při vysoké horečce, ale s NORMÁLNÍM biochemickým i cytologickým nálezem v moku",
            "Nález tisíců granulocytů v mozkomíšním moku",
            "Prudký pokles glukózy v likvoru",
            "Přítomnost xantochromie"
          ],
          "correctIndex": 0,
          "explanation": "Meningismus je funkční dráždění mozkových plen (např. při těžké viróze, chřipce, angíně) s pozitivními meningeálními jevy, ale s normálním, sterilním nálezem v mozkomíšním moku."
        }
      ]
    },
    {
      "id": "q16-vysetreni-novorozencu-kojencu",
      "number": 16,
      "section": "obecna",
      "sectionLabel": "Obecná neurologie",
      "badgePrefix": "O16",
      "title": "Vyšetření novorozenců a kojenců",
      "shortDesc": "Vývojová neurologie, primitivní neonatální reflexy (Moorův, sací, úchopový, asymetrický tonický šíjový ATŠR), svalový tonus (trakční test), posturální reaktivita dle Vojty a syndrom dětské mozkové obrny (DMO).",
      "category": "vysetreni_systemy",
      "badge": "Vývojová neurologie",
      "badgeColor": "cyan",
      "theory": {
        "banner": {
          "tag": "Pediatrická neurologie • Vývoj",
          "title": "Neurologické vyšetření novorozence a kojence",
          "text": "Neurologické vyšetření dítěte hodnotí zralost nervového systému, spontánní motoriku, svalový tonus, reflexy a posturální reaktivitu. Přítomnost primitivních reflexů je v novorozeneckém věku fyziologická, jejich perzistence po 4.–6. měsíci však signalizuje patologii (např. DMO)."
        },
        "sections": [
          {
            "title": "1. Primitivní neonatální a axiální reflexy",
            "color": "cyan",
            "content": "\n                    <div class=\"space-y-3\">\n                        <div class=\"p-3 rounded-lg bg-slate-900 border border-slate-700\">\n                            <span class=\"font-bold text-cyan-300\">1. Moorův úlekový reflex:</span>\n                            <p class=\"text-xs text-slate-300 mt-1\">Při náhlém poklesu hlavičky nebo leknutí dítě provede 1. fázi: abdukci a extenzi horních končetin s otevřením dlaní, následovanou 2. fází: addukcí a flexí HKK („objetí“). Fyziologický do 4.–5. měsíce věku. Asymetrie svědčí pro porodní parézu brachiálního plexu nebo frakturu klíčku!</p>\n                        </div>\n                        <div class=\"p-3 rounded-lg bg-slate-900 border border-slate-700\">\n                            <span class=\"font-bold text-sky-300\">2. Palmární a plantární úchopový reflex:</span>\n                            <p class=\"text-xs text-slate-300 mt-1\">Tlak na dlaň či plosku nohy vyvolá silnou flexi prstů. Palmární mizí kolem 4.–6. měsíce (podmínka pro volní úchop), plantární kolem 10.–12. měsíce (podmínka pro samostatný stoj a chůzi).</p>\n                        </div>\n                        <div class=\"p-3 rounded-lg bg-slate-900 border border-slate-700\">\n                            <span class=\"font-bold text-indigo-300\">3. Asymetrický tonický šíjový reflex (ATŠR - „poloha šermíře“):</span>\n                            <p class=\"text-xs text-slate-300 mt-1\">Při otočení hlavy k jedné straně dochází k extenzi končetin na straně obličeje (faciální strana) a flexi na straně záhlaví (okcipitální strana). Musí vymizet do 6. měsíce.</p>\n                        </div>\n                        <div class=\"p-3 rounded-lg bg-slate-900 border border-slate-700\">\n                            <span class=\"font-bold text-purple-300\">4. Sací a hledací reflex (Rooting reflex):</span>\n                            <p class=\"text-xs text-slate-300 mt-1\">Dotyk u koutku úst vyvolá otočení hlavičky k podnětu a rytmické sání. Integrován v mozkovém kmeni.</p>\n                        </div>\n                    </div>\n                "
          },
          {
            "title": "2. Vyšetření svalového tonu a trakční test",
            "color": "sky",
            "content": "\n                    <ul class=\"list-disc pl-5 space-y-1 mb-3 text-sm\">\n                        <li><strong>Fyziologický novorozenecký tonus:</strong> Fyziologická <em>flekční hypertonie</em> na všech čtyřech končetinách (převaha flexorů).</li>\n                        <li><strong>Trakční zkouška (Pull-to-sit test):</strong> Dítě je za ruce z polohy na zádech plynule přitahováno do sedu:\n                            <ul class=\"list-circle pl-5 mt-1\">\n                                <li><em>Norma (zralý novorozenec):</em> Udrží hlavičku v ose těla alespoň krátkodobě, flexe v loktech a kolenou.</li>\n                                <li><em>Hypotonický syndrom (Floppy infant):</em> Hlava visí pasivně dozadu (head lag), končetiny jsou zcela chabé v extenzi (abnormní po 3. měsíci).</li>\n                            </ul>\n                        </li>\n                        <li><strong>Příznak šály (Scarf sign):</strong> Pasivní přetažení lokte přes hrudník. U hypotonie loket snadno překročí střední čáru až k opačnému rameni.</li>\n                    </ul>\n                "
          },
          {
            "title": "3. Dětská mozková obrna (DMO) a varovné známky",
            "color": "indigo",
            "content": "\n                    <p class=\"mb-2 text-sm\"><strong>Dětská mozková obrna (DMO / Cerebral Palsy):</strong> Neeprogredující porucha vývoje motoriky a postury v důsledku časného poškození nezralého mozku (perinatální hypoxie, asfyxie, periventrikulární leukomalacie u nedonošenců):</p>\n                    <ul class=\"list-disc pl-5 space-y-1 mb-3 text-sm\">\n                        <li><strong>Forma spastická (nejčastější):</strong> Diplegická (Littleova nemoc - převaha postižení DKK, nůžkovité křížení nohou), hemiplegická, kvadruplegická.</li>\n                        <li><strong>Forma dyskinetická (athetoidní):</strong> Často po těžké novorozenecké žloutence (jádrový ikterus - poškození bazálních ganglií).</li>\n                        <li><strong>Forma ataktická a hypotonická:</strong> Mozečková dysfunkce.</li>\n                        <li><strong>Varovné známky opoždění:</strong> Neudrží hlavičku ve 3 měsících, nesedí v 8–9 měsících, nestojí v 1 roku, asymetrie pohybů před 1. rokem věku (časná lateralizace je VŽDY patologická!).</li>\n                    </ul>\n                "
          }
        ]
      },
      "recall": {
        "scenarios": [
          {
            "id": "rec-q16-1",
            "title": "Kazuistika: Novorozenec po těžkém porodu s asymetrií Moorova reflexu",
            "question": "Novorozenec po protrahovaném porodu koncem pánevním s dystokií ramének vykazuje při Moorově testu plnou extenzi a abdukci levé horní končetiny, zatímco pravá horní končetina leží bezvládně podél těla v addukci a vnitřní rotaci, ruka visí v pronaci. O jakou diagnózu se jedná a který kořenový plexus je poraněn?",
            "answer": "Jedná se o horní typ porodní parézy brachiálního plexu (Duchenne-Erbova obrna) s lézí kořenů C5–C6 (postižení m. deltoideus, m. biceps brachii a m. brachioradialis). Končetina visí podél těla v addukci a vnitřní rotaci s pronovaným předloktím ('poloha číšníka čekajícího na spropitné'). Moorův reflex je na postižené straně nevýbavný.",
            "pearl": "Pokud si všimnete, že kojenec před 12. měsícem věku preferuje jednu ruku (např. v 6 měsících uchopuje hračky výhradně pravou rukou), nejde o 'šikovného praváka', ale o suspektní hemiparézu levé horní končetiny (časná lateralizace je patologická)!"
          }
        ]
      },
      "cards": [
        {
          "id": "fc-q16-1",
          "front": "Co je to Moorův reflex a do kterého měsíce věku je fyziologický?",
          "back": "Úlekový reflex vyvolaný náhlým poklesem hlavičky: 1. fáze abdukce a extenze HKK s rozevřením dlaní, 2. fáze addukce a flexe HKK. Fyziologický je <strong>do 4.–5. měsíce věku</strong>.",
          "hint": "Úlekový reflex 'objetí'."
        },
        {
          "id": "fc-q16-2",
          "front": "Popište asymetrický tonický šíjový reflex (ATŠR).",
          "back": "Při pasivním otočení hlavičky k jedné straně dochází k <strong>extenzi končetin na straně obličeje a flexi na straně záhlaví</strong> ('postoj šermíře'). Musí vymizet do 6. měsíce.",
          "hint": "Postoj šermíře."
        },
        {
          "id": "fc-q16-3",
          "front": "Co charakterizuje diplegickou formu dětské mozkové obrny (Littleovu nemoc)?",
          "back": "Spastická paraparéza s <strong>dominantním postižením dolních končetin</strong>, spasticitou adduktorů kyčlí (nůžkovité křížení končetin při chůzi) a chůzí po špičkách (pes equinovarus). Častá u nedonošených dětí.",
          "hint": "DMO s převahou na DKK a nůžkovitou chůzí."
        }
      ],
      "quiz": [
        {
          "id": "q16-test1",
          "question": "Perzistence primitivních novorozeneckých reflexů (např. Moorova reflexu či ATŠR) po 6. měsíci věku svědčí pro:",
          "options": [
            "Fyziologické urychlení psychomotorického vývoje",
            "Opoždění maturace CNS a suspektní rozvoj dětské mozkové obrny (DMO)",
            "Výhradně periferní lézi n. peroneus",
            "Nedostatek vápníku v potravě"
          ],
          "correctIndex": 1,
          "explanation": "Primitivní reflexy musí v průběhu prvního půlroku vyhasnout díky maturaci mozkové kůry a descendentní inhibici; jejich perzistence je klíčovým varovným signálem centrální motorické léze (DMO)."
        },
        {
          "id": "q16-test2",
          "question": "Při vyšetření novorozence zjistíte, že při tahu za ruce do sedu (trakční test) hlavička visí pasivně dozadu a končetiny jsou zcela chabé. Tento nález označujeme jako:",
          "options": [
            "Normální nález u ročního dítěte",
            "Hypotonický syndrom (Floppy infant)",
            "Spastickou tetraplegii",
            "Rigiditu bazálních ganglií"
          ],
          "correctIndex": 1,
          "explanation": "Ztráta tonu s pasivním přepadáváním hlavy (head lag) a chabostí končetin charakterizuje syndrom hypotonického dítěte (Floppy infant syndrome - např. spinální svalová atrofie SMA, kongenitální myopatie)."
        }
      ]
    },
    {
      "id": "q17-zobrazovaci-metody-ct-mr",
      "number": 17,
      "section": "obecna",
      "sectionLabel": "Obecná neurologie",
      "badgePrefix": "O17",
      "title": "Zobrazovací metody v neurologii, rozdíl mezi CT a MR vyšetřením",
      "shortDesc": "Výpočetní tomografie (nativní CT mozku, CT angiografie CTA, CT perfuze CTP), magnetická rezonance (T1, T2, FLAIR, DWI/ADC, T2* GRE/SWI), indikace u iktů, krvácení, demyelinizace a kontraindikace.",
      "category": "paraklinika",
      "badge": "CT vs. MR",
      "badgeColor": "cyan",
      "theory": {
        "banner": {
          "tag": "Neuroradiologie • Diagnostika",
          "title": "Zobrazovací metody v moderní neurologii",
          "text": "Nativní CT mozku je metodou 1. volby pro urgentní vyloučení intrakraniálního krvácení a časné známky ischémie. Magnetická rezonance (MR) je suverénní metodou pro zobrazení mozkového parenchymu, zadní jámy lební, demyelinizačních ložisek a míchy."
        },
        "sections": [
          {
            "title": "1. Výpočetní tomografie (CT) v neurologii",
            "color": "cyan",
            "content": "\n                    <ul class=\"list-disc pl-5 space-y-1 mb-3 text-sm\">\n                        <li><strong>Princip:</strong> Rentgenové záření s detektory měřící hustotu tkání v Hounsfieldových jednotkách (HU): kost +1000 HU (bílá/hyperdenzní), čerstvá krev +60 až +80 HU (hyperdenzní), šedá hmota +35–40 HU, bílá hmota +25–30 HU, likvor 0 HU (hypodenzní), vzduch -1000 HU (černá).</li>\n                        <li><strong>Indikace:</strong>\n                            <ul class=\"list-circle pl-5 mt-1\">\n                                <li><em>Akutní kraniocerebrální trauma:</em> Fraktury lebky, epidurální/subdurální hematom, kontuze mozku.</li>\n                                <li><em>Podezření na akutní CMP:</em> Okamžité odlišení krvácení (hyperdenzní) od ischémie (normální nález v prvních hodinách nebo časné známky: hyperdense MCA sign, setření diferenciacie šedé a bílé hmoty, hypodenzita bazálních ganglií).</li>\n                                <li><em>CTA (CT angiografie):</em> Detekce uzávěru velkých tepen (LVO - a. carotis interna, a. cerebri media M1) a aneuryzmat.</li>\n                                <li><em>CT perfuze (CTP):</em> Stanovení ischemického jádra (CBF pokles) vs. penumbry (zachránitelné tkáně - Tmax prodloužení).</li>\n                            </ul>\n                        </li>\n                        <li><strong>Výhody:</strong> Extrémně rychlé (sekundy), široká dostupnost, výborné pro kosti a čerstvou krev. <strong>Nevýhody:</strong> Radiační zátěž, horší zobrazení zadní jámy (artefakty od kosti skalní) a míchy.</li>\n                    </ul>\n                "
          },
          {
            "title": "2. Magnetická rezonance (MR) a klíčové sekvence",
            "color": "sky",
            "content": "\n                    <div class=\"space-y-3\">\n                        <div class=\"p-3 rounded-lg bg-slate-900 border border-slate-700\">\n                            <span class=\"font-bold text-cyan-300\">T1 vážený obraz (Anatomický obraz):</span>\n                            <p class=\"text-xs text-slate-300 mt-1\">Likvor je <strong>tmavý (hypointenzní)</strong>, bílá hmota světlá, šedá hmota šedá. Podání gadoliniového kontrastu slouží k detekci poruchy hematoencefalické bariéry (tumory, aktivní RS plaky, abscesy).</p>\n                        </div>\n                        <div class=\"p-3 rounded-lg bg-slate-900 border border-slate-700\">\n                            <span class=\"font-bold text-sky-300\">T2 a FLAIR (Patologický obraz):</span>\n                            <p class=\"text-xs text-slate-300 mt-1\"><strong>T2:</strong> Likvor i patologie (edém, zánět, glióza, ischémie) jsou <strong>světlé (hyperintenzní)</strong>.<br><strong>FLAIR (Fluid-Attenuated Inversion Recovery):</strong> T2 vážení s <em>potlačením signálu volného likvoru (likvor je černý)</em> -> periventrikulární patologie (plaky roztroušené sklerózy, subarachnoidální krev, edém) nádherně 'svítí' bíle.</p>\n                        </div>\n                        <div class=\"p-3 rounded-lg bg-slate-900 border border-slate-700\">\n                            <span class=\"font-bold text-emerald-400 font-bold\">DWI a ADC (Difuzně vážený obraz - Akutní ischémie):</span>\n                            <p class=\"text-xs text-slate-300 mt-1\">Detekuje <strong>cytotoxický edém</strong> a restrikci difuze molekul vody během několika minut od začátku ischémie! Čerstvá ischémie má <strong>vysoký signál (hyperintenzní) na DWI</strong> a <strong>nízký signál (hypointenzní) na ADC mapě</strong> (DWI/ADC mismatch).</p>\n                        </div>\n                        <div class=\"p-3 rounded-lg bg-slate-900 border border-slate-700\">\n                            <span class=\"font-bold text-amber-300\">T2* GRE / SWI (Susceptibilní vážení):</span>\n                            <p class=\"text-xs text-slate-300 mt-1\">Extrémně citlivé na krevní deriváty (hemosiderin) a kalcifikace -> mikrohemoragie, kavernomy, cévní malformace (zobrazují se jako 'černý blooming artefakt').</p>\n                        </div>\n                    </div>\n                "
          },
          {
            "title": "3. Srovnání CT vs. MR a kontraindikace",
            "color": "indigo",
            "content": "\n                    <div class=\"overflow-x-auto my-3\">\n                        <table class=\"min-w-full text-xs text-left text-slate-200 border border-slate-700\">\n                            <thead class=\"bg-slate-800 text-cyan-300 uppercase font-mono\">\n                                <tr>\n                                    <th class=\"p-2 border border-slate-700\">Vlastnost</th>\n                                    <th class=\"p-2 border border-slate-700\">CT mozku</th>\n                                    <th class=\"p-2 border border-slate-700\">MR mozku</th>\n                                </tr>\n                            </thead>\n                            <tbody>\n                                <tr class=\"border-b border-slate-800 bg-slate-900/50\">\n                                    <td class=\"p-2 font-bold\">Čas vyšetření</td>\n                                    <td class=\"p-2 text-emerald-400\">Sekundy (urgentní stavy)</td>\n                                    <td class=\"p-2 text-rose-300\">15–40 minut</td>\n                                </tr>\n                                <tr class=\"border-b border-slate-800\">\n                                    <td class=\"p-2 font-bold\">Akutní krev (SAB, ICH)</td>\n                                    <td class=\"p-2 text-emerald-400\">Vynikající (bílá hyperdenzita)</td>\n                                    <td class=\"p-2\">Výborné na SWI/FLAIR, ale časově náročnější</td>\n                                </tr>\n                                <tr class=\"border-b border-slate-800 bg-slate-900/50\">\n                                    <td class=\"p-2 font-bold\">Akutní ischémie v 1. hodině</td>\n                                    <td class=\"p-2 text-rose-300\">Často zcela normální nález</td>\n                                    <td class=\"p-2 text-emerald-400 font-bold\">100% záchyt na DWI během minut</td>\n                                </tr>\n                                <tr class=\"border-b border-slate-800\">\n                                    <td class=\"p-2 font-bold\">Zadní jáma a mícha</td>\n                                    <td class=\"p-2 text-rose-300\">Špatná vizualizace (kostní artefakty)</td>\n                                    <td class=\"p-2 text-emerald-400 font-bold\">Zlatý standard</td>\n                                </tr>\n                                <tr class=\"bg-slate-900/50\">\n                                    <td class=\"p-2 font-bold\">Kontraindikace</td>\n                                    <td class=\"p-2\">Těhotenství (relativní), alergie na jodový kontrast (u CTA)</td>\n                                    <td class=\"p-2 text-rose-400 font-bold\">Nekompatibilní kardiostimulátor/ICD, feromagnetické cizí těleso v oku, feromagnetické cévní svorky, těžká klaustrofobie</td>\n                                </tr>\n                            </tbody>\n                        </table>\n                    </div>\n                "
          }
        ]
      },
      "recall": {
        "scenarios": [
          {
            "id": "rec-q17-1",
            "title": "Kazuistika: Akutní afázie s normálním nativním CT nálezem",
            "question": "65letý muž byl přivezen 45 minut po náhlém vzniku pravostranné hemiparézy a Brocovy afázie. Nativní CT mozku je zcela bez patologie, bez známek krvácení i hypodenzity. Lze i přes normální CT podat systémovou trombolýzu a proč je CT v této fázi normální?",
            "answer": "ANO, systémová trombolýza (i.v. altepláza/tenektepláza) je plně indikována! Účelem akutního nativního CT mozku v 'okně' pro trombolýzu je VYLOUČIT KRVÁCENÍ (které je kontraindikací). Ischemický cytotoxický edém se na nativním CT zobrazí jako zřetelná hypodenzita až po několika hodinách (obvykle za 3–6 h). Pokud bychom čekali na hypodenzitu na CT, pacient by propásl terapeutické okno.",
            "pearl": "Na MR sekvenci DWI (difuzně vážený obraz) 'svítí' akutní ischemické ložisko už do několika minut od zástavy průtoku krve!"
          }
        ]
      },
      "cards": [
        {
          "id": "fc-q17-1",
          "front": "Jaký je hlavní rozdíl v zobrazení likvoru mezi T1, T2 a FLAIR sekvencí na MR mozku?",
          "back": "<strong>T1:</strong> Likvor je <strong>černý (hypointenzní)</strong>.<br><strong>T2:</strong> Likvor je <strong>zářivě bílý (hyperintenzní)</strong>.<br><strong>FLAIR:</strong> Likvor je <strong>potlačen do černa</strong>, zatímco patologie a edém kolem komor zůstávají bílé.",
          "hint": "Barva likvoru v T1, T2 a FLAIR."
        },
        {
          "id": "fc-q17-2",
          "front": "Která MR sekvence prokáže akutní mozkový infarkt během několika minut od vzniku?",
          "back": "<strong>DWI (Diffusion-Weighted Imaging)</strong> v kombinaci s <strong>ADC mapou</strong>. Ischémie se zobrazuje jako restrikce difuze (hyperintenzní na DWI, hypointenzní na ADC).",
          "hint": "Restrikce difuze vody."
        },
        {
          "id": "fc-q17-3",
          "front": "Vyjmenujte 3 hlavní absolutní kontraindikace vyšetření magnetickou rezonancí (MR).",
          "back": "1. <strong>Nekompatibilní kardiostimulátor / ICD / neurostimulátor</strong>.<br>2. <strong>Feromagnetické kovové cizí těleso v orbitě / oku</strong>.<br>3. Starší <strong>feromagnetické intrakraniální cévní svorky (aneurysm clips)</strong>.",
          "hint": "Kovy a elektronické implantáty."
        }
      ],
      "quiz": [
        {
          "id": "q17-test1",
          "question": "Na nativním CT mozku se čerstvé intrakraniální krvácení zobrazuje jako:",
          "options": [
            "Hypodenzní (tmavá) oblast",
            "Hyperdenzní (bílá/světlá) oblast s denzitou kolem +60 až +80 HU",
            "Oblast se signálovou ztrátou",
            "Striktně izodenzní se vzduchem"
          ],
          "correctIndex": 1,
          "explanation": "Čerstvý krevní extravazát bohatý na hemoglobin má vysokou hustotu pro rentgenové záření a na nativním CT se zobrazuje jako zářivě bílá hyperdenzita (+60 až +80 HU)."
        },
        {
          "id": "q17-test2",
          "question": "Která zobrazovací metoda je suverénní pro diagnostiku demyelinizačních plak u roztroušené sklerózy a lézí míchy?",
          "options": [
            "Nativní CT mozku",
            "Magnetická rezonance (MR) v sekvencích T2, FLAIR a T1 s gadoliniem",
            "RTG lebky a krční páteře",
            "Klasická digitální subtrakční angiografie"
          ],
          "correctIndex": 1,
          "explanation": "MR s T2/FLAIR sekvencemi a T1 po aplikaci gadoliniového kontrastu je zlatým standardem pro detekci a diseminaci demyelinizačních plak RS v mozku a míše."
        }
      ]
    },
    {
      "id": "q18-principy-eeg-emg",
      "number": 18,
      "section": "obecna",
      "sectionLabel": "Obecná neurologie",
      "badgePrefix": "O18",
      "title": "Základní principy EEG a EMG",
      "shortDesc": "Elektroencefalografie (rytmy alfa, beta, theta, delta, epileptiformní grafoelementy hrot-vlna, provokační metody), elektromyografie (kondukční studie motorických a senzitivních nervů, jehlové EMG, neurogenní vs. myogenní léze).",
      "category": "paraklinika",
      "badge": "Elektrofyziologie",
      "badgeColor": "cyan",
      "theory": {
        "banner": {
          "tag": "Neurofyziologie • EEG & EMG",
          "title": "Elektroencefalografie a elektromyografie",
          "text": "Elektrofyziologické metody měří bioelektrickou aktivitu nervového systému. EEG registruje sumaci postsynaptických potenciálů mozkové kůry (epilepsie, encefalopatie, spánek). EMG hodnotí funkci periferních nervů (kondukční studie) a kosterních svalů (jehlová elektromyografie)."
        },
        "sections": [
          {
            "title": "1. Elektroencefalografie (EEG) – Základní rytmy a grafoelementy",
            "color": "cyan",
            "content": "\n                    <ul class=\"list-disc pl-5 space-y-1 mb-3 text-sm\">\n                        <li><strong>Fyziologické EEG rytmy (dle frekvence):</strong>\n                            <ul class=\"list-circle pl-5 mt-1\">\n                                <li><strong>Alfa rytmus (8–13 Hz):</strong> Dominantní rytmus bdělého dospělého se <em>zavřenýma očima v klidu</em>, maximum v okcipitální krajině. Reaktivní na otevření očí – <strong>Bergerův fenomén</strong> (blokáda alfa rytmu otevřením očí).</li>\n                                <li><strong>Beta rytmus (> 13–30 Hz):</strong> Rychlá aktivita s nízkou amplitudou, přítomná frontálně a centrálně, narůstá při duševní aktivitě nebo po benzodiazepinech.</li>\n                                <li><strong>Theta rytmus (4–7 Hz):</strong> Pomalá aktivita, fyziologická u dětí a v usínání (NREM 1 spánek); u bdělého dospělého ve zvýšené míře patologická (difuzní či ložiskové zpomalení).</li>\n                                <li><strong>Delta rytmus (< 4 Hz):</strong> Nejpomalejší aktivita s vysokou amplitudou, fyziologická v hlubokém spánku (NREM 3 - pomalovlnný spánek); u bdělého svědčí pro těžkou encefalopatii, kóma či strukturální ložiskovou lézi.</li>\n                            </ul>\n                        </li>\n                        <li><strong>Epileptiformní grafoelementy:</strong> Ostré vlny (sharp waves), hroty (spikes), komplexy hrot-vlna (spike-wave, např. typické 3 Hz generalizované komplexy u absencí v dětství).</li>\n                        <li><strong>Provokační metody:</strong> Fotostimulace (stroboskop), hyperventilace (3–4 minuty), spánková deprivace.</li>\n                    </ul>\n                "
          },
          {
            "title": "2. Elektromyografie (EMG) – Kondukční studie (Elektroneurografie - ENG)",
            "color": "sky",
            "content": "\n                    <p class=\"mb-2 text-sm\">Stimulace periferního nervu povrchovou elektrodou a snímání odpovědi:</p>\n                    <ul class=\"list-disc pl-5 space-y-1 mb-3 text-sm\">\n                        <li><strong>Motorická kondukční studie (CMAP):</strong> Hodnotí se distální motorická latence (DML), amplituda CMAP (koreluje s <em>počtem funkčních axonů</em>) a <strong>rychlost vedení nervem (MCV)</strong> (norma na HK > 50 m/s, na DK > 40 m/s – koreluje se <em>stavem myelinové pochvy</em>).</li>\n                        <li><strong>Senzitivní kondukční studie (SNAP):</strong> Amplituda a senzitivní rychlost vedení (SCV).</li>\n                        <li><strong>Demyelinizační léze (např. Guillain-Barré, CIDP, syndrom karpálního tunelu):</strong> Výrazné <em>zpomalení rychlosti vedení</em>, prodloužení latence, kondukční bloky a disperze.</li>\n                        <li><strong>Axonální léze (např. toxická/diabetická neuropatie):</strong> <em>Pokles amplitudy CMAP/SNAP</em> při relativně zachované či jen mírně snížené rychlosti vedení.</li>\n                    </ul>\n                "
          },
          {
            "title": "3. Jehlová EMG – Neurogenní vs. Myogenní nález",
            "color": "indigo",
            "content": "\n                    <div class=\"overflow-x-auto my-3\">\n                        <table class=\"min-w-full text-xs text-left text-slate-200 border border-slate-700\">\n                            <thead class=\"bg-slate-800 text-cyan-300 uppercase font-mono\">\n                                <tr>\n                                    <th class=\"p-2 border border-slate-700\">Fáze vyšetření</th>\n                                    <th class=\"p-2 border border-slate-700\">Neurogenní léze (Léze motoneuronu/axonu)</th>\n                                    <th class=\"p-2 border border-slate-700\">Myogenní léze (Myopatie, Myositida)</th>\n                                </tr>\n                            </thead>\n                            <tbody>\n                                <tr class=\"border-b border-slate-800 bg-slate-900/50\">\n                                    <td class=\"p-2 font-bold\">Spontánní aktivita v klidu</td>\n                                    <td class=\"p-2 text-rose-300 font-bold\">Fibrilace, pozitivní ostré vlny (PSW), fascikulace (známky aktivní denervace)</td>\n                                    <td class=\"p-2\">Může být přítomna u zánětlivých myositid (fibrilace), jinak klid</td>\n                                </tr>\n                                <tr class=\"border-b border-slate-800\">\n                                    <td class=\"p-2 font-bold\">Tvar akčních potenciálů (MUAP)</td>\n                                    <td class=\"p-2 text-cyan-300 font-bold\">Vysoká amplituda (obrovské MUAP), prodloužené trvání (reinervace)</td>\n                                    <td class=\"p-2 text-amber-300 font-bold\">Nízká amplituda, krátké trvání, vysoká polyfázie</td>\n                                </tr>\n                                <tr class=\"bg-slate-900/50\">\n                                    <td class=\"p-2 font-bold\">Interferenční obraz při volní síle</td>\n                                    <td class=\"p-2 text-rose-300 font-bold\">Jednoduchý / redukovaný obraz (úbytek jednotek, pálí vysokou frekvencí)</td>\n                                    <td class=\"p-2 text-cyan-300 font-bold\">Předčasný bohatý interferenční obraz při minimálním svalovém úsilí</td>\n                                </tr>\n                            </tbody>\n                        </table>\n                    </div>\n                "
          }
        ]
      },
      "recall": {
        "scenarios": [
          {
            "id": "rec-q18-1",
            "title": "Kazuistika: Fascikulace jazyka a svalová slabost na končetinách",
            "question": "56letý muž má 6 měsíců progredující slabost a atrofie drobných svalů rukou a nově viditelné spontánní záškuby svalů na stehnech a na jazyku. Na jehlovém EMG ve 3 různých etážích (bulbární, cervikální, lumbosakrální) jsou přítomny spontánní fibrilace, pozitivní ostré vlny a obrovské vysokovoltážní MUAP s redukovaným interferenčním vzorcem. O jakou chorobu se jedná?",
            "answer": "Jedná se o amyotrofickou laterální sklerózu (ALS). Jehlové EMG prokazuje generalizovanou lézi předních rohů míšních a motorických jader hlavových nervů s difuzní aktivní denervací (fibrilace, fascikulace) a chronickou reinervací (vysoké široké MUAP) ve více etážích CNS.",
            "pearl": "U syndromu karpálního tunelu je na kondukčních studiích EMG typickým nálezem izolované prodloužení distální motorické latence (DML) a zpomalení senzitivního vedení přes zápěstí na n. medianus při intaktním n. ulnaris."
          }
        ]
      },
      "cards": [
        {
          "id": "fc-q18-1",
          "front": "Jaká je frekvence fyziologického alfa rytmu na EEG a kdy se nejlépe zobrazí?",
          "back": "Frekvence <strong>8–13 Hz</strong>. Zobrazí se u bdělého relaxovaného člověka <strong>při zavřených očích v okcipitální krajině</strong>. Otevření očí vyvolá jeho vymizení (Bergerův fenomén).",
          "hint": "8–13 Hz a zavřené oči."
        },
        {
          "id": "fc-q18-2",
          "front": "Jaký je zásadní rozdíl v parametrech MUAP na jehlovém EMG mezi neurogenní a myogenní lézí?",
          "back": "<strong>Neurogenní léze:</strong> MUAP mají <strong>vysokou amplitudu</strong> a <strong>prodloužené trvání</strong> (obří potenciály z reinervace).<br><strong>Myogenní léze:</strong> MUAP mají <strong>nízkou amplitudu</strong> a <strong>zkrácené trvání</strong> (úbytek svalových vláken).",
          "hint": "Amplituda a trvání potenciálu."
        },
        {
          "id": "fc-q18-3",
          "front": "Co značí přítomnost fibrilací a pozitivních ostrých vln (PSW) v klidovém jehlovém EMG?",
          "back": "Značí <strong>aktivní denervaci svalových vláken</strong> (akutní či progredující poškození axonu nebo těla motoneuronu).",
          "hint": "Klidová spontánní aktivita."
        }
      ],
      "quiz": [
        {
          "id": "q18-test1",
          "question": "Generalizované synchronní komplexy hrot-vlna o frekvenci přesně 3 Hz na EEG jsou typickým nálezem u:",
          "options": [
            "Dětských absencí (petit mal)",
            "Ischemické cévní mozkové příhody",
            "Alzheimerovy demence",
            "Myasthenia gravis"
          ],
          "correctIndex": 0,
          "explanation": "Pravidelné generalizované komplexy hrot-vlna o frekvenci 3 Hz jsou patognomonickým elektroencefalografickým korelátem typických epileptických absencí (petit mal) u dětí."
        },
        {
          "id": "q18-test2",
          "question": "Při vyšetření rychlosti vedení periferním nervem (ENG) svědčí výrazné zpomalení rychlosti vedení při zachované amplitudě CMAP pro:",
          "options": [
            "Primárně demyelinizační lézi periferního nervu",
            "Primárně těžkou axonální degeneraci",
            "Duchenneovu svalovou dystrofii",
            "Mozečkový infarkt"
          ],
          "correctIndex": 0,
          "explanation": "Rychlost vedení vzruchu nervem přímo závisí na integritě myelinové pochvy a saltatorním vedení; její izolovaný pokles je známkou demyelinizace (např. CIDP, syndrom Guillain-Barré)."
        }
      ]
    },
    {
      "id": "q19-vysetreni-mozkomisniho-moku",
      "number": 19,
      "section": "obecna",
      "sectionLabel": "Obecná neurologie",
      "badgePrefix": "O19",
      "title": "Vyšetření mozkomíšního moku",
      "shortDesc": "Indikace a kontraindikace lumbální punkce (LP), technika odběru v L3/L4 nebo L4/L5, makroskopický vzhled, cytologie, biochemie (protein, glukóza, laktát), likvorové syndromy (purulentní, serózní, SAB) a oligoklonální pásy (OCB).",
      "category": "paraklinika",
      "badge": "Likvorologie",
      "badgeColor": "cyan",
      "theory": {
        "banner": {
          "tag": "Laboratorní neurologie • CSF",
          "title": "Analýza mozkomíšního moku a lumbální punkce",
          "text": "Lumbální punkce (LP) umožňuje přímé vyšetření likvorového kompartmentu. Poskytuje zásadní informace o infekcích CNS (meningitidy, encefalitidy), subarachnoidálním krvácení, autoimunitních zánětech (roztroušená skleróza, polyradikuloneuritidy) i maligních infiltracích."
        },
        "sections": [
          {
            "title": "1. Technika lumbální punkce, indikace a kontraindikace",
            "color": "cyan",
            "content": "\n                    <ul class=\"list-disc pl-5 space-y-1 mb-3 text-sm\">\n                        <li><strong>Anatomická lokalizace:</strong> Vpich v meziobratlovém prostoru <strong>L3/L4 nebo L4/L5</strong> (spojnice hřebenů kyčelních kostí = Jacobyho linie odpovídá trnu L4). Mícha u dospělého končí v úrovni L1/L2 (conus medullaris) -> v lumbálním vaku jsou již jen kořeny cauda equina, které jehla odtlačí.</li>\n                        <li><strong>Indikace:</strong> Podezření na neuroinfekci (meningitida, encefalitida), podezření na SAB (při negativním CT), roztroušená skleróza (oligoklonální pásy), Guillain-Barré (proteinocytologická disociace), karcinomatóza plen, normotenzní hydrocefalus (tap-test).</li>\n                        <li><strong>KONTRAINDIKACE:</strong>\n                            <ul class=\"list-circle pl-5 mt-1 text-rose-300\">\n                                <li><strong>Absolutní:</strong> Intrakraniální expanze s edémem mozku a rizikem herniace (před LP je nutné CT mozku při ložiskovém nálezu či poruše vědomí!), infekce v místě vpichu (flegmóna zad).</li>\n                                <li><strong>Relativní:</strong> Těžká koagulopatie (INR > 1.5, trombocyty < 50×10^9/l), antikoagulační léčba (nutno vysadit dle doporučení).</li>\n                            </ul>\n                        </li>\n                    </ul>\n                "
          },
          {
            "title": "2. Základní parametry a normální hodnoty likvoru",
            "color": "sky",
            "content": "\n                    <div class=\"space-y-2 text-xs text-slate-300\">\n                        <div class=\"p-2 rounded bg-slate-900 border border-slate-700\">\n                            <strong class=\"text-cyan-300\">Vzhled:</strong> Čirý, bezbarvý (jako voda), netvoří koagulum.\n                        </div>\n                        <div class=\"p-2 rounded bg-slate-900 border border-slate-700\">\n                            <strong class=\"text-cyan-300\">Cytologie (Elementy):</strong> Do <strong>≤ 5 elementů / µl</strong> (výhradně lymfocyty a monocyty; nulová přítomnost granulocytů a erytrocytů).\n                        </div>\n                        <div class=\"p-2 rounded bg-slate-900 border border-slate-700\">\n                            <strong class=\"text-cyan-300\">Celková bílkovina (Proteinorahie):</strong> <strong>0,15–0,45 g/l</strong> (elevace značí poruchu hematoencefalické bariéry nebo intratekální syntézu).\n                        </div>\n                        <div class=\"p-2 rounded bg-slate-900 border border-slate-700\">\n                            <strong class=\"text-cyan-300\">Glukóza (Glykorachie):</strong> <strong>60 % paralelní glykémie v séru</strong> (poměr CSF/sérum > 0,6; fyziologicky cca 2,5–4,0 mmol/l).\n                        </div>\n                        <div class=\"p-2 rounded bg-slate-900 border border-slate-700\">\n                            <strong class=\"text-cyan-300\">Laktát:</strong> <strong>1,2–2,1 mmol/l</strong> (klíčový marker pro odlišení bakteriální a virové infekce!).\n                        </div>\n                    </div>\n                "
          },
          {
            "title": "3. Přehled likvorových syndromů",
            "color": "indigo",
            "content": "\n                    <div class=\"overflow-x-auto my-3\">\n                        <table class=\"min-w-full text-xs text-left text-slate-200 border border-slate-700\">\n                            <thead class=\"bg-slate-800 text-cyan-300 uppercase font-mono\">\n                                <tr>\n                                    <th class=\"p-2 border border-slate-700\">Syndrom</th>\n                                    <th class=\"p-2 border border-slate-700\">Elementy (Cytologie)</th>\n                                    <th class=\"p-2 border border-slate-700\">Bílkovina</th>\n                                    <th class=\"p-2 border border-slate-700\">Glukóza / Laktát</th>\n                                    <th class=\"p-2 border border-slate-700\">Typická diagnóza</th>\n                                </tr>\n                            </thead>\n                            <tbody>\n                                <tr class=\"border-b border-slate-800 bg-slate-900/50\">\n                                    <td class=\"p-2 font-bold text-rose-400\">Purulentní (Hnisavý)</td>\n                                    <td class=\"p-2 text-rose-300 font-bold\">Stovky až tisíce/µl (převaha neutrofilních granulocytů)</td>\n                                    <td class=\"p-2 text-rose-300\">Výrazně zvýšená (> 1,0–5,0 g/l)</td>\n                                    <td class=\"p-2 text-rose-300 font-bold\">Glukóza prudce snížená (< 0,4 glykémie), Laktát > 3,5 mmol/l</td>\n                                    <td class=\"p-2\">Bakteriální meningitida (Meningokok, Pneumokok, Listeria)</td>\n                                </tr>\n                                <tr class=\"border-b border-slate-800\">\n                                    <td class=\"p-2 font-bold text-sky-300\">Serózní (Virový)</td>\n                                    <td class=\"p-2 text-sky-300\">Desítky až stovky/µl (převaha mononukleárů / lymfocytů)</td>\n                                    <td class=\"p-2\">Normální nebo mírně zvýšená (< 1,0 g/l)</td>\n                                    <td class=\"p-2 text-emerald-400 font-bold\">Glukóza NORMÁLNÍ, Laktát NORMÁLNÍ (< 2,5 mmol/l)</td>\n                                    <td class=\"p-2\">Virová meningitida / meningoencefalitida (Enteroviry, Klíšťová encefalitida, HSV)</td>\n                                </tr>\n                                <tr class=\"border-b border-slate-800 bg-slate-900/50\">\n                                    <td class=\"p-2 font-bold text-amber-300\">Proteinocytologická disociace</td>\n                                    <td class=\"p-2 text-emerald-400 font-bold\">Normální počet elementů (≤ 5/µl)</td>\n                                    <td class=\"p-2 text-rose-400 font-bold\">Vysoká bílkovina (> 1,0–3,0 g/l)</td>\n                                    <td class=\"p-2\">Glukóza normální</td>\n                                    <td class=\"p-2\">Syndrom Guillain-Barré (AIDP), CIDP, komprese míchy (Froinův syndrom)</td>\n                                </tr>\n                                <tr class=\"bg-slate-900/50\">\n                                    <td class=\"p-2 font-bold text-purple-300\">Intratekální syntéza oligoklonálních pásů (OCB)</td>\n                                    <td class=\"p-2\">Mírná lymfocytóza (10–30/µl) nebo norma</td>\n                                    <td class=\"p-2\">Norma nebo mírná elevace</td>\n                                    <td class=\"p-2 font-bold text-purple-400\">Přítomnost ≥ 2 oligoklonálních IgG pásů v likvoru, které CHYBÍ v séru (Typ 2)</td>\n                                    <td class=\"p-2\">Roztroušená skleróza (RS, pozitivní u 95 % pacientů)</td>\n                                </tr>\n                            </tbody>\n                        </table>\n                    </div>\n                "
          }
        ]
      },
      "recall": {
        "scenarios": [
          {
            "id": "rec-q19-1",
            "title": "Kazuistika: Horečka, somnolence a zkalený likvor s vysokým laktátem",
            "question": "22letý student byl přivezen pro febrilie 39.5 °C, prudkou bolest hlavy a petechie na stehnech. Likvor z lumbální punkce je lehce zakalený, obsahuje 2500 elementů/µl (90 % polymorfonukleárů), bílkovinu 3.2 g/l, laktát 5.8 mmol/l a poměr glukózy likvor/sérum 0.15. O jaký likvorový syndrom jde a jaká je okamžitá terapie?",
            "answer": "Jedná se o klasický purulentní likvorový syndrom způsobený akutní bakteriální (hnisavou) meningitidou (petechie vysoce svědčí pro Neisseria meningitidis). Okamžitě podáváme intravenózně širokospektrá antibiotika (ceftriaxon 2×2g i.v. + u starších/imunokompromitovaných ampicilin k pokrytí Listerie) společně s i.v. dexamethasonem (10 mg před nebo s první dávkou ATB k redukci zánětlivého edému a prevenci hluchoty).",
            "pearl": "U syndromu Guillain-Barré (AIDP) nacházíme v likvoru typickou 'proteinocytologickou disociaci' – výrazně vysokou bílkovinu při zcela normálním počtu buněk (žádné zánětlivé elementy)."
          }
        ]
      },
      "cards": [
        {
          "id": "fc-q19-1",
          "front": "V jaké výšce páteře se provádí lumbální punkce a proč?",
          "back": "V meziobratlovém prostoru <strong>L3/L4 nebo L4/L5</strong> (v úrovni crista iliaca). V této úrovni již mícha nepokračuje (conus medullaris končí v L1/L2) a v lumbálním vaku jsou pouze volné kořeny <em>cauda equina</em>.",
          "hint": "L3/L4 a konec míchy."
        },
        {
          "id": "fc-q19-2",
          "front": "Co je to proteinocytologická disociace v moku a u kterého onemocnění je typická?",
          "back": "Nález <strong>vysoké koncentrace bílkoviny</strong> při <strong>normálním počtu buněčných elementů (cytologie ≤ 5/µl)</strong>. Je typická pro <strong>syndrom Guillain-Barré (AIDP)</strong> a chronickou zánětlivou demyelinizační polyneuropatii (CIDP).",
          "hint": "Vysoký protein + normální buňky."
        },
        {
          "id": "fc-q19-3",
          "front": "Jaký likvorový nález oligoklonálních IgG pásů (OCB) svědčí pro roztroušenou sklerózu?",
          "back": "<strong>Izolovaná intratekální syntéza IgG (Typ 2):</strong> Přítomnost <strong>≥ 2 oligoklonálních pásů v likvoru</strong>, které <strong>nejsou přítomny v séru</strong> pacienta.",
          "hint": "Pásy v moku, které chybí v séru."
        }
      ],
      "quiz": [
        {
          "id": "q19-test1",
          "question": "Který biochemický parametr v mozkomíšním moku nejspolehlivěji odliší bakteriální hnisavou meningitidu od virové serózní meningitidy?",
          "options": [
            "Koncentrace sodíku a draslíku",
            "Hladina laktátu (u bakteriální > 3,5 mmol/l, u virové normální) a pokles poměru glukózy likvor/sérum",
            "Hladina kreatininu",
            "Množství bilirubinu"
          ],
          "correctIndex": 1,
          "explanation": "Bakterie spotřebovávají glukózu anaerobním metabolismem za masivní produkce laktátu; laktát nad 3,5 mmol/l s poklesem poměru glykorachie/glykémie pod 0,4 je jasným znakem bakteriální meningitidy."
        },
        {
          "id": "q19-test2",
          "question": "Při jakém podezření je lumbální punkce absolutně kontraindikována bez předchozího CT mozku?",
          "options": [
            "Při suspektní roztroušené skleróze",
            "Při intrakraniální ložiskové expanzi s edémem mozku a rizikem kónusu",
            "Při polyneuropatii dolních končetin",
            "Při migrenózním záchvatu"
          ],
          "correctIndex": 1,
          "explanation": "Při intrakraniální expanzi hrozí při lumbální punkci okamžitá fatální herniace (zaklínění) mozečkových tonzil do foramen magnum."
        }
      ]
    },
    {
      "id": "q20-vysetreni-stoje-chuze",
      "number": 20,
      "section": "obecna",
      "sectionLabel": "Obecná neurologie",
      "badgePrefix": "O20",
      "title": "Vyšetření stoje a chůze, základní poruchy stoje a chůze",
      "shortDesc": "Vyšetření stoje (Romberg I, II, III), Hautantova zkouška, chůze po špičkách, patách a tandemová chůze. Patologické typy chůze: spastická cirkumdukční (hemiparetická), diplegická nůžkovitá, paretická kohoutí (peroneální), ataktická (mozečková vs. senzorická), parkinsonská a apraxie chůze.",
      "category": "vysetreni_systemy",
      "badge": "Stoj & Chůze",
      "badgeColor": "cyan",
      "theory": {
        "banner": {
          "tag": "Neurologická propedeutika • Lokomoce",
          "title": "Vyšetření stoje, chůze a jejich poruchy",
          "text": "Stoj a chůze představují komplexní motorické akty vyžadující souhru motorické kůry, pyramidové dráhy, bazálních ganglií, mozečku, vestibulárního aparátu a propriocepce zadních provazců míšních. Analýza chůze často umožní stanovit diagnózu již při vstupu pacienta do ordinace."
        },
        "sections": [
          {
            "title": "1. Vyšetření stoje (Rombergovy zkoušky)",
            "color": "cyan",
            "content": "\n                    <ul class=\"list-disc pl-5 space-y-1 mb-3 text-sm\">\n                        <li><strong>Romberg I (Stoj o široké bazi):</strong> Pacient stojí s nohama volně u sebe s otevřenýma očima. Hodnotí se stabilita.</li>\n                        <li><strong>Romberg II (Stoj se spojenými chodidly a otevřenýma očima):</strong> Zúžení baze.</li>\n                        <li><strong>Romberg III (Stoj se spojenými chodidly a ZAVŘENÝMA očima):</strong> Vyloučení zrakové kontroly.\n                            <ul class=\"list-circle pl-5 mt-1\">\n                                <li><strong>Pozitivní Romberg (Senzorická ataxie - zadní provazce / vestibulární aparát):</strong> Pacient stojí stabilně s otevřenýma očima, ale <em>ihned po zavření očí dochází k vrávorání či pádu</em> (ztráta vizuální kompenzace chybějícího polohocitu).</li>\n                                <li><strong>Mozečková ataxie (Cerebelární porucha):</strong> Pacient vrávorá <em>stejně s otevřenýma i zavřenýma očima</em> (zavření očí stabilitu podstatně nezhorší).</li>\n                            </ul>\n                        </li>\n                        <li><strong>Tandemový stoj:</strong> Stoj s jedním chodidlem těsně před druhým (pata–špička).</li>\n                    </ul>\n                "
          },
          {
            "title": "2. Vyšetření chůze a speciální manévry",
            "color": "sky",
            "content": "\n                    <ul class=\"list-disc pl-5 space-y-1 mb-3 text-sm\">\n                        <li><strong>Běžná spontánní chůze:</strong> Hodnotí se šířka baze, délka kroku, souhyby horních končetin (synkinézy), výška zvedání nohou a otáčení (en bloc u Parkinsona).</li>\n                        <li><strong>Chůze po špičkách:</strong> Testuje sílu plantárních flexorů (m. triceps surae, kořen <strong>S1</strong>, n. tibialis).</li>\n                        <li><strong>Chůze po patách:</strong> Testuje sílu dorzálních flexorů nohy (m. tibialis anterior, kořen <strong>L5</strong>, n. fibularis/peroneus profundus).</li>\n                        <li><strong>Tandemová chůze (provazochodecká chůze):</strong> Chůze v jedné linii pata k špičce (velmi citlivý test pro mozečkový vermis a vestibulární poruchu).</li>\n                    </ul>\n                "
          },
          {
            "title": "3. Přehled patologických typů chůze",
            "color": "indigo",
            "content": "\n                    <div class=\"space-y-3\">\n                        <div class=\"p-3 rounded-lg bg-slate-900 border border-slate-700\">\n                            <span class=\"font-bold text-cyan-300\">1. Spastická hemiparetická chůze (Cirkumdukční / Wernicke-Mann):</span>\n                            <p class=\"text-xs text-slate-300 mt-1\">Paretická DK je v extenzi a plantární flexi (pes equinovarus); pacient nohu neohne v koleni a při kroku ji <strong>opisuje obloukem zevně (cirkumdukce - kositelská chůze)</strong>. Horní končetina je flektována a přitisknuta k trupu.</p>\n                        </div>\n                        <div class=\"p-3 rounded-lg bg-slate-900 border border-slate-700\">\n                            <span class=\"font-bold text-sky-300\">2. Kohoutí (Peroneální / Stepážová) chůze:</span>\n                            <p class=\"text-xs text-slate-300 mt-1\">Při paréze n. peroneus communis nebo kořene L5 (padající špička). Pacient <strong>vysoko zvedá koleno</strong>, aby nezakopl špičkou o zem, a při došlapu noha pleskne o podlahu.</p>\n                        </div>\n                        <div class=\"p-3 rounded-lg bg-slate-900 border border-slate-700\">\n                            <span class=\"font-bold text-amber-300\">3. Mozečková ataktická chůze:</span>\n                            <p class=\"text-xs text-slate-300 mt-1\">Široká baze, nepravidelná délka kroků, vrávorání do stran ('chůze opilce' / titubace). Při lézi hemisféry úchylka ke straně léze.</p>\n                        </div>\n                        <div class=\"p-3 rounded-lg bg-slate-900 border border-slate-700\">\n                            <span class=\"font-bold text-purple-300\">4. Parkinsonská hypokinetická chůze:</span>\n                            <p class=\"text-xs text-slate-300 mt-1\">Drobné šouravé krůčky (marche à petits pas), chybění souhybů HKK, anteflexe trupu, <em>prokulpse / retropulse</em> (těžiště předbíhá nohy -> festinace), zárazy chůze (freezing).</p>\n                        </div>\n                        <div class=\"p-3 rounded-lg bg-slate-900 border border-slate-700\">\n                            <span class=\"font-bold text-emerald-400\">5. Myopatická (Kachní / Kolébavá) chůze:</span>\n                            <p class=\"text-xs text-slate-300 mt-1\">Při slabosti gluteálního svalstva a pánevního pletence (Trendelenburgův příznak) – kolébání pánve z boku na bok.</p>\n                        </div>\n                    </div>\n                "
          }
        ]
      },
      "recall": {
        "scenarios": [
          {
            "id": "rec-q20-1",
            "title": "Kazuistika: Pacient zakopávající špičkou pravé nohy",
            "question": "45letý muž po operaci kolene si všiml, že zakopává pravou nohou o koberec. Při chůzi zvedá pravé koleno vysoko do vzduchu a noha při došlapu slyšitelně pleskne. Na patu se na pravé noze vůbec nepostaví, ale stoj na špičce provede bez problémů. O jaký typ chůze a parézu kterého nervu se jedná?",
            "answer": "Jedná se o peroneální (kohoutí / stepážovou) chůzi při paréze nervus fibularis (peroneus) communis vpravo (útlak v oblasti hlavičky fibuly). Vyhasla dorzální flexe nohy a prstů (m. tibialis anterior, m. extensor digitorum longus), plantární flexe (n. tibialis / m. triceps surae) je intaktní, proto se udrží na špičce, ale ne na patě.",
            "pearl": "Pokud pacient padá při zavření očí (Romberg III), ale při otevřených očích stojí pevně, jde o pozitivní Rombergův příznak svědčící pro poruchu propriocepce (zadní provazce - senzorická ataxie) nebo vestibulární lézi, NIKOLIV mozečkovou lézi!"
          }
        ]
      },
      "cards": [
        {
          "id": "fc-q20-1",
          "front": "Jaký je rozdíl mezi mozečkovou a senzorickou ataxií při Rombergově zkoušce?",
          "back": "<strong>Senzorická ataxie (zadní provazce):</strong> Pozitivní Romberg – při otevřených očích stojí dobře, ale <em>po zavření očí ihned padá</em>.<br><strong>Mozečková ataxie:</strong> Vrávorá a je nestabilní <em>stejně s otevřenýma i zavřenýma očima</em>.",
          "hint": "Vliv zavření očí."
        },
        {
          "id": "fc-q20-2",
          "front": "Popište cirkumdukční (kositelskou) chůzi a u jaké léze vzniká.",
          "back": "Pacient při kroku <strong>opisuje paretickou dolní končetinou oblouk do strany</strong> kvůli spastické extenzi v koleni a plantární flexi. Vzniká u <strong>centrální spastické hemiparézy (Wernicke-Mann)</strong> po CMP.",
          "hint": "Spastická extenze DK a opisování oblouku."
        },
        {
          "id": "fc-q20-3",
          "front": "Který kořen a nerv vyšetřujeme chůzí po špičkách a který chůzí po patách?",
          "back": "<strong>Chůze po špičkách:</strong> Kořen <strong>S1</strong> (n. ischiadicus -> n. tibialis -> m. triceps surae).<br><strong>Chůze po patách:</strong> Kořen <strong>L5</strong> (n. ischiadicus -> n. fibularis/peroneus profundus -> m. tibialis anterior).",
          "hint": "Špičky = S1, Paty = L5."
        }
      ],
      "quiz": [
        {
          "id": "q20-test1",
          "question": "Pacient, který nedokáže stát ani chodit po patách, ale chůzi po špičkách zvládá bez obtíží, má parézu v segmentu / inervační oblasti:",
          "options": [
            "Kořene L5 (nebo n. fibularis communis)",
            "Kořene S1 (nebo n. tibialis)",
            "Kořene L2 (n. femoralis)",
            "N. obturatorius"
          ],
          "correctIndex": 0,
          "explanation": "Dorzální flexe nohy (stoj a chůze po patách) je inervována kořenem L5 přes n. fibularis profundus (m. tibialis anterior)."
        },
        {
          "id": "q20-test2",
          "question": "Pro parkinsonskou chůzi je typické:",
          "options": [
            "Široká baze s vrávoráním ze strany na stranu jako u opilce",
            "Drobné šouravé krůčky, chybění souhybů horních končetin a sklon k festinaci (propulzi)",
            "Vysoké zvedání kolen s pleskáním nohou o zem",
            "Opisování oblouku končetinou zevně"
          ],
          "correctIndex": 1,
          "explanation": "Parkinsonská chůze (marche à petits pas) je charakterizována hypokinézou, flekčním držením trupu, chyběním synkinéz paží, drobnými šouravými kroky a festinací."
        }
      ]
    },
    {
      "id": "q21-strategie-neurologickeho-vysetreni",
      "number": 21,
      "section": "obecna",
      "sectionLabel": "Obecná neurologie",
      "badgePrefix": "O21",
      "title": "Strategie neurologického vyšetření, symptom, syndrom, topografická diagnóza, etiologická diagnóza",
      "shortDesc": "Anamnéza, struktura neurologického statusu, algoritmus lokalizace léze (sval -> nerv -> kořen -> mícha -> kmen -> subkortex -> kortex), syntéza syndromů a nozologická etiologická diagnostika.",
      "category": "vysetreni_systemy",
      "badge": "Propedeutika & Algoritmy",
      "badgeColor": "cyan",
      "theory": {
        "banner": {
          "tag": "Klinická neurologie • Diagnostický postup",
          "title": "Strategie a metodika neurologického vyšetření",
          "text": "Neurologická diagnostika je deduktivní proces. Vychází ze syntézy symptomů do syndromů, určení anatomické lokalizace léze (topografická diagnóza) a následného stanovení příčiny (etiologická / nozologická diagnóza) pomocí paraklinických metod."
        },
        "sections": [
          {
            "title": "1. Diagnostické stupně v neurologii (Klinický algoritmus)",
            "color": "cyan",
            "content": "\n                    <div class=\"space-y-3\">\n                        <div class=\"p-3 rounded-lg bg-slate-900 border border-slate-700\">\n                            <span class=\"font-bold text-cyan-300\">1. Symptomatologická fáze (Příznaky):</span>\n                            <p class=\"text-xs text-slate-300 mt-1\">Zjištění jednotlivých subjektivních obtíží (anamnéza – bolest, paréza, parestézie, diplopie, závrať) a objektivních fyzikálních nálezů (reflexy, tonus, čití).</p>\n                        </div>\n                        <div class=\"p-3 rounded-lg bg-slate-900 border border-slate-700\">\n                            <span class=\"font-bold text-sky-300\">2. Syndromologická fáze (Syndromy):</span>\n                            <p class=\"text-xs text-slate-300 mt-1\">Seskupení příznaků do typických celků (např. spastická hemiparéza, vestibulocerebelární syndrom, syndrom cauda equina, syndrom nitrolební hypertenze).</p>\n                        </div>\n                        <div class=\"p-3 rounded-lg bg-slate-900 border border-slate-700\">\n                            <span class=\"font-bold text-indigo-300 font-bold\">3. Topografická diagnóza (Kde je léze?):</span>\n                            <p class=\"text-xs text-slate-300 mt-1\">Určení přesné anatomické úrovně postižení v neurální ose: sval -> nervosvalová ploténka -> periferní nerv -> plexus -> spinální kořen -> mícha -> kmen -> mozeček -> bazální ganglia -> subkortikální bílá hmota -> mozková kůra.</p>\n                        </div>\n                        <div class=\"p-3 rounded-lg bg-slate-900 border border-slate-700\">\n                            <span class=\"font-bold text-emerald-400 font-bold\">4. Etiologická / Nozologická diagnóza (Co to způsobilo?):</span>\n                            <p class=\"text-xs text-slate-300 mt-1\">Vaskulární (CMP), zánětlivá/autoimunitní (RS, encefalitida), neoplastická (tumory), traumatická, neurodegenerativní (Parkinson, ALS), metabolická/toxická.</p>\n                        </div>\n                    </div>\n                "
          },
          {
            "title": "2. Rychlé rozlišení úrovně léze v motorickém systému",
            "color": "sky",
            "content": "\n                    <div class=\"overflow-x-auto my-3\">\n                        <table class=\"min-w-full text-xs text-left text-slate-200 border border-slate-700\">\n                            <thead class=\"bg-slate-800 text-cyan-300 uppercase font-mono\">\n                                <tr>\n                                    <th class=\"p-2 border border-slate-700\">Úroveň léze</th>\n                                    <th class=\"p-2 border border-slate-700\">Typická distribuce slabosti</th>\n                                    <th class=\"p-2 border border-slate-700\">Tonus a reflexy</th>\n                                    <th class=\"p-2 border border-slate-700\">Klíčový rozlišovací znak</th>\n                                </tr>\n                            </thead>\n                            <tbody>\n                                <tr class=\"border-b border-slate-800 bg-slate-900/50\">\n                                    <td class=\"p-2 font-bold text-cyan-300\">Kortex / Capsula interna</td>\n                                    <td class=\"p-2\">Hemiparéza (kontralaterální)</td>\n                                    <td class=\"p-2 text-rose-300\">Spasticita, hyperreflexie, Babinski+</td>\n                                    <td class=\"p-2\">Často afázie, neglect, centrální n. VII</td>\n                                </tr>\n                                <tr class=\"border-b border-slate-800\">\n                                    <td class=\"p-2 font-bold text-sky-300\">Mozkový kmen</td>\n                                    <td class=\"p-2\">Alternující hemiparéza</td>\n                                    <td class=\"p-2 text-rose-300\">Spasticita, hyperreflexie</td>\n                                    <td class=\"p-2 text-amber-300 font-bold\">Obrna hlavového nervu na jedné straně + paréza končetin naproti!</td>\n                                </tr>\n                                <tr class=\"border-b border-slate-800 bg-slate-900/50\">\n                                    <td class=\"p-2 font-bold text-indigo-300\">Mícha (transverzální)</td>\n                                    <td class=\"p-2\">Paraparéza / Kvadruparéza</td>\n                                    <td class=\"p-2 text-rose-300\">Spasticita pod lézí, Babinski+</td>\n                                    <td class=\"p-2 text-rose-400 font-bold\">Senzitivní hladina na trupu + retence/inkontinence moči!</td>\n                                </tr>\n                                <tr class=\"border-b border-slate-800\">\n                                    <td class=\"p-2 font-bold text-purple-300\">Periferní nerv / Kořen</td>\n                                    <td class=\"p-2\">V distribuci nervu / dermatomu</td>\n                                    <td class=\"p-2 text-cyan-300\">Chabost, hyporeflexie až areflexie</td>\n                                    <td class=\"p-2\">Časné svalové atrofie, radikulární bolest / parestézie</td>\n                                </tr>\n                                <tr class=\"bg-slate-900/50\">\n                                    <td class=\"p-2 font-bold text-emerald-400\">Sval (Myopatie)</td>\n                                    <td class=\"p-2\">Proximální pletencová (symetrická)</td>\n                                    <td class=\"p-2\">Tonus normální/snížený, reflexy odpovídají svalu</td>\n                                    <td class=\"p-2\">Čití je ZCELA NORMÁLNÍ, elevace CK</td>\n                                </tr>\n                            </tbody>\n                        </table>\n                    </div>\n                "
          },
          {
            "title": "3. Časový průběh (Dynamika) a nozologie",
            "color": "indigo",
            "content": "\n                    <ul class=\"list-disc pl-5 space-y-1 mb-3 text-sm\">\n                        <li><strong>Náhlý (sekundy až minuty):</strong> Vaskulární etiologie (ischemická CMP, intrakraniální krvácení, embolie), trauma, epileptický záchvat.</li>\n                        <li><strong>Subakutní (dny až týdny):</strong> Infekce a záněty (meningitidy, encefalitidy), demyelinizace (ataka roztroušené sklerózy), metabolické rozvraty, Guillain-Barré.</li>\n                        <li><strong>Pozvolný chronický (měsíce až roky):</strong> Neurodegenerativní onemocnění (Alzheimer, Parkinson, ALS), pomalu rostoucí tumory (meningeomy, gliomy nízkého stupně).</li>\n                    </ul>\n                "
          }
        ]
      },
      "recall": {
        "scenarios": [
          {
            "id": "rec-q21-1",
            "title": "Kazuistika: Topografická rozvaha u pacienta s parézou končetin",
            "question": "Pacient má spastickou parézu pravostranných končetin s pozitivním Babinským vpravo a současně periferní parézu n. facialis vlevo (nedovře levé oko a pokleslý levý koutek). Kde je lokalizována léze v CNS (topografická diagnóza) a o jaký syndrom se jedná?",
            "answer": "Jedná se o alternující kmenový syndrom (konkrétně ventrální pontinní syndrom Millard-Gublerův). Léze je v levé polovině pontu (mozkový kmen), kde poškozuje odstupující jádro/kořen levého n. facialis (periferní obrna vlevo) a dosud nezkříženou pyramidovou dráhu v crus cerebri/pontu (která se zkříží až v prodloužené míše a způsobí spastickou parézu pravostranných končetin).",
            "pearl": "Pravidlo alternujících syndromů: Hlavový nerv ukazuje přesně na stranu a etáž léze v kmeni, zatímco hemiparéza končetin je kontralaterální."
          }
        ]
      },
      "cards": [
        {
          "id": "fc-q21-1",
          "front": "Jaký je rozdíl mezi topografickou a etiologickou diagnózou v neurologii?",
          "back": "<strong>Topografická diagnóza:</strong> Určuje <em>KDE</em> v nervovém systému se léze nachází (např. pravý parietální lalok, mícha Th8, n. radialis).<br><strong>Etiologická diagnóza:</strong> Určuje <em>CO</em> lézi způsobilo (např. ischemický infarkt, meningeom, borelióza).",
          "hint": "Kde vs. Co."
        },
        {
          "id": "fc-q21-2",
          "front": "Které 3 klíčové znaky odliší míšní lézi od hemisférické léze mozku?",
          "back": "1. <strong>Senzitivní hladina na trupu</strong> (ostrý přechod od dermatomu léze kaudálně).<br>2. <strong>Sfinkterové poruchy</strong> (časná retence moči).<br>3. <strong>Absence postižení hlavových nervů</strong> a kortikálních funkcí (řeč, zrakové pole).",
          "hint": "Hladina čití, moč, hlavové nervy."
        },
        {
          "id": "fc-q21-3",
          "front": "Jaký časový profil nástupu symptomů je typický pro vaskulární příhody a jaký pro neurodegenerace?",
          "back": "<strong>Vaskulární (CMP):</strong> Náhlý iktální vznik během <em>sekund až minut</em>.<br><strong>Neurodegenerativní:</strong> Pomalá plíživá progrese trvající <em>měsíce až roky</em>.",
          "hint": "Sekundy vs. roky."
        }
      ],
      "quiz": [
        {
          "id": "q21-test1",
          "question": "Pacient má symetrickou slabost proximálního pletencového svalstva DKK, normální citlivost a elevaci sérové kreatinkinázy (CK). Topograficky se léze nachází v:",
          "options": [
            "Kosterním svalu (myopatie)",
            "Periferním nervu",
            "Thalamu",
            "Předním rohu míšním"
          ],
          "correctIndex": 0,
          "explanation": "Symetrická proximální slabost při zcela intaktním čití a s elevací svalových enzymů (CK) je typickým obrazem primárního onemocnění svalu (myopatie/svalové dystrofie)."
        },
        {
          "id": "q21-test2",
          "question": "Který z následujících nálezů jednoznačně lokalizuje lézi do mozkového kmene?",
          "options": [
            "Izolovaná porucha paměti",
            "Alternující syndrom (homolaterální obrna hlavového nervu + kontralaterální hemiparéza)",
            "Sedlovitá anestézie",
            "Gerstmannův syndrom"
          ],
          "correctIndex": 1,
          "explanation": "Alternující syndromy (např. Weber, Millard-Gubler, Wallenberg) jsou absolutně specifické pro poškození mozkového kmene, kde se kříží dlouhé dráhy a vystupují jádra hlavových nervů."
        }
      ]
    },
    {
      "id": "q22-vysetreni-mozeckovych-funkci",
      "number": 22,
      "section": "obecna",
      "sectionLabel": "Obecná neurologie",
      "badgePrefix": "O22",
      "title": "Vyšetření mozečkových funkcí",
      "shortDesc": "Anatomické členění (archicerebellum, paleocerebellum, neocerebellum), mozečkový syndrom (ataxie, hypermetrie, adiadochokineze, intenční tremor, nystagmus, skandovaná řeč, asynergie, Stewart-Holmes) a mozečkové zkoušky.",
      "category": "vysetreni_systemy",
      "badge": "Mozeček & Koordinace",
      "badgeColor": "cyan",
      "theory": {
        "banner": {
          "tag": "Mozečkový systém • Koordinace",
          "title": "Mozeček a mozečkový syndrom",
          "text": "Mozeček je centrem časoprostorové koordinace pohybů, regulace svalového tonu a udržování rovnováhy. Mozečková léze způsobuje homolaterální ataxii (v důsledku dvojitého zkřížení drah), dysmetrii, intenční tremor, adiadochokinezi a skandovanou řeč."
        },
        "sections": [
          {
            "title": "1. Funkční anatomie mozečku (Archicerebellum, Paleocerebellum, Neocerebellum)",
            "color": "cyan",
            "content": "\n                    <div class=\"grid md:grid-cols-3 gap-3 my-3\">\n                        <div class=\"p-3 rounded-lg bg-slate-900 border border-slate-700\">\n                            <div class=\"font-bold text-cyan-400 mb-1\">⚖️ Archicerebellum (Vestibulární)</div>\n                            <p class=\"text-xs text-slate-300\"><strong>Struktura:</strong> <em>Lobus flocculonodularis</em>.<br><strong>Funkce:</strong> Rovnováha těla a koordinace pohybů očí.<br><strong>Léze:</strong> Těžká axiální ataxie, porucha stoje a chůze, nystagmus.</p>\n                        </div>\n                        <div class=\"p-3 rounded-lg bg-slate-900 border border-slate-700\">\n                            <div class=\"font-bold text-sky-400 mb-1\">🚶 Paleocerebellum (Spinální)</div>\n                            <p class=\"text-xs text-slate-300\"><strong>Struktura:</strong> <em>Vermis cerebelli</em> a paravermiální kůra.<br><strong>Funkce:</strong> Posturální svalový tonus a axiální motorika trupu.<br><strong>Léze:</strong> <strong>Trunkální (axiální) ataxie</strong> – neschopnost sedět a stát bez opory (astasie-abasie), titubace trupu.</p>\n                        </div>\n                        <div class=\"p-3 rounded-lg bg-slate-900 border border-slate-700\">\n                            <div class=\"font-bold text-indigo-400 mb-1\">🎯 Neocerebellum (Korové / Cerebrocerebelární)</div>\n                            <p class=\"text-xs text-slate-300\"><strong>Struktura:</strong> <em>Mozečkové hemisféry</em>.<br><strong>Funkce:</strong> Koordinace jemné volní motoriky končetin.<br><strong>Léze:</strong> <strong>Končetinová (apendikulární) ataxie</strong> na <em>homolaterální straně</em>.</p>\n                        </div>\n                    </div>\n                "
          },
          {
            "title": "2. Součásti mozečkového syndromu (Neocerebelární triáda a příznaky)",
            "color": "sky",
            "content": "\n                    <ul class=\"list-disc pl-5 space-y-1 mb-3 text-sm\">\n                        <li><strong>Ataxie (Porucha koordinace):</strong> Trhavý, nekoordinovaný pohyb.</li>\n                        <li><strong>Dysmetrie (Hypermetrie / Hypometrie):</strong> Špatné zacílení cíleného pohybu s přestřelením cíle (při zkoušce prst-nos pacient přestřelí a zasáhne se do oka či tváře).</li>\n                        <li><strong>Adiadochokineze / Dysdiadochokineze:</strong> Neschopnost plynule provádět rychlé střídavé antagonistické pohyby (např. pronace/supinace předloktí – 'šroubování žárovek').</li>\n                        <li><strong>Intenční tremor:</strong> Kinetický třes s frekvencí 3–5 Hz, který <strong>narůstá s blížícím se cílem pohybu</strong> (při dotyku špičky nosu). V klidu zcela mizí!</li>\n                        <li><strong>Skandovaná (mozečková) dysartrie:</strong> Pomalá, explozivní, trhaná řeč s nepravidelným důrazem na slabiky.</li>\n                        <li><strong>Mozečková svalová hypotonie:</strong> Snížený tonus na postižených končetinách, pendulární (kývavé) šlachové reflexy.</li>\n                        <li><strong>Nystagmus:</strong> Hrubý horizontální nystagmus, nejvýraznější při pohledu ke straně mozečkové léze.</li>\n                    </ul>\n                "
          },
          {
            "title": "3. Klinické zkoušky mozečkových funkcí u lůžka",
            "color": "indigo",
            "content": "\n                    <div class=\"space-y-2 text-xs text-slate-300\">\n                        <div class=\"p-2 rounded bg-slate-900 border border-slate-700\">\n                            <strong class=\"text-cyan-300\">1. Zkouška prst-nos (Index-nose test):</strong> Plynulé navedení ukazováku ze širokého upažení na hrot nosu. Hodnotí se hypermetrie a intenční tremor.\n                        </div>\n                        <div class=\"p-2 rounded bg-slate-900 border border-slate-700\">\n                            <strong class=\"text-cyan-300\">2. Zkouška pata-koleno (Heel-knee-shin test):</strong> Pacient vleže na zádech zvedne patu, položí ji přesně na koleno druhé nohy a sjede po hraně tibie dolů. U mozečkové léze pata netrefí koleno a sjíždí trhavě ze strany na stranu.\n                        </div>\n                        <div class=\"p-2 rounded bg-slate-900 border border-slate-700\">\n                            <strong class=\"text-cyan-300\">3. Diadochokineze:</strong> Rychlé střídání supinace a pronace dlaní na stehnech.\n                        </div>\n                        <div class=\"p-2 rounded bg-slate-900 border border-slate-700\">\n                            <strong class=\"text-cyan-300\">4. Stewart-Holmesův příznak (Rebound fenomén / Fenomén odrazu):</strong> Vyšetřující táhne pacientovo předloktí ve flexi proti jeho odporu a náhle ruku pustí. U normálního člověka antagonisty (triceps) pohyb ihned zbrzdí. U mozečkové léze (hypotonie + asynergie) se paže nezabrzdí a <em>udeří pacienta do hrudníku</em> (vyšetřující musí chránit pacienta druhou rukou!).\n                        </div>\n                    </div>\n                "
          }
        ]
      },
      "recall": {
        "scenarios": [
          {
            "id": "rec-q22-1",
            "title": "Kazuistika: Nemotornost pravé ruky a třes při podávání šálku",
            "question": "48letá žena má 2 týdny pocit nemotornosti pravé ruky. Když chce uchopit šálek kávy, ruka se jí těsně před uchopením hrnku prudce rozklepe a kávu rozlije. Při zkoušce prst-nos má výrazný třes těsně u nosu a přestřeluje doprava. V klidu ruka netřese. Na které straně a ve které struktuře je lokalizována léze?",
            "answer": "Jedná se o neocerebelární syndrom (homolaterální končetinová ataxie, hypermetrie a intenční tremor). Léze je lokalizována v PRAVÉ mozečkové hemisféře (pravostranné neocerebelum). Mozečkové dráhy jsou dvojitě zkřížené, proto poškození mozečkové hemisféry vyvolává symptomy na HOMOLATERÁLNÍ (stejnostranné) polovině těla.",
            "pearl": "Klidový tremor (Parkinson) mizí při pohybu; naopak intenční tremor (mozeček) v klidu zcela chybí a graduje těsně před dosažením cíle pohybu."
          }
        ]
      },
      "cards": [
        {
          "id": "fc-q22-1",
          "front": "Na které straně těla se projeví léze mozečkové hemisféry a proč?",
          "back": "Na <strong>HOMOLATERÁLNÍ (stejnostranné)</strong> straně těla, protože descendentní a ascendentní spoje mozečku s kůrou a míchou se kříží dvakrát (tractus corticopontocerebellaris a tractus cerebellorubrospinalis).",
          "hint": "Ipsilaterálně vs. kontralaterálně."
        },
        {
          "id": "fc-q22-2",
          "front": "Definujte intenční tremor a odlište ho od klidového tremoru.",
          "back": "<strong>Intenční tremor:</strong> Kinetický hrubý třes, který se objevuje během cíleného pohybu a <strong>graduje s blížícím se cílem</strong> (typický pro mozeček).<br><strong>Klidový tremor:</strong> Třes v klidu (4–6 Hz), který <em>při volním pohybu mizí</em> (typický pro Parkinsonovu nemoc).",
          "hint": "Cílený pohyb vs. klid."
        },
        {
          "id": "fc-q22-3",
          "front": "Jak se provádí zkouška na Stewart-Holmesův fenomén (rebound fenomén)?",
          "back": "Pacient flektuje předloktí proti odporu lékaře. Při <strong>náhlém uvolnění tahu</strong> u mozečkové léze selže včasná kontrakce antagonistů (tricepsu) a <strong>ruka narazí do pacientova hrudníku</strong>.",
          "hint": "Uvolnění odporu flektovaného předloktí."
        }
      ],
      "quiz": [
        {
          "id": "q22-test1",
          "question": "Trunkální (axiální) ataxie s neschopností sedět a stát a s titubacemi trupu je typická pro lézi:",
          "options": [
            "Mozečkového vermis (paleocerebellum)",
            "Laterální mozečkové hemisféry",
            "Nucleus lentiformis",
            "Předního rohu míšního"
          ],
          "correctIndex": 0,
          "explanation": "Vermis cerebelli řídí axiální svalstvo trupu a rovnováhu; jeho léze způsobuje těžkou trunkální ataxii a titubace trupu v sedu i stoji."
        },
        {
          "id": "q22-test2",
          "question": "Neschopnost provádět rychlé střídavé pohyby (např. rychlou supinaci a pronaci předloktí) se označuje jako:",
          "options": [
            "Adiadochokineze",
            "Astereognozie",
            "Apraxie",
            "Akalkulie"
          ],
          "correctIndex": 0,
          "explanation": "Adiadochokineze (dysdiadochokineze) je klasickým příznakem mozečkové dysfunkce projevujícím se ztrátou schopnosti plynule střídat antagonistické motorické akty."
        }
      ]
    },
    {
      "id": "q23-extrapyramidovy-system",
      "number": 23,
      "section": "obecna",
      "sectionLabel": "Obecná neurologie",
      "badgePrefix": "O23",
      "title": "Vyšetření extrapyramidového systému",
      "shortDesc": "Anatomie bazálních ganglií (striatum, globus pallidus, substantia nigra, nucleus subthalamicus), přímá a nepřímá dráha, hypokineticko-rigidní syndrom (Parkinsonismus, rigidita, klidový tremor) a hyperkinetické syndromy (chorea, balismus, atetóza, dystonie, tiky, myoklonus).",
      "category": "vysetreni_systemy",
      "badge": "Extrapyramidový systém",
      "badgeColor": "cyan",
      "theory": {
        "banner": {
          "tag": "Bazální ganglia • Extrapyramidový systém",
          "title": "Extrapyramidový systém a poruchy hybnosti",
          "text": "Bazální ganglia modulují motorické programy z kůry, regulují svalový tonus a umožňují plynulé zahajování a provádění automatických pohybů. Výsledkem dysbalance dopaminergní transmise jsou syndromy hypokineticko-rigidní (nedostatek dopaminu) nebo hyperkinetické (nadbytek dopaminu / léze striata)."
        },
        "sections": [
          {
            "title": "1. Anatomie bazálních ganglií a neurotransmise",
            "color": "cyan",
            "content": "\n                    <ul class=\"list-disc pl-5 space-y-1 mb-3 text-sm\">\n                        <li><strong>Struktury:</strong> <em>Striatum</em> (nucleus caudatus + putamen), <em>Globus pallidus</em> (pars interna GPi a externa GPe), <em>Substantia nigra</em> (pars compacta SNc produkující dopamin a pars reticulata SNr) a <em>Nucleus subthalamicus (Luysi)</em>.</li>\n                        <li><strong>Okruhy:</strong>\n                            <ul class=\"list-circle pl-5 mt-1\">\n                                <li><strong>Přímá dráha (Direct pathway, D1 receptory):</strong> Kortex -> Striatum -> GPi/SNr (inhibice) -> Thalamus (disinhibice) -> Kortex -> <strong>FACILITUJE POHYB (prokinetická)</strong>.</li>\n                                <li><strong>Nepřímá dráha (Indirect pathway, D2 receptory):</strong> Kortex -> Striatum -> GPe -> STN -> GPi/SNr (excitace) -> Thalamus (inhibice) -> <strong>TLUMÍ NEŽÁDOUCÍ POHYBY (antikinetická)</strong>.</li>\n                            </ul>\n                        </li>\n                    </ul>\n                "
          },
          {
            "title": "2. Hypokineticko-rigidní (Parkinsonský) syndrom",
            "color": "sky",
            "content": "\n                    <p class=\"mb-2 text-sm\">Vzniká degenerací dopaminergních neuronů v substantia nigra pars compacta (deficit dopaminu ve striatu):</p>\n                    <div class=\"space-y-2 text-xs text-slate-300\">\n                        <div class=\"p-2 rounded bg-slate-900 border border-slate-700\">\n                            <strong class=\"text-cyan-300\">1. Akinéza / Bradykinéza / Hypokinéza:</strong> Zpomalení iniciace a provádění pohybů, ochuzení spontánní motoriky, hypomimie (maskovitý obličej), mikrografie (zmenšující se písmo), tichá monotónní řeč (hypofonie), ztráta souhybů paží při chůzi.\n                        </div>\n                        <div class=\"p-2 rounded bg-slate-900 border border-slate-700\">\n                            <strong class=\"text-cyan-300\">2. Plasticita / Rigidita (Zvýšený tonus):</strong> Plastický odpor po celý rozsah pasivního pohybu (<strong>fenomén olověné trubky</strong>), při současném tremoru vzniká <strong>fenomén ozubeného kola (Negro)</strong>.\n                        </div>\n                        <div class=\"p-2 rounded bg-slate-900 border border-slate-700\">\n                            <strong class=\"text-cyan-300\">3. Klidový tremor:</strong> Pomalý (4–6 Hz), asymetrický na HK ('počítání peněz' / 'válení kuliček'). Při volním pohybu mizí, zvýrazňuje se v kognitivním stresu.\n                        </div>\n                        <div class=\"p-2 rounded bg-slate-900 border border-slate-700\">\n                            <strong class=\"text-cyan-300\">4. Posturální instabilita:</strong> Porucha posturálních reflexů (pozitivní test postrčení / pull-test), sklon k pádům.\n                        </div>\n                    </div>\n                "
          },
          {
            "title": "3. Hyperkinetické syndromy (Přehled mimovolních pohybů)",
            "color": "indigo",
            "content": "\n                    <div class=\"space-y-3\">\n                        <div class=\"p-3 rounded-lg bg-slate-900 border border-slate-700\">\n                            <span class=\"font-bold text-amber-400\">1. Chorea:</span>\n                            <p class=\"text-xs text-slate-300 mt-1\">Rychlé, nerytmické, neúčelné, kroutivé mimovolní záškuby stěhující se z jedné části těla na druhou (grimasování, záškuby prstů, tančivá chůze). Typické pro Huntingtonovu chorobu a polékové dyskineze.</p>\n                        </div>\n                        <div class=\"p-3 rounded-lg bg-slate-900 border border-slate-700\">\n                            <span class=\"font-bold text-rose-400\">2. Balismus (Hemibalismus):</span>\n                            <p class=\"text-xs text-slate-300 mt-1\">Náhlé, prudké, velkoamplitudové házivé pohyby proximálních pletenců končetin (obvykle jednostranné). Vzniká při <strong>ložiskové lézi (ischémii) v nucleus subthalamicus (Luysi)</strong>.</p>\n                        </div>\n                        <div class=\"p-3 rounded-lg bg-slate-900 border border-slate-700\">\n                            <span class=\"font-bold text-purple-300\">3. Dystonie:</span>\n                            <p class=\"text-xs text-slate-300 mt-1\">Trvalé nebo intermitentní svalové kontrakce vedoucí k abnormálnímu kroutivému držení těla (např. <em>torticollis spastica</em> – stočení krku, blefarospazmus – křečovité sevření víček, písařská křeč). Typická přítomnost 'geste antagoniste' (senzorický trik – lehký dotyk brady zmírní torticollis).</p>\n                        </div>\n                        <div class=\"p-3 rounded-lg bg-slate-900 border border-slate-700\">\n                            <span class=\"font-bold text-sky-300\">4. Myoklonus a Tiky:</span>\n                            <p class=\"text-xs text-slate-300 mt-1\"><strong>Myoklonus:</strong> Bleskový záškub svalu nebo skupiny svalů bez efektu na polohu (např. u epilepsie či Creutzfeldt-Jakobovy nemoci).<br><strong>Tiky:</strong> Stereotypní, částečně vůlí potlačitelné pohyby či zvuky (Gilles de la Tourette).</p>\n                        </div>\n                    </div>\n                "
          }
        ]
      },
      "recall": {
        "scenarios": [
          {
            "id": "rec-q23-1",
            "title": "Kazuistika: Asymetrický klidový třes a šourání nohou",
            "question": "66letý muž pozoruje 8 měsíců třes pravé ruky v klidu, který vypadá jako 'počítání mincí'. Manželka si všimla, že má málo pohyblivý obličej (hypomimii) a při chůzi nepohybuje pravou paží. Při vyšetření má pasivní odpor v pravém lokti s fenoménem ozubeného kola. O jaký syndrom a chorobu se jedná?",
            "answer": "Jedná se o klasický hypokineticko-rigidní syndrom (Parkinsonovu nemoc) s typickou asymetrickou manifestací triády: klidový tremor (4–6 Hz), rigidita s fenoménem ozubeného kola (Negro) a bradykinéza/hypomimie. Lékem volby je dopaminergní substituce (L-DOPA s inhibitorem DDC - např. Isicom/Nakom, nebo agonisté dopaminu).",
            "pearl": "U hemibalismu (prudké házení končetinou) hledejte na CT/MR akutní ischémii v kontralaterálním nucleus subthalamicus Luysi."
          }
        ]
      },
      "cards": [
        {
          "id": "fc-q23-1",
          "front": "Vyjmenujte 4 hlavní kardinální příznaky Parkinsonovy nemoci.",
          "back": "1. <strong>Bradykinéza / Akinéza</strong> (zpomalení a ochuzení pohybu)<br>2. <strong>Rigidita</strong> (plastický tonus s fenoménem ozubeného kola)<br>3. <strong>Klidový tremor</strong> (4–6 Hz, asymetrický)<br>4. <strong>Posturální instabilita</strong> (porucha posturálních reflexů).",
          "hint": "TRAP: Tremor, Rigidity, Akinesia, Postural instability."
        },
        {
          "id": "fc-q23-2",
          "front": "Jaký je rozdíl mezi spasticitou (pyramidová léze) a rigiditou (extrapyramidová léze)?",
          "back": "<strong>Spasticita (pyramidová):</strong> Závislá na rychlosti protažení, typický <em>fenomén sklapovacího nože</em> (zpočátku velký odpor, pak povolí), predilekce na flexorech HK a extenzorech DK.<br><strong>Rigidita (extrapyramidová):</strong> Nezávislá na rychlosti, <em>rovnoměrný plastický odpor po celou dráhu (olověná trubka / ozubené kolo)</em>, postihuje agonisty i antagonisty.",
          "hint": "Sklapovací nůž vs. olověná trubka / ozubené kolo."
        },
        {
          "id": "fc-q23-3",
          "front": "Kde je anatomická léze při vzniku hemibalismu?",
          "back": "V <strong>kontralaterálním nucleus subthalamicus (Luysi)</strong> (nejčastěji drobná cévní ischémie).",
          "hint": "Subthalamické jádro."
        }
      ],
      "quiz": [
        {
          "id": "q23-test1",
          "question": "Fenomén ozubeného kola (Negro) při pasivním pohybu v kloubu je charakteristický pro:",
          "options": [
            "Spastickou centrální parézu",
            "Extrapyramidovou rigiditu u Parkinsonovy nemoci",
            "Mozečkovou hypotonii",
            "Chabou periferní obrnu"
          ],
          "correctIndex": 1,
          "explanation": "Fenomén ozubeného kola vzniká kombinací plastické extrapyramidové rigidity s klidovým tremorem při pasivním pohybu v kloubu u parkinsonismu."
        },
        {
          "id": "q23-test2",
          "question": "Prudké, házivé, velkoamplitudové mimovolní pohyby jedné poloviny těla (hemibalismus) jsou způsobeny lézí:",
          "options": [
            "Nucleus subthalamicus (Luysi)",
            "Gyrus praecentralis",
            "Zadních provazců míšních",
            "Lobus flocculonodularis"
          ],
          "correctIndex": 0,
          "explanation": "Léze (nejčastěji lakunární infarkt) v nucleus subthalamicus vede ke ztrátě inhibice thalamu a vzniku explozivních házivých pohybů (hemibalismu)."
        }
      ]
    },
    {
      "id": "q24-vysetreni-pyramidove-drahy",
      "number": 24,
      "section": "obecna",
      "sectionLabel": "Obecná neurologie",
      "badgePrefix": "O24",
      "title": "Vyšetření pyramidové dráhy",
      "shortDesc": "Paretické zánikové pyramidové jevy na horních končetinách (Mingazzini, Dufour, Rúseq) a dolních končetinách (Mingazzini, Barré), spastické iritační jevy extenční (Babinski, Chaddock, Oppenheim) a flekční (Rossolimo, Juster, Žukovskij, Trömner).",
      "category": "motorika_nervy",
      "badge": "Pyramidová dráha",
      "badgeColor": "cyan",
      "theory": {
        "banner": {
          "tag": "Neurologická propedeutika • Pyramidový systém",
          "title": "Zkoušky pyramidové dráhy – zánikové a iritační jevy",
          "text": "Vyšetření pyramidového traktu zahrnuje testování svalové síly, šlachových reflexů a specifických pyramidových jevů. Rozlišujeme jevy zánikové (paretické – pokles končetiny při oslabení) a jevy iritační / uvolňovací (spastické – patologické reflexy vyvolané ztrátou korové inhibice)."
        },
        "sections": [
          {
            "title": "1. Paretické zánikové jevy na horních končetinách",
            "color": "cyan",
            "content": "\n                    <div class=\"space-y-3\">\n                        <div class=\"p-3 rounded-lg bg-slate-900 border border-slate-700\">\n                            <span class=\"font-bold text-cyan-300\">Mingazzini HKK:</span>\n                            <p class=\"text-xs text-slate-300 mt-1\">Předpažení v supinaci s nataženými prsty a zavřenýma očima po dobu 30 sekund. <strong>Pozitivní test:</strong> Paretická končetina <em>klesá a pronuje</em> (pronace je nejčasnější známkou centrální slabosti!).</p>\n                        </div>\n                        <div class=\"p-3 rounded-lg bg-slate-900 border border-slate-700\">\n                            <span class=\"font-bold text-sky-300\">Dufourův příznak:</span>\n                            <p class=\"text-xs text-slate-300 mt-1\">Předpažení v plné supinaci se zavřenýma očima. <strong>Pozitivní:</strong> <em>Pronace předloktí</em> na paretické straně ještě dříve, než končetina začne klesat.</p>\n                        </div>\n                        <div class=\"p-3 rounded-lg bg-slate-900 border border-slate-700\">\n                            <span class=\"font-bold text-indigo-300\">Rúseqův příznak:</span>\n                            <p class=\"text-xs text-slate-300 mt-1\">Pacient drží předpažené ruce s prsty roztaženými od sebe. <strong>Pozitivní:</strong> Paretické prsty spontánně <em>klesají a flektují se do dlaně</em>.</p>\n                        </div>\n                    </div>\n                "
          },
          {
            "title": "2. Paretické zánikové jevy na dolních končetinách",
            "color": "sky",
            "content": "\n                    <div class=\"space-y-3\">\n                        <div class=\"p-3 rounded-lg bg-slate-900 border border-slate-700\">\n                            <span class=\"font-bold text-cyan-300\">Mingazzini DKK:</span>\n                            <p class=\"text-xs text-slate-300 mt-1\">Pacient leží na zádech, flektuje obě DKK v kyčlích a kolenou do pravého úhlu (90°), bérec je vodorovně. <strong>Pozitivní test:</strong> Paretická DK neunese svou váhu a <em>klesá k podložce</em>.</p>\n                        </div>\n                        <div class=\"p-3 rounded-lg bg-slate-900 border border-slate-700\">\n                            <span class=\"font-bold text-sky-300\">Barrého zkouška (I, II, III):</span>\n                            <p class=\"text-xs text-slate-300 mt-1\">Pacient leží na břiše, nohy flektovány v kolenou do tupého úhlu (45–60°). <strong>Pozitivní:</strong> Paretický bérec klesá dolů k lůžku.</p>\n                        </div>\n                    </div>\n                "
          },
          {
            "title": "3. Spastické pyramidové iritační jevy (Patologické reflexy)",
            "color": "indigo",
            "content": "\n                    <div class=\"space-y-3\">\n                        <div class=\"p-3 rounded-lg bg-slate-900 border border-slate-700\">\n                            <span class=\"font-bold text-rose-400 font-bold\">A. Extenční skupina na DKK (Babinského skupina):</span>\n                            <ul class=\"list-disc pl-4 text-xs text-slate-300 space-y-1 mt-1\">\n                                <li><strong>Babinski:</strong> Podráždění zevního okraje plosky nohy tupým hrotem zezadu dopředu. <em>Pozitivní:</em> Pomalá tonická <strong>dorzální extenze palce</strong> + vějířovité rozevření ostatních prstů. (Fyziologický pouze u kojenců do 1 roku!).</li>\n                                <li><strong>Chaddock:</strong> Podráždění kůže pod zevním kotníkem -> extenze palce.</li>\n                                <li><strong>Oppenheim:</strong> Silný tlak palce a ukazováku podél přední hrany tibie shora dolů -> extenze palce.</li>\n                                <li><strong>Roche:</strong> Podráždění podél zevní hrany chodidla.</li>\n                            </ul>\n                        </div>\n                        <div class=\"p-3 rounded-lg bg-slate-900 border border-slate-700\">\n                            <span class=\"font-bold text-purple-300\">B. Flekční skupina na DKK (Rossolimova skupina):</span>\n                            <ul class=\"list-disc pl-4 text-xs text-slate-300 space-y-1 mt-1\">\n                                <li><strong>Rossolimo:</strong> Rychlé poklepy bříšky prstů vyšetřujícího na bázi prstů zespodu plosky -> <em>plantární flexe všech prstů</em>.</li>\n                                <li><strong>Žukovskij:</strong> Poklep kladívkem do středu plosky -> plantární flexe prstů.</li>\n                            </ul>\n                        </div>\n                        <div class=\"p-3 rounded-lg bg-slate-900 border border-slate-700\">\n                            <span class=\"font-bold text-amber-300\">C. Pyramidové jevy na HKK:</span>\n                            <ul class=\"list-disc pl-4 text-xs text-slate-300 space-y-1 mt-1\">\n                                <li><strong>Justerův příznak:</strong> Bodnutí do dlaně v thenarové krajině -> addukce a flexe palce.</li>\n                                <li><strong>Trömnerův příznak / Hoffmann:</strong> Rychlé brnknutí o distální článek 3. prstu -> rychlá addukce a flexe palce a ukazováku.</li>\n                            </ul>\n                        </div>\n                    </div>\n                "
          }
        ]
      },
      "recall": {
        "scenarios": [
          {
            "id": "rec-q24-1",
            "title": "Kazuistika: Pozitivní Babinski u dospělého vs. kojence",
            "question": "Při vyšetření podrážděním plosky nohy tupým koncem kladívka dojde k pomalé extenzi palce nohy nahoru u: A) 6měsíčního zdravého kojence, B) 55letého muže s hypertenzí. Jak tento nález interpretujete v obou případech?",
            "answer": "A) U 6měsíčního kojence je pozitivní Babinského reflex FYZIOLOGICKÝM nálezem, protože pyramidová dráha dosud není plně myelinizována (myelinizace se dokončuje kolem 12.–18. měsíce věku s nástupem samostatné chůze). B) U 55letého muže je pozitivní Babinski jednoznačně PATOLOGICKÝM spastickým pyramidovým jevem prokazujícím lézi 1. (centrálního) motoneuronu (např. probíhající CMP či míšní komprese).",
            "pearl": "U centrální parézy je nejčasnějším a nejcitlivějším paretickým zánikovým jevem na horní končetině pronační úchylka předloktí při Mingazziniho/Dufourově zkoušce."
          }
        ]
      },
      "cards": [
        {
          "id": "fc-q24-1",
          "front": "Jak se provádí a co je pozitivní odpovědí u Babinského reflexu?",
          "back": "Provedení: Podráždění zevní hrany plosky nohy od paty k malíku a pod prsty tupým hrotem.<br>Odpověď: <strong>Pomalá tonická dorzální extenze palce nohy</strong> (často s vějířovitým rozevřením ostatních prstů). Svědčí pro lézi 1. motoneuronu.",
          "hint": "Podráždění plosky a pohyb palce nahoru."
        },
        {
          "id": "fc-q24-2",
          "front": "Vyjmenujte 3 paretické zánikové jevy na horních končetinách.",
          "back": "1. <strong>Mingazzini HKK:</strong> Pokles a pronace předpažené končetiny.<br>2. <strong>Dufour:</strong> Pronační stáčení dlaně.<br>3. <strong>Rúseq:</strong> Pokles a flexe prstů v předpažení.",
          "hint": "Mingazzini, Dufour, Rúseq."
        },
        {
          "id": "fc-q24-3",
          "front": "Jak se vyšetřuje Oppenheimův příznak z Babinského skupiny?",
          "back": "Silným tlakem kloubů prstů vyšetřujícího <strong>podél přední hrany tibie (holenní kosti) shora dolů</strong>. Pozitivní odpovědí je dorzální extenze palce nohy.",
          "hint": "Tlak podél hrany tibie."
        }
      ],
      "quiz": [
        {
          "id": "q24-test1",
          "question": "Který z následujících reflexů patří mezi spastické pyramidové iritační jevy FLEKČNÍ skupiny na dolní končetině?",
          "options": [
            "Babinského reflex",
            "Rossolimův reflex",
            "Oppenheimův příznak",
            "Chaddockův příznak"
          ],
          "correctIndex": 1,
          "explanation": "Rossolimův reflex (společně se Žukovským) patří do flekční skupiny pyramidových jevů na DKK (poklep na bázi prstů vyvolá patologickou plantární flexi prstů)."
        },
        {
          "id": "q24-test2",
          "question": "Při zkoušce Mingazzini na horních končetinách je nejčasnější známkou centrální pyramidové parézy:",
          "options": [
            "Pronační stočení předloktí a dlaně",
            "Výrazná supinace ruky",
            "Extenze všech prstů",
            "Intenční třes v rameni"
          ],
          "correctIndex": 0,
          "explanation": "Při oslabení pyramidové inervace dochází vlivem převahy silnějších pronátorů nejprve k pronaci dlaně (Dufourův fenomén / pronační úchylka), teprve následně k poklesu paže."
        }
      ]
    },
    {
      "id": "q25-slachove-okosticove-reflexy",
      "number": 25,
      "section": "obecna",
      "sectionLabel": "Obecná neurologie",
      "badgePrefix": "O25",
      "title": "Šlachově-okosticové reflexy",
      "shortDesc": "Míšní reflexní oblouk (proprioceptivní monosynaptický reflex), reflexy na HKK (bicipitální C5, styloradiální C6, tricipitální C7, flexorů prstů C8), reflexy na DKK (patelární L2–L4, reflex Achillovy šlachy L5–S2, medioplantární S1–S2), kvantifikace reflexů (areflexie až klonus) a Jendrassikův manévr.",
      "category": "motorika_nervy",
      "badge": "Reflexologie",
      "badgeColor": "cyan",
      "theory": {
        "banner": {
          "tag": "Neurologická propedeutika • Reflexy",
          "title": "Šlachově-okosticové (proprioceptivní) reflexy",
          "text": "Šlachově-okosticové reflexy jsou monosynaptické myotatické reflexy vyvolané rychlým protažením svalového vřeténka poklepem neurologického kladívka na šlachu. Umožňují přesnou segmentální diagnostiku míšních kořenů a odlišení centrální hyperreflexie od periferní areflexie."
        },
        "sections": [
          {
            "title": "1. Anatomie reflexního oblouku a hodnocení reflexů",
            "color": "cyan",
            "content": "\n                    <ul class=\"list-disc pl-5 space-y-1 mb-3 text-sm\">\n                        <li><strong>Reflexní oblouk:</strong> Svalové vřeténko -> aferentní Ia vlákno -> zadní kořen míšní -> přední roh míšní -> motoneuron alfa -> přední kořen míšní -> periferní nerv -> motorická ploténka -> kontrakce svalu.</li>\n                        <li><strong>Kvantitativní škála hodnocení (0 až 4+):</strong>\n                            <ul class=\"list-circle pl-5 mt-1\">\n                                <li><em>0 = Areflexie:</em> Žádná odpověď (léze periferního motoneuronu / kořene / nervu nebo míšní šok).</li>\n                                <li><em>1+ = Hyporeflexie:</em> Snížená odpověď, výbavná jen s facilitací (Jendrassikův manévr).</li>\n                                <li><em>2+ = Normoreflexie:</em> Fyziologická odpověď.</li>\n                                <li><em>3+ = Hyperreflexie:</em> Živá odpověď, rozšířená reflexogenní zóna.</li>\n                                <li><em>4+ = Klonus:</em> Trvalé rytmické kontrakce (nevyčerpatelný klonus pately či nohy = jistá známka léze 1. motoneuronu).</li>\n                            </ul>\n                        </li>\n                        <li><strong>Jendrassikův facilitační manévr:</strong> Pacient zaklesne prsty obou rukou do sebe a táhne od sebe; odvádí pozornost a zvyšuje excitabilitu míšních motoneuronů.</li>\n                    </ul>\n                "
          },
          {
            "title": "2. Přehled reflexů na horních končetinách",
            "color": "sky",
            "content": "\n                    <div class=\"overflow-x-auto my-3\">\n                        <table class=\"min-w-full text-xs text-left text-slate-200 border border-slate-700\">\n                            <thead class=\"bg-slate-800 text-cyan-300 uppercase font-mono\">\n                                <tr>\n                                    <th class=\"p-2 border border-slate-700\">Reflex</th>\n                                    <th class=\"p-2 border border-slate-700\">Místo poklepu</th>\n                                    <th class=\"p-2 border border-slate-700\">Odpověď</th>\n                                    <th class=\"p-2 border border-slate-700\">Segment / Nerv</th>\n                                </tr>\n                            </thead>\n                            <tbody>\n                                <tr class=\"border-b border-slate-800 bg-slate-900/50\">\n                                    <td class=\"p-2 font-bold text-cyan-300\">Bicipitální (Bicipital)</td>\n                                    <td class=\"p-2\">Šlacha m. biceps brachii v loketní jamce</td>\n                                    <td class=\"p-2\">Flexe předloktí</td>\n                                    <td class=\"p-2 font-bold text-emerald-400\">C5 (C6) • n. musculocutaneus</td>\n                                </tr>\n                                <tr class=\"border-b border-slate-800\">\n                                    <td class=\"p-2 font-bold text-sky-300\">Styloradiální (Brachioradial)</td>\n                                    <td class=\"p-2\">Processus styloideus radii</td>\n                                    <td class=\"p-2\">Flexe a lehká pronace předloktí</td>\n                                    <td class=\"p-2 font-bold text-emerald-400\">C6 • n. radialis</td>\n                                </tr>\n                                <tr class=\"border-b border-slate-800 bg-slate-900/50\">\n                                    <td class=\"p-2 font-bold text-indigo-300\">Tricipitální (Tricipital)</td>\n                                    <td class=\"p-2\">Šlacha m. triceps brachii nad olekranem</td>\n                                    <td class=\"p-2\">Extenze předloktí</td>\n                                    <td class=\"p-2 font-bold text-emerald-400\">C7 • n. radialis</td>\n                                </tr>\n                                <tr class=\"bg-slate-900/50\">\n                                    <td class=\"p-2 font-bold text-purple-300\">Reflex flexorů prstů</td>\n                                    <td class=\"p-2\">Šlachy flexorů na volární straně prstů</td>\n                                    <td class=\"p-2\">Flexe prstů ruky</td>\n                                    <td class=\"p-2 font-bold text-emerald-400\">C8 • n. medianus / ulnaris</td>\n                                </tr>\n                            </tbody>\n                        </table>\n                    </div>\n                "
          },
          {
            "title": "3. Přehled reflexů na dolních končetinách",
            "color": "indigo",
            "content": "\n                    <div class=\"overflow-x-auto my-3\">\n                        <table class=\"min-w-full text-xs text-left text-slate-200 border border-slate-700\">\n                            <thead class=\"bg-slate-800 text-cyan-300 uppercase font-mono\">\n                                <tr>\n                                    <th class=\"p-2 border border-slate-700\">Reflex</th>\n                                    <th class=\"p-2 border border-slate-700\">Místo poklepu</th>\n                                    <th class=\"p-2 border border-slate-700\">Odpověď</th>\n                                    <th class=\"p-2 border border-slate-700\">Segment / Nerv</th>\n                                </tr>\n                            </thead>\n                            <tbody>\n                                <tr class=\"border-b border-slate-800 bg-slate-900/50\">\n                                    <td class=\"p-2 font-bold text-cyan-300\">Patelární reflex (Knee jerk)</td>\n                                    <td class=\"p-2\">Ligamentum patellae pod čéškou</td>\n                                    <td class=\"p-2\">Extenze bérce v koleni (m. quadriceps femoris)</td>\n                                    <td class=\"p-2 font-bold text-emerald-400\">L2–L4 (hlavně L4) • n. femoralis</td>\n                                </tr>\n                                <tr class=\"border-b border-slate-800\">\n                                    <td class=\"p-2 font-bold text-sky-300\">Reflex Achillovy šlachy (RŠA / Ankle jerk)</td>\n                                    <td class=\"p-2\">Tendo calcaneus (Achillova šlacha)</td>\n                                    <td class=\"p-2\">Plantární flexe nohy (m. triceps surae)</td>\n                                    <td class=\"p-2 font-bold text-emerald-400\">L5–S2 (hlavně S1) • n. tibialis</td>\n                                </tr>\n                                <tr class=\"bg-slate-900/50\">\n                                    <td class=\"p-2 font-bold text-indigo-300\">Medioplantární reflex</td>\n                                    <td class=\"p-2\">Střed plosky nohy</td>\n                                    <td class=\"p-2\">Plantární flexe nohy a prstů</td>\n                                    <td class=\"p-2 font-bold text-emerald-400\">S1–S2 • n. tibialis</td>\n                                </tr>\n                            </tbody>\n                        </table>\n                    </div>\n                "
          }
        ]
      },
      "recall": {
        "scenarios": [
          {
            "id": "rec-q25-1",
            "title": "Kazuistika: Radikulopatie s vyhaslým reflexem Achillovy šlachy",
            "question": "45letý skladník má prudkou bolest vystřelující z bederní páteře po zadní straně stehna a lýtka do malíku pravé nohy. Při vyšetření má oslabenou plantární flexi (nestoupne si na špičku pravé nohy) a vyhaslý reflex Achillovy šlachy vpravo, zatímco patelární reflex je symetricky živý. Který míšní kořen je postižen výhřezem meziobratlové ploténky?",
            "answer": "Jedná se o klasický kořenový syndrom S1 vpravo (nejčastěji komprese způsobená mediolaterální hernií disku L5/S1). Kořen S1 inervuje m. triceps surae (nemožnost stoje na špičce), odpovídá za reflex Achillovy šlachy (vyhaslý reflex S1) a senzitivně inervuje zadní stranu lýtka, patu a malíkovou hranu nohy.",
            "pearl": "Mnemotechnická pomůcka pro segmenty reflexů: Počítejte odspodu nahoru: S1–S2 (Achilles), L3–L4 (Patela), C5–C6 (Biceps/Brachioradialis), C7–C8 (Triceps/Prsty)."
          }
        ]
      },
      "cards": [
        {
          "id": "fc-q25-1",
          "front": "Přiřaďte segmentální míšní inervaci k patelárnímu reflexu a reflexu Achillovy šlachy.",
          "back": "<strong>Patelární reflex:</strong> Segment <strong>L2–L4 (hlavně L4)</strong>, n. femoralis.<br><strong>Reflex Achillovy šlachy (RŠA):</strong> Segment <strong>L5–S2 (hlavně S1)</strong>, n. tibialis.",
          "hint": "L4 vs. S1."
        },
        {
          "id": "fc-q25-2",
          "front": "Přiřaďte segmentální míšní inervaci k bicipitálnímu a tricipitálnímu reflexu na HK.",
          "back": "<strong>Bicipitální reflex:</strong> Segment <strong>C5–C6</strong> (n. musculocutaneus).<br><strong>Tricipitální reflex:</strong> Segment <strong>C7</strong> (n. radialis).",
          "hint": "C5/C6 vs. C7."
        },
        {
          "id": "fc-q25-3",
          "front": "Co je to klonus a o jakém typu léze svědčí?",
          "back": "Klonus je <strong>série rychlých rytmických mimovolních svalových stahů</strong> vyvolaná náhlým pasivním protažením šlachy (např. klonus pately či nohy při rychlé dorzální flexi). Svědčí pro těžkou <strong>lézi centrálního motoneuronu (1. motoneuron)</strong>.",
          "hint": "Rytmické kontrakce po protažení šlachy."
        }
      ],
      "quiz": [
        {
          "id": "q25-test1",
          "question": "Vyhasnutí bicipitálního reflexu a styloradiálního reflexu při zachovaném tricipitálním reflexu svědčí pro periferní lézi v segmentu:",
          "options": [
            "C5–C6",
            "C7",
            "C8–Th1",
            "L4"
          ],
          "correctIndex": 0,
          "explanation": "Bicipitální reflex odpovídá segmentu C5 (C6) a styloradiální segmentu C6; jejich selektivní vyhasnutí svědčí pro kořenovou lézi C5–C6."
        },
        {
          "id": "q25-test2",
          "question": "Při podezření na slabou výbavnost šlachových reflexů používáme k jejich facilitaci:",
          "options": [
            "Jendrassikův manévr (zaklesnutí prstů rukou a tah od sebe)",
            "Valsalvův manévr",
            "Trendelenburgův test",
            "Lasegueův manévr"
          ],
          "correctIndex": 0,
          "explanation": "Jendrassikův manévr (zaklesnutí rukou a tah od sebe při úderu kladívkem na DK) slouží k reflexní facilitaci a ověření skutečné přítomnosti či vyhasnutí reflexu."
        }
      ]
    },
    {
      "id": "s01-epilepsie-zakladni-priznaky-typy",
      "number": 1,
      "section": "specialni",
      "sectionLabel": "Speciální neurologie",
      "badgePrefix": "S01",
      "title": "Epilepsie, základní příznaky a typy onemocnění",
      "shortDesc": "Definice epilepsie (ILAE 2017), ložiskové (fokální) vs. generalizované záchvaty, tonicko-klonické záchvaty (bilaterální GTCS), status epilepticus a farmakoterapie antiepileptiky (ASM).",
      "category": "epilepsie_vedomi",
      "badge": "Epileptologie",
      "badgeColor": "cyan",
      "theory": {
        "banner": {
          "tag": "Epileptologie • ILAE 2017",
          "title": "Epilepsie a epileptické záchvaty",
          "text": "Epileptický záchvat je přechodný výskyt příznaků způsobených abnormální nadměrnou nebo synchronní neuronální aktivitou v mozku. Epilepsie je chronické onemocnění definované výskytem alespoň 2 nevyprovokovaných záchvatů (> 24 h od sebe) nebo 1 záchvatu s vysokým rizikem rekurence (> 60 % v dalších 10 letech)."
        },
        "sections": [
          {
            "title": "1. Klasifikace epileptických záchvatů (ILAE 2017)",
            "color": "cyan",
            "content": "\n                    <div class=\"space-y-3\">\n                        <div class=\"p-3 rounded-lg bg-slate-900 border border-slate-700\">\n                            <span class=\"font-bold text-cyan-300\">1. Záchvaty s fokálním začátkem (Ložiskové):</span>\n                            <ul class=\"list-disc pl-4 text-xs text-slate-300 space-y-1 mt-1\">\n                                <li><strong>S intaktním vědomím (Focal aware seizure):</strong> Motorické (klonické záškuby jedné končetiny, jacksonovský pochod), senzorické (parestézie), autonomní, psychické či senzorické aury (čichové u uncinátních krizí).</li>\n                                <li><strong>S poruchou vědomí (Focal impaired awareness seizure):</strong> Záchvaty s pohasnutím vědomí, zárazem v činnosti a <em>automatismy</em> (orofaciální – mlaskání, žvýkání; manuální – přerovnávání předmětů). Nejčastěji z temporálního nebo frontálního laloku.</li>\n                                <li><strong>Fokální přecházející do bilaterálního tonicko-klonického záchvatu (FBTCS):</strong> Sekundární generalizace.</li>\n                            </ul>\n                        </div>\n                        <div class=\"p-3 rounded-lg bg-slate-900 border border-slate-700\">\n                            <span class=\"font-bold text-sky-300\">2. Záchvaty s generalizovaným začátkem:</span>\n                            <ul class=\"list-disc pl-4 text-xs text-slate-300 space-y-1 mt-1\">\n                                <li><strong>Generalizované tonicko-klonické záchvaty (GTCS / Grand Mal):</strong> Náhlá ztráta vědomí, iniciální výkřik (křeč hlasivek a výdech), <em>tonická fáze</em> (extenční křeč, apnoe, cyanóza 10–20 s) -> <em>klonická fáze</em> (rytmické symetrické záškuby končetin, pěna u úst, pokousání jazyka 1–2 min) -> <em>terminální spánek / postiktální zmatenost</em> s mydriázou a inkontinencí.</li>\n                                <li><strong>Absence (Petit Mal):</strong> Krátké (5–15 s) náhlé výpadky vědomí u dětí bez pádu, na EEG typické 3 Hz spike-wave komplexy.</li>\n                                <li><strong>Myoklonické záchvaty:</strong> Bleskové záškuby bez poruchy vědomí (typické ráno po probuzení u JME).</li>\n                                <li><strong>Atonické záchvaty (Drop attacks):</strong> Náhlá ztráta posturálního tonu s pádem.</li>\n                            </ul>\n                        </div>\n                    </div>\n                "
          },
          {
            "title": "2. Status epilepticus a první pomoc",
            "color": "sky",
            "content": "\n                    <div class=\"alert-box alert-cyan my-2\">\n                        <strong>🚨 Status epilepticus (SE):</strong> Trvání konvulzivního záchvatu <strong>≥ 5 minut</strong> (čas t1) NEBO dva a více záchvatů bez plného nabytí vědomí mezi nimi. Hrozí ireverzibilní neuronální poškození a systémové selhání (čas t2 = 30 min).\n                    </div>\n                    <p class=\"text-xs text-slate-300\"><strong>Algoritmus léčby Status Epilepticus:</strong></p>\n                    <ol class=\"list-decimal pl-5 text-xs text-slate-300 space-y-1\">\n                        <li><strong>0–5 min:</strong> Zajištění dýchacích cest, kyslík, zavedení i.v. vstupu, kontrola glykémie (při hypoglykémii 40% glukóza + thiamin).</li>\n                        <li><strong>5–10 min (1. linie - Benzodiazepiny):</strong> <strong>Diazepam 10 mg i.v.</strong> (pomalý bolus) nebo <em>Midazolam 10 mg i.m. / bukálně</em> nebo <em>Clonazepam 1 mg i.v.</em> Lze 1× zopakovat po 5–10 min.</li>\n                        <li><strong>10–30 min (2. linie - Nesedativní antiepileptika i.v.):</strong> <strong>Levetiracetam</strong> (40–60 mg/kg i.v., max 4500 mg) NEBO <strong>Valproát sodný</strong> (40 mg/kg i.v.) NEBO <strong>Lakosamid</strong> (200–400 mg i.v.).</li>\n                        <li><strong>> 30–60 min (Refrakterní SE - 3. linie):</strong> Celková anestezie na ARO (intubace, UPV, kontinuální EEG monitorace) – <strong>Propofol</strong>, <em>Midazolam</em> nebo <em>Thiopental</em>.</li>\n                    </ol>\n                "
          },
          {
            "title": "3. Dlouhodobá farmakoterapie (Antiepileptika - ASM)",
            "color": "indigo",
            "content": "\n                    <ul class=\"list-disc pl-5 space-y-1 mb-3 text-sm\">\n                        <li><strong>Fokální záchvaty (1. volba):</strong> <strong>Levetiracetam</strong>, <strong>Lamotrigin</strong>, <strong>Lakosamid</strong>, karbamazepin.</li>\n                        <li><strong>Generalizované záchvaty (1. volba):</strong> <strong>Valproát</strong> (pozor: teratogenita u žen ve fertilním věku!), <strong>Levetiracetam</strong>, <strong>Lamotrigin</strong>. (U absencí také <em>etosuximid</em>).</li>\n                        <li><strong>Zásady:</strong> Monoterapie v nejnižší účinné dávce s pomalou titrací. Léčba se zahajuje po 2. nevyprovokovaném záchvatu. Vysazování je možné nejdříve po 2 letech úplného bezzáchvatového období za kontroly EEG.</li>\n                    </ul>\n                "
          }
        ]
      },
      "recall": {
        "scenarios": [
          {
            "id": "rec-s01-1",
            "title": "Kazuistika: Tonicko-klonický záchvat trvající déle než 5 minut",
            "question": "V čekárně ambulance zkolaboval 28letý muž s anamnézou epilepsie. Má generalizované symetrické klonické záškuby všech končetin, pěnu u úst, pomočil se a křeče neustávají ani po 6 minutách. Jaká je diagnóza a jaký lék musíte okamžitě podat?",
            "answer": "Jedná se o rozvíjející se konvulzivní Status epilepticus (záchvat trvající ≥ 5 minut). Prvním krokem je ochrana před poraněním hlavy, uvolnění dýchacích cest a okamžité podání benzodiazepinu 1. linie: Diazepam 10 mg pomalu i.v. (nebo Midazolam 10 mg i.m. / bukálně, pokud není i.v. linka). Současně monitorujeme saturaci, EKG a podáváme kyslík polomaskou.",
            "pearl": "Během epileptického záchvatu NIKDY nevkládejte pacientovi nic do úst (lžíci, prsty, roubík) – hrozí vylomení zubů a aspirace! Stačí chránit hlavu před nárazy a po odeznění křečí dát pacienta do stabilizované polohy."
          }
        ]
      },
      "cards": [
        {
          "id": "fc-s01-1",
          "front": "Jak je definován Status epilepticus (čas t1) a jaké je riziko při prodlení?",
          "back": "Definován jako konvulzivní záchvat trvající <strong>≥ 5 minut</strong> nebo sériové záchvaty bez nabytí vědomí. Při trvání > 30 min (čas t2) hrozí <strong>ireverzibilní poškození neuronů (excitotoxicita Glu) a systémové selhání</strong>.",
          "hint": "Limit 5 minut."
        },
        {
          "id": "fc-s01-2",
          "front": "Které léky jsou 1. a 2. volbou v akutní léčbě Status epilepticus?",
          "back": "<strong>1. linie:</strong> Benzodiazepiny (<strong>Diazepam 10 mg i.v.</strong> nebo <strong>Midazolam 10 mg i.m.</strong>).<br><strong>2. linie:</strong> Nesedativní antiepileptika i.v. (<strong>Levetiracetam</strong> 60 mg/kg, <strong>Valproát</strong> nebo <strong>Lakosamid</strong>).",
          "hint": "Benzodiazepin -> Levetiracetam/Valproát."
        },
        {
          "id": "fc-s01-3",
          "front": "Proč je valproát sodný relativně kontraindikován u žen ve fertilním věku?",
          "back": "Z důvodu <strong>vysoké teratogenity</strong> (riziko rozštěpů neurální trubice - spina bifida, kraniofaciální defekty a autismus/pokles IQ u plodu). Lékem volby u žen je lamotrigin nebo levetiracetam.",
          "hint": "Teratogenita a malformace plodu."
        }
      ],
      "quiz": [
        {
          "id": "s01-test1",
          "question": "Typický generalizovaný tonicko-klonický záchvat (GTCS) je charakterizován:",
          "options": [
            "Zachovaným vědomím s izolovanými záškuby palce ruky",
            "Iniciální tonickou fází s apnoí a cyanózou, následovanou klonickou fází rytmických záškubů a postiktální zmateností",
            "Pouze náhlým pádem bez křečí",
            "Trvalým mrkáním víček bez poruchy vědomí"
          ],
          "correctIndex": 1,
          "explanation": "GTCS probíhá klasicky ve dvou fázích: tonické (generalizovaný spazmus s apnoí) a klonické (rytmické záškuby), po které následuje postiktální spánek a zmatenost."
        },
        {
          "id": "s01-test2",
          "question": "Fokální záchvat s automatismy (mlaskání, žvýkání, přerovnávání předmětů) a alterací vědomí vychází nejčastěji z:",
          "options": [
            "Temporálního laloku (meziotemporální skleróza hipokampu)",
            "Okcipitálního laloku",
            "Mozečku",
            "Míchy"
          ],
          "correctIndex": 0,
          "explanation": "Fokální záchvaty s poruchou vědomí a orofaciálními či gestuálními automatismy typicky vznikají v temporálním laloku (zejména při meziotemporální skleróze)."
        }
      ]
    },
    {
      "id": "s02-epilepticke-zachvaty-detstvi",
      "number": 2,
      "section": "specialni",
      "sectionLabel": "Speciální neurologie",
      "badgePrefix": "S02",
      "title": "Epileptické záchvaty v dětství a adolescenci",
      "shortDesc": "Febrilní křeče (prosté vs. komplikované), dětské absence (CAE), juvenilní myoklonická epilepsie (JME - Janzův syndrom), epileptické encefalopatie (Westův syndrom, Lennox-Gastaut) a benigní rolandická epilepsie (BECTS).",
      "category": "epilepsie_vedomi",
      "badge": "Dětská epileptologie",
      "badgeColor": "cyan",
      "theory": {
        "banner": {
          "tag": "Pediatrická neurologie • Syndromy",
          "title": "Epilepsie a křečové stavy v dětském věku",
          "text": "Dětský věk se vyznačuje vysokou vulnerabilitou a pohotovostí k záchvatům v důsledku nezralosti excitačně-inhibičních neuronálních okruhů. Zahrnuje jak benigní věkově vázané syndromy (BECTS, absence), tak devastující epileptické encefalopatie (West, Lennox-Gastaut) a neepileptické febrilní křeče."
        },
        "sections": [
          {
            "title": "1. Febrilní křeče (Křeče při horečce)",
            "color": "cyan",
            "content": "\n                    <p class=\"mb-2 text-sm\">Vyskytují se u dětí ve věku <strong>6 měsíců až 5 let</strong> při horečce (> 38 °C) bez intrakraniální infekce:</p>\n                    <div class=\"grid md:grid-cols-2 gap-3 my-3\">\n                        <div class=\"p-3 rounded-lg bg-slate-900 border border-slate-700\">\n                            <div class=\"font-bold text-emerald-400 mb-1\">Prosté (Jednoduché) febrilní křeče</div>\n                            <p class=\"text-xs text-slate-300\">Generalizované tonicko-klonické, trvají <strong>< 10–15 minut</strong>, <strong>neopakují se</strong> během 24 hodin jedné infekce, bez postiktální parézy. Benigní prognóza, riziko rozvoje epilepsie je minimální (cca 1–2 %).</p>\n                        </div>\n                        <div class=\"p-3 rounded-lg bg-slate-900 border border-slate-700\">\n                            <div class=\"font-bold text-rose-400 mb-1\">Komplikované febrilní křeče</div>\n                            <p class=\"text-xs text-slate-300\">Fokální začátek, trvání <strong>> 15 minut</strong>, <strong>opakují se</strong> během 24 h, nebo následuje Toddova paréza. Vyšší riziko epilepsie (až 10 %), nutno vyloučit meningitidu (LP)!</p>\n                        </div>\n                    </div>\n                    <p class=\"text-xs text-slate-300\"><strong>Terapie:</strong> Diazepam rektálně (0,5 mg/kg, tuby s gelem 5–10 mg) při trvání křečí > 3–5 min, antipyretika (paracetamol/ibuprofen), fyzikální chlazení.</p>\n                "
          },
          {
            "title": "2. Věkově vázané idiopatické generalizované a fokální epilepsie",
            "color": "sky",
            "content": "\n                    <div class=\"space-y-3\">\n                        <div class=\"p-3 rounded-lg bg-slate-900 border border-slate-700\">\n                            <span class=\"font-bold text-cyan-300\">Dětské absence (Childhood Absence Epilepsy - CAE):</span>\n                            <p class=\"text-xs text-slate-300 mt-1\">Věk 4–10 let. Desítky až stovky krátkých (5–15 s) zárazů v činnosti za den (dítě 'kouká do prázdna'). Provokace hyperventilací. <strong>EEG:</strong> Bilaterální synchronní komplexy <strong>hrot-vlna 3 Hz</strong>. Lék volby: <em>Etosuximid</em> nebo <em>Valproát</em>.</p>\n                        </div>\n                        <div class=\"p-3 rounded-lg bg-slate-900 border border-slate-700\">\n                            <span class=\"font-bold text-sky-300\">Juvenilní myoklonická epilepsie (JME / Janzův syndrom):</span>\n                            <p class=\"text-xs text-slate-300 mt-1\">Věk 12–18 let. <strong>Ranní myoklonické záškuby HKK</strong> (vypadávání hrnku z ruky při snídani) + GTCS vyvolané spánkovou deprivací a alkoholem + fotosenzitivita. Lék volby: <em>Valproát</em>, <em>Levetiracetam</em>, <em>Lamotrigin</em>.</p>\n                        </div>\n                        <div class=\"p-3 rounded-lg bg-slate-900 border border-slate-700\">\n                            <span class=\"font-bold text-indigo-300\">Benigní rolandická epilepsie (BECTS):</span>\n                            <p class=\"text-xs text-slate-300 mt-1\">Nejčastější fokální epilepsie dětství. Noční záchvaty s parestéziemi tváře, křečemi koutku a sliněním (anartrie při zachovaném vědomí). Spontánně odeznívá v pubertě.</p>\n                        </div>\n                    </div>\n                "
          },
          {
            "title": "3. Těžké epileptické encefalopatie (West & Lennox-Gastaut)",
            "color": "indigo",
            "content": "\n                    <div class=\"grid md:grid-cols-2 gap-3 my-3\">\n                        <div class=\"p-3 rounded-lg bg-slate-900 border border-slate-700\">\n                            <div class=\"font-bold text-rose-400 mb-1\">👶 Westův syndrom (Infantilní spazmy)</div>\n                            <p class=\"text-xs text-slate-300 mb-1\">Věk: 3–12 měsíců. <strong>Triáda:</strong> 1. Infantilní spazmy (bleskové flexe/extenze trupu v sériích - bleskové křeče / záchvaty Salaam), 2. Zástava/regres psychomotorického vývoje, 3. <strong>Hypsarytmie na EEG</strong> (chaotická vysokovoltážní aktivita).</p>\n                            <p class=\"text-xs text-emerald-400\"><strong>Léčba:</strong> ACTH (kortikotropní hormon) nebo <em>Vigabatrin</em> (lék 1. volby u tuberózní sklerózy).</p>\n                        </div>\n                        <div class=\"p-3 rounded-lg bg-slate-900 border border-slate-700\">\n                            <div class=\"font-bold text-purple-400 mb-1\">👦 Lennox-Gastautův syndrom (LGS)</div>\n                            <p class=\"text-xs text-slate-300 mb-1\">Věk: 2–7 let. Polymorfní mnohočetné záchvaty (atonické drop-attacks, tonické, atypické absence), těžká mentální retardace, EEG: pomalé spike-wave komplexy (< 2.5 Hz). Extrémně farmakorezistentní.</p>\n                        </div>\n                    </div>\n                "
          }
        ]
      },
      "recall": {
        "scenarios": [
          {
            "id": "rec-s02-1",
            "title": "Kazuistika: Ranní vypadávání předmětů z rukou u studentky",
            "question": "16letá studentka gymnázia po probdělé noci při učení na písemku zažila ráno při snídani několik prudkých svalových záškubů obou paží, při kterých jí vypadl hrnek s čajem na zem. Byla plně při vědomí. Následně došlo k generalizovanému tonicko-klonickému záchvatu s bezvědomím. O jaký syndrom se jedná a co je lékem volby?",
            "answer": "Jedná se o klasickou Juvenilní myoklonickou epilepsii (JME / Janzův syndrom). Je charakterizována ranními myokloniemi paží (bez poruchy vědomí) a GTCS po spánkové deprivaci. Lékem volby je levetiracetam nebo lamotrigin (u dívek ve fertilním věku) nebo valproát sodný (u chlapců).",
            "pearl": "U JME jsou přísně kontraindikována sodíková antiepileptika (karbamazepin, fenytoin), protože mohou paradoxně zhoršit myoklonie a vyvolat status epilepticus!"
          }
        ]
      },
      "cards": [
        {
          "id": "fc-s02-1",
          "front": "Co tvoří klasickou triádu Westova syndromu u kojenců?",
          "back": "1. <strong>Infantilní spazmy</strong> (sériové flekční záchvaty 'Salaam').<br>2. <strong>Zástava / regres psychomotorického vývoje</strong>.<br>3. <strong>Hypsarytmie</strong> na EEG (chaotický vysokovoltážní vzorec).",
          "hint": "Spazmy, vývoj, hypsarytmie."
        },
        {
          "id": "fc-s02-2",
          "front": "Jaký je EEG korelát typických dětských absencí (Petit Mal)?",
          "back": "Generalizované, synchronní a symetrické <strong>komplexy hrot-vlna o frekvenci přesně 3 Hz</strong> (provokovatelné hyperventilací).",
          "hint": "Hrot-vlna 3 Hz."
        },
        {
          "id": "fc-s02-3",
          "front": "Jaká je definice prostých febrilních křečí a jaká je první pomoc při záchvatu?",
          "back": "Generalizované křeče při horečce trvající <strong>< 10–15 minut</strong> u dětí od 6 měsíců do 5 let, neopakují se do 24 h. První pomoc: <strong>Diazepam rektálně</strong> (0,5 mg/kg gel) + fyzikální chlazení a antipyretika.",
          "hint": "Krátké generalizované křeče a rektální diazepam."
        }
      ],
      "quiz": [
        {
          "id": "s02-test1",
          "question": "Lékem první volby pro typické dětské absence (CAE) s 3 Hz hrot-vlna komplexy na EEG je:",
          "options": [
            "Etosuximid (nebo valproát sodný)",
            "Karbamazepin",
            "Fenytoin",
            "Baklofen"
          ],
          "correctIndex": 0,
          "explanation": "Etosuximid selektivně blokuje T-typ Ca2+ kanálů v thalamu a je lékem 1. volby u izolovaných dětských absencí."
        },
        {
          "id": "s02-test2",
          "question": "U kojence s Westovým syndromem a tuberózní sklerózou je lékem první volby:",
          "options": [
            "Vigabatrin",
            "Karbamazepin",
            "Diazepam dlouhodobě",
            "Atropin"
          ],
          "correctIndex": 0,
          "explanation": "Vigabatrin (inhibitor GABA-transaminázy) je vysoce specifickým a účinným lékem volby pro infantilní spazmy (Westův syndrom) asociované s tuberózní sklerózou."
        }
      ]
    },
    {
      "id": "s03-cevni-mozkove-prihody-ischemicke",
      "number": 3,
      "section": "specialni",
      "sectionLabel": "Speciální neurologie",
      "badgePrefix": "S03",
      "title": "Cévní mozkové příhody ischemické",
      "shortDesc": "Etiologie (TOAST klasifikace: kardioembolie, makroangiopatie, mikroangiopatie), klinické syndromy (ACM, ACA, ACP, vertebrobazilární), časové okno pro systémovou trombolýzu (IVT) a mechanickou trombektomii (MT).",
      "category": "cevni_urgentni",
      "badge": "Ischemická CMP",
      "badgeColor": "cyan",
      "theory": {
        "banner": {
          "tag": "Neurovaskulární urgence • Ischémie",
          "title": "Akutní ischemická cévní mozková příhoda (iCMP)",
          "text": "Ischemická CMP (85 % všech iktů) vzniká náhlou poruchou krevního zásobení části mozku trombózou nebo embolií. Klíčem k záchraně ischemické penumbry (funkčně vyřazené, ale ještě nekrotické tkáně) je ultračasná rekanalisace: 'Time is brain' (každou minutu zaniká 1,9 milionu neuronů)."
        },
        "sections": [
          {
            "title": "1. Etiologie a TOAST klasifikace",
            "color": "cyan",
            "content": "\n                    <ul class=\"list-disc pl-5 space-y-1 mb-3 text-sm\">\n                        <li><strong>1. Kardioembolická (25–30 %):</strong> Fibrilace síní (nejčastější!), trombus v levé síni/komoře, chlopenní vady, endokarditida, foramen ovale patens (PFO - paradoxní embolie).</li>\n                        <li><strong>2. Aterotrombotická / Makroangiopatie (20–25 %):</strong> Stenóza a aterosklerotický plát na <em>a. carotis interna (ACI)</em>, bifurkaci či vertebrální tepně s mikroembolizací nebo akutním uzávěrem.</li>\n                        <li><strong>3. Mikroangiopatie / Malocévní (20 % - Lakunární infarkty):</strong> Lipohyalinóza drobných perforujících tepének (arterioloskléza u hypertenze a diabetu) -> subkortikální lakuny (< 15 mm) v capsula interna, bazálních gangliích či pontu (čistě motorická hemiparéza, čistě senzitivní iktus).</li>\n                        <li><strong>4. Jiná vzácná etiologie (5 %):</strong> Disekce krční tepny (mladí pacienti po úrazu krku), vaskulitidy, antifosfolipidový syndrom, trombofilie.</li>\n                    </ul>\n                "
          },
          {
            "title": "2. Teritoriální klinické syndromy",
            "color": "sky",
            "content": "\n                    <div class=\"space-y-3\">\n                        <div class=\"p-3 rounded-lg bg-slate-900 border border-slate-700\">\n                            <span class=\"font-bold text-cyan-300\">Arteria cerebri media (ACM - nejčastější, 70 %):</span>\n                            <p class=\"text-xs text-slate-300 mt-1\">Kontralaterální <strong>faciobrachiální spastická hemiparéza</strong> a hemihypestézie, homonymní hemianopsie, konjugovaná deviace bulbů k ložisku ('dívá se na své ložisko'). V dominantní hemisféře: <strong>Afázie (Brocova/Wernickeova/globální)</strong>. V nedominantní: <strong>Neglect syndrom</strong> a anosognózie.</p>\n                        </div>\n                        <div class=\"p-3 rounded-lg bg-slate-900 border border-slate-700\">\n                            <span class=\"font-bold text-sky-300\">Arteria cerebri anterior (ACA):</span>\n                            <p class=\"text-xs text-slate-300 mt-1\">Kontralaterální <strong>krurální hemiparéza</strong> (převaha parézy dolní končetiny), abulie, apatie, inkontinence moči.</p>\n                        </div>\n                        <div class=\"p-3 rounded-lg bg-slate-900 border border-slate-700\">\n                            <span class=\"font-bold text-indigo-300\">Vertebrobazilární povodí (VBP / ACP):</span>\n                            <p class=\"text-xs text-slate-300 mt-1\">Kmenové syndromy (alternující parézy, diplopie, dysfagie, vertigo, ataxie), uzávěr <em>a. basilaris</em> (kvadruplegie, kóma, locked-in syndrom), <em>a. cerebri posterior (ACP)</em>: kontralaterální homonymní hemianopsie s makulárním šetřením, talamický syndrom.</p>\n                        </div>\n                    </div>\n                "
          },
          {
            "title": "3. Akutní reperfuzní léčba (Trombolýza a Trombektomie)",
            "color": "indigo",
            "content": "\n                    <div class=\"grid md:grid-cols-2 gap-3 my-3\">\n                        <div class=\"p-3 rounded-lg bg-slate-900 border border-slate-700\">\n                            <div class=\"font-bold text-emerald-400 mb-1\">💉 Intravenózní trombolýza (IVT)</div>\n                            <p class=\"text-xs text-slate-300 mb-1\"><strong>Lék:</strong> rekombinantní tkáňový aktivátor plasminogenu (rtPA - <em>Altepláza</em> 0,9 mg/kg nebo <em>Tenektepláza</em>).</p>\n                            <p class=\"text-xs text-rose-300 mb-1\"><strong>Časové okno:</strong> Do <strong>4,5 hodiny</strong> od začátku symptomů (nebo probuzení s mismatch na MR DWI/FLAIR).</p>\n                            <p class=\"text-xs text-slate-300\"><strong>Podmínky:</strong> Vyloučení krvácení na nativním CT, TK < 185/110 mmHg, INR < 1.7.</p>\n                        </div>\n                        <div class=\"p-3 rounded-lg bg-slate-900 border border-slate-700\">\n                            <div class=\"font-bold text-cyan-400 mb-1\">🪝 Mechanická trombektomie (MT)</div>\n                            <p class=\"text-xs text-slate-300 mb-1\"><strong>Princip:</strong> Endovaskulární extrakce trombu pomocí stent-retrieveru / aspirace v iktovém centru.</p>\n                            <p class=\"text-xs text-emerald-400 mb-1\"><strong>Indikace:</strong> Okluze velké intrakraniální tepny (LVO - ACI, ACM kmen M1, a. basilaris).</p>\n                            <p class=\"text-xs text-rose-300\"><strong>Časové okno:</strong> Do <strong>6 hodin</strong> (dle perfuzního CT/MR až do 24 hodin při přítomnosti penumbry!).</p>\n                        </div>\n                    </div>\n                "
          }
        ]
      },
      "recall": {
        "scenarios": [
          {
            "id": "rec-s03-1",
            "title": "Kazuistika: Akutní pokles koutku a obrna pravé ruky s afázií",
            "question": "70letá pacientka s fibrilací síní náhle v 8:00 přestala mluvit a ochrnula na pravou ruku a nohu. V 8:45 dorazila na emergency iktového centra. Nativní CT mozku vyloučilo krvácení a na CTA je prokázán uzávěr kmene levé arteria cerebri media (M1 segment). Jaký je okamžitý terapeutický postup?",
            "answer": "Pacientka je v časovém okně (čas od vzniku 45 minut). Okamžitě zahajujeme intravenózní systémovou trombolýzu (Altepláza 0,9 mg/kg i.v. - 10 % bolus, zbytek v 60min infuzi) a BEZ ČEKÁNÍ na její efekt pacientku ihned transportujeme na angiolinku k provedení emergentní mechanické endovaskulární trombektomie (bridgeing terapie IVT + MT) k rekanalizaci M1 segmentu.",
            "pearl": "Při podezření na CMP zkontrolujte u lůžka jako první věc glykémii glukometrem – těžká hypoglykémie je nejčastějším 'stroke mimic', který dokonale imituje akutní hemiparézu a afázii!"
          }
        ]
      },
      "cards": [
        {
          "id": "fc-s03-1",
          "front": "Jaké je standardní časové okno pro intravenózní trombolýzu (IVT) a pro mechanickou trombektomii (MT)?",
          "back": "<strong>Intravenózní trombolýza (IVT):</strong> Do <strong>4,5 hodiny</strong> od začátku symptomů.<br><strong>Mechanická trombektomie (MT):</strong> Standardně do <strong>6 hodin</strong> (u selektovaných pacientů s penumbrou na CTP až do 24 h).",
          "hint": "4,5 h vs. 6 (24) h."
        },
        {
          "id": "fc-s03-2",
          "front": "Jaký klinický obraz je typický pro okluzi arteria cerebri media (ACM) v dominantní hemisféře?",
          "back": "1. <strong>Kontralaterální faciobrachiální hemiparéza</strong> a hemihypestézie.<br>2. <strong>Globální / Brocova afázie</strong>.<br>3. Homonymní hemianopsie a konjugovaná deviace pohledu k ložisku.",
          "hint": "Tvář + ruka + řeč."
        },
        {
          "id": "fc-s03-3",
          "front": "Jaká je nejčastější příčina kardioembolické ischemické CMP a jaká je sekundární prevence?",
          "back": "Příčina: <strong>Fibrilace síní</strong> (tvorba trombu v oušku levé síně).<br>Sekundární prevence: <strong>Přímá orální antikoagulancia (DOAC</strong> – apixaban, rivaroxaban, dabigatran, edoxaban) nebo warfarin.",
          "hint": "Fibrilace síní a DOAC."
        }
      ],
      "quiz": [
        {
          "id": "s03-test1",
          "question": "Ischémie v povodí arteria cerebri anterior (ACA) se typicky projeví:",
          "options": [
            "Převahou parézy dolní končetiny (krurální hemiparéza) kontralaterálně",
            "Převahou faciobrachiální parézy",
            "Izolovanou homonymní hemianopsií bez parézy",
            "Kmenovým alternujícím syndromem"
          ],
          "correctIndex": 0,
          "explanation": "Arteria cerebri anterior zásobuje mediální plochu hemisféry (motorický homunkulus pro dolní končetinu), proto způsobuje převahu krurální parézy."
        },
        {
          "id": "s03-test2",
          "question": "Při akutní ischemické CMP je absolutní kontraindikací intravenózní trombolýzy:",
          "options": [
            "Přítomnost intrakraniálního krvácení na nativním CT mozku",
            "Věk nad 80 let",
            "Přítomnost fibrilace síní",
            "Střední deficit s lehkou parézou končetiny"
          ],
          "correctIndex": 0,
          "explanation": "Intrakraniální hemoragie na CT je absolutní kontraindikací trombolýzy, protože podání rtPA by způsobilo fatální progresi krvácení."
        }
      ]
    },
    {
      "id": "s04-subduralni-epiduralni-krvaceni",
      "number": 4,
      "section": "specialni",
      "sectionLabel": "Speciální neurologie",
      "badgePrefix": "S04",
      "title": "Subdurální a epidurální intrakraniální krvácení",
      "shortDesc": "Epidurální hematom (EDH, a. meningea media, lucidní interval, bikonvexní čočkovitý tvar na CT), akutní a chronický subdurální hematom (SDH, přemosťující žíly, poloměsíčitý srpkovitý tvar na CT, senioři, alkoholici) a terapie.",
      "category": "cevni_urgentni",
      "badge": "Traumatické krvácení",
      "badgeColor": "cyan",
      "theory": {
        "banner": {
          "tag": "Neurotraumatologie • Hematomy",
          "title": "Epidurální a subdurální hematom",
          "text": "Traumatická intrakraniální krvácení se liší lokalizací vůči tvrdé pleně (dura mater), zdrojem krvácení (arteriální vs. venózní), dynamikou rozvoje a morfologií na CT. Epidurální hematom je urgentní arteriální stav, subdurální hematom je častější u seniorů s mozkovou atrofií."
        },
        "sections": [
          {
            "title": "1. Epidurální hematom (EDH)",
            "color": "cyan",
            "content": "\n                    <ul class=\"list-disc pl-5 space-y-1 mb-3 text-sm\">\n                        <li><strong>Anatomická lokalizace:</strong> Mezi <strong>vnitřní laminou kalvy a dura mater</strong> (epidurální prostor je virtuální, krev duru násilně odlepuje od kosti).</li>\n                        <li><strong>Zdroj krvácení:</strong> <strong>Arteria meningea media</strong> (85 %) při fisuře spánkové kosti (squama ossis temporalis).</li>\n                        <li><strong>Klinický průběh (Klasický lucidní interval):</strong> Úraz hlavy s krátkým bezvědomím -> probuzení k plnému vědomí ('lucidní interval' trvající 1–6 hodin) -> náhlé prudké zhoršení: krutá bolest hlavy, zvracení, <strong>ipsilaterální mydriáza</strong> (tlak na n. III při uncální herniaci), <strong>kontralaterální hemiparéza</strong> a rychlý pád do hlubokého kómatu.</li>\n                        <li><strong>Nález na CT mozku:</strong> <strong>Bikonvexní (čočkovitý / bikonvexní)</strong> hyperdenzní ložisko ohraničené lebečními švy (dura pevně lne ke švům).</li>\n                        <li><strong>Léčba:</strong> Urgentní kraniotomie a chirurgická evakuace hematomu s podvazem/koagulací tepny.</li>\n                    </ul>\n                "
          },
          {
            "title": "2. Subdurální hematom (SDH - Akutní vs. Chronický)",
            "color": "sky",
            "content": "\n                    <ul class=\"list-disc pl-5 space-y-1 mb-3 text-sm\">\n                        <li><strong>Anatomická lokalizace:</strong> Mezi <strong>dura mater a arachnoideou</strong>.</li>\n                        <li><strong>Zdroj krvácení:</strong> <strong>Přemosťující žíly (vv. cerebri superiores / bridging veins)</strong> vstupující do sinus sagittalis superior.</li>\n                        <li><strong>Nález na CT mozku:</strong> <strong>Konkavokonvexní (srpkovitý / poloměsíčitý)</strong> lem podél konvexity hemisféry, který <em>překračuje lebeční švy</em>.</li>\n                        <li><strong>Formy dle dynamiky:</strong>\n                            <ul class=\"list-circle pl-5 mt-1\">\n                                <li><strong>Akutní SDH (do 72 h):</strong> Těžké trauma s kontuzí mozku. Na CT <em>hyperdenzní (bílý)</em> srpkovitý lem s masivním přetlakem středočárových struktur. Vysoká mortalita (50–70 %), indikována urgentní dekompresní kraniektomie.</li>\n                                <li><strong>Chronický SDH (> 3 týdny):</strong> Senioři, alkoholici a pacienti na antikoagulanciích (atrofie mozku napíná přemosťující žíly -> stačí banální úder do hlavy). Krev zkapalňuje -> na CT <em>hypodenzní (tmavý) či izodenzní</em>. Klinika: Plíživé bolesti hlavy, změna osobnosti, fluktuující kognitivní porucha, lehká hemiparéza (imituje demenci či CMP!). Léčba: Trepanace (návrt lebky) a drenáž.</li>\n                            </ul>\n                        </li>\n                    </ul>\n                "
          },
          {
            "title": "3. Srovnávací přehled EDH vs. SDH",
            "color": "indigo",
            "content": "\n                    <div class=\"overflow-x-auto my-3\">\n                        <table class=\"min-w-full text-xs text-left text-slate-200 border border-slate-700\">\n                            <thead class=\"bg-slate-800 text-cyan-300 uppercase font-mono\">\n                                <tr>\n                                    <th class=\"p-2 border border-slate-700\">Vlastnost</th>\n                                    <th class=\"p-2 border border-slate-700\">Epidurální hematom (EDH)</th>\n                                    <th class=\"p-2 border border-slate-700\">Subdurální hematom (SDH)</th>\n                                </tr>\n                            </thead>\n                            <tbody>\n                                <tr class=\"border-b border-slate-800 bg-slate-900/50\">\n                                    <td class=\"p-2 font-bold\">Zdroj krvácení</td>\n                                    <td class=\"p-2 text-rose-400 font-bold\">Arteriální (a. meningea media)</td>\n                                    <td class=\"p-2 text-sky-300 font-bold\">Venózní (přemosťující žíly)</td>\n                                </tr>\n                                <tr class=\"border-b border-slate-800\">\n                                    <td class=\"p-2 font-bold\">Tvar na CT</td>\n                                    <td class=\"p-2 text-cyan-300 font-bold\">Bikonvexní (čočka), nepřekračuje švy</td>\n                                    <td class=\"p-2 text-cyan-300 font-bold\">Srpkovitý (poloměsíc), překračuje švy</td>\n                                </tr>\n                                <tr class=\"border-b border-slate-800 bg-slate-900/50\">\n                                    <td class=\"p-2 font-bold\">Typická populace</td>\n                                    <td class=\"p-2\">Mladí dospělí po traumatu spánku</td>\n                                    <td class=\"p-2\">Senioři, alkoholici, antikoagulovaní</td>\n                                </tr>\n                                <tr class=\"bg-slate-900/50\">\n                                    <td class=\"p-2 font-bold\">Průběh</td>\n                                    <td class=\"p-2 text-amber-300\">Lucidní interval -> rychlá dekompenzace</td>\n                                    <td class=\"p-2\">Akutní (koma) NEBO chronický (plíživý)</td>\n                                </tr>\n                            </tbody>\n                        </table>\n                    </div>\n                "
          }
        ]
      },
      "recall": {
        "scenarios": [
          {
            "id": "rec-s04-1",
            "title": "Kazuistika: Senior s fluktuující zmateností po lehkém pádu před měsícem",
            "question": "78letý pacient léčený warfarinem pro fibrilaci síní byl přivezen pro progredující zapomnětlivost, zpomalení a nově lehkou hemiparézu vlevo. Rodina si vzpomíná, že před 4 týdny upadl v koupelně a lehce se uhodil do hlavy. Na nativním CT mozku je přítomen široký poloměsíčitý hypodenzní lem podél pravé hemisféry s přetlakem středových struktur. O jakou diagnózu se jedná a jaký chirurgický výkon je indikován?",
            "answer": "Jedná se o chronický subdurální hematom (cSDH) vpravo s expanzivním chováním. Vznikl po lehkém traumatu rupturou přemosťující žíly na podkladě mozkové atrofie a antikoagulační léčby. Metodou volby je chirurgická evakuace hematomu z návrtu (trepanace) lebky s promytím kavity a zavedením subdurálního drénu na 24–48 hodin.",
            "pearl": "U mladých lidí při epidurálním hematomu po fraktuře spánkové kosti dochází k rychlému rozvoji anizokorie (mydriáza na straně hematomu) v důsledku přímého útlaku n. III uncem temporálního laloku."
          }
        ]
      },
      "cards": [
        {
          "id": "fc-s04-1",
          "front": "Jaký je anatomický zdroj krvácení a typický tvar na CT u epidurálního hematomu?",
          "back": "Zdroj: <strong>Arteria meningea media</strong>.<br>Tvar na CT: <strong>Bikonvexní (čočkovitý)</strong> hyperdenzní útvar, který <em>nepřekračuje lebeční švy</em>.",
          "hint": "Tepna a čočkovitý tvar."
        },
        {
          "id": "fc-s04-2",
          "front": "Jaký je anatomický zdroj krvácení a typický tvar na CT u subdurálního hematomu?",
          "back": "Zdroj: <strong>Přemosťující žíly (bridging veins)</strong>.<br>Tvar na CT: <strong>Konkavokonvexní (srpkovitý / poloměsíčitý)</strong> lem, který <em>volně překračuje lebeční švy</em>.",
          "hint": "Žíly a srpkovitý tvar."
        },
        {
          "id": "fc-s04-3",
          "front": "Popište klasický 'lucidní interval' u epidurálního hematomu.",
          "back": "Úraz hlavy s krátkým iniciálním bezvědomím -> <strong>přechodné plné nabytí vědomí a relativní klid (lucidní interval 1–6 h)</strong> -> následné prudké zhoršení stavu s bolestí hlavy, mydriázou a komatem.",
          "hint": "Úraz -> probuzení -> náhlé kóma."
        }
      ],
      "quiz": [
        {
          "id": "s04-test1",
          "question": "Na nativním CT mozku se chronický subdurální hematom (starší než 3 týdny) zobrazuje typicky jako:",
          "options": [
            "Bikonvexní zářivě bílá hyperdenzita",
            "Srpkovitý hypodenzní (tmavý) až izodenzní lem podél kalvy překračující švy",
            "Drobná kalcifikace v zadní jámě",
            "Krvácení do mozkových komor"
          ],
          "correctIndex": 1,
          "explanation": "V průběhu 3 týdnů dochází k lýze erytrocytů a zkapalnění hematomu, takže se chronický SDH stává na CT hypodenzním (tmavým)."
        },
        {
          "id": "s04-test2",
          "question": "Epidurální hematom nejčastěji vzniká traumatickým roztržením:",
          "options": [
            "Arteria meningea media při fraktuře spánkové kosti",
            "Přemosťujících žil",
            "Arteria basilaris",
            "Plexus choroideus"
          ],
          "correctIndex": 0,
          "explanation": "Fraktura squama ossis temporalis s lacerací arteria meningea media je klasickou příčinou arteriálního epidurálního hematomu."
        }
      ]
    },
    {
      "id": "s05-subarachnoidalni-krvaceni",
      "number": 5,
      "section": "specialni",
      "sectionLabel": "Speciální neurologie",
      "badgePrefix": "S05",
      "title": "Subarachnoidální krvácení",
      "shortDesc": "Etiologie (ruptura aneuryzmatu Willisova okruhu, AVM), klinický obraz (blesková bolest hlavy thunderclap, meningismus), diagnostický algoritmus (nativní CT -> lumbální punkce s xantochromií -> CTA / DSA) a terapie (coiling vs. clipping, nimodipin proti vazospazmům).",
      "category": "cevni_urgentni",
      "badge": "SAB & Aneuryzmata",
      "badgeColor": "cyan",
      "theory": {
        "banner": {
          "tag": "Neurovaskulární urgence • SAB",
          "title": "Subarachnoidální krvácení (SAB)",
          "text": "Subarachnoidální krvácení představuje vniknutí arteriální krve do subarachnoidálního prostoru (mezi arachnoideu a pia mater). V 85 % je netraumatické SAB způsobeno rupturou vakovitého aneuryzmatu na Willisově okruhu. Jde o život ohrožující stav s 30denní mortalitou až 40–50 %."
        },
        "sections": [
          {
            "title": "1. Etiologie a predilekční lokalizace aneuryzmat",
            "color": "cyan",
            "content": "\n                    <ul class=\"list-disc pl-5 space-y-1 mb-3 text-sm\">\n                        <li><strong>Netraumatické (Spontánní) SAB (85 %):</strong> Ruptura sakulárního (vakovitého) aneuryzmatu na cévních bifurkacích Willisova okruhu:\n                            <ul class=\"list-circle pl-5 mt-1\">\n                                <li><em>Arteria communicans anterior (AComA):</em> 35 % (nejčastější).</li>\n                                <li><em>Arteria communicans posterior (AComP) / ACI:</em> 30 % (typická paréza n. III s mydriázou!).</li>\n                                <li><em>Arteria cerebri media (ACM bifurkace):</em> 20 %.</li>\n                                <li><em>Vertebrobazilární povodí (a. basilaris, PICA):</em> 10 %.</li>\n                            </ul>\n                        </li>\n                        <li><strong>Ostatní příčiny (15 %):</strong> Arteriovenózní malformace (AVM), perimesencefalické nekrvácivé krvácení, disekce vertebrální tepny.</li>\n                        <li><strong>Rizikové faktory:</strong> Arteriální hypertenze, kouření, abúzus alkoholu, polycystická choroba ledvin (ADPKD), Marfanův syndrom.</li>\n                    </ul>\n                "
          },
          {
            "title": "2. Klinický obraz a Hunt-Hessova škála",
            "color": "sky",
            "content": "\n                    <ul class=\"list-disc pl-5 space-y-1 mb-3 text-sm\">\n                        <li><strong>Kardinální symptom:</strong> <strong>Blesková, extrémně krutá bolest hlavy ('thunderclap headache')</strong> – pacient ji popisuje jako 'nejhorší bolest hlavy v životě' nebo 'úder blesku / baseballovou pálkou do zátylku'. Maximum bolesti nastupuje během sekund.</li>\n                        <li><strong>Doprovodné příznaky:</strong> Nauzea, projektilové zvracení, synkopa/krátkodobé bezvědomí, vegetativní bouře, rozvoj <strong>meningeálního syndromu</strong> (opozice šíje se rozvíjí za 3–6 h), světloplachost.</li>\n                        <li><strong>Klasifikace Hunt-Hess:</strong>\n                            <ul class=\"list-circle pl-5 mt-1 text-xs text-slate-300\">\n                                <li><em>Stupeň 1:</em> Asymptomatický nebo lehká bolest hlavy a opozice šíje.</li>\n                                <li><em>Stupeň 2:</em> Střední až těžká bolest hlavy, opozice šíje, obrna hlavového nervu (např. n. III).</li>\n                                <li><em>Stupeň 3:</em> Somnolence, zmatenost, lehký ložiskový deficit.</li>\n                                <li><em>Stupeň 4:</em> Sopor, hemiparéza, vegetativní poruchy.</li>\n                                <li><em>Stupeň 5:</em> Hluboké kóma, decerebrační křeče, agónie.</li>\n                            </ul>\n                        </li>\n                    </ul>\n                "
          },
          {
            "title": "3. Diagnostický algoritmus a léčba",
            "color": "indigo",
            "content": "\n                    <div class=\"space-y-2 text-xs text-slate-300\">\n                        <div class=\"p-2 rounded bg-slate-900 border border-slate-700\">\n                            <strong class=\"text-cyan-300\">1. Krok: Nativní CT mozku:</strong> Metoda 1. volby (senzitivita > 95 % v prvních 24 h). Zobrazí hyperdenzní krev v subarachnoidálních cisternách a rýhách (sylviánská rýha, bazální cisterny).\n                        </div>\n                        <div class=\"p-2 rounded bg-slate-900 border border-slate-700\">\n                            <strong class=\"text-cyan-300\">2. Krok: Lumbální punkce (při negativním CT!):</strong> Pokud je CT negativní, ale podezření trvá -> LP za 6–12 h. Průkaz <strong>xantochromního supernatantu po centrifugaci</strong> (spektrofotometrie bilirubinu).\n                        </div>\n                        <div class=\"p-2 rounded bg-slate-900 border border-slate-700\">\n                            <strong class=\"text-cyan-300\">3. Krok: CTA / DSA (Cévní mapování):</strong> K lokalizaci aneuryzmatu.\n                        </div>\n                        <div class=\"p-2 rounded bg-slate-900 border border-slate-700\">\n                            <strong class=\"text-emerald-400\">Ošetření aneuryzmatu (do 24–72 h):</strong> <strong>Endovaskulární coiling</strong> (vyplnění vaku platinovými spirálkami) NEBO <strong>Neurochirurgický clipping</strong> (zasvorkování krčku aneuryzmatu).\n                        </div>\n                        <div class=\"p-2 rounded bg-slate-900 border border-slate-700\">\n                            <strong class=\"text-amber-400\">Prevence vazospazmů (Delayed Cerebral Ischemia):</strong> Blokátor Ca2+ kanálů <strong>Nimodipin p.o./i.v.</strong> po dobu 21 dní + udržování normovolémie a eufunkce.\n                        </div>\n                    </div>\n                "
          }
        ]
      },
      "recall": {
        "scenarios": [
          {
            "id": "rec-s05-1",
            "title": "Kazuistika: Blesková bolest hlavy po zvednutí břemene s negativním CT",
            "question": "36letý muž pocítil při zvedání těžkého břemene náhlou explozivní bolest hlavy v zátylku se zvracením. Nativní CT mozku provedené 3 hodiny po začátku potíží je hodnoceno jako normální. Vylučuje negativní CT subarachnoidální krvácení a jaký je další postup?",
            "answer": "NE, negativní CT mozku nevylučuje SAB (v cca 2–5 % případů může být množství krve na CT nezachytitelné). Je OBLIGATORNÍ provést lumbální punkci s odstupem alespoň 6–12 hodin od vzniku bolesti (pro rozvoj xantochromie rozpadem erytrocytů). Pokud spektrofotometrie moku potvrdí xantochromii, okamžitě indikujeme CT angiografii (CTA) nebo digitální subtrakční angiografii (DSA) k nalezení aneuryzmatu.",
            "pearl": "Nejzávažnější komplikací SAB v odstupu 4–14 dnů jsou sekundární cerebrální vazospazmy vedoucí k ischémii mozku; prevencí je podávání nimodipinu 60 mg po 4 hodinách p.o."
          }
        ]
      },
      "cards": [
        {
          "id": "fc-s05-1",
          "front": "Jaká je nejčastější příčina netraumatického subarachnoidálního krvácení (SAB)?",
          "back": "<strong>Ruptura intrakraniálního sakulárního aneuryzmatu</strong> na Willisově okruhu (nejčastěji a. communicans anterior a a. communicans posterior).",
          "hint": "Cévní aneuryzma na Willisově okruhu."
        },
        {
          "id": "fc-s05-2",
          "front": "Jaký je diagnostický postup při podezření na SAB při negativním nativním CT mozku?",
          "back": "Provedení <strong>lumbální punkce s odstupem 6–12 hodin</strong> a vyšetření moku na <strong>xantochromii po centrifugaci</strong> (spektrofotometrie bilirubinu).",
          "hint": "Lumbální punkce a xantochromie."
        },
        {
          "id": "fc-s05-3",
          "front": "Který lék je standardně podáván jako prevence mozkových vazospazmů po SAB?",
          "back": "<strong>Nimodipin</strong> (specifický cerebrovaskulární blokátor kalciových kanálů) podávaný po dobu 21 dní.",
          "hint": "Blokátor Ca2+ kanálů na cévy mozku."
        }
      ],
      "quiz": [
        {
          "id": "s05-test1",
          "question": "Pro subarachnoidální krvácení je typický nástup bolesti hlavy:",
          "options": [
            "Bleskový (thunderclap headache) s dosažením maximální intenzity během několika sekund",
            "Plíživý během několika týdnů",
            "Výhradně jednostranný pulzující s aurou",
            "Bolest vázaná pouze na polohu vestoje"
          ],
          "correctIndex": 0,
          "explanation": "Blesková bolest hlavy (thunderclap) s maximální intenzitou během sekund ('úder blesku') je kardinálním příznakem ruptury aneuryzmatu a SAB."
        },
        {
          "id": "s05-test2",
          "question": "Endovaskulární léčba intrakraniálního aneuryzmatu zavedením platinových spirálek do vaku se označuje jako:",
          "options": [
            "Coiling",
            "Clipping",
            "Stentování karotidy",
            "Kraniotomie"
          ],
          "correctIndex": 0,
          "explanation": "Endovaskulární coiling je miniinvazivní uzávěr vaku aneuryzmatu platinovými spirálkami zavedenými transfemorálním/transradiálním katétrem."
        }
      ]
    },
    {
      "id": "s06-intraparenchymova-krvaceni-mozku",
      "number": 6,
      "section": "specialni",
      "sectionLabel": "Speciální neurologie",
      "badgePrefix": "S06",
      "title": "Intraparenchymová krvácení do mozku",
      "shortDesc": "Intracerebrální hemoragie (ICH), hypertenzní mikroangiopatie (Charcot-Bouchardova mikroaneuryzmata, bazální ganglia, talamus, pons, mozeček), cerebrální amyloidová angiopatie (CAA, lobární hematomy u seniorů), antikoagulační krvácení a neurochirurgická intervence.",
      "category": "cevni_urgentni",
      "badge": "Hemoragie parenchymu",
      "badgeColor": "cyan",
      "theory": {
        "banner": {
          "tag": "Hemoragické CMP • ICH",
          "title": "Intracerebrální krvácení (ICH)",
          "text": "Intracerebrální krvácení (15 % všech iktů) představuje krvácení přímo do mozkové tkáně. Vede k fokálnímu zániku tkáně mechanickou destrukcí a následnému perifokálnímu edému s intrakraniální hypertenzí. Dvěma hlavními příčinami jsou arteriální hypertenze a cerebrální amyloidová angiopatie (CAA)."
        },
        "sections": [
          {
            "title": "1. Etiologie a typická predilekční místa ICH",
            "color": "cyan",
            "content": "\n                    <div class=\"grid md:grid-cols-2 gap-3 my-3\">\n                        <div class=\"p-3 rounded-lg bg-slate-900 border border-slate-700\">\n                            <div class=\"font-bold text-rose-400 mb-1\">🔴 Hypertenzní ICH (60–70 %)</div>\n                            <p class=\"text-xs text-slate-300 mb-1\"><strong>Mechanismus:</strong> Dlouhodobá neléčená hypertenze -> lipohyalinóza a ruptura <em>Charcot-Bouchardových mikroaneuryzmat</em> na drobných perforujících tepnách.</p>\n                            <p class=\"text-xs text-slate-300\"><strong>Typické hluboké lokalizace:</strong> 1. <strong>Bazální ganglia / Putamen</strong> (50 % - přes <em>aa. lenticulostriatae</em>), 2. <strong>Thalamus</strong> (15 %), 3. <strong>Pons</strong> (10 %), 4. <strong>Mozeček</strong> (10 %).</p>\n                        </div>\n                        <div class=\"p-3 rounded-lg bg-slate-900 border border-slate-700\">\n                            <div class=\"font-bold text-amber-400 mb-1\">🟡 Cerebrální amyloidová angiopatie (CAA - 20 %)</div>\n                            <p class=\"text-xs text-slate-300 mb-1\"><strong>Mechanismus:</strong> Ukládání beta-amyloidu do stěny korových a leptomeningeálních cév u seniorů (často asociováno s Alzheimerovou nemocí).</p>\n                            <p class=\"text-xs text-slate-300\"><strong>Typická lokalizace:</strong> <strong>Lobární (kortiko-subkortikální) hematomy</strong> (frontální, parietální, okcipitální lalok), často mnohočetné a recidivující, s mikrohemoragiemi na SWI MR.</p>\n                        </div>\n                    </div>\n                "
          },
          {
            "title": "2. Klinický obraz dle lokalizace hematomu",
            "color": "sky",
            "content": "\n                    <ul class=\"list-disc pl-5 space-y-1 mb-3 text-sm\">\n                        <li><strong>Putaminální krvácení:</strong> Kontralaterální spastická hemiplegie, hemihypestézie, konjugovaná deviace očí k ložisku, afázie / neglect.</li>\n                        <li><strong>Thalamické krvácení:</strong> Kontralaterální hemihypestézie s těžkou hemiparézou, vertikální paréza pohledu (Parinaudův syndrom), miotické nereagující zornice.</li>\n                        <li><strong>Pontinní krvácení:</strong> Kvadruplegie, <strong>špendlíkovité zornice (pin-point pupils)</strong> reagující na lupu, hyperpyrexie, koma, decerebrační křeče (velmi vysoká mortalita).</li>\n                        <li><strong>Cerebelární krvácení:</strong> Akutní vertigo, zvracení, ataxie, neschopnost stoje a chůze, nystagmus, týlní bolest hlavy. <em>Riziko útlaku IV. komory a obstrukčního hydrocefalu!</em></li>\n                    </ul>\n                "
          },
          {
            "title": "3. Management a konzervativní vs. chirurgická léčba",
            "color": "indigo",
            "content": "\n                    <ul class=\"list-disc pl-5 space-y-1 mb-3 text-sm\">\n                        <li><strong>Kontrola krevního tlaku:</strong> Rychlé, ale kontrolované snížení systolického TK na cílové hodnoty <strong>130–140 mmHg</strong> (i.v. urapidil / labetalol).</li>\n                        <li><strong>Okamžitá reverze antikoagulace:</strong>\n                            <ul class=\"list-circle pl-5 mt-1 text-xs text-slate-300\">\n                                <li><em>Warfarin:</em> Prothrombinový komplex (PCC) + vitamin K i.v.</li>\n                                <li><em>Dabigatran:</em> Specifické antidotum <strong>Idarucizumab (Praxbind)</strong>.</li>\n                                <li><em>Inhibitory Xa (Apixaban, Rivaroxaban):</em> <strong>Andexanet alfa</strong> nebo PCC.</li>\n                            </ul>\n                        </li>\n                        <li><strong>Neurochirurgická evakuace:</strong>\n                            <ul class=\"list-circle pl-5 mt-1 text-xs text-emerald-400\">\n                                <li><strong>Mozečkový hematom > 3 cm</strong> s útlakem kmene nebo obstrukčním hydrocefalem -> <strong>urgentní indikace k chirurgické evakuaci!</strong></li>\n                                <li>Mladší pacienti s velkým lobárním hematomem a deteriorací vědomí.</li>\n                            </ul>\n                        </li>\n                    </ul>\n                "
          }
        ]
      },
      "recall": {
        "scenarios": [
          {
            "id": "rec-s06-1",
            "title": "Kazuistika: Akutní vertigo, týlní cefalea a zvracení u hypertonika",
            "question": "62letý neléčený hypertonik byl přivezen pro náhlé točení hlavy, zvracení a neschopnost se postavit. Má týlní bolest hlavy, TK 210/115 mmHg a ataxii pravostranných končetin. Na nativním CT mozku je zjištěn hematom pravé mozečkové hemisféry o průměru 3.8 cm komprimující IV. komoru. Jaký je urgentní postup?",
            "answer": "Cerebelární hematom o průměru > 3 cm komprimující IV. komoru s hrozícím obstrukčním hydrocefalem a tonzilární herniací je absolutní indikací k URGENTNÍ NEUROCHIRURGICKÉ EVAKUACI (subokcipitální kraniotomie a odsátí hematomu), případně se zavedením zevní komorové drenáže. Současně zahajujeme intravenózní antihypertenzní terapii (urapidil) ke snížení systolického TK pod 140 mmHg.",
            "pearl": "Na rozdíl od supratentoriálních hematomů v bazálních gangliích (kde je chirurgická evakuace kontroverzní), u mozečkových hematomů nad 3 cm zachraňuje urgentní operace život."
          }
        ]
      },
      "cards": [
        {
          "id": "fc-s06-1",
          "front": "Jaké jsou dvě nejčastější příčiny netraumatického intracerebrálního krvácení (ICH)?",
          "back": "1. <strong>Arteriální hypertenze</strong> (ruptura Charcot-Bouchardových mikroaneuryzmat v bazálních gangliích a talamu).<br>2. <strong>Cerebrální amyloidová angiopatie (CAA)</strong> (lobární hematomy u seniorů).",
          "hint": "Hypertenze vs. amyloid."
        },
        {
          "id": "fc-s06-2",
          "front": "Jaký klinický nález na zornicích a motorice je typický pro masivní pontinní krvácení?",
          "back": "<strong>Špendlíkovité zornice (pin-point pupils)</strong> reagující na světlo pouze pod lupou + <strong>kvadruplegie / decerebrační rigidita</strong>, hyperpyrexie a hluboké kóma.",
          "hint": "Pin-point zornice a kvadruplegie."
        },
        {
          "id": "fc-s06-3",
          "front": "Kdy je jednoznačně indikována neurochirurgická evakuace intracerebrálního hematomu?",
          "back": "U <strong>mozečkového hematomu s průměrem > 3 cm</strong> (nebo s útlakem mozkového kmene a obstrukcí IV. komory).",
          "hint": "Mozeček nad 3 cm."
        }
      ],
      "quiz": [
        {
          "id": "s06-test1",
          "question": "Pro cerebrální amyloidovou angiopatii (CAA) jako příčinu intracerebrálního krvácení je typické:",
          "options": [
            "Lokalizace hematomu v putamen u mladých mužů",
            "Lobární (kortiko-subkortikální) lokalizace hematomů u starších pacientů s častou recidivou",
            "Krvácení výhradně do míchy",
            "Vznik výhradně po úrazech hlavy"
          ],
          "correctIndex": 1,
          "explanation": "CAA postihuje cévy mozkové kůry u starších pacientů a projevuje se typickými lobárními hematomy na konvexitě hemisfér."
        },
        {
          "id": "s06-test2",
          "question": "Specifickým antidotem k okamžité reverzi antikoagulačního účinku dabigatranu při život ohrožujícím krvácení je:",
          "options": [
            "Idarucizumab (Praxbind)",
            "Protamin sulfát",
            "Vitamin K",
            "Kyselina acetylsalicylová"
          ],
          "correctIndex": 0,
          "explanation": "Idarucizumab je humanizovaný fragment monoklonální protilátky, který specificky a okamžitě váže volný i vázaný dabigatran a neutralizuje jeho antikoagulační účinek."
        }
      ]
    },
    {
      "id": "s07-cevni-onemocneni-michy",
      "number": 7,
      "section": "specialni",
      "sectionLabel": "Speciální neurologie",
      "badgePrefix": "S07",
      "title": "Cévní onemocnění míchy",
      "shortDesc": "Anatomie míšního cévního zásobení (a. spinalis anterior, aa. spinales posteriores, Adamkiewiczova arterie), míšní infarkt (syndrom a. spinalis anterior), míšní krvácení (hematomyelie, spinální epidurální/subdurální hematom) a durální arteriovenózní píštěle (dAVF).",
      "category": "cevni_urgentni",
      "badge": "Míšní vaskulopatie",
      "badgeColor": "cyan",
      "theory": {
        "banner": {
          "tag": "Míšní neurologie • Cévní léze",
          "title": "Vaskulární onemocnění míchy",
          "text": "Mícha je citlivá na ischémii zejména v tzv. povodích hraničních zón (střední hrudní mícha Th4–Th8). Míšní cévní příhody zahrnují ischemické infarkty (uzávěr a. spinalis anterior po operacích aorty), spinální hemoragie a cévní malformace (spinální durální AV píštěle)."
        },
        "sections": [
          {
            "title": "1. Cévní zásobení míchy a syndrom a. spinalis anterior",
            "color": "cyan",
            "content": "\n                    <ul class=\"list-disc pl-5 space-y-1 mb-3 text-sm\">\n                        <li><strong>Anatomie:</strong>\n                            <ul class=\"list-circle pl-5 mt-1\">\n                                <li><em>Arteria spinalis anterior (nepárová):</em> Zásobuje <strong>přední 2/3 míchy</strong> (přední rohy, pyramidové dráhy, spinotalamický trakt).</li>\n                                <li><em>Arteriae spinales posteriores (párové):</em> Zásobují <strong>zadní 1/3 míchy</strong> (zadní provazce - fasciculus gracilis et cuneatus).</li>\n                                <li><em>Arteria radicularis magna (Adamkiewiczi):</em> Odstupuje nejčastěji vlevo z interkostální tepny v úrovni <strong>Th9–L1</strong>. Zajišťuje klíčové zásobení dolních 2/3 míchy!</li>\n                            </ul>\n                        </li>\n                        <li><strong>Míšní infarkt v povodí a. spinalis anterior:</strong>\n                            <p class=\"text-xs text-slate-300 mt-1\"><strong>Etiologie:</strong> Operace aneuryzmatu břišní/hrudní aorty (uzávěr interkostálních tepen), disekce aorty, aterotrombóza, hypotenze.</p>\n                            <p class=\"text-xs text-rose-300 font-bold mt-1\"><strong>Klinický obraz:</strong> Náhlá spastická paraplegie/kvadruplegie pod lézí + disociovaná porucha čití (ztráta vnímání bolesti a tepla) + akutní retence moči.</p>\n                            <p class=\"text-xs text-emerald-400 font-bold\">ZACHOVÁNO: Polohocit, vibrace a jemný dotyk (zadní provazce jsou ušetřeny!).</p>\n                        </li>\n                    </ul>\n                "
          },
          {
            "title": "2. Spinální krvácení (Hematomyelie a spinální hematomy)",
            "color": "sky",
            "content": "\n                    <div class=\"grid md:grid-cols-2 gap-3 my-3\">\n                        <div class=\"p-3 rounded-lg bg-slate-900 border border-slate-700\">\n                            <div class=\"font-bold text-rose-400 mb-1\">🩸 Hematomyelie (Krvácení do míchy)</div>\n                            <p class=\"text-xs text-slate-300\">Krvácení přímo do šedi míšní (trauma páteře, ruptura cévní malformace). Vede k akutnímu syringomyelickému obrazu (chabá obrna v segmentu, disociovaný výpadek bolesti a tepla).</p>\n                        </div>\n                        <div class=\"p-3 rounded-lg bg-slate-900 border border-slate-700\">\n                            <div class=\"font-bold text-amber-400 mb-1\">⚠️ Spinální epidurální hematom (SEDH)</div>\n                            <p class=\"text-xs text-slate-300\">Krvácení z epidurálního venózního plexu (po lumbální punkci / epidurální anestezii u antikoagulovaných pacientů nebo spontánně). Akutní krutá bolest zad + rychle progredující míšní/kořenová komprese. <strong>Nutná okamžitá dekompresní laminektomie do 8–12 hodin!</strong></p>\n                        </div>\n                    </div>\n                "
          },
          {
            "title": "3. Spinální durální arteriovenózní píštěle (dAVF)",
            "color": "indigo",
            "content": "\n                    <p class=\"mb-2 text-sm\">Abnormální spojka mezi radikulární tepnou a durální žílou v oblasti meziobratlového foramina:</p>\n                    <ul class=\"list-disc pl-5 space-y-1 mb-3 text-sm\">\n                        <li>Způsobuje <strong>žilní hypertenzi a městnání</strong> v míšních žilách s chronickou ischémií a edémem míchy (městnavá myelopatie - Foix-Alajouanine syndrom).</li>\n                        <li><strong>Klinika:</strong> Pomalu progredující spasticko-ataktická paraparéza s poruchou sfinkterů u starších mužů, zhoršující se po chůzi či cvičení.</li>\n                        <li><strong>MR:</strong> Hyperintenzita T2 v míše + dilatované vinuté 'červovité' cévy na povrchu míchy. Léčba: Endovaskulární embolizace nebo mikrochirurgické přerušení píštěle.</li>\n                    </ul>\n                "
          }
        ]
      },
      "recall": {
        "scenarios": [
          {
            "id": "rec-s07-1",
            "title": "Kazuistika: Akutní paraplegie po operaci aneuryzmatu břišní aorty",
            "question": "65letý pacient po rozsáhlé chirurgické rekonstrukci břišní aorty pro aneuryzma se probudil s kompletní plegií obou dolních končetin a retencí moči. Při vyšetření má vyhaslé vnímání bolesti a tepla od pupku dolů, ale polohocit v prstech nohou i vibrační citlivost ladičkou na kotnících jsou ZCELA INTAKTNÍ. Která cévní struktura byla postižena a o jaký syndrom se jedná?",
            "answer": "Jedná se o míšní infarkt v povodí arteria spinalis anterior (nejčastěji způsobený peroperačním přerušením arteria radicularis magna Adamkiewiczi nebo interkostálních větví aorty). Vede k nekróze předních 2/3 míchy (pyramidové dráhy, spinotalamický trakt), zatímco zadní provazce zásobované intaktními aa. spinales posteriores zůstávají ušetřeny (disociace čití).",
            "pearl": "U pacienta na antikoagulanciích po epidurální analgezii je vznik nové bolesti zad a paraparézy absolutní urgencí – ihned indikujte urgentní MR páteře k vyloučení spinálního epidurálního hematomu!"
          }
        ]
      },
      "cards": [
        {
          "id": "fc-s07-1",
          "front": "Co je to Adamkiewiczova arterie (a. radicularis magna) a jaký má klinický význam?",
          "back": "Hlavní radikulární tepna odstupující z aorty v úrovni <strong>Th9–L1</strong> zásobující dolní 2/3 míchy. Její uzávěr (např. při operacích aorty) vede k <strong>míšnímu infarktu s paraplegií</strong>.",
          "hint": "Zásobování dolních 2/3 míchy z aorty."
        },
        {
          "id": "fc-s07-2",
          "front": "Jaký je charakter senzitivního a motorického výpadku u infarktu v povodí arteria spinalis anterior?",
          "back": "<strong>Motorika:</strong> Spastická paraparéza/kvadruparéza.<br><strong>Senzitivita:</strong> Ztráta vnímání bolesti a teploty při <strong>ZACHOVANÉM hlubokém polohocitu a vibraci</strong> (zadní provazce jsou ušetřeny).",
          "hint": "Paraparéza + ztráta bolesti/teploty + zachovaný polohocit."
        },
        {
          "id": "fc-s07-3",
          "front": "Jaká je terapeutická časová urgence u spinálního epidurálního hematomu (SEDH)?",
          "back": "Urgentní <strong>dekompresní laminektomie do 8–12 hodin</strong> od vzniku příznaků k zabránění trvalé ireverzibilní paraplegie a sfinkterové inkontinence.",
          "hint": "Operace do 8-12 hodin."
        }
      ],
      "quiz": [
        {
          "id": "s07-test1",
          "question": "Při syndromu arteria spinalis anterior v úrovni hrudní míchy nacházíme:",
          "options": [
            "Ztrátu polohocitu a vibrace při zachovaném vnímání bolesti",
            "Spastickou paraplegii DKK, ztrátu vnímání bolesti a tepla pod lézí a zachovaný polohocit a vibraci",
            "Pouze izolovanou obrnu hlavových nervů",
            "Hemiparézu horní končetiny"
          ],
          "correctIndex": 1,
          "explanation": "Při syndromu a. spinalis anterior je postižena přední část míchy (motorika, spinotalamický trakt), zatímco zadní provazce vyživované ze zadních spinálních tepen zůstávají intaktní."
        },
        {
          "id": "s07-test2",
          "question": "Spinální durální arteriovenózní píštěle (dAVF) se typicky projevují:",
          "options": [
            "Bleskovou bolestí hlavy",
            "Pomalu progredující spasticko-ataktickou paraparézou s poruchou sfinkterů způsobenou venózní hypertenzí míchy",
            "Akutní parézou n. facialis",
            "Křečemi typu absencí"
          ],
          "correctIndex": 1,
          "explanation": "Spinální dAVF způsobují žilní hypertenzi a městnání v míšních žilách, což vede k chronické kongestivní myelopatii s progredující paraparézou."
        }
      ]
    },
    {
      "id": "s08-kraniocerebr-ln-poran-n-kcp",
      "number": 8,
      "section": "specialni",
      "sectionLabel": "Speciální neurologie",
      "badgePrefix": "S08",
      "title": "Kraniocerebrální poranění (KCP)",
      "shortDesc": "Komplexní přehled kraniocerebrálních traumat: klasifikace závažnosti (GCS), primární vs. sekundární inzult, nitrolební hypertenze (Monro-Kellie), intrakraniální monitorace a management na neuroJIP.",
      "category": "urgentni_trauma",
      "badge": "Urgentní stavy & Neurotraumatologie",
      "badgeColor": "teal",
      "theory": {
        "banner": {
          "tag": "Speciální neurologie • Otázka S08",
          "title": "Kraniocerebrální poranění (KCP)",
          "text": "Komplexní přehled kraniocerebrálních traumat: klasifikace závažnosti (GCS), primární vs. sekundární inzult, nitrolební hypertenze (Monro-Kellie), intrakraniální monitorace a management na neuroJIP."
        },
        "sections": [
          {
            "title": "1. Definice a Epidemiologie",
            "content": "<p><strong>Kraniocerebrální poranění (KCP / TBI - Traumatic Brain Injury)</strong> představují poranění lebky a nitrolebního obsahu v důsledku působení mechanické síly. Jsou nejčastější příčinou úmrtí a trvalé invalidizace mladých lidí (< 45 let; dopravní nehody, sport) a seniorů (> 65 let; pády, antikoagulancia).</p>"
          },
          {
            "title": "2. Patofyziologie poranění mozku",
            "content": "<div class=\"anatomy-grid\">\n                <div class=\"grid-item\">\n                    <h4>Primární poškození mozku</h4>\n                    <ul>\n                        <li>Vzniká v <strong>okamžiku mechanického nárazu</strong> (akcelerace, decelerace, rotace, přímá deformace lebky).</li>\n                        <li><strong>Fokální léze:</strong> fraktury kalvy a baze lební, kontuze mozku (coup a contrecoup), lacerace, epidurální/subdurální/intracerebrální hematomy.</li>\n                        <li><strong>Difuzní léze:</strong> komoce mozku, <em>difuzní axonální poranění (DAP)</em> střižnými silami na rozhraní šedé a bílé hmoty.</li>\n                        <li>Léčebně již nelze zvrátit – prevence je klíčem (přilby, pásy).</li>\n                    </ul>\n                </div>\n                <div class=\"grid-item\">\n                    <h4>Sekundární poškození mozku</h4>\n                    <ul>\n                        <li>Rozvíjí se <strong>v minutách až dnech</strong> po úrazu kaskádou patologických procesů (ischemie, otok, excitotoxicita).</li>\n                        <li><strong>Intrakraniální faktory:</strong> edém mozku (vazogenní + cytotoxický), expanzivní hematomy, nitrolební hypertenze (ICP > 20–22 mmHg), vazospasmy, záchvaty.</li>\n                        <li><strong>Extrakraniální (systémové) faktory:</strong> <em>hypoxie</em> ($pO_2 < 8\text{ kPa}$), <em>hypotenze</em> (systola $< 90\text{ mmHg}$), hyperpyrexie, hyper/hypoglykémie, anémie, acidóza.</li>\n                        <li><strong>Cíl neurointenzivní péče:</strong> maximální eliminace sekundárního poškození!</li>\n                    </ul>\n                </div>\n            </div>\n\n            <div class=\"highlight-box\">\n                <h4>Monro-Kellieho doktrína a CPP</h4>\n                <p>Nitrolební dutina má rigidní stěny a fixní objem: $V_{intrakraniální} = V_{mozek} (80\\%) + V_{krev} (10\\%) + V_{likvor} (10\\%) = \text{konstanta}$.<br>\n                Pokud roste objem expanzivního procesu (hematom, edém), zpočátku dochází ke kompenzaci vytlačením likvoru a venózní krve do páteřního kanálu. Po vyčerpání kompliance dochází k <strong>prudkému vzestupu nitrolebního tlaku (ICP)</strong> a hrozí mozkové herniace (temporální unkální, okcipitální tonzilární).<br>\n                <strong>Mozkový perfuzní tlak (CPP):</strong> $CPP = MAP - ICP$.<br>\n                <em>Cílová hodnota CPP:</em> <strong>60–70 mmHg</strong> (ICP udržovat < 20–22 mmHg, MAP > 80–90 mmHg).</p>\n            </div>"
          },
          {
            "title": "3. Klasifikace závažnosti KCP",
            "content": "<p>Základním klinickým kritériem je skóre v <strong>Glasgow Coma Scale (GCS)</strong> po iniciální stabilizaci vitálních funkcí:</p>\n            <ul>\n                <li><strong>Lehké KCP (GCS 13–15):</strong> otřes mozku (komoce), lineární fraktury bez dislokace. Většina pacientů je při vědomí, riziko progrese malé (ale vyžaduje sledování při rizikových faktorech – zvracení, amnézie > 30 min, věk > 65 let, antikoagulace).</li>\n                <li><strong>Středně těžké KCP (GCS 9–12):</strong> spaví pacienti s ložiskovým deficitem nebo zmateností, kontuze, menší hematomy. Vždy indikováno akutní nekontrastní CT mozku a hospitalizace na JIP.</li>\n                <li><strong>Těžké KCP (GCS 3–8):</strong> kóma, porucha vědomí ohrožující dýchací cesty. <em>Motto: GCS ≤ 8 = intubace + UPV + zavedení čidla ICP!</em></li>\n            </ul>"
          },
          {
            "title": "4. Diagnostika a algoritmus vyšetření",
            "content": "<ol>\n                <li><strong>Zajištění ABCDE (Advanced Trauma Life Support - ATLS):</strong> Airways (imobilizace krční páteře tvrdým límcem!), Breathing ($SpO_2 > 95\\%$), Circulation (TK, zástava zevního krvácení, izotonické krystaloidy – <em>hypotonické roztoky jsou přísně kontraindikovány pro riziko edému mozku!</em>), Disability (GCS, fotoreakce a zornice), Exposure.</li>\n                <li><strong>Nekontrastní CT mozku + traumatologické CT baze a C-páteře:</strong> zlatý standard pro průkaz hematomů, edému, středočarového přetlaku (> 5 mm = neurochirurgická indikace), fraktur baze (pneumocefalus, tekutina ve sklípku).</li>\n                <li><strong>Laboratoř:</strong> krevní obraz, koagulace (INR, aPTT, fibrinogen, antitrombin III), krevní skupina, toxikologie, krevní plyny (Astrup).</li>\n            </ol>"
          },
          {
            "title": "5. Léčba a management na neuroJIP",
            "content": "<ul>\n                <li><strong>Neurochirurgická intervence:</strong>\n                    <ul>\n                        <li>Kraniotomie a evakuace expanzivního epidurálního hematomu (šířka > 10 mm, přetlak > 5 mm).</li>\n                        <li>Evakuace akutního subdurálního hematomu (šířka > 10 mm nebo GCS pokles o ≥ 2 body).</li>\n                        <li>Dekompresivní kraniektomie (odstranění velké části kostní ploténky + plastika dury) při refrakterní nitrolební hypertenzi.</li>\n                    </ul>\n                </li>\n                <li><strong>Konzervativní antiedematózní a neuroprotektivní terapie (stupňovitý protokol):</strong>\n                    <ol>\n                        <li>Základní opatření: elevace hlavy a trupu o 30°, normotermie (36,5–37 °C, agresivní tlumení horečky), normoglykémie (7–10 mmol/l), analgosedace (propofol + sufentanil).</li>\n                        <li>Osmoterapie při vzestupu ICP > 20 mmHg: <strong>Manitol 20%</strong> (0,5–1 g/kg i.v. bolus) nebo <strong>Hypertonický NaCl (3%–7,5% NaCl)</strong>.</li>\n                        <li>Řízená mírná hyperventilace ($pCO_2\text{ 4,0–4,5 kPa}$) – pouze krátkodobě k překlenutí krize před operací (hrozí cerebrální vazokonstrikce a ischemie).</li>\n                        <li>Terapie 2. linie (refrakterní ICP): barbiturátové kóma (thiopental), mírná hypotermie (34–35 °C), chirurgická dekomprese.</li>\n                    </ol>\n                </li>\n            </ul>"
          }
        ]
      },
      "recall": {
        "scenarios": [
          {
            "id": "sc-S08-1",
            "title": "Klinická kazuistika – Kraniocerebrální poranění (KCP)",
            "question": "<strong>Kazuistika:</strong> 32letý motocyklista po nárazu do svodidel v bezvědomí přivezen RZP. GCS 6 (E1V2M3), anizokorie s mydriázou vpravo a pomalou fotoreakcí, TK 165/95 mmHg, TF 52/min, nepravidelné dýchání (Cushingova triáda).<br><br><strong>Klinický úkol:</strong> Zhodnoťte klinický stav, popište hrozící komplikaci a navrhněte okamžitý diagnosticko-terapeutický postup.",
            "answer": "<ul style='margin: 6px 0 0 18px; padding: 0; line-height: 1.5;'><li>Zhodnocení: Těžké KCP (GCS 6), syndrom nitrolební hypertenze s Cushingovou triádou (hypertenze, bradykardie, bradypnoe/porucha dechu) a rozvíjející se unkální (temporální) herniace s útlakem n. III vpravo.</li><li>Okamžité zajištění vitálních funkcí: OTI (intubace s fixací C-páteře), analgosedace, UPV k normokapnii ($pCO_2\text{ 4,5 kPa}$), elevace hlavy 30°.</li><li>Osmoterapie: bolus Manitol 20% (1 g/kg) nebo 3% NaCl i.v.</li><li>Diagnostika: Statimové nekontrastní CT mozku a C-páteře k ozřejmění příčiny (akutní epidurální/subdurální hematom).</li><li>Neurochirurgická pohotovost: Okamžitá dekomprese/kraniotomie a evakuace expanzivního ložiska.</li></ul>",
            "keyPoints": [
              "Zhodnocení: Těžké KCP (GCS 6), syndrom nitrolební hypertenze s Cushingovou triádou (hypertenze, bradykardie, bradypnoe/porucha dechu) a rozvíjející se unkální (temporální) herniace s útlakem n. III vpravo.",
              "Okamžité zajištění vitálních funkcí: OTI (intubace s fixací C-páteře), analgosedace, UPV k normokapnii ($pCO_2\text{ 4,5 kPa}$), elevace hlavy 30°.",
              "Osmoterapie: bolus Manitol 20% (1 g/kg) nebo 3% NaCl i.v.",
              "Diagnostika: Statimové nekontrastní CT mozku a C-páteře k ozřejmění příčiny (akutní epidurální/subdurální hematom).",
              "Neurochirurgická pohotovost: Okamžitá dekomprese/kraniotomie a evakuace expanzivního ložiska."
            ],
            "pearl": "Klasifikace KCP dle GCS: Lehké (13–15), Střední (9–12), Těžké (3–8)."
          }
        ]
      },
      "cards": [
        {
          "id": "fc-S08-1",
          "front": "Jak je definován mozkový perfuzní tlak (CPP) a jaká je jeho cílová hodnota u těžkého KCP?",
          "back": "CPP = MAP (střední arteriální tlak) – ICP (nitrolební tlak). Cílová hodnota u pacientů s těžkým KCP na neuroJIP je 60–70 mmHg (při udržení ICP < 20–22 mmHg a MAP > 80–90 mmHg).",
          "hint": "Speciální neurologie LF OU"
        },
        {
          "id": "fc-S08-2",
          "front": "Jaké jsou hlavní rozdíly mezi primárním a sekundárním poraněním mozku při KCP?",
          "back": "Primární vzniká v okamžiku nárazu mechanickým působením (fraktury, kontuze, DAP, hematomy) a nelze ho zvrátit. Sekundární se rozvíjí v minutách až dnech (edém mozku, intrakraniální hypertenze, hypoxie, hypotenze) a je hlavním cílem intenzivní péče mu zabránit.",
          "hint": "Speciální neurologie LF OU"
        },
        {
          "id": "fc-S08-3",
          "front": "Proč jsou u těžkých kraniocerebrálních traumat striktně kontraindikovány hypotonické infuzní roztoky (např. 5% glukóza)?",
          "back": "Hypotonické roztoky snižují plazmatickou osmolalitu, což vede k přesunu vody po osmotickém gradientu z cévního řečiště do mozkového parenchymu a prudkému zhoršení vazogenního i cytotoxického edému mozku a vzestupu ICP.",
          "hint": "Speciální neurologie LF OU"
        }
      ],
      "quiz": [
        {
          "id": "pq-S08-1",
          "question": "Která hodnota GCS jednoznačně definuje těžké kraniocerebrální trauma vyžadující zajištění dýchacích cest intubací?",
          "options": [
            "GCS 13–15",
            "GCS 9–12",
            "GCS ≤ 8",
            "GCS ≤ 10"
          ],
          "correctIndex": 2,
          "explanation": "GCS ≤ 8 definuje těžké poranění mozku v bezvědomí, kdy pacient ztrácí ochranné polykací a kašlací reflexy dýchacích cest, a je absolutně indikována orotracheální intubace a neurointenzivní péče."
        },
        {
          "id": "pq-S08-2",
          "question": "Cushingova triáda jako klasický pozdní příznak dekompenzované nitrolební hypertenze zahrnuje:",
          "options": [
            "Hypotenzi, tachykardii a tachypnoi",
            "Hypertenzi, bradykardii a poruchu/nepravidelnost dýchání",
            "Hypertermii, hypotenzi a křeče",
            "Anizokorii, plegii a tachykardii"
          ],
          "correctIndex": 1,
          "explanation": "Cushingova reakce/triáda se skládá ze systémové arteriální hypertenze (pokus těla udržet CPP přes vysoký ICP), reflexní bradykardie a respiračních nepravidelností."
        }
      ]
    },
    {
      "id": "s09-poran-n-m-chy-a-p-te-e",
      "number": 9,
      "section": "specialni",
      "sectionLabel": "Speciální neurologie",
      "badgePrefix": "S09",
      "title": "Poranění míchy a páteře",
      "shortDesc": "Akutní míšní léze, míšní šok, klasifikace ASIA/Frankel, syndromy inkompletní léze (Brown-Séquard, centrální, přední míšní), neurogenní šok, akutní imobilizace a neurochirurgická dekomprese.",
      "category": "urgentni_trauma",
      "badge": "Urgentní stavy & Neurotraumatologie",
      "badgeColor": "teal",
      "theory": {
        "banner": {
          "tag": "Speciální neurologie • Otázka S09",
          "title": "Poranění míchy a páteře",
          "text": "Akutní míšní léze, míšní šok, klasifikace ASIA/Frankel, syndromy inkompletní léze (Brown-Séquard, centrální, přední míšní), neurogenní šok, akutní imobilizace a neurochirurgická dekomprese."
        },
        "sections": [
          {
            "title": "1. Úvod a Mechanismy poranění",
            "content": "<p>Poranění páteře a míchy (Spinal Cord Injury - SCI) vzniká nejčastěji při autonehodách, skocích do mělké vody, pádech z výšky a sportovních úrazech. Nejzranitelnější jsou přechodové oblasti páteře s nejvyšší mobilitou: <strong>krční páteř (C4–C7)</strong> a <strong>torakolumbální přechod (Th11–L2)</strong>.</p>"
          },
          {
            "title": "2. Míšní šok vs. Neurogenní šok",
            "content": "<div class=\"anatomy-grid\">\n                <div class=\"grid-item\">\n                    <h4>Míšní šok (Spinal Shock)</h4>\n                    <ul>\n                        <li>Funkční výpadek míchy pod úrovní léze bezprostředně po traumatu (trvá dny až týdny).</li>\n                        <li><strong>Projevy:</strong> kompletní <em>chabé ochrnutí (atonie)</em>, areflexie, ztráta veškerého čití pod lézí, atonický močový měchýř s retencí moči a paradoxní ischiurií, paralytický ileus, vymizení análního a bulbokavernózního reflexu.</li>\n                        <li><strong>Odeznívání:</strong> postupně nastupuje spasticita, hyperreflexie, pyramidové jevy spastické (Babinski +) a automatický reflexní močový měchýř.</li>\n                    </ul>\n                </div>\n                <div class=\"grid-item\">\n                    <h4>Neurogenní šok (Neurogenic Shock)</h4>\n                    <ul>\n                        <li>Hemodynamická nestabilita při lézi míchy nad úrovní <strong>Th6</strong> v důsledku přerušení sestupných sympatických drah.</li>\n                        <li><strong>Klinická triáda:</strong> <em>těžká hypotenze</em> (ztráta cévního tonu pod lézí, vazodilatace), <em>bradykardie</em> (převaha n. vagus bez sympatické kompenzace) a periferní vazodilatace (teplá suchá kůže).</li>\n                        <li>Léčba: agresivní tekutinová resuscitace + vazopresory a inotropika (noradrenalin, dopamin) k udržení $MAP \\ge 85\text{ mmHg}$.</li>\n                    </ul>\n                </div>\n            </div>"
          },
          {
            "title": "3. Klasifikace závažnosti míšní léze (ASIA / AIS Impairment Scale)",
            "content": "<ul>\n                <li><strong>A (Kompletní léze):</strong> Žádná motorická ani senzitivní funkce není zachována v sakrálních segmentech S4–S5 (žádné anální čití ani volní kontrakce svěrače).</li>\n                <li><strong>B (Senzitivně inkompletní):</strong> Zachováno senzitivní vnímání pod úrovní léze včetně S4–S5, ale motorika chybí.</li>\n                <li><strong>C (Motoricky inkompletní):</strong> Motorická funkce zachována pod lézí, ale více než polovina klíčových svalů má svalovou sílu < 3/5.</li>\n                <li><strong>D (Motoricky inkompletní):</strong> Nejméně polovina klíčových svalů pod lézí má sílu ≥ 3/5 (funkční schopnost pohybu/chůze).</li>\n                <li><strong>E (Normální stav):</strong> Motorika a senzitivita jsou plně intaktní.</li>\n            </ul>"
          },
          {
            "title": "4. Inkompletní míšní syndromy",
            "content": "<ul>\n                <li><strong>Syndrom přední míchy (a. spinalis anterior syndrom):</strong> postižení ventrálních 2/3 míchy (ischemizací nebo přední kompresí úlomkem kosti / výhřezem disku). Oboustranná paraparéza/plegie a ztráta algického a termického čití pod lézí; <em>zadní provazce jsou ušetřeny</em> (polohocit a vibrační čití intaktní). Prognóza motorického zotavení je špatná.</li>\n                <li><strong>Brown-Séquardův syndrom (hemisekce míchy):</strong>\n                    <ul>\n                        <li><em>Ipsilaterálně pod lézí:</em> centrální paréza (pyramidová dráha) + porucha hlubokého polohocitu a vibrace (zadní provazce).</li>\n                        <li><em>Kontralaterálně pod lézí:</em> porucha termického a algického čití (zkřížený tr. spinothalamicus).</li>\n                    </ul>\n                </li>\n                <li><strong>Centrální míšní syndrom (Schneiderův syndrom):</strong> hyperextenční trauma u pacientů s cervikální spondylózou. Těžší chabé postižení horních končetin (mediální uložení drah pro HK) než dolních končetin, disociovaná porucha čití v segmentech.</li>\n            </ul>"
          },
          {
            "title": "5. Diagnostika a management",
            "content": "<ol>\n                <li><strong>Přednemocniční péče:</strong> přísná imobilizace celé páteře (vakuová matrace, tvrdý krční límec Philadelphia), zákaz manipulace v rotaci a flexi!</li>\n                <li><strong>Zobrazovací metody:</strong> statimové <strong>traumatologické CT páteře</strong> (skelet, dislokace obratlů) a <strong>urgentní MRI míchy</strong> (zlatý standard pro edém míchy, hematom, kompresi durálního vaku, ligamentózní poranění).</li>\n                <li><strong>Neurochirurgická léčba:</strong> urgentní repozice luxace a chirurgická dekomprese se stabilizací páteře (ideálně do 8–24 hodin od úrazu).</li>\n                <li><strong>Intenzivní péče a ošetřovatelství:</strong> udržení $MAP \\ge 85\text{ mmHg}$ po dobu 5–7 dnů pro zajištění perfuze míchy, permanentní močový katétr, prevence dekubitů, časná rehabilitace.</li>\n            </ol>"
          }
        ]
      },
      "recall": {
        "scenarios": [
          {
            "id": "sc-S09-1",
            "title": "Klinická kazuistika – Poranění míchy a páteře",
            "question": "<strong>Kazuistika:</strong> 20letý mladík po skoku do mělké vody vytištěn z vody s plegií všech čtyř končetin. TK 80/45 mmHg, TF 48/min, kůže teplá, suchá. Pacient nereaguje na bolestivé podněty od klíčních kostí distálně, anální svěrač bez tonu.<br><br><strong>Klinický úkol:</strong> Stanovte diagnózu syndromu, vysvětlete hemodynamický stav a uveďte klíčové kroky urgentní péče.",
            "answer": "<ul style='margin: 6px 0 0 18px; padding: 0; line-height: 1.5;'><li>Diagnóza: Akutní kompletní transverzální cervikální míšní léze (C4–C5) s míšním šokem (chabá kvadruplegie, areflexie, atonie) a současným neurogenním šokem.</li><li>Patofyziologie hemodynamiky: Léze krčního sympatiku způsobila ztrátu periferního cévního tonu (arteriální i venózní vazodilatace) s hypotenzí a převahou n. vagus vedoucí k bradykardii.</li><li>Imobilizace: Okamžitá fixace krční páteře rigidním límcem a transport na vakuové matraci.</li><li>Hemodynamická stabilizace: Intravenózní volumoterapie krystaloidy a vazopresor (noradrenalin) k dosažení $MAP \\ge 85\text{ mmHg}$.</li><li>Diagnostika a dekomprese: Urgentní CT páteře + MRI míchy a okamžitá operační revize/stabilizace na spondylochirurgii.</li></ul>",
            "keyPoints": [
              "Diagnóza: Akutní kompletní transverzální cervikální míšní léze (C4–C5) s míšním šokem (chabá kvadruplegie, areflexie, atonie) a současným neurogenním šokem.",
              "Patofyziologie hemodynamiky: Léze krčního sympatiku způsobila ztrátu periferního cévního tonu (arteriální i venózní vazodilatace) s hypotenzí a převahou n. vagus vedoucí k bradykardii.",
              "Imobilizace: Okamžitá fixace krční páteře rigidním límcem a transport na vakuové matraci.",
              "Hemodynamická stabilizace: Intravenózní volumoterapie krystaloidy a vazopresor (noradrenalin) k dosažení $MAP \\ge 85\text{ mmHg}$.",
              "Diagnostika a dekomprese: Urgentní CT páteře + MRI míchy a okamžitá operační revize/stabilizace na spondylochirurgii."
            ],
            "pearl": "Míšní šok představuje přechodné vymizení všech motorických, senzitivních a autonomních funkcí s chabou parézou a areflexií."
          }
        ]
      },
      "cards": [
        {
          "id": "fc-S09-1",
          "front": "Jaké jsou typické příznaky neurogenního šoku při poranění krční či horní hrudní míchy a jak se liší od hemoragického šoku?",
          "back": "Neurogenní šok se projevuje hypotenzí s BRADYKARDIÍ (vymizení sympatiku s převahou vagu) a teplou suchou kůží (vazodilatace). Hemoragický šok má hypotenzi s TACHYKARDIÍ a chladnou bledou opocenou periferií.",
          "hint": "Speciální neurologie LF OU"
        },
        {
          "id": "fc-S09-2",
          "front": "Jaký klinický nález charakterizuje Brown-Séquardův syndrom při jednostranné lézi míchy?",
          "back": "Ipsilaterálně pod lézí centrální paréza (tr. corticospinalis) a ztráta hlubokého čití/propriocepce (zadní provazce); kontralaterálně pod lézí ztráta vnímání bolesti a teploty (tr. spinothalamicus).",
          "hint": "Speciální neurologie LF OU"
        },
        {
          "id": "fc-S09-3",
          "front": "Co znamená označení míšní léze jako ASIA A?",
          "back": "Kompletní léze míchy – pod úrovní léze není zachována žádná motorická ani senzitivní funkce, a to včetně nejnižších sakrálních segmentů S4–S5 (chybí anální kontraktilita i anální čití).",
          "hint": "Speciální neurologie LF OU"
        }
      ],
      "quiz": [
        {
          "id": "pq-S09-1",
          "question": "Při syndromu a. spinalis anterior (přední 2/3 míchy) zůstává zachováno které čití?",
          "options": [
            "Algické čití (bolest)",
            "Termické čití (teplo a chlad)",
            "Hluboké proprioceptivní a vibrační čití (zadní provazce)",
            "Žádné čití nezůstává zachováno"
          ],
          "correctIndex": 2,
          "explanation": "A. spinalis anterior zásobuje přední rohy míšní a postranní provazce (tr. spinothalamicus a tr. corticospinalis). Zadní provazce (fasciculus gracilis a cuneatus) jsou zásobeny párovou a. spinalis posterior, proto je hluboké polohové a vibrační čití zachováno."
        },
        {
          "id": "pq-S09-2",
          "question": "Jaký je terapeutický cíl středního arteriálního tlaku (MAP) v akutní fázi míšního traumatu k prevenci ischemie míchy?",
          "options": [
            "$MAP \\ge 60\text{ mmHg}$",
            "$MAP \\ge 70\text{ mmHg}$",
            "$MAP \\ge 85\text{–}90\text{ mmHg}$ po dobu 5–7 dnů",
            "$MAP \\le 65\text{ mmHg}$ k prevenci krvácení"
          ],
          "correctIndex": 2,
          "explanation": "Podle mezinárodních doporučení (AANS/CNS) je cílem udržovat MAP ≥ 85–90 mmHg minimálně prvních 5–7 dní po traumatu míchy pro zajištění dostatečného perfuzního tlaku poraněné míšní tkáně."
        }
      ]
    },
    {
      "id": "s10-hemoragick-c-vn-mozkov-p-hody",
      "number": 10,
      "section": "specialni",
      "sectionLabel": "Speciální neurologie",
      "badgePrefix": "S10",
      "title": "Hemoragické cévní mozkové příhody",
      "shortDesc": "Komplexní přehled hemoragických iktů: intracerebrální krvácení (ICH), subarachnoidální krvácení (SAB), intraventrikulární krvácení; etiopatogeneze, diagnostika CT/CTA, akutní kontrola TK a korekce antikoagulace.",
      "category": "urgentni_trauma",
      "badge": "Cévní onemocnění & Urgentní stavy",
      "badgeColor": "teal",
      "theory": {
        "banner": {
          "tag": "Speciální neurologie • Otázka S10",
          "title": "Hemoragické cévní mozkové příhody",
          "text": "Komplexní přehled hemoragických iktů: intracerebrální krvácení (ICH), subarachnoidální krvácení (SAB), intraventrikulární krvácení; etiopatogeneze, diagnostika CT/CTA, akutní kontrola TK a korekce antikoagulace."
        },
        "sections": [
          {
            "title": "1. Úvod a Klasifikace hemoragických CMP",
            "content": "<p>Hemoragické cévní mozkové příhody tvoří přibližně <strong>15–20 % všech iktů</strong>, avšak jsou zatíženy výrazně vyšší mortalitou (30–50 % do 30 dnů) a morbiditou než ischemické CMP. Dělí se na dvě základní jednotky:</p>\n            <ul>\n                <li><strong>Intracerebrální krvácení (ICH - Intracerebral Hemorrhage, 10–15 %):</strong> krvácení do mozkového parenchymu s možnou propagací do komorového systému (intraventrikulární krvácení).</li>\n                <li><strong>Subarachnoidální krvácení (SAB - Subarachnoid Hemorrhage, 5 %):</strong> krvácení do likvorových prostor mezi arachnoideou a pia mater, nejčastěji z ruptury intrakraniálního aneuryzmatu.</li>\n            </ul>"
          },
          {
            "title": "2. Etiologie a Rizikové faktory ICH",
            "content": "<div class=\"anatomy-grid\">\n                <div class=\"grid-item\">\n                    <h4>Primární ICH (80–85 %)</h4>\n                    <ul>\n                        <li><strong>Hypertenzní mikroangiopatie (Charcot-Bouchardova mikroaneuryzmata):</strong> lipohyalinóza drobných perforujících tepen. Typická <em>hluboká lokalizace</em>: bazální ganglia (putamen, talamus, capsula interna), pons, mozeček.</li>\n                        <li><strong>Cerebrální amyloidová angiopatie (CAA):</strong> ukládání beta-amyloidu do stěn korových a leptomeningeálních cév u starších pacientů (> 65–70 let). Typická <em>lobární lokalizace</em> (kortikosubkortikální v temporálních, parietálních, okcipitálních lalocích), recidivující krvácení, spojeno s mikrohemoragiemi na MRI (SWI/T2*).</li>\n                    </ul>\n                </div>\n                <div class=\"grid-item\">\n                    <h4>Sekundární ICH (15–20 %)</h4>\n                    <ul>\n                        <li><strong>Cévní malformace:</strong> arteriovenózní malformace (AVM), kavernomy, durální arteriovenózní píštěle (dAVF).</li>\n                        <li><strong>Koagulopatie a farmakoterapie:</strong> antikoagulační léčba (warfarin, DOAC – dabigatran, apixaban, rivaroxaban), trombolýza, trombocytopenie.</li>\n                        <li><strong>Krvácení do tumoru:</strong> metastázy (melanom, karcinom ledviny, choriokarcinom), glioblastom.</li>\n                        <li><strong>Jiné:</strong> trombóza mozkových splavů (venózní infarkt s hemoragickou transformací), vaskulitidy, abúzus sympatomimetik (kokain, pervitin).</li>\n                    </ul>\n                </div>\n            </div>"
          },
          {
            "title": "3. Klinický obraz",
            "content": "<ul>\n                <li><strong>Akutní nástup:</strong> prudký rozvoj ložiskového neurologického deficitu (hemiparéza, afázie, hemihypestezie) během několika minut až hodin (často během denní aktivity/fyzické námahy).</li>\n                <li><strong>Příznaky nitrolební hypertenze:</strong> bolest hlavy, profúzní zvracení, pokles vědomí (somnolence $\to$ koma), hypertenzní krize.</li>\n                <li><strong>Rozšiřování hematomu (Hematoma Expansion):</strong> až u 30–40 % pacientů v prvních 6–24 hodinách, provázeno prudkým klinickým zhoršením!</li>\n            </ul>"
          },
          {
            "title": "4. Diagnostický algoritmus",
            "content": "<ol>\n                <li><strong>Statimové nekontrastní CT mozku:</strong> zlatý standard pro odlišení ischemie od hemoragie. Čerstvý hematom se zobrazí jako ostře ohraničené <strong>hyperdenzní ložisko (50–80 HU)</strong> s perifokálním hypodenzním lemem edému.</li>\n                <li><strong>CT angiografie (CTA mozku a magistrálních tepen):</strong> k vyloučení sekundární příčiny (aneuryzma, AVM) a k detekci <em>„Spot sign“</em> (extravazace kontrastu do hematomu = vysoké riziko progrese krvácení).</li>\n                <li><strong>Laboratorní vyšetření hemostázy:</strong> INR, aPTT, fibrinogen, anti-Xa aktivita (DOAC), krevní destičky.</li>\n            </ol>"
          },
          {
            "title": "5. Léčba a Akutní management ICH",
            "content": "<ul>\n                <li><strong>Kontrola krevního tlaku:</strong>\n                    <ul>\n                        <li>Cílový systolický tlak: <strong>130–140 mmHg</strong> (zabránění dalšímu krvácení bez navození cerebrální ischemie).</li>\n                        <li>Lék volby: kontinuální i.v. infuze (např. urapidil, labetalol).</li>\n                    </ul>\n                </li>\n                <li><strong>Okamžitá reverze antikoagulační léčby:</strong>\n                    <ul>\n                        <li><em>Warfarin (zvýšené INR > 1,4):</em> Koncentrát protrombinového komplexu (PCC - Beriplex/Octaplex 25–50 IU/kg) + Vitamin K 10 mg i.v.</li>\n                        <li><em>Dabigatran (inhibitor trombinu):</em> <strong>Idarucizumab (Praxbind)</strong> 2x 2,5 g i.v. bolus.</li>\n                        <li><em>Inhibitory f. Xa (apixaban, rivaroxaban):</em> <strong>Andexanet alfa (Ondexxya)</strong> nebo PCC ve vysoké dávce (50 IU/kg).</li>\n                        <li><em>Heparin / LMWH:</em> Protamin sulfát.</li>\n                    </ul>\n                </li>\n                <li><strong>Neurochirurgická léčba:</strong>\n                    <ul>\n                        <li><strong>Cerebelární hematom > 3 cm:</strong> urgentní indikace ke kraniektomii a evakuaci pro hrozící kompresi kmene a obstrukční hydrocefalus!</li>\n                        <li><strong>Zevní komorová drenáž (EVD):</strong> při obstrukčním hydrocefalu a hematocefalu.</li>\n                        <li>Lobarální hematomy u mladších pacientů se zhoršujícím se vědomím (minimálně invazivní evakuace / kraniotomie).</li>\n                    </ul>\n                </li>\n            </ul>"
          }
        ]
      },
      "recall": {
        "scenarios": [
          {
            "id": "sc-S10-1",
            "title": "Klinická kazuistika – Hemoragické cévní mozkové příhody",
            "question": "<strong>Kazuistika:</strong> 74letý pacient s fibrilací síní na rivaroxabanu (Xarelto) náhle zkolaboval při obědě. Při příjezdu somnolentní, expresivní afázie, pravostranná těžká hemiplegie, TK 190/105 mmHg. Nativní CT prokazuje lobární hematom 45 ml vlevo fronto-temporálně bez hydrocefalu.<br><br><strong>Klinický úkol:</strong> Stanovte diagnózu, terapeutické priority v prvních minutách a konkrétní farmakologický postup.",
            "answer": "<ul style='margin: 6px 0 0 18px; padding: 0; line-height: 1.5;'><li>Diagnóza: Akutní intracerebrální lobární krvácení (ICH) vlevo na antikoagulační léčbě rivaroxabanem (přímý inhibitor faktoru Xa).</li><li>Korekce krevního tlaku: Okamžité zahájení kontinuální infuze Urapidilu k poklesu systolického TK k cílovým 130–140 mmHg.</li><li>Reverze antikoagulace: Podání specifického antidota Andexanet alfa (Ondexxya) nebo podání koncentrátu protrombinového komplexu (PCC - Beriplex) v dávce 50 IU/kg i.v.</li><li>Neurochirurgická konzultace: Posouzení indikace k operační evakuaci při zhoršování vědomí / nárůstu hematomu.</li><li>Hospitalizace na iktové jednotce / neuroJIP s monitorací ICP a vitálních funkcí.</li></ul>",
            "keyPoints": [
              "Diagnóza: Akutní intracerebrální lobární krvácení (ICH) vlevo na antikoagulační léčbě rivaroxabanem (přímý inhibitor faktoru Xa).",
              "Korekce krevního tlaku: Okamžité zahájení kontinuální infuze Urapidilu k poklesu systolického TK k cílovým 130–140 mmHg.",
              "Reverze antikoagulace: Podání specifického antidota Andexanet alfa (Ondexxya) nebo podání koncentrátu protrombinového komplexu (PCC - Beriplex) v dávce 50 IU/kg i.v.",
              "Neurochirurgická konzultace: Posouzení indikace k operační evakuaci při zhoršování vědomí / nárůstu hematomu.",
              "Hospitalizace na iktové jednotce / neuroJIP s monitorací ICP a vitálních funkcí."
            ],
            "pearl": "Hemoragické CMP tvoří 15–20 % iktů a dělí se na intracerebrální (ICH) a subarachnoidální (SAB)."
          }
        ]
      },
      "cards": [
        {
          "id": "fc-S10-1",
          "front": "Jak se liší typická lokalizace hypertenzního intracerebrálního krvácení od krvácení při cerebrální amyloidové angiopatii (CAA)?",
          "back": "Hypertenzní ICH je lokalizováno hluboko v mozkovém parenchymu (bazální ganglia – putamen, talamus, pons a mozeček). CAA postihuje lobární kortikosubkortikální oblasti (často parieto-okcipitálně) u pacientů vyššího věku.",
          "hint": "Speciální neurologie LF OU"
        },
        {
          "id": "fc-S10-2",
          "front": "Jaké specifické antidotum podáte pacientovi s akutním mozkovým krvácením léčenému Dabigatranem?",
          "back": "Idarucizumab (Praxbind) v dávce 5 g i.v. (podávaný jako dvě po sobě jdoucí infuze/bolusy po 2,5 g), který okamžitě neutralizuje dabigatran s vysokou afinitou.",
          "hint": "Speciální neurologie LF OU"
        },
        {
          "id": "fc-S10-3",
          "front": "Které mozkové krvácení představuje absolutní indikaci k urgentní neurochirurgické evakuaci hematomu?",
          "back": "Mozečkový hematom (hematom zadní jámy) o průměru > 3 cm nebo s útlakem mozkového kmene a rozvojem hydrocefalu. Konzervativní postup je v tomto případě fatální.",
          "hint": "Speciální neurologie LF OU"
        }
      ],
      "quiz": [
        {
          "id": "pq-S10-1",
          "question": "Jaký je cílový systolický krevní tlak v akutní fázi intracerebrálního krvácení dle současných doporučení?",
          "options": [
            "Pod 110 mmHg",
            "130–140 mmHg",
            "160–180 mmHg k zachování perfuze",
            "Krevní tlak se v akutní fázi vůbec nesnižuje"
          ],
          "correctIndex": 1,
          "explanation": "Dle mezinárodních guidelines (studie INTERACT-2, ATACH-2) je optimální cílový systolický krevní tlak 130–140 mmHg. Příliš prudký pokles pod 120 mmHg může vést k renálnímu poškození, zatímco vyšší tlak zvyšuje riziko expanze hematomu."
        },
        {
          "id": "pq-S10-2",
          "question": "Co představuje tzv. 'Spot sign' na CT angiografii u pacienta s intracerebrálním krvácením?",
          "options": [
            "Kalzifikaci v cévní stěně",
            "Fokus extravazace kontrastní látky uvnitř hematomu znamenající aktivní krvácení a vysoké riziko expanze",
            "Ischemické penumbru kolem krvácení",
            "Trombus v a. cerebri media"
          ],
          "correctIndex": 1,
          "explanation": "'Spot sign' je drobný ložiskový kontrastní únik v parenchymovém hematomu při CTA, který svědčí o probíhající extravazaci krve a je nejsilnějším prediktorem časného zvětšení hematomu a mortality."
        }
      ]
    },
    {
      "id": "s11-bakteri-ln-infekce-centr-ln-ho-nervov-ho",
      "number": 11,
      "section": "specialni",
      "sectionLabel": "Speciální neurologie",
      "badgePrefix": "S11",
      "title": "Bakteriální infekce centrálního nervového systému",
      "shortDesc": "Akutní purulentní bakteriální meningitidy (etiologie dle věku, meningeální syndrom, likvorologie, okamžitá empirická ATB + dexamethason), mozkový absces, neuroborelióza a neurotuberkulóza.",
      "category": "infekce_tumory",
      "badge": "Neuroinfekce & Onkologie CNS",
      "badgeColor": "teal",
      "theory": {
        "banner": {
          "tag": "Speciální neurologie • Otázka S11",
          "title": "Bakteriální infekce centrálního nervového systému",
          "text": "Akutní purulentní bakteriální meningitidy (etiologie dle věku, meningeální syndrom, likvorologie, okamžitá empirická ATB + dexamethason), mozkový absces, neuroborelióza a neurotuberkulóza."
        },
        "sections": [
          {
            "title": "1. Úvod a Klasifikace",
            "content": "<p>Bakteriální infekce CNS představují život ohrožující urgentní stavy s rizikem rychlého rozvoje sepse, edému mozku, nitrolební hypertenze a trvalých neurologických následků či smrti. Dělí se na:</p>\n            <ul>\n                <li><strong>Akutní purulentní (hnisavé) meningitidy:</strong> zánět leptomening a subarachnoidálního prostoru.</li>\n                <li><strong>Mozkový absces:</strong> ohraničená hnisavá kolekce v mozkovém parenchymu.</li>\n                <li><strong>Specifické bakteriální neuroinfekce:</strong> Lymeská neuroborelióza, tuberkulózní bazilární meningitida, neurosyfilis.</li>\n            </ul>"
          },
          {
            "title": "2. Etiologie akutní purulentní meningitidy dle věku",
            "content": "<table class=\"data-table\">\n                <thead>\n                    <tr>\n                        <th>Věková skupina / Terén</th>\n                        <th>Nejčastější bakteriální patogeny</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr>\n                        <td><strong>Novorozenci (< 1 měsíc)</strong></td>\n                        <td><em>Streptococcus agalactiae</em> (GBS), <em>Escherichia coli</em>, <em>Listeria monocytogenes</em></td>\n                    </tr>\n                    <tr>\n                        <td><strong>Děti a mladí dospělí (1 měsíc – 50 let)</strong></td>\n                        <td><em>Neisseria meningitidis</em> (meningokok skupiny B, C), <em>Streptococcus pneumoniae</em> (pneumokok)</td>\n                    </tr>\n                    <tr>\n                        <td><strong>Senioři (> 50 let) a imunokompromitovaní</strong></td>\n                        <td><em>Streptococcus pneumoniae</em>, <em>Listeria monocytogenes</em>, gramnegativní tyčky</td>\n                    </tr>\n                    <tr>\n                        <td><strong>Po kraniotomii / otevřeném KCP</strong></td>\n                        <td><em>Staphylococcus aureus</em>, <em>Staphylococcus epidermidis</em>, <em>Pseudomonas aeruginosa</em></td>\n                    </tr>\n                </tbody>\n            </table>"
          },
          {
            "title": "3. Klinický obraz a Meningeální syndrom",
            "content": "<ul>\n                <li><strong>Klasická triáda:</strong> <em>horečka</em>, <em>meningeální dráždění</em> (opozice šíje, Brudziński, Kernig), <em>porucha vědomí</em> (od zmatenosti po koma). Plně vyjádřená triáda je přítomna u cca 50 % pacientů, ale alespoň 2 příznaky má > 95 %!</li>\n                <li><strong>Cerebrální příznaky:</strong> kruté bolesti hlavy, fotofobie, fonofobie, nevolnost a zvracení, epileptické záchvaty, ložiskové deficity (útlak hlavových nervů, cévní spazmy/trombózy).</li>\n                <li><strong>Meningokoková sepse (Waterhouse-Friderichsenův syndrom):</strong> fulminantní průběh, petechie a purpura na kůži, diseminovaná intravaskulární koagulace (DIC), nekróza nadledvin a refrakterní septický šok.</li>\n            </ul>"
          },
          {
            "title": "4. Diagnostika a Likvorový nález",
            "content": "<div class=\"highlight-box\">\n                <h4>Likvorový profil u akutní purulentní meningitidy</h4>\n                <ul>\n                    <li><strong>Vzhled:</strong> zakalený, hnisavý až mléčný, vytéká pod zvýšeným tlakem (> 200–300 $mmH_2O$).</li>\n                    <li><strong>Cytologie:</strong> masivní <strong>polynukleární pleocytóza</strong> (stovky až desetitisíce elementů/$\\mu l$, převaha neutrofilních granulocytů > 80 %).</li>\n                    <li><strong>Biochemie:</strong>\n                        <ul>\n                            <li>Výrazná <strong>proteinorachie</strong> ($> 1\text{–}5\text{ g/l}$, porucha hematolikvorové bariéry).</li>\n                            <li>Těžká <strong>hypoglykorachie</strong> (poměr likvor/krevní glukóza $< 0,4$, často neměřitelně nízká pro spotřebu bakteriemi a leukocyty).</li>\n                            <li>Zvýšený <strong>laktát</strong> ($> 3,5\text{–}4,0\text{ mmol/l}$).</li>\n                        </ul>\n                    </li>\n                    <li><strong>Mikrobiologie:</strong> Gramovo barvení (okamžitý výsledek), PCR vyšetření, kultivace likvoru a hemokultury (vždy před ATB!).</li>\n                </ul>\n            </div>\n\n            <p><strong>Varování – Indikace CT mozku před lumbální punkcí:</strong> Pokud má pacient ložiskový neurologický deficit, edém papily na očním pozadí, křeče nebo GCS < 10, musí se nejdříve provést CT k vyloučení expanze a hrozící herniace. <em>ATB léčba se však nesmí kvůli CT zpozdit – podávají se ihned po náběru hemokultur!</em></p>"
          },
          {
            "title": "5. Léčba bakteriální meningitidy",
            "content": "<ol>\n                <li><strong>Empirická antibiotická terapie (zahájit do 30–60 minut!):</strong>\n                    <ul>\n                        <li>Dospělí 18–50 let: <strong>Ceftriaxon</strong> (2g i.v. po 12 hod) nebo Cefotaxim + Vankomycin (při podezření na rezistentní pneumokoky).</li>\n                        <li>Dospělí > 50 let a imunosuprimovaní: <strong>Ceftriaxon + Ampicilin</strong> (2g i.v. po 4 hod – k pokrytí <em>Listeria monocytogenes</em>).</li>\n                    </ul>\n                </li>\n                <li><strong>Dexamethason i.v.:</strong> podává se v dávce <strong>10 mg i.v. před první dávkou ATB</strong> nebo současně s ní (opakovat po 6 hod po dobu 4 dnů). Výrazně snižuje mortalitu a neurologické komplikace (hluchotu) zejména u pneumokokové meningitidy tlumením zánětlivé kaskády po rozpadu bakterií.</li>\n                <li><strong>Antiedematózní a neurointenzivní terapie:</strong> Manitol, elevace hlavy 30°, normotermie, antikonvulziva při záchvatech.</li>\n            </ol>"
          },
          {
            "title": "6. Mozkový absces a Neuroborelióza",
            "content": "<ul>\n                <li><strong>Mozkový absces:</strong> vzniká per continuitatem (sinusitida, mastoiditida, dentální fokus) nebo hematogenně (endokarditida, plicní absces). Na kontrastním CT/MRI typický <em>prstencovitý lem vychytávající kontrast (ring-enhancing lesion)</em> s masivním kolaterálním edémem a restrikcí difuze (DWI hyperintenzní). Léčba: neurochirurgická punkce/exstirpace + cílená i.v. ATB po dobu 4–8 týdnů.</li>\n                <li><strong>Lymeská neuroborelióza:</strong> způsobená <em>Borrelia burgdorferi</em> (přenos klíštětem). Typické II. stadium: <strong>Garin-Bujadoux-Bannwarthův syndrom</strong> (lymfocytární meningitida + bolestivá asymetrická kraniální/spinální radikuloneuritida + periferní obrna n. facialis, často oboustranná). Likvor: lymfocytární pleocytóza, intratekální syntéza specifických protilátek anti-Borrelia IgG/IgM. Léčba: <strong>Ceftriaxon 2g i.v. 1x denně po dobu 14–21 dní</strong>.</li>\n            </ul>"
          }
        ]
      },
      "recall": {
        "scenarios": [
          {
            "id": "sc-S11-1",
            "title": "Klinická kazuistika – Bakteriální infekce centrálního nervového systému",
            "question": "<strong>Kazuistika:</strong> 68letá diabetička přivezena pro 2 dny trvající horečky 39,2 °C, těžkou zmatenost a světloplachost. Objektivně: somnolentní, ztuhlost šíje na 3 prsty, pozitivní Kernigův příznak, na kůži bez petechií. Glukóza v krvi je 11 mmol/l.<br><br><strong>Klinický úkol:</strong> Navrhněte diagnostický postup, interpretujte očekávaný nález v moku a sestavte bezodkladnou léčebnou kombinaci léků.",
            "answer": "<ul style='margin: 6px 0 0 18px; padding: 0; line-height: 1.5;'><li>Diagnostika: Náběr 2 párů hemokultur, urgentní CT mozku (vzhledem k věku, diabetu a alteraci vědomí) k vyloučení intrakraniální expanze, následně okamžitá lumbální punkce.</li><li>Zahájení léčby BEZ prodlení: Pokud by CT zdrželo LP o více než 30 minut, podat ATB ihned po náběru hemokultur.</li><li>Farmakoterapie: Dexamethason 10 mg i.v. podaný těsně před nebo s první dávkou ATB.</li><li>Antibiotická kombinace: Ceftriaxon 2 g i.v. po 12 hod + Ampicilin 2 g i.v. po 4 hod (kvůli věku > 50 let k pokrytí L. monocytogenes a S. pneumoniae).</li><li>Očekávaný likvor: Hnisavý, tisíce granulocytů, glukóza v likvoru < 2 mmol/l (poměr < 0,2), protein > 3 g/l, laktát > 4 mmol/l.</li></ul>",
            "keyPoints": [
              "Diagnostika: Náběr 2 párů hemokultur, urgentní CT mozku (vzhledem k věku, diabetu a alteraci vědomí) k vyloučení intrakraniální expanze, následně okamžitá lumbální punkce.",
              "Zahájení léčby BEZ prodlení: Pokud by CT zdrželo LP o více než 30 minut, podat ATB ihned po náběru hemokultur.",
              "Farmakoterapie: Dexamethason 10 mg i.v. podaný těsně před nebo s první dávkou ATB.",
              "Antibiotická kombinace: Ceftriaxon 2 g i.v. po 12 hod + Ampicilin 2 g i.v. po 4 hod (kvůli věku > 50 let k pokrytí L. monocytogenes a S. pneumoniae).",
              "Očekávaný likvor: Hnisavý, tisíce granulocytů, glukóza v likvoru < 2 mmol/l (poměr < 0,2), protein > 3 g/l, laktát > 4 mmol/l."
            ],
            "pearl": "Purulentní meningitida je urgentní stav: pneumokok a meningokok dominují u dospělých, u novorozenců a osob > 50 let přistupuje Listeria monocytogenes."
          }
        ]
      },
      "cards": [
        {
          "id": "fc-S11-1",
          "front": "Jaký je typický likvorový nález u akutní bakteriální purulentní meningitidy?",
          "back": "Zakalený hnisavý likvor, neutrofilní polynukleární pleocytóza (stovky až desetitisíce buněk), vysoká bílkovina (> 1–5 g/l), vysoký laktát (> 3,5 mmol/l) a výrazně snížená glukóza (poměr likvor/krevní glukóza < 0,4).",
          "hint": "Speciální neurologie LF OU"
        },
        {
          "id": "fc-S11-2",
          "front": "Proč se u pacientů s podezřením na bakteriální meningitidu starších 50 let přidává k Ceftriaxonu do empirické léčby Ampicilin?",
          "back": "K pokrytí bakterie Listeria monocytogenes, která je přirozeně rezistentní k cefalosporinům 3. generace (včetně ceftriaxonu) a způsobuje meningitidy u kojenců, seniorů a imunosuprimovaných.",
          "hint": "Speciální neurologie LF OU"
        },
        {
          "id": "fc-S11-3",
          "front": "Co tvoří klinickou triádu Bannwarthova syndromu u 2. stadia lymeské neuroboreliózy?",
          "back": "1. Lymfocytární meningitida (bolesti hlavy), 2. intenzivní stěhovavé radikulární bolesti (radikuloneuritida), 3. periferní paréza hlavových nervů (nejčastěji n. facialis, často oboustranná diplegia facialis).",
          "hint": "Speciální neurologie LF OU"
        }
      ],
      "quiz": [
        {
          "id": "pq-S11-1",
          "question": "Kdy je nejvhodnější podat Dexamethason u akutní bakteriální meningitidy?",
          "options": [
            "Až po obdržení definitivních výsledků kultivace likvoru za 48 hodin",
            "Bezprostředně před aplikací první dávky antibiotik nebo současně s ní",
            "Až po 5 dnech antibiotické léčby při přetrvávání horeček",
            "Dexamethason je u bakteriálních infekcí přísně kontraindikován"
          ],
          "correctIndex": 1,
          "explanation": "Dexamethason musí být aplikován před nebo s první dávkou ATB, aby potlačil masivní zánětlivou reakci vyvolanou rozpadem bakteriálních těl a uvolněním endotoxinů po prvním zásahu baktericidního antibiotika."
        },
        {
          "id": "pq-S11-2",
          "question": "Které antibiotikum je lékem první volby v léčbě lymeské neuroboreliózy s postižením CNS a hlavových nervů?",
          "options": [
            "Ciprofloxacin p.o.",
            "Ceftriaxon 2 g i.v. 1x denně po dobu 14–21 dní",
            "Gentamicin i.m.",
            "Amoxicilin 500 mg p.o. po 8 hod 5 dní"
          ],
          "correctIndex": 1,
          "explanation": "Zlatým standardem léčby neuroboreliózy s průkazem postižení CNS a intratekální syntézy je parenterální Ceftriaxon 2 g i.v. denně po dobu 2–3 týdnů (případně perorální Doxycyklin u mírnějších forem)."
        }
      ]
    },
    {
      "id": "s12-virov-infekce-centr-ln-ho-nervov-ho-syst",
      "number": 12,
      "section": "specialni",
      "sectionLabel": "Speciální neurologie",
      "badgePrefix": "S12",
      "title": "Virové infekce centrálního nervového systému",
      "shortDesc": "Aseptické virové meningitidy (enteroviry), herpetická nekrotizující encefalitida (HSV-1, aciclovir i.v.), klíšťová meningoencefalitida (TBEV, bifázický průběh), vzteklina a oportunní infekce (PML).",
      "category": "infekce_tumory",
      "badge": "Neuroinfekce & Onkologie CNS",
      "badgeColor": "teal",
      "theory": {
        "banner": {
          "tag": "Speciální neurologie • Otázka S12",
          "title": "Virové infekce centrálního nervového systému",
          "text": "Aseptické virové meningitidy (enteroviry), herpetická nekrotizující encefalitida (HSV-1, aciclovir i.v.), klíšťová meningoencefalitida (TBEV, bifázický průběh), vzteklina a oportunní infekce (PML)."
        },
        "sections": [
          {
            "title": "1. Úvod a Dělení virových neuroinfekcí",
            "content": "<p>Virové infekce CNS jsou nejčastější příčinou <strong>aseptických (lymfocytárních) meningitid a akutních encefalitid</strong>. Na rozdíl od purulentních meningitid mívají virové meningitidy obvykle benignější průběh, avšak <em>virové encefalitidy</em> (zejména nekrotizující herpetická encefalitida) představují kritický stav s vysokou mortalitou a trvalým neurologickým deficitem.</p>"
          },
          {
            "title": "2. Hlavní virová agens",
            "content": "<div class=\"anatomy-grid\">\n                <div class=\"grid-item\">\n                    <h4>Virové meningitidy</h4>\n                    <ul>\n                        <li><strong>Enteroviry (Echoviry, Coxsackie A a B):</strong> tvoří 70–80 % všech virových meningitid, letní a podzimní epidemie, přenos fekálně-orální cestou, obvykle benigní spontánní ústup.</li>\n                        <li><strong>Herpes simplex virus typ 2 (HSV-2):</strong> původce recidivujících benigních lymfocytárních meningitid (tzv. <em>Mollaretova meningitida</em>) a meningitid mladých dospělých.</li>\n                        <li><strong>Virus parotitidy (Mumps), VZV, HIV:</strong> v časné fázi sérokonverze.</li>\n                    </ul>\n                </div>\n                <div class=\"grid-item\">\n                    <h4>Virové encefalitidy</h4>\n                    <ul>\n                        <li><strong>Herpes simplex virus typ 1 (HSV-1):</strong> nejčastější a nejzávažnější sporadická nekrotizující encefalitida. Typická predilekce: <em>temporální a frontální báze</em>.</li>\n                        <li><strong>Virus klíšťové encefalitidy (TBEV - Flavivirus):</strong> endemický výskyt ve střední Evropě, přenos klíštětem <em>Ixodes ricinus</em> nebo nepasterizovaným mlékem.</li>\n                        <li><strong>Varicella-zoster virus (VZV):</strong> cerebelitida, encefalitida, vaskulopatie po pásovém oparu.</li>\n                        <li><strong>JC virus (Polyomavirus):</strong> progresivní multifokální leukoencefalopatie (PML) u imunosuprimovaných (HIV, léčba natalizumabem).</li>\n                    </ul>\n                </div>\n            </div>"
          },
          {
            "title": "3. Herpetická encefalitida (HSV-1)",
            "content": "<ul>\n                <li><strong>Patogeneze:</strong> retrográdní transport viru podél n. olfactorius nebo n. trigeminus do temporálního a frontálního laloku $\to$ hemoragicko-nekrotizující zánět a masivní edém mozku.</li>\n                <li><strong>Klinický obraz:</strong> akutní horečka, bolesti hlavy, <strong>zmatenost a poruchy chování/psychiky</strong> (napodobující psychózu), fatické poruchy (afázie), amnestický syndrom, parciální epileptické záchvaty s temporálním počátkem (čichové a chuťové aury, automatismy).</li>\n                <li><strong>Diagnostika:</strong>\n                    <ul>\n                        <li><em>MRI mozku (metoda volby):</em> hyperintenzita v T2/FLAIR a restrikce difuze v asymetrické kůře temporálního a frontálního laloku a insuly.</li>\n                        <li><em>Likvor:</em> lymfocytární pleocytóza (desítky až stovky elementů), mírná proteinorachie, erytrocyty/xantochromie (nekróza), <strong>PCR průkaz HSV DNA v likvoru</strong> (zlatý standard, senzitivita > 95 %).</li>\n                        <li><em>EEG:</em> periodické lateralizované epileptiformní výboje (PLEDs) nad temporálními svody.</li>\n                    </ul>\n                </li>\n                <li><strong>Léčba:</strong> okamžité i.v. podání <strong>Acicloviru (10 mg/kg i.v. po 8 hodinách po dobu 14–21 dní)</strong>! Léčba musí být zahájena ihned při podezření, čekání na výsledek PCR dramaticky zvyšuje mortalitu.</li>\n            </ul>"
          },
          {
            "title": "4. Klíšťová meningoencefalitida (TBEV)",
            "content": "<ul>\n                <li><strong>Bifázický průběh:</strong>\n                    <ol>\n                        <li><em>1. fáze (virémie):</em> chřipkovité příznaky (horečka, únava, myalgie, cefalea) trvající 3–7 dní, následuje asymptomatické období (1–2 týdny).</li>\n                        <li><em>2. fáze (neuroinvaze):</em> nová ataka vysokých horeček a neurologických symptomů – dle tíže: meningitida (bolesti hlavy, fotofobie), meningoencefalitida (tremor prstů, jazyka, víček, ataxie, kognitivní alterace), meningoencefalomyelitida (chabé parézy – typicky <strong>chabá paréza ramenního pletence a horních končetin</strong>).</li>\n                    </ol>\n                </li>\n                <li><strong>Diagnostika:</strong> průkaz specifických protilátek <strong>IgM a IgG proti TBEV v séru a likvoru</strong> (ELISA). V likvoru serózní obraz (lymfocytární pleocytóza desítky až stovky, proteinorachie do 1 g/l, normální glukóza).</li>\n                <li><strong>Léčba:</strong> specifická antivirová léčba neexistuje – terapie je <strong>čistě symptomatická</strong> (analgetika, antipyretika, antiedematózní léčba, klid na lůžku). Prevence: aktivní očkování!</li>\n            </ul>\n\n            <div class=\"highlight-box\">\n                <h4>Přehled typického likvorového nálezu u virových neuroinfekcí</h4>\n                <ul>\n                    <li><strong>Vzhled:</strong> čirý, bezbarvý, výtokový tlak normální nebo mírně zvýšený.</li>\n                    <li><strong>Cytologie:</strong> mírná až střední <strong>lymfomonocytární pleocytóza</strong> (desítky až stovky elementů/$\\mu l$; v prvních 24h mohou přechodně převažovat neutrofily).</li>\n                    <li><strong>Biochemie:</strong>\n                        <ul>\n                            <li>Mírně zvýšená bílkovina (0,5–1,5 g/l).</li>\n                            <li><strong>Normální glukóza</strong> (poměr likvor/krev $\\ge 0,6$).</li>\n                            <li><strong>Normální laktát</strong> ($< 2,5\text{ mmol/l}$).</li>\n                        </ul>\n                    </li>\n                </ul>\n            </div>"
          }
        ]
      },
      "recall": {
        "scenarios": [
          {
            "id": "sc-S12-1",
            "title": "Klinická kazuistika – Virové infekce centrálního nervového systému",
            "question": "<strong>Kazuistika:</strong> 45letý dosud zdravý muž přivezen rodinou pro náhlou změnu osobnosti, agresivitu, dezorientaci, horečku 38,8 °C a nově vzniklou poruchu porozumění řeči (senzorická afázie). Během příjmu prodělal fokální motorický záchvat s automatickým polykáním.<br><br><strong>Klinický úkol:</strong> Vyslovte nejpravděpodobnější diagnózu, navrhněte klíčová paraklinická vyšetření a okamžitý terapeutický krok.",
            "answer": "<ul style='margin: 6px 0 0 18px; padding: 0; line-height: 1.5;'><li>Diagnóza: Akutní herpetická nekrotizující encefalitida (HSV-1) s postižením dominantního temporálního laloku.</li><li>Okamžitá léčba: Ihned zahájit infuzi Acicloviru v dávce 10 mg/kg i.v. po 8 hodinách (nečekat na výsledky LP a PCR!).</li><li>Zobrazovací vyšetření: MRI mozku (T2/FLAIR a DWI hyperintenzita v temporálním laloku a insule vlevo, edém).</li><li>Lumbální punkce: Vyšetření likvoru včetně statimového PCR průkazu HSV-1 DNA, očekává se lymfocytární pleocytóza a přítomnost erytrocytů.</li><li>Elektrofyziologie: EEG k detekci periodických lateralizovaných epileptiformních výbojů (PLEDs) nad levým spánkovým lalokem a antikonvulzivní léčba (levetiracetam i.v.).</li></ul>",
            "keyPoints": [
              "Diagnóza: Akutní herpetická nekrotizující encefalitida (HSV-1) s postižením dominantního temporálního laloku.",
              "Okamžitá léčba: Ihned zahájit infuzi Acicloviru v dávce 10 mg/kg i.v. po 8 hodinách (nečekat na výsledky LP a PCR!).",
              "Zobrazovací vyšetření: MRI mozku (T2/FLAIR a DWI hyperintenzita v temporálním laloku a insule vlevo, edém).",
              "Lumbální punkce: Vyšetření likvoru včetně statimového PCR průkazu HSV-1 DNA, očekává se lymfocytární pleocytóza a přítomnost erytrocytů.",
              "Elektrofyziologie: EEG k detekci periodických lateralizovaných epileptiformních výbojů (PLEDs) nad levým spánkovým lalokem a antikonvulzivní léčba (levetiracetam i.v.)."
            ],
            "pearl": "Virové meningitidy jsou nejčastěji enterovirové (benigní, letní sezóna, lymfocytární likvor s normální glukózou a laktátem)."
          }
        ]
      },
      "cards": [
        {
          "id": "fc-S12-1",
          "front": "Jaká je typická anatomická lokalizace a lék volby u herpetické encefalitidy vyvolané HSV-1?",
          "back": "Typická lokalizace je nekrotizující zánět temporálních a frontálních laloků a limbického systému. Lékem volby je Aciclovir i.v. v dávce 10 mg/kg po 8 hodinách po dobu 14–21 dnů.",
          "hint": "Speciální neurologie LF OU"
        },
        {
          "id": "fc-S12-2",
          "front": "Jak se v likvoru liší virová (aseptická) meningitida od purulentní bakteriální meningitidy?",
          "back": "Virová má čirý likvor, lymfocytární pleocytózu (desítky až stovky buněk), NORMÁLNÍ glukózu (poměr > 0,6) a normální laktát (< 2,5 mmol/l). Bakteriální má zkalený likvor, masivní neutrofilní pleocytózu, těžkou hypoglykorachii a vysoký laktát.",
          "hint": "Speciální neurologie LF OU"
        },
        {
          "id": "fc-S12-3",
          "front": "Jaký klinický průběh a neurologický deficit je charakteristický pro klíšťovou encefalitidu?",
          "back": "Bifázický průběh (1. chřipková virémie, 2. po bezpříznakovém intervalu neuroinfekce). Při postižení předních rohů míšních (myelitická forma) způsobuje typicky chabou parézu ramenního pletence a proximálních partií paže.",
          "hint": "Speciální neurologie LF OU"
        }
      ],
      "quiz": [
        {
          "id": "pq-S12-1",
          "question": "Která diagnostická metoda je zlatým standardem pro potvrzení diagnózy herpetické encefalitidy způsobené HSV-1?",
          "options": [
            "Kultivace viru z likvoru",
            "Průkaz HSV-1 DNA v mozkomíšním moku pomocí PCR",
            "Paul-Bunnellova reakce",
            "Elektronová mikroskopie moči"
          ],
          "correctIndex": 1,
          "explanation": "Detekce DNA viru Herpes simplex v likvoru metodou polymerázové řetězové reakce (PCR) je vysoce senzitivní (> 95 %) a specifická metoda, která je diagnostickým zlatým standardem."
        },
        {
          "id": "pq-S12-2",
          "question": "Které tvrzení o klíšťové meningoencefalitidě je PRAVDIVÉ?",
          "options": [
            "Lékem první volby je Ganciclovir i.v.",
            "Onemocnění má typicky monofázický průběh bez chřipkové fáze",
            "Diagnóza se opírá o průkaz specifických protilátek IgM a IgG v séru a likvoru (ELISA)",
            "V likvoru dominuje těžká hypoglykorachie pod 1 mmol/l"
          ],
          "correctIndex": 2,
          "explanation": "Klíšťová encefalitida se diagnostikuje serologicky průkazem specifických protilátek IgM a IgG v séru a mozkomíšním moku metodou ELISA. Kauzální antivirotikum neexistuje."
        }
      ]
    },
    {
      "id": "s13-n-dory-centr-ln-ho-nervov-ho-syst-mu-nit",
      "number": 13,
      "section": "specialni",
      "sectionLabel": "Speciální neurologie",
      "badgePrefix": "S13",
      "title": "Nádory centrálního nervového systému - nitrolební nádory",
      "shortDesc": "Primární a sekundární nitrolební nádory: klasifikace WHO (gliomy IDH-mut/wildtype, glioblastom, meningeomy, vestibulární schwannom, metastázy), klinický obraz, MRI diagnostika, neurochirurgie a Stuppův protokol.",
      "category": "infekce_tumory",
      "badge": "Neuroinfekce & Onkologie CNS",
      "badgeColor": "teal",
      "theory": {
        "banner": {
          "tag": "Speciální neurologie • Otázka S13",
          "title": "Nádory centrálního nervového systému - nitrolební nádory",
          "text": "Primární a sekundární nitrolební nádory: klasifikace WHO (gliomy IDH-mut/wildtype, glioblastom, meningeomy, vestibulární schwannom, metastázy), klinický obraz, MRI diagnostika, neurochirurgie a Stuppův protokol."
        },
        "sections": [
          {
            "title": "1. Úvod a Epidemiologie",
            "content": "<p>Nitrolební nádory tvoří přibližně 2 % všech malignit u dospělých, avšak u dětí představují druhou nejčastější malignitu (po leukémiích). Dělí se na:</p>\n            <ul>\n                <li><strong>Sekundární (mozkové metastázy, > 50 %):</strong> nejčastější nitrolební nádory dospělých. Primární tumory: <em>bronchogenní karcinom (50 %)</em>, karcinom prsu (15–20 %), maligní melanom (vysoká tendence ke krvácení), karcinom ledviny (Grawitz), kolorektální karcinom. Typicky mnohočetná ložiska na rozhraní šedé a bílé hmoty s masivním prstovitým vazogenním edémem.</li>\n                <li><strong>Primární nitrolební nádory:</strong> vycházejí z buněk nervové tkáně, obalů nebo cév.</li>\n            </ul>"
          },
          {
            "title": "2. Klasifikace primárních nádorů CNS (WHO 2021)",
            "content": "<div class=\"anatomy-grid\">\n                <div class=\"grid-item\">\n                    <h4>Gliomy (z gliových buněk)</h4>\n                    <ul>\n                        <li><strong>Difuzní astrocytom / Oligodendrogliom (WHO grade 2–3):</strong> IDH-mutované nádory s lepší prognózou. Oligodendrogliom je definován kodelecí <em>1p/19q</em> (vysoká chemosenzitivita na PCV/TMZ).</li>\n                        <li><strong>Glioblastom (WHO grade 4):</strong> nejčastější a nejagresivnější primární mozkový nádor dospělých (medián přežití 12–15 měsíců). Molekulárně: <em>IDH-wildtype</em>, amplifikace EGFR, mutace promotoru TERT. Histologie: neovaskularizace, glomeruloidní proliferace, nekrózy lemované pseudopalisádami.</li>\n                        <li><strong>Pilocytický astrocytom (WHO grade 1):</strong> ohraničený benigní tumor dětí v mozečku, kurabilní kompletní resekcí.</li>\n                    </ul>\n                </div>\n                <div class=\"grid-item\">\n                    <h4>Negliové a extraaxiální nádory</h4>\n                    <ul>\n                        <li><strong>Meningeomy (WHO grade 1–3):</strong> nejčastější benigní extraaxiální nádor vycházející z arachnoideálních buněk dury. Pomalu rostoucí, častější u žen, durální vazba (<em>dural tail sign</em> na MRI), může vyvolat hyperostózu kosti.</li>\n                        <li><strong>Vestibulární schwannom (neurinom akustiku, WHO grade 1):</strong> nádor z buněk Schwannovy pochvy n. vestibularis v mostomozečkovém koutu. Klinika: jednostranná percepční nedoslýchavost, tinitus, vertigo, později paréza n. VII a hypestezie n. V.</li>\n                        <li><strong>Adenomy hypofýzy:</strong> endokrinně aktivní (prolaktinom, akromegalie, m. Cushing) vs. afunkční (útlak chiazma opticum $\to$ bitemporální hemianopsie).</li>\n                        <li><strong>Meduloblastom (WHO grade 4):</strong> embryonální maligní nádor zadní jámy u dětí.</li>\n                    </ul>\n                </div>\n            </div>"
          },
          {
            "title": "3. Klinický obraz mozkových nádorů",
            "content": "<ul>\n                <li><strong>1. Syndrom nitrolební hypertenze (nespecifické difuzní příznaky):</strong> ranní tupá bolest hlavy (horší vleže a při kašli), ranní zvracení nalačno bez předchozí nevolnosti, městnavá papila zrakového nervu (edém papily), somnolence.</li>\n                <li><strong>2. Epileptické záchvaty:</strong> nově vzniklý epileptický záchvat u dospělého člověka (> 30–40 let) je <em>vždy suspektní z mozkového tumoru</em> až do vyloučení pomocí MRI!</li>\n                <li><strong>3. Ložiskové neurologické příznaky (dle lokalizace):</strong>\n                    <ul>\n                        <li><em>Frontální lalok:</em> apaticko-abulický syndrom, moria (nevhodné vtipkování), expresivní Brocova afázie, kontralaterální monoparéza/hemiparéza.</li>\n                        <li><em>Temporální lalok:</em> Wernickeova afázie, kvadrantová horní anopsie, parciální záchvaty s čichovými aurami.</li>\n                        <li><em>Parietální lalok:</em> korová porucha čití (astereognózie, autotopagnózie), apraxie, Gerstmannův syndrom.</li>\n                        <li><em>Zadní jáma a mozeček:</em> vestibulocerebelární ataxie, dysmetrie, intenční tremor, nystagmus, hydrocefalus.</li>\n                    </ul>\n                </li>\n            </ul>"
          },
          {
            "title": "4. Diagnostika",
            "content": "<ul>\n                <li><strong>MRI mozku s podáním gadolinia:</strong> suverénní modalita volby. Glioblastom se zobrazí jako infiltrativní expanze s nepravidelným prstencovitým sycením kolem centrální nekrózy a masivním edémem; spektroskopie (MRS) prokazuje vysoký cholin a nízký NAA.</li>\n                <li><strong>Nekontrastní + kontrastní CT:</strong> záchyt kalcifikací (meningeom, oligodendrogliom), destrukce kosti, urgentní zobrazení hemoragie do tumoru či herniace.</li>\n                <li><strong>Histopatologické a molekulární vyšetření:</strong> definitivní diagnóza z bioptického vzorku (stereotaktická biopsie) nebo resekátu (status IDH1/2, 1p/19q, metylace promotoru MGMT – prediktor odpovědi na temozolomid).</li>\n            </ul>"
          },
          {
            "title": "5. Terapie nitrolebních nádorů",
            "content": "<ol>\n                <li><strong>Symptomatická antiedematózní léčba:</strong> <strong>Dexamethason</strong> (vysoké dávky např. 8–16 mg/den i.v./p.o.) – dramaticky redukuje vazogenní edém v okolí nádoru stabilizací hematoencefalické bariéry. Antikonvulziva (levetiracetam) při záchvatech.</li>\n                <li><strong>Chirurgická léčba:</strong> maximální bezpečná resekce (s využitím neuronavigace, intraoperačního neuromonitoringu a 5-ALA fluorescenčního zobrazení) nebo stereotaktická biopsie inoperabilních lézí.</li>\n                <li><strong>Radioterapie:</strong> frakcionovaná zevní radioterapie, stereotaktická radiochirurgie (Leksellův gama nůž u vestibulárních schwannomů, meningeomů a solitárních metastáz).</li>\n                <li><strong>Chemoterapie (Stuppův protokol u glioblastomu):</strong> konkomitantní radiochemoterapie s <strong>Temozolomidem (TMZ)</strong> následovaná 6 cykly adjuvantního temozolomidu.</li>\n            </ol>"
          }
        ]
      },
      "recall": {
        "scenarios": [
          {
            "id": "sc-S13-1",
            "title": "Klinická kazuistika – Nádory centrálního nervového systému - nitrolební nádory",
            "question": "<strong>Kazuistika:</strong> 58letý manažer vyšetřován pro 3 týdny progredující ranní bolesti hlavy se zvracením nalačno, zpomalené psychomotorické tempo a nově vzniklý generalizovaný tonicko-klonický záchvat. MRI odhalilo v pravém frontálním laloku infiltrativní tumorózní expanzi s nepravidelným prstencovým sycením po gadoliniu, centrální nekrózou a masivním vazogenním edémem s přetlakem středových struktur o 8 mm.<br><br><strong>Klinický úkol:</strong> Stanovte suspektní diagnózu, navrhněte okamžitou medikamentózní stabilizaci a další léčebný onkochirurgický plán.",
            "answer": "<ul style='margin: 6px 0 0 18px; padding: 0; line-height: 1.5;'><li>Suspektní diagnóza: Glioblastom (WHO grade 4) pravého frontálního laloku se syndromem nitrolební hypertenze a strukturální epilepsií.</li><li>Okamžitá farmakoterapie: Zahájení antiedematózní léčby Dexamethasonem (např. 8 mg i.v. bolus, dále 4 mg po 6h) a nasazení antikonvulziva (Levetiracetam 500–1000 mg 2x denně).</li><li>Chirurgický výkon: Urgentní neurochirurgická kraniotomie a maximální možná bezpečná resekce tumoru s pomocí neuronavigace a fluorescenčního navádění (5-ALA).</li><li>Histopatologická a molekulární verifikace: Vyšetření IDH mutace, 1p/19q kodelece a metylace promotoru MGMT.</li><li>Adjuvantní onkologická léčba: Stuppův protokol – konkomitantní radioterapie (60 Gy) s Temozolomidem, následovaná udržovací chemoterapií.</li></ul>",
            "keyPoints": [
              "Suspektní diagnóza: Glioblastom (WHO grade 4) pravého frontálního laloku se syndromem nitrolební hypertenze a strukturální epilepsií.",
              "Okamžitá farmakoterapie: Zahájení antiedematózní léčby Dexamethasonem (např. 8 mg i.v. bolus, dále 4 mg po 6h) a nasazení antikonvulziva (Levetiracetam 500–1000 mg 2x denně).",
              "Chirurgický výkon: Urgentní neurochirurgická kraniotomie a maximální možná bezpečná resekce tumoru s pomocí neuronavigace a fluorescenčního navádění (5-ALA).",
              "Histopatologická a molekulární verifikace: Vyšetření IDH mutace, 1p/19q kodelece a metylace promotoru MGMT.",
              "Adjuvantní onkologická léčba: Stuppův protokol – konkomitantní radioterapie (60 Gy) s Temozolomidem, následovaná udržovací chemoterapií."
            ],
            "pearl": "Mozkové metastázy (plíce, prs, melanom, ledvina) jsou u dospělých častější než primární nádory mozku."
          }
        ]
      },
      "cards": [
        {
          "id": "fc-S13-1",
          "front": "Jaký lék je lékem volby k rychlému zmírnění vazogenního edému mozku u pacientů s intrakraniálním nádorem?",
          "back": "Dexamethason (syntetický kortikoid) ve vysoké dávce (např. 8–16 mg i.v./p.o. denně), který stabilizuje permeabilitu hematoencefalické bariéry.",
          "hint": "Speciální neurologie LF OU"
        },
        {
          "id": "fc-S13-2",
          "front": "Co představuje Stuppův protokol v onkologické léčbě multiformního glioblastomu (WHO grade 4)?",
          "back": "Kombinovaná radioterapie (fokální zevní ozařování 60 Gy) s konkomitantním podáváním perorálního alkylačního cytostatika Temozolomidu (TMZ) denně, následovaná 6 cykly adjuvantního podávání Temozolomidu.",
          "hint": "Speciální neurologie LF OU"
        },
        {
          "id": "fc-S13-3",
          "front": "Jaký klinický nález a symptomy vyvolává vestibulární schwannom (neurinom akustiku) v mostomozečkovém koutu?",
          "back": "Progresivní jednostrannou percepční nedoslýchavost, tinitus a nestabilitu/vertigo (útlak n. VIII), později periferní parézu n. VII a poruchu čití na obličeji s oslabením korneálního reflexu (útlak n. V).",
          "hint": "Speciální neurologie LF OU"
        }
      ],
      "quiz": [
        {
          "id": "pq-S13-1",
          "question": "Který primární nádor je nejčastějším zdrojem metastáz do mozku u dospělých?",
          "options": [
            "Karcinom prostaty",
            "Bronchogenní karcinom plic",
            "Osteosarkom",
            "Karcinom štítné žlázy"
          ],
          "correctIndex": 1,
          "explanation": "Bronchogenní karcinom plic (malobuněčný i nemalobuněčný) je nejčastějším primárním tumorem, který tvoří až 50 % všech mozkových metastáz."
        },
        {
          "id": "pq-S13-2",
          "question": "Typickým znakem meningeomu na kontrastním MRI vyšetření je:",
          "options": [
            "Nepravidelné prstencové sycení s centrální nekrózou",
            "Ostře ohraničený extraaxiální nádor s homogenním sycením a přítomností 'dural tail sign' (durálního lemu)",
            "Difuzní infiltrace bílé hmoty bez vychytávání kontrastu",
            "Výhradně intraventrikulární lokalizace"
          ],
          "correctIndex": 1,
          "explanation": "Meningeomy jsou extraaxiální, homogenně a intenzivně se sytící benigní tumory, u kterých je charakteristický výběžek sytící se přilehlé dury mater zvaný 'dural tail sign'."
        }
      ]
    },
    {
      "id": "s14-n-dory-centr-ln-ho-nervov-ho-syst-mu-m-n",
      "number": 14,
      "section": "specialni",
      "sectionLabel": "Speciální neurologie",
      "badgePrefix": "S14",
      "title": "Nádory centrálního nervového systému - míšní nádory",
      "shortDesc": "Míšní a spinální nádory: anatomická klasifikace (intramedulární, intradurální extramedulární, epidurální metastázy), syndrom míšní komprese, Brown-Séquard, urgentní MRI páteře a dekomprese.",
      "category": "infekce_tumory",
      "badge": "Neuroinfekce & Onkologie CNS",
      "badgeColor": "teal",
      "theory": {
        "banner": {
          "tag": "Speciální neurologie • Otázka S14",
          "title": "Nádory centrálního nervového systému - míšní nádory",
          "text": "Míšní a spinální nádory: anatomická klasifikace (intramedulární, intradurální extramedulární, epidurální metastázy), syndrom míšní komprese, Brown-Séquard, urgentní MRI páteře a dekomprese."
        },
        "sections": [
          {
            "title": "1. Anatomická klasifikace míšních nádorů",
            "content": "<p>Nádory páteřního kanálu se dělí podle vztahu k míše a tvrdé pleně (dura mater) do tří základních anatomických kompartmentů, což určuje jejich biologické chování, klinický obraz i chirurgický přístup:</p>\n\n            <div class=\"anatomy-grid\">\n                <div class=\"grid-item\">\n                    <h4>1. Epidurální nádory (Extradurální, 55–60 %)</h4>\n                    <ul>\n                        <li>Uloženy vně dura mater v páteřním kanálu.</li>\n                        <li><strong>V naprosté většině maligní metastázy:</strong> karcinom plic, prsu, prostaty, ledvin, mnohočetný myelom / plazmocytom, lymfomy.</li>\n                        <li>Rostou z obratlového těla či oblouku a způsobují patologické fraktury a kompresi míšního vaku.</li>\n                    </ul>\n                </div>\n                <div class=\"grid-item\">\n                    <h4>2. Intradurální extramedulární nádory (30–35 %)</h4>\n                    <ul>\n                        <li>Uloženy pod dura mater, ale vně míšního parenchymu.</li>\n                        <li><strong>Většinou benigní tumory:</strong>\n                            <ul>\n                                <li><em>Spinální schwannomy (neurinomy):</em> z dorzálních senzitivních míšních kořenů, mohou mít tvar přesýpacích hodin (propagace foramina intervertebralia).</li>\n                                <li><em>Spinální meningeomy:</em> z arachnoidey dury, častější u žen v hrudním úseku.</li>\n                            </ul>\n                        </li>\n                    </ul>\n                </div>\n            </div>\n\n            <div class=\"highlight-box\">\n                <h4>3. Intramedulární nádory (5–10 %)</h4>\n                <p>Vycházejí přímo z nervové tkáně míšního provazce (uvnitř míchy):</p>\n                <ul>\n                    <li><strong>Ependymom (60 %):</strong> nejčastější intramedulární nádor dospělých, typicky v cervikální míše nebo v conus medullaris a filum terminale. Dobře ohraničený, často s kavitou/syringomyelií, potenciálně kompletně resekabilní.</li>\n                    <li><strong>Astrocytom míchy (30 %):</strong> častější u dětí a mladých dospělých, infiltrativní růst bez jasné hranice, obtížná resekce.</li>\n                    <li><strong>Hemangioblastom:</strong> vaskularizovaný tumor, často v rámci von Hippel-Lindauova syndromu (VHL).</li>\n                </ul>\n            </div>"
          },
          {
            "title": "2. Klinický obraz a Stádia míšního nádoru",
            "content": "<p>Klinický obraz se obvykle rozvíjí postupně ve třech stádiích:</p>\n            <ol>\n                <li><strong>Kořenové (radikulární) stádium:</strong> časný příznak (zejména u extramedulárních tumorů) – intenzivní pálivá, bodavá bolest v dermatomu příslušného míšního kořene, která se <em>typicky zhoršuje v noci v poloze vleže</em> (noční radikulalgie), při kašli a defekaci.</li>\n                <li><strong>Stádium inkompletní míšní léze:</strong> postupná komprese míchy vyvolává <strong>Brown-Séquardův syndrom</strong> (homolaterální centrální paréza a porucha hlubokého čití + kontralaterální výpadek termického a algického čití) nebo centrální míšní syndrom.</li>\n                <li><strong>Stádium kompletní transverzální míšní léze:</strong> spastická paraparéza/plegie pod úrovní léze, vymizení všech modalit čití od dané hladiny distálně, retence moči a stolice (neurogenní močový měchýř).</li>\n            </ol>\n\n            <div class=\"highlight-box\">\n                <h4>Akutní metastatická míšní komprese (MSCC - Malignant Spinal Cord Compression)</h4>\n                <p>Onkologický a neurologický urgentní stav! Vzniká kolapsem obratle s metastázou. Neléčená vede během několika hodin až dnů k ireverzibilní plegii a inkontinenci. <strong>Léčba musí začít ihned:</strong> vysoké dávky dexamethasonu (16–24 mg i.v.) + urgentní spinální dekomprese (do 24 hodin) nebo urgentní radioterapie!</p>\n            </div>"
          },
          {
            "title": "3. Diagnostika",
            "content": "<ul>\n                <li><strong>Nativní a kontrastní MRI celého páteřního kanálu:</strong> metoda volby. Dokonale odliší intramedulární lézi (rozšíření míchy, sycení ependymomu/astrocytomu) od extramedulárních expanzí a metastatické komprese míchy a durálního vaku.</li>\n                <li><strong>CT páteře:</strong> detailní zhodnocení osteolýzy, destrukce obratlových těl a stability páteře.</li>\n                <li><strong>Likvorové vyšetření:</strong> Froinův syndrom (proteinorachie v desítkách g/l, žlutý xantochromní likvor, který spontánně koaguluje v důsledku blokády likvorových cest pod tumorem).</li>\n            </ul>"
          },
          {
            "title": "4. Léčebné postupy",
            "content": "<ul>\n                <li><strong>Chirurgická léčba:</strong>\n                    <ul>\n                        <li>Totální mikrochirurgická exstirpace u benigních extramedulárních tumorů (schwannomy, meningeomy) – kurativní výkon.</li>\n                        <li>Mikrochirurgické odstranění intramedulárních ependymomů s intraoperačním monitoringem (MEP, SSEP).</li>\n                        <li>Chirurgická dekomprese (laminektomie / korpektomie) se stabilizací páteře (instrumentace) u metastáz.</li>\n                    </ul>\n                </li>\n                <li><strong>Konzervativní a onkologická léčba:</strong>\n                    <ul>\n                        <li><strong>Dexamethason i.v.:</strong> k redukci vazogenního edému míchy při akutní kompresi.</li>\n                        <li><strong>Radioterapie:</strong> frakcionovaná radioterapie nebo stereotaktická radiosurgery (SBRT/CyberKnife) pro radiosenzitivní metastázy (lymfom, myelom, malobuněčný karcinom) a subtotalně resekované maligní gliomy míchy.</li>\n                    </ul>\n                </li>\n            </ul>"
          }
        ]
      },
      "recall": {
        "scenarios": [
          {
            "id": "sc-S14-1",
            "title": "Klinická kazuistika – Nádory centrálního nervového systému - míšní nádory",
            "question": "<strong>Kazuistika:</strong> 62letý pacient léčený pro karcinom prostaty přichází pro 10 dní trvající kruté pásovité bolesti v hrudníku zhoršující se v noci a nově vzniklou slabost obou dolních končetin s obtížemi při chůzi do schodů. Při vyšetření: spastická paraparéza DK (síla 3/5), oboustranný pozitivní Babinski, hypestezie pro všechny modality od dermatomu Th8 distálně a retence moči.<br><br><strong>Klinický úkol:</strong> Stanovte syndromologickou diagnózu, zhodnoťte naléhavost stavu a navrhněte okamžitý diagnosticko-terapeutický algoritmus.",
            "answer": "<ul style='margin: 6px 0 0 18px; padding: 0; line-height: 1.5;'><li>Diagnóza: Akutní metastatická komprese míchy (MSCC) v úrovni Th8 při generalizovaném karcinomu prostaty se syndromem transverzální míšní léze.</li><li>Naléhavost: Absolutní neurologická a neurochirurgická urgence – riziko ireverzibilní paraplegie a sfinkterové areflexie.</li><li>Okamžitá medikace: Aplikace Dexamethasonu 16–24 mg i.v. bolus, dále 4 mg po 6 hodinách.</li><li>Zobrazovací vyšetření: Statimové celopáteřní MRI (k průkazu komprese míchy, patologické fraktury obratle a vyloučení vícečetných ložisek).</li><li>Chirurgické řešení: Urgentní neurochirurgická dekomprese páteřního kanálu (laminektomie/korpektomie) s instrumentovanou stabilizací páteře následovaná lokální radioterapií a onkologickou léčbou.</li></ul>",
            "keyPoints": [
              "Diagnóza: Akutní metastatická komprese míchy (MSCC) v úrovni Th8 při generalizovaném karcinomu prostaty se syndromem transverzální míšní léze.",
              "Naléhavost: Absolutní neurologická a neurochirurgická urgence – riziko ireverzibilní paraplegie a sfinkterové areflexie.",
              "Okamžitá medikace: Aplikace Dexamethasonu 16–24 mg i.v. bolus, dále 4 mg po 6 hodinách.",
              "Zobrazovací vyšetření: Statimové celopáteřní MRI (k průkazu komprese míchy, patologické fraktury obratle a vyloučení vícečetných ložisek).",
              "Chirurgické řešení: Urgentní neurochirurgická dekomprese páteřního kanálu (laminektomie/korpektomie) s instrumentovanou stabilizací páteře následovaná lokální radioterapií a onkologickou léčbou."
            ],
            "pearl": "Míšní nádory se dělí na epidurální (metastázy obratlů - 60 %), intradurální extramedulární (schwannomy, meningeomy - 30 %) a intramedulární (ependymom, astrocytom - 10 %)."
          }
        ]
      },
      "cards": [
        {
          "id": "fc-S14-1",
          "front": "Jaké je anatomické dělení nádorů páteřního kanálu a jaké jsou jejich nejčastější zástupci?",
          "back": "1. Epidurální (nejčastější, metastázy karcinomů a myelom), 2. Intradurální extramedulární (schwannomy, meningeomy), 3. Intramedulární (ependymom, astrocytom míchy).",
          "hint": "Speciální neurologie LF OU"
        },
        {
          "id": "fc-S14-2",
          "front": "Jaký klinický význam má akutní metastatická komprese míchy (MSCC) a jaký je okamžitý postup?",
          "back": "Jde o urgentní stav hrozící trvalou plegií a inkontinencí. Okamžitě se podává vysokodávkovaný Dexamethason (16–24 mg i.v.) k potlačení edému míchy a provádí se urgentní chirurgická dekomprese (nebo radioterapie) ideálně do 24 hodin.",
          "hint": "Speciální neurologie LF OU"
        },
        {
          "id": "fc-S14-3",
          "front": "Co charakterizuje Froinův syndrom v mozkomíšním moku u spinálního tumoru?",
          "back": "Extrémní proteinorachie (často desítky g/l), xantochromní žluté zbarvení a spontánní koagulace likvoru ve zkumavce v důsledku úplného bloku cirkulace likvoru pod úrovní nádoru.",
          "hint": "Speciální neurologie LF OU"
        }
      ],
      "quiz": [
        {
          "id": "pq-S14-1",
          "question": "Který nádor je nejčastějším primárním intramedulárním tumorem dospělých?",
          "options": [
            "Meningeom",
            "Ependymom",
            "Oligodendrogliom",
            "Metastáza melanomu"
          ],
          "correctIndex": 1,
          "explanation": "Ependymom tvoří cca 60 % všech intramedulárních nádorů dospělých (nejčastěji v cervikální míše a v oblasti conus medullaris). Je dobře ohraničený a chirurgicky resekabilní."
        },
        {
          "id": "pq-S14-2",
          "question": "Který klinický příznak je typickým časným varovným znakem extramedulárního míšního nádoru?",
          "options": [
            "Plošná hypotonie všech čtyř končetin",
            "Radikulární bolest v příslušném dermatomu s noční exacerbací v poloze vleže",
            "Masivní cerebelární ataxie",
            "Hornerův syndrom při lumbální lézi"
          ],
          "correctIndex": 1,
          "explanation": "Noční kořenová bolest vleže (způsobená venózním městnáním v páteřním kanálu a tahem za dorzální kořen při relaxaci páteře) je klasickým a časným varovným příznakem extramedulárních spinálních tumorů."
        }
      ]
    },
    {
      "id": "s15-onemocn-n-s-parkinsonsk-m-syndromem-atyp",
      "number": 15,
      "section": "specialni",
      "sectionLabel": "Speciální neurologie",
      "badgePrefix": "S15",
      "title": "Onemocnění s parkinsonským syndromem (Atypické a sekundární parkinsonismy)",
      "shortDesc": "Diferenciální diagnostika parkinsonského syndromu: neurodegenerativní atypické parkinsonismy (MSA, PSP, CBD), vaskulární parkinsonismus, polékový parkinsonismus, Wilsonova nemoc a normotenzní hydrocefalus.",
      "category": "neurodegenerace",
      "badge": "Neurodegenerativní onemocnění & Extrapyramidový systém",
      "badgeColor": "teal",
      "theory": {
        "banner": {
          "tag": "Speciální neurologie • Otázka S15",
          "title": "Onemocnění s parkinsonským syndromem (Atypické a sekundární parkinsonismy)",
          "text": "Diferenciální diagnostika parkinsonského syndromu: neurodegenerativní atypické parkinsonismy (MSA, PSP, CBD), vaskulární parkinsonismus, polékový parkinsonismus, Wilsonova nemoc a normotenzní hydrocefalus."
        },
        "sections": [
          {
            "title": "1. Definice Parkinsonského syndromu (Parkinsonismu)",
            "content": "<p><strong>Parkinsonský syndrom (parkinsonismus)</strong> je klinický syndrom definovaný přítomností <strong>bradykineze / hypokineze</strong> (zpomalení iniciace pohybu a postupné snižování amplitudy a rychlosti při opakovaných pohybech) kombinované alespoň s jedním z následujících příznaků: <strong>klidový třes (4–6 Hz)</strong>, <strong>rigidita (fenomén ozubeného kola)</strong> nebo <strong>posturální instabilita</strong>.</p>"
          },
          {
            "title": "2. Etiologická klasifikace parkinsonismu",
            "content": "<div class=\"anatomy-grid\">\n                <div class=\"grid-item\">\n                    <h4>1. Idiopatická Parkinsonova nemoc (IPN, 75–80 %)</h4>\n                    <ul>\n                        <li>Asymetrický začátek, výborná a dlouhodobá odpověď na L-DOPA.</li>\n                    </ul>\n                    <h4>2. Sekundární (symptomatické) parkinsonismy</h4>\n                    <ul>\n                        <li><strong>Polékový parkinsonismus:</strong> blokátory dopaminových $D_2$ receptorů (klasická neuroleptika – haloperidol; prokinetika – metoklopramid/Degan; blokátory Ca kanálů – flunarizin). Typicky <em>symetrický, bez klidového třesu</em>.</li>\n                        <li><strong>Vaskulární parkinsonismus („lower-body parkinsonism“):</strong> mnohočetné subkortikální lakunární infarkty, postižení zejména dolních končetin (porucha chůze, šouravá chůze o široké bázi), špatná odpověď na L-DOPA, pyramidové jevy, pseudobulbární syndrom.</li>\n                        <li><strong>Normotenzní hydrocefalus (NPH):</strong> Hakimova triáda (ataxie/apraxie chůze, demence, inkontinence).</li>\n                        <li><strong>Toxický a metabolický:</strong> Wilsonova choroba (kumulace mědi, Kayser-Fleischerův prstenec), otrava CO, manganem.</li>\n                    </ul>\n                </div>\n                <div class=\"grid-item\">\n                    <h4>3. Atypické parkinsonské syndromy (Parkinson-plus)</h4>\n                    <ul>\n                        <li><strong>Progresivní supranukleární obrna (PSP - Richardsonův syndrom):</strong> časná symetrická hypokineze, axiální rigidita v extenzi trupu, <em>časné pády dozadu</em> (v 1. roce), <strong>supranukleární paréza vertikálního pohledu (zejména směrem dolů)</strong>, pseudobulbární paralýza, retrokolis. MRI: atrofie mezencefala (<em>„hummingbird / kolibřík sign“</em>).</li>\n                        <li><strong>Multisystémová atrofie (MSA):</strong>\n                            <ul>\n                                <li><em>MSA-P (parkinsonský typ):</em> rigidně-hypokinetický syndrom nereagující na L-DOPA.</li>\n                                <li><em>MSA-C (cerebelární typ):</em> mozečková ataxie.</li>\n                                <li>Obě formy mají <strong>časnou a těžkou autonomní dysfunkci</strong> (ortostatická hypotenze, erektilní dysfunkce, močová inkontinence) a stridor. MRI: <em>„hot cross bun sign“</em> v pontu.</li>\n                            </ul>\n                        </li>\n                        <li><strong>Kortikobazální degenerace (CBD):</strong> těžká asymetrie, rigidita, apraxie končetiny, kortikální senzitivní ztráta, myoklonus a fenomén <em>„cizí ruky“ (alien limb)</em>.</li>\n                        <li><strong>Demence s Lewyho tělísky (DLB):</strong> časný rozvoj demence do 1 roku od motorických symptomů, fluktuace, zrakové halucinace.</li>\n                    </ul>\n                </div>\n            </div>"
          },
          {
            "title": "3. Varovné známky („Red Flags“) svědčící PROTI idiopatické Parkinsonově nemoci",
            "content": "<div class=\"highlight-box\">\n                <h4>Varovné známky (MDS Clinical Diagnostic Criteria)</h4>\n                <ul>\n                    <li>Rychlá progrese poruchy chůze vedoucí k upoutání na invalidní vozík do 5 let od začátku.</li>\n                    <li>Časné pády (během prvních 3 let od počátku).</li>\n                    <li>Absence odpovědi na vysoké dávky Levodopy (až 1000 mg/den).</li>\n                    <li>Časná supranukleární paréza vertikálního pohledu dolů (PSP).</li>\n                    <li>Časná těžká autonomní dysfunkce do 5 let (ortostatická hypotenze s poklesem TK > 30/15 mmHg, závažná retence/inkontinence) (MSA).</li>\n                    <li>Časný rozvoj demence během prvního roku (DLB).</li>\n                    <li>Časné bulbární příznaky (těžká dysfagie, dysartrie) v prvních 3 letech.</li>\n                    <li>Striktní symetrie postižení od samého počátku.</li>\n                </ul>\n            </div>"
          },
          {
            "title": "4. Diagnostika a Odlišení",
            "content": "<ul>\n                <li><strong>Levodopový test:</strong> jednorázové podání 200 mg L-DOPA po nočním vysazení medikace s hodnocením motorického zlepšení dle UPDRS-III (zlepšení o > 30 % svědčí pro Parkinsonovu nemoc, minimální odpověď pro atypické syndromy).</li>\n                <li><strong>MRI mozku:</strong> vyloučení vaskulárních změn, hydrocefalu, nádorů; průkaz atrofie mezencefala (PSP), atrofie pontu a mozečku (MSA), atrofie parietálního kortexu (CBD).</li>\n                <li><strong>DaTscan (SPECT transportéru dopaminu s $^{123}I\text{-ioflupanem}$):</strong> prokáže presynaptický deficit dopaminu u degenerativních forem (IPN, MSA, PSP, CBD, DLB) a odliší je od esenciálního třesu, polékového a psychogenního parkinsonismu (kde je DaTscan normální).</li>\n            </ul>"
          }
        ]
      },
      "recall": {
        "scenarios": [
          {
            "id": "sc-S15-1",
            "title": "Klinická kazuistika – Onemocnění s parkinsonským syndromem (Atypické a sekundární parkinsonismy)",
            "question": "<strong>Kazuistika:</strong> 66letý muž přichází pro rok trvající obtíže s chůzí a časté pády dozadu při vstávání z křesla. Manželka uvádí, že má ztuhlé držení těla a obtížně se dívá pod nohy při chůzi ze schodů. Při vyšetření: těžké omezení volního pohledu dolů, které lze překonat při oculocefalickém manévru (fenomén loutkových očí), symetrická axiální rigidita, žádný třes. Levodopa v dávce 800 mg/den byla bez efektu.<br><br><strong>Klinický úkol:</strong> Stanovte diagnózu, vysvětlete mechanismus poruchy pohledu a uveďte typický nález na MRI.",
            "answer": "<ul style='margin: 6px 0 0 18px; padding: 0; line-height: 1.5;'><li>Diagnóza: Progresivní supranukleární obrna (PSP - Richardsonův syndrom), atypický neurodegenerativní parkinsonský syndrom (tauopatie).</li><li>Mechanismus poruchy pohledu: Jde o supranukleární lézi – postižení premotorických jader v mezencefalu (rostrální intersticiální ncl. MLF), jádra okohybných nervů a kmenové reflexní okruhy jsou intaktní, proto je oculocefalický manévr pozitivní.</li><li>Typický nález na MRI: Selektivní atrofie tegmenta mezencefala s vyhlazením horní kontury (tzv. 'hummingbird sign' neboli příznak kolibříka v sagitální rovině a příznak Mickey Mouse v axiální rovině).</li><li>Terapeutické možnosti: Špatná odpověď na dopaminergní léčbu; terapie je převážně symptomatická, rehabilitační a logopedická (prevence pádů, pomůcky na chůzi, zahušťování stravy).</li></ul>",
            "keyPoints": [
              "Diagnóza: Progresivní supranukleární obrna (PSP - Richardsonův syndrom), atypický neurodegenerativní parkinsonský syndrom (tauopatie).",
              "Mechanismus poruchy pohledu: Jde o supranukleární lézi – postižení premotorických jader v mezencefalu (rostrální intersticiální ncl. MLF), jádra okohybných nervů a kmenové reflexní okruhy jsou intaktní, proto je oculocefalický manévr pozitivní.",
              "Typický nález na MRI: Selektivní atrofie tegmenta mezencefala s vyhlazením horní kontury (tzv. 'hummingbird sign' neboli příznak kolibříka v sagitální rovině a příznak Mickey Mouse v axiální rovině).",
              "Terapeutické možnosti: Špatná odpověď na dopaminergní léčbu; terapie je převážně symptomatická, rehabilitační a logopedická (prevence pádů, pomůcky na chůzi, zahušťování stravy)."
            ],
            "pearl": "Parkinsonský syndrom je definován bradykinezí + rigiditou, klidovým třesem nebo posturální instabilitou."
          }
        ]
      },
      "cards": [
        {
          "id": "fc-S15-1",
          "front": "Které klinické příznaky jsou klíčové pro diagnózu progresivní supranukleární obrny (PSP)?",
          "back": "Supranukleární paréza vertikálního pohledu (zejména směrem dolů), časné nevysvětlitelné pády vzad během prvního roku, axiální rigidita v extenzi trupu a absence třesu s minimální odpovědí na L-DOPA.",
          "hint": "Speciální neurologie LF OU"
        },
        {
          "id": "fc-S15-2",
          "front": "Jaké jsou dvě hlavní formy multisystémové atrofie (MSA) a jaký kardinální příznak mají společný?",
          "back": "MSA-P (převaha parkinsonského hypokineticko-rigidního syndromu) a MSA-C (převaha cerebelární ataxie). Obě formy mají společnou časnou a těžkou autonomní dysfunkci (ortostatická hypotenze, erektilní dysfunkce, močová inkontinence).",
          "hint": "Speciální neurologie LF OU"
        },
        {
          "id": "fc-S15-3",
          "front": "Které běžně užívané léky mohou vyvolat sekundární polékový parkinsonismus?",
          "back": "Klasická i atypická neuroleptika (haloperidol, risperidon), prokinetika a antiemetika blokující dopaminové receptory (metoklopramid/Degan, thiethylperazin/Torecan) a blokátory vápníkových kanálů (cinarizin, flunarizin).",
          "hint": "Speciální neurologie LF OU"
        }
      ],
      "quiz": [
        {
          "id": "pq-S15-1",
          "question": "Fenomén 'cizí ruky' (alien limb), výrazně asymetrická rigidita, apraxie a kortikální myoklonus jsou typické pro:",
          "options": [
            "Multisystémovou atrofii (MSA)",
            "Kortikobazální degeneraci (CBD)",
            "Idiopatickou Parkinsonovu nemoc",
            "Esenciální třes"
          ],
          "correctIndex": 1,
          "explanation": "Kortikobazální degenerace (CBD) je charakterizována těžkou asymetrií, apraxií jedné končetiny, fenoménem 'cizí ruky' (končetina vykonává mimovolní komplexní pohyby) a kortikálním senzitivním výpadkem."
        },
        {
          "id": "pq-S15-2",
          "question": "Které vyšetření dokáže spolehlivě odlišit idiopatickou Parkinsonovu nemoc od polékového parkinsonismu nebo esenciálního třesu?",
          "options": [
            "Nekontrastní CT mozku",
            "DaTscan (SPECT s 123I-ioflupanem)",
            "Elektroencefalografie (EEG)",
            "Lumbální punkce s vyšetřením bílkoviny"
          ],
          "correctIndex": 1,
          "explanation": "DaTscan zobrazuje denzitu presynaptických dopaminových transportérů ve striatu. U Parkinsonovy nemoci a degenerativních parkinsonismů je vazba výrazně snížena, zatímco u polékového parkinsonismu a esenciálního třesu je presynaptický transportér intaktní a nález normální."
        }
      ]
    },
    {
      "id": "s16-parkinsonova-nemoc",
      "number": 16,
      "section": "specialni",
      "sectionLabel": "Speciální neurologie",
      "badgePrefix": "S16",
      "title": "Parkinsonova nemoc",
      "shortDesc": "Parkinsonova nemoc (PN): etiopatogeneze (substantia nigra, Lewyho tělíska, alfa-synuklein), motorická tetráda, nemotorické symptomy, farmakoterapie (Levodopa, agonisté DA, COMT/MAO-B inhibitory), pozdní hybné komplikace a pokročilá léčba (DBS, Duodopa, Apomorfin).",
      "category": "neurodegenerace",
      "badge": "Neurodegenerativní onemocnění & Extrapyramidový systém",
      "badgeColor": "teal",
      "theory": {
        "banner": {
          "tag": "Speciální neurologie • Otázka S16",
          "title": "Parkinsonova nemoc",
          "text": "Parkinsonova nemoc (PN): etiopatogeneze (substantia nigra, Lewyho tělíska, alfa-synuklein), motorická tetráda, nemotorické symptomy, farmakoterapie (Levodopa, agonisté DA, COMT/MAO-B inhibitory), pozdní hybné komplikace a pokročilá léčba (DBS, Duodopa, Apomorfin)."
        },
        "sections": [
          {
            "title": "1. Úvod a Epidemiologie",
            "content": "<p><strong>Parkinsonova nemoc (PN)</strong> je chronické progredující neurodegenerativní onemocnění extrapyramidového systému. Je druhou nejčastější neurodegenerací (po Alzheimerově nemoci) s prevalencí cca 1–2 % v populaci nad 65 let. Typický věk manifestace je 55–65 let.</p>"
          },
          {
            "title": "2. Etiopatogeneze a Neuropatologie",
            "content": "<ul>\n                <li><strong>Selektivní zánik dopaminergních neuronů:</strong> dochází k degeneraci pigmentovaných neuronů v <strong>substantia nigra pars compacta (SNpc)</strong> a v jejich nigrostriatálních projekcích do striata (putamen, ncl. caudatus).</li>\n                <li><strong>Práh klinické manifestace:</strong> motorické symptomy se objevují až po zániku <strong>60–80 % dopaminergních neuronů</strong> substantia nigra!</li>\n                <li><strong>Histopatologický korelát:</strong> <strong>Lewyho tělíska</strong> – intracelulární eozinofilní inkluze tvořené agregovaným a patologicky složeným proteinem <strong>alfa-synukleinem</strong> (onemocnění patří mezi <em>synukleinopatie</em>).</li>\n                <li><strong>Braakovo stagingové schéma:</strong> patologie začíná v ncl. dorsalis n. vagi a v bulbus olfactorius (premotorická fáze), postupuje přes mozkový kmen (SNpc – motorická fáze) až do mozkové kůry (kognitivní dysfunkce).</li>\n            </ul>"
          },
          {
            "title": "3. Klinický obraz",
            "content": "<div class=\"anatomy-grid\">\n                <div class=\"grid-item\">\n                    <h4>Kardinální motorické příznaky (TRAP)</h4>\n                    <ul>\n                        <li><strong>T - Tremor (klidový třes, 4–6 Hz):</strong> typicky asymetrický, charakteru „počítání peněz“ / „balení pilulek“, mizí při volním pohybu a ve spánku, zhoršuje se při stresu a chůzi.</li>\n                        <li><strong>R - Rigidita:</strong> zvýšený svalový tonus sfenoménem <em>ozubeného kola (Negroův příznak)</em>, rovnoměrný odpor v celém rozsahu pohybu (plastická/vosková rigidita).</li>\n                        <li><strong>A - Akineze / Bradykineze / Hypokineze:</strong> zpomalení pohybů, mikrografie (zmenšující se písmo), hypomimie (maskovitý obličej), snížená frekvence mrkání, hypofonie, dysfagie.</li>\n                        <li><strong>P - Posturální instabilita:</strong> porucha posturálních reflexů (pozitivní test postrčení / pull-test), propulze, retropulze, šouravá chůze o úzké bázi s vymizením synkinéz horních končetin (asociovaných pohybů), freezing (zamrznutí chůze).</li>\n                    </ul>\n                </div>\n                <div class=\"grid-item\">\n                    <h4>Nemotorické příznaky (často předcházejí o 5–15 let!)</h4>\n                    <ul>\n                        <li><strong>Poruchy spánku:</strong> <em>RBD (REM Sleep Behavior Disorder)</em> – porucha chování v REM spánku (živé děsivé sny, vykřikování, mlácení rukama/nohama kvůli ztrátě svalové atonie).</li>\n                        <li><strong>Senzorické:</strong> hyposmie / anosmie (časná ztráta čichu u > 90 % pacientů), bolesti ramen a zad.</li>\n                        <li><strong>Autonomní dysfunkce:</strong> těžká obstipace, urgentní mikce a nykturie, ortostatická hypotenze, seboroická dermatitida („olejovitý obličej“).</li>\n                        <li><strong>Neuropsychiatrické:</strong> deprese, anhedonie, anxieta, apatie, v pozdních stádiích zrakové halucinace a <em>parkinsonská demence (PDD)</em>.</li>\n                    </ul>\n                </div>\n            </div>"
          },
          {
            "title": "4. Farmakoterapie Parkinsonovy nemoci",
            "content": "<ol>\n                <li><strong>Levodopa (L-DOPA):</strong>\n                    <ul>\n                        <li>Zlatý standard a nejúčinnější antiparkinsonikum. Prekurzor dopaminu, který prochází hematoencefalickou bariérou.</li>\n                        <li>Vždy se kombinuje s periferním inhibitorem DOPA-dekarboxylázy (<strong>Karbidopa</strong> v preparátu Nakom/Sinemet nebo <strong>Benserazid</strong> v preparátu Madopar), aby se zabránilo periferní přeměně na dopamin a nežádoucím účinkům (nauzea, zvracení, arytmie).</li>\n                    </ul>\n                </li>\n                <li><strong>Agonisté dopaminových receptorů (D2/D3):</strong>\n                    <ul>\n                        <li><strong>Pramipexol, Ropinirol, Rotigotin</strong> (transdermální náplast).</li>\n                        <li>Volba první linie u mladších pacientů (< 65–70 let) pro oddálení motorických komplikací L-DOPA.</li>\n                        <li><em>Riziko nežádoucích účinků:</em> poruchy kontroly impulzů (patologické hráčství/gambling, hypersexualita, záchvatovité nakupování/přejídání), denní spavost (sleep attacks).</li>\n                    </ul>\n                </li>\n                <li><strong>Inhibitory COMT (katechol-O-metyltransferázy):</strong> <strong>Entakapon, Opikapon</strong> – prodlužují biologický poločas Levodopy inhibicí její biodegradace, podávají se v kombinaci s L-DOPA při výskytu „wearing-off“ fluktuací.</li>\n                <li><strong>Inhibitory MAO-B:</strong> <strong>Rasagilin, Selegilin, Safinamid</strong> – blokují centrální odbourávání dopaminu.</li>\n                <li><strong>Amantadin:</strong> antagonista NMDA receptorů, lék volby pro potlačení L-DOPA indukovaných dyskinezí.</li>\n            </ol>"
          },
          {
            "title": "5. Pozdní hybné komplikace a Pokročilá léčba",
            "content": "<p>Po 3–5 letech léčby Levodopou dochází v důsledku pulzativní stimulace receptorů k rozvoji <strong>motorických fluktuací</strong> (fenomén <em>„wearing-off“</em> – zkracování účinku dávky, stavy <em>„ON-OFF“</em> – nepředvídatelné střídání dobré hybnosti a těžké ztuhlosti) a <strong>dyskinezí</strong> (mimovolní choreatické/dystonické kroutivé pohyby na vrcholu dávky L-DOPA – <em>peak-dose dyskinesias</em>).</p>\n\n            <div class=\"highlight-box\">\n                <h4>Léčebné metody pokročilé Parkinsonovy nemoci (Device-aided therapies)</h4>\n                <ul>\n                    <li><strong>Hluboká mozková stimulace (DBS - Deep Brain Stimulation):</strong> implantace elektrod do <em>subthalamického jádra (STN)</em> nebo <em>globus pallidus internus (GPi)</em>. Indikována u pacientů s těžkými motorickými fluktuacemi a dyskinezemi, kteří mají zachovalou kognici a dobrou odpověď na L-DOPA.</li>\n                    <li><strong>Kontinuální intestinální infuze Levodopy/Karbidopy (LCIG - Duodopa):</strong> podávání gelu perkutánní endoskopickou gastrostomií s jejunální kanylou (PEG-J) přímo do jejuna pumpou. Zajišťuje stabilní plazmatickou hladinu.</li>\n                    <li><strong>Kontinuální subkutánní infuze Apomorfinu:</strong> silný dopaminový agonista podávaný subkutánní pumpou.</li>\n                </ul>\n            </div>"
          }
        ]
      },
      "recall": {
        "scenarios": [
          {
            "id": "sc-S16-1",
            "title": "Klinická kazuistika – Parkinsonova nemoc",
            "question": "<strong>Kazuistika:</strong> 61letý učitel přichází pro rok trvající třes pravé ruky v klidu, který mizí při psaní na tabuli, a pocit ztuhlosti pravého ramene. Písmo má postupně menší a hůře čitelné. Při vyšetření: asymetrický klidový třes PDK (4–5 Hz), fenomén ozubeného kola na pravém zápěstí, hypomimie v obličeji a zkrácení kroku vpravo s chyběním souhybu pravé paže při chůzi.<br><br><strong>Klinický úkol:</strong> Stanovte diagnózu, zhodnoťte klinické stadium a navrhněte iniciální farmakoterapii s ohledem na věk pacienta.",
            "answer": "<ul style='margin: 6px 0 0 18px; padding: 0; line-height: 1.5;'><li>Diagnóza: Idiopatická Parkinsonova nemoc (počáteční asymetrické stádium Hoehn-Yahr 1).</li><li>Klinické známky: Typická triáda – klidový třes, rigidita s fenoménem ozubeného kola, hypokineze/mikrografie s asymetrickým začátkem na dominantní končetině.</li><li>Iniciální léčba u 61letého pacienta: Vzhledem k věku < 65 let a zachovalé kognici je vhodnou volbou agonista dopaminových receptorů (např. Pramipexol nebo Ropinirol v pomalu titrované dávce) nebo inhibitor MAO-B (Rasagilin 1 mg denně) k oddálení pozdních hybných komplikací.</li><li>Alternativa: Při výrazném funkčním omezení časné nasazení nízké dávky Levodopy s inhibitorem dekarboxylázy (např. Madopar / Nakom).</li><li>Edukace a varování: Poučit pacienta o riziku náhlého usnutí (sleep attacks) a poruch kontroly impulzů (patologické hráčství, hypersexualita, záchvatovité nakupování) při léčbě dopaminovými agonisty.</li></ul>",
            "keyPoints": [
              "Diagnóza: Idiopatická Parkinsonova nemoc (počáteční asymetrické stádium Hoehn-Yahr 1).",
              "Klinické známky: Typická triáda – klidový třes, rigidita s fenoménem ozubeného kola, hypokineze/mikrografie s asymetrickým začátkem na dominantní končetině.",
              "Iniciální léčba u 61letého pacienta: Vzhledem k věku < 65 let a zachovalé kognici je vhodnou volbou agonista dopaminových receptorů (např. Pramipexol nebo Ropinirol v pomalu titrované dávce) nebo inhibitor MAO-B (Rasagilin 1 mg denně) k oddálení pozdních hybných komplikací.",
              "Alternativa: Při výrazném funkčním omezení časné nasazení nízké dávky Levodopy s inhibitorem dekarboxylázy (např. Madopar / Nakom).",
              "Edukace a varování: Poučit pacienta o riziku náhlého usnutí (sleep attacks) a poruch kontroly impulzů (patologické hráčství, hypersexualita, záchvatovité nakupování) při léčbě dopaminovými agonisty."
            ],
            "pearl": "PN je synukleinopatie s Lewyho tělísky a zánikem dopaminergních neuronů v substantia nigra pars compacta."
          }
        ]
      },
      "cards": [
        {
          "id": "fc-S16-1",
          "front": "Proč se Levodopa v terapii Parkinsonovy nemoci musí vždy podávat v kombinaci s inhibitorem DOPA-dekarboxylázy (např. karbidopou nebo benserazidem)?",
          "back": "Inhibitor DOPA-dekarboxylázy neprochází hematoencefalickou bariérou a blokuje periferní přeměnu Levodopy na dopamin v těle. Tím umožní její průnik do mozku a zabrání periferním nežádoucím účinkům dopaminu (těžká nauzea, zvracení, arytmie, hypotenze).",
          "hint": "Speciální neurologie LF OU"
        },
        {
          "id": "fc-S16-2",
          "front": "Která porucha spánku je považována za vysoce specifický časný premotorický marker Parkinsonovy nemoci?",
          "back": "Porucha chování v REM spánku (RBD - REM Sleep Behavior Disorder), charakterizovaná vymizením svalové atonie v REM fázi a 'přehráváním' akčních a agresivních snů (křik, záškuby, údery).",
          "hint": "Speciální neurologie LF OU"
        },
        {
          "id": "fc-S16-3",
          "front": "Do kterých mozkových struktur se nejčastěji zavádějí stimulační elektrody při hluboké mozkové stimulaci (DBS) u pacientů s pokročilou Parkinsonovou nemocí?",
          "back": "Nejčastějším cílem je nucleus subthalamicus (STN), alternativně globus pallidus internus (GPi).",
          "hint": "Speciální neurologie LF OU"
        }
      ],
      "quiz": [
        {
          "id": "pq-S16-1",
          "question": "Který z následujících patofyziologických procesů je podstatou idiopatické Parkinsonovy nemoci?",
          "options": [
            "Demyelinizace pyramidových drah v míše",
            "Selektivní zánik dopaminergních neuronů v substantia nigra pars compacta s přítomností Lewyho tělísek",
            "Kumulace mědi v bazálních gangliích",
            "Expanze CAG tripletů v huntingtinu"
          ],
          "correctIndex": 1,
          "explanation": "Parkinsonova nemoc je charakterizována progresivní degenerací dopaminergních neuronů v substantia nigra pars compacta s akumulací alfa-synukleinu v podobě intracelulárních Lewyho tělísek."
        },
        {
          "id": "pq-S16-2",
          "question": "Které antiparkinsonikum je lékem volby pro potlačení L-DOPA indukovaných dyskinezí?",
          "options": [
            "Haloperidol",
            "Amantadin",
            "Metoklopramid",
            "Baklofen"
          ],
          "correctIndex": 1,
          "explanation": "Amantadin (antagonista NMDA receptorů a nepřímé dopaminomimetikum) je jediným lékem s prokázanou účinností na redukci mimovolních pohybů a dyskinezí vyvolaných dlouhodobou léčbou Levodopou."
        }
      ]
    },
    {
      "id": "s17-onemocn-n-s-choreatick-m-syndromem",
      "number": 17,
      "section": "specialni",
      "sectionLabel": "Speciální neurologie",
      "badgePrefix": "S17",
      "title": "Onemocnění s choreatickým syndromem",
      "shortDesc": "Chorea a hyperkinetické extrapyramidové syndromy: Huntingtonova nemoc (genetika, huntingtin, atrofie ncl. caudatus, klinická triáda), Sydenhamova chorea minor, polékové tardivní dyskineze a vaskulární hemibalismus.",
      "category": "neurodegenerace",
      "badge": "Neurodegenerativní onemocnění & Extrapyramidový systém",
      "badgeColor": "teal",
      "theory": {
        "banner": {
          "tag": "Speciální neurologie • Otázka S17",
          "title": "Onemocnění s choreatickým syndromem",
          "text": "Chorea a hyperkinetické extrapyramidové syndromy: Huntingtonova nemoc (genetika, huntingtin, atrofie ncl. caudatus, klinická triáda), Sydenhamova chorea minor, polékové tardivní dyskineze a vaskulární hemibalismus."
        },
        "sections": [
          {
            "title": "1. Definice Chorey a Hyperkinezí",
            "content": "<p><strong>Chorea</strong> (z řeckého <em>choreia</em> = tanec) je hyperkinetická porucha hybnosti charakterizovaná <strong>rychlými, nepravidelnými, náhlými, trhavými, nerytmickými a nepředvídatelnými mimovolními pohyby</strong>, které stěhovavě postihují různé svalové skupiny (obličej, trup, končetiny). Pacienti se tyto pohyby často snaží maskovat do zdánlivě účelných pohybů (parakineze).</p>\n\n            <div class=\"highlight-box\">\n                <h4>Příbuzné hyperkinetické syndromy</h4>\n                <ul>\n                    <li><strong>Atetóza:</strong> pomalé, kroutivé, červovité mimovolní pohyby postihující zejména akrální části končetin (prsty, ruka). Často se kombinuje s choreou (<em>choreoatetóza</em>).</li>\n                    <li><strong>Balismus (Hemibalismus):</strong> hrubé, prudké, velkoamplitudové házivé mimovolní pohyby proximálních částí končetin (rameno, kyčel). Nejčastěji jednostranný (<em>hemibalismus</em>) po akutní cévní ischemii/hemoragii v <strong>nucleus subthalamicus Luysi</strong>.</li>\n                </ul>\n            </div>"
          },
          {
            "title": "2. Huntingtonova nemoc (Huntington's Disease - HD)",
            "content": "<ul>\n                <li><strong>Genetika:</strong> autozomálně dominantní (AD) dědičnost s úplnou penetrancí a fenoménem <strong>anticipace</strong> (těžší a časnější průběh v dalších generacích, zejména při přenosu od otce). Způsobena expanzí <strong>CAG trinukleotidových repetic</strong> v genu pro <em>huntingtin (HTT)</em> na krátkém raménku 4. chromozomu (4p16.3).\n                    <ul>\n                        <li>Normální počet repetic: $\\le 26$.</li>\n                        <li>Plná penetrance: <strong>$\\ge 36\text{–}40$ CAG repetic</strong>.</li>\n                    </ul>\n                </li>\n                <li><strong>Neuropatologie:</strong> masivní zánik GABA-ergních a cholinergních neuronů ve striatu s <strong>těžkou atrofií caput nuclei caudati</strong> a putamen $\to$ dilatace frontálních rohů postranních komor (na MRI obraz „motýlích křídel“).</li>\n                <li><strong>Klinická triáda Huntingtonovy nemoci:</strong>\n                    <ol>\n                        <li><em>1. Poruchy hybnosti:</em> zpočátku motorický neklid, grimasování, záškuby prstů, porucha sakadických očních pohybů, v plném rozvoji generalizovaná těžká chorea, neschopnost udržet vyplazený jazyk (<em>„příznak jazyka jako ještěrka / chameleon“</em>), motorická impersistence (neschopnost udržet sevřenou pěst - <em>„milkmaid's grip“</em>). V pozdním stádiu chorea mizí a nastupuje rigidita, dystonie a těžká dysfagie.</li>\n                        <li><em>2. Kognitivní deficit a subkortikální demence:</em> zpomalení psychomotorického tempa, exekutivní dysfunkce, ztráta flexibility myšlení, perseverace, v konečném stadiu hluboká demence.</li>\n                        <li><em>3. Psychiatrické a behaviorální změny (často předcházejí motoriku!):</em> deprese, agresivita, apatie, dezinhibice, psychotické epizody, extrémně vysoké riziko <strong>suicidia</strong> (až 4–5x vyšší než v běžné populaci).</li>\n                    </ol>\n                </li>\n                <li><strong>Westphalova varianta:</strong> juvenilní forma HD (< 20 let věku, často > 60 CAG repetic), kde nevidíme choreu, ale rigidně-akinetický syndrom, epilepsii a těžkou demenci.</li>\n            </ul>"
          },
          {
            "title": "3. Ostatní příčiny choreatických syndromů",
            "content": "<table class=\"data-table\">\n                <thead>\n                    <tr>\n                        <th>Typ chorey</th>\n                        <th>Etiologie a charakteristika</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr>\n                        <td><strong>Sydenhamova chorea (Chorea minor / Tanec sv. Víta)</strong></td>\n                        <td>Poststreptokoková autoimunitní komplikace po infekci <em>Streptococcus pyogenes</em> (součást revmatické horečky). Postihuje děti (častěji dívky 5–15 let), zkřížená protilátková reakce proti bazálním gangliím. Léčba: penicilin, kortikoidy, valproát.</td>\n                    </tr>\n                    <tr>\n                        <td><strong>Polékové tardivní dyskineze a chorea</strong></td>\n                        <td>Vzniká po dlouhodobém užívání blokátorů dopaminových receptorů (klasická neuroleptika). Typická <em>orofaciální dyskineze</em> (pohyby rtů, jazyka, žvýkací pohyby). Léčba: vysazení/převod na klozapin/kvetiapin, inhibitory VMAT2 (tetrabenazin, deutetrabenazin).</td>\n                    </tr>\n                    <tr>\n                        <td><strong>Chorea gravidarum</strong></td>\n                        <td>Akutní choreatické ataky u těhotných žen (často u žen s anamnézou revmatické horečky nebo antifosfolipidového syndromu).</td>\n                    </tr>\n                    <tr>\n                        <td><strong>Vaskulární a metabolická</strong></td>\n                        <td>Non-ketotická hyperglykemická chorea (při těžké dekompenzaci diabetu s hyperosmolalitou), SLE, antifosfolipidový syndrom, polycythemia vera.</td>\n                    </tr>\n                </tbody>\n            </table>"
          },
          {
            "title": "4. Léčba chorey",
            "content": "<ul>\n                <li><strong>Symptomatické tlumení hyperkinezí:</strong>\n                    <ul>\n                        <li><strong>Inhibitory vezikulárního monoaminového transportéru 2 (VMAT2):</strong> <strong>Tetrabenazin</strong> (snižuje zásoby dopaminu v presynaptických vezikulách, lék volby pro choreu u HD; pozor na nežádoucí depresi a suicidální tendence!).</li>\n                        <li><strong>Atypická neuroleptika:</strong> Tiaprid, Olanzapin, Risperidon, Kvetiapin (blokáda postsynaptických $D_2$ receptorů).</li>\n                    </ul>\n                </li>\n                <li>Kauzální léčba Huntingtonovy nemoci dosud neexistuje; probíhají klinické studie s antisense oligonukleotidy (ASO) tlumícími expresi huntingtinu.</li>\n            </ul>"
          }
        ]
      },
      "recall": {
        "scenarios": [
          {
            "id": "sc-S17-1",
            "title": "Klinická kazuistika – Onemocnění s choreatickým syndromem",
            "question": "<strong>Kazuistika:</strong> 38letý muž je odeslán praktickým lékařem pro změny chování, výbuchy vzteku, těžkou depresi v posledních dvou letech a nově pozorovaný neklid prstů a záškuby v obličeji, které maskuje uhlazováním vlasů. Při vyšetření nedokáže udržet vyplazený jazyk déle než 3 sekundy. Pacientův otec zemřel v ústavu sociální péče v 52 letech s diagnózou demence a poruchy chůze.<br><br><strong>Klinický úkol:</strong> Stanovte suspektní diagnózu, popište dědičnost s fenoménem anticipace a navrhněte diagnostický a symptomatický postup.",
            "answer": "<ul style='margin: 6px 0 0 18px; padding: 0; line-height: 1.5;'><li>Suspektní diagnóza: Huntingtonova nemoc (HD) – pozitivní rodinná anamnéza, časné psychiatrické a behaviorální změny, choreatické hyperkineze a motorická impersistence (jazyk).</li><li>Genetika a dědičnost: Autozomálně dominantní onemocnění (CAG expanze na 4p16.3). Fenomén anticipace vysvětluje dřívější nástup příznaků u syna (38 let) oproti otci (52 let) v důsledku nestability a zmnožení CAG repetic při spermatogenezi.</li><li>Potvrzení diagnózy: Genetické vyšetření DNA z periferní krve (po řádném genetickém a psychologickém poradenství) s kvantifikací počtu CAG repetic.</li><li>Zobrazovací vyšetření: MRI mozku k průkazu atrofie caput nuclei caudati.</li><li>Symptomatická léčba a péče: Tlumení chorey inhibitorem VMAT2 (Tetrabenazin) nebo Tiapridem, antidepresivní léčba (SSRI), přísná monitorace a prevence suicidálního chování.</li></ul>",
            "keyPoints": [
              "Suspektní diagnóza: Huntingtonova nemoc (HD) – pozitivní rodinná anamnéza, časné psychiatrické a behaviorální změny, choreatické hyperkineze a motorická impersistence (jazyk).",
              "Genetika a dědičnost: Autozomálně dominantní onemocnění (CAG expanze na 4p16.3). Fenomén anticipace vysvětluje dřívější nástup příznaků u syna (38 let) oproti otci (52 let) v důsledku nestability a zmnožení CAG repetic při spermatogenezi.",
              "Potvrzení diagnózy: Genetické vyšetření DNA z periferní krve (po řádném genetickém a psychologickém poradenství) s kvantifikací počtu CAG repetic.",
              "Zobrazovací vyšetření: MRI mozku k průkazu atrofie caput nuclei caudati.",
              "Symptomatická léčba a péče: Tlumení chorey inhibitorem VMAT2 (Tetrabenazin) nebo Tiapridem, antidepresivní léčba (SSRI), přísná monitorace a prevence suicidálního chování."
            ],
            "pearl": "Chorea je mimovolní, rychlý, nerytmický a stěhovavý pohyb."
          }
        ]
      },
      "cards": [
        {
          "id": "fc-S17-1",
          "front": "Jaká je genetická podstata a dědičnost Huntingtonovy nemoci?",
          "back": "Autozomálně dominantní dědičnost s plnou penetrancí a anticipací. Je způsobena dynamickou expanzí trinukleotidu CAG (≥ 36–40 repetic) v genu pro huntingtin (HTT) na 4. chromozomu.",
          "hint": "Speciální neurologie LF OU"
        },
        {
          "id": "fc-S17-2",
          "front": "Která mozková struktura podléhá u Huntingtonovy nemoci nejčasnější a nejvýraznější atrofii viditelné na MRI mozku?",
          "back": "Hlava ocasatého jádra (caput nuclei caudati) a putamen ve striatu, což na MRI vede k typickému rozšíření čelních rohů postranních mozkových komor.",
          "hint": "Speciální neurologie LF OU"
        },
        {
          "id": "fc-S17-3",
          "front": "Poškození které anatomické struktury vede k rozvoji hemibalismu (prudkých házivých pohybů končetin)?",
          "back": "Nucleus subthalamicus Luysi (subthalamické jádro), nejčastěji na podkladě akutního lakunárního ischemického infarktu nebo drobného krvácení.",
          "hint": "Speciální neurologie LF OU"
        }
      ],
      "quiz": [
        {
          "id": "pq-S17-1",
          "question": "Který lék ze skupiny inhibitorů VMAT2 je registrován a specificky indikován pro symptomatickou léčbu chorey u Huntingtonovy nemoci?",
          "options": [
            "Levodopa",
            "Tetrabenazin",
            "Donepezil",
            "Riluzol"
          ],
          "correctIndex": 1,
          "explanation": "Tetrabenazin je reverzibilní inhibitor vezikulárního monoaminového transportéru typu 2 (VMAT2), který snižuje dostupnost dopaminu v presynaptických vezikulách bazálních ganglií a efektivně tlumí choreatické dyskineze."
        },
        {
          "id": "pq-S17-2",
          "question": "Sydenhamova chorea (Chorea minor) vzniká jako pozdní autoimunitní následek infekce kterým patogenem?",
          "options": [
            "Borrelia burgdorferi",
            "Streptococcus pyogenes (skupina A)",
            "Treponema pallidum",
            "Virus Epstein-Barrové"
          ],
          "correctIndex": 1,
          "explanation": "Sydenhamova chorea je projevem revmatické horečky po streptokokové faryngitidě způsobené Streptococcus pyogenes skupiny A na podkladě molekulárních mimikry a tvorby autoprotilátek proti neuronům bazálních ganglií."
        }
      ]
    },
    {
      "id": "s18-demence-a-alzheimerova-nemoc",
      "number": 18,
      "section": "specialni",
      "sectionLabel": "Speciální neurologie",
      "badgePrefix": "S18",
      "title": "Demence a Alzheimerova nemoc",
      "shortDesc": "Syndrom demence, mírná kognitivní porucha (MCI), diagnostické škály (MMSE, MoCA); Alzheimerova nemoc (AN - etiopatogeneze, beta-amyloid, tau protein, atrofie hipokampů dle Scheltense, likvorové biomarkery, kognitiva - AChEI a Memantin).",
      "category": "neurodegenerace",
      "badge": "Neurodegenerativní onemocnění & Kognitivní poruchy",
      "badgeColor": "teal",
      "theory": {
        "banner": {
          "tag": "Speciální neurologie • Otázka S18",
          "title": "Demence a Alzheimerova nemoc",
          "text": "Syndrom demence, mírná kognitivní porucha (MCI), diagnostické škály (MMSE, MoCA); Alzheimerova nemoc (AN - etiopatogeneze, beta-amyloid, tau protein, atrofie hipokampů dle Scheltense, likvorové biomarkery, kognitiva - AChEI a Memantin)."
        },
        "sections": [
          {
            "title": "1. Syndrom demence a Mírná kognitivní porucha",
            "content": "<p><strong>Syndrom demence</strong> je získaný chronický nebo progresivní úbytek kognitivních funkcí (paměť, myšlení, orientace, porozumění, řeč, exekutiva, úsudek) natolik závažný, že <strong>narušuje běžné denní aktivity a soběstačnost pacienta (ADL - Activities of Daily Living)</strong>. Vědomí je přitom zpočátku plně bdělé (odlišení od deliria!).</p>\n\n            <div class=\"highlight-box\">\n                <h4>Mírná kognitivní porucha (MCI - Mild Cognitive Impairment)</h4>\n                <p>Objektivně prokázaný pokles kognitivních funkcí (odchylka > 1,5 SD pod věkovou normu), který však <strong>ještě neomezuje soběstačnost a denní fungování</strong> pacienta. Amnestická forma MCI progreduje do Alzheimerovy demence rychlostí cca 10–15 % ročně.</p>\n            </div>"
          },
          {
            "title": "2. Alzheimerova nemoc (AN / Alzheimer's Disease - AD)",
            "content": "<p>Alzheimerova nemoc je nejčastější příčinou demence, která tvoří <strong>60–70 % všech případů demence</strong> ve vyšším věku. Prevalence stoupá exponenciálně s věkem (cca 1 % v 65 letech, > 30 % nad 85 let).</p>"
          },
          {
            "title": "3. Etiopatogeneze a Neuropatologie AN",
            "content": "<div class=\"anatomy-grid\">\n                <div class=\"grid-item\">\n                    <h4>Amyloidová kaskáda a Senilní plaky</h4>\n                    <ul>\n                        <li>Patologické štěpení transmembránového amyloidového prekurzorového proteinu (APP) beta- a gama-sekretázou $\to$ tvorba neurotoxických oligomerů a nerozpustného <strong>$\beta$-amyloidu ($A\beta_{42}$)</strong>.</li>\n                        <li>Extracelulární depozice tvoří <strong>senilní (amyloidové) plaky</strong> $\to$ vyvolávají lokální zánět, aktivaci mikroglií, synaptické poškození a zánik neuronů.</li>\n                    </ul>\n                </div>\n                <div class=\"grid-item\">\n                    <h4>Tauopatie a Neurofibrilární klubka</h4>\n                    <ul>\n                        <li>Hyperfosforylace mikrotubulárního <strong>tau proteinu (p-tau)</strong> $\to$ rozpad mikrotubulárního cytoskeletu a narušení axonálního transportu.</li>\n                        <li>Intracelulární agregace tvoří <strong>neurofibrilární klubka (NFT - Neurofibrillary Tangles)</strong>.</li>\n                        <li>Míra depozice tau proteinu v neokortexu těsně koreluje s tíží klinické demence.</li>\n                        <li><strong>Cholinergní deficit:</strong> časný zánik cholinergních projekcí z <em>nucleus basalis Meynerti</em>.</li>\n                    </ul>\n                </div>\n            </div>"
          },
          {
            "title": "4. Klinický obraz Alzheimerovy nemoci",
            "content": "<ul>\n                <li><strong>1. Časné stádium:</strong>\n                    <ul>\n                        <li>Dominantní postižení <strong>novopaměti a epizodické paměti</strong> (pacient se opakovaně ptá na totéž, zapomíná nedávné události, domluvené schůzky; staropaměť je dlouho zachována).</li>\n                        <li>Prostorová dezorientace v novém prostředí, anomie (obtížné hledání správných slov, chudnutí slovní zásoby).</li>\n                    </ul>\n                </li>\n                <li><strong>2. Střední stádium:</strong>\n                    <ul>\n                        <li>Progrese amnézie i na staropaměť, časová i prostorová dezorientace ve známém prostředí (ztrácení se venku).</li>\n                        <li><strong>Kortikální syndrom (4A):</strong> <em>Amnézie</em>, <em>Afázie</em> (transkortikální senzorická / anomická), <em>Apraxie</em> (ideomotorická, neschopnost oblékat se, používat příbor), <em>Agnózie</em> (nepoznávání tváří – prozopagnózie, nepoznávání předmětů).</li>\n                        <li>Behaviorální a psychologické symptomy demence (BPSD): bludy z okradení / nevěry, noční neklid, toulání (wandering).</li>\n                    </ul>\n                </li>\n                <li><strong>3. Pozdní stádium:</strong>\n                    <ul>\n                        <li>Úplná ztráta řeči (mutismus), nepoznávání nejbližších příbuzných, inkontinence moči a stolice, imobilizace a kontraktury na lůžku, kachexie.</li>\n                    </ul>\n                </li>\n            </ul>"
          },
          {
            "title": "5. Diagnostika Alzheimerovy nemoci",
            "content": "<ol>\n                <li><strong>Screeningové kognitivní testy:</strong>\n                    <ul>\n                        <li><strong>MMSE (Mini-Mental State Examination, max. 30 b.):</strong> norma 27–30 b., lehká demence 20–26 b., střední 10–19 b., těžká < 10 b. Málo citlivý k časným stádiím (MCI).</li>\n                        <li><strong>MoCA (Montreal Cognitive Assessment, max. 30 b.):</strong> vysoce senzitivní pro záchyt mírné kognitivní poruchy (MCI) a exekutivních dysfunkcí (norma ≥ 26 b.).</li>\n                        <li><strong>Test kreslení hodin (Clock Drawing Test):</strong> rychlý test prostorové orientace, exekutivy a vizuokonstrukce.</li>\n                    </ul>\n                </li>\n                <li><strong>Strukturální zobrazení mozku (MRI mozku):</strong>\n                    <ul>\n                        <li>Vyloučení sekundárních léčitelných demencí (subdurální hematom, tumor, normotenzní hydrocefalus).</li>\n                        <li>Průkaz <strong>atrofie mediálního temporálního laloku a hipokampů</strong> (hodnoceno dle <em>Scheltensovy škály MTA 0–4</em>; MTA ≥ 2 je patologické).</li>\n                    </ul>\n                </li>\n                <li><strong>Likvorové biomarkery (Alzheimerovský triplet):</strong>\n                    <ul>\n                        <li><strong>Snížený $\beta$-amyloid ($A\beta_{42}$):</strong> vychytává se do amyloidových plaků v mozku, proto klesá v likvoru.</li>\n                        <li><strong>Zvýšený celkový tau protein (t-tau):</strong> marker intenzity neuronální destrukce.</li>\n                        <li><strong>Zvýšený fosforylovaný tau protein (p-tau):</strong> vysoce specifický marker tauopatie a tvorby klubek.</li>\n                    </ul>\n                </li>\n                <li><strong>Funkční zobrazení (PET):</strong> Amyloid-PET (průkaz depozit amyloidu v kůře), $^{18}F\text{-FDG-PET}$ (temporoparietální hypometabolismus).</li>\n            </ol>"
          },
          {
            "title": "6. Léčba Alzheimerovy nemoci",
            "content": "<ul>\n                <li><strong>Inhibitory acetylcholinesterázy (AChEI):</strong>\n                    <ul>\n                        <li><strong>Donepezil</strong> (5–10 mg p.o. 1x denně), <strong>Rivastigmin</strong> (kapsle nebo transdermální náplast 4,6–9,5–13,3 mg/24h), <strong>Galantamin</strong>.</li>\n                        <li>Indikace: <em>lehká až středně těžká demence</em> (MMSE 13–26 bodů). Zpomalují úbytek acetylcholinu v synapsích.</li>\n                        <li>Nežádoucí účinky: gastrointestinální (nauzea, průjem), bradykardie, křeče v nohách.</li>\n                    </ul>\n                </li>\n                <li><strong>Antagonista NMDA receptorů:</strong>\n                    <ul>\n                        <li><strong>Memantin</strong> (10–20 mg p.o. 1x denně).</li>\n                        <li>Indikace: <em>středně těžká až těžká demence</em> (MMSE 3–19 bodů). Blokuje excitotoxické působení glutamátu.</li>\n                        <li>Možná kombinační terapie: Donepezil + Memantin v pokročilejších stádiích.</li>\n                    </ul>\n                </li>\n                <li><strong>Biologická léčba (anti-amyloidové monoklonální protilátky):</strong> <em>Lecanemab, Donanemab</em> – schválené k odstranění amyloidu v časných stádiích (MCI a mírná demence); vyžadují monitoraci rizika ARIA (edém/mikrokrvácení na MRI).</li>\n            </ul>"
          }
        ]
      },
      "recall": {
        "scenarios": [
          {
            "id": "sc-S18-1",
            "title": "Klinická kazuistika – Demence a Alzheimerova nemoc",
            "question": "<strong>Kazuistika:</strong> 72letá bývalá účetní přivedena dcerou pro 2 roky progredující zapomínání nedávných událostí, ztrácení klíčů a neschopnost samostatně uvařit podle receptu nebo zaplatit složenky. Při vyšetření: orientována osobou, ale neví přesný měsíc ani rok, v testu MMSE skóruje 21/30 bodů (výpadek paměti na 3 slova, porucha počítání a konstrukce), v testu kreslení hodin chybně umisťuje ručičky. Neurologický nález bez ložiskového motorického deficitu.<br><br><strong>Klinický úkol:</strong> Stanovte diagnózu a stádium, popište potřebná zobrazovací a laboratorní vyšetření a navrhněte optimální farmakoterapii.",
            "answer": "<ul style='margin: 6px 0 0 18px; padding: 0; line-height: 1.5;'><li>Diagnóza: Demence u Alzheimerovy nemoci v lehkém stádiu (MMSE 21/30, narušení instrumentálních aktivit denního života - IADL).</li><li>Strukturální vyšetření: MRI mozku (koronární T1 a T2/FLAIR) k vyloučení strukturálních léčitelných příčin (subdurální hematom, NPH, tumor) a ke zhodnocení atrofie hipokampů (Scheltens MTA skóre).</li><li>Laboratorní vyloučení sekundárních demencí: Krevní obraz, biochemie, ionty, TSH (hypotyreóza), vitamin B12, folát, sérologie lues.</li><li>Farmakoterapie: Nasazení inhibitoru acetylcholinesterázy v monoterapii – např. Donepezil (zahájit 5 mg 1x denně večer, po 4–6 týdnech navýšit na 10 mg denně) nebo Rivastigmin (transdermální náplast).</li><li>Nefarmakologická opatření: Kognitivní trénink, pravidelný denní režim, zajištění sociální pomoci a bezpečnosti v domácnosti.</li></ul>",
            "keyPoints": [
              "Diagnóza: Demence u Alzheimerovy nemoci v lehkém stádiu (MMSE 21/30, narušení instrumentálních aktivit denního života - IADL).",
              "Strukturální vyšetření: MRI mozku (koronární T1 a T2/FLAIR) k vyloučení strukturálních léčitelných příčin (subdurální hematom, NPH, tumor) a ke zhodnocení atrofie hipokampů (Scheltens MTA skóre).",
              "Laboratorní vyloučení sekundárních demencí: Krevní obraz, biochemie, ionty, TSH (hypotyreóza), vitamin B12, folát, sérologie lues.",
              "Farmakoterapie: Nasazení inhibitoru acetylcholinesterázy v monoterapii – např. Donepezil (zahájit 5 mg 1x denně večer, po 4–6 týdnech navýšit na 10 mg denně) nebo Rivastigmin (transdermální náplast).",
              "Nefarmakologická opatření: Kognitivní trénink, pravidelný denní režim, zajištění sociální pomoci a bezpečnosti v domácnosti."
            ],
            "pearl": "Demence je získaný progresivní kognitivní úbytek narušující soběstačnost a běžné denní aktivity (ADL)."
          }
        ]
      },
      "cards": [
        {
          "id": "fc-S18-1",
          "front": "Jaký je typický profil likvorových biomarkerů ('Alzheimerovský triplet') u pacientů s Alzheimerovou nemocí?",
          "back": "Snížená hladina beta-amyloidu (Aβ42) v důsledku jeho ukládání do mozkových plaků, zvýšená hladina celkového tau proteinu (t-tau, marker zániku neuronů) a zvýšená hladina fosforylovaného tau proteinu (p-tau, marker tvorby neurofibrilárních klubek).",
          "hint": "Speciální neurologie LF OU"
        },
        {
          "id": "fc-S18-2",
          "front": "Které dvě hlavní lékové skupiny tvoří základ kognitivní farmakoterapie Alzheimerovy nemoci a v jakých stádiích se nasazují?",
          "back": "1. Inhibitory acetylcholinesterázy (Donepezil, Rivastigmin, Galantamin) – indikované v lehkém až středním stádiu (MMSE 13–26). 2. Antagonista NMDA receptorů Memantin – indikovaný ve středně těžkém až těžkém stádiu (MMSE 3–19) nebo v kombinaci.",
          "hint": "Speciální neurologie LF OU"
        },
        {
          "id": "fc-S18-3",
          "front": "Co hodnotí Scheltensova vizuální škála (MTA skóre) na koronárních řezech MRI mozku?",
          "back": "Míru atrofie mediálního temporálního laloku a hipokampu (hodnotí šířku choroidální fisury, temporálního rohu komory a výšku hipokampu v rozmezí 0–4 body).",
          "hint": "Speciální neurologie LF OU"
        }
      ],
      "quiz": [
        {
          "id": "pq-S18-1",
          "question": "Který kognitivní test je výrazně citlivější než MMSE pro včasnou detekci mírné kognitivní poruchy (MCI) a exekutivních dysfunkcí?",
          "options": [
            "Glasgow Coma Scale",
            "Montreal Cognitive Assessment (MoCA)",
            "Barthelův index všedních činností",
            "NIHSS skóre"
          ],
          "correctIndex": 1,
          "explanation": "Montreal Cognitive Assessment (MoCA) testuje široké spektrum funkcí včetně exekutivních, zrakově-prostorových a pozornostních a je podstatně senzitivnější pro záchyt MCI a časné fáze demence než MMSE."
        },
        {
          "id": "pq-S18-2",
          "question": "Který mechanismus účinku má lék Memantin používaný v terapii středně těžké a těžké Alzheimerovy nemoci?",
          "options": [
            "Inhibice acetylcholinesterázy a butyrylcholinesterázy",
            "Necholeretická stimulace dopaminových D2 receptorů",
            "Nekompeticionální antagonismus NMDA glutamátových receptorů bránící excitotoxicitě",
            "Blokáda CGRP receptorů"
          ],
          "correctIndex": 2,
          "explanation": "Memantin je středně afinitní nekompetitivní antagonista NMDA receptorů, který chrání neurony před chronickým toxickým působením nadbytku glutamátu (excitotoxicitou) a zlepšuje synaptický přenos signálu."
        }
      ]
    },
    {
      "id": "s19-bolesti-hlavy-diferenci-ln-diagn-za-prim",
      "number": 19,
      "section": "specialni",
      "sectionLabel": "Speciální neurologie",
      "badgePrefix": "S19",
      "title": "Bolesti hlavy - diferenciální diagnóza (Primární vs. sekundární cefalalgie)",
      "shortDesc": "Diferenciální diagnostika bolestí hlavy: mezinárodní klasifikace ICHD-3, varovné příznaky ('Red Flags' - SNOOP), primární cefalalgie (tenzní, cluster headache) vs. život ohrožující sekundární cefalalgie (SAB, meningitida, temporální arteritida, intrakraniální hypertenze/hypotenze).",
      "category": "bolesti_hlavy",
      "badge": "Bolesti hlavy & Cefalalgie",
      "badgeColor": "teal",
      "theory": {
        "banner": {
          "tag": "Speciální neurologie • Otázka S19",
          "title": "Bolesti hlavy - diferenciální diagnóza (Primární vs. sekundární cefalalgie)",
          "text": "Diferenciální diagnostika bolestí hlavy: mezinárodní klasifikace ICHD-3, varovné příznaky ('Red Flags' - SNOOP), primární cefalalgie (tenzní, cluster headache) vs. život ohrožující sekundární cefalalgie (SAB, meningitida, temporální arteritida, intrakraniální hypertenze/hypotenze)."
        },
        "sections": [
          {
            "title": "1. Klasifikace bolestí hlavy (ICHD-3)",
            "content": "<p>Bolesti hlavy (cefalalgie) patří k nejčastějším steskům v medicíně. Dle mezinárodní klasifikace <strong>ICHD-3 (International Classification of Headache Disorders)</strong> se dělí do dvou hlavních skupin:</p>\n            <ul>\n                <li><strong>Primární bolesti hlavy (90 % případů):</strong> bolest hlavy je samotným onemocněním, není vyvolána jinou strukturální patologií (migréna, tenzní bolest hlavy, trigeminové autonomní cefalalgie – cluster headache).</li>\n                <li><strong>Sekundární (symptomatické) bolesti hlavy (10 % případů):</strong> bolest hlavy je symptomem jiného základního onemocnění (cévního, infekčního, nádorového, traumatického, metabolického). Mohou bezprostředně ohrožovat život pacienta!</li>\n            </ul>"
          },
          {
            "title": "2. Varovné známky sekundárních bolestí hlavy („Red Flags“ – mnemotechnická pomůcka SNOOP)",
            "content": "<div class=\"highlight-box\">\n                <h4>Kritéria SNOOP pro indikaci urgentního vyšetření (CT/MRI/LP)</h4>\n                <ul>\n                    <li><strong>S - Systemic symptoms / disease:</strong> horečka, hubnutí, noční poty, onkologická anamnéza, HIV infekce, imunosuprese.</li>\n                    <li><strong>N - Neurologic symptoms or signs:</strong> ložiskový neurologický deficit (paréza, afázie, porucha vizu), edém papily na očním pozadí, alterace vědomí, křeče.</li>\n                    <li><strong>O - Onset sudden (Thunderclap headache / hromobitová bolest hlavy):</strong> nástup bolesti do maximální intenzity během několika sekund až 1 minuty („nejkrutější bolest v životě“ $\to$ podezření na <strong>subarachnoidální krvácení - SAB</strong>!).</li>\n                    <li><strong>O - Older age at onset:</strong> nově vzniklá bolest hlavy u osoby starší <strong>50 let</strong> (podezření na <em>temporální/obrovskobuněčnou arteritidu</em> nebo mozkový nádor).</li>\n                    <li><strong>P - Pattern change / Positional / Progressive:</strong> změna charakteru známé bolesti, progrese frekvence/intenzity, bolest vázaná na polohu těla (posturální – horší vestoje při likvorové hypotenzi, horší vleže při hypertenzi), provokace Valsalvovým manévrem (kašel, kýchání, předklon).</li>\n                </ul>\n            </div>"
          },
          {
            "title": "3. Vybrané závažné sekundární bolesti hlavy",
            "content": "<div class=\"anatomy-grid\">\n                <div class=\"grid-item\">\n                    <h4>Cévní a intrakraniální procesy</h4>\n                    <ul>\n                        <li><strong>Subarachnoidální krvácení (SAB):</strong> náhlá krutá bolest týla s propagací do páteře, zvracení, meningeální dráždění. Statimové CT mozku, při negativitě LP po 6–12h (xantochromie).</li>\n                        <li><strong>Trombóza mozkových splavů (CVST):</strong> progredující difuzní bolest hlavy, edém papily, epileptické záchvaty, často u mladých žen s HAK či trombofilií. Zlatý standard: MR venografie.</li>\n                        <li><strong>Disekce a. carotis interna / a. vertebralis:</strong> jednostranná krutá bolest krku/obličeje po drobném traumatu, <em>Hornerův syndrom (ptóza, mióza)</em>, riziko ischemického iktu.</li>\n                        <li><strong>Intrakraniální hypotenze (syndrom likvorové hypotenze):</strong> ortostatická bolest hlavy (prudce se zhoršuje vestoje, zcela mizí vleže) po LP nebo durální trhlině. Léčba: hydratace, kofein, autologní krevní zátka (epidural blood patch).</li>\n                    </ul>\n                </div>\n                <div class=\"grid-item\">\n                    <h4>Zánětlivé a jiné procesy</h4>\n                    <ul>\n                        <li><strong>Temporální (Hortonova / obrovskobuněčná) arteritida:</strong> vaskulitida velkých cév u pacientů > 50 let. Pulzující bolest ve spánku, zatuhlá a bolestivá a. temporalis, klaudikace žvýkacích svalů při jídle, polymyalgia rheumatica. <strong>Hrozí náhlá slepota (AION) útlakem a. ophthalmica!</strong> Dg: vysoká sedimentace erytrocytů (FW > 50–100 mm/h), CRP, biopsie a. temporalis. Léčba: okamžité podání Prednisonu (60–80 mg/den p.o. / metylprednizolon i.v.), nečekat na biopsii!</li>\n                        <li><strong>Akutní glaukomový záchvat:</strong> jednostranná krutá bolest oka a nadočnicového oblouku, mlhavé vidění s duhovými kruhy kolem světel, nauzea, tvrdé oko na pohmat, mydriáza bez fotoreakce.</li>\n                    </ul>\n                </div>\n            </div>"
          },
          {
            "title": "4. Primární bolesti hlavy (mimo migrénu)",
            "content": "<ul>\n                <li><strong>Tenzní bolest hlavy (Tension-Type Headache - TTH):</strong>\n                    <ul>\n                        <li>Nejčastější primární cefalea (až 80 % populace).</li>\n                        <li><em>Charakter:</em> tupá, tlaková, svíravá bolest („jako obruč kolem hlavy“ / „přilba“), <strong>oboustranná</strong>, mírné až střední intenzity, <strong>není zhoršována běžnou fyzickou aktivitou</strong>, bez nauzey a zvracení (může být mírná fotofobie nebo fonofobie, ne obojí).</li>\n                        <li><em>Terapie:</em> prostá analgetika (paracetamol 1000 mg, ibuprofen 400 mg); profylaxe u chronické TTH: <strong>Amitriptylin</strong> (tricyklické antidepresivum).</li>\n                    </ul>\n                </li>\n                <li><strong>Cluster headache (trigeminová autonomní cefalalgie):</strong>\n                    <ul>\n                        <li>Převaha u mužů (poměr 4:1), ataky v „clusterech“ (periodách trvajících týdny až měsíce, často na jaře a na podzim).</li>\n                        <li><em>Charakter:</em> <strong>extrémně krutá, nesnesitelná šlehavá/vrtavá jednostranná periorbitální bolest</strong> trvající 15–180 minut, přicházející typicky v noci (v REM fázi) 1–8x denně. Provokována i minimálním množstvím alkoholu! Pacient je motoricky neklidný (přechází po místnosti).</li>\n                        <li><em>Ipsilaterální autonomní doprovod:</em> slzení oka (lakrimace), konjunkotivální injekce, nosní kongesce / rinorea, mióza, ptóza (parciální Hornerův syndrom), otok víčka.</li>\n                        <li><em>Akutní léčba:</em> <strong>100% inhalace kyslíku obličejovou maskou (12–15 l/min po dobu 15–20 minut)</strong> a <strong>Sumatriptan 6 mg s.c.</strong> (nebo zolmitriptan nosní sprej).</li>\n                        <li><em>Profylaxe:</em> <strong>Verapamil</strong> (blokátor Ca kanálů ve vysokých dávkách pod EKG kontrolou) + překlenovací kortikoterapie (prednison).</li>\n                    </ul>\n                </li>\n            </ul>"
          }
        ]
      },
      "recall": {
        "scenarios": [
          {
            "id": "sc-S19-1",
            "title": "Klinická kazuistika – Bolesti hlavy - diferenciální diagnóza (Primární vs. sekundární cefalalgie)",
            "question": "<strong>Kazuistika:</strong> 34letý manažer se v noci probudil krutou 'vrtavou' bolestí za pravým okem. Bolest je tak intenzivní, že nedokáže ležet a neklidně chodí po pokoji. Z pravého oka mu teče slza, pravá nosní dírka je ucpaná a pravé víčko pokleslé a oteklé. Podobné epizody se u něj opakovaly každou noc v posledních 2 týdnech vždy po vypití skleničky vína.<br><br><strong>Klinický úkol:</strong> Stanovte diagnózu, popište záchvatovou terapii a navrhněte lék volby pro dlouhodobou profylaxi.",
            "answer": "<ul style='margin: 6px 0 0 18px; padding: 0; line-height: 1.5;'><li>Diagnóza: Cluster headache (trigeminová autonomní cefalalgie) v aktivní periodě.</li><li>Charakteristika záchvatu: Jednostranná periorbitální krutá bolest v noci, motorický neklid, ipsilaterální autonomní příznaky (lakrimace, nosní kongesce, ptóza/Horner), provokace alkoholem.</li><li>Akutní záchvatová léčba: Inhalace 100% kyslíku maskou průtokem 12–15 l/min po dobu 15 minut a/nebo subkutánní injekce Sumatriptanu 6 mg s.c.</li><li>Dlouhodobá profylaxe: Verapamil v titrované dávce (240–480 mg denně s kontrolami EKG kvůli riziku AV blokád).</li><li>Překlenovací léčba (bridging): Krátkodobý sestupný cyklus perorálního Prednisonu (zahájit 60–80 mg/den po dobu 5–7 dnů) pro rychlé přerušení periody záchvatů před nástupem účinku verapamilu.</li></ul>",
            "keyPoints": [
              "Diagnóza: Cluster headache (trigeminová autonomní cefalalgie) v aktivní periodě.",
              "Charakteristika záchvatu: Jednostranná periorbitální krutá bolest v noci, motorický neklid, ipsilaterální autonomní příznaky (lakrimace, nosní kongesce, ptóza/Horner), provokace alkoholem.",
              "Akutní záchvatová léčba: Inhalace 100% kyslíku maskou průtokem 12–15 l/min po dobu 15 minut a/nebo subkutánní injekce Sumatriptanu 6 mg s.c.",
              "Dlouhodobá profylaxe: Verapamil v titrované dávce (240–480 mg denně s kontrolami EKG kvůli riziku AV blokád).",
              "Překlenovací léčba (bridging): Krátkodobý sestupný cyklus perorálního Prednisonu (zahájit 60–80 mg/den po dobu 5–7 dnů) pro rychlé přerušení periody záchvatů před nástupem účinku verapamilu."
            ],
            "pearl": "Bolesti hlavy se dělí na primární (migréna, tenzní, cluster) a sekundární (SAB, meningitida, tumory, vaskulitidy)."
          }
        ]
      },
      "cards": [
        {
          "id": "fc-S19-1",
          "front": "Jaká je okamžitá léčba první volby při akutním záchvatu Cluster headache?",
          "back": "Inhalace 100% kyslíku obličejovou maskou s rezervoárem průtokem 12–15 litrů/minutu po dobu 15–20 minut a/nebo aplikace Sumatriptanu 6 mg subkutánně.",
          "hint": "Speciální neurologie LF OU"
        },
        {
          "id": "fc-S19-2",
          "front": "Jaké závažné riziko hrozí při neléčené temporální (obrovskobuněčné) arteritidě a jaký je okamžitý postup?",
          "back": "Hrozí akutní ireverzibilní ztráta zraku (přední ischemická neuropatie optiku - AION). Okamžitě se musí nasadit vysokodávkovaná kortikoterapie (Prednison 60–80 mg p.o. nebo metylprednizolon i.v.), a to ještě před provedením biopsie a. temporalis.",
          "hint": "Speciální neurologie LF OU"
        },
        {
          "id": "fc-S19-3",
          "front": "Co znamená 'hromobitová bolest hlavy' (thunderclap headache) a jakou diagnózu je nutno bezodkladně vyloučit?",
          "back": "Jde o náhle vzniklou bolest hlavy, která dosáhne maximální nesnesitelné intenzity během několika sekund až do 1 minuty. Je nutné bezodkladně vyloučit subarachnoidální krvácení (nativní CT mozku, případně lumbální punkce).",
          "hint": "Speciální neurologie LF OU"
        }
      ],
      "quiz": [
        {
          "id": "pq-S19-1",
          "question": "U kterého typu bolesti hlavy je typická oboustranná tupá svíravá bolest bez zhoršení běžnou fyzickou aktivitou a bez zvracení?",
          "options": [
            "Migréna bez aury",
            "Tenzní bolest hlavy (TTH)",
            "Cluster headache",
            "Disekce a. vertebralis"
          ],
          "correctIndex": 1,
          "explanation": "Tenzní bolest hlavy je charakterizována bilaterální tupou tlakovou/svíravou bolestí mírné až střední intenzity, která se nezhoršuje běžnou zátěží a není doprovázena nauzeou ani zvracením."
        },
        {
          "id": "pq-S19-2",
          "question": "Který laboratorní nález je klíčovým diagnostickým vodítkem při podezření na temporální arteritidu u 70letého pacienta s novou bolestí spánku?",
          "options": [
            "Těžká leukopenie",
            "Výrazná elevace sedimentace erytrocytů (FW > 50–100 mm/h) a CRP",
            "Zvýšená hladina troponinu T",
            "Snížená hladina kyseliny močové"
          ],
          "correctIndex": 1,
          "explanation": "Temporální (Hortonova) arteritida je systémová vaskulitida velkých cév, která se u seniorů manifestuje dramaticky zvýšenými zánětlivými parametry – sedimentace erytrocytů (FW) bývá typicky > 50–100 mm za první hodinu spolu s vysokým CRP."
        }
      ]
    },
    {
      "id": "s20-migr-na",
      "number": 20,
      "section": "specialni",
      "sectionLabel": "Speciální neurologie",
      "badgePrefix": "S20",
      "title": "Migréna",
      "shortDesc": "Migréna: neurovaskulární patogeneze (korová šířící se deprese, trigeminovaskulární systém, CGRP), klinické fáze, migréna s aurou vs. bez aury, moderní akutní léčba (triptany, ditany, gepanty) a profylaxe (blokátory CGRP, antiepileptika, beta-blokátory).",
      "category": "bolesti_hlavy",
      "badge": "Bolesti hlavy & Cefalalgie",
      "badgeColor": "teal",
      "theory": {
        "banner": {
          "tag": "Speciální neurologie • Otázka S20",
          "title": "Migréna",
          "text": "Migréna: neurovaskulární patogeneze (korová šířící se deprese, trigeminovaskulární systém, CGRP), klinické fáze, migréna s aurou vs. bez aury, moderní akutní léčba (triptany, ditany, gepanty) a profylaxe (blokátory CGRP, antiepileptika, beta-blokátory)."
        },
        "sections": [
          {
            "title": "1. Definice a Epidemiologie",
            "content": "<p><strong>Migréna</strong> je chronické záchvatovité neurovaskulární onemocnění mozku projevující se opakovanými atakami středně těžké až kruté bolesti hlavy doprovázené vegetativními a neurologickými symptomy. Postihuje přibližně <strong>12–15 % populace</strong>, s výraznou převahou u žen (3:1). Je jednou z hlavních příčin disability u mladých dospělých.</p>"
          },
          {
            "title": "2. Patofyziologie migrény",
            "content": "<div class=\"anatomy-grid\">\n                <div class=\"grid-item\">\n                    <h4>Korová šířící se deprese (CSD - Cortical Spreading Depression)</h4>\n                    <ul>\n                        <li>Vlna masivní neuronální a gliové depolarizace šířící se rychlostí 2–5 mm/min po mozkové kůře (typicky z okcipitálního laloku dopředu), následovaná dlouhodobým útlumem bioelektrické aktivity.</li>\n                        <li>Je <strong>elektrofyziologickým podkladem migrenózní aury</strong>.</li>\n                    </ul>\n                </div>\n                <div class=\"grid-item\">\n                    <h4>Aktivace trigeminovaskulárního systému a CGRP</h4>\n                    <ul>\n                        <li>CSD aktivuje aferentní vlákna <em>n. trigeminus</em> inervující meningeální cévy.</li>\n                        <li>Dochází k antidromnímu uvolnění vazoaktivních neuropeptidů: <strong>CGRP (Calcitonin Gene-Related Peptide)</strong> a substanci P $\to$ sterilní neurogenní zánět, vazodilatace durálních cév a senzitizace trigeminových drah v talamu a kůře (vznik pulzující bolesti).</li>\n                    </ul>\n                </div>\n            </div>"
          },
          {
            "title": "3. Fáze migrenózního záchvatu",
            "content": "<ol>\n                <li><strong>Prodromální fáze (hodiny až dny před záchvatem, u 60–80 %):</strong> změny nálady, podrážděnost, únava, zívání, bažení po určitých jídlech (sladké), ztuhlost šíje.</li>\n                <li><strong>Fáze aury (u 20–30 % pacientů – Migréna s aurou):</strong>\n                    <ul>\n                        <li>Rozvíjí se postupně během 5–20 minut a <strong>trvá maximálně 60 minut</strong>, poté plynule přechází v bolest hlavy.</li>\n                        <li><em>Zraková aura (nejčastější, > 90 %):</em> scintilační skotom (blikající klikatá linie – teichopsie), fortifikační spektrum, rozšiřující se výpadek zorného pole.</li>\n                        <li><em>Senzorická aura:</em> jednostranné parestezie (brnění) šířící se z prstů ruky na paži a do obličeje a jazyka.</li>\n                        <li><em>Fatická aura:</em> přechodná motorická či senzorická dysfázie/afázie.</li>\n                        <li><em>Vzácné formy:</em> hemiplegická migréna (motorická slabost – mutace v iontových kanálech CACNA1A, ATP1A2), migréna s kmenovou aurou (vertigo, dysartrie, diplopie, ataxie).</li>\n                    </ul>\n                </li>\n                <li><strong>Fáze bolesti hlavy (trvá 4–72 hodin bez léčby):</strong>\n                    <ul>\n                        <li><strong>Jednostranná lokalizace (hemikranie, u 60–70 %):</strong> může strany střídat.</li>\n                        <li><strong>Pulzující charakter</strong> (tlukoucí bolest).</li>\n                        <li><strong>Střední až těžká intenzita</strong> (omezuje či znemožňuje běžné aktivity).</li>\n                        <li><strong>Zhoršení běžnou fyzickou aktivitou</strong> (chůze do schodů, předklon).</li>\n                        <li><strong>Doprovodné příznaky:</strong> nauzea a zvracení, <em>fotofobie</em> (světloplachost) a <em>fonofobie</em> (přecitlivělost na hluk), osmiofobie. Pacient vyhledává klid a temnou místnost.</li>\n                    </ul>\n                </li>\n                <li><strong>Postdromální fáze (fáze zotavení, 24–48h):</strong> vyčerpanost, zhoršená koncentrace, „kocovinový pocit“.</li>\n            </ol>"
          },
          {
            "title": "4. Akutní záchvatová léčba migrény",
            "content": "<ul>\n                <li><strong>Mírný až střední záchvat:</strong>\n                    <ul>\n                        <li>Nespecifická analgetika: <strong>Ibuprofen</strong> (400–800 mg), <strong>Kyselina acetylsalicylová (ASA)</strong> (1000 mg šumivá forma), <strong>Naproxen</strong> (500 mg), <strong>Paracetamol</strong> (1000 mg).</li>\n                        <li>Antiemetika/prokinetika: <strong>Metoklopramid</strong> 10 mg p.o./i.v. nebo Domperidon (urychlují žaludeční evakuaci a vstřebání analgetika, tlumí nauzeu).</li>\n                    </ul>\n                </li>\n                <li><strong>Středně těžký až těžký záchvat (nebo selhání NSAID):</strong>\n                    <ul>\n                        <li><strong>Triptany (specifičtí agonisté $5\text{-HT}_{1B/1D}$ receptorů):</strong> <strong>Sumatriptan</strong> (50–100 mg p.o., 6 mg s.c., 20 mg nosní sprej), <strong>Zolmitriptan</strong>, <strong>Eletriptan</strong>, <strong>Frovatriptan</strong>.\n                            <ul>\n                                <li>Mechanismus: vazokonstrikce meningeálních cév, inhibice uvolňování CGRP a blokáda transmise v trigeminovém jádře.</li>\n                                <li>Užívat <em>hned na začátku fáze bolesti</em> (neužívat ve fázi aury!).</li>\n                                <li><em>Kontraindikace:</em> ischemická choroba srdeční, prodělaná CMP/TIA, nekorigovaná těžká hypertenze, periferní cévní onemocnění.</li>\n                            </ul>\n                        </li>\n                        <li><strong>Moderní léčiva bez vazokonstrikčního účinku:</strong>\n                            <ul>\n                                <li><strong>Ditany:</strong> <em>Lasmiditan</em> (selektivní agonista $5\text{-HT}_{1F}$ receptorů) – bezpečný u kardiovaskulárních pacientů (sedativní účinek, zákaz řízení 8 hod).</li>\n                                <li><strong>Gepanty:</strong> <em>Rimegepant</em> (malomolekulární perorální antagonista CGRP receptoru) – vhodný pro akutní léčbu i profylaxi.</li>\n                            </ul>\n                        </li>\n                    </ul>\n                </li>\n            </ul>\n\n            <div class=\"highlight-box\">\n                <h4>Bolest hlavy z nadužívání medikace (MOH - Medication Overuse Headache)</h4>\n                <p>Vzniká při nadměrném užívání akutní analgetické medikace u pacientů s migrénou nebo tenzní cefaleou po dobu <strong>$\\ge 3$ měsíců</strong>:</p>\n                <ul>\n                    <li>Při užívání <strong>triptanů, opioidů nebo kombinovaných analgetik $\\ge 10$ dní v měsíci</strong>.</li>\n                    <li>Při užívání <strong>prostých analgetik / NSAID $\\ge 15$ dní v měsíci</strong>.</li>\n                    <li>Léčba: okamžité vysazení nadužívaného léku (detoxikace) + včasné zahájení adekvátní profylaxe!</li>\n                </ul>\n            </div>"
          },
          {
            "title": "5. Profylaktická léčba migrény",
            "content": "<p><strong>Indikace profylaxe:</strong> $\\ge 3\text{–}4$ migrenózní záchvaty měsíčně, těžké záchvaty nereagující na akutní léčbu, záchvaty s prolongovanou aurou nebo riziko rozvoje MOH. Cílem je snížit frekvenci a tíži záchvatů alespoň o 50 %.</p>\n            <ul>\n                <li><strong>Konvenční perorální profylaktika (titrace po dobu minimálně 2–3 měsíců):</strong>\n                    <ul>\n                        <li><em>Beta-blokátory:</em> Metoprolol (50–200 mg/den), Propranolol (lék volby u hypertoniků a mladých pacientů).</li>\n                        <li><em>Antiepileptika:</em> <strong>Topiramát</strong> (25–100 mg/den – nežádoucí účinky: úbytek hmotnosti, parestezie, kognitivní zpomalení; teratogen!), <strong>Valproát sodný</strong> (přísně kontraindikován u žen ve fertilním věku pro vysokou teratogenitu).</li>\n                        <li><em>Blokátory kalciových kanálů:</em> Flunarizin (5–10 mg na noc).</li>\n                        <li><em>Antidepresiva:</em> Amitriptylin (zejména při koincidenci s tenzní cefaleou a nespavostí), Venlafaxin.</li>\n                    </ul>\n                </li>\n                <li><strong>Cílená biologická léčba (anti-CGRP monoklonální protilátky):</strong>\n                    <ul>\n                        <li><strong>Erenumab (Aimovig):</strong> monoklonální protilátka proti <em>CGRP receptoru</em>.</li>\n                        <li><strong>Fremanezumab (Ajovy), Galkanezumab (Emgality), Eptinezumab (Vyepti):</strong> monoklonální protilátky vázající přímo <em>CGRP ligand</em>.</li>\n                        <li>Aplikace: 1x měsíčně subkutánně (nebo 1x za 3 měsíce s.c./i.v.). Vyznačují se vynikající účinností a minimem nežádoucích účinků.</li>\n                    </ul>\n                </li>\n                <li><strong>Aplikace botulotoxinu A (onabotulinumtoxinA - Botox):</strong> protokol PREEMPT (31–39 vpichů do svalů hlavy a šíje po 12 týdnech) specificky u <em>chronické migrény</em> ($\\ge 15$ dní bolesti hlavy v měsíci).</li>\n            </ul>"
          }
        ]
      },
      "recall": {
        "scenarios": [
          {
            "id": "sc-S20-1",
            "title": "Klinická kazuistika – Migréna",
            "question": "<strong>Kazuistika:</strong> 29letá právnička trpí od 18 let atakami pulzující bolesti levé poloviny hlavy se zvracením, které předchází 30minutové jiskření a výpadek v pravém zorném poli. Poslední půlrok má záchvaty 6–8x do měsíce. Užívá volně prodejná analgetika a Sumatriptan téměř každý druhý den, bolest se však stává trvalou a každodenní. Pacientka plánuje v dohledné době těhotenství.<br><br><strong>Klinický úkol:</strong> Zhodnoťte klinický stav (včetně komplikace), navrhněte management nadužívání analgetik a zvolte bezpečnou profylaktickou léčbu.",
            "answer": "<ul style='margin: 6px 0 0 18px; padding: 0; line-height: 1.5;'><li>Diagnóza: Migréna s typickou zrakovou aurou komplikovaná rozvojem bolesti hlavy z nadužívání medikace (MOH - Medication Overuse Headache) a vysokou frekvencí záchvatů.</li><li>Management MOH: Okamžité radikální vysazení nadužívaných triptanů a kombinovaných analgetik (detoxikace, poučení o přechodném rebound zhoršení cefaley v prvních 7–14 dnech s možností překlenutí antiemetiky/NSAID).</li><li>Indikace profylaktické léčby: Frekvence 6–8 záchvatů měsíčně a přítomnost MOH je jednoznačnou indikací k zavedení profylaxe.</li><li>Volba profylaktika s ohledem na plánované těhotenství: Přísně kontraindikován je Valproát a Topiramát (vysoká teratogenita!). Lékem volby je Beta-blokátor (Metoprolol v nízké titrované dávce) nebo v případě selhání konvenční terapie zvážení biologické léčby anti-CGRP monoklonální protilátkou (Erenumab/Fremanezumab) s vysazením před koncepcí.</li><li>Režimová opatření: Pravidelný spánkový režim, hydratace, eliminace spouštěčů (stres, nepravidelná strava), vedení záchvatového deníku.</li></ul>",
            "keyPoints": [
              "Diagnóza: Migréna s typickou zrakovou aurou komplikovaná rozvojem bolesti hlavy z nadužívání medikace (MOH - Medication Overuse Headache) a vysokou frekvencí záchvatů.",
              "Management MOH: Okamžité radikální vysazení nadužívaných triptanů a kombinovaných analgetik (detoxikace, poučení o přechodném rebound zhoršení cefaley v prvních 7–14 dnech s možností překlenutí antiemetiky/NSAID).",
              "Indikace profylaktické léčby: Frekvence 6–8 záchvatů měsíčně a přítomnost MOH je jednoznačnou indikací k zavedení profylaxe.",
              "Volba profylaktika s ohledem na plánované těhotenství: Přísně kontraindikován je Valproát a Topiramát (vysoká teratogenita!). Lékem volby je Beta-blokátor (Metoprolol v nízké titrované dávce) nebo v případě selhání konvenční terapie zvážení biologické léčby anti-CGRP monoklonální protilátkou (Erenumab/Fremanezumab) s vysazením před koncepcí.",
              "Režimová opatření: Pravidelný spánkový režim, hydratace, eliminace spouštěčů (stres, nepravidelná strava), vedení záchvatového deníku."
            ],
            "pearl": "Migréna je záchvatovité neurovaskulární onemocnění vyvolané korovou šířící se depresí (CSD) a uvolněním CGRP z trigeminovaskulárního systému."
          }
        ]
      },
      "cards": [
        {
          "id": "fc-S20-1",
          "front": "Jaký je mechanismus účinku a hlavní kardiovaskulární kontraindikace Triptanů v léčbě migrény?",
          "back": "Triptany jsou selektivní agonisté 5-HT1B/1D serotoninových receptorů, které způsobují vazokonstrikci meningeálních cév a blokují uvolňování CGRP. Kontraindikací jsou ischemická choroba srdeční (ICHS), stav po infarktu myokardu, prodělaná CMP/TIA a nekontrolovaná hypertenze.",
          "hint": "Speciální neurologie LF OU"
        },
        {
          "id": "fc-S20-2",
          "front": "Který vazoaktivní neuropeptid hraje klíčovou roli v patogenezi migrény a je cílem moderní biologické léčby?",
          "back": "CGRP (Calcitonin Gene-Related Peptide). Moderní biologická léčba využívá monoklonální protilátky blokující přímo CGRP ligand (Fremanezumab, Galkanezumab) nebo jeho receptor (Erenumab).",
          "hint": "Speciální neurologie LF OU"
        },
        {
          "id": "fc-S20-3",
          "front": "Jak je definována bolest hlavy z nadužívání léků (Medication Overuse Headache - MOH)?",
          "back": "Bolest hlavy přítomná ≥ 15 dní v měsíci u pacienta s preexistující primární cefaleou, který pravidelně nadužívá akutní medikaci po dobu ≥ 3 měsíců (triptany, opioidy nebo kombinovaná analgetika ≥ 10 dní/měsíc, prostá analgetika ≥ 15 dní/měsíc).",
          "hint": "Speciální neurologie LF OU"
        }
      ],
      "quiz": [
        {
          "id": "pq-S20-1",
          "question": "Které z následujících antiepileptik je v profylaxi migrény přísně kontraindikováno u žen ve fertilním věku pro vysoké riziko těžkých vrozených vývojových vad a kognitivního poškození plodu?",
          "options": [
            "Metoprolol",
            "Valproát sodný",
            "Amitriptylin",
            "Flunarizin"
          ],
          "correctIndex": 1,
          "explanation": "Valproát sodný má vysoký teratogenní potenciál (defekty neurální trubice, kraniofaciální vady, pokles IQ u dětí) a je v léčbě migrény u žen ve fertilním věku absolutně kontraindikován."
        },
        {
          "id": "pq-S20-2",
          "question": "Jaká je maximální standardní doba trvání typické migrenózní aury dle mezinárodních diagnostických kritérií ICHD-3?",
          "options": [
            "5 minut",
            "60 minut",
            "24 hodin",
            "72 hodin"
          ],
          "correctIndex": 1,
          "explanation": "Typická migrenózní aura (zraková, senzorická, řečová) se rozvíjí postupně a jednotlivé symptomy trvají 5 až 60 minut. Aura trvající déle než 60 minut se klasifikuje jako prolongovaná aura a vyžaduje vyloučení TIA/ischemické CMP."
        }
      ]
    },
    {
      "id": "s21-vaskul-rn-demence-demence-s-lewyho-t-l-s",
      "number": 21,
      "section": "specialni",
      "sectionLabel": "Speciální neurologie",
      "badgePrefix": "S21",
      "title": "Vaskulární demence, Demence s Lewyho tělísky (DLB) a Frontotemporální demence (FTD)",
      "shortDesc": "Non-Alzheimerovské demence: Vaskulární demence (VaD, Binswangerova choroba, schodovitá progrese), Demence s Lewyho tělísky (DLB - zrakové halucinace, fluktuace, spontánní parkinsonismus, přecitlivělost na neuroleptika), Frontotemporální lobární degenerace (FTLD/FTD - behaviorální varianta, primární progresivní afázie).",
      "category": "neurodegenerace",
      "badge": "Neurodegenerativní onemocnění & Kognitivní poruchy",
      "badgeColor": "teal",
      "theory": {
        "banner": {
          "tag": "Speciální neurologie • Otázka S21",
          "title": "Vaskulární demence, Demence s Lewyho tělísky (DLB) a Frontotemporální demence (FTD)",
          "text": "Non-Alzheimerovské demence: Vaskulární demence (VaD, Binswangerova choroba, schodovitá progrese), Demence s Lewyho tělísky (DLB - zrakové halucinace, fluktuace, spontánní parkinsonismus, přecitlivělost na neuroleptika), Frontotemporální lobární degenerace (FTLD/FTD - behaviorální varianta, primární progresivní afázie)."
        },
        "sections": [
          {
            "title": "1. Úvod a Diferenciální diagnostika demencí",
            "content": "<p>Ačkoliv je Alzheimerova nemoc nejčastější příčinou kognitivního úpadku, 30–40 % demencí tvoří non-Alzheimerovské jednotky. Správná diferenciální diagnóza je kritická pro volbu léčby a prevenci fatálních komplikací (např. léková přecitlivělost u DLB).</p>"
          },
          {
            "title": "2. Vaskulární demence (VaD - Vascular Dementia)",
            "content": "<ul>\n                <li><strong>Druhá nejčastější příčina demence (15–20 % případů):</strong> způsobená ischemickým nebo hemoragickým poškozením mozkového parenchymu v důsledku cerebrovaskulárního onemocnění.</li>\n                <li><strong>Formy:</strong>\n                    <ul>\n                        <li><em>Multiinfarktová demence (MID):</em> mnohočetné kortikální a subkortikální makroinfarkty v povodí velkých cév.</li>\n                        <li><em>Subkortikální vaskulární encefalopatie (Morbus Binswanger / SVE):</em> mikroangiopatie drobných cév při dlouhodobé hypertenzi a diabetu $\to$ difuzní ischemie bílé hmoty (leukoencefalopatie) a mnohočetné lakunární infarkty v bazálních gangliích.</li>\n                        <li><em>Strategický infarkt:</em> solitární infarkt v kritické kognitivní oblasti (talamus, gyrus angularis, hipokampus).</li>\n                    </ul>\n                </li>\n                <li><strong>Klinický obraz:</strong> <strong>schodovitá progrese (stepwise deterioration)</strong> nebo fluktuující průběh s náhlými zhoršeními po cévních příhodách; časné exekutivní dysfunkce (zpomalení, porucha plánování, apatie), časná porucha chůze (šouravá chůze o široké bázi), pseudobulbární syndrom (dysfagie, dysartrie, emoční labilita/inkontinence smíchu a pláče) a časná močová inkontinence. Paměť je relativně lépe zachována než u AN!</li>\n                <li><strong>Diagnostika a léčba:</strong> MRI prokazuje lakuny a rozsáhlou splývající hyperintenzitu bílé hmoty v T2/FLAIR (<em>Fazekas grade 3</em>). Léčba: agresivní sekundární prevence CMP (kontrola TK, statiny, antiagregancia).</li>\n            </ul>"
          },
          {
            "title": "3. Demence s Lewyho tělísky (DLB - Dementia with Lewy Bodies)",
            "content": "<ul>\n                <li><strong>Druhá nejčastější neurodegenerativní demence (10–15 %):</strong> synukleinopatie s difuzním výskytem Lewyho tělísek v mozkové kůře, limbickém systému i kmeni.</li>\n                <li><strong>Kardinální diagnostická kritéria (MDS kritéria):</strong>\n                    <ol>\n                        <li><strong>Fluktuující kognice:</strong> výrazné a nepředvídatelné kolísání pozornosti a bdělosti během dne či ze dne na den (střídání lucidních intervalů s těžkou zmateností a spavostí).</li>\n                        <li><strong>Rekurentní komplexní zrakové halucinace:</strong> živé, detailní, barevné halucinace postav, dětí či zvířat, které pacient často nekriticky vnímá, ale nebývají zpočátku děsivé.</li>\n                        <li><strong>Spontánní parkinsonismus:</strong> symetrická rigidita, bradykineze, hypomimie, porucha chůze (klidový třes bývá méně vyjádřen). <em>Pravidlo 1 roku:</em> u DLB demence vzniká současně s parkinsonismem nebo do 1 roku od motorických symptomů (pokud demence vznikne po více než 1 roce rozvinuté Parkinsonovy nemoci, jde o PDD - Parkinson's Disease Dementia).</li>\n                        <li><strong>Porucha chování v REM spánku (RBD):</strong> přítomna u > 80 % pacientů.</li>\n                    </ol>\n                </li>\n                <li><strong>Kritické varování – Extrémní přecitlivělost na neuroleptika (Neuroleptic Sensitivity):</strong> Podání i nízké dávky klasického neuroleptika (např. Haloperidol) může u pacienta s DLB vyvolat <strong>fatální ireverzibilní zhoršení rigidity, kóma nebo maligní neuroleptický syndrom</strong>! K tlumení psychotických příznaků lze použít pouze AChEI nebo velmi opatrně nízkodávkovaný Kvetiapin / Klozapin.</li>\n                <li><strong>Léčba:</strong> <strong>Inhibitory acetylcholinesterázy (Donepezil, Rivastigmin)</strong> jsou lékem první volby (zlepšují kognici, apatii i halucinace).</li>\n            </ul>"
          },
          {
            "title": "4. Frontotemporální lobární degenerace (FTD / Pickova nemoc)",
            "content": "<ul>\n                <li><strong>Typická demence preseniálního věku (45–65 let):</strong> selektivní neurodegenerativní atrofie frontálních a temporálních laloků (tauopatie / TDP-43 proteinopatie).</li>\n                <li><strong>Klinické varianty FTD:</strong>\n                    <div class=\"anatomy-grid\">\n                        <div class=\"grid-item\">\n                            <h4>Behaviorální varianta FTD (bvFTD, > 50 %)</h4>\n                            <ul>\n                                <li>Časná a dramatická <strong>změna osobnosti, chování a sociálního taktu</strong>.</li>\n                                <li><em>Příznaky dezinhibice:</em> nevhodné vtipkování, obscénní chování, ztráta zábran a společenských norem, impulzivní nakupování.</li>\n                                <li><em>Apatie a ztráta empatie:</em> emoční oploštělost, lhostejnost k rodině.</li>\n                                <li><em>Stereotypní a rituální chování:</em> tleskání, opakování frází.</li>\n                                <li><em>Hyperoralita:</em> změna stravovacích návyků (bažení po sladkém, přejídání se).</li>\n                                <li>Paměť a vizuoprostorové funkce jsou v časných fázích plně zachovány!</li>\n                            </ul>\n                        </div>\n                        <div class=\"grid-item\">\n                            <h4>Primární progresivní afázie (PPA)</h4>\n                            <ul>\n                                <li><em>Semantická varianta PPA (svPPA):</em> ztráta významu slov a pojmů (pacient neví, co znamená slovo 'pes' nebo 'vidlička'), fluentní řeč bez obsahu, atrofie temporálního pólu.</li>\n                                <li><em>Nefluentní/agramatická PPA (nfvPPA):</em> namáhavá, váznoucí řeč, agramatismus, apraxie řeči, atrofie frontálního operkula (Brocova oblast).</li>\n                            </ul>\n                        </div>\n                    </div>\n                </li>\n                <li><strong>Diagnostika:</strong> MRI/PET mozku prokazuje asymetrickou <strong>atrofii frontálních a předních temporálních laloků („knife-blade atrophy“)</strong> s výrazným hypometabolismem na FDG-PET.</li>\n                <li><strong>Léčba:</strong> Inhibitory AChE a Memantin u FTD <em>nefungují a mohou zhoršit agitovanost</em>! Terapie je symptomatická: SSRI (trazodon, citalopram) k redukci dezinhibice a stereotypií.</li>\n            </ul>"
          }
        ]
      },
      "recall": {
        "scenarios": [
          {
            "id": "sc-S21-1",
            "title": "Klinická kazuistika – Vaskulární demence, Demence s Lewyho tělísky (DLB) a Frontotemporální demence (FTD)",
            "question": "<strong>Kazuistika:</strong> 56letý vysokoškolský profesor byl propuštěn ze zaměstnání, protože začal na poradách vulgárně urážet kolegy, svlékat se v kanceláři a v obchodě bez placení jíst čokolády. Manželka uvádí, že je zcela lhostejný k rodině a celý den mechanicky přepíná programy v televizi. V testu paměti si vybaví 3 ze 3 slov i po 10 minutách a orientace v prostoru je bezchybná. Neurologické vyšetření je bez ložiskového motorického deficitu.<br><br><strong>Klinický úkol:</strong> Stanovte diagnózu, vysvětlete nesoulad mezi pamětí a chováním a navrhněte adekvátní dovyšetření a léčebný přístup.",
            "answer": "<ul style='margin: 6px 0 0 18px; padding: 0; line-height: 1.5;'><li>Diagnóza: Frontotemporální demence – behaviorální varianta (bvFTD / frontotemporální lobární degenerace) v preseniálním věku.</li><li>Vysvětlení nálezu: Neurodegenerativní proces primárně postihuje frontální korové sítě (orbitofrekvenci a ventromediální prefrontální kortex) zodpovědné za inhibici chování, sociální empatii a exekutivu. Hipokampy a temporoparietální paměťové sítě jsou v časné fázi intaktní, proto má pacient normální paměť a orientaci.</li><li>Dovyšetření: MRI mozku (průkaz selektivní atrofie frontálních a předních temporálních laloků), FDG-PET mozku (výrazný hypometabolismus frontálně).</li><li>Farmakoterapie: Inhibitory acetylcholinesterázy (Donepezil) jsou kontraindikovány (nefungují a mohou zvýšit agitovanost). K redukci impulzivity a dezinhibice se podávají SSRI (např. Citalopram, Trazodon).</li><li>Sociálně-právní kroky: Omezení svéprávnosti a zajištění dohledu rodiny k ochraně financí a prevenci společensky nepřijatelného jednání.</li></ul>",
            "keyPoints": [
              "Diagnóza: Frontotemporální demence – behaviorální varianta (bvFTD / frontotemporální lobární degenerace) v preseniálním věku.",
              "Vysvětlení nálezu: Neurodegenerativní proces primárně postihuje frontální korové sítě (orbitofrekvenci a ventromediální prefrontální kortex) zodpovědné za inhibici chování, sociální empatii a exekutivu. Hipokampy a temporoparietální paměťové sítě jsou v časné fázi intaktní, proto má pacient normální paměť a orientaci.",
              "Dovyšetření: MRI mozku (průkaz selektivní atrofie frontálních a předních temporálních laloků), FDG-PET mozku (výrazný hypometabolismus frontálně).",
              "Farmakoterapie: Inhibitory acetylcholinesterázy (Donepezil) jsou kontraindikovány (nefungují a mohou zvýšit agitovanost). K redukci impulzivity a dezinhibice se podávají SSRI (např. Citalopram, Trazodon).",
              "Sociálně-právní kroky: Omezení svéprávnosti a zajištění dohledu rodiny k ochraně financí a prevenci společensky nepřijatelného jednání."
            ],
            "pearl": "Vaskulární demence má schodovitý průběh, časné exekutivní poruchy, poruchu chůze a pseudobulbární syndrom; základem je prevence cévních rizik."
          }
        ]
      },
      "cards": [
        {
          "id": "fc-S21-1",
          "front": "Jaká je kardinální klinická tetráda Demence s Lewyho tělísky (DLB)?",
          "back": "1. Fluktuující kognice s kolísáním pozornosti, 2. rekurentní detailní zrakové halucinace, 3. spontánní parkinsonský syndrom (rigidita, bradykineze), 4. porucha chování v REM spánku (RBD).",
          "hint": "Speciální neurologie LF OU"
        },
        {
          "id": "fc-S21-2",
          "front": "Proč je podání klasických neuroleptik (např. Haloperidolu) u Demence s Lewyho tělísky přísně kontraindikováno?",
          "back": "Pacienti s DLB mají extrémní přecitlivělost na neuroleptika (neuroleptic sensitivity) – blokáda dopaminových receptorů může vést k fatálnímu prohloubení rigidity, katatonii, komatu či malignímu neuroleptickému syndromu.",
          "hint": "Speciální neurologie LF OU"
        },
        {
          "id": "fc-S21-3",
          "front": "Jaké jsou hlavní klinické projevy behaviorální varianty frontotemporální demence (bvFTD)?",
          "back": "Časná změna osobnosti a sociálního chování: dezinhibice (ztráta společenských zábran), apatie a ztráta empatie, stereotypní a rituální chování, hyperoralita (přejídání, bažení po sladkém) – s relativně zachovalou pamětí a prostorovou orientací v časné fázi.",
          "hint": "Speciální neurologie LF OU"
        }
      ],
      "quiz": [
        {
          "id": "pq-S21-1",
          "question": "Schodovitá (stepwise) progrese kognitivního deficitu v čase s časnou poruchou chůze a pseudobulbárním syndromem je typická pro:",
          "options": [
            "Alzheimerovu nemoc",
            "Vaskulární demenci (VaD)",
            "Frontotemporální demenci",
            "Creutzfeldtovu-Jakobovu nemoc"
          ],
          "correctIndex": 1,
          "explanation": "Schodovité zhoršování stavu (skokový pokles po každé nové ischemické atace s přechodnou stabilizací), časná porucha stability chůze a pseudobulbární syndrom jsou charakteristickými znaky vaskulární demence."
        },
        {
          "id": "pq-S21-2",
          "question": "Lékem první volby pro zlepšení kognice a zmírnění zrakových halucinací u Demence s Lewyho tělísky (DLB) jsou:",
          "options": [
            "Typická neuroleptika (Haloperidol)",
            "Inhibitory acetylcholinesterázy (Donepezil, Rivastigmin)",
            "Vysoké dávky Levodopy",
            "Benzodiazepiny"
          ],
          "correctIndex": 1,
          "explanation": "Inhibitory acetylcholinesterázy (Donepezil, Rivastigmin) výrazně zlepšují cholinergní deficit u DLB, stabilizují kognitivní fluktuace a bezpečně potlačují zrakové halucinace bez rizika neuroleptické toxicity."
        }
      ]
    },
    {
      "id": "s22-alkoholismus-a-posti-en-nervov-ho-syst-m",
      "number": 22,
      "section": "specialni",
      "sectionLabel": "Speciální neurologie",
      "badgePrefix": "S22",
      "title": "Alkoholismus a postižení nervového systému",
      "shortDesc": "Neurologické komplikace chronického abúzu alkoholu: Wernickeova encefalopatie (deficit thiaminu, urgentní i.v. léčba), Korsakovův syndrom, alkoholická polyneuropatie, atrofie vermis cerebelli, centrální pontinní myelinolýza (ODS) a abstinenční syndrom.",
      "category": "toxicke_metabolicke",
      "badge": "Toxická, metabolická & zánětlivá onemocnění CNS",
      "badgeColor": "teal",
      "theory": {
        "banner": {
          "tag": "Speciální neurologie • Otázka S22",
          "title": "Alkoholismus a postižení nervového systému",
          "text": "Neurologické komplikace chronického abúzu alkoholu: Wernickeova encefalopatie (deficit thiaminu, urgentní i.v. léčba), Korsakovův syndrom, alkoholická polyneuropatie, atrofie vermis cerebelli, centrální pontinní myelinolýza (ODS) a abstinenční syndrom."
        },
        "sections": [
          {
            "title": "1. Úvod a Mechanismy neurotoxicity alkoholu",
            "content": "<p>Chronický abúzus ethanolu poškozuje centrální i periferní nervový systém kombinací <strong>přímého neurotoxického působení alkoholu a acetaldehydu</strong>, <strong>nutriční malnutrice</strong> (zejména těžkého deficitu vitaminu $B_1$ – thiaminu) a <strong>sekundárního jaterního selhání</strong> (portosystémová encefalopatie).</p>"
          },
          {
            "title": "2. Wernicke-Korsakovův syndrom (WKS)",
            "content": "<p>Závažné neurologické onemocnění způsobené <strong>akutním deficitem thiaminu (vitamin $B_1$)</strong>, který je kofaktorem klíčových enzymů metabolismu glukózy v mozku (pyruvátdehydrogenáza, transketoláza). Postihuje <em>corpora mamillaria, dorzomediální talamus, periaqueduktální šeď a tegmentum pontu</em>.</p>\n\n            <div class=\"anatomy-grid\">\n                <div class=\"grid-item\">\n                    <h4>Wernickeova encefalopatie (akutní fáze)</h4>\n                    <ul>\n                        <li><strong>Klasická klinická triáda (často neúplná!):</strong>\n                            <ol>\n                                <li><em>Okohybné poruchy (96 %):</em> nystagmus (horizontální i vertikální), oboustranná paréza n. abducens (n. VI), konjugovaná obrna pohledu.</li>\n                                <li><em>Cerebelární ataxie (87 %):</em> ataxie trupu a stoje, titubace, šouravá ataktická chůze o široké bázi.</li>\n                                <li><em>Globální zmatenost a apatie:</em> dezorientace, somnolence, delirium.</li>\n                            </ol>\n                        </li>\n                        <li><strong>Kritické pravidlo léčby:</strong> <strong>Thiamin 200–500 mg i.v. pomalu v infuzi MUSÍ být podán PŘED jakoukoliv infuzí glukózy!</strong> Podání samotné glukózy bez thiaminu spotřebuje poslední zbytky kofaktoru a vyvolá akutní fatální laktátovou acidózu a zánik neuronů.</li>\n                    </ul>\n                </div>\n                <div class=\"grid-item\">\n                    <h4>Korsakovův amnestický syndrom (chronické stádium)</h4>\n                    <ul>\n                        <li>Následek neléčené či pozdně léčené Wernickeovy encefalopatie po atrofii <em>corpora mamillaria</em>.</li>\n                        <li><strong>Klinický obraz:</strong>\n                            <ul>\n                                <li>Těžká <strong>anterográdní i retrográdní amnézie</strong> (neschopnost vštípit si novou informaci déle než na několik sekund).</li>\n                                <li><strong>Konfabulace:</strong> pacient bez ostychu a spontánně zaplňuje paměťové mezery smyšlenými vzpomínkami.</li>\n                                <li>Emoční apatie a anosognózie (popírání nemoci).</li>\n                                <li>Inteligence a ostatní kognitivní funkce mohou být relativně intaktní.</li>\n                            </ul>\n                        </li>\n                    </ul>\n                </div>\n            </div>"
          },
          {
            "title": "3. Další neurologické komplikace alkoholismu",
            "content": "<ul>\n                <li><strong>Alkoholická cerebelární degenerace (atrofie vermis cerebelli):</strong>\n                    <ul>\n                        <li>Selektivní zánik Purkyňových buněk ve frontální části vermis mozečku.</li>\n                        <li><em>Projev:</em> <strong>izolovaná trupová ataxie a ataxie chůze o široké bázi</strong>; cílené pohyby na končetinách (taxe prst-nos, intenční tremor) a řeč bývají ušetřeny! Na MRI patrná atrofie vermis.</li>\n                    </ul>\n                </li>\n                <li><strong>Alkoholická polyneuropatie:</strong>\n                    <ul>\n                        <li>Distální symetrická axonální senzomotorická polyneuropatie (toxický vliv ethanolu + deficit vitamínů skupiny B).</li>\n                        <li>Pálivé dysestezie plosek („burning feet syndrom“), svalové křeče v lýtkách, oslabení až vymizení reflexu šlachy Achillovy (RŠA), trofické kožní změny.</li>\n                    </ul>\n                </li>\n                <li><strong>Centrální pontinní myelinolýza (Osmotický demyelinizační syndrom - ODS):</strong>\n                    <ul>\n                        <li>Vzniká iatrogenně při <strong>příliš rychlé korekci chronické hyponatrémie</strong> (rychlost korekce $Na^+ > 8\text{–}10\text{ mmol/l / 24 hod}$).</li>\n                        <li>Demyelinizace baze pontu $\to$ spastická kvadruplegie, pseudobulbární syndrom a <em>„locked-in“ syndrom</em> (vigilní kóma se zachovalým vertikálním pohledem a mrkáním).</li>\n                    </ul>\n                </li>\n                <li><strong>Morbus Marchiafava-Bignami:</strong> vzácná toxická demyelinizace a nekróza <em>corpus callosum</em> u konzumentů červeného vína (psychotické změny, dyspraxie, záchvaty).</li>\n                <li><strong>Alkoholový abstinenční syndrom a Delirium tremens:</strong>\n                    <ul>\n                        <li>Rozvoj 24–72 hodin po přerušení abúzu: třes, tachykardie, hypertenze, profúzní pocení, epileptické záchvaty typu grand mal (rum fits).</li>\n                        <li><em>Delirium tremens (mortalita až 5–10 %):</em> těžká dezorientace, masivní zrakové mikrohalucinace (drobná zvířata, hmyz – zoopsie), motorický neklid. Léčba: <strong>Klomethiazol (Heminevrin)</strong> nebo vysoké dávky benzodiazepinů (Diazepam i.v.), beta-blokátory, thiamin.</li>\n                    </ul>\n                </li>\n            </ul>"
          }
        ]
      },
      "recall": {
        "scenarios": [
          {
            "id": "sc-S22-1",
            "title": "Klinická kazuistika – Alkoholismus a postižení nervového systému",
            "question": "<strong>Kazuistika:</strong> 52letý bezdomovec s chronickým abúzem alkoholu přivezen RZP pro těžkou zmatenost. Při vyšetření: pacient je dezorientovaný, na očích patrný horizontální a vertikální nystagmus s oboustrannou neschopností abdukce očních bulbů (oboustranná paréza n. VI), v sedu výrazná ataxie trupu a neschopnost samostatného stoje. Sestra připravuje infuzi 10% glukózy pro krevní glykémii 3,8 mmol/l.<br><br><strong>Klinický úkol:</strong> Identifikujte akutní diagnózu, zhodnoťte chybu v postupu sestry a určete okamžitý terapeutický plán.",
            "answer": "<ul style='margin: 6px 0 0 18px; padding: 0; line-height: 1.5;'><li>Diagnóza: Akutní Wernickeova encefalopatie (kompletní klasická triáda: oftalmoplegie n. VI + nystagmus, ataxie stoje a trupu, globální zmatenost při deficitu thiaminu).</li><li>Kritická intervence: Okamžitě zastavit podání infuze glukózy!</li><li>Správný farmakologický postup: Aplikovat vysokou dávku Thiaminu (vitamin B1) 500 mg i.v. v pomalé infuzi ve fyziologickém roztoku (0,9% NaCl) 3x denně po dobu 3–5 dnů.</li><li>Následná péče: Až po zahájení aplikace thiaminu podat roztoky glukózy, doplnit magnesium (kofaktor thiamin-dependentních enzymů), kalium a komplex vitaminů B.</li><li>Prevence chronicity: Včasná léčba zabrání přechodu do trvalého ireverzibilního Korsakovova amnestického syndromu.</li></ul>",
            "keyPoints": [
              "Diagnóza: Akutní Wernickeova encefalopatie (kompletní klasická triáda: oftalmoplegie n. VI + nystagmus, ataxie stoje a trupu, globální zmatenost při deficitu thiaminu).",
              "Kritická intervence: Okamžitě zastavit podání infuze glukózy!",
              "Správný farmakologický postup: Aplikovat vysokou dávku Thiaminu (vitamin B1) 500 mg i.v. v pomalé infuzi ve fyziologickém roztoku (0,9% NaCl) 3x denně po dobu 3–5 dnů.",
              "Následná péče: Až po zahájení aplikace thiaminu podat roztoky glukózy, doplnit magnesium (kofaktor thiamin-dependentních enzymů), kalium a komplex vitaminů B.",
              "Prevence chronicity: Včasná léčba zabrání přechodu do trvalého ireverzibilního Korsakovova amnestického syndromu."
            ],
            "pearl": "Wernickeova encefalopatie (deficit thiaminu B1) se projevuje triádou: oftalmoplegie/nystagmus, ataxie a zmatenost."
          }
        ]
      },
      "cards": [
        {
          "id": "fc-S22-1",
          "front": "Proč je absolutně nutné podat Thiamin (vitamin B1) nitrožilně před zahájením infuze glukózy u malnutričního alkoholika?",
          "back": "Metabolismus glukózy spotřebovává thiamin jako nezbytný kofaktor pyruvátdehydrogenázy. Podání samotné glukózy bez thiaminu vyčerpá minimální rezervy, zablokuje Krebsův cyklus, způsobí masivní laktátovou acidózu a vyvolá akutní fatální Wernickeovu encefalopatii.",
          "hint": "Speciální neurologie LF OU"
        },
        {
          "id": "fc-S22-2",
          "front": "Které příznaky tvoří klasickou triádu Wernickeovy encefalopatie?",
          "back": "1. Okohybné poruchy (nystagmus, oboustranná paréza n. VI, obrna pohledu), 2. cerebelární ataxie (posturální ataxie trupu a chůze), 3. globální zmatenost/alterace mentálního stavu.",
          "hint": "Speciální neurologie LF OU"
        },
        {
          "id": "fc-S22-3",
          "front": "Jaká iatrogenní chyba vede k rozvoji osmotického demyelinizačního syndromu (centrální pontinní myelinolýzy)?",
          "back": "Příliš rychlá nitrožilní korekce chronické hyponatrémie (překročení rychlosti vzestupu natrémie o více než 8–10 mmol/l za 24 hodin).",
          "hint": "Speciální neurologie LF OU"
        }
      ],
      "quiz": [
        {
          "id": "pq-S22-1",
          "question": "Které anatomické struktury mozku jsou nejvíce poškozeny u Korsakovova amnestického syndromu?",
          "options": [
            "Corpora mamillaria a dorzomediální jádra talamu",
            "Putamen a globus pallidus",
            "Přední rohy míšní",
            "Nucleus dentatus mozečku"
          ],
          "correctIndex": 0,
          "explanation": "Neuropatologickým podkladem Korsakovova syndromu je atrofie a hemoragická nekróza corpora mamillaria (součást Papezova paměťového okruhu) a dorzomediálního talamu."
        },
        {
          "id": "pq-S22-2",
          "question": "Při izolované alkoholické cerebelární degeneraci bývá dominujícím klinickým nálezem:",
          "options": [
            "Klidový třes končetin 4 Hz",
            "Ataxie stoje a chůze o široké bázi při relativně zachovalé taxické koordinaci na horních končetinách",
            "Chorea obličeje a jazyka",
            "Spastická kvadruplegie"
          ],
          "correctIndex": 1,
          "explanation": "Alkoholická atrofie vermis mozečku postihuje primárně mediální struktury (vermis cerebelli), proto je vyjádřena těžká trupová ataxie a porucha chůze, zatímco taxe na končetinách (hemisféry) bývá intaktní."
        }
      ]
    },
    {
      "id": "s23-diabetes-mellitus-a-posti-en-nervov-ho-s",
      "number": 23,
      "section": "specialni",
      "sectionLabel": "Speciální neurologie",
      "badgePrefix": "S23",
      "title": "Diabetes mellitus a postižení nervového systému",
      "shortDesc": "Neurologické projevy diabetu: distální symetrická polyneuropatie, diabetická autonomní neuropatie (DAN), diabetická amyotrofie (syndrom Bruns-Garland), kraniální mononeuropatie (n. III s ušetřením zornice) a diabetická noha.",
      "category": "toxicke_metabolicke",
      "badge": "Toxická, metabolická & zánětlivá onemocnění CNS",
      "badgeColor": "teal",
      "theory": {
        "banner": {
          "tag": "Speciální neurologie • Otázka S23",
          "title": "Diabetes mellitus a postižení nervového systému",
          "text": "Neurologické projevy diabetu: distální symetrická polyneuropatie, diabetická autonomní neuropatie (DAN), diabetická amyotrofie (syndrom Bruns-Garland), kraniální mononeuropatie (n. III s ušetřením zornice) a diabetická noha."
        },
        "sections": [
          {
            "title": "1. Úvod a Epidemiologie",
            "content": "<p>Diabetická neuropatie je nejčastější chronickou komplikací <strong>diabetes mellitus 1. i 2. typu</strong> (postihuje až 50 % dlouhodobě léčených diabetiků). Vzniká kombinací <em>mikrovaskulární ischémie (okluze vasa nervorum)</em> a <em>metabolických změn</em> (aktivace polyolové cesty, akumulace sorbitolu, tvorba konečných produktů pokročilé glykace - AGEs, oxidační stres a deficit neurotrofních faktorů).</p>"
          },
          {
            "title": "2. Klasifikace diabetických neuropatií",
            "content": "<div class=\"anatomy-grid\">\n                <div class=\"grid-item\">\n                    <h4>1. Difuzní symetrické neuropatie</h4>\n                    <ul>\n                        <li><strong>Distální symetrická senzomotorická polyneuropatie (DSPN, > 80 %):</strong>\n                            <ul>\n                                <li>Nejčastější forma, závislá na délce axonu („length-dependent“).</li>\n                                <li><em>Senzitivní příznaky:</em> ponožková a rukavicová distribuce. Pálivé noční bolesti, parestezie, alodynie (nesnesitelnost dotyku lůžkovin), ztráta vnímání vibrace (kalibrovaná ladička), tepla, bolesti a polohocitu.</li>\n                                <li><em>Motorické a reflexní:</em> oslabení až vyhasnutí reflexu šlachy Achillovy (RŠA), atrofie drobných svalů nohy (kladívkovité prsty, propadlá klenba).</li>\n                                <li><em>Diabetická noha:</em> necitlivost k bolesti $\to$ vznik otlaků, nehojících se plantárních vředů (malum perforans pedis), flegmóna, Charcotova neuroartropatie a riziko amputace!</li>\n                            </ul>\n                        </li>\n                        <li><strong>Diabetická autonomní neuropatie (DAN):</strong>\n                            <ul>\n                                <li>Kardiovaskulární: <strong>klidová tachykardie</strong> (fixní tepová frekvence bez respirační variability), <strong>ortostatická hypotenze</strong>, <em>němá (tichá) ischémie myokardu</em> bez stenokardie!</li>\n                                <li>Gastrointestinální: diabetická gastroparéza (pocit plnosti, zvracení, kolísání glykémií), noční průjmy, těžká obstipace.</li>\n                                <li>Urogenitální: neurogenní měchýř (atonie, retence), erektilní dysfunkce (> 50 % mužů).</li>\n                                <li>Sudo/vazomotorická: anhidróza nohou (suchá praskající kůže) a kompenzatorní gustatorické pocení na hlavě.</li>\n                            </ul>\n                        </li>\n                    </ul>\n                </div>\n                <div class=\"grid-item\">\n                    <h4>2. Fokální a multifokální neuropatie</h4>\n                    <ul>\n                        <li><strong>Diabetická amyotrofie (Lumbosakrální radikuloplexus neuropatie / Syndrom Bruns-Garland):</strong>\n                            <ul>\n                                <li>Vzniká na podkladě mikrovaskulitidy a ischémie lumbosakrálního plexu.</li>\n                                <li><em>Klinický obraz:</em> <strong>akutní, krutá jednostranná bolest stehna a boku</strong> (často v noci), následovaná rychlým rozvojem <strong>atrofie a těžké parézy m. quadriceps femoris</strong> (neschopnost zvednout nohu, podklesávání kolene, vyhaslý patelární reflex - RP).</li>\n                                <li>Prognóza: spontánní pomalá úprava během 12–24 měsíců.</li>\n                            </ul>\n                        </li>\n                        <li><strong>Kraniální mononeuropatie:</strong>\n                            <ul>\n                                <li><strong>Izolovaná paréza n. oculomotorius (n. III):</strong> náhlá ptóza víčka, diplopie, zevně stočený bulbus. <strong>Zornicový reflex je intaktní (pupil-sparing)</strong>, protože parasympatická vlákna na povrchu nervu jsou zásobena z cév dury a mikrovaskulární infarkt postihuje pouze centrální část nervu! (Odlišení od komprese aneuryzmatem a. communicans posterior, kde je vždy mydriáza!).</li>\n                                <li>Mononeuropatie n. VI, n. IV, n. VII.</li>\n                            </ul>\n                        </li>\n                        <li><strong>Úžinové syndromy:</strong> diabetické nervy jsou náchylné k tlaku – vysoká incidence syndromu karpálního tunelu (n. medianus) a kubitálního tunelu (n. ulnaris).</li>\n                    </ul>\n                </div>\n            </div>"
          },
          {
            "title": "3. Diagnostika diabetické neuropatie",
            "content": "<ul>\n                <li><strong>Klinický screening:</strong> vyšetření vibračního čití (kalibrovaná ladička 64 Hz, patologie < 4/8), taktilního čití (Semmes-Weinsteinovo monofilamentum 10 g na plantě – prediktor vředů), termického čití (Tip-Therm) a reflexů (RŠA, RP).</li>\n                <li><strong>Elektromyografie (EMG - kondukční studie):</strong> snížení senzitivních i motorických amplitud (SNAP, CMAP) se zpomalením rychlostí vedení (projev senzomotorické axonálně-demyelinizační léze).</li>\n                <li><strong>Kardiovaskulární autonomní testy (Ewingova baterie):</strong> změna TF při hlubokém dýchání (E/I ratio), ortostatický test (30:15 ratio), Valsalvův manévr.</li>\n            </ul>"
          },
          {
            "title": "4. Léčba diabetické neuropatie",
            "content": "<ol>\n                <li><strong>Kauzální a metabolická léčba:</strong> striktní a stabilní kompenzace diabetu (HbA1c < 45–53 mmol/mol) – zabraňuje progresi a vzniku nových komplikací. Kyselina thioktová ($\u0007lpha$-lipoová, 600 mg i.v./p.o. – silný antioxidant).</li>\n                <li><strong>Symptomatická léčba bolestivé polyneuropatie:</strong>\n                    <ul>\n                        <li><em>Antiepileptika (ligandy $\u0007lpha_2\\delta$ podjednotky vápníkových kanálů):</em> <strong>Pregabalin</strong> (150–600 mg/den), <strong>Gabapentin</strong> (900–2400 mg/den).</li>\n                        <li><em>Antidepresiva (SNRI a TCA):</em> <strong>Duloxetin</strong> (60–120 mg/den – lék 1. volby), Venlafaxin, Amitriptylin.</li>\n                        <li><em>Lokální terapie:</em> Kapsaicinové náplasti (8% Qutenza).</li>\n                    </ul>\n                </li>\n                <li><strong>Péče o nohy a edukace:</strong> každodenní inspekce nohou, speciální diabetická obuv s bezešvou vložkou, včasná léčba otlaků v podiatrické poradně.</li>\n            </ol>"
          }
        ]
      },
      "recall": {
        "scenarios": [
          {
            "id": "sc-S23-1",
            "title": "Klinická kazuistika – Diabetes mellitus a postižení nervového systému",
            "question": "<strong>Kazuistika:</strong> 64letý diabetik 2. typu přichází pro 6 měsíců progredující pálení plosek nohou zhoršující se v noci, pocit 'chůze jako po mechu' a nedávný nebolestivý vřed pod hlavičkou 1. metatarzu vpravo. Při vyšetření: ladička na mediálním kotníku 1/8 oboustranně, monofilamentum necítí na 4 z 5 bodů plosky, reflexy šlachy Achillovy nevýbavné, pulzace na a. dorsalis pedis hmatné.<br><br><strong>Klinický úkol:</strong> Stanovte diagnózu, zhodnoťte riziko diabetické nohy a navrhněte komplexní léčebný a preventivní plán.",
            "answer": "<ul style='margin: 6px 0 0 18px; padding: 0; line-height: 1.5;'><li>Diagnóza: Diabetická distální symetrická senzomotorická polyneuropatie (DSPN) s těžkou poruchou hlubokého i povrchového čití a vznikem neuropatického vředu (diabetická noha Wagner 1).</li><li>Patofyziologie: Ztráta protektivního čití bolesti a tlaku vede k nepozorovanému mechanickému přetížení a vzniku trofických defektů.</li><li>Terapie neuropatické bolesti: Zahájit léčbu Duloxetinem (30 mg titrovat na 60 mg denně) nebo Pregabalinem (75 mg 2x denně).</li><li>Metabolická kontrola: Optimalizace kompenzace diabetu (úprava perorálních antidiabetik/inzulínu k cílovému HbA1c), zvážení antioxidační léčby kyselinou thioktovou (alfa-lipoovou) 600 mg denně.</li><li>Podiatrická péče: Lokální ošetření vředu, odlehčení planty speciální terapeutickou obuví, edukace každodenní vizuální kontroly nohou a zákaz chůze naboso.</li></ul>",
            "keyPoints": [
              "Diagnóza: Diabetická distální symetrická senzomotorická polyneuropatie (DSPN) s těžkou poruchou hlubokého i povrchového čití a vznikem neuropatického vředu (diabetická noha Wagner 1).",
              "Patofyziologie: Ztráta protektivního čití bolesti a tlaku vede k nepozorovanému mechanickému přetížení a vzniku trofických defektů.",
              "Terapie neuropatické bolesti: Zahájit léčbu Duloxetinem (30 mg titrovat na 60 mg denně) nebo Pregabalinem (75 mg 2x denně).",
              "Metabolická kontrola: Optimalizace kompenzace diabetu (úprava perorálních antidiabetik/inzulínu k cílovému HbA1c), zvážení antioxidační léčby kyselinou thioktovou (alfa-lipoovou) 600 mg denně.",
              "Podiatrická péče: Lokální ošetření vředu, odlehčení planty speciální terapeutickou obuví, edukace každodenní vizuální kontroly nohou a zákaz chůze naboso."
            ],
            "pearl": "Diabetická distální symetrická polyneuropatie (DSPN) se projevuje ponožkovou hypestézií, pálivou bolestí, ztrátou vibrací a vyhaslým RŠA."
          }
        ]
      },
      "cards": [
        {
          "id": "fc-S23-1",
          "front": "Proč má diabetická mikroangiopatická paréza n. oculomotorius (n. III) zachovanou fotoreakci a zornici (tzv. pupil-sparing)?",
          "back": "Protože ischemie z okluze vasa nervorum postihuje centrální jádro nervu, zatímco povrchová parasympatická vlákna inervující zornici (m. sphincter pupillae) jsou zásobena kolaterálním difuzním tokem z plen a zůstávají intaktní (na rozdíl od vnějšího útlaku aneuryzmatem).",
          "hint": "Speciální neurologie LF OU"
        },
        {
          "id": "fc-S23-2",
          "front": "Co charakterizuje syndrom Bruns-Garland (diabetickou amyotrofii)?",
          "back": "Akutní až subakutní krutá jednostranná bolest v boku a stehně, po které rychle následuje masivní atrofie a slabost m. quadriceps femoris s vymizením patelárního reflexu na podkladě ischemické plexopatie.",
          "hint": "Speciální neurologie LF OU"
        },
        {
          "id": "fc-S23-3",
          "front": "Které dvě lékové skupiny jsou první volbou v symptomatické léčbě bolestivé diabetické polyneuropatie?",
          "back": "1. SNRI antidepresiva (Duloxetin), 2. Gabapentinoidy (Pregabalin nebo Gabapentin).",
          "hint": "Speciální neurologie LF OU"
        }
      ],
      "quiz": [
        {
          "id": "pq-S23-1",
          "question": "Který z následujících příznaků je typickým a nebezpečným projevem kardiovaskulární diabetické autonomní neuropatie (DAN)?",
          "options": [
            "Klidová bradykardie pod 50/min",
            "Němá (asymptomatická) ischémie a infarkt myokardu bez stenokardie",
            "Zvýšená variabilita srdeční frekvence při dýchání",
            "Hypertenzní krize výhradně vestoje"
          ],
          "correctIndex": 1,
          "explanation": "Autonomní denervace myokardu vede ke ztrátě aferentního vedení viscerální bolesti ze srdce, což způsobuje, že ischémie i akutní infarkt myokardu mohou proběhnout zcela bezbolestně (němý infarkt)."
        },
        {
          "id": "pq-S23-2",
          "question": "Které vyšetření je nejvhodnějším rychlým screeningovým testem pro hodnocení ztráty protektivního taktilního čití na plosce nohy?",
          "options": [
            "Semmes-Weinsteinovo 10g monofilamentum",
            "Termoelektroda",
            "Babinského reflex",
            "Posturální test"
          ],
          "correctIndex": 0,
          "explanation": "Aplikace 10g Semmes-Weinsteinova monofilamenta na standardní body planty nohy je celosvětově doporučeným screeningem k detekci ztráty protektivního čití a stratifikaci rizika ulcerací."
        }
      ]
    },
    {
      "id": "s24-roztrou-en-skler-za-mozkom-n-sclerosis-m",
      "number": 24,
      "section": "specialni",
      "sectionLabel": "Speciální neurologie",
      "badgePrefix": "S24",
      "title": "Roztroušená skleróza mozkomíšní (Sclerosis multiplex)",
      "shortDesc": "Sclerosis multiplex (RS): etiopatogeneze (autoimunitní zánět, demyelinizace a neurodegenerace), klinické formy (CIS, RRRS, SPMS, PPMS), McDonaldova kritéria (diseminace v čase a prostoru), likvor (oligoklonální pásy IgG), akutní relaps (solu-medrol) a moderní chorobu modifikující léčba (DMT).",
      "category": "autoimunitni_demyelinizace",
      "badge": "Autoimunitní & Demyelinizační onemocnění CNS",
      "badgeColor": "teal",
      "theory": {
        "banner": {
          "tag": "Speciální neurologie • Otázka S24",
          "title": "Roztroušená skleróza mozkomíšní (Sclerosis multiplex)",
          "text": "Sclerosis multiplex (RS): etiopatogeneze (autoimunitní zánět, demyelinizace a neurodegenerace), klinické formy (CIS, RRRS, SPMS, PPMS), McDonaldova kritéria (diseminace v čase a prostoru), likvor (oligoklonální pásy IgG), akutní relaps (solu-medrol) a moderní chorobu modifikující léčba (DMT)."
        },
        "sections": [
          {
            "title": "1. Úvod a Epidemiologie",
            "content": "<p><strong>Roztroušená skleróza (RS / Sclerosis multiplex - SM)</strong> je chronické autoimunitní zánětlivé, demyelinizační a neurodegenerativní onemocnění centrálního nervového systému. Je nejčastější netraumatickou příčinou invalidizace mladých dospělých (manifestace typicky mezi <strong>20.–40. rokem věku</strong>, 3x častější u žen). ČR patří k zemím s vysokou prevalencí (> 200 případů / 100 000 obyvatel).</p>"
          },
          {
            "title": "2. Etiopatogeneze a Neuropatologie",
            "content": "<ul>\n                <li><strong>Autoimunitní zánětlivá fáze:</strong> autoreaktivní $CD4^+$ a $CD8^+$ T-lymfocyty a B-lymfocyty pronikají přes porušenou hematoencefalickou bariéru do CNS $\to$ zánětlivá reakce namířená proti antigenům myelinové pochvy (MBP, MOG) $\to$ <strong>rozpad myelinu (demyelinizace)</strong> a edém (akutní plak).</li>\n                <li><strong>Neurodegenerativní fáze:</strong> zánik oligodendrocytů, časné poškození a <strong>trvalá transekce axonů</strong> a astroglióza (sklerotická jizva) $\to$ ireverzibilní mozková a míšní atrofie zodpovědná za trvalou progresi disability.</li>\n            </ul>"
          },
          {
            "title": "3. Klinické formy a Průběh onemocnění",
            "content": "<div class=\"anatomy-grid\">\n                <div class=\"grid-item\">\n                    <h4>Klinické fenotypy RS</h4>\n                    <ul>\n                        <li><strong>Klinicky izolovaný syndrom (CIS):</strong> první akutní neurologická ataka suspektní z demyelinizace (např. jednostranná retrobulbární neuritida).</li>\n                        <li><strong>Relabující-remitentní RS (RRRS, 85 %):</strong> střídání <em>relapsů</em> (nový ložiskový deficit trvající > 24 hod bez infekce) s obdobími úplné nebo částečné <em>remise</em>.</li>\n                        <li><strong>Sekundárně progresivní RS (SPMS):</strong> po 10–20 letech trvání RRRS dochází k postupnému trvalému nárůstu disability i bez přítomnosti relapsů.</li>\n                        <li><strong>Primárně progresivní RS (PPMS, 10–15 %):</strong> pozvolná kontinuální progrese neurologického deficitu od samého počátku bez relapsů (typicky progredující spastická paraparéza u pacientů kolem 40–50 let).</li>\n                    </ul>\n                </div>\n                <div class=\"grid-item\">\n                    <h4>Typické klinické příznaky</h4>\n                    <ul>\n                        <li><strong>Optická (retrobulbární) neuritida:</strong> jednostranný pokles zrakové ostrosti, retrobulbární bolest oka při pohledu do stran, porucha barvocitu (dyschromatopsie – červená barva).</li>\n                        <li><strong>Kmenové a mozečkové příznaky:</strong> internukleární oftalmoplegie (INO – léze MLF), diplopie, rotační vertigo, ataxie, intenční třes, dysartrie (<em>Charcotova triáda: nystagmus, intenční tremor, skandovaná řeč</em>).</li>\n                        <li><strong>Míšní příznaky:</strong> spastická paraparéza dolních končetin, poruchy citlivosti, urgentní mikce/inkontinence.</li>\n                        <li><strong>Specifické fenomény:</strong>\n                            <ul>\n                                <li><em>Lhermitteův příznak:</em> pocit průchodu elektrického proudu páteří do končetin při předklonu hlavy (demylinizace krční míchy).</li>\n                                <li><em>Uhthoffův fenomén:</em> přechodné zhoršení symptomů při zvýšení tělesné teploty (horká koupel, cvičení, horečka) v důsledku bloku vedení v demyelinizovaných axonech.</li>\n                            </ul>\n                        </li>\n                    </ul>\n                </div>\n            </div>"
          },
          {
            "title": "4. Diagnostika (McDonaldova revidovaná kritéria 2017)",
            "content": "<p>Diagnóza vyžaduje průkaz <strong>diseminace v prostoru (DIS)</strong> a <strong>diseminace v čase (DIT)</strong> a vyloučení jiných onemocnění:</p>\n            <ol>\n                <li><strong>Magnetická rezonance (MRI mozku a celé míchy):</strong>\n                    <ul>\n                        <li><em>DIS (Dissemination in Space):</em> $\\ge 1$ T2-hyperintenzní léze v alespoň 2 ze 4 typických lokalizací CNS: <strong>periventrikulární</strong> (Dawsonovy prsty orientované kolmo na komoru), <strong>kortikální/juxtakortikální</strong>, <strong>infratentoriální</strong> (mozkový kmen, mozeček) a <strong>míšní</strong>.</li>\n                        <li><em>DIT (Dissemination in Time):</em> simultánní přítomnost asymptomatických gadolinium-enhancujících (aktivních) a neenhancujících lézí na jednom skenu NEBO vznik nové T2/Gd+ léze na kontrolním MRI.</li>\n                    </ul>\n                </li>\n                <li><strong>Vyšetření mozkomíšního moku (Lumbální punkce):</strong>\n                    <ul>\n                        <li><strong>Izofokusace likvoru:</strong> průkaz <strong>oligoklonálních IgG pásů (OCB) v likvoru</strong> (typ 2 nebo 3 – intratekální syntéza přítomna v likvoru, ale chybí v séru). Přítomnost OCB v likvoru může nahradit kritérium diseminace v čase (DIT)!</li>\n                        <li>Základní likvor: normální glukóza a laktát, lehká lymfocytární pleocytóza (< 30–50 buněk), mírná proteinorachie.</li>\n                    </ul>\n                </li>\n                <li><strong>Evokované potenciály (VEP - zrakové evokované potenciály):</strong> prodloužení latence vlny P100 svědčí pro subklinickou demyelinizaci n. opticus.</li>\n            </ol>"
          },
          {
            "title": "5. Léčba Roztroušené sklerózy",
            "content": "<ul>\n                <li><strong>1. Léčba akutního relapsu:</strong>\n                    <ul>\n                        <li><strong>Vysokodávkovaný Metylprednizolon (Solu-Medrol):</strong> <strong>3–5 g i.v.</strong> (podáváno 1 g i.v. denně v infuzi po 3–5 po sobě jdoucích dnů) + gastroprotekce (PPI).</li>\n                        <li>Při refrakterním těžkém relapsu: terapeutická plazmaferéza (PE / TPE).</li>\n                    </ul>\n                </li>\n                <li><strong>2. Dlouhodobá chorobu modifikující léčba (DMT - Disease Modifying Therapy):</strong>\n                    <ul>\n                        <li><em>Základní (1. linie):</em> Interferon-beta (Avonex, Rebif, Betaferon), Glatiramer acetát (Copaxone), Teriflunomid, Dimethyl fumarát (Tecfidera).</li>\n                        <li><em>Vysoce účinná léčba (HET - High-Efficacy Therapy):</em>\n                            <ul>\n                                <li><strong>Monoklonální protilátky anti-CD20 (B-lytická léčba):</strong> <strong>Ocrelizumab</strong> (infuze 1x za 6 měsíců – schválen pro RRRS i <em>PPMS</em>!), <strong>Ofatumumab</strong> (s.c. 1x měsíčně).</li>\n                                <li><strong>Anti-integrin $\u0007lpha_4$:</strong> <strong>Natalizumab (Tysabri)</strong> – blokuje migraci lymfocytů do CNS; vyžaduje testování anti-JCV protilátek kvůli riziku <em>progresivní multifokální leukoencefalopatie (PML)</em>.</li>\n                                <li><strong>Modulátory S1P receptorů:</strong> Fingolimod, Ponesimod, Ozanimod (zadržují lymfocyty v uzlinách).</li>\n                                <li><strong>Indukční terapie:</strong> Cladribin (Mavenclad – perorální pulzní chemoterapie), Alemtuzumab (anti-CD52).</li>\n                            </ul>\n                        </li>\n                    </ul>\n                </li>\n                <li><strong>3. Symptomatická léčba:</strong> Baklofen / Tizanidin na spasticitu, Fampridin na zlepšení chůze, Solifenacin na hyperaktivní močový měchýř.</li>\n            </ul>"
          }
        ]
      },
      "recall": {
        "scenarios": [
          {
            "id": "sc-S24-1",
            "title": "Klinická kazuistika – Roztroušená skleróza mozkomíšní (Sclerosis multiplex)",
            "question": "<strong>Kazuistika:</strong> 26letá žena přichází pro týden trvající zamlžené vidění levého oka s bolestí za okem při pohybu a poruchou vnímání červené barvy. Před rokem prodělala přechodné 3týdenní brnění obou dolních končetin od pasu dolů. MRI mozku prokazuje 4 T2-hyperintenzní oválné léze v periventrikulární bílé hmotě orientované kolmo na komory (Dawsonovy prsty), z nichž jedna vychytává gadolinium, a lumbální punkce prokazuje 6 specifických oligoklonálních IgG pásů v likvoru (typ 2).<br><br><strong>Klinický úkol:</strong> Stanovte diagnózu dle McDonaldových kritérií, popište okamžitou léčbu oční ataky a doporučte dlouhodobou strategii.",
            "answer": "<ul style='margin: 6px 0 0 18px; padding: 0; line-height: 1.5;'><li>Diagnóza: Klinicky definitivní roztroušená skleróza (relabující-remitentní forma - RRRS).</li><li>Splnění McDonaldových kritérií: Splněna diseminace v prostoru (periventrikulární léze + n. opticus), diseminace v čase je prokázána přítomností současně enhancující a neenhancující léze na MRI i pozitivitou oligoklonálních IgG pásů (OCB typ 2).</li><li>Okamžitá léčba ataky (retrobulbární neuritidy): Metylprednizolon (Solu-Medrol) 1 g i.v. denně v infuzi po dobu 3–5 dnů s krytím žaludeční sliznice PPI.</li><li>Dlouhodobá léčba (DMT): Včasné zahájení chorobu modifikující léčby v RS centru (zvolení vysoce účinné terapie HET – např. anti-CD20 monoklonální protilátky Ocrelizumab/Ofatumumab nebo perorální Cladribin/Fingolimod) k potlačení další zánětlivé i neurodegenerativní aktivity.</li><li>Dispenzarizace: Pravidelné sledování neurologického nálezu (EDSS skóre) a kontrolní MRI mozku v intervalu 6–12 měsíců.</li></ul>",
            "keyPoints": [
              "Diagnóza: Klinicky definitivní roztroušená skleróza (relabující-remitentní forma - RRRS).",
              "Splnění McDonaldových kritérií: Splněna diseminace v prostoru (periventrikulární léze + n. opticus), diseminace v čase je prokázána přítomností současně enhancující a neenhancující léze na MRI i pozitivitou oligoklonálních IgG pásů (OCB typ 2).",
              "Okamžitá léčba ataky (retrobulbární neuritidy): Metylprednizolon (Solu-Medrol) 1 g i.v. denně v infuzi po dobu 3–5 dnů s krytím žaludeční sliznice PPI.",
              "Dlouhodobá léčba (DMT): Včasné zahájení chorobu modifikující léčby v RS centru (zvolení vysoce účinné terapie HET – např. anti-CD20 monoklonální protilátky Ocrelizumab/Ofatumumab nebo perorální Cladribin/Fingolimod) k potlačení další zánětlivé i neurodegenerativní aktivity.",
              "Dispenzarizace: Pravidelné sledování neurologického nálezu (EDSS skóre) a kontrolní MRI mozku v intervalu 6–12 měsíců."
            ],
            "pearl": "Roztroušená skleróza je autoimunitní demyelinizační onemocnění mladých dospělých (20–40 let)."
          }
        ]
      },
      "cards": [
        {
          "id": "fc-S24-1",
          "front": "Jaký je standardní léčebný protokol pro akutní ataku (relaps) roztroušené sklerózy?",
          "back": "Vysokodávkovaný Metylprednizolon (Solu-Medrol) v dávce 3–5 g i.v. celkově, podávaný jako 1 g i.v. v infuzi denně po dobu 3 až 5 po sobě jdoucích dnů s krytím inhibitorem protonové pumpy (PPI).",
          "hint": "Speciální neurologie LF OU"
        },
        {
          "id": "fc-S24-2",
          "front": "Co znamená Uhthoffův fenomén u pacientů s roztroušenou sklerózou?",
          "back": "Přechodné zhoršení stávajících neurologických symptomů nebo dočasný návrat dřívějšího deficitu vyvolaný zvýšením tělesné teploty (např. při horké koupeli, cvičení, sauně nebo horečce) v důsledku teplotní blokády vedení vzruchu v demyelinizovaných nervových vláknech.",
          "hint": "Speciální neurologie LF OU"
        },
        {
          "id": "fc-S24-3",
          "front": "Které čtyři anatomické oblasti CNS hodnotí McDonaldova kritéria pro průkaz diseminace v prostoru (DIS) na MRI?",
          "back": "1. Periventrikulární oblast, 2. Kortikální nebo juxtakortikální oblast, 3. Infratentoriální oblast (kmen a mozeček), 4. Mícha.",
          "hint": "Speciální neurologie LF OU"
        }
      ],
      "quiz": [
        {
          "id": "pq-S24-1",
          "question": "Průkaz kterého laboratorního nálezu v likvoru podporuje diagnózu roztroušené sklerózy a může nahradit kritérium diseminace v čase (DIT)?",
          "options": [
            "Izolovaná masivní neutrofilní pleocytóza",
            "Přítomnost intratekálních oligoklonálních IgG pásů (OCB typ 2 nebo 3)",
            "Extrémní hypoglykorachie pod 1 mmol/l",
            "Pozitivita 14-3-3 proteinu"
          ],
          "correctIndex": 1,
          "explanation": "Podle revidovaných McDonaldových kritérií 2017 přítomnost specifických oligoklonálních IgG pásů v likvoru (svědčících pro chronickou intratekální syntézu protilátek) nahrazuje potřebu průkazu diseminace v čase u pacientů s typickým CIS."
        },
        {
          "id": "pq-S24-2",
          "question": "Při léčbě kterým vysoce účinným lékem roztroušené sklerózy (anti-integrin alfa-4) je nutné přísně monitorovat protilátky proti JC viru kvůli riziku PML?",
          "options": [
            "Glatiramer acetát",
            "Natalizumab (Tysabri)",
            "Interferon beta-1a",
            "Teriflunomid"
          ],
          "correctIndex": 1,
          "explanation": "Natalizumab blokuje integrin alfa-4 a brání vstupu lymfocytů do CNS. U pacientů s pozitivitou protilátek proti JC viru vzniká při léčbě trvající déle než 2 roky vysoké riziko oportunní infekce – progresivní multifokální leukoencefalopatie (PML)."
        }
      ]
    },
    {
      "id": "s25-jin-nutri-n-a-karen-n-posti-en-nervov-ho",
      "number": 25,
      "section": "specialni",
      "sectionLabel": "Speciální neurologie",
      "badgePrefix": "S25",
      "title": "Jiná nutriční a karenční postižení nervového systému",
      "shortDesc": "Karenční neurologické syndromy: deficit vitaminu B12 (subakutní kombinovaná degenerace míchy / funikulární myelóza), deficit kyseliny listové, deficit vitaminu E, deficit mědi a periferní neuropatie z karence pyridoxinu (B6).",
      "category": "toxicke_metabolicke",
      "badge": "Toxická, metabolická & zánětlivá onemocnění CNS",
      "badgeColor": "teal",
      "theory": {
        "banner": {
          "tag": "Speciální neurologie • Otázka S25",
          "title": "Jiná nutriční a karenční postižení nervového systému",
          "text": "Karenční neurologické syndromy: deficit vitaminu B12 (subakutní kombinovaná degenerace míchy / funikulární myelóza), deficit kyseliny listové, deficit vitaminu E, deficit mědi a periferní neuropatie z karence pyridoxinu (B6)."
        },
        "sections": [
          {
            "title": "1. Úvod do nutričních neurokarencí",
            "content": "<p>Nervová tkáň je extrémně citlivá na nedostatek esenciálních vitaminů a stopových prvků, které slouží jako koenzymy v metabolismu lipidů, syntéze neurotransmiterů a udržování integrity myelinových pochev. K deficitům dochází při <strong>malnutrici, malabsorpci</strong> (celiakie, bariatrická chirurgie, resekce žaludku/ilea, Crohnova choroba), chronickém alkoholismu a striktním veganství bez suplementace.</p>"
          },
          {
            "title": "2. Deficit Vitaminu $B_{12}$ (Kobalaminu) a Funikulární myelóza",
            "content": "<ul>\n                <li><strong>Etiologie:</strong> perniciózní anémie (autoimunitní atrofická gastritida s autoprotilátkami proti vnitřnímu faktoru - IF a parietálním buňkám), stav po gastrektomii či resekci terminálního ilea, striktní veganství, dlouhodobé užívání inhibitorů protonové pumpy (PPI) a metforminu.</li>\n                <li><strong>Patofyziologie:</strong> deficit kobalaminu blokuje enzymy <em>metioninsyntázu</em> a <em>metylmalonyl-CoA mutázu</em> $\to$ akumulace kyseliny metylmalonové a homocysteinu s poruchou syntézy myelinu a <strong>vakuolární degenerací zadních a postranních provazců míchy</strong>.</li>\n                <li><strong>Klinický obraz – Subakutní kombinovaná degenerace míchy (Funikulární myelóza):</strong>\n                    <ol>\n                        <li><em>Léze zadních provazců (Fasciculus gracilis et cuneatus):</em> <strong>ztráta vibračního čití a hlubokého polohocitu</strong> (propriocepce), senzorická spinální ataxie (prudké zhoršení stability při zavření očí – Romberg +++), chůze s dopadem na paty.</li>\n                        <li><em>Léze postranních provazců (Tractus corticospinalis):</em> <strong>spastická paraparéza</strong> dolních končetin, pyramidové jevy spastické (Babinski oboustranně pozitivní).</li>\n                        <li><em>Periferní polyneuropatie:</em> pálivé parestezie nohou a rukou, paradoxní <strong>vyhasnutí reflexu šlachy Achillovy (RŠA) při současně pozitivním Babinském</strong>!</li>\n                        <li><em>Neuropsychiatrické příznaky („megaloblastické šílenství“):</em> deprese, kognitivní deficit, zmatenost, apatie až demence.</li>\n                    </ol>\n                </li>\n                <li><strong>Diagnostika:</strong>\n                    <ul>\n                        <li>Laboratoř: snížená hladina $B_{12}$ v séru, <strong>elevace kyseliny metylmalonové (MMA) a homocysteinu</strong> (vysoce senzitivní markery buněčného deficitu!), makrocytární hyperchromní anémie s megaloblasty v kostní dřeni (neurologické příznaky však mohou předcházet anémii!).</li>\n                        <li>MRI míchy: hyperintenzita zadních provazců v T2 vážení (charakteristický obraz <em>„obráceného V“</em> v cervikální a hrudní míše).</li>\n                    </ul>\n                </li>\n                <li><strong>Léčba:</strong> <strong>Kyanokobalamin / Hydroxokobalamin 1000 $\\mu g$ i.m.</strong> denně po dobu 1–2 týdnů, dále 1x týdně a následně celoživotně 1x měsíčně i.m. (neurologický deficit může být při pozdním záchytu ireverzibilní!).</li>\n            </ul>"
          },
          {
            "title": "3. Další významné karenční stavy v neurologii",
            "content": "<table class=\"data-table\">\n                <thead>\n                    <tr>\n                        <th>Nutriční deficit</th>\n                        <th>Klinické neurologické projevy</th>\n                        <th>Poznámka / Diagnostika</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr>\n                        <td><strong>Kyselina listová (Folát, $B_9$)</strong></td>\n                        <td>Senzomotorická polyneuropatie, neuropsychiatrické poruchy (deprese, kognitivní porucha). V těhotenství: vysoké riziko <em>defektů neurální trubice (spina bifida, anencefalie)</em>.</td>\n                        <td>Korekce samotného folátu bez $B_{12}$ u kombinovaného deficitu zamaskuje anémii, ale urychlí progresi funikulární myelózy!</td>\n                    </tr>\n                    <tr>\n                        <td><strong>Vitamin E ($\u0007lpha$-tokoferol)</strong></td>\n                        <td><strong>Ataxie s deficitem vitaminu E (AVED):</strong> spinocerebelární ataxie, ztráta propriocepce a vibrace, areflexie, retinitis pigmentosa (napodobuje Friedreichovu ataxii).</td>\n                        <td>Při těžké malabsorpci tuků (cystická fibróza, abetalipoproteinémie) nebo genetickém defektu transportního proteinu.</td>\n                    </tr>\n                    <tr>\n                        <td><strong>Měď ($Cu$)</strong></td>\n                        <td><strong>Měď-karenční myeloneuropatie:</strong> klinicky i radiologicky <em>zcela identický obraz s funikulární myelózou</em> (spastická ataxie, léze zadních a postranních provazců).</td>\n                        <td>Často po bariatrických operacích žaludku nebo při nadměrném příjmu zinku (který blokuje vstřebávání mědi v tenkém střevě).</td>\n                    </tr>\n                    <tr>\n                        <td><strong>Pyridoxin ($B_6$)</strong></td>\n                        <td><em>Deficit:</em> senzomotorická periferní neuropatie, u novorozenců farmakorezistentní epileptické záchvaty. <em>Hypervitaminóza ($> 200\text{–}500\text{ mg/den}$):</em> těžká toxická senzitivní neuronopatie (ganglionopatie).</td>\n                        <td>Deficit vzniká při léčbě <em>Isoniazidem (INH)</em> u tuberkulózy – nutno vždy profylakticky podávat pyridoxin!</td>\n                    </tr>\n                </tbody>\n            </table>"
          }
        ]
      },
      "recall": {
        "scenarios": [
          {
            "id": "sc-S25-1",
            "title": "Klinická kazuistika – Jiná nutriční a karenční postižení nervového systému",
            "question": "<strong>Kazuistika:</strong> 59letá veganka s anamnézou resekce ilea pro Crohnovu chorobu vyšetřována pro 4 měsíce progredující nejistotu při chůzi ve tmě a pálivé brnění chodidel. Při vyšetření: těžká porucha polohocitu na prstcích nohou, nulové vnímání vibrace ladičkou na kotnících i kolenou, Rombergův příznak prudce pozitivní se zavřenýma očima, spastická chůze, reflex šlachy Achillovy nevýbavný, ale oboustranně pozitivní Babinského jev.<br><br><strong>Klinický úkol:</strong> Stanovte diagnózu, vysvětlete disociaci reflexů a navrhněte laboratorní a substituční terapii.",
            "answer": "<ul style='margin: 6px 0 0 18px; padding: 0; line-height: 1.5;'><li>Diagnóza: Subakutní kombinovaná degenerace míchy (funikulární myelóza) s periferní polyneuropatií při těžkém deficitu vitaminu B12 (kombinace veganství a malabsorpce po resekci ilea).</li><li>Vysvětlení reflexního nálezu: Pozitivní Babinski svědčí pro centrální lézi pyramidové dráhy v postranních provazcích míchy, zatímco vyhaslý reflex šlachy Achillovy (RŠA) odráží současnou axonální periferní polyneuropatii.</li><li>Laboratorní potvrzení: Hladina vitaminu B12 v séru, kyselina metylmalonová (MMA), homocystein, krevní obraz (MCV > 100 fl).</li><li>MRI nález: T2 hyperintenzita zadních provazců cervikální míchy (obraz obráceného písmene V).</li><li>Léčba: Intramuskulární aplikace Kyanokobalaminu 1000 $\\mu g$ i.m. denně po dobu 10–14 dnů, následně 1x týdně a dále celoživotně 1x měsíčně i.m. (perorální podání je kvůli resekci ilea neúčinné).</li></ul>",
            "keyPoints": [
              "Diagnóza: Subakutní kombinovaná degenerace míchy (funikulární myelóza) s periferní polyneuropatií při těžkém deficitu vitaminu B12 (kombinace veganství a malabsorpce po resekci ilea).",
              "Vysvětlení reflexního nálezu: Pozitivní Babinski svědčí pro centrální lézi pyramidové dráhy v postranních provazcích míchy, zatímco vyhaslý reflex šlachy Achillovy (RŠA) odráží současnou axonální periferní polyneuropatii.",
              "Laboratorní potvrzení: Hladina vitaminu B12 v séru, kyselina metylmalonová (MMA), homocystein, krevní obraz (MCV > 100 fl).",
              "MRI nález: T2 hyperintenzita zadních provazců cervikální míchy (obraz obráceného písmene V).",
              "Léčba: Intramuskulární aplikace Kyanokobalaminu 1000 $\\mu g$ i.m. denně po dobu 10–14 dnů, následně 1x týdně a dále celoživotně 1x měsíčně i.m. (perorální podání je kvůli resekci ilea neúčinné)."
            ],
            "pearl": "Deficit vitaminu B12 vyvolává funikulární myelózu (subakutní kombinovanou degeneraci zadních a postranních provazců míchy)."
          }
        ]
      },
      "cards": [
        {
          "id": "fc-S25-1",
          "front": "Které míšní dráhy jsou selektivně postiženy u funikulární myelózy při deficitu vitaminu B12?",
          "back": "Zadní provazce míchy (fasciculus gracilis et cuneatus – výpadek vibrace a hluboké propriocepce se spinální ataxií) a postranní provazce míchy (tractus corticospinalis – spastická paraparéza).",
          "hint": "Speciální neurologie LF OU"
        },
        {
          "id": "fc-S25-2",
          "front": "Které dva vysoce citlivé metabolity v krvi stoupají při tkáňovém deficitu vitaminu B12 ještě před poklesem sérové hladiny vitaminu B12?",
          "back": "Kyselina metylmalonová (MMA) a homocystein.",
          "hint": "Speciální neurologie LF OU"
        },
        {
          "id": "fc-S25-3",
          "front": "Proč je nebezpečné léčit pacienta s nejasnou makrocytární anémií samotnou kyselinou listovou bez vyšetření vitaminu B12?",
          "back": "Kyselina listová upraví krevní obraz a hematologické parametry makrocytární anémie, ale nezabrání progresi neurologického poškození míchy (funikulární myelózy), které se může při neléčeném deficitu B12 stát ireverzibilním.",
          "hint": "Speciální neurologie LF OU"
        }
      ],
      "quiz": [
        {
          "id": "pq-S25-1",
          "question": "Který klinický obraz nejlépe vystihuje postižení míchy u funikulární myelózy?",
          "options": [
            "Čistá chabá paraparéza s areflexií bez poruchy citlivosti",
            "Spastická paraparéza kombinovaná se spinální senzorickou ataxií a výpadkem vibračního čití",
            "Hornerův syndrom a hemianopsie",
            "Termická a algická anestezie při intaktním polohocitu"
          ],
          "correctIndex": 1,
          "explanation": "Funikulární myelóza postihuje pyramidové dráhy v postranních provazcích (spasticita, hyperreflexie, Babinski) a dráhy hlubokého čití v zadních provazcích (ztráta polohocitu a vibrace, senzorická ataxie)."
        },
        {
          "id": "pq-S25-2",
          "question": "Deficit kterého stopového prvku vyvolává myeloneuropatii s klinickým a MRI obrazem nerozeznatelným od nedostatku vitaminu B12?",
          "options": [
            "Železa",
            "Mědi (Cu)",
            "Selenu",
            "Vápníku"
          ],
          "correctIndex": 1,
          "explanation": "Deficit mědi (např. po bariatrické operaci nebo při předávkování zinkem) vede k poruše cytochrom-c-oxidázy a způsobuje vakuolární myelopatii zadních a postranních provazců zcela identickou s funikulární myelózou."
        }
      ]
    },
    {
      "id": "s26-hydrocephalus-v-etn-normotenzn-ho-hydroc",
      "number": 26,
      "section": "specialni",
      "sectionLabel": "Speciální neurologie",
      "badgePrefix": "S26",
      "title": "Hydrocephalus (včetně Normotenzního hydrocefalu dospělých)",
      "shortDesc": "Poruchy cirkulace moku: obstrukční vs. komunikující hydrocefalus; Normotenzní hydrocefalus dospělých (NPH - Hakimova triáda: magnetická chůze, demence, inkontinence), diagnostika (Evansův index, tap-test) a shuntové operace (VP shunt).",
      "category": "likvor_cirkulace",
      "badge": "Likvorové syndromy & Hydrocefalus",
      "badgeColor": "teal",
      "theory": {
        "banner": {
          "tag": "Speciální neurologie • Otázka S26",
          "title": "Hydrocephalus (včetně Normotenzního hydrocefalu dospělých)",
          "text": "Poruchy cirkulace moku: obstrukční vs. komunikující hydrocefalus; Normotenzní hydrocefalus dospělých (NPH - Hakimova triáda: magnetická chůze, demence, inkontinence), diagnostika (Evansův index, tap-test) a shuntové operace (VP shunt)."
        },
        "sections": [
          {
            "title": "1. Fyziologie a Cirkulace likvoru",
            "content": "<p>Mozkomíšní mok (likvor) je tvořen v <strong>plexus choroideus</strong> mozkových komor (produkce cca 500 ml/den, celkový objem v komorách a subarachnoidálním prostoru je 150 ml). Cirkuluje z postranních komor přes <em>foramina Monroi</em> $\to$ 3. komora $\to$ <em>aqueductus Sylvii</em> $\to$ 4. komora $\to$ <em>foramina Luschkae et Magendie</em> $\to$ subarachnoidální prostor baze a konvexity $\to$ resorpce v <strong>granulationes arachnoideales (Pacchioniho granulace)</strong> do sinus sagittalis superior.</p>"
          },
          {
            "title": "2. Klasifikace hydrocefalu",
            "content": "<div class=\"anatomy-grid\">\n                <div class=\"grid-item\">\n                    <h4>Obstrukční (nekomunikující) hydrocefalus</h4>\n                    <ul>\n                        <li>Překážka v toku likvoru <strong>uvnitř komorového systému</strong>.</li>\n                        <li><strong>Příčiny:</strong> stenóza aqueduktu (vrozená či potraumatická), koloidní cysta 3. komory, tumory zadní jámy (meduloblastom, ependymom), krvácení do komor s tamponádou.</li>\n                        <li><strong>Klinika:</strong> akutní intrakraniální hypertenze (kruté bolesti hlavy, zvracení, edém papil, porucha vědomí).</li>\n                        <li><strong>Léčba:</strong> urgentní zevní komorová drenáž (EVD) nebo <em>endoskopická ventrikulostomie spodiny 3. komory (ETV)</em>.</li>\n                    </ul>\n                </div>\n                <div class=\"grid-item\">\n                    <h4>Komunikující (neobstrukční) hydrocefalus</h4>\n                    <ul>\n                        <li>Komorový systém je volně průchodný, ale vázne <strong>resorpce likvoru v arachnoideálních granulacích</strong>.</li>\n                        <li><strong>Příčiny:</strong> stav po subarachnoidálním krvácení (SAB), po prodělané hnisavé či bazilární meningitidě, meningeální karcinomatóza.</li>\n                        <li>Resorpční plocha je zjizvená a zablokovaná fibrinem či zánětlivým exsudátem.</li>\n                    </ul>\n                </div>\n            </div>"
          },
          {
            "title": "3. Normotenzní hydrocefalus dospělých (NPH - Normal Pressure Hydrocephalus)",
            "content": "<p>Specifická forma komunikujícího hydrocefalu u pacientů seniorského věku (> 65 let). Je <strong>jednou z mála plně léčitelných (reverzibilních) příčin demence</strong> v neurologii!</p>\n\n            <div class=\"highlight-box\">\n                <h4>Klinická triáda dle Hakima a Adamse</h4>\n                <ol>\n                    <li><strong>1. Porucha chůze (nejčasnější a nejvýznamnější příznak!):</strong>\n                        <ul>\n                            <li>Apraxie chůze / magnetická chůze: šouravá chůze o široké bázi s malými krůčky, pocit „přilepení nohou k podlaze“ (obtížná iniciace kroku), nestabilita a časté pády.</li>\n                            <li>Vleže na lůžku pacient vykonává pohyby dolních končetin (např. jízdu na kole) zcela volně a s normální silou!</li>\n                        </ul>\n                    </li>\n                    <li><strong>2. Demence (subkortikálně-frontálního typu):</strong>\n                        <ul>\n                            <li>Zpomalení psychomotorického tempa (bradypsychismus), exekutivní dysfunkce, apatie, porucha pozornosti. Paměťové deficity jsou mírnější než u Alzheimerovy nemoci.</li>\n                        </ul>\n                    </li>\n                    <li><strong>3. Močová inkontinence:</strong>\n                        <ul>\n                            <li>Začíná jako polakisurie a urgentní inkontinence (urgentní mikce s neschopností udržet moč), v pozdním stádiu trvalá inkontinence způsobená ztrátou korové inhibice močového měchýře.</li>\n                        </ul>\n                    </li>\n                </ol>\n            </div>"
          },
          {
            "title": "4. Diagnostika NPH",
            "content": "<ul>\n                <li><strong>CT a MRI mozku:</strong>\n                    <ul>\n                        <li>Symetrická <strong>ventrikulomegalie všech mozkových komor</strong> neúměrná korové atrofii.</li>\n                        <li><strong>Evansův index > 0,30</strong> (poměr maximální šíře čelních rohů postranních komor k maximálnímu vnitřnímu průměru kalvy).</li>\n                        <li>Obraz <em>DESH (Disproportionately Enlarged Subarachnoid-space Hydrocephalus)</em>: zúžení subarachnoidálních prostor na vertexu při dilataci Sylviových rýh.</li>\n                        <li>Periventrikulární hypodenzita/hyperintenzita v T2 (prosakování likvoru - transependymální edém).</li>\n                    </ul>\n                </li>\n                <li><strong>Lumbální punkční test (Likvorový tap-test / Tap-test):</strong>\n                    <ul>\n                        <li>Provedení diagnostické lumbální punkce s <strong>evakuací 30–50 ml likvoru</strong>.</li>\n                        <li>Před a po odběru (za 2–24 hodin) se provádí objektivní kvantitativní testování chůze (např. <em>Timed Up and Go test - TUG</em>, počet kroků a čas na 10 metrů) a kognice.</li>\n                        <li><strong>Pozitivní tap-test</strong> (výrazné zrychlení a zlepšení stability chůze o > 20 %) je nejsilnějším prediktorem úspěchu trvalé chirurgické léčby!</li>\n                    </ul>\n                </li>\n            </ul>"
          },
          {
            "title": "5. Léčba Hydrocefalu",
            "content": "<ul>\n                <li><strong>Ventrikuloperitoneální shunt (VP shunt):</strong>\n                    <ul>\n                        <li>Zlatý standard léčby NPH i komunikujícího hydrocefalu.</li>\n                        <li>Zavedení silikonového katétru z postranní komory přes programovatelný podkožní tlakový ventil do peritoneální dutiny.</li>\n                        <li>Moderní programovatelné ventily umožňují neinvazivní magnetické nastavení otevíracího tlaku.</li>\n                    </ul>\n                </li>\n                <li><strong>Alternativní zkraty:</strong> Ventrikuloatriální shunt (VA shunt – do pravé síně srdeční), Lumboperitoneální shunt (LP shunt).</li>\n                <li><strong>Endoskopická ventrikulostomie spodiny III. komory (ETV):</strong> metoda volby pro nekomunikující obstrukční hydrocefalus (např. stenózu aqueduktu).</li>\n            </ul>"
          }
        ]
      },
      "recall": {
        "scenarios": [
          {
            "id": "sc-S26-1",
            "title": "Klinická kazuistika – Hydrocephalus (včetně Normotenzního hydrocefalu dospělých)",
            "question": "<strong>Kazuistika:</strong> 71letý důchodce přichází v doprovodu rodiny pro rok trvající zhoršování chůze – chodí pomalu, 'šourá nohama, jako by je měl přilepené k zemi', a opakovaně upadl. V posledních měsících je zpomalený, málo mluví a objevily se epizody pomočování cestou na toaletu. Vleže na lůžku má svalovou sílu DK i hybnost plně intaktní. Na MRI mozku je patrná masivní dilatace postranních i III. komory (Evansův index 0,38) se zúžením subarachnoidálních prostor na vertexu.<br><br><strong>Klinický úkol:</strong> Stanovte diagnózu syndromu, navrhněte potvrzující zátěžový test a definitivní neurochirurgický výkon.",
            "answer": "<ul style='margin: 6px 0 0 18px; padding: 0; line-height: 1.5;'><li>Diagnóza: Normotenzní hydrocefalus dospělých (NPH - syndrom Hakim-Adams s kompletní klinickou triádou: magnetická chůze, demence a urgentní inkontinence).</li><li>Potvrzení diagnózy a predikce efektu léčby: Provedení likvorového tap-testu (evakuace 40–50 ml moku lumbální punkcí s videozáznamem a měřením parametrů chůze v TUG testu před a po zákroku).</li><li>Definitivní léčebná metoda: Neurochirurgická implantace ventrikuloperitoneálního shuntu (VP shunt) s nastavitelným programovatelným gravitačním ventilem.</li><li>Očekávaný výsledek: Výrazné zlepšení nebo úplná úprava poruchy chůze a inkontinence a stabilizace kognitivních funkcí.</li></ul>",
            "keyPoints": [
              "Diagnóza: Normotenzní hydrocefalus dospělých (NPH - syndrom Hakim-Adams s kompletní klinickou triádou: magnetická chůze, demence a urgentní inkontinence).",
              "Potvrzení diagnózy a predikce efektu léčby: Provedení likvorového tap-testu (evakuace 40–50 ml moku lumbální punkcí s videozáznamem a měřením parametrů chůze v TUG testu před a po zákroku).",
              "Definitivní léčebná metoda: Neurochirurgická implantace ventrikuloperitoneálního shuntu (VP shunt) s nastavitelným programovatelným gravitačním ventilem.",
              "Očekávaný výsledek: Výrazné zlepšení nebo úplná úprava poruchy chůze a inkontinence a stabilizace kognitivních funkcí."
            ],
            "pearl": "Hydrocephalus vzniká blokádou toku moku (obstrukční) nebo poruchou resorpce v Pacchioniho granulacích (komunikující)."
          }
        ]
      },
      "cards": [
        {
          "id": "fc-S26-1",
          "front": "Které příznaky tvoří klasickou Hakim-Adamsovu triádu u normotenzního hydrocefalu (NPH)?",
          "back": "1. Apraxie a porucha chůze (magnetická šouravá chůze o široké bázi), 2. subkortikální demence (bradypsychismus, apatie), 3. močová urgentní inkontinence.",
          "hint": "Speciální neurologie LF OU"
        },
        {
          "id": "fc-S26-2",
          "front": "Jak se provádí a hodnotí likvorový tap-test u pacienta s podezřením na normotenzní hydrocefalus?",
          "back": "Provede se lumbální punkce s jednorázovým vypuštěním 30–50 ml likvoru. Před punkcí a po ní se kvantitativně hodnotí rychlost a stabilita chůze (např. TUG test). Významné zlepšení chůze potvrdí diagnózu a predikuje úspěch trvalé shuntové operace.",
          "hint": "Speciální neurologie LF OU"
        },
        {
          "id": "fc-S26-3",
          "front": "Jak je definován Evansův index na CT/MRI mozku a jaká hodnota svědčí pro ventrikulomegalii?",
          "back": "Evansův index je poměr mezi maximální šířkou čelních rohů postranních komor a maximálním vnitřním průměrem kalvy lební na stejném axiálním řezu. Hodnota > 0,30 svědčí pro patologické rozšíření komorového systému.",
          "hint": "Speciální neurologie LF OU"
        }
      ],
      "quiz": [
        {
          "id": "pq-S26-1",
          "question": "Který příznak normotenzního hydrocefalu dospělých (NPH) se obvykle objevuje jako první a nejlépe reaguje na shuntovou operaci?",
          "options": [
            "Hluboká korová afázie",
            "Porucha chůze (magnetická šouravá chůze / apraxie chůze)",
            "Zrakové halucinace",
            "Kvadruplegie"
          ],
          "correctIndex": 1,
          "explanation": "Porucha chůze je nejčasnějším a nejkonzistentnějším příznakem NPH a zároveň nejlépe a nejrychleji reaguje na odlehčení likvorového tlaku (tap-test a VP shunt)."
        },
        {
          "id": "pq-S26-2",
          "question": "Metodou volby pro chirurgické řešení nekomunikujícího obstrukčního hydrocefalu při stenóze aqueductus Sylvii je:",
          "options": [
            "Endoskopická ventrikulostomie spodiny III. komory (ETV)",
            "Lumbální punkce 1x týdně",
            "Resekce corpus callosum",
            "Podávání vysokých dávek furosemidu"
          ],
          "correctIndex": 0,
          "explanation": "Endoskopická ventrikulostomie spodiny třetí komory (ETV) vytvoří fyziologickou vnitřní komunikaci mezi III. komorou a interpedunkulární cisternou a eliminuje nutnost implantace cizorodého materiálu (shuntu)."
        }
      ]
    },
    {
      "id": "s27-mozkov-smrt",
      "number": 27,
      "section": "specialni",
      "sectionLabel": "Speciální neurologie",
      "badgePrefix": "S27",
      "title": "Mozková smrt",
      "shortDesc": "Mozková smrt: definice zástavy funkcí celého mozku včetně kmene, legislativní rámec v ČR (Transplantační zákon), klinické vyšetření kmenových reflexů, apnoický test a konfirmační instrumentální metody (CTA, panangiografie, EEG, TCD).",
      "category": "urgentni_trauma",
      "badge": "Neurointenzivní péče & Kóma",
      "badgeColor": "teal",
      "theory": {
        "banner": {
          "tag": "Speciální neurologie • Otázka S27",
          "title": "Mozková smrt",
          "text": "Mozková smrt: definice zástavy funkcí celého mozku včetně kmene, legislativní rámec v ČR (Transplantační zákon), klinické vyšetření kmenových reflexů, apnoický test a konfirmační instrumentální metody (CTA, panangiografie, EEG, TCD)."
        },
        "sections": [
          {
            "title": "1. Definice a Význam mozkové smrti",
            "content": "<p><strong>Smrt mozku (cerebrální smrt)</strong> je definována jako <strong>ireverzibilní vymizení všech funkcí celého mozku včetně mozkového kmene</strong>. Je ekvivalentem biologické smrti jedince jako celku. Stanovení mozkové smrti má zásadní etický, právní a medicínský význam – umožňuje ukončení marné intenzivní péče nebo zahájení odběru orgánů pro transplantační program.</p>"
          },
          {
            "title": "2. Předpoklady pro zahájení stanovení mozkové smrti",
            "content": "<div class=\"highlight-box\">\n                <h4>Vstupní podmínky (Musí být splněny VŠECHNY!)</h4>\n                <ul>\n                    <li><strong>Jasně prokázaná a ireverzibilní strukturální příčina poškození mozku:</strong> těžké kraniocerebrální trauma, masivní intracerebrální krvácení, rozsáhlý ischemický iktus, anoxicko-ischemická encefalopatie po KPR.</li>\n                    <li><strong>Hluboké nereaktivní kóma (GCS 3):</strong> úplná areflexie, atonická hypotonie, absolutní absence spontánní motoriky a reakce na jakýkoliv nociceptivní podnět z oblasti hlavových nervů i těla.</li>\n                    <li><strong>Nutnost umělé plicní ventilace (UPV):</strong> úplná zástava spontánního dýchání.</li>\n                    <li><strong>Vyloučení reverzibilních vlivů (STRIKTNÍ PODMÍNKA!):</strong>\n                        <ul>\n                            <li>Vyloučení hypotermie (centrální tělesná teplota <strong>$\\ge 35\text{–}36\text{ °C}$</strong>).</li>\n                            <li>Vyloučení těžké arteriální hypotenze ($MAP \\ge 60\text{–}65\text{ mmHg}$, systolický $TK \\ge 90\text{–}100\text{ mmHg}$).</li>\n                            <li>Vyloučení těžkých metabolických a endokrinních rozvratů (těžká hypoglykémie, uremické či jaterní kóma, elektrolytový rozvrat).</li>\n                            <li>Vyloučení <strong>útlumu léky a intoxikací:</strong> sedativa, analgetika, barbituráty, myorelaxancia (monitorace TOF – Train-of-Four musí být 4/4!), toxikologický screening negativní nebo dostatečný odstup od podání (překročení 4–5 biologických poločasů).</li>\n                        </ul>\n                    </li>\n                </ul>\n            </div>"
          },
          {
            "title": "3. Klinické vyšetření kmenové areflexie",
            "content": "<p>Vyšetření provádějí <strong>dva na sobě nezávislí lékaři</strong> s příslušnou atestací (neurolog, anesteziolog/intenzivista). Zkoumá se zánik všech kmenových reflexů:</p>\n            <ol>\n                <li><strong>Fotoreakce (Zornicový reflex - n. II / n. III):</strong> oboustranně široké nebo středně široké zornice bez jakékoliv reakce na intenzivní světlo.</li>\n                <li><strong>Korneální reflex (n. V / n. VII):</strong> žádná reakce víček při dotyku štětičkou na rohovku obou očí.</li>\n                <li><strong>Okulomotorické kmenové reflexy:</strong>\n                    <ul>\n                        <li><em>Okulocefalický reflex (panenčí oči):</em> při rychlé pasivní rotaci hlavy zůstávají bulby fixované v orbitě, nepohybují se protisměrně.</li>\n                        <li><em>Okulovestibulární reflex (kalorický test):</em> po aplikaci 50 ml ledové vody do zevního zvukovodu (po vyloučení perforace bubínku) nedojde k žádnému nystagmu ani deviací bulbů.</li>\n                    </ul>\n                </li>\n                <li><strong>Faryngeální a tracheální (kašlací) reflex (n. IX / n. X):</strong> žádná reakce při hlubokém odsávání z endotracheální kanyly a stimulaci kariny.</li>\n                <li><strong>Absence reakce na bolest v trigeminové oblasti:</strong> žádná motorická odpověď (grimasování) při tlaku na supraorbitální zářez.</li>\n            </ol>"
          },
          {
            "title": "4. Apnoický test (Test zástavy spontánního dýchání)",
            "content": "<ul>\n                <li>Ověřuje zánik dechového centra v prodloužené míše při maximální stimulaci hyperkapnií.</li>\n                <li><strong>Provedení:</strong> preoxygenace 100% $O_2$, odpojení od ventilátoru při insuflaci $O_2$ katétrem do tracheální rourky (6 l/min). Sleduje se absence jakéhokoliv vdechu po dobu 8–10 minut.</li>\n                <li><strong>Pozitivní výsledek (potvrzující smrt):</strong> <strong>žádná spontánní dechová aktivita</strong> při vzestupu <strong>$pCO_2 \\ge 8,0\text{ kPa (60 mmHg)}$</strong> a poklesu arteriálního $pH \\le 7,25$.</li>\n            </ul>"
          },
          {
            "title": "5. Potvrzující (konfirmační) instrumentální vyšetření dle legislativy ČR",
            "content": "<p>V ČR upravuje diagnostiku <strong>Transplantační zákon č. 285/2002 Sb.</strong> K definitivnímu potvrzení ireverzibilní zástavy mozkové cirkulace nebo bioelektrické aktivity se povinně provádí jedno z následujících vyšetření:</p>\n            <ul>\n                <li><strong>CT angiografie mozkových tepen (CTA):</strong> průkaz úplného chybění intrakraniálního plnění magistrálních tepen a mozkových splavů nad bází lební (zástava mozkové perfuze).</li>\n                <li><strong>Digitální subtrakční panangiografie 4 mozkových tepen (DSA):</strong> zlatý standard – zástava toku kontrastní látky na úrovni vstupu vnitřních karotid a vertebrálních tepen do lebky.</li>\n                <li><strong>Transkraniální dopplerovská sonografie (TCD):</strong> průkaz zástavy toku (krátké systolické hroty / systolické špičky s reverzním diastolickým tokem – obraz oscilujícího toku).</li>\n                <li><strong>Perfuzní scintigrafie mozku ($^{99m}\text{Tc-HMPAO}$ SPECT):</strong> obraz „prázdné kalvy“ (žádná akumulace radiofarmaka v mozkovém parenchymu).</li>\n                <li><strong>Elektroencefalografie (EEG):</strong> elektrokortikální ticho (izoelektrická linie, nulová bioelektrická aktivita s amplitudou < 2 $\\mu V$) při snímání dle mezinárodního standardu po dobu 30 minut.</li>\n            </ul>"
          }
        ]
      },
      "recall": {
        "scenarios": [
          {
            "id": "sc-S27-1",
            "title": "Klinická kazuistika – Mozková smrt",
            "question": "<strong>Kazuistika:</strong> 40letý pacient po těžkém kraniocerebrálním traumatu s masivní bitemporální kontuzí a dekompresivní kraniektomii je 4. den na neuroJIP v hlubokém bezvědomí na UPV. Sedace (propofol + sufentanil) byla vysazena před 36 hodinami, tělesná teplota 36,8 °C, TK 125/75 mmHg na nízké dávce noradrenalinu. Neurolog konstatuje oboustrannou mydriázu bez fotoreakce, areflexii korneální, okulovestibulární i kašlací a GCS 3.<br><br><strong>Klinický úkol:</strong> Popište následující nutné kroky k validnímu stanovení mozkové smrti podle platného transplantačního protokolu.",
            "answer": "<ul style='margin: 6px 0 0 18px; padding: 0; line-height: 1.5;'><li>Ověření předpokladů: Strukturální nevratná léze prokázána na CT, normotermie, hemodynamická stabilita, dostatečný interval od vysazení sedativ k eliminaci látek.</li><li>Klinické vyšetření kmenové areflexie: Provedení kompletního protokolu kmenových reflexů nezávisle dvěma atestovanými lékaři.</li><li>Apnoický test: Provedení apnoického testu s insuflací kyslíku a odběrem krevních plynů k potvrzení absence dechu při $pCO_2 \\ge 8,0\text{ kPa}$.</li><li>Konfirmační instrumentální vyšetření: Indikace CT angiografie mozkových tepen (CTA) k průkazu úplné zástavy intrakraniální perfuze nad bází lební.</li><li>Právní a etický závěr: Po potvrzení zástavy perfuze na CTA sepsání Protokolu o stanovení mozkové smrti, oficiální konstatování času smrti pacienta a kontaktování transplantačního koordinátora.</li></ul>",
            "keyPoints": [
              "Ověření předpokladů: Strukturální nevratná léze prokázána na CT, normotermie, hemodynamická stabilita, dostatečný interval od vysazení sedativ k eliminaci látek.",
              "Klinické vyšetření kmenové areflexie: Provedení kompletního protokolu kmenových reflexů nezávisle dvěma atestovanými lékaři.",
              "Apnoický test: Provedení apnoického testu s insuflací kyslíku a odběrem krevních plynů k potvrzení absence dechu při $pCO_2 \\ge 8,0\text{ kPa}$.",
              "Konfirmační instrumentální vyšetření: Indikace CT angiografie mozkových tepen (CTA) k průkazu úplné zástavy intrakraniální perfuze nad bází lební.",
              "Právní a etický závěr: Po potvrzení zástavy perfuze na CTA sepsání Protokolu o stanovení mozkové smrti, oficiální konstatování času smrti pacienta a kontaktování transplantačního koordinátora."
            ],
            "pearl": "Mozková smrt je ireverzibilní zánik funkcí celého mozku včetně kmene."
          }
        ]
      },
      "cards": [
        {
          "id": "fc-S27-1",
          "front": "Které základní reverzibilní faktory a vlivy musí být striktně vyloučeny před zahájením vyšetření mozkové smrti?",
          "back": "1. Vliv tlumivých léků (sedativa, analgetika, myorelaxancia) a intoxikací, 2. hypotermie (teplota musí být ≥ 35–36 °C), 3. těžká hypotenze (systolický TK musí být ≥ 90–100 mmHg), 4. těžký elektrolytový a metabolicko-endokrinní rozvrat.",
          "hint": "Speciální neurologie LF OU"
        },
        {
          "id": "fc-S27-2",
          "front": "Jaké jsou laboratorní podmínky pro úspěšné a platné ukončení apnoického testu potvrzujícího zástavu dýchacího centra?",
          "back": "Absence jakéhokoliv spontánního dechového pokusu při vzestupu arteriálního pCO2 na hodnotu ≥ 8,0 kPa (≥ 60 mmHg) nebo vzestupu pCO2 o více než 2,7 kPa (20 mmHg) nad výchozí hodnotu při poklesu pH ≤ 7,25.",
          "hint": "Speciální neurologie LF OU"
        },
        {
          "id": "fc-S27-3",
          "front": "Které instrumentální konfirmační metody prokazující zástavu intrakraniální cirkulace jsou uznávány legislativou ČR pro potvrzení mozkové smrti?",
          "back": "CT angiografie mozkových tepen (CTA), digitální subtrakční angiografie (DSA 4 mozkových tepen), transkraniální dopplerovská sonografie (TCD) a mozková perfuzní scintigrafie (99mTc-HMPAO SPECT).",
          "hint": "Speciální neurologie LF OU"
        }
      ],
      "quiz": [
        {
          "id": "pq-S27-1",
          "question": "Který nález na konfirmačním EEG vyšetření svědčí pro mozkovou smrt?",
          "options": [
            "Difuzní rytmus delta o vysoké voltáži",
            "Elektrokortikální ticho (izoelektrická linie s amplitudou < 2 µV trvající minimálně 30 minut)",
            "Periodické trifázické vlny",
            "Generalizované hrot-vlna komplexy"
          ],
          "correctIndex": 1,
          "explanation": "Průkaz elektrokortikálního ticha (izoelektrické linie bez jakékoliv bioelektrické mozkové aktivity nad 2 µV při maximálním zesílení po dobu 30 minut) je elektrofyziologickým konfirmačním kritériem mozkové smrti."
        },
        {
          "id": "pq-S27-2",
          "question": "Při vyšetření okulocefalického reflexu u pacienta s intaktním mozkovým kmenem vyvolá rychlá pasivní rotace hlavy doprava:",
          "options": [
            "Konjugovanou deviaci očních bulbů doleva (opačným směrem – fenomén panenčích očí)",
            "Okamžitou oboustrannou mydriázu",
            "Spontánní mrknutí pravého oka",
            "Zástavu dechu"
          ],
          "correctIndex": 0,
          "explanation": "Intaktní kmenové okulocefalické reflexní dráhy udržují pohled fixovaný v prostoru, proto rotace hlavy doprava vyvolá protisměrnou deviaci bulbů doleva. U mozkové smrti jsou bulby 'zamrzlé' a pohybují se pasivně spolu s hlavou."
        }
      ]
    },
    {
      "id": "s28-syringomyelie-a-syringobulbie",
      "number": 28,
      "section": "specialni",
      "sectionLabel": "Speciální neurologie",
      "badgePrefix": "S28",
      "title": "Syringomyelie a Syringobulbie",
      "shortDesc": "Syringomyelie: tubulární kavita v míše, asociace s Chiariho malformací typ I, patofyziologie zkřížených spinothalamických drah, disociovaná porucha čití ('plášťovitá distribuce'), trofické změny, diagnostika MRI a dekomprese foramen magnum.",
      "category": "vrozene_vyvojove",
      "badge": "Vývojová & Spinální onemocnění",
      "badgeColor": "teal",
      "theory": {
        "banner": {
          "tag": "Speciální neurologie • Otázka S28",
          "title": "Syringomyelie a Syringobulbie",
          "text": "Syringomyelie: tubulární kavita v míše, asociace s Chiariho malformací typ I, patofyziologie zkřížených spinothalamických drah, disociovaná porucha čití ('plášťovitá distribuce'), trofické změny, diagnostika MRI a dekomprese foramen magnum."
        },
        "sections": [
          {
            "title": "1. Definice a Terminologie",
            "content": "<p><strong>Syringomyelie</strong> je chronické progredující onemocnění míchy charakterizované tvorbou <strong>podélných tubulárních kavit (syrinx)</strong> vyplněných tekutinou podobnou likvoru v míšním parenchymu (nejčastěji v <em>cervikální a horní hrudní míše</em>). Pokud se kavita šíří kraniálně do prodloužené míchy a kmene, označuje se jako <strong>syringobulbie</strong>. <em>Hydromyelie</em> označuje prostou dilataci centrálního míšního kanálku.</p>"
          },
          {
            "title": "2. Etiologie a Patogeneze",
            "content": "<ul>\n                <li><strong>1. Vrozená forma (asociovaná s Chiariho malformací I. typu, > 70 %):</strong>\n                    <ul>\n                        <li><strong>Chiariho malformace typ I (CM-I):</strong> kaudální sestup (herniace) mozečkových tonzil přes <em>foramen magnum</em> do páteřního kanálu o <strong>$\\ge 5\text{ mm}$</strong> pod úroveň baze lební.</li>\n                        <li><em>Patofyziologický mechanismus (Gardnerova hydrodynamická teorie):</em> tonzily fungují jako píst blokující pulzní vlnu likvoru ve foramen magnum $\to$ likvor je při systolické pulzaci vtlačován do centrálního míšního kanálku nebo přes perivaskulární Virchow-Robinovy prostory do míchy.</li>\n                    </ul>\n                </li>\n                <li><strong>2. Získaná (sekundární) syringomyelie:</strong> po kraniocervikálních traumatech (posttraumatická syrinx), po prodělané arachnoiditidě (meningitida), v okolí intramedulárních tumorů (ependymom, hemangioblastom).</li>\n            </ul>"
          },
          {
            "title": "3. Patofyziologie a Klinický obraz",
            "content": "<p>Kavita typicky začíná v centrální šedi míchy a postupně se rozšiřuje ventrálně, dorzálně i laterálně:</p>\n            <div class=\"anatomy-grid\">\n                <div class=\"grid-item\">\n                    <h4>1. Disociovaná porucha čití (Kardinální příznak!)</h4>\n                    <ul>\n                        <li>Kavita v centrální míše nejprve přeruší <strong>commissura alba anterior</strong>, kde se kříží <em>tractus spinothalamicus</em> vedoucí bolest a teplo.</li>\n                        <li><strong>Plášťovitá distribuce výpadku:</strong> ztráta <strong>algického a termického čití</strong> na šíji, ramenním pletenci a horních končetinách (připomíná plášť nebo vestu).</li>\n                        <li><strong>Zachovalé hluboké čití:</strong> vnímání polohocitu, dotyku a vibrace v zadních provazcích je dlouho <em>zcela intaktní</em> (odtud název <em>disociovaná anestezie</em>!).</li>\n                        <li>Pacienti si způsobují <strong>nebolestivé těžké popáleniny</strong> rukou o plotnu či cigaretu a nebolestivá řezná poranění.</li>\n                    </ul>\n                </div>\n                <div class=\"grid-item\">\n                    <h4>2. Motorické a autonomní příznaky</h4>\n                    <ul>\n                        <li><strong>Postižení předních rohů míšních:</strong> periferní (chabá) paréza, fascikulace a svalová atrofie drobných svalů ruky (interoseální svaly, hypothenar $\to$ drápovitá ruka) a pletence pažního.</li>\n                        <li><strong>Postižení postranních pyramidových drah:</strong> spastická paraparéza dolních končetin s hyperreflexií a pozitivním Babinským pod úrovní syrinx.</li>\n                        <li><strong>Trofické a autonomní změny:</strong> Charcotovy neuropatické klouby (deformity ramenního/loketního kloubu), Hornerův syndrom (léze ciliospinálního centra C8–Th1), suchá chladná cyanotická kůže rukou.</li>\n                    </ul>\n                </div>\n            </div>\n\n            <div class=\"highlight-box\">\n                <h4>Klinika Syringobulbie</h4>\n                <p>Propagace syrinx do prodloužené míchy poškozuje jádra hlavových nervů:</p>\n                <ul>\n                    <li>Léze jádra n. V (ncl. spinalis n. V): disociovaná porucha čití v obličeji v soustředných zónách (cibulovitá Sölderova distribuce).</li>\n                    <li>Léze ncl. ambiguus (n. IX, X): dysfagie, dysfonie, obrna patrových oblouků.</li>\n                    <li>Léze ncl. n. XII: atrofie a fascikulace poloviny jazyka.</li>\n                    <li>Rotační vertigo a vertikální nystagmus (postižení vestibulárních jader).</li>\n                </ul>\n            </div>"
          },
          {
            "title": "4. Diagnostika",
            "content": "<ul>\n                <li><strong>MRI krční a hrudní míchy a kraniocervikálního přechodu (metoda volby):</strong>\n                    <ul>\n                        <li>Prokáže intramedulární podélnou kavitu s tekutinovým signálem (T1 hypointenzní, T2 silně hyperintenzní, bez patologického sycení po gadoliniu – odlišení od cystického tumoru).</li>\n                        <li>Zobrazí <strong>herniaci tonzil mozečku pod foramen magnum $\\ge 5\text{ mm}$</strong> (Chiari I malformace) a zúžení cisterna magna.</li>\n                    </ul>\n                </li>\n                <li><strong>RTG / CT kraniocervikálního přechodu:</strong> detekce kostních anomálií (bazilární imprese, asimilace atlasu, Klippel-Feilův syndrom).</li>\n            </ul>"
          },
          {
            "title": "5. Léčba",
            "content": "<ul>\n                <li><strong>Neurochirurgická léčba (dekomprese zadní jámy):</strong>\n                    <ul>\n                        <li>Kauzální výkon u Chiari I: <strong>subokcipitální kraniektomie zadní jámy + laminektomie C1 (FMD - Foramen Magnum Decompression)</strong> s duroplastikou.</li>\n                        <li>Cíl: obnovení fyziologické cirkulace likvoru v kraniocervikálním přechodu $\to$ vede k postupné spontánní regresi a kolapsu syringomyelické kavity.</li>\n                    </ul>\n                </li>\n                <li><strong>Přímá drenáž syrinx (syringosubarachnoidální / syringoperitoneální shunt):</strong> indikována pouze při selhání dekomprese nebo u sekundárních posttraumatických syrinx.</li>\n                <li><strong>Symptomatická péče:</strong> analgetika pro neuropatickou bolest (pregabalin, gabapentin), fyzioterapie, edukace a ochrana před popálením a poraněním rukou.</li>\n            </ul>"
          }
        ]
      },
      "recall": {
        "scenarios": [
          {
            "id": "sc-S28-1",
            "title": "Klinická kazuistika – Syringomyelie a Syringobulbie",
            "question": "<strong>Kazuistika:</strong> 31letá kadeřnice si všimla, že se opakovaně nebolestivě popálila o kulmu na prstech a předloktích obou horních končetin a necítila horkou vodu. Při vyšetření: plášťovitá ztráta vnímání tepla a bolesti v dermatomech C3–Th2 oboustranně, polohocit a vibrační čití na rukou jsou plně normální, na obou rukách mírná atrofie interoseálních svalů a živé patelární reflexy s pozitivním Babinským vpravo.<br><br><strong>Klinický úkol:</strong> Stanovte diagnózu, popište očekávaný nález na MRI a navrhněte neurochirurgické řešení.",
            "answer": "<ul style='margin: 6px 0 0 18px; padding: 0; line-height: 1.5;'><li>Diagnóza: Cervikální syringomyelie s typickou disociovanou poruchou čití v plášťovité distribuci (C3–Th2) a počínající amyotrofií rukou.</li><li>Podezření na etiologii: Chiariho malformace typu I (blokáda cirkulace likvoru na kraniocervikálním přechodu).</li><li>MRI nález: T1 hypointenzní a T2 výrazně hyperintenzní centrální tekutinová kavita v krční míše a kaudální protruze cerebelárních tonzil $\\ge 5\text{ mm}$ pod foramen magnum.</li><li>Neurochirurgická léčba: Subokcipitální dekomprese zadní jámy (kraniektomie foramen magnum, laminektomie C1 a duroplastika) k obnovení průchodnosti likvorových cest.</li><li>Prognóza: Včasná dekomprese zabrání progresi neurologického deficitu a vede ke zmenšení syrinx.</li></ul>",
            "keyPoints": [
              "Diagnóza: Cervikální syringomyelie s typickou disociovanou poruchou čití v plášťovité distribuci (C3–Th2) a počínající amyotrofií rukou.",
              "Podezření na etiologii: Chiariho malformace typu I (blokáda cirkulace likvoru na kraniocervikálním přechodu).",
              "MRI nález: T1 hypointenzní a T2 výrazně hyperintenzní centrální tekutinová kavita v krční míše a kaudální protruze cerebelárních tonzil $\\ge 5\text{ mm}$ pod foramen magnum.",
              "Neurochirurgická léčba: Subokcipitální dekomprese zadní jámy (kraniektomie foramen magnum, laminektomie C1 a duroplastika) k obnovení průchodnosti likvorových cest.",
              "Prognóza: Včasná dekomprese zabrání progresi neurologického deficitu a vede ke zmenšení syrinx."
            ],
            "pearl": "Syringomyelie je intramedulární tubulární kavita nejčastěji asociovaná s Chiariho malformací I. typu (sestup mozečkových tonzil > 5 mm)."
          }
        ]
      },
      "cards": [
        {
          "id": "fc-S28-1",
          "front": "Proč dochází u syringomyelie k disociované poruše čití (ztráta bolesti a tepla se zachováním hlubokého čití)?",
          "back": "Centrálně uložená kavita (syrinx) v míše nejprve utlačí a přeruší commissura alba anterior, kde se kříží vlákna tractus spinothalamicus (vedoucí bolest a teplotu). Zadní provazce (vedoucí propriocepci a vibraci) leží dorzálně mimo centrum a zůstávají dlouho nepostiženy.",
          "hint": "Speciální neurologie LF OU"
        },
        {
          "id": "fc-S28-2",
          "front": "Jaká vrozená vývojová vada kraniocervikálního přechodu je nejčastěji asociována se vznikem syringomyelie?",
          "back": "Chiariho malformace I. typu (herniace mozečkových tonzil přes foramen magnum o ≥ 5 mm pod úroveň baze lební blokující tok likvoru).",
          "hint": "Speciální neurologie LF OU"
        },
        {
          "id": "fc-S28-3",
          "front": "Jaký neurochirurgický výkon je kauzální léčbou syringomyelie asociované s Chiari I malformací?",
          "back": "Dekomprese foramen magnum (subokcipitální kraniektomie s resekcí zadního oblouku atlasu C1 a expanzivní plastikou tvrdé pleny – duroplastikou) k obnovení volné cirkulace likvoru.",
          "hint": "Speciální neurologie LF OU"
        }
      ],
      "quiz": [
        {
          "id": "pq-S28-1",
          "question": "Který klinický příznak je typickým projevem syringobulbie při kraniální propagaci kavity do kmene?",
          "options": [
            "Bitemporální hemianopsie",
            "Disociovaná porucha čití na obličeji v koncentrických zónách (cibulovitá distribuce), dysfagie a atrofie jazyka",
            "Klidový třes končetin",
            "Oboustranná ptóza víček bez dalších příznaků"
          ],
          "correctIndex": 1,
          "explanation": "Syringobulbie postihuje ncl. spinalis n. V (cibulovité zóny poruchy čití v obličeji), ncl. ambiguus n. IX/X (dysfagie, dysfonie) a ncl. n. XII (atrofie a fascikulace jazyka)."
        },
        {
          "id": "pq-S28-2",
          "question": "Jaká minimální vzdálenost herniace cerebelárních tonzil pod úroveň foramen magnum je na sagitálním MRI považována za diagnostické kritérium Chiariho malformace I. typu?",
          "options": [
            "1 mm",
            "3 mm",
            "5 mm",
            "15 mm"
          ],
          "correctIndex": 2,
          "explanation": "Kaudální sestup mozečkových tonzil o 5 mm a více pod rovinu foramen magnum (McRaeova linie) na sagitálním T1/T2 MRI snímku definuje Chiari I malformaci."
        }
      ]
    },
    {
      "id": "s29-heredit-rn-spastick-parapar-za-str-mpell",
      "number": 29,
      "section": "specialni",
      "sectionLabel": "Speciální neurologie",
      "badgePrefix": "S29",
      "title": "Hereditární spastická paraparéza (Strümpell-Lorrain)",
      "shortDesc": "Hereditární spastická paraparéza (HSP): genetika (SPG4/spastin, typy dědičnosti), degenerace kortikospinálního traktu, čistá (pure) vs. komplexní (complicated) forma, nůžkovitá chůze, diagnostika a symptomatická antispastická léčba.",
      "category": "neurodegenerace",
      "badge": "Neurodegenerativní & Spinální onemocnění",
      "badgeColor": "teal",
      "theory": {
        "banner": {
          "tag": "Speciální neurologie • Otázka S29",
          "title": "Hereditární spastická paraparéza (Strümpell-Lorrain)",
          "text": "Hereditární spastická paraparéza (HSP): genetika (SPG4/spastin, typy dědičnosti), degenerace kortikospinálního traktu, čistá (pure) vs. komplexní (complicated) forma, nůžkovitá chůze, diagnostika a symptomatická antispastická léčba."
        },
        "sections": [
          {
            "title": "1. Definice a Genetická heterogenita",
            "content": "<p><strong>Hereditární spastická paraparéza (HSP / Strümpell-Lorrainova choroba)</strong> je geneticky a klinicky heterogenní skupina neurodegenerativních onemocnění charakterizovaná <strong>pomalu progredující spasticitou a slabostí dolních končetin</strong> v důsledku axonální degenerace nejdelších motorických drah (<em>tractus corticospinalis</em>).</p>\n            <ul>\n                <li><strong>Způsoby dědičnosti:</strong> autozomálně dominantní (AD, 70–80 % – nejčastější), autozomálně recesivní (AR) i gonozomálně vázaná (X-chromozom).</li>\n                <li><strong>Molekulární genetika:</strong> popsáno více než 80 různých genových lokusů (SPG1–SPG80). Nejčastější formou je <strong>SPG4 (gen SPAST kódující protein spastin)</strong>, která tvoří cca 40–50 % všech AD forem. Spastin se podílí na dynamice mikrotubulů v axonech.</li>\n            </ul>"
          },
          {
            "title": "2. Neuropatologie a Klasifikace",
            "content": "<p>Neuropatologickým podkladem je <strong>retrográdní axonální degenerace („dying-back“ axonopatie)</strong> distálních zakončení kortikospinálních drah v bederní a hrudní míše a v menší míře zadních provazců (fasciculus gracilis). Těla neuronů v motorické kůře zůstávají dlouho intaktní.</p>\n\n            <div class=\"anatomy-grid\">\n                <div class=\"grid-item\">\n                    <h4>Čistá (nekomplikovaná / Pure) HSP</h4>\n                    <ul>\n                        <li>Tvoří naprostou většinu AD forem (zejména SPG4).</li>\n                        <li><strong>Klinický obraz:</strong>\n                            <ul>\n                                <li>Pomalu progredující <strong>spastická paraparéza dolních končetin</strong> (spasticita výrazně dominuje nad svalovou slabostí!).</li>\n                                <li><em>Spasticko-paretická („nůžkovitá“) chůze:</em> ztuhlá chůze po špičkách s addukcí kolen a třením stehen o sebe.</li>\n                                <li>Vysoce živé patelární a achillovy reflexy, klonus čéšky a nohy, oboustranně pyramidové iritační jevy (Babinski +).</li>\n                                <li>Často urgentní mikce a hyperaktivní močový měchýř.</li>\n                                <li><em>Horní končetiny, hlavové nervy, řeč i kognice jsou plně intaktní!</em></li>\n                            </ul>\n                        </li>\n                    </ul>\n                </div>\n                <div class=\"grid-item\">\n                    <h4>Komplexní (komplikovaná / Complicated) HSP</h4>\n                    <ul>\n                        <li>Častější u AR forem (např. SPG11, SPG15).</li>\n                        <li>Kromě spastické paraparézy DK jsou přítomny <strong>přidružené neurologické a systémové syndromy</strong>:\n                            <ul>\n                                <li>Kognitivní deficit / mentální retardace / demence.</li>\n                                <li>Cerebelární ataxie a nystagmus.</li>\n                                <li>Periferní polyneuropatie s amyotrofií.</li>\n                                <li>Extrapyramidové příznaky (parkinsonismus, dystonie).</li>\n                                <li>Optická atrofie, retinopatie, katarakta, ichtyóza.</li>\n                                <li>Na MRI mozku často ztenčení kalózního tělesa (TCC).</li>\n                            </ul>\n                        </li>\n                    </ul>\n                </div>\n            </div>"
          },
          {
            "title": "3. Diagnostika a Diferenciální diagnóza",
            "content": "<ul>\n                <li><strong>Genetické testování (NGS panel pro HSP):</strong> definitivní konfirmace kauzální mutace (SPAST, SPG11 atd.).</li>\n                <li><strong>MRI míchy a mozku:</strong> k vyloučení strukturální komprese míchy (cervikální spondylogenní myelopatie), roztroušené sklerózy, nádorů a cévních malformací. U čistých forem bývá MRI míchy normální nebo prokazuje lehkou atrofii hrudní míchy.</li>\n                <li><strong>Diferenciální diagnostika:</strong> vyloučení deficitu vitaminu $B_{12}$ (funikulární myelózy), adrenoleukodystrofie / adrenomyeloneuropatie (velmi dlouhé mastné kyseliny - VLCFA v séru), primární laterální sklerózy (PLS – čistě centrální forma motoneuronového onemocnění s postižením HK a bulbárního svalstva), lues (tabes dorsalis).</li>\n            </ul>"
          },
          {
            "title": "4. Léčba",
            "content": "<p>Kauzální genová léčba dosud není k dispozici. Terapie je <strong>symptomatická, zaměřená na redukci spasticity a zachování mobility</strong>:</p>\n            <ul>\n                <li><strong>Perorální myorelaxancia:</strong> <strong>Baklofen</strong> (agonisté $GABA_B$ receptorů, titrovat do 30–80 mg/den), <strong>Tizanidin</strong> ($\u0007lpha_2$-adrenergní agonista).</li>\n                <li><strong>Intratekální baklofenová pumpa (ITB):</strong> chirurgická implantace podkožní pumpy podávající baklofen přímo do durálního vaku u pacientů s těžkou invalidizující spasticitou nereagující na perorální léčbu.</li>\n                <li><strong>Lokální aplikace Botulotoxinu A:</strong> do spastických adduktorů stehen a m. triceps surae pro zlepšení chůze.</li>\n                <li><strong>Intenzivní celoživotní fyzioterapie:</strong> protahování zkracujících se svalů, nácvik chůze, ortopedické dlahy.</li>\n            </ul>"
          }
        ]
      },
      "recall": {
        "scenarios": [
          {
            "id": "sc-S29-1",
            "title": "Klinická kazuistika – Hereditární spastická paraparéza (Strümpell-Lorrain)",
            "question": "<strong>Kazuistika:</strong> 35letý programátor přichází pro 5 let pozvolna se zhoršující ztuhlost nohou při chůzi, zakopávání špičkami a občasné prudké nutkání na močení. Pacientův otec a dědeček měli podobné obtíže s chůzí od středního věku. Při vyšetření: nůžkovitá spastická chůze po špičkách, patelární reflexy polykinetické, klonus obou nohou, oboustranně pozitivní Babinského jev. Svalová síla a reflexy na horních končetinách i citlivost celého těla jsou normální. MRI celé páteře a mozku bez patologie.<br><br><strong>Klinický úkol:</strong> Stanovte nejpravděpodobnější diagnózu, typ dědičnosti a navrhněte genetické a farmakologické řešení.",
            "answer": "<ul style='margin: 6px 0 0 18px; padding: 0; line-height: 1.5;'><li>Diagnóza: Hereditární spastická paraparéza (HSP / morbus Strümpell-Lorrain) – čistá nekomplikovaná forma.</li><li>Typ dědičnosti: Autozomálně dominantní (postižení ve 3 po sobě jdoucích generacích u mužů i žen).</li><li>Potvrzení diagnózy: Molekulárně-genetické vyšetření DNA (panel pro HSP se zaměřením na gen SPAST / SPG4).</li><li>Symptomatická léčba spasticity: Titrace perorálního Baklofenu (začít 5 mg 3x denně, postupně navyšovat) nebo Tizanidinu, v případě lokální spasticity lýtek aplikace botulotoxinu A.</li><li>Péče o močový měchýř a rehabilitace: Urologické vyšetření s nasazením parasympatolytik (solifenacin) na urgentní mikci a intenzivní denní fyzioterapie zaměřená na protahování šlach a nácvik chůze.</li></ul>",
            "keyPoints": [
              "Diagnóza: Hereditární spastická paraparéza (HSP / morbus Strümpell-Lorrain) – čistá nekomplikovaná forma.",
              "Typ dědičnosti: Autozomálně dominantní (postižení ve 3 po sobě jdoucích generacích u mužů i žen).",
              "Potvrzení diagnózy: Molekulárně-genetické vyšetření DNA (panel pro HSP se zaměřením na gen SPAST / SPG4).",
              "Symptomatická léčba spasticity: Titrace perorálního Baklofenu (začít 5 mg 3x denně, postupně navyšovat) nebo Tizanidinu, v případě lokální spasticity lýtek aplikace botulotoxinu A.",
              "Péče o močový měchýř a rehabilitace: Urologické vyšetření s nasazením parasympatolytik (solifenacin) na urgentní mikci a intenzivní denní fyzioterapie zaměřená na protahování šlach a nácvik chůze."
            ],
            "pearl": "HSP je genetická degenerace kortikospinálních traktů vedoucí k izolované spastické paraparéze DK."
          }
        ]
      },
      "cards": [
        {
          "id": "fc-S29-1",
          "front": "Který gen a protein je nejčastěji mutován u autozomálně dominantní čisté formy hereditární spastické paraparézy?",
          "back": "Gen SPAST kódující protein spastin (forma SPG4), který tvoří téměř polovinu všech AD případů čisté hereditární spastické paraparézy.",
          "hint": "Speciální neurologie LF OU"
        },
        {
          "id": "fc-S29-2",
          "front": "Jak se klinicky projevuje 'čistá' (pure) forma hereditární spastické paraparézy?",
          "back": "Pomalu progredující spasticitou a slabostí dolních končetin (spasticko-paretická nůžkovitá chůze, hyperreflexie, oboustranný Babinski) a urgentní inkontinencí, přičemž horní končetiny, řeč, hlavové nervy a kognice jsou zcela ušetřeny.",
          "hint": "Speciální neurologie LF OU"
        },
        {
          "id": "fc-S29-3",
          "front": "Která terapeutická modalita se využívá u pacientů s HSP a těžkou invalidizující spasticitou dolních končetin refrakterní na perorální léky?",
          "back": "Intratekální baklofenová pumpa (ITB) kontinuálně dávkující baklofen přímo do likvorového prostoru bederní páteře.",
          "hint": "Speciální neurologie LF OU"
        }
      ],
      "quiz": [
        {
          "id": "pq-S29-1",
          "question": "Základním patofyziologickým mechanismem u čistých forem HSP je:",
          "options": [
            "Autoimunitní demyelinizace periferních nervů",
            "Retrográdní axonální degenerace (dying-back axonopathy) nejdelších vláken kortikospinálního traktu v míše",
            "Zánik motoneuronů v předních rozích míšních",
            "Aplastický defekt mozečku"
          ],
          "correctIndex": 1,
          "explanation": "HSP je typickou 'dying-back' axonopatií, kdy degenerují distální zakončení nejdelších kortikospinálních axonů inervujících lumbosakrální segmenty míchy."
        },
        {
          "id": "pq-S29-2",
          "question": "Který z následujících nálezů je pro 'čistou' formu HSP TYPICKÝ?",
          "options": [
            "Těžká kognitivní demence v mladém věku",
            "Intaktní hybnost a reflexy na horních končetinách při těžké spasticitě na dolních končetinách",
            "Svalové fascikulace jazyka a dysfagie",
            "Ztráta zraku v důsledku retinitis pigmentosa"
          ],
          "correctIndex": 1,
          "explanation": "Čistá forma HSP je definována izolovaným postižením dolních končetin (spasticita, paraparéza, hyperreflexie, Babinski) při zachování normálních funkcí horních končetin, řeči a kognice."
        }
      ]
    },
    {
      "id": "s30-amyotrofick-later-ln-skler-za-als",
      "number": 30,
      "section": "specialni",
      "sectionLabel": "Speciální neurologie",
      "badgePrefix": "S30",
      "title": "Amyotrofická laterální skleróza (ALS)",
      "shortDesc": "Amyotrofická laterální skleróza (ALS / Charcotova nemoc): etiopatogeneze (zánik 1. i 2. motoneuronu, TDP-43, C9orf72, SOD1), klinické formy (spinální vs. bulbární), Gold Coast diagnostická kritéria, EMG nález a komplexní léčba (Riluzol, PEG, NIV).",
      "category": "neurodegenerace",
      "badge": "Neurodegenerativní & Motoneuronová onemocnění",
      "badgeColor": "teal",
      "theory": {
        "banner": {
          "tag": "Speciální neurologie • Otázka S30",
          "title": "Amyotrofická laterální skleróza (ALS)",
          "text": "Amyotrofická laterální skleróza (ALS / Charcotova nemoc): etiopatogeneze (zánik 1. i 2. motoneuronu, TDP-43, C9orf72, SOD1), klinické formy (spinální vs. bulbární), Gold Coast diagnostická kritéria, EMG nález a komplexní léčba (Riluzol, PEG, NIV)."
        },
        "sections": [
          {
            "title": "1. Definice a Epidemiologie",
            "content": "<p><strong>Amyotrofická laterální skleróza (ALS / Morbus Charcot / Lou Gehrigova nemoc)</strong> je fatální, rychle progredující neurodegenerativní onemocnění charakterizované <strong>současným zánikem centrálního (1.) i periferního (2.) motoneuronu</strong>. Incidence je cca 2–3 / 100 000 obyvatel, medián přežití od prvních příznaků je <strong>2–5 let</strong> (nejčastěji úmrtí na respirační selhání). Typický věk začátku je 55–70 let.</p>"
          },
          {
            "title": "2. Etiopatogeneze a Genetika",
            "content": "<ul>\n                <li><strong>Sporadická ALS (90 % případů):</strong> multifaktoriální etiopatogeneze – glutamátová excitotoxicita, oxidační stres, mitochondriální dysfunkce, porucha axonálního transportu. Neuropatologickým znakem u > 95 % je <strong>patologická intracelulární agregace proteinu TDP-43</strong>.</li>\n                <li><strong>Familiární ALS (fALS, 10 % případů):</strong> autozomálně dominantní dědičnost. Nejčastější mutace:\n                    <ul>\n                        <li><strong>C9orf72 (hexanukleotidová expanze GGGGCC, 40 % fALS):</strong> často asociována s <em>frontotemporální demencí (ALS-FTD)</em>.</li>\n                        <li><strong>SOD1 (superoxiddismutáza 1, 20 % fALS):</strong> možnost moderní genové léčby oligonukleotidem <em>Tofersen</em>.</li>\n                        <li>FUS, TARDBP.</li>\n                    </ul>\n                </li>\n            </ul>"
          },
          {
            "title": "3. Neuropatologie a Postižené struktury",
            "content": "<div class=\"anatomy-grid\">\n                <div class=\"grid-item\">\n                    <h4>Centrální motoneuron (1. motoneuron)</h4>\n                    <ul>\n                        <li>Betzovy pyramidové buňky motorické kůry gyrus precentralis a jejich <em>tractus corticospinalis</em> a <em>corticobulbaris</em>.</li>\n                        <li><strong>Klinický projev:</strong> svalová spasticita, hyperreflexie, klonus, pyramidové spastické jevy (Babinski +, Juster +), pseudobulbární syndrom.</li>\n                    </ul>\n                </div>\n                <div class=\"grid-item\">\n                    <h4>Periferní motoneuron (2. motoneuron)</h4>\n                    <ul>\n                        <li>Motorická jádra hlavových nervů v kmeni (ncl. ambiguus, ncl. n. XII, VII) a přední rohy míšní.</li>\n                        <li><strong>Klinický projev:</strong> <strong>chabé parézy, svalové atrofie (amyotrofie)</strong>, <strong>svalové fascikulace</strong> (spontánní záškuby svalových snopců) a svalové křeče (crampi).</li>\n                    </ul>\n                </div>\n            </div>\n\n            <div class=\"highlight-box\">\n                <h4>Struktury ušetřené u ALS (Klíčové pro dif. dg.!)</h4>\n                <ul>\n                    <li><strong>Okohybné nervy (n. III, IV, VI)</strong> – zachovány až do terminálního stádia (pacient může komunikovat pomocí očního snímače – Eye-Tracker).</li>\n                    <li><strong>Senzitivní systém</strong> – žádná porucha čití.</li>\n                    <li><strong>Sfinktery a funkce močového měchýře</strong> – Onufovo jádro v sakrální míše je ušetřeno (kontinence zachována).</li>\n                </ul>\n            </div>"
          },
          {
            "title": "4. Klinické formy ALS",
            "content": "<ul>\n                <li><strong>1. Spinální forma (klasická Charcotova, 70 %):</strong>\n                    <ul>\n                        <li>Začíná asymetrickou slabostí a atrofií akrálních svalů horní končetiny (interoseální svaly, thenar $\to$ <em>„opičí ruka“</em>) nebo parézou peroneálního svalstva na dolní končetině (kohoutí chůze).</li>\n                        <li><strong>Patognomický paradoxní nález:</strong> sval je těžce atrofický a chabý (léze 2. motoneuronu), ale má <strong>živý až hyperaktivní šlachový reflex a pozitivní Babinského příznak</strong> (léze 1. motoneuronu)! Přítomny difuzní svalové fascikulace.</li>\n                    </ul>\n                </li>\n                <li><strong>2. Bulbární forma (25–30 % – horší prognóza, přežití 1–2 roky):</strong>\n                    <ul>\n                        <li>Začíná postižením polykání (<strong>dysfagie</strong> – váznou tekutiny i tuhá strava) a řeči (<strong>bulbární dysartrie</strong> – setřelá, nosová řeč).</li>\n                        <li><strong>Atrofie a masivní fascikulace jazyka</strong> (obraz „hemžení červů pod sliznicí jazyka“).</li>\n                        <li><em>Pseudobulbární afekt:</em> záchvaty nekontrolovatelného patologického pláče nebo smíchu neodpovídající náladě.</li>\n                    </ul>\n                </li>\n                <li><strong>3. Respirační forma:</strong> časné postižení n. phrenicus a bránice (dušnost vleže – ortopnoe, ranní bolesti hlavy z noční hyperkapnie).</li>\n            </ul>"
          },
          {
            "title": "5. Diagnostika (Gold Coast kritéria 2020)",
            "content": "<p>Diagnóza ALS vyžaduje přítomnost:</p>\n            <ol>\n                <li>Prokázané <strong>progresivní motorické zhoršování</strong>.</li>\n                <li>Současná přítomnost známek léze <strong>1. motoneuronu A 2. motoneuronu v alespoň 1 tělesné oblasti</strong> NEBO léze 2. motoneuronu v alespoň 2 oblastech (ze 4 oblastí: bulbární, cervikální, torakální, lumbosakrální).</li>\n                <li>Vyloučení jiných onemocnění pomocí MRI a laboratorních testů.</li>\n            </ol>\n            <ul>\n                <li><strong>Elektromyografie (EMG - jehlová EMG):</strong> zlatý standard. Prokazuje <strong>akutní denervaci</strong> (fibrilace, pozitivní ostré vlny - PSW, fascikulace) a <strong>chronickou reinervaci</strong> (obrovské neurogenní motorické jednotky MUP s vysokou amplitudou a polyfázií) v několika etážích.</li>\n                <li><strong>MRI mozku a páteře:</strong> k vyloučení cervikální myelopatie, tumoru foramen magnum či syringomyelie. U ALS může být patrná hyperintenzita pyramidových drah v T2 vážení.</li>\n            </ul>"
          },
          {
            "title": "6. Terapie a Komplexní management",
            "content": "<ul>\n                <li><strong>Farmakoterapie zpomalující progresi:</strong>\n                    <ul>\n                        <li><strong>Riluzol (Rilutek):</strong> <strong>50 mg p.o. 2x denně</strong>. Inhibuje presynaptické uvolňování glutamátu a blokuje sodíkové kanály. Prodlužuje přežití o 3–6 měsíců a oddaluje nutnost UPV. Monitorace jaterních testů (ALT/AST).</li>\n                        <li><strong>Tofersen (Qalsody):</strong> antisense oligonukleotid (ASO) podávaný intratekálně u pacientů s geneticky prokázanou <em>SOD1 mutací</em>.</li>\n                    </ul>\n                </li>\n                <li><strong>Symptomatická a paliativní péče (Klíč k zachování kvality života!):</strong>\n                    <ul>\n                        <li><em>Nutriční zajištění:</em> včasná indikace <strong>perkutánní endoskopické gastrostomie (PEG)</strong> při poklesu hmotnosti o > 10 % nebo těžké dysfagii (dříve než vitální kapacita plic FVC klesne pod 50 %!).</li>\n                        <li><em>Respirační podpora:</em> <strong>neinvazivní plicní ventilace (NIV / BiPAP)</strong> při poklesu $FVC < 50\text{–}80\\%$ nebo noční hypoventilaci (výrazně prodlužuje život a zlepšuje spánek).</li>\n                        <li><em>Sialorea (nadměrné slinění):</em> aplikace botulotoxinu A do slinných žláz nebo parasympatolytika (atropin kapky, skopolamin náplast).</li>\n                        <li><em>Pseudobulbární afekt:</em> kombinace dextrometorfan/chinidin nebo SSRI.</li>\n                    </ul>\n                </li>\n            </ul>"
          }
        ]
      },
      "recall": {
        "scenarios": [
          {
            "id": "sc-S30-1",
            "title": "Klinická kazuistika – Amyotrofická laterální skleróza (ALS)",
            "question": "<strong>Kazuistika:</strong> 58letý zedník vyšetřován pro 6 měsíců progredující slabost a úbytek svaloviny pravé ruky (nemůže otočit klíčem v zámku), záškuby svalů na hrudníku a ramenou a poslední měsíc váznoucí polykání tekutin. Při vyšetření: těžká atrofie interoseálních svalů a thenaru pravé ruky s difuzními svalovými fascikulacemi, bicipitální i tricipitální reflexy na této atrofické končetině jsou paradoxně živé, na dolních končetinách oboustranně pozitivní Babinského jev, na vyplazeném jazyku patrné jemné fascikulace. Citlivost je všude intaktní.<br><br><strong>Klinický úkol:</strong> Stanovte diagnózu, interpretujte současné známky léze 1. i 2. motoneuronu a navrhněte diagnostický a paliativně-terapeutický plán.",
            "answer": "<ul style='margin: 6px 0 0 18px; padding: 0; line-height: 1.5;'><li>Diagnóza: Amyotrofická laterální skleróza (ALS) – smíšená spinální a bulbární forma splňující Gold Coast kritéria.</li><li>Průkaz kombinace motoneuronů: Léze 2. periferního motoneuronu (chabá paréza ruky, svalové atrofie, fascikulace na těle a jazyku) SOUČASNĚ s lézí 1. centrálního motoneuronu (hyperreflexie na atrofické končetině, pozitivní Babinski).</li><li>Potvrzení diagnózy: Jehlová elektromyografie (EMG) k průkazu difuzní akutní denervace (fibrilace, pozitivní ostré vlny, fascikulace) a chronické reinervace ve 3 oblastech (bulbární, cervikální, lumbální), MRI krční páteře k vyloučení spondylogenní myelopatie.</li><li>Medikamentózní léčba: Zahájení léčby Riluzolem 50 mg 2x denně po kontrole jaterních testů.</li><li>Komplexní péče a dispenzarizace: Pravidelné monitorování vitální kapacity plic (FVC), při poklesu FVC pod 50–80 % včasné zavedení neinvazivní ventilace (NIV/BiPAP) a včasná indikace perkutánní endoskopické gastrostomie (PEG) před rozvojem těžké malnutrice.</li></ul>",
            "keyPoints": [
              "Diagnóza: Amyotrofická laterální skleróza (ALS) – smíšená spinální a bulbární forma splňující Gold Coast kritéria.",
              "Průkaz kombinace motoneuronů: Léze 2. periferního motoneuronu (chabá paréza ruky, svalové atrofie, fascikulace na těle a jazyku) SOUČASNĚ s lézí 1. centrálního motoneuronu (hyperreflexie na atrofické končetině, pozitivní Babinski).",
              "Potvrzení diagnózy: Jehlová elektromyografie (EMG) k průkazu difuzní akutní denervace (fibrilace, pozitivní ostré vlny, fascikulace) a chronické reinervace ve 3 oblastech (bulbární, cervikální, lumbální), MRI krční páteře k vyloučení spondylogenní myelopatie.",
              "Medikamentózní léčba: Zahájení léčby Riluzolem 50 mg 2x denně po kontrole jaterních testů.",
              "Komplexní péče a dispenzarizace: Pravidelné monitorování vitální kapacity plic (FVC), při poklesu FVC pod 50–80 % včasné zavedení neinvazivní ventilace (NIV/BiPAP) a včasná indikace perkutánní endoskopické gastrostomie (PEG) před rozvojem těžké malnutrice."
            ],
            "pearl": "ALS je fatální neurodegenerace postihující 1. i 2. motoneuron se zachováním okohybnosti, čití a sfinkterů."
          }
        ]
      },
      "cards": [
        {
          "id": "fc-S30-1",
          "front": "Které funkce a anatomické struktury zůstávají u ALS typicky ušetřeny až do pozdních stádií?",
          "back": "Okohybná inervace (hlavové nervy III, IV, VI), senzitivní systém (všechny modality čití) a sfinkterové funkce močového měchýře a rekta (Onufovo jádro).",
          "hint": "Speciální neurologie LF OU"
        },
        {
          "id": "fc-S30-2",
          "front": "Jaký klinický nález je typický pro postižení bulbárního svalstva u ALS?",
          "back": "Progresivní dysfagie, bulbární setřelá dysartrie, atrofie jazyka s masivními svalovými fascikulacemi (obraz 'hemžení červů') a záchvaty nekontrolovatelného pláče/smíchu (pseudobulbární afekt).",
          "hint": "Speciální neurologie LF OU"
        },
        {
          "id": "fc-S30-3",
          "front": "Který lék je standardem kauzálně modifikující léčby ALS a jaký je jeho mechanismus účinku?",
          "back": "Riluzol v dávce 50 mg p.o. 2x denně, který působí jako antiglutamátergní látka (inhibuje presynaptické uvolňování glutamátu a blokuje napěťově řízené sodíkové kanály).",
          "hint": "Speciální neurologie LF OU"
        }
      ],
      "quiz": [
        {
          "id": "pq-S30-1",
          "question": "Které z následujících vyšetření je nejdůležitější pro definitivní průkaz difuzní léze periferního motoneuronu u ALS?",
          "options": [
            "Mozková scintigrafie",
            "Jehlová elektromyografie (EMG) prokazující denervaci a reinervaci ve více tělesných etážích",
            "Lumbální punkce s vyšetřením oligoklonálních pásů",
            "Pozitronová emisní tomografie (PET)"
          ],
          "correctIndex": 1,
          "explanation": "Jehlová elektromyografie (EMG) je klíčovou metodou prokazující difuzní zánik předních rohů míšních a motorických jader (akutní spontánní aktivita a neurogenní přestavba MUP) v bulbárním, cervikálním, hrudním a lumbosakrálním segmentu."
        },
        {
          "id": "pq-S30-2",
          "question": "Která genetická mutace je nejčastější příčinou familiární formy ALS a může být asociována s frontotemporální demencí?",
          "options": [
            "Expanze hexanukleotidu v genu C9orf72",
            "Bodová mutace v genu pro huntingtin",
            "Delece v genu pro dystrofin",
            "Duplikace genu PMP22"
          ],
          "correctIndex": 0,
          "explanation": "Hexanukleotidová expanze GGGGCC v genu C9orf72 je nejčastější genetickou abnormalitou u familiární ALS (40 %) i familiární FTD a je odpovědná za překryvný syndrom ALS-FTD."
        }
      ]
    },
    {
      "id": "s31-vertebrogenn-onemocn-n-kr-n-p-te-e-cervi",
      "number": 31,
      "section": "specialni",
      "sectionLabel": "Speciální neurologie",
      "badgePrefix": "S31",
      "title": "Vertebrogenní onemocnění krční páteře (Cervikální syndromy a myelopatie)",
      "shortDesc": "Onemocnění krční páteře: funkční blokády a svalové dysbalance (CC a CB syndrom), cervikální kořenové syndromy C5–C8 (klinika, reflexy, motorický a senzitivní výpadek) a cervikální spondylogenní myelopatie (CSM - stenóza spinálního kanálu, spastická paraparéza, indikace k dekompresi).",
      "category": "vertebrogenni",
      "badge": "Vertebrogenní onemocnění & Periferní nervy",
      "badgeColor": "teal",
      "theory": {
        "banner": {
          "tag": "Speciální neurologie • Otázka S31",
          "title": "Vertebrogenní onemocnění krční páteře (Cervikální syndromy a myelopatie)",
          "text": "Onemocnění krční páteře: funkční blokády a svalové dysbalance (CC a CB syndrom), cervikální kořenové syndromy C5–C8 (klinika, reflexy, motorický a senzitivní výpadek) a cervikální spondylogenní myelopatie (CSM - stenóza spinálního kanálu, spastická paraparéza, indikace k dekompresi)."
        },
        "sections": [
          {
            "title": "1. Úvod a Anatomicko-funkční poměry krční páteře",
            "content": "<p>Krční páteř (C-páteř) je nejpohyblivějším úsekem páteře, který je vystaven vysoké biomechanické zátěži. Z páteřního kanálu vystupuje <strong>8 párů krčních míšních kořenů (C1–C8)</strong> přes <em>foramina intervertebralia</em> (kořen C1 vystupuje nad atlasem, kořen <strong>C5 vystupuje nad obratlem C5</strong>, kořen <strong>C8 vystupuje mezi obratli C7 a Th1</strong>).</p>"
          },
          {
            "title": "2. Pseudoradikulární (funkční) krční syndromy",
            "content": "<div class=\"anatomy-grid\">\n                <div class=\"grid-item\">\n                    <h4>Cervikokraniální syndrom (CC syndrom)</h4>\n                    <ul>\n                        <li>Funkční blokády v oblasti horní krční páteře (C0–C3) a kraniocervikálního přechodu se svalovým spasmem subokcipitálních svalů.</li>\n                        <li><strong>Projevy:</strong> tupé bolesti šíje s propagací do záhlaví, temene až za oči (cervikogenní bolest hlavy), nauzea, nespecifické rotační závratě a nestabilita (cervikální vertigo).</li>\n                        <li><em>Neurologický nález:</em> bez kořenového motorického či senzitivního výpadku, omezená hybnost krku, palpační bolestivost úponů subokcipitálních svalů.</li>\n                    </ul>\n                </div>\n                <div class=\"grid-item\">\n                    <h4>Cervikobrachiální syndrom (CB syndrom)</h4>\n                    <ul>\n                        <li>Bolestivé funkční postižení střední a dolní C-páteře (C4–C7) s reflexním spasmem trapézů a paravertebrálních svalů.</li>\n                        <li><strong>Projevy:</strong> difuzní bolest šíje vyzařující do ramene a paže bez přesné dermatomové distribuce.</li>\n                        <li>Negativní kořenový motorický výpadek, intaktní reflexy, často spouštěcí body (trigger points) v m. trapezius a m. levator scapulae.</li>\n                    </ul>\n                </div>\n            </div>"
          },
          {
            "title": "3. Cervikální kořenové (radikulární) syndromy C5–C8",
            "content": "<p>Vznikají kompresí míšního kořene výhřezem meziobratlové ploténky (herniace disku – častější u mladších) nebo osteofyty při nekontrolované spondylartróze a unkovertebrální artróze (foraminostenóza – u seniorů). Projevují se <strong>ostrou pálivou bolestí vyzařující v přesném dermatomu</strong>, paresteziemi, kořenovým senzitivním výpadkem, periferní parézou příslušného svalu a vyhasnutím reflexu:</p>\n\n            <table class=\"data-table\">\n                <thead>\n                    <tr>\n                        <th>Kořenový syndrom</th>\n                        <th>Senzitivní inervace (dermatom)</th>\n                        <th>Klíčový sval (motorika)</th>\n                        <th>Šlachový reflex</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr>\n                        <td><strong>Radikulopatie C5</strong></td>\n                        <td>Zevní plocha paže a ramene</td>\n                        <td><strong>m. deltoideus</strong> (abdukce paže), m. biceps brachii</td>\n                        <td>Oslabení reflexu šlachy m. bicipitis (C5)</td>\n                    </tr>\n                    <tr>\n                        <td><strong>Radikulopatie C6</strong> (velmi častá)</td>\n                        <td>Laterální strana předloktí, <strong>palec a ukazovák</strong></td>\n                        <td><strong>m. biceps brachii</strong> (flexe předloktí), m. brachioradialis</td>\n                        <td><strong>Bicipitální reflex (C5/C6)</strong> a <strong>radiopronátorový reflex (C6)</strong></td>\n                    </tr>\n                    <tr>\n                        <td><strong>Radikulopatie C7</strong> (nejčastější!)</td>\n                        <td>Zadní strana paže a předloktí, <strong>prostředník (3. prst)</strong></td>\n                        <td><strong>m. triceps brachii</strong> (extenze předloktí), flexory zápěstí</td>\n                        <td><strong>Tricipitální reflex (C7)</strong></td>\n                    </tr>\n                    <tr>\n                        <td><strong>Radikulopatie C8</strong></td>\n                        <td>Ulnární strana předloktí a ruky, <strong>malík a prsteník (4.–5. prst)</strong></td>\n                        <td><strong>Drobné svaly ruky</strong> (interoseální svaly, flexe prstů – úchop ruky)</td>\n                        <td><strong>Flexorový reflex prstů (C8)</strong></td>\n                    </tr>\n                </tbody>\n            </table>"
          },
          {
            "title": "4. Cervikální spondylogenní myelopatie (CSM)",
            "content": "<div class=\"highlight-box\">\n                <h4>Klinický obraz a Diagnostika CSM</h4>\n                <ul>\n                    <li>Nejčastější příčina míšní dysfunkce u dospělých nad 50 let! Vzniká <strong>chronickou kompresí míchy v degenerativně zúženém spinálním kanálu</strong> (spondylóza, hypertrofie lig. flavum, dorsální osteofyty).</li>\n                    <li><strong>Klinický syndrom:</strong>\n                        <ul>\n                            <li><em>Léze na úrovni krční míchy:</em> <strong>chabá paréza a atrofie svalů horních končetin</strong>, neobratnost prstů (problém se zapínáním knoflíků), fascikulace.</li>\n                            <li><em>Léze pod úrovní komprese:</em> <strong>spastická paraparéza dolních končetin</strong> s hyperreflexií, klonem, spastickou ataktickou chůzí a pozitivním Babinským.</li>\n                            <li><strong>Lhermitteovo znamení:</strong> pocit elektrického výboje podél páteře při předklonu hlavy.</li>\n                            <li>Porucha hlubokého čití (propriocepce) a sfinkterové obtíže v pozdním stádiu.</li>\n                        </ul>\n                    </li>\n                    <li><strong>Zobrazovací metoda:</strong> <strong>MRI krční páteře</strong> – prokazuje zúžení sagitálního průměru páteřního kanálu (< 10–12 mm), útlak míchy a myelomalacii (T2-hyperintenzní intramedulární ložisko).</li>\n                    <li><strong>Léčba:</strong> Časná <strong>neurochirurgická dekomprese míchy</strong> (přední diskektomie s fúzí - ACDF, nebo zadní laminoplastika/laminektomie) k zabránění ireverzibilní paraplegie!</li>\n                </ul>\n            </div>"
          },
          {
            "title": "5. Konzervativní a Chirurgická léčba cervikálních syndromů",
            "content": "<ul>\n                <li><strong>Konzervativní léčba (akutní radikulopatie a pseudoradikulární syndromy):</strong>\n                    <ul>\n                        <li>Krátkodobý měkký krční límec (Schanzův límec na 3–5 dní), suché teplo.</li>\n                        <li>Farmakoterapie: NSAID (ibuprofen, diklofenak), myorelaxancia (tizanidin, tolperison), analgetika 2. stupně (tramadol), antiepileptika při neuropatické bolesti (pregabalin/gabapentin).</li>\n                        <li>Krátkodobá infuzní léčba: analgeticko-myorelaxační infuze (např. magnézium + novokain/mesokain + kortikoid).</li>\n                        <li>PRT (periradikulární terapie) pod CT/RTG navigací (cílený obstřik kořene lokálním anestetikem s kortikoidem).</li>\n                        <li>Rehabilitace: trakce krční páteře, měkké techniky, mobilizace a stabilizační cvičení (SMS systém, DNS).</li>\n                    </ul>\n                </li>\n                <li><strong>Chirurgická léčba radikulopatie:</strong> indikována při progredujícím motorickém paretickém deficitu (paréza m. deltoideus / triceps < 3/5) nebo při konzervativně neztišitelné bolesti trvající > 6–8 týdnů. Standardem je přední cervikální diskektomie a mezitělová fúze (ACDF) s implantací PEEK klícky.</li>\n            </ul>"
          }
        ]
      },
      "recall": {
        "scenarios": [
          {
            "id": "sc-S31-1",
            "title": "Klinická kazuistika – Vertebrogenní onemocnění krční páteře (Cervikální syndromy a myelopatie)",
            "question": "<strong>Kazuistika:</strong> 46letý automechanik přichází pro týden trvající krutou vystřelující bolest z krku po zadní straně pravé paže až do prostředního prstu, která se zhoršuje při záklonu a rotaci hlavy doprava (Spurlingův test pozitivní). Při vyšetření: oslabení extenze v pravém lokti proti odporu (síla 3/5), nevýbavný pravý tricipitální reflex a snížená citlivost na dorzální straně 3. prstu.<br><br><strong>Klinický úkol:</strong> Určete konkrétní kořenový syndrom, navrhněte zobrazovací metodu a sestavte plán konzervativní terapie.",
            "answer": "<ul style='margin: 6px 0 0 18px; padding: 0; line-height: 1.5;'><li>Diagnóza: Akutní kompresivní krční radikulopatie C7 vpravo (nejčastěji způsobená foraminální herniací disku C6/C7).</li><li>Klinické koreláty: Oslabení m. triceps brachii, výpadek tricipitálního reflexu a dermatomu C7 (3. prst).</li><li>Zobrazovací vyšetření: MRI krční páteře (k vizualizaci výhřezu ploténky C6/C7 a míry útlaku nervového kořene ve foramen intervertebrale).</li><li>Akutní konzervativní léčba: Krátkodobá imobilizace měkkým krčním límcem, klidový režim, nesteroidní antiflogistika (např. diklofenak/etoricoxib) + myorelaxancia, gabapentinoidy (pregabalin) na neuropatickou bolest, popř. cílený periradikulární obstřik (PRT) pod CT.</li><li>Chirurgická indikace: Pokud by došlo k progresi motorické parézy m. triceps brachii (< 3/5) nebo selhání konzervativní terapie po 6 týdnech, je indikována přední cervikální diskektomie a fúze (ACDF).</li></ul>",
            "keyPoints": [
              "Diagnóza: Akutní kompresivní krční radikulopatie C7 vpravo (nejčastěji způsobená foraminální herniací disku C6/C7).",
              "Klinické koreláty: Oslabení m. triceps brachii, výpadek tricipitálního reflexu a dermatomu C7 (3. prst).",
              "Zobrazovací vyšetření: MRI krční páteře (k vizualizaci výhřezu ploténky C6/C7 a míry útlaku nervového kořene ve foramen intervertebrale).",
              "Akutní konzervativní léčba: Krátkodobá imobilizace měkkým krčním límcem, klidový režim, nesteroidní antiflogistika (např. diklofenak/etoricoxib) + myorelaxancia, gabapentinoidy (pregabalin) na neuropatickou bolest, popř. cílený periradikulární obstřik (PRT) pod CT.",
              "Chirurgická indikace: Pokud by došlo k progresi motorické parézy m. triceps brachii (< 3/5) nebo selhání konzervativní terapie po 6 týdnech, je indikována přední cervikální diskektomie a fúze (ACDF)."
            ],
            "pearl": "Krční kořenové syndromy: C5 (m. deltoideus), C6 (palec, m. biceps, bicipitální r.), C7 (3. prst, m. triceps, tricipitální r. - nejčastější), C8 (malík, svaly ruky, flexory)."
          }
        ]
      },
      "cards": [
        {
          "id": "fc-S31-1",
          "front": "Jaký klinický deficit (motorika, dermatom, šlachový reflex) charakterizuje nejčastější cervikální radikulopatii C7?",
          "back": "Slabost m. triceps brachii (váznoucí extenze předloktí) a flexorů zápěstí, hypestezie v dermatomu prostředníku (3. prstu) a vyhasnutí či oslabení tricipitálního reflexu.",
          "hint": "Speciální neurologie LF OU"
        },
        {
          "id": "fc-S31-2",
          "front": "Jaký neurologický syndrom vzniká při cervikální spondylogenní myelopatii (CSM)?",
          "back": "Smíšený syndrom: periferní (chabá) paréza a atrofie drobných svalů horních končetin s neobratností prstů (v úrovni krční léze) KOMBINOVANÁ se spastickou paraparézou dolních končetin, hyperreflexií a poruchou stability chůze (pod úrovní léze).",
          "hint": "Speciální neurologie LF OU"
        },
        {
          "id": "fc-S31-3",
          "front": "Který míšní kořen je postižen u pacienta s vyhaslým bicipitálním reflexem, oslabením flexe v lokti a necitlivostí palce a ukazováku?",
          "back": "Míšní kořen C6 (radikulární syndrom C6).",
          "hint": "Speciální neurologie LF OU"
        }
      ],
      "quiz": [
        {
          "id": "pq-S31-1",
          "question": "Který manévr/test slouží k provokaci kořenové bolesti při cervikální radikulopatii kompresí foramen intervertebrale?",
          "options": [
            "Lasègueův manévr",
            "Spurlingův test (axiální tlak na temeno hlavy v mírné extenzi a lateroflexi krku)",
            "Trendelenburgův test",
            "Fromentův příznak"
          ],
          "correctIndex": 1,
          "explanation": "Spurlingův test (komprese foramen intervertebrale záklonem a úklonem hlavy k postižené straně s lehkým tlakem na temeno) vyvolá prudké vyzáření radikulární bolesti do příslušného dermatomu paže."
        },
        {
          "id": "pq-S31-2",
          "question": "Jaká je nejčastější lokalizace degenerativního postižení a výhřezu ploténky v oblasti krční páteře?",
          "options": [
            "Segment C1/C2",
            "Segment C6/C7 (útlak kořene C7)",
            "Segment C2/C3",
            "Segment C7/Th1"
          ],
          "correctIndex": 1,
          "explanation": "Nejvyšší mechanické přetížení a nejčastější výhřez krční ploténky je v segmentu C6/C7 s kompresí kořene C7 (následovaný segmentem C5/C6 s kompresí kořene C6)."
        }
      ]
    },
    {
      "id": "s32-vertebrogenn-onemocn-n-hrudn-p-te-e-tora",
      "number": 32,
      "section": "specialni",
      "sectionLabel": "Speciální neurologie",
      "badgePrefix": "S32",
      "title": "Vertebrogenní onemocnění hrudní páteře (Torakalgie a dif. dg.)",
      "shortDesc": "Hrudní páteř a torakalgie: biomechanika torakálního koše, facetový syndrom, interkostální neuralgie, vzácné torakální diskopatie a kritická diferenciální diagnostika viscerálních bolestí hrudníku (AIM, disekce aorty, herpes zoster, plicní embolie).",
      "category": "vertebrogenni",
      "badge": "Vertebrogenní onemocnění & Periferní nervy",
      "badgeColor": "teal",
      "theory": {
        "banner": {
          "tag": "Speciální neurologie • Otázka S32",
          "title": "Vertebrogenní onemocnění hrudní páteře (Torakalgie a dif. dg.)",
          "text": "Hrudní páteř a torakalgie: biomechanika torakálního koše, facetový syndrom, interkostální neuralgie, vzácné torakální diskopatie a kritická diferenciální diagnostika viscerálních bolestí hrudníku (AIM, disekce aorty, herpes zoster, plicní embolie)."
        },
        "sections": [
          {
            "title": "1. Anatomie a Specifika hrudní páteře",
            "content": "<p>Hrudní páteř (Th-páteř, 12 obratlů Th1–Th12) tvoří pevnou součást hrudního koše. Její pohyblivost je fyziologicky výrazně omezena skloubením se žebry (<em>articulationes costovertebrales et costotransversariae</em>) a rigidním hrudním košem. Z tohoto důvodu jsou výhřezy hrudních plotének velmi vzácné (< 1 % všech diskopatií), avšak <strong>funkční blokády a sekundární vertebrogenní bolesti (torakalgie) jsou extrémně časté</strong>.</p>"
          },
          {
            "title": "2. Vertebrogenní syndromy hrudní páteře",
            "content": "<div class=\"anatomy-grid\">\n                <div class=\"grid-item\">\n                    <h4>1. Funkční torakalgie a Blokády žeber</h4>\n                    <ul>\n                        <li>Nejčastější příčina vertebrogenní bolesti na hrudi.</li>\n                        <li><strong>Blokády kostovertebrálních a žeberních skloubení:</strong> ostrá bodavá bolest v mezižebří nebo za sternem, která se <em>typicky zhoršuje při hlubokém nádechu, rotaci trupu, kašli a kýchání</em>.</li>\n                        <li><strong>Palpační nález:</strong> reflexní spasmy paravertebrálních a interkostálních svalů, bolestivost kostotransverzálních kloubů a úponů prsních svalů (přední hrudní syndrom / Tietzeův syndrom – zánět/otok kostochondrálního přechodu žeber).</li>\n                    </ul>\n                </div>\n                <div class=\"grid-item\">\n                    <h4>2. Interkostální neuralgie a Torakální radikulopatie</h4>\n                    <ul>\n                        <li><strong>Interkostální neuralgie:</strong> pálivá, bodavá neuropatická bolest šířící se pásovitě podél mezižeberního nervu (n. intercostalis) od páteře k přední ploše hrudníku.</li>\n                        <li><strong>Výhřez hrudní ploténky (vzácný, typicky Th8–Th12):</strong> komprese kořene vyvolává pásovitou radikulalgii v příslušném dermatomu (např. Th4 v úrovni prsních bradavek, Th10 v úrovni pupku).</li>\n                        <li><em>Varování:</em> Při velkém mediálním výhřezu hrozí <strong>akutní komprese hrudní míchy</strong> se spastickou paraparézou DK!</li>\n                    </ul>\n                </div>\n            </div>"
          },
          {
            "title": "3. Diferenciální diagnostika – Zásadní vyloučení viscerální etiologie!",
            "content": "<div class=\"highlight-box\">\n                <h4>Kritická pravidla diferenciální diagnózy torakalgie</h4>\n                <p>Každá nově vzniklá bolest na hrudníku je <strong>považována za kardiální nebo viscerální, dokud se neprokáže opak!</strong> Diagnózu vertebrogenní torakalgie lze stanovit až po vyloučení život ohrožujících stavů:</p>\n                <ul>\n                    <li><strong>Akutní koronární syndrom (STEMI / NSTEMI / AP):</strong> retrosternální tlaková/svíravá bolest s propagací do čelisti, ramene, malíku LHK, nezávislá na poloze trupu, vegetativní doprovod (pocení, dušnost). <em>Vždy natočit EKG a odebrat troponin!</em></li>\n                    <li><strong>Akutní disekce hrudní aorty (Stanford A / B):</strong> náhlá, extrémně krutá „trhavá“ bolest mezi lopatkami vystřelující do zad a břicha, asymetrie pulzací a TK na pažích.</li>\n                    <li><strong>Plicní embolie a Pleuritida:</strong> pleuritická bolest vázaná na dech, akutní klidová dušnost, tachykardie, hypotenze (D-dimery, CT angiografie plicnice).</li>\n                    <li><strong>Herpes zoster (Pásový opar v pre-eruptivní fázi):</strong> krutá pásovitá pálivá bolest v dermatomu Th, která předchází typickému puchýřnatému výsevu o 3–5 dní!</li>\n                    <li><strong>Gastrointestinální příčiny:</strong> refluxní ezofagitida, spasmy jícnu, perforace gastroduodenálního vředu, akutní pankreatitida, biliární kolika.</li>\n                    <li><strong>Patologické fraktury obratlů:</strong> u osteoporózy nebo mnohočetného myelomu a skeletních metastáz (prudká lokální bolest při poklepu na trn obratle).</li>\n                </ul>\n            </div>"
          },
          {
            "title": "4. Diagnostika a Terapie",
            "content": "<ul>\n                <li><strong>Diagnostický algoritmus:</strong>\n                    <ol>\n                        <li>12svodové EKG + kardiospecifické enzymy (troponin) + RTG srdce a plic.</li>\n                        <li>Podrobné neurologické a kineziologické vyšetření páteře a žeber.</li>\n                        <li>Při podezření na radikulopatii, myelopatii či patologickou frakturu: <strong>RTG / CT / MRI hrudní páteře</strong>.</li>\n                    </ol>\n                </li>\n                <li><strong>Terapie funkčních torakalgií:</strong>\n                    <ul>\n                        <li>Myoskeletální medicína: mobilizace žeber a hrudní páteře, měkké techniky na hypertonické paravertebrální a mezižeberní svaly.</li>\n                        <li>Farmakoterapie: nesteroidní antiflogistika (NSAID), lokální gely, centrální myorelaxancia, u neuralgií gabapentinoidy (pregabalin).</li>\n                        <li>Lokální obstřiky: infiltrace bolestivých kostotransverzálních skloubení nebo interkostální blokáda lokálním anestetikem.</li>\n                        <li>Rehabilitace: dechová gymnastika, posílení hlubokého stabilizačního systému páteře.</li>\n                    </ul>\n                </li>\n            </ul>"
          }
        ]
      },
      "recall": {
        "scenarios": [
          {
            "id": "sc-S32-1",
            "title": "Klinická kazuistika – Vertebrogenní onemocnění hrudní páteře (Torakalgie a dif. dg.)",
            "question": "<strong>Kazuistika:</strong> 54letý kuřák a hypertonik přichází na pohotovost pro 4 hodiny trvající ostrou pálivou bolest pod levým prsem vystřelující podél mezižebří do zad, která začala po zvednutí těžkého břemene. Bolest se zhoršuje při hlubokém nádechu a rotaci trupu. Pacient se obává infarktu myokardu.<br><br><strong>Klinický úkol:</strong> Sestavte bezpečný diagnostický postup krok za krokem a navrhněte léčbu po vyloučení interní patologie.",
            "answer": "<ul style='margin: 6px 0 0 18px; padding: 0; line-height: 1.5;'><li>Okamžité vyloučení kardiopulmonální urgence: Statimové 12svodové EKG, odběr krve na kardiální troponin T/I a D-dimery, změření krevního tlaku na obou pažích (vyloučení disekce aorty) a fyzikální vyšetření plic.</li><li>Cílené vertebrogenní vyšetření: Po negativitě kardiálních markerů palpace hrudní páteře, žeber a mezižeberních prostorů – zjištění palpační citlivosti 5. levého kostovertebrálního skloubení a reflexního spasmu mezižeberních svalů.</li><li>Inspekce kůže: Kontrola kůže v dermatomu Th5 k vyloučení incipientního herpetického výsevu (herpes zoster).</li><li>Stanovení diagnózy: Funkční vertebrogenní torakalgie s blokádou kostovertebrálního skloubení Th5 vlevo a interkostální neuralgií.</li><li>Léčebný plán: Jemná myoskeletální mobilizace blokovaného žebra, aplikace lokálního NSAID gelu, krátkodobě perorální nesteroidní antiflogistikum (Ibuprofen 400 mg) a nácvik správného dechového stereotypu.</li></ul>",
            "keyPoints": [
              "Okamžité vyloučení kardiopulmonální urgence: Statimové 12svodové EKG, odběr krve na kardiální troponin T/I a D-dimery, změření krevního tlaku na obou pažích (vyloučení disekce aorty) a fyzikální vyšetření plic.",
              "Cílené vertebrogenní vyšetření: Po negativitě kardiálních markerů palpace hrudní páteře, žeber a mezižeberních prostorů – zjištění palpační citlivosti 5. levého kostovertebrálního skloubení a reflexního spasmu mezižeberních svalů.",
              "Inspekce kůže: Kontrola kůže v dermatomu Th5 k vyloučení incipientního herpetického výsevu (herpes zoster).",
              "Stanovení diagnózy: Funkční vertebrogenní torakalgie s blokádou kostovertebrálního skloubení Th5 vlevo a interkostální neuralgií.",
              "Léčebný plán: Jemná myoskeletální mobilizace blokovaného žebra, aplikace lokálního NSAID gelu, krátkodobě perorální nesteroidní antiflogistikum (Ibuprofen 400 mg) a nácvik správného dechového stereotypu."
            ],
            "pearl": "Hrudní páteř je pevně fixována žebry; dominují funkční blokády žeber a kostovertebrálních kloubů, výhřezy plotének jsou vzácné."
          }
        ]
      },
      "cards": [
        {
          "id": "fc-S32-1",
          "front": "Proč je u každého pacienta s nově vzniklou bolestí v oblasti hrudní páteře a hrudníku nutné provést EKG a laboratorní vyšetření před stanovením vertebrogenní diagnózy?",
          "back": "K bezpečnému vyloučení akutního infarktu myokardu a akutního koronárního syndromu, které se mohou manifestovat bolestí na hrudi imitující blokádu páteře či mezižebří.",
          "hint": "Speciální neurologie LF OU"
        },
        {
          "id": "fc-S32-2",
          "front": "Která infekční neurologická diagnóza se typicky manifestuje krutou pásovitou pálivou bolestí v hrudním dermatomu ještě několik dní před vznikem kožních projevů?",
          "back": "Herpes zoster (pásový opar) v preeruptivní fázi, reaktivace VZV v senzitivním spinálním gangliu.",
          "hint": "Speciální neurologie LF OU"
        },
        {
          "id": "fc-S32-3",
          "front": "Které dermatomy odpovídají orientačním bodům prsních bradavek a pupku při vyšetření hrudní radikulopatie?",
          "back": "Dermatom Th4 odpovídá úrovni prsních bradavek; dermatom Th10 odpovídá úrovni pupku.",
          "hint": "Speciální neurologie LF OU"
        }
      ],
      "quiz": [
        {
          "id": "pq-S32-1",
          "question": "Který klinický znak nejvíce svědčí pro vertebrogenní (funkční muskuloskeletální) původ bolesti na hrudníku oproti angině pectoris?",
          "options": [
            "Bolest vzniká v klidu a budí pacienta ze spánku",
            "Bolest je ostře vázána na polohu trupu, rotaci a hluboký nádech a je přesně palpačně reprodukovatelná na žebru",
            "Bolest vyzařuje do dolní čelisti a je provázena studeným potem",
            "Bolest ustupuje po sublinguálním nitroglycerinu"
          ],
          "correctIndex": 1,
          "explanation": "Závislost bolesti na mechanickém pohybu trupu, nádechu/kašli a zejména přesná reprodukovatelnost bolesti palpací v místě žeberního či mezižeberního skloubení je typická pro vertebrogenní poruchu."
        },
        {
          "id": "pq-S32-2",
          "question": "Co označuje Tietzeův syndrom v diferenciální diagnostice bolestí přední stěny hrudníku?",
          "options": [
            "Disekci a. thoracica interna",
            "Bolestivý neinfekční zánět a zduření kostochondrálního přechodu 2. nebo 3. žebra a sterna",
            "Výhřez ploténky Th1/Th2",
            "Spasmus jícnového svěrače"
          ],
          "correctIndex": 1,
          "explanation": "Tietzeův syndrom je benigní, bolestivý otok kostochondrálního nebo sternokostálního spojení (nejčastěji 2. a 3. žebra), který se manifestuje lokalizovanou bolestí imitující kardiální ischemii."
        }
      ]
    },
    {
      "id": "s33-vertebrogenn-onemocn-n-bedern-p-te-e-a-s",
      "number": 33,
      "section": "specialni",
      "sectionLabel": "Speciální neurologie",
      "badgePrefix": "S33",
      "title": "Vertebrogenní onemocnění bederní páteře a Syndrom cauda equina",
      "shortDesc": "Lumbální syndromy: akutní lumbago, lumbální radikulopatie L4, L5, S1 (komprese kořenů, dermatomy, klíčové svaly, reflexy, Lasègueův manévr) a Syndrom cauda equina (urgentní indikace k neurochirurgické dekompresi do 24–48 hod).",
      "category": "vertebrogenni",
      "badge": "Vertebrogenní onemocnění & Periferní nervy",
      "badgeColor": "teal",
      "theory": {
        "banner": {
          "tag": "Speciální neurologie • Otázka S33",
          "title": "Vertebrogenní onemocnění bederní páteře a Syndrom cauda equina",
          "text": "Lumbální syndromy: akutní lumbago, lumbální radikulopatie L4, L5, S1 (komprese kořenů, dermatomy, klíčové svaly, reflexy, Lasègueův manévr) a Syndrom cauda equina (urgentní indikace k neurochirurgické dekompresi do 24–48 hod)."
        },
        "sections": [
          {
            "title": "1. Úvod a Anatomie lumbosakrální páteře",
            "content": "<p>Bederní páteř (L-páteř, L1–L5) a křížová kost (S1–S5) nesou největší axiální zátěž celého těla. Mícha dospělého člověka končí na úrovni obratlového těla <strong>L1–L2 v podobě conus medullaris</strong>. Pod touto úrovní páteřním kanálem probíhají volné míšní kořeny lumbosakrální míchy vytvářející <strong>cauda equina (koňský ocas)</strong>.</p>"
          },
          {
            "title": "2. Lumbální kořenové (radikulární) syndromy L4, L5 a S1",
            "content": "<p>Nejčastější příčinou je <strong>dorzolaterální herniace meziobratlové ploténky</strong> (95 % všech výhřezů je v segmentech <strong>L4/L5</strong> a <strong>L5/S1</strong>). V lumbální oblasti platí pravidlo, že <em>dorzolaterální výhřez ploténky utlačuje kořen vystupující o etáž níže</em> (výhřez L4/L5 utlačuje kořen L5, výhřez L5/S1 utlačuje kořen S1):</p>\n\n            <table class=\"data-table\">\n                <thead>\n                    <tr>\n                        <th>Kořenový syndrom</th>\n                        <th>Typický výhřez disku</th>\n                        <th>Senzitivní distribuce (vyzařování bolesti)</th>\n                        <th>Klíčový sval (motorika) a funkční test</th>\n                        <th>Šlachový reflex</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr>\n                        <td><strong>Radikulopatie L4</strong></td>\n                        <td>Disk L3/L4</td>\n                        <td>Přední strana stehna, přes koleno na <strong>vnitřní kotník</strong></td>\n                        <td><strong>m. quadriceps femoris</strong> (extenze v koleni, podklesávání kolene, obtížná chůze ze schodů)</td>\n                        <td><strong>Patelární reflex - RP (L2–L4)</strong> je oslaben/vyhaslý</td>\n                    </tr>\n                    <tr>\n                        <td><strong>Radikulopatie L5</strong> (nejčastější!)</td>\n                        <td>Disk L4/L5</td>\n                        <td>Zevní strana stehna a bérce, přes <strong>hřbet nohy k palci</strong></td>\n                        <td><strong>m. extensor hallucis longus</strong> (dorzální flexe palce), m. tibialis anterior $\to$ <strong>vázne chůze po patách</strong> (padající špička)</td>\n                        <td>Reflexy na DK jsou normální (reflex m. tibialis posterior může být oslaben)</td>\n                    </tr>\n                    <tr>\n                        <td><strong>Radikulopatie S1</strong> (velmi častá)</td>\n                        <td>Disk L5/S1</td>\n                        <td>Zadní strana stehna a lýtka, pata, <strong>zevní hrana plosky a malík</strong></td>\n                        <td><strong>m. triceps surae</strong> (plantární flexe nohy) $\to$ <strong>vázne chůze po špičkách</strong></td>\n                        <td><strong>Reflex šlachy Achillovy - RŠA (L5–S2)</strong> je vyhaslý</td>\n                    </tr>\n                </tbody>\n            </table>"
          },
          {
            "title": "3. Provokační manévry a Fyzikální vyšetření",
            "content": "<ul>\n                <li><strong>Lasègueův manévr (Straight Leg Raise - SLR):</strong> zvedání natažené dolní končetiny vleže na zádech vyvolá typické vyzáření ostré bolesti do končetiny v úhlu <strong>< 60°</strong> (dráždění kořenů L5 a S1). Zkřížený Lasègue (bolest v postižené noze při elevaci zdravé nohy) je vysoce specifický pro velký výhřez disku.</li>\n                <li><strong>Obrácený Lasègue (Femoral Nerve Stretch Test / Wassermannův test):</strong> hyperextenze v kyčli vleže na břiše vyvolá bolest na přední ploše stehna (dráždění kořene L4 a n. femoralis).</li>\n                <li><strong>Thomayerova vzdálenost:</strong> měření vzdálenosti prstů od země při předklonu (hodnotí globální flexibilitu páteře).</li>\n            </ul>\n\n            <div class=\"highlight-box\">\n                <h4>4. Syndrom Cauda Equina (Neurochirurgický urgentní stav!)</h4>\n                <p>Vzniká masivní centrální (mediální) herniací disku v segmentu L2–S1 nebo intraspSpinálním tumorem s kompresí všech kaudálních kořenů:</p>\n                <ul>\n                    <li><strong>Klinická tetráda:</strong>\n                        <ol>\n                            <li><strong>Sedlovitá (perianogenitální) hypestezie/anestezie (S3–S5):</strong> ztráta citlivosti na hýždích, hrázi, kolem konečníku a genitálu (oblast sedla na koni).</li>\n                            <li><strong>Sfinkterové poruchy:</strong> <em>akutní retence moči</em> s paradoxním přetékáním (ischuria paradoxa), ztráta pocitu nucení na močení a stolici, atonie a inkontinence análního svěrače (vyhaslý anální reflex).</li>\n                            <li><strong>Chabá paraparéza až paraplegie dolních končetin:</strong> asymetrická nebo oboustranná slabost distálního svalstva nohou s areflexií RŠA oboustranně.</li>\n                            <li><strong>Sexuální dysfunkce:</strong> akutní ztráta erekce a genitální citlivosti.</li>\n                        </ol>\n                    </li>\n                    <li><strong>URGENTNÍ POSTUP:</strong> Okamžité provedení statimového <strong>MRI lumbosakrální páteře</strong> a <strong>urgentní neurochirurgická dekomprese (diskektomie/laminektomie) do 24–48 hodin!</strong> Prodlení nad 48 hodin vede k trvalé ireverzibilní močové a fekální inkontinenci a erektilní dysfunkci!</li>\n                </ul>\n            </div>"
          },
          {
            "title": "5. Léčba lumbálních vertebrogenních syndromů",
            "content": "<ul>\n                <li><strong>Konzervativní léčba (u nekomplikovaných radikulopatií bez těžké parézy):</strong>\n                    <ul>\n                        <li>Krátkodobý klid na lůžku v úlevové poloze (flexe v kyčlích a kolenou – Fowlerova poloha).</li>\n                        <li>Farmakoterapie: NSAID (ibuprofen, etoricoxib), paracetamol, myorelaxancia (krátkodobě), pregabalin/gabapentin při neuropatické bolesti.</li>\n                        <li>Intervenční léčba: <strong>Periradikulární terapie (PRT)</strong> – cílená aplikace lokálního anestetika a kortikoidu k durálnímu vaku a kořeni pod CT kontrolou. Kaudální blokáda přes hiatus sacralis.</li>\n                        <li>Rehabilitace a fyzioterapie (metoda McKenzie, SM systém, DNS dle Koláře).</li>\n                    </ul>\n                </li>\n                <li><strong>Indikace k operační léčbě (mikrodisekce / sekvestrektomie):</strong>\n                    <ul>\n                        <li><em>Absolutní (urgentní do 24–48h):</em> Syndrom cauda equina, akutní těžká chabá motorická paréza (pokles svalové síly < 3/5 – např. padající špička u L5).</li>\n                        <li><em>Relativní (plánovaná):</em> Neúspěch komplexní konzervativní léčby trvající 6–8 týdnů při přetrvávání invalidizující kořenové bolesti s korelujícím nálezem na MRI.</li>\n                    </ul>\n                </li>\n            </ul>"
          }
        ]
      },
      "recall": {
        "scenarios": [
          {
            "id": "sc-S33-1",
            "title": "Klinická kazuistika – Vertebrogenní onemocnění bederní páteře a Syndrom cauda equina",
            "question": "<strong>Kazuistika:</strong> 49letý skladník po zvednutí těžké palety pocítil náhlé křupnutí v kříži s propagací bolesti do obou dolních končetin. Po 12 hodinách si všiml, že se nemůže sám vymočit, má necitlivé hýždě při sezení na toaletě a zakopává oběma nohama. Při vyšetření: močový měchýř hmatný 3 prsty nad symfýzou (retence 800 ml na UZ), nulová citlivost na dotyk v perianální krajině, atonický anální svěrač a oboustranně oslabená flexe nohou a prstů.<br><br><strong>Klinický úkol:</strong> Stanovte urgentní diagnózu, zhodnoťte riziko prodlení a popište okamžitý management.",
            "answer": "<ul style='margin: 6px 0 0 18px; padding: 0; line-height: 1.5;'><li>Diagnóza: Syndrom cauda equina (masivní mediální herniace disku L-páteře) se sedlovitou anestezií S3–S5, sfinkterovou parézou a chabou paraparézou.</li><li>Zhodnocení naléhavosti: Absolutní neurochirurgická a neurologická pohotovost – hrozí trvalá močová/anální inkontinence a ireverzibilní motorický deficit při dekompresi provedené po více než 48 hodinách.</li><li>Zajištění pacienta: Okamžité zavedení permanentního močového katétru k derivaci moči a prevenci poškození detruzoru a ledvin.</li><li>Diagnostika: Statimové urgentní MRI lumbosakrální páteře k potvrzení lokalizace a velikosti výhřezu (nebo urgentní CT páteře).</li><li>Operace: Okamžitý transport na neurochirurgii a urgentní operační revize (laminektomie / sekvestrektomie a dekomprese durálního vaku).</li></ul>",
            "keyPoints": [
              "Diagnóza: Syndrom cauda equina (masivní mediální herniace disku L-páteře) se sedlovitou anestezií S3–S5, sfinkterovou parézou a chabou paraparézou.",
              "Zhodnocení naléhavosti: Absolutní neurochirurgická a neurologická pohotovost – hrozí trvalá močová/anální inkontinence a ireverzibilní motorický deficit při dekompresi provedené po více než 48 hodinách.",
              "Zajištění pacienta: Okamžité zavedení permanentního močového katétru k derivaci moči a prevenci poškození detruzoru a ledvin.",
              "Diagnostika: Statimové urgentní MRI lumbosakrální páteře k potvrzení lokalizace a velikosti výhřezu (nebo urgentní CT páteře).",
              "Operace: Okamžitý transport na neurochirurgii a urgentní operační revize (laminektomie / sekvestrektomie a dekomprese durálního vaku)."
            ],
            "pearl": "Radikulopatie L4: útlak n. femoralis, m. quadriceps, vnitřní kotník, vyhaslý patelární reflex."
          }
        ]
      },
      "cards": [
        {
          "id": "fc-S33-1",
          "front": "Jak se klinicky odliší radikulární syndrom L5 od radikulárního syndromu S1 při funkčním motorickém testování chůze?",
          "back": "U radikulopatie L5 vázne chůze po patách (oslabení m. extensor hallucis longus a m. tibialis anterior – padající špička), zatímco u radikulopatie S1 vázne chůze po špičkách (oslabení m. triceps surae s vyhaslým reflexem šlachy Achillovy).",
          "hint": "Speciální neurologie LF OU"
        },
        {
          "id": "fc-S33-2",
          "front": "Které příznaky tvoří klinický obraz syndromu cauda equina a jaké je časové okno pro urgentní chirurgický výkon?",
          "back": "Sedlovitá anestezie (S3–S5 perianogenitálně), sfinkterové poruchy (retence moči s paradoxní ischiurií, atonie análního svěrače) a chabá paraparéza DK. Urgentní neurochirurgická dekomprese musí být provedena do 24–48 hodin od vzniku.",
          "hint": "Speciální neurologie LF OU"
        },
        {
          "id": "fc-S33-3",
          "front": "Který míšní kořen je nejčastěji utlačen při běžném dorzolaterálním výhřezu meziobratlové ploténky L4/L5?",
          "back": "Míšní kořen L5 (v bederní oblasti dorzolaterální výhřez disku utlačuje kořen probíhající páteřním kanálem do nižšího foramina).",
          "hint": "Speciální neurologie LF OU"
        }
      ],
      "quiz": [
        {
          "id": "pq-S33-1",
          "question": "Vyhaslý patelární reflex, slabost m. quadriceps femoris a porucha citlivosti na vnitřním kotníku odpovídají lézi kořene:",
          "options": [
            "Kořen L3",
            "Kořen L4",
            "Kořen L5",
            "Kořen S1"
          ],
          "correctIndex": 1,
          "explanation": "Kořen L4 zajišťuje motoriku m. quadriceps femoris (patelární reflex L2–L4) a senzitivitu na přední ploše stehna, koleni a vnitřní straně bérce a kotníku."
        },
        {
          "id": "pq-S33-2",
          "question": "Při vyšetření Lasègueova manévru se za pozitivní výsledek svědčící pro radikulární dráždění L5/S1 považuje:",
          "options": [
            "Pouhý tah ve svalech hamstringů v úhlu 90°",
            "Vyzáření ostré bolesti podél dermatomu do dolní končetiny při pasivní elevaci natažené DK v úhlu pod 60°",
            "Zvýšení krevního tlaku",
            "Záškub pately"
          ],
          "correctIndex": 1,
          "explanation": "Pravý pozitivní Lasègueův příznak znamená reprodukci radikulární vystřelující bolesti pod koleno do nohy při pasivní flexi v kyčli s extendovaným kolenem v úhlu < 60° (kdy dochází k maximálnímu tahu za kořeny L5 a S1)."
        }
      ]
    },
    {
      "id": "s34-syndrom-karp-ln-ho-tunelu-a-inov-syndrom",
      "number": 34,
      "section": "specialni",
      "sectionLabel": "Speciální neurologie",
      "badgePrefix": "S34",
      "title": "Syndrom karpálního tunelu (a úžinové syndromy horní končetiny)",
      "shortDesc": "Syndrom karpálního tunelu (CTS): nejčastější úžinový syndrom, komprese n. medianus pod retinaculum flexorum, noční brnění prstů (flick sign), provokační testy (Tinel, Phalen), EMG diagnostika a léčebné postupy (dlaha, lokální kortikoid, chirurgické protětí).",
      "category": "vertebrogenni",
      "badge": "Úžinové syndromy & Periferní nervy",
      "badgeColor": "teal",
      "theory": {
        "banner": {
          "tag": "Speciální neurologie • Otázka S34",
          "title": "Syndrom karpálního tunelu (a úžinové syndromy horní končetiny)",
          "text": "Syndrom karpálního tunelu (CTS): nejčastější úžinový syndrom, komprese n. medianus pod retinaculum flexorum, noční brnění prstů (flick sign), provokační testy (Tinel, Phalen), EMG diagnostika a léčebné postupy (dlaha, lokální kortikoid, chirurgické protětí)."
        },
        "sections": [
          {
            "title": "1. Úvod a Anatomie karpálního tunelu",
            "content": "<p><strong>Syndrom karpálního tunelu (CTS - Carpal Tunnel Syndrome)</strong> je <strong>nejčastějším úžinovým (kompresivním) syndromem</strong> v humánní medicíně (představuje až 90 % všech úžinových neuropatií). Postihuje častěji ženy (poměr 3–4:1) ve věku 40–60 let a je častou nemocí z povolání (stereotypní práce s přetěžováním zápěstí, práce s vibračními nástroji, práce na počítači).</p>\n            <ul>\n                <li><strong>Ohraničení karpálního tunelu:</strong> dorzálně a po stranách karpální kosti zápěstí (<em>sulcus carpi</em>), ventrálně tuhé <em>retinaculum musculorum flexorum (ligamentum carpi transversum)</em>.</li>\n                <li><strong>Obsah tunelu:</strong> 9 šlach flexorů prstů (šlachy m. flexor digitorum superficialis, profundus a m. flexor pollicis longus) a <strong>nervus medianus</strong>.</li>\n            </ul>"
          },
          {
            "title": "2. Etiopatogeneze a Rizikové faktory",
            "content": "<ul>\n                <li>Vzniká nepoměrem mezi objemem karpálního kanálu a jeho obsahem $\to$ zvýšení intrakarpálního tlaku $\to$ chronická ischémie n. medianus, venózní stáza, edém a demyelinizace s následnou axonální degenerací.</li>\n                <li><strong>Rizikové faktory a asociované choroby:</strong>\n                    <ul>\n                        <li>Profesionální přetěžování (opakovaná flexe/extenze zápěstí, vibrace).</li>\n                        <li>Endokrinní a metabolické: <strong>diabetes mellitus</strong>, <strong>hypotyreóza</strong> (myxedém), <strong>akromegalie</strong>, těhotenství a laktace (retence tekutin), menopauza.</li>\n                        <li>Zánětlivé a strukturální: revmatoidní artritida (tenosynovitida), stavy po frakturách distálního radia (Collesova zlomenina), dialyzovaní pacienti (depozice $\beta_2$-mikroglobulinu).</li>\n                    </ul>\n                </li>\n            </ul>"
          },
          {
            "title": "3. Klinický obraz",
            "content": "<div class=\"anatomy-grid\">\n                <div class=\"grid-item\">\n                    <h4>Senzitivní a noční příznaky (časná stádia)</h4>\n                    <ul>\n                        <li><strong>Brachialgia paraesthetica nocturna (Kardinální příznak!):</strong> probouzení v noci pro pálivé parestezie, brnění a necitlivost <strong>1., 2., 3. a radiální poloviny 4. prstu</strong> ruky.</li>\n                        <li><strong>„Flick sign“ (příznak protřepávání ruky):</strong> pacient si v noci svěšuje ruku z postele a intenzivně ji protřepává, což přináší přechodnou úlevu.</li>\n                        <li>Ranní ztuhlost a otok prstů, zhoršení při statickém držení (řízení auta, držení telefonu, čtení knihy).</li>\n                    </ul>\n                </div>\n                <div class=\"grid-item\">\n                    <h4>Motorické a trofické příznaky (pokročilá stádia)</h4>\n                    <ul>\n                        <li>Neobratnost ruky, vypadávání drobných předmětů (mince, knoflíky, jehla).</li>\n                        <li><strong>Atrofie thenarového svalstva</strong> (zejména <em>m. abductor pollicis brevis</em> a <em>m. opponens pollicis</em>) $\to$ oploštění thenaru a neschopnost postavit palec do opozice proti ostatním prstům (opičí ruka).</li>\n                        <li>Snížené taktilní a diskriminační čití na bříškách 1.–3. prstu.</li>\n                    </ul>\n                </div>\n            </div>"
          },
          {
            "title": "4. Klinické provokační testy",
            "content": "<ul>\n                <li><strong>Phalenův test:</strong> maximální pasivní flexe v obou zápěstích po dobu 60 sekund (hřbety rukou u sebe) vyvolá nebo zhorší parestezie v inervační zóně n. medianus.</li>\n                <li><strong>Tinelův test:</strong> poklep neurologickým kladívkem nad retinaculum flexorum na volární straně zápěstí vyvolá elektrické prošlehnutí do 1.–3. prstu.</li>\n                <li><strong>Durkanův test (karpální kompresní test):</strong> přímý tlak palci vyšetřujícího na karpální tunel po dobu 30 sekund (nejcitlivější klinický test).</li>\n            </ul>"
          },
          {
            "title": "5. Diagnostika",
            "content": "<ul>\n                <li><strong>Elektromyografie (EMG - kondukční studie n. medianus):</strong> zlatý standard potvrzení diagnózy a stanovení stupně závažnosti:\n                    <ul>\n                        <li><em>Senzitivní vedení:</em> zpomalení senzitivní rychlosti vedení (SCV) přes karpální tunel a snížení amplitudy SNAP.</li>\n                        <li><em>Motorické vedení:</em> prodloužení <strong>distální motorické latence (DML > 4,2–4,5 ms)</strong> na m. abductor pollicis brevis a pokles amplitudy CMAP.</li>\n                        <li><em>Jehlová EMG:</em> průkaz denervačních projevů (fibrilace, PSW) v m. abductor pollicis brevis svědčí pro těžkou axonální lézi!</li>\n                    </ul>\n                </li>\n                <li><strong>Vysokofrekvenční ultrazvuk zápěstí (HRUS):</strong> průkaz zvětšení průřezu n. medianus (Cross-Sectional Area - <strong>$CSA \\ge 10\text{–}12\text{ mm}^2$</strong> na vstupu do tunelu), edém nervu a ztluštění ligamenta.</li>\n            </ul>"
          },
          {
            "title": "6. Terapie",
            "content": "<ol>\n                <li><strong>Konzervativní terapie (mírné a střední formy bez axonální léze):</strong>\n                    <ul>\n                        <li><strong>Noční polohovací dlahování zápěstí v neutrální poloze (0°):</strong> zabraňuje noční flexi zápěstí a snižuje intrakarpální tlak.</li>\n                        <li><strong>Lokální obstřik karpálního tunelu kortikoidem</strong> (např. diprophos / metylprednizolon + lokální anestetikum) – přináší rychlou úlevu na několik měsíců.</li>\n                        <li>Režimová opatření, ergonomické myši, vyloučení přetížení, vitaminy skupiny B.</li>\n                    </ul>\n                </li>\n                <li><strong>Chirurgická léčba (těžké formy, selhání konzervativní léčby, atrofie thenaru nebo DML > 5,5 ms):</strong>\n                    <ul>\n                        <li><strong>Otevřená nebo endoskopická dekomprese karpálního tunelu:</strong> kompletní podélné <strong>protětí retinaculum flexorum (lig. carpi transversum)</strong>.</li>\n                        <li>Výkon se provádí v lokální anestezii ambulantně. Noční parestezie mizí téměř okamžitě po operaci.</li>\n                    </ul>\n                </li>\n            </ol>"
          }
        ]
      },
      "recall": {
        "scenarios": [
          {
            "id": "sc-S34-1",
            "title": "Klinická kazuistika – Syndrom karpálního tunelu (a úžinové syndromy horní končetiny)",
            "question": "<strong>Kazuistika:</strong> 52letá švadlena se budí každou noc kolem 3. hodiny ranní pro nesnesitelné brnění a pálení palce, ukazováku a prostředníku pravé ruky. Ruku musí svěsit a protřepat, aby mohla znovu usnout. Poslední měsíc pozoruje, že jí vypadávají jehly z ruky a palcový val (thenar) je viditelně plošší než na levé ruce. Phalenův test je do 15 sekund silně pozitivní.<br><br><strong>Klinický úkol:</strong> Stanovte diagnózu včetně stádia závažnosti, navrhněte konfirmační vyšetření a optimální definitivní léčebný výkon.",
            "answer": "<ul style='margin: 6px 0 0 18px; padding: 0; line-height: 1.5;'><li>Diagnóza: Syndrom karpálního tunelu (CTS) pravé ruky v pokročilém / těžkém stádiu (přítomnost nočních parestezií, výpadku jemné motoriky a atrofie thenaru).</li><li>Potvrzení diagnózy: EMG kondukční studie n. medianus (očekává se výrazné prodloužení DML > 5,5 ms, snížení SCV a jehlová EMG prokazující známky aktivní denervace v m. abductor pollicis brevis) + ultrazvuk zápěstí ($CSA \\ge 12\text{ mm}^2$).</li><li>Zhodnocení konzervativní léčby: Vzhledem k přítomnosti atrofie thenaru a motorického deficitu je konzervativní postup (dlahy, obstřiky) již nepostačující.</li><li>Definitivní léčba: Indikace k chirurgickému výkonu – otevřená nebo endoskopická dekomprese karpálního tunelu s kompletním protětím ligamentum carpi transversum v lokální anestezii.</li><li>Pooperační péče: Časné polohování, rehabilitace úchopu a šetření ruky po dobu hojení.</li></ul>",
            "keyPoints": [
              "Diagnóza: Syndrom karpálního tunelu (CTS) pravé ruky v pokročilém / těžkém stádiu (přítomnost nočních parestezií, výpadku jemné motoriky a atrofie thenaru).",
              "Potvrzení diagnózy: EMG kondukční studie n. medianus (očekává se výrazné prodloužení DML > 5,5 ms, snížení SCV a jehlová EMG prokazující známky aktivní denervace v m. abductor pollicis brevis) + ultrazvuk zápěstí ($CSA \\ge 12\text{ mm}^2$).",
              "Zhodnocení konzervativní léčby: Vzhledem k přítomnosti atrofie thenaru a motorického deficitu je konzervativní postup (dlahy, obstřiky) již nepostačující.",
              "Definitivní léčba: Indikace k chirurgickému výkonu – otevřená nebo endoskopická dekomprese karpálního tunelu s kompletním protětím ligamentum carpi transversum v lokální anestezii.",
              "Pooperační péče: Časné polohování, rehabilitace úchopu a šetření ruky po dobu hojení."
            ],
            "pearl": "Syndrom karpálního tunelu je nejčastější úžinový syndrom způsobený útlakem n. medianus v zápěstí."
          }
        ]
      },
      "cards": [
        {
          "id": "fc-S34-1",
          "front": "Které prsty ruky mají poruchu citlivosti a parestezie při syndromu karpálního tunelu?",
          "back": "Palec, ukazovák, prostředník a radiální polovina prsteníku (1., 2., 3. a laterální polovina 4. prstu) na dlaňové straně ruky (inervační oblast n. medianus).",
          "hint": "Speciální neurologie LF OU"
        },
        {
          "id": "fc-S34-2",
          "front": "Jaké jsou dva nejznámější klinické provokační testy pro syndrom karpálního tunelu a jak se provádějí?",
          "back": "1. Phalenův test (maximální pasivní flexe v obou zápěstích po dobu 60 sekund vyvolá parestezie), 2. Tinelův test (poklep na volární stranu zápěstí nad n. medianus vyvolá elektrické brnění do prstů).",
          "hint": "Speciální neurologie LF OU"
        },
        {
          "id": "fc-S34-3",
          "front": "Který klíčový elektrofyziologický parametr v kondukční studii n. medianus prokazuje motorické postižení u syndromu karpálního tunelu?",
          "back": "Prodloužení distální motorické latence (DML) přes karpální tunel na m. abductor pollicis brevis nad 4,2–4,5 ms.",
          "hint": "Speciální neurologie LF OU"
        }
      ],
      "quiz": [
        {
          "id": "pq-S34-1",
          "question": "Který sval ruky podléhá atrofii při chronické těžké lézi nervus medianus v karpálním tunelu?",
          "options": [
            "m. abductor digiti minimi",
            "m. interosseus dorsalis primus",
            "m. abductor pollicis brevis (svaly thenaru)",
            "m. adductor pollicis"
          ],
          "correctIndex": 2,
          "explanation": "N. medianus motoricky inervuje svaly thenaru (m. abductor pollicis brevis, m. opponens pollicis a povrchovou hlavu m. flexor pollicis brevis), které při pokročilém CTS atrofují."
        },
        {
          "id": "pq-S34-2",
          "question": "Které systémové onemocnění je známým rizikovým faktorem pro vznik syndromu karpálního tunelu?",
          "options": [
            "Hypotyreóza",
            "Celiakie",
            "Myasthenia gravis",
            "Hypoparatyreóza"
          ],
          "correctIndex": 0,
          "explanation": "Hypotyreóza (ukládání mukopolysacharidů v pojivu při myxedému), diabetes mellitus, revmatoidní artritida a akromegalie jsou typickými systémovými predispozicemi ke vzniku CTS."
        }
      ]
    },
    {
      "id": "s35-syndrom-brachi-ln-ho-plexu-a-diferenci-l",
      "number": 35,
      "section": "specialni",
      "sectionLabel": "Speciální neurologie",
      "badgePrefix": "S35",
      "title": "Syndrom brachiálního plexu a Diferenciálně diagnostická rozvaha",
      "shortDesc": "Brachiální plexopatie: anatomie plexus brachialis (C5–Th1), horní typ (Erb-Duchenne), dolní typ (Klumpke), neuralgická amyotrofie (syndrom Parsonage-Turner), syndrom horní hrudní apertury (TOS), nádorová infiltrace (Pancoast) a dif. dg. rozvaha.",
      "category": "vertebrogenni",
      "badge": "Plexopatie & Periferní nervy",
      "badgeColor": "teal",
      "theory": {
        "banner": {
          "tag": "Speciální neurologie • Otázka S35",
          "title": "Syndrom brachiálního plexu a Diferenciálně diagnostická rozvaha",
          "text": "Brachiální plexopatie: anatomie plexus brachialis (C5–Th1), horní typ (Erb-Duchenne), dolní typ (Klumpke), neuralgická amyotrofie (syndrom Parsonage-Turner), syndrom horní hrudní apertury (TOS), nádorová infiltrace (Pancoast) a dif. dg. rozvaha."
        },
        "sections": [
          {
            "title": "1. Anatomie Plexus Brachialis",
            "content": "<p><strong>Plexus brachialis</strong> je tvořen ventrálními větvemi míšních kořenů <strong>C5–Th1</strong> (s příspěvky C4 a Th2). Tyto kořeny vytvářejí <em>tři primární svazky (trunci)</em> v supraklavikulární oblasti:</p>\n            <ul>\n                <li><strong>Truncus superior (C5–C6)</strong></li>\n                <li><strong>Truncus medius (C7)</strong></li>\n                <li><strong>Truncus inferior (C8–Th1)</strong></li>\n            </ul>\n            <p>Pod klíční kostí (infraklavikulárně) se větví na <em>tři sekundární svazky (fasciculi)</em> obklopující a. axillaris: fasciculus lateralis, medialis a posterior, ze kterých vystupují periferní nervy (n. musculocutaneus, n. medianus, n. ulnaris, n. radialis, n. axillaris).</p>"
          },
          {
            "title": "2. Klasické formy parézy brachiálního plexu",
            "content": "<div class=\"anatomy-grid\">\n                <div class=\"grid-item\">\n                    <h4>Horní typ parézy plexu (Erb-Duchenne, C5–C6)</h4>\n                    <ul>\n                        <li><strong>Příčiny:</strong> trakční trauma při porodu (tah za hlavičku), pád na rameno s oddálením hlavy (motocyklové nehody).</li>\n                        <li><strong>Postižené svaly:</strong> m. deltoideus, m. biceps brachii, m. brachialis, m. supraspinatus, m. infraspinatus.</li>\n                        <li><strong>Klinický obraz:</strong> <strong>vázne abdukce a zevní rotace v rameni a flexe v lokti</strong>.</li>\n                        <li><em>Typické držení končetiny („ruka číšníka žádajícího spropitné / porter's tip position“):</em> paže visí podél těla v addukci a vnitřní rotaci, loket extendován, předloktí pronováno.</li>\n                        <li>Vyhaslý bicipitální a styloradiální reflex, hypestezie ramene a radiální strany předloktí. Pohyby prstů a ruky jsou plně intaktní!</li>\n                    </ul>\n                </div>\n                <div class=\"grid-item\">\n                    <h4>Dolní typ parézy plexu (Klumpke / Déjerine-Klumpke, C8–Th1)</h4>\n                    <ul>\n                        <li><strong>Příčiny:</strong> porod koncem pánevním (tah za vzpaženou ruku), prudký pád z výšky s zachycením se jednou rukou za větev, tumory plicního hrotu.</li>\n                        <li><strong>Postižené svaly:</strong> vnitřní drobné svaly ruky (mm. interossei, lumbricales, thenar, hypothenar) a flexory prstů a zápěstí.</li>\n                        <li><strong>Klinický obraz:</strong> <strong>těžká chabá paréza a atrofie ruky (drápovitá ruka - claw hand)</strong>, neschopnost flexe prstů a jemného úchopu. Rameno a loket jsou plně pohyblivé!</li>\n                        <li>Senzitivní výpadek na ulnární straně předloktí a ruky.</li>\n                        <li><strong>Hornerův syndrom (ptóza, mióza, enoftalmus):</strong> přítomen při avulzi kořene Th1 s lézí sympatických vláken!</li>\n                    </ul>\n                </div>\n            </div>"
          },
          {
            "title": "3. Speciální klinické jednotky postižení plexu",
            "content": "<ul>\n                <li><strong>Neuralgická amyotrofie (Idiopatická brachiální plexitida / Syndrom Parsonage-Turner):</strong>\n                    <ul>\n                        <li>Předpokládaný autoimunitní zánět plexu po virové infekci, očkování, operaci či stresu.</li>\n                        <li><em>Klinický průběh:</em> náhlá <strong>extrémně krutá, pálivá bolest ramene a lopatky vznikající v noci</strong>. Po několika dnech až týdnech bolest spontánně ustupuje a nastupuje <strong>těžká chabá paréza a rychlá atrofie svalů ramenního pletence</strong> (m. deltoideus, m. supraspinatus, m. serratus anterior $\to$ <em>scapula alata / odstávající lopatka</em>).</li>\n                        <li>Léčba: v akutní fázi kortikoidy (prednison), analgetika, dlouhodobá rehabilitace (úprava trvá 1–3 roky).</li>\n                    </ul>\n                </li>\n                <li><strong>Syndrom horní hrudní apertury (TOS - Thoracic Outlet Syndrome):</strong>\n                    <ul>\n                        <li>Komprese truncus inferior (C8–Th1) a a./v. subclavia v <em>skalenickém trojúhelníku</em> (mezi m. scalenus anterior a medius), kostoklavikulárním prostoru nebo pod m. pectoralis minor (např. při přítomnosti krčního žebra nebo vazivového pruhu).</li>\n                        <li>Neurogenní TOS: noční bolesti, parestezie na ulnární straně ruky, atrofie thenaru; cévní TOS: otok ruky, chlad, bledost/cyanóza při elevaci paže (Adsonův test).</li>\n                    </ul>\n                </li>\n                <li><strong>Pancoastův tumor (Nádorová plexopatie):</strong>\n                    <ul>\n                        <li>Apikální bronchogenní karcinom infiltrující truncus inferior (C8–Th1), plexus brachialis a truncus sympathicus.</li>\n                        <li>Krutá bolest ramene a ulnární strany paže, atrofie svalů ruky + <strong>ipsilaterální Hornerův syndrom</strong>.</li>\n                    </ul>\n                </li>\n            </ul>"
          },
          {
            "title": "4. Diferenciálně diagnostická rozvaha (Plexus vs. Kořen vs. Periferní nerv)",
            "content": "<table class=\"data-table\">\n                <thead>\n                    <tr>\n                        <th>Úroveň léze</th>\n                        <th>Klinická charakteristika a odlišující znaky</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr>\n                        <td><strong>Kořenová léze (Radikulopatie C5–C8)</strong></td>\n                        <td>Bolest vyzařuje z krku, závisí na pohybu C-páteře (Spurling +), postihuje izolovaně 1 dermatom a 1 klíčový sval (myotom), paraspinní svaly denervovány na EMG.</td>\n                    </tr>\n                    <tr>\n                        <td><strong>Plexová léze (Plexopatie)</strong></td>\n                        <td>Postihuje současně svaly a senzitivitu z <strong>více periferních nervů a více kořenů</strong> (např. postižení m. deltoideus [n. axillaris] + m. biceps [n. musculocutaneus] u horního typu), paraspinní svaly jsou intaktní.</td>\n                    </tr>\n                    <tr>\n                        <td><strong>Periferní mononeuropatie (n. radialis, ulnaris, medianus)</strong></td>\n                        <td>Deficit je striktně omezen na inervační zónu jediného izolovaného nervu (např. kapavá ruka u n. radialis bez postižení m. deltoideus).</td>\n                    </tr>\n                </tbody>\n            </table>"
          }
        ]
      },
      "recall": {
        "scenarios": [
          {
            "id": "sc-S35-1",
            "title": "Klinická kazuistika – Syndrom brachiálního plexu a Diferenciálně diagnostická rozvaha",
            "question": "<strong>Kazuistika:</strong> 65letý silný kuřák odeslán pro 2 měsíce progredující krutou tupou bolest v pravém rameni a pod lopatkou vyzařující po vnitřní straně paže do malíku. Při vyšetření: těžká atrofie svalů pravé ruky (interoseální prostory propadlé, plochý thenar i hypothenar, vázne sevření pěsti), hypestezie ulnární strany předloktí a 4.–5. prstu a na pravém oku patrná ptóza víčka a mióza (Hornerův syndrom). RTG krční páteře bez významné patologie.<br><br><strong>Klinický úkol:</strong> Stanovte diagnózu syndromu, vyslovte podezření na závažnou etiologii a navrhněte okamžité vyšetření.",
            "answer": "<ul style='margin: 6px 0 0 18px; padding: 0; line-height: 1.5;'><li>Diagnóza syndromu: Dolní typ parézy brachiálního plexu (truncus inferior C8–Th1) kombinovaný s ipsilaterálním Hornerovým syndromem.</li><li>Etiologické podezření: Pancoastův tumor (apikální bronchogenní karcinom hrotu pravé plíce) prorůstající do horní hrudní apertury a infiltrující plexus brachialis a truncus sympathicus.</li><li>Zobrazovací diagnostika: Statimové CT / MRI plic a hrudníku a brachiálního plexu (k průkazu tumoru plicního hrotu, destrukce žeber a obratlů Th1/Th2).</li><li>Další postup: Bronchoskopie / CT navigovaná biopsie ložiska pro histopatologickou verifikaci a okamžité předání do péče pneumoonkologického týmu (chemoradioterapie / resekce).</li><li>Symptomatická terapie: Agresivní léčba neuropatické a nociceptivní bolesti (silné opioidy + pregabalin/duloxetin).</li></ul>",
            "keyPoints": [
              "Diagnóza syndromu: Dolní typ parézy brachiálního plexu (truncus inferior C8–Th1) kombinovaný s ipsilaterálním Hornerovým syndromem.",
              "Etiologické podezření: Pancoastův tumor (apikální bronchogenní karcinom hrotu pravé plíce) prorůstající do horní hrudní apertury a infiltrující plexus brachialis a truncus sympathicus.",
              "Zobrazovací diagnostika: Statimové CT / MRI plic a hrudníku a brachiálního plexu (k průkazu tumoru plicního hrotu, destrukce žeber a obratlů Th1/Th2).",
              "Další postup: Bronchoskopie / CT navigovaná biopsie ložiska pro histopatologickou verifikaci a okamžité předání do péče pneumoonkologického týmu (chemoradioterapie / resekce).",
              "Symptomatická terapie: Agresivní léčba neuropatické a nociceptivní bolesti (silné opioidy + pregabalin/duloxetin)."
            ],
            "pearl": "Horní typ plexopatie (Erb-Duchenne, C5–C6): vázne abdukce ramene a flexe lokte ('ruka číšníka'), ruka a prsty jsou intaktní."
          }
        ]
      },
      "cards": [
        {
          "id": "fc-S35-1",
          "front": "Jaké držení končetiny a svalový výpadek charakterizuje horní typ parézy brachiálního plexu (Erb-Duchenne, C5–C6)?",
          "back": "Vázne abdukce a zevní rotace v rameni a flexe v lokti. Paže visí podél těla v addukci, vnitřní rotaci a pronaci předloktí ('postoj číšníka žádajícího spropitné'), přičemž pohyby prstů a zápěstí jsou zachovány.",
          "hint": "Speciální neurologie LF OU"
        },
        {
          "id": "fc-S35-2",
          "front": "Proč je u dolního typu parézy brachiálního plexu (Klumpke, C8–Th1) často přítomen Hornerův syndrom?",
          "back": "Protože v předním kořeni Th1 probíhají pregangliová sympatická vlákna míšního ciliospinálního centra (Budgeovo centrum) pro inervaci oka (m. dilatator pupillae, m. tarsalis).",
          "hint": "Speciální neurologie LF OU"
        },
        {
          "id": "fc-S35-3",
          "front": "Co je to syndrom Parsonage-Turner (neuralgická amyotrofie)?",
          "back": "Akutní autoimunitní zánět brachiálního plexu manifestující se náhlou krutou noční bolestí ramenního pletence, po jejímž ústupu se rozvíjí těžká periferní paréza a atrofie svalů pletence (např. m. serratus anterior s odstávající lopatkou - scapula alata).",
          "hint": "Speciální neurologie LF OU"
        }
      ],
      "quiz": [
        {
          "id": "pq-S35-1",
          "question": "Odstávající lopatka (scapula alata) vzniká při paréze m. serratus anterior v důsledku léze kterého nervu?",
          "options": [
            "Nervus thoracicus longus",
            "Nervus axillaris",
            "Nervus musculocutaneus",
            "Nervus suprascapularis"
          ],
          "correctIndex": 0,
          "explanation": "Nervus thoracicus longus (vycházející přímo z kořenů C5–C7 brachiálního plexu) inervuje m. serratus anterior, který fixuje lopatku k hrudnímu koši; jeho paréza vede k odstávání mediální hrany lopatky (scapula alata)."
        },
        {
          "id": "pq-S35-2",
          "question": "Při syndromu horní hrudní apertury (TOS) je nejčastěji komprimována která část brachiálního plexu?",
          "options": [
            "Truncus superior (C5–C6)",
            "Truncus inferior (C8–Th1)",
            "Fasciculus lateralis",
            "Nervus radialis"
          ],
          "correctIndex": 1,
          "explanation": "Truncus inferior (kořeny C8–Th1) a a. subclavia přebíhají přes první žebro v nejtěsnějším prostoru skalenického trojúhelníku, a proto jsou nejčastějším místem útlaku u neurogenního i vaskulárního TOS."
        }
      ]
    },
    {
      "id": "s36-onemocn-n-autonomn-ho-vegetativn-ho-nerv",
      "number": 36,
      "section": "specialni",
      "sectionLabel": "Speciální neurologie",
      "badgePrefix": "S36",
      "title": "Onemocnění autonomního (vegetativního) nervstva",
      "shortDesc": "Autonomní nervový systém (sympatikus vs. parasympatikus), centrální a periferní dysautonomie: ortostatická hypotenze, syndrom posturální ortostatické tachykardie (POTS), Hornerův syndrom, autonomní dysreflexie a autonomní testování (Ewingova baterie, HUTT).",
      "category": "periferni_autonomni",
      "badge": "Autonomní nervový systém & Neuropatie",
      "badgeColor": "teal",
      "theory": {
        "banner": {
          "tag": "Speciální neurologie • Otázka S36",
          "title": "Onemocnění autonomního (vegetativního) nervstva",
          "text": "Autonomní nervový systém (sympatikus vs. parasympatikus), centrální a periferní dysautonomie: ortostatická hypotenze, syndrom posturální ortostatické tachykardie (POTS), Hornerův syndrom, autonomní dysreflexie a autonomní testování (Ewingova baterie, HUTT)."
        },
        "sections": [
          {
            "title": "1. Anatomie a Fyziologie autonomního nervového systému (ANS)",
            "content": "<p>Autonomní (vegetativní) nervový systém reguluje vitální mimovolní funkce (srdeční rytmus, krevní tlak, termoregulaci, motilitu GIT, mikci a sexuální funkce). Dělí se na dvě vzájemně se doplňující složky:</p>\n            <ul>\n                <li><strong>Sympatikus (Torakolumbální systém, Th1–L2):</strong> pregangliová těla v <em>nucleus intermediolateralis</em> postranních rohů míchy $\to$ sympatický kmen (paravertebrální ganglia) a prevertebrální ganglia. Hlavní mediátory: <em>acetylcholin</em> (pregangliový) a <strong>noradrenalin</strong> (postgangliový, kromě potních žláz, kde je ACh). Funkce: reakce „boj nebo útěk“ (fight or flight) – tachykardie, vazokonstrikce, mydriáza, bronchodilatace, inhibice GIT.</li>\n                <li><strong>Parasympatikus (Kraniosakrální systém):</strong> kraniální část (jádra n. III, VII, IX a <strong>n. X – n. vagus</strong>) a sakrální část (segmenty S2–S4). Mediátor: <strong>acetylcholin</strong> na nikotinových i muskarinových receptorech. Funkce: reakce „odpočinek a trávení“ (rest and digest) – bradykardie, bronchokonstrikce, mióza, stimulace motility a sekrece GIT, evakuace močového měchýře.</li>\n            </ul>"
          },
          {
            "title": "2. Hlavní syndromy autonomní dysfunkce (Dysautonomie)",
            "content": "<div class=\"anatomy-grid\">\n                <div class=\"grid-item\">\n                    <h4>1. Ortostatická hypotenze (OH)</h4>\n                    <ul>\n                        <li>Definována jako <strong>pokles systolického TK o $\\ge 20\text{ mmHg}$ nebo diastolického TK o $\\ge 10\text{ mmHg}$</strong> během 3 minut po vertikalizaci (postavení).</li>\n                        <li><strong>Neurogenní OH:</strong> selhání sympatické baroreflexní vazokonstrikce při degeneraci autonomních drah (Parkinsonova nemoc, multisystémová atrofie MSA, diabetická autonomní neuropatie, amyloidóza). Chybí kompenzatorní tachykardie!</li>\n                        <li>Příznaky: točení hlavy vestoje, rozmazané vidění, slabost, „ramínková bolest“ šíje (coat-hanger pain), synkopy.</li>\n                        <li><em>Léčba:</em> režimová opatření (elastické punčochy, hydratace 2,5 l/den, spánek se zvýšenou hlavou o 15°), farmakoterapie: <strong>Midodrin</strong> ($\u0007lpha_1$-agonista) a <strong>Fludrokortizon</strong> (mineralokortikoid zvyšující retenci $Na^+$).</li>\n                    </ul>\n                </div>\n                <div class=\"grid-item\">\n                    <h4>2. Syndrom posturální tachykardie (POTS)</h4>\n                    <ul>\n                        <li>Typický u mladých žen (15–40 let).</li>\n                        <li><strong>Kritéria:</strong> vzestup tepové frekvence o <strong>$\\ge 30\text{ tepů/min}$</strong> (nebo na $> 120\text{/min}$) během 10 minut stoje <strong>BEZ přítomnosti ortostatické hypotenze</strong>.</li>\n                        <li>Projevy: palpitace, vertigo, intolerance zátěže, dušnost, mozková mlha, únavový syndrom.</li>\n                        <li>Léčba: vysoký příjem soli a vody, cvičení v horizontále (veslování, plavání), <em>Ivabradin</em> (selektivní blokátor If kanálu v SA uzlu), malé dávky beta-blokátorů.</li>\n                    </ul>\n                </div>\n            </div>"
          },
          {
            "title": "3. Fokální a Urgentní autonomní syndromy",
            "content": "<ul>\n                <li><strong>Hornerův syndrom (Claude Bernard-Horner):</strong>\n                    <ul>\n                        <li>Léze třístupňové oční sympatické dráhy (1. centrální – hypotalamus/kmen/ciliospinální centrum C8-Th1; 2. pregangliová – truncus sympathicus, Pancoastův tumor; 3. postgangliová – a. carotis interna, disekce).</li>\n                        <li><strong>Klinická triáda:</strong> <strong>Ptóza</strong> (paréza m. tarsalis superior), <strong>Mióza</strong> (převaha parasympatiku bez m. dilatator pupillae) a <strong>Enoftalmus</strong> (zdánlivý v důsledku zúžení oční štěrbiny) $\\pm$ <em>Anhidróza</em> ipsilaterální poloviny obličeje.</li>\n                    </ul>\n                </li>\n                <li><strong>Autonomní dysreflexie:</strong>\n                    <ul>\n                        <li>Život ohrožující stav u pacientů s <strong>míšní lézí nad úrovní Th6</strong>.</li>\n                        <li>Spouštěč: nociceptivní podnět pod úrovní léze (nejčastěji přeplněný močový měchýř, obstipace/fekalom, dekubit).</li>\n                        <li><em>Klinický obraz:</em> masivní nekontrolovaná sympatická reakce $\to$ <strong>maligní paroxysmální hypertenze (TK > 200–250 mmHg)</strong>, vazokonstrikce v dolní polovině těla + kompenzatorní vagová <strong>bradykardie</strong>, profúzní pocení a zarudnutí kůže nad úrovní léze. Hrozí intrakraniální krvácení a zástava srdce!</li>\n                        <li>Léčba: okamžité odstranění spouštěče (vycévkování měchýře!), posazení pacienta, antihypertenziva s rychlým nástupem (nitroglycerin, urapidil).</li>\n                    </ul>\n                </li>\n            </ul>"
          },
          {
            "title": "4. Vyšetřovací metody autonomního systému",
            "content": "<ul>\n                <li><strong>Ewingova baterie autonomních testů:</strong>\n                    <ol>\n                        <li>Změna TF při hlubokém dýchání (E/I poměr – parasympatikus).</li>\n                        <li>Ortostatický test (30:15 ratio – parasympatická kardiovagální reakce).</li>\n                        <li>Valsalvův manévr (poměr nejdelšího a nejkratšího RR intervalu – parasympatikus + sympatikus).</li>\n                        <li>Pokles TK při postavení (ortostatická hypotenze – sympatický vazomotorický tonus).</li>\n                        <li>Vzestup diastolického TK při izometrickém stisku dynamometru (Handgrip test – sympatikus).</li>\n                    </ol>\n                </li>\n                <li><strong>Test na nakloněné rovině (HUTT - Head-Up Tilt Table Test):</strong> kontinuální měření TK a EKG při pasivním náklonu na 60–70° (zlatý standard pro dg. vasovagální synkopy, POTS a ortostatické hypotenze).</li>\n                <li><strong>Kvantitativní sudomotorický axonální reflexní test (QSART):</strong> hodnocení postgangliových sympatických cholinergních vláken potních žláz.</li>\n            </ul>"
          }
        ]
      },
      "recall": {
        "scenarios": [
          {
            "id": "sc-S36-1",
            "title": "Klinická kazuistika – Onemocnění autonomního (vegetativního) nervstva",
            "question": "<strong>Kazuistika:</strong> 24letá studentka přichází pro rok trvající bušení srdce, závratě, pocit na omdlení a rozmazané vidění, které se objevují výhradně při delším stání ve frontě nebo při vaření. Vleže se cítí zcela zdráva. Při testu na nakloněné rovině (HUTT): v poloze vleže TK 115/75 mmHg, TF 68/min; v 5. minutě pasivního stoje TK 118/78 mmHg, TF 112/min (vzestup o 44 tepů/min) s reprodukcí závratí a palpitací.<br><br><strong>Klinický úkol:</strong> Stanovte diagnózu, vylučte ortostatickou hypotenzi a navrhněte komplexní režimová a farmakologická opatření.",
            "answer": "<ul style='margin: 6px 0 0 18px; padding: 0; line-height: 1.5;'><li>Diagnóza: Syndrom posturální ortostatické tachykardie (POTS - Postural Orthostatic Tachycardia Syndrome).</li><li>Zdůvodnění: Pacientka splňuje kritérium vzestupu TF o $\\ge 30\text{ tepů/min}$ do 10 minut vertikalizace bez současného poklesu krevního tlaku (tlak zůstává stabilní, nejde tedy o ortostatickou hypotenzi).</li><li>Režimová a dietní opatření: Navýšení příjmu tekutin na 2,5–3 litry denně, zvýšení příjmu soli (až 8–10 g NaCl denně), nošení kompresních stehenních punčoch.</li><li>Pohybový režim: Pravidelný aerobní trénink v horizontální či sedící poloze (rotoped, veslařský trenažér, plavání) pro posílení svalové pumpy dolních končetin.</li><li>Farmakoterapie při selhání režimu: Ivabradin (ke snížení tepové frekvence bez vlivu na TK) nebo nízká dávka neselektivního beta-blokátoru (Propranolol 10–20 mg).</li></ul>",
            "keyPoints": [
              "Diagnóza: Syndrom posturální ortostatické tachykardie (POTS - Postural Orthostatic Tachycardia Syndrome).",
              "Zdůvodnění: Pacientka splňuje kritérium vzestupu TF o $\\ge 30\text{ tepů/min}$ do 10 minut vertikalizace bez současného poklesu krevního tlaku (tlak zůstává stabilní, nejde tedy o ortostatickou hypotenzi).",
              "Režimová a dietní opatření: Navýšení příjmu tekutin na 2,5–3 litry denně, zvýšení příjmu soli (až 8–10 g NaCl denně), nošení kompresních stehenních punčoch.",
              "Pohybový režim: Pravidelný aerobní trénink v horizontální či sedící poloze (rotoped, veslařský trenažér, plavání) pro posílení svalové pumpy dolních končetin.",
              "Farmakoterapie při selhání režimu: Ivabradin (ke snížení tepové frekvence bez vlivu na TK) nebo nízká dávka neselektivního beta-blokátoru (Propranolol 10–20 mg)."
            ],
            "pearl": "Ortostatická hypotenze je definována poklesem TK o ≥ 20/10 mmHg do 3 minut stoje; neurogenní forma nemá kompenzatorní tachykardii."
          }
        ]
      },
      "cards": [
        {
          "id": "fc-S36-1",
          "front": "Jaká jsou diagnostická kritéria pro ortostatickou hypotenzi při ortostatickém testu?",
          "back": "Pokles systolického krevního tlaku o ≥ 20 mmHg a/nebo pokles diastolického krevního tlaku o ≥ 10 mmHg do 3 minut po postavení z horizontální polohy.",
          "hint": "Speciální neurologie LF OU"
        },
        {
          "id": "fc-S36-2",
          "front": "Co tvoří klinickou triádu Hornerova syndromu a která patologie krku/hrudníku ho může vyvolat?",
          "back": "Ptóza víčka, mióza zornice a zdánlivý enoftalmus (často s anhidrózou poloviny obličeje). Může být vyvolán disekcí vnitřní karotidy, Pancoastovým tumorem plicního hrotu nebo lézí krčního sympatiku.",
          "hint": "Speciální neurologie LF OU"
        },
        {
          "id": "fc-S36-3",
          "front": "Co je to autonomní dysreflexie u pacientů po transverzální míšní lézi nad Th6 a jaký je nejčastější spouštěč?",
          "back": "Akutní život ohrožující sympatická bouře vyvolávající extrémní hypertenzi a reflexní bradykardii, nejčastěji spuštěná přeplněním močového měchýře (např. při ucpání permanentního katétru) nebo impakcí stolice.",
          "hint": "Speciální neurologie LF OU"
        }
      ],
      "quiz": [
        {
          "id": "pq-S36-1",
          "question": "Který lék ze skupiny agonistů alfa-1 adrenergních receptorů je lékem volby pro farmakologickou léčbu těžké symptomatické neurogenní ortostatické hypotenze?",
          "options": [
            "Bisoprolol",
            "Midodrin",
            "Atropin",
            "Pramipexol"
          ],
          "correctIndex": 1,
          "explanation": "Midodrin je periferní alfa-1 adrenergní agonista, který vyvolává vazokonstrikci arteriálního i venózního řečiště, zvyšuje žilní návrat a brání poklesu krevního tlaku při vertikalizaci."
        },
        {
          "id": "pq-S36-2",
          "question": "Která složka Ewingovy baterie testuje primárně integritu kardiovagální parasympatické větve autonomního systému?",
          "options": [
            "Variabilita srdeční frekvence při hlubokém dýchání (poměr E/I)",
            "Izometrický test stisku ruky (Handgrip test)",
            "Měření poklesu TK při postavení",
            "Sudomotorický axonální reflex (QSART)"
          ],
          "correctIndex": 0,
          "explanation": "Respirační sinusová arytmie a poměr E/I (expirium/inspirium) při pomalém hlubokém dýchání (6 dechů/min) jsou zprostředkovány výhradně n. vagus a jsou nejcitlivějším testem parasympatické funkce srdce."
        }
      ]
    },
    {
      "id": "s37-polyneuropatie",
      "number": 37,
      "section": "specialni",
      "sectionLabel": "Speciální neurologie",
      "badgePrefix": "S37",
      "title": "Polyneuropatie",
      "shortDesc": "Polyneuropatie: elektrofyziologické dělení (axonální vs. demyelinizační), hereditární neuropatie (Charcot-Marie-Tooth / HMSN I a II, mutace PMP22), toxické (alkohol, chemoterapie), paraneoplastické (anti-Hu) a vaskulitické neuropatie (mononeuritis multiplex).",
      "category": "periferni_autonomni",
      "badge": "Neuropatie & Periferní nervový systém",
      "badgeColor": "teal",
      "theory": {
        "banner": {
          "tag": "Speciální neurologie • Otázka S37",
          "title": "Polyneuropatie",
          "text": "Polyneuropatie: elektrofyziologické dělení (axonální vs. demyelinizační), hereditární neuropatie (Charcot-Marie-Tooth / HMSN I a II, mutace PMP22), toxické (alkohol, chemoterapie), paraneoplastické (anti-Hu) a vaskulitické neuropatie (mononeuritis multiplex)."
        },
        "sections": [
          {
            "title": "1. Definice a Klasifikace polyneuropatií",
            "content": "<p><strong>Polyneuropatie</strong> představují difuzní, převážně symetrické generalizované postižení periferních nervů (motorických, senzitivních i autonomních vláken). Většina polyneuropatií je <em>závislá na délce axonu („length-dependent / dying-back“)</em>, proto symptomy začínají na nejdelších nervech dolních končetin a šíří se disto-proximálně v „ponožkové a rukavicové“ distribuci.</p>"
          },
          {
            "title": "2. Elektrofyziologické a Etiologické dělení",
            "content": "<div class=\"anatomy-grid\">\n                <div class=\"grid-item\">\n                    <h4>Axonální polyneuropatie</h4>\n                    <ul>\n                        <li>Primární poškození nervového axonu.</li>\n                        <li><strong>EMG obraz:</strong> <strong>výrazný pokles amplitud</strong> senzitivních (SNAP) a motorických (CMAP) akčních potenciálů při <em>normálních nebo jen lehce snížených rychlostech vedení (NCV > 70–80 % normy)</em>.</li>\n                        <li><strong>Příčiny:</strong> metabolické (diabetes mellitus, uremie), toxické (alkohol, těžké kovy), lékové (cytostatika – oxaliplatina, paklitaxel, vinkristin), karenční (deficit $B_1, B_{12}$), paraneoplastické, systémové vaskulitidy.</li>\n                    </ul>\n                </div>\n                <div class=\"grid-item\">\n                    <h4>Demyelinizační polyneuropatie</h4>\n                    <ul>\n                        <li>Primární rozpad myelinové pochvy a Schwannových buněk.</li>\n                        <li><strong>EMG obraz:</strong> <strong>výrazné zpomalení rychlostí vedení (NCV < 70 % normy, např. motorická NCV n. medianus < 38 m/s)</strong>, prodloužení distálních motorických latencí (DML) a disperze/kondukční bloky.</li>\n                        <li><strong>Příčiny:</strong> autoimunitní (Guillain-Barré syndrom / AIDP, CIDP, paraproteinemické neuropatie při MGUS s anti-MAG protilátkami), genetické (Charcot-Marie-Tooth typ 1).</li>\n                    </ul>\n                </div>\n            </div>"
          },
          {
            "title": "3. Hereditární motoricko-senzitivní neuropatie (HMSN / Charcot-Marie-Tooth - CMT)",
            "content": "<ul>\n                <li>Nejčastější dědičné nervosvalové onemocnění (prevalence cca 1 : 2 500).</li>\n                <li><strong>CMT typ 1 (demyelinizační forma, 60–70 %):</strong>\n                    <ul>\n                        <li>Autozomálně dominantní dědičnost způsobená <strong>duplikací genu pro periferní myelinový protein 22 (PMP22)</strong> na 17. chromozomu (17p11.2).</li>\n                        <li><em>Klinický obraz:</em> nástup v 1.–2. dekádě života. Pomalá progrese svalových atrofií a slabosti lýtek a chodidel $\to$ typický vzhled <strong>„nohou tvaru obrácené šampaňské láhve / čapích nohou“</strong>, vysoká vyklenutá nožní klenba (<strong>pes cavus</strong>), kladívkovité prsty, vymizelé reflexy šlachy Achillovy (RŠA), porucha vibračního čití.</li>\n                        <li>EMG: uniformní symetrické zpomalení rychlosti vedení motorickými nervy ($MCV < 38\text{ m/s}$).</li>\n                    </ul>\n                </li>\n                <li><strong>CMT typ 2 (axonální forma):</strong> AD dědičnost (např. mutace genu <em>MFN2</em> – mitofusin 2), nástup v dospělosti, normální rychlost vedení s redukcí CMAP amplitud.</li>\n                <li><strong>Hereditární neuropatie s náchylností k tlakovým obrnám (HNPP):</strong> <em>delece genu PMP22</em> – recidivující nebolestivé parézy nervů po minimálním tlaku (např. padající ruka po spánku přes opěradlo).</li>\n            </ul>"
          },
          {
            "title": "4. Získané specifické formy polyneuropatií",
            "content": "<ul>\n                <li><strong>Toxické a polékové neuropatie:</strong>\n                    <ul>\n                        <li><em>Oxaliplatina:</em> akutní chladem provokované dysestezie a chronická kumulativní senzitivní neuronopatie.</li>\n                        <li><em>Vinkristin / Paklitaxel:</em> axonální senzomotorická polyneuropatie, často s autonomním postižením (ileus).</li>\n                    </ul>\n                </li>\n                <li><strong>Paraneoplastická subakutní senzitivní neuronopatie (Denny-Brownův syndrom):</strong>\n                    <ul>\n                        <li>Autoimunitní zánik těl senzitivních neuronů v dorzálních spinálních gangliích vyvolaný <strong>onkonerálními protilátkami anti-Hu (ANNA-1)</strong>.</li>\n                        <li>Asociace s <strong>malobuněčným karcinomem plic (SCLC)</strong> (často odhalena měsíce před záchytem tumoru!).</li>\n                        <li>Projev: těžká asymetrická senzorická ataxie všech končetin, areflexie, pseudoatetóza prstů.</li>\n                    </ul>\n                </li>\n                <li><strong>Vaskulitická neuropatie (Mononeuritis multiplex):</strong>\n                    <ul>\n                        <li>Ischemická nekróza periferních nervů při vaskulitidě vasa nervorum (systémová vaskulitida – polyarteritis nodosa, ANCA-vaskulitidy, SLE, kryoglobulinémie).</li>\n                        <li><strong>Klinický obraz:</strong> akutní krutá bolest následovaná asymetrickým výpadkem <em>více jednotlivých nesouvisejících nervů</em> (např. paréza n. peroneus vpravo + paréza n. ulnaris vlevo). Léčba: vysoké dávky kortikoidů + cyklofosfamid.</li>\n                    </ul>\n                </li>\n            </ul>"
          },
          {
            "title": "5. Diagnostika a Terapie polyneuropatií",
            "content": "<ol>\n                <li><strong>Podrobné EMG vyšetření (kondukce + jehla):</strong> rozlišení axonálního vs. demyelinizačního typu, tíže a distribuce.</li>\n                <li><strong>Laboratorní screening příčiny:</strong> glykémie, HbA1c, urea, kreatinin, jaterní testy, TSH, vitamin $B_{12}$, folát, elektroforéza bílkovin se stanovením imunofixace (vyloučení monoklonální gamapatie MGUS / mnohočetného myelomu), onkoneurální protilátky (anti-Hu), autoprotilátky (ANA, ANCA), genetika (PMP22).</li>\n                <li><strong>Léčba:</strong> kauzální terapie základního onemocnění (kontrola diabetu, vysazení toxinu, imunosuprese u vaskulitid/CIDP) + symptomatická léčba neuropatické bolesti (Duloxetin, Pregabalin, Gabapentin) a ortopedická protetika.</li>\n            </ol>"
          }
        ]
      },
      "recall": {
        "scenarios": [
          {
            "id": "sc-S37-1",
            "title": "Klinická kazuistika – Polyneuropatie",
            "question": "<strong>Kazuistika:</strong> 16letý chlapec vyšetřován pro obtíže při tělocviku – často zakopává, nemůže běhat po patách a má nápadně štíhlá lýtka ve srovnání se stehny. Při vyšetření: bilaterální pes cavus s kladívkovitými prsty, chůze po patách nemožná, svalová slabost a atrofie peroneálního svalstva ('čapí nohy'), šlachové reflexy na dolních končetinách zcela vyhaslé, vibrační čití na kotnících snížené. Matka chlapce má podobný tvar nohou a byla v mládí operována pro pes cavus.<br><br><strong>Klinický úkol:</strong> Stanovte diagnózu, popište dědičnost a genetický defekt a uveďte typický nález na EMG.",
            "answer": "<ul style='margin: 6px 0 0 18px; padding: 0; line-height: 1.5;'><li>Diagnóza: Hereditární motoricko-senzitivní neuropatie (HMSN typ 1 / Charcot-Marie-Tooth choroba typ 1A).</li><li>Genetika a dědičnost: Autozomálně dominantní onemocnění způsobené duplikací genu PMP22 na chromozomu 17p11.2 (pozitivní rodinná anamnéza u matky).</li><li>Typické klinické znaky: Pes cavus, kladívkovité prsty, atrofie distálního bérce (čapí nohy), areflexie a senzitivní výpadek.</li><li>EMG nález: Difuzní, uniformní a symetrické zpomalení motorických i senzitivních rychlostí vedení (motorická NCV na n. medianus a n. ulnaris < 38 m/s, typicky kolem 20–25 m/s) svědčící pro primární demyelinizaci.</li><li>Management: Genetická konfirmace, ortopedické vložky a dlahy, rehabilitace a posilování svalů trupu a končetin, genetické poradenství pro rodinu.</li></ul>",
            "keyPoints": [
              "Diagnóza: Hereditární motoricko-senzitivní neuropatie (HMSN typ 1 / Charcot-Marie-Tooth choroba typ 1A).",
              "Genetika a dědičnost: Autozomálně dominantní onemocnění způsobené duplikací genu PMP22 na chromozomu 17p11.2 (pozitivní rodinná anamnéza u matky).",
              "Typické klinické znaky: Pes cavus, kladívkovité prsty, atrofie distálního bérce (čapí nohy), areflexie a senzitivní výpadek.",
              "EMG nález: Difuzní, uniformní a symetrické zpomalení motorických i senzitivních rychlostí vedení (motorická NCV na n. medianus a n. ulnaris < 38 m/s, typicky kolem 20–25 m/s) svědčící pro primární demyelinizaci.",
              "Management: Genetická konfirmace, ortopedické vložky a dlahy, rehabilitace a posilování svalů trupu a končetin, genetické poradenství pro rodinu."
            ],
            "pearl": "Polyneuropatie se dělí na axonální (pokles amplitud SNAP/CMAP) a demyelinizační (výrazné zpomalení NCV)."
          }
        ]
      },
      "cards": [
        {
          "id": "fc-S37-1",
          "front": "Jaký je hlavní rozdíl v EMG nálezu mezi axonální a demyelinizační polyneuropatií?",
          "back": "Axonální má primárně výrazně snížené amplitudy akčních potenciálů (CMAP, SNAP) při zachovalé rychlosti vedení. Demyelinizační má výrazně zpomalenou rychlost vedení (NCV < 70 % normy) a prodloužené distální latence.",
          "hint": "Speciální neurologie LF OU"
        },
        {
          "id": "fc-S37-2",
          "front": "Která genetická aberace je nejčastější příčinou hereditární neuropatie Charcot-Marie-Tooth typ 1A (CMT1A)?",
          "back": "Duplikace genu pro periferní myelinový protein 22 (PMP22) na krátkém raménku 17. chromozomu (17p11.2).",
          "hint": "Speciální neurologie LF OU"
        },
        {
          "id": "fc-S37-3",
          "front": "Co je to mononeuritis multiplex a o jaké základní onemocnění nejčastěji svědčí?",
          "back": "Akutní nebo subakutní asymetrické postižení alespoň dvou různých, anatomicky nesouvisejících periferních nervů současně, které nejčastěji svědčí pro systémovou vaskulitidu s ischemií vasa nervorum.",
          "hint": "Speciální neurologie LF OU"
        }
      ],
      "quiz": [
        {
          "id": "pq-S37-1",
          "question": "Která onkoneurální protilátka je typicky pozitivní u pacientů s paraneoplastickou subakutní senzitivní neuronopatií při malobuněčném karcinomu plic?",
          "options": [
            "Anti-AChR",
            "Anti-Hu (ANNA-1)",
            "Anti-MuSK",
            "Anti-Aquaporin 4"
          ],
          "correctIndex": 1,
          "explanation": "Protilátky anti-Hu (ANNA-1) jsou vysoce specifickým paraneoplastickým markerem spojeným s malobuněčným karcinomem plic a způsobují autoimunitní destrukci spinálních ganglií (Denny-Brownův syndrom)."
        },
        {
          "id": "pq-S37-2",
          "question": "Které cytostatikum je známé rizikem vzniku akutních chladem indukovaných parestezií a chronické senzorické polyneuropatie?",
          "options": [
            "5-Fluorouracil",
            "Oxaliplatina",
            "Methotrexát",
            "Cyklofosfamid"
          ],
          "correctIndex": 1,
          "explanation": "Oxaliplatina způsobuje typickou akutní chladovou alodynii a při kumulativní dávce chronickou toxickou axonální polyneuropatii s ataxií."
        }
      ]
    },
    {
      "id": "s38-onemocn-n-nervosvalov-ho-p-enosu-myasthe",
      "number": 38,
      "section": "specialni",
      "sectionLabel": "Speciální neurologie",
      "badgePrefix": "S38",
      "title": "Onemocnění nervosvalového přenosu (Myasthenia gravis, LEMS a Botulismus)",
      "shortDesc": "Poruchy nervosvalové ploténky: Myasthenia gravis (postsynaptická, anti-AChR, anti-MuSK, thymom, kolísající slabost, dekrement na EMG, pyridostigmin, myastenická krize vs. cholinergní krize), Lambert-Eatonův myastenický syndrom (LEMS - presynaptický, anti-VGCC, paraneoplázie SCLC) a Botulismus.",
      "category": "nervosvalovy_prenos",
      "badge": "Nervosvalová onemocnění & Myastenie",
      "badgeColor": "teal",
      "theory": {
        "banner": {
          "tag": "Speciální neurologie • Otázka S38",
          "title": "Onemocnění nervosvalového přenosu (Myasthenia gravis, LEMS a Botulismus)",
          "text": "Poruchy nervosvalové ploténky: Myasthenia gravis (postsynaptická, anti-AChR, anti-MuSK, thymom, kolísající slabost, dekrement na EMG, pyridostigmin, myastenická krize vs. cholinergní krize), Lambert-Eatonův myastenický syndrom (LEMS - presynaptický, anti-VGCC, paraneoplázie SCLC) a Botulismus."
        },
        "sections": [
          {
            "title": "1. Fyziologie nervosvalového přenosu",
            "content": "<p>Akční potenciál na presynaptickém zakončení motoneuronu otevře napěťově řízené vápníkové kanály ($P/Q\text{-type VGCC}$) $\to$ vtok $Ca^{2+}$ vyvolá fúzi vezikul a exocytózu <strong>acetylcholinu (ACh)</strong> do synaptické štěrbiny $\to$ ACh se váže na nikotinové <strong>acetylcholinové receptory (AChR)</strong> na postsynaptické membráně svalového vlákna $\to$ otevření sodíkových kanálů, vznik ploténkového potenciálu (EPP) a svalová kontrakce. ACh je následně hydrolyzován enzymem <em>acetylcholinesterázou (AChE)</em>.</p>"
          },
          {
            "title": "2. Myasthenia Gravis (MG)",
            "content": "<p><strong>Myasthenia gravis</strong> je chronické autoimunitní onemocnění charakterizované tvorbou <strong>autoprotilátek proti strukturám postsynaptické membrány</strong> nervosvalové ploténky, což vede k destrukci receptorů a poruše nervosvalového přenosu.</p>\n            <ul>\n                <li><strong>Patologické protilátky:</strong>\n                    <ul>\n                        <li><strong>Anti-AChR protilátky (85 % generalizovaných MG):</strong> aktivují komplement a zkracují životnost acetylcholinových receptorů.</li>\n                        <li><strong>Anti-MuSK protilátky (Muscle-Specific Kinase, 5–10 %):</strong> častěji u žen, těžké bulbární a respirační postižení, špatná tolerance inhibitorů AChE.</li>\n                        <li>Anti-LRP4 protilátky (u séronegativních MG).</li>\n                    </ul>\n                </li>\n                <li><strong>Patologie thymu (brzlíku):</strong> až u 75 % pacientů s anti-AChR pozitivitou je přítomna <strong>folikulární hyperplazie thymu (65 %)</strong> nebo <strong>thymom (10–15 %)</strong> (epitelový nádor předního mediastina).</li>\n            </ul>"
          },
          {
            "title": "3. Klinický obraz Myasthenia Gravis",
            "content": "<ul>\n                <li><strong>Kardinální znak:</strong> <strong>Patologická svalová unavitelnost a kolísavá slabost</strong> (zhoršuje se při opakované svalové zátěži a k večeru, zlepšuje se po odpočinku a ránu). <em>Senzitivita a šlachové reflexy jsou zcela normální!</em></li>\n                <li><strong>Klinické formy:</strong>\n                    <ol>\n                        <li><em>Okulární myastenie (50 % v začátku, 15 % izolovaně):</em> <strong>asymetrická ptóza víček</strong> (zhoršuje se při pohledu vzhůru – Simpsonův test) a <strong>kolísavá diplopie</strong> (neodpovídá lézi jediného hlavového nervu). Zornicové reakce jsou vždy intaktní!</li>\n                        <li><em>Bulbární myastenie:</em> dysartrie (nosový hlas váznoucí při delším hovoru), dysfagie (polykání vázne ke konci jídla, zatékání do nosu), slabost žvýkacích svalů (pokles dolní čelisti).</li>\n                        <li><em>Generalizovaná myastenie:</em> slabost šíjového svalstva („padající hlava“), pletencového svalstva končetin (obtížné česání, vstávání ze židle).</li>\n                    </ol>\n                </li>\n            </ul>\n\n            <div class=\"highlight-box\">\n                <h4>Myastenická krize vs. Cholinergní krize</h4>\n                <ul>\n                    <li><strong>Myastenická krize:</strong> život ohrožující stav vyvolaný akutním zhoršením myastenie (spouštěč: infekce, stres, operace, nevhodné léky – např. aminoglykosidy, beta-blokátory, hořčík!). Dochází k <strong>paréze dýchacích svalů (bránice a interkostálních svalů) a těžké dysfagii s aspirací $\to$ nutnost UPV</strong>! <em>Léčba:</em> IVIG (intravenózní imunoglobuliny 2 g/kg) nebo terapeutická plazmaferéza (PE).</li>\n                    <li><strong>Cholinergní krize:</strong> předávkování inhibitory AChE. Projev: slabost s masivními <em>muskarinovými příznaky</em> (zúžené zornice/mióza, profúzní pocení, hypersalivace, průjem, bradykardie, svalové fascikulace). <em>Léčba:</em> vysazení inhibitorů AChE, aplikace Atropinu i.v.</li>\n                </ul>\n            </div>"
          },
          {
            "title": "4. Diagnostika Myasthenia Gravis",
            "content": "<ol>\n                <li><strong>Sérologie autoprotilátek:</strong> stanovení anti-AChR a anti-MuSK protilátek v séru.</li>\n                <li><strong>Repetitivní stimulace periferního nervu (RNS na EMG):</strong> při nízkofrekvenční stimulaci (3 Hz) dochází k <strong>dekrementu amplitudy CMAP o > 10 %</strong> mezi 1. a 4.–5. vlnou.</li>\n                <li><strong>Single-Fiber EMG (SFEMG):</strong> nejcitlivější metoda (> 95 %) – prokazuje zvýšený <em>„jitter“</em> a blokády vedení.</li>\n                <li><strong>Klinické testy u lůžka:</strong>\n                    <ul>\n                        <li><em>Ledový test (Ice-pack test):</em> přiložení ledu na ptotické víčko na 2 minuty $\to$ ochlazení inhibuje acetylcholinesterázu a vede k promptnímu vymizení ptózy o $\\ge 2\text{ mm}$!</li>\n                        <li><em>Simpsonův test:</em> vyvolání ptózy při vytrvalém pohledu vzhůru po dobu 60 sekund.</li>\n                    </ul>\n                </li>\n                <li><strong>CT / MRI předního mediastina:</strong> povinné u každého pacienta k vyloučení thymomu!</li>\n            </ol>"
          },
          {
            "title": "5. Léčba Myasthenia Gravis",
            "content": "<ul>\n                <li><strong>Symptomatická léčba:</strong> <strong>Inhibitory acetylcholinesterázy (AChEI)</strong> – <strong>Pyridostigmin (Mestinon 60 mg p.o.)</strong> – nástup do 30 min, účinek 3–4 hodiny.</li>\n                <li><strong>Kauzalní imunosupresivní léčba:</strong> <strong>Kortikoidy (Prednison / Metylprednizolon)</strong> v pomalu stoupajícím dávkování + šetřící imunosupresiva (<strong>Azathioprin</strong> 2–3 mg/kg, Mykofenolát mofetil, Takrolimus).</li>\n                <li><strong>Biologická léčba (refrakterní generalizované formy):</strong> inhibitory komplementu C5 (<em>Eculizumab, Ravulizumab</em>), blokátory neonatálního Fc receptoru (<em>Efgartigimod</em>), anti-CD20 (Rituximab u anti-MuSK MG).</li>\n                <li><strong>Chirurgická léčba (Thymektomie):</strong> indikována u všech pacientů s thymomem a u generalizované anti-AChR pozitivní MG do 50–65 let věku (vede k remisi).</li>\n            </ul>"
          },
          {
            "title": "6. Lambert-Eatonův Myastenický Syndrom (LEMS) a Botulismus",
            "content": "<div class=\"anatomy-grid\">\n                <div class=\"grid-item\">\n                    <h4>Lambert-Eatonův syndrom (LEMS)</h4>\n                    <ul>\n                        <li><strong>Presynaptická autoimunita:</strong> protilátky proti <strong>napěťově řízeným vápníkovým kanálům (anti-VGCC)</strong> $\to$ váznoucí vtok $Ca^{2+}$ a nedostatečné vyplavení ACh.</li>\n                        <li>U 60 % jde o <strong>paraneoplastický syndrom při malobuněčném karcinomu plic (SCLC)</strong>!</li>\n                        <li><strong>Klinika:</strong> proximální slabost dolních končetin, <strong>zlepšování svalové síly po krátké iniciální námaze (fenomén rozcvičení / facilitation)</strong>, areflexie, sucho v ústech a autonomní dysfunkce.</li>\n                        <li><strong>EMG:</strong> nízká výchozí amplituda CMAP, při vysokofrekvenční stimulaci (20–50 Hz) nebo po 10s volní kontrakci dochází k <strong>masivnímu inkrementu amplitudy (> 100 %)</strong>!</li>\n                        <li>Léčba: léčba tumoru, <strong>Amifampridin (3,4-diaminopyridin / 3,4-DAP)</strong> – blokuje K+ kanály a prodlužuje akční potenciál.</li>\n                    </ul>\n                </div>\n                <div class=\"grid-item\">\n                    <h4>Botulismus</h4>\n                    <ul>\n                        <li><strong>Intoxikace botulotoxinem</strong> (<em>Clostridium botulinum</em> – požití kontaminovaných konzerv či klobás).</li>\n                        <li>Toxin ireverzibilně štěpí <em>SNARE proteiny</em> (SNAP-25) v presynaptickém zakončení a <strong>úplně blokuje exocytózu ACh</strong>.</li>\n                        <li><strong>Klinika (sestupná chabá paralýza):</strong> symetrické postižení hlavových nervů (diplopie, <strong>široké zornice bez fotoreakce / mydriáza</strong>, dysfagie, sucho v ústech) šířící se kaudálně na končetiny a dechové svaly.</li>\n                        <li>Léčba: urgentní podání polyvalentního <strong>antibotulinového séra</strong>, výplach žaludku, UPV.</li>\n                    </ul>\n                </div>\n            </div>"
          }
        ]
      },
      "recall": {
        "scenarios": [
          {
            "id": "sc-S38-1",
            "title": "Klinická kazuistika – Onemocnění nervosvalového přenosu (Myasthenia gravis, LEMS a Botulismus)",
            "question": "<strong>Kazuistika:</strong> 28letá žena přichází pro 3 měsíce progredující padání obou očních víček a dvojité vidění, které je nejhorší večer po celém dni v práci nebo po delším čtení. Ráno po probuzení se cítí zcela v pořádku. Poslední 2 týdny má pocit unavených žvýkacích svalů při kousání tuhého masa. Zornice jsou izokorické s normální fotoreakcí, citlivost i šlachové reflexy na všech končetinách jsou výbavné.<br><br><strong>Klinický úkol:</strong> Stanovte diagnózu, popište diagnostický algoritmus a navrhněte iniciální symptomatickou a kauzální léčbu.",
            "answer": "<ul style='margin: 6px 0 0 18px; padding: 0; line-height: 1.5;'><li>Diagnóza: Myasthenia gravis (forma s okulárním a incipientním bulbárním postižením).</li><li>Klinické ověření u lůžka: Pozitivní Simpsonův test (vyvolání ptózy po 60s pohledu vzhůru) a pozitivní ledový test (ústup ptózy po 2 min aplikace ledu).</li><li>Laboratorní a elektrofyziologická diagnostika: Náběr autoprotilátek proti acetylcholinovým receptorům (anti-AChR) a anti-MuSK; repetitivní nízkofrekvenční stimulace (RNS) na EMG k průkazu patologického dekrementu amplitudy CMAP (> 10 %).</li><li>Zobrazovací vyšetření mediastina: CT nebo MRI hrudníku k vyloučení patologie thymu (thymom vs. hyperplazie).</li><li>Terapeutický plán: Zahájení symptomatické léčby inhibitorem acetylcholinesterázy – Pyridostigmin (Mestinon 60 mg p.o. 3–4x denně), v případě nedostatečného efektu nasazení prednisonu a indikace k elektivní thymektomii.</li></ul>",
            "keyPoints": [
              "Diagnóza: Myasthenia gravis (forma s okulárním a incipientním bulbárním postižením).",
              "Klinické ověření u lůžka: Pozitivní Simpsonův test (vyvolání ptózy po 60s pohledu vzhůru) a pozitivní ledový test (ústup ptózy po 2 min aplikace ledu).",
              "Laboratorní a elektrofyziologická diagnostika: Náběr autoprotilátek proti acetylcholinovým receptorům (anti-AChR) a anti-MuSK; repetitivní nízkofrekvenční stimulace (RNS) na EMG k průkazu patologického dekrementu amplitudy CMAP (> 10 %).",
              "Zobrazovací vyšetření mediastina: CT nebo MRI hrudníku k vyloučení patologie thymu (thymom vs. hyperplazie).",
              "Terapeutický plán: Zahájení symptomatické léčby inhibitorem acetylcholinesterázy – Pyridostigmin (Mestinon 60 mg p.o. 3–4x denně), v případě nedostatečného efektu nasazení prednisonu a indikace k elektivní thymektomii."
            ],
            "pearl": "Myasthenia gravis je postsynaptické onemocnění (anti-AChR, anti-MuSK) s kolísající svalovou unavitelností, ptózou, diplopií a ušetřením zornic."
          }
        ]
      },
      "cards": [
        {
          "id": "fc-S38-1",
          "front": "Jaký elektrofyziologický nález při repetitivní stimulaci periferního nervu na EMG odliší Myasthenii gravis od Lambert-Eatonova syndromu (LEMS)?",
          "back": "Myasthenia gravis prokazuje při nízkofrekvenční stimulaci (3 Hz) dekrement (pokles amplitudy CMAP o > 10 %). LEMS prokazuje nízkou výchozí amplitudu s masivním inkrementem (vzestupem amplitudy o > 100 %) při vysokofrekvenční stimulaci nebo po maximální volní kontrakci.",
          "hint": "Speciální neurologie LF OU"
        },
        {
          "id": "fc-S38-2",
          "front": "Který jednoduchý klinický test u lůžka má vysokou senzitivitu pro potvrzení okulární myastenie při přítomnosti ptózy víčka?",
          "back": "Ledový test (Ice-pack test) – přiložení ledu na ptotické víčko na 2 minuty vede k rychlému vymizení nebo výraznému zmenšení ptózy víčka (chlad zpomaluje funkci acetylcholinesterázy).",
          "hint": "Speciální neurologie LF OU"
        },
        {
          "id": "fc-S38-3",
          "front": "S jakým nádorovým onemocněním je v 60 % případů asociován Lambert-Eatonův myastenický syndrom (LEMS)?",
          "back": "S malobuněčným bronchogenním karcinomem plic (SCLC - Small Cell Lung Cancer) jako paraneoplastický projev tvorby protilátek proti napěťově řízeným vápníkovým kanálům (anti-VGCC).",
          "hint": "Speciální neurologie LF OU"
        }
      ],
      "quiz": [
        {
          "id": "pq-S38-1",
          "question": "Který lék je lékem první volby pro rychlou symptomatickou léčbu Myasthenia gravis?",
          "options": [
            "Pyridostigmin (Mestinon)",
            "Baklofen",
            "Riluzol",
            "Amantadin"
          ],
          "correctIndex": 0,
          "explanation": "Pyridostigmin (Mestinon) je reverzibilní inhibitor acetylcholinesterázy, který prodlužuje přítomnost acetylcholinu v synaptické štěrbině a promptně zlepšuje svalovou sílu."
        },
        {
          "id": "pq-S38-2",
          "question": "Které z následujících léčiv může vyvolat akutní dekompenzaci a myastenickou krizi u pacienta s Myasthenia gravis a je u nich relativně kontraindikováno?",
          "options": [
            "Aminoglykosidová antibiotika (např. Gentamicin)",
            "Paracetamol",
            "Inhibitory protonové pumpy",
            "Penicilin G"
          ],
          "correctIndex": 0,
          "explanation": "Aminoglykosidy (gentamicin, amikacin), makrolidy, chinolony, beta-blokátory, myorelaxancia a hořčík (magnesium i.v.) blokují nervosvalový přenos a mohou u myastenika vyvolat fatální respirační selhání."
        }
      ]
    },
    {
      "id": "s39-onemocn-n-kostern-ho-svalstva-svalov-dys",
      "number": 39,
      "section": "specialni",
      "sectionLabel": "Speciální neurologie",
      "badgePrefix": "S39",
      "title": "Onemocnění kosterního svalstva (Svalové dystrofie, myotonie a myositidy)",
      "shortDesc": "Primární onemocnění kosterního svalstva: Duchenneova a Beckerova svalová dystrofie (DMD/BMD, dystrofin, Gowersovo znamení, kreatinkináza CK), myotonická dystrofie DM1 (Steinert), zánětlivé myositidy (polymyositida, dermatomyositida, inkluzní myositida) a toxické myopatie (statiny, rabdomyolýza).",
      "category": "nervosvalovy_prenos",
      "badge": "Myopatie & Svalová onemocnění",
      "badgeColor": "teal",
      "theory": {
        "banner": {
          "tag": "Speciální neurologie • Otázka S39",
          "title": "Onemocnění kosterního svalstva (Svalové dystrofie, myotonie a myositidy)",
          "text": "Primární onemocnění kosterního svalstva: Duchenneova a Beckerova svalová dystrofie (DMD/BMD, dystrofin, Gowersovo znamení, kreatinkináza CK), myotonická dystrofie DM1 (Steinert), zánětlivé myositidy (polymyositida, dermatomyositida, inkluzní myositida) a toxické myopatie (statiny, rabdomyolýza)."
        },
        "sections": [
          {
            "title": "1. Úvod a Klasifikace myopatií",
            "content": "<p><strong>Myopatie</strong> jsou primární onemocnění kosterního svalu nezávislá na poruše centrálního či periferního motoneuronu. Projevují se typicky <strong>symetrickou slabostí a atrofií proximálního (pletencového) svalstva</strong> (obtížné vstávání ze dřepu, chůze do schodů, česání), myalgiemi a elevací svalových enzymů (<strong>kreatinkinázy - CK</strong>). Citlivost je vždy normální!</p>"
          },
          {
            "title": "2. Svalové dystrofie vázané na X-chromozom (Dystrofinopatie)",
            "content": "<p>Gonozomálně recesivní onemocnění (postihuje chlapce, ženy jsou přenašečky) způsobené mutací (delece 65 %, duplikace, bodové mutace) v obřím genu pro <strong>dystrofin</strong> na chromozomu Xp21. Dystrofin ukotvuje aktinový cytoskelet k sarkolemě; jeho absence vede k nestabilitě membrány, masivnímu vplavení vápníku a nekróze svalových vláken.</p>\n\n            <div class=\"anatomy-grid\">\n                <div class=\"grid-item\">\n                    <h4>Duchenneova svalová dystrofie (DMD)</h4>\n                    <ul>\n                        <li><strong>Genetika:</strong> mutace s posunem čtecího rámce (out-of-frame) $\to$ <strong>úplný deficit dystrofinu (< 5 %)</strong>. Incidence 1 : 3 500 narozených chlapců.</li>\n                        <li><strong>Klinický průběh:</strong>\n                            <ul>\n                                <li>Manifestace ve věku 2–5 let: kolébavá („kachní“) chůze, časté pády, potíže s během a chůzí do schodů.</li>\n                                <li><strong>Gowersovo znamení („šplhání po vlastním těle“):</strong> chlapec při vstávání ze země na bobku používá ruce k postupnému opírání o svá kolena a stehna.</li>\n                                <li><strong>Pseudohypertrofie lýtek:</strong> zdánlivé zmohutnění m. gastrocnemius (nahrazení svalu tukem a vazivem).</li>\n                                <li>Ztráta schopnosti samostatné chůze kolem <strong>10.–12. roku věku</strong> (upoutání na vozík).</li>\n                                <li><em>Komplikace:</em> respirační insuficience, <strong>dilatační kardiomyopatie</strong>, skolióza. Medián dožití 20–30 let.</li>\n                            </ul>\n                        </li>\n                        <li><strong>Laboratoř:</strong> <strong>extrémní elevace kreatinkinázy (CK 50–100x nad normu, v desítkách tisíc IU/l)</strong> od narození!</li>\n                    </ul>\n                </div>\n                <div class=\"grid-item\">\n                    <h4>Beckerova svalová dystrofie (BMD)</h4>\n                    <ul>\n                        <li><strong>Genetika:</strong> mutace zachovávající čtecí rámec (in-frame) $\to$ <strong>tvoří se zkrácený, částečně funkční dystrofin</strong>.</li>\n                        <li><strong>Mírnější průběh:</strong> manifestace v 10–20 letech, ztráta chůze po 16. až 30. roce věku, pacienti se dožívají středního až vyššího věku. Častá kardiomyopatie.</li>\n                    </ul>\n                </div>\n            </div>"
          },
          {
            "title": "3. Myotonická dystrofie 1. typu (DM1 / Morbus Steinert)",
            "content": "<ul>\n                <li>Nejčastější svalová dystrofie dospělých (AD dědičnost s anticipací). Způsobena expanzí <strong>CTG repetic v genu DMPK</strong> na 19. chromozomu.</li>\n                <li><strong>Klinická multisystémová manifestace:</strong>\n                    <ul>\n                        <li><strong>Myotonie (opožděná svalová relaxace):</strong> po silném stisku ruky pacient nedokáže okamžitě otevřít dlaň (akční myotonie) nebo po poklepu kladívkem na thenar vzniká myotonický důlek (perkusní myotonie).</li>\n                        <li><strong>Distální svalová slabost:</strong> atrofie svalů předloktí, bérců, obličeje (<em>facies myopathica</em> – ptóza víček, propadlé spánky, hypomimie).</li>\n                        <li><em>Extramuskulární příznaky:</em> <strong>časná katarakta</strong> (před 40. rokem), <strong>převodní poruchy srdeční (AV blokády, riziko náhlé smrti!)</strong>, diabetes mellitus, hypogonadismus a předčasná frontální plešatost u mužů.</li>\n                    </ul>\n                </li>\n            </ul>"
          },
          {
            "title": "4. Zánětlivé myopatie (Idiopatické myositidy)",
            "content": "<table class=\"data-table\">\n                <thead>\n                    <tr>\n                        <th>Jednotka</th>\n                        <th>Patogeneze a histologie</th>\n                        <th>Klinický obraz a kožní projevy</th>\n                        <th>Léčba</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr>\n                        <td><strong>Polymyositida (PM)</strong></td>\n                        <td>Autoimunitní útok $CD8^+$ cytotoxických T-lymfocytů přímo na svalová vlákna (endomysiální zánět). Autoprotilátky (anti-Jo-1).</td>\n                        <td>Subakutní symetrická slabost proximálního svalstva pletenců (stehna, ramena), myalgie, dysfagie. Bez kožních změn.</td>\n                        <td>Kortikoidy (Prednison 1 mg/kg) + Azathioprin / Methotrexát.</td>\n                    </tr>\n                    <tr>\n                        <td><strong>Dermatomyositida (DM)</strong></td>\n                        <td>Komplementem mediovaná mikrovaskulopatie cév svalu (perifascikulární atrofie a perimysiální zánět). Často <em>paraneoplastická</em>!</td>\n                        <td>Proximální slabost + typické kožní léze: <strong>Heliotropní exantém</strong> (fialový otok horních víček), <strong>Gottronovy papuly</strong> (erytematózní papuly nad klouby prstů ruky), V-sign na dekoltu.</td>\n                        <td>Kortikoidy, IVIG, imunosuprese + onkologický screening!</td>\n                    </tr>\n                    <tr>\n                        <td><strong>Myositida s inkluzními tělísky (IBM)</strong></td>\n                        <td>Kombinace zánětu a degenerace s vakuolami a depozity $\beta$-amyloidu ve svalu. Muži > 50 let.</td>\n                        <td><strong>Asymetrická distální slabost flexorů prstů ruky</strong> a m. quadriceps femoris. Refrakterní na imunosupresi!</td>\n                        <td>Symptomatická fyzioterapie.</td>\n                    </tr>\n                </tbody>\n            </table>"
          },
          {
            "title": "5. Toxické a Polékové myopatie (Statinová myopatie)",
            "content": "<ul>\n                <li><strong>Statinem indukovaná myopatie:</strong> od mírných myalgií s normální CK po toxickou nekrózu s elevací CK.</li>\n                <li><strong>Autoimunitní nekrotizující myopatie asociovaná se statiny (IMNM):</strong> přetrvává i po vysazení statinů, provázena tvorbou <strong>autoprotilátek proti HMG-CoA reduktáze (anti-HMGCR)</strong>. Vyžaduje agresivní imunosupresi.</li>\n                <li><strong>Rabdomyolýza:</strong> masivní nekróza svalů (trauma/crush syndrom, intoxikace alkoholem/kokainem, statiny) $\to$ extrémní elevace CK (> 50 000 IU/l), <strong>myoglobinurie (tmavá moč barvy kofoly)</strong> a akutní tubulární nekróza s <strong>akutním selháním ledvin</strong>! Léčba: masivní i.v. hydratace, alkalizace moči bikarbonátem, hemodiフィltrace.</li>\n            </ul>"
          }
        ]
      },
      "recall": {
        "scenarios": [
          {
            "id": "sc-S39-1",
            "title": "Klinická kazuistika – Onemocnění kosterního svalstva (Svalové dystrofie, myotonie a myositidy)",
            "question": "<strong>Kazuistika:</strong> 4letý chlapec vyšetřován pro neobratnost při chůzi, neschopnost běhat a časté pády. Při vstávání z podlahy se přetočí na břicho a postupně se zvedá šplháním rukama po svých holeních a stehnech. Lýtka má nápadně objemná a tuhá. Laboratoř odhaluje hodnotu sérové kreatinkinázy (CK) 38 000 IU/l (norma do 3,0 IU/l).<br><br><strong>Klinický úkol:</strong> Stanovte diagnózu, popište genetickou podstatu a navrhněte diagnostické potvrzení a léčebný management.",
            "answer": "<ul style='margin: 6px 0 0 18px; padding: 0; line-height: 1.5;'><li>Diagnóza: Duchenneova svalová dystrofie (DMD) s typickým Gowersovým znamením a pseudohypertrofií lýtek.</li><li>Genetická podstata: Gonozomálně recesivní onemocnění (X-vázané) způsobené mutací genu pro dystrofin (Xp21) vedoucí k úplné absenci funkčního dystrofinu v sarkolemě.</li><li>Potvrzení diagnózy: Molekulárně-genetické vyšetření DNA z krve (metoda MLPA k detekci delecí/duplikací v genu DMD, případně sekvenování), svalová biopsie s imunohistochemickým barvením na dystrofin.</li><li>Farmakoterapie: Zahájení léčby kortikoidy (Prednison 0,75 mg/kg/den nebo Deflazakort) – prokazatelně prodlužují schopnost samostatné chůze o 2–3 roky a chrání kardiopulmonální funkce.</li><li>Komplexní péče: Pravidelné kardiologické sledování (echokardiografie, Holter EKG), fyzioterapie k prevenci kontraktur Achillových šlach, genetické poradenství pro matku a rodinu.</li></ul>",
            "keyPoints": [
              "Diagnóza: Duchenneova svalová dystrofie (DMD) s typickým Gowersovým znamením a pseudohypertrofií lýtek.",
              "Genetická podstata: Gonozomálně recesivní onemocnění (X-vázané) způsobené mutací genu pro dystrofin (Xp21) vedoucí k úplné absenci funkčního dystrofinu v sarkolemě.",
              "Potvrzení diagnózy: Molekulárně-genetické vyšetření DNA z krve (metoda MLPA k detekci delecí/duplikací v genu DMD, případně sekvenování), svalová biopsie s imunohistochemickým barvením na dystrofin.",
              "Farmakoterapie: Zahájení léčby kortikoidy (Prednison 0,75 mg/kg/den nebo Deflazakort) – prokazatelně prodlužují schopnost samostatné chůze o 2–3 roky a chrání kardiopulmonální funkce.",
              "Komplexní péče: Pravidelné kardiologické sledování (echokardiografie, Holter EKG), fyzioterapie k prevenci kontraktur Achillových šlach, genetické poradenství pro matku a rodinu."
            ],
            "pearl": "Myopatie se projevují proximální symetrickou svalovou slabostí pletenců, normálním čitím a zvýšenou kreatinkinázou (CK)."
          }
        ]
      },
      "cards": [
        {
          "id": "fc-S39-1",
          "front": "Co je to Gowersovo znamení a pro které onemocnění je typické?",
          "back": "Způsob vstávání dítěte ze země 'šplháním po vlastním těle' (opíráním rukou o kolena a stehna) kvůli těžké slabosti gluteálního a pánevního svalstva. Je typické pro Duchenneovu svalovou dystrofii (DMD).",
          "hint": "Speciální neurologie LF OU"
        },
        {
          "id": "fc-S39-2",
          "front": "Které typické kožní příznaky charakterizují dermatomyositidu?",
          "back": "Heliotropní exantém (fialové zbarvení a periorbitální edém horních víček) a Gottronovy papuly / Gottronovo znamení (šupinaté fialovočervené papuly nad drobnými klouby rukou a lokty).",
          "hint": "Speciální neurologie LF OU"
        },
        {
          "id": "fc-S39-3",
          "front": "Jaké orgánové komplikace mimo svalový systém bezprostředně ohrožují život pacientů s Myotonickou dystrofií 1. typu (DM1)?",
          "back": "Převodní poruchy srdečního rytmu (prodloužení PQ, AV blokády, komorové arytmie s rizikem náhlé kardiální smrti) a respirační insuficience s noční hypoventilací.",
          "hint": "Speciální neurologie LF OU"
        }
      ],
      "quiz": [
        {
          "id": "pq-S39-1",
          "question": "Která z následujících zánětlivých myopatií je charakteristická asymetrickým postižením distálních flexorů prstů ruky a m. quadriceps u mužů nad 50 let a špatnou odpovědí na kortikoterapii?",
          "options": [
            "Polymyositida",
            "Dermatomyositida",
            "Myositida s inkluzními tělísky (IBM)",
            "Duchenneova dystrofie"
          ],
          "correctIndex": 2,
          "explanation": "Inclusion Body Myositis (IBM) je specifická zánětlivě-degenerativní myopatie starších mužů s predilekčním postižením hlubokých flexorů prstů a m. quadriceps, která neodpovídá na standardní imunosupresi."
        },
        {
          "id": "pq-S39-2",
          "question": "Myotonický fenomén u myotonické dystrofie představuje:",
          "options": [
            "Rychlý zánik reflexů",
            "Zpomalenou relaxaci kosterního svalu po předchozí volní kontrakci nebo mechanické stimulaci",
            "Spontánní fascikulace jazyka",
            "Nekontrolovatelné choreatické pohyby"
          ],
          "correctIndex": 1,
          "explanation": "Myotonie je definována jako porucha svalové relaxace (opožděné uvolnění po volní kontrakci) způsobená hyperexcitabilitou sarkolemy a repetitivními výboji na EMG."
        }
      ]
    },
    {
      "id": "s40-d-tsk-mozkov-obrna-dmo-infantile-cerebra",
      "number": 40,
      "section": "specialni",
      "sectionLabel": "Speciální neurologie",
      "badgePrefix": "S40",
      "title": "Dětská mozková obrna (DMO / Infantile Cerebral Palsy)",
      "shortDesc": "Dětská mozková obrna (DMO / ICP): neprogresivní postižení vyvíjejícího se mozku v časném perinatálním věku, etiopatogeneze (PVL, hypoxicko-ischemická encefalopatie), klinické formy (spastická diplegie/Little, hemiplegie, kvadruplegie, dyskinetická a ataktická forma) a komplexní neurorehabilitace (Vojta, Bobath, botulotoxin, ITB).",
      "category": "vrozene_vyvojove",
      "badge": "Vývojová & Dětská neurologie",
      "badgeColor": "teal",
      "theory": {
        "banner": {
          "tag": "Speciální neurologie • Otázka S40",
          "title": "Dětská mozková obrna (DMO / Infantile Cerebral Palsy)",
          "text": "Dětská mozková obrna (DMO / ICP): neprogresivní postižení vyvíjejícího se mozku v časném perinatálním věku, etiopatogeneze (PVL, hypoxicko-ischemická encefalopatie), klinické formy (spastická diplegie/Little, hemiplegie, kvadruplegie, dyskinetická a ataktická forma) a komplexní neurorehabilitace (Vojta, Bobath, botulotoxin, ITB)."
        },
        "sections": [
          {
            "title": "1. Definice a Charakteristika DMO",
            "content": "<p><strong>Dětská mozková obrna (DMO / Cerebral Palsy - CP)</strong> je zastřešující termín pro skupinu <strong>trvalých, ale neprogredujících poruch vývoje hybnosti a držení těla</strong>, které vedou k omezení aktivity a vznikly v důsledku <strong>časného poškození nezralého (vyvíjejícího se) mozku plodu nebo kojence</strong> (prenatálně, perinatálně nebo postnatálně do 1–2 let věku). Prevalence je cca 2 na 1 000 živě narozených dětí.</p>"
          },
          {
            "title": "2. Etiologie a Rizikové faktory",
            "content": "<ul>\n                <li><strong>1. Prenatální faktory (70–80 %):</strong> intrauterinní infekce (TORCH – toxoplazmóza, rubeola, CMV, herpes), vaskulární mozkové příhody plodu, genetické poruchy vývoje mozku, vícečetná těhotenství, abúzus látek matkou.</li>\n                <li><strong>2. Perinatální faktory:</strong>\n                    <ul>\n                        <li><strong>Nedonošenost a extrémně nízká porodní hmotnost (< 1500 g):</strong> nezralá periventrikulární bílá hmota je citlivá na ischemii $\to$ <strong>Periventrikulární leukomalacie (PVL)</strong> (podklad spastické diplegie).</li>\n                        <li>Perinatální asfyxie / hypoxicko-ischemická encefalopatie (HIE), periventrikulární/intraventrikulární krvácení (IVH).</li>\n                        <li>Těžká novorozenecká hyperbilirubinémie $\to$ <strong>jádrový ikterus (kernikterus)</strong> s poškozením bazálních ganglií (podklad dyskinetické DMO).</li>\n                    </ul>\n                </li>\n                <li><strong>3. Postnatální faktory:</strong> novorozenecké purulentní meningitidy a encefalitidy, kraniocerebrální traumata, asfyxie (tonutí) v kojeneckém věku.</li>\n            </ul>"
          },
          {
            "title": "3. Klasifikace klinických forem DMO",
            "content": "<div class=\"anatomy-grid\">\n                <div class=\"grid-item\">\n                    <h4>1. Spastické formy (75–80 % případů)</h4>\n                    <ul>\n                        <li><strong>Spastická diplegie (Diparetická forma / Littleova choroba):</strong>\n                            <ul>\n                                <li>Dominantní symetrické <strong>postižení dolních končetin</strong>, horní končetiny jsou postiženy minimálně nebo intaktní.</li>\n                                <li>Typický korelát: <em>periventrikulární leukomalacie (PVL)</em> u nedonošenců (útlak vláken pro DK).</li>\n                                <li><em>Klinika:</em> spasticita adduktorů stehen a m. triceps surae $\to$ <strong>nůžkovitá chůze po špičkách (pes equinus)</strong>, zkřížení kolínek. Intelekt bývá často normální!</li>\n                            </ul>\n                        </li>\n                        <li><strong>Spastická hemiplegie (Hemiparetická forma):</strong>\n                            <ul>\n                                <li>Jednostranné postižení (více bývá postižena horní končetina).</li>\n                                <li>Wernicke-Mannovo držení (flexe v lokti a zápěstí, extenze a cirkumdukce dolní končetiny). Často spojeno s fokální epilepsií.</li>\n                            </ul>\n                        </li>\n                        <li><strong>Spastická kvadruplegie (Kvadruparetická forma):</strong>\n                            <ul>\n                                <li>Nejtěžší forma s postižením všech čtyř končetin (často těžší na HK).</li>\n                                <li>Vzniká po těžké asfyxii a rozsáhlé multicystické encefalomalacii.</li>\n                                <li>Těžká mentální retardace, pseudobulbární syndrom, epilepsie, mikrocifalie.</li>\n                            </ul>\n                        </li>\n                    </ul>\n                </div>\n                <div class=\"grid-item\">\n                    <h4>2. Nespastické (extrapyramidové a ataktické) formy</h4>\n                    <ul>\n                        <li><strong>Dyskinetická (Atetoidní / Dystonická) forma (10–15 %):</strong>\n                            <ul>\n                                <li>Léze bazálních ganglií (status marmoratus, kernikterus po asfyxii).</li>\n                                <li><em>Projevy:</em> mimovolní pomalé kroutivé pohyby (atetóza), chorea, dystonie vyvolaná emocemi a pokusem o volní pohyb. Výrazná orofaciální dyskineze (grimasy, slinění, dysartrie).</li>\n                                <li>Intelekt bývá často překvapivě intaktní, ale pacient je těžce motoricky hendikepován!</li>\n                            </ul>\n                        </li>\n                        <li><strong>Ataktická (Mozečková) forma (5 %):</strong>\n                            <ul>\n                                <li>Hypotonie, porucha rovnováhy a koordinace, ataktická chůze o široké bázi, intenční třes.</li>\n                            </ul>\n                        </li>\n                        <li><strong>Smíšené formy:</strong> kombinace spasticity a dystonie.</li>\n                    </ul>\n                </div>\n            </div>"
          },
          {
            "title": "4. Časná diagnostika DMO",
            "content": "<ul>\n                <li><strong>Varovné známky v kojeneckém věku:</strong>\n                    <ul>\n                        <li>Opoždění motorických milníků (nedrží hlavičku ve 3 měsících, nesedí v 8–9 měsících, neleze, nechodí po 18. měsíci).</li>\n                        <li><strong>Přetrvávání primitivních novorozeneckých reflexů</strong> (Moroův reflex, asymetrický tonický šíjový reflex - ATŠR) i po 6. měsíci věku.</li>\n                        <li>Predilekce jedné ruky před 12. měsícem věku (časná lateralizace je vždy podezřelá z parézy druhé ruky!).</li>\n                        <li>Trvalé zatínání pěstí s palcem v dlani (cortical thumb).</li>\n                    </ul>\n                </li>\n                <li><strong>Zobrazovací metody:</strong> <strong>MRI mozku</strong> (zlatý standard pro průkaz PVL, poischemických kavitací, dysgenezí kůry).</li>\n            </ul>"
          },
          {
            "title": "5. Komplexní terapie a Rehabilitace",
            "content": "<p>DMO je nevyléčitelné onemocnění, avšak včasná a intenzivní intervence využívá plasticitu dětského mozku k maximalizaci soběstačnosti:</p>\n            <ul>\n                <li><strong>Neurofyziologická rehabilitace:</strong>\n                    <ul>\n                        <li><strong>Vojtova metoda (reflexní lokomoce):</strong> stimulace spoušťových zón k aktivaci vrozených motorických vzorců (reflexní plazení a otáčení). Zásadní zahájit v prvních měsících života!</li>\n                        <li><strong>Bobath koncept:</strong> inhibice patologických reflexních vzorců a facilitace normálního pohybu v běžných denních činnostech.</li>\n                    </ul>\n                </li>\n                <li><strong>Léčba spasticity:</strong>\n                    <ul>\n                        <li>Lokální aplikace <strong>Botulotoxinu A</strong> do spastických svalů (např. m. gastrocnemius, flexory kyčle) pro zlepšení stoje a prevenci kontraktur.</li>\n                        <li><strong>Intratekální baklofenová pumpa (ITB):</strong> u těžké generalizované spasticity.</li>\n                        <li><strong>Selektivní dorzální rizotomie (SDR):</strong> neurochirurgické protětí části dorzálních senzitivních kořenů L1–S1 k trvalému snížení spasticity nohou u diparetiků.</li>\n                    </ul>\n                </li>\n                <li><strong>Ortopedická chirurgie:</strong> prodlužování šlach (tenotomie Achillovy šlachy), transpozice šlach a derotační osteotomie při kloubních kontrakturách a luxacích kyčlí.</li>\n                <li><strong>Mezioborová péče:</strong> logopedie, ergoterapie, speciální pedagogika, antiepileptická léčba při záchvatech.</li>\n            </ul>"
          }
        ]
      },
      "recall": {
        "scenarios": [
          {
            "id": "sc-S40-1",
            "title": "Klinická kazuistika – Dětská mozková obrna (DMO / Infantile Cerebral Palsy)",
            "question": "<strong>Kazuistika:</strong> 14měsíční chlapec narozený ve 30. gestačním týdnu s porodní hmotností 1350 g je sledován v rizikové poradně. Matka uvádí, že chlapec dosud samostatně neleze ani nestojí. Při pokusu o vertikalizaci se staví výhradně na špičky s vnitřní rotací nohou a křížením kolínek přes sebe (nůžkovité postavení). Na dolních končetinách je vyjádřena těžká spasticita adduktorů a m. triceps surae s klonem čéšek a oboustranným Babinským. Horní končetiny a orofaciální oblast jsou intaktní, chlapec žvatlá a komunikuje.<br><br><strong>Klinický úkol:</strong> Stanovte diagnózu a klinickou formu DMO, popište neuropatologický podklad a navrhněte terapeutický plán.",
            "answer": "<ul style='margin: 6px 0 0 18px; padding: 0; line-height: 1.5;'><li>Diagnóza: Dětská mozková obrna (DMO) – spastická diparetická forma (diplegie / Littleova choroba).</li><li>Neuropatologický korelát: Periventrikulární leukomalacie (PVL) v povodí terminálních zón zásobení bílé hmoty kolem postranních komor v důsledku nezralosti a nedonošenosti.</li><li>Zobrazovací potvrzení: MRI mozku k průkazu ložisek gliózy a redukce periventrikulární bílé hmoty v parietookcipitální oblasti.</li><li>Rehabilitační léčba: Okamžité zintenzivnění neurofyziologické rehabilitace (Vojtova metoda, Bobath koncept) k nácviku fyziologických vzorců a protahování kontraktur.</li><li>Spastická léčba a protetika: Lokální aplikace Botulotoxinu A do spastických adduktorů stehen a m. gastrocnemius k umožnění nášlapu na celé chodidlo, ortézy na noc (polohovací dlahy) a nácvik vertikalizace a chůze v chodítku.</li></ul>",
            "keyPoints": [
              "Diagnóza: Dětská mozková obrna (DMO) – spastická diparetická forma (diplegie / Littleova choroba).",
              "Neuropatologický korelát: Periventrikulární leukomalacie (PVL) v povodí terminálních zón zásobení bílé hmoty kolem postranních komor v důsledku nezralosti a nedonošenosti.",
              "Zobrazovací potvrzení: MRI mozku k průkazu ložisek gliózy a redukce periventrikulární bílé hmoty v parietookcipitální oblasti.",
              "Rehabilitační léčba: Okamžité zintenzivnění neurofyziologické rehabilitace (Vojtova metoda, Bobath koncept) k nácviku fyziologických vzorců a protahování kontraktur.",
              "Spastická léčba a protetika: Lokální aplikace Botulotoxinu A do spastických adduktorů stehen a m. gastrocnemius k umožnění nášlapu na celé chodidlo, ortézy na noc (polohovací dlahy) a nácvik vertikalizace a chůze v chodítku."
            ],
            "pearl": "DMO je trvalé, ale neprogredující poškození vyvíjejícího se mozku v raném věku."
          }
        ]
      },
      "cards": [
        {
          "id": "fc-S40-1",
          "front": "Co je to periventrikulární leukomalacie (PVL) a kterou klinickou formu DMO nejčastěji způsobuje?",
          "back": "Ischemické poškození a nekróza bílé hmoty v okolí postranních mozkových komor u nedonošených novorozenců, které selektivně poškozuje pyramidová vlákna pro dolní končetiny a vede ke vzniku spastické diplegie (Littleovy choroby).",
          "hint": "Speciální neurologie LF OU"
        },
        {
          "id": "fc-S40-2",
          "front": "Proč je nápadná dominance/preference jedné horní končetiny u kojence mladšího než 12 měsíců varovným neurologickým příznakem?",
          "back": "Fyziologicky je motorický vývoj kojenců do 1 roku věku symetrický. Časná jednostranná preference ruky bývá prvním známkou spastické hemiparézy druhé, opomíjené končetiny.",
          "hint": "Speciální neurologie LF OU"
        },
        {
          "id": "fc-S40-3",
          "front": "Které dvě hlavní fyzioterapeutické metody tvoří základ včasné rehabilitace u dětí s DMO?",
          "back": "1. Vojtova metoda (reflexní lokomoce aktivující geneticky zakódované pohybové vzorce tlakem na spoušťové body), 2. Bobath koncept (neurovývojová terapie zaměřená na potlačení patologického svalového tonu a nácvik funkčních denních aktivit).",
          "hint": "Speciální neurologie LF OU"
        }
      ],
      "quiz": [
        {
          "id": "pq-S40-1",
          "question": "Která klinická forma DMO je charakterizována mimovolními kroutivými pohyby (atetózou), dystonií a výraznou orofaciální dyskinezí při často zachovalých kognitivních schopnostech?",
          "options": [
            "Spastická diplegie",
            "Dyskinetická (atetoidní) forma",
            "Ataktická forma",
            "Spastická hemiplegie"
          ],
          "correctIndex": 1,
          "explanation": "Dyskinetická forma DMO vzniká poškozením bazálních ganglií a talamu (po těžké asfyxii nebo kernikteru) a projevuje se atetózou, dystonií a dysartrií bez primární spasticity."
        },
        {
          "id": "pq-S40-2",
          "question": "Přetrvávání kterého primitivního reflexu po 6. měsíci věku brání dítěti v symetrickém vzpřímení a otáčení z bříška na záda?",
          "options": [
            "Asymetrický tonický šíjový reflex (ATŠR neboli reflex šermíře)",
            "Patelární reflex",
            "Zornicový reflex",
            "Korneální reflex"
          ],
          "correctIndex": 0,
          "explanation": "Asymetrický tonický šíjový reflex (ATŠR – otočení hlavičky vyvolá extenzi končetin na straně obličeje a flexi na straně záhlaví) fyziologicky vyhasíná do 4.–6. měsíce věku. Jeho perzistence je kardinální známkou spastické formy DMO."
        }
      ]
    },
    {
      "id": "s41-akutn-a-chronick-z-n-tliv-polyradikulone",
      "number": 41,
      "section": "specialni",
      "sectionLabel": "Speciální neurologie",
      "badgePrefix": "S41",
      "title": "Akutní a chronické zánětlivé polyradikuloneuritidy (Guillain-Barré syndrom a CIDP)",
      "shortDesc": "Autoimunitní polyradikuloneuritidy: Guillain-Barré syndrom (GBS / AIDP - postinfekční zkřížená imunita, vzestupná kvadruparéza, areflexie, proteinocytologická disociace, IVIG a plazmaferéza, KONTRAINDIKACE kortikoidů), Miller-Fisherův syndrom (anti-GQ1b) a Chronická zánětlivá demyelinizační polyneuropatie (CIDP).",
      "category": "autoimunitni_demyelinizace",
      "badge": "Autoimunitní & Demyelinizační polyneuropatie",
      "badgeColor": "teal",
      "theory": {
        "banner": {
          "tag": "Speciální neurologie • Otázka S41",
          "title": "Akutní a chronické zánětlivé polyradikuloneuritidy (Guillain-Barré syndrom a CIDP)",
          "text": "Autoimunitní polyradikuloneuritidy: Guillain-Barré syndrom (GBS / AIDP - postinfekční zkřížená imunita, vzestupná kvadruparéza, areflexie, proteinocytologická disociace, IVIG a plazmaferéza, KONTRAINDIKACE kortikoidů), Miller-Fisherův syndrom (anti-GQ1b) a Chronická zánětlivá demyelinizační polyneuropatie (CIDP)."
        },
        "sections": [
          {
            "title": "1. Guillain-Barré Syndrom (GBS / Akutní zánětlivá demyelinizační polyradikuloneuropatie - AIDP)",
            "content": "<p><strong>Guillain-Barré syndrom (GBS)</strong> je akutní, autoimunitně zprostředkovaná polyradikuloneuropatie představující <strong>nejčastější příčinu akutní chabé paralýzy v rozvinutých zemích</strong>. Jde o urgentní neurologický stav s rizikem rychlého rozvoje respiračního selhání a letálních autonomních arytmií (mortalita cca 3–5 %).</p>"
          },
          {
            "title": "2. Etiopatogeneze a Molekulární mimikry",
            "content": "<ul>\n                <li>U 70 % pacientů předchází rozvoji GBS o 1–3 týdny <strong>infekce respiračního nebo gastrointestinálního traktu</strong>.</li>\n                <li><strong>Nejčastější spouštěče:</strong> <strong>Campylobacter jejuni</strong> (nejčastější, spojena s těžkou axonální formou AMAN), cytomegalovirus (CMV), virus Epstein-Barrové (EBV), <em>Mycoplasma pneumoniae</em>, virus Zika, SARS-CoV-2.</li>\n                <li><strong>Molekulární mimikry:</strong> lipooligosacharidy stěny <em>C. jejuni</em> mají identickou strukturu s <strong>gangliosidy myelinové pochvy a axonu (GM1, GD1a, GQ1b)</strong> $\to$ tvorba zkřížených autoprotilátek aktivujících komplement a makrofágy k destrukci míšních kořenů a periferních nervů.</li>\n            </ul>"
          },
          {
            "title": "3. Klinický obraz a Varianty GBS",
            "content": "<div class=\"anatomy-grid\">\n                <div class=\"grid-item\">\n                    <h4>Klasická forma (AIDP)</h4>\n                    <ul>\n                        <li><strong>Vzestupná chabá paréza (Kardinální příznak!):</strong> začíná symetrickou slabostí distálních svalů dolních končetin $\to$ šíří se proximálně na stehna $\to$ na horní končetiny $\to$ na trupové a bulbární svalstvo.</li>\n                        <li><strong>Generalizovaná areflexie:</strong> časné vymizení šlachových reflexů (RŠA, RP).</li>\n                        <li>Mírné akrální parestezie a bolesti svalů/zad.</li>\n                        <li><strong>Postižení n. facialis:</strong> oboustranná periferní obrna lícního nervu (diplegia facialis) u > 50 % pacientů.</li>\n                        <li><strong>Respirační selhání (až u 25–30 %!):</strong> paréza bránice (n. phrenicus) a interkostálních svalů vyžadující intubaci a UPV.</li>\n                        <li><strong>Autonomní dysfunkce:</strong> těžké kolísání TK, maligní tachy/bradykardie, arytmie, retence moči, paralytický ileus.</li>\n                    </ul>\n                </div>\n                <div class=\"grid-item\">\n                    <h4>Klinické subtypy GBS</h4>\n                    <ul>\n                        <li><strong>Miller-Fisherův syndrom (MFS, 5 %):</strong>\n                            <ul>\n                                <li>Klasická triáda: <strong>1. Akutní oftalmoplegie</strong> (obrna okohybných nervů), <strong>2. Senzorická ataxie</strong>, <strong>3. Areflexie</strong> (bez výraznější slabosti končetin!).</li>\n                                <li>Vysoce specifický marker: <strong>protilátky anti-GQ1b</strong> (> 95 % pozitivita – gangliosid bohatě exprimovaný v okohybných nervech).</li>\n                            </ul>\n                        </li>\n                        <li><strong>Akutní motorická axonální neuropatie (AMAN)</strong> a <strong>AMSAN:</strong> těžší průběh s primárním poškozením axonů a pomalou úpravou.</li>\n                    </ul>\n                </div>\n            </div>"
          },
          {
            "title": "4. Diagnostika GBS",
            "content": "<ol>\n                <li><strong>Vyšetření mozkomíšního moku (Lumbální punkce):</strong>\n                    <ul>\n                        <li><strong>Proteinocytologická disociace:</strong> <strong>výrazná proteinorachie</strong> ($> 1\text{–}3\text{ g/l}$) při <strong>normálním počtu buněk (cytologie < 50 elementů/$\\mu l$, typicky < 10)</strong>.</li>\n                        <li><em>Pozor na časové okno:</em> v prvním týdnu může být hladina bílkoviny ještě normální! Maximum elevace nastává ve 2.–3. týdnu onemocnění.</li>\n                    </ul>\n                </li>\n                <li><strong>Elektromyografie (EMG - kondukční studie):</strong>\n                    <ul>\n                        <li>Prodloužení latencí nebo absence <strong>F-vln</strong> (časný marker zánětu proximálních míšních kořenů – radikulitidy).</li>\n                        <li>Demyelinizační znaky: prodloužení DML, zpomalení NCV, kondukční bloky a disperze.</li>\n                    </ul>\n                </li>\n            </ol>"
          },
          {
            "title": "5. Léčba a Monitorace na JIP",
            "content": "<div class=\"highlight-box\">\n                <h4>Kritická pravidla léčby GBS</h4>\n                <ul>\n                    <li><strong>1. Včasná imunoterapie (zahájit co nejdříve!):</strong>\n                        <ul>\n                            <li><strong>Intravenózní imunoglobuliny (IVIG):</strong> <strong>0,4 g/kg/den i.v. po dobu 5 po sobě jdoucích dnů</strong> (celková dávka 2 g/kg). Metoda volby (jednoduché podání, minimum komplikací).</li>\n                            <li>NEBO <strong>Terapeutická plazmaferéza (PE / TPE):</strong> 5 výměn plazmy obden. Účinnost je ekvivalentní IVIG.</li>\n                        </ul>\n                    </li>\n                    <li><strong>2. STRIKTNÍ KONTRAINDIKACE KORTIKOIDŮ U GBS:</strong> Perorální i nitrožilní kortikoidy (prednison, metylprednizolon) jsou u akutního GBS <strong>zcela neúčinné a mohou zhoršit zotavení motoriky!</strong></li>\n                    <li><strong>3. Monitorace vitální kapacity plic (FVC):</strong> monitorovat vitální kapacitu po 4–6 hodinách. <em>Pravidlo 20/30/40:</em> vitální kapacita $< 20\text{ ml/kg}$, maximální inspirační tlak $< 30\text{ cm } H_2O$ nebo pokles o > 50 % je indikací k <strong>elektivní intubaci a UPV</strong> dříve, než dojde k asfyxii!</li>\n                </ul>\n            </div>"
          },
          {
            "title": "6. Chronická zánětlivá demyelinizační polyradikuloneuropatie (CIDP)",
            "content": "<ul>\n                <li>Chronický autoimunitní ekvivalent GBS, který má <strong>progredující nebo relabující průběh trvající déle než 8 týdnů</strong> (odlišení od GBS, kde progrese končí do 4 týdnů).</li>\n                <li><strong>Klinika:</strong> symetrická proximální i distální svalová slabost dolních i horních končetin, areflexie, porucha hlubokého čití se senzorickou ataxií.</li>\n                <li><strong>Léčba CIDP (odlišná od GBS!):</strong>\n                    <ul>\n                        <li><strong>Kortikoidy JSOU ZDE lékem 1. volby</strong> (Prednison 1 mg/kg p.o. nebo pulzy Metylprednizolonu i.v.).</li>\n                        <li>Udržovací léčba <strong>IVIG</strong> nebo subkutánními imunoglobuliny (SCIG) a plazmaferéza.</li>\n                    </ul>\n                </li>\n            </ul>"
          }
        ]
      },
      "recall": {
        "scenarios": [
          {
            "id": "sc-S41-1",
            "title": "Klinická kazuistika – Akutní a chronické zánětlivé polyradikuloneuritidy (Guillain-Barré syndrom a CIDP)",
            "question": "<strong>Kazuistika:</strong> 36letý muž přichází pro 3 dny progredující slabost a těžké nohy, které mu znemožňují chůzi do schodů, a brnění v prstech rukou. Před 10 dny prodělal horečnatý průjem po konzumaci kuřecího masa na grilu. Při vyšetření: chabá kvadruparezéza s převahou na dolních končetinách (síla DK 2/5, HK 4/5), šlachové reflexy na všech končetinách zcela nevýbavné, oboustranná lehká paréza n. facialis, vitální kapacita plic (FVC) klesá k 22 ml/kg.<br><br><strong>Klinický úkol:</strong> Stanovte diagnózu včetně patogenu, popište okamžitá diagnostická vyšetření a zahajte správnou kauzální a intenzivní péči.",
            "answer": "<ul style='margin: 6px 0 0 18px; padding: 0; line-height: 1.5;'><li>Diagnóza: Akutní zánětlivá demyelinizační polyradikuloneuropatie (Guillain-Barré syndrom / AIDP) spuštěná enteritidou způsobenou Campylobacter jejuni.</li><li>Diagnostika: Statimová lumbální punkce k průkazu proteinocytologické disociace (vysoký protein, normální buňky) a EMG kondukční studie (prodloužení latence F-vln, demyelinizační bloky).</li><li>Imunoterapie: Okamžité zahájení aplikace intravenózních imunoglobulinů (IVIG) v dávce 0,4 g/kg/den i.v. po dobu 5 dnů (nebo plazmaferéza).</li><li>Zákaz kortikoidů: Vyvarovat se podání solumedrolu/prednisonu (kontraindikace u GBS!).</li><li>Intenzivní monitorace: Hospitalizace na neuroJIP, kontinuální monitorace EKG a TK (riziko letálních autonomních arytmií), měření vitální kapacity plic (FVC) po 4 hodinách – při poklesu FVC < 20 ml/kg včasná orotracheální intubace a zahájení UPV.</li></ul>",
            "keyPoints": [
              "Diagnóza: Akutní zánětlivá demyelinizační polyradikuloneuropatie (Guillain-Barré syndrom / AIDP) spuštěná enteritidou způsobenou Campylobacter jejuni.",
              "Diagnostika: Statimová lumbální punkce k průkazu proteinocytologické disociace (vysoký protein, normální buňky) a EMG kondukční studie (prodloužení latence F-vln, demyelinizační bloky).",
              "Imunoterapie: Okamžité zahájení aplikace intravenózních imunoglobulinů (IVIG) v dávce 0,4 g/kg/den i.v. po dobu 5 dnů (nebo plazmaferéza).",
              "Zákaz kortikoidů: Vyvarovat se podání solumedrolu/prednisonu (kontraindikace u GBS!).",
              "Intenzivní monitorace: Hospitalizace na neuroJIP, kontinuální monitorace EKG a TK (riziko letálních autonomních arytmií), měření vitální kapacity plic (FVC) po 4 hodinách – při poklesu FVC < 20 ml/kg včasná orotracheální intubace a zahájení UPV."
            ],
            "pearl": "Guillain-Barré syndrom (GBS) je akutní postinfekční polyradikuloneuritida (C. jejuni) s rychlou vzestupnou chabou kvadruparézou a areflexií."
          }
        ]
      },
      "cards": [
        {
          "id": "fc-S41-1",
          "front": "Co znamená termín proteinocytologická disociace v mozkomíšním moku u Guillain-Barré syndromu?",
          "back": "Výrazné zvýšení koncentrace bílkoviny v moku (proteinorachie > 1–3 g/l) při normálním počtu buněk (cytologie < 10–50 buněk/µl) v důsledku zánětlivého prosakování z míšních kořenů bez pleocytózy.",
          "hint": "Speciální neurologie LF OU"
        },
        {
          "id": "fc-S41-2",
          "front": "Jaká je klinická triáda Miller-Fisherova syndromu a jaké specifické protilátky se u něj prokazují?",
          "back": "1. Oftalmoplegie (obrna okohybných svalů), 2. senzorická ataxie, 3. areflexie. Jsou přítomny specifické autoprotilátky anti-GQ1b.",
          "hint": "Speciální neurologie LF OU"
        },
        {
          "id": "fc-S41-3",
          "front": "Proč se u akutního Guillain-Barré syndromu (AIDP) nesmí podávat kortikoidy, na rozdíl od CIDP?",
          "back": "Rozsáhlé randomizované studie prokázaly, že kortikoidy u akutního GBS nemají žádný pozitivní efekt, oddalují regeneraci a mohou zhoršit konečný funkční stav pacienta. U chronické CIDP jsou naopak kortikoidy lékem první volby.",
          "hint": "Speciální neurologie LF OU"
        }
      ],
      "quiz": [
        {
          "id": "pq-S41-1",
          "question": "Která infekce je nejčastějším gastrointestinálním spouštěčem Guillain-Barré syndromu na podkladě molekulárních mimikry s gangliosidy?",
          "options": [
            "Salmonella enteritidis",
            "Campylobacter jejuni",
            "Clostridioides difficile",
            "Helicobacter pylori"
          ],
          "correctIndex": 1,
          "explanation": "Campylobacter jejuni má v lipooligosacharidech pouzdra antigenní epitopy identické s lidskými gangliosidy periferních nervů (GM1/GD1a), což vede ke zkřížené autoimunitní destrukci."
        },
        {
          "id": "pq-S41-2",
          "question": "Jaký je časový limit progrese motorického deficitu, který odlišuje akutní GBS od chronické zánětlivé demyelinizační polyneuropatie (CIDP)?",
          "options": [
            "24 hodin",
            "4 týdny (GBS progreduje do 4 týdnů, CIDP progreduje nebo relabuje déle než 8 týdnů)",
            "6 měsíců",
            "1 rok"
          ],
          "correctIndex": 1,
          "explanation": "U Guillain-Barré syndromu dosahuje progrese maxima (nadíru) do 2 až 4 týdnů. Pokud motorický deficit progreduje kontinuálně nebo relabuje déle než 8 týdnů, jde o chronickou jednotku CIDP."
        }
      ]
    },
    {
      "id": "s42-kraniocerebr-ln-traumata-komoce-kontuze-",
      "number": 42,
      "section": "specialni",
      "sectionLabel": "Speciální neurologie",
      "badgePrefix": "S42",
      "title": "Kraniocerebrální traumata - Komoce, kontuze a Difuzní axonální poranění (DAP)",
      "shortDesc": "Fokální a difuzní poranění mozku: Komoce mozku (commotio cerebri, reverzibilní funkční výpadek, amnézie, postkomoční syndrom), Kontuze mozku (contusio cerebri, ložiska coup a contrecoup, edém a hemoragie) a Difuzní axonální poranění (DAP / DAI - střižná poranění bílé hmoty, hluboké kóma, MRI SWI mikrokrvácení).",
      "category": "urgentni_trauma",
      "badge": "Urgentní stavy & Neurotraumatologie",
      "badgeColor": "teal",
      "theory": {
        "banner": {
          "tag": "Speciální neurologie • Otázka S42",
          "title": "Kraniocerebrální traumata - Komoce, kontuze a Difuzní axonální poranění (DAP)",
          "text": "Fokální a difuzní poranění mozku: Komoce mozku (commotio cerebri, reverzibilní funkční výpadek, amnézie, postkomoční syndrom), Kontuze mozku (contusio cerebri, ložiska coup a contrecoup, edém a hemoragie) a Difuzní axonální poranění (DAP / DAI - střižná poranění bílé hmoty, hluboké kóma, MRI SWI mikrokrvácení)."
        },
        "sections": [
          {
            "title": "1. Úvod a Rozdělení traumatických lézí mozku",
            "content": "<p>Traumatická poranění mozkového parenchymu se dělí podle biomechanismu a rozsahu na <strong>fokální (ložisková)</strong> a <strong>difuzní poranění</strong>. Zatímco ložisková poranění vznikají přímým nárazem na kalvu, difuzní poranění jsou důsledkem rotačních a akceleračně-deceleračních střižných sil působících na celou mozkovou tkáň.</p>"
          },
          {
            "title": "2. Komoce mozku (Commotio cerebri / Otřes mozku)",
            "content": "<ul>\n                <li><strong>Definice:</strong> difuzní, plně <strong>reverzibilní funkční porucha mozku</strong> způsobená tupým mechanickým nárazem na hlavu, bez přítomnosti makroskopického strukturálního poškození tkáně.</li>\n                <li><strong>Patofyziologie:</strong> masivní přechodná depolarizace neuronů, uvolnění glutamátu a přechodná mitochondriální energetická krize s poruchou iontové homeostázy.</li>\n                <li><strong>Klinický obraz:</strong>\n                    <ul>\n                        <li><strong>Krátkodobé bezvědomí:</strong> trvá několik sekund až <strong>maximálně 5–15 minut</strong> (GCS 13–15).</li>\n                        <li><strong>Porucha paměti (Amnézie):</strong> <em>retrográdní amnézie</em> (výpadek paměti na události těsně před úrazem) a <em>anterográdní amnézie</em> (na události po úrazu). Doba trvání amnézie koreluje s tíží otřesu!</li>\n                        <li>Vegetativní příznaky: nauzea, zvracení, difuzní bolest hlavy, vertigo, bledost, pocení, ortostatická labilita.</li>\n                        <li><em>Neurologický objektivní nález je zcela normální</em> (žádný ložiskový motorický ani senzitivní deficit!).</li>\n                    </ul>\n                </li>\n                <li><strong>Zobrazovací metody:</strong> <strong>Nativní CT mozku je NORMÁLNÍ</strong> (bez hematomu, kontuze či edému).</li>\n                <li><strong>Postkomoční syndrom (Post-concussion syndrome):</strong> přetrvávání bolestí hlavy, únavy, poruch spánku, zhoršené soustředěnosti a emoční lability po dobu týdnů až měsíců po úrazu.</li>\n            </ul>"
          },
          {
            "title": "3. Kontuze mozku (Contusio cerebri / Zhmoždění mozku)",
            "content": "<ul>\n                <li><strong>Definice:</strong> <strong>strukturální makroskopické poškození mozkové tkáně</strong> charakterizované nekrózou neuronů, petechiálním prokrvácením a perifokálním vazogenním a cytotoxickým edémem.</li>\n                <li><strong>Biomechanismus:</strong>\n                    <ul>\n                        <li><strong>Léze 'Coup' (náraz):</strong> kontuze v místě přímého mechanického úderu do lebky.</li>\n                        <li><strong>Léze 'Contrecoup' (protináraz):</strong> kontuze na protilehlé straně mozku v důsledku setrvačného nárazu mozku o kostěné hrany kalvy a baze (typicky <em>frontální a temporální póly a spodina spánkových laloků</em> narážející na křídla kosti klínové a pyramidy).</li>\n                    </ul>\n                </li>\n                <li><strong>Klinický obraz:</strong> delší bezvědomí (minuty až dny), ložiskové neurologické příznaky odpovídající lokalizaci kontuzního ložiska (hemiparéza, fatická porucha, korová hypestezie, anosmie), delirantní stavy a neklid (frontální kontuze), časné posttraumatické epileptické záchvaty.</li>\n                <li><strong>CT zobrazení:</strong> mnohočetná <strong>nehomogenní hypodenzní ložiska edému s okrsky hyperdenzních petechiálních hemoragií („obraz soli a pepře“)</strong>, která se mohou v průběhu 24–48 hodin zvětšovat a splývat do expanzivního intracerebrálního hematomu!</li>\n            </ul>\n\n            <div class=\"highlight-box\">\n                <h4>4. Difuzní axonální poranění (DAP / DAI - Diffuse Axonal Injury)</h4>\n                <ul>\n                    <li><strong>Biomechanismus:</strong> vzniká působením <strong>vysokoenergetických rotačních akceleračně-deceleračních sil</strong> (dopravní nehody při vysoké rychlosti, pády z velké výšky).</li>\n                    <li><strong>Patologie:</strong> střižné síly (shear stress) vyvolají <strong>mikroskopickou mechanickou transekci axonů</strong> na rozhraní tkání o různé hustotě – typicky:\n                        <ol>\n                            <li>Rozhraní šedé a bílé hmoty hemisfér (subkortikální bílá hmota).</li>\n                            <li><strong>Corpus callosum</strong> (zejména splenium).</li>\n                            <li><strong>Dorzolaterální kvadranty mozkového kmene</strong> a pedunculus cerebellaris superior.</li>\n                        </ol>\n                    </li>\n                    <li><strong>Klinický paradox:</strong> <strong>Okamžité hluboké bezvědomí (kóma, GCS 3–8)</strong> ihned po úrazu bez lucidního intervalu, dekortikační nebo decerebrační rigidita, těžká vegetativní nestabilita – přičemž <strong>iniciální nativní CT mozku může být zdánlivě normální nebo prokazuje jen drobné tečkovité mikrokrvácení v kalózním tělese</strong>!</li>\n                    <li><strong>Diagnostická metoda volby:</strong> <strong>MRI mozku – sekvence citlivé na hemosiderin a magnetickou susceptibilitu (SWI - Susceptibility-Weighted Imaging nebo T2* GRE)</strong>, které odhalí stovky drobných mikroskopických tečkovitých krvácení a axonálních přerušení v bílé hmotě a kmeni.</li>\n                    <li><strong>Prognóza:</strong> velmi závažná – pacienti často zůstávají v dlouhodobém vegetativním stavu (apallický syndrom / unresponsive wakefulness syndrome) nebo s těžkým trvalým kognitivním a motorickým deficitem.</li>\n                </ul>\n            </div>"
          },
          {
            "title": "5. Přehled a Srovnání traumatických jednotek",
            "content": "<table class=\"data-table\">\n                <thead>\n                    <tr>\n                        <th>Jednotka</th>\n                        <th>Podstata</th>\n                        <th>Délka bezvědomí</th>\n                        <th>Nález na CT mozku</th>\n                        <th>Závažnost / Prognóza</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr>\n                        <td><strong>Komoce mozku</strong></td>\n                        <td>Funkční reverzibilní výpadek</td>\n                        <td>Sekundy až < 15 min</td>\n                        <td>Zcela normální nález</td>\n                        <td>Benigní, plná úprava</td>\n                    </tr>\n                    <tr>\n                        <td><strong>Kontuze mozku</strong></td>\n                        <td>Ložisková nekróza a hemoragie</td>\n                        <td>Hodiny až dny</td>\n                        <td>Ložiska hypodenzity s hemoragiemi („sůl a pepř“)</td>\n                        <td>Ložiskový deficit, riziko expanze</td>\n                    </tr>\n                    <tr>\n                        <td><strong>Difuzní axonální poranění (DAP)</strong></td>\n                        <td>Mikroskopická transekce axonů</td>\n                        <td>Okamžité těžké kóma (dny až trvale)</td>\n                        <td>Často normální / drobné petechie (MRI SWI je diagnostické!)</td>\n                        <td>Extrémně těžká, vegetativní stav</td>\n                    </tr>\n                </tbody>\n            </table>"
          }
        ]
      },
      "recall": {
        "scenarios": [
          {
            "id": "sc-S42-1",
            "title": "Klinická kazuistika – Kraniocerebrální traumata - Komoce, kontuze a Difuzní axonální poranění (DAP)",
            "question": "<strong>Kazuistika:</strong> 22letý spolujezdec po autonehodě ve vysoké rychlosti přivezen RZP v hlubokém bezvědomí (GCS 4 - E1V1M2). Zornice jsou izokorické s pomalou fotoreakcí, na bolestivý podnět reaguje decerebrační extenční posturou. Nativní CT mozku provedené bezprostředně po příjezdu ukazuje pouze jedno drobné 3mm tečkovité hyperdenzní ložisko ve spleniu corpus callosum a lehkou kompresi bazálních cisteren, bez expanzivního hematomu či fraktury kalvy.<br><br><strong>Klinický úkol:</strong> Vysvětlete diskrepanci mezi hlubokým komatem a minimálním nálezem na CT, stanovte diagnózu a navrhněte přesnější dovyšetření.",
            "answer": "<ul style='margin: 6px 0 0 18px; padding: 0; line-height: 1.5;'><li>Diagnóza: Těžké difuzní axonální poranění (DAP / DAI grade 2–3) vzniklé v důsledku vysokoenergetických střižných rotačních sil.</li><li>Vysvětlení diskrepance: Nativní CT vyšetření má nízkou rozlišovací schopnost pro mikroskopická poškození axonů a drobná mikrokrvácení v bílé hmotě. Přítomnost i jediného drobného krvácení ve spleniu corpus callosum na CT je typickým markerem těžkého difuzního střižného poranění hlubokých struktur mozku.</li><li>Zobrazovací vyšetření volby: Po kardiopulmonální stabilizaci provedení MRI mozku včetně vysoce senzitivních sekvencí SWI (Susceptibility-Weighted Imaging) a DTI (Diffusion Tensor Imaging) k přesnému zobrazení rozsahu axonálních transekcí v bílé hmotě, corpus callosum a mozkovém kmeni.</li><li>Neurointenzivní terapie: Monitorace a kontrola nitrolebního tlaku (zavedení čidla ICP, udržení ICP < 20–22 mmHg a CPP 60–70 mmHg), mírná analgosedace, normotermie, prevence hypoxie a hypotenze.</li><li>Prognóza: Vysoké riziko dlouhodobé poruchy vědomí (apallický syndrom) a trvalého těžkého neurologického deficitu.</li></ul>",
            "keyPoints": [
              "Diagnóza: Těžké difuzní axonální poranění (DAP / DAI grade 2–3) vzniklé v důsledku vysokoenergetických střižných rotačních sil.",
              "Vysvětlení diskrepance: Nativní CT vyšetření má nízkou rozlišovací schopnost pro mikroskopická poškození axonů a drobná mikrokrvácení v bílé hmotě. Přítomnost i jediného drobného krvácení ve spleniu corpus callosum na CT je typickým markerem těžkého difuzního střižného poranění hlubokých struktur mozku.",
              "Zobrazovací vyšetření volby: Po kardiopulmonální stabilizaci provedení MRI mozku včetně vysoce senzitivních sekvencí SWI (Susceptibility-Weighted Imaging) a DTI (Diffusion Tensor Imaging) k přesnému zobrazení rozsahu axonálních transekcí v bílé hmotě, corpus callosum a mozkovém kmeni.",
              "Neurointenzivní terapie: Monitorace a kontrola nitrolebního tlaku (zavedení čidla ICP, udržení ICP < 20–22 mmHg a CPP 60–70 mmHg), mírná analgosedace, normotermie, prevence hypoxie a hypotenze.",
              "Prognóza: Vysoké riziko dlouhodobé poruchy vědomí (apallický syndrom) a trvalého těžkého neurologického deficitu."
            ],
            "pearl": "Komoce mozku je reverzibilní funkční porucha s krátkým bezvědomím (< 15 min), amnézií a normálním nálezem na CT."
          }
        ]
      },
      "cards": [
        {
          "id": "fc-S42-1",
          "front": "Jak se liší komoce mozku (commotio cerebri) od kontuze mozku (contusio cerebri) z hlediska patologie a CT nálezu?",
          "back": "Komoce je čistě reverzibilní funkční porucha neuronů s normálním nálezem na CT mozku a bezvědomím < 15 minut. Kontuze je makroskopické strukturální poškození s nekrózou tkáně, edémem a petechiálním prokrvácením viditelným na CT (obraz 'soli a pepře').",
          "hint": "Speciální neurologie LF OU"
        },
        {
          "id": "fc-S42-2",
          "front": "Které anatomické struktury mozku jsou nejčastěji postiženy mikroskopickým střižným poškozením při difuzním axonálním poranění (DAP)?",
          "back": "1. Rozhraní šedé a bílé hmoty mozkových hemisfér, 2. corpus callosum (zejména splenium), 3. dorzolaterální kvadranty mozkového kmene.",
          "hint": "Speciální neurologie LF OU"
        },
        {
          "id": "fc-S42-3",
          "front": "Která sekvence na MRI mozku je nejcitlivější pro diagnostické zobrazení difuzního axonálního poranění (DAP)?",
          "back": "Susceptibilitně vážené zobrazení (SWI - Susceptibility-Weighted Imaging) nebo T2* gradientní echo (GRE), které zobrazí i nepatrná mikroskopická ložiska krvácení a depozita hemosiderinu po přerušení axonů a kapilár.",
          "hint": "Speciální neurologie LF OU"
        }
      ],
      "quiz": [
        {
          "id": "pq-S42-1",
          "question": "Mechanismus vzniku kontuzních ložisek typu 'contrecoup' (protináraz) je způsoben:",
          "options": [
            "Proniknutím cizího tělesa do mozku",
            "Setrvačným nárazem mozkového parenchymu na kostěné hrany vnitřního reliéfu lebky na opačné straně, než působila primární síla úderu",
            "Rupturou aneuryzmatu a. basilaris",
            "Trombózou sinus sagittalis superior"
          ],
          "correctIndex": 1,
          "explanation": "Při nárazu hlavy se mozek v likvorovém obalu setrvačností opožďuje a následně naráží na protilehlou vnitřní stěnu kalvy a kostěné výběžky baze (čelní a spánkové póly), což vytváří ložiska contrecoup."
        },
        {
          "id": "pq-S42-2",
          "question": "Které z následujících tvrzení o komoci mozku (commotio cerebri) je PRAVDIVÉ?",
          "options": [
            "Na nativním CT mozku jsou typicky přítomna vícečetná petechiální krvácení",
            "Bezvědomí netrvá déle než 5–15 minut a neurologický objektivní nález je po odeznění normální",
            "Vždy zanechává trvalou spastickou paraparézu",
            "Je absolutní indikací k urgentní kraniotomii"
          ],
          "correctIndex": 1,
          "explanation": "Komoce mozku je definována jako reverzibilní funkční výpadek bez strukturální léze; bezvědomí trvá sekundy až maximálně 15 minut, CT je normální a objektivní neurologický nález je bez ložiskového deficitu."
        }
      ]
    }
  ]
};
