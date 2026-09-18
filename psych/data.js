// data.js - Kompletní databáze Psychiatrie (Obecná & Speciální) pro 4. ročník LF OU
const PSYCHIATRY_DATA = {
  "title": "Psychiatrie",
  "grade": "4. ročník LF OU",
  "description": "Komplexní interaktivní výukový portál obecné a speciální psychiatrie pro studenty 4. ročníku všeobecného lékařství. 32 otázek dle státnicových okruhů LF OU: psychopatologie, psychofarmaka, biologická léčba, demence, afektivní a psychotické poruchy, závislosti, dětská psychiatrie a urgentní stavy.",
  "sections": [
    {
      "id": "all",
      "label": "Všechny okruhy",
      "count": 32,
      "icon": "📚"
    },
    {
      "id": "obecna",
      "label": "Obecná psychiatrie",
      "count": 16,
      "icon": "🧠"
    },
    {
      "id": "specialni",
      "label": "Speciální psychiatrie",
      "count": 16,
      "icon": "🏥"
    }
  ],
  "categories": [
    {
      "id": "all",
      "label": "Všechna témata (32)",
      "icon": "📚"
    },
    {
      "id": "psychopatologie",
      "label": "Psychopatologie & Vyšetření",
      "icon": "🧠"
    },
    {
      "id": "farmakologie",
      "label": "Psychofarmaka & Biologie",
      "icon": "💊"
    },
    {
      "id": "organicke_zavislosti",
      "label": "Organické poruchy & Závislosti",
      "icon": "🍷"
    },
    {
      "id": "afektivni_psychoticke",
      "label": "Afektivní & Psychózy",
      "icon": "⚡"
    },
    {
      "id": "neuroticke_osobnost",
      "label": "Neurotické & Osobnost",
      "icon": "🛡️"
    },
    {
      "id": "vyvoj_deti_urgent",
      "label": "Dětské, Vývojové & Akutní stavy",
      "icon": "🚨"
    }
  ],
  "modules": [
    {
      "id": "q01-definice-historie-organizace",
      "number": 1,
      "title": "Definice, postavení a historie psychiatrie, organizace psychiatrické péče",
      "shortDesc": "Biopsychosociální model, stigmatizace, reformní milníky (Pinel, Kraepelin, Freud, Delay & Deniker 1952) a systém péče v ČR (CDZ, lůžka, právní rámec nedobrovolné hospitalizace).",
      "category": "psychopatologie",
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
      ],
      "section": "obecna",
      "sectionLabel": "Obecná psychiatrie",
      "badgePrefix": "O01"
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
      ],
      "section": "obecna",
      "sectionLabel": "Obecná psychiatrie",
      "badgePrefix": "O02"
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
      ],
      "section": "obecna",
      "sectionLabel": "Obecná psychiatrie",
      "badgePrefix": "O03"
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
      ],
      "section": "obecna",
      "sectionLabel": "Obecná psychiatrie",
      "badgePrefix": "O04"
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
      ],
      "section": "obecna",
      "sectionLabel": "Obecná psychiatrie",
      "badgePrefix": "O05"
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
      ],
      "section": "obecna",
      "sectionLabel": "Obecná psychiatrie",
      "badgePrefix": "O06"
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
      ],
      "section": "obecna",
      "sectionLabel": "Obecná psychiatrie",
      "badgePrefix": "O07"
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
      ],
      "section": "obecna",
      "sectionLabel": "Obecná psychiatrie",
      "badgePrefix": "O08"
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
      ],
      "section": "obecna",
      "sectionLabel": "Obecná psychiatrie",
      "badgePrefix": "O09"
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
      ],
      "section": "obecna",
      "sectionLabel": "Obecná psychiatrie",
      "badgePrefix": "O10"
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
      ],
      "section": "obecna",
      "sectionLabel": "Obecná psychiatrie",
      "badgePrefix": "O11"
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
      ],
      "section": "obecna",
      "sectionLabel": "Obecná psychiatrie",
      "badgePrefix": "O12"
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
      ],
      "section": "obecna",
      "sectionLabel": "Obecná psychiatrie",
      "badgePrefix": "O13"
    },
    {
      "id": "q14-pomocne-vysetrovaci-metody",
      "number": 14,
      "title": "Pomocné vyšetřovací metody v psychiatrii (vč. psychologických)",
      "shortDesc": "Laboratorní screening (TSH, KO, jaterní enzymy, toxikologie moči, TDM, sérologie lues/HIV). Zobrazovací metody (CT, MR mozku, SPECT/PET) a EEG. Psychologické metody: WAIS, MMSE, MoCA, Test hodin, MMPI-2, Big Five, Rorschach (ROR), TAT a posuzovací škály (MADRS, PANSS, YMRS).",
      "category": "psychopatologie",
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
      ],
      "section": "obecna",
      "sectionLabel": "Obecná psychiatrie",
      "badgePrefix": "O14"
    },
    {
      "id": "q15-zaklady-psychiatrickeho-vysetreni",
      "number": 15,
      "title": "Základy psychiatrického vyšetření",
      "shortDesc": "Struktura psychiatrické anamnézy (autoanamnéza, klíčová heteroanamnéza od rodiny a ZZS). Status praesens psychicus (vědomí, orientace, vnímání, myšlení, emoce, jednání, pudy, intelekt, paměť, náhled). Zhodnocení suicidálního a agresivního rizika.",
      "category": "psychopatologie",
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
      ],
      "section": "obecna",
      "sectionLabel": "Obecná psychiatrie",
      "badgePrefix": "O15"
    },
    {
      "id": "q16-psychoterapie",
      "number": 16,
      "title": "Psychoterapie",
      "shortDesc": "Definice, cíle a formy (individuální, párová, rodinná, skupinová). Hlavní psychoterapeutické směry: Psychoanalýza / psychodynamická (Freud, nevědomí, přenos/protipřenos), Kognitivně-behaviorální terapie KBT (Beck, schémata, expozice), Humanistická (Rogers PCA, logoterapie), Systemická rodinná terapie. Nespecifické účinné faktory.",
      "category": "psychopatologie",
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
      ],
      "section": "obecna",
      "sectionLabel": "Obecná psychiatrie",
      "badgePrefix": "O16"
    },
    {
      "id": "s01-demence",
      "number": 1,
      "section": "specialni",
      "sectionLabel": "Speciální psychiatrie",
      "badgePrefix": "S01",
      "title": "Demence (dělení, epidemiologie, etiopatogeneze, klinický obraz, léčba)",
      "shortDesc": "Alzheimerova nemoc (amyloid beta, tau protein, iAChE + memantin), vaskulární demence, demence s Lewyho tělísky (fluktuace, zrakové halucinace, hypersenzitivita na AP), FTD a reverzibilní demence.",
      "category": "psychopatologie",
      "badge": "Organické poruchy",
      "badgeColor": "cyan",
      "theory": {
        "banner": {
          "tag": "Organické duševní poruchy (F00–F09)",
          "title": "Demence – chronický progresivní syndrom úbytku kognice",
          "text": "Demence je získaný globální úbytek kognitivních funkcí (paměti, intelektu, orientace, exekutivy) na podkladě chronického onemocnění mozku při JASNÉM vědomí, který vede k narušení běžných denních aktivit (ADL)."
        },
        "sections": [
          {
            "title": "1. Epidemiologie a etiopatogenetické dělení demencí",
            "color": "cyan",
            "content": "\n                        <p class=\"mb-2 text-xs\">Prevalence stoupá s věkem (nad 65 let cca 5 %, nad 80 let až 20–30 %).</p>\n                        <div class=\"grid md:grid-cols-2 gap-3 text-xs\">\n                            <div class=\"p-3 rounded-lg bg-slate-900 border border-slate-700\">\n                                <h4 class=\"font-bold text-violet-300 mb-1\">Primární neurodegenerativní demence</h4>\n                                <ul class=\"list-disc ml-4 space-y-1 text-slate-300\">\n                                    <li><strong>Alzheimerova nemoc (60–70 %):</strong> Depozita extracelulárního beta-amyloidu (senilní plaky) a intracelulárního hyperfosforylovaného tau-proteinu (neurofibrilární klubka). Zánik cholinergních neuronů (ncl. basalis Meynerti), atrofie hipokampu a temporoparietálního kortexu.</li>\n                                    <li><strong>Demence s Lewyho tělísky (DLB, 15 %):</strong> Agregace alfa-synukleinu (Lewyho tělíska v kortexu).</li>\n                                    <li><strong>Frontotemporální lobární degenerace (FTD / Pickova nemoc, 5–10 %):</strong> Atrofie frontálních a temporálních laloků.</li>\n                                    <li><strong>Demence u Huntingtonovy a Parkinsonovy nemoci</strong></li>\n                                </ul>\n                            </div>\n                            <div class=\"p-3 rounded-lg bg-slate-900 border border-slate-700\">\n                                <h4 class=\"font-bold text-cyan-300 mb-1\">Sekundární a vaskulární demence</h4>\n                                <ul class=\"list-disc ml-4 space-y-1 text-slate-300\">\n                                    <li><strong>Vaskulární demence (VaD, 15–20 %):</strong> Multiinfarktová demence, subkortikální vaskulární encefalopatie (Binswangerova nemoc). Typický <em>stupňovitý rozvoj</em> a ložiskový neurologický nález.</li>\n                                    <li><strong>Reverzibilní demence:</strong> Normotenzní hydrocefalus (NPH – Hakimova triáda: demence + porucha chůze + inkontinence moči), hypotyreóza, deficit vitaminu B12 / kyseliny listové, neuroinfekce (neurosyfilis, HIV).</li>\n                                </ul>\n                            </div>\n                        </div>\n                    "
          },
          {
            "title": "2. Klinický obraz jednotlivých typů demencí",
            "color": "indigo",
            "content": "\n                        <div class=\"space-y-2 text-xs\">\n                            <div class=\"p-3 rounded-lg bg-slate-900 border border-slate-700\">\n                                <span class=\"font-bold text-violet-300\">Alzheimerova demence:</span> Plíživý začátek, časná porucha epizodické a krátkodobé paměti (zapomíná nedávné události), afázie (hledání slov), apraxie, agnózie, časoprostorová dezorientace. BPSD příznaky (poruchy chování a psychologické symptomy): bludy okradení/nevěry, neklid, toulání.\n                            </div>\n                            <div class=\"p-3 rounded-lg bg-slate-900 border border-slate-700\">\n                                <span class=\"font-bold text-amber-300\">Demence s Lewyho tělísky (DLB) – Triáda klíčových znaků:</span>\n                                <ul class=\"list-disc ml-4 mt-1 text-slate-300 space-y-0.5\">\n                                    <li>1. Výrazná <strong>fluktuace kognitivního výkonu</strong> a bdělosti během dne (ze dne na den).</li>\n                                    <li>2. Časné, živé, detailní <strong>zrakové halucinace</strong> (postavy, zvířata).</li>\n                                    <li>3. Spontánní <strong>parkinsonský syndrom</strong> (rigidita, hypokineze).</li>\n                                    <li>⚠️ <strong>Extrémní hypersenzitivita na klasická neuroleptika</strong> (i malá dávka haloperidolu může vést k těžkému ireverzibilnímu parkinsonismu, MNS či úmrtí!).</li>\n                                </ul>\n                            </div>\n                            <div class=\"p-3 rounded-lg bg-slate-900 border border-slate-700\">\n                                <span class=\"font-bold text-teal-300\">Frontotemporální demence (FTD / Pickova nemoc):</span>\n                                <p class=\"text-slate-300 mt-1\">Časný začátek (kolem 50–60 let). Paměť je v úvodu relativně zachována! Dominují <strong>změny osobnosti, sociální desinhibice</strong>, ztráta taktu, moria (nevhodné žertování), apatie, hyperoralita a progresivní afázie.</p>\n                            </div>\n                        </div>\n                    "
          },
          {
            "title": "3. Diagnostika a Komplexní léčba demencí",
            "color": "emerald",
            "content": "\n                        <div class=\"grid md:grid-cols-2 gap-3 text-xs\">\n                            <div class=\"p-3 rounded-lg bg-slate-900 border border-slate-700\">\n                                <div class=\"font-bold text-emerald-400 mb-1\">Diagnostický algoritmus</div>\n                                <ul class=\"list-disc ml-4 text-slate-300 space-y-1\">\n                                    <li><strong>Kognitivní screening:</strong> MMSE (norma ≥ 27 b., demence &lt; 24 b.), MoCA, Test kreslení hodin.</li>\n                                    <li><strong>Neuroimaging (MR / CT mozku):</strong> Atrofie hipokampů (MTA skóre u AD), vaskulární léze (Fazekas skóre), vyloučení hydrocefalu.</li>\n                                    <li><strong>Laboratorní screening:</strong> KO, TSH, B12, folát, jaterní/ledvinné testy, sérologie lues.</li>\n                                </ul>\n                            </div>\n                            <div class=\"p-3 rounded-lg bg-slate-900 border border-slate-700\">\n                                <div class=\"font-bold text-emerald-400 mb-1\">Farmakoterapie (Kognitiva)</div>\n                                <ul class=\"list-disc ml-4 text-slate-300 space-y-1\">\n                                    <li><strong>iAChE (Donepezil, Rivastigmin náplast, Galantamin):</strong> Lehká až středně těžká AD (MMSE 20–13).</li>\n                                    <li><strong>Memantin (NMDA antagonista):</strong> Středně těžká až těžká AD (MMSE 19–3).</li>\n                                    <li><strong>BPSD příznaky (neklid, bludy):</strong> Nízké dávky atypických AP (Tiaprid, Quetiapin, Risperidon). Vyhnout se FGA a anticholinergikům!</li>\n                                </ul>\n                            </div>\n                        </div>\n                    "
          }
        ]
      },
      "recall": {
        "scenarios": [
          {
            "id": "s01-r1",
            "title": "Kazuistika S1: Zrakové halucinace a pád u seniora s demencí",
            "question": "72letý muž je vyšetřován pro nově vzniklé barevné zrakové halucinace cizích dětí v obývacím pokoji, na které reaguje klidně. Rodina uvádí, že jeho pozornost během dne kolísá a začal se pohybovat pomalu a šouravě. Praktický lékař mu nasadil nízkou dávku haloperidolu, po které pacient ztuhl, upadl a nemůže se hýbat. O jakou demenci se jedná a jaká byla chyba v léčbě?",
            "answer": "Jedná se o Demenci s Lewyho tělísky (DLB – triáda: fluktuace kognice, zrakové halucinace, parkinsonismus). Zásadní chybou bylo podání klasického neuroleptika (Haloperidolu), na které mají pacienti s DLB extrémní hypersenzitivitu. V případě nutnosti zklidnění halucinací je lékem volby iAChE (Donepezil/Rivastigmin) nebo velmi nízká dávka Quetiapinu.",
            "pearl": "Kontraindikace: Klasická FGA antipsychotika (Haloperidol) jsou u DLB přísně kontraindikována pro riziko těžkého maligního neuroleptického syndromu a fatální rigidity."
          }
        ]
      },
      "cards": [
        {
          "id": "sc01-1",
          "front": "Jaká je klasická klinická triáda symptomů u Demence s Lewyho tělísky (DLB)?",
          "back": "1. Fluktuující kognitivní deficit, 2. Živé detailní zrakové halucinace, 3. Spontánní parkinsonismus (+ extrémní přecitlivělost na neuroleptika).",
          "hint": "DLB triáda",
          "category": "psychopatologie"
        },
        {
          "id": "sc01-2",
          "front": "Co tvoří Hakim-Adamsovu triádu u normotenzního hydrocefalu (NPH)?",
          "back": "1. Demence, 2. Porucha chůze (ataxie / magnetická chůze), 3. Inkontinence moči. (Léčba: ventrikuloperitoneální shunt).",
          "hint": "NPH triáda",
          "category": "psychopatologie"
        },
        {
          "id": "sc01-3",
          "front": "Které 2 patologické proteiny se akumulují v mozku u Alzheimerovy nemoci?",
          "back": "1. Extracelulární beta-amyloid (senilní plaky), 2. Intracelulární hyperfosforylovaný tau protein (neurofibrilární klubka / tangles).",
          "hint": "Neuropatologie AD",
          "category": "psychopatologie"
        }
      ],
      "quiz": [
        {
          "id": "s01-test1",
          "question": "Který z následujících klinických obrazů je typický pro časná stádia frontotemporální demence (Pickovy nemoci)?",
          "options": [
            "Těžký výpadek epizodické paměti při zachovaném sociálním chování",
            "Časné změny osobnosti, ztráta společenského taktu, desinhibice chování a hyperoralita",
            "Časné epileptické záchvaty typu grand mal",
            "Klidový tremor s mikrografií"
          ],
          "correctIndex": 1,
          "explanation": "Frontotemporální demence se typicky projevuje časnou afektivní a sociální desinhibicí a změnou osobnosti před rozvojem závažného paměťového deficitu."
        },
        {
          "id": "s01-test2",
          "question": "Který lék je indikován k léčbě středně těžké až těžké Alzheimerovy nemoci jako nekompetitivní antagonista NMDA receptorů?",
          "options": [
            "Donepezil",
            "Memantin",
            "Rivastigmin",
            "Piracetam"
          ],
          "correctIndex": 1,
          "explanation": "Memantin je NMDA receptorový antagonista schválený specificky pro středně těžkou až těžkou Alzheimerovu demenci."
        }
      ]
    },
    {
      "id": "s02-delirium",
      "number": 2,
      "section": "specialni",
      "sectionLabel": "Speciální psychiatrie",
      "badgePrefix": "S02",
      "title": "Delirium",
      "shortDesc": "Akutní organický mozkový syndrom. Etiologie (somatické příčiny, infekce, hypoxie, léková toxicita). Klinický obraz: fluktuace, dezorientace, mikrozoopsie, inverze spánku, amnézie. Léčba (tiaprid, haloperidol, quetiapin, zákaz BZD mimo alkohol).",
      "category": "psychopatologie",
      "badge": "Organické poruchy",
      "badgeColor": "cyan",
      "theory": {
        "banner": {
          "tag": "Akutní organický stav",
          "title": "Delirium – reverzibilní akutní selhání mozkových funkcí",
          "text": "Delirium je akutně vzniklá, fluktuující kvalitativní porucha vědomí (obluzené vědomí) a pozornosti způsobená přímým organickým poškozením mozku nebo systémovým somatickým onemocněním."
        },
        "sections": [
          {
            "title": "1. Etiopatogeneze a rizikové faktory deliria",
            "color": "cyan",
            "content": "\n                        <p class=\"mb-2 text-xs\">Základním neurochemickým mechanismem je <strong>deficit centrální cholinergní transmise</strong> v kombinaci s <strong>relativním excesem dopaminu</strong>, noradrenalinu a glutamátu.</p>\n                        <div class=\"grid md:grid-cols-2 gap-3 text-xs\">\n                            <div class=\"p-3 rounded-lg bg-slate-900 border border-slate-700\">\n                                <h4 class=\"font-bold text-amber-400 mb-1\">Predispoziční faktory (terén)</h4>\n                                <ul class=\"list-disc ml-4 space-y-0.5 text-slate-300\">\n                                    <li>Věk > 65–70 let</li>\n                                    <li>Preexistující kognitivní deficit (demence v anamnéze až 5x zvyšuje riziko!)</li>\n                                    <li>Senzorická deprivace (porucha zraku, sluchu)</li>\n                                    <li>Polymorbidita a polypragmázie</li>\n                                </ul>\n                            </div>\n                            <div class=\"p-3 rounded-lg bg-slate-900 border border-slate-700\">\n                                <h4 class=\"font-bold text-rose-400 mb-1\">Precipitační faktory (spouštěče)</h4>\n                                <ul class=\"list-disc ml-4 space-y-0.5 text-slate-300\">\n                                    <li><strong>Infekce:</strong> Urosepse, pneumonie, COVID-19</li>\n                                    <li><strong>Hypoxie a kardiovaskulární selhání:</strong> IM, CMP, anémie</li>\n                                    <li><strong>Elektrolytový rozvrat a dehydratace:</strong> Hyponatrémie, hypokalémie</li>\n                                    <li><strong>Léková toxicita:</strong> Anticholinergika, opioidy, sedativa</li>\n                                    <li><strong>Operační traumata a anestezie</strong></li>\n                                </ul>\n                            </div>\n                        </div>\n                    "
          },
          {
            "title": "2. Klinický obraz a formy deliria",
            "color": "indigo",
            "content": "\n                        <div class=\"p-3 rounded-lg bg-slate-900 border border-slate-700 text-xs space-y-2\">\n                            <div class=\"grid md:grid-cols-3 gap-2\">\n                                <div class=\"bg-slate-800 p-2 rounded\">\n                                    <strong class=\"text-rose-400\">Hyperaktivní (furibundní):</strong><br>Psychomotorický neklid, agrese, útěky z lůžka, halucinace, vegetativní bouře. Snadno rozpoznatelné.\n                                </div>\n                                <div class=\"bg-slate-800 p-2 rounded\">\n                                    <strong class=\"text-amber-400\">Hypoaktivní (blandní):</strong><br>Zpomalení, spavost, netečnost, tiché mumlání. Často uniká diagnóze (zaměněno za depresi či demenci), má však horší prognózu!\n                                </div>\n                                <div class=\"bg-slate-800 p-2 rounded\">\n                                    <strong class=\"text-cyan-400\">Smíšené delirium:</strong><br>Střídání fází apatie přes den a masivní noční agitovanosti (nejčastější forma).\n                                </div>\n                            </div>\n                            <ul class=\"list-disc ml-4 text-slate-300 space-y-1 mt-2\">\n                                <li><strong>Fluktuace v průběhu dne:</strong> Zhoršení večer a v noci ('sundowning fenomén').</li>\n                                <li><strong>Dezorientace:</strong> Především časem a místem (vlastní osobou bývá zachována).</li>\n                                <li><strong>Poruchy vnímání:</strong> Zrakové iluze a mikroskopické zrakové halucinace (<strong>mikrozoopsie</strong> – hmyz, myši, nitky).</li>\n                                <li><strong>Inverze spánkového rytmu a amnézie na proběhlý stav.</strong></li>\n                            </ul>\n                        </div>\n                    "
          },
          {
            "title": "3. Terapie a ošetřovatelský management deliria",
            "color": "emerald",
            "content": "\n                        <div class=\"space-y-2 text-xs\">\n                            <div class=\"p-3 rounded-lg bg-emerald-950/30 border border-emerald-500/30\">\n                                <strong class=\"text-emerald-400\">1. Kauzální léčba a režimová opatření (Základ úspěchu):</strong>\n                                <ul class=\"list-disc ml-4 mt-1 text-slate-300 space-y-0.5\">\n                                    <li>Léčba somatické příčiny (antibiotika u infekce, oxygenoterapie, rehydratace, úprava iontů).</li>\n                                    <li>Reorientace pacienta: přítomnost rodiny, hodiny, kalendář, brýle a naslouchadlo, noční tlumené světlo.</li>\n                                    <li>Vysazení delirogenní medikace (anticholinergika, TCA, спазmolytika).</li>\n                                </ul>\n                            </div>\n                            <div class=\"p-3 rounded-lg bg-slate-900 border border-slate-700\">\n                                <strong class=\"text-violet-300\">2. Symptomatická farmakoterapie:</strong>\n                                <ul class=\"list-disc ml-4 mt-1 text-slate-300 space-y-1\">\n                                    <li><strong>Tiaprid (Tiapridal):</strong> Lék 1. volby u geriatrického a pooperačního deliria (100–300 mg p.o./i.v./i.m.). Bezpečný kardiovaskulárně, netlumí dýchání.</li>\n                                    <li><strong>Haloperidol:</strong> U těžké agitovanosti (0,5–2 mg i.v./i.m.), nutná kontrola QTc na EKG!</li>\n                                    <li><strong>Atypická antipsychotika:</strong> Quetiapin (25–50 mg na noc), Risperidon.</li>\n                                    <li>⚠️ <strong>Zákaz benzodiazepinů (BZD):</strong> U somatického/geriatrického deliria BZD prohlubují zmatenost a vyvolávají paradoxní agitaci! <em>Výjimka:</em> Alkoholové delirium tremens, kde jsou BZD lékem volby.</li>\n                                </ul>\n                            </div>\n                        </div>\n                    "
          }
        ]
      },
      "recall": {
        "scenarios": [
          {
            "id": "s02-r1",
            "title": "Kazuistika S2: Noční zmatenost po operaci a volba sedace",
            "question": "80letá pacientka 1. pooperační den po cholecystektomii začíná být v noci silně agitovaná, vytahuje si kanylu a křičí, že po stropě lezou hadi. Službu konající mladý lékař chce naordinovat Diazepam 10 mg i.v. Je tento postup správný?",
            "answer": "NENÍ SPRÁVNÝ. Podání diazepamu (či jiného BZD) u geriatrického pooperačního deliria je hrubou chybou, která může vést k paradoxní dezinhibici, progresi zmatenosti a útlumu dechu. Správným postupem je: 1. Aplikace Tiapridu (100 mg i.v./i.m.) nebo nízké dávky Haloperidolu/Quetiapinu, 2. Kontrola saturace O2, glykémie, vnitřního prostředí a vyloučení retence moči (častý spouštěč!), 3. Zajištění klidného personálu a osvětlení.",
            "pearl": "Jediná indikace pro BZD u deliria: Delirium tremens vyvolané abstinencí od alkoholu nebo benzodiazepinů."
          }
        ]
      },
      "cards": [
        {
          "id": "sc02-1",
          "front": "Jaký je hlavní rozdíl ve farmakoterapii deliria tremens (alkoholového) vs. geriatrického somatického deliria?",
          "back": "U alkoholového deliria tremens jsou lékem 1. volby Benzodiazepiny (Diazepam / Klomethiazol), zatímco u geriatrického deliria jsou BZD kontraindikovány a lékem volby je Tiaprid nebo Haloperidol / Quetiapin.",
          "hint": "Volba BZD",
          "category": "psychopatologie"
        },
        {
          "id": "sc02-2",
          "front": "Proč je hypoaktivní delirium klinicky nebezpečnější než hyperaktivní?",
          "back": "Protože často uniká pozornosti personálu (pacient je tichý, spavý, leží) a bývá mylně považováno za depresi či demenci, což oddaluje kauzální léčbu somatické příčiny.",
          "hint": "Hypoaktivní forma",
          "category": "psychopatologie"
        },
        {
          "id": "sc02-3",
          "front": "Jaké zrakové halucinace jsou typické pro delirium?",
          "back": "Mikrozoopsie (drobní brouci, hmyz, myši, nitky) a zrakové iluze z nejasných stínů v prostoru.",
          "hint": "Mikrozoopsie",
          "category": "psychopatologie"
        }
      ],
      "quiz": [
        {
          "id": "s02-test1",
          "question": "Které z následujících tvrzení o deliriu je PRAVDIVÉ?",
          "options": [
            "Vědomí je po celou dobu trvání zcela lucidní a jasné",
            "Průběh deliria je typicky fluktuující se zhoršováním v nočních hodinách a pacient má na stav amnézii",
            "Lékem první volby u pooperačního geriatrického deliria je vysoká dávka diazepamu",
            "Vzniká pozvolna po dobu několika let"
          ],
          "correctIndex": 1,
          "explanation": "Delirium se vyznačuje akutním vznikem, kolísáním během 24 hodin (horší v noci) a typickou amnézií na proběhlý stav."
        },
        {
          "id": "s02-test2",
          "question": "Který lék je bezpečným a preferovaným antipsychotikem první volby při neklidu u geriatrických pacientů s deliriem?",
          "options": [
            "Tiaprid",
            "Amitriptylin",
            "Zolpidem",
            "Chlorpromazin"
          ],
          "correctIndex": 0,
          "explanation": "Tiaprid (selektivní D2/D3 antagonista) má minimální kardiální a extrapyramidové nežádoucí účinky a je lékem volby u gerontopsychiatrického deliria."
        }
      ]
    },
    {
      "id": "s03-zavislost-alkohol-leky",
      "number": 3,
      "section": "specialni",
      "sectionLabel": "Speciální psychiatrie",
      "badgePrefix": "S03",
      "title": "Syndrom závislosti na alkoholu a návykových lécích",
      "shortDesc": "MKN-10 kritéria závislosti (6 znaků). Akutní intoxikace, škodlivé užívání, odvykací stav a delirium tremens. Wernicke-Korsakovův syndrom (thiamin). Protialkoholní léčba (disulfiram, akamprosat, naltrexon). Závislost na BZD a Z-látkách.",
      "category": "psychopatologie",
      "badge": "Závislosti",
      "badgeColor": "rose",
      "theory": {
        "banner": {
          "tag": "Poruchy vyvolané psychoaktivními látkami (F10–F19)",
          "title": "Syndrom závislosti na alkoholu a sedativech",
          "text": "Závislost je chronické relabující onemocnění charakterizované nutkavou potřebou užívat látku (craving), ztrátou kontroly a pokračováním v užívání navzdory závažným somatickým, psychickým i sociálním následkům."
        },
        "sections": [
          {
            "title": "1. Diagnostická kritéria syndromu závislosti (MKN-10 / F1x.2)",
            "color": "rose",
            "content": "\n                        <div class=\"p-3 rounded-lg bg-slate-900 border border-slate-700 text-xs\">\n                            <p class=\"text-slate-300 mb-2\">Pro diagnózu závislosti musí být přítomny <strong>alespoň 3 z následujících 6 znaků</strong> současně po dobu min. 1 měsíce (nebo opakovaně během 12 měsíců):</p>\n                            <ol class=\"list-decimal ml-4 text-slate-300 space-y-1\">\n                                <li><strong>Craving (bažení):</strong> Silná, nepřekonatelná touha nebo nutkání užít látku.</li>\n                                <li><strong>Ztráta kontroly:</strong> Narušená schopnost kontrolovat začátek, ukončení nebo množství užité látky.</li>\n                                <li><strong>Somatický odvykací stav (abstinenční syndrom):</strong> Příznaky po vysazení či snížení dávky.</li>\n                                <li><strong>Průkaz tolerance:</strong> Potřeba vyšších dávek k dosažení původního účinku.</li>\n                                <li><strong>Zanedbávání jiných zájmů a potěšení:</strong> Postupné podřizování veškerého času získávání látky.</li>\n                                <li><strong>Pokračování v užívání přes jasný důkaz škodlivých následků</strong> (jaterní cirhóza, rozpad rodiny, ztráta práce).</li>\n                            </ol>\n                        </div>\n                    "
          },
          {
            "title": "2. Odvykací stav od alkoholu a Delirium tremens",
            "color": "amber",
            "content": "\n                        <div class=\"space-y-2 text-xs\">\n                            <div class=\"p-3 rounded-lg bg-slate-900 border border-slate-700\">\n                                <strong class=\"text-amber-400\">Nekomplikovaný odvykací stav (nastupuje za 6–24 h po poklesu alkoholu):</strong>\n                                <p class=\"text-slate-300 mt-1\">Tremor jazyka a víček, pocení, tachykardie, hypertenze, nauzea, vnitřní tenze, insomnie. Riziko epileptických záchvatů (tzv. rumové záchvaty / epileptické paroxysmy z odnětí).</p>\n                            </div>\n                            <div class=\"p-3 rounded-lg bg-rose-950/40 border border-rose-500/40\">\n                                <strong class=\"text-rose-400\">🚨 Delirium tremens (nastupuje za 48–72 h po přerušení pití):</strong>\n                                <p class=\"text-slate-300 mt-1\">Život ohrožující stav (mortalita bez léčby až 15 %)! Dezorientace, masivní zrakové a taktilní halucinace (mikrozoopsie – hmyz, hlodavci), hrubý tremor, profúzní pocení, tachykardie, horečka, dehydratace.</p>\n                                <p class=\"text-slate-300 mt-1\"><strong>Léčba odvykacího stavu a deliria tremens:</strong></p>\n                                <ul class=\"list-disc ml-4 text-slate-300 space-y-0.5\">\n                                    <li><strong>Benzodiazepiny ve vysokých dávkách:</strong> Diazepam (10–20 mg p.o./i.v. titračně dle skóre CIWA-Ar) nebo Klomethiazol (Heminevrin).</li>\n                                    <li><strong>Thiamin (Vitamin B1) i.v./i.m. ve vysoké dávce:</strong> VŽDY aplikovat <strong>PŘED infuzí glukózy</strong> k prevenci Wernickeovy encefalopatie!</li>\n                                    <li>Hydratace, minerály (Mg2+, K+), monitoring vitálních funkcí na JIP.</li>\n                                </ul>\n                            </div>\n                            <div class=\"p-3 rounded-lg bg-slate-900 border border-slate-700\">\n                                <strong class=\"text-violet-300\">Wernicke-Korsakovův syndrom (z těžkého deficitu vitaminu B1):</strong>\n                                <p class=\"text-slate-300 mt-1\"><strong>Wernickeova encefalopatie (akutní):</strong> Triáda – oftalmoplegie (obrny očních svalů, nystagmus) + ataxie chůze + zmatenost.</p>\n                                <p class=\"text-slate-300 mt-1\"><strong>Korsakovova psychóza (chronické stádium):</strong> Těžká anterográdní i retrográdní amnézie s <strong>konfabulacemi</strong> (vymýšlí si vzpomínky k zaplnění výpadků) a dezorientací časem.</p>\n                            </div>\n                        </div>\n                    "
          },
          {
            "title": "3. Dlouhodobá léčba závislosti na alkoholu a lécích",
            "color": "emerald",
            "content": "\n                        <div class=\"grid md:grid-cols-2 gap-3 text-xs\">\n                            <div class=\"p-3 rounded-lg bg-slate-900 border border-slate-700\">\n                                <h4 class=\"font-bold text-emerald-400 mb-1\">Farmakoterapie v udržovací léčbě</h4>\n                                <ul class=\"list-disc ml-4 text-slate-300 space-y-1\">\n                                    <li><strong>Disulfiram (Antabus):</strong> Blokuje acetaldehyddehydrogenázu ➔ po napití hromadění toxického acetaldehydu (flush, hypotenze, tachykardie, nauzea, strach ze smrti). Averzivní léčba.</li>\n                                    <li><strong>Akamprosat (Campral):</strong> Modulátor GABA/glutamátu, tlumí craving a 'protrahovaný abstinenční syndrom'.</li>\n                                    <li><strong>Naltrexon:</strong> Opioidní antagonista, blokuje euforizující účinek alkoholu, snižuje bažení.</li>\n                                    <li><strong>Nalmefen:</strong> Režim kontrolované konzumace u aktivních pijáků.</li>\n                                </ul>\n                            </div>\n                            <div class=\"p-3 rounded-lg bg-slate-900 border border-slate-700\">\n                                <h4 class=\"font-bold text-violet-300 mb-1\">Závislost na sedativech a hypnoticích (BZD)</h4>\n                                <p class=\"text-slate-300\">Iatrogenní závislost vzniká již po 4–6 týdnech užívání. Odvykací stav: úzkost, nespavost, tremor, hypersenzitivita na hluk a světlo, křeče.</p>\n                                <p class=\"text-slate-300 mt-1\"><strong>Detoxifikace:</strong> Převod na ekvivalentní dávku dlouhodobě působícího Diazepamu a jeho <strong>velmi pomalé snižování</strong> (o 10–20 % za 1–2 týdny po dobu několika měsíců!).</p>\n                            </div>\n                        </div>\n                    "
          }
        ]
      },
      "recall": {
        "scenarios": [
          {
            "id": "s03-r1",
            "title": "Kazuistika S3: Prevence Wernickeovy encefalopatie na urgentním příjmu",
            "question": "ZZS přiváží 52letého kachektického bezdomovce s chronickou závislostí na alkoholu. Je somnolentní, má těžkou hypoglykémii (2,1 mmol/l) a nystagmus. Lékař ordinoval rychlou infuzi 40% glukózy i.v. Jaký klíčový krok musí před aplikací glukózy bezpodmínečně provést?",
            "answer": "Musí bezpodmínečně aplikovat vysokou dávku Thiaminu (Vitaminu B1, např. 100–500 mg i.v./i.m.) PŘED nebo současně s infuzí glukózy! Podání samotné glukózy u pacienta s deplecí thiaminu spotřebuje poslední zbytky kofaktoru pro glykolýzu a vyvolá akutní, potenciálně fatální Wernickeovu encefalopatii a nekrózu corpora mamillaria.",
            "pearl": "Zlaté pravidlo urgentní medicíny: Alkoholikovi NIKDY nepodávat glukózu bez předchozího thiaminu!"
          }
        ]
      },
      "cards": [
        {
          "id": "sc03-1",
          "front": "Kolik kritérií z MKN-10 musí být splněno pro stanovení diagnózy syndromu závislosti?",
          "back": "Alespoň 3 z celkových 6 kritérií přítomných současně po dobu min. 1 měsíce (nebo opakovaně během roku).",
          "hint": "MKN-10 kritéria",
          "category": "psychopatologie"
        },
        {
          "id": "sc03-2",
          "front": "Jaký je mechanismus účinku disulfiramu (Antabusu)?",
          "back": "Ireverzibilní inhibice acetaldehyddehydrogenázy, což při požití alkoholu vede k akumulaci toxického acetaldehydu a těžké averzivní reakci.",
          "hint": "Enzymová blokáda",
          "category": "psychopatologie"
        },
        {
          "id": "sc03-3",
          "front": "Jaké příznaky tvoří klasickou triádu Wernickeovy encefalopatie?",
          "back": "1. Oftalmoplegie / nystagmus (poruchy okohybných svalů), 2. Ataxie chůze, 3. Globální zmatenost (mentální alterace).",
          "hint": "Wernickeova triáda",
          "category": "psychopatologie"
        }
      ],
      "quiz": [
        {
          "id": "s03-test1",
          "question": "Které léčivo je lékem první volby pro zvládnutí akutního alkoholového odvykacího stavu a prevenci epileptických paroxysmů?",
          "options": [
            "Diazepam (nebo Klomethiazol)",
            "Disulfiram",
            "Haloperidol v monoterapii",
            "Naltrexon"
          ],
          "correctIndex": 0,
          "explanation": "Benzodiazepiny (Diazepam) nahrazují chybějící GABA-ergní inhibici po vysazení alkoholu a brání rozvoji křečí a deliria tremens."
        },
        {
          "id": "s03-test2",
          "question": "Co je typickým projevem Korsakovovy psychózy vzniklé v důsledku chronického deficitu thiaminu u alkoholismu?",
          "options": [
            "Těžká anterográdní a retrográdní amnézie s konfabulacemi",
            "Zrakové mikrozoopsie",
            "Manická nálada s logoreou",
            "Spastická paraparéza"
          ],
          "correctIndex": 0,
          "explanation": "Korsakovova psychóza je charakterizována těžkým výpadkem paměti, který pacient nevědomky zaplňuje smyšlenými vzpomínkami (konfabulacemi)."
        }
      ]
    },
    {
      "id": "s04-nelegalni-navyky-latky",
      "number": 4,
      "section": "specialni",
      "sectionLabel": "Speciální psychiatrie",
      "badgePrefix": "S04",
      "title": "Syndrom závislosti na nelegálních psychoaktivních látkách",
      "shortDesc": "Stimulancia (pervitin, kokain – toxická psychóza). Opioidy (heroin, fentanyl – intoxikační triáda, Naloxon, substituční léčba: buprenorfin, methadon). Kanabinoidy (amotivační syndrom). Halucinogeny (LSD), disociativa (ketamin) a těkavé látky.",
      "category": "psychopatologie",
      "badge": "Závislosti",
      "badgeColor": "rose",
      "theory": {
        "banner": {
          "tag": "Toxikomanie (F11–F19)",
          "title": "Závislosti na nelegálních drogách",
          "text": "Nelegální psychoaktivní látky vyvolávají závislost přímou stimulací odměnového dopaminového systému v nucleus accumbens. Liší se profilem intoxikace, rizikem předávkování a odvykacími syndromy."
        },
        "sections": [
          {
            "title": "1. Psychostimulancia (Metamfetamin / Pervitin, Kokain, MDMA / Extáze)",
            "color": "rose",
            "content": "\n                        <div class=\"p-3 rounded-lg bg-slate-900 border border-slate-700 text-xs space-y-2\">\n                            <span class=\"font-bold text-amber-400\">Metamfetamin (Pervitin) & Kokain:</span>\n                            <p class=\"text-slate-300\">Masivní vyplavení a blokáda zpětného vychytávání dopaminu a noradrenalinu (kokain navíc lokální anestetikum a kardiotoxikum – spazmy koronárek, IM, CMP).</p>\n                            <div class=\"grid md:grid-cols-2 gap-2 text-slate-300\">\n                                <div>\n                                    <strong>Akutní intoxikace:</strong> Mydriáza, tachykardie, hypertenze, motorický neklid, nespavost, euforie, vymizení hladu a únavy, logorea, hyperpyrexie.\n                                </div>\n                                <div>\n                                    <strong>Toxická psychóza (stíha):</strong> Paranoidně-persekuční bludy (policie, sledování), sluchové i taktilní halucinace (paraziti pod kůží – Magnanův příznak), agresivita.\n                                </div>\n                            </div>\n                            <p class=\"text-slate-300\"><strong>Odvykací stav (Crash syndrom):</strong> Těžká deprese, hypersomnie, hyperfagie (vlčí hlad), anhedonie a extrémní craving s vysokým suicidálním rizikem!</p>\n                            <p class=\"text-slate-300\"><strong>MDMA (Extáze):</strong> Entaktogen (vyplavení serotoninu), riziko život ohrožujícího <em>hyperpyretického a sérotoninového syndromu</em> při tanci v horku.</p>\n                        </div>\n                    "
          },
          {
            "title": "2. Opioidy (Heroin, Fentanyl, Morfin, Oxykodon, Buprenorfin)",
            "color": "indigo",
            "content": "\n                        <div class=\"space-y-2 text-xs\">\n                            <div class=\"p-3 rounded-lg bg-rose-950/40 border border-rose-500/40\">\n                                <strong class=\"text-rose-400\">🚨 Akutní intoxikace / Předávkování opioidy (Fatální triáda):</strong>\n                                <ul class=\"list-disc ml-4 text-slate-300 space-y-0.5 mt-1\">\n                                    <li>1. <strong>Mióza</strong> (špendlíkovité zornice – pin-point pupils).</li>\n                                    <li>2. <strong>Útlum dechového centra</strong> (hypoventilace &lt; 8–10 dechů/min až apnoe, cyanóza).</li>\n                                    <li>3. <strong>Porucha vědomí</strong> (kóma).</li>\n                                </ul>\n                                <p class=\"text-emerald-400 font-bold mt-1\">Specifické antidotum: Naloxon i.v./i.m./intranazálně (opakovaně, má kratší poločas než většina opioidů!).</p>\n                            </div>\n                            <div class=\"p-3 rounded-lg bg-slate-900 border border-slate-700\">\n                                <strong class=\"text-violet-300\">Odvykací stav a Substituční léčba:</strong>\n                                <p class=\"text-slate-300 mt-1\"><strong>Abstinenční syndrom:</strong> Mydriáza, slzení, rinorea, piloerekce ('cold turkey'), zívání, svalové bolesti, průjem, křeče v břiše. Není bezprostředně letální, ale je extrémně trýznivý.</p>\n                                <p class=\"text-slate-300 mt-1\"><strong>Substituční terapie (OAT):</strong></p>\n                                <ul class=\"list-disc ml-4 text-slate-300 space-y-0.5\">\n                                    <li><strong>Buprenorfin (Subutex / Suboxone s naloxonem):</strong> Parciální mý-opioidní agonista, má stropový efekt na útlum dechu (bezpečnější). Suboxone obsahuje naloxon k zabránění i.v. zneužití.</li>\n                                    <li><strong>Methadon:</strong> Plný syntetický agonista podávaný ve specializovaných centrech.</li>\n                                </ul>\n                            </div>\n                        </div>\n                    "
          },
          {
            "title": "3. Kanabinoidy, Halucinogeny a Těkavé látky",
            "color": "cyan",
            "content": "\n                        <ul class=\"list-disc ml-5 space-y-1 text-xs text-slate-300\">\n                            <li><strong>Kanabinoidy (THC):</strong> Injekce spojivek, tachykardie, sucho v ústech, euforie/úzkost. <em>Rizika:</em> Amotivační syndrom (apatie, ztráta cílů) a provokace psychotické ataky u geneticky disponovaných jedinců (schizofrenie).</li>\n                            <li><strong>Halucinogeny (LSD, Psilocybin):</strong> Zkreslení vnímání, synestezie, depersonalizace. <em>Rizika:</em> 'Bad trip' (panická úzkost, toxická psychóza), 'Flashback' (návrat halucinací po měsících bez drogy).</li>\n                            <li><strong>Disociativní anestetika (Ketamin, PCP):</strong> Analgezie, disociace těla a mysli, anestetické stavy (K-hole), nystagmus.</li>\n                            <li><strong>Těkavé látky (Toluen, ředidla):</strong> Extrémně neurotoxické a kardiotoxické (náhlá smrt z arytmie 'sudden sniffing death', encefalopatie, poškození ledvin a jater).</li>\n                        </ul>\n                    "
          }
        ]
      },
      "recall": {
        "scenarios": [
          {
            "id": "s04-r1",
            "title": "Kazuistika S4: Předávkování neznámou látkou v nočním klubu",
            "question": "Na diskotéce byl na toaletě nalezen 24letý muž v bezvědomí. Dýchá s frekvencí 6 dechů za minutu, je cyanotický, na obou očích má špendlíkovité zornice (miózu) a na předloktí čerstvé vpichy. Jaká je okamžitá diagnóza a terapie?",
            "answer": "Jedná se o akutní předávkování opioidy (heroin/fentanyl) s dechovou depresí a komatem. Okamžitou terapií volby je aplikace specifického opioidního antagonisty Naloxonu (0,4–2 mg i.v. nebo i.m./intranazálně) spolu se zajištěním dýchacích cest a 100% kyslíkem. Vzhledem ke krátkému poločasu naloxonu je nutné pacienta monitorovat a dávku opakovat.",
            "pearl": "Triáda předávkování opioidy: 1. Mióza (špendlíkovité zornice), 2. Dechový útlum/apnoe, 3. Kóma. Antidotum: Naloxon."
          }
        ]
      },
      "cards": [
        {
          "id": "sc04-1",
          "front": "Jaká je klasická triáda předávkování opioidy a jaké je specifické antidotum?",
          "back": "Triáda: 1. Mióza (špendlíkovité zornice), 2. Dechová deprese (hypoventilace/apnoe), 3. Kóma. Antidotum: Naloxon.",
          "hint": "Opioidní toxicita",
          "category": "psychopatologie"
        },
        {
          "id": "sc04-2",
          "front": "Které 2 hlavní látky se v ČR používají k substituční léčbě závislosti na opioidech?",
          "back": "1. Buprenorfin (Subutex / Suboxone), 2. Methadon.",
          "hint": "Substituční terapie",
          "category": "psychopatologie"
        },
        {
          "id": "sc04-3",
          "front": "Jaký je hlavní rozdíl v očních zornicích při intoxikaci opioidy vs. stimulancii (pervitin/kokain)?",
          "back": "Opioidy způsobují výraznou MIÓZU (zúžení), zatímco stimulancia způsobují výraznou MYDRIÁZU (rozšíření zornic).",
          "hint": "Zornice",
          "category": "psychopatologie"
        }
      ],
      "quiz": [
        {
          "id": "s04-test1",
          "question": "Které z následujících tvrzení o toxické psychóze vyvolané metamfetaminem (pervitinem) je SPRÁVNÉ?",
          "options": [
            "Typicky se projevuje výraznou miózou a somnolencí",
            "Dominují paranoidně-persekuční bludy (pocit sledování), sluchové/taktilní halucinace a mydriáza",
            "Vždy vyžaduje celoživotní léčbu klozapinem",
            "Projevuje se těžkou bradykardií a hypotenzí"
          ],
          "correctIndex": 1,
          "explanation": "Pervitinová toxická psychóza (stíha) se projevuje masivní dopaminergní stimulací s paranoiditou, mydriázou, tachykardií a halucinacemi."
        },
        {
          "id": "s04-test2",
          "question": "Proč obsahuje kombinovaný substituční přípravek Suboxone kromě buprenorfinu také naloxon?",
          "options": [
            "Naloxon zvyšuje vstřebávání buprenorfinu v žaludku",
            "Při perorálním užití se naloxon nevstřebá, ale při pokusu o rozpuštění a nitrožilní aplikaci zablokuje účinek a vyvolá abstinenční syndrom (prevence zneužití)",
            "Naloxon léčí poruchy spánku",
            "Naloxon působí jako antidepresivum"
          ],
          "correctIndex": 1,
          "explanation": "Naloxon má po sublingválním podání minimální biologickou dostupnost, ale při injekčním zneužití neutralizuje buprenorfin a odradí od i.v. aplikace."
        }
      ]
    },
    {
      "id": "s05-depresivni-poruchy",
      "number": 5,
      "section": "specialni",
      "sectionLabel": "Speciální psychiatrie",
      "badgePrefix": "S05",
      "title": "Depresivní poruchy (epidemiologie, etiopatogeneze, klinický obraz, léčba)",
      "shortDesc": "Jádrové a somatické příznaky deprese. Klasifikace závažnosti (lehká, střední, těžká s/bez psychózy). Cotardův syndrom. Fáze a strategie léčby (SSRI, SNRI, NaSSA, augmentace, ECT, esketamin).",
      "category": "psychopatologie",
      "badge": "Afektivní poruchy",
      "badgeColor": "violet",
      "theory": {
        "banner": {
          "tag": "Afektivní poruchy (F30–F39)",
          "title": "Depresivní porucha – prevalence, symptomatika a moderní terapie",
          "text": "Deprese je jednou z nejčastějších příčin invalidity celosvětově (celoživotní prevalence 10–15 %, ženy : muži 2 : 1). Jde o systémové onemocnění s narušením monoaminergní transmise, osy HPA a hipokampální neuroplasticity."
        },
        "sections": [
          {
            "title": "1. Diagnostická kritéria depresivní epizody (MKN-10 / F32)",
            "color": "violet",
            "content": "\n                        <div class=\"space-y-2 text-xs\">\n                            <div class=\"p-3 rounded-lg bg-slate-900 border border-slate-700\">\n                                <span class=\"font-bold text-violet-300\">3 Hlavní (jádrové) příznaky:</span>\n                                <ul class=\"list-disc ml-4 mt-1 text-slate-300 space-y-0.5\">\n                                    <li>1. <strong>Patologicky pokleslá nálada:</strong> Přetrvávající po většinu dne, téměř každý den, minimálně <strong>2 týdny</strong>, nezávislá na vnějších okolnostech.</li>\n                                    <li>2. <strong>Anhedonie a ztráta zájmů:</strong> Neschopnost prožívat radost a potěšení z aktivit, které dříve těšily.</li>\n                                    <li>3. <strong>Snížená energie a zvýšená únavnost:</strong> Výrazný pokles aktivity i po minimální námaze.</li>\n                                </ul>\n                            </div>\n                            <div class=\"p-3 rounded-lg bg-slate-900 border border-slate-700\">\n                                <span class=\"font-bold text-cyan-300\">Další (přídatné a somatické) příznaky:</span>\n                                <p class=\"text-slate-300 mt-1\">Pokles sebevědomí, neodůvodněné pocity viny a sebeobviňování, <strong>suicidální myšlenky a chování</strong>, nerozhodnost a zhoršená koncentrace (bradypsychismus), psychomotorický útlum nebo agitovanost, <strong>poruchy spánku</strong> (typické probouzení o 2 a více hodin dříve), <strong>ranní pesima nálady</strong>, nechutenství s váhovým úbytkem (> 5 % za měsíc), pokles libida.</p>\n                            </div>\n                            <div class=\"p-3 rounded-lg bg-slate-900 border border-slate-700\">\n                                <span class=\"font-bold text-emerald-300\">Stupně závažnosti:</span>\n                                <ul class=\"list-disc ml-4 text-slate-300 space-y-0.5\">\n                                    <li><strong>Lehká (F32.0):</strong> 2 hlavní + 2 přídatné (zvládá běžné fungování s obtížemi).</li>\n                                    <li><strong>Středně těžká (F32.1):</strong> 2 hlavní + 3–4 přídatné (výrazné obtíže v práci i rodině).</li>\n                                    <li><strong>Těžká bez psychózy (F32.2):</strong> 3 hlavní + min. 4 přídatné (neschopnost sebepéče, vysoké suicidální riziko).</li>\n                                    <li><strong>Těžká s psychotickými příznaky (F32.3):</strong> Bludy mikromanické (autoakuzační, ruinační, hypochondrické, Cotardův nihilistický syndrom) nebo sluchové halucinace hlasů obviňujících pacienta.</li>\n                                </ul>\n                            </div>\n                        </div>\n                    "
          },
          {
            "title": "2. Léčebné strategie u depresivní poruchy",
            "color": "emerald",
            "content": "\n                        <div class=\"grid md:grid-cols-2 gap-3 text-xs\">\n                            <div class=\"p-3 rounded-lg bg-slate-900 border border-slate-700\">\n                                <h4 class=\"font-bold text-emerald-400 mb-1\">Farmakoterapie dle volby</h4>\n                                <ul class=\"list-disc ml-4 text-slate-300 space-y-1\">\n                                    <li><strong>1. volba:</strong> SSRI (Sertralin, Escitalopram, Citalopram).</li>\n                                    <li><strong>Při těžké depresi a bolesti:</strong> SNRI (Venlafaxin, Duloxetin).</li>\n                                    <li><strong>Při insomnii a nechutenství:</strong> NaSSA (Mirtazapin) nebo Trazodon.</li>\n                                    <li><strong>Při útlumu a zachování libida:</strong> NDRI (Bupropion) nebo Vortioxetin.</li>\n                                    <li><strong>Pokračovací léčba:</strong> 6–9 měsíců ve stejné plné dávce!</li>\n                                </ul>\n                            </div>\n                            <div class=\"p-3 rounded-lg bg-slate-900 border border-slate-700\">\n                                <h4 class=\"font-bold text-rose-400 mb-1\">Rezistentní a psychotická deprese</h4>\n                                <ul class=\"list-disc ml-4 text-slate-300 space-y-1\">\n                                    <li><strong>Augmentace:</strong> Přidání Lithia k antidepresivu nebo atypického AP (Quetiapin, Aripiprazol, Olanzapin).</li>\n                                    <li><strong>Psychotická deprese:</strong> VŽDY kombinace Antidepresivum + Antipsychotikum NEBO Elektrokonvulze (ECT).</li>\n                                    <li><strong>Elektrokonvulzivní terapie (ECT):</strong> Lék volby při těžké suicidalitě, psychóze a sitofobii (účinnost 85–90 %).</li>\n                                    <li><strong>Esketamin intranazálně (Spravato):</strong> Rychlá úleva u farmakorezistentní deprese.</li>\n                                </ul>\n                            </div>\n                        </div>\n                    "
          }
        ]
      },
      "recall": {
        "scenarios": [
          {
            "id": "s05-r1",
            "title": "Kazuistika S5: Melancholická deprese s ranními pesimy",
            "question": "54letá úřednice přichází pro 2 měsíce trvající neschopnost pracovat, ztrátu veškeré radosti, buzení ve 3 hodiny ráno s úzkostí a pocitem, že 'celý život pokazila a rodině by bylo lépe bez ní'. Dopoledne je stav nejhorší, večer se cítí o něco lépe. Zhubla 7 kg. O jaký typ deprese se jedná a jaká je léčba?",
            "answer": "Jedná se o těžkou depresivní epizodu se somatickým (melancholickým) syndromem a vysokým suicidálním rizikem (ranní pesima, insomnie s předčasným probouzením, anhedonie, váhový úbytek). Indikována je okamžitá psychiatrická péče, zahájení antidepresivní léčby (SSRI např. Sertralin 50–100 mg nebo SNRI Venlafaxin) s přechodnou anxiolytickou clonou (např. Trazodon či nízká dávka BZD na úvod) a zhodnocení nutnosti hospitalizace pro riziko suicidia.",
            "pearl": "Somatický (melancholický) syndrom: Anhedonie + ranní probouzení (> 2h dříve) + ranní pesima + psychomotorické zpomalení + úbytek váhy (> 5%)."
          }
        ]
      },
      "cards": [
        {
          "id": "sc05-1",
          "front": "Jaké jsou 3 základní jádrové příznaky depresivní epizody dle MKN-10?",
          "back": "1. Pokleslá nálada (min. 2 týdny), 2. Anhedonie (ztráta zájmu a radosti), 3. Pokles energie a zvýšená únavnost.",
          "hint": "3 hlavní symptomy",
          "category": "psychopatologie"
        },
        {
          "id": "sc05-2",
          "front": "Jaká je definice ranních pesim u depresivní poruchy?",
          "back": "Klinický stav, kdy se pacient cítí psychicky nejhůře časně ráno po probuzení a během večera dochází k mírnému relativnímu zlepšení nálady.",
          "hint": "Cirkadiánní fluktuace",
          "category": "psychopatologie"
        },
        {
          "id": "sc05-3",
          "front": "Jaká je doporučená farmakoterapie psychotické deprese?",
          "back": "Kombinace Antidepresiva + Antipsychotika (např. Sertralin + Olanzapin/Quetiapin) nebo Elektrokonvulzivní terapie (ECT).",
          "hint": "Psychotická deprese",
          "category": "psychopatologie"
        }
      ],
      "quiz": [
        {
          "id": "s05-test1",
          "question": "Jaká je minimální doba trvání příznaků nutná pro stanovení diagnózy depresivní epizody dle MKN-10?",
          "options": [
            "3 dny",
            "2 týdny",
            "6 měsíců",
            "1 rok"
          ],
          "correctIndex": 1,
          "explanation": "Příznaky deprese musí přetrvávat po většinu dne téměř nepřetržitě po dobu nejméně 2 týdnů."
        },
        {
          "id": "s05-test2",
          "question": "Které antidepresivum je optimální volbou u depresivního pacienta, který trpí těžkou nespavostí a výrazným nechutenstvím s úbytkem váhy?",
          "options": [
            "Bupropion",
            "Mirtazapin",
            "Fluoxetin",
            "Reboxetin"
          ],
          "correctIndex": 1,
          "explanation": "Mirtazapin (NaSSA) má silný antihistaminový sedativní účinek podporující spánek a zvyšuje chuť k jídlu a tělesnou hmotnost."
        }
      ]
    },
    {
      "id": "s06-bipolarni-afektivni-porucha",
      "number": 6,
      "section": "specialni",
      "sectionLabel": "Speciální psychiatrie",
      "badgePrefix": "S06",
      "title": "Bipolární afektivní porucha (epidemiologie, etiopatogeneze, klinický obraz, léčba)",
      "shortDesc": "BAP I (střídání mánií a depresí), BAP II (hypománie a deprese), cyklotymie, rapid cycling. Manický syndrom. Akutní léčba mánie (AP 2. gen, valproát, lithium). Dlouhodobá profylaxe (Lithium, Lamotrigin u bipolární deprese, atypika). Riziko přesmyku po AD.",
      "category": "psychopatologie",
      "badge": "Afektivní poruchy",
      "badgeColor": "violet",
      "theory": {
        "banner": {
          "tag": "Afektivní poruchy (F31)",
          "title": "Bipolární afektivní porucha (BAP)",
          "text": "BAP je závažné celoživotní onemocnění s vysokou heritabilitou (až 80 %), charakterizované opakovanými epizodami narušené nálady – mánie, hypománie, deprese a smíšených stavů."
        },
        "sections": [
          {
            "title": "1. Klasifikace a formy BAP",
            "color": "violet",
            "content": "\n                        <div class=\"grid md:grid-cols-2 gap-3 text-xs\">\n                            <div class=\"p-3 rounded-lg bg-slate-900 border border-slate-700\">\n                                <h4 class=\"font-bold text-violet-300 mb-1\">Typologie bipolární poruchy</h4>\n                                <ul class=\"list-disc ml-4 space-y-1 text-slate-300\">\n                                    <li><strong>BAP I:</strong> Přítomnost alespoň jedné plně rozvinuté <strong>manické epizody</strong> (s psychózou či hospitalizací), obvykle střídající se s těžkými depresemi.</li>\n                                    <li><strong>BAP II:</strong> Přítomnost <strong>těžkých depresí</strong> a alespoň jedné <strong>hypomanické epizody</strong> (nikdy nebyla plná mánie ani psychóza). Často chybně diagnostikována jako unipolární deprese!</li>\n                                    <li><strong>Cyklotymie:</strong> Dlouhodobá (min. 2 roky) nestabilita nálady s četnými periodami mírné deprese a mírné hypománie nedosahující kritérií BAP.</li>\n                                    <li><strong>Rapid cycling (rychlé cyklování):</strong> ≥ 4 afektivní epizody během jednoho roku (horší prognóza, lékem volby Valproát).</li>\n                                </ul>\n                            </div>\n                            <div class=\"p-3 rounded-lg bg-slate-900 border border-slate-700\">\n                                <h4 class=\"font-bold text-amber-300 mb-1\">Klinický obraz manické epizody</h4>\n                                <ul class=\"list-disc ml-4 space-y-0.5 text-slate-300\">\n                                    <li>Abnormálně nadnesená, expanzivní, euforická nebo dysforicky podrážděná nálada (min. 1 týden).</li>\n                                    <li>Grandiozita a megalomanické sebevědomí.</li>\n                                    <li><strong>Snížená potřeba spánku</strong> (např. 2–3 hodiny denně bez pocitu únavy).</li>\n                                    <li>Myšlenkový trysk (tachypsychismus, fuga idearum), logorea.</li>\n                                    <li>Psychomotorický neklid, překotná činnost.</li>\n                                    <li><strong>Rizikové a nezodpovědné jednání:</strong> Nekontrolované utrácení peněz, bezhlavé půjčky, riskantní investice, sexuální promiskuita.</li>\n                                    <li>Úplná ztráta náhledu na chorobnost stavu.</li>\n                                </ul>\n                            </div>\n                        </div>\n                    "
          },
          {
            "title": "2. Léčba akutní mánie, bipolární deprese a dlouhodobá profylaxe",
            "color": "emerald",
            "content": "\n                        <div class=\"space-y-2 text-xs\">\n                            <div class=\"p-3 rounded-lg bg-slate-900 border border-slate-700\">\n                                <strong class=\"text-rose-400\">1. Léčba akutní mánie:</strong>\n                                <p class=\"text-slate-300 mt-1\">Léky 1. volby: <strong>Atypická antipsychotika</strong> (Olanzapin, Quetiapin, Aripiprazol, Risperidon) v monoterapii nebo v kombinaci s <strong>Valproátem</strong> či <strong>Lithiem</strong>. Antidepresiva musí být okamžitě vysazena!</p>\n                            </div>\n                            <div class=\"p-3 rounded-lg bg-slate-900 border border-slate-700\">\n                                <strong class=\"text-cyan-400\">2. Léčba bipolární deprese:</strong>\n                                <p class=\"text-slate-300 mt-1\">Léky volby: <strong>Quetiapin</strong>, <strong>Lurasidon</strong>, <strong>Lamotrigin</strong> nebo kombinace Olanzapin + Fluoxetin (OFC).<br>⚠️ <strong>Monoterapie antidepresivy (SSRI/TCA) je u BAP ZAKÁZÁNA</strong> – hrozí indukce přesmyku do mánie (switch) nebo rozvoj rapid cycling!</p>\n                            </div>\n                            <div class=\"p-3 rounded-lg bg-slate-900 border border-slate-700\">\n                                <strong class=\"text-emerald-400\">3. Dlouhodobá profylaktická léčba (Tymoprofylaxe):</strong>\n                                <ul class=\"list-disc ml-4 text-slate-300 space-y-0.5 mt-1\">\n                                    <li><strong>Lithium (Li2CO3):</strong> Zlatý standard profylaxe mánií i depresí, silný antisuicidální efekt (TDM 0,6–0,8 mmol/l).</li>\n                                    <li><strong>Lamotrigin:</strong> Nejúčinnější v prevenci depresivních fází BAP.</li>\n                                    <li><strong>Valproát:</strong> Výborný u mánií a rapid cyclingu.</li>\n                                    <li><strong>Atypická antipsychotika:</strong> Quetiapin, Aripiprazol, Olanzapin.</li>\n                                </ul>\n                            </div>\n                        </div>\n                    "
          }
        ]
      },
      "recall": {
        "scenarios": [
          {
            "id": "s06-r1",
            "title": "Kazuistika S6: Farmakologický přesmyk z deprese do mánie",
            "question": "32letá žena léčená pro údajnou 'unipolární depresi' citalopramem 40 mg začala po 3 týdnech spát jen 2 hodiny denně, nakoupila luxusní kabelky za 200 000 Kč na dluh, mluví překotně bez zastavení a tvrdí, že byla vybrána jako poradkyně prezidenta. O co se jedná a jaký je terapeutický krok?",
            "answer": "Jedná se o farmakologicky indukovaný přesmyk (switch) z deprese do akutní mánie u dosud nediagnostikované Bipolární afektivní poruchy vyvolaný monoterapií SSRI. Okamžitý postup: 1. Ihned vysadit Citalopram, 2. Nasadit antimanickou léčbu – Atypické antipsychotikum (např. Olanzapin 10–20 mg nebo Quetiapin) a tymoprofylaktikum (Lithium nebo Valproát), 3. Zvážit akutní hospitalizaci k ochraně před finančními a sociálními škodami.",
            "pearl": "Varování: Monoterapie antidepresivy u nerozpoznané BAP I/II vede k přesmykům do mánie a zhoršuje dlouhodobý průběh nemoci."
          }
        ]
      },
      "cards": [
        {
          "id": "sc06-1",
          "front": "Jaký je zásadní rozdíl mezi diagnózou BAP I a BAP II?",
          "back": "BAP I vyžaduje přítomnost alespoň 1 plné manické epizody (často s psychózou/hospitalizací), zatímco u BAP II se vyskytují pouze hypomanické epizody a těžké deprese.",
          "hint": "BAP I vs II",
          "category": "psychopatologie"
        },
        {
          "id": "sc06-2",
          "front": "Proč je monoterapie antidepresivy u bipolární afektivní poruchy kontraindikována?",
          "back": "Protože nese vysoké riziko přesmyku (switche) do mánie a rozvoje rychlého cyklování (rapid cycling).",
          "hint": "Riziko přesmyku",
          "category": "psychopatologie"
        },
        {
          "id": "sc06-3",
          "front": "Které tymoprofylaktikum je specificky nejúčinnější v prevenci nových depresivních epizod u BAP?",
          "back": "Lamotrigin.",
          "hint": "Profylaxe deprese u BAP",
          "category": "psychopatologie"
        }
      ],
      "quiz": [
        {
          "id": "s06-test1",
          "question": "Který stabilizátor nálady je celosvětově považován za zlatý standard profylaxe BAP a prokazatelně snižuje riziko dokonaných sebevražd?",
          "options": [
            "Lithium",
            "Diazepam",
            "Citalopram",
            "Piracetam"
          ],
          "correctIndex": 0,
          "explanation": "Lithium zůstává zlatým standardem dlouhodobé léčby BAP s unikátním a robustním antisuicidálním účinkem."
        },
        {
          "id": "s06-test2",
          "question": "Pojem 'rapid cycling' (rychlé cyklování) u bipolární afektivní poruchy označuje:",
          "options": [
            "Výskyt alespoň 4 afektivních epizod během jednoho roku",
            "Přesmyk nálady během několika minut po podání kofeinu",
            "Pouze sezónní výskyt mánií v létě",
            "Denní kolísání krevního tlaku"
          ],
          "correctIndex": 0,
          "explanation": "Rapid cycling je definován jako výskyt 4 a více afektivních fází (deprese, mánie, hypománie, smíšené) během 12 měsíců."
        }
      ]
    },
    {
      "id": "s07-schizofrenie",
      "number": 7,
      "section": "specialni",
      "sectionLabel": "Speciální psychiatrie",
      "badgePrefix": "S07",
      "title": "Schizofrenie",
      "shortDesc": "Dopaminová a glutamátová hypotéza. Pozitivní vs. negativní symptomy. Schneiderovy příznaky 1. řádu. Formy schizofrenie (paranoidní, hebefrenní, katatonní, simplexní). Léčba (antipsychotika 2./3. gen, klozapin u rezistence, LAI depotní injekce, psychosociální rehabilitace).",
      "category": "psychopatologie",
      "badge": "Psychotické poruchy",
      "badgeColor": "rose",
      "theory": {
        "banner": {
          "tag": "Psychotické poruchy (F20–F29)",
          "title": "Schizofrenie – jádrové psychotické onemocnění",
          "text": "Schizofrenie je závažná chronická duševní porucha s celoživotní prevalencí kolem 1 %, charakterizovaná rozpadem myšlení, vnímání, emotivity a kontaktu s realitou. Typický nástup je v časné dospělosti (18–25 let)."
        },
        "sections": [
          {
            "title": "1. Pozitivní, Negativní a Kognitivní symptomatika",
            "color": "rose",
            "content": "\n                        <div class=\"grid md:grid-cols-3 gap-2 text-xs\">\n                            <div class=\"p-3 rounded-lg bg-slate-900 border border-slate-700\">\n                                <strong class=\"text-rose-400\">Pozitivní symptomy (hyperdopaminergní mezolimbický stav):</strong>\n                                <ul class=\"list-disc ml-4 text-slate-300 space-y-0.5 mt-1\">\n                                    <li><strong>Bludy:</strong> Paranoidní, persekuční, vztahovačné, vlivu a ovládání.</li>\n                                    <li><strong>Halucinace:</strong> Zejména sluchové (komentující hlasy, imperativní hlasy, dialogické hádky hlasů).</li>\n                                    <li>Dezorganizované myšlení a řeč (paralogie, inkoherence, schizofázie).</li>\n                                    <li>Katatonní projevy (raptus, manýrování).</li>\n                                </ul>\n                            </div>\n                            <div class=\"p-3 rounded-lg bg-slate-900 border border-slate-700\">\n                                <strong class=\"text-amber-400\">Negativní symptomy (hypodopaminergní mezokortikální stav):</strong>\n                                <ul class=\"list-disc ml-4 text-slate-300 space-y-0.5 mt-1\">\n                                    <li><strong>Afektivní oploštělost:</strong> Emoční chlad, otupělost, chudá mimika.</li>\n                                    <li><strong>Alogie:</strong> Ochuzení řeči a myšlení.</li>\n                                    <li><strong>Abulie a Apatie:</strong> Ztráta vůle, iniciativy a energie.</li>\n                                    <li><strong>Anhedonie a Asocialita:</strong> Ztráta schopnosti prožívat radost a stažení se ze společnosti.</li>\n                                </ul>\n                            </div>\n                            <div class=\"p-3 rounded-lg bg-slate-900 border border-slate-700\">\n                                <strong class=\"text-cyan-400\">Kognitivní deficit a Schneiderovy příznaky 1. řádu:</strong>\n                                <p class=\"text-slate-300 mt-1\">Porucha pozornosti, pracovní paměti a exekutivy.</p>\n                                <p class=\"text-slate-300 mt-1\"><strong>Schneiderovy příznaky I. řádu:</strong> Hlasité myšlení (sonorizace), slyšení hlasů které se o pacientovi baví/komentují jeho jednání, tělesné halucinace vlivu, vkládání/odnímání/vysílání myšlenek cizí mocí, bludné vnímání.</p>\n                            </div>\n                        </div>\n                    "
          },
          {
            "title": "2. Klinické formy schizofrenie (MKN-10 / F20)",
            "color": "indigo",
            "content": "\n                        <div class=\"space-y-2 text-xs\">\n                            <div class=\"p-3 rounded-lg bg-slate-900 border border-slate-700\">\n                                <strong class=\"text-violet-300\">Paranoidní schizofrenie (F20.0 – nejčastější forma, cca 70–80 %):</strong>\n                                <p class=\"text-slate-300\">Dominují trvalé paranoidně-persekuční bludy a sluchové halucinace. Emoce a osobnost bývají v úvodu relativně zachovány. Nejlepší odpověď na léčbu antipsychotiky.</p>\n                            </div>\n                            <div class=\"p-3 rounded-lg bg-slate-900 border border-slate-700\">\n                                <strong class=\"text-amber-300\">Hebefrenní schizofrenie (F20.1 – desorganizovaná):</strong>\n                                <p class=\"text-slate-300\">Začátek v adolescenci (15–25 let). Nepřiléhavé, šaškovské chování, manýrování, pseudofilozofování, afektivní oploštělost, rychlý rozvoj negativních symptomů. Horší prognóza.</p>\n                            </div>\n                            <div class=\"p-3 rounded-lg bg-slate-900 border border-slate-700\">\n                                <strong class=\"text-rose-300\">Katatonní schizofrenie (F20.2):</strong>\n                                <p class=\"text-slate-300\">Dominují motorické poruchy – stupor s flexibilitas cerea a mutismem střídající se s katatonním raptem (divoký neklid). Hrozí febrilní katatonie (indikace k ECT!).</p>\n                            </div>\n                            <div class=\"p-3 rounded-lg bg-slate-900 border border-slate-700\">\n                                <strong class=\"text-teal-300\">Simplexní schizofrenie (F20.6):</strong>\n                                <p class=\"text-slate-300\">Plíživý, postupný rozvoj těžkých negativních příznaků (apatie, ztráta zájmů, sociální pád, bezdomovectví) <strong>BEZ přítomnosti bludů a halucinací</strong>. Velmi špatná prognóza.</p>\n                            </div>\n                        </div>\n                    "
          },
          {
            "title": "3. Komplexní léčba schizofrenie",
            "color": "emerald",
            "content": "\n                        <div class=\"grid md:grid-cols-2 gap-3 text-xs\">\n                            <div class=\"p-3 rounded-lg bg-slate-900 border border-slate-700\">\n                                <h4 class=\"font-bold text-emerald-400 mb-1\">Farmakoterapie</h4>\n                                <ul class=\"list-disc ml-4 text-slate-300 space-y-1\">\n                                    <li><strong>1. volba:</strong> Atypická antipsychotika 2. a 3. generace (Risperidon, Olanzapin, Aripiprazol, Quetiapin, Cariprazin, Amisulprid).</li>\n                                    <li><strong>Dlouhodobě působící injekce (LAI / depotní AP):</strong> Paliperidon palmitát, Aripiprazol depot, Haloperidol decanoat – zajišťují spolehlivou adherenci a chrání před relapsem.</li>\n                                    <li><strong>Farmakorezistence:</strong> <strong>Klozapin</strong> (lék volby při selhání 2 různých AP, nutné kontroly KO!).</li>\n                                </ul>\n                            </div>\n                            <div class=\"p-3 rounded-lg bg-slate-900 border border-slate-700\">\n                                <h4 class=\"font-bold text-cyan-400 mb-1\">Psychosociální intervence</h4>\n                                <ul class=\"list-disc ml-4 text-slate-300 space-y-1\">\n                                    <li>Psychoedukace pacienta i rodiny (snížení 'vyjádřených emocí' Expressed Emotion v rodině zásadně snižuje relapsy!).</li>\n                                    <li>Kognitivní trénink a nácvik sociálních dovedností.</li>\n                                    <li>Centra duševního zdraví (CDZ), podporované zaměstnávání a chráněné bydlení.</li>\n                                </ul>\n                            </div>\n                        </div>\n                    "
          }
        ]
      },
      "recall": {
        "scenarios": [
          {
            "id": "s07-r1",
            "title": "Kazuistika S7: První psychotická ataka schizofrenie",
            "question": "20letý student informatiky se v posledních 6 měsících uzavřel do sebe, přestal chodit do školy a zanedbává hygienu. Poslední 2 týdny tvrdí, že přes zásuvky v bytě mu cizí organizace vysílá do mozku myšlenky a komentuje každý jeho krok v místnosti. Je přesvědčen, že je napojen na satelit. O jakou poruchu a formu se jedná a jaká je léčba?",
            "answer": "Jedná se o první ataku paranoidní schizofrenie (F20.0) s přítomností pozitivních symptomů (persekuční bludy a bludy ovlivňování, sluchové komentující halucinace, intrapsychické halucinace vysílání myšlenek) a prodromálních negativních symptomů (sociální stažení, zanedbávání hygieny). Léčba: nasazení atypického antipsychotika 2. generace (např. Risperidon 2–4 mg/den nebo Aripiprazol 10–15 mg/den či Olanzapin), psychoedukace a po stabilizaci dispenzarizace.",
            "pearl": "Včasná intervence: Zkrácení doby neléčené psychózy (DUP – Duration of Untreated Psychosis) je klíčovým prognostickým faktorem pro zachování kognitivních funkcí."
          }
        ]
      },
      "cards": [
        {
          "id": "sc07-1",
          "front": "Které příznaky patří mezi Schneiderovy symptomy prvního řádu u schizofrenie?",
          "back": "1. Hlasité myšlení (sonorizace), 2. Hlasy diskutující o pacientovi nebo komentující jeho chování, 3. Tělesné halucinace ovlivňování, 4. Vkládání, odnímání a vysílání myšlenek, 5. Bludné vnímání.",
          "hint": "Schneider I. řád",
          "category": "psychopatologie"
        },
        {
          "id": "sc07-2",
          "front": "Čím se vyznačuje simplexní schizofrenie (F20.6)?",
          "back": "Plíživým, progresivním rozvojem závažných negativních symptomů (apatie, abulie, autismus, sociální propad) BEZ přítomnosti bludů a halucinací.",
          "hint": "Simplexní forma",
          "category": "psychopatologie"
        },
        {
          "id": "sc07-3",
          "front": "Jaký význam mají dlouhodobě působící injekční antipsychotika (LAI / depoty)?",
          "back": "Zajišťují stabilní plazmatickou hladinu léku, překonávají non-compliance s polykáním tablet a dramaticky snižují riziko relapsu a rehospitalizace.",
          "hint": "LAI antipsychotika",
          "category": "psychopatologie"
        }
      ],
      "quiz": [
        {
          "id": "s07-test1",
          "question": "Která forma schizofrenie začíná typicky v adolescenci a projevuje se šaškovským, nezralým chováním, manýrováním a neadekvátní afektivitou?",
          "options": [
            "Paranoidní schizofrenie",
            "Hebefrenní schizofrenie",
            "Katatonní schizofrenie",
            "Simplexní schizofrenie"
          ],
          "correctIndex": 1,
          "explanation": "Hebefrenie (desorganizovaná schizofrenie) se manifestuje v pubertě a adolescenci šaškováním, manýrováním a nevhodným emočním laděním."
        },
        {
          "id": "s07-test2",
          "question": "Který lék je zlatým standardem a jediným schváleným antipsychotikem pro farmakorezistentní schizofrenii?",
          "options": [
            "Haloperidol",
            "Klozapin",
            "Diazepam",
            "Citalopram"
          ],
          "correctIndex": 1,
          "explanation": "Klozapin je indikován při farmakorezistenci (selhání alespoň 2 různých AP v adekvátní dávce) a vyžaduje pravidelný monitoring krevního obrazu."
        }
      ]
    },
    {
      "id": "s08-ostatni-psychoticke-poruchy",
      "number": 8,
      "section": "specialni",
      "sectionLabel": "Speciální psychiatrie",
      "badgePrefix": "S08",
      "title": "Ostatní psychotické poruchy mimo schizofrenii",
      "shortDesc": "Porucha s trvalými bludy (paranoia – izolovaný blud bez halucinací a bez rozpadu osobnosti). Akutní a přechodné psychotické poruchy (ATP – náhlý vznik a rychlá úzdrava). Schizoafektivní porucha (manický/depresivní typ). Indukovaná porucha s bludy (folie à deux).",
      "category": "psychopatologie",
      "badge": "Psychotické poruchy",
      "badgeColor": "rose",
      "theory": {
        "banner": {
          "tag": "Psychotické poruchy (F22–F24)",
          "title": "Neschizofrenní psychotické poruchy",
          "text": "Skupina poruch s psychotickou symptomatologií, které nesplňují diagnostická kritéria schizofrenie ani primárních afektivních poruch. Zahrnují izolované bludy, rychlé přechodné ataky i schizoafektivní stavy."
        },
        "sections": [
          {
            "title": "1. Porucha s trvalými bludy (Paranoia / F22)",
            "color": "rose",
            "content": "\n                        <div class=\"p-3 rounded-lg bg-slate-900 border border-slate-700 text-xs\">\n                            <span class=\"font-bold text-violet-300\">Definice a rysy:</span>\n                            <p class=\"text-slate-300 mt-1\">Jediným nebo dominantním klinickým příznakem je <strong>jeden dlouhodobý, stabilní, systematizovaný blud</strong> trvající alespoň 3 měsíce. Osobnost, intelekt a běžné fungování mimo oblast bludu zůstávají <strong>zcela zachovány</strong>! Chybí trvalé sluchové halucinace a schizofrenní rozpad myšlení.</p>\n                            <p class=\"text-slate-300 mt-2\"><strong>Typické obsahy bludů:</strong></p>\n                            <ul class=\"list-disc ml-4 text-slate-300 space-y-0.5\">\n                                <li><strong>Persekuční blud:</strong> Pronásledování sousedy, tajnými službami.</li>\n                                <li><strong>Žárlivecký blud (Othellův syndrom):</strong> Nevývratné přesvědčení o nevěře partnera na základě nesmyslných 'důkazů' (pomačkané prostěradlo).</li>\n                                <li><strong>Kverulační blud:</strong> Neustálé soudní spory, stížnosti na úřady pro domnělé bezpráví.</li>\n                                <li><strong>Erotomanický blud (de Clérambaultův syndrom):</strong> Přesvědčení, že do pacienta je tajně zamilována vysoce postavená celebrita či politik.</li>\n                                <li><strong>Hypochondrický / Dysmorfofobický blud:</strong> Přesvědčení o zápachu z těla, parazitech (Ekbomův syndrom).</li>\n                            </ul>\n                            <p class=\"text-amber-400 mt-2\"><em>Léčba:</em> Antipsychotika (často slabá odpověď pro vysokou petrifikaci bludu), podpůrná psychoterapie (nevyvracet blud přímo, budovat alianci).</p>\n                        </div>\n                    "
          },
          {
            "title": "2. Akutní a přechodné psychotické poruchy (ATP / F23) & Indukovaný blud (F24)",
            "color": "indigo",
            "content": "\n                        <div class=\"grid md:grid-cols-2 gap-3 text-xs\">\n                            <div class=\"p-3 rounded-lg bg-slate-900 border border-slate-700\">\n                                <h4 class=\"font-bold text-cyan-300 mb-1\">Akutní a přechodná psychóza (ATP)</h4>\n                                <ul class=\"list-disc ml-4 text-slate-300 space-y-1\">\n                                    <li><strong>Akutní nástup:</strong> Rozvoj ze zdravého stavu do plné psychózy během <strong>&lt; 2 týdnů</strong> (často do 48 hodin po těžkém psychosociálním stresu).</li>\n                                    <li><strong>Polymorfní obraz:</strong> Proměnlivost bludů, halucinací a emocí ze dne na den (tzv. bouřlivý stav).</li>\n                                    <li><strong>Prognóza:</strong> Vynikající! Úplná úzdrava nastává obvykle do <strong>1–3 měsíců</strong>.</li>\n                                </ul>\n                            </div>\n                            <div class=\"p-3 rounded-lg bg-slate-900 border border-slate-700\">\n                                <h4 class=\"font-bold text-amber-300 mb-1\">Indukovaná porucha s bludy (Folie à deux / F24)</h4>\n                                <p class=\"text-slate-300\">Bludné přesvědčení sdílené dvěma či více osobami žijícími v těsném emočním a sociálním kontaktu v izolaci od okolí.</p>\n                                <p class=\"text-slate-300 mt-1\">Pouze jedna osoba (induktor) trpí primární psychózou. Druhá, závislá osoba blud přebírá.</p>\n                                <p class=\"text-emerald-400 font-bold mt-1\">Léčba volby: Fyzické oddělení (separace) obou osob ➔ u indukované osoby blud spontánně vymizí!</p>\n                            </div>\n                        </div>\n                    "
          },
          {
            "title": "3. Schizoafektivní porucha (F25)",
            "color": "emerald",
            "content": "\n                        <div class=\"p-3 rounded-lg bg-slate-900 border border-slate-700 text-xs\">\n                            <span class=\"font-bold text-emerald-400\">Charakteristika:</span>\n                            <p class=\"text-slate-300 mt-1\">Stav, kdy jsou v rámci téže ataky onemocnění <strong>současně přítomny</strong> jak jednoznačné <strong>schizofrenní příznaky</strong> (Schneiderovy příznaky 1. řádu, inkoherence), tak výrazné <strong>afektivní příznaky</strong> (plná manická nebo těžká depresivní epizoda).</p>\n                            <p class=\"text-slate-300 mt-1\">Dělí se na: <em>Schizoafektivní poruchu manický typ</em>, <em>depresivní typ</em> a <em>smíšený typ</em>. Prognóza je lepší než u schizofrenie, ale horší než u bipolární poruchy.</p>\n                            <p class=\"text-slate-300 mt-1\"><strong>Léčba:</strong> Kombinace Atypického antipsychotika + Stabilizátoru nálady (Lithium / Valproát) nebo Antidepresiva.</p>\n                        </div>\n                    "
          }
        ]
      },
      "recall": {
        "scenarios": [
          {
            "id": "s08-r1",
            "title": "Kazuistika S8: Kverulační bludy u zachovalé osobnosti",
            "question": "60letý středoškolský profesor podal za poslední 3 roky přes 80 trestních oznámení a žalob na vedení školy a sousedy, o kterých tvrdí, že mu tajně odposlouchávají kabinet a falšují třídní knihy k jeho diskreditaci. Mimo toto téma učí bez chyb, je společensky upravený, kognitivně zcela intaktní a nemá halucinace. O jakou poruchu se jedná?",
            "answer": "Jedná se o Poruchu s trvalými bludy (F22 – kverulační / persekuční typ paranoie). Typickým rysem je izolovaný, systematizovaný blud při plném zachování osobnosti, intelektu a fungování v oblastech, kterých se blud netýká.",
            "pearl": "Terapeutický přístup: Přímé vyvracení bludu vede pouze ke ztrátě důvěry a pacient může lékaře zařadit do spiknutí. Cílem je navázání aliance a redukce úzkosti/napětí."
          }
        ]
      },
      "cards": [
        {
          "id": "sc08-1",
          "front": "Jaký je klíčový rozdíl mezi schizofrenií a poruchou s trvalými bludy (paranoií)?",
          "back": "U poruchy s trvalými bludy je přítomen izolovaný blud BEZ sluchových halucinací, BEZ inkoherence a BEZ rozpadu osobnosti (mimo blud funguje pacient normálně).",
          "hint": "Paranoia vs Schizofrenie",
          "category": "psychopatologie"
        },
        {
          "id": "sc08-2",
          "front": "Jaká je terapeutická intervence první volby u indukované poruchy s bludy (folie à deux)?",
          "back": "Oddělení (separace) obou osob od sebe. U indukovaného partnera blud po separaci zpravidla spontánně vymizí.",
          "hint": "Folie à deux",
          "category": "psychopatologie"
        },
        {
          "id": "sc08-3",
          "front": "Co je to de Clérambaultův syndrom?",
          "back": "Erotomanický blud v rámci poruchy s trvalými bludy, kdy je pacient nevývratně přesvědčen, že je do něj tajně zamilována vysoce postavená známá osobnost.",
          "hint": "Erotomanie",
          "category": "psychopatologie"
        }
      ],
      "quiz": [
        {
          "id": "s08-test1",
          "question": "Pro akutní a přechodnou psychotickou poruchu (ATP / F23) je typické:",
          "options": [
            "Plíživý nástup po dobu několika let a nevratná demence",
            "Rychlý vznik ze zdravého stavu (do 2 týdnů), proměnlivá polymorfní symptomatologie a plná úzdrava do 1–3 měsíců",
            "Přítomnost pouze tělesných příznaků bez bludů",
            "Vznik výhradně po úrazu míchy"
          ],
          "correctIndex": 1,
          "explanation": "ATP se vyznačuje bleskovým rozvojem psychózy, proměnlivým obrazem a výbornou prognózou s návratem k plnému zdraví."
        },
        {
          "id": "s08-test2",
          "question": "Při schizoafektivní poruše (F25) musí být v klinickém obraze téže ataky přítomny:",
          "options": [
            "Pouze těžké výpadky paměti a dezorientace",
            "Současně jednoznačné schizofrenní příznaky i plně vyjádřené afektivní příznaky (mánie nebo deprese)",
            "Pouze panické záchvaty s hyperventilací",
            "Somatizační potíže bez psychózy"
          ],
          "correctIndex": 1,
          "explanation": "Schizoafektivní porucha je definována současným výskytem schizofrenních a afektivních symptomů v rámci jedné epizody."
        }
      ]
    },
    {
      "id": "s09-uzkostne-neuroticke-poruchy",
      "number": 9,
      "section": "specialni",
      "sectionLabel": "Speciální psychiatrie",
      "badgePrefix": "S09",
      "title": "Úzkostné a neurotické poruchy (stresové poruchy, poruchy přizpůsobení, úzkostné poruchy, fobie, OCD)",
      "shortDesc": "Panická porucha, agorafobie, sociální fobie, GAD. Obsedantně-kompulzivní porucha OCD (obsese, kompulze, ERP terapie). Reakce na těžký stres (ASR vs. PTSD: flashbacky, hyperarousal). Léčba (SSRI, pregabalin, KBT).",
      "category": "psychopatologie",
      "badge": "Neurotické poruchy",
      "badgeColor": "cyan",
      "theory": {
        "banner": {
          "tag": "Neurotické a stresové poruchy (F40–F48)",
          "title": "Úzkostné a fobie – nejčastější psychické poruchy v populaci",
          "text": "Úzkostné poruchy mají celoživotní prevalenci až 20–25 %. Vyznačují se nepřiměřeným, trýznivým strachem a úzkostí provázenou vegetativní hyperaktivitou, vyhýbavým chováním a narušením fungování."
        },
        "sections": [
          {
            "title": "1. Fobické a Úzkostné poruchy (F40, F41)",
            "color": "cyan",
            "content": "\n                        <div class=\"grid md:grid-cols-2 gap-3 text-xs\">\n                            <div class=\"p-3 rounded-lg bg-slate-900 border border-slate-700\">\n                                <h4 class=\"font-bold text-violet-300 mb-1\">Panická porucha & Agorafobie</h4>\n                                <ul class=\"list-disc ml-4 space-y-1 text-slate-300\">\n                                    <li><strong>Panická porucha (F41.0):</strong> Rekurentní, neočekávané záchvaty masivní úzkosti a děsu bez reálného nebezpečí. <em>Příznaky:</em> Palpitace, tachykardie, dušnost, svírání na hrudi, závratě, pocit na omdlení, derealizace, strach ze smrti nebo zešílení. Trvá 10–30 minut.</li>\n                                    <li><strong>Agorafobie (F40.0):</strong> Strach z míst, kde by byl obtížný únik nebo pomoc při panickém záchvatu (davy, MHD, mosty, nákupní centra).</li>\n                                </ul>\n                            </div>\n                            <div class=\"p-3 rounded-lg bg-slate-900 border border-slate-700\">\n                                <h4 class=\"font-bold text-cyan-300 mb-1\">GAD & Sociální fobie</h4>\n                                <ul class=\"list-disc ml-4 space-y-1 text-slate-300\">\n                                    <li><strong>Generalizovaná úzkostná porucha (GAD / F41.1):</strong> Chronická, 'volně plynoucí' generalizovaná úzkost, obavy ze všeho možného a svalové napětí trvající <strong>min. 6 měsíců</strong>.</li>\n                                    <li><strong>Sociální fobie (F40.1):</strong> Strach ze zkoumavých pohledů druhých, z trapnosti při vystupování, jídle na veřejnosti, provázený třesem a červenáním.</li>\n                                </ul>\n                            </div>\n                        </div>\n                    "
          },
          {
            "title": "2. Obsedantně-kompulzivní porucha (OCD / F42)",
            "color": "indigo",
            "content": "\n                        <div class=\"p-3 rounded-lg bg-slate-900 border border-slate-700 text-xs\">\n                            <p class=\"text-slate-300 mb-2\">Charakterizována přítomností <strong>obsesí</strong> a/nebo <strong>kompulzí</strong> po většinu dnů po dobu alespoň 2 týdnů:</p>\n                            <div class=\"grid md:grid-cols-2 gap-2 text-slate-300\">\n                                <div>\n                                    <strong class=\"text-amber-400\">Obsese (vtíravé myšlenky):</strong><br>Nechtěné, opakující se, egodystonní myšlenky, představy či impulsy, které pacient vnímá jako nesmyslné a vlastní, vyvolávají masivní tíseň (např. kontaminace špínou, pochybnosti o zamčení, agresivní impulzy).\n                                </div>\n                                <div>\n                                    <strong class=\"text-amber-400\">Kompulze (rituály):</strong><br>Stereotypní chování nebo mentální akty prováděné k redukci úzkosti vyvolané obsesí (mytí rukou 50x denně, počítání, kontrolování spotřebičů).\n                                </div>\n                            </div>\n                            <p class=\"text-emerald-400 font-bold mt-2\">Léčba OCD: Vysoké dávky SSRI (Sertralin až 200 mg, Escitalopram 20 mg, Klomipramin) + KBT s expozicí a zábranou rituálu (ERP).</p>\n                        </div>\n                    "
          },
          {
            "title": "3. Reakce na těžký stres (ASR vs. PTSD / F43)",
            "color": "rose",
            "content": "\n                        <div class=\"grid md:grid-cols-2 gap-3 text-xs\">\n                            <div class=\"p-3 rounded-lg bg-slate-900 border border-slate-700\">\n                                <strong class=\"text-amber-400\">Akutní reakce na stres (ASR / F43.0):</strong>\n                                <p class=\"text-slate-300 mt-1\">Okamžitá reakce na katastrofickou událost (nehoda, útok). Začíná v minutách, projevuje se zúženým vědomím, dezorientací, stuporem či agitovaností. <strong>Odeznívá do 2–3 dnů.</strong></p>\n                            </div>\n                            <div class=\"p-3 rounded-lg bg-rose-950/30 border border-rose-500/30\">\n                                <strong class=\"text-rose-400\">🚨 Posttraumatická stresová porucha (PTSD / F43.1):</strong>\n                                <p class=\"text-slate-300 mt-1\">Opožděná reakce (latence týdnů až 6 měsíců) na extrémní trauma ohrožující život. <strong>Triáda symptomů:</strong></p>\n                                <ul class=\"list-disc ml-4 text-slate-300 space-y-0.5\">\n                                    <li>1. <strong>Intruze / Flashbacky:</strong> Nechtěné znovuprožívání traumatu v bdělém stavu, noční můry.</li>\n                                    <li>2. <strong>Vyhýbavé chování:</strong> Vyhýbání se všemu, co trauma připomíná, emoční oploštělost.</li>\n                                    <li>3. <strong>Hyperarousal (zvýšená bdělost):</strong> Nadměrná úleková reakce, poruchy spánku, vnitřní tenze.</li>\n                                </ul>\n                            </div>\n                        </div>\n                    "
          }
        ]
      },
      "recall": {
        "scenarios": [
          {
            "id": "s09-r1",
            "title": "Kazuistika S9: Pacient na interním příjmu s panickou atakou",
            "question": "25letá studentka je přivezena ZZS pro náhlý vznik bušení srdce, dušnosti, mravenčení v prstech a obličeji (parestézie z hyperventilace) a panického strachu, že má infarkt a umírá. EKG, troponin a krevní plyny jsou normální. Jaký je okamžitý a jaký je dlouhodobý postup léčby?",
            "answer": "Jedná se o panickou ataku v rámci panické poruchy. Akutní postup: zklidnění, dýchání do papírového sáčku (k úpravě respirační alkalózy z hyperventilace), event. sublingvální aplikace krátkodobého anxiolytika (např. Alprazolam / Oxazepam). Dlouhodobá léčba: lékem první volby jsou SSRI (např. Sertralin / Escitalopram) v kombinaci s Kognitivně-behaviorální terapií (KBT).",
            "pearl": "Edukace: Benzodiazepiny jsou určeny pouze pro překlenutí prvních 2–4 týdnů do nástupu účinku SSRI a musí být včas vysazeny k prevenci závislosti."
          }
        ]
      },
      "cards": [
        {
          "id": "sc09-1",
          "front": "Jaká je terapeutická technika první volby v KBT u obsedantně-kompulzivní poruchy (OCD)?",
          "back": "Expozice se zábranou reakce/rituálu (ERP – Exposure and Response Prevention).",
          "hint": "ERP technika",
          "category": "psychopatologie"
        },
        {
          "id": "sc09-2",
          "front": "Jaké 3 klíčové domény příznaků charakterizují Posttraumatickou stresovou poruchu (PTSD)?",
          "back": "1. Intruze (flashbacky a noční můry), 2. Vyhýbavé chování (avoidance), 3. Hyperarousal (zvýšená dráždivost a úleková reakce).",
          "hint": "PTSD triáda",
          "category": "psychopatologie"
        },
        {
          "id": "sc09-3",
          "front": "Jaké jsou léky 1. volby pro dlouhodobou farmakoterapii Generalizované úzkostné poruchy (GAD)?",
          "back": "SSRI / SNRI (např. Venlafaxin, Duloxetin, Escitalopram) a Pregabalin.",
          "hint": "GAD farmakoterapie",
          "category": "psychopatologie"
        }
      ],
      "quiz": [
        {
          "id": "s09-test1",
          "question": "Záchvat panické úzkosti typicky vrcholí během jaké doby a jak dlouho obvykle trvá?",
          "options": [
            "Vrcholí do 10 minut a celkově trvá 15 až 30 minut",
            "Trvá nepřetržitě 3 týdny bez kolísání",
            "Trvá přesně 24 hodin",
            "Trvá několik sekund bez vegetativních projevů"
          ],
          "correctIndex": 0,
          "explanation": "Panická ataka má náhlý začátek, vrcholí během minut a spontánně odeznívá během 20–30 minut."
        },
        {
          "id": "s09-test2",
          "question": "Které z následujících antidepresiv se u OCD podává v signifikantně vyšších terapeutických dávkách než u prosté deprese?",
          "options": [
            "Sertralin (až 200 mg/den)",
            "Mianserin (10 mg/den)",
            "Agomelatin (10 mg/den)",
            "Reboxetin (2 mg/den)"
          ],
          "correctIndex": 0,
          "explanation": "U OCD je pro blokádu obsesí nutné podávat plné, maximální tolerované dávky SSRI (např. Sertralin 200 mg) po dobu min. 10–12 týdnů."
        }
      ]
    },
    {
      "id": "s10-somatoformni-disociativni-poruchy",
      "number": 10,
      "section": "specialni",
      "sectionLabel": "Speciální psychiatrie",
      "badgePrefix": "S10",
      "title": "Somatoformní poruchy, disociativní a konverzní poruchy a psychosomatický přístup",
      "shortDesc": "Somatizační porucha, hypochondrická porucha, somatoformní autonomní dysfunkce. Disociativní (konverzní) poruchy: disociativní křeče (pseudozáchvaty), parezy, amnézie, fuga, la belle indifférence. Psychosomatika.",
      "category": "psychopatologie",
      "badge": "Somatoformní poruchy",
      "badgeColor": "cyan",
      "theory": {
        "banner": {
          "tag": "Psychosomatika & Disociace (F44, F45)",
          "title": "Tělesné projevy duševního napětí",
          "text": "Somatoformní a disociativní poruchy představují tělesnou manifestaci nevědomých intrapsychických konfliktů a emoční tísně bez přítomnosti prokazatelného strukturálního somatického onemocnění."
        },
        "sections": [
          {
            "title": "1. Somatoformní poruchy (F45)",
            "color": "cyan",
            "content": "\n                        <div class=\"space-y-2 text-xs\">\n                            <div class=\"p-3 rounded-lg bg-slate-900 border border-slate-700\">\n                                <span class=\"font-bold text-violet-300\">Somatizační porucha (F45.0 / dříve Briquetův syndrom):</span>\n                                <p class=\"text-slate-300 mt-1\">Mnohočetné, opakující se a často se měnící tělesné příznaky (bolesti břicha, pálení žáhy, nevolnost, bolesti kloubů, kožní parestézie) trvající <strong>nejméně 2 roky</strong>. Pacient odmítá vysvětlení o neexistenci tělesné nemoci a vyžaduje další a další vyšetření ('doctor shopping').</p>\n                            </div>\n                            <div class=\"p-3 rounded-lg bg-slate-900 border border-slate-700\">\n                                <span class=\"font-bold text-amber-300\">Hypochondrická porucha (F45.2):</span>\n                                <p class=\"text-slate-300 mt-1\">Trvalé, neoblomné přesvědčení pacienta, že trpí <strong>jednou nebo dvěma konkrétními závažnými tělesnými chorobami</strong> (např. karcinomem, ALS, roztroušenou sklerózou). Běžné tělesné vjemy (zvýšený puls, škroukání v břiše) interpretuje jako nezvratný důkaz fatální nemoci. Trvá min. 6 měsíců.</p>\n                            </div>\n                            <div class=\"p-3 rounded-lg bg-slate-900 border border-slate-700\">\n                                <span class=\"font-bold text-teal-300\">Somatoformní autonomní dysfunkce (F45.3):</span>\n                                <p class=\"text-slate-300\">Příznaky vztažené k orgánovým systémům pod vlivem vegetativní inervace: kardiovaskulární (srdeční neuróza, Da Costův syndrom), gastrointestinální (dráždivý tračník, aerofagie), respirační (hyperventilační tetanie).</p>\n                            </div>\n                        </div>\n                    "
          },
          {
            "title": "2. Disociativní (konverzní) poruchy (F44)",
            "color": "indigo",
            "content": "\n                        <div class=\"p-3 rounded-lg bg-slate-900 border border-slate-700 text-xs\">\n                            <p class=\"text-slate-300 mb-2\">Disociace je obranný mechanismus rozštěpení paměti, identity a vnímání vlastního těla v reakci na neřešitelný stres či trauma:</p>\n                            <ul class=\"list-disc ml-4 text-slate-300 space-y-1\">\n                                <li><strong>Disociativní motorické poruchy a parézy:</strong> Ochrnutí končetin bez neurologického korelátu (normální šlachové reflexy, chybí pyramidové jevy).</li>\n                                <li><strong>Disociativní křeče (neepileptické záchvaty / pseudozáchvaty):</strong> Napodobují grand mal paroxysmy, ale <strong>nemají epileptiformní výboje na EEG</strong>, zornice reagují na světlo, pacient se nepomočí, nepokouše do jazyka z boku a neublíží si při pádu.</li>\n                                <li><strong>La belle indifférence (Krásná lhostejnost):</strong> Nápadný klid a nedostatek obav pacienta z těžkého tělesného postižení (např. slepoty či ochrnutí).</li>\n                                <li><strong>Disociativní amnézie a Fuga:</strong> Výpadek paměti na traumatické události, bezcílné cestování s novou identitou.</li>\n                            </ul>\n                        </div>\n                    "
          },
          {
            "title": "3. Psychosomatický přístup a Léčba",
            "color": "emerald",
            "content": "\n                        <ul class=\"list-disc ml-5 space-y-1 text-xs text-slate-300\">\n                            <li><strong>První krok lékaře:</strong> Validovat pacientovo utrpení (příznaky jsou pro pacienta reálné a bolestivé, nesimuluje je!).</li>\n                            <li><strong>Zákaz zbytečných invazivních vyšetření:</strong> Stanovit jednoho ošetřujícího lékaře, pravidelné kontrolní návštěvy nezávislé na intenzitě potíží.</li>\n                            <li><strong>Psychoterapie (Základ léčby):</strong> KBT, psychodynamická psychoterapie zaměřená na propojení emocí a těla.</li>\n                            <li><strong>Farmakoterapie:</strong> Antidepresiva (SSRI, SNRI např. Duloxetin u chronické somatoformní bolesti).</li>\n                        </ul>\n                    "
          }
        ]
      },
      "recall": {
        "scenarios": [
          {
            "id": "s10-r1",
            "title": "Kazuistika S10: Diferenciální diagnostika disociativního záchvatu a epilepsie",
            "question": "19letá dívka byla přivezena po rodinné hádce s 'epileptickými záchvaty'. Na lůžku předvádí křečovité zmítání celým tělem, opistotonus (prohnutí do oblouku), má pevně sevřená víčka a brání se otevření očí lékařem. Zornice reagují na osvit, na jazyku není léze, EEG během záchvatu je zcela bez patologických výbojů. O jaký záchvat se jedná?",
            "answer": "Jedná se o disociativní (konverzní / psychogenní neepileptický) záchvat (PNES). Typickými znaky jsou: aktivní odpor při otevírání víček, normální fotoreakce, bizarní motorické projevy (opistotonus, kývání hlavou ze strany na stranu), absence pomočení, normální EEG během záchvatu a časová souvislost s psychosociálním stresem.",
            "pearl": "Léčba konverzních záchvatů: Pacienta nestigmatizovat, aplikovat KBT a psychoterapii, vyhnout se antiepileptikům."
          }
        ]
      },
      "cards": [
        {
          "id": "sc10-1",
          "front": "Co znamená pojem 'la belle indifférence' u konverzních poruch?",
          "back": "Nápadný klid, lhostejnost a nedostatek emočního zaujetí pacienta k závažnému tělesnému postižení (např. náhlé funkční slepotě či paréze).",
          "hint": "Krásná lhostejnost",
          "category": "psychopatologie"
        },
        {
          "id": "sc10-2",
          "front": "Jaký je hlavní rozdíl mezi hypochondrickou poruchou a somatizační poruchou?",
          "back": "U hypochondrie se pacient obává jedné konkrétní vážné choroby (např. rakoviny), zatímco u somatizace trpí mnoha proměnlivými tělesnými příznaky v různých orgánech.",
          "hint": "Jedna nemoc vs mnoho příznaků",
          "category": "psychopatologie"
        },
        {
          "id": "sc10-3",
          "front": "Které antidepresivum ze skupiny SNRI je oficiálně schváleno a doporučeno pro léčbu chronické somatoformní a neuropatické bolesti?",
          "back": "Duloxetin (Cymbalta).",
          "hint": "SNRI a bolest",
          "category": "psychopatologie"
        }
      ],
      "quiz": [
        {
          "id": "s10-test1",
          "question": "Pro disociativní (neepileptický) záchvat je na rozdíl od pravého epileptického záchvatu typické:",
          "options": [
            "Vždy masivní generalizované hrot-vlna výboje na EEG",
            "Pevné sevření očních víček s odporem při pokusu o jejich otevření a normální fotoreakce zornic",
            "Těžké prokousnutí postranního okraje jazyka a bezvědomí s areflexií",
            "Vznik výhradně ve spánku bez přítomnosti svědků"
          ],
          "correctIndex": 1,
          "explanation": "Aktivní odpor proti otevření očí, normální fotoreakce a absence EEG korelátu jsou klíčovými znaky psychogenních neepileptických záchvatů."
        },
        {
          "id": "s10-test2",
          "question": "Základním terapeutickým principem při péči o pacienta se somatizační poruchou je:",
          "options": [
            "Indikovat každé nové zobrazovací vyšetření, které si pacient vyžádá",
            "Stanovit jednoho ošetřujícího lékaře, pravidelné kontrolní návštěvy a minimalizovat zbytečná invazivní vyšetření",
            "Pacientovi okamžitě sdělit, že si potíže vymýšlí a simuluje",
            "Předepsat vysoké dávky opioidů"
          ],
          "correctIndex": 1,
          "explanation": "Vedení jedním lékařem s pravidelnými kontrolami brání 'doctor shoppingu' a omezuje zbytečnou iatrogenní zátěž."
        }
      ]
    },
    {
      "id": "s11-poruchy-prijmu-potravy",
      "number": 11,
      "section": "specialni",
      "sectionLabel": "Speciální psychiatrie",
      "badgePrefix": "S11",
      "title": "Poruchy příjmu potravy",
      "shortDesc": "Mentální anorexie (F50.0 – BMI < 17,5, dysmorfofobie, amenorea, somatické komplikace, refeeding syndrom). Mentální bulimie (F50.2 – přejídání, kompenzace, Russellovo znamení, fluoxetin). Záchvatovité přejídání. KBT a nutriční rehabilitace.",
      "category": "psychopatologie",
      "badge": "Poruchy chování",
      "badgeColor": "amber",
      "theory": {
        "banner": {
          "tag": "Poruchy příjmu potravy (F50)",
          "title": "Mentální anorexie a bulimie",
          "text": "Poruchy příjmu potravy (PPP) jsou závažná psychosomatická onemocnění s nejvyšší mortalitou v celé psychiatrii (až 5–10 % u anorexie). Typicky začínají v pubertě a mladé dospělosti (ženy : muži 10 : 1)."
        },
        "sections": [
          {
            "title": "1. Mentální anorexie (F50.0)",
            "color": "rose",
            "content": "\n                        <div class=\"p-3 rounded-lg bg-slate-900 border border-slate-700 text-xs space-y-2\">\n                            <span class=\"font-bold text-rose-400\">4 Hlavní diagnostická kritéria MKN-10:</span>\n                            <ol class=\"list-decimal ml-4 text-slate-300 space-y-1\">\n                                <li><strong>Nízká tělesná hmotnost:</strong> Pokles hmotnosti alespoň 15 % pod normu nebo <strong>BMI &lt; 17,5 kg/m2</strong> u dospělých (u dětí pod 3. percentilem).</li>\n                                <li><strong>Úmyslné snižování váhy:</strong> Restrikcí potravy, nadměrným vyčerpávajícím cvičením, provokovaným zvracením, abúzem laxativ, diuretik či anorektik.</li>\n                                <li><strong>Dysmorfofobie a strach z tloušťky:</strong> Zkreslené vnímání vlastního těla jako 'příliš tlustého' a panický strach z přibírání.</li>\n                                <li><strong>Endokrinní porucha:</strong> Porucha osy hypotalamus–hypofýza–gonády vedoucí k <strong>amenoree</strong> (vynechání menstruace min. 3 cykly), u mužů ztráta libida a potence.</li>\n                            </ol>\n                            <div class=\"mt-2 text-amber-300\">\n                                <strong>Typy:</strong> Restriktivní typ vs. Purgativní typ (se záchvaty přejídání a zvracením).\n                            </div>\n                        </div>\n                    "
          },
          {
            "title": "2. Mentální bulimie (F50.2) & Záchvatovité přejídání",
            "color": "amber",
            "content": "\n                        <div class=\"grid md:grid-cols-2 gap-3 text-xs\">\n                            <div class=\"p-3 rounded-lg bg-slate-900 border border-slate-700\">\n                                <h4 class=\"font-bold text-amber-400 mb-1\">Mentální bulimie (F50.2)</h4>\n                                <ul class=\"list-disc ml-4 space-y-1 text-slate-300\">\n                                    <li>Opakované záchvaty nekontrolovaného přejídání (min. 2x týdně po dobu 3 měsíců).</li>\n                                    <li>Následné <strong>kompenzační chování</strong> k zabránění tloustnutí (provokované zvracení, laxativa, hladovění).</li>\n                                    <li>Hmotnost bývá v normálním rozmezí (BMI 18,5–25 kg/m2).</li>\n                                    <li><strong>Russellovo znamení:</strong> Mozoly a eroze na dorzu ruky od zubů při dráždění dávivého reflexu.</li>\n                                    <li>Zubní eroze skloviny ze žaludeční kyseliny, hypertrofie příušních žláz (sialoadenóza).</li>\n                                </ul>\n                            </div>\n                            <div class=\"p-3 rounded-lg bg-slate-900 border border-slate-700\">\n                                <h4 class=\"font-bold text-cyan-300 mb-1\">Záchvatovité přejídání (Binge Eating Disorder)</h4>\n                                <p class=\"text-slate-300\">Záchvaty přejídání velkým množstvím jídla bez kompenzačního zvracení ➔ vede k rozvoji obezity a těžkým pocitům viny.</p>\n                            </div>\n                        </div>\n                    "
          },
          {
            "title": "3. Somatické komplikace, Refeeding syndrom a Léčba",
            "color": "emerald",
            "content": "\n                        <div class=\"space-y-2 text-xs\">\n                            <div class=\"p-3 rounded-lg bg-rose-950/40 border border-rose-500/40\">\n                                <strong class=\"text-rose-400\">🚨 Somatické komplikace a Refeeding syndrom:</strong>\n                                <ul class=\"list-disc ml-4 text-slate-300 space-y-0.5 mt-1\">\n                                    <li><strong>Kardiální:</strong> Sinusová bradykardie (&lt; 40/min), prodloužení QTc, maligní arytmie z <strong>hypokalémie</strong>.</li>\n                                    <li><strong>Dermatologické:</strong> Lanugo (jemné ochlupení trupu), suchá kůže, padání vlasů, akrocyanóza.</li>\n                                    <li><strong>Kostní:</strong> Časná osteoporóza a patologické zlomeniny.</li>\n                                    <li><strong>Refeeding syndrom:</strong> Život ohrožující stav při příliš rychlém obnovení stravy u kachektických pacientů ➔ masivní vzestup inzulinu způsobí přesun fosfátů a draslíku do buněk ➔ <strong>těžká hypofosfatémie</strong>, srdeční selhání, edémy a smrt. Realimentace musí být pozvolná s monitoringem fosfátů!</li>\n                                </ul>\n                            </div>\n                            <div class=\"p-3 rounded-lg bg-slate-900 border border-slate-700\">\n                                <strong class=\"text-emerald-400\">Terapie PPP:</strong>\n                                <p class=\"text-slate-300 mt-1\">1. Nutriční rehabilitace (cíl u anorexie: přírůstek 0,5–1 kg týdně, parenterální výživa jen v krajní nouzi), 2. Kognitivně-behaviorální terapie (KBT) a rodinná terapie (FBT dle Maudsley), 3. Farmakoterapie: <strong>Fluoxetin 60 mg/den</strong> (schválen u mentální bulimie ke snížení frekvence přejídání), u anorexie Olanzapin v nízké dávce k potlačení obsesí a podpoře příjmu stravy.</p>\n                            </div>\n                        </div>\n                    "
          }
        ]
      },
      "recall": {
        "scenarios": [
          {
            "id": "s11-r1",
            "title": "Kazuistika S11: Kritická kachexie u mentální anorexie",
            "question": "17letá dívka s výškou 168 cm váží 34 kg (BMI 12,0 kg/m2). Má klidovou srdeční frekvenci 36/min, TK 80/50 mmHg, krevní odběry ukazují hypokalémii 2,8 mmol/l a hypoproteinémii. Rodiče požadují ambulantní léčbu. Jaký je správný postup?",
            "answer": "Jedná se o těžkou, život ohrožující mentální anorexii v kritickém stádiu (BMI < 13 kg/m2, těžká bradykardie, hypokalémie s rizikem zástavy srdce). Indikována je OKAMŽITÁ akutní hospitalizace na jednotce intenzivní péče nebo specializovaném lůžkovém oddělení pro PPP (i nedobrovolně při odmítání). Reálné riziko představuje refeeding syndrom, proto musí být realimentace zahájena pomalu pod kontrolou hladin fosforu, draslíku a EKG.",
            "pearl": "Kritéria pro akutní hospitalizaci u anorexie: BMI < 13–14 kg/m2, bradykardie < 40/min, QTc > 450 ms, hypokalémie < 3,0 mmol/l, tělesná teplota < 35,5 °C."
          }
        ]
      },
      "cards": [
        {
          "id": "sc11-1",
          "front": "Jaká je diagnostická hranice BMI pro mentální anorexii u dospělých dle MKN-10?",
          "back": "BMI pod 17,5 kg/m2 (nebo hmotnost alespoň 15 % pod normou).",
          "hint": "BMI cut-off",
          "category": "psychopatologie"
        },
        {
          "id": "sc11-2",
          "front": "Co je to refeeding syndrom a jaký minerál je nutné přísně sledovat při zahájení výživy?",
          "back": "Potenciálně fatální metabolický rozvrat vyvolaný rychlým nárůstem inzulinu po zahájení stravy. Klíčové je monitorovat a doplňovat FOSFÁTY (hypofosfatémie vede k srdečnímu selhání).",
          "hint": "Hypofosfatémie",
          "category": "psychopatologie"
        },
        {
          "id": "sc11-3",
          "front": "Které antidepresivum je schváleno pro léčbu mentální bulimie a v jaké dávce?",
          "back": "Fluoxetin ve vysoké dávce 60 mg/den (snižuje frekvenci záchvatů přejídání a zvracení).",
          "hint": "Bulimie farmakoterapie",
          "category": "psychopatologie"
        }
      ],
      "quiz": [
        {
          "id": "s11-test1",
          "question": "Pojem 'Russellovo znamení' u pacientek s mentální bulimií označuje:",
          "options": [
            "Mozoly a oděrky na kloubech prstů ruky způsobené opakovaným provokováním zvracení o řezáky",
            "Pigmentace v oblasti obličeje",
            "Hypotrofii svalstva dolních končetin",
            "Krvácení do sítnice"
          ],
          "correctIndex": 0,
          "explanation": "Russellovo znamení vzniká chronickým mechanickým třením hřbetu ruky o zuby při manuálním vyvolávání dávení."
        },
        {
          "id": "s11-test2",
          "question": "Která z následujících elektrolytových odchylek je u pacientů s purgativní formou anorexie či bulimie nejčastější příčinou fatálních srdečních arytmií?",
          "options": [
            "Hyperkalcémie",
            "Hypokalémie (ztráty draslíku zvracením a laxativy)",
            "Hypernatrémie",
            "Hyperfosfatémie"
          ],
          "correctIndex": 1,
          "explanation": "Zvracení a zneužívání laxativ/diuretik vede k těžké hypokalémii a metabolické alkalóze s rizikem maligních komorových arytmií."
        }
      ]
    },
    {
      "id": "s12-poruchy-osobnosti",
      "number": 12,
      "section": "specialni",
      "sectionLabel": "Speciální psychiatrie",
      "badgePrefix": "S12",
      "title": "Poruchy osobnosti",
      "shortDesc": "Obecná diagnostická kritéria F60. Klastr A (podivínský: paranoidní, schizoidní, schizotypní). Klastr B (dramatický: disociální, hraniční BPD a štěpení/self-harm, histriónská, narcistická). Klastr C (úzkostný: vyhýbavá, závislá, anankastická OCPD). Terapie (DBT dle Linehanové).",
      "category": "psychopatologie",
      "badge": "Poruchy osobnosti",
      "badgeColor": "violet",
      "theory": {
        "banner": {
          "tag": "Poruchy osobnosti u dospělých (F60–F69)",
          "title": "Specifické poruchy osobnosti – struktura a klastry",
          "text": "Poruchy osobnosti představují hluboce zakořeněné, rigidní a maladaptivní vzorce prožívání a chování, které se odchylují od kulturní normy, jsou trvalé a vedou k významnému distresu nebo narušení fungování jedince."
        },
        "sections": [
          {
            "title": "1. Obecná diagnostická kritéria (F60)",
            "color": "violet",
            "content": "\n                        <ul class=\"list-disc ml-5 space-y-1 text-xs text-slate-300\">\n                            <li>Vzorce chování se projevují v oblastech: kognice (způsob vnímání sebe a světa), afektivita (rozsah a přiměřenost emocí), kontrola impulzů a interpersonální vztahy.</li>\n                            <li>Vzorec je <strong>nepružný (rigidní)</strong> a uplatňuje se v širokém spektru osobních a sociálních situací.</li>\n                            <li>Vede k <strong>významnému osobnímu strádání</strong> nebo nepříznivému dopadu na okolí.</li>\n                            <li>Je stabilní a dlouhodobý – začátek lze vystopovat do pozdního dětství či adolescence (formální diagnóza se stanovuje <strong>až po 18. roce věku</strong>).</li>\n                        </ul>\n                    "
          },
          {
            "title": "2. Přehled klastrů a jednotlivých poruch osobnosti",
            "color": "indigo",
            "content": "\n                        <div class=\"space-y-3 text-xs\">\n                            <div class=\"p-3 rounded-lg bg-slate-900 border border-slate-700\">\n                                <span class=\"font-bold text-violet-300\">KLASTR A – 'Podivní, excentričtí' (Odd/Eccentric):</span>\n                                <ul class=\"list-disc ml-4 mt-1 text-slate-300 space-y-0.5\">\n                                    <li><strong>Paranoidní (F60.0):</strong> Trvalá podezřívavost, vztahovačnost, neodpouští urážky, podezírá partnera z nevěry, vidí skryté hrozby.</li>\n                                    <li><strong>Schizoidní (F60.1):</strong> Emoční chlad, samotářství, nezájem o vztahy a sex, lhostejnost ke chvále i kritice.</li>\n                                    <li><strong>Schizotypní (F21):</strong> Magické myšlení, bizarní řeč a vystupování, iluze, sociální úzkost (genetická blízkost ke schizofrenii).</li>\n                                </ul>\n                            </div>\n                            <div class=\"p-3 rounded-lg bg-slate-900 border border-slate-700\">\n                                <span class=\"font-bold text-rose-300\">KLASTR B – 'Dramatičtí, emoční, nestabilní' (Dramatic/Erratic):</span>\n                                <ul class=\"list-disc ml-4 mt-1 text-slate-300 space-y-1\">\n                                    <li><strong>Disociální / Antisociální (F60.2):</strong> Bezohlednost k právům druhých, absence pocitu viny a empatie, kriminalita, lhaní, agresivita, neschopnost poučit se z trestu.</li>\n                                    <li><strong>Emočně nestabilní – Hraniční typ (Borderline / BPD, F60.31):</strong> Nestabilita identity, vztahů a emocí, chronický pocit prázdnoty, extrémní strach z opuštění, štěpení (splitting – lidé jsou buď naprosto dokonalí, nebo zlí), <strong>rekurentní sebepoškozování a suicidální gesta</strong>.</li>\n                                    <li><strong>Histriónská (F60.4):</strong> Teatrálnost, dramatizace, touha být středem pozornosti, mělká afektivita, svůdnost.</li>\n                                    <li><strong>Narcistická:</strong> Grandiózní pocit vlastní důležitosti, potřeba obdivu, nedostatek empatie, zneužívání druhých.</li>\n                                </ul>\n                            </div>\n                            <div class=\"p-3 rounded-lg bg-slate-900 border border-slate-700\">\n                                <span class=\"font-bold text-cyan-300\">KLASTR C – 'Úzkostní, bázliví' (Anxious/Fearful):</span>\n                                <ul class=\"list-disc ml-4 mt-1 text-slate-300 space-y-0.5\">\n                                    <li><strong>Vyhýbavá / Anxiózní (F60.6):</strong> Pocity méněcennosti, hypersenzitivita na odmítnutí a kritiku, touha po vztazích, ale vyhýbání se jim ze strachu.</li>\n                                    <li><strong>Závislá (F60.7):</strong> Neschopnost dělat rozhodnutí bez rad druhých, podřizování vlastních potřeb, strach ze samoty.</li>\n                                    <li><strong>Anankastická / Obsedantně-kompulzivní OCPD (F60.5):</strong> Perfekcionismus bránící dokončení úkolů, rigidita, pedantství, lakota. <em>Rozdíl od OCD:</em> Rysy jsou egosyntonní (považuje svůj styl za správný)!</li>\n                                </ul>\n                            </div>\n                        </div>\n                    "
          },
          {
            "title": "3. Terapeutické přístupy u poruch osobnosti",
            "color": "emerald",
            "content": "\n                        <div class=\"p-3 rounded-lg bg-slate-900 border border-slate-700 text-xs\">\n                            <span class=\"font-bold text-emerald-400\">Psychoterapie (Zlatý standard léčby):</span>\n                            <p class=\"text-slate-300 mt-1\">Dlouhodobá strukturovaná psychoterapie: <strong>Dialektická behaviorální terapie (DBT dle Marshi Linehanové)</strong> – vyvinuta specificky pro hraniční poruchu (BPD), učí všímavost (mindfulness), regulaci emocí a zvládání krizí bez sebepoškozování. Schéma terapie, Mentalizační terapie (MBT).</p>\n                            <p class=\"text-slate-300 mt-2\"><strong>Farmakoterapie:</strong> Pouze symptomatická a přídatná (nízké dávky atypických AP u impulzivity a afektivní lability, SSRI u komorbidní úzkosti/deprese). Vyhnout se BZD pro riziko závislosti a paradoxní desinhibice!</p>\n                        </div>\n                    "
          }
        ]
      },
      "recall": {
        "scenarios": [
          {
            "id": "s12-r1",
            "title": "Kazuistika S12: Splitting a sebepoškozování u hraniční poruchy",
            "question": "21letá pacientka na oddělení střídavě zbožňuje svou ošetřující lékařku jako 'nejlepšího anděla na světě' a vulgárně nadává staniční sestře, kterou označuje za 'zlou stvůru'. Po zamítnutí víkendové propustky se na toaletě pořezala žiletkou na stehně. O jaký psychologický mechanismus se jedná a jaký je terapeutický přístup personálu?",
            "answer": "Jedná se o mechanismus 'štěpení' (splitting – neschopnost integrovat pozitivní a negativní vlastnosti lidí, černobílé vidění) typický pro Hraniční poruchu osobnosti (BPD). Terapeutickým přístupem je jednotný postoj celého týmu (nenechat se rozdělit), jasné hranice, nestigmatizující ošetření rány bez nadměrné pozornosti a zařazení do programu Dialektické behaviorální terapie (DBT).",
            "pearl": "Splitting u BPD: Černobílé polarizované myšlení, kdy personál a blízcí lidé jsou buď glorifikováni, nebo zcela devalvováni."
          }
        ]
      },
      "cards": [
        {
          "id": "sc12-1",
          "front": "Které poruchy osobnosti tvoří Klastr A (podivínský)?",
          "back": "1. Paranoidní, 2. Schizoidní, 3. Schizotypní.",
          "hint": "Klastr A",
          "category": "psychopatologie"
        },
        {
          "id": "sc12-2",
          "front": "Jaká psychoterapeutická metoda byla vyvinuta specificky pro léčbu hraniční poruchy osobnosti (BPD)?",
          "back": "Dialektická behaviorální terapie (DBT – Marsha Linehan).",
          "hint": "DBT terapie",
          "category": "psychopatologie"
        },
        {
          "id": "sc12-3",
          "front": "Jaký je zásadní rozdíl mezi OCD (obsedantně-kompulzivní poruchou) a anankastickou poruchou osobnosti (OCPD)?",
          "back": "Obsese u OCD jsou EGODYSTONNÍ (pacient je vnímá jako cizí, nesmyslné a trpí jimi), zatímco perfekcionismus u anankastické poruchy je EGOSYNTONNÍ (pacient jej považuje za správný a morální standard).",
          "hint": "Egodystonie vs Egosyntonie",
          "category": "psychopatologie"
        }
      ],
      "quiz": [
        {
          "id": "s12-test1",
          "question": "Pro kterou poruchu osobnosti z Klastru B je typická trvalá absence pocitu viny, neschopnost empatie, porušování zákonů a bezohlednost k druhým?",
          "options": [
            "Disociální porucha osobnosti",
            "Schizoidní porucha osobnosti",
            "Závislá porucha osobnosti",
            "Vyhýbavá porucha osobnosti"
          ],
          "correctIndex": 0,
          "explanation": "Disociální (antisociální) porucha osobnosti se projevuje ignorováním společenských norem, kriminalitou a neschopností prožívat vinu."
        },
        {
          "id": "s12-test2",
          "question": "Od kterého věku lze dle platných diagnostických guidelines formálně stanovit diagnózu specifické poruchy osobnosti?",
          "options": [
            "Od 6 let",
            "Od 12 let",
            "Až po 18. roce věku (po dokončení vývoje osobnosti)",
            "Až po 50. roce věku"
          ],
          "correctIndex": 2,
          "explanation": "Diagnóza poruchy osobnosti vyžaduje plné vyzrání struktury osobnosti po adolescenci (typicky nad 18 let)."
        }
      ]
    },
    {
      "id": "s13-mentalni-retardace",
      "number": 13,
      "section": "specialni",
      "sectionLabel": "Speciální psychiatrie",
      "badgePrefix": "S13",
      "title": "Mentální retardace",
      "shortDesc": "Definice a pásma IQ dle MKN-10 (lehká F70 50–69, středně těžká F71 35–49, těžká F72 20–34, hluboká F73 <20). Etiologie (genetika, Downův syndrom, FAS, perinatální asfyxie). Speciální pedagogika a symptomatická farmakoterapie.",
      "category": "psychopatologie",
      "badge": "Vývojové poruchy",
      "badgeColor": "cyan",
      "theory": {
        "banner": {
          "tag": "Poruchy intelektu (F70–F79)",
          "title": "Mentální retardace (Oligofrenie / Intelektové postižení)",
          "text": "Stav zastaveného nebo neúplného vývoje duševních schopností, charakterizovaný zejména narušením dovedností projevujících se během vývojového období (kognitivní, řečové, motorické a sociální schopnosti)."
        },
        "sections": [
          {
            "title": "1. Pásma mentální retardace dle MKN-10",
            "color": "cyan",
            "content": "\n                        <div class=\"grid md:grid-cols-2 gap-3 text-xs\">\n                            <div class=\"p-3 rounded-lg bg-slate-900 border border-slate-700\">\n                                <span class=\"font-bold text-violet-300\">Lehká mentální retardace (F70 / IQ 50–69):</span>\n                                <p class=\"text-slate-300 mt-1\">Tvoří cca <strong>85 % všech případů</strong>. Mentální věk 9–12 let. Schopni řeči pro běžný život, vzdělatelní v praktických a speciálních školách, dosáhnou pracovní samostatnosti (jednoduchá manuální povolání), schopni samostatného bydlení s občasnou podporou.</p>\n                            </div>\n                            <div class=\"p-3 rounded-lg bg-slate-900 border border-slate-700\">\n                                <span class=\"font-bold text-amber-300\">Středně těžká mentální retardace (F71 / IQ 35–49):</span>\n                                <p class=\"text-slate-300 mt-1\">Cca 10 % případů. Mentální věk 6–9 let. Vychovatelní (základní sebeobsluha – oblékání, hygiena), řeč je limitována, zvládnou jednoduchou strukturovanou práci v chráněných dílnách pod dohledem. Nejsou schopni samostatného života.</p>\n                            </div>\n                            <div class=\"p-3 rounded-lg bg-slate-900 border border-slate-700\">\n                                <span class=\"font-bold text-rose-300\">Těžká mentální retardace (F72 / IQ 20–34):</span>\n                                <p class=\"text-slate-300 mt-1\">Cca 3–4 % případů. Mentální věk 3–6 let. Výrazné motorické a smyslové defekty, minimální řeč, vyžadují trvalou celodenní péči a dohled.</p>\n                            </div>\n                            <div class=\"p-3 rounded-lg bg-slate-900 border border-slate-700\">\n                                <span class=\"font-bold text-rose-400\">Hluboká mentální retardace (F73 / IQ &lt; 20):</span>\n                                <p class=\"text-slate-300 mt-1\">Cca 1–2 %. Mentální věk &lt; 3 roky. Těžká imobilita, inkontinence, nerozumí řeči ani nekomunikují, plně závislí na ošetřovatelské péči.</p>\n                            </div>\n                        </div>\n                    "
          },
          {
            "title": "2. Etiopatogeneze mentální retardace",
            "color": "indigo",
            "content": "\n                        <ul class=\"list-disc ml-5 space-y-1 text-xs text-slate-300\">\n                            <li><strong>Prenatální příčiny:</strong> Genetické aberace (Downův syndrom – trizomie 21, Syndrom fragilního X, Fenylketonurie), teratogeny (<strong>Fetální alkoholový syndrom FAS</strong>), intrauterinní infekce TORCH (toxoplazmóza, rubeola, CMV, herpes).</li>\n                            <li><strong>Perinatální příčiny:</strong> Těžká hypoxie a asfyxie plodu, porodní trauma, nedonošenost (těžká prematurita &lt; 1000 g), intrakraniální krvácení.</li>\n                            <li><strong>Postnatální příčiny (do 2 let):</strong> Meningoencefalitidy, kraniotraumata, těžká chronická malnutrice, těžká socio-emoční deprivace.</li>\n                        </ul>\n                    "
          },
          {
            "title": "3. Komplexní péče a symptomatická terapie",
            "color": "emerald",
            "content": "\n                        <p class=\"mb-2 text-xs\">Mentální retardace je sama o sobě kauzálně nevyléčitelná; těžištěm je <strong>speciální pedagogika, raná péče, logopedie, ergoterapie a sociální integrace</strong>.</p>\n                        <div class=\"p-3 rounded-lg bg-slate-900 border border-slate-700 text-xs\">\n                            <span class=\"font-bold text-violet-300\">Symptomatická farmakoterapie:</span>\n                            <p class=\"text-slate-300 mt-1\">U komorbidních poruch chování (autoagrese, záchvaty vzteku, hyperaktivita) se uplatňují nízké dávky atypických antipsychotik (<strong>Risperidon</strong> od 5 let, Tiaprid), antiepileptika u komorbidní epilepsie.</p>\n                        </div>\n                    "
          }
        ]
      },
      "recall": {
        "scenarios": [
          {
            "id": "s13-r1",
            "title": "Kazuistika S13: Posouzení soběstačnosti u mentální retardace",
            "question": "18letý mladík ukončil vzdělávání na praktické škole. Umí číst a psát jednoduché texty, zvládá samostatně cestovat známou trasou autobusem, nakoupit si a v rodinné dílně pracuje jako pomocný truhlář. Psychologickým vyšetřením bylo zjištěno IQ 62. Do kterého pásma mentální retardace spadá?",
            "answer": "Jedná se o Lehkou mentální retardaci (F70 – pásmo IQ 50–69). Pro toto pásmo je typická schopnost osvojení praktických dovedností, samostatné sebeobsluhy a výkonu jednoduchých manuálních prací v podporovaném prostředí.",
            "pearl": "F70: Nejčastější forma (85 % všech MR), jedinci jsou plně vzdělatelní a schopni sociální integrace."
          }
        ]
      },
      "cards": [
        {
          "id": "sc13-1",
          "front": "Jaká jsou 4 pásma mentální retardace dle MKN-10 a jejich IQ rozmezí?",
          "back": "1. Lehká (F70): IQ 50–69, 2. Středně těžká (F71): IQ 35–49, 3. Těžká (F72): IQ 20–34, 4. Hluboká (F73): IQ < 20.",
          "hint": "4 pásma MR",
          "category": "psychopatologie"
        },
        {
          "id": "sc13-2",
          "front": "Které antipsychotikum je schváleno od 5 let k léčbě těžkých poruch chování (agresivity) u mentální retardace?",
          "back": "Risperidon.",
          "hint": "Pediatrické AP",
          "category": "psychopatologie"
        },
        {
          "id": "sc13-3",
          "front": "Která genetická odchylka je nejčastější příčinou vrozené mentální retardace?",
          "back": "Downův syndrom (trizomie 21. chromozomu) a Syndrom fragilního chromozomu X.",
          "hint": "Genetická etiologie",
          "category": "psychopatologie"
        }
      ],
      "quiz": [
        {
          "id": "s13-test1",
          "question": "Jedinec se středně těžkou mentální retardací (F71, IQ 35–49) je z pedagogického hlediska:",
          "options": [
            "Plně vzdělatelný na běžné základní škole bez asistence",
            "Vychovatelný (osvojí si základní sebeobsluhu a jednoduché manuální úkony v chráněném prostředí)",
            "Neschopen jakékoliv komunikace a plně imobilní",
            "Schopen úspěšně vystudovat gymnázium"
          ],
          "correctIndex": 1,
          "explanation": "Středně těžká mentální retardace umožňuje osvojení základní sebeobsluhy (vychovatelnost), ale neumožňuje samostatné zvládání teoretického učiva."
        },
        {
          "id": "s13-test2",
          "question": "Který z následujících faktorů patří mezi prenatální teratogenní příčiny mentální retardace?",
          "options": [
            "Fetální alkoholový syndrom (FAS)",
            "Dětská mozková obrna po porodu",
            "Meningitida v 10 letech",
            "Febrilní křeče"
          ],
          "correctIndex": 0,
          "explanation": "Pravidelný abúzus alkoholu matkou v těhotenství vyvolává FAS charakterizovaný kraniofaciální dysmorfií a mentální retardací."
        }
      ]
    },
    {
      "id": "s14-detska-psychiatrie-1-vyvoj",
      "number": 14,
      "section": "specialni",
      "sectionLabel": "Speciální psychiatrie",
      "badgePrefix": "S14",
      "title": "Duševní poruchy v dětském věku I (poruchy psychického vývoje)",
      "shortDesc": "Poruchy autistického spektra PAS (F84: Dětský autismus – triáda deficitů, Aspergerův syndrom – intaktní intelekt a řeč, speciální zájmy). Vývojová dysfázie. Specifické poruchy školních dovedností (dyslexie, dysgrafie, dyskalkulie). Včasná diagnostika a intervence.",
      "category": "psychopatologie",
      "badge": "Pedopsychiatrie",
      "badgeColor": "cyan",
      "theory": {
        "banner": {
          "tag": "Pedopsychiatrie I (F80–F89)",
          "title": "Pervazivní a specifické poruchy psychického vývoje",
          "text": "Poruchy psychického vývoje mají začátek vždy v kojeneckém či dětském věku a souvisejí s biologickým zráním CNS. Zahrnují poruchy autistického spektra a specifické poruchy řeči a učení."
        },
        "sections": [
          {
            "title": "1. Poruchy autistického spektra (PAS / F84)",
            "color": "cyan",
            "content": "\n                        <div class=\"space-y-2 text-xs\">\n                            <div class=\"p-3 rounded-lg bg-slate-900 border border-slate-700\">\n                                <span class=\"font-bold text-violet-300\">Dětský autismus (Kannerův autismus / F84.0):</span>\n                                <p class=\"text-slate-300 mt-1\">Začátek před 3. rokem věku. <strong>Klasická triáda deficitů:</strong></p>\n                                <ul class=\"list-disc ml-4 text-slate-300 space-y-0.5\">\n                                    <li>1. <strong>Narušení reciproční sociální interakce:</strong> Chybí oční kontakt, neschopnost sdílet pozornost a emoce, nezájem o vrstevníky.</li>\n                                    <li>2. <strong>Narušení komunikace:</strong> Opožděný vývoj řeči, echolálie, doslovné chápání jazyka, neschopnost symbolické hry ('na něco').</li>\n                                    <li>3. <strong>Omezené, repetitivní a stereotypní vzorce chování:</strong> Trvání na neměnnosti rituálů, motorické stereotypie (třepetání rukama), ulpívavé zájmy (jízdní řády, točící se kola).</li>\n                                    <li>Často (v cca 70 %) asociován s mentální retardací.</li>\n                                </ul>\n                            </div>\n                            <div class=\"p-3 rounded-lg bg-slate-900 border border-slate-700\">\n                                <span class=\"font-bold text-amber-300\">Aspergerův syndrom (F84.5):</span>\n                                <p class=\"text-slate-300 mt-1\">Zásadní rozdíl od dětského autismu: <strong>INTAKTNÍ intelekt (normální až nadprůměrné IQ) a NENÍ přítomno celkové opoždění řečového vývoje.</strong></p>\n                                <ul class=\"list-disc ml-4 text-slate-300 space-y-0.5\">\n                                    <li>Výrazná sociální neobratnost a neschopnost empatie a dekódování neverbálních signálů.</li>\n                                    <li>Extrémně vyhraněné, úzké speciální zájmy (astronomie, vlaky, počítače), o kterých encyklopedicky mluví.</li>\n                                    <li>Motorická neobratnost.</li>\n                                </ul>\n                            </div>\n                        </div>\n                    "
          },
          {
            "title": "2. Specifické poruchy řeči a školních dovedností",
            "color": "indigo",
            "content": "\n                        <div class=\"grid md:grid-cols-2 gap-3 text-xs\">\n                            <div class=\"p-3 rounded-lg bg-slate-900 border border-slate-700\">\n                                <h4 class=\"font-bold text-violet-300 mb-1\">Vývojové poruchy řeči (F80)</h4>\n                                <ul class=\"list-disc ml-4 space-y-1 text-slate-300\">\n                                    <li><strong>Vývojová dysfázie:</strong> Specifické narušení exprese nebo recepce řeči při normálním sluchu a nonverbálním intelektu.</li>\n                                    <li><strong>Dyslalie (patlavost):</strong> Porucha artikulace hlásek.</li>\n                                </ul>\n                            </div>\n                            <div class=\"p-3 rounded-lg bg-slate-900 border border-slate-700\">\n                                <h4 class=\"font-bold text-cyan-300 mb-1\">Specifické poruchy učení (SPU / F81)</h4>\n                                <ul class=\"list-disc ml-4 space-y-1 text-slate-300\">\n                                    <li><strong>Dyslexie:</strong> Specifická porucha čtení (záměna písmen, pomalé tempo, neporozumění textu).</li>\n                                    <li><strong>Dysgrafie:</strong> Specifická porucha psaní a grafomotoriky.</li>\n                                    <li><strong>Dysortografie:</strong> Neschopnost aplikace gramatických pravidel.</li>\n                                    <li><strong>Dyskalkulie:</strong> Specifická porucha počítání a matematických operací.</li>\n                                </ul>\n                            </div>\n                        </div>\n                    "
          },
          {
            "title": "3. Terapeutické přístupy u PAS",
            "color": "emerald",
            "content": "\n                        <ul class=\"list-disc ml-5 space-y-1 text-xs text-slate-300\">\n                            <li><strong>Behaviorální a edukační programy:</strong> Strukturované učení (program TEACCH), aplikovaná behaviorální analýza (ABA terapie), nácvik sociálních dovedností.</li>\n                            <li><strong>Symptomatická farmakoterapie:</strong> Risperidon nebo Aripiprazol při afektivních výbuších, autoagresi a těžkém neklidu.</li>\n                        </ul>\n                    "
          }
        ]
      },
      "recall": {
        "scenarios": [
          {
            "id": "s14-r1",
            "title": "Kazuistika S14: Diferenciace dětského autismu a Aspergerova syndromu",
            "question": "8letý chlapec má vynikající slovní zásobu a encyklopedické znalosti o planetách sluneční soustavy. Mezi vrstevníky je však zcela izolovaný, nechápe ironii ani vtipy, mluví monotónním tónem jako dospělý a při změně rozvrhu ve škole propadá panickému křiku. Raný vývoj řeči byl včasný a IQ v pásmu nadprůměru (122). O jakou diagnózu z okruhu PAS se jedná?",
            "answer": "Jedná se o Aspergerův syndrom (F84.5). Klíčovými rozlišovacími znaky od dětského autismu jsou: normální až nadprůměrný intelekt (IQ 122), intaktní a včasný vývoj řeči a přítomnost vysoce specializovaných zájmů v kombinaci s narušením pragmatické roviny komunikace a sociální interakce.",
            "pearl": "Aspergerův syndrom: Intelekt a řeč jsou zachovány, deficit je v sociální reciprocitě a flexibilitě."
          }
        ]
      },
      "cards": [
        {
          "id": "sc14-1",
          "front": "Jaké 3 oblasti tvoří diagnostickou triádu dětského autismu (F84.0)?",
          "back": "1. Narušení reciproční sociální interakce, 2. Narušení verbální i neverbální komunikace, 3. Repetitivní a stereotypní vzorce chování a zájmů.",
          "hint": "Autistická triáda",
          "category": "psychopatologie"
        },
        {
          "id": "sc14-2",
          "front": "Jaký je hlavní rozdíl mezi Aspergerovým syndromem a dětským autismem?",
          "back": "U Aspergerova syndromu NENÍ přítomno celkové opoždění řečového vývoje a intelekt je v normě nebo nadprůměrný (chybí mentální retardace).",
          "hint": "Intelekt a řeč",
          "category": "psychopatologie"
        },
        {
          "id": "sc14-3",
          "front": "Co znamená pojem 'dyslexie' a 'dyskalkulie'?",
          "back": "Dyslexie = specifická porucha osvojování čtení; Dyskalkulie = specifická porucha matematických schopností a počítání.",
          "hint": "SPU",
          "category": "psychopatologie"
        }
      ],
      "quiz": [
        {
          "id": "s14-test1",
          "question": "Které z následujících tvrzení o Aspergerově syndromu je SPRÁVNÉ?",
          "options": [
            "Vždy je přítomna těžká mentální retardace s IQ pod 35",
            "Řečový vývoj a intelekt jsou v normě, ale je přítomno narušení sociální interakce a vyhraněné stereotypní zájmy",
            "Začíná až v dospělosti po 30. roce věku",
            "Léčí se výhradně vysokými dávkami lithia"
          ],
          "correctIndex": 1,
          "explanation": "Aspergerův syndrom je charakterizován sociálním deficitem a stereotypiemi při normální nebo nadprůměrné inteligenci a zachovaném vývoji řeči."
        },
        {
          "id": "s14-test2",
          "question": "Strukturované učení a vizualizace denního režimu (např. v programu TEACCH) se v pedopsychiatrii využívá především u dětí s:",
          "options": [
            "Poruchami autistického spektra (PAS)",
            "Panickou poruchou",
            "Bipolární afektivní poruchou",
            "Narkolepsií"
          ],
          "correctIndex": 0,
          "explanation": "Vizuální strukturalizace a předvídatelnost prostředí jsou základním pilířem edukace a péče o děti s PAS."
        }
      ]
    },
    {
      "id": "s15-detska-psychiatrie-2-chovani-emoce",
      "number": 15,
      "section": "specialni",
      "sectionLabel": "Speciální psychiatrie",
      "badgePrefix": "S15",
      "title": "Duševní poruchy v dětském věku II (poruchy chování a emocí se začátkem obvykle v dětství a adolescenci)",
      "shortDesc": "Hyperkinetická porucha / ADHD (F90: triáda nepozornost, hyperaktivita, impulzivita, methylfenidát a atomoxetin). Poruchy chování (F91). Emoční poruchy (separační úzkost, elektivní mutismus). Tiky a Tourettův syndrom. Enuréza a enkopréza.",
      "category": "psychopatologie",
      "badge": "Pedopsychiatrie",
      "badgeColor": "cyan",
      "theory": {
        "banner": {
          "tag": "Pedopsychiatrie II (F90–F98)",
          "title": "Poruchy chování a emocí u dětí a adolescentů",
          "text": "Heterogenní skupina poruch manifestujících se v dětském věku, které zahrnují hyperkinetické syndromy (ADHD), disociální poruchy chování, specifické úzkosti v dětství, tiky a poruchy vyměšování."
        },
        "sections": [
          {
            "title": "1. Hyperkinetická porucha / ADHD (F90)",
            "color": "cyan",
            "content": "\n                        <div class=\"p-3 rounded-lg bg-slate-900 border border-slate-700 text-xs space-y-2\">\n                            <span class=\"font-bold text-violet-300\">Diagnostická triáda příznaků (začátek před 7.–12. rokem věku ve více prostředích – škola i domov):</span>\n                            <ul class=\"list-disc ml-4 text-slate-300 space-y-0.5\">\n                                <li>1. <strong>Porucha pozornosti (nepozornost):</strong> Snadná unavitelnost, neschopnost udržet pozornost u hry/úkolu, nepozorné chyby, zapomínání pomůcek, nedokončování práce.</li>\n                                <li>2. <strong>Hyperaktivita:</strong> Motorický neklid (vrtění, vstávání v lavici, neustálý pohyb jako 'na klíček').</li>\n                                <li>3. <strong>Impulzivita:</strong> Skákání do řeči, neschopnost počkat na řadu, unáhlené riskantní jednání bez domýšlení následků.</li>\n                            </ul>\n                            <div class=\"mt-2 text-emerald-300\">\n                                <strong>Léčba ADHD:</strong> 1. Režimová a edukační opatření, 2. KBT a trénink rodičovských kompetencí, 3. <strong>Farmakoterapie:</strong> <em>Methylfenidát</em> (stimulancium – Ritalin, Concerta), <em>Atomoxetin</em> (nestimulancium – Strattera), <em>Guanfacin</em>.\n                            </div>\n                        </div>\n                    "
          },
          {
            "title": "2. Poruchy chování (F91) a Emoční poruchy specifické pro dětství (F93)",
            "color": "indigo",
            "content": "\n                        <div class=\"grid md:grid-cols-2 gap-3 text-xs\">\n                            <div class=\"p-3 rounded-lg bg-slate-900 border border-slate-700\">\n                                <h4 class=\"font-bold text-rose-400 mb-1\">Poruchy chování (F91)</h4>\n                                <p class=\"text-slate-300\">Opakované, trvalé porušování sociálních norem a práv druhých (min. 6 měsíců):</p>\n                                <ul class=\"list-disc ml-4 space-y-0.5 text-slate-300\">\n                                    <li>Agrese k lidem a zvířatům (šikana, týrání zvířat).</li>\n                                    <li>Destrukce majetku (vandalismus, zakládání požárů).</li>\n                                    <li>Závažné krádeže a podvody.</li>\n                                    <li>Útěky z domova a záškoláctví.</li>\n                                    <li><em>Porucha opozičního vzdoru (F91.3):</em> U mladších dětí – vzdorovitost, hádavost, provokování dospělých bez těžké kriminality.</li>\n                                </ul>\n                            </div>\n                            <div class=\"p-3 rounded-lg bg-slate-900 border border-slate-700\">\n                                <h4 class=\"font-bold text-amber-300 mb-1\">Emoční poruchy (F93) & Tiky</h4>\n                                <ul class=\"list-disc ml-4 space-y-1 text-slate-300\">\n                                    <li><strong>Separační úzkostná porucha v dětství (F93.0):</strong> Nepřiměřený, vývojově neadekvátní panický strach z odloučení od rodičů (odmítání školy, somatické bolesti břicha ráno před odchodem).</li>\n                                    <li><strong>Elektivní mutismus (F94.0):</strong> Dítě plynně mluví doma s rodiči, ale ve škole a s cizími zcela mlčí.</li>\n                                    <li><strong>Tourettův syndrom (F95.2):</strong> Kombinované motorické tiky (mrkání, trhání hlavou) a hlasové/vokální tiky (odkašlávání, pískání, <strong>koprolálie</strong> – nutkavé vykřikování vulgarismů).</li>\n                                </ul>\n                            </div>\n                        </div>\n                    "
          },
          {
            "title": "3. Poruchy vyměšování (Enuréza a Enkopréza / F98)",
            "color": "emerald",
            "content": "\n                        <div class=\"grid md:grid-cols-2 gap-3 text-xs\">\n                            <div class=\"p-3 rounded-lg bg-slate-900 border border-slate-700\">\n                                <strong>Neorganická enuréza (F98.0):</strong> Bezděčné pomočování (ve dne nebo v noci – <em>enuresis nocturna</em>) u dětí starších <strong>5 let</strong> bez organické příčiny. Léčba: režim tekutin, enuretický budík, desmopresin (Minirin).\n                            </div>\n                            <div class=\"p-3 rounded-lg bg-slate-900 border border-slate-700\">\n                                <strong>Neorganická enkopréza (F98.1):</strong> Opakované odcházení stolice na nevhodných místech u dětí starších <strong>4 let</strong> (často spojeno s chronickou obstipací a psychickým napětím).\n                            </div>\n                        </div>\n                    "
          }
        ]
      },
      "recall": {
        "scenarios": [
          {
            "id": "s15-r1",
            "title": "Kazuistika S15: Diferenciální diagnostika ranních bolestí břicha před školou",
            "question": "7letá prvňačka si každé všední ráno stěžuje na kruté bolesti břicha, pláče a zvrací při loučení s matkou před školou. O víkendech a prázdninách je zcela bez obtíží a veselá. Pediatrické a gastroenterologické vyšetření je negativní. O jakou poruchu se jedná?",
            "answer": "Jedná se o Separační úzkostnou poruchu v dětství (F93.0). Somatické projevy (bolesti břicha, nauzea) jsou vegetativním ekvivalentem extrémního strachu ze separace od primární pečující osoby (matky) a obav, že se rodičům během její nepřítomnosti něco stane.",
            "pearl": "Terapie separační úzkosti: KBT (postupná expozice odloučení), rodinná terapie, nácvik ranních rituálů, medikace SSRI pouze při těžkém průběhu."
          }
        ]
      },
      "cards": [
        {
          "id": "sc15-1",
          "front": "Jaká je základní triáda příznaků ADHD (hyperkinetické poruchy)?",
          "back": "1. Nepozornost (porucha udržení pozornosti), 2. Hyperaktivita (motorický neklid), 3. Impulzivita.",
          "hint": "ADHD triáda",
          "category": "psychopatologie"
        },
        {
          "id": "sc15-2",
          "front": "Co je to Tourettův syndrom a jaký má specifický vokální projev?",
          "back": "Kombinovaná tiková porucha s vícečetnými motorickými tiky a alespoň jedním zvukovým tikem; specifickým (nikoliv však nutným) projevem je koprolálie (vyrážení sprostých slov).",
          "hint": "Tiková porucha",
          "category": "psychopatologie"
        },
        {
          "id": "sc15-3",
          "front": "Od jakého věku se diagnostikuje noční enuréza jako duševní porucha?",
          "back": "Od 5 let věku (před tímto věkem je noční pomočování považováno za fyziologickou nezralost mikčního reflexu).",
          "hint": "Věk enurézy",
          "category": "psychopatologie"
        }
      ],
      "quiz": [
        {
          "id": "s15-test1",
          "question": "Které léčivo je stimulanciem první volby pro farmakoterapii středně těžkého až těžkého ADHD u dětí od 6 let?",
          "options": [
            "Methylfenidát (Ritalin / Concerta)",
            "Diazepam",
            "Haloperidol",
            "Karbamazepin"
          ],
          "correctIndex": 0,
          "explanation": "Methylfenidát blokuje DAT a NET v prefrontálním kortexu a je nejúčinnějším lékem 1. volby pro ADHD."
        },
        {
          "id": "s15-test2",
          "question": "Pojem 'elektivní mutismus' v pedopsychiatrii označuje:",
          "options": [
            "Ztrátu sluchu po prodělané meningitidě",
            "Schopnost normálně mluvit v určitých bezpečných situacích (doma), zatímco v jiných specifických situacích (ve škole) dítě zcela nemluví",
            "Úplnou neschopnost porozumět mluvené řeči",
            "Koktavost"
          ],
          "correctIndex": 1,
          "explanation": "Elektivní mutismus je úzkostně podmíněná porucha, kdy dítě selektivně nekomunikuje v sociálních situacích (např. ve škole), ačkoliv doma hovoří plynule."
        }
      ]
    },
    {
      "id": "s16-akutni-stavy-agrese-suicidalita",
      "number": 16,
      "section": "specialni",
      "sectionLabel": "Speciální psychiatrie",
      "badgePrefix": "S16",
      "title": "Akutní stavy v psychiatrii (agresivní chování, suicidalita) a jejich řešení",
      "shortDesc": "Management psychomotorického neklidu a agresivního pacienta (verbální deeskalace, farmakologické zklidnění, fyzické omezení). Krizová intervence u suicidálního pacienta (Ringelův presuicidální syndrom, odhad rizika, stálý dohled, detence do 24 h). Maligní stavy.",
      "category": "vysetreni",
      "badge": "Urgentní psychiatrie",
      "badgeColor": "rose",
      "theory": {
        "banner": {
          "tag": "Urgentní psychiatrie",
          "title": "Akutní a život ohrožující stavy v psychiatrii",
          "text": "Akutní psychiatrické stavy vyžadují neodkladný lékařský zásah k odvrácení bezprostředního ohrožení života nebo zdraví pacienta či jeho okolí. Zahrnují psychomotorický neklid s agresivitou, suicidalitu, těžká deliria a polékové emergentní stavy (MNS, sérotoninový syndrom)."
        },
        "sections": [
          {
            "title": "1. Management agresivního a neklidného pacienta",
            "color": "rose",
            "content": "\n                        <div class=\"space-y-2 text-xs\">\n                            <div class=\"p-3 rounded-lg bg-slate-900 border border-slate-700\">\n                                <strong class=\"text-violet-300\">1. Verbální deeskalace (Základní přístup):</strong>\n                                <p class=\"text-slate-300 mt-1\">Klidný, věcný, neutrální tón hlasu, udržovat bezpečný odstup (na délku paže + krok), zajistit volnou únikovou cestu ze dveří pro personál, nezpochybňovat agresivně pacientovy bludy, ale stanovit jasné pevné hranice.</p>\n                            </div>\n                            <div class=\"p-3 rounded-lg bg-slate-900 border border-slate-700\">\n                                <strong class=\"text-emerald-400\">2. Rychlá farmakologická sedace (Chemické zklidnění):</strong>\n                                <ul class=\"list-disc ml-4 text-slate-300 space-y-1 mt-1\">\n                                    <li><strong>Atypická antipsychotika i.m./p.o. (1. volba):</strong> Olanzapin 10 mg i.m. nebo Ziprasidon 10–20 mg i.m. (rychlý nástup do 15–30 min, minimální EPS).</li>\n                                    <li><strong>Klasická neuroleptika + BZD:</strong> Haloperidol 5 mg i.m. + Diazepam 10 mg i.m./p.o. (osvědčená kombinace u těžkého psychotického neklidu).</li>\n                                    <li><strong>Tiaprid (Tiapridal 100–200 mg i.m./i.v.):</strong> U geriatrických a intoxikovaných pacientů.</li>\n                                    <li>⚠️ <em>Pozor:</em> Nikdy neaplikovat Olanzapin i.m. a Diazepam/BZD i.m. současně do stejné stříkačky ani v těsném sledu (riziko těžké hypotenze a fatální dechové zástavy!).</li>\n                                </ul>\n                            </div>\n                            <div class=\"p-3 rounded-lg bg-slate-900 border border-slate-700\">\n                                <strong class=\"text-amber-400\">3. Fyzické omezovací prostředky (Kurtace / Izolace):</strong>\n                                <p class=\"text-slate-300 mt-1\">Pouze jako <em>krajní prostředek</em> (ultima ratio) při selhání deeskalace a farmakologie k odvrácení přímého útoku. Vyžaduje: 1. Písemnou indikaci lékaře, 2. Pravidelné kontroly sester (min. po 15–30 min), 3. Záznam do dokumentace, 4. Ukončení ihned po odeznění nebezpečí.</p>\n                            </div>\n                        </div>\n                    "
          },
          {
            "title": "2. Posouzení a řešení suicidálního rizika",
            "color": "amber",
            "content": "\n                        <div class=\"space-y-2 text-xs\">\n                            <div class=\"p-3 rounded-lg bg-rose-950/40 border border-rose-500/40\">\n                                <strong class=\"text-rose-400\">🚨 Presuicidální syndrom (Erwin Ringel):</strong>\n                                <ul class=\"list-disc ml-4 text-slate-300 space-y-0.5 mt-1\">\n                                    <li>1. <strong>Dynamické zúžení:</strong> Zúžení perspektivy, vztahů, zájmů a volby řešení (tunelové vidění – 'není jiné cesty').</li>\n                                    <li>2. <strong>Invertovaná (zadržená) agresivita:</strong> Hněv a agrese nejsou ventilovány navenek, ale obracejí se proti vlastní osobě.</li>\n                                    <li>3. <strong>Suicidální fantazie:</strong> Představy o vlastní smrti a reakcích okolí, které se postupně mění v konkrétní plány.</li>\n                                </ul>\n                            </div>\n                            <div class=\"p-3 rounded-lg bg-slate-900 border border-slate-700\">\n                                <strong class=\"text-violet-300\">Stupně suicidálního jednání:</strong>\n                                <p class=\"text-slate-300 mt-1\">Pasivní myšlenky ➔ Suicidální úvahy ➔ Suicidální tendence s plánem ➔ Bilanční sebevražda vs. Impulzivní zkratková sebevražda ➔ Suicidální pokus (parasuicidium) ➔ Dokonaná sebevražda.</p>\n                                <p class=\"text-emerald-400 font-bold mt-2\">Postup při vysokém riziku: Okamžitá hospitalizace na uzavřeném oddělení (při nesouhlasu nedobrovolná hospitalizace s hlášením soudu do 24 h), režim zvýšeného/stálého dohledu (1 : 1), odstranění nebezpečných předmětů (tkaničky, pásky, léky), farmakoterapie (sedace + Lithium v dlouhodobé profylaxi / ECT u psychotické deprese).</p>\n                            </div>\n                        </div>\n                    "
          },
          {
            "title": "3. Právní rámec nedobrovolné hospitalizace (§ 38 ZZS)",
            "color": "indigo",
            "content": "\n                        <div class=\"p-3 rounded-lg bg-slate-900 border border-slate-700 text-xs\">\n                            <p class=\"text-slate-300\">Zdravotnické zařízení může pacienta převzít do péče bez jeho písemného souhlasu, pokud:</p>\n                            <ul class=\"list-disc ml-4 mt-1 text-slate-300 space-y-0.5\">\n                                <li>Bezprostředně a vážně ohrožuje sebe nebo své okolí a jeví známky duševní poruchy nebo je pod vlivem návykové látky.</li>\n                                <li><strong>Zákonná lhůta hlášení:</strong> Oznámení soudu <strong>do 24 hodin</strong>. Soud do 7 dnů rozhodne o zákonnosti převzetí.</li>\n                            </ul>\n                        </div>\n                    "
          }
        ]
      },
      "recall": {
        "scenarios": [
          {
            "id": "s16-r1",
            "title": "Kazuistika S16: Akutní psychomotorický neklid s agresí na ambulanci",
            "question": "Na psychiatrickou ambulanci přiváží policie 28letého muže pod vlivem neznámé látky. Pacient demoluje nábytek, vyhrožuje zabitím personálu, má rozšířené zornice, tep 135/min. Verbální deeskalace zcela selhává. Jaký je okamžitý farmakologický a organizační postup?",
            "answer": "1. Zajištění bezpečnosti personálu (přítomnost policie / ochranky), 2. Aplikace rychle působící farmakologické sedace i.m. (např. Olanzapin 10 mg i.m. nebo Haloperidol 5 mg i.m. + Diazepam 10 mg i.m. do oddělených stříkaček), 3. Fyzická imobilizace (kurtace) pouze na nezbytně nutnou dobu do nástupu sedace s řádným zápisem do dokumentace, 4. Vyšetření EKG, glykémie a toxikologie moči k vyloučení somatické komplikace a přemístění na uzavřené lůžko (detence do 24 h).",
            "pearl": "Kombinační pravidlo: Nikdy neaplikovat intramuskulární Olanzapin a Benzodiazepin současně pro riziko kardiorespirační zástavy."
          }
        ]
      },
      "cards": [
        {
          "id": "sc16-1",
          "front": "Jaké 3 složky charakterizují Ringelův presuicidální syndrom?",
          "back": "1. Dynamické zúžení (vztahů, zájmů, hodnot), 2. Invertovaná (zadržená) agresivita proti sobě, 3. Suicidální fantazie.",
          "hint": "Ringelův syndrom",
          "category": "vysetreni"
        },
        {
          "id": "sc16-2",
          "front": "Jaká kombinace léků je kontraindikována k současnému intramuskulárnímu podání pro riziko zástavy dechu?",
          "back": "Olanzapin i.m. a Benzodiazepiny i.m. (např. Diazepam/Lorazepam) – nesmí se podávat společně!",
          "hint": "Olanzapin + BZD i.m.",
          "category": "farmakologie"
        },
        {
          "id": "sc16-3",
          "front": "Do kolika hodin musí nemocnice nahlásit soudu nedobrovolnou hospitalizaci agresivního či suicidálního pacienta?",
          "back": "Do 24 hodin od přijetí (§ 40 Zákona o zdravotních službách).",
          "hint": "Zákonná lhůta",
          "category": "vysetreni"
        }
      ],
      "quiz": [
        {
          "id": "s16-test1",
          "question": "Co je prvním a základním krokem při kontaktu s neklidným, potenciálně agresivním psychiatrickým pacientem?",
          "options": [
            "Okamžitá fyzická kurtace čtyřbodovými popruhy bez varování",
            "Verbální deeskalace v klidném tónu při zajištění bezpečné vzdálenosti a únikové cesty pro personál",
            "Aplikace elektrokonvulze",
            "Vyhrožování trestním oznámením"
          ],
          "correctIndex": 1,
          "explanation": "Verbální deeskalace, klidný přístup a udržování bezpečné vzdálenosti jsou základním pilířem před přistoupením k farmakologickému či fyzickému omezení."
        },
        {
          "id": "s16-test2",
          "question": "Které z následujících opatření je NEZBYTNÉ při umístění pacienta s vysokým rizikem sebevraždy na lůžkové oddělení?",
          "options": [
            "Ponechání pacienta o samotě v neosvětlené místnosti bez kontrol",
            "Zajištění režimu stálého dohledu (1:1 nebo v dosahu personálu) a odstranění nebezpečných předmětů (tkaničky, pásky, sklo, ostré předměty)",
            "Umožnění volného vycházení z nemocnice bez doprovodu",
            "Podání stimulancií k aktivaci"
          ],
          "correctIndex": 1,
          "explanation": "Bezpečné prostředí a stálý dohled jsou klíčem k záchraně života pacienta v akutní suicidální krizi."
        }
      ]
    }
  ]
};
