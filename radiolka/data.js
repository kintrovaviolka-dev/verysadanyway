// data.js - Databáze otázek pro studium radiologie
// Automaticky generováno z facts.md

const DATA_RADIOLOGIE = [
      {
            "id": "radio-1",
            "title": "Princip rentgenky a RTG vyšetření",
            "section": "Základy zobrazovacích metod",
            "category": "Základy",
            "keywords": [
                  "rtg",
                  "rentgenka",
                  "anoda",
                  "katoda",
                  "absorpce",
                  "skiagrafie",
                  "skiaskopie",
                  "princip",
                  "rentgenky",
                  "vyšetření"
            ],
            "content": {
                  "definition": "<ul><li>Teorie rentgenového záření a princip rentgenky:</li><li>elektromagnetické záření - proud fotonů</li><li>čím větší je frekvence, tím kratší je vlnová délka a tím je větší kinetická energie</li><li>nažhavením katody se uvolní elektrony, vysokým napětím mezi anodou a katodou</li><li>jsou urychlovány a dopadají na anodu, kde vzniká vlastní rtg záření = primární</li><li>záření</li><li>Sekundární záření: vzniká při průchodu primárního záření hmotou beze změn →</li></ul>",
                  "etiology": "<ul><li>fotoefekt, Comptonův rozptyl</li><li>Intenzita: hustota částic záření procházející jednotkovou plochou za 1 s; závisí na</li><li>množství elektronů letící z anody na katodu</li><li>RTG přístroje: rentgenka, generátor, ovladač, rtg nářadí a příslušenství, clony →</li><li>digitální radiografie</li><li>Složení rentgenky: vnitřní část (anoda a katoda), kryt, VN kabely</li><li>Rentgenka: vysoce vakuová dioda s katodou (-) a anodou (+), ze skla; výstupní</li></ul>",
                  "pathogenesis": "<ul><li>okénko (ztenčené místo, kde vychází rtg paprsky), z katody se uvolňují elektrony =</li><li>termoemise → anodový proud (svazek letících elektronů z K na A) → ohnisko (místo</li><li>dopadu e-)</li><li>Pevná anoda (radioterapie), rotační anoda (rentgenový přístroj)</li><li>Rentgenové záření z rentgenky = brzdné (vznik reakcí dopadajícího elektronu v okolí</li><li>vlastního jádra atomů anody; jeho spektrum je spojité) + charakteristické záření</li><li>(závisí na složení materiálu anody)</li></ul>",
                  "macroscopy": "<ul><li>Absorpce: závisí na tloušťce objektu, hustotě, atomovém čísle (vysoká hustota =</li><li>světlejší; nízká hustota = tmavší) → rozdíl v absorpci je základ diagnostiky</li><li>Vlastnosti rtg záření: ionizační, proniká hmotou, luminiscenční efekt, fotochemický</li><li>e., biologický e., přenos informace zářením</li><li>RTG obraz:</li><li>zdroj záření (rentgenka) + objekt (pacient) + film/luminiscenční plocha</li><li>z rentgenky vychází rentgenové paprsky → clonami zúžený na centrální paprsek</li></ul>",
                  "microscopy": "<ul><li>čím je objekt blíže k rentgence, tím bude větší zvětšení; pacient naléhá vyšetřovanou</li><li>částí na úložnou desku</li><li>sumační vyšetření (všechna informace v jednom bodě → snímky se překrývají</li><li>→dodělat více pohledů); 3D → 2D</li><li>clony regulují primární svazek záření a velikost ozářené oblasti, zostřují výsledný</li><li>obraz</li><li>Skiagrafie: pořizování statických snímků. objekt co nejblíže k filmu, prvky s</li></ul>",
                  "clinical": "<ul><li>vysokým protonovým číslem (kosti), Projasnění = tmavé části, zastínění = světlé</li><li>části; + (vysoké rozlišení, trvalá dokumentace, nízká dávka ozáření), - (pouze</li><li>statický)</li><li>Skiaskopie: dynamické vyšetření (GIT, katetrizace), kde to prošlo světlé, kde se</li><li>vstřebalo tmavé; vysoké dávky s nižší kvalitou</li><li>Projekce dle směru centrálního paprsku → posteroanteriorní, anteroposteriorní,</li><li>axiální, boční</li><li>PACS: elektronické ukládání vyšetření na hard disky → vyhledávání obrazové</li><li>dokumenta</li><li>DICOM: univerzální systém pro zobrazení a distribuci medicínských obrázků</li></ul>"
            },
            "quiz": [
                  {
                        "question": "Jak vzniká primární rentgenové záření v rentgence?",
                        "options": [
                              "Uvolněním elektronů z anody a jejich dopadem na katodu",
                              "Termoemisí z nažhavené katody, urychlením vysokým napětím a dopadem elektronů na anodu",
                              "Rozpadem jader těžkých atomů v oleji, který chladí rentgenku",
                              "Comptonovým rozptylem při průchodu záření tělem pacienta"
                        ],
                        "correct": 1,
                        "explanation": "Primární rentgenové záření vzniká tak, že se termoemisí uvolní elektrony z nažhavené katody. Tyto elektrony jsou urychleny vysokým napětím a dopadají na anodu (ohnisko), kde při jejich zabrzdění nebo interakci s obaly atomů vzniká brzdné a charakteristické RTG záření."
                  },
                  {
                        "question": "Co platí pro tzv. sumační RTG snímek (skiagrafii)?",
                        "options": [
                              "Zobrazuje objekty v dynamickém pohybu v reálném čase",
                              "Jedná se o 3D rekonstrukci vytvořenou z mnoha úhlů",
                              "Všechny trojrozměrné informace z pacienta se sčítají (sumují) do jednoho 2D snímku",
                              "Poskytuje výhradně barevné zobrazení průtoku cévami"
                        ],
                        "correct": 2,
                        "explanation": "Sumační vyšetření (skiagrafie) promítá trojrozměrný objekt (pacienta) do dvourozměrné roviny. Dochází k překrývání (sumaci) stínů jednotlivých anatomických struktur, což vyžaduje zhotovení snímků ve více projekcích (např. předozadní a boční) pro prostorovou orientaci."
                  }
            ],
            "image": "images/rtg_tube.png"
      },
      {
            "id": "radio-2",
            "title": "Negativní biologické účinky ionizujícího záření",
            "section": "Základy zobrazovacích metod",
            "category": "Základy",
            "keywords": [
                  "záření",
                  "stochastické",
                  "deterministické",
                  "dna",
                  "radiosenzitivita",
                  "alara",
                  "limity",
                  "negativní",
                  "biologické",
                  "účinky"
            ],
            "content": {
                  "definition": "<ul><li>ionizující záření = záření schopno ionizovat atomy molekul → vytváření agresivních</li><li>radikálů, které negativně působí na biologické struktury</li><li>Ionizující záření se používá hlavně k léčení maligních nádorů, protože jsou na něj v</li><li>organismu nejcitlivější nediferencované aktivně se dělící buňky</li><li>spočívá v jeho interakci s elektronovým obalem atomů, které organismus tvoří</li><li>Fyzikální fáze: absorpci energie dopadajícího záření atomy a molekulami.</li></ul>",
                  "etiology": "<ul><li>Fyzikálně-chemická fáze: spočívá v mezimolekulárních interakcích spojených s</li><li>přijetím energie záření molekulami a atomy</li><li>Biochemická fáze: zahajuje tvorba chemických radikálů, které působí na nukleové</li><li>kyseliny a bílkoviny buněk organismu</li><li>Biologická fáze: zahrnuje řadu reakcí produktů vytvořených během předchozích fází</li><li>s biologickým materiálem na úrovni jeho intracelulárních struktur, buněk, tkání,</li></ul>",
                  "pathogenesis": "<ul><li>orgánů i celého organismu.</li><li>Biologické účinky</li><li>Přímé účinky: absorpci energie záření uvnitř jádra buňky → změny v chemických</li><li>vazbách molekul, které mají význam pro metabolismus a genetiku buněk. Můžou</li><li>způsobit i rozpad zasažených molekul. → zlomy molekul DNA, části řetězců,</li><li>mitotické účinky → smrt buňky</li></ul>",
                  "macroscopy": "<ul><li>Nepřímý účinek: radiolýza vody, při níž dochází ke vzniku volných radikálů H* a</li><li>OH*. → jednak spojují a vytvářejí O2, H2 a H2O2, které interagují s buněčnými</li><li>strukturami, jednak působí na vazby v molekulách a narušují jejich prostorovou</li><li>strukturu, což vede k poškození jejich biologické funkce.</li><li>Nejcitlivější: lymfatické uzliny, ery, sliznice tenkého i tlustého střeva, čočka, mužský</li><li>pohlavní epitel</li></ul>",
                  "microscopy": "<ul><li>Deterministické účinky záření: zánik buněk, k čemuž je nutná určitá hodnota záření</li><li>→ dokonalou ochranou se lze vyhnout; např. akutní dermatitida, akutní nemoc z</li><li>ozáření</li><li>Stochastický účinek: projevují se až za mnoho let → nádorová onemocnění; nemá</li><li>práh (i jeden foton může poškodit DNA)</li><li>Radiační ochrana</li></ul>",
                  "clinical": "<ul><li>vyloučit deterministické a stochastické účinky ionizujícího záření</li><li>největší zdroj ozáření je medicína (CT nejvíce 10 mSv/jeden snímek)</li><li>dozimetry na pracovištích (limity na pracovištích 20 mSv/rok)</li><li>Zásady: časem (co nejkratší dobu), Vzdáleností, ochranné osobní pomůcky, stínění</li><li>(materiály s vysokým protonovým číslem - Pb, Wo, Ba)</li><li>dávka se kumuluje s věkem</li><li>Limity: 1 ms/rok; dávky z přírodního ozáření - 3 mSv/rok (radon, kosmické záření)</li><li>Přínos vyšetření musí přesahovat rizika</li><li>lékařské x profesní ozáření</li></ul>"
            },
            "quiz": [
                  {
                        "question": "Jaký je hlavní rozdíl mezi deterministickými a stochastickými účinky ionizujícího záření?",
                        "options": [
                              "Deterministické účinky nemají žádný práh dávky, stochastické ano",
                              "Stochastické účinky se projevují ihned po ozáření, deterministické až za řadu let",
                              "Deterministické účinky mají prahovou dávku (lze se jim vyhnout), stochastické nemají práh (i jeden foton může poškodit DNA)",
                              "Deterministické účinky jsou výhradně prospěšné, stochastické jsou škodlivé"
                        ],
                        "correct": 2,
                        "explanation": "Deterministické účinky (např. radiační dermatitida) mají jasný práh dávky, pod kterým k poškození nedojde, a jejich závažnost roste s dávkou. Stochastické účinky (např. vznik nádorů) nemají prahovou dávku – s rostoucí dávkou stoupá pouze pravděpodobnost jejich vzniku, nikoli závažnost."
                  },
                  {
                        "question": "Které tkáně v lidském těle jsou nejcitlivější na ionizující záření (radiosenzitivní)?",
                        "options": [
                              "Kostní tkáň, šlachy a chrupavky",
                              "Lymfatická tkáň, pohlavní epitel, sliznice střeva a krvetvorné buňky",
                              "Kosterní svalstvo a nervová tkáň",
                              "Kompaktní kost a zubní sklovina"
                        ],
                        "correct": 1,
                        "explanation": "Podle Bergonié-Tribondeauova pravidla jsou na ionizující záření nejcitlivější buňky, které jsou nediferencované, aktivně se dělí a mají vysokou úroveň metabolismu. Mezi ně patří lymfatická tkáň, pohlavní buňky, střevní sliznice a krvetvorba."
                  }
            ]
      },
      {
            "id": "radio-3",
            "title": "Princip UZ vyšetření",
            "section": "Základy zobrazovacích metod",
            "category": "Základy",
            "keywords": [
                  "ultrazvuk",
                  "uz",
                  "echogenita",
                  "akustický stín",
                  "doppler",
                  "impedance",
                  "sonda",
                  "princip",
                  "vyšetření"
            ],
            "content": {
                  "definition": "<ul><li>nejdůležitější neionizující metoda, která nepoškozuje zdraví a můžeme ji libovolně</li><li>opakovat</li><li>Vyšetření: měkké tkáně, parenchymatózní orgány (ty co mají hodně vody) - ve</li><li>vakuu vlny neprocházejí</li><li>ze speciální sondy je vysílání podélné mechanické vlnění (f > 20000Hz) do lidského</li><li>těla, tam odráženy zpět</li></ul>",
                  "etiology": "<ul><li>akustická impedance - na hranici dvou tkání dochází k odrazu</li><li>Příčný (transverzální) obraz - odspod (od nohou pacienta)</li><li>Podélný (sagitální) obraz - z pravé strany pacienta</li><li>čím je frekvence vlnění větší, tím  je lepší prostorové rozlišení, ale méně proniká do</li><li>hloubky lidského těla (břicho - 3 Hz; štítná žláza - 15 Hz)</li><li>Interakce UZ s hmotou: 1. odraz (reflexe - největší vzduch-tuk → dát na kůži gel) 2.</li></ul>",
                  "pathogenesis": "<ul><li>lom 3. útlum</li><li>Hodnotíme echogenitu: Hyperechogenní (světlé - tuk, solidní tkáň z vaziva,</li><li>bránice, nekróza, hypervaskularizované tumory), Hypoechogenní (tmavé - cysty s</li><li>obsahem, kontuze, ischemie, primární nádory, metastázy), Anechogenní (černé -</li><li>neodráží vůbec - krev, moč, žluč, likvor, výpotek, ascites, prosté cysty)</li><li>Akustické okno: tkáně, které kladou malý odpor → lze přes ně zobrazit jednotlivé</li></ul>",
                  "macroscopy": "<ul><li>struktury</li><li>Akustický stín: černý pruh za kostmi, konkrementy, vzduchem v trávicí trubici,</li><li>aterosklerotickými pláty</li><li>Akustické zesílení: kuželovité projasnění</li><li>UZ přístroj: diagnostický x terapeutický →vyšetřovací sonda, centrální elektrická</li><li>část, zobrazovací a dokumentační část</li></ul>",
                  "microscopy": "<ul><li>Sondy: lineární (pravoúhlý obraz - dobré prostorové rozlišení), sektorová (malé</li><li>akustické okno), konvexní (zobrazení břicha)</li><li>Typy zobrazení: A typ (amplituda - šířka amplitudy od odrazové plochy), typ B (jas</li><li>dvojrozměrná tomografie orgánu - tmavé a světlé body na obrazovce odpovídající</li><li>echogenitě tkáně), Dynamické zobrazení (B obrazy rychle za sebou), M typ</li><li>(odrážejí od pohyblivých částí např. srdce)</li></ul>",
                  "clinical": "<ul><li>Dopplerovská ultrasonografie: frekvence jakéhokoliv vlnění se mění při odrazu od</li><li>pohybujícího se objektu (hl. ery) → barevní, spektrální, akustický</li><li>Duplexní sonografie: dvojrozměrného dynamického zobrazení a impulsního</li><li>dopplerovského měření rychlosti. Obraz barevné duplexní ultrasonografie je složen</li><li>ze dvou částí - černobílé a barevné. Černobílá část obsahuje morfologickou</li><li>informaci a barevná informaci o pohybu ve sledovaném řezu</li><li>Abdominální ultrasonografie, UZ měkkých tkání, echokardiografie,</li><li>echoencefalografie, endosonografie</li></ul>"
            },
            "quiz": [
                  {
                        "question": "Jak se v ultrasonografii hodnotí echogenita tekutin, jako je moč, žluč nebo volná krev?",
                        "options": [
                              "Hyperechogenní (bílé)",
                              "Hypoechogenní (tmavě šedé)",
                              "Anechogenní (černé, bez odrazů)",
                              "Izoechogenní (světle šedé)"
                        ],
                        "correct": 2,
                        "explanation": "Čisté tekutiny (voda, žluč, moč, likvor, čerstvá krev) neobsahují rozhraní odrážející ultrazvukové vlnění. Ultrazvuk jimi prochází volně bez odrazu, což se zobrazuje jako čistě černá – anechogenní oblast."
                  },
                  {
                        "question": "Co vyjadřuje tzv. akustický stín v ultrazvukovém obraze?",
                        "options": [
                              "Černý pruh za strukturami, které silně odrážejí nebo pohlcují ultrazvuk (kosti, konkrementy, vzduch)",
                              "Kuželovité projasnění (světlejší zónu) za cystou naplněnou tekutinou",
                              "Barevný signál znázorňující rychlost a směr toku krve",
                              "Úplnou absenci signálu způsobenou poruchou vyšetřovací sondy"
                        ],
                        "correct": 0,
                        "explanation": "Akustický stín je artefakt (černý pruh za objektem), který vzniká, když ultrazvukový paprsek narazí na strukturu s velmi vysokou akustickou impedancí (např. kost, žlučový kámen) nebo vzduch, které většinu vlnění odrazí či pohltí, takže za ně již žádné vlnění neprojde."
                  }
            ],
            "image": "images/ultrazvuk.png"
      },
      {
            "id": "radio-4",
            "title": "Princip CT vyšetření",
            "section": "Základy zobrazovacích metod",
            "category": "Základy",
            "keywords": [
                  "ct",
                  "computertomografie",
                  "hounsfield",
                  "hu",
                  "denzita",
                  "alara",
                  "rekonstrukce",
                  "angiografie",
                  "princip",
                  "vyšetření"
            ],
            "content": {
                  "definition": "<ul><li>minimum kontraindikací, rychlé, radiační zátěž</li><li>RTG záření prochází pacientem, částečně se absorbuje a dopadá na soustavu</li><li>detektorů → mění se na elektrický proud → digitalizace a rekonstrukce do</li><li>anatomického obrazu</li><li>rentgenka emituje úzký svazek záření ve tvaru vějíře + společně se soustavou</li><li>detektorů rotuje kolem pacienta v protisměru → kvantum měření absorpce z mnoha</li></ul>",
                  "etiology": "<ul><li>úhlů ve zvolené axiální rovině</li><li>z řady získaných údajů se rekonstruuje číselnou síť = matice</li><li>z hrubých dat můžeme provést zpětnou rekonstrukci</li><li>lidské oko rozliší 16-20 odstínů šedi, tam je 4000</li><li>Obrazové parametry: šířka vrstvy (měníme podle zobrazované části)</li><li>základní požadavek radiační hygieny = ALARA (as low as reasonably achievable)</li></ul>",
                  "pathogenesis": "<ul><li>není vhodné bezdůvodné opakování CT vyšetření</li><li>Hodnoty absorpce - denzity -  v jednotkách HU (Hounsfield</li><li>unit)</li><li>Hypodenzní = tmavé, hyperdenzní = světlé</li><li>většina biologických tkáních v rozmezí -100 až 100 →</li><li>upravit do určitého úseku = okna (kostní, mediastinální,</li></ul>",
                  "macroscopy": "<ul><li>plicní,...)</li><li>CT přístroj: Gantry (tunel), Řídící a zobrazovací počítač,</li><li>detektory, pohyb stolu umožní vyšetřit 170 cm délky</li><li>Postprocessingové metody: základní obraz v axiální rovině</li><li>→ lze upravovat a získávat další informace →</li><li>Multiplanární rekonstrukce (obraz v sagitálním a</li></ul>",
                  "microscopy": "<ul><li>koronárním řezu ), MIP (zvýraznění struktur s vyšší</li><li>denzitou), MinIP (zvýraznění struktur s nejmenší denzitou -</li><li>plicní parenchym), Volume rendering technic (rychlé</li><li>vyhledávání patologických nálezů → 3D model), Virtuální</li><li>endoskopie (zobrazení lumen dutých orgánů)</li><li>Hybridní systém SPECT/CT nebo PET/CT -</li></ul>",
                  "clinical": "<ul><li>radiofarmakum fluorodeoxyglukóza (18 FDG)</li><li>Kontrastní CT: perorální, intravenózní, intratekální</li><li>Dynamická aplikace KL: arteriální fáze (20-30s), venózní (30-45s),</li><li>parenchymatózní (70s), pozdní (za několik minut od aplikace KL)</li><li>CT angiografie: prekontrastní a postkontrastní sken; KL intravenózně → plicní oběh</li><li>→ srdce → aorta → periferie = bolus timing a bolus tracking</li><li>Indikace CT angiografie: diagnostika nádorů a zánětů střeva</li><li>HRCT: speciální podtyp CT, který se používá prakticky výhradně při vyšetřování</li><li>plicní tkáně, nepodává se při něm kontrastní látka. Přístroj při HRCT vytváří velmi</li><li>tenké „řezy“ plicní tkání a vzniklý obraz je dále počítačově rekonstruován, takže je</li><li>velmi detailní</li></ul>"
            },
            "quiz": [
                  {
                        "question": "V jakých jednotkách se vyjadřují denzity (míra absorpce záření) při CT vyšetření?",
                        "options": [
                              "Sievert (Sv)",
                              "Gray (Gy)",
                              "Hounsfieldovy jednotky (HU)",
                              "Becquerel (Bq)"
                        ],
                        "correct": 2,
                        "explanation": "CT denzity se měří v Hounsfieldových jednotkách (HU). Voda má definovanou hodnotu 0 HU, vzduch -1000 HU, kompaktní kost dosahuje +1000 HU a více, zatímco tuk má záporné hodnoty kolem -100 HU."
                  },
                  {
                        "question": "Co znamená zkratka ALARA v radiační hygieně?",
                        "options": [
                              "As Low As Reasonably Achievable – radiační zátěž má být tak nízká, jak je rozumně dosažitelné",
                              "Advanced Linear Acceleration Radiation Assessment – hodnocení intenzity lineárních urychlovačů",
                              "All Limits And Radiation Avoidance – striktní zákaz jakéhokoliv rentgenování těhotných",
                              "As Long As Radiologists Agree – vyšetřovat se může tak dlouho, dokud s tím lékař souhlasí"
                        ],
                        "correct": 0,
                        "explanation": "Princip ALARA (As Low As Reasonably Achievable) je základním etickým a bezpečnostním pravidlem radiační ochrany. Vyžaduje, aby každé vyšetření spojené s ionizujícím zářením (RTG, CT) bylo zdůvodněné a prováděné s nejnižší možnou dávkou potřebnou k získání diagnostické informace."
                  }
            ],
            "image": "images/ct_gantry.png"
      },
      {
            "id": "radio-5",
            "title": "Princip MR vyšetření",
            "section": "Základy zobrazovacích metod",
            "category": "Základy",
            "keywords": [
                  "mr",
                  "magnetická rezonance",
                  "spin",
                  "relaxace",
                  "t1",
                  "t2",
                  "gadolinium",
                  "kontraindikace",
                  "princip",
                  "vyšetření"
            ],
            "content": {
                  "definition": "<ul><li>pacient je uložen do velmi silného magnetického pole → vyslán krátký</li><li>radiofrekvenční impuls → po jeho skončení se snímá magnetický signál vytvořen</li><li>jádry atomů vodíku v pacientově těle</li><li>Klady: podrobné zobrazení měkkých tkání, vyšetření ve třech rovinách, zobrazení</li><li>mozkových tepen bez kontrastu, neionizující typ vyšetření</li><li>Teorie:</li><li>vektor = fyzikální veličina určující velikost, směr a počátek působení</li><li>magnetického pole</li><li>kladně nabité protony rotují kolem své dlouhé osy = spin</li><li>v okolí elektrického pole vzniká magnetické pole = magnetický moment</li><li>vodíkové jádro tvoří jen jeden proton (asi ve ⅔ lidské tkáně je vodík) →</li></ul>",
                  "etiology": "<ul><li>umístěny náhodile, jejich magnetické momenty se navzájem ruší → navenek</li><li>magnetické pole rovno nule</li><li>dáme protony do statického magnetické pole (B0) → uspořádání protonů</li><li>rovnoběžně se siločárami B0 → intenzita tohoto pole je vyjádřena v teslách</li><li>(nejpoužívanější je 1,5 T)</li><li>Rotační pohyb magnetického pole v rovině po obvodu kužele = precese</li><li>(dětská káča)</li><li>Frekvence precesního pohybu závisí na velikosti statického pole → frekvence</li><li>B0 musí odpovídat frekvencí rotujících spinů v zobrazované rovině</li><li>vysokofrekvenčním elektromagnetickým impulsem (B1) změníme</li><li>uspořádání protonů → magnetický moment bude mít jiný směr (to</li></ul>",
                  "pathogenesis": "<ul><li>detekujeme) → excitace (protony s vyšší energií se vychýlí o 90-180°)</li><li>frekvence musí odpovídat Larmorově rovnici ⇒ celé to je rezonance</li><li>Vypneme B1 → protony se vrací do původní polohy = relaxace → energii,</li><li>kterou proton vydá ve formě elektromagnetického záření, se pohlcuje v</li><li>okolních tkáních → převádí se z povrchu těla do cívky → vznik elektrického</li><li>proudu (ten se měří) ⇒ echo (příjem signálu magnetického momentu v</li><li>relaxaci)</li><li>lokalizujeme polohu jednotlivých protonů v trojrozměrném prostoru</li><li>hromadíme do určité plochy</li><li>Vyšetřovací postupy:</li><li>rozdíl v intenzitě signálu = rozdíl stupně šedi</li></ul>",
                  "macroscopy": "<ul><li>excitační impulzy se opakují mezi jednotlivými relaxacemi → sekvence</li><li>hyposignální = hypointenzivní = tmavší</li><li>hypersignální = hyperintenzivní = světlejší</li><li>tekoucí krev nevydává na základních sekvencích žádný signál = asignální =</li><li>flow-void fenomén (vyprázdněný tok)</li><li>Tvorba obrazu: počet protonů vodíku a magnetická susceptibilita (schopnost tkáně</li><li>stát se magnetickou - feromagnetické, paramagnetické, diamagnetické látky)</li><li>Gadolinium = základní kontrastní látka</li><li>MR sekvence:</li><li>T1</li><li>T2</li></ul>",
                  "microscopy": "<ul><li>tekutiny (likvor, moč, žluč, edém)  hyposignální =</li><li>hypersignální</li><li>tmavá</li><li>tuk</li><li>hypersignální = bílý</li><li>izosignální</li><li>solidní tkáň</li><li>lehce hypersignální</li><li>hyposignální</li><li>kalcifikace, kompakta, proudící</li><li>krev</li></ul>",
                  "clinical": "<ul><li>asignální</li><li>asignální</li><li>PD - proton denzitorní obraz → součást T2, zobrazení muskuloskeletálního</li><li>systému + potlačení tuku</li><li>STIR: potlačení tuku (bude černý)</li><li>FLAIR: potlačení vody (likvor a jiné tekutiny asignální nebo hyposignální,</li><li>ale patologická ložiska zůstanou hypersignální)</li><li>Mozková difuze a perfuze: časný průkaz mozkové ischemie (20 minut po jejím</li><li>vzniku) - na podkladě pohybu molekul vody (prosté difuze)</li><li>Funkční MR mozku: průkaz funkční místa v mozkové tkáni</li><li>Biologické účinky: elektromagnetické pole, gravidita, přítomnost ferromagnetických</li><li>materiálů, vliv hluku a klaustrofobie</li><li>Absolutní KI: kardiostimulátor, elektronicky řízené implantáty, cévní svorky z</li><li>ferromagnetického materiálu, kovová tělesa v oku</li><li>Relativní KI:TEP, stenty, svorky, klaustrofobie, první trimestr gravidity, kovová cizí</li><li>tělesa, tetování</li></ul>"
            },
            "quiz": [
                  {
                        "question": "Jak se zobrazuje volná tekutina (např. mozkomíšní mok, moč) na T1 a T2 vážených MR obrazech?",
                        "options": [
                              "Na T1 je hypersignální (bílá), na T2 je hyposignální (tmavá)",
                              "Na T1 je hyposignální (tmavá), na T2 je hypersignální (světlá/bílá)",
                              "Na obou typech sekvencí je tekutina zcela černá (asignální)",
                              "Na obou typech sekvencí se tekutina zobrazuje jako svítivě zelená"
                        ],
                        "correct": 1,
                        "explanation": "Jedná se o základní pravidlo interpretace MRI. Tekutiny mají dlouhý relaxační čas T1 i T2. Proto se na T1-váženém snímku zobrazují jako tmavé (hyposignální) a na T2-váženém snímku jako jasně světlé/bílé (hypersignální). Užitečná pomůcka: 'T2 = H2O (voda je bílá)'."
                  },
                  {
                        "question": "Který z následujících implantátů představuje ABSOLUTNÍ kontraindikaci k MR vyšetření?",
                        "options": [
                              "Titanová totální endoprotéza (TEP) kyčelního kloubu po 6 měsících od operace",
                              "Starší cévní svorky nebo implantovaný kardiostimulátor, které nejsou schváleny jako MR-safe",
                              "Zubní výplň (amalgám) nebo fixní rovnátka",
                              "Umělá chlopeň vyrobená z karbonu a plastu"
                        ],
                        "correct": 1,
                        "explanation": "Absolutní kontraindikací MRI jsou nekompatibilní feromagnetické implantáty (kardiostimulátory, defibrilátory, kochleární implantáty, feromagnetické svorky na mozkových cévách), které by mohly být silným magnetickým polem posunuty, zahřáty nebo zničeny."
                  }
            ],
            "image": "images/mri_spins.png"
      },
      {
            "id": "radio-6",
            "title": "Kontrastní látky – rozdělení, nežádoucí reakce, jejich prevence a léčba",
            "section": "Základy zobrazovacích metod",
            "category": "Základy",
            "keywords": [
                  "kontrastní látka",
                  "baryum",
                  "jód",
                  "gadolinium",
                  "alergická reakce",
                  "nefropatie",
                  "kontrastní",
                  "látky",
                  "rozdělení",
                  "nežádoucí"
            ],
            "content": {
                  "definition": "<ul><li>A)  Pozitivní KL = zvyšují absorpci záření (bílé)</li><li>a)  Baryové KL</li><li>vyšetření GIT</li><li>sírnan barnatý (není toxický, nerozpouští se ve vodě, podává se ve formě</li><li>suspenze);</li><li>použití samostatně nebo s dvojím kontrastem (i negativním KL)</li></ul>",
                  "etiology": "<ul><li>negativa: nesmí se dostat mimo GIT (mohl by vyvolat akutní zánět nebo</li><li>chronické adhezivní změny) → při podezření na perforaci → podáme jodovou</li><li>KL</li><li>b)  Jodové KL</li><li>intravenózní urografie (i. v.), angiografické vyšetření nebo CT (i. a.)</li><li>rozpustné ve vodě →vylučovány močí (nefrotropní); hepatotropní (vylučovány</li></ul>",
                  "pathogenesis": "<ul><li>játry)</li><li>množství jódu a jeho koncentrace je popsána u každé KL (270, 300, 320, …)</li><li>za normálních okolností nepronikají intracelulárně</li><li>Snášenlivost KL je dána: hyperosmolaritou (čím je menší osmolarita, tím je lepší</li><li>KL), Chemotoxicitou, Ionizací (ionizující = pravděpodobnost vedlejších reakcí;</li><li>neionizující = malé procento NÚ)</li></ul>",
                  "macroscopy": "<ul><li>Vedlejší reakce: kontrastní nefropatie (selhání ledvinných funkcí), KL</li><li>neprostupuje HEB  (může projít při patologii a způsobit edém), štítná žláza</li><li>(vychytává jód z KL). kardiotoxicita, vazodilatace, alergoidní reakce (do 30-60</li><li>min → lehké, střední a těžké symptomy)</li><li>Prevence: hydratace, alergologická anamnéza, zajištění periferní žíly, bez</li><li>premedikace → léčba = adrenalin (těžké formy), kortikoidy (střední formy),</li></ul>",
                  "microscopy": "<ul><li>antihistaminika (lehké formy)</li><li>Maximální možná dávka je 300 ml 300 (u normální ledvinné fce)</li><li>fázové vyšetření s kontrastní látkou: časná arteriální fáze, pozdní arteriální f.,</li><li>parenchymová, venózní f., pozdní sken (po 10 min)</li><li>B)  Negativní KL = snižují absorpci záření (tmavé)</li><li>zvyšuje transparenci vyšetřovaného orgánu</li></ul>",
                  "clinical": "<ul><li>metoda dvojího kontrastu - současně pozitivní i negativní KL</li><li>plyn (CO2), roztoky (Mannitol, Sorbitol), Methylcelulóza</li><li>Magnetická rezonance s kontrastem</li><li>Gadolinium: cheláty s jeho obsahem → zkracuje relaxační T1 čas → projeví se to</li><li>hyperintenzitou (bílý stín)</li><li>Negativum: nefrogenní systémová fibróza</li><li>Ultrazvuk s kontrastem</li><li>plynové mikroglobuly → zesilují odrážení UZ v dopplerovi</li><li>Příklad kontrastních látek: Vizipaque, Omnipaque, clariscan, Jomerol</li></ul>"
            },
            "quiz": [
                  {
                        "question": "Kterou kontrastní látku podáváme perorálně nebo do klyzmatu při vyšetření zažívacího traktu za předpokladu, že NENÍ podezření na perforaci stěny?",
                        "options": [
                              "Jodovou ve vodě rozpustnou kontrastní látku",
                              "Suspenzi síranu barnatého (baryum)",
                              "Cheláty gadolinia",
                              "Plynný oxid uhličitý samostatně"
                        ],
                        "correct": 1,
                        "explanation": "Síran barnatý (baryum) se používá jako suspenze pro zobrazení trávicí trubice, protože poskytuje výborný kontrast. Je však nerozpustný a v břišní dutině by vyvolal těžký zánět (baryovou peritonitidu). Při podezření na perforaci se proto baryum nesmí podat a nahrazuje se jodovou vodnou kontrastní látkou."
                  },
                  {
                        "question": "Jaká je základní preventivní opatření před podáním jodové kontrastní látky k prevenci kontrastem indukované nefropatie?",
                        "options": [
                              "Podání vysokých dávek penicilinových antibiotik",
                              "Dostatečná hydratace pacienta před vyšetřením i po něm a kontrola renálních funkcí (kreatininu)",
                              "Celková anestezie a intubace pacienta",
                              "Držení přísné hladovky a nepiti tekutin 24 hodin před výkonem"
                        ],
                        "correct": 1,
                        "explanation": "Kontrastem indukovaná nefropatie (CIN) je závažnou komplikací jodových KL. Nejlepším preventivním opatřením je dostatečná hydratace pacienta (např. infuzí fyziologického roztoku) k urychlení vyloučení kontrastní látky a zředění její koncentrace v ledvinách. Před vyšetřením je nutné zkontrolovat hladinu kreatininu a glomerulární filtraci (eGFR)."
                  }
            ]
      },
      {
            "id": "radio-7",
            "title": "Metody zobrazování hrudníku",
            "section": "Zobrazování hrudníku a srdce",
            "category": "Hrudník",
            "keywords": [
                  "hrudník",
                  "rtg plic",
                  "projekce",
                  "pa",
                  "riegler",
                  "laterogram",
                  "mediastinum",
                  "metody",
                  "zobrazování",
                  "hrudníku"
            ],
            "content": {
                  "definition": "<ul><li>RTG snímek plic a srdce</li><li>rychlé, s malým radiačním zatížením s hodně informacemi</li><li>ve stoje PA, nebo vleže na zádech (dilatované plicní cévy a rozšířený srdeční stín,</li><li>nevidíme hladinku žaludku), boční projekce</li><li>rieglerova projekce = laterogram → když nemůžeme dobře diferencovat pleurální</li></ul>",
                  "etiology": "<ul><li>tekutinu od plicní infiltrace → pacient na boku, před sebou detektor, rtg paprsek</li><li>probíhá horizontálně</li><li>a) přesná projekce (sternum nesmí zasahovat do plic) b) expozice musí být kvalitní</li><li>(vidíme i první čtyři hrudní obratle) c) u hyperstenických jedinců bránice vytlačena</li><li>tgcnahoru a překrývá dolní plicní pole</li></ul>",
                  "pathogenesis": "<ul><li>Posouzení snímku:</li><li>Je správně proveden?</li><li>Bránice - pravá a levá část, kontury, adhezivní změny</li><li>Plíce - srovnat pravou a levou, plicní kresbu (tvořena plicními cévami)  x</li><li>pneumothorax; ložiskové změny</li></ul>",
                  "macroscopy": "<ul><li>Plicní hily</li><li>Dýchací cesty - trachea - Th5, bronchiální strom → prokreslení v</li><li>Patologickém zastření</li><li>Srdce a mediastinum - kardiotorakální index (poměr největší šířky srdce a</li><li>maximální průměr hrudníku), vzestupná aorta, oblouk, sestupná aorta, kontury</li></ul>",
                  "microscopy": "<ul><li>mediastina ostré (rozšíření = expanzivní procesy, aneurysma aorty, krvácení)</li><li>skelet žeber</li><li>stíny v měkkých částech hrudníku - mohou imitovat možnou patologii</li><li>CT:</li><li>onemocnění plic, pleury, mediastina a hrudní stěny</li></ul>",
                  "clinical": "<ul><li>indikováno při nejasných nálezech na snímku</li><li>mikronodulace při pneumokoniózách, metastázy, zánětlivé infiltrace → mediastinální</li><li>a plicní okno</li><li>součást urgentního CT protokolu → pneumothorax, poškození plic, aneurysma</li><li>Virtuální CT bronchoskopie: znázorní vnitřní část dýchacího stromu</li><li>Plicní CT angiografie: potvrzení nebo vyloučení plicní embolie, posuzování anomálií</li><li>plicních a mediastinálních cév</li><li>Echokardiografie: základní vyšetřovací metodou diagnostiky srdce, zvláště u dětí</li><li>MR: posouzení infiltrace primárních nádorů do okolí</li><li>PET/CT: posouzení mediastinálních uzlin, detekce metastáz</li></ul>"
            },
            "quiz": [
                  {
                        "question": "V jaké poloze a projekci se standardně zhotovuje základní RTG snímek plic a srdce u chodícího pacienta?",
                        "options": [
                              "Vleže na zádech v předozadní (AP) projekci",
                              "Vsedě v boční projekci s rukama podél těla",
                              "Ve stoje v posteroanteriorní (PA) projekci (paprsek jde zezadu dopředu)",
                              "Vleže na boku s horizontálním paprskem"
                        ],
                        "correct": 2,
                        "explanation": "Standardní snímek hrudníku se provádí v PA projekci (posteroanteriorní) vestoje, kdy se hrudník pacienta opírá o detektor a paprsek prochází zezadu dopředu. Tím se minimalizuje zvětšení stínu srdce a je dobře vidět hladinka v žaludku."
                  },
                  {
                        "question": "Co se rozumí pod pojmem Rieglerova projekce (laterogram) a kdy se využívá?",
                        "options": [
                              "Snímek vleže na zádech v šikmém úhlu k detekci zlomenin sterna",
                              "Snímek vestoje s maximálním záklonem hlavy k zobrazení trachey",
                              "Snímek vleže na boku s horizontálním směrem paprsku, k rozlišení volného výpotku od plicní infiltrace",
                              "Ultrazvukové zobrazení prováděné přes jícen k vyšetření srdce"
                        ],
                        "correct": 2,
                        "explanation": "Laterogram (Rieglerova projekce) se provádí vleže pacienta na boku s kazetou před hrudníkem a horizontálním paprskem. Pomáhá rozlišit, zda je stín v pleurální dutině způsoben volným výpotkem (tekutina steče podle gravitace a vytvoří proužek při stěně) nebo nevzdušnou plicní tkání (stín se nemění)."
                  }
            ]
      },
      {
            "id": "radio-8",
            "title": "Obecná RTG symptomatologie onemocnění plic",
            "section": "Zobrazování hrudníku a srdce",
            "category": "Hrudník",
            "keywords": [
                  "plicní patologie",
                  "zastření",
                  "atelektáza",
                  "intersticium",
                  "uzel",
                  "kerleyho linie",
                  "pneumonie",
                  "absces",
                  "tbc",
                  "obecná"
            ],
            "content": {
                  "definition": "<ul><li>Základní patologické obrazy:</li><li>Transparence (průhlednost): zvýšená (plíce tmavší = v plicích je více vzduchu =</li><li>emfyzém, chronické onemocnění, srdeční vady); snížená (plíce světlejší = úbývá</li><li>vzduchu v alveolech)</li><li>Zastření/zastínění: bílý stín = nevzdušnost plíce zánětem, edémem, nádorem nebo</li><li>kolapsem (difúzní nebo ložiskové)</li><li>Alveolární léze: Kondenzace (nahrazení vzduchu v alveolech tekutinou, exsudátem</li><li>nebo jinou tkání → homogenní stín, ale bronchiální strom prokazatelný), Atelektáza</li><li>(uzávěr bronchů - nádory, stenózy při chronickém zánětu, tlak zvětšenými uzlinami,...</li><li>→ mediastinum posunuto na stranu léze)</li><li>Projasnění (tmavý stín) = ztráta plicní tkáně, tenkostěnná cysta, emfyzematózní bula;</li><li>celkové projasnění u emfyzému, bronchiálním astmatu, primární plicní hypertenzi,...</li></ul>",
                  "etiology": "<ul><li>Postižení intersticia: Nodulární (rozsev drobných uzlů difúzně v plicích - miliární</li><li>TBC, virová pneumonie, pneumokonióza, sarkoidóza, mikrometastázy), retikulace</li><li>(lineární stíny připomínající síť), retikulonodulární forma (kombinace předchozích -</li><li>sarkoidóza, karnicnomatözní lymfangoitida); Kerleovy septální linie (B linie -</li><li>horizontálně uložené v laterobazálních plicních polích = příznak intersticiálního</li><li>edému)</li><li>Plicní uzly a kalcifikace: ostře ohraničené okrouhlé útvary - solitární (bronchogenní</li><li>ca, tuberkulom, absces, metastáza), mnohočetné (metastázy) → nejčastější jsou</li><li>kalcifikace po TBC procesu; pleuritis calcarea (kalcifikáty v pleuře) → skiaskopie,CT</li><li>Plicní hilus: zvětšení (rozšíření větví a. pulmonalis, bronchogenní tumor, LU)</li><li>Plicní kresba: normálně jen cévní stíny; akcentace - zmnožení; úbytek - emfyzém</li><li>Záněty plic</li></ul>",
                  "pathogenesis": "<ul><li>Bakteriální:</li><li>patologickým substrátem je zánětlivá exsudace v alveolech → nehomogenní</li><li>zastínění s neostrými konturami</li><li>lobární pneumonie, alární, bronchopneumonie</li><li>Atypické pneumonie - virové, pneumocystové, mykoplazmové</li><li>Infiltrace v horních partiích - TBC</li><li>Mykotické léze - drobnoložiskové stíny</li><li>opakované infiltrace v krátkém intervalu = stenóza bronchu u bronchogenního</li><li>karcinomu nebo u dětí u aspirace cizích těles</li><li>CT indikováno u pacientů s poruchou imunity</li><li>Absces: solidní ložisko (špatně diferencované od jiných expanzí), na CT v centru</li><li>tekutá kolekce, postkontrastně se sytí lem</li></ul>",
                  "macroscopy": "<ul><li>Empyém = nahromadění hnisu v pleurální dutině</li><li>Bronchiektázie = dilatace terminálních částí bronchů (následek opakovaných infekcí)</li><li>TBC:</li><li>zánětlivá infiltrace v dolních lalocích</li><li>drobný kalcifikát v plicích a kalcifikovaná hilová uzlina = primární komplex</li><li>miliární TBC - rozsev hematogenní cestou do středních a horních plicních polí</li><li>rozpadové dutiny = kaverny - silná granulační stěna, na CT diferencujeme</li><li>drénující bronchus</li><li>tuberkulom = uzlovitý stín</li><li>pleurální výpotek → adheze, kalcifikace</li><li>Mykotické infekce: RTG často negativní, na CT skvrnitý infiltrát, aspergilóza</li><li>Echinokokóza - uzlovité útvary nebo cysty (parazitární)</li></ul>",
                  "microscopy": "<ul><li>CHOPN: chronická bronchitida s emfyzémem</li><li>Plicní emfyzém: rozšíření vzdušných prostorů, destrukce stěny alveolů,</li><li>emfyzematózní buly → RTG = zvětšená transparence plicní, širší mezižeberní</li><li>prostory, plošší bránice, cor pulmonale</li><li>Pneumokoniózy:</li><li>onemocnění způsobené vdechováním prachů obsahující škodlivé látky - oxid</li><li>křemičitý, uhelný prach, azbestový prach</li><li>horníci, slévači, sochaři, …</li><li>většinou se projeví za 15-20 let</li><li>Silikóza: diseminované uzly (10mm) v obou plicích, hl. horní lalok, v okolí fibrózní</li><li>změny, zvětšené uzliny, skořápkovitý lem</li><li>Sarkoidóza:</li></ul>",
                  "clinical": "<ul><li>multisystémové granulomatózní onemocnění - na plicích změny v hilových uzlinách a</li><li>v plicním parenchymu</li><li>Na CT prokazatelné subpleurální noduly</li><li>Plicní embolie:</li><li>zdrojem - trombóza žil dolních končetin</li><li>uzávěr levé plicní arterie →dramatický klinický obraz</li><li>uzávěr segmentálních arterií → plicní infarkt</li><li>diagnostika CT plicní angiografie</li><li>RTG obraz infarktu - klínovité zastření v periferii plíce = odpovídá plícnímu</li><li>segmentu</li><li>Šoková plíce:</li><li>poranění alveolokapilární membrány → propustnost pro tekutiny do alveolů i</li><li>intersticia = ARDS sy</li><li>obraz alveolárního edému se zřetelným obrazem air bronchogramu a obvykle</li><li>nezvětšené srdce</li></ul>"
            },
            "quiz": [
                  {
                        "question": "Co je to atelektáza plic a jak se projevuje na RTG snímku hrudníku?",
                        "options": [
                              "Nadměrné naplnění plicních alveolů vzduchem se zvýšenou transparencí plic",
                              "Kolaps nebo nevzdušnost části plíce (např. při uzávěru bronchu) projevující se jako syté zastření s tahem mediastina na stranu léze",
                              "Rozpad plicního parenchymu s tvorbou kaverny naplněné plynem",
                              "Zánět pleury provázený horizontálním pruhem vzduchu pod bránicí"
                        ],
                        "correct": 1,
                        "explanation": "Atelektáza znamená nevzdušnost plicní tkáně způsobenou např. obstrukcí bronchu nádorem. Na RTG se projevuje homogenním zastřením (bílým stínem), přičemž dochází ke zmenšení objemu postiženého segmentu/laloku, což vede k přitažení mediastina, trachey a bránice směrem k postižené straně."
                  },
                  {
                        "question": "Který patologický nález představují tzv. Kerleyho B linie na RTG snímku plic?",
                        "options": [
                              "Drobné kalcifikace v plicním hilu po prodělané TBC",
                              "Vzduchový bronchogram (air bronchogram) typický pro lobární pneumonii",
                              "Horizontální lineární stíny laterobazálně, které jsou známkou intersticiálního edému (např. při srdečním selhávání)",
                              "Mnohočetné tenkostěnné buly plicního emfyzému"
                        ],
                        "correct": 2,
                        "explanation": "Kerleyho B linie jsou krátké, horizontální, tenké lineární stíny lokalizované laterobazálně u bránice. Vznikají ztluštěním interlobulárních sept tekutinou a jsou typickým příznakem intersticiálního plicního edému, nejčastěji při levostranném srdečním selhání."
                  }
            ]
      },
      {
            "id": "radio-9",
            "title": "Nádory plic",
            "section": "Zobrazování hrudníku a srdce",
            "category": "Hrudník",
            "keywords": [
                  "nádory plic",
                  "bronchogenní karcinom",
                  "metastáza",
                  "hamartom",
                  "pet/ct",
                  "nádory"
            ],
            "content": {
                  "definition": "<ul><li>Bronchogenní karcinom:</li><li>nejrozšířenější maligní nádor vůbec</li><li>největší mortalita, spojitost s kouřením</li><li>nemalobuněčný - roste centrálně, rychle metastazuje do uzlin</li></ul>",
                  "etiology": "<ul><li>Malobuněčný - agresivnější, roste velmi rychle, metastázuje</li><li>Centrální forma: zvětšení hilu nebo přímo ložisko v hilu → stenóza bronchu</li><li>Periferní forma: manifestace solitárním ložiskem s neostrými okraji a vybíháním do</li><li>okolí, rozpad uzlu častý → kaverna</li></ul>",
                  "pathogenesis": "<ul><li>Diseminace: do hilových a mediastinálních uzlin, někdy do jiné části plic →</li><li>rozhodující je PET/CT</li><li>Lymfomy plic: přímým přechodem z uzlin nebo hematogenní diseminací →ložisko</li><li>kondenzace + pleurální výpotek</li></ul>",
                  "macroscopy": "<ul><li>Benigní nádory:</li><li>Hamartom - solitární uzel na periferii plíce, ostře ohraničený, četné kalcifikace, bez</li><li>patologických změn v okolí → diagnóza potvrzena nálezem tukových strutur na</li><li>HRCT</li></ul>",
                  "microscopy": "<ul><li>Fibrom, Leiomyom, lipomy</li><li>Metastázy do plic:</li><li>každý primární nádor může do plic metastazovat hematogenní nebo lymfatickou</li><li>cestou</li></ul>",
                  "clinical": "<ul><li>Grawitzův nádor ledvin nebo kostní sarkomy → dobře prokrvené → snadno do plic</li><li>hematogenní metastázy: mikrometastázy nejsou patrné na snímku, odhalení CT,</li><li>solitární vytváří uzlovité stíny</li><li>Karcinomatózní lymfangiopatie: akcentovaná intersticiální kresba, retikulární, zřídka i</li><li>drobné noduly + Kerleyho linie</li></ul>"
            },
            "quiz": [
                  {
                        "question": "Jaká je primární diagnostická metoda první volby pro vyšetření tématu: Nádory plic.?",
                        "options": [
                              "Magnetická rezonance (MR), protože má nejvyšší rozlišení",
                              "Závisí na klinickém stavu, ale obvykle začínáme méně zatěžujícími metodami jako UZ nebo konvenční RTG",
                              "Vždy invazivní digitální subtrakční angiografie (DSA)",
                              "Termovizní kamera a scintigrafie skeletu"
                        ],
                        "correct": 1,
                        "explanation": "Při vyšetřování tématu 'Nádory plic.' volíme diagnostickou metodu na základě klinických indikací, dostupnosti a radiační zátěže. Obecně platí zásada začínat neinvazivními a dostupnými metodami (např. ultrazvukem nebo nativním RTG snímkem) před přistoupením k náročnějším metodám typu CT nebo MR."
                  },
                  {
                        "question": "Které z následujících tvrzení nejlépe vystihuje hlavní přínos radiologie pro téma: Nádory plic.?",
                        "options": [
                              "Poskytuje detailní morfologické nebo funkční zobrazení patologických změn pro stanovení diagnózy a plánování léčby",
                              "Umožňuje kompletní vyléčení všech onemocnění bez nutnosti farmakoterapie",
                              "Slouží výhradně k archivaci snímků bez vlivu na klinické rozhodování",
                              "Nahrazuje laboratorní vyšetření krve a biochemickou analýzu"
                        ],
                        "correct": 0,
                        "explanation": "Zobrazovací metody v radiologii u tématu 'Nádory plic.' přinášejí klíčové informace o přesné lokalizaci, rozsahu a charakteru patologického procesu, což je nezbytné pro správné klinické rozhodování (konzervativní léčba, operabilita, sledování po léčbě)."
                  }
            ]
      },
      {
            "id": "radio-10",
            "title": "Nádory mediastina",
            "section": "Zobrazování hrudníku a srdce",
            "category": "Hrudník",
            "keywords": [
                  "mediastinum",
                  "tymom",
                  "lymfom",
                  "teratom",
                  "aneurysma",
                  "struma",
                  "nádory",
                  "mediastina"
            ],
            "content": {
                  "definition": "<ul><li>velmi časté expanze v mediastinu</li><li>etiologii lze odhadnout dle lokalizace patologického procesu</li><li>Přední mediastinum: tymom, lymfom, retrosternální struma, teratom dermoid</li></ul>",
                  "etiology": "<ul><li>Střední mediastinum: primární nebo sekundárně onemocnění uzlin, bronchogenní</li><li>nebo perikardiální cysty, cévní anomálie</li><li>Zadní mediastinum: neurogenní nádory, nádory jícnu, cévní onemocnění</li></ul>",
                  "pathogenesis": "<ul><li>Lymfomy:</li><li>Hodgkinovy i Non-Hodgkinovy</li><li>nitrohrudní uzliny → rozšiřují mediastinum v horních partiích</li></ul>",
                  "macroscopy": "<ul><li>CT, MR nebo PET/CT → zachycení patologie + sledování úspěšnosti léčby</li><li>Tymomy:</li><li>15% mediastinálních nádorů</li></ul>",
                  "microscopy": "<ul><li>benigní i maligní formy</li><li>hyperplazie thymu</li><li>často spojené s myastenia gravis nebo myastenickým sy</li></ul>",
                  "clinical": "<ul><li>Neurogenní nádory: sudkovité neurinomy z páteřního kanálu nebo prevertebrálních</li><li>sympatických plexů</li><li>Cévní expanze: aneurysma aorty, koarktace aorty, disekující aneurysma</li><li>Dilatace plicní arterie je běžná u levopravývh zkratů, u plicní hypertenze</li><li>Dolní dutá žíla rozšířená na snímcích v leže, u srdeční dekompenzace, při perikarditidě</li></ul>"
            },
            "quiz": [
                  {
                        "question": "Jaká je primární diagnostická metoda první volby pro vyšetření tématu: Nádory mediastina.?",
                        "options": [
                              "Magnetická rezonance (MR), protože má nejvyšší rozlišení",
                              "Závisí na klinickém stavu, ale obvykle začínáme méně zatěžujícími metodami jako UZ nebo konvenční RTG",
                              "Vždy invazivní digitální subtrakční angiografie (DSA)",
                              "Termovizní kamera a scintigrafie skeletu"
                        ],
                        "correct": 1,
                        "explanation": "Při vyšetřování tématu 'Nádory mediastina.' volíme diagnostickou metodu na základě klinických indikací, dostupnosti a radiační zátěže. Obecně platí zásada začínat neinvazivními a dostupnými metodami (např. ultrazvukem nebo nativním RTG snímkem) před přistoupením k náročnějším metodám typu CT nebo MR."
                  },
                  {
                        "question": "Které z následujících tvrzení nejlépe vystihuje hlavní přínos radiologie pro téma: Nádory mediastina.?",
                        "options": [
                              "Poskytuje detailní morfologické nebo funkční zobrazení patologických změn pro stanovení diagnózy a plánování léčby",
                              "Umožňuje kompletní vyléčení všech onemocnění bez nutnosti farmakoterapie",
                              "Slouží výhradně k archivaci snímků bez vlivu na klinické rozhodování",
                              "Nahrazuje laboratorní vyšetření krve a biochemickou analýzu"
                        ],
                        "correct": 0,
                        "explanation": "Zobrazovací metody v radiologii u tématu 'Nádory mediastina.' přinášejí klíčové informace o přesné lokalizaci, rozsahu a charakteru patologického procesu, což je nezbytné pro správné klinické rozhodování (konzervativní léčba, operabilita, sledování po léčbě)."
                  }
            ]
      },
      {
            "id": "radio-11",
            "title": "Onemocnění pleurálních prostorů",
            "section": "Zobrazování hrudníku a srdce",
            "category": "Hrudník",
            "keywords": [
                  "pleura",
                  "fluidothorax",
                  "výpotek",
                  "pneumothorax",
                  "pno",
                  "tenzní pno",
                  "mezoteliom",
                  "onemocnění",
                  "pleurálních",
                  "prostorů"
            ],
            "content": {
                  "definition": "<ul><li>velmi často postižena patologickými procesy orgánů hrudníku</li><li>reaktivní změny pleury při onemocnění orgánů v horní části břišní dutiny</li><li>Fluidothorax:</li><li>nejčastější patologickým příznakem je přítomnost pleurální tekutiny</li><li>Transsudát - objevuje se při srdeční insuficienci nebo plicním infarktu;</li></ul>",
                  "etiology": "<ul><li>hypoalbuminémie, jaterní cirhóza</li><li>Exsudát - reaktivní změny pleury při zánětech nebo tumorech</li><li>empyém - kolekce hnisu</li><li>hemothorax - krev</li><li>opouzdřený fluidothorax = slepením dvou vrstev pleury bílkovinnou složkou pleurální</li></ul>",
                  "pathogenesis": "<ul><li>dutiny</li><li>RTG - volní tekutina jako homogenní sytý stín, zaobluje kostofrenický úhel, někdy</li><li>část plicního pole, horní hranice je konkávní</li><li>dif. diag. mezi pleurální tekutinou a plicní infiltrací je Rieglerova projekce</li><li>CT: tekutina + komprimované plíce</li></ul>",
                  "macroscopy": "<ul><li>Interlobární pleuritida: vřetenovitý stín v bočné projekci - konvexně vyklenuté okraje</li><li>ve střední části plic</li><li>Pneumothorax:</li><li>vzduch v pleurální dutině</li><li>změnou negativního tlaku na pozitivní → přesun plíce i mediastina</li></ul>",
                  "microscopy": "<ul><li>traumatické - fraktury žeber, spontánní - ruptura emfyzematózních bul, iatrogenní -</li><li>zavádění centrální kanyly</li><li>může být doprovázeno přítomností tekutiny nebo krve</li><li>RTG snímek: projasnění mezi hrudní stěnou a plící, absence cévní kresby a</li><li>komprese plíce</li></ul>",
                  "clinical": "<ul><li>CT i v nejistých případech spolehlivě odhalí</li><li>Tenzní PNO: vznik ventilovým mechanismem →vzduch se dostane do dutiny, ale už</li><li>ne ven → komprese plic, přetlačení mediastina kontralaterálně, nízké uložení bránice</li><li>Srůsty pleury: po zánětech nebo krvácení</li><li>Pleurální nádory: fibrom (benigní mezoteliom), maligní mezoteliom (CT- solitární nebo</li><li>vícečetná ložiska</li><li>Trauma:</li><li>otevřená nebo tupá → možné poranění všech orgánů v hrudníku</li><li>zlomeniny žeber, sterna</li><li>pneumothorax, kontuze, lacerace plic (roztržení)</li></ul>"
            },
            "quiz": [
                  {
                        "question": "Jaká je primární diagnostická metoda první volby pro vyšetření tématu: Onemocnění pleurálních prostorů.?",
                        "options": [
                              "Magnetická rezonance (MR), protože má nejvyšší rozlišení",
                              "Závisí na klinickém stavu, ale obvykle začínáme méně zatěžujícími metodami jako UZ nebo konvenční RTG",
                              "Vždy invazivní digitální subtrakční angiografie (DSA)",
                              "Termovizní kamera a scintigrafie skeletu"
                        ],
                        "correct": 1,
                        "explanation": "Při vyšetřování tématu 'Onemocnění pleurálních prostorů.' volíme diagnostickou metodu na základě klinických indikací, dostupnosti a radiační zátěže. Obecně platí zásada začínat neinvazivními a dostupnými metodami (např. ultrazvukem nebo nativním RTG snímkem) před přistoupením k náročnějším metodám typu CT nebo MR."
                  },
                  {
                        "question": "Které z následujících tvrzení nejlépe vystihuje hlavní přínos radiologie pro téma: Onemocnění pleurálních prostorů.?",
                        "options": [
                              "Poskytuje detailní morfologické nebo funkční zobrazení patologických změn pro stanovení diagnózy a plánování léčby",
                              "Umožňuje kompletní vyléčení všech onemocnění bez nutnosti farmakoterapie",
                              "Slouží výhradně k archivaci snímků bez vlivu na klinické rozhodování",
                              "Nahrazuje laboratorní vyšetření krve a biochemickou analýzu"
                        ],
                        "correct": 0,
                        "explanation": "Zobrazovací metody v radiologii u tématu 'Onemocnění pleurálních prostorů.' přinášejí klíčové informace o přesné lokalizaci, rozsahu a charakteru patologického procesu, což je nezbytné pro správné klinické rozhodování (konzervativní léčba, operabilita, sledování po léčbě)."
                  }
            ]
      },
      {
            "id": "radio-12",
            "title": "Analýza srdečního stínu",
            "section": "Zobrazování hrudníku a srdce",
            "category": "Hrudník",
            "keywords": [
                  "srdce",
                  "srdeční stín",
                  "kardiotorakální index",
                  "hypertrofie",
                  "echokardiografie",
                  "analýza",
                  "srdečního",
                  "stínu"
            ],
            "content": {
                  "definition": "<ul><li>snímek má orientační hodnotu → echokardiografie, CT, MR, angiografie</li><li>RTG:</li><li>Celková velikost srdce = kardiotorakální index</li><li>Konfigurace srdce: mitrální stenóza (vyhlazení levé kontury s vyklenutím ouška levé</li></ul>",
                  "etiology": "<ul><li>síně + venostáza v horních plicních polích), aortálně konfigurované srdce (u</li><li>aortální vady nebo arteriální hypertenze; tvar dřeváku, elongovaná aorta s prominující</li><li>obloučkem), vrozené srdeční vady (levopravý zkrat - defekt síňového septa →</li><li>hypertrofie pravé komory → rotace doleva a vyklenutí pulmonálního konu)</li></ul>",
                  "pathogenesis": "<ul><li>Kalcifikace: v aortě nebo v chlopních</li><li>Echokardiografie:</li><li>transtorakálně</li><li>Transezofageálně - sonda naléhá těsně na srdce nebo aortu</li></ul>",
                  "macroscopy": "<ul><li>I: měření srdečních oddílů, kontraktilita jednotlivých oddílů, onemocnění perikardu =</li><li>průkaz výpotku</li><li>CT:</li><li>CTA - vyšetření disekce aorty, embolie plicnice</li></ul>",
                  "microscopy": "<ul><li>CT koronarografie - lumen cévy + charakter aterosklerotického plátu (nepotvrzený</li><li>akutní koronární sy na EKG)</li><li>CT k posouzení VVV, průchodnosti bypassů, hodnocení morfologie, funkční</li><li>hodnocení</li></ul>",
                  "clinical": "<ul><li>Nutná synchronizace s EKG → zabránění rušivým artefaktům</li><li>premedikace BB</li><li>MR:</li><li>posouzení kinetiky srdečních oddílů, kvantifikace krevního toku, diagnostika tumorů,</li><li>arytmogenní dysplazie PK, myokarditidy</li><li>dobře diferencuje tukovou degeneraci - příčina kardiomyopatie</li></ul>"
            },
            "quiz": [
                  {
                        "question": "Jaká je primární diagnostická metoda první volby pro vyšetření tématu: Analýza srdečního stínu.?",
                        "options": [
                              "Magnetická rezonance (MR), protože má nejvyšší rozlišení",
                              "Závisí na klinickém stavu, ale obvykle začínáme méně zatěžujícími metodami jako UZ nebo konvenční RTG",
                              "Vždy invazivní digitální subtrakční angiografie (DSA)",
                              "Termovizní kamera a scintigrafie skeletu"
                        ],
                        "correct": 1,
                        "explanation": "Při vyšetřování tématu 'Analýza srdečního stínu.' volíme diagnostickou metodu na základě klinických indikací, dostupnosti a radiační zátěže. Obecně platí zásada začínat neinvazivními a dostupnými metodami (např. ultrazvukem nebo nativním RTG snímkem) před přistoupením k náročnějším metodám typu CT nebo MR."
                  },
                  {
                        "question": "Které z následujících tvrzení nejlépe vystihuje hlavní přínos radiologie pro téma: Analýza srdečního stínu.?",
                        "options": [
                              "Poskytuje detailní morfologické nebo funkční zobrazení patologických změn pro stanovení diagnózy a plánování léčby",
                              "Umožňuje kompletní vyléčení všech onemocnění bez nutnosti farmakoterapie",
                              "Slouží výhradně k archivaci snímků bez vlivu na klinické rozhodování",
                              "Nahrazuje laboratorní vyšetření krve a biochemickou analýzu"
                        ],
                        "correct": 0,
                        "explanation": "Zobrazovací metody v radiologii u tématu 'Analýza srdečního stínu.' přinášejí klíčové informace o přesné lokalizaci, rozsahu a charakteru patologického procesu, což je nezbytné pro správné klinické rozhodování (konzervativní léčba, operabilita, sledování po léčbě)."
                  }
            ]
      },
      {
            "id": "radio-13",
            "title": "Proměny srdečního stínu při chlopenních vadách",
            "section": "Zobrazování hrudníku a srdce",
            "category": "Hrudník",
            "keywords": [
                  "chlopenní vady",
                  "mitrální stenóza",
                  "aortální konfigurace",
                  "dřevák",
                  "srdeční selhání",
                  "proměny",
                  "srdečního",
                  "stínu",
                  "chlopenních",
                  "vadách"
            ],
            "content": {
                  "definition": "<ul><li><strong>Kardiotorakální index (KTI):</strong> Poměr největšího příčného průměru srdečního stínu a největšího vnitřního průměru hrudníku (norma na snímku ve stoje při nádechu u dospělých do 0,5; nad 0,5 svědčí o kardiomegalii).</li><li><strong>Kalcifikace srdečního stínu:</strong> Průkaz kalcifikací v aortě (ateroskleróza) nebo v chlopních či perikardu na RTG / CT.</li></ul>",
                  "etiology": "",
                  "pathogenesis": "",
                  "macroscopy": "",
                  "microscopy": "",
                  "clinical": "<ul><li><strong>Mitrální konfigurace srdečního stínu:</strong> Typická pro mitrální stenózu. Projevuje se vyhlazením nebo vyklenutím levé kontury srdce v důsledku dilatace a hypertrofie ouška levé síně (a pulmonálního konu). Doprovází ji plicní venostáza (přerozdělení toku do horních laloků).</li><li><strong>Aortální konfigurace srdečního stínu:</strong> Typická pro aortální vady (stenózu či insuficienci) nebo dlouhodobou arteriální hypertenzi. Srdce má tvar 'dřeváku' (vyklenutí levé komory doleva a dolů) a dochází k elongaci hrudní aorty s prominujícím aortálním knoflíkem.</li><li><strong>Vrozené srdeční vady (L-P zkraty):</strong> Např. defekt síňového septa (ASD). Vede k přetížení pravé komory, její hypertrofii a následné rotaci srdce doleva s prominencí pulmonálního konu na levé kontuře.</li></ul>"
            },
            "quiz": [
                  {
                        "question": "Jaká je primární diagnostická metoda první volby pro vyšetření tématu: Proměny srdečního stínu při chlopenních vadách.?",
                        "options": [
                              "Magnetická rezonance (MR), protože má nejvyšší rozlišení",
                              "Závisí na klinickém stavu, ale obvykle začínáme méně zatěžujícími metodami jako UZ nebo konvenční RTG",
                              "Vždy invazivní digitální subtrakční angiografie (DSA)",
                              "Termovizní kamera a scintigrafie skeletu"
                        ],
                        "correct": 1,
                        "explanation": "Při vyšetřování tématu 'Proměny srdečního stínu při chlopenních vadách.' volíme diagnostickou metodu na základě klinických indikací, dostupnosti a radiační zátěže. Obecně platí zásada začínat neinvazivními a dostupnými metodami (např. ultrazvukem nebo nativním RTG snímkem) před přistoupením k náročnějším metodám typu CT nebo MR."
                  },
                  {
                        "question": "Které z následujících tvrzení nejlépe vystihuje hlavní přínos radiologie pro téma: Proměny srdečního stínu při chlopenních vadách.?",
                        "options": [
                              "Poskytuje detailní morfologické nebo funkční zobrazení patologických změn pro stanovení diagnózy a plánování léčby",
                              "Umožňuje kompletní vyléčení všech onemocnění bez nutnosti farmakoterapie",
                              "Slouží výhradně k archivaci snímků bez vlivu na klinické rozhodování",
                              "Nahrazuje laboratorní vyšetření krve a biochemickou analýzu"
                        ],
                        "correct": 0,
                        "explanation": "Zobrazovací metody v radiologii u tématu 'Proměny srdečního stínu při chlopenních vadách.' přinášejí klíčové informace o přesné lokalizaci, rozsahu a charakteru patologického procesu, což je nezbytné pro správné klinické rozhodování (konzervativní léčba, operabilita, sledování po léčbě)."
                  }
            ]
      },
      {
            "id": "radio-14",
            "title": "Normální a patologická plicní vaskularizace",
            "section": "Zobrazování hrudníku a srdce",
            "category": "Hrudník",
            "keywords": [
                  "plicní cévy",
                  "vaskularizace",
                  "hyperémie",
                  "plicní embolie",
                  "plicní hypertenze",
                  "venostáza",
                  "normální",
                  "patologická",
                  "plicní"
            ],
            "content": {
                  "definition": "<ul><li>Plicní embolie:</li><li>příčina smrti u ležících nebo po operaci</li><li>zdrojem - trombóza žil dolních končetin</li><li>uzávěr levé plicní arterie →dramatický klinický obraz → urgentní intervenční zákrok</li><li>uzávěr segmentálních arterií → plicní infarkt</li></ul>",
                  "etiology": "<ul><li>diagnostika = CT plicní angiografie (prokáže uzávěr nebo defekt v kontrastně</li><li>naplněné plicní tepně)</li><li>RTG obraz infarktu - klínovité zastření v periferii plíce = odpovídá plícnímu</li><li>segmentu</li><li>Venózní plicní hypertenze:</li></ul>",
                  "pathogenesis": "<ul><li>Plicní edém = nahromadění kapaliny v plicích → porucha výměny plynů</li><li>Kardiogenní edém - při insuficience levé komory nebo mitrální vadě → dilatace</li><li>srdce, městnání v plicním oběhu, edém plic, transsudace v pleurální dutině</li><li>iatrogenní edém - abnormální množství podaných tekutin infuzemi</li><li>nefrogenní edém - onemocnění ledvin</li></ul>",
                  "macroscopy": "<ul><li>šoková plíce: poranění alveolokapilární membrány → propustnost pro tekutiny do</li><li>alveolů i intersticia = ARDS sy → obraz alveolárního edému se zřetelným obrazem</li><li>air bronchogramu (chomáčkovité zastření) a obvykle nezvětšené srdce</li><li>Plicní edém má několik stádií: Kongesce (městnání v malém oběhu - vyrovnání šířky</li><li>plicních žil) → Intersticiální edém (zřetelná tekutina v intersticiu, Kerleyho B linie)</li></ul>",
                  "microscopy": "<ul><li>→ tekutina z intersticia do alveolů = alveolární edém → konečné stádium</li><li>fluidothorax</li><li>Arteriální plicní hypertenze:</li><li>prekapilární x postkapilární x cor pulmonale</li><li>Prekapilární hypertenze: zvětšené množství krve při levopravých zkratech →</li></ul>",
                  "clinical": "<ul><li>široké, ostře ohraničené arterie daleko do periferie (tr. intermedius l. dx. měří více než</li><li>7mm)</li><li>Postkapilární hypertenze: přetlak v arteriích kvůli venostáze v plicích (ischemická</li><li>kardiopatie, mitrální vady, ..) → protektivní vazokonstrikce v dolních partiích a</li><li>rozšíření v horních partiích + intersticiální edém</li><li>Cor pulmonale: při přetížení PK srdeční při plicní hypertenzi různé etiologie –. srdce</li><li>rotuje a rozšiřuje se doleva, výtoková část na levé kontuře, retrosternálně PK,</li><li>rozšířený tr. intermedius l. dx</li></ul>"
            },
            "quiz": [
                  {
                        "question": "Jaká je primární diagnostická metoda první volby pro vyšetření tématu: Normální a patologická plicní vaskularizace.?",
                        "options": [
                              "Magnetická rezonance (MR), protože má nejvyšší rozlišení",
                              "Závisí na klinickém stavu, ale obvykle začínáme méně zatěžujícími metodami jako UZ nebo konvenční RTG",
                              "Vždy invazivní digitální subtrakční angiografie (DSA)",
                              "Termovizní kamera a scintigrafie skeletu"
                        ],
                        "correct": 1,
                        "explanation": "Při vyšetřování tématu 'Normální a patologická plicní vaskularizace.' volíme diagnostickou metodu na základě klinických indikací, dostupnosti a radiační zátěže. Obecně platí zásada začínat neinvazivními a dostupnými metodami (např. ultrazvukem nebo nativním RTG snímkem) před přistoupením k náročnějším metodám typu CT nebo MR."
                  },
                  {
                        "question": "Které z následujících tvrzení nejlépe vystihuje hlavní přínos radiologie pro téma: Normální a patologická plicní vaskularizace.?",
                        "options": [
                              "Poskytuje detailní morfologické nebo funkční zobrazení patologických změn pro stanovení diagnózy a plánování léčby",
                              "Umožňuje kompletní vyléčení všech onemocnění bez nutnosti farmakoterapie",
                              "Slouží výhradně k archivaci snímků bez vlivu na klinické rozhodování",
                              "Nahrazuje laboratorní vyšetření krve a biochemickou analýzu"
                        ],
                        "correct": 0,
                        "explanation": "Zobrazovací metody v radiologii u tématu 'Normální a patologická plicní vaskularizace.' přinášejí klíčové informace o přesné lokalizaci, rozsahu a charakteru patologického procesu, což je nezbytné pro správné klinické rozhodování (konzervativní léčba, operabilita, sledování po léčbě)."
                  }
            ]
      },
      {
            "id": "radio-15",
            "title": "Metody zobrazování trávicí trubice",
            "section": "Zobrazování trávicí trubice a břicha",
            "category": "Břicho",
            "keywords": [
                  "trávicí trubice",
                  "git",
                  "polykací akt",
                  "žaludek",
                  "pasáž",
                  "enteroklýza",
                  "baryum",
                  "defekt náplně",
                  "metody",
                  "zobrazování"
            ],
            "content": {
                  "definition": "<ul><li>Metody CT, MR a PET/CT nahrazují některé invazivní metody (endoskopii)</li><li>Prostý snímek=  pneumoperitoneum, hladinky při neprůchodnosti střev (ileus),</li><li>pozření cizího tělesa</li><li>KONTRASTNÍ VYŠETŘENÍ</li><li>monokontrastní: podání jedné pozitivní KL - získáme reliéfový obraz</li><li>Dvojkontrastní:  kombinace pozitivní a negativní KL → pozitivní vytvoří na sliznici</li><li>tenkou vrstvu + negativní trávicí trubici roztáhne → hodnotíme slizniční reliéf a</li><li>průsvit trubice</li></ul>",
                  "etiology": "<ul><li>Příprava - bezezbytková dieta</li><li>Negativní KL: vzduch, CO2, manitol (ale rychle se vstřebává)</li><li>Izodenzní KL: metylcelulóza, HP-7000 → tenké střevo</li><li>Pozitivní KL: Báryové - Mikroplaque, Prontobario (KI - perforace GIT); Jodové - p.</li><li>o. zředěné s vodou, ale rychle se vstřebávají (I: při podezření perforace nebo</li><li>obstrukce GIT), i. v. při CT vyšetření střev</li><li>MR vyšetření - gadoliniové preparáty buď p. o. nebo i. v.</li><li>a)  Enteroklýza</li></ul>",
                  "pathogenesis": "<ul><li>tonus trávicí trubice ovlivňujeme farmakologicky (paspertin, morfin)</li><li>vyšetření tenkého střeva metodou dvojího kontrastu</li><li>nosem nebo ústy sonda až do duodenojejunální flexury → podání Mikropaque</li><li>suspenze + negativní metylceluloza → MTC tlačí pozitivní kontrast před sebou →</li><li>na stěnách zůstává povlak baryové suspenze</li><li>Snímky na CT - velká radiační zátěž</li><li>CT enterografie - KL p. o. → CT vyšetření břicha → postprocesingová</li><li>rekonstrukce</li></ul>",
                  "macroscopy": "<ul><li>b)  Irrigoskopie</li><li>zobrazení tlustého střeva dvoukontrastní metodou</li><li>nejprve rektální rourkou baryovou kaši, pak insuflace vzduchu → skiagrafie pod</li><li>skiaskopickou metodou</li><li>před vyšetřením otočení pacienta o 360°→ aby se KL dostala do všech partií</li><li>tračníku</li><li>c)  Defekografie</li><li>dynamické zobrazení struktur pánevního dna a konečníku při vyprazdňování</li></ul>",
                  "microscopy": "<ul><li>I: obtížná defekace nebo samovolný odchod stolice, výhřez konečníku</li><li>nejprve baryová KL p. o., pak rourkou do dupky aplikace husté baryové KL →</li><li>přesun na defekační křeslo → snímkování pod skiaskopií a skiagrafií</li><li>VÝPOČETNÍ TOMOGRAFIE</li><li>rozhodující význam v diagnostice jednotlivých částí GIT</li><li>v onkologie posoudí šířku a délku infiltrace stěny, prorůstání do okolí, případné</li><li>metastázy do LU</li><li>CT koloskopie</li></ul>",
                  "clinical": "<ul><li>indikováno po neúspěšné endoskopii - velké vinutí střev, neprůchozí stenózy, srůsty</li><li>problém - nerozlišení polypů od obsahu tlustého střeva</li><li>Předpokladem je denzní rozdíl mezi lumen a střevní stěnou → napomáhá insuflace</li><li>vzduchu do tračníku</li><li>SONOGRAFIE</li><li>limitováno přítomností vzduchu v trávicí trubici</li><li>střevní stěna hypoechogenní, centrální část hyperechogenní - šířka stěny 4mm →víc</li><li>odpovídá patologii (tumor nebo zánět)</li><li>prokáže zvětšené LU (hypoechogenní)</li><li>Endoluminální sonografie = posouzení infiltrace stěn trávicíc trubice, mediastina nebo</li><li>pankreatu</li><li>MR</li><li>MR enterografie - nahrazuje invazivní enteroklýzu + eliminuje radiační zátěž</li></ul>"
            },
            "quiz": [
                  {
                        "question": "Jaká je primární diagnostická metoda první volby pro vyšetření tématu: Metody zobrazování trávicí trubice.?",
                        "options": [
                              "Magnetická rezonance (MR), protože má nejvyšší rozlišení",
                              "Závisí na klinickém stavu, ale obvykle začínáme méně zatěžujícími metodami jako UZ nebo konvenční RTG",
                              "Vždy invazivní digitální subtrakční angiografie (DSA)",
                              "Termovizní kamera a scintigrafie skeletu"
                        ],
                        "correct": 1,
                        "explanation": "Při vyšetřování tématu 'Metody zobrazování trávicí trubice.' volíme diagnostickou metodu na základě klinických indikací, dostupnosti a radiační zátěže. Obecně platí zásada začínat neinvazivními a dostupnými metodami (např. ultrazvukem nebo nativním RTG snímkem) před přistoupením k náročnějším metodám typu CT nebo MR."
                  },
                  {
                        "question": "Které z následujících tvrzení nejlépe vystihuje hlavní přínos radiologie pro téma: Metody zobrazování trávicí trubice.?",
                        "options": [
                              "Poskytuje detailní morfologické nebo funkční zobrazení patologických změn pro stanovení diagnózy a plánování léčby",
                              "Umožňuje kompletní vyléčení všech onemocnění bez nutnosti farmakoterapie",
                              "Slouží výhradně k archivaci snímků bez vlivu na klinické rozhodování",
                              "Nahrazuje laboratorní vyšetření krve a biochemickou analýzu"
                        ],
                        "correct": 0,
                        "explanation": "Zobrazovací metody v radiologii u tématu 'Metody zobrazování trávicí trubice.' přinášejí klíčové informace o přesné lokalizaci, rozsahu a charakteru patologického procesu, což je nezbytné pro správné klinické rozhodování (konzervativní léčba, operabilita, sledování po léčbě)."
                  }
            ]
      },
      {
            "id": "radio-16",
            "title": "RTG obrazy patologických stavů trávicí trubice",
            "section": "Zobrazování trávicí trubice a břicha",
            "category": "Břicho",
            "keywords": [
                  "patologie git",
                  "stenóza",
                  "nádory git",
                  "divertikl",
                  "vřed",
                  "ulcera",
                  "crohn",
                  "kolitida",
                  "obrazy",
                  "patologických"
            ],
            "content": {
                  "definition": "<ul><li>Zúžený průsvit: Maligní stenóza krátká, s okolními invaginacemi; příčina - nejčastěji</li><li>tumor, otočení střeva, vchlípení; odlišit uzávěr od spasmů → podáme spasmolytika</li><li>Defekt v náplní: nádorem, polypem, tlakem z okolí - pelotový příznak →odlišit</li><li>defekt od zbytků jídla</li><li>Změny ve sližničním reliéfu: rozšíření nebo defekty řas u chronických zánětů</li><li>Změny polohy a tvaru: některé úseky abnormálně dlouhé některé zkrácené; dilatace</li><li>před překážkou</li><li>Poruchy tonu a motility: Hypotonie x hypertonie</li></ul>",
                  "etiology": "<ul><li>Nádory:</li><li>exofytický - velké defekty v náplni, nepravidelný reliéf,</li><li>chybění peristaltiky</li><li>Skirhotický - zúžení průsvitu, chybění peristaltiky,</li><li>slizniční reliéf vymizelý</li><li>ulcerativní - plochý vnořený vřed s okolním chyběním řas</li><li>a peristaltiky (miskovitý ca žaludku)</li><li>benigní - ostře ohraničený defekt, okolí spoko</li></ul>",
                  "pathogenesis": "<ul><li>Divertikl:</li><li>vyklenutí stěny trávicí trubice s KL</li><li>získaný nebo vrozený defekt stěny - pulzní divertikl (krček</li><li>+ vak)</li><li>tahem okolních struktur - trakční divertikl (široká báze a</li><li>trojúhelníkový tvar)</li><li>Zenkerův divertikl - přechod hltanu a jícnu dorsálně</li><li>Ulcus:</li></ul>",
                  "macroscopy": "<ul><li>defekt stěny, kt. se plní KL a je symptomem vážného</li><li>onemocnění</li><li>benigní - vyklenuje se mimo konturu stěny (plus v náplni)</li><li>maligní - v místě defektu náplně, nepřesahuje konturu (minus v</li><li>náplni)</li><li>Absces:</li><li>v okolí trávicí trubice - mezikličkový</li><li>oválný, ostře ohraničený</li></ul>",
                  "microscopy": "<ul><li>na CT hypodenzní + lem hyperdenzní po podání KL</li><li>vzduchová bublina projasnění → anaerobní infekce</li><li>JÍCEN: Zenkerův divertikl, Achalázie jícnu, Perforace jícnu, gastroezofageální</li><li>varixy, refluxní korozivní ezofagitida, spinocelulární ca jícnu, hiátové hernie</li><li>ŽALUDEK A DUODENUM: Vředová choroba, perforace, benigní tu - adenomy,</li><li>leimyomy, neurogenní tu (hladké, ohraničené defekty), karcinom žaludku, traumata</li><li>(pars decendens duodeni - řídítka kola, pás auta → intramurální hematom imituje</li><li>tumorózní proces)</li></ul>",
                  "clinical": "<ul><li>TENKÉ STŘEVO: Meckelův divertikl (průkaz nukleárkou), enteritidy, M. Crohn (v</li><li>. fázi rtg málo specifický - prosáknutí řas, aftoidní ulcerace + edematózní zóny → 2.</li><li>fáze reliéf dlažebních kostek → 3. fáze tvorba píštělí a abscesů → nejčastěji MR</li><li>enterografie + sono), defekty v náplni způsobené parazity, lymfomy, tenké kličky jako</li><li>součást hernií</li><li>TLUSTÉ STŘEVO: Divertikulóza (na přechodu sigmatu a descedens → prolaps</li><li>sliznice stěnou tračníku→ komplikace = perforace), ulcerózní kolitida (toxické</li><li>megakolon - tračník extrémně rozepjatů se ztluštěním stěny), M. Crohn, ischemické</li><li>kolitidy (okrajové defekty jako “otisk palce” →gangréna = plyn ve střevní stěně),</li><li>apendicitida (sono = hyperechogenní, komprimovatelný), polypy (hyperplastické,</li><li>edematózní, vilové → defekty v kontrastní náplni při irigografii), kolorektální ca</li><li>(irrigografie; příznak infiltrace = redukce tukové tkáně v okolí, ztrát diferenciace od</li><li>močového měchýře nebo dělohy,.. → odhalí CT, lépe MR, nejpřesněji PET/CT)</li></ul>"
            },
            "quiz": [
                  {
                        "question": "Jaká je primární diagnostická metoda první volby pro vyšetření tématu: RTG obrazy patologických stavů trávicí trubice.?",
                        "options": [
                              "Magnetická rezonance (MR), protože má nejvyšší rozlišení",
                              "Závisí na klinickém stavu, ale obvykle začínáme méně zatěžujícími metodami jako UZ nebo konvenční RTG",
                              "Vždy invazivní digitální subtrakční angiografie (DSA)",
                              "Termovizní kamera a scintigrafie skeletu"
                        ],
                        "correct": 1,
                        "explanation": "Při vyšetřování tématu 'RTG obrazy patologických stavů trávicí trubice.' volíme diagnostickou metodu na základě klinických indikací, dostupnosti a radiační zátěže. Obecně platí zásada začínat neinvazivními a dostupnými metodami (např. ultrazvukem nebo nativním RTG snímkem) před přistoupením k náročnějším metodám typu CT nebo MR."
                  },
                  {
                        "question": "Které z následujících tvrzení nejlépe vystihuje hlavní přínos radiologie pro téma: RTG obrazy patologických stavů trávicí trubice.?",
                        "options": [
                              "Poskytuje detailní morfologické nebo funkční zobrazení patologických změn pro stanovení diagnózy a plánování léčby",
                              "Umožňuje kompletní vyléčení všech onemocnění bez nutnosti farmakoterapie",
                              "Slouží výhradně k archivaci snímků bez vlivu na klinické rozhodování",
                              "Nahrazuje laboratorní vyšetření krve a biochemickou analýzu"
                        ],
                        "correct": 0,
                        "explanation": "Zobrazovací metody v radiologii u tématu 'RTG obrazy patologických stavů trávicí trubice.' přinášejí klíčové informace o přesné lokalizaci, rozsahu a charakteru patologického procesu, což je nezbytné pro správné klinické rozhodování (konzervativní léčba, operabilita, sledování po léčbě)."
                  }
            ]
      },
      {
            "id": "radio-17",
            "title": "Zobrazování náhlých příhod břišních",
            "section": "Zobrazování trávicí trubice a břicha",
            "category": "Břicho",
            "keywords": [
                  "náhlá příhoda břišní",
                  "npb",
                  "ileus",
                  "perforace",
                  "pneumoperitoneum",
                  "volný plyn",
                  "uz",
                  "zobrazování",
                  "náhlých",
                  "příhod"
            ],
            "content": {
                  "definition": "<ul><li>NPB = jeden z nejzávažnějších stavů v urgentní medicíně</li><li>objevují se náhle, z plného zdraví → nutné stanovení diagnózy včas</li><li>KO: bolesti břicha, peritoneální příznaky, zvracení, hypovolémie, kardiovaskulární a</li><li>respirační poruchy</li><li>rozdělení: úrazové x neúrazové</li><li>Další dělení: zánětlivé, ileózní, krvácení do GIT</li></ul>",
                  "etiology": "<ul><li>Zobrazovací metoda = u nestabilních UZ, stabilní RTG</li><li>RTG snímek břicha: ve stoje s horizontálním průběhem rtg paprsků  (někdy vleže)</li><li>→ někdy imituje záněty nebo embolie v bazálních partiích hrudníku (nutno zachytit i</li><li>cm plic), zlomeniny žeber = možná traumatizace sleziny nebo jater →</li><li>Pneumoperitoneum + hydroaerické fenomény</li><li>Pneumoperitoneum: průkaz plynu v břišní dutině = srpkovité projasnění pod bránicí</li></ul>",
                  "pathogenesis": "<ul><li>(nejčastěji netraumatické = u perforace duodenálního vředu nebo divertiklů</li><li>sigmoidea, taky po laparoskopických operacích)</li><li>Hydroaerické fenomény = hladinky: příznak neprůchodnosti trávicí trubice → na</li><li>hranici retenční tekutiny a vzduchu se vytváří hladinky → snímky ve vertikále</li><li>Kontrastní vyšetření při ileozních stavech či při průkazu perforace (Jód!) - CT</li><li>Irigoskopie - desinvaginace tlustého střeva u dětí</li></ul>",
                  "macroscopy": "<ul><li>UZ: dobře dostupné, neinvazivní → průkaz poškození orgánů v břiše a volné tekutiny</li><li>(hl. krve a ascites) = subfrenická oblast, hepatorenální prostor (mezi játry a pravou</li><li>ledvinou), okolí sleziny, Douglasův prostor</li><li>CT: nejpřesnější, nativní + kontrastní, vždy bazální plicní pole i malou pánev,</li><li>možnost multiplanární rekonstrukce</li><li>katetrizační angiografie (s případnou intervencí), ERCP (pankreas), MR (výjimečně)</li></ul>",
                  "microscopy": "<ul><li>Traumata:</li><li>otevřená poranění x uzavřená (tupými předměty)</li><li>zvýšení intraabdominálního tlaku → komprese → decelerace</li><li>perforace trávicí trubice, hemoperitoneum, krvácení do stěny střeva, lacerace orgánu,</li><li>subkapsulární hematomy, lap belt injuries</li><li>Neúrazové NPB:</li></ul>",
                  "clinical": "<ul><li>zánětlivé stavy: jednotlivé orgány nebo peritoneum</li><li>ileózní stavy: Mechanický (obstrukční, strangulační, volvulus, invaginace → prostý</li><li>snímek břicha + pasáž vodnou jodovou KL + CT); Neurogenní (paralytický -</li><li>komplikace po operacích; spastický); Cévní (a. nebo v. mesenterica superior nebo</li><li>inferior → embolie, aterosklerózy → snímek + CT angiogragie)</li><li>Krvácení do GIT: hemateméza (zvracení krve), melena, enterorrhagie →</li><li>endoskopie, pasáž tenkým střevem, kolonoskopie (+CT)</li></ul>"
            },
            "quiz": [
                  {
                        "question": "Jaká je primární diagnostická metoda první volby pro vyšetření tématu: Zobrazování náhlých příhod břišních.?",
                        "options": [
                              "Magnetická rezonance (MR), protože má nejvyšší rozlišení",
                              "Závisí na klinickém stavu, ale obvykle začínáme méně zatěžujícími metodami jako UZ nebo konvenční RTG",
                              "Vždy invazivní digitální subtrakční angiografie (DSA)",
                              "Termovizní kamera a scintigrafie skeletu"
                        ],
                        "correct": 1,
                        "explanation": "Při vyšetřování tématu 'Zobrazování náhlých příhod břišních.' volíme diagnostickou metodu na základě klinických indikací, dostupnosti a radiační zátěže. Obecně platí zásada začínat neinvazivními a dostupnými metodami (např. ultrazvukem nebo nativním RTG snímkem) před přistoupením k náročnějším metodám typu CT nebo MR."
                  },
                  {
                        "question": "Které z následujících tvrzení nejlépe vystihuje hlavní přínos radiologie pro téma: Zobrazování náhlých příhod břišních.?",
                        "options": [
                              "Poskytuje detailní morfologické nebo funkční zobrazení patologických změn pro stanovení diagnózy a plánování léčby",
                              "Umožňuje kompletní vyléčení všech onemocnění bez nutnosti farmakoterapie",
                              "Slouží výhradně k archivaci snímků bez vlivu na klinické rozhodování",
                              "Nahrazuje laboratorní vyšetření krve a biochemickou analýzu"
                        ],
                        "correct": 0,
                        "explanation": "Zobrazovací metody v radiologii u tématu 'Zobrazování náhlých příhod břišních.' přinášejí klíčové informace o přesné lokalizaci, rozsahu a charakteru patologického procesu, což je nezbytné pro správné klinické rozhodování (konzervativní léčba, operabilita, sledování po léčbě)."
                  }
            ]
      },
      {
            "id": "radio-18",
            "title": "Zobrazování onemocnění jater",
            "section": "Zobrazování trávicí trubice a břicha",
            "category": "Břicho",
            "keywords": [
                  "játra",
                  "cirhóza",
                  "steatóza",
                  "hemangiom",
                  "hepatocelulární ca",
                  "metastázy jater",
                  "uz",
                  "ct",
                  "zobrazování",
                  "onemocnění"
            ],
            "content": {
                  "definition": "<ul><li>Játra - dva laloky →rozdělené průběhem lig. falciforme a lig. teres + v. portae a a.</li><li>hepatica propria a d. choledochus → 8 laloků (rozdělené jaterními žilami na 4 + v.</li><li>portae každý na dva)</li><li>UZ:</li><li>je vždy první volbou</li><li>parenchym má pravidelnou strukturu, bohatý reliéf</li><li>v. portae hyperechogenní periportální vazivo (svítí)</li><li>řízení biopsie, peroperační sonografie ke specifikaci patologických ložisek</li><li>CT:</li></ul>",
                  "etiology": "<ul><li>obvykle druhou vyšetřovací metodou</li><li>nativně nebo s KL- arteriální fáze (30 s), portální fáze (60 s), parenchymatózní po 1-2</li><li>minutách</li><li>arteriální fáze - útvary z hepatocytů hepatocelulární ca, hemangiom (centripetálně),</li><li>fokální nodulární hyperplazie, hypervaskularizované metastázy, dysplastické uzly</li><li>jaterní cirhózy</li><li>portální fáze - sytí se metastázy GIT</li><li>PET/CT: u kolorektálního karcinomu (mají časté metastázy do jater)</li><li>MR:</li></ul>",
                  "pathogenesis": "<ul><li>nativní hemangiomy - vysoce signální v T2</li><li>KL: cheláty gadolinia (jen intravenózně →nedostanou se do buněk), hepatobiliární</li><li>KL (parciálně proniká do hepatocytů, KL pro zobrazení RES</li><li>Difuzní změny</li><li>Steatóza: játra zvětšené, na UZ hyperechogenní (bílé), CT difüzní hypodenzita</li><li>Cirhóza: nehomogenní struktura, střídání okrsků hypo a hyperchogenity a</li><li>hyperdenzity, neostré jizevnaté okraje, cirhotické uzly izoechogenní i izodenzní;</li><li>zvýraznění  hyperechogenních okrajů v. portae; průkaz ascitu a portální hypertenze</li><li>Hepatomegalie: difuzní porucha echogenity a denzity, pravostranné srdeční selhání</li></ul>",
                  "macroscopy": "<ul><li>Ložiskové změny: charakterizovány cystami (běžný vedlejší nález), abscesy, benigními nebo</li><li>maligními nádory, fokální nodulární hyperplazií</li><li>Poranění jater:</li><li>poškození parenchymu, cév i žlučových cest</li><li>intrahepatický hematom: anechogenní, poté hyperechogenní, kontrastní CT →</li><li>hypodenzní defekt v kontrastně zobrazeném parenchymu</li><li>Kontuze: oválný, hypoechogenní okrsek jaterního parenchymu, průkaz na CT</li><li>subkapsulární hematom: hypoechogenní proužek odtlačující parenchym od kapsuly,</li><li>na CT jako hypodenzní pás</li></ul>",
                  "microscopy": "<ul><li>Hemoperitoneum: volná tekutina ve všech modalitách</li><li>Nádory:</li><li>Hemangiom: solidní útvar, na UZ hyperechogenní, ostře ohraničený, bez</li><li>hypoechogenního lemu, na CT hypodenzní útvar - masivně se sytí KL z periferie do</li><li>centra</li><li>Hepatocelulární ca: velké solidní ložisko, s nepravidelnou homogenitou, často s</li><li>centrální nekrózou, hypoechogenní okraje, expanzivní; CT - hypodenzní, kontrastně</li><li>se sytí v arteriální fázi; MR - po podání hepatobiliárních KL</li><li>Cholangiokarcinom</li></ul>",
                  "clinical": "<ul><li>Metastázy: z nejrůznějších primárních nádorů (ca žaludku, tračníku, pankreatu, plic,</li><li>mamy, gynekologické, lymfom); z GIT = hypovaskularizované (sytí se v portální</li><li>fázi) → klasický hyperechogenní uzel s hypoechogenní lemem (UZ); z velkého oběhu</li><li>= hypervaskularizované (patrné v arteriální fázi)</li><li>Portální hypertenze:</li><li>prehepatická, intrahepatická, posthepatická</li><li>UZ, angiografie</li><li>Doppler → posouzení směru a rychlosti toku</li><li>nepřímé CT, MR splenoportografie</li><li>průkaz portokaválních anastomóz, splenomegalie, ascites, jícnové varixy</li></ul>"
            },
            "quiz": [
                  {
                        "question": "Jaká je primární diagnostická metoda první volby pro vyšetření tématu: Zobrazování onemocnění jater.?",
                        "options": [
                              "Magnetická rezonance (MR), protože má nejvyšší rozlišení",
                              "Závisí na klinickém stavu, ale obvykle začínáme méně zatěžujícími metodami jako UZ nebo konvenční RTG",
                              "Vždy invazivní digitální subtrakční angiografie (DSA)",
                              "Termovizní kamera a scintigrafie skeletu"
                        ],
                        "correct": 1,
                        "explanation": "Při vyšetřování tématu 'Zobrazování onemocnění jater.' volíme diagnostickou metodu na základě klinických indikací, dostupnosti a radiační zátěže. Obecně platí zásada začínat neinvazivními a dostupnými metodami (např. ultrazvukem nebo nativním RTG snímkem) před přistoupením k náročnějším metodám typu CT nebo MR."
                  },
                  {
                        "question": "Které z následujících tvrzení nejlépe vystihuje hlavní přínos radiologie pro téma: Zobrazování onemocnění jater.?",
                        "options": [
                              "Poskytuje detailní morfologické nebo funkční zobrazení patologických změn pro stanovení diagnózy a plánování léčby",
                              "Umožňuje kompletní vyléčení všech onemocnění bez nutnosti farmakoterapie",
                              "Slouží výhradně k archivaci snímků bez vlivu na klinické rozhodování",
                              "Nahrazuje laboratorní vyšetření krve a biochemickou analýzu"
                        ],
                        "correct": 0,
                        "explanation": "Zobrazovací metody v radiologii u tématu 'Zobrazování onemocnění jater.' přinášejí klíčové informace o přesné lokalizaci, rozsahu a charakteru patologického procesu, což je nezbytné pro správné klinické rozhodování (konzervativní léčba, operabilita, sledování po léčbě)."
                  }
            ]
      },
      {
            "id": "radio-19",
            "title": "Zobrazování onemocnění portálního řečiště",
            "section": "Zobrazování trávicí trubice a břicha",
            "category": "Břicho",
            "keywords": [
                  "portální hypertenze",
                  "portální řečiště",
                  "trombóza v. portae",
                  "kolaterály",
                  "uz",
                  "doppler",
                  "tips",
                  "zobrazování",
                  "onemocnění",
                  "portálního"
            ],
            "content": {
                  "definition": "<ul><li>UZ: v. portae hyperechogenní periportální vazivo (svítí)</li><li>CT: nativní + KL → arteriální fáze (30 s), portální fáze (60 s), parenchymatózní po</li></ul>",
                  "etiology": "<ul><li>-2 minutách</li><li>MR: splenoportografie po podání KL (gadolinia)</li></ul>",
                  "pathogenesis": "<ul><li>ANGIOGRAFICKÉ METODY: v diagnostice portální hypertenze je metodou volby</li><li>dopplerovská sonografie</li></ul>",
                  "macroscopy": "<ul><li>Portální hypertenze:</li><li>prehepatická, intrahepatická, posthepatická</li></ul>",
                  "microscopy": "<ul><li>UZ, angiografie</li><li>Doppler → posouzení směru a rychlosti toku</li></ul>",
                  "clinical": "<ul><li>nepřímé CT, MR splenoportografie</li><li>průkaz portokaválních anastomóz, splenomegalie, ascites, jícnové varixy</li></ul>"
            },
            "quiz": [
                  {
                        "question": "Jaká je primární diagnostická metoda první volby pro vyšetření tématu: Zobrazování onemocnění portálního řečiště.?",
                        "options": [
                              "Magnetická rezonance (MR), protože má nejvyšší rozlišení",
                              "Závisí na klinickém stavu, ale obvykle začínáme méně zatěžujícími metodami jako UZ nebo konvenční RTG",
                              "Vždy invazivní digitální subtrakční angiografie (DSA)",
                              "Termovizní kamera a scintigrafie skeletu"
                        ],
                        "correct": 1,
                        "explanation": "Při vyšetřování tématu 'Zobrazování onemocnění portálního řečiště.' volíme diagnostickou metodu na základě klinických indikací, dostupnosti a radiační zátěže. Obecně platí zásada začínat neinvazivními a dostupnými metodami (např. ultrazvukem nebo nativním RTG snímkem) před přistoupením k náročnějším metodám typu CT nebo MR."
                  },
                  {
                        "question": "Které z následujících tvrzení nejlépe vystihuje hlavní přínos radiologie pro téma: Zobrazování onemocnění portálního řečiště.?",
                        "options": [
                              "Poskytuje detailní morfologické nebo funkční zobrazení patologických změn pro stanovení diagnózy a plánování léčby",
                              "Umožňuje kompletní vyléčení všech onemocnění bez nutnosti farmakoterapie",
                              "Slouží výhradně k archivaci snímků bez vlivu na klinické rozhodování",
                              "Nahrazuje laboratorní vyšetření krve a biochemickou analýzu"
                        ],
                        "correct": 0,
                        "explanation": "Zobrazovací metody v radiologii u tématu 'Zobrazování onemocnění portálního řečiště.' přinášejí klíčové informace o přesné lokalizaci, rozsahu a charakteru patologického procesu, což je nezbytné pro správné klinické rozhodování (konzervativní léčba, operabilita, sledování po léčbě)."
                  }
            ]
      },
      {
            "id": "radio-20",
            "title": "Zobrazování onemocnění žlučníku a žlučových cest",
            "section": "Zobrazování trávicí trubice a břicha",
            "category": "Břicho",
            "keywords": [
                  "žlučník",
                  "žlučové cesty",
                  "cholecystolitiáza",
                  "cholecystitida",
                  "cholangitida",
                  "ercp",
                  "mrcp",
                  "ptc",
                  "uz",
                  "zobrazování"
            ],
            "content": {
                  "definition": "<ul><li>UZ:</li><li>žlučové cesty nemají vazivo → nesvítí</li><li>žlučník má tenkou stěnu, dorzální echo s anechogenním obsahem → vyšetřujeme</li><li>vždy na lačno, jinak je obraz zkreslen</li><li>MRCP (Cholangiopankreatografie)</li><li>neinvazivní metoda - bez použití kontrastní látky se v přístroji magnetické rezonance</li></ul>",
                  "etiology": "<ul><li>zaměříme na požadovaný úsek (tj. žlučové cesty, slinivka a okolí) a ten skenujeme.</li><li>rychlá metoda pro zobrazení žlučových cest a d. pancreaticus</li><li>hydrografická metoda - hyperintenzivní žlučové cesty a žlučník patrné na tmavém</li><li>podkladě</li><li>I: při podezření na zúžení žlučových cest žlučovými kameny</li><li>PERKUTÁNNÍ TRANSHEPATICKÁ CHOLANGIOGRAFIE (PTC)</li></ul>",
                  "pathogenesis": "<ul><li>pod skiagrafickou kontrolou → jemnou jehlou punkce žlučových cest → naplnění</li><li>jodovou KL →sledování průniku do duodena</li><li>I: porucha odtoku žluči žlučovodem, a přitom nelze překážku odstranit „zevnitř“</li><li>pomocí ERCP; jen při rozšířených žlučovodech</li><li>ENDOSKOPICKÁ RETROGRÁDNÍ CHOLANGIOPANKREATIKOGRAFIE</li><li>(ERCP)</li></ul>",
                  "macroscopy": "<ul><li>invazivní vyšetření</li><li>gastroenterologové → fibroskop do duodena (Vaterova papila) pod skiaskopickou</li><li>kontrolou → naplnění KL d. pancreaticus a žlučovody</li><li>často spojen s následnou intervencí</li><li>I: diagnostice a léčbě zúžení či ucpání žlučových cest s poruchou odtoku žluči a u</li><li>nemocí slinivky</li></ul>",
                  "microscopy": "<ul><li>PEROPERAČNÍ CHOLANGIOGRAFIE: kontrolní zobrazení žlučových cest v průběhu</li><li>operace</li><li>Cholecystolitiáza:</li><li>jen UZ → cholesterolové kameny = snadno diferencovatelné v náplni žlučníku</li><li>→výrazně odráží UZ vlny; někdy patrné i na RTG</li><li>hyperechogenní ložisko + akustický stín + změna polohy ložiska při změně polohy</li></ul>",
                  "clinical": "<ul><li>pacienta (když nemění polohy → polypy)</li><li>drobné konkrementy nebo drť může vytvářet hladinku</li><li>Akutní zánět: edematózní prosáknutí stěny žlučníku →vícevrstvé složení stěny</li><li>Chronický zánět: zesílení stěny, svraštění žlučníku, nález konkrementů; porcelánový žlučník</li><li>= kalcifikovaná stěna (kompletně odráží UZ vlny)</li><li>Obstruktivní cholestáza: rozšíření žlučovodů vedle větví porty = příznak dvouhlavňové</li><li>pušky → příčina blokády = obstrukce konkrementem, jaterní metastázou, po operacích</li><li>Nádory: adenomy, papilomy, adenokarcinom (v místě žlučníku solidní útvar s dilatací</li><li>žlučových cest), cholangiokarcinom (extrahepatální, Klatskinův tumor)</li></ul>"
            },
            "quiz": [
                  {
                        "question": "Jaká je primární diagnostická metoda první volby pro vyšetření tématu: Zobrazování onemocnění žlučníku a žlučových cest.?",
                        "options": [
                              "Magnetická rezonance (MR), protože má nejvyšší rozlišení",
                              "Závisí na klinickém stavu, ale obvykle začínáme méně zatěžujícími metodami jako UZ nebo konvenční RTG",
                              "Vždy invazivní digitální subtrakční angiografie (DSA)",
                              "Termovizní kamera a scintigrafie skeletu"
                        ],
                        "correct": 1,
                        "explanation": "Při vyšetřování tématu 'Zobrazování onemocnění žlučníku a žlučových cest.' volíme diagnostickou metodu na základě klinických indikací, dostupnosti a radiační zátěže. Obecně platí zásada začínat neinvazivními a dostupnými metodami (např. ultrazvukem nebo nativním RTG snímkem) před přistoupením k náročnějším metodám typu CT nebo MR."
                  },
                  {
                        "question": "Které z následujících tvrzení nejlépe vystihuje hlavní přínos radiologie pro téma: Zobrazování onemocnění žlučníku a žlučových cest.?",
                        "options": [
                              "Poskytuje detailní morfologické nebo funkční zobrazení patologických změn pro stanovení diagnózy a plánování léčby",
                              "Umožňuje kompletní vyléčení všech onemocnění bez nutnosti farmakoterapie",
                              "Slouží výhradně k archivaci snímků bez vlivu na klinické rozhodování",
                              "Nahrazuje laboratorní vyšetření krve a biochemickou analýzu"
                        ],
                        "correct": 0,
                        "explanation": "Zobrazovací metody v radiologii u tématu 'Zobrazování onemocnění žlučníku a žlučových cest.' přinášejí klíčové informace o přesné lokalizaci, rozsahu a charakteru patologického procesu, což je nezbytné pro správné klinické rozhodování (konzervativní léčba, operabilita, sledování po léčbě)."
                  }
            ]
      },
      {
            "id": "radio-21",
            "title": "Zobrazování onemocnění pankreatu",
            "section": "Zobrazování trávicí trubice a břicha",
            "category": "Břicho",
            "keywords": [
                  "pankreas",
                  "pankreatitida",
                  "karcinom pankreatu",
                  "nekróza",
                  "pseudocysta",
                  "uz",
                  "ct",
                  "mr",
                  "zobrazování",
                  "onemocnění"
            ],
            "content": {
                  "definition": "<ul><li>UZ:</li><li>detekce pankreatu obtížná - krytý meteorismem (tlustým střevem) → aby šel vidět:</li><li>Silně tlačit sondou nebo vyšetřit pacienta ve stoje nebo snažit se sondu směřovat tak,</li><li>aby signál procházel skrze jaterní parenchym.</li></ul>",
                  "etiology": "<ul><li>u mladších hypoechogenní, u starších fibrózní změny + ztukovatění</li><li>→hyperechogenní a často atrofický = lipomatózní slinivka</li><li>přesnější endoskopická ultrasonografie - sonda do duodena a využívá se</li><li>vysokofrekvenční US</li></ul>",
                  "pathogenesis": "<ul><li>Akutní pankreatitida:</li><li>edematózní zvětšení slinivky, neostré okraje, infiltrace okolní</li><li>nekrotizující pankratitida → rozpad tkáně + pseudocysty → RTG reflexní</li><li>meteorismus v místě slinivky, na snímku plic je vyšší postavení bránice + pleurální</li></ul>",
                  "macroscopy": "<ul><li>tekutina</li><li>UZ vyšetření nemožné (jen průkaz konkrementů ve žlučníku) → CT a laboratoř</li><li>CT: zvětšení slinivky (hl. hlavy), nehomogenní denzita, infiltrace pankreatického</li><li>tuku, dilatace pankreatického vývodu</li></ul>",
                  "microscopy": "<ul><li>rozlišení mezi karcinomem pankreatu a zánětem je nemožné</li><li>Chronická pankreatitida: deformace pankreatických vývodů, atrofie, neostré kontury,</li><li>kalcifikace, pseudocysty</li><li>Nádory:</li></ul>",
                  "clinical": "<ul><li>nejsou vzácné, jen pozdě diagnostikované (často již v neoperabilní fázi)</li><li>adenokarcinom 90%, převážně v hlavě pankratu</li><li>neuroendokrinní nádory</li><li>UZ:  hypoechogenní nepravidelné útvary mnohdy obtížně odlišitelné od střev či uzlin.</li><li>Také se někdy může splést s pseudocystou.</li><li>hlavní diagnostickou metodou = CT → nehomogenní masa s hypodenzními okrsky</li><li>ERCP a endoskopická ultrasonografie, MRCP</li><li>Perkutánní aspirace tenkou jehlou řízená CT nebo UZ je nezbytná</li><li>SPECT/CT, PET/CT</li></ul>"
            },
            "quiz": [
                  {
                        "question": "Jaká je primární diagnostická metoda první volby pro vyšetření tématu: Zobrazování onemocnění pankreatu.?",
                        "options": [
                              "Magnetická rezonance (MR), protože má nejvyšší rozlišení",
                              "Závisí na klinickém stavu, ale obvykle začínáme méně zatěžujícími metodami jako UZ nebo konvenční RTG",
                              "Vždy invazivní digitální subtrakční angiografie (DSA)",
                              "Termovizní kamera a scintigrafie skeletu"
                        ],
                        "correct": 1,
                        "explanation": "Při vyšetřování tématu 'Zobrazování onemocnění pankreatu.' volíme diagnostickou metodu na základě klinických indikací, dostupnosti a radiační zátěže. Obecně platí zásada začínat neinvazivními a dostupnými metodami (např. ultrazvukem nebo nativním RTG snímkem) před přistoupením k náročnějším metodám typu CT nebo MR."
                  },
                  {
                        "question": "Které z následujících tvrzení nejlépe vystihuje hlavní přínos radiologie pro téma: Zobrazování onemocnění pankreatu.?",
                        "options": [
                              "Poskytuje detailní morfologické nebo funkční zobrazení patologických změn pro stanovení diagnózy a plánování léčby",
                              "Umožňuje kompletní vyléčení všech onemocnění bez nutnosti farmakoterapie",
                              "Slouží výhradně k archivaci snímků bez vlivu na klinické rozhodování",
                              "Nahrazuje laboratorní vyšetření krve a biochemickou analýzu"
                        ],
                        "correct": 0,
                        "explanation": "Zobrazovací metody v radiologii u tématu 'Zobrazování onemocnění pankreatu.' přinášejí klíčové informace o přesné lokalizaci, rozsahu a charakteru patologického procesu, což je nezbytné pro správné klinické rozhodování (konzervativní léčba, operabilita, sledování po léčbě)."
                  }
            ]
      },
      {
            "id": "radio-22",
            "title": "Metody zobrazování ledvin a odvodných močových cest",
            "section": "Zobrazování urogenitálu a prsu",
            "category": "Urogenitál & Prs",
            "keywords": [
                  "ledviny",
                  "močové cesty",
                  "vylučovací urografie",
                  "ivu",
                  "cystyledvin",
                  "mrcp",
                  "retrográdní pyelografie",
                  "metody",
                  "zobrazování",
                  "ledvin"
            ],
            "content": {
                  "definition": "<ul><li>Prostý snímek: malý význam - konkrement, orientační poloha ledvin, ptotická ledvina</li><li>UZ:</li><li>první metoda</li><li>parenchym izosignílní s parenchymem jater a sleziny</li><li>pyramidy hypoechogenní, kalichopánvičkový systém je hypoechogenní, centrální</li></ul>",
                  "etiology": "<ul><li>hilus hyperechogenní</li><li>cysty = kulovité pravidelné anechogenní útvary, ostře ohraničené</li><li>Intravenózní vylučovací urografie (IVU):</li><li>příprava pacienta → nativní snímek →aplikace jodové KL → za 7 min 1. snímek,</li><li>další 14. a 21. minutu → snímek močového měchýře i po vymočení</li></ul>",
                  "pathogenesis": "<ul><li>CT:</li><li>akutní stavy - trauma břicha, renální kolika</li><li>CT urografie: 1. nativní, 2. po podání KL 3. pyeloureterální</li><li>možnost 3D zobrazení, řezy v úrovni ledviny</li><li>podání i. v. KL nezbytné → kontrola renální arterie i žíly</li></ul>",
                  "macroscopy": "<ul><li>litiáza (dostačující nativní zobrazení)</li><li>MR:</li><li>MR urografie indikováno hlavně u dětí nebo u pacientů s kontraindikací pro podání</li><li>jodové KL</li><li>cílené vyšetření prostaty → staging nádorů</li></ul>",
                  "microscopy": "<ul><li>Instrumentální vyšetřovací metody: hlavně na urologii</li><li>Ascendentní pyelografie: indikováno u obstrukční nefropatie; cystoskopie → cévka</li><li>(Chevassuho = s balónkem - zabrání odtoku KL)  do ledvinné pánvičky → aplikace KL →</li><li>pyeloureterografie</li><li>Descendentní pyelografie → nástřik dutého sytému po zevní drenáži - nefrostomii (pod</li></ul>",
                  "clinical": "<ul><li>sonografickou kontrolou)</li><li>Cystografie: kontrastní náplň močového měchýře</li><li>Mikčí ureterocystografie: průkaz refluxu moči z močového měchýře do ureterů</li><li>Angiografické metody: diferenciální diagnostika expanzivních procesů a posouzení stenózy</li><li>renálních tepen → duplexní sonografie, CT a MR angiografie</li></ul>"
            },
            "quiz": [
                  {
                        "question": "Jaká je primární diagnostická metoda první volby pro vyšetření tématu: Metody zobrazování ledvin a odvodných močových cest.?",
                        "options": [
                              "Magnetická rezonance (MR), protože má nejvyšší rozlišení",
                              "Závisí na klinickém stavu, ale obvykle začínáme méně zatěžujícími metodami jako UZ nebo konvenční RTG",
                              "Vždy invazivní digitální subtrakční angiografie (DSA)",
                              "Termovizní kamera a scintigrafie skeletu"
                        ],
                        "correct": 1,
                        "explanation": "Při vyšetřování tématu 'Metody zobrazování ledvin a odvodných močových cest.' volíme diagnostickou metodu na základě klinických indikací, dostupnosti a radiační zátěže. Obecně platí zásada začínat neinvazivními a dostupnými metodami (např. ultrazvukem nebo nativním RTG snímkem) před přistoupením k náročnějším metodám typu CT nebo MR."
                  },
                  {
                        "question": "Které z následujících tvrzení nejlépe vystihuje hlavní přínos radiologie pro téma: Metody zobrazování ledvin a odvodných močových cest.?",
                        "options": [
                              "Poskytuje detailní morfologické nebo funkční zobrazení patologických změn pro stanovení diagnózy a plánování léčby",
                              "Umožňuje kompletní vyléčení všech onemocnění bez nutnosti farmakoterapie",
                              "Slouží výhradně k archivaci snímků bez vlivu na klinické rozhodování",
                              "Nahrazuje laboratorní vyšetření krve a biochemickou analýzu"
                        ],
                        "correct": 0,
                        "explanation": "Zobrazovací metody v radiologii u tématu 'Metody zobrazování ledvin a odvodných močových cest.' přinášejí klíčové informace o přesné lokalizaci, rozsahu a charakteru patologického procesu, což je nezbytné pro správné klinické rozhodování (konzervativní léčba, operabilita, sledování po léčbě)."
                  }
            ]
      },
      {
            "id": "radio-23",
            "title": "Zobrazování onemocnění ledvin",
            "section": "Zobrazování urogenitálu a prsu",
            "category": "Urogenitál & Prs",
            "keywords": [
                  "nádory ledvin",
                  "grawitz",
                  "cysty ledvin",
                  "polycystická nemoc",
                  "hydronefróza",
                  "trombóza r. renalis",
                  "zobrazování",
                  "onemocnění",
                  "ledvin"
            ],
            "content": {
                  "definition": "<ul><li>Základní patologické obrazy:</li><li>a)  velikost ledviny: zmenšení x zvětšení</li><li>b)  Dutý systém: dilatace (hydronefróza → dilatace kalichu a pánvičky vedoucí k atrofii</li><li>parenchymu; ureterohydronefróza - dilatace močovodů a dutého systému), kalcifikace</li><li>(nefrolithiaza, chronické záněty, TBC, hyperparathyroideus)</li><li>Vrozené vady: aplazie nebo hypoplazie, dromedárová ledvina (hrbolovitý tvar laterální</li><li>kontury), ren migrans, variety dutého systému (dvě pánvičky, dva uretery), anomálie</li></ul>",
                  "etiology": "<ul><li>vezikoureterálního přechodu, vzorezené cysty (polycystické ledviny)</li><li>Urolithiáza:</li><li>až 90% konkrementů je kontrastních, velikost kolísá</li><li>drobné urolity do ureteru → ledvinná kolika; velké mohou vyplnit celou pánvičku</li><li>na RTG snímku odlišit konkrement od flebolitů nebo kalcifikovaných uzlin</li><li>UZ: hyperechogenní útvar s akustickým stínem a dilatací dutého systému</li><li>MDCT: nativní - velikost a uložení šutrů, rozšíření dutého systému</li></ul>",
                  "pathogenesis": "<ul><li>Obstrukční uropatie:</li><li>rozšíření dutého systému při obstrukcích močovodů a kalichopánvičkového systému</li><li>vrozená - pyelouretrální junkce; získané - ureterokéla</li><li>ureterohydronefróza → dilatace celého kalichopánvičkového systému</li><li>Traumatologie:</li><li>lacerace, kontuze, hematom → hematurie</li><li>poranění cév →větší krvácení a hematomy subkapsulární a perirenální</li></ul>",
                  "macroscopy": "<ul><li>UZ: kontuze = hyperechogenní zóna; hematom = hypoechogenní</li><li>Při podezření na patologii → CT i s kontrastem</li><li>Poraněná ledvina zvětšená, kontuzní ložisko hypodenzní, čerstvá krev hyperdenzní</li><li>katetrizační angiografie je spojena s intervenčním výkonem → potvrdí intramurální</li><li>krvácení, trombózu a avulzi</li><li>Nádory:</li><li>cysty: UZ = anechogenní, CT = hypodenzní</li></ul>",
                  "microscopy": "<ul><li>Adenokarcinom (Grawitzův tumor), nefroblastom → většinou náhodný nález při</li><li>rutinní sonografii břicha + hematurie</li><li>na UZ nespecifické, na urografii patrné roztlačení a komprese kalichů, CT vyšetření =</li><li>hypodenzní, kalcifikace svědčí pro malignitu; MR = heterogenní</li><li>Benigní: angiomyelolipom, hemangiom</li><li>Pseudotumory: imitují maligní nádory expanzí na ZM</li><li>Zánětlivá onemocnění:</li></ul>",
                  "clinical": "<ul><li>UZ - vyloučení obstrukční nefropatie</li><li>absces ledviny - UZ = hypoechogenní, neostře ohraničený, CT = hypodenzní útvar s</li><li>centrální fluidní strukturou, po KL se nasytí lem abscesu</li><li>Chronické záněty: zmenšování a deformace ledvin</li><li>Cévní postižení ledvin:</li><li>Renovaskulární hypertenze: stenóza a. renalis nebo difúzní ateroskleróza → duplexní</li><li>sonografie, CT nebo MR angiografie; katetrizační angiografie spojená s PTA</li><li>trombóza renální žíly  → ledvina zvětšená, hladce ohraničená s kompresí dutého</li><li>systému, nález hemoragických ložisek a trombu v žíle nebo kolaterálech</li></ul>"
            },
            "quiz": [
                  {
                        "question": "Jaká je primární diagnostická metoda první volby pro vyšetření tématu: Zobrazování onemocnění ledvin.?",
                        "options": [
                              "Magnetická rezonance (MR), protože má nejvyšší rozlišení",
                              "Závisí na klinickém stavu, ale obvykle začínáme méně zatěžujícími metodami jako UZ nebo konvenční RTG",
                              "Vždy invazivní digitální subtrakční angiografie (DSA)",
                              "Termovizní kamera a scintigrafie skeletu"
                        ],
                        "correct": 1,
                        "explanation": "Při vyšetřování tématu 'Zobrazování onemocnění ledvin.' volíme diagnostickou metodu na základě klinických indikací, dostupnosti a radiační zátěže. Obecně platí zásada začínat neinvazivními a dostupnými metodami (např. ultrazvukem nebo nativním RTG snímkem) před přistoupením k náročnějším metodám typu CT nebo MR."
                  },
                  {
                        "question": "Které z následujících tvrzení nejlépe vystihuje hlavní přínos radiologie pro téma: Zobrazování onemocnění ledvin.?",
                        "options": [
                              "Poskytuje detailní morfologické nebo funkční zobrazení patologických změn pro stanovení diagnózy a plánování léčby",
                              "Umožňuje kompletní vyléčení všech onemocnění bez nutnosti farmakoterapie",
                              "Slouží výhradně k archivaci snímků bez vlivu na klinické rozhodování",
                              "Nahrazuje laboratorní vyšetření krve a biochemickou analýzu"
                        ],
                        "correct": 0,
                        "explanation": "Zobrazovací metody v radiologii u tématu 'Zobrazování onemocnění ledvin.' přinášejí klíčové informace o přesné lokalizaci, rozsahu a charakteru patologického procesu, což je nezbytné pro správné klinické rozhodování (konzervativní léčba, operabilita, sledování po léčbě)."
                  }
            ]
      },
      {
            "id": "radio-24",
            "title": "Zobrazování onemocnění odvodných močových cest",
            "section": "Zobrazování urogenitálu a prsu",
            "category": "Urogenitál & Prs",
            "keywords": [
                  "uretra",
                  "močový měchýř",
                  "litiáza",
                  "urolitiáza",
                  "nádory měchýře",
                  "cystografie",
                  "uretrografie",
                  "zobrazování",
                  "onemocnění",
                  "odvodných"
            ],
            "content": {
                  "definition": "<ul><li>Ascendentní pyelografie: indikováno u obstrukční nefropatie; cystoskopie → cévka</li><li>(Chevassuho = s balónkem - zabrání odtoku KL)  do ledvinné pánvičky → aplikace KL →</li></ul>",
                  "etiology": "<ul><li>pyeloureterografie</li><li>Descendentní pyelografie → nástřik dutého sytému po zevní drenáži - nefrostomii (pod</li></ul>",
                  "pathogenesis": "<ul><li>sonografickou kontrolou</li><li>Cystografie: kontrastní náplň močového měchýře</li></ul>",
                  "macroscopy": "<ul><li>Mikčí ureterocystografie: průkaz refluxu moči z močového měchýře do ureterů</li><li>Expanze v močovém měchýři:</li></ul>",
                  "microscopy": "<ul><li>Benigní papilomy: různý tvar (stopkatý, nasedající na stěnu, maligně se zvrhávají)</li><li>Karcinom: infiltruje stěnu měchýře + deformuje jeho tvar, kontrastně jako velký</li></ul>",
                  "clinical": "<ul><li>defekt v náplni, často kalcifikované</li><li>nutné počítat s benigními migrujícími kalcifikovanými kameny</li></ul>"
            },
            "quiz": [
                  {
                        "question": "Jaká je primární diagnostická metoda první volby pro vyšetření tématu: Zobrazování onemocnění odvodných močových cest.?",
                        "options": [
                              "Magnetická rezonance (MR), protože má nejvyšší rozlišení",
                              "Závisí na klinickém stavu, ale obvykle začínáme méně zatěžujícími metodami jako UZ nebo konvenční RTG",
                              "Vždy invazivní digitální subtrakční angiografie (DSA)",
                              "Termovizní kamera a scintigrafie skeletu"
                        ],
                        "correct": 1,
                        "explanation": "Při vyšetřování tématu 'Zobrazování onemocnění odvodných močových cest.' volíme diagnostickou metodu na základě klinických indikací, dostupnosti a radiační zátěže. Obecně platí zásada začínat neinvazivními a dostupnými metodami (např. ultrazvukem nebo nativním RTG snímkem) před přistoupením k náročnějším metodám typu CT nebo MR."
                  },
                  {
                        "question": "Které z následujících tvrzení nejlépe vystihuje hlavní přínos radiologie pro téma: Zobrazování onemocnění odvodných močových cest.?",
                        "options": [
                              "Poskytuje detailní morfologické nebo funkční zobrazení patologických změn pro stanovení diagnózy a plánování léčby",
                              "Umožňuje kompletní vyléčení všech onemocnění bez nutnosti farmakoterapie",
                              "Slouží výhradně k archivaci snímků bez vlivu na klinické rozhodování",
                              "Nahrazuje laboratorní vyšetření krve a biochemickou analýzu"
                        ],
                        "correct": 0,
                        "explanation": "Zobrazovací metody v radiologii u tématu 'Zobrazování onemocnění odvodných močových cest.' přinášejí klíčové informace o přesné lokalizaci, rozsahu a charakteru patologického procesu, což je nezbytné pro správné klinické rozhodování (konzervativní léčba, operabilita, sledování po léčbě)."
                  }
            ]
      },
      {
            "id": "radio-25",
            "title": "Zobrazování onemocnění mužských pohlavních orgánů",
            "section": "Zobrazování urogenitálu a prsu",
            "category": "Urogenitál & Prs",
            "keywords": [
                  "varle",
                  "kryptorchismus",
                  "seminom",
                  "hydrokéla",
                  "prostata",
                  "hyperplazie prostaty",
                  "ca prostaty",
                  "uz",
                  "mr",
                  "zobrazování"
            ],
            "content": {
                  "definition": "<ul><li>Prostata:</li><li>rozhodující je laboratorní vyšetření, ultrazvuková diagnostika, biopsie</li><li>ZM přínos dif. diag. expanze, hodnocení fáze onemocnění, infiltrace do okolí, výběr</li><li>terapeutické metody</li></ul>",
                  "etiology": "<ul><li>záněty → tvorba píštělí s uretrou nebo tvorba jizev</li><li>UZ = Nejlépe je zobrazitelná při dostatečné náplni močového měchýře</li><li>transrektální UZ - ložiska zánětu jako hyperechogenní, na CT hyperdenzní</li><li>Benigní hyperplazie prostaty: na cystogramu = defekt ve spodině močového</li></ul>",
                  "pathogenesis": "<ul><li>měchýře, UZ = homogenní zvětšená tkáň</li><li>Adenokarcinom: na UZ nález variabilní, asymetricky zvětšená prostata, ložisko</li><li>hypoechogenní, může prorůstat do močového měchýře; průkaz cév při duplexní</li><li>sonografii potvrzuje malignitu → MR (lokální staging, posouzení infiltrace)</li></ul>",
                  "macroscopy": "<ul><li>Varle a nadvarle:</li><li>primárně UZ</li><li>Varle je homogenní, okolní nehomogenní plexus cév</li><li>Nadvarle a funiculus lze vidět na MR</li></ul>",
                  "microscopy": "<ul><li>semenné váčky jsou zřetelné multicystické struktury na UZ, CT i MR (hyperintenzní</li><li>oproti obsahu močového měchýře - mají více bílkovin)</li><li>Trauma: hematokéla, ruptura varlete (při sportu)</li><li>Torze varlete: zvětšení varlete v důsledku zaškrcení přívodných cév, hypoechogenní</li></ul>",
                  "clinical": "<ul><li>struktura, chybí detekce krevního toku, zvětšený a nerovný průběh funiculus</li><li>spermaticus</li><li>Zánět: zvětšení, hypoechogenní struktura, zmnožení cév</li><li>Kryptorchismus: nesestoupení varlat - oválný útvar s fluidní strukturou - MR</li><li>Hydrokéla: hromadění tekutiny mezi obaly varlete = anechogenní obsah, na MR jako</li><li>fluidní struktura</li><li>Seminom: UZ - uzlovitá hypoechogenní struktura, CT - hyperdenzní, MR -</li><li>nejpřesnější</li><li>Teratom - heterogenní echogenitu na UZ</li></ul>"
            },
            "quiz": [
                  {
                        "question": "Jaká je primární diagnostická metoda první volby pro vyšetření tématu: Zobrazování onemocnění mužských pohlavních orgánů.?",
                        "options": [
                              "Magnetická rezonance (MR), protože má nejvyšší rozlišení",
                              "Závisí na klinickém stavu, ale obvykle začínáme méně zatěžujícími metodami jako UZ nebo konvenční RTG",
                              "Vždy invazivní digitální subtrakční angiografie (DSA)",
                              "Termovizní kamera a scintigrafie skeletu"
                        ],
                        "correct": 1,
                        "explanation": "Při vyšetřování tématu 'Zobrazování onemocnění mužských pohlavních orgánů.' volíme diagnostickou metodu na základě klinických indikací, dostupnosti a radiační zátěže. Obecně platí zásada začínat neinvazivními a dostupnými metodami (např. ultrazvukem nebo nativním RTG snímkem) před přistoupením k náročnějším metodám typu CT nebo MR."
                  },
                  {
                        "question": "Které z následujících tvrzení nejlépe vystihuje hlavní přínos radiologie pro téma: Zobrazování onemocnění mužských pohlavních orgánů.?",
                        "options": [
                              "Poskytuje detailní morfologické nebo funkční zobrazení patologických změn pro stanovení diagnózy a plánování léčby",
                              "Umožňuje kompletní vyléčení všech onemocnění bez nutnosti farmakoterapie",
                              "Slouží výhradně k archivaci snímků bez vlivu na klinické rozhodování",
                              "Nahrazuje laboratorní vyšetření krve a biochemickou analýzu"
                        ],
                        "correct": 0,
                        "explanation": "Zobrazovací metody v radiologii u tématu 'Zobrazování onemocnění mužských pohlavních orgánů.' přinášejí klíčové informace o přesné lokalizaci, rozsahu a charakteru patologického procesu, což je nezbytné pro správné klinické rozhodování (konzervativní léčba, operabilita, sledování po léčbě)."
                  }
            ]
      },
      {
            "id": "radio-26",
            "title": "Zobrazování onemocnění ženských pohlavních orgánů a zobrazování v těhotenství.",
            "section": "Zobrazování urogenitálu a prsu",
            "category": "Urogenitál & Prs",
            "keywords": [
                  "děloha",
                  "ovaria",
                  "těhotenství",
                  "plod",
                  "myom",
                  "cervix",
                  "screening",
                  "uz",
                  "mr",
                  "zobrazování"
            ],
            "content": {
                  "definition": "<ul><li><strong>Ultrazvukové vyšetření (UZ):</strong> Hlavní neinvazivní metoda. Transabdominální (přes naplněný močový měchýř) nebo transvaginální (vysokofrekvenční sonda close-up, detailnější rozlišení vrstev - endometrium, junkční zóna, myometrium). Vhodná i pro těhotné ženy (bez ionizujícího záření). Transrektální UZ se využívá k lokálnímu stagingu nádorů děložního krčku.</li><li><strong>Normální UZ obraz:</strong> Děloha má echogenitu srovnatelnou s okolními kosterními svaly; uprostřed se nachází vysoce echogenní endometrium (v závislosti na fázi cyklu). Vaječníky jsou typicky hypoechogenní s přítomností drobných anechogenních folikulárních cyst.</li></ul>",
                  "etiology": "",
                  "pathogenesis": "",
                  "macroscopy": "",
                  "microscopy": "",
                  "clinical": "<ul><li><strong>CT a MR zobrazení:</strong> Na CT má děloha svalovou denzitu a endometrium/kavum se zobrazuje výjimečně. <strong>Magnetická rezonance (MR)</strong> je nejpřesnější metodou pro staging karcinomů endometria (T2 hypointenzní ložisko, sytí se po kontrastu méně než myometrium) a cervixu (heterogenní ložisko, na T1 hypo-, na T2 hyperintenzní, sytí se postkontrastně). Dokáže rozlišit zóny stěny a infiltraci okolí (pánevní stěny, močový měchýř, rektum), vyšetřuje se ideálně v sagitální rovině.</li><li><strong>Hysterosalpingografie (HSG):</strong> Skiaskopická metoda s aplikací jodové kontrastní látky přes Schultzeho násadec do děložního hrdla k ověření průchodnosti vejcovodů (KL zatéká do břišní dutiny) u pacientek se sterilitou.</li><li><strong>Porodnictví a prenatální diagnostika:</strong> Časné těhotenství prokazujeme transvaginálním UZ od 5.-6. týdne, v 7. týdnu prokazujeme pulzující srdce plodu. Dopplerovský UZ měří průtoky v pupečníkových cévách (snížení průtoku varuje před retardací růstu plodu). Prenatální screening odhaluje vrozené vady; osifikační jádra obratlů a páteřní kanál hodnotíme ve 20. týdnu UZ, mozek ve 24. týdnu. <strong>MR plodu</strong> se využívá jako upřesňující metoda při nejasném nálezu na UZ, ale neprovádí se v 1. trimestru.</li><li><strong>Gynekologické patologie:</strong> <strong>Endometrióza</strong> se na UZ jeví jako cystická/hypoechogenní masa adnex, MR potvrdí přítomnost rozpadových produktů hemoglobinu (hematomy). <strong>Myomy</strong> jsou na UZ hypoechogenní s možnými kalcifikacemi, na CT izodenzní se svalem, na MR ostře ohraničené homogenní T2 hypointenzní útvary. <strong>Karcinom ovaria</strong> se prezentuje jako solidně-cystický heterogenní tumor s přepážkami (septy) a často ascitem; doprovází jej peritoneální metastázy, popř. Krukenbergův nádor (metastáza z GIT).</li></ul>"
            },
            "quiz": [
                  {
                        "question": "Jaká je primární diagnostická metoda první volby pro vyšetření tématu: Zobrazování onemocnění ženských pohlavních orgánů a zobrazování v těhotenství.?",
                        "options": [
                              "Magnetická rezonance (MR), protože má nejvyšší rozlišení",
                              "Závisí na klinickém stavu, ale obvykle začínáme méně zatěžujícími metodami jako UZ nebo konvenční RTG",
                              "Vždy invazivní digitální subtrakční angiografie (DSA)",
                              "Termovizní kamera a scintigrafie skeletu"
                        ],
                        "correct": 1,
                        "explanation": "Při vyšetřování tématu 'Zobrazování onemocnění ženských pohlavních orgánů a zobrazování v těhotenství.' volíme diagnostickou metodu na základě klinických indikací, dostupnosti a radiační zátěže. Obecně platí zásada začínat neinvazivními a dostupnými metodami (např. ultrazvukem nebo nativním RTG snímkem) před přistoupením k náročnějším metodám typu CT nebo MR."
                  },
                  {
                        "question": "Které z následujících tvrzení nejlépe vystihuje hlavní přínos radiologie pro téma: Zobrazování onemocnění ženských pohlavních orgánů a zobrazování v těhotenství.?",
                        "options": [
                              "Poskytuje detailní morfologické nebo funkční zobrazení patologických změn pro stanovení diagnózy a plánování léčby",
                              "Umožňuje kompletní vyléčení všech onemocnění bez nutnosti farmakoterapie",
                              "Slouží výhradně k archivaci snímků bez vlivu na klinické rozhodování",
                              "Nahrazuje laboratorní vyšetření krve a biochemickou analýzu"
                        ],
                        "correct": 0,
                        "explanation": "Zobrazovací metody v radiologii u tématu 'Zobrazování onemocnění ženských pohlavních orgánů a zobrazování v těhotenství.' přinášejí klíčové informace o přesné lokalizaci, rozsahu a charakteru patologického procesu, což je nezbytné pro správné klinické rozhodování (konzervativní léčba, operabilita, sledování po léčbě)."
                  }
            ]
      },
      {
            "id": "radio-27",
            "title": "Zobrazování onemocnění prsu",
            "section": "Zobrazování urogenitálu a prsu",
            "category": "Urogenitál & Prs",
            "keywords": [
                  "mamografie",
                  "mamograf",
                  "karcinom prsu",
                  "cysty",
                  "fibroadenom",
                  "screening",
                  "uz prsu",
                  "zobrazování",
                  "onemocnění"
            ],
            "content": {
                  "definition": "<ul><li>Benigní onemocnění prsu:</li><li>Záněty: vznik v návaznosti na kojení, akutní x chronické, většinou bakteriální, dobře reagují</li><li>na ATB léčbu</li><li>Cysty: nejčastějším benigním nádorem prsu, vznik v důsledku hormonálních vlivů,</li><li>charakteristické tekutým obsahem, pružnou stěnou, tvar oválný nebo okrouhlý</li><li>Fibroadenom: nejčastější benigní nádor u mladých žen</li><li>Intraduktální papilom: krvavá sekrece z bradavnky → duktografie</li><li>Maligní onemocnění prsu:</li><li>1. místo ve výskytu malignit u žen ve vyspělých zemích</li><li>včasná diagnostika - záchyt, když tumor ještě není hmatný → snížení mortality</li><li>ca in situ - shluk maligních mikrokalcifikací</li><li>duktální x lobulární; invazivní x neinvazivní (DCIS, LCIS)</li></ul>",
                  "etiology": "<ul><li>screening - mamograf u žen starších 45 let ve dvouletém intervalu</li><li>Mamografie:</li><li>základní radiodiagnostická metoda v zobrazení prsů</li><li>u žen nad 40 let, do 40 používáme UZ (+ mamografii lze doplnit v nutných případech)</li><li>indikace: hmatná léze, sekrece z bradavky, ekzém bradavky či dvorce, zánětlivé</li><li>změny, opakující se bolesti prsou</li><li>analogová mamografie, digitální mamografie</li><li>Princip: receptorem obrazu je u analogové speciální film uložený v kazetě +</li><li>zesilovací folie (snižuje dávku záření)</li><li>Digitální mamografie: delší čas vyšetření, někdy horší ostrost, plochý digitální</li><li>detektor</li><li>Mamografický přístroj: speciální mamografická rentgenka, generátor, kompresní</li></ul>",
                  "pathogenesis": "<ul><li>zařízení, protirozptylová mřížka, systém řízení expozic</li><li>rentgenka vydává charakteristické měkké záření (liší se materiálem anody, výstupním</li><li>okénkem a přídatnou filtrací)</li><li>Kompresní zařízení (7-15kg) - kontrolovatelná a konstantní tloušťka prsu + brání</li><li>pohybu → zlepšení kvality</li><li>Provedení: oba prsy v projekci kraniokaudální a mediolaterální ve 45 stupních</li><li>Kraniokaudální - pacientka čelem k mamografickému přístroji - prs položen na</li><li>úložnou desku a je komprimován shora</li><li>Mediolaterální šikmá projekce: umožňuje zachytit celý prs - rameno</li><li>mamografického přístroje do 45 stupňů</li><li>Speciální projekce: boční, šikmé mediolaterální ve 30-60°, s bodovou kompresí</li><li>Klasifikace prsů dle Tabára:</li></ul>",
                  "macroscopy": "<ul><li>Tabár I – fibroglandulární struktura, středně denzní typ(normální poměr žláza</li><li>a tuk</li><li>Tabár II – involuční typ žlázy - tuková prsa = nejpřehlednější</li><li>Tabár III – reziduální fibroglandulární struktura, nízce denzní typ (převážně</li><li>tuková s centrální reziduí tkání)</li><li>Tabár IV – glandulární struktura, denzní typ - málo tuku → dodělání UZ</li><li>Tabár V – velmi denzní</li><li>typ - setřelá struktura →</li><li>dodělání UZ</li><li>UZ:</li><li>doplňující u denzního typu prsu</li><li>(málo přehledného) nebo 1. volba u žen mladších 40 let, těhotných a kojících</li></ul>",
                  "microscopy": "<ul><li>lineární sondou (10-13MHz)</li><li>navádění při intervenčních výkonech</li><li>Duktografie:</li><li>zobrazení vývodů mléčné dráhy jodovou kontrastní látkou</li><li>indikace: krvavá sekrece z jednoho vývodu v bradavce</li><li>sondáž kanylou → aplikace KL → mamogramy ve dvou projekcích</li><li>intraduktální léze = defekt kontrastní náplně mlékovodu</li><li>MR:</li><li>I: staging karcinomu prsu (vyloučení multifokality, multicentricity), rozlišení jizvy a</li><li>recidivy karcinomu</li><li>screeningová metoda pro sledování žen s vysokým rizikem vzniku ca prsu</li><li>monitorování časné odpovědi na neoadjuvantní chemoterapii</li></ul>",
                  "clinical": "<ul><li>dynamické kontrastní vyšetření (aplikace paramagnetické KL na bázi gadolinia),</li><li>nativní jen při posouzení celistvosti silikonových implantátů</li><li>Invazivní metody:</li><li>biopsie prsu za účelem získání histologie</li><li>punkce prsu tenkou jehlou pro aspiraci cyst a tekutinových kolekcí prsu (fine needle</li><li>aspiration)</li><li>zavádění klipu pro označení lézí před chemoterapii, označení nehmatných lézí před</li><li>operací</li><li>vakuová biopsie: u mikrokalcifikací mamy</li><li>Mamografický screening:</li><li>cílené vyšetřování asymptomatických osob s nízkou či vysokou pravděpodobností</li><li>onemocnění hledaným nádorem</li><li>pozitivní screening → dovyšetření</li><li>cílem je objevit onemocnění dříve, než se projeví její příznaky</li><li>u žen starších 45 let ve dvouletém intervalu</li><li>vede k nárůstu incidence, ale poklesu úmrtnosti</li></ul>"
            },
            "quiz": [
                  {
                        "question": "Jaká je primární diagnostická metoda první volby pro vyšetření tématu: Zobrazování onemocnění prsu.?",
                        "options": [
                              "Magnetická rezonance (MR), protože má nejvyšší rozlišení",
                              "Závisí na klinickém stavu, ale obvykle začínáme méně zatěžujícími metodami jako UZ nebo konvenční RTG",
                              "Vždy invazivní digitální subtrakční angiografie (DSA)",
                              "Termovizní kamera a scintigrafie skeletu"
                        ],
                        "correct": 1,
                        "explanation": "Při vyšetřování tématu 'Zobrazování onemocnění prsu.' volíme diagnostickou metodu na základě klinických indikací, dostupnosti a radiační zátěže. Obecně platí zásada začínat neinvazivními a dostupnými metodami (např. ultrazvukem nebo nativním RTG snímkem) před přistoupením k náročnějším metodám typu CT nebo MR."
                  },
                  {
                        "question": "Které z následujících tvrzení nejlépe vystihuje hlavní přínos radiologie pro téma: Zobrazování onemocnění prsu.?",
                        "options": [
                              "Poskytuje detailní morfologické nebo funkční zobrazení patologických změn pro stanovení diagnózy a plánování léčby",
                              "Umožňuje kompletní vyléčení všech onemocnění bez nutnosti farmakoterapie",
                              "Slouží výhradně k archivaci snímků bez vlivu na klinické rozhodování",
                              "Nahrazuje laboratorní vyšetření krve a biochemickou analýzu"
                        ],
                        "correct": 0,
                        "explanation": "Zobrazovací metody v radiologii u tématu 'Zobrazování onemocnění prsu.' přinášejí klíčové informace o přesné lokalizaci, rozsahu a charakteru patologického procesu, což je nezbytné pro správné klinické rozhodování (konzervativní léčba, operabilita, sledování po léčbě)."
                  }
            ]
      },
      {
            "id": "radio-28",
            "title": "Obecné projevy kostních onemocnění v RTG obraze",
            "section": "Zobrazování pohybového aparátu",
            "category": "Kostra",
            "keywords": [
                  "kost",
                  "osteoporóza",
                  "osteomalacie",
                  "osteolýza",
                  "osteoskleróza",
                  "periostální reakce",
                  "obecné",
                  "projevy",
                  "kostních",
                  "onemocnění"
            ],
            "content": {
                  "definition": "<ul><li>na rtg snímku vidíme zevní část kompakty - kortikalis - jako bílý, ostře ohraničený</li><li>stín, uvnitř je tmavá dřeňová dutina; spongiozy jsou nejlépe vidět v epifýzách, periost</li><li>až při patologickém procesu</li><li>RTG vyšetření je první v diagnostickém algoritmu</li><li>patologické obrazy mohou být difúzní (celý skelet - osteoporóza) nebo ložiskové</li><li>(zlomeniny, nádory, záněty → solitární nebo mnohočetné)</li></ul>",
                  "etiology": "<ul><li>základní patologické změny:</li><li>a)  změny velikosti a  tvaru kosti: vývojové změny (dysplazie, hyperplazie),</li><li>valgózní (X) nebo varózní (O) změny; přídatné sezamské kůstky, spina bifida,</li><li>anomálie narušující funkce, dystrofie (z malnutrice)</li><li>b)  změny hutnosti tkáně: Úbytek (osteoporóza - tmavší stín, trámce nezřetelné,</li><li>struktura neostrá; osteolýza - lokální úbytek, buď patologickým procesem</li></ul>",
                  "pathogenesis": "<ul><li>nebo usurací); Osteoskleróza (zvýšená novotvorba - na snímku bílá formace -</li><li>reparativní změny po traumatech, zánětech, degenerativních změnách-</li><li>osteofyty), Periostální novotvorba (ukládání kalcia do nekrotické tkáně</li><li>periostu)</li><li>Hodnocení rtg snímku = postavení a tvar kostí, kortikalis, šířka a tvar dřeňové</li><li>dutiny, okolní měkké tkáně, periostální reakci</li></ul>",
                  "macroscopy": "<ul><li>Traumatologie:</li><li>u lehčích zlomenin stačí RTG,</li><li>komplikovanější už CT i MR (např. páteř)</li><li>otevřená x zavřená; kompletní x inkompletní</li><li>Tříštivá, kompresivní, stresová fraktura,</li><li>impresivní (jeden fragment pod druhý)</li></ul>",
                  "microscopy": "<ul><li>patologická fraktura - v místě nádoru nebo</li><li>chronického zánětu</li><li>Hodnotíme: tvar a velikost, snížení výšky,</li><li>změnu hustoty tkáně, posuny fragmentů a</li><li>jejich dislokace, měkká tkáň okolo, otok,</li><li>drobné fragmenty</li></ul>",
                  "clinical": "<ul><li>Dislokované zlomeniny: posun do stran (ad</li><li>latus - vždy distální proti proximálnímu),</li><li>posun do délky (ad longitudinem) nebo</li><li>zkrácení nebo prodloužení, osová odchylka (ad axim)</li><li>Luxace (vykloubení): kompletní ztráta kongruence kloubních ploch</li><li>Subluxace - jen částečné vykloubení</li><li>Hojení zlomenin: endosteální fibrózní svalek → sytý kostěnný svalek</li><li>(mineralizovaný); pseudoartrózy (pakloub - při nedokonalém zahojeni</li></ul>"
            },
            "quiz": [
                  {
                        "question": "Jaká je primární diagnostická metoda první volby pro vyšetření tématu: Obecné projevy kostních onemocnění v RTG obraze.?",
                        "options": [
                              "Magnetická rezonance (MR), protože má nejvyšší rozlišení",
                              "Závisí na klinickém stavu, ale obvykle začínáme méně zatěžujícími metodami jako UZ nebo konvenční RTG",
                              "Vždy invazivní digitální subtrakční angiografie (DSA)",
                              "Termovizní kamera a scintigrafie skeletu"
                        ],
                        "correct": 1,
                        "explanation": "Při vyšetřování tématu 'Obecné projevy kostních onemocnění v RTG obraze.' volíme diagnostickou metodu na základě klinických indikací, dostupnosti a radiační zátěže. Obecně platí zásada začínat neinvazivními a dostupnými metodami (např. ultrazvukem nebo nativním RTG snímkem) před přistoupením k náročnějším metodám typu CT nebo MR."
                  },
                  {
                        "question": "Které z následujících tvrzení nejlépe vystihuje hlavní přínos radiologie pro téma: Obecné projevy kostních onemocnění v RTG obraze.?",
                        "options": [
                              "Poskytuje detailní morfologické nebo funkční zobrazení patologických změn pro stanovení diagnózy a plánování léčby",
                              "Umožňuje kompletní vyléčení všech onemocnění bez nutnosti farmakoterapie",
                              "Slouží výhradně k archivaci snímků bez vlivu na klinické rozhodování",
                              "Nahrazuje laboratorní vyšetření krve a biochemickou analýzu"
                        ],
                        "correct": 0,
                        "explanation": "Zobrazovací metody v radiologii u tématu 'Obecné projevy kostních onemocnění v RTG obraze.' přinášejí klíčové informace o přesné lokalizaci, rozsahu a charakteru patologického procesu, což je nezbytné pro správné klinické rozhodování (konzervativní léčba, operabilita, sledování po léčbě)."
                  }
            ]
      },
      {
            "id": "radio-29",
            "title": "Zobrazování kostních zánětů",
            "section": "Zobrazování pohybového aparátu",
            "category": "Kostra",
            "keywords": [
                  "osteomyelitida",
                  "kostní zánět",
                  "tbc kosti",
                  "brodieho absces",
                  "sekvestr",
                  "rtg",
                  "scintigrafie",
                  "zobrazování",
                  "kostních",
                  "zánětů"
            ],
            "content": {
                  "definition": "<ul><li>Bakteriální (osteomyelitis)</li><li>šíření hematogenní cestou nebo přestupem zánětu z okolí</li><li>1. fáze - na snímku jen zduření měkkých tkání + necharakteristické projasnění v kosti</li><li>(přechází v osteolýzu) + periostální reakce (odchlípení periostu od kortikalis) 2. fáze -</li><li>změny jsou prokazatelné až po 10-14 dnech</li><li>rozhodující je scintigrafické a MR vyšetření</li></ul>",
                  "etiology": "<ul><li>neléčený akutní zánět → chronický</li><li>MR obraz chronické osteomyelitidy → kombinace osteolytických a</li><li>osteosklerotických změn + tvorba sekvestru (odumřelý, odchlípnutý periost) zúžení</li><li>dřeňové dutiny</li><li>Brodieho absces - osteolytické ložisko se sklerotickým lemem</li><li>Panaritium = zánět článků prstů, který přešel z okolních měkkých tkání → exogenní</li></ul>",
                  "pathogenesis": "<ul><li>myelitida</li><li>záněty kloubů: 1. fáze = snímek negativní (zánět začíná na synovii a okolních</li><li>měkkých tkáních →pak až chrupavky); 2 fáze exsudace = rozšíření kloubní štěrbina</li><li>(sonografický nebo MR průkaz tekutiny v kloubu) → subchondriální geody</li><li>(intrasponginózní cysty) → zúžená kloubní štěrbina + deformace kloubních ploch</li><li>TBC kostí - na periferním skeletu (kyčle a kolena) + páteř</li></ul>",
                  "macroscopy": "<ul><li>Virová</li><li>reaktivní změny obvykle zahrnují periferní klouby + páteř = spondylartritidy</li><li>autoimunitní reakce na infekce ve vzdáleném tělesném orgánu</li><li>Revmatoidní artritida:</li><li>nejčastější onemocnění periferního skeletu - metakarpofalangeání spoje +</li><li>proximální falangy</li></ul>",
                  "microscopy": "<ul><li>1. fáze - necharakteristická epifyzární poróza + rozšíření periartikulárních</li><li>měkkých částí</li><li>Další fáze - kloubní eroze, geody, subluxace, zúžení kloubních štěrbin, ulnární</li><li>deviace prstů</li><li>podobný obraz u degenerativních osteoartróz - tam ale na distálních článcích</li><li>Ankylozující spondylartritida (M. Bechtěrev):</li></ul>",
                  "clinical": "<ul><li>AI onemocnění; séronegativní spondyloartróza (negativní revma faktory)</li><li>první změny symetricky na sakroileálním skloubení</li><li>neostrost kloubních plošek, ileální skleróza, eroze na ploskách, vazy zkostnatí</li><li>a pevně ztuhnou = páteř jako celek</li><li>Sarkoileitida: příznak u M. Reiter, psoriatické nebo enteropatické spondyloartrozy</li><li>(ulcerozní kolitida nebo M. Crohn)</li><li>Artritis uratica: osteolytické defekty v hlavicích metatarzů</li></ul>"
            },
            "quiz": [
                  {
                        "question": "Jaká je primární diagnostická metoda první volby pro vyšetření tématu: Zobrazování kostních zánětů.?",
                        "options": [
                              "Magnetická rezonance (MR), protože má nejvyšší rozlišení",
                              "Závisí na klinickém stavu, ale obvykle začínáme méně zatěžujícími metodami jako UZ nebo konvenční RTG",
                              "Vždy invazivní digitální subtrakční angiografie (DSA)",
                              "Termovizní kamera a scintigrafie skeletu"
                        ],
                        "correct": 1,
                        "explanation": "Při vyšetřování tématu 'Zobrazování kostních zánětů.' volíme diagnostickou metodu na základě klinických indikací, dostupnosti a radiační zátěže. Obecně platí zásada začínat neinvazivními a dostupnými metodami (např. ultrazvukem nebo nativním RTG snímkem) před přistoupením k náročnějším metodám typu CT nebo MR."
                  },
                  {
                        "question": "Které z následujících tvrzení nejlépe vystihuje hlavní přínos radiologie pro téma: Zobrazování kostních zánětů.?",
                        "options": [
                              "Poskytuje detailní morfologické nebo funkční zobrazení patologických změn pro stanovení diagnózy a plánování léčby",
                              "Umožňuje kompletní vyléčení všech onemocnění bez nutnosti farmakoterapie",
                              "Slouží výhradně k archivaci snímků bez vlivu na klinické rozhodování",
                              "Nahrazuje laboratorní vyšetření krve a biochemickou analýzu"
                        ],
                        "correct": 0,
                        "explanation": "Zobrazovací metody v radiologii u tématu 'Zobrazování kostních zánětů.' přinášejí klíčové informace o přesné lokalizaci, rozsahu a charakteru patologického procesu, což je nezbytné pro správné klinické rozhodování (konzervativní léčba, operabilita, sledování po léčbě)."
                  }
            ]
      },
      {
            "id": "radio-30",
            "title": "Zobrazování kostních nádorů",
            "section": "Zobrazování pohybového aparátu",
            "category": "Kostra",
            "keywords": [
                  "kostní nádory",
                  "osteosarkom",
                  "ewingův sarkom",
                  "chondrosarkom",
                  "osteom",
                  "metastázy do kostí",
                  "zobrazování",
                  "kostních",
                  "nádorů"
            ],
            "content": {
                  "definition": "<ul><li>často se skládají z více tkání = chrupavek, kostí, cév a dalších tkání</li><li>RTG obraz - kombinace osteolýzy, osteosklerózy, periosteální reakce a změn v</li><li>měkkých částech</li><li>těžko odlišitelné od zánětlivých nebo jiných onemocnění</li><li>Obecné příznaky nádorů na ZM: Homogenita nebo heterogenita, lokální agresivita,</li></ul>",
                  "etiology": "<ul><li>periostóza (známka malignity), lokalizace, věková struktura, frekvence nádorů</li><li>typické noční bolesti</li><li>Klasifikace WHO dle produkce tkáně:</li><li>a)  Kostitvorné = osteogenní: osteom, osteoidní osteom (osteoblastom),</li><li>osteogenní sarkom (osteolýza s periostózou - těžce odlišitelné od</li></ul>",
                  "pathogenesis": "<ul><li>osteomyelitidy), osteoklastom (obrovskobuněčný nádor z cystoidních struktur</li><li>v epifýze a metafýze dlouhých kostí)</li><li>b)  Chondrogenní: Osteochondrom (nejčastější benigní kostní nádor - na široké</li><li>bázi metafýz kostí - na konci útvaru osifikovaná čepička), chondrosarkom</li><li>c)  Nádory kostní dřeně: Mnohočetný myelom (plazmocytom = na osovém</li></ul>",
                  "macroscopy": "<ul><li>skeletu, ostře ohraničená osteolytická ložiska bez sklerotického lemu),</li><li>Ewingův sarkom (u mladších jedinců, rozšíření dřeňové dutiny diafýzy a</li><li>cibulovité periostózy)</li><li>d)  Cévní nádory: hemangiom (obratlové těla)</li><li>Kostní metastázy:</li></ul>",
                  "microscopy": "<ul><li>tam kde je bohatě vaskularizovaná kostní dřeň = lebka, páteř, pánev</li><li>nejčastěji ca mammy a prostaty, ca plic, ledvin a ŠŽ</li><li>obvykle mnohočetné, méně solidní (grawitzův tu)</li><li>Osteolytické: ostře ohraničené ložiska (ca plic a ledvin)</li><li>Osteoplastické: místa zvýšené sytosti (ca prostaty a mamy)</li></ul>",
                  "clinical": "<ul><li>Smíšené: kombinace obou</li><li>nejrychlejší je detekce metastáz metodami nukleární medicíny (DaTSCAN,</li><li>PET/CT) a MR  → běžným vyšetřením možno zaměnit s degenerativními</li><li>změnami</li><li>Pseudotumory: Benigní cysty na proximální části femuru nebo humeru</li><li>Ischemické změny: avaskulární nekróza</li><li>Metabolická osteopatie: Hormonálně, malnutricí, poruchami fce ledvin</li><li>→denzitometrické metody</li><li>Osteomalacie: úbytek organické hmoty i mineralizace - na rtg struktura smazána</li></ul>"
            },
            "quiz": [
                  {
                        "question": "Jaká je primární diagnostická metoda první volby pro vyšetření tématu: Zobrazování kostních nádorů.?",
                        "options": [
                              "Magnetická rezonance (MR), protože má nejvyšší rozlišení",
                              "Závisí na klinickém stavu, ale obvykle začínáme méně zatěžujícími metodami jako UZ nebo konvenční RTG",
                              "Vždy invazivní digitální subtrakční angiografie (DSA)",
                              "Termovizní kamera a scintigrafie skeletu"
                        ],
                        "correct": 1,
                        "explanation": "Při vyšetřování tématu 'Zobrazování kostních nádorů.' volíme diagnostickou metodu na základě klinických indikací, dostupnosti a radiační zátěže. Obecně platí zásada začínat neinvazivními a dostupnými metodami (např. ultrazvukem nebo nativním RTG snímkem) před přistoupením k náročnějším metodám typu CT nebo MR."
                  },
                  {
                        "question": "Které z následujících tvrzení nejlépe vystihuje hlavní přínos radiologie pro téma: Zobrazování kostních nádorů.?",
                        "options": [
                              "Poskytuje detailní morfologické nebo funkční zobrazení patologických změn pro stanovení diagnózy a plánování léčby",
                              "Umožňuje kompletní vyléčení všech onemocnění bez nutnosti farmakoterapie",
                              "Slouží výhradně k archivaci snímků bez vlivu na klinické rozhodování",
                              "Nahrazuje laboratorní vyšetření krve a biochemickou analýzu"
                        ],
                        "correct": 0,
                        "explanation": "Zobrazovací metody v radiologii u tématu 'Zobrazování kostních nádorů.' přinášejí klíčové informace o přesné lokalizaci, rozsahu a charakteru patologického procesu, což je nezbytné pro správné klinické rozhodování (konzervativní léčba, operabilita, sledování po léčbě)."
                  }
            ]
      },
      {
            "id": "radio-31",
            "title": "Obecné projevy kloubních onemocnění v RTG obraze",
            "section": "Zobrazování pohybového aparátu",
            "category": "Kostra",
            "keywords": [
                  "kloub",
                  "artritida",
                  "revmatoidní artritida",
                  "dna",
                  "kloubní štěrbina",
                  "ankylóza",
                  "obecné",
                  "projevy",
                  "kloubních",
                  "onemocnění"
            ],
            "content": {
                  "definition": "<ul><li>Vyšetření měkkých částí kloubů:</li><li>hlavně UZ a MR</li></ul>",
                  "etiology": "<ul><li>UZ: průkaz nitrokloubní tekutiny, svalové úpony rotátorové manžety, labra</li><li>chrupavčitých částí (menší přesnost)</li></ul>",
                  "pathogenesis": "<ul><li>MR: zhodnotí úpony šlach, menisky, vazy → hyposignální; šířku chrupavky, okolní</li><li>měkké tkáně</li></ul>",
                  "macroscopy": "<ul><li>nejčastěji MR kolenního kloubu - indikací je ruptura zkřížených nebo kolaterálních</li><li>vazů, poškození menisků (od jemné fisury ž po velké ruptury), poškození chrupavek,</li></ul>",
                  "microscopy": "<ul><li>subchondrální zlomeniny</li><li>MR ramenního kloubu: prokáže poškození labra, úponovou část m. supraspinatus</li></ul>",
                  "clinical": "<ul><li>nebo jiných svalů rotátorové manžety</li><li>Dále diagnostika avaskulárních nekróz, komplikovaného zánětu nebo M. Perthes u</li><li>dětí</li></ul>"
            },
            "quiz": [
                  {
                        "question": "Jaká je primární diagnostická metoda první volby pro vyšetření tématu: Obecné projevy kloubních onemocnění v RTG obraze.?",
                        "options": [
                              "Magnetická rezonance (MR), protože má nejvyšší rozlišení",
                              "Závisí na klinickém stavu, ale obvykle začínáme méně zatěžujícími metodami jako UZ nebo konvenční RTG",
                              "Vždy invazivní digitální subtrakční angiografie (DSA)",
                              "Termovizní kamera a scintigrafie skeletu"
                        ],
                        "correct": 1,
                        "explanation": "Při vyšetřování tématu 'Obecné projevy kloubních onemocnění v RTG obraze.' volíme diagnostickou metodu na základě klinických indikací, dostupnosti a radiační zátěže. Obecně platí zásada začínat neinvazivními a dostupnými metodami (např. ultrazvukem nebo nativním RTG snímkem) před přistoupením k náročnějším metodám typu CT nebo MR."
                  },
                  {
                        "question": "Které z následujících tvrzení nejlépe vystihuje hlavní přínos radiologie pro téma: Obecné projevy kloubních onemocnění v RTG obraze.?",
                        "options": [
                              "Poskytuje detailní morfologické nebo funkční zobrazení patologických změn pro stanovení diagnózy a plánování léčby",
                              "Umožňuje kompletní vyléčení všech onemocnění bez nutnosti farmakoterapie",
                              "Slouží výhradně k archivaci snímků bez vlivu na klinické rozhodování",
                              "Nahrazuje laboratorní vyšetření krve a biochemickou analýzu"
                        ],
                        "correct": 0,
                        "explanation": "Zobrazovací metody v radiologii u tématu 'Obecné projevy kloubních onemocnění v RTG obraze.' přinášejí klíčové informace o přesné lokalizaci, rozsahu a charakteru patologického procesu, což je nezbytné pro správné klinické rozhodování (konzervativní léčba, operabilita, sledování po léčbě)."
                  }
            ]
      },
      {
            "id": "radio-32",
            "title": "Zobrazování degenerativních onemocnění kloubů",
            "section": "Zobrazování pohybového aparátu",
            "category": "Kostra",
            "keywords": [
                  "artróza",
                  "degenerativní kloubní",
                  "koxartróza",
                  "gonartróza",
                  "osteofyty",
                  "chondromalacie",
                  "zobrazování",
                  "degenerativních",
                  "onemocnění",
                  "kloubů"
            ],
            "content": {
                  "definition": "<ul><li>druhá nejčastější indikace k vyšetření</li><li>začínají na měkkých částech a chrupavce → na rtg patrné poměrně pozdě</li><li>Základní rtg změny = zúžení kloubní štěrbiny, tvorba okrajových osteofytů,</li><li>subchondrální skleróza + cystická projasnění v kostní tkáni</li></ul>",
                  "etiology": "<ul><li>Klasifikace dle závažnosti na základě RTG nálezu (Kellgren-Lawrence):</li><li>I. zúžení kloubní štěrbiny</li><li>II. zúžení kloubní štěrbiny, subchondrální skleróza na RTG, tvorba</li><li>osteofytů</li></ul>",
                  "pathogenesis": "<ul><li>III. zúžení kloubní štěrbiny, subchondrální skleróza na RTG,</li><li>deformace kloubní jamky a hlavice, osteofyty</li><li>IV. vymizené kloubní štěrbiny, subchondrální skleróza na RTG,</li><li>deformace, cysty, osteofyty</li></ul>",
                  "macroscopy": "<ul><li>v pozdějších stádiích osteonekrózy = syté stíny v transparentním okolí (kalcifikované</li><li>úlomky chrupavky)</li><li>Heberdenovy uzlíky: degenerativní změny na rukách (hl. distální články)</li><li>Gonoartróza: začíná na eminentia intercondylica, pak okraje kloubních plošek tibie,</li></ul>",
                  "microscopy": "<ul><li>femuru i pately (častější u varózních kolen)</li><li>Coxartróza: velké subchondreální cysty, hlavice femuru deformována a decentrována</li><li>Omartóze: osifikace na velkém hrbolu se nazývá fibroostitida</li><li>Spondylóza: osteoartritické změny páteře</li></ul>",
                  "clinical": "<ul><li>osifikace v úponech vazů a svalových šlach (hl. v oblasti pánve a kyčelních kloubů)</li><li>Totální endoprotózy: indikované u nezvládnutelných artrotických nebo</li><li>pozánětlivých postižení kloubů; cementové x necementové; nejčastěji kyčel nebo</li><li>koleno</li><li>Ankylozující spondylartritida (M. Bechtěrev):</li><li>AI onemocnění; séronegativní spondyloartróza (negativní revma faktory)</li><li>první změny symetricky na sakroileálním skloubení</li><li>neostrost kloubních plošek, ileální skleróza, eroze na ploskách, vazy zkostnatí</li><li>a pevně ztuhnou = páteř jako celek</li></ul>"
            },
            "quiz": [
                  {
                        "question": "Jaká je primární diagnostická metoda první volby pro vyšetření tématu: Zobrazování degenerativních onemocnění kloubů.?",
                        "options": [
                              "Magnetická rezonance (MR), protože má nejvyšší rozlišení",
                              "Závisí na klinickém stavu, ale obvykle začínáme méně zatěžujícími metodami jako UZ nebo konvenční RTG",
                              "Vždy invazivní digitální subtrakční angiografie (DSA)",
                              "Termovizní kamera a scintigrafie skeletu"
                        ],
                        "correct": 1,
                        "explanation": "Při vyšetřování tématu 'Zobrazování degenerativních onemocnění kloubů.' volíme diagnostickou metodu na základě klinických indikací, dostupnosti a radiační zátěže. Obecně platí zásada začínat neinvazivními a dostupnými metodami (např. ultrazvukem nebo nativním RTG snímkem) před přistoupením k náročnějším metodám typu CT nebo MR."
                  },
                  {
                        "question": "Které z následujících tvrzení nejlépe vystihuje hlavní přínos radiologie pro téma: Zobrazování degenerativních onemocnění kloubů.?",
                        "options": [
                              "Poskytuje detailní morfologické nebo funkční zobrazení patologických změn pro stanovení diagnózy a plánování léčby",
                              "Umožňuje kompletní vyléčení všech onemocnění bez nutnosti farmakoterapie",
                              "Slouží výhradně k archivaci snímků bez vlivu na klinické rozhodování",
                              "Nahrazuje laboratorní vyšetření krve a biochemickou analýzu"
                        ],
                        "correct": 0,
                        "explanation": "Zobrazovací metody v radiologii u tématu 'Zobrazování degenerativních onemocnění kloubů.' přinášejí klíčové informace o přesné lokalizaci, rozsahu a charakteru patologického procesu, což je nezbytné pro správné klinické rozhodování (konzervativní léčba, operabilita, sledování po léčbě)."
                  }
            ]
      },
      {
            "id": "radio-33",
            "title": "Zobrazování traumat kostí a kloubů",
            "section": "Zobrazování pohybového aparátu",
            "category": "Kostra",
            "keywords": [
                  "trauma kosti",
                  "zlomenina",
                  "fraktura",
                  "dislokace",
                  "luxace",
                  "hojení ran",
                  "rtg",
                  "ct",
                  "zobrazování",
                  "traumat"
            ],
            "content": {
                  "definition": "<ul><li>Traumatologie:</li><li>u lehčích zlomenin stačí RTG,</li><li>komplikovanější už CT i MR (např. páteř)</li></ul>",
                  "etiology": "<ul><li>otevřená x zavřená; kompletní x inkompletní</li><li>Tříštivá, kompresivní, stresová fraktura,</li><li>impresivní (jeden fragment pod druhý)</li></ul>",
                  "pathogenesis": "<ul><li>patologická fraktura - v místě nádoru nebo</li><li>chronického zánětu</li><li>Hodnotíme: tvar a velikost, snížení výšky,</li></ul>",
                  "macroscopy": "<ul><li>změnu hustoty tkáně, posuny fragmentů a</li><li>jejich dislokace, měkká tkáň okolo, otok,</li><li>drobné fragmenty</li></ul>",
                  "microscopy": "<ul><li>Dislokované zlomeniny: posun do stran (ad</li><li>latus - vždy distální proti proximálnímu),</li><li>posun do délky (ad longitudinem) nebo zkrácení nebo prodloužení, osová odchylka</li></ul>",
                  "clinical": "<ul><li>(ad axim)</li><li>Luxace (vykloubení): kompletní ztráta</li><li>kongruence kloubních ploch</li><li>Subluxace - jen částečné vykloubení</li><li>Hojení zlomenin: endosteální fibrózní</li><li>svalek → sytý kostěnný svalek</li><li>(mineralizovaný); pseudoartrózy (pakloub -</li><li>při nedokonalém zahojen)</li></ul>"
            },
            "quiz": [
                  {
                        "question": "Jaká je primární diagnostická metoda první volby pro vyšetření tématu: Zobrazování traumat kostí a kloubů.?",
                        "options": [
                              "Magnetická rezonance (MR), protože má nejvyšší rozlišení",
                              "Závisí na klinickém stavu, ale obvykle začínáme méně zatěžujícími metodami jako UZ nebo konvenční RTG",
                              "Vždy invazivní digitální subtrakční angiografie (DSA)",
                              "Termovizní kamera a scintigrafie skeletu"
                        ],
                        "correct": 1,
                        "explanation": "Při vyšetřování tématu 'Zobrazování traumat kostí a kloubů.' volíme diagnostickou metodu na základě klinických indikací, dostupnosti a radiační zátěže. Obecně platí zásada začínat neinvazivními a dostupnými metodami (např. ultrazvukem nebo nativním RTG snímkem) před přistoupením k náročnějším metodám typu CT nebo MR."
                  },
                  {
                        "question": "Které z následujících tvrzení nejlépe vystihuje hlavní přínos radiologie pro téma: Zobrazování traumat kostí a kloubů.?",
                        "options": [
                              "Poskytuje detailní morfologické nebo funkční zobrazení patologických změn pro stanovení diagnózy a plánování léčby",
                              "Umožňuje kompletní vyléčení všech onemocnění bez nutnosti farmakoterapie",
                              "Slouží výhradně k archivaci snímků bez vlivu na klinické rozhodování",
                              "Nahrazuje laboratorní vyšetření krve a biochemickou analýzu"
                        ],
                        "correct": 0,
                        "explanation": "Zobrazovací metody v radiologii u tématu 'Zobrazování traumat kostí a kloubů.' přinášejí klíčové informace o přesné lokalizaci, rozsahu a charakteru patologického procesu, což je nezbytné pro správné klinické rozhodování (konzervativní léčba, operabilita, sledování po léčbě)."
                  }
            ]
      },
      {
            "id": "radio-34",
            "title": "Zobrazovací metody v neuroradiologii",
            "section": "Neuroradiologie a páteř",
            "category": "Nervová soustava",
            "keywords": [
                  "mozková angiografie",
                  "ct mozku",
                  "mr mozku",
                  "likvorové cesty",
                  "hydrocefalus",
                  "zobrazovací",
                  "metody",
                  "neuroradiologii"
            ],
            "content": {
                  "definition": "<ul><li>RTG:</li><li>traumatologie, diagnostika onemocnění skeletu, hodnocení různých anomálií</li><li>CT:</li><li>odhalí 95% intrakraniálních expanzí, krvácení či změn skeletu</li><li>základní význam v traumatologii a CMP (+indikace k trombolytické léčbě)</li><li>u 50% podáváme i. v. jodovou KL</li></ul>",
                  "etiology": "<ul><li>nevýhody: radiační zatížení, aplikace jodové KL, horší diferenciace struktur střední</li><li>čáry, nedostatečné zobrazení bílé hmoty mozkové</li><li>hodnocení mozkové perfuze</li><li>CT angiografie: diagnostika okluzí tepen a arteriovenózních malformací. 2D nebo</li><li>D po aplikaci KL</li><li>Normální obraz: šedá hmota 35 HU, bílá 25 HU, likvor 10 HU</li></ul>",
                  "pathogenesis": "<ul><li>Patologické nálezy: změny  polohy a tvaru komorového systému a</li><li>subarachnoidálních prostorů; změny denzity - hyperdenzní  (čerstvé krvácení,</li><li>arteriovenózní malformace, vaskularizované nádory) - hypodenzní (tmavší než</li><li>okolní tkáň = malacie, kontuze, záněty, gliální nádory, edém - setřelé struktury šedé a</li><li>bílé hmoty; cysty)</li><li>MR:</li></ul>",
                  "macroscopy": "<ul><li>detailní zobrazení bílé hmoty, detekce mozkové ischemie, průkaz drobných cévních</li><li>malformací nativně, zobrazení mozkových cév BEZ podání KL. absence radiační</li><li>zátěže</li><li>méně spolehlivá detekce čerstvého krvácení a traumatologie skeletu</li><li>T1: šedá - hyperintenziní, likvor - hypointenzní, tuk - hyperintenzní → anatomické</li><li>zobrazení</li></ul>",
                  "microscopy": "<ul><li>T2: šedá - hyposignální, likvor - hyperintenzní, tuk - izosignální  → edém, cévy na</li><li>bílém pozadí likvoru</li><li>kalcifikace, vzduch, hemosiderin, arterie =</li><li>asignální</li><li>FLAIR: RS mozkomíšní, detekce čerstvého</li><li>krvácení;</li></ul>",
                  "clinical": "<ul><li>edém, ischemie, zánětlivé infiltrace, glióza a</li><li>některé druhy nádorů → T1 hyposignální a</li><li>na T2 hypersignální</li><li>MR angiografie - bez podání KL</li><li>Funkční MR = předoperační diagnostika</li><li>elokvenčních zón detekcí epileptogenních ložisek</li><li>Je livor bílý? → ANO = T2; NE => Je šedá hmota tmavší než bílá? → ANO = T1; NE= FLAIR</li><li>UZ: diagnostika a kontrola extrakraniálních okluzí + transkraniální dopplerovská sonografie</li><li>přes temporální šupinu + u novorozenců přes neuzavřenou fontanelu</li><li>NUKLEÁRNÍ MEDICÍNA: SPECT epileptických ložisek, PET/CT dif. diagnostika</li><li>demencí, zobrazení presynaptických dopaminových transportérů</li></ul>"
            },
            "quiz": [
                  {
                        "question": "Jaká je primární diagnostická metoda první volby pro vyšetření tématu: Zobrazovací metody v neuroradiologii.?",
                        "options": [
                              "Magnetická rezonance (MR), protože má nejvyšší rozlišení",
                              "Závisí na klinickém stavu, ale obvykle začínáme méně zatěžujícími metodami jako UZ nebo konvenční RTG",
                              "Vždy invazivní digitální subtrakční angiografie (DSA)",
                              "Termovizní kamera a scintigrafie skeletu"
                        ],
                        "correct": 1,
                        "explanation": "Při vyšetřování tématu 'Zobrazovací metody v neuroradiologii.' volíme diagnostickou metodu na základě klinických indikací, dostupnosti a radiační zátěže. Obecně platí zásada začínat neinvazivními a dostupnými metodami (např. ultrazvukem nebo nativním RTG snímkem) před přistoupením k náročnějším metodám typu CT nebo MR."
                  },
                  {
                        "question": "Které z následujících tvrzení nejlépe vystihuje hlavní přínos radiologie pro téma: Zobrazovací metody v neuroradiologii.?",
                        "options": [
                              "Poskytuje detailní morfologické nebo funkční zobrazení patologických změn pro stanovení diagnózy a plánování léčby",
                              "Umožňuje kompletní vyléčení všech onemocnění bez nutnosti farmakoterapie",
                              "Slouží výhradně k archivaci snímků bez vlivu na klinické rozhodování",
                              "Nahrazuje laboratorní vyšetření krve a biochemickou analýzu"
                        ],
                        "correct": 0,
                        "explanation": "Zobrazovací metody v radiologii u tématu 'Zobrazovací metody v neuroradiologii.' přinášejí klíčové informace o přesné lokalizaci, rozsahu a charakteru patologického procesu, což je nezbytné pro správné klinické rozhodování (konzervativní léčba, operabilita, sledování po léčbě)."
                  }
            ]
      },
      {
            "id": "radio-35",
            "title": "Zobrazování ischemických cévních mozkových příhod, možnosti léčby",
            "section": "Neuroradiologie a páteř",
            "category": "Nervová soustava",
            "keywords": [
                  "ischemie",
                  "cmp",
                  "mozkový infarkt",
                  "trombolýza",
                  "trombektomie",
                  "difuze",
                  "mra",
                  "cta",
                  "zobrazování",
                  "ischemických"
            ],
            "content": {
                  "definition": "<ul><li>ischemické se diagnostikují hůř jak hemoragické</li><li>Na CT obraz v prvních hodinách může být negativní</li></ul>",
                  "etiology": "<ul><li>v dalším průběhu → vyhlazení gyrů a subarachnoidálního prostoru, hyperdenzita v</li><li>průběhu a. c. media nebo posterior → hypodenzní malatické ložisko (uloženo v</li></ul>",
                  "pathogenesis": "<ul><li>cévních teritoriích)</li><li>Teritoriální infarkt = léze velké cévy; interteritoriální infarkt = rozhraní velkých</li></ul>",
                  "macroscopy": "<ul><li>cév, lakunární infarkt = postižení malých cév</li><li>Perfuzní CT zobrazení mozku = množství a průtok krve v poškozené části mozku</li></ul>",
                  "microscopy": "<ul><li>→ odlišení nekrotického jádra od penumbry</li><li>MR - rozhodující v časném odhalení mozkové ischemie (T2 a FLAIR)</li></ul>",
                  "clinical": "<ul><li>Trombózy venózních splavů: MR venogram</li><li>Sonografie - odhalení extrakraniální okluze, intrakraniální spasmy cév při SAK</li><li>(doppler)</li></ul>"
            },
            "quiz": [
                  {
                        "question": "Jaká je primární diagnostická metoda první volby pro vyšetření tématu: Zobrazování ischemických cévních mozkových příhod, možnosti léčby.?",
                        "options": [
                              "Magnetická rezonance (MR), protože má nejvyšší rozlišení",
                              "Závisí na klinickém stavu, ale obvykle začínáme méně zatěžujícími metodami jako UZ nebo konvenční RTG",
                              "Vždy invazivní digitální subtrakční angiografie (DSA)",
                              "Termovizní kamera a scintigrafie skeletu"
                        ],
                        "correct": 1,
                        "explanation": "Při vyšetřování tématu 'Zobrazování ischemických cévních mozkových příhod, možnosti léčby.' volíme diagnostickou metodu na základě klinických indikací, dostupnosti a radiační zátěže. Obecně platí zásada začínat neinvazivními a dostupnými metodami (např. ultrazvukem nebo nativním RTG snímkem) před přistoupením k náročnějším metodám typu CT nebo MR."
                  },
                  {
                        "question": "Které z následujících tvrzení nejlépe vystihuje hlavní přínos radiologie pro téma: Zobrazování ischemických cévních mozkových příhod, možnosti léčby.?",
                        "options": [
                              "Poskytuje detailní morfologické nebo funkční zobrazení patologických změn pro stanovení diagnózy a plánování léčby",
                              "Umožňuje kompletní vyléčení všech onemocnění bez nutnosti farmakoterapie",
                              "Slouží výhradně k archivaci snímků bez vlivu na klinické rozhodování",
                              "Nahrazuje laboratorní vyšetření krve a biochemickou analýzu"
                        ],
                        "correct": 0,
                        "explanation": "Zobrazovací metody v radiologii u tématu 'Zobrazování ischemických cévních mozkových příhod, možnosti léčby.' přinášejí klíčové informace o přesné lokalizaci, rozsahu a charakteru patologického procesu, což je nezbytné pro správné klinické rozhodování (konzervativní léčba, operabilita, sledování po léčbě)."
                  }
            ]
      },
      {
            "id": "radio-36",
            "title": "Zobrazování hemoragických cévních mozkových příhod",
            "section": "Neuroradiologie a páteř",
            "category": "Nervová soustava",
            "keywords": [
                  "krvácení do mozku",
                  "hemoragická cmp",
                  "sak",
                  "epidurální",
                  "subdurální",
                  "intracerebrální krvácení",
                  "ct",
                  "zobrazování",
                  "hemoragických",
                  "cévních"
            ],
            "content": {
                  "definition": "<ul><li>vrozené a získané</li><li>Aneurysmata - hlavně na tepnách Willisova okruhu (aa. communicantes) ⇒</li><li>vyklenutí cévní stěny, se kterou je spojen tenkým krčkem</li></ul>",
                  "etiology": "<ul><li>AV malformace - porušení fyziologického řečiště arterie - kapilára - véna ⇒</li><li>asignální dilatace arterie (T2)</li><li>Získané: stenózy (bifurkace karotid), uzávěry, arteriosklerotické postižení → odlišit</li></ul>",
                  "pathogenesis": "<ul><li>spasmy od stenóz</li><li>Hemoragie se rozdělují na intracerebrální a subarachnoidální</li><li>CT prokáže krvácení již v prvních hodinách po vzniku CMP, MR odhalí za 20 minut</li></ul>",
                  "macroscopy": "<ul><li>čerstvou ischemii</li><li>Intracerebrální hematom:</li><li>zdroj: perforující cévy v okolí BG a mozkového kmene; arteriální hypertenze</li></ul>",
                  "microscopy": "<ul><li>hyperdenzní masa (80-100HU),</li><li>expanzivní, lemována edémem</li><li>konzervativní léčba nebo punkce hematomu</li></ul>",
                  "clinical": "<ul><li>po 10 dnech se mění složení i denzita, hojí se posthemoragickou pseudocystou</li><li>Subarachnoidální hematom:</li><li>zdroj: cévní dysplázie, ruptura arteriosklerotických cév</li><li>CT - hyperdenzní stíny v subarachnoidálních prostorech, následováno CT</li><li>angiografií →aneuryzma nebo AVM → MR - průkaz drobnějších AVM</li></ul>"
            },
            "quiz": [
                  {
                        "question": "Jaká je primární diagnostická metoda první volby pro vyšetření tématu: Zobrazování hemoragických cévních mozkových příhod.?",
                        "options": [
                              "Magnetická rezonance (MR), protože má nejvyšší rozlišení",
                              "Závisí na klinickém stavu, ale obvykle začínáme méně zatěžujícími metodami jako UZ nebo konvenční RTG",
                              "Vždy invazivní digitální subtrakční angiografie (DSA)",
                              "Termovizní kamera a scintigrafie skeletu"
                        ],
                        "correct": 1,
                        "explanation": "Při vyšetřování tématu 'Zobrazování hemoragických cévních mozkových příhod.' volíme diagnostickou metodu na základě klinických indikací, dostupnosti a radiační zátěže. Obecně platí zásada začínat neinvazivními a dostupnými metodami (např. ultrazvukem nebo nativním RTG snímkem) před přistoupením k náročnějším metodám typu CT nebo MR."
                  },
                  {
                        "question": "Které z následujících tvrzení nejlépe vystihuje hlavní přínos radiologie pro téma: Zobrazování hemoragických cévních mozkových příhod.?",
                        "options": [
                              "Poskytuje detailní morfologické nebo funkční zobrazení patologických změn pro stanovení diagnózy a plánování léčby",
                              "Umožňuje kompletní vyléčení všech onemocnění bez nutnosti farmakoterapie",
                              "Slouží výhradně k archivaci snímků bez vlivu na klinické rozhodování",
                              "Nahrazuje laboratorní vyšetření krve a biochemickou analýzu"
                        ],
                        "correct": 0,
                        "explanation": "Zobrazovací metody v radiologii u tématu 'Zobrazování hemoragických cévních mozkových příhod.' přinášejí klíčové informace o přesné lokalizaci, rozsahu a charakteru patologického procesu, což je nezbytné pro správné klinické rozhodování (konzervativní léčba, operabilita, sledování po léčbě)."
                  }
            ]
      },
      {
            "id": "radio-37",
            "title": "Zobrazování kraniocerebrálních poranění",
            "section": "Neuroradiologie a páteř",
            "category": "Nervová soustava",
            "keywords": [
                  "kraniotrauma",
                  "úraz hlavy",
                  "fraktury lebky",
                  "kontuze mozku",
                  "difúzní axonální poranění",
                  "dap",
                  "zobrazování",
                  "kraniocerebrálních",
                  "poranění"
            ],
            "content": {
                  "definition": "<ul><li>trauma skeletu neurokrania, mozku a jeho obalů, mozkových tepen a nervů</li><li>Fisury: rtg - zřetelné lineární projasnění → už se nemá indikovat!!! , CT vyšší</li><li>výtěžnost; nebezpečné v oblasti temporální squamy (a. meningea media → epidurální</li><li>hematom) + může poškodit obaly a tím způsobit infekci (ze středního ucha nebo</li></ul>",
                  "etiology": "<ul><li>paranasálních dutin)</li><li>CT - rutinně u každého polytraumatu</li><li>Kontuze mozku: morfologické poškození mozkové tkáně - na bázi čelního nebo</li><li>temenního laloku - hypodenzní ložisko s kolaterálním</li></ul>",
                  "pathogenesis": "<ul><li>edémem, často prokrvácené, na MR ložiska i v corpus</li><li>callosum</li><li>Lacerace mozku: těžké morfologické poškození</li><li>Difúzní axonální postižení (DAP) - střižné poranění</li></ul>",
                  "macroscopy": "<ul><li>axonů - na CT nediferencovatelná, na MR</li><li>hyperintenzní</li><li>Epidurální hematom: mezi tvrdou plenou a kostí</li><li>(arteria meningea media + žilní splavy) → na CT</li></ul>",
                  "microscopy": "<ul><li>čočkovitý tvar, ostře ohraničený</li><li>Subdurální hematom - mezi tvrdou plenou a</li><li>arachnoideou (přemosťující vény hlubokého a</li><li>povrchového systému) → krev v širokém subdurálním</li></ul>",
                  "clinical": "<ul><li>prostoru v okolí celé hemisféry, často oboustranný, po</li><li>třech týdnech denzita jako likvor, chronický je na CT</li><li>hypodenzní</li><li>SAK: ruptura aneuryzmatu, AV malformace → CT</li><li>Intraparenchymatózní krvácení: hypertenzní angiopatie, hemostáza,</li><li>antikoagulační/trombotická léčba, cévní malformace, aneurysma, tumor → na CT</li><li>hyperdenzní jde vidět hned, pak MR</li></ul>"
            },
            "quiz": [
                  {
                        "question": "Jaká je primární diagnostická metoda první volby pro vyšetření tématu: Zobrazování kraniocerebrálních poranění.?",
                        "options": [
                              "Magnetická rezonance (MR), protože má nejvyšší rozlišení",
                              "Závisí na klinickém stavu, ale obvykle začínáme méně zatěžujícími metodami jako UZ nebo konvenční RTG",
                              "Vždy invazivní digitální subtrakční angiografie (DSA)",
                              "Termovizní kamera a scintigrafie skeletu"
                        ],
                        "correct": 1,
                        "explanation": "Při vyšetřování tématu 'Zobrazování kraniocerebrálních poranění.' volíme diagnostickou metodu na základě klinických indikací, dostupnosti a radiační zátěže. Obecně platí zásada začínat neinvazivními a dostupnými metodami (např. ultrazvukem nebo nativním RTG snímkem) před přistoupením k náročnějším metodám typu CT nebo MR."
                  },
                  {
                        "question": "Které z následujících tvrzení nejlépe vystihuje hlavní přínos radiologie pro téma: Zobrazování kraniocerebrálních poranění.?",
                        "options": [
                              "Poskytuje detailní morfologické nebo funkční zobrazení patologických změn pro stanovení diagnózy a plánování léčby",
                              "Umožňuje kompletní vyléčení všech onemocnění bez nutnosti farmakoterapie",
                              "Slouží výhradně k archivaci snímků bez vlivu na klinické rozhodování",
                              "Nahrazuje laboratorní vyšetření krve a biochemickou analýzu"
                        ],
                        "correct": 0,
                        "explanation": "Zobrazovací metody v radiologii u tématu 'Zobrazování kraniocerebrálních poranění.' přinášejí klíčové informace o přesné lokalizaci, rozsahu a charakteru patologického procesu, což je nezbytné pro správné klinické rozhodování (konzervativní léčba, operabilita, sledování po léčbě)."
                  }
            ]
      },
      {
            "id": "radio-38",
            "title": "Zobrazování intrakraniálních nádorů.",
            "section": "Neuroradiologie a páteř",
            "category": "Nervová soustava",
            "keywords": [
                  "nádory mozku",
                  "gliom",
                  "meningeom",
                  "metastázy",
                  "edém",
                  "kontrast",
                  "mr",
                  "ct",
                  "zobrazování"
            ],
            "content": {
                  "definition": "<ul><li><strong>Klasifikace intrakraniálních nádorů:</strong> Rozlišujeme nádory <strong>intraaxiální</strong> (rostoucí přímo v mozkovém parenchymu - např. gliomy, lymfomy) a <strong>extraaxiální</strong> (rostoucí mimo mozek, stlačující parenchym zvenčí - např. meningeomy, neurinomy, adenomy hypofýzy).</li><li><strong>Cíle zobrazovacích metod:</strong> Průkaz lokalizace tumoru, diferenciální diagnostika proti jiným lézím (ischemická CMP, intracerebrální krvácení, záněty/abscesy), stanovení stupně malignity (grading) a posouzení operability. CT odhalí cca 95 % nádorů, nejpřesnější metodou je však magnetická rezonance (MR).</li></ul>",
                  "etiology": "",
                  "pathogenesis": "",
                  "macroscopy": "",
                  "microscopy": "",
                  "clinical": "<ul><li><strong>Stupeň malignity (grading):</strong> Vysoce maligní tumory mívají heterogenní strukturu, nepravidelné sycení kontrastní látkou, patologickou novotvorbu cév (neovaskularizaci) a rozsáhlý perifokální vazogenní edém.</li><li><strong>Specifické nádory:</strong> <ul><li><strong>Astrocytom (low-grade):</strong> Na CT se jeví jako hypodenzní ložisko, které se po podání kontrastní látky (KL) nesytí. Na MR je v T1 hypointenzivní, v T2 hyperintenzivní. Může napodobovat ischemii kvůli nevýraznému expanzivnímu chování.</li><li><strong>Glioblastoma multiforme (grade IV):</strong> Vysoce maligní, heterogenní struktura s centrální nekrózou, prstencovitým sycením okrajů po podání KL, arterioterminálními (a-v) zkraty a masivním okolním edémem.</li><li><strong>Meningeom:</strong> Extraaxiální, ostře ohraničený, na CT/MR izodenzní/izosignální s kůrou, silně a homogenně se sytí po KL, často se zobrazuje 'dural tail' (zbytnění přilehlé dury mater).</li><li><strong>Metastázy:</strong> Často mnohočetná ložiska na rozhraní šedé a bílé hmoty, doprovázená velkým edémem, masivně se sytí kontrastní látkou na CT i MR.</li><li><strong>Selární nádory:</strong> Adenomy hypofýzy. Mikroadenomy (do 10 mm), makroadenomy (nad 10 mm) mohou stlačovat chiasma opticum a působit bitemporální hemianopsii. Zlatým standardem diagnostiky je MR.</li></ul></li><li><strong>Operabilita:</strong> Neoperabilní jsou tumory v hlubokých strukturách (talamus, mozkový kmen) nebo v elokventních oblastech kůry (řečová centra, motorický proužek). U operabilních se využívá funkční MR (fMRI) k mapování center a peroperační MR navigace.</li></ul>"
            },
            "quiz": [
                  {
                        "question": "Jaká je primární diagnostická metoda první volby pro vyšetření tématu: Zobrazování intrakraniálních nádorů.?",
                        "options": [
                              "Magnetická rezonance (MR), protože má nejvyšší rozlišení",
                              "Závisí na klinickém stavu, ale obvykle začínáme méně zatěžujícími metodami jako UZ nebo konvenční RTG",
                              "Vždy invazivní digitální subtrakční angiografie (DSA)",
                              "Termovizní kamera a scintigrafie skeletu"
                        ],
                        "correct": 1,
                        "explanation": "Při vyšetřování tématu 'Zobrazování intrakraniálních nádorů.' volíme diagnostickou metodu na základě klinických indikací, dostupnosti a radiační zátěže. Obecně platí zásada začínat neinvazivními a dostupnými metodami (např. ultrazvukem nebo nativním RTG snímkem) před přistoupením k náročnějším metodám typu CT nebo MR."
                  },
                  {
                        "question": "Které z následujících tvrzení nejlépe vystihuje hlavní přínos radiologie pro téma: Zobrazování intrakraniálních nádorů.?",
                        "options": [
                              "Poskytuje detailní morfologické nebo funkční zobrazení patologických změn pro stanovení diagnózy a plánování léčby",
                              "Umožňuje kompletní vyléčení všech onemocnění bez nutnosti farmakoterapie",
                              "Slouží výhradně k archivaci snímků bez vlivu na klinické rozhodování",
                              "Nahrazuje laboratorní vyšetření krve a biochemickou analýzu"
                        ],
                        "correct": 0,
                        "explanation": "Zobrazovací metody v radiologii u tématu 'Zobrazování intrakraniálních nádorů.' přinášejí klíčové informace o přesné lokalizaci, rozsahu a charakteru patologického procesu, což je nezbytné pro správné klinické rozhodování (konzervativní léčba, operabilita, sledování po léčbě)."
                  }
            ]
      },
      {
            "id": "radio-39",
            "title": "Zobrazování zánětů CNS a onemocnění bílé hmoty.",
            "section": "Neuroradiologie a páteř",
            "category": "Nervová soustava",
            "keywords": [
                  "zánět mozku",
                  "meningitida",
                  "absces",
                  "roztroušená skleróza",
                  "plaky",
                  "mr",
                  "bílá hmota",
                  "zobrazování",
                  "zánětů",
                  "onemocnění"
            ],
            "content": {
                  "definition": "<ul><li><strong>Zobrazování infekcí CNS:</strong> Nativní nálezy mohou být zpočátku nespecifické. Na CT se zánětlivá ložiska zobrazují většinou jako hypodenzní zóny, na MR jsou v T1 hypointenzivní a v T2 hyperintenzivní. Diagnostickým standardem je zobrazení s kontrastní látkou (KL).</li><li><strong>Meningitida (zánět plen):</strong> V časném stadiu bývá nativní CT i MR negativní. Po podání kontrastní látky dochází k výraznému, difúznímu sycení leptomening (leptomeningeální enhancement) podél sulků a na bázi mozku.</li><li><strong>Mozkový absces:</strong> Prezentuje se jako oválný expanzivní proces s centrálním kolikvačním rozpadem (nekrózou). Po podání KL vykazuje charakteristické hladké prstencovité (lemové) sycení (ring-enhancement) a je obklopen masivním perifokálním edémem. Podobně se zobrazují subdurální a epidurální empyémy.</li></ul>",
                  "etiology": "",
                  "pathogenesis": "",
                  "macroscopy": "",
                  "microscopy": "",
                  "clinical": "<ul><li><strong>Onemocnění bílé hmoty (Roztroušená skleróza - RS):</strong> Zlatým standardem je magnetická rezonance (MR). Ložiska demyelinizace (plaky) se zobrazují jako hyperintenzivní ložiska v T2 a zejména v sekvenci FLAIR. Typická je periventrikulární lokalizace (Dawsonovy prsty) a ložiska v corpus callosum. <strong>Aktivita ložisek:</strong> Aktivní (akutní) plaky se sytí po podání kontrastní látky (gadolinia) kvůli poruše hematoencefalické bariéry; chronická stacionární ložiska se nesytí.</li><li><strong>Hydrocefalus a atrofie:</strong> <ul><li><strong>Obstrukční hydrocefalus:</strong> Způsoben překážkou v likvorových cestách (např. stenóza/uzávěr mokovodu, tumor komprimující 4. komoru). Způsobuje dilataci komorového systému nad překážkou, zatímco subarachnoidální prostory na konvexitě jsou zúžené/obliterované. MR potvrdí místo obstrukce.</li><li><strong>Neobstrukční (komunikující) hydrocefalus:</strong> Porucha vstřebávání likvoru v arachnoidálních klucích (např. po SAK či meningitidě). Dochází k symetrické dilataci všech komor i subarachnoidálních prostorů.</li><li><strong>Atrofie mozku (senilní, demence):</strong> Úbytek mozkové tkáně (difúzní nebo fokální), který vede ke kompenzatornímu rozšíření komor i subarachnoidálních prostorů (hydrocephalus ex vacuo). Diferenciální diagnostika demencí (např. Alzheimerovy choroby s atrofií temporoparietálně a hipokampů) využívá MR, popř. funkční zobrazení SPECT a PET.</li></ul></li><li><strong>Vrozené anomálie a cysty:</strong> Např. <strong>arachnoideální cysty</strong> – polokulovité útvary o denzitě a signálu mozkomíšního moku (likvoru), které nekomunikují s komorami a nesytí se kontrastem. Většinou jsou klinicky němé (náhodný nález), ale při expanzivním růstu mohou utlačovat okolní tkáň a imitovat tumor.</li></ul>"
            },
            "quiz": [
                  {
                        "question": "Jaká je primární diagnostická metoda první volby pro vyšetření tématu: Zobrazování zánětů CNS a onemocnění bílé hmoty.?",
                        "options": [
                              "Magnetická rezonance (MR), protože má nejvyšší rozlišení",
                              "Závisí na klinickém stavu, ale obvykle začínáme méně zatěžujícími metodami jako UZ nebo konvenční RTG",
                              "Vždy invazivní digitální subtrakční angiografie (DSA)",
                              "Termovizní kamera a scintigrafie skeletu"
                        ],
                        "correct": 1,
                        "explanation": "Při vyšetřování tématu 'Zobrazování zánětů CNS a onemocnění bílé hmoty.' volíme diagnostickou metodu na základě klinických indikací, dostupnosti a radiační zátěže. Obecně platí zásada začínat neinvazivními a dostupnými metodami (např. ultrazvukem nebo nativním RTG snímkem) před přistoupením k náročnějším metodám typu CT nebo MR."
                  },
                  {
                        "question": "Které z následujících tvrzení nejlépe vystihuje hlavní přínos radiologie pro téma: Zobrazování zánětů CNS a onemocnění bílé hmoty.?",
                        "options": [
                              "Poskytuje detailní morfologické nebo funkční zobrazení patologických změn pro stanovení diagnózy a plánování léčby",
                              "Umožňuje kompletní vyléčení všech onemocnění bez nutnosti farmakoterapie",
                              "Slouží výhradně k archivaci snímků bez vlivu na klinické rozhodování",
                              "Nahrazuje laboratorní vyšetření krve a biochemickou analýzu"
                        ],
                        "correct": 0,
                        "explanation": "Zobrazovací metody v radiologii u tématu 'Zobrazování zánětů CNS a onemocnění bílé hmoty.' přinášejí klíčové informace o přesné lokalizaci, rozsahu a charakteru patologického procesu, což je nezbytné pro správné klinické rozhodování (konzervativní léčba, operabilita, sledování po léčbě)."
                  }
            ]
      },
      {
            "id": "radio-40",
            "title": "Zobrazování úrazů páteře",
            "section": "Neuroradiologie a páteř",
            "category": "Nervová soustava",
            "keywords": [
                  "páteř",
                  "úraz páteře",
                  "zlomenina obratle",
                  "míšní léze",
                  "stabilní zlomenina",
                  "rtg",
                  "ct",
                  "mr",
                  "zobrazování",
                  "úrazů"
            ],
            "content": {
                  "definition": "<ul><li>RTG:</li><li>snímky vleže při požadavku na hodnocení struktury a tvaru skeletu</li><li>hodnocení skoliózy - ve vertikále</li><li>snímky bederní páteře mají velkou radiační zátěž (asi jak CT) → uvážlivě indikovat u</li><li>dětí a žen</li></ul>",
                  "etiology": "<ul><li>vždy musí být zachyceny všechny obratle v požadovaném úseku a ve správně projekci</li><li>a expozici + koncentrujeme se na páteřní kanál a dorzální třetinu obratlů  →vzniká</li><li>většina maligních lézí a zánětů</li><li>Ploténka: normální při malignitách, deformovaná při zánětech, po čerstvém výhřezu</li><li>má normální výšku</li></ul>",
                  "pathogenesis": "<ul><li>CT:</li><li>diagnostika onemocnění skeletu a epidurálního prostoru</li><li>špatná diferenciace kostní dřeně a nehodnotitelná mícha</li><li>MR:</li><li>obratle, kostní dřeň, páteřní kanál, mícha, paravertebrální měkké tkáně</li></ul>",
                  "macroscopy": "<ul><li>T1, T2, STIR</li><li>špatné zobrazení kortikalis</li><li>MYELOGRAFIE</li><li>aplikace speciální KL subarachnoidálně po lumbální punkce → posuzujeme patologii</li><li>míchy a intradurálního prostoru</li></ul>",
                  "microscopy": "<ul><li>Kongenitální vady: numerická varianta počtu obratlů, srůsty obratlů, spina bifida occulta,</li><li>spondylolistéza</li><li>Traumatologie:</li><li>poškození páteře - možné poškození míchy</li><li>RTG u lehčích poranění, závažnější polytraumata CT, na MR - herniace disku a</li></ul>",
                  "clinical": "<ul><li>poranění vazů + poranění míchy</li><li>kontuze obratlů - edém kostní dřeně</li><li>luxace, subluxace, luxační fraktury</li><li>spojené s poškozením páteřního kanálu = poškození nervových struktur</li><li>hyperextenční krční trauma:  po čelním nárazu dochází k retroflexi hlavy →</li><li>ruptura vazů, posun fragmentů do páteřního kanálu, poškození míchy; je možné</li><li>poškození míchy bez poškození páteře</li><li>flekční krční trauma: síla působí zezadu → rozšíření distance mezi trny obratlů při</li><li>ruptuře interspinózního ligamenta</li><li>Poranění míchy: kontuze, hematomyelie  → MR až za 24 hod po úrazu</li></ul>"
            },
            "quiz": [
                  {
                        "question": "Jaká je primární diagnostická metoda první volby pro vyšetření tématu: Zobrazování úrazů páteře.?",
                        "options": [
                              "Magnetická rezonance (MR), protože má nejvyšší rozlišení",
                              "Závisí na klinickém stavu, ale obvykle začínáme méně zatěžujícími metodami jako UZ nebo konvenční RTG",
                              "Vždy invazivní digitální subtrakční angiografie (DSA)",
                              "Termovizní kamera a scintigrafie skeletu"
                        ],
                        "correct": 1,
                        "explanation": "Při vyšetřování tématu 'Zobrazování úrazů páteře.' volíme diagnostickou metodu na základě klinických indikací, dostupnosti a radiační zátěže. Obecně platí zásada začínat neinvazivními a dostupnými metodami (např. ultrazvukem nebo nativním RTG snímkem) před přistoupením k náročnějším metodám typu CT nebo MR."
                  },
                  {
                        "question": "Které z následujících tvrzení nejlépe vystihuje hlavní přínos radiologie pro téma: Zobrazování úrazů páteře.?",
                        "options": [
                              "Poskytuje detailní morfologické nebo funkční zobrazení patologických změn pro stanovení diagnózy a plánování léčby",
                              "Umožňuje kompletní vyléčení všech onemocnění bez nutnosti farmakoterapie",
                              "Slouží výhradně k archivaci snímků bez vlivu na klinické rozhodování",
                              "Nahrazuje laboratorní vyšetření krve a biochemickou analýzu"
                        ],
                        "correct": 0,
                        "explanation": "Zobrazovací metody v radiologii u tématu 'Zobrazování úrazů páteře.' přinášejí klíčové informace o přesné lokalizaci, rozsahu a charakteru patologického procesu, což je nezbytné pro správné klinické rozhodování (konzervativní léčba, operabilita, sledování po léčbě)."
                  }
            ]
      },
      {
            "id": "radio-41",
            "title": "Degenerativní onemocnění páteře",
            "section": "Neuroradiologie a páteř",
            "category": "Nervová soustava",
            "keywords": [
                  "degenerace páteře",
                  "spondylóza",
                  "spondylartróza",
                  "hernie disku",
                  "výhřez ploténky",
                  "stenóza kanálu",
                  "degenerativní",
                  "onemocnění",
                  "páteře"
            ],
            "content": {
                  "definition": "<ul><li>spondylodiscitida, spondylitida: obvykle postiženy dva sousední obratle +</li><li>destruována meziobratlová ploténka</li><li>Morbus Bechtěrev: revmatologické onemocnění, osifikace v paravertebráních</li><li>vazech, produktivní změny na okrajích obratlů (syndesmofyty) - směřují kolmo dolů;</li></ul>",
                  "etiology": "<ul><li>začíná na SI skloubení; změny nejprve začínají na synovii, vazech a chrupavce,</li><li>později přejdou na skelet</li><li>Spondylosis deformans:</li><li>tvorba osteofytů (kostěných návalků) na okrajích krycích plotének obratlů</li></ul>",
                  "pathogenesis": "<ul><li>vznikají osifikací po rupturách vláken anulus fibrosus</li><li>ventrálně nebo laterodorzálně, na krku unkovertebrálně</li><li>deformující spondylartróza - produktivní změny na facies articulares obratlů</li><li>degenerativní změny nekorespondují s tíži klinických příznaků - bezpříznakové,</li></ul>",
                  "macroscopy": "<ul><li>komprese míšních kořenů, míchy nebo dráždivost vertebrálních arterií</li><li>Chondrosis intervertebralis: degenerace meziobratlové poténky → snížení výšky</li><li>intervertebrálních prostorů, sklerotické změny na přilehlých ploškách, retrolistézu</li><li>horního obratle, vzduchové projasnění v ploténce</li></ul>",
                  "microscopy": "<ul><li>Výhřez meziobratlové ploténky:</li><li>CT nebo MR</li><li>konvexně se vyklenuje  do páteřního kanálu, redukuje epidurální tuk</li><li>může komprimovat míšní kořen, v krční a hrudní páteři míchu</li></ul>",
                  "clinical": "<ul><li>protruze → výhřez souměrný, hladký, báze je širší než vyklenutá konvexita</li><li>prolaps → nepravidelná, asymetrická, báze užší než vyklenutí</li><li>Sekvestr = nekrotická část ploténky, která se odlomila může i vycestovat do</li><li>páteřního kanálu</li><li>Spondylogenní cervikální myelopatie: stenóza páteřního kanálu → komprese</li><li>Postdiskotomický sy: rozhoduje MR mezi epidurální fibrózou nebo recidivou hernie</li><li>disku</li></ul>"
            },
            "quiz": [
                  {
                        "question": "Jaká je primární diagnostická metoda první volby pro vyšetření tématu: Degenerativní onemocnění páteře.?",
                        "options": [
                              "Magnetická rezonance (MR), protože má nejvyšší rozlišení",
                              "Závisí na klinickém stavu, ale obvykle začínáme méně zatěžujícími metodami jako UZ nebo konvenční RTG",
                              "Vždy invazivní digitální subtrakční angiografie (DSA)",
                              "Termovizní kamera a scintigrafie skeletu"
                        ],
                        "correct": 1,
                        "explanation": "Při vyšetřování tématu 'Degenerativní onemocnění páteře.' volíme diagnostickou metodu na základě klinických indikací, dostupnosti a radiační zátěže. Obecně platí zásada začínat neinvazivními a dostupnými metodami (např. ultrazvukem nebo nativním RTG snímkem) před přistoupením k náročnějším metodám typu CT nebo MR."
                  },
                  {
                        "question": "Které z následujících tvrzení nejlépe vystihuje hlavní přínos radiologie pro téma: Degenerativní onemocnění páteře.?",
                        "options": [
                              "Poskytuje detailní morfologické nebo funkční zobrazení patologických změn pro stanovení diagnózy a plánování léčby",
                              "Umožňuje kompletní vyléčení všech onemocnění bez nutnosti farmakoterapie",
                              "Slouží výhradně k archivaci snímků bez vlivu na klinické rozhodování",
                              "Nahrazuje laboratorní vyšetření krve a biochemickou analýzu"
                        ],
                        "correct": 0,
                        "explanation": "Zobrazovací metody v radiologii u tématu 'Degenerativní onemocnění páteře.' přinášejí klíčové informace o přesné lokalizaci, rozsahu a charakteru patologického procesu, což je nezbytné pro správné klinické rozhodování (konzervativní léčba, operabilita, sledování po léčbě)."
                  }
            ]
      },
      {
            "id": "radio-42",
            "title": "Zobrazování nádorů páteře a míchy",
            "section": "Neuroradiologie a páteř",
            "category": "Nervová soustava",
            "keywords": [
                  "nádory páteře",
                  "metastázy obratlů",
                  "plazmocytom",
                  "intradurální nádory",
                  "intramedulární",
                  "mr",
                  "zobrazování",
                  "nádorů",
                  "páteře",
                  "míchy"
            ],
            "content": {
                  "definition": "<ul><li>Nádory páteře:</li><li>nejčastějším nádorem je hemangiom - až u 10% populace → pokud neprominuje do</li></ul>",
                  "etiology": "<ul><li>páteřního kanálu, tak se jedná o symptomatických nález - Obratel má voštinovitou</li><li>strukturu</li></ul>",
                  "pathogenesis": "<ul><li>Maligní: plazmocytom → osteolytické změny, mnohočetné komprese obratlových těl</li><li>Metastázy páteře - nejčastější onemocnění vůbec → osteolytické, osteosklerotické,</li></ul>",
                  "macroscopy": "<ul><li>smíšené</li><li>Nejprve v zadní třetině těla, potom do oblouku → destruují i pedikly (smazaný pedikl</li></ul>",
                  "microscopy": "<ul><li>na rtg znamená metastázu)</li><li>Nádory v páteřním kanálu:</li></ul>",
                  "clinical": "<ul><li>při dlouhodobém růstu = intraspinální hypertenze → exkavace obratlů, rozšíření</li><li>vzdálenosti mezi pedikly</li><li>indikuje se vždy MR (T1)</li><li>Nádory intradurální - neurinom, meningeom → komprimují míchu a dobře se sytí na</li><li>KL</li><li>Nádory intramedulární - gliomy, ependymomy → vřetenovitě rozšiřují část míšního</li><li>sloupce, postkontrastně se sytí</li></ul>"
            },
            "quiz": [
                  {
                        "question": "Jaká je primární diagnostická metoda první volby pro vyšetření tématu: Zobrazování nádorů páteře a míchy.?",
                        "options": [
                              "Magnetická rezonance (MR), protože má nejvyšší rozlišení",
                              "Závisí na klinickém stavu, ale obvykle začínáme méně zatěžujícími metodami jako UZ nebo konvenční RTG",
                              "Vždy invazivní digitální subtrakční angiografie (DSA)",
                              "Termovizní kamera a scintigrafie skeletu"
                        ],
                        "correct": 1,
                        "explanation": "Při vyšetřování tématu 'Zobrazování nádorů páteře a míchy.' volíme diagnostickou metodu na základě klinických indikací, dostupnosti a radiační zátěže. Obecně platí zásada začínat neinvazivními a dostupnými metodami (např. ultrazvukem nebo nativním RTG snímkem) před přistoupením k náročnějším metodám typu CT nebo MR."
                  },
                  {
                        "question": "Které z následujících tvrzení nejlépe vystihuje hlavní přínos radiologie pro téma: Zobrazování nádorů páteře a míchy.?",
                        "options": [
                              "Poskytuje detailní morfologické nebo funkční zobrazení patologických změn pro stanovení diagnózy a plánování léčby",
                              "Umožňuje kompletní vyléčení všech onemocnění bez nutnosti farmakoterapie",
                              "Slouží výhradně k archivaci snímků bez vlivu na klinické rozhodování",
                              "Nahrazuje laboratorní vyšetření krve a biochemickou analýzu"
                        ],
                        "correct": 0,
                        "explanation": "Zobrazovací metody v radiologii u tématu 'Zobrazování nádorů páteře a míchy.' přinášejí klíčové informace o přesné lokalizaci, rozsahu a charakteru patologického procesu, což je nezbytné pro správné klinické rozhodování (konzervativní léčba, operabilita, sledování po léčbě)."
                  }
            ]
      },
      {
            "id": "radio-43",
            "title": "Možnosti invazivního a neinvazivního zobrazování cév – rozdíly, výhody a nevýhody.",
            "section": "Intervenční radiologie a cévy",
            "category": "Intervence & Cévy",
            "keywords": [
                  "angiografie",
                  "dsa",
                  "arteriografie",
                  "flebografie",
                  "neinvazivní cévy",
                  "cta",
                  "mra",
                  "doppler",
                  "možnosti",
                  "invazivního"
            ],
            "content": {
                  "definition": "<ul><li><strong>Angiografie:</strong> Metoda určená k zobrazení lumen a větvení cévního řečiště.</li><li><strong>Nativní (přímé) zobrazení cév:</strong> Céva je definovaná svou vlastní stěnou a přirozeným kontrastem krve/tuku. Zobrazí se jen velké cévy s dostatečně silnou stěnou nebo proudící krví (ultrazvuk/Doppler, nativní MR angiografie využívající efektu 'flow-void' - proudící krev ztrácí signál a je tmavá).</li><li><strong>Nepřímé zobrazení cév:</strong> Zobrazení endovaskulárního prostoru (vnitřního odlitku cévy) po naplnění kontrastní látkou (jodovou nebo paramagnetickou). Využívá se v konvenčním RTG, CT angiografii (CTA) a kontrastní MR angiografii (MRA).</li></ul>",
                  "etiology": "",
                  "pathogenesis": "",
                  "macroscopy": "",
                  "microscopy": "",
                  "clinical": "<ul><li><strong>Neinvazivní techniky cévního zobrazení:</strong> Bez vstupu do těla pacienta. Patří sem <strong>duplexní a dopplerovská ultrasonografie</strong> (měří rychlosti a směr toku, detekuje stenózy, uzávěry, pláty) a <strong>nativní MR angiografie</strong> (sekvence TOF - Time of Flight). Výhodou je nulová radiační zátěž a absence kontrastní látky.</li><li><strong>Minimálně invazivní techniky:</strong> Vyžadují intravenózní (i. v.) zavedení kontrastní látky. Patří sem <strong>CT angiografie (CTA)</strong> a <strong>kontrastní MR angiografie (MRA)</strong>. CTA poskytuje vysoké prostorové rozlišení, umožňuje 3D rekonstrukce stěny i lumina, ale nese zátěž ionizujícího záření a nefrotoxické kontrastní látky.</li><li><strong>Invazivní techniky (Digitální subtrakční angiografie - DSA):</strong> Zlatý standard pro detailní zobrazení a zejména pro provádění endovaskulárních intervencí. Vyžaduje arteriální punkci (nejčastěji a. femoralis communis) pomocí <strong>Seldingerovy metody</strong>: <ul><li>1. Punkce tepny jehlou</li><li>2. Zavedení kovového vodiče skrz jehlu do lumina</li><li>3. Odstranění jehly při ponechání vodiče v cévě</li><li>4. Zavedení katétru nebo sheathu po vodiči</li><li>5. Odstranění vodiče a aplikace kontrastní látky přímo do cílové cévy</li></ul></li><li><strong>Princip a výhody DSA:</strong> Počítač provede odečtení (subtrakci) nativního maskovacího snímku (kostra, měkké tkáně) od snímku s kontrastní náplní cév. Výsledkem je čistý obraz cévního řečiště bez rušivého pozadí. Umožňuje zobrazení v reálném čase, navigaci instrumentária (katétry, stenty, spirály) a kombinaci s terapeutickým zákrokem. Limitací jsou pohybové artefakty a rizika spojená s punkcí (krvácení, pseudoaneuryzma, disekce).</li></ul>"
            },
            "quiz": [
                  {
                        "question": "Jaká je primární diagnostická metoda první volby pro vyšetření tématu: Možnosti invazivního a neinvazivního zobrazování cév – rozdíly, výhody a nevýhody.?",
                        "options": [
                              "Magnetická rezonance (MR), protože má nejvyšší rozlišení",
                              "Závisí na klinickém stavu, ale obvykle začínáme méně zatěžujícími metodami jako UZ nebo konvenční RTG",
                              "Vždy invazivní digitální subtrakční angiografie (DSA)",
                              "Termovizní kamera a scintigrafie skeletu"
                        ],
                        "correct": 1,
                        "explanation": "Při vyšetřování tématu 'Možnosti invazivního a neinvazivního zobrazování cév – rozdíly, výhody a nevýhody.' volíme diagnostickou metodu na základě klinických indikací, dostupnosti a radiační zátěže. Obecně platí zásada začínat neinvazivními a dostupnými metodami (např. ultrazvukem nebo nativním RTG snímkem) před přistoupením k náročnějším metodám typu CT nebo MR."
                  },
                  {
                        "question": "Které z následujících tvrzení nejlépe vystihuje hlavní přínos radiologie pro téma: Možnosti invazivního a neinvazivního zobrazování cév – rozdíly, výhody a nevýhody.?",
                        "options": [
                              "Poskytuje detailní morfologické nebo funkční zobrazení patologických změn pro stanovení diagnózy a plánování léčby",
                              "Umožňuje kompletní vyléčení všech onemocnění bez nutnosti farmakoterapie",
                              "Slouží výhradně k archivaci snímků bez vlivu na klinické rozhodování",
                              "Nahrazuje laboratorní vyšetření krve a biochemickou analýzu"
                        ],
                        "correct": 0,
                        "explanation": "Zobrazovací metody v radiologii u tématu 'Možnosti invazivního a neinvazivního zobrazování cév – rozdíly, výhody a nevýhody.' přinášejí klíčové informace o přesné lokalizaci, rozsahu a charakteru patologického procesu, což je nezbytné pro správné klinické rozhodování (konzervativní léčba, operabilita, sledování po léčbě)."
                  }
            ]
      },
      {
            "id": "radio-44",
            "title": "Příprava nemocného před angiografií",
            "section": "Intervenční radiologie a cévy",
            "category": "Intervence & Cévy",
            "keywords": [
                  "příprava před ag",
                  "ledvinové funkce",
                  "metformin",
                  "hemostáza",
                  "premedikace",
                  "vpich",
                  "příprava",
                  "nemocného",
                  "angiografií"
            ],
            "content": {
                  "definition": "<ul><li>podepsaný informovaný souhlas, negativní reverz → datum, čas a podpisy lékaře,</li><li>pacienta a svědka</li></ul>",
                  "etiology": "<ul><li>na lačno (min 4 hodiny), hydratovaný</li><li>kontrola hemokoagulačních parametrů (krevní obraz, INR, aPTT, Quickův čas,</li></ul>",
                  "pathogenesis": "<ul><li>trombocyty)</li><li>u nevaskulárních zákroků - hladiny obstrukčních enzymů a bilirubinu</li></ul>",
                  "macroscopy": "<ul><li>hodnoty funkce ledvin - kreatinin, plurea</li><li>medikaci pacienta - warfarin, metformin, léky na astma</li></ul>",
                  "microscopy": "<ul><li>alergologická anamnéza → premedikace kortikosteroidy</li><li>během výkonu pacient monitorován - TK, EKG, saturace kyslíku + parenterální vstup</li></ul>",
                  "clinical": "<ul><li>na infuzi fýzáku</li><li>péče po výkonu: výsledek léčebného výkonu, klid na lůžku po punkce femorálky +</li><li>monitorace TK a pulsu, kontrola místa vpichu</li></ul>"
            },
            "quiz": [
                  {
                        "question": "Jaká je primární diagnostická metoda první volby pro vyšetření tématu: Příprava nemocného před angiografií.?",
                        "options": [
                              "Magnetická rezonance (MR), protože má nejvyšší rozlišení",
                              "Závisí na klinickém stavu, ale obvykle začínáme méně zatěžujícími metodami jako UZ nebo konvenční RTG",
                              "Vždy invazivní digitální subtrakční angiografie (DSA)",
                              "Termovizní kamera a scintigrafie skeletu"
                        ],
                        "correct": 1,
                        "explanation": "Při vyšetřování tématu 'Příprava nemocného před angiografií.' volíme diagnostickou metodu na základě klinických indikací, dostupnosti a radiační zátěže. Obecně platí zásada začínat neinvazivními a dostupnými metodami (např. ultrazvukem nebo nativním RTG snímkem) před přistoupením k náročnějším metodám typu CT nebo MR."
                  },
                  {
                        "question": "Které z následujících tvrzení nejlépe vystihuje hlavní přínos radiologie pro téma: Příprava nemocného před angiografií.?",
                        "options": [
                              "Poskytuje detailní morfologické nebo funkční zobrazení patologických změn pro stanovení diagnózy a plánování léčby",
                              "Umožňuje kompletní vyléčení všech onemocnění bez nutnosti farmakoterapie",
                              "Slouží výhradně k archivaci snímků bez vlivu na klinické rozhodování",
                              "Nahrazuje laboratorní vyšetření krve a biochemickou analýzu"
                        ],
                        "correct": 0,
                        "explanation": "Zobrazovací metody v radiologii u tématu 'Příprava nemocného před angiografií.' přinášejí klíčové informace o přesné lokalizaci, rozsahu a charakteru patologického procesu, což je nezbytné pro správné klinické rozhodování (konzervativní léčba, operabilita, sledování po léčbě)."
                  }
            ]
      },
      {
            "id": "radio-45",
            "title": "Základní patologické nálezy při angiografii",
            "section": "Intervenční radiologie a cévy",
            "category": "Intervence & Cévy",
            "keywords": [
                  "patologie cév",
                  "okluze",
                  "stenóza",
                  "ateroskleróza",
                  "aneurysma",
                  "disekce",
                  "malformace",
                  "základní",
                  "patologické",
                  "nálezy"
            ],
            "content": {
                  "definition": "<ul><li>Onemocnění periferních cév - Arteriální okluzivní nemoc:</li><li>Fontaineova klinická klasifikace: 1) asymptomatické aterosklerotické léze  2)</li><li>občasné klaudikace 3) klidové bolesti 4) trofické změny s nekrózou a gangrenou</li></ul>",
                  "etiology": "<ul><li>Akutní = embolie, trombóza na podkladě aterosklerózy, zánětlivého procesu, disekce</li><li>tepenné stěny, spazmy, hemodynamické dysbalance → částečná nebo úplná okluze</li><li>lumina tepny</li></ul>",
                  "pathogenesis": "<ul><li>Chronické: pomalé ukládání ateromatózních hmot do cévní stěny + tvorba kolaterál</li><li>→ predilekční místa = pelvické arterie, dolní končetiny, odstup velkých cév z</li><li>aortálního oblouku, bifurkace krkavice, a. femoralis superficialis, a. poplitea →</li></ul>",
                  "macroscopy": "<ul><li>nezbytné zobrazit stenózu nebo okluzi v celé její délce + kolaterální oběh</li><li>Záněty: Trombangitis obliterans - tepénky malého a středního kalibru na HKK i</li><li>DKK; Takayasuova arteritida - velké elastické tepny</li></ul>",
                  "microscopy": "<ul><li>fibromuskulární dysplazie</li><li>syndrom cévního útlaku</li><li>Traumatické poruchy tepenné perfuze</li></ul>",
                  "clinical": "<ul><li>Aneurysma: pravé (vychlipky tepenné stěny vakovitého nebo vřetenovitého typu - tři</li><li>histologické vrstvy), pseudoaneuryzma (vznik v důsledku natržení intimy a medie →</li><li>lokální asymetrické vyklenutí tvořené adventicií), disekující aneurysma (trhliny a</li><li>odchlípeniny intimy od medie → vznik falešného kanálu + původní lumen je</li><li>průchodné → Standordská klasifikace - A = odstup od aortální chlopně postupující</li><li>na oblouk aorty a odstupy velkých cév; B = disekce od odstupu levé a. subclavia)</li><li>Cévní malformace: kapilární hemangiomy, venózní angiomy, arteriovenózní</li><li>malformace, lymfangiomy</li></ul>"
            },
            "quiz": [
                  {
                        "question": "Jaká je primární diagnostická metoda první volby pro vyšetření tématu: Základní patologické nálezy při angiografii.?",
                        "options": [
                              "Magnetická rezonance (MR), protože má nejvyšší rozlišení",
                              "Závisí na klinickém stavu, ale obvykle začínáme méně zatěžujícími metodami jako UZ nebo konvenční RTG",
                              "Vždy invazivní digitální subtrakční angiografie (DSA)",
                              "Termovizní kamera a scintigrafie skeletu"
                        ],
                        "correct": 1,
                        "explanation": "Při vyšetřování tématu 'Základní patologické nálezy při angiografii.' volíme diagnostickou metodu na základě klinických indikací, dostupnosti a radiační zátěže. Obecně platí zásada začínat neinvazivními a dostupnými metodami (např. ultrazvukem nebo nativním RTG snímkem) před přistoupením k náročnějším metodám typu CT nebo MR."
                  },
                  {
                        "question": "Které z následujících tvrzení nejlépe vystihuje hlavní přínos radiologie pro téma: Základní patologické nálezy při angiografii.?",
                        "options": [
                              "Poskytuje detailní morfologické nebo funkční zobrazení patologických změn pro stanovení diagnózy a plánování léčby",
                              "Umožňuje kompletní vyléčení všech onemocnění bez nutnosti farmakoterapie",
                              "Slouží výhradně k archivaci snímků bez vlivu na klinické rozhodování",
                              "Nahrazuje laboratorní vyšetření krve a biochemickou analýzu"
                        ],
                        "correct": 0,
                        "explanation": "Zobrazovací metody v radiologii u tématu 'Základní patologické nálezy při angiografii.' přinášejí klíčové informace o přesné lokalizaci, rozsahu a charakteru patologického procesu, což je nezbytné pro správné klinické rozhodování (konzervativní léčba, operabilita, sledování po léčbě)."
                  }
            ]
      },
      {
            "id": "radio-46",
            "title": "Transluminální remodelace cév – princip, indikace, komplikace",
            "section": "Intervenční radiologie a cévy",
            "category": "Intervence & Cévy",
            "keywords": [
                  "angioplastika",
                  "pta",
                  "balonek",
                  "stent",
                  "stentgraft",
                  "seldingerova metoda",
                  "rekanalizace",
                  "transluminální",
                  "remodelace",
                  "princip"
            ],
            "content": {
                  "definition": "<ul><li>zobrazení arteriálního nebo žilního řečiště lze provést perkutánní punkcí =</li><li>Seldingerova metoda (a. femoralis, a. radialis) = jehlou punktujeme tepnu, zavádíme</li><li>přes jehlu do tepny vodič, odstraníme jehlu vodič necháme a po vodiči zasuneme do</li><li>tepny katetr nebo sheat, po odstranění vodiče provedeme proplach katétru ⇒ bezpečný</li><li>přístup do cévního řečiště</li></ul>",
                  "etiology": "<ul><li>Perkutánní transluminální angioplastika (PTA):</li><li>metoda léčby tepen a žil - kontrolované poranění patologicky změněné cévní stěny →</li><li>cílem je rozšířit průměr zúžené cévy na původní průměr zdravé cévy</li><li>technika: průnik vodiče přes stenózu nebo postižený úsek → po vodiči zavedeny</li><li>dilatační balonek → insuflace balonku → trhliny intimy a medie → rozšíření zevního</li></ul>",
                  "pathogenesis": "<ul><li>průměru cévy</li><li>po poranění cévy →autoreparativní procesy cévní stěny → časná trombóza + možná</li><li>restenóza (hyperplazie myointimální vrstvy)</li><li>K předcházení komplikací - Anopyrin 6 měsíců po výkonu, periprocedurální heparin</li><li>Stenty, stentgrafty:</li></ul>",
                  "macroscopy": "<ul><li>stent = kovová výztuž, která se implantuje do cév pro zachování dlouhodobé</li><li>průchodnosti po předchozí PTA</li><li>doporučení - implantovat stent o cca 10% větším průměti než je stentovaná céva</li><li>balónexpanzivní (chirurgická ocel) x samoexpanzivní (nikl + platina)</li><li>radiální síla + kruhová pevnost</li></ul>",
                  "microscopy": "<ul><li>potahované a farmaka uvolňující stenty = snížení incidence restenóz → zabraňují</li><li>proliferaci hladkých svalových buněk + omezují hyperplazii intimy</li><li>Stentgraft: stenty potažené zevně nebo uvnitř nepropustným materiálem (cévní</li><li>protézou = polytetrafluorethylén) → zástava krvácení rupturovaných nebo</li><li>perforovaných cév a při léčba disekcí nebo aneurysmat</li></ul>",
                  "clinical": "<ul><li>Nutná hemostáza + manuální komprese v místě vpichu po dobu 15 min</li><li>Lokální komplikace: hematom, pseudoaneurysma, AV píštěl, disekce cévy, trombóza nebo</li><li>infekce</li><li>Celkové komplikace: alergoidní reakce a vazovagální reakce + komplikace v místě zákroku</li><li>Intravenózní trombolýza</li><li>Mechanická extrakce embolu: rekanalizační košík Solitaire</li></ul>"
            },
            "quiz": [
                  {
                        "question": "Jaká je primární diagnostická metoda první volby pro vyšetření tématu: Transluminální remodelace cév – princip, indikace, komplikace.?",
                        "options": [
                              "Magnetická rezonance (MR), protože má nejvyšší rozlišení",
                              "Závisí na klinickém stavu, ale obvykle začínáme méně zatěžujícími metodami jako UZ nebo konvenční RTG",
                              "Vždy invazivní digitální subtrakční angiografie (DSA)",
                              "Termovizní kamera a scintigrafie skeletu"
                        ],
                        "correct": 1,
                        "explanation": "Při vyšetřování tématu 'Transluminální remodelace cév – princip, indikace, komplikace.' volíme diagnostickou metodu na základě klinických indikací, dostupnosti a radiační zátěže. Obecně platí zásada začínat neinvazivními a dostupnými metodami (např. ultrazvukem nebo nativním RTG snímkem) před přistoupením k náročnějším metodám typu CT nebo MR."
                  },
                  {
                        "question": "Které z následujících tvrzení nejlépe vystihuje hlavní přínos radiologie pro téma: Transluminální remodelace cév – princip, indikace, komplikace.?",
                        "options": [
                              "Poskytuje detailní morfologické nebo funkční zobrazení patologických změn pro stanovení diagnózy a plánování léčby",
                              "Umožňuje kompletní vyléčení všech onemocnění bez nutnosti farmakoterapie",
                              "Slouží výhradně k archivaci snímků bez vlivu na klinické rozhodování",
                              "Nahrazuje laboratorní vyšetření krve a biochemickou analýzu"
                        ],
                        "correct": 0,
                        "explanation": "Zobrazovací metody v radiologii u tématu 'Transluminální remodelace cév – princip, indikace, komplikace.' přinášejí klíčové informace o přesné lokalizaci, rozsahu a charakteru patologického procesu, což je nezbytné pro správné klinické rozhodování (konzervativní léčba, operabilita, sledování po léčbě)."
                  }
            ]
      },
      {
            "id": "radio-47",
            "title": "Endovaskulární embolizace – princip, indikace, komplikace",
            "section": "Intervenční radiologie a cévy",
            "category": "Intervence & Cévy",
            "keywords": [
                  "embolizace",
                  "uzávěr cév",
                  "krvácení",
                  "spirála",
                  "lepidlo",
                  "želatina",
                  "endovaskulární",
                  "princip",
                  "indikace",
                  "komplikace"
            ],
            "content": {
                  "definition": "<ul><li>léčebný uzávěr cévy s cílem zastavit nebo předejít krvácení nebo léčit patologickou</li></ul>",
                  "etiology": "<ul><li>funkci orgánu a tkání</li></ul>",
                  "pathogenesis": "<ul><li>do cílové oblasti aplikován buď přímou punkcí dané cévy nebo využitím</li></ul>",
                  "macroscopy": "<ul><li>katetrizačních technik</li></ul>",
                  "microscopy": "<ul><li>I: akutní hemostatické výkony (krvácení do GIT, posttraumatická krvácení, krvácení z</li></ul>",
                  "clinical": "<ul><li>maligních tumorů, krvácení do bronchů), efektivní výkony (posttraumatické</li><li>komplikace, A-V píštěle a malformace, embolizace tumorů)</li><li>materiál: resorbovatelný (želatinová pěna, krevní sraženina) x neresorbovatelný</li><li>(polyvinylalkoholové částice, tkáňové lepidlo, sklerotizační látky, kovové spirály)</li></ul>"
            },
            "quiz": [
                  {
                        "question": "Jaká je primární diagnostická metoda první volby pro vyšetření tématu: Endovaskulární embolizace – princip, indikace, komplikace.?",
                        "options": [
                              "Magnetická rezonance (MR), protože má nejvyšší rozlišení",
                              "Závisí na klinickém stavu, ale obvykle začínáme méně zatěžujícími metodami jako UZ nebo konvenční RTG",
                              "Vždy invazivní digitální subtrakční angiografie (DSA)",
                              "Termovizní kamera a scintigrafie skeletu"
                        ],
                        "correct": 1,
                        "explanation": "Při vyšetřování tématu 'Endovaskulární embolizace – princip, indikace, komplikace.' volíme diagnostickou metodu na základě klinických indikací, dostupnosti a radiační zátěže. Obecně platí zásada začínat neinvazivními a dostupnými metodami (např. ultrazvukem nebo nativním RTG snímkem) před přistoupením k náročnějším metodám typu CT nebo MR."
                  },
                  {
                        "question": "Které z následujících tvrzení nejlépe vystihuje hlavní přínos radiologie pro téma: Endovaskulární embolizace – princip, indikace, komplikace.?",
                        "options": [
                              "Poskytuje detailní morfologické nebo funkční zobrazení patologických změn pro stanovení diagnózy a plánování léčby",
                              "Umožňuje kompletní vyléčení všech onemocnění bez nutnosti farmakoterapie",
                              "Slouží výhradně k archivaci snímků bez vlivu na klinické rozhodování",
                              "Nahrazuje laboratorní vyšetření krve a biochemickou analýzu"
                        ],
                        "correct": 0,
                        "explanation": "Zobrazovací metody v radiologii u tématu 'Endovaskulární embolizace – princip, indikace, komplikace.' přinášejí klíčové informace o přesné lokalizaci, rozsahu a charakteru patologického procesu, což je nezbytné pro správné klinické rozhodování (konzervativní léčba, operabilita, sledování po léčbě)."
                  }
            ]
      },
      {
            "id": "radio-48",
            "title": "Nevaskulární intervenční metody – typy, principy, indikace, komplikace",
            "section": "Intervenční radiologie a cévy",
            "category": "Intervence & Cévy",
            "keywords": [
                  "nevaskulární intervence",
                  "drenáž",
                  "nefrostomie",
                  "ptcd",
                  "stenóza jícnu",
                  "vertebroplastika",
                  "nevaskulární",
                  "intervenční",
                  "metody",
                  "principy"
            ],
            "content": {
                  "definition": "<ul><li>provádí se mimo cévní systém</li></ul>",
                  "etiology": "<ul><li>intervence na GIT - léčba benigních a maligních strinktur jícnu, léčba pooperačních</li></ul>",
                  "pathogenesis": "<ul><li>strinktur rekta a sigmoidea, perkutánní transhepatální zevně-vnitřní drenáž při</li></ul>",
                  "macroscopy": "<ul><li>benigních či maligních stenózách žlučových cest</li></ul>",
                  "microscopy": "<ul><li>drenáže nitrobřišních tekutinových kolekcí</li></ul>",
                  "clinical": "<ul><li>intervenční nevaskulární výkony na ledvinách - nefrostomie</li><li>termoablace, perkutánní vertebroplastika</li></ul>"
            },
            "quiz": [
                  {
                        "question": "Jaká je primární diagnostická metoda první volby pro vyšetření tématu: Nevaskulární intervenční metody – typy, principy, indikace, komplikace.?",
                        "options": [
                              "Magnetická rezonance (MR), protože má nejvyšší rozlišení",
                              "Závisí na klinickém stavu, ale obvykle začínáme méně zatěžujícími metodami jako UZ nebo konvenční RTG",
                              "Vždy invazivní digitální subtrakční angiografie (DSA)",
                              "Termovizní kamera a scintigrafie skeletu"
                        ],
                        "correct": 1,
                        "explanation": "Při vyšetřování tématu 'Nevaskulární intervenční metody – typy, principy, indikace, komplikace.' volíme diagnostickou metodu na základě klinických indikací, dostupnosti a radiační zátěže. Obecně platí zásada začínat neinvazivními a dostupnými metodami (např. ultrazvukem nebo nativním RTG snímkem) před přistoupením k náročnějším metodám typu CT nebo MR."
                  },
                  {
                        "question": "Které z následujících tvrzení nejlépe vystihuje hlavní přínos radiologie pro téma: Nevaskulární intervenční metody – typy, principy, indikace, komplikace.?",
                        "options": [
                              "Poskytuje detailní morfologické nebo funkční zobrazení patologických změn pro stanovení diagnózy a plánování léčby",
                              "Umožňuje kompletní vyléčení všech onemocnění bez nutnosti farmakoterapie",
                              "Slouží výhradně k archivaci snímků bez vlivu na klinické rozhodování",
                              "Nahrazuje laboratorní vyšetření krve a biochemickou analýzu"
                        ],
                        "correct": 0,
                        "explanation": "Zobrazovací metody v radiologii u tématu 'Nevaskulární intervenční metody – typy, principy, indikace, komplikace.' přinášejí klíčové informace o přesné lokalizaci, rozsahu a charakteru patologického procesu, což je nezbytné pro správné klinické rozhodování (konzervativní léčba, operabilita, sledování po léčbě)."
                  }
            ]
      },
      {
            "id": "radio-49",
            "title": "Zobrazování onemocnění žilního systému",
            "section": "Intervenční radiologie a cévy",
            "category": "Intervence & Cévy",
            "keywords": [
                  "hluboká žilní trombóza",
                  "hžt",
                  "flebografie",
                  "doppler",
                  "reflux",
                  "žilní insuficience",
                  "zobrazování",
                  "onemocnění",
                  "žilního",
                  "systému"
            ],
            "content": {
                  "definition": "<ul><li>Hluboká žilní trombóza:</li><li>1 pacienta na 800-1000 obyvatel</li><li>⅓ příčina plicní embolie, bolesti a otoky DK, gangréna až ztráta DK</li></ul>",
                  "etiology": "<ul><li>dlouhodobé riziko = posttrombotický sy → destrukce nebo nedostatečnost žilních</li><li>chlopní vedoucí k obliteraci žil a tvorbě kolaterál s varixy, kožními trofickými</li><li>ulceracemi a klaudikacemi</li></ul>",
                  "pathogenesis": "<ul><li>nejčastěji postižené bércové žíly</li><li>Zobrazení = Doppler, CT flebografie, ascendentní flebografie → obraz kolejnic</li><li>nebo obraz vlajícího trombu, známky nepřímé - segmentální diskontinuita náplně žíly</li></ul>",
                  "macroscopy": "<ul><li>s kolaterálním oběhem, při totální okluzi průchodný jen povrchový systém</li><li>Phlegmasia rubra dolens: totální venózní obstrukce DK → ischemická gangréna DK</li><li>(díky zástavě arteriálního oběhu)</li></ul>",
                  "microscopy": "<ul><li>Chronická žilní insuficience</li><li>nedostatečnost chlopenních segmentů spojených s refluxem a obstrukcí lumen žil</li><li>nebo kombinací obou → periferní žilní hypertenze</li></ul>",
                  "clinical": "<ul><li>Tumory, hematomy, Bakerovy pseudocysty:</li><li>v případě blízkosti velkých žil → oblenění až obstrukce krevního toku → venózní</li><li>hypertenze a trombóza</li><li>tumorózní trombus - vrůstání tumorózních mas do lumen žil</li><li>hematomy - zužují, protahují a kónicky tvarují lumen žil se ztíženým či úplně</li><li>zastaveným odtokem krve</li></ul>"
            },
            "quiz": [
                  {
                        "question": "Jaká je primární diagnostická metoda první volby pro vyšetření tématu: Zobrazování onemocnění žilního systému.?",
                        "options": [
                              "Magnetická rezonance (MR), protože má nejvyšší rozlišení",
                              "Závisí na klinickém stavu, ale obvykle začínáme méně zatěžujícími metodami jako UZ nebo konvenční RTG",
                              "Vždy invazivní digitální subtrakční angiografie (DSA)",
                              "Termovizní kamera a scintigrafie skeletu"
                        ],
                        "correct": 1,
                        "explanation": "Při vyšetřování tématu 'Zobrazování onemocnění žilního systému.' volíme diagnostickou metodu na základě klinických indikací, dostupnosti a radiační zátěže. Obecně platí zásada začínat neinvazivními a dostupnými metodami (např. ultrazvukem nebo nativním RTG snímkem) před přistoupením k náročnějším metodám typu CT nebo MR."
                  },
                  {
                        "question": "Které z následujících tvrzení nejlépe vystihuje hlavní přínos radiologie pro téma: Zobrazování onemocnění žilního systému.?",
                        "options": [
                              "Poskytuje detailní morfologické nebo funkční zobrazení patologických změn pro stanovení diagnózy a plánování léčby",
                              "Umožňuje kompletní vyléčení všech onemocnění bez nutnosti farmakoterapie",
                              "Slouží výhradně k archivaci snímků bez vlivu na klinické rozhodování",
                              "Nahrazuje laboratorní vyšetření krve a biochemickou analýzu"
                        ],
                        "correct": 0,
                        "explanation": "Zobrazovací metody v radiologii u tématu 'Zobrazování onemocnění žilního systému.' přinášejí klíčové informace o přesné lokalizaci, rozsahu a charakteru patologického procesu, což je nezbytné pro správné klinické rozhodování (konzervativní léčba, operabilita, sledování po léčbě)."
                  }
            ]
      },
      {
            "id": "radio-50",
            "title": "Zobrazování onemocnění lymfatického systému",
            "section": "Intervenční radiologie a cévy",
            "category": "Intervence & Cévy",
            "keywords": [
                  "lymfatické uzliny",
                  "lymfedém",
                  "metastáza uzlin",
                  "hilus",
                  "doppler uzlin",
                  "velikost uzliny",
                  "zobrazování",
                  "onemocnění",
                  "lymfatického",
                  "systému"
            ],
            "content": {
                  "definition": "<ul><li>Vyšetření lymfatických uzlin - UZ s Dopplerovskou analýzou perfuze</li><li>CT vyšetření pro dobré rozlišení</li></ul>",
                  "etiology": "<ul><li>MR doplněk</li><li>Vlastní lymfatické cévy se dnes nezobrazují4</li></ul>",
                  "pathogenesis": "<ul><li>Lymfatické uzliny na UZ:</li><li>rozměry - 8mm na 5mm (nad 10 už je patologická)</li></ul>",
                  "macroscopy": "<ul><li>tvar - ledvinný (benigní), kulovitý (zánětlivá)</li><li>homogenitu - hyperechogenní hilus, hypoechogenní kůra (když je</li></ul>",
                  "microscopy": "<ul><li>hyperechogenní, odpovídá to infiltraci nádorem)</li><li>prokrvení</li></ul>",
                  "clinical": "<ul><li>CT: prostory nedostupné pro UZ vlnění → retromandibulární, retrofaryngeální,</li><li>parafaryngeální; metastatická uzlina na CT: sycení nehomogenní, větší jak 10mm,</li><li>může být část nekrotická, utlačuje okolní struktury</li><li>segmenty krku</li></ul>"
            },
            "quiz": [
                  {
                        "question": "Jaká je primární diagnostická metoda první volby pro vyšetření tématu: Zobrazování onemocnění lymfatického systému.?",
                        "options": [
                              "Magnetická rezonance (MR), protože má nejvyšší rozlišení",
                              "Závisí na klinickém stavu, ale obvykle začínáme méně zatěžujícími metodami jako UZ nebo konvenční RTG",
                              "Vždy invazivní digitální subtrakční angiografie (DSA)",
                              "Termovizní kamera a scintigrafie skeletu"
                        ],
                        "correct": 1,
                        "explanation": "Při vyšetřování tématu 'Zobrazování onemocnění lymfatického systému.' volíme diagnostickou metodu na základě klinických indikací, dostupnosti a radiační zátěže. Obecně platí zásada začínat neinvazivními a dostupnými metodami (např. ultrazvukem nebo nativním RTG snímkem) před přistoupením k náročnějším metodám typu CT nebo MR."
                  },
                  {
                        "question": "Které z následujících tvrzení nejlépe vystihuje hlavní přínos radiologie pro téma: Zobrazování onemocnění lymfatického systému.?",
                        "options": [
                              "Poskytuje detailní morfologické nebo funkční zobrazení patologických změn pro stanovení diagnózy a plánování léčby",
                              "Umožňuje kompletní vyléčení všech onemocnění bez nutnosti farmakoterapie",
                              "Slouží výhradně k archivaci snímků bez vlivu na klinické rozhodování",
                              "Nahrazuje laboratorní vyšetření krve a biochemickou analýzu"
                        ],
                        "correct": 0,
                        "explanation": "Zobrazovací metody v radiologii u tématu 'Zobrazování onemocnění lymfatického systému.' přinášejí klíčové informace o přesné lokalizaci, rozsahu a charakteru patologického procesu, což je nezbytné pro správné klinické rozhodování (konzervativní léčba, operabilita, sledování po léčbě)."
                  }
            ]
      }
];

