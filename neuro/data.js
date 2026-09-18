// data.js - Kompletní databáze Obecné neurologie pro 4. ročník LF OU
const NEUROLOGY_DATA = {
  "title": "Neurologie",
  "grade": "4. ročník LF OU",
  "description": "Komplexní interaktivní výukový portál neurologie pro studenty 4. ročníku všeobecného lékařství LF OU. 25 okruhů obecné neurologie: centrální a periferní motorika, senzitivita, míšní a kmenové syndromy, hlavové nervy, kortikální syndromy, likvor a hydrocefalus, vyšetření stoje a chůze, paraklinika (CT, MR, EEG, EMG, likvor) a reflexologie.",
  "sections": [
    {
      "id": "all",
      "label": "Všechny okruhy",
      "count": 25,
      "icon": "📚"
    },
    {
      "id": "obecna",
      "label": "Obecná neurologie",
      "count": 25,
      "icon": "⚡"
    }
  ],
  "categories": [
    {
      "id": "all",
      "label": "Všechna témata (25)",
      "icon": "📚"
    },
    {
      "id": "motorika_nervy",
      "label": "Motorika, Nervy & Reflexy",
      "icon": "⚡"
    },
    {
      "id": "senzitivita_micha_kmen",
      "label": "Senzitivita, Mícha & Kmen",
      "icon": "🧬"
    },
    {
      "id": "hlavove_nervy",
      "label": "Hlavové nervy & Okohybnost",
      "icon": "👁️"
    },
    {
      "id": "hemisfery_vedomi_likvor",
      "label": "Laloky, Řeč, Vědomí & Likvor",
      "icon": "🧠"
    },
    {
      "id": "vysetreni_systemy",
      "label": "Topografie & Systémové vyšetření",
      "icon": "🩺"
    },
    {
      "id": "paraklinika",
      "label": "Zobrazování & Paraklinika",
      "icon": "🩻"
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
    }
  ]
};
