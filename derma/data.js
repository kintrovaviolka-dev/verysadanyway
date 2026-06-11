// data_derma.js - Databáze otázek z obecné a speciální dermatologie
const DATA_DERMATOLOGIE = [
      {
            "id": "derma-1",
            "title": "Anatomie kůže - epidermis",
            "section": "Obecná část",
            "keywords": [
                  "epidermis",
                  "stratum basale",
                  "keratinocyty",
                  "Langerhansovy buňky",
                  "Merkelovy buňky",
                  "dermoepidermální spojení"
            ],
            "content": {
                  "definition": "Pokožka (epidermis) je nejsvrchnější vrstva kůže ektodermálního původu. Jedná se o vrstevnatý dlaždicový rohovějící epitel, jehož tloušťka kolísá od 0,04 mm do 1,5 mm. Epidermis slouží jako primární rozhraní mezi organismem a vnějším prostředím a vytváří dynamickou bariéru chránící tělo před chemickými, fyzikálními a biologickými vlivy a zároveň zabraňuje ztrátě vody a elektrolytů.",
                  "etiology": "Pokožka se vyvíjí z ektodermu. Spojení s koriem (škárou) není rovné – dermoepidermální spojení je zvlněno, kdy epidermální lišty zapadají do dermálních papil (škárových výběžků), což mechanicky zpevňuje kůži. Bazální membrána (dermoepidermální junkce) slouží jako selektivní filtr a ukotvení epidermis. Skládá se z <strong>lamina lucida</strong> (obsahuje laminin) a <strong>lamina densa</strong> (obsahuje kolagen IV a kotvící vlákna kolagenu VII).",
                  "pathogenesis": "Keratinocyty podléhají neustálému procesu <strong>keratinizace (rohovění)</strong>. Progenitorové buňky v bazální vrstvě se dělí, migrují směrem nahoru a postupně se diferencují. Během cesty ztrácejí jádro a organely a plní se keratinem. Doba přechodu buňky z bazální do rohové vrstvy trvá přibližně <strong>14 dní</strong>, dalších 14 dní pak trvá exfoliace rohové vrstvy (celkem tedy asi 28 dní cyklus regenerace kůže).",
                  "macroscopy": "Na povrchu těla rozeznáváme dva typy kůže: <strong>tlustý typ</strong> (planta a palma manus - tlustá rohová vrstva, chybí vlasové folikuly a mazové žlázy, výrazné dermatoglyfy) a <strong>tenký typ</strong> (kryje zbytek těla, tenká epidermis, obsahuje adnexa). Na makroskopické úrovni je patrné členění kůže na polygonální políčka a přítomnost Langerhansových čar štěpnosti, které určují směr chirurgického řezu.",
                  "microscopy": "Pokožka se skládá z pěti vrstev keratinocytů a specifických nebuněčných typů:<br>1. <strong>Stratum basale</strong>: Jednořadý základní buněčný substrát spojený s bazální membránou hemidesmosomy a mezi sebou desmosomy. Obsahuje kmenové buňky a melanocyty.<br>2. <strong>Stratum spinosum</strong>: Nejsilnější vrstva polygonálních buněk s desmosomálními spoji (vzhled ostnů).<br>3. <strong>Stratum granulosum</strong>: Ploché buňky obsahující bazofilní keratohyalinní zrna.<br>4. <strong>Stratum lucidum</strong>: Jasná, tenká vrstva bezjaderných buněk s eleidinem (pouze na dlaních a ploskách).<br>5. <strong>Stratum corneum</strong>: Vrstva odumřelých, plochých rohových šupin (korneocytů) bez jader.<br><br>Buněčné typy:<br>- <strong>Keratinocyty</strong>: 90 % buněk pokožky, syntetizují cytokeratin.<br>- <strong>Melanocyty</strong>: Buňky z neurální lišty, tvoří melanin v melanosomech a předávají jej keratinocytům.<br>- <strong>Langerhansovy buňky</strong>: Dendritické imunitní buňky z kostní dřeně (antigen-prezentující).<br>- <strong>Merkelovy buňky</strong>: Mechanoreceptory pro vnímání pomalého doteku.",
                  "clinical": "Bariérová funkce epidermis je klíčová pro homeostázu. Autoimunitní poškození desmosomů (akantolýza) způsobuje tvorbu intraepidermálních puchýřů u <strong>pemphigus vulgaris</strong>. Poškození hemidesmosomů v bazální membráně způsobuje subepidermální puchýře u <strong>bulózního pemfigoidu</strong>."
            },
            "quiz": [
                  {
                        "question": "Která vrstva pokožky (stratum) se vyskytuje výhradně v tlustém typu kůže (dlaně, plosky) a je tvořena bezjadernými plochými buňkami vyplněnými eleidinem?",
                        "options": [
                              "Stratum spinosum",
                              "Stratum lucidum",
                              "Stratum granulosum",
                              "Stratum corneum"
                        ],
                        "correct": 1,
                        "explanation": "Stratum lucidum (jasná vrstva) je tenká, silně světlolomná vrstva buněk, která se nachází pouze na dlaních a ploskách (tlustý typ kůže). Buňky v této vrstvě již ztratily jádra a organely a jsou vyplněny polotekutým eleidinem."
                  },
                  {
                        "question": "Které buňky v pokožce jsou imunologicky aktivní, pocházejí z kostní dřeně a fungují jako antigen-prezentující buňky (APC)?",
                        "options": [
                              "Melanocyty",
                              "Merkelovy buňky",
                              "Langerhansovy buňky",
                              "Keratinocyty"
                        ],
                        "correct": 2,
                        "explanation": "Langerhansovy buňky jsou specializované dendritické buňky monocyto-makrofágového systému, které pocházejí z kostní dřeně. Nacházejí se hlavně ve stratum spinosum a slouží k pohlcení, zpracování a prezentaci antigenu T-lymfocytům."
                  }
            ]
      },
      {
            "id": "derma-2",
            "title": "Anatomie kůže - korium",
            "section": "Obecná část",
            "keywords": [
                  "dermis",
                  "škára",
                  "stratum papillare",
                  "stratum reticulare",
                  "mechanoreceptory",
                  "kolagen"
            ],
            "content": {
                  "definition": "Škára (dermis, korium) je pevná vazivová vrstva mesodermálního původu nacházející se pod epidermis, na kterou plynule navazuje podkožní tukové vazivo (subcutis). Dermis dodává kůži mechanickou pevnost, tažnost, pružnost a zajišťuje její výživu, termoregulaci a inervaci.",
                  "etiology": "Dermis se vyvíjí z mezodermu. Její struktura je tvořena vazivovými buňkami (především <strong>fibroblasty</strong>, které syntetizují mezibuněčnou hmotu), vláknitou složkou (kolagenní a elastická vlákna) a amorfní základní hmotou (glykosaminoglykany, kyselina hyaluronová, které vážou vodu).",
                  "pathogenesis": "Vláknitá síť koria je uspořádána tak, aby odolávala mechanickému tahu. Kolagenní vlákna (kolagen typu I a III) dodávají pevnost, zatímco elastická vlákna zajišťují pružnost a návrat kůže do původního stavu po natažení. Stárnutím a vlivem UV záření dochází k degeneraci elastických vláken a úbytku kolagenu, což vede ke tvorbě vrásek.",
                  "macroscopy": "Tloušťka dermis kolísá od 0.5 mm (oční víčka) do 3 mm a více (záda). Škára podmiňuje kožní turgor (napětí) a barvu kůže (prosvítání cévního řečiště). Při poškození hlubších vrstev koria se rány hojí vazivovou jizvou, případně vznikají strie při rychlém roztažení.",
                  "microscopy": "Histologicky se dermis dělí na dvě vrstvy:<br>1. <strong>Stratum papillare</strong>: Svrchní, tenčí vrstva podkožního dermoepidermálního spojení. Je tvořena řídkým kolagenním vazivem s jemnými vlákny, obsahuje četné kapilární kličky vyživující epidermis a nervová zakončení.<br>2. <strong>Stratum reticulare</strong>: Hluboká, silnější vrstva tvořená hustým neuspořádaným kolagenním vazivem se silnými snopci kolagenu a elastických vláken. Nacházejí se zde adnexa kůže, větší cévy a nervové pleteně.<br><br>Nervové receptory škáry:<br>- <strong>Vater-Paciniho tělíska</strong>: Receptory pro hrubý tlak a vibrace (hluboká dermis a podkoží).<br>- <strong>Wagnerova-Meissnerova tělíska</strong>: Receptory pro jemný dotek (v dermálních papilách).<br>- <strong>Krauseho tělíska</strong>: Receptory pro chlad.<br>- <strong>Ruffiniho tělíska</strong>: Receptory pro teplo.",
                  "clinical": "Vazodilatace a zvýšená permeabilita cév v stratum papillare koria vedou k úniku tekutiny a vzniku kopřivkového pupenu (urtiky) při <strong>kopřivce (urticaria)</strong>. Záněty cév v koriu se klinicky manifestují jako vaskulitidy. Hojení ran v retikulární dermis je spojeno s rizikem tvorby hypertrofických nebo keloidních jizev."
            },
            "quiz": [
                  {
                        "question": "Které senzitivní tělísko (receptor) v koriu a podkoží je specializované na vnímání hrubého tlaku a vibrací vysoké frekvence?",
                        "options": [
                              "Wagnerovo-Meissnerovo tělísko",
                              "Vater-Paciniho tělísko",
                              "Krauseho tělísko",
                              "Ruffiniho tělísko"
                        ],
                        "correct": 1,
                        "explanation": "Vater-Paciniho tělíska jsou velká, vrstvená tělíska (vzhled cibule) lokalizovaná v hluboké dermis a podkoží. Fungují jako rychle se adaptující mechanoreceptory pro vnímání tlaku a vibrací."
                  },
                  {
                        "question": "Která vrstva koria se nachází přímo pod epidermis, vybíhá v papily a je tvořena převážně řídkým kolagenním vazivem s jemnými cévními kličkami?",
                        "options": [
                              "Stratum reticulare",
                              "Stratum spinosum",
                              "Stratum papillare",
                              "Subcutis"
                        ],
                        "correct": 2,
                        "explanation": "Stratum papillare (papilární vrstva dermis) je tenká vrstva těsně pod epidermis. Tvoří papily zapadající do epidermálních lišt, obsahuje jemná kolagenní a elastická vlákna, kapilární sítě a hmatová tělíska."
                  }
            ]
      },
      {
            "id": "derma-3",
            "title": "Anatomie kůže - kožní adnexa",
            "section": "Obecná část",
            "keywords": [
                  "kožní adnexa",
                  "žlázy",
                  "ekrinní",
                  "apokrinní",
                  "mazové",
                  "vlasový cyklus",
                  "nehet"
            ],
            "content": {
                  "definition": "Kožní adnexa (adnexa cutis) jsou specializované struktury odvozené z epidermis, které jsou lokalizované převážně v dermis a podkoží. Dělí se na adnexa žlázová (mazové a potní žlázy) a adnexa keratinizovaná (rohovějící - vlasy, chlupy, nehty). Plní důležité ochranné, termoregulační, metabolické a senzorické funkce.",
                  "etiology": "Kožní adnexa se vyvíjejí během fetálního života vchlipováním zárodečné epidermis hluboko do koriové vrstvy. Jejich aktivita a rozvoj jsou významně ovlivněny hormonálně (androgeny v pubertě stimulují mazové a apokrinní žlázy).",
                  "pathogenesis": "Tvorba vlasu a nehtu je procesem intenzivní lokalizované keratinizace. Vlasový cyklus má tři fáze:<br>1. <strong>Anagen</strong>: Fáze aktivního růstu (trvá 2–6 let, 85–90 % vlasů na hlavě).<br>2. <strong>Katagen</strong>: Fáze regrese/involuce (2–3 týdny, vlasový folikul se smršťuje).<br>3. <strong>Telogen</strong>: Fáze klidu/výpadku (2–4 měsíce, starý vlas vypadává a cyklus začíná znovu).",
                  "macroscopy": "Vlasy (pili) se dělí na jemné primární chmýří (lanugo), krátký jemný vellus (u dětí a žen) a silný pigmentovaný terminální vlas (vlasy, vousy, ochlupení). Nehet (unguis) se skládá z nehtové ploténky ležící na nehtovém lůžku, ohraničené valy. Vlasová cibulka (bulbus) je uložena hluboko v dermis.",
                  "microscopy": "Rozdělení žláz podle sekrece a struktury:<br>1. <strong>Mazové žlázy (glandulae sebaceae)</strong>: Alveolární žlázy s <strong>holokrinní sekrecí</strong> (buňka se plní mazem a rozpadá se). Ústí do vlasového folikulu. Chybí na dlaních a ploskách.<br>2. <strong>Ekrinní potní žlázy (glandulae sudoriferae eccrinae)</strong>: Jednoduché stočené tubulární žlázy s <strong>merokrinní sekrecí</strong>. Ústí přímo na povrch kůže, slouží k termoregulaci (pot je hypotonický roztok NaCl). Jsou inervovány sympatikem, ale cholinergně (acetylcholin).<br>3. <strong>Apokrinní potní žlázy (glandulae sudoriferae apocrinae)</strong>: Aromatické žlázy (pachové). Ústí do vlasového folikulu v podpaží, genitálu a prsních dvorcích. Sekrece je apokrinní (odškrcuje se vrchol buňky). Aktivují se v pubertě působením pohlavních hormonů, inervovány sympatikem adrenergně.",
                  "clinical": "Poruchy adnex jsou základem mnoha běžných chorob: ucpání vývodu a zánět mazové žlázy vede k <strong>akné (acne vulgaris)</strong>. Poruchy vlasového cyklu nebo autoimunitní napadení folikulů vedou k alopeciím (alopecia areata, androgenní alopecie). Postižení nehtů plísněmi je onychomykóza. Blokáda potních vývodů způsobuje potničky (miliaria)."
            },
            "quiz": [
                  {
                        "question": "Které potní žlázy se aktivují až v pubertě, ústí do vlasových folikulů, produkují aromatický (pachový) sekret a jsou inervovány sympatikem adrenergně?",
                        "options": [
                              "Ekrinní potní žlázy",
                              "Apokrinní potní žlázy",
                              "Mazové žlázy",
                              "Mléčné žlázy"
                        ],
                        "correct": 1,
                        "explanation": "Apokrinní (aromatické) potní žlázy reagují na hormonální změny v pubertě a emoční stres. Ústí do vlasového folikulu v podpaží, perianální a genitální oblasti. Jejich sekret je bohatý na organické látky, které po rozkladu bakteriemi produkují typický zápach."
                  },
                  {
                        "question": "Která fáze vlasového cyklu představuje aktivní růst vlasu, v níž se v oblasti kštice nachází přibližně 85–90 % folikulů a která trvá 2 až 6 let?",
                        "options": [
                              "Telogen",
                              "Katagen",
                              "Anagen",
                              "Exogen"
                        ],
                        "correct": 2,
                        "explanation": "Anagen je růstová fáze vlasu s vysokou mitotickou aktivitou buněk vlasové matrix. Trvá průměrně 2-6 let (u vlasů na hlavě), což určuje maximální dosažitelnou délku vlasů. Katagen je přechodná fáze (regrese) a telogen je klidová fáze."
                  }
            ]
      },
      {
            "id": "derma-4",
            "title": "Fyziologie kůže",
            "section": "Obecná část",
            "keywords": [
                  "fyziologie",
                  "termoregulace",
                  "kožní bariéra",
                  "vitamin D",
                  "imunologická funkce"
            ],
            "content": {
                  "definition": "Kůže plní řadu vitálních funkcí nezbytných pro zachování homeostázy celého organismu. Není pouze pasivním obalem těla, ale vysoce aktivním metabolickým, endokrinním, senzorickým a imunitním orgánem, který neustále komunikuje s vnějším i vnitřním prostředím.",
                  "etiology": "Kožní povrch pokrývá <strong>kyselý kožní plášť</strong> (emulze kožního mazu, potu a epidermálních lipidů) s fyziologickým pH 4.5–5.5, který vykazuje přirozené antimikrobiální vlastnosti a brání přemnožení patogenních mikrobů.",
                  "pathogenesis": "Fyziologické procesy kůže zahrnují:<br>1. <strong>Ochranná bariéra</strong>: Fyzikální (keratinocyty, desmozomy, rohová vrstva), chemická (kyselý kožní film) a biologická (kožní mikrobiom, Langerhansovy buňky).<br>2. <strong>Termoregulace</strong>: Regulace tělesné teploty změnou průtoku krve kožními cévními pleteněmi (vazodilatace/vazokonstrikce) a odpařováním potu (evaporace).<br>3. <strong>Metabolická a endokrinní</strong>: Syntéza vitaminu D3 působením UVB záření, metabolismus lipidů a steroidních hormonů.",
                  "macroscopy": "Hydratace a kožní turgor jsou odrazem rovnováhy vody a elektrolytů. Ztráta vody se děje neznatelným odpařováním (perspiratio insensibilis - cca 300-400 ml denně) nebo aktivním pocením. Pigmentace kůže (opálení) je makroskopickou reakcí na UV záření.",
                  "microscopy": "V keratinocytech stratum spinosum a granulosum dochází k syntéze lipidů, které se ukládají v lamellárních tělíscích (Odlandova tělíska) a vylučují se do mezibuněčného prostoru rohové vrstvy, kde tvoří hydrofobní bariéru (ceramidy, cholesterol, volné mastné kyseliny). Působením UVB záření se <strong>7-dehydrocholesterol</strong> v keratinocytech fotochemicky mění na cholekalciferol (previtamin D3).",
                  "clinical": "Narušení bariérové funkce vede k transepidermální ztrátě vody (TEWL), suchosti kůže a snadnému průniku alergenů (např. u <strong>atopického ekzému</strong>). Selhání termoregulace nastává při rozsáhlém poškození kůže (popáleniny). Deficit vitaminu D3 může být způsoben nedostatečnou expozicí slunečnímu záření."
            },
            "quiz": [
                  {
                        "question": "Která sloučenina přítomná v kůži funguje jako výchozí prekurzor, ze kterého vlivem fotochemické reakce vyvolané UVB zářením vzniká vitamin D3 (cholekalciferol)?",
                        "options": [
                              "Kalcidiol (25-hydroxyvitamin D3)",
                              "Kalcitriol (1,25-dihydroxyvitamin D3)",
                              "7-dehydrocholesterol",
                              "Lanosterol"
                        ],
                        "correct": 2,
                        "explanation": "Pod vlivem UVB záření o vlnové délce 290-315 nm dochází v buňkách stratum basale a spinosum k fotolýze 7-dehydrocholesterolu na previtamin D3, který se termickou izomerizací mění na stabilní cholekalciferol (vitamin D3). Ten se pak hydroxyluje v játrech a ledvinách."
                  },
                  {
                        "question": "Jaká je přibližná hodnota pH zdravého kyselého kožního filmu, který chrání kůži před patogenními bakteriemi a plísněmi?",
                        "options": [
                              "3.0 - 3.5",
                              "4.5 - 5.5",
                              "7.2 - 7.4",
                              "8.0 - 9.0"
                        ],
                        "correct": 1,
                        "explanation": "Kyselý kožní plášť má fyziologické pH v rozmezí 4.5-5.5 (mírně kyselé). Tuto kyselost udržují kyselé složky potu (kyselina mléčná), aminokyseliny a volné mastné kyseliny z kožního mazu. Kyselé prostředí potlačuje růst patogenních mikroorganismů (např. Staphylococcus aureus)."
                  }
            ]
      },
      {
            "id": "derma-5",
            "title": "Klinické dermatologické vyšetření",
            "section": "Obecná část",
            "keywords": [
                  "vyšetření",
                  "anamnéza",
                  "dermatoskop",
                  "diaskopie",
                  "Auspitzův",
                  "Köbnerův",
                  "Nikolského"
            ],
            "content": {
                  "definition": "Klinické dermatologické vyšetření je základní diagnostický postup v dermatologii, který vyžaduje specifickou metodiku. Skládá se z podrobné anamnézy (se zaměřením na kožní specifika) a fyzikálního vyšetření kůže, sliznic, vlasů a nehtů aspekcí (pohledem) za dobrého osvětlení a palpací (pohmatem).",
                  "etiology": "Anamnéza musí pokrýt rodinnou zátěž (genodermatózy, atopie, psoriáza), osobní anamnézu, pracovní a sociální poměry (profesionální ekzémy), epidemiologické souvislosti (cestování, infekce, klíšťata) a lékovou anamnézu (FA - lékové exantémy).",
                  "pathogenesis": "Rozvoj kožních lézí se hodnotí podle dynamiky (akutní vs. chronický vznik) a reakce na vnější vlivy (slunce, teplo, chlad).",
                  "macroscopy": "Objektivní nález popisuje: lokalizaci projevů, jejich distribuci (symetrická, asymetrická, v predilekčních oblastech), konfiguraci (uspořádání eflorescencí - anulární, lineární, herpetiformní, retikulární) a charakter samotné eflorescence (barva, tvar, velikost, ohraničení, konzistence).",
                  "microscopy": "Klinické diagnostické pomůcky a fenomény:<br>- <strong>Dermatoskopie</strong>: Vyšetření ručním nebo digitálním dermatoskopem (lupa se světelným zdrojem a polarizačním filtrem nebo imerzí) umožňující vizualizaci struktur v epidermis, dermoepidermální junkci a horní dermis (klíčové pro screening melanomu).<br>- <strong>Diaskopie (vitroprese)</strong>: Tlak průhledným podložním sklíčkem na kožní lézi. Umožňuje odlišit <strong>erytém</strong> (cévní městnání, tlakem zbledne) od <strong>purpury</strong> (krvácení mimo cévy, tlakem nezbledne) a prokazuje infiltrát u TBC kůže (barva jablečného želé).<br>- <strong>Kožní biopsie</strong>: Odběr vzorku kůže (punch/průbojníková biopsie, excize) pro histopatologické vyšetření.",
                  "clinical": "Diagnostické kožní fenomény a reakce:<br>- <strong>Auspitzův fenomén</strong>: Po seškrábání šupiny u lupénky se objeví bodovité krvácení (odhalení kapilár v prodloužených dermálních papilách).<br>- <strong>Köbnerův fenomén (izomorfní kožní reakce)</strong>: Vznik projevů dané kožní choroby v místě mechanického podráždění kůže (typické pro psoriázu, lichen planus, vitiligo).<br>- <strong>Nikolského příznak</strong>: Tlakem prstu na kůži v blízkosti puchýře dojde ke stržení epidermis (pozitivní u pemphigus vulgaris z důvodu akantolýzy).<br>- <strong>Dermografismus</strong>: Cévní reakce kůže na mechanické podráždění škrábnutím (červený - vasodilatace, bílý - vazokonstrikce u atopiků, plastický/kopřivkový)."
            },
            "quiz": [
                  {
                        "question": "Při vyšetření pacienta s podezřením na pemphigus vulgaris provedete tlak prstem na zdánlivě zdravou kůži v okolí puchýře, což vede k okamžitému odloučení a posunu epidermis. Jak se tento diagnostický příznak nazývá?",
                        "options": [
                              "Auspitzův fenomén",
                              "Köbnerův fenomén",
                              "Nikolského příznak",
                              "Wickhamovy strie"
                        ],
                        "correct": 2,
                        "explanation": "Nikolského příznak (Nikolsky sign) je pozitivní, pokud dochází k odlučování epidermis od škáry při mírném bočním tlaku prstu. Je to dáno ztrátou soudržnosti buněk (akantolýzou) u pemfigu. U bulózního pemfigoidu (kde je puchýř subepidermální a bazální membrána je pevná) je tento příznak negativní."
                  },
                  {
                        "question": "U pacienta s lupénkou se v místech chirurgické jizvy nebo intenzivního škrábání vytvořila nová ložiska lupénky. O jaký klinický fenomén se jedná?",
                        "options": [
                              "Köbnerův fenomén (izomorfní reakce)",
                              "Auspitzův fenomén",
                              "Fenomén svíčkového vosku",
                              "Dermografismus"
                        ],
                        "correct": 0,
                        "explanation": "Köbnerův fenomén (izomorfní kožní reakce) popisuje vznik specifických kožních projevů stávajícího kožního onemocnění v místě mechanického poškození kůže (tření, řez, škrábání). Je typický pro lupénku (psoriázu), lichen planus a vitiligo."
                  }
            ]
      },
      {
            "id": "derma-6",
            "title": "Kožní eflorescence; jejich lokalizace a konfigurace",
            "section": "Obecná část",
            "keywords": [
                  "eflorescence",
                  "primární",
                  "sekundární",
                  "makula",
                  "papula",
                  "bula",
                  "ulkus",
                  "krusta"
            ],
            "content": {
                  "definition": "Eflorescence (kožní projevy) jsou základní morfologické elementy kožních změn, které představují 'slovník' dermatologie. Správné určení a popis eflorescencí je klíčem k dermatologické diagnostice. Tradičně se rozdělují na primární (vznikají přímo na zdravé kůži) a sekundární (vznikají evolucí primárních nebo jejich poškozením).",
                  "etiology": "Vznik konkrétního typu eflorescence odpovídá patologickým změnám v epidermis, koriu nebo podkoží (např. edém stratum papillare vytvoří kopřivkový pupen, hromadění zánětlivého exsudátu pod stratum corneum vytvoří vezikulu).",
                  "pathogenesis": "Kožní projevy procházejí evolucí: vezikula se může zakalit a změnit v pustulu, ta praská, exsudát zasychá a tvoří krustu, po jejímž odloučení zbývá eroze, která se hojí epitelizací bez jizvy.",
                  "macroscopy": "<strong>Primární eflorescence</strong>:<br>- <strong>Makula (skvrna)</strong>: Plošná změna barvy kůže v úrovni okolí (erytém, pigmentace, purpura).<br>- <strong>Papula (pupínek)</strong>: Ohraničené tuhé vyvýšení kůže do 1 cm v průměru.<br>- <strong>Nodulus (uzel)</strong>: Větší ohraničené vyvýšení kůže nad 1 cm (zasahuje hlouběji).<br>- <strong>Pomfus/Urtika (kopřivkový pupen)</strong>: Plochý, svědivý, edematózní pupen prchavého charakteru (mizí do 24 h).<br>- <strong>Vezikula (puchýřek)</strong>: Dutinka s čirou tekutinou do 1 cm.<br>- <strong>Bula (puchýř)</strong>: Dutina s tekutinou nad 1 cm.<br>- <strong>Pustula (neštovička)</strong>: Dutinka vyplněná hnisem.<br><br><strong>Sekundární eflorescence</strong>:<br>- <strong>Skvama (šupina)</strong>: Odlupující se rohovina (deskvamace).<br>- <strong>Krusta (strup)</strong>: Zaschlý exsudát (hnis, krev, serum).<br>- <strong>Eschara (příškvár)</strong>: Tuhá nekróza kůže (černá, nebolí).<br>- <strong>Eroze</strong>: Povrchový defekt pouze v epidermis (nezasahuje pod bazální membránu, nehojí se jizvou).<br>- <strong>Exkoriace</strong>: Lineární defekt zasahující do škáry (škrábance, hojí se jizvou).<br>- <strong>Ragáda (trhlina)</strong>: Lineární puklina v napjaté, ztluštělé kůži.<br>- <strong>Ulkus (vřed)</strong>: Hluboký defekt kůže zasahující do dermis nebo subkutis (vždy se hojí jizvou).<br>- <strong>Jizva (cicatrix)</strong>: Náhrada ztracené tkáně méněcenným vazivem.<br>- <strong>Atrofie</strong>: Ztenčení kůže (úbytek struktur kůže).",
                  "microscopy": "Histologický korelát: Spongióza (mezibuněčný edém) tvoří vezikuly u ekzému. Akantolýza tvoří buly u pemfigu. U ulcerace nacházíme kompletní ztráta epidermis a horní dermis s fibrinózním povlakem a zánětlivou reakcí v okolí.",
                  "clinical": "Důležité je popsat <strong>uspořádání (konfiguraci)</strong>: anulární (kruhové - tinea), lineární (kontaktní dermatitida), herpetiformní (shluky - herpes simplex) a <strong>lokalizaci</strong> (predilekční místa - např. seboroická dermatitida v seboroických zónách, atopický ekzém ve flexurách u dětí)."
            },
            "quiz": [
                  {
                        "question": "Jak se nazývá povrchový defekt kůže, který nezasahuje pod bazální membránu (postihuje pouze epidermis) a hojí se vždy kompletní epitelizací bez zanechání jizvy?",
                        "options": [
                              "Exkoriace",
                              "Ulkus (vřed)",
                              "Eroze",
                              "Ragáda"
                        ],
                        "correct": 2,
                        "explanation": "Eroze (erosio) je povrchový defekt kůže omezený na epidermis. Jelikož nedochází k poškození dermis a bazální membrána je z velké části zachována, epitel se plně zregeneruje bez tvorby vazivové jizvy."
                  },
                  {
                        "question": "Která z následujících eflorescencí patří mezi primární kožní projevy a je definována jako ohraničené vyvýšení kůže vyplněné hnisem?",
                        "options": [
                              "Vezikula",
                              "Pustula",
                              "Pomfus",
                              "Papula"
                        ],
                        "correct": 1,
                        "explanation": "Pustula (neštovička) je primární, dutá eflorescence vyplněná purulentním exsudátem (hnisem, který obsahuje odumřelé neutrofily a bakterie/buněčný detritus). Může vzniknout primárně nebo sekundárně infikováním vezikuly."
                  }
            ]
      },
      {
            "id": "derma-7",
            "title": "Histopatologické změny v kůži",
            "section": "Obecná část",
            "keywords": [
                  "histopatologie",
                  "hyperkeratóza",
                  "parakeratóza",
                  "akantóza",
                  "spongióza",
                  "akantolýza"
            ],
            "content": {
                  "definition": "Histopatologie kůže zkoumá změny buněčné architektury a tkáňového uspořádání kůže na mikroskopické úrovni z bioptického vzorku. Správná interpretace histopatologických pojmů je klíčová pro přesné stanovení diagnózy, zejména u zánětlivých a nádorových dermatologických onemocnění.",
                  "etiology": "Změny jsou vyvolány různými stimuly: genetickými poruchami rohovění, imunopatologickými reakcemi (autoimunitní protilátky, buněčná imunita) nebo infekčními patogeny.",
                  "pathogenesis": "Reakce kůže na poškození se manifestuje specifickými histologickými vzorci. Např. chronické dráždění vede k hyperplazii (akantóza a hyperkeratóza), akutní zánět k edému (spongióza, vezikulace).",
                  "macroscopy": "Odběr kožní biopsie se provádí v lokální anestezii. Standardně se vzorek fixuje v 10% pufrovaném formalínu a barví hematoxylin-eozinem (H&E).",
                  "microscopy": "<strong>Základní histopatologické změny v epidermis</strong>:<br>- <strong>Hyperkeratóza</strong>: Ztluštění rohové vrstvy (stratum corneum) bez zachování jader (např. mozoly, ichthyosis).<br>- <strong>Parakeratóza</strong>: Abnormální rohovění, kdy v stratum corneum zůstávají zachována buněčná jádra. Je spojena s urychlenou keratinizací (typicky u <strong>psoriázy</strong>). Granulózní vrstva bývá ztenčená nebo chybí.<br>- <strong>Akantóza</strong>: Rozšíření stratum spinosum epidermis v důsledku zmnožení keratinocytů (časté u chronických dermatóz - psoriáza, ekzém).<br>- <strong>Spongióza</strong>: Mezibuněčný edém (nahromadění tekutiny) v epidermis. Oddaluje keratinocyty od sebe, takže desmosomální spojení jsou napnutá. Může vést ke vzniku spongiotických vezikul (typické pro <strong>akutní ekzémy</strong>).<br>- <strong>Akantolýza</strong>: Ztráta mezibuněčné soudržnosti (rozpad desmosomů) mezi keratinocyty. Buňky se zakulacují a volně plavou v exsudátu, což vede ke vzniku intraepidermálních puchýřů (typické pro <strong>pemphigus</strong>).<br>- <strong>Dyskeratóza</strong>: Předčasná, abnormální keratinizace jednotlivých buněk v hlubších vrstvách epidermis.<br><br><strong>Základní změny v koriu</strong>:<br>- <strong>Papilomatóza</strong>: Prodloužení a zvlnění dermálních papil (časté u bradavic).<br>- <strong>Sklerotizace</strong>: Zmnožení, homogenizace a ztluštění kolagenního vaziva na úkor buněk (typické pro <strong>sklerodermii</strong>).<br>- <strong>Zánětlivý infiltrát</strong>: Přítomnost imunitních buněk (lymfocyty, neutrofily, histiocyty) v dermis (perivaskulární, lichenoidní - pás pásu lymfocytů pod epidermis u lichen planus, granulomatózní).",
                  "clinical": "Znalost těchto změn umožňuje klinicko-patologickou korelaci. Nález akantolýzy potvrzuje diagnózu pemfigu. Spongióza potvrzuje ekzémovou reakci kůže. Parakeratóza s akantózou a papilomatózou je typickou triádou pro lupénku."
            },
            "quiz": [
                  {
                        "question": "Který histopatologický termín označuje mezibuněčný edém (hromadění tekutiny mezi buňkami) v epidermis, který se typicky vyskytuje u akutního ekzému a může vést ke vzniku drobných puchýřků?",
                        "options": [
                              "Akantolýza",
                              "Spongióza",
                              "Akantóza",
                              "Dyskeratóza"
                        ],
                        "correct": 1,
                        "explanation": "Spongióza je typickým znakem ekzémové (spongiotické) dermatitidy. Dochází k prosáknutí tekutiny do mezibuněčných prostor stratum spinosum pokožky, což roztahuje buňky od sebe a dává tkáni houbovitý (spongiózní) vzhled."
                  },
                  {
                        "question": "Jak se v dermatopatologii označuje stav nedokonalého rohovění, při kterém v buňkách rohové vrstvy (stratum corneum) zůstávají patologicky zachována jádra a který provází např. lupénku?",
                        "options": [
                              "Hyperkeratóza",
                              "Parakeratóza",
                              "Akantóza",
                              "Papilomatóza"
                        ],
                        "correct": 1,
                        "explanation": "Parakeratóza je charakterizována přítomností jader v buňkách rohové vrstvy. Je důsledkem zrychleného a nedokonalého vyzrávání keratinocytů (při lupénce trvá obměna kůže místo 28 dní jen 4 dny), což buňkám neumožní včas odbourat jádro."
                  }
            ]
      },
      {
            "id": "derma-8",
            "title": "Zevní léčba v dermatologii",
            "section": "Obecná část",
            "keywords": [
                  "zevní léčba",
                  "externa",
                  "trojúhelník",
                  "vehikulum",
                  "mast",
                  "krém",
                  "pasta",
                  "Jarisch"
            ],
            "content": {
                  "definition": "Zevní (lokální) léčba je základním terapeutickým pilířem v dermatologii. Spočívá v aplikaci léčivých přípravků (extern) přímo na postiženou kůži. Umožňuje dosažení vysoké koncentrace účinné látky v místě léze s minimalizací celkových nežádoucích účinků. Externa se skládají z účinné látky (farmaka), lékového základu (vehikula) a pomocných látek (emulgátory, konzervanty).",
                  "etiology": "Volba lokální terapie se řídí <strong>terapeutickým trojúhelníkem</strong>, který zohledňuje: stadium kožní choroby (akutní, subakutní, chronické), charakter léze (mokvající, suchá, infiltrovaná) a typ lékové formy (vehikula).",
                  "pathogenesis": "Penetrace účinné látky kůží závisí na jejích vlastnostech (lipofílie, velikost molekuly) a stavu kožní bariéry (přes poškozenou rohovou vrstvu pronikají látky mnohem rychleji).",
                  "macroscopy": "Základní pravidlo zní: <strong>Mokré na mokré, suché na suché</strong> (na mokvající léze patří obklady a vysušující formy; na suché, olupující se léze patří masti).<br><br>Lékové formy (vehikula):<br>- <strong>Roztoky (solutiones)</strong>: Vodné nebo alkoholové (tinktury). Používají se k obkladům a vysoušení.<br>- <strong>Zásypy (pudry, pulveres)</strong>: Pevné minerální látky (zinek, talek). Chladí a absorbují vlhkost.<br>- <strong>Tekuté pudry (suspensiones)</strong>: Směs pudru a tekutiny. Chladivé antipruriginózum.<br>- <strong>Masti (unguenta)</strong>: Jednofázové bezvodé lipofilní základy (vaselina, adeps lanae). Promašťují, okludují (zabraňují odparu vody).<br>- <strong>Krémy (cremores)</strong>: Emulze oleje a vody. Krémy <strong>olej ve vodě (O/W)</strong> jsou hydrofilní, chladí, lehce se vstřebávají. Krémy <strong>voda v oleji (W/O)</strong> jsou lipofilní, promašťují a hydratují.<br>- <strong>Pasty (pastae)</strong>: Směs masti a pudru (zpravidla 1:1). Chrání, vysušují, mírně promašťují, nebrání perspiraci.<br>- <strong>Gely (gelata)</strong>: Hydrofilní koloidní systémy. Chladí, nemastí, na sliznice a do vlasů.",
                  "microscopy": "Pomocné látky v externech (např. parabeny, lanolin) mohou v mikroskopickém měřítku působit jako kontaktní alergeny a vyvolat senzibilizaci lymfocytů, což vede k rozvoji kontaktního alergického ekzému.",
                  "clinical": "Hlavní účinné látky v dermatologii:<br>- <strong>Lokální kortikosteroidy</strong>: Silný protizánětlivý a antiproliferační účinek. Indikovány u ekzémů, psoriázy. Rizikem dlouhodobého užívání je atrofie kůže, strie, teleangiektázie, porucha bariéry.<br>- <strong>Keratolytika</strong>: Změkčují a odstraňují hyperkeratózy (kyselina salicylová 5-10%, urea).<br>- <strong>Antimykotika a antibiotika</strong>: K eliminaci patogenů.<br>- <strong>Antiseptika</strong>: Dezinfekce povrchu (např. Jarischův roztok)."
            },
            "quiz": [
                  {
                        "question": "Jak zní základní dermatologické pravidlo pro volbu lékové formy (vehikula) u akutních zánětlivých kožních procesů s mokváním a tvorbou puchýřů?",
                        "options": [
                              "Mastné na suché",
                              "Mokré na mokré (na mokré mokrým)",
                              "Suché na mokré",
                              "Mastné na mokrající"
                        ],
                        "correct": 1,
                        "explanation": "Základní pravidlo dermatologické lokální léčby zní: 'Na mokré mokrým' (mokré na mokré). Akutní mokvající zánět vyžaduje vysušující a chladivé roztoky ve formě obkladů (např. Jarischův roztok). Aplikace masti na mokvající ložisko by vedla k okluzi (zapaření), zhoršení zánětu a riziku bakteriální superinfekce."
                  },
                  {
                        "question": "Která léková forma se skládá z masťového základu a pevné práškové složky (pudru) v poměru přibližně 1:1 (např. zinková pasta) a má vysokou schopnost chránit a vysušovat kůži?",
                        "options": [
                              "Cremor (krém)",
                              "Pasta",
                              "Gelatum (gel)",
                              "Suspensiones (tekutý pudr)"
                        ],
                        "correct": 1,
                        "explanation": "Pasta je polotuhý přípravek obsahující vysoký podíl (obvykle 25-50 %) jemně dispergovaných pevných látek suspendovaných v mastném základu. Díky tomu dobře absorbuje sekrety, vysušuje kůži, ale zároveň ji chrání a promašťuje."
                  }
            ]
      },
      {
            "id": "derma-9",
            "title": "Systémová farmakoterapie v dermatologii",
            "section": "Obecná část",
            "keywords": [
                  "systémová léčba",
                  "retinoidy",
                  "isotretinoin",
                  "kortikoidy",
                  "dapson",
                  "biologická léčba"
            ],
            "content": {
                  "definition": "Systémová (celková) farmakoterapie je indikována u těžkých, generalizovaných nebo na lokální léčbu refrakterních kožních onemocnění (např. těžká psoriáza, těžké formy akné, autoimunitní bulózní dermatitidy). Zahrnuje antibiotika, antihistaminika, retinoidy, kortikosteroidy, klasická imunosupresiva a moderní biologickou léčbu.",
                  "etiology": "Systémové podání léků ovlivňuje organismus celkově. Je nutné pečlivě zvážit indikace, kontraindikace, lékové interakce a provádět pravidelné laboratorní kontroly (krevní obraz, jaterní testy, lipidy, renální funkce).",
                  "pathogenesis": "Mechanismus účinku systémových dermatologických léků:<br>- <strong>Systémové retinoidy (deriváty vit. A)</strong>: Působí přes jaderné receptory (RAR, RXR), regulují genovou expresi, tlumí proliferaci a podporují diferenciaci keratinocytů, snižují produkci mazu a tlumí zánět.<br>- <strong>Kalcineurinové inhibitory (cyklosporin A)</strong>: Blokují transkripci IL-2 v T-lymfocytech, potlačují buněčnou imunitu.<br>- <strong>Biologická léčba</strong>: Cílené monoklonální protilátky blokují klíčové zánětlivé cytokiny (TNF-alpha, IL-17, IL-23 pro psoriázu; IL-4, IL-13 pro atopický ekzém).",
                  "macroscopy": "Léky se podávají perorálně (tablety) nebo parenterálně (injekce, infuze u biologické léčby).",
                  "microscopy": "Isotretinoin vyvolává atrofii mazových žláz na histologické úrovni a normalizuje keratinizaci ve folikulech. Dapson selektivně inhibuje myeloperoxidázu a chemotaxi neutrofilů, což brání jejich hromadění v dermálních papilách.",
                  "clinical": "Klíčové skupiny léků a jejich specifika:<br>1. <strong>Systémová antibiotika</strong>: Doxycyklin/Minocyklin (u akné a rosacey pro antibakteriální i protizánětlivý účinek). Penicilin G (u erysipelu).<br>2. <strong>Antihistaminika</strong>: H1 antagonisté. I. generace (sedativní - Bisulepin, Dithiaden, užívané na noc pro tlumení svědění), II. generace (nesedativní - Cetirizin, Loratadin, desloratadin u kopřivky).<br>3. <strong>Systémové retinoidy</strong>: <strong>Isotretinoin</strong> (u těžkého akné), <strong>Acitretin</strong> (u psoriázy). <strong>POZOR! Jsou vysoce teratogenní!</strong> U žen ve fertilním věku je nutná přísná antikoncepce během léčby a po ní (u acitretinu až 3 roky!). Nežádoucí účinky: suchost sliznic (cheilitida), elevace transamináz a lipidů.<br>4. <strong>Systémové kortikosteroidy (Prednison, Methylprednisolon)</strong>: První volba u pemfigu, těžkých lékových exantémů. NÚ: osteoporóza, hypertenze, imunosuprese, diabetes.<br>5. <strong>Dapson (sulfon)</strong>: První volba u <strong>dermatitis herpetiformis Duhring</strong>. Riziko NÚ: hemolytická anémie, methemoglobinemie."
            },
            "quiz": [
                  {
                        "question": "Který z následujících celkově podávaných retinoidů je zlatým standardem pro léčbu těžkých forem akné (acne conglobata), ale vykazuje extrémní teratogenitu vyžadující přísný program prevence početí u žen?",
                        "options": [
                              "Acitretin",
                              "Isotretinoin",
                              "Dapson",
                              "Methotrexát"
                        ],
                        "correct": 1,
                        "explanation": "Isotretinoin je systémový retinoid vysoce účinný u těžkého akné, protože ovlivňuje všechny čtyři patogenetické mechanismy (mazotok, folikulární hyperkeratózu, kolonizaci C. acnes a zánět). Je však silně teratogenní (způsobuje těžké malformace plodu), proto je předepisování ženám vázáno na přísná bezpečnostní opatření (antikoncepce, těhotenské testy)."
                  },
                  {
                        "question": "Které systémové léčivo, inhibující chemotaxi neutrofilních granulocytů, je lékem první volby u pacientů s celiakií asociovanou dermatitis herpetiformis Duhring?",
                        "options": [
                              "Prednison",
                              "Cyklosporin A",
                              "Dapson",
                              "Adalimumab"
                        ],
                        "correct": 2,
                        "explanation": "Dapson (diaminodifenylsulfon) má silný protizánětlivý účinek potlačením chemotaxe a aktivity neutrofilů. Je vysoce specifickým a rychlým lékem pro dermatitis herpetiformis (Duhringovu chorobu), kde svědění a puchýřky mizí často do 24-48 hodin od zahájení léčby."
                  }
            ]
      },
      {
            "id": "derma-10",
            "title": "Fyzikální terapie v dermatologii",
            "section": "Obecná část",
            "keywords": [
                  "fyzikální terapie",
                  "fototerapie",
                  "UVA",
                  "UVB 311nm",
                  "PUVA",
                  "PDT",
                  "kryoterapie",
                  "laser"
            ],
            "content": {
                  "definition": "Fyzikální terapie v dermatologii využívá různé formy fyzikální energie (neionizující a ionizující záření, extrémní chlad, laserové světlo) k dosažení léčebného účinku. Nejvýznamnější metodou je fototerapie (léčba světlem) a kryoterapie (léčba chladem).",
                  "etiology": "Fyzikální noxy vyvolávají v tkáních fotochemické, fototermické nebo destruktivní procesy v závislosti na vlnové délce, energii a typu cílového chromoforu (melanin, hemoglobin, voda).",
                  "pathogenesis": "Biologické mechanismy fototerapie: UV záření indukuje apoptózu T-lymfocytů, snižuje počet Langerhansových buněk v kůži a tlumí produkci prozánětlivých cytokinů, což vede k lokální imunosupresi a regresi zánětlivých infiltrátů.",
                  "macroscopy": "Klinické vyhodnocení reakce na záření (např. určení minimální erytémové dávky - MED u UVB, nebo minimální fototoxické dávky - MPD u PUVA). Kryoterapie se provádí aplikací tekutého dusíku, který způsobuje omrzlinu, puchýř a následné odloučení léze.",
                  "microscopy": "<strong>Metody fyzikální terapie</strong>:<br>- <strong>UVB fototerapie</strong>: Používá záření vlnové délky 280-320 nm. Zlatým standardem je <strong>úzkopásmové UVB (narrowband UVB) o vlnové délce 311 nm</strong>, které vykazuje maximální terapeutický efekt u lupénky a ekzémů s minimem erytemogenních účinků.<br>- <strong>UVA fototerapie</strong>: Vlnová délka 320-400 nm, proniká hlouběji do dermis. Používá se jako <strong>UVA1</strong> (340-400 nm) u atopického ekzému a lokalizované sklerodermie.<br>- <strong>PUVA (fotochemoterapie)</strong>: Kombinovaná metoda. Pacient užije perorálně nebo lokálně fotosenzibilizátor ze skupiny <strong>psoralenů</strong> (P) a následně je kůže ozářena <strong>UVA</strong> zářením. Vysoce účinné u těžké psoriázy.<br>- <strong>Fotodynamická terapie (PDT)</strong>: Na lézi se aplikuje kyselina 5-aminolevulová (ALA), která se v patologických buňkách mění na protoporfyrin IX (chromofor). Ozářením červeným světlem vzniká singletový kyslík (ROS), který buňku zničí (indikace: aktinické keratózy, povrchové bazaliomy).<br>- <strong>Kryoterapie</strong>: Lokální destrukce tkáně tekutým dusíkem (-196 °C) u veruk, seboroických keratóz.<br>- <strong>Lasery</strong>: Cévní (absorpce v hemoglobinu - teleangiektázie, hemangiomy), depilační (melanin), ablační CO2 laser (odpaření tkáně - destrukce benigních lézí).",
                  "clinical": "Hlavní indikace fototerapie: psoriáza, atopická dermatitida, vitiligo, parapsoriáza. Kontraindikace: kožní nádory, fotocitlivost (lupus), xeroderma pigmentosum. Nežádoucí účinky: akutní spálení, zvýšené riziko stárnutí kůže (photoageing) a kožních nádorů při dlouhodobé expozici."
            },
            "quiz": [
                  {
                        "question": "Která konkrétní vlnová délka ultrafialového záření, označovaná jako úzkopásmové UVB (narrowband UVB), se v moderní dermatologii nejčastěji používá pro léčbu lupénky (psoriázy) díky optimálnímu poměru účinnosti a bezpečnosti?",
                        "options": [
                              "308 nm",
                              "311 nm",
                              "320 nm",
                              "365 nm"
                        ],
                        "correct": 1,
                        "explanation": "Narrowband UVB 311 nm je považována za nejúčinnější vlnovou délku pro terapii lupénky. Má silný imunosupresivní účinek na buňky v kůži, ale zároveň minimálně poškozuje DNA ve srovnání s širokospektrým UVB, což snižuje riziko erytému a karcinogeneze."
                  },
                  {
                        "question": "Při které terapeutické metodě se na kožní lézi (např. aktinickou keratózu) nanesou psoraleny nebo kyselina 5-aminolevulová a následně se ložisko ozáří světlem za účelem vyvolání selektivní fotochemické destrukce?",
                        "options": [
                              "Fotodynamická terapie (PDT)",
                              "Ablační CO2 laser",
                              "Kryoterapie tekutým dusíkem",
                              "Radioterapie"
                        ],
                        "correct": 0,
                        "explanation": "Fotodynamická terapie (PDT) je neinvazivní metoda léčby časných stadií kožních nádorů a prekanceróz. Využívá interakce fotosenzibilizátoru (ALA), kyslíku a světla o vhodné vlnové délce (nejčastěji červené světlo) k navození selektivní nekrózy a apoptózy nádorových buněk."
                  }
            ]
      },
      {
            "id": "derma-11",
            "title": "Chirurgická terapie",
            "section": "Obecná část",
            "keywords": [
                  "chirurgie",
                  "anestezie",
                  "adrenalin",
                  "excize",
                  "biopsie",
                  "exkochleace",
                  "chemický peeling"
            ],
            "content": {
                  "definition": "Chirurgická terapie (dermatochirurgie) představuje samostatnou disciplínu v dermatologii. Zahrnuje diagnostické a terapeutické invazivní výkony na kůži prováděné nejčastěji v ambulantních podmínkách. Podléhá přísným pravidlům <strong>asepse</strong> (prevence kontaminace) a <strong>antisepse</strong> (zneškodnění mikrobů na kůži).",
                  "etiology": "Hlavní indikací jsou maligní kožní nádory (bazaliom, spinocelulární karcinom, melanom), u kterých je radikální chirurgické odstranění metodou první volby, dále pak benigní léze (fibromy, cysty, névy) a korektivní dermatologické výkony.",
                  "pathogenesis": "Proces hojení ran vyžaduje správné provedení řezu. Chirurgen se snaží vést řezy rovnoběžně s <strong>Langerhansovými liniemi štěpnosti kůže</strong>, což minimalizuje napětí v ráně, urychluje hojení a vede ke kosmeticky optimální, tenké jizvě.",
                  "macroscopy": "Základní dermatochirurgické výkony:<br>- <strong>Prostá excize</strong>: Vyříznutí ložiska skalpelem vřetenovitým řezem s bezpečnostním lemem zdravé kůže (u maligních tumorů až 1-2 cm).<br>- <strong>Průbojníková biopsie (punch biopsy)</strong>: Odběr válcovitého vzorku kůže speciálním kruhovým průbojníkem (průměr 3-4 mm) pro diagnostické účely.<br>- <strong>Shave excize (snesení rotačním nožem)</strong>: Povrchové odříznutí exofytické léze v úrovni kůže.<br>- <strong>Incize</strong>: Chirurgické protnutí stěny dutiny (např. abscesu) k evakuaci hnisu.<br>- <strong>Exkochleace</strong>: Mechanické vyškrabání ložiska ostrou lžičkou (veruky, moluska).<br>- <strong>Ablace nehtu</strong>: Odstranění nehtové ploténky (u zarůstajících nehtů či těžkých paronychií).<br>- <strong>Korektivní chirurgie</strong>: Chemický peeling, sklerotizace venektázií.",
                  "microscopy": "Excudovaný vzorek se odesílá na histologii k posouzení radikality výkonu. Cílem je dosáhnout stavu <strong>R0 resekce</strong> (všechny resekční okraje a spodina jsou bez přítomnosti nádorových struktur).<br><br>Lokální anestezie v dermatochirurgii:<br>- Používají se lokální anestetika amidového typu (Mesocain, Lidocain).<br>- K anestetiku se často přidává <strong>adrenalin</strong> (v poměru 1:100 000 až 1:200 000). Adrenalin jako vazokonstriktor snižuje krvácení v operačním poli, zpomaluje vstřebávání anestetika (prodlužuje účinek a snižuje systémovou toxicitu).<br>- <strong>POZOR! Adrenalin je přísně kontraindikován pro infiltraci na akrálních částech těla (prsty rukou a nohou, špička nosu, ušní lalůčky, penis) pro riziko spazmu cév a následné ischemické nekrózy!</strong>",
                  "clinical": "Před výkonem je nutné zjistit alergii na anestetika a medikaci pacienta (užívání antikoagulancií jako Warfarin či antiagregancií jako kyselina acetylsalicylová zvyšuje riziko krvácení a hematomů v ráně)."
            },
            "quiz": [
                  {
                        "question": "Proč je v lokální anestezii v dermatochirurgii přísně zakázáno přidávat adrenalin (vazokonstriktor) k anestetiku při operacích na prstech, nosu či ušních lalůčcích?",
                        "options": [
                              "Hrozí anafylaktický šok na adrenalin",
                              "Vyvolá těžkou systémovou hypertenzi",
                              "Hrozí spazmus cév s následnou ischemií a nekrózou akrálních částí",
                              "Adrenalin neutralizuje lokální anestetikum a tlumí jeho účinek"
                        ],
                        "correct": 2,
                        "explanation": "Adrenalin způsobuje silnou vazokonstrikci (zúžení cév). Akrální části (prsty, nos, uši, penis) jsou zásobeny terminálními cévami bez dostatečného kolaterálního oběhu. Dlouhodobý spazmus cév po injekci adrenalinu zde může vést k úplnému zastavení přívodu kyslíku a vzniku ischemické nekrózy (gangrény) prstů či jiných akrálních struktur."
                  },
                  {
                        "question": "Jak se nazývá diagnostický nebo léčebný výkon, při kterém se kruhovým ostrým nástrojem (průbojníkem) odebírá válcovitý vzorek kůže o průměru 3–4 mm procházející všemi vrstvami kůže?",
                        "options": [
                              "Exkochleace",
                              "Punch biopsie (průbojníková biopsie)",
                              "Shave excize",
                              "Ablace"
                        ],
                        "correct": 1,
                        "explanation": "Průbojníková neboli punch biopsie je rychlá a šetrná metoda odběru kůže. Umožňuje získat kompletní tloušťku epidermis i dermis (případně i podkožního tuku), což poskytuje patologovi dostatečný materiál pro zhodnocení architektury léze (např. u zánětlivých dermatóz)."
                  }
            ]
      },
      {
            "id": "derma-12",
            "title": "Receptář (základní recepty)",
            "section": "Obecná část",
            "keywords": [
                  "recept",
                  "magistraliter",
                  "Jarisch",
                  "zinková pasta",
                  "salicylová mast",
                  "tekutý pudr",
                  "preskripce"
            ],
            "content": {
                  "definition": "Dermatologický receptář obsahuje základní magistraliter přípravky (léky připravované lékárníkem přímo v lékárně na základě lékařského předpisu). Znalost preskripce a indikací těchto základních roztoků, past, mastí a tekutých pudrů je nezbytnou součástí dermatologické praxe. Umožňuje individuální úpravu koncentrací a kombinací účinných látek bez nutnosti spoléhat se pouze na průmyslově vyráběné léky.",
                  "etiology": "Preskripce vyžaduje správné latinské názvosloví surovin, stanovení jejich přesného množství v gramech a instrukce pro lékárníka v sekci <strong>subscriptio</strong> (např. <i>Misce fiat...</i> - Smíchej, aby vznikl...).",
                  "pathogenesis": "Magistraliter přípravky působí na kůži fyzikálně-chemicky. Např. Jarischův roztok působí chladivě odpařováním vody, zinková pasta absorbuje vlhkost a vytváří ochrannou bariéru, salicylová mast uvolňuje mezibuněčná spojení v rohové vrstvě.",
                  "macroscopy": "Přípravky mají charakteristický vzhled: zinková pasta je bílá, tuhá hmota; Jarischův roztok je čirá kapalina; salicylová mast je poloprůhledná mastná vazelína; tekutý pudr je mléčně bílá suspenze, kterou je nutno před použitím protřepat.",
                  "microscopy": "Fyzikální disperzní systémy:<br>- <strong>Roztoky (solutiones)</strong>: Molekulární disperze (účinná látka je zcela rozpuštěna).<br>- <strong>Masti (unguenta)</strong>: Lipofilní báze tvořící okluzivní vrstvu.<br>- <strong>Pasty (pastae)</strong>: Koncentrovaná suspenze (pevné částice zinku a mastku rozptýlené v masti).<br>- <strong>Suspenze (suspensiones)</strong>: Tekuté pudry (pevné částice suspendované v tekutém mediu s glycerolem).",
                  "clinical": "Klíčové magistraliter recepty a jejich indikace:<br><br>1. <strong>Jarischův roztok (Solutio Jarisch)</strong>:<br><i>Preskripce:</i><br><code>Rp.<br>Acidi borici  20.0<br>Glyceroli 85%  40.0<br>Aqua purificatae  ad 1000.0<br>M. f. solutio. Ad vitrum collo amplo.</code><br><i>Indikace:</i> zklidňující, protizánětlivý a mírně antiseptický obklad na akutní mokvající záněty (ekzémy, dermatitidy). Nevhodný pro děti do 3 let a na velké plochy pro riziko resorpce a toxicity kyseliny borité!<br><br>2. <strong>Zinková pasta (Pasta zinci oxydati)</strong>:<br><i>Preskripce:</i><br><code>Rp.<br>Zinci oxydati<br>Amyli tritici  aa 25.0<br>Vaselini flavi  ad 100.0<br>M. f. pasta.</code><br><i>Indikace:</i> ochranná, zklidňující a krycí pasta na opruzeniny, intertrigo a subakutní ekzémy. Působí protizánětlivě a vysušuje.<br><br>3. <strong>Salicylová mast 5% (Unguentum acidi salicylici 5%)</strong>:<br><i>Preskripce:</i><br><code>Rp.<br>Acidi salicylici  5.0<br>Vaselini albi  ad 100.0<br>M. f. unguentum.</code><br><i>Indikace:</i> <strong>keratolytický účinek</strong> (v koncentracích 5-10 % změkčuje a odstraňuje nánosy šupin u lupénky nebo hyperkeratotického ekzému). V nízkých koncentracích (1-2 %) působí naopak keratoplasticky (podporuje tvorbu rohoviny).<br><br>4. <strong>Zinkový tekutý pudr (Suspensio zinci oxydati)</strong>:<br><i>Preskripce:</i><br><code>Rp.<br>Zinci oxydati<br>Talci  aa 15.0<br>Glyceroli 85%  10.0<br>Aqua purificatae  ad 100.0<br>M. f. suspensio.</code><br><i>Indikace:</i> akutní svědivé záněty, kopřivka, plané neštovice. Působí antipruriginózně (proti svědění), chladí a vysušuje."
            },
            "quiz": [
                  {
                        "question": "Jaká je latinská zkratka a význam preskripční formule na lékařském receptu, která dává lékárníkovi pokyn k namíchání a přípravě požadované lékové formy (např. masti nebo roztoku)?",
                        "options": [
                              "D. t. d. (Detur tales doses) - Dej takové dávky",
                              "M. f. (Misce fiat) - Smíchej, aby vznikl(a)",
                              "D. s. (Da signa) - Vydej a označ",
                              "Ad vitr. (Ad vitrum) - Do lahvičky"
                        ],
                        "correct": 1,
                        "explanation": "Zkratka 'M. f.' (Misce fiat) znamená 'Smíchej, aby vznikl' (např. 'M. f. unguentum' - smíchej, aby vznikla mast; 'M. f. solutio' - smíchej, aby vznikl roztok). Je to standardní součást části receptu zvané Subscriptio."
                  },
                  {
                        "question": "Předepisujete zklidňující obkladový roztok na mokvající ekzém pro 25letého pacienta, známý jako Jarischův roztok. Které chemické látky tvoří jeho základ?",
                        "options": [
                              "Kyselina salicylová, ethanol a olivový olej",
                              "Oxid zinečnatý, pšeničný škrob a žlutá vazelína",
                              "Kyselina boritá, glycerol a čištěná voda",
                              "Fuchsine, resorcinol a fenol"
                        ],
                        "correct": 2,
                        "explanation": "Jarischův roztok (Solutio Jarisch) obsahuje kyselinu boritou (acidum boricum) jako slabé antiseptikum, glycerol k hydrataci kůže a čištěnou vodu (aqua purificata). Kvůli obsahu kyseliny borité je toxický při vstřebání velkými plochami kůže, zejména u kojenců a malých dětí (u dětí do 3 let je kontraindikován)."
                  }
            ]
      },
      {
            "id": "derma-13",
            "title": "Dermatózy vyvolané mechanickými, tepelnými a chemickými vlivy",
            "section": "Speciální dermatologie (Specka)",
            "keywords": [
                  "tlakový puchýř",
                  "mozol",
                  "kuří oko",
                  "dekubitus",
                  "intertrigo",
                  "omrzliny",
                  "popáleniny",
                  "poleptání",
                  "radiodermatitida"
            ],
            "content": {
                  "definition": "Tato skupina zahrnuje kožní patologie způsobené působením vnějších fyzikálních a chemických nox. Patří sem mechanické vlivy (tlakový puchýř, mozol - tyloma, kuří oko - clavus, proleženina - dekubitus, opruzení - intertrigo, tetováž), tepelné a chladové vlivy (popáleniny, omrzliny, oznobeniny, erythema ab igne), chemická poleptání a postradiační poškození (akutní a chronická radiodermatitida).",
                  "etiology": "<strong>Mechanické vlivy</strong>: Krátkodobý intenzivní tlak a tření (puchýř), chronické přetěžování (mozol, kuří oko), dlouhodobá imobilizace a komprese cév (dekubitus) nebo tření v záhybech (intertrigo).<br><strong>Tepelné vlivy</strong>: Nízké teploty pod bodem mrazu (omrzliny) či opakovaný mírný chlad s vlhkem (oznobeniny); vysoké teploty nad 45 °C (popáleniny) a sálavé teplo (erythema ab igne).<br><strong>Chemické vlivy</strong>: Kyseliny a louhy.<br><strong>Ionizující záření</strong>: RTG či radioterapie.",
                  "pathogenesis": "<strong>Dekubitus</strong>: Tlak nad 32 mmHg převyšuje hydrostatický tlak v kapilárách, což vyvolá ischemii, hypoxii a nekrózu podkoží a kůže. <strong>Intertrigo</strong>: Vlhkost, pot a mechanické tření vedou k maceraci rohoviny, narušení bariéry a superinfekci kvasinkami (*Candida*) či bakteriemi. <strong>Poleptání</strong>: Kyseliny vyvolávají <strong>koagulační nekrózu</strong> (srážení bílkovin vytvoří pevný příškvár bránící dalšímu postupu). Louhy vyvolávají <strong>kolikvační nekrózu</strong> (zmýdelnění lipidů a rozpuštění bílkovin, což umožňuje hluboký průnik a závažnější tkáňovou destrukci). <strong>Záření</strong>: Indukuje ionizaci vody, tvorbu ROS, poškození DNA a obliterující endarteritidu cév.",
                  "macroscopy": "<strong>Tlakový puchýř</strong>: Bula na nezánětlivé spodině v místě tlaku. <strong>Mozol (callus)</strong>: Plochá, neostře ohraničená hyperkeratóza. <strong>Kuří oko (clavus)</strong>: Ostře ohraničené ložisko nad kostními vyvýšeninami s centrálním kuželovitým čepem (trnem) směřujícím dovnitř. <strong>Dekubitus</strong>: Lokální erytém, macerace, následně suchá černá nekróza a hluboké vředy. <strong>Omrzlina</strong>: I. zbělení/zarudnutí, II. puchýře, III. nekróza. <strong>Oznobeniny (perniones)</strong>: Červenomodrá vyvýšená svědivá ložiska na prstech a boltcích vyvolaná chladem. <strong>Erythema ab igne</strong>: Síťovitý erytém a hnědá hyperpigmentace ze sálavého tepla. <strong>Radiodermatitis</strong>: Akutní (erytém, deskvamace, radiotoxický vřed) vs. chronická (poikilodermie - atrofie, teleangiektázie, sklerotizace, snadný vznik vředů).",
                  "microscopy": "U mozolu a kuřího oka dominuje extrémní <strong>hyperkeratóza</strong>, akantóza a ztluštělé stratum granulosum. U popálenin II. stupně a mechanických puchýřů nacházíme subepidermální rozštěp. Popáleniny III. stupně a dekubity vykazují totální nekrózu tkáně s vymizením buněčných jader. Chronická radiodermatitida se vyznačuje atrofickou epidermis, vymizením kožních adnex, homogenizací a hyalinizací kolagenu v dermis (sklerotizace), přítomností atypických **radiačních fibroblastů** a ektatickými cévami.",
                  "clinical": "Diagnostika: Anamnéza (práce, imobilizace, ozařování) a klinický obraz. Léčba: Odstranění tlaku (ortopedická obuv, polohování u dekubitů), lokální keratolytika (kyselina salicylová 5-10%, urea). Intertrigo: vysoušení (zinková pasta, Jarischův roztok) a lokální antimykotika. Popáleniny: ochlazení, antiseptika, krytí. <strong>Důležité upozornění</strong>: Erythema ab igne a chronická radiodermatitida jsou prekancerózy s vysokým rizikem vzniku spinocelulárního karcinomu (spinaliomu) a vyžadují dlouhodobé sledování."
            },
            "quiz": [
                  {
                        "question": "Který typ tkáňové nekrózy způsobují louhy při poleptání kůže a jak se liší od poleptání kyselinou?",
                        "options": [
                              "Koagulační nekrózu, která vytváří pevný příškvár a proniká hlouběji než kyselina",
                              "Kolikvační (vlhkou) nekrózu; louhy zmýdelňují lipidy a rozpouštějí bílkoviny, což umožňuje hloubkový průnik a těžší poškození",
                              "Kaseózní nekrózu typickou pro tuberkulózu",
                              "Fibrinoidní nekrózu postihující výhradně dermální cévy"
                        ],
                        "correct": 1,
                        "explanation": "Louhy způsobují kolikvační (vlhkou, zkapalňující) nekrózu. Reagují s tuky (zmýdelnění) a rozpouštějí bílkoviny, což vede k rozbřednutí tkáně a usnadňuje hluboký průnik louhu do podkoží. Kyseliny naproti tomu vyvolávají koagulační (suchou) nekrózu, při níž se bílkoviny srazí a vytvoří pevnou krustu (příškvár), která brání dalšímu pronikání kyseliny."
                  },
                  {
                        "question": "Jak lze klinicky odlišit kuří oko (clavus) od mozolu (callus)?",
                        "options": [
                              "Mozol bolí při chůzi výrazně více než kuří oko a postihuje výhradně nehtové valy",
                              "Kuří oko je ostře ohraničené a obsahuje centrální kuželovitý čep (trn) směřující do hloubky k periostu, což při kolmém tlaku vyvolává ostrou bolest; mozol je plošný, neostře ohraničený a nebolestivý",
                              "Kuří oko pod Woodovou lampou vykazuje korálově červenou fluorescenci",
                              "Kuří oko je vyvoláno virovou infekcí (HPV), zatímco mozol je neinfekční"
                        ],
                        "correct": 1,
                        "explanation": "Kuří oko (clavus) vzniká působením tlaku na kůži proti pevnému podkladu (kosti či kloubu). Vytváří se v něm čep z nahromaděné rohoviny, který směřuje hluboko do koria a tlačí na nervová zakončení a periost, což vyvolává ostrou bolest při chůzi (při kolmém tlaku). Mozol (callus) je plošná, neostře ohraničená hyperkeratóza v místě tření, která obvykle nebolí a slouží jako ochrana kůže."
                  }
            ]
      },
      {
            "id": "derma-14",
            "title": "Změny na kůži vyvolané sluncem",
            "section": "Speciální dermatologie (Specka)",
            "keywords": [
                  "dermatitis solaris",
                  "spálení sluncem",
                  "fotostárnutí",
                  "solární elastóza",
                  "fototypy",
                  "UV záření"
            ],
            "content": {
                  "definition": "Sluneční elektromagnetické záření, zejména jeho ultrafialová složka (UVA a UVB), vyvolává v kůži řadu změn. Ty dělíme na akutní (solární erytém neboli dermatitis solaris, akutní a pozdní pigmentace, syntéza vitaminu D) a pozdní/chronické, které vznikají v důsledku kumulativního celoživotního ozáření (fotostárnutí - photoaging, solární elastóza a fotokancerogeneze).",
                  "etiology": "Ultrafialové záření: <strong>UVB</strong> (280-320 nm; působí na epidermis, poškozuje přímo DNA, hlavní původce spálení) a <strong>UVA</strong> (320-400 nm; proniká hluboko do koria, prochází sklem, indukuje tvorbu ROS a stárnutí kůže). Citlivost kůže závisí na <strong>kožním fototypu (I-VI)</strong>.",
                  "pathogenesis": "UVB záření je přímo absorbováno nukleovými kyselinami v jádrech keratinocytů, což vede k tvorbě fotoproduktů (zejména cyklobutandithymidinových dimerů). Pokud selžou reparační mechanismy, buňka podlehne apoptóze (sunburn cell). Uvolnění prostaglandinů a histaminu vyvolá vazodilataci (erytém). UVA záření generuje reaktivní formy kyslíku (ROS), které poškozují membrány a aktivují matrixové metaloproteinázy (MMP) rozkládající kolagen v dermis. UV záření má také lokální **imunosupresivní účinek** (inhibuje Langerhansovy buňky a stimuluje uvolnění IL-10).",
                  "macroscopy": "<strong>Dermatitis solaris</strong>: Ostře ohraničený bolestivý erytém v místě oslunění, edém, u těžkých stavů puchýře, hojí se lamelózní deskvamací. <strong>Immediate pigment darkening (IPD)</strong>: Okamžitá pigmentace vyvolaná UVA (fotooxidace preexistujícího melaninu, trvá minuty až hodiny). <strong>Pozdní pigmentace</strong>: Vyvolaná UVB po 24-48h (novotvorba melaninu v melanocytech, přetrvává týdny). <strong>Fotostárnutí (photoaging)</strong>: Drsná, suchá kůže, solární lentiga (stařecké skvrny), teleangiektázie, <strong>solární elastóza</strong> (nažloutlá, zhrubělá kůže vzhledu pomerančové kůry), **cutis rhomboidalis nuchae** (hluboké rýhy na šíji) a nodulární elastóza (morbus Favre-Racouchot).",
                  "microscopy": "Akutně: Přítomnost **sunburn cells** (keratinocyty s pyknotickým jádrem a intenzivně eozinofilní cytoplazmou) v epidermis, edém horní dermis a perivaskulární neutrofilní infiltrát. Chronicky: Výrazná **solární elastóza** (nahromadění amorfního, degenerovaného elastického vaziva v horním koriu barvícího se bazofilně/modravě), atrofie epidermis se zploštěním dermoepidermálního spojení a nepravidelné nahloučení hyperaktivních melanocytů.",
                  "clinical": "Diagnostika: Klinický obraz a anamnéza. Kožní fototypy: Fototyp I (keltský typ, vždy se spálí, nikdy nezhnědne) až Fototyp VI (negroidní typ, velmi odolný). Léčba spálení: Studené obklady, panthenol, lokální kortikosteroidy v krému, při těžkém stavu celková nesteroidní antiflogistika. Prevence: Fotoprotekce (oděv, klobouky, sluneční brýle) a důsledná aplikace širokospektrých UV filtrů (chemické a fyzikální filtry s vysokým SPF a UVA faktorem)."
            },
            "quiz": [
                  {
                        "question": "Který histopatologický nález v horním koriu je klíčovým znakem chronického poškození kůže slunečním zářením (photoaging)?",
                        "options": [
                              "Akantolýza desmosomálních spojů",
                              "Solární elastóza (nahromadění degenerovaného elastického vaziva barvícího se bazofilně)",
                              "Ukládání amyloidu kolem potních žláz",
                              "Intraepidermální spongióza s lymfocytárním infiltrátem"
                        ],
                        "correct": 1,
                        "explanation": "Solární elastóza je patognomickým histologickým znakem fotostárnutí (photoaging). Chronické působení UV záření (zejména UVA) indukuje degeneraci elastických a kolagenních vláken v stratum papillare a reticulare dermis. Tato vlákna se mění v amorfní, clumpovitou hmotu, která se při barvení hematoxylin-eozinem barví bazofilně (modravě)."
                  },
                  {
                        "question": "Jaký je rozdíl mezi bezprostřední pigmentací (IPD) a pozdní pigmentací kůže po expozici slunci?",
                        "options": [
                              "IPD je vyvolána UVC zářením a hojí se jizvením, pozdní je vyvolána infračerveným světlem",
                              "IPD je vyvolána UVA zářením, vzniká fotooxidací a redistribucí již přítomného melaninu (trvá krátce); pozdní pigmentace je vyvolána UVB zářením a je spojena s novou syntézou melaninu a jeho transferem (trvá dny až týdny)",
                              "IPD je provázena masivní nekrózou keratinocytů, pozdní pigmentace nikoli",
                              "IPD vzniká výhradně u fototypu I, pozdní pigmentace u všech ostatních"
                        ],
                        "correct": 1,
                        "explanation": "Immediate pigment darkening (IPD) je akutní reakce na UVA záření, při které dochází k oxidaci stávajícího (redukovaného a světlého) melaninu a jeho přesunu do dendritů melanocytů. Tento proces je rychlý (minuty), ale nestálý. Pozdní pigmentace (vyvolaná UVB) nastává po 24-48 hodinách a je způsobena skutečným zvýšením aktivity tyrosinázy, novotvorbou melaninu v melanosomech a jejich přenosem do keratinocytů, což poskytuje dlouhodobou ochranu."
                  }
            ]
      },
      {
            "id": "derma-15",
            "title": "Fotodermatózy",
            "section": "Speciální dermatologie (Specka)",
            "keywords": [
                  "polymorfní světelná erupce",
                  "solární kopřivka",
                  "porfyrie",
                  "xeroderma pigmentosum",
                  "Berloque dermatitida",
                  "fytotoxická reakce"
            ],
            "content": {
                  "definition": "Fotodermatózy jsou patologické kožní reakce vyvolané nebo zhoršené expozicí světelnému záření (převážně UVA a UVB). Dělí se na: 1) **idiopatické/primární** (polymorfní světelná erupce, chronická aktinická dermatitida, solární kopřivka), 2) **sekundární** metabolické či genetické (porfyrie, xeroderma pigmentosum) a 3) **exogenně indukované** - fototoxické a fotoalergické reakce.",
                  "etiology": "UVA a UVB záření. Fotosenzibilizátory: exogenní léky (tetracykliny, sulfonamidy, amiodaron, thiazidová diuretika), rostlinné furokumariny (bolševník, celer, fíky), kosmetika (bergamotový olej v parfémech) nebo endogenní porfyriny.",
                  "pathogenesis": "<strong>Fototoxická reakce</strong>: Neimunologický proces. Světlo aktivuje fotosenzibilizátor absorbovaný v kůži, ten přechází do excitovaného stavu a poškozuje buněčné membrány a DNA tvorbou ROS. Vzniká u každého při dostatečné koncentraci látky a světla. <strong>Fotoalergická reakce</strong>: Imunitní děj (oddálená přecitlivělost IV. typu). UV záření konvertuje látku na hapten, který se váže na kožní proteiny a tvoří kompletní antigen prezentovaný Langerhansovými buňkami. Vzniká pouze u senzibilizovaných osob. <strong>Porphyria cutanea tarda (PCT)</strong>: Defekt uroporfyrinogen-dekarboxylázy vede k akumulaci porfyrinů. Ty po ozáření UVA (Soretovo pásmo 400 nm) fluoreskují a poškozují okolní tkáň. <strong>Xeroderma pigmentosum (XP)</strong>: Autozomálně recesivní defekt enzymů vystřihovací reparace DNA (NER), znemožňující opravu dimerů indukovaných UV.",
                  "macroscopy": "<strong>Polymorfní světelná erupce (PLE)</strong>: Nečastější fotodermatóza (hl. ženy). Svědivé papuly, vezikuly či ložiska v dekoltu na jaře, ke konci léta mizí (fenomén otužení kůže). <strong>Phytophotodermatitis</strong>: Erytém a buly v bizarních, lineárních pruzích (kontakt s rostlinou a sluncem), hojí se výraznou pigmentací. <strong>Berloque dermatitida</strong>: Pruhovité pigmentace na krku po parfému. <strong>Porphyria cutanea tarda</strong>: Zvýšená zranitelnost kůže hřbetů rukou, tvorba subepidermálních puchýřů po drobných traumatech, milia, atrofické jizvy, spánková hypertrichóza. <strong>Xeroderma pigmentosum</strong>: Extrémní suchost kůže, masivní výskyt lentigin u malých dětí, atrofie a časný vznik kožních karcinomů a melanomů (již v dětském věku).",
                  "microscopy": "U PLE: Výrazný edém papilární dermis, perivaskulární lymfocytární infiltrát. U fototoxické reakce: Nekróza jednotlivých keratinocytů (sunburn-like cells) v epidermis. U PCT: **Subepidermální puchýř bez zánětlivé infiltrace**, charakteristický rigidními cévami a čněním dermálních papil do dutiny puchýře (tzv. **festooning**). U XP: Výrazná dysplazie epidermis, solární keratózy a mikroinvazivní karcinomy.",
                  "clinical": "Diagnostika: Lokalizace lézí (vynechání stinných oblastí - pod bradou, za ušima), anamnéza, fototesty (photopatch testy k odlišení fotoalergie a fototoxicity), stanovení porfyrinů v moči a stolici (u PCT), genetika. Léčba: Odstranění fotosenzibilizátoru, přísná fotoprotekce. U PLE: lokální kortikoidy, preventivní PUVA (otužení kůže). U PCT: venepunkce (pouštění žilou k redukci zásob železa) a nízké dávky chlorochinu. U XP: striktní zákaz pobytu na slunci, časné excise tumorů."
            },
            "quiz": [
                  {
                        "question": "Která metabolická fotodermatóza se projevuje křehkostí kůže na hřbetech rukou s tvorbou subepidermálních puchýřů po minimálním mechanickém podráždění, hypertrichózou na spáncích a tmavou močí, a jaká je její příčina?",
                        "options": [
                              "Xeroderma pigmentosum, způsobená defektem opravy DNA",
                              "Porphyria cutanea tarda (PCT), způsobená defektem enzymu uroporfyrinogen-dekarboxylázy v játrech",
                              "Polymorfní světelná erupce, vyvolaná autoimunitou proti melanocytům",
                              "Luční dermatitida, vyvolaná kontaktem s bolševníkem"
                        ],
                        "correct": 1,
                        "explanation": "Porphyria cutanea tarda (PCT) je nejčastější formou porfyrie. Defekt jaterního enzymu vede k hromadění uroporfyrinu, který se ukládá v kůži. Při expozici slunečnímu záření (vlnové délky kolem 400 nm) dochází k fotodynamickému poškození tkání, což se klinicky projevuje extrémní zranitelností kůže, tvorbou puchýřů a jizev na osluněných místech (hřbety rukou) a zvýšeným ochlupením obličeje. Porfyriny vylučované močí způsobují její tmavě červené zbarvení (vzhled portského vína)."
                  },
                  {
                        "question": "Jak se liší patogeneze fototoxické a fotoalergické kožní reakce?",
                        "options": [
                              "Fototoxická reakce je čistě virové povahy, fotoalergická je vyvolána chladem",
                              "Fototoxická reakce je neimunologický děj způsobený přímým poškozením buněk volnými radikály (ROS) u každého člověka při dostatečné dávce; fotoalergická reakce je imunologický děj (IV. typ přecitlivělosti) vyžadující předchozí senzibilizaci a vzniká jen u citlivých jedinců",
                              "Fotoalergická reakce probíhá pouze na sliznicích, fototoxická pouze na nehtech",
                              "U fototoxické reakce chybí expozice UV záření, u fotoalergické je nezbytné UVC záření"
                        ],
                        "correct": 1,
                        "explanation": "Fototoxická reakce nevyžaduje zapojení imunitního systému – je to přímé poškození buněk vyvolané interakcí slunečního záření a fotosenzibilizující látky (např. dehtové preparáty, psoraleny v rostlinách), probíhá u každého člověka a projevuje se jako těžké spálení. Fotoalergická reakce je imunologická reakce oddáleného typu (bujně zprostředkovaná T-lymfocyty), kdy sluneční záření změní strukturu látky na hapten, což vyvolá ekzémovou odpověď pouze u disponovaných a dříve senzibilizovaných osob."
                  }
            ]
      },
      {
            "id": "derma-16",
            "title": "Parazitární kožní onemocnění",
            "section": "Speciální dermatologie (Specka)",
            "keywords": [
                  "scabies",
                  "svrab",
                  "pediculosis",
                  "vši",
                  "cimicosis",
                  "trombidiasis",
                  "larva migrans"
            ],
            "content": {
                  "definition": "Parazitární onemocnění kůže (epizoonózy) jsou vyvolána parazity z řádu členovců (*Arthropoda*) nebo parazitickými červy. Nejčastější a klinicky nejvýznamnější jednotkou je svrab (scabies), dále veš dětská, šatní a muňka (pediculosis), poštípání štěnicemi (cimicosis), blechami (pulicosis), larvami sametek (trombidiasis) a kožní forma syndromu larva migrans.",
                  "etiology": "<strong>Scabies</strong>: *Sarcoptes scabiei var. hominis* (zákožka svrabová). <strong>Pediculosis</strong>: *Pediculus humanus capitis* (veš dětská), *Pediculus humanus corporis* (veš šatní), *Phthirus pubis* (veš muňka - filcka). <strong>Cimicosis</strong>: *Cimex lectularius* (štěnice domácí). <strong>Trombidiasis</strong>: *Neotrombicula autumnalis* (sametka podzimní). <strong>Larva migrans</strong>: Larvy zvířecích měchovců (*Ancylostoma braziliense*).",
                  "pathogenesis": "<strong>Svrab</strong>: Oplodněná samička zákožky vrtá chodbičky v ztluštělé rohové vrstvě epidermis, kde se živí keratinem, klade vajíčka a kálí. Silný pruritus je důsledkem alergické reakce IV. typu na proteiny zákožky a její trus (proto svědění nastupuje u primoinfekce až po 3-6 týdnech). <strong>Pediculosis/Cimicosis</strong>: Hmyz při sání krve vstřikuje do dermis dráždivé sliny s antikoagulačním účinkem, což vyvolá kopřivkovou papulu a intenzivní svědění. <strong>Larva migrans</strong>: Larva zvířecího parazita nedokáže u člověka proniknout bazální membránou a migruje pouze v epidermis (slepý hostitel).",
                  "macroscopy": "<strong>Scabies</strong>: Nitkovité, esovitě zahnuté chodbičky (*ductuli*) s drobnou vezikulou na konci. Predilekce: meziprstní prostory rukou, zápěstí, axily, dvorce prsních bradavek, genitál, podbřišek. Svědění je nejvýraznější v noci v teple lůžka. <strong>Scabies crustosa (norvegica)</strong>: Masivní hyperkeratotické šedavé krusty na těle (u imunosuprimovaných, obsahuje miliony zákožek). <strong>Pediculosis</strong>: Svědivé papuly a exkoriace. Nález **hnid** (vajíček) pevně přilepených na vlasech (veš dětská, muňka) nebo ve švech oblečení (veš šatní). <strong>Cimicosis</strong>: Svědivé papuly s centrálním bodovým zakrvácením, často v řadách nad sebou (lineární distribuce). <strong>Larva migrans</strong>: Nitkovitá, erytematózní, vyvýšená chodbička na končetinách, která se denně prodlužuje o milimetry až centimetry a silně svědí.",
                  "microscopy": "U scabies: V histologickém řezu z rohové vrstvy epidermis lze nalézt příčný průřez tělem zákožky (včetně vajíček a exkrementů - skybal). V dermis je přítomen edém a smíšený infiltrát s vysokým počtem **eozinofilních granulocytů**.",
                  "clinical": "Diagnostika: Anamnéza (svědění celé rodiny, sociální poměry, cestování), klinický obraz, mikroskopický průkaz zákožky (seškrab chodbičky skalpelem). Léčba: **Svrab**: **Permethrin 5% krém** (zlatý standard - jednorázová aplikace na celé tělo od krku dolů na 8-12h, poté omýt) nebo 10-20% sírová mast po dobu 3 dnů. Nutné je přeléčit všechny kontakty a provést dezinsekci lůžkovin. **Pediculosis**: Permethrin, dimetikon (fyzikální udušení vší) a vyčesávání. **Larva migrans**: Celkově albendazol či ivermektin."
            },
            "quiz": [
                  {
                        "question": "Který terapeutický režim je lékem první volby u lidského svrabu (scabies)?",
                        "options": [
                              "Systémová aplikace penicilinu po dobu 10 dnů a studené obklady",
                              "Jednorázová aplikace 5% permethrinového krému na kůži celého těla od krku dolů na dobu 8–12 hodin, s nutností současného přeléčení všech rodinných kontaktů a vypráním textilií na 60 °C",
                              "Aplikace keratolytické 10% salicylové masti na postižená ložiska dvakrát denně",
                              "Časté mytí kůže alkalickým mýdlem a ozařování UVB lampou"
                        ],
                        "correct": 1,
                        "explanation": "Zlatým standardem léčby svrabu je lokální aplikace 5% permethrinu. Nanáší se na celé tělo od krku dolů (u kojenců i na hlavu), zejména do meziprstních prostor a kožních záhybů. Ponechává se působit 8-12 hodin (např. přes noc) a poté se smyje. Zásadní je současná léčba všech osob v těsném kontaktu (i asymptomatických) a hygienická opatření (praní ložního prádla a šatstva na >60 °C, dezinsekce)."
                  },
                  {
                        "question": "Co je charakteristické pro Scabies crustosa (norvegica) a u koho se vyvíjí?",
                        "options": [
                              "Jedná se o mírnou formu svrabu u dětí, která spontánně mizí",
                              "Jedná se o masivní, vysoce nakažlivou formu svrabu s nánosem silných hyperkeratotických krust plných zákožek, která vzniká u imunokompromitovaných osob nebo pacientů s neurologickým postižením (senilita, ochrnutí), u kterých chybí svědění a škrábání",
                              "Je to typické kousnutí vší šatní s vývojem tmavé pigmentace kůže tuláků",
                              "Nitkovitá chodbička na dolní končetině po chůzi na pláži v tropech"
                        ],
                        "correct": 1,
                        "explanation": "Scabies crustosa (norský svrab) vzniká u pacientů s těžce narušenou buněčnou imunitou (HIV, imunosupresiva) nebo u jedinců, kteří se neškrábou (parézy, senilní demence). Jelikož nedochází k mechanickému odstraňování zákožek škrábáním, parazit se masivně přemnoží. Na kůži vznikají silné hyperkeratotické krusty (zejména na rukou, loktech, ploskách), které obsahují miliony zákožek. Tato forma je extrémně nakažlivá."
                  }
            ]
      },
      {
            "id": "derma-17",
            "title": "Dermatofytózy",
            "section": "Speciální dermatologie (Specka)",
            "keywords": [
                  "tinea",
                  "trichophyton",
                  "microsporum",
                  "epidermophyton",
                  "onychomykóza",
                  "kerion Celsi"
            ],
            "content": {
                  "definition": "Dermatofytózy (tiney) jsou povrchové mykotické infekce kůže, nehtů a vlasů vyvolané vláknitými houbami - dermatofyty. Dermatofyty jsou keratofilní organismy (rozkládají a metabolizují keratin). Podle primárního rezervoáru je dělíme na antropofilní (přenos z člověka na člověka), zoofilní (ze zvířat) a geofilní (z půdy).",
                  "etiology": "Houby tří rodů: <strong>Trichophyton</strong> (např. *T. rubrum* - nejčastější původce tinea pedis, *T. mentagrophytes* - zoofilní), <strong>Microsporum</strong> (např. *M. canis* - zoofilní z koček/psů) a <strong>Epidermophyton</strong> (např. *E. floccosum*).",
                  "pathogenesis": "Dermatofyty adherují k povrchu rohovějících buněk a produkují proteolytické enzymy - **keratinázy**, které štěpí keratin a umožňují hyfám invazi do stratum corneum, nehtové ploténky nebo vlasového folikulu. Infekce se šíří radiálně (od středu). Zoofilní a geofilní druhy vyvolávají u člověka intenzivní zánětlivou imunitní reakci. Antropofilní druhy vyvolávají jen mírný zánět, ale mají sklon k chronicitě.",
                  "macroscopy": "Klinické formy podle lokalizace:<br>- **Tinea pedis**: Interdigitální (macerace, ragády v meziprstí), hyperkeratotická (typu mokasíny - šupiny na ploskách) a dyshidrotická (svědivé puchýřky).<br>- **Tinea corporis**: Kruhová, excentricky se šířící ložiska s vyvýšeným, červeným, šupinatým a aktivním okrajem a blednoucím středem.<br>- **Tinea inguinalis**: Červenohnědá ložiska v tříslech s aktivním lemem, typicky u mužů.<br>- **Tinea unguium (onychomycosis)**: Subungvální hyperkeratóza, drolení a žluté zbarvení nehtové ploténky, obvykle od distálního okraje.<br>- **Tinea capitis**: Postižení vlasaté části hlavy. Povrchové (olupování, ulámané vlasy) vs. hluboké (**Kerion Celsi** - silně zánětlivý, bolestivý hrbol s infiltrátem, ze kterého při tlaku vytéká hnis z folikulů).",
                  "microscopy": "Nativní KOH preparát: Šupiny kůže rozpuštěné v 10-20% KOH odhalí pod mikroskopem **septovaná a větvící se hyfová vlákna** (mycelium) a řetízky artrospor. Ve vlasech prokazujeme ektotrix (spory na povrchu vlasu) nebo endotrix (spory uvnitř vlasu) invazi.",
                  "clinical": "Diagnostika: Klinický obraz, nativní mikroskopie s KOH (rychlý průkaz), kultivace na Sabouraudově agaru (trvá 2-4 týdny), Woodova lampa (zelená fluorescence u *Microsporum*). Léčba: **Lokální** (u nekomplikovaných forem): imidazoly (clotrimazol, ketokonazol) nebo allylaminy (terbinafin). **Celková** (u tinea capitis, Kerion Celsi a onychomykózy s postižením >50 % ploténky): celkově terbinafin, itraconazol či fluconazol."
            },
            "quiz": [
                  {
                        "question": "Které mykotické postižení vlasaté části hlavy se projevuje jako bolestivý hnisavý hrbol vyvolaný zoofilními dermatofyty, ze kterého po tlaku vytéká hnis, a hrozí po něm jizvící alopecie?",
                        "options": [
                              "Onychomykóza",
                              "Erythrasma",
                              "Kerion Celsi",
                              "Tinea pedis"
                        ],
                        "correct": 2,
                        "explanation": "Kerion Celsi je hluboká, vysoce zánětlivá forma tinea capitis. Bývá vyvolána zoofilními dermatofyty (např. Trichophyton mentagrophytes). Zánět postihuje vlasové folikuly do hloubky a splývá v bolestivý, hnisající infiltrát. Hrozí zde destrukce vlasových folikulů a hojení jizvou s trvalou ztrátou vlasů (jizvící alopecie). Vyžaduje celkovou léčbu antimykotiky."
                  },
                  {
                        "question": "Jaký je princip a nález u nativního mikroskopického vyšetření kůže na dermatofytózy?",
                        "options": [
                              "Zbarvení vzorku Gramovým barvením k průkazu acidorezistentních tyčinek",
                              "Rozpuštění keratinu v šupinách kůže pomocí 10–20% KOH (hydroxidu draselného) a následné vyhledání septovaných a větvících se hyfových vláken pod mikroskopem",
                              "Osvícení pacienta infračerveným světlem k průkazu cévních pletení",
                              "Vyšetření krve na přítomnost IgE protilátek"
                        ],
                        "correct": 1,
                        "explanation": "Nativní mikroskopický preparát je základní a nejrychlejší metodou průkazu mykóz. Hydroxid draselný (KOH) působí jako keratolytikum - rozpustí rohovinu a buněčný detritus v oškrabu z kůže, čímž se mykotická vlákna (hyfy) obnaží a stanou se pod mikroskopem dobře viditelnými jako větvená a septovaná vlákna."
                  }
            ]
      },
      {
            "id": "derma-18",
            "title": "Kandidózy",
            "section": "Speciální dermatologie (Specka)",
            "keywords": [
                  "candida albicans",
                  "soor",
                  "kvasinky",
                  "moučnivka",
                  "anguli infectiosi",
                  "vulvovaginitida",
                  "intertrigo",
                  "paronychia"
            ],
            "content": {
                  "definition": "Kandidózy jsou oportunní mykotické infekce kůže, sliznic a nehtů vyvolané kvasinkami rodu *Candida* (nejčastěji *Candida albicans*). Jedná se o endogenní infekce, které se u člověka (běžného nosiče kvasinek) manifestují při narušení lokální nebo celkové imunity a rovnováhy mikrobiomu.",
                  "etiology": "Kvasinka *Candida albicans*. Predisponující faktory: Léčba širokospektrými antibiotiky (vyhubení konkurenční flóry), systémové kortikosteroidy, imunosuprese, diabetes mellitus, gravidita, obezita, vlhké a teplé pracovní prostředí (cukráři, uklízečky, myči nádobí).",
                  "pathogenesis": "Při narušení obranyschopnosti přechází *Candida* z nepatogenní kvasinkové formy (blastospory) do patogenní invazivní formy (pseudohyfy a hyfy), která proniká epitelem a poškozuje ho vylučováním proteolytických enzymů. Kvasinkám se daří v teplém, vlhkém a sladkém prostředí (vysoká glykémie u diabetiků podporuje adhezi kvasinek).",
                  "macroscopy": "Klinické projevy:<br>- **Soor (moučnivka)**: Sliznice úst (nebo vaginy) krytá bělavými, tvarohovitými povlaky, které lze setřít, přičemž pod nimi zbývá červená krvácející eroze.<br>- **Anguli infectiosi**: Bolestivé popraskané ústní koutky.<br>- **Candidiasis intertriginosa**: Živě červená, mokvající, ostře ohraničená ložiska v záhybech kůže s typickým **satelitním výsevem** papulek a pustulek na periferii.<br>- **Candidosis vulvovaginalis**: Svědění, pálení sliznice a hrudkovitý výtok.<br>- **Paronychia a onychomykóza**: Zánět nehtového valu (val je zarudlý, oteklý, silně bolestivý, při tlaku vytéká hnis). Nehet je postižen sekundárně od kořene (proximálně), dochází k jeho deformaci, příčnému rýhování a hnědozelenému zbarvení.",
                  "microscopy": "Nativní preparát v KOH: Průkaz oválných **pučících kvasinkových buněk (blastospor)** a podlouhlých vláken tvořených řetízky kvasinek - **pseudohyf** (pseudomycelia) a hyf pronikajících rohovými šupinami.",
                  "clinical": "Diagnostika: Klinický obraz, mikroskopie (KOH nativní preparát), rychlá kultivace na Sabouraudově agaru (kolonie rostou do 48h jako bílé krémové kolonie). Léčba: Lokální antimykotika (clotrimazol, nystatin, ketokonazol v krémech, pastách či vaginálních čípcích). Důležité je ložiska vysušovat (zinková pasta). Celková antimykotika (fluconazol, itraconazol): u těžkých slizničních, chronických či systémových kandidóz."
            },
            "quiz": [
                  {
                        "question": "Jaký klinický nález na periferii ložiska je typický pro kvasinkové opruzení (candidiasis intertriginosa) v kožních záhybech?",
                        "options": [
                              "Kruhový šupinatý lem bez jakýchkoli dalších projevů v okolí",
                              "Satelitní výsev drobných erytematózních papul a pustulek roztroušených kolem hlavního ložiska",
                              "Auspitzovo bodovité krvácení při seškrábání",
                              "Přítomnost černých trombotizovaných kapilár"
                        ],
                        "correct": 1,
                        "explanation": "Kandidóza intertriginózních oblastí se projevuje živě červenou, macerovanou a mokvající plochou. Charakteristickým rysem, který ji pomáhá odlišit od prostého opruzení či ekzému, je přítomnost drobných satelitních papulek a pustul na periferii ložiska. Ty vznikají rupturou drobných puchýřků způsobených kvasinkou."
                  },
                  {
                        "question": "Jak se liší postižení nehtové ploténky u kvasinkové onychomykózy od onychomykózy vyvolané dermatofyty?",
                        "options": [
                              "Kvasinky postihují nehet výhradně od distálního volného okraje nehtu",
                              "Kvasinková onychomykóza začíná bolestivým zánětem nehtového valu (paronychiem) a infikuje ploténku sekundárně od proximální části (báze) nehtu, často s vylučováním hnisu; dermatofytóza postihuje ploténku bez zánětu valu a obvykle od distálního okraje",
                              "Kvasinky nehet nikdy nezbarvují, způsobují pouze jeho ztluštění",
                              "Kvasinky nehet postihují pouze u zdravých sportovců, dermatofyty u diabetiků"
                        ],
                        "correct": 1,
                        "explanation": "Kvasinkové postižení nehtů (onychomycosis candidosa) téměř vždy navazuje na paronychium (chronický či akutní zánět nehtového valu). Val je zarudlý, oteklý a při tlaku bolestivý. Infekce se pak šíří na nehtovou ploténku z proximálního okraje (od nehtového lůžka a matrix). Dermatofytóza naproti tomu nehtový val nepoškozuje a do nehtu proniká nejčastěji pod nehtovou ploténku z distálního či laterálního okraje."
                  }
            ]
      },
      {
            "id": "derma-19",
            "title": "Kožní projevy diabetes mellitus",
            "section": "Speciální dermatologie (Specka)",
            "keywords": [
                  "diabetes mellitus",
                  "pruritus",
                  "syndrom diabetické nohy",
                  "necrobiosis lipoidica",
                  "rubeosis diabetica",
                  "diabetická dermopatie"
            ],
            "content": {
                  "definition": "Diabetes mellitus vyvolává řadu kožních patologií v důsledku metabolických poruch, cévního poškození a neuropatie. Tyto projevy dělíme na: 1) nespecifické spojené s diabetem (pruritus, bakteriální a mykotické infekce), 2) cévně-neurologické (diabetická dermopatie, syndrom diabetické nohy) a 3) specifické asociované choroby (necrobiosis lipoidica).",
                  "etiology": "Hyperglykémie, neenzymatická glykace proteinů (tvorba AGEs), mikroangiopatie (poškození kapilár), makroangiopatie, periferní a autonomní neuropatie (suchost kůže, ztráta citlivosti) a zhoršená imunita (porucha funkce leukocytů).",
                  "pathogenesis": "Neuropatie vede k anhidróze (suchá kůže s trhlinami) a ztrátě ochranné citlivosti na tlak a mikrotraumata. Mikroangiopatie vyvolá tkáňovou ischemii a poruchu hojení ran. Specifická **necrobiosis lipoidica** je charakterizována degenerací kolagenu v dermis spojenou s granulomatózním zánětem, cévním poškozením a ukládáním lipidů.",
                  "macroscopy": "<strong>Pruritus</strong>: Celkové svědění nebo lokalizované (anogenitální, kvasinkové). <strong>Infekce</strong>: Recidivující furunkulóza, erysipel a slizniční kandidóza. <strong>Diabetická dermopatie</strong>: Nečastější projev - atrofické, pigmentované (hnědavé) okrouhlé skvrny na přední ploše bérců. <strong>Necrobiosis lipoidica</strong>: Ostře ohraničená, tuhá, žlutohnědá až červenofialová ložiska na bércích s atrofickým, lesklým středem s teleangiektáziemi, náchylná k ulceraci. <strong>Rubeosis diabetica</strong>: Trvalé červenání obličeje a rukou. <strong>Syndrom diabetické nohy</strong>: Hluboké bezbolestné vředy (malum perforans) v místech tlaku na plosce nohy obklopené lemem hyperkeratózy.",
                  "microscopy": "U *necrobiosis lipoidica*: Histologicky nacházíme ložiska degenerovaného (nekrotického) kolagenu v dermis obklopená granulomatózním zánětem (histiocyty, epiteloidní buňky, vícejaderné obrovské buňky) uspořádaným palisádovitě nebo ve vrstvách. Dále je patrné výrazné ztluštění stěn cév a proliferace endotelu v hluboké dermis.",
                  "clinical": "Diagnostika: Klinický obraz, kontrola glykémie a glykovaného hemoglobinu (HbA1c). Léčba: **Klíčová je kompenzace diabetu**. U pruritu a suchosti: emoliencia. U necrobiosis lipoidica: lokální či intralezionální kortikosteroidy, podpora mikrocirkulace. U syndromu diabetické nohy: odlehčení tlaku (ortopedické pomůcky), debridement hyperkeratóz, vlhké hojení ran, léčba infekce (antibiotika) a důsledná edukace pacienta v péči o nohy."
            },
            "quiz": [
                  {
                        "question": "Která kožní choroba se projevuje tuhými, žlutohnědými, lesklými atrofickými ložisky s teleangiektáziemi na bércích a histologicky granulomatózním zánětem s degenerací kolagenu, a je vysoce specifická pro diabetiky?",
                        "options": [
                              "Diabetická dermopatie",
                              "Necrobiosis lipoidica",
                              "Pyoderma gangraenosum",
                              "Lymfedém"
                        ],
                        "correct": 1,
                        "explanation": "Necrobiosis lipoidica je chronická granulomatózní dermatitida úzce asociovaná s diabetes mellitus (častěji u žen). Typicky se lokalizuje na přední straně bérců. Ložiska mají červenofialový okraj a žlutavý atrofický střed, kde prosvítají cévy. Střed je náchylný ke vzniku špatně se hojících vředů. Histologicky nacházíme nekrobiózu (degeneraci) kolagenních snopců koria a granulomatózní reakci."
                  },
                  {
                        "question": "Jaké jsou hlavní patogenetické faktory podílející se na vzniku syndromu diabetické nohy (vředů na plosce)?",
                        "options": [
                              "Vysoká syntéza elastinu a ukládání tuku v podkoží",
                              "Diabetická neuropatie (ztráta citlivosti na mikrotraumata a anhidróza způsobující suchost a trhliny) kombinovaná s mikro- a makroangiopatií (ischemie a špatné hojení ran) a narušenou imunitou",
                              "Autoimunitní reakce proti keratinu v tlustém typu kůže",
                              "Infekce lidským papilomavirem (HPV-1)"
                        ],
                        "correct": 1,
                        "explanation": "Syndrom diabetické nohy je typickou neuro-ischemickou komplikací. Neuropatie způsobí ztrátu ochranného vnímání bolesti a tlaku, takže pacient přehlíží otlaky a drobná poranění, a zároveň snižuje pocení, což vede k suché kůži s ragádami. Angiopatie (ischemie) pak způsobuje, že se i drobné léze nehojí a přecházejí v hluboké, často infikované vředy."
                  }
            ]
      },
      {
            "id": "derma-20",
            "title": "Kožní projevy endokrinopatií, plicních a KVS onemocnění",
            "section": "Speciální dermatologie (Specka)",
            "keywords": [
                  "pyoderma gangraenosum",
                  "urtikariální vaskulitida",
                  "Raynaudův syndrom",
                  "tyreopatie",
                  "Cushingův syndrom",
                  "paličkové prsty"
            ],
            "content": {
                  "definition": "Kožní změny (dermadromy) mohou být prvním projevem nebo průvodním znakem závažných vnitřních onemocnění. Zahrnují endokrinní změny (tyreopatie, Cushingův a Addisonův syndrom, akromegalie), plicní onemocnění (paličkové prsty, Löfgrenův syndrom u sarkoidózy) a kardiovaskulární/imunopatologické stavy (urtikariální vaskulitida, Pyoderma gangraenosum, Raynaudův syndrom).",
                  "etiology": "Endokrinní dysbalance (nadbytek/nedostatek hormonů štítné žlázy, kortizolu, ACTH), chronická tkáňová hypoxie (u plicních a srdečních chorob), cévní spazmy (Raynaud) a autoimunitní procesy (vaskulitida, pyoderma gangraenosum).",
                  "pathogenesis": "<strong>Cushingův syndrom</strong>: Hyperkortizolemie tlumí proliferaci fibroblastů a syntézu kolagenu, což vede k atrofii kůže a fragility kapilár. <strong>Pyoderma gangraenosum</strong>: Neutrofilní dermatóza s narušenou funkcí a chemotaxí neutrofilů. <strong>Urtikariální vaskulitida</strong>: Imunokomplexy indukovaná vaskulitida malých cév s destrukcí cévní stěny. <strong>Paličkové prsty</strong>: Chronická hypoxie stimuluje uvolnění růstových faktorů (VEGF, PDGF), vyvolávajících hyperplazii vaziva a cév v nehtovém lůžku.",
                  "macroscopy": "<strong>Tyreopatie</strong>: Hypertyreóza (teplá, opocená, jemná kůže, pretibiální myxedém); Hypotyreóza (suchá, drsná, chladná, nažloutlá kůže, prosáklý obličej, difúzní alopecie). <strong>Cushingův syndrom</strong>: Měsíčkovitý obličej, centrální obezita, býčí šíje, atrofie kůže s tvorbou hematomů, lividní (fialové) strie na břiše a steroidní akné. <strong>Addisonova choroba</strong>: Bronzové zbarvení kůže, hyperpigmentace jizev a sliznic (grafitové skvrny). <strong>Pyoderma gangraenosum</strong>: Bolestivý uzel/pustula rychle se rozpadající v hluboký vřed s podminovaným, lividním okrajem a hnisavou spodinou (asociace s IBD). <strong>Urtikariální vaskulitida</strong>: Urtiky přetrvávající na jednom místě **déle než 24 hodin**, spíše pálí/bolí než svědí, hojí se drobnou pigmentací. <strong>Raynaudův syndrom</strong>: Paroxysmální zbělení, zmodrání a zčervenání prstů (triáda bledost-cyanóza-rubor) vyvolané chladem. <strong>Paličkové prsty</strong>: Nehty tvaru hodinového sklíčka s paličkovitým zbytněním prstů.",
                  "microscopy": "U *pyoderma gangraenosum*: Masivní sterilní infiltrace dermis a podkoží **neutrofilními granulocyty** s tkáňovou nekrózou (bez primární vaskulitidy). U *urtikariální vaskulitidy*: Leukocytoklastická vaskulitida - fibrinoidní nekróza stěny cév, extravazace erytrocytů a přítomnost jaderného prachu (**leukocytoklasie**).",
                  "clinical": "Diagnostika: Laboratorní hormony, biopsie kůže u vaskulitid a pg, RTG plic. Léčba: Terapie základního onemocnění. Pyoderma gangraenosum: **systémové kortikosteroidy** či cyklosporin A, opatrné krytí vředu (chirurgický debridement je kontraindikován pro riziko *patergie* - zhoršení vředu traumatem). Urtikariální vaskulitida: antihistaminika, NSAID, kortikoidy. Raynaud: blokátory kalciových kanálků, ochrana před chladem."
            },
            "quiz": [
                  {
                        "question": "Který kožní nález je charakteristický pro urtikariální vaskulitidu a pomáhá ji odlišit od běžné kopřivky (urticaria)?",
                        "options": [
                              "Výskyt drobných jamek na ploskách",
                              "Kopřivkové pupeny přetrvávající na stejném místě déle než 24 hodin, které spíše pálí a bolí než svědí, a hojí se reziduálním nachovým zbarvením (pigmentací)",
                              "Prchavé pupeny, které mizí do několika minut bez jakýchkoli stop",
                              "Výskyt stříbřitých šupin s Auspitzovým fenoménem"
                        ],
                        "correct": 1,
                        "explanation": "Urtikariální vaskulitida se klinicky podobá kopřivce, ale patologicky jde o vaskulitidu malých cév (leukocytoklastickou). Na rozdíl od běžné kopřivky, kde jednotlivé pupeny migrují a mizí do 24 hodin, u urtikariální vaskulitidy přetrvávají na stejném místě déle než 24 hodin, subjektivně spíše pálí a bolí než svědí, a při zhojení zanechávají drobnou pigmentaci (hemosiderin z rozpadlých erytrocytů, které unikly z cév)."
                  },
                  {
                        "question": "Které tvrzení o Pyoderma gangraenosum je pravdivé?",
                        "options": [
                              "Jedná se o infekční bakteriální onemocnění vyvolané Staphylococcus aureus, léčbou jsou výhradně antibiotika",
                              "Jedná se o neinfekční (sterilní) zánětlivé onemocnění patřící mezi neutrofilní dermatózy, je často asociováno s nespecifickými střevními záněty (IBD) a vykazuje jev patergie (nové léze v místě traumatu), proto je chirurgický debridement kontraindikován",
                              "Je to zhoubný nádor z keratinocytů vyžadující okamžitou chirurgickou excizi",
                              "Jedná se o projev omrzlin na akrálních částech těla"
                        ],
                        "correct": 1,
                        "explanation": "Pyoderma gangraenosum je neinfekční neutrofilní dermatóza, charakterizovaná bolestivým vředem s podminovaným lividním okrajem. Často provází vnitřní choroby jako ulcerózní kolitidu či Crohnovu chorobu. Vykazuje fenomén patergie – zhoršení stavu v reakci na trauma (včetně řezání, čištění či chirurgické excise), proto je chirurgické řešení kontraindikováno a základem léčby je celková imunosuprese (např. prednison)."
                  }
            ]
      },
      {
            "id": "derma-21",
            "title": "Pyodermie",
            "section": "Speciální dermatologie (Specka)",
            "keywords": [
                  "impetigo",
                  "ecthyma",
                  "erysipelas",
                  "flegmóna",
                  "furunkl",
                  "karbunkl",
                  "hidradenitis"
            ],
            "content": {
                  "definition": "Pyodermie jsou hnisavé bakteriální infekce kůže vyvolané pyogenními koky. Dělí se na: 1) **povrchové** (impetigo, bulla repens), 2) **hluboké** (ecthyma, erysipelas, flegmóna, nekrotizující fasciitida) a 3) **vázané na vlasové folikuly a adnexa** (ostiofolliculitis, furunkl, karbunkl, hidradenitis suppurativa, paronychia).",
                  "etiology": "Pyogenní bakterie: <strong>Staphylococcus aureus</strong> (produkuje koagulázu, vyvolává ohraničený hnisavý zánět šířící se vertikálně podél adnex) a <strong>Streptococcus pyogenes</strong> (beta-hemolytický streptokok sk. A, produkuje hyaluronidázu a streptokinázu, šíří se difúzně lymfatickými cestami).",
                  "pathogenesis": "Bakterie pronikají kůží přes drobná poranění či narušenou bariéru (např. u ekzému). U impetiga bakteriální exfoliativní toxiny štěpí desmoglein-1 v epidermis, což vede k akantolýze a subkorneálnímu rozštěpu. U erysipelu vyvolají streptokoky v dermis a lymfatických cévách akutní zánět s výrazným edémem a lymfostázou. U furunklu vzniká nekróza a kolikvace celého vlasového folikulu. Hidradenitis suppurativa začíná folikulární okluzí apokrinních žláz s následnou rupturou a chronickým zánětem.",
                  "macroscopy": "<strong>Impetigo</strong>: Drobné puchýřky, které rychle praskají a zasychají v charakteristické **medově žluté krusty** (hlavně na obličeji u dětí). <strong>Ecthyma</strong>: Hluboký vřed na dolní končetině s navalitým okrajem krytý tuhou krustou, hojí se jizvou. <strong>Erysipelas (růže)</strong>: Ostře ohraničený, jazykovitě se šířící sytě červený teplý edém, doprovázený vysokou horečkou, třesavkou a lymfadenitidou. <strong>Flegmóna</strong>: Neohraničený, difúzní hnisavý zánět podkoží. <strong>Nekrotizující fasciitida</strong>: Život ohrožující nekróza podkoží a fascií, kůže tmavne, tvoří se buly, přítomna silná bolest a sepse. <strong>Furunkl</strong>: Bolestivý červený uzel s centrálním nekrotickým čepem. <strong>Karbunkl</strong>: Infiltrát vzniklý splynutím více furunklů. <strong>Hidradenitis suppurativa</strong>: Tuhé, bolestivé abscesy a píštěle v axilách a tříslech.",
                  "microscopy": "U impetiga: **subkorneální puchýř** (těsně pod stratum corneum) vyplněný neutrofily, fibrinem a koky. U erysipel: masivní edém papilární a retikulární dermis s dilatací lymfatických cév, cévní kongesce a perivaskulární infiltrát z neutrofilů. U furunklu: hnisavý zánět celého folikulu a okolí s nekrózou a tvorbou abscesové dutiny.",
                  "clinical": "Diagnostika: Klinický obraz, kultivace s citlivostí. Léčba: Povrchové formy (impetigo): odstranění krust keratolytiky, lokální antibiotika (mupirocin, kyselina fusidová). Erysipelas: **celkový Penicilin G** parenterálně (nebo makrolidy/klindamycin při alergii), studené obklady, klid na lůžku. Flegmóna a nekrotizující fasciitida: urgentní chirurgická revize a debridement + i.v. antibiotika. Furunkly na obličeji: **vždy celková antibiotika** (riziko retrográdního šíření do sinus cavernosus)."
            },
            "quiz": [
                  {
                        "question": "Která hluboká pyodermie se manifestuje ostře ohraničeným, sytě červeným, teplým ložiskem s jazykovitými výběžky, doprovázeným vysokou horečkou a třesavkou, a jaká je léčba první volby?",
                        "options": [
                              "Impetigo, léčbou je lokální aplikace mupirocinu",
                              "Erysipelas (růže), léčbou je celkově podávaný Penicilin",
                              "Flegmóna, léčbou je okamžitá amputace končetiny",
                              "Kerion Celsi, léčbou je celkový griseofulvin"
                        ],
                        "correct": 1,
                        "explanation": "Erysipelas (růže) je akutní streptokoková infekce dermis a lymfatických cév. Typicky se projevuje sytě červeným teplým ložiskem s ostrým ohraničením a jazykovitými výběžky, které se rychle šíří. Infekce se projevuje celkovými příznaky (horečka nad 39 °C, třesavka, zimnice). Lékem první volby je penicilin podávaný celkově (u těžších i.v., u lehčích p.o.)."
                  },
                  {
                        "question": "Proč jsou furunkly lokalizované v oblasti horního rtu a nosu považovány za klinicky velmi nebezpečné?",
                        "options": [
                              "Mohou způsobit trvalou ztrátu vlasů (jizvící alopecii)",
                              "Hrozí retrográdní šíření infekce žilní cestou (přes vena ophthalmica bez chlopní) do lebeční dutiny s rizikem život ohrožující trombózy sinus cavernosus a hnisavé meningitidy",
                              "Způsobují vznik solární elastózy obličeje",
                              "Hojí se medově žlutými krustami ucpávajícími dýchací cesty"
                        ],
                        "correct": 1,
                        "explanation": "Žilní krev z oblasti horního rtu, nosu a okolí očí teče retrográdně přes vena ophthalmica přímo do vnitrolebního splavu (sinus cavernosus). Jelikož tyto žíly nemají chlopně, při tlaku na furunkl nebo při jeho nesprávném ošetření hrozí zanesení infikovaného materiálu do sinus cavernosus, což vyvolá jeho trombózu a hnisavou meningitidu. Proto se furunkly na obličeji léčí vždy celkovými antibiotiky a je přísně zakázáno je vymačkávat."
                  }
            ]
      },
      {
            "id": "derma-22",
            "title": "Infekce vyvolané korynebakteriemi",
            "section": "Speciální dermatologie (Specka)",
            "keywords": [
                  "erythrasma",
                  "trichomycosis axillaris",
                  "keratoma sulcatum",
                  "corynebacterium",
                  "Woodova lampa"
            ],
            "content": {
                  "definition": "Tato skupina zahrnuje povrchové kožní infekce vyvolané bakteriemi z rodu *Corynebacterium*. Postihují zrohovatělé vrstvy epidermis nebo vlasy a daří se jim v teplém a vlhkém prostředí. Patří sem erythrasma, trichomycosis axillaris a keratoma sulcatum (pitted keratolysis).",
                  "etiology": "Grampozitivní tyčinky: *Corynebacterium minutissimum* (erythrasma), *Corynebacterium tenuis* (trichomycosis axillaris) a *Corynebacterium* species (keratoma sulcatum).",
                  "pathogenesis": "Korynebakterie se množí v teplém a macerovaném prostředí. <strong>Erythrasma</strong>: Bakterie osidlují stratum corneum, kde metabolizují proteiny a produkují **koproporfyrin III** (původce červené fluorescence). <strong>Keratoma sulcatum</strong>: Bakterie na ploskách nohou produkují proteolytické enzymy (**proteázy**), které degradují keratin a vyleptávají drobné jamky v ztluštělé rohovině plosky. Rozkladem aminokyselin s obsahem síry vzniká silný zápach (bromhidróza).",
                  "macroscopy": "<strong>Erythrasma</strong>: Ostře ohraničená, hnědavá až červenohnědá, jemně se olupující ložiska v záhybech (třísla, axily, pod prsy), obvykle asymptomatická. <strong>Trichomycosis axillaris</strong>: Tuhé, žlutavé (vzácně červené či černé) povlaky a uzlíky, které pevně obalují vlasový stvol v podpaží nebo ohanbí, pot bývá zbarvený a zapáchá. <strong>Keratoma sulcatum (pitted keratolysis)</strong>: Drobné (1-5 mm) okrouhlé jamky na zatěžovaných částech plosek nohou (paty, bříška prstců), splývající v macerované eroze. Kůže plosek výrazně zapáchá a může pálit při chůzi.",
                  "microscopy": "V seškrabu z rohoviny nebo histologickém preparátu barveném Gramem či PAS nacházíme drobné grampozitivní kokobacily a krátká vlákna (korynebakterie) lokalizované výhradně extracelulárně v keratinocytech stratum corneum.",
                  "clinical": "Diagnostika: Klinický obraz, **Woodova lampa** (erythrasma vykazuje svítivou **korálově červenou fluorescenci**), negativní KOH mikroskopie na plísně. Léčba: Udržování sucha (antiperspiranty s chloridem hlinitým u keratoma sulcatum). Lokální léčba: erythromycin, klindamycin v roztoku nebo lokální imidazoly (clotrimazol). U rozsáhlého erythrasmatu: celkově **erythromycin** perorálně."
            },
            "quiz": [
                  {
                        "question": "Jaká vyšetřovací metoda se používá pro rychlou diagnostiku erythrasmatu a jaký vykazuje nález?",
                        "options": [
                              "Osvícení Woodovou lampou, pod kterou ložisko vykazuje korálově červenou fluorescenci",
                              "Tzanckův test k průkazu multinukleárních obrovských buněk",
                              "KOH preparát k průkazu větvených hyf",
                              "Diaskopie podložním sklíčkem k průkazu purpury"
                        ],
                        "correct": 0,
                        "explanation": "Erythrasma se diagnostikuje pomocí Woodovy lampy (UVA světlo). Corynebacterium minutissimum v ložisku produkuje koproporfyrin III, který po osvícení emituje charakteristické korálově červené světlo. Tímto způsobem lze erythrasma spolehlivě odlišit od dermatofytózy (tinea inguinalis), která pod Woodovou lampou nefluoreskuje (nebo fluoreskuje zeleně u Microsporum)."
                  },
                  {
                        "question": "Co je příčinou vzniku drobných jamek na ploskách nohou u keratoma sulcatum (pitted keratolysis)?",
                        "options": [
                              "Mechanické propíchnutí kůže drobnými kamínky u sportovců",
                              "Enzymatické rozpuštění keratinu (rohoviny plosky) proteázami, které produkují přemnožená korynebakteria v teplém a vlhkém mikroklimatu obuvi",
                              "Autoimunitní útok na hemidesmosomy bazální membrány",
                              "Nekróza kůže po expozici chladu a vlhku"
                        ],
                        "correct": 1,
                        "explanation": "Keratoma sulcatum vzniká přemnožením korynebakterií (a příbuzných rodů) v podmínkách zvýšeného pocení nohou a nošení neprodyšné obuvi. Bakterie produkují proteolytické enzymy (proteázy), které rozpouštějí (natravují) keratin rohové vrstvy plosek, což vede k tvorbě charakteristických jamek a macerací. Produkce sirných sloučenin bakteriemi způsobuje doprovodný zápach (bromhidrózu)."
                  }
            ]
      },
      {
            "id": "derma-23",
            "title": "Paraneoplázie",
            "section": "Speciální dermatologie (Specka)",
            "keywords": [
                  "acanthosis nigricans",
                  "acrokeratosis paraneoplastica",
                  "erythema gyratum repens",
                  "glukagonomový syndrom",
                  "paraneoplastický pemfigus"
            ],
            "content": {
                  "definition": "Kožní paraneoplázie jsou heterogenní skupina dermatóz, které vznikají jako nepřímý důsledek přítomnosti viscerálního (vnitřního) maligního nádoru. Nejsou způsobeny přímým růstem metastáz do kůže, ale biologicky aktivními látkami (cytokiny, růstové faktory, hormony) nebo protilátkami produkovanými nádorem. Rozpoznání paraneoplázií má zásadní význam pro včasnou diagnostiku skrytého nádoru.",
                  "etiology": "Viscerální nádory: Nejčastěji adenokarcinom žaludku a střev, karcinom plic, jícnu, prsu, ledvin, lymfomy a leukémie, nebo alfa-buněčný tumor slinivky (glukagonom).",
                  "pathogenesis": "Nádorové buňky produkují molekuly stimulující kožní receptory: např. **TGF-alpha** a **EGF** stimulují receptory pro epidermální růstový faktor na keratinocytech, což vyvolá hyperplazii kůže (*acanthosis nigricans maligna*). U *paraneoplastického pemfigu* protilátky proti nádoru (plakinům) zkříženě reagují s desmosomy a hemidesmosomy keratinocytů a ničí je. U glukagonomu vyvolá hyperglukagonémie metabolický rozvrat, depleci aminokyselin v kůži a epidermální nekrózu.",
                  "macroscopy": "Specifické paraneoplázie:<br>- **Acanthosis nigricans maligna**: Symetrické, sametové, tmavé (šedočerné) zbytnění kůže v záhybech (krk, axily, třísla) doprovázené papilomatózou sliznic. (Asociace: adenokarcinom žaludku).<br>- **Acrokeratosis paraneoplastica (Bazexův syndrom)**: Fialovočervená hyperkeratotická a šupinatá ložiska na akrech (uši, nos, prsty rukou a nohou) s deformitami nehtů. (Asociace: spinocelulární karcinom plic, jícnu).<br>- **Erythema gyratum repens**: Bizarní, koncentrické červené pruhy lemované šupinami připomínající **letokruhy dřeva**, které se rychle stěhují (až 1 cm/den) a silně svědí. (Asociace: karcinom plic, prsu).<br>- **Necrolytic migratory erythema (glukagonomový syndrom)**: Anulární, mokvající, erythematózní ložiska s povrchovou nekrózou a puchýři v periorální a perigenitální oblasti. (Asociace: alfa-buněčný tumor slinivky).<br>- **Paraneoplastický pemfigus**: Těžký, bolestivý rozpad sliznice dutiny ústní a rty, doprovázený polymorfním výsevem puchýřů na kůži. (Asociace: non-Hodgkinův lymfom, CLL).",
                  "microscopy": "Acanthosis nigricans: Výrazná hyperkeratóza a papilomatóza koria (zmnožení melaninu v bazální vrstvě chybí, tmavá barva je dána tloušťkou rohoviny). Paraneoplastický pemfigus: intraepidermální rozštěp s akantolýzou kombinovaný s nekrózami jednotlivých keratinocytů a lichenoidním lymfocytárním infiltrátem. Necrolytic migratory erythema: nekróza a vakuolizace horních vrstev epidermis.",
                  "clinical": "Diagnostika: Klinický obraz, histologie a **okamžité zahájení onkologického screeningu** (CT, endoskopie, krevní markery). Léčba: **Kauzální léčba je odstranění primárního tumoru** (chirurgická resekce, chemoterapie). Po úspěšném odstranění nádoru kožní projevy obvykle rychle ustupují, jejich návrat signalizuje relaps (recidivu) malignity."
            },
            "quiz": [
                  {
                        "question": "Který kožní projev je charakterizován bizarními červenými pruhy lemovanými šupinami, které se stěhují po těle rychlostí až 1 cm za den a připomínají letokruhy dřeva, a co signalizuje?",
                        "options": [
                              "Acanthosis nigricans maligna, signalizuje diabetes mellitus",
                              "Erythema gyratum repens, signalizuje téměř ve 100 % případů přítomnost vnitřního karcinomu (např. plic či prsu)",
                              "Acrokeratosis paraneoplastica, signalizuje infekci klíštětem",
                              "Erysipelas, signalizuje infekci streptokokem"
                        ],
                        "correct": 1,
                        "explanation": "Erythema gyratum repens je klasický paraneoplastický syndrom s vysokou specificitou. Projevuje se svědivými, koncentrickými červenými pruhy uspořádanými do obrazců připomínajících letokruhy dřeva. Tyto léze se rychle stěhují po trupu. Jejich výskyt téměř vždy znamená přítomnost skryté viscerální malignity (nejčastěji karcinomu plic, prsu či jícnu)."
                  },
                  {
                        "question": "Acanthosis nigricans maligna se projevuje tmavým sametovým zbytněním kůže v záhybech. Která interní malignita je s tímto stavem nejčastěji spojena?",
                        "options": [
                              "Adenokarcinomy gastrointestinálního traktu, zejména adenokarcinom žaludku",
                              "Bazocelulární karcinom kůže",
                              "Osteosarkom dolních končetin",
                              "Prolaktinom hypofýzy"
                        ],
                        "correct": 0,
                        "explanation": "Acanthosis nigricans maligna je typický kožní marker viscerálních malignit. V naprosté většině případů (až 90 %) doprovází adenokarcinomy v břišní dutině, přičemž nejčastějším primárním tumorem je adenokarcinom žaludku. Nádorové buňky vylučují růstové faktory (např. TGF-alfa), které vyvolávají proliferaci keratinocytů v intertriginózních oblastech."
                  }
            ]
      },
      {
            "id": "derma-24",
            "title": "Kožní borelióza",
            "section": "Speciální dermatologie (Specka)",
            "keywords": [
                  "borrelia burgdorferi",
                  "erythema migrans",
                  "boreliový lymfocytom",
                  "acrodermatitis chronica atrophicans",
                  "ixodes ricinus"
            ],
            "content": {
                  "definition": "Kožní borelióza je infekční multisystémové onemocnění vyvolané spirochetami komplexu *Borrelia burgdorferi* sensu lato a přenášené klíšťaty. Rozlišují se tři hlavní stádia kožního postižení: 1) **časné lokalizované** (erythema migrans), 2) **časné diseminované** (boreliový lymfocytom) a 3) **pozdní** (acrodermatitis chronica atrophicans).",
                  "etiology": "Spirocheta *Borrelia burgdorferi* (v Evropě také *Borrelia afzelii* a *Borrelia garinii*). Přenašeč: Klíště obecné (<strong>Ixodes ricinus</strong>).",
                  "pathogenesis": "Spirochety se přenášejí ze slin infikovaného klíštěte do kůže (k přenosu dochází zpravidla po >24h přisátí). V kůži se množí a šíří se radiálně epidermis a dermis, což vyvolává zánětlivou reakci (erythema migrans). Později se šíří hematogenně nebo lymfogenně do dalších orgánů (nervový systém, klouby, srdce). Pozdní stadium *acrodermatitis chronica atrophicans* (ACA) vzniká v důsledku chronického perzistujícího zánětu, který vede k destrukci vaziva a kolagenních vláken koria.",
                  "macroscopy": "<strong>I. Stadium (Časné lokalizované)</strong>: **Erythema migrans** - červená makula/papula v místě kousnutí, která se centrifugálně rozšiřuje, střed bledne (velikost >5 cm, často 10-20 cm), okraj je ohraničený, nebolí a nesvědí. <strong>II. Stadium (Časné diseminované)</strong>: **Boreliový lymfocytom** - tuhý, nebolestivý modročervený uzel (velikost 1-5 cm) na ušním lalůčku (u dětí), na prsní bradavce nebo skrotu. <strong>III. Stadium (Pozdní)</strong>: **Acrodermatitis chronica atrophicans (ACA)** - postihuje extenzorové plochy končetin. Má fázi edematózní (kůže červenofialová, prosáklá) a fázi atrofickou (kůže extrémně ztenčená, zkrabatělá jako **cigaretový papír**, s prosvítajícími cévami, bez ochlupení).",
                  "microscopy": "U erythema migrans: Nespecifický perivaskulární a intersticiální lymfocytární a histiocytární infiltrát v dermis. U lymfocytomu: Masivní B-lymfocytární infiltrát v dermis s tvorbou zárodečných center (pseudolymfom). U ACA: Výrazná atrofie epidermis, atrofie kolagenního a elastického vaziva v dermis a intersticiální infiltrát s vysokým zastoupením **plazmatických buněk**.",
                  "clinical": "Diagnostika: U erythema migrans je obraz typický a **léčba se zahajuje ihned klinicky** (sérologie je v tomto stadiu často falešně negativní). Laboratorní diagnostika (u lymfocytomu a ACA): ELISA (průkaz IgM a IgG), potvrzení metodou Western blot. PCR z kožní biopsie. Léčba: **Antibiotika** - **Doxycyklin** (200 mg/den po dobu 14-21 dní) u dospělých, u dětí a těhotných **Amoxicilin**."
            },
            "quiz": [
                  {
                        "question": "Který kožní projev je charakteristický pro časné lokalizované stadium boreliózy, jaká je jeho minimální velikost pro diagnózu a vyžaduje krevní testy před nasazením antibiotik?",
                        "options": [
                              "Boreliový lymfocytom, 1 cm, vyžaduje ELISA",
                              "Erythema migrans, průměr ložiska větší než 5 cm, diagnóza je čistě klinická (krevní testy nejsou v tomto stadiu doporučeny)",
                              "Acrodermatitis chronica atrophicans, 10 cm, vyžaduje Western blot",
                              "Papilomatóza sliznic, 2 cm, vyžaduje PCR"
                        ],
                        "correct": 1,
                        "explanation": "Erythema migrans (EM) vzniká v místě kousnutí klíštětem za 7-14 dní a šíří se do periferie. K potvrzení diagnózy musí mít průměr alespoň 5 cm (menší reakce do 2-3 cm jsou jen nespecifické reakce na kousnutí). Léčba se zahajuje ihned na základě klinického obrazu. Protilátky v krvi (ELISA) se tvoří až za 4-6 týdnů, proto je sérologické vyšetření v časném stadiu zbytečné a často falešně negativní."
                  },
                  {
                        "question": "Pro které stadium kožní boreliózy je typická kůže vzhledu cigaretového papíru a jaký buněčný typ infiltrátu nacházíme v histologickém řezu?",
                        "options": [
                              "Erythema chronicum migrans, infiltrát z eozinofilů",
                              "Boreliový lymfocytom, infiltrát z obrovských multinukleárních buněk",
                              "Acrodermatitis chronica atrophicans (ACA), infiltrát s vysokým zastoupením plazmatických buněk",
                              "Keratoma sulcatum, infiltrát s korynebakteriemi"
                        ],
                        "correct": 2,
                        "explanation": "Acrodermatitis chronica atrophicans (ACA) je pozdním stadiem (III. stadium) boreliózy, vyvolaným převážně Borrelia afzelii. Dochází k atrofii epidermis a dermálního vaziva, což dává kůži vzhled zkrabatělého 'cigaretového papíru' s prosvítajícími cévami. Histologicky je pro toto stadium vysoce charakteristický infiltrát s hojným zastoupením plazmatických buněk (plazmatocytů) v dermis."
                  }
            ]
      },
      {
            "id": "derma-25",
            "title": "Onemocnění vyvolaná virem Herpes simplex",
            "section": "Speciální dermatologie (Specka)",
            "keywords": [
                  "herpes simplex",
                  "HSV-1",
                  "HSV-2",
                  "gingivostomatitis",
                  "eczema herpeticum",
                  "aciclovir",
                  "akantolýza"
            ],
            "content": {
                  "definition": "Infekce virem Herpes simplex (HSV) vyvolávají charakteristický výsev puchýřků na kůži a sliznicích. Po primoinfekci virus celoživotně latenciuje v senzorických gangliích a při reaktivaci způsobuje recidivující projevy. Mezi klinické formy patří primární gingivostomatitis herpetica, herpes labialis, herpes genitalis a těžký eczema herpeticum.",
                  "etiology": "DNA viry: <strong>HSV-1</strong> (převážně sliznice úst, rty, obličej, přenos slinami) a <strong>HSV-2</strong> (převážně anogenitální oblast, přenos pohlavním stykem). Dnes se hranice stírají.",
                  "pathogenesis": "Virus proniká mikrotraumaty kůže/sliznice, replikuje se v keratinocytech a vyvolá jejich destrukci (lýzu). Následně migruje retrográdně podél axonů senzorických nervů do regionálních ganglií (ganglion trigeminale pro HSV-1, sakrální ganglia pro HSV-2), kde latentně přežívá. Reaktivace (vyvolaná UV zářením, horečkou, stresem, menstruací či imunosupresí) vyvolá anterográdní transport viru zpět do kůže a lokální výsev.",
                  "macroscopy": "<strong>Primoinfekce</strong>: Často asymptomatická. Manifestní forma: **Gingivostomatitis herpetica** (u dětí) - horečka, bolestivé zarudnutí a zduření dásní, výsev drobných puchýřků a erozí v celých ústech, slintání a lymfadenitida. <strong>Recidivující formy</strong>: **Herpes simplex labialis** (opar na rtu) - prodromy (pálení, pnutí), následně výsev herpetiformních (ve skupinkách) uspořádaných drobných puchýřků s čirým obsahem na zarudlé spodině, které se kalí, praskají a tvoří krusty. **Herpes simplex genitalis**: Bolestivé eroze na genitálu. **Eczema herpeticum**: Těžká komplikace u atopiků - náhlý výsev tisíců drobných, v centru **pupekovitě vkleslých puchýřků** na obličeji a trupu, doprovázený horečkami a sepsí.",
                  "microscopy": "Průkaz **intraepidermálního puchýře** vzniklého balonovou degenerací a akantolýzou keratinocytů. Buňky jsou zaoblené, ztrácejí spoje a tvoří se **vícejaderné obrovské buňky** (multinucleated giant cells) s intranukleárními virovými inkluzemi (Cowdryho inkluze typu A).",
                  "clinical": "Diagnostika: Klinický obraz, PCR z tekutiny puchýře (nejcitlivější), Tzanckův test (cytologie ze spodiny puchýře s průkazem vícejaderných buněk). Léčba: Lokální (u oparu rtu): antiseptika, lokální aciclovir krém v prodromálním stadiu. Celková léčba (**Aciclovir**, valaciclovir perorálně): Indikována u primoinfekcí, herpes genitalis a recidivujících forem. U eczema herpeticum je nutná **okamžitá hospitalizace a i.v. podání acicloviru**."
            },
            "quiz": [
                  {
                        "question": "Který cytologický nález ve stěru ze spodiny čerstvého puchýře (tzv. Tzanckův test) potvrzuje infekci herpetickými viry (HSV či VZV)?",
                        "options": [
                              "Grampozitivní řetízky bakterií",
                              "Přítomnost větvených hyf a pseudomycelia",
                              "Vícejaderné obrovské buňky s balonovou degenerací keratinocytů",
                              "Přítomnost zákožky svrabové"
                        ],
                        "correct": 2,
                        "explanation": "Tzanckův test je rychlé cytologické vyšetření. Seškrab ze spodiny čerstvého puchýře se obarví a mikroskopuje. Průkaz vícejaderných obrovských keratinocytů s degenerovanou cytoplazmou (balonová degenerace) potvrzuje, že puchýř je virového (herpetického) původu (HSV nebo VZV). K rozlišení konkrétního viru je však třeba provést PCR."
                  },
                  {
                        "question": "Eczema herpeticum je život ohrožující komplikace HSV. U kterých pacientů typicky vzniká a jak se klinicky projevuje?",
                        "options": [
                              "U starších diabetiků na dolních končetinách jako hluboké vředy",
                              "U dětí a dospělých s atopickým ekzémem (či jiným závažným narušením kožní bariéry); projevuje se náhlým výsevem monomorfních, v centru pupekovitě vkleslých puchýřků na obličeji a trupu, s vysokými horečkami a těžkým celkovým stavem",
                              "U pacientů po radioterapii jako sklerotizace kůže",
                              "U žen v těhotenství jako hyperpigmentace linea alba"
                        ],
                        "correct": 1,
                        "explanation": "Eczema herpeticum (Kaposiho variceliformní erupce) vzniká infekcí HSV u jedinců s chronicky poškozenou kožní bariérou, typicky u atopiků. Projevuje se náhlým výsevem tisíců drobných puchýřků s typickou centrální umbilikací (pupekovitým vtiskem). Vzhledem k riziku diseminace viru do vnitřních orgánů a bakteriální superinfekce (sepse) vyžaduje tento stav urgentní i.v. antivirovou léčbu."
                  }
            ]
      },
      {
            "id": "derma-26",
            "title": "Onemocnění vyvolaná virem Varicela-zoster",
            "section": "Speciální dermatologie (Specka)",
            "keywords": [
                  "varicella",
                  "plané neštovice",
                  "herpes zoster",
                  "pásový opar",
                  "dermatomy",
                  "HZ ophthalmicus",
                  "HZ oticus"
            ],
            "content": {
                  "definition": "Virus Varicela-zoster (VZV) způsobuje dvě odlišná onemocnění: plané neštovice (varicella) jako primoinfekci a pásový opar (herpes zoster) jako následek reaktivace latentního viru. Pásový opar je charakterizován jednostranným bolestivým výsevem podél inervačních segmentů (dermatomů) a rizikem postherpetické neuralgie.",
                  "etiology": "DNA virus **Varicella-zoster virus (VZV)** ze skupiny *Herpesviridae* (HHV-3). Přenos kapénkami nebo přímým kontaktem s tekutinou puchýřků.",
                  "pathogenesis": "<strong>Varicella</strong>: Virus se replikuje v dýchacím traktu, následuje virémie s rozsevem do kůže. Po odeznění neštovic virus migruje senzitivními nervy do ganglií zadních kořenů míšních a ganglií hlavových nervů, kde latentně perzistuje. <strong>Herpes zoster</strong>: Při poklesu specifické buněčné imunity se virus v ganglionu reaktivuje, šíří se anterográdně nervem do příslušného dermatomu, kde vyvolá neuritidu (zánět nervu) a výsev puchýřů v inervační oblasti.",
                  "macroscopy": "<strong>Varicella (plané neštovice)</strong>: Svědivý exantém s centripetálním šířením (postihuje i vlasatou část a sliznice). Vývoj: červená makula -> papula -> vezikula (vzhled kapky rosy s červeným lemem) -> pustula -> krusta. Typická je **evoluční polymorfie** (všechna stadia současně na kůži z důvodu postupných výsevů). <strong>Herpes zoster (pásový opar)</strong>: Unilaterální, segmentální výsev ohraničený na 1-2 sousední dermatomy. Začíná prodromy (intenzivní pálivá bolest v segmentu), po 3-5 dnech výsev herpetiformních skupin puchýřů na erytematózní spodině. Speciální formy:<br>- **HZ ophthalmicus**: Postižení n. ophthalmicus (1. větev trigeminu). Výsev na špičce nosu (**Hutchinsonovo znamení**) predikuje postižení oka (hrozí slepota).<br>- **HZ oticus (Ramsay-Huntův syndrom)**: Postižení n. facialis a n. vestibulocochlearis. Puchýře na boltci a ve zvukovodu, paréza lícního nervu, tinitus, vertigo.",
                  "microscopy": "Intraepidermální puchýř způsobený balonovou degenerací a akantolýzou, přítomnost vícejaderných obrovských buněk s intranukleárními inkluzemi. V postiženém nervu a ganglionu nacházíme nekrózu a intenzivní kulatobuněčný zánětlivý infiltrát.",
                  "clinical": "Diagnostika: Klinický obraz (jednostrannost u zosteru), PCR z tekutiny puchýře. Léčba: **Varicella**: U dětí symptomatická (antihistaminika, tekutý pudr), u dospělých celková antivirotika. **Herpes zoster**: Celková antivirotika (**Aciclovir** 5x 800 mg p.o. po dobu 7 dní) zahájená **do 72 hodin** od výsevu, což zkracuje hojení a výrazně snižuje riziko **postherpetické neuralgie** (chronické neuropathické bolesti). HZ ophthalmicus a oticus vyžadují hospitalizaci a i.v. podání acicloviru."
            },
            "quiz": [
                  {
                        "question": "Co signalizuje Hutchinsonovo znamení u herpes zoster ophthalmicus a jaký je jeho klinický význam?",
                        "options": [
                              "Výskyt černých teček na ploskách, signalizuje bradavici",
                              "Výsev herpetických puchýřků na špičce a křídle nosu; signalizuje postižení nasociliárního nervu a vysoké riziko současného postižení struktur oka (keratitida, uveitida)",
                              "Ukládání amyloidu v nehtovém lůžku",
                              "Zduření dásní s tvorbou aftózních erozí"
                        ],
                        "correct": 1,
                        "explanation": "Hutchinsonovo znamení označuje přítomnost herpetických puchýřků na špičce nebo boku nosu u pacienta s pásovým oparem v oblasti 1. větve trigeminu. Jelikož n. nasociliaris inervuje jak špičku nosu, tak oční bulvu (rohovku), toto znamení signalizuje vysoké riziko poškození oka. Vyžaduje okamžité oční vyšetření a i.v. antivirovou léčbu."
                  },
                  {
                        "question": "Která chronická komplikace pásového oparu je nejčastější u starších pacientů, projevuje se krutou neuropathickou bolestí přetrvávající měsíce po zhojení kůže, a jak se jí předchází?",
                        "options": [
                              "Postherpetická neuralgie (PHN); předchází se včasným nasazením systémových antivirotik (do 72h od výsevu) a očkováním",
                              "Eczema herpeticum; předchází se přísnou dietou bez lepku",
                              "Jizvící alopecie; předchází se nošením sterilních čepic",
                              "Onychomykóza; předchází se stříháním nehtů a desinfekcí"
                        ],
                        "correct": 0,
                        "explanation": "Postherpetická neuralgie (PHN) je nejčastější a nejobávanější komplikací herpes zoster u starších lidí. Je způsobena poškozením senzitivního nervu zánětem. Projevuje se intenzivní pálivou či bodavou bolestí v postiženém segmentu přetrvávající déle než 3 měsíce po zhojení kožních lézí. Prevencí je včasná léčba aciclovirem (do 72 hodin od začátku výsevu) a očkování."
                  }
            ]
      },
      {
            "id": "derma-27",
            "title": "Onemocnění vyvolané pox viry a papilomaviry",
            "section": "Speciální dermatologie (Specka)",
            "keywords": [
                  "molluscum contagiosum",
                  "bradavice",
                  "verrucae",
                  "kondylomata",
                  "HPV",
                  "podofylotoxin",
                  "imiquimod"
            ],
            "content": {
                  "definition": "Tato skupina zahrnuje benigní hyperproliferativní kožní a slizniční léze vyvolané DNA viry. Zahrnují infekce vyvolané poxviry (molluscum contagiosum) a lidskými papilomaviry (HPV - běžné, ploché a plantární bradavice a anogenitální kondylomata). přenášejí se přímým kontaktem, autoinokulací nebo sexuální cestou.",
                  "etiology": "<strong>Molluscum contagiosum</strong>: Poxvirus (molluscum contagiosum virus - MCV). <strong>Bradavice a kondylomata</strong>: Lidské papilomaviry (HPV). Obecné bradavice (*verrucae vulgares*): HPV-1, 2, 4. Ploché bradavice (*verrucae planae*): HPV-3, 10. Plantární bradavice: HPV-1, 2. Akuminátní kondylomata (*condylomata acuminata*): HPV-6, 11 (nízkorizikové typy), ale nutno vyloučit vysokorizikové onkogenní typy HPV-16, 18.",
                  "pathogenesis": "<strong>Poxviry</strong>: MCV se replikuje v cytoplazmě keratinocytů stratum spinosum a tvoří velké cytoplazmatické inkluze (molluscova tělíska), které utlačují jádro. <strong>Papilomaviry</strong>: HPV infikuje bazální buňky epidermis přes drobná traumata. Virus narušuje buněčný cyklus a indukuje hyperproliferaci buněk, což vede k akantóze, papilomatóze a hyperkeratóze. Kondylomata se přenášejí pohlavním stykem a kolonizují vlhké anogenitální sliznice.",
                  "macroscopy": "<strong>Molluscum contagiosum</strong>: Drobné (1-5 mm), voskově lesklé polokulovité papulky tělové barvy s **typickou pupekovitou vkleslinou** (umbilikací) uprostřed, z nichž lze vymačknout bělavou hmotu (časté u dětí atopiků). <strong>Verrucae vulgares</strong>: Tuhé hyperkeratotické papuly s drsným květákovitým povrchem (ruce). <strong>Verrucae plantares</strong>: Bradavice na plosce nohy rostoucí do hloubky, bolestivé při chůzi, na povrchu mají hyperkeratotický lem a po seškrábání odhalí **drobné černé tečky** (trombotizované kapiláry). <strong>Verrucae planae</strong>: Ploché drobné hladké papulky (obličej, ruce dětí). <strong>Condylomata acuminata</strong>: Měkké, růžovobílé papulky až květákovité vegetace v anogenitální oblasti, snadno krvácející.",
                  "microscopy": "U mollusca: **Molluscova tělíska** (velká eozinofilní až bazofilní cytoplazmatická inkluzní tělíska) v keratinocytech stratum spinosum. U bradavic: Výrazná hyperkeratóza, parakeratóza, papilomatóza a přítomnost **koilocytů** (keratinocytů v horních vrstvách epidermis se svraštělým pyknotickým jádrem obklopeným opticky prázdnou cytoplazmatickou zónou).",
                  "clinical": "Diagnostika: Klinický obraz, dermatoskopie. Léčba: **Molluscum**: mechanická exkochleace ostrou lžičkou (u dětí s lokální anestezií EMLA krémem) nebo kryoterapie. **Bradavice**: lokální keratolytika (kyselina salicylová), kryoterapie tekutým dusíkem, shave excize. **Kondylomata**: lokálně **podofylotoxin** nebo **imiquimod** (5% krém stimulující lokální imunitu), kryoterapie, CO2 laser či chirurgická ablace. Prevence kondylomat a karcinomu cervixu: vakcinace proti HPV (Gardasil)."
            },
            "quiz": [
                  {
                        "question": "Který mikroskopický nález je charakteristický pro keratinocyty infikované lidským papilomavirem (HPV) u bradavic a kondylomat?",
                        "options": [
                              "Tzanckovy akantolytické buňky",
                              "Koilocyty (keratinocyty v horní epidermis s pyknotickým jádrem a jasným opticky prázdným dvorem kolem něj)",
                              "Radiační obrovské fibroblasty v koriu",
                              "Molluscova tělíska utlačující jádro"
                        ],
                        "correct": 1,
                        "explanation": "Koilocyty jsou patognomické buňky infikované HPV. Jedná se o keratinocyty, ve kterých virus narušil buněčnou architekturu. Vyznačují se nepravidelným, tmavým (pyknotickým) jádrem obklopeným prázdným (perinukleárním) prostorem v cytoplazmě. Tento jev se označuje jako koilocytóza."
                  },
                  {
                        "question": "Jak lze klinicky odlišit plantární bradavici (verruca plantaris) od kuřího oka (clavus) na plosce nohy?",
                        "options": [
                              "Bradavice bolí výhradně v noci, kuří oko po oslunění",
                              "Bradavice po seškrábání rohového krytu odhalí drobné černé tečky (trombotizované kapiláry) a bolí spíše při stlačení ze stran (boční tlak); kuří oko má hladký zažloutlý střed (čep) a vykazuje ostrou bolest při přímém kolmém tlaku",
                              "Bradavice pod Woodovou lampou svítí korálově červeně, kuří oko modře",
                              "Bradavice postihuje pouze pacienty s neléčeným diabetem"
                        ],
                        "correct": 1,
                        "explanation": "Plantární bradavice (verruca plantaris) lze odlišit od kuřího oka (clavus) dvěma klíčovými testy: 1) po seškrábání rohoviny bradavice krvácí z drobných černých bodů (trombotizovaných cévních kapilár), zatímco kuří oko má homogenní jádro (čep) bez cév; 2) bradavice je citlivější na stisk ze stran (laterální komprese), kdežto kuří oko bolí při přímém kolmém tlaku (došlapu) z důvodu mechanického tlaku čepu na kostní podklad."
                  }
            ]
      },
      {
            "id": "derma-28",
            "title": "Urtikárie a angioedém",
            "section": "Speciální dermatologie (Specka)",
            "keywords": [
                  "urtikárie",
                  "kopřivka",
                  "angioedém",
                  "pomfus",
                  "C1-INH",
                  "histamin",
                  "mastocyt"
            ],
            "content": {
                  "definition": "<strong>Urtikárie (kopřivka)</strong> je onemocnění charakterizované náhlým výsevem svědivých, prchavých pupenů (<strong>pomfů/urtik</strong>), které se hojí ad integrum bez zanechání jizev. <strong>Angioedém (Quinckeho edém)</strong> je akutní, ohraničený, nezánětlivý otok hlubších vrstev škáry a podkoží (případně sliznic), který mizí obvykle do 1 až 3 dnů a může doprovázet urtikárii nebo se vyskytovat samostatně.",
                  "etiology": "Společným patogenetickým mechanismem je aktivace a degranulace <strong>mastocytů</strong> v kůži. Degranulace může být vyvolána imunologicky (reakce I. typu zprostředkovaná <strong>IgE</strong>, aktivace komplementu přes <strong>C3a a C5a</strong> anafylatoxiny, přítomnost autoprotilátek proti IgE či jeho receptoru) nebo neimunologicky (přímé histaminoliberační látky jako morfin, kodein, jódové kontrastní látky, potraviny, hmyzí jedy, neuropeptidy jako substance P, a fyzikální vlivy). U <strong>hereditárního angioedému</strong> je příčinou autozomálně dominantní mutace genu pro <strong>C1-inhibitor (C1-INH)</strong>.",
                  "pathogenesis": "Uvolněním vazoaktivních mediátorů (hlavně <strong>histaminu</strong>, prostaglandinů D2, leukotrienů C4, B4, cytokinů a proteolytických enzymů jako tryptáza) z mastocytů dochází k lokální <strong>vazodilataci</strong> (která podmiňuje vznik erytému) a <strong>zvýšení permeability kapilár</strong> (způsobující edém koria). U angioedému dochází vlivem deficitu C1-INH k nekontrolované aktivaci komplementu s uvolněním <strong>kininových mediátorů</strong> (především <strong>bradykininu</strong>), které zvyšují permeabilitu v hlubší dermis a subkutis.",
                  "macroscopy": "<strong>Urtikárie</strong> se projevuje silně svědivými, edematózními, plochými, ostře ohraničenými elevacemi (<strong>pomfy</strong>), které mají růžovou barvu s periferním erytémem, někdy s centrálním vyblednutím. Trvají minuty až hodiny (vždy mizí do 24 h). Velikost kolísá od mikropapul po mapovité plochy (<em>urticaria geographica</em>). <strong>Angioedém</strong> se manifestuje jako bledý, tuhý otok predilekčně na víčkách, rtech, genitálu či končetinách. Při postižení sliznic dýchacích cest hrozí asfyxie (udušení), u GIT pak průjmy a zvracení.",
                  "microscopy": "Histologický nález u urtikárie je poměrně chudý. Vyskytuje se edém horního a středního koria, dilatace krevních a lymfatických cév a nevýrazný perivaskulární infiltrát tvořený lymfocyty, popřípadně s příměsí eozinofilů. U angioedému je edém lokalizován hluboko v dermis a podkožním vazivu. U pozdní tlakové urtikárie nacházíme v infiltrátu i neutrofily.",
                  "clinical": "Rozlišuje se <strong>akutní urtikárie</strong> (trvání do 6 týdnů, často alergická) a <strong>chronická urtikárie</strong> (recidivy déle než 6 týdnů, často autoimunitní či idiopatická). Zvláštní skupinu tvoří <strong>fyzikální urtikárie</strong>: <em>cholinergní</em> (vyvolaná zvýšením tělesné teploty - symetrické drobné 2-3 mm pomfy s bílým halo), <em>urticaria factitia (dermografismus)</em> (v místo mechanického tření), <em>chladová</em>, <em>solární</em>, <em>tepelná</em> a <em>tlaková</em>. Diagnostika se opírá o anamnézu a provokační testy. V léčbě se podávají <strong>antihistaminika</strong> (zejména nesedativní II. generace, event. v navýšené dávce), u akutních těžkých stavů kortikosteroidy, u anafylaxe <strong>adrenalin i.m.</strong>. Pacientům s angioedémem (zejména s deficitem C1-INH) nesmějí být podávány <strong>ACE inhibitory</strong>."
            },
            "quiz": [
                  {
                        "question": "Která z následujících fyzikálních urtikárií se projevuje výsevem velmi drobných (2-3 mm) pomfů s bledým halo, typicky po fyzické námaze, horké koupeli či emocionálním stresu, a jaký mechanismus se zde uplatňuje?",
                        "options": [
                              "Urticaria factitia (symptomatický dermografismus); uplatňuje se IgE reakce na mechanický tlak",
                              "Urticaria cholinergica; uplatňuje se cholinergní sympatická inervace ekrinních potních žláz při zvýšení tělesné teploty",
                              "Urticaria e frigore (chladová); uplatňuje se uvolnění kryoglobulinů po lokálním ochlazení",
                              "Pozdní tlaková urtikárie; uplatňuje se infiltrace neutrofily po kolmém tlaku"
                        ],
                        "correct": 1,
                        "explanation": "Cholinergní urtikárie vzniká při zvýšení tělesné teploty (námahou, emocemi, teplým jídlem či koupelí). Projevuje se drobnými, silně svědivými pupeny o velikosti 2-3 mm s erytematózním lemem a bledým halo. Je zprostředkována acetylcholinem uvolňovaným ze sympatických vláken inervujících potní žlázy."
                  },
                  {
                        "question": "Proč jsou inhibitory ACE (angiotenzin konvertujícího enzymu) striktně kontraindikovány u pacientů s hereditárním nebo získaným angioedémem spojeným s poruchou C1-inhibitoru?",
                        "options": [
                              "ACE inhibitory přímo blokují syntézu IgE protilátek, což vede k anafylaktické reakci",
                              "ACE inhibitory blokují odbourávání bradykininu, což vede k jeho akumulaci a dramatickému zvýšení vaskulární permeability s rizikem udušení",
                              "Způsobují degranulaci mastocytů prostřednictvím anafylatoxinu C5a",
                              "Vyvolávají precipitaci kryoglobulinů v kapilárách dermis"
                        ],
                        "correct": 1,
                        "explanation": "ACE (angiotenzin konvertující enzym) je totožný s kininázou II, což je enzym zodpovědný za odbourávání bradykininu. Inhibice tohoto enzymu vede k akumulaci bradykininu v tkáních. U pacientů s deficitem C1-INH (kde je tvorba kininových mediátorů již tak zvýšená) to může vyvolat život ohrožující ataky angioedému hrtanu a udušení."
                  }
            ]
      },
      {
            "id": "derma-29",
            "title": "Lékové exantémy",
            "section": "Speciální dermatologie (Specka)",
            "keywords": [
                  "lékový exantém",
                  "erythema multiforme",
                  "SJS",
                  "Lyellův syndrom",
                  "TEN",
                  "fixní exantém"
            ],
            "content": {
                  "definition": "<strong>Lékové exantémy (toxikodermie)</strong> jsou nežádoucí účinky léčiv, které se projevují změnami ve struktuře nebo funkci kůže, sliznic či adnex po systémovém (perorálním či parenterálním) podání léku. Spektrum projevů sahá od mírných makulopapulózních výsevů až po život ohrožující stavy jako <strong>Stevens-Johnsonův syndrom (SJS)</strong> a <strong>toxická epidermální nekrolýza (TEN / Lyellův syndrom)</strong>.",
                  "etiology": "Reakce mohou být imunologické (alergické reakce I. až IV. typu) nebo neimunologické (přímá toxicita, enzymatické defekty, akumulace léku, fototoxické reakce). Nejčastějšími vyvolavateli závažných forem (SJS/TEN) jsou <strong>sulfonamidy</strong>, <strong>allopurinol</strong>, <strong>antikonvulziva</strong> (karbamazepin, fenytoin, fenobarbital), nesteroidní antirevmatika (oxikamy) a aminopeniciliny.",
                  "pathogenesis": "U běžných exantémů jde nejčastěji o <strong>IV. typ alergické reakce</strong> (buněčně zprostředkovaná pozdní přecitlivělost), kdy senzibilizované T-lymfocyty poškozují keratinocyty. U <strong>TEN</strong> je podkladem masivní <strong>apoptóza a nekróza keratinocytů</strong> v celé tloušťce epidermis, zprostředkovaná cytotoxickými T-lymfocyty a NK buňkami prostřednictvím signální dráhy <strong>Fas/Fas-ligand</strong> a uvolněním proteinu <strong>granulysinu</strong> a <strong>TNF-alpha</strong>.",
                  "macroscopy": "Klinické typy:<br>1. <strong>Makulopapulózní exantém</strong>: Nejčastější, symetrický výsev na trupu a končetinách (postihuje embolizační lokalizace), vzniká 7.-10. den léčby.<br>2. <strong>Fixní exantém</strong>: Ostře ohraničené červenofialové ložisko (často s puchýřem), které vzniká na stejném místě (rty, genitál, akra) po každém požití daného léku a hojí se pigmentací.<br>3. <strong>Erythema exsudativum multiforme (EEM)</strong>: Symetrické terčovité léze (iris forma - 3 soustředné kruhy s lividním středem) na akrech. EEM minor (bez celkových příznaků, vyvolán hlavně HSV), EEM major (s postižením sliznic, vyvolán mykoplazmaty či léky).<br>4. <strong>SJS / TEN</strong>: Závažné stavy s horečkou a postižením sliznic (hemoragické krusty na rtech, konjunktivitida). Kůže je bolestivá, tvoří se cárovité odlučování epidermis s pozitivním <strong>Nikolského příznakem</strong>. SJS postihuje < 10 % povrchu těla, překryv SJS/TEN 10-30 %, TEN > 30 % povrchu těla.",
                  "microscopy": "U EEM a SJS/TEN nacházíme <strong>vakuolární degeneraci bazální vrstvy epidermis</strong>, nekrózy jednotlivých keratinocytů (u TEN nekrózu celé epidermis v plné tloušťce) doprovázenou subepidermálním rozštěpem. U TEN je charakteristický minimální nebo zcela chybějící zánětlivý infiltrát v koriu (tzv. 'pusté korium').",
                  "clinical": "Základem diagnostiky je pečlivá léková anamnéza (časová souvislost s nasazením léku, obvykle 1-3 týdny). Diferenciální diagnostika zahrnuje infekční exantémy a autoimunitní puchýřnaté choroby. Léčba spočívá v <strong>okamžitém vysazení podezřelého léku</strong>. U lehkých forem se podávají antihistaminika a lokální kortikosteroidy. Pacienti se SJS/TEN musí být hospitalizováni na <strong>popáleninové jednotce</strong> nebo JIP, kde se provádí intenzivní péče (sterilní krytí, hydratace, prevence sepse). Systémově se podávají <strong>i.v. imunoglobuliny (IVIG)</strong>, které blokují Fas receptor, případně cyklosporin A."
            },
            "quiz": [
                  {
                        "question": "Jak se klinicky odlišuje Stevens-Johnsonův syndrom (SJS) od toxické epidermální nekrolýzy (TEN / Lyellova syndromu) a jaký je typický patogenetický mechanismus poškození buněk?",
                        "options": [
                              "SJS je vyvolán výhradně viry a postihuje kůži bez sliznic, zatímco TEN je vyvolán bakteriemi; patogenezí je tvorba imunokomplexů (III. typ)",
                              "Rozdíl spočívá v rozsahu postižení (odloučení) epidermis: SJS postihuje méně než 10 % povrchu těla, zatímco TEN postihuje více než 30 % povrchu těla; patogenezí je masivní apoptóza keratinocytů vyvolaná granulysinem a dráhou Fas/Fas-ligand",
                              "SJS postihuje pouze dospělé a TEN pouze kojence; patogenezí je toxicita z nahromadění urey",
                              "SJS se hojí hlubokými jizvami, zatímco TEN se hojí ad integrum; patogenezí je akantolýza zprostředkovaná protilátkami proti desmogleinu"
                        ],
                        "correct": 1,
                        "explanation": "SJS a TEN jsou spektrem téže závažné bulózní polékové reakce. Klasifikace je dána procentem povrchu těla s odloučenou epidermis: SJS < 10 %, překryv SJS/TEN 10-30 %, TEN > 30 %. Hlavním patogenetickým mechanismem je cytotoxická reakce zprostředkovaná T-lymfocyty (CD8+) a NK buňkami, které uvolňují granulysin a aktivují Fas/FasL receptor, což vede k rozsáhlé nekróze keratinocytů."
                  },
                  {
                        "question": "Co je charakteristické pro fixní lékový exantém (erytém) z hlediska jeho lokalizace, průběhu a nejčastějších spouštěčů?",
                        "options": [
                              "Vzniká vždy na obličeji po expozici slunci a po vysazení léku se stěhuje na trup",
                              "Projevuje se jako ostře ohraničené oválné červené ložisko, které vzniká do 1-2 dnů na stejném anatomickém místě (často rty, genitál, akra) po každém podání vyvolávajícího léku (např. sulfonamidy, barbituráty) a po zhojení zanechává typickou hyperpigmentaci",
                              "Je charakteristický generalizovaným výsevem drobných pustul spojeným s leukocytózou vyvolaným terbinafinem",
                              "Vzniká výhradně u atopiků a projevuje se suchostí kůže a chyběním zevní třetiny obočí"
                        ],
                        "correct": 1,
                        "explanation": "Fixní lékový exantém je charakteristický tím, že se po požití kauzálního léku (sulfonamidy, NSAID, barbituráty) objeví ohraničené zarudnutí s lividním středem, někdy s puchýřem, na identickém místě kůže či sliznice. Po vysazení léku ložisko ustupuje a zanechává typickou šedošedou či hnědavou postinflamatorní hyperpigmentaci z důvodu inkontinence pigmentu."
                  }
            ]
      },
      {
            "id": "derma-30",
            "title": "Dermatitis contacta irritativa",
            "section": "Speciální dermatologie (Specka)",
            "keywords": [
                  "iritativní dermatitida",
                  "kontaktní dermatitida",
                  "plenková dermatitida",
                  "macerace",
                  "xeróza"
            ],
            "content": {
                  "definition": "<strong>Dermatitis contacta irritativa (toxica)</strong> je neimunologická zánětlivá reakce kůže vyvolaná přímým chemickým nebo fyzikálním poškozením buněk epidermis zevními noxami. Na rozdíl od alergického ekzému nevzniká na podkladě senzibilizace a postihuje každého jedince, pokud je noxa aplikována v dostatečné koncentraci a po dostatečně dlouhou dobu.",
                  "etiology": "Spouštěči jsou <strong>chemické látky</strong> (kyseliny, zásady, organická rozpouštědla, detergentní mýdla, dezinfekce) a <strong>fyzikální vlivy</strong> (tření, chlad, UV záření). Zvláštní formou je <strong>plenková dermatitida</strong> (<em>dermatitis ammoniacalis</em>), kde se uplatňuje dráždění močí a stolicí (amoniakem) ve vlhkém a teplém prostředí pleny.",
                  "pathogenesis": "Iritancia poškozují kožní bariéru (odmašťují kůži, narušují lipidovou vrstvu stratum corneum a poškozují membrány keratinocytů). To vede k usnadnění průniku látek, destrukci keratinocytů a následnému uvolnění preformovaných zánětlivých cytokinů (zejména <strong>IL-1-alpha</strong>, <strong>TNF-alpha</strong>) z poškozených buněk bez účasti specifických T-lymfocytů. Dochází k rozvoji nealergického zánětu.",
                  "macroscopy": "Rozlišujeme dvě formy:<br>1. <strong>Akutní iritativní dermatitida</strong>: Vzniká po jednorázovém působení silné noxy (kyselina, louh, solární expozice). Projevuje se ostře ohraničeným erytémem, edémem, tvorbou puchýřů (vezikul, bul), erozemi až nekrózami. Léze jsou omezeny na místo kontaktu, spíše pálí a bolí, než svědí.<br>2. <strong>Chronická (kumulativní) iritační dermatitida</strong>: Vzniká opakovaným působením slabších iritancií (voda, mýdla - např. u uklízeček, zdravotníků). Kůže rukou je suchá, zhrubělá, olupuje se a tvoří se bolestivé <strong>ragády</strong> (<em>eczema asteatoticum</em> - kůže jako popraskaný porcelán).",
                  "microscopy": "Histologický obraz ukazuje nekrózu keratinocytů v horních vrstvách epidermis, vakuolizaci buněk a intracelulární edém. Rohová vrstva vykazuje známky parakeratózy a hyperkeratózy. V koriu je přítomen mírný edém a nespecifický zánětlivý infiltrát, chybí však výrazná spongióza typická pro alergický ekzém.",
                  "clinical": "Diagnostika je založena na klinickém vzhledu (ostré ohraničení na místo kontaktu u akutní formy), anamnéze expozice noxám a <strong>negativních epikutánních testech</strong> (k vyloučení alergie). V léčbě je absolutním základem <strong>eliminace vyvolávající noxy</strong> a bariérová ochrana (nošení rukavic). K promašťování se používají emoliencia, u akutních projevů Jarischovy obklady a krátkodobě lokální kortikosteroidy (často v kombinaci s antibiotiky při sekundární infekci u plenkové dermatitidy kvasinkami)."
            },
            "quiz": [
                  {
                        "question": "Jak se klinicky a patogeneticky liší dermatitis contacta irritativa (DCI) od eczema contactum allergicum (ECA)?",
                        "options": [
                              "DCI je zprostředkována IV. typem alergické reakce a svědí, ECA vzniká u každého člověka bez účasti imunitního systému a spíše pálí",
                              "DCI vzniká neimunologickým poškozením keratinocytů zevní noxou, postihuje každého při dostatečné expozici a spíše pálí a bolí; ECA je imunologická reakce IV. typu vyžadující předchozí senzibilizaci, postihuje pouze vnímavé jedince a silně svědí",
                              "DCI se projevuje výhradně na sliznicích, zatímco ECA postihuje pouze kůži bérců",
                              "DCI má pozitivní epikutánní testy, zatímco ECA má tyto testy vždy negativní"
                        ],
                        "correct": 1,
                        "explanation": "Iritativní kontaktní dermatitida je neimunologický zánět způsobený přímým toxickým poškozením kůže (postihuje každého, projevy pálí/bolí, jsou ostře ohraničené na místo kontaktu, epikutánní testy jsou negativní). Alergická kontaktní dermatitida je imunologická reakce IV. typu (vyžaduje senzibilizaci, postihuje jen alergiky, silně svědí, šíří se i mimo místo kontaktu, epikutánní testy jsou pozitivní)."
                  },
                  {
                        "question": "Které patofyziologické faktory se nejvíce podílejí na vzniku plenkové dermatitidy (dermatitis ammoniacalis) u kojenců?",
                        "options": [
                              "Autoimunitní reakce proti kolagenu VII vyvolaná nedostatkem vitaminu D",
                              "Macerace kůže v mikroklimatu vlhka pod plenou, dráždění amoniakem uvolněným z moči bakteriální ureázou, poškození kožní bariéry a sekundární kolonizace kvasinkami (<em>Candida albicans</em>)",
                              "Genetická mutace genu pro filaggrin vedoucí k hyperkeratóze",
                              "Systémová alergická reakce I. typu na kravské mléko"
                        ],
                        "correct": 1,
                        "explanation": "Plenková dermatitida je typickým příkladem iritační dermatitidy. Vzniká kombinací vlhké okluze (macerace), tření pleny a chemického dráždění amoniakem, který produkují bakterie štěpící močovinu v moči. Narušená kožní bariéra je následně snadno kolonizována kvasinkami (Candida albicans), což vede k exacerbaci zánětu."
                  }
            ]
      },
      {
            "id": "derma-31",
            "title": "Eczema contactum allergicum",
            "section": "Speciální dermatologie (Specka)",
            "keywords": [
                  "alergický ekzém",
                  "hapten",
                  "Langerhansovy buňky",
                  "epikutánní testy",
                  "nikl",
                  "reakce IV. typu"
            ],
            "content": {
                  "definition": "<strong>Eczema contactum allergicum (alergický kontaktní ekzém)</strong> je zánětlivé, neinfekční kožní onemocnění vyvolané kontaktem kůže s vnějšími alergeny. Vzniká na podkladě specifické imunitní reakce u jedinců, kteří byli na danou látku předem senzibilizováni. Charakteristické je intenzivní svědění a schopnost šířit se mimo původní místo kontaktu.",
                  "etiology": "Vyvolavateli jsou <strong>hapteny</strong> (nízkomolekulární látky, které se stávají plnými antigeny až po vazbě na proteiny kůže). Nejsilnějšími senzibilizátory jsou dinitrochlorbenzen (DNCB) a primin. V běžném životě jsou nejčastějšími alergeny <strong>kovy (nikl, kobalt, chrom)</strong>, <strong>perubalzám</strong>, vonné směsi, <strong>parafenylendiamin (PPD)</strong> v barvách na vlasy, konzervační látky a alkoholy z ovčí vlny (lanolin).",
                  "pathogenesis": "Jde o <strong>oddálený IV. typ přecitlivělosti</strong> zprostředkovaný T-lymfocyty. Má dvě fáze:<br>1. <strong>Senzibilizační fáze</strong>: Hapten proniká kůží, váže se na protein, je pohlcen <strong>Langerhansovými buňkami (LB)</strong>. Ty migrují do regionálních lymfatických uzlin, kde prezentují antigen naivním T-lymfocytům. Dochází k proliferaci specifických paměťových T-lymfocytů (nesoucích kožní homingový receptor <strong>CLA</strong>), které se usídlují v kůži. Fáze trvá 5–7 dní.<br>2. <strong>Výbavná fáze</strong>: Při opakovaném kontaktu s alergenem prezentují antigen makrofágy a keratinocyty. Paměťové T-lymfocyty uvolňují cytokiny (<strong>IFN-gamma</strong>, <strong>IL-2</strong>), které aktivují keratinocyty a přitahují další buňky zánětu, což vede ke spongióze a tvorbě puchýřů.",
                  "macroscopy": "V <strong>akutní fázi</strong> se projevuje jako silně svědivé, jasně červené, edematózní ložisko, na jehož povrchu se vysévají drobné, těsně uspořádané papulovezikuly (puchýřky). Ty praskají a splývají v mokvající plochy, které následně zasychají v krusty. V <strong>chronické fázi</strong> zánět ustupuje, kůže je zhrubělá, šupinatá, s výrazným kožním reliéfem (<strong>lichenifikace</strong>) a bolestivými prasklinami (<strong>ragády</strong>). Typická je <strong>evoluční polymorfie</strong> (přítomnost různých stadií eflorescencí současně).",
                  "microscopy": "Histologickým korelátem ekzémové reakce je <strong>spongióza</strong> (intercelulární edém epidermis), která oddaluje keratinocyty a napíná desmosomy, což vede ke vzniku intraepidermálních puchýřků. V epidermis nacházíme exocytózu (průnik lymfocytů) a v horním koriu perivaskulární mononukleární infiltrát s eozinofily.",
                  "clinical": "Diagnostika spočívá v anamnéze a provedení <strong>epikutánních (patch) testů</strong>. Alergeny se aplikují na záda pacienta ve speciálních komůrkách na 24-48 hodin, odečítá se po 48, 72 a event. 96 hodinách (hodnotí se erytém, papuly, vezikuly). Léčba zahrnuje <strong>odstranění alergenu</strong>. V akutní fázi se aplikují vysychavé obklady (Jarischův roztok) a lokální <strong>fluorované kortikosteroidy</strong> (později se přejíždí na slabší). U chronických forem se používají masťové základy s dehtem či ichtamolem. U těžkých torpidních stavů lze využít hraniční RTG paprsky (Buckyho lampa)."
            },
            "quiz": [
                  {
                        "question": "Který typ imunitní reakce a jaké buňky hrají klíčovou roli v senzibilizační fázi vzniku eczema contactum allergicum?",
                        "options": [
                              "I. typ (anafylaktický) zprostředkovaný IgE protilátkami a žírnými buňkami",
                              "IV. typ (oddálená přecitlivělost) zprostředkovaný Langerhansovými buňkami (antigen-prezentující buňky kůže) a specifickými T-lymfocyty nesoucími homing CLA receptor",
                              "II. typ (cytotoxický) zprostředkovaný komplementem a neutrofily",
                              "III. typ (imunokomplexový) zprostředkovaný cirkulujícími komplexy IgG a kolagenem IV"
                        ],
                        "correct": 1,
                        "explanation": "Alergický kontaktní ekzém je klasická celulární imunitní reakce IV. typu. V první (senzibilizační) fázi dochází k navázání haptenu na nosný protein, jeho zpracování epidermálními dendritickými Langerhansovými buňkami a jejich migraci do uzlin, kde aktivují naivní T-lymfocyty. Tyto buňky se diferencují na paměťové buňky vyjádřením kožního CLA receptoru."
                  },
                  {
                        "question": "Jak se provádí a odečítá standardní diagnostická metoda k určení kontaktního alergického ekzému (epikutánní testy)?",
                        "options": [
                              "Alergen se vstříkne intradermálně do předloktí a reakce (pupen) se odečte za 15 minut",
                              "Alergeny se aplikují ve speciálních komůrkách na kůži zad na 24 až 48 hodin; odečty se provádějí za 48, 72 a případně 96 hodin, kdy se hodnotí přítomnost erytému, papul či vezikul",
                              "Odebere se krev na průkaz specifických IgE metodou Western blot",
                              "Pacientovi se podá eliminační dieta a sleduje se ústup pruritu do 2 hodin"
                        ],
                        "correct": 1,
                        "explanation": "Epikutánní (patch) testy slouží k detekci přecitlivělosti IV. typu. Testovací látky se lepí na zdravou kůži zad na 48 hodin. Reakce se odečítá s odstupem (po 48, 72 a 96 hodinách), protože buněčná reakce potřebuje čas na rozvoj. Hodnotí se reakce od mírného erytému (+) až po silnou vezikulózní či bulózní reakci (+++)."
                  }
            ]
      },
      {
            "id": "derma-32",
            "title": "Eczema microbiale a eczema dyshidroticum",
            "section": "Speciální dermatologie (Specka)",
            "keywords": [
                  "eczema microbiale",
                  "eczema dyshidroticum",
                  "eczema nummulare",
                  "mikrobidy",
                  "pomfolyx"
            ],
            "content": {
                  "definition": "Tato podskupina ekzémů zahrnuje formy s odlišnou etiopatogenezí a lokalizací. <strong>Eczema microbiale (mikrobiální ekzém)</strong> je zánětlivá reakce kůže na bakteriální produkty. <strong>Eczema nummulare</strong> je chronický ekzém tvořící okrouhlá ložiska tvaru mincí. <strong>Eczema dyshidroticum (dyshidrotický ekzém)</strong> se projevuje výsevem svědivých puchýřků na dlaních, ploskách a postranních plochách prstů.",
                  "etiology": "<strong>Eczema microbiale</strong> vzniká senzibilizací na antigeny mikrobiální flóry (často <em>Staphylococcus aureus</em> nebo streptokoky) z lokálního infekčního ložiska (rány, píštěle, městnavá dermatitida). <strong>Eczema dyshidroticum</strong> je polyetiologický: uplatňuje se kontaktní či léková alergie, atopie, psychický stres, nebo jde o 'idovou' reakci na tinea pedis (mykotickou infekci nohou).",
                  "pathogenesis": "U mikrobiálního ekzému nejde o přímou pyodermii, ale o imunologickou přecitlivělost na produkty bakterií nebo na tkáňové antigeny modifikované infekcí. Může vést k generalizaci a výsevu alergických projevů v distančních lokalizacích (tzv. <strong>mikrobidy</strong> neboli idové reakce). U dyshidrotického ekzému edém (spongióza) postihuje epidermis dlaní a plosek, kde je silná rohová vrstva, což nutí tekutinu zůstávat hluboko a tvořit charakteristické intraepidermální puchýře.",
                  "macroscopy": "<strong>Eczema microbiale</strong>: Živě červená, ostře ohraničená ložiska s papulovezikulami, mokváním a medovými krustami na povrchu. Na okrajích bývá límec z odloučené rohoviny. Predilekce: bércové vředy, okolí ran, retroaurikulární forma (za uchem u dětí). <strong>Eczema nummulare</strong>: Ostře ohraničená, okrouhlá červená ložiska velikosti mince s šupinami a krustami na extenzorech končetin, úporně svědící. <strong>Eczema dyshidroticum</strong>: Akutní fáze - drobné, hluboce uložené, 'ságové' puchýřky (pomfolyx) na dlaních a ploskách, které mohou splývat. Chronická fáze - lamelózní olupování kůže (<em>dyshidrosis lamellosa sicca</em>).",
                  "microscopy": "Histologicky nacházíme u všech forem typickou <strong>spongiózu</strong> (intercelulární edém) s tvorbou intraepidermálních puchýřů. U mikrobiální formy je výraznější exocytóza (průnik neutrofilů a lymfocytů do epidermis) a parakeratóza s přítomností kolonií bakterií v rohových šupinách. V koriu je edém a perivaskulární infiltrát.",
                  "clinical": "Diagnóza se opírá o klinický obraz. Důležité je vyloučit přímé infekce (pyodermie, mykózy - kultivačně) a kontaktní alergii. Léčba: <strong>Eczema microbiale</strong>: lokální kortikosteroidy kombinované s <strong>antibiotiky/antiseptiky</strong> (chloroxin, neomycin), vysychavé obklady (Jarisch, hypermangan), 1% genciánová violeť. <strong>Eczema dyshidroticum</strong>: zpočátku adstringentní obklady, lokální silné kortikoidy, vyloučení mykotického ohniska na nohou (antimykotika). U těžkých forem krátkodobě systémové kortikosteroidy."
            },
            "quiz": [
                  {
                        "question": "Čím se zásadně liší eczema microbiale od běžné kožní pyodermie (např. impetigo) a jak se klinicky manifestuje jeho diseminace?",
                        "options": [
                              "Eczema microbiale je vyvolán výhradně viry a nehojí se, zatímco pyodermie je bakteriální; diseminace se neprojevuje",
                              "Eczema microbiale není přímou infekcí kůže, ale alergickou/senzibilizační reakcí na bakteriální antigeny; jeho diseminace se projevuje výsevem svědivých papulovezikul na vzdálených místech (tzv. mikrobidy / idové reakce)",
                              "Pyodermie postihuje pouze vnitřní orgány, mikrobiální ekzém je omezen na nehty",
                              "Mikrobiální ekzém je léčen výhradně chirurgickou excizí, pyodermie nikoliv"
                        ],
                        "correct": 1,
                        "explanation": "Mikrobiální ekzém je ekzémová reakce vyvolaná přecitlivělostí na mikrobiální produkty, nikoli přímým invazivním působením bakterií v tkáni (jako u pyodermie). Při zhoršení stavu nebo nevhodné léčbě dochází k hematogennímu rozsevu mikrobiálních antigenů a vzniku sekundárních alergických výsypů (mikrobidů) na obličeji, trupu či končetinách."
                  },
                  {
                        "question": "Co je charakteristickým klinickým a patofyziologickým rysem akutní fáze eczema dyshidroticum na dlaních a ploskách?",
                        "options": [
                              "Hluboké nekrózy kůže bez svědění vyvolané poruchou cirkulace",
                              "Výsev drobných, hluboce uložených, intenzivně svědících puchýřků naplněných čirou tekutinou (které vzhledem k silné rohové vrstvě pokožky na akrech snadno nepraskají) s možným spojením do velkých bul",
                              "Vznik velkých žlutých šupin ve kštici doprovázených alopecií",
                              "Výskyt motýlovitého exantému na obličeji vynechávajícího nazolabiální rýhu"
                        ],
                        "correct": 1,
                        "explanation": "U dyshidrotického ekzému (pomfolyxu) se na dlaních, ploskách a bocích prstů tvoří hluboce uložené puchýřky připomínající zrnka ságu. Protože rohová vrstva (stratum corneum) je v těchto partiích velmi tlustá a pevná, puchýře nepraskají tak snadno jako na tenké kůži, ale zůstávají napjaté a silně svědí. Často splývají v buly a po čase se hojí lamelózním olupováním."
                  }
            ]
      },
      {
            "id": "derma-33",
            "title": "Eczema atopicum",
            "section": "Speciální dermatologie (Specka)",
            "keywords": [
                  "atopický ekzém",
                  "atopie",
                  "filaggrin",
                  "Hertoghovo znamení",
                  "xeróza",
                  "imunomodulátory"
            ],
            "content": {
                  "definition": "<strong>Eczema atopicum (atopická dermatitida / AE)</strong> je chronické, recidivující, silně svědivé zánětlivé kožní onemocnění s genetickou predispozicí. Je součástí atopického syndromu (který zahrnuje astma bronchiale, sennou rýmu a alergickou konjunktivitidu). Typická je výrazná suchost kůže (<strong>xeróza</strong>), porucha kožní bariéry a typická věkově závislá lokalizace projevů.",
                  "etiology": "Etiologie je multifaktoriální s výrazným vlivem genetiky (polymorfismy v genech pro strukturní proteiny pokožky, např. <strong>filaggrin</strong>, a geny imunitního systému). Rozlišuje se forma <strong>alergická (extrinzitní, 70-80 %)</strong> spojená s vysokým IgE a senzibilizací na inhalační a potravinové alergeny, a <strong>nealergická (intrinzitní, 20-30 %)</strong> s normálním IgE.",
                  "pathogenesis": "Dva hlavní patogenetické pilíře:<br>1. <strong>Porucha kožní bariéry</strong>: Defekt filaggrinu a snížená syntéza lipidů (ceramidů) vede k xeróze kůže a zvýšené transepidermální ztrátě vody (TEWL). Tím je usnadněn průnik alergenů a iritancií.<br>2. <strong>Imunitní dysregulace</strong>: V akutní fázi převažuje aktivita <strong>Th2 lymfocytů</strong> produkujících <strong>IL-4, IL-13</strong> (stimulace syntézy IgE) a <strong>IL-5</strong> (aktivace eozinofilů). V chronické fázi dochází k přesmyku na <strong>Th1 odpověď</strong> s produkcí <strong>IFN-gamma</strong> a IL-12. Prurit vede ke škrábání, což aktivuje keratinocyty k produkci prozánětlivých cytokinů a zhoršuje zánět.",
                  "macroscopy": "Onemocnění má tři klinické formy:<br>1. <strong>Kojenecká forma (od 2. měsíce)</strong>: Suchá, červená ložiska s papulkami, mokváním a krustami (<em>crusta lactea</em>) na tvářích, čele, šíří se na kštici a trup.<br>2. <strong>Dětská forma (předškolní a školní věk)</strong>: Přesun projevů do flexur (loketní a podkolenní jamky), na krk a zápěstí. Kůže je hrubá, dry, drsná (<strong>lichenifikovaná</strong>) s exkoriacemi. Charakteristické je <strong>Hertoghovo znamení</strong> (chybění zevní třetiny obočí), infraorbitální řasa (Dennie-Morganova řasa) a vyhlazené lesklé nehty ze škrábání.<br>3. <strong>Dospělá forma</strong>: Podobná dětské lokalizaci, kůže je výrazně infiltrovaná, dry a drsná, svědění je zhoršováno stresem.<br>Frustní formy zahrnují <em>pityriasis alba</em> (depigmentovaná dry ložiska), <em>juvenilní plantární dermatózu</em> a <em>pulpitis sicca</em> (dry bříško prstů).",
                  "microscopy": "V akutním stadiu nacházíme spongiózu a intraepidermální vezikuly (obraz ekzému). V chronickém stadiu převažuje nepravidelná <strong>akantóza</strong> (rozšíření epidermis), hyperkeratóza a parakeratóza. V dermis je přítomen edém a infiltrát z lymfocytů, dendritických buněk a eozinofilů.",
                  "clinical": "Diagnóza je klinická (kritéria Hanifin-Rajka: pruritus, typická distribuce, chronický průběh, atopická anamnéza). Laboratorně bývá u 80 % zvýšené <strong>IgE</strong> a eozinofilie. Častou komplikací je <strong>eczema herpeticum</strong> z důvodu diseminace HSV a náchylnost k infekcím (<em>Staphylococcus aureus</em>, mollusca). Léčba: <strong>promašťování (emoliencia)</strong>, šetrná hygiena. V exacerbaci <strong>lokální kortikosteroidy</strong> a <strong>lokální inhibitory kalcineurinu (takrolimus, pimekrolimus)</strong>. Celkově antihistaminika, u těžkých stavů cyklosporin A, biologická léčba (<strong>dupilumab</strong> - protilátka proti IL-4/IL-13 receptoru) a fototerapie (UVA/UVB)."
            },
            "quiz": [
                  {
                        "question": "Která klinická triáda symptomů a fenoménů v obličeji je vysoce suspektní pro dětskou formu atopického ekzému?",
                        "options": [
                              "Motýlovitý exantém, teleangiektázie na nose a zbytnění dásní",
                              "Hertoghovo znamení (prořídnutí zevní třetiny obočí), Dennie-Morganova (infraorbitální) řasa pod očima a bledá kůže obličeje se zhrubělými víčky",
                              "Wickhamovy strie na rtech, koilocytóza a kónické čepy",
                              "Trombotizované kapiláry, žluté šupiny ve kštici a anogenitální vegetace"
                        ],
                        "correct": 1,
                        "explanation": "U pacientů s atopickým ekzémem se v obličeji často vyskytuje Dennie-Morganova (infraorbitální) řasa, což je dvojitý záhyb kůže pod dolním víčkem. Časté je také Hertoghovo znamení (prořídnutí až chybění zevní třetiny obočí v důsledku chronického tření a škrábání svědivé kůže). Kůže obličeje bývá bledá a suchá."
                  },
                  {
                        "question": "Jaký je mechanismus účinku lokálních imunomodulátorů takrolimu a pimekrolimu, které se používají jako alternativa ke kortikosteroidům v léčbě atopického ekzému?",
                        "options": [
                              "Blokují syntézu kolagenu I a III ve fibroblastech škáry",
                              "Působí jako agonisté histaminových H1 receptorů na endoteliích",
                              "Fungují jako inhibitory kalcineurinu; blokují transkripci a syntézu interleukinu-2 (IL-2) a dalších cytokinů v T-lymfocytech, čímž potlačují jejich aktivaci",
                              "Syntetizují prekurzory vitaminu D3 fotochemickou reakcí"
                        ],
                        "correct": 2,
                        "explanation": "Takrolimus a pimekrolimus are local calcineurin inhibitors. By binding to the immunophilin FKBP-12, they inhibit the enzyme calcineurin, preventing the dephosphorylation of the transcription factor NFAT. The result is the blocking of transcription of genes for IL-2 and other key Th2/Th1 cytokines in T-lymphocytes, leading to suppression of inflammation without the risk of skin atrophy that accompanies steroid treatment."
                  }
            ]
      },
      {
            "id": "derma-34",
            "title": "Dermatitis seborrhoica",
            "section": "Speciální dermatologie (Specka)",
            "keywords": [
                  "seboroická dermatitida",
                  "seborea",
                  "Malassezia",
                  "crusta lactea",
                  "tinea amiantacea"
            ],
            "content": {
                  "definition": "<strong>Dermatitis seborrhoica (seboroická dermatitida / SD)</strong> je chronické, neinfekční, zánětlivé kožní onemocnění s recidivujícím průběhem. Postihuje oblasti kůže s vysokou hustotou a aktivitou mazových žláz (tzv. seboroické zóny - kštice, obličej, retroaurikulární oblasti, presekrální a intertriginózní krajiny). Vyskytuje se u kojenců a u dospělých (častěji muži).",
                  "etiology": "Hlavními etiopatogenetickými faktory jsou <strong>seborea</strong> (zvýšená produkce kožního mazu) a přemnožení lipofilních kvasinek rodu <strong>Malassezia</strong> (<em>Pityrosporon ovale</em>), které se živí lipidy kožního mazu. Významnou roli hraje také složení kožního mazu, stav kožní bariéry, genetické predispozice, imunodeficience (častý a těžký průběh u pacientů s HIV) a psychický stres.",
                  "pathogenesis": "Kvasinky rodu Malassezia produkují lipázy, které štěpí triglyceridy kožního mazu na volné mastné kyseliny. Tyto kyseliny dráždí epidermis, narušují kožní bariéru a spouštějí neimunitní i imunologickou zánětlivou odpověď (uvolnění TNF-alpha, IL-1-alpha). Zánět vede k urychlení buněčného cyklu keratinocytů a poruše jejich rohovění (deskvamaci).",
                  "macroscopy": "Projevy se liší podle věku:<br>1. <strong>Kojenecká forma (do 3 měsíců)</strong>: Mastné, pevně lpící nažloutlé šupiny ve kštici (<em>crusta lactea</em> neboli ouročky), nesvědivá erytematoskvamózní ložiska v záhybech. Těžkou komplikací u imunodeficientních dětí je <em>erythroderma desquamativa Leiner</em>.<br>2. <strong>Dospělá forma</strong>: Ostře ohraničená žlutorůžová ložiska krytá <strong>mastnými, zažloutlými šupinami</strong>. Lokalizace: kštice (může tvořit silné bílé nánosy - <em>tinea amiantacea</em>), obočí, nazolabiální rýhy, nad sternem (<em>mediothoracica figurata</em> s polycyklickými ložisky) a mezi lopatkami.",
                  "microscopy": "Histologicky nacházíme nepravidelnou akantózu pokožky, ložiskovou parakeratózu v ústí folikulů (folikulární zátky) a mírný intercelulární edém (spongiózu). V horním koriu je přítomen edém papil a mírný perivaskulární infiltrát tvořený převážně lymfocyty a histiocyty.",
                  "clinical": "Diagnostika je založena na typickém klinickém obrazu a lokalizaci. Diferenciální diagnostika zahrnuje atopický ekzém (u kojenců svědí, SD nesvědí), psoriázu (suché stříbřité šupiny) a dermatofyty. V léčbě se používají lokální <strong>antimykotika</strong> (ketokonazol, ciklopiroxolamin) k eliminaci kvasinek, u akutního zánětu slabé kortikosteroidy, a k doléčení keratolytika (síra, kyselina salicylová, dehet). Doporučují se speciální šampony."
            },
            "quiz": [
                  {
                        "question": "Který mikroorganismus se významně podílí na etiopatogenezi dermatitis seborrhoica a jaká je jeho role při vzniku kožních lézí?",
                        "options": [
                              "*Staphylococcus aureus*; produkuje exfoliativní toxiny A a B způsobující akantolýzu",
                              "Lipofilní kvasinka *Malassezia* (*Pityrosporon ovale*); štěpí lipidy kožního mazu na volné mastné kyseliny, které dráždí kůži a spouštějí zánětlivou reakci",
                              "*Borrelia afzelii*; vyvolává chronický perzistující zánět vedoucí k atrofii epidermis",
                              "*Corynebacterium minutissimum*; produkuje sirné sloučeniny vyvolávající zápach"
                        ],
                        "correct": 1,
                        "explanation": "Kvasinka Malassezia (dříve Pityrosporon ovale) je běžnou součástí kožní mikroflóry seboroických zón. Při nadbytku kožního mazu (seboree) se přemnožuje. Její enzymy (lipázy) štěpí tuky na volné mastné kyseliny, které narušují epidermální bariéru a působí jako iritancia vyvolávající zánět a deskvamaci."
                  },
                  {
                        "question": "Jak lze spolehlivě odlišit kojeneckou formu dermatitis seborrhoica od kojenecké formy eczema atopicum?",
                        "options": [
                              "Seboroická dermatitida postihuje pouze chlapce, atopický ekzém pouze dívky",
                              "Atopický ekzém u kojenců začíná na nohou a nesvědí; seboroická dermatitida začíná na trupu a doprovází ji anémie",
                              "Seboroická dermatitida u kojenců obvykle nesvědí (nebo jen minimálně), ložiska jsou krytá mastnými žlutavými šupinami a postihuje flexury a kštici; atopický ekzém intenzivně svědí (způsobuje neklid dítěte), ložiska jsou spíše suchá, červená, mokvající a postihují tváře a čelo",
                              "Rozdíl se určuje výhradně na základě pozitivního Auspitzova fenoménu"
                        ],
                        "correct": 2,
                        "explanation": "Klíčovým klinickým rozdílem je přítomnost pruritu. Atopický ekzém u kojenců extrémně svědí, dítě se škrábe, je neklidné, ložiska jsou na tvářích, spíše suchá nebo ostře mokvající. Seboroická dermatitida u kojenců začíná dříve (kolem 1. měsíce), nesvědí, dítě je klidné, ložiska mají žluté, mastné šupiny a jsou ve kštici (crusta lactea) a v kožních záhybech."
                  }
            ]
      },
      {
            "id": "derma-35",
            "title": "Kožní projevy chronické venózní insuficience",
            "section": "Speciální dermatologie (Specka)",
            "keywords": [
                  "venózní insuficience",
                  "stasis dermatitis",
                  "lipodermatoskleróza",
                  "ulcus cruris",
                  "atrophie blanche"
            ],
            "content": {
                  "definition": "<strong>Kožní projevy chronické venózní insuficience (CVI)</strong> jsou trofické a zánětlivé změny kůže a podkoží na dolních končetinách (bércích), které vznikají v důsledku dlouhodobého žilního městnání (venózní hypertenze). Spektrum sahá od otoků (flebedému) přes pigmentace a ekzémy až po nejtěžší stadium - <strong>bércový vřed žilního původu (ulcus cruris venosum)</strong>.",
                  "etiology": "Příčinou je chlopenní nedostatečnost hlubokých a povrchových žil, žilní trombóza (posttrombotický syndrom) nebo selhání svalové pumpy lýtka. Rizikovými faktory jsou obezita, dlouhé stání či sezení, věk, genetická dispozice a ženské pohlaví.",
                  "pathogenesis": "Žilní hypertenze se přenáší do mikrocirkulace. Dochází k dilataci kapilár, zpomalení průtoku a agregaci erytrocytů, což vede k <strong>mikrotrombózám</strong>. Zvýšený hydrostatický tlak způsobuje únik tekutiny a <strong>extravazaci erytrocytů</strong> do intersticia, kde se rozpadají a uvolňují <strong>hemosiderin</strong>. Stagnace krve vede k aktivaci leukocytů, které migrují do tkáně, uvolňují proteázy a cytokiny, což spouští chronický zánět, hypoxii a vazivovou přestavbu podkoží (<strong>lipodermatosklerózu</strong>).",
                  "macroscopy": "Klinické formy a projevy:<br>1. <strong>Flebedém</strong>: Měkký otok kolem kotníků a bérců (vynechává nárt a prsty), asymetrický, mizí po elevaci a přes noc.<br>2. <strong>Hemosiderinová hyperpigmentace</strong>: Hnědavé až temně hnědé splývající skvrny v dolní třetině bérců.<br>3. <strong>Stasis dermatitis (gravitační ekzém)</strong>: Svědivá, olupující se erytematózní ložiska na vnitřní straně bérce, kůže je suchá, lesklá, s mastnými šupinami.<br>4. <strong>Hypodermatitida</strong>: Bolestivý, teplý, neostře ohraničený červený otok (napodobuje erysipel, ale chybí celkové příznaky jako horečka).<br>5. <strong>Lipodermatoskleróza</strong>: Tuhé, nepohyblivé podkoží, dolní třetina bérce je zúžená, horní část oteklá (vzhled <strong>láhve šampaňského otočené dnem vzhůru</strong>).<br>6. <strong>Atrophie blanche (bílá atrofie)</strong>: Porcelánově bílé, hladké jizvy s červenými teleangiektáziemi, vznikají po zhojení bolestivých mikroembolizací.<br>7. <strong>Ulcus cruris venosum (žilní bércový vřed)</strong>: Nepravidelný, spíše povrchový defekt s fibrinózní spodinou a hojnou exsudací, lokalizovaný nejčastěji nad <strong>vnitřním kotníkem</strong>. Bolest ustupuje po elevaci končetiny.",
                  "microscopy": "Histologicky nacházíme zmnožení a dilataci kapilár (trsovité uspořádání), ztluštění jejich stěn, depozita fibrinu kolem cév (fibrinové manžety), extravazaci erytrocytů a depozita hemosiderinu (vychytávaná makrofágy). V pokročilých stadiích je patrná výrazná fibróza dermis a subkutis s úbytkem adnex.",
                  "clinical": "Diagnostika se opírá o klinický nález a <strong>duplexní ultrasonografii žil</strong> (průkaz refluxu či trombózy). V léčbě je klíčová <strong>zevní kompresivní terapie</strong> (krátkotažná obinadla, kompresní punčochy), která snižuje žilní tlak a otok. Dále se podávají venofarmaka (mikronizovaný diosmin). U vředů se uplatňuje vlhké hojení ran, šetrná nekrektomie, a u stasis dermatitis lokálně kortikosteroidy či dehtové preparáty. Důležitá je prevence erysipelu."
            },
            "quiz": [
                  {
                        "question": "Který klinický obraz na dolní končetině je typický pro rozvinutou lipodermatosklerózu při chronické žilní insuficienci a co je jejím histologickým podkladem?",
                        "options": [
                              "Vznik porcelánově bílých jizev s teleangiektáziemi; podkladem jsou intraluminální trombózy",
                              "Tuhé, zbytnělé podkoží v distální třetině bérce způsobující zúžení, zatímco proximální část je edematózní (vzhled obrácené lahve šampaňského); podkladem je vazivová fibrotizace podkožního tuku s úbytkem kapilár a adnex",
                              "Měkký symetrický otok postihující i prsty a nárt; podkladem je bakteriální celulitida",
                              "Centrální nekróza s černým příškvárem; podkladem je ucpání velkých tepen"
                        ],
                        "correct": 1,
                        "explanation": "Lipodermatoskleróza je pozdním projevem CVI. Chronický zánět vyvolaný žilní hypertenzí vede k fibrotizaci podkožního tuku a kůže. Kůže v dolní třetině bérce je extrémně tuhá, napjatá a nelze ji zřasit, což vede k zaškrcení končetiny. Nad tímto zaškrcením je bérce oteklý, což dává končetině typický tvar obrácené lahve od šampaňského."
                  },
                  {
                        "question": "Jak lze klinicky odlišit hypodermatitidu (zánětlivou reakci u žilní insuficience) od erysipelu (růže) na bérci, a proč je toto rozlišení terapeuticky zásadní?",
                        "options": [
                              "Hypodermatitida svědí, erysipel ne; u hypodermatitidy podáváme ihned penicilin celkově",
                              "Hypodermatitida je provázena vysokou horečkou a zimnicí, erysipel probíhá bez celkových příznaků; u erysipelu provádíme excizi",
                              "Hypodermatitida se projevuje bolestivým, teplým červeným ložiskem (často na mediální straně bérce) bez celkových příznaků (horečka, zimnice, leukocytóza); erysipel je bakteriální infekce provázená febriliemi, zimnicí/třesavkou a vyžaduje systémovou léčbu antibiotiky (penicilinem), zatímco u hypodermatitidy je základem komprese",
                              "Hypodermatitida postihuje pouze prsty a nárt, erysipel koleno; léčba je u obou stejná"
                        ],
                        "correct": 2,
                        "explanation": "Hypodermatitida je neinfekční zánět podkoží způsobený městnáním krve a aktivací neutrofilů. Může klinicky věrně napodobovat erysipel (červené, teplé, bolestivé ložisko). Rozdíl je v tom, že u hypodermatitidy chybí celková zánětlivá reakce (horečka, třesavka, leukocytóza). Léčba hypodermatitidy spočívá v kompresi a venotonicích, antibiotika jsou zde zbytečná, zatímco erysipel je infekce a vyžaduje penicilin."
                  }
            ]
      },
      {
            "id": "derma-36",
            "title": "Pityriasis rubra pilaris a Pityriasis rosea",
            "section": "Speciální dermatologie (Specka)",
            "keywords": [
                  "Pityriasis rosea",
                  "Pityriasis rubra pilaris",
                  "mateřské ložisko",
                  "acitretin",
                  "Gibert"
            ],
            "content": {
                  "definition": "Tato skupina zahrnuje dvě odlišné erytematoskvamózní dermatózy. <strong>Pityriasis rosea (Gibert)</strong> je akutní, benigní, spontánně se hojící kožní výsev postihující převážně mladé lidi. <strong>Pityriasis rubra pilaris (PRP)</strong> je vzácné chronické zánětlivé onemocnění charakterizované folikulárními papulami, červenooranžovými ložisky a rizikem přechodu v erytrodermii.",
                  "etiology": "U <strong>Pityriasis rosea</strong> je etiologie neznámá (předpokládá se virový spouštěč - reaktivace lidských herpesvirů <strong>HHV-6 a HHV-7</strong>, vzhledem k sezónnímu výskytu na jaře a na podzim). U <strong>Pityriasis rubra pilaris</strong> je příčina nejasná, existují formy hereditární (AD dědičné s mutací v genu <em>CARD14</em>) a získané (častěji asociované s malignitami či autoimunitními procesy).",
                  "pathogenesis": "U Pityriasis rosea virus spouští mírnou zánětlivou reakci v kůži s dilatací cév a exocytózou, která se nejprve manifestuje jako primární velké ložisko a následně se šíří. U PRP dochází k těžké poruše keratinizace pokožky s folikulární hyperkeratózou (ucpávání folikulů rohovinou) a zánětem dermis, což vede ke splynutí lézí a tvorbě oranžovo-červených olupujících se ploch.",
                  "macroscopy": "<strong>Pityriasis rosea</strong>: Začíná <strong>mateřským (primárním) ložiskem</strong> (tache mère) - růžovou oválnou makulou (velikost 2-5 cm) na trupu s jemným olupováním na periferii v podobě dovnitř nazdviženého <strong>límečku šupin</strong>. Po 1-2 týdnech následuje sekundární výsev menších oválných ložisek na trupu a končetinách, uspořádaných podél <strong>čar štěpnosti kůže</strong> (tvar vánočního stromečku).<br><strong>Pityriasis rubra pilaris</strong>: Projevuje se folikulárními červenými, drsnými papulami (vzhled struhadla) na extenzorech prstů rukou a končetinách. Ty splývají do oranžovo-červených šupinatých ložisek. Typická je <strong>erytrodermie s ostrůvky zdravé kůže</strong> (nappes saines). Na dlaních a ploskách se tvoří difúzní naoranžovělá hyperkeratóza (<strong>keratodermie - 'PRP sandály'</strong>).",
                  "microscopy": "Pityriasis rosea: nespecifická subakutní dermatitida (mírná spongióza, fokální parakeratóza a perivaskulární lymfocytární infiltrát v koria). PRP: histologická triáda - <strong>alternující ortokeratóza a parakeratóza</strong> ve vertikálním i horizontálním směru (tzv. šachovnicový vzor), folikulární hyperkeratotické zátky a hypergranulóza, v koriu je perivaskulární infiltrát.",
                  "clinical": "Diagnóza je klinická. U Pityriasis rosea je nutné odlišit sekundární syfilis (nutné provést sérologii!), lékové exantémy a tineu. <strong>Pityriasis rosea</strong> nevyžaduje specifickou léčbu, odeznívá sama do 6-8 týdnů (omezení iritace kůže, zinku-obsahující tekutý pudr). <strong>Pityriasis rubra pilaris</strong> má chronický průběh, v léčbě jsou lékem volby celkové <strong>retinoidy (acitretin)</strong>, lokálně se aplikují keratolytika (urea, kyselina salicylová) a emoliencia."
            },
            "quiz": [
                  {
                        "question": "Který klinický nález je typickým iniciálním projevem u Pityriasis rosea (Gibert) a jaké je doporučené uspořádání následného sekundárního výsevu?",
                        "options": [
                              "Výsev drobných pustul na dlaních; sekundární výsev postihuje nehty",
                              "Mateřské ložisko (oválná růžová makula s límečkem šupin na periferii); sekundární výsev menších ložisek je uspořádán symetricky na trupu podél Langerových čar štěpnosti kůže (vzhled vánočního stromečku)",
                              "Gottronovy papuly nad klouby; sekundární výsev tvoří heliotropní erytém",
                              "Hluboké ragády na ploskách; sekundární výsev je lokalizován na tvrdém patře"
                        ],
                        "correct": 1,
                        "explanation": "Pityriasis rosea typicky začíná jedním větším 'mateřským ložiskem' (herald patch), které se nachází nejčastěji na trupu nebo krku. Po cca 7-14 dnech dojde k sekundárnímu generalizovanému výsevu menších, obdobně vyhlížejících oválných makul, které sledují linie štěpnosti kůže (Langerovy linie), což na zádech vytváří charakteristický obraz větvení vánočního stromečku."
                  },
                  {
                        "question": "Který soubor klinických projevů je charakteristický pro Pityriasis rubra pilaris (PRP) a odlišuje ji od běžné psoriázy?",
                        "options": [
                              "Bodovité krvácení (Auspitzův fenomén), dolíčkování nehtů a postižení kloubů",
                              "Drsné folikulární papuly (vzhled struhadla), oranžovo-červená ložiska splývající do erytrodermie s typickými ostrovy zdravé kůže a masivní oranžovo-žlutá hyperkeratóza dlaní a plosek",
                              "Vznik intraepidermálních puchýřů s pozitivním Nikolského příznakem",
                              "Porcelánově bílé atrofické jizvy na bércích s teleangiektáziemi"
                        ],
                        "correct": 1,
                        "explanation": "Pityriasis rubra pilaris se projevuje typickými folikulárními hyperkeratotickými papulami (např. na hřbetech prstů rukou - 'struhadlo'), které splývají. Při přechodu do erytrodermie jsou patognomické ostrovy zcela zdravé kůže uprostřed červených ploch. Typická je rovněž naoranžovělá voskovitá hyperkeratóza plosek a dlaní. Chybí Auspitzův fenomén a změny typické pro psoriázu."
                  }
            ]
      },
      {
            "id": "derma-37",
            "title": "Lichen planus",
            "section": "Speciální dermatologie (Specka)",
            "keywords": [
                  "lichen planus",
                  "lichen ruber planus",
                  "Wickhamovy strie",
                  "akantóza",
                  "immunofluorescence"
            ],
            "content": {
                  "definition": "<strong>Lichen planus (lichen ruber planus)</strong> je relativně časté, chronické, zánětlivé, silně svědivé onemocnění kůže, sliznic, nehtů a vlasů. Je charakterizováno typickými polygonálními papulami na kůži a bělavými kresbami na sliznicích. Průběh je benigní, ale může být velmi úporný.",
                  "etiology": "Přesná etiologie je neznámá. Předpokládá se <strong>autoimunitní mechanismus</strong> zprostředkovaný cytotoxickými <strong>T-lymfocyty (CD8+)</strong>, které napadají bazální keratinocyty exprimující změněné autoantigeny. Často se vyskytuje v souvislosti s chronickými hepatopatiemi (zejména <strong>hepatitidou C</strong>), stresem, expozicí chemikáliím a užíváním některých léků (např. beta-blokátory, antimalarika, zlato - tzv. lichenoidní reakce).",
                  "pathogenesis": "Cytotoxické T-lymfocyty se hromadí podél dermoepidermální junkce a vyvolávají apoptózu bazálních keratinocytů (tzv. <strong>liquefakční/vakuolární degeneraci bazální vrstvy</strong>). Apoptotické buňky se mění na kulovitá eozinofilní tělíska (<strong>cytoidní / Civatteova tělíska</strong>). Narušení bazální membrány vede k úniku melaninu z poškozených melanocytů do horní dermis (inkontinence pigmentu), kde je pohlcován melanofágy, což způsobuje dlouhodobé pigmentace.",
                  "macroscopy": "Na kůži se vysévají symetrické, ploché, <strong>polygonální, lesklé, červenofialové papuly</strong>. Na jejich povrchu je patrná jemná bělavá síťovitá kresba (<strong>Wickhamovy strie</strong>), podmíněná nerovnoměrnou hypergranulózou. Typický je <strong>Köbnerův fenomén</strong>. Predilekce: volární strana zápěstí, nárty, oblast hlezen, křížová krajina. Po zhojení zůstávají hnědošedé hyperpigmentace. <strong>Lichen planus mucosae</strong>: Na bukální sliznici tvoří netečné, asymptomatické bělavé síťovité kresby (arborizace). Mohou vznikat i bolestivé erozivní formy. <strong>Lichen planopilaris</strong> postihuje vlasové folikuly a vede k <strong>jizvící alopecii</strong>. Nehty mohou vykazovat podélné rýhování, ztenčení nebo totální destrukci.",
                  "microscopy": "Histologický nález je charakteristický: <strong>ortohyperkeratóza</strong> (bez parakeratózy), nepravidelná <strong>akantóza</strong> s pilovitým tvarem epidermálních čepů (vzhled zubů pily), fokální <strong>hypergranulóza</strong> a vakuolární degenerace bazální vrstvy. V horní dermis je přítomen <strong>pásolitý mononukleární (lymfocytární) infiltrát</strong> těsně naléhající na epidermis. Jsou přítomna Civatteova (cytoidní) tělíska. Přímá imunofluorescence (DIF) prokazuje depozita <strong>IgM</strong> a IgG v Civatteových tělíscích a záclonovitou fluorescenci <strong>fibrinogenu</strong> podél bazální membrány.",
                  "clinical": "Diagnóza se stanovuje na základě klinického obrazu (vzhled papul, přítomnost strií, slizniční léze) a potvrzuje se kožní biopsií. Diferenciální diagnostika zahrnuje psoriázu, sekundární syfilis a lékové exantémy. V léčbě jsou lékem první volby <strong>lokální kortikosteroidy</strong> (často pod okluzi). U slizničních forem se používají kortikosteroidní pasty (orabase) nebo inhibitory kalcineurinu (takrolimus). U těžkých generalizovaných forem se podávají celkově kortikosteroidy, retinoidy (acitretin) nebo se provádí fototerapie (PUVA)."
            },
            "quiz": [
                  {
                        "question": "Která histopatologická triáda a nález na přímé imunofluorescenci jsou patognomické pro Lichen planus?",
                        "options": [
                              "Hyperkeratóza s parakeratózou, Munroovy mikroabscesy a neutrofilní infiltrát; imunofluorescence prokazuje granulární IgA v papilách",
                              "Pilovitá akantóza epidermis, vakuolární degenerace bazální vrstvy s Civatteovými tělísky a pásovitý lymfocytární infiltrát v horní dermis; imunofluorescence prokazuje depozita IgM v Civatteových tělíscích a lineární záclonu fibrinogenu podél bazální membrány",
                              "Spongióza, intraepidermální puchýře a eozinofily; imunofluorescence je zcela negativní",
                              "Atrofie epidermis, zmnožení kolagenu a úbytek adnex; imunofluorescence prokazuje IgG v mezibuněčných prostorech"
                        ],
                        "correct": 1,
                        "explanation": "Lichen planus má velmi charakteristický histologický obraz: pilovité (zuby pily) uspořádání epidermálních lišt v důsledku akantózy, poškození bazální vrstvy (zkapalnění/vakuolizace) s výskytem Civatteových (cytoidních) tělísek, což jsou apoptotické buňky, a hustý lymfocytární infiltrát v horní dermis uspořádaný jako 'pás'. Imunofluorescenčně v těchto tělíscích prokazujeme vazbu IgM a fibrinogen podél junkce."
                  },
                  {
                        "question": "Co jsou to Wickhamovy strie, kde se typicky vyskytují a jaký je jejich anatomický podklad?",
                        "options": [
                              "Lineární trhliny v kůži na bércích; vznikají destrukcí kolagenu elastázou",
                              "Bělavá jemná síťovitá kresba na povrchu červenofialových papul na kůži a na bukální sliznici dutiny ústní; jejich podkladem je nerovnoměrné ztluštění granulární vrstvy pokožky (hypergranulóza)",
                              "Porcelánově bílé atrofické jizvy po zhojení vředů; podkladem jsou mikroembolizace",
                              "Červené pruhy na břiše těhotných žen; podkladem je roztažení elastických vláken"
                        ],
                        "correct": 1,
                        "explanation": "Wickhamovy strie jsou charakteristickým znakem lichen planus. Jedná se o opálově šedobílé síťování na povrchu papul a na sliznici tváří. Histologickým podkladem je nerovnoměrné ztluštění stratum granulosum (hypergranulóza) nad oblastmi zvýšené aktivity zánětu."
                  }
            ]
      },
      {
            "id": "derma-38",
            "title": "Psoriasis",
            "section": "Speciální dermatologie (Specka)",
            "keywords": [
                  "lupénka",
                  "psoriáza",
                  "Auspitzův fenomén",
                  "Munroovy mikroabscesy",
                  "acitretin",
                  "PUVA"
            ],
            "content": {
                  "definition": "<strong>Psoriasis (lupénka)</strong> je chronické, benigní, zánětlivé, geneticky podmíněné systémové onemocnění, které se manifestuje především na kůži (erytematózní ložiska s stříbřitými šupinami) a na kloubech. Má celoživotní průběh s fázemi exacerbací a remisí a výrazně snižuje kvalitu života.",
                  "etiology": "Psoriáza je polygenní multifaktoriální choroba. Rozlišuje se <strong>Typ I</strong> (časný nástup před 40. rokem, silný familiární výskyt, silná vazba na <strong>HLA-Cw6</strong>) a <strong>Typ II</strong> (pozdní nástup po 40. roce, bez familiární vazby). <strong>Spouštěcí faktory</strong> zahrnují streptokokové infekce (vyvolávají <em>psoriasis guttata</em>), fyzikální traumata (Köbnerův fenomén), stres, klimatické vlivy a léky (beta-blokátory, lithium, antimalarika, náhlé vysazení celkových kortikoidů).",
                  "pathogenesis": "Základem patogeneze je <strong>imunitně zprostředkovaný zánět</strong> (osa <strong>IL-23 / Th17 / IL-17</strong>). Langerhansovy buňky prezentují neznámý antigen, aktivují T-lymfocyty, které migrují do kůže. Zde uvolňují cytokiny (<strong>TNF-alpha, IL-17, IL-22, IFN-gamma</strong>). Tyto cytokiny stimulují <strong>hyperproliferaci keratinocytů</strong> a poruchu jejich diferenciace. Doba přechodu keratinocytu z bazální do rohové vrstvy se zkracuje z 28 na <strong>4 dny</strong>. IL-8 a další chemokiny způsobují chemotaxi <strong>neutrofilů</strong> do epidermis.",
                  "macroscopy": "Klinické formy a fenomény:<br>1. <strong>Psoriasis vulgaris</strong>: Červené papuly a ložiska kryté stříbřitě lesklými šupinami. Podle velikosti: <em>punctata</em> (bodovitá), <em>guttata</em> (kapkovitá, často po infektu u dětí), <em>nummularis</em> (tvar mince), <em>geographica</em> (mapovitá). Predilekce: lokty, kolena, kštice, křížová krajina (místa vystavená mechanickému tlaku). <em>Psoriasis inversa</em> postihuje intertrigózní oblasti (axily, pod prsy, třísla) a chybí zde šupiny (ložiska jsou hladká, červená).<br>2. <strong>Psoriasis pustulosa</strong>: Výsev sterilních žlutých pustul na silně červené spodině. <em>Forma von Zumbusch</em> je celková, život ohrožující forma s horečkami a sepsí. <em>Forma palmoplantaris</em> postihuje dlaně a plosky.<br>3. <strong>Psoriasis unguium (lupénka nehtů)</strong>: Projevuje se bodovými jamkami (<strong>dolíčkování</strong>), nažloutlými <strong>olejovými skvrnami</strong> pod nehtem a drolením ploténky s <strong>onycholýzou</strong>.<br>4. <strong>Psoriasis arthropathica (psoriatická artritida)</strong>: Zánětlivé postižení kloubů (často distální interfalangeální, mutilující formy). Asociované syndromy: SAPHO, Sonozakiho syndrom.<br><strong>Auspitzův fenomén</strong>: Po seškrábání šupiny se objeví bodovité krvácení ze odhalených kapilár. <strong>Köbnerův fenomén</strong> je pozitivní.",
                  "microscopy": "Histopatologie ukazuje výraznou <strong>akantózu</strong> s pravidelným prodloužením epidermálních lišt (vzhled prstů rukavice), <strong>papilomatózu</strong> s dilatovanými vinutými kapilárami v papilách koria (nad nimi je epidermis ztenčená - podklad Auspitzova fenoménu), <strong>hyperkeratózu s parakeratózou</strong> (zachovalá jádra v rohovině) a ztenčení nebo vymizení stratum granulosum. V horních vrstvách epidermis (subkorneálně) nacházíme nahromadění neutrofilů - <strong>Munroovy mikroabscesy</strong>.",
                  "clinical": "Diagnóza se opírá o typický klinický nález, Auspitzův fenomén a lokalizaci. Potvrdit ji lze biopsií. Léčba:<br>- <strong>Lokální</strong>: Keratolytika (5-10% kyselina salicylová), <strong>lokální kortikosteroidy</strong>, <strong>analogy vitaminu D (kalcitriol)</strong>, lokální retinoidy (tazaroten), cignolín/ditranol (minutová terapie), kamenouhelný dehet (Goeckermanova metoda).<br>- <strong>Fototerapie</strong>: Úzkospektré <strong>UVB 311 nm</strong>, <strong>PUVA</strong> (psoralen + UVA).<br>- <strong>Systémová</strong>: <strong>Retinoidy (acitretin)</strong>, <strong>methotrexát</strong> (zlatý standard u středně těžké/artritidy), <strong>cyklosporin A</strong> (rychlý nástup účinku), a moderní <strong>biologická léčba</strong> (anti-TNF-alpha jako adalimumab, anti-IL-17 jako secukinumab, anti-IL-23 jako ustekinumab). Doporučuje se rotační schéma k minimalizaci toxicity."
            },
            "quiz": [
                  {
                        "question": "Jaký je patofyziologický podklad Auspitzova fenoménu (bodovitého krvácení po seškrábání psoriatické šupiny) na histologické úrovni?",
                        "options": [
                              "Úplné vymizení stratum basale a přímé obnažení podkožního tuku",
                              "Výrazné prodloužení dermálních papil (papilomatóza) s dilatovanými vinutými kapilárami, přičemž epidermis nad těmito papilami je extrémně ztenčená, takže po odstranění rohového krytu dojde k snadnému natržení cévní stěny",
                              "Akantolýza keratinocytů v horních vrstvách pokožky s průnikem eozinofilů",
                              "Depozice IgA imunokomplexů v cévách koria vedoucí k leukocytoklastické vaskulitidě"
                        ],
                        "correct": 1,
                        "explanation": "Histologickým podkladem lupénky je papilomatóza (prodloužení a ztenčení dermálních papil, které obsahují rozšířené kapiláry) doprovázená ztenčením epidermis nad těmito papilami (suprapapilární ztenčení). Při seškrabování šupiny (která je parakeratotická a snadno se drolí) dojde k odstranění této tenké epidermální vrstvy a mechanickému poškození kapilárních kliček v papilách, což se klinicky projeví bodovitým krvácením (Auspitzův fenomén)."
                  },
                  {
                        "question": "Která systémová léčba psoriázy je spojena s nejvyšším rizikem teratogenity, vyžaduje přísnou antikoncepci během léčby a u žen ve fertilním věku ještě 3 roky po jejím ukončení?",
                        "options": [
                              "Methotrexát",
                              "Cyklosporin A",
                              "Acitretin (systémový retinoid)",
                              "Adalimumab (biologická léčba)"
                        ],
                        "correct": 2,
                        "explanation": "Acitretin je systémový retinoid používaný k léčbě těžké psoriázy. Má extrémně vysoký teratogenní potenciál. Vzhledem k tomu, že se v těle může za přítomnosti alkoholu reesterifikovat na etretinát, který se ukládá v tukové tkáni a má velmi dlouhý poločas eliminace, je nutné, aby ženy ve fertilním věku dodržovaly přísnou antikoncepci během léčby a po dobu celých 3 let po jejím ukončení."
                  }
            ]
      },
      {
            "id": "derma-39",
            "title": "Dyskeratosis follicularis (morbus Darier)",
            "section": "Speciální dermatologie (Specka)",
            "keywords": [
                  "morbus Darier",
                  "ATP2A2",
                  "dyskeratóza",
                  "akantolýza",
                  "corps ronds",
                  "retinoidy"
            ],
            "content": {
                  "definition": "<strong>Dyskeratosis follicularis (morbus Darier)</strong> je vzácné, autozomálně dominantně dědičné onemocnění charakterizované poruchou keratinizace (rohovění) kůže a sliznic a ztrátou soudržnosti epidermálních buněk. Patří do skupiny tzv. akantolytických dyskeratóz.",
                  "etiology": "Příčinou je mutace genu <strong>ATP2A2</strong> lokalizovaného na chromozomu <strong>12q23-q24.1</strong>. Tento gen kóduje kalciovou pumpu <strong>SERCA2</strong> (sarco/endoplasmic reticulum Ca2+-ATPase) v endoplazmatickém retikulu keratinocytů. U mnoha pacientů jde o nově vzniklé mutace (negativní rodinná anamnéza). Exacerbaci onemocnění vyvolává UV záření, mechanické tření, zvýšené pocení, teplo a vlhko.",
                  "pathogenesis": "Defekt pumpy SERCA2 vede k narušení homeostázy vápníku (Ca2+) v cytoplazmě keratinocytů. Vápník je nezbytný pro správnou montáž a funkci desmosomů a pro diferenciaci buněk. Narušení desmosomů vede ke ztrátě mezibuněčné adheze (<strong>akantolýze</strong>) a předčasné, abnormální keratinizaci buněk (<strong>dyskeratóze</strong>).",
                  "macroscopy": "První projevy se obvykle objevují v pubertě. Charakteristický je výsev svědivých, mastných, <strong>špinavě hnědých hyperkeratotických papul</strong> velikosti špendlíkové hlavičky v seboroických zónách (střed hrudníku, záda, obličej, kštice) a v intertrigách (axily, třísla). V místech zápařky ložiska macerují, sekundárně se infikují a <strong>nepříjemně páchnou</strong>. Na hřbetech rukou se tvoří ploché bradavicovité papuly (<em>acrokeratosis verruciformis</em>). Dlaně a plosky vykazují drobné <strong>bodovité hyperkeratózy (jamky)</strong>. Na sliznici dutiny ústní (tvrdé patro) vznikají bělavé papulky vzhledu <strong>dlažebních kostek</strong>. Nehty jsou lomivé, podélně vroubkované s červenobílými pruhy a zářezy na volném okraji.",
                  "microscopy": "Histopatologický nález je vysoce specifický: ložisková suprabazální <strong>akantolýza</strong> vedoucí ke vzniku suprabazálních štěrbin (lakun). V epidermis nacházíme dyskeratotické buňky dvou typů:<br>1. <strong>Corps ronds (kulatá tělíska)</strong>: Velké buňky ve stratum spinosum a granulosum s bazofilním svraštělým jádrem a jasným eozinofilním dvorem (halo) v cytoplazmě.<br>2. <strong>Grains (zrna)</strong>: Menší, protáhlé, silně eozinofilní buňky v rohově vrstvě připomínající ztluštělá jádra.",
                  "clinical": "Diagnóza se stanovuje na základě typického klinického obrazu (seboroická distribuce, vzhled papul, změny nehtů) a je potvrzena kožní biopsií. Diferenciální diagnostika zahrnuje seboroickou dermatitidu, morbus Hailey-Hailey a verukózní névus. V léčbě jsou nejúčinnější <strong>systémové retinoidy (acitretin)</strong>, které normalizují keratinizaci. Lokálně se aplikují emoliencia, keratolytika a u akutních exacerbací lokální kortikosteroidy. Při bakteriální superinfekci se podávají celkově i lokálně antibiotika. Důležitá je ochrana před sluncem a hygienická opatření."
            },
            "quiz": [
                  {
                        "question": "Který genetický a molekulární defekt je příčinou vzniku morbus Darier (dyskeratosis follicularis)?",
                        "options": [
                              "Mutace genu pro filaggrin vedoucí k poruše hydratace rohové vrstvy",
                              "Mutace genu ATP2A2 na chromozomu 12q, který kóduje kalciovou pumpu SERCA2 v endoplazmatickém retikulu, což vede k narušení desmosomálních spojení a abnormálnímu rohovění",
                              "Mutace genu pro kolagen VII v oblasti bazální membrány",
                              "Autoimunitní destrukce desmogleinu 1 protilátkami IgG"
                        ],
                        "correct": 1,
                        "explanation": "Morbus Darier je autozomálně dominantní onemocnění způsobené mutací genu ATP2A2. Tento gen kóduje Ca2+ ATPázu sarkoplazmatického/endoplazmatického retikula (SERCA2). Defekt této pumpy vede k poruše intracelulární signalizace vápníku, což znemožňuje správnou montáž desmosomů (akantolýza) a narušuje zrání keratinocytů (dyskeratóza)."
                  },
                  {
                        "question": "Jak se v histologickém popisu morbus Darier označují dva typické typy dyskeratotických (abnormálně rohovějících) buněk v epidermis?",
                        "options": [
                              "Tzanckovy buňky a koilocyty",
                              "Civatteova tělíska a melanofágy",
                              "Corps ronds (kulatá tělíska s pyknotickým jádrem a světelným dvorem) a Grains (drobná protáhlá eozinofilní zrna v rohovině)",
                              "Aschoffovy buňky a Aničkovovy buňky"
                        ],
                        "correct": 2,
                        "explanation": "Histologickými markery morbus Darier jsou 'corps ronds' (kulaté dyskeratotické buňky v hlubších vrstvách epidermis s pyknotickým jádrem obklopeným světlou zónou cytoplazmy) a 'grains' (parakeratotické buňky v stratum corneum, které jsou tmavé, protáhlé a připomínají zrna obilí)."
                  }
            ]
      },
      {
            "id": "derma-40",
            "title": "Autoimunitní bulózní dermatitida – skupina pemphigu",
            "section": "Speciální dermatologie (Specka)",
            "keywords": [
                  "pemphigus vulgaris",
                  "akantolýza",
                  "desmoglein 3",
                  "desmoglein 1",
                  "Nikolského fenomén",
                  "Tzanckův test",
                  "intraepidermální puchýř"
            ],
            "content": {
                  "definition": "Skupina <strong>závažných autoimunitních dermatitid</strong> kůže a sliznic charakterizovaných tvorbou intraepidermálních puchýřů na podkladě <strong>akantolýzy</strong> (ztráty mezibuněčné adheze keratinocytů).",
                  "etiology": "Autoimunitní onemocnění neznámé etiologie (idiopatické), u některých pacientů vykazuje souvislost s UV zářením, radiací či požitím některých léků (např. <strong>penicilamin</strong>, <strong>propranolol</strong>). Genetická predispozice hraje roli.",
                  "pathogenesis": "Tvorba cirkulujících autoprotilátek (nejčastěji třídy <strong>IgG</strong>) namířených proti desmozomálním adhezivním proteinům – <strong>desmogleinu 3</strong> (převažuje u slizničního postižení) a <strong>desmogleinu 1</strong> (převažuje u kožního postižení). Vazba protilátek indukuje lokální aktivaci proteolytických enzymů a sekreci cytokinů (TNF-α, IL-1), což vede k lýze desmozomálních spojů (<strong>akantolýza</strong>) a vzniku intraepidermálního rozpadu.",
                  "macroscopy": "Tvorba plihých, snadno praskajících puchýřů s čirým či později zakaleným obsahem na normální či lehce erytematózní kůži a sliznicích. Po prasknutí vznikají bolestivé, secernující eroze kryté krustami, které mají tendenci splývat. Typický je zápach z důvodu sekundární bakteriální kolonizace. Hojí se pomalu z centra, nezanechávají jizvy, pouze pigmentové změny.",
                  "microscopy": "<strong>Intraepidermální suprabazální akantolytický puchýř</strong>. Dochází k rozvolnění vazeb mezi keratinocyty v suprabazální vrstvě, bazální vrstva zůstává přichycena k bazální membráně (tzv. vzhled <strong>náhrobních kamenů</strong>). V časných fázích se vyskytuje <strong>eozinofilní spongióza</strong>. Přímá imunofluorescence (DIF) prokazuje <strong>intercelulární síťovitá depozita IgG</strong> (a u sliznic případně IgA) a komplementu v celé epidermis.",
                  "clinical": "<strong>Pemphigus vulgaris</strong> (nejčastější forma) postihuje osoby mezi 30.–60. rokem věku. První projevy jsou velmi často na sliznici dutiny ústní (bolestivé eroze simulující afty, ztěžující příjem potravy), teprve s odstupem se objevuje generalizovaný výsev na kůži. <strong>Přímý Nikolského fenomén</strong> je pozitivní (tlakem na zdravou kůži v okolí puchýře dojde k jejímu stržení jako <i>slupka broskve</i>). <strong>Nepřímý Nikolského fenomén</strong> je také pozitivní (tlakem na puchýř se tekutina šíří laterálně). Další formy: <i>pemphigus vegetans</i> (hyperkeratotické vegetace v intertrigách), <i>pemphigus foliaceus</i> (subkorneální akantolýza, vlhké krusty na seboroické lokalizaci, chybí postižení sliznic), <i>pemphigus erythematosus</i> (seboroická lokalizace diskoidních lézí), <i>paraneoplastický pemphigus</i> (asociace s lymfomy/leukémiemi, postižení plic)."
            },
            "quiz": [
                  {
                        "question": "Který z následujících imunopatologických nálezů je typický pro pemphigus vulgaris?",
                        "options": [
                              "Lineární depozice IgA v dermoepidermální junkci podél bazální membrány",
                              "Granulární depozice IgA na vrcholcích koriálních papil podél BM",
                              "Lineární depozice IgG podél bazální membrány",
                              "Intercelulární síťovitá depozita IgG a C3 komplementu v epidermis"
                        ],
                        "correct": 3,
                        "explanation": "Pemphigus vulgaris je charakterizován intraepidermální akantolýzou způsobenou protilátkami proti desmogleinům, což se v přímé imunofluorescenci zobrazí jako intercelulární síťovitá depozice IgG v epidermis. Lineární depozice podél bazální membrány je typická pro pemfigoid, zatímco IgA depozita jsou charakteristická pro dermatitis herpetiformis (granulární v papilách) a lineární IgA dermatózu (lineární podél BM)."
                  },
                  {
                        "question": "Které z následujících tvrzení o pemphigus vulgaris je správné?",
                        "options": [
                              "Puchýře jsou subepidermální, napjaté a Nikolského fenomén je negativní.",
                              "Puchýře jsou intraepidermální, sliznice úst bývá ušetřena a hojí se hlubokými jizvami.",
                              "Puchýře jsou intraepidermální, plihé, Nikolského fenomén je pozitivní a postižení sliznic je častým prvním projevem.",
                              "Jedná se o benigní onemocnění postihující převážně děti do 5 let věku."
                        ],
                        "correct": 2,
                        "explanation": "Pemphigus vulgaris se typicky manifestuje plihými intraepidermálními puchýři na kůži a sliznicích (sliznice DÚ is často postižena jako první). Nikolského fenomén je pozitivní. Hojení probíhá bez jizvení. Je to závažné, potenciálně život ohrožující onemocnění postihující střední věkovou skupinu (30–60 let)."
                  }
            ]
      },
      {
            "id": "derma-41",
            "title": "Autoimunitní bulózní dermatitida – skupina pemphigoidu",
            "section": "Speciální dermatologie (Specka)",
            "keywords": [
                  "pemphigoid bullosus",
                  "subepidermální puchýř",
                  "hemidesmozomy",
                  "BP180",
                  "BP230",
                  "Nikolského fenomén negativní"
            ],
            "content": {
                  "definition": "Skupina chronických autoimunitních onemocnění kůže a sliznic charakterizovaných tvorbou <strong>subepidermálních puchýřů</strong> v důsledku autoimunitního poškození struktur <strong>dermoepidermální junkce</strong> (hemidesmozomů).",
                  "etiology": "Autoimunitní charakter s tvorbou autoprotilátek proti proteinům bazální membrány. Vzniká převážně u osob <strong>starších 60 let</strong>. Může být provokován některými léky, fyzikálními vlivy nebo vzácně doprovázet maligní novotvary jako paraneoplazie.",
                  "pathogenesis": "Tvorba autoprotilátek (hlavně <strong>IgG</strong>) proti hemidesmozomálním proteinům <strong>BP180</strong> (transmembránový antigen, NC16A doména) a/nebo <strong>BP230</strong> (intracelulární antigen). Vazba protilátek aktivuje komplement klasickou cestou, což vede k uvolnění chemoatraktantů, migraci eozinofilů a neutrofilů a uvolnění proteolytických enzymů, které zničí spojení mezi epidermis a dermis v lamina lucida.",
                  "macroscopy": "Výsev <strong>velkých, napjatých puchýřů</strong> s čirým či hemoragickým obsahem. Tyto puchýře mají pevnou krytbu a <strong>nepráskají snadno</strong>. Vznikají nejčastěji na erytematózní, urtikariální spodině nebo na klinicky normální kůži. Po prasknutí vznikají eroze kryté krustami, které se hojí bez jizev, často s tvorbou mílií.",
                  "microscopy": "<strong>Subepidermální puchýř</strong> s lokalizací v lamina lucida bazální membrány. V koriu je přítomen perivaskulární zánětlivý infiltrát s vysokým podílem <strong>eozinofilních granulocytů</strong>. Přímá imunofluorescence (DIF) prokazuje <strong>lineární depozita IgG a C3 komplementu podél bazální membrány</strong>.",
                  "clinical": "<strong>Pemphigoid bullosus</strong> začíná často nespecifickým prodromálním stadiem se silným svěděním a prchavými urtikariálními ložisky. Následně se vysévají pevné napjaté puchýře, zejména na ohybačích končetin a trupu, intertriginózně. <strong>Nikolského fenomén je negativní</strong>. Kštice, obličej a sliznice DÚ jsou postiženy vzácně (na rozdíl od pemfigu). Varianty: <i>Benigní jizvící pemfigoid</i> (<i>pemphigoid cicatricans</i>) – postihuje převážně sliznice (oči, ústa, anogenitál), hojí se svrašťujícími jizvami (hrozí slepota, stenózy jícnu); <i>Pemphigoid gestationis</i> – těhotenská forma (2.–3. trimestr), svědivé pupeny a puchýře kolem pupku, spontánně mizí po porodu."
            },
            "quiz": [
                  {
                        "question": "Jaký histopatologický a imunofluorescenční nález je typický pro pemphigoid bullosus?",
                        "options": [
                              "Intraepidermální puchýř a síťovitá intercelulární fluorescence IgG v epidermis",
                              "Subepidermální puchýř a lineární fluorescence IgG a C3 komplementu podél bazální membrány",
                              "Subepidermální puchýř a granulární fluorescence IgA v vrcholcích papil",
                              "Subkorneální pustula s depozity IgA v stratum corneum"
                        ],
                        "correct": 1,
                        "explanation": "U pemphigoid bullosus dochází k odloučení celé epidermis od dermis (subepidermální puchýř) a protilátky jsou namířeny proti hemidesmozomům BM, což se v přímé imunofluorescenci projeví jako lineární depozita IgG a C3 podél junkční zóny."
                  },
                  {
                        "question": "Které tvrzení správně popisuje klinický rozdíl mezi pemphigus vulgaris a pemphigoid bullosus?",
                        "options": [
                              "Pemfigus má napjaté puchýře s negativním Nikolského fenoménem, zatímco pemfigoid má plihé puchýře s pozitivním Nikolského fenoménem.",
                              "Pemfigus postihuje starší pacienty nad 80 let, zatímco pemfigoid typicky postihuje mladé dospělé.",
                              "Pemfigus má plihé puchýře, pozitivní Nikolského fenomén and časté postižení sliznice DÚ, zatímco pemfigoid má napjaté puchýře, negativní Nikolského fenomén a sliznice postihuje vzácně.",
                              "Pemfigus se hojí hlubokými jizvami a keloidy, zatímco pemfigoid se nikdy nezhojí."
                        ],
                        "correct": 2,
                        "explanation": "Pemphigus vulgaris se prezentuje plihými puchýři na normální kůži, které snadno praskají (pozitivní Nikolského fenomén), a téměř vždy postihuje sliznici DÚ. Pemphigoid bullosus se vyskytuje spíše u starších pacientů, má napjaté puchýře na erytematózní spodině, které nepraskají snadno (negativní Nikolského fenomén), a sliznice šetří."
                  }
            ]
      },
      {
            "id": "derma-42",
            "title": "Autoimunitní bulózní dermatózy – dermatitis herpetiformis Duhring",
            "section": "Speciální dermatologie (Specka)",
            "keywords": [
                  "dermatitis herpetiformis",
                  "Duhring",
                  "lepek",
                  "glutensenzitivní enteropatie",
                  "granulární IgA",
                  "dapson"
            ],
            "content": {
                  "definition": "Chronická, intenzivně svědivá papulovezikulózní autoimunitní dermatitida sdružená s <strong>glutensenzitivní enteropatií</strong> (celiakií), charakterizovaná granulárním ukládáním <strong>IgA</strong> protilátek v dermálních papilách.",
                  "etiology": "Onemocnění je způsobeno geneticky podmíněnou <strong>abnormální imunitní odpovědí na gluten (lepek)</strong> v potravě (asociace s HLA-DQ2 a HLA-DQ8). Gliadin z lepku slouží jako substrát pro tkáňovou transglutaminázu.",
                  "pathogenesis": "V tenkém střevě dochází k tvorbě IgA protilátek proti gliadinu a <strong>tkáňové transglutamináze (tTG)</strong>. Tyto protilátky zkříženě reagují s <strong>epidermální transglutaminázou (eTG)</strong> v kůži. Imunokomplexy IgA se ukládají granulárně na vrcholcích koriálních papil podél bazální membrány. Aktivuje se komplement, jsou uvolněny chemotaktické faktory (IL-8), což vede k migraci neutrofilů a eozinofilů. Uvolněné proteázy způsobí mikroabscesy a rozpad spojení epidermis s koriem.",
                  "macroscopy": "Typický je <strong>polymorfní výsev</strong> sestávající z drobných erytematózních makul, urtikariálních pupenů a malých, napjatých puchýřků uspořádaných do <strong>herpetiformních (skupinových) konfigurací</strong>. V důsledku úporného svědění jsou puchýřky rychle rozškrábány, takže v klinickém obraze často dominují exkoriace a krusty.",
                  "microscopy": "<strong>Subepidermální puchýř</strong> s přítomností <strong>neutrofilních mikroabscesů</strong> na vrcholcích koriálních papil. Přímá imunofluorescence (DIF) prokazuje <strong>granulární depozita IgA</strong> na vrcholcích koriálních papil.",
                  "clinical": "Onemocnění začíná nejčastěji mezi 20.–40. rokem věku, s mírnou převahou u mužů. Léze se vyskytují symetricky na <strong>extenzorových plochách končetin</strong> (lokty, kolena), v sakrální oblasti, na hýždích a ve kštici. Sliznice jsou postiženy vzácně. Provokujícím faktorem exacerbací je lepek v potravě a exogenní či endogenní přísun <strong>jódu</strong>. Ačkoliv mají všichni pacienti glutenovou enteropatii (celiakii), gastrointestinální symptomy (průjmy, malabsorpce) jsou klinicky vyjádřeny jen u 10–20 % z nich. Terapeuticky je klíčová přísná celoživotní <strong>bezlepková dieta</strong> a podávání <strong>dapsonu</strong> (sulfon), který rychle potlačuje kožní symptomy. Další jednotka: <i>Lineární IgA dermatóza</i> (nejčastější autoimunitní puchýřnatá choroba dětského věku, bez glutenové enteropatie, lineární IgA v BM)."
            },
            "quiz": [
                  {
                        "question": "Jaká imunopatologická charakteristika je klíčová pro diagnózu dermatitis herpetiformis Duhring?",
                        "options": [
                              "Lineární depozice IgG podél bazální membrány",
                              "Granulární depozita IgA v koriálních papilách podél junkční zóny",
                              "Intercelulární depozita IgA v horních vrstvách epidermis",
                              "Imunokomplexy IgG a IgM v stěnách povrchových cév"
                        ],
                        "correct": 1,
                        "explanation": "Pro dermatitis herpetiformis Duhring je patognomický nález granulárních depozit IgA lokalizovaných v dermálních (koriálních) papilách, zejména na jejich vrcholcích."
                  },
                  {
                        "question": "Které z následujících opatření a léků tvoří základní léčbu dermatitis herpetiformis Duhring?",
                        "options": [
                              "Systémová léčba kortikosteroidy a dieta bohatá na mořské plody",
                              "Přísná bezlepková dieta a systémové podávání dapsonu",
                              "Fototerapie UVB a lokální aplikace retinoidů",
                              "Eliminace histaminu a dlouhodobé podávání cyklosporinu A"
                        ],
                        "correct": 1,
                        "explanation": "Základem léčby je přísná celoživotní bezlepková dieta (řeší střevní patologii a dlouhodobě i kožní projevy) a dapson (sulfon), který má vynikající a rychlý protizánětlivý účinek na kožní léze (zabraňuje migraci neutrofilů)."
                  }
            ]
      },
      {
            "id": "derma-43",
            "title": "Lupus erythematodes",
            "section": "Speciální dermatologie (Specka)",
            "keywords": [
                  "lupus erythematodes",
                  "SLE",
                  "CLE",
                  "motýlovitý exantém",
                  "lupus band test",
                  "antimalarika",
                  "fotosenzitivita"
            ],
            "content": {
                  "definition": "Chronické autoimunitní zánětlivé onemocnění pojiva s variabilním klinickým obrazem, které může postihovat pouze kůži (<strong>kožní formy - CLE</strong>) nebo se projevovat multiorgánovým poškozením s přítomností širokého spektra autoprotilátek (<strong>systémový lupus - SLE</strong>).",
                  "etiology": "Multifaktoriální etiopatogeneze zahrnující genetické predispozice (asociace s HLA), hormonální vlivy (převaha u žen ve fertilním věku), expozici <strong>UV záření</strong> (spouštěcí a zhoršující faktor) a vliv některých léků vyvolávajících léky indukovaný lupus (např. hydralazin, propranolol, penicilamin).",
                  "pathogenesis": "Porucha imunitní regulace s hyperaktivitou B-lymfocytů a tvorbou antinukleárních protilátek (<strong>ANA</strong>, např. anti-dsDNA u SLE, anti-Ro/SSA u subakutního a neonatálního LE). Tkáňové poškození je způsobeno ukládáním imunokomplexů (reakce III. typu) v cévách, bazální membráně a glomerulů, a buněčnou cytotoxicitou. UV záření indukuje apoptózu keratinocytů a uvolnění jaderných antigenů.",
                  "macroscopy": "<strong>CLE chronicus (diskoidní LE - DLE)</strong>: Ostře ohraničená červená infiltrovaná ložiska, která se šíří periferně, pokrývají se drsnou šupinou. Odtržení šupiny je bolestivé a odhaluje kónické rohovinové čepy ucpávající folikuly (<strong>fenomén kartáčku</strong>). Hojí se jizvením s teleangiektáziemi, depigmentacemi a atrofií (ve kštici jizevnatá alopecie). <strong>SLE</strong>: <strong>Motýlovitý exantém</strong> – prchavý symetrický erytém na tvářích a kořeni nosu (vynechává nazolabiální rýhy). Dále erytémy bříšek prstů, nehtových valů, livedo reticularis, purpura. <strong>CLE subacutus (SCLE)</strong>: Nejizvící anulární nebo papuloskvamózní léze v solární lokalizaci.",
                  "microscopy": "Vakuolární degenerace bazální vrstvy epidermis, edém koria, periadnexální a perivaskulární lymfocytární infiltráty. Dochází k ztluštění bazální membrány a atrofii epidermis. Přímá imunofluorescence kůže (<strong>lupus band test</strong>) prokazuje <strong>lineární granulární depozita IgG a C3</strong> podél dermoepidermální junkce (u SLE v lézi i ve zdravé kůži, u DLE pouze v lézi).",
                  "clinical": "SLE postihuje převážně mladé ženy. Doprovázeno systémovými příznaky (horečka, únava, hubnutí, artralgie, nefritida, serozitida, postižení CNS). Antifosfolipidový syndrom u SLE způsobuje trombózy a aborty. Neonatální LE je spojen s transplacentárním přenosem anti-Ro/SSA protilátek od matky a může způsobit kongenitální AV blok u plodu. Terapie: Důsledná fotoprotekce, lokální kortikosteroidy, systémově <strong>antimalarika (chlorochin, hydroxychlorochin)</strong>, u SLE systémové kortikosteroidy a imunosupresiva. Zvláštní formy: <i>lupus pernio</i> (akrálně, připomíná oznobeniny), <i>lupus panniculitis</i> (podkožní noduly, hojení vkleslými jizvami)."
            },
            "quiz": [
                  {
                        "question": "Co je to lupus band test a jaké jsou jeho nálezy u systémového a chronického diskoidního lupusu?",
                        "options": [
                              "Test zjišťující kožní hyperreaktivitu na UV záření, pozitivní pouze u systémové formy",
                              "Průkaz depozit imunoglobulinů a komplementu podél BM kůže pomocí DIF; u SLE je pozitivní v lézi i zdravé kůži, u DLE pouze v lézi",
                              "Histologické stanovení tloušťky kolagenních vláken v retikulárním koriu, pozitivní u DLE",
                              "Sérologický test na průkaz antikardiolipinových protilátek"
                        ],
                        "correct": 1,
                        "explanation": "Lupus band test (LBT) je vyšetření přímou imunofluorescencí z bioptického vzorku kůže. Prokazuje přítomnost imunodepozit (IgG, IgM, C3) podél dermoepidermální junkční zóny v podobě zářícího pruhu (band). U SLE je tento test pozitivní jak v oblasti lézí, tak ve slunečně exponované i neexponované zdravé kůži. U DLE (chronického diskoidního lupusu) je pozitivní výhradně v kožní lézi."
                  },
                  {
                        "question": "Který z následujících klinických a laboratorních nálezů je typický pro subakutní kožní lupus erythematodes (SCLE)?",
                        "options": [
                              "Hluboké jizvící ulcerace na bérci a pozitivita anti-dsDNA protilátek",
                              "Nejizvící anulární nebo papuloskvamózní léze v solární lokalizaci a vysoká asociace s protilátkami anti-Ro/SSA",
                              "Kalcifikace v podkoží nad klouby a přítomnost anti-Scl-70 protilátek",
                              "Gottronovy papuly na hřbetech prstů a heliotropní exantém víček"
                        ],
                        "correct": 1,
                        "explanation": "SCLE je charakterizován nejizvícími anulárními, polycyklickými nebo psoriaziformními lézemi na místech vystavených slunci. V laboratoři je typická silná asociace s protilátkami anti-Ro/SSA (až u 90 % pacientů)."
                  }
            ]
      },
      {
            "id": "derma-44",
            "title": "Dermatomyositis (DM)",
            "section": "Speciální dermatologie (Specka)",
            "keywords": [
                  "dermatomyositis",
                  "heliotropní erytém",
                  "Gottronovy papuly",
                  "anti-Jo-1",
                  "anti-Mi-2",
                  "myozitida",
                  "paraneoplazie"
            ],
            "content": {
                  "definition": "Získané chronické autoimunitní onemocnění postihující <strong>příčně pruhované svalstvo</strong> a <strong>kůži</strong>, charakterizované symetrickou proximální svalovou slabostí a specifickými kožními lézemi.",
                  "etiology": "Etiologie je neznámá. Předpokládá se spuštění autoimunitního procesu zevním faktorem (např. virovou infekcí) u geneticky predisponovaného jedince. Onemocnění má <strong>silnou asociaci s maligními nádory</strong> u dospělých (paraneoplastická forma – u 15–20 % pacientů).",
                  "pathogenesis": "Imunitní reakce (buněčná i protilátková) namířená proti svalovým a kožním strukturám. Dochází k mikrovaskulárnímu poškození svalů a dermis, aktivaci komplementu a ukládání membrán-atakujícího komplexu (MAC) v cévách. V séru se vyskytují myozitidové specifické protilátky: <strong>anti-Mi-2</strong> (asociované s typickým kožním postižením) a <strong>anti-Jo-1</strong> (antisyntetázové protilátky, asociované s plicní fibrózou a syndromem 'řemeslnických rukou').",
                  "macroscopy": "Typické kožní změny zahrnují <strong>heliotropní erytém</strong> (lividní až červenofialový otok a zarudnutí očních víček) a <strong>Gottronovy papuly</strong> (ploché lividní papuly nad drobnými klouby hřbetů rukou, lokty a koleny). Kůže nehtových valů vykazuje bolestivý erytém a <strong>teleangiektázie</strong>. Dále se vyskytuje plošný erytém ve tvaru V ve výstřihu, na ramenech (tzv. <strong>šálový příznak</strong>).",
                  "microscopy": "V kůži je přítomna vakuolární degenerace bazální vrstvy, atrofie epidermis, edém koria, ektatické kapiláry a ukládání mucinu v dermis. Ve svalech (svalová biopsie) nacházíme perifascikulární atrofii svalových vláken, nekrózu a regeneraci vláken s perivaskulárním lymfocytárním infiltrátem.",
                  "clinical": "Svalová slabost se projevuje symetricky u <strong>proximálních svalových skupin</strong> končetin a trupu (obtíže při stoupání do schodů, vstávání ze židle, česání). U těžkého průběhu postižení faryngeálního svalstva vede k <strong>dysfagii</strong> (poruchám polykání) a dysfonii. U dětí je typický rozvoj časných kontraktur a <strong>kalcifikací</strong> v kůži a podkoží. Může být postiženo srdce a plíce (intersticiální plicní fibróza). Diagnóza se opírá o zvýšené svalové enzymy (<strong>kreatinkináza - CK</strong>, aldoláza, myoglobin v séru/moči), patologické EMG, MRI svalů a svalovou biopsii. Léčba: Celkové kortikosteroidy v kombinaci s imunosupresivy (např. <strong>metotrexát</strong>). Amyopatická dermatomyozitida se projevuje pouze kožními lézemi bez slabosti."
            },
            "quiz": [
                  {
                        "question": "Které z následujících kožních projevů jsou patognomické (vysoce specifické) pro dermatomyositidu?",
                        "options": [
                              "Motýlovitý exantém obličeje a livedo reticularis",
                              "Heliotropní erytém víček a Gottronovy papuly nad klouby prstů",
                              "Porcelánově bílé atrofické jizvy s teleangiektáziemi",
                              "Symetrická ložiska tuhé neposuvné kůže s fialovým lemem"
                        ],
                        "correct": 1,
                        "explanation": "Heliotropní erytém (lividní otok a zarudnutí horních víček) and Gottronovy papuly (červenofialové papulózní léze nad extenzorovými plochami drobných kloubů rukou) jsou vysoce specifické kožní známky dermatomyositidy."
                  },
                  {
                        "question": "Které z následujících tvrzení ohledně asociace dermatomyositidy s malignitami a laboratorní diagnostiky je pravdivé?",
                        "options": [
                              "Dermatomyositis nikdy nesouvisí s maligními tumory a svalové enzymy v séru jsou v normě.",
                              "Až u 15-20 % dospělých pacientů s DM se vyskytuje asociovaný maligní nádor a v séru je zvýšená hladina kreatinkinázy (CK) a aldolázy.",
                              "DM je benigní dětské onemocnění s typickou pozitivitou antikardiolipinových protilátek.",
                              "Jediným diagnostickým kritériem pro DM je pozitivní Perthesův test."
                        ],
                        "correct": 1,
                        "explanation": "DM má u dospělých (zejména starších osob) významnou souvislost s vnitřními malignitami (plíce, vaječníky, prs, GIT) jako paraneoplazie. Svalové poškození vede k vyplavení svalových enzymů do oběhu, proto nacházíme zvýšené hladiny kreatinkinázy (CK), aldolázy, LDH a aspartátaminotransferázy (AST)."
                  }
            ]
      },
      {
            "id": "derma-45",
            "title": "Sklerodermie",
            "section": "Speciální dermatologie (Specka)",
            "keywords": [
                  "sklerodermie",
                  "morfea",
                  "systémová sklerodermie",
                  "sklerodaktylie",
                  "Raynaudův fenomén",
                  "CREST",
                  "anti-Scl-70"
            ],
            "content": {
                  "definition": "Heterogenní skupina autoimunitních onemocnění charakterizovaných fibrózou, indurovaným ztuhnutím kůže a případně vnitřních orgánů a vaskulárními změnami. Dělí se na <strong>lokalizovanou sklerodermii (morfea)</strong> a <strong>systémovou sklerodermii</strong>.",
                  "etiology": "Etiologie je neznámá. Předpokládá se kombinace genetických predispozic (asociace s HLA), poruch humorální a buněčné imunity, vaskulárního poškození a abnormálního metabolismu kolagenu s hyperaktivitou fibroblastů. U morfee se uvažuje o roli lokálního traumatu či infekce (Borrelia burgdorferi).",
                  "pathogenesis": "Primární poškození endotelu vede k cévní obliteraci a hypoxii tkání. Dochází k aktivaci T-lymfocytů a makrofágů, které produkují profibrotické cytokiny (TGF-β, IL-4). Tyto stimulují fibroblasty k nadměrné tvorbě kolagenu typu I a III, což vede k progredující sklerotizaci a fibróze dermis, podkoží a stěn vnitřních orgánů. V séru nacházíme specifické autoprotilátky: <strong>anticentromerové</strong> (typické pro limitovanou formu a CREST) a <strong>anti-Scl-70</strong> (proti topoizomeráze I, typické pro difuzní formu a plicní fibrózu).",
                  "macroscopy": "<strong>Morfea (ložisková)</strong>: Začíná červenofialovými skvrnami, které se mění v tuhá, hladká, lesklá nažloutlá/slonovinově bílá ložiska s fialovým lemem (<strong>lilac ring</strong> – známka aktivity). V atrofickém stadiu indurace mizí, kůže je vkleslá a pigmentovaná. <strong>Systémová sklerodermie</strong>: Kůže prstů rukou a obličeje je tuhá, neposuvná, nelze ji zřasit. Dochází k deformitám – <strong>sklerodaktylie</strong> (semiflexe, drápovitá ruka) a zkrácení prstů (akroosteolýza). Obličej nabývá maskovitého vzhledu s úzkými rty, radiálními rýhami kolem úst (<strong>tabatěrková ústa</strong>) a zúženým nosem.",
                  "microscopy": "V histologickém obraze dominuje výrazné ztluštění kolagenních snopců v retikulárním koriu, které jsou uspořádány paralelně s povrchem kůže. Dochází k atrofii adnex (vlasové folikuly, mazové žlázy vymizí, potní žlázy jsou zatlačeny sklerotickým kolagenem vzhůru). Stěny dermálních cév vykazují fibrózní ztluštění a zúžení lumen.",
                  "clinical": "<strong>Sclerodermia circumscripta (morfea)</strong>: Nepostihuje vnitřní orgány, chybí Raynaudův fenomén. Varianty: ložisková, lineární (u dětí, pruhy na končetinách, kontraktury, poruchy růstu; na čele jako <i>en coup de sabre</i> s hemiatrofií obličeje - Parry-Rombergův syndrom), morphea profunda (hluboké indurace podkoží), fasciitis eosinophilica (ztuhnutí končetin s eozinofilií). <strong>Systémová sklerodermie</strong>: <i>Limitovaná forma (acrosclerosis)</i>: Postihuje kůži akrálně (prsty, obličej), má pomalejší průběh. Patří sem <strong>CREST syndrom</strong> (Kalcinoza, Raynaudův fenomén, Ezofageální dysfunkce, Sklerodaktylie, Teleangiektázie). <i>Difuzní forma</i>: Rychlý rozvoj tuhé kůže na končetinách a trupu, časné závažné orgánové postižení: hypomobilita jícnu, plicní fibróza (námahová dyspnoe), fibróza myokardu a renální krize. <i>Raynaudův fenomén</i>: Záchvatovité zbělení prstů (ischemická fáze) následované zmodráním a zčervenáním v chladu či stresu (u 90 % systémové sklerodermie)."
            },
            "quiz": [
                  {
                        "question": "Který z následujících klinických syndromů představuje limitovanou formu systémové sklerodermie a s jakými protilátkami je nejčastěji asociován?",
                        "options": [
                              "Löfgrenův syndrom a protilátky anti-dsDNA",
                              "CREST syndrom a anticentromerové protilátky",
                              "Parry-Rombergův syndrom a anti-Jo-1 protilátky",
                              "Stevens-Johnsonův syndrom a protilátky anti-Mi-2"
                        ],
                        "correct": 1,
                        "explanation": "CREST syndrom (Calcinosis, Raynaud, Esophagus, Sclerodactyly, Telangiectasia) je klasická limitovaná forma systémové sklerodermie. Je vysoce asociován s přítomností anticentromerových protilátek (ACA)."
                  },
                  {
                        "question": "Které z následujících projevů a vlastností správně odlišují ložiskovou sklerodermii (morfeu) od systémové sklerodermie?",
                        "options": [
                              "Morfea postihuje pouze vnitřní orgány, zatímco systémová sklerodermie postihuje výhradně kůži.",
                              "Morfea je provázena Raynaudovým fenoménem a plicní fibrózou, u systémové formy tyto příznaky chybí.",
                              "Morfea je lokalizované kožní onemocnění bez viscerálního postižení a bez přítomnosti Raynaudova fenoménu, zatímco systémová forma postihuje kromě kůže i vnitřní orgány (GIT, plíce, ledviny).",
                              "Morfea se hojí jizvami typu en coup de sabre a je vysoce letální do 2 let od diagnózy."
                        ],
                        "correct": 2,
                        "explanation": "Lokalizovaná sklerodermie (morfea) je benigní onemocnění omezené na kůži a podkoží, neprovází ji Raynaudův fenomén ani systémové autoantibody (anti-Scl-70, ACA) a nepostihuje vnitřní orgány. Systémová sklerodermie je závažné multiorgánové onemocnění."
                  }
            ]
      },
      {
            "id": "derma-46",
            "title": "Nekrobiotické granulomatózní procesy",
            "section": "Speciální dermatologie (Specka)",
            "keywords": [
                  "granuloma anulare",
                  "necrobiosis lipoidica",
                  "sarkoidóza",
                  "Löfgrenův syndrom",
                  "revmatické uzly",
                  "nekrobióza"
            ],
            "content": {
                  "definition": "Skupina chronických zánětlivých kožních onemocnění histologicky charakterizovaných přítomností <strong>nekrobiotických nebo sarkoidálních granulomů</strong> v koriu či podkoží. Zahrnuje granuloma anulare, necrobiosis lipoidica, revmatické uzly a sarkoidózu.",
                  "etiology": "Etiologie je neznámá. Předpokládá se imunologická reakce na neznámé antigeny (vazivové proteiny, infekční agens). Existuje významná asociace s jinými chorobami: <strong>granuloma anulare</strong> a <strong>necrobiosis lipoidica</strong> jsou asociovány s <strong>diabetes mellitus</strong> (necrobiosis lipoidica až u 50 % nemocných), revmatické uzly s <strong>revmatoidní artritidou</strong>.",
                  "pathogenesis": "Buněčně zprostředkovaná imunitní reakce IV. typu vedoucí k alteraci cév a vaziva. Dochází k ložiskové degeneraci kolagenu (<strong>nekrobióza</strong>). Kolem okrsků nekrobiotického vaziva se organizuje palisádovitý lem z histiocytů, lymfocytů a obrovských buněk z cizích těles. U <strong>sarkoidózy</strong> se tvoří nekaseifikující (sarkoidální) granulomy složené z epiteloidních buněk a Langhansových obrovských buněk, bez centrální nekrózy.",
                  "macroscopy": "<strong>Granuloma anulare</strong>: Tuhé, barvy kůže či načervenalé papulky uspořádané do anulárních (prstencovitých) ložisek s vyvýšeným okrajem a vkleslým centrem. Predilekčně nad klouby rukou, nohou, kotníků. <strong>Necrobiosis lipoidica</strong>: Ostře ohraničená, bilaterální, lesklá ložiska na přední straně bérců. Okraj je červenohnědý, vyvýšený; střed je žlutavý, atrofický, s patrnými teleangiektáziemi. Sklon k ulceracím (u 30 % případů). <strong>Rheumatismus nodosus</strong>: Tuhé, nebolestivé podkožní uzly nad klouby (lokty, kolena, ulnární hrana předloktí). <strong>Sarkoidóza</strong>: Červené až lividní makulopapulózní projevy, které při tlaku sklíčkem (<strong>vitroprese</strong>) prokazují charakteristické <strong>šedožluté prosvítání</strong>. Zahrnuje <i>lupus pernio</i> (zbytnění nosu, uší, napodobující oznobeniny).",
                  "microscopy": "Histologie prokazuje ložiska <strong>nekrobiózy kolagenu</strong> (ztráta barvitelnosti kolagenních vláken, přítomnost mucinu) obklopená palisádovitým lemem histiocytů a lymfocytů. U sarkoidózy nacházíme <strong>nekaseifikující granulomy</strong> z epiteloidních buněk obklopených lymfocytárním infiltrátem, bez kaseózní nekrózy.",
                  "clinical": "<strong>Lokalizované granuloma anulare</strong> postihuje hlavně děti a mladé dospělé, hojí se spontánně do 1–2 let. U diseminované formy a necrobiosis lipoidica je nutné vyšetřit glykémii k vyloučení diabetu. <strong>Sarkoidóza</strong> je systémové onemocnění; kožní projevy (erythema nodosum v časné fázi) mohou být součástí <strong>Löfgrenova syndromu</strong> (bilaterální hilová lymfadenopatie + artralgie + erythema nodosum). Může postihnout plíce (plicní fibróza), oči (uveitida) či nervový systém. Další procesy: <i>Lichen nitidus</i> (ploché lesklé mikropapulky, granulomatózní zánět, predilekce na penisu a předloktí). Léčba: Lokální kortikosteroidy v okluzi, intralezionální aplikace, u systémové sarkoidózy celkové kortikosteroidy."
            },
            "quiz": [
                  {
                        "question": "Které z následujících onemocnění vykazuje nejsilnější asociaci s diabetes mellitus a typicky se manifestuje lesklými žlutavými atrofickými ložisky s teleangiektáziemi na bércích?",
                        "options": [
                              "Granuloma anulare",
                              "Necrobiosis lipoidica",
                              "Rheumatismus nodosus",
                              "Lupus pernio"
                        ],
                        "correct": 1,
                        "explanation": "Necrobiosis lipoidica je chronická granulomatózní dermatóza postihující přední strany bérců, u které má až 50 % pacientů klinicky manifestní nebo latentní diabetes mellitus."
                  },
                  {
                        "question": "Které klinické nálezy definují tzv. Löfgrenův syndrom, jakožto časnou formu sarkoidózy?",
                        "options": [
                              "Gottronovy papuly, heliotropní erytém a svalová slabost",
                              "Bilaterální hilová lymfadenopatie, artralgie a erythema nodosum",
                              "Calcinosis cutis, Raynaudův fenomén a teleangiektázie",
                              "Urtikariální exantém, glomerulonefritida a pozitivita ANA protilátek"
                        ],
                        "correct": 1,
                        "explanation": "Löfgrenův syndrom je akutní forma sarkoidózy s dobrou prognózou, pro kterou je charakteristická triáda: bilaterální hilová lymfadenopatie (na RTG plic), kloubní bolesti (artralgie) a erythema nodosum (bolestivé podkožní uzly na bércích)."
                  }
            ]
      },
      {
            "id": "derma-47",
            "title": "Nemoci vlasů",
            "section": "Speciální dermatologie (Specka)",
            "keywords": [
                  "alopecie",
                  "alopecia areata",
                  "androgenní alopecie",
                  "třífázový cyklus",
                  "pili torti",
                  "trichogram",
                  "effluvium"
            ],
            "content": {
                  "definition": "Poruchy postihující vlasové folikuly a vlasový stvol, projevující se změnami struktury, tvaru či barvy vlasů, nebo jejich nadměrným vypadáváním (<strong>alopecie, efluvium</strong>) a naopak nadměrným růstem (<strong>hypertrichóza, hirsutismus</strong>).",
                  "etiology": "Etiologie je velmi různorodá. Zahrnuje genetické faktory (vrozené vady vlasového stvolu, geneticky podmíněná citlivost k androgenům u androgenní alopecie), autoimunitní mechanismy (u alopecia areata), endokrinní poruchy (hirsutismus, thyreopatie), nutriční deficity (železo, zinek), stres, infekce a toxické vlivy léků (cytostatika).",
                  "pathogenesis": "Vlasový folikul prochází cyklem: <strong>anagen</strong> (růstová fáze, 3–6 let), <strong>katagen</strong> (involuční fáze, 1–2 týdny) a <strong>telogen</strong> (klidová fáze, 2–4 měsíce). U <strong>telogenního efluvia</strong> dochází vlivem stresoru k předčasnému přechodu velkého množství vlasů do telogenu. U <strong>anagenního efluvia</strong> dochází k přímému toxickému poškození dělících se buněk matrix (např. chemoterapií). U <strong>alopecia areata</strong> napadají autoreaktivní T-lymfocyty buňky vlasového bulbu a spouštějí apoptózu. U <strong>androgenní alopecie</strong> dochází vlivem <strong>dihydrotestosteronu (DHT)</strong> (vzniká z testosteronu působením <strong>5α-reduktázy</strong>) k postupné miniaturizaci vlasových folikulů.",
                  "macroscopy": "<strong>Změny tvaru</strong>: <i>Pili torti</i> (zkroucení vlasu kolem osy), <i>monilethrix</i> (růžencovité zúžení a lámání vlasů), <i>trichorrhexis nodosa</i> (ulamování vlasů v uzlících, štětečkový rozštěp). <strong>Změny barvy</strong>: <i>Poliosis</i> (ohraničený pramen bílých vlasů), <i>canities</i> (zešedivění), albinismus (piebaldismus vs totální albinismus). <strong>Ztráta vlasů</strong>: <strong>Alopecia areata</strong> se projevuje jako ostře ohraničená, okrouhlá lysá ložiska. Na okrajích ložisek jsou patrné zúžené, ulamující se vlasy připomínající vykřičník (<strong>vykřičníkové vlasy</strong> neboli Sabouraudovy peladické vlasy). Může generalizovat na celou kštici (<i>alopecia totalis</i>) či tělo (<i>alopecia universalis</i>). <strong>Androgenní alopecie</strong>: U mužů typický ústup vlasové čáry z čela a temene (vytvoření koutů a pleše), u žen difuzní prořídnutí na temeni se zachováním frontální linie. <strong>Jizvící alopecie</strong>: Např. <i>pseudopelade Brocq</i> – drobná, lesklá lysá ložiska na temeni, která splývají, kůže je atrofická, folikulární ústí chybí.",
                  "microscopy": "V trichogramu hodnotíme zastoupení fází (anagen 80–90 %, telogen 10–15 %, katagen 1–2 %). U alopecia areata nacházíme histologicky peribulvární lymfocytární infiltrát charakteru roje včel. U jizvících alopecií nacházíme fibrózu a destrukci vlasových folikulů nahrazených vazivovými pruhy.",
                  "clinical": "Diagnostika v trichologii zahrnuje anamnézu, trakční test, trichogram, mykologické vyšetření a biopsii. <i>Ofiáza</i> je podtyp alopecia areata s výpadkem vlasů v podkovovitém pásu na šíji a spáncích. Nadměrný růst: <i>hypertrichóza</i> (nadměrný růst terminálního vlasu nahrazující velusový kdekoli), <i>hirsutismus</i> (růst terminálních vlasů u žen podle mužského vzoru, citlivost k androgenům, virilizace). Léčba: U alopecia areata lokální či celkové kortikosteroidy, minoxidil. U androgenní alopecie lokální <strong>minoxidil (2% či 5%)</strong>, u mužů celkově inhibitor 5α-reduktázy <strong>finasterid</strong>. Jizvící alopecie jsou ireverzibilní."
            },
            "quiz": [
                  {
                        "question": "Co jsou to vykřičníkové vlasy (Sabouraudovy peladické vlasy) a u kterého onemocnění je nacházíme?",
                        "options": [
                              "Vlasy zkroucené o 180 stupňů kolem své osy, typické pro pili torti",
                              "Vlasy v okrajích aktivních ložisek, které jsou distálně normální, ale proximálně u kůže zúžené a snadno se ulamují; typické pro alopecia areata",
                              "Vlasy růžencovitého tvaru typické pro monilethrix",
                              "Hrubé, pigmentované vlasy rostoucí v solární lokalizaci u systémového lupusu"
                        ],
                        "correct": 1,
                        "explanation": "Vykřičníkové vlasy jsou patognomickým znakem aktivního stadia alopecia areata. Nacházejí se na okrajích rozšiřujících se lysých ložisek. Jsou to krátké, ulamující se vlasy, které se směrem k vlasové cibulce zužují a ztrácejí pigment, což jim dává tvar vykřičníku."
                  },
                  {
                        "question": "Který enzym hraje klíčovou roli v patogenezi androgenní alopecie a jaký lék se používá k jeho inhibici u mužů?",
                        "options": [
                              "Tyrosináza; inhibovaná lokálním metronidazolem",
                              "5alfa-reduktáza; inhibovaná systémově podávaným finasteridem",
                              "Tkáňová transglutamináza; inhibovaná bezlepkovou dietou a dapsonem",
                              "Kalcineurin; inhibovaný lokálním takrolimusem"
                        ],
                        "correct": 1,
                        "explanation": "V patogenezi androgenní alopecie hraje hlavní roli enzym 5α-reduktáza, který přeměňuje testosteron na účinnější dihydrotestosteron (DHT). U mužů se k celkové léčbě používá finasterid, což je selektivní inhibitor tohoto enzymu."
                  }
            ]
      },
      {
            "id": "derma-48",
            "title": "Acne vulgaris",
            "section": "Speciální dermatologie (Specka)",
            "keywords": [
                  "acne vulgaris",
                  "komedon",
                  "seborea",
                  "Propionibacterium acnes",
                  "retinoidy",
                  "izotretinoin",
                  "5alfa-reduktáza"
            ],
            "content": {
                  "definition": "Chronické multifaktoriální zánětlivé onemocnění pilosebaceózní jednotky (vlasového folikulu a přidružené mazové žlázy) v seboroických lokalizacích (obličej, hrudník, záda), charakterizované vznikem komedonů, papul, pustul, nodulů a jizev.",
                  "etiology": "Multifaktoriální etiopatogeneze s genetickou predispozicí (počet a velikost mazových žláz, citlivost k androgenům). Hormonální vlivy (androgeny v pubertě) stimulují sekreci mazu. Zhoršujícími faktory jsou stres, tření (acne mechanica), mastná kosmetika, některé léky (lithium, halogeny, kortikosteroidy, vitamin B12) a kouření.",
                  "pathogenesis": "Uplatňují se 4 hlavní patogenetické mechanismy: 1. <strong>Seborea</strong> (nadprodukce mazu) v důsledku stimulace androgenních receptorů mazových žláz dihydrotestosteronem (DHT, produktem <strong>5α-reduktázy</strong>). 2. <strong>Folikulární retenční hyperkeratóza</strong> – porucha deskvamace keratinocytů v infundibulu vede k jeho uzávěru a retenci mazu, čímž vzniká <strong>uzavřený komedon</strong> (bílá papulka) a později <strong>otevřený komedon</strong> (černá tečka, barva je dána oxidovaným melaninem). 3. <strong>Bakteriální kolonizace</strong> – anaerobní bakterie <strong>Cutibacterium acnes</strong> (dříve <i>Propionibacterium acnes</i>) a <i>Staphylococcus epidermidis</i> v mazu produkují lipázy štěpící lipidy na volné mastné kyseliny, které dráždí stěnu folikulu. 4. <strong>Zánět</strong> – ruptura stěny folikulu uvolní obsah do koria, což indukuje zánětlivou reakci za účasti neutrofilů a makrofágů.",
                  "macroscopy": "Projevy se vyskytují v seboroické lokalizaci. Rozlišujeme: <i>Acne comedonica</i> (komedony), <i>Acne papulopustulosa</i> (červené papuly a pustuly, jizvičky), <i>Acne nodulocystica</i> (bolestivé noduly a cysty), <i>Acne conglobata</i> (velké splývající zánětlivé hrboly, abscesy s hnisavou sekrecí, píštěle, atrofické i hypertrofické/keloidní jizvy), <i>Acne fulminans</i> (aknutní febrilní forma s ulceracemi, leukocytózou a artralgiemi u chlapců).",
                  "microscopy": "Dilatované infundibulum vlasového folikulu vyplněné rohovými šupinami a mazem (komedon). Při ruptuře folikulu je v koriu přítomen výrazný smíšený zánětlivý infiltrát (neutrofily, lymfocyty, histiocyty, obrovské buňky z cizích těles) s tvorbou mikroabscesů a následnou fibrotizací (jizvením).",
                  "clinical": "Postihuje většinu dospívajících v pubertě. Akné odeznívá většinou ve třetím decenniu. DD: <i>acne excoriata</i> (vymačkávané akné u mladých žen s psychickou složkou), <i>acne neonatorum</i> (androgeny od matky), <i>acne tetrada / inversa</i> (akné conglobata + hidradenitis suppurativa + perifolliculitis capitis abscedens + pilonidální sinus). Terapie: Lokální: <strong>benzoylperoxid</strong> (antiseptický, komedolytický), <strong>lokální retinoidy</strong> (tretinoin, adapalen), <strong>kyselina azelaová</strong>, lokální ATB. Celková: tetracykliny (doxycyklin), antiandrogeny u žen, celkový <strong>izotretinoin</strong> (retinoid) u těžkých a jizvících forem. Izotretinoin je vysoce <strong>teratogenní</strong> (nutná antikoncepce u žen) a způsobuje suchost kůže a sliznic (zejména <strong>cheilitis sicca</strong> - popraskané rty, cheilitida)."
            },
            "quiz": [
                  {
                        "question": "Které čtyři patogenetické faktory se klíčově podílejí na rozvoji acne vulgaris?",
                        "options": [
                              "Hyperkeratóza, atrofie mazových žláz, infekce virem HSV a ukládání mucinu",
                              "Seborea, folikulární retenční hyperkeratóza, bakteriální kolonizace (C. acnes) a zánětlivá reakce koria",
                              "Vaskulitida, snížená produkce mazu, přítomnost roztoče Demodex a autoimunitní destrukce folikulů",
                              "Kontakt s louhy, destrukce melanocytů, depozice IgA a chladová aktivace komplementu"
                        ],
                        "correct": 1,
                        "explanation": "Patogeneze akné spočívá v kombinaci čtyř faktorů: 1. Seborea (nadprodukce mazu), 2. Folikulární retenční hyperkeratóza (ucpání folikulu), 3. Množení Cutibacterium acnes, 4. Zánětlivá reakce vyvolaná rupturou folikulu."
                  },
                  {
                        "question": "Který nežádoucí účinek je nejvýznamnějším rizikem při systémové léčbě izotretinoinem a jaký běžný lokální projev jej doprovází?",
                        "options": [
                              "Nefrotoxicita; doprovázená vypadáváním vlasů v ložiskách",
                              "Vysoká teratogenita (riziko poškození plodu); doprovázená cheilitis sicca (suchost a popraskání rtů)",
                              "Hepatotoxicita s rizikem cirhózy; doprovázená hypertrichózou",
                              "Ototoxicita (poruchy sluchu); doprovázená jizevnatou alopecií"
                        ],
                        "correct": 1,
                        "explanation": "Celková léčba izotretinoinem je zatížena extrémní teratogenitou, proto je u žen ve fertilním věku absolutně kontraindikována bez současného užívání spolehlivé antikoncepce. Nejčastějším, téměř univerzálním nežádoucím účinkem je výrazná suchost kůže a sliznic, manifestující se zejména jako cheilitis sicca."
                  }
            ]
      },
      {
            "id": "derma-49",
            "title": "Rosacea a dermatitis perioralis",
            "section": "Speciální dermatologie (Specka)",
            "keywords": [
                  "rosacea",
                  "růžovka",
                  "rhinophyma",
                  "Demodex folliculorum",
                  "dermatitis perioralis",
                  "rebound fenomén",
                  "metronidazol"
            ],
            "content": {
                  "definition": "<strong>Rosacea (růžovka)</strong> je chronické zánětlivé onemocnění středu obličeje charakterizované erytémem, teleangiektáziemi, papulopustulami a hyperplazií vaziva a mazových žláz. <strong>Dermatitis perioralis</strong> je chronický zánětlivý exantém postihující okolí úst s tvorbou drobných papulopustul na erytematózním podkladě.",
                  "etiology": "<strong>Rosacea</strong>: Etiologie je nejasná. Roli hraje vrozená vazomotorická labilita obličeje, genetická predispozice, UV záření, kolonizace roztočem <strong>Demodex folliculorum</strong> (trudník tukový, trudník mazový) a přítomnost Helicobacter pylori v žaludku. Zhoršující faktory: horké nápoje, kořeněná jídla, alkohol, chlad/teplo, lokální kortikoidy. <strong>Dermatitis perioralis</strong>: Často vyvolána <strong>aplikací lokálních kortikosteroidů</strong> na obličej (rebound fenomén po vysazení), používáním mastné kosmetiky, zubních past s fluorem, UV zářením.",
                  "pathogenesis": "<strong>Rosacea</strong>: Porucha vrozené imunity a neurovaskulární dysregulace vedou k permanentní vazodilataci a zánětu koria. Demodex stimuluje imunitní reakci. Dochází k fibroprodukci a hyperplazii mazových žláz. <strong>Dermatitis perioralis</strong>: Kortikoidy a nevhodná kosmetika narušují kožní bariéru, což vede k rozvoji perifolikuárního zánětu koria, popř. s podílem kvasinek (Candida).",
                  "macroscopy": "<strong>Rosacea</strong>: Postihuje nos, tváře, čelo, bradu (vynechává periorální a periorbitalní zónu). Stupeň I: <i>erytematoangiektický</i> – erytém středu obličeje a teleangiektázie. Stupeň II: <i>papulopustulózní</i> – červené papuly a pustuly. <strong>Komedony chybí</strong> (hlavní rozdíl od akné). Stupeň III: <i>phymatózní</i> – zbytnění nosu s lobulárním povrchem (<strong>rhinophyma</strong>), způsobené hyperplazií mazových žláz a vaziva. Oční komplikace (blefaritida, konjunktivitida, keratitis) až u 60 % pacientů. <strong>Dermatitis perioralis</strong>: Symetrický výsev drobných červených papulek a papulopustul na erytematózní spodině kolem úst, s <strong>vynecháním úzkého perilabiálního lemu</strong> (kůže těsně u rtu je zdravá).",
                  "microscopy": "U růžovky nacházíme v koriu dilatované cévy, perivaskulární a perifolikuární infiltrát (lymfocyty, histiocyty, eozinofily), někdy s tvorbou granulomů z epiteloidních buněk. U dermatitis perioralis je přítomen nespecifický subakutní zánět koria s perifolikuární distribucí a mírnou spongiózou epidermis.",
                  "clinical": "Růžovka postihuje spíše ženy středního věku (40.–60. rok). Rhinophyma postihuje téměř výhradně muže. Periorální dermatitida se vyskytuje hlavně u mladých žen. <strong>U periorální dermatitidy jsou lokální kortikosteroidy absolutně kontraindikovány</strong> (rebound fenomén). Léčba: <i>Rosacea</i>: Lokálně <strong>metronidazol</strong>, erytromycin, kyselina azelaová, ivermektin. Celkově tetracykliny (doxycyklin) či izotretinoin. Rhinophyma se řeší chirurgicky (shave excize, CO2 laser). <i>Dermatitis perioralis</i>: Nulová terapie (úplné vysazení kosmetiky a kortikoidů), obklady (černý čaj, borová voda), lokálně metronidazol či erytromycin, celkově tetracyklin."
            },
            "quiz": [
                  {
                        "question": "Který z následujících klinických znaků spolehlivě odlišuje rosaceu (růžovku) od acne vulgaris?",
                        "options": [
                              "Rosacea postihuje převážně adolescenty a projevuje se hlubokými jizvícími cystami.",
                              "U rosacey chybějí komedony a postihuje spíše starší věkové skupiny (střední věk), s možným vznikem rhinofymatu.",
                              "Rosacea je charakterizována svědivými intraepidermálními puchýři s pozitivním Nikolského fenoménem.",
                              "Rosacea se vyskytuje výhradně na trupu a končetinách a doprovází ji Raynaudův fenomén."
                        ],
                        "correct": 1,
                        "explanation": "Na rozdíl od akné u růžovky (rosacey) nikdy nenajdeme komedony (uhry). Růžovka je onemocnění středního věku (typicky 40-60 let), postihuje střed obličeje (nos, tváře, čelo, bradu, ale vynechává periorální a perilabiální zónu) a může vést ke zbytnění kůže a mazových žláz nosu (rhinophyma)."
                  },
                  {
                        "question": "Proč jsou lokální kortikosteroidy kontraindikovány v léčbě dermatitis perioralis?",
                        "options": [
                              "Způsobují permanentní depigmentaci rtů a alopecii obočí.",
                              "Vedou k systémové absorbci a rozvoji Cushingova syndromu u 90 % pacientů.",
                              "Způsobují pouze přechodné zlepšení, po kterém následuje rebound fenomén s výrazným zhoršením projevů a fixací granulomatózního zánětu.",
                              "Mohou vyvolat anafylaktickou reakci na lepek."
                        ],
                        "correct": 2,
                        "explanation": "Aplikace lokálních kortikosteroidů na obličej u periorální dermatitidy sice přináší počáteční úlevu a potlačení zánětu, ale po jejich vysazení dochází k masivnímu zhoršení (rebound fenomén). Kůže se stává na steroidech závislou a fixuje se obtížně léčitelný zánět. Proto jsou kortikoidy u této indikace přísně kontraindikovány."
                  }
            ]
      },
      {
            "id": "derma-50",
            "title": "Anatomie žilního systému DKK, flebologické vyšetření, varixy DKK",
            "section": "Speciální dermatologie (Specka)",
            "keywords": [
                  "v. saphena magna",
                  "v. saphena parva",
                  "Perthesova zkouška",
                  "Trendelenburgova zkouška",
                  "varixy",
                  "tromboflebitida",
                  "phlebotrombosis"
            ],
            "content": {
                  "definition": "Anatomické uspořádání a vyšetření žilního řečiště dolních končetin, patologie chlopní projevující se vakovitým rozšířením povrchových žil (<strong>varixy</strong>) a zánětlivé/trombotické stavy povrchových žil (<strong>trombophlebitis superficialis</strong>) a hlubokých žil (<strong>trombophlebitis profunda / phlebotrombosis</strong>).",
                  "etiology": "<strong>Varixy</strong>: Genetická méněcennost žilní stěny a chlopní, věk, ženské pohlaví (vliv hormonů – těhotenství, HAK), obezita, profese spojené s dlouhým stáním či sezením. <strong>Trombophlebitis</strong>: Poškození cévní stěny (endotelu), zpomalení toku krve (stáza), hyperkoagulační stavy (tzv. Virchowova triáda). Mezi rizikové faktory patří imobilizace, operace, sádrová fixace, malignity, gravidita.",
                  "pathogenesis": "Chlopně v žilách DKK zajišťují jednosměrný tok krve z povrchového systému do hlubokého (přes transfasciální spojky/perforátory: Cocketovy nad kotníkem, Boydovy pod kolenem, Doddovy nad kolenem) a dále směrem k srdci. Hnací silou je <strong>svalová pumpa</strong> lýtkových svalů. Při dysfunkci chlopní dochází k <strong>žilnímu refluxu</strong> a žilní hypertenzi, což vede k postupné dilataci povrchových žil (<strong>varixy</strong>). U povrchové tromboflebitidy vzniká lokální zánět stěny s trombotizací (nízké riziko embolizace). U hluboké žilní trombózy dochází k uzávěru hlubokých žil s vysokým rizikem uvolnění trombu a rozvoje <strong>plicní embolizace</strong>.",
                  "macroscopy": "<strong>Varixy</strong>: Dilatované, prodloužené a vinuté žilní kmeny či sítě v podkoží dolních končetin. Dělí se na kmenové, retikulární (síťovité) a metličkovité (intradermální mikrovarixy). <strong>Trombophlebitis superficialis</strong>: Hmatný, tuhý, bolestivý červený provazec v průběhu povrchové žíly, kůže v okolí je oteklá a teplá. Po zhojení přetrvává hyperpigmentace. <i>Trombophlebitis superficialis migrans</i> (saltans) - recidivující flebitidy na různých místech (např. u malignit). <i>Mondorova choroba</i> - tuhá flebitida na trupu. <strong>Trombophlebitis profunda</strong>: Končetina je oteklá (dolíčkující edém), kůže bledá či lividní, s rozšířenou povrchovou kolaterální kresbou (<strong>Prattovy žíly</strong>).",
                  "microscopy": "U varixů nacházíme ztenčení a nepravidelné zmnožení kolagenu a hladké svaloviny v žilní stěně s degenerativními změnami elastických vláken. U povrchové tromboflebitidy je přítomen akutní zánětlivý infiltrát (neutrofily) ve stěně žíly, infiltrující i okolní tukovou tkáň (periflebitida), s přítomností trombu v lumen.",
                  "clinical": "Flebologické vyšetření zahrnuje inspekci ve stoje, palpaci a klasické funkční testy: <strong>Perthesova zkouška</strong> (zkouší průchodnost hlubokého systému – pacient chodí s podvázaným bércem; pokud se varixy nevyprázdní, je hluboký systém neprůchodný) a <strong>Trendelenburgova zkouška</strong> (hodnotí kompetenci chlopní safén a perforátorů). Moderní vyšetření se opírá o <strong>duplexní sonografii</strong>. <i>Trombophlebitis profunda (hluboká trombóza)</i> se projevuje bolestí v lýtku (bolestivá flexe nohy – <strong>Homansovo znamení</strong>, Prattovy žíly, tonometrová zkouška). Hrozí plicní embolie (dušnost, tachykardie, bolest na hrudi). Terapie: Varixy: komprese (elastické punčochy), sklerotizace, chirurgická exstirpace. Povrchová flebitida: lokální heparin, studené obklady, NSAID, mobilizace. Hluboká trombóza: antikoagulační léčba (nízkomolekulární heparin - LMWH, následně perorální antikoagulancia)."
            },
            "quiz": [
                  {
                        "question": "Který z následujících testů slouží k ověření průchodnosti hlubokého žilního systému dolních končetin a jaký výsledek svědčí pro jeho neprůchodnost?",
                        "options": [
                              "Trendelenburgova zkouška; rychlé plnění varixů shora po postavení pacienta",
                              "Perthesova zkouška; pokud při chůzi pacienta se zataženou gumovou hadičkou pod kolenem varixy nezmizí (nebo se zvětší a bérec začne bolet)",
                              "Homansovo znamení; vyvolání bolesti v lýtku při pasivní dorzální flexi nohy",
                              "Lupus band test; přítomnost zářícího pruhu podél bazální membrány"
                        ],
                        "correct": 1,
                        "explanation": "Perthesova zkouška slouží k vyšetření průchodnosti hlubokých žil. Bérec se zaškrtí hadičkou, aby se stlačil povrchový systém, a pacient se nechá chodit. Pokud se varixy nevyprázdní nebo se naplní více a pacient cítí bolest, svědčí to pro neprůchodnost hlubokých žil."
                  },
                  {
                        "question": "Jak se liší klinický průběh a rizika u povrchové tromboflebitidy (trombophlebitis superficialis) and hluboké žilní trombózy (phlebotrombosis)?",
                        "options": [
                              "Povrchová flebitida je asymptomatická a nebezpečná krvácením, hluboká trombóza se projevuje pouze jizvením kůže.",
                              "Povrchová flebitida se projevuje bolestivým červeným pruhem a hmatným provazcem s minimálním rizikem embolizace, zatímco hluboká trombóza se prezentuje otokem a lividním zbarvením končetiny a nese vysoké riziko život ohrožující plicní embolie.",
                              "Obě jednotky mají shodný klinický obraz i léčbu a u obou je nutný přísný klid na lůžku bez bandáží.",
                              "U povrchové flebitidy je pozitivní Perthesův test, u hluboké trombózy je pozitivní Trendelenburgův test."
                        ],
                        "correct": 1,
                        "explanation": "Povrchová tromboflebitida je zánětlivé postižení povrchových žil (červený, teplý a bolestivý pruh), které se léčí lokálně (heparin, komprese, NSAID) a pacient se mobilizuje; riziko embolizace is minimální. Hluboká žilní trombóza (flebotrombóza) postihuje subfasciální žíly, projevuje se jednostranným otokem bérce, bolestivostí a nese vysoké riziko plicní embolie, proto vyžaduje systémovou antikoagulační léčbu."
                  }
            ]
      },
      {
            "id": "derma-51",
            "title": "Chronická žilní insuficience, venózní bércový vřed",
            "section": "Speciální dermatologie (Specka)",
            "keywords": [
                  "chronická žilní insuficience",
                  "ulcus cruris venosum",
                  "stasis dermatitis",
                  "lipodermatosclerosis",
                  "atrophie blanche",
                  "Widmerova klasifikace",
                  "kompresivní terapie"
            ],
            "content": {
                  "definition": "<strong>Chronická žilní insuficience (CHŽI)</strong> je soubor patofyziologických stavů a kožních změn vznikajících na dolních končetinách v důsledku dlouhodobého městnání krve (stázy) a chlopenní inkompetence v žilním systému. <strong>Venózní bércový vřed (ulcus cruris venosum)</strong> je chronický kožní defekt (ztráta kožní tkáně zasahující do koria a hlouběji) vznikající jako nejzávažnější komplikace CHŽI.",
                  "etiology": "CHŽI vzniká v důsledku primární poruchy žilní stěny a chlopní (varixy) nebo sekundárně po prodělané hluboké žilní trombóze (<strong>posttrombotický syndrom</strong>), která zničí chlopně nebo zanechá obstrukci žíly. Rizikové faktory splývají s faktory pro varixy (stání, obezita, věk, těhotenství, nedostatek pohybu).",
                  "pathogenesis": "Žilní hypertenze (kapilární hypertenze) vede k dilataci a zvýšené permeabilitě kapilár. Do tkáně unikají erytrocyty a proteiny (fibrinogen). Fibrinogen polymeruje a vytváří kolem kapilár <strong>fibrinové manžety</strong>, které mechanicky blokují difuzi kyslíku a živin, což vede k ischemii a trofických změn kůže. Extravazované erytrocyty se rozpadají a uvolňují hemosiderin (hyperpigmentace). Zpomalení toku krve navíc aktivuje neutrofily, které migrují do koria, uvolňují proteázy a volné radikály, což spouští chronický zánět, fibrózu podkoží a nakonec nekrózu s rozvojem vředu.",
                  "macroscopy": "<strong>Kožní projevy CHŽI</strong>: 1. <i>Corona phlebectatica paraplantaris</i>: Vějířky drobných žilek na vnitřním a zevním okraji chodidla. 2. <i>Edém</i>: Zpočátku měkký otok kolem kotníků, mizící přes noc, později tuhý a trvalý. 3. <i>Hemosiderinová hyperpigmentace</i>: Hnědavé až šedavé skvrnsy splývající nad kotníky. 4. <i>Stasis dermatitis (gravitační ekzém)</i>: Svědivá, červená, olupující se ložiska, někdy mokvající. 5. <i>Lipodermatosclerosis (dermatoliposclerosis)</i>: Tuhé podkoží dolní třetiny bérce sevřené jako v krunýři (končetina tvarem připomíná <strong>obrácenou láhev šampaňského</strong>). 6. <i>Atrophie blanche (bílá atrofie)</i>: Porcelánově bílé atrofické jizvy s teleangiektáziemi. 7. <strong>Ulcus cruris venosum</strong>: Nepravidelný, plochý vřed nejčastěji v oblasti <strong>vnitřního kotníku</strong>. Spodina bývá krytá fibrinem či červenou granulační tkání (sekrece bývá hojná). Okolí vykazuje známky stasis dermatitis. Bolest typicky ustupuje při elevaci končetiny.",
                  "microscopy": "V koriu nacházíme proliferaci a dilataci kapilár (trsovité uspořádání), extravazované erytrocyty a ložiska hemosiderinu v makrofázích. Je přítomna výrazná fibróza dermis a podkožního vaziva (lipodermatoskleróza) s perivaskulárním lymfohistiocytárním infiltrátem. Vřed vykazuje nekrózu epidermis a koria se smíšeným zánětlivým infiltrátem na spodině.",
                  "clinical": "CHŽI se klasifikuje dle <strong>Widmerovy klasifikace</strong> (I. stadium: corona phlebectatica a edém, II. stadium: trofické změny - hyperpigmentace, ekzém, lipodermatoskleróza, III. stadium: active nebo zhojený vřed) nebo komplexnější klasifikace <strong>CEAP</strong>. Diagnóza se opírá o duplexní sonografii. Léčba CHŽI a vředu: Klíčová je <strong>kompresivní terapie</strong> (krátkotažná obinadla, kompresivní punčochy – zvyšují tkáňový tlak a podporují žilní návrat). Systémově venotonika, reologika. Lokální léčba vředu probíhá ve třech fázích (vlhké hojení): 1. <i>Čistící fáze</i>: Odstranění nekróz a povlaků (oplachové roztoky, hydrogely, antiseptika, stříbro). 2. <i>Granulační fáze</i>: Podpora novotvorby cév a granulací (polyuretanové pěny). 3. <i>Epitelizační fáze</i>: Tvorba nového kožního krytu z okrajů (hydrogely, kyselina hyaluronová)."
            },
            "quiz": [
                  {
                        "question": "Který z následujících patofyziologických mechanismů je hlavní příčinou malnutrice a trofických změn kůže (včetně vzniku vředu) u chronické žilní insuficience?",
                        "options": [
                              "Aterosklerotický uzávěr bércových tepen s kritickou ischemií",
                              "Vznik perikapilárních fibrinových manžet v důsledku žilní hypertenze, které brání difuzi kyslíku a živin do tkání",
                              "Autoimunitní destrukce nervových zakončení vedoucí k neuropatii",
                              "Nedostatečná produkce mazu a ztenčení rohové vrstvy kůže u atopiků"
                        ],
                        "correct": 1,
                        "explanation": "U chronické žilní insuficience vede žilní hypertenze k úniku fibrinogenu do perikapilárního prostoru. Zde polymeruje na fibrin a vytváří tzv. fibrinové manžety. Tyto manžety tvoří mechanickou bariéru, která brání difuzi kyslíku a živin z kapilár do okolních buněk, což vede k ischemii a trofickým změnám (včetně vzniku žilního bércového vředu). Ateroskleróza je příčinou arteriálních vředů."
                  },
                  {
                        "question": "Jaké jsou typické vlastnosti venózního (žilního) bércového vředu a jak se jeho bolestivost chová při změně polohy končetiny?",
                        "options": [
                              "Je lokalizován na prstech, má kruhový tvar, suchou spodinu s nekrózou a bolest se zhoršuje při zvednutí končetiny.",
                              "Je lokalizován nejčastěji v oblasti vnitřního kotníku, má nepravidelný tvar, vlhkou granulační spodinu a bolest ustupuje po elevaci (zvednutí) dolní končetiny.",
                              "Vzniká na plosce nohy v místech otlaku, je zcela nebolestivý z důvodu ztráty citlivosti a hojí se do 3 dnů.",
                              "Je způsoben ukládáním krystalů kyseliny močové a doprovází ho vysoké horečky a pozitivní Perthesův test"
                        ],
                        "correct": 1,
                        "explanation": "Žilní bércový vřed (ulcus cruris venosum) se typicky tvoří v oblasti vnitřního kotníku, má nepravidelné okraje, vlhkou spodinu (často krytou fibrinem či secernujícími granulacemi). Charakteristické pro žilní etiologii je, že městnání krve a s ním spojená bolestivost a napětí v bérce ustupují po zvednutí (elevaci) končetiny. Naopak u arteriálního vředu se bolest při elevaci zhoršuje."
                  }
            ]
      },
      {
            "id": "derma-52",
            "title": "Lymfedém",
            "section": "Speciální dermatologie (Specka)",
            "keywords": [
                  "lymfedém",
                  "lymfa",
                  "otok",
                  "Stemmer",
                  "erysipel",
                  "elefantiáza"
            ],
            "content": {
                  "definition": "<strong>Lymfedém</strong> je chronické, progredující onemocnění charakterizované jako <strong>vysokoproteinový otok</strong> kůže a podkoží. Vzniká v důsledku mechanického nebo funkčního selhání lymfatické drenáže při zachovalé kapilární filtraci, což vede k hromadění tekutiny a makromolekulárních látek v mezibuněčném prostoru.",
                  "etiology": "Etiologicky se lymfedém dělí na:\n1. <strong>Primární lymfedém</strong>: Způsobený vrozenou vývojovou anomálií lymfatických cév nebo uzlin (hypoplazie, aplazie, chlopenní insuficience, lymfektazie). Může být sporadický či familiární (např. <em>Nonne-Milroyova choroba</em> vyvíjející se od narození, <em>Meigeova choroba</em> manifestující se v pubertě).\n2. <strong>Sekundární lymfedém</strong>: Získaný typ vznikající poškozením původně intaktního systému. Nejčastější příčiny jsou <strong>iatrogenní</strong> (disekce lymfatických uzlin u onkologických pacientů, radioterapie), <strong>infekční</strong> (opakované ataky <strong>erysipelu</strong>, v tropech parazitární <em>filarióza</em>), <strong>nádorová filtrace</strong> (obstrukce uzlin tumorem), traumata a závažná chronická žilní insuficience.",
                  "pathogenesis": "Snížení transportní kapacity lymfatického řečiště vede k městnání intersticiální tekutiny bohaté na proteiny. Tento vysokoproteinový edém stimuluje chronickou <strong>zánětlivou reakci</strong> v koriu a podkoží. Dochází k aktivaci makrofágů, fibroblastů a adipocytů, což vede k nadměrné produkci kolagenu (<strong>fibroplazie</strong>) a ukládání tuku. Výsledkem je trvalé ztluštění dermis, fibrotizace podkoží a destrukce zbylých lymfatických kapilár.",
                  "macroscopy": "Klinicky se projevuje bledým, chladným, zpočátku měkkým otokem (často asymetrickým, na dolních končetinách typicky postihujícím i nárt a prsty). Typický je <strong>Stemmerův příznak</strong> – neschopnost vytvořit kožní řasu nad druhým prstem nohy/ruky. Kůže nad otokem postupně tuhne, ztrácí elasticitu, objevuje se hyperkeratóza, ložiska papilomatózy (<em>papillomatosis cutis</em>) a v konečném stadiu vzniká <strong>elefantiáza</strong> (monstrózní zvětšení a deformace končetiny).",
                  "microscopy": "V histologickém obraze dominuje masivní edém koria s dilatovanými lymfatickými cévami a štěrbinami. V koriu je přítomen perivaskulární chronický lymfohistiocytární infiltrát. S progresí dochází k výraznému zmnožení a ztluštění kolagenních snopců (<strong>fibróza</strong>) a k hypertrofii podkožní tukové tkáně.",
                  "clinical": "Onemocnění probíhá ve 4 klinických stadiích:\n* <strong>Stadium 1 (latentní)</strong>: Pacient pociťuje tíhu a napětí v končetině, ale otok není objektivně znatelný.\n* <strong>Stadium 2 (reverzibilní)</strong>: Měkký otok, který se objevuje během dne a po nočním klidu nebo elevaci končetiny zcela mizí.\n* <strong>Stadium 3 (ireverzibilní)</strong>: Tuhý, špatně stlačitelný otok, který po elevaci nemizí; kůže začíná fibrotizovat.\n* <strong>Stadium 4 (elefantiáza)</strong>: Extrémní tuhý otok s monstrózním zbytněním kůže, fixovanými záhyby a papilomatózními vegetacemi.\n<strong>Komplikace</strong>: Nejčastější a nejzávažnější je opakovaný <strong>erysipel</strong>, který funguje jako circulus vitiosus (každá ataka dále ničí lymfatické cévy). Vzácnou, ale fatální komplikací dlouhodobého lymfedému je vznik <strong>lymfangiosarkomu</strong> (<em>Stewart-Trevesův syndrom</em>)."
            },
            "quiz": [
                  {
                        "question": "Který z následujících klinických testů je specifický pro diagnostiku lymfedému?",
                        "options": [
                              "Homansovo znamení",
                              "Stemmerovo znamení",
                              "Trendelenburgův test",
                              "Perthesův test"
                        ],
                        "correct": 1,
                        "explanation": "<strong>Stemmerovo znamení</strong> (neschopnost vytvořit kožní řasu na dorsu druhého prstu nohy nebo ruky) je vysoce specifické pro lymfedém. Homansovo znamení testuje hlubokou žilní trombózu (bolest v lýtku při dorzální flexi nohy). Trendelenburgův a Perthesův test hodnotí chlopenní insuficienci a průchodnost hlubokých žil u varixů."
                  },
                  {
                        "question": "Která infekční komplikace lymfedému nejčastěji vede k další progresi otoku a destrukci lymfatických cév?",
                        "options": [
                              "Svrab",
                              "Erysipel (růže)",
                              "Dermatofytóza",
                              "Impetigo"
                        ],
                        "correct": 1,
                        "explanation": "Nejzávažnější komplikací je <strong>erysipel (růže)</strong>. Streptokoky snadno pronikají narušenou kožní bariérou a v bílkovinami bohaté lymfě nacházejí ideální kultivační médium. Každá nová ataka erysipelu způsobuje obliteraci lymfatických cév, což vede k prohloubení lymfedému (začarovaný kruh)."
                  }
            ]
      },
      {
            "id": "derma-53",
            "title": "Vaskulární névy",
            "section": "Speciální dermatologie (Specka)",
            "keywords": [
                  "naevus flammeus",
                  "oheň",
                  "naevus anaemicus",
                  "malformace",
                  "Sturge-Weber",
                  "Klippel-Trenaunay"
            ],
            "content": {
                  "definition": "<strong>Vaskulární névy</strong> jsou ohraničené vrozené nebo časně získané kožní afekce vznikající na podkladě <strong>embryonální vývojové poruchy</strong> cévního systému (cévní malformace neboli hamartomy). Na rozdíl od hemangiomů nevykazují buněčnou proliferaci endotelu a v průběhu života spontánně neregredují.",
                  "etiology": "Jedná se o vrozené lokální dysplazie krevních cév (kapilár a venul). Vznikají v důsledku genetických mozaicismů a mutací ovlivňujících angiogenezi a cévní remodelaci během intrauterinního vývoje.",
                  "pathogenesis": "Podkladem patogeneze (např. u <em>naevus flammeus</em>) je pravděpodobně <strong>neuropatický deficit autonomní inervace</strong> kožních cév nebo lokální dysfunkce cévních receptorů. Cévy postrádají tonus a schopnost konstrikce, což vede k jejich trvalému pasivnímu rozšíření a městnání krve v horním koriu.",
                  "macroscopy": "Klinicky rozlišujeme několik typů:\n1. <strong>Naevus flammeus</strong> (oheň, <em>port wine stain</em>): Ostře ohraničené vínově červené až lividní ložisko, nejčastěji jednostranně na obličeji nebo krku. S věkem může tmavnout a vykazovat hrbolatý povrch.\n2. <strong>Naevus flammeus medialis nuchae</strong> (tzv. čapí kousnutí): Růžové ložisko v zátylku u novorozenců, velmi časté, někdy regreduje.\n3. <strong>Naevus anaemicus</strong>: Ostře ohraničené bledé ložisko nepravidelného tvaru na trupu, které po tření nebo tepelném podráždění nezčervená (kůže v okolí ano).\n4. <strong>Cutis marmorata teleangiectatica congenita</strong>: Síťovité, lividně červené erytémy na těle, které se zvýrazňují chladem, vzácně doprovázené ulceracemi.",
                  "microscopy": "Histologicky se prokazuje výrazná <strong>dilatace</strong> stávajících kapilár a postkapilárních venul v papilární a subpapilární vrstvě koria. Chybí známky proliferace endotelových buněk nebo zvýšení počtu cév (typické pro hemangiom). U <em>naevus anaemicus</em> je histologický nález normální, cévní lumen je zúžené.",
                  "clinical": "Vaskulární névy jsou přítomny od narození a rostou proporcionálně s dítětem. V dospělosti perzistují. Mohou být součástí závažných syndromů:\n* <strong>Sturge-Weberův syndrom</strong>: Jednostranný naevus flammeus v inervační oblasti <em>n. ophthalmicus</em> a <em>n. maxillaris</em> (V1, V2) spojený s ipsilaterální leptomeningeální angiomatózou (epilepsie, retardace) a glaukomem.\n* <strong>Klippel-Trenaunayův syndrom</strong>: Rozsáhlý naevus flammeus na končetině kombinovaný s hypertrofií kostí a měkkých tkání, varixy a arteriovenózními píštělemi.\n<em>Naevus anaemicus</em> funguje na principu zvýšené lokální citlivosti na katecholaminy (po aplikaci alfa-blokátorů ložisko zčervená).\nTerapie: Zlatým standardem je ošetření **pulsním barvivovým laserem** (pulsed dye laser) v dětském věku."
            },
            "quiz": [
                  {
                        "question": "Jaký je glavni histologický rozdíl mezi naevus flammeus a kapilárním hemangiomem?",
                        "options": [
                              "Naevus flammeus vykazuje masivní proliferaci endotelu, hemangiom pouze dilataci cév.",
                              "Naevus flammeus je tvořen pouze lymfatickými cévami.",
                              "Naevus flammeus vykazuje dilataci stávajících kapilár bez endotelové proliferace, zatímco hemangiom je charakterizován buněčnou endotelovou proliferací.",
                              "Mezi těmito jednotkami není žádný histologický rozdíl."
                        ],
                        "correct": 2,
                        "explanation": "Naevus flammeus je cévní malformace (hamartom) charakterizovaná pouze **pasivní dilatací** kapilár a venul koria bez novotvorby endotelu. Kapilární hemangiom je pravý benigní nádor s aktivní **proliferací endotelových buněk** a zvýšeným počtem cév, který má schopnost spontánní regrese."
                  },
                  {
                        "question": "Která z následujících kombinací symptomů je typická pro Sturge-Weberův syndrom?",
                        "options": [
                              "Naevus flammeus na končetině, hypertrofie kosti a varixy",
                              "Naevus flammeus v oblasti n. trigeminus, leptomeningeální angiomatóza, epilepsie a glaukom",
                              "Naevus anaemicus, vitiligo a skolióza",
                              "Mnohočetné café-au-lait skvrny, Lischovy uzlíky a neurofibromy"
                        ],
                        "correct": 1,
                        "explanation": "<strong>Sturge-Weberův syndrom</strong> se projevuje jednostranným naevus flammeus v obličeji (V1 a V2 dermatom), leptomeningeálním angiomem (způsobuje epilepsii, neurologické deficity) a glaukomem. První možnost popisuje Klippel-Trenaunayův syndrom. Poslední možnost popisuje Neurofibromatózu typu 1."
                  }
            ]
      },
      {
            "id": "derma-54",
            "title": "Melanocytární névy",
            "section": "Speciální dermatologie (Specka)",
            "keywords": [
                  "melanocyt",
                  "névus",
                  "lentigo",
                  "Spitzové",
                  "Clark",
                  "dysplastický névus",
                  "Sutton"
            ],
            "content": {
                  "definition": "<strong>Melanocytární névy</strong> představují heterogenní skupinu benigních ohraničených kožních lézí. Jejich podstatou je lokální zmnožení melanocytů (u lentig) nebo přítomnost névových buněk (u pravých névocelulárních névů) v dermoepidermální junkci, koriu nebo v obou těchto vrstvách.",
                  "etiology": "Vznikají v důsledku lokální embryonální poruchy migrace a proliferace buněk neurální lišty (melanoblastů). V etiopatogenezi získaných névů hraje roli genetická predispozice a expozice UV záření (mutace v genech <em>BRAF</em> nebo <em>NRAS</em>).",
                  "pathogenesis": "Névové buňky vznikají alterací melanocytů, ztrácejí své dendritické výběžky, agregují do hnízd a vykazují proces tzv. <strong>maturace</strong> (sestupu). Získané névy procházejí vývojem od junkčního stadia (hnízda na junkci), přes smíšený (junkce i korium) až po čistě intradermální stadium, kdy postupně involuují a podléhají neurotizaci.",
                  "macroscopy": "Klinicky rozlišujeme řadu jednotek:\n* <strong>Lentigo simplex</strong>: Drobné, hnědočerné, ostře ohraničené skvrny nezávislé na slunci.\n* <strong>Beckerův névus</strong>: Mapovitá hyperpigmentace s hypertrichózou na rameni či hrudníku u mladých mužů.\n* <strong>Naevus spilus</strong>: Světle hnědá skvrna s drobnými tmavšími tečkami uvnitř.\n* <strong>Kongenitální melanocytární névus</strong>: Přítomen od narození, s věkem tmavne, roste na něm hrubé ochlupení (u obřích/plavkových névů hrozí leptomeningeální melanocytóza a melanom).\n* <strong>Získané névocelulární névy</strong>: Junkční (ploché makuly), smíšené (vyvýšené papuly) a intradermální (často stopkaté papuly barvy kůže).\n* <strong>Naevus dysplasticus (Clarkův)</strong>: Atypický névus s nepravidelným ohraničením, barevnou pestrostí a velikostí nad 5 mm.\n* <strong>Naevus Spitzové</strong>: Rychle rostoucí, červenorůžový tuhý uzlík u dětí (vaskularizovaný).\n* <strong>Naevus Suttonův (halo névus)</strong>: Névus obklopený bílým depigmentovaným lemem.\n* <strong>Naevus coeruleus (modrý névus)</strong>: Tuhý šedomodrý uzlík.",
                  "microscopy": "Histologický obraz závisí na typu névu:\n* <strong>Junkční</strong>: Hnízda névových buněk jsou lokalizována výhradně na dermo-epidermální junkci.\n* <strong>Smíšený (compound)</strong>: Hnízda névových buněk jsou v epidermis i koriu.\n* <strong>Intradermální</strong>: Névové buňky jsou pouze v koriu, směrem do hloubky atrofují a podléhají vřetenité přeměně (neurotizaci).\n* <strong>Modrý névus</strong>: Protáhlé, dendritické melanocyty bohaté na melanin, uložené hluboko v retikulárním koriu.\n* <strong>Naevus Spitzové</strong>: Epiteloidní a vřetenovité névové buňky, přítomnost eozinofilních **Kamino tělísek** v epidermis.\n* <strong>Clarkův (dysplastický)</strong>: Přemostění epidermálních čepů hnízdy melanocytů, lamelární fibroplazie v papilárním koriu.",
                  "clinical": "Hlavní význam melanocytárních névů spočívá v diferenciální diagnostice a riziku maligní transformace v maligní melanom. Nejrizikovější jsou **obří kongenitální névy** and **dysplastické névy** (zejména v rámci syndromu familiárních dysplastických névů). U Suttonova névu dochází k autoimunitní destrukci névových buněk T-lymfocyty, což vede k postupnému vymizení névu a repigmentaci dvorce.\nTerapie: U podezřelých lézí, rizikových změn (dle ABCDE pravidel) nebo chronické traumatizace je indikována **chirurgická excize** s histopatologickým ověřením."
            },
            "quiz": [
                  {
                        "question": "Který z následujících melanocytárních névů představuje nejvyšší celoživotní riziko vzniku maligního melanomu?",
                        "options": [
                              "Lentigo simplex",
                              "Beckerův névus",
                              "Obří kongenitální melanocytární névus (>20 cm)",
                              "Naevus Suttonův (halo névus)"
                        ],
                        "correct": 2,
                        "explanation": "<strong>Obří kongenitální melanocytární névus</strong> (definovaný velikostí nad 20 cm v dospělosti) představuje nejvyšší riziko maligního zvratu, které se odhaduje na 5-10 %. Beckerův névus neobsahuje névové buňky (jde o epidermální hamartom). Lentigo simplex a Suttonův névus mají minimální až nulový potenciál k maligní transformaci."
                  },
                  {
                        "question": "Co jsou to Kamino tělíska a pro který névus jsou histologicky charakteristická?",
                        "options": [
                              "Hyalinní membrány obklopující bazaloidní buňky u cylindromu",
                              "Eozinofilní tělíska v epidermis typická pro naevus Spitzové",
                              "Nahromadění melanocytů u modrého névu",
                              "Intraepidermální mikroabscesy u mycosis fungoides"
                        ],
                        "correct": 1,
                        "explanation": "<strong>Kamino tělíska</strong> jsou eozinofilní, PAS-pozitivní globulární tělíska nacházející se v epidermis u <strong>naevus Spitzové</strong> (vřetenobuněčný névus). Pomáhají odlišit tento névus od maligního melanomu, který histologicky velmi připomíná."
                  }
            ]
      },
      {
            "id": "derma-55",
            "title": "Prekancerózy a karcinomy in situ",
            "section": "Speciální dermatologie (Specka)",
            "keywords": [
                  "prekanceróza",
                  "in situ",
                  "Bowen",
                  "keratosis actinica",
                  "leukoplakie",
                  "erytroplazie"
            ],
            "content": {
                  "definition": "<strong>Prekancerózy</strong> jsou kožní a slizniční léze, u kterých je statisticky zvýšené riziko maligního zvratu ve spinocelulární karcinom (spinaliom). Dělí se na obligátní a fakultativní. <strong>Karcinomy in situ</strong> (např. <em>morbus Bowen</em>) představují neinvazivní maligní nádory, u nichž jsou cytologické atypie přítomny v celé šíři epidermis, ale bazální membrána zůstává nenarušená.",
                  "etiology": "Hlavními etiologickými faktory jsou dlouhodobá expozice **UV záření** (hlavně UVB), chronické mechanické nebo chemické dráždění (tabák, dehet, arzen), infekce vysoce rizikovými typy lidských papilomavirů (nejčastěji **HPV 16, 18**) a chronické záněty či jizvy (u fakultativních prekanceróz).",
                  "pathogenesis": "Působením kancerogenů dochází k mutacím v genech regulujících buněčný cyklus (např. tumor-supresorový gen <em>TP53</em>). To vede k dysplazii, ztrátě polarity keratinocytů a jejich nekontrolované proliferaci. Dokud atypické buňky nepenetrují bazální membránu do dermis, mluvíme o intraepidermální neoplazii (dysplazii / in situ karcinomu).",
                  "macroscopy": "Charakteristické klinické jednotky:\n* <strong>Keratosis actinica (solaris)</strong>: Ostře ohraničená, zarudlá ložiska s drsným, šupinatým povrchem na chronicky osluněných místech (čelo, nos, hřbety rukou). Rohovina může tvořit výrůstek (<em>cornu cutaneum</em>).\n* <strong>Leukoplakie</strong>: Bělavé, pevně lpící, nestíratelné plaky na sliznicích (dutina ústní, genitál). Rozlišuje se simplex, verrucosa a erosiva.\n* <strong>Morbus Bowen</strong>: Pomalu rostoucí, ostře ohraničené, růžovo-červené ložisko pokryté šupinami a krustami, napodobující ekzém nebo psoriázu.\n* <strong>Queyratova erytroplazie</strong>: Sametově červené, lesklé ložisko na glans penis nebo vnitřním listu předkožky.\n* <strong>Bowenoidní papulóza</strong>: Mnohočetné šedohnědé papulky na genitálu vyvolané HPV-16.\n* <strong>Lentigo maligna</strong>: Nepravidelná, šířením rostoucí hnědočerná skvrna na obličeji starších osob.\n* <strong>Pagetova choroba</strong>: Ekzematoidní ložisko na prsním dvorci (infiltrát adenokarcinomu mléčné žlázy) nebo extramamárně.",
                  "microscopy": "Histologicky:\n* <strong>Keratosis actinica</strong>: Hyperkeratóza s parakeratózou, jaderné atypie a ztráta polarity keratinocytů v dolních vrstvách epidermis.\n* <strong>Morbus Bowen</strong>: Kompletní dezorganizace epidermis, výrazné cytologické atypie, dyskeratóza (předčasné rohovění jednotlivých buněk), obrovské buňky a atypické mitózy v celé šíři epidermis. Bazální membrána je intaktní.\n* <strong>Pagetova choroba</strong>: Přítomnost velkých, světlých **Pagetových buněk** (PAS pozitivní, S100 negativní) v epidermis.",
                  "clinical": "Prekancerózy a karcinomy in situ představují riziko přechodu do invazivního spinocelulárního karcinomu (spinaliomu). U keratosis actinica dochází k progresi v cca 15-20 % případů. Queyratova erytroplazie má vyšší tendenci k časné invazi a metastazování než morbus Bowen na kůži.\nTerapie: Chirurgická **exstirpace** s histologickou kontrolou okrajů, **kryoterapie** tekutým dusíkem, <strong>fotodynamická terapie (PDT)</strong>, lokální aplikace 5-fluorouracilu nebo **imiquimodu**."
            },
            "quiz": [
                  {
                        "question": "Které z následujících tvrzení nejlépe definuje morbus Bowen?",
                        "options": [
                              "Benigní zánětlivé onemocnění napodobující psoriázu",
                              "Maligní melanocytární léze s vysokým rizikem časného hematogenního šíření",
                              "Carcinoma in situ kůže postihující celou tloušťku epidermis, přičemž bazální membrána je intaktní",
                              "Fakultativní prekanceróza vznikající výhradně v jizvách po popáleninách"
                        ],
                        "correct": 2,
                        "explanation": "<strong>Morbus Bowen</strong> je definován jako <strong>carcinoma in situ</strong> kůže. Atypické dysplastické keratinocyty a mitózy postihují celou tloušťku epidermis, ale proces je ohraničen na epidermis a neproniká přes bazální membránu do dermis. Nejedná se o zánět ani o melanocytární lézi."
                  },
                  {
                        "question": "Jak se klinicky projevuje Queyratova erytroplazie?",
                        "options": [
                              "Jako drsné rohovějící ložisko na čele a spáncích starších osob",
                              "Bělavým, snadno stíratelným povlakem na bukální sliznici",
                              "Sytě červeným, sametovým ložiskem na glans penis nebo předkožce",
                              "Bílým dvorcem v okolí získaného melanocytárního névu"
                        ],
                        "correct": 2,
                        "explanation": "<strong>Queyratova erytroplazie</strong> je histologický ekvivalent morbus Bowen (carcinoma in situ) lokalizovaný na sliznici glans penis nebo vnitřním listu předkožky. Projevuje se jako sytě červené, ostře ohraničené ložisko se sametovým či lesklým povrchem, které může snadno erodovat."
                  }
            ]
      },
      {
            "id": "derma-56",
            "title": "Benigní kožní nádory",
            "section": "Speciální dermatologie (Specka)",
            "keywords": [
                  "verruca seborrhoica",
                  "Leser-Trélat",
                  "keratoakantom",
                  "keloid",
                  "hemangiom",
                  "cylindrom"
            ],
            "content": {
                  "definition": "<strong>Benigní kožní nádory</strong> tvoří rozsáhlou a různorodou skupinu neoplazií kůže. Vycházejí z různých struktur: epidermis (epitelové), kožních adnex (adnexální), vazivové a podpůrné tkáně (mezenchymální) nebo krevního a lymfatického řečiště (vaskulární). Nevytvářejí metastázy a neohrožují pacienta bezprostředně na životě.",
                  "etiology": "Etiologie je převážně neznámá. U některých hraje roli genetická predispozice (např. AD dědičnost u cylindromu či leiomyomu), mechanické dráždění (u fibromů), virová infekce (HPV u keratoakantomu) nebo reaktivní zánětlivá odpověď po traumatu (u dermatofibromu a keloidu).",
                  "pathogenesis": "Podstatou je nekontrolovaná klonální proliferace zralých buněčných struktur (keratinocytů, fibroblastů, endotelií atd.) bez schopnosti invazivního destruktivního růstu do okolních tkání (výjimku tvoří lokálně agresivní chování některých obřích keratoakantomů).",
                  "macroscopy": "Výběr hlavních klinických jednotek:\n* <strong>Verruca seborrhoica</strong> (seboroická veruka): Mastný, žlutohnědý až černý, ostře ohraničený papilomatózní uzlík s drsným a drolivým povrchem. <strong>Leserův-Trélatův příznak</strong> označuje náhlý výsev těchto veruk jako paraneoplazii vnitřních orgánů.\n* <strong>Syringom</strong>: Mnohočetné, drobné (1-3 mm) tuhé papulky barvy kůže lokalizované periorbitálně u žen.\n* <strong>Cylindrom</strong>: Polokulovité tuhé hrboly ve kštici; při postižení celé kštice se označuje jako <strong>turbanový nádor</strong>.\n* <strong>Pilomatricoma</strong>: Velmi tvrdý, ohraničený, volně pohyblivý podkožní hrbol na hlavě nebo krku.\n* <strong>Keratoakantom</strong>: Rychle rostoucí (během týdnů) polokulovitý uzlík s navalitými okraji a **centrálním rohovým kráterem**.\n* <strong>Histiocytoma fibrosum (dermatofibrom)</strong>: Tuhý, hnědý uzlík v koriu, často na dolních končetinách.\n* <strong>Keloid</strong>: Valovitá, tuhá, červená až porcelánově bílá jizva, která **přesahuje** hranice původního traumatu.\n* <strong>Haemangioma capillare (jahodový hemangiom)</strong>: Rychle rostoucí, měkký, jasně červený hrbol u kojenců; do 7 let u 90 % dětí spontánně regreduje.\n* <strong>Granuloma pyogenicum</strong>: Sytě červený, snadno krvácející stopkatý uzlík po traumatu, často na prstech.",
                  "microscopy": "Histologie je specifická pro každou lézi:\n* <em>Seboroická veruka</em>: Exofytická papilomatózní akantóza s přítomností rohových pseudocyst.\n* <em>Cylindrom</em>: Ostrůvky bazaloidních buněk uspořádané jako skládačka (jigsaw puzzle), obklopené tlustou PAS-pozitivní **hyalinní membránou**.\n* <em>Pilomatricoma</em>: Ostrůvky bazofilních buněk přecházející v anukleární **stínové (ghost) buňky**, kalcifikace a osifikace.\n* <em>Keloid</em>: Homogenní, tlusté, hyalinní kolagenní snopce bez elastických vláken.\n* <em>Granuloma pyogenicum</em>: Lobulární proliferace kapilár v edematózním stromatu s chronickým zánětlivým infiltrátem.",
                  "clinical": "Klinicky se projevují estetickým handicapem, svěděním nebo mechanickou iritací (např. krvácení u granuloma pyogenicum, bolestivost u leiomyomu za chladu). Diferenciální diagnostika je klíčová – např. keratoakantom může histologicky i klinicky napodobovat spinaliom, granuloma pyogenicum zase amelanotický melanom.\nTerapie: Odstranění ostrou lžičkou (kyretáž), kryoterapie tekutým dusíkem, chirurgická **excize**, u hemangiomů případně lokální/celková léčba beta-blokátory (propranolol)."
            },
            "quiz": [
                  {
                        "question": "Který z následujících mezenchymálních nálezů je charakteristický tím, že roste za hranice původního poranění kůže a spontánně neregreduje?",
                        "options": [
                              "Hypertrofická jizva",
                              "Dermatofibrom",
                              "Keloid",
                              "Fibroma molle"
                        ],
                        "correct": 2,
                        "explanation": "<strong>Keloid</strong> je charakterizován nekontrolovanou produkcí kolagenu, přičemž se šíří za hranice původního traumatu a spontánně neregreduje. Na rozdíl od něj se hypertrofická jizva drží v mezích původní rány a časem má tendenci se oplošťovat."
                  },
                  {
                        "question": "Pro který benigní adnexální nádor je typický histologický nález bazaloidních buněk lemovaných hyalinní membránou uspořádaných jako skládačka?",
                        "options": [
                              "Syringom",
                              "Cylindrom",
                              "Pilomatrikom",
                              "Keratoakantom"
                        ],
                        "correct": 1,
                        "explanation": "Tento histologický obraz (ostrůvky bazaloidních buněk obklopené silnou PAS-pozitivní hyalinní membránou) je patognomický pro <strong>cylindrom</strong>. Cylindrom se klinicky může manifestovat jako turbanový tumor kštice."
                  }
            ]
      },
      {
            "id": "derma-57",
            "title": "Kožní karcinomy",
            "section": "Speciální dermatologie (Specka)",
            "keywords": [
                  "bazaliom",
                  "spinaliom",
                  "karcinom",
                  "vaskulární",
                  "Kaposi",
                  "DFSP"
            ],
            "content": {
                  "definition": "<strong>Kožní karcinomy</strong> (nemelanomové kožní nádory) jsou maligní novotvary vycházející z epitelu epidermis (bazaliom, spinaliom, verukózní karcinom) nebo mezenchymální tkáně (dermatofibrosarcoma protuberans, Kaposiho sarkom). Bazocelulární karcinom je nejčastějším maligním nádorem u lidí vůbec.",
                  "etiology": "Klíčovým faktorem je kumulativní expozice **UV záření** (zejména u spinaliomu) a intermitentní intenzivní oslunění (u bazaliomu). Mezi další příčiny patří fototyp I a II, expozice arzenu, chronické kožní léze (píštěle, jizvy po popáleninách), imunosuprese a u Kaposiho sarkomu infekce lidským herpesvirem 8 (**HHV-8**).",
                  "pathogenesis": "Mutace vyvolané UV zářením postihují klíčové signální dráhy. U bazaliomu jde o mutace v dráze <em>Hedgehog</em> (geny <em>PTCH1</em>, <em>SMO</em>), u spinaliomu o mutace v genu <em>TP53</em> a <em>HRAS</em>. Nádory infiltrují lokálně tkáň, spinaliom a Kaposiho sarkom mají navíc schopnost lymfogenního a hematogenního metastazování.",
                  "macroscopy": "Klinické formy:\n* <strong>Carcinoma basocellulare (bazaliom)</strong>: Lesklý uzlík barvy kůže s **teleangiektáziemi** na povrchu a perličkovým lemem. Může ulcerovat (<em>ulcus rodens</em>) a destruovat hluboké struktury (<em>ulcus terebrans</em>). Formy: nodulární, pigmentovaný, superficiální (červené ložisko na trupu), sklerodermiformní (tuhé ložisko podobné jizvě).\n* <strong>Carcinoma spinocellulare (spinaliom)</strong>: Tuhý, infiltrovaný, asymptomatický uzlík nebo verukózní ložisko, které se v centru rozpadá a tvoří vřed s navalitými okraji.\n* <strong>Carcinoma verrucosum</strong>: Květákovitý exofytický tumor (např. <em>epithelioma cuniculatum</em> na plosce nohy s tunely a kryptami).\n* <strong>Dermatofibrosarcoma protuberans (DFSP)</strong>: Pomalu rostoucí, tuhé, hrbolaté ložisko modročervené barvy, nejčastěji na trupu.\n* <strong>Kaposiho sarkom</strong>: Červenofialové až lividní skvrny, plaky a uzly na dolních končetinách, doprovázené výrazným edémem.",
                  "microscopy": "Histologický obraz:\n* <em>Bazaliom</em>: Ostrůvky a čepy bazaloidních buněk s **palisádovitým uspořádáním** jader na periferii a retrakčním artefaktem (odtržení stromatu).\n* <em>Spinaliom</em>: Infiltrace atypických dysplastických keratinocytů do dermis, patrné **rohové perly** (keratinizace) a atypické mitózy.\n* <em>DFSP</em>: Storiformní (rozetovité) uspořádání CD34-pozitivních vřetenitých buněk pronikajících do podkožního tuku (vzhled včelí plástve).\n* <em>Kaposiho sarkom</em>: Proliferace vřetenitých buněk, přítomnost štěrbinovitých cév bez endotelové výstelky plněných erytrocyty a melanofágů.",
                  "clinical": "Bazaliom roste lokálně destruktivně, ale téměř **nemetastazuje** (mortalita je nízká, ale morbidita při pozdní dg vysoká). Spinaliom má metastatický potenciál (lymfogenní), riziko je vysoké u lokalizací na přechodu sliznic (rty, vulva) a v jizvách. Gorlinův syndrom (AD) se projevuje mnohočetnými bazaliomy v mladém věku a keratocystami čelistí. Kaposiho sarkom má agresivní průběh u pacientů s AIDS (epidemická forma).\nTerapie: Chirurgická **radikální excize** (u rizikových bazaliomů Mohsova mikrografická chirurgie), radioterapie (u inoperabilních či starších pacientů). U pokročilých bazaliomů se používá cílená léčba (inhibitory Hedgehog dráhy – **vismodegib**)."
            },
            "quiz": [
                  {
                        "question": "Který z kožních karcinomů je charakterizován histologickým nálezem palisádovitého uspořádání jader na periferii nádorových čepů a prakticky nemetastazuje?",
                        "options": [
                              "Carcinoma spinocellulare (spinaliom)",
                              "Carcinoma basocellulare (bazaliom)",
                              "Dermatofibrosarcoma protuberans",
                              "Carcinoma verrucosum"
                        ],
                        "correct": 1,
                        "explanation": "<strong>Bazaliom</strong> (carcinoma basocellulare) je charakterizován palisádovitým řazením bazaloidních buněk na periferii čepů a retrakčním zářezem od okolního stromatu. Tento nádor roste lokálně invazivně a destruktivně, ale metastazuje pouze v naprosto raritních případech."
                  },
                  {
                        "question": "Který z následujících syndromů se projevuje výskytem mnohočetných bazaliomů již v mladém věku, čelistními keratocystami a skeletálními anomáliemi?",
                        "options": [
                              "Peutz-Jeghersův syndrom",
                              "Klippel-Trenaunayův syndrom",
                              "Gorlinův syndrom (syndrom névoidních bazaliomů)",
                              "Sturge-Weberův syndrom"
                        ],
                        "correct": 2,
                        "explanation": "<strong>Gorlinův syndrom</strong> (syndrom névoidních bazaliomů) je autozomálně dominantní onemocnění způsobené mutací genu PTCH1. Projevuje se časným vývojem stovek bazaliomů, odontogenními keratocystami čelistí, kalcifikací falx cerebri a skeletálními vadami."
                  }
            ]
      },
      {
            "id": "derma-58",
            "title": "Maligní melanom",
            "section": "Speciální dermatologie (Specka)",
            "keywords": [
                  "melanom",
                  "Breslow",
                  "Clark",
                  "sentinelová uzlina",
                  "biologická léčba",
                  "ABCDE"
            ],
            "content": {
                  "definition": "<strong>Maligní melanom</strong> je jeden z nejzhoubnějších lidských nádorů, vycházející z neuroektodermálních <strong>melanocytů</strong>. Postihuje převážně kůži, ale může vzniknout i na sliznicích, v oku (uvea, konjunktiva) nebo vzácně v meningách a vnitřních orgánech. Vyznačuje se časným a agresivním lymfogenním i hematogenním metastazováním.",
                  "etiology": "Hlavním rizikovým faktorem je intermitentní, intenzivní expozice **UV záření** s anamnézou spálení kůže (zejména v dětství). Dalšími faktory jsou fototyp I a II (světlá kůže, zrzavé vlasy), vysoký počet běžných névů, přítomnost atypických (dysplastických) névů a familiární výskyt. Geneticky jsou často přítomny mutace v dráze MAPK (geny <em>BRAF</em>, <em>NRAS</em>, <em>c-KIT</em>).",
                  "pathogenesis": "Nádor roste ve dvou fázích:\n1. <strong>Horizontální (radiální) fáze</strong>: Atypické melanocyty se šíří intraepidermálně do stran. V této fázi je riziko metastáz minimální.\n2. <strong>Vertikální fáze</strong>: Nádorové buňky infiltrují hlubší vrstvy koria, získávají schopnost neoangiogeneze a pronikají do lymfatických a krevních cév, což vede k metastazování.",
                  "macroscopy": "Klinicky se hodnotí dle **ABCDE pravidel** (Asymmetry, Border, Color, Diameter > 6mm, Evolution/vývoj). Hlavní klinicko-patologické typy:\n* <strong>Superficiálně se šířící melanom (SSM)</strong>: Nejčastější (60-70 %). Nepravidelně pigmentovaná skvrna s barevnými tóny (hnědá, černá, růžová, bílá - regrese). U mužů na trupu, u žen na bércích.\n* <strong>Nodulární melanom (NM)</strong>: 15-30 %. Rychle rostoucí, tmavě hnědý až černý (nebo amelanotický růžový) hrbol, který časně ulceruje a krvácí. Nemá horizontální fázi růstu.\n* <strong>Lentigo maligna melanom (LMM)</strong>: Vzniká na obličeji starších osob z preexistující skvrny <em>lentigo maligna</em>.\n* <strong>Akrolentiginózní melanom (ALM)</strong>: Na dlaních, ploskách a subungválně (projevuje se jako tmavá šmouha pod nehtem – <em>Hutchinsonovo znamení</em>).",
                  "microscopy": "Histologicky se hodnotí:\n* **Tloušťka nádoru dle Breslowa**: Měří se v milimetrech od stratum granulosum po nejhlubší bod invaze. Je to nejdůležitější prognostický faktor.\n* **Hloubka invaze dle Clarka**: Anatomické stupně I (pouze epidermis) až V (infiltrace podkožního tuku).\n* Přítomnost **ulcerace** a **mitotický index** (počet mitóz na mm²).\n* Lymfocytární infiltrace infiltrující tumor (TIL - tumor-infiltrating lymphocytes).",
                  "clinical": "Maligní melanom má obrovský sklon k metastazování do regionálních lymfatických uzlin a hematogenně do jakéhokoli orgánu (plíce, mozek, játra, kůže, tenké střevo). Staging se opírá o Breslowův index, ulceraci a stav <strong>sentinelové uzliny</strong> (sentinel lymph node biopsy – SLNB), která se indikuje u melanomů s tloušťkou nad 0,8 mm.\nTerapie:\n* <strong>Chirurgická</strong>: Široká excize s bezpečnostním lemem (u melanomu in situ 0,5 cm, u tloušťky do 1 mm lem 1 cm, u tloušťky nad 1 mm lem 2 cm až na fascii).\n* <strong>Adjuvantní a systémová</strong>: Cílená léčba u BRAF-pozitivních pacientů (kombinace inhibitorů BRAF a MEK: např. **vemurafenib + cobimetinib**, dabrafenib + trametinib) a **imunoterapie** (anti-PD1: nivolumab, pembrolizumab; anti-CTLA4: ipilimumab)."
            },
            "quiz": [
                  {
                        "question": "Který prognostický parametr primárního kožního melanomu je v současnosti považován za nejdůležitější pro staging a určení prognózy?",
                        "options": [
                              "Hloubka invaze podle Clarka (anatomické vrstvy)",
                              "Vertikální tloušťka nádoru v milimetrech podle Breslowa",
                              "Maximální horizontální průměr léze",
                              "Barva a stupeň pigmentace nádoru"
                        ],
                        "correct": 1,
                        "explanation": "<strong>Breslowův index</strong> (vertikální tloušťka nádoru v milimetrech) je nejdůležitějším a nejobjektivnějším prognostickým faktorem primárního melanomu. Clarkovo schéma (invaze podle anatomických struktur) je zatíženo subjektivitou a v moderní AJCC klasifikaci má menší význam."
                  },
                  {
                        "question": "Jaký je doporučený bezpečnostní lem chirurgické excize u invazivního melanomu s tloušťkou podle Breslowa 1,5 mm?",
                        "options": [
                              "5 mm",
                              "1 cm",
                              "2 cm",
                              "5 cm"
                        ],
                        "correct": 2,
                        "explanation": "U melanomů s tloušťkou podle Breslowa 1,0 mm and více (tedy i 1,5 mm) se doporučuje provést excizi s <strong>bezpečnostním lemem 2 cm</strong>. Pro melanomy pod 1,0 mm stačí lem 1 cm, pro melanom in situ lem 0,5 cm. Větší lem než 2 cm podle studií nezlepšuje přežití pacienta."
                  }
            ]
      },
      {
            "id": "derma-59",
            "title": "Onemocnění nehtů",
            "section": "Speciální dermatologie (Specka)",
            "keywords": [
                  "nehet",
                  "onychomykóza",
                  "paronychium",
                  "Beauovy linie",
                  "onycholýza",
                  "unguis incarnatus"
            ],
            "content": {
                  "definition": "<strong>Onemocnění nehtů</strong> (onychopatie) zahrnují široké spektrum strukturálních, zbarvovacích a zánětlivých změn postihujících nehtový aparát (nehtovou ploténku, matrix, lůžko a nehtové valy). Mohou být projevem místního poškození nebo symptomem závažných systémových chorob.",
                  "etiology": "Příčiny se dělí na:\n1. <strong>Místní</strong>: Mechanická traumata (akutní/chronická), chemické iritace (časté mytí rukou, saponáty, kosmetická rozpouštědla), infekce (dermatofyty, kvasinky, bakterie – <em>Staphylococcus aureus</em>, <em>Pseudomonas aeruginosa</em>).\n2. <strong>Systémové</strong>: Kožní dermatózy (psoriáza, ekzém, alopecia areata, lichen planus), interní choroby (kardiovaskulární, plicní, renální, jaterní, anémie, endokrinopatie), intoxikace léky (cytostatika, kovy) a vrozené syndromy.",
                  "pathogenesis": "Patogeneze vychází z místa poškození:\n* Poškození **nehtové matrix** (např. zánětem, traumatem) se projeví změnami tvaru, struktury a růstu ploténky, které postupně odrůstají.\n* Poškození **nehtového lůžka** způsobuje poruchu adheze ploténky a vede k jejímu stacionárnímu odloučení.\n* Poškození **nehtových valů** (paronychium) vzniká narušením kutikuly (eponychium), což umožňuje průnik patogenů do tkáně.",
                  "macroscopy": "Klinické projevy rozdělujeme na:\n1. <strong>Změny tvaru a struktury</strong>:\n* <strong>Beauovy-Reilovy linie</strong>: Příčné rýhy způsobené dočasným zastavením růstu matrix (při těžkých infekcích, chemoterapii).\n* <strong>Onychorrhexis</strong>: Podélné rýhování a křehkost nehtu se štěpením.\n* <strong>Onychoschisis</strong>: Horizontální štěpení volného okraje nehtu do vrstev (saponáty).\n* <strong>Onychogryphosis</strong>: Zbytnění a drápovité zahnutí nehtu.\n* <strong>Koilonychie</strong>: Lžičkovité prohnutí nehtové ploténky (u sideropenické anémie).\n* <strong>Paličkovité prsty</strong> (tvar hodinkového skla): U chronických plicních a srdečních chorob s hypoxií.\n2. <strong>Změny barvy</strong>: Bílé skvrny (leukonychia), podélná melanonychie (proužek pigmentu u névů/melanomu), zelené zbarvení (infekce *Pseudomonas*), half-and-half nail (uremie).\n3. <strong>Odloučení nehtu</strong>: Onycholysis (částečné odloučení od lůžka od distálního konce), onychomadesis (úplné odloučení a vypadnutí od matrix).\n4. <strong>Postižení valů</strong>:\n* <strong>Paronychium acutum</strong>: Akutní, bolestivý bakteriální zánět valu s hnisavou sekrecí.\n* <strong>Paronychium chronicum</strong>: Chronické zduření a zarudnutí, ztráta kutikuly, sekrece (vyvolané kvasinkami *Candida* u osob s trvale vlhkýma rukama).\n* <strong>Unguis incarnatus</strong> (zarůstající nehet): Tlak okraje ploténky do valu s rozvojem granulací (granuloma pyogenicum) a hnisání.",
                  "microscopy": "Histopatologické vyšetření se využívá zřídka (např. u podezření na subungvální melanom, glomus tumor). U onychomykóz je klíčový mikroskopický průkaz vláken hub (hyf) v louhovém (KOH) preparátu a kultivace.",
                  "clinical": "Onychopatie způsobují pacientům výrazný kosmetický a funkční handicap (bolestivost při chůzi či manuální práci). Časté je postižení nehtů u **psoriázy** (tzv. olejové skvrny, jamkování nehtů – syndrom náprstku, subungvální hyperkeratóza).\nTerapie: Odstranění vyvolávající příčiny. U bakteriálních infekcí lokální či celková ATB, u onychomykóz lokální (laky) nebo systémová antimykotika (terbinafin, itrakonazol). U zarůstajícího nehtu korekce stříhání (stříhat rovně!), rovnátka na nehty (ortonyxie), při selhání chirurgická klínovitá resekce valu a matrix."
            },
            "quiz": [
                  {
                        "question": "Který z následujících termínů označuje částečné, stacionární odloučení nehtové ploténky od nehtového lůžka, které začíná na volném distálním okraji?",
                        "options": [
                              "Onychomadesis",
                              "Onycholysis",
                              "Onychorrhexis",
                              "Onychoschisis"
                        ],
                        "correct": 1,
                        "explanation": "<strong>Onycholysis</strong> označuje částečné odloučení ploténky od lůžka, začínající distálně a postupující proximálně. Naproti tomu <em>onychomadesis</em> je kompletní odloučení celé ploténky od nehtové matrix, vedoucí k jejímu úplnému odhojení a vypadnutí."
                  },
                  {
                        "question": "Jaká je nejčastější etiopatogenetická příčina chronického zánětu nehtového valu (paronychium chronicum)?",
                        "options": [
                              "Staphylococcus aureus u zdravých sportovců",
                              "Infekce roztočem Sarcoptes scabiei",
                              "Candida albicans u lidí pracujících ve vlhkém prostředí",
                              "Infekce lidským papilomavirem (HPV)"
                        ],
                        "correct": 2,
                        "explanation": "<strong>Paronychium chronicum</strong> je nejčastěji způsobeno kvasinkou <strong>Candida albicans</strong> v kombinaci s mechanickým a chemickým poškozením (saponáty, voda). Typicky postihuje profese jako kuchaři, uklízeči nebo cukráři. Akutní paronychium (paronychium acutum) bývá vyvoláno spíše bakteriálně (např. <em>Staphylococcus aureus</em>)."
                  }
            ]
      },
      {
            "id": "derma-60",
            "title": "Primární kožní lymfomy – mycosis fungoides",
            "section": "Speciální dermatologie (Specka)",
            "keywords": [
                  "lymfom",
                  "mycosis fungoides",
                  "Sézary",
                  "epidermotropismus",
                  "Pautrier",
                  "CD30"
            ],
            "content": {
                  "definition": "<strong>Primární kožní lymfomy</strong> jsou extranodální neoplazie lymfatického systému, které se v době diagnózy manifestují výhradně v kůži. Dělí se na T-buněčné (CTCL, tvoří cca 75–80 %) a B-buněčné (CBCL). Nejčastějším kožním T-lymfomem je <strong>mycosis fungoides</strong>.",
                  "etiology": "Etiopatogeneze je neznámá. Předpokládá se role dlouhodobé chronické antigenní stimulace (např. infekčními agens), mutace genů regulujících apoptózu a vlivy vnějšího prostředí.",
                  "pathogenesis": "Podstatou mycosis fungoides je maligní klonální proliferace zralých pomocných T-lymfocytů (<strong>CD4+</strong>). Tyto buňky exprimují specifické homing receptory pro usídlení v kůži (kožní lymfocytární antigen **CLA**, chemokinové receptory CCR4 a CCR10). Nádorové lymfocyty aktivně migrují do epidermis (proces zvaný <strong>epidermotropismus</strong>) bez přítomnosti spongiózy, což je klíčový patogenetický znak.",
                  "macroscopy": "Klinický obraz mycosis fungoides (klasická forma Alibert-Bazin) probíhá ve třech na sebe navazujících stadiích:\n1. <strong>Stadium premykotické (ekzematoidní)</strong>: Nesvědivá nebo mírně svědivá erytematoskvamózní ložiska na neosluněných partiích (hýždě, prsa), připomínající ekzém nebo <em>parapsoriasis en plaques</em>.\n2. <strong>Stadium infiltrační (plakovité)</strong>: Ložiska infiltrují, splývají v tuhé vyvýšené plaky červenofialové barvy s tendencí k anulárnímu uspořádání.\n3. <strong>Stadium tumorózní</strong>: Vývoj polokulovitých červenohnědých nádorů (tvarem připomínajících klobouk hub), které se rozpadají v hluboké vředy. V této fázi dochází k diseminaci do lymfatických uzlin a vnitřních orgánů.\n* <strong>Sézaryho syndrom</strong>: Závažná leukemická varianta CTCL, charakterizovaná triádou: generalizovaná <strong>erytrodermie</strong> (kůže celého těla je červená, olupuje se a úporně svědí), generalizovaná lymfadenopatie a přítomnost atypických lymfocytů v krvi.",
                  "microscopy": "Histologicky je u mycosis fungoides přítomen <strong>epidermotropismus</strong> – atypické T-lymfocyty s nepravidelnými, členitými, tzv. <strong>cerebriformními jádry</strong> pronikají do epidermis. Zde se shlukují do drobných hnízd zvaných **Pautrierovy mikroabscesy**. V horním koriu je přítomen pásovitý lymfocytární infiltrát. U Sézaryho syndromu se prokazují **Sézaryho buňky** v krvi.",
                  "clinical": "Průběh mycosis fungoides je chronický, pozvolný a trvá i desítky let. Sézaryho syndrom má naopak velmi agresivní průbeh s přežitím 2-4 roky, pacienti umírají nejčastěji na oportunní infekce v důsledku hlubokého imunodeficitu. Mezi další lymfomy patří CD30+ anaplastický velkobuněčný lymfom a benigní pseudolymfomy (např. <em>lymphocytoma cutis</em> vyvolaný borreliemi).\nTerapie: U časných stadií lokální: **PUVA / UVB** fototerapie, lokální kortikoidy, bexaroten (retinoid) nebo lokální chemoterapie (karmustin). U tumorózního stadia celková chemoterapie, biologická léčba (např. brentuximab vedotin proti CD30) a extrakorporální fotofereze (u Sézaryho sy)."
            },
            "quiz": [
                  {
                        "question": "Který z následujících imunofenotypů je charakteristický pro maligní buňky u klasické formy mycosis fungoides?",
                        "options": [
                              "CD3+, CD4+, CD8-",
                              "CD3+, CD4-, CD8+",
                              "CD19+, CD20+, CD5+",
                              "CD30+, CD56+, CD3-"
                        ],
                        "correct": 0,
                        "explanation": "Mycosis fungoides je primárně kožní T-lymfom vycházející ze zralých helperových (pomocných) T-lymfocytů. Pro ty je typický imunofenotyp <strong>CD3+, CD4+, CD8-</strong>. CD19+ a CD20+ jsou markery B-lymfocytů."
                  },
                  {
                        "question": "Která klinická triáda symptomů definuje Sézaryho syndrom?",
                        "options": [
                              "Alopecie, koilonychie a onycholýza",
                              "Erytrodermie, generalizovaná lymfadenopatie a průkaz Sézaryho buněk v krvi",
                              "Urtikárie, angioedém a anafylaxe",
                              "Mnohočetné bazaliomy, keratocysty čelistí a skolióza"
                        ],
                        "correct": 1,
                        "explanation": "<strong>Sézaryho syndrom</strong> je charakterizován triádou: generalizovaná <strong>erytrodermie</strong> (zarudnutí celého těla), generalizovaná <strong>lymfadenopatie</strong> a přítomnost atypických T-lymfocytů s cerebriformním jádrem (Sézaryho buněk) v periferní krvi a kůži."
                  }
            ]
      },
      {
            "id": "derma-61",
            "title": "Pruritus a prurigo",
            "section": "Speciální dermatologie (Specka)",
            "keywords": [
                  "pruritus",
                  "prurigo",
                  "svědění",
                  "notalgia",
                  "exkoriace",
                  "Hyde"
            ],
            "content": {
                  "definition": "<strong>Pruritus</strong> (svědění) je subjektivně nepříjemný kožní pocit vyvolávající potřebu škrábání; v dermatologii jde o nejčastější symptom. <strong>Prurigo</strong> je skupina zánětlivých kožních onemocnění charakterizovaných výsevem silně svědících papul, séropapul a tuhých uzlíků (nodulů) vznikajících reaktivně.",
                  "etiology": "Příčiny se liší:\n1. <strong>Pruritus</strong>: Může doprovázet kožní nemoci (ekzém, kopřivka, svrab, lupénka), nebo být projevem <strong>systémových chorob</strong> (renální uremie, jaterní cholestáza, hematologické malignity jako Hodgkinův lymfom či polycythaemia vera, endokrinopatie – diabetes, hypertyreóza, infekce HIV, neuropatie a psychiatrické poruchy).\n2. <strong>Prurigo</strong>: Je reakcí kůže na svědění u predisponovaných osob (např. atopiků), zhoršuje se psychosomatickými vlivy, vnitřními chorobami (metabolické poruchy, parazitózy) nebo hmyzím kousnutím.",
                  "pathogenesis": "Svědění vzniká stimulací volných nervových zakončení (<strong>C-vlákna</strong>) v kůži chemickými mediátory (histamin, serotonin, tryptáza, neuropeptidy, cytokiny – zejména **IL-31**). Vzruch se šíří spinotalamickou drahou do somatosenzorické kůry. Škrábání vede k narušení bariéry, uvolnění dalších cytokinů (circulus vitiosus) a v případě pruriga k hyperplazii nervových vláken a epidermis v místě mechanického dráždění.",
                  "macroscopy": "Klinický obraz:\n* <strong>Pruritus</strong>: Primárně na kůži chybí eflorescence (kromě suchosti); sekundárně v důsledku škrábání vznikají <strong>exkoriace</strong>, krusty, lichenifikace a impetiginizace. K lokalizovaným formám patří <em>pruritus ani/vulvae</em> a <em>notalgia paresthetica</em> (svědivé hyperpigmentované ložisko pod lopatkou).\n* <strong>Prurigo acuta (strophulus infantum)</strong>: U dětí, výsev silně svědivých urtikariálních papul a séropapul (papula s drobným puchýřkem na vrcholu), které se škrábáním mění v krusty a hojí se pigmentacemi.\n* <strong>Prurigo simplex subacuta</strong>: U dospělých, symetrický výsev červenohnědých svědivých papul a uzlíků s exkoriacemi na extenzorech končetin a trupu.\n* <strong>Prurigo nodularis (Hyde)</strong>: Chronické onemocnění s výskytem mnohačetných (až desítek), tuhých, hnědošedých, polokulovitých uzlů (velikosti až 1–2 cm) s bradavičnatým povrchem, lokalizovaných na extenzorech končetin (zejména bérce). Kůže mezi uzly je nezměněná.",
                  "microscopy": "U <em>prurigo nodularis</em> nacházíme histologicky výraznou <strong>pseudoepiteliomatózní hyperplazii</strong> epidermis, masivní hyperkeratózu s parakeratózou, nepravidelnou akantózu a zmnožení a zbytnění dermálních nervových vláken (<strong>neuropathia pruriginosa</strong>). V koriu je hustý lymfohistiocytární infiltrát s mastocyty.",
                  "clinical": "Chronický pruritus a prurigo výrazně snižují kvalitu života pacientů (deprese, nespavost). U nejasného generalizovaného pruritu je nutné provést screening k vyloučení systémové příčiny (krevní obraz, jaterní enzymy, bilirubin, urea, kreatinin, glykemie, hormony štítné žlázy, stolice na parazity).\nTerapie: Promašťování (emoliencia), lokální antipruriginóza (s mentolem, kafrem, polidokanolem), lokální a intralezionální **kortikoidy**. Celkově antihistaminika (zejména sedativní), gabapentinoidy (u renálního a neuropatického pruritu) a u prurigo nodularis moderní biologická léčba (anti-IL-4/13 – **dupilumab**). Úspěšná je také **UVB fototerapie**."
            },
            "quiz": [
                  {
                        "question": "Které systémové onemocnění je typickou příčinou generalizovaného pruritu, který se klasicky provokuje nebo zhoršuje po kontaktu s vodou (tzv. akvagenní pruritus)?",
                        "options": [
                              "Diabetes mellitus",
                              "Addisonova choroba",
                              "Polycythaemia vera",
                              "Hypotyreóza"
                        ],
                        "correct": 2,
                        "explanation": "U <strong>polycythaemia vera</strong> (myeloproliferativní onemocnění) dochází k nadprodukci erytrocytů a degranulaci mastocytů. Projevuje se typickým úporným <strong>akvagenním pruritem</strong> (svěděním po koupeli nebo sprchování v teplé vodě)."
                  },
                  {
                        "question": "Jaká histopatologická změna je charakteristická pro prurigo nodularis (Hyde)?",
                        "options": [
                              "Masivní spongióza s tvorbou intraepidermálních puchýřků",
                              "Atrofie epidermis a vymizení kolagenu v dermis",
                              "Pseudoepiteliomatózní hyperplazie epidermis a neurogenní hyperplazie (ztluštění nervů) v koriu",
                              "Subepidermální puchýře a leukocytoklastická vaskulitida"
                        ],
                        "correct": 2,
                        "explanation": "Pro <strong>prurigo nodularis</strong> je typická reaktivní hyperplazie epidermis (pseudoepiteliomatózní hyperplazie) v reakci na chronické škrábání, doprovázená proliferací a zbytněním periferních nervových vláken v dermis."
                  }
            ]
      },
      {
            "id": "derma-62",
            "title": "Syphilis – etiologie, základní rozdělení, léčba",
            "section": "Venerologie",
            "keywords": [
                  "syfilis",
                  "lues",
                  "Treponema pallidum",
                  "penicilin",
                  "Jarischova-Herxheimova reakce",
                  "Hoigného syndrom"
            ],
            "content": {
                  "definition": "<strong>Syfilis (lues)</strong> je chronické, celosvětově se vyskytující infekční onemocnění přenášené především <strong>pohlavním stykem</strong>. Postihuje různé orgány včetně kůže, kardiovaskulárního systému, muskuloskeletálního aparátu a centrálního nervového systému. Vykazuje charakteristické střídání klinicky manifestních stadií s obdobím latence.",
                  "etiology": "Původcem onemocnění je spirochéta <strong>Treponema pallidum subsp. pallidum</strong>. Jedná se o anaerobní či mikroaerobní, spirálovitou bakterii, jejíž šroubovicový tvar jí umožňuje <strong>vývrtkový pohyb</strong> skrz viskózní média (hlen). Je extrémně citlivá na vnější vlivy (vyschnutí, teploty nad 39 °C, změny pH a přítomnost kyslíku). Bakterii <strong>nelze kultivovat</strong> na běžných umělých půdách. Jediným přirozeným hostitelem a zdrojem nákazy je nemocný člověk.",
                  "pathogenesis": "Treponema pallidum proniká do organismu drobnými defekty v kůži či sliznici (nejčastěji při pohlavním styku). V místě vstupu se množí a rychle proniká do lymfatických cév a spádových uzlin, odkud se hematogenní cestou šíří do celého těla. Množí se extracelulárně a nevyvolává chemotaxi polymorfonukleárů. Morfologické změny jsou ve všech stadiích dány <strong>poškozením endotelu kapilár</strong> a zánětlivou infiltrací. Pozdní projevy syfilis (terciární stadium) jsou způsobeny <strong>imunopatologickými ději</strong> (hyperergní reakcí na treponemové antigeny), nikoli přímým destruktivním působením bakterií, které jsou v této fázi v organismu téměř eliminovány.",
                  "macroscopy": "V časné fázi se objevuje <strong>ulcus durum</strong> (tvrdý vřed) v místě inokulace, doprovázený regionální lymfadenopatií (primární komplex). V sekundárním stadiu dominuje generalizovaný makulopapulózní exantém a <strong>condylomata lata</strong> (mokvavé ploché vegetace). Terciární stadium se projevuje <strong>gummaty</strong> – tuhými podkožními uzly, které centrálně kolikvují a perforují za vzniku hlubokých vředů s navalitými okraji a žlutavou viskózní spodinou.",
                  "microscopy": "Histopatologickým korelátem všech stadií syfilis je <strong>endarteritis obliterans</strong> s endoteliální proliferací, otokem cévní stěny a hustým perivaskulárním infiltrátem s dominantním zastoupením <strong>plazmatických buněk</strong> (plazmocytů) a lymfocytů. V terciárním stadiu se tvoří <strong>infekční granulomy</strong> s centrální kaseózní nekrózou, obklopenou epiteloidními buňkami, Langhansovými obrovskými buňkami a plazmocyty.",
                  "clinical": "Klinicky se syfilis dělí na: 1) <strong>Časnou syfilis</strong> (do 2 let od infekce, vysoce infekční) – zahrnuje primární, sekundární a časnou latentní syfilis. 2) <strong>Pozdní syfilis</strong> (po 2 letech od infekce, minimálně infekční) – zahrnuje pozdní latentní syfilis a terciární stadium. Terapie první volby je <strong>benzathin penicilin G</strong> (2,4 mil. IU i.m. jednorázově u časné syfilis; u pozdní 3 dávky v týdenních intervalech). U neurosyfilis se podává krystalický <strong>benzylpenicilin</strong> (18–24 mil. IU/den i.v. po dobu 10–14 dnů). Při léčbě může vzniknout <strong>Jarischova-Herxheimova reakce</strong> (systémová reakce na rozpad spirochet) či <strong>Hoigného syndrom</strong> (pseudoanafylaktická reakce na prokain penicilin)."
            },
            "quiz": [
                  {
                        "question": "Která z následujících reakcí je charakterizována tachykardií, hypertenzí, panickým strachem ze smrti a sluchovými/zrakovými halucinacemi po intramuskulární aplikaci prokain penicilinu?",
                        "options": [
                              "Jarischova-Herxheimova reakce",
                              "Hoigného syndrom",
                              "Lyellův syndrom",
                              "Anafylaktický šok"
                        ],
                        "correct": 1,
                        "explanation": "<strong>Hoigného syndrom</strong> je pseudoanafylaktická reakce způsobená náhlým proniknutím prokain penicilinu do krevního oběhu při i.m. aplikaci. Projevuje se panickým strachem, halucinacemi a kardiovaskulární excitací (tachykardie, hypertenze). Jarischova-Herxheimova reakce je způsobena rozpadem spirochet a projevuje se horečkou a chřipkovými příznaky."
                  },
                  {
                        "question": "Jaká je cílová koncentrace penicilinu v krvi, kterou je nutné udržet po dobu alespoň 7 dní při léčbě časné syfilis?",
                        "options": [
                              "0,003 IU/ml",
                              "0,03 IU/ml",
                              "0,3 IU/ml",
                              "3,0 IU/ml"
                        ],
                        "correct": 1,
                        "explanation": "Při léčbě syfilis je klíčové udržet penicilinemii nad <strong>0,03 IU/ml</strong> po dobu minimálně 7 dní, což odpovídá dlouhému replikačnímu cyklu Treponema pallidum (cca 33 hodin)."
                  }
            ]
      },
      {
            "id": "derma-63",
            "title": "Syphilis – mikroskopická a sérologická diagnostika",
            "section": "Venerologie",
            "keywords": [
                  "zástinová mikroskopie",
                  "VDRL",
                  "TPHA",
                  "FTA-ABS",
                  "reaginy",
                  "falešná pozitivita"
            ],
            "content": {
                  "definition": "<strong>Diagnostika syfilis</strong> je založena na kombinaci metod přímého průkazu Treponema pallidum (mikroskopie, PCR) a metod nepřímého průkazu (sérologická detekce specifických a nespecifických protilátek v séru a mozkomíšním moku).",
                  "etiology": "Biologické vlastnosti <strong>Treponema pallidum</strong> přímo ovlivňují možnosti diagnostiky. Jelikož je bakterie anaerobní a citlivá na kyslík, při odběru na zástinovou mikroskopii je nutné odebrat materiál z hloubky spodiny léze po mechanickém podráždění, nikoli z povrchového detritu. Nemožnost běžné kultivace činí sérologii a PCR hlavními pilíři diagnostiky.",
                  "pathogenesis": "V reakci na infekci produkuje imunitní systém dva typy protilátek. <strong>Nespecifické (antilipidové) protilátky</strong> (reaginy) vznikají jako reakce na lipidy uvolněné z poškozených buněk hostitele a treponem (detekují se netreponemovými testy). <strong>Specifické protilátky</strong> jsou namířeny proti treponemovým proteinům (detekují se treponemovými testy) a v organismu přetrvávají dlouhodobě i po úspěšné léčbě.",
                  "macroscopy": "Při odběru vzorku na přímou mikroskopii se makroskopicky hodnotí charakter eflorescence (např. čistá spodina tvrdého vředu s typickým serózním exsudátem). V sérologické laboratoři se u netreponemových testů (např. RPR) hodnotí makroskopická flokulace (vločkování) v reakční směsi antigen-protilátka.",
                  "microscopy": "<strong>Zástinová mikroskopie (darkfield)</strong> využívá speciální kondenzor, takže světelné paprsky dopadají na preparát ze stran a spirochety se jeví jako zářící spirály na tmavém pozadí, vykazující charakteristický rotační a ohýbavý pohyb. Histologicky se používá <strong>stříbření</strong> (Warthin-Starry) k vizualizaci spirochet v tkáni. Přímá imunofluorescence (DFA-TP) detekuje treponemy pomocí fluorescenčně značených protilátek.",
                  "clinical": "V klinické praxi se sérologie dělí na: 1) <strong>Netreponemové testy</strong> (VDRL, RPR) – pozitivní od 5.–6. týdne, slouží k hodnocení aktivity onemocnění a monitoraci úspěšnosti léčby (pokles titru). 2) <strong>Treponemové testy</strong> (TPHA, TPPA, ELISA, FTA-ABS) – specifické, pozitivní od 3.–4. týdne, zůstávají pozitivní doživotně (sérologická jizva). Každý pozitivní screeningový test musí být potvrzen <strong>konfirmačním testem</strong> (např. FTA-ABS, Western blot). Falešná pozitivita se vyskytuje u těhotenství, autoimunitních chorob (SLE), akutních viróz či jiných spirochetóz (borelióza)."
            },
            "quiz": [
                  {
                        "question": "Který z následujících sérologických testů se používá primárně ke sledování aktivity syfilis a hodnocení úspěšnosti léčby (pokles titru)?",
                        "options": [
                              "TPHA",
                              "FTA-ABS",
                              "VDRL",
                              "Western blot"
                        ],
                        "correct": 2,
                        "explanation": "<strong>VDRL</strong> (a RPR) je netreponemový test, který detekuje nespecifické antilipidové protilátky. Jeho titr koreluje s aktivitou infekce, a proto se využívá k monitorování úspěšnosti terapie (pokles titru). Specifické treponemové testy (TPHA, FTA-ABS, Western blot) zůstávají pozitivní doživotně."
                  },
                  {
                        "question": "Co je biologickým principem zástinové mikroskopie při diagnostice časné syfilis?",
                        "options": [
                              "Pozorování fluoreskujících protilátek navázaných na bakterie",
                              "Vizualizace spirochet na základě paprsků odražených od objektu do objektivu na tmavém pozadí",
                              "Barvení bakterií podle Grama na modrofialovo",
                              "Kultivace na selektivních čokoládových půdách"
                        ],
                        "correct": 1,
                        "explanation": "<strong>Zástinová mikroskopie</strong> využívá odrazu světla od spirochet do objektivu, díky čemuž bakterie svítí na temném poli. Tímto způsobem lze pozorovat živé, pohybující se Treponemy přímo ze sekretu vředu."
                  }
            ]
      },
      {
            "id": "derma-64",
            "title": "Syphilis primaria – klinický obraz, lokalizace, diferenciální diagnostika",
            "section": "Venerologie",
            "keywords": [
                  "ulcus durum",
                  "tvrdý vřed",
                  "primární komplex",
                  "lymfadenitida",
                  "ulcus mixtum"
            ],
            "content": {
                  "definition": "<strong>Syphilis primaria (primární syfilis)</strong> je první klinické stadium získané syfilis, které se rozvíjí po inkubační době v místě vstupu infekce a je charakterizováno tvorbou tvrdého vředu (ulcus durum) a spádové lymfadenopatie.",
                  "etiology": "Původcem je <strong>Treponema pallidum</strong>. Množství inokula a celkový stav hostitele ovlivňují délku inkubační doby (9–90 dní, průměrně 3 týdny). Užívání antibiotik pro jiné indikace může inkubační dobu výrazně prodloužit.",
                  "pathogenesis": "V místě inokulace treponemy proliferují, což vede k lokální zánětlivé reakci. Infiltrace lymfocyty a plazmatickými buňkami spolu s obliterací drobných cév vede k tkáňové nekróze a ulceraci. Treponemy současně migrují lymfatickými cévami do regionálních uzlin, kde vyvolávají specifický zánět, a odtud se šíří do systémového oběhu.",
                  "macroscopy": "<strong>Ulcus durum</strong> je typicky okrouhlý či oválný vřed o průměru do 2 cm. Má miskovitý (vyseknutý) vzhled s <strong>nepodminovanými infiltrovanými okraji</strong>, které jsou na pohmat tuhé (indurované). Spodina vředu je čistá, lesklá, červenohnědá, při kompresi secernuje čirý serózní exsudát. Vřed je <strong>striktně nebolestivý</strong>. Spádové lymfatické uzliny jsou zvětšené, tuhé, nebolestivé a volně pohyblivé.",
                  "microscopy": "V histologickém obraze tvrdého vředu dominuje výrazná <strong>endarteritis obliterans</strong> s hyperplazií endotelu a edémem cévní stěny. V okolí cév je přítomen hustý zánětlivý infiltrát složený převážně z <strong>plazmatických buněk</strong> a lymfocytů. Epidermis v centru vykazuje nekrózu a ulceraci. Spirochety lze prokázat stříbřením.",
                  "clinical": "Klinický obraz tvoří <strong>primární komplex</strong> (ulcus durum + regionální nebolestivá lymfadenitida). Nejčastější lokalizace (90 %) je <strong>genitální</strong> (glans penis, sulcus coronarius u mužů; labia, cervix u žen). Extragenitální lokalizace (10 %) zahrnuje rty, jazyk, tonsily (angína s jednostranným zduřením tonsily), perianální oblast. Atypické formy: <strong>oedema indurativum</strong> (masivní jednostranný tuhý edém labia majora či preputia), <strong>ulcus mixtum</strong> (smíšený vřed se současnou infekcí Haemophilus ducreyi). Neléčený vřed spontánně regreduje do 6 týdnů."
            },
            "quiz": [
                  {
                        "question": "Krete které dvě jednotky tvoří tzv. primární komplex (první stadium) u získané syfilis?",
                        "options": [
                              "Tvrdý vřed a generalizovaný exantém",
                              "Tvrdý vřed a spádová nebolestivá lymfadenitida",
                              "Měkký vřed a bolestivá supurující lymfadenitida",
                              "Gumma a postižení zadních provazců míšních"
                        ],
                        "correct": 1,
                        "explanation": "<strong>Primární komplex</strong> u syfilis se skládá z lokální léze (<strong>ulcus durum</strong> / tvrdý vřed) a spádové, regionální, jednostranné, charakteristicky nebolestivé lymfadenitidy (lymphadenitis specifica)."
                  },
                  {
                        "question": "Co je to ulcus mixtum?",
                        "options": [
                              "Vřed lokalizovaný současně na genitálu i extragenitálně",
                              "Současná infekce Treponema pallidum a Haemophilus ducreyi",
                              "Vřed vykazující jak makroskopické, tak mikroskopické známky karcinomu",
                              "Vřed u pacienta s koinfekcí HIV a syfilis"
                        ],
                        "correct": 1,
                        "explanation": "<strong>Ulcus mixtum</strong> (smíšený vřed) vzniká při simultánní inokulaci Treponema pallidum a Haemophilus ducreyi. Zpočátku se projevuje jako bolestivý měkký vřed (chancroid) a později získává tuhou konzistenci typickou pro tvrdý vřed (ulcus durum)."
                  }
            ]
      },
      {
            "id": "derma-65",
            "title": "Syphilis secundaria – klinický obraz, lokalizace, slizniční příznaky",
            "section": "Venerologie",
            "keywords": [
                  "syphilis secundaria",
                  "roseola syphilitica",
                  "condylomata lata",
                  "corona Veneris",
                  "Biettův límeček",
                  "Venušin náhrdelník"
            ],
            "content": {
                  "definition": "<strong>Syphilis secundaria (sekundární syfilis)</strong> je druhé stadium získané syfilis, vznikající jako důsledek hematogenního a lymfogenního rozsevu treponem v organismu, charakterizované generalizovaným nesvědivým exantémem a slizničními lézemi.",
                  "etiology": "Sekundární syfilis je způsobena masivní systémovou diseminací <strong>Treponema pallidum</strong> z primárního ložiska. Všechny kožní a slizniční léze v této fázi obsahují obrovské množství spirochet, což z nich činí vysoce infekční afekce.",
                  "pathogenesis": "Hematogenní a lymfogenní rozsev vyvolává imunitní odpověď organismu. Kožní a slizniční projevy jsou výsledkem lokální imunitní reakce na přítomnost bakterií v kapilárách dermis a slizničního chorion. Generalizovaná lymfadenopatie odráží reaktivní hyperplazii lymfatických uzlin v důsledku filtrace treponem.",
                  "macroscopy": "Kožní projevy jsou <strong>monomorfní, symetrické a nesvědivé</strong>. <strong>Roseola syphilitica</strong> (syfilis maculosa) se projevuje růžovými až červenými makulami podél štěpnosti kůže (hlavně na trupu). <strong>Syfilis papulosa</strong> tvoří červenohnědé ploché papuly, na dlaních a ploskách s lemem deskvamace (<strong>Biettův límeček</strong>) nebo hyperkeratózami (<strong>clavi syphilitici</strong>). V kštici dochází k ložiskovému výpadku vlasů (<strong>alopecia areolaris</strong> - \"molobytný\" vzhled). V zapářkových oblastech vznikají <strong>condylomata lata</strong> – mokvavé, ploché, vegetující papuly. Na krku se po zhojení tvoří hypopigmentace (<strong>Venušin náhrdelník</strong>).",
                  "microscopy": "V histologii sekundárních projevů nacházíme výrazný perivaskulární infiltrát tvořený <strong>lymfocyty a plazmatickými buňkami</strong>, edém endotelu a akantózu. U condylomata lata je přítomna výrazná hyperkeratóza, parakeratóza a spongióza s migrací neutrofilů do epidermis.",
                  "clinical": "Začátek je typicky v **9. týdnu** po infekci. Často doprovázen celkovými <strong>chřipkovými příznaky</strong> (horečka, bolesti svalů, kloubů, cefalea, polyadenitida). Slizniční příznaky postihují 1/3 pacientů: <strong>angina syphilitica</strong> (zarudnutí a povlaky tonsil), <strong>plaques muqueuses</strong> (slizniční pláty), <strong>plaques lisses</strong> (vyhlazená místa na jazyku), <strong>anguli syphilitici</strong> (bolestivé ragády koutků). Po odeznění příznaků pacient přechází do latentního stadia (syphilis secundaria latens), kdy je bez projevů, ale zůstává infekční."
            },
            "quiz": [
                  {
                        "question": "Který z následujících kožních nálezů je typický pro sekundární syfilis v intertriginózních oblastech a je charakterizován jako ploché, mokvavé papuly s vysokým obsahem treponem?",
                        "options": [
                              "Condylomata acuminata",
                              "Condylomata lata",
                              "Pemphigus vegetans",
                              "Eczema herpeticatum"
                        ],
                        "correct": 1,
                        "explanation": "<strong>Condylomata lata</strong> jsou ploché, mokvavé papuly v intertriginózních oblastech typické pro sekundární syfilis. Jsou vysoce infekční. Condylomata acuminata jsou způsobeny HPV a mají užší, papilomatózní strukturu."
                  },
                  {
                        "question": "Co označuje termín \"Biettův límeček\" v kontextu sekundární syfilis?",
                        "options": [
                              "Lokalizaci papulózního exantému na krku pacienta",
                              "Límeček šupinaté deskvamace na periferii syfilitických papul",
                              "Ztrátu vlasů v týlní oblasti kštice",
                              "Bělavý povlak na sliznici dutiny ústní při syfilitické angíně"
                        ],
                        "correct": 1,
                        "explanation": "<strong>Biettův límeček</strong> je prstenec šupinaté kůže (deskvamace) obklopující periferii červenohnědých lesklých papul, které se typicky tvoří na dlaních a ploskách u sekundární syfilis."
                  }
            ]
      },
      {
            "id": "derma-66",
            "title": "Syphilis tertiaria – kožní, slizniční, neurologické a orgánové projevy",
            "section": "Venerologie",
            "keywords": [
                  "syphilis tertiaria",
                  "gumma",
                  "tabes dorsalis",
                  "paralysis progressiva",
                  "Argyll-Robertsonova zornice",
                  "KVS syfilis"
            ],
            "content": {
                  "definition": "<strong>Syphilis tertiaria (terciární syfilis)</strong> je pozdní, neinfekční stadium syfilis, které se rozvíjí po letech latence u neléčených pacientů a je charakterizováno granulomatózními změnami na kůži, sliznicích, v kostech, kardiovaskulárním a centrálním nervovém systému.",
                  "etiology": "Původce <strong>Treponema pallidum</strong> je v terciárních lézích přítomen pouze v minimálním množství (často detekovatelný pouze pomocí PCR). Závažné destrukce tkání jsou způsobeny hyperergní imunitní reakcí na treponemové antigeny.",
                  "pathogenesis": "Základem patogeneze je <strong>granulomatózní zánět</strong> s tvorbou gummat a difúzní intersticiální infiltrace. V cévním systému dochází k poškození vasa vasorum velkých cév (např. aorty), což vede k oslabení stěny a vzniku aneurysmat. V nervovém systému dochází k demyelinizaci zadních provazců míšních a degeneraci neuronů v mozkové kůře.",
                  "macroscopy": "Na kůži dominují <strong>gumata</strong> – tuhé podkožní uzly, které měknou, provalují se navenek a tvoří hluboké vředy s navalitými okraji, ze kterých vytéká žlutavý vazký sekret. Na sliznicích gumata destruují tvrdé patro a nosní přepážku (<strong>sedlovitý nos</strong>). Jazyk vykazuje jizvení a rozbrázdění (<strong>glossitis interstitialis - lingua lobata</strong>). Kardiovaskulární postižení zahrnuje <strong>aneurysma ascendentní aorty</strong>. V kostech vznikají deformity (šavlovité tibie).",
                  "microscopy": "Histologicky gumma představuje <strong>infekční granulom</strong> s centrální kaseózní nekrózou. Kolem nekrózy je lem z epiteloidních buněk, Langhansových obrovských buněk, lymfocytů a velkého množství <strong>plazmatických buněk</strong>. Výrazná je proliferativní endarteritida v okolí granulomů.",
                  "clinical": "Manifestuje se za **3–7 i více let** (neurosyfilis a KVS syfilis až za 5–35 let) po infekci. Orgánové projevy: aortální insuficience, aneurysma aortálního oblouku. Neurologické projevy: 1) <strong>Tabes dorsalis</strong> (degenerace zadních provazců) – lancinující bolesti, ataxie, <strong>Rombergovo znamení</strong>, ztráta patelárního reflexu. 2) <strong>Paralysis progressiva</strong> (postižení čelního laloku) – změny osobnosti, demence, expanzivní bludy, dysartrie. Typickým příznakem je <strong>Argyll-Robertsonova zornice</strong> (zornice miotické, nereagují na světlo, ale reagují na akomodaci)."
            },
            "quiz": [
                  {
                        "question": "Který neurologický syndrom terciární syfilis je charakterizován degenerací zadních provazců míšních, lancinujícími bolestmi, ataxií a pozitivním Rombergovým znamením?",
                        "options": [
                              "Paralysis progressiva",
                              "Tabes dorsalis",
                              "Meningovaskulární neurosyfilis",
                              "Syringomyelie"
                        ],
                        "correct": 1,
                        "explanation": "<strong>Tabes dorsalis</strong> je pozdní neurosyfilitický syndrom postihující zadní provazce a kořeny míšní. Projevuje se poruchami hluboké citlivosti (ataxie, Rombergovo znamení), lancinujícími (bodavými) bolestmi a vymizením šlachových reflexů. Paralysis progressiva postihuje mozkovou kůru a projevuje se demencí."
                  },
                  {
                        "question": "Co je klinickým vyjádřením Argyll-Robertsonovy zornice u terciární syfilis?",
                        "options": [
                              "Zornice nereaguje na konvergenci (akomodaci), ale reaguje na osvit",
                              "Zornice je trvale dilatovaná (mydriáza) bez jakékoli reakce",
                              "Zornice je miotická, chybí fotoreakce (přímá i nepřímá), ale je zachována reakce na konvergenci",
                              "Zornice vykazuje rytmické stahování a rozšiřování nezávisle na podnětech"
                        ],
                        "correct": 2,
                        "explanation": "U <strong>Argyll-Robertsonovy zornice</strong> dochází k disociaci reakce zornic: zornice jsou úzké (miotické), chybí reakce na osvit (světlo), ale <strong>reakce na konvergenci a akomodaci je plně zachována</strong>."
                  }
            ]
      },
      {
            "id": "derma-67",
            "title": "Syphilis congenita recens a tarda",
            "section": "Venerologie",
            "keywords": [
                  "syphilis congenita",
                  "Hutchinsonova triáda",
                  "Hochsingerova triás",
                  "Parrotovy jizvy",
                  "pemphigus syphiliticus",
                  "lakové patičky"
            ],
            "content": {
                  "definition": "<strong>Syphilis congenita (vrozená syfilis)</strong> je forma syfilis získaná intrauterinním (transplacentárním) přenosem Treponema pallidum z infikované matky na plod, která se dělí podle doby manifestace na časnou (recens) a pozdní (tarda).",
                  "etiology": "Původcem je spirochéta <strong>Treponema pallidum</strong>. Riziko přenosu a závažnost poškození plodu závisí na stadiu nemoci matky; nejvyšší riziko je u matky v časném stadiu syfilis (může vést k potratu či narození mrtvého plodu).",
                  "pathogenesis": "Treponemy přestupují přes placentární bariéru do krevního oběhu plodu. Vyvolávají generalizovanou infekci s poškozením vyvíjejících se orgánů, kostního systému a cév. Průkaz u novorozence se opírá o detekci <strong>IgM protilátek</strong> (např. 19S-IgM FTA-ABS), které neprocházejí placentou a jsou produkovány samotným plodem.",
                  "macroscopy": "U <strong>syphilis congenita recens</strong> nacházíme <strong>pemphigus syphiliticus</strong> (puchýře s kalným obsahem na dlaních a ploskách), <strong>lakové patičky</strong> (červenohnědé infiltrované plosky), radiální praskliny kolem úst a anu (<strong>Parrotovy jizvy</strong>). U <strong>syphilis congenita tarda</strong> dominují deformity skeletu – <strong>sedlovitý nos</strong>, olympské čelo, šavlovité tibie, <strong>Hutchinsonovy zuby</strong> (soudkovité řezáky s poloměsíčitým vykrojením) a zduření sternálního konce klíční kosti (<strong>Higoumenakisův příznak</strong>).",
                  "microscopy": "V tkáních infikovaného plodu a novorozence je přítomen difúzní zánětlivý infiltrát s vysokým zastoupením plazmatických buněk a proliferativní cévní změny. V plicích nacházíme obraz <strong>pneumonia alba</strong> (masivní intersticiální infiltrace vedoucí k bezvzdušnosti a bledosti tkáně), v játrech intersticiální hepatitidu (<strong>pazourková játra</strong>).",
                  "clinical": "1) <strong>Syphilis congenita recens</strong> (projevy do 2 let věku): vysoce infekční, doprovázená krvavou rýmou (<strong>coryza syphilitica</strong>), osteochondritidou (bolestivost vede k <strong>Parrotově pseudoparalýze</strong> – dítě nehýbe končetinou), hepatosplenomegalií a anémií. 2) <strong>Syphilis congenita tarda</strong> (manifestace po 2. roce, často v pubertě): charakterizovaná <strong>Hutchinsonovou triádou</strong> (Hutchinsonovy zuby, intersticiální keratitida, labyrintová hluchota), <strong>Hochsingerovou triádou</strong> (caput quadratum, Parrotovy jizvy, kubitální lymfadenopatie) a hydropsen kloubů (<strong>Cluttonovy klouby</strong>)."
            },
            "quiz": [
                  {
                        "question": "Které tři klinické nálezy tvoří klasickou Hutchinsonovu triádu u pacientů se syphilis congenita tarda?",
                        "options": [
                              "Caput quadratum, Parrotovy jizvy, sedlovitý nos",
                              "Hutchinsonovy zuby, intersticiální keratitida, labyrintová hluchota",
                              "Šavlovité tibie, Cluttonovy klouby, Higoumenakisův příznak",
                              "Pemphigus syphiliticus, lakové patičky, coryza syphilitica"
                        ],
                        "correct": 1,
                        "explanation": "Klasická <strong>Hutchinsonova triáda</strong> u pozdní vrozené syfilis (syphilis congenita tarda) zahrnuje: <strong>Hutchinsonovy zuby</strong> (deformované, soudkovité řezáky), <strong>intersticiální keratitidu</strong> (zánět rohovky vedoucí k slepotě) a <strong>labyrintovou hluchotu</strong> (poškození sluchového nervu)."
                  },
                  {
                        "question": "Co je příčinou vzniku Parrotovy pseudoparalýzy u novorozenců s časnou vrozenou syfilis?",
                        "options": [
                              "Poškození motorické kůry mozku syfilitickými gummaty",
                              "Těžká periferní neuropatie dolních končetin",
                              "Bolestivá osteochondritida dlouhých kostí, která brání dítěti v pohybu končetinou",
                              "Rozsáhlá nekróza příčně pruhovaného svalstva"
                        ],
                        "correct": 2,
                        "explanation": "<strong>Parrotova pseudoparalýza</strong> u syphilis congenita recens je způsobena bolestivou syfilitickou <strong>osteochondritidou</strong> (zánětem růstových zón dlouhých kostí, typicky ulny). Dítě kvůli intenzivní bolesti odmítá končetinou pohybovat, což imituje obrnu (paralýzu)."
                  }
            ]
      },
      {
            "id": "derma-68",
            "title": "Chancroid, lymfogranuloma venereum, granuloma inguinale",
            "section": "Venerologie",
            "keywords": [
                  "chancroid",
                  "ulcus molle",
                  "Haemophilus ducreyi",
                  "lymphogranuloma venereum",
                  "Chlamydia trachomatis",
                  "granuloma inguinale",
                  "Donovanova tělíska"
            ],
            "content": {
                  "definition": "Tato skupina zahrnuje tři klasické, pohlavně přenosné infekce (STI) endemické především v tropech a subtropech: <strong>chancroid (měkký vřed)</strong>, <strong>lymphogranuloma venereum (LGV)</strong> a <strong>granuloma inguinale (donovanóza)</strong>.",
                  "etiology": "1) Původcem chancroidu je gramnegativní tyčinka <strong>Haemophilus ducreyi</strong>. 2) Lymfogranuloma venereum je způsobeno sérotypy <strong>L1, L2 a L3 Chlamydia trachomatis</strong>. 3) Granuloma inguinale vyvolává gramnegativní intracelulární bakterie <strong>Klebsiella granulomatis</strong> (dříve Calymmatobacterium granulomatis).",
                  "pathogenesis": "U chancroidu a granuloma inguinale bakterie pronikají kůží/sliznicí a způsobují lokální destruktivní ulceraci. U LGV má patogen výrazný <strong>lymfotropismus</strong> – po zhojení primární léze migruje do regionálních lymfatických uzlin, kde vyvolává granulomatózní zánět, nekrózu a fibrózu s následnou obliterací lymfatických cév.",
                  "macroscopy": "1) <strong>Chancroid</strong>: velmi bolestivý, měkký vřed s podminovanými okraji a hnisavou spodinou, doprovázený supurující lymfadenitidou (<strong>bubo</strong>). 2) <strong>LGV</strong>: drobný prchavý vřídek, následovaný masivním zduřením uzlin s píštělemi (<strong>znamení rýhy</strong>) a pozdním lymfedémem (<strong>esthiomené</strong>, saxofonovitý penis). Anorektální forma (zejm. MSM) se projevuje jako těžká proktitida imitující Crohnovu chorobu. 3) <strong>Granuloma inguinale</strong>: nebolestivý, červený vřed s navalitými okraji a bujnou granulací, který snadno krvácí, <strong>lymfatické uzliny nejsou postiženy</strong>.",
                  "microscopy": "1) Chancroid: nátěry ze spodiny vykazují řetízky G- tyčinek (\"tažení ryb\"). 2) LGV: granulomatózní zánět s mikroabscesy a chlamydiovými inkluzemi. 3) Granuloma inguinale: histologicky se prokazují <strong>Donovanova tělíska</strong> – kokobacily uvnitř velkých histiocytů (makrofágů), které mají při barvení Wright-Giemsa vzhled bezpečnostních špendlíků.",
                  "clinical": "Léčba se liší: u chancroidu se podává <strong>azitromycin</strong> (1 g p.o. jednorázově) nebo <strong>ceftriaxon</strong> (250 mg i.m. jednorázově). U LGV je lékem volby <strong>doxycyklin</strong> 100 mg 2x denně po dobu 21 dní. U granuloma inguinale se užívá <strong>azitromycin</strong> 1 g týdně (nebo 500 mg denně) po dobu 3–4 týdnů. Všechna tato onemocnění podléhají v ČR povinnému hlášení."
            },
            "quiz": [
                  {
                        "question": "Které z následujících tropických STI je charakteristické tvorbou velmi bolestivých vředů s podminovanými okraji na genitálu a bolestivou supurující lymfadenitidou (bubo)?",
                        "options": [
                              "Syphilis primaria",
                              "Granuloma inguinale",
                              "Chancroid (ulcus molle)",
                              "Lymphogranuloma venereum"
                        ],
                        "correct": 2,
                        "explanation": "<strong>Chancroid (měkký vřed)</strong>, vyvolaný Haemophilus ducreyi, se vyznačuje <strong>výraznou bolestivostí</strong> primárního vředu i spádových lymfatických uzlin (bubo), které mohou kolikvovat a perforovat. Syfilitický vřed i granuloma inguinale jsou typicky nebolestivé."
                  },
                  {
                        "question": "Který mikroskopický nález je klíčový pro potvrzení diagnózy granuloma inguinale (donovanózy)?",
                        "options": [
                              "Intracelulární gramnegativní diplokoky ledvinovitého tvaru",
                              "Donovanova tělíska (bakterie vzhledu bezpečnostního špendlíku uvnitř makrofágů)",
                              "Spirálovité bakterie vykazující vývrtkový pohyb v zástinu",
                              "Vícejaderné obrovské buňky s inkluzemi v Tzanckově testu"
                        ],
                        "correct": 1,
                        "explanation": "Pro <strong>granuloma inguinale</strong> je specifickým nálezem přítomnost <strong>Donovanových tělísek</strong>. Jedná se o bakterie Klebsiella granulomatis nahromaděné v cytoplazmatických vakuolách makrofágů, které při barvení Wright-Giemsa připomínají zavírací špendlíky."
                  }
            ]
      },
      {
            "id": "derma-69",
            "title": "Kapavka – klinický obraz",
            "section": "Venerologie",
            "keywords": [
                  "kapavka",
                  "gonorrhoea",
                  "Neisseria gonorrhoeae",
                  "uretritida",
                  "cervicitida",
                  "bartholinitida",
                  "DGI"
            ],
            "content": {
                  "definition": "<strong>Kapavka (gonorrhoea)</strong> je vysoce infekční, akutní hnisavý zánět postihující primárně cylindrický epitel urogenitálního traktu, ale také konjunktivy, rektum a orofarynx, s možností hematogenní diseminace.",
                  "etiology": "Původcem onemocnění je gramnegativní, aerobní, nepohyblivý diplokok <strong>Neisseria gonorrhoeae</strong> (gonokok). Pod mikroskopem se uspořádáním podobá <strong>kávovým zrnům</strong>. Je extrémně citlivý na zevní vlivy (chlad, vyschnutí).",
                  "pathogenesis": "Gonokoky adherují na cylindrický epitel sliznice pomocí pili a proteinů vnější membrány (Opa). Následuje endocytóza do epiteliálních buněk a průnik do subepiteliálního prostoru, kde vyvolávají <strong>intenzivní zánětlivou reakci</strong> s masivní chemotaxí polymorfonukleárních leukocytů. Hnisavý exsudát je tvořen odumřelými epitelovými buňkami, leukocyty a bakteriemi.",
                  "macroscopy": "Makroskopicky dominuje <strong>hojný, hustý, žlutozelený hnisavý výtok</strong> z močové trubice nebo děložního čípku. Sliznice uretry a zevního orificia je silně zarudlá, zduřelá až ektropionovaná. Při komplikacích u žen dochází k jednostrannému zduření a zarudnutí Bartholiniho žlázy s tvorbou kolísajícího abscesu v dolní třetině velkého stydkého pysku.",
                  "microscopy": "V mikroskopickém obraze akutní kapavky (např. v poševním mikrobiálním obrazu <strong>MOP IV</strong>) nacházíme záplavu polymorfonukleárních leukocytů. Typickým nálezem jsou <strong>intracelulárně</strong> (uvnitř cytoplazmy leukocytů) i extracelulárně lokalizované <strong>gramnegativní diplokoky</strong> ledvinovitého tvaru.",
                  "clinical": "Inkubační doba je **2–7 dní**. U <strong>mužů</strong> se manifestuje jako <strong>urethritis gonorrhoica acuta anterior</strong> s dysurií (pálení, řezání) a hnisavým výtokem. Komplikace: epididymitis, prostatitis, paraurethritis. U <strong>žen</strong> probíhá až v 70–80 % <strong>asymptomaticky</strong>; symptomatická forma se projevuje jako <strong>cervicitida</strong> a uretritida s výtokem. Komplikace: <strong>bartholinitida</strong> (s klinickou skvrnou *macula gonorrhoica Sängeri*), salpingitis, PID s rizikem sterility. Mimogenitálně: anorektální, orofaryngeální formy, <strong>ophthalmia neonatorum</strong> (novorozenecká konjunktivitida) a diseminovaná gonokoková infekce (<strong>DGI</strong> - artritis-dermatitis syndrom)."
            },
            "quiz": [
                  {
                        "question": "Jaké procento žen infikovaných Neisseria gonorrhoeae probíhá asymptomaticky, což představuje významný epidemiologický problém?",
                        "options": [
                              "10-20 %",
                              "25-35 %",
                              "40-50 %",
                              "70-80 %"
                        ],
                        "correct": 3,
                        "explanation": "U žen probíhá kapavka až v <strong>70–80 % asymptomaticky</strong>. Tyto ženy často nevyhledají lékaře, stávají se rezervoárem infekce a jsou ohroženy pozdními komplikacemi (PID, tubární sterilita). U mužů je asymptomatický průběh vzácnější (10–25 %)."
                  },
                  {
                        "question": "Co je to macula gonorrhoica Sängeri?",
                        "options": [
                              "Hemoragická pustula na akrálních částech těla při diseminované kapavce",
                              "Ostře červená skvrna kolem ústí Bartholiniho žlázy, značící chronický zánět",
                              "Erytematózní ložisko na sliznici tvrdého patra",
                              "Zduření sliznice močové trubice u mužů"
                        ],
                        "correct": 1,
                        "explanation": "<strong>Macula gonorrhoica Sängeri</strong> je drobná, ostře červená skvrna obklopující vyústění vývodu Bartholiniho žlázy na vnitřní ploše malých stydkých pysků. Je typickým příznakem chronické nebo subakutní kapavčité bartholinitidy."
                  }
            ]
      },
      {
            "id": "derma-70",
            "title": "Kapavka – diagnostika, léčba, kritéria vyléčení",
            "section": "Venerologie",
            "keywords": [
                  "kapavka",
                  "Thayer-Martinův agar",
                  "ceftriaxon",
                  "azitromycin",
                  "test vyléčení",
                  "kredeizace"
            ],
            "content": {
                  "definition": "Tato kapitola pojednává o laboratorních diagnostických metodách pro průkaz Neisseria gonorrhoeae, aktuálních terapeutických schématech kombinované léčby a přísných klinických kritériích pro prohlášení pacienta za vyléčeného.",
                  "etiology": "Vzhledem k biologické citlivosti <strong>Neisseria gonorrhoeae</strong> (citlivá na chlad a vyschnutí) je nutné odebraný stěr transportovat na speciálních transportních půdách (např. Amiesova půda) a kultivovat v <strong>kapnofilním prostředí</strong> (zvýšená tenze CO2). Rychlý nárůst antibiotické rezistence vyžaduje rutinní provádění antibiogramu.",
                  "pathogenesis": "Zánětlivá exsudace bohatá na polymorfonukleáry poskytuje dostatek buněčného materiálu pro diagnostiku. Léčba musí být zahájena včas, aby se zabránilo ascendentnímu šíření infekce do dělohy a adnex u žen, respektive do prostaty a nadvarlat u mužů, což by mohlo vést k vazivové obliteraci a neplodnosti.",
                  "macroscopy": "Při diagnostice se hodnotí makroskopický charakter odebíraného sekretu (hustý, žlutozelený hnis). V laboratoři se na kultivačních půdách (čokoládový agar) hodnotí vzhled gonokokových kolonií (šedavé, lesklé, drobné kolonie). Pro zjištění citlivosti se používá disková difúzní metoda na agarových plotnách.",
                  "microscopy": "V mikroskopii barvené dle Grama se hodnotí přítomnost gramnegativních diplokoků uspořádaných intra- i extralymfocytárně (MOP IV). Kultivace se provádí na selektivním <strong>Thayer-Martinově agaru</strong> (modifikovaný čokoládový agar s přísadou antibiotik k potlačení doprovodné flóry). Identifikace se potvrzuje pozitivním <strong>oxidázovým testem</strong> a zkvašováním cukrů (gonokok štěpí <strong>pouze glukózu</strong>).",
                  "clinical": "Diagnostika první volby u symptomatických pacientů kombinuje mikroskopii, kultivaci a <strong>NAAT (PCR)</strong>. Léčba nekomplikované kapavky: kombinace <strong>ceftriaxon 500 mg i.m. jednorázově + azitromycin 2 g p.o. jednorázově</strong>. U těhotných se uplatňuje <strong>kredeizace</strong> novorozenců (kapka Ophthalmo-Septonexu do spojivkového vaku). <strong>Kritéria vyléčení (Test of Cure)</strong>: kontrolní kultivace za <strong>3–7 dní</strong> po léčbě, NAAT nejdříve za <strong>2 týdny</strong>. Nutné jsou <strong>3 kontroly</strong> v týdenním intervalu (u žen jedna z nich během menstruace). Pacient je dispenzarizován, provádí se testy na syfilis a HIV na začátku a za 4 měsíce."
            },
            "quiz": [
                  {
                        "question": "Která kultivační půda je selektivním médiem první volby pro kultivaci Neisseria gonorrhoeae z oblastí s bohatou doprovodnou mikroflórou (cervix, rektum)?",
                        "options": [
                              "Löwenstein-Jensenova půda",
                              "Thayer-Martinův agar",
                              "Sabouraudův agar",
                              "Endův agar"
                        ],
                        "correct": 1,
                        "explanation": "<strong>Thayer-Martinův agar</strong> je modifikovaný čokoládový agar obsahující antimikrobiální přísady (např. vankomycin, kolistin, nystatin), které potlačují růst doprovodné grampozitivní a gramnegativní flóry a kvasinek, což umožňuje selektivní růst gonokoků."
                  },
                  {
                        "question": "Kdy je nejdříve možné provést kontrolní vyšetření metodou NAAT (PCR) k ověření úspěšnosti léčby kapavky, aby se předešlo falešně pozitivním výsledkům?",
                        "options": [
                              "Hned druhý den po podání antibiotik",
                              "Za 3 až 5 dní od ukončení léčby",
                              "Minimálně za 2 týdny po ukončení léčby",
                              "Až za 3 měsíce po vyléčení"
                        ],
                        "correct": 2,
                        "explanation": "Kontrolní vyšetření metodou <strong>NAAT (PCR)</strong> se doporučuje provádět <strong>nejdříve za 2 týdny</strong> po ukončení léčby. Při dřívějším odběru může dojít k detekci DNA z již usmrcených bakterií, což vede k falešné pozitivitě. Kultivační kontrolu lze provést dříve (za 3–7 dní)."
                  }
            ]
      },
      {
            "id": "derma-71",
            "title": "Chlamydiové infekce genitálního traktu",
            "section": "Venerologie",
            "keywords": [
                  "Chlamydia trachomatis",
                  "uretritida",
                  "cervicitida",
                  "inkluzní tělísko",
                  "Fitz-Hugh-Curtisův syndrom",
                  "SARA syndrom"
            ],
            "content": {
                  "definition": "<strong>Chlamydiové infekce genitálního traktu</strong> jsou nejčastějším bakteriálním pohlavně přenosným onemocněním (STI), postihujícím urogenitální systém, s vysokým podílem asymptomatických průběhů a závažnými chronickými následky na plodnost.",
                  "etiology": "Původcem je obligátní intracelulární bakterie <strong>Chlamydia trachomatis sérotypy D až K</strong>. Vykazuje unikátní dvoufázový životní cyklus střídající infekční, metabolicky inertní <strong>elementární tělísko (EB)</strong> a neinfekční, replikativní <strong>retikulární tělísko (RB)</strong> uvnitř hostitelské buňky.",
                  "pathogenesis": "Elementární tělísko infikuje cylindrický epitel. Uvnitř buňky se transformuje na retikulární tělísko, které se dělí. Po replikaci se transformuje zpět na elementární tělíska, buňka lyzuje a infekce se šíří. Chronický zánět vede k jizvení a fibróze jemných struktur (např. vejcovodů), což je příčinou pozdních komplikací.",
                  "macroscopy": "Makroskopicky se infekce projevuje hlenohnisavým (mukopurulentním) sekretem z cervixu či močové trubice, sliznice může vykazovat mírný erytém a edém. U <strong>Fitz-Hugh-Curtisova syndromu</strong> nacházíme při laparoskopii typické fibrózní adheze tvaru \"strun houslí\" mezi játry a přední břišní stěnou.",
                  "microscopy": "V mikroskopických preparátech (barvení dle Giemsy nebo Lugolova roztoku) lze prokázat <strong>intracelulární inkluze</strong> v cytoplazmě epiteliálních buněk. Protože se jedná o intracelulární patogen, při stěru je nutné provést <strong>razantní abrazi sliznice</strong> k získání infikovaných epiteliálních buněk.",
                  "clinical": "Inkubační doba je **10–20 dní**. Infekce je často asymptomatická (70–90 % žen, 25 % mužů). <strong>Muži</strong>: mukopurulentní uretritida, proktitida. Komplikace: epididymitis (hrozí sterilita), <strong>SARA syndrom</strong> (Sexually Acquired Reactive Arthritis - reaktivní artritida). <strong>Ženy</strong>: cervicitida, uretritida. Komplikace: salpingitis, PID, mimoděložní těhotenství, <strong>Fitz-Hugh-Curtisův syndrom</strong> (perihepatitida s bolestí pod pravým žebrem). U novorozenců hrozí purulentní konjunktivitida a eozinofilní pneumonie. Léčba: <strong>azitromycin 1 g p.o. jednorázově</strong> nebo <strong>doxycyklin 100 mg 2x denně po dobu 7 dnů</strong>."
            },
            "quiz": [
                  {
                        "question": "Který syndrom je charakterizován perihepatitidou s tvorbou typických vazivových srůstů mezi pouzdrem jater a parietálním peritoneem jako komplikace chlamydiové infekce u žen?",
                        "options": [
                              "Reiterův syndrom",
                              "SARA syndrom",
                              "Fitz-Hugh-Curtisův syndrom",
                              "Zinsserův syndrom"
                        ],
                        "correct": 2,
                        "explanation": "<strong>Fitz-Hugh-Curtisův syndrom</strong> je perihepatitida vznikající ascendentním šířením Chlamydia trachomatis (nebo N. gonorrhoeae) z pánve do podžebří. Projevuje se ostrou bolestí pod pravým žeberním obloukem a tvorbou adhezí (\"struny houslí\")."
                  },
                  {
                        "question": "Proč je při odběru materiálu na průkaz Chlamydia trachomatis nutné provést razantní stěr (seškrab/abrazi) sliznice, a nikoli pouze odebrat volný sekret?",
                        "options": [
                              "Chlamydie se nacházejí pouze v submukózním vazivu",
                              "Chlamydie jsou obligátní intracelulární patogeny a k průkazu je nutné získat epiteliální buňky",
                              "Volný sekret obsahuje enzymy, které chlamydiovou DNA okamžitě destruují",
                              "Chlamydie adherují pouze na erytrocyty, které je třeba mechanicky uvolnit"
                        ],
                        "correct": 1,
                        "explanation": "Jelikož je <strong>Chlamydia trachomatis</strong> obligátním <strong>intracelulárním patogenem</strong>, žije a množí se výhradně uvnitř hostitelských buněk. Pouhý odběr sekretu (hnisu) neobsahuje dostatek buněk, proto je nezbytná razantní abraze sliznice k získání epitelových buněk."
                  }
            ]
      },
      {
            "id": "derma-72",
            "title": "Diferenciální diagnostika genitálního výtoku (přehled STI)",
            "section": "Venerologie",
            "keywords": [
                  "fluor vaginalis",
                  "MOP",
                  "Gardnerella vaginalis",
                  "Trichomonas vaginalis",
                  "Candida albicans",
                  "clue cells",
                  "bakteriální vaginóza"
            ],
            "content": {
                  "definition": "<strong>Diferenciální diagnostika genitálního výtoku</strong> představuje klinický a laboratorní postup k rozlišení různých infekčních příčin výtoku (fluor vaginalis u žen, výtok z uretry u mužů) pomocí hodnocení mikrobiálního obrazu poševního (MOP), klinického vzhledu a molekulárních metod.",
                  "etiology": "Výtok může být způsoben: 1) bakteriemi (<em>Neisseria gonorrhoeae</em>, <em>Chlamydia trachomatis</em>, <em>Mycoplasma genitalium</em>), 2) anaerobní dysbalancí (<em>Gardnerella vaginalis</em> u bakteriální vaginózy), 3) kvasinkami (<em>Candida albicans</em>), 4) prvoky (<em>Trichomonas vaginalis</em>).",
                  "pathogenesis": "Zánětlivý výtok vzniká buď přímým poškozením epitelu patogenem (gonokoky, trichomonády, kvasinky) spojeným s exsudací a migrací leukocytů, nebo narušením přirozené vaginální flóry (laktobacilů), což vede k přemnožení anaerobních bakterií produkujících aminové látky zápachu (bakteriální vaginóza).",
                  "macroscopy": "Makroskopická charakteristika výtoku je klíčová: 1) <strong>Bakteriální vaginóza</strong>: mléčný, homogenní, tekutý výtok s rybím zápachem. 2) <strong>Kandidóza</strong>: hustý, hrudkovitý, bílý (<strong>tvarohovitý</strong>) výtok, doprovázený pruritem a erytémem. 3) <strong>Trichomoniáza</strong>: hojný, řídký, žlutozelený, <strong>zpěněný</strong> výtok. 4) <strong>Kapavka</strong>: hustý, žlutozelený hnisavý výtok. 5) <strong>Mykoplazmata/chlamydie</strong>: serózní až mléčný, chudší výtok.",
                  "microscopy": "Využívá se <strong>Mikrobiální obraz poševní (MOP)</strong> barvený dle Grama a Giemsy: MOP I: fyziologický (epitelie, laktobacily); MOP II (vaginóza): laktobacily chybí, přítomnost <strong>clue cells</strong> (klíčové buňky – epitelie pokryté bakteriemi), chybí leukocyty; MOP III: hnisavý bakteriální (leukocyty, pyogenní flóra); MOP IV (kapavka): záplava leukocytů, G- diplokoky; MOP V (trichomoniáza): bičíkovci <em>Trichomonas vaginalis</em>; MOP VI (kandidóza): blastospory a pseudomycelia.",
                  "clinical": "Diagnostika se opírá o MOP, pH pochvy (nad 4.5 u vaginózy a trichomonázy, normální <4.5 u kandidózy), aminový test (KOH test - rybí zápach u vaginózy) a NAAT. Terapie: vaginóza a trichomoniáza – <strong>metronidazol</strong> (u trichomonózy nutno léčit partnery!). Kandidóza – lokální či celková <strong>antimykotika</strong> (klotrimazol, flukonazol). Kapavka a chlamydie – specifická antibiotika."
            },
            "quiz": [
                  {
                        "question": "Který nález v mikroskopickém vyšetření poševního sekretu (MOP II) je patognomický pro bakteriální vaginózu?",
                        "options": [
                              "Intracelulární gramnegativní diplokoky ledvinovitého tvaru",
                              "Clue cells (pochvy epitelové buňky pokryté adherovanými anaerobními bakteriemi)",
                              "Hruškovití bičíkovci s aktivním pohybem",
                              "Pseudomycelia a blastospory kvasinek"
                        ],
                        "correct": 1,
                        "explanation": "<strong>Clue cells</strong> (klíčové buňky) jsou vaginální epitelové buňky, na jejichž povrch adheruje velké množství bakterií (Gardnerella vaginalis a anaeroby), což stírá jejich ostré ohraničení. Jsou typickým a diagnostickým znakem bakteriální vaginózy (MOP II)."
                  },
                  {
                        "question": "Která z následujících vaginálních infekcí se typicky projevuje hojným, řídkým, žlutozeleným a charakteristicky zpěněným výtokem doprovázeným dysurií a dyspareunií?",
                        "options": [
                              "Vaginální kandidóza",
                              "Bakteriální vaginóza",
                              "Trichomoniáza",
                              "Urogenitální chlamydióza"
                        ],
                        "correct": 2,
                        "explanation": "<strong>Trichomoniáza</strong>, způsobená bičíkatým prvokem Trichomonas vaginalis, se typicky prezentuje hojným, žlutozeleným, <strong>zpěněným výtokem</strong> (často popisovaným jako pivní pěna), zvýšeným pH vaginy a tečkovitým krvácením na děložním čípku (\"jahodový čípek\")."
                  }
            ]
      }
];

window.DATA_DERMATOLOGIE = DATA_DERMATOLOGIE;
