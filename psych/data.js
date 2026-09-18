// data.js - Kompletní databáze Obecné psychiatrie pro 4. ročník LF OU
const PSYCHIATRY_DATA = {
  "title": "Obecná psychiatrie",
  "grade": "4. ročník LF OU",
  "description": "Komplexní interaktivní výukový portál obecné psychiatrie pro studenty 4. ročníku všeobecného lékařství. Psychopatologie, psychofarmakoterapie, biologická léčba a vyšetřovací metody.",
  "categories": [
    {
      "id": "all",
      "label": "Všechny okruhy (16)",
      "icon": "📚"
    },
    {
      "id": "psychopatologie",
      "label": "Psychopatologie",
      "icon": "🧠"
    },
    {
      "id": "farmakologie",
      "label": "Psychofarmaka",
      "icon": "💊"
    },
    {
      "id": "biologicka_terapie",
      "label": "Biologická léčba",
      "icon": "⚡"
    },
    {
      "id": "vysetreni",
      "label": "Diagnostika & Vyšetření",
      "icon": "🩺"
    },
    {
      "id": "psychoterapie_uvod",
      "label": "Úvod & Psychoterapie",
      "icon": "🤝"
    }
  ],
  "modules": [
    {
      "id": "q01-definice-historie-organizace",
      "number": 1,
      "title": "Definice, postavení a historie psychiatrie, organizace psychiatrické péče",
      "shortDesc": "Biopsychosociální model, stigmatizace, reformní milníky (Pinel, Kraepelin, Freud, Delay & Deniker 1952) a systém péče v ČR (CDZ, lůžka, právní rámec nedobrovolné hospitalizace).",
      "category": "psychoterapie_uvod",
      "badge": "Historie & Organizace",
      "badgeColor": "violet",
      "theory": {
        "banner": {
          "tag": "Základní koncepce oboru",
          "title": "Psychiatrie jako syntetický medicínský obor",
          "text": "Psychiatrie (z řec. psyché = duše, iatreia = lékařství) je samostatný lékařský obor zabývající se diagnostikou, léčbou, prevencí, rehabilitací a výzkumem duševních poruch. Stojí na pevném biopsychosociálním modelu a integruje neurobiologii s psychoterapií a sociální péčí."
        },
        "sections": [
          {
            "title": "1. Definice duševního zdraví, nemoci a biopsychosociální model",
            "color": "violet",
            "content": "\n                    <p class=\"mb-3\"><strong>Duševní porucha:</strong> Klinicky rozpoznatelný soubor příznaků nebo chování spojený s pocitem tísně (distresem), narušením osobního, rodinného nebo sociálního fungování a kognitivních procesů.</p>\n                    <div class=\"grid md:grid-cols-3 gap-3 my-3\">\n                        <div class=\"stat-box\">\n                            <div class=\"font-bold text-violet-400 mb-1\">🧬 Biologická složka</div>\n                            <p class=\"text-xs text-slate-300\">Genetická predispozice, neurotransmiterová dysbalance (DA, 5-HT, NA, GABA, Glu), neurodegenerace, funkční konektivita a neuroplasticita (BDNF).</p>\n                        </div>\n                        <div class=\"stat-box\">\n                            <div class=\"font-bold text-violet-400 mb-1\">🧠 Psychologická složka</div>\n                            <p class=\"text-xs text-slate-300\">Premorbidní osobnost, kognitivní schémata, obranné mechanismy, copovací strategie a psychotraumata (např. v dětství).</p>\n                        </div>\n                        <div class=\"stat-box\">\n                            <div class=\"font-bold text-violet-400 mb-1\">🌍 Sociální složka</div>\n                            <p class=\"text-xs text-slate-300\">Rodinné zázemí, socioekonomický status, interpersonální vztahy, životní události, sociální stigma a diskriminace.</p>\n                        </div>\n                    </div>\n                    <div class=\"alert-box alert-amber mt-3\">\n                        <strong>⚠️ Stigmatizace v psychiatrii:</strong> Negativní stereotypy, předsudky a diskriminace pacientů s duševním onemocněním představují zásadní bariéru včasného vyhledání odborné péče a adherence k léčbě.\n                    </div>\n                "
          },
          {
            "title": "2. Klíčové historické milníky",
            "color": "indigo",
            "content": "\n                    <div class=\"space-y-3\">\n                        <div class=\"p-3 rounded-lg bg-slate-900 border border-slate-700\">\n                            <span class=\"font-bold text-violet-300\">1793 – Philippe Pinel:</span> Humanizace péče, symbolické „snesení okovů“ z duševně nemocných v Paříži (Bicêtre a Salpêtrière). Počátek medicínského pojetí chorob mysli.\n                        </div>\n                        <div class=\"p-3 rounded-lg bg-slate-900 border border-slate-700\">\n                            <span class=\"font-bold text-violet-300\">Konec 19. stol. – Emil Kraepelin:</span> Zakladatel nozologické klasifikace. Rozdělil psychózy na <em>dementia praecox</em> (později schizofrenie pojmenovaná Bleulerem) a <em>maniodepresivní psychózu</em>.\n                        </div>\n                        <div class=\"p-3 rounded-lg bg-slate-900 border border-slate-700\">\n                            <span class=\"font-bold text-violet-300\">1895–1900 – Sigmund Freud:</span> Vznik psychoanalýzy, koncept nevědomí, obranných mechanismů a intrapsychického konfliktu (Id, Ego, Superego).\n                        </div>\n                        <div class=\"p-3 rounded-lg bg-slate-900 border border-slate-700\">\n                            <span class=\"font-bold text-emerald-400\">1952 – Jean Delay & Pierre Deniker:</span> Zavedení <strong>chlorpromazinu</strong> do klinické praxe. Začátek éry moderní psychofarmakoterapie, který umožnil masivní deinstitucionalizaci.\n                        </div>\n                    </div>\n                "
          },
          {
            "title": "3. Organizace psychiatrické péče a právní rámec v ČR",
            "color": "cyan",
            "content": "\n                    <p class=\"mb-2\">Organizace psychiatrické péče v ČR prochází moderní reformou směřující k posílení komunitních a terénních služeb:</p>\n                    <ul class=\"list-disc ml-5 space-y-1 text-xs text-slate-300\">\n                        <li><strong>Ambulantní péče:</strong> Síť psychiatrických a klinicko-psychologických ambulancí pro primární diagnostiku a dispenzarizaci.</li>\n                        <li><strong>Centra duševního zdraví (CDZ):</strong> Multidisciplinární týmy (psychiatr, psycholog, sociální pracovník, sestry, peer konzultant) poskytující terénní péči přímo v přirozeném prostředí pacienta.</li>\n                        <li><strong>Lůžková akutní péče:</strong> Psychiatrická oddělení ve všeobecných nemocnicích (rychlá stabilizace, destigmatizace, návaznost na somatické obory).</li>\n                        <li><strong>Lůžková specializovaná/následná péče:</strong> Psychiatrické nemocnice (dříve léčebny) pro dlouhodobější léčbu, závislosti a gerontopsychiatrii.</li>\n                        <li><strong>Semiresidenční péče:</strong> Denní stacionáře, krizová centra, chráněné bydlení a dílny.</li>\n                    </ul>\n                    <div class=\"alert-box alert-rose mt-3\">\n                        <strong>⚖️ Právní aspekty nedobrovolné hospitalizace (§ 38 a § 40 Zákona o zdravotních službách č. 372/2011 Sb.):</strong><br>\n                        Pacienta lze hospitalizovat bez jeho písemného souhlasu <strong>POUZE</strong> pokud:\n                        <ul class=\"list-disc ml-5 mt-1\">\n                            <li>Bezprostředně a vážně ohrožuje sebe nebo své okolí a jeví známky duševní poruchy / je pod vlivem návykové látky.</li>\n                            <li>Nebo jeho zdravotní stav vyžaduje poskytnutí neodkladné péče a zároveň neumožňuje vyslovit souhlas.</li>\n                        </ul>\n                        <strong>Zákonná lhůta:</strong> Zdravotnické zařízení musí oznámit nedobrovolný příjem příslušnému okresnímu soudu <strong>do 24 hodin</strong>. Soud rozhodne o přípustnosti převzetí do 7 dnů.\n                    </div>\n                "
          }
        ]
      },
      "recall": {
        "scenarios": [
          {
            "id": "q01-r1",
            "title": "Kazuistika 1: Nedobrovolný příjem na oddělení",
            "question": "ZZS přiváží na psychiatrický příjem 34letého muže s dekompenzovanou paranoidní schizofrenií, který pod vlivem imperativních sluchových halucinací vyhrožoval sousedům sekerou a zapálil si koberec v bytě. Pacient odmítá podepsat souhlas s hospitalizací a dožaduje se okamžitého odchodu. Jaký je správný postup lékaře?",
            "answer": "Pacienta je nutné hospitalizovat nedobrovolně na uzavřeném oddělení pro bezprostřední ohrožení sebe i okolí v důsledku duševní poruchy. Lékař vyhotoví záznam o nedobrovolném přijetí a nemocnice má zákonnou povinnost odeslat hlášení (detenční oznámení) příslušnému soudu do 24 hodin.",
            "pearl": "Detenční řízení: Soud do 7 dnů osobně vyslechne pacienta a nezávislého znalce a vydá usnesení o zákonnosti převzetí."
          }
        ]
      },
      "cards": [
        {
          "id": "c01-1",
          "front": "Jaká je zákonná lhůta pro nahlášení nedobrovolné hospitalizace soudu v ČR?",
          "back": "Do 24 hodin od přijetí (soud pak do 7 dnů rozhodne o zákonnosti převzetí).",
          "hint": "Zákon o zdravotních službách č. 372/2011 Sb.",
          "category": "psychoterapie_uvod"
        },
        {
          "id": "c01-2",
          "front": "Které 2 osobnosti v roce 1952 zavedly chlorpromazin a zahájily éru moderní psychofarmakoterapie?",
          "back": "Jean Delay a Pierre Deniker (ve Francii).",
          "hint": "Pařížská klinika Sainte-Anne",
          "category": "psychoterapie_uvod"
        },
        {
          "id": "c01-3",
          "front": "Co tvoří personální základ multidisciplinárního týmu v Centru duševního zdraví (CDZ)?",
          "back": "Psychiatr, klinický psycholog, psychiatrické/všeobecné sestry, sociální pracovníci a peer konzultant.",
          "hint": "Pilíř reformy psychiatrické péče v ČR",
          "category": "psychoterapie_uvod"
        }
      ],
      "quiz": [
        {
          "id": "q01-test1",
          "question": "Do kolika hodin musí zdravotnické zařízení oznámit příslušnému soudu nedobrovolnou hospitalizaci pacienta?",
          "options": [
            "Do 12 hodin",
            "Do 24 hodin",
            "Do 48 hodin",
            "Do 7 kalendářních dnů"
          ],
          "correctIndex": 1,
          "explanation": "Dle § 40 Zákona o zdravotních službách musí poskytovatel lůžkové péče oznámit soudu nedobrovolnou hospitalizaci nejpozději do 24 hodin od okamžiku převzetí."
        },
        {
          "id": "q01-test2",
          "question": "Který historický milník znamenal počátek moderní psychofarmakoterapie a umožnil postupnou deinstitucionalizaci?",
          "options": [
            "Zavedení lithia Johnem Cadem v roce 1949",
            "Syntéza a klinické využití chlorpromazinu v roce 1952 (Delay & Deniker)",
            "Objev imipraminu v roce 1957",
            "Odkování duševně nemocných Philippem Pinelem v roce 1793"
          ],
          "correctIndex": 1,
          "explanation": "Zavedení chlorpromazinu (Delay & Deniker 1952) zásadně změnilo prognózu psychotických pacientů, snížilo agitovanost a agresivitu a otevřelo cestu k ambulantní a komunitní péči."
        }
      ]
    },
    {
      "id": "q02-vedomi-vnimani-poruchy",
      "number": 2,
      "title": "Vědomí a vnímání a jejich poruchy",
      "shortDesc": "Lucidita, vigilita, kvantitativní poruchy (somnolence až kóma) vs. kvalitativní (delirium, amence, obnubilace). Smyslové klamy, iluze vs. halucinace (sluchové, zrakové, intrapsychické).",
      "category": "psychopatologie",
      "badge": "Základní psychopatologie",
      "badgeColor": "violet",
      "theory": {
        "banner": {
          "tag": "Psychopatologie I",
          "title": "Vědomí a vnímání – brána do reality",
          "text": "Vědomí integruje všechny psychické funkce a umožňuje uvědomování si sebe sama (idiognozie) a okolního světa. Vnímání zprostředkovává senzorická data a jejich interpretaci."
        },
        "sections": [
          {
            "title": "1. Poruchy vědomí (Kvantitativní a Kvalitativní)",
            "color": "violet",
            "content": "\n                        <p class=\"mb-2\"><strong>Kvantitativní poruchy vědomí (vigilita / bdělost):</strong></p>\n                        <div class=\"grid md:grid-cols-4 gap-2 text-xs mb-4\">\n                            <div class=\"stat-box\"><strong>Somnolence:</strong> Zvýšená spavost, lze snadno probudit slovem či lehkým dotykem, adekvátně odpovídá.</div>\n                            <div class=\"stat-box\"><strong>Sopor:</strong> Hluboký spánek, reakce pouze na bolestivý podnět (cílená obranná reakce), verbální kontakt minimální.</div>\n                            <div class=\"stat-box\"><strong>Kóma:</strong> Bezvědomí, nereaguje na bolest, vyhaslé reflexy, vegetativní nestabilita (GCS 3-8).</div>\n                            <div class=\"stat-box\"><strong>Synkopa:</strong> Krátkodobá tranzientní ztráta vědomí z globální mozkové hypoperfuze.</div>\n                        </div>\n\n                        <p class=\"mb-2\"><strong>Kvalitativní poruchy vědomí (lucidita / jasnost):</strong></p>\n                        <ul class=\"list-disc ml-5 space-y-2 text-xs text-slate-300\">\n                            <li><strong>Delirium (obluzené vědomí):</strong> Náhlý začátek, fluktuující průběh (horší v noci), dezorientace časem a místem, bohaté zrakové halucinace (mikrozoopsie), iluze, psychomotorický neklid, extrémní sugestibilita, amnézie na proběhlý stav. Formy: hyperaktivní (furibundní), hypoaktivní (blandní), smíšené.</li>\n                            <li><strong>Amence (stav zmatenosti):</strong> Narušena syntéza vjemů, bezradnost, útržkovité vnímání, neklid na lůžku (musitující delirium - chytání neviditelných nitek).</li>\n                            <li><strong>Obnubilace (mrákotný stav):</strong> Náhlý začátek i konec, zachovalé automatické jednání, ale úplná diskonekce od reality s totální amnézií. Typy: stuporózní, deliriantní, automatická (fugue - bezcílné cestování), Ganserův syndrom (odpovědi vedle / pseudodemence), patická opilost.</li>\n                        </ul>\n                    "
          },
          {
            "title": "2. Poruchy idiognozie a orientace",
            "color": "indigo",
            "content": "\n                        <div class=\"grid md:grid-cols-2 gap-3 text-xs\">\n                            <div class=\"p-3 rounded-lg bg-slate-900 border border-slate-700\">\n                                <h4 class=\"font-bold text-violet-300 mb-1\">Poruchy idiognozie</h4>\n                                <ul class=\"list-disc ml-4 space-y-1 text-slate-300\">\n                                    <li><strong>Depersonalizace:</strong> Pocit odcizení vlastního těla, mysli či pocitů (jako robot, pozorování sebe zvenčí).</li>\n                                    <li><strong>Derealizace:</strong> Pocit neskutečnosti okolního světa (jako ve filmu, za sklem).</li>\n                                </ul>\n                            </div>\n                            <div class=\"p-3 rounded-lg bg-slate-900 border border-slate-700\">\n                                <h4 class=\"font-bold text-violet-300 mb-1\">Hodnocení orientace (4 složky)</h4>\n                                <ul class=\"list-disc ml-4 space-y-1 text-slate-300\">\n                                    <li><strong>Autopsychická:</strong> Orientace vlastní osobou (jméno, datum narození).</li>\n                                    <li><strong>Alopsychická:</strong> Orientace místem a prostorem.</li>\n                                    <li><strong>Časem:</strong> Den, měsíc, rok, roční období.</li>\n                                    <li><strong>Situací:</strong> Uvědomění si kontextu a důvodu přítomnosti.</li>\n                                </ul>\n                            </div>\n                        </div>\n                    "
          },
          {
            "title": "3. Poruchy vnímání (Fyziologické, Iluze, Halucinace)",
            "color": "cyan",
            "content": "\n                        <div class=\"space-y-3 text-xs\">\n                            <div class=\"p-3 rounded-lg bg-slate-900 border border-slate-700\">\n                                <div class=\"font-bold text-cyan-400 mb-1\">👁️ Fyziologické odchylky vnímání</div>\n                                <p class=\"text-slate-300\"><strong>Smyslové klamy:</strong> Fyzikální nedokonalost smyslů (hůl ponořená do vody). <strong>Purkyňovy paobrazy:</strong> Následné zrakové kontrasty. <strong>Pareidolie:</strong> Dotváření nejasných tvarů fantazií (postavy v mracích). <strong>Synestezie:</strong> Propojení modalit (barevné slyšení tónů). <strong>Eidetismus:</strong> Mimořádně živá fotografická představivost.</p>\n                            </div>\n                            <div class=\"p-3 rounded-lg bg-amber-950/30 border border-amber-500/30\">\n                                <div class=\"font-bold text-amber-400 mb-1\">⚠️ Iluze (vjem zkreslený)</div>\n                                <p class=\"text-slate-300\">Zkreslený vjem vyvolaný <strong>reálným podnětem</strong>, pacient je nekorigovatelný (věří mu). Pravé iluze vs. pseudoiluze (uvědomuje si omyl). Typické u delirií a intoxikací (stín vnímá jako útočníka).</p>\n                            </div>\n                            <div class=\"p-3 rounded-lg bg-rose-950/30 border border-rose-500/30\">\n                                <div class=\"font-bold text-rose-400 mb-1\">🚨 Halucinace (vjem bez reálného podnětu)</div>\n                                <p class=\"text-slate-300 mb-2\">Vjem vzniklý <strong>bez jakéhokoliv reálného zevního podnětu</strong>, má charakter smyslové reality a pacient je o jeho pravosti nevývratně přesvědčen.</p>\n                                <ul class=\"list-disc ml-4 space-y-1 text-slate-300\">\n                                    <li><strong>Sluchové (akustické):</strong> Typické pro schizofrenii. Fonémy (hlasy), které mohou být <em>imperativní</em> (přikazující k jednání - vysoké riziko suicidia/agrese!), <em>komentující</em> nebo <em>antagonistické</em> (dva hlasy se o pacientovi hádají).</li>\n                                    <li><strong>Zrakové:</strong> Typické pro deliria, organické psychózy a intoxikace (mikrozoopsie u deliria tremens).</li>\n                                    <li><strong>Čichové a chuťové:</strong> Unciformní krize u epilepsie temporálního laloku, nádorové expanze, schizofrenie (zápach hniloby, síry, jedu).</li>\n                                    <li><strong>Taktilní / tělové (cenestetické):</strong> Pocity elektrizování, hmyzu lezoucího pod kůží (Ekbomův syndrom), pohyby vnitřních orgánů.</li>\n                                    <li><strong>Intrapsychické halucinace:</strong> Pocit odnímání, vkládání či vysílání myšlenek cizí silou (Schneiderovy symptomy 1. řádu u schizofrenie).</li>\n                                    <li><strong>Extrakampinní halucinace:</strong> Vnímané mimo dosah smyslového pole (vidí za své záda, slyší hlasy z jiné galaxie).</li>\n                                </ul>\n                            </div>\n                        </div>\n                    "
          }
        ]
      },
      "recall": {
        "scenarios": [
          {
            "id": "q02-r1",
            "title": "Kazuistika 2: Noční zmatenost u geriatrického pacienta",
            "question": "78letý pacient 2. den po totální endoprotéze kyčle v nočních hodinách vstává z lůžka, sbírá z prostěradla imaginární brouky (mikrozoopsie), křičí, že je v hořícím lese, a je dezorientovaný časem a místem. Během dne byl spavější, ale klidný. O jakou poruchu vědomí a vnímání se jedná?",
            "answer": "Jedná se o hypo/hyperaktivní pooperační delirium (kvalitativní poruchu vědomí - obluzené vědomí s fluktuací stavu) se zrakovými pravými halucinacemi (mikrozoopsie) a iluzemi. Vyžaduje vyloučení somatické příčiny (infekce močových cest, hypoxie, elektrolytový rozvrat, léková toxicita).",
            "pearl": "Léčba pooperačního deliria: Tiaprid nebo Haloperidol / Quetiapin v nízkých dávkách, zajištění hydratace a orientace v prostoru (světlo, hodiny, přítomnost personálu). Vyhnout se BZD (riziko paradoxní agitace a prohloubení deliria, vyjma alkoholového deliria tremens!)."
          }
        ]
      },
      "cards": [
        {
          "id": "c02-1",
          "front": "Jaký je zásadní rozdíl mezi iluzí a halucinací?",
          "back": "Iluze vzniká na podkladě REÁLNÉHO podnětu (který je chybně interpretován), zatímco halucinace vzniká BEZ jakéhokoliv reálného podnětu.",
          "hint": "Přítomnost zevního objektu",
          "category": "psychopatologie"
        },
        {
          "id": "c02-2",
          "front": "Co jsou to intrapsychické halucinace a pro jaké onemocnění jsou typické?",
          "back": "Porucha prožívání vlastních myšlenek (vkládání, odnímání, vysílání myšlenek cizí mocí). Jsou to Schneiderovy příznaky 1. řádu u schizofrenie.",
          "hint": "Schneiderovy příznaky I. řádu",
          "category": "psychopatologie"
        },
        {
          "id": "c02-3",
          "front": "Jaké jsou hlavní znaky deliria?",
          "back": "Kvalitativní porucha vědomí (obluzené vědomí), náhlý začátek, fluktuace (horší v noci), dezorientace místem a časem, zrakové halucinace/iluze, sugestibilita a amnézie.",
          "hint": "Akutní organický mozkový syndrom",
          "category": "psychopatologie"
        }
      ],
      "quiz": [
        {
          "id": "q02-test1",
          "question": "Které tvrzení o halucinacích je SPRÁVNÉ?",
          "options": [
            "Vždy vznikají na podkladě reálného zkresleného smyslového podnětu",
            "Při pravé halucinaci je pacient nevývratně přesvědčen o její reálné existenci a má charakter smyslového vjemu",
            "Sluchové imperativní halucinace jsou typickým příznakem Alzheimerovy demence",
            "Pseudohalucinace mají vždy charakter projekce do vnějšího 3D prostoru"
          ],
          "correctIndex": 1,
          "explanation": "Pravé halucinace vznikají bez reálného podnětu, pacient je o nich nevývratně přesvědčen a lokalizuje je do vnějšího prostoru."
        },
        {
          "id": "q02-test2",
          "question": "Která porucha vědomí se vyznačuje náhlým začátkem, automatickým chováním a následnou úplnou amnézií na proběhlý stav?",
          "options": [
            "Somnolence",
            "Obnubilace (mrákotný stav)",
            "Depersonalizace",
            "Sopor"
          ],
          "correctIndex": 1,
          "explanation": "Obnubilace je kvalitativní porucha vědomí s náhlým začátkem i koncem, zachovanou automatickou motorikou a totální amnézií."
        }
      ]
    },
    {
      "id": "q03-emotivita-poruchy",
      "number": 3,
      "title": "Emotivita a její poruchy",
      "shortDesc": "Nálada, afekt, vyšší city. Kvantitativní poruchy nálady (depresivní, manická, moria, dysforie, apatie) a afektů (patický afekt). Kvalitativní poruchy: emoční labilita, oploštělost, parathymie, paramimie.",
      "category": "psychopatologie",
      "badge": "Základní psychopatologie",
      "badgeColor": "violet",
      "theory": {
        "banner": {
          "tag": "Psychopatologie II",
          "title": "Emotivita – prožívání vztahu k sobě a světu",
          "text": "Emoce představují evolučně starší psychické procesy hodnotící význam podnětů pro jedince. Zahrnují nálady (dlouhodobý základní stav), afekty (krátké intenzivní reakce) a vyšší city (morální, estetické, sociální)."
        },
        "sections": [
          {
            "title": "1. Poruchy nálady (Kvantitativní)",
            "color": "violet",
            "content": "\n                        <div class=\"grid md:grid-cols-2 gap-3 text-xs\">\n                            <div class=\"p-3 rounded-lg bg-slate-900 border border-slate-700\">\n                                <h4 class=\"font-bold text-violet-300 mb-1\">Expanzivní nálady</h4>\n                                <ul class=\"list-disc ml-4 space-y-1 text-slate-300\">\n                                    <li><strong>Manická nálada:</strong> Patologicky nadnesená, bezdůvodně veselá, spojená s psychomotorickým neklidem, tachypsychismem a poklesem potřeby spánku.</li>\n                                    <li><strong>Euforická nálada:</strong> Spokojená, blažená, pasivní nálada bez zvýšené motorické aktivity (např. u organických poruch mozku, intoxikace opiáty).</li>\n                                    <li><strong>Hypomanická nálada:</strong> Mírnější stupeň mánie, pacient je produktivní, výřečný, energický.</li>\n                                    <li><strong>Moria:</strong> Plané vtipkování, bezobsažná bodrost a nevhodné žertování typické pro prefrontální syndrom (např. tumor, trauma frontálního laloku).</li>\n                                </ul>\n                            </div>\n                            <div class=\"p-3 rounded-lg bg-slate-900 border border-slate-700\">\n                                <h4 class=\"font-bold text-violet-300 mb-1\">Depresivní a úzkostné nálady</h4>\n                                <ul class=\"list-disc ml-4 space-y-1 text-slate-300\">\n                                    <li><strong>Depresivní nálada:</strong> Patologicky pokleslá, provázená anhedonií (neschopnost prožívat radost), bezvýchodností, ranními pesimy a bradypsychismem.</li>\n                                    <li><strong>Anxiózní nálada:</strong> Difúzní pocit ohrožení a tísně bez konkrétního vnějšího objektu, doprovázený vegetativními příznaky (tachykardie, pocení, tremor).</li>\n                                    <li><strong>Dysforická nálada:</strong> Rozmrzelá, mrzutá, podrážděná, nepřátelská nálada (často u epilepsie, abstinenčních stavů, demencí).</li>\n                                    <li><strong>Apatická (indiferentní) nálada:</strong> Úplná lhostejnost a nezájem o sebe i okolí, ztráta emoční reaktivity.</li>\n                                    <li><strong>Bezradná nálada:</strong> Pacient nedokáže zhodnotit svou situaci ani se rozhodnout (typická pro počínající psychózy a deliria).</li>\n                                </ul>\n                            </div>\n                        </div>\n                    "
          },
          {
            "title": "2. Poruchy afektů",
            "color": "indigo",
            "content": "\n                        <ul class=\"list-disc ml-5 space-y-2 text-xs text-slate-300\">\n                            <li><strong>Afektivní labilita (emoční inkontinence):</strong> Rychlé a neadekvátní střídání emocí na minimální podněty (snadný přechod od pláče k smíchu u vaskulárních demencí či pseudobulbárního syndromu).</li>\n                            <li><strong>Patická afektivní dráždivost:</strong> Sklon k nepřiměřeně bouřlivým afektivním reakcím (výbuchy vzteku u organických poruch či poruch osobnosti).</li>\n                            <li><strong>Afektivní stupor:</strong> Motorické ustrnutí a neschopnost reakce v důsledku extrémního šoku (katastrofy, trauma).</li>\n                            <li><strong>Patický afekt:</strong> Extrémně silná, bouřlivá emoční reakce na neúměrně malý podnět, provázená <strong>kvalitativní poruchou vědomí (mrákotným stavem)</strong>, destrukčním jednáním a zakončená spánkem s <strong>úplnou amnézií</strong>.</li>\n                        </ul>\n                    "
          },
          {
            "title": "3. Kvalitativní poruchy emocí",
            "color": "cyan",
            "content": "\n                        <div class=\"space-y-2 text-xs\">\n                            <div class=\"p-3 rounded-lg bg-slate-900 border border-slate-700\">\n                                <strong>Emoční oploštělost / otupělost:</strong> Ztráta hloubky a pestrosti emočního prožívání, chladný odstup (jádrový negativní symptom schizofrenie).\n                            </div>\n                            <div class=\"p-3 rounded-lg bg-slate-900 border border-slate-700\">\n                                <strong>Emoční ambivalence:</strong> Současné prožívání dvou zcela protichůdných emocí k téže osobě či situaci (láska i nenávist naráz).\n                            </div>\n                            <div class=\"p-3 rounded-lg bg-slate-900 border border-slate-700\">\n                                <strong>Parathymie:</strong> Nepřiléhavost emoční reakce situaci (např. radostný smích při zprávě o úmrtí blízkého).\n                            </div>\n                            <div class=\"p-3 rounded-lg bg-slate-900 border border-slate-700\">\n                                <strong>Paramimie:</strong> Mimický výraz neodpovídá vnitřnímu emočnímu prožívání (např. úsměv při pocitu hlubokého děsu).\n                            </div>\n                            <div class=\"p-3 rounded-lg bg-slate-900 border border-slate-700\">\n                                <strong>Katatymie:</strong> Zkreslení myšlení a hodnocení reality pod vlivem silného emočního zaujetí (afektivní logika).\n                            </div>\n                        </div>\n                    "
          }
        ]
      },
      "recall": {
        "scenarios": [
          {
            "id": "q03-r1",
            "title": "Kazuistika 3: Nekontrolovaný afekt s amnézií",
            "question": "32letý muž po banální hádce v restauraci náhle zdemoloval stůl, fyzicky napadl obsluhu, následně usnul na zemi a po probuzení si z celého incidentu vůbec nic nepamatuje. Vyšetření vyloučilo těžkou opilost. O jakou poruchu emotivity se jedná?",
            "answer": "Jedná se o patický afekt – extrémní afektivní reakci na neúměrný podnět provázenou kvalitativní poruchou vědomí (obnubilací) s agresivním jednáním, terminálním spánkem a následnou totální amnézií na incident.",
            "pearl": "Forenzní význam: Patický afekt má zásadní forenzní dopad, protože v době spáchání činu byl jedinec ve stavu nepříčetnosti v důsledku mrákotného stavu."
          }
        ]
      },
      "cards": [
        {
          "id": "c03-1",
          "front": "Co je to moria a kde se s ní klinicky setkáváme?",
          "back": "Plané, bezobsažné vtipkování a nevhodné žertování (Witzelsucht) typické pro léze frontálního laloku (prefrontální syndrom).",
          "hint": "Frontální syndrom",
          "category": "psychopatologie"
        },
        {
          "id": "c03-2",
          "front": "Jak se projevuje parathymie a pro jaké onemocnění je typická?",
          "back": "Nepřiléhavou emoční reakcí (např. smích při tragické zprávě). Je typická pro schizofrenii (porucha afektivity).",
          "hint": "Emoční nepřiléhavost",
          "category": "psychopatologie"
        },
        {
          "id": "c03-3",
          "front": "Jaké 3 klíčové znaky odlišují patický afekt od běžného afektu?",
          "back": "1. Nepřiměřenost podnětu, 2. Přítomnost kvalitativní poruchy vědomí (obnubilace), 3. Totální amnézie na proběhlý děj.",
          "hint": "Forenzní psychopatologie",
          "category": "psychopatologie"
        }
      ],
      "quiz": [
        {
          "id": "q03-test1",
          "question": "Pojem 'anhedonie' v psychiatrii označuje:",
          "options": [
            "Neschopnost vyjádřit emoce slovy",
            "Neschopnost prožívat radost a potěšení z dříve příjemných aktivit",
            "Záchvatovité výbuchy vzteku",
            "Chorobné přeceňování vlastních schopností"
          ],
          "correctIndex": 1,
          "explanation": "Anhedonie je klíčovým jádrovým příznakem depresivní poruchy a negativních symptomů schizofrenie."
        },
        {
          "id": "q03-test2",
          "question": "Která porucha emotivity je definována jako současné prožívání dvou zcela protichůdných citů (např. lásky i nenávisti) k téže osobě?",
          "options": [
            "Parathymie",
            "Paramimie",
            "Emoční ambivalence",
            "Alexithymie"
          ],
          "correctIndex": 2,
          "explanation": "Emoční ambivalence je koexistence protichůdných emocí, která vede k paralýze rozhodování a je jedním ze základních Bleulerových symptomů schizofrenie."
        }
      ]
    },
    {
      "id": "q04-mysleni-poruchy",
      "number": 4,
      "title": "Myšlení a jeho poruchy",
      "shortDesc": "Poruchy tempa a dynamiky (bradypsychismus, záraz, tachypsychismus). Poruchy formy (perseverace, zabíhavost, rezonérství, inkoherence). Poruchy obsahu: vtíravé myšlenky, bludy (expanzivní, depresivní, paranoidní).",
      "category": "psychopatologie",
      "badge": "Základní psychopatologie",
      "badgeColor": "violet",
      "theory": {
        "banner": {
          "tag": "Psychopatologie III",
          "title": "Myšlení – nejvyšší integrační poznávací funkce",
          "text": "Myšlení poznává souvislosti a vztahy mezi jevy reality. V psychopatologii dělíme poruchy myšlení na poruchy dynamiky (tempa), poruchy formy (struktury) a poruchy obsahu (bludy a vtíravé myšlenky)."
        },
        "sections": [
          {
            "title": "1. Poruchy dynamiky a tempa myšlení",
            "color": "violet",
            "content": "\n                        <div class=\"space-y-2 text-xs\">\n                            <div class=\"p-3 rounded-lg bg-slate-900 border border-slate-700\">\n                                <span class=\"font-bold text-violet-300\">Bradypsychismus (útlum):</span> Celkové zpomalení tempa myšlení, těžkopádnost asociací, dlouhé latence odpovědí (typické pro depresi, hypotyreózu, intoxikaci sedativy, demence).\n                            </div>\n                            <div class=\"p-3 rounded-lg bg-slate-900 border border-slate-700\">\n                                <span class=\"font-bold text-violet-300\">Záraz myšlení (blocking):</span> Náhlé přerušení plynulého toku myšlenek uprostřed věty bez vnější příčiny (pacient uvádí, že mu 'vypadla hlava' či 'někdo myšlenku vzal' – typické pro schizofrenii).\n                            </div>\n                            <div class=\"p-3 rounded-lg bg-slate-900 border border-slate-700\">\n                                <span class=\"font-bold text-violet-300\">Mutismus:</span> Neschopnost nebo odmítání mluvit při neporušených řečových centrech (stuporózní deprese, katatonie, elektivní mutismus u dětí).\n                            </div>\n                            <div class=\"p-3 rounded-lg bg-slate-900 border border-slate-700\">\n                                <span class=\"font-bold text-violet-300\">Tachypsychismus (myšlenkový trysk / fuga idearum):</span> Extrémně zrychlený tok myšlenek, překotné asociace na základě povrchních asociací či rýmů, logorea (neustálý proud řeči u mánie). Může vést k <em>pseudoinkoherenci</em>.\n                            </div>\n                        </div>\n                    "
          },
          {
            "title": "2. Poruchy formy (struktury) myšlení",
            "color": "indigo",
            "content": "\n                        <ul class=\"list-disc ml-5 space-y-2 text-xs text-slate-300\">\n                            <li><strong>Perseverace (ulpívavost):</strong> Setrvávání na jedné myšlence nebo slovu i po změně otázky (typické pro organické poškození mozku, demenci).</li>\n                            <li><strong>Zabíhavé myšlení:</strong> Ztrácí se v nepodstatných detailech a vedlejších liniích, ale nakonec se k původnímu cíli vrátí.</li>\n                            <li><strong>Nevýpravné myšlení:</strong> Neschopnost rozvinout myšlenku, točí se kolem několika málo jednoduchých frází.</li>\n                            <li><strong>Rezonérství:</strong> Plané mudrování, pseudofilozofování o banalitách bez reálného závěru.</li>\n                            <li><strong>Autistické / dereistické myšlení:</strong> Myšlení odtržené od reality, řízené pouze vnitřními fantaziemi a přáními (schizofrenie).</li>\n                            <li><strong>Aglutinující myšlení (neologismy):</strong> Spojování částí slov do nových, nesmyslných tvarů.</li>\n                            <li><strong>Paralogické (dyslogické) myšlení:</strong> Nerespektuje zákony logiky, chybné kauzální závěry.</li>\n                            <li><strong>Inkoherentní (nesouvislé) myšlení:</strong> Rozpad asociativních spojů. Formy: zmatené (u obluzeného vědomí) a <strong>roztříštěné (schizofázie / slovní salát)</strong> u chronické schizofrenie při jasném vědomí.</li>\n                        </ul>\n                    "
          },
          {
            "title": "3. Poruchy obsahu myšlení (Obsese a Bludy)",
            "color": "cyan",
            "content": "\n                        <div class=\"space-y-3 text-xs\">\n                            <div class=\"p-3 rounded-lg bg-slate-900 border border-slate-700\">\n                                <div class=\"font-bold text-cyan-300 mb-1\">Obsedantní (vtíravé) myšlenky vs. Ovládavé myšlenky</div>\n                                <p class=\"text-slate-300\"><strong>Obsese:</strong> Nechtěné, vtíravé, egodystonní myšlenky, které pacient vnímá jako nesmyslné a vlastní, vyvolávají úzkost a nutí k neutralizačnímu chování (<strong>kompulzím</strong> u OCD). <strong>Ovládavá myšlenka:</strong> Silně emočně podložená myšlenka, které jedinec podřizuje celé své jednání (např. fanatismus).</p>\n                            </div>\n                            <div class=\"p-3 rounded-lg bg-rose-950/30 border border-rose-500/30\">\n                                <div class=\"font-bold text-rose-400 mb-1\">🚨 BLUD (Délire / Delusion)</div>\n                                <p class=\"text-slate-300 mb-2\">Mylné přesvědčení vzniklé z <strong>chorobného duševního podkladu</strong>, které je <strong>nevývratné</strong>, nekorigovatelné logickými argumenty, má zásadní <strong>vliv na jednání</strong> a je individuální.</p>\n                                <div class=\"grid md:grid-cols-3 gap-2\">\n                                    <div class=\"bg-slate-900/80 p-2 rounded\">\n                                        <span class=\"font-bold text-violet-300\">Expanzivní bludy</span>\n                                        <p class=\"text-[11px] text-slate-400\">Megalomanické, originární (královský původ), inventorní (vynálezy), reformátorské, erotomanické (de Clérambaultův syndrom).</p>\n                                    </div>\n                                    <div class=\"bg-slate-900/80 p-2 rounded\">\n                                        <span class=\"font-bold text-violet-300\">Depresivní / Mikromanické</span>\n                                        <p class=\"text-[11px] text-slate-400\">Insuficienční (neschopnost), autoakuzační (vina za války), ruinační (chudoba), nihilistické (Cotardův syndrom – orgány neexistují/je mrtvý), ahasverismus (věčné zatracení), enormity.</p>\n                                    </div>\n                                    <div class=\"bg-slate-900/80 p-2 rounded\">\n                                        <span class=\"font-bold text-violet-300\">Paranoidní bludy</span>\n                                        <p class=\"text-[11px] text-slate-400\">Vztahovačnosti (vše v TV se týká jeho), persekuční (pronásledování), kverulační (neustálé stížnosti), žárlivosti (Othellův syndrom u alkoholismu).</p>\n                                    </div>\n                                </div>\n                                <div class=\"mt-2 text-[11px] text-slate-300\">\n                                    <strong>Stádia vývoje bludu:</strong> Bludná nálada (pocit, že se něco děje) ➔ Bludné vnímání ➔ Bludný nápad ➔ Systematizace bludu ➔ Reziduum / dissimulace.\n                                </div>\n                            </div>\n                        </div>\n                    "
          }
        ]
      },
      "recall": {
        "scenarios": [
          {
            "id": "q04-r1",
            "title": "Kazuistika 4: Depresivní pacient s Cotardovým syndromem",
            "question": "62letá těžce depresivní pacientka tvrdí, že jí shnily vnitřnosti, nemá žaludek ani srdce, je již po smrti a její existence přináší zkázu celému světu. Odmítá jíst, protože 'mrtví potravu nepotřebují'. O jaký typ bludu se jedná?",
            "answer": "Jedná se o mikromanický nihilistický blud (Cotardův syndrom) u těžké psychotické deprese. Pacientka popírá existenci vlastního těla a orgánů. Jde o urgentní stav s rizikem těžké malnutrice, dehydratace a suicidia, indikovaný k elektrokonvulzivní terapii (ECT) a antipsychotikům s antidepresivy.",
            "pearl": "Léčba volby u psychotické deprese s nihilistickými bludy a odmítáním potravy: Elektrokonvulzivní terapie (ECT) přináší nejrychlejší a život zachraňující odpověď."
          }
        ]
      },
      "cards": [
        {
          "id": "c04-1",
          "front": "Jaká jsou 4 základní diagnostická kritéria bludu?",
          "back": "1. Vznik z chorobného podkladu, 2. Nekorigovatelnost (nevývratnost), 3. Vliv na jednání nemocného, 4. Individuální / soukromý charakter.",
          "hint": "Definice bludu",
          "category": "psychopatologie"
        },
        {
          "id": "c04-2",
          "front": "Co je to Cotardův syndrom?",
          "back": "Nihilistický mikromanický blud u těžké deprese, kdy pacient věří, že nemá vnitřní orgány, je mrtvý nebo ztratil veškeré tělesné funkce.",
          "hint": "Nihilistický blud",
          "category": "psychopatologie"
        },
        {
          "id": "c04-3",
          "front": "Jaký je rozdíl mezi inkoherencí u deliria a schizofázií (slovním salátem)?",
          "back": "Inkoherence u deliria probíhá při ZASTŘENÉM vědomí, zatímco schizofázie (slovní salát) u schizofrenie probíhá při zcela JASNÉM (lucidním) vědomí.",
          "hint": "Stav vědomí",
          "category": "psychopatologie"
        }
      ],
      "quiz": [
        {
          "id": "q04-test1",
          "question": "Které stádium formování bludu předchází samotnému bludnému nápadu a systematizaci?",
          "options": [
            "Petrifikace bludu",
            "Bludná nálada a bludné vnímání",
            "Bludný relikt",
            "Dissimulace"
          ],
          "correctIndex": 1,
          "explanation": "Formování bludu začíná neurčitou tísnivou bludnou náladou ('něco se kolem mě chystá'), pokračuje bludným vnímáním a vyúsťuje v bludný nápad a následnou systematizaci."
        },
        {
          "id": "q04-test2",
          "question": "Pacient s mánií mluví nepřetržitě, rychle přeskakuje z tématu na téma na základě zvukové podobnosti slov a rýmů. O jakou poruchu myšlení se jedná?",
          "options": [
            "Bradypsychismus s perseveracemi",
            "Tachypsychismus s myšlenkovým tryskem (fuga idearum)",
            "Záraz myšlení",
            "Obsedantní ruminace"
          ],
          "correctIndex": 1,
          "explanation": "Tachypsychismus s myšlenkovým tryskem (fuga idearum) a logoreou je kardinálním rysem manického syndromu."
        }
      ]
    },
    {
      "id": "q05-jednani-vule-pudy-poruchy",
      "number": 5,
      "title": "Jednání a vůle, pudy a instinkty a jejich poruchy",
      "shortDesc": "Vůle (hypobulie, abulie). Kvantitativní a kvalitativní poruchy motoriky: katatonní syndrom (stupor, vosková ohebnost, raptus), kompulze, tiky. Poruchy pudů: sebezáchovy (suicidální chování), obživy (anorexie/bulimie), sexuálního.",
      "category": "psychopatologie",
      "badge": "Základní psychopatologie",
      "badgeColor": "violet",
      "theory": {
        "banner": {
          "tag": "Psychopatologie IV",
          "title": "Vůle, motorika a pudový život",
          "text": "Vůle je schopnost vědomě volit cíle a mobilizovat úsilí k jejich dosažení. Pudy představují vrozené biologické hnací síly zajišťující přežití jedince i druhu."
        },
        "sections": [
          {
            "title": "1. Poruchy vůle a jednání",
            "color": "violet",
            "content": "\n                        <div class=\"grid md:grid-cols-2 gap-3 text-xs\">\n                            <div class=\"p-3 rounded-lg bg-slate-900 border border-slate-700\">\n                                <h4 class=\"font-bold text-violet-300 mb-1\">Poruchy vůle</h4>\n                                <ul class=\"list-disc ml-4 space-y-1 text-slate-300\">\n                                    <li><strong>Hypobulie:</strong> Oslabení volní aktivity, nerozhodnost, potíže se zahájením činnosti (deprese).</li>\n                                    <li><strong>Abulie:</strong> Úplná ztráta schopnosti zahájit a vykonat volní aktivitu (těžká deprese, schizofrenie).</li>\n                                    <li><strong>Hyperbulie:</strong> Zvýšené volní úsilí a překotná činorodost, která však často postrádá dokončení (mánie).</li>\n                                </ul>\n                            </div>\n                            <div class=\"p-3 rounded-lg bg-slate-900 border border-slate-700\">\n                                <h4 class=\"font-bold text-violet-300 mb-1\">Kvantitativní poruchy jednání</h4>\n                                <ul class=\"list-disc ml-4 space-y-1 text-slate-300\">\n                                    <li><strong>Hypokineze / Akineze:</strong> Celkový útlum motoriky až <strong>stupor</strong> (ztráta hybnosti a řeči při zachovalém vědomí – katatonní, depresivní, psychogenní).</li>\n                                    <li><strong>Hyperkineze / Agitovanost:</strong> Neklid, bezcílné pobíhání, manipulace s předměty, úzkostný neklid (jactatio capitis).</li>\n                                </ul>\n                            </div>\n                        </div>\n                    "
          },
          {
            "title": "2. Kvalitativní poruchy jednání a Katatonní syndrom",
            "color": "indigo",
            "content": "\n                        <div class=\"p-3 rounded-lg bg-rose-950/30 border border-rose-500/30 text-xs mb-3\">\n                            <div class=\"font-bold text-rose-400 mb-1\">🚨 Katatonní syndrom</div>\n                            <p class=\"text-slate-300 mb-2\">Rozpojení psychiky a motoriky. Dělí se na 2 formy:</p>\n                            <div class=\"grid md:grid-cols-2 gap-2\">\n                                <div class=\"bg-slate-900 p-2 rounded\">\n                                    <span class=\"font-bold text-amber-300\">Neproduktivní (stuporózní) forma</span>\n                                    <ul class=\"list-disc ml-4 text-slate-300 space-y-1\">\n                                        <li><strong>Katatonní stupor:</strong> Imobilita, mutismus.</li>\n                                        <li><strong>Flexibilitas cerea (vosková ohebnost):</strong> Tělo a končetiny setrvávají v pasivně nastavené poloze (fenomén psychického polštáře).</li>\n                                        <li><strong>Negativismus:</strong> Pasivní (nereaguje na výzvy) nebo aktivní (dělá přesný opak požadavku).</li>\n                                    </ul>\n                                </div>\n                                <div class=\"bg-slate-900 p-2 rounded\">\n                                    <span class=\"font-bold text-rose-300\">Produktivní (agitovaná) forma</span>\n                                    <ul class=\"list-disc ml-4 text-slate-300 space-y-1\">\n                                        <li><strong>Katatonní raptus:</strong> Náhlé, divoké, nekontrolované motorické běsnění s rizikem destrukce a těžkého sebepoškození.</li>\n                                        <li><strong>Echopraxie / Echolálie:</strong> Bezmyšlenkovité opakování pohybů / slov jiných lidí.</li>\n                                        <li><strong>Manýrování a stereotypie:</strong> Šroubované, bizarní pohyby, rituální grimasy.</li>\n                                    </ul>\n                                </div>\n                            </div>\n                            <div class=\"mt-2 text-rose-300 font-bold\">⚠️ Febrilní katatonie: Akutní život ohrožující stav s hyperpyrexií a autonomní labilitou – absolutní indikace k ECT!</div>\n                        </div>\n                        <ul class=\"list-disc ml-5 space-y-1 text-xs text-slate-300\">\n                            <li><strong>Kompulzivní jednání:</strong> Nutkavé, rituální úkony (mytí rukou, kontrola zámků) k neutralizaci obsesí.</li>\n                            <li><strong>Zkratkové a impulzivní jednání:</strong> Jednání bez předchozí volní úvahy (náhlý útok, sebepoškození).</li>\n                        </ul>\n                    "
          },
          {
            "title": "3. Poruchy pudů",
            "color": "cyan",
            "content": "\n                        <div class=\"grid md:grid-cols-3 gap-2 text-xs\">\n                            <div class=\"stat-box\">\n                                <strong class=\"text-violet-300\">Pud sebezáchovy</strong>\n                                <ul class=\"list-disc ml-4 mt-1 text-slate-300 space-y-1\">\n                                    <li><strong>Suicidální chování:</strong> Suicidální myšlenky ➔ tendence ➔ pokus ➔ dokonaná sebevražda.</li>\n                                    <li><strong>Sebepoškozování (automutilace):</strong> Řezání, pálení (u hraniční poruchy osobnosti).</li>\n                                </ul>\n                            </div>\n                            <div class=\"stat-box\">\n                                <strong class=\"text-violet-300\">Pud výživy (obživy)</strong>\n                                <ul class=\"list-disc ml-4 mt-1 text-slate-300 space-y-1\">\n                                    <li><strong>Mentální anorexie a bulimie</strong></li>\n                                    <li><strong>Pica:</strong> Pojídání nepoživatelných předmětů (zemina, omítka).</li>\n                                    <li><strong>Sitofobie:</strong> Odmítání jídla (z bludu otravy).</li>\n                                    <li><strong>Polydipsie / potomanie</strong></li>\n                                </ul>\n                            </div>\n                            <div class=\"stat-box\">\n                                <strong class=\"text-violet-300\">Pud sexuální a sociální</strong>\n                                <ul class=\"list-disc ml-4 mt-1 text-slate-300 space-y-1\">\n                                    <li><strong>Hypersexualita:</strong> Nymfomanie, satyriáza (v mánii).</li>\n                                    <li><strong>Parafilie:</strong> Pedofilie, exhibicionismus, fetišismus, sadomasochismus.</li>\n                                    <li><strong>Ztráta pudu sociálního:</strong> Sociální stažení, autismus.</li>\n                                </ul>\n                            </div>\n                        </div>\n                    "
          }
        ]
      },
      "recall": {
        "scenarios": [
          {
            "id": "q05-r1",
            "title": "Kazuistika 5: Katatonní stupor s voskovou ohebností",
            "question": "24letý pacient leží na lůžku bez hnutí, nekomunikuje, oči má otevřené a zírá do jednoho bodu. Když mu lékař zvedne paži do nepřirozené polohy nad hlavu, pacient v této poloze setrvá několik desítek minut (flexibilitas cerea). Hlava zůstává několik centimetrů nad polštářem (fenomén psychického polštáře). Jak se tento stav nazývá a jaká je léčba první volby?",
            "answer": "Jedná se o katatonní stupor (neproduktivní formu katatonního syndromu) s voskovou ohebností (flexibilitas cerea). Léčbou první volby je podání vysokých dávek benzodiazepinů (Lorazepam i.v. v tzv. Lorazepam challenge testu) a v případě neúčinnosti či febrilního průběhu elektrokonvulzivní terapie (ECT).",
            "pearl": "U katatonie jsou klasická incizivní antipsychotika (např. Haloperidol) riziková pro možnost provokace maligního neuroleptického syndromu!"
          }
        ]
      },
      "cards": [
        {
          "id": "c05-1",
          "front": "Co je to 'flexibilitas cerea' (vosková ohebnost) a pro jaký syndrom je typická?",
          "back": "Schopnost udržet pasivně nastavenou nepřirozenou polohu těla či končetin po dlouhou dobu. Je typická pro katatonní stupor.",
          "hint": "Katatonní syndrom",
          "category": "psychopatologie"
        },
        {
          "id": "c05-2",
          "front": "Jaký je rozdíl mezi pasivním a aktivním negativismem?",
          "back": "Pasivní negativismus: pacient nevykoná požadovaný příkaz. Aktivní negativismus: pacient vykoná přesný opak toho, co se po něm žádá.",
          "hint": "Reakce na výzvu",
          "category": "psychopatologie"
        },
        {
          "id": "c05-3",
          "front": "Který lék se používá jako diagnosticko-terapeutický test u katatonního stuporu?",
          "back": "Lorazepam (i.v. Lorazepam challenge test – při katatonii často vede k rychlému uvolnění stuporu).",
          "hint": "BZD test",
          "category": "psychopatologie"
        }
      ],
      "quiz": [
        {
          "id": "q05-test1",
          "question": "Fenomén 'psychického polštáře' (hlava nemocného ležícího na zádech setrvává zvednutá nad lůžkem bez opory) je projevem:",
          "options": [
            "Parkinsonského tremoru",
            "Katatonního syndromu (katalepsie)",
            "Mánie s logoreou",
            "Deliria tremens"
          ],
          "correctIndex": 1,
          "explanation": "Fenomén psychického polštáře je klasickým projevem katalepsie v rámci katatonního syndromu."
        },
        {
          "id": "q05-test2",
          "question": "Pojem 'sitofobie' v psychiatrii znamená:",
          "options": [
            "Chorobný strach z pavouků",
            "Chorobné odmítání potravy (např. z bludného přesvědčení o otravě jedy)",
            "Nutkavé záchvatovité přejídání",
            "Pojídání nepoživatelných předmětů"
          ],
          "correctIndex": 1,
          "explanation": "Sitofobie je porucha pudu výživy charakterizovaná odmítáním jídla z psychotických motivů (bludy pronásledování, otravy)."
        }
      ]
    },
    {
      "id": "q06-intelekt-osobnost-poruchy",
      "number": 6,
      "title": "Intelekt a osobnost a jejich poruchy",
      "shortDesc": "IQ a mentální retardace (pásma lehká až hluboká). Demence vs. oligofrenie. Osobnost (temperament, charakter), obranné mechanismy. Specifické poruchy osobnosti (Klastry A, B, C). Procesuální změny (deteriorace, depravace).",
      "category": "psychopatologie",
      "badge": "Základní psychopatologie",
      "badgeColor": "violet",
      "theory": {
        "banner": {
          "tag": "Psychopatologie V",
          "title": "Intelekt a osobnostní struktura",
          "text": "Inteligence je schopnost účelně jednat, myslet a vyrovnávat se s okolím. Osobnost představuje dynamický, integrovaný soubor individuálních vlastností a adaptačních mechanismů (unitas variabilis)."
        },
        "sections": [
          {
            "title": "1. Poruchy intelektu (Mentální retardace a Demence)",
            "color": "violet",
            "content": "\n                        <div class=\"space-y-3 text-xs\">\n                            <div class=\"p-3 rounded-lg bg-slate-900 border border-slate-700\">\n                                <h4 class=\"font-bold text-violet-300 mb-2\">Mentální retardace (Oligofrenie – vrozená / časně získaná do 2 let)</h4>\n                                <div class=\"grid md:grid-cols-4 gap-2\">\n                                    <div class=\"bg-slate-800 p-2 rounded\">\n                                        <strong>Lehká (F70):</strong><br>IQ 50–69 (mentální věk 9–12 let). Vzdělatelní v praktických školách, samostatní v běžném životě.\n                                    </div>\n                                    <div class=\"bg-slate-800 p-2 rounded\">\n                                        <strong>Středně těžká (F71):</strong><br>IQ 35–49 (věk 6–9 let). Vychovatelní, zvládnou jednoduché manuální úkony, potřebují chráněné prostředí.\n                                    </div>\n                                    <div class=\"bg-slate-800 p-2 rounded\">\n                                        <strong>Těžká (F72):</strong><br>IQ 20–34 (věk 3–6 let). Výrazné motorické a řečové deficity, vyžadují trvalý dohled.\n                                    </div>\n                                    <div class=\"bg-slate-800 p-2 rounded\">\n                                        <strong>Hluboká (F73):</strong><br>IQ &lt; 20 (věk &lt; 3 roky). Imobilní nebo těžce omezení, inkontinence, neschopni sebeobsluhy.\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"p-3 rounded-lg bg-slate-900 border border-slate-700\">\n                                <h4 class=\"font-bold text-cyan-300 mb-1\">Demence (získaný úbytek intelektu)</h4>\n                                <p class=\"text-slate-300\">Získaný, progresivní úbytek kognitivních funkcí (paměti, intelektu, orientace a exekutivních funkcí) po ukončení vývoje mozku (nad 2 roky věku). Nejčastější typy: Alzheimerova nemoc (60 %), vaskulární demence (20 %), demence s Lewyho tělísky, frontotemporální demence.</p>\n                            </div>\n                        </div>\n                    "
          },
          {
            "title": "2. Struktura osobnosti a obranné mechanismy",
            "color": "indigo",
            "content": "\n                        <p class=\"mb-2 text-xs\">Osobnost sestává z <strong>temperamentu</strong> (biologická stránka – reaktivita emocí), <strong>charakteru</strong> (morálně-volní a sociální stránka) a <strong>schopností/intelektu</strong>.</p>\n                        <div class=\"p-3 rounded-lg bg-slate-900 border border-slate-700 text-xs mb-2\">\n                            <h4 class=\"font-bold text-violet-300 mb-1\">Obranné mechanismy osobnosti (Freud / ego-obrany)</h4>\n                            <div class=\"grid md:grid-cols-2 gap-2 text-slate-300\">\n                                <div><strong>Kompenzace / Hyperkompenzace:</strong> Vyrovnání nedostatku rozvojem jiné / téže oblasti.</div>\n                                <div><strong>Regrese:</strong> Ústup na vývojově nižší stádium chování.</div>\n                                <div><strong>Projekce:</strong> Připisování vlastních nepřijatelných přání jiným lidem.</div>\n                                <div><strong>Racionalizace:</strong> Hledání logických omluv pro emočně motivované chování.</div>\n                                <div><strong>Sublimace:</strong> Přeměna pudové energie do společensky oceňované činnosti (umění, sport).</div>\n                                <div><strong>Popření:</strong> Odmítnutí uznat existenci nepříjemné reality.</div>\n                            </div>\n                        </div>\n                    "
          },
          {
            "title": "3. Specifické poruchy osobnosti (F60 / Klastry A, B, C)",
            "color": "cyan",
            "content": "\n                        <div class=\"p-3 rounded-lg bg-slate-900 border border-slate-700 text-xs space-y-2\">\n                            <p class=\"text-slate-300\">Trvalá, rigidní a hluboce zakořeněná povahová odchylka od kulturní normy, která vede k sociální maladaptaci a utrpení jedince i jeho okolí. Diagnostikuje se až po 18. roce věku.</p>\n                            <div class=\"grid md:grid-cols-3 gap-2\">\n                                <div class=\"bg-slate-800 p-2 rounded\">\n                                    <strong class=\"text-violet-300\">Klastr A (Podivíni / Excentrici)</strong>\n                                    <ul class=\"list-disc ml-4 text-slate-300 mt-1 space-y-0.5\">\n                                        <li><strong>Paranoidní:</strong> Podezřívavost, vztahovačnost, neodpouští urážky.</li>\n                                        <li><strong>Schizoidní:</strong> Emoční chlad, samotářství, nezájem o vztahy.</li>\n                                        <li><strong>Schizotypní:</strong> Magické myšlení, bizarní chování.</li>\n                                    </ul>\n                                </div>\n                                <div class=\"bg-slate-800 p-2 rounded\">\n                                    <strong class=\"text-violet-300\">Klastr B (Dramatičtí / Emoční)</strong>\n                                    <ul class=\"list-disc ml-4 text-slate-300 mt-1 space-y-0.5\">\n                                        <li><strong>Disociální:</strong> Porušování zákonů, bezohlednost, absence viny/empatie.</li>\n                                        <li><strong>Emočně nestabilní (Hraniční BPD / Impulzivní):</strong> Nestabilita vztahů, sebepoškozování, prázdnota.</li>\n                                        <li><strong>Histriónská:</strong> Teatrálnost, touha po pozornosti.</li>\n                                        <li><strong>Narcistická:</strong> Grandiozita, potřeba obdivu.</li>\n                                    </ul>\n                                </div>\n                                <div class=\"bg-slate-800 p-2 rounded\">\n                                    <strong class=\"text-violet-300\">Klastr C (Úzkostní / Bázliví)</strong>\n                                    <ul class=\"list-disc ml-4 text-slate-300 mt-1 space-y-0.5\">\n                                        <li><strong>Vyhýbavá (anxiózní):</strong> Pocit méněcennosti, strach z odmítnutí.</li>\n                                        <li><strong>Závislá:</strong> Neschopnost rozhodovat bez podpory druhých.</li>\n                                        <li><strong>Anankastická (OCPD):</strong> Perfekcionismus, pedantství, rigidita.</li>\n                                    </ul>\n                                </div>\n                            </div>\n                            <div class=\"mt-2 text-slate-400\">\n                                <strong>Procesuální změny osobnosti:</strong> Deteriorace (úbytek intelektu a šíře osobnosti u demencí), Depravace (etický a sociální úpadek u těžkých závislostí), Alterace/Rozštěp (disociace na 2 osobnosti).\n                            </div>\n                        </div>\n                    "
          }
        ]
      },
      "recall": {
        "scenarios": [
          {
            "id": "q06-r1",
            "title": "Kazuistika 6: Diferenciální diagnostika poruch osobnosti",
            "question": "23letá studentka je opakovaně ošetřována na chirurgii pro řezné rány na předloktí. Udává chronické pocity vnitřní prázdnoty, extrémní strach z opuštění partnerem, prudké střídání zbožňování a nenávisti k lidem ve svém okolí a záchvaty nekontrolovaného vzteku. O jakou poruchu osobnosti se jedná a jaká je psychoterapie volby?",
            "answer": "Jedná se o emočně nestabilní poruchu osobnosti – hraniční typ (Borderline Personality Disorder, Klastr B). Psychoterapií volby je dialektická behaviorální terapie (DBT dle Marshi Linehanové) nebo schéma terapie.",
            "pearl": "Farmakoterapie u BPD je pouze podpůrná (nízké dávky atypických antipsychotik či SSRI při impulzivitě/afektivní labilitě), těžištěm léčby je vždy dlouhodobá psychoterapie."
          }
        ]
      },
      "cards": [
        {
          "id": "c06-1",
          "front": "Jaké je pásmo IQ a mentální věk u lehké mentální retardace (F70)?",
          "back": "IQ 50–69 (mentální věk odpovídá 9–12 letům).",
          "hint": "F70",
          "category": "psychopatologie"
        },
        {
          "id": "c06-2",
          "front": "Které poruchy osobnosti patří do Klastru B (dramatické/emoční)?",
          "back": "1. Disociální, 2. Emočně nestabilní (hraniční a impulzivní typ), 3. Histriónská, 4. Narcistická.",
          "hint": "Klastr B",
          "category": "psychopatologie"
        },
        {
          "id": "c06-3",
          "front": "Jaký je zásadní rozdíl mezi mentální retardací a demencí?",
          "back": "Mentální retardace je VROZENÝ nebo časně získaný stav (do 2 let věku), zatímco demence je ZÍSKANÝ úbytek intelektu na dříve normálně vyvinutém mozku.",
          "hint": "Časový vznik poruchy",
          "category": "psychopatologie"
        }
      ],
      "quiz": [
        {
          "id": "q06-test1",
          "question": "Která porucha osobnosti se projevuje trvalým nezájmem o sociální kontakty, samotářstvím, citovým chladem a nedostatkem přátel bez přítomnosti psychotických bludů?",
          "options": [
            "Histriónská porucha osobnosti",
            "Schizoidní porucha osobnosti",
            "Disociální porucha osobnosti",
            "Anankastická porucha osobnosti"
          ],
          "correctIndex": 1,
          "explanation": "Schizoidní porucha osobnosti (Klastr A) je charakterizována sociální introverzí, samotářstvím a plochou afektivitou bez touhy po blízkých vztazích."
        },
        {
          "id": "q06-test2",
          "question": "Jedinec se středně těžkou mentální retardací (F71) dosahuje IQ v rozmezí:",
          "options": [
            "50–69",
            "35–49",
            "20–34",
            "Méně než 20"
          ],
          "correctIndex": 1,
          "explanation": "Středně těžká mentální retardace odpovídá IQ 35–49 (mentální věk 6–9 let; jedinci jsou vychovatelní a schopni jednoduché práce pod dohledem)."
        }
      ]
    },
    {
      "id": "q07-psychofarmakoterapie-obecne",
      "number": 7,
      "title": "Psychofarmakoterapie (význam, historie, doporučené postupy)",
      "shortDesc": "Význam farmakoterapie, dehospitalizace. Fáze léčby: akutní, pokračovací (6-9 měsíců) a udržovací/profylaktická. Zásady racionální preskripce, TDM, lékové interakce cytochromu P450 a compliance.",
      "category": "farmakologie",
      "badge": "Psychofarmakologie",
      "badgeColor": "emerald",
      "theory": {
        "banner": {
          "tag": "Psychofarmakologie I",
          "title": "Základy racionální psychofarmakoterapie",
          "text": "Objev psychofarmak v 50. letech 20. století představoval největší terapeutickou revoluci v psychiatrii. Umožnil zmírnit utrpení, otevřel cestu k deinstitucionalizaci a umožnil zapojení pacientů do psychoterapie a resocializace."
        },
        "sections": [
          {
            "title": "1. Fáze psychofarmakoterapie",
            "color": "emerald",
            "content": "\n                        <div class=\"grid md:grid-cols-3 gap-3 text-xs\">\n                            <div class=\"stat-box\">\n                                <div class=\"font-bold text-emerald-400 mb-1\">1. Akutní léčba</div>\n                                <p class=\"text-slate-300\"><strong>Cíl:</strong> Odstranění akutních příznaků a dosažení plné <strong>remise</strong> (obvykle 4–8 týdnů). Volba léku v monoterapii, adekvátní dávkování a sledování snášenlivosti.</p>\n                            </div>\n                            <div class=\"stat-box\">\n                                <div class=\"font-bold text-emerald-400 mb-1\">2. Pokračovací léčba</div>\n                                <p class=\"text-slate-300\"><strong>Cíl:</strong> Prevence <strong>relapsu</strong> (návratu téže epizody). Trvá <strong>6–9 měsíců</strong> po dosažení remise ve stejné terapeutické dávce jako v akutní fázi!</p>\n                            </div>\n                            <div class=\"stat-box\">\n                                <div class=\"font-bold text-emerald-400 mb-1\">3. Udržovací (profylaktická)</div>\n                                <p class=\"text-slate-300\"><strong>Cíl:</strong> Prevence <strong>rekurence</strong> (nové epizody v budoucnu). Indikována při opakovaných epizodách (např. rekurentní deprese, BAP, schizofrenie). Trvá 2 roky až celoživotně.</p>\n                            </div>\n                        </div>\n                    "
          },
          {
            "title": "2. Zásady racionální preskripce a TDM",
            "color": "teal",
            "content": "\n                        <ul class=\"list-disc ml-5 space-y-2 text-xs text-slate-300\">\n                            <li><strong>Monoterapie jako zlatý standard:</strong> Kombinace více látek ze stejné lékové skupiny volit až po vyčerpání monoterapie.</li>\n                            <li><strong>Časová latence účinku:</strong> U antidepresiv a stabilizátorů nálady nastupuje terapeutický efekt až po <strong>2–4 týdnech</strong> (vyžaduje edukaci pacienta k prevenci předčasného vysazení).</li>\n                            <li><strong>Postupná titrace dávky:</strong> 'Start low, go slow' (začít nízkou dávkou a pomalu stoupat k minimalizaci nežádoucích účinků), zejména u seniorů a panické poruchy.</li>\n                            <li><strong>Terapeutické monitorování hladin (TDM):</strong> Stanovení plazmatické koncentrace léčiva v rovnovážném stavu.\n                                <br><em>Indikace TDM:</em> Léčiva s úzkým terapeutickým oknem (<strong>Lithium, Valproát, Karbamazepin</strong>, Klozapin), podezření na non-adherenci, výskyt těžkých NÚ, renální/jaterní selhávání, lékové interakce, polymorfismus CYP450.\n                            </li>\n                            <li><strong>Pozvolné vysazování (tapering):</strong> Prevence syndromu z vysazení a odrazového fenoménu (rebound fenomén u BZD a hypnotik).</li>\n                        </ul>\n                    "
          },
          {
            "title": "3. Farmakokinetika a lékové interakce (Cytochrom P450)",
            "color": "cyan",
            "content": "\n                        <div class=\"p-3 rounded-lg bg-slate-900 border border-slate-700 text-xs space-y-2\">\n                            <p class=\"text-slate-300\">Většina psychofarmak je metabolizována jaterním enzymovým systémem <strong>cytochromu P450 (CYP1A2, CYP2D6, CYP3A4, CYP2C19)</strong>.</p>\n                            <div class=\"grid md:grid-cols-2 gap-2 text-slate-300\">\n                                <div>\n                                    <strong class=\"text-amber-400\">Inhibitory CYP450 (zvyšují hladiny jiných léků):</strong><br>\n                                    Fluoxetin, Paroxetin (silné inhibitory CYP2D6), Fluvoxamin (silný inhibitor CYP1A2 a CYP2C19 – pozor na kombinaci s klozapinem a teofylinem!).\n                                </div>\n                                <div>\n                                    <strong class=\"text-amber-400\">Induktory CYP450 (snižují hladiny jiných léků):</strong><br>\n                                    Karbamazepin, Třezalka tečkovaná (Hypericum perforatum), Kouření (indukuje CYP1A2 ➔ snižuje hladinu klozapinu a olanzapinu!).\n                                </div>\n                            </div>\n                        </div>\n                    "
          }
        ]
      },
      "recall": {
        "scenarios": [
          {
            "id": "q07-r1",
            "title": "Kazuistika 7: Pokračovací léčba po první depresivní epizodě",
            "question": "45letá žena dosáhla po 6 týdnech užívání sertralinu 100 mg/den plné remise těžké depresivní epizody. Cítí se výborně a ptá se, zda může lék nyní vysadit. Co jí lékař doporučí?",
            "answer": "Lékař jí vysvětlí, že lék nesmí vysadit. Nyní je ve fázi pokračovací léčby, která musí trvat minimálně 6–9 měsíců ve stejné terapeutické dávce (100 mg/den), aby se zabránilo relapsu epizody. Předčasné vysazení nese až 50% riziko návratu deprese.",
            "pearl": "Zlaté pravidlo: Dávka, která pacienta z deprese dostala, je stejnou dávkou, která ho v remisi udrží!"
          }
        ]
      },
      "cards": [
        {
          "id": "c07-1",
          "front": "Jak dlouho má trvat pokračovací léčba antidepresivy po odeznění první depresivní epizody?",
          "back": "Minimálně 6 až 9 měsíců ve stejné dávce, která navodila remisi.",
          "hint": "Fáze léčby",
          "category": "farmakologie"
        },
        {
          "id": "c07-2",
          "front": "U kterých psychofarmak je povinné provádět terapeutické monitorování hladin (TDM)?",
          "back": "U látek s úzkým terapeutickým oknem: Lithium, Valproát, Karbamazepin a Klozapin.",
          "hint": "Úzké terapeutické okno",
          "category": "farmakologie"
        },
        {
          "id": "c07-3",
          "front": "Jak ovlivňuje kouření cigaret metabolismus klozapinu a olanzapinu?",
          "back": "Polycyklické aromatické uhlovodíky v kouři indukují enzym CYP1A2, což urychluje odbourávání klozapinu/olanzapinu a snižuje jejich plazmatickou hladinu.",
          "hint": "Indukce CYP1A2",
          "category": "farmakologie"
        }
      ],
      "quiz": [
        {
          "id": "q07-test1",
          "question": "Za jak dlouho od zahájení podávání antidepresiva lze standardně očekávat plný nástup klinického terapeutického účinku na náladu?",
          "options": [
            "Během prvních 24 hodin",
            "Do 3 dnů",
            "Za 2 až 4 týdny",
            "Až za 6 měsíců"
          ],
          "correctIndex": 2,
          "explanation": "Antidepresiva mají známou časovou latenci nástupu účinku 2–4 týdny danou potřebou neuroplastických adaptací a down-regulace presynaptických autoreceptorů."
        },
        {
          "id": "q07-test2",
          "question": "Který z následujících léků je silným induktorem cytochromu P450 (zejména CYP3A4) a může zásadně snížit účinnost hormonální antikoncepce či jiných psychofarmak?",
          "options": [
            "Karbamazepin",
            "Citalopram",
            "Fluoxetin",
            "Lorazepam"
          ],
          "correctIndex": 0,
          "explanation": "Karbamazepin je silný enzymový induktor CYP450 a urychluje clearance mnoha současně podávaných léčiv."
        }
      ]
    },
    {
      "id": "q08-antidepresiva",
      "number": 8,
      "title": "Antidepresiva (mechanismus účinku, dělení, účinnost, snášenlivost, bezpečnost)",
      "shortDesc": "TCA (1. gen - kardiotoxicita, anticholinergní NÚ), SSRI (3. gen - 1. volba, citalopram, sertralin, fluoxetin), SNRI (venlafaxin), NDRI (bupropion), NaSSA (mirtazapin), multimodální (vortioxetin), agomelatin, esketamin. Sérotoninový syndrom a syndrom z vysazení.",
      "category": "farmakologie",
      "badge": "Psychofarmakologie",
      "badgeColor": "emerald",
      "theory": {
        "banner": {
          "tag": "Psychofarmakologie II",
          "title": "Antidepresiva – moderní farmakoterapie afektivních a úzkostných poruch",
          "text": "Antidepresiva modulují monoaminergní neurotransmisi (5-HT, NA, DA) a stimulují syntézu neurotrofinů (BDNF), což vede k obnově synaptické plasticity a neurogeneze v hipokampu."
        },
        "sections": [
          {
            "title": "1. Klasifikace a mechanismy účinku antidepresiv",
            "color": "emerald",
            "content": "\n                        <div class=\"space-y-3 text-xs\">\n                            <div class=\"p-3 rounded-lg bg-slate-900 border border-slate-700\">\n                                <span class=\"font-bold text-violet-300\">1. generace – Tricyklická antidepresiva (TCA): Amitriptylin, Imipramin, Klomipramin, Dosulepin</span>\n                                <p class=\"text-slate-300 mt-1\"><strong>Mechanismus:</strong> Neselektivní blokáda SERT a NET + blokáda H1, M1 a alfa-1 receptorů. <strong>NÚ:</strong> Anticholinergní (sucho v ústech, obstipace, retence moči, glaukom), sedace, ortostatická hypotenze. <strong>Kardiotoxicita:</strong> Prodloužení QTc, arytmie – letální při předávkování (vysoké riziko suicidia!).</p>\n                            </div>\n                            <div class=\"p-3 rounded-lg bg-slate-900 border border-slate-700\">\n                                <span class=\"font-bold text-emerald-400\">3. generace – SSRI (Léky 1. volby): Citalopram, Escitalopram, Sertralin, Fluoxetin, Paroxetin, Fluvoxamin</span>\n                                <p class=\"text-slate-300 mt-1\"><strong>Mechanismus:</strong> Selektivní inhibice zpětného vychytávání serotoninu (SERT). <strong>Indikace:</strong> Depresivní poruchy, panická porucha, GAD, OCD, PTSD, sociální fobie. <strong>NÚ:</strong> Gastrointestinální (nauzea, průjem), sexuální dysfunkce (pokles libida, anorgasmie, opožděná ejakulace), vnitřní tenze/úzkost v úvodu, riziko hyponatrémie (SIADH) u seniorů.</p>\n                            </div>\n                            <div class=\"p-3 rounded-lg bg-slate-900 border border-slate-700\">\n                                <span class=\"font-bold text-cyan-300\">4. generace a novější skupiny:</span>\n                                <ul class=\"list-disc ml-4 mt-1 space-y-1 text-slate-300\">\n                                    <li><strong>SNRI (Venlafaxin, Duloxetin):</strong> Duální blokáda SERT + NET. Účinnější u těžkých depresí a neuropatické bolesti. NÚ: vzestup krevního tlaku.</li>\n                                    <li><strong>NDRI (Bupropion):</strong> Blokáda NET + DAT. Nemá sexuální NÚ, nezvyšuje hmotnost, vhodný při odvykání kouření. Kontraindikován u epilepsie a poruch příjmu potravy!</li>\n                                    <li><strong>NaSSA (Mirtazapin):</strong> Antagonista alfa-2 autoreceptorů a 5-HT2/3. Silně sedativní (H1 blok), zvyšuje chuť k jídlu a hmotnost. Výborný na insomnii a nechutenství.</li>\n                                    <li><strong>SARI (Trazodon):</strong> Antagonista 5-HT2A a inhibitor SERT. Výborné hypnotikum v nízkých dávkách bez návykovosti.</li>\n                                    <li><strong>Multimodální (Vortioxetin):</strong> Modulace 5-HT receptorů + SERT blokáda. Zlepšuje kognitivní funkce.</li>\n                                    <li><strong>Melatonergní (Agomelatin):</strong> Agonista MT1/MT2 a antagonista 5-HT2C. Upravuje biorytmy, nutno kontrolovat jaterní enzymy!</li>\n                                    <li><strong>Esketamin (Spravato):</strong> Intranazální antagonista NMDA receptorů pro farmakorezistentní depresi – rychlý nástup účinku (hodiny).</li>\n                                </ul>\n                            </div>\n                        </div>\n                    "
          },
          {
            "title": "2. Bezpečnost: Sérotoninový syndrom a syndrom z vysazení",
            "color": "rose",
            "content": "\n                        <div class=\"grid md:grid-cols-2 gap-3 text-xs\">\n                            <div class=\"p-3 rounded-lg bg-rose-950/40 border border-rose-500/40\">\n                                <div class=\"font-bold text-rose-400 mb-1\">🚨 Sérotoninový syndrom (Triáda příznaků)</div>\n                                <p class=\"text-slate-300 mb-1\">Život ohrožující stav z hyperstimulace 5-HT2A/1A receptorů (při kombinaci SSRI + IMAO, tramadol, triptany, třezalka):</p>\n                                <ul class=\"list-disc ml-4 text-slate-300 space-y-0.5\">\n                                    <li><strong>1. Neuromuskulární hyperexcitabilita:</strong> Klonus (indukovaný i spontánní), hyperreflexie, tremor, rigidita.</li>\n                                    <li><strong>2. Autonomní instabilita:</strong> Hyperpyrexie, tachykardie, pocení, mydriáza, průjem.</li>\n                                    <li><strong>3. Alterace mentálního stavu:</strong> Agitovanost, delirium, zmatenost.</li>\n                                </ul>\n                                <p class=\"text-rose-300 font-bold mt-1\">Léčba: Vysadit sérotonergní léky, JIP, chlazení, BZD, cyproheptadin (5-HT antagonista).</p>\n                            </div>\n                            <div class=\"p-3 rounded-lg bg-slate-900 border border-slate-700\">\n                                <div class=\"font-bold text-amber-400 mb-1\">⚠️ Syndrom z vysazení (Discontinuation syndrome)</div>\n                                <p class=\"text-slate-300 mb-1\">Při náhlém přerušení SSRI/SNRI s krátkým poločasem (zejména Paroxetin, Venlafaxin):</p>\n                                <p class=\"text-slate-300\">Závratě, pocity elektrických výbojů do hlavy ('brain zaps'), nauzea, insomnie, parestézie, úzkost. <em>Prevence:</em> Pomalé snižování dávky po dobu týdnů až měsíců.</p>\n                            </div>\n                        </div>\n                    "
          }
        ]
      },
      "recall": {
        "scenarios": [
          {
            "id": "q08-r1",
            "title": "Kazuistika 8: Výběr antidepresiva u polymorbidního pacienta",
            "question": "58letý manažer se léčí pro depresi. Stěžuje si na výraznou nespavost, úbytek hmotnosti (nechutenství) a obává se sexuálních nežádoucích účinků, protože po předchozím citalopramu trpěl úplnou erektilní dysfunkcí a anorgasmií. Které antidepresivum je pro něj ideální volbou?",
            "answer": "Ideální volbou je Mirtazapin (NaSSA) nebo Bupropion (NDRI) či Trazodon na noc. Mirtazapin podpoří spánek, zvýší chuť k jídlu a nemá sexuální nežádoucí účinky. Bupropion by byl také bezpečný stran sexuálních funkcí, ale nepomůže se spánkem.",
            "pearl": "Antidepresiva bez sexuálních nežádoucích účinků: Bupropion, Mirtazapin, Vortioxetin, Trazodon, Agomelatin."
          }
        ]
      },
      "cards": [
        {
          "id": "c08-1",
          "front": "Jaká je klasická triáda příznaků sérotoninového syndromu?",
          "back": "1. Neuromuskulární hyperexcitabilita (klonus, hyperreflexie), 2. Autonomní dysregulace (hyperpyrexie, tachykardie, pocení), 3. Změna mentálního stavu (agitovanost, delirium).",
          "hint": "Sérotoninová toxicita",
          "category": "farmakologie"
        },
        {
          "id": "c08-2",
          "front": "Proč je bupropion kontraindikován u pacientů s epilepsií a poruchami příjmu potravy?",
          "back": "Snižuje záchvatový práh (zvyšuje riziko epileptických paroxysmů), obzvláště u pacientů s malnutricí a elektrolytovými dysbalancemi při anorexii/bulimii.",
          "hint": "Záchvatový práh",
          "category": "farmakologie"
        },
        {
          "id": "c08-3",
          "front": "Proč jsou tricyklická antidepresiva (TCA) vysoce nebezpečná při předávkování?",
          "back": "Způsobují fatální kardiotoxicitu (blokáda sodíkových kanálů, prodloužení QRS/QTc, maligní komorové arytmie) a těžké anticholinergní delirium.",
          "hint": "Kardiotoxicita",
          "category": "farmakologie"
        }
      ],
      "quiz": [
        {
          "id": "q08-test1",
          "question": "Které antidepresivum se vyznačuje velmi dlouhým biologickým poločasem aktivního metabolitu (až 7–14 dní), což usnadňuje vysazení bez syndromu z odnětí, ale vyžaduje dlouhý wash-out period při změně léku?",
          "options": [
            "Paroxetin",
            "Fluoxetin",
            "Venlafaxin",
            "Fluvoxamin"
          ],
          "correctIndex": 1,
          "explanation": "Fluoxetin a jeho aktivní metabolit norfluoxetin mají extrémně dlouhý poločas eliminace (až 2 týdny)."
        },
        {
          "id": "q08-test2",
          "question": "Které z následujících antidepresiv působí jako agonista melatonergních receptorů MT1/MT2 a antagonista 5-HT2C a vyžaduje pravidelné kontroly jaterních testů?",
          "options": [
            "Vortioxetin",
            "Agomelatin",
            "Mirtazapin",
            "Trazodon"
          ],
          "correctIndex": 1,
          "explanation": "Agomelatin synchronizuje cirkadiánní rytmy a při jeho užívání je nutný monitoring ALT/AST v týdnech 3, 6, 12 a 24."
        }
      ]
    },
    {
      "id": "q09-antipsychotika",
      "number": 9,
      "title": "Antipsychotika (mechanismus účinku, dělení, účinnost, snášenlivost, bezpečnost)",
      "shortDesc": "Dopaminová hypotéza (D2 blokáda). 1. generace FGA (sedativní vs. incizivní, EPS: akutní dystonie, parkinsonoid, akatizie, tardivní dyskineze). 2. generace SGA (SDA, MARTA, klozapin a agranulocytóza, metabolický syndrom). 3. generace (parciální D2 agonisté). Maligní neuroleptický syndrom (MNS).",
      "category": "farmakologie",
      "badge": "Psychofarmakologie",
      "badgeColor": "emerald",
      "theory": {
        "banner": {
          "tag": "Psychofarmakologie III",
          "title": "Antipsychotika (Neuroleptika)",
          "text": "Antipsychotika jsou základními léčivy psychotických poruch (schizofrenie, schizoafektivní porucha, psychotická mánie/deprese, deliria). Primárním mechanismem je antagonistické působení na dopaminových D2 receptorech v mezolimbické dráze."
        },
        "sections": [
          {
            "title": "1. Dělení antipsychotik dle generací a receptorového profilu",
            "color": "emerald",
            "content": "\n                        <div class=\"space-y-3 text-xs\">\n                            <div class=\"p-3 rounded-lg bg-slate-900 border border-slate-700\">\n                                <span class=\"font-bold text-amber-300\">1. generace – Typická antipsychotika (FGA / klasická neuroleptika)</span>\n                                <p class=\"text-slate-300 mt-1\">Čistí antagonisté D2 receptorů. <strong>Sedativní:</strong> Chlorpromazin, Levomepromazin, Chlorprothixen (výrazný útlum, antihistaminový a alfa-1 lytický efekt). <strong>Incizivní:</strong> Haloperidol, Melperon, Flupentixol (vysoká D2 afinita, silný antipsychotický účinek na bludy a halucinace, ale vysoké riziko extrapyramidových nežádoucích účinků EPS).</p>\n                            </div>\n                            <div class=\"p-3 rounded-lg bg-slate-900 border border-slate-700\">\n                                <span class=\"font-bold text-emerald-300\">2. generace – Atypická antipsychotika (SGA)</span>\n                                <p class=\"text-slate-300 mt-1\">Kombinovaná blokáda D2 a 5-HT2A receptorů. Nižší riziko EPS, účinnost i na negativní a afektivní symptomy.</p>\n                                <ul class=\"list-disc ml-4 mt-1 space-y-1 text-slate-300\">\n                                    <li><strong>SDA (Serotonin-dopaminoví antagonisté):</strong> Risperidon, Paliperidon, Ziprasidon, Lurasidon. NÚ: hyperprolaktinémie (galaktorea, amenorea), EPS při vyšších dávkách.</li>\n                                    <li><strong>MARTA (Multireceptoroví antagonisté):</strong> Olanzapin, Klozapin, Quetiapin. Vysoká účinnost, sedace, ale <strong>vysoké riziko metabolického syndromu</strong> (výrazný váhový přírůstek, dyslipidémie, diabetes mellitus).</li>\n                                    <li><strong>Selektivní D2/D3 antagonisté:</strong> Amisulprid, Sulpirid (v nízkých dávkách aktivují a léčí negativní příznaky).</li>\n                                </ul>\n                            </div>\n                            <div class=\"p-3 rounded-lg bg-slate-900 border border-slate-700\">\n                                <span class=\"font-bold text-cyan-300\">3. generace – Parciální agonisté D2/D3 (Dopaminoví stabilizátory)</span>\n                                <p class=\"text-slate-300 mt-1\"><strong>Aripiprazol, Cariprazin, Brexpiprazol:</strong> V hyperdopaminergním stavu působí jako funkční antagonisté, v hypodopaminergním jako agonisté. Metabolicky neutrální, bez sedace a bez hyperprolaktinémie. NÚ: přechodná akatizie a nauzea.</p>\n                            </div>\n                        </div>\n                    "
          },
          {
            "title": "2. Klozapin – Zlatý standard u farmakorezistence",
            "color": "amber",
            "content": "\n                        <div class=\"p-3 rounded-lg bg-amber-950/30 border border-amber-500/30 text-xs\">\n                            <strong class=\"text-amber-400\">Klozapin:</strong> Nejúčinnější antipsychotikum, indikované u <strong>farmakorezistentní schizofrenie</strong> (selhání alespoň 2 různých AP podávaných v adekvátní dávce po dobu 6–8 týdnů) a u schizofrenie s chronickou suicidalitou.\n                            <br><strong class=\"text-rose-400\">Rizika:</strong>\n                            <ul class=\"list-disc ml-4 mt-1 space-y-0.5 text-slate-300\">\n                                <li><strong>Agranulocytóza (1 %):</strong> Vyžaduje přísné monitorování krevního obrazu (týdně prvních 18 týdnů, poté měsíčně celoživotně!).</li>\n                                <li>Myokarditida a kardiomyopatie.</li>\n                                <li>Snížení záchvatového prahu (epilepsie), těžká zácpa (paralytický ileus), hypersalivace.</li>\n                            </ul>\n                        </div>\n                    "
          },
          {
            "title": "3. Nežádoucí účinky (EPS) a Maligní neuroleptický syndrom (MNS)",
            "color": "rose",
            "content": "\n                        <div class=\"grid md:grid-cols-2 gap-3 text-xs\">\n                            <div class=\"p-3 rounded-lg bg-slate-900 border border-slate-700\">\n                                <div class=\"font-bold text-violet-300 mb-1\">Extrapyramidové syndromy (EPS)</div>\n                                <ul class=\"list-disc ml-4 text-slate-300 space-y-1\">\n                                    <li><strong>Akutní dystonie:</strong> Spasmy šíje (torticollis), okulogyrní krize (stáčení bulbů vzhůru), laryngospasmus (časné – hodiny až dny). Léčba: anticholinergikum (Biperiden i.m./i.v.).</li>\n                                    <li><strong>Parkinsonoid:</strong> Rigidita (fenomén ozubeného kola), klidový tremor, hypokineze.</li>\n                                    <li><strong>Akatizie:</strong> Nesnesitelný motorický neklid končetin, nutkání chodit. Léčba: propranolol, BZD.</li>\n                                    <li><strong>Tardivní dyskineze:</strong> Pozdní, často ireverzibilní mimovolní choreiformní a orofaciální pohyby (žvýkání, vyplazování jazyka).</li>\n                                </ul>\n                            </div>\n                            <div class=\"p-3 rounded-lg bg-rose-950/40 border border-rose-500/40\">\n                                <div class=\"font-bold text-rose-400 mb-1\">🚨 Maligní neuroleptický syndrom (MNS)</div>\n                                <p class=\"text-slate-300 mb-1\">Život ohrožující idiosynkratická reakce na blokádu D2 (mortalita až 10–20 %):</p>\n                                <ul class=\"list-disc ml-4 text-slate-300 space-y-0.5\">\n                                    <li><strong>Tetráda:</strong> Hyperpyrexie (>40 °C), Generalizovaná rigidita ('olověná trubka'), Vegetativní instabilita (tachykardie, labilní TK, profúzní pocení), Alterace vědomí (stupor až kóma).</li>\n                                    <li><strong>Laboratoř:</strong> Masivní elevace kreatinkinázy (CK) z rhabdomyolýzy, leukocytóza.</li>\n                                    <li><strong>Léčba:</strong> Okamžité vysazení AP, JIP, Dantrolen (myorelaxans), Bromokriptin (dopaminergní agonista), intenzivní chlazení a hydratace.</li>\n                                </ul>\n                            </div>\n                        </div>\n                    "
          }
        ]
      },
      "recall": {
        "scenarios": [
          {
            "id": "q09-r1",
            "title": "Kazuistika 9: Akutní dystonie po aplikaci haloperidolu",
            "question": "22letý muž byl pro akutní psychotický neklid léčen intramuskulárním haloperidolem 5 mg. Po 4 hodinách dochází k bolestivému stáčení hlavy do strany (torticollis), křečovitému stáčení očí ke stropu (okulogyrní krize) a dysartrii. Pacient je při plném vědomí a vyděšený. Jaký je okamžitý terapeutický zásah?",
            "answer": "Jedná se o akutní polékovou extrapyramidovou dystonii. Okamžitou léčbou volby je pomalá intravenózní nebo intramuskulární aplikace centrálního anticholinergika (Biperiden 2,5–5 mg i.v./i.m. – Akineton). Úleva nastupuje během několika minut.",
            "pearl": "Profylaxe: U mladých mužů léčených incizivními FGA je vhodné zvážit současné přechodné podávání anticholinergik k prevenci dystonických krizí."
          }
        ]
      },
      "cards": [
        {
          "id": "c09-1",
          "front": "Jaká je tetráda příznaků Maligního neuroleptického syndromu (MNS)?",
          "back": "1. Hyperpyrexie (>40 °C), 2. Svalová rigidita ('olověná trubka'), 3. Autonomní instabilita (labilní TK, tachykardie, pocení), 4. Alterace vědomí + elevace CK a leukocytóza.",
          "hint": "MNS tetráda",
          "category": "farmakologie"
        },
        {
          "id": "c09-2",
          "front": "Které antipsychotikum je lékem volby u farmakorezistentní schizofrenie a jaké má hlavní život ohrožující riziko?",
          "back": "Klozapin. Hlavním rizikem je agranulocytóza (vyžaduje povinné pravidelné kontroly krevního obrazu).",
          "hint": "Zlatý standard",
          "category": "farmakologie"
        },
        {
          "id": "c09-3",
          "front": "Která atypická antipsychotika ze skupiny MARTA mají nejvyšší riziko metabolického syndromu (váhový přírůstek, diabetes)?",
          "back": "Olanzapin a Klozapin.",
          "hint": "Metabolický profil",
          "category": "farmakologie"
        }
      ],
      "quiz": [
        {
          "id": "q09-test1",
          "question": "Které antipsychotikum působí jako parciální agonista dopaminových D2 receptorů (3. generace) a nevyvolává hyperprolaktinémii ani výrazný váhový přírůstek?",
          "options": [
            "Haloperidol",
            "Aripiprazol",
            "Risperidon",
            "Olanzapin"
          ],
          "correctIndex": 1,
          "explanation": "Aripiprazol je dopaminový stabilizátor / parciální agonista D2 receptorů 3. generace s neutrálním metabolickým profilem."
        },
        {
          "id": "q09-test2",
          "question": "Který lék je specifickým antidotem k promptnímu zaléčení akutní polékové dystonie (např. po haloperidolu)?",
          "options": [
            "Biperiden (anticholinergikum)",
            "Flumazenil",
            "Naloxon",
            "Propranolol"
          ],
          "correctIndex": 0,
          "explanation": "Biperiden (Akineton) blokuje centrální muskarinové receptory a obnovuje rovnováhu mezi dopaminem a acetylcholinem v bazálních gangliích."
        }
      ]
    },
    {
      "id": "q10-stabilizatory-anxiolytika-hypnotika",
      "number": 10,
      "title": "Stabilizátory nálady (tymoprofylaktika), anxiolytika a hypnotika",
      "shortDesc": "Lithium (úzké terapeutické okno 0,6-1,0 mmol/l, toxicita, TDM, antisuicidální efekt). Antiepileptika (Valproát, Karbamazepin, Lamotrigin a SJS). Benzodiazepiny (GABA-A, riziko závislosti, tolerance, flumazenil). Nebenzodiazepinová anxiolytika (buspiron, pregabalin) a Z-hypnotika.",
      "category": "farmakologie",
      "badge": "Psychofarmakologie",
      "badgeColor": "emerald",
      "theory": {
        "banner": {
          "tag": "Psychofarmakologie IV",
          "title": "Tymoprofylaktika a léčiva úzkosti a spánku",
          "text": "Stabilizátory nálady předcházejí relapsům mánie i deprese u bipolární afektivní poruchy (BAP). Anxiolytika a hypnotika tlumí úzkost a navozují spánek modulací GABA-ergní inhibice."
        },
        "sections": [
          {
            "title": "1. Stabilizátory nálady (Tymoprofylaktika)",
            "color": "emerald",
            "content": "\n                        <div class=\"space-y-3 text-xs\">\n                            <div class=\"p-3 rounded-lg bg-slate-900 border border-slate-700\">\n                                <span class=\"font-bold text-violet-300\">Lithium (Lithium carbonicum – Li2CO3): Zlatý standard u BAP</span>\n                                <p class=\"text-slate-300 mt-1\">Lék 1. volby v profylaxi bipolární poruchy, má jednoznačně prokázaný <strong>antisuicidální účinek</strong>.</p>\n                                <ul class=\"list-disc ml-4 text-slate-300 space-y-0.5\">\n                                    <li><strong>Terapeutické okno:</strong> 0,6–0,8 (až 1,0) mmol/l pro udržovací léčbu; 0,8–1,2 mmol/l v akutní mánii. Odběr krve se provádí za <strong>12 hodin po večerní dávce</strong>.</li>\n                                    <li><strong>Intoxikace lithiem (> 1,5 mmol/l):</strong> Hrubý tremor, ataxie, dysartrie, zvracení, průjem, zmatenost, oligurie až křeče a kóma. Léčba: vysazení, hydratace s NaCl, při hladině > 2,5–3,0 mmol/l <strong>urgentní hemodialýza</strong>!</li>\n                                    <li><strong>Dlouhodobý monitoring:</strong> Renální funkce (urea, kreatinin, eGFR – riziko nefrogénního diabetes insipidus a tubulointersticiální nefritidy), funkce štítné žlázy (TSH – riziko hypotyreózy a strumy), iontogram, EKG.</li>\n                                </ul>\n                            </div>\n                            <div class=\"p-3 rounded-lg bg-slate-900 border border-slate-700\">\n                                <span class=\"font-bold text-cyan-300\">Antiepileptika s tymoprofylaktickým účinkem</span>\n                                <ul class=\"list-disc ml-4 mt-1 space-y-1 text-slate-300\">\n                                    <li><strong>Valproát (kyselina valproová):</strong> Výborný u mánie a smíšených epizod. NÚ: hepatotoxicita, teratogenita (rozštěpy neurální trubice – absolutně nevhodný pro fertilní ženy!), váhový přírůstek, alopecie. TDM nutné.</li>\n                                    <li><strong>Lamotrigin:</strong> Lék volby pro <strong>bipolární depresi</strong> a její profylaxi. Minimální NÚ, nezvyšuje hmotnost. <em>Riziko:</em> Závažné kožní reakce (Stevens-Johnsonův syndrom) ➔ nutná <strong>velmi pomalá titrace dávky</strong> (začínat 25 mg/den a zvyšovat po 2 týdnech).</li>\n                                    <li><strong>Karbamazepin:</strong> Alternativa u mánie, silný induktor CYP3A4, riziko hyponatrémie a agranulocytózy.</li>\n                                </ul>\n                            </div>\n                        </div>\n                    "
          },
          {
            "title": "2. Anxiolytika (Benzodiazepiny vs. Nebenzodiazepinová léčiva)",
            "color": "teal",
            "content": "\n                        <div class=\"grid md:grid-cols-2 gap-3 text-xs\">\n                            <div class=\"p-3 rounded-lg bg-slate-900 border border-slate-700\">\n                                <div class=\"font-bold text-amber-400 mb-1\">Benzodiazepiny (BZD)</div>\n                                <p class=\"text-slate-300\"><strong>Mechanismus:</strong> Pozitivní alosterické modulátory GABA-A receptoru (zvyšují frekvenci otevírání chloridového kanálu).</p>\n                                <p class=\"text-slate-300 mt-1\"><strong>5 hlavních účinků:</strong> Anxiolytický, Sedativní/hypnotický, Myorelaxační, Antikonvulzivní, Amnestický.</p>\n                                <p class=\"text-slate-300 mt-1\"><strong>Léčiva:</strong> Krátkodobá (Oxazepam, Alprazolam), Dlouhodobá (Diazepam, Klonazepam).</p>\n                                <p class=\"text-rose-300 font-bold mt-1\">Riziko: Tolerance, těžká závislost, abstinenční syndrom, útlum dechu. Podávat max. 4–6 týdnů! Antidotum: Flumazenil (Anexate).</p>\n                            </div>\n                            <div class=\"p-3 rounded-lg bg-slate-900 border border-slate-700\">\n                                <div class=\"font-bold text-emerald-400 mb-1\">Nenávyková anxiolytika (Bez rizika závislosti)</div>\n                                <ul class=\"list-disc ml-4 text-slate-300 space-y-1\">\n                                    <li><strong>Antidepresiva (SSRI / SNRI):</strong> Léky 1. volby pro dlouhodobou léčbu všech úzkostných poruch.</li>\n                                    <li><strong>Pregabalin:</strong> Ligand alfa-2-delta podjednotky napěťově řízených Ca kanálů. Schválen pro generalizovanou úzkostnou poruchu (GAD).</li>\n                                    <li><strong>Buspiron:</strong> Parciální agonista 5-HT1A receptorů, nástup účinku za 2–4 týdny.</li>\n                                    <li><strong>Hydroxyzin:</strong> Antihistaminikum s anxiolytickým a sedativním účinkem.</li>\n                                </ul>\n                            </div>\n                        </div>\n                    "
          },
          {
            "title": "3. Hypnotika",
            "color": "cyan",
            "content": "\n                        <ul class=\"list-disc ml-5 space-y-1 text-xs text-slate-300\">\n                            <li><strong>Z-hypnotika (Zolpidem, Zopiklon, Zaleplon):</strong> Selektivní agonisté alfa-1 podjednotky GABA-A receptoru. Rychlý nástup, zkracují usínání, méně narušují architekturu spánku, ale i u nich existuje riziko tolerance a závislosti při dlouhodobém užívání!</li>\n                            <li><strong>Sedativní antidepresiva v nízké dávce:</strong> Trazodon (25–100 mg na noc), Mirtazapin (15–30 mg na noc) – nenávyková volba při chronické insomnii.</li>\n                            <li><strong>Melatonin a melatonergní látky (Circadin):</strong> Vhodné u seniorů a poruch cirkadiánního rytmu.</li>\n                        </ul>\n                    "
          }
        ]
      },
      "recall": {
        "scenarios": [
          {
            "id": "q10-r1",
            "title": "Kazuistika 10: Intoxikace lithiem při dehydrataci",
            "question": "48letý pacient léčený pro bipolární afektivní poruchu lithiem (Li2CO3 900 mg/den) prodělal letní gastroenteritidu s profúzními průjmy a zvracením. Na pohotovost přichází pro výrazný třes rukou, nejistou chůzi (ataxii), svalové záškuby a zmatenost. Hladina lithia v séru je 2,4 mmol/l. Jaký je mechanismus intoxikace a léčba?",
            "answer": "Při dehydrataci a ztrátách sodíku proximální tubulus ledvin kompenzatorně zvyšuje reabsorpci Na+ i Li+ (které mají stejný transportér), což vedlo k toxické kumulaci lithia. Léčba: okamžité vysazení lithia, intenzivní i.v. infuze fyziologického roztoku (0,9% NaCl) k forsírované natriuréze a eliminaci lithia, monitorování vitálních funkcí a při progresi či hladině > 2,5–3,0 mmol/l provedení hemodialýzy.",
            "pearl": "Lékové interakce lithia: NSAID (ibuprofen), ACE-inhibitory a thiazidová diuretika snižují vylučování lithia a mohou vyvolat těžkou intoxikaci!"
          }
        ]
      },
      "cards": [
        {
          "id": "c10-1",
          "front": "Jaké je cílové terapeutické rozmezí plazmatické hladiny lithia pro udržovací profylaktickou léčbu BAP?",
          "back": "0,6 až 0,8 (maximálně 1,0) mmol/l (odběr přesně 12 hodin po poslední dávce).",
          "hint": "TDM Lithia",
          "category": "farmakologie"
        },
        {
          "id": "c10-2",
          "front": "Jaké je specifické antidotum při předávkování benzodiazepiny?",
          "back": "Flumazenil (Anexate) – kompetitivní antagonista GABA-A receptoru podávaný i.v.",
          "hint": "BZD antagonista",
          "category": "farmakologie"
        },
        {
          "id": "c10-3",
          "front": "Proč je nutné u lamotriginu zahajovat léčbu velmi pomalou titrací dávky?",
          "back": "K prevenci vzniku těžkých, život ohrožujících kožních nežádoucích účinků (Stevens-Johnsonův syndrom a toxická epidermální nekrolýza TEN).",
          "hint": "Kožní toxicita",
          "category": "farmakologie"
        }
      ],
      "quiz": [
        {
          "id": "q10-test1",
          "question": "Které z následujících léčiv má jednoznačně klinickými studiemi prokázaný specifický antisuicidální efekt u bipolární poruchy?",
          "options": [
            "Diazepam",
            "Lithium",
            "Zolpidem",
            "Karbamazepin"
          ],
          "correctIndex": 1,
          "explanation": "Lithium je jediným stabilizátorem nálady s robustně prokázaným přímým antisuicidálním účinkem u pacientů s afektivními poruchami."
        },
        {
          "id": "q10-test2",
          "question": "Užívání nesteroidních antiflogistik (např. ibuprofenu) u pacienta léčeného lithiem vede k:",
          "options": [
            "Zvýšení vylučování lithia a ztrátě jeho účinnosti",
            "Snížení renální clearance lithia s rizikem závažné intoxikace",
            "Zvýšení rizika hyperkalémie bez vlivu na hladinu lithia",
            "Neutralizaci vstřebávání lithia v žaludku"
          ],
          "correctIndex": 1,
          "explanation": "NSAID inhibují renální syntézu prostaglandinů, snižují glomerulární filtraci a clearance lithia, což vede k nebezpečnému vzestupu jeho hladiny v krvi."
        }
      ]
    },
    {
      "id": "q11-neuroprotektiva-kognitiva",
      "number": 11,
      "title": "Neuroprotektiva (včetně kognitiv)",
      "shortDesc": "Kognitiva v léčbě demencí (Alzheimerova nemoc). Inhibitory acetylcholinesterázy iAChE (Donepezil, Rivastigmin, Galantamin). NMDA antagonista (Memantin). Nootropika (Piracetam), antioxidanty a podpůrná neuroprotekce.",
      "category": "farmakologie",
      "badge": "Psychofarmakologie",
      "badgeColor": "emerald",
      "theory": {
        "banner": {
          "tag": "Psychofarmakologie V",
          "title": "Kognitiva a neuroprotektivní látky",
          "text": "Kognitiva představují farmakoterapii zaměřenou na zpomalení progrese kognitivního deficitu u demencí (zejména Alzheimerovy nemoci). Působí na cholinergní deficit a glutamátergní excitotoxicitu."
        },
        "sections": [
          {
            "title": "1. Inhibitory acetylcholinesterázy (iAChE)",
            "color": "emerald",
            "content": "\n                        <div class=\"p-3 rounded-lg bg-slate-900 border border-slate-700 text-xs mb-3\">\n                            <span class=\"font-bold text-emerald-400\">Mechanismus účinku:</span> Reverzibilní inhibice enzymu acetylcholinesterázy (AChE), čímž zvyšují dostupnost acetylcholinu v synaptických štěrbinách mozkové kůry a hipokampu (kompenzace zániku cholinergních neuronů ncl. basalis Meynerti).\n                            <br><span class=\"font-bold text-emerald-400\">Indikace:</span> <strong>Lehká až středně těžká Alzheimerova demence</strong> (MMSE 20–13 bodů), vaskulární demence a demence s Lewyho tělísky.\n                            <div class=\"grid md:grid-cols-3 gap-2 mt-2\">\n                                <div class=\"bg-slate-800 p-2 rounded\"><strong>Donepezil:</strong> Selektivní inhibitor AChE, podává se 1x denně večer (5–10 mg).</div>\n                                <div class=\"bg-slate-800 p-2 rounded\"><strong>Rivastigmin:</strong> Duální inhibitor AChE i butyrylcholinesterázy (BuChE). Výhodná <strong>transdermální náplast</strong> (nižší GIT nežádoucí účinky).</div>\n                                <div class=\"bg-slate-800 p-2 rounded\"><strong>Galantamin:</strong> Inhibitor AChE + alosterický modulátor nikotinových receptorů.</div>\n                            </div>\n                            <div class=\"mt-2 text-slate-300\">\n                                <strong>Nežádoucí účinky (cholinergní):</strong> Nauzea, zvracení, průjem, nechutenství, svalové křeče, <strong>bradykardie</strong>, synkopy (nutné EKG před zahájením!).\n                            </div>\n                        </div>\n                    "
          },
          {
            "title": "2. NMDA receptorový antagonista (Memantin)",
            "color": "teal",
            "content": "\n                        <div class=\"p-3 rounded-lg bg-slate-900 border border-slate-700 text-xs\">\n                            <span class=\"font-bold text-cyan-300\">Memantin (Ebixa):</span> Neomezený nekompetitivní antagonista NMDA glutamátových receptorů se střední afinitou.\n                            <br><span class=\"font-bold text-cyan-300\">Mechanismus:</span> Chrání neurony před chronickou <strong>glutamátovou excitotoxicitou</strong> a patologickým vtokem Ca2+ do neuronů, aniž by blokoval fyziologický přenos signálu.\n                            <br><span class=\"font-bold text-cyan-300\">Indikace:</span> <strong>Středně těžká až těžká Alzheimerova demence</strong> (MMSE 19–3 body) – samostatně nebo v kombinaci s iAChE.\n                            <br><span class=\"font-bold text-cyan-300\">Snášenlivost:</span> Velmi dobrá, NÚ minimální (závratě, bolest hlavy, obstipace).\n                        </div>\n                    "
          },
          {
            "title": "3. Nootropika a podpůrná neuroprotektiva",
            "color": "indigo",
            "content": "\n                        <ul class=\"list-disc ml-5 space-y-1 text-xs text-slate-300\">\n                            <li><strong>Nootropika (Piracetam):</strong> Zlepšují reologii krve, metabolismus glukózy a energetický obrat v neuronech. Důkazy EBM pro léčbu demencí jsou slabé, používají se spíše jako podpůrná terapie u lehkých kognitivních poruch (MCI).</li>\n                            <li><strong>Extrakt z Ginkgo biloba (EGb 761):</strong> Antioxidační účinek, zlepšení mikrocirkulace.</li>\n                            <li><strong>Vazoaktivní látky (Vinpocetin, Dihydroergotoxin):</strong> Vazodilatace mozkového řečiště.</li>\n                        </ul>\n                    "
          }
        ]
      },
      "recall": {
        "scenarios": [
          {
            "id": "q11-r1",
            "title": "Kazuistika 11: Zahájení léčby kognitivy u Alzheimerovy nemoci",
            "question": "74letá pacientka s postupným zhoršováním krátkodobé paměti, časové dezorientace a potížemi s vařením dosáhla v testu MMSE 17 bodů. Byla diagnostikována lehká až středně těžká Alzheimerova demence. Jaká kognitiva jsou indikována a jaké vyšetření je nutné provést před nasazením?",
            "answer": "Indikován je inhibitor acetylcholinesterázy (Donepezil 5–10 mg p.o., Rivastigmin v náplasti nebo Galantamin). Před zahájením léčby je nutné provést EKG k vyloučení závažné bradykardie nebo síňokomorové blokády (AV blokády), které jsou kontraindikací pro cholinergní stimulaci.",
            "pearl": "Při progresi onemocnění do středně těžkého až těžkého stádia (MMSE < 14 bodů) se k iAChE přidává Memantin v kombinované terapii."
          }
        ]
      },
      "cards": [
        {
          "id": "c11-1",
          "front": "Jaký je mechanismus účinku memantinu v léčbě Alzheimerovy nemoci?",
          "back": "Nekompetitivní antagonista NMDA glutamátových receptorů – chrání neurony před glutamátovou excitotoxicitou a influxem vápníku.",
          "hint": "NMDA antagonista",
          "category": "farmakologie"
        },
        {
          "id": "c11-2",
          "front": "Které 3 inhibitory acetylcholinesterázy (iAChE) jsou schváleny pro léčbu Alzheimerovy demence?",
          "back": "1. Donepezil, 2. Rivastigmin (i ve formě náplasti), 3. Galantamin.",
          "hint": "iAChE trojice",
          "category": "farmakologie"
        },
        {
          "id": "c11-3",
          "front": "Který závažný kardiální nežádoucí účinek mohou vyvolat inhibitory acetylcholinesterázy?",
          "back": "Bradykardii, sinoatriální a atrioventrikulární (AV) blokády a synkopy.",
          "hint": "Kardiální NÚ",
          "category": "farmakologie"
        }
      ],
      "quiz": [
        {
          "id": "q11-test1",
          "question": "Pacient s pokročilou Alzheimerovou demencí má skóre MMSE 11 bodů. Který z následujících léků je specificky indikován pro středně těžké až těžké stádium demence?",
          "options": [
            "Piracetam",
            "Memantin",
            "Diazepam",
            "Citalopram"
          ],
          "correctIndex": 1,
          "explanation": "Memantin je indikován pro středně těžké až těžké stádium Alzheimerovy nemoci (MMSE 19–3 body)."
        },
        {
          "id": "q11-test2",
          "question": "Které kognitivum je dostupné ve formě transdermální náplasti, což minimalizuje gastrointestinální nežádoucí účinky a zlepšuje adherenci?",
          "options": [
            "Donepezil",
            "Rivastigmin",
            "Memantin",
            "Galantamin"
          ],
          "correctIndex": 1,
          "explanation": "Rivastigmin ve formě transdermální náplasti zajišťuje kontinuální absorpci a významně snižuje incidenci nauzey a zvracení."
        }
      ]
    },
    {
      "id": "q12-psychofarmaka-deti-stimulancia",
      "number": 12,
      "title": "Psychofarmakoterapie v dětském věku (zásady, doporučená léčiva, psychostimulancia)",
      "shortDesc": "Specifika farmakokinetiky a etiky u dětí. Léčba ADHD: Psychostimulancia (Methylfenidát / Ritalin, Concerta), Nestimulancia (Atomoxetin, Guanfacin). Schválená antidepresiva (Fluoxetin od 8 let, Sertralin) a antipsychotika (Risperidon, Aripiprazol). Black-box warning.",
      "category": "farmakologie",
      "badge": "Psychofarmakologie",
      "badgeColor": "emerald",
      "theory": {
        "banner": {
          "tag": "Psychofarmakologie VI",
          "title": "Pedopsychiatrická farmakoterapie a stimulancia",
          "text": "Farmakoterapie v dětské a dorostové psychiatrii má přísná indikační kritéria. Vždy je součástí komplexního bio-psycho-sociálního přístupu a první volbou bývají psychoterapeutické, rodinné a režimové intervence."
        },
        "sections": [
          {
            "title": "1. Principy a specifika farmakoterapie u dětí",
            "color": "emerald",
            "content": "\n                        <ul class=\"list-disc ml-5 space-y-1 text-xs text-slate-300\">\n                            <li><strong>Odlišná farmakokinetika:</strong> Rychlejší jaterní metabolismus a renální clearance, vyšší podíl tělesné vody, nižší podíl tuku ➔ často nutnost přepočtu na kg hmotnosti nebo m2 tělesného povrchu a častější dávkování.</li>\n                            <li><strong>Informovaný souhlas:</strong> Vždy je nutný souhlas zákonného zástupce + přiměřené poučení dítěte (tzv. assent).</li>\n                            <li><strong>Omezená registrace (Off-label):</strong> Mnoho psychofarmak nemá formální registraci pro dětský věk.</li>\n                            <li><strong>Black-box warning u antidepresiv:</strong> U dětí a adolescentů v prvních týdnech léčby SSRI existuje mírně zvýšené riziko suicidálních myšlenek a chování ➔ nutné týdenní kontroly v úvodu léčby!</li>\n                        </ul>\n                    "
          },
          {
            "title": "2. Léčba ADHD (Hyperkinetická porucha)",
            "color": "teal",
            "content": "\n                        <div class=\"grid md:grid-cols-2 gap-3 text-xs\">\n                            <div class=\"p-3 rounded-lg bg-slate-900 border border-slate-700\">\n                                <div class=\"font-bold text-emerald-400 mb-1\">Psychostimulancia (Léky 1. volby)</div>\n                                <strong class=\"text-violet-300\">Methylfenidát (Ritalin – s okamžitým uvolňováním, Concerta – s prodlouženým uvolňováním 12h):</strong>\n                                <p class=\"text-slate-300 mt-1\"><strong>Mechanismus:</strong> Blokáda zpětného vychytávání dopaminu a noradrenalinu (DAT a NET inhibitor) v prefrontálním kortexu ➔ zlepšuje exekutivní funkce, pozornost, tlumí hyperaktivitu a impulzivitu.</p>\n                                <p class=\"text-slate-300 mt-1\"><strong>Nežádoucí účinky:</strong> Nechutenství, úbytek na váze, nespavost, tachykardie, mírné zpomalení růstu (nutný monitoring výšky, hmotnosti a TK/pulsu!), provokace tiků.</p>\n                            </div>\n                            <div class=\"p-3 rounded-lg bg-slate-900 border border-slate-700\">\n                                <div class=\"font-bold text-cyan-400 mb-1\">Nestimulační léčiva u ADHD</div>\n                                <ul class=\"list-disc ml-4 text-slate-300 space-y-1\">\n                                    <li><strong>Atomoxetin (Strattera):</strong> Selektivní inhibitor zpětného vychytávání noradrenalinu (NRI). Není návykový, účinek 24 hodin, vhodný při komorbidní úzkosti či ticích. Nástup za 2–4 týdny.</li>\n                                    <li><strong>Guanfacin (Intuniv):</strong> Selektivní agonista postsynaptických alfa-2A adrenergních receptorů v prefrontální kůře.</li>\n                                </ul>\n                            </div>\n                        </div>\n                    "
          },
          {
            "title": "3. Antidepresiva a Antipsychotika v pedopsychiatrii",
            "color": "indigo",
            "content": "\n                        <div class=\"space-y-2 text-xs\">\n                            <div class=\"p-3 rounded-lg bg-slate-900 border border-slate-700\">\n                                <span class=\"font-bold text-violet-300\">Antidepresiva:</span> Lékem první volby u depresivní poruchy u dětí je <strong>Fluoxetin</strong> (schválen od 8 let). U obsedantně-kompulzivní poruchy (OCD) je schválen <strong>Sertralin</strong> (od 6 let) a Fluvoxamin (od 8 let).\n                            </div>\n                            <div class=\"p-3 rounded-lg bg-slate-900 border border-slate-700\">\n                                <span class=\"font-bold text-violet-300\">Antipsychotika:</span> <strong>Risperidon</strong> (schválen od 5 let pro poruchy chování u PAS a mentální retardace s agresivitou), <strong>Aripiprazol</strong> (schválen od 6 let pro tiky/Tourettův syndrom a od 13 let pro schizofrenii).\n                            </div>\n                        </div>\n                    "
          }
        ]
      },
      "recall": {
        "scenarios": [
          {
            "id": "q12-r1",
            "title": "Kazuistika 12: Zahájení léčby ADHD u školáka",
            "question": "9letý chlapec má diagnostikované ADHD s těžkou poruchou pozornosti a hyperaktivitou vedoucí k selhávání ve škole. Po selhání režimových a pedagogicko-psychologických opatření lékař indikuje farmakoterapii methylfenidátem. Jaké tělesné parametry je nutné před léčbou a v jejím průběhu pravidelně monitorovat?",
            "answer": "Před zahájením a pravidelně během léčby methylfenidátem je nutné monitorovat: 1. Tělesnou výšku a hmotnost (pomocí percentilových grafů růstu – pro riziko nechutenství a růstové retardace), 2. Krevní tlak a tepovou frekvenci (kardiální bezpečnost), 3. Výskyt tikových projevů.",
            "pearl": "Lékové prázdniny: U methylfenidátu lze v některých případech zvážit vynechání léku o víkendech a prázdninách pro kompenzaci růstu a chuti k jídlu."
          }
        ]
      },
      "cards": [
        {
          "id": "c12-1",
          "front": "Které antidepresivum ze skupiny SSRI má nejvyšší úroveň důkazů a je schváleno pro léčbu dětské deprese od 8 let?",
          "back": "Fluoxetin.",
          "hint": "Pediatrické SSRI",
          "category": "farmakologie"
        },
        {
          "id": "c12-2",
          "front": "Jaký je mechanismus účinku methylfenidátu u ADHD?",
          "back": "Inhibice zpětného vychytávání dopaminu a noradrenalinu (DAT a NET blokáda) v prefrontální kůře.",
          "hint": "Mechanismus stimulancií",
          "category": "farmakologie"
        },
        {
          "id": "c12-3",
          "front": "Které nestimulační léčivo s 24hodinovým účinkem je indikováno k léčbě ADHD?",
          "back": "Atomoxetin (selektivní inhibitor zpětného vychytávání noradrenalinu NRI).",
          "hint": "Nestimulancium",
          "category": "farmakologie"
        }
      ],
      "quiz": [
        {
          "id": "q12-test1",
          "question": "Které z následujících antipsychotik 2. generace je v ČR schváleno od 5 let věku pro léčbu závažných poruch chování (agresivity) u dětí s autismem a mentální retardací?",
          "options": [
            "Klozapin",
            "Risperidon",
            "Olanzapin",
            "Haloperidol"
          ],
          "correctIndex": 1,
          "explanation": "Risperidon má schválenou indikaci pro krátkodobou léčbu perzistující agresivity u dětí od 5 let s poruchami autistického spektra a mentální retardací."
        },
        {
          "id": "q12-test2",
          "question": "Při zahájení léčby antidepresivy (SSRI) u adolescentů je nutné pacienta i rodiče varovat před:",
          "options": [
            "Okamžitým vznikem těžké lékové závislosti",
            "Přechodným zvýšením suicidálních myšlenek a úzkosti v prvních týdnech léčby",
            "Závažným poškozením ledvin",
            "Rychlou ztrátou zraku"
          ],
          "correctIndex": 1,
          "explanation": "Tzv. black-box warning upozorňuje na riziko aktivace suicidálních myšlenek v úvodu léčby SSRI u dětí a mladých dospělých do 25 let."
        }
      ]
    },
    {
      "id": "q13-nefarmakologicka-biologicka-lecba",
      "number": 13,
      "title": "Nefarmakologická biologická léčba (stimulační metody, léčba světlem a spánková deprivace)",
      "shortDesc": "Elektrokonvulzivní terapie ECT (princip, celková anestezie + myorelaxace, indikace: katatonie, psychotická/suicidální deprese, mánie, KI a bezpečnost). Repetitivní transkraniální magnetická stimulace rTMS (DLPFC). Fototerapie (10 000 luxů u SAD) a spánková deprivace.",
      "category": "biologicka_terapie",
      "badge": "Biologická léčba",
      "badgeColor": "amber",
      "theory": {
        "banner": {
          "tag": "Biologická terapie",
          "title": "Moderní neurostimulace a chronobiologická léčba",
          "text": "Nefarmakologické biologické metody přímo ovlivňují neuronální aktivitu, plasticitu a biorytmy CNS. Představují klíčový pilíř pro farmakorezistentní a urgentní život ohrožující stavy."
        },
        "sections": [
          {
            "title": "1. Elektrokonvulzivní terapie (ECT / Elektrošoky)",
            "color": "amber",
            "content": "\n                        <div class=\"space-y-3 text-xs\">\n                            <div class=\"p-3 rounded-lg bg-slate-900 border border-slate-700\">\n                                <span class=\"font-bold text-amber-400\">Princip a provedení:</span>\n                                <p class=\"text-slate-300 mt-1\">Aplikace krátkého elektrického impulsu na kalvu za účelem vyvolání <strong>generalizovaného epileptického paroxysmu</strong> (minimální trvání záchvatu 20–30 sekund na EEG). Dnes se provádí výhradně v <strong>krátkodobé celkové anestezii</strong> (propofol/etomidát) a s <strong>myorelaxací</strong> (sukcinylcholin / cholinjodid) a řízenou oxygenací 100% O2.</p>\n                                <p class=\"text-slate-300 mt-1\">Elektrody: unilaterální (méně kognitivních NÚ) nebo bilaterální (rychlejší efekt). Série obvykle 6–12 sezení (2–3x týdně).</p>\n                            </div>\n                            <div class=\"p-3 rounded-lg bg-rose-950/30 border border-rose-500/30\">\n                                <div class=\"font-bold text-rose-400 mb-1\">🚨 Hlavní klinické indikace ECT</div>\n                                <ul class=\"list-disc ml-4 text-slate-300 space-y-1\">\n                                    <li><strong>Febrilní a maligní katatonie:</strong> Život zachraňující indikace!</li>\n                                    <li><strong>Těžká deprese s vysokým suicidálním rizikem nebo psychotickými bludy:</strong> Nejvyšší účinnost (80–90 %).</li>\n                                    <li><strong>Farmakorezistentní deprese a schizofrenie</strong></li>\n                                    <li><strong>Farmakorezistentní mánie</strong></li>\n                                    <li><strong>Těžká deprese v těhotenství</strong> (ECT je bezpečnější než teratogenní psychofarmaka!).</li>\n                                </ul>\n                            </div>\n                            <div class=\"p-3 rounded-lg bg-slate-900 border border-slate-700\">\n                                <div class=\"font-bold text-violet-300 mb-1\">Kontraindikace a Nežádoucí účinky</div>\n                                <p class=\"text-slate-300\"><strong>Jediná absolutní kontraindikace:</strong> Intrakraniální hypertenze a expanzivní nitrolební procesy (riziko herniace mozku!).</p>\n                                <p class=\"text-slate-300 mt-1\"><em>Relativní KI:</em> Čerstvý infarkt myokardu (&lt; 3 měsíce), intrakraniální aneurysma, těžká plicní nedostatečnost.</p>\n                                <p class=\"text-slate-300 mt-1\"><em>Nežádoucí účinky:</em> Přechodná reverzibilní anterográdní i retrográdní amnézie na období kolem zákroku, postiktální zmatenost, bolest hlavy a svalů.</p>\n                            </div>\n                        </div>\n                    "
          },
          {
            "title": "2. Repetitivní transkraniální magnetická stimulace (rTMS)",
            "color": "teal",
            "content": "\n                        <div class=\"p-3 rounded-lg bg-slate-900 border border-slate-700 text-xs\">\n                            <p class=\"text-slate-300\">Neinvazivní metoda využívající magnetické pole k indukci elektrických proudů v mozkové kůře. <strong>Provádí se ambulantně, bez anestezie a bez myorelaxace.</strong></p>\n                            <ul class=\"list-disc ml-4 mt-2 space-y-1 text-slate-300\">\n                                <li><strong>Vysokofrekvenční rTMS (> 5–10 Hz):</strong> Excitační stimulace levého dorzolaterálního prefrontálního kortexu (DLPFC) ➔ léčba <strong>farmakorezistentní deprese</strong>.</li>\n                                <li><strong>Nízkofrekvenční rTMS (1 Hz):</strong> Inhibiční stimulace pravého DLPFC nebo temporoparietálního kortexu ➔ léčba <strong>úzkosti a rezistentních sluchových halucinací</strong> u schizofrenie.</li>\n                                <li><em>Kontraindikace:</em> Kovové implantáty v hlavě, intrakraniální cévní svorky, kochleární implantát, epilepsie.</li>\n                            </ul>\n                        </div>\n                    "
          },
          {
            "title": "3. Chronobiologická léčba: Fototerapie a Spánková deprivace",
            "color": "cyan",
            "content": "\n                        <div class=\"grid md:grid-cols-2 gap-3 text-xs\">\n                            <div class=\"p-3 rounded-lg bg-slate-900 border border-slate-700\">\n                                <div class=\"font-bold text-amber-300 mb-1\">Fototerapie (Léčba jasným světlem)</div>\n                                <p class=\"text-slate-300\"><strong>Indikace:</strong> Sezónní afektivní porucha (SAD – zimní deprese s hypersomnií a hyperfagií).</p>\n                                <p class=\"text-slate-300 mt-1\"><strong>Aplikace:</strong> Plnospektrální bílé světlo o intenzitě <strong>10 000 luxů</strong> po dobu <strong>30 minut denně ráno</strong> po probuzení. Potlačuje sekreci melatoninu z epifýzy a resynchronizuje cirkadiánní rytmus.</p>\n                            </div>\n                            <div class=\"p-3 rounded-lg bg-slate-900 border border-slate-700\">\n                                <div class=\"font-bold text-cyan-300 mb-1\">Spánková deprivace</div>\n                                <p class=\"text-slate-300\"><strong>Metoda:</strong> Totální (celá noc) nebo parciální (bdělost ve druhé polovině noci od 01:00 do rána).</p>\n                                <p class=\"text-slate-300 mt-1\"><strong>Efekt:</strong> Velmi rychlý nástup antidepresivního účinku (do 24 hodin u 60 % pacientů), bohužel po následujícím spánku často dochází k relapsu. Kombinuje se s fototerapií a antidepresivy.</p>\n                            </div>\n                        </div>\n                    "
          }
        ]
      },
      "recall": {
        "scenarios": [
          {
            "id": "q13-r1",
            "title": "Kazuistika 13: Urgentní indikace elektrokonvulzivní terapie",
            "question": "30letá žena v 16. týdnu gravidity je přijata pro těžkou psychotickou depresi s bludy zatracení, úplným odmítáním stravy a pití (sitofobie) a deklarovaným plánem skočit pod vlak. Somaticky hrozí dehydratace a ohrožení plodu. Jaká je nejbezpečnější a nejúčinnější léčebná metoda?",
            "answer": "Jednoznačnou metodou volby je elektrokonvulzivní terapie (ECT) v celkové anestezii. ECT přináší nejrychlejší nástup účinku, má účinnost až 90 % a je v těhotenství prokazatelně bezpečnější než kombinace vysokých dávek psychofarmak.",
            "pearl": "Při ECT v těhotenství se provádí monitorování ozev plodu, polohování pacientky s mírným náklonem doleva (prevence syndromu dolní duté žíly) a podání anticholinergika k prevenci vagové bradykardie."
          }
        ]
      },
      "cards": [
        {
          "id": "c13-1",
          "front": "Jaká je jediná absolutní kontraindikace elektrokonvulzivní terapie (ECT)?",
          "back": "Intrakraniální hypertenze a expanzivní nitrolební procesy (riziko temporální či okcipitální herniace mozkového kmene).",
          "hint": "Nitrolební tlak",
          "category": "biologicka_terapie"
        },
        {
          "id": "c13-2",
          "front": "Jaké 2 základní léky anesteziolog aplikuje bezprostředně před provedením elektrokonvulze?",
          "back": "1. Krátkodobé anestetikum (propofol / etomidát) + 2. Periferní myorelaxans (sukcinylcholin).",
          "hint": "Anesteziologický postup",
          "category": "biologicka_terapie"
        },
        {
          "id": "c13-3",
          "front": "Jaké parametry světla se používají při fototerapii sezónní afektivní poruchy (SAD)?",
          "back": "Intenzita 10 000 luxů, 30 minut denně v ranních hodinách.",
          "hint": "Parametry fototerapie",
          "category": "biologicka_terapie"
        }
      ],
      "quiz": [
        {
          "id": "q13-test1",
          "question": "Při vysokofrekvenční repetitivní transkraniální magnetické stimulaci (rTMS) pro léčbu farmakorezistentní deprese se cílena stimuluje která mozková oblast?",
          "options": [
            "Pravý temporální lalok",
            "Levý dorzolaterální prefrontální kortex (DLPFC)",
            "Mozeček",
            "Primární motorická kůra"
          ],
          "correctIndex": 1,
          "explanation": "Vysokofrekvenční rTMS levého DLPFC vede k lokální i síťové excitaci prefrontálních okruhů tlumících depresi."
        },
        {
          "id": "q13-test2",
          "question": "Který nežádoucí účinek je po sérii elektrokonvulzivní léčby nejčastější a vyžaduje předchozí poučení pacienta?",
          "options": [
            "Trvalá ztráta zraku",
            "Přechodná porucha paměti (anterográdní a retrográdní amnézie)",
            "Trvalá obrna končetin",
            "Agorafobie"
          ],
          "correctIndex": 1,
          "explanation": "Po ECT dochází k přechodnému reverzibilnímu výpadku paměti (amnézii na události kolem léčby), který spontánně odeznívá během týdnů."
        }
      ]
    },
    {
      "id": "q14-pomocne-vysetrovaci-metody",
      "number": 14,
      "title": "Pomocné vyšetřovací metody v psychiatrii (vč. psychologických)",
      "shortDesc": "Laboratorní screening (TSH, KO, jaterní enzymy, toxikologie moči, TDM, sérologie lues/HIV). Zobrazovací metody (CT, MR mozku, SPECT/PET) a EEG. Psychologické metody: WAIS, MMSE, MoCA, Test hodin, MMPI-2, Big Five, Rorschach (ROR), TAT a posuzovací škály (MADRS, PANSS, YMRS).",
      "category": "vysetreni",
      "badge": "Diagnostika & Metody",
      "badgeColor": "cyan",
      "theory": {
        "banner": {
          "tag": "Diagnostika",
          "title": "Biologické a psychologické pomocné metody",
          "text": "Pomocné vyšetřovací metody v psychiatrii slouží k vyloučení organické/somatické etiologie duševních poruch, monitorování bezpečnosti farmakoterapie a objektivizaci kognitivních a osobnostních funkcí."
        },
        "sections": [
          {
            "title": "1. Laboratorní a toxikologická vyšetření",
            "color": "cyan",
            "content": "\n                        <div class=\"space-y-2 text-xs\">\n                            <div class=\"p-3 rounded-lg bg-slate-900 border border-slate-700\">\n                                <span class=\"font-bold text-violet-300\">Základní laboratorní screening při příjmu:</span>\n                                <p class=\"text-slate-300 mt-1\">Krevní obraz (anémie, leukocytóza u infekcí/MNS), biochemie (urea, kreatinin, jaterní enzymy ALT/AST/GMT, elektrolyty Na/K/Cl, glykémie), CRP.</p>\n                            </div>\n                            <div class=\"p-3 rounded-lg bg-slate-900 border border-slate-700\">\n                                <span class=\"font-bold text-violet-300\">Specifická endokrinní a infekční vyšetření:</span>\n                                <p class=\"text-slate-300 mt-1\"><strong>TSH a fT4:</strong> Vyloučení hypotyreózy (častá příčina sekundární deprese a pseudodemence) a hypertyreózy (příčina úzkosti a agitace). Hladina vitaminu B12 a kyseliny listové. Sérologie lues (TPHA / RPR – neurosyfilis) a HIV.</p>\n                            </div>\n                            <div class=\"p-3 rounded-lg bg-slate-900 border border-slate-700\">\n                                <span class=\"font-bold text-amber-300\">Toxikologický screening moči:</span>\n                                <p class=\"text-slate-300 mt-1\">Orientační průkaz drog (kanabinoidy, amfetaminy, metamfetamin/pervitin, opiáty, benzodiazepiny, kokain) – zásadní k odlišení toxické psychózy od primární schizofrenie.</p>\n                            </div>\n                        </div>\n                    "
          },
          {
            "title": "2. Zobrazovací metody (Neuroimaging) a Elektrofyziologie",
            "color": "teal",
            "content": "\n                        <ul class=\"list-disc ml-5 space-y-1 text-xs text-slate-300\">\n                            <li><strong>CT / MR mozku:</strong> Indikováno u každého prvního psychotického záchvatu (First Episode Psychosis), nově vzniklé demence, atypického průběhu a fokální neurologické symptomatologie (vyloučení tumoru, cévní mozkové příhody, normotenzního hydrocefalu, atrofie hipokampu).</li>\n                            <li><strong>Elektroencefalografie (EEG):</strong> Vyloučení temporální epilepsie, non-konvulzivního status epilepticus, encefalitid a Creutzfeldt-Jakobovy nemoci (trifázické vlny).</li>\n                            <li><strong>Funkční zobrazení (SPECT, PET, fMRI):</strong> Detekce regionálního hypometabolismu (temporoparietální u Alzheimerovy demence, frontální u FTD).</li>\n                        </ul>\n                    "
          },
          {
            "title": "3. Klinicko-psychologická diagnostika a Posuzovací škály",
            "color": "indigo",
            "content": "\n                        <div class=\"grid md:grid-cols-2 gap-3 text-xs\">\n                            <div class=\"p-3 rounded-lg bg-slate-900 border border-slate-700\">\n                                <h4 class=\"font-bold text-violet-300 mb-1\">Výkonové a kognitivní testy</h4>\n                                <ul class=\"list-disc ml-4 text-slate-300 space-y-1\">\n                                    <li><strong>WAIS-IV:</strong> Wechslerova inteligenční škála pro dospělé (verbální a performační IQ).</li>\n                                    <li><strong>MMSE (Mini-Mental State Exam):</strong> Screening kognice (max. 30 b., norma ≥ 27 b., kognitivní deficit &lt; 24 b.).</li>\n                                    <li><strong>MoCA (Montreal Cognitive Assessment):</strong> Citlivější screening mírné kognitivní poruchy (MCI).</li>\n                                    <li><strong>Test kreslení hodin (Clock Drawing Test):</strong> Rychlý screening exekutivních funkcí a vizuokonstrukce.</li>\n                                </ul>\n                            </div>\n                            <div class=\"p-3 rounded-lg bg-slate-900 border border-slate-700\">\n                                <h4 class=\"font-bold text-violet-300 mb-1\">Osobnostní testy a škály</h4>\n                                <ul class=\"list-disc ml-4 text-slate-300 space-y-1\">\n                                    <li><strong>MMPI-2:</strong> Standardizovaný vícedimenzionální dotazník osobnosti a psychopatologie.</li>\n                                    <li><strong>Projektivní metody:</strong> Rorschachův test inkoustových skvrn (ROR), Tematický apercepční test (TAT).</li>\n                                    <li><strong>Depresivní škály:</strong> MADRS, HAMD (Montgomery-Åsberg / Hamilton), BDI (Beckův sebeposuzovací dotazník).</li>\n                                    <li><strong>Psychotické škály:</strong> PANSS (Positive and Negative Syndrome Scale).</li>\n                                    <li><strong>Manické škály:</strong> YMRS (Young Mania Rating Scale).</li>\n                                </ul>\n                            </div>\n                        </div>\n                    "
          }
        ]
      },
      "recall": {
        "scenarios": [
          {
            "id": "q14-r1",
            "title": "Kazuistika 14: Diagnostický postup u první psychotické epizody",
            "question": "21letý vysokoškolák je přiveden rodinou pro náhlý vznik vztahovačnosti, sluchových halucinací a bizarního chování trvajícího 4 dny. Dosud se s ničím neléčil. Která pomocná vyšetření je nutné provést v rámci primárního diferenciálně-diagnostického protokolu?",
            "answer": "1. Toxikologický screening moči (vyloučení toxické psychózy po stimulanciích/kanabinoidech), 2. MR nebo CT mozku (vyloučení expanze, encefalitidy), 3. Laboratorní vyšetření: krevní obraz, CRP, jaterní a ledvinné funkce, TSH, ionty, 4. EEG (vyloučení temporální epilepsie a autoimunitní encefalitidy), 5. Psychologické vyšetření k objektivizaci myšlení.",
            "pearl": "U mladých pacientů s atypickou první psychózou je nutné myslet na anti-NMDA receptorovou autoimunitní encefalitidu!"
          }
        ]
      },
      "cards": [
        {
          "id": "c14-1",
          "front": "Jaké je hraniční skóre v testu MMSE (Mini-Mental State Examination) pro podezření na demenci?",
          "back": "Méně než 24 bodů z celkových 30 bodů (norma je 27–30 bodů).",
          "hint": "MMSE cut-off",
          "category": "vysetreni"
        },
        {
          "id": "c14-2",
          "front": "Proč je vyšetření TSH standardní součástí diagnostiky deprese?",
          "back": "K vyloučení hypotyreózy, která může věrně napodobovat těžkou depresivní epizodu (tzv. symptomatická/sekundární deprese).",
          "hint": "Endokrinní screening",
          "category": "vysetreni"
        },
        {
          "id": "c14-3",
          "front": "Jaké 2 projektivní metody se v klinické psychologii nejčastěji využívají?",
          "back": "1. Rorschachův test inkoustových skvrn (ROR), 2. Tematický apercepční test (TAT).",
          "hint": "Projektivní testy",
          "category": "vysetreni"
        }
      ],
      "quiz": [
        {
          "id": "q14-test1",
          "question": "Která posuzovací škála je celosvětovým zlatým standardem pro hodnocení pozitivních a negativních symptomů u pacientů se schizofrenií?",
          "options": [
            "PANSS (Positive and Negative Syndrome Scale)",
            "HAMD (Hamilton Depression Rating Scale)",
            "YMRS (Young Mania Rating Scale)",
            "GDS (Geriatric Depression Scale)"
          ],
          "correctIndex": 0,
          "explanation": "PANSS je 30položková standardizovaná škála hodnotící pozitivní, negativní a obecné psychopatologické symptomy schizofrenie."
        },
        {
          "id": "q14-test2",
          "question": "Který z následujících psychologických testů slouží k rychlému screeningu exekutivních a prostorových funkcí?",
          "options": [
            "Test kreslení hodin (Clock Drawing Test)",
            "Rorschachův test",
            "Beckova škála beznaděje",
            "MMPI-2"
          ],
          "correctIndex": 0,
          "explanation": "Test kreslení hodin rychle a spolehlivě odhaluje poruchy plánování, prostorové orientace a abstraktního myšlení typické pro demence."
        }
      ]
    },
    {
      "id": "q15-zaklady-psychiatrickeho-vysetreni",
      "number": 15,
      "title": "Základy psychiatrického vyšetření",
      "shortDesc": "Struktura psychiatrické anamnézy (autoanamnéza, klíčová heteroanamnéza od rodiny a ZZS). Status praesens psychicus (vědomí, orientace, vnímání, myšlení, emoce, jednání, pudy, intelekt, paměť, náhled). Zhodnocení suicidálního a agresivního rizika.",
      "category": "vysetreni",
      "badge": "Diagnostika & Metody",
      "badgeColor": "cyan",
      "theory": {
        "banner": {
          "tag": "Klinická praxe",
          "title": "Klinické psychiatrické vyšetření",
          "text": "Základním diagnostickým nástrojem psychiatrie je podrobný strukturovaný psychiatrický rozhovor, pečlivé pozorování chování a sestavení komplexního status praesens psychicus."
        },
        "sections": [
          {
            "title": "1. Struktura psychiatrické anamnézy",
            "color": "cyan",
            "content": "\n                        <div class=\"space-y-2 text-xs\">\n                            <div class=\"p-3 rounded-lg bg-slate-900 border border-slate-700\">\n                                <span class=\"font-bold text-violet-300\">Autoanamnéza vs. Heteroanamnéza:</span>\n                                <p class=\"text-slate-300 mt-1\">V psychiatrii má <strong>heteroanamnéza</strong> (od rodiny, partnera, praktického lékaře, personálu ZZS či policie) klíčový význam, protože pacient může příznaky dissimulovat, zlehčovat nebo v důsledku psychózy či demence nemá náhled na chorobnost svého stavu.</p>\n                            </div>\n                            <div class=\"p-3 rounded-lg bg-slate-900 border border-slate-700\">\n                                <span class=\"font-bold text-violet-300\">Jednotlivé složky anamnézy:</span>\n                                <ul class=\"list-disc ml-4 mt-1 text-slate-300 space-y-1\">\n                                    <li><strong>Nynější onemocnění:</strong> Důvod vyšetření (vlastními slovy), dynamika rozvoje obtíží, spouštěče, spánek, chuť k jídlu, změny chování.</li>\n                                    <li><strong>Osobní a vývojová anamnéza:</strong> Těhotenství, porod, psychomotorický vývoj, školní prospěch, pracovní kariéra, vztahy, premorbidní povaha.</li>\n                                    <li><strong>Rodinná anamnéza:</strong> Výskyt psychických poruch, sebevražd, závislostí a demencí u příbuzných (genetická zátěž).</li>\n                                    <li><strong>Abúzus návykových látek:</strong> Alkohol (množství, frekvence, craving), tabák, nelegální drogy, zneužívání léků (BZD, analgetika).</li>\n                                    <li><strong>Farmakologická a somatická anamnéza:</strong> Alergie, chronické interní nemoci, úrazy hlavy, epilepsie.</li>\n                                </ul>\n                            </div>\n                        </div>\n                    "
          },
          {
            "title": "2. Status praesens psychicus (Psychopatologický rozbor)",
            "color": "indigo",
            "content": "\n                        <div class=\"p-3 rounded-lg bg-slate-900 border border-slate-700 text-xs\">\n                            <p class=\"text-slate-300 mb-2\">Standardizovaný popis aktuálního psychického stavu v momentě vyšetření:</p>\n                            <div class=\"grid md:grid-cols-2 gap-2 text-slate-300\">\n                                <div><strong>1. Vzhled a chování:</strong> Hygiena, oděv, oční kontakt, mimika, motorika (neklid, hypoaktivita).</div>\n                                <div><strong>2. Vědomí a orientace:</strong> Lucidita, vigilita; orientace osobou, místem, časem a situací.</div>\n                                <div><strong>3. Vnímání:</strong> Přítomnost iluzí a halucinací (sluchové, zrakové, intrapsychické).</div>\n                                <div><strong>4. Myšlení:</strong> Tempo (brady/tachypsychismus), forma (perseverace, inkoherence), obsah (bludy, obsese).</div>\n                                <div><strong>5. Emotivita:</strong> Nálada (eutymní, depresivní, manická, anxiózní), afekty, emoční reaktivita a přiléhavost.</div>\n                                <div><strong>6. Jednání a vůle:</strong> Hypobulie, abulie, katatonní fenomény, impulzivita.</div>\n                                <div><strong>7. Pudy:</strong> Sebezáchova, obživa, spánek, sexualita.</div>\n                                <div><strong>8. Intelekt a paměť:</strong> Orientační zhodnocení kognice.</div>\n                            </div>\n                            <div class=\"mt-2 pt-2 border-t border-slate-800 text-violet-300\">\n                                <strong>9. Náhled na chorobnost:</strong> Plný náhled (uvědomuje si nemoc a chce se léčit), částečný náhled, anozognózie (úplná absence náhledu – typická pro psychózy a mánii).\n                            </div>\n                        </div>\n                    "
          },
          {
            "title": "3. Hodnocení suicidálního a agresivního rizika",
            "color": "rose",
            "content": "\n                        <div class=\"p-3 rounded-lg bg-rose-950/30 border border-rose-500/30 text-xs\">\n                            <strong class=\"text-rose-400\">Suicidální triáda / Kontinuum:</strong><br>\n                            1. Pasivní myšlenky na smrt ('bylo by lepší se neprobudit') ➔ 2. Aktivní suicidální úvahy ➔ 3. Suicidální tendence a konkrétní plán ➔ 4. Suicidální pokus.<br>\n                            <em>Varovné signály (Presuicidální syndrom dle Ringela):</em> Dynamické zúžení (situační, vztahové, hodnotové), potlačená/obrácená agresivita proti sobě a únik do fantazií.\n                            <div class=\"mt-2 text-slate-300 font-bold\">\n                                ⚠️ Přímé dotazování na sebevražedné myšlenky pacientovi suicidium NEVSUGERUJE, naopak přináší úlevu a je nezbytnou povinností každého lékaře!\n                            </div>\n                        </div>\n                    "
          }
        ]
      },
      "recall": {
        "scenarios": [
          {
            "id": "q15-r1",
            "title": "Kazuistika 15: Vyšetření pacienta se suicidálními tendencemi",
            "question": "Na příjmovou ambulanci přichází 40letý muž po rozchodu s partnerkou, který uvádí, že 'život pro něj ztratil smysl'. Má lékař obavu položit přímou otázku na sebevraždu? Jak má lékař postupovat při zjištění konkrétního suicidálního plánu?",
            "answer": "Lékař se MUSÍ přímo a citlivě zeptat na sebevražedné myšlenky, plány a přípravy (přímý dotaz nezvyšuje riziko suicidia, naopak otevírá prostor pro pomoc). Pokud pacient potvrdí konkrétní plán a přístup k prostředkům, jedná se o bezprostřední ohrožení života indikované k okamžité hospitalizaci na uzavřeném psychiatrickém oddělení (v případě odmítnutí i nedobrovolně).",
            "pearl": "Presuicidální syndrom (Ringel): 1. Zúžení (perspektivy, vztahů), 2. Zadržená/invertovaná agresivita, 3. Suicidální fantazie."
          }
        ]
      },
      "cards": [
        {
          "id": "c15-1",
          "front": "Jaké 3 komponenty tvoří Ringelův presuicidální syndrom?",
          "back": "1. Zúžení (dynamické zúžení možností a vztahů), 2. Invertovaná (zadržená) agresivita obrácená proti sobě, 3. Suicidální fantazie.",
          "hint": "Ringelův syndrom",
          "category": "vysetreni"
        },
        {
          "id": "c15-2",
          "front": "Proč je v psychiatrii nezbytné odebírat heteroanamnézu?",
          "back": "Protože psychotický, deliriantní, manický nebo dementní pacient často nemá náhled na svou nemoc (anozognózie) nebo příznaky dissimuluje.",
          "hint": "Význam heteroanamnézy",
          "category": "vysetreni"
        },
        {
          "id": "c15-3",
          "front": "Může otevřený dotaz lékaře na sebevražedné myšlenky zvýšit riziko, že pacient sebevraždu spáchá?",
          "back": "NE. Mýtus byl vyvrácen. Otevřený, empatický dotaz přináší pacientovi úlevu a je klíčovým nástrojem prevence suicidia.",
          "hint": "Suicidální screening",
          "category": "vysetreni"
        }
      ],
      "quiz": [
        {
          "id": "q15-test1",
          "question": "Pojem 'anozognózie' v kontextu psychiatrického vyšetření vyjadřuje:",
          "options": [
            "Neschopnost rozpoznat tváře známých osob",
            "Úplnou absenci náhledu na chorobnost vlastního duševního stavu",
            "Ztrátu schopnosti porozumět mluvené řeči",
            "Chorobné přehánění tělesných symptomů"
          ],
          "correctIndex": 1,
          "explanation": "Anozognózie je absence vhledu a náhledu na přítomnost duševního onemocnění, typická pro psychózy a mánii."
        },
        {
          "id": "q15-test2",
          "question": "Který z následujících kroků je NEJVHODNĚJŠÍ při vyšetření pacienta, který vyjadřuje beznaděj a ztrátu smyslu života?",
          "options": [
            "Vyhnout se tématu sebevraždy, aby nedošlo k její sugesci",
            "Přímo a empaticky se zeptat, zda pacient přemýšlí o sebevraždě a zda má konkrétní plán",
            "Okamžitě pacienta propustit domů a doporučit volně prodejná sedativa",
            "Konfrontovat pacienta, že jeho problémy jsou banální"
          ],
          "correctIndex": 1,
          "explanation": "Přímý, strukturovaný dotaz na suicidální úvahy je základním standardem psychiatrického vyšetření a umožňuje posoudit akutní riziko."
        }
      ]
    },
    {
      "id": "q16-psychoterapie",
      "number": 16,
      "title": "Psychoterapie",
      "shortDesc": "Definice, cíle a formy (individuální, párová, rodinná, skupinová). Hlavní psychoterapeutické směry: Psychoanalýza / psychodynamická (Freud, nevědomí, přenos/protipřenos), Kognitivně-behaviorální terapie KBT (Beck, schémata, expozice), Humanistická (Rogers PCA, logoterapie), Systemická rodinná terapie. Nespecifické účinné faktory.",
      "category": "psychoterapie_uvod",
      "badge": "Psychoterapie",
      "badgeColor": "violet",
      "theory": {
        "banner": {
          "tag": "Psychoterapie",
          "title": "Psychoterapie – léčba psychologickými prostředky",
          "text": "Psychoterapie je odborná, záměrná a vědecky podložená aplikace psychologických metod k odstranění symptomů, modifikaci maladaptivních vzorců chování a podpoře osobnostního růstu."
        },
        "sections": [
          {
            "title": "1. Formy psychoterapie a nespecifické účinné faktory",
            "color": "violet",
            "content": "\n                        <div class=\"space-y-2 text-xs\">\n                            <div class=\"p-3 rounded-lg bg-slate-900 border border-slate-700\">\n                                <span class=\"font-bold text-violet-300\">Formy dle uspořádání a délky:</span>\n                                <ul class=\"list-disc ml-4 text-slate-300 space-y-0.5\">\n                                    <li><strong>Individuální:</strong> Důvěrný vztah terapeut–klient.</li>\n                                    <li><strong>Skupinová psychoterapie:</strong> Využívá skupinovou dynamiku, kohezi, zpětnou vazbu a pocit sounáležitosti (10–12 členů).</li>\n                                    <li><strong>Párová a Rodinná terapie:</strong> Práce s rodinným systémem a komunikačními vzorci.</li>\n                                    <li><strong>Krizová intervence:</strong> Krátkodobá, okamžitá pomoc zaměřená na zvládnutí akutní krize (hodiny až dny).</li>\n                                </ul>\n                            </div>\n                            <div class=\"p-3 rounded-lg bg-slate-900 border border-slate-700\">\n                                <span class=\"font-bold text-emerald-400\">Nespecifické účinné faktory psychoterapie:</span>\n                                <p class=\"text-slate-300 mt-1\">Faktory společné všem směrům, které tvoří až 70–80 % celkového terapeutického efektu: <strong>Terapeutický vztah a aliance</strong>, empatie, bezpodmínečné přijetí, naděje na změnu, katarze (emoční ventilace), korektivní emoční zkušenost a vhled.</p>\n                            </div>\n                        </div>\n                    "
          },
          {
            "title": "2. Hlavní psychoterapeutické směry a školy",
            "color": "indigo",
            "content": "\n                        <div class=\"space-y-3 text-xs\">\n                            <div class=\"p-3 rounded-lg bg-slate-900 border border-slate-700\">\n                                <span class=\"font-bold text-violet-300\">1. Psychoanalýza a Psychodynamická terapie (Sigmund Freud, C. G. Jung, A. Adler)</span>\n                                <p class=\"text-slate-300 mt-1\">Předpokládá, že symptomy vznikají z nevědomých intrapsychických konfliktů (Id vs. Superego vs. realita) a raných traumat. Využívá metodu <strong>volných asociací</strong>, analýzu snů a rozbor <strong>přenosu</strong> (klient promítá pocity k rodičům na terapeuta) a <strong>protipřenosu</strong> (reakce terapeuta na klienta).</p>\n                            </div>\n                            <div class=\"p-3 rounded-lg bg-slate-900 border border-slate-700\">\n                                <span class=\"font-bold text-cyan-300\">2. Kognitivně-behaviorální terapie – KBT (Aaron Beck, Albert Ellis)</span>\n                                <p class=\"text-slate-300 mt-1\">Vychází z teorie učení a kognitivního modelu (emoce a chování jsou určeny tím, jak situaci interpretujeme). Identifikuje a restrukturalizuje <strong>negativní automatické myšlenky</strong> a kognitivní omyly (katastrofizace, černobílé myšlení).</p>\n                                <p class=\"text-slate-300 mt-1\"><strong>Klíčové techniky:</strong> Kognitivní restrukturalizace, <strong>expoziční terapie</strong> (in vivo / in sensu – zlatý standard u fobií a OCD), behaviorální aktivace, nácvik asertivity a řešení problémů.</p>\n                            </div>\n                            <div class=\"p-3 rounded-lg bg-slate-900 border border-slate-700\">\n                                <span class=\"font-bold text-amber-300\">3. Humanistická a Existenciální psychoterapie</span>\n                                <ul class=\"list-disc ml-4 text-slate-300 space-y-1\">\n                                    <li><strong>Na člověka zaměřená terapie (PCA – Carl Rogers):</strong> 3 základní podmínky terapeutické změny: <em>Kongruence</em> (opravdovost), <em>Bezpodmínečné pozitivní přijetí</em> a <em>Empatické porozumění</em>.</li>\n                                    <li><strong>Logoterapie (Viktor E. Frankl):</strong> Hledání smyslu života i v situacích utrpení (vůle ke smyslu, existenciální vakuum).</li>\n                                    <li><strong>Gestalt terapie (Fritz Perls):</strong> Zaměření na 'tady a teď', uvědomění si tělesných pocitů a uzavírání nedokončených tvarů (technika prázdné židle).</li>\n                                </ul>\n                            </div>\n                            <div class=\"p-3 rounded-lg bg-slate-900 border border-slate-700\">\n                                <span class=\"font-bold text-teal-300\">4. Systemická a Rodinná terapie</span>\n                                <p class=\"text-slate-300\">Chápe rodinu jako komplexní kybernetický systém. Symptom jedince (identifikovaného pacienta) je vnímán jako projev dysfunkce celého rodinného systému. Využívá cirkulární dotazování a reframing (přerámování).</p>\n                            </div>\n                        </div>\n                    "
          }
        ]
      },
      "recall": {
        "scenarios": [
          {
            "id": "q16-r1",
            "title": "Kazuistika 16: Indikace kognitivně-behaviorální terapie u agorafobie",
            "question": "27letá žena trpí panickou poruchou s agorafobií – bojí se jezdit MHD a vstupovat do nákupních center pro strach ze záchvatu paniky a udušení. Který psychoterapeutický směr má pro tuto diagnózu nejvyšší vědeckou evidenci (EBM) a jaká technika je klíčová?",
            "answer": "Metodou volby je Kognitivně-behaviorální terapie (KBT). Klíčovou technikou je postupné vystavování obávaným situacím (expoziční terapie in vivo s nácvikem zvládání úzkosti a dechových technik) v kombinaci s kognitivní restrukturalizací katastrofických myšlenek ('omdlím, zešílím').",
            "pearl": "U fobií a OCD je expozice se zábranou rituálu (ERP) nejúčinnější nefarmakologickou intervencí s dlouhodobým efektem."
          }
        ]
      },
      "cards": [
        {
          "id": "c16-1",
          "front": "Jaké 3 základní podmínky terapeutického přístupu definoval Carl Rogers (PCA terapie)?",
          "back": "1. Kongruence (autentičnost terapeuta), 2. Bezpodmínečné pozitivní přijetí (akceptace), 3. Empatie (přesné vcítění).",
          "hint": "Rogerianská triáda",
          "category": "psychoterapie_uvod"
        },
        {
          "id": "c16-2",
          "front": "Co je to expozice se zábranou rituálu (ERP) a pro jakou poruchu je metodou volby?",
          "back": "Základní technika KBT u OCD, při níž je pacient vystaven spouštěči úzkosti (např. dotyk kliky) a záměrně zabrání provedení kompulzivního rituálu (umytí rukou).",
          "hint": "ERP technika u OCD",
          "category": "psychoterapie_uvod"
        },
        {
          "id": "c16-3",
          "front": "Jaký je rozdíl mezi přenosem a protipřenosem v psychoanalýze?",
          "back": "Přenos: Klient nevědomě promítá minulé pocity a postoje (např. k rodičům) na terapeuta. Protipřenos: Emoční reakce a pocity terapeuta vyvolané klientem.",
          "hint": "Dynamické pojmy",
          "category": "psychoterapie_uvod"
        }
      ],
      "quiz": [
        {
          "id": "q16-test1",
          "question": "Který psychoterapeutický směr klade největší důraz na identifikaci a změnu negativních automatických myšlenek a expoziční techniky?",
          "options": [
            "Kognitivně-behaviorální terapie (KBT)",
            "Psychoanalýza",
            "Logoterapie",
            "Gestalt terapie"
          ],
          "correctIndex": 0,
          "explanation": "KBT (Beck) se zaměřuje na kognitivní restrukturalizaci a nácvik nového chování pomocí expozic."
        },
        {
          "id": "q16-test2",
          "question": "Zakladatelem logoterapie (psychoterapeutického směru zaměřeného na hledání smyslu lidské existence) je:",
          "options": [
            "Sigmund Freud",
            "Viktor Emil Frankl",
            "Carl Gustav Jung",
            "Aaron Beck"
          ],
          "correctIndex": 1,
          "explanation": "Viktor E. Frankl založil logoterapii a existenciální analýzu na základě své zkušenosti z koncentračních táborů."
        }
      ]
    }
  ]
};
