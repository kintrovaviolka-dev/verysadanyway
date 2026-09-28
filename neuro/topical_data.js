// topical_data.js - Databáze pro Topický diagnostický trenažér ("Kde je léze? → Co je léze?")
// Podle kurikula neurologie 4. ročníku LF OU a učebnic Bednařík, Ambler, Růžička

const TOPICAL_DATA = {
  // 1. KATEGORIE SYMPTOMŮ PRO VÝBĚR
  symptomCategories: [
    {
      id: "motor",
      name: "Motorika & Reflexy",
      icon: "💪",
      description: "Poruchy hybnosti, svalový tonus, reflexy a pyramidové jevy",
      symptoms: [
        { id: "hemiparesis_spastic", name: "Spastická hemiparéza / hemiplegie (kontralaterální)", icon: "⚡", weight: 3 },
        { id: "hemiparesis_homogenous", name: "Rovnoměrná hemiparéza (facio-brachio-krurální stejnoměrná)", icon: "⚖️", weight: 3 },
        { id: "hemiparesis_brachiocranial", name: "Převaha na obličeji a HK (faciobrachiální paréza)", icon: "✋", weight: 3 },
        { id: "hemiparesis_crural", name: "Převaha na DK (krurální paréza)", icon: "🦵", weight: 3 },
        { id: "paraparesis_spastic", name: "Spastická paraparéza / paraplegie obou DK", icon: "♿", weight: 3 },
        { id: "quadriparesis_spastic", name: "Spastická kvadruparéza / kvadruplegie", icon: "⚠️", weight: 3 },
        { id: "flaccid_monoparesis_hk", name: "Chabá paréza / plegie jedné HK (svalová atrofie, hyporeflexie)", icon: "📉", weight: 3 },
        { id: "flaccid_monoparesis_dk", name: "Chabá paréza / plegie jedné DK (svalová atrofie, hyporeflexie)", icon: "📉", weight: 3 },
        { id: "flaccid_paraparesis_asym", name: "Asymetrická chabá paréza DK (areflexie L2–S2)", icon: "🦵", weight: 3 },
        { id: "pyramidal_signs_pos", name: "Pozitivní pyramidové jevy spastické (Babinski, Rossolimo)", icon: "🦶", weight: 2 },
        { id: "fasciculations_atrophy", name: "Fascikulace & časné svalové atrofie", icon: "⚡", weight: 3 },
        { id: "wrist_drop", name: "Obrna extenzorů zápěstí a prstů ('padající ruka')", icon: "✋", weight: 3 },
        { id: "claw_hand", name: "Drápovité postavení prstů ('drápovitá ruka', atrofie interoseí)", icon: "🖐️", weight: 3 },
        { id: "ape_or_preachers_hand", name: "Obrna flexe prstů / thenaru ('přísahající / opičí ruka')", icon: "✋", weight: 3 },
        { id: "foot_drop", name: "Váznoucí dorzální flexe nohy a prstů ('kohoutí chůze')", icon: "👞", weight: 3 },
        { id: "foot_inversion_weakness", name: "Oslabená inverze (supinace) nohy (m. tibialis posterior)", icon: "🦶", weight: 3 },
        { id: "foot_eversion_weakness", name: "Oslabená everze (pronace) nohy při zachované inverzi", icon: "🦶", weight: 3 },
        { id: "plantar_flexion_weakness", name: "Oslabená plantární flexe nohy (nemožnost stoje na špičkách)", icon: "🩰", weight: 3 },
        { id: "proximal_weakness_girdle", name: "Symetrická proximální pletencová slabost (Gowersovo znamení)", icon: "🏋️", weight: 3 },
        { id: "fluctuating_fatigue", name: "Fluktuující svalová slabost se zhoršením po námaze / k večeru", icon: "⏳", weight: 3 }
      ]
    },
    {
      id: "sensory",
      name: "Senzitivita & Bolest",
      icon: "🧠",
      description: "Povrchové čití, polohocit, disociace a kořenové distribuce",
      symptoms: [
        { id: "hemihypesthesia_all", name: "Hemihipestézie všech modalit (kontralaterální)", icon: "🌓", weight: 3 },
        { id: "sensory_dissociation_syringo", name: "Disociovaná porucha čití (ztráta bolesti a tepla, zachovaný polohocit a dotyk)", icon: "🔥", weight: 4 },
        { id: "sensory_dissociation_tabic", name: "Tabická disociace (ztráta polohocitu a vibrace, zachovaná bolest/teplo)", icon: "📳", weight: 4 },
        { id: "sensory_level_trunk", name: "Hladina poruchy čití na trupu (dermatom Th4 / Th10 atd.)", icon: "📏", weight: 4 },
        { id: "saddle_anesthesia", name: "Sedlovitá anestezie (perianogenitální oblast S3–S5)", icon: "🎯", weight: 4 },
        { id: "glove_stocking_sensory", name: "Ponožkovitá a rukavicovitá distální hypestézie", icon: "🧦", weight: 3 },
        { id: "radicular_pain_c6_c7", name: "Radikulární bolest a parestézie HK (dermatom C6 / C7)", icon: "⚡", weight: 3 },
        { id: "radicular_pain_l5_s1", name: "Krutá radikulární bolest DK (vyzařování L5 anterolat. / S1 zadní strana)", icon: "⚡", weight: 3 },
        { id: "cape_like_sensory", name: "Plášťovitá distribuce poruchy citlivosti pro teplo/chlad (ramena a HK)", icon: "🧥", weight: 4 },
        { id: "crossed_sensory_deficit", name: "Zkřížená porucha čití (homolaterálně na tváři, kontralaterálně na těle)", icon: "🔀", weight: 4 }
      ]
    },
    {
      id: "cranial",
      name: "Hlavové nervy & Kmen",
      icon: "👁️",
      description: "Okohybné nervy, lícní nerv, polykání, jazyk a zornice",
      symptoms: [
        { id: "cn3_palsy", name: "Léze n. III (ptóza, mydriáza s areflexií, divergentní strabismus)", icon: "👁️", weight: 4 },
        { id: "cn6_palsy", name: "Léze n. VI (konvergentní strabismus, diplopie při pohledu do strany)", icon: "👀", weight: 3 },
        { id: "facial_peripheral", name: "Periferní paréza n. VII (celá polovina tváře vč. neschopnosti zavřít oko a svraštit čelo)", icon: "😐", weight: 4 },
        { id: "facial_central", name: "Centrální paréza n. VII (pouze dolní kvadrant obličeje, čelo lze svraštit)", icon: "🙂", weight: 3 },
        { id: "horner_syndrome", name: "Hornerova trias (mióza, ptóza, enoftalmus homolaterálně)", icon: "🌘", weight: 4 },
        { id: "dysphagia_dysphonia", name: "Dysfagie & dysfonie / dysartrie (léze n. IX, X - bulbární/pseudobulbární)", icon: "🗣️", weight: 3 },
        { id: "cn12_deviation", name: "Léze n. XII (deviace jazyka při plazení k postižené straně, atrofie)", icon: "👅", weight: 3 },
        { id: "corneal_reflex_loss", name: "Vyhaslý korneální reflex (léze senzitivní V1 nebo motorické VII)", icon: "✨", weight: 3 },
        { id: "vertical_gaze_palsy", name: "Obrna vertikálního pohledu vzhůru (Parinaudův syndrom)", icon: "⬆️", weight: 4 },
        { id: "horizontal_gaze_palsy", name: "Obrna sdruženého horizontálního pohledu (frontální centrum nebo PPRF v pontu)", icon: "↔️", weight: 3 }
      ]
    },
    {
      id: "cortical",
      name: "Kůra & Vyšší funkce",
      icon: "🗣️",
      description: "Řeč, zrakové pole, gnostické a praktické funkce",
      symptoms: [
        { id: "broca_aphasia", name: "Brocova motorická afázie (váznoucí exprese, zachované porozumění)", icon: "🤐", weight: 4 },
        { id: "wernicke_aphasia", name: "Wernickeova senzorická afázie (plynulý žargon, těžká porucha porozumění)", icon: "📻", weight: 4 },
        { id: "global_aphasia", name: "Globální afázie (ztráta exprese i porozumění)", icon: "🔇", weight: 4 },
        { id: "neglect_syndrome", name: "Hemi-neglect syndrom (opomíjení levé poloviny prostoru a těla)", icon: "🚫", weight: 4 },
        { id: "homonymous_hemianopsia", name: "Homonymní hemianopsie (kontralaterální výpadek poloviny zorného pole)", icon: "🕶️", weight: 3 },
        { id: "bitemporal_hemianopsia", name: "Bitemporální hemianopsie (výpadek zevních polovin zorného pole)", icon: "👓", weight: 4 },
        { id: "apraxia_agnosia", name: "Apraxie (ztráta naučených pohybů) nebo Agnozie", icon: "🧩", weight: 3 },
        { id: "gerstmann_syndrome", name: "Gerstmannův syndrom (akalkulie, agrafie, prstní agnozie, pravo-levá dezorientace)", icon: "🔢", weight: 4 }
      ]
    },
    {
      id: "cerebellar",
      name: "Mozeček & Koordinace",
      icon: "⚖️",
      description: "Ataxie, dysmetrie, třes a vestibulární rovnováha",
      symptoms: [
        { id: "cerebellar_hemiataxia", name: "Homolaterální končetinová ataxie a dysmetrie (prst-nos, pata-koleno)", icon: "🎯", weight: 4 },
        { id: "cerebellar_truncal_ataxia", name: "Trunkální / axiální ataxie (nestabilita sedu a stoje, titubace trupu)", icon: "🚶", weight: 4 },
        { id: "intention_tremor", name: "Intenční třes (zhoršující se při přiblížení k cíli)", icon: "〰️", weight: 3 },
        { id: "dysdiadochokinesia", name: "Dysdiadochokinéza (váznoucí rychlé alternující pohyby)", icon: "🔄", weight: 3 },
        { id: "cerebellar_nystagmus", name: "Mozečkový nystagmus (hrubý, směr pohledu)", icon: "👀", weight: 3 },
        { id: "resting_tremor_parkinson", name: "Klidový třes ('počítání peněz') + rigidita olověné trubky + hypokineze", icon: "🪙", weight: 4 }
      ]
    },
    {
      id: "sphincter",
      name: "Sfinktery & Autonomní systém",
      icon: "🚻",
      description: "Kontinence moči a stolice, erektilní funkce a vegetativum",
      symptoms: [
        { id: "spastic_bladder_urgency", name: "Spastický močový měchýř / imperativní mikce / míšní automatismus", icon: "⚡", weight: 3 },
        { id: "atonic_bladder_retention", name: "Atonický měchýř / retence moči s paradoxním přetékáním (ischuria paradoxa)", icon: "🛑", weight: 4 },
        { id: "fecal_incontinence", name: "Inkontinence stolice a ztráta tonu análního svěrače (anální areflexie)", icon: "🚼", weight: 3 }
      ]
    }
  ],

  // 2. PROFILY TOPICKÝCH SYNDROMŮ (LOKALIZAČNÍ DATABÁZE)
  syndromes: [
    // --- KŮRA ---
    {
      id: "cortex_mca_dominant",
      name: "Kortikální léze v povodí ACM (dominantní levá hemisféra)",
      axisLevel: "Kůra (Cortex cerebri)",
      levelCategory: "cortex",
      vascularTerritory: "a. cerebri media (ACM) - levostranná",
      description: "Postižení motorické/senzorické kůry konvexity a řečových center v dominantní hemisféře.",
      requiredAny: ["broca_aphasia", "wernicke_aphasia", "global_aphasia"],
      typicalSymptoms: ["hemiparesis_brachiocranial", "facial_central", "hemihypesthesia_all", "homonymous_hemianopsia", "broca_aphasia", "wernicke_aphasia", "pyramidal_signs_pos"],
      etiology: ["Ischemický iktus v povodí ACM (kardioembolie, aterotrombóza)", "Intracerebrální hemoragie (vaskulární malformace, hypertenze)", "Glioblastom nebo mozková metastáza", "Meningeom konvexity"],
      differentiatingPearls: "Faciobrachiální predilekce hemiparézy (kůra pro DK je v interhemisférické fisuře - ACA). Přítomnost afázie jednoznačně lokalizuje lézi do dominantní kůry a vylučuje subkortikální kapsulární lézi!",
      investigationOfChoice: "Akutní NCCT mozku + CTA magistrálních a intrakraniálních tepen (posouzení uzávěru M1/M2 úseku ACM). Následně MRI mozku (DWI/FLAIR)."
    },
    {
      id: "cortex_mca_nondominant",
      name: "Kortikální léze v povodí ACM (nedominantní pravá hemisféra)",
      axisLevel: "Kůra (Cortex cerebri)",
      levelCategory: "cortex",
      vascularTerritory: "a. cerebri media (ACM) - pravostranná",
      description: "Postižení pravé hemisféry s těžkou poruchou vnímání vlastního těla a prostoru (syndrom neglect).",
      requiredAny: ["neglect_syndrome", "apraxia_agnosia"],
      typicalSymptoms: ["hemiparesis_brachiocranial", "facial_central", "hemihypesthesia_all", "neglect_syndrome", "homonymous_hemianopsia", "pyramidal_signs_pos"],
      etiology: ["Ischemická CMP v povodí pravé ACM", "Intracerebrální krvácení", "Expanzivní proces parietálního laloku"],
      differentiatingPearls: "Hemi-neglect syndrom (anozognózie, asomatognózie - pacient nepoznává svou levou ruku a ignoruje levou polovinu prostoru). Řeč je zachována!",
      investigationOfChoice: "NCCT mozku + CTA (CT perfuze pro stanovení penumbry a mismatchu)."
    },
    {
      id: "cortex_aca",
      name: "Kortikální léze v povodí ACA (Lobus frontalis & gyri mediales)",
      axisLevel: "Kůra (Cortex cerebri)",
      levelCategory: "cortex",
      vascularTerritory: "a. cerebri anterior (ACA)",
      description: "Postižení motorické kůry na mediální ploše hemisféry (motorický homunculus pro dolní končetinu) a prefrontálního kortexu.",
      requiredAny: ["hemiparesis_crural"],
      typicalSymptoms: ["hemiparesis_crural", "pyramidal_signs_pos", "spastic_bladder_urgency", "apraxia_agnosia"],
      etiology: ["Ischemická CMP v teritoriu ACA", "Parasagitální meningeom (falx cerebri)", "Frontální tumor / absces"],
      differentiatingPearls: "Izolovaná nebo výrazně převládající spastická paréza DK (krurální paréza) s ušetřením HK a obličeje. Často spojena s frontální psychopatologií (abulie, moria, úchopové reflexy) a centrální inkontinencí.",
      investigationOfChoice: "MRI mozku (sagilátní a koronální T1/T2/FLAIR) nebo CT mozku."
    },
    {
      id: "chiasma_opticum",
      name: "Léze chiazmatu zrakových nervů (Chiasma opticum)",
      axisLevel: "Diencefalon / Selární oblast",
      levelCategory: "cortex",
      vascularTerritory: "Diencefalické cévní větve / Hypofyzární artérie",
      description: "Útlak křížících se nazálních vláken zrakové dráhy v chiasma opticum.",
      requiredAny: ["bitemporal_hemianopsia"],
      typicalSymptoms: ["bitemporal_hemianopsia"],
      etiology: ["Adenom hypofýzy (makroadenom s supraselární propagací)", "Kraniofaryngeom", "Meningeom tuberculum sellae", "Aneurysma a. carotis interna v sinus cavernosus"],
      differentiatingPearls: "Bitemporální heteronymní hemianopsie (pacient nevidí do stran / naráží do futer). Žádná motorická ani senzitivní paréza na končetinách!",
      investigationOfChoice: "Cílená MRI selární krajiny s gadoliniem + perimetr (zorné pole) + endokrinologický profil hypofýzy."
    },

    // --- CAPSULA INTERNA ---
    {
      id: "capsula_interna",
      name: "Léze capsula interna (Crus posterius & Genu)",
      axisLevel: "Subkortikální oblast (Capsula interna)",
      levelCategory: "capsula",
      vascularTerritory: "Aa. lenticulostriatae (větve ACM) / A. choroidea anterior",
      description: "Hustá koncentrace pyramidových a thalamokortikálních vláken v úzkém prostoru zadního raménka capsula interna.",
      requiredAny: ["hemiparesis_homogenous"],
      typicalSymptoms: ["hemiparesis_homogenous", "facial_central", "hemihypesthesia_all", "pyramidal_signs_pos"],
      etiology: ["Lakunární ischemický iktus (hypertenzní mikroangiopatie)", "Typické hypertenzní bazálně-gangliové krvácení", "Roztroušená skleróza (demyelinizační plaka)"],
      differentiatingPearls: "Přísně homogenní (stejnoměrná) těžká spastická hemiparéza facio-brachio-krurální BEZ kortikálních příznaků (bez afázie, bez neglectu). Všechny dráhy jsou na malém prostoru stlačeny naráz.",
      investigationOfChoice: "MRI mozku (DWI detekuje i drobné 3mm lakunární infarkty) nebo CT mozku k vyloučení krvácení."
    },

    // --- MOZKOVÝ KMEN (ALTERNUJÍCÍ SYNDROMY) ---
    {
      id: "weber_syndrome",
      name: "Weberův syndrom (Alternující mezencefalická hemiplegie)",
      axisLevel: "Mozkový kmen (Mezencefalon - Crus cerebri)",
      levelCategory: "brainstem",
      vascularTerritory: "A. cerebri posterior (ACP) / Větve a. basilaris",
      description: "Léze ventrální části mezencefala zasahující fascikulus n. oculomotorius a tractus corticospinalis.",
      requiredAny: ["cn3_palsy"],
      typicalSymptoms: ["cn3_palsy", "hemiparesis_spastic", "facial_central", "pyramidal_signs_pos"],
      etiology: ["Ischemický iktus v povodí a. cerebri posterior / paramediálních větví a. basilaris", "Tentoriální herniace (únikový kužel uncus gyri hippocampi) utlačující n. III a pedunculus cerebri", "Mezencefalický gliom"],
      differentiatingPearls: "Klasická alternující hemiplegie: HOMOLATERÁLNÍ obrna n. III (ptóza, mydriáza, divergentní strabismus) + KONTRALATERÁLNÍ spastická hemiparéza!",
      investigationOfChoice: "Akutní MRI mozku (T1, T2, FLAIR, DWI) nebo urgentní CT mozku."
    },
    {
      id: "millard_gubler",
      name: "Millardův-Gublerův syndrom (Alternující pontinní hemiplegie)",
      axisLevel: "Mozkový kmen (Pons Varoli - ventrokaudální část)",
      levelCategory: "brainstem",
      vascularTerritory: "Větve a. basilaris / A. cerebelli inferior anterior (AICA)",
      description: "Léze kaudálního pontu postihující jádro/nerv n. VII a tractus pyramidalis.",
      requiredAny: ["facial_peripheral"],
      typicalSymptoms: ["facial_peripheral", "hemiparesis_spastic", "pyramidal_signs_pos", "cn6_palsy"],
      etiology: ["Ischemická CMP v povodí a. basilaris / AICA", "Kmenová roztroušená skleróza", "Pontinní gliom / kavernom"],
      differentiatingPearls: "HOMOLATERÁLNÍ PERIFERNÍ paréza lícního nervu n. VII (celá polovina obličeje vč. čela!) + KONTRALATERÁLNÍ spastická hemiparéza končetin. (Pokud je přidružena i léze n. VI, jde o Fovilleův syndrom).",
      investigationOfChoice: "MRI mozku a mozkového kmene."
    },
    {
      id: "wallenberg_syndrome",
      name: "Wallenbergův syndrom (Syndrom dorsolaterální oblongaty)",
      axisLevel: "Mozkový kmen (Medulla oblongata - dorsolaterální část)",
      levelCategory: "brainstem",
      vascularTerritory: "A. cerebelli inferior posterior (PICA) / A. vertebralis",
      description: "Ischémie dorzolaterální míchy a oblongaty v povodí PICA.",
      requiredAny: ["crossed_sensory_deficit", "horner_syndrome"],
      typicalSymptoms: ["crossed_sensory_deficit", "horner_syndrome", "dysphagia_dysphonia", "cerebellar_hemiataxia", "cerebellar_nystagmus", "corneal_reflex_loss"],
      etiology: ["Disekce vertebrální tepny (časté u mladých po traumatu krku)", "Aterotrombotický uzávěr PICA nebo a. vertebralis"],
      differentiatingPearls: "ZKŘÍŽENÁ porucha čití: Ztráta bolesti/tepla HOMOLATERÁLNĚ na obličeji (ncl. spinalis n. V) a KONTRALATERÁLNĚ na těle (tr. spinothalamicus)! Dále homolaterální Hornerův syndrom, mozečková ataxie a dysfagie/dysfonie (ncl. ambiguus n. IX/X). Pyramidová dráha je UŠETŘENA (leží ventrálně)!",
      investigationOfChoice: "MRI mozku (DWI detekuje dorzolaterální infarkt) + CTA/MRA krčních a vertebrálních tepen k vyloučení disekce."
    },
    {
      id: "locked_in_syndrome",
      name: "Locked-in syndrom (Bilateralis ventralis pontis)",
      axisLevel: "Mozkový kmen (Pons - oboustranná ventrální léze)",
      levelCategory: "brainstem",
      vascularTerritory: "Uzávěr a. basilaris (tromboza kmene a. basilaris)",
      description: "Oboustranná destrukce pyramidových drah v bázi pontu při zachování retikulární formace (vědomí) a jader n. III.",
      requiredAny: ["quadriparesis_spastic"],
      typicalSymptoms: ["quadriparesis_spastic", "pyramidal_signs_pos", "dysphagia_dysphonia", "vertical_gaze_palsy"],
      etiology: ["Trombóza a. basilaris", "Centrální pontinní myelinolýza (osmotický demyelinizační syndrom při rychlé korekci hyponatrémie)", "Pontinní krvácení"],
      differentiatingPearls: "Pacient je plně při vědomí, ale má kompletní kvadruplegii a anartrii. Jediný zachovaný pohyb je VERTIKÁLNÍ pohled a mrkání víčky (řízeno z mezencefala n. III)! Často chybně zaměněno za koma.",
      investigationOfChoice: "STATIM CTA mozku a magistrálních tepen (urgentní indikace k mechanické trombektomii a. basilaris!)."
    },

    // --- MOZEČEK ---
    {
      id: "cerebellum_hemisphere",
      name: "Léze mozečkové hemisféry (Hemisferální syndrom)",
      axisLevel: "Mozeček (Hemisphaerium cerebelli)",
      levelCategory: "cerebellum",
      vascularTerritory: "A. cerebelli superior (SCA) / AICA / PICA",
      description: "Postižení neocerebella odpovědného za koordinaci a cílení volních pohybů končetin.",
      requiredAny: ["cerebellar_hemiataxia", "intention_tremor", "dysdiadochokinesia"],
      typicalSymptoms: ["cerebellar_hemiataxia", "intention_tremor", "dysdiadochokinesia", "cerebellar_nystagmus"],
      etiology: ["Mozečkový ischemický nebo hemoragický iktus", "Meduloblastom, astrocytom nebo metastáza v zadní jámě", "Roztroušená skleróza"],
      differentiatingPearls: "Příznaky jsou přísně HOMOLATERÁLNÍ k lézi! Končetinová ataxie, hypermetrie/dysmetrie (přestřelování u prst-nos), intenční třes, dysdiadochokinéza. Pacient padá ke straně léze.",
      investigationOfChoice: "MRI zadní jámy lební nebo CT mozku."
    },
    {
      id: "cerebellum_vermis",
      name: "Léze mozečkového červu (Vermální / Paleocerebelární syndrom)",
      axisLevel: "Mozeček (Vermis cerebelli)",
      levelCategory: "cerebellum",
      vascularTerritory: "PICA / SCA",
      description: "Postižení axiální koordinace, stoje a chůze.",
      requiredAny: ["cerebellar_truncal_ataxia"],
      typicalSymptoms: ["cerebellar_truncal_ataxia", "cerebellar_nystagmus"],
      etiology: ["Alkoholová nutriční mozečková atrofie (selektivní atrofie předního vermis)", "Meduloblastom vermis (častý u dětí)", "Paraneoplastická cerebelární degenerace (anti-Yo, anti-Hu)"],
      differentiatingPearls: "Axiální a trunkální ataxie: Těžká nestabilita stoje a chůze o široké bázi (opilecká chůze, titubace trupu), neschopnost sedět bez opory. Na končetinách při ležení na lůžku může být koordinace téměř normální!",
      investigationOfChoice: "MRI mozku (sagilátní řezy na vermis), screening chronického abúzu alkoholu / paraneoplastických protilátek."
    },

    // --- MÍCHA ---
    {
      id: "spinal_transverse_cervical",
      name: "Kompletní transverzální léze krční míchy (C1–C4 vs C5–Th1)",
      axisLevel: "Mícha (Medulla spinalis - krční úsek)",
      levelCategory: "spinal",
      vascularTerritory: "A. spinalis anterior + aa. spinales posteriores",
      description: "Kompletní přerušení všech vzestupných i sestupných drah v krčním segmentu míchy.",
      requiredAny: ["quadriparesis_spastic", "sensory_level_trunk"],
      typicalSymptoms: ["quadriparesis_spastic", "sensory_level_trunk", "pyramidal_signs_pos", "spastic_bladder_urgency", "fecal_incontinence"],
      etiology: ["Míšní trauma (fraktura/luxace krčních obratlů)", "Krční cervikální myelopatie (masivní výhřez disku, spinální stenóza)", "Transverzální myelitida (RS, NMO - neuromyelitis optica s AQP4 protilátkami)", "Epidurální spinální absces nebo metastatická komprese míchy"],
      differentiatingPearls: "Kvadruparéza/kvadruplegie (zpočátku spinální šok s chabou parézou, poté rozvoj spasticity a Babinského oboustranně), ostrá hladina poruchy citlivosti pro všechny modality pod úrovní léze + sfinkterová dysfunkce. Nad C4 hrozí obrna bránice (n. phrenicus C3–C5) a nutnost UPV!",
      investigationOfChoice: "STATIM STATIM MRI krční páteře a míchy (urgentní neurochirurgická dekomprese do 6–8 hodin při traumatické/expansivní kompresi!)."
    },
    {
      id: "spinal_transverse_thoracic",
      name: "Transverzální léze hrudní míchy (Th segmenty)",
      axisLevel: "Mícha (Medulla spinalis - hrudní úsek)",
      levelCategory: "spinal",
      vascularTerritory: "A. spinalis anterior (kritická zóna cévního zásobení Th4–Th8 / a. Adamkiewicz)",
      description: "Kompletní přerušení míchy v hrudním úseku s ušetřením horních končetin.",
      requiredAny: ["paraparesis_spastic"],
      typicalSymptoms: ["paraparesis_spastic", "sensory_level_trunk", "pyramidal_signs_pos", "spastic_bladder_urgency"],
      etiology: ["Metastáza v těle obratle s epidurální kompresí (nejčastější onkologická urgentní situace)", "Transverzální myelitida", "Spinální trauma", "Ischémie míchy po operaci abdominální aorty"],
      differentiatingPearls: "Horní končetiny jsou ZCELA INTATKNÍ! Spastická paraparéza obou dolních končetin, hladina čití na trupu (Th4 = mamily, Th10 = pupek, Th12 = tříslo) a sfinkterové poruchy.",
      investigationOfChoice: "STATIM MRI hrudní míchy s kontrastem."
    },
    {
      id: "brown_sequard",
      name: "Brownův-Séquardův syndrom (Míšní hemisekce)",
      axisLevel: "Mícha (Medulla spinalis - hemisekce míchy)",
      levelCategory: "spinal",
      vascularTerritory: "Sulkokomissurální artérie / Spinální trauma",
      description: "Postižení jedné poloviny míšního průřezu (např. po bodném poranění nebo asymetrickém útlaku).",
      requiredAny: ["sensory_dissociation_syringo"],
      typicalSymptoms: ["hemiparesis_spastic", "sensory_dissociation_syringo", "pyramidal_signs_pos"],
      etiology: ["Penetrující míšní trauma (bodné/střelné poranění)", "Asymetrický extramedulární tumor (meningeom, schwannom)", "Demyelinizace (RS)"],
      differentiatingPearls: "HOMOLATERÁLNĚ pod lézí: Spastická paréza (tr. corticospinalis) + ztráta propriocepce a vibrace (zadní provazce). KONTRALATERÁLNĚ pod lézí: Ztráta bolesti a teploty (tr. spinothalamicus, protože se kříží 1-2 segmenty nad vstupem do míchy)!",
      investigationOfChoice: "MRI příslušného úseku míchy."
    },
    {
      id: "syringomyelia",
      name: "Syringomyelický syndrom (Centrální míšní léze / Syringomyelie)",
      axisLevel: "Mícha (Centrální míšní kanál / Šedá hmota)",
      levelCategory: "spinal",
      vascularTerritory: "Centrální spinální zóna",
      description: "Dutina (syrinx) v centrálním míšním kanálu přerušující křížící se spinothalamická vlákna v commissura alba anterior.",
      requiredAny: ["cape_like_sensory", "sensory_dissociation_syringo"],
      typicalSymptoms: ["cape_like_sensory", "sensory_dissociation_syringo", "flaccid_monoparesis_hk", "fasciculations_atrophy"],
      etiology: ["Chiariho malformace typ I (obstrukce likvorových cest ve foramen magnum)", "Posttraumatická syringomyelie", "Intramedulární ependymom nebo astrocytom"],
      differentiatingPearls: "Plášťovitá DISOCIOVANÁ porucha čití: Ztráta vnímání bolesti a tepla na ramenou a HK (pacient se nepozorovaně popálí o kamna/cigaretu), zatímco hluboké čití (zadní provazce) a lehký dotyk jsou ZACHOVÁNY! Při expanzi do předních rohů vzniká chabá paréza a atrofie drobných svalů ruky.",
      investigationOfChoice: "MRI krční míchy a kraniovertebrálního přechodu (průkaz syrinx a mozečkových tonzil)."
    },
    {
      id: "anterior_spinal_artery",
      name: "Syndrom arteria spinalis anterior",
      axisLevel: "Mícha (Přední dvě třetiny míchy)",
      levelCategory: "spinal",
      vascularTerritory: "A. spinalis anterior (infarkt předních 2/3 míchy)",
      description: "Ischémie předních rohů, pyramidových drah a spinothalamických traktů při zachování zadních provazců.",
      requiredAny: ["paraparesis_spastic", "sensory_dissociation_syringo"],
      typicalSymptoms: ["paraparesis_spastic", "sensory_dissociation_syringo", "sensory_level_trunk", "spastic_bladder_urgency"],
      etiology: ["Operační výkony na hrudní/břišní aortě (svorka nad a. Adamkiewicz)", "Aterotrombóza a. spinalis anterior", "Disekce aorty", "Spinální embolie"],
      differentiatingPearls: "Náhlý vznik těžké paraplegie a ztráty čití pro bolest a teplo od hladiny léze dolů, ale se ZACHOVANÝM HLUBOKÝM ČÍTÍM (polohocit a vibrace jsou neporušené, protože zadní provazce jsou zásobeny párovými aa. spinales posteriores)!",
      investigationOfChoice: "MRI míchy (sagilátní T2 a axiální řezy s typickým nálezem 'očí sovy' v předních rozích) + CTA aorty."
    },
    {
      id: "funicular_myelosis",
      name: "Funikulární myelóza / Tabický syndrom (Léze zadních provazců)",
      axisLevel: "Mícha (Funiculus posterior - zadní provazce míšní)",
      levelCategory: "spinal",
      vascularTerritory: "Metabolické / Demyelinizační",
      description: "Selektivní degenerace fasciculus gracilis et cuneatus a pyramidových drah.",
      requiredAny: ["sensory_dissociation_tabic"],
      typicalSymptoms: ["sensory_dissociation_tabic", "pyramidal_signs_pos", "glove_stocking_sensory"],
      etiology: ["Deficit vitamínu B12 (perniciózní anémie, po resekci žaludku, malabsorpce)", "Neurosyfilis (Tabes dorsalis)", "Deficit mědi (např. po nadužívání zinku)"],
      differentiatingPearls: "Spinální ataxie: Pacient těžce vrávorá při zavření očí (pozitivní Rombergův příznak), protože ztratil proprioceptivní zpětnou vazbu z DK. Vyhaslé vibrační čití na ladičce (palce, kotníky). Vnímání bolesti a tepla je normální!",
      investigationOfChoice: "Hladina vitamínu B12, kyseliny listové, homocysteinu a kyseliny methylmalonové v séru + MRI krční/hrudní míchy (hyperintenzita zadních provazců ve tvaru obráceného V)."
    },
    {
      id: "als_anterior_horns",
      name: "Syndrom předních rohů míšních & motoneuronu (ALS)",
      axisLevel: "Přední rohy míšní + Pyramidová dráha (Centrální + Periferní motoneuron)",
      levelCategory: "spinal",
      vascularTerritory: "Neurodegenerativní proces",
      description: "Kombinovaný zánik centrálního (korového) a periferního (přední rohy) motoneuronu.",
      requiredAny: ["fasciculations_atrophy"],
      typicalSymptoms: ["fasciculations_atrophy", "pyramidal_signs_pos", "flaccid_monoparesis_hk", "dysphagia_dysphonia"],
      etiology: ["Amyotrofická laterální skleróza (ALS)", "Spinální svalová atrofie (SMA)", "Spinocelulární postižení / Poliomyelitis"],
      differentiatingPearls: "Koexistence ZNÁMEK CENTRÁLNÍHO (živé reflexy, spasticita, Babinski) a PERIFERNÍHO MOTONEURONU (fascikulace, svalové atrofie, parézy) na stejné končetině BEZ JAKÉKOLIV PORUCHY CITLIVOSTI! Čistě motorický syndrom.",
      investigationOfChoice: "Elektromyografie (EMG - průkaz difuzní akutní a chronické denervace ve 3-4 anatomických etážích) + MRI mozku/míchy k vyloučení strukturální léze."
    },
    {
      id: "conus_medullaris",
      name: "Syndrom míšního kužele (Conus medullaris - segmenty S3–S5)",
      axisLevel: "Mícha (Conus medullaris na úrovni L1/L2 obratle)",
      levelCategory: "spinal",
      vascularTerritory: "A. spinalis anterior distální",
      description: "Léze sakrálních míšních segmentů v zakončení míchy.",
      requiredAny: ["saddle_anesthesia", "atonic_bladder_retention"],
      typicalSymptoms: ["saddle_anesthesia", "atonic_bladder_retention", "fecal_incontinence"],
      etiology: ["Epikonální / konální spinální tumory (ependymom filum terminale)", "Centrální masivní diskogenní hernie L1/L2", "Spinální trauma Th12/L1"],
      differentiatingPearls: "PŘÍSNĚ SYMETRICKÁ sedlovitá anestezie v perianální oblasti (S3–S5), ČASNÁ těžká sfinkterová retence/inkontinence a erektilní dysfunkce. Hybnost a reflexy na DK (L2–S1) bývají ZACHOVÁNY!",
      investigationOfChoice: "STATIM MRI lumbosakrální páteře a přechodu Th12–L2."
    },
    {
      id: "cauda_equina",
      name: "Syndrom kaudy (Cauda equina - kořeny L3–S5)",
      axisLevel: "Páteřní kanál pod L2 (Intradurální lumbosakrální kořeny)",
      levelCategory: "root",
      vascularTerritory: "Radikulární arterie",
      description: "Komprese nervových kořenů volně probíhajících v durálním vaku pod zakončením míchy.",
      requiredAny: ["saddle_anesthesia", "flaccid_paraparesis_asym"],
      typicalSymptoms: ["saddle_anesthesia", "flaccid_paraparesis_asym", "radicular_pain_l5_s1", "atonic_bladder_retention", "fecal_incontinence"],
      etiology: ["Masivní mediální výhřez bederní meziobratlové ploténky (L4/L5 nebo L5/S1)", "Tumor kaudy (schwannom, ependymom)", "Epidurální hematom / absces"],
      differentiatingPearls: "Na rozdíl od konu: ASYMETRICKÝ začátek, KRUTÁ radikulární vystřelující bolest do DK, ASYMETRICKÁ CHABÁ paréza DK (chůze po patách i špičkách), VYHASLÉ reflexy L4 (patelární) a S1 (Achillovy šlachy). Urgentní neurochirurgická indikace!",
      investigationOfChoice: "STATIM STATIM MRI bederní páteře (operace do 24 hodin od vzniku sfinkterové poruchy k záchraně svěračů!)."
    },

    // --- KOŘENY (RADIKULOPATIE) ---
    {
      id: "radiculopathy_l5",
      name: "Radikulopatie L5 (Kořenový syndrom L5)",
      axisLevel: "Kořen (Radix spinalis L5)",
      levelCategory: "root",
      vascularTerritory: "Radikulární artérie L5",
      description: "Útlak kořene L5 nejčastěji laterálním výhřezem ploténky L4/L5.",
      requiredAny: ["foot_drop", "foot_inversion_weakness"],
      typicalSymptoms: ["foot_drop", "foot_inversion_weakness", "radicular_pain_l5_s1"],
      etiology: ["Hernie meziobratlového disku L4/L5 (dorzolaterální)", "Foraminostenóza L5/S1"],
      differentiatingPearls: "Obrna DORZÁLNÍ flexe nohy a palce (chůze po patách vázne) + OSLABENÍ INVERZE NOHY (m. tibialis posterior)! Bolest a hypestézie vyzařuje po zevní straně stehna, lýtka až na hřbet nohy a palec. Šlachové reflexy (patelární L4 i Achillova šlacha S1) jsou NORMÁLNÍ!",
      investigationOfChoice: "MRI bederní páteře."
    },
    {
      id: "radiculopathy_s1",
      name: "Radikulopatie S1 (Kořenový syndrom S1)",
      axisLevel: "Kořen (Radix spinalis S1)",
      levelCategory: "root",
      vascularTerritory: "Radikulární artérie S1",
      description: "Útlak kořene S1 výhřezem disku L5/S1.",
      requiredAny: ["plantar_flexion_weakness"],
      typicalSymptoms: ["plantar_flexion_weakness", "radicular_pain_l5_s1"],
      etiology: ["Hernie meziobratlového disku L5/S1 (dorzolaterální)"],
      differentiatingPearls: "Obrna PLANTÁRNÍ flexe nohy (nemožnost stoje na špičce) + VYHASLÝ REFLEX ACHILLOVY ŠLACHY (L5–S2)! Bolest a hypestézie vyzařují po zadní straně stehna, lýtka přes patu na zevní hranu nohy a malík.",
      investigationOfChoice: "MRI lumbosakrální páteře."
    },
    {
      id: "radiculopathy_c7",
      name: "Radikulopatie C7 (Kořenový syndrom C7)",
      axisLevel: "Kořen (Radix spinalis C7)",
      levelCategory: "root",
      vascularTerritory: "Radikulární artérie C7",
      description: "Útlak kořene C7 foraminální hernií disku C6/C7.",
      requiredAny: ["radicular_pain_c6_c7"],
      typicalSymptoms: ["radicular_pain_c6_c7"],
      etiology: ["Hernie meziobratlového disku C6/C7", "Cervikální unkovertebrální artróza"],
      differentiatingPearls: "Nejčastější krční radikulopatie: Oslabená extenze v lokti (m. triceps brachii) a flexe v zápěstí + VYHASLÝ REFLEX TRICIPITÁLNÍ (C7). Bolest a hypestézie vyzařují po zadní straně paže a předloktí do 3. (prostředního) prstu ruky!",
      investigationOfChoice: "MRI krční páteře."
    },

    // --- PERIFERNÍ NERVOVÝ SYSTÉM ---
    {
      id: "nerve_peroneus_communis",
      name: "Obrna n. peroneus communis (fibularis)",
      axisLevel: "Periferní nerv (N. fibularis / peroneus communis u hlavičky fibuly)",
      levelCategory: "nerve",
      vascularTerritory: "Vasa nervorum",
      description: "Tlaková komprese nervu při průchodu kolem capitulum fibulae.",
      requiredAny: ["foot_drop", "foot_eversion_weakness"],
      typicalSymptoms: ["foot_drop", "foot_eversion_weakness"],
      etiology: ["Útlak při sádrové fixaci nebo těsné bandáži", "Dlouhé sezení s nohou přes nohu ('sedadlo v kině')", "Polohová obrna při bezvědomí / anestezii", "Fraktura hlavičky fibuly"],
      differentiatingPearls: "DORZÁLNÍ FLEXE A EVERZE nohy vázne (kohoutí chůze), ALE INVERZE NOHY (m. tibialis posterior - n. tibialis) JE ZCELA ZACHOVÁNA! (Zásadní odlišení od radikulopatie L5, kde je inverze oslabena). Reflexy L4 a S1 jsou normální.",
      investigationOfChoice: "EMG a kondukční studie nervu (ENG) - průkaz vedení a kondukčního bloku přes capitulum fibulae."
    },
    {
      id: "nerve_radialis",
      name: "Obrna n. radialis ('Sobotní noční obrna')",
      axisLevel: "Periferní nerv (N. radialis v sulcus nervi radialis humeru)",
      levelCategory: "nerve",
      vascularTerritory: "Vasa nervorum",
      description: "Komprese nervu n. radialis v sulcus nervi radialis na humeru.",
      requiredAny: ["wrist_drop"],
      typicalSymptoms: ["wrist_drop"],
      etiology: ["Komprese paže o tvrdou podložku ve spánku po intoxikaci alkoholem ('Saturday night palsy')", "Zlomenina diafýzy humeru (Holsteinova-Lewisova fraktura)"],
      differentiatingPearls: "'PADÍCÍ RUKA' (obrna extenzorů zápěstí a metakarpofalangeálních kloubů prstů). Triceps brachii bývá ušetřen (odstup větví je proximálněji v axile). Hypestézie na dorzu ruky v oblasti fovea radialis (tabatière anatomique).",
      investigationOfChoice: "Klinické vyšetření + EMG/ENG n. radialis."
    },
    {
      id: "nerve_medianus_carpal",
      name: "Syndrom karpálního tunelu (Léze n. medianus)",
      axisLevel: "Periferní nerv (N. medianus pod retinaculum flexorum)",
      levelCategory: "nerve",
      vascularTerritory: "Mikrovaskulární komprese v karpálním tunelu",
      description: "Nejčastější úžinový syndrom - chronický útlak n. medianus v zápěstí.",
      requiredAny: ["ape_or_preachers_hand"],
      typicalSymptoms: ["ape_or_preachers_hand"],
      etiology: ["Chronické přetěžování zápěstí (práce na PC, vibrace, manuální práce)", "Hypotyreóza, diabetes mellitus, těhotenství, revmatoidní artritida"],
      differentiatingPearls: "Noční parestézie a bolest 1.–3. a radiální poloviny 4. prstu budící ze spánku (pacient ruku protřepává - 'flick sign'). Pozitivní Tinelův a Phalenův test. V pokročilém stadiu atrofie abductor pollicis brevis (thenaru).",
      investigationOfChoice: "EMG/ENG (zpomalení senzitivní i motorické rychlosti vedení přes karpální tunel) + UZ zápěstí."
    },
    {
      id: "nerve_ulnaris_cubital",
      name: "Syndrom kubitálního tunelu (Léze n. ulnaris v lokti)",
      axisLevel: "Periferní nerv (N. ulnaris v sulcus nervi ulnaris)",
      levelCategory: "nerve",
      vascularTerritory: "Vasa nervorum",
      description: "Druhý nejčastější úžinový syndrom - komprese v loketním žlábku.",
      requiredAny: ["claw_hand"],
      typicalSymptoms: ["claw_hand"],
      etiology: ["Opírání o loket, artróza loketního kloubu, valgozita lokte po staré fraktuře"],
      differentiatingPearls: "'DRÁPOVÁ RUKA' (drápovité postavení 4. a 5. prstu v důsledku obrny mm. interossei a mm. lumbricales III/IV), atrofie hypothenaru a 1. interoseálního prostoru. Pozitivní Fromentův příznak (pacient při sevření papíru mezi palec a ukazovák kompenzačně flektuje palec v IP kloubu pomocí n. medianus). Hypestézie 5. a ulnární poloviny 4. prstu.",
      investigationOfChoice: "EMG/ENG n. ulnaris s měřením segmentu přes loket."
    },
    {
      id: "polyneuropathy_distal",
      name: "Distální symetrická senzomotorická polyneuropatie",
      axisLevel: "Periferní nervy difuzně (Distální axonopatie / demyelinizace)",
      levelCategory: "nerve",
      vascularTerritory: "Difuzní mikrovaskulární / metabolické postižení",
      description: "Délkově závislé (length-dependent) postižení nejdelších nervových vláken od distálních partií.",
      requiredAny: ["glove_stocking_sensory"],
      typicalSymptoms: ["glove_stocking_sensory", "sensory_dissociation_tabic"],
      etiology: ["Diabetická polyneuropatie (nejčastější)", "Chronický etylismus (alkoholová polyneuropatie)", "Toxická (chemoterapie - platina, paklitaxel)", "Guillainův-Barré syndrom (AIDP) - akutní varianta"],
      differentiatingPearls: "Ponožkovitá a rukavicovitá distribuce hypestézie, pálení nohou (burning feet), vyhaslý reflex Achillovy šlachy a postupná distální slabost a atrofie svalstva nohou.",
      investigationOfChoice: "EMG/ENG (motorická a senzitivní neurografie n. peroneus, tibialis, suralis) + glykovaný hemoglobin HbA1c."
    },

    // --- NERVOSVALOVÁ PLOTÉNKA & SVAL ---
    {
      id: "myasthenia_gravis",
      name: "Myasthenia gravis (Postižení nervosvalové ploténky)",
      axisLevel: "Nervosvalová ploténka (Neuromuskulární junkce)",
      levelCategory: "muscle",
      vascularTerritory: "Autoimunitní onemocnění",
      description: "Autoimunitní protilátky proti postsynaptickým nikotinovým acetylcholinovým receptorům (AChR) nebo MuSK.",
      requiredAny: ["fluctuating_fatigue"],
      typicalSymptoms: ["fluctuating_fatigue", "dysphagia_dysphonia"],
      etiology: ["Autoimunitní tvorba protilátek (spojeno s hyperplazií thymu v 65 % nebo thymomem v 15 %)"],
      differentiatingPearls: "FLUKTUACE A ÚNAVA: Svalová síla je ráno dobrá, během dne nebo po zátěži klesá! Časné postižení okohybných a bulbárních svalů (ptóza, diplopie, porucha kousání a polykání, huhňavost). REFLEXY JSOU NORMÁLNÍ A CITLIVOST JE 100% ZACHOVÁNA!",
      investigationOfChoice: "Sérové protilátky anti-AChR a anti-MuSK + repetitivní stimulace v EMG (dekrement odpovědi) + CT předního mediastina (thymom)."
    },
    {
      id: "myopathy_limb_girdle",
      name: "Myopatie / Svalová dystrofie (Primární postižení svalu)",
      axisLevel: "Kosterní sval (Myocyt / Sarkolema)",
      levelCategory: "muscle",
      vascularTerritory: "Myogenní proces",
      description: "Primární onemocnění svalového vlákna bez postižení inervace.",
      requiredAny: ["proximal_weakness_girdle"],
      typicalSymptoms: ["proximal_weakness_girdle"],
      etiology: ["Zánětlivé myopatie (polymyozitida, dermatomyozitida)", "Genetické svalové dystrofie (Duchenne/Becker, pletencové LGMD)", "Toxické/lékové (statinová myopatie)", "Endokrinní myopatie (steroidní, tyreotoxická)"],
      differentiatingPearls: "SYMETRICKÁ PROXIMÁLNÍ slabost pletencového svalstva (pacient nemůže vstát ze dřepu bez opory rukou o stehna - Gowersovo znamení, nemůže učesat vlasy nebo zvednout tašku do police). Citlivost je normální, reflexy odpovídají svalové síle.",
      investigationOfChoice: "Sérová kreatinkináza (CK, myoglobin) + jehlová EMG (myopatický záznam: nízké voltáže, zkrácené potenciály MUP) + svalová biopsie / genetické testování."
    }
  ],

  // 3. INTERAKTIVNÍ TRÉNINKOVÉ KAZUISTIKY (TOPICKÝ DRILL)
  drillCases: [
    {
      id: "case_1",
      title: "Případ 1: Náhlá slabost končetin a pokles víčka",
      anamnesis: "62letý pacient s anamnézou arteriální hypertenze a fibrilace síní byl přivezen RZP pro náhle vzniklý pokles pravého očního víčka, dvojité vidění a slabost levostranných končetin.",
      status: "Objektivně: Na pravém oku je výrazná ptóza, zornice vpravo je mydriatická s vyhaslou fotoreakcí a bulbus diverguje zevně dolů. Na levostranných končetinách je spastická hemiparéza (svalová síla 3/5), vlevo pozitivní Babinski. Citlivost zachována.",
      question: "Kde přesně se nachází léze v centrálním nervovém systému a o jaký klasický syndrom se jedná?",
      options: [
        { id: "opt_a", text: "Pravá mozková hemisféra - kortikální léze v povodí ACM", correct: false, feedback: "Nesprávně. Kortikální léze ACM nepůsobí homolaterální periferní obrnu n. III s mydriázou." },
        { id: "opt_b", text: "Pravé mezencefalon (pedunculus cerebri) - Weberův syndrom", correct: true, feedback: "Správně! Homolaterální léze n. III + kontralaterální spastická hemiparéza tvoří klasickou alternující mezencefalickou hemiplegii (Weberův syndrom) způsobenou postižením pedunculi cerebri (větví a. basilaris / ACP)." },
        { id: "opt_c", text: "Pons Varoli vpravo - Millardův-Gublerův syndrom", correct: false, feedback: "Nesprávně. Millard-Gubler postihuje lícní nerv (n. VII) v pontu, nikoliv n. III." },
        { id: "opt_d", text: "Pravá capsula interna - lakunární iktus", correct: false, feedback: "Nesprávně. Léze capsula interna způsobí čistě motorickou hemiparézu bez izolovaného poškození n. III." }
      ],
      pearl: "Weberův syndrom je prototypem alternující kmenové hemiplegie: 'Kmenový nerv na straně léze + pyramidová dráha na straně opačné'."
    },
    {
      id: "case_2",
      title: "Případ 2: Popáleniny ramen, které nebolely",
      anamnesis: "34letý muž přichází k neurologovi proto, že si při práci s horkovzdušnou pistolí způsobil popáleniny 2. stupně na obou pažích a ramenou, aniž by cítil jakoukoliv bolest. Poslední rok také pozoruje slábnutí úchopu rukou a hubnutí svalů mezi palcem a ukazovákem.",
      status: "Objektivně: Plášťovitá ztráta citlivosti pro teplo, chlad a ostrou bolest na obou ramenou, pažích a horní části hrudníku. Hluboké čití (polohocit a vibrační čití) je na HK zcela neporušené. Na obou dlaních hypotrofie thenaru a interoseálních svalů s chabou parézou prstů.",
      question: "Jaká je lokalizace procesu a jak se nazývá tento neurologický syndrom?",
      options: [
        { id: "opt_a", text: "Oboustranná komprese n. medianus v karpálním tunelu", correct: false, feedback: "Nesprávně. Karpální tunel nevysvětluje ztrátu citlivosti na ramenou a pažích ani vyhasnutí termického čití." },
        { id: "opt_b", text: "Centrální krční mícha (syringomyelická dutina přerušující commisura alba anterior)", correct: true, feedback: "Výborně! Jedná se o Syringomyelii (centrální míšní syndrom). Centrální expanze syrinxu přeruší křížící se spinothalamická vlákna vedoucí bolest a teplo v krční intumescenci, což vede k plášťovité disociované poruše čití. Útlak předních rohů způsobuje chabou parézu svalů ruky." },
        { id: "opt_c", text: "Zadní provazce míšní (funikulární myelóza při deficitu B12)", correct: false, feedback: "Nesprávně. Funikulární myelóza postihuje propriocepci a vibraci (tabická disociace), zatímco bolest a teplo jsou zachovány." },
        { id: "opt_d", text: "Amyotrofická laterální skleróza (ALS)", correct: false, feedback: "Nesprávně. ALS je čistě motorické onemocnění bez jakýchkoliv poruch citlivosti." }
      ],
      pearl: "Disociovaná syringomyelická porucha čití = Ztráta bolesti a tepla při ZACHOVANÉM hlubokém čití."
    },
    {
      id: "case_3",
      title: "Případ 3: Náhlá závrať, škytavka a zkřížená necitlivost",
      anamnesis: "58letý muž náhle pocítil prudkou rotační závrať s nauzeou a zvracením, obtížné polykání (voda mu teče nosem), chrapot a škytavku. Při chůzi padá doprava.",
      status: "Objektivně: Vpravo ptóza a mióza (Hornerův syndrom), pokles pravého patrového oblouku s dysfagií a dysfonií (n. IX, X), homolaterální mozečková ataxie na PHK a PDK. Ztráta vnímání bolesti a tepla na PRAVÉ polovině obličeje a na LEVÉ polovině trupu a končetin. Motorika končetin je plně intaktní.",
      question: "Která cévní struktura byla postižena a kde je lokalizována léze?",
      options: [
        { id: "opt_a", text: "Dorsolaterální oblongata vpravo v povodí a. cerebelli inferior posterior (PICA) - Wallenbergův syndrom", correct: true, feedback: "Přesně tak! Jde o klasický Wallenbergův syndrom (infarkt dorzolaterální oblongaty uzávěrem PICA nebo a. vertebralis). Zkřížená porucha čití vzniká současným postižením ncl. spinalis n. V vpravo a zkříženého tr. spinothalamicus." },
        { id: "opt_b", text: "Ventrální pons vlevo - Millard-Gublerův syndrom", correct: false, feedback: "Nesprávně. Ventrální léze pontu by způsobila spastickou hemiparézu končetin." },
        { id: "opt_c", text: "Levá mozková hemisféra - kůra parietálního laloku", correct: false, feedback: "Nesprávně. Kortikální léze nepůsobí zkříženou poruchu čití (obličej na jedné straně a tělo na druhé) ani Hornerův syndrom." },
        { id: "opt_d", text: "Periferní vestibulární aparát vpravo (akutní vestibulární neuronitida)", correct: false, feedback: "Nesprávně. Vestibulární neuronitida nemá kmenové příznaky (Horner, dysfagie, zkřížená porucha čití)." }
      ],
      pearl: "Wallenbergův syndrom má ZKŘÍŽENOU senzitivní poruchu a NIKDY nemá motorickou parézu končetin, protože pyramidová dráha běží na ventrální straně oblongaty!"
    },
    {
      id: "case_4",
      title: "Případ 4: Po autonehodě s bodným poraněním páteře",
      anamnesis: "28letý voják utrpěl bodné poranění hrudní páteře. Po stabilizaci vitálních funkcí je vyšetřován na traumatologii.",
      status: "Objektivně: Na pravé dolní končetině je těžká spastická paréza s hyperreflexií a pozitivním Babinským, a kompletní ztráta polohocitu a vibračního čití od kyčle dolů. Na levé dolní končetině je motorika plně zachována, ale od úrovně podbřišku dolů pacient vůbec necítí píchnutí jehlou ani teplou/studenou zkumavku.",
      question: "O jaký typ míšního poškození se jedná?",
      options: [
        { id: "opt_a", text: "Kompletní transverzální míšní léze v úrovni Th10", correct: false, feedback: "Nesprávně. Kompletní léze by způsobila oboustrannou paraparézu a oboustranný výpadek všech modalit čití." },
        { id: "opt_b", text: "Brown-Séquardův syndrom (pravostranná hemisekce míchy v úrovni Th8–Th10)", correct: true, feedback: "Správně! Brownův-Séquardův syndrom (míšní hemisekce) způsobuje homolaterální spastickou parézu a ztrátu zadních provazců pod lézí + kontralaterální ztrátu bolesti a teploty (tractus spinothalamicus se kříží v míše)." },
        { id: "opt_c", text: "Syndrom arteria spinalis anterior", correct: false, feedback: "Nesprávně. Syndrom a. spinalis anterior zachovává zadní provazce na obou stranách." },
        { id: "opt_d", text: "Syndrom kaudy", correct: false, feedback: "Nesprávně. Kauda působí chabou parézu s areflexií, nikoliv spastickou parézu s Babinskim." }
      ],
      pearl: "Pamatujte si: U Brown-Séquarda je hybnost a hluboké čití postiženo na STEJNÉ straně jako nůž, zatímco bolest a teplo na OPAČNÉ straně!"
    },
    {
      id: "case_5",
      title: "Případ 5: Problém se zvednutím špičky po sádrové fixaci",
      anamnesis: "24letý fotbalista měl 4 týdny sádrovou dlahu pro distzi hlezna. Dnes po sejmutí sádry zjišťuje, že zakopává o koberec a nemůže zvednout pravou špičku nahoru.",
      status: "Objektivně: Výrazné oslabení dorzální flexe nohy a palce vpravo (chůze po patě vázne - kohoutí chůze) a oslabená everze (pronace) nohy. Inverze nohy (supinace - m. tibialis posterior) je však ZCELA NORMÁLNÍ (síla 5/5). Patelární reflex i reflex Achillovy šlachy jsou normální a symetrické. Hypestézie na anterolaterální ploše bérce a hřbetu nohy.",
      question: "Kde je lokalizována léze a jaký je zásadní rozdíl oproti kořenovému syndromu L5?",
      options: [
        { id: "opt_a", text: "Radikulopatie L5 vpravo; vyžaduje urgentní MRI páteře pro herniaci disku", correct: false, feedback: "Nesprávně. U radikulopatie L5 je oslaben i m. tibialis posterior (inverze nohy), protože je inervován kořenem L5 přes n. tibialis." },
        { id: "opt_b", text: "Útlak n. peroneus (fibularis) communis v oblasti hlavičky fibuly pod sádrou; zachovaná inverze vylučuje lézi L5", correct: true, feedback: "Excelentní! Jde o periferní lézi n. peroneus communis u capitulum fibulae. M. tibialis posterior je inervován n. tibialis (kořen L5), proto je při lézi n. peroneus inverze nohy zachována, což je klíčový diferenciální test mezi n. peroneus a kořenem L5!" },
        { id: "opt_c", text: "Léze n. tibialis v canalis malleolaris", correct: false, feedback: "Nesprávně. N. tibialis inervuje plantární flexory, nikoliv dorzální flexory." },
        { id: "opt_d", text: "Centrální paréza z kortikální ischémie ACA", correct: false, feedback: "Nesprávně. Chybí jakékoliv spastické pyramidové příznaky, reflexy jsou symetrické." }
      ],
      pearl: "Klinický diamant: Chcete odlišit n. peroneus od L5? Otestujte inverzi nohy (přitáhnutí plosky dovnitř proti odporu)! Normální inverze = n. peroneus. Oslabená inverze = kořen L5."
    },
    {
      id: "case_6",
      title: "Případ 6: Zhoršování zraku a padání víček večer",
      anamnesis: "26letá studentka přichází, protože poslední 3 měsíce vidí večer při učení dvojitě a padá jí levé víčko. Ráno po probuzení se cítí zcela zdravá. Při delším rozhovoru začíná mluvit 'huhňavě' přes nos.",
      status: "Objektivně: Po 60 sekundách pohledu vzhůru dochází k rozvoji bilaterální ptózy (Simpsonův test pozitivní). Hybnost končetin je ráno normální, ale po 20 dřepech dojde k výraznému oslabení. Šlachovo-okosticové reflexy jsou normální a symetrické. Čití je kompletně intaktní.",
      question: "O jakou etáž nervového systému se jedná a jaký diagnostický test potvrdí diagnózu?",
      options: [
        { id: "opt_a", text: "Nervosvalová ploténka (Myasthenia gravis) - protilátky anti-AChR a repetitivní stimulace v EMG", correct: true, feedback: "Správně! Fluktuující svalová slabost se zhoršením po námaze a k večeru, ušetření reflexů a citlivosti a okulobulbární predilekce jsou typické pro Myasthenia gravis." },
        { id: "opt_b", text: "Demyelinizační léze mozkového kmene (Roztroušená skleróza) - MRI mozku", correct: false, feedback: "Nesprávně. RS nemá takto typickou večerní fluktuaci s únavou po zátěži a normální reflexy." },
        { id: "opt_c", text: "Amyotrofická laterální skleróza - jehlová EMG", correct: false, feedback: "Nesprávně. ALS nepostihuje okohybné svaly a reflexy by byly zvýšené s přítomností fascikulací." },
        { id: "opt_d", text: "Mitochondriální myopatie - svalová biopsie", correct: false, feedback: "Nesprávně. Mitochondriální myopatie nefluktuuje během dne v reakci na odpočinek tak dramaticky jako myastenie." }
      ],
      pearl: "Při podezření na Myasthenia gravis nezapomeňte vždy doplnit CT hrudníku k vyloučení thymomu!"
    }
  ],

  // 4. RADIKULOPATIE VS. PERIFERNÍ NERVOVÉ LÉZE (SROVNÁVACÍ MATICE)
  rootVsNerveMatrix: [
    {
      pairName: "Kořen L5 vs. N. peroneus (fibularis) communis",
      domain: "Dolní končetina - dorzální flexe nohy",
      sharedSymptoms: "Obrna dorzální flexe nohy a palce ('kohoutí chůze', neschopnost chůze po patách), hypestézie na hřbetu nohy a zevní straně bérce.",
      differentiatingFeature: "INVERZE (supinace) nohy: m. tibialis posterior",
      rootDetails: {
        name: "Radikulopatie L5",
        motorDeficit: "Oslabená dorzální flexe nohy (m. tibialis ant.) + OSLABENÁ INVERZE NOHY (m. tibialis post. přes n. tibialis!) + oslabená abdukce kyčle (m. gluteus medius).",
        reflexes: "Všechny reflexy normální (L4 i S1 jsou intaktní).",
        sensoryArea: "Pás po anterolaterální straně stehna a bérce, přes hřbet nohy k palci.",
        provocationTest: "Pozitivní Lasègueův manévr.",
        typicalCause: "Dorzolaterální hernie disku L4/L5."
      },
      nerveDetails: {
        name: "Obrna n. peroneus communis",
        motorDeficit: "Oslabená dorzální flexe nohy + oslabená EVERZE nohy (mm. peronei). INVERZE NOHY JE ZCELA ZACHOVÁNA (5/5)!",
        reflexes: "Reflexy normální.",
        sensoryArea: "Anterolaterální dolní polovina bérce a dorzum nohy (vynechává stehno).",
        provocationTest: "Tinelův příznak poklepem na hlavičku fibuly.",
        typicalCause: "Tlaková léze u capitulum fibulae (sádra, sezení s nohou přes nohu)."
      }
    },
    {
      pairName: "Kořen S1 vs. N. ischiadicus / N. tibialis",
      domain: "Dolní končetina - plantární flexe a pata",
      sharedSymptoms: "Oslabená plantární flexe nohy (nemožnost stoje na špičce), vyhaslý reflex Achillovy šlachy, bolest po zadní straně DK.",
      differentiatingFeature: "Rozsah motorického a senzitivního postižení",
      rootDetails: {
        name: "Radikulopatie S1",
        motorDeficit: "Oslaben m. triceps surae (stoj na špičce), m. gluteus maximus (extenze kyčle).",
        reflexes: "Vyhaslý reflex Achillovy šlachy (L5-S2).",
        sensoryArea: "Zadní strana stehna a lýtka, pata, zevní hrana nohy a 5. prst (malík).",
        provocationTest: "Pozitivní Lasègue.",
        typicalCause: "Hernie disku L5/S1."
      },
      nerveDetails: {
        name: "Kompletní léze n. ischiadicus",
        motorDeficit: "Ztráta VŠECH pohybů pod kolenem (jak flexe, tak extenze nohy i prstů) + obrna flexorů kolene (hamstringy).",
        reflexes: "Vyhaslý reflex Achillovy šlachy i medioplantární.",
        sensoryArea: "Kompletní anestezie celého bérce a nohy s výjimkou mediální strany (n. saphenus).",
        provocationTest: "Palpační bolestivost ve Foramen ischiadicum majus.",
        typicalCause: "Luxace/fraktura kyčelního kloubu, iatrogenní intramuskulární injekce."
      }
    },
    {
      pairName: "Kořen C7 vs. N. radialis",
      domain: "Horní končetina - extenze lokte a zápěstí",
      sharedSymptoms: "Oslabená extenze zápěstí a prstů, hypestézie na dorzu ruky.",
      differentiatingFeature: "Postižení m. triceps brachii a rozsah flexorů",
      rootDetails: {
        name: "Radikulopatie C7",
        motorDeficit: "Oslabená extenze lokte (m. triceps), flexe zápěstí (m. flexor carpi radialis) a extenze prstů.",
        reflexes: "Vyhaslý reflex TRICIPITÁLNÍ (C7).",
        sensoryArea: "Proužek po zadní straně paže a předloktí do 3. (prostředního) prstu.",
        provocationTest: "Spurlingův test (komprese krční páteře s rotací k postižené straně).",
        typicalCause: "Hernie disku C6/C7."
      },
      nerveDetails: {
        name: "Léze n. radialis (v sulcus n. radialis)",
        motorDeficit: "Obrna extenzorů zápěstí a MCP kloubů ('padající ruka'). M. TRICEPS BRACHII JE ZACHOVÁN (odstup větví v axile)!",
        reflexes: "Vyhaslý reflex brachioradiální (C5-C6), tricipitální reflex bývá zachován.",
        sensoryArea: "Pouze dorzum ruky a fovea radialis (tabatière).",
        typicalCause: "Komprese paže ve spánku ('Saturday night palsy'), fraktura diafýzy humeru."
      }
    },
    {
      pairName: "Kořen C8/Th1 vs. N. ulnaris",
      domain: "Horní končetina - drobné svaly ruky",
      sharedSymptoms: "Slabost interoseálních svalů, hypotrofie ruky, drápovité postavení prstů.",
      differentiatingFeature: "Inervace svalů thenaru (m. abductor pollicis brevis)",
      rootDetails: {
        name: "Radikulopatie C8 / Dolní plexus brachialis",
        motorDeficit: "Postižení VŠECH drobných svalů ruky (jak ulnárních interoseí, tak MEDIÁNOVÝCH THENAROVÝCH SVALŮ).",
        reflexes: "Snížený flexorový reflex prstů.",
        sensoryArea: "Ulnární okraj předloktí i ruky (C8) až do axily (Th1).",
        typicalCause: "Pancoastův tumor plicního hrotu, syndrom horní hrudní apertury (krční žebro), hernie C7/Th1."
      },
      nerveDetails: {
        name: "Léze n. ulnaris (v lokti)",
        motorDeficit: "Postiženy POUZE svaly inervované n. ulnaris (mm. interossei, mm. lumbricales III/IV, hypothenar). THENAR JE UŠETŘEN (inervován n. medianus)!",
        sensoryArea: "Přísně ohraničena na malík a ulnární polovinu 4. prstu (předloktí je ušetřeno).",
        typicalCause: "Syndrom kubitálního tunelu v lokti."
      }
    }
  ]
};

// Export pro browser globální kontext
if (typeof window !== "undefined") {
  window.TOPICAL_DATA = TOPICAL_DATA;
}