const RADIOLOGY_MATCHING_PAIRS = [
      {
            "term": "Rentgenka",
            "desc": "Vakuová dioda, ve které dopadem urychlených elektronů na anodu vzniká RTG záření"
      },
      {
            "term": "Seldingerova metoda",
            "desc": "Technika punkce cévy pomocí jehly, vodiče a zavedení katétru nebo sheathu"
      },
      {
            "term": "Hounsfieldova jednotka",
            "desc": "Jednotka denzity v CT obraze vyjadřující míru zeslabení RTG záření tkání"
      },
      {
            "term": "Anechogenní",
            "desc": "Čistě černý obraz na ultrazvuku typický pro volnou tekutinu (moč, výpotek)"
      },
      {
            "term": "Flow-void fenomén",
            "desc": "Asignální (černý) stín v MRI sekvencích způsobený rychle proudící krví v cévách"
      },
      {
            "term": "ALARA",
            "desc": "Základní princip ochrany před zářením (dávka tak nízká, jak je rozumně dosažitelné)"
      },
      {
            "term": "Deterministický účinek",
            "desc": "Účinek záření vykazující prahovou dávku, pod kterou se neprojeví (např. dermatitida)"
      },
      {
            "term": "Stochastický účinek",
            "desc": "Bezprahový účinek záření, u něhož s dávkou stoupá pouze pravděpodobnost vzniku (nádor)"
      },
      {
            "term": "Gadolinium",
            "desc": "Paramagnetická kontrastní látka zkracující relaxační čas T1 v magnetické rezonanci"
      },
      {
            "term": "Atelektáza",
            "desc": "Nevzdušnost plicní tkáně s poklesem objemu, typicky provázená tahem mediastina na stranu léze"
      },
      {
            "term": "Kerleyho B linie",
            "desc": "Horizontální lineární stíny laterobazálně v plicích ukazující na intersticiální edém"
      },
      {
            "term": "Pneumoperitoneum",
            "desc": "Volný plyn v břišní dutině pod bránicí, typický pro perforaci dutého orgánu"
      }
];

window.DATA_RADIOLOGIE = DATA_RADIOLOGIE;
window.RADIOLOGY_MATCHING_PAIRS = RADIOLOGY_MATCHING_PAIRS;
