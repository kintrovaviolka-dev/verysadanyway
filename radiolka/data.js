/**
 * data.js - Databáze otázek pro studijní portál Radiologie & Zobrazovací Metody
 * Kompletně aktualizováno s plně strukturovaným klinickým výkladem, autentickým obrazovým materiálem a kvízy.
 */

window.DATA_RADIOLOGIE = [
  {
    "id": "radio-1",
    "title": "Princip rentgenky a RTG vyšetření",
    "section": "Obecná část a fyzika",
    "category": "Základy",
    "modalities": [
      "RTG",
      "Skiagrafie",
      "Skiaskopie"
    ],
    "keywords": [
      "rentgenka",
      "katoda",
      "anoda",
      "brzdné záření",
      "charakteristické záření",
      "termoemise",
      "skiagrafie",
      "skiaskopie",
      "PACS",
      "DICOM"
    ],
    "image": "images/textbook/fig_p007__R47.jpg",
    "images": [
      {
        "src": "images/textbook/fig_p007__R47.jpg",
        "title": "Schéma rentgenky a vznik RTG záření",
        "caption": "Schéma vakuové diody (rentgenky) s rotující wolframovou anodou a žhavenou katodou emitující elektrony.",
        "modality": "Schéma / Fyzika"
      }
    ],
    "content": {
      "principle": "<ul><li><strong>Teorie rentgenového záření a princip rentgenky:</strong></li><li>elektromagnetické záření - proud fotonů</li><li>nažhavením katody se uvolní elektrony, vysokým napětím mezi anodou a katodou jsou urychlovány a dopadají na anodu, kde vzniká vlastní rtg záření = primární záření</li><li><strong>Sekundární záření:</strong> vzniká při průchodu primárního záření hmotou beze změn → fotoefekt, Comptonův rozptyl</li><li><strong>Intenzita:</strong> hustota částic záření procházející jednotkovou plochou za 1 s; závisí na množství elektronů letící z anody na katodu</li><li><strong>RTG přístroje:</strong> rentgenka, generátor, ovladač, rtg nářadí a příslušenství, clony → digitální radiografie</li><li><strong>Složení rentgenky:</strong> vnitřní část (anoda a katoda), kryt, VN kabely</li><li><strong>Rentgenka:</strong> vysoce vakuová dioda s katodou (-) a anodou (+), ze skla; výstupní okénko (ztenčené místo, kde vychází rtg paprsky), z katody se uvolňují elektrony = termoemise → anodový proud (svazek letících elektronů z K na A) → ohnisko (místo dopadu e-)</li><li>Rentgenové záření z rentgenky = brzdné (vznik reakcí dopadajícího elektronu v okolí vlastního jádra atomů anody; jeho spektrum je spojité) + charakteristické záření (závisí na složení materiálu anody)</li><li><strong>Absorpce:</strong> závisí na tloušťce objektu, hustotě, atomovém čísle (vysoká hustota = světlejší; nízká hustota = tmavší) → rozdíl v absorpci je základ diagnostiky</li><li><strong>Vlastnosti rtg záření:</strong> ionizační, proniká hmotou, luminiscenční efekt, fotochemický e., biologický e., přenos informace zářením RTG obraz:</li><li>zdroj záření (rentgenka) + objekt (pacient) + film/luminiscenční plocha</li><li>z rentgenky vychází rentgenové paprsky → clonami zúžený na centrální paprsek</li><li>clony regulují primární svazek záření a velikost ozářené oblasti, zostřují výsledný obraz</li><li><strong>Skiagrafie:</strong> pořizování statických snímků. objekt co nejblíže k filmu, prvky s vysokým protonovým číslem (kosti), Projasnění = tmavé části, zastínění = světlé části; + (vysoké rozlišení, trvalá dokumentace, nízká dávka ozáření), - (pouze statický)</li></ul>",
      "methodology": "<ul><li><strong>Skiaskopie:</strong> dynamické vyšetření (GIT, katetrizace), kde to prošlo světlé, kde se vstřebalo tmavé; vysoké dávky s nižší kvalitou</li><li>Projekce dle směru centrálního paprsku → posteroanteriorní, anteroposteriorní, axiální, boční</li></ul>",
      "normal_anatomy": "<ul><li>Fyziologický obraz vyžaduje znalost normální radioanatomie, symetrie struktur a fyziologických denzit (CT) a signálových intenzit (MR).</li></ul>",
      "pathology": "<ul><li>čím větší je frekvence, tím kratší je vlnová délka a tím je větší kinetická energie</li><li>čím je objekt blíže k rentgence, tím bude větší zvětšení; pacient naléhá vyšetřovanou částí na úložnou desku</li><li>sumační vyšetření (všechna informace v jednom bodě → snímky se překrývají →dodělat více pohledů); 3D → 2D</li><li><strong>PACS:</strong> elektronické ukládání vyšetření na hard disky → vyhledávání obrazové dokumenta</li><li><strong>DICOM:</strong> univerzální systém pro zobrazení a distribuci medicínských obrázků</li></ul>",
      "clinical": "<ul><li>Pevná anoda (radioterapie), rotační anoda (rentgenový přístroj)</li></ul>",
      "key_points": "<ul><li><strong>Klíčová modalita:</strong> RTG, Skiagrafie, Skiaskopie.</li><li><strong>Hlavní diagnostický cíl:</strong> Včasné stanovení diagnózy, posouzení rozsahu a lokalizace patologie pro volbu adekvátní terapie.</li><li><strong>Zkušební perla:</strong> Vždy začínat méně invazivní dostupnou modalitou a respektovat kontraindikace (alergie na KL, renální insuficience, kardiostimulátory u MR).</li></ul>",
      "definition": "<ul><li><strong>Teorie rentgenového záření a princip rentgenky:</strong></li><li>elektromagnetické záření - proud fotonů</li><li>nažhavením katody se uvolní elektrony, vysokým napětím mezi anodou a katodou jsou urychlovány a dopadají na anodu, kde vzniká vlastní rtg záření = primární záření</li><li><strong>Sekundární záření:</strong> vzniká při průchodu primárního záření hmotou beze změn → fotoefekt, Comptonův rozptyl</li></ul>",
      "etiology": "<ul><li><strong>Skiaskopie:</strong> dynamické vyšetření (GIT, katetrizace), kde to prošlo světlé, kde se vstřebalo tmavé; vysoké dávky s nižší kvalitou</li><li>Projekce dle směru centrálního paprsku → posteroanteriorní, anteroposteriorní, axiální, boční</li></ul>",
      "pathogenesis": "<ul><li>Fyziologický obraz vyžaduje znalost normální radioanatomie, symetrie struktur a fyziologických denzit (CT) a signálových intenzit (MR).</li></ul>",
      "macroscopy": "<ul><li>čím větší je frekvence, tím kratší je vlnová délka a tím je větší kinetická energie</li><li>čím je objekt blíže k rentgence, tím bude větší zvětšení; pacient naléhá vyšetřovanou částí na úložnou desku</li><li>sumační vyšetření (všechna informace v jednom bodě → snímky se překrývají →dodělat více pohledů); 3D → 2D</li><li><strong>PACS:</strong> elektronické ukládání vyšetření na hard disky → vyhledávání obrazové dokumenta</li></ul>",
      "microscopy": "<ul><li><strong>DICOM:</strong> univerzální systém pro zobrazení a distribuci medicínských obrázků</li></ul>",
      "clinical_legacy": "<ul><li>Pevná anoda (radioterapie), rotační anoda (rentgenový přístroj)</li></ul>"
    },
    "quiz": [
      {
            "question": "Rentgenové záření vzniká v rentgence jako:",
            "options": [
                  "Brzdné záření (bremsstrahlung) + charakteristické záření při dopadu urychlených elektronů na anodu",
                  "Luminiscence fluorescenčního stínítka ozářeného světlem",
                  "Nukleární přeměna jader wolframu na jiný prvek",
                  "Piezoelektrický jev na krystalové desce anody"
            ],
            "correct": 0,
            "explanation": "RTG záření vzniká při dopadu urychlených elektronů na wolframovou anodu: brzdné záření (Bremsstrahlung) se spojitým spektrem a charakteristické záření závislé na materiálu anody. Světlo ani piezoelektrický jev RTG záření netvoří."
      },
      {
            "question": "Co znamená termín 'skiaskopie' a jak se liší od 'skiagrafie'?",
            "options": [
                  "Skiaskopie = dynamické RTG vyšetření v reálném čase (vyšší dávka); skiagrafie = statický snímek (nižší dávka)",
                  "Skiaskopie = zobrazení ultrazvukem; skiagrafie = rentgenový snímek",
                  "Jsou synonyma pro totéž vyšetření, liší se pouze polohou pacienta",
                  "Skiaskopie = CT sken; skiagrafie = RTG snímek"
            ],
            "correct": 0,
            "explanation": "Skiaskopie je dynamické RTG zobrazování v reálném čase (průsvitování) – indikována např. při pasáži GIT, katetrizaci; nevýhoda: vyšší radiační zátěž. Skiagrafie = statický snímek, nižší dávka, vyšší rozlišení."
      }
]
  },
  {
    "id": "radio-2",
    "title": "Negativní biologické účinky ionizujícího záření a radiační ochrana",
    "section": "Obecná část a fyzika",
    "category": "Základy",
    "modalities": [
      "Radiační ochrana",
      "ALARA"
    ],
    "keywords": [
      "stochastické účinky",
      "deterministické účinky",
      "ALARA",
      "sievert",
      "absorbovaná dávka",
      "efektivní dávka",
      "radiosenzitivita",
      "akutní radiační syndrom"
    ],
    "image": "images/anki/paste-d7d5eb34458b8b45e0d74d31575b2d9686f2be44.jpg",
    "images": [
      {
        "src": "images/anki/paste-d7d5eb34458b8b45e0d74d31575b2d9686f2be44.jpg",
        "title": "Základní fyzikální principy & Denzity tkání",
        "caption": "Škála denzit tkání podle absorpce záření v radiologii od plynu (-1000 HU) přes vodu (0 HU) až po kost (+1000 HU).",
        "modality": "Fyzika / HU"
      }
    ],
    "content": {
      "principle": "<ul><li>ionizující záření = záření schopno ionizovat atomy molekul → vytváření agresivních radikálů, které negativně působí na biologické struktury</li><li>Ionizující záření se používá hlavně k léčení maligních nádorů, protože jsou na něj v organismu nejcitlivější nediferencované aktivně se dělící buňky</li><li><strong>Fyzikální fáze:</strong> absorpci energie dopadajícího záření atomy a molekulami.</li><li><strong>Fyzikálně-chemická fáze:</strong> spočívá v mezimolekulárních interakcích spojených s přijetím energie záření molekulami a atomy</li><li><strong>Biochemická fáze:</strong> zahajuje tvorba chemických radikálů, které působí na nukleové kyseliny a bílkoviny buněk organismu</li><li><strong>Biologická fáze:</strong> zahrnuje řadu reakcí produktů vytvořených během předchozích fází s biologickým materiálem na úrovni jeho intracelulárních struktur, buněk, tkání, orgánů i celého organismu.</li><li><strong>Přímé účinky:</strong> absorpci energie záření uvnitř jádra buňky → změny v chemických vazbách molekul, které mají význam pro metabolismus a genetiku buněk. Můžou způsobit i rozpad zasažených molekul. → zlomy molekul DNA, části řetězců, mitotické účinky → smrt buňky</li><li><strong>Deterministické účinky záření:</strong> zánik buněk, k čemuž je nutná určitá hodnota záření → dokonalou ochranou se lze vyhnout; např. akutní dermatitida, akutní nemoc z ozáření</li><li><strong>Stochastický účinek:</strong> projevují se až za mnoho let → nádorová onemocnění; nemá práh (i jeden foton může poškodit DNA) Radiační ochrana</li><li>vyloučit deterministické a stochastické účinky ionizujícího záření</li><li>největší zdroj ozáření je medicína (CT nejvíce 10 mSv/jeden snímek)</li><li><strong>Zásady:</strong> časem (co nejkratší dobu), Vzdáleností, ochranné osobní pomůcky, stínění (materiály s vysokým protonovým číslem - Pb, Wo, Ba)</li><li><strong>Limity:</strong> 1 ms/rok; dávky z přírodního ozáření - 3 mSv/rok (radon, kosmické záření)</li><li>lékařské x profesní ozáření</li></ul>",
      "methodology": "<ul><li>Metodika a technické provedení vyšetření u tématu <strong>Negativní biologické účinky ionizujícího záření a radiační ochrana</strong> volí optimální projekce, kontrastní fáze a nastavení zobrazení pro maximální diagnostickou výtěžnost.</li></ul>",
      "normal_anatomy": "<ul><li><strong>Nepřímý účinek:</strong> radiolýza vody, při níž dochází ke vzniku volných radikálů H* a OH*. → jednak spojují a vytvářejí O2, H2 a H2O2, které interagují s buněčnými strukturami, jednak působí na vazby v molekulách a narušují jejich prostorovou strukturu, což vede k poškození jejich biologické funkce.</li></ul>",
      "pathology": "<ul><li>spočívá v jeho interakci s elektronovým obalem atomů, které organismus tvoří</li><li>Biologické účinky</li><li><strong>Nejcitlivější:</strong> lymfatické uzliny, ery, sliznice tenkého i tlustého střeva, čočka, mužský pohlavní epitel</li><li>dozimetry na pracovištích (limity na pracovištích 20 mSv/rok)</li><li>dávka se kumuluje s věkem</li><li>Přínos vyšetření musí přesahovat rizika</li></ul>",
      "clinical": "<ul><li>dozimetry na pracovištích (limity na pracovištích 20 mSv/rok)</li><li><strong>Zásady:</strong> časem (co nejkratší dobu), Vzdáleností, ochranné osobní pomůcky, stínění (materiály s vysokým protonovým číslem - Pb, Wo, Ba)</li><li>dávka se kumuluje s věkem</li><li><strong>Limity:</strong> 1 ms/rok; dávky z přírodního ozáření - 3 mSv/rok (radon, kosmické záření)</li><li>Přínos vyšetření musí přesahovat rizika</li><li>lékařské x profesní ozáření</li></ul>",
      "key_points": "<ul><li><strong>Klíčová modalita:</strong> Radiační ochrana, ALARA.</li><li><strong>Hlavní diagnostický cíl:</strong> Včasné stanovení diagnózy, posouzení rozsahu a lokalizace patologie pro volbu adekvátní terapie.</li><li><strong>Zkušební perla:</strong> Vždy začínat méně invazivní dostupnou modalitou a respektovat kontraindikace (alergie na KL, renální insuficience, kardiostimulátory u MR).</li></ul>",
      "definition": "<ul><li>ionizující záření = záření schopno ionizovat atomy molekul → vytváření agresivních radikálů, které negativně působí na biologické struktury</li><li>Ionizující záření se používá hlavně k léčení maligních nádorů, protože jsou na něj v organismu nejcitlivější nediferencované aktivně se dělící buňky</li><li><strong>Fyzikální fáze:</strong> absorpci energie dopadajícího záření atomy a molekulami.</li><li><strong>Fyzikálně-chemická fáze:</strong> spočívá v mezimolekulárních interakcích spojených s přijetím energie záření molekulami a atomy</li></ul>",
      "etiology": "<ul><li>Metodika a technické provedení vyšetření u tématu <strong>Negativní biologické účinky ionizujícího záření a radiační ochrana</strong> volí optimální projekce, kontrastní fáze a nastavení zobrazení pro maximální diagnostickou výtěžnost.</li></ul>",
      "pathogenesis": "<ul><li><strong>Nepřímý účinek:</strong> radiolýza vody, při níž dochází ke vzniku volných radikálů H* a OH*. → jednak spojují a vytvářejí O2, H2 a H2O2, které interagují s buněčnými strukturami, jednak působí na vazby v molekulách a narušují jejich prostorovou strukturu, což vede k poškození jejich biologické funkce.</li></ul>",
      "macroscopy": "<ul><li>spočívá v jeho interakci s elektronovým obalem atomů, které organismus tvoří</li><li>Biologické účinky</li><li><strong>Nejcitlivější:</strong> lymfatické uzliny, ery, sliznice tenkého i tlustého střeva, čočka, mužský pohlavní epitel</li><li>dozimetry na pracovištích (limity na pracovištích 20 mSv/rok)</li></ul>",
      "microscopy": "<ul><li>dávka se kumuluje s věkem</li><li>Přínos vyšetření musí přesahovat rizika</li></ul>",
      "clinical_legacy": "<ul><li>dozimetry na pracovištích (limity na pracovištích 20 mSv/rok)</li><li><strong>Zásady:</strong> časem (co nejkratší dobu), Vzdáleností, ochranné osobní pomůcky, stínění (materiály s vysokým protonovým číslem - Pb, Wo, Ba)</li><li>dávka se kumuluje s věkem</li><li><strong>Limity:</strong> 1 ms/rok; dávky z přírodního ozáření - 3 mSv/rok (radon, kosmické záření)</li><li>Přínos vyšetření musí přesahovat rizika</li><li>lékařské x profesní ozáření</li></ul>"
    },
    "quiz": [
      {
            "question": "Jaký je rozdíl mezi stochastickými a deterministickými účinky ionizujícího záření?",
            "options": [
                  "Stochastické (nádory, mutace) nemají prahovou dávku; deterministické (radiační syndrom, katarakta) mají prahovou dávku",
                  "Stochastické jsou okamžité; deterministické nastupují s latencí desítek let",
                  "Deterministické jsou způsobeny alfa zářením; stochastické beta zářením",
                  "Rozdíl je pouze ve věku pacienta při ozáření, ne v dávce"
            ],
            "correct": 0,
            "explanation": "Stochastické účinky (karcinom, dědičné mutace) jsou náhodné, bez prahové dávky – pravděpodobnost roste s dávkou. Deterministické (akutní radiační syndrom, katarakta oční čočky) mají prahovou dávku, nad níž jsou jisté."
      },
      {
            "question": "Princip ALARA v radiační ochraně znamená:",
            "options": [
                  "As Low As Reasonably Achievable – minimalizovat dávku při zachování diagnostické kvality",
                  "Always Large Area Radiographic Acquisition – maximální pokrytí pole",
                  "Automated Linear Attenuation Ratio Algorithm – algoritmus CT rekonstrukce",
                  "Accelerated Low-Amplitude Radiation Adjustment – způsob kalibrace přístroje"
            ],
            "correct": 0,
            "explanation": "ALARA (As Low As Reasonably Achievable) je základní princip radiační ochrany: dávku pacientovi i personálu minimalizujeme na nejnižší rozumně dosažitelnou úroveň bez kompromisu diagnostické výtěžnosti."
      }
]
  },
  {
    "id": "radio-3",
    "title": "Princip ultrasonografického vyšetření (UZ)",
    "section": "Obecná část a fyzika",
    "category": "Základy",
    "modalities": [
      "UZ",
      "Doppler"
    ],
    "keywords": [
      "piezoelektrický jev",
      "akustická impedance",
      "echogenita",
      "Dopplerův jev",
      "barevný doppler",
      "spektrální doppler",
      "konvexní sonda",
      "lineární sonda"
    ],
    "image": "images/textbook/fig_p010__R61.jpg",
    "images": [
      {
        "src": "images/textbook/fig_p010__R61.jpg",
        "title": "Princip ultrazvuku a piezoelektrického měniče",
        "caption": "Generování a detekce ultrazvukových vln pomocí piezoelektrického krystalu a šíření akustického vlnění v tkáních.",
        "modality": "UZ / Fyzika"
      }
    ],
    "content": {
      "principle": "<ul><li>nejdůležitější neionizující metoda, která nepoškozuje zdraví a můžeme ji libovolně opakovat</li><li>ze speciální sondy je vysílání podélné mechanické vlnění (f > 20000Hz) do lidského těla, tam odráženy zpět</li><li>Podélný (sagitální) obraz - z pravé strany pacienta</li><li><strong>Interakce UZ s hmotou:</strong> 1. odraz (reflexe - největší vzduch-tuk → dát na kůži gel) 2.</li><li><strong>Akustické okno:</strong> tkáně, které kladou malý odpor → lze přes ně zobrazit jednotlivé struktury</li><li><strong>UZ přístroj:</strong> diagnostický x terapeutický →vyšetřovací sonda, centrální elektrická část, zobrazovací a dokumentační část</li><li><strong>Sondy:</strong> lineární (pravoúhlý obraz - dobré prostorové rozlišení), sektorová (malé akustické okno), konvexní (zobrazení břicha)</li><li>dvojrozměrná tomografie orgánu - tmavé a světlé body na obrazovce odpovídající echogenitě tkáně), Dynamické zobrazení (B obrazy rychle za sebou), M typ (odrážejí od pohyblivých částí např. srdce)</li><li><strong>Dopplerovská ultrasonografie:</strong> frekvence jakéhokoliv vlnění se mění při odrazu od pohybujícího se objektu (hl. ery) → barevní, spektrální, akustický</li><li><strong>Duplexní sonografie:</strong> dvojrozměrného dynamického zobrazení a impulsního dopplerovského měření rychlosti. Obraz barevné duplexní ultrasonografie je složen ze dvou částí - černobílé a barevné. Černobílá část obsahuje morfologickou informaci a barevná informaci o pohybu ve sledovaném řezu</li></ul>",
      "methodology": "<ul><li>Metodika a technické provedení vyšetření u tématu <strong>Princip ultrasonografického vyšetření (UZ)</strong> volí optimální projekce, kontrastní fáze a nastavení zobrazení pro maximální diagnostickou výtěžnost.</li></ul>",
      "normal_anatomy": "<ul><li>akustická impedance - na hranici dvou tkání dochází k odrazu</li><li><strong>Akustický stín:</strong> černý pruh za kostmi, konkrementy, vzduchem v trávicí trubici, aterosklerotickými pláty</li></ul>",
      "pathology": "<ul><li><strong>Vyšetření:</strong> měkké tkáně, parenchymatózní orgány (ty co mají hodně vody) - ve vakuu vlny neprocházejí</li><li>Příčný (transverzální) obraz - odspod (od nohou pacienta)</li><li>čím je frekvence vlnění větší, tím je lepší prostorové rozlišení, ale méně proniká do hloubky lidského těla (břicho - 3 Hz; štítná žláza - 15 Hz)</li><li>lom 3. útlum</li><li><strong>Hodnotíme echogenitu:</strong> Hyperechogenní (světlé - tuk, solidní tkáň z vaziva, bránice, nekróza, hypervaskularizované tumory), Hypoechogenní (tmavé - cysty s obsahem, kontuze, ischemie, primární nádory, metastázy), Anechogenní (černé - neodráží vůbec - krev, moč, žluč, likvor, výpotek, ascites, prosté cysty)</li><li><strong>Akustické zesílení:</strong> kuželovité projasnění</li><li><strong>Typy zobrazení:</strong> A typ (amplituda - šířka amplitudy od odrazové plochy), typ B (jas</li><li>Abdominální ultrasonografie, UZ měkkých tkání, echokardiografie, echoencefalografie, endosonografie</li></ul>",
      "clinical": "<ul><li><strong>Typy zobrazení:</strong> A typ (amplituda - šířka amplitudy od odrazové plochy), typ B (jas</li><li>dvojrozměrná tomografie orgánu - tmavé a světlé body na obrazovce odpovídající echogenitě tkáně), Dynamické zobrazení (B obrazy rychle za sebou), M typ (odrážejí od pohyblivých částí např. srdce)</li><li><strong>Dopplerovská ultrasonografie:</strong> frekvence jakéhokoliv vlnění se mění při odrazu od pohybujícího se objektu (hl. ery) → barevní, spektrální, akustický</li><li><strong>Duplexní sonografie:</strong> dvojrozměrného dynamického zobrazení a impulsního dopplerovského měření rychlosti. Obraz barevné duplexní ultrasonografie je složen ze dvou částí - černobílé a barevné. Černobílá část obsahuje morfologickou informaci a barevná informaci o pohybu ve sledovaném řezu</li><li>Abdominální ultrasonografie, UZ měkkých tkání, echokardiografie, echoencefalografie, endosonografie</li></ul>",
      "key_points": "<ul><li><strong>Klíčová modalita:</strong> UZ, Doppler.</li><li><strong>Hlavní diagnostický cíl:</strong> Včasné stanovení diagnózy, posouzení rozsahu a lokalizace patologie pro volbu adekvátní terapie.</li><li><strong>Zkušební perla:</strong> Vždy začínat méně invazivní dostupnou modalitou a respektovat kontraindikace (alergie na KL, renální insuficience, kardiostimulátory u MR).</li></ul>",
      "definition": "<ul><li>nejdůležitější neionizující metoda, která nepoškozuje zdraví a můžeme ji libovolně opakovat</li><li>ze speciální sondy je vysílání podélné mechanické vlnění (f > 20000Hz) do lidského těla, tam odráženy zpět</li><li>Podélný (sagitální) obraz - z pravé strany pacienta</li><li><strong>Interakce UZ s hmotou:</strong> 1. odraz (reflexe - největší vzduch-tuk → dát na kůži gel) 2.</li></ul>",
      "etiology": "<ul><li>Metodika a technické provedení vyšetření u tématu <strong>Princip ultrasonografického vyšetření (UZ)</strong> volí optimální projekce, kontrastní fáze a nastavení zobrazení pro maximální diagnostickou výtěžnost.</li></ul>",
      "pathogenesis": "<ul><li>akustická impedance - na hranici dvou tkání dochází k odrazu</li><li><strong>Akustický stín:</strong> černý pruh za kostmi, konkrementy, vzduchem v trávicí trubici, aterosklerotickými pláty</li></ul>",
      "macroscopy": "<ul><li><strong>Vyšetření:</strong> měkké tkáně, parenchymatózní orgány (ty co mají hodně vody) - ve vakuu vlny neprocházejí</li><li>Příčný (transverzální) obraz - odspod (od nohou pacienta)</li><li>čím je frekvence vlnění větší, tím je lepší prostorové rozlišení, ale méně proniká do hloubky lidského těla (břicho - 3 Hz; štítná žláza - 15 Hz)</li><li>lom 3. útlum</li></ul>",
      "microscopy": "<ul><li><strong>Hodnotíme echogenitu:</strong> Hyperechogenní (světlé - tuk, solidní tkáň z vaziva, bránice, nekróza, hypervaskularizované tumory), Hypoechogenní (tmavé - cysty s obsahem, kontuze, ischemie, primární nádory, metastázy), Anechogenní (černé - neodráží vůbec - krev, moč, žluč, likvor, výpotek, ascites, prosté cysty)</li><li><strong>Akustické zesílení:</strong> kuželovité projasnění</li><li><strong>Typy zobrazení:</strong> A typ (amplituda - šířka amplitudy od odrazové plochy), typ B (jas</li><li>Abdominální ultrasonografie, UZ měkkých tkání, echokardiografie, echoencefalografie, endosonografie</li></ul>",
      "clinical_legacy": "<ul><li><strong>Typy zobrazení:</strong> A typ (amplituda - šířka amplitudy od odrazové plochy), typ B (jas</li><li>dvojrozměrná tomografie orgánu - tmavé a světlé body na obrazovce odpovídající echogenitě tkáně), Dynamické zobrazení (B obrazy rychle za sebou), M typ (odrážejí od pohyblivých částí např. srdce)</li><li><strong>Dopplerovská ultrasonografie:</strong> frekvence jakéhokoliv vlnění se mění při odrazu od pohybujícího se objektu (hl. ery) → barevní, spektrální, akustický</li><li><strong>Duplexní sonografie:</strong> dvojrozměrného dynamického zobrazení a impulsního dopplerovského měření rychlosti. Obraz barevné duplexní ultrasonografie je složen ze dvou částí - černobílé a barevné. Černobílá část obsahuje morfologickou informaci a barevná informaci o pohybu ve sledovaném řezu</li><li>Abdominální ultrasonografie, UZ měkkých tkání, echokardiografie, echoencefalografie, endosonografie</li></ul>"
    },
    "quiz": [
      {
            "question": "Piezoelektrický jev v UZ sondě zajišťuje:",
            "options": [
                  "Přeměnu elektrického pulzu na mechanické ultrazvukové vlny a zpět (echo → elektrický signál)",
                  "Zesílení RTG záření před dopadem na detektor",
                  "Generaci magnetického pole pro excitaci protonů v MR",
                  "Fokusaci RTG svazku pomocí wolframových lamel"
            ],
            "correct": 0,
            "explanation": "Piezoelektrický krystal v sondě při elektrickém pulzu vibruje a vysílá US vlny. Odražené echo způsobí vibraci krystalu → elektrický signál → obraz. Tento jev je fyzikálním základem ultrasonografie."
      },
      {
            "question": "Dopplerovský princip v ultrasonografii zobrazuje:",
            "options": [
                  "Rychlost a směr pohybu krve (erytrocytů) jako frekvenční posun odraženého signálu",
                  "Tloušťku cévní stěny měřením doby návratu echa",
                  "Vaskularizaci tkáně pomocí radioizotopu",
                  "Průtok kontrastu v CTA rekonstrukci"
            ],
            "correct": 0,
            "explanation": "Dopplerův efekt: pohybující se erytrocyty mění frekvenci odraženého US signálu. Barevný Doppler kóduje směr průtoku barvou (červená = k sondě, modrá = od sondy), PWD měří rychlost."
      }
]
  },
  {
    "id": "radio-4",
    "title": "Princip výpočetní tomografie (CT)",
    "section": "Obecná část a fyzika",
    "category": "Základy",
    "modalities": [
      "CT",
      "HRCT",
      "CTA"
    ],
    "keywords": [
      "Hounsfieldovy jednotky",
      "gantry",
      "spirální CT",
      "multidetektorové CT",
      "filtrace",
      "okénkování",
      "rekonstrukce",
      "kontrastní látka",
      "radiační zátěž"
    ],
    "image": "images/anki/paste-d7d5eb34458b8b45e0d74d31575b2d9686f2be44.jpg",
    "images": [
      {
        "src": "images/anki/paste-d7d5eb34458b8b45e0d74d31575b2d9686f2be44.jpg",
        "title": "Hounsfieldova stupnice denzit na CT (HU)",
        "caption": "Škála denzit v Hounsfieldových jednotkách: Vzduch (-1000 HU), Tuk (-100 až -50 HU), Voda (0 HU), Měkké tkáně (+30 až +60 HU), Kompaktní kost (+1000 HU).",
        "modality": "CT"
      },
      {
        "src": "images/textbook/fig_p011__R71.jpg",
        "title": "Schéma multidetektorového spirálního CT",
        "caption": "Rotace rentgenky a oblouku polovodičových detektorů v gantry současně s plynulým posunem stolu pacienta.",
        "modality": "CT Schéma"
      }
    ],
    "content": {
      "principle": "<ul><li>RTG záření prochází pacientem, částečně se absorbuje a dopadá na soustavu detektorů → mění se na elektrický proud → digitalizace a rekonstrukce do anatomického obrazu</li><li>rentgenka emituje úzký svazek záření ve tvaru vějíře + společně se soustavou detektorů rotuje kolem pacienta v protisměru → kvantum měření absorpce z mnoha úhlů ve zvolené axiální rovině</li><li><strong>Obrazové parametry:</strong> šířka vrstvy (měníme podle zobrazované části)</li><li>základní požadavek radiační hygieny = ALARA (as low as reasonably achievable)</li><li>Hodnoty absorpce - denzity - v jednotkách HU (Hounsfield unit)</li><li><strong>CT přístroj:</strong> Gantry (tunel), Řídící a zobrazovací počítač, detektory, pohyb stolu umožní vyšetřit 170 cm délky</li><li><strong>Kontrastní CT:</strong> perorální, intravenózní, intratekální</li><li><strong>Dynamická aplikace KL:</strong> arteriální fáze (20-30s), venózní (30-45s), parenchymatózní (70s), pozdní (za několik minut od aplikace KL)</li></ul>",
      "methodology": "<ul><li><strong>Postprocessingové metody:</strong> základní obraz v axiální rovině → lze upravovat a získávat další informace → Multiplanární rekonstrukce (obraz v sagitálním a koronárním řezu ), MIP (zvýraznění struktur s vyšší denzitou), MinIP (zvýraznění struktur s nejmenší denzitou - plicní parenchym), Volume rendering technic (rychlé vyhledávání patologických nálezů → 3D model), Virtuální endoskopie (zobrazení lumen dutých orgánů)</li><li><strong>CT angiografie:</strong> prekontrastní a postkontrastní sken; KL intravenózně → plicní oběh → srdce → aorta → periferie = bolus timing a bolus tracking</li><li><strong>Indikace CT angiografie:</strong> diagnostika nádorů a zánětů střeva</li><li><strong>HRCT:</strong> speciální podtyp CT, který se používá prakticky výhradně při vyšetřování plicní tkáně, nepodává se při něm kontrastní látka. Přístroj při HRCT vytváří velmi tenké „řezy“ plicní tkání a vzniklý obraz je dále počítačově rekonstruován, takže je velmi detailní</li></ul>",
      "normal_anatomy": "<ul><li>lidské oko rozliší 16-20 odstínů šedi, tam je 4000</li></ul>",
      "pathology": "<ul><li>z řady získaných údajů se rekonstruuje číselnou síť = matice</li><li>z hrubých dat můžeme provést zpětnou rekonstrukci</li><li>není vhodné bezdůvodné opakování CT vyšetření</li><li>Hypodenzní = tmavé, hyperdenzní = světlé</li><li>většina biologických tkáních v rozmezí -100 až 100 → upravit do určitého úseku = okna (kostní, mediastinální, plicní,...)</li><li>Hybridní systém SPECT/CT nebo PET/CT - radiofarmakum fluorodeoxyglukóza (18 FDG)</li></ul>",
      "clinical": "<ul><li>minimum kontraindikací, rychlé, radiační zátěž</li></ul>",
      "key_points": "<ul><li><strong>Klíčová modalita:</strong> CT, HRCT, CTA.</li><li><strong>Hlavní diagnostický cíl:</strong> Včasné stanovení diagnózy, posouzení rozsahu a lokalizace patologie pro volbu adekvátní terapie.</li><li><strong>Zkušební perla:</strong> Vždy začínat méně invazivní dostupnou modalitou a respektovat kontraindikace (alergie na KL, renální insuficience, kardiostimulátory u MR).</li></ul>",
      "definition": "<ul><li>RTG záření prochází pacientem, částečně se absorbuje a dopadá na soustavu detektorů → mění se na elektrický proud → digitalizace a rekonstrukce do anatomického obrazu</li><li>rentgenka emituje úzký svazek záření ve tvaru vějíře + společně se soustavou detektorů rotuje kolem pacienta v protisměru → kvantum měření absorpce z mnoha úhlů ve zvolené axiální rovině</li><li><strong>Obrazové parametry:</strong> šířka vrstvy (měníme podle zobrazované části)</li><li>základní požadavek radiační hygieny = ALARA (as low as reasonably achievable)</li></ul>",
      "etiology": "<ul><li><strong>Postprocessingové metody:</strong> základní obraz v axiální rovině → lze upravovat a získávat další informace → Multiplanární rekonstrukce (obraz v sagitálním a koronárním řezu ), MIP (zvýraznění struktur s vyšší denzitou), MinIP (zvýraznění struktur s nejmenší denzitou - plicní parenchym), Volume rendering technic (rychlé vyhledávání patologických nálezů → 3D model), Virtuální endoskopie (zobrazení lumen dutých orgánů)</li><li><strong>CT angiografie:</strong> prekontrastní a postkontrastní sken; KL intravenózně → plicní oběh → srdce → aorta → periferie = bolus timing a bolus tracking</li><li><strong>Indikace CT angiografie:</strong> diagnostika nádorů a zánětů střeva</li><li><strong>HRCT:</strong> speciální podtyp CT, který se používá prakticky výhradně při vyšetřování plicní tkáně, nepodává se při něm kontrastní látka. Přístroj při HRCT vytváří velmi tenké „řezy“ plicní tkání a vzniklý obraz je dále počítačově rekonstruován, takže je velmi detailní</li></ul>",
      "pathogenesis": "<ul><li>lidské oko rozliší 16-20 odstínů šedi, tam je 4000</li></ul>",
      "macroscopy": "<ul><li>z řady získaných údajů se rekonstruuje číselnou síť = matice</li><li>z hrubých dat můžeme provést zpětnou rekonstrukci</li><li>není vhodné bezdůvodné opakování CT vyšetření</li><li>Hypodenzní = tmavé, hyperdenzní = světlé</li></ul>",
      "microscopy": "<ul><li>většina biologických tkáních v rozmezí -100 až 100 → upravit do určitého úseku = okna (kostní, mediastinální, plicní,...)</li><li>Hybridní systém SPECT/CT nebo PET/CT - radiofarmakum fluorodeoxyglukóza (18 FDG)</li></ul>",
      "clinical_legacy": "<ul><li>minimum kontraindikací, rychlé, radiační zátěž</li></ul>"
    },
    "quiz": [
      {
            "question": "Hounsfieldova jednotka (HU) na CT vyjadřuje:",
            "options": [
                  "Lineární atenuační koeficient tkáně vztažený k vodě (HU vody = 0, vzduchu = −1000)",
                  "Sílu magnetického pole potřebnou k excitaci protonů v dané tkáni",
                  "Amplitudu odraženého ultrazvukového echa",
                  "Počet gama fotonů zachycených scintilátorem za sekundu"
            ],
            "correct": 0,
            "explanation": "HU (Hounsfieldovy jednotky) vyjadřují míru absorpce RTG záření: vzduch = −1000 HU, voda = 0 HU, krev cca 55 HU, kost >400 HU. Jsou základem pro 'okénkování' (window/level) CT obrazu."
      },
      {
            "question": "Spirální (helikální) CT s více detektorovými řadami (MDCT) oproti klasickému CT umožňuje:",
            "options": [
                  "Akvizici celého objemu během jednoho nádechu s možností multiplanární rekonstrukce (MPR, 3D)",
                  "Vyšetření bez ionizujícího záření za cenu nižšího rozlišení",
                  "Přímé zobrazení spinových relaxačních časů T1 a T2",
                  "Zobrazení průtoku bez nutnosti kontrastní látky"
            ],
            "correct": 0,
            "explanation": "MDCT snímá izotropní volumetrická data v průběhu jednoho nádechu. Z nich lze rekonstruovat axiální, koronální, sagitální řezy i 3D/VRT zobrazení. Výhoda: rychlost, eliminace pohybových artefaktů, CTA."
      }
]
  },
  {
    "id": "radio-5",
    "title": "Princip magnetické rezonance (MR)",
    "section": "Obecná část a fyzika",
    "category": "Základy",
    "modalities": [
      "MR",
      "T1",
      "T2",
      "FLAIR",
      "DWI"
    ],
    "keywords": [
      "precese",
      "Larmorova frekvence",
      "T1 relaxace",
      "T2 relaxace",
      "FLAIR",
      "DWI",
      "kontraindikace MR",
      "gadolinium",
      "vodiče",
      "kardiostimulátor"
    ],
    "image": "images/textbook/fig_p013__R81.jpg",
    "images": [
      {
        "src": "images/textbook/fig_p013__R81.jpg",
        "title": "Princip magnetické rezonance a relaxace protonů",
        "caption": "Orientace spinů vodíkových protonů v magnetickém poli B0, radiofrekvenční excitace a návrat do rovnováhy (T1 a T2 relaxace).",
        "modality": "MR Schéma"
      },
      {
        "src": "images/anki/paste-e641091bbe0f40394e16e595380f904c3dcbe3a8.jpg",
        "title": "Srovnání CT a MR v diagnostice CNS",
        "caption": "Výhody a limitace CT vs. MR: CT exceluje v rychlosti a detekci akutního krvácení a kostí; MR má vynikající tkáňový kontrast pro měkké tkáně a časnou ischemii.",
        "modality": "CT vs MR"
      }
    ],
    "content": {
      "principle": "<ul><li><strong>Klady:</strong> podrobné zobrazení měkkých tkání, vyšetření ve třech rovinách, zobrazení mozkových tepen bez kontrastu, neionizující typ vyšetření</li><li>vektor = fyzikální veličina určující velikost, směr a počátek působení magnetického pole</li><li>v okolí elektrického pole vzniká magnetické pole = magnetický moment</li><li>dáme protony do statického magnetické pole (B0) → uspořádání protonů rovnoběžně se siločárami B0 → intenzita tohoto pole je vyjádřena v teslách (nejpoužívanější je 1,5 T)</li><li>vysokofrekvenčním elektromagnetickým impulsem (B1) změníme uspořádání protonů → magnetický moment bude mít jiný směr (to detekujeme) → excitace (protony s vyšší energií se vychýlí o 90-180°)</li><li>frekvence musí odpovídat Larmorově rovnici → celé to je rezonance</li><li>Vypneme B1 → protony se vrací do původní polohy = relaxace → energii, kterou proton vydá ve formě elektromagnetického záření, se pohlcuje v okolních tkáních → převádí se z povrchu těla do cívky → vznik elektrického proudu (ten se měří) → echo (příjem signálu magnetického momentu v relaxaci) lokalizujeme polohu jednotlivých protonů v trojrozměrném prostoru</li><li><strong>Tvorba obrazu:</strong> počet protonů vodíku a magnetická susceptibilita (schopnost tkáně stát se magnetickou - feromagnetické, paramagnetické, diamagnetické látky)</li><li><strong>MR sekvence:</strong> T1 T2 tekutiny (likvor, moč, žluč, edém) hyposignální = hypersignální tmavá tuk hypersignální = bílý izosignální solidní tkáň lehce hypersignální hyposignální kalcifikace, kompakta, proudící krev asignální asignální</li><li>PD - proton denzitorní obraz → součást T2, zobrazení muskuloskeletálního systému + potlačení tuku</li><li><strong>FLAIR:</strong> potlačení vody (likvor a jiné tekutiny asignální nebo hyposignální, ale patologická ložiska zůstanou hypersignální)</li><li><strong>Funkční MR mozku:</strong> průkaz funkční místa v mozkové tkáni</li><li><strong>Biologické účinky:</strong> elektromagnetické pole, gravidita, přítomnost ferromagnetických materiálů, vliv hluku a klaustrofobie</li><li><strong>Absolutní KI:</strong> kardiostimulátor, elektronicky řízené implantáty, cévní svorky z ferromagnetického materiálu, kovová tělesa v oku</li></ul>",
      "methodology": "<ul><li><strong>Vyšetřovací postupy:</strong> rozdíl v intenzitě signálu = rozdíl stupně šedi</li><li>Gadolinium = základní kontrastní látka</li></ul>",
      "normal_anatomy": "<ul><li>pacient je uložen do velmi silného magnetického pole → vyslán krátký radiofrekvenční impuls → po jeho skončení se snímá magnetický signál vytvořen jádry atomů vodíku v pacientově těle</li><li>Frekvence precesního pohybu závisí na velikosti statického pole → frekvence B0 musí odpovídat frekvencí rotujících spinů v zobrazované rovině</li></ul>",
      "pathology": "<ul><li><strong>Teorie:</strong></li><li>kladně nabité protony rotují kolem své dlouhé osy = spin</li><li>vodíkové jádro tvoří jen jeden proton (asi ve ⅔ lidské tkáně je vodík) → umístěny náhodile, jejich magnetické momenty se navzájem ruší → navenek magnetické pole rovno nule</li><li>Rotační pohyb magnetického pole v rovině po obvodu kužele = precese (dětská káča)</li><li>hromadíme do určité plochy</li><li>excitační impulzy se opakují mezi jednotlivými relaxacemi → sekvence</li><li>hyposignální = hypointenzivní = tmavší</li><li>hypersignální = hyperintenzivní = světlejší</li><li>tekoucí krev nevydává na základních sekvencích žádný signál = asignální = flow-void fenomén (vyprázdněný tok)</li><li><strong>STIR:</strong> potlačení tuku (bude černý)</li><li><strong>Mozková difuze a perfuze:</strong> časný průkaz mozkové ischemie (20 minut po jejím vzniku) - na podkladě pohybu molekul vody (prosté difuze)</li></ul>",
      "clinical": "<ul><li><strong>Relativní KI:</strong>TEP, stenty, svorky, klaustrofobie, první trimestr gravidity, kovová cizí tělesa, tetování</li></ul>",
      "key_points": "<ul><li><strong>Klíčová modalita:</strong> MR, T1, T2, FLAIR, DWI.</li><li><strong>Hlavní diagnostický cíl:</strong> Včasné stanovení diagnózy, posouzení rozsahu a lokalizace patologie pro volbu adekvátní terapie.</li><li><strong>Zkušební perla:</strong> Vždy začínat méně invazivní dostupnou modalitou a respektovat kontraindikace (alergie na KL, renální insuficience, kardiostimulátory u MR).</li></ul>",
      "definition": "<ul><li><strong>Klady:</strong> podrobné zobrazení měkkých tkání, vyšetření ve třech rovinách, zobrazení mozkových tepen bez kontrastu, neionizující typ vyšetření</li><li>vektor = fyzikální veličina určující velikost, směr a počátek působení magnetického pole</li><li>v okolí elektrického pole vzniká magnetické pole = magnetický moment</li><li>dáme protony do statického magnetické pole (B0) → uspořádání protonů rovnoběžně se siločárami B0 → intenzita tohoto pole je vyjádřena v teslách (nejpoužívanější je 1,5 T)</li></ul>",
      "etiology": "<ul><li><strong>Vyšetřovací postupy:</strong> rozdíl v intenzitě signálu = rozdíl stupně šedi</li><li>Gadolinium = základní kontrastní látka</li></ul>",
      "pathogenesis": "<ul><li>pacient je uložen do velmi silného magnetického pole → vyslán krátký radiofrekvenční impuls → po jeho skončení se snímá magnetický signál vytvořen jádry atomů vodíku v pacientově těle</li><li>Frekvence precesního pohybu závisí na velikosti statického pole → frekvence B0 musí odpovídat frekvencí rotujících spinů v zobrazované rovině</li></ul>",
      "macroscopy": "<ul><li><strong>Teorie:</strong></li><li>kladně nabité protony rotují kolem své dlouhé osy = spin</li><li>vodíkové jádro tvoří jen jeden proton (asi ve ⅔ lidské tkáně je vodík) → umístěny náhodile, jejich magnetické momenty se navzájem ruší → navenek magnetické pole rovno nule</li><li>Rotační pohyb magnetického pole v rovině po obvodu kužele = precese (dětská káča)</li></ul>",
      "microscopy": "<ul><li>hromadíme do určité plochy</li><li>excitační impulzy se opakují mezi jednotlivými relaxacemi → sekvence</li><li>hyposignální = hypointenzivní = tmavší</li><li>hypersignální = hyperintenzivní = světlejší</li></ul>",
      "clinical_legacy": "<ul><li><strong>Relativní KI:</strong>TEP, stenty, svorky, klaustrofobie, první trimestr gravidity, kovová cizí tělesa, tetování</li></ul>"
    },
    "quiz": [
      {
            "question": "Co jsou sekvence T1 a T2 na MR a jaká tkáň je hyperintenzní (světlá) na T2?",
            "options": [
                  "T1 a T2 jsou relaxační časy; na T2 jsou hyperintenzní tekutiny (CSF, edém, výpotek)",
                  "T1 a T2 jsou různé roviny řezu; na T2 jsou hyperintenzní kosti",
                  "T1 zobrazuje průtok krve; T2 zobrazuje metabolismus glukózy",
                  "T2 je zkrácená verze T1 pro urgentní pacienty, intenzita je totožná"
            ],
            "correct": 0,
            "explanation": "T1 a T2 jsou fyzikální relaxační časy protonů. Na T2-vážených obrazech jsou hyperintenzní (světlé) struktury s vysokým obsahem vody: CSF, edém, výpotek, většina patologií. Na T1 je světlý tuk a krev (krátký T1)."
      },
      {
            "question": "Absolutní kontraindikace MR vyšetření je:",
            "options": [
                  "Kovový feromagnetický těleso (kardiostimulátor, ferromagnetický aneurysmatický klip, kochleární implantát)",
                  "Implantovaný titanový šroub z ortopedie (neferomagnetický)",
                  "Klaustrofobie (relativní kontraindikace, lze řešit sedací nebo otevřeným MR)",
                  "Gravidita ve 2. trimestru (relativní, 1. trimestr opatrnější)"
            ],
            "correct": 0,
            "explanation": "Absolutní KI MR: feromagnetická cizí tělesa, starší typy kardiostimulátorů, ferromagnetické aneurysmatické klipy (riziko posunutí ve statickém poli), kochleární implantáty. Titanové implantáty jsou MR-bezpečné (diamagnetické)."
      }
]
  },
  {
    "id": "radio-6",
    "title": "Kontrastní látky – rozdělení, nežádoucí reakce, jejich prevence a léčba",
    "section": "Obecná část a fyzika",
    "category": "Základy",
    "modalities": [
      "Kontrastní látky",
      "Jodové KL",
      "Gadolinium",
      "Baryum"
    ],
    "keywords": [
      "jodové kontrastní látky",
      "gadoliniové chelát",
      "baryová síran",
      "anafylaktoidní reakce",
      "CIN",
      "kontrastem indukovaná nefropatie",
      "NSF",
      "hydratace",
      "kortikoidy"
    ],
    "image": "images/anki/paste-6ccb647992c2b53075e38ead51fa89fcad07aea7.jpg",
    "images": [
      {
        "src": "images/anki/paste-6ccb647992c2b53075e38ead51fa89fcad07aea7.jpg",
        "title": "Kontrastní vyšetření cévního řečiště",
        "caption": "Aplikace neionické jodové kontrastní látky pro angiografické zobrazení tepenného řečiště a zhodnocení perfuze.",
        "modality": "Angiografie / KL"
      }
    ],
    "content": {
      "principle": "<ul><li>A) Pozitivní KL = zvyšují absorpci záření (bílé) a) Baryové KL</li><li>sírnan barnatý (není toxický, nerozpouští se ve vodě, podává se ve formě suspenze);</li><li>rozpustné ve vodě →vylučovány močí (nefrotropní); hepatotropní (vylučovány játry)</li><li><strong>fázové vyšetření s kontrastní látkou:</strong> časná arteriální fáze, pozdní arteriální f., parenchymová, venózní f., pozdní sken (po 10 min) B) Negativní KL = snižují absorpci záření (tmavé)</li><li>metoda dvojího kontrastu - současně pozitivní i negativní KL</li><li>plyn (CO2), roztoky (Mannitol, Sorbitol), Methylcelulóza Magnetická rezonance s kontrastem</li><li><strong>Gadolinium:</strong> cheláty s jeho obsahem → zkracuje relaxační T1 čas → projeví se to hyperintenzitou (bílý stín)</li><li>plynové mikroglobuly → zesilují odrážení UZ v dopplerovi Příklad kontrastních látek: Vizipaque, Omnipaque, clariscan, Jomerol</li></ul>",
      "methodology": "<ul><li><strong>negativa:</strong> nesmí se dostat mimo GIT (mohl by vyvolat akutní zánět nebo chronické adhezivní změny) → při podezření na perforaci → podáme jodovou KL b) Jodové KL intravenózní urografie (i. v.), angiografické vyšetření nebo CT (i. a.)</li><li>množství jódu a jeho koncentrace je popsána u každé KL (270, 300, 320, …)</li><li><strong>Vedlejší reakce:</strong> kontrastní nefropatie (selhání ledvinných funkcí), KL neprostupuje HEB (může projít při patologii a způsobit edém), štítná žláza (vychytává jód z KL). kardiotoxicita, vazodilatace, alergoidní reakce (do 30-60 min → lehké, střední a těžké symptomy)</li></ul>",
      "normal_anatomy": "<ul><li>za normálních okolností nepronikají intracelulárně</li><li>Maximální možná dávka je 300 ml 300 (u normální ledvinné fce)</li></ul>",
      "pathology": "<ul><li>vyšetření GIT</li><li>použití samostatně nebo s dvojím kontrastem (i negativním KL)</li><li>neionizující = malé procento NÚ)</li><li>zvyšuje transparenci vyšetřovaného orgánu</li><li><strong>Negativum:</strong> nefrogenní systémová fibróza Ultrazvuk s kontrastem</li></ul>",
      "clinical": "<ul><li><strong>Snášenlivost KL je dána:</strong> hyperosmolaritou (čím je menší osmolarita, tím je lepší KL), Chemotoxicitou, Ionizací (ionizující = pravděpodobnost vedlejších reakcí;</li><li><strong>Prevence:</strong> hydratace, alergologická anamnéza, zajištění periferní žíly, bez premedikace → léčba = adrenalin (těžké formy), kortikoidy (střední formy), antihistaminika (lehké formy)</li></ul>",
      "key_points": "<ul><li><strong>Klíčová modalita:</strong> Kontrastní látky, Jodové KL, Gadolinium, Baryum.</li><li><strong>Hlavní diagnostický cíl:</strong> Včasné stanovení diagnózy, posouzení rozsahu a lokalizace patologie pro volbu adekvátní terapie.</li><li><strong>Zkušební perla:</strong> Vždy začínat méně invazivní dostupnou modalitou a respektovat kontraindikace (alergie na KL, renální insuficience, kardiostimulátory u MR).</li></ul>",
      "definition": "<ul><li>A) Pozitivní KL = zvyšují absorpci záření (bílé) a) Baryové KL</li><li>sírnan barnatý (není toxický, nerozpouští se ve vodě, podává se ve formě suspenze);</li><li>rozpustné ve vodě →vylučovány močí (nefrotropní); hepatotropní (vylučovány játry)</li><li><strong>fázové vyšetření s kontrastní látkou:</strong> časná arteriální fáze, pozdní arteriální f., parenchymová, venózní f., pozdní sken (po 10 min) B) Negativní KL = snižují absorpci záření (tmavé)</li></ul>",
      "etiology": "<ul><li><strong>negativa:</strong> nesmí se dostat mimo GIT (mohl by vyvolat akutní zánět nebo chronické adhezivní změny) → při podezření na perforaci → podáme jodovou KL b) Jodové KL intravenózní urografie (i. v.), angiografické vyšetření nebo CT (i. a.)</li><li>množství jódu a jeho koncentrace je popsána u každé KL (270, 300, 320, …)</li><li><strong>Vedlejší reakce:</strong> kontrastní nefropatie (selhání ledvinných funkcí), KL neprostupuje HEB (může projít při patologii a způsobit edém), štítná žláza (vychytává jód z KL). kardiotoxicita, vazodilatace, alergoidní reakce (do 30-60 min → lehké, střední a těžké symptomy)</li></ul>",
      "pathogenesis": "<ul><li>za normálních okolností nepronikají intracelulárně</li><li>Maximální možná dávka je 300 ml 300 (u normální ledvinné fce)</li></ul>",
      "macroscopy": "<ul><li>vyšetření GIT</li><li>použití samostatně nebo s dvojím kontrastem (i negativním KL)</li><li>neionizující = malé procento NÚ)</li><li>zvyšuje transparenci vyšetřovaného orgánu</li></ul>",
      "microscopy": "<ul><li><strong>Negativum:</strong> nefrogenní systémová fibróza Ultrazvuk s kontrastem</li></ul>",
      "clinical_legacy": "<ul><li><strong>Snášenlivost KL je dána:</strong> hyperosmolaritou (čím je menší osmolarita, tím je lepší KL), Chemotoxicitou, Ionizací (ionizující = pravděpodobnost vedlejších reakcí;</li><li><strong>Prevence:</strong> hydratace, alergologická anamnéza, zajištění periferní žíly, bez premedikace → léčba = adrenalin (těžké formy), kortikoidy (střední formy), antihistaminika (lehké formy)</li></ul>"
    },
    "quiz": [
      {
            "question": "Jodová kontrastní látka pro CT je kontraindikována (nebo vyžaduje opatření) při:",
            "options": [
                  "Renální insuficienci (kontrast nefropatie), hypertyreóze, anamnéze závažné alergie na jód/KL",
                  "Anamnéze sluneční alergie nebo laktózové intolerance",
                  "Věku nad 70 let bez dalších komorbidit",
                  "Graviditě ve 3. trimestru (absolutní KI pro jodové KL)"
            ],
            "correct": 0,
            "explanation": "Jodové KL jsou kontraindikovány/opatrně při: renální insuficienci (GFR < 30 ml/min – riziko kontrast-nefropatie), hypertyreóze (jod stimuluje tyreoid), těžké alergii na KL (premedikace kortikoidy). Gravidita není absolutní KI, ale indikace musí být zvážena."
      },
      {
            "question": "Gadoliniová kontrastní látka pro MR je riziková hlavně kvůli:",
            "options": [
                  "Nefrogenní systémové fibróze (NSF) u pacientů s těžkou renální insuficiencí (GFR < 30 ml/min)",
                  "Radiační zátěži, protože gadolinium emituje gama záření",
                  "Riziku vzdušné embolie při intravenózní aplikaci",
                  "Toxicitě pro játra při biliárním vylučování"
            ],
            "correct": 0,
            "explanation": "Gadolinium je u zdravých ledvin bezpečné. Při těžké CKD (GFR < 30) hrozí NSF – vzácná, ale závažná fibrotizující systémová nemoc. Gadolinium není radioaktivní, jen paramagnetické."
      }
]
  },
  {
    "id": "radio-7",
    "title": "Metody zobrazování hrudníku",
    "section": "Hrudník a srdce",
    "category": "Hrudník",
    "modalities": [
      "RTG",
      "HRCT",
      "CT angio",
      "MR",
      "UZ"
    ],
    "keywords": [
      "skiagrafie hrudníku",
      "zadopřední projekce (PA)",
      "bočná projekce",
      "HRCT plic",
      "CT angiografie plicnice",
      "plášťový emfyzém",
      "virtuální bronchoskopie"
    ],
    "image": "images/anki/_1-normal-chest.jpg",
    "images": [
      {
        "src": "images/anki/_1-normal-chest.jpg",
        "title": "Normální skiagram hrudníku v PA projekci",
        "caption": "Přehledný snímek hrudníku: symetrické plicní křídla, ostré kostofrenické úhly, normální kardiotorakální index, trachea ve střední čáře.",
        "modality": "RTG Hrudník"
      },
      {
        "src": "images/textbook/fig_p028__R145.jpg",
        "title": "Anatomické struktury na RTG hrudníku",
        "caption": "Rentgenová anatomie hrudníku: plicní hily, cévní kresba, tracheobronchiální strom, srdeční oddíly a kontury bránice.",
        "modality": "RTG Schéma"
      }
    ],
    "content": {
      "principle": "<ul><li>RTG snímek plic a srdce</li><li>Plicní hily</li><li><strong>CT:</strong></li><li>indikováno při nejasných nálezech na snímku</li><li><strong>Virtuální CT bronchoskopie:</strong> znázorní vnitřní část dýchacího stromu</li></ul>",
      "methodology": "<ul><li>ve stoje PA, nebo vleže na zádech (dilatované plicní cévy a rozšířený srdeční stín, nevidíme hladinku žaludku), boční projekce</li><li>rieglerova projekce = laterogram → když nemůžeme dobře diferencovat pleurální tekutinu od plicní infiltrace → pacient na boku, před sebou detektor, rtg paprsek probíhá horizontálně</li><li>a) přesná projekce (sternum nesmí zasahovat do plic) b) expozice musí být kvalitní (vidíme i první čtyři hrudní obratle) c) u hyperstenických jedinců bránice vytlačena tgcnahoru a překrývá dolní plicní pole</li><li><strong>Posouzení snímku:</strong> Je správně proveden?</li><li><strong>Plicní CT angiografie:</strong> potvrzení nebo vyloučení plicní embolie, posuzování anomálií plicních a mediastinálních cév Echokardiografie: základní vyšetřovací metodou diagnostiky srdce, zvláště u dětí MR: posouzení infiltrace primárních nádorů do okolí PET/CT: posouzení mediastinálních uzlin, detekce metastáz</li></ul>",
      "normal_anatomy": "<ul><li>Bránice - pravá a levá část, kontury, adhezivní změny</li><li>Plíce - srovnat pravou a levou, plicní kresbu (tvořena plicními cévami) x pneumothorax; ložiskové změny</li><li>Srdce a mediastinum - kardiotorakální index (poměr největší šířky srdce a maximální průměr hrudníku), vzestupná aorta, oblouk, sestupná aorta, kontury mediastina ostré (rozšíření = expanzivní procesy, aneurysma aorty, krvácení) skelet žeber stíny v měkkých částech hrudníku - mohou imitovat možnou patologii</li></ul>",
      "pathology": "<ul><li>rychlé, s malým radiačním zatížením s hodně informacemi</li><li>Dýchací cesty - trachea - Th5, bronchiální strom → prokreslení v Patologickém zastření</li><li>onemocnění plic, pleury, mediastina a hrudní stěny</li><li>mikronodulace při pneumokoniózách, metastázy, zánětlivé infiltrace → mediastinální a plicní okno</li><li>součást urgentního CT protokolu → pneumothorax, poškození plic, aneurysma</li></ul>",
      "clinical": "<ul><li>indikováno při nejasných nálezech na snímku</li><li>mikronodulace při pneumokoniózách, metastázy, zánětlivé infiltrace → mediastinální a plicní okno</li><li>součást urgentního CT protokolu → pneumothorax, poškození plic, aneurysma</li><li><strong>Virtuální CT bronchoskopie:</strong> znázorní vnitřní část dýchacího stromu</li><li><strong>Plicní CT angiografie:</strong> potvrzení nebo vyloučení plicní embolie, posuzování anomálií plicních a mediastinálních cév Echokardiografie: základní vyšetřovací metodou diagnostiky srdce, zvláště u dětí MR: posouzení infiltrace primárních nádorů do okolí PET/CT: posouzení mediastinálních uzlin, detekce metastáz</li></ul>",
      "key_points": "<ul><li><strong>Klíčová modalita:</strong> RTG, HRCT, CT angio, MR, UZ.</li><li><strong>Hlavní diagnostický cíl:</strong> Včasné stanovení diagnózy, posouzení rozsahu a lokalizace patologie pro volbu adekvátní terapie.</li><li><strong>Zkušební perla:</strong> Vždy začínat méně invazivní dostupnou modalitou a respektovat kontraindikace (alergie na KL, renální insuficience, kardiostimulátory u MR).</li></ul>",
      "definition": "<ul><li>RTG snímek plic a srdce</li><li>Plicní hily</li><li><strong>CT:</strong></li><li>indikováno při nejasných nálezech na snímku</li></ul>",
      "etiology": "<ul><li>ve stoje PA, nebo vleže na zádech (dilatované plicní cévy a rozšířený srdeční stín, nevidíme hladinku žaludku), boční projekce</li><li>rieglerova projekce = laterogram → když nemůžeme dobře diferencovat pleurální tekutinu od plicní infiltrace → pacient na boku, před sebou detektor, rtg paprsek probíhá horizontálně</li><li>a) přesná projekce (sternum nesmí zasahovat do plic) b) expozice musí být kvalitní (vidíme i první čtyři hrudní obratle) c) u hyperstenických jedinců bránice vytlačena tgcnahoru a překrývá dolní plicní pole</li><li><strong>Posouzení snímku:</strong> Je správně proveden?</li></ul>",
      "pathogenesis": "<ul><li>Bránice - pravá a levá část, kontury, adhezivní změny</li><li>Plíce - srovnat pravou a levou, plicní kresbu (tvořena plicními cévami) x pneumothorax; ložiskové změny</li><li>Srdce a mediastinum - kardiotorakální index (poměr největší šířky srdce a maximální průměr hrudníku), vzestupná aorta, oblouk, sestupná aorta, kontury mediastina ostré (rozšíření = expanzivní procesy, aneurysma aorty, krvácení) skelet žeber stíny v měkkých částech hrudníku - mohou imitovat možnou patologii</li></ul>",
      "macroscopy": "<ul><li>rychlé, s malým radiačním zatížením s hodně informacemi</li><li>Dýchací cesty - trachea - Th5, bronchiální strom → prokreslení v Patologickém zastření</li><li>onemocnění plic, pleury, mediastina a hrudní stěny</li><li>mikronodulace při pneumokoniózách, metastázy, zánětlivé infiltrace → mediastinální a plicní okno</li></ul>",
      "microscopy": "<ul><li>součást urgentního CT protokolu → pneumothorax, poškození plic, aneurysma</li></ul>",
      "clinical_legacy": "<ul><li>indikováno při nejasných nálezech na snímku</li><li>mikronodulace při pneumokoniózách, metastázy, zánětlivé infiltrace → mediastinální a plicní okno</li><li>součást urgentního CT protokolu → pneumothorax, poškození plic, aneurysma</li><li><strong>Virtuální CT bronchoskopie:</strong> znázorní vnitřní část dýchacího stromu</li><li><strong>Plicní CT angiografie:</strong> potvrzení nebo vyloučení plicní embolie, posuzování anomálií plicních a mediastinálních cév Echokardiografie: základní vyšetřovací metodou diagnostiky srdce, zvláště u dětí MR: posouzení infiltrace primárních nádorů do okolí PET/CT: posouzení mediastinálních uzlin, detekce metastáz</li></ul>"
    },
    "quiz": [
      {
            "question": "Na zadopředním (PA) skiagramu hrudníku je normální kardiotorakální index (CTI) u dospělého:",
            "options": [
                  "≤ 0,5 (maximální příčný průměr srdce / maximální příčný průměr hrudníku)",
                  "≤ 0,3 – větší hodnota je vždy patologická",
                  "≥ 0,7 – větší srdce je projevem atletického srdce",
                  "CTI se hodnotí výhradně na CT, ne na prostém RTG"
            ],
            "correct": 0,
            "explanation": "CTI (kardiotorakální index) = max příčný průměr srdce / max příčný průměr hrudníku. Norma ≤ 0,5. CTI > 0,5 svědčí pro kardiomegalii. Na AP projekci (vleže) je srdce umělě zvětšené – hodnotit jen PA projekci ve stoje."
      },
      {
            "question": "Rozlišení na PA skiagramu hrudníku se hodnotí dle viditelnosti:",
            "options": [
                  "Zadního úseku 6. nebo předního úseku 8. žebra nad bránicí (norma: 5–6 zadních žeber)",
                  "Tvaru srdce a šíře mediastina v centimetrech",
                  "Počtu viditelných meziobratlových plotének",
                  "Průměru průdušnice v mm (norma 20–22 mm)"
            ],
            "correct": 0,
            "explanation": "Optimální inspirační nádech na PA skiagramu = viditelnost zadního oblouku 5.–6. žebra (nebo předního 8. žebra) nad membránou. Nedostatečný nádech vede ke zdánlivé kardiomegalii a zastření bazálních plicních polí."
      }
]
  },
  {
    "id": "radio-8",
    "title": "Obecná RTG symptomatologie onemocnění plic",
    "section": "Hrudník a srdce",
    "category": "Hrudník",
    "modalities": [
      "RTG",
      "HRCT"
    ],
    "keywords": [
      "zastínění",
      "projasnění",
      "infiltrát",
      "atelektáza",
      "alveolární syndrom",
      "intersticiální syndrom",
      "air bronchogram",
      "silhouette sign",
      "voštinovitá plíce",
      "ground-glass"
    ],
    "image": "images/anki/right-upper-lobe-collapse-9.jpg",
    "images": [
      {
        "src": "images/anki/right-upper-lobe-collapse-9.jpg",
        "title": "Atelektáza pravého horního laloku (Golden S sign)",
        "caption": "Kolaps horního laloku způsobený centrálním nádorem zvedá horizontální fisuru vzhůru a mediodorzálně, tvoříc typický tvar písmene S (Goldenovo S).",
        "modality": "RTG Hrudník"
      },
      {
        "src": "images/textbook/fig_p035__R175.jpg",
        "title": "Alveolární konsolidace a vzdušný bronchogram",
        "caption": "Alveolární syndrom při krupózní pneumonii: homogenní zastínění laloku s patrným vzdušným bronchogramem (projasněné průdušky zalité tekutinou).",
        "modality": "RTG Hrudník"
      }
    ],
    "content": {
      "principle": "<ul><li><strong>Transparence (průhlednost):</strong> zvýšená (plíce tmavší = v plicích je více vzduchu = emfyzém, chronické onemocnění, srdeční vady); snížená (plíce světlejší = úbývá vzduchu v alveolech)</li><li><strong>Plicní uzly a kalcifikace:</strong> ostře ohraničené okrouhlé útvary - solitární (bronchogenní ca, tuberkulom, absces, metastáza), mnohočetné (metastázy) → nejčastější jsou kalcifikace po TBC procesu; pleuritis calcarea (kalcifikáty v pleuře) → skiaskopie,CT</li><li><strong>Bakteriální:</strong></li><li>CT indikováno u pacientů s poruchou imunity</li><li><strong>Absces:</strong> solidní ložisko (špatně diferencované od jiných expanzí), na CT v centru tekutá kolekce, postkontrastně se sytí lem</li><li>Empyém = nahromadění hnisu v pleurální dutině</li><li><strong>TBC:</strong></li><li>drobný kalcifikát v plicích a kalcifikovaná hilová uzlina = primární komplex</li><li>miliární TBC - rozsev hematogenní cestou do středních a horních plicních polí</li><li>Echinokokóza - uzlovité útvary nebo cysty (parazitární)</li><li><strong>CHOPN:</strong> chronická bronchitida s emfyzémem</li><li>onemocnění způsobené vdechováním prachů obsahující škodlivé látky - oxid křemičitý, uhelný prach, azbestový prach</li><li>horníci, slévači, sochaři, …</li><li>většinou se projeví za 15-20 let</li><li>multisystémové granulomatózní onemocnění - na plicích změny v hilových uzlinách a v plicním parenchymu</li><li>poranění alveolokapilární membrány → propustnost pro tekutiny do alveolů i intersticia = ARDS sy</li></ul>",
      "methodology": "<ul><li>diagnostika CT plicní angiografie</li></ul>",
      "normal_anatomy": "<ul><li><strong>Zastření/zastínění:</strong> bílý stín = nevzdušnost plíce zánětem, edémem, nádorem nebo kolapsem (difúzní nebo ložiskové)</li><li><strong>Alveolární léze:</strong> Kondenzace (nahrazení vzduchu v alveolech tekutinou, exsudátem nebo jinou tkání → homogenní stín, ale bronchiální strom prokazatelný), Atelektáza (uzávěr bronchů - nádory, stenózy při chronickém zánětu, tlak zvětšenými uzlinami,...</li><li>Projasnění (tmavý stín) = ztráta plicní tkáně, tenkostěnná cysta, emfyzematózní bula;</li><li><strong>Postižení intersticia:</strong> Nodulární (rozsev drobných uzlů difúzně v plicích - miliární TBC, virová pneumonie, pneumokonióza, sarkoidóza, mikrometastázy), retikulace (lineární stíny připomínající síť), retikulonodulární forma (kombinace předchozích - sarkoidóza, karnicnomatözní lymfangoitida); Kerleovy septální linie (B linie - horizontálně uložené v laterobazálních plicních polích = příznak intersticiálního edému)</li><li><strong>Plicní kresba:</strong> normálně jen cévní stíny; akcentace - zmnožení; úbytek - emfyzém Záněty plic</li><li>zastínění s neostrými konturami lobární pneumonie, alární, bronchopneumonie</li><li>Mykotické léze - drobnoložiskové stíny</li><li>rozpadové dutiny = kaverny - silná granulační stěna, na CT diferencujeme drénující bronchus tuberkulom = uzlovitý stín</li><li>uzávěr segmentálních arterií → plicní infarkt</li><li>RTG obraz infarktu - klínovité zastření v periferii plíce = odpovídá plícnímu segmentu Šoková plíce:</li></ul>",
      "pathology": "<ul><li><strong>Základní patologické obrazy:</strong></li><li>→ mediastinum posunuto na stranu léze)</li><li>celkové projasnění u emfyzému, bronchiálním astmatu, primární plicní hypertenzi,...</li><li><strong>Plicní hilus:</strong> zvětšení (rozšíření větví a. pulmonalis, bronchogenní tumor, LU)</li><li>patologickým substrátem je zánětlivá exsudace v alveolech → nehomogenní</li><li>Atypické pneumonie - virové, pneumocystové, mykoplazmové</li><li>Infiltrace v horních partiích - TBC</li><li>opakované infiltrace v krátkém intervalu = stenóza bronchu u bronchogenního karcinomu nebo u dětí u aspirace cizích těles</li><li>Bronchiektázie = dilatace terminálních částí bronchů (následek opakovaných infekcí)</li><li>zánětlivá infiltrace v dolních lalocích</li><li>pleurální výpotek → adheze, kalcifikace</li><li><strong>Mykotické infekce:</strong> RTG často negativní, na CT skvrnitý infiltrát, aspergilóza</li><li><strong>Plicní emfyzém:</strong> rozšíření vzdušných prostorů, destrukce stěny alveolů, emfyzematózní buly → RTG = zvětšená transparence plicní, širší mezižeberní prostory, plošší bránice, cor pulmonale Pneumokoniózy:</li><li><strong>Silikóza:</strong> diseminované uzly (10mm) v obou plicích, hl. horní lalok, v okolí fibrózní změny, zvětšené uzliny, skořápkovitý lem Sarkoidóza:</li><li><strong>Na CT prokazatelné subpleurální noduly Plicní embolie:</strong></li><li>zdrojem - trombóza žil dolních končetin</li><li>uzávěr levé plicní arterie →dramatický klinický obraz</li><li>obraz alveolárního edému se zřetelným obrazem air bronchogramu a obvykle nezvětšené srdce</li></ul>",
      "clinical": "<ul><li>horníci, slévači, sochaři, …</li><li>většinou se projeví za 15-20 let</li><li><strong>Silikóza:</strong> diseminované uzly (10mm) v obou plicích, hl. horní lalok, v okolí fibrózní změny, zvětšené uzliny, skořápkovitý lem Sarkoidóza:</li><li>multisystémové granulomatózní onemocnění - na plicích změny v hilových uzlinách a v plicním parenchymu</li><li><strong>Na CT prokazatelné subpleurální noduly Plicní embolie:</strong></li><li>zdrojem - trombóza žil dolních končetin</li><li>uzávěr levé plicní arterie →dramatický klinický obraz</li><li>uzávěr segmentálních arterií → plicní infarkt</li><li>diagnostika CT plicní angiografie</li><li>RTG obraz infarktu - klínovité zastření v periferii plíce = odpovídá plícnímu segmentu Šoková plíce:</li><li>poranění alveolokapilární membrány → propustnost pro tekutiny do alveolů i intersticia = ARDS sy</li><li>obraz alveolárního edému se zřetelným obrazem air bronchogramu a obvykle nezvětšené srdce</li></ul>",
      "key_points": "<ul><li><strong>Klíčová modalita:</strong> RTG, HRCT.</li><li><strong>Hlavní diagnostický cíl:</strong> Včasné stanovení diagnózy, posouzení rozsahu a lokalizace patologie pro volbu adekvátní terapie.</li><li><strong>Zkušební perla:</strong> Vždy začínat méně invazivní dostupnou modalitou a respektovat kontraindikace (alergie na KL, renální insuficience, kardiostimulátory u MR).</li></ul>",
      "definition": "<ul><li><strong>Transparence (průhlednost):</strong> zvýšená (plíce tmavší = v plicích je více vzduchu = emfyzém, chronické onemocnění, srdeční vady); snížená (plíce světlejší = úbývá vzduchu v alveolech)</li><li><strong>Plicní uzly a kalcifikace:</strong> ostře ohraničené okrouhlé útvary - solitární (bronchogenní ca, tuberkulom, absces, metastáza), mnohočetné (metastázy) → nejčastější jsou kalcifikace po TBC procesu; pleuritis calcarea (kalcifikáty v pleuře) → skiaskopie,CT</li><li><strong>Bakteriální:</strong></li><li>CT indikováno u pacientů s poruchou imunity</li></ul>",
      "etiology": "<ul><li>diagnostika CT plicní angiografie</li></ul>",
      "pathogenesis": "<ul><li><strong>Zastření/zastínění:</strong> bílý stín = nevzdušnost plíce zánětem, edémem, nádorem nebo kolapsem (difúzní nebo ložiskové)</li><li><strong>Alveolární léze:</strong> Kondenzace (nahrazení vzduchu v alveolech tekutinou, exsudátem nebo jinou tkání → homogenní stín, ale bronchiální strom prokazatelný), Atelektáza (uzávěr bronchů - nádory, stenózy při chronickém zánětu, tlak zvětšenými uzlinami,...</li><li>Projasnění (tmavý stín) = ztráta plicní tkáně, tenkostěnná cysta, emfyzematózní bula;</li><li><strong>Postižení intersticia:</strong> Nodulární (rozsev drobných uzlů difúzně v plicích - miliární TBC, virová pneumonie, pneumokonióza, sarkoidóza, mikrometastázy), retikulace (lineární stíny připomínající síť), retikulonodulární forma (kombinace předchozích - sarkoidóza, karnicnomatözní lymfangoitida); Kerleovy septální linie (B linie - horizontálně uložené v laterobazálních plicních polích = příznak intersticiálního edému)</li></ul>",
      "macroscopy": "<ul><li><strong>Základní patologické obrazy:</strong></li><li>→ mediastinum posunuto na stranu léze)</li><li>celkové projasnění u emfyzému, bronchiálním astmatu, primární plicní hypertenzi,...</li><li><strong>Plicní hilus:</strong> zvětšení (rozšíření větví a. pulmonalis, bronchogenní tumor, LU)</li></ul>",
      "microscopy": "<ul><li>patologickým substrátem je zánětlivá exsudace v alveolech → nehomogenní</li><li>Atypické pneumonie - virové, pneumocystové, mykoplazmové</li><li>Infiltrace v horních partiích - TBC</li><li>opakované infiltrace v krátkém intervalu = stenóza bronchu u bronchogenního karcinomu nebo u dětí u aspirace cizích těles</li></ul>",
      "clinical_legacy": "<ul><li>horníci, slévači, sochaři, …</li><li>většinou se projeví za 15-20 let</li><li><strong>Silikóza:</strong> diseminované uzly (10mm) v obou plicích, hl. horní lalok, v okolí fibrózní změny, zvětšené uzliny, skořápkovitý lem Sarkoidóza:</li><li>multisystémové granulomatózní onemocnění - na plicích změny v hilových uzlinách a v plicním parenchymu</li><li><strong>Na CT prokazatelné subpleurální noduly Plicní embolie:</strong></li><li>zdrojem - trombóza žil dolních končetin</li><li>uzávěr levé plicní arterie →dramatický klinický obraz</li><li>uzávěr segmentálních arterií → plicní infarkt</li><li>diagnostika CT plicní angiografie</li><li>RTG obraz infarktu - klínovité zastření v periferii plíce = odpovídá plícnímu segmentu Šoková plíce:</li><li>poranění alveolokapilární membrány → propustnost pro tekutiny do alveolů i intersticia = ARDS sy</li><li>obraz alveolárního edému se zřetelným obrazem air bronchogramu a obvykle nezvětšené srdce</li></ul>"
    },
    "quiz": [
      {
            "question": "Vzdušný bronchogram (air bronchogram) na RTG/CT hrudníku svědčí pro:",
            "options": [
                  "Alveolární konsolidaci (vzduch v průduškách zůstal, alveoly jsou vyplněny tekutinou/exsudátem/zánětem)",
                  "Endobronchiální tumor zcela uzavírající průdušku",
                  "Emfyzém se zvýšenou vzdušností plicní tkáně",
                  "Pleurální výpotek komprimující plicní parenchym"
            ],
            "correct": 0,
            "explanation": "Air bronchogram = průsvitné bronchy v neprůsvitné konsolidaci. Alveoly jsou vyplněny (pneumonie, edém, atelektáza absorption), průdušky nikoli. Bez vzdušného bronchogramu → spíše endobronchiální obstrukce nebo pleurální příčina."
      },
      {
            "question": "Linie B (B-lines) na plicním ultrazvuku svědčí pro:",
            "options": [
                  "Plicní edém nebo intersticiální syndrom (interlobulární septa vyplněná tekutinou – syndrom „zvonkohry\")",
                  "Normální vzdušnou plíci (A-lines = normální)",
                  "Pneumotorax (absence klouzavého pohybu pleury)",
                  "Pneumonii pouze bakteriálního původu"
            ],
            "correct": 0,
            "explanation": "B-linie (comet tail artifacts) jsou hyperechoické vertikální artefakty sahající ke spodnímu okraji obrazu. Odpovídají intersticiálnímu syndromu (plicní edém, IPF). Norma = A-linie (horizontální reverberační artefakty). Absence klouzání + A-linie = pneumotorax."
      }
]
  },
  {
    "id": "radio-9",
    "title": "Nádory plic a bronchogenní karcinom",
    "section": "Hrudník a srdce",
    "category": "Hrudník",
    "modalities": [
      "RTG",
      "CT",
      "PET/CT"
    ],
    "keywords": [
      "bronchogenní karcinom",
      "periferní uzlík",
      "centrální tumor",
      "spikulace",
      "staging",
      "TNM",
      "Pancoastův tumor",
      "plicní metastázy",
      "kanonové koule"
    ],
    "image": "images/textbook/fig_p039__R194.jpg",
    "images": [
      {
        "src": "images/textbook/fig_p039__R194.jpg",
        "title": "Centrální bronchogenní karcinom s atelektázou",
        "caption": "Centrálně rostoucí tumor v pravém hilu vedoucí k obstrukci bronchu a následné resorpční atelektáze laloku.",
        "modality": "RTG Hrudník"
      },
      {
        "src": "images/anki/paste-e1a88010bc62a07a123629546b7d7eb6e0c53f55.jpg",
        "title": "Algoritmus stagingu nemalobuněčného karcinomu plic (NSCLC)",
        "caption": "Kontrastní CT hrudníku a horního břicha doplněné o PET/CT a MR mozku k přesnému stanovení T, N a M stádia onemocnění.",
        "modality": "Algoritmus / CT"
      }
    ],
    "content": {
      "principle": "<ul><li>největší mortalita, spojitost s kouřením</li><li>nemalobuněčný - roste centrálně, rychle metastazuje do uzlin</li><li>Malobuněčný - agresivnější, roste velmi rychle, metastázuje</li><li><strong>Periferní forma:</strong> manifestace solitárním ložiskem s neostrými okraji a vybíháním do okolí, rozpad uzlu častý → kaverna</li><li>Fibrom, Leiomyom, lipomy Metastázy do plic:</li></ul>",
      "methodology": "<ul><li>Metodika a technické provedení vyšetření u tématu <strong>Nádory plic a bronchogenní karcinom</strong> volí optimální projekce, kontrastní fáze a nastavení zobrazení pro maximální diagnostickou výtěžnost.</li></ul>",
      "normal_anatomy": "<ul><li><strong>hematogenní metastázy:</strong> mikrometastázy nejsou patrné na snímku, odhalení CT, solitární vytváří uzlovité stíny</li><li><strong>Karcinomatózní lymfangiopatie:</strong> akcentovaná intersticiální kresba, retikulární, zřídka i drobné noduly + Kerleyho linie</li></ul>",
      "pathology": "<ul><li><strong>Bronchogenní karcinom:</strong></li><li>nejrozšířenější maligní nádor vůbec</li><li><strong>Centrální forma:</strong> zvětšení hilu nebo přímo ložisko v hilu → stenóza bronchu</li><li><strong>Diseminace:</strong> do hilových a mediastinálních uzlin, někdy do jiné části plic → rozhodující je PET/CT Lymfomy plic: přímým přechodem z uzlin nebo hematogenní diseminací →ložisko kondenzace + pleurální výpotek Benigní nádory:</li><li>Hamartom - solitární uzel na periferii plíce, ostře ohraničený, četné kalcifikace, bez patologických změn v okolí → diagnóza potvrzena nálezem tukových strutur na HRCT</li><li>každý primární nádor může do plic metastazovat hematogenní nebo lymfatickou cestou</li><li>Grawitzův nádor ledvin nebo kostní sarkomy → dobře prokrvené → snadno do plic</li></ul>",
      "clinical": "<ul><li>každý primární nádor může do plic metastazovat hematogenní nebo lymfatickou cestou</li><li>Grawitzův nádor ledvin nebo kostní sarkomy → dobře prokrvené → snadno do plic</li><li><strong>hematogenní metastázy:</strong> mikrometastázy nejsou patrné na snímku, odhalení CT, solitární vytváří uzlovité stíny</li><li><strong>Karcinomatózní lymfangiopatie:</strong> akcentovaná intersticiální kresba, retikulární, zřídka i drobné noduly + Kerleyho linie</li></ul>",
      "key_points": "<ul><li><strong>Klíčová modalita:</strong> RTG, CT, PET/CT.</li><li><strong>Hlavní diagnostický cíl:</strong> Včasné stanovení diagnózy, posouzení rozsahu a lokalizace patologie pro volbu adekvátní terapie.</li><li><strong>Zkušební perla:</strong> Vždy začínat méně invazivní dostupnou modalitou a respektovat kontraindikace (alergie na KL, renální insuficience, kardiostimulátory u MR).</li></ul>",
      "definition": "<ul><li>největší mortalita, spojitost s kouřením</li><li>nemalobuněčný - roste centrálně, rychle metastazuje do uzlin</li><li>Malobuněčný - agresivnější, roste velmi rychle, metastázuje</li><li><strong>Periferní forma:</strong> manifestace solitárním ložiskem s neostrými okraji a vybíháním do okolí, rozpad uzlu častý → kaverna</li></ul>",
      "etiology": "<ul><li>Metodika a technické provedení vyšetření u tématu <strong>Nádory plic a bronchogenní karcinom</strong> volí optimální projekce, kontrastní fáze a nastavení zobrazení pro maximální diagnostickou výtěžnost.</li></ul>",
      "pathogenesis": "<ul><li><strong>hematogenní metastázy:</strong> mikrometastázy nejsou patrné na snímku, odhalení CT, solitární vytváří uzlovité stíny</li><li><strong>Karcinomatózní lymfangiopatie:</strong> akcentovaná intersticiální kresba, retikulární, zřídka i drobné noduly + Kerleyho linie</li></ul>",
      "macroscopy": "<ul><li><strong>Bronchogenní karcinom:</strong></li><li>nejrozšířenější maligní nádor vůbec</li><li><strong>Centrální forma:</strong> zvětšení hilu nebo přímo ložisko v hilu → stenóza bronchu</li><li><strong>Diseminace:</strong> do hilových a mediastinálních uzlin, někdy do jiné části plic → rozhodující je PET/CT Lymfomy plic: přímým přechodem z uzlin nebo hematogenní diseminací →ložisko kondenzace + pleurální výpotek Benigní nádory:</li></ul>",
      "microscopy": "<ul><li>Hamartom - solitární uzel na periferii plíce, ostře ohraničený, četné kalcifikace, bez patologických změn v okolí → diagnóza potvrzena nálezem tukových strutur na HRCT</li><li>každý primární nádor může do plic metastazovat hematogenní nebo lymfatickou cestou</li><li>Grawitzův nádor ledvin nebo kostní sarkomy → dobře prokrvené → snadno do plic</li></ul>",
      "clinical_legacy": "<ul><li>každý primární nádor může do plic metastazovat hematogenní nebo lymfatickou cestou</li><li>Grawitzův nádor ledvin nebo kostní sarkomy → dobře prokrvené → snadno do plic</li><li><strong>hematogenní metastázy:</strong> mikrometastázy nejsou patrné na snímku, odhalení CT, solitární vytváří uzlovité stíny</li><li><strong>Karcinomatózní lymfangiopatie:</strong> akcentovaná intersticiální kresba, retikulární, zřídka i drobné noduly + Kerleyho linie</li></ul>"
    },
    "quiz": [
      {
            "question": "Centrální bronchogenní karcinom se typicky projevuje na RTG jako:",
            "options": [
                  "Hilová masa s atelektázou nebo obstrukční pneumonií distálně (Golden S sign u pravého horního laloku)",
                  "Solitární perifení uzel se kalcifikacemi a popcorn kreseb",
                  "Difuzní oboustranné miliarní opacity",
                  "Pleurální výpotek bez parenchymatózní léze"
            ],
            "correct": 0,
            "explanation": "Centrální karcinom (dlaždicobuněčný, malobuněčný) roste do lumina bronchu → obstrukce → atelektáza nebo post-obstrukční pneumonie. Golden S sign = atelectáza pravého horního laloku s konkávní horní hranicí (konvexní masa + konkávní atelektáza)."
      },
      {
            "question": "Periferní solitární plicní uzel (SPN) je statisticky maligní, pokud:",
            "options": [
                  "Je > 8 mm, spiculovaný, v horním laloku, u kuřáka ≥ 45 let bez kalcifikací",
                  "Je < 4 mm, hladce ohraničený a stabilní na dvou po sobě jdoucích CT po 2 letech",
                  "Má popcorn kalcifikace (typické pro hamartom)",
                  "Je přítomen bilaterálně symetricky (spíše svědčí pro metastázy)"
            ],
            "correct": 0,
            "explanation": "Malignitu SPN zvyšuje: velikost > 8 mm, spiculace (jehličkovitý okraj), lokalizace v S1/S2 horního laloku, věk > 45, kuřák, bez kalcifikací. Kalcifikace popcorn pattern → hamartom. Noduly < 4 mm stabilní 2 roky jsou benigní."
      }
]
  },
  {
    "id": "radio-10",
    "title": "Nádory a expanze mediastina",
    "section": "Hrudník a srdce",
    "category": "Hrudník",
    "modalities": [
      "RTG",
      "CT",
      "MR"
    ],
    "keywords": [
      "přední mediastinum",
      "střední mediastinum",
      "zadní mediastinum",
      "4T (thymom, teratom, thyroid, 'terrible' lymfom)",
      "bronchogenní cysta",
      "neurogenní nádory",
      "Schwannom"
    ],
    "image": "images/textbook/fig_p039__R195.jpg",
    "images": [
      {
        "src": "images/textbook/fig_p039__R195.jpg",
        "title": "Expanzivní léze předního mediastina",
        "caption": "Zastínění předního mediastina rozšiřující horní mediastinální stín na RTG a CT (dif. dg. lymfom, thymom, retrosternální struma).",
        "modality": "RTG / CT"
      }
    ],
    "content": {
      "principle": "<ul><li>velmi časté expanze v mediastinu</li><li><strong>Přední mediastinum:</strong> tymom, lymfom, retrosternální struma, teratom dermoid</li><li>Hodgkinovy i Non-Hodgkinovy</li><li>nitrohrudní uzliny → rozšiřují mediastinum v horních partiích</li><li>benigní i maligní formy</li><li>hyperplazie thymu</li></ul>",
      "methodology": "<ul><li>Metodika a technické provedení vyšetření u tématu <strong>Nádory a expanze mediastina</strong> volí optimální projekce, kontrastní fáze a nastavení zobrazení pro maximální diagnostickou výtěžnost.</li></ul>",
      "normal_anatomy": "<ul><li>Fyziologický obraz vyžaduje znalost normální radioanatomie, symetrie struktur a fyziologických denzit (CT) a signálových intenzit (MR).</li></ul>",
      "pathology": "<ul><li>etiologii lze odhadnout dle lokalizace patologického procesu</li><li><strong>Střední mediastinum:</strong> primární nebo sekundárně onemocnění uzlin, bronchogenní nebo perikardiální cysty, cévní anomálie</li><li><strong>Zadní mediastinum:</strong> neurogenní nádory, nádory jícnu, cévní onemocnění Lymfomy:</li><li>CT, MR nebo PET/CT → zachycení patologie + sledování úspěšnosti léčby Tymomy:</li><li>15% mediastinálních nádorů</li><li><strong>často spojené s myastenia gravis nebo myastenickým sy Neurogenní nádory:</strong> sudkovité neurinomy z páteřního kanálu nebo prevertebrálních sympatických plexů Cévní expanze: aneurysma aorty, koarktace aorty, disekující aneurysma Dilatace plicní arterie je běžná u levopravývh zkratů, u plicní hypertenze Dolní dutá žíla rozšířená na snímcích v leže, u srdeční dekompenzace, při perikarditidě</li></ul>",
      "clinical": "<ul><li>benigní i maligní formy</li><li>hyperplazie thymu</li><li><strong>často spojené s myastenia gravis nebo myastenickým sy Neurogenní nádory:</strong> sudkovité neurinomy z páteřního kanálu nebo prevertebrálních sympatických plexů Cévní expanze: aneurysma aorty, koarktace aorty, disekující aneurysma Dilatace plicní arterie je běžná u levopravývh zkratů, u plicní hypertenze Dolní dutá žíla rozšířená na snímcích v leže, u srdeční dekompenzace, při perikarditidě</li></ul>",
      "key_points": "<ul><li><strong>Klíčová modalita:</strong> RTG, CT, MR.</li><li><strong>Hlavní diagnostický cíl:</strong> Včasné stanovení diagnózy, posouzení rozsahu a lokalizace patologie pro volbu adekvátní terapie.</li><li><strong>Zkušební perla:</strong> Vždy začínat méně invazivní dostupnou modalitou a respektovat kontraindikace (alergie na KL, renální insuficience, kardiostimulátory u MR).</li></ul>",
      "definition": "<ul><li>velmi časté expanze v mediastinu</li><li><strong>Přední mediastinum:</strong> tymom, lymfom, retrosternální struma, teratom dermoid</li><li>Hodgkinovy i Non-Hodgkinovy</li><li>nitrohrudní uzliny → rozšiřují mediastinum v horních partiích</li></ul>",
      "etiology": "<ul><li>Metodika a technické provedení vyšetření u tématu <strong>Nádory a expanze mediastina</strong> volí optimální projekce, kontrastní fáze a nastavení zobrazení pro maximální diagnostickou výtěžnost.</li></ul>",
      "pathogenesis": "<ul><li>Fyziologický obraz vyžaduje znalost normální radioanatomie, symetrie struktur a fyziologických denzit (CT) a signálových intenzit (MR).</li></ul>",
      "macroscopy": "<ul><li>etiologii lze odhadnout dle lokalizace patologického procesu</li><li><strong>Střední mediastinum:</strong> primární nebo sekundárně onemocnění uzlin, bronchogenní nebo perikardiální cysty, cévní anomálie</li><li><strong>Zadní mediastinum:</strong> neurogenní nádory, nádory jícnu, cévní onemocnění Lymfomy:</li><li>CT, MR nebo PET/CT → zachycení patologie + sledování úspěšnosti léčby Tymomy:</li></ul>",
      "microscopy": "<ul><li>15% mediastinálních nádorů</li><li><strong>často spojené s myastenia gravis nebo myastenickým sy Neurogenní nádory:</strong> sudkovité neurinomy z páteřního kanálu nebo prevertebrálních sympatických plexů Cévní expanze: aneurysma aorty, koarktace aorty, disekující aneurysma Dilatace plicní arterie je běžná u levopravývh zkratů, u plicní hypertenze Dolní dutá žíla rozšířená na snímcích v leže, u srdeční dekompenzace, při perikarditidě</li></ul>",
      "clinical_legacy": "<ul><li>benigní i maligní formy</li><li>hyperplazie thymu</li><li><strong>často spojené s myastenia gravis nebo myastenickým sy Neurogenní nádory:</strong> sudkovité neurinomy z páteřního kanálu nebo prevertebrálních sympatických plexů Cévní expanze: aneurysma aorty, koarktace aorty, disekující aneurysma Dilatace plicní arterie je běžná u levopravývh zkratů, u plicní hypertenze Dolní dutá žíla rozšířená na snímcích v leže, u srdeční dekompenzace, při perikarditidě</li></ul>"
    },
    "quiz": [
      {
            "question": "Tumor předního mediastina ('4T') zahrnuje:",
            "options": [
                  "Thymom, Teratom/germinální nádor, Thyreoidea (substernální struma), Terrible lymphoma",
                  "Tracheální tumor, Tracheomalácie, Thorakální neurinom, Toxické plicní léze",
                  "Tumor aorty, Trombóza VCS, Tortuous bronchus, Tuberkulózní adentida",
                  "Jsou to vždy metastatické adenopatie ze 4 různých primárních tumorů"
            ],
            "correct": 0,
            "explanation": "Přední mediastinum: 4T = Thymom (nejčastější nádor předního mediastina u dospělých), Teratom/Germinální nádor, Thyreoidea (substernální struma), Terrible lymphoma (Hodgkin/non-Hodgkin). Každý tumor má svoji charakteristickou lokalizaci v 3 kompartmentech mediastina."
      },
      {
            "question": "Neurogenní nádory (neurofibrom, schwannom, ganglioneurom) jsou nejčastěji lokalizovány v:",
            "options": [
                  "Zadním mediastinu (paravertebrálně, podél sympatiku a mezižeberních nervů)",
                  "Předním mediastinu u thymické žlázy",
                  "Středním mediastinu v perikardu",
                  "Difuzně v celém mediastinu bez preferované lokalizace"
            ],
            "correct": 0,
            "explanation": "Zadní mediastinum (paravertebrální sulcus): neurogenní tumory – schwannom, neurofibrom, ganglioneurom, neuroblastom. Střední mediastinum: lymfomy, bronchogenní cysty, perikardiální cysty. Přední: thymom, germinální, struma."
      }
]
  },
  {
    "id": "radio-11",
    "title": "Onemocnění pleurálních prostorů (výpotek, pneumotorax, mezoteliom)",
    "section": "Hrudník a srdce",
    "category": "Hrudník",
    "modalities": [
      "RTG",
      "UZ",
      "CT"
    ],
    "keywords": [
      "fluidotorax",
      "pleurální výpotek",
      "pneumotorax",
      "tenzní pneumotorax",
      "Meniskus sign",
      "Ellis-Damoiseauova křivka",
      "otupení kostofrenického úhlu",
      "mezoteliom"
    ],
    "image": "images/anki/small-right-pleural-effusion.jpg",
    "images": [
      {
        "src": "images/anki/small-right-pleural-effusion.jpg",
        "title": "Pleurální výpotek – otupení pravého kostofrenického úhlu",
        "caption": "Typický nález tekutiny v pleurální dutině na vestoje zhotoveném snímku: tekutina stoupá po laterální hrudní stěně a vytváří konkávní meniskus.",
        "modality": "RTG Hrudník"
      },
      {
        "src": "images/anki/pleural-effusion-supine.JPG",
        "title": "Pleurální výpotek na snímku vleže (Supine)",
        "caption": "U ležícího pacienta se tekutina rozlévá dorzálně, což se projevuje difuzním závojem hemitoraxu se zachovanou cévní kresbou bez menisku.",
        "modality": "RTG Hrudník (vleže)"
      },
      {
        "src": "images/textbook/fig_p051__R252.jpg",
        "title": "Pneumotorax s kolapsem plicního křídla",
        "caption": "Pneumotorax: linie viscerální pleury, za kterou zcela chybí plicní cévní kresba (avaskulární zóna) a dochází k retrakci plicního parenchymu k hilu.",
        "modality": "RTG Hrudník"
      }
    ],
    "content": {
      "principle": "<ul><li><strong>reaktivní změny pleury při onemocnění orgánů v horní části břišní dutiny Fluidothorax:</strong></li><li>hypoalbuminémie, jaterní cirhóza</li><li>empyém - kolekce hnisu</li><li>hemothorax - krev</li><li>opouzdřený fluidothorax = slepením dvou vrstev pleury bílkovinnou složkou pleurální dutiny</li><li>vzduch v pleurální dutině</li><li>může být doprovázeno přítomností tekutiny nebo krve</li><li>CT i v nejistých případech spolehlivě odhalí</li></ul>",
      "methodology": "<ul><li>dif. diag. mezi pleurální tekutinou a plicní infiltrací je Rieglerova projekce</li><li><strong>Interlobární pleuritida:</strong> vřetenovitý stín v bočné projekci - konvexně vyklenuté okraje ve střední části plic Pneumothorax:</li></ul>",
      "normal_anatomy": "<ul><li>RTG - volní tekutina jako homogenní sytý stín, zaobluje kostofrenický úhel, někdy část plicního pole, horní hranice je konkávní</li><li><strong>RTG snímek:</strong> projasnění mezi hrudní stěnou a plící, absence cévní kresby a komprese plíce</li><li><strong>Tenzní PNO:</strong> vznik ventilovým mechanismem →vzduch se dostane do dutiny, ale už ne ven → komprese plic, přetlačení mediastina kontralaterálně, nízké uložení bránice Srůsty pleury: po zánětech nebo krvácení Pleurální nádory: fibrom (benigní mezoteliom), maligní mezoteliom (CT- solitární nebo vícečetná ložiska Trauma:</li></ul>",
      "pathology": "<ul><li>velmi často postižena patologickými procesy orgánů hrudníku</li><li>nejčastější patologickým příznakem je přítomnost pleurální tekutiny</li><li>Transsudát - objevuje se při srdeční insuficienci nebo plicním infarktu;</li><li>Exsudát - reaktivní změny pleury při zánětech nebo tumorech</li><li><strong>CT:</strong> tekutina + komprimované plíce</li><li>změnou negativního tlaku na pozitivní → přesun plíce i mediastina</li><li>traumatické - fraktury žeber, spontánní - ruptura emfyzematózních bul, iatrogenní - zavádění centrální kanyly</li><li>otevřená nebo tupá → možné poranění všech orgánů v hrudníku</li><li>zlomeniny žeber, sterna</li><li>pneumothorax, kontuze, lacerace plic (roztržení)</li></ul>",
      "clinical": "<ul><li><strong>RTG snímek:</strong> projasnění mezi hrudní stěnou a plící, absence cévní kresby a komprese plíce</li><li>CT i v nejistých případech spolehlivě odhalí</li><li><strong>Tenzní PNO:</strong> vznik ventilovým mechanismem →vzduch se dostane do dutiny, ale už ne ven → komprese plic, přetlačení mediastina kontralaterálně, nízké uložení bránice Srůsty pleury: po zánětech nebo krvácení Pleurální nádory: fibrom (benigní mezoteliom), maligní mezoteliom (CT- solitární nebo vícečetná ložiska Trauma:</li><li>otevřená nebo tupá → možné poranění všech orgánů v hrudníku</li><li>zlomeniny žeber, sterna</li><li>pneumothorax, kontuze, lacerace plic (roztržení)</li></ul>",
      "key_points": "<ul><li><strong>Klíčová modalita:</strong> RTG, UZ, CT.</li><li><strong>Hlavní diagnostický cíl:</strong> Včasné stanovení diagnózy, posouzení rozsahu a lokalizace patologie pro volbu adekvátní terapie.</li><li><strong>Zkušební perla:</strong> Vždy začínat méně invazivní dostupnou modalitou a respektovat kontraindikace (alergie na KL, renální insuficience, kardiostimulátory u MR).</li></ul>",
      "definition": "<ul><li><strong>reaktivní změny pleury při onemocnění orgánů v horní části břišní dutiny Fluidothorax:</strong></li><li>hypoalbuminémie, jaterní cirhóza</li><li>empyém - kolekce hnisu</li><li>hemothorax - krev</li></ul>",
      "etiology": "<ul><li>dif. diag. mezi pleurální tekutinou a plicní infiltrací je Rieglerova projekce</li><li><strong>Interlobární pleuritida:</strong> vřetenovitý stín v bočné projekci - konvexně vyklenuté okraje ve střední části plic Pneumothorax:</li></ul>",
      "pathogenesis": "<ul><li>RTG - volní tekutina jako homogenní sytý stín, zaobluje kostofrenický úhel, někdy část plicního pole, horní hranice je konkávní</li><li><strong>RTG snímek:</strong> projasnění mezi hrudní stěnou a plící, absence cévní kresby a komprese plíce</li><li><strong>Tenzní PNO:</strong> vznik ventilovým mechanismem →vzduch se dostane do dutiny, ale už ne ven → komprese plic, přetlačení mediastina kontralaterálně, nízké uložení bránice Srůsty pleury: po zánětech nebo krvácení Pleurální nádory: fibrom (benigní mezoteliom), maligní mezoteliom (CT- solitární nebo vícečetná ložiska Trauma:</li></ul>",
      "macroscopy": "<ul><li>velmi často postižena patologickými procesy orgánů hrudníku</li><li>nejčastější patologickým příznakem je přítomnost pleurální tekutiny</li><li>Transsudát - objevuje se při srdeční insuficienci nebo plicním infarktu;</li><li>Exsudát - reaktivní změny pleury při zánětech nebo tumorech</li></ul>",
      "microscopy": "<ul><li><strong>CT:</strong> tekutina + komprimované plíce</li><li>změnou negativního tlaku na pozitivní → přesun plíce i mediastina</li><li>traumatické - fraktury žeber, spontánní - ruptura emfyzematózních bul, iatrogenní - zavádění centrální kanyly</li><li>otevřená nebo tupá → možné poranění všech orgánů v hrudníku</li></ul>",
      "clinical_legacy": "<ul><li><strong>RTG snímek:</strong> projasnění mezi hrudní stěnou a plící, absence cévní kresby a komprese plíce</li><li>CT i v nejistých případech spolehlivě odhalí</li><li><strong>Tenzní PNO:</strong> vznik ventilovým mechanismem →vzduch se dostane do dutiny, ale už ne ven → komprese plic, přetlačení mediastina kontralaterálně, nízké uložení bránice Srůsty pleury: po zánětech nebo krvácení Pleurální nádory: fibrom (benigní mezoteliom), maligní mezoteliom (CT- solitární nebo vícečetná ložiska Trauma:</li><li>otevřená nebo tupá → možné poranění všech orgánů v hrudníku</li><li>zlomeniny žeber, sterna</li><li>pneumothorax, kontuze, lacerace plic (roztržení)</li></ul>"
    },
    "quiz": [
      {
            "question": "Meniskusové znamení (Damoiseau-Ellisova křivka) na RTG hrudníku vstoje označuje:",
            "options": [
                  "Homogenní zastínění s konkávní horní hranicí = pleurální výpotek (> 200 ml pro viditelnost vstoje)",
                  "Vzdušný obraz v pleurální dutině při pneumotoraxu",
                  "Lineární atelektázu při dráždění bránice",
                  "Projasnění v pleurální dutině při empyemu"
            ],
            "correct": 0,
            "explanation": "Meniskusové znamení = homogenní zastínění s konkávní, laterálně nahoru jdoucí hranicí (tekutina se distribuuje podél pleurální dutiny). Pro průkaz na PA RTG je třeba > 200–300 ml výpotku. Malé výpotky zachytí CT nebo UZ."
      },
      {
            "question": "Pneumotorax se na RTG hrudníku diagnostikuje jako:",
            "options": [
                  "Projasnění bez plicní kresby na periferii s viditelnou viscerální pleurou jako ostrou linií",
                  "Homogenní zastínění hemitoraxu s deviacemi trachey",
                  "Bilaterální hilová lymfadenopatie s peribronchiální infiltrací",
                  "Miliární opacity v obou plicních polích"
            ],
            "correct": 0,
            "explanation": "Pneumotorax = vzduch v pleurální dutině → kolaps plíce. RTG: projasnění bez plicní kresby (vzduch bez cév) s viditelnou viscerální pleurou. Tenzní pneumotorax: deviacee mediastina kontralaterálně, pokles bránice – urgentní."
      }
]
  },
  {
    "id": "radio-12",
    "title": "Analýza srdečního stínu na RTG a metody kardiální radiologie",
    "section": "Hrudník a srdce",
    "category": "Kardio",
    "modalities": [
      "RTG",
      "Echokardiografie",
      "CT koronarografie",
      "MR srdce"
    ],
    "keywords": [
      "kardiotorakální index (KTI)",
      "kardiomegalie",
      "srdeční kontury",
      "pravá komora",
      "levá komora",
      "levá síň",
      "CT koronarografie",
      "kalciové skóre (Agatston)",
      "MR srdce (LGE)"
    ],
    "image": "images/anki/cardiomegaly-3.jpg",
    "images": [
      {
        "src": "images/anki/cardiomegaly-3.jpg",
        "title": "Kardiomegalie na RTG snímku hrudníku",
        "caption": "Kardiotorakální index (KTI) > 0.50 na PA snímku – výrazné zvětšení srdečního stínu přesahující polovinu šířky hrudního koše (cor bovinum).",
        "modality": "RTG Hrudník"
      },
      {
        "src": "images/textbook/fig_p062__R309.jpg",
        "title": "Normální srdeční kontury a segmenty na PA skiagramu",
        "caption": "Pravý okraj srdečního stínu (horní dutá žíla, pravá síň) a levý okraj (aortální knoflík, plicnice, ouško levé síně, levá komora).",
        "modality": "RTG Schéma"
      }
    ],
    "content": {
      "principle": "<ul><li><strong>RTG:</strong></li><li>Transezofageálně - sonda naléhá těsně na srdce nebo aortu</li><li>CT koronarografie - lumen cévy + charakter aterosklerotického plátu (nepotvrzený akutní koronární sy na EKG)</li><li>CT k posouzení VVV, průchodnosti bypassů, hodnocení morfologie, funkční hodnocení</li><li><strong>premedikace BB MR:</strong></li><li>dobře diferencuje tukovou degeneraci - příčina kardiomyopatie</li></ul>",
      "methodology": "<ul><li>snímek má orientační hodnotu → echokardiografie, CT, MR, angiografie</li></ul>",
      "normal_anatomy": "<ul><li>Celková velikost srdce = kardiotorakální index</li><li><strong>Konfigurace srdce:</strong> mitrální stenóza (vyhlazení levé kontury s vyklenutím ouška levé síně + venostáza v horních plicních polích), aortálně konfigurované srdce (u aortální vady nebo arteriální hypertenze; tvar dřeváku, elongovaná aorta s prominující obloučkem), vrozené srdeční vady (levopravý zkrat - defekt síňového septa → hypertrofie pravé komory → rotace doleva a vyklenutí pulmonálního konu)</li></ul>",
      "pathology": "<ul><li><strong>Kalcifikace:</strong> v aortě nebo v chlopních Echokardiografie: transtorakálně</li><li><strong>I:</strong> měření srdečních oddílů, kontraktilita jednotlivých oddílů, onemocnění perikardu = průkaz výpotku CT:</li><li>CTA - vyšetření disekce aorty, embolie plicnice</li><li>Nutná synchronizace s EKG → zabránění rušivým artefaktům</li><li>posouzení kinetiky srdečních oddílů, kvantifikace krevního toku, diagnostika tumorů, arytmogenní dysplazie PK, myokarditidy</li></ul>",
      "clinical": "<ul><li>Nutná synchronizace s EKG → zabránění rušivým artefaktům</li><li><strong>premedikace BB MR:</strong></li><li>posouzení kinetiky srdečních oddílů, kvantifikace krevního toku, diagnostika tumorů, arytmogenní dysplazie PK, myokarditidy</li><li>dobře diferencuje tukovou degeneraci - příčina kardiomyopatie</li></ul>",
      "key_points": "<ul><li><strong>Klíčová modalita:</strong> RTG, Echokardiografie, CT koronarografie, MR srdce.</li><li><strong>Hlavní diagnostický cíl:</strong> Včasné stanovení diagnózy, posouzení rozsahu a lokalizace patologie pro volbu adekvátní terapie.</li><li><strong>Zkušební perla:</strong> Vždy začínat méně invazivní dostupnou modalitou a respektovat kontraindikace (alergie na KL, renální insuficience, kardiostimulátory u MR).</li></ul>",
      "definition": "<ul><li><strong>RTG:</strong></li><li>Transezofageálně - sonda naléhá těsně na srdce nebo aortu</li><li>CT koronarografie - lumen cévy + charakter aterosklerotického plátu (nepotvrzený akutní koronární sy na EKG)</li><li>CT k posouzení VVV, průchodnosti bypassů, hodnocení morfologie, funkční hodnocení</li></ul>",
      "etiology": "<ul><li>snímek má orientační hodnotu → echokardiografie, CT, MR, angiografie</li></ul>",
      "pathogenesis": "<ul><li>Celková velikost srdce = kardiotorakální index</li><li><strong>Konfigurace srdce:</strong> mitrální stenóza (vyhlazení levé kontury s vyklenutím ouška levé síně + venostáza v horních plicních polích), aortálně konfigurované srdce (u aortální vady nebo arteriální hypertenze; tvar dřeváku, elongovaná aorta s prominující obloučkem), vrozené srdeční vady (levopravý zkrat - defekt síňového septa → hypertrofie pravé komory → rotace doleva a vyklenutí pulmonálního konu)</li></ul>",
      "macroscopy": "<ul><li><strong>Kalcifikace:</strong> v aortě nebo v chlopních Echokardiografie: transtorakálně</li><li><strong>I:</strong> měření srdečních oddílů, kontraktilita jednotlivých oddílů, onemocnění perikardu = průkaz výpotku CT:</li><li>CTA - vyšetření disekce aorty, embolie plicnice</li><li>Nutná synchronizace s EKG → zabránění rušivým artefaktům</li></ul>",
      "microscopy": "<ul><li>posouzení kinetiky srdečních oddílů, kvantifikace krevního toku, diagnostika tumorů, arytmogenní dysplazie PK, myokarditidy</li></ul>",
      "clinical_legacy": "<ul><li>Nutná synchronizace s EKG → zabránění rušivým artefaktům</li><li><strong>premedikace BB MR:</strong></li><li>posouzení kinetiky srdečních oddílů, kvantifikace krevního toku, diagnostika tumorů, arytmogenní dysplazie PK, myokarditidy</li><li>dobře diferencuje tukovou degeneraci - příčina kardiomyopatie</li></ul>"
    },
    "quiz": [
      {
            "question": "Kardiomegalie je na RTG definována kardiotorakálním indexem > 0,5. Které chlopenní vady ji způsobují dílčí zvětšení levé síně?",
            "options": [
                  "Mitrální stenóza a mitrální regurgitace (obě způsobují dilataci levé síně – mitrální konfigurace srdce)",
                  "Aortální stenóza (způsobuje izolovanou hypertrofii a dilataci levé komory)",
                  "Pulmonální stenóza (způsobuje dilataci pravé komory a pravé síně)",
                  "Defekt septa síní (způsobuje dilataci pravých oddílů, ne levé síně)"
            ],
            "correct": 0,
            "explanation": "Mitrální stenóza → dilatace LA (obstrukce výtoku z LA). Mitrální regurgitace → dilatace LA i LV (zpětný tok). Mitrální konfigurace: rovný levý okraj, vymizení pasu srdce, elevace levého bronchu. Aortální vady → aortální konfigurace (prodloužená levá kontura, prominující aortální knob)."
      },
      {
            "question": "Metoda hodnocení srdce a perikardu s nejlepším prostorovým a kontrastním rozlišením je:",
            "options": [
                  "Srdeční MR (CMR) – zlatý standard pro hodnocení funkce, viability myokardu, perikarditidy",
                  "Prostý RTG hrudníku – primárně detekuje velikost srdce",
                  "Kostní scintigrafie (vhodná pro ischemii myokardu)",
                  "Plicní perfuzní scintigrafie (hodnotí perfuzi plic, ne myokard)"
            ],
            "correct": 0,
            "explanation": "Srdeční MR (CMR) je zlatý standard pro: funkci komor (EF), hodnocení myokardiální viability (LGE – pozdní sycení gadoliniem), diagnostiku kardiomyopatií, perikarditidy. Echokardiografie je první volba (rychlá, dostupná), CT používáme pro koronární CTA."
      }
]
  },
  {
    "id": "radio-13",
    "title": "Proměny srdečního stínu při chlopenních vadách a srdečním selhání",
    "section": "Hrudník a srdce",
    "category": "Kardio",
    "modalities": [
      "RTG",
      "ECHO",
      "MR srdce"
    ],
    "keywords": [
      "mitrální konfigurace",
      "aortální konfigurace",
      "dvojitý stín levé síně",
      "narovnání levé srdeční kontury",
      "mitrální stenóza",
      "aortální stenóza",
      "kardiální dekompenzace"
    ],
    "image": "images/textbook/fig_p064__R322.jpg",
    "images": [
      {
        "src": "images/textbook/fig_p064__R322.jpg",
        "title": "Mitrální konfigurace srdce (zvětšení levé síně)",
        "caption": "Zvětšení levé síně při mitrální vadě: narovnání levého srdečního okraje (vyklenutí ouška), elevace levého hlavního bronchu a dvojitý stín na pravém okraji.",
        "modality": "RTG Srdce"
      }
    ],
    "content": {
      "principle": "<ul><li><strong>RTG:</strong></li></ul>",
      "methodology": "<ul><li>Metodika a technické provedení vyšetření u tématu <strong>Proměny srdečního stínu při chlopenních vadách a srdečním selhání</strong> volí optimální projekce, kontrastní fáze a nastavení zobrazení pro maximální diagnostickou výtěžnost.</li></ul>",
      "normal_anatomy": "<ul><li>Celková velikost srdce = kardiotorakální index</li><li><strong>Konfigurace srdce:</strong> mitrální stenóza (vyhlazení levé kontury s vyklenutím ouška levé síně + venostáza v horních plicních polích), aortálně konfigurované srdce (u aortální vady nebo arteriální hypertenze; tvar dřeváku, elongovaná aorta s prominující obloučkem), vrozené srdeční vady (levopravý zkrat - defekt síňového septa → hypertrofie pravé komory → rotace doleva a vyklenutí pulmonálního konu</li></ul>",
      "pathology": "<ul><li><strong>Kalcifikace:</strong> v aortě nebo v chlopních</li></ul>",
      "clinical": "<ul><li><strong>Kalcifikace:</strong> v aortě nebo v chlopních</li></ul>",
      "key_points": "<ul><li><strong>Klíčová modalita:</strong> RTG, ECHO, MR srdce.</li><li><strong>Hlavní diagnostický cíl:</strong> Včasné stanovení diagnózy, posouzení rozsahu a lokalizace patologie pro volbu adekvátní terapie.</li><li><strong>Zkušební perla:</strong> Vždy začínat méně invazivní dostupnou modalitou a respektovat kontraindikace (alergie na KL, renální insuficience, kardiostimulátory u MR).</li></ul>",
      "definition": "<ul><li><strong>RTG:</strong></li></ul>",
      "etiology": "<ul><li>Metodika a technické provedení vyšetření u tématu <strong>Proměny srdečního stínu při chlopenních vadách a srdečním selhání</strong> volí optimální projekce, kontrastní fáze a nastavení zobrazení pro maximální diagnostickou výtěžnost.</li></ul>",
      "pathogenesis": "<ul><li>Celková velikost srdce = kardiotorakální index</li><li><strong>Konfigurace srdce:</strong> mitrální stenóza (vyhlazení levé kontury s vyklenutím ouška levé síně + venostáza v horních plicních polích), aortálně konfigurované srdce (u aortální vady nebo arteriální hypertenze; tvar dřeváku, elongovaná aorta s prominující obloučkem), vrozené srdeční vady (levopravý zkrat - defekt síňového septa → hypertrofie pravé komory → rotace doleva a vyklenutí pulmonálního konu</li></ul>",
      "macroscopy": "<ul><li><strong>Kalcifikace:</strong> v aortě nebo v chlopních</li></ul>",
      "microscopy": "<ul><li><strong>Kalcifikace:</strong> v aortě nebo v chlopních</li></ul>",
      "clinical_legacy": "<ul><li><strong>Kalcifikace:</strong> v aortě nebo v chlopních</li></ul>"
    },
    "quiz": [
      {
            "question": "Kerleyovy B-linie na RTG hrudníku jsou příznakem:",
            "options": [
                  "Intersticiálního plicního edému (dilatace intersticia a lymfatik při tlaku v plicním kapilárním řečišti > 18–22 mmHg)",
                  "Endobronchiální šíření karcinomu plic (lymfangiosis carcinomatosa)",
                  "Fyziologického plicního žilního vzorce v dolních lalocích",
                  "Tukové embolizace plicního kapilárního řečiště"
            ],
            "correct": 0,
            "explanation": "Kerleyovy B-linie = horizontální, 1–2 cm, na periferii dolního laloku, kolmé na pleuru. Odpovídají dilatovaným interlobulárním lymfatikám při intersticiálním edému (PCWP > 18 mmHg). Bilaterální motýlí edém (butterfly pattern) = těžký alveolární edém (> 25 mmHg)."
      },
      {
            "question": "CT angiografie (CTA) plic je metodou první volby u suspektní plicní embolie. Pozitivní nález je:",
            "options": [
                  "Filling defect (výplňkový defekt) v kontrastně napl­něné plicní tepně = trombus",
                  "Hampton's hump (klínovité zastínění) = přímý příznak PE na prostém RTG",
                  "Westermarkův příznak = prořídlá plicní kresba distálně od embolu na RTG",
                  "Obě předchozí možnosti (B a C) jsou přímé příznaky PE na prostém RTG, ne CTA"
            ],
            "correct": 0,
            "explanation": "CTA plic = zlatý standard PE: přímý nález = filling defect (trombus) v plicní tepně. Hampton's hump (klínovité periferal zastínění – plicní infarkt) a Westermarkův příznak (oligemie) jsou nepřímé RTG příznaky PE – málo senzitivní."
      }
]
  },
  {
    "id": "radio-14",
    "title": "Normální a patologická plicní vaskularizace (plicní edém, embolie, hypertenze)",
    "section": "Hrudník a srdce",
    "category": "Kardio",
    "modalities": [
      "RTG",
      "CT angio (CTA)",
      "Scintigrafie V/Q"
    ],
    "keywords": [
      "plicní venózní městnání",
      "apikalizace cévní kresby",
      "Kerleyovy B linie",
      "alveolární plicní edém (motýlí křídla)",
      "plicní embolie",
      "defekt v náplni",
      "plicní hypertenze"
    ],
    "image": "images/anki/paste-7f9baf293ef81c8ed42a1121f636013e8450732c.jpg",
    "images": [
      {
        "src": "images/anki/paste-7f9baf293ef81c8ed42a1121f636013e8450732c.jpg",
        "title": "CT angiografie při suspektní plicní embolii (PE)",
        "caption": "Zlatý standard v diagnostice PE: kontrastní CT plicnice spolehlivě zobrazuje intraluminální defekty v náplni (tromby) v hlavních, lobárních i segmentálních větvích.",
        "modality": "CT Angiografie"
      },
      {
        "src": "images/textbook/fig_p068__R348.jpg",
        "title": "Plicní edém a městnání – Kerleyovy B linie a motýlí křídla",
        "caption": "Rentgenový obraz městnání při levostranném selhání: redistribuce krve do horních polí, peribronchiální prosáknutí, Kerley B linie a perihilární alveolární plicní edém.",
        "modality": "RTG Hrudník"
      }
    ],
    "content": {
      "principle": "<ul><li>příčina smrti u ležících nebo po operaci</li><li>prekapilární x postkapilární x cor pulmonale</li><li><strong>Prekapilární hypertenze:</strong> zvětšené množství krve při levopravých zkratech → široké, ostře ohraničené arterie daleko do periferie (tr. intermedius l. dx. měří více než 17mm)</li><li><strong>Cor pulmonale:</strong> při přetížení PK srdeční při plicní hypertenzi různé etiologie –. srdce rotuje a rozšiřuje se doleva, výtoková část na levé kontuře, retrosternálně PK, rozšířený tr. intermedius l. dx</li></ul>",
      "methodology": "<ul><li>diagnostika = CT plicní angiografie (prokáže uzávěr nebo defekt v kontrastně naplněné plicní tepně)</li></ul>",
      "normal_anatomy": "<ul><li>uzávěr segmentálních arterií → plicní infarkt</li><li>RTG obraz infarktu - klínovité zastření v periferii plíce = odpovídá plícnímu segmentu Venózní plicní hypertenze:</li><li>Kardiogenní edém - při insuficience levé komory nebo mitrální vadě → dilatace srdce, městnání v plicním oběhu, edém plic, transsudace v pleurální dutině iatrogenní edém - abnormální množství podaných tekutin infuzemi</li></ul>",
      "pathology": "<ul><li><strong>Plicní embolie:</strong></li><li>zdrojem - trombóza žil dolních končetin</li><li>uzávěr levé plicní arterie →dramatický klinický obraz → urgentní intervenční zákrok</li><li>Plicní edém = nahromadění kapaliny v plicích → porucha výměny plynů</li><li>nefrogenní edém - onemocnění ledvin</li><li><strong>šoková plíce:</strong> poranění alveolokapilární membrány → propustnost pro tekutiny do alveolů i intersticia = ARDS sy → obraz alveolárního edému se zřetelným obrazem air bronchogramu (chomáčkovité zastření) a obvykle nezvětšené srdce</li><li><strong>Plicní edém má několik stádií:</strong> Kongesce (městnání v malém oběhu - vyrovnání šířky plicních žil) → Intersticiální edém (zřetelná tekutina v intersticiu, Kerleyho B linie) → tekutina z intersticia do alveolů = alveolární edém → konečné stádium fluidothorax Arteriální plicní hypertenze:</li><li><strong>Postkapilární hypertenze:</strong> přetlak v arteriích kvůli venostáze v plicích (ischemická kardiopatie, mitrální vady, ..) → protektivní vazokonstrikce v dolních partiích a rozšíření v horních partiích + intersticiální edém</li></ul>",
      "clinical": "<ul><li>prekapilární x postkapilární x cor pulmonale</li><li><strong>Prekapilární hypertenze:</strong> zvětšené množství krve při levopravých zkratech → široké, ostře ohraničené arterie daleko do periferie (tr. intermedius l. dx. měří více než 17mm)</li><li><strong>Postkapilární hypertenze:</strong> přetlak v arteriích kvůli venostáze v plicích (ischemická kardiopatie, mitrální vady, ..) → protektivní vazokonstrikce v dolních partiích a rozšíření v horních partiích + intersticiální edém</li><li><strong>Cor pulmonale:</strong> při přetížení PK srdeční při plicní hypertenzi různé etiologie –. srdce rotuje a rozšiřuje se doleva, výtoková část na levé kontuře, retrosternálně PK, rozšířený tr. intermedius l. dx</li></ul>",
      "key_points": "<ul><li><strong>Klíčová modalita:</strong> RTG, CT angio (CTA), Scintigrafie V/Q.</li><li><strong>Hlavní diagnostický cíl:</strong> Včasné stanovení diagnózy, posouzení rozsahu a lokalizace patologie pro volbu adekvátní terapie.</li><li><strong>Zkušební perla:</strong> Vždy začínat méně invazivní dostupnou modalitou a respektovat kontraindikace (alergie na KL, renální insuficience, kardiostimulátory u MR).</li></ul>",
      "definition": "<ul><li>příčina smrti u ležících nebo po operaci</li><li>prekapilární x postkapilární x cor pulmonale</li><li><strong>Prekapilární hypertenze:</strong> zvětšené množství krve při levopravých zkratech → široké, ostře ohraničené arterie daleko do periferie (tr. intermedius l. dx. měří více než 17mm)</li><li><strong>Cor pulmonale:</strong> při přetížení PK srdeční při plicní hypertenzi různé etiologie –. srdce rotuje a rozšiřuje se doleva, výtoková část na levé kontuře, retrosternálně PK, rozšířený tr. intermedius l. dx</li></ul>",
      "etiology": "<ul><li>diagnostika = CT plicní angiografie (prokáže uzávěr nebo defekt v kontrastně naplněné plicní tepně)</li></ul>",
      "pathogenesis": "<ul><li>uzávěr segmentálních arterií → plicní infarkt</li><li>RTG obraz infarktu - klínovité zastření v periferii plíce = odpovídá plícnímu segmentu Venózní plicní hypertenze:</li><li>Kardiogenní edém - při insuficience levé komory nebo mitrální vadě → dilatace srdce, městnání v plicním oběhu, edém plic, transsudace v pleurální dutině iatrogenní edém - abnormální množství podaných tekutin infuzemi</li></ul>",
      "macroscopy": "<ul><li><strong>Plicní embolie:</strong></li><li>zdrojem - trombóza žil dolních končetin</li><li>uzávěr levé plicní arterie →dramatický klinický obraz → urgentní intervenční zákrok</li><li>Plicní edém = nahromadění kapaliny v plicích → porucha výměny plynů</li></ul>",
      "microscopy": "<ul><li>nefrogenní edém - onemocnění ledvin</li><li><strong>šoková plíce:</strong> poranění alveolokapilární membrány → propustnost pro tekutiny do alveolů i intersticia = ARDS sy → obraz alveolárního edému se zřetelným obrazem air bronchogramu (chomáčkovité zastření) a obvykle nezvětšené srdce</li><li><strong>Plicní edém má několik stádií:</strong> Kongesce (městnání v malém oběhu - vyrovnání šířky plicních žil) → Intersticiální edém (zřetelná tekutina v intersticiu, Kerleyho B linie) → tekutina z intersticia do alveolů = alveolární edém → konečné stádium fluidothorax Arteriální plicní hypertenze:</li><li><strong>Postkapilární hypertenze:</strong> přetlak v arteriích kvůli venostáze v plicích (ischemická kardiopatie, mitrální vady, ..) → protektivní vazokonstrikce v dolních partiích a rozšíření v horních partiích + intersticiální edém</li></ul>",
      "clinical_legacy": "<ul><li>prekapilární x postkapilární x cor pulmonale</li><li><strong>Prekapilární hypertenze:</strong> zvětšené množství krve při levopravých zkratech → široké, ostře ohraničené arterie daleko do periferie (tr. intermedius l. dx. měří více než 17mm)</li><li><strong>Postkapilární hypertenze:</strong> přetlak v arteriích kvůli venostáze v plicích (ischemická kardiopatie, mitrální vady, ..) → protektivní vazokonstrikce v dolních partiích a rozšíření v horních partiích + intersticiální edém</li><li><strong>Cor pulmonale:</strong> při přetížení PK srdeční při plicní hypertenzi různé etiologie –. srdce rotuje a rozšiřuje se doleva, výtoková část na levé kontuře, retrosternálně PK, rozšířený tr. intermedius l. dx</li></ul>"
    },
    "quiz": [
      {
            "question": "Pasáž báriem (polknutí barya) je zobrazovací metodou první volby pro:",
            "options": [
                  "Funkční vyšetření polykacího aktu, diagnostiku hernie hiatu a refluxu (skiaskopie v reálném čase)",
                  "Zobrazení sliznice tlustého střeva pro polypy (CT kolografie nebo kolonoskopie výhodnější)",
                  "Akutní perforaci GIT (absolutní KI pro baryo – použít jodová KL nebo CT)",
                  "Přesné určení stagingu karcinomu žaludku (CT vyšší přesnost)"
            ],
            "correct": 0,
            "explanation": "Pasáž Ba: dynamické skiaskopické vyšetření jícnu, žaludku, duodena. Vhodná pro: hiátová hernie, reflux, achalázie, divertikly jícnu. KI: suspektní perforace (→ jodová KL nebo CT). Pro staging malignit → CT/endoskopie."
      },
      {
            "question": "MRCP (MR cholangiopankreatografie) je metodou volby pro:",
            "options": [
                  "Neinvazivní zobrazení žlučovodů a pankreatického vývodu (bez záření, bez KL, bez endoskopie)",
                  "Urgentní zobrazení perforace žaludku na urgentním příjmu",
                  "Hodnocení peristaltiky a pasáže kontrastu ve střevech",
                  "Detekci kalcifikací v pankreatu (CT má vyšší senzitivitu pro kalcifikace)"
            ],
            "correct": 0,
            "explanation": "MRCP využívá silně T2-vážené sekvence: tekutina v žlučovodech a pankreatickém vývodu je hyperintenzní. Neinvazivní alternativa ERCP pro diagnostiku cholelitiázy, stenóz, PSC, anatomie vývodů. ERCP rezervujeme pro terapeutické výkony."
      }
]
  },
  {
    "id": "radio-15",
    "title": "Metody zobrazování trávicí trubice (jícen, žaludek, střevo)",
    "section": "Břicho a trávicí trakt",
    "category": "Břicho",
    "modalities": [
      "RTG",
      "CT enterografie",
      "MR enterografie",
      "Endoskopie",
      "Hydro-CT"
    ],
    "keywords": [
      "pasáž jícnem",
      "dvojitý kontrast",
      "baryová suspenze",
      "vodorozpustná KL (Gastrografin)",
      "CT enterografie",
      "MR enterografie",
      "virtuální kolonoskopie",
      "perforace"
    ],
    "image": "images/anki/small-bowel-obstruction-15.jpg",
    "images": [
      {
        "src": "images/anki/small-bowel-obstruction-15.jpg",
        "title": "Nativní snímek břicha – ileózní stav tenkého střeva",
        "caption": "Klasický rentgenový obraz distenze kliček tenkého střeva s nápadnými plicae circulares (řasami) a hladinkami plynu/tekutiny.",
        "modality": "RTG Břicho"
      }
    ],
    "content": {
      "principle": "<ul><li>Metody CT, MR a PET/CT nahrazují některé invazivní metody (endoskopii)</li><li><strong>monokontrastní:</strong> podání jedné pozitivní KL - získáme reliéfový obraz</li><li><strong>Negativní KL:</strong> vzduch, CO2, manitol (ale rychle se vstřebává)</li><li><strong>Pozitivní KL:</strong> Báryové - Mikroplaque, Prontobario (KI - perforace GIT); Jodové - p.</li><li>MR vyšetření - gadoliniové preparáty buď p. o. nebo i. v.</li><li>vyšetření tenkého střeva metodou dvojího kontrastu</li><li>CT enterografie - KL p. o. → CT vyšetření břicha → postprocesingová rekonstrukce b) Irrigoskopie</li><li>před vyšetřením otočení pacienta o 360°→ aby se KL dostala do všech partií tračníku c) Defekografie</li><li><strong>I:</strong> obtížná defekace nebo samovolný odchod stolice, výhřez konečníku</li><li>problém - nerozlišení polypů od obsahu tlustého střeva</li><li>Předpokladem je denzní rozdíl mezi lumen a střevní stěnou → napomáhá insuflace vzduchu do tračníku SONOGRAFIE limitováno přítomností vzduchu v trávicí trubici</li><li>prokáže zvětšené LU (hypoechogenní)</li><li>MR enterografie - nahrazuje invazivní enteroklýzu + eliminuje radiační zátěž</li></ul>",
      "methodology": "<ul><li>Příprava - bezezbytková dieta</li><li>nosem nebo ústy sonda až do duodenojejunální flexury → podání Mikropaque suspenze + negativní metylceluloza → MTC tlačí pozitivní kontrast před sebou → na stěnách zůstává povlak baryové suspenze</li><li>nejprve rektální rourkou baryovou kaši, pak insuflace vzduchu → skiagrafie pod skiaskopickou metodou</li><li>nejprve baryová KL p. o., pak rourkou do dupky aplikace husté baryové KL → přesun na defekační křeslo → snímkování pod skiaskopií a skiagrafií VÝPOČETNÍ TOMOGRAFIE</li></ul>",
      "normal_anatomy": "<ul><li>Fyziologický obraz vyžaduje znalost normální radioanatomie, symetrie struktur a fyziologických denzit (CT) a signálových intenzit (MR).</li></ul>",
      "pathology": "<ul><li>Prostý snímek= pneumoperitoneum, hladinky při neprůchodnosti střev (ileus), pozření cizího tělesa KONTRASTNÍ VYŠETŘENÍ</li><li><strong>Dvojkontrastní:</strong> kombinace pozitivní a negativní KL → pozitivní vytvoří na sliznici tenkou vrstvu + negativní trávicí trubici roztáhne → hodnotíme slizniční reliéf a průsvit trubice</li><li><strong>Izodenzní KL:</strong> metylcelulóza, HP-7000 → tenké střevo</li><li>o. zředěné s vodou, ale rychle se vstřebávají (I: při podezření perforace nebo obstrukce GIT), i. v. při CT vyšetření střev</li><li>a) Enteroklýza tonus trávicí trubice ovlivňujeme farmakologicky (paspertin, morfin)</li><li>Snímky na CT - velká radiační zátěž</li><li>zobrazení tlustého střeva dvoukontrastní metodou</li><li>dynamické zobrazení struktur pánevního dna a konečníku při vyprazdňování</li><li>rozhodující význam v diagnostice jednotlivých částí GIT</li><li>v onkologie posoudí šířku a délku infiltrace stěny, prorůstání do okolí, případné metastázy do LU CT koloskopie indikováno po neúspěšné endoskopii - velké vinutí střev, neprůchozí stenózy, srůsty</li><li>střevní stěna hypoechogenní, centrální část hyperechogenní - šířka stěny 4mm →víc odpovídá patologii (tumor nebo zánět)</li><li>Endoluminální sonografie = posouzení infiltrace stěn trávicíc trubice, mediastina nebo pankreatu MR</li></ul>",
      "clinical": "<ul><li>rozhodující význam v diagnostice jednotlivých částí GIT</li><li>v onkologie posoudí šířku a délku infiltrace stěny, prorůstání do okolí, případné metastázy do LU CT koloskopie indikováno po neúspěšné endoskopii - velké vinutí střev, neprůchozí stenózy, srůsty</li><li>problém - nerozlišení polypů od obsahu tlustého střeva</li><li>Předpokladem je denzní rozdíl mezi lumen a střevní stěnou → napomáhá insuflace vzduchu do tračníku SONOGRAFIE limitováno přítomností vzduchu v trávicí trubici</li><li>střevní stěna hypoechogenní, centrální část hyperechogenní - šířka stěny 4mm →víc odpovídá patologii (tumor nebo zánět)</li><li>prokáže zvětšené LU (hypoechogenní)</li><li>Endoluminální sonografie = posouzení infiltrace stěn trávicíc trubice, mediastina nebo pankreatu MR</li><li>MR enterografie - nahrazuje invazivní enteroklýzu + eliminuje radiační zátěž</li></ul>",
      "key_points": "<ul><li><strong>Klíčová modalita:</strong> RTG, CT enterografie, MR enterografie, Endoskopie, Hydro-CT.</li><li><strong>Hlavní diagnostický cíl:</strong> Včasné stanovení diagnózy, posouzení rozsahu a lokalizace patologie pro volbu adekvátní terapie.</li><li><strong>Zkušební perla:</strong> Vždy začínat méně invazivní dostupnou modalitou a respektovat kontraindikace (alergie na KL, renální insuficience, kardiostimulátory u MR).</li></ul>",
      "definition": "<ul><li>Metody CT, MR a PET/CT nahrazují některé invazivní metody (endoskopii)</li><li><strong>monokontrastní:</strong> podání jedné pozitivní KL - získáme reliéfový obraz</li><li><strong>Negativní KL:</strong> vzduch, CO2, manitol (ale rychle se vstřebává)</li><li><strong>Pozitivní KL:</strong> Báryové - Mikroplaque, Prontobario (KI - perforace GIT); Jodové - p.</li></ul>",
      "etiology": "<ul><li>Příprava - bezezbytková dieta</li><li>nosem nebo ústy sonda až do duodenojejunální flexury → podání Mikropaque suspenze + negativní metylceluloza → MTC tlačí pozitivní kontrast před sebou → na stěnách zůstává povlak baryové suspenze</li><li>nejprve rektální rourkou baryovou kaši, pak insuflace vzduchu → skiagrafie pod skiaskopickou metodou</li><li>nejprve baryová KL p. o., pak rourkou do dupky aplikace husté baryové KL → přesun na defekační křeslo → snímkování pod skiaskopií a skiagrafií VÝPOČETNÍ TOMOGRAFIE</li></ul>",
      "pathogenesis": "<ul><li>Fyziologický obraz vyžaduje znalost normální radioanatomie, symetrie struktur a fyziologických denzit (CT) a signálových intenzit (MR).</li></ul>",
      "macroscopy": "<ul><li>Prostý snímek= pneumoperitoneum, hladinky při neprůchodnosti střev (ileus), pozření cizího tělesa KONTRASTNÍ VYŠETŘENÍ</li><li><strong>Dvojkontrastní:</strong> kombinace pozitivní a negativní KL → pozitivní vytvoří na sliznici tenkou vrstvu + negativní trávicí trubici roztáhne → hodnotíme slizniční reliéf a průsvit trubice</li><li><strong>Izodenzní KL:</strong> metylcelulóza, HP-7000 → tenké střevo</li><li>o. zředěné s vodou, ale rychle se vstřebávají (I: při podezření perforace nebo obstrukce GIT), i. v. při CT vyšetření střev</li></ul>",
      "microscopy": "<ul><li>a) Enteroklýza tonus trávicí trubice ovlivňujeme farmakologicky (paspertin, morfin)</li><li>Snímky na CT - velká radiační zátěž</li><li>zobrazení tlustého střeva dvoukontrastní metodou</li><li>dynamické zobrazení struktur pánevního dna a konečníku při vyprazdňování</li></ul>",
      "clinical_legacy": "<ul><li>rozhodující význam v diagnostice jednotlivých částí GIT</li><li>v onkologie posoudí šířku a délku infiltrace stěny, prorůstání do okolí, případné metastázy do LU CT koloskopie indikováno po neúspěšné endoskopii - velké vinutí střev, neprůchozí stenózy, srůsty</li><li>problém - nerozlišení polypů od obsahu tlustého střeva</li><li>Předpokladem je denzní rozdíl mezi lumen a střevní stěnou → napomáhá insuflace vzduchu do tračníku SONOGRAFIE limitováno přítomností vzduchu v trávicí trubici</li><li>střevní stěna hypoechogenní, centrální část hyperechogenní - šířka stěny 4mm →víc odpovídá patologii (tumor nebo zánět)</li><li>prokáže zvětšené LU (hypoechogenní)</li><li>Endoluminální sonografie = posouzení infiltrace stěn trávicíc trubice, mediastina nebo pankreatu MR</li><li>MR enterografie - nahrazuje invazivní enteroklýzu + eliminuje radiační zátěž</li></ul>"
    },
    "quiz": [
      {
            "question": "Pneumoperitoneum (volný vzduch pod bránicí) na RTG hrudníku/břicha vstoje svědčí pro:",
            "options": [
                  "Perforaci dutého orgánu (nejčastěji perforovaný vřed duodena nebo žaludku) – chirurgická urgence",
                  "Akutní pankreatitidu s paralytickým ileem",
                  "Mezenterický infarkt bez perforace střeva",
                  "Normální pooperační nález po laparoskopii (do 1 týdne – pak nutno vyloučit perforaci)"
            ],
            "correct": 0,
            "explanation": "Volný vzduch pod bránicí = pneumoperitoneum → perforace dutého orgánu. Nejčastěji: perforovaný peptický vřed, perforace kolon (divertikulitida, maligní). RTG vstoje: srpkovité projasnění pod bránicí. Po laparoskopii vzduch do 3 dnů fyziologicky."
      },
      {
            "question": "Riglerovo znamení (double wall sign) při NPB na RTG břicha vleže označuje:",
            "options": [
                  "Zobrazení obou stran střevní stěny (viditelná i zevní plocha díky vzduch v luminu i peritoneálně = perforace)",
                  "Zdvojení stěny žlučníku při akutní cholecystitidě",
                  "Dvojitou konturu ledviny při perirenální kolekci",
                  "Paralelní linie v tračníku při pneumatosis coli"
            ],
            "correct": 0,
            "explanation": "Riglerovo znamení: vzduch v peritoneu i ve střevním lumenu → viditelná OBĚ strany střevní stěny (normálně vidíme jen vnitřní, vzduch nestačí k zobrazení zevní). Přímý příznak pneumoperitonea na snímku vleže."
      }
]
  },
  {
    "id": "radio-16",
    "title": "RTG obrazy patologických stavů trávicí trubice (záněty, vředy, divertikly, nádory)",
    "section": "Břicho a trávicí trakt",
    "category": "Břicho",
    "modalities": [
      "RTG",
      "CT",
      "MR"
    ],
    "keywords": [
      "plnicí defekt",
      "vředová nika",
      "stenóza (jádřinec jablka)",
      "divertikulóza",
      "Crohnova choroba",
      "ulcerózní kolitida",
      "achalázie (ptačí zobák)",
      "kolorektální karcinom"
    ],
    "image": "images/anki/paste-a5bd11be02a976414158fc8e6d5e9b1afcfadab9.jpg",
    "images": [
      {
        "src": "images/anki/paste-a5bd11be02a976414158fc8e6d5e9b1afcfadab9.jpg",
        "title": "Diagnostický algoritmus u krvácení z dolního GIT",
        "caption": "Vyšetřovací postup při enteroragii: kolonoskopie, CTA břicha k detekci aktivní extravazace kontrastní látky (> 0.5 ml/min) a selektivní angiografie.",
        "modality": "Algoritmus / GIT"
      }
    ],
    "content": {
      "principle": "<ul><li>exofytický - velké defekty v náplni, nepravidelný reliéf, chybění peristaltiky</li><li>Skirhotický - zúžení průsvitu, chybění peristaltiky, slizniční reliéf vymizelý</li><li>ulcerativní - plochý vnořený vřed s okolním chyběním řas a peristaltiky (miskovitý ca žaludku)</li><li>benigní - ostře ohraničený defekt, okolí spoko Divertikl:</li><li>vyklenutí stěny trávicí trubice s KL</li><li>+ vak) tahem okolních struktur - trakční divertikl (široká báze a trojúhelníkový tvar)</li><li>defekt stěny, kt. se plní KL a je symptomem vážného onemocnění</li><li>oválný, ostře ohraničený</li><li><strong>JÍCEN:</strong> Zenkerův divertikl, Achalázie jícnu, Perforace jícnu, gastroezofageální varixy, refluxní korozivní ezofagitida, spinocelulární ca jícnu, hiátové hernie</li><li><strong>TENKÉ STŘEVO:</strong> Meckelův divertikl (průkaz nukleárkou), enteritidy, M. Crohn (v</li></ul>",
      "methodology": "<ul><li><strong>Změny polohy a tvaru:</strong> některé úseky abnormálně dlouhé některé zkrácené; dilatace před překážkou</li></ul>",
      "normal_anatomy": "<ul><li>benigní - vyklenuje se mimo konturu stěny (plus v náplni)</li><li>maligní - v místě defektu náplně, nepřesahuje konturu (minus v náplni) Absces:</li></ul>",
      "pathology": "<ul><li><strong>Zúžený průsvit:</strong> Maligní stenóza krátká, s okolními invaginacemi; příčina - nejčastěji tumor, otočení střeva, vchlípení; odlišit uzávěr od spasmů → podáme spasmolytika</li><li><strong>Defekt v náplní:</strong> nádorem, polypem, tlakem z okolí - pelotový příznak →odlišit defekt od zbytků jídla</li><li><strong>Změny ve sližničním reliéfu:</strong> rozšíření nebo defekty řas u chronických zánětů</li><li><strong>Poruchy tonu a motility:</strong> Hypotonie x hypertonie Nádory:</li><li>získaný nebo vrozený defekt stěny - pulzní divertikl (krček</li><li><strong>Zenkerův divertikl - přechod hltanu a jícnu dorsálně Ulcus:</strong></li><li>v okolí trávicí trubice - mezikličkový</li><li>na CT hypodenzní + lem hyperdenzní po podání KL</li><li>vzduchová bublina projasnění → anaerobní infekce</li><li><strong>ŽALUDEK A DUODENUM:</strong> Vředová choroba, perforace, benigní tu - adenomy, leimyomy, neurogenní tu (hladké, ohraničené defekty), karcinom žaludku, traumata (pars decendens duodeni - řídítka kola, pás auta → intramurální hematom imituje tumorózní proces)</li></ul>",
      "clinical": "<ul><li>oválný, ostře ohraničený</li><li>na CT hypodenzní + lem hyperdenzní po podání KL</li><li>vzduchová bublina projasnění → anaerobní infekce</li><li><strong>JÍCEN:</strong> Zenkerův divertikl, Achalázie jícnu, Perforace jícnu, gastroezofageální varixy, refluxní korozivní ezofagitida, spinocelulární ca jícnu, hiátové hernie</li><li><strong>ŽALUDEK A DUODENUM:</strong> Vředová choroba, perforace, benigní tu - adenomy, leimyomy, neurogenní tu (hladké, ohraničené defekty), karcinom žaludku, traumata (pars decendens duodeni - řídítka kola, pás auta → intramurální hematom imituje tumorózní proces)</li><li><strong>TENKÉ STŘEVO:</strong> Meckelův divertikl (průkaz nukleárkou), enteritidy, M. Crohn (v</li></ul>",
      "key_points": "<ul><li><strong>Klíčová modalita:</strong> RTG, CT, MR.</li><li><strong>Hlavní diagnostický cíl:</strong> Včasné stanovení diagnózy, posouzení rozsahu a lokalizace patologie pro volbu adekvátní terapie.</li><li><strong>Zkušební perla:</strong> Vždy začínat méně invazivní dostupnou modalitou a respektovat kontraindikace (alergie na KL, renální insuficience, kardiostimulátory u MR).</li></ul>",
      "definition": "<ul><li>exofytický - velké defekty v náplni, nepravidelný reliéf, chybění peristaltiky</li><li>Skirhotický - zúžení průsvitu, chybění peristaltiky, slizniční reliéf vymizelý</li><li>ulcerativní - plochý vnořený vřed s okolním chyběním řas a peristaltiky (miskovitý ca žaludku)</li><li>benigní - ostře ohraničený defekt, okolí spoko Divertikl:</li></ul>",
      "etiology": "<ul><li><strong>Změny polohy a tvaru:</strong> některé úseky abnormálně dlouhé některé zkrácené; dilatace před překážkou</li></ul>",
      "pathogenesis": "<ul><li>benigní - vyklenuje se mimo konturu stěny (plus v náplni)</li><li>maligní - v místě defektu náplně, nepřesahuje konturu (minus v náplni) Absces:</li></ul>",
      "macroscopy": "<ul><li><strong>Zúžený průsvit:</strong> Maligní stenóza krátká, s okolními invaginacemi; příčina - nejčastěji tumor, otočení střeva, vchlípení; odlišit uzávěr od spasmů → podáme spasmolytika</li><li><strong>Defekt v náplní:</strong> nádorem, polypem, tlakem z okolí - pelotový příznak →odlišit defekt od zbytků jídla</li><li><strong>Změny ve sližničním reliéfu:</strong> rozšíření nebo defekty řas u chronických zánětů</li><li><strong>Poruchy tonu a motility:</strong> Hypotonie x hypertonie Nádory:</li></ul>",
      "microscopy": "<ul><li>získaný nebo vrozený defekt stěny - pulzní divertikl (krček</li><li><strong>Zenkerův divertikl - přechod hltanu a jícnu dorsálně Ulcus:</strong></li><li>v okolí trávicí trubice - mezikličkový</li><li>na CT hypodenzní + lem hyperdenzní po podání KL</li></ul>",
      "clinical_legacy": "<ul><li>oválný, ostře ohraničený</li><li>na CT hypodenzní + lem hyperdenzní po podání KL</li><li>vzduchová bublina projasnění → anaerobní infekce</li><li><strong>JÍCEN:</strong> Zenkerův divertikl, Achalázie jícnu, Perforace jícnu, gastroezofageální varixy, refluxní korozivní ezofagitida, spinocelulární ca jícnu, hiátové hernie</li><li><strong>ŽALUDEK A DUODENUM:</strong> Vředová choroba, perforace, benigní tu - adenomy, leimyomy, neurogenní tu (hladké, ohraničené defekty), karcinom žaludku, traumata (pars decendens duodeni - řídítka kola, pás auta → intramurální hematom imituje tumorózní proces)</li><li><strong>TENKÉ STŘEVO:</strong> Meckelův divertikl (průkaz nukleárkou), enteritidy, M. Crohn (v</li></ul>"
    },
    "quiz": [
      {
            "question": "Hepatocelulární karcinom (HCC) má na dynamickém CT typický vzorek sycení:",
            "options": [
                  "Arterial washout pattern: silné sycení v arteriální fázi + vymývání v portální/venózní fázi",
                  "Hypovaskularní léze bez sycení v arteriální fázi (jako metastázy kolorektálního Ca)",
                  "Perifokální sycení jako prsten (ring enhancement) s centrální nekrózou = charakteristické",
                  "Difuzní homogenní sycení v celé venózní fázi (jako hemangiom)"
            ],
            "correct": 0,
            "explanation": "HCC = hepatoarteriální výživa. Dynamické CT/MR: 1) arteriální fáze – výrazné sycení (HCC hypervaskularní), 2) portálně-venózní fáze – washout (HCC tmavší než okolní jaterní parenchym). Tento vzor je diagnostický bez biopsie (LI-RADS 5). Hemangiom = nodulární perifokální sycení."
      },
      {
            "question": "Klasifikace Bosniakova (I–IV) se týká:",
            "options": [
                  "Renálních cyst (I = jednoduchá cystа bez maligního potenciálu; IV = multilokulární s enhancementem = chirurgicky)",
                  "Jaterních lézí (FNH, HCC, hemangiom, metastázy)",
                  "Plicních nodulů (Fleischner, Lung-RADS)",
                  "Ovariálních cyst a tumorů (IOTA klasifikace)"
            ],
            "correct": 0,
            "explanation": "Bosniakova klasifikace na CT/MR hodnotí renální cysty: I = jednoduchá (benigní), II = minimálně komplexní (benigní), IIF = sledovat, III = chirurgie nebo biopsie (40% maligní), IV = chirurgie (maligní). Nezaměňovat s LI-RADS (játra) nebo Lung-RADS (plíce)."
      }
]
  },
  {
    "id": "radio-17",
    "title": "Zobrazování náhlých příhod břišních (NPB)",
    "section": "Břicho a trávicí trakt",
    "category": "Břicho",
    "modalities": [
      "RTG nativ",
      "UZ",
      "CT břicha"
    ],
    "keywords": [
      "pneumoperitoneum",
      "srpkovité projasnění pod bránicí",
      "Riglerův příznak (double wall)",
      "ileus",
      "hladinky plynu a tekutiny",
      "apendicitida",
      "mezenteriální ischemie",
      "strangulace"
    ],
    "image": "images/anki/pneumoperitoneum-12.jpg",
    "images": [
      {
        "src": "images/anki/pneumoperitoneum-12.jpg",
        "title": "Pneumoperitoneum – volný plyn pod bránicí vestoje",
        "caption": "Srpkovité projasnění volného vzduchu pod pravou klenbou bránice oddělující bránici od jater při perforaci dutého orgánu.",
        "modality": "RTG Hrudník/Břicho"
      },
      {
        "src": "images/anki/pneumoperitoneum-child.png",
        "title": "Riglerův příznak (Double wall sign) na RTG břicha vleže",
        "caption": "Riglerův znak: plynová náplň uvnitř i vně střevní kličky způsobuje, že je střevní stěna ostře ohraničena z obou stran.",
        "modality": "RTG Břicho"
      },
      {
        "src": "images/anki/small-bowel-obstruction-15.jpg",
        "title": "Mechanický ileus tenkého střeva – pravidlo 3-6-9",
        "caption": "Dilatace tenkého střeva nad 3 cm, tračníku nad 6 cm a céka nad 9 cm svědčí pro obstrukci střevního lumina.",
        "modality": "RTG Břicho"
      },
      {
        "src": "images/anki/paste-3ff058e374b992338cc167b53603ba6978944365.jpg",
        "title": "Akutní apendicitida a bolest v pravém podbřišku",
        "caption": "Diagnostika akutní apendicitidy: UZ jako metoda 1. volby u dětí a mladých pacientů (aperistaltický terčovitý útvar > 6 mm), kontrastní CT u dospělých.",
        "modality": "UZ / CT"
      }
    ],
    "content": {
      "principle": "<ul><li>NPB = jeden z nejzávažnějších stavů v urgentní medicíně</li><li><strong>rozdělení:</strong> úrazové x neúrazové</li><li>Zobrazovací metoda = u nestabilních UZ, stabilní RTG</li><li>Irigoskopie - desinvaginace tlustého střeva u dětí</li><li><strong>UZ:</strong> dobře dostupné, neinvazivní → průkaz poškození orgánů v břiše a volné tekutiny (hl. krve a ascites) = subfrenická oblast, hepatorenální prostor (mezi játry a pravou ledvinou), okolí sleziny, Douglasův prostor</li><li><strong>CT:</strong> nejpřesnější, nativní + kontrastní, vždy bazální plicní pole i malou pánev, možnost multiplanární rekonstrukce</li><li>zvýšení intraabdominálního tlaku → komprese → decelerace</li></ul>",
      "methodology": "<ul><li>Kontrastní vyšetření při ileozních stavech či při průkazu perforace (Jód!) - CT</li><li>katetrizační angiografie (s případnou intervencí), ERCP (pankreas), MR (výjimečně) Traumata:</li></ul>",
      "normal_anatomy": "<ul><li>Hydroaerické fenomény = hladinky: příznak neprůchodnosti trávicí trubice → na hranici retenční tekutiny a vzduchu se vytváří hladinky → snímky ve vertikále</li></ul>",
      "pathology": "<ul><li>objevují se náhle, z plného zdraví → nutné stanovení diagnózy včas</li><li><strong>KO:</strong> bolesti břicha, peritoneální příznaky, zvracení, hypovolémie, kardiovaskulární a respirační poruchy</li><li><strong>Další dělení:</strong> zánětlivé, ileózní, krvácení do GIT</li><li><strong>RTG snímek břicha:</strong> ve stoje s horizontálním průběhem rtg paprsků (někdy vleže) → někdy imituje záněty nebo embolie v bazálních partiích hrudníku (nutno zachytit i 3 cm plic), zlomeniny žeber = možná traumatizace sleziny nebo jater → Pneumoperitoneum + hydroaerické fenomény</li><li><strong>Pneumoperitoneum:</strong> průkaz plynu v břišní dutině = srpkovité projasnění pod bránicí (nejčastěji netraumatické = u perforace duodenálního vředu nebo divertiklů sigmoidea, taky po laparoskopických operacích)</li><li>otevřená poranění x uzavřená (tupými předměty)</li><li>perforace trávicí trubice, hemoperitoneum, krvácení do stěny střeva, lacerace orgánu, subkapsulární hematomy, lap belt injuries Neúrazové NPB:</li><li><strong>zánětlivé stavy:</strong> jednotlivé orgány nebo peritoneum</li><li><strong>ileózní stavy:</strong> Mechanický (obstrukční, strangulační, volvulus, invaginace → prostý snímek břicha + pasáž vodnou jodovou KL + CT); Neurogenní (paralytický - komplikace po operacích; spastický); Cévní (a. nebo v. mesenterica superior nebo inferior → embolie, aterosklerózy → snímek + CT angiogragie)</li><li><strong>Krvácení do GIT:</strong> hemateméza (zvracení krve), melena, enterorrhagie → endoskopie, pasáž tenkým střevem, kolonoskopie (+CT)</li></ul>",
      "clinical": "<ul><li>zvýšení intraabdominálního tlaku → komprese → decelerace</li><li>perforace trávicí trubice, hemoperitoneum, krvácení do stěny střeva, lacerace orgánu, subkapsulární hematomy, lap belt injuries Neúrazové NPB:</li><li><strong>zánětlivé stavy:</strong> jednotlivé orgány nebo peritoneum</li><li><strong>ileózní stavy:</strong> Mechanický (obstrukční, strangulační, volvulus, invaginace → prostý snímek břicha + pasáž vodnou jodovou KL + CT); Neurogenní (paralytický - komplikace po operacích; spastický); Cévní (a. nebo v. mesenterica superior nebo inferior → embolie, aterosklerózy → snímek + CT angiogragie)</li><li><strong>Krvácení do GIT:</strong> hemateméza (zvracení krve), melena, enterorrhagie → endoskopie, pasáž tenkým střevem, kolonoskopie (+CT)</li></ul>",
      "key_points": "<ul><li><strong>Klíčová modalita:</strong> RTG nativ, UZ, CT břicha.</li><li><strong>Hlavní diagnostický cíl:</strong> Včasné stanovení diagnózy, posouzení rozsahu a lokalizace patologie pro volbu adekvátní terapie.</li><li><strong>Zkušební perla:</strong> Vždy začínat méně invazivní dostupnou modalitou a respektovat kontraindikace (alergie na KL, renální insuficience, kardiostimulátory u MR).</li></ul>",
      "definition": "<ul><li>NPB = jeden z nejzávažnějších stavů v urgentní medicíně</li><li><strong>rozdělení:</strong> úrazové x neúrazové</li><li>Zobrazovací metoda = u nestabilních UZ, stabilní RTG</li><li>Irigoskopie - desinvaginace tlustého střeva u dětí</li></ul>",
      "etiology": "<ul><li>Kontrastní vyšetření při ileozních stavech či při průkazu perforace (Jód!) - CT</li><li>katetrizační angiografie (s případnou intervencí), ERCP (pankreas), MR (výjimečně) Traumata:</li></ul>",
      "pathogenesis": "<ul><li>Hydroaerické fenomény = hladinky: příznak neprůchodnosti trávicí trubice → na hranici retenční tekutiny a vzduchu se vytváří hladinky → snímky ve vertikále</li></ul>",
      "macroscopy": "<ul><li>objevují se náhle, z plného zdraví → nutné stanovení diagnózy včas</li><li><strong>KO:</strong> bolesti břicha, peritoneální příznaky, zvracení, hypovolémie, kardiovaskulární a respirační poruchy</li><li><strong>Další dělení:</strong> zánětlivé, ileózní, krvácení do GIT</li><li><strong>RTG snímek břicha:</strong> ve stoje s horizontálním průběhem rtg paprsků (někdy vleže) → někdy imituje záněty nebo embolie v bazálních partiích hrudníku (nutno zachytit i 3 cm plic), zlomeniny žeber = možná traumatizace sleziny nebo jater → Pneumoperitoneum + hydroaerické fenomény</li></ul>",
      "microscopy": "<ul><li><strong>Pneumoperitoneum:</strong> průkaz plynu v břišní dutině = srpkovité projasnění pod bránicí (nejčastěji netraumatické = u perforace duodenálního vředu nebo divertiklů sigmoidea, taky po laparoskopických operacích)</li><li>otevřená poranění x uzavřená (tupými předměty)</li><li>perforace trávicí trubice, hemoperitoneum, krvácení do stěny střeva, lacerace orgánu, subkapsulární hematomy, lap belt injuries Neúrazové NPB:</li><li><strong>zánětlivé stavy:</strong> jednotlivé orgány nebo peritoneum</li></ul>",
      "clinical_legacy": "<ul><li>zvýšení intraabdominálního tlaku → komprese → decelerace</li><li>perforace trávicí trubice, hemoperitoneum, krvácení do stěny střeva, lacerace orgánu, subkapsulární hematomy, lap belt injuries Neúrazové NPB:</li><li><strong>zánětlivé stavy:</strong> jednotlivé orgány nebo peritoneum</li><li><strong>ileózní stavy:</strong> Mechanický (obstrukční, strangulační, volvulus, invaginace → prostý snímek břicha + pasáž vodnou jodovou KL + CT); Neurogenní (paralytický - komplikace po operacích; spastický); Cévní (a. nebo v. mesenterica superior nebo inferior → embolie, aterosklerózy → snímek + CT angiogragie)</li><li><strong>Krvácení do GIT:</strong> hemateméza (zvracení krve), melena, enterorrhagie → endoskopie, pasáž tenkým střevem, kolonoskopie (+CT)</li></ul>"
    },
    "quiz": [
      {
            "question": "Portální hypertenze je na UZ diagnostikována nálezem:",
            "options": [
                  "Průměr portální žíly > 13 mm + redukce nebo reverze průtoku v PW doppleru + splenomegalie + ascites",
                  "Zúžení portální žíly < 5 mm s turbulentním průtokem",
                  "Izolovaná hepatomegalie bez změny průtoku v Doppleru",
                  "Hyperechogenní jaterní parenchym bez změny průtoku v portální žíle"
            ],
            "correct": 0,
            "explanation": "UZ portální hypertenze: průměr v. portae > 13 mm, pokles nebo reverze průtoku (hepatofugální), splenomegalie, ascites, portosystémové kolaterály (paraumbilicální žíla, koronární žíla). Zlatý standard = jaterní venózní tlakový gradient (HVPG) > 5 mmHg."
      },
      {
            "question": "TIPS (Transjugular Intrahepatic Portosystemic Shunt) je intervenční výkon indikovaný u:",
            "options": [
                  "Refrakterního ascitu nebo recidivujícího varikózního krvácení při portální hypertenzi",
                  "Hepatocelulárního karcinomu jako kurativní léčba",
                  "Akutní cholecystitidy jako alternativa cholecystektomie",
                  "Renální arteriální stenózy jako alternativa chirurgie"
            ],
            "correct": 0,
            "explanation": "TIPS = perkutánní intrahepatický portosystémový zkrat mezi v. portae a jaterní žílou (zaveden přes vena jugularis). Snižuje portální tlak. Indikace: refrakterní ascit, recidivující varikózní krvácení po farmakologickém/endoskopickém selhání."
      }
]
  },
  {
    "id": "radio-18",
    "title": "Zobrazování onemocnění jater (cysty, hemangiom, FNH, adenom, HCC, metastázy)",
    "section": "Břicho a trávicí trakt",
    "category": "Břicho",
    "modalities": [
      "UZ",
      "4-fázové CT",
      "MR jater (hepatospecifické KL)"
    ],
    "keywords": [
      "jaterní steatóza",
      "cirhóza",
      "hemangiom (nodulární periferní sycení)",
      "FNH (centrální jizva)",
      "hepatocelulární karcinom (HCC - wash-in a wash-out)",
      "jaterní metastázy",
      "Primovist"
    ],
    "image": "images/anki/paste-0aa7fc337dee405a258dc678221f2dcb8de74f7b.jpg",
    "images": [
      {
        "src": "images/anki/paste-0aa7fc337dee405a258dc678221f2dcb8de74f7b.jpg",
        "title": "Ultrazvukové vyšetření hepatobiliární oblasti",
        "caption": "Ultrasonografie pravého podžebří: zhodnocení jaterního parenchymu, žlučníku, intra- a extrahepatálních žlučovodů a portální žíly.",
        "modality": "UZ Játra"
      }
    ],
    "content": {
      "principle": "<ul><li>Játra - dva laloky →rozdělené průběhem lig. falciforme a lig. teres + v. portae a a.</li><li><strong>portae každý na dva) UZ:</strong> je vždy první volbou</li><li>v. portae hyperechogenní periportální vazivo (svítí)</li><li>obvykle druhou vyšetřovací metodou</li><li>nativně nebo s KL- arteriální fáze (30 s), portální fáze (60 s), parenchymatózní po 1-2 minutách</li><li>arteriální fáze - útvary z hepatocytů hepatocelulární ca, hemangiom (centripetálně), fokální nodulární hyperplazie, hypervaskularizované metastázy, dysplastické uzly jaterní cirhózy</li><li><strong>portální fáze - sytí se metastázy GIT PET/CT:</strong> u kolorektálního karcinomu (mají časté metastázy do jater) MR:</li><li>nativní hemangiomy - vysoce signální v T2</li><li>poškození parenchymu, cév i žlučových cest</li><li><strong>Kontuze:</strong> oválný, hypoechogenní okrsek jaterního parenchymu, průkaz na CT</li><li><strong>Hemangiom:</strong> solidní útvar, na UZ hyperechogenní, ostře ohraničený, bez hypoechogenního lemu, na CT hypodenzní útvar - masivně se sytí KL z periferie do centra</li><li><strong>Hepatocelulární ca:</strong> velké solidní ložisko, s nepravidelnou homogenitou, často s centrální nekrózou, hypoechogenní okraje, expanzivní; CT - hypodenzní, kontrastně se sytí v arteriální fázi; MR - po podání hepatobiliárních KL</li><li><strong>Metastázy:</strong> z nejrůznějších primárních nádorů (ca žaludku, tračníku, pankreatu, plic, mamy, gynekologické, lymfom); z GIT = hypovaskularizované (sytí se v portální fázi) → klasický hyperechogenní uzel s hypoechogenní lemem (UZ); z velkého oběhu = hypervaskularizované (patrné v arteriální fázi) Portální hypertenze:</li><li>Doppler → posouzení směru a rychlosti toku</li><li>průkaz portokaválních anastomóz, splenomegalie, ascites, jícnové varixy</li></ul>",
      "methodology": "<ul><li>UZ, angiografie</li></ul>",
      "normal_anatomy": "<ul><li><strong>Cirhóza:</strong> nehomogenní struktura, střídání okrsků hypo a hyperchogenity a hyperdenzity, neostré jizevnaté okraje, cirhotické uzly izoechogenní i izodenzní;</li></ul>",
      "pathology": "<ul><li>hepatica propria a d. choledochus → 8 laloků (rozdělené jaterními žilami na 4 + v.</li><li>parenchym má pravidelnou strukturu, bohatý reliéf</li><li>řízení biopsie, peroperační sonografie ke specifikaci patologických ložisek CT:</li><li><strong>KL:</strong> cheláty gadolinia (jen intravenózně →nedostanou se do buněk), hepatobiliární KL (parciálně proniká do hepatocytů, KL pro zobrazení RES</li><li>Difuzní změny</li><li><strong>Steatóza:</strong> játra zvětšené, na UZ hyperechogenní (bílé), CT difüzní hypodenzita</li><li>zvýraznění hyperechogenních okrajů v. portae; průkaz ascitu a portální hypertenze</li><li><strong>Hepatomegalie:</strong> difuzní porucha echogenity a denzity, pravostranné srdeční selhání Ložiskové změny: charakterizovány cystami (běžný vedlejší nález), abscesy, benigními nebo maligními nádory, fokální nodulární hyperplazií Poranění jater:</li><li><strong>intrahepatický hematom:</strong> anechogenní, poté hyperechogenní, kontrastní CT → hypodenzní defekt v kontrastně zobrazeném parenchymu</li><li><strong>subkapsulární hematom:</strong> hypoechogenní proužek odtlačující parenchym od kapsuly, na CT jako hypodenzní pás</li><li><strong>Hemoperitoneum:</strong> volná tekutina ve všech modalitách Nádory:</li><li>Cholangiokarcinom</li><li>prehepatická, intrahepatická, posthepatická</li><li>nepřímé CT, MR splenoportografie</li></ul>",
      "clinical": "<ul><li><strong>Hepatocelulární ca:</strong> velké solidní ložisko, s nepravidelnou homogenitou, často s centrální nekrózou, hypoechogenní okraje, expanzivní; CT - hypodenzní, kontrastně se sytí v arteriální fázi; MR - po podání hepatobiliárních KL</li><li>Cholangiokarcinom</li><li><strong>Metastázy:</strong> z nejrůznějších primárních nádorů (ca žaludku, tračníku, pankreatu, plic, mamy, gynekologické, lymfom); z GIT = hypovaskularizované (sytí se v portální fázi) → klasický hyperechogenní uzel s hypoechogenní lemem (UZ); z velkého oběhu = hypervaskularizované (patrné v arteriální fázi) Portální hypertenze:</li><li>prehepatická, intrahepatická, posthepatická</li><li>UZ, angiografie</li><li>Doppler → posouzení směru a rychlosti toku</li><li>nepřímé CT, MR splenoportografie</li><li>průkaz portokaválních anastomóz, splenomegalie, ascites, jícnové varixy</li></ul>",
      "key_points": "<ul><li><strong>Klíčová modalita:</strong> UZ, 4-fázové CT, MR jater (hepatospecifické KL).</li><li><strong>Hlavní diagnostický cíl:</strong> Včasné stanovení diagnózy, posouzení rozsahu a lokalizace patologie pro volbu adekvátní terapie.</li><li><strong>Zkušební perla:</strong> Vždy začínat méně invazivní dostupnou modalitou a respektovat kontraindikace (alergie na KL, renální insuficience, kardiostimulátory u MR).</li></ul>",
      "definition": "<ul><li>Játra - dva laloky →rozdělené průběhem lig. falciforme a lig. teres + v. portae a a.</li><li><strong>portae každý na dva) UZ:</strong> je vždy první volbou</li><li>v. portae hyperechogenní periportální vazivo (svítí)</li><li>obvykle druhou vyšetřovací metodou</li></ul>",
      "etiology": "<ul><li>UZ, angiografie</li></ul>",
      "pathogenesis": "<ul><li><strong>Cirhóza:</strong> nehomogenní struktura, střídání okrsků hypo a hyperchogenity a hyperdenzity, neostré jizevnaté okraje, cirhotické uzly izoechogenní i izodenzní;</li></ul>",
      "macroscopy": "<ul><li>hepatica propria a d. choledochus → 8 laloků (rozdělené jaterními žilami na 4 + v.</li><li>parenchym má pravidelnou strukturu, bohatý reliéf</li><li>řízení biopsie, peroperační sonografie ke specifikaci patologických ložisek CT:</li><li><strong>KL:</strong> cheláty gadolinia (jen intravenózně →nedostanou se do buněk), hepatobiliární KL (parciálně proniká do hepatocytů, KL pro zobrazení RES</li></ul>",
      "microscopy": "<ul><li>Difuzní změny</li><li><strong>Steatóza:</strong> játra zvětšené, na UZ hyperechogenní (bílé), CT difüzní hypodenzita</li><li>zvýraznění hyperechogenních okrajů v. portae; průkaz ascitu a portální hypertenze</li><li><strong>Hepatomegalie:</strong> difuzní porucha echogenity a denzity, pravostranné srdeční selhání Ložiskové změny: charakterizovány cystami (běžný vedlejší nález), abscesy, benigními nebo maligními nádory, fokální nodulární hyperplazií Poranění jater:</li></ul>",
      "clinical_legacy": "<ul><li><strong>Hepatocelulární ca:</strong> velké solidní ložisko, s nepravidelnou homogenitou, často s centrální nekrózou, hypoechogenní okraje, expanzivní; CT - hypodenzní, kontrastně se sytí v arteriální fázi; MR - po podání hepatobiliárních KL</li><li>Cholangiokarcinom</li><li><strong>Metastázy:</strong> z nejrůznějších primárních nádorů (ca žaludku, tračníku, pankreatu, plic, mamy, gynekologické, lymfom); z GIT = hypovaskularizované (sytí se v portální fázi) → klasický hyperechogenní uzel s hypoechogenní lemem (UZ); z velkého oběhu = hypervaskularizované (patrné v arteriální fázi) Portální hypertenze:</li><li>prehepatická, intrahepatická, posthepatická</li><li>UZ, angiografie</li><li>Doppler → posouzení směru a rychlosti toku</li><li>nepřímé CT, MR splenoportografie</li><li>průkaz portokaválních anastomóz, splenomegalie, ascites, jícnové varixy</li></ul>"
    },
    "quiz": [
      {
            "question": "Murphy's sign na UZ cholecystografie je:",
            "options": [
                  "Maximální citlivost žlučníku přímo pod sondou při kompresi (UZ-Murphy → akutní cholecystitida)",
                  "Zvukový reflex za echogenním kamenem v žlučníku (akustický stín)",
                  "Peristaltická vlna sledovaná při skiaskopii v žlučníku",
                  "Fistula mezi žlučníkem a tenkým střevem na CT"
            ],
            "correct": 0,
            "explanation": "UZ Murphy sign = maximální bolestivost přesně pod sondou v místě ultrazvukové projekce žlučníku. Vysoce specifický pro akutní cholecystitidu v kombinaci s nálezem ztluštělé stěny (> 3 mm) a perikolecystické tekutiny."
      },
      {
            "question": "Cholelitiáza na UZ se projevuje:",
            "options": [
                  "Hyperechogenní ložisko v žlučníku s akustickým stínem distálně a mobilitou při změně polohy",
                  "Hypoechogenní ložisko bez akustického stínu (může jít o polypus nebo tumor)",
                  "Difuzním ztluštěním stěny žlučníku bez ložiskové léze",
                  "Dilatovanými intrahepatálními žlučovody bez ložiska v žlučníku"
            ],
            "correct": 0,
            "explanation": "Cholelitiáza na UZ: echogenní odraz (hyperechogenní obraz kamene) + akustický stín distálně (nejdůležitější příznak) + pohyblivost (při změně polohy kamen padá ke dnu). Polyp: nehybný, bez stínu. Adenomyomatóza: ztlustlá stěna s artefakty."
      }
]
  },
  {
    "id": "radio-19",
    "title": "Zobrazování onemocnění portálního řečiště a portální hypertenze",
    "section": "Břicho a trávicí trakt",
    "category": "Břicho",
    "modalities": [
      "Doppler UZ",
      "CT portografie",
      "TIPS"
    ],
    "keywords": [
      "portální hypertenze",
      "portální žíla",
      "hepatofugální tok",
      "kolaterální oběh",
      "gastroezofageální varixy",
      "splenomegalie",
      "trombóza v. portae",
      "TIPS"
    ],
    "image": "images/anki/paste-b5cd2e1654228a7421b2fcf8f46d5ea4dfe463e8.jpg",
    "images": [
      {
        "src": "images/anki/paste-b5cd2e1654228a7421b2fcf8f46d5ea4dfe463e8.jpg",
        "title": "Zobrazení mezenteriálního a portálního cévního řečiště",
        "caption": "Kontrastní CT angiografie a portální fáze pro průkaz vaskulárních okluzí, kolaterálního řečiště a patologií mezenteriálních cév.",
        "modality": "CT Angiografie"
      }
    ],
    "content": {
      "principle": "<ul><li><strong>UZ:</strong> v. portae hyperechogenní periportální vazivo (svítí)</li><li><strong>CT:</strong> nativní + KL → arteriální fáze (30 s), portální fáze (60 s), parenchymatózní po 1-2 minutách</li><li><strong>ANGIOGRAFICKÉ METODY:</strong> v diagnostice portální hypertenze je metodou volby dopplerovská sonografie Portální hypertenze:</li><li>Doppler → posouzení směru a rychlosti toku</li></ul>",
      "methodology": "<ul><li>UZ, angiografie</li></ul>",
      "normal_anatomy": "<ul><li>Fyziologický obraz vyžaduje znalost normální radioanatomie, symetrie struktur a fyziologických denzit (CT) a signálových intenzit (MR).</li></ul>",
      "pathology": "<ul><li><strong>MR:</strong> splenoportografie po podání KL (gadolinia)</li><li>prehepatická, intrahepatická, posthepatická</li><li>nepřímé CT, MR splenoportografie</li><li>průkaz portokaválních anastomóz, splenomegalie, ascites, jícnové varixy</li></ul>",
      "clinical": "<ul><li>Doppler → posouzení směru a rychlosti toku</li><li>nepřímé CT, MR splenoportografie</li><li>průkaz portokaválních anastomóz, splenomegalie, ascites, jícnové varixy</li></ul>",
      "key_points": "<ul><li><strong>Klíčová modalita:</strong> Doppler UZ, CT portografie, TIPS.</li><li><strong>Hlavní diagnostický cíl:</strong> Včasné stanovení diagnózy, posouzení rozsahu a lokalizace patologie pro volbu adekvátní terapie.</li><li><strong>Zkušební perla:</strong> Vždy začínat méně invazivní dostupnou modalitou a respektovat kontraindikace (alergie na KL, renální insuficience, kardiostimulátory u MR).</li></ul>",
      "definition": "<ul><li><strong>UZ:</strong> v. portae hyperechogenní periportální vazivo (svítí)</li><li><strong>CT:</strong> nativní + KL → arteriální fáze (30 s), portální fáze (60 s), parenchymatózní po 1-2 minutách</li><li><strong>ANGIOGRAFICKÉ METODY:</strong> v diagnostice portální hypertenze je metodou volby dopplerovská sonografie Portální hypertenze:</li><li>Doppler → posouzení směru a rychlosti toku</li></ul>",
      "etiology": "<ul><li>UZ, angiografie</li></ul>",
      "pathogenesis": "<ul><li>Fyziologický obraz vyžaduje znalost normální radioanatomie, symetrie struktur a fyziologických denzit (CT) a signálových intenzit (MR).</li></ul>",
      "macroscopy": "<ul><li><strong>MR:</strong> splenoportografie po podání KL (gadolinia)</li><li>prehepatická, intrahepatická, posthepatická</li><li>nepřímé CT, MR splenoportografie</li><li>průkaz portokaválních anastomóz, splenomegalie, ascites, jícnové varixy</li></ul>",
      "microscopy": "<ul><li>Doppler → posouzení směru a rychlosti toku</li><li>nepřímé CT, MR splenoportografie</li><li>průkaz portokaválních anastomóz, splenomegalie, ascites, jícnové varixy</li></ul>",
      "clinical_legacy": "<ul><li>Doppler → posouzení směru a rychlosti toku</li><li>nepřímé CT, MR splenoportografie</li><li>průkaz portokaválních anastomóz, splenomegalie, ascites, jícnové varixy</li></ul>"
    },
    "quiz": [
      {
            "question": "CT kritérium těžké akutní pankreatitidy (Balthazar E / CTSI) zahrnuje:",
            "options": [
                  "Nekrotická nekontrastně se sytící ložiska v pankreatu + peripankreatické kolekce (CTSI 7–10 = závažná)",
                  "Zvětšení pankreatu > 5 cm v největším rozměru bez nekrózy",
                  "Kalcifikace v pankreatu svědčící pro chronickou pankreatitidu",
                  "Dilatace ductus pancreaticus > 3 mm bez nekrózy (svědčí pro obstrukci)"
            ],
            "correct": 0,
            "explanation": "CTSI (CT Severity Index) = Balthazar skóre (A–E) + % nekrózy. Balthazar E: peripankreatické kolekce ≥ 2. Nekróza > 30% pankreatu = závažná (mortalita ~ 15%). CT indikováno při pochybách (Ranson ≥ 3, APACHE > 8) nebo po 72 h k průkazu nekrózy."
      },
      {
            "question": "Adenokarcinom pankreatu se nejčastěji zobrazuje jako:",
            "options": [
                  "Hypovaskularní hypodenzní ložisko v hlavě pankreatu s dilatací žlučovodu a ductus pancreaticus (double duct sign)",
                  "Hypervaskularní léze s výrazným sycením v arteriální fázi (jako HCC nebo NET)",
                  "Kalcifikované ložisko s pomalým růstem (charakteristické pro NET)",
                  "Cystická léze s septy bez pevné složky (= IPMN, ne adenokarcinom)"
            ],
            "correct": 0,
            "explanation": "Pankreatický adenokarcinom: 70% v hlavě pankreatu → obstrukce choledochu + ductus pancreaticus = double duct sign. CT: hypodenzní, špatně ohraničená léze, bez kontrastu. Staging: resekabilita = žádný kontakt s v. mesenterica sup./portou nebo s arteriemi."
      }
]
  },
  {
    "id": "radio-20",
    "title": "Zobrazování onemocnění žlučníku a žlučových cest (cholelitiáza, cholecystitida, ikterus)",
    "section": "Břicho a trávicí trakt",
    "category": "Břicho",
    "modalities": [
      "UZ",
      "MRCP",
      "ERCP",
      "PTC"
    ],
    "keywords": [
      "cholecystolitiáza",
      "akustický stín",
      "Murphyho příznak sonografický",
      "cholecystitida",
      "rozšíření choledochu",
      "MRCP",
      "Klatskinův tumor",
      "obstrukční ikterus"
    ],
    "image": "images/anki/paste-0aa7fc337dee405a258dc678221f2dcb8de74f7b.jpg",
    "images": [
      {
        "src": "images/anki/paste-0aa7fc337dee405a258dc678221f2dcb8de74f7b.jpg",
        "title": "Ultrazvuk žlučníku – cholelitiáza a cholecystitida",
        "caption": "Hyperechogenní konkrement s distálním akustickým stínem v lumen žlučníku, prosáknutí a ztluštění stěny žlučníku > 3 mm při zánětu.",
        "modality": "UZ Žlučník"
      }
    ],
    "content": {
      "principle": "<ul><li><strong>UZ:</strong></li><li>žlučník má tenkou stěnu, dorzální echo s anechogenním obsahem → vyšetřujeme vždy na lačno, jinak je obraz zkreslen MRCP (Cholangiopankreatografie)</li><li>neinvazivní metoda - bez použití kontrastní látky se v přístroji magnetické rezonance zaměříme na požadovaný úsek (tj. žlučové cesty, slinivka a okolí) a ten skenujeme.</li><li><strong>I:</strong> porucha odtoku žluči žlučovodem, a přitom nelze překážku odstranit „zevnitř“ pomocí ERCP; jen při rozšířených žlučovodech ENDOSKOPICKÁ RETROGRÁDNÍ CHOLANGIOPANKREATIKOGRAFIE (ERCP) invazivní vyšetření</li><li>jen UZ → cholesterolové kameny = snadno diferencovatelné v náplni žlučníku →výrazně odráží UZ vlny; někdy patrné i na RTG</li></ul>",
      "methodology": "<ul><li><strong>I:</strong> při podezření na zúžení žlučových cest žlučovými kameny PERKUTÁNNÍ TRANSHEPATICKÁ CHOLANGIOGRAFIE (PTC)</li><li>pod skiagrafickou kontrolou → jemnou jehlou punkce žlučových cest → naplnění jodovou KL →sledování průniku do duodena</li><li><strong>PEROPERAČNÍ CHOLANGIOGRAFIE:</strong> kontrolní zobrazení žlučových cest v průběhu operace Cholecystolitiáza:</li><li>hyperechogenní ložisko + akustický stín + změna polohy ložiska při změně polohy pacienta (když nemění polohy → polypy)</li></ul>",
      "normal_anatomy": "<ul><li>Fyziologický obraz vyžaduje znalost normální radioanatomie, symetrie struktur a fyziologických denzit (CT) a signálových intenzit (MR).</li></ul>",
      "pathology": "<ul><li>žlučové cesty nemají vazivo → nesvítí</li><li>rychlá metoda pro zobrazení žlučových cest a d. pancreaticus</li><li>hydrografická metoda - hyperintenzivní žlučové cesty a žlučník patrné na tmavém podkladě</li><li>gastroenterologové → fibroskop do duodena (Vaterova papila) pod skiaskopickou kontrolou → naplnění KL d. pancreaticus a žlučovody</li><li><strong>drobné konkrementy nebo drť může vytvářet hladinku Akutní zánět:</strong> edematózní prosáknutí stěny žlučníku →vícevrstvé složení stěny Chronický zánět: zesílení stěny, svraštění žlučníku, nález konkrementů; porcelánový žlučník = kalcifikovaná stěna (kompletně odráží UZ vlny) Obstruktivní cholestáza: rozšíření žlučovodů vedle větví porty = příznak dvouhlavňové pušky → příčina blokády = obstrukce konkrementem, jaterní metastázou, po operacích Nádory: adenomy, papilomy, adenokarcinom (v místě žlučníku solidní útvar s dilatací žlučových cest), cholangiokarcinom (extrahepatální, Klatskinův tumor)</li></ul>",
      "clinical": "<ul><li>často spojen s následnou intervencí</li><li><strong>I:</strong> diagnostice a léčbě zúžení či ucpání žlučových cest s poruchou odtoku žluči a u nemocí slinivky</li></ul>",
      "key_points": "<ul><li><strong>Klíčová modalita:</strong> UZ, MRCP, ERCP, PTC.</li><li><strong>Hlavní diagnostický cíl:</strong> Včasné stanovení diagnózy, posouzení rozsahu a lokalizace patologie pro volbu adekvátní terapie.</li><li><strong>Zkušební perla:</strong> Vždy začínat méně invazivní dostupnou modalitou a respektovat kontraindikace (alergie na KL, renální insuficience, kardiostimulátory u MR).</li></ul>",
      "definition": "<ul><li><strong>UZ:</strong></li><li>žlučník má tenkou stěnu, dorzální echo s anechogenním obsahem → vyšetřujeme vždy na lačno, jinak je obraz zkreslen MRCP (Cholangiopankreatografie)</li><li>neinvazivní metoda - bez použití kontrastní látky se v přístroji magnetické rezonance zaměříme na požadovaný úsek (tj. žlučové cesty, slinivka a okolí) a ten skenujeme.</li><li><strong>I:</strong> porucha odtoku žluči žlučovodem, a přitom nelze překážku odstranit „zevnitř“ pomocí ERCP; jen při rozšířených žlučovodech ENDOSKOPICKÁ RETROGRÁDNÍ CHOLANGIOPANKREATIKOGRAFIE (ERCP) invazivní vyšetření</li></ul>",
      "etiology": "<ul><li><strong>I:</strong> při podezření na zúžení žlučových cest žlučovými kameny PERKUTÁNNÍ TRANSHEPATICKÁ CHOLANGIOGRAFIE (PTC)</li><li>pod skiagrafickou kontrolou → jemnou jehlou punkce žlučových cest → naplnění jodovou KL →sledování průniku do duodena</li><li><strong>PEROPERAČNÍ CHOLANGIOGRAFIE:</strong> kontrolní zobrazení žlučových cest v průběhu operace Cholecystolitiáza:</li><li>hyperechogenní ložisko + akustický stín + změna polohy ložiska při změně polohy pacienta (když nemění polohy → polypy)</li></ul>",
      "pathogenesis": "<ul><li>Fyziologický obraz vyžaduje znalost normální radioanatomie, symetrie struktur a fyziologických denzit (CT) a signálových intenzit (MR).</li></ul>",
      "macroscopy": "<ul><li>žlučové cesty nemají vazivo → nesvítí</li><li>rychlá metoda pro zobrazení žlučových cest a d. pancreaticus</li><li>hydrografická metoda - hyperintenzivní žlučové cesty a žlučník patrné na tmavém podkladě</li><li>gastroenterologové → fibroskop do duodena (Vaterova papila) pod skiaskopickou kontrolou → naplnění KL d. pancreaticus a žlučovody</li></ul>",
      "microscopy": "<ul><li><strong>drobné konkrementy nebo drť může vytvářet hladinku Akutní zánět:</strong> edematózní prosáknutí stěny žlučníku →vícevrstvé složení stěny Chronický zánět: zesílení stěny, svraštění žlučníku, nález konkrementů; porcelánový žlučník = kalcifikovaná stěna (kompletně odráží UZ vlny) Obstruktivní cholestáza: rozšíření žlučovodů vedle větví porty = příznak dvouhlavňové pušky → příčina blokády = obstrukce konkrementem, jaterní metastázou, po operacích Nádory: adenomy, papilomy, adenokarcinom (v místě žlučníku solidní útvar s dilatací žlučových cest), cholangiokarcinom (extrahepatální, Klatskinův tumor)</li></ul>",
      "clinical_legacy": "<ul><li>často spojen s následnou intervencí</li><li><strong>I:</strong> diagnostice a léčbě zúžení či ucpání žlučových cest s poruchou odtoku žluči a u nemocí slinivky</li></ul>"
    },
    "quiz": [
      {
            "question": "Urografie (IVU) byla nahrazena nativním CT – proč je CT urologie (CT urografie) vhodné pro urolitiázu?",
            "options": [
                  "Nativní low-dose CT detekuje kameny > 1 mm (i urátové, nepřítomné na RTG), lokalizuje, hodnotí obstrukci (hydronefróza)",
                  "CT zobrazuje funkci ledviny (GFR) přesněji než izotopová nefrografie",
                  "CT nevyžaduje žádnou kontrastní látku a neprovozuje ionizující záření",
                  "CT je méně přesné než RTG ledviny (KUB) pro průkaz urátových kamenů"
            ],
            "correct": 0,
            "explanation": "Nativní CT (low-dose) = zlatý standard pro urolitiázu: senzitivita > 95%, detekuje všechny typy kamenů (urátové kameny jsou invisible na RTG, ale hyperdenzní na CT). Hodnotí obstrukci (hydronefróza), alternativy (UZ u těhotných, dětí). IVU nyní téměř opuštěna."
      },
      {
            "question": "Staging renálního karcinomu (RCC) dle TNM využívá CT. T3a na CT označuje:",
            "options": [
                  "Invazi tuku perireálního prostoru nebo trombus v renální žíle nebo v. cava inferior pod bránicí",
                  "Tumor limitovaný na ledvinu, průměr 4–7 cm (T1b = ≤ 4 cm, T2a = 7–10 cm)",
                  "Přímou invazi nadledviny nebo fascie Geroty (= T4)",
                  "Vzdálené metastázy (= M1, ne T3a)"
            ],
            "correct": 0,
            "explanation": "RCC staging T: T1a ≤ 4 cm, T1b 4–7 cm, T2a 7–10 cm, T2b > 10 cm (vše v ledvině). T3a = invaze tuku perireálního prostoru NEBO trombus renální žíly. T3b = trombus VCI pod bránicí. T4 = fascia Geroty nebo nadledvina. CT s KL = standardní staging."
      }
]
  },
  {
    "id": "radio-21",
    "title": "Zobrazování onemocnění pankreatu (akutní a chronická pankreatitida, adenokarcinom, NET)",
    "section": "Břicho a trávicí trakt",
    "category": "Břicho",
    "modalities": [
      "UZ",
      "CT pankreatu",
      "MRCP",
      "EUS"
    ],
    "keywords": [
      "akutní pankreatitida",
      "nekrotizující pankreatitida",
      "Balthazarovo skóre",
      "peripankreatické tekutinové kolekce",
      "chronická pankreatitida",
      "duktální adenokarcinom",
      "double duct sign",
      "neuroendokrinní nádory"
    ],
    "image": "images/anki/paste-0aa7fc337dee405a258dc678221f2dcb8de74f7b.jpg",
    "images": [
      {
        "src": "images/anki/paste-0aa7fc337dee405a258dc678221f2dcb8de74f7b.jpg",
        "title": "Pankreatobiliární diagnostika a zobrazení pankreatu",
        "caption": "Protokol kontrastního CT s tenkými řezy v pankreatické a portální fázi pro staging tumorů hlavy pankreatu a zhodnocení cévních invazí.",
        "modality": "CT Pankreas"
      }
    ],
    "content": {
      "principle": "<ul><li><strong>UZ:</strong></li><li>u mladších hypoechogenní, u starších fibrózní změny + ztukovatění →hyperechogenní a často atrofický = lipomatózní slinivka</li><li>nekrotizující pankratitida → rozpad tkáně + pseudocysty → RTG reflexní meteorismus v místě slinivky, na snímku plic je vyšší postavení bránice + pleurální tekutina</li><li>UZ vyšetření nemožné (jen průkaz konkrementů ve žlučníku) → CT a laboratoř</li><li>nejsou vzácné, jen pozdě diagnostikované (často již v neoperabilní fázi)</li><li><strong>UZ:</strong> hypoechogenní nepravidelné útvary mnohdy obtížně odlišitelné od střev či uzlin.</li><li>Také se někdy může splést s pseudocystou.</li><li>ERCP a endoskopická ultrasonografie, MRCP</li></ul>",
      "methodology": "<ul><li>Perkutánní aspirace tenkou jehlou řízená CT nebo UZ je nezbytná</li></ul>",
      "normal_anatomy": "<ul><li><strong>rozlišení mezi karcinomem pankreatu a zánětem je nemožné Chronická pankreatitida:</strong> deformace pankreatických vývodů, atrofie, neostré kontury, kalcifikace, pseudocysty Nádory:</li></ul>",
      "pathology": "<ul><li>detekce pankreatu obtížná - krytý meteorismem (tlustým střevem) → aby šel vidět: Silně tlačit sondou nebo vyšetřit pacienta ve stoje nebo snažit se sondu směřovat tak, aby signál procházel skrze jaterní parenchym.</li><li><strong>přesnější endoskopická ultrasonografie - sonda do duodena a využívá se vysokofrekvenční US Akutní pankreatitida:</strong></li><li>edematózní zvětšení slinivky, neostré okraje, infiltrace okolní</li><li><strong>CT:</strong> zvětšení slinivky (hl. hlavy), nehomogenní denzita, infiltrace pankreatického tuku, dilatace pankreatického vývodu</li><li>adenokarcinom 90%, převážně v hlavě pankratu</li><li>neuroendokrinní nádory</li><li>hlavní diagnostickou metodou = CT → nehomogenní masa s hypodenzními okrsky</li><li>SPECT/CT, PET/CT</li></ul>",
      "clinical": "<ul><li>Také se někdy může splést s pseudocystou.</li><li>hlavní diagnostickou metodou = CT → nehomogenní masa s hypodenzními okrsky</li><li>ERCP a endoskopická ultrasonografie, MRCP</li><li>Perkutánní aspirace tenkou jehlou řízená CT nebo UZ je nezbytná</li><li>SPECT/CT, PET/CT</li></ul>",
      "key_points": "<ul><li><strong>Klíčová modalita:</strong> UZ, CT pankreatu, MRCP, EUS.</li><li><strong>Hlavní diagnostický cíl:</strong> Včasné stanovení diagnózy, posouzení rozsahu a lokalizace patologie pro volbu adekvátní terapie.</li><li><strong>Zkušební perla:</strong> Vždy začínat méně invazivní dostupnou modalitou a respektovat kontraindikace (alergie na KL, renální insuficience, kardiostimulátory u MR).</li></ul>",
      "definition": "<ul><li><strong>UZ:</strong></li><li>u mladších hypoechogenní, u starších fibrózní změny + ztukovatění →hyperechogenní a často atrofický = lipomatózní slinivka</li><li>nekrotizující pankratitida → rozpad tkáně + pseudocysty → RTG reflexní meteorismus v místě slinivky, na snímku plic je vyšší postavení bránice + pleurální tekutina</li><li>UZ vyšetření nemožné (jen průkaz konkrementů ve žlučníku) → CT a laboratoř</li></ul>",
      "etiology": "<ul><li>Perkutánní aspirace tenkou jehlou řízená CT nebo UZ je nezbytná</li></ul>",
      "pathogenesis": "<ul><li><strong>rozlišení mezi karcinomem pankreatu a zánětem je nemožné Chronická pankreatitida:</strong> deformace pankreatických vývodů, atrofie, neostré kontury, kalcifikace, pseudocysty Nádory:</li></ul>",
      "macroscopy": "<ul><li>detekce pankreatu obtížná - krytý meteorismem (tlustým střevem) → aby šel vidět: Silně tlačit sondou nebo vyšetřit pacienta ve stoje nebo snažit se sondu směřovat tak, aby signál procházel skrze jaterní parenchym.</li><li><strong>přesnější endoskopická ultrasonografie - sonda do duodena a využívá se vysokofrekvenční US Akutní pankreatitida:</strong></li><li>edematózní zvětšení slinivky, neostré okraje, infiltrace okolní</li><li><strong>CT:</strong> zvětšení slinivky (hl. hlavy), nehomogenní denzita, infiltrace pankreatického tuku, dilatace pankreatického vývodu</li></ul>",
      "microscopy": "<ul><li>adenokarcinom 90%, převážně v hlavě pankratu</li><li>neuroendokrinní nádory</li><li>hlavní diagnostickou metodou = CT → nehomogenní masa s hypodenzními okrsky</li><li>SPECT/CT, PET/CT</li></ul>",
      "clinical_legacy": "<ul><li>Také se někdy může splést s pseudocystou.</li><li>hlavní diagnostickou metodou = CT → nehomogenní masa s hypodenzními okrsky</li><li>ERCP a endoskopická ultrasonografie, MRCP</li><li>Perkutánní aspirace tenkou jehlou řízená CT nebo UZ je nezbytná</li><li>SPECT/CT, PET/CT</li></ul>"
    },
    "quiz": [
      {
            "question": "Urolitiáza – jaký typ kamenů NENÍ viditelný na prostém RTG ledvin (KUB)?",
            "options": [
                  "Urátové kameny (radiolucent – neobsahují vápník)",
                  "Kalcium-oxalátové kameny (nejčastější, vysoce radiodenzní)",
                  "Struvitové kameny (infekční, staghorn kalkulóza, radiodenzní)",
                  "Kalcium-fosfátové kameny (hydroxyapatit, radiodenzní)"
            ],
            "correct": 0,
            "explanation": "Urátové kameny tvoří ~ 10% urolitiázy, neobsahují vápník → rentgennegativní (invisible na KUB). CT nativní: hyperdenzní (400–500 HU). Ostatní typy (oxalát, fosfát, struvit) jsou na RTG viditelné jako kalcifikace. Cystinové kameny slabě radiodenzní."
      },
      {
            "question": "UZ ledviny s hydronefrotickou dilatací kalichopánvičkového systému bez klinické urolitiázy (u těhotné ženy) indikuje:",
            "options": [
                  "Fyziologická hydronefróza gravidity (komprese ureterů dělohou), vzácněji obstrukce ureterolitiázou",
                  "Akutní pyelonefritida jako příčina hydronefrózy (UZ nezobrazí záněty, jen bakteriuria)",
                  "Renální arteriální stenóza způsobující renomegaly",
                  "Příčina je vždy obstrukce kamenem – indikovat nativní CT"
            ],
            "correct": 0,
            "explanation": "Hydronefróza v graviditě: fyziologická komprese ureterů rostoucí dělohou (pravý ureter více). UZ první volba (bez záření). Pro urolitiázu v graviditě → low-dose CT nebo MR urografie (bez ionizace). Nativní CT se u těhotných zvažuje individuálně."
      }
]
  },
  {
    "id": "radio-22",
    "title": "Metody zobrazování ledvin a odvodných močových cest",
    "section": "Urogenitální trakt",
    "category": "Urogenitál",
    "modalities": [
      "UZ",
      "Nativní nefrogram",
      "Vylučovací urografie (IVU)",
      "CT urografie",
      "MR urografie"
    ],
    "keywords": [
      "nativní nefrogram",
      "ultrazvuk ledvin",
      "kortikomedulární diferenciace",
      "CT urografie",
      "vylučovací fáze",
      "pyelonefritida",
      "renální kolika"
    ],
    "image": "images/anki/paste-0aa7fc337dee405a258dc678221f2dcb8de74f7b.jpg",
    "images": [
      {
        "src": "images/anki/paste-0aa7fc337dee405a258dc678221f2dcb8de74f7b.jpg",
        "title": "Ultrazvukové zobrazení parenchymu a kalichopánvičkového systému ledviny",
        "caption": "Podélný řez ledvinou: echogenita kůry nižší než jaterní parenchym, hypoechogenní pyramidy dřeně a hyperechogenní centrální sinus.",
        "modality": "UZ Ledvina"
      }
    ],
    "content": {
      "principle": "<ul><li>první metoda</li><li>pyramidy hypoechogenní, kalichopánvičkový systém je hypoechogenní, centrální hilus hyperechogenní</li><li>akutní stavy - trauma břicha, renální kolika</li><li>možnost 3D zobrazení, řezy v úrovni ledviny</li></ul>",
      "methodology": "<ul><li><strong>Prostý snímek:</strong> malý význam - konkrement, orientační poloha ledvin, ptotická ledvina UZ:</li><li>příprava pacienta → nativní snímek →aplikace jodové KL → za 7 min 1. snímek, další 14. a 21. minutu → snímek močového měchýře i po vymočení CT:</li><li>cílené vyšetření prostaty → staging nádorů Instrumentální vyšetřovací metody: hlavně na urologii Ascendentní pyelografie: indikováno u obstrukční nefropatie; cystoskopie → cévka (Chevassuho = s balónkem - zabrání odtoku KL) do ledvinné pánvičky → aplikace KL → pyeloureterografie Descendentní pyelografie → nástřik dutého sytému po zevní drenáži - nefrostomii (pod sonografickou kontrolou) Cystografie: kontrastní náplň močového měchýře Mikčí ureterocystografie: průkaz refluxu moči z močového měchýře do ureterů Angiografické metody: diferenciální diagnostika expanzivních procesů a posouzení stenózy renálních tepen → duplexní sonografie, CT a MR angiografie</li></ul>",
      "normal_anatomy": "<ul><li>Fyziologický obraz vyžaduje znalost normální radioanatomie, symetrie struktur a fyziologických denzit (CT) a signálových intenzit (MR).</li></ul>",
      "pathology": "<ul><li>parenchym izosignílní s parenchymem jater a sleziny</li><li>cysty = kulovité pravidelné anechogenní útvary, ostře ohraničené Intravenózní vylučovací urografie (IVU):</li><li><strong>CT urografie:</strong> 1. nativní, 2. po podání KL 3. pyeloureterální</li><li>podání i. v. KL nezbytné → kontrola renální arterie i žíly litiáza (dostačující nativní zobrazení) MR:</li></ul>",
      "clinical": "<ul><li>MR urografie indikováno hlavně u dětí nebo u pacientů s kontraindikací pro podání jodové KL</li></ul>",
      "key_points": "<ul><li><strong>Klíčová modalita:</strong> UZ, Nativní nefrogram, Vylučovací urografie (IVU), CT urografie, MR urografie.</li><li><strong>Hlavní diagnostický cíl:</strong> Včasné stanovení diagnózy, posouzení rozsahu a lokalizace patologie pro volbu adekvátní terapie.</li><li><strong>Zkušební perla:</strong> Vždy začínat méně invazivní dostupnou modalitou a respektovat kontraindikace (alergie na KL, renální insuficience, kardiostimulátory u MR).</li></ul>",
      "definition": "<ul><li>první metoda</li><li>pyramidy hypoechogenní, kalichopánvičkový systém je hypoechogenní, centrální hilus hyperechogenní</li><li>akutní stavy - trauma břicha, renální kolika</li><li>možnost 3D zobrazení, řezy v úrovni ledviny</li></ul>",
      "etiology": "<ul><li><strong>Prostý snímek:</strong> malý význam - konkrement, orientační poloha ledvin, ptotická ledvina UZ:</li><li>příprava pacienta → nativní snímek →aplikace jodové KL → za 7 min 1. snímek, další 14. a 21. minutu → snímek močového měchýře i po vymočení CT:</li><li>cílené vyšetření prostaty → staging nádorů Instrumentální vyšetřovací metody: hlavně na urologii Ascendentní pyelografie: indikováno u obstrukční nefropatie; cystoskopie → cévka (Chevassuho = s balónkem - zabrání odtoku KL) do ledvinné pánvičky → aplikace KL → pyeloureterografie Descendentní pyelografie → nástřik dutého sytému po zevní drenáži - nefrostomii (pod sonografickou kontrolou) Cystografie: kontrastní náplň močového měchýře Mikčí ureterocystografie: průkaz refluxu moči z močového měchýře do ureterů Angiografické metody: diferenciální diagnostika expanzivních procesů a posouzení stenózy renálních tepen → duplexní sonografie, CT a MR angiografie</li></ul>",
      "pathogenesis": "<ul><li>Fyziologický obraz vyžaduje znalost normální radioanatomie, symetrie struktur a fyziologických denzit (CT) a signálových intenzit (MR).</li></ul>",
      "macroscopy": "<ul><li>parenchym izosignílní s parenchymem jater a sleziny</li><li>cysty = kulovité pravidelné anechogenní útvary, ostře ohraničené Intravenózní vylučovací urografie (IVU):</li><li><strong>CT urografie:</strong> 1. nativní, 2. po podání KL 3. pyeloureterální</li><li>podání i. v. KL nezbytné → kontrola renální arterie i žíly litiáza (dostačující nativní zobrazení) MR:</li></ul>",
      "microscopy": "<ul><li>MR urografie indikováno hlavně u dětí nebo u pacientů s kontraindikací pro podání jodové KL</li></ul>",
      "clinical_legacy": "<ul><li>MR urografie indikováno hlavně u dětí nebo u pacientů s kontraindikací pro podání jodové KL</li></ul>"
    },
    "quiz": [
      {
            "question": "PI-RADS klasifikace (v2.1) při multiparametrické MR prostaty (mpMRI) hodnotí:",
            "options": [
                  "Pravděpodobnost klinicky signifikantního karcinomu prostaty (PI-RADS 4–5 = biopsie; 1–2 = sledování)",
                  "Stupeň benigní hyperplazie prostaty (BPH) pro indikaci TURP",
                  "Odpověď na hormonální terapii metastatického karcinomu prostaty",
                  "Přítomnost zánětu (prostatitidy) na základě T2 signálu"
            ],
            "correct": 0,
            "explanation": "PI-RADS (Prostate Imaging Reporting and Data System): skóre 1–5 integruje T2WI, DWI a DCE sekvence. PI-RADS 4–5 → klinicky signifikantní karcinom (Gleason ≥ 7) pravděpodobný → cílená biopsie. PI-RADS 1–2 → nesledovat biopsií."
      },
      {
            "question": "Ultrasonografie skrota je metodou první volby u podezření na torzi varlete. Klíčový nález svědčící pro torzi je:",
            "options": [
                  "Absence průtoku v Doppleru varlete ipsilaterálně (avaskularní varle) + bolest + edém",
                  "Přítomnost hyperechogenního ložiska s kalcifikacemi varlete",
                  "Bilaterální hypoechogenní varixy v horním polu varlete",
                  "Hypervaskulární tvarle s otokem kůže skrota (= orchiepididymitida)"
            ],
            "correct": 0,
            "explanation": "Torze varlete = chirurgická urgence! UZ Doppler: absence nebo výrazná redukce průtoku. Orchiepididymitida: naopak hypervaskulární (zvýšený průtok). Čas je kritický – detorze do 6 h = záchrana ve > 90%, po 24 h < 10%."
      }
]
  },
  {
    "id": "radio-23",
    "title": "Zobrazování ložiskových a difuzních onemocnění ledvin",
    "section": "Urogenitální trakt",
    "category": "Urogenitál",
    "modalities": [
      "UZ",
      "CT ledvin",
      "MR"
    ],
    "keywords": [
      "renální cysty",
      "Bosniakova klasifikace",
      "karcinom ledviny (RCC - Grawitz)",
      "časné arteriální sycení",
      "angiomyolipom (tukové denzity)",
      "onkocytom",
      "hydronefróza"
    ],
    "image": "images/anki/paste-0aa7fc337dee405a258dc678221f2dcb8de74f7b.jpg",
    "images": [
      {
        "src": "images/anki/paste-0aa7fc337dee405a258dc678221f2dcb8de74f7b.jpg",
        "title": "Klasifikace renálních cyst podle Bosniaka",
        "caption": "Kategorií I-II (jednoduché nekomplikované cysty, beningní) až IV (cystický karcinom s tlustými nodulárními septy a sycením po KL).",
        "modality": "CT / UZ"
      }
    ],
    "content": {
      "principle": "<ul><li>drobné urolity do ureteru → ledvinná kolika; velké mohou vyplnit celou pánvičku</li><li>rozšíření dutého systému při obstrukcích močovodů a kalichopánvičkového systému</li><li>Poraněná ledvina zvětšená, kontuzní ložisko hypodenzní, čerstvá krev hyperdenzní</li><li><strong>cysty:</strong> UZ = anechogenní, CT = hypodenzní</li><li>na UZ nespecifické, na urografii patrné roztlačení a komprese kalichů, CT vyšetření = hypodenzní, kalcifikace svědčí pro malignitu; MR = heterogenní</li><li><strong>Benigní:</strong> angiomyelolipom, hemangiom</li><li>UZ - vyloučení obstrukční nefropatie</li><li>absces ledviny - UZ = hypoechogenní, neostře ohraničený, CT = hypodenzní útvar s centrální fluidní strukturou, po KL se nasytí lem abscesu</li></ul>",
      "methodology": "<ul><li>katetrizační angiografie je spojena s intervenčním výkonem → potvrdí intramurální krvácení, trombózu a avulzi Nádory:</li><li>sonografie, CT nebo MR angiografie; katetrizační angiografie spojená s PTA trombóza renální žíly → ledvina zvětšená, hladce ohraničená s kompresí dutého systému, nález hemoragických ložisek a trombu v žíle nebo kolaterálech</li></ul>",
      "normal_anatomy": "<ul><li><strong>Základní patologické obrazy:</strong> a) velikost ledviny: zmenšení x zvětšení b) Dutý systém: dilatace (hydronefróza → dilatace kalichu a pánvičky vedoucí k atrofii parenchymu; ureterohydronefróza - dilatace močovodů a dutého systému), kalcifikace (nefrolithiaza, chronické záněty, TBC, hyperparathyroideus) Vrozené vady: aplazie nebo hypoplazie, dromedárová ledvina (hrbolovitý tvar laterální kontury), ren migrans, variety dutého systému (dvě pánvičky, dva uretery), anomálie vezikoureterálního přechodu, vzorezené cysty (polycystické ledviny) Urolithiáza:</li><li>až 90% konkrementů je kontrastních, velikost kolísá</li><li><strong>UZ:</strong> hyperechogenní útvar s akustickým stínem a dilatací dutého systému</li><li><strong>MDCT:</strong> nativní - velikost a uložení šutrů, rozšíření dutého systému Obstrukční uropatie:</li></ul>",
      "pathology": "<ul><li>na RTG snímku odlišit konkrement od flebolitů nebo kalcifikovaných uzlin</li><li>vrozená - pyelouretrální junkce; získané - ureterokéla</li><li>ureterohydronefróza → dilatace celého kalichopánvičkového systému Traumatologie: lacerace, kontuze, hematom → hematurie</li><li>poranění cév →větší krvácení a hematomy subkapsulární a perirenální</li><li><strong>UZ:</strong> kontuze = hyperechogenní zóna; hematom = hypoechogenní</li><li>Při podezření na patologii → CT i s kontrastem</li><li>Adenokarcinom (Grawitzův tumor), nefroblastom → většinou náhodný nález při rutinní sonografii břicha + hematurie</li><li><strong>Pseudotumory:</strong> imitují maligní nádory expanzí na ZM Zánětlivá onemocnění:</li><li><strong>Chronické záněty:</strong> zmenšování a deformace ledvin Cévní postižení ledvin:</li><li><strong>Renovaskulární hypertenze:</strong> stenóza a. renalis nebo difúzní ateroskleróza → duplexní</li></ul>",
      "clinical": "<ul><li><strong>Pseudotumory:</strong> imitují maligní nádory expanzí na ZM Zánětlivá onemocnění:</li><li>UZ - vyloučení obstrukční nefropatie</li><li>absces ledviny - UZ = hypoechogenní, neostře ohraničený, CT = hypodenzní útvar s centrální fluidní strukturou, po KL se nasytí lem abscesu</li><li><strong>Chronické záněty:</strong> zmenšování a deformace ledvin Cévní postižení ledvin:</li><li><strong>Renovaskulární hypertenze:</strong> stenóza a. renalis nebo difúzní ateroskleróza → duplexní</li><li>sonografie, CT nebo MR angiografie; katetrizační angiografie spojená s PTA trombóza renální žíly → ledvina zvětšená, hladce ohraničená s kompresí dutého systému, nález hemoragických ložisek a trombu v žíle nebo kolaterálech</li></ul>",
      "key_points": "<ul><li><strong>Klíčová modalita:</strong> UZ, CT ledvin, MR.</li><li><strong>Hlavní diagnostický cíl:</strong> Včasné stanovení diagnózy, posouzení rozsahu a lokalizace patologie pro volbu adekvátní terapie.</li><li><strong>Zkušební perla:</strong> Vždy začínat méně invazivní dostupnou modalitou a respektovat kontraindikace (alergie na KL, renální insuficience, kardiostimulátory u MR).</li></ul>",
      "definition": "<ul><li>drobné urolity do ureteru → ledvinná kolika; velké mohou vyplnit celou pánvičku</li><li>rozšíření dutého systému při obstrukcích močovodů a kalichopánvičkového systému</li><li>Poraněná ledvina zvětšená, kontuzní ložisko hypodenzní, čerstvá krev hyperdenzní</li><li><strong>cysty:</strong> UZ = anechogenní, CT = hypodenzní</li></ul>",
      "etiology": "<ul><li>katetrizační angiografie je spojena s intervenčním výkonem → potvrdí intramurální krvácení, trombózu a avulzi Nádory:</li><li>sonografie, CT nebo MR angiografie; katetrizační angiografie spojená s PTA trombóza renální žíly → ledvina zvětšená, hladce ohraničená s kompresí dutého systému, nález hemoragických ložisek a trombu v žíle nebo kolaterálech</li></ul>",
      "pathogenesis": "<ul><li><strong>Základní patologické obrazy:</strong> a) velikost ledviny: zmenšení x zvětšení b) Dutý systém: dilatace (hydronefróza → dilatace kalichu a pánvičky vedoucí k atrofii parenchymu; ureterohydronefróza - dilatace močovodů a dutého systému), kalcifikace (nefrolithiaza, chronické záněty, TBC, hyperparathyroideus) Vrozené vady: aplazie nebo hypoplazie, dromedárová ledvina (hrbolovitý tvar laterální kontury), ren migrans, variety dutého systému (dvě pánvičky, dva uretery), anomálie vezikoureterálního přechodu, vzorezené cysty (polycystické ledviny) Urolithiáza:</li><li>až 90% konkrementů je kontrastních, velikost kolísá</li><li><strong>UZ:</strong> hyperechogenní útvar s akustickým stínem a dilatací dutého systému</li><li><strong>MDCT:</strong> nativní - velikost a uložení šutrů, rozšíření dutého systému Obstrukční uropatie:</li></ul>",
      "macroscopy": "<ul><li>na RTG snímku odlišit konkrement od flebolitů nebo kalcifikovaných uzlin</li><li>vrozená - pyelouretrální junkce; získané - ureterokéla</li><li>ureterohydronefróza → dilatace celého kalichopánvičkového systému Traumatologie: lacerace, kontuze, hematom → hematurie</li><li>poranění cév →větší krvácení a hematomy subkapsulární a perirenální</li></ul>",
      "microscopy": "<ul><li><strong>UZ:</strong> kontuze = hyperechogenní zóna; hematom = hypoechogenní</li><li>Při podezření na patologii → CT i s kontrastem</li><li>Adenokarcinom (Grawitzův tumor), nefroblastom → většinou náhodný nález při rutinní sonografii břicha + hematurie</li><li><strong>Pseudotumory:</strong> imitují maligní nádory expanzí na ZM Zánětlivá onemocnění:</li></ul>",
      "clinical_legacy": "<ul><li><strong>Pseudotumory:</strong> imitují maligní nádory expanzí na ZM Zánětlivá onemocnění:</li><li>UZ - vyloučení obstrukční nefropatie</li><li>absces ledviny - UZ = hypoechogenní, neostře ohraničený, CT = hypodenzní útvar s centrální fluidní strukturou, po KL se nasytí lem abscesu</li><li><strong>Chronické záněty:</strong> zmenšování a deformace ledvin Cévní postižení ledvin:</li><li><strong>Renovaskulární hypertenze:</strong> stenóza a. renalis nebo difúzní ateroskleróza → duplexní</li><li>sonografie, CT nebo MR angiografie; katetrizační angiografie spojená s PTA trombóza renální žíly → ledvina zvětšená, hladce ohraničená s kompresí dutého systému, nález hemoragických ložisek a trombu v žíle nebo kolaterálech</li></ul>"
    },
    "quiz": [
      {
            "question": "Ektopická gravidita se nejlépe diagnostikuje kombinací:",
            "options": [
                  "UZ transvaginální (mimomateřní embryo nebo hematosalpinx) + sérum β-hCG (> 1500–2000 mIU/ml bez intrauterinního vaku = suspektní EG)",
                  "MR pánve (zlatý standard pro EG bez záření)",
                  "CT pánve s KL (nejrychlejší diagnostika EG v urgentním nastavení)",
                  "Doppler abdominální (průkaz průtoku v mimoděložním vaku)"
            ],
            "correct": 0,
            "explanation": "EG diagnostika: TVS UZ + β-hCG. Diskriminační hodnota β-hCG ~ 1500–2000 mIU/ml: pokud není viditelný intrauterinní vak na TVS, je EG vysoce pravděpodobná. Přímý UZ nález: extrauterinní gestační vak, hematosalpinx, hemoperitoneum (Douglasův prostor)."
      },
      {
            "question": "Mamografie detekuje karcinom prsu nejlépe jako:",
            "options": [
                  "Mikrokalcifikace (seskupené, plymorfní, lineární) nebo spiculovanou masu s nepravidelnými okraji",
                  "Kulatou hladkou masu s echogenním halo (= typický benigní fibroadenom)",
                  "Hypoechogenní ložisko s zadním posílením echa (= typická cysta)",
                  "Hypervaskularní lézi s výrazným sycením po KL (= hemangiom jater, ne prsu)"
            ],
            "correct": 0,
            "explanation": "Maligní kalcifikace mamografie: seskupené, pleomorfní, casting type (lineární = DCIS). Spiculovaná masa = infiltrující karcinom. Benigní: hrubé kalcifikace (fibroadenom), hladce ohraničená kulatá masa. BI-RADS 4–5 → biopsie."
      }
]
  },
  {
    "id": "radio-24",
    "title": "Zobrazování onemocnění odvodných močových cest (urolitiáza, uoteliální nádory)",
    "section": "Urogenitální trakt",
    "category": "Urogenitál",
    "modalities": [
      "Nativní nízkodávkové CT",
      "UZ",
      "Mikční cystouretrografie (MCUG)"
    ],
    "keywords": [
      "urolitiáza",
      "nízkodávkové nekontrastní CT (low-dose NCCT)",
      "hydronefróza",
      "uroteliální karcinom",
      "plnicí defekt",
      "vezikoureterální reflux (VUR)",
      "striktury uretry"
    ],
    "image": "images/anki/paste-0aa7fc337dee405a258dc678221f2dcb8de74f7b.jpg",
    "images": [
      {
        "src": "images/anki/paste-0aa7fc337dee405a258dc678221f2dcb8de74f7b.jpg",
        "title": "Low-dose CT u renální koliky (Nekontrastní CT)",
        "caption": "Nízkodávkové nativní CT spolehlivě detekuje i drobné konkrementy v celém průběhu močovodu (včetně rtg nekontrastních urátových kamenů).",
        "modality": "CT Urologie"
      }
    ],
    "content": {
      "principle": "<ul><li><strong>Benigní papilomy:</strong> různý tvar (stopkatý, nasedající na stěnu, maligně se zvrhávají)</li><li>nutné počítat s benigními migrujícími kalcifikovanými kameny</li></ul>",
      "methodology": "<ul><li><strong>Ascendentní pyelografie:</strong> indikováno u obstrukční nefropatie; cystoskopie → cévka (Chevassuho = s balónkem - zabrání odtoku KL) do ledvinné pánvičky → aplikace KL → pyeloureterografie Descendentní pyelografie → nástřik dutého sytému po zevní drenáži - nefrostomii (pod sonografickou kontrolou Cystografie: kontrastní náplň močového měchýře Mikčí ureterocystografie: průkaz refluxu moči z močového měchýře do ureterů Expanze v močovém měchýři:</li></ul>",
      "normal_anatomy": "<ul><li>Fyziologický obraz vyžaduje znalost normální radioanatomie, symetrie struktur a fyziologických denzit (CT) a signálových intenzit (MR).</li></ul>",
      "pathology": "<ul><li><strong>Karcinom:</strong> infiltruje stěnu měchýře + deformuje jeho tvar, kontrastně jako velký defekt v náplni, často kalcifikované</li></ul>",
      "clinical": "<ul><li>nutné počítat s benigními migrujícími kalcifikovanými kameny</li></ul>",
      "key_points": "<ul><li><strong>Klíčová modalita:</strong> Nativní nízkodávkové CT, UZ, Mikční cystouretrografie (MCUG).</li><li><strong>Hlavní diagnostický cíl:</strong> Včasné stanovení diagnózy, posouzení rozsahu a lokalizace patologie pro volbu adekvátní terapie.</li><li><strong>Zkušební perla:</strong> Vždy začínat méně invazivní dostupnou modalitou a respektovat kontraindikace (alergie na KL, renální insuficience, kardiostimulátory u MR).</li></ul>",
      "definition": "<ul><li><strong>Benigní papilomy:</strong> různý tvar (stopkatý, nasedající na stěnu, maligně se zvrhávají)</li><li>nutné počítat s benigními migrujícími kalcifikovanými kameny</li></ul>",
      "etiology": "<ul><li><strong>Ascendentní pyelografie:</strong> indikováno u obstrukční nefropatie; cystoskopie → cévka (Chevassuho = s balónkem - zabrání odtoku KL) do ledvinné pánvičky → aplikace KL → pyeloureterografie Descendentní pyelografie → nástřik dutého sytému po zevní drenáži - nefrostomii (pod sonografickou kontrolou Cystografie: kontrastní náplň močového měchýře Mikčí ureterocystografie: průkaz refluxu moči z močového měchýře do ureterů Expanze v močovém měchýři:</li></ul>",
      "pathogenesis": "<ul><li>Fyziologický obraz vyžaduje znalost normální radioanatomie, symetrie struktur a fyziologických denzit (CT) a signálových intenzit (MR).</li></ul>",
      "macroscopy": "<ul><li><strong>Karcinom:</strong> infiltruje stěnu měchýře + deformuje jeho tvar, kontrastně jako velký defekt v náplni, často kalcifikované</li></ul>",
      "microscopy": "<ul><li>nutné počítat s benigními migrujícími kalcifikovanými kameny</li></ul>",
      "clinical_legacy": "<ul><li>nutné počítat s benigními migrujícími kalcifikovanými kameny</li></ul>"
    },
    "quiz": [
      {
            "question": "BI-RADS klasifikace 0 u mamografie nebo UZ prsu znamená:",
            "options": [
                  "Neúplné hodnocení – nutné doplnit o další snímky nebo UZ pro konečný závěr",
                  "Normální nález bez patologie",
                  "Suspektní maligní léze, indikace k biopsii",
                  "Potvrzená malignita, okamžitá chirurgie"
            ],
            "correct": 0,
            "explanation": "BI-RADS (Breast Imaging Reporting and Data System): 0 = neúplné (recall), 1 = negativní, 2 = benigní, 3 = pravděpodobně benigní (6 měsíční kontrola), 4 = suspektní (biopsie), 5 = vysoce maligní (biopsie), 6 = histologicky potvrzena malignita (léčba)."
      },
      {
            "question": "MR prsu je indikována jako screeningová metoda u:",
            "options": [
                  "Žen s vysokým rizikem karcinomu prsu (BRCA1/2 mutace, celoživotní riziko > 20%) jako doplněk mamografie",
                  "Všech žen nad 40 let místo mamografie (vyšší senzitivita, nižší specificita)",
                  "Žen s kochleárním implantátem jako alternativa UZ",
                  "Hodnocení odpovědi na neoadjuvantní chemoterapii (CT je výhodnější)"
            ],
            "correct": 0,
            "explanation": "MR prsu: high-risk screening (BRCA+, ≥ 20% celoživotní riziko) + mamografie. Senzitivita > 90% pro invazivní karcinom, ale nízká specificita → více biopsií benigních lézí. Zlatý standard pro: staging po diagnóze, hodnocení prsních implantátů, neoadjuvantní terapie."
      }
]
  },
  {
    "id": "radio-25",
    "title": "Zobrazování onemocnění mužských pohlavních orgánů (prostata, varlata, skrotum)",
    "section": "Urogenitální trakt",
    "category": "Urogenitál",
    "modalities": [
      "Multiparametrická MR (mpMRI)",
      "UZ skrota (Doppler)",
      "TRUS"
    ],
    "keywords": [
      "karcinom prostaty",
      "mpMRI prostaty",
      "PI-RADS klasifikace",
      "periferní zóna",
      "torze varlete",
      "avaskulární varle",
      "epididymitida",
      "varikokéla",
      "tumory varlete (seminom)"
    ],
    "image": "images/anki/paste-0aa7fc337dee405a258dc678221f2dcb8de74f7b.jpg",
    "images": [
      {
        "src": "images/anki/paste-0aa7fc337dee405a258dc678221f2dcb8de74f7b.jpg",
        "title": "Multiparametrická MR prostaty (PI-RADS)",
        "caption": "mpMRI prostaty kombinující T2W, difuzní vážení (DWI/ADC) a dynamické postkontrastní sycení (DCE) k detekci klinicky významného karcinomu.",
        "modality": "MR Prostata"
      }
    ],
    "content": {
      "principle": "<ul><li><strong>Prostata:</strong></li><li>ZM přínos dif. diag. expanze, hodnocení fáze onemocnění, infiltrace do okolí, výběr terapeutické metody</li><li>UZ = Nejlépe je zobrazitelná při dostatečné náplni močového měchýře</li><li><strong>Benigní hyperplazie prostaty:</strong> na cystogramu = defekt ve spodině močového měchýře, UZ = homogenní zvětšená tkáň</li><li>primárně UZ</li><li>Nadvarle a funiculus lze vidět na MR</li><li><strong>Kryptorchismus:</strong> nesestoupení varlat - oválný útvar s fluidní strukturou - MR</li><li>Teratom - heterogenní echogenitu na UZ</li></ul>",
      "methodology": "<ul><li>Metodika a technické provedení vyšetření u tématu <strong>Zobrazování onemocnění mužských pohlavních orgánů (prostata, varlata, skrotum)</strong> volí optimální projekce, kontrastní fáze a nastavení zobrazení pro maximální diagnostickou výtěžnost.</li></ul>",
      "normal_anatomy": "<ul><li><strong>Torze varlete:</strong> zvětšení varlete v důsledku zaškrcení přívodných cév, hypoechogenní struktura, chybí detekce krevního toku, zvětšený a nerovný průběh funiculus spermaticus</li><li><strong>Zánět:</strong> zvětšení, hypoechogenní struktura, zmnožení cév</li><li><strong>Hydrokéla:</strong> hromadění tekutiny mezi obaly varlete = anechogenní obsah, na MR jako fluidní struktura</li><li><strong>Seminom:</strong> UZ - uzlovitá hypoechogenní struktura, CT - hyperdenzní, MR - nejpřesnější</li></ul>",
      "pathology": "<ul><li>rozhodující je laboratorní vyšetření, ultrazvuková diagnostika, biopsie</li><li>záněty → tvorba píštělí s uretrou nebo tvorba jizev</li><li>transrektální UZ - ložiska zánětu jako hyperechogenní, na CT hyperdenzní</li><li><strong>Adenokarcinom:</strong> na UZ nález variabilní, asymetricky zvětšená prostata, ložisko hypoechogenní, může prorůstat do močového měchýře; průkaz cév při duplexní sonografii potvrzuje malignitu → MR (lokální staging, posouzení infiltrace) Varle a nadvarle:</li><li>Varle je homogenní, okolní nehomogenní plexus cév</li><li>semenné váčky jsou zřetelné multicystické struktury na UZ, CT i MR (hyperintenzní oproti obsahu močového měchýře - mají více bílkovin)</li><li><strong>Trauma:</strong> hematokéla, ruptura varlete (při sportu)</li></ul>",
      "clinical": "<ul><li><strong>Zánět:</strong> zvětšení, hypoechogenní struktura, zmnožení cév</li><li><strong>Kryptorchismus:</strong> nesestoupení varlat - oválný útvar s fluidní strukturou - MR</li><li><strong>Hydrokéla:</strong> hromadění tekutiny mezi obaly varlete = anechogenní obsah, na MR jako fluidní struktura</li><li><strong>Seminom:</strong> UZ - uzlovitá hypoechogenní struktura, CT - hyperdenzní, MR - nejpřesnější</li><li>Teratom - heterogenní echogenitu na UZ</li></ul>",
      "key_points": "<ul><li><strong>Klíčová modalita:</strong> Multiparametrická MR (mpMRI), UZ skrota (Doppler), TRUS.</li><li><strong>Hlavní diagnostický cíl:</strong> Včasné stanovení diagnózy, posouzení rozsahu a lokalizace patologie pro volbu adekvátní terapie.</li><li><strong>Zkušební perla:</strong> Vždy začínat méně invazivní dostupnou modalitou a respektovat kontraindikace (alergie na KL, renální insuficience, kardiostimulátory u MR).</li></ul>",
      "definition": "<ul><li><strong>Prostata:</strong></li><li>ZM přínos dif. diag. expanze, hodnocení fáze onemocnění, infiltrace do okolí, výběr terapeutické metody</li><li>UZ = Nejlépe je zobrazitelná při dostatečné náplni močového měchýře</li><li><strong>Benigní hyperplazie prostaty:</strong> na cystogramu = defekt ve spodině močového měchýře, UZ = homogenní zvětšená tkáň</li></ul>",
      "etiology": "<ul><li>Metodika a technické provedení vyšetření u tématu <strong>Zobrazování onemocnění mužských pohlavních orgánů (prostata, varlata, skrotum)</strong> volí optimální projekce, kontrastní fáze a nastavení zobrazení pro maximální diagnostickou výtěžnost.</li></ul>",
      "pathogenesis": "<ul><li><strong>Torze varlete:</strong> zvětšení varlete v důsledku zaškrcení přívodných cév, hypoechogenní struktura, chybí detekce krevního toku, zvětšený a nerovný průběh funiculus spermaticus</li><li><strong>Zánět:</strong> zvětšení, hypoechogenní struktura, zmnožení cév</li><li><strong>Hydrokéla:</strong> hromadění tekutiny mezi obaly varlete = anechogenní obsah, na MR jako fluidní struktura</li><li><strong>Seminom:</strong> UZ - uzlovitá hypoechogenní struktura, CT - hyperdenzní, MR - nejpřesnější</li></ul>",
      "macroscopy": "<ul><li>rozhodující je laboratorní vyšetření, ultrazvuková diagnostika, biopsie</li><li>záněty → tvorba píštělí s uretrou nebo tvorba jizev</li><li>transrektální UZ - ložiska zánětu jako hyperechogenní, na CT hyperdenzní</li><li><strong>Adenokarcinom:</strong> na UZ nález variabilní, asymetricky zvětšená prostata, ložisko hypoechogenní, může prorůstat do močového měchýře; průkaz cév při duplexní sonografii potvrzuje malignitu → MR (lokální staging, posouzení infiltrace) Varle a nadvarle:</li></ul>",
      "microscopy": "<ul><li>Varle je homogenní, okolní nehomogenní plexus cév</li><li>semenné váčky jsou zřetelné multicystické struktury na UZ, CT i MR (hyperintenzní oproti obsahu močového měchýře - mají více bílkovin)</li><li><strong>Trauma:</strong> hematokéla, ruptura varlete (při sportu)</li></ul>",
      "clinical_legacy": "<ul><li><strong>Zánět:</strong> zvětšení, hypoechogenní struktura, zmnožení cév</li><li><strong>Kryptorchismus:</strong> nesestoupení varlat - oválný útvar s fluidní strukturou - MR</li><li><strong>Hydrokéla:</strong> hromadění tekutiny mezi obaly varlete = anechogenní obsah, na MR jako fluidní struktura</li><li><strong>Seminom:</strong> UZ - uzlovitá hypoechogenní struktura, CT - hyperdenzní, MR - nejpřesnější</li><li>Teratom - heterogenní echogenitu na UZ</li></ul>"
    },
    "quiz": [
      {
            "question": "Zóna přechodu ('zone of transition') u kostní léze na RTG vyjadřuje:",
            "options": [
                  "Ostrost hranice léze s okolní kostí – úzká zóna = benigní (osteoklastom); široká geografická = agresivní/maligní",
                  "Přechod kortikalis na spongiózní kost v místě léze",
                  "Velikost léze přesahující epifýzu a metafýzu",
                  "Hloubku periosteální reakce v milimetrech"
            ],
            "correct": 0,
            "explanation": "Zóna přechodu je nejdůležitější RTG parametr kostní léze: Ia (geografická, sklerotická hranice = benigní, pomalý růst), Ib (bez sklerózy), Ic (difuzní, neostřá = agresivní). Permeativní (III) pattern = maligní (Ewing, myelom)."
      },
      {
            "question": "Codmanův trojúhelník (Codman triangle) na RTG je příznakem:",
            "options": [
                  "Agresivní periosteální reakce při maligním tumoru (periost odliftován od kosti tumorem, na okraji tvoří trojúhelník)",
                  "Benigního osteomu s hladkou kostní kapslí",
                  "Stresové fraktury tibiae u mladých sportovců",
                  "Enchondromu s endosteálními kalcifikacemi"
            ],
            "correct": 0,
            "explanation": "Codmanův trojúhelník = elevace periostu na okraji agresivní léze (osteosarkom, Ewingův sarkom). Tvoří se, protože tumor roste rychleji, než periost stíhá reagovat. Spolu s 'sunburst pattern' svědčí pro osteosarkom."
      }
]
  },
  {
    "id": "radio-26",
    "title": "Zobrazování onemocnění ženských pohlavních orgánů a zobrazování v těhotenství",
    "section": "Urogenitální trakt",
    "category": "Urogenitál",
    "modalities": [
      "UZ (transabdominální, transvaginální)",
      "MR pánve"
    ],
    "keywords": [
      "transvaginální sonografie (TVS)",
      "děložní myomy",
      "endometrióza",
      "karcinom endometria",
      "karcinom cervixu",
      "ovariální cysty",
      "karcinom ovaria",
      "mimoděložní těhotenství",
      "gravidita"
    ],
    "image": "images/anki/paste-db884d5302960b7b8d342e334644715ca469c715.jpg",
    "images": [
      {
        "src": "images/anki/paste-db884d5302960b7b8d342e334644715ca469c715.jpg",
        "title": "Ultrazvukové vyšetření v 1. trimestru těhotenství",
        "caption": "Lokalizace gestačního váčku v děložní dutině, průkaz vitality plodu (srdeční akce) a vyloučení ektopické gravidity při vaginálním krvácení.",
        "modality": "UZ Gynekologie"
      },
      {
        "src": "images/anki/paste-6e3ccfe564db2cdf0b7811012dd791b2a5c0546c.jpg",
        "title": "Algoritmus zobrazení pánevní bolesti u žen",
        "caption": "Transvaginální a transabdominální ultrazvuk jako metoda 1. volby pro odlišení gynekologických příčin (adnexitida, torze ovaria, ruptura cysty).",
        "modality": "Algoritmus / UZ"
      }
    ],
    "content": {
      "principle": "<ul><li>těhotenství.</li><li>děloha = echogenita okolních svalů, uprostřed echogenní endometrium, někdy zřetelná dutina s tekutinou</li><li>transvaginílní - detailnější popis stěny delohy (endometrium junkční zónu a myometrium)</li><li><strong>CT:</strong> děloha má denzitu okolních svalů, kavum výjimečně, ovaria mezi zevní a vnitřní a. iliaca</li><li><strong>diagnostika extrauterinního těhotenství je ideální přes transvaginální UZ Prenatální diagnostika:</strong></li><li><strong>UZ:</strong> 3,5-7 MHz s real time obrazem → 3D zobrazení</li><li><strong>Dopplerovská UZ:</strong> zpomalení průtoku → zpomalený růst plodu</li><li><strong>MR se neprovádí v prvních třech měsících Gynekologie:</strong></li><li><strong>Ovariální cysty:</strong> anechogenní útvary</li><li><strong>Ca cervixu:</strong> heterogenní nádor, T1 hypo T2 hyperintenzní, sytí se po KL</li><li><strong>Ca endometria:</strong> T2 hypo, po KL se sytí méně</li></ul>",
      "methodology": "<ul><li>Schultzeho násadec zavede do hrdla děložního →skiaskopická kontrola → aplikace hydrosolubilní jodové KL → proniká oběma vejcovody do břišní dutiny → kontrola průchodnosti vejcovodů při sterilitě Porodnictví:</li></ul>",
      "normal_anatomy": "<ul><li><strong>MR:</strong> přesná diagnostika nádorů dělohy - rozeznáváme části stěny těla i krček, anatomické vztahy k okolním orgánům, infiltrace do okolí → ideálně v sagitální rovině Hysterosalpingografie (HSG):</li></ul>",
      "pathology": "<ul><li><strong>UZ:</strong></li><li>transabdominální nebo transvaginální - vhodné i u těhotných; transrektální - diagnostika nádorů krčku dělohy</li><li>vaječníky - hypo až anechogenní, časté drobné cysty</li><li>časné těhotenství potvrdit na transvaginálním UZ v 5. a 6. týdnu → 7. týden pulzující srdce</li><li>UZ + MR</li><li>páteř + páteřní kanál ve 20. týdnu → diferencovat osifikační jádra obratlů</li><li>mozek - 24. týden; srdeční vady echokardiograficky</li><li>Endometrióza - UZ = cystická nebo hypoechogenní masa v okolí adnex → MR = prokáže rozpadové metabolity krve</li><li>Myom → UZ = hypoechogenní + kalcifikace; CT = izodenzní se svalovinou; MR = dobře ohraničený, homogenní hypointenzivní, po kontrastu se nesytí, změny při nekrotizaci nádoru</li><li><strong>Ca ovaria:</strong> heterogenní obsah, četná septa a ascites, CT a MR - nález různorodý od solidní heterogenního útvaru po rozsáhlý cystický, častá metastáza do peritoneální dutiny; Krukenbergův nádor (metastáza ovaria z adenokarcinomu GIT)</li></ul>",
      "clinical": "<ul><li>urychluje a zlepšuje léčbu vrozených vad</li></ul>",
      "key_points": "<ul><li><strong>Klíčová modalita:</strong> UZ (transabdominální, transvaginální), MR pánve.</li><li><strong>Hlavní diagnostický cíl:</strong> Včasné stanovení diagnózy, posouzení rozsahu a lokalizace patologie pro volbu adekvátní terapie.</li><li><strong>Zkušební perla:</strong> Vždy začínat méně invazivní dostupnou modalitou a respektovat kontraindikace (alergie na KL, renální insuficience, kardiostimulátory u MR).</li></ul>",
      "definition": "<ul><li>těhotenství.</li><li>děloha = echogenita okolních svalů, uprostřed echogenní endometrium, někdy zřetelná dutina s tekutinou</li><li>transvaginílní - detailnější popis stěny delohy (endometrium junkční zónu a myometrium)</li><li><strong>CT:</strong> děloha má denzitu okolních svalů, kavum výjimečně, ovaria mezi zevní a vnitřní a. iliaca</li></ul>",
      "etiology": "<ul><li>Schultzeho násadec zavede do hrdla děložního →skiaskopická kontrola → aplikace hydrosolubilní jodové KL → proniká oběma vejcovody do břišní dutiny → kontrola průchodnosti vejcovodů při sterilitě Porodnictví:</li></ul>",
      "pathogenesis": "<ul><li><strong>MR:</strong> přesná diagnostika nádorů dělohy - rozeznáváme části stěny těla i krček, anatomické vztahy k okolním orgánům, infiltrace do okolí → ideálně v sagitální rovině Hysterosalpingografie (HSG):</li></ul>",
      "macroscopy": "<ul><li><strong>UZ:</strong></li><li>transabdominální nebo transvaginální - vhodné i u těhotných; transrektální - diagnostika nádorů krčku dělohy</li><li>vaječníky - hypo až anechogenní, časté drobné cysty</li><li>časné těhotenství potvrdit na transvaginálním UZ v 5. a 6. týdnu → 7. týden pulzující srdce</li></ul>",
      "microscopy": "<ul><li>UZ + MR</li><li>páteř + páteřní kanál ve 20. týdnu → diferencovat osifikační jádra obratlů</li><li>mozek - 24. týden; srdeční vady echokardiograficky</li><li>Endometrióza - UZ = cystická nebo hypoechogenní masa v okolí adnex → MR = prokáže rozpadové metabolity krve</li></ul>",
      "clinical_legacy": "<ul><li>urychluje a zlepšuje léčbu vrozených vad</li></ul>"
    },
    "quiz": [
      {
            "question": "Osteomyelitida na RTG je viditelná nejdříve za:",
            "options": [
                  "7–14 dní od začátku infekce (RTG zpočátku normální, MR nebo scintigrafie detekuje dříve)",
                  "24–48 hodin od začátku infekce",
                  "6 týdnů (teprve po chronifikaci)",
                  "Je okamžitě viditelná jako periostální reakce a destrukce kortikalis"
            ],
            "correct": 0,
            "explanation": "RTG osteomyelitida: zpočátku normální (10–14 dní). Pak: lytická destrukce spongiózní kosti, destrukce kortikalis, periosteální reakce. MR: okamžitý průkaz (edém dřeně = ↓ T1, ↑ T2/STIR, Gd enhancement). MR/scintigrafie = raná diagnostika."
      },
      {
            "question": "Spondylodiscitida na MR se projevuje:",
            "options": [
                  "Snížením signálu obratlů na T1, zvýšením na T2/STIR + sycením obratlového těla a disku po Gd, destrukce ploténky",
                  "Zvýšením signálu obratlů na T1 bez sycení (= tuková degenerace = Modic typ II, benigní)",
                  "Izolovanou destrukcí příčných výběžků obratlů bez postižení disku",
                  "Stenózou páteřního kanálu bez postižení obratlových těl"
            ],
            "correct": 0,
            "explanation": "Spondylodiscitida MR: ↓ T1 + ↑ T2 postižených obratlových těl a disku → enhancement po Gd. Destrukce meziobratlové ploténky je klíčový příznak (TB i pyogenní). Epidurální absces = urgentní (komprese míchy). CT: destrukce kostí, plánování biopsie."
      }
]
  },
  {
    "id": "radio-27",
    "title": "Zobrazování onemocnění prsu (mamografie, UZ, MR prsů)",
    "section": "Urogenitální trakt",
    "category": "Urogenitál",
    "modalities": [
      "Mamografie (MG)",
      "UZ prsů",
      "MR prsů",
      "Biopsie (core-cut, vakuová)"
    ],
    "keywords": [
      "mamografický screening",
      "BI-RADS klasifikace",
      "mikrokalcifikace",
      "spikulace",
      "duktální karcinom",
      "fibroadenom",
      "cysty prsu",
      "MR mamografie",
      "implantáty"
    ],
    "image": "images/anki/paste-cc4023c7da7427372ea70437359d528082cd8811.jpg",
    "images": [
      {
        "src": "images/anki/paste-cc4023c7da7427372ea70437359d528082cd8811.jpg",
        "title": "Algoritmus senologické diagnostiky",
        "caption": "Kombinace mamografie (nad 45 let screening) a doplňující ultrasonografie u denzní prsní žlázy, indikace duktografie a MR prsů.",
        "modality": "Mamografie / UZ"
      }
    ],
    "content": {
      "principle": "<ul><li>1. místo ve výskytu malignit u žen ve vyspělých zemích</li><li>ca in situ - shluk maligních mikrokalcifikací</li><li>duktální x lobulární; invazivní x neinvazivní (DCIS, LCIS)</li><li>základní radiodiagnostická metoda v zobrazení prsů</li><li>analogová mamografie, digitální mamografie</li><li><strong>Princip:</strong> receptorem obrazu je u analogové speciální film uložený v kazetě + zesilovací folie (snižuje dávku záření)</li><li><strong>Mamografický přístroj:</strong> speciální mamografická rentgenka, generátor, kompresní zařízení, protirozptylová mřížka, systém řízení expozic</li><li>rentgenka vydává charakteristické měkké záření (liší se materiálem anody, výstupním okénkem a přídatnou filtrací)</li><li><strong>Klasifikace prsů dle Tabára:</strong></li><li>doplňující u denzního typu prsu (málo přehledného) nebo 1. volba u žen mladších 40 let, těhotných a kojících lineární sondou (10-13MHz)</li><li>screeningová metoda pro sledování žen s vysokým rizikem vzniku ca prsu</li><li>biopsie prsu za účelem získání histologie</li><li><strong>vakuová biopsie:</strong> u mikrokalcifikací mamy Mamografický screening:</li><li>pozitivní screening → dovyšetření</li><li>u žen starších 45 let ve dvouletém intervalu</li></ul>",
      "methodology": "<ul><li><strong>Provedení:</strong> oba prsy v projekci kraniokaudální a mediolaterální ve 45 stupních</li><li><strong>Mediolaterální šikmá projekce:</strong> umožňuje zachytit celý prs - rameno mamografického přístroje do 45 stupňů</li><li><strong>Speciální projekce:</strong> boční, šikmé mediolaterální ve 30-60°, s bodovou kompresí</li><li>zobrazení vývodů mléčné dráhy jodovou kontrastní látkou</li><li>sondáž kanylou → aplikace KL → mamogramy ve dvou projekcích</li><li>dynamické kontrastní vyšetření (aplikace paramagnetické KL na bázi gadolinia), nativní jen při posouzení celistvosti silikonových implantátů Invazivní metody:</li><li>punkce prsu tenkou jehlou pro aspiraci cyst a tekutinových kolekcí prsu (fine needle aspiration)</li></ul>",
      "normal_anatomy": "<ul><li>Tabár I – fibroglandulární struktura, středně denzní typ(normální poměr žláza a tuk</li><li>Tabár III – reziduální fibroglandulární struktura, nízce denzní typ (převážně tuková s centrální reziduí tkání)</li><li>Tabár IV – glandulární struktura, denzní typ - málo tuku → dodělání UZ</li><li>Tabár V – velmi denzní typ - setřelá struktura → dodělání UZ UZ:</li></ul>",
      "pathology": "<ul><li><strong>Benigní onemocnění prsu:</strong> Záněty: vznik v návaznosti na kojení, akutní x chronické, většinou bakteriální, dobře reagují na ATB léčbu Cysty: nejčastějším benigním nádorem prsu, vznik v důsledku hormonálních vlivů, charakteristické tekutým obsahem, pružnou stěnou, tvar oválný nebo okrouhlý Fibroadenom: nejčastější benigní nádor u mladých žen Intraduktální papilom: krvavá sekrece z bradavnky → duktografie Maligní onemocnění prsu:</li><li>včasná diagnostika - záchyt, když tumor ještě není hmatný → snížení mortality</li><li><strong>screening - mamograf u žen starších 45 let ve dvouletém intervalu Mamografie:</strong></li><li>u žen nad 40 let, do 40 používáme UZ (+ mamografii lze doplnit v nutných případech)</li><li><strong>indikace:</strong> hmatná léze, sekrece z bradavky, ekzém bradavky či dvorce, zánětlivé změny, opakující se bolesti prsou</li><li><strong>Digitální mamografie:</strong> delší čas vyšetření, někdy horší ostrost, plochý digitální detektor</li><li>Kompresní zařízení (7-15kg) - kontrolovatelná a konstantní tloušťka prsu + brání pohybu → zlepšení kvality</li><li>Kraniokaudální - pacientka čelem k mamografickému přístroji - prs položen na úložnou desku a je komprimován shora</li><li>Tabár II – involuční typ žlázy - tuková prsa = nejpřehlednější</li><li><strong>navádění při intervenčních výkonech Duktografie:</strong></li><li>intraduktální léze = defekt kontrastní náplně mlékovodu MR:</li><li><strong>I:</strong> staging karcinomu prsu (vyloučení multifokality, multicentricity), rozlišení jizvy a recidivy karcinomu</li><li>cílené vyšetřování asymptomatických osob s nízkou či vysokou pravděpodobností onemocnění hledaným nádorem</li><li>cílem je objevit onemocnění dříve, než se projeví její příznaky</li><li>vede k nárůstu incidence, ale poklesu úmrtnosti</li></ul>",
      "clinical": "<ul><li><strong>indikace:</strong> krvavá sekrece z jednoho vývodu v bradavce</li><li>monitorování časné odpovědi na neoadjuvantní chemoterapii</li><li>zavádění klipu pro označení lézí před chemoterapii, označení nehmatných lézí před operací</li></ul>",
      "key_points": "<ul><li><strong>Klíčová modalita:</strong> Mamografie (MG), UZ prsů, MR prsů, Biopsie (core-cut, vakuová).</li><li><strong>Hlavní diagnostický cíl:</strong> Včasné stanovení diagnózy, posouzení rozsahu a lokalizace patologie pro volbu adekvátní terapie.</li><li><strong>Zkušební perla:</strong> Vždy začínat méně invazivní dostupnou modalitou a respektovat kontraindikace (alergie na KL, renální insuficience, kardiostimulátory u MR).</li></ul>",
      "definition": "<ul><li>1. místo ve výskytu malignit u žen ve vyspělých zemích</li><li>ca in situ - shluk maligních mikrokalcifikací</li><li>duktální x lobulární; invazivní x neinvazivní (DCIS, LCIS)</li><li>základní radiodiagnostická metoda v zobrazení prsů</li></ul>",
      "etiology": "<ul><li><strong>Provedení:</strong> oba prsy v projekci kraniokaudální a mediolaterální ve 45 stupních</li><li><strong>Mediolaterální šikmá projekce:</strong> umožňuje zachytit celý prs - rameno mamografického přístroje do 45 stupňů</li><li><strong>Speciální projekce:</strong> boční, šikmé mediolaterální ve 30-60°, s bodovou kompresí</li><li>zobrazení vývodů mléčné dráhy jodovou kontrastní látkou</li></ul>",
      "pathogenesis": "<ul><li>Tabár I – fibroglandulární struktura, středně denzní typ(normální poměr žláza a tuk</li><li>Tabár III – reziduální fibroglandulární struktura, nízce denzní typ (převážně tuková s centrální reziduí tkání)</li><li>Tabár IV – glandulární struktura, denzní typ - málo tuku → dodělání UZ</li><li>Tabár V – velmi denzní typ - setřelá struktura → dodělání UZ UZ:</li></ul>",
      "macroscopy": "<ul><li><strong>Benigní onemocnění prsu:</strong> Záněty: vznik v návaznosti na kojení, akutní x chronické, většinou bakteriální, dobře reagují na ATB léčbu Cysty: nejčastějším benigním nádorem prsu, vznik v důsledku hormonálních vlivů, charakteristické tekutým obsahem, pružnou stěnou, tvar oválný nebo okrouhlý Fibroadenom: nejčastější benigní nádor u mladých žen Intraduktální papilom: krvavá sekrece z bradavnky → duktografie Maligní onemocnění prsu:</li><li>včasná diagnostika - záchyt, když tumor ještě není hmatný → snížení mortality</li><li><strong>screening - mamograf u žen starších 45 let ve dvouletém intervalu Mamografie:</strong></li><li>u žen nad 40 let, do 40 používáme UZ (+ mamografii lze doplnit v nutných případech)</li></ul>",
      "microscopy": "<ul><li><strong>indikace:</strong> hmatná léze, sekrece z bradavky, ekzém bradavky či dvorce, zánětlivé změny, opakující se bolesti prsou</li><li><strong>Digitální mamografie:</strong> delší čas vyšetření, někdy horší ostrost, plochý digitální detektor</li><li>Kompresní zařízení (7-15kg) - kontrolovatelná a konstantní tloušťka prsu + brání pohybu → zlepšení kvality</li><li>Kraniokaudální - pacientka čelem k mamografickému přístroji - prs položen na úložnou desku a je komprimován shora</li></ul>",
      "clinical_legacy": "<ul><li><strong>indikace:</strong> krvavá sekrece z jednoho vývodu v bradavce</li><li>monitorování časné odpovědi na neoadjuvantní chemoterapii</li><li>zavádění klipu pro označení lézí před chemoterapii, označení nehmatných lézí před operací</li></ul>"
    },
    "quiz": [
      {
            "question": "Osteosarkom se nejčastěji vyskytuje v:",
            "options": [
                  "Metafýze dlouhých kostí u adolescentů (distální femur > proximální tibia > proximální humerus)",
                  "Epifýze krátkých kostí u dospělých nad 50 let",
                  "Diafýze obratlů u starších pacientů",
                  "Lebečních kostech u dětí do 5 let"
            ],
            "correct": 0,
            "explanation": "Osteosarkom: nejčastější primární maligní kostní tumor u adolescentů (10–20 let). Predilekce: metafýza distálního femuru (~ 40%), proximální tibia, proximální humerus. RTG: osteolytická nebo smíšená léze, Codmanův trojúhelník, sunburst pattern, prolomení kortikalis."
      },
      {
            "question": "Mnohočetný myelom se na RTG skeletu projevuje jako:",
            "options": [
                  "Difuzní punched-out lytická ložiska bez sklerotického lemu (lebka, páteř, pánev, žebra)",
                  "Smíšená osteolytická i osteoblastická ložiska (typické pro metastázy prostaty)",
                  "Difuzní zvýšená denzita skeletu (osteosklerotický myelom – vzácný POEMS syndrom)",
                  "Periostální reakce s expanzí kortikalis (typické pro sarkomy, ne myelom)"
            ],
            "correct": 0,
            "explanation": "Myelom RTG: diskrétní punched-out lytická ložiska bez sklerotického okraje (na rozdíl od metastáz). Lebka – dutiny kulkového průstřelu. PET/CT nebo celotělová MR: staging a sledování léčby (senzitivnější než RTG). Scintigrafie kosti má nízkou senzitivitu u myelomu!"
      }
]
  },
  {
    "id": "radio-28",
    "title": "Obecné projevy kostních onemocnění v RTG obraze",
    "section": "Muskuloskeletální systém",
    "category": "Skelet",
    "modalities": [
      "RTG",
      "CT skeletu",
      "MR",
      "Scintigrafie skeletu"
    ],
    "keywords": [
      "osteolýza",
      "osteoskleróza",
      "periostální reakce (cibulovité vrstvení, Codmanův trojúhelník, spikuly)",
      "sekvestr",
      "osteoporóza",
      "osteomalacie",
      "zóna přechodu"
    ],
    "image": "images/anki/supracondylar-fracture-marked-displacement.jpg",
    "images": [
      {
        "src": "images/anki/supracondylar-fracture-marked-displacement.jpg",
        "title": "Typické projevy skeletální léze a periostu na RTG",
        "caption": "Hodnocení kortikalis, periostálních apozic, spongiózy a okolních měkkých tkání na standardním skiagramu.",
        "modality": "RTG Skelet"
      }
    ],
    "content": {
      "principle": "<ul><li>otevřená x zavřená; kompletní x inkompletní</li></ul>",
      "methodology": "<ul><li>Metodika a technické provedení vyšetření u tématu <strong>Obecné projevy kostních onemocnění v RTG obraze</strong> volí optimální projekce, kontrastní fáze a nastavení zobrazení pro maximální diagnostickou výtěžnost.</li></ul>",
      "normal_anatomy": "<ul><li>na rtg snímku vidíme zevní část kompakty - kortikalis - jako bílý, ostře ohraničený stín, uvnitř je tmavá dřeňová dutina; spongiozy jsou nejlépe vidět v epifýzách, periost až při patologickém procesu</li><li><strong>základní patologické změny:</strong> a) změny velikosti a tvaru kosti: vývojové změny (dysplazie, hyperplazie), valgózní (X) nebo varózní (O) změny; přídatné sezamské kůstky, spina bifida, anomálie narušující funkce, dystrofie (z malnutrice) b) změny hutnosti tkáně: Úbytek (osteoporóza - tmavší stín, trámce nezřetelné, struktura neostrá; osteolýza - lokální úbytek, buď patologickým procesem nebo usurací); Osteoskleróza (zvýšená novotvorba - na snímku bílá formace - reparativní změny po traumatech, zánětech, degenerativních změnáchosteofyty), Periostální novotvorba (ukládání kalcia do nekrotické tkáně periostu)</li><li><strong>Hodnotíme:</strong> tvar a velikost, snížení výšky, změnu hustoty tkáně, posuny fragmentů a jejich dislokace, měkká tkáň okolo, otok, drobné fragmenty</li></ul>",
      "pathology": "<ul><li>patologické obrazy mohou být difúzní (celý skelet - osteoporóza) nebo ložiskové (zlomeniny, nádory, záněty → solitární nebo mnohočetné)</li><li>u lehčích zlomenin stačí RTG, komplikovanější už CT i MR (např. páteř)</li><li>Tříštivá, kompresivní, stresová fraktura, impresivní (jeden fragment pod druhý)</li><li>patologická fraktura - v místě nádoru nebo chronického zánětu</li><li><strong>Dislokované zlomeniny:</strong> posun do stran (ad latus - vždy distální proti proximálnímu), posun do délky (ad longitudinem) nebo zkrácení nebo prodloužení, osová odchylka (ad axim)</li><li><strong>Luxace (vykloubení):</strong> kompletní ztráta kongruence kloubních ploch</li><li>Subluxace - jen částečné vykloubení</li><li><strong>Hojení zlomenin:</strong> endosteální fibrózní svalek → sytý kostěnný svalek (mineralizovaný); pseudoartrózy (pakloub - při nedokonalém zahojeni</li></ul>",
      "clinical": "<ul><li>RTG vyšetření je první v diagnostickém algoritmu</li><li>Hodnocení rtg snímku = postavení a tvar kostí, kortikalis, šířka a tvar dřeňové dutiny, okolní měkké tkáně, periostální reakci Traumatologie:</li></ul>",
      "key_points": "<ul><li><strong>Klíčová modalita:</strong> RTG, CT skeletu, MR, Scintigrafie skeletu.</li><li><strong>Hlavní diagnostický cíl:</strong> Včasné stanovení diagnózy, posouzení rozsahu a lokalizace patologie pro volbu adekvátní terapie.</li><li><strong>Zkušební perla:</strong> Vždy začínat méně invazivní dostupnou modalitou a respektovat kontraindikace (alergie na KL, renální insuficience, kardiostimulátory u MR).</li></ul>",
      "definition": "<ul><li>otevřená x zavřená; kompletní x inkompletní</li></ul>",
      "etiology": "<ul><li>Metodika a technické provedení vyšetření u tématu <strong>Obecné projevy kostních onemocnění v RTG obraze</strong> volí optimální projekce, kontrastní fáze a nastavení zobrazení pro maximální diagnostickou výtěžnost.</li></ul>",
      "pathogenesis": "<ul><li>na rtg snímku vidíme zevní část kompakty - kortikalis - jako bílý, ostře ohraničený stín, uvnitř je tmavá dřeňová dutina; spongiozy jsou nejlépe vidět v epifýzách, periost až při patologickém procesu</li><li><strong>základní patologické změny:</strong> a) změny velikosti a tvaru kosti: vývojové změny (dysplazie, hyperplazie), valgózní (X) nebo varózní (O) změny; přídatné sezamské kůstky, spina bifida, anomálie narušující funkce, dystrofie (z malnutrice) b) změny hutnosti tkáně: Úbytek (osteoporóza - tmavší stín, trámce nezřetelné, struktura neostrá; osteolýza - lokální úbytek, buď patologickým procesem nebo usurací); Osteoskleróza (zvýšená novotvorba - na snímku bílá formace - reparativní změny po traumatech, zánětech, degenerativních změnáchosteofyty), Periostální novotvorba (ukládání kalcia do nekrotické tkáně periostu)</li><li><strong>Hodnotíme:</strong> tvar a velikost, snížení výšky, změnu hustoty tkáně, posuny fragmentů a jejich dislokace, měkká tkáň okolo, otok, drobné fragmenty</li></ul>",
      "macroscopy": "<ul><li>patologické obrazy mohou být difúzní (celý skelet - osteoporóza) nebo ložiskové (zlomeniny, nádory, záněty → solitární nebo mnohočetné)</li><li>u lehčích zlomenin stačí RTG, komplikovanější už CT i MR (např. páteř)</li><li>Tříštivá, kompresivní, stresová fraktura, impresivní (jeden fragment pod druhý)</li><li>patologická fraktura - v místě nádoru nebo chronického zánětu</li></ul>",
      "microscopy": "<ul><li><strong>Dislokované zlomeniny:</strong> posun do stran (ad latus - vždy distální proti proximálnímu), posun do délky (ad longitudinem) nebo zkrácení nebo prodloužení, osová odchylka (ad axim)</li><li><strong>Luxace (vykloubení):</strong> kompletní ztráta kongruence kloubních ploch</li><li>Subluxace - jen částečné vykloubení</li><li><strong>Hojení zlomenin:</strong> endosteální fibrózní svalek → sytý kostěnný svalek (mineralizovaný); pseudoartrózy (pakloub - při nedokonalém zahojeni</li></ul>",
      "clinical_legacy": "<ul><li>RTG vyšetření je první v diagnostickém algoritmu</li><li>Hodnocení rtg snímku = postavení a tvar kostí, kortikalis, šířka a tvar dřeňové dutiny, okolní měkké tkáně, periostální reakci Traumatologie:</li></ul>"
    },
    "quiz": [
      {
            "question": "Artróza (osteoartróza) na RTG se projevuje klasickou triádou:",
            "options": [
                  "Zúžení kloubní štěrbiny + subchondrální skleróza + osteofyty (okrajové kostní přírůstky)",
                  "Periartrikulární osteoporóza + subchondrální eroze + ankylóza (typické pro RA)",
                  "Kalcifikace periartikulárních tkání + tophi + destrukce epifýzy (typické pro dnu)",
                  "Zúžení kloubní štěrbiny + osteoporóza + bambusová páteř (ankylozující spondylitida)"
            ],
            "correct": 0,
            "explanation": "Artróza RTG triáda: (1) nerovnoměrné zúžení kloubní štěrbiny (ztráta chrupavky), (2) subchondrální skleróza (eburnace), (3) osteofyty (spondylofyty u páteře). Subchondrální cysty = Geröderovy cysty. RA: periartrikulární osteoporóza, eroze, bez osteofytů."
      },
      {
            "question": "Revmatoidní artritida (RA) na RTG rukou – nejčasnější příznak:",
            "options": [
                  "Periartrikulární osteoporóza + zúžení MCP/PIP kloubů + okrajové eroze (zejm. 2.–3. MCP)",
                  "Subchondrální skleróza a osteofyty (typické pro artrózu, ne RA)",
                  "Destrukce DIP kloubů s pencil-in-cup deformitou (typické pro psoriatickou artritidu)",
                  "Kalcifikace šlach a burs (typické pro CPPD nebo dnu)"
            ],
            "correct": 0,
            "explanation": "RA RTG progrese: 1) periartikulární osteoporóza (nejčasněji), 2) zúžení kloubní štěrbiny, 3) okrajové eroze (subchondrálně), 4) mutilující artritida (arthritis mutilans). DIP nezasaženy (narozdíl od psoriatické artritidy). MR: průkaz synovitidy i před RTG změnami."
      }
]
  },
  {
    "id": "radio-29",
    "title": "Zobrazování kostních a kloubních zánětů (osteomyelitida, artritida, spondylodiscitida)",
    "section": "Muskuloskeletální systém",
    "category": "Skelet",
    "modalities": [
      "RTG",
      "MR",
      "Scintigrafie",
      "CT"
    ],
    "keywords": [
      "akutní osteomyelitida",
      "chronická osteomyelitida",
      "sekvestr",
      "involukrum",
      "Brodieho absces",
      "spondylodiscitida",
      "septická artritida",
      "edém kostní dřeně na MR (STIR)"
    ],
    "image": "images/anki/paste-fe5ce9834defd3462f6d170d2d85d68a62bfc12f.jpg",
    "images": [
      {
        "src": "images/anki/paste-fe5ce9834defd3462f6d170d2d85d68a62bfc12f.jpg",
        "title": "Vyšetřovací postup při zánětlivém a traumatickém postižení kloubů",
        "caption": "Nativní RTG zachytí změny na kosti až po 10-14 dnech; MR je metodou volby pro časný záchyt zánětu a edému kostní dřeně (STIR/T2).",
        "modality": "RTG / MR"
      }
    ],
    "content": {
      "principle": "<ul><li>Bakteriální (osteomyelitis)</li><li>1. fáze - na snímku jen zduření měkkých tkání + necharakteristické projasnění v kosti (přechází v osteolýzu) + periostální reakce (odchlípení periostu od kortikalis) 2. fáze - změny jsou prokazatelné až po 10-14 dnech</li><li>MR obraz chronické osteomyelitidy → kombinace osteolytických a osteosklerotických změn + tvorba sekvestru (odumřelý, odchlípnutý periost) zúžení dřeňové dutiny</li><li>Brodieho absces - osteolytické ložisko se sklerotickým lemem</li><li><strong>záněty kloubů:</strong> 1. fáze = snímek negativní (zánět začíná na synovii a okolních měkkých tkáních →pak až chrupavky); 2 fáze exsudace = rozšíření kloubní štěrbina (sonografický nebo MR průkaz tekutiny v kloubu) → subchondriální geody (intrasponginózní cysty) → zúžená kloubní štěrbina + deformace kloubních ploch</li><li>reaktivní změny obvykle zahrnují periferní klouby + páteř = spondylartritidy</li><li>nejčastější onemocnění periferního skeletu - metakarpofalangeání spoje + proximální falangy</li><li>1. fáze - necharakteristická epifyzární poróza + rozšíření periartikulárních měkkých částí</li><li>Další fáze - kloubní eroze, geody, subluxace, zúžení kloubních štěrbin, ulnární deviace prstů</li><li>první změny symetricky na sakroileálním skloubení</li><li><strong>Artritis uratica:</strong> osteolytické defekty v hlavicích metatarzů</li></ul>",
      "methodology": "<ul><li>Metodika a technické provedení vyšetření u tématu <strong>Zobrazování kostních a kloubních zánětů (osteomyelitida, artritida, spondylodiscitida)</strong> volí optimální projekce, kontrastní fáze a nastavení zobrazení pro maximální diagnostickou výtěžnost.</li></ul>",
      "normal_anatomy": "<ul><li>Fyziologický obraz vyžaduje znalost normální radioanatomie, symetrie struktur a fyziologických denzit (CT) a signálových intenzit (MR).</li></ul>",
      "pathology": "<ul><li>šíření hematogenní cestou nebo přestupem zánětu z okolí</li><li>rozhodující je scintigrafické a MR vyšetření</li><li>neléčený akutní zánět → chronický</li><li>Panaritium = zánět článků prstů, který přešel z okolních měkkých tkání → exogenní myelitida</li><li>TBC kostí - na periferním skeletu (kyčle a kolena) + páteř Virová</li><li><strong>Revmatoidní artritida:</strong></li><li>podobný obraz u degenerativních osteoartróz - tam ale na distálních článcích</li><li>Ankylozující spondylartritida (M. Bechtěrev):</li><li>AI onemocnění; séronegativní spondyloartróza (negativní revma faktory)</li><li>neostrost kloubních plošek, ileální skleróza, eroze na ploskách, vazy zkostnatí a pevně ztuhnou = páteř jako celek</li><li><strong>Sarkoileitida:</strong> příznak u M. Reiter, psoriatické nebo enteropatické spondyloartrozy (ulcerozní kolitida nebo M. Crohn)</li></ul>",
      "clinical": "<ul><li>autoimunitní reakce na infekce ve vzdáleném tělesném orgánu</li></ul>",
      "key_points": "<ul><li><strong>Klíčová modalita:</strong> RTG, MR, Scintigrafie, CT.</li><li><strong>Hlavní diagnostický cíl:</strong> Včasné stanovení diagnózy, posouzení rozsahu a lokalizace patologie pro volbu adekvátní terapie.</li><li><strong>Zkušební perla:</strong> Vždy začínat méně invazivní dostupnou modalitou a respektovat kontraindikace (alergie na KL, renální insuficience, kardiostimulátory u MR).</li></ul>",
      "definition": "<ul><li>Bakteriální (osteomyelitis)</li><li>1. fáze - na snímku jen zduření měkkých tkání + necharakteristické projasnění v kosti (přechází v osteolýzu) + periostální reakce (odchlípení periostu od kortikalis) 2. fáze - změny jsou prokazatelné až po 10-14 dnech</li><li>MR obraz chronické osteomyelitidy → kombinace osteolytických a osteosklerotických změn + tvorba sekvestru (odumřelý, odchlípnutý periost) zúžení dřeňové dutiny</li><li>Brodieho absces - osteolytické ložisko se sklerotickým lemem</li></ul>",
      "etiology": "<ul><li>Metodika a technické provedení vyšetření u tématu <strong>Zobrazování kostních a kloubních zánětů (osteomyelitida, artritida, spondylodiscitida)</strong> volí optimální projekce, kontrastní fáze a nastavení zobrazení pro maximální diagnostickou výtěžnost.</li></ul>",
      "pathogenesis": "<ul><li>Fyziologický obraz vyžaduje znalost normální radioanatomie, symetrie struktur a fyziologických denzit (CT) a signálových intenzit (MR).</li></ul>",
      "macroscopy": "<ul><li>šíření hematogenní cestou nebo přestupem zánětu z okolí</li><li>rozhodující je scintigrafické a MR vyšetření</li><li>neléčený akutní zánět → chronický</li><li>Panaritium = zánět článků prstů, který přešel z okolních měkkých tkání → exogenní myelitida</li></ul>",
      "microscopy": "<ul><li>TBC kostí - na periferním skeletu (kyčle a kolena) + páteř Virová</li><li><strong>Revmatoidní artritida:</strong></li><li>podobný obraz u degenerativních osteoartróz - tam ale na distálních článcích</li><li>Ankylozující spondylartritida (M. Bechtěrev):</li></ul>",
      "clinical_legacy": "<ul><li>autoimunitní reakce na infekce ve vzdáleném tělesném orgánu</li></ul>"
    },
    "quiz": [
      {
            "question": "Salter-Harris klasifikace dětských epifyzárních fraktur – typ II (nejčastější) zahrnuje:",
            "options": [
                  "Frakturu přes růstovou ploténku (fyzu) + fragment metafýzy (Thurston-Holland fragment) – prognóza dobrá",
                  "Izolovanou frakturu přes fyzu bez kostního fragmentu (typ I – riziko poruchy růstu)",
                  "Frakturu procházející fyzou a epifýzou do kloubní plochy (typ III – riziko poruchy růstu)",
                  "Kompresivní frakturu fyzy (typ V – nejhorší prognóza, riziko předčasného uzávěru)"
            ],
            "correct": 0,
            "explanation": "Salter-Harris: I = přes fyzu; II = fyza + metafýza (nejčastější, ~ 75%, dobrá prognóza); III = fyza + epifýza (zasahuje kloub); IV = fyza + metafýza + epifýza; V = komprese fyzy (SALTER: S=I, A=II, L=III, T=IV, E=V, R=common). Typy III–V mají riziko poruchy růstu."
      },
      {
            "question": "NEXUS kritéria pro CT krční páteře po traumatu indikují CT, pokud:",
            "options": [
                  "Pacient nesplňuje VŠECHNA nízká-riziková kritéria (bez fokálního deficitu, bez bolesti páteře, bez poruch vědomí, bez intoxikace, bez rozptylující bolesti)",
                  "Pacient je zcela asymptomatický s GCS 15 a bez bolesti krku",
                  "Je přítomna pouze boční bolest krku bez poruchy vědomí nebo intoxikace",
                  "Věk pacienta je nad 65 let bez dalšího klinického hodnocení"
            ],
            "correct": 0,
            "explanation": "NEXUS: Pokud pacient splňuje VŠECH 5 low-risk kritérií → CT není nutné. KT = abnormal alertness, focal neurologic deficit, tenderness midline, intoxication, painful distracting injury. Kanadská pravidla C-spine jsou alternativou."
      }
]
  },
  {
    "id": "radio-30",
    "title": "Zobrazování kostních nádorů (benigní, maligní a metastázy)",
    "section": "Muskuloskeletální systém",
    "category": "Skelet",
    "modalities": [
      "RTG",
      "MR",
      "CT",
      "PET/CT"
    ],
    "keywords": [
      "osteosarkom",
      "Ewingův sarkom",
      "chondrosarkom",
      "osteoidní osteom (nidus)",
      "benigní léze (NOF, enkondrom)",
      "Codmanův trojúhelník",
      "sluneční paprsky (sunburst)",
      "osteolytické a osteoblastické metastázy"
    ],
    "image": "images/anki/supracondylar-fracture-marked-displacement.jpg",
    "images": [
      {
        "src": "images/anki/supracondylar-fracture-marked-displacement.jpg",
        "title": "Kostní léze – hodnocení zóny přechodu a periostální reakce",
        "caption": "Ostrá sklerotická zóna přechodu značí benigní pomalý růst; neostrá široká zóna s lytickým rozpadem kortikalis a periostální reakcí svědčí pro malignitu.",
        "modality": "RTG Skelet"
      }
    ],
    "content": {
      "principle": "<ul><li>často se skládají z více tkání = chrupavek, kostí, cév a dalších tkání</li><li><strong>Kostní metastázy:</strong> tam kde je bohatě vaskularizovaná kostní dřeň = lebka, páteř, pánev</li><li>nejčastěji ca mammy a prostaty, ca plic, ledvin a ŠŽ</li><li><strong>Osteolytické:</strong> ostře ohraničené ložiska (ca plic a ledvin)</li><li><strong>Smíšené:</strong> kombinace obou</li><li><strong>Metabolická osteopatie:</strong> Hormonálně, malnutricí, poruchami fce ledvin →denzitometrické metody</li></ul>",
      "methodology": "<ul><li>Metodika a technické provedení vyšetření u tématu <strong>Zobrazování kostních nádorů (benigní, maligní a metastázy)</strong> volí optimální projekce, kontrastní fáze a nastavení zobrazení pro maximální diagnostickou výtěžnost.</li></ul>",
      "normal_anatomy": "<ul><li><strong>Obecné příznaky nádorů na ZM:</strong> Homogenita nebo heterogenita, lokální agresivita, periostóza (známka malignity), lokalizace, věková struktura, frekvence nádorů typické noční bolesti</li><li><strong>Osteomalacie:</strong> úbytek organické hmoty i mineralizace - na rtg struktura smazána</li></ul>",
      "pathology": "<ul><li>RTG obraz - kombinace osteolýzy, osteosklerózy, periosteální reakce a změn v měkkých částech těžko odlišitelné od zánětlivých nebo jiných onemocnění</li><li><strong>Klasifikace WHO dle produkce tkáně:</strong> a) Kostitvorné = osteogenní: osteom, osteoidní osteom (osteoblastom), osteogenní sarkom (osteolýza s periostózou - těžce odlišitelné od osteomyelitidy), osteoklastom (obrovskobuněčný nádor z cystoidních struktur v epifýze a metafýze dlouhých kostí) b) Chondrogenní: Osteochondrom (nejčastější benigní kostní nádor - na široké bázi metafýz kostí - na konci útvaru osifikovaná čepička), chondrosarkom c) Nádory kostní dřeně: Mnohočetný myelom (plazmocytom = na osovém skeletu, ostře ohraničená osteolytická ložiska bez sklerotického lemu), Ewingův sarkom (u mladších jedinců, rozšíření dřeňové dutiny diafýzy a cibulovité periostózy) d) Cévní nádory: hemangiom (obratlové těla)</li><li>obvykle mnohočetné, méně solidní (grawitzův tu)</li><li><strong>Osteoplastické:</strong> místa zvýšené sytosti (ca prostaty a mamy)</li><li>nejrychlejší je detekce metastáz metodami nukleární medicíny (DaTSCAN, PET/CT) a MR → běžným vyšetřením možno zaměnit s degenerativními změnami</li><li><strong>Pseudotumory:</strong> Benigní cysty na proximální části femuru nebo humeru</li><li><strong>Ischemické změny:</strong> avaskulární nekróza</li></ul>",
      "clinical": "<ul><li><strong>Pseudotumory:</strong> Benigní cysty na proximální části femuru nebo humeru</li><li><strong>Ischemické změny:</strong> avaskulární nekróza</li><li><strong>Metabolická osteopatie:</strong> Hormonálně, malnutricí, poruchami fce ledvin →denzitometrické metody</li><li><strong>Osteomalacie:</strong> úbytek organické hmoty i mineralizace - na rtg struktura smazána</li></ul>",
      "key_points": "<ul><li><strong>Klíčová modalita:</strong> RTG, MR, CT, PET/CT.</li><li><strong>Hlavní diagnostický cíl:</strong> Včasné stanovení diagnózy, posouzení rozsahu a lokalizace patologie pro volbu adekvátní terapie.</li><li><strong>Zkušební perla:</strong> Vždy začínat méně invazivní dostupnou modalitou a respektovat kontraindikace (alergie na KL, renální insuficience, kardiostimulátory u MR).</li></ul>",
      "definition": "<ul><li>často se skládají z více tkání = chrupavek, kostí, cév a dalších tkání</li><li><strong>Kostní metastázy:</strong> tam kde je bohatě vaskularizovaná kostní dřeň = lebka, páteř, pánev</li><li>nejčastěji ca mammy a prostaty, ca plic, ledvin a ŠŽ</li><li><strong>Osteolytické:</strong> ostře ohraničené ložiska (ca plic a ledvin)</li></ul>",
      "etiology": "<ul><li>Metodika a technické provedení vyšetření u tématu <strong>Zobrazování kostních nádorů (benigní, maligní a metastázy)</strong> volí optimální projekce, kontrastní fáze a nastavení zobrazení pro maximální diagnostickou výtěžnost.</li></ul>",
      "pathogenesis": "<ul><li><strong>Obecné příznaky nádorů na ZM:</strong> Homogenita nebo heterogenita, lokální agresivita, periostóza (známka malignity), lokalizace, věková struktura, frekvence nádorů typické noční bolesti</li><li><strong>Osteomalacie:</strong> úbytek organické hmoty i mineralizace - na rtg struktura smazána</li></ul>",
      "macroscopy": "<ul><li>RTG obraz - kombinace osteolýzy, osteosklerózy, periosteální reakce a změn v měkkých částech těžko odlišitelné od zánětlivých nebo jiných onemocnění</li><li><strong>Klasifikace WHO dle produkce tkáně:</strong> a) Kostitvorné = osteogenní: osteom, osteoidní osteom (osteoblastom), osteogenní sarkom (osteolýza s periostózou - těžce odlišitelné od osteomyelitidy), osteoklastom (obrovskobuněčný nádor z cystoidních struktur v epifýze a metafýze dlouhých kostí) b) Chondrogenní: Osteochondrom (nejčastější benigní kostní nádor - na široké bázi metafýz kostí - na konci útvaru osifikovaná čepička), chondrosarkom c) Nádory kostní dřeně: Mnohočetný myelom (plazmocytom = na osovém skeletu, ostře ohraničená osteolytická ložiska bez sklerotického lemu), Ewingův sarkom (u mladších jedinců, rozšíření dřeňové dutiny diafýzy a cibulovité periostózy) d) Cévní nádory: hemangiom (obratlové těla)</li><li>obvykle mnohočetné, méně solidní (grawitzův tu)</li><li><strong>Osteoplastické:</strong> místa zvýšené sytosti (ca prostaty a mamy)</li></ul>",
      "microscopy": "<ul><li>nejrychlejší je detekce metastáz metodami nukleární medicíny (DaTSCAN, PET/CT) a MR → běžným vyšetřením možno zaměnit s degenerativními změnami</li><li><strong>Pseudotumory:</strong> Benigní cysty na proximální části femuru nebo humeru</li><li><strong>Ischemické změny:</strong> avaskulární nekróza</li></ul>",
      "clinical_legacy": "<ul><li><strong>Pseudotumory:</strong> Benigní cysty na proximální části femuru nebo humeru</li><li><strong>Ischemické změny:</strong> avaskulární nekróza</li><li><strong>Metabolická osteopatie:</strong> Hormonálně, malnutricí, poruchami fce ledvin →denzitometrické metody</li><li><strong>Osteomalacie:</strong> úbytek organické hmoty i mineralizace - na rtg struktura smazána</li></ul>"
    },
    "quiz": [
      {
            "question": "CT mozku bez KL je metodou první volby v jakém urgentním neurologickém případě a proč?",
            "options": [
                  "Suspektní subarachnoidální krvácení (SAK) – rychlá detekce akutní krve v bazálních cisternách (hyperintenzita na CT bez KL)",
                  "Suspektní demyelinizační plaky (RS) – MR je výrazně senzitivnější",
                  "Diagnostika nitrokranialních nádorů – MR s KL je zlatý standard",
                  "Ischemická CMP v prvních hodinách – DWI sekvence MR je senzitivnější pro akutní ischemii"
            ],
            "correct": 0,
            "explanation": "CT mozku bez KL: urgentní = krvácení (hyperdenzita). SAK: krev v bazálních cisternách (hyperintenzní v prvních 12–24 h). ICH: hyperdenzní hematom. Ischemická CMP v prvních hodinách → CT normální nebo subtilní změny; DWI-MR senzitivnější (ale pomalejší/méně dostupné)."
      },
      {
            "question": "DWI (Diffusion Weighted Imaging) sekvence MR zobrazuje akutní ischemii mozku jako:",
            "options": [
                  "Hyperintenzní oblast (světlá) v DWI + hypointenzní na ADC mapě (restrikce difuze vody) = časná ischemie do minut",
                  "Hypointenzní lézi v DWI s hyperintenzitou na T2 = chronická ischemie",
                  "Rovnoměrně hyperintenzní oblast ve všech sekvencích bez omezení difuze",
                  "Normální DWI signál, ischemie je viditelná pouze na FLAIR sekvenci"
            ],
            "correct": 0,
            "explanation": "Akutní ischemie: cytotoxický edém → restrikce difuze vody → DWI hyperintenzní + ADC hypointenzní. Viditelné do minut. FLAIR pozitivní po ~ 6–12 h (DWI+/FLAIR- = ischemie < 4,5 h = okno pro trombolýzu). Chronická ischemie: T2 hyperintenzní, DWI normální."
      }
]
  },
  {
    "id": "radio-31",
    "title": "Obecné projevy kloubních onemocnění v RTG obraze",
    "section": "Muskuloskeletální systém",
    "category": "Skelet",
    "modalities": [
      "RTG",
      "UZ kloubů",
      "MR"
    ],
    "keywords": [
      "zúžení kloubní štěrbiny",
      "subchondrální skleróza",
      "osteofyty",
      "subchondrální cysty (geody)",
      "eroze",
      "periartikulární osteoporóza",
      "kloubní nitrokloubní výpotek"
    ],
    "image": "images/anki/paste-c3d28255480bc814d768b0d16ec240fbc554836d.jpg",
    "images": [
      {
        "src": "images/anki/paste-c3d28255480bc814d768b0d16ec240fbc554836d.jpg",
        "title": "Zobrazení kloubní štěrbiny a přilehlých kostních struktur",
        "caption": "Rentgenové hodnocení kongruence kloubních ploch, šíře kloubní štěrbiny a přítomnosti osteofytů a subchondrálních změn.",
        "modality": "RTG Kloub"
      }
    ],
    "content": {
      "principle": "<ul><li><strong>Vyšetření měkkých částí kloubů:</strong></li><li><strong>UZ:</strong> průkaz nitrokloubní tekutiny, svalové úpony rotátorové manžety, labra chrupavčitých částí (menší přesnost)</li><li><strong>MR ramenního kloubu:</strong> prokáže poškození labra, úponovou část m. supraspinatus nebo jiných svalů rotátorové manžety</li></ul>",
      "methodology": "<ul><li>Metodika a technické provedení vyšetření u tématu <strong>Obecné projevy kloubních onemocnění v RTG obraze</strong> volí optimální projekce, kontrastní fáze a nastavení zobrazení pro maximální diagnostickou výtěžnost.</li></ul>",
      "normal_anatomy": "<ul><li>Fyziologický obraz vyžaduje znalost normální radioanatomie, symetrie struktur a fyziologických denzit (CT) a signálových intenzit (MR).</li></ul>",
      "pathology": "<ul><li>hlavně UZ a MR</li><li><strong>MR:</strong> zhodnotí úpony šlach, menisky, vazy → hyposignální; šířku chrupavky, okolní měkké tkáně</li><li>nejčastěji MR kolenního kloubu - indikací je ruptura zkřížených nebo kolaterálních vazů, poškození menisků (od jemné fisury ž po velké ruptury), poškození chrupavek, subchondrální zlomeniny</li><li>Dále diagnostika avaskulárních nekróz, komplikovaného zánětu nebo M. Perthes u dětí</li></ul>",
      "clinical": "<ul><li><strong>MR ramenního kloubu:</strong> prokáže poškození labra, úponovou část m. supraspinatus nebo jiných svalů rotátorové manžety</li><li>Dále diagnostika avaskulárních nekróz, komplikovaného zánětu nebo M. Perthes u dětí</li></ul>",
      "key_points": "<ul><li><strong>Klíčová modalita:</strong> RTG, UZ kloubů, MR.</li><li><strong>Hlavní diagnostický cíl:</strong> Včasné stanovení diagnózy, posouzení rozsahu a lokalizace patologie pro volbu adekvátní terapie.</li><li><strong>Zkušební perla:</strong> Vždy začínat méně invazivní dostupnou modalitou a respektovat kontraindikace (alergie na KL, renální insuficience, kardiostimulátory u MR).</li></ul>",
      "definition": "<ul><li><strong>Vyšetření měkkých částí kloubů:</strong></li><li><strong>UZ:</strong> průkaz nitrokloubní tekutiny, svalové úpony rotátorové manžety, labra chrupavčitých částí (menší přesnost)</li><li><strong>MR ramenního kloubu:</strong> prokáže poškození labra, úponovou část m. supraspinatus nebo jiných svalů rotátorové manžety</li></ul>",
      "etiology": "<ul><li>Metodika a technické provedení vyšetření u tématu <strong>Obecné projevy kloubních onemocnění v RTG obraze</strong> volí optimální projekce, kontrastní fáze a nastavení zobrazení pro maximální diagnostickou výtěžnost.</li></ul>",
      "pathogenesis": "<ul><li>Fyziologický obraz vyžaduje znalost normální radioanatomie, symetrie struktur a fyziologických denzit (CT) a signálových intenzit (MR).</li></ul>",
      "macroscopy": "<ul><li>hlavně UZ a MR</li><li><strong>MR:</strong> zhodnotí úpony šlach, menisky, vazy → hyposignální; šířku chrupavky, okolní měkké tkáně</li><li>nejčastěji MR kolenního kloubu - indikací je ruptura zkřížených nebo kolaterálních vazů, poškození menisků (od jemné fisury ž po velké ruptury), poškození chrupavek, subchondrální zlomeniny</li><li>Dále diagnostika avaskulárních nekróz, komplikovaného zánětu nebo M. Perthes u dětí</li></ul>",
      "microscopy": "<ul><li><strong>MR ramenního kloubu:</strong> prokáže poškození labra, úponovou část m. supraspinatus nebo jiných svalů rotátorové manžety</li><li>Dále diagnostika avaskulárních nekróz, komplikovaného zánětu nebo M. Perthes u dětí</li></ul>",
      "clinical_legacy": "<ul><li><strong>MR ramenního kloubu:</strong> prokáže poškození labra, úponovou část m. supraspinatus nebo jiných svalů rotátorové manžety</li><li>Dále diagnostika avaskulárních nekróz, komplikovaného zánětu nebo M. Perthes u dětí</li></ul>"
    },
    "quiz": [
      {
            "question": "Subarachnoidální krvácení (SAK) – nejčastější příčina spontánního SAK je:",
            "options": [
                  "Ruptura intrakraniálního aneuryzmatu (80–85% spontánních SAK)",
                  "Arteriální hypertenze (hypertenzní krvácení = typicky do bazálních ganglií, ne SAK)",
                  "Arteriovenózní malformace (AVM) – vzácnější příčina SAK",
                  "Koagulopatie nebo antikoagulační terapie"
            ],
            "correct": 0,
            "explanation": "SAK: hladina distribuce krve závisí na lokalizaci aneuryzmatu. Detekce: nativní CT (první 12–24 h), LP (xanthochromie, pokud CT negativní). CTA/DSA: lokalizace aneuryzmatu. Komplikace: re-krvácení, vazospasmus (3.–14. den), hydrocefalus."
      },
      {
            "question": "CT angiografie mozku (CTA) nebo MR angiografie (MRA) jsou indikovány u:",
            "options": [
                  "Detekce intrakraniálních aneuryzmat, AVM, vaskulárních malformací a posouzení kolaterálního průtoku při CMP",
                  "Hodnocení myelin­izace mozku u dětí (MR T2 = zlatý standard)",
                  "Primárního stagingu mozkových nádorů (MR s KL výhodnější než CTA)",
                  "Měření intrakraniálního tlaku (ICP) – to vyžaduje přímé invazivní monitorování"
            ],
            "correct": 0,
            "explanation": "CTA mozku: rychlá (dostupná 24/7), detekce aneuryzmat > 3 mm, zobrazení Willisova okruhu. MRA (bez záření): Flow TOF nebo kontrastní MRA. CTA = zlatý standard urgentní angiografie. DSA: zlatý standard pro přesné zobrazení a terapii (coiling, clipping)."
      }
]
  },
  {
    "id": "radio-32",
    "title": "Zobrazování degenerativních a zánětlivých onemocnění kloubů (artróza, revmatoidní artritida, dna)",
    "section": "Muskuloskeletální systém",
    "category": "Skelet",
    "modalities": [
      "RTG",
      "MR kloubů",
      "UZ"
    ],
    "keywords": [
      "koxartróza",
      "gonartróza",
      "Kellgren-Lawrenceova klasifikace",
      "revmatoidní artritida (RA)",
      "marginální eroze",
      "usurace",
      "deformity ruky",
      "dna (toffy, vyhlodaná ložiska)",
      "ankylozující spondylitida (Bechtěrev)"
    ],
    "image": "images/anki/paste-c3d28255480bc814d768b0d16ec240fbc554836d.jpg",
    "images": [
      {
        "src": "images/anki/paste-c3d28255480bc814d768b0d16ec240fbc554836d.jpg",
        "title": "Degenerativní změny kloubů – Gonartróza",
        "caption": "Asymetrické zúžení kloubní štěrbiny, subchondrální osteoskleróza zátěžových ploch, tvorba marginálních osteofytů a subchondrálních geod.",
        "modality": "RTG Kloub"
      }
    ],
    "content": {
      "principle": "<ul><li>začínají na měkkých částech a chrupavce → na rtg patrné poměrně pozdě</li><li><strong>Klasifikace dle závažnosti na základě RTG nálezu (Kellgren-Lawrence):</strong></li><li><strong>Heberdenovy uzlíky:</strong> degenerativní změny na rukách (hl. distální články)</li><li><strong>Coxartróza:</strong> velké subchondreální cysty, hlavice femuru deformována a decentrována</li><li><strong>Spondylóza:</strong> osteoartritické změny páteře</li><li>Ankylozující spondylartritida (M. Bechtěrev):</li><li>AI onemocnění; séronegativní spondyloartróza (negativní revma faktory)</li><li>neostrost kloubních plošek, ileální skleróza, eroze na ploskách, vazy zkostnatí a pevně ztuhnou = páteř jako celek</li></ul>",
      "methodology": "<ul><li>Metodika a technické provedení vyšetření u tématu <strong>Zobrazování degenerativních a zánětlivých onemocnění kloubů (artróza, revmatoidní artritida, dna)</strong> volí optimální projekce, kontrastní fáze a nastavení zobrazení pro maximální diagnostickou výtěžnost.</li></ul>",
      "normal_anatomy": "<ul><li>v pozdějších stádiích osteonekrózy = syté stíny v transparentním okolí (kalcifikované úlomky chrupavky)</li></ul>",
      "pathology": "<ul><li>Základní rtg změny = zúžení kloubní štěrbiny, tvorba okrajových osteofytů, subchondrální skleróza + cystická projasnění v kostní tkáni</li><li>I. zúžení kloubní štěrbiny II. zúžení kloubní štěrbiny, subchondrální skleróza na RTG, tvorba osteofytů III. zúžení kloubní štěrbiny, subchondrální skleróza na RTG, deformace kloubní jamky a hlavice, osteofyty IV. vymizené kloubní štěrbiny, subchondrální skleróza na RTG, deformace, cysty, osteofyty</li><li><strong>Gonoartróza:</strong> začíná na eminentia intercondylica, pak okraje kloubních plošek tibie, femuru i pately (častější u varózních kolen)</li><li><strong>Omartóze:</strong> osifikace na velkém hrbolu se nazývá fibroostitida</li><li>osifikace v úponech vazů a svalových šlach (hl. v oblasti pánve a kyčelních kloubů)</li><li><strong>Totální endoprotózy:</strong> indikované u nezvládnutelných artrotických nebo pozánětlivých postižení kloubů; cementové x necementové; nejčastěji kyčel nebo koleno</li><li>první změny symetricky na sakroileálním skloubení</li></ul>",
      "clinical": "<ul><li>druhá nejčastější indikace k vyšetření</li></ul>",
      "key_points": "<ul><li><strong>Klíčová modalita:</strong> RTG, MR kloubů, UZ.</li><li><strong>Hlavní diagnostický cíl:</strong> Včasné stanovení diagnózy, posouzení rozsahu a lokalizace patologie pro volbu adekvátní terapie.</li><li><strong>Zkušební perla:</strong> Vždy začínat méně invazivní dostupnou modalitou a respektovat kontraindikace (alergie na KL, renální insuficience, kardiostimulátory u MR).</li></ul>",
      "definition": "<ul><li>začínají na měkkých částech a chrupavce → na rtg patrné poměrně pozdě</li><li><strong>Klasifikace dle závažnosti na základě RTG nálezu (Kellgren-Lawrence):</strong></li><li><strong>Heberdenovy uzlíky:</strong> degenerativní změny na rukách (hl. distální články)</li><li><strong>Coxartróza:</strong> velké subchondreální cysty, hlavice femuru deformována a decentrována</li></ul>",
      "etiology": "<ul><li>Metodika a technické provedení vyšetření u tématu <strong>Zobrazování degenerativních a zánětlivých onemocnění kloubů (artróza, revmatoidní artritida, dna)</strong> volí optimální projekce, kontrastní fáze a nastavení zobrazení pro maximální diagnostickou výtěžnost.</li></ul>",
      "pathogenesis": "<ul><li>v pozdějších stádiích osteonekrózy = syté stíny v transparentním okolí (kalcifikované úlomky chrupavky)</li></ul>",
      "macroscopy": "<ul><li>Základní rtg změny = zúžení kloubní štěrbiny, tvorba okrajových osteofytů, subchondrální skleróza + cystická projasnění v kostní tkáni</li><li>I. zúžení kloubní štěrbiny II. zúžení kloubní štěrbiny, subchondrální skleróza na RTG, tvorba osteofytů III. zúžení kloubní štěrbiny, subchondrální skleróza na RTG, deformace kloubní jamky a hlavice, osteofyty IV. vymizené kloubní štěrbiny, subchondrální skleróza na RTG, deformace, cysty, osteofyty</li><li><strong>Gonoartróza:</strong> začíná na eminentia intercondylica, pak okraje kloubních plošek tibie, femuru i pately (častější u varózních kolen)</li><li><strong>Omartóze:</strong> osifikace na velkém hrbolu se nazývá fibroostitida</li></ul>",
      "microscopy": "<ul><li>osifikace v úponech vazů a svalových šlach (hl. v oblasti pánve a kyčelních kloubů)</li><li><strong>Totální endoprotózy:</strong> indikované u nezvládnutelných artrotických nebo pozánětlivých postižení kloubů; cementové x necementové; nejčastěji kyčel nebo koleno</li><li>první změny symetricky na sakroileálním skloubení</li></ul>",
      "clinical_legacy": "<ul><li>druhá nejčastější indikace k vyšetření</li></ul>"
    },
    "quiz": [
      {
            "question": "Epidurální hematom (EDH) se na CT projevuje jako:",
            "options": [
                  "Bikonvexní (čočkovitá) hyperintenzní kolekce mezi kostí a durou – nepřekračuje suturní linie, typicky arteriální (a. meningea media)",
                  "Srpkovitá (konkávní) hyperdenzní kolekce kopírující povrch hemisféry = subdurální hematom",
                  "Přímá lacerace mozkové tkáně = mozková kontuze (hyperdenzní fokusy)",
                  "Difuzní axonální poranění (DAI) = typicky mikrohemoragie na rozhraní šedi a bílé hmoty"
            ],
            "correct": 0,
            "explanation": "EDH: bikonvexní (lenticular) hyperintenzní kolekce, nepřesahuje sutury (periost = vnitřní vrstva dury na švech). Zdroj: a. meningea media (temporálně). Lucid interval → deteriorace. SDH: srpkovitý, překračuje sutury, kopíruje povrch mozku."
      },
      {
            "question": "Subdurální hematom (SDH) na CT – akutní vs. chronický:",
            "options": [
                  "Akutní SDH: hyperintenzní (krev > 60 HU); chronický SDH: hypodenzní (< 35 HU, izodenzní v subakutní fázi – obtížná diagnóza)",
                  "Akutní SDH: hypodenzní (krev je čerstvá a světlá); chronický: hyperintenzní (krev se sráží)",
                  "Na CT nelze odlišit akutní od chronického SDH bez kontrastní látky",
                  "Akutní i chronický SDH jsou vždy izodenzní s mozkem"
            ],
            "correct": 0,
            "explanation": "Denzita SDH závisí na stáří krve: Akutní (< 7 dní): hyperdenzní (55–85 HU). Subakutní (7–21 dní): izodenzní (obtížná diagnóza, nutno hledat mediální shift). Chronický (> 3 týdny): hypodenzní (< 35 HU). MR: průkaz izodenzního subakutního SDH."
      }
]
  },
  {
    "id": "radio-33",
    "title": "Zobrazování traumat kostí a kloubů (zlomeniny, dislokace, luxace, hojení)",
    "section": "Muskuloskeletální systém",
    "category": "Skelet",
    "modalities": [
      "RTG",
      "CT",
      "MR"
    ],
    "keywords": [
      "linie lomu",
      "dislokace (ad axim, ad latus, ad longitudinem, ad peripheriam)",
      "nitrokloubní zlomenina",
      "luxace",
      "subluxace",
      "patologická fraktura",
      "únavová zlomenina",
      "svalek (kalus)",
      "pakloub (pseudoartróza)"
    ],
    "image": "images/anki/supracondylar-fracture-marked-displacement.jpg",
    "images": [
      {
        "src": "images/anki/supracondylar-fracture-marked-displacement.jpg",
        "title": "Suprakondylická fraktura humeru s dislokací",
        "caption": "Dislokovaná suprakondylická fraktura u dětského pacienta: hodnocení přední humerální linie a radiokapitelární linie na bočném snímku.",
        "modality": "RTG Traumatologie"
      },
      {
        "src": "images/anki/paste-cbb4b89338f6d179a97599aadf5ea4782a3a6f08.jpg",
        "title": "Zobrazovací protokol u těžkého traumatu a polytraumatu",
        "caption": "Pravidlo dvou projekcí u končetinových traumat a celotělové polytrauma CT (pancan) u hemodynamicky stabilizovaného pacienta.",
        "modality": "Trauma Protokol"
      }
    ],
    "content": {
      "principle": "<ul><li><strong>Traumatologie:</strong></li><li>otevřená x zavřená; kompletní x inkompletní</li></ul>",
      "methodology": "<ul><li>Metodika a technické provedení vyšetření u tématu <strong>Zobrazování traumat kostí a kloubů (zlomeniny, dislokace, luxace, hojení)</strong> volí optimální projekce, kontrastní fáze a nastavení zobrazení pro maximální diagnostickou výtěžnost.</li></ul>",
      "normal_anatomy": "<ul><li><strong>Hodnotíme:</strong> tvar a velikost, snížení výšky, změnu hustoty tkáně, posuny fragmentů a jejich dislokace, měkká tkáň okolo, otok, drobné fragmenty</li></ul>",
      "pathology": "<ul><li>u lehčích zlomenin stačí RTG, komplikovanější už CT i MR (např. páteř)</li><li>Tříštivá, kompresivní, stresová fraktura, impresivní (jeden fragment pod druhý)</li><li>patologická fraktura - v místě nádoru nebo chronického zánětu</li><li><strong>Dislokované zlomeniny:</strong> posun do stran (ad latus - vždy distální proti proximálnímu), posun do délky (ad longitudinem) nebo zkrácení nebo prodloužení, osová odchylka (ad axim)</li><li><strong>Luxace (vykloubení):</strong> kompletní ztráta kongruence kloubních ploch</li><li>Subluxace - jen částečné vykloubení</li><li><strong>Hojení zlomenin:</strong> endosteální fibrózní svalek → sytý kostěnný svalek (mineralizovaný); pseudoartrózy (pakloub - při nedokonalém zahojen)</li></ul>",
      "clinical": "<ul><li><strong>Luxace (vykloubení):</strong> kompletní ztráta kongruence kloubních ploch</li><li>Subluxace - jen částečné vykloubení</li><li><strong>Hojení zlomenin:</strong> endosteální fibrózní svalek → sytý kostěnný svalek (mineralizovaný); pseudoartrózy (pakloub - při nedokonalém zahojen)</li></ul>",
      "key_points": "<ul><li><strong>Klíčová modalita:</strong> RTG, CT, MR.</li><li><strong>Hlavní diagnostický cíl:</strong> Včasné stanovení diagnózy, posouzení rozsahu a lokalizace patologie pro volbu adekvátní terapie.</li><li><strong>Zkušební perla:</strong> Vždy začínat méně invazivní dostupnou modalitou a respektovat kontraindikace (alergie na KL, renální insuficience, kardiostimulátory u MR).</li></ul>",
      "definition": "<ul><li><strong>Traumatologie:</strong></li><li>otevřená x zavřená; kompletní x inkompletní</li></ul>",
      "etiology": "<ul><li>Metodika a technické provedení vyšetření u tématu <strong>Zobrazování traumat kostí a kloubů (zlomeniny, dislokace, luxace, hojení)</strong> volí optimální projekce, kontrastní fáze a nastavení zobrazení pro maximální diagnostickou výtěžnost.</li></ul>",
      "pathogenesis": "<ul><li><strong>Hodnotíme:</strong> tvar a velikost, snížení výšky, změnu hustoty tkáně, posuny fragmentů a jejich dislokace, měkká tkáň okolo, otok, drobné fragmenty</li></ul>",
      "macroscopy": "<ul><li>u lehčích zlomenin stačí RTG, komplikovanější už CT i MR (např. páteř)</li><li>Tříštivá, kompresivní, stresová fraktura, impresivní (jeden fragment pod druhý)</li><li>patologická fraktura - v místě nádoru nebo chronického zánětu</li><li><strong>Dislokované zlomeniny:</strong> posun do stran (ad latus - vždy distální proti proximálnímu), posun do délky (ad longitudinem) nebo zkrácení nebo prodloužení, osová odchylka (ad axim)</li></ul>",
      "microscopy": "<ul><li><strong>Luxace (vykloubení):</strong> kompletní ztráta kongruence kloubních ploch</li><li>Subluxace - jen částečné vykloubení</li><li><strong>Hojení zlomenin:</strong> endosteální fibrózní svalek → sytý kostěnný svalek (mineralizovaný); pseudoartrózy (pakloub - při nedokonalém zahojen)</li></ul>",
      "clinical_legacy": "<ul><li><strong>Luxace (vykloubení):</strong> kompletní ztráta kongruence kloubních ploch</li><li>Subluxace - jen částečné vykloubení</li><li><strong>Hojení zlomenin:</strong> endosteální fibrózní svalek → sytý kostěnný svalek (mineralizovaný); pseudoartrózy (pakloub - při nedokonalém zahojen)</li></ul>"
    },
    "quiz": [
      {
            "question": "Glioblastom (GBM, WHO grade 4) na MR s KL se typicky zobrazuje jako:",
            "options": [
                  "Heterogenní masa s prstencovitým sycením (ring enhancement) + centrální nekróza + perifokální edém + mass effect",
                  "Homogenně sytící se extra-axiální masa adherentní k dura mater (= meningeom)",
                  "Kulatá, dobře ohraničená, homogenně sytící se extra-axiální masa v mostomozečkovém koutu (= vestibulární schwannom)",
                  "Malá tečkovitá ložiska hyperdenzity na DWI bez perifokálního edému (= metastázy)"
            ],
            "correct": 0,
            "explanation": "GBM: infiltrující intra-axiální tumor, central nekróza, periferní ring enhancement (nekrotický nádor), masivní perifokální edém, mass effect s herniací. DWI: variabilní. MRS: snížení NAA, zvýšení Cho/kreatin. Meningeom: extra-axiální, homogenní, dural tail."
      },
      {
            "question": "Vestibulární schwannom (akustický neurinoma) – MR nález:",
            "options": [
                  "Kulatý dobře ohraničený extra-axiální tumor v mostomozečkovém koutu (CP angle), sytí se Gd, rozšiřuje vnitřní sluchový kanál",
                  "Intra-axiální infiltrativní léze mozečku bez ohraničení",
                  "Kalcifikovaná extra-axiální léze bez sycení (= meningeom s kalcifikacemi)",
                  "Bilaterální symetrická ložiska mostomozečkového koutku = normální nález"
            ],
            "correct": 0,
            "explanation": "Schwannom n. VIII (vestibulárního): CP angle, rozšíření ipsilaterálního IAC (vnitřní sluchový kanál), ice cream cone shape (rozšíření do IAC), homogenní/heterogenní sycení Gd. NF2: bilaterální schwannomy = patognomický nález. Léčba: sledování, operace, SRS (Gamma Knife)."
      }
]
  },
  {
    "id": "radio-34",
    "title": "Zobrazovací metody v neuroradiologii (CT, MR mozku, sekvence)",
    "section": "Neuroradiologie a páteř",
    "category": "Neuroradiologie",
    "modalities": [
      "Nativní CT mozku",
      "MR mozku (T1, T2, FLAIR, DWI, SWI)",
      "CT/MR angiografie",
      "Perfuzní CT/MR"
    ],
    "keywords": [
      "nativní CT hlavy",
      "MR sekvence T1/T2/FLAIR",
      "DWI (difuze) a ADC mapa",
      "SWI (hemosiderin)",
      "perfuzní CT (CBF, CBV, MTT)",
      "CTA mozkových tepen",
      "likvorové prostory"
    ],
    "image": "images/anki/paste-362aa74dc191e102c19a92b3fdfc22188ec847db.jpg",
    "images": [
      {
        "src": "images/anki/paste-362aa74dc191e102c19a92b3fdfc22188ec847db.jpg",
        "title": "Normální anatomie mozku na axiálním řezu MR a CT",
        "caption": "Axiální zobrazení mozku: bazální ganglia, capsula interna, postranní komory, kortikální sulci a rozhraní šedé a bílé hmoty.",
        "modality": "MR / CT Mozek"
      },
      {
        "src": "images/anki/paste-e641091bbe0f40394e16e595380f904c3dcbe3a8.jpg",
        "title": "Indikační kritéria CT vs. MR v neuroradiologii",
        "caption": "CT jako 1. volba u akutních stavů (trauma, podezření na krvácení); MR pro detailní posouzení mozkového parenchymu, nádorů a demyelinizačních onemocnění.",
        "modality": "Neuroradiologie"
      }
    ],
    "content": {
      "principle": "<ul><li><strong>RTG:</strong></li><li>u 50% podáváme i. v. jodovou KL</li><li><strong>T1:</strong> šedá - hyperintenziní, likvor - hypointenzní, tuk - hyperintenzní → anatomické zobrazení</li><li><strong>T2:</strong> šedá - hyposignální, likvor - hyperintenzní, tuk - izosignální → edém, cévy na bílém pozadí likvoru</li><li><strong>FLAIR:</strong> RS mozkomíšní, detekce čerstvého krvácení;</li><li>edém, ischemie, zánětlivé infiltrace, glióza a některé druhy nádorů → T1 hyposignální a na T2 hypersignální</li><li>Funkční MR = předoperační diagnostika elokvenčních zón detekcí epileptogenních ložisek Je livor bílý? → ANO = T2; NE => Je šedá hmota tmavší než bílá? → ANO = T1; NE= FLAIR UZ: diagnostika a kontrola extrakraniálních okluzí + transkraniální dopplerovská sonografie přes temporální šupinu + u novorozenců přes neuzavřenou fontanelu</li></ul>",
      "methodology": "<ul><li><strong>nevýhody:</strong> radiační zatížení, aplikace jodové KL, horší diferenciace struktur střední čáry, nedostatečné zobrazení bílé hmoty mozkové</li><li><strong>CT angiografie:</strong> diagnostika okluzí tepen a arteriovenózních malformací. 2D nebo 3D po aplikaci KL</li><li><strong>Patologické nálezy:</strong> změny polohy a tvaru komorového systému a subarachnoidálních prostorů; změny denzity - hyperdenzní (čerstvé krvácení, arteriovenózní malformace, vaskularizované nádory) - hypodenzní (tmavší než okolní tkáň = malacie, kontuze, záněty, gliální nádory, edém - setřelé struktury šedé a bílé hmoty; cysty) MR:</li><li>MR angiografie - bez podání KL</li></ul>",
      "normal_anatomy": "<ul><li><strong>Normální obraz:</strong> šedá hmota 35 HU, bílá 25 HU, likvor 10 HU</li></ul>",
      "pathology": "<ul><li>traumatologie, diagnostika onemocnění skeletu, hodnocení různých anomálií CT: odhalí 95% intrakraniálních expanzí, krvácení či změn skeletu</li><li>hodnocení mozkové perfuze</li><li>detailní zobrazení bílé hmoty, detekce mozkové ischemie, průkaz drobných cévních malformací nativně, zobrazení mozkových cév BEZ podání KL. absence radiační zátěže</li><li>méně spolehlivá detekce čerstvého krvácení a traumatologie skeletu</li><li>kalcifikace, vzduch, hemosiderin, arterie = asignální</li><li><strong>NUKLEÁRNÍ MEDICÍNA:</strong> SPECT epileptických ložisek, PET/CT dif. diagnostika demencí, zobrazení presynaptických dopaminových transportérů</li></ul>",
      "clinical": "<ul><li>základní význam v traumatologii a CMP (+indikace k trombolytické léčbě)</li></ul>",
      "key_points": "<ul><li><strong>Klíčová modalita:</strong> Nativní CT mozku, MR mozku (T1, T2, FLAIR, DWI, SWI), CT/MR angiografie, Perfuzní CT/MR.</li><li><strong>Hlavní diagnostický cíl:</strong> Včasné stanovení diagnózy, posouzení rozsahu a lokalizace patologie pro volbu adekvátní terapie.</li><li><strong>Zkušební perla:</strong> Vždy začínat méně invazivní dostupnou modalitou a respektovat kontraindikace (alergie na KL, renální insuficience, kardiostimulátory u MR).</li></ul>",
      "definition": "<ul><li><strong>RTG:</strong></li><li>u 50% podáváme i. v. jodovou KL</li><li><strong>T1:</strong> šedá - hyperintenziní, likvor - hypointenzní, tuk - hyperintenzní → anatomické zobrazení</li><li><strong>T2:</strong> šedá - hyposignální, likvor - hyperintenzní, tuk - izosignální → edém, cévy na bílém pozadí likvoru</li></ul>",
      "etiology": "<ul><li><strong>nevýhody:</strong> radiační zatížení, aplikace jodové KL, horší diferenciace struktur střední čáry, nedostatečné zobrazení bílé hmoty mozkové</li><li><strong>CT angiografie:</strong> diagnostika okluzí tepen a arteriovenózních malformací. 2D nebo 3D po aplikaci KL</li><li><strong>Patologické nálezy:</strong> změny polohy a tvaru komorového systému a subarachnoidálních prostorů; změny denzity - hyperdenzní (čerstvé krvácení, arteriovenózní malformace, vaskularizované nádory) - hypodenzní (tmavší než okolní tkáň = malacie, kontuze, záněty, gliální nádory, edém - setřelé struktury šedé a bílé hmoty; cysty) MR:</li><li>MR angiografie - bez podání KL</li></ul>",
      "pathogenesis": "<ul><li><strong>Normální obraz:</strong> šedá hmota 35 HU, bílá 25 HU, likvor 10 HU</li></ul>",
      "macroscopy": "<ul><li>traumatologie, diagnostika onemocnění skeletu, hodnocení různých anomálií CT: odhalí 95% intrakraniálních expanzí, krvácení či změn skeletu</li><li>hodnocení mozkové perfuze</li><li>detailní zobrazení bílé hmoty, detekce mozkové ischemie, průkaz drobných cévních malformací nativně, zobrazení mozkových cév BEZ podání KL. absence radiační zátěže</li><li>méně spolehlivá detekce čerstvého krvácení a traumatologie skeletu</li></ul>",
      "microscopy": "<ul><li>kalcifikace, vzduch, hemosiderin, arterie = asignální</li><li><strong>NUKLEÁRNÍ MEDICÍNA:</strong> SPECT epileptických ložisek, PET/CT dif. diagnostika demencí, zobrazení presynaptických dopaminových transportérů</li></ul>",
      "clinical_legacy": "<ul><li>základní význam v traumatologii a CMP (+indikace k trombolytické léčbě)</li></ul>"
    },
    "quiz": [
      {
            "question": "Roztroušená skleróza (RS) – typické MR příznaky zahrnují:",
            "options": [
                  "Periventrikulární ovoidní T2/FLAIR hyperintenzní léze (Dawsonovy prsty), orientované kolmo na komory + infratentoriální + spinální léze",
                  "Difuzní symetrická T2 hyperintenzita bílé hmoty bez periventrikulárního predilekčního postižení",
                  "Lobulárně ohraničené kortikální léze s výrazným edémem (= metastázy nebo absces)",
                  "Izolované postižení šedé hmoty bez lézí bílé hmoty"
            ],
            "correct": 0,
            "explanation": "RS (McDonald criteria): léze v čase a prostoru. MR T2/FLAIR: periventrikulární (Dawsonovy prsty = kolmo na komory), juxtakortikální, infratentoriální, spinální. Aktivní léze = Gd enhancement (T1). Primárně progresivní RS: spinální forma bez zánětlivých ložisek."
      },
      {
            "question": "Při podezření na encefalitidu je zobrazovací metodou první volby:",
            "options": [
                  "MR mozku s KL (T2/FLAIR + DWI) – detekuje edém a nekrózu časněji a přesněji než CT",
                  "Nativní CT (rychlejší, ale méně senzitivní pro časné změny edému)",
                  "PET mozku s FDG (zlatý standard pro encefalitidu)",
                  "DSA mozkových tepen (pro průkaz vaskulitidy)"
            ],
            "correct": 0,
            "explanation": "Encefalitida (HSV herpetická): T2/FLAIR hyperintenzita temporálních lalků + limbické struktury, DWI restrikce při nekróze. CT zpočátku normální nebo diskrétní. MR s Gd: meningeální enhancement. HSV encefalitida léčit acyklovirem PŘED MR výsledky při klinické suspekci."
      }
]
  },
  {
    "id": "radio-35",
    "title": "Zobrazování ischemických cévních mozkových příhod a možnosti léčby",
    "section": "Neuroradiologie a páteř",
    "category": "Neuroradiologie",
    "modalities": [
      "Nativní CT",
      "CT angiografie (CTA)",
      "Perfuzní CT (CTP)",
      "MR (DWI/ADC, FLAIR)"
    ],
    "keywords": [
      "akutní ischemická CMP",
      "časné CT známky ischemie",
      "hyperdenzní a. cerebri media (dense MCA sign)",
      "setření rozhraní šedé a bílé hmoty (insula ribbon sign)",
      "ischemická penumbra vs. nekrotické jádro",
      "DWI restrikce",
      "systémová trombolýza (IVT)",
      "mechanická trombektomie"
    ],
    "image": "images/anki/F4.large_1597975591721.jpg",
    "images": [
      {
        "src": "images/anki/F4.large_1597975591721.jpg",
        "title": "Protokol akutního iktového zobrazení (Akutní iktový protokol)",
        "caption": "Tříkrokový protokol: 1. Nativní CT (vyloučení krvácení a časné známky), 2. CTA (okluze velké tepny), 3. Perfuzní CT (poměr penumbra / infarktové jádro pro trombektomii).",
        "modality": "Iktový Protokol / CT"
      },
      {
        "src": "images/anki/paste-3ceb552647df7b89f1bd8157343b7feba4de57bd.jpg",
        "title": "Chronické ischemické vaskulární změny bílé hmoty",
        "caption": "Hyperintenzity periventrikulární bílé hmoty na T2/FLAIR (leukoencefalopatie, lakunární postižení při chronické mikroangiopatii).",
        "modality": "MR Mozek (FLAIR)"
      }
    ],
    "content": {
      "principle": "<ul><li>Na CT obraz v prvních hodinách může být negativní</li><li>Perfuzní CT zobrazení mozku = množství a průtok krve v poškozené části mozku → odlišení nekrotického jádra od penumbry</li><li>MR - rozhodující v časném odhalení mozkové ischemie (T2 a FLAIR)</li><li>Sonografie - odhalení extrakraniální okluze, intrakraniální spasmy cév při SAK (doppler)</li></ul>",
      "methodology": "<ul><li>Metodika a technické provedení vyšetření u tématu <strong>Zobrazování ischemických cévních mozkových příhod a možnosti léčby</strong> volí optimální projekce, kontrastní fáze a nastavení zobrazení pro maximální diagnostickou výtěžnost.</li></ul>",
      "normal_anatomy": "<ul><li>v dalším průběhu → vyhlazení gyrů a subarachnoidálního prostoru, hyperdenzita v průběhu a. c. media nebo posterior → hypodenzní malatické ložisko (uloženo v cévních teritoriích)</li></ul>",
      "pathology": "<ul><li>ischemické se diagnostikují hůř jak hemoragické</li><li>Teritoriální infarkt = léze velké cévy; interteritoriální infarkt = rozhraní velkých cév, lakunární infarkt = postižení malých cév</li><li><strong>Trombózy venózních splavů:</strong> MR venogram</li></ul>",
      "clinical": "<ul><li><strong>Trombózy venózních splavů:</strong> MR venogram</li><li>Sonografie - odhalení extrakraniální okluze, intrakraniální spasmy cév při SAK (doppler)</li></ul>",
      "key_points": "<ul><li><strong>Klíčová modalita:</strong> Nativní CT, CT angiografie (CTA), Perfuzní CT (CTP), MR (DWI/ADC, FLAIR).</li><li><strong>Hlavní diagnostický cíl:</strong> Včasné stanovení diagnózy, posouzení rozsahu a lokalizace patologie pro volbu adekvátní terapie.</li><li><strong>Zkušební perla:</strong> Vždy začínat méně invazivní dostupnou modalitou a respektovat kontraindikace (alergie na KL, renální insuficience, kardiostimulátory u MR).</li></ul>",
      "definition": "<ul><li>Na CT obraz v prvních hodinách může být negativní</li><li>Perfuzní CT zobrazení mozku = množství a průtok krve v poškozené části mozku → odlišení nekrotického jádra od penumbry</li><li>MR - rozhodující v časném odhalení mozkové ischemie (T2 a FLAIR)</li><li>Sonografie - odhalení extrakraniální okluze, intrakraniální spasmy cév při SAK (doppler)</li></ul>",
      "etiology": "<ul><li>Metodika a technické provedení vyšetření u tématu <strong>Zobrazování ischemických cévních mozkových příhod a možnosti léčby</strong> volí optimální projekce, kontrastní fáze a nastavení zobrazení pro maximální diagnostickou výtěžnost.</li></ul>",
      "pathogenesis": "<ul><li>v dalším průběhu → vyhlazení gyrů a subarachnoidálního prostoru, hyperdenzita v průběhu a. c. media nebo posterior → hypodenzní malatické ložisko (uloženo v cévních teritoriích)</li></ul>",
      "macroscopy": "<ul><li>ischemické se diagnostikují hůř jak hemoragické</li><li>Teritoriální infarkt = léze velké cévy; interteritoriální infarkt = rozhraní velkých cév, lakunární infarkt = postižení malých cév</li><li><strong>Trombózy venózních splavů:</strong> MR venogram</li></ul>",
      "microscopy": "<ul><li><strong>Trombózy venózních splavů:</strong> MR venogram</li><li>Sonografie - odhalení extrakraniální okluze, intrakraniální spasmy cév při SAK (doppler)</li></ul>",
      "clinical_legacy": "<ul><li><strong>Trombózy venózních splavů:</strong> MR venogram</li><li>Sonografie - odhalení extrakraniální okluze, intrakraniální spasmy cév při SAK (doppler)</li></ul>"
    },
    "quiz": [
      {
            "question": "Indikace pro CT páteře po úrazu dle kritérií NEXUS / Canadian C-Spine rule – co je high-risk příznak vyžadující CT?",
            "options": [
                  "Věk > 65 let, nebezpečný mechanismus úrazu (pád > 1 m, vysokorychlostní), parestezie v končetinách, GCS < 15",
                  "Izolovaná bolestivost paravertebrálních svalů bez neurologického deficitu a GCS 15",
                  "Bolest hlavy bez krční bolesti po malém traumatu",
                  "Pohyblivost krční páteře > 45° bez bolesti (nízké riziko)"
            ],
            "correct": 0,
            "explanation": "High-risk faktory pro CT páteře: věk > 65 let, nebezpečný mechanismus (pád z výšky > 1 m, skoky do vody, dopravní nehody > 100 km/h), parestezie. Pokud přítomny → CT nutné bez dalšího klinického hodnocení. Low-risk: jednoduchý náraz, oddálená bolest."
      },
      {
            "question": "MR páteře je preferována nad CT pro zobrazení:",
            "options": [
                  "Míšních lézí, epidurálního abscesu, herniací disku, myelopatie, spondylodiscitidy (MR = zlatý standard pro měkké tkáně)",
                  "Akutních zlomenin obratlů (CT lépe zobrazí fragmenty a soudržnost kortikalis)",
                  "Kalcifikací disku a osteofytů (CT senzitivnější pro kalcifikace)",
                  "Cévní zásobení míchy (MRA míchy = druhá volba po DSA)"
            ],
            "correct": 0,
            "explanation": "MR páteře = zlatý standard pro měkké tkáně páteřního kanálu: mícha, kořeny, disky, epidurální prostor. T2: herniace disku (hypointenzní disk), myelopatie (T2 hyperintenzita míchy), EDH/EAH. CT: kostní fragmenty, spondylolistéza, kalcifikace, plánování chirurgie."
      }
]
  },
  {
    "id": "radio-36",
    "title": "Zobrazování hemoragických cévních mozkových příhod (intracerebrální krvácení, SAK, aneurysmata)",
    "section": "Neuroradiologie a páteř",
    "category": "Neuroradiologie",
    "modalities": [
      "Nativní CT",
      "CTA",
      "DSA",
      "MR (T2*, SWI)"
    ],
    "keywords": [
      "intracerebrální hematom (ICH)",
      "hyperdenzita čerstvé krve (+60 až +80 HU)",
      "subarachnoidální krvácení (SAK)",
      "aneurysma Willisova okruhu",
      "arteriovenózní malformace (AVM)",
      "coiling",
      "clipping"
    ],
    "image": "images/anki/paste-91323fbd2d94cee5e82c217d22c687fc820f9203.jpg",
    "images": [
      {
        "src": "images/anki/paste-91323fbd2d94cee5e82c217d22c687fc820f9203.jpg",
        "title": "Subarachnoidální krvácení (SAK) na nativním CT mozku",
        "caption": "Hyperdenzní krev vyplňující bazální cisterny a sulci hemisfér v oblasti Willisova okruhu při ruptuře intrakraniálního aneurysmatu.",
        "modality": "CT Mozek"
      },
      {
        "src": "images/anki/p451-f1.gif",
        "title": "Diagnostický algoritmus suspektního SAK",
        "caption": "Při podezření na SAK: akutní nativní CT; při negativitě lumbální punkce (spektrofotometrie); při pozitivitě CTA/DSA k nalezení zdroje krvácení.",
        "modality": "Algoritmus SAK"
      }
    ],
    "content": {
      "principle": "<ul><li>vrozené a získané</li><li>AV malformace - porušení fyziologického řečiště arterie - kapilára - véna → asignální dilatace arterie (T2)</li><li>Hemoragie se rozdělují na intracerebrální a subarachnoidální</li><li><strong>zdroj:</strong> perforující cévy v okolí BG a mozkového kmene; arteriální hypertenze</li><li>hyperdenzní masa (80-100HU),</li><li>po 10 dnech se mění složení i denzita, hojí se posthemoragickou pseudocystou</li></ul>",
      "methodology": "<ul><li>konzervativní léčba nebo punkce hematomu</li><li>CT - hyperdenzní stíny v subarachnoidálních prostorech, následováno CT angiografií →aneuryzma nebo AVM → MR - průkaz drobnějších AVM</li></ul>",
      "normal_anatomy": "<ul><li>Fyziologický obraz vyžaduje znalost normální radioanatomie, symetrie struktur a fyziologických denzit (CT) a signálových intenzit (MR).</li></ul>",
      "pathology": "<ul><li>Aneurysmata - hlavně na tepnách Willisova okruhu (aa. communicantes) → vyklenutí cévní stěny, se kterou je spojen tenkým krčkem</li><li><strong>Získané:</strong> stenózy (bifurkace karotid), uzávěry, arteriosklerotické postižení → odlišit spasmy od stenóz</li><li>CT prokáže krvácení již v prvních hodinách po vzniku CMP, MR odhalí za 20 minut čerstvou ischemii</li><li><strong>Intracerebrální hematom:</strong></li><li>expanzivní, lemována edémem</li><li><strong>Subarachnoidální hematom:</strong></li><li><strong>zdroj:</strong> cévní dysplázie, ruptura arteriosklerotických cév</li></ul>",
      "clinical": "<ul><li>po 10 dnech se mění složení i denzita, hojí se posthemoragickou pseudocystou</li><li><strong>Subarachnoidální hematom:</strong></li><li><strong>zdroj:</strong> cévní dysplázie, ruptura arteriosklerotických cév</li><li>CT - hyperdenzní stíny v subarachnoidálních prostorech, následováno CT angiografií →aneuryzma nebo AVM → MR - průkaz drobnějších AVM</li></ul>",
      "key_points": "<ul><li><strong>Klíčová modalita:</strong> Nativní CT, CTA, DSA, MR (T2*, SWI).</li><li><strong>Hlavní diagnostický cíl:</strong> Včasné stanovení diagnózy, posouzení rozsahu a lokalizace patologie pro volbu adekvátní terapie.</li><li><strong>Zkušební perla:</strong> Vždy začínat méně invazivní dostupnou modalitou a respektovat kontraindikace (alergie na KL, renální insuficience, kardiostimulátory u MR).</li></ul>",
      "definition": "<ul><li>vrozené a získané</li><li>AV malformace - porušení fyziologického řečiště arterie - kapilára - véna → asignální dilatace arterie (T2)</li><li>Hemoragie se rozdělují na intracerebrální a subarachnoidální</li><li><strong>zdroj:</strong> perforující cévy v okolí BG a mozkového kmene; arteriální hypertenze</li></ul>",
      "etiology": "<ul><li>konzervativní léčba nebo punkce hematomu</li><li>CT - hyperdenzní stíny v subarachnoidálních prostorech, následováno CT angiografií →aneuryzma nebo AVM → MR - průkaz drobnějších AVM</li></ul>",
      "pathogenesis": "<ul><li>Fyziologický obraz vyžaduje znalost normální radioanatomie, symetrie struktur a fyziologických denzit (CT) a signálových intenzit (MR).</li></ul>",
      "macroscopy": "<ul><li>Aneurysmata - hlavně na tepnách Willisova okruhu (aa. communicantes) → vyklenutí cévní stěny, se kterou je spojen tenkým krčkem</li><li><strong>Získané:</strong> stenózy (bifurkace karotid), uzávěry, arteriosklerotické postižení → odlišit spasmy od stenóz</li><li>CT prokáže krvácení již v prvních hodinách po vzniku CMP, MR odhalí za 20 minut čerstvou ischemii</li><li><strong>Intracerebrální hematom:</strong></li></ul>",
      "microscopy": "<ul><li>expanzivní, lemována edémem</li><li><strong>Subarachnoidální hematom:</strong></li><li><strong>zdroj:</strong> cévní dysplázie, ruptura arteriosklerotických cév</li></ul>",
      "clinical_legacy": "<ul><li>po 10 dnech se mění složení i denzita, hojí se posthemoragickou pseudocystou</li><li><strong>Subarachnoidální hematom:</strong></li><li><strong>zdroj:</strong> cévní dysplázie, ruptura arteriosklerotických cév</li><li>CT - hyperdenzní stíny v subarachnoidálních prostorech, následováno CT angiografií →aneuryzma nebo AVM → MR - průkaz drobnějších AVM</li></ul>"
    },
    "quiz": [
      {
            "question": "Herniace meziobratlového disku (HNP) na MR se projevuje:",
            "options": [
                  "Posterolaterálním nebo centrálním výhřezem hypointenzního diskového materiálu na T2 do páteřního kanálu s kompresí nervového kořene nebo míchy",
                  "Difuzním sycením ploténky po Gd (= spondylodiscitida, ne herniace)",
                  "Hyperintenzitou ploténky na T1 s expanzivním charakterem (= lipom)",
                  "Kalcifikací ploténky na T2 (= CPPD depozita, lépe viditelná na CT)"
            ],
            "correct": 0,
            "explanation": "HNP MR: T2 hypointenzní disk (dehydratace), výhřez do páteřního kanálu nebo foramen. Terminologie: protrúze (< 50% obvodu), extruze (> 50%), sekvestr (odloučeno). Komprese S1: bolest radiující do paty. L4: patelární reflex. Kauda equina syndrom = urgentní MR."
      },
      {
            "question": "Spinální stenóza na MR je hodnocena dle průměru páteřního kanálu a:",
            "options": [
                  "Komprese míchy / nervového kořene (myelomalacie = T2 hyperintenzita míchy), neurogenní klaudikace = stenóza",
                  "Délky ploténky (delší ploténka = větší riziko stenózy)",
                  "Výšky obratlového těla (nižší obratel = stenóza)",
                  "Přítomnosti kalcifikací v zadním podélném vazu (DISH – spondylosis hyperostotica)"
            ],
            "correct": 0,
            "explanation": "Spinální stenóza L4/L5: zúžení páteřního kanálu (osteofyty, hypertrofie lig. flavum, HNP). Klinicky: neurogenní klaudikace (bolest DK při chůzi, úleva v předklonu). MR: průměr kanálu, komprese nervů, myelomalacie (T2 signál = ireverzibilní poškození míchy)."
      }
]
  },
  {
    "id": "radio-37",
    "title": "Zobrazování kraniocerebrálních poranění (epidurální a subdurální hematom, kontuze, edém)",
    "section": "Neuroradiologie a páteř",
    "category": "Neuroradiologie",
    "modalities": [
      "Nativní CT mozku",
      "Kostní okno CT",
      "MR mozku"
    ],
    "keywords": [
      "epidurální hematom (bikonvexní, čočkovitý, nepřekračuje leby)",
      "a. meningea media",
      "subdurální hematom (srpkovitý, přemosťující žíly, překračuje švy)",
      "mozková kontuze",
      "difuzní axonální poranění (DAI)",
      "fraktury kalvy a baze lební",
      "přetlačení středočárových struktur"
    ],
    "image": "images/anki/paste-73a97780f485776cbbe56e2b39caf6f5d4c65989.jpg",
    "images": [
      {
        "src": "images/anki/paste-73a97780f485776cbbe56e2b39caf6f5d4c65989.jpg",
        "title": "Epidurální vs. Subdurální hematom na CT",
        "caption": "Epidurální hematom: bikonvexní (čočkovitý) tvar ohraničený lebečními švy. Subdurální hematom: srpkovitý tvar kopírující hemisféru volně překračující švy.",
        "modality": "CT Mozek"
      },
      {
        "src": "images/anki/subfalcine-herniation-ctisus-arrow-high.jpg",
        "title": "Subfalcinní mozková herniace a intrakraniální hypertenze",
        "caption": "Masivní expanzivní efekt hematomu s přetlačením středočárových struktur (midline shift), kompresí postranní komory a subfalcinní herniací pod falx cerebri.",
        "modality": "CT Mozek"
      }
    ],
    "content": {
      "principle": "<ul><li>trauma skeletu neurokrania, mozku a jeho obalů, mozkových tepen a nervů</li><li>CT - rutinně u každého polytraumatu</li><li><strong>Lacerace mozku:</strong> těžké morfologické poškození</li></ul>",
      "methodology": "<ul><li>Metodika a technické provedení vyšetření u tématu <strong>Zobrazování kraniocerebrálních poranění (epidurální a subdurální hematom, kontuze, edém)</strong> volí optimální projekce, kontrastní fáze a nastavení zobrazení pro maximální diagnostickou výtěžnost.</li></ul>",
      "normal_anatomy": "<ul><li>Fyziologický obraz vyžaduje znalost normální radioanatomie, symetrie struktur a fyziologických denzit (CT) a signálových intenzit (MR).</li></ul>",
      "pathology": "<ul><li><strong>Fisury:</strong> rtg - zřetelné lineární projasnění → už se nemá indikovat!!! , CT vyšší výtěžnost; nebezpečné v oblasti temporální squamy (a. meningea media → epidurální hematom) + může poškodit obaly a tím způsobit infekci (ze středního ucha nebo paranasálních dutin)</li><li><strong>Kontuze mozku:</strong> morfologické poškození mozkové tkáně - na bázi čelního nebo temenního laloku - hypodenzní ložisko s kolaterálním edémem, často prokrvácené, na MR ložiska i v corpus callosum</li><li>Difúzní axonální postižení (DAP) - střižné poranění axonů - na CT nediferencovatelná, na MR hyperintenzní</li><li><strong>Epidurální hematom:</strong> mezi tvrdou plenou a kostí (arteria meningea media + žilní splavy) → na CT čočkovitý tvar, ostře ohraničený</li><li>Subdurální hematom - mezi tvrdou plenou a arachnoideou (přemosťující vény hlubokého a povrchového systému) → krev v širokém subdurálním prostoru v okolí celé hemisféry, často oboustranný, po třech týdnech denzita jako likvor, chronický je na CT hypodenzní</li><li><strong>SAK:</strong> ruptura aneuryzmatu, AV malformace → CT</li><li><strong>Intraparenchymatózní krvácení:</strong> hypertenzní angiopatie, hemostáza, antikoagulační/trombotická léčba, cévní malformace, aneurysma, tumor → na CT hyperdenzní jde vidět hned, pak MR</li></ul>",
      "clinical": "<ul><li>Subdurální hematom - mezi tvrdou plenou a arachnoideou (přemosťující vény hlubokého a povrchového systému) → krev v širokém subdurálním prostoru v okolí celé hemisféry, často oboustranný, po třech týdnech denzita jako likvor, chronický je na CT hypodenzní</li><li><strong>SAK:</strong> ruptura aneuryzmatu, AV malformace → CT</li><li><strong>Intraparenchymatózní krvácení:</strong> hypertenzní angiopatie, hemostáza, antikoagulační/trombotická léčba, cévní malformace, aneurysma, tumor → na CT hyperdenzní jde vidět hned, pak MR</li></ul>",
      "key_points": "<ul><li><strong>Klíčová modalita:</strong> Nativní CT mozku, Kostní okno CT, MR mozku.</li><li><strong>Hlavní diagnostický cíl:</strong> Včasné stanovení diagnózy, posouzení rozsahu a lokalizace patologie pro volbu adekvátní terapie.</li><li><strong>Zkušební perla:</strong> Vždy začínat méně invazivní dostupnou modalitou a respektovat kontraindikace (alergie na KL, renální insuficience, kardiostimulátory u MR).</li></ul>",
      "definition": "<ul><li>trauma skeletu neurokrania, mozku a jeho obalů, mozkových tepen a nervů</li><li>CT - rutinně u každého polytraumatu</li><li><strong>Lacerace mozku:</strong> těžké morfologické poškození</li></ul>",
      "etiology": "<ul><li>Metodika a technické provedení vyšetření u tématu <strong>Zobrazování kraniocerebrálních poranění (epidurální a subdurální hematom, kontuze, edém)</strong> volí optimální projekce, kontrastní fáze a nastavení zobrazení pro maximální diagnostickou výtěžnost.</li></ul>",
      "pathogenesis": "<ul><li>Fyziologický obraz vyžaduje znalost normální radioanatomie, symetrie struktur a fyziologických denzit (CT) a signálových intenzit (MR).</li></ul>",
      "macroscopy": "<ul><li><strong>Fisury:</strong> rtg - zřetelné lineární projasnění → už se nemá indikovat!!! , CT vyšší výtěžnost; nebezpečné v oblasti temporální squamy (a. meningea media → epidurální hematom) + může poškodit obaly a tím způsobit infekci (ze středního ucha nebo paranasálních dutin)</li><li><strong>Kontuze mozku:</strong> morfologické poškození mozkové tkáně - na bázi čelního nebo temenního laloku - hypodenzní ložisko s kolaterálním edémem, často prokrvácené, na MR ložiska i v corpus callosum</li><li>Difúzní axonální postižení (DAP) - střižné poranění axonů - na CT nediferencovatelná, na MR hyperintenzní</li><li><strong>Epidurální hematom:</strong> mezi tvrdou plenou a kostí (arteria meningea media + žilní splavy) → na CT čočkovitý tvar, ostře ohraničený</li></ul>",
      "microscopy": "<ul><li>Subdurální hematom - mezi tvrdou plenou a arachnoideou (přemosťující vény hlubokého a povrchového systému) → krev v širokém subdurálním prostoru v okolí celé hemisféry, často oboustranný, po třech týdnech denzita jako likvor, chronický je na CT hypodenzní</li><li><strong>SAK:</strong> ruptura aneuryzmatu, AV malformace → CT</li><li><strong>Intraparenchymatózní krvácení:</strong> hypertenzní angiopatie, hemostáza, antikoagulační/trombotická léčba, cévní malformace, aneurysma, tumor → na CT hyperdenzní jde vidět hned, pak MR</li></ul>",
      "clinical_legacy": "<ul><li>Subdurální hematom - mezi tvrdou plenou a arachnoideou (přemosťující vény hlubokého a povrchového systému) → krev v širokém subdurálním prostoru v okolí celé hemisféry, často oboustranný, po třech týdnech denzita jako likvor, chronický je na CT hypodenzní</li><li><strong>SAK:</strong> ruptura aneuryzmatu, AV malformace → CT</li><li><strong>Intraparenchymatózní krvácení:</strong> hypertenzní angiopatie, hemostáza, antikoagulační/trombotická léčba, cévní malformace, aneurysma, tumor → na CT hyperdenzní jde vidět hned, pak MR</li></ul>"
    },
    "quiz": [
      {
            "question": "Vertebroplastika / kyfoplastika je indikována při:",
            "options": [
                  "Patologické nebo osteoporotické kompresivní fraktuře obratle s bolestí refrakterní na konzervativní terapii",
                  "Herniaci meziobratlového disku způsobující radikulopatii",
                  "Spondylodiscitidě (absolutní KI pro vertebroplastiku při aktivní infekci)",
                  "Metastatickém postižení bez bolesti jako profylaktická fixace"
            ],
            "correct": 0,
            "explanation": "Vertebroplastika = perkutánní injekce kostního cementu (PMMA) pod skiaskopií/CT do kompresivní fraktury. Kyfoplastika = balon-asistovaná (obnovuje výšku obratle). Indikace: osteoporotické nebo metastatické kompresivní fraktury s bolestí. KI: infekce, koagulopatie, nespolupracující pacient."
      },
      {
            "question": "Páteřní nádory – který nádor je nejčastější příčinou epidurální komprese míchy?",
            "options": [
                  "Metastázy (karcinom prsu, plic, prostaty, ledviny) >> primární spinální tumory (ependymom, astrocytom, meningeom)",
                  "Primární spinální meningeom (nejčastější spinální tumor dospělých)",
                  "Ependymom míchy (nejčastější intramedullární tumor dospělých)",
                  "Dermoidní cysta (nejčastější u dětí v lumbální oblasti)"
            ],
            "correct": 0,
            "explanation": "Epidurální komprese: metastázy >> primární tumory. Nejčastěji: karcinom plic, prsu, prostaty, ledviny. MR: epidurální masa komprimující míchu, T1 snížení v obratlích, Gd enhancement. Urgentní terapie: kortikosteroidy + radioterapie ± chirurgie."
      }
]
  },
  {
    "id": "radio-38",
    "title": "Zobrazování intrakraniálních nádorů (gliomy, meningeomy, vestibulární schwannom, metastázy)",
    "section": "Neuroradiologie a páteř",
    "category": "Neuroradiologie",
    "modalities": [
      "MR s gadoliniem",
      "Perfuzní MR (DSC)",
      "MR spektroskopie (MRS)",
      "CT"
    ],
    "keywords": [
      "glioblastom (prstencovité sycení, centrální nekróza)",
      "meningeom (durální ocas / dural tail, extraaxiální)",
      "mozkové metastázy (na rozhraní šedé a bílé hmoty, perifokální edém)",
      "vestibulární schwannom (mostomozečkový kout)",
      "adenom hypofýzy"
    ],
    "image": "images/anki/paste-e641091bbe0f40394e16e595380f904c3dcbe3a8.jpg",
    "images": [
      {
        "src": "images/anki/paste-e641091bbe0f40394e16e595380f904c3dcbe3a8.jpg",
        "title": "Zobrazení intrakraniálních expanzí na kontrastní MR",
        "caption": "MR s podáním gadoliniové kontrastní látky v T1 vážení je zlatým standardem pro přesné ohraničení tumoru, průkaz sycení a posouzení operability.",
        "modality": "MR Mozek"
      },
      {
        "src": "images/anki/subfalcine-herniation-ctisus-arrow-high.jpg",
        "title": "Expanzivní léze s perifokálním edémem a útlakem komor",
        "caption": "Typický vazogenní edém v bílé hmotě v okolí maligního tumoru vedoucí k útlaku mozkových komor a herniacím.",
        "modality": "CT / MR Mozek"
      }
    ],
    "content": {
      "principle": "<ul><li><strong>Primární:</strong> intraaxiální (v mozkovém parenchymu) a extraaxiální (extracerebrální)</li><li>většinu tvoří astrocytom, meningeomy, lymfomy</li><li><strong>Astrocytom:</strong> hypodenzní, nezvyšuje denzitu podáním KL, MR T1 - hypointenzivní, T2 - hyperintenzivní; při neexpanzivním růstu imitují ischemie</li><li>Diagnostika mnohočetných metastáz - jednoduchá → masivně se sytí KL na CT i MR</li></ul>",
      "methodology": "<ul><li><strong>Operabilita nádoru:</strong> neoperabilní jsou v subkortikální oblasti, talamu nebo elokventních zónách mozkové kůry; operabilní - MR navigační metody, kt. slouží k přesnému operačnímu postupu, funkční MR v okolí motorické zóny</li></ul>",
      "normal_anatomy": "<ul><li><strong>Glioblastoma multiforme:</strong> heterogenní struktura, sytí se po KL, četné a-v zkraty, velký kolaterální edém</li></ul>",
      "pathology": "<ul><li>intrakraniálních nádorů.</li><li>zobrazení → prokázat lokalizaci nádoru + rozlišit jiné léze (CMP, kontuze, záněty);</li><li><strong>Lokalizace nádoru:</strong> expanzivní růst, změna denzity a MR intenzity; CT odhalí 95% nádorů</li><li><strong>Stupeň malignity:</strong> heterogenní ložisko, průkaz patologických cév, zvýšené nasycení KL a velkým okolním edémem</li><li><strong>Meningeomy:</strong> izosignální s mozkovým parenchymem, sytí se KL, Intra a supraselární nádory diagnostikujeme na MR; velké adenomy komprimují n. opticus</li></ul>",
      "clinical": "<ul><li>stanovit stupeň malignity; posoudit operabilitu</li></ul>",
      "key_points": "<ul><li><strong>Klíčová modalita:</strong> MR s gadoliniem, Perfuzní MR (DSC), MR spektroskopie (MRS), CT.</li><li><strong>Hlavní diagnostický cíl:</strong> Včasné stanovení diagnózy, posouzení rozsahu a lokalizace patologie pro volbu adekvátní terapie.</li><li><strong>Zkušební perla:</strong> Vždy začínat méně invazivní dostupnou modalitou a respektovat kontraindikace (alergie na KL, renální insuficience, kardiostimulátory u MR).</li></ul>",
      "definition": "<ul><li><strong>Primární:</strong> intraaxiální (v mozkovém parenchymu) a extraaxiální (extracerebrální)</li><li>většinu tvoří astrocytom, meningeomy, lymfomy</li><li><strong>Astrocytom:</strong> hypodenzní, nezvyšuje denzitu podáním KL, MR T1 - hypointenzivní, T2 - hyperintenzivní; při neexpanzivním růstu imitují ischemie</li><li>Diagnostika mnohočetných metastáz - jednoduchá → masivně se sytí KL na CT i MR</li></ul>",
      "etiology": "<ul><li><strong>Operabilita nádoru:</strong> neoperabilní jsou v subkortikální oblasti, talamu nebo elokventních zónách mozkové kůry; operabilní - MR navigační metody, kt. slouží k přesnému operačnímu postupu, funkční MR v okolí motorické zóny</li></ul>",
      "pathogenesis": "<ul><li><strong>Glioblastoma multiforme:</strong> heterogenní struktura, sytí se po KL, četné a-v zkraty, velký kolaterální edém</li></ul>",
      "macroscopy": "<ul><li>intrakraniálních nádorů.</li><li>zobrazení → prokázat lokalizaci nádoru + rozlišit jiné léze (CMP, kontuze, záněty);</li><li><strong>Lokalizace nádoru:</strong> expanzivní růst, změna denzity a MR intenzity; CT odhalí 95% nádorů</li><li><strong>Stupeň malignity:</strong> heterogenní ložisko, průkaz patologických cév, zvýšené nasycení KL a velkým okolním edémem</li></ul>",
      "microscopy": "<ul><li><strong>Meningeomy:</strong> izosignální s mozkovým parenchymem, sytí se KL, Intra a supraselární nádory diagnostikujeme na MR; velké adenomy komprimují n. opticus</li></ul>",
      "clinical_legacy": "<ul><li>stanovit stupeň malignity; posoudit operabilitu</li></ul>"
    },
    "quiz": [
      {
            "question": "DSA (Digitální Subtrakční Angiografie) je zlatým standardem pro zobrazení cév, protože:",
            "options": [
                  "Umožňuje dynamické zobrazení průtoku kontrastem v reálném čase s nejvyšším prostorovým rozlišením a přímou terapii (PTA, stenting, embolizace)",
                  "Je to neinvazivní metoda bez nutnosti arteriálního přístupu",
                  "Je výhradně diagnostická bez terapeutického potenciálu",
                  "Nepotřebuje kontrastní látku – jen fyzikální magnetické pole"
            ],
            "correct": 0,
            "explanation": "DSA: invazivní (arteriální přístup, nejčastěji a. femoralis/radialis), selektivní katetrizace tepen, aplikace KL, digitální subtrakce pozadí → čistá angiografie. Zlatý standard pro přesné zobrazení i terapii (PTA, stenting, embolizace, trombektomie)."
      },
      {
            "question": "CTA (CT angiografie) vs. MRA (MR angiografie) – hlavní výhoda MRA bez kontrastní látky (TOF metoda) je:",
            "options": [
                  "Absence ionizujícího záření a jodové KL – vhodné pro těhotné, děti, pacienty s alergií na jód",
                  "Lepší prostorové rozlišení než CTA pro periferní cévní řečiště",
                  "Kratší doba vyšetření než CTA (MRA trvá méně než 1 minuta)",
                  "Zobrazení kalcifikací cévní stěny (CT výhodnější pro kalcifikace)"
            ],
            "correct": 0,
            "explanation": "MRA TOF (Time of Flight) = průtok krve do slicí přináší magnetizaci → hyperintenzní cévy bez KL. Výhoda: bez záření, bez jodové KL. Nevýhoda: artefakty v turbulentním toku, delší akvizice. CTA: rychlejší, lepší PVR pro periferní cévy, lépe zobrazí kalcifikace."
      }
]
  },
  {
    "id": "radio-39",
    "title": "Zobrazování zánětů CNS a demyelinizačních onemocnění (roztroušená skleróza, encefalitida, absces)",
    "section": "Neuroradiologie a páteř",
    "category": "Neuroradiologie",
    "modalities": [
      "MR mozku a míchy (FLAIR, DWI, T1+KL)",
      "CT"
    ],
    "keywords": [
      "roztroušená skleróza (RS)",
      "Dawsonovy prsty",
      "plaky v periventrikulární bílé hmotě, corpus callosum a míše",
      "diseminace v prostoru a čase (McDonaldova kritéria)",
      "mozkový absces (DWI restrikce v dutině)",
      "herpetická encefalitida (temporální laloky)"
    ],
    "image": "images/anki/paste-3ceb552647df7b89f1bd8157343b7feba4de57bd.jpg",
    "images": [
      {
        "src": "images/anki/paste-3ceb552647df7b89f1bd8157343b7feba4de57bd.jpg",
        "title": "Léze bílé hmoty mozku na FLAIR a T2 sekvencích",
        "caption": "Periventrikulární a juxtakortikální hyperintenzity typické pro demyelinizační plaky roztroušené sklerózy orientované kolmo na komory (Dawsonovy prsty).",
        "modality": "MR Mozek (FLAIR)"
      }
    ],
    "content": {
      "principle": "<ul><li>infekční nálezy nejsou charakteristické - většinou na CT hypodenzní, MR T1 hypo a T2 hyperintenzivní</li><li><strong>Meningitidy:</strong> na začátku negativní nález, potom se vydatně sytí na KL</li><li>typická hyperintenzivní ložiska na T2, hlavně na FLAIR ložiska roztroušené sklerózy - sledujeme dynamiku onemocnění podáním KL → aktivní ložiska se sytí, chronická ne</li><li>Vrozené onemocnění - leukodystrofie Atrofické procesy, hydrocefalus</li><li>Obstrukční = rozšířené komory a subarachnoidální prostory obliterovány</li><li>při úbytku mozkové tkáně se kompenzatorně rozšiřují jak komory, tak subarachnoidální prostory</li><li>drobné cysty likvorových cest,</li></ul>",
      "methodology": "<ul><li>Metodika a technické provedení vyšetření u tématu <strong>Zobrazování zánětů CNS a demyelinizačních onemocnění (roztroušená skleróza, encefalitida, absces)</strong> volí optimální projekce, kontrastní fáze a nastavení zobrazení pro maximální diagnostickou výtěžnost.</li></ul>",
      "normal_anatomy": "<ul><li><strong>MR kritéria:</strong> počet, velikost, uložení, změny po podání KL</li></ul>",
      "pathology": "<ul><li>Mozkový absces - oválný, expanzivní proces, postkontrastně se sytí lem</li><li>Subdurální a epidurální empyémy podobný obraz jako mozkový absces</li><li><strong>Epilepsie:</strong> MR - odhalí různé dysplázie kůry, drobné nádory, cévní malformace = epileptogenní ložisko Onemocnění bílé hmoty:</li><li>rozlišit obstrukční a neobstrukční hydrocefalus</li><li>MR - průkaz stenózy nebo uzávěru mokovodu</li><li>dif. diagnostika demencí - CT a MR s perfuzní SPECT a PET (Alzheimer - demence temporoparietálního laloku) Vrozené anomálie CNS:</li><li>Arachnoideální cysty kdekoliv - polokulovitý tvar o denzitě likvoru, klinicky němé, mohou se chovat expanzivně (imitovat nádor)</li></ul>",
      "clinical": "<ul><li>při úbytku mozkové tkáně se kompenzatorně rozšiřují jak komory, tak subarachnoidální prostory</li><li>dif. diagnostika demencí - CT a MR s perfuzní SPECT a PET (Alzheimer - demence temporoparietálního laloku) Vrozené anomálie CNS:</li><li>drobné cysty likvorových cest,</li><li>Arachnoideální cysty kdekoliv - polokulovitý tvar o denzitě likvoru, klinicky němé, mohou se chovat expanzivně (imitovat nádor)</li></ul>",
      "key_points": "<ul><li><strong>Klíčová modalita:</strong> MR mozku a míchy (FLAIR, DWI, T1+KL), CT.</li><li><strong>Hlavní diagnostický cíl:</strong> Včasné stanovení diagnózy, posouzení rozsahu a lokalizace patologie pro volbu adekvátní terapie.</li><li><strong>Zkušební perla:</strong> Vždy začínat méně invazivní dostupnou modalitou a respektovat kontraindikace (alergie na KL, renální insuficience, kardiostimulátory u MR).</li></ul>",
      "definition": "<ul><li>infekční nálezy nejsou charakteristické - většinou na CT hypodenzní, MR T1 hypo a T2 hyperintenzivní</li><li><strong>Meningitidy:</strong> na začátku negativní nález, potom se vydatně sytí na KL</li><li>typická hyperintenzivní ložiska na T2, hlavně na FLAIR ložiska roztroušené sklerózy - sledujeme dynamiku onemocnění podáním KL → aktivní ložiska se sytí, chronická ne</li><li>Vrozené onemocnění - leukodystrofie Atrofické procesy, hydrocefalus</li></ul>",
      "etiology": "<ul><li>Metodika a technické provedení vyšetření u tématu <strong>Zobrazování zánětů CNS a demyelinizačních onemocnění (roztroušená skleróza, encefalitida, absces)</strong> volí optimální projekce, kontrastní fáze a nastavení zobrazení pro maximální diagnostickou výtěžnost.</li></ul>",
      "pathogenesis": "<ul><li><strong>MR kritéria:</strong> počet, velikost, uložení, změny po podání KL</li></ul>",
      "macroscopy": "<ul><li>Mozkový absces - oválný, expanzivní proces, postkontrastně se sytí lem</li><li>Subdurální a epidurální empyémy podobný obraz jako mozkový absces</li><li><strong>Epilepsie:</strong> MR - odhalí různé dysplázie kůry, drobné nádory, cévní malformace = epileptogenní ložisko Onemocnění bílé hmoty:</li><li>rozlišit obstrukční a neobstrukční hydrocefalus</li></ul>",
      "microscopy": "<ul><li>MR - průkaz stenózy nebo uzávěru mokovodu</li><li>dif. diagnostika demencí - CT a MR s perfuzní SPECT a PET (Alzheimer - demence temporoparietálního laloku) Vrozené anomálie CNS:</li><li>Arachnoideální cysty kdekoliv - polokulovitý tvar o denzitě likvoru, klinicky němé, mohou se chovat expanzivně (imitovat nádor)</li></ul>",
      "clinical_legacy": "<ul><li>při úbytku mozkové tkáně se kompenzatorně rozšiřují jak komory, tak subarachnoidální prostory</li><li>dif. diagnostika demencí - CT a MR s perfuzní SPECT a PET (Alzheimer - demence temporoparietálního laloku) Vrozené anomálie CNS:</li><li>drobné cysty likvorových cest,</li><li>Arachnoideální cysty kdekoliv - polokulovitý tvar o denzitě likvoru, klinicky němé, mohou se chovat expanzivně (imitovat nádor)</li></ul>"
    },
    "quiz": [
      {
            "question": "Příprava pacienta před angiografickým výkonem zahrnuje povinně:",
            "options": [
                  "Renální parametry (kreatinin, GFR), koagulace (INR, APTT, trombocyty), souhlas pacienta, lačnění 4–6 h, hydratace u CKD",
                  "Pouze zjištění krevní skupiny a křížovou zkoušku",
                  "EKG a kardiologická konzultace vždy bez ohledu na riziko",
                  "Vysazení metforminu 48 h před výkonem není nutné (doporučení z roku 2020 toto upustilo)"
            ],
            "correct": 0,
            "explanation": "Příprava pre-angiografie: anamnéza alergií (KL, jód), renální funkce (GFR), koagulace (INR < 1,5, TP > 50), souhlas pacienta, lačnění, hydratace (kontrastnefropatie prevence). Metformin: vysadit 48 h před (riziko laktátové acidózy). Antikoagulancia dle protokolu."
      },
      {
            "question": "Hematom v třísle po angiografii z arterie femoralis se řeší:",
            "options": [
                  "Manuální kompresí (nebo mechanická komprese) 10–20 minut, uzavírací systémy (Angio-Seal, Perclose); pseudoaneurysma → US-komprese nebo trombin injekce",
                  "Okamžitou chirurgickou revizí pro každý palpovatelný hematom",
                  "Antikoagulační terapií k prevenci trombózy hematom",
                  "Je vždy benigní a nevyžaduje žádnou intervenci"
            ],
            "correct": 0,
            "explanation": "Po angiografii: hematom v třísle – komprese arterie min. 10–15 min. Uzavírací systémy (Angio-Seal, Perclose ProGlide) zkracují dobu komprese. Pseudoaneurysma = komplikace: US-komprese trombu nebo US-navigovaná injekce trombinu. Velký hematom = chirurgie."
      }
]
  },
  {
    "id": "radio-40",
    "title": "Zobrazování úrazů páteře a míchy",
    "section": "Neuroradiologie a páteř",
    "category": "Páteř",
    "modalities": [
      "CT páteře",
      "RTG",
      "MR páteře a míchy"
    ],
    "keywords": [
      "Denisův třísloupcový model",
      "stabilní a nestabilní fraktury",
      "kompresivní fraktura",
      "tříštivá fraktura (burst fracture)",
      "Jeffersonova fraktura atlasu",
      "fraktura dens axis",
      "kontuze a útlak míchy",
      "epidurální spinální hematom"
    ],
    "image": "images/anki/paste-72d835032c024772b0b3c6d348eb404b7129f4b2.jpg",
    "images": [
      {
        "src": "images/anki/paste-72d835032c024772b0b3c6d348eb404b7129f4b2.jpg",
        "title": "Indikační kritéria pro CT krční páteře po traumatu (NEXUS)",
        "caption": "Multidetektorové tenkořezové CT krční páteře s multiplanárními rekonstrukcemi (MPR) je metodou 1. volby u traumat podle kritérií NEXUS a Canadian C-Spine Rule.",
        "modality": "CT Páteř"
      },
      {
        "src": "images/anki/paste-84af1659341da9978a022d9ac34fa0de22790268.jpg",
        "title": "Hodnocení 4 linií krční páteře na bočném snímku",
        "caption": "Čtyři paralelní linie: přední vertebrální linie, zadní vertebrální linie, spinolaminární linie a linie trnových výběžků pro odhalení subluxací.",
        "modality": "RTG Páteř"
      }
    ],
    "content": {
      "principle": "<ul><li><strong>RTG:</strong></li><li>hodnocení skoliózy - ve vertikále</li><li>diagnostika onemocnění skeletu a epidurálního prostoru</li><li>obratle, kostní dřeň, páteřní kanál, mícha, paravertebrální měkké tkáně</li><li>T1, T2, STIR</li><li>RTG u lehčích poranění, závažnější polytraumata CT, na MR - herniace disku a poranění vazů + poranění míchy</li><li>spojené s poškozením páteřního kanálu = poškození nervových struktur</li><li><strong>flekční krční trauma:</strong> síla působí zezadu → rozšíření distance mezi trny obratlů při ruptuře interspinózního ligamenta</li></ul>",
      "methodology": "<ul><li>vždy musí být zachyceny všechny obratle v požadovaném úseku a ve správně projekci a expozici + koncentrujeme se na páteřní kanál a dorzální třetinu obratlů →vzniká většina maligních lézí a zánětů</li><li>aplikace speciální KL subarachnoidálně po lumbální punkce → posuzujeme patologii míchy a intradurálního prostoru Kongenitální vady: numerická varianta počtu obratlů, srůsty obratlů, spina bifida occulta, spondylolistéza Traumatologie:</li></ul>",
      "normal_anatomy": "<ul><li><strong>Ploténka:</strong> normální při malignitách, deformovaná při zánětech, po čerstvém výhřezu má normální výšku CT:</li></ul>",
      "pathology": "<ul><li>snímky vleže při požadavku na hodnocení struktury a tvaru skeletu</li><li>snímky bederní páteře mají velkou radiační zátěž (asi jak CT) → uvážlivě indikovat u dětí a žen</li><li><strong>špatná diferenciace kostní dřeně a nehodnotitelná mícha MR:</strong></li><li>špatné zobrazení kortikalis MYELOGRAFIE</li><li>poškození páteře - možné poškození míchy</li><li>kontuze obratlů - edém kostní dřeně</li><li>luxace, subluxace, luxační fraktury</li><li><strong>hyperextenční krční trauma:</strong> po čelním nárazu dochází k retroflexi hlavy → ruptura vazů, posun fragmentů do páteřního kanálu, poškození míchy; je možné poškození míchy bez poškození páteře</li><li><strong>Poranění míchy:</strong> kontuze, hematomyelie → MR až za 24 hod po úrazu</li></ul>",
      "clinical": "<ul><li>luxace, subluxace, luxační fraktury</li><li>spojené s poškozením páteřního kanálu = poškození nervových struktur</li><li><strong>hyperextenční krční trauma:</strong> po čelním nárazu dochází k retroflexi hlavy → ruptura vazů, posun fragmentů do páteřního kanálu, poškození míchy; je možné poškození míchy bez poškození páteře</li><li><strong>flekční krční trauma:</strong> síla působí zezadu → rozšíření distance mezi trny obratlů při ruptuře interspinózního ligamenta</li><li><strong>Poranění míchy:</strong> kontuze, hematomyelie → MR až za 24 hod po úrazu</li></ul>",
      "key_points": "<ul><li><strong>Klíčová modalita:</strong> CT páteře, RTG, MR páteře a míchy.</li><li><strong>Hlavní diagnostický cíl:</strong> Včasné stanovení diagnózy, posouzení rozsahu a lokalizace patologie pro volbu adekvátní terapie.</li><li><strong>Zkušební perla:</strong> Vždy začínat méně invazivní dostupnou modalitou a respektovat kontraindikace (alergie na KL, renální insuficience, kardiostimulátory u MR).</li></ul>",
      "definition": "<ul><li><strong>RTG:</strong></li><li>hodnocení skoliózy - ve vertikále</li><li>diagnostika onemocnění skeletu a epidurálního prostoru</li><li>obratle, kostní dřeň, páteřní kanál, mícha, paravertebrální měkké tkáně</li></ul>",
      "etiology": "<ul><li>vždy musí být zachyceny všechny obratle v požadovaném úseku a ve správně projekci a expozici + koncentrujeme se na páteřní kanál a dorzální třetinu obratlů →vzniká většina maligních lézí a zánětů</li><li>aplikace speciální KL subarachnoidálně po lumbální punkce → posuzujeme patologii míchy a intradurálního prostoru Kongenitální vady: numerická varianta počtu obratlů, srůsty obratlů, spina bifida occulta, spondylolistéza Traumatologie:</li></ul>",
      "pathogenesis": "<ul><li><strong>Ploténka:</strong> normální při malignitách, deformovaná při zánětech, po čerstvém výhřezu má normální výšku CT:</li></ul>",
      "macroscopy": "<ul><li>snímky vleže při požadavku na hodnocení struktury a tvaru skeletu</li><li>snímky bederní páteře mají velkou radiační zátěž (asi jak CT) → uvážlivě indikovat u dětí a žen</li><li><strong>špatná diferenciace kostní dřeně a nehodnotitelná mícha MR:</strong></li><li>špatné zobrazení kortikalis MYELOGRAFIE</li></ul>",
      "microscopy": "<ul><li>poškození páteře - možné poškození míchy</li><li>kontuze obratlů - edém kostní dřeně</li><li>luxace, subluxace, luxační fraktury</li><li><strong>hyperextenční krční trauma:</strong> po čelním nárazu dochází k retroflexi hlavy → ruptura vazů, posun fragmentů do páteřního kanálu, poškození míchy; je možné poškození míchy bez poškození páteře</li></ul>",
      "clinical_legacy": "<ul><li>luxace, subluxace, luxační fraktury</li><li>spojené s poškozením páteřního kanálu = poškození nervových struktur</li><li><strong>hyperextenční krční trauma:</strong> po čelním nárazu dochází k retroflexi hlavy → ruptura vazů, posun fragmentů do páteřního kanálu, poškození míchy; je možné poškození míchy bez poškození páteře</li><li><strong>flekční krční trauma:</strong> síla působí zezadu → rozšíření distance mezi trny obratlů při ruptuře interspinózního ligamenta</li><li><strong>Poranění míchy:</strong> kontuze, hematomyelie → MR až za 24 hod po úrazu</li></ul>"
    },
    "quiz": [
      {
            "question": "Kritická stenóza arterie femoralis superficialis (AFS) na DSA je hemodynamicky signifikantní, pokud:",
            "options": [
                  "Průsvit cévy je zúžen o > 70% průměru (nebo > 50% plochy průřezu) s poklesem tlakového gradientu",
                  "Je viditelný výplňkový defekt menší než 30% průsvitu cévy (hemodynamicky nevýznamná)",
                  "Jakákoliv stenóza bez ohledu na procento je chirurgická indikace",
                  "Stenóza je označena jako kritická pouze u symptomatických pacientů bez ohledu na procento"
            ],
            "correct": 0,
            "explanation": "Hemodynamicky signifikantní stenóza: > 50% průměru (= > 75% plochy průřezu) nebo pokles ABI (ankle-brachial index) < 0,9. Kritická ischémie dolní končetiny: ABI < 0,4, klidové bolesti, trofické léze. Léčba: PTA ± stent (AFS), bypass chirurgicky."
      },
      {
            "question": "Disekce aorty na CT s KL se zobrazí jako:",
            "options": [
                  "Intimální flap oddělující pravé (se zásobením tepen) a falešné lumen v aortě, s různou denzitou kontrastu",
                  "Aneuryzmální dilatace aorty bez membránového oddělení lumen",
                  "Vrstevnaté ztluštění aortální stěny (= intimální hematom, ale bez intimálního flapu)",
                  "Sycení trombu v aneuryzmatu aorty po aplikaci KL"
            ],
            "correct": 0,
            "explanation": "Disekce aorty: intimální flap = klíčový CT nález (odloučená intima). Stanford A: ascendentní aorta (urgentní chirurgie). Stanford B: descendentní (konzervativní nebo TEVAR). Falešné lumen: větší, pomalejší průtok, může trombovat. TEVAR = endovaskulární stentgraft."
      }
]
  },
  {
    "id": "radio-41",
    "title": "Degenerativní onemocnění páteře (herniace disku, spinální stenóza, spondylóza)",
    "section": "Neuroradiologie a páteř",
    "category": "Páteř",
    "modalities": [
      "MR páteře",
      "CT páteře",
      "RTG (funkční snímky)"
    ],
    "keywords": [
      "protruze a extruze disku",
      "útlak nervového kořene (radikulopatie)",
      "spinální stenóza",
      "spondylóza a osteofyty",
      "spondylartróza",
      "spondylolistéza",
      "Modicovy změny obratlových těl"
    ],
    "image": "images/anki/paste-84af1659341da9978a022d9ac34fa0de22790268.jpg",
    "images": [
      {
        "src": "images/anki/paste-84af1659341da9978a022d9ac34fa0de22790268.jpg",
        "title": "Degenerativní změny obratlů a meziobratlových prostorů",
        "caption": "Snížení meziobratlové ploténky, subchondrální skleróza krycích ploch obratlových těl a tvorba ventrálních i dorzálních osteofytů.",
        "modality": "RTG / MR Páteř"
      }
    ],
    "content": {
      "principle": "<ul><li>spondylodiscitida, spondylitida: obvykle postiženy dva sousední obratle + destruována meziobratlová ploténka</li><li>začíná na SI skloubení; změny nejprve začínají na synovii, vazech a chrupavce, později přejdou na skelet</li><li>ventrálně nebo laterodorzálně, na krku unkovertebrálně</li><li>deformující spondylartróza - produktivní změny na facies articulares obratlů</li><li><strong>Výhřez meziobratlové ploténky:</strong> CT nebo MR</li><li>konvexně se vyklenuje do páteřního kanálu, redukuje epidurální tuk</li><li>protruze → výhřez souměrný, hladký, báze je širší než vyklenutá konvexita</li><li>Sekvestr = nekrotická část ploténky, která se odlomila může i vycestovat do páteřního kanálu</li><li><strong>Postdiskotomický sy:</strong> rozhoduje MR mezi epidurální fibrózou nebo recidivou hernie disku</li></ul>",
      "methodology": "<ul><li>Metodika a technické provedení vyšetření u tématu <strong>Degenerativní onemocnění páteře (herniace disku, spinální stenóza, spondylóza)</strong> volí optimální projekce, kontrastní fáze a nastavení zobrazení pro maximální diagnostickou výtěžnost.</li></ul>",
      "normal_anatomy": "<ul><li>Fyziologický obraz vyžaduje znalost normální radioanatomie, symetrie struktur a fyziologických denzit (CT) a signálových intenzit (MR).</li></ul>",
      "pathology": "<ul><li><strong>Morbus Bechtěrev:</strong> revmatologické onemocnění, osifikace v paravertebráních vazech, produktivní změny na okrajích obratlů (syndesmofyty) - směřují kolmo dolů;</li><li><strong>Spondylosis deformans:</strong> tvorba osteofytů (kostěných návalků) na okrajích krycích plotének obratlů</li><li>vznikají osifikací po rupturách vláken anulus fibrosus</li><li>degenerativní změny nekorespondují s tíži klinických příznaků - bezpříznakové, komprese míšních kořenů, míchy nebo dráždivost vertebrálních arterií</li><li><strong>Chondrosis intervertebralis:</strong> degenerace meziobratlové poténky → snížení výšky intervertebrálních prostorů, sklerotické změny na přilehlých ploškách, retrolistézu horního obratle, vzduchové projasnění v ploténce</li><li>může komprimovat míšní kořen, v krční a hrudní páteři míchu</li><li>prolaps → nepravidelná, asymetrická, báze užší než vyklenutí</li><li><strong>Spondylogenní cervikální myelopatie:</strong> stenóza páteřního kanálu → komprese</li></ul>",
      "clinical": "<ul><li>protruze → výhřez souměrný, hladký, báze je širší než vyklenutá konvexita</li><li>prolaps → nepravidelná, asymetrická, báze užší než vyklenutí</li><li>Sekvestr = nekrotická část ploténky, která se odlomila může i vycestovat do páteřního kanálu</li><li><strong>Spondylogenní cervikální myelopatie:</strong> stenóza páteřního kanálu → komprese</li><li><strong>Postdiskotomický sy:</strong> rozhoduje MR mezi epidurální fibrózou nebo recidivou hernie disku</li></ul>",
      "key_points": "<ul><li><strong>Klíčová modalita:</strong> MR páteře, CT páteře, RTG (funkční snímky).</li><li><strong>Hlavní diagnostický cíl:</strong> Včasné stanovení diagnózy, posouzení rozsahu a lokalizace patologie pro volbu adekvátní terapie.</li><li><strong>Zkušební perla:</strong> Vždy začínat méně invazivní dostupnou modalitou a respektovat kontraindikace (alergie na KL, renální insuficience, kardiostimulátory u MR).</li></ul>",
      "definition": "<ul><li>spondylodiscitida, spondylitida: obvykle postiženy dva sousední obratle + destruována meziobratlová ploténka</li><li>začíná na SI skloubení; změny nejprve začínají na synovii, vazech a chrupavce, později přejdou na skelet</li><li>ventrálně nebo laterodorzálně, na krku unkovertebrálně</li><li>deformující spondylartróza - produktivní změny na facies articulares obratlů</li></ul>",
      "etiology": "<ul><li>Metodika a technické provedení vyšetření u tématu <strong>Degenerativní onemocnění páteře (herniace disku, spinální stenóza, spondylóza)</strong> volí optimální projekce, kontrastní fáze a nastavení zobrazení pro maximální diagnostickou výtěžnost.</li></ul>",
      "pathogenesis": "<ul><li>Fyziologický obraz vyžaduje znalost normální radioanatomie, symetrie struktur a fyziologických denzit (CT) a signálových intenzit (MR).</li></ul>",
      "macroscopy": "<ul><li><strong>Morbus Bechtěrev:</strong> revmatologické onemocnění, osifikace v paravertebráních vazech, produktivní změny na okrajích obratlů (syndesmofyty) - směřují kolmo dolů;</li><li><strong>Spondylosis deformans:</strong> tvorba osteofytů (kostěných návalků) na okrajích krycích plotének obratlů</li><li>vznikají osifikací po rupturách vláken anulus fibrosus</li><li>degenerativní změny nekorespondují s tíži klinických příznaků - bezpříznakové, komprese míšních kořenů, míchy nebo dráždivost vertebrálních arterií</li></ul>",
      "microscopy": "<ul><li><strong>Chondrosis intervertebralis:</strong> degenerace meziobratlové poténky → snížení výšky intervertebrálních prostorů, sklerotické změny na přilehlých ploškách, retrolistézu horního obratle, vzduchové projasnění v ploténce</li><li>může komprimovat míšní kořen, v krční a hrudní páteři míchu</li><li>prolaps → nepravidelná, asymetrická, báze užší než vyklenutí</li><li><strong>Spondylogenní cervikální myelopatie:</strong> stenóza páteřního kanálu → komprese</li></ul>",
      "clinical_legacy": "<ul><li>protruze → výhřez souměrný, hladký, báze je širší než vyklenutá konvexita</li><li>prolaps → nepravidelná, asymetrická, báze užší než vyklenutí</li><li>Sekvestr = nekrotická část ploténky, která se odlomila může i vycestovat do páteřního kanálu</li><li><strong>Spondylogenní cervikální myelopatie:</strong> stenóza páteřního kanálu → komprese</li><li><strong>Postdiskotomický sy:</strong> rozhoduje MR mezi epidurální fibrózou nebo recidivou hernie disku</li></ul>"
    },
    "quiz": [
      {
            "question": "PTA (perkutánní transluminální angioplastika) spočívá v:",
            "options": [
                  "Balónovém rozdilatování stenózy nebo uzávěru cévy po přístupu drátkem přes arteriální sheath",
                  "Chirurgickém přemostění stenózy pomocí žilního nebo syntetického bypass štěpu",
                  "Farmakologickém rozpuštění trombu systemickou trombolýzou bez katetrizace",
                  "Laserovém ablaci aterosklerotického plátu endovaskulárně"
            ],
            "correct": 0,
            "explanation": "PTA: katetrizace cévy → balónek průnik přes stenózu → inflace balónku (ATM tlak) → rozdilatování plátu. Stenting: implantace kovové výztuže. Drug-eluting stenty/balónky: antiproliferativní léčivo snižuje restenózu. Indikace: claudicatio, kritická ischemie, renovaskulární HT."
      },
      {
            "question": "Mechanická trombektomie (MT) v léčbě ischemické CMP je indikována do:",
            "options": [
                  "24 hodin od začátku příznaků u pacientů s okluzí velké cévy (LVO) a malým infarktem na DWI (dobré kolaterály, NIHSS ≥ 6)",
                  "48 hodin od začátku příznaků bez omezení na typ okluze nebo rozsah infarktu",
                  "Pouze do 6 hodin od začátku příznaků bez výjimky (extended window neplatí)",
                  "Výhradně u pacientů starších 65 let s kardioembolickým mechanismem"
            ],
            "correct": 0,
            "explanation": "MT indikace (ESO guidelines): okluze velké cévy (ICA, M1/M2 MCA, basilaris), do 24 h od začátku příznaků (extended window: DAWN, DEFUSE-3 studie), malý jádrový infarkt (DWI-ASPECTS > 6), NIHSS ≥ 6. Kombinace s i.v. alteplázou (pokud do 4,5 h od začátku)."
      }
]
  },
  {
    "id": "radio-42",
    "title": "Zobrazování nádorů páteře a míchy",
    "section": "Neuroradiologie a páteř",
    "category": "Páteř",
    "modalities": [
      "MR páteře s kontrastem",
      "CT",
      "Scintigrafie"
    ],
    "keywords": [
      "extradurální nádory (kostní metastázy obratlů)",
      "intradurální extramedulární nádory (meningeom, schwannom)",
      "intramedulární nádory (ependymom, astrocytom)",
      "útlak míšní",
      "patologická fraktura obratle"
    ],
    "image": "images/anki/percutaneous-vertebroplasty (1).jpg",
    "images": [
      {
        "src": "images/anki/percutaneous-vertebroplasty (1).jpg",
        "title": "Perkutánní vertebroplastika u patologických fraktur obratlů",
        "caption": "Intervenční aplikace kostního cementu (PMMA) pod skiaskopickou kontrolou do těla obratle zničeného metastázou nebo osteoporózou.",
        "modality": "Intervence / RTG"
      }
    ],
    "content": {
      "principle": "<ul><li><strong>Maligní:</strong> plazmocytom → osteolytické změny, mnohočetné komprese obratlových těl</li><li>Metastázy páteře - nejčastější onemocnění vůbec → osteolytické, osteosklerotické, smíšené</li><li>při dlouhodobém růstu = intraspinální hypertenze → exkavace obratlů, rozšíření vzdálenosti mezi pedikly indikuje se vždy MR (T1)</li></ul>",
      "methodology": "<ul><li>Metodika a technické provedení vyšetření u tématu <strong>Zobrazování nádorů páteře a míchy</strong> volí optimální projekce, kontrastní fáze a nastavení zobrazení pro maximální diagnostickou výtěžnost.</li></ul>",
      "normal_anatomy": "<ul><li>Fyziologický obraz vyžaduje znalost normální radioanatomie, symetrie struktur a fyziologických denzit (CT) a signálových intenzit (MR).</li></ul>",
      "pathology": "<ul><li><strong>Nádory páteře:</strong></li><li>nejčastějším nádorem je hemangiom - až u 10% populace → pokud neprominuje do páteřního kanálu, tak se jedná o symptomatických nález - Obratel má voštinovitou strukturu</li><li>Nejprve v zadní třetině těla, potom do oblouku → destruují i pedikly (smazaný pedikl na rtg znamená metastázu) Nádory v páteřním kanálu:</li><li>Nádory intradurální - neurinom, meningeom → komprimují míchu a dobře se sytí na KL</li><li>Nádory intramedulární - gliomy, ependymomy → vřetenovitě rozšiřují část míšního sloupce, postkontrastně se sytí</li></ul>",
      "clinical": "<ul><li>Nádory intradurální - neurinom, meningeom → komprimují míchu a dobře se sytí na KL</li><li>Nádory intramedulární - gliomy, ependymomy → vřetenovitě rozšiřují část míšního sloupce, postkontrastně se sytí</li></ul>",
      "key_points": "<ul><li><strong>Klíčová modalita:</strong> MR páteře s kontrastem, CT, Scintigrafie.</li><li><strong>Hlavní diagnostický cíl:</strong> Včasné stanovení diagnózy, posouzení rozsahu a lokalizace patologie pro volbu adekvátní terapie.</li><li><strong>Zkušební perla:</strong> Vždy začínat méně invazivní dostupnou modalitou a respektovat kontraindikace (alergie na KL, renální insuficience, kardiostimulátory u MR).</li></ul>",
      "definition": "<ul><li><strong>Maligní:</strong> plazmocytom → osteolytické změny, mnohočetné komprese obratlových těl</li><li>Metastázy páteře - nejčastější onemocnění vůbec → osteolytické, osteosklerotické, smíšené</li><li>při dlouhodobém růstu = intraspinální hypertenze → exkavace obratlů, rozšíření vzdálenosti mezi pedikly indikuje se vždy MR (T1)</li></ul>",
      "etiology": "<ul><li>Metodika a technické provedení vyšetření u tématu <strong>Zobrazování nádorů páteře a míchy</strong> volí optimální projekce, kontrastní fáze a nastavení zobrazení pro maximální diagnostickou výtěžnost.</li></ul>",
      "pathogenesis": "<ul><li>Fyziologický obraz vyžaduje znalost normální radioanatomie, symetrie struktur a fyziologických denzit (CT) a signálových intenzit (MR).</li></ul>",
      "macroscopy": "<ul><li><strong>Nádory páteře:</strong></li><li>nejčastějším nádorem je hemangiom - až u 10% populace → pokud neprominuje do páteřního kanálu, tak se jedná o symptomatických nález - Obratel má voštinovitou strukturu</li><li>Nejprve v zadní třetině těla, potom do oblouku → destruují i pedikly (smazaný pedikl na rtg znamená metastázu) Nádory v páteřním kanálu:</li><li>Nádory intradurální - neurinom, meningeom → komprimují míchu a dobře se sytí na KL</li></ul>",
      "microscopy": "<ul><li>Nádory intramedulární - gliomy, ependymomy → vřetenovitě rozšiřují část míšního sloupce, postkontrastně se sytí</li></ul>",
      "clinical_legacy": "<ul><li>Nádory intradurální - neurinom, meningeom → komprimují míchu a dobře se sytí na KL</li><li>Nádory intramedulární - gliomy, ependymomy → vřetenovitě rozšiřují část míšního sloupce, postkontrastně se sytí</li></ul>"
    },
    "quiz": [
      {
            "question": "Embolizace hepatocelulárního karcinomu (TACE – transarteriální chemoembolizace) využívá:",
            "options": [
                  "Selektivní katetrizaci hepatické arterie zásobující tumor + depozice chemoterapeutika (doxorubicin) v embolizačním médiu → ischemie + lokální chemoterapie",
                  "Systemickou chemoterapii bez katetrizace pro neoperabilní HCC",
                  "Embolizaci portální žíly (portal vein embolization) před resekcí jater",
                  "Ablaci tumoru radiofrekvenčními vlnami (RFA) přes perkutánní přístup"
            ],
            "correct": 0,
            "explanation": "TACE: hepatická arterie zásobuje nádor (70% HCC z arterie, ne z portální žíly). Superselektivní katetrizace → chemoterapeutikum + lipiodol/mikrosféry → embolizace → lokální ischemie + cytotoxicita. Standard pro střední stadium (BCLC-B). SIRT (radioembolizace) = alternativa."
      },
      {
            "question": "Embolizace při krvácení z bronchiálních arterií (hemoptýza) se indikuje:",
            "options": [
                  "U masivní hemoptýzy (> 300 ml/24 h) ohrožující život, po identifikaci zdrojové arterie na CT-angiografii, jako bridging nebo definitvní terapie",
                  "U každé hemoptýzy bez CT předvyšetření jako primera terapie",
                  "Výhradně po chirurgické resekci plicního ložiska jako profylaxe",
                  "U plicní embolie se symptomem hemoptýzy (ta pochází z plicních, ne bronchiálních arterií)"
            ],
            "correct": 0,
            "explanation": "Bronchiální arteriální embolizace (BAE): masivní hemoptýza (tuberkulóza, bronchiektázie, karcinom). Předchůdce: CTA k mapování zdroje (bronchiální arterie obvykle z aorty Th5–Th6). Výslednost > 90% okamžité zástavy, recidiva u 30–50%."
      }
]
  },
  {
    "id": "radio-43",
    "title": "Možnosti invazivního a neinvazivního zobrazování cév (UZ, CTA, MRA, DSA)",
    "section": "Angiografie a intervence",
    "category": "Intervence & Cévy",
    "modalities": [
      "Doppler UZ",
      "CT angiografie (CTA)",
      "MR angiografie (MRA)",
      "Digitální subtrakční angiografie (DSA)"
    ],
    "keywords": [
      "Dopplerovská sonografie",
      "CTA s bolus trackingem",
      "MR angiografie (TOF bez KL a CE-MRA)",
      "DSA Seldingerova technika",
      "prostorové rozlišení",
      "radiační zátěž"
    ],
    "image": "images/anki/paste-6ccb647992c2b53075e38ead51fa89fcad07aea7.jpg",
    "images": [
      {
        "src": "images/anki/paste-6ccb647992c2b53075e38ead51fa89fcad07aea7.jpg",
        "title": "Neinvazivní a invazivní zobrazení karotického řečiště",
        "caption": "Srovnání dopplerovské sonografie, kontrastní CTA a DSA v kvantifikaci stenóz karotid (NASCET kritéria).",
        "modality": "Angiografie"
      }
    ],
    "content": {
      "principle": "<ul><li>nevýhody.</li><li>výhoda - promítnutí předchozí angiografie do skiaskopického obrazu → lepší limitace - pohybové artefakty anatomická orientace při práci s katetry a jejich navigaci → snížení množství podané dávky KL a dávky ionizujícího záření (nemusíme tolikrát opakovat angiografii)</li></ul>",
      "methodology": "<ul><li>angiografie - zobrazení cév</li><li><strong>Nepřímé zobrazení cév (endovaskulárního prostoru):</strong> zobrazení vnitřního otisku cévy KL → RTG, CT, MR → digitální zpracování snímků = digitální subtrakční angiografie (DSA)</li><li>Neinvazivní techniky = bez vstupu do těla pacienta = UZ, MR bez KL</li><li>CT a MR angiografie jsou minimálně invazivní (i. v. aplikujeme kontrastní látku)</li><li>Invazivní punkce femorální tepny = Seldingerova metoda = punkce tepny jednou → vytažení mandrénu z lumina jehly → povytažení jehly do lumina tepny → zavedení vodiče do lumina →vytažení jehly z lumina → zavedení katetru do lumina tepny DSA = digitální subtrakční angiografie</li><li>počítačová subtrakce původního snímku bez náplně od všech snímků pořízených po aplikaci KL → rentgenový obraz s kontrastní náplní cév bez pozadí</li><li>digitální angiografie - nativní snímek překrytý kontrastním snímkem cév</li></ul>",
      "normal_anatomy": "<ul><li>Fyziologický obraz vyžaduje znalost normální radioanatomie, symetrie struktur a fyziologických denzit (CT) a signálových intenzit (MR).</li></ul>",
      "pathology": "<ul><li><strong>Nativní zobrazení cév:</strong> céva je definovaná svou stěnou → zobrazí se jen dostatečně velké cévy, které mají dostatečně hrubou stěnu → UZ, CT, MR</li></ul>",
      "clinical": "<ul><li>počítačová subtrakce původního snímku bez náplně od všech snímků pořízených po aplikaci KL → rentgenový obraz s kontrastní náplní cév bez pozadí</li><li>digitální angiografie - nativní snímek překrytý kontrastním snímkem cév</li><li>výhoda - promítnutí předchozí angiografie do skiaskopického obrazu → lepší limitace - pohybové artefakty anatomická orientace při práci s katetry a jejich navigaci → snížení množství podané dávky KL a dávky ionizujícího záření (nemusíme tolikrát opakovat angiografii)</li></ul>",
      "key_points": "<ul><li><strong>Klíčová modalita:</strong> Doppler UZ, CT angiografie (CTA), MR angiografie (MRA), Digitální subtrakční angiografie (DSA).</li><li><strong>Hlavní diagnostický cíl:</strong> Včasné stanovení diagnózy, posouzení rozsahu a lokalizace patologie pro volbu adekvátní terapie.</li><li><strong>Zkušební perla:</strong> Vždy začínat méně invazivní dostupnou modalitou a respektovat kontraindikace (alergie na KL, renální insuficience, kardiostimulátory u MR).</li></ul>",
      "definition": "<ul><li>nevýhody.</li><li>výhoda - promítnutí předchozí angiografie do skiaskopického obrazu → lepší limitace - pohybové artefakty anatomická orientace při práci s katetry a jejich navigaci → snížení množství podané dávky KL a dávky ionizujícího záření (nemusíme tolikrát opakovat angiografii)</li></ul>",
      "etiology": "<ul><li>angiografie - zobrazení cév</li><li><strong>Nepřímé zobrazení cév (endovaskulárního prostoru):</strong> zobrazení vnitřního otisku cévy KL → RTG, CT, MR → digitální zpracování snímků = digitální subtrakční angiografie (DSA)</li><li>Neinvazivní techniky = bez vstupu do těla pacienta = UZ, MR bez KL</li><li>CT a MR angiografie jsou minimálně invazivní (i. v. aplikujeme kontrastní látku)</li></ul>",
      "pathogenesis": "<ul><li>Fyziologický obraz vyžaduje znalost normální radioanatomie, symetrie struktur a fyziologických denzit (CT) a signálových intenzit (MR).</li></ul>",
      "macroscopy": "<ul><li><strong>Nativní zobrazení cév:</strong> céva je definovaná svou stěnou → zobrazí se jen dostatečně velké cévy, které mají dostatečně hrubou stěnu → UZ, CT, MR</li></ul>",
      "microscopy": "<ul><li>počítačová subtrakce původního snímku bez náplně od všech snímků pořízených po aplikaci KL → rentgenový obraz s kontrastní náplní cév bez pozadí</li><li>digitální angiografie - nativní snímek překrytý kontrastním snímkem cév</li><li>výhoda - promítnutí předchozí angiografie do skiaskopického obrazu → lepší limitace - pohybové artefakty anatomická orientace při práci s katetry a jejich navigaci → snížení množství podané dávky KL a dávky ionizujícího záření (nemusíme tolikrát opakovat angiografii)</li></ul>",
      "clinical_legacy": "<ul><li>počítačová subtrakce původního snímku bez náplně od všech snímků pořízených po aplikaci KL → rentgenový obraz s kontrastní náplní cév bez pozadí</li><li>digitální angiografie - nativní snímek překrytý kontrastním snímkem cév</li><li>výhoda - promítnutí předchozí angiografie do skiaskopického obrazu → lepší limitace - pohybové artefakty anatomická orientace při práci s katetry a jejich navigaci → snížení množství podané dávky KL a dávky ionizujícího záření (nemusíme tolikrát opakovat angiografii)</li></ul>"
    },
    "quiz": [
      {
            "question": "Radiofrekvenční ablace (RFA) a mikrovlnná ablace (MWA) jsou indikovány pro:",
            "options": [
                  "Perkutánní termální ablaci jaterních metastáz nebo HCC (≤ 3–4 cm), ledvinových karcinomů, plicních ložisek neresekabilních chirurgicky",
                  "Léčbu ložisek > 10 cm (velká ložiska jsou výhradně chirurgická indikace)",
                  "Ablaci pouze kostních lézí (vertebroplastika je preferována pro měkké tkáně)",
                  "Jako primární terapii multicentrického HCC bez ohledu na rozsah"
            ],
            "correct": 0,
            "explanation": "RFA/MWA: perkutánní jehla do ložiska (CT/UZ navigace) → termální nekróza > 60°C. HCC ≤ 3 cm: ablace = srovnatelná s chirurgií. Renální karcinom T1a: ablace alternativa k nefrektomii. Výhoda: bez otevřené operace, opakování možné."
      },
      {
            "question": "Perkutánní drenáž abscesu (UZ nebo CT navigovaná) oproti chirurgické drenáži má výhody:",
            "options": [
                  "Minimálně invazivní (lokální anestézie), kratší hospitalizace, možnost u rizikových pacientů (antikoagulace, komoribidity)",
                  "Je vždy absolutně preferována před chirurgií bez ohledu na složitost abscesu",
                  "Nevyžaduje žádný drén – stačí jednorázová aspirace jehlou",
                  "Perkutánní drenáž nelze kombinovat s antibiotickou terapií"
            ],
            "correct": 0,
            "explanation": "Perkutánní drenáž abscesů (jater, pankreatu, retroperitonea, plic): UZ nebo CT navigace → Seldinger technika (vodič → dilatace → drén). Výtěžnost > 80% pro jednokomorové abscesy. Nevhodné pro: multilokulárně komorové abscesy, nekrotické kolekce (→ chirurgie)."
      }
]
  },
  {
    "id": "radio-44",
    "title": "Příprava nemocného před angiografií a péče po výkonu",
    "section": "Angiografie a intervence",
    "category": "Intervence & Cévy",
    "modalities": [
      "Příprava pacienta",
      "DSA"
    ],
    "keywords": [
      "informovaný souhlas",
      "lačnění a hydratace",
      "laboratoř (krevní obraz, koagulace INR/aPTT, renální funkce GFR/kreatinin)",
      "vysazení antikoagulancií a metforminu",
      "komprese punkčního místa",
      "klid na lůžku",
      "uzavírací systémy (Angio-Seal)"
    ],
    "image": "images/anki/picc-line-2.jpg",
    "images": [
      {
        "src": "images/anki/picc-line-2.jpg",
        "title": "Zajištění cévního přístupu a ověření polohy katetru",
        "caption": "Správná poloha centrálního katetru v dolní třetině horní duté žíly (SVC) ověřená skiagrafií/skiaskopií.",
        "modality": "RTG / Přístup"
      }
    ],
    "content": {
      "principle": "<ul><li>podepsaný informovaný souhlas, negativní reverz → datum, čas a podpisy lékaře, pacienta a svědka</li><li>kontrola hemokoagulačních parametrů (krevní obraz, INR, aPTT, Quickův čas, trombocyty)</li><li>hodnoty funkce ledvin - kreatinin, plurea</li><li>během výkonu pacient monitorován - TK, EKG, saturace kyslíku + parenterální vstup na infuzi fýzáku</li></ul>",
      "methodology": "<ul><li><strong>péče po výkonu:</strong> výsledek léčebného výkonu, klid na lůžku po punkce femorálky + monitorace TK a pulsu, kontrola místa vpichu</li></ul>",
      "normal_anatomy": "<ul><li>Fyziologický obraz vyžaduje znalost normální radioanatomie, symetrie struktur a fyziologických denzit (CT) a signálových intenzit (MR).</li></ul>",
      "pathology": "<ul><li>na lačno (min 4 hodiny), hydratovaný</li><li>u nevaskulárních zákroků - hladiny obstrukčních enzymů a bilirubinu</li><li>medikaci pacienta - warfarin, metformin, léky na astma</li></ul>",
      "clinical": "<ul><li>alergologická anamnéza → premedikace kortikosteroidy</li></ul>",
      "key_points": "<ul><li><strong>Klíčová modalita:</strong> Příprava pacienta, DSA.</li><li><strong>Hlavní diagnostický cíl:</strong> Včasné stanovení diagnózy, posouzení rozsahu a lokalizace patologie pro volbu adekvátní terapie.</li><li><strong>Zkušební perla:</strong> Vždy začínat méně invazivní dostupnou modalitou a respektovat kontraindikace (alergie na KL, renální insuficience, kardiostimulátory u MR).</li></ul>",
      "definition": "<ul><li>podepsaný informovaný souhlas, negativní reverz → datum, čas a podpisy lékaře, pacienta a svědka</li><li>kontrola hemokoagulačních parametrů (krevní obraz, INR, aPTT, Quickův čas, trombocyty)</li><li>hodnoty funkce ledvin - kreatinin, plurea</li><li>během výkonu pacient monitorován - TK, EKG, saturace kyslíku + parenterální vstup na infuzi fýzáku</li></ul>",
      "etiology": "<ul><li><strong>péče po výkonu:</strong> výsledek léčebného výkonu, klid na lůžku po punkce femorálky + monitorace TK a pulsu, kontrola místa vpichu</li></ul>",
      "pathogenesis": "<ul><li>Fyziologický obraz vyžaduje znalost normální radioanatomie, symetrie struktur a fyziologických denzit (CT) a signálových intenzit (MR).</li></ul>",
      "macroscopy": "<ul><li>na lačno (min 4 hodiny), hydratovaný</li><li>u nevaskulárních zákroků - hladiny obstrukčních enzymů a bilirubinu</li><li>medikaci pacienta - warfarin, metformin, léky na astma</li></ul>",
      "microscopy": "<ul><li>alergologická anamnéza → premedikace kortikosteroidy</li></ul>",
      "clinical_legacy": "<ul><li>alergologická anamnéza → premedikace kortikosteroidy</li></ul>"
    },
    "quiz": [
      {
            "question": "Hluboká žilní trombóza (DVT) – diagnostická metoda první volby je:",
            "options": [
                  "Kompresní UZ (duplex) – nekompribilita žíly + absence průtoku v Doppleru = DVT; senzitivita > 95% pro proximální DVT",
                  "CT venografie (CTV) jako primární metoda u všech pacientů s podezřením DVT",
                  "Flebografie kontrastní (zlatý standard historicky, nyní nahrazena UZ)",
                  "D-dimery (negativní D-dimer vylučuje DVT, ale pozitivní nepotvrzuje)"
            ],
            "correct": 0,
            "explanation": "DVT diagnostika: Pre-test pravděpodobnost (Wells skóre) + D-dimery + UZ. Kompresní UZ: nekompribilita žíly pod sondou = trombus. Senzitivita pro proximální DVT (femorální, popliteální) > 95%. Distální (lýtkové) DVT: nižší senzitivita. CTV/MRV: alternativa při nejasném UZ."
      },
      {
            "question": "Syndrom horní duté žíly (HDŽ) se na CT zobrazí jako:",
            "options": [
                  "Obstrukce/komprese HDŽ (tumor mediastina, trombóza) s kolaterálním průtokem přes v. azygos, v. mammaria interna, žíly hrudní stěny",
                  "Výplňkový defekt v plicní tepně (= PE, ne syndrom HDŽ)",
                  "Dilatace portální žíly s kolaterálami (= portální hypertenze, ne HDŽ)",
                  "Rozšíření bronchů s tekutinou (= bronchiektázie, nesouvisí s HDŽ)"
            ],
            "correct": 0,
            "explanation": "Syndrom HDŽ: komprese nebo trombóza VCS → obstrukce návratu krve z horní poloviny těla. Příčiny: 80% malignity (malobuněčný SCLC, lymfomy), 20% trombóza (CVC, kardiostimulátor). CT: obstrukce VCS + kolaterály (azygos, mammaria). Klinicky: edém obličeje, krku, HK."
      }
]
  },
  {
    "id": "radio-45",
    "title": "Základní patologické nálezy při angiografii (stenózy, uzávěry, aneuryzmata, disekce)",
    "section": "Angiografie a intervence",
    "category": "Intervence & Cévy",
    "modalities": [
      "DSA",
      "CTA",
      "MRA"
    ],
    "keywords": [
      "stenóza cévy",
      "okluze / uzávěr",
      "kolaterální oběh",
      "aneurysma (pravé, nepravé / pseudoaneurysma)",
      "disekce tepny (intimální flap, falešné lumen)",
      "arteriovenózní píštěl / AVM",
      "extravazace kontrastní látky (aktivní krvácení)"
    ],
    "image": "images/anki/paste-6ccb647992c2b53075e38ead51fa89fcad07aea7.jpg",
    "images": [
      {
        "src": "images/anki/paste-6ccb647992c2b53075e38ead51fa89fcad07aea7.jpg",
        "title": "Angiografický nález kritické stenózy arterie",
        "caption": "Koncentrické zúžení lumina tepny se zpožděným tokem a poststenotickou dilatací na digitální subtrakční angiografii.",
        "modality": "DSA / Patologie"
      }
    ],
    "content": {
      "principle": "<ul><li><strong>Onemocnění periferních cév - Arteriální okluzivní nemoc:</strong></li><li>fibromuskulární dysplazie</li><li>syndrom cévního útlaku</li><li>Traumatické poruchy tepenné perfuze</li></ul>",
      "methodology": "<ul><li><strong>Aneurysma:</strong> pravé (vychlipky tepenné stěny vakovitého nebo vřetenovitého typu - tři histologické vrstvy), pseudoaneuryzma (vznik v důsledku natržení intimy a medie → lokální asymetrické vyklenutí tvořené adventicií), disekující aneurysma (trhliny a odchlípeniny intimy od medie → vznik falešného kanálu + původní lumen je průchodné → Standordská klasifikace - A = odstup od aortální chlopně postupující na oblouk aorty a odstupy velkých cév; B = disekce od odstupu levé a. subclavia)</li></ul>",
      "normal_anatomy": "<ul><li>Fyziologický obraz vyžaduje znalost normální radioanatomie, symetrie struktur a fyziologických denzit (CT) a signálových intenzit (MR).</li></ul>",
      "pathology": "<ul><li><strong>Fontaineova klinická klasifikace:</strong> 1) asymptomatické aterosklerotické léze 2) občasné klaudikace 3) klidové bolesti 4) trofické změny s nekrózou a gangrenou</li><li>Akutní = embolie, trombóza na podkladě aterosklerózy, zánětlivého procesu, disekce tepenné stěny, spazmy, hemodynamické dysbalance → částečná nebo úplná okluze lumina tepny</li><li><strong>Chronické:</strong> pomalé ukládání ateromatózních hmot do cévní stěny + tvorba kolaterál → predilekční místa = pelvické arterie, dolní končetiny, odstup velkých cév z aortálního oblouku, bifurkace krkavice, a. femoralis superficialis, a. poplitea → nezbytné zobrazit stenózu nebo okluzi v celé její délce + kolaterální oběh</li><li><strong>Záněty:</strong> Trombangitis obliterans - tepénky malého a středního kalibru na HKK i DKK; Takayasuova arteritida - velké elastické tepny</li><li><strong>Cévní malformace:</strong> kapilární hemangiomy, venózní angiomy, arteriovenózní malformace, lymfangiomy</li></ul>",
      "clinical": "<ul><li>Traumatické poruchy tepenné perfuze</li><li><strong>Aneurysma:</strong> pravé (vychlipky tepenné stěny vakovitého nebo vřetenovitého typu - tři histologické vrstvy), pseudoaneuryzma (vznik v důsledku natržení intimy a medie → lokální asymetrické vyklenutí tvořené adventicií), disekující aneurysma (trhliny a odchlípeniny intimy od medie → vznik falešného kanálu + původní lumen je průchodné → Standordská klasifikace - A = odstup od aortální chlopně postupující na oblouk aorty a odstupy velkých cév; B = disekce od odstupu levé a. subclavia)</li><li><strong>Cévní malformace:</strong> kapilární hemangiomy, venózní angiomy, arteriovenózní malformace, lymfangiomy</li></ul>",
      "key_points": "<ul><li><strong>Klíčová modalita:</strong> DSA, CTA, MRA.</li><li><strong>Hlavní diagnostický cíl:</strong> Včasné stanovení diagnózy, posouzení rozsahu a lokalizace patologie pro volbu adekvátní terapie.</li><li><strong>Zkušební perla:</strong> Vždy začínat méně invazivní dostupnou modalitou a respektovat kontraindikace (alergie na KL, renální insuficience, kardiostimulátory u MR).</li></ul>",
      "definition": "<ul><li><strong>Onemocnění periferních cév - Arteriální okluzivní nemoc:</strong></li><li>fibromuskulární dysplazie</li><li>syndrom cévního útlaku</li><li>Traumatické poruchy tepenné perfuze</li></ul>",
      "etiology": "<ul><li><strong>Aneurysma:</strong> pravé (vychlipky tepenné stěny vakovitého nebo vřetenovitého typu - tři histologické vrstvy), pseudoaneuryzma (vznik v důsledku natržení intimy a medie → lokální asymetrické vyklenutí tvořené adventicií), disekující aneurysma (trhliny a odchlípeniny intimy od medie → vznik falešného kanálu + původní lumen je průchodné → Standordská klasifikace - A = odstup od aortální chlopně postupující na oblouk aorty a odstupy velkých cév; B = disekce od odstupu levé a. subclavia)</li></ul>",
      "pathogenesis": "<ul><li>Fyziologický obraz vyžaduje znalost normální radioanatomie, symetrie struktur a fyziologických denzit (CT) a signálových intenzit (MR).</li></ul>",
      "macroscopy": "<ul><li><strong>Fontaineova klinická klasifikace:</strong> 1) asymptomatické aterosklerotické léze 2) občasné klaudikace 3) klidové bolesti 4) trofické změny s nekrózou a gangrenou</li><li>Akutní = embolie, trombóza na podkladě aterosklerózy, zánětlivého procesu, disekce tepenné stěny, spazmy, hemodynamické dysbalance → částečná nebo úplná okluze lumina tepny</li><li><strong>Chronické:</strong> pomalé ukládání ateromatózních hmot do cévní stěny + tvorba kolaterál → predilekční místa = pelvické arterie, dolní končetiny, odstup velkých cév z aortálního oblouku, bifurkace krkavice, a. femoralis superficialis, a. poplitea → nezbytné zobrazit stenózu nebo okluzi v celé její délce + kolaterální oběh</li><li><strong>Záněty:</strong> Trombangitis obliterans - tepénky malého a středního kalibru na HKK i DKK; Takayasuova arteritida - velké elastické tepny</li></ul>",
      "microscopy": "<ul><li><strong>Cévní malformace:</strong> kapilární hemangiomy, venózní angiomy, arteriovenózní malformace, lymfangiomy</li></ul>",
      "clinical_legacy": "<ul><li>Traumatické poruchy tepenné perfuze</li><li><strong>Aneurysma:</strong> pravé (vychlipky tepenné stěny vakovitého nebo vřetenovitého typu - tři histologické vrstvy), pseudoaneuryzma (vznik v důsledku natržení intimy a medie → lokální asymetrické vyklenutí tvořené adventicií), disekující aneurysma (trhliny a odchlípeniny intimy od medie → vznik falešného kanálu + původní lumen je průchodné → Standordská klasifikace - A = odstup od aortální chlopně postupující na oblouk aorty a odstupy velkých cév; B = disekce od odstupu levé a. subclavia)</li><li><strong>Cévní malformace:</strong> kapilární hemangiomy, venózní angiomy, arteriovenózní malformace, lymfangiomy</li></ul>"
    },
    "quiz": [
      {
            "question": "Lymfom na PET/CT s FDG se projevuje:",
            "options": [
                  "FDG-avídní lymfadenopatie (zvýšená metabolická aktivita, SUV > 2,5) umožňující přesný staging a hodnocení odpovědi na léčbu (Lugano kritéria)",
                  "Hypoperfuzí lymfatických uzlin bez FDG akumulace (lymfomy nejsou FDG-avídní)",
                  "Pouze kostními lézemi bez mediastinálního postižení",
                  "Difuzní plicní intersticiální pattern bez uzlinového postižení"
            ],
            "correct": 0,
            "explanation": "PET/CT zlatý standard pro staging lymfomů (Hodgkin, DLBCL): FDG-avídní uzliny, extranodální postižení, kostní dřeň. Lugano response criteria: kompletní metabolická remise (CMR) vs. parciální. MALT/marginal zone lymfomy: variabilní FDG uptake."
      },
      {
            "question": "Lymfedém dolní končetiny lze zobrazit pomocí:",
            "options": [
                  "Lymfoscintigrafie (radioizotopová lymfografie) nebo MR lymfangiografie k průkazu porušeného lymfatického transportu a lokalizace bloku",
                  "Kompresní UZ (zlatý standard pro DVT, ale necitlivý pro lymfedém)",
                  "Flebografie (zobrazuje venózní systém, ne lymfatický)",
                  "CT nativní (může zobrazit kůži a podkožní edém, ale nerozliší příčinu od venózní insuficience)"
            ],
            "correct": 0,
            "explanation": "Lymfedém diagnostika: lymfoscintigrafie (radioizotop subkutánně → průkaz bloku a kolaterál). MR lymfangiografie: intranodální nebo intersticiální Gd → přímé zobrazení lymfatik (pro chirurgické plánování LVA anastomózy). ICGL fluorescenční lymfangiografie pro superficiální lymfedém."
      }
]
  },
  {
    "id": "radio-46",
    "title": "Transluminální remodelace cév (PTA, stentování, trombektomie)",
    "section": "Angiografie a intervence",
    "category": "Intervence & Cévy",
    "modalities": [
      "Perkutánní transluminální angioplastika (PTA)",
      "Stenting",
      "Aterektomie",
      "Mechanická trombektomie"
    ],
    "keywords": [
      "balónková angioplastika (PTA)",
      "stent (samoexpandibilní, balónexpandibilní)",
      "lékový stent (DES)",
      "remodelace tepny",
      "ischemická choroba dolních končetin (ICHDK)",
      "stenóza renálních tepen",
      "tromboaspirace"
    ],
    "image": "images/anki/paste-6ccb647992c2b53075e38ead51fa89fcad07aea7.jpg",
    "images": [
      {
        "src": "images/anki/paste-6ccb647992c2b53075e38ead51fa89fcad07aea7.jpg",
        "title": "Perkutánní transluminální angioplastika (PTA) a stenting",
        "caption": "Zavedení balónkového katetru a implantace kovového stentu do místa stenózy s plným obnovením průsvitu cévy.",
        "modality": "Vaskulární Intervence"
      }
    ],
    "content": {
      "principle": "<ul><li>radiální síla + kruhová pevnost</li></ul>",
      "methodology": "<ul><li>zobrazení arteriálního nebo žilního řečiště lze provést perkutánní punkcí = Seldingerova metoda (a. femoralis, a. radialis) = jehlou punktujeme tepnu, zavádíme přes jehlu do tepny vodič, odstraníme jehlu vodič necháme a po vodiči zasuneme do tepny katetr nebo sheat, po odstranění vodiče provedeme proplach katétru → bezpečný přístup do cévního řečiště Perkutánní transluminální angioplastika (PTA):</li><li><strong>technika:</strong> průnik vodiče přes stenózu nebo postižený úsek → po vodiči zavedeny dilatační balonek → insuflace balonku → trhliny intimy a medie → rozšíření zevního průměru cévy</li></ul>",
      "normal_anatomy": "<ul><li>Fyziologický obraz vyžaduje znalost normální radioanatomie, symetrie struktur a fyziologických denzit (CT) a signálových intenzit (MR).</li></ul>",
      "pathology": "<ul><li>metoda léčby tepen a žil - kontrolované poranění patologicky změněné cévní stěny → cílem je rozšířit průměr zúžené cévy na původní průměr zdravé cévy</li><li>po poranění cévy →autoreparativní procesy cévní stěny → časná trombóza + možná restenóza (hyperplazie myointimální vrstvy)</li><li>potahované a farmaka uvolňující stenty = snížení incidence restenóz → zabraňují proliferaci hladkých svalových buněk + omezují hyperplazii intimy</li></ul>",
      "clinical": "<ul><li>K předcházení komplikací - Anopyrin 6 měsíců po výkonu, periprocedurální heparin Stenty, stentgrafty:</li><li>stent = kovová výztuž, která se implantuje do cév pro zachování dlouhodobé průchodnosti po předchozí PTA</li><li>doporučení - implantovat stent o cca 10% větším průměti než je stentovaná céva</li><li>balónexpanzivní (chirurgická ocel) x samoexpanzivní (nikl + platina)</li><li><strong>Stentgraft:</strong> stenty potažené zevně nebo uvnitř nepropustným materiálem (cévní protézou = polytetrafluorethylén) → zástava krvácení rupturovaných nebo perforovaných cév a při léčba disekcí nebo aneurysmat Nutná hemostáza + manuální komprese v místě vpichu po dobu 15 min Lokální komplikace: hematom, pseudoaneurysma, AV píštěl, disekce cévy, trombóza nebo infekce Celkové komplikace: alergoidní reakce a vazovagální reakce + komplikace v místě zákroku Intravenózní trombolýza Mechanická extrakce embolu: rekanalizační košík Solitaire</li></ul>",
      "key_points": "<ul><li><strong>Klíčová modalita:</strong> Perkutánní transluminální angioplastika (PTA), Stenting, Aterektomie, Mechanická trombektomie.</li><li><strong>Hlavní diagnostický cíl:</strong> Včasné stanovení diagnózy, posouzení rozsahu a lokalizace patologie pro volbu adekvátní terapie.</li><li><strong>Zkušební perla:</strong> Vždy začínat méně invazivní dostupnou modalitou a respektovat kontraindikace (alergie na KL, renální insuficience, kardiostimulátory u MR).</li></ul>",
      "definition": "<ul><li>radiální síla + kruhová pevnost</li></ul>",
      "etiology": "<ul><li>zobrazení arteriálního nebo žilního řečiště lze provést perkutánní punkcí = Seldingerova metoda (a. femoralis, a. radialis) = jehlou punktujeme tepnu, zavádíme přes jehlu do tepny vodič, odstraníme jehlu vodič necháme a po vodiči zasuneme do tepny katetr nebo sheat, po odstranění vodiče provedeme proplach katétru → bezpečný přístup do cévního řečiště Perkutánní transluminální angioplastika (PTA):</li><li><strong>technika:</strong> průnik vodiče přes stenózu nebo postižený úsek → po vodiči zavedeny dilatační balonek → insuflace balonku → trhliny intimy a medie → rozšíření zevního průměru cévy</li></ul>",
      "pathogenesis": "<ul><li>Fyziologický obraz vyžaduje znalost normální radioanatomie, symetrie struktur a fyziologických denzit (CT) a signálových intenzit (MR).</li></ul>",
      "macroscopy": "<ul><li>metoda léčby tepen a žil - kontrolované poranění patologicky změněné cévní stěny → cílem je rozšířit průměr zúžené cévy na původní průměr zdravé cévy</li><li>po poranění cévy →autoreparativní procesy cévní stěny → časná trombóza + možná restenóza (hyperplazie myointimální vrstvy)</li><li>potahované a farmaka uvolňující stenty = snížení incidence restenóz → zabraňují proliferaci hladkých svalových buněk + omezují hyperplazii intimy</li></ul>",
      "microscopy": "<ul><li>K předcházení komplikací - Anopyrin 6 měsíců po výkonu, periprocedurální heparin Stenty, stentgrafty:</li><li>stent = kovová výztuž, která se implantuje do cév pro zachování dlouhodobé průchodnosti po předchozí PTA</li><li>doporučení - implantovat stent o cca 10% větším průměti než je stentovaná céva</li><li>balónexpanzivní (chirurgická ocel) x samoexpanzivní (nikl + platina)</li></ul>",
      "clinical_legacy": "<ul><li>K předcházení komplikací - Anopyrin 6 měsíců po výkonu, periprocedurální heparin Stenty, stentgrafty:</li><li>stent = kovová výztuž, která se implantuje do cév pro zachování dlouhodobé průchodnosti po předchozí PTA</li><li>doporučení - implantovat stent o cca 10% větším průměti než je stentovaná céva</li><li>balónexpanzivní (chirurgická ocel) x samoexpanzivní (nikl + platina)</li><li><strong>Stentgraft:</strong> stenty potažené zevně nebo uvnitř nepropustným materiálem (cévní protézou = polytetrafluorethylén) → zástava krvácení rupturovaných nebo perforovaných cév a při léčba disekcí nebo aneurysmat Nutná hemostáza + manuální komprese v místě vpichu po dobu 15 min Lokální komplikace: hematom, pseudoaneurysma, AV píštěl, disekce cévy, trombóza nebo infekce Celkové komplikace: alergoidní reakce a vazovagální reakce + komplikace v místě zákroku Intravenózní trombolýza Mechanická extrakce embolu: rekanalizační košík Solitaire</li></ul>"
    },
    "quiz": [
      {
            "question": "Jaká je diagnostická metoda volby při podezření na karcinoid (NET) slinivky nebo tenkého střeva?",
            "options": [
                  "Somatostatinová receptorová scintigrafie (68Ga-DOTATATE PET/CT) – zlatý standard pro NET s vysokou expresí somatostatinových receptorů",
                  "Kolonoskopie s biopsií (pro léze v rektu nebo colon, ne tenké střevo)",
                  "Nativní CT bez KL (NETs jsou hypo- nebo isodenzní bez KL)",
                  "Sérum NSE a chromogranin A jako zobrazovací metoda"
            ],
            "correct": 0,
            "explanation": "NETs (neuroendokrinní tumory): 68Ga-DOTATATE PET/CT (nebo oktreoscan/99mTc-HYNIC-TOC) = zlatý standard. Somatostatinové receptory (SSTR2) exprimovány v > 80% NET. Funkční zobrazení pro staging, hledání primáru, hodnocení odpovědi na terapii (PRRT)."
      },
      {
            "question": "Kontrastní látky na bázi gadobenátu (Gd-BOPTA, MultiHance) nebo gadoxetátu (Gd-EOB-DTPA, Primovist) při MR jater se liší od standardních Gd chelátů:",
            "options": [
                  "Mají hepatobiliární fázi sycení (jaterní buňky je vychytávají přes transportéry OATP) → lepší detekce HCC vs. FNH",
                  "Jsou určeny výhradně pro MR ledvin (renální exkrece)",
                  "Mají nižší nefrogenní systémovou fibrózu riziko než jiné Gd chelátory",
                  "Jsou pouze lineární chelátory (vyšší riziko Gd deposice)"
            ],
            "correct": 0,
            "explanation": "Hepatospecifické kontrastní látky (Primovist/Eovist): hepatocyty vychytávají Gd přes OATP1B3 → hepatobiliární fáze (20 min). HCC bez funkčních transportérů = hypointenzní v HBF (washout). FNH = hyperintenzní. Cena: vyšší, čas: delší protokol."
      }
]
  },
  {
    "id": "radio-47",
    "title": "Endovaskulární embolizace (materiály, indikace, krvácení, tumory)",
    "section": "Angiografie a intervence",
    "category": "Intervence & Cévy",
    "modalities": [
      "Transkatétrová embolizace (TAE)",
      "Chemoembolizace (TACE)"
    ],
    "keywords": [
      "embolizační materiály (spirály / coils, tekutá lepidla Onyx/Histoacryl, mikročástice PVA, želatinová pěna Gelfoam)",
      "akutní krvácení (trauma, GIT, poporodní)",
      "embolizace aneurysmat",
      "embolizace myomů dělohy (UAE)",
      "TACE u hepatocelulárního karcinomu"
    ],
    "image": "images/anki/paste-a5bd11be02a976414158fc8e6d5e9b1afcfadab9.jpg",
    "images": [
      {
        "src": "images/anki/paste-a5bd11be02a976414158fc8e6d5e9b1afcfadab9.jpg",
        "title": "Superselektivní katetrizace a terapeutická embolizace",
        "caption": "Zavedení mikrokatetru do krvácející tepenné větve a okluze cévního lumen spirálami k okamžitému zastavení krvácení.",
        "modality": "Embolizace / Intervence"
      }
    ],
    "content": {
      "principle": "<ul><li><strong>materiál:</strong> resorbovatelný (želatinová pěna, krevní sraženina) x neresorbovatelný (polyvinylalkoholové částice, tkáňové lepidlo, sklerotizační látky, kovové spirály)</li></ul>",
      "methodology": "<ul><li>do cílové oblasti aplikován buď přímou punkcí dané cévy nebo využitím katetrizačních technik</li></ul>",
      "normal_anatomy": "<ul><li>Fyziologický obraz vyžaduje znalost normální radioanatomie, symetrie struktur a fyziologických denzit (CT) a signálových intenzit (MR).</li></ul>",
      "pathology": "<ul><li>léčebný uzávěr cévy s cílem zastavit nebo předejít krvácení nebo léčit patologickou funkci orgánu a tkání</li><li><strong>I:</strong> akutní hemostatické výkony (krvácení do GIT, posttraumatická krvácení, krvácení z maligních tumorů, krvácení do bronchů), efektivní výkony (posttraumatické komplikace, A-V píštěle a malformace, embolizace tumorů)</li></ul>",
      "clinical": "<ul><li><strong>materiál:</strong> resorbovatelný (želatinová pěna, krevní sraženina) x neresorbovatelný (polyvinylalkoholové částice, tkáňové lepidlo, sklerotizační látky, kovové spirály)</li></ul>",
      "key_points": "<ul><li><strong>Klíčová modalita:</strong> Transkatétrová embolizace (TAE), Chemoembolizace (TACE).</li><li><strong>Hlavní diagnostický cíl:</strong> Včasné stanovení diagnózy, posouzení rozsahu a lokalizace patologie pro volbu adekvátní terapie.</li><li><strong>Zkušební perla:</strong> Vždy začínat méně invazivní dostupnou modalitou a respektovat kontraindikace (alergie na KL, renální insuficience, kardiostimulátory u MR).</li></ul>",
      "definition": "<ul><li><strong>materiál:</strong> resorbovatelný (želatinová pěna, krevní sraženina) x neresorbovatelný (polyvinylalkoholové částice, tkáňové lepidlo, sklerotizační látky, kovové spirály)</li></ul>",
      "etiology": "<ul><li>do cílové oblasti aplikován buď přímou punkcí dané cévy nebo využitím katetrizačních technik</li></ul>",
      "pathogenesis": "<ul><li>Fyziologický obraz vyžaduje znalost normální radioanatomie, symetrie struktur a fyziologických denzit (CT) a signálových intenzit (MR).</li></ul>",
      "macroscopy": "<ul><li>léčebný uzávěr cévy s cílem zastavit nebo předejít krvácení nebo léčit patologickou funkci orgánu a tkání</li><li><strong>I:</strong> akutní hemostatické výkony (krvácení do GIT, posttraumatická krvácení, krvácení z maligních tumorů, krvácení do bronchů), efektivní výkony (posttraumatické komplikace, A-V píštěle a malformace, embolizace tumorů)</li></ul>",
      "microscopy": "<ul><li><strong>materiál:</strong> resorbovatelný (želatinová pěna, krevní sraženina) x neresorbovatelný (polyvinylalkoholové částice, tkáňové lepidlo, sklerotizační látky, kovové spirály)</li></ul>",
      "clinical_legacy": "<ul><li><strong>materiál:</strong> resorbovatelný (želatinová pěna, krevní sraženina) x neresorbovatelný (polyvinylalkoholové částice, tkáňové lepidlo, sklerotizační látky, kovové spirály)</li></ul>"
    },
    "quiz": [
      {
            "question": "Screeningová mamografie snižuje mortalitu na karcinom prsu. BI-RADS kategorie 3 ('pravděpodobně benigní') vyžaduje:",
            "options": [
                  "Krátkodobé sledování (kontrola za 6 měsíců) – malignita < 2%; pokud stabilní 2–3 roky → BI-RADS 2",
                  "Okamžitou core-cut biopsii (malignita > 20%)",
                  "Excizní biopsii bez sledování",
                  "Ukončení mammografického screeningu (benigní nález)"
            ],
            "correct": 0,
            "explanation": "BI-RADS 3: pravděpodobně benigní (< 2% malignita). Doporučení: 6-měsíční UZ/mamografie kontrola. Pokud stabilní × 2–3 léta → BI-RADS 2. Indikace k biopsii při BI-RADS 3: pacientka chce, špatný follow-up, gravidita. BI-RADS 4: 2–95% malignita → biopsie."
      },
      {
            "question": "UZ-navigovaná core-cut biopsie prsu (nebo vakuová biopsie) je preferována před excizní biopsií protože:",
            "options": [
                  "Minimálně invazivní (lokální anestézie, ambulantně), histologická verifikace bez chirurgie, mapování tumoru před operací",
                  "Zajistí vždy negativní okraje resekce (R0) jako chirurgie",
                  "Je přesnější než MR-navigovaná biopsie pro všechny léze",
                  "Nevyžaduje žádnou anestézii a je bezbolestná bez lokálního anestetika"
            ],
            "correct": 0,
            "explanation": "Core-cut biopsie (14G jehla nebo vakuová): histologický vzorek (nie jen cytologie). UZ-navigace pro palpovatelné i nepalpovatelné léze. Stereotaktická biopsie (mamografická navigace): pro mikrokalcifikace. MR-navigovaná biopsie: léze viditelné pouze na MR."
      }
]
  },
  {
    "id": "radio-48",
    "title": "Nevaskulární intervenční metody (drenáže, biopsie, vertebroplastika, RFA)",
    "section": "Angiografie a intervence",
    "category": "Intervence & Cévy",
    "modalities": [
      "Perkutánní drenáž",
      "Cílená biopsie (Core-cut)",
      "Radiofrekvenční ablace (RFA/MWA)",
      "Vertebroplastika",
      "PTD žlučových cest"
    ],
    "keywords": [
      "perkutánní drenáž abscesů a tekutinových kolekcí (Seldingerova technika, pigtail)",
      "biopsie pod CT/UZ navigací",
      "termální ablace nádorů (RFA, mikrovlnná ablace MWA, kryoablace)",
      "perkutánní transhepatální drenáž žlučových cest (PTD)",
      "nefrostomie",
      "vertebroplastika"
    ],
    "image": "images/anki/percutaneous-vertebroplasty (1).jpg",
    "images": [
      {
        "src": "images/anki/percutaneous-vertebroplasty (1).jpg",
        "title": "Perkutánní vertebroplastika pod skiaskopickou navigací",
        "caption": "Zavedení trokaru transpedikulárně do kolabovaného obratlového těla a aplikace PMMA cementu pro stabilizaci a úlevu od bolesti.",
        "modality": "Nevaskulární Intervence"
      }
    ],
    "content": {
      "principle": "<ul><li>provádí se mimo cévní systém</li></ul>",
      "methodology": "<ul><li>intervence na GIT - léčba benigních a maligních strinktur jícnu, léčba pooperačních strinktur rekta a sigmoidea, perkutánní transhepatální zevně-vnitřní drenáž při benigních či maligních stenózách žlučových cest</li><li>intervenční nevaskulární výkony na ledvinách - nefrostomie termoablace, perkutánní vertebroplastika</li></ul>",
      "normal_anatomy": "<ul><li>Fyziologický obraz vyžaduje znalost normální radioanatomie, symetrie struktur a fyziologických denzit (CT) a signálových intenzit (MR).</li></ul>",
      "pathology": "<ul><li>intervence na GIT - léčba benigních a maligních strinktur jícnu, léčba pooperačních strinktur rekta a sigmoidea, perkutánní transhepatální zevně-vnitřní drenáž při benigních či maligních stenózách žlučových cest</li><li>drenáže nitrobřišních tekutinových kolekcí</li></ul>",
      "clinical": "<ul><li>drenáže nitrobřišních tekutinových kolekcí</li></ul>",
      "key_points": "<ul><li><strong>Klíčová modalita:</strong> Perkutánní drenáž, Cílená biopsie (Core-cut), Radiofrekvenční ablace (RFA/MWA), Vertebroplastika, PTD žlučových cest.</li><li><strong>Hlavní diagnostický cíl:</strong> Včasné stanovení diagnózy, posouzení rozsahu a lokalizace patologie pro volbu adekvátní terapie.</li><li><strong>Zkušební perla:</strong> Vždy začínat méně invazivní dostupnou modalitou a respektovat kontraindikace (alergie na KL, renální insuficience, kardiostimulátory u MR).</li></ul>",
      "definition": "<ul><li>provádí se mimo cévní systém</li></ul>",
      "etiology": "<ul><li>intervence na GIT - léčba benigních a maligních strinktur jícnu, léčba pooperačních strinktur rekta a sigmoidea, perkutánní transhepatální zevně-vnitřní drenáž při benigních či maligních stenózách žlučových cest</li><li>intervenční nevaskulární výkony na ledvinách - nefrostomie termoablace, perkutánní vertebroplastika</li></ul>",
      "pathogenesis": "<ul><li>Fyziologický obraz vyžaduje znalost normální radioanatomie, symetrie struktur a fyziologických denzit (CT) a signálových intenzit (MR).</li></ul>",
      "macroscopy": "<ul><li>intervence na GIT - léčba benigních a maligních strinktur jícnu, léčba pooperačních strinktur rekta a sigmoidea, perkutánní transhepatální zevně-vnitřní drenáž při benigních či maligních stenózách žlučových cest</li><li>drenáže nitrobřišních tekutinových kolekcí</li></ul>",
      "microscopy": "<ul><li>drenáže nitrobřišních tekutinových kolekcí</li></ul>",
      "clinical_legacy": "<ul><li>drenáže nitrobřišních tekutinových kolekcí</li></ul>"
    },
    "quiz": [
      {
            "question": "Gonartróza (artróza kolenního kloubu) na RTG – standardní projekce a hodnocení:",
            "options": [
                  "AP projekce ve stoji (Weight-bearing) > vleže – zatížený kloub lépe demonstruje zúžení kloubní štěrbiny; hodnotí medial vs. lateral kompartment",
                  "Pouze bočná projekce (sagitální) – dostatečná pro hodnocení gonartrózy",
                  "MR je povinná pro každou gonartrózu bez ohledu na klinické příznaky",
                  "RTG je zastaralá – UZ nahrazuje RTG pro hodnocení chrupavky"
            ],
            "correct": 0,
            "explanation": "Gonartróza RTG: AP vestoje (weight-bearing) odhalí skutečné zúžení štěrbiny (na AP vleže se jeví štěrbina širší). Hodnocenídle Kellgren-Lawrence (I–IV). Patella se hodnotí na axiální projekci (sunrise). MR: průkaz lézí chrupavky, menisků, subchondrálního edému."
      },
      {
            "question": "Dna (hyperurikémie) na RTG kloubů se projevuje:",
            "options": [
                  "Velké juxta-artrikulární erozivní léze se zachovalou kloubní štěrbinou, tophi (uratové depozity jako kalcifikace měkkých tkání), overhanging edge příznak",
                  "Periartikularní osteoporóza bez erozí (typické pro RA)",
                  "Difuzní chondrocalcinóza (CPPD, ne dna)",
                  "Subchondrální skleróza bez erozí (typické pro artrózu)"
            ],
            "correct": 0,
            "explanation": "Dna RTG: pozdní stadium – eroze ve tvaru děrovačky (punched-out) s overhanging edge (přesah kortikálu přes erózi). Tophi = uratové depozity (kalcifikace). Kloubní štěrbina zachována déle než u RA. Nejčastěji MTP1 palce (podagra). CPPD: chondrocalcinóza menisku, menisci, fibrokartilago."
      }
]
  },
  {
    "id": "radio-49",
    "title": "Zobrazování onemocnění žilního systému (hluboká žilní trombóza, varixy, syndrom HDŽ)",
    "section": "Angiografie a intervence",
    "category": "Intervence & Cévy",
    "modalities": [
      "Kompresní Doppler UZ",
      "CT venografie",
      "MR venografie",
      "Flebografie"
    ],
    "keywords": [
      "hluboká žilní trombóza (HŽT)",
      "kompresní ultrazvuk (CUS - chybějící stlačitelnost žíly)",
      "chronická žilní insuficience a varixy",
      "syndrom horní duté žíly (útlak tumorem mediastina)",
      "trombóza intrakraniálních splavů",
      "kavální filtr"
    ],
    "image": "images/anki/picc-line-2.jpg",
    "images": [
      {
        "src": "images/anki/picc-line-2.jpg",
        "title": "Zobrazení horní duté žíly a centrálního žilního řečiště",
        "caption": "Skiagrafické a venografické zhodnocení průchodnosti centrálních žil a vyloučení trombózy či zúžení horní duté žíly.",
        "modality": "Venografie / RTG"
      }
    ],
    "content": {
      "principle": "<ul><li>1 pacienta na 800-1000 obyvatel</li><li>dlouhodobé riziko = posttrombotický sy → destrukce nebo nedostatečnost žilních chlopní vedoucí k obliteraci žil a tvorbě kolaterál s varixy, kožními trofickými ulceracemi a klaudikacemi</li><li>nejčastěji postižené bércové žíly</li><li>Zobrazení = Doppler, CT flebografie, ascendentní flebografie → obraz kolejnic nebo obraz vlajícího trombu, známky nepřímé - segmentální diskontinuita náplně žíly s kolaterálním oběhem, při totální okluzi průchodný jen povrchový systém</li></ul>",
      "methodology": "<ul><li>Metodika a technické provedení vyšetření u tématu <strong>Zobrazování onemocnění žilního systému (hluboká žilní trombóza, varixy, syndrom HDŽ)</strong> volí optimální projekce, kontrastní fáze a nastavení zobrazení pro maximální diagnostickou výtěžnost.</li></ul>",
      "normal_anatomy": "<ul><li>nedostatečnost chlopenních segmentů spojených s refluxem a obstrukcí lumen žil nebo kombinací obou → periferní žilní hypertenze Tumory, hematomy, Bakerovy pseudocysty:</li></ul>",
      "pathology": "<ul><li><strong>Hluboká žilní trombóza:</strong></li><li>⅓ příčina plicní embolie, bolesti a otoky DK, gangréna až ztráta DK</li><li><strong>Phlegmasia rubra dolens:</strong> totální venózní obstrukce DK → ischemická gangréna DK (díky zástavě arteriálního oběhu) Chronická žilní insuficience</li><li>v případě blízkosti velkých žil → oblenění až obstrukce krevního toku → venózní hypertenze a trombóza tumorózní trombus - vrůstání tumorózních mas do lumen žil</li><li>hematomy - zužují, protahují a kónicky tvarují lumen žil se ztíženým či úplně zastaveným odtokem krve</li></ul>",
      "clinical": "<ul><li>nedostatečnost chlopenních segmentů spojených s refluxem a obstrukcí lumen žil nebo kombinací obou → periferní žilní hypertenze Tumory, hematomy, Bakerovy pseudocysty:</li><li>v případě blízkosti velkých žil → oblenění až obstrukce krevního toku → venózní hypertenze a trombóza tumorózní trombus - vrůstání tumorózních mas do lumen žil</li><li>hematomy - zužují, protahují a kónicky tvarují lumen žil se ztíženým či úplně zastaveným odtokem krve</li></ul>",
      "key_points": "<ul><li><strong>Klíčová modalita:</strong> Kompresní Doppler UZ, CT venografie, MR venografie, Flebografie.</li><li><strong>Hlavní diagnostický cíl:</strong> Včasné stanovení diagnózy, posouzení rozsahu a lokalizace patologie pro volbu adekvátní terapie.</li><li><strong>Zkušební perla:</strong> Vždy začínat méně invazivní dostupnou modalitou a respektovat kontraindikace (alergie na KL, renální insuficience, kardiostimulátory u MR).</li></ul>",
      "definition": "<ul><li>1 pacienta na 800-1000 obyvatel</li><li>dlouhodobé riziko = posttrombotický sy → destrukce nebo nedostatečnost žilních chlopní vedoucí k obliteraci žil a tvorbě kolaterál s varixy, kožními trofickými ulceracemi a klaudikacemi</li><li>nejčastěji postižené bércové žíly</li><li>Zobrazení = Doppler, CT flebografie, ascendentní flebografie → obraz kolejnic nebo obraz vlajícího trombu, známky nepřímé - segmentální diskontinuita náplně žíly s kolaterálním oběhem, při totální okluzi průchodný jen povrchový systém</li></ul>",
      "etiology": "<ul><li>Metodika a technické provedení vyšetření u tématu <strong>Zobrazování onemocnění žilního systému (hluboká žilní trombóza, varixy, syndrom HDŽ)</strong> volí optimální projekce, kontrastní fáze a nastavení zobrazení pro maximální diagnostickou výtěžnost.</li></ul>",
      "pathogenesis": "<ul><li>nedostatečnost chlopenních segmentů spojených s refluxem a obstrukcí lumen žil nebo kombinací obou → periferní žilní hypertenze Tumory, hematomy, Bakerovy pseudocysty:</li></ul>",
      "macroscopy": "<ul><li><strong>Hluboká žilní trombóza:</strong></li><li>⅓ příčina plicní embolie, bolesti a otoky DK, gangréna až ztráta DK</li><li><strong>Phlegmasia rubra dolens:</strong> totální venózní obstrukce DK → ischemická gangréna DK (díky zástavě arteriálního oběhu) Chronická žilní insuficience</li><li>v případě blízkosti velkých žil → oblenění až obstrukce krevního toku → venózní hypertenze a trombóza tumorózní trombus - vrůstání tumorózních mas do lumen žil</li></ul>",
      "microscopy": "<ul><li>hematomy - zužují, protahují a kónicky tvarují lumen žil se ztíženým či úplně zastaveným odtokem krve</li></ul>",
      "clinical_legacy": "<ul><li>nedostatečnost chlopenních segmentů spojených s refluxem a obstrukcí lumen žil nebo kombinací obou → periferní žilní hypertenze Tumory, hematomy, Bakerovy pseudocysty:</li><li>v případě blízkosti velkých žil → oblenění až obstrukce krevního toku → venózní hypertenze a trombóza tumorózní trombus - vrůstání tumorózních mas do lumen žil</li><li>hematomy - zužují, protahují a kónicky tvarují lumen žil se ztíženým či úplně zastaveným odtokem krve</li></ul>"
    },
    "quiz": [
      {
            "question": "Nejčastější supratentoriální intrakraniální tumor v dospělosti je:",
            "options": [
                  "Metastázy (> 50% všech intrakranialních nádorů dospělých); primárních nádorů nejčastější = glioblastom (GBM)",
                  "Meningeom (nejčastější benigní intrakraniální tumor dospělých, extra-axiální)",
                  "Vestibulární schwannom (mostomozečkový koutek, benigní, extrakraniální)",
                  "Oligodendrogliom grade 2 (nejčastější v frontálním laloku dospělých)"
            ],
            "correct": 0,
            "explanation": "Intrakraniální tumory: metastázy > 50% (nejčastěji plicní, prsní, renální, melanom). Ze primárních: GBM nejčastější maligní. Meningeom nejčastější benigní (WHO 1, extra-axiální, sytí se Gd, dural tail). Gliomy: GBM (IV), anaplastický astrocytom (III), astrocytom (II), pilocytický (I – dětský)."
      },
      {
            "question": "PET/CT s FDG je standardní metodou pro staging nádorů. Který typ nádoru je typicky FDG-negativní (falešně negativní)?",
            "options": [
                  "Mucinózní adenokarcinom, prostatický karcinom (PSA-negativní), bronchioloalveolární karcinom, karcinoidní NETs s nízkým grade",
                  "Malobuněčný karcinom plic (SCLC) – vysoce FDG-avídní",
                  "Hodgkinův lymfom – vždy silně FDG-avídní",
                  "Melanom metastatický – silně FDG-avídní"
            ],
            "correct": 0,
            "explanation": "FDG-negativní/slabě pozitivní tumory: low-grade NETs (karcinoidy), mucinózní adenokarcinomy, karcinom prostaty (PSA-negativní), bronchioloalveolární karcinom, renální karcinom (variabilní). Pro NETs → DOTATATE PET/CT. Karcinom prostaty → PSMA PET/CT."
      }
]
  },
  {
    "id": "radio-50",
    "title": "Zobrazování onemocnění lymfatického systému (lymfadenopatie, lymfomy, lymfedém)",
    "section": "Angiografie a intervence",
    "category": "Intervence & Cévy",
    "modalities": [
      "UZ uzlin",
      "CT",
      "PET/CT",
      "MR",
      "Lymfoscintigrafie"
    ],
    "keywords": [
      "lymfadenopatie (benigní reaktivní vs. maligní metastatická)",
      "ztráta tukového hilu uzliny",
      "kulatý tvar (poměr L/S < 2)",
      "lymfomy (Hodgkinův, nehodgkinské lymfomy)",
      "PET/CT s 18F-FDG (Deauville skóre)",
      "sentinelová uzlina (SLNB)",
      "lymfedém"
    ],
    "image": "images/anki/paste-e1a88010bc62a07a123629546b7d7eb6e0c53f55.jpg",
    "images": [
      {
        "src": "images/anki/paste-e1a88010bc62a07a123629546b7d7eb6e0c53f55.jpg",
        "title": "PET/CT a CT staging lymfadenopatie a lymfomů",
        "caption": "Kombinované PET/CT zobrazení metabolismu glukózy (18F-FDG) a anatomického CT pro přesné určení zasažených lymfatických uzlin a monitoraci léčby.",
        "modality": "PET/CT / Lymfatika"
      }
    ],
    "content": {
      "principle": "<ul><li>Vyšetření lymfatických uzlin - UZ s Dopplerovskou analýzou perfuze</li><li>MR doplněk</li><li>prokrvení</li><li><strong>CT:</strong> prostory nedostupné pro UZ vlnění → retromandibulární, retrofaryngeální, parafaryngeální; metastatická uzlina na CT: sycení nehomogenní, větší jak 10mm, může být část nekrotická, utlačuje okolní struktury</li></ul>",
      "methodology": "<ul><li>Metodika a technické provedení vyšetření u tématu <strong>Zobrazování onemocnění lymfatického systému (lymfadenopatie, lymfomy, lymfedém)</strong> volí optimální projekce, kontrastní fáze a nastavení zobrazení pro maximální diagnostickou výtěžnost.</li></ul>",
      "normal_anatomy": "<ul><li>segmenty krku</li></ul>",
      "pathology": "<ul><li>CT vyšetření pro dobré rozlišení</li><li>Vlastní lymfatické cévy se dnes nezobrazují4</li><li><strong>Lymfatické uzliny na UZ:</strong> rozměry - 8mm na 5mm (nad 10 už je patologická) tvar - ledvinný (benigní), kulovitý (zánětlivá)</li><li>homogenitu - hyperechogenní hilus, hypoechogenní kůra (když je hyperechogenní, odpovídá to infiltraci nádorem)</li></ul>",
      "clinical": "<ul><li>prokrvení</li><li><strong>CT:</strong> prostory nedostupné pro UZ vlnění → retromandibulární, retrofaryngeální, parafaryngeální; metastatická uzlina na CT: sycení nehomogenní, větší jak 10mm, může být část nekrotická, utlačuje okolní struktury</li><li>segmenty krku</li></ul>",
      "key_points": "<ul><li><strong>Klíčová modalita:</strong> UZ uzlin, CT, PET/CT, MR, Lymfoscintigrafie.</li><li><strong>Hlavní diagnostický cíl:</strong> Včasné stanovení diagnózy, posouzení rozsahu a lokalizace patologie pro volbu adekvátní terapie.</li><li><strong>Zkušební perla:</strong> Vždy začínat méně invazivní dostupnou modalitou a respektovat kontraindikace (alergie na KL, renální insuficience, kardiostimulátory u MR).</li></ul>",
      "definition": "<ul><li>Vyšetření lymfatických uzlin - UZ s Dopplerovskou analýzou perfuze</li><li>MR doplněk</li><li>prokrvení</li><li><strong>CT:</strong> prostory nedostupné pro UZ vlnění → retromandibulární, retrofaryngeální, parafaryngeální; metastatická uzlina na CT: sycení nehomogenní, větší jak 10mm, může být část nekrotická, utlačuje okolní struktury</li></ul>",
      "etiology": "<ul><li>Metodika a technické provedení vyšetření u tématu <strong>Zobrazování onemocnění lymfatického systému (lymfadenopatie, lymfomy, lymfedém)</strong> volí optimální projekce, kontrastní fáze a nastavení zobrazení pro maximální diagnostickou výtěžnost.</li></ul>",
      "pathogenesis": "<ul><li>segmenty krku</li></ul>",
      "macroscopy": "<ul><li>CT vyšetření pro dobré rozlišení</li><li>Vlastní lymfatické cévy se dnes nezobrazují4</li><li><strong>Lymfatické uzliny na UZ:</strong> rozměry - 8mm na 5mm (nad 10 už je patologická) tvar - ledvinný (benigní), kulovitý (zánětlivá)</li><li>homogenitu - hyperechogenní hilus, hypoechogenní kůra (když je hyperechogenní, odpovídá to infiltraci nádorem)</li></ul>",
      "microscopy": "<ul><li>prokrvení</li><li><strong>CT:</strong> prostory nedostupné pro UZ vlnění → retromandibulární, retrofaryngeální, parafaryngeální; metastatická uzlina na CT: sycení nehomogenní, větší jak 10mm, může být část nekrotická, utlačuje okolní struktury</li><li>segmenty krku</li></ul>",
      "clinical_legacy": "<ul><li>prokrvení</li><li><strong>CT:</strong> prostory nedostupné pro UZ vlnění → retromandibulární, retrofaryngeální, parafaryngeální; metastatická uzlina na CT: sycení nehomogenní, větší jak 10mm, může být část nekrotická, utlačuje okolní struktury</li><li>segmenty krku</li></ul>"
    },
    "quiz": [
      {
            "question": "Lymfom Hodgkinův (HL) versus non-Hodgkinův (NHL) – radiologické odlišení na CT/PET:",
            "options": [
                  "HL: typicky mediastinální postižení + kontinuální šíření uzlinami + mladí dospělí + RS buňky; NHL: extranodální postižení, nesouvislé šíření, starší pacienti, heterogenní skupina",
                  "NHL je vždy FDG-negativní; HL je FDG-avídní",
                  "HL postihuje výhradně dolní část těla (iliakální uzliny); NHL výhradně mediastinum",
                  "CT bez KL dostatečně odliší HL od NHL bez biopsie"
            ],
            "correct": 0,
            "explanation": "HL: mediastinum (přední), bulky disease, kontinuální šíření, B-příznaky, RS buňky. NHL: heterogenní – DLBCL (nejčastější agresivní), folliculární lymfom (indolentní), MALT. Extranodální postižení (GIT, CNS, kůže) typičtější pro NHL. Biopsie + histologie = diagnóza. PET/CT staging i response assessment."
      },
      {
            "question": "Rentgenová densitometrie (DXA) měří kostní denzitu a vyjadřuje výsledek jako T-skóre. Osteoporóza je definována T-skóre:",
            "options": [
                  "T ≤ −2,5 SD pod průměrem mladých dospělých; osteopenie: T = −1,0 až −2,5; norma: T > −1,0",
                  "T ≤ −1,0 SD (nižší práh definuje osteoporózu dříve)",
                  "T ≥ +2,5 SD (vyšší hustota kosti = osteoporóza sclerosans)",
                  "DXA T-skóre je vyjádřeno v Hounsfieldových jednotkách (HU), ne v SD"
            ],
            "correct": 0,
            "explanation": "DXA (Dual-energy X-ray Absorptiometry): T-skóre = SD od průměru mladé ženy. WHO klasifikace: norma > −1, osteopenie −1 až −2,5, osteoporóza ≤ −2,5. Z-skóre = srovnání s věkovou skupinou (pro sekundární osteoporózu). Nejčastěji LS páteř a krček femuru."
      }
]
  }
];
