// atlas_data.js - Kompletní multimediální atlas neurologického vyšetření
// Vypracováno podle fakultních podkladů LF OU (Základy neurologického vyšetření, Bednařík, Ambler)

const ATLAS_DATA = {
  title: "Multimediální atlas neurologického vyšetření",
  subtitle: "Praktický průvodce fyzikálním vyšetřením nervového systému: správná technika, hodnocení nálezu a video-demonstrace.",
  categories: [
    { id: "all", name: "Všechna vyšetření", icon: "🩺" },
    { id: "meningeal", name: "Meningeální jevy", icon: "🧠" },
    { id: "cranial", name: "Hlavové nervy (I–XII)", icon: "👁️" },
    { id: "motor", name: "Motorika & Paretické zkoušky", icon: "💪" },
    { id: "reflexes", name: "Šlachovo-okosticové reflexy", icon: "🔨" },
    { id: "pyramidal", name: "Pyramidové jevy (Babinski a spol.)", icon: "🦶" },
    { id: "cerebellar", name: "Mozeček & Koordinace", icon: "⚖️" }
  ],
  items: [
    // 1. MENINGEÁLNÍ JEVY
    {
      id: "men_opozice_sije",
      category: "meningeal",
      title: "Opozice šíje (Šíjové ztuhnutí / Nuchální rigidita)",
      categoryLabel: "Meningeální syndrom",
      icon: "🧠",
      technique: "Pacient leží uvolněně na zádech bez polštáře. Vyšetřující podloží týl pacienta oběma rukama a provádí pomalou pasivní flexi hlavy bradou k hrudníku (sternu).",
      normalFinding: "Volná pasivní flexe hlavy, brada se bez odporu a bolesti dotkne sterna (vzdálenost 0 cm).",
      pathologicalFinding: "Tvrdý odpor a bolestivost bránící flexi hlavy. Hodnotí se vzdálenost brady od sterna (např. 'opozice šíje na 3 prsty / na 4 cm').",
      clinicalSignificance: "Zánětlivé nebo hemoragické dráždění mozkových plen (meningitida, subarachnoidální krvácení).",
      pearl: "U kojenců a těžce imunosuprimovaných pacientů může být opozice šíje zcela nepřítomna i při fulminantní purulentní meningitidě!"
    },
    {
      id: "men_brudzinski",
      category: "meningeal",
      title: "Brudzińského příznaky (Horní a lícní)",
      categoryLabel: "Meningeální syndrom",
      icon: "🧠",
      technique: "Horní příznak: Při pasivní flexi šíje k hrudníku sledujeme reakci dolních končetin. Lícní příznak: Tlak na jařmový oblouk (os zygomaticum).",
      normalFinding: "Dolní končetiny zůstávají nehybně natažené na lůžku.",
      pathologicalFinding: "Horní: Dojde k reflexní obranné flexi obou dolních končetin v kyčlích a kolenou. Lícní: Reflexní flexe v loktech a zvednutí paží.",
      clinicalSignificance: "Meningeální dráždění. Reflexní zkrácení míchy a nervových kořenů pro snížení napětí zanícených plen.",
      pearl: "Brudzińského příznak je vysoce specifický pro meningitidu a SAH."
    },
    {
      id: "men_kernig",
      category: "meningeal",
      title: "Kernigův příznak",
      categoryLabel: "Meningeální syndrom",
      icon: "🦵",
      technique: "Pacient leží na zádech. Vyšetřující zvedne dolní končetinu s flektovanou kyčlí i kolenem do úhlu 90°. Následně se pokusí pasivně extenzí natáhnout bérec v kolenním kloubu do přímky.",
      normalFinding: "Plná extenze v koleni do 180° bez odporu a bolesti.",
      pathologicalFinding: "Reflexní spazmus hamstringů bránící extenzi v koleni při flexi v kyčli, doprovázený bolestí v zádech a stehně (úhel nedosáhne 135–180°).",
      clinicalSignificance: "Meningismus, zánět plen, masivní krvácení do likvorových cest.",
      pearl: "Kernigův příznak je oboustranný u meningeálního syndromu. Pokud je jednostranný, svědčí spíše pro radikulární syndrom L5/S1 (pseudokernig)!"
    },

    // 2. HLAVOVÉ NERVY
    {
      id: "cn_pupillary",
      category: "cranial",
      title: "Zornicové reflexy (Fotoreakce přímá, nepřímá a akomodace) – n. II & III",
      categoryLabel: "Hlavové nervy (CN II & III)",
      icon: "👁️",
      technique: "Přímá fotoreakce: Osvícení zornice úzkým světelným kuželem ze strany. Nepřímá (konsenzuální): Sledování zúžení druhostranné neosvícené zornice (s přepažením nosu rukou). Konvergence/akomodace: Sledování prstu přibližujícího se k nosu.",
      normalFinding: "Izokorie (zornice stejně široké 2–4 mm), rychlá a symetrická mióza obou zornic na světlo (přímá i nepřímá) a zúžení při pohledu na blízko.",
      pathologicalFinding: "Anizokorie (asymetrie šíře zornic), jednostranná mydriáza s areflexií (útlak n. III při temporálním kónusu), amaurotická areflexie (léze n. II – oko nereaguje na přímé světlo, ale reaguje konsenzuálně z druhého oka), Argyll-Robertsonova zornice (mióza nereaguje na světlo, ale reaguje na akomodaci – neurosyfilis).",
      clinicalSignificance: "Topika mozkového kmene, intrakraniální hypertenze s herniací uncus gyri hippocampi, léze optiku a okulomotoriky.",
      pearl: "Jednostranně široká nereagující zornice (mydriáza) u pacienta s traumatem hlavy a poruchou vědomí = Hrozící zástava oběhu z unkální herniace (únikový kužel tlačí na n. III v tentoriu) → STATIM dekomprese / Manitol!"
    },
    {
      id: "cn_facial",
      category: "cranial",
      title: "Vyšetření n. facialis (n. VII) – Centrální vs. Periferní paréza",
      categoryLabel: "Hlavové nervy (CN VII)",
      icon: "🙂",
      technique: "Vyzveme pacienta postupně k: 1. Svraštění čela nahoru, 2. Pevnému sevření očí (vyšetřující se pokusí víčka pasivně otevřít), 3. Vycenění zubů, 4. Nafouknutí tváří a písknutí.",
      normalFinding: "Symetrické vrásky na čele, víčka nelze překonat tahem, symetrické koutky úst a nasolabiální rýhy.",
      pathologicalFinding: "• PERIFERNÍ PARÉZA (Bellova obrna): Postižena celá polovina obličeje – vyhlazené čelo (nelze svraštit), lagoftalmus (nelze dovřít oko, Bellův fenomén – stočení bulbu vzhůru), pokleslý koutek úst.<br>• CENTRÁLNÍ PARÉZA (Kortikální/kapsulární iktus): Postižen POUZE DOLNÍ KVADRANT (pokles koutku úst), ČELO A OKO LZE SVRAŠTIT A ZAVŘÍT (díky oboustranné kortikonukleární inervaci horní větve n. VII)!",
      clinicalSignificance: "Rozlišení cévní mozkové příhody (centrální léze) od periferní parézy lícního nervu (borrelióza, zánět, chlad).",
      pearl: "Zlaté pravidlo: Pokud pacient s ochrnutým koutkem úst DOKÁŽE svraštit čelo → jde o CMP (centrální lézi)! Pokud čelo svraštit NEDOKÁŽE → jde o periferní obrnu n. VII."
    },
    {
      id: "cn_oculomotor",
      category: "cranial",
      title: "Okohybné nervy (n. III, IV, VI) a konjugované pohyby bulbů",
      categoryLabel: "Hlavové nervy (CN III, IV, VI)",
      icon: "👀",
      technique: "Pacient sleduje prst vyšetřujícího pohybující se ve tvaru písmene 'H' (do 6 kardinálních směrů pohledu) bez pohybu hlavy. Sledujeme rozsah pohybů, strabismus a nystagmus.",
      normalFinding: "Volné a souhybné pohyby bulbů ve všech směrech bez diplopie (dvojitého vidění) a bez nystagmu.",
      pathologicalFinding: "• Léze n. III: Ptóza víčka, mydriáza, divergentní strabismus (oko uchýleno zevně dolů).<br>• Léze n. IV: Diplopie při pohledu dolů a mediálně (chůze ze schodů).<br>• Léze n. VI: Konvergentní strabismus (oko nelze abdukovat zevně), diplopie při pohledu do strany léze.",
      clinicalSignificance: "Ischémie mozkového kmene, expanze kavernózního splavu, aneurysma a. communicans posterior (komprese n. III).",
      pearl: "Izolovaná náhlá paréza n. VI je nejčastějším nespecifickým příznakem intrakraniální hypertenze (nerv má nejdelší intrakraniální průběh po bazi lební a je snadno stlačen)."
    },
    {
      id: "cn_bulbar",
      category: "cranial",
      title: "Kaudální hlavové nervy (n. IX, X, XII) – Bulbární vs. Pseudobulbární syndrom",
      categoryLabel: "Hlavové nervy (CN IX, X, XII)",
      icon: "👅",
      technique: "1. Fonace 'ááá' – sledujeme symetrii zvedání měkkého patra a patrových oblouků (oponový fenomén). 2. Dávicí reflex (dotyk špátlí na zadní stěnu hltanu). 3. Plazení jazyka ve střední čáře.",
      normalFinding: "Symetrické zvednutí patra, výbavný dávicí reflex, jazyk plazí rovně ve střední čáře bez atrofií a fascikulací.",
      pathologicalFinding: "• Léze n. IX a X: Pokles patrového oblouku (uchýlení uvuly ke zdravé straně - oponový fenomén), dysfagie (tekutiny vytékají nosem), dysfonie (chrapot).<br>• Léze n. XII: Deviace jazyka k nemocné straně, svalová atrofie a fascikulace poloviny jazyka.",
      clinicalSignificance: "Wallenbergův syndrom, amyotrofická laterální skleróza (ALS), bulbární forma myastenie, tumory baze lební.",
      pearl: "Bulbární syndrom (léze periferního motoneuronu v oblongatě) = vyhaslý dávicí reflex + atrofie a fascikulace jazyka. Pseudobulbární syndrom (oboustranná korová léze) = ZVÝŠENÝ dávicí a masseterový reflex + emoční labilita (spontánní záchvaty pláče/smíchu) bez atrofií jazyka!"
    },

    // 3. MOTORIKA A PARETICKÉ ZKOUŠKY
    {
      id: "mot_mingazzini_hk",
      category: "motor",
      title: "Mingazziniho paretická zkouška na horních končetinách",
      categoryLabel: "Motorika & Paretické zkoušky",
      icon: "✋",
      technique: "Pacient vsedě nebo vleže předpaží obě horní končetiny v úhlu 90° (vleže 60°) dlaněmi vzhůru a roztaženými prsty a zavře oči na dobu 10–20 sekund.",
      normalFinding: "Obě končetiny udrží stabilní polohu v předpažení bez poklesu po celou dobu testu.",
      pathologicalFinding: "Paretická končetina postupně klesá k podložce, pronuje (Dufourův fenomén) a prsty se flektují.",
      clinicalSignificance: "Detekce i velmi lehké (latentní) centrální nebo periferní parézy HK.",
      pearl: "Kombinace poklesu a současné pronace předloktí (Dufour) je vysoce citlivou známkou centrální pyramidové léze v kontralaterální hemisféře!"
    },
    {
      id: "mot_mingazzini_dk",
      category: "motor",
      title: "Mingazziniho a Barrého paretická zkouška na dolních končetinách",
      categoryLabel: "Motorika & Paretické zkoušky",
      icon: "🦵",
      technique: "Mingazzini DK: Pacient leží na zádech, flektuje obě DK v kyčlích a kolenou do úhlu 90° tak, aby se bérce nedotýkaly, se zavřenýma očima na 30 s. Barré: Pacient leží na břiše a flektuje kolena do úhlu 45°.",
      normalFinding: "Udrží obě DK ve stabilní flexi 90° (resp. 45°) po dobu 30 sekund bez poklesu.",
      pathologicalFinding: "Paretická končetina nevydrží zátěž a bérec či stehno klesají k lůžku.",
      clinicalSignificance: "Odhalení latentní parézy dolní končetiny u CMP, transverzální myelitidy nebo kořenových syndromů L4–S1.",
      pearl: "U funkčních (psychogenních) poruch končetina padá skokovitě a prudce, zatímco u organické centrální parézy plynule klesá s postupným vyčerpáním."
    },

    // 4. REFLEXOLOGIE
    {
      id: "ref_bicipital",
      category: "reflexes",
      title: "Bicipitální reflex (C5)",
      categoryLabel: "Šlachovo-okosticové reflexy HK",
      icon: "🔨",
      technique: "Předloktí pacienta leží volně v mírné flexi v lokti na předloktí vyšetřujícího. Vyšetřující položí svůj palec na šlachu m. biceps brachii v loketní jamce a klepne kladívkem na svůj palec.",
      normalFinding: "Středně živá flexe předloktí v lokti (2+).",
      pathologicalFinding: "Vyhasnutí/areflexie (léze segmentu C5, kořene C5 nebo n. musculocutaneus). Hyperreflexie (léze centrálního motoneuronu nad segmentem C5).",
      clinicalSignificance: "Segmentální diagnostika krční míchy a kořenových syndromů C5.",
      pearl: "Inervace reflexního oblouku: n. musculocutaneus, segment C5 (částečně C6)."
    },
    {
      id: "ref_tricipital",
      category: "reflexes",
      title: "Tricipitální reflex (C7)",
      categoryLabel: "Šlachovo-okosticové reflexy HK",
      icon: "🔨",
      technique: "Vyšetřující zvedne paži pacienta do horizontály a nechá předloktí volně viset dolů v pravém úhlu. Poklep vede přímo na šlachu m. triceps brachii 2–3 cm nad olekranem.",
      normalFinding: "Zřetelná extenze v loketním kloubu (2+).",
      pathologicalFinding: "Vyhasnutí (radikulopatie C7 – nejčastější krční hernie disku C6/C7). Hyperreflexie (spastický syndrom).",
      clinicalSignificance: "Topika kořene C7 a n. radialis.",
      pearl: "Vyhaslý tricipitální reflex s normálním bicipitálním reflexem spolehlivě lokalizuje lézi do kořene C7!"
    },
    {
      id: "ref_patellar",
      category: "reflexes",
      title: "Patelární reflex (L4 / L2–L4)",
      categoryLabel: "Šlachovo-okosticové reflexy DK",
      icon: "🔨",
      technique: "Pacient sedí na vyšetřovacím stole s volně visícími bérci (nebo vleže vyšetřující podloží obě kolena). Poklep kladívkem směřuje na ligamentum patellae pod čéškou.",
      normalFinding: "Extenze bérce v kolenním kloubu stahem m. quadriceps femoris (2+).",
      pathologicalFinding: "Areflexie (radikulopatie L4, léze n. femoralis, polyneuropatie, tabes dorsalis). Hyperreflexie s patelárním klonem (centrální spastická paréza).",
      clinicalSignificance: "Vyšetření n. femoralis a lumbálních segmentů L2–L4.",
      pearl: "Pokud je reflex špatně výbavný, použijte Jendrassikův manévr (pacient zaklesne prsty obou rukou do sebe a na povel silně táhne od sebe)!"
    },
    {
      id: "ref_achilles",
      category: "reflexes",
      title: "Reflex Achillovy šlachy (S1 / L5–S2)",
      categoryLabel: "Šlachovo-okosticové reflexy DK",
      icon: "🔨",
      technique: "Pacient leží na zádech (nebo klečí na židli). Vyšetřující jednou rukou mírně provede pasivní dorzální flexi nohy v hleznu pro napnutí šlachy a klepne kladívkem na Achillovu šlachu.",
      normalFinding: "Plantární flexe nohy v hlezenním kloubu stahem m. triceps surae (2+).",
      pathologicalFinding: "Areflexie (radikulopatie S1 – hernie disku L5/S1, polyneuropatie – např. diabetická). Hyperreflexie s nožním klonem.",
      clinicalSignificance: "Klíčový reflex pro záchyt diskogenní léze S1 a časné diabetické distální polyneuropatie.",
      pearl: "Vyhaslý reflex Achillovy šlachy bývá nejčasnějším objektivním nálezem u symetrické polyneuropatie ještě před rozvojem motorické slabosti."
    },

    // 5. PYRAMIDOVÉ JEVI
    {
      id: "pyr_babinski",
      category: "pyramidal",
      title: "Babinského reflex (Zlatý standard pyramidových iritačních jevů)",
      categoryLabel: "Pyramidové iritační jevy",
      icon: "🦶",
      technique: "Tupým hrotem (např. opačným koncem neurologického kladívka nebo klíčem) vedeme plynulý, mírně tlakový tah po zevní hraně plosky od paty směrem k malíku a pak obloukem pod báze prstů k palci.",
      normalFinding: "Plantární flexe prstů (sehnutí prstů dolů do plosky) nebo žádná reakce.",
      pathologicalFinding: "TONICKÁ EXTENZE (DORZÁLNÍ FLEXE) PALCE NAHORU doprovázená vějířovitým rozevřením (abdukcí) ostatních prstů.",
      clinicalSignificance: "Patognomická známka léze centrálního motoneuronu (tractus corticospinalis) kdekoliv v jeho průběhu (kůra, capsula interna, kmen, mícha).",
      pearl: "Fyziologicky je Babinského reflex přítomen u kojenců a batolat do cca 1–2 let věku z důvodu nezralé myelinizace pyramidové dráhy. U dospělého je VŽDY jednoznačně patologický!"
    },
    {
      id: "pyr_oppenheim_chaddock",
      category: "pyramidal",
      title: "Oppenheimův a Chaddockův příznak (Extenční pyramidové jevy)",
      categoryLabel: "Pyramidové iritační jevy",
      icon: "🦶",
      technique: "• Chaddock: Podráždění kůže zevního okraje nohy pod zevním kotníkem směrem k malíku.<br>• Oppenheim: Tlakový tah klouby flektovaného ukazováku a prostředníku po přední hraně tibie od kolene k hleznu.",
      normalFinding: "Bez reakce nebo lehká plantární flexe.",
      pathologicalFinding: "Tonická dorzální extenze palce nohy nahoru (stejná odpověď jako u Babinského).",
      clinicalSignificance: "Potvrzení léze pyramidové dráhy, zvláště užitečné u pacientů s hyperestézií plosky, kteří při Babinském uhýbají celou nohou.",
      pearl: "Extenční skupina jevů (Babinski, Chaddock, Oppenheim, Gordon, Schaeffer) má stejnou patofyziologickou odpověď – dorzální flexi palce."
    },
    {
      id: "pyr_rossolimo",
      category: "pyramidal",
      title: "Rossolimův příznak (Flekční pyramidový jev)",
      categoryLabel: "Pyramidové iritační jevy",
      icon: "🦶",
      technique: "Vyšetřující provede rychlé, pružné poklepání bříšky svých prstů (nebo kladívkem) na plantární plochu bříšek prstů nohy pacienta.",
      normalFinding: "Žádná reakce.",
      pathologicalFinding: "Rychlá reflexní plantární flexe všech prstů nohy.",
      clinicalSignificance: "Spastický pyramidový syndrom, zvýšená neuromuskulární dráždivost centrálního původu.",
      pearl: "Na horní končetině je analogem Rossolima Trömnerův a Hoffmannův příznak."
    },

    // 6. MOZEČEK A KOORDINACE
    {
      id: "cer_finger_nose",
      category: "cerebellar",
      title: "Zkouška prst-nos (Cílení a dysmetrie na HK)",
      categoryLabel: "Mozečkové vyšetření",
      icon: "🎯",
      technique: "Pacient v maximálním upažení pomalu a plynule přibližuje ukazovák ke špičce svého nosu, nejprve s otevřenýma a poté se zavřenýma očima. Test opakujeme na obou stranách.",
      normalFinding: "Plynulý, hladký pohyb přesně zacílený na špičku nosu bez třesu.",
      pathologicalFinding: "• Intenční třes: Kinetický třes zhoršující se těsně před dosažením cíle.<br>• Dysmetrie / Hypermetrie: Přestřelování cíle (prst mine nos a narazí do tváře).<br>• Asinergie / Rozpad pohybu.",
      clinicalSignificance: "Léze ipsilaterální mozečkové hemisféry (neocerebellum).",
      pearl: "Při mozečkové lézi je třes a přestřelování přítomno už při OTEVŘENÝCH očích. Při zadněprovazcové senzorické ataxii je pohyb s otevřenýma očima dobrý a zhorší se až po ZAVŘENÍ očí!"
    },
    {
      id: "cer_heel_knee",
      category: "cerebellar",
      title: "Zkouška pata-koleno (Koordinace na DK)",
      categoryLabel: "Mozečkové vyšetření",
      icon: "🦵",
      technique: "Pacient leží na zádech. Vyzveme ho, aby zvedl patu jedné DK vysoko do vzduchu, přesně se trefil na koleno druhé DK a poté plynule sjel patou po přední hraně tibie až k hleznu.",
      normalFinding: "Přesné zacílení paty na koleno a plynulý lineární sjezd po tibii.",
      pathologicalFinding: "Pata míjí koleno (hypermetrie), sjíždění po tibii je trhavé a pata sklouzává do stran (ataxie DK).",
      clinicalSignificance: "Ipsilaterální mozečková léze, roztroušená skleróza, spinocerebelární ataxie.",
      pearl: "Nález na končetinách ukazuje na postižení stejnostranné mozečkové hemisféry (mozečkové dráhy jsou dvojitě zkřížené = funkčně homolaterální)."
    },
    {
      id: "cer_diadochokinesis",
      category: "cerebellar",
      title: "Diadochokinéza (Rychlé alternující pohyby)",
      categoryLabel: "Mozečkové vyšetření",
      icon: "🔄",
      technique: "Pacient provádí co nejrychleji střídavou pronaci a supinaci předloktí obou rukou (jako při šroubování žárovek nebo plácání dlaněmi a hřbety o stehna).",
      normalFinding: "Rychlé, plynulé, rytmické a symetrické střídání pohybů.",
      pathologicalFinding: "Adiadochokinéza nebo dysdiadochokinéza: Pohyb je pomalý, neobratný, arytmický a zadrhávající na straně léze.",
      clinicalSignificance: "Neocerebelární syndrom.",
      pearl: "Vyšetřujte vždy obě ruce současně – asymetrie v rychlosti a plynulosti je okamžitě patrná."
    },
    {
      id: "cer_romberg",
      category: "cerebellar",
      title: "Rombergův test (Stoj o úzké bázi & Senzorická vs. Mozečková vs. Vestibulární ataxie)",
      categoryLabel: "Mozeček & Rovnováha",
      icon: "🚶",
      technique: "Pacient stojí se spojenými chodidly (špičky i paty u sebe) a předpaženými pažemi. 1. Fáze: S otevřenýma očima (Romberg I). 2. Fáze: Se zavřenýma očima po dobu 30 s (Romberg II). 3. Fáze: Tandemový stoj pata-špička (Romberg III).",
      normalFinding: "Stabilní stoj bez výrazných výchylek těla.",
      pathologicalFinding: "• MOZEČKOVÁ ATAXIE (Vermis): Nestabilita a titubace trupu již při OTEVŘENÝCH očích, zavření očí stav výrazně nezhorší (Romberg negativní / mozečkový).<br>• SENZORICKÁ / TABICKÁ ATAXIE (Zadní provazce): S otevřenýma očima stojí dobře, po ZAVŘENÍ očí dojde k okamžitému pádu do jakéhokoliv směru (Romberg pozitivní!).<br>• VESTIBULÁRNÍ ATAXIE: Pád s latencí k nemocné straně (ke straně hypofunkčního labyrintu).",
      clinicalSignificance: "Diferenciální diagnostika ataxie: Mozeček vs. Mícha (zadní provazce) vs. Vnitřní ucho (vestibulární aparát).",
      pearl: "Klíčový státnicový chyták: 'Rombergův příznak' hodnotí vliv zrakové kontroly na rovnováhu. Pozitivní Romberg znamená pád AŽ PO ZAVŘENÍ OČÍ → je typický pro zadní provazce míšní (funikulární myelóza, deficit B12, neurosyfilis), NIKOLIV pro mozeček!"
    }
  ]
};

// Export pro browser
if (typeof window !== "undefined") {
  window.ATLAS_DATA = ATLAS_DATA;
}
