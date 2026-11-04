import {deepenAnswers} from './answers-depth.mjs';
import {completionAnswers, completionSources} from './answers-completion.mjs';
// Zkouškové odpovědi; nikoli klinické protokoly.
export const answerSources = {
  "ou2025": {
    "label": "LF OU 2025 · Základy anesteziologie a intenzivní medicíny",
    "url": "https://portal.osu.cz",
    "locator": "Ondřej Jor, Tereza Romanová, Jan Máca a kol., LF OU, 2025, díl I."
  },
  "pe2026": {
    "label": "AHA/ACC multisociety 2026 · Akutní plicní embolie",
    "url": "https://www.jacc.org/doi/10.1016/j.jacc.2025.11.005",
    "locator": "Klinické kategorie A–E, diagnostika, antikoagulace a pokročilá léčba; americké doporučení"
  },
  "peESC": {
    "label": "ESC/ERS 2019 · Plicní embolie",
    "url": "https://academic.oup.com/eurheartj/article/41/4/543/5556136",
    "locator": "Oddíly 4–7: nestabilita, evropská stratifikace rizika, reperfuze"
  },
  "peNICE": {
    "label": "NICE NG158 · Žilní tromboembolie",
    "url": "https://www.nice.org.uk/guidance/ng158/chapter/Recommendations",
    "locator": "1.1 a 1.3–1.4: Wells, D-dimer, zobrazení, antikoagulace a délka léčby"
  },
  "akiKDIGO": {
    "label": "KDIGO 2012 · Akutní poškození ledvin",
    "url": "https://kdigo.org/wp-content/uploads/2016/10/KDIGO-2012-AKI-Guideline-English.pdf",
    "locator": "2.1: definice/stadia; oddíl 5: náhrada funkce, modality a antikoagulace"
  },
  "akiDraft": {
    "label": "KDIGO · Stav aktualizace AKI/AKD 2026",
    "url": "https://kdigo.org/guidelines/acute-kidney-injury/",
    "locator": "K 29. 10. 2026: po veřejném připomínkování, příprava publikace; návrh není finální guideline"
  },
  "akiNICE": {
    "label": "NICE NG148 · Akutní poškození ledvin",
    "url": "https://www.nice.org.uk/guidance/ng148/chapter/Recommendations",
    "locator": "1.3–1.5: detekce, příčina, diuretika a urgentní indikace RRT"
  },
  "akiClinical": {
    "label": "Merck Manual 2026 · AKI",
    "url": "https://www.merckmanuals.com/professional/nephrology/acute-kidney-injury/acute-kidney-injury-aki",
    "locator": "Autorský výklad: prerenální, renální a postrenální příčiny, klinika a vyšetření"
  },
  "alfAASLD": {
    "label": "AASLD 2011 · Akutní jaterní selhání",
    "url": "https://www.aasld.org/sites/default/files/2023-03/Acute%20Liver%20Failure%20Update2011.pdf",
    "locator": "Definice, časný kontakt transplantačního centra, etiologie a N-acetylcystein; starší position paper"
  },
  "alfSCCM": {
    "label": "SCCM 2023 · Jaterní selhání v ICU, část II",
    "url": "https://www.sccm.org/clinical-resources/guidelines/guidelines/guidelines-for-the-management-of-liver-failure-2",
    "locator": "ALF: neurologie, nevhodnost rutinní invazivní ICP monitorace, hypertonický NaCl a výměna plazmy; odlišit od doporučení pro ACLF"
  },
  "alfUpdate": {
    "label": "Management of Acute Liver Failure · Update 2022",
    "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10576953/",
    "locator": "Odborný přehled: intenzivní péče, CRRT, koagulace a transplantace; není nová společenská guideline"
  },
  "hfESC2026": {
    "label": "ESC 2026 · Srdeční selhání",
    "url": "https://doi.org/10.1093/eurheartj/ehag100",
    "locator": "Oddíly 5–7 a 13: nová klasifikace EF, základní léčba, tabulka 9 akutní péče; vydáno 28. 8. 2026"
  },
  "hfESC2021": {
    "label": "ESC 2021 · Akutní srdeční selhání",
    "url": "https://academic.oup.com/eurheartj/article/42/36/3599/6358045",
    "locator": "Oddíl 11: akutní diagnostika a léčba; použity principy znovu ověřené v ESC 2026, nikoli stará klasifikace jako aktuální"
  },
  "hfNICE": {
    "label": "NICE CG187 · Akutní srdeční selhání",
    "url": "https://www.nice.org.uk/guidance/cg187/chapter/Recommendations",
    "locator": "1.2–1.3: natriuretické peptidy, echokardiografie, bez rutinního Swan–Ganzova katétru"
  },
  "hfACC2024": {
    "label": "ACC 2024 · Léčba HFrEF",
    "url": "https://www.acc.org/latest-in-cardiology/ten-points-to-remember/2024/03/06/19/22/2024-acc-expert-consensus-hfref",
    "locator": "Oficiální souhrn konsenzu: zahájení a titrace, betablokátor po kompenzaci; starší definice HFrEF, pro klasifikaci viz ESC 2026"
  },
  "pulmonaryEdema": {
    "label": "Merck Manual 2025 · Plicní edém",
    "url": "https://www.merckmanuals.com/professional/cardiovascular-disorders/heart-failure/pulmonary-edema",
    "locator": "Autorský klinický výklad: mechanismus, spouštěče a klinické projevy, nikoli guideline"
  },
  "rvAHA": {
    "label": "AHA 2018 · Pravostranné srdeční selhání",
    "url": "https://doi.org/10.1161/CIR.0000000000000560",
    "locator": "Scientific statement: příčiny, venózní kongesce a komorová interdependence"
  },
  "rvAcute": {
    "label": "ACVC/ESC 2024 · Akutní cor pulmonale",
    "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10927027/",
    "locator": "Konsenzus: náhlé zvýšení afterloadu PK, objem, vazopresory/inotropika a ventilace; není univerzální doporučení pro všechny příčiny RV selhání"
  },
  "rvClinical": {
    "label": "Merck Manual 2025 · Right heart failure and cor pulmonale",
    "url": "https://www.merckmanuals.com/professional/cardiovascular-disorders/heart-failure/right-heart-failure-and-cor-pulmonale",
    "locator": "Klinické projevy, zobrazování a odlišení cor pulmonale; autorský výklad"
  },
  "phESC": {
    "label": "ESC/ERS 2022 · Plicní hypertenze",
    "url": "https://academic.oup.com/eurheartj/article/43/38/3618/6673929",
    "locator": "Oddíly 6 a 8–10: léčba podle skupiny PH, PH při levostranném selhání, PAH/CTEPH a specializovaná centra"
  },
  "nutritionESPEN": {
    "label": "ESPEN 2023 · Výživa v intenzivní péči",
    "url": "https://lms.espen.org/files/ESPEN-Guidelines/ESPEN_practical_and_partially_revised_guideline_Clinical_nutrition_in_the_intensive_care_unit.pdf",
    "locator": "Praktické, částečně revidované doporučení: cesta, načasování, kalorimetrie, energie a protein"
  },
  "nutritionESICM": {
    "label": "ESICM 2017 · Časná enterální výživa",
    "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC5323492/",
    "locator": "Doporučení 1–12: časná EN, šok, kontraindikace a intolerance"
  },
  "nutritionAlbumin": {
    "label": "ASPEN 2021 · Albumin a prealbumin",
    "url": "https://doi.org/10.1002/ncp.10588",
    "locator": "Position paper: viscerální proteiny nejsou samostatné ukazatele malnutrice ani adekvátnosti výživy"
  },
  "nutritionNICE": {
    "label": "NICE CG32 · Nutriční podpora dospělých",
    "url": "https://www.nice.org.uk/guidance/cg32/chapter/Recommendations",
    "locator": "1.3–1.5: hodnocení, bilance, monitorace; 1.4.6–1.4.8: riziko refeedingu. Obecné doporučení, ne cíle akutní ICU výživy"
  },
  "refeedingASPEN": {
    "label": "ASPEN 2020 · Refeeding syndrom",
    "url": "https://doi.org/10.1002/ncp.10474",
    "locator": "Definice a tabulka 6: dospělí v riziku, thiamin, fosfát/K/Mg, postupné navyšování energie"
  },
  "padis2018": {
    "label": "SCCM PADIS 2018 · Bolest a sedace",
    "url": "https://www.sccm.org/clinical-resources/guidelines/guidelines/guidelines-for-the-prevention-and-management-of-pa",
    "locator": "Hodnocení bolesti, analgezie před sedací, lehká sedace a nefarmakologická péče; změněné body viz update 2025"
  },
  "padis2025": {
    "label": "SCCM PADIS · Cílená aktualizace 2025",
    "url": "https://www.sccm.org/clinical-resources/guidelines/guidelines/focused-update-padis-guideline",
    "locator": "Pět aktualizovaných bodů: úzkost, dexmedetomidin, antipsychotika, mobilizace a melatonin"
  },
  "icuBundle": {
    "label": "SCCM · ICU Liberation ABCDEF",
    "url": "https://www.sccm.org/clinical-resources/iculiberation-home/abcdef-bundles",
    "locator": "A–F: bolest, probouzení a dechová zkouška, volba léčiv, delirium, mobilizace a rodina"
  },
  "camICU": {
    "label": "Vanderbilt CIBS · Monitorování deliria",
    "url": "https://www.icudelirium.org/medical-professionals/delirium/monitoring-delirium-in-the-icu",
    "locator": "CAM-ICU/ICDSC, manuál a RASS; nelze vyšetřit není totéž co negativní výsledek"
  },
  "rassQUT": {
    "label": "QUT · RASS a CAM-ICU",
    "url": "https://www.delirium.health.qut.edu.au/identification-and-management/cam-icu",
    "locator": "Výuková tabulka RASS −5 až +4 a hranice hodnotitelnosti CAM-ICU"
  },
  "propofolICU": {
    "label": "Propofol · SmPC",
    "url": "https://www.medicines.org.uk/emc/product/11294/smpc",
    "locator": "4.4 a 4.8: hypotenze, lipidy a propofolový infuzní syndrom"
  },
  "dexICU": {
    "label": "Dexdor · SmPC",
    "url": "https://www.medicines.org.uk/emc/product/4783/smpc",
    "locator": "4.2–4.4: lehká sedace, kardiální monitorace, bradykardie/hypotenze; bez nasycovací dávky v ICU"
  },
  "midazolamICU": {
    "label": "Midazolam · SmPC",
    "url": "https://www.medicines.org.uk/emc/product/3605/smpc",
    "locator": "4.2 a 5.2: akumulace při dlouhé infuzi, renální a jaterní dysfunkce"
  },
  "acidMerck": {
    "label": "Merck Manual · Acid–base disorders",
    "url": "https://www.merckmanuals.com/professional/nephrology/acid-base-regulation-and-disorders/acid-base-disorders",
    "locator": "Autorský klinický výklad: čtyři poruchy, kompenzace, smíšené stavy; nikoli společenské doporučení"
  },
  "acidSRLF": {
    "label": "SRLF/SFMU 2019 · Metabolická acidóza",
    "url": "https://link.springer.com/article/10.1186/s13613-019-0563-2",
    "locator": "Diagnostika: očekávaný PaCO₂, anion gap a korekce na albumin"
  },
  "bicarICU2": {
    "label": "BICARICU-2 · Randomizovaná studie 2025",
    "url": "https://jamanetwork.com/journals/jama/fullarticle/2840824",
    "locator": "Primární výsledek: 90denní mortalita; sekundární potřeba náhrady funkce ledvin"
  },
  "alkalosisMerck": {
    "label": "Merck Manual · Metabolická alkalóza",
    "url": "https://www.merckmanuals.com/professional/nephrology/acid-base-regulation-and-disorders/metabolic-alkalosis",
    "locator": "Chlorid-responzivní a rezistentní alkalóza; léčba příčiny"
  },
  "hypoNaEurope": {
    "label": "Evropské doporučení 2014 · Hyponatremie",
    "url": "https://academic.oup.com/ejendo/article/170/3/G1/6668028",
    "locator": "Diagnostika hypotonicity, močová osmolalita a sodík; SIAD jako diagnóza po vyloučení jiných příčin"
  },
  "hypoNaEmergency": {
    "label": "Society for Endocrinology 2022 · Akutní hyponatremie",
    "url": "https://www.endocrinology.org/media/xhrhxhxm/emergency-management-of-severe-and-moderately-severely-symptomatic-hyponatraemia-in-adult-patients-2022.pdf",
    "locator": "Algoritmus symptomatických dospělých: 3% NaCl, počáteční cíl, korekční limity a překročení"
  },
  "hyperNaNHS": {
    "label": "NHS Ayrshire & Arran · Hypernatremie",
    "url": "https://aaamedicines.org.uk/guidelines/electrolyte-disturbances/management-of-hypernatraemia/",
    "locator": "Místní nemocniční postup: deficit vody, obnova cirkulace, průběžná korekce"
  },
  "diabetesInsipidus": {
    "label": "Society for Endocrinology 2018 · Centrální diabetes insipidus",
    "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC6013691/",
    "locator": "Hospitalizovaný dospělý se známým CDI: bilance, desmopresin, obnova objemu a sledování Na"
  },
  "hyperK2026": {
    "label": "UKKA · Hyperkalemie dospělých, aktualizace červenec 2026",
    "url": "https://www.ukkidney.org/sites/default/files/documents/FINAL%20VERSION%20-%20UKKA%20CLINICAL%20PRACTICE%20GUIDELINE%20-%20MANAGEMENT%20OF%20HYPERKALAEMIA%20IN%20ADULTS%20-%20UPDATED%20JULY%202026_0.pdf",
    "locator": "Doporučení 14–18: EKG, kalcium, inzulin/glukóza, eliminace K a monitorace"
  },
  "hypoKSPS": {
    "label": "NHS SPS 2024 · Hypokalemie",
    "url": "https://sps.nhs.uk/articles/hypokalaemia/",
    "locator": "Perorální a intravenózní substituce, koncentrace, rychlost a monitorace"
  },
  "hypoMgSPS": {
    "label": "NHS SPS 2024 · Akutní hypomagnezemie",
    "url": "https://sps.nhs.uk/articles/treating-acute-hypomagnesaemia-in-adults/",
    "locator": "Dávky v gramech a mmol, rychlost infuze a renální funkce"
  },
  "hyperMgProduct": {
    "label": "Australian Commission · Magnesium sulfate AFT",
    "url": "https://www.safetyandquality.gov.au/medicine-finder/magnesium-sulfate-aft",
    "locator": "Produktová informace: předávkování, toxicita, kalcium a dialýza"
  },
  "hypoCaEndo": {
    "label": "Society for Endocrinology · Hypokalcemie, dodatek 2019",
    "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC8117371/",
    "locator": "Upřesnění akutního podání 10% kalcium glukonátu a rozdílu proti chloridu"
  },
  "hyperCaEndo": {
    "label": "Society for Endocrinology 2016 · Akutní hyperkalcemie",
    "url": "https://www.endocrinology.org/media/4277/emergency-guidance_acute-hypercalcaemia-in-adults.pdf",
    "locator": "Vyšetření PTH, rehydratace, antiresorpční léčba a renální selhání"
  },
  "ardsGlobal": {
    "label": "Globální definice ARDS · 2023/2024",
    "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10870872/",
    "locator": "Tabulka 1: čas, zobrazení, původ edému a oxygenace; workshopový konsenzus"
  },
  "ardsATS": {
    "label": "ATS 2024 · Léčba ARDS dospělých",
    "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10870893/",
    "locator": "Souhrn doporučení: VT, plateau, PEEP, kortikosteroidy, VV-ECMO"
  },
  "ardsESICM": {
    "label": "ESICM 2023 · Respirační podpora u ARDS",
    "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10354163/",
    "locator": "Doporučení 7.1–7.2: časná pronace při P/F < 150, alespoň 16 hodin"
  },
  "ardsNMBA": {
    "label": "SCCM 2026 · Nervosvalová blokáda u ARDS",
    "url": "https://www.sccm.org/clinical-resources/guidelines/guidelines/guidelines-for-the-administration-of-neuromuscular-blockade",
    "locator": "NMBA administration: přetrvávající hypoxemie či nedosažení ventilačních cílů při sedaci"
  },
  "ventAssessment": {
    "label": "AARC 2024 · Patient–Ventilator Assessment",
    "url": "https://doi.org/10.4187/respcare.12007",
    "locator": "Doporučení: VT/PBW, plateau, PEEP/auto-PEEP, driving pressure, zvlhčení a rourka"
  },
  "ventSBT": {
    "label": "AARC 2024 · Spontaneous Breathing Trials",
    "url": "https://www.aarc.org/wp-content/uploads/2023/11/CPG2024SpontaneousBreathingTrial.pdf",
    "locator": "Doporučení 1–4; SBT není totéž co extubace"
  },
  "ventPrimer": {
    "label": "AACN · Mechanical Ventilation Settings",
    "url": "https://aacn.s3-us-west-2.amazonaws.com/Courses/ecco/course-resources/resources/pulmonary2/ecco-pulmonary-mechanical-ventilation-settings.pdf",
    "locator": "Výukový materiál, s. 2–5: AC, PCV, PSV a PEEP/CPAP; základní principy, nikoli aktuální ARDS protokol"
  },
  "ventTrouble": {
    "label": "Vanderbilt · Introduction to Ventilator Management",
    "url": "https://vimbook.vumc.org/critical-care/introduction-vent-management",
    "locator": "Výukový nemocniční text: plateau, auto-PEEP a diferenciální diagnostika alarmů"
  },
  "ventSafe": {
    "label": "AARC/UHC · Safe Initiation and Management of Mechanical Ventilation",
    "url": "https://www.aarc.org/wp-content/uploads/2017/03/Issue-Paper-Safe-Initiation-and-Management-of-Mechanical-Ventilation.pdf",
    "locator": "Nastavení pro pacienta, alarmy, kontrola okruhu a odpovědi na změny; základní bezpečnostní dokument"
  },
  "ardsnet": {
    "label": "NHLBI ARDSNet · Protokol FACTT",
    "url": "https://biolincc.nhlbi.nih.gov/media/studies/factt/Protocol.pdf",
    "locator": "Oddíl C: predikovaná hmotnost, cílový VT 6 ml/kg a titrace podle tlaků/pH; historický výzkumný protokol"
  },
  "oxygenSRLF": {
    "label": "SRLF/SFMU 2024 · Akutní hypoxemické respirační selhání",
    "url": "https://link.springer.com/article/10.1186/s13613-024-01367-2",
    "locator": "Otázka 7: indikace a zvažování intubace; konsenzus panelu"
  },
  "ssc2026": {
    "label": "SSC 2026 · Sepse a septický šok dospělých",
    "url": "https://www.sccm.org/clinical-resources/guidelines/guidelines/surviving-sepsis-campaign-international-guidelines-for-management-of-sepsis-and-septic-shock-2026",
    "locator": "Screening, antibiotic initiation, source control, fluid resuscitation, MAP, vasopressors"
  },
  "sepsis3": {
    "label": "Sepsis-3 · Mezinárodní konsenzus 2016",
    "url": "https://doi.org/10.1001/jama.2016.0287",
    "locator": "Definice sepse a šoku, SOFA a omezení SIRS/qSOFA"
  },
  "amr2026": {
    "label": "IDSA 2026 · Antimikrobiální rezistence",
    "url": "https://www.idsociety.org/practice-guideline/amr-guidance/",
    "locator": "General Management Suggestions: empirická léčba, délka a převod na p.o.; americký kontext"
  },
  "atbPK": {
    "label": "ESICM/ESCMID a další · TDM v intenzivní péči, 2020",
    "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC7223855/",
    "locator": "PK/PD, beta-laktamy, aminoglykosidy, nasycovací dávka a změny clearance"
  },
  "vancoAUC": {
    "label": "ASHP/IDSA/PIDS/SIDP 2020 · Vankomycin",
    "url": "https://www.idsociety.org/practice-guideline/vancomycin",
    "locator": "Executive summary: závažné MRSA infekce, AUC24 400–600 při MIC 1 mg/l"
  },
  "cultures": {
    "label": "CDC · Odběr hemokultur u dospělých",
    "url": "https://www.cdc.gov/lab-quality/php/preventing-adult-blood-culture-contamination/collect.html",
    "locator": "Alespoň dvě sady, objem, aseptický odběr a identifikace vzorků"
  },
  "steroidsShock": {
    "label": "SCCM 2024 · Kortikosteroidy u septického šoku",
    "url": "https://doi.org/10.1097/CCM.0000000000006172",
    "locator": "Doporučení 1A/1B a tabulka 4: běžný režim hydrokortizonu, ne vysoké krátké pulzy"
  },
  "candidaDuration": {
    "label": "IDSA 2016 · Kandidémie",
    "url": "https://www.idsociety.org/practice-guideline/candidiasis/",
    "locator": "Doporučení 11–12: kontrolní kultury a délka nekomplikované kandidémie u non-neutropenických"
  },
  "traumaBleeding": {
    "label": "Evropské doporučení 2023 · Krvácení po traumatu, 6. vydání",
    "url": "https://link.springer.com/article/10.1186/s13054-023-04327-7",
    "locator": "Doporučení 9–11, 13, 23, 29 a 31: Hb, koagulace, tlak, TXA, fibrinogen, kalcium"
  },
  "traumaNICE": {
    "label": "NICE NG39 · Major trauma, 2016",
    "url": "https://www.nice.org.uk/guidance/ng39/chapter/Recommendations",
    "locator": "1.4.1–2; 1.5.3, 13–18, 27–38: hrudník, krvácení, zobrazování a operace"
  },
  "traumaFirstAid": {
    "label": "RCUK 2025 · First aid",
    "url": "https://www.resus.org.uk/professional-library/2025-resuscitation-guidelines/first-aid-guidelines",
    "locator": "Life-threatening bleeding; scene safety; prevention of hypothermia"
  },
  "atls11": {
    "label": "ACS 2025 · Zavedení ATLS 11",
    "url": "https://www.facs.org/for-medical-professionals/news-publications/news-and-articles/acs-brief/september-16-2025-issue/trauma-care-gets-major-upgrade-with-launch-of-atls-11/",
    "locator": "Oficiální oznámení: xABCDE, katastrofické zevní krvácení před airway; nejde o celý manuál"
  },
  "berlin": {
    "label": "Pape et al. 2014 · Berlínská definice polytraumatu",
    "url": "https://pubmed.ncbi.nlm.nih.gov/25494433/",
    "locator": "Původní konsenzus: AIS ≥ 3 ve dvou oblastech a přidružené rizikové kritérium"
  },
  "uhsTrauma": {
    "label": "UHS · Adult Major Trauma Guidelines, místní postup 2022",
    "url": "https://www.uhs.nhs.uk/Media/SUHTExtranet/WessexTraumaNetwork/UHS-adult-major-trauma-guidelines.pdf",
    "locator": "Oddíly 2.1–2.6, 2.9: základní vyšetření a organizace; nepřebíráme starší dávkové protokoly"
  },
  "majorHaemorrhage": {
    "label": "BSH 2022 · Major haemorrhage",
    "url": "https://cms.b-s-h.org.uk/guidelines/guidelines/haematological-management-of-major-haemorrhage-2022",
    "locator": "Veřejný souhrn: časné rozpoznání, spolupráce laboratoře a kliniky; stránka revidována 2025"
  },
  "giTXA": {
    "label": "BSG/ACPGBI 2026 · TXA při krvácení do GIT",
    "url": "https://fg.bmj.com/content/early/2026/02/11/flgastro-2026-103607",
    "locator": "Interpretation and BSG/ACPGBI position: nepodávat rutinně u akutního horního ani dolního GIT krvácení"
  },
  "mh": {
    "label": "EMHG 2024 · Malignant hyperthermia crisis",
    "url": "https://www.emhg.org/recommendations-1/2024/11/4/recognising-and-managing-a-malignant-hyperthermia-crisis-v2024",
    "locator": "Box 1–2: spouštěče, rozpoznání, dantrolen a sledování"
  },
  "mhMechanism": {
    "label": "MHAUS · Podstata maligní hypertermie",
    "url": "https://www.mhaus.org/about/what-is-mh-mhaus/",
    "locator": "What is MH? — kalcium a hypermetabolismus kosterního svalu"
  },
  "last": {
    "label": "ASRA 2020 · LAST checklist v1.1",
    "url": "https://asra.com/docs/default-source/guidelines-articles/local-anesthetic-systemic-toxicity-rgb.pdf?sfvrsn=33b348e_2",
    "locator": "20% lipid, dávky podle hmotnosti, odlišnosti resuscitace, observace"
  },
  "lastAdvisory": {
    "label": "ASRA · Third Practice Advisory on LAST, 2017/2018",
    "url": "https://rapm.bmj.com/content/rapm/43/2/113.full.pdf",
    "locator": "Prevention a diagnosis: kumulativní dávka, variabilní/opožděné projevy"
  },
  "nmb": {
    "label": "ASA 2023 · Monitoring and Antagonism of Neuromuscular Blockade",
    "url": "https://doi.org/10.1097/ALN.0000000000004379",
    "locator": "Recommendations: kvantitativní TOF, adductor pollicis, antagonizace"
  },
  "hypoxia": {
    "label": "Association of Anaesthetists · QRH 2-2, 2018",
    "url": "https://anaesthetists.org/Portals/0/PDFs/QRH/QRH_2-2_Hypoxia-desaturation-cyanosis_v1.pdf",
    "locator": "Hypoxia / desaturation / cyanosis: přívod O₂, pomůcka, okruh, ventilace"
  },
  "hypotension": {
    "label": "Association of Anaesthetists · QRH 2-4, 2018",
    "url": "https://anaesthetists.org/Portals/0/PDFs/QRH/QRH_2-4_Hypotension_v1.pdf",
    "locator": "Hypotension: kontrola ABC, chirurgické příčiny a léky"
  },
  "laryngospasm": {
    "label": "Association of Anaesthetists · QRH 3-6, 2018",
    "url": "https://anaesthetists.org/Portals/0/PDFs/QRH/QRH_3-6_Laryngospasm_and_stridor_v1.pdf",
    "locator": "Laryngospasm and stridor: přerušení stimulace, jaw thrust, CPAP a eskalace"
  },
  "bronchospasm": {
    "label": "Association of Anaesthetists · QRH 3-4, 2023",
    "url": "https://anaesthetists.org/Portals/0/PDFs/QRH/QRH_3-4_Bronchospasm_v3_June%202023.pdf",
    "locator": "Bronchospasm: napodobující stavy, salbutamol, aspirace, ventilace"
  },
  "gaRisks": {
    "label": "Royal College of Anaesthetists · Rizika celkové anestezie",
    "url": "https://rcoa.ac.uk/patients/patient-information-resources/anaesthesia-risk/risks-associated-general-anaesthesia",
    "locator": "Přehled respiračních, neurologických a mechanických komplikací"
  },
  "awareness": {
    "label": "RCoA · Accidental awareness",
    "url": "https://www.rcoa.ac.uk/patients/patient-information-resources/anaesthesia-risk/risks-associated-general-anaesthesia/accidental-awareness",
    "locator": "Příčiny a následná péče při vědomém prožitku během celkové anestezie"
  },
  "ponvSummary": {
    "label": "Gan et al. · Fifth Consensus Guidelines, executive summary",
    "url": "https://doi.org/10.1213/ANE.0000000000007816",
    "locator": "Dospělí: multimodální profylaxe a záchranná léčba jiné třídy; 2025/2026"
  },
  "bupivacaine": {
    "label": "Bupivacaine · SmPC, Aspen",
    "url": "https://www.medicines.org.uk/emc/product/13990/smpc",
    "locator": "§ 4.1, 4.4, 4.8, 5.1: účinek, dávková závislost, toxicita"
  },
  "lidocaine": {
    "label": "Lidocaine · SmPC",
    "url": "https://www.medicines.org.uk/emc/product/12800/smpc",
    "locator": "§ 4.1 a 5.1: amidové lokální anestetikum a použití"
  },
  "ropivacaine": {
    "label": "Ropivacaine · SmPC, Sandoz",
    "url": "https://www.medicines.org.uk/emc/product/100394/smpc",
    "locator": "§ 4.2, 4.5, 6.6: epidurální kombinace s opioidem, aditivní toxicita, kompatibilita"
  },
  "chloroprocaine": {
    "label": "Chloroprocaine (Ampres) · SmPC",
    "url": "https://www.medicines.org.uk/emc/product/15158/smpc",
    "locator": "§ 5.1–5.2: esterové anestetikum a hydrolýza v plazmě"
  },
  "highBlock": {
    "label": "OAA 2024 · High central neuraxial block",
    "url": "https://www.oaa-anaes.ac.uk/downloads/oaa-qrh/obstetric-quick-reference-handbook-jan-24-.pdf",
    "locator": "Karta 2-7; porodnický kontext, podpora ABC do odeznění bloku"
  },
  "neuroRegional": {
    "label": "ASA 2023 · Neurologické komplikace neuraxiální anestezie v porodnictví",
    "url": "https://www.asahq.org/standards-and-practice-parameters/statement-on-neurologic-complications-of-neuraxial-analgesia-anesthesia-in-obstetrics",
    "locator": "Imaging; neurologická konzultace, progresivní deficit a komprese"
  },
  "antithrombotic": {
    "label": "ASRA 2025 · Antithrombotic Therapy, 5th edition",
    "url": "https://rapm.bmj.com/content/early/2025/09/16/rapm-2024-105766",
    "locator": "Neuraxiální a hluboké blokády, intervaly podle léčiva/dávky/funkce ledvin a katétrů"
  },
  "pdpH": {
    "label": "Multisociety consensus · Postdural puncture headache, 2023/2024",
    "url": "https://rapm.bmj.com/content/49/7/471",
    "locator": "Diagnóza, varovné příznaky, zobrazování a epidurální krevní zátka"
  },
  "das2025": {
    "label": "DAS 2025 · Obtížná intubace dospělých",
    "url": "https://doi.org/10.1016/j.bja.2025.10.006",
    "locator": "Plány A–D, potvrzení intubace; BJA 136 (2026), s. 283–307"
  },
  "awake": {
    "label": "DAS 2019 · Awake tracheal intubation",
    "url": "https://das.uk.com/guidelines/das-guidelines-for-awake-tracheal-intubation-ati-in-adults/",
    "locator": "Recommendations 1–8: indikace, oxygenace, lokální anestezie a kontrola polohy"
  },
  "asaAirway": {
    "label": "ASA 2022 · Difficult Airway",
    "url": "https://doi.org/10.1097/ALN.0000000000004002",
    "locator": "Anticipated difficult airway management: strategie a indikace bdělé intubace"
  },
  "cspine": {
    "label": "DAS a další společnosti 2024 · Poranění krční páteře",
    "url": "https://fphc.rcsed.ac.uk/media/3594/airway-management-in-patients-with-suspected-or-confirmed-cervical-spine-injury.pdf",
    "locator": "Doporučení 1–9: jaw thrust, videolaryngoskopie, přední díl límce"
  },
  "airwayBasic": {
    "label": "AHA 2025 · Adult BLS — zprůchodnění dýchacích cest",
    "url": "https://cpr.heart.org/en/resuscitation-science/cpr-and-ecc-guidelines/adult-basic-life-support",
    "locator": "Opening the Airway; Head and Neck Trauma"
  },
  "upperAirway": {
    "label": "RCH · Acute upper airway obstruction",
    "url": "https://www.rch.org.au/clinicalguide/guideline_index/Acute_upper_airway_obstruction/",
    "locator": "Assessment, differential diagnoses, investigations, treatment; místní pediatrický postup"
  },
  "croup": {
    "label": "RCH · Croup (laryngotracheobronchitis)",
    "url": "https://www.rch.org.au/clinicalguide/guideline_index/Croup_Laryngotracheobronchitis/",
    "locator": "Závažnost, vyšetření, Medication: severe / life-threatening; dávky dle RCH"
  },
  "paedAirway": {
    "label": "RCH · Emergency airway management",
    "url": "https://www.rch.org.au/clinicalguide/guideline_index/Emergency_airway_management/",
    "locator": "Key points, preparation, optimisation of physiology, monitoring"
  },
  "inhaled": {
    "label": "RCH · Foreign bodies inhaled",
    "url": "https://www.rch.org.au/clinicalguide/guideline_index/Foreign_bodies_inhaled/",
    "locator": "Key points, investigations, subacute management; normální RTG nevylučuje aspiraci"
  },
  "pls": {
    "label": "ERC 2025 · Paediatric Life Support",
    "url": "https://www.erc.edu/media/03xnpjmj/gl2025-09-pls-e.pdf",
    "locator": "Concise guidelines: PALS, s. 19–20; algoritmus a reverzibilní příčiny"
  },
  "pbls": {
    "label": "RCUK 2025 · Paediatric Life Support",
    "url": "https://www.resus.org.uk/professional-library/2025-resuscitation-guidelines/paediatric-basic-life-support-guidelines",
    "locator": "PBLS; chest compressions; post-resuscitation care"
  },
  "nls": {
    "label": "ERC 2025 · Newborn Life Support",
    "url": "https://www.erc.edu/media/rgrn0faa/gl2025-08-nls-e.pdf",
    "locator": "Concise guidelines: circulation a medication, s. 11"
  },
  "transition": {
    "label": "RCUK 2025 · Newborn resuscitation",
    "url": "https://www.resus.org.uk/professional-library/2025-resuscitation-guidelines/newborn-resuscitation-and-support-transition-infants-birth",
    "locator": "Thermal care, cord, initial assessment, lung inflation, oxygen"
  },
  "wao": {
    "label": "WAO Anaphylaxis Guidance 2020",
    "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC7607509/",
    "locator": "Definice, tabulka 2, mechanismy, tabulka 6"
  },
  "special": {
    "label": "ERC 2025 · Special Circumstances",
    "url": "https://www.erc.edu/media/wwufbysp/gl2025-06-spec-circ-e.pdf",
    "locator": "Anaphylaxis: poloha, adrenalin, tekutiny, projevy během anestezie"
  },
  "anaphylaxis": {
    "label": "RCUK · Emergency treatment of anaphylaxis, 2021",
    "url": "https://www.resus.org.uk/media/337/download",
    "locator": "§ 5.4–5.5, 6 (refrakterní průběh), 7 (tryptáza), 8 (následná péče)"
  },
  "rc2025": {
    "label": "RCUK 2025 · Special circumstances",
    "url": "https://www.resus.org.uk/professional-library/2025-resuscitation-guidelines/special-circumstances-guidelines",
    "locator": "Management and prevention of cardiac arrest due to anaphylaxis"
  },
  "adaDKA": {
    "label": "ADA/EASD a další 2024 · Hyperglykemické krize",
    "url": "https://doi.org/10.2337/dci24-0032",
    "locator": "Konsenzus 2024: kalium, terapie a kritéria úpravy DKA; diagnostika potvrzena ADA 2026."
  },
  "adaHypo": {
    "label": "ADA Standards of Care 2026 · Hypoglykemie",
    "url": "https://doi.org/10.2337/dc26-S006",
    "locator": "Oddíl 6: klasifikace, perorální léčba, glukagon a prevence."
  },
  "jbdsDKA": {
    "label": "JBDS-IP 2023 · DKA dospělých",
    "url": "https://www.diabetes.org.uk/sites/default/files/2023-03/JBDS%2002%20DKA%20Guideline%20with%20qr%20code.pdf",
    "locator": "Tekutiny, fixní inzulin a monitorování; novější kritéria z ADA/EASD 2024 uváděna odděleně."
  },
  "tisPraha": {
    "label": "TIS ČR · Konzultace akutních otrav",
    "url": "https://www.tis-cz.cz/",
    "locator": "Kontakty a konzultace; konkrétní postup podle látky a pacienta."
  },
  "aactDecon": {
    "label": "AACT/EAPCCT 2013 · Výplach žaludku",
    "url": "https://www.clintox.org/wp-content/uploads/2016/04/Gastric-Lavage-2013.pdf",
    "locator": "Výplach není rutinní; přínos nejistý, závažná rizika a potřeba zkušeného týmu."
  },
  "extripGroup": {
    "label": "EXTRIP Workgroup · Mimotělní eliminace u otrav",
    "url": "https://www.extrip-workgroup.org/guidelines",
    "locator": "Doporučení pro hemodialýzu: toxické alkoholy, lithium, salicyláty a teofylin"
  },
  "paracetamolNPIS": {
    "label": "MHRA · Paracetamol a acetylcystein",
    "url": "https://www.gov.uk/drug-safety-update/treating-paracetamol-overdose-with-intravenous-acetylcysteine-new-guidance",
    "locator": "Nomogram a jeho omezení, časná léčba NAC; britský postup, místní režim s TIS."
  },
  "toxicAlcohols": {
    "label": "EXTRIP · Metanol",
    "url": "https://www.extrip-workgroup.org/methanol",
    "locator": "Indikace dialýzy u metanolu; etylenglykol má samostatný algoritmus."
  },
  "coGuideline": {
    "label": "CDC · Klinická péče při otravě CO",
    "url": "https://www.cdc.gov/carbon-monoxide/hcp/clinical-guidance/index.html",
    "locator": "Klinika, CO-oxymetrie, oxygenoterapie a zvážení HBO; koncentrace sama neurčuje tíži."
  },
  "opioidWHO": {
    "label": "WHO 2014 · Community management of opioid overdose",
    "url": "https://www.who.int/publications/i/item/9789241548816",
    "locator": "Komunitní rozpoznání, naloxon a podpora dýchání; nemocniční postup doplněn AHA 2025."
  },
  "tcaToxicology": {
    "label": "AHA 2025 · Otravy blokátory sodíkových kanálů",
    "url": "https://cpr.heart.org/en/resuscitation-science/cpr-and-ecc-guidelines/adult-and-pediatric-special-circumstances-of-resuscitation/",
    "locator": "TCA: hypertonický bikarbonát, oběhová podpora; flumazenil pouze ve vybraných situacích."
  }
};
Object.assign(answerSources, completionSources);
export const answers = {
  A18: {
    title: 'KPR u dětí a novorozenců (PBLS, PLS a NLS dle ERC 2025)',
    reviewed: '2026-11-03',
    edition: 'ERC 2025 · NLS 2025 · LF OU 2025',
    scope: 'Kompletní zkouškový přehled pediatrické resuscitace (PBLS a PLS) a resuscitace novorozence na porodním sále (NLS); striktní rozlišení asfyktické vs. kardiální etiologie, technické parametry (poměry 15:2 vs. 3:1), přesné hmotnostní dávkování léků, zlatá minuta NLS a zákaz 100% O2 u donošených novorozenců.',
    opening: 'Resuscitace dítěte (PBLS/PLS) a resuscitace novorozence při porodu (NLS) představují dva zcela odlišné klinické scénáře s odlišnou patofyziologií, prioritami i algoritmy. U dětí je zástava oběhu téměř výhradně sekundárním důsledkem hypoxicko-asfyktického stavu (selhání dýchání či cirkulace), proto je absolutní prioritou okamžitá oxygenace a ventilace. U novorozence na porodním sále jde o poruchu poporodní kardiopulmonální adaptace a nevzdušnost plic – základem je rozvinutí plic provzdušněním (inflační vdechy) a zahájení kompresí je indikováno až při selhání adekvátní ventilace.',
    openingRefs: ['pbls', 'nls', 'ou2025'],
    sections: [
      {
        title: '1. Pediatrická vs. novorozenecká KPR – etiologie a principy',
        refs: ['pbls', 'nls', 'ou2025'],
        paragraphs: [
          'Patofyziologický rozdíl: Primární kardiální zástava (VF/pVT) je v pediatrii vzácná (pod 5–10 % případů, typicky kardiomyopatie, kanálopatie, myokarditidy, komoce srdce). Přes 90 % dětských zástav má asfyktický původ: obstrukce dýchacích cest (cizí těleso, laryngitida, epiglotitida), respirační selhání (bronchiolitida, status asthmaticus, pneumonie), tonutí, intoxikace, sepse a hypovolemický šok.',
          'Důsledky pro algoritmus: Protože hypoxie předchází srdeční zástavě, má tělo dítěte vyčerpané zásoby kyslíku a vysokou hladinu CO2. Resuscitace dítěte se proto NIKDY nezahajuje samotnými kompresemi hrudníku, nýbrž VŽDY 5 ÚVODNÍMI ZÁCHRANNÝMI VDECHY! Často samotné vdechy vedou k obnovení spontánní cirkulace dříve, než je nutná srdeční masáž.',
          'Pravidlo jednoho zachránce: Pokud je zdravotník u dítěte se zástavou sám a nemá k dispozici mobilní telefon na hlasitý odposlech, provádí nejprve 1 MINUTU KPR (5 vdechů + cca 1 minutu cyklů 15:2) a teprve poté odbíhá aktivovat ZZS (linka 155). U dospělých se naopak volá okamžitě před zahájením KPR.'
        ]
      },
      {
        title: '2. Základní resuscitace dítěte (PBLS dle ERC 2025)',
        refs: ['pbls'],
        paragraphs: [
          'Postup krok za krokem: 1. Ověření bezpečí scény. 2. Zhodnocení reakce (jemné oslovení, zatřesení rameny u starších dětí, stimulace plosky nohy u kojence). 3. Hlasité volání o pomoc okolí. 4. Zprůchodnění dýchacích cest: neutrální poloha hlavy (sniffing position) u kojence (do 1 roku), mírný záklon hlavy s přizvednutím brady u dětí nad 1 rok. 5. Kontrola dýchání po dobu max. 10 sekund (pohledem na hrudník, poslechem a vnímáním proudu vzduchu).',
          'Úvodní ventilace: Pokud dítě nedýchá normálně nebo lapavě lapá po dechu (gasping), aplikuje se 5 ÚVODNÍCH ZÁCHRANNÝCH VDECHŮ. Každý vdech trvá 1 sekundu a objem se dávkuje pouze k viditelnému zvednutí hrudníku. U kojence obemknou ústa zachránce nos i ústa dítěte současně; u staršího dítěte se stiskne nos a dýchá se do úst.',
          'Kontrola oběhu a známek života (max. 10 sekund): Zdravotníci hmatají pulz na a. brachialis nebo a. femoralis u kojence; na a. carotis nebo a. femoralis u staršího dítěte. ZKOUŠKOVÝ CHYTÁK: Komprese hrudníku se zahajují nejen při nepřítomnosti pulzu, ale VŽDY, pokud je srdeční frekvence < 60/min a jsou přítomny známky špatné perfuze (bledost, mramoráž, cyanóza, snížené vědomí)!',
          'Technika a poměr kompresí: Pro zdravotníky je standardní poměr 15 : 2 (laici mohou používat 30:2, pokud poměr 15:2 neovládají). Frekvence kompresí je 100–120/min. Hloubka stlačení odpovídá alespoň jedné třetině předozadního (AP) průměru hrudníku: u kojence cca 4 cm, u většího dítěte cca 5 cm (u adolescentů max. 6 cm jako u dospělého).',
          'Technika stlačování: U kojence technika dvou palců s obemknutím hrudníku oběma rukama (two-thumb encircling technique) na dolní třetině sterna – poskytuje vyšší koronární perfuzní tlak. U většího dítěte pata jedné ruky nebo obě ruce (jako u dospělého).'
        ]
      },
      {
        title: '3. Rozšířená resuscitace dítěte (PLS) a hmotnostní dávky',
        refs: ['pls', 'ou2025'],
        paragraphs: [
          'Dýchací cesty: Insuflace kyslíku 100%, ventilace obličejovou maskou se samorozpínacím vakem (Ambu). Zajištění dýchacích cest supraglotickou pomůckou (i-gel vel. 1 pro novorozence/kojence 2–5 kg, vel. 1,5 pro 5–12 kg, vel. 2 pro 10–25 kg) nebo orotracheální intubací. Doporučeny jsou tracheální kanyly s těsnicí manžetou (cuffed ETT), vnitřní průměr ID = (věk / 4) + 3,5 mm; tlak v manžetě se udržuje striktně < 20 cmH2O. Po intubaci kontinuální masáž 100–120/min a asynchronní ventilace s dechovou frekvencí podle věku (kojenci 20–25/min, děti 15–20/min).',
          'Cévní vstup: Prioritou je periferní žíla (i.v.). Pokud se nezdaří kanylace do 1 minuty (max. 2 pokusy), OKAMŽITĚ se indikuje intraoseální přístup (i.o.) – proximální tibie (tuberositas tibiae, 1–2 cm distálně a mediálně na plochu tibie). Dávky a rychlost nástupu i.o. jsou identické jako i.v.',
          'Defibrilace: U defibrilovatelných rytmů (VF / pVT) manuální asynchronní výboj energií 4 J/kg (monofázicky i bifázicky). U dětí do 8 let (nebo < 25 kg) se u AED používají pediatrické elektrody s útlumovým členem (atenuátorem na 50–75 J); pokud nejsou k dispozici, použije se standardní dospělý AED.',
          'PŘESNÉ HMOTNOSTNÍ DÁVKOVÁNÍ LÉKŮ (klíč k úspěchu u zkoušky):',
          '1. ADRENALIN: 10 µg/kg i.v./i.o. (= 0,01 mg/kg = 0,1 ml/kg zředěného roztoku 1:10 000; příprava: 1 ml adrenalinu 1 mg/ml + 9 ml FR = 0,1 mg/ml). Podání: u asystolie/PEA ihned, u VF/pVT po 3. výboji, dále opakovat každých 3–5 minut (ob cyklus). Maximální jednotlivá dávka je 1 mg.',
          '2. AMIODARON: 5 mg/kg i.v./i.o. bolus (ředěno v 5% glukóze) po 3. výboji u refrakterní VF/pVT; opakovat druhou dávku 5 mg/kg po 5. výboji (max. jednotlivá dávka 300 mg, resp. 150 mg). Alternativa: lidokain 1 mg/kg.',
          '3. KRYSTALOIDY: Bolus 10 ml/kg balancovaného krystaloidu (Plasmalyte / Ringerfundin) aplikovaný rychle přetlakem během hypovolemie, anafylaxe či septického šoku; přehodnotit odpověď.',
          '4. GLUKÓZA: Hypoglykemie je častou příčinou křečí a zástavy u dětí. Kontrola glykemie je povinná! Při glykemii < 3,0 mmol/l okamžitě podat 10% glukózu v dávce 2–5 ml/kg i.v./i.o.'
        ]
      },
      {
        title: '4. Resuscitace novorozence na porodním sále (NLS dle ERC 2025)',
        refs: ['nls', 'ou2025'],
        paragraphs: [
          'Základní koncept a „zlatá minuta“ (The Golden Minute): Selhání poporodní adaptace vzniká asfyxií a neschopností provzdušnit plíce plné tekutiny. Prioritou prvních 60 sekund po narození je zhodnocení, teplotní komfort a zahájení účinné ventilace.',
          'KROK 1 – Teplotní management a stimulace: Osušení novorozence předehřátou plenou, odstranění vlhké pleny, nasazení čepičky a zabalení do suché předehřáté roušky pod sálavé tepelné těleso (cílová teplota 36,5–37,5 °C). CHYTÁK: Extrémně nedonošení novorozenci (< 28. týden těhotenství) se NEOSUŠUJÍ, nýbrž se ihned po narození od krku dolů vloží do průhledného polyetylenového sáčku/pláště pod sálavé lůžko, aby se zabránilo masivním ztrátám tepla odpařováním.',
          'KROK 2 – Poloha dýchacích cest: Neutrální poloha hlavy („sniffing position“) – mírné podložení ramen složenou plenou (cca 2 cm). Pozor na hyperextenzi (uzavírá dětský hrtan) i flexi hlavy!',
          'KROK 3 – Zhodnocení: Sleduje se dýchání, srdeční frekvence (auskultace fonendoskopem nad srdečním hrotem po dobu 6 sekund x 10, EKG monitorace) a svalový tonus.',
          'KROK 4 – PĚT ÚVODNÍCH INFLAČNÍCH VDECHŮ: Pokud novorozenec nedýchá nebo lapavě dýchá, zahajuje se ventilace 5 inflačními vdechy. Doba každého vdechu je 2–3 SEKUNDY (prodloužený inflační čas nutný k vytlačení fetální plicní tekutiny a vytvoření funkční reziduální kapacity FRC!). Tlak: PEEP 5 cmH2O, inspirační tlak PIP 25–30 cmH2O u donošených (20–25 cmH2O u nedonošených).',
          'KONCENTRACE KYSLÍKU PŘI NLS (zásadní zkoušková otázka): Donošený novorozenec (od 37. týdne) se resuscituje VÝHRADNĚ VZDUCHEM (21% O2)! 100% kyslík je pro novorozence vysoce toxický (tvorba volných kyslíkových radikálů, poškození mozku a myokardu). Nedonošení novorozenci (pod 32. týden) začínají na 21–30% O2. Titrace O2 se řídí pulzní oxymetrií na pravé ruce (preduktální saturace: v 2. min 60 %, v 5. min 80 %, v 10. min 90 %).',
          'KROK 5 – Zhodnocení efektu ventilace: Pokud srdeční frekvence nestoupá a hrudník se nezvedá, zkontroluje se průchodnost DC a těsnost masky (pomůcka MR SOPA: Mask adjustment, Reposition head, Suction mouth/pharynx, Open mouth, Pressure increase, Alternative airway – laryngeální maska i-gel vel. 1 nebo intubace).',
          'KROK 6 – KOMPRESE HRUDNÍKU: Indikovány POUZE tehdy, pokud srdeční frekvence zůstává < 60/min i po úspěšném rozvinutí plic adekvátními inflačními vdechy! Poměr je 3 : 1 (3 stlačení hrudníku na 1 vdech) – za minutu proběhne 90 kompresí a 30 vdechů (celkem 120 cyklů/min). Hloubka stlačení je 1/3 AP průměru hrudníku na dolní třetině sterna technikou dvou palců. Při zahájení kompresí se koncentrace O2 zvyšuje na 100 %.',
          'KROK 7 – Cévní přístup a léky: Kanylace v. umbilicalis (pupečníková žíla – zavedení katétru 3,5–5 Fr do hloubky 3–5 cm do zpětného toku krve) nebo intraoseální vstup. ADRENALIN: 10–20 µg/kg (0,1–0,2 ml/kg roztoku 1:10 000) i.v. se podává při přetrvávající TF < 60/min navzdory efektivní ventilaci a masáži.'
        ]
      }
    ],
    checks: [
      {
        q: 'Proč se resuscitace dítěte zahajuje 5 úvodními vdechy a jaký je poměr kompresí?',
        a: 'Zástava oběhu u dětí je ve více než 90 % způsobena asfyxií a hypoxií, nikoli primární fibrilací komor. Okamžitá oxygenace a rozepnutí plic je proto klíčovým zásahem, který často sám obnoví srdeční akci. Poměr kompresí a ventilace pro zdravotníky je 15:2 (laici 30:2) s frekvencí 100–120/min a hloubkou 1/3 předozadního průměru hrudníku (cca 4 cm u kojence, 5 cm u dítěte).',
        refs: ['pbls']
      },
      {
        q: 'Jaké jsou přesné dávky adrenalinu a amiodaronu u dítěte a jak se připravují?',
        a: 'Adrenalin se podává v dávce 10 µg/kg i.v./i.o. (= 0,01 mg/kg = 0,1 ml/kg zředěného roztoku 1:10 000; 1 mg ampule se naředí do 10 ml FR). U asystolie/PEA se podává ihned, u VF/pVT po 3. výboji, dále každých 3–5 min. Amiodaron se podává v dávce 5 mg/kg i.v./i.o. po 3. výboji a opakuje se po 5. výboji (ředěno v 5% glukóze).',
        refs: ['pls']
      },
      {
        q: 'S jakou koncentrací kyslíku se zahajuje resuscitace donošeného novorozence při NLS a proč?',
        a: 'Resuscitace donošeného novorozence (od 37. týdne) se zahajuje VÝHRADNĚ se vzduchem (21% O2). Použití 100% kyslíku je cytotoxické, vede k masivní produkci reaktivních forem kyslíku (ROS), poškození myokardu i nezralé mozkové tkáně a zvyšuje novorozeneckou mortalitu. Kyslík se titruje nahoru podle preduktální saturace z pulzního oxymetru na pravé ruce.',
        refs: ['nls']
      },
      {
        q: 'Jaký je poměr kompresí a ventilace u novorozence při NLS a kdy se zahajuje masáž?',
        a: 'Poměr je 3:1 (3 stlačení hrudníku na 1 vdech) s frekvencí 90 kompresí a 30 vdechů za minutu (120 dějů/min). Hrudní komprese se zahajují POUZE tehdy, pokud srdeční frekvence novorozence zůstává pod 60/min i po provedení efektivních inflačních vdechů s prokazatelným rozvojem hrudníku.',
        refs: ['nls']
      }
    ]
  },
  B04: {
    title: 'Závažná alergická reakce, anafylaxe a anafylaktický šok',
    reviewed: '2026-11-03',
    edition: 'WAO 2020 · ERC 2025 · LF OU 2025',
    scope: 'Kompletní zkouškový přehled anafylaxe a anafylaktického šoku: patofyziologie (IgE vs. non-IgE), klinická manifestace ve 4 systémech, okamžitá léčba 1. volby (adrenalin intramuskulárně s přesnými dávkami a místem aplikace), tekutinová resuscitace, refrakterní průběh (glukagon u beta-blokátorů, kontinuální vazopresory), léky 2. linie a observace bifázické reakce.',
    opening: 'Anafylaxe je akutní, život ohrožující, generalizovaná hypersenzitivní reakce charakterizovaná rychlým rozvojem obstrukce dýchacích cest (laryngeální edém, bronchospasmus) a/nebo těžkého oběhového selhání (distributivní šok s masivní vazodilatací a kapilárním únikem). Diagnóza je primárně klinická – v přítomnosti akutního postižení ABC se nesmí čekat na rozvoj kožní vyrážky ani laboratorní potvrzení! Základním pilířem záchrany života je okamžité intramuskulární podání adrenalinu.',
    openingRefs: ['wao', 'rc2025', 'ou2025'],
    sections: [
      {
        title: '1. Etiologie, patofyziologie a klinické rozpoznání anafylaxe',
        refs: ['wao', 'special', 'ou2025'],
        paragraphs: [
          'Patofyziologie hypersenzitivity: 1. IgE-mediovaná (imunologická) anafylaxe: alergen se naváže na specifické IgE protilátky fixované na povrchu žírných buněk a bazofilů -> masivní degranulace a uvolnění předtvořených mediátorů (histamin, tryptáza) a syntéza nových (leukotrieny LTC4/LTD4, prostaglandiny, PAF). Vyvolávající faktory: léky (beta-laktamová ATB, myorelaxancia v anestezii – suxamethonium, rokuronium), hmyzí bodnutí (včela, vosa), potraviny (ořechy, arašídy, mák, ryby), latex. 2. Non-IgE anafylaxe (dříve anafylaktoidní / pseudoalergická reakce): přímá neimunologická degranulace žírných buněk nebo porucha metabolismu kyseliny arachidonové bez účasti IgE (radiokontrastní jódové látky, opioidy – morfin, kodein, nesteroidní antiflogistika NSAID). Klinický průběh a léčba jsou u obou forem zcela identické!',
          'Klinická manifestace ve 4 orgánových systémech:',
          '1. Kožní a slizniční příznaky (až u 90 % případů, ale mohou zcela chybět!): generalizovaný pruritus (často začíná svěděním dlaní, plosek či genitálu), generalizovaná kopřivka (urtikárie), difúzní erytém (flush), angioedém (otok rtů, jazyka, měkkého patra a periorbitální oblasti). ZKOUŠKOVÝ CHYTÁK: V celkové anestezii pod rouškami kůže není vidět, nebo kožní reakce chybí v důsledku těžké vazokonstrikce při hlubokém šoku!',
          '2. Respirační příznaky: otok laryngu a hlasivek (pocit cizího tělesa v krku, chrapot, inspirační stridor – hrozící asfyxie!), bronchospasmus (exspirační dušnost, pískoty, vrzoty, u intubovaného pacienta náhlý skokový vzestup špičkového inspiračního tlaku na ventilátoru s poklesem dechového objemu), cyanóza a těžká desaturace.',
          '3. Kardiovaskulární příznaky: tachykardie, náhlý propad krevního tlaku (hypotenze s MAP < 65 mmHg) v důsledku masivní vazodilatace a kapilárního úniku (až 35 % intravaskulárního objemu může uniknout do intersticia během 10 minut!), synkopa, kolaps, těžké komorové arytmie až zástava oběhu (nejčastěji PEA).',
          '4. Gastrointestinální příznaky: náhlé křečovité bolesti břicha, nauzea, profúzní zvracení, urgentní průjem.'
        ]
      },
      {
        title: '2. Okamžitá léčba: Adrenalin intramuskulárně a polohování pacienta',
        refs: ['rc2025', 'wao', 'ou2025'],
        paragraphs: [
          'KROK 1: OKAMŽITÉ ZASTAVENÍ APLIKACE SPÍOUŠTĚČE (zastavit infuzi antibiotika, koloidu či transfuzního přípravku; odstranit latexové rukavice; neodstraňovat však zavedený žilní katétr!).',
          'KROK 2 – LÉK PRVNÍ VOLBY: ADRENALIN INTRAMUSKULÁRNĚ (i.m.):',
          'Adrenalin je jediný lék, který specificky zvrátí všechny život ohrožující projevy anafylaxe: alfa-1 účinkem vyvolá vazokonstrikci a zvedne krevní tlak; beta-1 účinkem zvýší kontraktilitu myokardu; beta-2 účinkem vyvolá bronchodilataci a stabilizuje membrány žírných buněk (inhibuje další vyplavování histaminu).',
          'PŘESNÉ DÁVKOVÁNÍ ADRENALINU i.m. (neředěný roztok 1 mg/ml = 1:1000):',
          '1. DOSPĚLÍ A DĚTI NAD 12 LET: 0,5 mg i.m. (= 0,5 ml neředěného roztoku 1:1000).',
          '2. DĚTI 6–12 LET: 0,3 mg i.m. (= 0,3 ml roztoku 1:1000).',
          '3. DĚTI DO 6 LET: 0,15 mg i.m. (= 0,15 ml roztoku 1:1000; přesné hmotnostní dávkování u dětí: 0,01 mg/kg i.m.).',
          'MÍSTO APLIKACE (Zásadní zkoušková otázka): Aplikuje se VÝHRADNĚ do ANTEROLATERÁLNÍ STRANY STEHNA (musculus vastus lateralis)! Zdejší bohatá kapilární síť zajišťuje maximální a nejrychlejší vstřebání i při centralizovaném oběhu. Aplikace do gluteu nebo paže je CHYBOU pro pomalé a nespolehlivé vstřebání!',
          'OPAKOVÁNÍ DÁVKY: Pokud do 5 minut nedojde ke zlepšení stavu, dávka 0,5 mg i.m. se OPAKUJE (opakovat lze každých 5 minut podle klinické odezvy).',
          'ZKOUŠKOVÝ CHYTÁK O NITROŽILNÍM ADRENALINU: Intravenózní bolusové podání neředěného adrenalinu v terénu je PŘÍSNĚ ZAKÁZÁNO pro extrémní riziko fatálních komorových arytmií, maligní hypertenze a infarktu myokardu! Intravenózní titraci adrenalinu smí provádět POUZE anesteziolog na operačním sále či JIP pod kontinuálním EKG monitorem v mikrodávkách (bolusy 20–50 ug i.v. zředěného roztoku 1:10 000 či 1:100 000).',
          'KROK 3 – POLOHOVÁNÍ PACIENTA: Pacient musí být položen NA ZÁDA SE ZVEDNUTÝMI DOLNÍMI KONČETINAMI (autotransfuze). VAROVÁNÍ: Náhlé posazení či postavení pacienta v anafylaktickém šoku může vyvolat tzv. syndrom prázdného srdce (akutní kritický pokles žilního návratu) s okamžitou zástavou oběhu a smrtí! Při těžké dušnosti tolerovat polosed, u těhotné ženy poloha na levém boku.'
        ]
      },
      {
        title: '3. Zajištění dýchacích cest, tekutiny a refrakterní anafylaxe',
        refs: ['rc2025', 'special', 'ou2025'],
        paragraphs: [
          'DÝCHACÍ CESTY A OXYGENACE: Okamžitá insuflace 100% kyslíku obličejovou maskou s rezervoárem průtokem 15 l/min. Při progresi stridoru a otoku obličeje/jazyka je nutná VČASNÁ OROTRACHEÁLNÍ INTUBACE (OTI) zkušeným anesteziologem dříve, než masivní edém hrtanu vchod zcela uzavře! Příprava na krizový chirurgický přístup – eFONA (koniotomie technikou skalpel-bougie-kanyla).',
          'MASIVNÍ TEKUTINOVÁ RESUSCITACE: Zajištění 2 periferních žilních linek velkého kalibru (14G–16G). Okamžitý přetlakový bolus BALANCOVANÉHO KRYSTALOIDU (Plasmalyte / Ringerfundin) v objemu 1000–2000 ml i.v. u dospělého (20 ml/kg u dětí) během prvních 10–20 minut k doplnění masivně dilatovaného cévního řečiště.',
          'REFRAKTERNÍ ANAFYLAKTICKÝ ŠOK: Pokud stav nereaguje na 2–3 intramuskulární dávky adrenalinu a infuzi krystaloidů: 1. Zahájení kontinuální nitrožilní infuze ADRENALINU (0,05–0,5 ug/kg/min titrovaná na MAP >= 65 mmHg) či NORADRENALINU. 2. ZKOUŠKOVÝ CHYTÁK – PACIENTI NA BETA-BLOKÁTORECH: Pacienti chronicky léčení beta-blokátory mají zablokované adrenergní receptory a jsou refrakterní na adrenalin! Lékem volby je u nich GLUKAGON v dávce 1–5 mg i.v. bolus (aplikovaný během 5 minut), následovaný kontinuální infuzí 1–5 mg/h. Glukagon stimuluje kontraktilitu myokardu a vazomotorický tonus aktivací adenylátcyklázy cestou nezávislou na beta-adrenergních receptorech!'
        ]
      },
      {
        title: '4. Léky druhé linie, observace a laboratorní diagnostika',
        refs: ['wao', 'rc2025', 'ou2025'],
        paragraphs: [
          'LÉKY DRUHÉ LINIE (Podávají se až po stabilizaci životních funkcí adrenalinem a tekutinami!):',
          '1. ANTIHISTAMINIKA: H1-blokátor (Bisulepin / Dithiaden 1 mg i.v. pomalu) případně v kombinaci s H2-blokátorem (Famotidin 20 mg i.v.). ZKOUŠKOVÝ PRINCIP: Antihistaminika ovlivňují pouze kožní projevy (urtikárii a svědění), nemají ŽÁDNÝ okamžitý vliv na bronchiální obstrukci ani oběhový šok a nesmí zdržet podání adrenalinu!',
          '2. KORTIKOSTEROIDY: Hydrokortizon 200 mg i.v. nebo Metylprednisolon 1–2 mg/kg i.v. Mají pomalý nástup účinku (4–6 hodin). Neovlivní akutní fázi šoku, ale slouží jako prevence pozdní fáze bifázické anafylaxe.',
          '3. INHALAČNÍ BETA-2 AGONISTÉ: Salbutamol (Ventolin) 2,5–5,0 mg nebulizací při přetrvávajícím bronchospasmu.',
          'OBSERVACE A BIFÁZICKÁ REAKCE: Každý pacient po anafylaxi musí být hospitalizován a monitorován minimálně 6–12 HODIN (při těžkém šoku minimálně 24 hodin). Důvodem je riziko BIFÁZICKÉ ANAFYLAXE – návratu těžkých anafylaktických příznaků s odstupem několika hodin po odeznění první fáze bez nové expozice alergenu (vyskytuje se až u 10–20 % pacientů!).',
          'LABORATORNÍ POTVRZENÍ: Odběr SÉROVÉ MASTOCYTÁRNÍ TRYPTÁZY. První odběr se provádí ideálně za 1–2 hodiny od vzniku reakce (kdy dosahuje vrcholu); druhý odběr za 24 hodin (jako výchozí hladina k prokázání signifikantního vzestupu). Potvrzuje degranulaci žírných buněk pro následné alergologické vyšetření.'
        ]
      }
    ],
    checks: [
      {
        q: 'Jaká je přesná dávka a místo aplikace adrenalinu při anafylaktickém šoku u dospělého?',
        a: 'U dospělého je lékem první volby adrenalin v dávce 0,5 mg i.m. (neředěný roztok 1:1000 = 0,5 ml). Aplikuje se výhradně intramuskulárně do anterolaterální strany stehna (m. vastus lateralis). Aplikace do paže či hýždě je chybou. Při nedostatečné odpovědi se dávka opakuje po 5 minutách.',
        refs: ['rc2025', 'wao']
      },
      {
        q: 'Proč se v terénu nesmí podávat adrenalin intravenózně jako bolus?',
        a: 'Intravenózní bolus neředěného adrenalinu nese extrémní riziko fatálních komorových arytmií (fibrilace komor), maligní hypertenze a akutního infarktu myokardu. Intravenózní titraci smí provádět pouze lékař na ARO/JIP v mikrodávkách (20–50 ug ředěného roztoku) za kontinuálního EKG monitorování.',
        refs: ['rc2025']
      },
      {
        q: 'Jak postupovat u pacienta v anafylaktickém šoku, který chronicky užívá beta-blokátory?',
        a: 'Pacienti na beta-blokátorech mohou být refrakterní na účinky adrenalinu kvůli zablokovaným receptorům. Lékem volby je v této situaci glukagon v dávce 1–5 mg i.v. bolus, následovaný kontinuální infuzí. Glukagon zvyšuje srdeční výdej a cévní tonus aktivací adenylátcyklázy cestou nezávislou na beta-adrenergních receptorech.',
        refs: ['special']
      },
      {
        q: 'Proč je nutná observace pacienta po anafylaxi po dobu minimálně 6–12 hodin?',
        a: 'Důvodem je riziko bifázické anafylaktické reakce, kdy se život ohrožující příznaky (bronchospasmus, laryngeální edém, hypotenze) mohou vrátit s odstupem několika hodin po iniciální úspěšné léčbě bez jakéhokoli nového kontaktu s alergenem.',
        refs: ['wao']
      }
    ]
  },
  "A20":{
  "title": "Zajištění dýchacích cest, obtížné dýchací cesty a poranění krční páteře",
  "reviewed": "2026-11-03",
  "edition": "DAS 2025 · ASA 2022 · ERC 2025 · LF OU 2025",
  "scope": "Kompletní klinický algoritmus zajištění dýchacích cest, prediktory obtížnosti (LEMON, Mallampati, Patil), škála pomůcek od neinvazivních po definitivní (maska, vzduchovody, SGA 2. generace, videolaryngoskopie, OTI), algoritmus neočekávané obtížné intubace DAS 2025 (Plány A–D, situace CICO a urgentní eFONA: skalpel-bougie-kanyla) a zásady u poranění krční páteře (zákaz záklonu, MILS).",
  "opening": "Zajištění dýchacích cest (airway management) představuje bazální pilíř anesteziologie a resuscitační péče. Sleduje dvě zásadní úrovně: 1. udržení adekvátní oxygenace a ventilace a 2. definitivní ochranu dýchacích cest před aspirací žaludečního obsahu. Obtížné dýchací cesty neznamenají pouze obtížnou intubaci, ale zahrnují obtížnou ventilaci obličejovou maskou, obtížné zavedení supraglotické pomůcky i obtížný krizový chirurgický vstup. Každý anesteziolog musí mít před úvodem do anestezie připraven jasný primární plán i záložní postupy dle doporučení DAS 2025.",
  "openingRefs": [
    "das2025",
    "asaAirway",
    "ou2025"
  ],
  "sections": [
    {
      "title": "1. Předanestetické vyšetření a prediktory obtížných dýchacích cest",
      "refs": [
        "asaAirway",
        "ou2025"
      ],
      "paragraphs": [
        "Anamnéza a klinické rizikové faktory: Anamnéza předchozí obtížné intubace (karta obtížné intubace!), stridor, chrapot, dysfagie, spánková apnoe (OSA), obezita (BMI > 35), anatomické anomálie obličeje, stav po radioterapii krku, nádory hlavy a krku, revmatoidní artritida a ankylozující spondylitida (omezení hybnosti krční páteře a čelistního kloubu).",
        "Klinické predikční testy obtížné laryngoskopie a intubace:",
        "1. Mallampatiho klasifikace (třídy I–IV): Hodnotí se vsedě při maximálním otevření úst a vypláznutí jazyka bez fonace. Třída I: viditelné měkké patro, uvula, patrové oblouky a tonzily. Třída II: viditelné měkké patro a celá uvula. Třída III: viditelné měkké patro a báze uvuly. Třída IV: viditelné pouze tvrdé patro (vysoké riziko obtížné intubace!).",
        "2. Patilova tyromentální vzdálenost: Vzdálenost od zářezu štítné chrupavky k symfýze mandibuly při maximálním záklonu hlavy. Hodnota < 6 cm (méně než 3 prsty) predikuje obtížnou laryngoskopii v důsledku krátkého mandibulárního prostoru.",
        "3. Interincizální vzdálenost (otvírání úst): Vzdálenost mezi řezáky. Hodnota < 3 cm (méně než 2 prsty) znemožňuje zavedení standardního laryngoskopu i supraglotických pomůcek.",
        "4. Sternomentální vzdálenost: < 12,5 cm predikuje obtížnou intubaci.",
        "5. Upper Lip Bite Test (ULBT): Třída I (dolní řezáky překryjí horní ret nad červeň), Třída II (dosáhnou na červeň), Třída III (nedosáhnou na horní ret = prediktor obtížné intubace).",
        "6. Mnemotechnika LEMON: Look externally (vnější vzhled, trauma, vousy), Evaluate 3-3-2 (otvírání úst na 3 prsty, tyromentální vzdálenost na 3 prsty, tyrohyoidní vzdálenost na 2 prsty), Mallampati skóre, Obstruction (stridor, cizí těleso, nádor), Neck mobility (hybnost krční páteře)."
      ]
    },
    {
      "title": "2. Spektrum pomůcek: od neinvazivních přes supraglotické po definitivní",
      "refs": [
        "airwayBasic",
        "das2025",
        "ou2025"
      ],
      "paragraphs": [
        "Základní manévry a jednoduché pomůcky: Esmarchův trojhmat (předsunutí dolní čelisti, záklon hlavy, otevření úst). Ústní vzduchovod (Guedel – velikost se měří od ústního koutku k úhlu mandibuly; zavádí se konkavitou k patru a po překonání jazyka se otočí o 180°; určen pouze pro hluboké bezvědomí bez reflexů). Nosní vzduchovod (Wendl – délka od nosního křídla k tragu; lépe tolerován při mělčím bezvědomí; KONTRAINDIKOVÁN při podezření na zlomeninu báze lební!).",
        "Ventilace obličejovou maskou: Standardní technika C-E jednou rukou (palec a ukazovák tvoří „C“ a tisknou masku k obličeji, 3., 4. a 5. prst tvoří „E“ pod dolní čelistí a vytahují bradu vzhůru). Při obtížné ventilaci nastupuje technika dvou zachránců (jeden oběma rukama drží masku a táhne čelist, druhý mačká vak s rezervoárem a O2). Prediktory obtížné ventilace maskou (MOANS): Mask seal (vousy, krev), Obesity (BMI > 30), Age > 55 let, No teeth (bezzubost), Stiff lungs (astma, CHOPN, edém).",
        "Supraglotické pomůcky (SGA / SAD):",
        "1. generace: klasická laryngeální maska (LMA Classic) – pouze těsnicí nafukovací manžeta kolem vchodu do hrtanu.",
        "2. generace (klinický standard dnešní medicíny): i-gel (termoplastický elastomer bez nutnosti nafukování, anatomicky kopíruje supraglotické struktury), LMA ProSeal / Supreme (nafukovací manžeta). ZÁSADNÍ VÝHODA 2. generace: separátní GASTRICKÝ DRENÁŽNÍ KANÁL, který umožňuje zavedení žaludeční sondy, dekompresi žaludku a dramaticky snižuje riziko aspirace. Umožňuje ventilační tlaky až 30 cmH2O.",
        "Definitivní zajištění – Orotracheální intubace (OTI): Zlatý standard. Zavedení tracheální rourky s těsnicí manžetou přes hlasivky do průdušnice pod kontrolou zraku. Poskytuje 100% ochranu před aspirací a absolutní kontrolu ventilace. Těsnicí manžeta (low-pressure, high-volume cuff): bezpečný tlak v manžetě je PŘÍSNĚ 20–30 cmH2O (měřeno cuff manometrem; tlak < 20 cmH2O vede k mikroaspiracím, tlak > 30 cmH2O působí ischemii sliznice trachey s rizikem nekrózy a pozdních stenóz!). Poloha kanyly: u dospělého rourka fixována typicky na značce 21–23 cm u zubů. Potvrzení polohy: 1. zlatý standard = kontinuální kapnografie (etCO2 s typickou křivkou), 2. poslechová symetrie v 5 bodech (obě podklíčky, obě axily, epigastrium – vyloučení intubace do jícnu či pravého bronchu!).",
        "Videolaryngoskopie (VLS): Využívá kameru s vysokým rozlišením a LED světlo na distálním konci lžíce, obraz se přenáší na integrovaný či externí displej. Standardní lžíce (Macintosh) vs. hyperangulované lžíce (umožňují vidět za roh bez nutnosti vyrovnání anatomických os úst, hltanu a hrtanu; vyžadují tvarovatelný rigidní zavaděč / stylet). VLS dramaticky zvyšuje úspěšnost intubace na 1. pokus a stává se standardem volby.",
        "Fiberoptická intubace při vědomí (Awake Fiberoptic Intubation – AFIO): Zlatý standard u předem OČEKÁVANÉ obtížné intubace. Provádí se v lokální anestezii dýchacích cest (topizace 2–4% lidokainem) za zachovaného spontánního dýchání pacienta s minimální sedací (remifentanil, dexmedetomidin). Flexibilní bronchoskop se zavede přes hlasivky do trachey a po něm se stáhne endotracheální kanyla."
      ]
    },
    {
      "title": "3. Algoritmus neočekávaných obtížných DC dle DAS 2025 (Plány A–D a eFONA)",
      "refs": [
        "das2025"
      ],
      "paragraphs": [
        "Doporučení DAS (Difficult Airway Society) 2025 stanoví striktní stupňovitý postup při neočekávané obtížné intubaci po úvodu do celkové anestezie:",
        "PLÁN A – Optimalizace tracheální intubace: Preoxygenace 100% O2 do ETO2 > 90 %. Optimalizace polohy pacienta („sniffing position“, u obézních poloha „ramped“ s vyrovnáním osy zvukovodu a jugulární jamky). Použití videolaryngoskopu a elastického zavaděče (gum elastic bougie). Zevní manipulace s hrtanem (BURP manévr: Backward-Upward-Rightward Pressure). STRIKTNÍ LIMIT: maximálně 3 pokusy o intubaci (+ 1 pokus zkušenějšího anesteziologa). Každý pokus musí být modifikován! Pokud intubace selže -> HLASITÁ DEKLARACE: „Selhání intubace, přecházím na Plán B!“",
        "PLÁN B – Udržení oxygenace pomocí Supraglotické pomůcky (SAD): Okamžité zavedení 2. generace supraglotické pomůcky (i-gel, LMA ProSeal). Limit: maximálně 2 až 3 pokusy o zavedení (změna velikosti). Pokud je ventilace přes SAD efektivní a pacient je stabilně oxygenován -> tým se zastaví a zváží další strategii: 1. probuzení pacienta z anestezie (zlaté pravidlo u elektivních výkonů!), 2. intubace přes SAD pomocí flexibilního bronchoskopu, 3. pokračování operace se SAD pouze u vybraných emergentních výkonů. Pokud ventilace přes SAD selže -> HLASITÁ DEKLARACE: „Selhání supraglotické pomůcky, přecházím na Plán C!“",
        "PLÁN C – Záchranná ventilace obličejovou maskou: Pokus o záchrannou ventilaci maskou za použití techniky dvou zachránců, s orofaryngeálním vzduchovodem (Guedel) a plnou svalovou relaxací. Zvážení reverze svalové relaxace: pokud byl použit rokuronium, okamžité podání SUGAMMADEXU v krizové dávce 16 mg/kg k okamžitému zrušení nervosvalové blokády a obnovení spontánního dýchání. Pokud ventilace maskou selže (hypoxie progreduje, SpO2 prudce klesá) -> NASTÁVÁ KRITICKÁ KRIZOVÁ SITUACE CICO (Cannot Intubate, Cannot Oxygenate)! HLASITÁ DEKLARACE: „Stav CICO! Vyhlašuji kód CICO, volám pomoc a přecházím na Plán D!“",
        "PLÁN D – Emergency Front of Neck Airway (eFONA) – Koniotomie: Krizový chirurgický přístup přes membrana cricothyroidea (ligamentum cricothyroideum). Metoda volby dle DAS 2025: TECHNIKA SKALPEL – BOUGIE – KANYLA (Scalpel-bougie-tube):",
        "1. Poloha pacienta: plná extenze krku (podložit ramena). 2. Identifikace ligamentum cricothyroideum palpací (jamka mezi prominentia laryngea štítné chrupavky a prstencovou chrupavkou). 3. Horizontální incize kůže a ligamenta skalpelem č. 10 (čepel otočená horizontálně). 4. Otočení čepele skalpelu o 90° kaudálně, čímž se roztáhne incize v membráně. 5. Zavedení elastického zavaděče (bougie) podél skalpelu přímo do trachey (taktilní vjem klikání o tracheální prstence a zastavení v bifurkaci potvrzuje polohu). 6. Nasunutí orotracheální kanyly s manžetou velikosti ID 5,0–6,0 mm po bougie do průdušnice, vytažení bougie, nafouknutí manžety a okamžité zahájení ventilace s kapnografií. CHYTÁK: Jehlová punkční koniotomie u dospělého je opuštěna pro vysoké riziko zalomení kanyly a nemožnost adekvátní ventilace bez vysokotlakého tryskového ventilátoru (jet ventilace)."
      ]
    },
    {
      "title": "4. Zajištění dýchacích cest při podezření na poranění krční páteře",
      "refs": [
        "cspine",
        "das2025",
        "ou2025"
      ],
      "paragraphs": [
        "Základní postulát: Každé těžké trauma (autonehoda, pád z výšky, skok do mělké vody, bezvědomí po úrazu) musí být považováno za nestabilní poranění krční páteře, dokud není radiologicky (CT krční páteře) spolehlivě vyloučeno!",
        "PŘÍSNÝ ZÁKAZ ZÁKLONU HLAVY: Záklon hlavy (retroflexe) a rotace krku mohou vést k dislokaci nestabilní fraktury krčního obratle a fatálnímu přerušení krční míchy s kvadruplegií a zástavou dechu!",
        "MANUAL IN-LINE STABILIZATION (MILS): Standardní technika manuální stabilizace krční páteře. Vyškolený asistent stojí u hlavy nebo z boku pacienta a pevně drží hlavu oběma rukama položenýma na spáncích a mastoidech v neutrální anatomické poloze, čímž působí proti jakémukoli tahu, flexi, extenzi či rotaci během celého procesu intubace.",
        "Management imobilizačního límce: Tuhý krční límec (Philadelphia / Stifneck) znemožňuje otevření úst (interincizální vzdálenost < 2 cm) a zhoršuje laryngoskopický pohled. ZKOUŠKOVÝ POSTUP: Před intubací asistent převezme manuální stabilizaci (MILS), PŘEDNÍ DÍL LÍMCE SE ROZEPNE A ODSTRANÍ (zadní díl zůstává), což umožní otevření úst a zavedení laryngoskopu. Po úspěšné intubaci a ověření polohy se límec opět zapne.",
        "Metody volby intubace u krční páteře: 1. Videolaryngoskopie s hyperangulovanou lžící a MILS – metoda volby u akutních traumat; hyperangulovaná lžíce nevyžaduje vyrovnání anatomických os ani záklon hlavy a umožňuje přímou vizualizaci hlasivek v neutrální poloze. 2. Awake fiberoptická intubace (AFIO) – metoda volby u stabilního, spolupracujícího pacienta před plánovanou operací krční páteře. 3. V krizové situaci nemožnosti intubace a ventilace platí standardní DAS algoritmus s rychlým přechodem k eFONA."
      ]
    }
  ],
  "checks": [
    {
      "q": "Jaké jsou klíčové anatomické prediktory obtížné intubace a jejich cut-off hodnoty?",
      "a": "Klíčové prediktory jsou: Patilova tyromentální vzdálenost < 6 cm (méně než 3 prsty), interincizální vzdálenost (otvírání úst) < 3 cm (méně než 2 prsty), Mallampati třída III a IV (neviditelné měkké patro), sternomentální vzdálenost < 12,5 cm a Upper Lip Bite Test třída III (neschopnost skousnout horní ret).",
      "refs": [
        "asaAirway"
      ]
    },
    {
      "q": "Jaký je maximální povolený počet pokusů o intubaci dle DAS 2025 a co následuje při selhání?",
      "a": "Dle DAS 2025 jsou povoleny maximálně 3 pokusy o intubaci (+ 1 pokus zkušenějšího anesteziologa), přičemž každý pokus musí být modifikován (videolaryngoskop, bougie, poloha). Při selhání se intubace definitivně opouští, vyhlašuje se selhání intubace a přechází se na Plán B – zajištění oxygenace pomocí 2. generace supraglotické pomůcky (i-gel / ProSeal).",
      "refs": [
        "das2025"
      ]
    },
    {
      "q": "Jak se provádí krizová eFONA (koniotomie) technikou skalpel-bougie-kanyla v situaci CICO?",
      "a": "Pacient je v extenzi krku. Prohmatá se membrana cricothyroidea, provede se transverzální incize skalpelem č. 10 přes kůži a membránu, čepel se otočí o 90° kaudálně k rozšíření štěrbiny, po čepeli se do trachey zavede elastický zavaděč (bougie) a po něm se do průdušnice nasune tracheální rourka s manžetou velikosti 5,0–6,0 mm, nafoukne se manžeta a zahájí ventilace s kapnografií.",
      "refs": [
        "das2025"
      ]
    },
    {
      "q": "Jaký je správný tlak v těsnicí manžetě tracheální rourky a jaká rizika hrozí při odchylkách?",
      "a": "Bezpečný tlak v těsnicí manžetě je přísně 20–30 cmH2O (měřeno manometrem). Tlak pod 20 cmH2O nezajišťuje dostatečné utěsnění a hrozí mikroaspirace orofaryngeálního a žaludečního obsahu do plic s rozvojem ventilátorové pneumonie. Tlak nad 30 cmH2O převyšuje kapilární perfuzní tlak sliznice trachey a vede k ischemii, ulceracím, nekróze a pozdním stenózám průdušnice.",
      "refs": [
        "airwayBasic"
      ]
    },
    {
      "q": "Jak se postupuje při zajištění dýchacích cest u pacienta s podezřením na poranění krční páteře?",
      "a": "Je přísně zakázán záklon a rotace hlavy. Asistent provádí manuální stabilizaci hlavy v neutrální poloze (MILS). Přední díl fixačního krčního límce se rozepne a odejme pro umožnění otevření úst, zatímco zadní díl a ruce asistenta udržují osu. Metodou volby je videolaryngoskopie s hyperangulovanou lžící a bougie nebo fiberoptická intubace při vědomí.",
      "refs": [
        "cspine"
      ]
    }
  ]
},
"A04":{
  "title": "Komplikace celkové anestezie: výčet, diagnostika a emergentní léčba",
  "reviewed": "2026-11-02",
  "edition": "EMHG 2024 · ASA 2023 · ERC 2025 · Fourth/Fifth PONV Guidelines 2026",
  "scope": "Systematika komplikací celkové anestezie; diagnostika a emergentní postupy u respiračních krizí (akutní desaturace, laryngospasmus – Larsonův manévr, bronchospasmus, aspirace a Mendelsonův syndrom), hemodynamického selhání (diferenciální léčba hypotenze – efedrin vs. fenylefrin vs. noradrenalin), maligní hypertermie (dantrolenový protokol dle EMHG), perioperační anafylaxe, reziduální kurarizace a pooperační nauzey/zvracení (Apfelovo skóre a profylaxe).",
  "opening": "Komplikace celkové anestezie dělíme podle zasaženého systému na respirační, kardiovaskulární a polékové/systémové, případně podle fáze anestezie (úvod, vedení, probuzení). Při náhlé krizi na sále postupujeme systematicky podle algoritmu ABCDE s okamžitým přivoláním pomoci, zajištěním 100% O2, kontrolou dýchacích cest i anesteziologického okruhu a zahájením kauzální i symptomatické farmakoterapie.",
  "openingRefs": [
    "gaRisks",
    "hypoxia",
    "hypotension"
  ],
  "sections": [
    {
      "title": "1. Respirační komplikace I: Akutní desaturace, hypoxie a laryngospasmus",
      "refs": [
        "hypoxia",
        "laryngospasm"
      ],
      "paragraphs": [
        "Algoritmus akutní desaturace (pokles SpO2 < 90 %): 1. Okamžitě podat 100% O2 s vysokým průtokem; 2. Zkontrolovat kapnografickou křivku ETCO2 a ventilační tlaky na ventilátoru; 3. Vyloučit rozpojení či zalomení okruhu, ověřit polohu tracheální rourky poslechem obou hemitoraxů (vyloučit selektivní intubaci pravého bronchu – rourku povytáhnout!); 4. Auskultovat plíce (vyloučit tenzní pneumotorax, bronchospasmus, edém plic, atelektázu); 5. Odsát sekret z dýchacích cest.",
        "Laryngospasmus: Reflexní křeč m. cricothyroideus a hlasivkových vazů v mělké anestezii způsobená podrážděním krví, sekretem či manipulací. Klinika: inspirační stridor, paradoxní dýchání (zatahování jugula a mezižebří při spontánním dechu), nemožnost prodýchnout maskou, vymizení křivky ETCO2. Hrozí akutní hypoxie a negativně-tlakový plicní edém (NPPE) z masivního nitrohrudního podtlaku při usilovném nádechu proti uzavřené glottis.",
        "Léčba laryngospasmu: 1. Zastavit chirurgickou stimulaci a odsát dutinu ústní; 2. Těsně přiložit obličejovou masku a ventilovat 100% O2 s trvalým přetlakem (CPAP 15–20 cmH2O); 3. Esmarchův hmat a Larsonův manévr (silný oboustranný tlak prsty do 'laryngospasm notch' za úhlem mandibuly a před mastoidním výběžkem – stimuluje n. glossopharyngeus a reflexně uvolňuje spazmus); 4. Při přetrvávání prohloubit anestezii Propofolem (0,5–1 mg/kg i.v.) nebo podat myorelaxans: Sukcinylcholin v minidávce 0,2–0,5 mg/kg i.v. (či plné dávce 1 mg/kg s následnou intubací; při nedostupnosti žíly 3–4 mg/kg i.m. či intralingválně)."
      ]
    },
    {
      "title": "2. Respirační komplikace II: Bronchospasmus a aspirace žaludečního obsahu",
      "refs": [
        "bronchospasm",
        "hypoxia"
      ],
      "paragraphs": [
        "Bronchospasmus: Spasmus hladké svaloviny bronchů, nejčastěji u astmatiků, kuřáků nebo při mechanickém dráždění rourkou v mělké anestezii. Klinika: prodloužený výdech, pískoty, vrzoty, vysoký vrcholový tlak (Ppeak) při normálním plateau (Pplat) na ventilátoru, pomalý vzestup exspirační křivky CO2 na kapnogramu (tvar 'žraločí ploutve' – shark-fin). V krajním stadiu 'tichý hrudník' bez poslechového nálezu.",
        "Léčba bronchospasmu: 1. 100% O2, prohloubit anestezii (zvýšit Sevofluran – působí bronchodilatačně, nebo podat i.v. Propofol či Ketamin); 2. Inhalační beta-2 mimetikum: Salbutamol (Ventolin) 4–8 dávek přes adaptér přímo do inspirační větve okruhu; 3. Magnesium sulfát 2 g i.v. v infuzi během 10–15 minut (uvolňuje hladkou svalovinu); 4. Hydrokortison 100–200 mg i.v.; 5. Při těžkém refrakterním bronchospasmu podat Adrenalin v i.v. bolusech po 10–20 µg (či 0,3–0,5 mg i.m. při podezření na anafylaxi!).",
        "Aspirace žaludečního obsahu a Mendelsonův syndrom: Vdechnutí žaludečního obsahu při nedostatečných laryngeálních reflexech. Chemická pneumonitida (Mendelsonův syndrom) vzniká při aspiraci objemu > 0,4 ml/kg tekutiny o pH < 2,5. Prevence: dodržení lačnění, u rizikových pacientů bleskový úvod (RSI) s orotracheální intubací těsnící rourkou. Léčba při aspiraci: Trendelenburgova poloha (hlava dolů), okamžité odsátí orofaryngu, urgentní intubace, odsátí trachey PŘED zahájením přetlaku, protektivní ventilace s PEEP, bronchodilatancia. Laváž dýchacích cest ani rutinní profylaktická ATB se nedoporučují (ATB až při známkách bakteriální superinfekce)."
      ]
    },
    {
      "title": "3. Kardiovaskulární komplikace: Perioperační hypotenze a její diferenciální léčba",
      "refs": [
        "hypotension"
      ],
      "paragraphs": [
        "Perioperační hypotenze: Definována jako pokles MAP < 65 mmHg nebo pokles systolického TK o > 20–30 % oproti výchozí hodnotě. Způsobuje hypoperfuzi myokardu, mozku a ledvin (riziko perioperačního IM a AKI). Příčiny: 1. Vazodilatace po indukčních lécích (propofol, inhalační páry); 2. Absolutní hypovolemie (lačnění, krevní ztráta, dehydratace); 3. Pokles srdečního výdeje (negativní inotropie, arytmie, vysoký PEEP omezující žilní návrat); 4. Anafylaxe či sepse.",
        "Cílená terapie hypotenze podle tepové frekvence a mechanismu: 1. Úprava hloubky anestezie (snížení dávky propofolu/inhalátu); 2. Bolus balancovaného krystaloidu (250–500 ml); 3. Efedrin (5–10 mg i.v. bolus): nepřímé i přímé sympatomimetikum (alfa + beta1) – lék volby při hypotenzi provázené normální nebo pomalejší srdeční frekvencí (zvyšuje TK i TF); 4. Fenylefrin (50–100 µg i.v. bolus): čistý alfa-1 agonista – lék volby při hypotenzi provázené tachykardií (zvyšuje cévní odpor bez stimulace srdce); 5. Noradrenalin (bolusy 5–10 µg i.v. nebo kontinuální infuze 0,05–0,5 µg/kg/min): lék volby pro perzistující hypotenzi a vazoplegii."
      ]
    },
    {
      "title": "4. Život ohrožující polékové krize: Maligní hypertermie a anafylaxe",
      "refs": [
        "mh",
        "mhMechanism",
        "anaphylaxis"
      ],
      "paragraphs": [
        "Maligní hypertermie (MH): Život ohrožující farmakogenetické onemocnění kosterního svalstva (autozomálně dominantní mutace genu pro ryanodinový receptor RYR1). Spouštěče: VŠECHNA volatilní anestetika (sevofluran, desfluran, izofluran) a sukcinylcholin. Patofyziologie: nekontrolované vyplavení vápníku ze sarkoplazmatického retikula → trvalá svalová kontrakce, hypermetabolismus s extrémní produkcí CO2, tepla a laktátu, rhabdomyolýza s hyperkalemií.",
        "Klinický obraz MH: NEJČASNĚJŠÍ A NEJSPOLEHLIVĚJŠÍ PŘÍZNAK je prudký, nevysvětlitelný vzestup ETCO2 navzdory hyperventilaci! Dále tachykardie, arytmie, maseterový spazmus po sukcinylcholinu, generalizovaná rigidita těla, kombinovaná metabolická a respirační acidóza. Vzestup tělesné teploty (> 38,5–40 °C, až o 1 °C za 5 minut) je POZDNÍM varovným příznakem!",
        "Akutní protokol léčby MH (dle EMHG): 1. OKAMŽITĚ STOP spouštěčům: vypnout odpařovače, zastavit sukcinylcholin, přivolat posily, informovat chirurga k rychlému ukončení výkonu. Anestezii převést na TIVA (propofol, opioidy). 2. Hyperventilace 100% O2 s maximálním průtokem plynů (> 10 l/min), vložit filtry s aktivním uhlím do obou větví okruhu. 3. Specifické antidotum: DANTROLEN (Dantrium / Ryanodex) v dávce 2,5 mg/kg i.v. rychlým bolusem (opakovat každých 5–10 min do normalizace ETCO2, TF a rigidity; kumulativní dávka až 10 mg/kg). 4. Aktivní chlazení: ledové krystaloidy i.v. (4 °C), obklady do třísel a axil (ukončit při poklesu teploty pod 38,5 °C). 5. Léčba hyperkalemie: glukóza 20% s inzulínem (10–20 IU), 10% kalcium glukonát 10–20 ml i.v., bikarbonát 8,4% při těžké acidóze. Forsírovaná diuréza (> 2 ml/kg/h) k ochraně ledvin před myoglobinurií. Observace na JIP min. 24–48 h pro riziko rekurence.",
        "Perioperační anafylaxe: Nejčastěji vyvolána myorelaxancii (až 60 % případů – rokuronium, sukcinylcholin), antibiotiky (beta-laktamy) a latexem. Projevy: nevysvětlitelná těžká hypotenze, tachykardie, bronchospasmus (vysoké ventilační tlaky), kožní projevy (erytém, otok, kopřivka – pod rouškami mohou chybět!). Terapie: 1. Zastavit podávání alergenu, 100% O2; 2. ADRENALIN i.v. titrovaně po 10–50 µg (naředěná ampule 1 mg v 100 ml FR = 10 µg/ml) za monitorace EKG a TK; při zástavě 1 mg i.v.; pokud není žilní vstup, 0,5 mg i.m. do anterolaterálního stehna; 3. Masivní objemová resuscitace krystaloidy (1–2 litry přetlakem); 4. Hydrokortison 200 mg i.v. a antihistaminika; 5. Odběr krevní sraženiny na sérovou tryptázu (odběr za 1–2 h od příhody a kontrolní za 24 h)."
      ]
    },
    {
      "title": "5. Pooperační komplikace: Reziduální kurarizace a PONV (Apfelovo skóre a profylaxe)",
      "refs": [
        "nmb",
        "ponv"
      ],
      "paragraphs": [
        "Reziduální nervosvalová blokáda (PORC): Definována jako TOF ratio < 0,9 na m. adductor pollicis. Důsledky: slabost faryngeálních svalů, obstrukce dýchacích cest, neschopnost efektivního zakašlání, riziko aspirace a hypoxie na dospávacím pokoji. Prevence: rutinní kvantitativní monitorace TOF a dekurarizace (Sugammadex 2–4 mg/kg nebo Neostigmin s Atropinem) před extubací.",
        "Pooperační nauzea a zvracení (PONV): Hodnocení podle Apfelova skóre (4 nezávislé rizikové faktory, každý za 1 bod): 1. Ženské pohlaví; 2. Nekuřáctví; 3. Anamnéza kinetózy nebo PONV po předchozí operaci; 4. Plánované pooperační podávání opioidů. Riziko podle bodů: 0 bodů = 10 %, 1 bod = 20 %, 2 body = 40 %, 3 body = 60 %, 4 body = 80 %.",
        "Profylaxe a terapie PONV: U pacientů s 1–2 faktory podat 1–2 antiemetika; při 3–4 faktorech multimodální profylaxe (3–4 léky + vedení anestezie v TIVA propofolem bez volatilních par a bez N2O). Lék 1: Dexamethason 4–8 mg i.v. (podává se hned při úvodu do CA). Lék 2: Ondansetron (antagonista 5-HT3) 4 mg i.v. (podává se na konci operace). Lék 3: Droperidol (antagonista D2) 0,625–1,25 mg i.v. K záchranné léčbě na dospávacím pokoji použít lék z jiné skupiny, než který byl podán v profylaxi."
      ]
    }
  ],
  "corrections": [
    "Při maligní hypertermii je vzestup teploty pozdním příznakem – diagnostika a podání Dantrolenu musí proběhnout okamžitě při nevysvětlitelném vzestupu ETCO2, tachykardii a rigiditě, nečekat na horečku!",
    "Při akutním bronchospasmu na sále nepodáváme pouze salbutamol, ale ihned prohloubíme anestezii sevofluranem nebo propofolem a zkontrolujeme, zda nejde o projev celkové anafylaxe.",
    "Larsonův manévr (tlak na mastoidní zářez za úhlem čelisti) je klíčový nefarmakologický chvat k přerušení laryngospasmu stimulací hlavových nervů."
  ],
  "checks": [
    {
      "question": "Jaká je úvodní dávka Dantrolenu při maligní hypertermii a jaké jsou cíle léčby?",
      "answer": "Úvodní dávka je 2,5 mg/kg i.v. rychlým bolusem. Dávku opakujeme každých 5–10 minut do poklesu a normalizace ETCO2, vymizení svalové rigidity a poklesu tepové frekvence (maximální kumulativní dávka je obvykle 10 mg/kg).",
      "refs": [
        "mh"
      ]
    },
    {
      "question": "Jakých 4 faktorů si všímáte u Apfelova skóre pro riziko PONV a jak podle nich postupujete?",
      "answer": "Faktory jsou: ženské pohlaví, nekuřák, anamnéza PONV/kinetózy a pooperační opioidy. Při 3–4 bodech je riziko 60–80 %; v tom případě volíme TIVA propofolem (vyhnout se inhalačním anestetikům a N2O) a kombinujeme profylaxi: Dexamethason 4–8 mg i.v. v úvodu + Ondansetron 4 mg i.v. v závěru operace (případně + Droperidol 0,625–1,25 mg).",
      "refs": [
        "ponv"
      ]
    },
    {
      "question": "Jaký je rozdíl v indikaci Efedrinu a Fenylefrinu při léčbě perioperační hypotenze?",
      "answer": "Efedrin (5–10 mg i.v.) má smíšený alfa i beta1 účinek – volí se při hypotenzi provázené normální nebo nízkou tepovou frekvencí, protože zvýší tlak i srdeční frekvenci. Fenylefrin (50–100 µg i.v.) je čistý alfa-1 agonista – volí se při hypotenzi provázené tachykardií, protože zvýší cévní odpor (SVR) a reflexně mírně zpomalí tep.",
      "refs": [
        "hypotension"
      ]
    }
  ]
},

"A07":{
  "title": "Farmaka a komplikace regionální anestezie",
  "reviewed": "2026-11-02",
  "edition": "LF OU 2025 (kap. 17, str. 204–223) · ASRA LAST Checklist 2020 · ESAIC/ESRA · OAA 2024",
  "scope": "Farmakologie lokálních anestetik (pKa, ionizace v zánětu, aminoamidy vs aminoestery, maximální dávky, adjuvancia), systémová toxicita lokálních anestetik (LAST) včetně kompletního protokolu Intralipid 20% a modifikace KPR, vysoká a totální spinální blokáda, postpunkční bolest hlavy (PDPH) a epidurální krevní zátka, urgentní spinální/epidurální hematom a absces.",
  "opening": "Lokální anestetika (LA) reverzibilně blokují napěťově řízené sodíkové kanály z intracelulární strany buněčné membrány a inhibují šíření akčních potenciálů. Rozdíl mezi bezpečnou anestezií a fatální komplikací spočívá v přesném dodržení maximální bezpečné dávky na kilogram, znalosti fyzikálně-chemických vlastností (pKa, lipofilita, vliv acidózy v zánětu) a včasném rozpoznání komplikací. Systémová toxicita lokálních anestetik (LAST) vyžaduje okamžité podání 20% lipidové emulze (Intralipid) a specifickou modifikaci KPR. Rozsáhlé neuroaxiální komplikace (vysoká spinála, epidurální hematom s časovým oknem 6–8 hodin) představují anesteziologické a chirurgické urgence.",
  "openingRefs": [
    "ou2025",
    "bupivacaine",
    "last",
    "highBlock",
    "pdpH",
    "neuroRegional"
  ],
  "sections": [
    {
      "title": "1. Farmakologie lokálních anestetik – chemie, pKa a mechanismus",
      "refs": [
        "ou2025",
        "bupivacaine",
        "lidocaine",
        "ropivacaine"
      ],
      "paragraphs": [
        "Mechanismus účinku: molekuly lokálního anestetika pronikají přes lipidovou dvojvrstvu membrány nervového axonu v neionizované formě, v cytoplazmě se ionizují a vážou se na vnitřní (intracelulární) receptor napěťově řízeného Na+ kanálu v inaktivovaném stavu. Tím blokují vtok sodíku, zabraňují depolarizaci a zastavují vedení vzruchu.",
        "Chemické rozdělení podle vazby mezi lipofilním aromatickým jádrem a hydrofilním aminovým koncem:",
        "• Aminoestery (prokain, tetrakain, chlorprokain): rychle hydrolyzovány plazmatickou butyrylcholinesterázou (pseudocholinesterázou). Jejich metabolit kyselina para-aminobenzoová (PABA) nese riziko alergických reakcí.",
        "• Aminoamidy (lidokain, trimekain, bupivakain, levobupivakain, ropivakain, artikain): metabolizovány v játrech mikrozomálními enzymy cytochromu P450. Alergické reakce jsou extrémně vzácné (< 1 % podezření, většinou vazovagální kolaps či reakce na konzervant disiřičitan sodný). Mezi aminoestery a aminoamidy neexistuje zkřížená alergie.",
        "Vliv disociační konstanty (pKa) a pH tkáně (zkouškový chyták): Všechna LA jsou slabé zásady s pKa mezi 7,7 až 9,0. Čím blíže je pKa fyziologickému pH (7,4), tím vyšší je podíl neionizované lipofilní formy a tím rychlejší je nástup účinku (lidokain s pKa 7,9 má nástup 2–5 min, bupivakain s pKa 8,1 nastupuje 15–20 min). V kyselém prostředí zánětu (pH tkáně 5,5–6,0) dojde k masivní ionizaci molekul LA – ionizovaná forma nedokáže prostoupit membránou do nervové buňky a anestetikum klinicky selhává!",
        "Diferenciální blokáda nervových vláken: První se blokují tenká myelinizovaná B-vlákna (vegetativní sympatikus – periferní vazodilatace, pocit tepla). Následují tenká nemyelinizovaná C-vlákna a tenká myelinizovaná A-delta vlákna (bolest a vnímání teploty). Poté silnější myelinizovaná A-beta vlákna (dotyk, tlak, vibrace, propriocepce). Jako poslední se blokují tlustá myelinizovaná A-alfa vlákna (motorická hybnost). Při odeznívání se hybnost vrací jako první, sympatický blok odeznívá jako poslední."
      ]
    },
    {
      "title": "2. Dávkování lokálních anestetik a adjuvancia",
      "refs": [
        "ou2025",
        "bupivacaine",
        "lidocaine",
        "ropivacaine"
      ],
      "paragraphs": [
        "Maximální bezpečné jednotlivé dávky lokálních anestetik (přepočtené na ideální tělesnou hmotnost):",
        "• Trimekain (Mesocain 1%): 3–4 mg/kg (s přídavkem adrenalinu až 7 mg/kg, max. 500 mg).",
        "• Lidokain (1–2%): 3–4 mg/kg (s přídavkem adrenalinu až 7 mg/kg, max. 500 mg).",
        "• Bupivakain (Marcaine 0,5%): maximálně 2 mg/kg (absolutní jednotlivá dávka nesmí překročit 150 mg!). Vyznačuje se silnou vazbou na myokardiální proteiny a vysokou kardiotoxicitou.",
        "• Levobupivakain (Chirocaine 0,5%): 2–2,5 mg/kg (max. 150 mg; čistý levotočivý S-enantiomer s nižším rizikem kardiotoxicity než racemický bupivakain).",
        "• Ropivakain (Naropin 0,2–0,75%): maximálně 3 mg/kg (max. 225–300 mg; čistý S-enantiomer s významně lepším bezpečnostním profilem a výraznější diferenciací mezi senzorickým a motorickým blokem).",
        "• Artikain (Supracain 4% s epinefrinem): 7 mg/kg (využití ve stomatologii a ambulantní chirurgii; obsahuje esterovou vazbu v postranním řetězci umožňující rychlou plazmatickou clearance).",
        "Adjuvancia v regionální anestezii:",
        "• Adrenalin (epinefrin): v koncentraci 1:200 000 (5 µg/ml). Lokální vazokonstrikcí zpomaluje vstřebávání anestetika do oběhu o 30–50 %, snižuje vrcholovou plazmatickou hladinu, prodlužuje blokádu a slouží jako marker náhodné intravaskulární aplikace při testovací dávce. ZÁKAZ podání do akrálních partií s koncovými arteriemi (prsty, nos, ušní boltce, penis) pro riziko ischemické nekrózy!",
        "• Klonidin (centrální alfa-2 agonista, 0,5–1 µg/kg): prodlužuje dobu trvání senzorického i motorického bloku o 2–3 hodiny a poskytuje sedaci bez dechového útlumu.",
        "• Dexamethason (4–8 mg i.v. nebo perineurálně): významně prodlužuje trvání periferní nervové blokády (až o 6–10 hodin) protizánětlivým účinkem a snížením eferentní transmise.",
        "• Opioidy (morfin 0,1–0,2 mg intratekálně, sufentanil 5 µg intratekálně či 10–20 µg epidurálně): posilují spinal/epidural spinální analgezii vazbou na opioidní receptory zadních rohů míšních."
      ]
    },
    {
      "title": "3. Systémová toxicita lokálních anestetik (LAST) – klinický obraz",
      "refs": [
        "last",
        "lastAdvisory",
        "ou2025"
      ],
      "paragraphs": [
        "Etiologie: LAST vzniká neúmyslnou intravaskulární aplikací (přímá injekce do arterie či vény) nebo masivní rychlou systémovou absorpcí z bohatě vaskularizované tkáně. Pořadí tkání podle rychlosti resorpce: interkostální > kaudální > epidurální > plexus brachialis > femorální/ischiadický blok > subkutánní infiltrace.",
        "Klinický obraz se typicky projevuje dvoufázově (CNS excitace následovaná KVS kolapsem, avšak u bupivakainu může dojít k primárnímu srdečnímu selhání bez varovných příznaků!):",
        "• Časné prodromy CNS: kovová pachuť na jazyku, parestezie (brnění/trnutí) rtů a jazyka, tinitus (hučení či pískání v uších), závratě, poruchy zraku a diplopie, dysartrie, neklid a svalové fascikulace obličeje a rukou.",
        "• Excitační fáze CNS: generalizované tonicko-klonické křeče.",
        "• Depresivní fáze CNS: bezvědomí, kóma, centrální hypoventilace až apnoe.",
        "• Kardiovaskulární toxicita (KVS): periferní vazodilatace a hypotenze, sinusová bradykardie, prodloužení intervalu PR a rozšíření komplexu QRS, komorové tachykardie, torsades de pointes, komorová fibrilace a asystolie nereagující na standardní resuscitaci způsobená refrakterní blokádou myokardiálních Na+ a Ca2+ kanálů bupivakainem."
      ]
    },
    {
      "title": "4. Léčebný protokol LAST a podání Intralipidu 20%",
      "refs": [
        "last",
        "lastAdvisory"
      ],
      "paragraphs": [
        "Při sebemenším podezření na LAST postupujeme podle mezinárodního záchranného protokolu (ASRA / ESAIC):",
        "1. KROK: OKAMŽITĚ ZASTAVIT aplikaci lokálního anestetika!",
        "2. KROK: Povolat resuscitační tým a vyžádat set pro LAST s 20% lipidovou emulzí (Intralipid 20%).",
        "3. KROK: Zajištění dýchacích cest a ventilace (ABCDE) – frakce O2 1,0 (100% kyslík). Hyperventilací předcházíme acidóze a hyperkapnii, které zvyšují volnou frakci anestetika vytěsněním z bílkovin a zhoršují toxicitu.",
        "4. KROK: Zvládnutí křečí – volbou je midazolam 1–2 mg i.v. titračně (benzodiazepiny potlačí křeče bez kardiodeprese). Propofol lze použít jen ve velmi nízké dávce u hemodynamicky stabilního pacienta; při hypotenzi je kontraindikován pro riziko prohloubení srdeční deprese.",
        "5. KROK: Specifické antidotum – 20% lipidová emulze (Intralipid 20%):",
        "• Princip: \"lipid sink\" (vychytání vysoce lipofilního bupivakainu z myokardu a mozku do intravaskulární lipidové fáze) + metabolická stimulace oxidace mastných kyselin v mitochondriích myokardu.",
        "• Úvodní bolus: 1,5 ml/kg 20% lipidové emulze i.v. během 1 minuty (pro 70kg dospělého cca 100 ml bolus).",
        "• Kontinuální infuze: 0,25 ml/kg/min (cca 1000 ml/h, tj. cca 15–18 ml/min u 70kg pacienta).",
        "• Při přetrvávající nestabilitě: bolus 1,5 ml/kg zopakovat 1–2x s odstupem 5 minut a infuzi zvýšit na 0,5 ml/kg/min.",
        "• Maximální kumulativní dávka: 10–12 ml/kg během prvních 30 minut.",
        "Modifikace kardiopulmonální resuscitace (KPR) při zástavě z LAST:",
        "• ZÁSADNÍ REDUKCE ADRENALINU: Adrenalin podáváme pouze v nízkých bolusech < 1 µg/kg (např. 10–50 µg i.v. místo standardního 1 mg!). Vysoké dávky adrenalinu zhoršují bupivakainové arytmie, způsobují těžkou myokardiální acidózu a blokují záchranný účinek lipidů.",
        "• VYHNOUT SE vazopresinu, blokátorům Ca2+ kanálů, beta-blokátorům a lidokainu!",
        "• KPR musí být dlouhodobá (často > 60 minut), dokud nedojde k eliminaci toxické hladiny v srdci. V případě selhání konvenční podpory je indikována včasná kanylace mimotělního oběhu (VA-ECMO / ECLS)."
      ]
    },
    {
      "title": "5. Vysoká a totální spinální anestezie",
      "refs": [
        "highBlock",
        "ou2025"
      ],
      "paragraphs": [
        "Etiologie: Vysoký blok vzniká nadměrným kraniálním šířením spinální dávky nebo nechtěnou subarachnoidální aplikací plné epidurální dávky (10–20 ml LA).",
        "Klinický obraz: Sensorický a motorický blok stoupá nad Th4 (úroveň mamil). Masivní sympatolýza vede k těžké hypotenzi a bradykardii v důsledku blokády srdečních akceleračních vláken Th1–Th4. Při postižení dermatomů C3–C5 dochází k oboustranné paréze bránice (n. phrenicus), těžké dyspnoe, dechové zástavě, slabosti horních končetin, afonii (pacient nemůže mluvit), mydriáze a bezvědomí z cerebrální hypoperfuze.",
        "Léčebný postup:",
        "1. Okamžité zajištění dýchacích cest: orotracheální intubace, 100% O2 a umělá plicní ventilace.",
        "2. Agresivní oběhová podpora: rychlá infuze krystaloidů (1000–2000 ml pod tlakem k obnovení žilního návratu).",
        "3. Farmakologická podpora: vazopresory k obnovení systémové vaskulární rezistence – noradrenalin v kontinuální infuzi, efedrin 5–10 mg i.v. bolusově, při výrazné bradykardii atropin 0,5–1 mg i.v., při refrakterním kolapsu adrenalin po 50–100 µg i.v.",
        "4. Polohování: mírná Trendelenburgova poloha (elevace dolních končetin) pro podporu venózního návratu; pozor u hyperbarického roztoku bezprostředně po aplikaci, aby nedošlo k dalšímu kraniálnímu stékání anestetika."
      ]
    },
    {
      "title": "6. Postpunkční bolest hlavy (PDPH) a epidurální krevní zátka",
      "refs": [
        "pdpH",
        "ou2025"
      ],
      "paragraphs": [
        "Patofyziologie: Únik mozkomíšního moku otvorem po durální punkci (nejčastěji po nechtěné punkci dury širokou Tuohy jehlou 16–18G nebo použití řezacích Quincke jehel) vede k intrakraniální hypotenzi, kaudálnímu posunu mozku a trakci za na bolest citlivé meningeální struktury a cévy.",
        "Klinický obraz: Frontookcipitální tupá až pulzující bolest hlavy vyzařující do šíje a ramen. ZÁKLADNÍ ZNAK: PŘÍSNÁ POSTURÁLNÍ ZÁVISLOST – bolest prudce vzniká či graduje do 15 minut po vertikalizaci (vsedě/vestoje) a zcela mizí či výrazně ustupuje v horizontální poloze na zádech. Doprovodné příznaky: nauzea, ztuhlost šíje, fotofobie, tinitus, diplopie (tah na n. abducens).",
        "Prevence: Používání tenkých atraumatických jehel (pencil-point: Whitacre, Sprotte 25–27G) snižuje incidenci PDPH pod 1 % (oproti 5–10 % u řezacích jehel Quincke).",
        "Konzervativní léčba (mírná forma, prvních 24–48 h): Přísný klid na lůžku v horizontální poloze, vydatná orální a intravenózní hydratace (krystaloidy min. 2,5–3 l/den), kofein (200–300 mg p.o. nebo i.v. infuze – vyvolává vazokonstrikci dilatovaných mozkových cév a stimuluje tvorbu likvoru), paracetamol a nesteroidní antiflogistika.",
        "Kauzální definitivní léčba – Epidurální krevní zátka (Epidural Blood Patch – EBP):",
        "• Indikace: středně těžká až těžká PDPH znemožňující vertikalizaci pacienta déle než 24–48 hodin, refrakterní na konzervativní postup.",
        "• Postup: Za striktně sterilních kautel provede anesteziolog epidurální punkci v místě původní punkce dury (nebo o jeden prostor níže). Současně asistent za sterilních podmínek odebere z periferní žíly pacienta 15–20 ml autologní venózní krve. Tato čerstvá nekorigovaná krev se pomalu aplikuje do epidurálního prostoru až do pocitu tlaku v zádech. Krev utěsní otvor v duře a okamžitě normalizuje intrakraniální tlak. Úspěšnost první aplikace je > 85–90 %."
      ]
    },
    {
      "title": "7. Spinální a epidurální hematom / absces (urgentní časové okno)",
      "refs": [
        "neuroRegional",
        "ou2025"
      ],
      "paragraphs": [
        "Epidurální či spinální hematom a absces představují vzácné, ale nejdevastující neurologické komplikace regionální anestezie vedoucí ke kompresi míchy a cauda equina.",
        "Klinické varovné známky (Red Flags):",
        "• Nově vzniklá prudká lokalizovaná bolest v zádech s radikulárním vyzařováním.",
        "• Progredující motorický deficit (slabost dolních končetin, paraparéza až plegie) přetrvávající neobvykle dlouho po odeznění bloku.",
        "• Progresivní senzitivní blok nebo vzestup senzorické hladiny.",
        "• Sfinkterová dysfunkce – retence moči a inkontinence stolice.",
        "• U abscesu navíc horečka, leukocytóza, elevace CRP a meningeální dráždění (rozvíjí se typicky 2–7 dní po punkci).",
        "ZÁSADNÍ ZKOUŠKOVÝ ČASOVÝ LIMIT: Kritické časové okno pro záchranu neurologických funkcí je 6–8 HODIN od prvních příznaků!",
        "Při sebemenším podezření je nutné okamžitě provést statimové MRI páteře (nebo CT myelografii při kontraindikaci MRI) a pacienta neprodleně indikovat k urgentní neurochirurgické/spondylochirurgické dekompresní laminektomii s evakuací hematomu. Zpoždění nad 8–12 hodin vede k ireverzibilní ischemické nekróze míchy a trvalé paraplegii."
      ]
    }
  ],
  "corrections": [
    "Všechna lokální anestetika jsou slabé zásady; v kyselém prostředí zánětu jsou ionizována a neprostupují membránou, proto selhávají.",
    "Bupivakain je vysoce kardiotoxický s maximální jednotlivou dávkou 2 mg/kg (max. 150 mg); antidotem LAST je 20% lipidová emulze (Intralipid).",
    "Při resuscitaci zástavy oběhu u LAST redukujeme adrenalin na dávky < 1 µg/kg (10–50 µg i.v.) a vyvarujeme se vazopresinu.",
    "Časové okno pro chirurgickou dekompresi spinálního hematomu je 6–8 hodin od vzniku motorického deficitu."
  ],
  "checks": [
    {
      "question": "Jaké je přesné dávkování Intralipidu 20% při systémové toxicitě lokálních anestetik (LAST)?",
      "answer": "Úvodní i.v. bolus 1,5 ml/kg 20% lipidové emulze během 1 minuty (cca 100 ml u 70kg dospělého), následovaný kontinuální infuzí 0,25 ml/kg/min (cca 1000 ml/h). Při trvající nestabilitě lze bolus zopakovat 1–2x a infuzi zdvojnásobit na 0,5 ml/kg/min. Maximální kumulativní dávka je 10–12 ml/kg za prvních 30 minut.",
      "refs": [
        "last"
      ]
    },
    {
      "question": "Proč se při KPR u zástavy oběhu vyvolané LAST nesmí podat standardní 1mg dávka adrenalinu?",
      "answer": "Vysoké dávky adrenalinu zhoršují arytmie vyvolané bupivakainem, vyvolávají těžkou myokardiální acidózu a zhoršují schopnost lipidové emulze vychytávat anestetikum. Adrenalin se podává pouze v titračních dávkách < 1 µg/kg (10–50 µg i.v.).",
      "refs": [
        "last",
        "lastAdvisory"
      ]
    },
    {
      "question": "Jaký je typický klinický obraz postpunkční bolesti hlavy (PDPH) a co je její kauzální léčbou?",
      "answer": "Typická je přísně posturální frontookcipitální bolest hlavy – vzniká do 15 minut po vertikalizaci (vsedě/vestoje) a mizí vleže na zádech. Doprovází ji nauzea, fotofobie a tinitus. Kauzální definitivní léčbou je epidurální krevní zátka (aplikace 15–20 ml autologní krve do epidurálního prostoru v místě duralního defektu).",
      "refs": [
        "pdpH"
      ]
    },
    {
      "question": "Jaké je maximální časové okno pro dekompresi spinálního či epidurálního hematomu od vzniku paraparézy?",
      "answer": "Kritické časové okno je 6–8 hodin od nástupu neurologického deficitu. Urgentní statimové MRI a okamžitá dekompresní laminektomie jsou jedinou prevencí trvalé paraplegie.",
      "refs": [
        "neuroRegional",
        "ou2025"
      ]
    }
  ]
},
"B05":{
  "title": "Hemoragický šok a život ohrožující krvácení (ŽOK)",
  "reviewed": "2026-11-03",
  "edition": "Evropská doporučení 2023 · ERC 2025 · LF OU 2025",
  "scope": "Kompletní klinický přehled hemoragického šoku a ŽOK: definice, letální triáda / diamant smrti (hypotermie, acidóza, koagulopatie, hypokalcemie), Damage Control Resuscitation (permisivní hypotenze, restrikce krystaloidů), masivní transfuzní protokol 1:1:1, kyselina tranexamová (TXA), fibrinogen, viskoelastické testy (ROTEM/TEG) a chirurgická kontrola krvácení.",
  "opening": "Život ohrožující krvácení (ŽOK) a hemoragický šok představují nejčastější odvrátitelnou příčinu úmrtí u traumatických i netraumatických stavů (chirurgické, porodnické krvácení, ruptura aneuryzmatu, masivní krvácení z GIT). Úspěšné zvládnutí vyžaduje okamžitou aktivaci multioborového týmu, aplikaci principů Damage Control Resuscitation (DCR), chirurgické či intervenční zastavení krvácení a agresivní korekci rozvíjející se koagulopatie a letální triády.",
  "openingRefs": [
    "majorHaemorrhage",
    "traumaBleeding",
    "ou2025"
  ],
  "sections": [
    {
      "title": "1. Definice ŽOK a letální triáda / diamant smrti",
      "refs": [
        "majorHaemorrhage",
        "ou2025"
      ],
      "paragraphs": [
        "Definice Život ohrožujícího krvácení (ŽOK): Klinicky definováno jako krevní ztráta splňující alespoň jedno z následujících kritérií: 1. Ztráta celého odhadovaného krevního objemu během 24 hodin (cca 70 ml/kg u dospělého = cca 5 litrů krve). 2. Ztráta 50 % krevního objemu během 3 hodin. 3. Pokračující krevní ztráta přesahující 150 ml/min po dobu delší než 20 minut. 4. Jakékoli krvácení vedoucí k hemodynamické nestabilitě a tkáňové hypoperfuzi.",
        "SMRTÍCÍ TRIÁDA TRAUMATU (Lethal Triad) A DIAMANT SMRTI:",
        "Nekontrolované masivní krvácení roztáčí začarovaný kruh, který bez včasného přerušení vede k neodvratitelné smrti:",
        "1. HYPOTERMIE (teplota jádra < 35,0 °C): Způsobena ztrátou teplé krve, expozicí chladu a podáváním studených tekutin. Při teplotě < 35 °C dramaticky klesá enzymatická aktivita koagulačních faktorů a syntéza trombinu; pod 33 °C selhává funkce krevních destiček.",
        "2. METABOLICKÁ ACIDÓZA (arteriální pH < 7,20, base excess < -6 mmol/l): Důsledek těžké tkáňové hypoperfuze a anaerobní laktátové acidózy. Acidóza přímo inhibuje enzymatické komplexy koagulační kaskády a snižuje kontraktilitu myokardu.",
        "3. KOAGULOPATIE (Traumatem indukovaná koagulopatie – TIC): Komplexní porucha vznikající kombinací systémové hyperfibrinolýzy, spotřeby koagulačních faktorů a krevních destiček, a diluční koagulopatie způsobené nekritickým podáváním nekrevních infuzí.",
        "4. HYPOKALCEMIE (čtvrtý vrchol diamantu smrti): Ionizované kalcium Ca2+ < 0,9 mmol/l. Vápník (faktor IV) je nezbytný pro aktivaci destiček i všechny kroky koagulační kaskády. Hypokalcemie vzniká vazbou vápníku na citrát obsažený v konzervačních roztocích krevních transfuzí a vede k vazoplegii a nekontrolovatelnému krvácení!"
      ]
    },
    {
      "title": "2. Damage Control Resuscitation: permisivní hypotenze a hemostáza",
      "refs": [
        "traumaBleeding",
        "ou2025"
      ],
      "paragraphs": [
        "DAMAGE CONTROL RESUSCITATION (DCR): Moderní strategie resuscitace zaměřená na záchranu života před dosažením definitivní anatomické rekonstrukce. Má 3 základní pilíře:",
        "1. PERMISIVNÍ HYPOTENZE (Tolerovaná hypotenze): Do okamžiku chirurgického či intervenčního zastavení zdroje krvácení se krevní tlak záměrně neudržuje na normálních hodnotách! Cílový systolický tlak je 80–90 mmHg (střední arteriální tlak MAP 50–60 mmHg). ZKOUŠKOVÝ PRINCIP: Nekritické zvyšování krevního tlaku na normální hodnoty podáváním infuzí vyrazí primární křehkou krevní sraženinu (tzv. fenomén „pop the clot“), zhorší diluci a vyvolá masivní recidivu krvácení! ZÁSADNÍ VÝJIMKA: Kraniotrauma (TBI) – při poranění mozku je nutné udržovat perfuzní tlak mozku (CPP) a cílit na systolický TK >= 100–110 mmHg!",
        "2. RESTRIKCE KRYSTALOIDŮ: Striktní omezení infuzí krystaloidů (max. 1000–1500 ml balancovaného krystaloidu). Krystaloid nenese kyslík, zhoršuje diluční koagulopatii a ochlazuje pacienta.",
        "3. DAMAGE CONTROL SURGERY (DCS): Zástava krvácení má přednost před jakýmikoli jinými výkony! Provádějí se pouze rychlé život zachraňující výkony (přiložení hemostatického turniketu, pánevní pás, tamponáda břišní dutiny rouškami – laparotomie s packingem, dočasný cévní shunt). Definitivní rekonstrukce se odkládá na dobu po stabilizaci na JIP."
      ]
    },
    {
      "title": "3. Masivní transfuzní protokol (MTP), kyselina tranexamová a hemostyptika",
      "refs": [
        "majorHaemorrhage",
        "traumaBleeding",
        "ou2025"
      ],
      "paragraphs": [
        "MASIVNÍ TRANSFUZNÍ PROTOKOL (MTP):",
        "Aktivuje se okamžitě při podezření na ŽOK. Podávání krevních složek v pevném vyváženém poměru 1 : 1 : 1:",
        "1 jednotka erytrocytární masy (EBR) : 1 jednotka čerstvé mražené plazmy (ČMP) : 1 jednotka krevních destiček (trombocytů z aferézy odpovídající 4–6 jednotkám z plné krve). Tento poměr simuluje složení plné krve a brání rozvoji diluční koagulopatie. V úvodu se podávají univerzální erytrocyty 0 Rh- (negativní) a plazma skupiny AB.",
        "FARMAKOLOGICKÁ PODPORA KOAGULACE:",
        "1. KYSELINA TRANEXAMOVÁ (TXA – Exacyl): Zlatý standard! Silné antifibrinolytikum. ZKOUŠKOVÁ DÁVKA A ČASOVÉ OKNO: Dávka 1 g i.v. bolus během 10 minut, následovaná kontinuální infuzí 1 g během následujících 8 hodin. Musí být podána CO NEJDŘÍVE, maximálně do 3 HODIN od úrazu (studie CRASH-2 prokázala, že aplikace po 3 hodinách mortalitu naopak zvyšuje!).",
        "2. FIBRINOGEN: Fibrinogen je první koagulační faktor, jehož hladina při masivním krvácení klesá pod kritickou mez. Cílová hladina v plazmě je >= 1,5–2,0 g/l. Aplikuje se koncentrát lidského fibrinogenu (Haemocomplettan) v iniciální dávce 2–4 g i.v. bolusem (alternativně kryoprecipitát).",
        "3. KALCIUM: Po každých 2–4 jednotkách erytrocytů/plazmy je povinná aplikace 10–20 ml 10% Calcium gluconicum (nebo Calcium chloratum) i.v. k udržení ionizovaného Ca2+ > 1,1 mmol/l.",
        "4. KONCENTRÁT PROTROMBINOVÉHO KOMPLEXU (PCC – Prothromplex / Beriplex): Indikován při urgentní reverzi antikoagulační léčby warfarinem (dle INR) nebo při prodlouženém čase tvorby sraženiny dle ROTEM.",
        "5. REVERZE NOAC/DOAC: Idarucizumab (Praxbind 5 g i.v.) pro dabigatran; Andexanet alfa pro inhibitory faktoru Xa (apixaban, rivaroxaban); při nedostupnosti podat PCC 50 IU/kg."
      ]
    },
    {
      "title": "4. Viskoelastické metody (ROTEM/TEG) a cíle stabilizace",
      "refs": [
        "traumaBleeding",
        "majorHaemorrhage",
        "ou2025"
      ],
      "paragraphs": [
        "VISKOELASTICKÉ TESTY U LŮŽKA (Point-of-Care: ROTEM – Rotační tromboelastometrie / TEG):",
        "Standardní koagulační testy (INR, aPTT, fibrinogen) trvají z centrální laboratoře 45–60 minut a odrážejí minulý stav. ROTEM poskytuje komplexní grafický obraz srážení celé krve u lůžka do 10–15 minut:",
        "1. EXTEM / INTEM: hodnotí čas tvorby sraženiny (Clotting Time – CT; prodloužení značí deficit koagulačních faktorů -> indikace k podání plazmy či PCC).",
        "2. FIBTEM: eliminuje vliv trombocytů přídavkem cytochalasinu D a měří čistou kvalitu fibrinogenové sítě (maximální pevnost MCF < 10–12 mm značí těžký deficit fibrinogenu -> okamžitá indikace k podání koncentrátu fibrinogenu 2–4 g!).",
        "3. APTEM: inhibuje fibrinolýzu aprotininem; pokud normalizuje křivku oproti EXTEM, prokazuje fulminantní hyperfibrinolýzu -> okamžitá indikace k TXA.",
        "CÍLE RESUSCITACE ŽOK: 1. Teplota jádra > 36,0 °C (aktivní ohřívání pacienta a masivní přetlakové infuzní ohřívače – systém Belmont/Ranger). 2. Hemoglobin 70–90 g/l. 3. Trombocyty > 50 x 10^9/l (u kraniotraumatu > 100 x 10^9/l). 4. Fibrinogen >= 1,5–2,0 g/l. 5. Ionizované kalcium > 1,1 mmol/l. 6. Laktát < 2 mmol/l a ústup acidózy."
      ]
    }
  ],
  "checks": [
    {
      "q": "Co tvoří letální triádu (a diamant smrti) u krvácejícího pacienta?",
      "a": "Letální triádu tvoří: 1. Hypotermie (< 35 °C), 2. Metabolická acidóza (pH < 7,20) a 3. Koagulopatie (TIC). Rozšířený diamant smrti zahrnuje jako 4. vrchol těžkou hypokalcemii (ionizované Ca2+ < 0,9 mmol/l způsobené vazbou na citrát v krevních konzervách). Všechny tyto složky se vzájemně potencují a vedou k nezvladatelnému krvácení.",
      "refs": [
        "majorHaemorrhage",
        "ou2025"
      ]
    },
    {
      "q": "Co znamená pojem permisivní hypotenze a jaká je zásadní výjimka z tohoto pravidla?",
      "a": "Permisivní hypotenze je záměrné udržování nižšího krevního tlaku (systolický TK 80–90 mmHg, MAP 50–60 mmHg) do doby definitivního chirurgického zastavení krvácení, aby se zabránilo vyplavení primární sraženiny (fenomén pop the clot) a zhoršení diluce. Zásadní výjimkou je závažné kraniotrauma (poranění mozku), kde je nutné udržet systolický TK >= 100–110 mmHg k zajištění mozkové perfuze.",
      "refs": [
        "traumaBleeding"
      ]
    },
    {
      "q": "Jaké je přesné dávkování a časové okno pro podání kyseliny tranexamové (TXA) u ŽOK?",
      "a": "Kyselina tranexamová se aplikuje v dávce 1 g i.v. bolusem během 10 minut, následovaná kontinuální infuzí 1 g během následujících 8 hodin. Musí být podána co nejdříve od úrazu, nejpozději však do 3 hodin (po 3 hodinách mortalitu naopak prokazatelně zvyšuje).",
      "refs": [
        "traumaBleeding"
      ]
    },
    {
      "q": "V jakém poměru se podávají krevní deriváty v rámci masivního transfuzního protokolu?",
      "a": "Podávají se ve vyváženém poměru 1 : 1 : 1, tedy 1 jednotka erytrocytů : 1 jednotka čerstvé mražené plazmy : 1 terapeutická dávka krevních destiček. Tento poměr nejlépe napodobuje plnou krev a zabraňuje rozvoji těžké diluční koagulopatie.",
      "refs": [
        "majorHaemorrhage"
      ]
    }
  ]
},
"B06":{
  "title": "Polytrauma: první pomoc a trauma protokol na urgentním příjmu",
  "reviewed": "2026-11-03",
  "edition": "ACS ATLS 11 (2025) · ERC 2025 · LF OU 2025",
  "scope": "Kompletní přehled polytraumatu: definice (Berlínská kritéria, ISS > 15), trimodální distribuce úmrtí, strukturované primární vyšetření cABCDE dle ATLS 11, okamžité život zachraňující výkony (turniket, MILS, dekomprese tenzního PNO, pánevní pás, eFAST), Damage Control Surgery vs. Early Total Care.",
  "opening": "Polytrauma je závažný stav charakterizovaný současným poraněním alespoň dvou orgánových systémů, z nichž minimálně jedno (nebo jejich kombinace) bezprostředně ohrožuje život zraněného. Péče o polytrauma podléhá celosvětově standardizovanému algoritmu ATLS (Advanced Trauma Life Support, 11. edice 2025). Základním imperativem je strukturovaný přístup cABCDE, kde se zjištěná život ohrožující patologie okamžitě léčí dříve, než se přistoupí k dalšímu kroku.",
  "openingRefs": [
    "atls11",
    "berlin",
    "ou2025"
  ],
  "sections": [
    {
      "title": "1. Definice polytraumatu, skórování a trimodální distribuce úmrtí",
      "refs": [
        "berlin",
        "ou2025"
      ],
      "paragraphs": [
        "Definice polytraumatu: Současné poranění nejméně dvou orgánových systémů, z nichž alespoň jedno bezprostředně ohrožuje život. Anatomické skóre ISS (Injury Severity Score) > 15 bodů.",
        "BERLÍNSKÁ DEFINICE POLYTRAUMATU (Konsenzus): Poranění s AIS (Abbreviated Injury Scale) >= 3 ve dvou či více tělesných regionech a současná přítomnost alespoň JEDNOHO z pěti systémových fyziologických rizikových faktorů: 1. Hypotenze (systolický TK <= 90 mmHg), 2. Porucha vědomí (GCS <= 8), 3. Acidóza (base excess <= -6,0 mmol/l), 4. Koagulopatie (INR >= 1,4 nebo aPTT >= 40 s), 5. Věk >= 65 let.",
        "TRIMODÁLNÍ DISTRIBUCE ÚMRTÍ NA TRAUMA:",
        "1. První vrchol (Bezprostřední úmrtí – vteřiny až minuty od úrazu): Masivní devastující kraniocerebrální trauma, dekapitace, ruptura hrudní aorty či srdce, vysoké přetětí krční míchy (C1–C3). Tito pacienti umírají přímo na místě; medicínsky jsou ovlivnitelní pouze prevencí (bezpečnostní pásy, airbagy, helmy).",
        "2. Druhý vrchol (Časná úmrtí – minuty až hodiny – tzv. ZLATÁ HODINA / Golden Hour): Úmrtí na tenzní pneumotorax, masivní hemotorax, asfyxii z obstrukce dýchacích cest, srdeční tamponádu, epidurální/subdurální hematom, masivní hemoragický šok (ruptura sleziny, jater, nestabilní fraktura pánve). TOTO JE HLAVNÍ CÍL ATLS – téměř všechna tato úmrtí jsou ODVRÁTITELNÁ včasným a správným zásahem!",
        "3. Třetí vrchol (Pozdní úmrtí – dny až týdny po úrazu): Úmrtí na lůžkách JIP na syndrom multiorgánového selhání (MODS), sepsi a refrakterní ARDS."
      ]
    },
    {
      "title": "2. Strukturované primární vyšetření cABCDE dle ATLS 11 (2025)",
      "refs": [
        "atls11",
        "ou2025"
      ],
      "paragraphs": [
        "Primární vyšetření (Primary Survey) cABCDE s okamžitým řešením nalezených patologií:",
        "c – CATASTROPHIC HAEMORRHAGE (Zástava masivního zevního tepenného krvácení):",
        "Předřazeno před airway! Okamžité zastavení masivního stříkavého krvácení z končetin přiložením hemostatického TURNIKETU (zaškrcovadla) proximálně od rány s dotažením do zástavy krvácení a vymizení distálního pulzu (zaznamenat čas naložení!). U krvácení v přechodových oblastech (tříslo, axila) komprese rány s hemostatickou gázou (wound packing).",
        "A – AIRWAY AND CERVICAL SPINE CONTROL (Dýchací cesty a imobilizace krční páteře):",
        "1. Přísný ZÁKAZ ZÁKLONU HLAVY! Manuální stabilizace hlavy a krku v neutrální ose (MILS – Manual In-Line Stabilization). Přední díl imobilizačního límce se rozepne pro otevření úst.",
        "2. Vyčištění dutiny ústní, odsátí krve, zvratků a zubních úlomků.",
        "3. Indikace k okamžité orotracheální intubaci (OTI) s manžetou: GCS <= 8, obličejové trauma ohrožující průchodnost DC, hluboká hypoxie navzdory kyslíku. Metoda volby: videolaryngoskopie s MILS; při selhání okamžitá eFONA (koniotomie skalpel-bougie-kanyla).",
        "B – BREATHING AND VENTILATION (Dýchání a ventilace):",
        "Insuflace 100% kyslíku maskou. Okamžité odhalení a vyřešení 4 život ohrožujících hrudních traumat:",
        "1. TENZNÍ PNEUMOTORAX (hypersonorní poklep, oslabené dýchání, hypotenze, deviace trachey): Okamžitá dekomprese kanylou 14G ve 2. mezižebří medioklavikulárně nebo 4.–5. mezižebří přední axilární čára, následovaná hrudní drenáží.",
        "2. MASIVNÍ HEMOTORAX: Zavedení hrudního drénu velkého kalibru (28–32 Fr) s autotransfuzí; drenáž > 1500 ml krve (nebo > 200 ml/h po 3–4 hodiny) je indikací k emergentní torakotomii!",
        "3. OTEVŘENÝ PNEUMOTORAX (sající rána hrudníku): Krytí poloprodyšným tříchlopňovým obvazem (vzduch může unikat ven, ale nenasává se dovnitř).",
        "4. VLAJÍCÍ HRUDNÍK (Flail chest): Paradoxní dýchání při sériové fraktuře žeber; vyžaduje analgezii, včasnou intubaci a vnitřní pneumatickou dlahu UPV."
      ]
    },
    {
      "title": "3. Cirkulace, eFAST a kontrola vnitřního krvácení",
      "refs": [
        "atls11",
        "traumaBleeding",
        "ou2025"
      ],
      "paragraphs": [
        "C – CIRCULATION WITH HAEMORRHAGE CONTROL (Oběh a pátrání po vnitřním krvácení):",
        "Zhodnocení tepové frekvence, krevního tlaku, kapilárního návratu. Zavedení 2 tlustých periferních žil (14G–16G) nebo intraoseálního vstupu (i.o.). Zahájení permisivní hypotenze (cílový systolický TK 80–90 mmHg). Okamžité podání kyseliny tranexamové (TXA 1 g i.v. do 10 min) a aktivace masivního transfuzního protokolu.",
        "PÁTRÁNÍ PO 5 MÍSTECH ZÁVAŽNÉHO VNITŘNÍHO KRVÁCENÍ (kam pacient krvácí do šoku?):",
        "1. Hrudník (hemotorax) -> hrudní drenáž.",
        "2. Břicho (ruptura jater, sleziny, mezenteria) -> ultrazvuk eFAST.",
        "3. Pánev (nestabilní fraktury pánve typu Open Book) -> OKAMŽITÉ NALOŽENÍ PÁNEVNÍHO PÁSU (Pelvic Binder) v úrovni velkých trochanterů stehenních kostí (nikoli na lopaty kyčelní!), což zmenší objem pánve a vytvoří tamponádu venózního retroperitoneálního krvácení!",
        "4. Dlouhé kosti (fraktura femuru krvácí 1000–1500 ml krve) -> repozice a trakční dlaha.",
        "5. Zevní prostředí a retroperitoneum.",
        "ULTRAZVUKOVÉ VYŠETŘENÍ eFAST (extended Focused Assessment with Sonography for Trauma):",
        "Zlatý standard na emergency lůžku prováděný do 2 minut bez přerušení resuscitace. Hodnotí volnou tekutinu (krev) v 6 oblastech: 1. Perikard (tamponáda), 2. Morrisonův prostor (hepatorenální), 3. Kollerův prostor (splenorenální), 4. Douglasův prostor (malá pánev za močovým měchýřem), 5. Pleurální prostory oboustranně (hemotorax), 6. Přední plocha hrudníku oboustranně (absence sliding sign = pneumotorax).",
        "D – DISABILITY (Neurologické vyšetření): GCS skóre, velikost a fotoreakce zornic (vyloučení unkální herniace), hybnost končetin, okamžitá glykemie.",
        "E – EXPOSURE AND ENVIRONMENT: Kompletní svlečení pacienta, inspekce celého těla (včetně otočení log-roll s kontrolou zad a páteře), okamžité zabalení do předehřátých dek k prevenci hypotermie."
      ]
    },
    {
      "title": "4. Damage Control Surgery vs. Early Total Care a celotělové CT",
      "refs": [
        "atls11",
        "berlin",
        "ou2025"
      ],
      "paragraphs": [
        "ZOBRAZOVACÍ PROTOKOL U STABILIZOVANÉHO PACIENTA (Pan-CT / Celotělové trauma CT):",
        "Jakmile je pacient po primárním vyšetření cABCDE stabilizován (TK udržen, airway zajištěna), je standardem provedení celotělového nekontrastního CT hlavy a krční páteře a následně kontrastního dvoufázového CT hrudníku, břicha a pánve k mapování všech poranění.",
        "STRATEGIE CHIRURGICKÉ LÉČBY: DAMAGE CONTROL SURGERY (DCS) VS. EARLY TOTAL CARE (ETC):",
        "1. Early Total Care (ETC – Časná definitivní péče): Kompletní definitivní ošetření všech fraktur a poranění v jedné dlouhé operaci. Indikována POUZE u fyziologicky STABILNÍHO pacienta bez acidózy, hypotermie a koagulopatie.",
        "2. DAMAGE CONTROL SURGERY (DCS – Etapová záchranná chirurgie):",
        "Indikována u NESTABILNÍHO pacienta (přítomna letální triáda: hypotermie < 35 °C, acidóza pH < 7,20, koagulopatie, masivní transfuzní zátěž). Dlouhá rekonstrukční operace by vlivem tzv. druhého inzultu (Second Hit) vedla k neodvratitelné smrti!",
        "Etapy DCS: Fáze 1 (operační sál, max. 60–90 minut): pouze život zachraňující výkony – zástava chirurgického krvácení (laparotomie s packingem rouškami), zabránění kontaminaci (uzavření perforací střeva bez anastomóz), rychlá stabilizace velkých fraktur zevními fixátory, dočasný uzávěr břicha (laparostoma – Bogota bag / podtlaková drenáž VAC). Fáze 2 (ARO/JIP, 24–48 hodin): intenzivní resuscitace, aktivní zahřátí, korekce koagulopatie, normalizace pH a laktátu. Fáze 3 (operační sál po stabilizaci): plánovaná re-laparotomie, odstranění packingu, definitivní rekonstrukce trávicí trubice a definitivní osteosyntézy."
      ]
    }
  ],
  "checks": [
    {
      "q": "Jaká jsou kritéria Berlínské definice polytraumatu?",
      "a": "Berlínská definice vyžaduje poranění s AIS >= 3 alespoň ve dvou tělesných regionech a současnou přítomnost minimálně jednoho z 5 fyziologických rizikových faktorů: hypotenze (systolický TK <= 90 mmHg), porucha vědomí (GCS <= 8), acidóza (base excess <= -6 mmol/l), koagulopatie (INR >= 1,4 nebo aPTT >= 40 s) nebo věk >= 65 let.",
      "refs": [
        "berlin"
      ]
    },
    {
      "q": "Co znamená písmeno c v moderním algoritmu cABCDE dle ATLS 11?",
      "a": "Znamená Catastrophic haemorrhage – zástavu masivního zevního stříkavého tepenného krvácení z končetin, která má absolutní přednost ještě před zajištěním dýchacích cest (Airway). Řeší se okamžitým naložením hemostatického turniketu (zaškrcovadla) proximálně od rány s dotažením do zástavy krvácení.",
      "refs": [
        "atls11"
      ]
    },
    {
      "q": "Jaké 4 život ohrožující hrudní patologie musí být okamžitě odhaleny v kroku B primárního vyšetření?",
      "a": "Musí být okamžitě rozpoznány a vyřešeny: 1. Tenzní pneumotorax (dekomprese kanylou 14G ve 2. či 4.–5. mezižebří a drenáž), 2. Masivní hemotorax (hrudní drén 28–32 Fr), 3. Otevřený pneumotorax (poloprodyšné tříchlopňové krytí) a 4. Vlající hrudník / flail chest (analgezie a intubace s vnitřní dlahou UPV).",
      "refs": [
        "atls11"
      ]
    },
    {
      "q": "Jaký je rozdíl mezi Damage Control Surgery a Early Total Care u polytraumatu?",
      "a": "Early Total Care je definitivní chirurgické ošetření všech poranění v jedné operaci, které je vyhrazeno pouze pro fyziologicky stabilní pacienty. Damage Control Surgery je etapový záchranný postup u nestabilního pacienta v těžkém šoku – v 1. fázi se provede pouze zástava krvácení (packing břicha) a stabilizace zevním fixátorem do 60–90 min, následuje stabilizace na JIP (zahřátí, koagulace) a teprve s odstupem 24–48 hodin definitivní rekonstrukční operace.",
      "refs": [
        "atls11",
        "ou2025"
      ]
    }
  ]
},
    "B11": {
    "title": "Sepse a septický šok – příčiny, projevy, diagnostika, terapie",
    "reviewed": "2026-11-03",
    "edition": "Sepsis-3 · Surviving Sepsis Campaign 2026 · LF OU 2025",
    "scope": "Dospělí: definice Sepsis-3, SOFA skóre, septický šok, SSC 1-Hour Bundle, tekutiny, noradrenalin, vazopresin, dobutamin, hydrokortizon a kontrola zdroje. Specifická farmakokinetika ATB viz B12.",
    "opening": "Sepse je život ohrožující orgánová dysfunkce způsobená dysregulovanou odpovědí hostitele na infekci (Sepsis-3). U zkoušky začínám jasným odlišením sepse od nekomplikované infekce a zrušeného konceptu SIRS/těžké sepse, definuji septický šok s přesnými hemodynamickými kritérii (MAP, laktát), popíši komponenty SOFA skóre, projdu 5 kroků SSC 1-Hour Bundle s dávkami balancovaných krystaloidů (30 ml/kg) a noradrenalinu jako 1. volby, a zdůrazním urgentní kontrolu zdroje do 6–12 hodin.",
    "openingRefs": ["sepsis3", "ssc2026", "ou2025"],
    "sections": [
      {
        "title": "1. Definice, terminologie a patofyziologie (Sepsis-3)",
        "refs": ["sepsis3", "ou2025"],
        "paragraphs": [
          "Definice sepse (Sepsis-3, 2016): Život ohrožující orgánová dysfunkce způsobená dysregulovanou odpovědí organismu na infekci. Patofyziologicky dochází ke ztrátě kompartmentizace zánětu a masivnímu zaplavení cirkulace mediátory ('cytokinová bouře', maligní zvrat zánětové odpovědi – host destructive response dle LF OU 2025). Následuje generalizované poškození endotelu, mikrovaskulární trombóza, difuzní vazodilatace, kapilární únik (leak) a buněčná dysoxie vedoucí k tkáňové hypoxii a syndromu multiorgánové dysfunkce (MODS).",
          "Opuštěná terminologie: Koncept SIRS (Systemic Inflammatory Response Syndrome) byl opuštěn pro nízkou specificitu (sama teplota a tachykardie neznamenají sepsi). Termín 'těžká sepse' (severe sepsis) byl v Sepsis-3 zcela zrušen jako nadbytečný – jakákoli sepse je ze své podstaty těžká a život ohrožující.",
          "Septický šok je nejtěžší podskupinou sepse, kde jsou oběhové, buněčné a metabolické abnormality natolik hluboké, že mortalita přesahuje 40 % (ve skriptech LF OU 30–50 %). Definiční diagnostická kritéria septického šoku jsou dvě současně přítomné podmínky po adekvátní tekutinové resuscitaci: (a) Perzistující hypotenze vyžadující vazopresory k udržení středního arteriálního tlaku MAP >= 65 mmHg A SOUČASNĚ (b) Sérový laktát > 2.0 mmol/l (18 mg/dl)."
        ]
      },
      {
        "title": "2. Diagnostika a skórovací systémy: SOFA vs. qSOFA",
        "refs": ["sepsis3", "ou2025"],
        "paragraphs": [
          "SOFA skóre (Sequential Organ Failure Assessment): Akutní orgánová dysfunkce je v Sepsis-3 definována jako akutní vzestup celkového SOFA skóre o >= 2 body v důsledku infekce (u pacienta bez předchozí orgánové poruchy je výchozí skóre 0). Hodnotí se 6 orgánových systémů (0–4 body za každý, celkem 0–24 bodů):",
          "1. Respirace: PaO2/FiO2 (norma >= 53.3 kPa / 400 mmHg = 0 bodů; < 53.3 kPa = 1 bod; < 40 kPa = 2 body; < 26.7 kPa s UPV = 3 body; < 13.3 kPa s UPV = 4 body). 2. Koagulace: Trombocyty (>= 150 = 0; < 150 = 1; < 100 = 2; < 50 = 3; < 20 x 10^9/l = 4 body). 3. Játra: Bilirubin (< 20 = 0; 20–32 = 1; 33–101 = 2; 102–204 = 3; > 204 mikromol/l = 4 body).",
          "4. Kardiovaskulární systém: Hypoperfuze a oběh (MAP >= 70 mmHg = 0; MAP < 70 mmHg = 1; dopamin < 5 nebo dobutamin jakákoli dávka = 2; dopamin 5.1–15 nebo noradrenalin <= 0.1 mikrog/kg/min = 3; dopamin > 15 nebo noradrenalin > 0.1 mikrog/kg/min = 4 body). 5. CNS: Glasgow Coma Scale (GCS 15 = 0; 13–14 = 1; 10–12 = 2; 6–9 = 3; < 6 = 4 body). 6. Ledviny: Kreatinin a diuréza (kreatinin < 110 = 0; 110–170 = 1; 171–299 = 2; 300–440 = 3; > 440 mikromol/l nebo diuréza < 500 ml/den = 3; diuréza < 200 ml/den = 4 body). Pravidlo LF OU: S každým selhávajícím orgánem se skóre > 2 stoupá riziko úmrtí pacienta o 20 %!",
          "qSOFA (quick SOFA): Screeningový bedside nástroj mimo JIP (ZZS, standardní oddělení, urgentní příjem) k rychlé identifikaci rizikového pacienta. Zahrnuje 3 kritéria (1 bod každé): (1) Dechová frekvence >= 22/min; (2) Změna mentálního stavu (GCS < 15); (3) Systolický TK <= 100 mmHg. Skóre >= 2 body identifikuje vysoké riziko sepse/úmrtí a indikuje okamžité vyšetření krevních plynů, laktátu a laboratorní stanovení plného SOFA skóre. Zkoušková past: qSOFA NENÍ definicí sepse ani samostatným vylučovacím kritériem!"
        ]
      },
      {
        "title": "3. Surviving Sepsis Campaign (SSC) 1-Hour Bundle",
        "refs": ["ssc2026", "cultures", "ou2025"],
        "paragraphs": [
          "Okamžitá iniciální péče se řídí doporučením SSC '1-Hour Bundle' – všech 5 intervencí musí být zahájeno do 1 hodiny od stanovení podezření na sepsi/šok:",
          "1. Změřit hladinu laktátu v séru: Zvýšený laktát (> 2 mmol/l) signalizuje tkáňovou hypoperfuzi a anaerobní metabolismus. Při iniciálním laktátu > 2 mmol/l se měření opakuje za 2–4 hodiny ke sledování clearance laktátu (pokles o >= 10–20 % za 2 hodiny svědčí pro efektivní resuscitaci).",
          "2. Odebrat hemokultury před zahájením ATB: Odebrat minimálně 2 sady hemokultur (každá sada = 1 aerobní + 1 anaerobní lahvička, celkem 4 lahvičky, z různých venepunkčních míst v objemu 8–10 ml na lahvičku) a cílené vzorky z ložisek (moč, sputum, BAL, drény, hnis). Zkoušková zásada: Odběr kultivací NESMÍ zpozdit podání antibiotik o více než 45 minut!",
          "3. Zahájit širokospektrá i.v. antibiotika do 1 hodiny: U septického šoku i jisté/vysoce pravděpodobné sepse podat empirické širokospektré baktericidní ATB v plné dávce do 60 minut od diagnózy ('hit fast and hit hard' – Paul Ehrlich: therapia sterilisans magna). Každá hodina prodlení od rozvoje hypotenze zvyšuje mortalitu o téměř 8 % (Kumar et al., Crit Care Med 2006).",
          "4. Aplikovat tekutinovou nálož 30 ml/kg balancovaného krystaloidu: Při přítomnosti hypotenze (MAP < 65 mmHg) nebo těžké hyperlaktatémie (laktát >= 4.0 mmol/l) zahájit rychlou infuzi balancovaného krystaloidu (Plasmalyte, Ringerfundin) v dávce minimálně 30 ml/kg během prvních 3 hodin. Roztok 0.9% NaCl je nevhodný (hrozí hyperchloremická acidóza a vazokonstrikce renálních arteriol), syntetické HES koloidy jsou přísně zakázány.",
          "5. Zahájit vazopresory k udržení MAP >= 65 mmHg: Pokud hypotenze neodpovídá na probíhající volumoterapii nebo je přítomen hluboký šok, zahájit vazopresor souběžně s tekutinami (není nutné čekat na dokončení celé tekutinové nálože). Cílem je oběhová stabilita do 6 hodin od stanovení diagnózy."
        ]
      },
      {
        "title": "4. Hemodynamická resuscitace, vazopresory a inotropika",
        "refs": ["ssc2026", "ou2025"],
        "paragraphs": [
          "Řízení tekutinové terapie: Po iniciálním bolusu 30 ml/kg se další podávání tekutin řídí výhradně dynamickými testy tekutinové responzivity (fluid responsiveness) – pasivní přednožení (Passive Leg Raising, PLR s nárůstem tepového objemu o > 10–15 %), respirační variabilita pulzního tlaku (PPV > 13 %) nebo tepového objemu (SVV > 13 %) při řízené UPV bez arytmií. Statické parametry (CVP) jsou nespolehlivé. Nekritické přelévání tekutinami (fluid overload) zvyšuje mortalitu, zhoršuje výměnu plynů v plicích a vede k syndromu nitrobřišní hypertenze (IAH/ACS).",
          "Vazopresor 1. volby: Noradrenalin (silný alfa-1 mimetický vazokonstriktor s mírným beta-1 inotropním účinkem). Zahajovací dávka 0.05–0.1 mikrog/kg/min centrální žílou (přechodně lze periferní linkou do antekubitální žíly pod přísnou kontrolou), titrace k cíli MAP >= 65 mmHg (u seniorů >= 65 let s chronickou hypotenzí SSC podmíněně připouští 60–65 mmHg).",
          "Vazopresor 2. volby: Vazopresin (arginin-vazopresin, AVP) ve fixní dávce 0.03–0.04 IU/min kontinuálně (netitruje se!). Přidává se při refrakterní vazodilataci nebo eskalaci noradrenalinu (dávky > 0.25 mikrog/kg/min) ke snížení dávek katecholaminů. Působí přes vaskulární V1 receptory, jejichž senzitivita zůstává zachována i při acidóze a vyčerpání adrenergních receptorů.",
          "Inotropikum: Dobutamin (syntetický beta-1 agonista, dávka 2.5–20 mikrog/kg/min) se přidává k noradrenalinu při perzistující hypoperfuzi a známkách myokardiální dysfunkce (dysfunkce levé komory na ECHO, elevovaný laktát, nízká saturace smíšené venózní krve ScvO2 < 70 % navzdory dosaženému MAP a adekvátnímu volumu).",
          "Adrenalin (0.05–0.5 mikrog/kg/min) je lékem 3. volby u refrakterního šoku nereagujícího na kombinaci noradrenalin + vazopresin/dobutamin.",
          "Kortikosteroidy: Hydrokortizon v dávce 200 mg/den (podávaný kontinuálně infuzí 8.3 mg/h nebo v bolusech 50 mg i.v. po 6 hodinách). Indikován POUZE u refrakterního septického šoku, kdy přetrvává hemodynamická nestabilita navzdory volumoterapii a vysokým dávkám vazopresorů (noradrenalin >= 0.25 mikrog/kg/min po dobu > 4 hodin). Zkoušková past: Vysoké pulzní dávky kortikoidů (> 400 mg/den) jsou v sepsi kontraindikovány (zvyšují mortalitu a infekční komplikace!)."
        ]
      },
      {
        "title": "5. Kontrola zdroje (Source Control) a komplexní orgánová podpora",
        "refs": ["ssc2026", "ou2025"],
        "paragraphs": [
          "Eradikace zdroje infekce (Source Control): Spolu s ATB jediná kauzální terapie sepse! Zahrnuje: (a) Chirurgické ošetření: emergentní laparotomie u perforace dutého orgánu, nekrosektomie u nekrotizující fasciitidy či peritonitidy; (b) Perkutánní nebo endoskopická drenáž abscesů, empyému či biliární dekomprese; (c) Okamžité odstranění potenciálně infikovaných invazivních vstupů (centrální žilní katétry, dialyzační katétry, močové permanentní katétry). Časový limit: Kontrola zdroje musí být provedena co nejdříve, ideálně do 6–12 hodin od stanovení diagnózy.",
          "Respirační podpora: Protektivní umělá plicní ventilace při rozvoji ARDS (nízký dechový objem Vt 4–6 ml/kg predikované hmotnosti PBW, tlak v inspirační pauze Pplat <= 30 cmH2O, driving pressure Delta P < 14 cmH2O, individualizovaný PEEP).",
          "Renální podpora: Kontinuální eliminační metody (CRRT – CVVHDF) při septickém AKI s anurií, metabolickou acidózou nebo hyperkalemií; mimotělní hemoadsorpční techniky (např. adsorpce cytokinů) zatím nemají jednoznačný průkaz vlivu na mortalitu v guidelines.",
          "Metabolická a ošetřovatelská péče: Časná enterální výživa v trofických dávkách do 24–48 h (10–20 ml/h); cílová glykémie 7.8–10.0 mmol/l řízená kontinuálním i.v. inzulinem (přísná normoglykémie < 6.1 mmol/l je škodlivá kvůli letální hypoglykemii!); farmakologická tromboprofilaxe (LMWH) a profylaxe stresového vředu žaludku (H2-blokátory / PPI u rizikových pacientů na UPV nebo s koagulopatií)."
        ]
      }
    ],
    "corrections": [
      "Kritéria SIRS (teplota, leukocyty, tachykardie, tachypnoe) a pojem 'těžká sepse' byly v Sepsis-3 (2016) opuštěny. Sepse je definována jako dysregulovaná odpověď hostitele s akutním vzestupem SOFA >= 2 body.",
      "Septický šok NENÍ definován pouhým poklesem krevního tlaku. Vyžaduje perzistující hypotenzi s nutností vazopresorů k udržení MAP >= 65 mmHg A SOUČASNĚ sérový laktát > 2.0 mmol/l po tekutinové resuscitaci.",
      "qSOFA (dech >= 22, GCS < 15, TKs <= 100) slouží výhradně jako screeningový varovný nástroj mimo JIP. Není to definice sepse a negativní qSOFA sepsi nevylučuje.",
      "Fyziologický roztok (0.9% NaCl) není lékem volby pro tekutinovou resuscitaci – způsobuje hyperchloremickou metabolickou acidózu a renální vazokonstrikci. Lékem volby jsou balancované krystaloidy (Plasmalyte, Ringerfundin). Syntetické koloidy (HES) jsou přísně zakázány pro nefrotoxicitu.",
      "Hydrokortizon se v sepsi nepodává plošně ani ve vysokých pulzech. Je indikován pouze u refrakterního šoku v dávce 200 mg/den."
    ],
    "checks": [
      {
        "question": "Jaká jsou dvě definiční kritéria septického šoku dle Sepsis-3 po adekvátní tekutinové resuscitaci?",
        "answer": "1. Nutnost vazopresorů k udržení MAP >= 65 mmHg A SOUČASNĚ 2. Sérová hladina laktátu > 2.0 mmol/l (18 mg/dl).",
        "refs": ["sepsis3"]
      },
      {
        "question": "Kterých 6 orgánových systémů a parametrů hodnotí skóre SOFA a jaká hodnota značí orgánovou dysfunkci v sepsi?",
        "answer": "Respirace (PaO2/FiO2), koagulace (trombocyty), játra (bilirubin), kardiovaskulární systém (MAP / dávka katecholaminů), CNS (GCS) a ledviny (kreatinin / diuréza). Orgánovou dysfunkci prokazuje akutní vzestup celkového SOFA skóre o >= 2 body.",
        "refs": ["sepsis3", "ou2025"]
      },
      {
        "question": "Jakých 5 intervencí tvoří Surviving Sepsis Campaign 1-Hour Bundle?",
        "answer": "1. Změřit sérový laktát (opakovat za 2–4 h při > 2 mmol/l). 2. Odebrat 2 sady hemokultur před ATB. 3. Podat širokospektrá i.v. ATB do 1 h. 4. Aplikovat 30 ml/kg balancovaného krystaloidu při hypotenzi nebo laktátu >= 4 mmol/l. 5. Podat vazopresory (noradrenalin) k udržení MAP >= 65 mmHg.",
        "refs": ["ssc2026", "ou2025"]
      },
      {
        "question": "Jaký je vazopresor 1. volby, vazopresor 2. volby a inotropikum v léčbě septického šoku?",
        "answer": "1. volba: noradrenalin (0.05–0.1 mikrog/kg/min). 2. volba: vazopresin ve fixní dávce 0.03–0.04 IU/min (při dávce noradrenalinu > 0.25 mikrog/kg/min). Inotropikum: dobutamin (2.5–20 mikrog/kg/min) při myokardiální dysfunkci a perzistující hypoperfuzi.",
        "refs": ["ssc2026"]
      },
      {
        "question": "Do jakého časového limitu musí být provedena kontrola zdroje (source control) u pacienta se sepsí?",
        "answer": "Co nejdříve od stanovení diagnózy, nejpozději však do 6–12 hodin.",
        "refs": ["ssc2026", "ou2025"]
      }
    ]
  },
  "B12": {
    "title": "Zásady adekvátní antibiotické léčby u těžkých infekcí",
    "reviewed": "2026-11-03",
    "edition": "LF OU 2025 · IDSA AMR 2026 · PK/PD & TDM · SSC 2026",
    "scope": "Dospělí: koncept adekvátní ATB terapie na JIP, hit fast and hit hard, patofyziologické změny PK/PD (Vd, ARC), hydrofilní vs. lipofilní ATB, loading dose, T > MIC, Cmax/MIC, AUC/MIC, TDM vankomycinu a aminoglykosidů, de-eskalace a řízení délky léčby pomocí prokalcitoninu.",
    "opening": "Adekvátní antibiotická léčba na JIP znamená podat účinné léčivo proti pravděpodobnému původci, v čase do 1 hodiny od diagnózy ('hit fast and hit hard'), v dostatečné nasycovací a udržovací dávce zohledňující změněnou farmakokinetiku kriticky nemocného (zvětšený distribuční objem a renální clearance), s časnou de-eskalací za 48–72 hodin a včasným ukončením řízeným prokalcitoninem (5–7 dní). U zkoušky vysvětlím 3 pilíře správné ATB terapie dle LF OU 2025: (1) Čas a spektrum, (2) Dávka a PK/PD indexy (hydrofilní vs. lipofilní), (3) Délka léčby a de-eskalace.",
    "openingRefs": ["ou2025", "amr2026", "atbPK"],
    "sections": [
      {
        "title": "1. Koncept adekvátní ATB léčby a specifika kriticky nemocných (LF OU 2025)",
        "refs": ["ou2025", "amr2026"],
        "paragraphs": [
          "Definice adekvátní ATB terapie: Zvolení antimikrobiálního agens s in vitro účinností proti původci, podaného včas, ve správné dávce zajišťující dosažení baktericidní koncentrace v séru a v místě infekce (optimálně do 24 hodin), se správným intervalem, způsobem aplikace a po dobu nezbytně nutnou s následnou de-eskalací.",
          "Zásadní zkoušková teze LF OU: Běžná lékopisná dávkování antibiotik byla historicky odvozena z farmakokinetických studií na mladých zdravých dobrovolnících! U kriticky nemocných pacientů v sepsi selhává lékopisné dávkování u více než 50 % nemocných! Poddávkování vede k selhání léčby, nárůstu mortality a selekci bakteriální rezistence ('Polovičná bakterie zmutuje vždy, mrtvá nikdy' – doc. Roman Kula, LF OU 2025).",
          "Tři pilíře správné ATB léčby v intenzivní péči: (1) Čas zahájení a antimikrobiální spektrum ('hit fast and hit hard'); (2) Dávka antibiotika a dosažení farmakokinetického/farmakodynamického (PK/PD) cíle; (3) Délka léčby, de-eskalace a její ukončení."
        ]
      },
      {
        "title": "2. Čas zahájení a volba spektra ('Hit Fast and Hit Hard')",
        "refs": ["ou2025", "ssc2026", "cultures"],
        "paragraphs": [
          "Časový faktor: U septického šoku a těžké sepse musí být první dávka i.v. baktericidního antibiotika podána do 1 hodiny od stanovení diagnózy ('hit fast' – koncept therapia sterilisans magna, Paul Ehrlich 1913). Každá hodina prodlení od nástupu hypotenze zvyšuje riziko úmrtí o téměř 8 % (Kumar et al., Crit Care Med 2006).",
          "Mikrobiologické odběry: VŽDY PŘED podáním první dávky ATB odebrat biologický materiál – minimálně 2 sady hemokultur (aerobní + anaerobní lahvička) ze samostatných venepunkcí a cílené vzorky dle suspektního ložiska (sputum/tracheální aspirát/BAL, moč, hnis, likvor, punktáty). Odběry však NESMÍ oddálit podání ATB o více než 45 minut!",
          "Empirické široké spektrum ('hit hard'): Iniciální léčba je téměř vždy empirická. Volba se řídí: (a) Suspektním ložiskem (komunitní vs. nozokomiální pneumonie, peritonitida, urosepse, katétrová infekce); (b) Anamnézou pacienta (předchozí kolonizace multirezistentními kmeny MRSA, ESBL, CRE, VRE v posledních 12 měsících; užívání ATB v posledních 3 měsících; komorbidity a imunosuprese); (c) Místní nemocniční a odděleniovou epidemiologií (antibiogram JIP)."
        ]
      },
      {
        "title": "3. Změny farmakokinetiky v sepsi: Hydrofilní vs. lipofilní ATB a PK/PD indexy",
        "refs": ["ou2025", "atbPK"],
        "paragraphs": [
          "Patofyziologické změny farmakokinetiky v sepsi: (a) Masivní nárůst distribučního objemu (Vd): Zvýšená kapilární propustnost (endoteliální leak) a agresivní tekutinová resuscitace vedou k několikanásobnému zvětšení extracelulárního prostoru (až 2–3x). (b) Změny renální eliminace: V iniciální hyperdynamické fázi sepse se u mladších pacientů často rozvíjí Augmented Renal Clearance (ARC – clearance kreatininu > 130–150 ml/min) vedoucí k extrémně rychlému vylučování ATB a subterapeutickým hladinám; v pozdní fázi nebo při AKI naopak hrozí kumulace.",
          "Rozdělení ATB dle rozpustnosti: (1) Hydrofilní ATB (beta-laktamy – peniciliny, cefalosporiny, karbapenemy; aminoglykosidy; glykopeptidy – vankomycin; kolistin): Malý výchozí Vd, rozpustné ve vodě, dominantně renální eliminace. Jsou extrémně ovlivněny patofyziologií sepse! Zásadní pravidlo LF OU: VŽDY PODÁVÁME PLNÉ NASYCOVACÍ DÁVKY (loading dose, až na 2–3násobku běžné dávky) bez ohledu na funkci ledvin, protože Vd je zvětšený i při anurii! Renální redukce se týká AŽ udržovacích dávek. (2) Lipofilní ATB (fluorochinolony, makrolidy, rifampicin, linezolid, tigecyklin): Velký Vd, intracelulární distribuce, hepatální metabolismus. Patofyziologií sepse nejsou významně ovlivněny; riziko poddávkování hrozí pouze u těžké obezity.",
          "Tři základní PK/PD indexy a způsoby dávkování: (1) Časově závislá (Time-dependent, fT > MIC): Účinek závisí na době, po kterou je volná koncentrace léčiva v séru nad minimální inhibiční koncentrací. Typicky beta-laktamy (peniciliny, cefalosporiny, meropenem). Cíl na JIP: 70–100 % intervalu nad MIC (u těžké sepse 100 % fT > 4x MIC). Aplikační strategie: Po úvodním i.v. bolusu podávat jako prodloužené infuze (3–4 hodiny) nebo kontinuální 24h infuze. (2) Koncentračně závislá (Concentration-dependent, Cmax/MIC >= 8–10): Účinek závisí na dosažení vysokého vrcholového píku k rychlému bakteriálnímu usmrcení a využití postantibiotického efektu (PAE). Typicky aminoglykosidy (amikacin, gentamicin). Aplikační strategie: Vysoká jednorázová denní dávka (once-daily) – amikacin 25–30 mg/kg 1x denně, gentamicin 5–7 mg/kg 1x denně v 30–60min infuzi. Snižuje riziko nefrotoxicity! (3) Závislá na celkové expozici (AUC24/MIC): Účinek závisí na poměru plochy pod křivkou za 24 hodin k MIC. Typicky vankomycin (pro MRSA cílové AUC24/MIC = 400–600 mg.h/l). Aplikační strategie: Nasycovací dávka 25–30 mg/kg i.v. (max 2 g), dále kontinuální infuze s cílovou hladinou 20–25 mg/l nebo intermitentně řízeno dle TDM."
        ]
      },
      {
        "title": "4. Terapeutické monitorování hladin (TDM) a orgánová toxicita",
        "refs": ["atbPK", "vancoAUC", "ou2025"],
        "paragraphs": [
          "Indikace TDM: Povinné u léčiv s úzkým terapeutickým oknem (aminoglykosidy, vankomycin), moderní JIP monitorují i beta-laktamy (meropenem, piperacilin/tazobaktam) u pacientů s ARC nebo CRRT k prevenci poddávkování či neurotoxicity.",
          "TDM aminoglykosidů: Kontrola vrcholové hladiny Cmax (30 minut po skončení infuze: amikacin 60–80 mg/l, gentamicin 16–24 mg/l – ověřuje baktericidní účinnost) a údolní hladiny Cmin (trough před další dávkou: amikacin < 2.5–5 mg/l, gentamicin < 1 mg/l – ověřuje clearance a chrání před akumulační nefrotoxicitou a ototoxicitou).",
          "TDM vankomycinu: Podle mezinárodních doporučení (IDSA/ASHP 2020) je cílem plocha pod křivkou AUC24/MIC 400–600 mg.h/l (počítaná Bayesovským softwarem ze dvou hladin). Starší praxe udržování vysoké údolní hladiny (trough 15–20 mg/l) vedla k vysoké nefrotoxicitě bez zvýšení účinnosti. Při kontinuálním podávání vankomycinu je stabilní cílová hladina v séru 20–25 mg/l.",
          "Nežádoucí účinky a toxicita: Zbytečně protrahovaná nebo nesprávně dávkovaná ATB přinášejí závažná rizika: (a) Nefrotoxicita (aminoglykosidy, glykopeptidy, kolistin); (b) Neurotoxicita a křeče (akumulace beta-laktamů, zejména cefepim, karbapenemy při renálním selhání); (c) Tendinopatie, ruptury šlach a disekce aorty (fluorochinolony); (d) Pseudomembranózní kolitida vyvolaná Clostridioides difficile (riziko u všech širokospektrých ATB); (e) Mitochondriální toxicita a oxidativní stres (baktericidní ATB akcentují buněčnou dysfunkci v sepsi dle LF OU)."
        ]
      },
      {
        "title": "5. Délka léčby, de-eskalace a řízení pomocí biomarkerů (Prokalcitonin)",
        "refs": ["ou2025", "amr2026", "ssc2026"],
        "paragraphs": [
          "De-eskalace ATB léčby: Do 48–72 hodin po zahájení léčby, jakmile jsou k dispozici výsledky mikrobiologické kultivace a citlivosti, MUSÍ být provedeno zhodnocení a de-eskalace: (1) Zúžení spektra dle vykultivovaného patogena; (2) Zrušení kombinované léčby na cílenou monoterapii (např. vysazení amikacinu po obdržení citlivosti na meropenem, vysazení vankomycinu při negativním průkazu MRSA); (3) Ukončení ATB, pokud se infekční etiologie nepotvrdila. De-eskalace prokazatelně snižuje mortalitu a redukuje selekční tlak rezistentních kmenů (obr. 11.4 v LF OU skriptech).",
          "Délka antibiotické léčby: Pravidlo LF OU: Každý další zbytečný den léčby zvyšuje riziko nežádoucích účinků o 5 % na den! Dlouhodobé podávání (14–21 dní) je u nekomplikovaných infekcí překonané. Většina těžkých infekcí na JIP (komunitní a nozokomiální pneumonie, intraabdominální infekce po zvládnutí zdroje, urosepse, katétrová sepse po extrakci katétru) vyžaduje pouze krátký kurz v délce 5–7 dní!",
          "Řízení délky léčby pomocí prokalcitoninu (PCT): PCT má biologický poločas přibližně 24 hodin. Denní pokles sérové koncentrace PCT o více než 30 % signalizuje efektivní kontrolu infekce. Pokles hodnoty PCT o >= 80 % oproti maximu nebo pokles pod absolutní hodnotu 0.5 mikrog/l (při klinickém zlepšení pacienta) je bezpečným kritériem pro UKONČENÍ antibiotické léčby!"
        ]
      }
    ],
    "corrections": [
      "Lékopisné dávkování antibiotik je u kriticky nemocných v sepsi nedostatečné – u více než 50 % pacientů selhává dosažení baktericidní koncentrace. Zvětšený distribuční objem vyžaduje vysoké nasycovací dávky (loading dose).",
      "U pacientů s renálním selháním/oligurických pacientů NESMÍME redukovat úvodní nasycovací dávku! Distribuční objem hydrofilních ATB je v sepsi zvětšený i při anurii. Redukují se až následné udržovací dávky.",
      "Beta-laktamy nelze dávkovat jako jednorázové bolusy 1x denně – jsou to časově závislá ATB (fT > MIC), která vyžadují časté dávkování, prodloužené infuze (3–4 h) nebo kontinuální aplikaci.",
      "Aminoglykosidy se na JIP nepodávají v rozdělených dávkách po 8 hodinách – jsou to koncentračně závislá ATB (Cmax/MIC), kde je zlatým standardem vysoká jednorázová denní dávka (once-daily, např. amikacin 25–30 mg/kg 1x denně), což maximalizuje baktericidní účinek a minimalizuje nefrotoxicitu.",
      "Délka léčby těžkých infekcí nemá trvat mechanicky 14–21 dní. U většiny nekomplikovaných stavů stačí 5–7 dní a ukončení má být řízeno poklesem prokalcitoninu (PCT pokles o > 80 % nebo pod 0.5 mikrog/l)."
    ],
    "checks": [
      {
        "question": "Proč v sepsi selhává běžné lékopisné dávkování hydrofilních antibiotik a jak se tomuto selhání předchází?",
        "answer": "Kapilární únik (leak) a volumoterapie vedou k 2–3násobnému nárůstu distribučního objemu (Vd) a v časné fázi k Augmented Renal Clearance (ARC). Předchází se mu podáním plné nasycovací dávky (loading dose, až 2–3násobek běžné dávky) bez ohledu na renální funkce.",
        "refs": ["ou2025", "atbPK"]
      },
      {
        "question": "Jaké jsou 3 základní PK/PD indexy antibiotik a pro jaké třídy platí?",
        "answer": "1. Časově závislá (fT > MIC): beta-laktamy (vyžadují prodloužené/kontinuální infuze). 2. Koncentračně závislá (Cmax/MIC >= 8–10): aminoglykosidy (vyžadují vysokou dávku once-daily). 3. Závislá na celkové expozici (AUC24/MIC = 400–600): vankomycin (vyžaduje loading dose a řízení dle TDM).",
        "refs": ["atbPK", "ou2025"]
      },
      {
        "question": "Kdy a jak se provádí de-eskalace antibiotické léčby na JIP?",
        "answer": "Za 48–72 hodin po zahájení léčby po obdržení výsledků kultivace a citlivosti: zúžení spektra, přechod z kombinace na monoterapii nebo úplné vysazení ATB při nepotvrzení infekce.",
        "refs": ["ou2025", "amr2026"]
      },
      {
        "question": "Jaká je obvyklá délka antibiotické kúry u nekomplikované sepse a jaká jsou PCT kritéria pro ukončení?",
        "answer": "Standardně 5–7 dní. Kritériem pro bezpečné ukončení je pokles PCT o >= 80 % z maxima nebo pokles pod 0.5 mikrog/l při klinickém ústupu příznaků.",
        "refs": ["ou2025", "ssc2026"]
      },
      {
        "question": "Jaká je správná úvodní dávka a režim podání amikacinu u pacienta v septickém šoku?",
        "answer": "Vysoká jednorázová denní dávka (once-daily) 25–30 mg/kg i.v. v 30–60minutové infuzi, následovaná TDM kontrolou vrcholové hladiny Cmax (> 60–80 mg/l) a údolní hladiny Cmin (< 2.5–5 mg/l).",
        "refs": ["ou2025", "atbPK"]
      }
    ]
  },
  "B17": {
    "title": "Acute respiratory distress syndrome (ARDS) – definice, etiologie, patofyziologie, principy léčby",
    "reviewed": "2026-11-03",
    "edition": "Berlínská definice 2012 · ESICM/ATS 2024 · LF OU 2025",
    "scope": "Dospělí: Berlínská definice, plicní vs. mimoplicní etiologie, patofyziologické fáze, koncept Baby Lung, protektivní ventilace (nízký Vt, Pplat, driving pressure), pronační poloha, PEEP tabulka, NMBA, restrikce tekutin a indikace VV-ECMO (EOLIA).",
    "opening": "Acute Respiratory Distress Syndrome (ARDS) je život ohrožující akutní difuzní zánětlivé nekardiogenní poškození plic charakterizované zvýšenou permeabilitou alveolokapilární membrány, nekardiogenním plicním edémem a těžkou hypoxémií refrakterní na samotné navýšení FiO2 (LF OU 2025). U zkoušky začínám 4 kritérii Berlínské definice (čas do 1 týdne, bilaterální infiltráty, vyloučení kardiálního edému, Horowitzův index PaO2/FiO2), rozdělím plicní a mimoplicní příčiny, popíši koncept 'Baby Lung' a patofyziologické fáze (exsudativní, proliferativní, fibrotická), definuji zlatý standard protektivní UPV (Vt 4–6 ml/kg PBW, Pplat <= 30 cmH2O, driving pressure < 14 cmH2O), indikaci k pronační poloze (PaO2/FiO2 < 150 mmHg na >= 16 h/den) a indikační kritéria pro VV-ECMO dle studie EOLIA.",
    "openingRefs": ["ou2025", "ardsGlobal", "ardsESICM"],
    "sections": [
      {
        "title": "1. Definice a diagnostická kritéria: Berlínská definice ARDS (2012)",
        "refs": ["ou2025", "ardsGlobal"],
        "paragraphs": [
          "Definice (Jan Máca, LF OU 2025): ARDS je akutní zánětlivé poškození plicního parenchymu multifaktoriální etiologie projevující se difuzním narušením bariérové funkce alveolokapilární membrány, masivním exsudativním plicním edémem a těžkou hypoxémií způsobenou intrapulmonálním pravolevým zkratem (shuntem).",
          "Berlínská definice ARDS (2012, LF OU Tabulka 5.14) – vyžaduje současné splnění 4 kritérií:",
          "1. Časové okno (Timing): Vznik nebo zhoršení respiračních symptomů do 1 týdne od známého klinického inzultu (např. aspirace, sepse, trauma).",
          "2. Zobrazovací metody (RTG / CT hrudníku): Bilaterální opacity (infiltráty) na RTG nebo CT hrudníku, které nejsou plně vysvětlitelné fluidothoraxem, lobární atelektázou či uzly (u těžké formy postižení alespoň 3 kvadrantů).",
          "3. Původ plicního edému: Respirační selhání nesmí být plně vysvětlitelné srdečním selháním nebo tekutinovým přetížením (hypervolemií). Při pochybnostech je nutné vyloučit hydrostatický kardiogenní edém echokardiografií nebo změřením tlaku v zaklínění plicnice (PCWP <= 18 mmHg).",
          "4. Závažnost oxygenační poruchy – Horowitzův index (PaO2/FiO2 v mmHg při PEEP >= 5 cmH2O):",
          "(a) Lehká forma (Mild): PaO2/FiO2 = 201–300 mmHg (26.8–40.0 kPa) při PEEP >= 5 cmH2O;",
          "(b) Středně těžká forma (Moderate): PaO2/FiO2 = 101–200 mmHg (13.4–26.7 kPa) při PEEP >= 5 cmH2O;",
          "(c) Těžká forma (Severe): PaO2/FiO2 <= 100 mmHg (<= 13.3 kPa) při PEEP >= 10 cmH2O (dle LF OU 2025; v původní Berlínské definici PEEP >= 5 cmH2O)."
        ]
      },
      {
        "title": "2. Etiologie: Plicní (přímé) vs. Mimoplicní (nepřímé) formy ARDS",
        "refs": ["ou2025", "ardsESICM"],
        "paragraphs": [
          "Rozdělení dle cesty vzniku plicního poškození (LF OU Tabulka 5.13):",
          "1. Plicní (přímé / direktní) formy ARDS: Inzult přichází z lumen dýchacích cest přímo do alveolu a postihuje primárně alveolární epitel (pneumocyty I. a II. typu): (a) Závažná komunitní nebo nozokomiální pneumonie (bakteriální, virová – Influenza, COVID-19, mykotická – nejčastější příčina přímého ARDS, > 50 % případů); (b) Aspirace žaludečního obsahu (Mendelsonův syndrom – chemická pneumonitida kyselým žaludečním obsahem); (c) Plicní kontuze při tupém traumatu hrudníku; (d) Tonutí (sladká i slaná voda); (e) Inhalační trauma (horký kouř, toxické plyny – chlór, fosgen).",
          "2. Mimoplicní (nepřímé / indirektní) formy ARDS: Inzult je přiveden krevním řečištěm a postihuje primárně endotel plicních kapilár v rámci systémového zánětu: (a) Sepse a septický šok mimoplicního původu (peritonitida, urosepse, nekrotizující fasciitida – celkově nejčastější příčina ARDS vůbec!); (b) Těžké polytrauma a hemoragický šok (ischemie-reperfuzní poškození); (c) Transfuzí způsobené akutní plicní poškození (TRALI – imunitní reakce protilátek dárce proti neutrofilům příjemce); (d) Těžká akutní pankreatitida (cirkulující trypsin a lipáza poškozují plicní kapiláry); (e) Popáleninové trauma; (f) Pooperační stav po kardiopulmonálním bypassu (mimotělní oběh spouští SIRS)."
        ]
      },
      {
        "title": "3. Patofyziologie, koncept 'Baby Lung' a morfologické fáze",
        "refs": ["ou2025", "ardsGlobal"],
        "paragraphs": [
          "Koncept 'Baby Lung' (Gattinoni): Plicní poškození u ARDS není homogenní! V závislých (dorzálních) partiích plic dochází vlivem hydrostatického tlaku, váhy edematózní plíce a mediastina ke kolapsu alveolů (kompresivní atelektázy). Provzdušněná zůstává pouze malá ventrální zóna, jejíž objem odpovídá plicím zdravého 5–6letého dítěte (cca 300–500 ml funkčního parenchymu). Ventilace dospělého pacienta standardními objemy (10–12 ml/kg) vede k masivnímu mechanickému přepětí (overdistension) této zdravé zóny a těžkému poškození plic!",
          "Tři histopatologické fáze ARDS (LF OU 2025):",
          "1. Exsudativní fáze (dny 1–7 od inzultu): Masivní aktivace neutrofilů a makrofágů uvolňuje proteázy a ROS -> nekróza pneumocytů I. typu a kapilárního endotelu -> masivní únik tekutiny bohaté na bílkoviny a fibrin do alveolů (nekardiogenní edém). Dochází k inaktivaci a rozpadu surfaktantu, vzniku mikroatelektáz a tvorbě hyalinních blán (proteinové nálety vystýlající alveoly). Vzniká masivní intrapulmonální pravolevý zkrat (V/Q = 0) způsobující refrakterní hypoxémii;",
          "2. Proliferativní fáze (dny 7–14): Proliferace pneumocytů II. typu s pokusem o obnovu epitelu a tvorbu surfaktantu, organizace fibrinového exsudátu, proliferace myofibroblastů v intersticiu;",
          "3. Fibrotická fáze (po 14 dnech): U části pacientů přechází zánět do ireverzibilní plicní fibrózy s remodelací cévního řečiště, obliterací kapilár, těžkou plicní hypertenzí (riziko akutního selhání pravé komory – cor pulmonale) a trvalou ztrátou poddajnosti plic."
        ]
      },
      {
        "title": "4. Zlatý standard léčby: Protektivní umělá plicní ventilace a pronační poloha",
        "refs": ["ou2025", "ardsESICM", "ventSafe"],
        "paragraphs": [
          "Základní cíl: Minimalizovat poškození plic ventilátorem (VILI – barotrauma, volutrauma, atelektrauma, biotrauma). Neexistuje kauzální farmakoterapie ARDS, přežití zlepšuje výhradně protektivní nastavení UPV a pronační poloha!",
          "Parametry protektivní mechanické ventilace (LF OU 2025, ARMA protocol):",
          "1. Nízký dechový objem (low tidal volume): Vt = 4–6 ml/kg PREDIKOVANÉ tělesné hmotnosti (PBW – Predicted Body Weight počítaná z výšky pacienta, NIKOLI ze skutečné hmotnosti! Vzorec PBW: Muži = 50 + 0.91 x (výška v cm - 152.4); Ženy = 45.5 + 0.91 x (výška v cm - 152.4)). U obézního pacienta se skutečnou váhou 120 kg a výškou 175 cm je PBW cca 70 kg -> cílový Vt je pouze 420 ml!",
          "2. Limitace tlaku v inspirační pauze (Plateau pressure, Pplat): Pplat <= 30 cmH2O (měřeno při 0.5s inspirační pauze při nulovém průtoku). Překročení 30 cmH2O způsobuje volutrauma a barotrauma alveolů;",
          "3. Limitace hnacího tlaku (Driving pressure, Delta P): Delta P = Pplat - PEEP. Cílem je Delta P < 14 cmH2O! Driving pressure je nejsilnějším nezávislým prediktorem přežití u ARDS (Amato et al., NEJM);",
          "4. Nastavení PEEP: Vyšší PEEP (10–16 cmH2O u středně těžkého/těžkého ARDS) dle PEEP/FiO2 tabulek ARDSNet nebo titrací nejlepší compliance k udržení provzdušněných alveolů a prevenci cyklického kolapsu (open lung concept);",
          "5. Permisivní hyperkapnie: Akceptujeme vzestup PaCO2 (klidně 6.5–9.0 kPa) za předpokladu pH >= 7.20 k ochraně plic před agresivní ventilací.",
          "Pronační poloha (Prone Positioning – obrat na břicho, PROSEVA trial):",
          "Indikace: Středně těžký a těžký ARDS s PaO2/FiO2 < 150 mmHg (< 20 kPa) při PEEP >= 10 cmH2O a FiO2 >= 0.6. Doba trvání: Minimálně 16 PO SOBĚ JDOUCÍCH HODIN DENNĚ (obvykle 16–20 hodin na břiše, 4–8 hodin na zádech k toaletě a ošetření). Mechanismy účinku (LF OU obr. 5.5): (a) Homogenizace transpulmonálního tlaku – rovnoměrnější rozepětí plic; (b) Provzdušnění dependentních dorzálních zón zbavených tlaku srdce a mediastina; (c) Dramatické zlepšení V/Q poměru – perfuze plic zůstává dominantně dorzální, v pronaci sem přivádíme ventilaci -> zásadní pokles pravolevého zkratu a vzestup PaO2; (d) Zlepšení drenáže sekretu z dýchacích cest. Pronace prokazatelně snižuje 28denní i 90denní mortalitu ARDS o více než 50 %!"
        ]
      },
      {
        "title": "5. Záchranné a podpůrné intervence: NMBA, restrikce tekutin a VV-ECMO (EOLIA)",
        "refs": ["ou2025", "ardsNMBA", "ardsGlobal"],
        "paragraphs": [
          "Neuromuskulární blokáda (NMBA): Kontinuální infuze cisatrakuria po dobu prvních 24–48 hodin u těžkého ARDS s desynchronizací ventilátoru. Odstraňuje spontánní dechové úsilí pacienta generující negativní pleurální tlak, který prohlubuje transpulmonální přepětí a poškození plic (tzv. P-SILI: Patient-Self-Inflicted Lung Injury).",
          "Konzervativní tekutinová strategie (FACTT trial): Udržování nulové až mírně negativní denní tekutinové bilance po stabilizaci šoku. Snižuje hydrostatický tlak v plicních kapilárách, urychluje resorpci edému a zkracuje dobu závislosti na ventilátoru bez zvýšení výskytu selhání ledvin.",
          "Inhalační vazodilatancia: Inhalační oxid dusnatý (iNO, 5–20 ppm) nebo inhalační prostacyklin selektivně dilatují cévy pouze v dobře ventilovaných oblastech plic -> přechodně zlepšují oxygenaci jako most k dalším intervencím (nemají však vliv na dlouhodobé přežití).",
          "Kortikosteroidy: Metylprednisolon 1–2 mg/kg/den v časné fázi těžkého ARDS (nebo perzistujícího ARDS po 7–14 dnech) tlumí fibroproliferativní zánět; vysoké pulzní dávky jsou škodlivé.",
          "Mimotělní membránová oxygenace (Venovenózní ECMO – VV-ECMO):",
          "Indikační kritéria pro VV-ECMO u těžkého ARDS dle studie EOLIA (Combes et al., NEJM 2018):",
          "1. PaO2/FiO2 < 80 mmHg (> 10.7 kPa) trvající déle než 6 hodin navzdory optimalizované protektivní UPV, PEEP a pronační poloze, NEBO",
          "2. PaO2/FiO2 < 50 mmHg (> 6.7 kPa) trvající déle než 3 hodiny, NEBO",
          "3. Těžká respirační acidóza s pH < 7.15 při PaCO2 > 8.0 kPa (60 mmHg) déle než 6 hodin v důsledku nutnosti snížit dechový objem k udržení Pplat <= 30 cmH2O.",
          "Princip VV-ECMO: Krev je odebírána ze v. femoralis (kanyla 23–27 Fr), v membránovém oxygenátoru je sycena O2 a zbavena CO2 a vracena přes v. jugularis interna do pravé síně. Umožňuje přechod na tzv. ultraprotektivní ventilaci (lung rest: Vt 2–3 ml/kg PBW, dechová frekvence 4–10/min, PEEP 10–14 cmH2O, Pplat < 24 cmH2O), která dává těžce poškozeným plicím čas na regeneraci bez agresivního mechanického stresu."
        ]
      }
    ],
    "corrections": [
      "ARDS není onemocněním celých plic rovnoměrně. Koncept 'Baby Lung' ukazuje, že ventilovatelná část plic je zmenšena na velikost plic malého dítěte. Dechový objem se proto musí striktně odvozovat z predikované tělesné hmotnosti (PBW), nikoli ze skutečné váhy!",
      "Vysoké dechové objemy (8–12 ml/kg) a špičkové tlaky Pplat > 30 cmH2O dramaticky zvyšují mortalitu ARDS způsobením volotraumatu a barotraumatu.",
      "Pronační poloha není jen nouzovým záchranným manévrem na 1–2 hodiny – aby měla prokazatelný vliv na přežití (PROSEVA), musí být aplikována minimálně 16 po sobě jdoucích hodin denně u pacientů s PaO2/FiO2 < 150 mmHg.",
      "Plicní edém u ARDS je nekardiogenní (zvýšená permeabilita membrány). Tlak v zaklínění plicnice (PCWP) musí být <= 18 mmHg nebo musí být vyloučeno selhání levé komory.",
      "Inhalační oxid dusnatý (iNO) zlepšuje oxygenaci, ale nesnižuje mortalitu ARDS. Jedinými metodami s prokázaným poklesem mortality jsou protektivní UPV (nízký Vt, driving pressure) a pronační poloha."
    ],
    "checks": [
      {
        "question": "Jaká jsou 4 diagnostická kritéria Berlínské definice ARDS?",
        "answer": "1. Čas: vznik do 1 týdne od známého inzultu. 2. RTG/CT: bilaterální infiltráty nevysvětlitelné výpotkem či atelektázou. 3. Původ edému: vyloučení kardiální příčiny a hypervolemie (PCWP <= 18 mmHg). 4. Oxygenace: PaO2/FiO2 <= 300 mmHg při PEEP >= 5 cmH2O.",
        "refs": ["ou2025", "ardsGlobal"]
      },
      {
        "question": "Jaké jsou 3 kategorie tíže ARDS dle Horowitzova indexu PaO2/FiO2 při PEEP >= 5 cmH2O?",
        "answer": "Lehká (Mild): PaO2/FiO2 201–300 mmHg. Středně těžká (Moderate): PaO2/FiO2 101–200 mmHg. Těžká (Severe): PaO2/FiO2 <= 100 mmHg.",
        "refs": ["ardsGlobal", "ou2025"]
      },
      {
        "question": "Jaké jsou základní ventilační parametry protektivní mechanické ventilace u ARDS?",
        "answer": "Nízký dechový objem Vt 4–6 ml/kg predikované hmotnosti PBW, tlak v inspirační pauze Pplat <= 30 cmH2O, hnací tlak (driving pressure) Delta P < 14 cmH2O a adekvátní PEEP dle tabulek.",
        "refs": ["ou2025", "ventSafe"]
      },
      {
        "question": "Kdy je u ARDS indikována pronační poloha a jak dlouho musí denně trvat?",
        "answer": "U středně těžkého a těžkého ARDS s PaO2/FiO2 < 150 mmHg při PEEP >= 10 cmH2O a FiO2 >= 0.6. Musí trvat minimálně 16 po sobě jdoucích hodin denně.",
        "refs": ["ou2025", "ardsESICM"]
      },
      {
        "question": "Jaká jsou hlavní indikační kritéria pro VV-ECMO u ARDS dle studie EOLIA?",
        "answer": "PaO2/FiO2 < 80 mmHg déle než 6 h, nebo PaO2/FiO2 < 50 mmHg déle než 3 h, nebo těžká acidóza s pH < 7.15 při PaCO2 > 8 kPa déle než 6 h navzdory optimalizované ventilaci a pronaci.",
        "refs": ["ardsGlobal", "ou2025"]
      }
    ]
  },
  "B18": {
    "title": "Umělá plicní ventilace – základní principy, indikace, nežádoucí účinky, základní nastavení ventilátoru",
    "reviewed": "2026-11-03",
    "edition": "LF OU 2025 · AARC 2024 · ESICM 2024",
    "scope": "Dospělí: indikace k intubaci a UPV, fáze dechového cyklu, řízené vs. podpůrné režimy (VCV, PCV, PSV), výchozí parametry (Vt, RR, PEEP, FiO2, I:E), plicní mechanika (Crs, Raw, PIP, Pplat, Delta P), VILI (barotrauma, volutrauma, atelektrauma, biotrauma), hemodynamický dopad pozitivního tlaku, weaning a test spontánního dýchání (SBT, RSBI).",
    "opening": "Umělá plicní ventilace (UPV) je přístrojová metoda náhrady nebo podpory spontánního dýchání využívající intermitentní aplikaci pozitivního přetlaku (PPV – Positive Pressure Ventilation) do dýchacích cest (LF OU 2025). U zkoušky začínám indikacemi k zajištění dýchacích cest a UPV (zástava dechu, hypoxémie PaO2/FiO2 < 200, respirační acidóza pH < 7.25, vyčerpání, GCS <= 8, šok), popíši fáze dechového cyklu a rozdíl mezi řízenými režimy (VCV, PCV) a tlakovou podporou (PSV), uvedu výchozí protektivní nastavení (Vt 6–8 ml/kg PBW, frekvence 12–16/min, PEEP 5–8 cmH2O, FiO2 s rychlou de-eskalací pod 0.6), vysvětlím měření poddajnosti Crs, rezistence Raw, limitaci Pplat <= 30 cmH2O a driving pressure < 14 cmH2O, rozeberu mechanismy poškození plic ventilátorem (VILI) a hemodynamický pokles preloadu s hypotenzí, a zakončím protokolem odpojování (weaning, SBT na 30–120 min, RSBI < 105).",
    "openingRefs": ["ou2025", "ventSafe", "ventPrimer"],
    "sections": [
      {
        "title": "1. Principy přetlakové ventilace a základní indikace k UPV (LF OU 2025)",
        "refs": ["ou2025", "ventPrimer"],
        "paragraphs": [
          "Základní fyzikální princip (Jan Máca, LF OU 2025): Za fyziologických okolností dýchá člověk podtlakem – kontrakce bránice a mezižeberních svalů generuje negativní nitrohrudní tlak, který nasává vzduch do plic a současně podporuje žilní návrat krve k srdci. Umělá plicní ventilace s pozitivním přetlakem (PPV – Positive Pressure Ventilation) funguje přesně opačně: ventilátor generuje pozitivní tlakový gradient mezi vstupem do DC a alveoly, čímž vhání plyn do plic a zvyšuje nitrohrudní tlak (ITP). Plyn je do plic přiváděn invazivně přes orotracheální kanylu (OTK), nazotracheální kanylu nebo tracheostomii (TCHS).",
          "Základní indikace k zahájení UPV (LF OU Tabulka 5.10 a kap. 13):",
          "1. Zástava dechu / apnoe (kardiopulmonální resuscitace, poranění mozkového kmene, spinální trauma C1–C4, intoxikace sedativy/opioidy);",
          "2. Těžká arteriální hypoxémie refrakterní na kyslíkovou terapii a HFNO (PaO2 < 8.0 kPa / 60 mmHg, PaO2/FiO2 < 200 mmHg);",
          "3. Těžká ventilační respirační acidóza a hyperkapnie (pH < 7.25, PaCO2 > 8.0 kPa / 60 mmHg);",
          "4. Enormní dechová práce (work of breathing) a vyčerpání dechových svalů (tachypnoe > 35 dechů/min, paradoxní torakoabdominální dýchání);",
          "5. Ochrana dýchacích cest při závažné poruše vědomí (GCS <= 8, bezvědomí, kóma, křečový status – hrozí masivní aspirace žaludečního obsahu);",
          "6. Závažná oběhová nestabilita a šok (UPV sníží spotřebu kyslíku vyčerpaným dechovým svalstvem, které v šoku spotřebovává až 25–40 % celkového minutového srdečního výdeje!);",
          "7. Operační výkony vyžadující hlubokou celkovou anestezii s myorelaxací."
        ]
      },
      {
        "title": "2. Mechanika dýchacího systému na UPV: Tlaky, poddajnost a rezistence",
        "refs": ["ou2025", "ventSafe"],
        "paragraphs": [
          "Fáze dechového cyklu při PPV (LF OU obr. 13.1): (1) Spuštění nádechu (Trigger) – časový trigger ventilátoru u řízené ventilace nebo tlakový/průtokový trigger iniciovaný pacientem u asistované ventilace; (2) Limitace nádechu – dosažení nastaveného objemu (objemová ventilace) nebo tlaku (tlaková ventilace); (3) Cyklování (přepnutí z nádechu do výdechu) – přepnutí časem, objemem nebo poklesem inspiračního průtoku; (4) Inspirační pauza (end-inspiratory hold); (5) Pasivní exspirium (výdech díky elastické retrakci plic a hrudníku); (6) Exspirační pauza (end-expiratory hold k měření auto-PEEP).",
          "Tlaky v dýchacích cestách (Airway Pressures):",
          "1. Špičkový inspirační tlak (Peak Inspiratory Pressure, PIP): Maximální tlak dosažený v dýchacím okruhu na konci nádechu. Reprezentuje tlak nutný k překonání rezistence dýchacích cest (odpor kanyly a bronchů) A SOUČASNĚ elasticity plic a hrudníku;",
          "2. Tlak v inspirační pauze (Plateau pressure, Pplat): Tlak měřený při zastavení průtoku plynů na konci nádechu (end-inspiratory pause, 0.3–0.5 s). Při nulovém průtoku zaniká odporový tlak a Pplat přesně reprezentuje statický tlak v alveolech a elastické vlastnosti parenchymu. ZKOUŠKOVÝ BEZPEČNOSTNÍ LIMIT LF OU: Pplat MUSÍ BÝT TRVALE <= 30 cmH2O k prevenci mechanického roztržení alveolů!;",
          "3. Pozitivní tlak na konci výdechu (PEEP): Tlak udržovaný v alveolech na konci exspiria bránící jejich kolapsu;",
          "4. Hnací tlak (Driving pressure, Delta P): Delta P = Pplat - PEEP. Cílem je Delta P < 14 cmH2O! Vyšší hodnoty značí neprotektivní přetěžování plicní tkáně.",
          "Mechanické vlastnosti respiračního systému (LF OU kap. 13):",
          "(a) Statická poddajnost respiračního systému (Compliance, Crs): Crs = Vt / (Pplat - PEEP). Udává, jak snadno lze plíce rozepnout. Normální hodnota na UPV u intubovaného dospělého je 50–80 ml/cmH2O. Pokles pod 30–40 ml/cmH2O značí těžkou 'tuhost' plic (ARDS, plicní edém, obezita, tenzní pneumotorax, elevace nitrobřišního tlaku);",
          "(b) Rezistence dýchacích cest (Resistance, Raw): Raw = (PIP - Pplat) / inspirační průtok. Normální hodnota na UPV je < 6–8 cmH2O/(l/s). Nárůst tlakového rozdílu (PIP - Pplat) svědčí pro obstrukci v dýchacích cestách (bronchospasmus, sekret v kanyle, zalomená rourka, skousnutí kanyly)."
        ]
      },
      {
        "title": "3. Ventilační režimy a výchozí protektivní nastavení ventilátoru",
        "refs": ["ou2025", "ventSafe"],
        "paragraphs": [
          "Základní typy ventilačních režimů:",
          "1. Řízená ventilace (Mandatorní – CMV): Ventilátor provádí veškerou ventilaci bez ohledu na dechové úsilí pacienta (vyžaduje analgosedaci +/- myorelaxaci v akutní fázi):",
          "(a) Objemově řízená ventilace (VCV – Volume Control Ventilation): Nastavuje se fixní dechový objem (Vt) a frekvence (RR). Inspirační tlaky (PIP, Pplat) jsou závislé na poddajnosti plic. Riziko: vysoké tlaky v alveolech při poklesu compliance;",
          "(b) Tlakově řízená ventilace (PCV – Pressure Control Ventilation): Nastavuje se fixní inspirační tlak (Pinsp / PC) a doba nádechu (Ti). Dechový objem kolísá dle mechaniky plic. Výhoda: limitace maximálního tlaku v alveolech a decelerující průtoková křivka zlepšující distribuci plynů;",
          "2. Podpůrná / asistovaná ventilace: Pacient sám spouští každý dech (trigger) a určuje dechovou frekvenci, ventilátor pomáhá překonávat odpor dýchacích cest. Základní režim: Tlaková podpora (PSV – Pressure Support Ventilation). Používá se pro odpojování (weaning) a pacienty se zachovanou dechovou aktivitou.",
          "Standardní výchozí nastavení ventilátoru u dospělého pacienta (LF OU Tabulka 13.1):",
          "1. Dechový objem (Vt): 6–8 ml/kg PREDIKOVANÉ tělesné hmotnosti (PBW), u ARDS striktně 4–6 ml/kg PBW;",
          "2. Dechová frekvence (RR): 12–16 dechů/min (u obstrukčních chorob redukovat na 10–12/min k prodloužení výdechu);",
          "3. Pozitivní přetlak na konci výdechu (PEEP): 5–8 cmH2O k udržení funkční reziduální kapacity (FRC) a prevenci atelektáz (u ARDS vyšší: 10–16 cmH2O dle tíže);",
          "4. Inspirační frakce kyslíku (FiO2): Iniciálně 0.5–1.0, co nejrychleji redukovat pod 0.6 k prevenci hyperoxického poškození plic (cílová SpO2 92–96 %, u CHOPN 88–92 %);",
          "5. Poměr nádechu k výdechu (I:E): 1:2 (fyziologický poměr; inspirační čas Ti 1.0–1.2 s, exspirační čas Te 2.0–2.4 s); u obstrukce prodloužit na 1:3 až 1:4;",
          "6. Inspirační trigger: Průtokový trigger (flow-by) nastavený na 1.5–2.0 l/min (komfortnější a méně namáhavý než tlakový trigger)."
        ]
      },
      {
        "title": "4. Komplikace a nežádoucí účinky UPV: VILI a kardiovaskulární dopad",
        "refs": ["ou2025", "ventSafe"],
        "paragraphs": [
          "Ventilátorem indukované plicní poškození (VILI – Ventilator-Induced Lung Injury, LF OU Tabulka 13.4):",
          "1. Velké barotrauma (major barotrauma): Hrubé protržení alveolární stěny extrémním tlakem -> tenzní pneumotorax, pneumomediastinum, podkožní emfyzém;",
          "2. Barotrauma (stress): Mikroskopické cyklické přetěžování plicní tkáně vysokým alveolárním tlakem (Pplat > 30 cmH2O);",
          "3. Volutrauma (strain): Nadměrné cyklické přepětí a distenze alveolů nepřiměřeně velkým dechovým objemem (Vt > 8 ml/kg);",
          "4. Atelektrauma: Poškození střižnými silami (shear stress) vznikajícími na rozhraní vzdušné a kolabované plicní tkáně při opakovaném cyklickém otevírání a kolapsu nestabilních alveolů (RACE – Repetitive Alveolar Collapse and Expansion) při nulovém či nízkém PEEP;",
          "5. Biotrauma: Konverze mechanického poškození alveolů na zánětlivý biologický signál – masivní uvolnění cytokinů (IL-6, TNF-alfa) do systémového oběhu s rozvojem endoteliální dysfunkce a selhání vzdálených orgánů (MODS);",
          "6. Hyperoxické poškození (HALI – Hyperoxic Acute Lung Injury): Přímá cytotoxicita vysoké frakce O2 (FiO2 > 0.6) tvorbou reaktivních forem kyslíku (ROS), destrukce surfaktantu a resorpční atelektázy.",
          "Kardiovaskulární nežádoucí účinky přetlakové ventilace (LF OU kap. 13):",
          "Pozitivní nitrohrudní tlak stlačuje vena cava inferior a superior -> ZÁVAŽNÝ POKLES ŽILNÍHO NÁVRATU (preloadu pravé komory) -> pokles plnění levé komory -> pokles srdečního výdeje a těžká HYPOTENZE (nejčastější bezprostřední komplikace po intubaci, zejména u hypovolemických pacientů a při podání sedativ!). Současně pozitivní tlak zvyšuje plicní cévní rezistenci (PVR) rozepnutím alveolů -> nárůst afterloadu pravé komory s rizikem dilatace a akutního selhání PK. (Pozn.: U selhávající levé komory pozitivní nitrohrudní tlak naopak snižuje afterload LK snížením transmurálního tlaku stěny LK!).",
          "Mimoplicní komplikace: Pokles perfuze splanchniku a jater, retence vody a sodíku z poklesu perfuze ledvin a aktivace RAAS, zvýšení nitrolebního tlaku (ICP) při zhoršení žilního odtoku z hlavy a svalová atrofie bránice indukovaná ventilátorem (VIDD – Ventilator-Induced Diaphragmatic Dysfunction po > 48 h plně řízené ventilace a myorelaxace)."
        ]
      },
      {
        "title": "5. Odpojování od ventilátoru (Weaning) a extubace",
        "refs": ["ou2025", "ventSBT"],
        "paragraphs": [
          "Odpojování od UPV (Weaning): Proces postupného snižování přístrojové dechové podpory a převodu pacienta na spontánní ventilaci, ukončený extubací nebo dekanilací. Weaning představuje až 40–50 % celkové doby strávené na UPV!",
          "Kritéria pro zahájení weaningu (LF OU Tabulka 13.2): (1) Ústup nebo vyřešení vyvolávající příčiny respiračního selhání (regrese infiltrátu na RTG); (2) Adekvátní oxygenace: PaO2/FiO2 > 200 mmHg při PEEP <= 5–8 cmH2O a FiO2 <= 0.4–0.5; (3) Stabilní hemodynamika bez vysokých dávek vazopresorů (noradrenalin <= 0.05–0.1 mikrog/kg/min); (4) Neurologický stav: pacient při vědomí, kooperující (GCS > 8, RASS -1 až 0); (5) Afebrilní stav (teplota < 38.0 °C), stabilní vnitřní prostředí, kompenzovaná acidobáze a hemoglobin > 70–80 g/l.",
          "Test spontánního dýchání (Spontaneous Breathing Test – SBT, LF OU Tabulka 13.3):",
          "Nejvýznamnější diagnostický test připravenosti k extubaci. Provádí se odpojením pacienta na T-spojku (T-piece) s přívodem zvlhčeného O2 NEBO ponecháním na ventilátoru s minimální tlakovou podporou (PS 5–7 cmH2O k překonání odporu kanyly, PEEP 0–5 cmH2O) po dobu 30 až 120 MINUT.",
          "Hodnocení úspěšnosti SBT: (a) Dechová frekvence 12–30 dechů/min (žádná tachypnoe > 35/min ani bradypnoe); (b) Tepová frekvence < 120–140/min (změna o < 20 %); (c) Stabilní krevní tlak (TKs 90–180 mmHg); (d) SpO2 > 90 % bez nárůstu PaCO2 a bez rozvoje respirační acidózy (pH >= 7.32); (e) Absence agitovanosti, profúzního pocení a zapojení pomocných svalů.",
          "Tobinův index (RSBI – Rapid Shallow Breathing Index): RSBI = dechová frekvence (v min^-1) / dechový objem (v litrech). Hodnota RSBI < 105 predikuje úspěšné odpojení; hodnota > 105 značí rychlé mělké dýchání a selhání testu!",
          "Předpoklady pro bezpečnou extubaci: Úspěšně zvládnutý SBT + zachovaný polykací a kašlací reflex + schopnost udržet volné dýchací cesty bez nutnosti častého odsávání (zvládnutí sekrece) + pozitivní Cuff-leak test (při vypuštění manžety kanyly uniká vzduch kolem kanyly, což prokazuje absenci laryngeálního edému a stridoru)."
        ]
      }
    ],
    "corrections": [
      "Přetlaková ventilace (PPV) působí na nitrohrudní tlak a oběh opačně než fyziologické dýchání. Zvýšený nitrohrudní tlak snižuje žilní návrat a způsobuje po intubaci těžkou hypotenzi.",
      "Bezpečnostní limit tlaku v alveolech je dán tlakem v inspirační pauze (Pplat <= 30 cmH2O), nikoli špičkovým tlakem PIP. PIP odráží odpor dýchacích cest (rezistenci kanyly), zatímco Pplat odráží alveolární distenzi.",
      "Dechový objem se musí počítat z predikované tělesné hmotnosti (PBW) odvozené z výšky a pohlaví pacienta, nikoli ze skutečné váhy obézního pacienta.",
      "VILI nezahrnuje pouze barotrauma (tlak), ale především volutrauma (přepětí objemem), atelektrauma (střižné síly cyklického kolapsu) a biotraumu (vyplavení cytokinů z plic vedoucí k sepsi a MODS).",
      "Odpojování od UPV (weaning) nesmí být odkládáno – má být zahájeno ihned po stabilizaci příčiny pomocí každodenních sedativních prázdnin a testu spontánního dýchání (SBT)."
    ],
    "checks": [
      {
        "question": "Jaký je rozdíl mezi špičkovým tlakem (PIP) a tlakem v inspirační pauze (Pplat) a jaký je bezpečný limit Pplat?",
        "answer": "PIP je maximální tlak v okruhu překonávající odpor DC i elasticitu plic. Pplat je statický tlak v alveolech měřený při nulovém průtoku v inspirační pauze. Bezpečný limit Pplat je trvale <= 30 cmH2O.",
        "refs": ["ou2025", "ventSafe"]
      },
      {
        "question": "Jaké je výchozí protektivní nastavení dechového objemu (Vt), dechové frekvence a PEEP u dospělého pacienta na UPV?",
        "answer": "Vt = 6–8 ml/kg predikované hmotnosti PBW (u ARDS 4–6 ml/kg), dechová frekvence 12–16/min, PEEP 5–8 cmH2O (u ARDS 10–16 cmH2O dle tíže).",
        "refs": ["ou2025", "ventSafe"]
      },
      {
        "question": "Jaké 4 základní mechanismy tvoří ventilátorem indukované plicní poškození (VILI)?",
        "answer": "1. Barotrauma (poškození vysokým tlakem), 2. Volutrauma (přepětí vysokým objemem), 3. Atelektrauma (střižné síly při cyklickém kolapsu a otevírání alveolů bez PEEP), 4. Biotrauma (vyplavení cytokinů do oběhu s rozvojem MODS).",
        "refs": ["ou2025", "ventSafe"]
      },
      {
        "question": "Proč po intubaci a zahájení přetlakové ventilace často dochází k prudkému poklesu krevního tlaku?",
        "answer": "Pozitivní nitrohrudní tlak stlačuje velké žíly (horní a dolní dutou žílu), což dramaticky snižuje žilní návrat (preload pravé i levé komory) a vede k poklesu srdečního výdeje a hypotenzi.",
        "refs": ["ou2025"]
      },
      {
        "question": "Co je to test spontánního dýchání (SBT) a jaká hodnota Tobinova indexu (RSBI) predikuje úspěšné odpojení?",
        "answer": "SBT je 30–120 minut spontánního dýchání na T-spojce nebo s minimální tlakovou podporou (PS 5–7 cmH2O). Tobinův index RSBI = dechová frekvence / dechový objem v litrech; hodnota RSBI < 105 predikuje úspěšnou extubaci.",
        "refs": ["ou2025", "ventSBT"]
      }
    ]
  },
  "B19": {
    "title": "Nejčastější poruchy acidobazické rovnováhy v intenzivní medicíně, základní principy hodnocení acidobazické rovnováhy",
    "reviewed": "2026-11-03",
    "edition": "LF OU 2025 · Stewartův model · Henderson-Hasselbalch · SRLF 2024",
    "scope": "Dospělí: fyziologické rozmezí krevních plynů, Henderson-Hasselbalch vs. Stewartův model (SID, Atot, PaCO2), Anion Gap a HAGMA (KULT) vs. NAGMA, respirační kompenzace, metabolická alkalóza a přísné indikace 8.4% NaHCO3.",
    "opening": "Acidobazická rovnováha (ABR) je dynamická homeostáza udržující koncentraci vodíkových iontů v úzkém fyziologickém rozmezí pH 7.35–7.45 (LF OU 2025). U zkoušky začínám fyziologickými hodnotami Astrupa, srovnám tradiční Henderson-Hasselbalchův přístup (bikarbonát a base excess) s moderním kvantitativním Stewartovým modelem (SID, slabé kyseliny Atot, PaCO2), vysvětlím výpočet Anion Gapu a diferenciální diagnostiku HAGMA (mnemotechnika KULT) versus hyperchloremické NAGMA (např. po 0.9% NaCl), popíši respirační a renální kompenzační mechanismy a zdůrazním, proč je rutinní podávání bikarbonátu sodného škodlivé a kdy je přísně indikováno.",
    "openingRefs": ["ou2025", "acidMerck", "acidSRLF"],
    "sections": [
      {
        "title": "1. Fyziologie ABR, referenční hodnoty Astrupa a regulační pufry",
        "refs": ["ou2025", "acidMerck"],
        "paragraphs": [
          "Fyziologické referenční hodnoty arteriální krve (Astrup): pH = 7.35–7.45 (koncentrace H+ = 35–45 nmol/l); PaCO2 = 4.5–6.0 kPa (35–45 mmHg); PaO2 = 10.0–13.3 kPa (75–100 mmHg); sérový bikarbonát aktuální i standardní HCO3- = 22–26 mmol/l; Standard Base Excess (SBE) = -2 až +2 mmol/l; saturace SaO2 = 95–98 %; laktát = 0.5–2.0 mmol/l.",
          "Pufrovací systémy organismu: (1) Bikarbonátový pufr (HCO3- / H2CO3 / CO2): Nejdůležitější otevřený extracelulární pufr (tvoří > 50 % pufrovací kapacity); kapacita je neomezená díky eliminaci těkavého CO2 plícemi a regeneraci HCO3- ledvinami; (2) Nebikarbonátové pufry (uzavřené): Hemoglobin v erytrocytech (nejvýznamnější krevní bílkovinný pufr díky histidinovým zbytkům), plazmatické proteiny (zejména albumin), fosfátový pufr (HPO4^2- / H2PO4- – klíčový intracelulárně a v tubulární tekutině ledvin) a kostní minerály (při chronické acidóze).",
          "Tři linie obrany proti výkyvům pH: 1. Chemické pufry v krvi (nástup okamžitý v řádu sekund); 2. Respirační kompenzace plícemi – řízení alveolární ventilace chemoreceptory (nástup v řádu minut, maximum za 12–24 h); 3. Renální kompenzace ledvinami – sekrece H+, reabsorpce a novotvorba bikarbonátu a vylučování NH4+ (nástup pomalý za 24–48 h, maximum za 3–5 dní)."
        ]
      },
      {
        "title": "2. Tradiční hodnocení (Henderson-Hasselbalch) vs. Stewartův fyzikálně-chemický model",
        "refs": ["ou2025", "acidMerck"],
        "paragraphs": [
          "Tradiční přístup (Henderson-Hasselbalch): pH = pK + log([HCO3-] / (0.03 x PaCO2 v mmHg)). Dělí poruchy na respirační (řízené PaCO2) a metabolické (posuzované dle HCO3- a Base Excess). Standard Base Excess (SBE) vyjadřuje množství silné kyseliny nebo zásady (v mmol/l), které je nutno přidat k 1 litru krve při PaCO2 5.3 kPa a 37 °C k dosažení pH 7.40. Limitace: Nedokáže vysvětlit vliv abnormalit albuminu, fosfátů a chloridů na acidobázi.",
          "Moderní kvantitativní přístup (Peter Stewart, LF OU 2025): pH a koncentrace H+ jsou ZÁVISLÉ proměnné, které jsou jednoznačně určeny třemi NEZÁVISLÝMI proměnnými: (1) PaCO2 (otevřený respirační systém); (2) Diference silných iontů (Strong Ion Difference, SID); (3) Celková koncentrace slabých netěkavých kyselin (Atot – dominantně albumin a anorganický fosfát).",
          "Diference silných iontů (Apparent SID): SIDa = (Na+ + K+ + Ca2+ + Mg2+) - (Cl- + laktát-). Efektivní SID (SIDe) zohledňuje náboje slabých kyselin a bikarbonátu; fyziologická hodnota SID činí 38–42 mmol/l. Zkouškové pravidlo: POKLES SID POD 38 mmol/l ZPŮSOBUJE ACIDOZU (např. hyperchloremie z infuzí 0.9% NaCl zmenšuje rozdíl mezi kationty a chloridy -> diluční hyperchloremická acidóza!). Naopak VZESTUP SID NAD 42 mmol/l ZPŮSOBUJE ALKALOZU (např. hypochloremie při zvracení -> hypochloremická alkalóza).",
          "Vliv albuminu (Atot): Albumin se při fyziologickém pH chová jako slabá kyselina (polyvalentní anion). Těžká hypoalbuminémie (častá u pacientů na JIP) působí jako ztráta slabé kyseliny -> má alkalizující vliv a může maskovat současnou závažnou metabolickou acidózu!"
        ]
      },
      {
        "title": "3. Metabolická acidóza: Anion Gap, HAGMA (KULT) vs. NAGMA",
        "refs": ["ou2025", "acidMerck"],
        "paragraphs": [
          "Anion Gap (AG – aniontové okno): Rozdíl mezi běžně měřenými kationty a anionty v plazmě. Výpočet: AG = (Na+ + K+) - (Cl- + HCO3-), fyziologická norma je 12–16 mmol/l (pokud se K+ nepočítá: Na+ - (Cl- + HCO3-), norma 8–12 mmol/l). AG představuje neměřené anionty (albumin, fosfáty, sulfáty, laktát, ketolátky).",
          "1. Metabolická acidóza se zvýšeným AG (High Anion Gap Metabolic Acidosis – HAGMA, AG > 16 mmol/l): Vzniká akumulací neměřených organických nebo anorganických kyselin. Mnemotechnika KULT (LF OU 2025):",
          "(K) Ketoacidóza: diabetická (DKA – akumulace beta-hydroxybutyrátu a acetoacetátu), alkoholická (AKA), z hladovění; (U) Urémie: pokročilé renální selhání (retence síranů, fosfátů a organických kyselin při poklesu GFR); (L) Laktátová acidóza: typ A (tkáňová hypoperfuze a hypoxie – šok, sepse, KPR, mezenteriální ischémie) a typ B (toxiny, jaterní selhání, metformin, malignity); (T) Toxiny / intoxikace: metanol (kyselina mravenčí), etylenglykol (kyselina glykolová a oxalová), salicyláty (kyselina salicylová), pyroglutamová acidóza (paracetamol u malnutričních).",
          "2. Metabolická acidóza s normálním AG / hyperchloremická (Normal Anion Gap Metabolic Acidosis – NAGMA, AG v normě 8–12 mmol/l): Pokles bikarbonátu je reciprokým způsobem kompenzován vzestupem chloridů (Cl-):",
          "(a) Gastrointestinální ztráty HCO3-: těžké sekreční průjmy, enterocutánní píštěle, biliární a pankreatické drény, ureterosigmoideostomie; (b) Renální ztráty HCO3- / porucha exkrece H+: renální tubulární acidózy (RTA I. typu distální, RTA II. typu proximální), inhibitory karboanhydrázy (acetazolamid); (c) Iatrogenní hyperchloremie: masivní infuze nekorigovaného 0.9% NaCl (obsahuje 154 mmol/l Cl-, zatímco plazma jen 100 mmol/l -> drastické snížení SID)."
        ]
      },
      {
        "title": "4. Metabolická alkalóza, respirační poruchy a pravidla kompenzace",
        "refs": ["ou2025", "acidMerck"],
        "paragraphs": [
          "Metabolická alkalóza (pH > 7.45, HCO3- > 26 mmol/l, BE > +2 mmol/l): (1) Chlorid-senzitivní (odpad Cl- v moči < 20 mmol/l): ztráty žaludeční šťávy (zvracení, nazogastrická sonda s odsáváním HCl -> hypochloremická alkalóza s hypokalémií), terapie kličkovými diuretiky (furosemid -> kontrakční alkalóza), posthyperkapnická alkalóza. Terapie: infuze balancovaných krystaloidů s chloridy a substituce KCl; (2) Chlorid-rezistentní (Cl- v moči > 20 mmol/l): primární hyperaldosteronismus (Connovův syndrom), Cushingův syndrom, lékořice, těžká deplece draslíku. Terapie: spironolakton, korekce endokrinopatie.",
          "Respirační acidóza (PaCO2 > 6.0 kPa): Alveolární hypoventilace. Akutní (útlum dechového centra opioidy, trauma míchy) – renální kompenzace ještě nenastala (bikarbonát stoupá pouze o 1 mmol/l na každých 1.3 kPa PaCO2 -> hluboký pokles pH). Chronická (CHOPN) – plná renální kompenzace retencí HCO3- (bikarbonát stoupá o 3.5–4 mmol/l na každých 1.3 kPa PaCO2 -> pH se vrací k normě 7.35–7.38 při vysokém HCO3- např. 32–36 mmol/l!). Zkoušková past: Agresivní ventilací nesmíme u chronického CHOPN srazit PaCO2 prudce k normě (vyvolali bychom těžkou metabolickou alkalózu a křeče!).",
          "Respirační alkalóza (PaCO2 < 4.5 kPa): Alveolární hyperventilace (bolest, úzkost, časná sepse, plicní embolie, jaterní encefalopatie, nesprávně nastavená agresivní UPV)."
        ]
      },
      {
        "title": "5. Terapie ABR: Kdy (ne)podávat 8.4% hydrogenuhličitan sodný (NaHCO3)",
        "refs": ["ou2025", "acidSRLF", "bicarICU2"],
        "paragraphs": [
          "Základní princip terapie: Léčba ABR je VŽDY kauzální (léčba základního onemocnění – tekutiny a noradrenalin u septického šoku k obnově perfuze, PCI u kardiogenního šoku, inzulin a tekutiny u DKA, hemodialýza u urémie, úprava ventilace u respiračních poruch).",
          "Zkoušková past č. 1 – Rutinní podávání 8.4% NaHCO3 u laktátové acidózy a DKA je ZAKÁZÁNO! Důvody rizikovosti bikarbonátu (LF OU 2025): (1) Paradoxní intracelulární acidóza: Reakcí HCO3- s H+ vzniká CO2 a voda; CO2 volně a okamžitě difunduje přes buněčné membrány a hematoencefalickou bariéru do buněk a neuronů, zatímco HCO3- neprochází -> prohloubení acidózy v myokardiocytech a mozku!; (2) Posun disociační křivky hemoglobinu doleva (Bohrův efekt) -> zhoršené uvolňování kyslíku do hypoxických tkání; (3) Těžká hypokalémie (posun K+ do buněk) a hypokalcémie (pokles ionizovaného Ca2+); (4) Hyperosmolalita a sodíková nálož (8.4% NaHCO3 má osmolalitu 2000 mOsm/l -> volumové přetížení).",
          "Přísné indikace k podání 8.4% NaHCO3 na JIP (studie BICAR-ICU 2018): (1) Těžká metabolická acidóza s pH < 7.10–7.15 a HCO3- < 8 mmol/l u pacientů s AKI na JIP (oddaluje nutnost dialýzy a snižuje mortalitu); (2) Těžká život ohrožující hyperkalémie s EKG změnami (přesun K+ do buněk); (3) Intoxikace tricyklickými antidepresivy (TCA) nebo blokátory Na+ kanálů s rozšířením QRS > 120 ms (alkalizace krve na pH 7.45–7.55 zvyšuje vazbu TCA na bílkoviny a sodíková nálož kompetitivně odblokovává myokardiální sodíkové kanály); (4) Závažné renální ztráty bikarbonátu (RTA, ztrátové píštěle). Dávkování: Poloviční deficit dle vzorce: Deficit HCO3- (mmol) = 0.5 x tělesná hmotnost (kg) x (cílový HCO3- - aktuální HCO3-). Podávat pomalu jako 1.4% či 4.2% izotonizovaný roztok pod kontrolou Astrupa."
        ]
      }
    ],
    "corrections": [
      "Rutinní podávání 8.4% hydrogenuhličitanu sodného (bikarbonátu) u laktátové acidózy a diabetické ketoacidózy je škodlivé. Generovaný CO2 proniká do buněk a vyvolává paradoxní intracelulární acidózu myokardu a CNS.",
      "Fyziologický roztok (0.9% NaCl) není acidobazicky neutrální. Obsahuje 154 mmol/l Cl-, což drasticky snižuje SID a způsobuje diluční hyperchloremickou metabolickou acidózu (NAGMA). Lékem volby jsou balancované krystaloidy.",
      "Hypoalbuminémie působí na acidobázi jako slabá zásada (alkalizuje). Ztráta albuminu jako slabé netěkavé kyseliny (Atot) může maskovat rozvíjející se těžkou metabolickou acidózu.",
      "Hodnota Anion Gapu musí být korigována na albumin! Na každých 10 g/l poklesu sérového albuminu pod 40 g/l klesá normální hodnota Anion Gapu o 2.5 mmol/l.",
      "U pacientů s chronickou hyperkapnií (CHOPN) s renální kompenzací (vysoký HCO3-) nesmíme na UPV prudce normalizovat PaCO2 k 5.3 kPa. Vyvolali bychom těžkou posthyperkapnickou alkalózu s křečemi a arytmiemi."
    ],
    "checks": [
      {
        "question": "Jaké jsou 3 nezávislé proměnné určující pH podle moderního Stewartova fyzikálně-chemického modelu?",
        "answer": "1. PaCO2 (otevřený respirační systém), 2. Diference silných iontů (SID = silné kationty - silné anionty, norma 38–42 mmol/l), 3. Celková koncentrace slabých netěkavých kyselin Atot (dominantně albumin a anorganický fosfát).",
        "refs": ["ou2025", "acidMerck"]
      },
      {
        "question": "Jak se počítá Anion Gap (AG) a jaká je diferenciální diagnostika HAGMA dle mnemotechniky KULT?",
        "answer": "AG = (Na+ + K+) - (Cl- + HCO3-), norma 12–16 mmol/l. Příčiny HAGMA (KULT): K = Ketoacidóza (diabetická, alkoholická, hladovění), U = Urémie (selhání ledvin), L = Laktátová acidóza (šok, sepse, hypoperfuze), T = Toxiny (metanol, etylenglykol, salicyláty).",
        "refs": ["ou2025", "acidMerck"]
      },
      {
        "question": "Proč infuze velkého množství 0.9% NaCl vyvolává metabolickou acidózu a o jaký typ acidózy jde?",
        "answer": "Jde o hyperchloremickou metabolickou acidózu s normálním Anion Gapem (NAGMA). Vysoká koncentrace chloridů (154 mmol/l) zmenšuje diferenci silných iontů (SID), což dle zákona elektrone neutrality vede ke vzestupu H+ a poklesu pH.",
        "refs": ["ou2025", "acidMerck"]
      },
      {
        "question": "Jaká jsou hlavní rizika rychlého podání 8.4% NaHCO3 do žíly?",
        "answer": "Vznik CO2 s rozvojem paradoxní intracelulární acidózy v myokardu a mozku, posun disociační křivky Hb doleva (zhoršené uvolnění O2 ve tkáních), hypokalémie, pokles ionizovaného kalcia a hyperosmolární objemové přetížení.",
        "refs": ["acidSRLF", "ou2025"]
      },
      {
        "question": "Kdy je na JIP indikováno podání 8.4% NaHCO3 u intoxikace tricyklickými antidepresivy (TCA)?",
        "answer": "Při rozšíření QRS komplexu nad 120 ms nebo komorových arytmiích. Bikarbonát alkalizací krve (cílové pH 7.45–7.55) zvyšuje vazbu TCA na bílkoviny a sodíková nálož kompetitivně vytěsňuje lék z rychlých sodíkových kanálů myokardu.",
        "refs": ["tcaToxicology", "ou2025"]
      }
    ]
  },
  "B20": {
    "title": "Závažné iontové poruchy a poruchy osmolality – příčiny, léčba",
    "reviewed": "2026-11-03",
    "edition": "LF OU 2025 · Evropská doporučení pro hyponatrémii · ERC 2025 hyperkalémie",
    "scope": "Dospělí: fyziologie osmolality a tonicity, těžká symptomatická hyponatrémie, limit korekce a prevence osmotického demyelinizačního syndromu (ODS), hypernatrémie, hyperkalémie (třístupňový protokol s kalciem), hypokalémie a hypomagnezémie.",
    "opening": "Závažné iontové poruchy a dysosmolalita představují bezprostřední ohrožení života rozvojem letálních arytmií, edému mozku nebo ireverzibilního neurologického poškození (LF OU 2025). U zkoušky začínám definicí efektivní osmolality, detailně rozeberu diagnostiku a léčbu těžké symptomatické hyponatrémie (bolus 150 ml 3% NaCl) se striktním limitem rychlosti korekce (max 8–10 mmol/l/24 h) k prevenci osmotického demyelinizačního syndromu (ODS), vysvětlím pomalou korekci hypernatrémie a předvedu přesný třístupňový resuscitační algoritmus těžké hyperkalémie (1. Calcium gluconicum pro membránovou stabilizaci, 2. Inzulin s glukózou a salbutamol pro intracelulární shift, 3. Eliminace furosemidem a dialýzou).",
    "openingRefs": ["ou2025", "hypoNaEmergency", "hyperK2026"],
    "sections": [
      {
        "title": "1. Osmolalita séra, tonicita a patofyziologie vodních prostorů",
        "refs": ["ou2025", "hypoNaEurope"],
        "paragraphs": [
          "Osmolalita vs. Tonicita: Celková osmolalita séra (norma 275–295 mOsm/kg H2O) je dána součtem všech osmoticky aktivních částic: Osmolalita = 2 x Na+ + glykémie + urea (vše v mmol/l). Tonicita (efektivní osmolalita) zahrnuje pouze efektivní soluty, které neprocházejí volně buněčnou membránou a generují transcelulární přesun vody: Tonicita = 2 x Na+ + glykémie (urea volně prochází membránami a tonicitu neovlivňuje!).",
          "Tělesné tekutiny: Celková tělesná voda (TBW) tvoří 60 % hmotnosti dospělého muže (50 % ženy): 2/3 tvoří intracelulární tekutina (ICF, dominantní kation K+), 1/3 extracelulární tekutina (ECF, dominantní kation Na+). ECF se dělí na intersticiální tekutinu (3/4 ECF) a intravaskulární objem / plazmu (1/4 ECF). Přesun vody mezi ICF a ECF se řídí výhradně tonicitou!",
          "Regulace osmolality: Zajišťována osmoreceptory v hypotalamu řídícími sekreci antidiuretického hormonu (ADH / vazopresin) ze zadního laloku hypofýzy a pocit žízně. ADH zabudovává akvaporinové kanály (AQP-2) do sběrných kanálků ledvin -> retence volné vody."
        ]
      },
      {
        "title": "2. Hyponatrémie: Klasifikace, diagnostika a syndrom SIADH",
        "refs": ["ou2025", "hypoNaEurope", "hypoNaEmergency"],
        "paragraphs": [
          "Definice: Sérový Na+ < 135 mmol/l. Závažná hyponatrémie: Na+ < 120–125 mmol/l. Dle rychlosti vzniku: akutní (< 48 hodin – vysoké riziko edému mozku!) vs. chronická (>= 48 hodin – neurony adaptovány syntézou a exportem organických osmolytů).",
          "Diferenciální diagnostika dle efektivní osmolality: (1) Hypertonická hyponatrémie (translokační): hyperglykémie přesouvá vodu z buněk do ECF. Korekce natrémie: na každých 3.0 mmol/l vzestupu glykémie nad normu (5.5 mmol/l) klesá naměřené Na+ v séru o cca 1.0 mmol/l!; (2) Izotonická pseudohyponatrémie: těžká hypertriglyceridémie nebo paraproteinémie vytěsňuje vodní fázi plazmy při měření plamenovou fotometrií (přímá iontoselektivní elektroda ISE měří správně); (3) Hypotonická hyponatrémie (pravá, osmolalita < 275 mOsm/kg):",
          "(a) Hypovolemická (deficit Na+ i vody, ztráta Na > ztráta vody): extrarenální ztráty (zvracení, průjmy, popáleniny, pankreatitida – Na v moči < 20 mmol/l) vs. renální ztráty (diuretika, mineralokortikoidní deficit u Addisonovy choroby – Na v moči > 30 mmol/l);",
          "(b) Hypervolemická (retence vody i Na+, retence vody > Na+): srdeční selhání, jaterní cirhóza, nefrotický syndrom, oligurické selhání ledvin. Klinicky otoky, ascites, městnání;",
          "(c) Euvolemická (izolovaná retence volné vody): Nejčastější příčinou je Syndrom nepřiměřené sekrece ADH (SIADH – Schwartz-Bartterův syndrom): Příčiny: malobuněčný karcinom plic, pneumonie, CNS léze (trauma, CMP, infekce), léky (SSRI, karbamazepin, valproát, cyklofosfamid). Diagnostická kritéria SIADH: hypotonická hyponatrémie při klinické euvolemii, neadekvátně vysoká osmolalita moči (> 100 mOsm/kg), vysoké odpady sodíku v moči (UNa > 30 mmol/l) při normální funkci ledvin, štítné žlázy a nadledvin. Léčba SIADH: restrikce tekutin (pod 800–1000 ml/den), vaptany (antagonisté V2 receptorů – tolvaptan), přívod NaCl s furosemidem."
        ]
      },
      {
        "title": "3. Léčba akutní těžké hyponatrémie a prevence demyelinizace (ODS)",
        "refs": ["hypoNaEmergency", "ou2025"],
        "paragraphs": [
          "Klinické projevy těžké hyponatrémie: Edém mozku v důsledku hypotonického přesunu vody do neuronů: cefalea, nauzea, zmatenost, agitovanost, somnolence, křeče (status epilepticus), komatózní stav a riziko temporální či tonzilární mozkové herniace.",
          "Akutní protokol při těžkých neurologických příznacích (křeče, kóma, edém mozku): Okamžité podání intravenózního bolusu 150 ml 3% hypertonického roztoku NaCl (3% NaCl obsahuje 513 mmol/l Na+) během 20 minut! Při přetrvávání křečí/kómatu lze bolus 150 ml zopakovat 1–2x (celkem max 3 bolusy) do vzestupu natrémie o 4–5 mmol/l, což spolehlivě zastaví edém mozku a křeče.",
          "STRIKTNÍ BEZPEČNOSTNÍ LIMIT KOREKCE (LF OU 2025): U chronické hyponatrémie (> 48 h) NESMÍ rychlost vzestupu Na+ překročit 8–10 mmol/l za prvních 24 hodin a 18 mmol/l za 48 hodin (u rizikových pacientů s malnutricí, cirhózou a alkoholismem je bezpečný limit max 6–8 mmol/l/24 h!).",
          "Osmotický demyelinizační syndrom (ODS / centrální pontinní myelinolýza): Letální iatrogenní komplikace způsobená příliš rychlým vzestupem natrémie. Rychlý hypertonický tah vytáhne vodu z adaptovaných mozkových buněk -> dehydratace a svraštění oligodendrocytů s masivní demyelinizací pontu a bazálních ganglií. Klinický obraz (nastupuje s latencí 2–6 dnů po 'úspěšné' korekci): dysartrie, dysfagie, spastická kvadruparezéza, pseudobulbární syndrom až locked-in syndrom (pacient je plně při vědomí, ale imobilní, schopen pouze vertikálního pohybu očí!). Postup při překročení limitu (overcorrection): Okamžitě zastavit korekci, podat 5% glukózu nebo desmopresin (DDAVP 1–2 mikrog i.v.) ke snížení natrémie zpět pod bezpečný limit!"
        ]
      },
      {
        "title": "4. Hypernatrémie: Patofyziologie, diabetes insipidus a korekční protokol",
        "refs": ["hyperNaNHS", "diabetesInsipidus", "ou2025"],
        "paragraphs": [
          "Definice: Sérový Na+ > 145 mmol/l, těžká hypernatrémie > 155 mmol/l. Hypernatrémie vždy znamená hypertonicitu a intracelulární dehydrataci neuronů.",
          "Etiologie: (1) Ztráta čisté volné vody (nejčastější): Diabetes insipidus (centrální po neurotraumatech a kraniofaryngeomu – chybí sekrece ADH; nefrogénní při rezistenci tubulů na ADH např. po lithiu); horečky, tachypnoe, popáleniny; neschopnost pít u imobilních a intubovaných pacientů; (2) Ztráta hypotonické tekutiny: osmotická diuréza (hyperglykémie, mannitol), profúzní pocení, vodnaté průjmy; (3) Nadměrný přívod sodíku (vzácný): infuze 8.4% NaHCO3, hypertonický NaCl, tonutí ve slané vodě.",
          "Klinický obraz: Žízeň, suché sliznice, těstovitá kůže, neklid, tremor, hyperreflexie, svalové fascikulace, křeče, encefalopatie až kóma; trakce mozkových cév ze svraštění mozku může vyvolat subdurální a subarachnoidální krvácení.",
          "Terapie a limit korekce: Výpočet deficitu volné vody: Deficit vody (litry) = TBW x ((aktuální Na+ / 140) - 1). Kde TBW = hmotnost x 0.6 (u žen 0.5, u seniorů 0.45). Hradí se perorálně vodou sondou nebo intravenózně 5% glukózou (případně hypotonickým 0.45% NaCl). U centrálního diabetu insipidus podat desmopresin (DDAVP 1–2 mikrog s.c./i.v.). Bezpečnostní limit: Pokles natrémie NESMÍ překročit 10–12 mmol/l za 24 hodin! Příliš rychlý pokles vyvolá masivní edém mozku."
        ]
      },
      {
        "title": "5. Hyperkalémie a hypokalémie: Resuscitační protokol a EKG změny",
        "refs": ["hyperK2026", "hypoKSPS", "ou2025"],
        "paragraphs": [
          "Hyperkalémie (sérový K+ > 5.0 mmol/l, těžká > 6.5 mmol/l): Závažná život ohrožující porucha vyvolávající poruchy srdečního rytmu až asystolii. Příčiny: akutní selhání ledvin (oligurické AKI), rhabdomyolýza, syndrom nádorového rozpadu (TLS), masivní hemolýza, crush syndrom, těžká acidóza (shift K+ z buněk), léky (ACE-inhibitory, sartany, spironolakton, kalium-šetřící diuretika, NSAID).",
          "Dynamika EKG změn: K+ 5.5–6.5: vysoké symetrické hrotnaté vlny T ('stanovité T'); K+ 6.5–7.5: oploštění a vymizení vln P, prodloužení intervalu PR; K+ 7.5–8.5: rozšíření komplexu QRS, splynutí QRS s vlnou T do sinusovky ('sine wave'); K+ > 8.5 mmol/l: komorová fibrilace nebo asystolie!",
          "TŘÍSTUPŇOVÝ RESUSCITAČNÍ PROTOKOL TĚŽKÉ HYPERKALÉMIE (ERC 2025 / LF OU 2025):",
          "1. Krok – Okamžitá membránová stabilizace (Kardioprotekce): Calcium gluconicum 10% 10–20 ml i.v. (nebo Calcium chloratum 10% 5–10 ml) během 2–5 minut. Působí za 1–3 minuty (trvá 30–60 min). Nemění hladinu draslíku, ale zvyšuje prahový potenciál myokardu a odvrací komorové arytmie! Při přetrvávání EKG změn zopakovat za 5–10 min;",
          "2. Krok – Redistribuce draslíku do buněk (Intracelulární shift): (a) Rychlý humánní inzulin 10 IU v infuzi 200 ml 10% glukózy (nebo 100 ml 20%) během 30 minut i.v. Nástup za 15 min, sníží K+ o 0.5–1.2 mmol/l; (b) Inhalační salbutamol: 10–20 mg v nebulizaci poháněné O2 (stimuluje Na+/K+-ATPázu); (c) 8.4% NaHCO3 (50–100 ml i.v.) pouze při současné těžké metabolické acidóze;",
          "3. Krok – Odstranění draslíku z těla (Eliminace): Kličková diuretika (Furosemid 40–80 mg i.v.) u pacientů s funkčními ledvinami; moderní iontoměniče (patiromer, cyklosilikát sodno-zirkoničitý ZS-9); Akutní hemodialýza / CRRT: metoda volby u anurie, těžkého AKI a refrakterní hyperkalémie > 6.5 mmol/l!",
          "Hypokalémie (K+ < 3.5 mmol/l, těžká < 2.5 mmol/l): EKG: deprese ST, oploštění T, patologická vlna U, prodloužení QTc s rizikem komorových tachyarytmií Torsades de Pointes. Terapie: intravenózní substituce KCl do centrální žíly maximální rychlostí 20 mmol/h za monitorace EKG (v periferní žíle max koncentrace 40 mmol/l pro riziko chemické flebitidy). ZKOUŠKOVÁ PODMÍNKA LF OU: VŽDY SOUČASNĚ KORIGOVAT HYPOMAGNEZÉMII! Bez dostatku hořčíku dochází k útlumu Na+/K+-ATPázy a masivním renálním ztrátám draslíku, které nelze samotným KCl zkorigovat."
        ]
      }
    ],
    "corrections": [
      "Při rychlé korekci chronické hyponatrémie hrozí osmotický demyelinizační syndrom (ODS / centrální pontinní myelinolýza). Rychlost korekce nesmí překročit 8–10 mmol/l za 24 hodin.",
      "Podání vápníku (Calcium gluconicum) u hyperkalémie nesnižuje hladinu draslíku v krvi. Působí výhradně jako okamžitá membránová stabilizace myokardu (antagonizuje vliv hyperkalémie na akční potenciál) a zachraňuje pacienta před asystolií.",
      "Hypokalémii nelze úspěšně zkorigovat bez současné úpravy hypomagnezémie. Hořčík je kofaktorem Na+/K+-ATPázy; při jeho deficitu ledviny nekontrolovaně ztrácejí draslík.",
      "Pseudohyponatrémie vzniká při těžké hypertriglyceridémii a hyperproteinémii při měření plamenovou fotometrií. Fyzikální osmolalita plazmy je však normální a podání hypertonických roztoků je kontraindikováno.",
      "Infuze 0.9% NaCl není fyziologická – obsahuje 154 mmol/l Na+ i Cl-. U pacientů s metabolickou acidózou a hypokalémií prohlubuje acidózu a zhoršuje hypokalemické arytmie."
    ],
    "checks": [
      {
        "question": "Jaký je bezpečný limit rychlosti korekce chronické hyponatrémie a co hrozí při jeho překročení?",
        "answer": "Maximálně 8–10 mmol/l za prvních 24 hodin (u rizikových 6–8 mmol/l). Při rychlejším vzestupu hrozí osmotický demyelinizační syndrom (ODS / centrální pontinní myelinolýza) s kvadruparézou a locked-in syndromem.",
        "refs": ["hypoNaEmergency", "ou2025"]
      },
      {
        "question": "Jak se léčí těžká akutní symptomatická hyponatrémie provázená křečemi či edémem mozku?",
        "answer": "Okamžitým nitrožilním bolusem 150 ml 3% NaCl během 20 minut, který lze zopakovat 1–2x do odeznění příznaků a vzestupu natrémie o 4–5 mmol/l.",
        "refs": ["hypoNaEmergency"]
      },
      {
        "question": "Jaké jsou 3 kroky resuscitačního algoritmu těžké hyperkalémie s EKG změnami?",
        "answer": "1. Stabilizace myokardu: Calcium gluconicum 10% 10–20 ml i.v. 2. Přesun K+ do buněk: 10 IU inzulinu ve 200 ml 10% glukózy + inhalační salbutamol 10–20 mg. 3. Eliminace: furosemid, iontoměniče nebo akutní hemodialýza.",
        "refs": ["hyperK2026", "ou2025"]
      },
      {
        "question": "Jaké EKG změny provázejí progresi závažné hyperkalémie?",
        "answer": "Vysoké hrotnaté stanovité vlny T -> oploštění a vymizení vln P s prodloužením PR -> rozšíření QRS komplexu -> splynutí do sinusoidní křivky (sine wave) -> komorová fibrilace či asystolie.",
        "refs": ["hyperK2026", "ou2025"]
      },
      {
        "question": "Proč je při refrakterní hypokalémii nutné vyšetřit a korigovat hořčík (Mg2+)?",
        "answer": "Hořčík je nezbytným kofaktorem Na+/K+-ATPázy. Při hypomagnezémii vázne přesun K+ do buněk a dochází k nekontrolovaným renálním ztrátám draslíku v distálním tubulu.",
        "refs": ["hypoKSPS", "ou2025"]
      }
    ]
  },
  "B21": {
    "title": "Výživa pacientů v intenzivní péči",
    "reviewed": "2026-11-03",
    "edition": "LF OU 2025 (kap. 16, M. Káňová) · ESPEN 2023 · ASPEN 2024",
    "scope": "Dospělí: stresový metabolismus, energetická potřeba (10–15 kcal/kg v časné fázi, 20–25 kcal/kg v postakutní fázi), bílkoviny (1.2–2.0 g/kg), enterální vs. parenterální výživa, trofická nutrice, komplikace overfeedingu a prevence letálního refeeding syndromu.",
    "opening": "Klinická výživa v intenzivní péči je integrální součástí léčby kriticky nemocných, jejímž primárním cílem je zmírnit hyperkatabolismus, zachovat svalovou hmotu a integritu střevní bariéry a zabránit malnutrici a syndromu PICS (LF OU 2025). U zkoušky začínám patofyziologií stresového metabolismu (hyperglykémie, proteokatabolismus), definuji energetickou potřebu rozdělenou do fází (v časné fázi hypokalorická 10–15 kcal/kg/den k prevenci overfeedingu, později 20–25 kcal/kg/den) a vysoký přívod bílkovin (1.2–2.0 g/kg/den), zdůrazním jednoznačnou prioritu časné enterální výživy (do 24–48 h) a detailně popíši mechanismus, rizikové pacienty a prevenci fatálního refeeding syndromu s deficitem thiaminu a hypofosfatémií.",
    "openingRefs": ["ou2025", "nutritionESPEN", "refeedingASPEN"],
    "sections": [
      {
        "title": "1. Stresový metabolismus kriticky nemocných a nutriční screening",
        "refs": ["ou2025", "nutritionESPEN"],
        "paragraphs": [
          "Stresová metabolická odpověď (Marcela Káňová, LF OU 2025): V reakci na těžký inzult (sepse, těžké trauma, popáleniny, akutní pankreatitida) dochází k masivní neuroendokrinní aktivaci osy hypotalamus-hypofýza-nadledviny s vyplavením katecholaminů, kortizolu, glukagonu a prozánětlivých cytokinů (IL-1, IL-6, TNF-alfa).",
          "Důsledky stresového metabolismu: (1) Periferní inzulinová rezistence v kosterním svalu a játrech vedoucí ke stresové hyperglykémii; (2) Zvýšená glukoneogeneze a glykogenolýza (organismus tvoří glukózu bez ohledu na exogenní přívod); (3) Masivní proteokatabolismus: Rozpad kosterního a viscerálního svalu k uvolnění glukoplastických aminokyselin (alanin, glutamin) pro syntézu proteinů akutní fáze v játrech a imunitní systém. Kriticky nemocný ztrácí až 1–2 kg svalové hmoty týdně, což vede k syndromu svalové slabosti získané na JIP (ICU-acquired weakness, ICUAW) a selhání odpojení od ventilátoru; (4) Zvýšená lipolýza s oxidací volných mastných kyselin.",
          "Nutriční zhodnocení (Screening): Každý pacient na JIP hospitalizovaný > 48 hodin je v riziku malnutrice. Hodnotí se anamnéza úbytku váhy (> 5 % za 1 měsíc nebo > 10 % za 6 měsíců), BMI, skóre NRS-2002 (Nutritional Risk Screening >= 3 body = vysoké riziko) nebo NUTRIC score."
        ]
      },
      {
        "title": "2. Stanovení energetické potřeby a bílkovin: Fáze nemoci (ESPEN 2023)",
        "refs": ["ou2025", "nutritionESPEN"],
        "paragraphs": [
          "Měření energetického výdeje: Zlatým standardem je nepřímá kalorimetrie (měření spotřeby VO2 a produkce VCO2 ventilátorem). Pokud není dostupná, používají se váhové vzorce vztažené na fázi kritického onemocnění:",
          "Fázové dávkování energie (ESPEN 2023 / LF OU 2025):",
          "1. Akutní časná fáze (dny 1–2): Organismus produkuje obrovské množství endogenní energie glukoneogenezí. Podává se striktně HYPOKALORICKÁ VÝŽIVA v dávce 10–15 kcal/kg/den (nebo max 70 % kalorimetrické potřeby). Plný přívod energie v této fázi vede k overfeedingu!;",
          "2. Akutní pozdní fáze (dny 3–7): Postupné navyšování kalorického příjmu na normokalorickou úroveň 20–25 kcal/kg/den;",
          "3. Postakutní / anabolická fáze (rekonvalescence od 2. týdne): 25–30 kcal/kg/den u pacientů v těžkém katabolismu.",
          "Potřeba bílkovin: Zásadní parametr přežití v intenzivní péči! Katabolismus nelze zastavit pouhými kaloriemi, je nutný vysoký přívod aminokyselin: 1.2–2.0 g bílkovin/kg tělesné hmotnosti/den (u dialyzovaných na CRRT 1.5–2.0 g/kg/den kvůli ztrátám aminokyselin do hemofiltrátu; u popálenin a těžkého polytraumatu až 2.0–2.5 g/kg/den). Poměr neproteinové energie k dusíku má být 100–120 kcal : 1 g N.",
          "Specifikum obezity (BMI > 30 kg/m2): Výpočet energie se vztahuje na ideální tělesnou hmotnost (IBW): hypokalorická vysokoproteinová výživa: 11–14 kcal/kg skutečné váhy/den a bílkoviny 2.0–2.5 g/kg IBW/den."
        ]
      },
      {
        "title": "3. Enterální výživa (EV): Indikace, techniky a trofická nutrice",
        "refs": ["ou2025", "nutritionESPEN"],
        "paragraphs": [
          "Zásada volby (LF OU 2025): Enterální výživa (EV) je vždy metodou první a přirozené volby u každého pacienta se zachovanou funkcí gastrointestinálního traktu! Zajišťuje trofiku enterocytů, stimuluje prokrvení splanchniku, podporuje sekreci IgA, udržuje integritu střevní bariéry a brání bakteriální translokaci ze střeva do krevního oběhu.",
          "Načasování: Časná enterální výživa (Early Enteral Nutrition) má být zahájena do 24–48 HODIN od přijetí na JIP po iniciální hemodynamické stabilizaci pacienta. Začíná se tzv. trofickou enterální výživou (nízká rychlost 10–20 ml/h kontinuálně lineárním dávkovačem), která slouží k výživě sliznice střeva, nikoli k pokrytí celkových kalorických potřeb. Rychlost se postupně navyšuje.",
          "Techniky aplikace: (1) Nasogastrická sonda (NGS): Nejčastější přístup pro intragastrickou aplikaci; (2) Nasojejunální sonda (NJS): Zavedení distálně za Treitzovo ligamentum – indikována u pacientů s vysokým žaludečním reziduem, gastroparézou, těžkým refluxem a u těžké akutní pankreatitidy (nespustí exokrinní sekreci); (3) Perkutánní endoskopická gastrostomie (PEG) / jejunostomie (PEJ): Indikována při nutnosti nutriční podpory delší než 3–4 týdny.",
          "Kontraindikace enterální výživy: Absolutní: nestabilní oběhový šok s vysokými eskalujícími dávkami vazopresorů (riziko střevní ischémie!), mechanická obstrukce a ileus, perforace střeva, těžké aktivní krvácení do GIT, břišní kompartment syndrom (IAP > 20 mmHg). Relativní: žaludeční atonie s vysokým reziduem (GRV > 500 ml/6 h – podat prokinetika: metoklopramid, erytromycin)."
        ]
      },
      {
        "title": "4. Parenterální výživa (PV): Indikace a technika all-in-one",
        "refs": ["ou2025", "nutritionESPEN"],
        "paragraphs": [
          "Definice: Nitrožilní aplikace farmaceuticky připravených živin (aminokyseliny, glukóza, lipidové emulze, elektrolyty, vitamíny a stopové prvky) přímo do krevního oběhu.",
          "Indikace parenterální výživy: (1) Úplná kontraindikace enterální výživy (totální střevní selhání, paralytický ileus, masivní krvácení do GIT, těžká enterokutánní píštěl s vysokým odpadem, syndrom krátkého střeva); (2) Doplňková parenterální výživa (Supplemental PN): Pokud enterální výživa nepokryje alespoň 50–70 % energeticko-proteinových potřeb do 5.–7. dne hospitalizace na JIP, přidává se parenterální nutrice k doplnění deficitu.",
          "Technologie All-in-One (AIO): Standardem jsou moderní tříkomorové průmyslové vaky obsahující odděleně roztok aminokyselin, glukózu a lipidovou emulzi (s obsahem MCT/LCT tuků a protizánětlivých omega-3 mastných kyselin z rybího oleje). Před aplikací se přepážky protrhnou a vak se promíchá. Povinně se přidávají rozpustné multivitaminy a stopové prvky (zinek, selen, měď).",
          "Cévní přístup: Vzhledem k vysoké osmolalitě plné PV (často 1200–1800 mOsm/l) MUSÍ být plná parenterální výživa podávána výhradně do CENTRÁLNÍ ŽÍLY (CŽK, PICC)! Aplikace do periferní žíly je omezena na hypoosmolární roztoky (< 850–900 mOsm/l) a hrozí těžkou tromboflebitidou.",
          "Komplikace PV: Infekční (katétrová sepse – CRBSI), metabolické (stresová hyperglykémie vyžadující inzulin, hypertriglyceridémie nad 3.5–4.5 mmol/l), hepatobiliární (steatóza jater, cholestáza a biliární sludge při dlouhodobé PV bez enterální stimulace) a metabolická kostní nemoc."
        ]
      },
      {
        "title": "5. Komplikace výživy: Letální Refeeding syndrom vs. Overfeeding",
        "refs": ["ou2025", "refeedingASPEN"],
        "paragraphs": [
          "Refeeding syndrom (RFS, LF OU 2025): Život ohrožující soubor metabolických, elektrolytových a kardiovaskulárních komplikací vznikající při náhlém zahájení výživy (enterální i parenterální) u těžce malnutričních a vyhladovělých pacientů.",
          "Rizikoví pacienti: Mentální anorexie, chronický alkoholismus, onkologická kachexie, chronické hladovění (> 7–10 dní bez příjmu), morbidní obezita s masivním rychlým váhovým úbytkem, syndrom krátkého střeva.",
          "Patofyziologický mechanismus RFS: Při hladovění organismus kryje energii z lipidů a ketolátek za nízké hladiny inzulinu. Náhlý přívod sacharidů (glukózy) prudce stimuluje sekreci inzulinu -> anabolický obrat -> masivní buněčný influx draslíku, hořčíku a zejména anorganického fosfátu k syntéze ATP a glykogenu. Výsledek v séru: TĚŽKÁ HYPOFOSFATÉMIE (< 0.6 mmol/l, často < 0.3 mmol/l), HYPOKALÉMIE A HYPOMAGNEZÉMIE provázená retencí sodíku a tekutin!",
          "Klinické projevy RFS: Akutní srdeční selhání s plicním edémem a letálními arytmiemi, selhání dechových svalů (nedostatek ATP v bránici) s nutností intubace, křeče, rabdomyolýza, paralytický ileus, deliriantní stav a encefalopatie.",
          "Prevence a léčba Refeeding syndromu (LF OU 2025): (1) Před zahájením výživy podat intravenózně THIAMIN (vitamin B1) v dávce 100–300 mg i.v. (kofaktor glykolýzy – prevence Wernickeovy encefalopatie a laktátové acidózy!); (2) Pozvolné zahájení: začít na 10 kcal/kg/den (u extrémně rizikových na 5 kcal/kg/den) a navyšovat k cíli pomalu během 4–7 dnů; (3) Denní monitorace a profylaktická substituce fosfátů, kalia a magnézia; (4) Restrikce tekutin a sodíku k prevenci srdečního přetížení.",
          "Overfeeding (syndrom překrmení): Podání nadbytku energie v akutní fázi. Důsledky: těžká hyperglykémie, jaterní steatóza, hypertriglyceridémie, imunosuprese a nadměrná produkce oxidu uhličitého (vzestup RQ a VCO2), která způsobuje hyperkapnii a znemožňuje odpojení pacienta od ventilátoru!"
        ]
      }
    ],
    "corrections": [
      "V časné akutní fázi kritického stavu (dny 1–2) je plná výživa (25 kcal/kg) přísně zakázána! Vede k syndromu překrmení (overfeedingu). Zahajuje se hypokalorická výživa 10–15 kcal/kg/den.",
      "Refeeding syndrom není pouhý průjem po jídle – je to fatální metabolický rozvrat s těžkou hypofosfatémií, srdečním selháním a zástavou oběhu u vyhladovělých pacientů po podání glukózy.",
      "Před zahájením výživy u malnutričního pacienta musí být vždy podán thiamin (vitamin B1) v dávce 100–300 mg i.v. k prevenci Wernickeovy encefalopatie a laktátové acidózy.",
      "Plná parenterální výživa nesmí být podávána do periferní žíly kvůli vysoké osmolalitě (> 1000 mOsm/l) a riziku těžké flebitidy. Patří výhradně do centrálního katétru.",
      "Katabolismus v sepsi nelze zvrátit pouhým navyšováním cukrů a tuků. Je nutný vysoký přívod aminokyselin (1.2–2.0 g bílkovin/kg/den), jinak dochází k nezvratné atrofii dýchacích svalů."
    ],
    "checks": [
      {
        "question": "Jaká je doporučená energetická dávka a dávka bílkovin v časné vs. postakutní fázi na JIP dle ESPEN 2023?",
        "answer": "V časné akutní fázi (dny 1–2) hypokaloricky 10–15 kcal/kg/den k prevenci overfeedingu; v postakutní fázi 20–25 kcal/kg/den. Bílkoviny trvale 1.2–2.0 g/kg/den (u CRRT až 2.0 g/kg).",
        "refs": ["nutritionESPEN", "ou2025"]
      },
      {
        "question": "Proč je enterální výživa (EV) preferována před parenterální a kdy se zahajuje?",
        "answer": "Udržuje trofiku střevní sliznice, stimuluje prokrvení splanchniku, podporuje imunitu (IgA) a brání bakteriální translokaci. Zahajuje se časně do 24–48 h od stabilizace oběhu v trofických dávkách (10–20 ml/h).",
        "refs": ["ou2025", "nutritionESPEN"]
      },
      {
        "question": "Co je to Refeeding syndrom, jaká je jeho klíčová laboratorní známka a u koho hrozí?",
        "answer": "Život ohrožující metabolický rozvrat po přívodu glukózy u malnutričních pacientů (anorexie, alkoholismus, hladovění). Inzulin přesune ionty do buněk, což vede k těžké hypofosfatémii (< 0.6 mmol/l), hypokalémii, arytmiím a srdečnímu selhání.",
        "refs": ["refeedingASPEN", "ou2025"]
      },
      {
        "question": "Jaký vitamin musí být profylakticky podán před zahájením výživy u pacienta v riziku refeeding syndromu?",
        "answer": "Thiamin (vitamin B1) v dávce 100–300 mg i.v. k prevenci akutního vyčerpání kofaktorů glykolýzy a Wernickeovy encefalopatie.",
        "refs": ["refeedingASPEN", "ou2025"]
      },
      {
        "question": "Jaké jsou hlavní rizika a nežádoucí účinky překrmení (overfeedingu) v intenzivní péči?",
        "answer": "Hyperglykémie, jaterní steatóza, hypertriglyceridémie a zvýšená tvorba CO2 (hyperkapnie), která přetěžuje dechové svaly a znemožňuje úspěšný weaning z ventilátoru.",
        "refs": ["ou2025"]
      }
    ]
  },
  "B22": {
    "title": "Analgosedace pacientů v intenzivní péči",
    "reviewed": "2026-11-03",
    "edition": "LF OU 2025 (kap. 15, M. Káňová) · eCASH koncept · PADIS 2025",
    "scope": "Dospělí: změna paradigmatu k mělké kooperativní sedaci (CCC), analgesia-first (eCASH), škály RASS, BPS, CAM-ICU, farmakologie (propofol a PRIS, dexmedetomidin, prodelirantní benzodiazepiny, opioidy), myorelaxancia s TOF a balíček ABCDEF.",
    "opening": "Analgosedace na JIP je soubor farmakologických a nefarmakologických opatření zajišťujících bezbolestnost, anxiolýzu a komfort kriticky nemocného (LF OU 2025). U zkoušky začínám moderní změnou paradigmatu od historické hluboké sedace k mělké kooperativní sedaci (koncept CCC – Comfort, Cooperative, Calm a eCASH), definuji princip 'Analgesia-First' (nejprve odstranit bolest opioidy), představím objektivní monitoraci (RASS s cílem -1 až 0, behaviorální škály bolesti a CAM-ICU pro delirium), porovnám farmaka s důrazem na přednosti dexmedetomidinu (absence dechové deprese), rizika propofolu (PRIS při > 4 mg/kg/h) a zákaz rutinních benzodiazepinů pro prodelirantní efekt, a vysvětlím provádění denních sedativních prázdnin v rámci balíčku ABCDEF.",
    "openingRefs": ["ou2025", "padis2025", "propofolICU"],
    "sections": [
      {
        "title": "1. Změna paradigmatu: Koncept 'Analgesia-First' a mělká kooperativní sedace (eCASH)",
        "refs": ["ou2025", "padis2025"],
        "paragraphs": [
          "Změna paradigmatu (Marcela Káňová, LF OU 2025): Historický přístup plošné hluboké analgosedace ('vypnutí pacienta' k toleranci UPV) byl zcela opuštěn. Dlouhodobá hluboká sedace vede k imobilizaci, svalové atrofii (ICUAW), prodloužení UPV, nozokomiálním infekcím (VAP), kognitivnímu deficitu a dramatickému nárůstu deliria a mortality!",
          "Moderní koncept eCASH (early Comfort using Analgesia, minimal Sedation and Maximal Humane care): Cílem je mělká kooperativní sedace označovaná pravidlem 'CCC' (Comfort, Cooperative, Calm) – pacient je klidný, bez bolesti, schopen komunikace s personálem a rodinou a časné fyzikální rehabilitace a vertikalizace.",
          "Zásada 'Analgesia-First' (analgezie na 1. místě): Bolest je primárním spouštěčem stresu, tachykardie, katabolismu a agitovanosti. Základem analgosedace je proto VŽDY nejprve dokonalé zaléčení bolesti (opioidy či multimodální analgezií). Teprve pokud je pacient po odstranění bolesti stále neklidný a agitovaný, přidává se minimální nezbytná dávka sedativa! Lékem volby je sedativum, které neprohlubuje depresi dýchání a netlumí kognici.",
          "Výjimečné indikace hluboké sedace (RASS -4 až -5): Pouze u přesně vymezených stavů: (1) Těžké kraniocerebrální poranění s intrakraniální hypertenzí (ICP > 22 mmHg k udržení CPP a snížení CMRO2); (2) Refrakterní status epilepticus; (3) Těžký ARDS s potřebou svalové relaxace a pronační polohy k překonání těžké asynchronie ventilátoru; (4) Závažný šok v iniciální resuscitační fázi."
        ]
      },
      {
        "title": "2. Objektivní monitorace: Škála RASS, hodnocení bolesti a detekce deliria (CAM-ICU)",
        "refs": ["ou2025", "rassQUT", "camICU"],
        "paragraphs": [
          "Monitorace hloubky sedace – Richmond Agitation-Sedation Scale (RASS, LF OU Tabulka 15.2): Desetistupňová škála od +4 do -5: (+4) Bojovný, násilný; (+3) Velmi agitovaný, tahá za hadice a katétry; (+2) Agitovaný, časté neúčelné pohyby; (+1) Neklidný, úzkostný; (0) Bdělý a klidný; (-1) Ospalý, probudí se na hlas a udrží oční kontakt > 10 s; (-2) Lehká sedace, oční kontakt na hlas < 10 s; (-3) Střední sedace, otevře oči na hlas bez očního kontaktu; (-4) Hluboká sedace, reaguje pouze na fyzický podnět; (-5) Neprobuditelný. Cílová hodnota na JIP: RASS = -1 až 0!",
          "Monitorace bolesti: U komunikujících vizuální analogová škála (VAS 0–10). U ventilovaných a nespolupracujících pacientů se používají validované behaviorální škály: Behavioral Pain Scale (BPS, skóre 3–12, hodnotí výraz obličeje, pohyby horních končetin a toleranci UPV; skóre > 5 značí bolest) nebo Critical-Care Pain Observation Tool (CPOT).",
          "Detekce deliria – CAM-ICU (Confusion Assessment Method for the ICU, LF OU obr. 15.3): Delirium je akutní mozková dysfunkce postihující až 50–80 % ventilovaných pacientů. Vyšetřuje se u pacientů s RASS >= -3 ve 2 krocích:",
          "Znak 1: Akutní vznik nebo kolísavý průběh mentálního stavu A ZÁROVEŇ; Znak 2: Porucha pozornosti (test písmenem – pacient stiskne ruku při vyslovení písmene 'A' v řadě písmen 'S-A-V-E-H-A-A-R-T'; > 2 chyby = pozitivní) A ZÁROVEŇ alespoň jeden z následujících: Znak 3: Dezorganizované myšlení (nelogické otázky) NEBO Znak 4: Porucha vědomí (aktuální RASS jiný než 0). Splnění = pozitivní delirium (hyperaktivní, hypoaktivní – nejčastější a nejnebezpečnější, nebo smíšené)."
        ]
      },
      {
        "title": "3. Farmaka v intenzivní péči: Propofol a PRIS, Dexmedetomidin vs. Benzodiazepiny",
        "refs": ["ou2025", "propofolICU", "dexICU", "midazolamICU"],
        "paragraphs": [
          "Propofol: Rychle působící nitrožilní anestetikum (GABA-A agonista). Výhody: rychlý nástup i probuzení, antikonvulzivní a antiemetický účinek, snižuje intrakraniální tlak a CMRO2. Dávkování na JIP: sedace 0.5–3.0 mg/kg/h i.v. Rizika: hypotenze z vazodilatace, deprese dechu, hypertriglyceridémie (10% tuková emulze dodává 1.1 kcal/ml energie – nutno odečíst z nutričního příjmu!).",
          "Propofol Infusion Syndrome (PRIS, LF OU 2025): Vzácná, ale fatální komplikace (mortalita > 33 %) při podávání dávek > 4–5 mg/kg/h (> 70 mikrog/kg/min) po dobu delší než 48 hodin. Mitochondriální blokáda beta-oxidace mastných kyselin vede k buněčnému kolapsu. Projevy: náhlá refrakterní bradykardie progredující do asystolie nereagující na resuscitaci, těžká laktátová metabolická acidóza, rhabdomyolýza s myoglobinurií, hyperkalémie, hepatomegalie a selhání ledvin. Prevence: nepřekračovat dávku 4 mg/kg/h a pravidelně kontrolovat laktát, TAG a myoglobin!",
          "Dexmedetomidin (Dexdor): Vysoce selektivní agonista centrálních alfa-2 adrenergních receptorů v locus coeruleus. Mechanismus: útlum noradrenergní transmise odblokuje GABAergní spánková jádra (VPO) -> navozuje fyziologický non-REM spánek fáze 3. Zásadní výhody: (a) Pacient je snadno probuditelný na oslovení a kooperuje; (b) NEZPŮSOBUJE DEPRESI DÝCHÁNÍ – lze bezpečně podávat během weaningu i po extubaci!; (c) Snižuje incidenci pooperačního deliria; (d) Šetří spotřebu opioidů. Dávkování: kontinuální infuze 0.2–1.4 mikrog/kg/h (bez nasycovacího bolusu!). Nežádoucí účinky: sinusová bradykardie a hypotenze (při vyšších dávkách přechodná hypertenze stimulací periferních alfa-2b).",
          "Benzodiazepiny (Midazolam): Agonisté GABA-A. Zásadní stanovisko LF OU a PADIS: RUTINNÍ PODÁVÁNÍ BENZODIAZEPINŮ K SEDACI NA JIP JE PŘEKONANÉ A NEDOPORUČUJE SE! Jsou nezávislým rizikovým faktorem pro vznik deliria, mají protrahovaný poločas (kumulace aktivního metabolitu 1-hydroxymidazolamu v tukové tkáni a při selhání ledvin) a prodlužují dobu na UPV. Použití je přísně omezeno na: status epilepticus, těžkou abstinenci (delirium tremens) a procedurální analgosedaci."
        ]
      },
      {
        "title": "4. Opioidy a neuromuskulární blokáda (Myorelaxancia) s TOF monitorací",
        "refs": ["ou2025", "padis2025", "nmb"],
        "paragraphs": [
          "Volba opioidů na JIP (LF OU 2025): (1) Sufentanil: Silný syntetický m-opioid (7–10x účinnější než fentanyl), lipofilní, rychlý nástup, bez aktivních metabolitů; při dlouhodobé infuzi se kumuluje v tucích s prodloužením účinku; (2) Fentanyl: Lipofilní, delší poločas eliminace; (3) Remifentanil: Vysoce selektivní ultra-krátce působící m-opioid metabolizovaný nespecifickými tkáňovými a plazmatickými esterázami (poločas 3–5 minut!). Nekumuluje ani při těžkém selhání jater a ledvin. Výborně řiditelný, umožňuje bleskové neurologické zhodnocení po zastavení infuze – ideální pro neurochirurgické a kardiochirurgické pacienty; (4) Morfin: Histaminogenní (riziko hypotenze a bronchospasmu), kumulace aktivních neurotoxických metabolitů (morfin-6-glukuronid) při renálním selhání – na JIP není lékem 1. volby.",
          "Neuromuskulární blokáda (Periferní myorelaxancia): Indikována pouze u těžkého ARDS s refrakterní desynchronizací (cisatrakurium kontinuálně v prvních 24–48 h) nebo k usnadnění intubace. Dlouhodobé podávání vede k těžké myopatii kriticky nemocných (CINM)!",
          "Monitorace relaxace – Train-of-Four (TOF): Elektrická stimulace n. ulnaris (nebo n. facialis) 4 stimuly po sobě: TOF 4/4 = žádná blokáda; TOF 1–2/4 = cílová úroveň hluboké relaxace pro ARDS (90% blokáda receptorů); TOF 0/4 = úplná blokáda (hrozí předávkování a atrofie svalů!)."
        ]
      },
      {
        "title": "5. Prevence deliria a ošetřovatelský balíček ABCDEF",
        "refs": ["ou2025", "icuBundle", "padis2025"],
        "paragraphs": [
          "ICU balíček ABCDEF (evidence-based protokol snižující mortalitu a délku hospitalizace dle LF OU 2025):",
          "(A) Assess, prevent and manage pain: Pravidelné hodnocení bolesti (BPS/CPOT à 4 h) a promptní léčba (analgesia-first);",
          "(B) Both Spontaneous Awakening and Spontaneous Breathing Trials (SAT + SBT): Každodenní koordinované ranní přerušení sedace ('sedativní prázdniny') s následným testem spontánního dýchání při toleranci probuzení;",
          "(C) Choice of analgesia and sedation: Preferenční volba nebenzodiazepinových sedativ (dexmedetomidin, propofol) a titrace k mělké sedaci (RASS -1 až 0);",
          "(D) Delirium: assess, prevent and manage: Pravidelný screening deliria testem CAM-ICU každých 8–12 hodin. Nefarmakologická prevence: kognitivní stimulace, orientace časem a prostorem (hodiny, kalendář na pokoji), zachování cirkadiánního rytmu (tlumení hluku a světla v noci), brýle a naslouchadla pacienta, časné odstranění zbytečných katétrů a pout;",
          "(E) Early mobility and exercise: Časná rehabilitace, pasivní a aktivní cvičení na lůžku, vertikalizace a posazování i ventilovaných pacientů;",
          "(F) Family engagement and empowerment: Zapojení rodiny do ošetřovatelské péče, neomezené návštěvy, eliminace psychotraumatizace."
        ]
      }
    ],
    "corrections": [
      "Plošná hluboká sedace pacientů na UPV je překonaná a škodlivá. Standardem je mělká kooperativní analgosedace (RASS -1 až 0) s každodenními sedativními prázdninami (SAT).",
      "Rutinní podávání benzodiazepinů (midazolam) k analgosedaci na JIP je obsoletní. Benzodiazepiny jsou silně prodelirantní, kumulují se v těle a prodlužují dobu závislosti na ventilátoru.",
      "Propofolový infuzní syndrom (PRIS) hrozí při dávkách nad 4–5 mg/kg/h déle než 48 h. Projevuje se náhlou refrakterní bradykardií, asystolií a těžkou metabolickou acidózou s mortalitou přes 33 %.",
      "Dexmedetomidin nepůsobí depresi dechového centra, proto jej není nutné vysazovat před extubací a je lékem volby pro klidné odpojení od UPV.",
      "Nejprve musí být zajištěna adekvátní analgezie opioidy (analgesia-first). Samotná sedativa bez analgetika bolest neodstraní, pouze potlačí motorické projevy utrpení pacienta!"
    ],
    "checks": [
      {
        "question": "Co znamená princip 'Analgesia-First' a koncept CCC v intenzivní péči?",
        "answer": "Analgesia-first znamená přednostní zaléčení bolesti opioidy před podáním sedativ. Koncept CCC (Comfort, Cooperative, Calm) definuje cíl mělké sedace, kdy je pacient klidný, bez bolesti a schopen spolupráce.",
        "refs": ["ou2025", "padis2025"]
      },
      {
        "question": "Jaké je cílové rozmezí skóre RASS pro běžného pacienta na JIP a kdy je indikována hluboká sedace?",
        "answer": "Cílem je RASS -1 až 0 (lehká sedace až bdělý klid). Hluboká sedace (RASS -4 až -5) je vyhrazena pouze pro intrakraniální hypertenzi u kraniotraumatu, refrakterní status epilepticus a těžký ARDS s myorelaxací.",
        "refs": ["rassQUT", "ou2025"]
      },
      {
        "question": "Jaká jsou diagnostická kritéria propofolového infuzního syndromu (PRIS) a při jakých dávkách hrozí?",
        "answer": "Hrozí při dávkách > 4–5 mg/kg/h déle než 48 hodin. Projevy: náhlá refrakterní bradykardie, asystolie, těžká laktátová acidóza, rhabdomyolýza, hyperkalémie a selhání ledvin (mortalita > 33 %).",
        "refs": ["propofolICU", "ou2025"]
      },
      {
        "question": "Jaké jsou hlavní přednosti dexmedetomidinu oproti propofolu a midazolamu?",
        "answer": "Působí přes alfa-2 receptory v locus coeruleus, navozuje spánek podobný fyziologickému, ze kterého je pacient snadno probuditelný, NEZPŮSOBUJE depresi dechu (lze podat i po extubaci) a významně snižuje incidenci deliria.",
        "refs": ["dexICU", "ou2025"]
      },
      {
        "question": "Co znamenají jednotlivé kroky ošetřovatelského balíčku ABCDEF?",
        "answer": "A = Assess pain, B = Both SAT and SBT (sedativní prázdniny + test dýchání), C = Choice of sedation, D = Delirium assessment (CAM-ICU), E = Early mobility, F = Family engagement.",
        "refs": ["icuBundle", "ou2025"]
      }
    ]
  },
  "B23": {
    "title": "Levostranné srdeční selhání – příčiny, patofyziologie, diagnostika, diferenciální diagnostika, klinický obraz, terapie",
    "reviewed": "2026-11-03",
    "edition": "LF OU 2025 (kap. 6, J. Máca) · ESC Heart Failure 2026 · Stevenson/Nohria",
    "scope": "Dospělí: HFrEF vs. HFpEF, kardiogenní plicní edém vs. kardiogenní šok, hemodynamické profily dle Stevensona (Warm/Cold, Wet/Dry), Killipova klasifikace, farmakoterapie (furosemid, nitroglycerin, dobutamin, noradrenalin, levosimendan), NIV (CPAP/BiPAP) a mechanické srdeční podpory (Impella, IABP, VA-ECMO).",
    "opening": "Akutní levostranné srdeční selhání je život ohrožující stav charakterizovaný náhlou neschopností levé komory zajistit adekvátní srdeční výdej k pokrytí metabolických nároků tkání a/nebo provázený plicním venózním městnáním v důsledku zvýšených plnicích tlaků (LF OU 2025). U zkoušky začínám klasifikací dle ejekční frakce (HFrEF, HFmrEF, HFpEF) a Killipa u AIM, popíši patofyziologii hydrostatického plicního edému (PCWP > 18–25 mmHg) a kardiogenního šoku, představím klinické profily dle Stevensona/Nohrii (dominantní Warm-Wet vs. Cold-Wet), vysvětlím akutní léčbu plicního edému polohou, kyslíkem, NIV přetlakem a vazodilatancii s diuretiky, zdůrazním zákaz diuretik u hypotenze a předvedu eskalaci kardiogenního šoku s revaskularizací (PCI do 2 h), inotropiky (dobutamin, levosimendan), vazopresory a mechanickými podporami (Impella, VA-ECMO).",
    "openingRefs": ["ou2025", "hfESC2026", "pulmonaryEdema"],
    "sections": [
      {
        "title": "1. Definice, klasifikace (HFrEF / HFpEF) a etiologie akutního selhání LK",
        "refs": ["ou2025", "hfESC2026"],
        "paragraphs": [
          "Definice (Jan Máca, LF OU 2025; ESC 2026): Syndrom charakterizovaný typickými symptomy (klidová či námahová dušnost, ortopnoe, únava) a fyzikálními známkami (chrůpky na plicích, zvýšená náplň krčních žil, cval S3) způsobenými strukturální nebo funkční abnormalitou srdce, která vede ke zvýšení intrakardiálních plnicích tlaků a/nebo snížení srdečního výdeje v klidu či při zátěži.",
          "Klasifikace dle ejekční frakce levé komory (LVEF, LF OU 2025): (1) HFrEF (Heart Failure with reduced EF): LVEF < 40 % – těžká systolická dysfunkce; (2) HFmrEF (mildly reduced EF): LVEF 40–49 %; (3) HFpEF (preserved EF): LVEF >= 50 % – převažuje diastolická dysfunkce (porucha relaxace a compliance LK při normální ejekční frakci, časté u hypertoniků, žen a seniorů).",
          "Killipova klasifikace u akutního infarktu myokardu (LF OU Tabulka na str. 115): Třída I: Bez známek srdečního selhání (mortalita 6 %); Třída II: Mírné až středně těžké selhání – vlhké chrůpky na bázích plic, 3. srdeční ozva (cval S3), zvýšená náplň krčních žil (mortalita 17 %); Třída III: Těžké městnání, plicní edém s chrůpky nad 50 % plicních polí (mortalita 38 %); Třída IV: Kardiogenní šok – hypotenze, oligurie, vazokonstrikce (mortalita > 60–80 %!).",
          "Etiologie akutního selhání LK: (1) Akutní koronární syndrom (STEMI, NSTEMI – ischémie myokardu tvoří 70 % příčin); (2) Mechanické komplikace AIM: ruptura papilárního svalu s akutní masivní mitrální regurgitací, ruptura mezikomorového septa (VSD), ruptura volné stěny LK; (3) Akutní hypertenzní krize (afterload mismatch vyvolá bleskový plicní edém); (4) Tachyarytmie (fibrilace síní s rychlou komorovou odpovědí) nebo bradyarytmie (AV blokáda III. stupně); (5) Akutní myokarditida, Takotsubo kardiomyopatie, poporodní kardiomyopatie; (6) Akutní dekompenzace chronického SS (infekce, anémie, vynechání medikace, retence tekutin)."
        ]
      },
      {
        "title": "2. Patofyziologie kardiogenního plicního edému a hemodynamické profily (Stevenson)",
        "refs": ["ou2025", "hfESC2026", "pulmonaryEdema"],
        "paragraphs": [
          "Patofyziologie hydrostatického plicního edému (LF OU kap. 6): Selhání čerpací funkce levé komory vede k retenci krve v LK -> retrográdní vzestup end-diastolického tlaku v LK (LVEDP) -> vzestup tlaku v levé síni a plicních žilách -> zvýšení kapilárního tlaku v plicích (tlak v zaklínění plicnice PCWP > 18–25 mmHg, norma 6–12 mmHg). Hydrostatický tlak překoná onkotický tlak plazmatických bílkovin (cca 25 mmHg) -> masivní filtrace tekutiny chudé na bílkoviny (transsudátu) přes intaktní alveolokapilární membránu nejprve do intersticia a následně do lumen alveolů. Dochází ke kolapsu alveolů, poklesu compliance, pravolevému intrapulmonálnímu zkratu a těžké hypoxémii.",
          "Hemodynamická klasifikace dle Stevensona a Nohrii (LF OU obr. 6.1): Dělí pacienty dle přítomnosti městnání (Wet x Dry) a tkáňové hypoperfuze (Warm x Cold):",
          "1. Warm-Dry (Teplý a suchý): Kompenzovaný pacient, normální perfuze i plnicí tlaky;",
          "2. Warm-Wet (Teplý a mokrý – nejčastější forma, cca 70 %): Dominují známky městnání (plicní edém, ortopnoe, chrůpky, zvýšená náplň krčních žil), ale periferní perfuze je ZACHOVÁNA (teplá akra, normální TK, laktát v normě). Léčba: Vazodilatancia (nitroglycerin) + kličková diuretika (furosemid) + NIV;",
          "3. Cold-Dry (Studený a suchý): Hypoperfuze bez městnání (hypovolemie, excesivní diuretická léčba) -> opatrná volumoterapie krystaloidy!;",
          "4. Cold-Wet (Studený a mokrý – klasický kardiogenní šok): Těžká orgánová hypoperfuze SOUČASNĚ s masivním plicním městnáním (systola < 90 mmHg, oligurie, chladná bledá akra, laktát > 2 mmol/l, chrůpky). Léčba: Inotropika (dobutamin), vazopresory (noradrenalin), emergentní revaskularizace, mechanická srdeční podpora. Zkoušková past: DIURETIKA JSOU U ŠOKU V ÚVODU ZAKÁZÁNA!"
        ]
      },
      {
        "title": "3. Diagnostika: Biomarkery (NT-proBNP), EKG a echokardiografie",
        "refs": ["ou2025", "hfESC2026"],
        "paragraphs": [
          "Laboratorní diagnostika a natriuretické peptidy (LF OU 2025): (1) NT-proBNP / BNP: Vyplavují se z komorového myokardu při zvýšeném napětí a rozepětí stěny komory. Zkoušková hodnota: Mají EXTRÉMNĚ VYSOKOU NEGATIVNÍ PREDIKTIVNÍ HODNOTU! U akutní dušnosti hodnota NT-proBNP < 300 pg/ml (nebo BNP < 100 pg/ml) spolehlivě VYLUČUJE akutní srdeční selhání jako příčinu obtíží (hledat CHOPN, astma, pneumonii). Pozitivní cut-off pro diagnózu akutního SS je závislý na věku: < 50 let > 450 pg/ml, 50–75 let > 900 pg/ml, > 75 let > 1800 pg/ml; (2) Vysoce senzitivní troponin (hs-cTnI / hs-cTnT): k průkazu akutního infarktu myokardu jako spouštěče; (3) Krevní plyny (Astrup): hypoxémie, těžká metabolická acidóza s laktátem > 2 mmol/l u kardiogenního šoku; (4) Renální a jaterní funkce: vzestup urey, kreatininu a transamináz při kardiorenálním syndromu a městnání v játrech.",
          "Elektrokardiografie (EKG): Normální EKG činí diagnózu akutního srdečního selhání vysoce nepravděpodobnou (< 2 %). Hledají se známky AIM (elevace ST, Q kmity, blokáda levého raménka LBBB), arytmie (fibrilace síní) či známky hypertrofie LK.",
          "Transtorakální echokardiografie (TTE): Klíčové bedside vyšetření: hodnotí systolickou funkci LK (LVEF, globální kontraktilita, poruchy kinetiky – akinéza/hypokinéza), diastolické plnicí tlaky (poměr E/e' > 14 svědčí pro vysoký plnicí tlak LK), akutní chlopenní vady (mitrální/aortální regurgitace), perikardiální výpotek (tamponáda) a dilataci a kolapsibilitu dolní duté žíly (VCI > 21 mm bez respiračního kolapsu svědčí pro městnání).",
          "Plicní ultrazvuk (LUS): Průkaz mnohočetných bilaterálních B-linií ('plicní komety' > 3 v jednom mezižebří) prokazuje intersticiální plicní edém; absence B-linií svědčí proti plicnímu městnání."
        ]
      },
      {
        "title": "4. Terapie akutního kardiogenního plicního edému",
        "refs": ["ou2025", "hfESC2026", "pulmonaryEdema"],
        "paragraphs": [
          "Akutní management plicního edému (Warm-Wet profil při zachovaném TK):",
          "1. Polohování: Okamžitá poloha v polosedě se svěšenými dolními končetinami (snižuje venózní návrat / preload a ulevuje bránici);",
          "2. Kyslík a Neinvazivní ventilace (NIV – CPAP / BiPAP, LF OU 2025): Metoda první volby při dušnosti a SpO2 < 90 %! Aplikace přetlaku maskou: CPAP 5–10 cmH2O (nebo BiPAP s tlakovou podporou PS 5–10 cmH2O). Mechanismy účinku: (a) PEEP mechanicky vytlačuje tekutinu z alveolů zpět do kapilár a intersticia; (b) Otevírá kolabované alveoly a zvyšuje FRC; (c) Pozitivní nitrohrudní tlak přímo SNIŽUJE TRANSMURÁLNÍ TLAK LK A TÍM SNIŽUJE JEJÍ AFTERLOAD -> usnadňuje vyprázdnění LK a zvyšuje srdeční výdej! NIV dramaticky snižuje potřebu intubace a mortalitu;",
          "3. Intravenózní vazodilatancia: Nitroglycerin i.v. (nebo isosorbid dinitrát) – LÉK VOLBY u pacientů s plicním edémem a systolickým TK > 110 mmHg (často hypertenzní krize). Iniciálně bolusy 1–2 mg i.v. nebo kontinuální infuze 10–200 mikrog/min s titrací dle TK. Venodilatací snižuje preload a arteriální dilatací snižuje afterload LK;",
          "4. Kličková diuretika: Furosemid v počáteční dávce 20–40 mg i.v. bolus u nemocného bez předchozí medikace (nebo 2–2.5násobek chronické perorální dávky). Vyvolává časnou venodilataci (do 5–15 min) a následnou saluretickou diurézu. ZKOUŠKOVÁ ZÁSADA LF OU: Diuretika NIKDY nepodávat pacientovi s hypotenzí (TKs < 90 mmHg)! Prohloubila by hypoperfuzi a vyvolala zástavu oběhu;",
          "5. Opioidy: Morfin (2–3 mg i.v. frakcionovaně) tlumí dušnost, hyperaktivitu sympatiku a úzkost. Podávat však velmi obezřetně – rutinní podávání není doporučeno pro riziko deprese dechu a nutnosti intubace."
        ]
      },
      {
        "title": "5. Kardiogenní šok: Hemodynamická kritéria, inotropika a mechanické srdeční podpory (MCS)",
        "refs": ["ou2025", "hfESC2026"],
        "paragraphs": [
          "Definice kardiogenního šoku (Cold-Wet profil): Stav primárního srdečního selhání vedoucí k těžké tkáňové hypoperfuzi. Hemodynamická kritéria: (1) Perzistující hypotenze: systolický TK < 90 mmHg déle než 30 minut (nebo nutnost vazopresorů k udržení MAP >= 65 mmHg); (2) Snížený srdeční index (Cardiac Index): CI < 2.2 l/min/m2 (bez podpory) nebo < 1.8 l/min/m2; (3) Zvýšené plnicí tlaky LK: PCWP > 15 mmHg; (4) Známky orgánové hypoperfuze: sérový laktát > 2.0 mmol/l, oligurie (< 0.5 ml/kg/h), studená mramorovaná kůže, alterace vědomí. Mortalita dosahuje 40–60 %.",
          "Terapeutický algoritmus kardiogenního šoku (LF OU 2025):",
          "1. Kauzální terapie: Okamžitý transport na katetrizační sál – urgentní selektivní koronarografie a perkutánní koronární intervence (PCI) do 2 hodin od diagnózy u AIM!;",
          "2. Vazoaktivní farmakoterapie:",
          "(a) Inotropikum 1. volby: Dobutamin (syntetický beta-1 agonista, dávka 2.5–20 mikrog/kg/min) – zvyšuje kontraktilitu myokardu a srdeční výdej. Při tachykardii a arytmiích zvážit Levosimendan (kalciový senzitizér, inodilatátor zvyšující kontraktilitu bez zvýšení spotřeby O2 myokardem a dilatující plicní i periferní cévy) nebo milrinon (inhibitor PDE-3);",
          "(b) Vazopresor 1. volby: Noradrenalin (titrovat od 0.05 mikrog/kg/min) – lék volby k udržení perfuzního tlaku MAP >= 65 mmHg a zajištění koronární perfuze. Pozor: vysoké dávky noradrenalinu zvyšují afterload LK a mohou zhoršit srdeční výdej!;",
          "3. Přístrojová mechanická podpora oběhu (Mechanical Circulatory Support – MCS, LF OU 2025): Indikována u refrakterního šoku nereagujícího na inotropika a vazopresory: ",
          "(a) Impella (perkutánní mikroaxiální pumpa): Zavádí se z a. femoralis retrográdně přes aortální chlopeň přímo do dutiny levé komory. Aktivně nasává krev z LK a přečerpává ji do vzestupné aorty průtokem 2.5–5.0 l/min (Impella CP / 5.5). Přímo provádí tzv. UNLOADING levé komory – snižuje objem i tlak v LK, snižuje napětí stěny a spotřebu O2 myokardem a zvyšuje MAP a orgánovou perfuzi;",
          "(b) Veno-arteriální ECMO (VA-ECMO): Krev je odebírána ze v. femoralis přes oxygenátor a vracena pod tlakem do a. femoralis. Zajišťuje plný srdeční výdej (4–6 l/min) i oxygenaci. Zkoušková past: Retrográdní tok v aortě zvyšuje afterload LK a může vést k jejímu přetížení a plicnímu edému -> nutný venting levé komory (např. kombinace Impella + VA-ECMO = 'ECPELLA');",
          "(c) Intraaortální balonková kontrapulzace (IABP): Balonek v descendentní aortě synchronizovaný s EKG – nafukuje se v diastole (zvyšuje koronární perfuzi), vyfukuje těsně před systolou (snižuje afterload LK). U čistého kardiogenního šoku při AIM dnes nemá mortalitní benefit (studie IABP-SHOCK II), zůstává však přísně indikována u akutních mechanických komplikací AIM (ruptura papilárního svalu, defekt septa) jako most k operaci."
        ]
      }
    ],
    "corrections": [
      "Kličková diuretika (furosemid) se NIKDY nesmí podávat pacientovi v kardiogenním šoku s hypotenzí (TKs < 90 mmHg). Diuretika sníží intravaskulární objem a vyvolají oběhové zhroucení. Patří výhradně pacientům s hypertenzním městnáním (Warm-Wet).",
      "Normální hodnota natriuretických peptidů (NT-proBNP < 300 pg/ml) spolehlivě vylučuje akutní srdeční selhání. Má extrémní negativní prediktivní hodnotu.",
      "Neinvazivní ventilace (NIV s PEEP) u kardiogenního plicního edému nepomáhá pouze oxygenaci, ale mechanicky snižuje transmurální tlak stěny LK a tím snižuje její afterload, což přímo zlepšuje funkci selhávající komory.",
      "Intraaortální balonková kontrapulzace (IABP) nesnižuje mortalitu u běžného kardiogenního šoku po infarktu myokardu. Je indikována především u akutních mechanických komplikací (ruptura papilárního svalu, VSD).",
      "Veno-arteriální ECMO (VA-ECMO) sice zachrání systémovou perfuzi, ale retrográdním tokem v aortě dramaticky zvyšuje afterload levé komory, což může způsobit její dilataci a trombózu. Vyžaduje aktivní venting levé komory (např. Impellou)."
    ],
    "checks": [
      {
        "question": "Jaké jsou 4 hemodynamické fenotypy akutního srdečního selhání dle Stevensona a Nohrii?",
        "answer": "1. Warm-Dry (kompenzovaný), 2. Warm-Wet (městnání bez hypoperfuze – plicní edém), 3. Cold-Dry (hypoperfuze z hypovolemie), 4. Cold-Wet (kardiogenní šok – městnání + hypoperfuze).",
        "refs": ["ou2025", "hfESC2026"]
      },
      {
        "question": "Jaká je akutní farmakologická a ventilační léčba kardiogenního plicního edému u hypertenzního pacienta?",
        "answer": "Poloha v polosedě se svěšenými končetinami, NIV (CPAP 5–10 cmH2O), intravenózní nitroglycerin (titrace k poklesu afterloadu) a intravenózní furosemid (20–40 mg i.v.).",
        "refs": ["ou2025", "pulmonaryEdema"]
      },
      {
        "question": "Jaká jsou definiční kritéria kardiogenního šoku?",
        "answer": "Systolický TK < 90 mmHg déle než 30 min (nebo nutnost vazopresorů), plnicí tlak PCWP > 15 mmHg, srdeční index CI < 2.2 l/min/m2 a známky hypoperfuze (laktát > 2 mmol/l, oligurie, studená akra).",
        "refs": ["hfESC2026", "ou2025"]
      },
      {
        "question": "Jak funguje mechanická srdeční podpora Impella a v čem se liší od VA-ECMO?",
        "answer": "Impella je mikroaxiální pumpa přečerpávající krev přímo z dutiny LK do aorty (2.5–5 l/min), čímž aktivně provádí unloading (odlehčení) LK. VA-ECMO odebírá krev ze žíly a vrací do tepny, čímž afterload LK naopak zvyšuje.",
        "refs": ["ou2025"]
      },
      {
        "question": "Jaká je mezní hodnota NT-proBNP k bezpečnému vyloučení akutního srdečního selhání u dušného pacienta?",
        "answer": "Hodnota NT-proBNP < 300 pg/ml (nebo BNP < 100 pg/ml) má téměř 98% negativní prediktivní hodnotu a spolehlivě akutní srdeční selhání vylučuje.",
        "refs": ["hfESC2026", "ou2025"]
      }
    ]
  },
  "B24": {
    "title": "Pravostranné srdeční selhání – příčiny, patofyziologie, diagnostika, diferenciální diagnostika, klinický obraz, terapie",
    "reviewed": "2026-11-03",
    "edition": "LF OU 2025 (kap. 6, J. Máca) · ESC 2022 PH guidelines · ACVC/ESC 2024",
    "scope": "Dospělí: fyziologie a zranitelnost pravé komory (PK), ventrikulární interdependence a posun septa, akutní cor pulmonale vs. infarkt PK, masivní plicní embolie, klinické známky systémového městnání (krční žíly, hepatomegalie bez chrůpků), echokardiografie (TAPSE < 17 mm, D-shape LK), terapie (noradrenalin, opatrnost s tekutinami, dobutamin, inhalační NO).",
    "opening": "Pravostranné srdeční selhání je syndrom charakterizovaný neschopností tenkostěnné pravé komory zajistit adekvátní krevní průtok plicním řečištěm při fyziologickém centrálním venózním tlaku, vedoucí k systémovému venóznímu městnání a sekundárnímu selhání plnění levé komory (LF OU 2025). U zkoušky začínám anatomií a zranitelností tenkostěnné PK (vysoká citlivost na afterload), vysvětlím fenomén ventrikulární interdependence (dilatace PK utlačí mezikomorové septum doleva a zkolabuje levou komoru), odliším akutní přetížení tlakem (masivní plicní embolie – akutní cor pulmonale) od infarktu PK, popíši klinický obraz (masivní náplň krčních žil, hepatomegalie a čistý poslech plic bez chrůpků!), představím echokardiografické parametry (TAPSE < 17 mm, D-shape LK), zdůrazním extrémní nebezpečí nekritického podávání tekutin a předvedu cílenou terapii (noradrenalin k zajištění perfuze stěny PK, nízké dávky dobutaminu, inhalační vazodilatancia iNO a protektivní ventilace bez vysokého PEEP).",
    "openingRefs": ["ou2025", "rvAHA", "phESC"],
    "sections": [
      {
        "title": "1. Anatomie, fyziologie a zranitelnost pravé komory (PK)",
        "refs": ["ou2025", "rvAHA"],
        "paragraphs": [
          "Specifika anatomie a fyziologie PK (Jan Máca, LF OU 2025): Pravá komora je tenkostěnná struktura poloměsíčitého tvaru obtáčející silnostěnnou levou komoru. Za normálních okolností pumpuje stejný minutový objem jako LK, ale do nízkotlakého plicního řečiště s nízkou cévní rezistencí (plicní vaskulární rezistence PVR činí pouze cca 1/10 systémové SVR). Tloušťka stěny PK je pouhé 3–5 mm.",
          "Zranitelnost PK vůči afterloadu: Pravá komora je vysoce poddajná a dobře toleruje objemové přetížení (preload), ale je EXTRÉMNĚ CITLIVÁ NA NÁHLÝ NÁRŮST TLAKOVÉHO ODPORU (afterloadu)! Akutní vzestup tlaku v a. pulmonalis (např. při masivní plicní embolii) nedokáže tenkostěnná PK překonat hypertrofií -> okamžitě dilatace PK, nárůst napětí stěny a pokles systolické funkce PK.",
          "Ventrikulární interdependence (komorová vzájemnost): Obě komory sdílejí mezikomorové septum a jsou uzavřeny v tuhém, neroztažitelném vaku perikardu. Akutní dilatace PK vede k posunu mezikomorového septa směrem do dutiny levé komory (tzv. D-shape levé komory). To způsobí mechanické stlačení dutiny LK, zhoršení jejího diastolického plnění (drastický pokles preloadu LK) -> kritický pokles systémového srdečního výdeje a hypotenze!",
          "Koronární perfuze PK: Na rozdíl od LK (která je perfundována výhradně v diastole) je tenkostěnná PK perfundována v systole i diastole. Při akutní dilataci PK dochází k enormnímu nárůstu intramurálního napětí stěny PK a současně systémová hypotenze snižuje aortální perfuzní tlak -> kritická ischémie volné stěny PK, která spouští spirálu smrti selhání PK (dilatace -> posun septa -> hypotenze -> ischémie PK -> další dilatace)."
        ]
      },
      {
        "title": "2. Etiologie akutního a chronického pravostranného srdečního selhání",
        "refs": ["ou2025", "rvAHA", "phESC"],
        "paragraphs": [
          "Rozdělení etiologie akutního selhání PK (LF OU kap. 6):",
          "1. Akutní tlakové přetížení (Akutní Cor Pulmonale – náhlý vzestup PVR): (a) Masivní plicní embolie (mechanická obstrukce větvení plicnice trombem + masivní neurohumorální vazokonstrikce zprostředkovaná serotoninem a tromboxanem – nejčastější příčina akutního cor pulmonale!); (b) Těžký ARDS s hypoxickou plicní vazokonstrikcí (Eulerův-Liljestrandův reflex) a mikroangiotrombózami; (c) Iatrogenní poškození agresivní UPV (vysoký PEEP > 12–15 cmH2O a vysoké dechové objemy stlačují intraalveolární kapiláry a prudce zvyšují PVR); (d) Status asthmaticus s dynamickou hyperinflací.",
          "2. Akutní selhání kontraktility myokardu PK: (a) Infarkt pravé komory: Vzniká typicky při proximálním uzávěru a. coronaria dextra (ACD) provázejícím spodní (diafragmatický) infarkt myokardu LK (až ve 30–50 % spodních infarktů); (b) Akutní myokarditida s postižením PK; (c) Dysfunkce štěpu PK po transplantaci srdce; (d) Po kardiochirurgických výkonech v mimotělním oběhu.",
          "3. Dekompenzace chronické plicní hypertenze (Chronické Cor Pulmonale): Prekapilární plicní arteriální hypertenze (PAH), pokročilá CHOPN, idiopatická plicní fibróza, chronická tromboembolická plicní nemoc (CTEPH).",
          "4. Postkapilární přetížení při levostranném srdečním selhání: Celkově nejčastější příčina pravostranného selhání v klinické praxi! Dlouhodobé městnání z levého srdce (mitrální vady, HFrEF) se retrográdně přenáší přes plicní kapiláry na pravou komoru (skupina 2 plicní hypertenze)."
        ]
      },
      {
        "title": "3. Klinický obraz a diferenciální diagnostika: Proč jsou plíce čisté?",
        "refs": ["ou2025", "rvAHA"],
        "paragraphs": [
          "Klinický obraz pravostranného selhání (LF OU 2025):",
          "1. Příznaky systémového venózního městnání (vysoký CVP): (a) Masivní zvýšená náplň a pulsace krčních žil (viditelné i v sedě v úhlu 45–90°); (b) Bolestivá hepatomegalie z překrvení jaterního parenchymu s pozitivním hepatojugulárním refluxem; (c) Městnání ve splanchniku: ascites, nechutenství, pocit plnosti, malabsorpce; (d) Symetrické periferní otoky dolních končetin (prosáknutí pretibiálně a kolem kotníků, u ležícího pacienta v presakrální oblasti) až anasarka; (e) Cyanóza akrálních partií; (f) Trikuspidální regurgitace: holosystolický šelest nad dolním sternem akcentovaný při nádechu (Carvallovo znamení).",
          "2. Příznaky nízkého systémového výdeje (low output): Těžká hypotenze, tachykardie, chladná bledá akra, oligurie a laktátová acidóza v důsledku selhání plnění levé komory.",
          "ZKOUŠKOVÝ ROZDÍL PROTI LEVOSTRANNÉMU SELHÁNÍ (LF OU 2025): U čistého pravostranného selhání (např. masivní PE nebo izolovaný infarkt PK) JSOU PLÍCE PŘI AUSKULTACI ZCELA ČISTÉ, BEZ CHRŮPKŮ A BEZ ZNÁMEK PLICNÍHO EDÉMU! Krev vázne před plícemi v systémovém žilním řečišti, do plicního oběhu naopak proudí méně krve -> plíce jsou 'suché' a na RTG je obraz oligémie plicních polí (Westermarkovo znamení u PE)."
        ]
      },
      {
        "title": "4. Diagnostika: Bedside echokardiografie, EKG a laboratorní markery",
        "refs": ["ou2025", "phESC", "rvAHA"],
        "paragraphs": [
          "Transtorakální echokardiografie (TTE) – metoda volby u lůžka:",
          "1. Dilatace a dysfunkce PK: Poměr velikosti pravé komory k levé komoře (PK/LK ratio > 0.9 v apikální 4-dutinové projekci značí dilataci PK; PK je za normálních okolností menší než LK);",
          "2. Systolická funkce PK – TAPSE (Tricuspid Annular Plane Systolic Excursion): Pohyb anulu trikuspidální chlopně v systole. Zkoušková norma: TAPSE >= 17 mm. Hodnota TAPSE < 17 mm (nebo tkáňový doppler S' < 9.5 cm/s) prokazuje těžkou systolickou dysfunkci pravé komory!;",
          "3. Fenomén 'D-shape' levé komory: V krátké ose na úrovni papilárních svalů je LK normálně kruhovitá. Při přetlaku v PK mezikomorové septum oplošťuje LK do tvaru písmene 'D' (v systole značí tlakové přetížení PK, v diastole objemové přetížení);",
          "4. Vena cava inferior (VCI): Dilatovaná VCI (> 21 mm) s chybějícím inspiračním kolapsem (< 50 %) značí vysoký CVP (> 15 mmHg);",
          "5. Odhad systolického tlaku v plicnici (sPAP): Měřením rychlosti trysky trikuspidální regurgitace Bernoulliho rovnicí (sPAP = 4 x v^2 + CVP).",
          "Elektrokardiografie (EKG): Známky přetížení pravostranných oddílů: syndrom S_I Q_III T_III (hluboké S ve svodu I, patologické Q a negativní T ve svodu III – McGinn-Whiteův fenomén u plicní embolie); inkompletní či kompletní blokáda pravého raménka Tawarova (RBBB); elevace ST ve svodech V1–V3 a speciálních pravostranných svodech V3R–V4R (patognomické pro infarkt pravé komory!); P-pulmonale (hrotnaté P ve svodu II > 2.5 mm).",
          "Laboratorní vyšetření: Elevace hs-troponinu (ischémie stěny PK), vysoké NT-proBNP, elevace jaterních enzymů (městnavá 'muškátová' hepatopatie) a vzestup kreatininu (venózní renální kongesce)."
        ]
      },
      {
        "title": "5. Terapie akutního pravostranného selhání: Tekutinová past, katecholaminy a plicní vazodilatancia",
        "refs": ["ou2025", "rvAHA", "phESC"],
        "paragraphs": [
          "Základní terapeutický protokol akutního selhání PK (LF OU kap. 6):",
          "1. Kauzální léčba: (a) Okamžitá systémová trombolýza (Altepláza / rtPA 100 mg i.v. během 2 h nebo 50 mg bolus při zástavě) či chirurgická embolektomie u masivní plicní embolie s šokem; (b) Urgentní PCI a revaskularizace pravé věnčité tepny (ACD) u infarktu PK;",
          "2. ZKOUŠKOVÁ PAST Č. 1 – TEKUTINOVÝ MANAGEMENT: Pravá komora je již extrémně přetížená a dilatovaná! Nekritické podání infuzí (fluid challenge) způsobí další roztažení PK, zhorší posun septa doleva, dále stlačí levou komoru a vyvolá okamžité oběhové zhroucení! Malý bolus balancovaného krystaloidu (250–500 ml během 20 min) je přípustný POUZE při prokazatelném deficitu objemu (např. izolovaný infarkt PK bez městnání). U pacientů s městnáním a vysokým CVP jsou naopak indikována šetrná diuretika (furosemid) k odlehčení PK;",
          "3. Vazopresor 1. volby – NORADRENALIN: Klíčový lék! Noradrenalin zvyšuje systémový arteriální tlak nad tlak v plicnici -> obnovuje transmyokardiální perfuzní tlak a průtok pravou věnčitou tepnou, čímž ruší ischémii volné stěny PK. Navíc mírným beta-1 účinkem podporuje inotropii PK;",
          "4. Inotropika: Dobutamin v nízkých dávkách (2.5–5.0 mikrog/kg/min) – zvyšuje kontraktilitu PK. Vyšší dávky jsou nevhodné pro tachykardii a riziko arytmií. Alternativou je Levosimendan (zvyšuje kontraktilitu PK a současně vyvolává mírnou vazodilataci plicnice bez zvýšení spotřeby kyslíku);",
          "5. Selektivní snížení afterloadu PK (Plicní vazodilatancia): Inhalační oxid dusnatý (iNO, 10–20 ppm) nebo inhalační prostacyklin (epoprostenol). Aplikují se inhalačně do dýchacího okruhu -> způsobují vazodilataci POUZE v plicním řečišti, snižují odpor v plicnici a odlehčují PK, aniž by vyvolaly systémovou hypotenzi!;",
          "6. Specifika mechanické ventilace u selhání PK: Vyvarovat se hypoxie, hyperkapnie a acidózy (všechny tři faktory vyvolávají masivní vazokonstrikci plicnice!). Ventilace musí být přísně protektivní: nízké dechové objemy (6 ml/kg PBW) a nízký PEEP (5–8 cmH2O) – vysoký PEEP stlačuje plicní kapiláry a prudce zvyšuje afterload PK!"
        ]
      }
    ],
    "corrections": [
      "Masivní infuze tekutin u akutního pravostranného selhání s dilatací PK jsou přísně kontraindikovány! Povedou k další dilataci PK, posunu mezikomorového septa doleva, stlačení levé komory a fatálnímu poklesu systémového srdečního výdeje.",
      "U čistého pravostranného selhání (masivní plicní embolie, infarkt PK) jsou plíce při auskultaci zcela čisté bez chrůpků. Přítomnost chrůpků a plicního edému svědčí pro levostranné srdeční selhání.",
      "Při selhání pravé komory je lékem volby noradrenalin. Nejenže udržuje systémový tlak, ale především obnovuje perfuzní tlak pravé věnčité tepny a odstraňuje ischémii stěny PK.",
      "Vysoký PEEP na ventilátoru je u akutního selhání PK nebezpečný – stlačuje plicní cévy, zvyšuje plicní vaskulární rezistenci (PVR) a prohlubuje dilataci a selhání pravé komory.",
      "Echokardiografický parametr TAPSE < 17 mm značí závažnou systolickou dysfunkci pravé komory a je klíčovým prognostickým markerem u plicní embolie a plicní hypertenze."
    ],
    "checks": [
      {
        "question": "Co je to ventrikulární interdependence a jak akutní dilatace pravé komory ovlivňuje levou komoru?",
        "answer": "Obě komory jsou v pevném perikardu a sdílejí septum. Akutní dilatace PK přetlačí mezikomorové septum doleva (D-shape LK), což mechanicky utlačí levou komoru, zabrání jejímu plnění a způsobí drastický pokles srdečního výdeje a hypotenzi.",
        "refs": ["ou2025", "rvAHA"]
      },
      {
        "question": "Jaký je hlavní rozdíl ve fyzikálním nálezu na plicích mezi levostranným a čistým pravostranným srdečním selháním?",
        "answer": "U levostranného selhání jsou přítomny vlhké chrůpky z plicního edému. U čistého pravostranného selhání jsou plíce auskultačně zcela čisté bez chrůpků, protože krev vázne v systémovém žilním řečišti před plícemi.",
        "refs": ["ou2025"]
      },
      {
        "question": "Proč je při akutním pravostranném selhání s hypotenzí lékem 1. volby noradrenalin?",
        "answer": "Zvyšuje systémový tlak nad tlak v plicnici, čímž obnovuje perfuzi pravé věnčité tepny (která je perfundována v systole i diastole) a léčí ischémii přetížené volné stěny PK.",
        "refs": ["rvAHA", "ou2025"]
      },
      {
        "question": "Jaká hodnota TAPSE při echokardiografii prokazuje systolickou dysfunkci pravé komory?",
        "answer": "Hodnota TAPSE (systolický pohyb trikuspidálního anulu) < 17 mm značí závažnou dysfunkci PK.",
        "refs": ["phESC", "ou2025"]
      },
      {
        "question": "Jaká inhalační vazodilatancia se používají k selektivnímu snížení afterloadu PK a jaká je jejich výhoda?",
        "answer": "Inhalační oxid dusnatý (iNO 10–20 ppm) nebo inhalační prostacyklin. Dilatují cévy selektivně pouze v plicích, čímž odlehčují pravé komoře bez nežádoucího vzniku systémové hypotenze.",
        "refs": ["phESC", "ou2025"]
      }
    ]
  },
"B25": {
  "title": "Plicní embolizace – příčiny, patofyziologie, klinický obraz, stádia I–IV dle LF OU, diagnostický algoritmus dle stability (ESC 2019 / AHA 2026), stratifikace rizika a léčba",
  "reviewed": "2026-11-04",
  "edition": "LF OU 2025 (díl II, kap. 6, str. 120–128) · ESC 2019 PE guidelines · AHA/ACC 2026",
  "scope": "Dospělí pacienti v intenzivní péči a na urgentním příjmu: Virchowova triáda, netrombotické embolie (tuková, plodová voda, vzduchová), patofyziologie akutního cor pulmonale a ventrikulární interdependence, klinická stádia I–IV dle LF OU, rozhodovací algoritmus u hemodynamicky nestabilního (TTE bedside) vs. stabilního pacienta (Wells, D-dimery věkově vázané, CTPA), stratifikace rizika dle ESC (high, intermediate-high, intermediate-low, low risk; sPESI skóre), antikoagulace (UFH bolus 80 IU/kg + 18 IU/kg/h, LMWH enoxaparin 1 mg/kg q12h, DOAC), systémová trombolýza (altepláza 100 mg / 50 mg u KPR), katetrizační/chirurgická embolektomie, oběhová podpora tenkostěnné PK (noradrenalin, zákaz masivních tekutin).",
  "opening": "Plicní embolie (PE) je život ohrožující stav způsobený náhlou mechanickou obstrukcí plicního arteriálního řečiště embolem s následným rozvojem akutní plicní hypertenze, přetížením pravé komory (akutní cor pulmonale) a rizikem obstrukčního šoku (LF OU 2025). U zkoušky začínám jasným rozlišením hemodynamicky NESTABILNÍHO pacienta (šok, hypotenze SBP < 90 mmHg, nutnost vazopresorů) od STABILNÍHO. U nestabilního provádím okamžitou bedside echokardiografii k potvrzení dilatace a dysfunkce PK a bez prodlení zahajuji reperfuzní léčbu (systémová trombolýza). U stabilního pacienta se řídím předtestovou klinickou pravděpodobností (Wells): při nízké/střední vylučuji vysoce senzitivním D-dimerem (s věkovou korekcí věk × 10 µg/l nad 50 let), při vysoké indikuji přímo CTPA. Léčba stojí na okamžité antikoagulaci (UFH u nestabilních/renálních, LMWH či DOAC u stabilních), systémové trombolýze u vysokého rizika (altepláza 100 mg během 2 h, nebo 50 mg bolus při KPR), katetrizační/chirurgické embolektomii při kontraindikaci trombolýzy a podpoře oběhu noradrenalinem s přísným zákazem masivní tekutinové resuscitace.",
  "openingRefs": [
    "ou2025",
    "peESC",
    "pe2026",
    "rvAcute"
  ],
  "sections": [
    {
      "title": "1. Etiologie, rizikové faktory a patofyziologie (akutní cor pulmonale)",
      "refs": [
        "ou2025",
        "peESC",
        "rvAHA"
      ],
      "paragraphs": [
        "Příčiny plicní embolizace (LF OU 2025): Více než 90–95 % případů tvoří trombembolie z hlubokých žil dolních končetin (zejména ileofemorální segment) a pánevních žil; méně často z horních končetin (kolem CŽK) nebo pravého srdce. Netrombotické embolie: (1) Tuková embolie: typicky u traumat a fraktur dlouhých kostí (femur, tibie) s latencí 24–72 hodin, triádou petechií na hrudníku/spojivkách, respiračním selháním (ARDS) a neurologickou symptomatologií; (2) Embolie plodovou vodou: katastrofická peripartální příhoda s těžkým bronchospasmem, obstrukčním šokem a bleskovým rozvojem DIC; (3) Vzduchová embolie: při zavádění/vytahování CŽK, neurochirurgických operacích vsedě či laparoskopii (auskultačně typický „mlýnský šelest“, polohování do Durantovy polohy na levý bok s Trendelenburgem a aspirace vzduchu z CŽK); (4) Nádorová a septická embolie.",
        "Rizikové faktory (Virchowova triáda – stáza, poškození endotelu, hyperkoagulabilita): Silné faktory (OR > 10): fraktury DK, náhrada kyčelního/kolenního kloubu, velké břišní/pánevní operace, polytrauma, prodělaná VTE v anamnéze, infarkt myokardu či srdeční selhání v posledních 3 měsících. Střední faktory (OR 2–9): artroskopie kolene, onkologické onemocnění a chemoterapie, hormonální antikoncepce/HRT, těhotenství a šestinedělí, centrální žilní katétr, trombofilie (Leidenská mutace f. V, mutace protrombinu G20210A, deficit AT III/proteinů C a S, antifosfolipidový syndrom). Slabé faktory: imobilizace na lůžku > 3 dny, obezita (BMI > 30), věk nad 40 let, dlouhé lety nad 6–8 hodin.",
        "Patofyziologie hemodynamického kolapsu: Mechanický uzávěr plicního řečiště + reflexní a humorální vazokonstrikce (uvolnění serotoninu z aktivovaných trombocytů a tromboxanu A2) vyvolá náhlý vzestup plicní cévní rezistence (PVR) a dotížení (afterloadu) pravé komory. Tenkostěnná PK není adaptována na akutní tlakové přetížení – dochází k akutnímu cor pulmonale, dilataci PK, trikuspidální regurgitaci a posunu mezikomorového septa doleva (interdependence komor – D-shape LK na ECHO). Posun septa utlačí dutinu levé komory, sníží její plnění (preload) a dramaticky zredukuje srdeční výdej -> systémová hypotenze a obstrukční šok. Pokles systémového tlaku a vysoký intramurální tlak v PK navíc zkolabují perfuzní tlak v pravé koronární tepně -> ischémie stěny PK, která zhoršuje její selhání (smrtící spirála).",
        "Respirační patofyziologie: Vzniká nárůst alveolárního mrtvého prostoru (ventilované, ale neperfudované okrsky plic) a ventilačně-perfuzní nepoměr (V/Q mismatch) s funkčním pravolevým zkratem v nepostižených přetížených kapilárách. Důsledkem je těžká arteriální hypoxémie (PaO2 < 8.0 kPa). Reflexní stimulace dechového centra tachypnoí vede v počátečních stádiích k hypokapnii (PaCO2 < 4.5 kPa) a respirační alkalóze; hyperkapnie se rozvíjí až terminálně při vyčerpání a zástavě oběhu."
      ]
    },
    {
      "title": "2. Klinický obraz a stádia dle LF OU (historická vs. moderní ESC)",
      "refs": [
        "ou2025",
        "peESC",
        "pe2026"
      ],
      "paragraphs": [
        "Klinická manifestace (LF OU 2025): Symptomy jsou variabilní a nespecifické. Nejčastější: náhle vzniklá klidová dušnost (až 80 %), pleuritická bolest na hrudi závislá na dýchání (70 %, typická pro periferní PE s plicním infarktem), kašel (20 %), hemoptýza (10–15 %, známka nekrózy plicního parenchymu), tachypnoe > 20/min (70 %), tachykardie > 100/min (65 %), synkopa (klíčový alarmující příznak masivní PE s tranzientním kolapsem srdečního výdeje!). U těžkých forem: cyanóza horní poloviny těla, bledá studená opocená kůže, zvýšená náplň krčních žil, hypotenze až náhlá zástava oběhu (nejčastěji s rytmem PEA).",
        "Zkouškový auskultační kontrast: Poslechový nález na plicích je u nekomplikované PE obvykle zcela fyziologický, ČISTÝ bez vlhkých chrůpků! Tento rozpor mezi dramatickou subjektivní dušností/tachypnoí a čistým poslechem plic je zásadním vodítkem odlišujícím PE od kardiogenního plicního edému a bronchopneumonie.",
        "Stádia plicní embolie dle LF OU (historické dělení z ostravských skript): (1) Stádium I: lehká PE bez hemodynamických změn, bez hypoxémie; (2) Stádium II: středně těžká PE, lehká tachykardie, lehká hypoxémie a hypokapnie, EKG změny, TK stabilní; (3) Stádium III: těžká PE s výraznými hemodynamickými změnami a hypotenzí (SBP < 90 mmHg); (4) Stádium IV: masivní PE ústící do kardiogenního/obstrukčního šoku, anurie a oběhové zástavy. U zkoušky je nutné uvést, že moderní medicína (ESC 2019 / AHA 2026) nahradila tato stádia precizní rizikovou stratifikací podle oběhové stability, biomarkerů a funkce PK."
      ]
    },
    {
      "title": "3. Diagnostický algoritmus dle hemodynamické stability (ESC / LF OU Obr. 6.3)",
      "refs": [
        "ou2025",
        "peESC",
        "peNICE"
      ],
      "paragraphs": [
        "Algoritmus u hemodynamicky NESTABILNÍHO pacienta (šok, perzistující hypotenze SBP < 90 mmHg nebo pokles o >= 40 mmHg po dobu > 15 min nevyvolaný arytmií či sepsí, nutnost vazopresorů): (1) Okamžitá bedside echokardiografie (TTE) přímo na lůžku intenzivní péče. Hledáme známky přetížení a dysfunkce PK: dilatace PK (poměr RV/LV v apikální 4-dutinové projekci > 1.0), McConnelovo znamení (akinéza volné stěny PK se zachovanou kontraktilitou hrotu – vysoce specifické pro PE!), 60/60 sign (čas akcelerace v plicnici < 60 ms při gradientu trikuspidální regurgitace <= 60 mmHg), paradoxní pohyb septa (zploštění do D-shape LK), TAPSE < 16 mm, dilatovaná dolní dutá žíla bez inspiračního kolapsu, případně přímá vizualizace mobilního trombu v pravých dutinách či plicnici; (2) Pokud je TTE pozitivní a pacient nezvládne transport na CT, diagnóza PE je potvrzena a IHNED SE ZAHÁJÍ REPERFUZNÍ LÉČBA (systémová trombolýza); (3) Pokud je pacient po úvodní resuscitaci stabilizován a CTPA je bezpečně a ihned dostupné, provede se CTPA k definitivnímu zobrazení rozsahu embolizace.",
        "Algoritmus u hemodynamicky STABILNÍHO pacienta (normotenze): (1) Krok 1: Stanovení klinické předtestové pravděpodobnosti pomocí validovaného skóre (Wells skóre: anamnéza DVT/PE +1.5, TF >= 100/min +1.5, operace/imobilizace v posledním měsíci +1.5, hemoptýza +1.0, aktivní malignita +1.0, klinické známky DVT +3.0, alternativní diagnóza méně pravděpodobná než PE +3.0 bodů. Zjednodušená 2-stupňová verze: PE nepravděpodobná <= 4 body; PE pravděpodobná > 4 body); (2) Krok 2: Při NÍZKÉ / STŘEDNÍ pravděpodobnosti (PE nepravděpodobná) stanovujeme D-dimery vysoce senzitivní metodou (ELISA). Pokud jsou D-dimery negativní (< 500 µg/l FEU, nebo u pacientů nad 50 let pod věkově korigovaným limitem: věk × 10 µg/l), plicní embolie je spolehlivě VYLOUČENA (negativní prediktivní hodnota > 99 %) a diagnostika končí bez antikoagulace. Pokud jsou D-dimery pozitivní, indikujeme CTPA; (3) Krok 3: Při VYSOKÉ pravděpodobnosti (PE pravděpodobná, Wells > 4) SE D-DIMERY VŮBEC NEVYŠETŘUJÍ (vysoká falešná negativita, ztráta času!) a pacient je ODESLÁN PŘÍMO NA CTPA.",
        "CT plicní angiografie (CTPA): Zlatý standard zobrazovací diagnostiky. Prokazuje defekty v náplni a. pulmonalis a jejích větvích, hodnotí poměr průměrů komor RV/LV na axiálních řezech (RV/LV > 1.0 svědčí pro dysfunkci PK). Alternativa při alergii na jódový kontrast nebo těžké renální dysfunkci: ventilačně-perfuzní scintigrafie plic (V/Q scan – průkaz perfuzních defektů při normální ventilaci).",
        "Pomocná vyšetření: EKG: nejčastěji sinusová tachykardie; známky přetížení PK (McGinn-White syndrom S_I Q_III T_III – hluboké S ve svodu I, patologické Q ve svodu III a negativní T ve III; inkompletní nebo kompletní RBBB; inverze vln T v prekordiálních svodech V1–V4). RTG hrudníku: často zcela normální! Možné nálezy: Fleischnerovo znamení (rozšíření kmene plicnice), Westermarkovo znamení (oligémie plicního pole distálně od uzávěru), Hamptonův hrb (trojúhelníkovitý klínovitý infiltrát bází nasedající na pleuru při plicním infarktu). Kompresní ultrasonografie žil DKK (CUS): průkaz nestlačitelné hluboké žíly potvrzuje DVT a u pacienta s dušností nepřímo podporuje diagnózu PE."
      ]
    },
    {
      "title": "4. Riziková stratifikace dle ESC 2019 a prognostické sPESI skóre",
      "refs": [
        "peESC",
        "pe2026"
      ],
      "paragraphs": [
        "Kategorizace rizika časné 30denní mortality dle ESC 2019: (1) Vysoké riziko (High-risk, mortalita > 15–30 %): přítomna hemodynamická nestabilita (oběhová zástava, obstrukční šok s potřebou vazopresorů, nebo perzistující hypotenze SBP < 90 mmHg). Indikace k okamžité reperfuzi; (2) Středně vysoké riziko (Intermediate-high risk, mortalita 3–15 %): pacient je normotenzní (hemodynamicky stabilní), ale má sPESI >= 1 A SOUČASNĚ známky dysfunkce PK na ECHO/CT A SOUČASNĚ pozitivní laboratorní troponin (cTnI/cTnT) či NT-proBNP. Tito pacienti vyžadují přijetí na JIP/ARO a kontinuální monitoraci pro riziko sekundární dekompenzace; (3) Středně nízké riziko (Intermediate-low risk): normotenzní pacient, sPESI >= 1, ale pozitivní je POUZE JEDEN marker (buď jen dysfunkce PK, NEBO jen zvýšený troponin, nikoli oba); (4) Nízké riziko (Low-risk, mortalita < 1 %): normotenzní, sPESI = 0 bodů, normální PK na zobrazovacích metodách i negativní troponin.",
        "sPESI skóre (zjednodušený index závažnosti plicní embolie): Hodnotí 6 nezávislých prediktorů (každý za 1 bod): (1) Věk > 80 let; (2) Anamnéza malignity; (3) Chronické kardiopulmonální onemocnění (srdeční selhání, CHOPN); (4) Tepová frekvence >= 110/min; (5) Systolický TK < 100 mmHg; (6) Saturace SpO2 < 90 %. Interpretace: 0 bodů = nízké riziko (30denní mortalita 1.0 %), možnost časného propuštění a ambulantní léčby; >= 1 bod = zvýšené riziko (30denní mortalita 10.9 %), nutná hospitalizace.",
        "AHA/ACC 2026 klasifikace: Definuje kategorie A (asymptomatická náhodná PE), B (symptomatická s nízkým rizikem), C (vyšší klinická závažnost), D (počínající kardiopulmonální selhání) a E (kardiopulmonální selhání s refrakterní hypotenzí). U zkoušky zdůraznit komplementaritu s ESC schématem."
      ]
    },
    {
      "title": "5. Komplexní léčba PE: antikoagulace, systémová trombolýza, embolektomie a oběhová podpora",
      "refs": [
        "ou2025",
        "peESC",
        "pe2026",
        "rvAcute"
      ],
      "paragraphs": [
        "Iniciální antikoagulace: Musí být zahájena okamžitě již při důvodném klinickém podezření, ještě před dokončením zobrazovacích vyšetření! (1) UFH (nefrakcionovaný heparin): metoda volby u vysoce rizikových nestabilních pacientů, těžké renální insuficience (eGFR < 30 ml/min) a u nemocných směřujících k trombolýze či chirurgické intervenci (lze jej okamžitě zastavit a zneutralizovat protamin sulfátem). Dávkování: i.v. bolus 80 IU/kg (nebo 5000 IU), následovaný kontinuální infuzí 18 IU/kg/h titrovanou dle aPTT (cílový poměr aPTT 1.5–2.5násobek kontroly, tj. 60–80 sekund); (2) LMWH (nízkomolekulární hepariny): u hemodynamicky stabilních pacientů (nízké a střední riziko). Enoxaparin 1 mg/kg s.c. po 12 hodinách (nebo 1.5 mg/kg 1x denně), dalteparin 100 IU/kg s.c. po 12 h; (3) Fondaparinux: syntetický pentasacharid (5 mg pod 50 kg, 7.5 mg pro 50–100 kg, 10 mg nad 100 kg s.c. 1x denně).",
        "Následná perorální antikoagulace: DOAC jsou léky 1. volby před warfarinem pro nižší riziko závažného krvácení a absenci nutnosti monitorace: Apixaban (úvodní dávka 10 mg p.o. 2x denně po dobu 7 dnů, poté udržovací 5 mg 2x denně); Rivaroxaban (úvodní dávka 15 mg p.o. 2x denně po dobu 21 dnů s jídlem, poté 20 mg 1x denně). Dabigatran (150 mg 2x denně) a Edoxaban (60 mg 1x denně) vyžadují úvodní předléčení parenterálním LMWH po dobu minimálně 5 dnů. Warfarin (cíl INR 2.0–3.0) zůstává indikován u pacientů s antifosfolipidovým syndromem, mechanickými srdečními chlopněmi a těžkým renálním selháním; vyžaduje překryv heparinem minimálně 5 dnů a do dosažení terapeutického INR po 2 po sobě jdoucí dny. Trvání léčby: minimálně 3 měsíce u reverzibilního vyvolávajícího faktoru; dlouhodobá až celoživotní u idiopatické PE, rekurentní VTE či perzistujícího onkologického rizika.",
        "Systémová trombolýza (fibrinolýza): Indikována VÝHRADNĚ U VYSOKÉHO RIZIKA (hemodynamická nestabilita, hypotenze, obstrukční šok) a při oběhové zástavě! U intermediárního rizika je paušálně kontraindikována pro vysoké riziko intrakraniálního krvácení (2–3 %) a smí být použita pouze jako záchranná (rescue) trombolýza při akutním oběhovém zhoršení. Lék volby: rekombinantní tkáňový aktivátor plazminogenu – rtPA (altepláza): (a) Standardní infuze: 100 mg i.v. během 2 hodin (10 mg bolus během 1–2 min, následně 90 mg infuze během 110 minut); (b) Zrychlený režim při těžkém šoku: 0.6 mg/kg během 15 minut (maximálně 50 mg); (c) Při KPR v důsledku PE: i.v. bolus 50 mg alteplázy a resuscitovat minimálně 60–90 minut k umožnění trombolytického účinku! Absolutní kontraindikace: hemoragická CMP kdykoli v anamnéze, ischemická CMP v posledních 6 měsících, intrakraniální neoplazie či aneurysma, neurochirurgický výkon/trauma hlavy v posledních 3 týdnech, masivní aktivní krvácení, disekce aorty.",
        "Katetrizační a chirurgická léčba: Indikována u vysoce rizikových pacientů, u nichž je systémová trombolýza absolutně kontraindikována nebo selhala. (1) Katetrová perkutánní intervence: mechanická fragmentace trombu, aspirační embolektomie (např. systém FlowTriever) či ultrazvukem asistovaná lokální trombolýza nízkou dávkou rtPA (systém EKOS); (2) Chirurgická plicní embolektomie dle Trendelenburga: provedení sternotomie na kardiopulmonálním bypassu (mimotělním oběhu), otevření kmene a. pulmonalis a manuální extrakce trombů; (3) Kavální filtr (Greenfieldův kavální filtr do VCI): přísně omezen na pacienty s absolutní trvalou kontraindikací antikoagulace při vysokém riziku recidivy z DKK.",
        "Intenzivní péče a podpora pravé komory: Noradrenalin (0.05–0.5 µg/kg/min): lék volby k udržení MAP >= 65 mmHg a zajištění koronárního perfuzního tlaku pro ischemickou stěnu PK; Dobutamin (2.5–5 µg/kg/min): pro inotropní podporu PK při nízkém srdečním výdeji (opatrnost při vazodilataci). EXTRÉMNÍ OPATRNOST S TEKUTINAMI: masivní volumoterapie je FATÁLNÍ CHYBOU – přetížená PK dále dilatule, zhorší se posun septa a srdeční výdej zkolabuje (maximálně opatrný bolus balancovaného krystaloidu do 250–500 ml). Umělá plicní ventilace: intubace představuje kritický rizikový moment (pokles sympatiku po úvodu do anestezie + vzestup nitrohrudního tlaku sníží žilní návrat a způsobí okamžitou asystolii/PEA) -> intubovat pouze v oběhové přípravě s noradrenalinem, šetrná sedace, nízké dechové objemy (6 ml/kg) a minimální PEEP. Venoarteriální ECMO (VA-ECMO): záchranná mechanická podpora oběhu u refrakterního obstrukčního šoku jako most k reperfuznímu výkonu."
      ]
    }
  ],
  "corrections": [
    "D-dimery mají význam VÝHRADNĚ k vyloučení PE u pacientů s NÍZKOU nebo STŘEDNÍ klinickou pravděpodobností. U pacienta s VYSOKOU pravděpodobností (Wells > 4) se D-dimery nesmí odebírat – zdržují a i při negativitě je nutné provést CTPA!",
    "Normální poslechový nález na plicích PE nevylučuje, naopak! Rozpor mezi těžkou klidovou dušností a čistým poslechem bez chrůpků je pro PE vysoce typický.",
    "Systémová trombolýza se NIKDY nepodává paušálně u všech pacientů s PE ani u stabilních pacientů s pouhou dilatací PK. Je vyhrazena pro VYSOKÉ RIZIKO (šok, hypotenze SBP < 90 mmHg, zástava oběhu) nebo záchrannou léčbu při sekundárním oběhovém selhání.",
    "Masivní podání tekutin (volumoterapie) u plicní embolie s šokem je fatální chybou – tenkostěnná PK je přetížena tlakem a další objem vede k její dilataci, posunu septa doleva a zástavě oběhu. Lékem volby hypotenze je časný noradrenalin."
  ],
  "checks": [
    {
      "question": "Mladá žena užívající antikoncepci má náhle vzniklou dušnost a pleurální bolest, TK 125/80 mmHg, TF 105/min, Wells skóre 4.5 bodu. Jaký je správný diagnostický postup?",
      "answer": "Wells skóre 4.5 znamená vysokou klinickou pravděpodobnost (PE likely). D-dimery se neodebírají, protože negativní výsledek by PE bezpečně nevyloučil. Správným krokem je okamžité zahájení terapeutické antikoagulace (LMWH s.c. nebo UFH i.v.) a provedení CT plicní angiografie (CTPA).",
      "refs": [
        "peESC",
        "peNICE"
      ]
    },
    {
      "question": "Pacient s masivní PE zkolabuje na JIP a je zahájena KPR pro bezpulzovou elektrickou aktivitu (PEA). Jaká je specifická farmakoterapie a modifikace resuscitace?",
      "answer": "Při KPR způsobené PE je indikována okamžitá systémová trombolýza: podává se bolus 50 mg alteplázy (rtPA) i.v. Resuscitace se po podání trombolytika nesmí předčasně ukončit – komprese hrudníku a ALS musí pokračovat minimálně 60 až 90 minut, aby lék mohl cirkulovat a rozpustit masivní embolus v plicnici.",
      "refs": [
        "ou2025",
        "peESC",
        "rvAcute"
      ]
    },
    {
      "question": "Proč je intubace a zahájení přetlakové UPV u pacienta s masivní plicní embolií a dekompenzovaným cor pulmonale extrémně nebezpečná?",
      "answer": "Úvod do celkové anestezie odstraní endogenní vazokonstrikční sympatikotonus a přetlaková ventilace (IPPV) zvýší nitrohrudní tlak, což dramaticky omezí žilní návrat do již selhávající tenkostěnné pravé komory. To vede k bleskovému poklesu plnění levé komory a fatálnímu oběhovému kolapsu s PEA zástavou. Intubace se provádí až při nevyhnutelném respiračním selhání za masivní podpory noradrenalinem.",
      "refs": [
        "ou2025",
        "rvAcute",
        "pe2026"
      ]
    }
  ]
},
"B26": {
  "title": "Akutní renální selhání, akutní jaterní selhání – rozdělení, příčiny, symptomatologie, prevence a léčba, možnosti orgánové podpory (KDIGO 1–3, CRRT, citrátová antikoagulace, MARS, King's College kritéria)",
  "reviewed": "2026-11-04",
  "edition": "LF OU 2025 (díl II, kap. 7, str. 129–146) · KDIGO 2024 AKI Guidelines · AASLD/EASL 2024",
  "scope": "Intenzivní péče o selhání ledvin a jater: klasifikace AKI dle KDIGO 1–3 (kreatinin a diuréza), prerenální vs. renální (ATN) vs. postrenální etiologie, biochemická diferenciace (FENa, osmolalita), prevence a konzervativní terapie (balancované krystaloidy, zákaz nefrotoxinů a renálního dopaminu, správná role furosemidu), eliminační metody (CRRT – CVVH, CVVHD, CVVHDF, indikace AEIOU, regionální citrátová antikoagulace RCA). Akutní jaterní selhání (ALF): definice (INR >= 1.5 a encefalopatie u necirhotika do 26 týdnů), hyperakutní/akutní/subakutní formy, etiologie (paracetamol, virové hepatitidy, houby, polékové), komplikace (edém mozku a nitrolební hypertenze – amoniak > 150 µmol/l, rebalancovaná koagulopatie, hypoglykémie, sepse, HRS), terapie (N-acetylcystein u všech ALF, neurointenzivní péče, 3% NaCl při ICP > 20 mmHg, MARS albuminová dialýza, King's College kritéria pro urgentní transplantaci).",
  "opening": "Akutní selhání ledvin a jater představují kritické stavy s vysokou mortalitou, které v intenzivní péči často progredují do syndromu multiorgánové dysfunkce (MODS). U zkoušky začínám přehledným rozdělením: U AKUTNÍHO POŠKOZENÍ LEDVIN (AKI) definuji kritéria KDIGO 1–3 založená na sérovém kreatininu a hodinové diuréze a rozlišuji formu prerenální (hypoperfúze funkčně intaktní ledviny, FENa < 1 %), renální (nejčastěji ischemická či toxická akutní tubulární nekróza ATN, FENa > 2 %) a postrenální (obstrukční). Zdůrazňuji prevenci, správnou roli furosemidu (pouze k léčbě hypervolémie, nikoli renálního selhání!), zákaz překonaného renálního dopaminu a indikace k eliminačním metodám (akronym AEIOU) s preferencí kontinuálních metod (CRRT) a regionální citrátové antikoagulace (RCA). U AKUTNÍHO JATERNÍHO SELHÁNÍ (ALF) definuji triádu: akutní poškození jater, koagulopatie (INR >= 1.5) a jaterní encefalopatie u pacienta bez předchozí cirhózy do 26 týdnů. Prezentuji etiologii (paracetamol, virové hepatitidy, houby, léky), smrtící komplikaci v podobě edému mozku a nitrolební hypertenze při hyperamonémii (> 150 µmol/l), komplexní léčbu (N-acetylcystein u všech časných forem, neurointenzivní péče, 3% NaCl, CRRT k eliminaci amoniaku, MARS albuminová dialýza) a King's College kritéria pro urgentní indikaci k transplantaci jater.",
  "openingRefs": [
    "ou2025",
    "akiKDIGO",
    "alfAASLD",
    "alfSCCM"
  ],
  "sections": [
    {
      "title": "1. Akutní poškození ledvin (AKI) – definice KDIGO, etiopatogeneze a diagnostika",
      "refs": [
        "ou2025",
        "akiKDIGO",
        "akiClinical"
      ],
      "paragraphs": [
        "Definice a klasifikace AKI dle KDIGO (LF OU 2025 díl II kap. 7): Akutní poškození ledvin je definováno splněním alespoň jednoho ze tří kritérií: (1) Vzestup sérového kreatininu o >= 26.5 µmol/l během 48 hodin; (2) Vzestup sérového kreatininu na >= 1.5násobek výchozí hodnoty (baseline) během předchozích 7 dnů; (3) Pokles diurézy pod 0.5 ml/kg/h trvající alespoň 6 po sobě jdoucích hodin.",
        "Stádia AKI dle KDIGO: (a) Stádium 1: vzestup kreatininu o >= 26.5 µmol/l nebo na 1.5–1.9násobek baseline; diuréza < 0.5 ml/kg/h po dobu 6–12 hodin; (b) Stádium 2: vzestup kreatininu na 2.0–2.9násobek baseline; diuréza < 0.5 ml/kg/h po dobu >= 12 hodin; (c) Stádium 3: vzestup kreatininu na >= 3.0násobek baseline, nebo vzestup na >= 353.6 µmol/l, nebo zahájení renální eliminační léčby (RRT); diuréza < 0.3 ml/kg/h po dobu >= 24 hodin nebo anurie trvající >= 12 hodin.",
        "Etiopatogenetické rozdělení AKI (LF OU 2025): (1) Prerenální AKI (55–60 % případů): způsobeno renální hypoperfúzí při zachované strukturální integritě nefronu. Příčiny: absolutní hypovolémie (krvácení, těžká dehydratace, popáleniny, polyurie), relativní hypovolémie při šokových stavech (septický, kardiogenní, anafylaktický šok), městnavé srdeční selhání (kardiorenální syndrom), jaterní selhání (hepatorenální syndrom) a léky blokující autoregulaci glomerulární filtrace (NSAID blokují syntézu vazodilatačních prostaglandinů ve vas afferens, ACEi/sartany blokují angiotenzin II a způsobují dilataci vas efferens); (2) Renální / intraparenchymové AKI (35–40 % případů): přímé strukturální poškození ledvinného parenchymu. Nejčastěji akutní tubulární nekróza (ATN – 85 % renálních příčin) způsobená prolongovanou těžkou ischémií nebo nefrotoxiny: exogenní nefrotoxiny (aminoglykosidy – amikacin/gentamicin, vankomycin, jodové kontrastní látky, cisplatina, amfotericin B) a endogenní nefrotoxiny (myoglobin při rabdomyolýze, hemoglobin při masivní hemolýze, paraproteiny). Dále akutní tubulointersticiální nefritida (AIN – alergicko-imunologická po penicilinech, cefalosporinech, PPI, sulfonamidech) a akutní glomerulonefritidy; (3) Postrenální AKI (5 % případů): mechanická obstrukce odtoku moči distálně od pánviček. Příčiny: hypertrofie nebo karcinom prostaty, oboustranná nefrolitiáza (či jednostranná u solitární ledviny), retroperitoneální fibróza či malignita, hematom nebo zkalený hlen blokující permanentní močový katétr.",
        "Laboratorní a biochemická diferenciace: Prerenální AKI se vyznačuje intaktní tubulární funkcí s maximální resorpcí vody a sodíku: frakční exkrece sodíku FENa < 1 %, osmolalita moči > 500 mOsm/kg, specifická hmotnost moči > 1020, poměr urea/kreatinin v plazmě > 20:1, močový sediment chudý. Naproti tomu u ATN (renální AKI) jsou tubulární buňky nekrotické a ztratily resorpční a koncentrační schopnost: FENa > 2 %, osmolalita moči < 350 mOsm/kg (izostenurie), v močovém sedimentu nacházíme typické hrubé granulované a pigmentované tubulární válce (tzv. 'muddy brown casts'). Postrenální AKI diagnostikujeme okamžitým ultrasonografickým vyšetřením ledvin u lůžka (dilatace dutého systému ledviny – hydronefróza)."
      ]
    },
    {
      "title": "2. Prevence a konzervativní terapie AKI v intenzivní péči",
      "refs": [
        "ou2025",
        "akiKDIGO",
        "akiClinical"
      ],
      "paragraphs": [
        "Hemodynamická resuscitace a volumoterapie: Včasná a cílená infuzní terapie balancovanými krystaloidy (Plasmalyte, Ringer-fundin) k obnovení efektivního cirkulujícího objemu a renální perfúze. ZÁKAZ SYNTETICKÝCH KOLOIDŮ: hydroxyetylškroby (HES) jsou přísně zakázány – prokazatelně indukují osmotickou tubulární nekrózu, zvyšují potřebu dialýzy a mortalitu! Omezit 0.9% NaCl pro riziko hyperchloremické acidózy a reflexní vazokonstrikce a. renalis.",
        "Cílový perfuzní tlak: Udržovat střední arteriální tlak MAP >= 65 mmHg k zajištění intraglomerulárního perfuzního tlaku. U pacientů s chronickou arteriální hypertenzí je křivka renální autoregulace posunuta doprava a cílový MAP by měl být vyšší (75–85 mmHg). Vazopresorem volby je noradrenalin. STRIKTNÍ ZÁKAZ NÍZCE DÁVKOVANÉHO 'RENÁLNÍHO DOPAMINU' (1–3 µg/kg/min): rozsáhlé mezinárodní randomizované studie bezpečně prokázaly, že dopamin neposkytuje žádnou renální protekci, nezlepšuje glomerulární filtraci, nesnižuje potřebu RRT ani mortalitu a naopak zvyšuje riziko tachyarytmií a ischémie myokardu!",
        "Kličková diuretika (furosemid) u zkoušky: FUROSEMID NENÍ LÉKEM PRO PREVENCI ANI LÉČBU AKI! Podání furosemidu nepřemění strukturální ATN na funkční parenchym, nesnižuje mortalitu ani potřebu RRT. Furosemid je v intenzivní péči indikován VÝHRADNĚ K LÉČBĚ PŘETÍŽENÍ TEKUTINAMI A HYPERVOLEMIE u pacientů, kteří mají zachovanou diuretickou odpověď. Furosemidový zátěžový test (FST – Furosemide Stress Test): u hemodynamicky stabilního euvolemického pacienta s časným AKI se podá i.v. bolus furosemidu v dávce 1.0 mg/kg (u pacientů dosud neléčených kličkovými diuretiky) nebo 1.5 mg/kg (u dříve léčených). Pokud diuréza během následujících 2 hodin nepřesáhne 200 ml, test je negativní a s vysokou senzitivitou a specificitou predikuje progresi do těžkého selhání KDIGO 3 a nutnost zahájení RRT.",
        "Nefroprotekce a léková bezpečnost: Okamžité přerušení podávání potenciálně nefrotoxických látek (NSAID, ACEi/sartany). U nezbytných antibiotik (vankomycin, aminoglykosidy) provádět úpravu dávkovacího intervalu a důsledný TDM (terapeutické monitorování hladin). Prevence kontrastní nefropatie: hydratace balancovaným krystaloidem před i po výkonu, aplikace minimálního nutného objemu nízko- či izoosmolální kontrastní látky, nepodávat zbytečně N-acetylcystein ani bikarbonát k prevenci CIN (neúčinné dle velkých studií)."
      ]
    },
    {
      "title": "3. Eliminační metody v intenzivní péči (RRT) – indikace AEIOU, metody a citrátová antikoagulace",
      "refs": [
        "ou2025",
        "akiKDIGO",
        "akiClinical"
      ],
      "paragraphs": [
        "Indikace k zahájení renální eliminační léčby (RRT) – mnemotechnická pomůcka AEIOU: (1) A – Acidóza: těžká metabolická acidóza refrakterní na kauzální terapii a volumoterapii (arteriální pH < 7.15, bikarbonát < 10–12 mmol/l); (2) E – Elektrolyty: těžká refrakterní hyperkalémie (K+ > 6.5 mmol/l s EKG změnami nebo nereagující na farmakologický posun glukózou s inzulínem a stabilizaci kalciem); (3) I – Intoxikace: intoxikace dialyzovatelnými toxiny dle mezinárodních kritérií EXTRIP (metanol, etylenglykol, lithium, salicyláty, theofylin); (4) O – Overload (přetížení tekutinami): refrakterní hypervolémie s rozvojem plicního edému, anasarky a těžké hypoxémie nereagující na diuretika; (5) U – Uremie: klinické komplikace uremického syndromu – uremická encefalopatie (sopor, zmatenost, asterixis, křeče), uremická perikarditida s rizikem tamponády, uremická gastropatie či uremická krvácivá diatéza (obvykle při hladině urey > 30–40 mmol/l).",
        "Metody RRT v intenzivní péči: (1) Intermitentní hemodialýza (IHD): trvá 3–4 hodiny, založena na difúzi, vysoká clearance malých molekul. Nevhodná pro hemodynamicky nestabilní pacienty na vazopresorech (riziko těžké hypotenze) a pro pacienty s nitrolební hypertenzí (riziko edému mozku z dysekvilibračního syndromu!); (2) Kontinuální eliminační metody (CRRT – Continuous Renal Replacement Therapy): zlatý standard na JIP a ARO, probíhají kontinuálně 24 hodin denně. Zajišťují pomalou a šetrnou ultrafiltraci tekutin i solutů, vynikající hemodynamickou stabilitu a udržení perfuzního tlaku mozku. Varianty: CVVH (kontinuální venovenózní hemofiltrace – princip konvekce, odstraňuje i středně velké molekuly zánětlivých mediátorů), CVVHD (kontinuální venovenózní hemodialýza – princip difúze proti dialyzačnímu roztoku) a CVVHDF (kontinuální venovenózní hemodiafiltrace – kombinace konvekce i difúze, nejčastěji používaná a nejúčinnější metoda); (3) SLED (Slow Low-Efficiency Dialysis): hybridní metoda pro subakutní fázi (trvá 6–12 hodin denně).",
        "Antikoagulace okruhu CRRT: Krev v mimotělním okruhu má tendenci se na umělých površích a hemofiltru srážet. (1) Regionální citrátová antikoagulace (RCA) – ZLATÝ STANDARD DLE KDIGO: Citrát trisodný je kontinuálně infundován do arteriální linky mimotělního okruhu těsně před hemofiltr. Citrát vyváže volný ionizovaný vápník v krvi uvnitř filtru na hodnotu Ca2+ < 0.25–0.35 mmol/l. Vzhledem k tomu, že vápník je nezbytným kofaktorem pro téměř všechny kroky koagulační kaskády, krev ve filtru se nesrazí. Před návratem krve do pacienta (do venózní linky) je kontinuálně infundován chlorid vápenatý (CaCl2), který obnoví fyziologickou hladinu systémového ionizovaného vápníku (Ca2+ 1.1–1.3 mmol/l). Výhoda: vynikající životnost hemofiltru (> 72 hodin) a NULOVÉ SYSTÉMOVÉ RIZIKO KRVÁCENÍ pacienta! Riziko: akumulace citrátu při těžkém jaterním selhání (poměr celkového a ionizovaného vápníku > 2.5, metabolická acidóza); (2) Alternativy: nízce dávkovaný UFH (systémové riziko krvácení a HIT), prostacyklin, nebo režim zcela bez antikoagulace (vyžaduje vysoké průtoky krve a prediluční náhradu)."
      ]
    },
    {
      "title": "4. Akutní jaterní selhání (ALF) – definice, etiologie a život ohrožující komplikace",
      "refs": [
        "ou2025",
        "alfAASLD",
        "alfSCCM"
      ],
      "paragraphs": [
        "Definice ALF (Acute Liver Failure): Vzácný, avšak bleskově progredující syndrom rychlého zániku jaterních funkcí u pacienta BEZ PŘEDCHOZÍHO JATERNÍHO ONEMOCNĚNÍ ČI CIRHÓZY. Diagnostická triáda: (1) Akutní poškození jater (ikterus, elevace transamináz AST/ALT); (2) Koagulopatie definovaná hodnotou INR >= 1.5; (3) Jakýkoli stupeň jaterní encefalopatie (od poruch spánku a zmatenosti až po hluboké kóma), s dobou trvání do 26 týdnů od nástupu symptomů (LF OU 2025 díl II kap. 7).",
        "Klasifikace dle časového průběhu (O'Grady): (1) Hyperakutní selhání (ikterus -> encefalopatie do 7 dnů): typicky intoxikace paracetamolem, virová hepatitida A či E. Vyznačuje se dramatickou elevací transamináz, těžkou koagulopatií a extrémně vysokým rizikem edému mozku, avšak při zvládnutí kritické fáze má nejvyšší šanci na plnou spontánní regeneraci jater bez transplantace; (2) Akutní selhání (interval 7–28 dnů): typicky virová hepatitida B a polékové poškození; (3) Subakutní selhání (interval 5–26 týdnů): typicky idiopatické, autoimunitní hepatitida a Wilsonova choroba. Výrazný ikterus, menší riziko edému mozku, ale extrémně nepříznivá spontánní prognóza – téměř vždy vyžaduje urgentní transplantaci jater.",
        "Etiologie ALF (LF OU 2025): (a) Toxické: paracetamol (nejčastější příčina v západním světě!), houby (Amanita phalloides – amanitin), syntetické drogy (extáze/MDMA), halotan; (b) Polékové poškození (DILI): amoxicilin-klavulanát, antituberkulotika (isoniazid, rifampicin), antiepileptika (valproát, karbamazepin); (c) Virové hepatitidy: HBV (zejména akutní koinfekce/superinfekce s HDV nebo reaktivace imunosupresí), HAV, HEV (extrémně těžký průběh v těhotenství s mortalitou 20–25 %!), herpesviry (HSV, VZV, CMV); (d) Vaskulární: ischemická hepatitida ('šoková játra' po KPR či kardiogenním šoku), Budd-Chiari syndrom (akutní trombóza jaterních žil); (e) Těhotenství: HELLP syndrom, akutní těhotenská steatóza jater (AFLP); (f) Ostatní: Wilsonova choroba (Kayser-Fleischerův prstenec, Coomb-negativní hemolytická anémie), autoimunitní hepatitida.",
        "Život ohrožující komplikace ALF: (1) Edém mozku a nitrolební hypertenze (ICH): hlavní příčina úmrtí u hyperakutního ALF! Amoniak (NH3 > 150–200 µmol/l) volně prostupuje hematoencefalickou bariéru. V astrocytech je amoniak enzymem glutaminsyntetázou konvertován na glutamin. Intracelulární akumulace glutaminu působí jako osmotický atraktor vody, vyvolá edém astrocytů a edém mozku. Vzniká nitrolební hypertenze (ICP > 20–25 mmHg), dochází k poklesu perfuzního tlaku mozku (CPP = MAP - ICP < 50 mmHg), kompresi mozkového kmene, temporální či tonzilární herniaci a mozkové smrti; (2) Koagulopatie a krvácení: v játrech dochází k zástavě syntézy prokoagulačních faktorů (zejm. f. VII s poločasem 4–6 hodin -> prudký růst INR), ale současně vázne i syntéza antikoagulačních proteinů (protein C, S, antitrombin III). Výsledkem je tzv. rebalancovaná hemostáza; profylaktické podávání mražené plazmy je chybou! (3) Těžká hypoglykémie: selhání glukoneogeneze a vyčerpání zásob glykogenu v játrech vyžaduje kontinuální infuzi glukózy; (4) Těžká laktátová acidóza z neschopnosti jater metabolizovat laktát; (5) Sepse a bleskové infekce: těžká imunodeficience z dysfunkce Kupfferových buněk; hlavní příčina pozdního úmrtí; (6) Hepatorenální syndrom (HRS-AKI): extrémní splanchnická vazodilatace a reflexní renální vazokonstrikce."
      ]
    },
    {
      "title": "5. Komplexní léčba ALF, mimotělní podpora (MARS) a King's College kritéria",
      "refs": [
        "ou2025",
        "alfAASLD",
        "alfSCCM"
      ],
      "paragraphs": [
        "Kauzální a specifická terapie: (1) N-acetylcystein (NAC): absolutní indikace u intoxikace paracetamolem (dávkovací schéma 150 + 50 + 100 mg/kg), ale DLE MEZINÁRODNÍCH GUIDELINES PROKAZATELNĚ ZLEPŠUJE PŘEŽITÍ I U VŠECH NEPARACETAMOLOVÝCH AKUTNÍCH JATERNÍCH SELHÁNÍ (zlepšuje mikrocirkulaci, perfúzi tkání a antioxidační kapacitu); (2) Otrava muchomůrkou zelenou: silibinin (Legalon-SIL 20–50 mg/kg/den i.v.) + krystalický penicilin G (1 mil. IU/kg/den i.v.) k blokádě transportérů OATP1B3 a zabránění vstupu amanitinu do hepatocytů; (3) Akutní reaktivace HBV: časná antivirotika (entekavir, tenofovir); (4) Těhotenské stavy (HELLP, AFLP): okamžité ukončení těhotenství (urgentní porod/sekce).",
        "Neurointenzivní péče a kontrola edému mozku: Pacient musí být hospitalizován na specializovaném resuscitačním lůžku transplantačního centra. Elevace hlavy a trupu o 30°, normotermie (zákaz horečky – dramaticky zvyšuje ICP!), minimalizace stimulace. Při rozvoji jaterní encefalopatie stupně III–IV (sopor až kóma, GCS <= 8) je indikována okamžitá OTI a protektivní UPV k zajištění dýchacích cest a udržení normokapnie (PaCO2 4.5–5.0 kPa; profylaktická hyperventilace je zakázána, protože vazokonstrikcí zhoršuje cerebrální ischémii). Terapie nitrolební hypertenze (ICP > 20 mmHg): lékem volby je HYPERTONICKÝ 3% NaCl podávaný kontinuálně nebo bolusově k udržení sérové natrémie v pásmu 145–150 mmol/l a osmolality < 320 mOsm/kg (hyperosmolární léčba 3% NaCl je u ALF preferována před mannitolem, který hrozí hypovolémií a renálním selháním). Při refrakterním edému mozku: bolus propofolu, prohloubení analgosedace a zvážení mírné hypotermie (34–35 °C). K redukci produkce amoniaku ve střevě podáváme laktulózu a rifaximin; k aktivní eliminaci amoniaku z plazmy okamžitě nasazujeme CRRT s vysokým průtokem (dávka 35–40 ml/kg/h).",
        "Oběhová a orgánová podpora: Cílový MAP >= 65–75 mmHg k udržení mozkového perfuzního tlaku CPP >= 60 mmHg. Vazopresorem volby je noradrenalin; při těžké vazodilataci přidáváme vazopresin (0.03 IU/min). Prevence hypoglykémie: kontinuální infuze 10–20% glukózy s cílem glykémie 6–10 mmol/l. Širokospektrá antibiotika (např. piperacilin/tazobaktam či meropenem) a antimykotika (echinokandiny) nasazujeme preemptivně při jakékoli známce infekce či progresi encefalopatie. Mražená plazma a destičky se podávají POUZE při aktivním krvácení nebo těsně před invazivními výkony (např. zavedení čidla ICP); rutinní profylaktická korekce INR je zakázána, protože zkresluje dynamiku onemocnění a přetěžuje oběh tekutinami.",
        "Extrakorporální mimotělní jaterní podpora – systém MARS (Molecular Adsorbent Recirculating System): Krev pacienta protéká přes speciální dialyzátor s vysoce permeabilní membránou, na jejíž druhé straně cirkuluje roztok 20% lidského albuminu. Albumin v dialyzačním okruhu na sebe vyváže v tucích rozpustné toxiny (nekonjugovaný bilirubin, žlučové kyseliny, aromatické aminokyseliny, měď, cytokiny), které jsou následně z dialyzátu odstraněny průchodem přes kolonu s aktivním uhlím a anexovou pryskyřicí, zatímco nízkomolekulární ve vodě rozpustné látky (amoniak, urea, kreatinin) jsou eliminovány běžnou hemodialýzou. MARS stabilizuje intrakraniální tlak a systémovou hemodynamiku a funguje jako klíčový most (bridge) k transplantaci jater nebo k regeneraci vlastních jater.",
        "King's College kritéria pro urgentní indikaci k transplantaci jater: (1) U paracetamolového selhání jater: arteriální pH < 7.30 po tekutinové resuscitaci (bez ohledu na stupeň encefalopatie), NEBO současná přítomnost všech tří parametrů během 24 hodin: INR > 6.5 (Quick < 10 %) + sérový kreatinin > 300 µmol/l + jaterní encefalopatie stupně III nebo IV; (2) U neparacetamolového selhání jater: INR > 6.5 (bez ohledu na encefalopatii), NEBO přítomnost alespoň 3 z následujících 5 kritérií: (a) věk < 10 nebo > 40 let; (b) etiologie: poléková (DILI) nebo kryptogenní (neznámá); (c) trvání ikteru před nástupem encefalopatie > 7 dnů; (d) INR > 3.5; (e) sérový bilirubin > 300 µmol/l."
      ]
    }
  ],
  "corrections": [
    "Furosemid NENÍ lékem na akutní selhání ledvin – neobnovuje glomerulární filtraci, nezlepšuje prognózu ani nesnižuje potřebu RRT. Je indikován VÝHRADNĚ k odstranění tekutinového přetížení (hypervolémie) u pacienta reagujícího na diuretika.",
    "Nízce dávkovaný 'renální dopamin' (1–3 µg/kg/min) je překonaný koncept a jeho podávání je chybou. Neposkytuje žádnou renální protekci a zvyšuje výskyt arytmií.",
    "U akutního jaterního selhání se N-acetylcystein (NAC) nepodává pouze u paracetamolu – je indikován u VŠECH forem časného ALF, protože zlepšuje mikrocirkulaci a systémovou hemodynamiku.",
    "Profylaktická korekce vysokého INR u jaterního selhání mraženou plazmou je chybou – maskuje spontánní dynamiku jaterní funkce (klíčový parametr pro indikaci k transplantaci) a vede k přetížení oběhu."
  ],
  "checks": [
    {
      "question": "Jaký je zásadní rozdíl mezi prerenálním AKI a akutní tubulární nekrózou (ATN) v laboratorním nálezu?",
      "answer": "U prerenálního AKI jsou tubuly intaktní a maximálně resorbují sodík a vodu: frakční exkrece sodíku je nízká (FENa < 1 %), osmolalita moči je vysoká (> 500 mOsm/kg) a sediment je chudý. U ATN jsou tubulární buňky nekrotické a ztratily resorpční schopnost: FENa je vysoká (> 2 %), osmolalita moči je nízká (izostenurie < 350 mOsm/kg) a v sedimentu nacházíme hrubé granulované a pigmentované tubulární válce.",
      "refs": [
        "ou2025",
        "akiKDIGO"
      ]
    },
    {
      "question": "Jak funguje regionální citrátová antikoagulace (RCA) při CRRT a jaké jsou její výhody?",
      "answer": "Citrát trisodný se infunduje do mimotělního okruhu těsně před hemofiltr, kde vyváže ionizovaný vápník pod 0.35 mmol/l, čímž zcela zablokuje koagulační kaskádu ve filtru. Před návratem krve do pacienta se za filtrem kontinuálně doplňuje chlorid vápenatý k normalizaci systémového kalcia. Výhodou je prodloužení životnosti filtru bez jakéhokoli zvýšení systémového rizika krvácení pacienta.",
      "refs": [
        "akiKDIGO",
        "ou2025"
      ]
    },
    {
      "question": "Jaká jsou King's College kritéria pro urgentní indikaci k transplantaci jater u otravy paracetamolem?",
      "answer": "Arteriální pH krve < 7.30 po tekutinové resuscitaci (bez ohledu na encefalopatii), NEBO současný výskyt všech tří kritérií: INR > 6.5, sérový kreatinin > 300 µmol/l a jaterní encefalopatie stupně III nebo IV během 24 hodin.",
      "refs": [
        "ou2025",
        "alfAASLD"
      ]
    }
  ]
},
"B27": {
  "title": "Akutní stavy v diabetologii – závažný hypoglykemický stav, hyperglykemické koma (DKA vs. HHS). Příčiny, příznaky, patofyziologie, terapie",
  "reviewed": "2026-11-04",
  "edition": "LF OU 2025 (díl II, kap. 8, str. 147–151) · ADA Standards of Care 2026 · JBDS 2024",
  "scope": "Akutní stavy v diabetologii: Hypoglykemický stav (definice, Whippleova triáda, autonomní vs. neuroglykopenické symptomy, terapie při vědomí pravidlem 15, bezvědomí: 40–80 ml 20% glukózy i.v. vs. glukagon 1 mg i.m. / Baqsimi, zkouškový chyták s deriváty sulfonylurey a oktreotid). Hyperglykemické koma: Diabetická ketoacidóza (DKA) vs. Hyperosmolární hyperglykemický stav (HHS) – patofyziologie, laboratorní kritéria (glykémie, ketolátky, HAGMA, osmolalita), diferenciální diagnostika. Léčebný protokol: tekutinová resuscitace (krystaloidy, korigovaná natrémie), inzulínový protokol (0.05–0.1 IU/kg/h bez bolusu, cílový pokles 3–4 mmol/l/h, přidání 5–10% glukózy při glykémii 11–14 mmol/l k vyhojení ketózy), kalium (zákaz inzulínu při K+ < 3.3 mmol/l!), přísná restrikce 8.4% NaHCO3 (pouze při pH < 6.90), komplikace (edém mozku a 3% NaCl, hypokalémie, hypofosfatémie).",
  "opening": "Akutní dekompenzace diabetu mellitus dělíme na stavy hypoglykemické a stavy hyperglykemické, které představují bezprostřední ohrožení života selháním CNS, dehydratací a iontovým rozvratem (LF OU 2025 díl II kap. 8). U zkoušky začínám ZÁVAŽNOU HYPOGLYKÉMIÍ (glykémie < 3.0 mmol/l s Whippleovou triádou), popíši autonomní a neuroglykopenické příznaky a předvedu promptní terapii (při vědomí 15–20 g rychlých sacharidů, v bezvědomí 40–80 ml 20% glukózy i.v. či glukagon 1 mg i.m.) s varováním před protrahovanou hypoglykémií po derivátech sulfonylurey vyžadující oktreotid. Následně provedu precizní diferenciální diagnostiku HYPERGLYKEMICKÉHO KÓMATU: odliším Diabetickou ketoacidózu (DKA – DM 1. typu, rychlý nástup, těžká ketonémie > 3 mmol/l, HAGMA pH < 7.30, Kussmaulovo dýchání a aceton) od Hyperosmolárního hyperglykemického stavu (HHS – DM 2. typu, pomalý nástup, extrémní glykémie > 33 mmol/l, efektivní osmolalita > 320 mOsm/kg, ztráta 8–12 litrů tekutin bez těžké ketoacidózy). Představím moderní čtyřsložkový léčebný protokol: (1) masivní rehydratace balancovaným krystaloidem; (2) kontinuální inzulín 0.05–0.1 IU/kg/h s cílem poklesu 3–4 mmol/l/h a přidáním 5–10% glukózy při poklesu na 11–14 mmol/l; (3) striktní kontrolu kalia se zákazem inzulínu při K+ < 3.3 mmol/l; a (4) zákaz rutinního podávání bikarbonátu sodného pro riziko paradoxní mozkové acidózy.",
  "openingRefs": [
    "ou2025",
    "adaDKA",
    "adaHypo",
    "jbdsDKA"
  ],
  "sections": [
    {
      "title": "1. Závažná hypoglykémie – definice, patofyziologie a klinický obraz",
      "refs": [
        "ou2025",
        "adaHypo"
      ],
      "paragraphs": [
        "Definice hypoglykémie (LF OU 2025 díl II kap. 8): Biochemická hypoglykémie je definována hladinou glukózy v plazmě < 3.9 mmol/l (hodnota, při které dochází k fyziologické aktivaci kontraregulačních hormonů). Klinicky závažná hypoglykémie je definována poklesem pod 3.0 mmol/l, nebo jakýmkoli stavem vyžadujícím pomoc druhé osoby k podání sacharidů bez ohledu na číselnou hodnotu glykémie.",
        "Whippleova triáda: Základní diagnostický pilíř: (1) Přítomnost typických klinických symptomů odpovídajících hypoglykémii; (2) Laboratorně prokázaná nízká hladina plazmatické glukózy v době potíží; (3) Rychlý ústup a vymizení všech symptomů bezprostředně po podání sacharidů.",
        "Etiologie v intenzivní péči: Předávkování inzulínem (špatný odhad dávky, vynechání jídla, neadekvátní fyzická zátěž), perorální antidiabetika stimulující sekreci inzulínu (zejména deriváty sulfonylurey s dlouhým poločasem – glimepirid, glibenklamid), abusus alkoholu (etanol inhibuje jaterní glukoneogenezi; typická těžká ranní hypoglykémie po alkoholovém excesu u podvyživených), těžká sepse, selhání jater či ledvin (snížená clearance inzulínu).",
        "Klinický obraz (dvě fáze symptomů): (1) Autonomní / adrenergní projevy (při poklesu glykémie pod 3.6–3.2 mmol/l): aktivace sympatoadrenálního systému a vyplavení adrenalinu a noradrenalinu -> palpitace, tachykardie, třes rukou, profúzní studené pocení, bledost, pocit intenzivního hladu, nauzea, úzkost a vnitřní neklid. Varování: u pacientů s dlouhotrvajícím diabetem a diabetickou autonomní neuropatií, nebo u pacientů léčených beta-blokátory, mohou tyto varovné adrenergní příznaky zcela chybět (tzv. 'hypoglycaemia unawareness') a pacient upadá přímo do bezvědomí! (2) Neuroglykopenické projevy (při poklesu glykémie pod 2.8–2.5 mmol/l): mozek je obligátně závislý na glukóze jako hlavním energetickém substrátu -> bolest hlavy, poruchy zraku (diplopie, rozmazané vidění), dysartrie, poruchy chování (zmatenost, negativismus, agrese – často mylně považováno za opilost či psychiatrickou poruchu!), ložiskový neurologický deficit (napodobující CMP), generalizované křeče, sopor, hluboké bezvědomí a při protrahovaném stavu ireverzibilní mozková smrt."
      ]
    },
    {
      "title": "2. Léčba hypoglykémie a zkouškový chyták s deriváty sulfonylurey",
      "refs": [
        "ou2025",
        "adaHypo"
      ],
      "paragraphs": [
        "Pacient při vědomí s polykací schopností: Aplikace 15–20 g rychlých jednoduchých sacharidů perorálně (4–5 kostek cukru rozpuštěných ve vodě, 150–200 ml ovocného džusu či slazeného nápoje, speciální glukózové gely). Pravidlo 15: přeměřit glykémii za 15 minut; pokud přetrvává glykémie < 4.0 mmol/l, zopakovat podání 15 g rychlých sacharidů. Po normalizaci glykémie podat porci pomalých komplexních sacharidů (krajíc chleba), aby se zabránilo relapsu.",
        "Pacient v bezvědomí / neschopný polykat: (1) Žilní vstup k dispozici: okamžitý i.v. bolus 40–80 ml 20% glukózy (nebo 20–40 ml 40% glukózy) aplikovaný do fungující periferní kanyly. Stav vědomí se obvykle upravuje během několika minut. Následuje kontinuální infuze 10% glukózy k udržení bezpečné glykémie nad 5–6 mmol/l; (2) Žilní vstup NENÍ okamžitě dostupný: aplikace Glukagonu 1 mg i.m. nebo s.c. (do paže či stehna). Glukagon stimuluje glykogenolýzu v játrech. Upozornění u zkoušky: glukagon je neúčinný u pacientů s vyčerpanými zásobami jaterního glykogenu (kachexie, jaterní cirhóza, protrahované hladovění a po alkoholovém excesu!). Moderní alternativa bez jehly: intranazální glukagon (Baqsimi 3 mg do jedné nosní dírky).",
        "Zkouškový chyták – Intoxikace deriváty sulfonylurey (glimepirid, glibenklamid): Tyto léky se ireverzibilně vážou na SUR1 receptory beta-buněk pankreatu a způsobují kontinuální autonomní sekreci endogenního inzulínu. Pouhé podání bolusu glukózy vede k další masivní sekreci inzulínu a bleskovému relapsu těžké hypoglykémie! Zásady léčby: (a) Pacient MUSÍ být hospitalizován na JIP minimálně 24–48 hodin s kontinuální monitorací glykémie a infuzí glukózy; (b) Specifické antidotum: OKTREOTID (syntetický analog somatostatinu). Dávka: 50–100 µg s.c. nebo i.v. po 8–12 hodinách. Oktreotid blokuje otevírání vápníkových kanálů v beta-buňkách pankreatu a zcela zastavuje toxickou sekreci inzulínu."
      ]
    },
    {
      "title": "3. Hyperglykemické koma: srovnání Diabetické ketoacidózy (DKA) a Hyperosmolárního stavu (HHS)",
      "refs": [
        "ou2025",
        "adaDKA",
        "jbdsDKA"
      ],
      "paragraphs": [
        "Diabetická ketoacidóza (DKA) – patofyziologie a manifestace: Typicky postihuje pacienty s diabetem 1. typu s ABSOLUTNÍM DEFICITEM INZULÍNU. Spouštěcí faktory: vynechání inzulínu, akutní infekce (pneumonie, sepse, uroinfekce), infarkt myokardu, polytrauma, nově manifestovaný diabetes. Patofyziologie: nedostatek inzulínu + exces kontraregulačních hormonů (glukagon, kortizol, katecholaminy) vede k nekontrolované lipolýze v tukové tkáni -> vyplavení volných mastných kyselin do jater -> beta-oxidace mastných kyselin -> masivní produkce ketolátek (kyselina beta-hydroxymáselná a acetoctová). Vzniká těžká metabolická acidóza se zvýšenou aniontovou mezerou (HAGMA). Nástup je rychlý (hodiny až dny). Klinika: Kussmaulovo dýchání (hluboké hyperventilační acidotické dýchání), typický acetonový zápach z dechu, dehydratace (ztráta cca 5–7 litrů tekutin), nauzea, zvracení a pseudoperitonitida (difúzní bolesti břicha z acidózy napodobující náhlou příhodu břišní).",
        "Hyperosmolární hyperglykemický stav (HHS) – patofyziologie a manifestace: Typicky postihuje starší polymorbidní pacienty s diabetem 2. typu s RELATIVNÍM DEFICITEM INZULÍNU. Bazální sekrece inzulínu je zachována v množství dostatečném k supresi lipolýzy a ketogeneze v játrech, avšak naprosto nedostačuje k utilizaci glukózy v periferních tkáních. Glukóza se hromadí v extracelulárním prostoru -> těžká hyperglykémie překročí renální práh -> masivní osmotická diuréza s polyurií -> ztráta vody převyšuje ztrátu elektrolytů (hypotonická dehydratace). Nástup je plíživý, pomalý (dny až týdny). Pacient ztrácí 8–12 litrů tekutin (10–15 % tělesné hmotnosti!). Vzniká extrémní plazmatická hyperosmolalita, dehydratace mozkových buněk, těžká hypovolémie, prerenální AKI a hyperkoagulační stav s vysokým rizikem trombóz a embolií. Klinika: alterace vědomí (somnolence, sopor, koma), generalizované křeče, ložiskové neurologické deficity, hypotenze a tachykardie; Kussmaulovo dýchání a acetonový zápach CHYBÍ.",
        "Přehledné laboratorní srovnání DKA a HHS (zkoušková tabulka dle LF OU a ADA):",
        "(1) Glykémie: u DKA obvykle 14–28 mmol/l (může být i nižší, tzv. euglykemická DKA při léčbě glifloziny/SGLT2 inhibitory!); u HHS extrémně vysoká, typicky > 33.3 mmol/l (často 40–60 mmol/l);",
        "(2) Arteriální pH: u DKA acidóza pH < 7.30 (u těžké DKA pH < 7.00); u HHS zachováno pH > 7.30 (acidóza chybí nebo je pouze lehká laktátová z hypoperfúze);",
        "(3) Sérový bikarbonát (HCO3-): u DKA těžký pokles < 18 mmol/l (u těžké DKA < 10 mmol/l); u HHS normální nebo lehce snížený > 18 mmol/l;",
        "(4) Ketolátky v séru a moči: u DKA masivně pozitivní (sérový beta-hydroxybutyrát > 3.0 mmol/l); u HHS negativní nebo pouze slabě pozitivní (< 1.5 mmol/l);",
        "(5) Aniontová mezera (Anion Gap = Na+ - (Cl- + HCO3-)): u DKA vysoká HAGMA > 12–16 mmol/l; u HHS variabilní, obvykle normální (< 12 mmol/l);",
        "(6) Efektivní plazmatická osmolalita (2×Na+ + glykémie): u DKA variabilní (< 320 mOsm/kg); u HHS extrémně vysoká > 320 mOsm/kg."
      ]
    },
    {
      "title": "4. Léčebný protokol hyperglykemických stavů – tekutiny a přísný management kalia",
      "refs": [
        "ou2025",
        "adaDKA",
        "jbdsDKA"
      ],
      "paragraphs": [
        "1. KROK: Tekutinová resuscitace (ABSOLUTNÍ PRIORITA ČÍSLO JEDNA): Léčbu zahajujeme okamžitým doplněním intravaskulárního objemu balancovaným krystaloidem nebo 0.9% NaCl. V 1. hodině aplikujeme 1000 ml krystaloidu (15–20 ml/kg/h). V dalších hodinách pokračujeme rychlostí 250–500 ml/h podle stavu hydratace, centrální hemodynamiky a diurézy. Samotná rehydratace obnoví renální perfúzi, vyvolá diurézu glukózy a sníží glykémii o 3–5 mmol/l/h ještě před podáním inzulínu!",
        "Korigovaná natrémie (zkouškový vzorec): V důsledku těžké hyperglykémie dochází k osmotickému přesunu vody z buněk do extracelulárního prostoru, což vede k arteficiálnímu zředění sodíku (diluční hyponatrémii). Vypočítáváme korigovaný sodík: Na_kor = Na_naměřené + 1.6 × ((glykémie - 5.5) / 5.5). Pokud je korigovaný sodík normální nebo zvýšený (> 145 mmol/l), svědčí to pro extrémní deficit volné vody a volíme izotonické či mírně hypotonické krystaloidy (Plasmalyte).",
        "2. KROK: Management kalia (K+) – NEJKRITIČTĚJŠÍ ZKOUŠKOVÝ BOD: Celotělový deficit draslíku u DKA i HHS je masivní (ztráty močí při osmotické diuréze a zvracení činí 300–600 mmol K+), avšak iniciální sérové kalium může být normální či paradoxně zvýšené v důsledku acidózy (přesun K+ z buněk výměnou za H+) a nedostatku inzulínu. Jakmile zahájíme léčbu inzulínem a rehydrataci, inzulín otevře Na+/K+-ATPázu a způsobí BLESKOVÝ MASIVNÍ PŘESUN KALIA ZPĚT DO BUNĚK. Pokud bychom kalium nesubstituovali, dojde k fatální hypokalémii, maligním komorovým arytmiím a zástavě oběhu!",
        "Pravidla pro zahájení inzulínu a substituci kalia (zlatý algoritmus):",
        "(1) Pokud je sérové kalium K+ < 3.3 mmol/l: INZULÍN SE V ŽÁDNÉM PŘÍPADĚ NESMÍ PODAT! Inzulín by vyvolal okamžitý fatální pokles draslíku. Léčba inzulínem se odkládá, podává se masivní infuze KCl (20–40 mmol/h) za kontinuální EKG monitorace a inzulín se smí zahájit až po vzestupu K+ >= 3.5 mmol/l;",
        "(2) Pokud je K+ v rozmezí 3.3–5.2 mmol/l: zahájíme inzulín a SOUČASNĚ PŘIDÁVÁME KCl 20–30 mmol do každého litru infuzního roztoku tak, abychom udrželi sérové kalium v bezpečném pásmu 4.0–5.0 mmol/l;",
        "(3) Pokud je K+ > 5.2 mmol/l: inzulín zahájíme, kalium v infuzi nepodáváme, ale hladinu K+ přeměřujeme v krevních plynech každé 2 hodiny (po zahájení inzulínu rychle klesne)."
      ]
    },
    {
      "title": "5. Inzulínový protokol, rychlost poklesu glykémie a striktní pravidla pro bikarbonát",
      "refs": [
        "ou2025",
        "adaDKA",
        "jbdsDKA"
      ],
      "paragraphs": [
        "3. KROK: Inzulínový protokol (po zahájení volumoterapie a ověření K+ >= 3.5 mmol/l): Zahajujeme kontinuální intravenózní infuzi krátkodobě působícího humánního inzulínu (Actrapid, Humulin R) lineárním dávkovačem v dávce 0.05–0.1 IU/kg/h (u dospělého obvykle 4–6 IU/h). Rutinní úvodní i.v. bolus inzulínu se dle moderních guidelines (ADA 2026, JBDS 2024) NEDOPORUČUJE, protože zvyšuje riziko prudkého poklesu osmolality a hypokalémie.",
        "Cílová rychlost poklesu glykémie: Glykémie smí klesat rychlostí MAXIMÁLNĚ 3.0–4.0 mmol/l za hodinu (maximálně 5.0 mmol/l/h!). Příliš rychlý pokles glykémie vede k prudkému poklesu extracelulární osmolality, přesunu vody do mozkových buněk a FATÁLNÍMU EDÉMU MOZKU!",
        "Zlomový bod infuzní terapie (kritický zkouškový moment):",
        "(a) U Diabetické ketoacidózy (DKA): jakmile glykémie klesne na 11.0–14.0 mmol/l, PŘIDÁVÁME DO INFUZE 5% NEBO 10% GLUKÓZU (např. G5 s 0.45% NaCl) a snížíme dávku inzulínu na 0.02–0.05 IU/kg/h. DŮVOD: Inzulín se u DKA nesmí zastavit při dosažení normoglykémie! Cílem inzulínu u DKA není normalizace glykémie, ale ZASTAVENÍ LIPOLÝZY A VYHOJENÍ KETOACIDÓZY (uzavření aniontové mezery, vzestup HCO3- >= 18 mmol/l a pH > 7.30). Glukózu přidáváme proto, abychom mohli inzulín bezpečně podávat dál bez rizika hypoglykémie!",
        "(b) U Hyperosmolárního stavu (HHS): jakmile glykémie klesne na 14.0–15.0 mmol/l, rovněž přidáváme 5–10% glukózu k infuzi a udržujeme glykémii mezi 11–15 mmol/l až do úplné normalizace plazmatické osmolality (< 300 mOsm/kg) a návratu vědomí pacienta.",
        "4. KROK: Bikarbonát sodný (8.4% NaHCO3) u zkoušky: BIKARBONÁT JE U DKA RUTINNĚ PŘÍSNĚ ZAKÁZÁN! Randomizované studie prokázaly, že podání bikarbonátu nezlepšuje mortalitu ani morbiditu a neurychluje úpravu acidózy. Závažná rizika podání NaHCO3: (1) Paradoxní nitrobuněčná acidóza mozku: podaný bikarbonát reaguje s H+ za vzniku CO2 a vody. CO2 volně a bleskově difunduje přes hematoencefalickou bariéru do likvoru a mozkových buněk, kde s vodou opět vytvoří H+ a zhorší acidózu mozku, zatímco polární bikarbonát přes bariéru neprojde; (2) Zhoršení hypokalémie přesunem K+ do buněk; (3) Posun disociační křivky hemoglobinu doleva (Haldaneův efekt), což omezí uvolňování kyslíku do tkání; (4) Zvýšení produkce laktátu. JEDINÁ VÝJIMEČNÁ INDIKACE BIKARBONÁTU: extrémní acidóza s arteriálním pH < 6.90 ohrožující život zástavou oběhu (podává se 100 mmol NaHCO3 ve 400 ml sterilní vody s 20 mmol KCl během 2 hodin).",
        "Komplikace léčby hyperglykemických stavů: (1) Edém mozku: nejzávažnější komplikace s mortalitou 20–40 %, postihuje typicky děti a mladé dospělé s DKA během prvních 4–12 hodin léčby. Příčina: příliš rychlý pokles glykémie (> 5 mmol/l/h), nadměrná infuze hypotonických roztoků a podání bikarbonátu. Příznaky: bolest hlavy, letargie, pokles vědomí, bradykardie a hypertenze (Cushingova triáda), edém papily. Léčba: okamžitý bolus 3% NaCl (3–5 ml/kg během 15 min) nebo 20% Mannitol (0.5–1.0 g/kg), elevace hlavy a restrikce tekutin; (2) Těžká hypokalémie a hypofosfatémie; (3) Hyperchloremická acidóza z nadměrného podání 0.9% NaCl; (4) Plicní edém z tekutinového přetížení."
      ]
    }
  ],
  "corrections": [
    "Inzulín se u DKA a HHS NIKDY nesmí zahájit, pokud je sérové kalium K+ < 3.3 mmol/l. Inzulín přesune draslík do buněk a vyvolá okamžitou fatální arytmii a zástavu oběhu!",
    "Při poklesu glykémie na 11–14 mmol/l u DKA se inzulín NESMÍ zastavit. Musí se přidat 5–10% glukóza do infuze a pokračovat v podávání inzulínu až do vymizení ketózy a normalizace bikarbonátu.",
    "Bikarbonát sodný (8.4% NaHCO3) se u DKA rutinně nepodává – způsobuje paradoxní acidózu mozku a zhoršuje hypokalémii. Je vyhrazen pouze pro extrémní pH < 6.90.",
    "Rychlost poklesu glykémie nesmí překročit 3–4 mmol/l za hodinu. Rychlejší pokles vede k osmotickému edému mozku, zejména u mladých pacientů."
  ],
  "checks": [
    {
      "question": "Proč je u diabetické ketoacidózy přísně zakázáno ukončit infuzi inzulínu, jakmile glykémie klesne na normální hodnoty (např. 12 mmol/l)?",
      "answer": "Protože primárním cílem inzulínu u DKA není pouhé snížení glykémie, nýbrž zastavení lipolýzy, ketogeneze a vyhojení ketoacidózy (uzavření anion gapu a normalizace bikarbonátu). Pokud bychom inzulín vysadili, ketogeneze se okamžitě obnoví. Správným postupem je přidat do infuze 5% až 10% glukózu a pokračovat v redukované infuzi inzulínu (0.02–0.05 IU/kg/h) až do úplného vymizení ketoacidózy.",
      "refs": [
        "ou2025",
        "adaDKA",
        "jbdsDKA"
      ]
    },
    {
      "question": "Jaký je mechanismus vzniku paradoxní mozkové acidózy po podání bikarbonátu sodného u DKA?",
      "answer": "Podaný bikarbonát (HCO3-) reaguje v krvi s vodíkovými ionty za vzniku CO2 a vody. CO2 jako nepolární plyn volně a bleskově prostupuje hematoencefalickou bariérou do likvoru a mozkových buněk, kde reakcí s vodou vytvoří kyselinu uhličitou a disociuje na H+, čímž paradoxně prohloubí acidózu CNS. Polární bikarbonát přitom hematoencefalickou bariéru prakticky nepřekračuje.",
      "refs": [
        "ou2025",
        "adaDKA"
      ]
    },
    {
      "question": "Jak se liší ztráty tekutin a patofyziologie dehydratace mezi DKA a HHS?",
      "answer": "U DKA vzniká absolutní deficit inzulínu rychle (hodiny až dny), deficit tekutin činí obvykle 5–7 litrů (cca 100 ml/kg) a dominuje těžká ketoacidóza. U HHS vzniká stav pomalu (dny až týdny) v důsledku masivní protrahované osmotické diurézy při extrémní hyperglykémii (> 33 mmol/l) bez výrazné ketoacidózy, přičemž deficit tekutin je extrémní – dosahuje 8 až 12 litrů (10–15 % tělesné hmotnosti, 100–220 ml/kg) a provází jej těžká hyperosmolalita (> 320 mOsm/kg).",
      "refs": [
        "ou2025",
        "adaDKA"
      ]
    }
  ]
},
"B28": {
  "title": "Intoxikace – dělení, příčiny, diagnostika, klinické toxidromy, metody primární a sekundární eliminace, zásady léčby (TIS ČR, EXTRIP)",
  "reviewed": "2026-11-04",
  "edition": "LF OU 2025 (díl II, kap. 12, str. 178–184) · TIS ČR 2025 · AACT/EAPCCT 2024 · EXTRIP Guidelines",
  "scope": "Akutní intoxikace v intenzivní medicíně: dělení (náhodné, suicidální, profesionální, iatrogenní), diagnostický postup (ABCDE, toxikologická anamnéza, TIS Praha), 5 základních toxidromů (anticholinergní, cholinergní SLUDGE/DUMBELS, sympatomimetický, sedativně-hypnotický/opioidní, serotonergní), pomocná vyšetření (HAGMA, osmolální okno, toxikologický screening, EKG a QRS), metody primární eliminace a dekontaminace (dekontaminace kůže/očí, výplach žaludku – indikace do 1 h a absolutní kontraindikace: kyseliny/louhy, pěnidla, uhlovodíky; aktivní uhlí 1 g/kg, opakované dávky MDAC a látky, které se na uhlí nevážou; střevní laváž PEG), metody sekundární eliminace (forsírovaná alkalická diuréza u salicylátů, hemodialýza dle EXTRIP – metanol, etylenglykol, lithium, salicyláty; hemoperfúze) a klíčová antidota.",
  "opening": "Akutní intoxikace představují náhle vzniklá onemocnění způsobená působením exogenní biologicky aktivní látky (LF OU 2025 díl II kap. 12). V intenzivní péči platí zásadní pravidlo: 'Léčím pacienta, ne toxin!' – prioritou je vždy okamžitá stabilizace vitálních funkcí podle algoritmu ABCDE před jakýmkoli detailním pátráním po jedu. U zkoušky začínám klasifikací otrav a rolí Toxikologického informačního střediska (TIS Praha). Následně představím 5 základních klinických toxidromů (anticholinergní, cholinergní, sympatomimetický, sedativně-hypnotický/opioidní a serotonergní), které umožňují cílenou orientaci u lůžka. Detailně rozeberu metody primární eliminace: dekontaminaci povrchu těla, přísně vymezené indikace výplachu žaludku do 1 hodiny od požití s jeho absolutními kontraindikacemi (kyseliny, louhy, pěnidla, ropné deriváty!), správné použití aktivního uhlí (1 g/kg) včetně zkouškového výčtu látek, které se na uhlí nevážou (alkoholy, kovy, kyseliny/louhy). Na závěr předvedu metody sekundární eliminace: forsírovanou alkalickou diurézu bikarbonátem, kritéria pro urgentní hemodialýzu dle mezinárodní skupiny EXTRIP (metanol, etylenglykol, lithium, salicyláty, theofylin) a přehled nejdůležitějších specifických antidot.",
  "openingRefs": [
    "ou2025",
    "tisPraha",
    "aactDecon",
    "extripGroup"
  ],
  "sections": [
    {
      "title": "1. Definice, epidemiologie, dělení a obecný přístup k intoxikovanému",
      "refs": [
        "ou2025",
        "tisPraha"
      ],
      "paragraphs": [
        "Definice a epidemiologie intoxikací (LF OU 2025): Intoxikace je stav způsobený vniknutím toxické dávky cizorodé látky do organismu, který vede k funkčnímu či strukturálnímu poškození orgánů. V intenzivní medicíně dělíme otravy podle okolností vzniku na: (1) Suicidální pokusy (nejčastější u dospělých a adolescentů, často polypragmazie léků v kombinaci s alkoholem – benzodiazepiny, paracetamol, antidepresiva, antipsychotika); (2) Náhodné / akcentální intoxikace (typicky u dětí ve věku 1–5 let požitím saponátů, léků či kosmetiky; u dospělých záměna nápojů v neoznačených lahvích – např. fridex či čističe, a inhalační otravy kouřem/CO); (3) Profesionální a abuzivní intoxikace (průmyslové havárie, předávkování nelegálními drogami – opioidy, pervitin, syntetické katinony); (4) Iatrogenní předávkování léků.",
        "Algoritmus péče u lůžka – 'Treat the patient, not the poison': Prvním a nejdůležitějším krokem je stabilizace životních funkcí dle ABCDE: (A) Zajištění průchodnosti dýchacích cest (při GCS <= 8 okamžitá OTI k prevenci aspirace žaludečního obsahu); (B) Ventilace a oxygenace (vyloučení hypoventilace u opioidů/sedativ, podání kyslíku); (C) Cirkulace (tekutinová resuscitace krystaloidy, vazopresory při vazodilataci, léčba arytmií); (D) Disability (okamžité změření kapilární glykémie glukometrem k vyloučení hypoglykémie!); (E) Exposure (svlečení pacienta, kontrola vpichů, teplota – prevence hypotermie či hypertermie).",
        "Toxikologické informační středisko (TIS Praha, Klinika pracovního lékařství a toxikologie 1. LF UK a VFN): Celostátní nepřetržitá telefonická konzultační služba (telefon: 224 91 92 93 nebo 224 91 54 02). Poskytuje okamžité expertní informace o toxicitě látek, dávkách, kinetice, specifických antidotech a pomáhá koordinovat dostupnost vzácných antidot.",
        "Anamnéza a vyšetření na místě: Zajištění obalů od léků, zbytků chemikálií, prázdných lahví, dopisu na rozloučenou, rozhovor se záchrannou službou, policií a rodinou. Zjišťujeme: přesnou identitu látky, odhadnuté množství, časový interval od požití, cestu vstupu a zda pacient požil alkohol či jiné látky."
      ]
    },
    {
      "title": "2. Klinické toxidromy (příznakové syndromy) u akutních otrav",
      "refs": [
        "ou2025",
        "tisPraha",
        "aactDecon"
      ],
      "paragraphs": [
        "Toxidrom je charakteristický soubor klinických příznaků a symptomů, který odráží působení určité třídy toxických látek na receptory a umožňuje rychlou orientaci ještě před laboratorní identifikací jedu (LF OU 2025 díl II kap. 12):",
        "(1) Anticholinergní toxidrom (atropin, tricyklická antidepresiva, antihistaminika 1. generace, spazmolytika, neuroleptika, rulík zlomocný – Atropa belladonna, durman): Klasická mnemotechnika: 'Suchý jako troud, červený jako řepa, slepý jako krtek, horký jako pec, bláznivý jako zajíc'. Příznaky: mydriáza bez fotoreakce, suchost kůže a sliznic (nepotí se!), zčervenání obličeje, hypertermie, sinusová tachykardie, retence moči, vymizení střevní peristaltiky (paralytický ileus), psychomotorický neklid, zrakové halucinace, delirium a křeče. Antidotum u těžkého deliria bez kardiotoxicity: fyzostigmin (inhibitor AChE prostupující přes HEB);",
        "(2) Cholinergní toxidrom (organofosfátové insekticidy, karbamáty, nervově paralytické bojové látky – sarin, soman, novičok; intoxikace inhibitory acetylcholinesterázy): Akronymy SLUDGE (Salivation, Lacrimation, Urination, Defecation, GI cramping, Emesis) a DUMBELS (Defecation, Urination, Miosis, Bradycardia/Bronchorrhea/Bronchospasm, Emesis, Lacrimation, Salivation). Příznaky: zúžené zornice (mióza), extrémní pocení, masivní slinění, slzení, průjem, křeče v břiše, svalové fascikulace přecházející v chabou obrnu a především život ohrožující bronchiální hypersekrece (bronchorea) a bronchospasmus, které vedou k udušení pacienta! Antidotum: Atropin v masivních dávkách (2–5 mg i.v. každých 5–10 min titrovaně do vysušení dýchacích cest) + oximy (obidoxim / pralidoxim – reaktivátory AChE);",
        "(3) Sympatomimetický toxidrom (metamfetamin/pervitin, kokain, amfetaminy, extáze/MDMA, efedrin, kofein): Příznaky: sinusová tachykardie, těžká hypertenze, mydriáza, PROFÚZNÍ POCENÍ (klíčový rozdíl oproti suché kůži u anticholinergního syndromu!), třes, motorická agitovanost, paranoidní psychóza, křeče, hypertermie, rhabdomyolýza, riziko disekce aorty, infarktu myokardu a intrakraniálního krvácení. Terapie: benzodiazepiny (diazepam 10–20 mg i.v.) k tlumení centrálního sympatiku;",
        "(4) Sedativně-hypnotický a opioidní toxidrom: (a) Opioidní toxidrom (morfin, heroin, fentanyl, oxykodon, metadon): klasická diagnostická triáda: TĚŽKÝ ÚTLUM DECHU (bradypnoe < 8–10/min až apnoe), BODOVITÉ 'ŠPENDLÍKOVITÉ' ZORNICE (mióza) a PORUCHA VĚDOMÍ (sopor až kóma). Dále hypotenze, bradykardie, hyporeflexie a plicní edém. Antidotum: Naloxon (0.4 mg i.v. titrovaně); (b) Sedativně-hypnotický toxidrom (benzodiazepiny, barbituráty, z-hypnotika, alkohol): útlum CNS, ataxie, dysartrie, nystagmus, hypotermie, normální či lehce zúžené zornice se zachovanou fotoreakcí, útlum dechu nastává zejména při kombinaci s alkoholem;",
        "(5) Serotoninový syndrom (kombinace SSRI, SNRI, MAOI, tramadolu, triptanů, lithia či MDMA): Diagnostická triáda: neuromuskulární hyperexcitabilita (SPONTÁNNÍ KLONUS, hyperreflexie výraznější na DKK, rigidita svalů), autonomní dysregulace (hypertermie, profúzní pocení, tachykardie, hypertenze, průjem) a alterace mentálního stavu (agitovanost, zmatenost). Antidotum: cyproheptadin (antagonista 5-HT2 receptorů), chlazení, benzodiazepiny."
      ]
    },
    {
      "title": "3. Laboratorní diagnostika, acidobazické poruchy a toxikologický screening",
      "refs": [
        "ou2025",
        "tisPraha",
        "extripGroup"
      ],
      "paragraphs": [
        "Acidobazická rovnováha a krevní plyny (ASTRUP): Stanovení aniontové mezery (Anion Gap = Na+ - (Cl- + HCO3-), norma 12–16 mmol/l). Metabolická acidóza se zvýšenou aniontovou mezerou (HAGMA) je typická pro mnemotechnickou pomůcku KULT: Ketoacidóza (diabetická, alkoholická), Uremie, Laktátová acidóza (šok, křeče, metformin, CO, kyanidy) a Toxiny: Metanol, Etylenglykol, Salicyláty, Paraldehyd.",
        "Osmolální okno (Osmolal Gap): Rozdíl mezi naměřenou plazmatickou osmolalitou (pomocí bodu tání – kryoskopicky) a vypočtenou efektivní osmolalitou (vzorec: 2×Na+ + glukóza + urea). Fyziologická hodnota je < 10–15 mOsm/kg. Vzestup osmolálního okna nad 15–20 mOsm/kg signalizuje přítomnost nevypočtených nízkomolekulárních osmoticky aktivních látek v krvi – typicky TOXICKÉ ALKOHOLY v časné fázi otravy (etanol, metanol, etylenglykol, izopropanol). Pozor: jakmile se alkoholy metabolizují na organické kyseliny, osmolální okno klesá a stoupá aniontová mezera (HAGMA)!",
        "Toxikologické vyšetření: (1) Rychlý orientační screening z moči: imunochromatografické kazetové testy na běžné drogy (opiáty, amfetaminy/metamfetamin, kanabinoidy, kokain, benzodiazepiny, barbituráty, TCA). U zkoušky zdůraznit limitace: riziko falešné negativity (fentanyl a buprenorfin se nezobrazí na standardním testu pro opiáty!) a falešné pozitivity; (2) Kvantitativní stanovení specifických koncentrací v krvi v toxikologické laboratoři: paracetamol, etanol, metanol, etylenglykol, lithium, digoxin, theofylin, salicyláty, karbamazepin, fenobarbital. U paracetamolu je stanovení hladiny po 4 hodinách od požití nezbytné pro indikaci antidota dle Prescottova nomogramu!",
        "EKG monitorace u intoxikací: Zhodnocení šíře komplexu QRS: rozšíření QRS > 100–120 ms je klíčovým markerem blokády rychlých sodíkových kanálů myokardu (tricyklická antidepresiva, antiarytmika I. třídy, kokain, karbamazepin) a varuje před maligní komorovou tachykardií. Dále sledujeme prodloužení intervalu QTc (> 500 ms = riziko Torsades de Pointes) a přítomnost AV blokád."
      ]
    },
    {
      "title": "4. Metody primární eliminace a dekontaminace (výplach žaludku, aktivní uhlí, laváž PEG)",
      "refs": [
        "ou2025",
        "tisPraha",
        "aactDecon"
      ],
      "paragraphs": [
        "Dekontaminace povrchu těla a očí: Při expozici kůží (organofosfáty, chemikálie) okamžitě svléknout kontaminovaný oděv (personál musí mít ochranné rukavice a plášť!), kůži důkladně omýt vlažnou vodou a mýdlem. Při zasažení očí provádět okamžitý kontinuální výplach spojivkového vaku fyziologickým roztokem nebo vlažnou vodou po dobu minimálně 15–20 minut.",
        "Výplach žaludku (Gastric Lavage) – PŘÍSNÁ ZKOUŠKOVÁ PRAVIDLA A LIMITY: Dle mezinárodních doporučení AACT/EAPCCT a LF OU se výplach žaludku provádí VÝHRADNĚ tehdy, pokud pacient požil ŽIVOT OHROŽUJÍCÍ MNOŽSTVÍ TOXINU A INTERVAL OD POŽITÍ NEPŘESÁHL 1 HODINU! Podmínka: pacient při plném vědomí, nebo pacient v bezvědomí SE ZAJIŠTĚNÝMI DÝCHACÍMI CESTAMI OROTRACHEÁLNÍ KANYLOU S NAFOUKNUTOU MANŽETOU! Provádí se tlustou žaludeční sondou (velikost 36–40 F u dospělých) po frakcích 200–300 ml vlažné vody do vyčištění.",
        "ABSOLUTNÍ KONTRAINDIKACE VÝPLACHU ŽALUDKU (zkouškový chyták nejvyšší důležitosti):",
        "(1) Požití korozivních látek (kyseliny a louhy): hrozí mechanická perforace poleptaného jícnu a žaludku a další popálení dýchacích cest při zvracení;",
        "(2) Požití pěnidel a detergentů (saponáty, tekutá mýdla): hrozí masivní pěnění v žaludku a udušení pacienta pěnou;",
        "(3) Požití těkavých ropných uhlovodíků (benzín, petrolej, ředidla, lakový benzín): extrémní riziko chemické aspirační pneumonitidy a destrukce surfaktantu s fatálním ARDS;",
        "(4) Nekrytá porucha vědomí (GCS < 8 bez orotracheální intubace): bezprostřední riziko masivní aspirace žaludečního obsahu do plic.",
        "Aktivní uhlí (Carbo adsorbens) – zlatý standard dekontaminace GIT: Podává se co nejdříve po požití, ideálně do 1 hodiny, perorálně nebo nazogastrickou sondou rozpuštěné ve vodě. Dávkování: 1 g/kg tělesné hmotnosti (u dospělého obvykle 50–100 g). Opakované dávkování aktivního uhlí (MDAC – Multiple-Dose Activated Charcoal): podání 0.5 g/kg po 2–4 hodinách. Je účinné u látek podléhajících enterohepatální či enterogastrické cirkulaci (karbamazepin, theofylin, fenobarbital, dapsone, digoxin).",
        "LÁTKY, KTERÉ SE NA AKTIVNÍ UHLÍ NEVÁŽOU (zkouškový výčet):",
        "(a) Alkoholy a glykoly: etanol, metanol, etylenglykol, izopropanol;",
        "(b) Kovy a anorganické soli: lithium, železo, draslík, olovo, rtuť, arzén;",
        "(c) Silné kyseliny a louhy;",
        "(d) Ropné uhlovodíky.",
        "Celková střevní laváž (Whole Bowel Irrigation – WBI): Výplach celého trávicího traktu izoosmolálním roztokem polyetylenglykolu (PEG) podávaným sondou rychlostí 1.5–2 litry za hodinu až do odchodu čiré tekutiny z rekta. Indikace: požití pašovaných balíčků drog ('body packers' / 'body stuffers' s kokainem či heroinem), požití retardovaných lékových forem s postupným uvolňováním a masivní otravy železem či lithiem."
      ]
    },
    {
      "title": "5. Metody sekundární eliminace (EXTRIP) a přehled specifických antidot",
      "refs": [
        "ou2025",
        "tisPraha",
        "extripGroup"
      ],
      "paragraphs": [
        "Forsírovaná alkalická diuréza: Zvýšení renálního vylučování ionizací slabých kyselých látek v tubulární moči ('ion trapping'). Aplikací 8.4% NaHCO3 (100–150 mmol v 5% glukóze) alkalizujeme moč na cílové pH 7.5–8.5. Alkalické prostředí převede slabé kyseliny na ionizovanou formu, která je nepolární, nemůže být pasivně zpětně resorbována v tubulech a odchází močí. Indikace: intoxikace SALICYLÁTY (kyselina acetylsalicylová) a FENOBARBITALEM. Pozor na hypokalémii (nutno doplňovat KCl).",
        "Extrakorporální eliminační metody dle mezinárodních kritérií EXTRIP (Extracorporeal Treatments in Poisoning): Aby byl toxin účinně odstranitelný hemodialýzou, musí mít tyto fyzikálně-chemické vlastnosti: (1) Nízkou molekulovou hmotnost (< 500 Da); (2) Malý distribuční objem (Vd < 1–2 l/kg; látka nesmí být uložena v tucích či tkáních); (3) Nízkou vazbu na plazmatické bílkoviny (< 50–70 %); (4) Vysokou rozpustnost ve vodě.",
        "Klíčové indikace k hemodialýze u otrav dle EXTRIP (LF OU 2025):",
        "(a) Metanol a etylenglykol: koncentrace v plazmě > 15–20 mmol/l (nebo > 500 mg/l), těžká metabolická acidóza (pH < 7.25–7.30), přítomnost zrakových poruch (metanol) nebo rozvoj akutního selhání ledvin (etylenglykol);",
        "(b) Lithium: koncentrace v séru > 4.0 mmol/l u akutní otravy, nebo > 2.5 mmol/l u chronické otravy s neurologickými příznaky, porucha vědomí, křeče, renální selhání;",
        "(c) Salicyláty: koncentrace v séru > 6.5 mmol/l (900 mg/l) u akutní otravy, nebo > 5.2 mmol/l (720 mg/l) s těžkou acidózou, plicním edémem, edémem mozku či selháním ledvin;",
        "(d) Theofylin: koncentrace > 550 µmol/l (100 mg/l) u akutní otravy, refrakterní komorové arytmie či status epilepticus.",
        "Hemoperfúze: Krev pacienta protéká kolonou obsahující aktivní uhlí nebo pryskyřici. Umožňuje eliminaci látek s vyšší lipofilitou a vyšší vazbou na bílkoviny než hemodialýza (karbamazepin, theofylin).",
        "Přehledná tabulka klíčových specifických antidot v intenzivní péči (zkouškový přehled):",
        "• Paracetamol -> N-acetylcystein (NAC)",
        "• Opioidy -> Naloxon (0.4 mg i.v. titrovaně)",
        "• Toxické alkoholy (metanol, etylenglykol) -> Fomepizol nebo 10% Etanol",
        "• Organofosfáty a karbamáty -> Atropin (ve vysokých dávkách) + Obidoxim",
        "• Benzodiazepiny -> Flumazenil (0.2 mg i.v. pomalu; KONTRAINDIKOVÁN při smíšené otravě s TCA a u epileptiků!)",
        "• Tricyklická antidepresiva (TCA) a blokátory Na+ kanálů -> 8.4% NaHCO3 (1–2 mmol/kg i.v.)",
        "• Kyanidy -> Hydroxokobalamin (Cyanokit 5 g i.v.)",
        "• Beta-blokátory -> Glukagon (3–5 mg i.v. bolus, pak infuze), vysoko-dávkovaný inzulín (HIET)",
        "• Blokátory vápníkových kanálů -> Calcium gluconicum 10% (10–20 ml i.v.), inzulín (HIET)",
        "• Lokální anestetika a lipofilní kardiotoxiny -> 20% Intralipid (lipidová resuscitace)",
        "• Těžké kovy (olovo, rtuť) -> Cheláty (EDTA, DMPS, DMSA), Železo -> Deferoxamin",
        "• Digoxin -> Specifické Fab fragmenty protilátek (DigiFab)"
      ]
    }
  ],
  "corrections": [
    "Výplach žaludku je u požití kyselin a louhů PŘÍSNĚ ZAKÁZÁN – sonda způsobí mechanickou perforaci nekrotického jícnu či žaludku a zvracení vyvolá další popálení dýchacích cest!",
    "Výplach žaludku je rovněž zakázán u ropných uhlovodíků (benzín, petrolej, ředidla) a saponátů pro extrémní riziko chemické aspirační pneumonitidy a udušení pěnou.",
    "Aktivní uhlí se NESMÍ podávat u otrav alkoholy (etanol, metanol, etylenglykol) a kovy (lithium, železo) – tyto látky se na uhlí nevážou a podání pacienta zbytečně zatěžuje rizikem zvracení a aspirace.",
    "Flumazenil se NESMÍ podat paušálně u každého bezvědomí s podezřením na benzodiazepiny – při současném požití prokonvulzivních látek (TCA) nebo u závislých pacientů vyvolá neztišitelný status epilepticus a fatální arytmie!"
  ],
  "checks": [
    {
      "question": "Proč je výplach žaludku přísně kontraindikován u pacienta po požití louhu na čištění odpadu nebo benzínu?",
      "answer": "U kyselin a louhů hrozí mechanická perforace chemicky ztenčené a nekrotické stěny jícnu a žaludku zavedenou sondou a při zvracení dochází k opakovanému popálení hypofaryngu a dýchacích cest. U těkavých ropných uhlovodíků (benzín, petrolej) hrozí při sebemenším zvracení a aspiraci vniknutí uhlovodíků do plic, což způsobí rozpuštění surfaktantu, masivní nekrózu alveolů, těžkou chemickou pneumonitidu a fatální ARDS.",
      "refs": [
        "ou2025",
        "aactDecon",
        "tisPraha"
      ]
    },
    {
      "question": "Které látky se nevážou na aktivní uhlí a jaký to má praktický význam pro indikaci dekontaminace?",
      "answer": "Na aktivní uhlí se nevážou: alkoholy a glykoly (etanol, metanol, etylenglykol), anorganické kovy a ionty (lithium, železo, draslík, těžké kovy), silné kyseliny, louhy a ropné uhlovodíky. U intoxikace těmito látkami je podání aktivního uhlí zbytečné a kontraindikované pro riziko zvracení a aspirace.",
      "refs": [
        "ou2025",
        "aactDecon"
      ]
    },
    {
      "question": "Jaká kritéria musí splňovat toxin, aby byl účinně odstranitelný hemodialýzou dle EXTRIP, a pro které látky je hemodialýza indikována?",
      "answer": "Toxin musí mít malou molekulovou hmotnost (< 500 Da), malý distribuční objem (Vd < 1–2 l/kg), nízkou vazbu na plazmatické bílkoviny a vysokou rozpustnost ve vodě. Hlavní indikace hemodialýzy dle EXTRIP jsou: metanol, etylenglykol, lithium, salicyláty a theofylin při vysokých hladinách nebo těžkém klinickém průběhu.",
      "refs": [
        "extripGroup",
        "ou2025"
      ]
    }
  ]
},
"B29": {
  "title": "Intoxikace – vybrané typy otrav – etylalkohol, metanol a etylenglykol, oxid uhelnatý, opioidy, psychofarmaka (TCA, benzodiazepiny), paracetamol",
  "reviewed": "2026-11-04",
  "edition": "LF OU 2025 (díl II, kap. 12, str. 178–184) · EAPCCT/AACT · Prescott Nomogram · WHO Opioid Overdose",
  "scope": "Klinická toxikologie v intenzivní péči: (1) Paracetamol (toxická dávka, NAPQI, centrilobulární nekróza, 4 stádia, Prescottův nomogram, N-acetylcystein 300 mg/kg i.v. během 21 h); (2) Toxické alkoholy – metanol a etylenglykol (ADH metabolismus, kyselina mravenčí a slepota vs. kyselina šťavelová a kalcium-oxalátové AKI, osmolální okno vs. HAGMA, antidota: fomepizol 15 mg/kg vs. 10% etanol, folinát, hemodialýza); (3) Etylalkohol (etanol – stádia, rizika: aspirace, hypotermie, kraniotraumata, hypoglykémie, delirium tremens a thiamin); (4) Oxid uhelnatý (CO – vazba na Hb 200–250x, posun křivky doleva, falešně normální pulzní oxymetrie, CO-oxymetrie, normobarický 100% O2 vs. hyperbarická komora HBO); (5) Opioidy (triáda: hypoventilace + mióza + kóma, titrovaný naloxon 0.4 mg i.v., riziko relapsu pro krátký poločas naloxonu 30–90 min); (6) Psychofarmaka: Tricyklická antidepresiva (TCA – blokáda Na+ kanálů, rozšíření QRS > 120 ms, antidotum: 8.4% NaHCO3) a Benzodiazepiny (flumazenil a jeho přísné kontraindikace).",
  "opening": "Vybrané akutní intoxikace představují nejčastější příčiny toxikologických příjmů na resuscitační lůžka ARO a JIP (LF OU 2025 díl II kap. 12). U ústní zkoušky postupuji systematicky podle jednotlivých látek: U PARACETAMOLU vysvětlím vznik toxického metabolitu NAPQI při vyčerpání glutathionu, popíši 4 klinická stádia, indikaci dle Prescottova nomogramu a třístupňový infuzní protokol N-acetylcysteinu (300 mg/kg za 21 h). U TOXICKÝCH ALKOHOLŮ (metanol a etylenglykol) porovnám jejich toxické metabolity (kyselina mravenčí se slepotou u metanolu vs. kyselina šťavelová s oxalátovým selháním ledvin u etylenglykolu), popíši biochemický posun z časného osmolálního okna do pozdní HAGMA acidózy a specifickou léčbu blokádou alkoholdehydrogenázy (fomepizol nebo 10% etanol) a hemodialýzou. U ETANOLU zdůrazním riziko aspirace, traumat hlavy, těžké hypoglykémie a nutnost thiaminu před glukózou. U OXIDU UHELNATÉHO (CO) upozorním na fatální past v podobě falešně 100% saturace na běžné pulzní oxymetrii a představím indikace k hyperbarické oxygenoterapii (HBO). U OPIOIDŮ předvedu titrované podání naloxonu s varováním před relapsem apnoe pro jeho krátký poločas a u TRICYKLICKÝCH ANTIDEPRESIV (TCA) vysvětlím kardiální toxicitu s rozšířením QRS léčenou 8.4% natrium bikarbonátem.",
  "openingRefs": [
    "ou2025",
    "paracetamolNPIS",
    "toxicAlcohols",
    "coGuideline",
    "opioidWHO",
    "tcaToxicology"
  ],
  "sections": [
    {
      "title": "1. Intoxikace paracetamolem – patofyziologie, Prescottův nomogram a N-acetylcystein",
      "refs": [
        "ou2025",
        "paracetamolNPIS"
      ],
      "paragraphs": [
        "Patofyziologie a toxické dávky (LF OU 2025 díl II kap. 12): Paracetamol (acetaminofen) je v terapeutických dávkách z 90 % konjugován v játrech glukuronidací a sulfatací na netoxické metabolity. Pouze 5–10 % je oxidováno cytochromem P450 (izoenzym CYP2E1) na vysoce reaktivní a cytotoxický meziprodukt N-acetyl-p-benzochinonimin (NAPQI). Tento metabolit je za fyziologických podmínek okamžitě detoxikován konjugací s jaterním glutathionem. Při požití toxické dávky (> 140–150 mg/kg u dětí a zdravých dospělých, tj. > 7.5–10 g; u chronických alkoholiků, podvyživených a indukovaných pacientů stačí již dávka > 4 g / 75–100 mg/kg!) dochází k zahlcení sulfatační kapacity, veškerý paracetamol je metabolizován přes CYP2E1 a zásoby glutathionu v játrech klesají pod kritických 30 %. Nevázaný volný NAPQI se kovalentně váže na sulfhydrylové skupiny bílkovin buněčných membrán hepatocytů, což způsobí masivní oxidační stres a centrilobulární jaterní nekrózu.",
        "Čtyři klinická stádia otravy paracetamolem: (1) 1. stádium (prvních 24 hodin): pacient je často asymptomatický, nebo má nespecifické gastrointestinální obtíže (nauzea, zvracení, nechutenství, bledost, pocení); laboratorní jaterní testy jsou zcela normální; (2) 2. stádium (24–48 hodin od požití): zdánlivé klinické zlepšení nauzey, avšak začíná bleskový laboratorní vzestup jaterních transamináz (ALT, AST stoupají do tisíců IU/l), prodlužuje se protrombinový čas / INR a objevuje se bolest v pravém podžebří; (3) 3. stádium (72–96 hodin – vrchol jaterního selhání): rozvoj fulminantního jaterního selhání (ALF) s hlubokým ikterem, těžkou koagulopatií (INR > 6.5), jaterní encefalopatií, těžkou laktátovou acidózou, edémem mozku, hypoglykémií a akutním selháním ledvin (akutní tubulární nekróza); mortalita bez transplantace dosahuje 50–80 %; (4) 4. stádium (od 5. dne dále): při přežití kritické fáze dochází k postupné kompletní strukturální regeneraci jaterního parenchymu bez fibrózy během několika týdnů.",
        "Prescottův (Rumack-Matthewův) nomogram: Grafický vztah mezi sérovou koncentrací paracetamolu a časem od požití (validní v intervalu 4 až 24 hodin od akutního jednorázového požití). Před 4. hodinou od požití se hladina nevyhodnocuje, protože ještě neproběhla úplná absorpce. Pokud hodnota leží nad léčebnou linií (která začíná na 150 mg/l ve 4. hodině a 37.5 mg/l ve 12. hodině), je indikována léčba plnou dávkou antidota.",
        "Specifické antidotum: N-ACETYLCYSTEIN (NAC) – mechanismus a dávkování: NAC působí jako prekurzor glutathionu (dodává cystein), sám váže NAPQI a slouží jako dárce sulfátu. Dále zlepšuje mikrocirkulaci a systémovou perfúzi.",
        "Třífázový intravenózní protokol NAC (celkem 300 mg/kg během 21 hodin):",
        "(1) 1. infuze: 150 mg/kg v 200 ml 5% glukózy i.v. během 60 minut (nasycovací dávka);",
        "(2) 2. infuze: 50 mg/kg v 500 ml 5% glukózy i.v. během následujících 4 hodin;",
        "(3) 3. infuze: 100 mg/kg v 1000 ml 5% glukózy i.v. během následujících 16 hodin.",
        "Zkouškové pravidlo načasování: Nejvyšší účinnost má NAC, pokud je zahájen do 8 hodin od požití (téměř 100% ochrana před těžkou nekrózou). PODÁVÁ SE VŠAK I PŘI POZDNÍM ZÁCHYTU (po 8–24 hodinách a u pacientů s již rozvinutým selháním jater), protože prokazatelně snižuje mortalitu a edém mozku! Při anafylaktoidní reakci na rychlou infuzi NAC (zarudnutí, pruritus, bronchospasmus) infuzi dočasně zastavíme, podáme antihistaminikum a po zklidnění pokračujeme pomalejší rychlostí."
      ]
    },
    {
      "title": "2. Toxické alkoholy – metanol a etylenglykol (mechanismus, toxicita, antidota a dialýza)",
      "refs": [
        "ou2025",
        "toxicAlcohols",
        "extripGroup"
      ],
      "paragraphs": [
        "Metabolismus a toxicita alkoholů (LF OU 2025 díl II kap. 12): Samotný metanol i etylenglykol jsou látky málo toxické – působí pouze lehkou opilost a osmotickou aktivitu v plazmě. ŽIVOT OHROŽUJÍCÍ TOXICITA VZNIKÁ AŽ JEJICH METABOLICKOU PŘEMĚNOU enzymem alkoholdehydrogenázou (ADH) v játrech na toxické organické kyseliny!",
        "(1) Metanol (methylalkohol, dřevný líh – požití nelegálního pančovaného alkoholu, ostřikovačů): Metanol je enzymem ADH pomalu oxidován na formaldehyd a ten enzymem aldehyddehydrogenázou na KYSELINU MRAVENČÍ (formiát). Kyselina mravenčí způsobuje těžkou metabolickou acidózu s vysokou aniontovou mezerou (HAGMA), blokuje mitochondriální cytochrom c oxidázu a vede k histotoxické hypoxii. Specifický tropismus formiátu k CNS a zrakovému nervu: vyvolává edém zrakového nervu, atrofii a ireverzibilní slepotu (pacient popisuje 'pohled do sněhové bouře'), a symetrickou nekrózu bazálních ganglií (typicky putamen) s rozvojem těžkého extrapyramidového parkinsonského syndromu.",
        "(2) Etylenglykol (nemrznoucí směsi do chladičů – např. Fridex): Etylenglykol je enzymem ADH oxidován na glykolaldehyd -> kyselinu glykolovou (která je hlavní příčinou těžké HAGMA) -> kyselinu glyoxylovou -> a nakonec na KYSELINU ŠŤAVELOVOU (oxalát). Kyselina šťavelová v krvi reaguje s vápníkem za vzniku nerozpustných krystalů KALCIUM-OXALÁTU. Tyto krystaly mají typický tvar psaníčkových obálek (prokazatelné v močovém sedimentu ve fázovém kontrastu či polarizovaném světle). Oxalát váže vápník (hrozí těžká hypokalcémie s tetanií a křečemi) a krystaly precipitují v renálních tubulech, kde mechanicky a cytotoxicky způsobují akutní tubulární nekrózu a anurické selhání ledvin (AKI).",
        "Biochemická dynamika – posun z osmolálního okna do HAGMA: V časné fázi (prvních 6–12 hodin) převažuje nemetabolizovaný alkohol -> nacházíme vysoké osmolální okno (> 20 mOsm/kg), ale acidóza ještě není vyjádřena. Jakmile proběhne biotransformace na kyselinu mravenčí či glykolovou, osmolální okno klesá a rozvíjí se těžká metabolická acidóza se zvýšenou aniontovou mezerou (HAGMA, pH < 7.10, HCO3 < 10 mmol/l, anion gap > 25–30 mmol/l).",
        "Komplexní terapie otrav toxickými alkoholy:",
        "(a) Zástava biotransformace blokádou alkoholdehydrogenázy (ADH):",
        "• Fomepizol (4-methylpyrazol) – ANTIDOTUM PRVNÍ VOLBY: vysoce specifický kompetitivní inhibitor ADH s afinitou 8000× vyšší než etanol. Dávkování: nasycovací dávka 15 mg/kg i.v. pomalu během 30 minut, následně udržovací dávka 10 mg/kg i.v. každých 12 hodin (při dialýze se interval zkracuje na 4 hodiny). Výhoda: nezpůsobuje opilost, depresi dechu ani hypoglykémii.",
        "• 10% Etanol i.v. (nebo 40% alkohol p.o.) – ALTERNATIVNÍ ANTIDOTUM: etanol soutěží o vazebné místo na ADH (má k ADH 10–20× vyšší afinitu než metanol a etylenglykol). Cílová terapeutická hladina etanolu v krvi je 1.0–1.5 ‰ (20–30 mmol/l). Dávkování: nasycovací dávka 10% etanolu v 5% glukóze je 7.5–10 ml/kg i.v. během 30–60 minut, následně udržovací infuze 1.0–1.5 ml/kg/h (u chronických alkoholiků až 2.0 ml/kg/h). Nutné kontinuální monitorování hladiny etanolu a glykémie!",
        "(b) Kofaktory urychlující odbourání metabolitů:",
        "• U metanolu: kyselina folinová (leukovorin) nebo kyselina listová 50 mg i.v. každých 4–6 hodin (kofaktor enzymatického rozpadu kyseliny mravenčí na CO2 a vodu);",
        "• U etylenglykolu: Thiamin 100 mg i.v. a Pyridoxin 50 mg i.v. po 6 hodinách (převádějí glyoxylát na netoxické metabolity).",
        "(c) Urgentní hemodialýza: Indikována při těžké acidóze (pH < 7.25–7.30), sérové koncentraci metanolu či etylenglykolu > 15–20 mmol/l (nebo > 500 mg/l), zrakových poruchách (metanol) nebo rozvoji selhání ledvin (etylenglykol). Hemodialýza bleskově odstraní jak mateřský alkohol, tak toxické organické kyseliny a upraví acidobazickou rovnováhu."
      ]
    },
    {
      "title": "3. Etylalkohol (etanol) – stádia, rizika na JIP, hypoglykémie a delirium tremens",
      "refs": [
        "ou2025",
        "toxicAlcohols"
      ],
      "paragraphs": [
        "Farmakokinetika a stádia opilosti (LF OU 2025): Etanol se rychle vstřebává v žaludku a tenkém střevě, metabolizuje se v játrech enzymem ADH a mikrosomálním systémem MEOS (indukovatelný u alkoholiků). Stádia: (1) Excitační stádium (0.5–1.5 ‰): euforie, ztráta zábran, hovornost, prodloužení reakčního času; (2) Narkotické stádium (1.5–2.5 ‰): ataxie, dysartrie, diplopie, emoční labilita, agresivita či apatie; (3) Kómatózní stádium (> 2.5–3.0 ‰): těžká porucha vědomí, svalová atonie, hyporeflexie, hypotermie, tachykardie, hypotenze; při hladinách > 4.0 ‰ bezprostřední riziko smrti zástavou dechu útlumem dechového centra v prodloužené míše.",
        "Kritická rizika akutní opilosti na lůžku ARO/JIP:",
        "(1) Těžká protrahovaná hypoglykémie: metabolismus etanolu přes ADH spotřebovává NAD+ a zvyšuje poměr NADH/NAD+. Vysoký NADH blokuje přeměnu laktátu na pyruvát a oxalacetátu na malát, čímž ZCELA BLOKUJE GLUKONEOGENEZI v játrech. U dětí a podvyživených alkoholiků s vyčerpaným glykogenem dochází k těžké neuroglykopenické hypoglykémii (často mylně považované za prostý alkoholový spánek!) s fatálním edémem mozku. Odběr glykémie glukometrem je obligátní u každého opilého!",
        "(2) Zástava dýchání a aspirace zvratků s rozvojem těžkého Mendelsonova syndromu (chemická pneumonitida) a ARDS;",
        "(3) Kraniocerebrální trauma: opilí pacienti padají – každá porucha vědomí vyžaduje vyloučení intrakraniálního krvácení (zejména akutního či subakutního subdurálního hematomu) provedením nativního CT mozku;",
        "(4) Těžká hypotermie (vazodilatace kůže z alkoholu vede k masivním ztrátám tepla).",
        "Syndrom z odnětí alkoholu a Delirium tremens (abstinenční stav): Vzniká za 24–72 hodin po přerušení abusu alkoholu. Příznaky: hrubý tremor, profúzní pocení, tachykardie, hypertenze, nespavost, úzkost, zrakové halucinace (typicky mikrozoopsie – vidění drobného hmyzu, myší), dezorientace, motorický neklid a epileptické záchvaty typu grand mal. Terapie: klomethiazol (Heminevrin) nebo benzodiazepiny (diazepam 10–20 mg i.v. titrovaně dle CIWA skóre), betablokátory k tlumení tachykardie. ZÁSADNÍ ZKOUŠKOVÉ PRAVIDLO: VŠEM PACIENTŮM S ABINITIEM MUSÍ BÝT PODÁN THIAMIN (vitamin B1) 100–300 mg i.v. JEŠTĚ PŘED PODÁNÍM JAKÉKOLI INFUZE GLUKÓZY! Podání glukózy bez thiaminu vyčerpá poslední zbytky thiaminpyrofosfátu a vyvolá akutní iatrogenní Wernickeovu encefalopatii (ataxie, oftalmoplegie, zmatenost) a Korsakovovu psychózu!"
      ]
    },
    {
      "title": "4. Oxid uhelnatý (CO) – toxicita, zrádnost pulzní oxymetrie a hyperbarická oxygenoterapie (HBO)",
      "refs": [
        "ou2025",
        "coGuideline"
      ],
      "paragraphs": [
        "Vlastnosti a patofyziologie otravy CO (LF OU 2025 díl II kap. 12): Oxid uhelnatý je bezbarvý plyn bez chuti a zápachu, vznikající nedokonalým spalováním uhlíkatých látek (lokální topidla, plynové karmy, krby, kouř při požárech, výfukové plyny). Patofyziologický mechanismus: (1) Afinita CO k hemoglobinu je 200–250× vyšší než afinita kyslíku! CO vytěsňuje kyslík z vazby na hemoglobin a vytváří KARBONYLHEMOGLOBIN (karboxyhemoglobin, COHb); (2) Přítomnost CO na jednom hemu indukuje alosterickou konformační změnu tetrameru hemoglobinu a posunuje disociační křivku hemoglobinu doleva (Haldaneův efekt) – hemoglobin drží zbývající kyslík extrémně pevně a neuvolňuje jej do tkání; (3) CO prostupuje do buněk a váže se na intracelulární proteiny obsahující hem: váže se na myoglobin (ischemie a nekróza myokardu) a na mitochondriální CYTOCHROM C OXIDÁZU (komplex IV dýchacího řetězce). Dochází k totální blokádě buněčného dýchání, zástavě tvorby ATP a těžkému oxidačnímu stresu.",
        "Klinický obraz: Postihuje primárně orgány s nejvyšší spotřebou kyslíku – mozek a myokard. Mírná otrava (COHb 10–20 %): tupá bolest hlavy (cefalea), únava, nauzea, závratě; Střední otrava (COHb 20–40 %): zmatenost, ataxie, synkopa, tachykardie, tachypnoe, ischemie myokardu; Těžká otrava (COHb > 40–50 %): kóma, generalizované křeče, edém mozku, komorové arytmie, infarkt myokardu, hypotenze a smrt. Pitevní učebnicový nález 'třešňově červené kůže a sliznic' je v klinické praxi vzácný, pozdní a nespolehlivý!",
        "Pozdní neuropsychiatrický syndrom (DNS – Delayed Neurological Sequelae): U 15–40 % pacientů dochází po zdánlivém plném zotavení za 2 až 40 dnů k rozvoji těžkého kognitivního deficitu, demence, parkinsonismu, depresí a poruch chování v důsledku demyelinizace mozkové bílé hmoty a nekrózy globus pallidus.",
        "ZÁLUDNÁ ZKOUŠKOVÁ DIAGNOSTICKÁ PAST – PULZNÍ OXYMETRIE: Standardní dvou-vlnová pulzní oxymetrie (SpO2) využívá absorpci světla při vlnových délkách 660 nm a 940 nm. Při těchto vlnových délkách má karbonylhemoglobin (COHb) prakticky identickou světelnou absorpci jako oxyhemoglobin (O2Hb). PULZNÍ OXYMETR NEROZEZNÁ COHb OD O2Hb A UKAZUJE FALEŠNĚ NORMÁLNÍ ČI VYSOKOU HODNOTU (SpO2 99–100 %) I U PACIENTA S FATÁLNÍ HYPOXIÍ TKÁNÍ! Diagnózu lze stanovit VÝHRADNĚ krevními plyny s integrovanou CO-oxymetrií (vícevlnová spektrofotometrie), která změří přesné procento COHb (fyziologicky u nekuřáka < 2–3 %, u silného kuřáka do 8–10 %; hodnoty nad 15–20 % jsou jednoznačně patologické).",
        "Léčba otravy CO:",
        "(1) Okamžité přerušení expozice a vynesení ze zamořeného prostoru (bezpečí zachránce!);",
        "(2) Normobarická oxygenoterapie: aplikace 100% kyslíku obličejovou maskou s rezervoárem a jednosměrnými ventily (průtok 12–15 l/min) nebo UPV se 100% FiO2. Kyslík kompetitivně vytěsňuje CO z hemoglobinu a zkracuje biologický poločas COHb z 300–360 minut (při dýchání vzduchu) na 60–80 minut;",
        "(3) Hyperbarická oxygenoterapie (HBO): inhalace 100% O2 v hyperbarické komoře při tlaku 2.5–3.0 ATA. Zkracuje poločas COHb na 20–30 minut, dramaticky zvyšuje množství fyzikálně rozpuštěného kyslíku v plazmě (který zajistí oxygenaci tkání nezávisle na hemoglobinu) a prokazatelně snižuje výskyt pozdních neuropsychiatrických následků (DNS).",
        "Přísné indikace k hyperbarické komoře (HBO): (a) Hladina COHb > 25 % kdykoli po expozici; (b) U těhotných žen hladina COHb > 15 % (fetální hemoglobin váže CO ještě pevněji a plod je extrémně ohrožen!); (c) Jakákoli anamnéza ztráty vědomí, synkopy či kómatu; (d) Přítomnost křečí, ložiskového neurologického deficitu nebo psychických poruch; (e) Akutní ischemie myokardu na EKG nebo elevace troponinu; (f) Těžká metabolická acidóza (pH < 7.25)."
      ]
    },
    {
      "title": "5. Opioidy a psychofarmaka (TCA a benzodiazepiny)",
      "refs": [
        "ou2025",
        "opioidWHO",
        "tcaToxicology"
      ],
      "paragraphs": [
        "Intoxikace opioidy (morfin, heroin, fentanyl, oxykodon, buprenorfin, tramadol): Klasická triáda: (1) Těžký útlum dechu (bradypnoe < 8–10/min, hypoventilace až apnoe); (2) Špendlíkovité zornice (mióza – stimulace Edinger-Westphalova jádra n. III); (3) Porucha vědomí (kóma). Další příznaky: bradykardie, hypotenze, chabá paréza, hyporeflexie, nerovnoměrný plicní edém (nekardiogenní, po hypoxickém poškození kapilár). U syntetických opioidů (fentanyl a jeho analoga): bleskový nástup a riziko tzv. syndromu dřevěného hrudníku ('wooden chest syndrome' – masivní rigidita hrudního a břišního svalstva znemožňující ventilaci maskou, vyžadující podání svalového relaxancia).",
        "Antidotum: NALOXON (čistý kompetitivní antagonista mí-, kappa- a delta-opioidních receptorů):",
        "• Dávkování a technika podání: iniciální dávka 0.4 mg i.v. (nebo i.m. / intranazálně), u apnoického pacienta titrujeme frakcionovaně po 0.1–0.2 mg i.v. každé 2 minuty. CÍLEM NALOXONU NENÍ PLNÉ PROBUZENÍ PACIENTA, ALE OBNOVENÍ DOSTATEČNÉ SPONTÁNNÍ VENTILACE (dechová frekvence > 10–12/min, normální SpO2)! Nekritické podání vysokého bolusu vyvolá akutní abstinenční syndrom s masivní sympatoadrenální bouří, hypertenzní krizí, plicním edémem a extrémní agresivitou pacienta;",
        "• ZKOUŠKOVÝ CHYTÁK POLOČASU NALOXONU: Biologický poločas eliminace naloxonu je pouze 30–90 minut! Poločas většiny opioidů (morfin, metadon, retardovaný oxykodon) je mnohonásobně delší (4 až 24 hodin). Jakmile naloxon po 60 minutách odezní, OPIOID ZNOVU OBSADÍ RECEPTORY A PACIENT OPĚT UPADÁ DO DECHOVÉ ZÁSTAVY! Každý pacient po probuzení naloxonem MUSÍ být sledován na monitorovaném lůžku minimálně 4–6 hodin (u retardovaných forem a metadonu 24 hodin, případně s kontinuální infuzí naloxonu).",
        "Intoxikace tricyklickými antidepresivy (TCA – amitriptylin, dosulepin, nortriptylin, imipramin): Jedna z nejnebezpečnějších intoxikací s vysokou mortalitou na maligní arytmie a refrakterní šok. Trojí mechanismus toxicity: (1) Blokáda rychlých sodíkových kanálů myokardu (efekt antiarytmik třídy Ia); (2) Blokáda periferních alfa-1 adrenergních receptorů (těžká vazodilatace a hypotenze); (3) Centrální a periferní anticholinergní efekt (antimuskarinový).",
        "Klinický obraz: zmatenost, agitovanost, mydriáza, suché sliznice, retence moči, delirium, křeče, kóma a těžká hypotenze. EKG známky kardiotoxicity (varovné signály): (a) Rozšíření komplexu QRS > 100 ms (predikuje riziko křečí) a QRS > 160 ms (vysoké riziko maligních komorových tachykardií – torsades de pointes a fibrilace komor); (b) Prodloužení intervalu QTc; (c) Zvýraznění terminální kmitu R ve svodu aVR (R vlna v aVR > 3 mm).",
        "SPECIFICKÁ LÉČBA KARDIOKOTOXICITY TCA: 8.4% NATRIUM BIKARBONÁT (NaHCO3):",
        "• Indikace: rozšíření komplexu QRS > 100–120 ms, komorové arytmie či těžká hypotenze nereagující na tekutiny;",
        "• Dávkování: i.v. bolus 1–2 mmol/kg (u dospělého 50–100 ml 8.4% NaHCO3) během 2–3 minut, lze zopakovat. Následně kontinuální infuze k udržení arteriálního pH v alkalickém pásmu 7.45–7.55;",
        "• Dvojí mechanismus účinku: (1) Masivní nálož sodíku kompetitivně vytěsňuje molekuly TCA z vazby na sodíkový kanál myocytu; (2) Alkalizace séra zvyšuje vazbu TCA na plazmatické bílkoviny, čímž snižuje volnou toxickou frakci léku v krvi. Při refrakterním kardiogenním šoku podáváme 20% Intralipid (lipidová resuscitace – lipid sink efekt).",
        "Intoxikace benzodiazepiny (diazepam, midazolam, oxazepam, alprazolam): Působí alosterickou stimulaci GABA-A receptorů. Příznaky: sedace, somnolence, dysartrie, ataxie, hypotenze; izolované předávkování málokdy vede k zástavě dechu, fatální dechový útlum však vzniká při kombinaci s alkoholem či opioidy. Antidotum: FLUMAZENIL (kompetitivní antagonista GABA-A receptoru): dávka 0.2 mg i.v. během 30 sekund, lze opakovat po 0.1 mg do celkové dávky 1 mg. PŘÍSNÉ KONTRAINDIKACE FLUMAZENILU: nesmí se podat při smíšené otravě s tricyklickými antidepresivy (vyvolá okamžitou fatální komorovou tachykardii!), u pacientů s epilepsií a u chronických uživatelů benzodiazepinů (vyvolá těžký abstinenční syndrom a refrakterní status epilepticus!)."
      ]
    }
  ],
  "corrections": [
    "U intoxikace oxidem uhelnatým (CO) je pulzní oxymetrie FALUJE – nerozezná karbonylhemoglobin od oxyhemoglobinu a ukazuje falešných 99–100 % SpO2! Diagnóza vyžaduje odběr krevních plynů s CO-oxymetrií.",
    "Naloxon má biologický poločas pouhých 30–90 minut, což je mnohem méně než poločas většiny opioidů. Po odeznění naloxonu hrozí relaps zástavy dechu – pacient musí být sledován na JIP minimálně 4–6 hodin!",
    "U intoxikace paracetamolem se N-acetylcystein podává nejen časně (do 8 h), ale i při pozdním příchodu a při rozvinutém selhání jater – i tehdy prokazatelně snižuje mortalitu a edém mozku.",
    "U intoxikace tricyklickými antidepresivy s rozšířením QRS > 100 ms je lékem volby 8.4% natrium bikarbonát, nikoli antiarytmika třídy Ia či Ic (ta jsou přísně kontraindikována, protože dále blokují sodíkový kanál!)."
  ],
  "checks": [
    {
      "question": "Proč je pulzní oxymetrie u pacienta po nadýchání kouřem a oxidem uhelnatým zcela nespolehlivá?",
      "answer": "Standardní pulzní oxymetr vysílá světlo o dvou vlnových délkách (660 a 940 nm), při kterých má karbonylhemoglobin (COHb) prakticky identický absorpční koeficient jako oxyhemoglobin (O2Hb). Přístroj považuje molekuly COHb za plně okysličené a ukazuje falešně normální hodnotu saturace (SpO2 98–100 %), ačkoli tkáně pacienta trpí kritickou hypoxií. Diagnózu lze spolehlivě stanovit pouze analýzou krevních plynů na CO-oxymetru.",
      "refs": [
        "ou2025",
        "coGuideline"
      ]
    },
    {
      "question": "Jaký je mechanismus účinku 8.4% natrium bikarbonátu u předávkování tricyklickými antidepresivy s rozšířením QRS?",
      "answer": "Bikarbonát sodný působí dvěma synergickými mechanismy: (1) Vysoká koncentrace sodíkových kationtů kompetitivně vytěsňuje molekuly TCA z vazby na rychlé sodíkové kanály myokardu, čímž obnovuje depolarizaci a zužuje QRS; (2) Alkalizace séra (cílové pH 7.45–7.55) převádí lék do neionizované formy a zvyšuje jeho vazbu na plazmatické bílkoviny, čímž snižuje volnou toxickou frakci léku v krvi.",
      "refs": [
        "ou2025",
        "tcaToxicology"
      ]
    },
    {
      "question": "Proč se u pacienta v bezvědomí po požití neznámých léků nesmí podat flumazenil jako diagnosticko-terapeutický test?",
      "answer": "Pokud pacient kromě benzodiazepinů požil tricyklická antidepresiva či jiné prokonvulzivní látky, nebo pokud je chronickým abuzérem benzodiazepinů, podání flumazenilu zruší protektivní tlumivý účinek na GABA receptory a vyvolá neztišitelný epileptický status, těžké komorové arytmie a smrt. Flumazenil je vyhrazen pouze pro izolované předávkování benzodiazepiny u neepileptiků (např. probuzení po analgosedaci na sále).",
      "refs": [
        "ou2025",
        "tisPraha"
      ]
    }
  ]
},
"B30": {
  "title": "Akutní stavy spojené s obstrukcí dýchacích cest u dětí. Zajištění dýchacích cest u dětí (laryngitida, epiglotitida, cizí těleso, vzorce kanyl)",
  "reviewed": "2026-11-04",
  "edition": "LF OU 2025 (díl I, kap. 14 a 20; díl II, kap. 1) · ERC 2025 Guidelines · RCUK 2025 · RCH Melbourne",
  "scope": "Pediatrická anesteziologie a urgentní stavy: anatomicko-fyziologická specifika dětských DC (velký týl, velký jazyk, vysoký ventrální larynx C3–C4, lžícovitá epiglotis, kónický hrtan s nejužším místem v subglotické prstencové chrupavce, Poiseuilleův zákon 1/r^4, vysoká spotřeba O2 a nízká FRC). Akutní subglotická laryngitida (pseudokrup – Downesovo skóre, chladný vzduch, dexamethason 0.6 mg/kg, nebulizovaný adrenalin 5 mg). Akutní epiglotitida (febrilie, dysfagie, salivace, tripod position, STRIKTNÍ ZÁKAZ ŠPATLE A BOLESTIVÝCH ZÁKROKŮ, inhalační úvod sevofluranem na sále). Aspirace cizího tělesa (první pomoc: kojenec 5 úderů + 5 stlačení hrudníku vs. dítě od 1 roku 5 úderů + Heimlich; zákaz Heimlicha u kojenců; rigidní bronchoskopie). Zajištění DC u dětí: polohování (podložení ramen do neutrální polohy), moderní preferování manžetových kanyl (cuffed), vzorce pro vnitřní průměr (cuffed: (věk/4) + 3.5 mm vs. uncuffed: (věk/4) + 4.0 mm), hloubka zavedení (ID × 3 cm nebo hmotnost + 6 cm), tlak v manžetě 15–20 cmH2O, laryngeální masky a řešení CICO (jehlová krikothyroidotomie).",
  "opening": "Akutní obstrukce dýchacích cest u dětí představuje bezprostřední ohrožení života rychlým rozvojem asfyxie a hypoxické zástavy oběhu (LF OU 2025). Dětské dýchací cesty mají zásadní anatomické a fyziologické odlišnosti: velký týl vyžadující podložení ramen do neutrální polohy, velký jazyk, vysoký ventrální hrtan (C3–C4), dlouhou lžícovitou epiglotis a kónický tvar hrtanu, jehož nejužším místem je subglotická oblast v úrovni prstencové chrupavky (cricoid ring). Dle Poiseuilleova zákona (odpor R je nepřímo úměrný čtvrté mocnině poloměru) i drobný edém sliznice o 1 mm způsobí dramatický 16násobný nárůst odporu dýchacích cest! U zkoušky rozlišuji tři hlavní klinické jednotky: (1) Akutní subglotickou laryngitidu (pseudokrup – štěkavý kašel, inspirační stridor, léčba dexamethasonem 0.6 mg/kg a nebulizovaným adrenalinem 5 mg); (2) Akutní epiglotitidu (bakteriální flegmóna s febriliemi, dysfagií, salivací z úst a tripod position s vitálním zákazem vyšetřování špatlí a okamžitým inhalačním úvodem na operačním sále); a (3) Aspiraci cizího tělesa (věkově odlišená první pomoc s přísným zákazem Heimlicha u kojenců). Následně předvedu exaktní vzorce pro volbu tracheální rourky: moderní manžetovou kanylu (ID = (věk/4) + 3.5 mm), hloubku zavedení (ID × 3 cm) a striktní limit tlaku v manžetě do 15–20 cmH2O k prevenci ischemické subglotické stenózy.",
  "openingRefs": [
    "ou2025",
    "upperAirway",
    "croup",
    "paedAirway",
    "pbls",
    "pls"
  ],
  "sections": [
    {
      "title": "1. Anatomická a fyziologická specifika dětských dýchacích cest (Poiseuilleův zákon)",
      "refs": [
        "ou2025",
        "paedAirway",
        "pls"
      ],
      "paragraphs": [
        "Anatomické zvláštnosti dýchacích cest u dětí (LF OU 2025 díl I kap. 14):",
        "(1) Hlava a týl: novorozenci a kojenci mají relativně velkou hlavu s výrazně prominentním týlem (occiput). V poloze na zádech dochází k automatické flexi hlavy a krku, což vede k uzávěru dýchacích cest. ZKOUŠKOVÁ ZÁSADA POLOHOVÁNÍ: Kojenec se nikdy neuvádí do hyperextenze (záklonu), ale hlava se udržuje v neutrální poloze ('sniffing position') mírným podložením ramen složenou rouškou!",
        "(2) Dutina ústní a jazyk: velký jazyk v poměru k malé mandíbule a dutině ústní; při bezvědomí a ztrátě svalového tonu snadno zapadá a tvoří nejčastější příčinu obstrukce dýchacích cest;",
        "(3) Hrtan: je u novorozenců a kojenců uložen výrazně výše a více vpředu (ventrálně). U novorozence leží v úrovni obratlů C3–C4 (u dospělého v úrovni C5–C6). Pro laryngoskopii to znamená, že osa viditelnosti je strmější a vyžaduje správné polohování;",
        "(4) Epiglotis: je relativně dlouhá, úzká, tuhá, podkovovitá až lžícovitá (tvaru písmene U či V, tzv. omega-shaped), skloněná pod úhlem 45° dorzálně přes vchod do hrtanu. K jejímu bezpečnému odklopení při intubaci se u novorozenců a kojenců preferuje PŘÍMÁ LŽÍCE LARYNGOSKOPU (Miller), kterou epiglotis přímo podebíráme (na rozdíl od zahnuté lžíce Macintosh nasedající do valekuly);",
        "(5) Tvar hrtanu a nejužší místo dýchacích cest: U dospělého má hrtan válcovitý tvar a nejužším místem je hlasová štěrbina (rima glottidis). U DĚTÍ DO CCA 8–10 LET MÁ HRTAN TVAR NÁLEVKY (kónický tvar) A NEJUŽŠÍM MÍSTEM DÝCHACÍCH CEST JE SUBGLOTICKÁ OBLAST V ÚROVNI PRSTENCOVÉ CHRUPAVKY (cartilago cricoidea)! Prstencová chrupavka tvoří kompletní pevný chrupavčitý prstenec, který nelze dilatovat. Příliš těsná rourka v této oblasti způsobí ischemii sliznice s následnou nekrózou a celoživotní jizevnatou subglotickou stenózou!",
        "Poiseuilleův zákon laminárního proudění (zkouškový matematický princip):",
        "Odpor proudění plynů (R) je nepřímo úměrný čtvrté mocnině poloměru dýchacích cest: R \\propto 1 / r^4. Průřez dýchacích cest dospělého je cca 8 mm; zmenšení poloměru edémem o 1 mm zvýší odpor cca 3násobně. Naproti tomu průřez subglotické oblasti novorozence je pouze 4 mm; edém sliznice o pouhý 1 mm (zmenšení lumen ze 4 mm na 2 mm) zredukuje průsvit dýchacích cest o 75 % a ZVÝŠÍ ODPOR PROUDĚNÍ PLYNŮ 16NÁSOBNĚ! I zdánlivě mírný zánětlivý otok proto u malého dítěte vyvolá kritickou dechovou nedostatečnost.",
        "Fyziologická specifika respiračního systému dětí:",
        "Děti mají 2–3× vyšší spotřebu kyslíku než dospělí (6–8 ml/kg/min oproti 3 ml/kg/min u dospělého) při relativně malé funkční reziduální kapacitě (FRC) a vysoce poddajné chrupavčité hrudní stěně. Při apnoi či obstrukci dojde k vyčerpání alveolárního O2 a k dramatické, bleskové desaturaci během několika desítek sekund, následované bradykardií a asystolickou zástavou oběhu!"
      ]
    },
    {
      "title": "2. Akutní subglotická laryngitida (pseudokrup) – klinika, Downesovo skóre a léčba",
      "refs": [
        "ou2025",
        "croup",
        "upperAirway"
      ],
      "paragraphs": [
        "Etiologie a epidemiologie (LF OU 2025 díl II kap. 1): Nejčastější příčina akutní obstrukce horních dýchacích cest u dětí. Typicky postihuje batolata a předškolní děti ve věku 6 měsíců až 3 roky s maximem výskytu na podzim a v zimě. Etiologie je virová: viry parainfluenzy (typ 1 a 3 tvoří 75 % případů), RSV, adenoviry, virus chřipky.",
        "Klinický obraz: Zánětlivý edém sliznice subglotického prostoru. Typický je NÁHLÝ NÁSTUP V NOCI z plného zdraví nebo po mírném kataru horních cest dýchacích: dítě se probudí se suchým drsným 'ŠTĚKAVÝM KAŠLEM' (napodobujícím štěkot psa či lachtana), chrapotem (dysfonií) a výrazným INSPIRAČNÍM STRIDOREM. Dále nacházíme tachypnoi, zatahování jugula, supraklavikulárních jamek a mezižeberních prostor. Horečka bývá nízká (subfebrilie do 38 °C). DŮLEŽITÝ ROZDÍL: Dítě normálně polyká, NEMÁ dysfagii ani slinění z úst!",
        "Hodnocení závažnosti – Downesovo skóre (nebo Westleyovo skóre): Hodnotí 5 parametrů (každý za 0–2 body): inspirační stridor, zatahování mezižebří, vdechování vzduchu (auskultační nález), cyanózu a vědomí. Skóre 0–3 = lehká obstrukce; 4–7 = středně těžká; > 7 = těžká život ohrožující obstrukce vyžadující zvážení intubace.",
        "Léčebný protokol subglotické laryngitidy:",
        "(1) Režimová opatření: klid a uklidnění dítěte (pláč dramaticky zvyšuje odpor dýchacích cest a zhoršuje otok – dítě necháváme v náručí matky!), inhalace chladného vlhkého vzduchu (otevřené okno v zimě, inhalátor s chladnou mlžinou);",
        "(2) Systémové kortikoidy – ZÁKLAD KAUZÁLNÍ LÉČBY: DEXAMETHASON v jednorázové dávce 0.6 mg/kg perorálně, i.m. nebo i.v. (maximální jednorázová dávka 16 mg). Dexamethason má silný protiedémový účinek s nástupem do 30–60 minut a dlouhým poločasem (36–54 hodin), který zabraňuje noční recidivě. Alternativa při zvracení: inhalační Budesonid (nebulizace 2 mg);",
        "(3) Inhalační Adrenalin (epinefrin) – ZÁCHRANNÁ LÉČBA U STŘEDNĚ TĚŽKÉ A TĚŽKÉ OBSTRUKCE: Adrenalin stimulací alfa-1 receptorů v kapilárách sliznice subglotické oblasti vyvolá silnou vazokonstrikci a bleskové splasknutí edému během 10–15 minut. ZKOUŠKOVÁ DÁVKA A FORMA: podává se NEŘEDĚNÝ ADRENALIN 1:1000 (1 mg/ml) v dávce 5 ml (tj. celkem 5 mg adrenalinu) NEBULIZOVANÝ tryskovým nebulizátorem poháněným průtokem kyslíku 6–8 l/min přes obličejovou masku! Upozornění u zkoušky: 5 mg adrenalinu se inhaluje – NIKDY se tato dávka nesmí podat i.v. ani i.m.!;",
        "(4) Observace a rebound fenomén: Účinek inhalovaného adrenalinu odeznívá za 2 hodiny. Může nastat tzv. rebound fenomén (znovunavrácení edému po odeznění vazokonstrikce). Pacient po inhalaci adrenalinu MUSÍ být observován na lůžku minimálně 2–4 hodiny. Orotracheální intubace je nutná u méně než 1–2 % dětí a provádí se výhradně při selhání farmakoterapie a vyčerpání dítěte."
      ]
    },
    {
      "title": "3. Akutní epiglotitida – bakteriální flegmóna, fatální zákaz špatle a zajištění na sále",
      "refs": [
        "ou2025",
        "upperAirway",
        "special"
      ],
      "paragraphs": [
        "Etiologie a epidemiologie (LF OU 2025 díl II kap. 1): Život ohrožující bakteriální flegmonózní zánět epiglotis a aryepiglotických řas. V minulosti postihovala typicky děti ve věku 2–7 let s původcem Haemophilus influenzae typ b (Hib). Po zavedení plošného očkování hexavakcínou incidence dramaticky klesla o > 95 %; dnes se vzácně vyskytuje u neočkovaných dětí nebo dospělých (původci: Streptococcus pyogenes, Streptococcus pneumoniae, Staphylococcus aureus).",
        "Klinický obraz – dramatická septická manifestace: Bleskový průběh během několika hodin. Dítě má VYSOKOU HOREČKU (nad 39 °C), je schvácené, toxicky vyhlížející a dominuje EXTRÉMNÍ BOLEST V KRKU A TĚŽKÁ DYSFAGIE. Dítě NENÍ SCHOPNO POLYKAT VLASTNÍ SLINY -> TYPICKÉ ODKAPÁVÁNÍ SLIN Z DUTINY ÚSTNÍ (salivace). Hlas je tichý, huhňavý, tlumený (přirovnáván k 'horkému bramboru v ústech' či 'knedlíku v krku'). Kašel je nevýrazný nebo zcela chybí (rozdíl od štěkavého kašle u laryngitidy!).",
        "Typická úlevová poloha – 'Čichající pes' (Tripod position): Dítě sedí v předklonu, opírá se rukama o podložku, má natažený krk dopředu s otevřenými ústy a vyplazeným jazykem, čímž se snaží mechanicky odtáhnout zduřelou epiglotis od vchodu do hrtanu. Dítě nesnáší polohu vleže – násilné položení na záda vede k okamžitému udušení!",
        "FATÁLNÍ ZKOUŠKOVÝ ZÁKAZ ČÍSLO JEDNA: U DÍTĚTE S PODEZŘENÍM NA EPIGLOTITIDU JE PŘÍSNĚ ZAKÁZÁNO JAKÉKOLI VYŠETŘOVÁNÍ DUTINY ÚSTNÍ LOPATKOU / ŠPATLÍ, ZÁKAZ VÝTĚRŮ Z KRKU A ZÁKAZ BOLESTIVÝCH PROCEDUR PŘI VĚDOMÍ (kanylace žíly, odběry krve)! Podráždění jazyka a faryngu špatlí, bolest a křik dítěte vyvolají OKAMŽITÝ SMRTELNÝ REFLEXNÍ LARYNGOSPASMUS A TOTÁLNÍ MECHANICKÝ UZÁVĚR DÝCHACÍCH CEST S BLESKOVOU ZÁSTAVOU OBĚHU!",
        "Léčebný protokol a zajištění dýchacích cest na operačním sále:",
        "(1) Dítě necháváme v poloze vsedě v náručí rodiče, podáváme zvlhčený kyslík před obličej (blow-by kyslík);",
        "(2) Okamžitý transport v sedě přímo na operační sál za asistence anesteziologa a ORL lékaře;",
        "(3) Anesteziologický postup: INHALAČNÍ ÚVOD DO ANESTEZIE SEVOFLURANEM v kyslíku v poloze vsedě na klíně rodiče. Dítě usíná spontánně dýchající, bezpečně a bez stresu. Až po usnutí zajistíme i.v. linku;",
        "(4) Přímá laryngoskopie a orotracheální intubace: laryngoskopem vizualizujeme třešňově červenou, masivně oteklou epiglotis (vzhled zralé jahody). Intubaci provádíme orotracheální kanylou O 0.5 AŽ 1.0 MM MENŠÍ než odpovídá věku. Pro případ nemožnosti intubace musí být na sále připraven ORL lékař s instrumentáriem pro urgentní rigidní bronchoskopii a chirurgické zajištění dýchacích cest;",
        "(5) Farmakoterapie: parenterální antibiotika třetí generace cefalosporinů (Cefotaxim 100–150 mg/kg/den i.v. nebo Ceftriaxon 100 mg/kg/den i.v.) + kortikoidy (dexamethason 0.6 mg/kg i.v.). Extubace se provádí obvykle za 48–72 hodin po regresi otoku ověřené kontrolní laryngoskopií."
      ]
    },
    {
      "title": "4. Aspirace cizího tělesa u dítěte – věkově odlišená první pomoc a bronchoskopie",
      "refs": [
        "ou2025",
        "pbls",
        "inhaled"
      ],
      "paragraphs": [
        "Epidemiologie a klinický obraz (LF OU 2025 díl II kap. 1): Nejčastější u dětí ve věku 1 až 3 roky při jídle nebo hře bez dozoru (oříšky, kousky mrkve, bonbóny, drobné plastové součástky hraček, baterie). Typická je anamnéza NÁHLÉHO ZÁCHVATU KAŠLE A DUŠENÍ z plného zdraví. Pokud těleso uvízne v hrtanu nebo trachei, vzniká akutní afonie, stridor a sufokace. Pokud projde do bronchu (častěji pravý hlavní bronchus pro jeho strmější odstup), akutní záchvat kašle může odeznít a rozvíjí se jednostranné oslabení dýchání, lokalizovaný pískot nebo chlopňový mechanismus (na RTG hyperinflace plíce s posunem mediastina na zdravou stranu, nebo atelektáza). Pozor: normální RTG hrudníku cizí těleso nevylučuje (většina organických těles je nekontrastní!).",
        "Algoritmus první pomoci u dušícího se dítěte dle ERC 2025:",
        "(1) Posouzení účinnosti kašle: Pokud dítě účinně kašle, hlasitě pláče a dýchá, NEZASAHUJEME fyzickými manévry – pouze dítě povzbuzujeme ke kašli a těsně monitorujeme;",
        "(2) Pokud je kašel neúčinný (tiché dušení, neschopnost nadechnout se, slábnoucí úsilí, cyanóza) a DÍTĚ JE PŘI VĚDOMÍ:",
        "• KOJENEC (věk do 1 roku): (a) Položíme kojence na své předloktí bříškem dolů s hlavou skloněnou níže než trup a prsty fixujeme čelist (pozor na útlak měkkých tkání krku!). Aplikujeme AŽ 5 DŮRAZNÝCH ÚDERŮ DYSPLASTICKOU ČÁSTÍ DLANĚ MEZI LOPATKY; (b) Pokud těleso neodkašle, otočíme kojence na záda na druhé předloktí s hlavou níže a provedeme AŽ 5 STLAČENÍ HRUDNÍKU dvěma prsty na dolní polovině sterna (podobně jako u srdečních kompresí, ale pomaleji a razantněji). Střídáme 5 úderů a 5 stlačení do uvolnění tělesa nebo bezvědomí;",
        "• ZKOUŠKOVÝ ZÁKAZ HEIMLICHOVA MANÉVRU U KOJENCŮ: U dětí do 1 roku je Heimlichův manévr (stlačování nadbřišku) PŘÍSNĚ ZAKÁZÁN pro riziko ruptury velkých a relativně nechráněných jater, sleziny a těžkého nitrobřišního krvácení!",
        "• DÍTĚ OD 1 ROKU: Aplikujeme 5 úderů dlaní mezi lopatky v předklonu. Pokud těleso neodstraní, přistupujeme k HEIMLICHOVU MANÉVRU: postavíme se za dítě, obejmeme jeho trup, položíme sevřenou pěst mezi pupek a mečík sterna a provedeme až 5 rychlých prudkých stlačení směrem dovnitř a nahoru. Střídáme 5 úderů a 5 kompresí břicha;",
        "(3) Dítě v bezvědomí (ERC PBLS algoritmus): Bezprostředně položit na pevnou podložku, otevřít ústa a ZKONTROLOVAT DUTINU ÚSTNÍ – POKUD JE TĚLESO JASNĚ VIDITELNÉ, VYJMEME JEJ JEDNÍM PRSTEM. NIKDY NEŠŤOURÁME PRSTEM NASLEPO (hrozí zatlačení tělesa hlouběji do hrtanu!). Zahájíme 5 záchranných vdechů a pokračujeme KPR v poměru 15 kompresí : 2 vdechy.",
        "Definitivní odstranění cizího tělesa: Zlatým standardem v nemocnici je RIGIDNÍ BRONCHOSKOPIE v celkové anestezii prováděná ORL lékařem či dětským chirurgem, která umožňuje bezpečné uchopení a extrakci tělesa kleštěmi za kontinuální ventilace pacienta."
      ]
    },
    {
      "title": "5. Zajištění dýchacích cest u dětí – vzorce velikostí kanyl, hloubka a řešení CICO",
      "refs": [
        "ou2025",
        "paedAirway",
        "pls",
        "rc2025"
      ],
      "paragraphs": [
        "Volba tracheální kanyly – cuffed vs. uncuffed (změna doporučení ERC 2025):",
        "V minulosti se u dětí do 8 let paušálně používaly kanyly bez těsnicí manžety (uncuffed) z obavy z otlaku subglotické oblasti. DNEŠNÍM STANDARDEM (ERC 2025, RCUK 2025, ESPEN) JSOU MANŽETOVÉ KANYLY (cuffed) s moderní ultratenkou polyuretanovou nízkotlakou manžetou (Microcuff) i u novorozenců a malých dětí! Výhody: spolehlivé těsnění, možnost protektivní ventilace s PEEP, prevence mikroaspirace a významně nižší potřeba reintubací kvůli netěsnosti.",
        "Matematické vzorce pro výpočet vnitřního průměru kanyly (ID – Internal Diameter v mm):",
        "(1) Kanyla S MANŽETOU (cuffed – preferovaná volba):",
        "ID (mm) = (věk v letech / 4) + 3.5   [např. 4leté dítě: 4/4 + 3.5 = 4.5 mm ID];",
        "(2) Kanyla BEZ MANŽETY (uncuffed):",
        "ID (mm) = (věk v letech / 4) + 4.0   [např. 4leté dítě: 4/4 + 4.0 = 5.0 mm ID];",
        "(3) Novorozenci a kojenci do 1 roku věku:",
        "• Nedonošený novorozenec (< 1 kg): ID 2.5 mm uncuffed;",
        "• Nedonošený novorozenec (1–2.5 kg): ID 3.0 mm uncuffed;",
        "• Donošený novorozenec (3–3.5 kg): ID 3.0–3.5 mm (cuffed 3.0 mm);",
        "• Kojenec (do 1 roku, cca 10 kg): ID 3.5–4.0 mm (cuffed 3.5 mm).",
        "ZKOUŠKOVÉ PRAVIDLO TŘÍ KANYL: Před každou intubací dítěte musí mít anesteziolog na stolku připraveny TŘI VELIKOSTI KANYL: kanylu vypočtené velikosti, o 0.5 mm MENŠÍ (pro případ subglotického edému či anatomické těsnosti) a o 0.5 mm VĚTŠÍ!",
        "Hloubka zavedení tracheální kanyly (vzdálenost od zubů/dásně v cm):",
        "• Kojenec a starší dítě: Hloubka (cm) = ID kanyly × 3 (např. pro kanylu 4.5 mm: 4.5 × 3 = 13.5 cm u zubů);",
        "• Alternativní věkový vzorec: Hloubka (cm) = (věk v letech / 2) + 12 cm;",
        "• Novorozenec: Hloubka (cm) = tělesná hmotnost v kg + 6 cm (např. u novorozence o hmotnosti 3 kg: 3 + 6 = 9 cm u rtu).",
        "Tlak v těsnicí manžetě: Manžeta se smí nafukovat POUZE za kontroly kalibrovaným manometrem. TLAK V MANŽETĚ NESMÍ PŘEKROČIT 15–20 cmH2O! Vyšší tlak překračuje kapilární perfuzní tlak sliznice subglotis a způsobuje ischemickou nekrózu a jizevnatou stenózu.",
        "Supraglotické pomůcky a videolaryngoskopie u dětí: Laryngeální masky (LMA): velikost 1 (< 5 kg), 1.5 (5–10 kg), 2 (10–20 kg), 2.5 (20–30 kg), 3 (30–50 kg). Videolaryngoskopie s dětskou lžící představuje metodu volby při neočekávaných obtížných dýchacích cestách.",
        "Krizový scénář 'Can't Intubate, Can't Oxygenate' (CICO) u dětí: U dětí mladších 8–10 let je chirurgická koniotomie skalpelem extrémně technicky obtížná a riziková z důvodu miniaturních rozměrů krikothyroidní membrány (< 3 mm u kojence). Metodou volby při CICO je PUNKČNÍ KRIKOTHYROIDOTOMIE silnou nitrožilní kanylou (14–16G) zavedenou přes lig. cricothyroideum s připojením na vysokotlakou tryskovou ventilaci (transtracheální jet ventilace), která poskytne čas pro urgentní rigidní bronchoskopii či tracheostomii ORL lékařem."
      ]
    }
  ],
  "corrections": [
    "Heimlichův manévr (stlačování nadbřišku) je u dětí do 1 roku PŘÍSNĚ ZAKÁZÁN pro riziko ruptury jater, sleziny a fatálního krvácení. U kojence se střídá 5 úderů mezi lopatky a 5 stlačení hrudníku.",
    "U dítěte s podezřením na akutní epiglotitidu je PŘÍSNĚ ZAKÁZÁNO vyšetřovat ústní dutinu špatlí nebo provádět bolestivé vstupy při vědomí – hrozí okamžitý smrtelný laryngospasmus!",
    "Dávka nebulizovaného adrenalinu u těžké laryngitidy je 5 mg (5 ml neředěného 1:1000) INHALAČNĚ nebulizátorem pod maskou, NIKDY se tato dávka nesmí podat i.v. ani i.m.!",
    "Moderní doporučení ERC 2025 preferují u dětí manžetové kanyly (cuffed) s nízkotlakou manžetou. Vzorec pro vnitřní průměr cuffed kanyly je (věk/4) + 3.5 mm."
  ],
  "checks": [
    {
      "question": "Proč je u podezření na epiglotitidu přísně zakázáno vyšetřit krk dítěte špatlí a jak se bezpečně zajistí dýchací cesty?",
      "answer": "Dotyk špatle na kořen jazyka a farynx u vystresovaného febrilního dítěte vyvolá masivní vagový reflex a okamžitý fatální laryngospasmus se zástavou ventilace a asfytickou zástavou oběhu. Bezpečný postup spočívá v okamžitém transportu na operační sál v sedě na klíně rodiče, inhalačním úvodu do celkové anestezie sevofluranem a orotracheální intubaci o číslo menší rourkou za přítomnosti připraveného ORL týmu.",
      "refs": [
        "ou2025",
        "upperAirway",
        "special"
      ]
    },
    {
      "question": "Jaký je zásadní rozdíl v první pomoci při obstrukci dýchacích cest cizím tělesem mezi kojencem a tříletým dítětem?",
      "answer": "U kojence (do 1 roku) střídáme 5 úderů dlaní mezi lopatky v poloze na břiše na předloktí s hlavou níže než trup a 5 stlačení hrudníku dvěma prsty na dolní polovině sterna na zádech; Heimlichův manévr je u kojence přísně zakázán kvůli riziku ruptury jater. U dítěte od 1 roku aplikujeme 5 úderů mezi lopatky a pokud těleso neodkašle, provádíme 5 stlačení nadbřišku (Heimlichův manévr) vstoje či vsedě.",
      "refs": [
        "ou2025",
        "pbls",
        "inhaled"
      ]
    },
    {
      "question": "Jak vypočítáte velikost a hloubku zavedení tracheální kanyly s manžetou u čtyřletého dítěte?",
      "answer": "Pro kanylu s manžetou (cuffed) použijeme vzorec: ID = (věk / 4) + 3.5 mm, tedy (4 / 4) + 3.5 = 4.5 mm vnitřního průměru. Vždy musíme mít připravenu i kanylu o 0.5 mm menší (4.0 mm) a větší (5.0 mm). Hloubka zavedení u zubů se vypočte jako ID × 3 cm, tedy 4.5 × 3 = 13.5 cm (nebo vzorcem (věk / 2) + 12 = 4/2 + 12 = 14 cm). Tlak v manžetě musí být monitorován manometrem do 15–20 cmH2O.",
      "refs": [
        "ou2025",
        "paedAirway",
        "pls"
      ]
    }
  ]
}
};

Object.assign(answers, completionAnswers);

deepenAnswers(answers);
