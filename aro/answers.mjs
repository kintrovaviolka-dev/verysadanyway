// Zkouškové odpovědi se zdroji po sekcích; nejde o klinické protokoly.
export const answerSources = {
"pe2026":{"label": "AHA/ACC multisociety 2026 · Akutní plicní embolie", "url": "https://www.jacc.org/doi/10.1016/j.jacc.2025.11.005", "locator": "Klinické kategorie A–E, diagnostika, antikoagulace a pokročilá léčba; americké doporučení"},
"peESC":{"label": "ESC/ERS 2019 · Plicní embolie", "url": "https://academic.oup.com/eurheartj/article/41/4/543/5556136", "locator": "Oddíly 4–7: nestabilita, evropská stratifikace rizika, reperfuze"},
"peNICE":{"label": "NICE NG158 · Žilní tromboembolie", "url": "https://www.nice.org.uk/guidance/ng158/chapter/Recommendations", "locator": "1.1 a 1.3–1.4: Wells, D-dimer, zobrazení, antikoagulace a délka léčby"},
"akiKDIGO":{"label": "KDIGO 2012 · Akutní poškození ledvin", "url": "https://kdigo.org/wp-content/uploads/2016/10/KDIGO-2012-AKI-Guideline-English.pdf", "locator": "2.1: definice/stadia; oddíl 5: náhrada funkce, modality a antikoagulace"},
"akiDraft":{"label": "KDIGO · Stav aktualizace AKI/AKD 2026", "url": "https://kdigo.org/guidelines/acute-kidney-injury/", "locator": "K 29. 10. 2026: po veřejném připomínkování, příprava publikace; návrh není finální guideline"},
"akiNICE":{"label": "NICE NG148 · Akutní poškození ledvin", "url": "https://www.nice.org.uk/guidance/ng148/chapter/Recommendations", "locator": "1.3–1.5: detekce, příčina, diuretika a urgentní indikace RRT"},
"akiClinical":{"label": "Merck Manual 2026 · AKI", "url": "https://www.merckmanuals.com/professional/nephrology/acute-kidney-injury/acute-kidney-injury-aki", "locator": "Autorský výklad: prerenální, renální a postrenální příčiny, klinika a vyšetření"},
"alfAASLD":{"label": "AASLD 2011 · Akutní jaterní selhání", "url": "https://www.aasld.org/sites/default/files/2023-03/Acute%20Liver%20Failure%20Update2011.pdf", "locator": "Definice, časný kontakt transplantačního centra, etiologie a N-acetylcystein; starší position paper"},
"alfSCCM":{"label": "SCCM 2023 · Jaterní selhání v ICU, část II", "url": "https://www.sccm.org/clinical-resources/guidelines/guidelines/guidelines-for-the-management-of-liver-failure-2", "locator": "ALF: neurologie, nevhodnost rutinní invazivní ICP monitorace, hypertonický NaCl a výměna plazmy; odlišit od doporučení pro ACLF"},
"alfUpdate":{"label": "Management of Acute Liver Failure · Update 2022", "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10576953/", "locator": "Odborný přehled: intenzivní péče, CRRT, koagulace a transplantace; není nová společenská guideline"},

"hfESC2026":{"label": "ESC 2026 · Srdeční selhání", "url": "https://doi.org/10.1093/eurheartj/ehag100", "locator": "Oddíly 5–7 a 13: nová klasifikace EF, základní léčba, tabulka 9 akutní péče; vydáno 28. 8. 2026"},
"hfESC2021":{"label": "ESC 2021 · Akutní srdeční selhání", "url": "https://academic.oup.com/eurheartj/article/42/36/3599/6358045", "locator": "Oddíl 11: akutní diagnostika a léčba; použity principy znovu ověřené v ESC 2026, nikoli stará klasifikace jako aktuální"},
"hfNICE":{"label": "NICE CG187 · Akutní srdeční selhání", "url": "https://www.nice.org.uk/guidance/cg187/chapter/Recommendations", "locator": "1.2–1.3: natriuretické peptidy, echokardiografie, bez rutinního Swan–Ganzova katétru"},
"hfACC2024":{"label": "ACC 2024 · Léčba HFrEF", "url": "https://www.acc.org/latest-in-cardiology/ten-points-to-remember/2024/03/06/19/22/2024-acc-expert-consensus-hfref", "locator": "Oficiální souhrn konsenzu: zahájení a titrace, betablokátor po kompenzaci; starší definice HFrEF, pro klasifikaci viz ESC 2026"},
"pulmonaryEdema":{"label": "Merck Manual 2025 · Plicní edém", "url": "https://www.merckmanuals.com/professional/cardiovascular-disorders/heart-failure/pulmonary-edema", "locator": "Autorský klinický výklad: mechanismus, spouštěče a klinické projevy, nikoli guideline"},
"rvAHA":{"label": "AHA 2018 · Pravostranné srdeční selhání", "url": "https://doi.org/10.1161/CIR.0000000000000560", "locator": "Scientific statement: příčiny, venózní kongesce a komorová interdependence"},
"rvAcute":{"label": "ACVC/ESC 2024 · Akutní cor pulmonale", "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10927027/", "locator": "Konsenzus: náhlé zvýšení afterloadu PK, objem, vazopresory/inotropika a ventilace; není univerzální doporučení pro všechny příčiny RV selhání"},
"rvClinical":{"label": "Merck Manual 2025 · Right heart failure and cor pulmonale", "url": "https://www.merckmanuals.com/professional/cardiovascular-disorders/heart-failure/right-heart-failure-and-cor-pulmonale", "locator": "Klinické projevy, zobrazování a odlišení cor pulmonale; autorský výklad"},
"phESC":{"label": "ESC/ERS 2022 · Plicní hypertenze", "url": "https://academic.oup.com/eurheartj/article/43/38/3618/6673929", "locator": "Oddíly 6 a 8–10: léčba podle skupiny PH, PH při levostranném selhání, PAH/CTEPH a specializovaná centra"},

"nutritionESPEN":{"label": "ESPEN 2023 · Výživa v intenzivní péči", "url": "https://lms.espen.org/files/ESPEN-Guidelines/ESPEN_practical_and_partially_revised_guideline_Clinical_nutrition_in_the_intensive_care_unit.pdf", "locator": "Praktické, částečně revidované doporučení: cesta, načasování, kalorimetrie, energie a protein"},
"nutritionESICM":{"label": "ESICM 2017 · Časná enterální výživa", "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC5323492/", "locator": "Doporučení 1–12: časná EN, šok, kontraindikace a intolerance"},
"nutritionAlbumin":{"label": "ASPEN 2021 · Albumin a prealbumin", "url": "https://doi.org/10.1002/ncp.10588", "locator": "Position paper: viscerální proteiny nejsou samostatné ukazatele malnutrice ani adekvátnosti výživy"},
"nutritionNICE":{"label": "NICE CG32 · Nutriční podpora dospělých", "url": "https://www.nice.org.uk/guidance/cg32/chapter/Recommendations", "locator": "1.3–1.5: hodnocení, bilance, monitorace; 1.4.6–1.4.8: riziko refeedingu. Obecné doporučení, ne cíle akutní ICU výživy"},
"refeedingASPEN":{"label": "ASPEN 2020 · Refeeding syndrom", "url": "https://doi.org/10.1002/ncp.10474", "locator": "Definice a tabulka 6: dospělí v riziku, thiamin, fosfát/K/Mg, postupné navyšování energie"},
"padis2018":{"label": "SCCM PADIS 2018 · Bolest a sedace", "url": "https://www.sccm.org/clinical-resources/guidelines/guidelines/guidelines-for-the-prevention-and-management-of-pa", "locator": "Hodnocení bolesti, analgezie před sedací, lehká sedace a nefarmakologická péče; změněné body viz update 2025"},
"padis2025":{"label": "SCCM PADIS · Cílená aktualizace 2025", "url": "https://www.sccm.org/clinical-resources/guidelines/guidelines/focused-update-padis-guideline", "locator": "Pět aktualizovaných bodů: úzkost, dexmedetomidin, antipsychotika, mobilizace a melatonin"},
"icuBundle":{"label": "SCCM · ICU Liberation ABCDEF", "url": "https://www.sccm.org/clinical-resources/iculiberation-home/abcdef-bundles", "locator": "A–F: bolest, probouzení a dechová zkouška, volba léčiv, delirium, mobilizace a rodina"},
"camICU":{"label": "Vanderbilt CIBS · Monitorování deliria", "url": "https://www.icudelirium.org/medical-professionals/delirium/monitoring-delirium-in-the-icu", "locator": "CAM-ICU/ICDSC, manuál a RASS; nelze vyšetřit není totéž co negativní výsledek"},
"rassQUT":{"label": "QUT · RASS a CAM-ICU", "url": "https://www.delirium.health.qut.edu.au/identification-and-management/cam-icu", "locator": "Výuková tabulka RASS −5 až +4 a hranice hodnotitelnosti CAM-ICU"},
"propofolICU":{"label": "Propofol · SmPC", "url": "https://www.medicines.org.uk/emc/product/11294/smpc", "locator": "4.4 a 4.8: hypotenze, lipidy a propofolový infuzní syndrom"},
"dexICU":{"label": "Dexdor · SmPC", "url": "https://www.medicines.org.uk/emc/product/4783/smpc", "locator": "4.2–4.4: lehká sedace, kardiální monitorace, bradykardie/hypotenze; bez nasycovací dávky v ICU"},
"midazolamICU":{"label": "Midazolam · SmPC", "url": "https://www.medicines.org.uk/emc/product/3605/smpc", "locator": "4.2 a 5.2: akumulace při dlouhé infuzi, renální a jaterní dysfunkce"},

"acidMerck":{"label": "Merck Manual · Acid–base disorders", "url": "https://www.merckmanuals.com/professional/nephrology/acid-base-regulation-and-disorders/acid-base-disorders", "locator": "Autorský klinický výklad: čtyři poruchy, kompenzace, smíšené stavy; nikoli společenské doporučení"},
"acidSRLF":{"label": "SRLF/SFMU 2019 · Metabolická acidóza", "url": "https://link.springer.com/article/10.1186/s13613-019-0563-2", "locator": "Diagnostika: očekávaný PaCO₂, anion gap a korekce na albumin"},
"bicarICU2":{"label": "BICARICU-2 · Randomizovaná studie 2025", "url": "https://jamanetwork.com/journals/jama/fullarticle/2840824", "locator": "Primární výsledek: 90denní mortalita; sekundární potřeba náhrady funkce ledvin"},
"alkalosisMerck":{"label": "Merck Manual · Metabolická alkalóza", "url": "https://www.merckmanuals.com/professional/nephrology/acid-base-regulation-and-disorders/metabolic-alkalosis", "locator": "Chlorid-responzivní a rezistentní alkalóza; léčba příčiny"},
"hypoNaEurope":{"label": "Evropské doporučení 2014 · Hyponatremie", "url": "https://academic.oup.com/ejendo/article/170/3/G1/6668028", "locator": "Diagnostika hypotonicity, močová osmolalita a sodík; SIAD jako diagnóza po vyloučení jiných příčin"},
"hypoNaEmergency":{"label": "Society for Endocrinology 2022 · Akutní hyponatremie", "url": "https://www.endocrinology.org/media/xhrhxhxm/emergency-management-of-severe-and-moderately-severely-symptomatic-hyponatraemia-in-adult-patients-2022.pdf", "locator": "Algoritmus symptomatických dospělých: 3% NaCl, počáteční cíl, korekční limity a překročení"},
"hyperNaNHS":{"label": "NHS Ayrshire & Arran · Hypernatremie", "url": "https://aaamedicines.org.uk/guidelines/electrolyte-disturbances/management-of-hypernatraemia/", "locator": "Místní nemocniční postup: deficit vody, obnova cirkulace, průběžná korekce"},
"diabetesInsipidus":{"label": "Society for Endocrinology 2018 · Centrální diabetes insipidus", "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC6013691/", "locator": "Hospitalizovaný dospělý se známým CDI: bilance, desmopresin, obnova objemu a sledování Na"},
"hyperK2026":{"label": "UKKA · Hyperkalemie dospělých, aktualizace červenec 2026", "url": "https://www.ukkidney.org/sites/default/files/documents/FINAL%20VERSION%20-%20UKKA%20CLINICAL%20PRACTICE%20GUIDELINE%20-%20MANAGEMENT%20OF%20HYPERKALAEMIA%20IN%20ADULTS%20-%20UPDATED%20JULY%202026_0.pdf", "locator": "Doporučení 14–18: EKG, kalcium, inzulin/glukóza, eliminace K a monitorace"},
"hypoKSPS":{"label": "NHS SPS 2024 · Hypokalemie", "url": "https://sps.nhs.uk/articles/hypokalaemia/", "locator": "Perorální a intravenózní substituce, koncentrace, rychlost a monitorace"},
"hypoMgSPS":{"label": "NHS SPS 2024 · Akutní hypomagnezemie", "url": "https://sps.nhs.uk/articles/treating-acute-hypomagnesaemia-in-adults/", "locator": "Dávky v gramech a mmol, rychlost infuze a renální funkce"},
"hyperMgProduct":{"label": "Australian Commission · Magnesium sulfate AFT", "url": "https://www.safetyandquality.gov.au/medicine-finder/magnesium-sulfate-aft", "locator": "Produktová informace: předávkování, toxicita, kalcium a dialýza"},
"hypoCaEndo":{"label": "Society for Endocrinology · Hypokalcemie, dodatek 2019", "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC8117371/", "locator": "Upřesnění akutního podání 10% kalcium glukonátu a rozdílu proti chloridu"},
"hyperCaEndo":{"label": "Society for Endocrinology 2016 · Akutní hyperkalcemie", "url": "https://www.endocrinology.org/media/4277/emergency-guidance_acute-hypercalcaemia-in-adults.pdf", "locator": "Vyšetření PTH, rehydratace, antiresorpční léčba a renální selhání"},

"ardsGlobal":{"label": "Globální definice ARDS · 2023/2024", "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10870872/", "locator": "Tabulka 1: čas, zobrazení, původ edému a oxygenace; workshopový konsenzus"},
"ardsATS":{"label": "ATS 2024 · Léčba ARDS dospělých", "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10870893/", "locator": "Souhrn doporučení: VT, plateau, PEEP, kortikosteroidy, VV-ECMO"},
"ardsESICM":{"label": "ESICM 2023 · Respirační podpora u ARDS", "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10354163/", "locator": "Doporučení 7.1–7.2: časná pronace při P/F < 150, alespoň 16 hodin"},
"ardsNMBA":{"label": "SCCM 2026 · Nervosvalová blokáda u ARDS", "url": "https://www.sccm.org/clinical-resources/guidelines/guidelines/guidelines-for-the-administration-of-neuromuscular-blockade", "locator": "NMBA administration: přetrvávající hypoxemie či nedosažení ventilačních cílů při sedaci"},
"ventAssessment":{"label": "AARC 2024 · Patient–Ventilator Assessment", "url": "https://doi.org/10.4187/respcare.12007", "locator": "Doporučení: VT/PBW, plateau, PEEP/auto-PEEP, driving pressure, zvlhčení a rourka"},
"ventSBT":{"label": "AARC 2024 · Spontaneous Breathing Trials", "url": "https://www.aarc.org/wp-content/uploads/2023/11/CPG2024SpontaneousBreathingTrial.pdf", "locator": "Doporučení 1–4; SBT není totéž co extubace"},
"ventPrimer":{"label": "AACN · Mechanical Ventilation Settings", "url": "https://aacn.s3-us-west-2.amazonaws.com/Courses/ecco/course-resources/resources/pulmonary2/ecco-pulmonary-mechanical-ventilation-settings.pdf", "locator": "Výukový materiál, s. 2–5: AC, PCV, PSV a PEEP/CPAP; základní principy, nikoli aktuální ARDS protokol"},
"ventTrouble":{"label": "Vanderbilt · Introduction to Ventilator Management", "url": "https://vimbook.vumc.org/critical-care/introduction-vent-management", "locator": "Výukový nemocniční text: plateau, auto-PEEP a diferenciální diagnostika alarmů"},
"ventSafe":{"label": "AARC/UHC · Safe Initiation and Management of Mechanical Ventilation", "url": "https://www.aarc.org/wp-content/uploads/2017/03/Issue-Paper-Safe-Initiation-and-Management-of-Mechanical-Ventilation.pdf", "locator": "Nastavení pro pacienta, alarmy, kontrola okruhu a odpovědi na změny; základní bezpečnostní dokument"},
"ardsnet":{"label": "NHLBI ARDSNet · Protokol FACTT", "url": "https://biolincc.nhlbi.nih.gov/media/studies/factt/Protocol.pdf", "locator": "Oddíl C: predikovaná hmotnost, cílový VT 6 ml/kg a titrace podle tlaků/pH; historický výzkumný protokol"},
"oxygenSRLF":{"label": "SRLF/SFMU 2024 · Akutní hypoxemické respirační selhání", "url": "https://link.springer.com/article/10.1186/s13613-024-01367-2", "locator": "Otázka 7: indikace a zvažování intubace; konsenzus panelu"},

"ssc2026":{"label": "SSC 2026 · Sepse a septický šok dospělých", "url": "https://www.sccm.org/clinical-resources/guidelines/guidelines/surviving-sepsis-campaign-international-guidelines-for-management-of-sepsis-and-septic-shock-2026", "locator": "Screening, antibiotic initiation, source control, fluid resuscitation, MAP, vasopressors"},
"sepsis3":{"label": "Sepsis-3 · Mezinárodní konsenzus 2016", "url": "https://doi.org/10.1001/jama.2016.0287", "locator": "Definice sepse a šoku, SOFA a omezení SIRS/qSOFA"},
"amr2026":{"label": "IDSA 2026 · Antimikrobiální rezistence", "url": "https://www.idsociety.org/practice-guideline/amr-guidance/", "locator": "General Management Suggestions: empirická léčba, délka a převod na p.o.; americký kontext"},
"atbPK":{"label": "ESICM/ESCMID a další · TDM v intenzivní péči, 2020", "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC7223855/", "locator": "PK/PD, beta-laktamy, aminoglykosidy, nasycovací dávka a změny clearance"},
"vancoAUC":{"label": "ASHP/IDSA/PIDS/SIDP 2020 · Vankomycin", "url": "https://www.idsociety.org/practice-guideline/vancomycin", "locator": "Executive summary: závažné MRSA infekce, AUC24 400–600 při MIC 1 mg/l"},
"cultures":{"label": "CDC · Odběr hemokultur u dospělých", "url": "https://www.cdc.gov/lab-quality/php/preventing-adult-blood-culture-contamination/collect.html", "locator": "Alespoň dvě sady, objem, aseptický odběr a identifikace vzorků"},
"steroidsShock":{"label": "SCCM 2024 · Kortikosteroidy u septického šoku", "url": "https://doi.org/10.1097/CCM.0000000000006172", "locator": "Doporučení 1A/1B a tabulka 4: běžný režim hydrokortizonu, ne vysoké krátké pulzy"},
"candidaDuration":{"label": "IDSA 2016 · Kandidémie", "url": "https://www.idsociety.org/practice-guideline/candidiasis/", "locator": "Doporučení 11–12: kontrolní kultury a délka nekomplikované kandidémie u non-neutropenických"},

"traumaBleeding":{"label": "Evropské doporučení 2023 · Krvácení po traumatu, 6. vydání", "url": "https://link.springer.com/article/10.1186/s13054-023-04327-7", "locator": "Doporučení 9–11, 13, 23, 29 a 31: Hb, koagulace, tlak, TXA, fibrinogen, kalcium"},
"traumaNICE":{"label": "NICE NG39 · Major trauma, 2016", "url": "https://www.nice.org.uk/guidance/ng39/chapter/Recommendations", "locator": "1.4.1–2; 1.5.3, 13–18, 27–38: hrudník, krvácení, zobrazování a operace"},
"traumaFirstAid":{"label": "RCUK 2025 · First aid", "url": "https://www.resus.org.uk/professional-library/2025-resuscitation-guidelines/first-aid-guidelines", "locator": "Life-threatening bleeding; scene safety; prevention of hypothermia"},
"atls11":{"label": "ACS 2025 · Zavedení ATLS 11", "url": "https://www.facs.org/for-medical-professionals/news-publications/news-and-articles/acs-brief/september-16-2025-issue/trauma-care-gets-major-upgrade-with-launch-of-atls-11/", "locator": "Oficiální oznámení: xABCDE, katastrofické zevní krvácení před airway; nejde o celý manuál"},
"berlin":{"label": "Pape et al. 2014 · Berlínská definice polytraumatu", "url": "https://pubmed.ncbi.nlm.nih.gov/25494433/", "locator": "Původní konsenzus: AIS ≥ 3 ve dvou oblastech a přidružené rizikové kritérium"},
"uhsTrauma":{"label": "UHS · Adult Major Trauma Guidelines, místní postup 2022", "url": "https://www.uhs.nhs.uk/Media/SUHTExtranet/WessexTraumaNetwork/UHS-adult-major-trauma-guidelines.pdf", "locator": "Oddíly 2.1–2.6, 2.9: základní vyšetření a organizace; nepřebíráme starší dávkové protokoly"},
"majorHaemorrhage":{"label": "BSH 2022 · Major haemorrhage", "url": "https://cms.b-s-h.org.uk/guidelines/guidelines/haematological-management-of-major-haemorrhage-2022", "locator": "Veřejný souhrn: časné rozpoznání, spolupráce laboratoře a kliniky; stránka revidována 2025"},
"giTXA":{"label": "BSG/ACPGBI 2026 · TXA při krvácení do GIT", "url": "https://fg.bmj.com/content/early/2026/02/11/flgastro-2026-103607", "locator": "Interpretation and BSG/ACPGBI position: nepodávat rutinně u akutního horního ani dolního GIT krvácení"},

"mh":{"label": "EMHG 2024 · Malignant hyperthermia crisis", "url": "https://www.emhg.org/recommendations-1/2024/11/4/recognising-and-managing-a-malignant-hyperthermia-crisis-v2024", "locator": "Box 1–2: spouštěče, rozpoznání, dantrolen a sledování"},
"mhMechanism":{"label": "MHAUS · Podstata maligní hypertermie", "url": "https://www.mhaus.org/about/what-is-mh-mhaus/", "locator": "What is MH? — kalcium a hypermetabolismus kosterního svalu"},
"last":{"label": "ASRA 2020 · LAST checklist v1.1", "url": "https://asra.com/docs/default-source/guidelines-articles/local-anesthetic-systemic-toxicity-rgb.pdf?sfvrsn=33b348e_2", "locator": "20% lipid, dávky podle hmotnosti, odlišnosti resuscitace, observace"},
"lastAdvisory":{"label": "ASRA · Third Practice Advisory on LAST, 2017/2018", "url": "https://rapm.bmj.com/content/rapm/43/2/113.full.pdf", "locator": "Prevention a diagnosis: kumulativní dávka, variabilní/opožděné projevy"},
"nmb":{"label": "ASA 2023 · Monitoring and Antagonism of Neuromuscular Blockade", "url": "https://doi.org/10.1097/ALN.0000000000004379", "locator": "Recommendations: kvantitativní TOF, adductor pollicis, antagonizace"},
"hypoxia":{"label": "Association of Anaesthetists · QRH 2-2, 2018", "url": "https://anaesthetists.org/Portals/0/PDFs/QRH/QRH_2-2_Hypoxia-desaturation-cyanosis_v1.pdf", "locator": "Hypoxia / desaturation / cyanosis: přívod O₂, pomůcka, okruh, ventilace"},
"hypotension":{"label": "Association of Anaesthetists · QRH 2-4, 2018", "url": "https://anaesthetists.org/Portals/0/PDFs/QRH/QRH_2-4_Hypotension_v1.pdf", "locator": "Hypotension: kontrola ABC, chirurgické příčiny a léky"},
"laryngospasm":{"label": "Association of Anaesthetists · QRH 3-6, 2018", "url": "https://anaesthetists.org/Portals/0/PDFs/QRH/QRH_3-6_Laryngospasm_and_stridor_v1.pdf", "locator": "Laryngospasm and stridor: přerušení stimulace, jaw thrust, CPAP a eskalace"},
"bronchospasm":{"label": "Association of Anaesthetists · QRH 3-4, 2023", "url": "https://anaesthetists.org/Portals/0/PDFs/QRH/QRH_3-4_Bronchospasm_v3_June%202023.pdf", "locator": "Bronchospasm: napodobující stavy, salbutamol, aspirace, ventilace"},
"gaRisks":{"label": "Royal College of Anaesthetists · Rizika celkové anestezie", "url": "https://rcoa.ac.uk/patients/patient-information-resources/anaesthesia-risk/risks-associated-general-anaesthesia", "locator": "Přehled respiračních, neurologických a mechanických komplikací"},
"awareness":{"label": "RCoA · Accidental awareness", "url": "https://www.rcoa.ac.uk/patients/patient-information-resources/anaesthesia-risk/risks-associated-general-anaesthesia/accidental-awareness", "locator": "Příčiny a následná péče při vědomém prožitku během celkové anestezie"},
"ponvSummary":{"label": "Gan et al. · Fifth Consensus Guidelines, executive summary", "url": "https://doi.org/10.1213/ANE.0000000000007816", "locator": "Dospělí: multimodální profylaxe a záchranná léčba jiné třídy; 2025/2026"},
"bupivacaine":{"label": "Bupivacaine · SmPC, Aspen", "url": "https://www.medicines.org.uk/emc/product/13990/smpc", "locator": "§ 4.1, 4.4, 4.8, 5.1: účinek, dávková závislost, toxicita"},
"lidocaine":{"label": "Lidocaine · SmPC", "url": "https://www.medicines.org.uk/emc/product/12800/smpc", "locator": "§ 4.1 a 5.1: amidové lokální anestetikum a použití"},
"ropivacaine":{"label": "Ropivacaine · SmPC, Sandoz", "url": "https://www.medicines.org.uk/emc/product/100394/smpc", "locator": "§ 4.2, 4.5, 6.6: epidurální kombinace s opioidem, aditivní toxicita, kompatibilita"},
"chloroprocaine":{"label": "Chloroprocaine (Ampres) · SmPC", "url": "https://www.medicines.org.uk/emc/product/15158/smpc", "locator": "§ 5.1–5.2: esterové anestetikum a hydrolýza v plazmě"},
"highBlock":{"label": "OAA 2024 · High central neuraxial block", "url": "https://www.oaa-anaes.ac.uk/downloads/oaa-qrh/obstetric-quick-reference-handbook-jan-24-.pdf", "locator": "Karta 2-7; porodnický kontext, podpora ABC do odeznění bloku"},
"neuroRegional":{"label": "ASA 2023 · Neurologické komplikace neuraxiální anestezie v porodnictví", "url": "https://www.asahq.org/standards-and-practice-parameters/statement-on-neurologic-complications-of-neuraxial-analgesia-anesthesia-in-obstetrics", "locator": "Imaging; neurologická konzultace, progresivní deficit a komprese"},
"antithrombotic":{"label": "ASRA 2025 · Antithrombotic Therapy, 5th edition", "url": "https://rapm.bmj.com/content/early/2025/09/16/rapm-2024-105766", "locator": "Neuraxiální a hluboké blokády, intervaly podle léčiva/dávky/funkce ledvin a katétrů"},
"pdpH":{"label": "Multisociety consensus · Postdural puncture headache, 2023/2024", "url": "https://rapm.bmj.com/content/49/7/471", "locator": "Diagnóza, varovné příznaky, zobrazování a epidurální krevní zátka"},

"das2025":{"label": "DAS 2025 · Obtížná intubace dospělých", "url": "https://doi.org/10.1016/j.bja.2025.10.006", "locator": "Plány A–D, potvrzení intubace; BJA 136 (2026), s. 283–307"},
"awake":{"label": "DAS 2019 · Awake tracheal intubation", "url": "https://das.uk.com/guidelines/das-guidelines-for-awake-tracheal-intubation-ati-in-adults/", "locator": "Recommendations 1–8: indikace, oxygenace, lokální anestezie a kontrola polohy"},
"asaAirway":{"label": "ASA 2022 · Difficult Airway", "url": "https://doi.org/10.1097/ALN.0000000000004002", "locator": "Anticipated difficult airway management: strategie a indikace bdělé intubace"},
"cspine":{"label": "DAS a další společnosti 2024 · Poranění krční páteře", "url": "https://fphc.rcsed.ac.uk/media/3594/airway-management-in-patients-with-suspected-or-confirmed-cervical-spine-injury.pdf", "locator": "Doporučení 1–9: jaw thrust, videolaryngoskopie, přední díl límce"},
"airwayBasic":{"label": "AHA 2025 · Adult BLS — zprůchodnění dýchacích cest", "url": "https://cpr.heart.org/en/resuscitation-science/cpr-and-ecc-guidelines/adult-basic-life-support", "locator": "Opening the Airway; Head and Neck Trauma"},
"upperAirway":{"label": "RCH · Acute upper airway obstruction", "url": "https://www.rch.org.au/clinicalguide/guideline_index/Acute_upper_airway_obstruction/", "locator": "Assessment, differential diagnoses, investigations, treatment; místní pediatrický postup"},
"croup":{"label": "RCH · Croup (laryngotracheobronchitis)", "url": "https://www.rch.org.au/clinicalguide/guideline_index/Croup_Laryngotracheobronchitis/", "locator": "Závažnost, vyšetření, Medication: severe / life-threatening; dávky dle RCH"},
"paedAirway":{"label": "RCH · Emergency airway management", "url": "https://www.rch.org.au/clinicalguide/guideline_index/Emergency_airway_management/", "locator": "Key points, preparation, optimisation of physiology, monitoring"},
"inhaled":{"label": "RCH · Foreign bodies inhaled", "url": "https://www.rch.org.au/clinicalguide/guideline_index/Foreign_bodies_inhaled/", "locator": "Key points, investigations, subacute management; normální RTG nevylučuje aspiraci"},

  pls: {label:'ERC 2025 · Paediatric Life Support',url:'https://www.erc.edu/media/03xnpjmj/gl2025-09-pls-e.pdf',locator:'Concise guidelines: PALS, s. 19–20; algoritmus a reverzibilní příčiny'},
  pbls: {label:'RCUK 2025 · Paediatric Life Support',url:'https://www.resus.org.uk/professional-library/2025-resuscitation-guidelines/paediatric-basic-life-support-guidelines',locator:'PBLS; chest compressions; post-resuscitation care'},
  nls: {label:'ERC 2025 · Newborn Life Support',url:'https://www.erc.edu/media/rgrn0faa/gl2025-08-nls-e.pdf',locator:'Concise guidelines: circulation a medication, s. 11'},
  transition: {label:'RCUK 2025 · Newborn resuscitation',url:'https://www.resus.org.uk/professional-library/2025-resuscitation-guidelines/newborn-resuscitation-and-support-transition-infants-birth',locator:'Thermal care, cord, initial assessment, lung inflation, oxygen'},
  wao: {label:'WAO Anaphylaxis Guidance 2020',url:'https://pmc.ncbi.nlm.nih.gov/articles/PMC7607509/',locator:'Definice, tabulka 2, mechanismy, tabulka 6'},
  special: {label:'ERC 2025 · Special Circumstances',url:'https://www.erc.edu/media/wwufbysp/gl2025-06-spec-circ-e.pdf',locator:'Anaphylaxis: poloha, adrenalin, tekutiny, projevy během anestezie'},
  anaphylaxis: {label:'RCUK · Emergency treatment of anaphylaxis, 2021',url:'https://www.resus.org.uk/media/337/download',locator:'§ 5.4–5.5, 6 (refrakterní průběh), 7 (tryptáza), 8 (následná péče)'},
  rc2025: {label:'RCUK 2025 · Special circumstances',url:'https://www.resus.org.uk/professional-library/2025-resuscitation-guidelines/special-circumstances-guidelines',locator:'Management and prevention of cardiac arrest due to anaphylaxis'},

  adaDKA: {label: 'ADA 2024–2026 · Hyperglykemické krize u dospělých', url: 'https://doi.org/10.2337/dci23-0085', locator: 'Konsenzus ADA/EASD: definice DKA a HHS, tekutiny, inzulin a kalium'},
  adaHypo: {label: 'ADA Standards of Care 2024–2026 · Hypoglykemie', url: 'https://doi.org/10.2337/dc24-S006', locator: 'Oddíl 6: úrovně hypoglykemie 1–3, neuroglykopenie a léčba per os / i.v.'},
  jbdsDKA: {label: 'JBDS-IP 2023/2024 · Léčba DKA u dospělých', url: 'https://abcd.care/sites/abcd.care/files/site_uploads/JBDS_Guidelines_Current/01_JBDS_DKA_Guideline_Updated_June_2023.pdf', locator: 'Britský standard: fixní rychlost inzulinu, časná 5–10% glukóza a pravidla pro kalium'},
  tisPraha: {label: 'TIS ČR · Zásady terapie akutních intoxikací', url: 'https://www.tis-cz.cz/index.php/informace-pro-odborniky', locator: 'Klinická toxikologie: ABC priority, toxidromy, výplach žaludku a carbo adsorbens'},
  aactDecon: {label: 'AACT/EAPCCT · Gastrointestinální dekontaminace', url: 'https://doi.org/10.1080/15563650490514867', locator: 'Position papers: odmítnutí rutinního zvracení a výplachu, indikace carbo adsorbens'},
  extripGroup: {label: 'EXTRIP Workgroup · Mimotělní eliminace u otrav', url: 'https://www.extrip-workgroup.org/guidelines', locator: 'Doporučení pro hemodialýzu: toxické alkoholy, lithium, salicyláty a teofylin'},
  paracetamolNPIS: {label: 'NPIS / MHRA · Předávkování paracetamolem', url: 'https://www.gov.uk/drug-safety-update/paracetamol-overdose-simplified-treatment-guideline', locator: 'Toxikokinetika NAPQI, nomogram, intravenózní N-acetylcystein a jaterní funkce'},
  toxicAlcohols: {label: 'EAPCCT / EXTRIP · Metanol a etylenglykol', url: 'https://doi.org/10.1080/15563650.2019.1676895', locator: 'Formiát a oxalát, osmolální a anion gap, fomepizol, etanol a urgentní dialýza'},
  coGuideline: {label: 'UHMS / CDC · Intoxikace oxidem uhelnatým', url: 'https://www.uhms.org/resources/featured-resources/carbon-monoxide.html', locator: 'COHb, klam pulzní oxymetrie, normobarický 100% O2 a indikace HBO'},
  opioidWHO: {label: 'WHO / ERC 2025 · Předávkování opioidy', url: 'https://www.who.int/publications/i/item/9789241548816', locator: 'Priorita ventilace, titrovaný naloxon k obnově dechu a riziko relapsu'},
  tcaToxicology: {label: 'Clinical Toxicology · Intoxikace TCA', url: 'https://doi.org/10.1080/15563650701664860', locator: 'Blokáda sodíkových kanálů, rozšíření QRS, indikace a mechanismus 8,4% natrium bikarbonátu'}
};
export const answers = {
  A18: {
    title:'KPR u dětí a resuscitace novorozence při porodu',
    reviewed:'2026-10-28', edition:'ERC / RCUK 2025',
    scope:'Základní a rozšířený postup pro ústní zkoušku, s oddělením PLS od NLS při porodu. Speciální situace, pokročilé ventilační režimy a rozhodování o ukončení KPR vyžadují samostatné algoritmy.',
    opening:'Nejprve rozliším resuscitaci dítěte od podpory přechodu novorozence při porodu. U dítěte kombinuji ventilaci a komprese; při porodu je zásadní rozvinout plíce. V obou situacích průběžně ověřuji účinek zásahů.',
    openingRefs:['pbls','transition'],
    sections:[
      {title:'1. Dítě: základní neodkladná resuscitace',refs:['pbls'],paragraphs:[
        'Ověřím bezpečí a reakci. Pokud dítě nereaguje, ihned přivolám pomoc, ideálně telefonem na hlasitý odposlech. Zprůchodním dýchací cesty a nejvýše 10 sekund posuzuji dýchání a známky života. Pokud nereagující dítě nedýchá normálně, podám pět úvodních vdechů a zahájím KPR.',
        'Zachránce vyškolený v dětské BLS používá 15 : 2, jinak 30 : 2. Komprese mají frekvenci 100–120/min a hloubku alespoň třetiny předozadního průměru hrudníku; u adolescenta 5–6 cm. V žádném věku nepřekračuji 6 cm. U kojence používám dva palce s obemknutím hrudníku, u většího dítěte jednu či dvě ruce. Uvolňuji hrudník a omezuji přerušení.',
        'AED připojím co nejdříve. Jako jediný zachránce upřednostním volání pomoci a KPR před odchodem pro AED; je-li přítomen druhý zachránce, pošlu jej pro přístroj. Pod 25 kg použiji dětský režim, je-li dostupný; jeho absence nebrání použití běžného AED. Elektrody se nesmějí dotýkat.'
      ]},
      {title:'2. Dítě: rozšířená resuscitace',refs:['pls'],paragraphs:[
        'Monitoruji rytmus, zajistím účinnou oxygenaci a ventilaci, i.v./i.o. vstup a hledám reverzibilní příčiny. Komprese zahajuji také při frekvenci pod 60/min se špatnou perfuzí navzdory adekvátní dechové podpoře.',
        'U PEA/asystolie podám co nejdříve adrenalin 10 mikrogramů/kg i.v./i.o., maximálně 1 mg; opakuji po 4 minutách. Dávku při neúspěchu nezvyšuji desetinásobně. Rytmus kontroluji po 2 minutách.',
        'U VF/bezpulzové VT defibriluji 4 J/kg (počáteční maximum podle přístroje 120–200 J) a ihned pokračuji 2 minuty v KPR. Po třetím výboji podám adrenalin 10 mikrogramů/kg i.v./i.o. (maximálně 1 mg) a amiodaron 5 mg/kg i.v./i.o. (maximálně 300 mg). Po pátém výboji znovu amiodaron 5 mg/kg, tentokrát maximálně 150 mg. Adrenalin dále po 4 minutách.',
        'Průběžně řeším hypoxii, hypovolemii, metabolické poruchy, hypotermii, tenzní pneumotorax, tamponádu, trombózu a toxiny. Léčba příčiny běží současně s KPR.'
      ]},
      {title:'3. Při porodu: nejprve účinná ventilace',refs:['transition'],paragraphs:[
        'NLS řeší přechod z placentární výměny plynů na plicní. Připravím tým, teplo a pomůcky; hodnotím dýchání, srdeční frekvenci a tonus. Udržuji teplotu 36,5–37,5 °C. U stabilního novorozence usiluji o odložené přerušení pupečníku alespoň 60 sekund; nezdržuji potřebnou resuscitaci.',
        'Při apnoi, gaspingu nebo neúčinném dýchání zahájím přetlakovou ventilaci ideálně během první minuty: pět úvodních insuflací po 2–3 sekundách. Sleduji pohyb hrudníku a vzestup frekvence. Pokud hrudník nestoupá, opravím polohu, průchodnost dýchacích cest, těsnost masky a zkontroluji vybavení. Neúčinné vdechy nenahradím předčasnými kompresemi.',
        'Od 32. týdne začínám při dechové podpoře 21% kyslíkem; pod 32 týdnů alespoň 30 %. Kyslík titruji podle preduktální saturace a stáří v minutách. Při další potřebě přetlakové ventilace používám přibližně 30 vdechů/min a počáteční PEEP 6 cm H₂O. CPAP 6 cm H₂O je určen pro spontánně dýchající dítě s dechovou tísní: pod 32 týdnů, od 32 týdnů při současné potřebě doplňkového kyslíku. Ventiluji do účinného spontánního dýchání a frekvence nad 100/min.'
      ]},
      {title:'4. Při porodu: kdy přidat komprese a léky',refs:['nls'],paragraphs:[
        'Pokud srdeční frekvence zůstává pod 60/min po alespoň 30 sekundách účinné ventilace, zahájím komprese dvěma palci do třetiny hloubky hrudníku. Poměr je 3 : 1: přibližně 90 kompresí a 30 ventilací/min. Zvýším kyslík na 100 %, zajistím odbornou pomoc a přístup. Jakmile je spolehlivě měřitelná saturace, kyslík titruji podle cílových hodnot pro stáří v minutách. Frekvenci přehodnocuji po 30 sekundách; při vzestupu nad 60/min komprese ukončím a dále podporuji dýchání podle stavu.',
        'Při přetrvávající frekvenci pod 60/min bez vzestupu navzdory účinné ventilaci a alespoň 30 sekundám kompresí zvažuji adrenalin. ERC doporučuje 10–30 mikrogramů/kg přednostně přes umbilikální žilní katétr, alternativně i.o.; opakuji po 4 minutách. Používá se koncentrace 0,1 mg/ml (tedy 0,1–0,3 ml/kg).',
        'U intubovaného dítěte bez cévního vstupu připouští NLS dočasně intratracheálně 100 mikrogramů/kg; nesmí to zdržet cévní vstup. Pokud frekvence zůstává pod 60/min, po zajištění cévního vstupu podám ihned intravaskulární dávku bez ohledu na čas předchozí intratracheální dávky. Jde o výjimku NLS, nikoli obecné pravidlo dětské či dospělé KPR. Při podezření na krevní ztrátu zvažuji 10 ml/kg krve skupiny 0 Rh-negativní nebo izotonického krystaloidu.'
      ]},
      {title:'5. Po návratu oběhu odpověď nekončí',refs:['pbls'],paragraphs:[
        'Po ROSC pokračuji řízenou oxygenací, ventilací a podporou perfuze. Sleduji teplotu, glykemii a křeče, léčím příčinu a předávám do specializované péče. Prognózu neurčuji podle jediného časného nálezu.'
      ]}
    ],
    corrections:[
      'Skripta směšují novorozence a kojence: při porodu učím samostatný NLS algoritmus.',
      'Pokyn „volat až po minutě“ není univerzální: s dostupným telefonem aktivuji pomoc ihned.',
      'Nepřebírat desetinásobnou eskalaci dětského adrenalinu ze skript A17.'
    ],
    checks:[
      {question:'Novorozenec má po vdeších frekvenci 50/min, ale hrudník se nehýbe. Co musíš ověřit před dalším krokem?',answer:'Účinnost ventilace: průchodnost, polohu, masku a pomůcky. Podmínka „po účinné ventilaci“ zde nebyla splněna.',refs:['transition']},
      {question:'Proč nelze odpovědět jen „u dětí je dávka podle hmotnosti“?',answer:'Musím určit populaci, indikaci a cestu podání. Pro PLS a NLS jsou výše oddělené algoritmy; samotná hmotnost je nerozliší.',refs:['pls','nls']},
      {question:'Je poměr 15 : 2 automaticky vyhrazen dvěma zachráncům?',answer:'V doporučení PBLS je rozhodující vyškolení v dětské resuscitaci, ne pouze počet zachránců.',refs:['pbls']}
    ]
  },
  B04: {
    title:'Závažná alergická reakce, anafylaxe a anafylaktický šok',
    reviewed:'2026-10-28', edition:'WAO 2020 · RCUK 2021 · ERC/RCUK 2025',
    scope:'Rozpoznání, příčiny, první léčba, refrakterní průběh a návazná péče. Perioperační i.v. titrace patří zkušenému anesteziologickému týmu. Observace se řídí rizikem a místním postupem; nejde o automatické propouštěcí kritérium.',
    opening:'Anafylaxe je rychle vznikající systémová reakce přecitlivělosti, která může ohrozit dýchací cesty, dýchání nebo oběh. Šok je její oběhový projev, nikoli podmínka diagnózy. Při podezření s postižením ABC nečekám na vyrážku ani laboratorní potvrzení.',
    openingRefs:['wao','rc2025'],
    sections:[
      {title:'1. Příčiny, mechanismus a klinické rozpoznání',refs:['wao','special'],paragraphs:[
        'Spouštěči bývají potraviny, léky, hmyzí jed nebo latex. Aktivace mastocytů a bazofilů může být IgE-zprostředkovaná i jiná; anafylaxi proto nedefinuji výhradně přes IgE. Mediátory vyvolávají vazodilataci, zvýšenou cévní propustnost a bronchokonstrikci. Výsledkem je pokles žilního návratu, hypoperfuze a dechové ohrožení.',
        'Anafylaxe je vysoce pravděpodobná při akutních kožních/slizničních projevech spolu s dechovým postižením, poklesem tlaku nebo závažnými GIT příznaky. Po známém či vysoce pravděpodobném alergenu může samotná hypotenze, bronchospasmus nebo laryngeální postižení stačit i bez kožních změn. Kritérium izolovaného bronchospasmu se nevztahuje na příznaky z dolních dýchacích cest po běžných inhalačních alergenech ani na pouhou domnělou inhalační expozici potravinovému alergenu bez požití.',
        'V anestezii může dominovat náhlý pokles tlaku a vzestup ventilačních tlaků s prodlouženým výdechem. Kožní projevy nemusí být patrné. Současně zvažuji jiné příčiny, například krvácení, problém s dýchacími cestami nebo jiný typ šoku.'
      ]},
      {title:'2. První minuty: adrenalin a podpora ABC',refs:['special','rc2025'],paragraphs:[
        'Přivolám pomoc, přeruším přívod spouštěče, je-li to možné bez odkladu léčby, a postupně řeším ABCDE. Při oběhovém postižení položím pacienta se zvednutými dolními končetinami. Nenechám ho vstát. Při izolované dechové tísni bez oběhové nestability lze polohu upravit s nataženými dolními končetinami.',
        'Dospělému podám adrenalin 0,5 mg i.m. do zevní strany střední třetiny stehna: 0,5 ml roztoku 1 mg/ml. Při trvajících ABC obtížích opakuji; RCUK používá 5 minut, ERC 2025 uvádí 3–5 minut podle odpovědi.',
        'Podám kyslík, monitoruji saturaci, EKG a tlak, zajistím žilní vstup. U dospělého při hypotenzi podávám krystaloid po bolusech 10–20 ml/kg s přehodnocením. Při zástavě zahájím KPR podle příslušného resuscitačního algoritmu; rozlišuji i.m. dávku pro anafylaxi se zachovaným oběhem od resuscitačního dávkování při zástavě.'
      ]},
      {title:'3. Děti a volba cesty podání',refs:['wao','anaphylaxis'],paragraphs:[
        'WAO uvádí dětskou dávku adrenalinu 0,01 mg/kg i.m., maximálně 0,5 mg; při koncentraci 1 mg/ml jde o 0,01 ml/kg. Subkutánní podání není doporučenou první volbou. I.v. bolus není běžnou náhradou i.m. léčby u pacienta s oběhem: hrozí dávkovací chyba a arytmie.'
      ]},
      {title:'4. Refrakterní průběh a pomocné léky',refs:['anaphylaxis'],paragraphs:[
        'Přetrvávání dechového či oběhového ohrožení po dvou správných i.m. dávkách znamená refrakterní anafylaxi. Volám zkušený tým pro monitorovanou i.v. infuzi adrenalinu a další tekutinovou a orgánovou podporu; do jejího zahájení pokračuji v indikovaných i.m. dávkách.',
        'Antihistaminika mohou po stabilizaci pomoci kožním příznakům, neřeší však ohrožení ABC. Kortikoidy nejsou rutinní úvodní léčbou ani spolehlivou prevencí bifázické reakce. U vybraného refrakterního průběhu či astmatu se zvažují až po resuscitaci. Inhalační bronchodilatancia při bronchospasmu jsou doplněk, nikoli náhrada adrenalinu.'
      ]},
      {title:'5. Po stabilizaci: potvrzení, observace a prevence',refs:['wao','anaphylaxis'],paragraphs:[
        'Tryptáza může diagnózu podpořit, normální výsledek ji nevylučuje. Odběr nesmí zdržet léčbu; akutní hodnotu porovnávám s bazální po odeznění reakce.',
        'Hrozí návrat příznaků bez nové expozice — bifázická reakce. Délku observace individualizuji podle závažnosti, odpovědi, potřebných dávek a dostupnosti pomoci. Před propuštěním zajistím poučení, alergologické vyšetření, plán pro recidivu a podle indikace autoinjektory s nácvikem použití.'
      ]}
    ],
    corrections:[
      'Skriptové pořadí „i.v., i.m., s.c.“ není rovnocenný seznam pro první pomoc: u anafylaxe s oběhem je standardem časný i.m. adrenalin.',
      'Samotná kopřivka není automaticky anafylaxe; naopak absence kopřivky ji nevylučuje.',
      'Nevysvětluj anafylaxi pouze jako IgE reakci a nenech se seznamem pomocných léků odvést od priorit ABC.'
    ],
    checks:[
      {question:'Po antibiotiku vznikl stridor a hypotenze bez vyrážky. Čekáš na kožní projevy?',answer:'Ne. Tento klinický obraz po pravděpodobném spouštěči je důvodem okamžité léčby anafylaxe.',refs:['wao']},
      {question:'Dospělý stále špatně dýchá po dvou správných i.m. dávkách. Co řekneš zkoušejícímu?',answer:'Jde o refrakterní průběh. Potřebuji eskalaci týmu a monitorovanou infuzní léčbu, ne pouze přidat antihistaminikum.',refs:['anaphylaxis']},
      {question:'Proč může mít pacient těžký šok bez zevní krevní ztráty?',answer:'Vazodilatace a přesun tekutiny z cév snižují účinný cirkulující objem. Proto se k adrenalinu přidává objemová podpora.',refs:['special']}
    ]
  },
"A20":{
  "title": "Zajištění dýchacích cest a obtížná intubace",
  "reviewed": "2026-10-28",
  "edition": "DAS 2025 · DAS/AoA 2024 · ASA 2022",
  "scope": "Zkouškový přehled metod, plánování obtížných dýchacích cest a poranění krční páteře u dospělého. Plány A–D shrnují neočekávanou obtížnou intubaci po úvodu do anestezie; pediatrie má samostatnou odpověď B30. Technika výkonů a dávky úvodu vyžadují praktický výcvik a místní protokol.",
  "opening": "Nejprve posoudím, zda pacient udrží průchodné dýchací cesty a zda ho dokážu oxygenovat a ventilovat. Obtížné dýchací cesty nejsou jen špatný pohled na hlasivky: problém může být při ventilaci maskou, použití supraglotické pomůcky, intubaci i invazivní záchraně. Předem připravím hlavní a záložní postup.",
  "openingRefs": [
    "asaAirway"
  ],
  "sections": [
    {
      "title": "1. Zprůchodnění a základní pomůcky",
      "refs": [
        "airwayBasic"
      ],
      "paragraphs": [
        "Při bezvědomí může klesnout tonus hltanu a jazyk uzavřít průchod vzduchu. Bez podezření na úraz použiji záklon hlavy se zvednutím brady; při podezření na poranění krku začínám předsunutím dolní čelisti. Zhodnotím účinek podle proudění vzduchu a pohybu hrudníku.",
        "Orofaryngeální vzduchovod pomáhá u hluboce nereagujícího pacienta bez dávivého reflexu; při zachovaných reflexech může vyvolat zvracení. Nazofaryngeální pomůcka má vlastní omezení: při podezření na zlomeninu baze lební nebo těžké koagulopatii dávám přednost orofaryngeální cestě. „Maxilofaciální trauma“ není automatická indikace nosního vzduchovodu."
      ]
    },
    {
      "title": "2. Plán před úvodem a očekávané obtíže",
      "refs": [
        "asaAirway",
        "awake"
      ],
      "paragraphs": [
        "Zjišťuji předchozí potíže se zajištěním dýchacích cest, hodnotím otevření úst, anatomii obličeje a krku i spolupráci. Plán zahrnuje dostupné vybavení, zkušenost týmu, monitoring a přivolání pomoci. Samotné skóre Mallampati nenahradí celkové posouzení.",
        "Při očekávané obtížné intubaci zvažuji bdělý postup zejména při současně obtížné ventilaci, riziku aspirace, malé toleranci apnoe nebo obtížné invazivní záchraně. Flexibilní endoskop či videolaryngoskop volím podle situace a zkušenosti.",
        "Bdělá intubace vyžaduje oxygenaci a účinnou lokální anestezii; případná minimální sedace ji nenahrazuje. Celkovou anestezii zahájím až po vizuálním a kapnografickém ověření rourky. „Bdělá“ tedy neznamená intubovat bez přípravy a znecitlivění."
      ]
    },
    {
      "title": "3. Neočekávaná obtížná intubace: plány A–D",
      "refs": [
        "das2025"
      ],
      "paragraphs": [
        "A — intubace, pokud možno videolaryngoskopem. Maximum je 3 + 1 pokus zkušenějším kolegou; každý další pokus má přinést změnu. Oxygenaci udržuji průběžně. Polohu ověřím pohledem na průchod rourky hlasivkami a trvalou křivkou vydechovaného CO₂.",
        "B — po neúspěchu intubace použiji supraglotickou pomůcku druhé generace, nejvýše tři pokusy. Při úspěšné oxygenaci zastavím další pokusy a domluvím postup; není-li pokračování nezbytné, pacienta probudím.",
        "C — poslední optimalizovaný pokus ventilace maskou: dva zachránci, vzduchovody, vhodná poloha, dostatečná anestezie a relaxace. Ventilaci maskou ovšem používám už mezi předchozími pokusy.",
        "D — nelze intubovat ani oxygenovat (CICO): vyhlásím stav a provedu nouzový přístup z přední strany krku. Dospělý DAS popisuje skalpel–bužii–rourku. Limity pokusů nejsou povinnost je vyčerpat při zhoršování oxygenace."
      ]
    },
    {
      "title": "4. Podezření na poranění krční páteře",
      "refs": [
        "cspine",
        "airwayBasic"
      ],
      "paragraphs": [
        "Omezuji pohyby krku, zprůchodňuji předsunutím čelisti a koordinuji postup s asistentem. Pro intubaci preferuji videolaryngoskop, je-li dostupný; pomoci může bužie nebo stylet. Pevný límec omezuje otevření úst: při pokusu o intubaci se odstraňuje, zpravidla jeho přední díl, při současném omezení pohybů krku.",
        "Ochrana páteře nesmí znemožnit oxygenaci. Při zástavě, pokud předsunutí čelisti a pomůcka nestačí, je nutný i šetrný záklon se zvednutím brady. Neučím absolutní zákaz zprůchodnění dýchacích cest. Volbu bdělé versus urgentní intubace určuje celý klinický stav."
      ]
    },
    {
      "title": "5. Ověření úspěchu a další péče",
      "refs": [
        "das2025",
        "asaAirway"
      ],
      "paragraphs": [
        "Zvedání hrudníku ani poslech samy nestačí k potvrzení intubace. Po zajištění dále sleduji ventilaci, oxygenaci a oběh; řeším fixaci a plán bezpečného odstranění pomůcky. Supraglotická pomůcka umožňuje ventilaci, ale neposkytuje stejnou ochranu před aspirací jako správně umístěná rourka s manžetou.",
        "Obtížný průběh zdokumentuji včetně úspěšné techniky a informuji pacienta. Tato informace musí být dostupná pro příští anestezii."
      ]
    }
  ],
  "corrections": [
    "Obtížné dýchací cesty nezužovat na obtížnou intubaci.",
    "Skriptové ověření rourky jen pohledem a poslechem doplnit kapnografií.",
    "Při podezření na poranění páteře není cílem zachovat límec za cenu nemožnosti ventilovat."
  ],
  "checks": [
    {
      "question": "Rourku nezavedu, ale přes supraglotickou pomůcku dobře ventiluji. Jde o CICO?",
      "answer": "Ne. Mám čas zastavit pokusy a rozhodnout o dalším bezpečném postupu; samotné selhání intubace neznamená selhání oxygenace.",
      "refs": [
        "das2025"
      ]
    },
    {
      "question": "Proč může být bdělá intubace výhodná při očekávaných obtížích?",
      "answer": "Umožňuje zajistit a ověřit dýchací cesty před úvodem do celkové anestezie. Musí mít přípravu, oxygenaci, lokální anestezii a záložní plán.",
      "refs": [
        "awake"
      ]
    },
    {
      "question": "Je maxilofaciální poranění samo o sobě důvodem k nosnímu vzduchovodu?",
      "answer": "Ne. Zvažuji typ poranění; podezření na zlomeninu baze lební mluví proti nazální cestě.",
      "refs": [
        "airwayBasic"
      ]
    }
  ]
},
"B30":{
  "title": "Akutní obstrukce a zajištění dýchacích cest u dětí",
  "reviewed": "2026-10-28",
  "edition": "ERC/RCUK 2025 · pediatrické postupy RCH",
  "scope": "Rozpoznání horní obstrukce, croup, epiglotitida, cizí těleso a zásady dětského zajištění dýchacích cest. Dávky pro croup níže jsou konkrétní postup RCH, nikoli univerzální český protokol. Astma patří do B16, anafylaxe do B04 a KPR do A18. Tonutí ani techniku dětského invazivního přístupu tato odpověď nepokrývá.",
  "opening": "U dítěte s obstrukcí nejprve hodnotím závažnost a průchod vzduchu, potom příčinu. Nečekám na cyanózu. Rozlišuji náhlé dušení cizím tělesem od infekčního otoku a nevyvolávám zbytečný neklid; současně připravuji pomoc pro případ rychlého zhoršení.",
  "openingRefs": [
    "upperAirway"
  ],
  "sections": [
    {
      "title": "1. Rozpoznání závažnosti a první přístup",
      "refs": [
        "upperAirway",
        "paedAirway"
      ],
      "paragraphs": [
        "Malý průsvit dýchacích cest činí kojence zvlášť ohroženými otokem. Sleduji hlas a pláč, stridor, dechovou práci, proudění vzduchu a vědomí. Slábnoucí dechové úsilí, malý průchod vzduchu či spavost mohou znamenat vyčerpání. Hypoxemie je pozdní příznak.",
        "Nechám dítě u rodiče v poloze, kterou si samo volí. Při závažné obstrukci volám zkušeného anesteziologa a ORL; násilné položení, sedace nebo zbytečná vyšetření mohou vyvolat úplný uzávěr. Kyslík může zlepšit saturaci, neodstraní však mechanickou překážku."
      ]
    },
    {
      "title": "2. Subglotická laryngitida — croup",
      "refs": [
        "croup"
      ],
      "paragraphs": [
        "Typický je štěkavý kašel, chrapot a stridor, často v noci po virové infekci. Hodnotím stav dítěte, ne pouze hlasitost stridoru: jeho zeslábnutí při zhoršování může znamenat kriticky malý průtok vzduchu. Typický croup je klinická diagnóza bez rutinního RTG nebo odběrů.",
        "Léčba se řídí závažností. Pro těžký croup RCH doporučuje nebulizovaný adrenalin a dexamethason 0,6 mg/kg p.o./i.m./i.v., maximálně 12 mg. U život ohrožujícího průběhu uvádí nebulizaci 5 ml adrenalinu 1 mg/ml, tedy 5 mg inhalačně — nejde o i.m. ani i.v. dávku.",
        "Úleva po adrenalinu nenahrazuje další sledování ani přípravu zajištění dýchacích cest. Při hrozícím selhání zasahuje zkušený tým. Rutinní sedace a čekání na účinek vlhkého vzduchu nejsou řešením závažné obstrukce."
      ]
    },
    {
      "title": "3. Epiglotitida a další příčiny",
      "refs": [
        "upperAirway",
        "special"
      ],
      "paragraphs": [
        "Vysoká horečka, celkově těžký stav, slinění, bolestivé polykání a tlumený hlas při chybějícím štěkavém kašli vzbuzují podezření na epiglotitidu. Diferenciálně myslím také na bakteriální tracheitidu a hluboký krční absces. Neprovokuji dítě vyšetřováním hltanu; prioritu má týmové zajištění dýchacích cest, následně léčba infekce.",
        "Po alergenu s otokem, bronchospasmem nebo oběhovým postižením zvažuji anafylaxi. Její léčbou je časný i.m. adrenalin podle B04, nikoli pouhé převzetí nebulizačního režimu pro croup."
      ]
    },
    {
      "title": "4. Cizí těleso: účinný versus neúčinný kašel",
      "refs": [
        "pbls",
        "inhaled"
      ],
      "paragraphs": [
        "Při účinném kašli dítě povzbuzuji ke kašli a sleduji. Při neúčinném kašli a zachovaném vědomí přivolám pomoc: až pět úderů mezi lopatky, potom až pět stlačení hrudníku u kojence; u dítěte od jednoho roku místo nich až pět stlačení nadbřišku. Střídám do uvolnění nebo ztráty vědomí, při úspěchu ihned přestávám.",
        "Kojence při úderech podpírám na předloktí s hlavou níže než hrudník; nevěším jej za nohy. Hrudní stlačení provádím dvěma palci s obemknutím hrudníku. Při ztrátě vědomí zahájím dětskou KPR pěti vdechy. Z úst odstraňuji jen jasně viditelné těleso, ne naslepo prstem.",
        "Po epizodě dušení může přetrvávat těleso v bronchu s jednostranným pískáním, kašlem nebo pozdější pneumonií. Normální poslech ani RTG aspiraci nevylučují. Přetrvávající podezření vyžaduje odborné posouzení a zvážení bronchoskopie, i když už dítě akutně nedusí."
      ]
    },
    {
      "title": "5. Zajištění dýchacích cest u dítěte",
      "refs": [
        "paedAirway",
        "pbls"
      ],
      "paragraphs": [
        "Připravím vhodné velikosti masek, vzduchovodů, supraglotických pomůcek a rourek, odsávání a monitoraci. Před úvodem optimalizuji oxygenaci i oběh, určím role a záložní postup. Anatomicky snadná intubace může být při hypoxii či šoku fyziologicky velmi riziková.",
        "Při neúčinné ventilaci maskou upravím polohu a těsnost, použiji techniku dvou zachránců a vhodnou pomůcku. Při intubaci sleduji saturaci a frekvenci; při desaturaci nebo bradykardii pokus přeruším a obnovím oxygenaci maskou či supraglotickou pomůckou. Opakované pokusy zvyšují riziko poškození.",
        "RCUK doporučuje rourky s manžetou u dětí nad 30 dní korigovaného gestačního věku; tlak v manžetě kontroluji podle výrobce. Polohu potvrzuji klinicky a křivkou ETCO₂, poté trvale monitoruji. Dospělý postup nouzového přístupu přes krk nepřenáším automaticky na malé dítě."
      ]
    }
  ],
  "corrections": [
    "Kojence s cizím tělesem nevěšet za nohy; používat věkově správný postup a oporu hlavy.",
    "Sedace není rutinní léčba dítěte s akutní horní obstrukcí.",
    "Samotný věkový vzorec pro rourku neřeší typ rourky, otok ani ověření polohy."
  ],
  "checks": [
    {
      "question": "Stridor slábne, dítě je spavé a téměř se nehýbe hrudník. Zlepšení?",
      "answer": "Ne. Může jít o vyčerpání a kritickou obstrukci s malým prouděním vzduchu.",
      "refs": [
        "croup"
      ]
    },
    {
      "question": "Jaký je zásadní rozdíl první pomoci kojenci a staršímu dítěti při neúčinném kašli?",
      "answer": "Po úderech mezi lopatky má kojenec stlačení hrudníku; dítě od jednoho roku stlačení nadbřišku.",
      "refs": [
        "pbls"
      ]
    },
    {
      "question": "Dítě po dušení oříškem má normální RTG. Je aspirace vyloučena?",
      "answer": "Ne. Těleso může být rentgenově nekontrastní a vyšetření zpočátku normální. Rozhoduje i anamnéza a odborné posouzení.",
      "refs": [
        "inhaled"
      ]
    }
  ]
},
"A04":{
  "title": "Komplikace celkové anestezie: rozpoznání a první postup",
  "reviewed": "2026-10-28",
  "edition": "EMHG 2024 · ASA 2023 · AoA QRH · PONV 2025/2026",
  "scope": "Přehled hlavních komplikací a priorit úvodní léčby u dospělého. Obtížné dýchací cesty rozvádí A20, anafylaxi B04 a krvácení má rozvést B05. Nejde o úplný krizový protokol; konkrétní dávky vazopresorů, antagonizace a péče o vzácná orgánová poškození vyžadují samostatné postupy.",
  "opening": "Komplikace rozdělím na respirační, oběhové, lékové a ostatní; mohou vzniknout při úvodu, vedení i probouzení. Při náhlém zhoršení přivolám pomoc, ověřím přívod kyslíku, průchodnost dýchacích cest, ventilaci a oběh. Současně hledám příčinu na straně pacienta, výkonu, podaných léků i přístroje.",
  "openingRefs": [
    "hypoxia",
    "hypotension"
  ],
  "sections": [
    {
      "title": "1. Přehled a orientace podle klinického obrazu",
      "refs": [
        "gaRisks",
        "hypoxia",
        "hypotension"
      ],
      "paragraphs": [
        "Respiračně hrozí obtížné zajištění dýchacích cest, obstrukce, laryngospasmus, bronchospasmus, aspirace a útlum ventilace. Oběhově sleduji hypotenzi, hypertenzi, arytmie, ischemii a zástavu. Závažné lékové komplikace zahrnují anafylaxi, maligní hypertermii a přetrvávající nervosvalovou blokádu.",
        "Přidám PONV, třes, delirium, nechtěný vědomý prožitek, poranění zubů a očí či poziční poškození nervu. Výčet doplním časovou vazbou: nový lék, manipulace v dýchacích cestách, změna polohy, krvácení nebo probouzení mohou napovědět příčinu."
      ]
    },
    {
      "title": "2. Desaturace, laryngospasmus, bronchospasmus a aspirace",
      "refs": [
        "hypoxia",
        "laryngospasm",
        "bronchospasm"
      ],
      "paragraphs": [
        "Při akutní desaturaci podám 100% O₂, ověřím měřenou FiO₂, kapnogram, polohu a průchodnost pomůcky i okruh. Kontroluji exkurze hrudníku a vydechovaný objem. Při podezření na závadu přístroje mohu ventilovat samorozpínacím vakem přímo přes rourku. Asymetrie vede k úvaze o bronchální intubaci, pneumotoraxu či překážce.",
        "Laryngospasmus je uzávěr na úrovni hrtanu: zastavím stimulaci, odstraním dráždivý materiál, předsunu čelist a použiji CPAP se 100% O₂. Přetrvávání vyžaduje prohloubení anestezie, relaxaci a případně intubaci. Správně umístěná tracheální rourka hrtan obchází; zvýšený tlak přes ni tedy automaticky neznamená laryngospasmus.",
        "Bronchospasmus způsobuje prodloužený výdech, pískoty, zvýšené tlaky a změnu kapnogramu; při kritické obstrukci může být poslech tichý. Vyloučím mechanickou překážku, prohloubím anestezii, podám inhalační salbutamol a prodloužím čas výdechu. Současně myslím na anafylaxi.",
        "Při aspiraci zajistím oxygenaci a dýchací cesty, odsaji dostupný obsah a podle situace provedu intubaci a očistu tracheobronchiálního stromu. Následné zobrazování a úroveň pooperační péče závisejí na stavu; vyšetření nesmí předcházet stabilizaci."
      ]
    },
    {
      "title": "3. Hypotenze a anafylaxe",
      "refs": [
        "hypotension",
        "special",
        "anaphylaxis"
      ],
      "paragraphs": [
        "Hypotenzi nejprve ověřím a zhodnotím perfuzi. Zvažuji hloubku anestezie, vazodilataci, krevní ztrátu, omezený žilní návrat, arytmii či srdeční příčinu. Léčím mechanismus: upravím anestezii, řeším krvácení, podle potřeby doplním objem a titruji vazopresor. Samotné zvýšení tlaku nenahrazuje nalezení příčiny.",
        "Náhlá hypotenze s bronchospasmem po léku může být anafylaxe i bez vyrážky. Zastavím spouštěč a zahájím adrenalinovou a objemovou léčbu s podporou ABC. Monitorovaná perioperační i.v. titrace patří zkušenému týmu; nelze ji přenášet jako univerzální první pomoc. Kortikoid ani antihistaminikum nenahradí adrenalin."
      ]
    },
    {
      "title": "4. Maligní hypertermie",
      "refs": [
        "mh",
        "mhMechanism"
      ],
      "paragraphs": [
        "Jde o poruchu regulace kalcia s hypermetabolismem kosterního svalu u disponovaného člověka. Anesteziologické spouštěče jsou volatilní anestetika a sukcinylcholin. Varuje nevysvětlený vzestup ETCO₂, tachykardie, rigidita a acidóza; na vysokou teplotu nečekám. Dřívější bezproblémová anestezie dispozici nevylučuje.",
        "Zastavím spouštěče, přivolám pomoc, informuji operatéra a přejdu na beztriggerovou anestezii. Hyperventiluji 100% O₂; odstraním odpařovač, dostupné uhlíkové filtry vložím do okruhu. Neztrácím čas výměnou celého přístroje.",
        "EMHG doporučuje dantrolen 2–2,5 mg/kg i.v. podle skutečné hmotnosti, maximálně 300 mg na dávku. Opakuji po 10 minutách, případně co nejrychleji při delší přípravě, do ústupu hypermetabolismu. Kumulativních 10 mg/kg není absolutní strop; při potřebě vyšší dávky znovu posoudím diagnózu.",
        "Sleduji teplotu jádra, krevní plyny, kalium, CK, myoglobin, ledviny a koagulaci. Léčím hyperkalemii a acidózu, při hypertermii chladím; chlazení ukončím pod 38,5 °C. Následuje nejméně 24 hodin monitorace kvůli recidivě a vyšetření dispozice ve specializovaném centru."
      ]
    },
    {
      "title": "5. Reziduální nervosvalová blokáda",
      "refs": [
        "nmb"
      ],
      "paragraphs": [
        "Po relaxanciích nestačí stisk ruky, zvednutí hlavy ani pouhý dojem dobrého dýchání. Kvantitativně měřím TOF ratio na m. adductor pollicis a před extubací potvrzuji hodnotu alespoň 0,9. Klinická bdělost a zotavení svalové síly nejsou totéž.",
        "Antagonizaci volím podle látky a hloubky bloku. ASA doporučuje sugammadex pro hlubokou, střední i mělkou blokádu po rokuroniu nebo vekuroniu. Neostigmin je alternativou při minimálním bloku (TOF ratio 0,4 až pod 0,9). Ani podání antagonisty nenahrazuje kontrolní měření; při dostatečném spontánním zotavení farmakologická antagonizace není nutná."
      ]
    },
    {
      "title": "6. Probouzení a návazná péče",
      "refs": [
        "ponvSummary",
        "gaRisks",
        "awareness"
      ],
      "paragraphs": [
        "PONV řeším plánem prevence podle rizika a záchranným antiemetikem z jiné třídy než podaná profylaxe; podrobnější dodatek je připojen níže. Po výkonu se vracím k dýchání, oběhu, bolesti, teplotě a vědomí; nevysvětluji každý problém automaticky „dozníváním anestezie“.",
        "Při hlášeném vědomém prožitku pacienta vyslechnu, zdokumentuji událost a zajistím anesteziologické zhodnocení a návaznou podporu. Kontroluji také mechanická poškození a neurologické obtíže. Nový deficit vyžaduje vyšetření příčiny, ne jen uklidnění pacienta."
      ]
    }
  ],
  "corrections": [
    "Spouštěče maligní hypertermie nejsou obecně všechna relaxancia, antidepresiva a alkohol, jak naznačuje seznam ve skriptech.",
    "Reziduální blokádu nevylučuje pětisekundový stisk ruky; rozhodující je kvantitativní monitoring.",
    "Laryngospasmus a bronchospasmus nejsou zaměnitelné; léčím místo a příčinu obstrukce."
  ],
  "checks": [
    {
      "question": "Po sevofluranu rychle roste ETCO₂, je rigidita a tachykardie, teplota je zatím normální. Čekáš?",
      "answer": "Ne. Podezření na maligní hypertermii vyžaduje okamžité zahájení léčby.",
      "refs": [
        "mh"
      ]
    },
    {
      "question": "Pacient zvedne hlavu, ale kvantitativní TOF ratio je 0,7. Stačí to k extubaci?",
      "answer": "Ne. Nervosvalové zotavení není dostatečné; před extubací má být potvrzeno TOF ratio alespoň 0,9.",
      "refs": [
        "nmb"
      ]
    },
    {
      "question": "Ventilační tlak vzrostl a nejsou pískoty. Vylučuje to bronchospasmus?",
      "answer": "Ne. Při těžké obstrukci může být průtok minimální a hrudník tichý. Nejprve také vyloučím rourku a okruh jako mechanickou příčinu.",
      "refs": [
        "bronchospasm"
      ]
    }
  ]
},
"A07":{
  "title": "Farmaka a komplikace regionální anestezie",
  "reviewed": "2026-10-28",
  "edition": "ASRA LAST 2020 · OAA 2024 · ASRA 2025 · multisociety PDPH",
  "scope": "Přehled lokálních anestetik a adjuvancií, LAST, vysokého neuraxiálního bloku a vybraných pozdních komplikací. Lipidová léčba je podle ASRA 2020; porodnické zvláštnosti jsou označené. Neobsahuje dávkovací tabulky pro všechny blokády ani přesné intervaly každého antitrombotika.",
  "opening": "Regionální anestezie blokuje vedení v nervech, ale může mít i systémové účinky. U komplikace rozliším toxicitu léčiva, příliš rozsáhlý blok, mechanické poškození, krvácení a infekci. Po náhlém zhoršení zastavím aplikaci a současně s hledáním příčiny podporuji dýchání a oběh.",
  "openingRefs": [
    "bupivacaine",
    "last",
    "highBlock",
    "neuroRegional"
  ],
  "sections": [
    {
      "title": "1. Lokální anestetika a adjuvancia",
      "refs": [
        "bupivacaine",
        "lidocaine",
        "ropivacaine",
        "chloroprocaine"
      ],
      "paragraphs": [
        "Lokální anestetika reverzibilně blokují sodíkové kanály a vedení akčního potenciálu. Mezi amidy patří lidokain, bupivakain a ropivakain; esterovým příkladem je chloroprokain, rychle hydrolyzovaný v plazmě. Bupivakain má dlouhý účinek a významnou kardiotoxicitu při vysoké systémové koncentraci.",
        "Volím přípravek, koncentraci, objem a celkovou dávku podle místa a požadovaného rozsahu bloku. Mililitry nejsou dávka v miligramech: například 20 ml roztoku 2,5 mg/ml obsahuje 50 mg. Započítávám i další podaná lokální anestetika, protože systémová toxicita je aditivní.",
        "Opioid může posílit epidurální analgezii, ale přidává vlastní nežádoucí účinky a nároky na monitoraci. U dalších adjuvancií vždy ověřím konkrétní přípravek a cestu podání. Chemická kompatibilita směsi sama neprokazuje klinickou bezpečnost; intravenózní přípravek není automaticky vhodný intratekálně."
      ]
    },
    {
      "title": "2. LAST: systémová toxicita lokálních anestetik",
      "refs": [
        "lastAdvisory",
        "bupivacaine"
      ],
      "paragraphs": [
        "Vzniká po nechtěném intravaskulárním podání, nadměrné dávce nebo rychlé absorpci. Mohou předcházet periorální parestezie, kovová chuť, tinnitus či neklid, následovat křeče a útlum CNS. Oběhově hrozí poruchy vedení, arytmie, hypotenze a zástava.",
        "Pořadí projevů není spolehlivé: kardiotoxicita může vzniknout bez rozpoznaného neurologického varování a při celkové anestezii se varovné příznaky skryjí. Toxicita může být také opožděná. Prevence kombinuje nejnižší účinnou dávku, frakcionované podání s kontrolou intravaskulární polohy, ultrazvuk tam, kde je vhodný, a monitoraci; žádný jednotlivý krok riziko nevynuluje."
      ]
    },
    {
      "title": "3. LAST: první léčba a 20% lipidová emulze",
      "refs": [
        "last"
      ],
      "paragraphs": [
        "Zastavím aplikaci, přivolám pomoc a zajistím oxygenaci a ventilaci. Křeče léčím přednostně benzodiazepinem; časně zvažuji 20% lipidovou emulzi i.v. podle checklistu.",
        "Pod 70 kg: bolus přibližně 1,5 ml/kg během 2–3 minut, potom 0,25 ml/kg/min. Nad 70 kg: přibližně 100 ml během 2–3 minut a následně přibližně 250 ml během 15–20 minut. Při nestabilitě zopakuji bolus a zdvojnásobím rychlost infuze. Pokračuji déle než 15 minut po stabilizaci; celkové maximum je 12 ml/kg.",
        "Při zástavě provádím KPR, ale resuscitační léky upravuji pro LAST: adrenalin začínám dávkou menší než 1 mikrogram/kg. Vyhýbám se dalším lokálním anestetikům, betablokátorům, blokátorům kalciových kanálů a vazopresinu. Při refrakterním kolapsu včas mobilizuji mimotělní podporu.",
        "Po stabilizaci ASRA uvádí observaci nejméně 2 hodiny po křečích a 4–6 hodin po oběhové nestabilitě; po zástavě podle stavu. Obnovení oběhu není konec léčby."
      ]
    },
    {
      "title": "4. Vysoká a totální neuraxiální blokáda",
      "refs": [
        "highBlock"
      ],
      "paragraphs": [
        "Po spinálním nebo epidurálním podání může blok vystoupat příliš vysoko. Sympatická blokáda vede k hypotenzi a bradykardii; varují dechové potíže, slabost horních končetin, porucha vědomí a apnoe. Nezaměňuji automaticky každý kolaps po bloku za LAST.",
        "Zastavím další podávání, volám pomoc, podporuji oxygenaci a ventilaci, při apnoi ventiluji a zajistím dýchací cesty. Hypotenzi léčím titrovaným vazopresorem a tekutinou podle stavu, bradykardii odpovídající léčbou. Pacient může vnímat situaci i při neschopnosti pohybu; komunikuji a při zajištění dýchacích cest zajišťuji potřebnou anestezii.",
        "Porodnický checklist OAA navíc zdůrazňuje odstranění aortokavální komprese manuálním odsunem dělohy. Podporu dýchání a oběhu udržuji do ústupu blokády; nečekám pasivně, až anestetikum odezní."
      ]
    },
    {
      "title": "5. Krvácení, infekce a neurologický deficit",
      "refs": [
        "neuroRegional",
        "antithrombotic"
      ],
      "paragraphs": [
        "Nová nebo progredující slabost, porucha sfinkterů a bolest zad či kořenová bolest po neuraxiálním výkonu vyžadují urgentní posouzení možné komprese hematomem nebo abscesem. Nečekám na úplnou klasickou kombinaci příznaků. Preferuji MRI, ale jeho nedostupnost nesmí zdržet dostupné urgentní zobrazení a konzultaci neurochirurgie.",
        "Prevenci krvácení plánuji i pro odstranění katétru. Intervaly antitrombotik závisejí na léčivu, dávce, renální funkci a typu bloku. ASRA aplikuje neuraxiální pravidla také na hluboké plexové a hluboké periferní blokády; pro povrchové výkony rozhoduje mimo jiné stlačitelnost a důsledky případného krvácení.",
        "Po výkonu dokumentuji vývoj senzitivního a motorického nálezu. Ne každý deficit je způsoben jehlou: zvažuji také operační, polohové a předchozí neurologické příčiny. Progrese či návrat slabosti po předchozím zotavení vyžadují rychlou eskalaci."
      ]
    },
    {
      "title": "6. Postpunkční bolest hlavy a další obtíže",
      "refs": [
        "pdpH",
        "bupivacaine"
      ],
      "paragraphs": [
        "Postpunkční bolest hlavy souvisí s únikem likvoru po durální punkci, obvykle vzniká do pěti dnů a zhoršuje se ve vzpřímené poloze. Není však každá bolest po spinální anestezii postpunkční. Ložiskový deficit, porucha vědomí, křeče nebo atypický průběh vedou k vyšetření jiné příčiny.",
        "Základem je klinické posouzení, analgezie a podle situace kofein. Pokud obtíže omezují běžné fungování a konzervativní opatření nestačí, zvažuji epidurální krevní zátku po posouzení kontraindikací. Rutinní dlouhé ležení není záruka prevence.",
        "K méně dramatickým, ale důležitým problémům patří nedostatečný blok, retence moči, nauzea a hypotenze. Selhání analgezie řeším přehodnocením bloku a záložního plánu; další dávky nesmějí nekontrolovaně zvyšovat riziko toxicity."
      ]
    }
  ],
  "corrections": [
    "Neurologické příznaky nemusejí vždy předcházet kardiotoxicitě; nečekat na typickou posloupnost.",
    "Vysoký neuraxiální blok a LAST mají odlišný mechanismus i léčbu.",
    "„LipidRescue“ je konkrétní 20% lipidová emulze s dávkováním; nejde jen o heslo vedle běžné resuscitace."
  ],
  "checks": [
    {
      "question": "Po bloku náhle vznikla arytmie bez předchozích křečí. Vylučuje to LAST?",
      "answer": "Ne. Oběhové projevy mohou vzniknout samostatně; neurologické varování může chybět nebo být skryto.",
      "refs": [
        "lastAdvisory"
      ]
    },
    {
      "question": "Po spinální anestezii stoupá blok, pacient slábne, je bradykardický a přestává dýchat. Co má prioritu?",
      "answer": "Okamžitá podpora ventilace a oběhu a přivolání pomoci. Na spontánní odeznění vysokého bloku nelze čekat bez podpory.",
      "refs": [
        "highBlock"
      ]
    },
    {
      "question": "Po ústupu epidurálního bloku se vrací slabost nohou a porucha močení. Stačí další kontrola ráno?",
      "answer": "Ne. Nový či progresivní deficit vyžaduje urgentní vyšetření možné komprese, zobrazení a odbornou konzultaci.",
      "refs": [
        "neuroRegional"
      ]
    }
  ]
},
"B05":{
  "title": "Hemoragický šok a život ohrožující krvácení",
  "reviewed": "2026-10-29",
  "edition": "Evropské doporučení 2023 · RCUK 2025 · BSG/ACPGBI 2026",
  "scope": "Zkouškový přehled rozpoznání a prvních kroků, s konkrétními dávkami pro dospělého s úrazovým krvácením. Porodnické krvácení, děti a podrobná reverze jednotlivých antikoagulancií vyžadují vlastní postup.",
  "opening": "Při závažném krvácení současně hledám a zastavuji zdroj, podporuji oběh a aktivuji tým i transfuzní zajištění. Čekání na úplné laboratorní výsledky nesmí oddálit léčbu.",
  "openingRefs": [
    "majorHaemorrhage",
    "uhsTrauma"
  ],
  "sections": [
    {
      "title": "1. Rozpoznání a vyšetření",
      "refs": [
        "traumaBleeding",
        "uhsTrauma"
      ],
      "paragraphs": [
        "Krevní ztráta snižuje cirkulující objem a dodávku kyslíku tkáním. Varují tachykardie, porucha periferní perfuze, změna vědomí a klesající tlak; hodnotím jejich vývoj a reakci na léčbu. Hledám i skrytou ztrátu do hrudníku, břicha, retroperitonea či poraněných končetin.",
        "Počáteční normální Hb nevylučuje akutní krvácení. Opakuji krevní obraz, laktát, krevní plyny, koagulační vyšetření včetně fibrinogenu a trombocytů; podle dostupnosti využiji viskoelastické testy."
      ]
    },
    {
      "title": "2. Zástava krvácení začíná ihned",
      "refs": [
        "traumaFirstAid",
        "traumaNICE",
        "uhsTrauma"
      ],
      "paragraphs": [
        "Na zevní ránu tlačím přímo; podle místa a výcviku přidám hemostatické krytí. Při nezvládnutém život ohrožujícím krvácení z končetiny použiji turniket, dotáhnu do zástavy krvácení, zaznamenám čas a v první pomoci jej nepovoluji.",
        "Při podezření na krvácející zlomeninu pánve po vysokoenergetickém tupém úrazu použiji pánevní pás. Vnitřní zdroj vyžaduje včasnou chirurgickou či intervenčně radiologickou kontrolu; podle příčiny také endoskopii."
      ]
    },
    {
      "title": "3. Oběh a transfuzní tým",
      "refs": [
        "majorHaemorrhage",
        "traumaNICE",
        "traumaBleeding"
      ],
      "paragraphs": [
        "Aktivuji místní protokol masivního krvácení a domluvím průběžnou komunikaci s transfuzním oddělením. Zajistím periferní i.v. vstupy, při neúspěchu i.o. přístup. Krevní přípravky podávám zpočátku podle místního protokolu, poté cíleně podle výsledků.",
        "U dospělého s úrazovým krvácením bez poranění mozku či míchy je do hemostázy cílem systolický tlak 80–90 mmHg při restriktivní náhradě objemu. U těžkého TBI evropské doporučení uvádí MAP alespoň 80 mmHg. Tyto cíle nejsou univerzální pro všechny krvácející."
      ]
    },
    {
      "title": "4. Hemostatická léčba u dospělého po úrazu",
      "refs": [
        "traumaBleeding"
      ],
      "paragraphs": [
        "TXA podám co nejdříve, nejpozději do 3 hodin od úrazu: 1 g i.v. během 10 minut, potom 1 g během 8 hodin. Na viskoelastický výsledek nečekám.",
        "Při závažném krvácení a fibrinogenu ≤ 1,5 g/l nebo funkčním deficitu podám fibrinogen či kryoprecipitát; úvodní ekvivalent 3–4 g, další dávky podle kontroly. Udržuji normotermii a normální ionizované kalcium."
      ]
    },
    {
      "title": "5. Opakované hodnocení a hranice přenosu doporučení",
      "refs": [
        "uhsTrauma",
        "giTXA"
      ],
      "paragraphs": [
        "Po každém zásahu znovu posuzuji oběh, krvácení a laboratorní trend. Zaznamenávám podané přípravky a odpověď. Zjišťuji antikoagulační léčbu a řeším její reverzi podle konkrétního léčiva.",
        "Traumatický režim TXA nepřenáším automaticky na jiné příčiny. BSG/ACPGBI v roce 2026 nedoporučují rutinní TXA u akutního krvácení do horního ani dolního GIT: nebyl prokázán přínos pro mortalitu a existují bezpečnostní rizika."
      ]
    }
  ],
  "corrections": [
    "Položka „Základní opatření: ????“ ve skriptech není použitelný léčebný postup. Odpověď musí zahrnout zástavu zdroje i organizaci transfuzní léčby.",
    "Objemové a transfuzní definice nejsou podmínkou zahájení léčby. Nečekám na dosažení určitého počtu jednotek ani na pokles Hb.",
    "Permisivní hypotenze není obecný cíl při poranění CNS."
  ],
  "checks": [
    {
      "question": "Proč mě normální vstupní Hb neuklidní?",
      "answer": "Akutní krevní ztrátu může zpočátku maskovat; rozhoduje klinický stav a opakované měření.",
      "refs": [
        "traumaBleeding"
      ]
    },
    {
      "question": "Která část léčby nemůže být nahrazena transfuzí?",
      "answer": "Zástava zdroje krvácení. U pokračující vnitřní ztráty je nutná včasná intervence.",
      "refs": [
        "uhsTrauma"
      ]
    },
    {
      "question": "Dám automaticky traumatickou dávku TXA při hematemezi?",
      "answer": "Ne. Pro akutní krvácení do GIT není rutinní TXA doporučena.",
      "refs": [
        "giTXA"
      ]
    }
  ]
},"B06":{
  "title": "Polytrauma: první pomoc a zajištění v nemocnici",
  "reviewed": "2026-10-29",
  "edition": "ACS ATLS 11 (2025) · NICE NG39 · Berlínská definice",
  "scope": "První vyšetření a prioritizace dospělého. Praktické invazivní výkony, dětské trauma, popáleniny a traumatická zástava oběhu nejsou touto odpovědí pokryty.",
  "opening": "U polytraumatu rozhodují bezprostřední hrozby: masivní zevní krvácení, neprůchodné dýchací cesty, selhávající ventilace a oběh. Postupuji strukturovaně, nález ihned léčím a vyšetření opakuji.",
  "openingRefs": [
    "atls11"
  ],
  "sections": [
    {
      "title": "1. Co je polytrauma",
      "refs": [
        "berlin"
      ],
      "paragraphs": [
        "Polytrauma označuje závažné poranění více tělesných oblastí. Berlínská definice požaduje AIS ≥ 3 alespoň ve dvou oblastech a nejméně jedno další kritérium: systolický tlak ≤ 90 mmHg, GCS ≤ 8, base excess ≤ −6 mmol/l, koagulopatii (INR ≥ 1,4 nebo aPTT ≥ 40 s), případně věk ≥ 70 let.",
        "Jde o přesnější klasifikaci; samotný vysoký ISS není totožný s touto definicí. Skórování nenahrazuje rozhodnutí o okamžité léčbě."
      ]
    },
    {
      "title": "2. Na místě: bezpečí a xABCDE",
      "refs": [
        "traumaFirstAid",
        "atls11"
      ],
      "paragraphs": [
        "Nejprve bezpečí zachránce a přivolání ZZS. V ČR volám 155, případně 112. Zabráním dalšímu prochládání zakrytím a izolací od země; neprodlužuji pobyt v nebezpečném prostředí.",
        "ATLS 11 přidává před ABCDE „x“: exsanguinující zevní krvácení. Po jeho bezprostřední kontrole pokračuji A — dýchací cesty, B — dýchání, C — oběh, D — neurologický stav, E — celkové odhalení a prostředí. V týmu mohou zásahy běžet současně."
      ]
    },
    {
      "title": "3. A a B: dýchací cesty a hrudník",
      "refs": [
        "cspine",
        "uhsTrauma",
        "traumaNICE"
      ],
      "paragraphs": [
        "Ověřím průchodnost, odstraním krev či sekrety odsáváním a podpořím oxygenaci a ventilaci. Při podezření na poranění krční páteře omezím pohyb; zajištění oxygenace má prioritu. Pokročilé zajištění plánuje zkušený tým, viz A20.",
        "Hodnotím dechovou frekvenci, pohyb hrudníku, poslech a saturaci. Při klinicky suspektním tenzním pneumotoraxu s nestabilitou nebo těžkým dechovým postižením nečeká vyškolený tým na snímek: provede dekompresi a následnou drenáž."
      ]
    },
    {
      "title": "4. C, D a E: systematicky, opakovaně",
      "refs": [
        "uhsTrauma",
        "traumaFirstAid"
      ],
      "paragraphs": [
        "V C hodnotím pulz, tlak a perfuzi, hledám krvácení a zahajuji postup B05. V D zaznamenám GCS, zornice, lateralizaci a glykemii. V E pacienta prohlédnu včetně skrytých oblastí, s ochranou páteře a tepelného komfortu.",
        "Po primárním ošetření následuje podrobné sekundární vyšetření a další kontrola k odhalení přehlédnutých poranění. Předání musí umožnit návaznost péče, včetně změn stavu a provedených zásahů."
      ]
    },
    {
      "title": "5. Zobrazení a definitivní ošetření",
      "refs": [
        "traumaNICE"
      ],
      "paragraphs": [
        "U nestabilního pacienta nereagujícího na resuscitaci omezím zobrazování na minimum potřebné k bezprostřední intervenci; zvažuji damage-control operaci. Negativní FAST nevylučuje nitrobřišní ani retroperitoneální krvácení.",
        "U stabilního nebo na resuscitaci reagujícího dospělého je namístě časné CT; při tupém závažném traumatu s podezřením na vícečetná poranění celotělové CT. Děti se rutinně celotělovým CT nevyšetřují."
      ]
    }
  ],
  "corrections": [
    "Katastrofické zevní krvácení neodkládám až za celé A a B; současné pořadí ATLS 11 je xABCDE.",
    "ISS samo o sobě nedefinuje polytrauma podle Berlínské definice.",
    "Pevná procenta mechanismů úrazu a historický trimodální model úmrtí nepředkládám jako univerzální současnou epidemiologii."
  ],
  "checks": [
    {
      "question": "Co znamená x v xABCDE?",
      "answer": "Bezprostřední kontrolu exsanguinujícího zevního krvácení.",
      "refs": [
        "atls11"
      ]
    },
    {
      "question": "Vyloučí negativní FAST významné krvácení?",
      "answer": "Ne; nevyloučí nitrobřišní ani retroperitoneální ztrátu.",
      "refs": [
        "traumaNICE"
      ]
    },
    {
      "question": "Musí každý nestabilní polytraumatizovaný nejdřív na celotělové CT?",
      "answer": "Ne. Při neodpovídající resuscitaci nesmí zobrazení odkládat nutnou intervenci.",
      "refs": [
        "traumaNICE"
      ]
    }
  ]
},
"B11":{
  "title": "Sepse a septický šok",
  "reviewed": "2026-10-29",
  "edition": "Sepsis-3 · Surviving Sepsis Campaign 2026",
  "scope": "Dospělý: definice, rozpoznání a časná léčba. Specifická antimikrobiální schémata řeší B12; podrobné režimy ventilace, náhrady funkce ledvin a pediatrická sepse vyžadují samostatné postupy.",
  "opening": "Sepse je život ohrožující orgánová dysfunkce vznikající dysregulovanou odpovědí hostitele na infekci. U zkoušky spojím průkaz či podezření na infekci s postižením orgánů, potom vysvětlím léčbu infekce a oběhu.",
  "openingRefs": [
    "sepsis3"
  ],
  "sections": [
    {
      "title": "1. Definice a mechanismus",
      "refs": [
        "sepsis3"
      ],
      "paragraphs": [
        "Orgánovou dysfunkci operacionalizuje akutní vzestup SOFA alespoň o 2 body v souvislosti s infekcí. Hodnotí se oxygenace, trombocyty, bilirubin, oběh, vědomí a renální funkce. Sepse není synonymum bakteriemie ani samotné horečky.",
        "Septický šok je podskupinou sepse: navzdory adekvátní náhradě objemu přetrvává potřeba vazopresorů k udržení MAP ≥ 65 mmHg a laktát > 2 mmol/l. Jde o definiční kritéria, nikoli důvod odkládat léčbu rozvíjejícího se šoku.",
        "Dysregulovaná odpověď postihuje endotel, mikrocirkulaci i buněčný metabolismus; přispívají vazodilatace, zvýšená propustnost a porucha srdeční funkce. Nejde o povinnou posloupnost „sepse → těžká sepse → šok“."
      ]
    },
    {
      "title": "2. Rozpoznání a odběry",
      "refs": [
        "sepsis3",
        "cultures",
        "ssc2026"
      ],
      "paragraphs": [
        "Hledám zdroj infekce a novou poruchu vědomí, oxygenace, diurézy či oběhu. qSOFA není samostatný vylučovací screening. Odebírám laktát.",
        "Hemokultury odeberu ideálně před ATB bez významného zdržení. U dospělého alespoň dvě sady, obvykle aerobní a anaerobní lahvička v každé. Správný objem, dezinfekce a označení vzorku mají zásadní význam; počet lahviček a objem se řídí systémem laboratoře."
      ]
    },
    {
      "title": "3. Infekce: čas a zdroj",
      "refs": [
        "ssc2026"
      ],
      "paragraphs": [
        "Šok nebo pravděpodobná/jistá sepse: ATB ihned, ideálně do hodiny. Možná sepse bez šoku: rychlé došetření, při trvajícím podezření ATB do 3 hodin.",
        "Zdroj vyžadující intervenci řeším časně, ideálně do 6 hodin od diagnózy; například drenáží či odstraněním infikovaného materiálu. Výběr a dávkování ATB rozvíjí B12."
      ]
    },
    {
      "title": "4. Tekutiny a vazopresory",
      "refs": [
        "ssc2026"
      ],
      "paragraphs": [
        "Při hypoperfuzi/šoku SSC podmíněně navrhuje ≥ 30 ml/kg krystaloidu za první 3 hodiny, individualizovaně s opakovanou kontrolou odpovědi a přetížení. Preferují se balancované krystaloidy; škroby ne. Další objem řídím dynamickou odpovědí, nikoli samotným laktátem.",
        "První vazopresor je noradrenalin; při nestabilním šoku může běžet souběžně s tekutinou. Úvodní MAP přibližně 65 mmHg; u ≥ 65 let SSC podmíněně navrhuje 60–65. Při eskalaci noradrenalinu přidávám vazopresin, při nedostatečném účinku adrenalin."
      ]
    },
    {
      "title": "5. Další péče a kortikosteroidy",
      "refs": [
        "steroidsShock",
        "sepsis3"
      ],
      "paragraphs": [
        "Průběžně sleduji orgánové funkce a odpověď na zásahy. Respirační, renální nebo koagulační postižení může vyžadovat další intenzivní péči; samotné dosažení cílového tlaku neznamená ústup všech dysfunkcí.",
        "U dospělého se septickým šokem je podání kortikosteroidů podmíněně doporučeno. Běžný režim je hydrokortizon 200 mg i.v. za den kontinuálně nebo rozděleně po 6 hodinách. Nejde o automatickou léčbu každé infekce; vysoké krátké pulzy nad 400 mg/den hydrokortizonového ekvivalentu se nedoporučují."
      ]
    }
  ],
  "corrections": [
    "Infekce + dvě kritéria SIRS už nejsou definicí sepse. Termín „těžká sepse“ je v Sepsis-3 nadbytečný.",
    "Pozitivní hemokultura není podmínkou diagnózy; negativní nález ji sám nevyloučí.",
    "Masivní objem bez ohledu na přetížení ani dopamin jako rovnocenná první volba neodpovídají současnému postupu."
  ],
  "checks": [
    {
      "question": "Má každý pacient s horečkou a tachykardií sepsi?",
      "answer": "Ne. Definice vyžaduje život ohrožující orgánovou dysfunkci v souvislosti s infekcí.",
      "refs": [
        "sepsis3"
      ]
    },
    {
      "question": "Stačí samotný laktát 3 mmol/l k definici septického šoku?",
      "answer": "Ne. Sepsis-3 současně požaduje sepsi a přetrvávající potřebu vazopresorů po adekvátní náhradě objemu.",
      "refs": [
        "sepsis3"
      ]
    },
    {
      "question": "Proč jedna odebraná lahvička není totéž co dvě sady hemokultur?",
      "answer": "Sada zpravidla obsahuje více lahviček. Dostatečný celkový objem zvyšuje výtěžnost a více sad pomáhá posoudit kontaminaci.",
      "refs": [
        "cultures"
      ]
    }
  ]
},"B12":{
  "title": "Adekvátní antibiotická léčba těžkých infekcí",
  "reviewed": "2026-10-29",
  "edition": "IDSA AMR 2026 · PK/PD a TDM · SSC 2026",
  "scope": "Principy u dospělých, nikoli univerzální recept pro všechny infekce. Konkrétní režim závisí na ložisku, citlivosti, místním antibiogramu a pacientovi; americká IDSA schémata nelze automaticky převést na českou nemocnici.",
  "opening": "Adekvátní ATB léčba znamená účinné léčivo proti pravděpodobnému původci, dostatečnou expozici v místě infekce a včasné přehodnocení. Širší spektrum samo nezaručuje správnou léčbu.",
  "openingRefs": [
    "amr2026",
    "atbPK"
  ],
  "sections": [
    {
      "title": "1. Než vyberu antibiotikum",
      "refs": [
        "amr2026",
        "cultures"
      ],
      "paragraphs": [
        "Určím pravděpodobné ložisko, závažnost, komunitní či nemocniční původ, alergii, imunosupresi a funkci ledvin. Zohledním dřívější izoláty a citlivost (zejména posledních 12 měsíců), ATB v posledních 3 měsících a místní rezistenci.",
        "Kvalitní hemokultury před léčbou zvyšují šanci na cílenou terapii. Odběr vyžaduje asepsi a správný objem; pozitivní výsledek interpretuji v klinickém kontextu, protože kolonizace a kontaminace nejsou totéž co infekce."
      ]
    },
    {
      "title": "2. Empirická léčba a přechod k cílené",
      "refs": [
        "amr2026",
        "ssc2026"
      ],
      "paragraphs": [
        "Empirická léčba předchází znalosti původce; cílenou upravím podle identifikace a citlivosti. Spektrum odvozuji od ložiska a rizik, ne od samotného slova sepse. Při známé rezistenci nestačí zvolit „silnější generaci“ bez kontroly účinnosti.",
        "Časové rozlišení podle šoku a pravděpodobnosti infekce je v B11. Po výsledcích léčbu zužuji a ruším zbytečné složky; nečekám mechanicky 72 hodin, je-li rozhodující informace dostupná dříve."
      ]
    },
    {
      "title": "3. PK/PD: správná expozice",
      "refs": [
        "atbPK"
      ],
      "paragraphs": [
        "MIC je minimální inhibiční koncentrace stanovená in vitro. U beta-laktamů rozhoduje zejména doba, kdy volná koncentrace převyšuje MIC (fT > MIC); u aminoglykosidů je důležitá vysoká vrcholová koncentrace vůči MIC.",
        "Při těžké infekci se dávkování přizpůsobuje měnícímu se distribučnímu objemu a clearance. Renální selhání může vést ke kumulaci, zvýšená renální clearance naopak k poddávkování; náhrada funkce ledvin přidává další proměnnou.",
        "Nasycovací dávka má rychle vytvořit účinnou koncentraci; udržovací dávky zajišťují další expozici. Prodloužená infuze beta-laktamu navazuje na nasycovací dávku, nenahrazuje ji. Dávku a interval průběžně přehodnocuji."
      ]
    },
    {
      "title": "4. TDM a toxicita",
      "refs": [
        "vancoAUC",
        "atbPK"
      ],
      "paragraphs": [
        "Terapeutické monitorování koncentrací pomáhá rozlišit nedostatečnou expozici od rizika toxicity. Výsledek potřebuji spolu s přesným časem dávky a odběru, renální funkcí a cílem pro konkrétní léčivo.",
        "U závažných MRSA infekcí se vankomycin řídí AUC24: obvykle 400–600 mg·h/l při předpokládané MIC 1 mg/l. Samotná údolní koncentrace 15–20 mg/l není preferovanou náhradou AUC kvůli nefrotoxicitě. Tento cíl nepřenáším bez rozmyslu na každou indikaci vankomycinu."
      ]
    },
    {
      "title": "5. Délka léčby a převod na p.o.",
      "refs": [
        "amr2026",
        "candidaDuration"
      ],
      "paragraphs": [
        "Délku určují ložisko, kontrola zdroje, původce a klinická odpověď. Rezistence sama neznamená delší kúru. Pro převod na p.o. potřebuji stabilního pacienta, účinné perorální léčivo dosahující ložiska a spolehlivé vstřebávání.",
        "Příklad proti paušálním „šesti týdnům antimykotik“: nekomplikovaná kandidémie u non-neutropenického dospělého se léčí 14 dní od doloženého vymizení kvasinek z krve a odeznění příznaků. Metastatická ložiska vyžadují jiný režim a delší léčbu."
      ]
    }
  ],
  "corrections": [
    "Neexistuje jediná univerzální kombinace pro všechny sepse. Volba vychází z ložiska, rizik a lokální citlivosti.",
    "Vankomycin nelze vysvětlit jen časem nad MIC; pro závažné MRSA infekce je klíčová AUC.",
    "„Bakteriální sepse několik týdnů, mykotická nejméně šest“ je nepřiměřené zobecnění."
  ],
  "checks": [
    {
      "question": "Proč normální kreatinin nemusí znamenat dostatečnou dávku beta-laktamu?",
      "answer": "Kriticky nemocný může mít zvýšenou renální clearance a rychlejší eliminaci; expozici ovlivňuje také distribuční objem.",
      "refs": [
        "atbPK"
      ]
    },
    {
      "question": "Co potřebuji kromě informace, že je ATB citlivé, pro převod na tablety?",
      "answer": "Hemodynamickou stabilitu, dostupný účinný perorální lék s průnikem do ložiska a spolehlivé vstřebávání.",
      "refs": [
        "amr2026"
      ]
    },
    {
      "question": "Je cílem vankomycinu u závažné MRSA infekce vždy trough 15–20 mg/l?",
      "answer": "Ne. Preferováno je řízení podle AUC24 v uvedeném rozmezí; cílení jen na vysoký trough zvyšuje riziko nefrotoxicity.",
      "refs": [
        "vancoAUC"
      ]
    }
  ]
},
"B17":{
  "title": "ARDS: definice, mechanismus a léčba",
  "reviewed": "2026-10-29",
  "edition": "Globální definice 2023/2024 · ESICM 2023 · ATS 2024 · SCCM 2026",
  "scope": "Dospělí: diagnostická kritéria a hlavní principy podpory. Rozlišuji globální definici od starších studií podle Berlína; detailní ECMO indikace a pediatrické ARDS nejsou součástí této odpovědi.",
  "opening": "ARDS je akutní difuzní zánětlivé poškození plic s poruchou alveolokapilární bariéry, edémem a hypoxemií. Léčím vyvolávající příčinu a volím podporu, která sama dále nepoškozuje plíce.",
  "openingRefs": [
    "ardsGlobal",
    "ardsATS"
  ],
  "sections": [
    {
      "title": "1. Příčiny a patofyziologie",
      "refs": [
        "ardsGlobal"
      ],
      "paragraphs": [
        "Spouštěčem bývá pneumonie, sepse, aspirace, kontuze nebo jiný akutní inzult. Zvýšená propustnost a poškození epitelu vedou ke ztrátě aerace, zkratu a poklesu poddajnosti. Postižení je nerovnoměrné: stejný dechový objem může přetěžovat menší zbylou ventilovanou část plic."
      ]
    },
    {
      "title": "2. Diagnostická kritéria",
      "refs": [
        "ardsGlobal"
      ],
      "paragraphs": [
        "Začátek či zhoršení do týdne od inzultu nebo nových dechových příznaků. Oboustranné změny na RTG/CT, případně ultrazvuku zkušeným vyšetřujícím; nález nesmějí plně vysvětlovat výpotky, kolaps či masy. Edém a hypoxemie nejsou primárně kardiogenní nebo z přetížení tekutinami.",
        "U intubovaných při PEEP ≥ 5 cm H₂O: lehké ARDS 200 < PaO₂/FiO₂ ≤ 300, střední 100 < poměr ≤ 200, těžké ≤ 100 mmHg. FiO₂ dosazuji jako zlomek; 80 mmHg / 0,5 = 160 mmHg.",
        "Globální definice zahrnuje také neintubované na HFNO ≥ 30 l/min či NIV/CPAP ≥ 5 cm H₂O při P/F ≤ 300 nebo S/F ≤ 315 (SpO₂ ≤ 97 %). Berlínskou definici nadále potkám ve studiích; nejde o shodné populace."
      ]
    },
    {
      "title": "3. Protektivní ventilace",
      "refs": [
        "ardsATS",
        "ardsnet"
      ],
      "paragraphs": [
        "Při invazivní ventilaci omezuji VT na 4–8 ml/kg predikované hmotnosti (PBW), často kolem 6 ml/kg; plateau tlak pod 30 cm H₂O. PBW vychází z výšky a pohlaví, nikoli aktuální hmotnosti.",
        "U středního/těžkého ARDS ATS podmíněně doporučuje vyšší PEEP bez recruitment manévrů. PEEP titruji podle přínosu a tolerance; dlouhé vysokotlaké recruitment manévry jsou nedoporučené. Zlepšení saturace samo neospravedlňuje poškozující tlaky."
      ]
    },
    {
      "title": "4. Pronace a nervosvalová blokáda",
      "refs": [
        "ardsESICM",
        "ardsNMBA"
      ],
      "paragraphs": [
        "Podle ESICM časně pronuji invazivně ventilovaného pacienta, pokud po stabilizaci a optimalizaci VT/PEEP zůstává P/F < 150 při PEEP ≥ 5 cm H₂O. Jednotlivé cykly trvají alespoň 16 hodin. Zajištění rourky, vstupů a prevence otlaků vyžadují připravený tým.",
        "SCCM 2026 podmíněně navrhuje blokádu při P/F < 150, pokud navzdory sedaci přetrvává hypoxemie a/nebo nelze dosáhnout ventilačních cílů. Nejde o automatickou relaxaci každého ARDS. Relaxace nenahrazuje analgezii a sedaci."
      ]
    },
    {
      "title": "5. Další léčba a eskalace",
      "refs": [
        "ardsATS"
      ],
      "paragraphs": [
        "ATS podmíněně doporučuje kortikosteroidy; univerzální preparát a dávku pro všechna ARDS tento dokument neurčuje. U vybraného těžkého ARDS lze zvážit VV-ECMO ve specializovaném centru.",
        "VV-ECMO zajišťuje mimotělní výměnu plynů; není totéž co VA-ECMO s oběhovou podporou. Odeslání řeším včas při selhávání optimalizované péče. Podpora nenahrazuje léčbu vyvolávajícího onemocnění."
      ]
    }
  ],
  "corrections": [
    "Tlak v zaklínění není povinnou součástí současné definice; posuzuji alternativní vysvětlení edému.",
    "„Jedinou účinnou terapií je prevence“ neplatí: protektivní ventilace a vhodně indikovaná pronace mají doložený přínos.",
    "Seznam experimentálních léků ve skriptech není seznamem doporučené rutinní léčby."
  ],
  "checks": [
    {
      "question": "Proč pro výpočet VT nestačí skutečná hmotnost obézního pacienta?",
      "answer": "Velikost plic se neřídí přírůstkem tukové tkáně; používám PBW z výšky a pohlaví.",
      "refs": [
        "ardsnet"
      ]
    },
    {
      "question": "Znamená HFNO automaticky, že ARDS nelze diagnostikovat?",
      "answer": "Ne. Globální definice má i kategorii neintubovaného ARDS za uvedených podmínek.",
      "refs": [
        "ardsGlobal"
      ]
    },
    {
      "question": "Je relaxace povinná u každého pacienta v pronaci?",
      "answer": "Ne. Rozhodují hypoxemie a dosažení ventilačních cílů při sedaci; samotná poloha není univerzální indikací.",
      "refs": [
        "ardsNMBA"
      ]
    }
  ]
},"B18":{
  "title": "Umělá plicní ventilace: principy, nastavení a odvykání",
  "reviewed": "2026-10-29",
  "edition": "AARC 2024 · SRLF/SFMU 2024 · základní ventilační fyziologie",
  "scope": "Základy u dospělého, včetně invazivní ventilace a odvykání. Číselný příklad není univerzální preskripce; obstrukční onemocnění, neurointenzivní péče a děti vyžadují další úpravy.",
  "opening": "Ventilátor podporuje oxygenaci, odstraňování CO₂ a práci dýchacích svalů. Vysvětlím, proč jej pacient potřebuje, co nastavím a podle čeho ověřím bezpečnost i účinek.",
  "openingRefs": [
    "ventSafe",
    "oxygenSRLF"
  ],
  "sections": [
    {
      "title": "1. Indikace a volba podpory",
      "refs": [
        "oxygenSRLF"
      ],
      "paragraphs": [
        "Rozhoduje selhávání oxygenace nebo ventilace, dechová tíseň a vývoj stavu. Apnoe, těžká přetrvávající hypoxemie, zhoršování vědomí, acidóza či šok vyžadují rychlé posouzení intubace. Jediná izolovaná hodnota krevního plynu není univerzální hranicí pro všechny pacienty.",
        "Při použití neinvazivní podpory opakovaně hodnotím účinek. Zhoršování přes maximální oxygenační strategii nesmí vést k odkládání nezbytné intubace. Zajištění dýchacích cest rozvíjí A20."
      ]
    },
    {
      "title": "2. Co znamenají režimy",
      "refs": [
        "ventPrimer"
      ],
      "paragraphs": [
        "V objemovém assist-control nastavím VT a minimální frekvenci; tlak se mění podle mechaniky a úsilí. Pacient může spustit další plně podporované dechy. Objemově řízená ventilace tedy sama neznamená zákaz vlastní aktivity.",
        "V tlakovém assist-control nastavím inspirační tlak, čas a minimální frekvenci; dosažený VT se mění. V pressure support pacient spouští dechy, přístroj je tlakově podporuje a inspirium obvykle končí při poklesu průtoku. Hlídám apnoi a záložní režim.",
        "PEEP je tlak na konci výdechu. CPAP udržuje pozitivní tlak během spontánního dýchání; sám nepřidává inspirační tlakovou podporu. Název režimu nestačí: zjistím, co spouští dech, co přístroj řídí a co ukončuje inspirium."
      ]
    },
    {
      "title": "3. Základní nastavení a kontrola účinku",
      "refs": [
        "ventAssessment",
        "ardsnet",
        "ventSafe"
      ],
      "paragraphs": [
        "Volím režim, VT nebo inspirační tlak, frekvenci, FiO₂, PEEP, inspirační čas/průtok, trigger a alarmy. VT dokumentuji v ml/kg PBW; kontroluji skutečně vydechovaný objem, plateau, PEEP/auto-PEEP a synchronii.",
        "Příklad: při PBW 70 kg a VT 6 ml/kg vychází 420 ml, nikoli automatických 500 ml. Frekvenci upravuji podle pH/PaCO₂ a možnosti úplného výdechu. FiO₂ a PEEP titruji podle oxygenace a tolerance; bez kontroly pacienta nestačí přepsat displej.",
        "Po změně hodnotím dechovou práci, SpO₂, oběh a krevní plyny. Nastavuji také alarmy tlaku, minutové ventilace a apnoe; kontroluji zvlhčení, polohu a fixaci rourky i tlak manžety manometrem."
      ]
    },
    {
      "title": "4. Mechanika a náhlé zhoršení",
      "refs": [
        "ventTrouble"
      ],
      "paragraphs": [
        "Peak tlak zahrnuje odpor při proudění. Plateau měřím při inspirační pauze bez průtoku a bez aktivního úsilí; vzestup peak bez vzestupu plateau vede k hledání obstrukce, například sekretu nebo zalomení rourky. Vzestup obou může znamenat pokles poddajnosti, včetně pneumotoraxu.",
        "Auto-PEEP vzniká při neúplném výdechu; pomáhá jeho měření expirační pauzou u pasivního pacienta a kontrola křivek. Při akutním zhoršení ihned hodnotím pacienta, průchodnost a polohu rourky, okruh a pneumotorax. Alarm pouze neztlumím."
      ]
    },
    {
      "title": "5. Rizika a odvykání",
      "refs": [
        "ventAssessment",
        "ventSBT",
        "ventSafe"
      ],
      "paragraphs": [
        "Předcházím poškození plic nadměrným objemem a tlakem, opakovaným kolapsem, nežádoucí hyperoxií a komplikacím rourky. Pečuji o zvlhčení a synchronii. Po zásazích kontroluji také hemodynamickou odpověď.",
        "Denně zvažuji, zda ustupuje příčina, je dostatečná oxygenace, oběhová stabilita a spontánní dechová aktivita. Zkouška spontánního dýchání (SBT) může probíhat s nízkou tlakovou podporou nebo bez ní, obvykle 30–120 minut; FiO₂ během testu nezvyšuji kvůli zakrytí selhání.",
        "Úspěšná SBT není automatická extubace: posuzuji ještě ochranu dýchacích cest, kašel a sekrety. Při neúspěchu hledám příčinu a upravuji léčbu. Rutinní výpočet RSBI není podmínkou zahájení SBT."
      ]
    }
  ],
  "corrections": [
    "VT „cca 500 ml“ nahrazuji výpočtem podle PBW a následnou kontrolou tlaků.",
    "Objemově řízený assist-control umožňuje pacientem spouštěné dechy; zkratky režimů vždy ověřím u konkrétního přístroje.",
    "Zvládnutá SBT a bezpečná extubace jsou dvě odlišná rozhodnutí."
  ],
  "checks": [
    {
      "question": "Pacient na pressure control má najednou menší VT. Co to znamená?",
      "answer": "Při stejném tlaku se objem může snížit při změně odporu, poddajnosti či úsilí; režim nezaručuje pevný VT.",
      "refs": [
        "ventPrimer"
      ]
    },
    {
      "question": "Peak stoupl, ale plateau je stejné. Co hledám?",
      "answer": "Zvýšený odpor: sekret, zalomení či skousnutí rourky nebo bronchospasmus.",
      "refs": [
        "ventTrouble"
      ]
    },
    {
      "question": "Pacient zvládl SBT, ale špatně kašle a má mnoho sekretu. Automaticky extubuji?",
      "answer": "Ne. Zvládnutí ventilace bez podpory samo neprokazuje bezpečnou ochranu a očistu dýchacích cest.",
      "refs": [
        "ventSBT"
      ]
    }
  ]
},
"B19":{
  "title": "Poruchy acidobazické rovnováhy",
  "reviewed": "2026-10-29",
  "edition": "Ověření zdrojů 29. 10. 2026",
  "scope": "Zkouškový výklad pro dospělé v intenzivní péči. Dávkové příklady mají vymezený kontext; podrobné provedení a monitorace patří do místního klinického protokolu.",
  "opening": "ABR hodnotím podle pH, PaCO₂ a bikarbonátu, ale vždy v klinickém kontextu. Určím primární proces, ověřím přiměřenost kompenzace a u metabolické acidózy spočítám anion gap. Léčím příčinu, nikoli samotné číslo pH.",
  "openingRefs": [
    "acidMerck",
    "acidSRLF"
  ],
  "sections": [
    {
      "title": "1. Čtyři základní poruchy",
      "refs": [
        "acidMerck"
      ],
      "paragraphs": [
        "Acidemie znamená pH < 7,35, alkalemie > 7,45. Acidóza a alkalóza označují procesy: mohou se současně překrývat, takže normální pH nevylučuje poruchu.",
        "Metabolická acidóza primárně snižuje HCO₃⁻, metabolická alkalóza jej zvyšuje. Respirační acidóza zvyšuje PaCO₂ při nedostatečné alveolární ventilaci; respirační alkalóza jej snižuje při hyperventilaci. Orientačně HCO₃⁻ 22–26 mmol/l, PaCO₂ 35–45 mmHg (4,7–6,0 kPa); respektuji laboratoř."
      ]
    },
    {
      "title": "2. Jak přečíst krevní plyn",
      "refs": [
        "acidMerck"
      ],
      "paragraphs": [
        "Zkontroluji odběr a souvislosti: ventilaci, oběh, léky, zvracení, průjem a renální funkci. Pro posouzení oxygenace potřebuji arteriální vzorek; venózní PO₂ nenahrazuje PaO₂. Sleduji trend a současně ionty, albumin, laktát a ketolátky podle podezření.",
        "Podle směru pH a změny PaCO₂/HCO₃⁻ určím hlavní proces. Kompenzace je očekávaná fyziologická odpověď, nikoli automaticky druhá primární porucha. Chronická respirační porucha má výraznější renální kompenzaci než akutní. Samotné „pH pod 7,40“ k diagnóze nestačí."
      ]
    },
    {
      "title": "3. Očekávaná kompenzace",
      "refs": [
        "acidSRLF"
      ],
      "paragraphs": [
        "U metabolické acidózy: očekávaný PaCO₂ = 1,5 × HCO₃⁻ + 8 ± 2 mmHg. Do vzorce nevkládám PaCO₂ v kPa; 1 kPa ≈ 7,5 mmHg. Vyšší skutečný PaCO₂ značí přidruženou respirační acidózu, nižší respirační alkalózu.",
        "Příklad: HCO₃⁻ 12 mmol/l → očekávám PaCO₂ 26 ± 2 mmHg. Naměřených 40 mmHg je „normální“ laboratorní hodnota, ale v této situaci nedostatečná ventilace a smíšená porucha."
      ]
    },
    {
      "title": "4. Anion gap a albumin",
      "refs": [
        "acidSRLF"
      ],
      "paragraphs": [
        "AG = Na⁺ − (Cl⁻ + HCO₃⁻), vše v mmol/l. Referenci volím podle laboratoře a použitého vzorce; varianta s K⁺ má jinou normu. Při hypoalbuminemii: korigovaný AG = AG + 0,25 × (40 − albumin v g/l).",
        "Na 140, Cl 104 a HCO₃⁻ 12 dávají AG 24; při albuminu 20 g/l korigovaný AG 29 mmol/l. Zvýšení ukazuje na neměřené anionty: laktát, ketolátky, renální selhání či některé intoxikace. Normální AG provází například ztrátu bikarbonátu průjmem, renální tubulární acidózu a chloridovou nálož.",
        "Porovnání nárůstu korigovaného AG s poklesem HCO₃⁻ pomáhá odhalit další metabolický proces; nehodnotím je izolovaně od kliniky."
      ]
    },
    {
      "title": "5. Léčba podle mechanismu",
      "refs": [
        "alkalosisMerck",
        "bicarICU2",
        "acidMerck"
      ],
      "paragraphs": [
        "Respirační acidóza vyžaduje řešení hypoventilace a případně ventilační podporu. U respirační alkalózy hledám hypoxemii, bolest, sepsi nebo nadměrnou přístrojovou ventilaci; neoznačím ji bez vyšetření za úzkost.",
        "Při metabolické acidóze obnovuji perfuzi, léčím ketoacidózu, ztráty zásad, renální příčinu nebo intoxikaci. Bikarbonát není automatická léčba každé acidemie. Studie BICARICU-2 (2025) u těžké metabolické acidemie s AKI neprokázala snížení 90denní mortality; potřeba náhrady funkce ledvin byla nižší jako sekundární výsledek. Výsledek nelze přenést na všechny acidózy.",
        "U metabolické alkalózy hledám ztrátu žaludeční kyseliny, diuretika, nedostatek K/Cl a mineralokortikoidní příčiny. Hypovolemická chlorid-responzivní forma reaguje na doplnění chloridů, objemu a draslíku. Při přetížení či mineralokortikoidním mechanismu není plošná infuze NaCl řešením; rozhoduje příčina a renální funkce."
      ]
    }
  ],
  "corrections": [
    "Chronická nebo kompenzovaná porucha není automaticky smíšená.",
    "Normální pH ani normální PaCO₂ nevylučují závažnou poruchu.",
    "Anion gap musí mít uvedený vzorec a zohlednit albumin; samotný bikarbonát není univerzální terapie."
  ],
  "checks": [
    {
      "question": "HCO₃⁻ je 12 a PaCO₂ 40 mmHg. Je kompenzace přiměřená?",
      "answer": "Ne: očekávám 24–28 mmHg. Přítomna je také respirační acidóza.",
      "refs": [
        "acidSRLF"
      ]
    },
    {
      "question": "Proč může být AG u kriticky nemocného zavádějící?",
      "answer": "Nízký albumin snižuje výchozí AG a může zakrýt neměřené anionty; používám korekci a referenci stejného vzorce.",
      "refs": [
        "acidSRLF"
      ]
    },
    {
      "question": "Pacient zvrací, je hypovolemický a má alkalózu s nízkým K. Co léčím?",
      "answer": "Ztráty žaludeční kyseliny a chloridů, objemový deficit i hypokalemii. Samotná úprava pH bez odstranění příčiny nestačí.",
      "refs": [
        "alkalosisMerck"
      ]
    }
  ]
},
"B20":{
  "title": "Závažné poruchy iontů a osmolality",
  "reviewed": "2026-10-29",
  "edition": "Ověření zdrojů 29. 10. 2026",
  "scope": "Zkouškový výklad pro dospělé v intenzivní péči. Dávkové příklady mají vymezený kontext; podrobné provedení a monitorace patří do místního klinického protokolu.",
  "opening": "Nejprve hledám akutní neurologické a srdeční ohrožení. Závažnost neurčuje jen laboratorní hodnota, ale také příznaky a rychlost změny. U sodíku rozlišuji tonicitu a objem, u draslíku ochranu myokardu, přesun do buněk a skutečné odstranění z těla.",
  "openingRefs": [
    "hypoNaEmergency",
    "hyperK2026"
  ],
  "sections": [
    {
      "title": "1. Osmolalita, tonicita a vyšetření",
      "refs": [
        "hypoNaEurope"
      ],
      "paragraphs": [
        "Osmolalita vyjadřuje počet osmoticky aktivních částic na kilogram vody. Tonicita popisuje účinek osmolitů na přesun vody přes buněčnou membránu; urea zvyšuje osmolalitu, ale není účinným osmolem pro trvalý přesun vody mezi buňkou a okolím.",
        "Nízké Na může být hypotonické, při hyperglykemii hypertonické, nebo laboratorní pseudohyponatremií při vysokých lipidech/proteinech. Hyperglykemická hyponatremie není pseudohyponatremie. Vyšetřím glykemii, sérovou osmolalitu, renální funkci, bilanci a léky; u hypotonické hyponatremie močovou osmolalitu a Na.",
        "SIAD je diagnóza po vyloučení jiných příčin včetně adrenální insuficience. Koncentrace Na sama neříká, zda je pacient objemově depletní nebo přetížený; podle mechanismu se liší následná léčba."
      ]
    },
    {
      "title": "2. Hyponatremie: příznaky určují naléhavost",
      "refs": [
        "hypoNaEmergency"
      ],
      "paragraphs": [
        "Křeče, porucha vědomí či další závažné projevy vyžadují monitorovanou akutní léčbu. U symptomatického dospělého používá uvedený postup 150 ml 3% NaCl i.v. za 20 minut, poté kontrolu Na; bolus lze podle odpovědi opakovat do počátečního vzestupu přibližně o 5 mmol/l v první hodině. Cílem není okamžitá normalizace.",
        "Nepřekročit vzestup 10 mmol/l v prvních 24 hodinách a 8 mmol/l za každých dalších 24 hodin. To jsou horní limity, nikoli cíle; při vysokém riziku osmotické demyelinizace volím s odborníkem přísnější plán. Sleduji Na opakovaně i diurézu: vznik vodní diurézy může způsobit nečekané překorigování.",
        "Při nadměrné korekci zastavím aktivní léčbu a urgentně řeším s odborníkem desmopresin a doplnění volné vody. Po zvládnutí příznaků léčím příčinu; dlouhodobá restrikce tekutin není univerzální řešení každé hyponatremie."
      ]
    },
    {
      "title": "3. Hypernatremie: zpravidla deficit vody",
      "refs": [
        "hyperNaNHS",
        "diabetesInsipidus"
      ],
      "paragraphs": [
        "Příčinou bývá nedostatečný příjem vody, renální nebo mimorenální ztráty, vzácně nadbytek sodíku. Voda odchází z buněk: vzniká buněčná dehydratace, nikoli primárně otok. Hledám horečku, průjem, osmotickou diurézu a diabetes insipidus.",
        "Při hypotenzi a intravaskulární depleci nejprve obnovím cirkulaci izotonickým krystaloidem. Potom doplňuji vodu enterálně nebo i.v. 5% glukózou podle bilance a glykemie; započítám pokračující ztráty. Chronickou či nejasně dlouhou hypernatremii koriguji pozvolna, tradičně přibližně nejvýše o 10 mmol/l za den, s častou kontrolou Na a úpravou plánu. Akutní sodíková nálož vyžaduje individuální specialistický postup.",
        "U známého centrálního DI s velkou řídkou diurézou patří do léčby desmopresin a kontrola bilance. Současné zastavení ztrát a podání velkého množství vody může Na snížit příliš rychle."
      ]
    },
    {
      "title": "4. Hyperkalemie: tři odlišné cíle",
      "refs": [
        "hyperK2026"
      ],
      "paragraphs": [
        "Myslím na AKI, léky, rozpad tkání a přesuny K. Neočekávaný výsledek ověřím bez odkládání léčby závažného stavu. Při K ≥ 6,0 mmol/l pořídím EKG; normální EKG neznamená bezpečí.",
        "Při toxických EKG změnách chráním myokard: 30 ml 10% kalcium glukonátu i.v. za 10 minut, nebo v resuscitační/periarrestové situaci 10 ml 10% CaCl₂ za 5 minut. Kalcium nesnižuje K.",
        "Při K ≥ 6,5 mmol/l: 10 jednotek rozpustného inzulinu + 25 g glukózy i.v.; salbutamol 10–20 mg nebulizací je doplněk. Bikarbonát není rutinní léčba. Inzulin K pouze přesune: potřebuji také eliminaci, podle situace vazač K nebo urgentní dialýzu.",
        "Sleduji K v 1., 2., 4., 6. a 24. hodině a glykemii opakovaně nejméně 6 hodin. Při výchozí glykemii < 7 mmol/l UKKA přidává 10% glukózu 50 ml/h na 5 hodin. Hrozí hypoglykemie a návrat hyperkalemie."
      ]
    },
    {
      "title": "5. Hypokalemie: doplnit deficit i odstranit příčinu",
      "refs": [
        "hypoKSPS"
      ],
      "paragraphs": [
        "Příčiny zahrnují průjem, zvracení, diuretika, renální ztráty a přesun při inzulinu či alkalóze. Hodnotím slabost, arytmie, EKG, Mg a renální funkci. Sérové K není spolehlivý přímý výpočet celotělového deficitu.",
        "Pokud lze, podávám K perorálně. Závažná hypokalemie (zejména < 2,5 mmol/l), příznaky nebo nemožnost enterálního podání vyžadují i.v. substituci podle monitorovaného protokolu. Nikdy i.v. bolus koncentrovaného KCl. Běžná rychlost nepřesahuje 10 mmol/h; vyšší rychlosti vyžadují odpovídající intenzivní dohled. Preferuji hotové ředěné roztoky, kontroluji K a řeším současný deficit Mg."
      ]
    },
    {
      "title": "6. Magnesium: důležité i pro úpravu K a Ca",
      "refs": [
        "hypoMgSPS",
        "hyperMgProduct"
      ],
      "paragraphs": [
        "Nízké Mg může způsobit neuromuskulární dráždivost a arytmie a udržovat hypokalemii či hypokalcemii. Hledám gastrointestinální a renální ztráty, alkohol a léky. Mírný deficit lze doplňovat perorálně.",
        "Při těžké symptomatické hypomagnezemii uvádí SPS úvodně 5 g MgSO₄ (= 20 mmol Mg) i.v.; obvyklá infuzní rychlost 1–2 g/h. Jde o substituci, nikoli režim urgentního bolusu při torsades. U poruchy ledvin upravuji dávku, sleduji Mg, K, Ca, tlak a podle závažnosti EKG. Údaj v mililitrech bez koncentrace nestačí.",
        "Hypermagnesemie vzniká hlavně při renálním selhání a exogenní náloži: hyporeflexie, slabost, hypotenze, bradykardie a útlum dýchání. Zastavím přívod Mg, podpořím ABC; i.v. kalcium antagonizuje účinky, těžká toxicita může vyžadovat dialýzu."
      ]
    },
    {
      "title": "7. Kalcium: ionizovaná frakce a příčina",
      "refs": [
        "hypoCaEndo",
        "hyperCaEndo"
      ],
      "paragraphs": [
        "Nízké celkové Ca při hypoalbuminemii nemusí znamenat nedostatek biologicky aktivního Ca; u kriticky nemocného hodnotím zejména ionizované Ca a pH. Hypokalcemie může způsobit parestezie, tetanii, křeče a prodloužení QT. Hledám deficit Mg, poruchu PTH, renální příčinu nebo citrát při transfuzích.",
        "Při závažné symptomatické hypokalcemii: 10–20 ml 10% kalcium glukonátu v 50–100 ml 5% glukózy během 10 minut za EKG monitorace; podle odpovědi opakování a následná infuze s léčbou příčiny. CaCl₂ nelze zaměnit mililitr za mililitr.",
        "Hyperkalcemie vede k dehydrataci, polyurii, poruše vědomí a arytmiím. PTH pomáhá odlišit paratyreoidální příčinu od malignity a jiných stavů. Léčím dehydrataci 0,9% NaCl s kontrolou přetížení, podle příčiny přidávám antiresorpční léčbu; při závažném renálním selhání zvažuji dialýzu. Kličkové diuretikum není rutinní prostředek ke snížení Ca, má místo při převodnění."
      ]
    }
  ],
  "corrections": [
    "Hypernatremie odvodňuje buňky; všechny osmolální poruchy se neléčí stejným izotonickým roztokem.",
    "Hyperkalemie při acidóze není neškodný „normální“ nález. Kalcium chrání srdce, inzulin K přesune, eliminace jej odstraní.",
    "Nepřebírat neurčité dávky MgSO₄ v ml ani automatické podání CaCl₂ při nízkém celkovém Ca."
  ],
  "checks": [
    {
      "question": "Je vzestup Na o 10 mmol/l první den léčebný cíl?",
      "answer": "Ne, je to horní limit uvedeného doporučení. Akutní počáteční cíl při závažných příznacích je menší; vysoké riziko demyelinizace vyžaduje přísnější plán.",
      "refs": [
        "hypoNaEmergency"
      ]
    },
    {
      "question": "K po inzulinu kleslo. Je hyperkalemie vyřešena?",
      "answer": "Nemusí být: přesun je dočasný. Kontroluji návrat K, zajišťuji eliminaci a sleduji hypoglykemii.",
      "refs": [
        "hyperK2026"
      ]
    },
    {
      "question": "Proč se nedaří upravit hypokalemii navzdory substituci?",
      "answer": "Zkontroluji pokračující ztráty a nízké Mg; jeho deficit může udržovat renální ztráty K.",
      "refs": [
        "hypoMgSPS"
      ]
    }
  ]
},
"B21":{
  "title": "Výživa pacientů v intenzivní péči",
  "reviewed": "2026-10-29",
  "edition": "ESPEN 2023 / PADIS 2018 a aktualizace 2025; ověřeno 29. 10. 2026",
  "scope": "Zkoušková odpověď pro dospělé v intenzivní péči. Základní rozhodování a bezpečnost; individuální nutriční předpis a dávkování analgosedace vyžadují klinický protokol.",
  "opening": "Nutriční podporu přizpůsobuji fázi onemocnění, předchozímu příjmu a funkci GIT. Cílem je postupně pokrýt potřeby bez překrmování a refeedingu; plná dávka od prvního dne není automaticky správně.",
  "openingRefs": [
    "nutritionESPEN"
  ],
  "sections": [
    {
      "title": "1. Riziko a výchozí stav",
      "refs": [
        "nutritionAlbumin",
        "nutritionNICE"
      ],
      "paragraphs": [
        "Zjišťuji úbytek hmotnosti, délku a míru omezení příjmu, BMI, svalovou hmotu, funkční stav, ztráty a předpokládaný další průběh. Obezita nevylučuje malnutrici; otoky mohou zkreslit hmotnost. Screening doplním klinickým vyšetřením, ne jediným laboratorním číslem.",
        "Albumin a prealbumin výrazně ovlivňuje zánět, distribuce tekutin a další faktory. Nízká hodnota není důkazem izolovaného nedostatku bílkovin a její normalizace není cíl dávkování výživy. Vývoj hodnot sám neprokazuje obnovu svalů."
      ]
    },
    {
      "title": "2. Kudy a kdy výživu podat",
      "refs": [
        "nutritionESPEN",
        "nutritionESICM"
      ],
      "paragraphs": [
        "Pokud je bezpečné polykání a dostatečný příjem, preferuji perorální cestu. Jinak při funkčním GIT zahajuji enterální výživu zpravidla do 48 hodin, v malé dávce s postupným navyšováním. Obvykle gastricky; postpyloricky při vybraných problémech s tolerancí nebo vysokém riziku aspirace.",
        "Nekontrolovaný šok s hypoperfuzí, střevní ischemie, mechanická obstrukce či nekontrolované GIT krvácení jsou důvody EN odložit. Samotný stabilní vazopresor není absolutní zákaz: po zvládnutí šoku lze opatrně zkusit malou dávku.",
        "Při kontraindikaci perorální/enterální cesty ESPEN zvažuje PN v intervalu 3–7 dnů; těžká malnutrice může odůvodnit dřívější pozvolnou PN. Doplňková PN při nedostatečné EN se rozhoduje individuálně, ne automaticky k dorovnání prvního dne."
      ]
    },
    {
      "title": "3. Energie a protein: postupně, podle fáze",
      "refs": [
        "nutritionESPEN"
      ],
      "paragraphs": [
        "Energetický výdej přednostně měřím nepřímou kalorimetrií. V časné akutní fázi nepřekrmuji: přívod nejvýše přibližně 70 % výdeje, po třetím dni postupně k 80–100 % měřeného výdeje podle tolerance. Při pouhém odhadu potřeb je vhodná hypokalorická výživa v prvním týdnu.",
        "Protein navyšuji postupně přibližně k 1,3 g/kg/den podle klinické situace. Nejde o povinnou plnou dávku hned při přijetí; u obezity a otoků je nutné zvolit vhodnou hmotnost pro výpočet. Započítám také nenutriční energii, například propofol a infuzní glukózu."
      ]
    },
    {
      "title": "4. Tolerance, bilance a každodenní kontrola",
      "refs": [
        "nutritionESICM",
        "nutritionNICE",
        "propofolICU"
      ],
      "paragraphs": [
        "Sleduji skutečně podanou výživu, zvracení, regurgitaci, břišní distenzi, stolici a známky ischemie. Intoleranci řeším hledáním příčiny, úpravou přívodu a podle situace prokinetikem či postpylorickým přístupem. Průjem sám o sobě neznamená automatické zastavení EN.",
        "Kontroluji glykemii, fosfát, K, Mg, renální funkci, bilanci a podle cesty výživy jaterní testy a triglyceridy. Hodnotím i žilní/sondový vstup a riziko aspirace. U PN zajistím vitaminy a stopové prvky, ne jen makroživiny.",
        "Tekutiny předepisuji podle oběhu, ztrát, diurézy a přetížení; počítám všechny infuze i vodu ve výživě. Skriptových 100–150 ml/kg/den není běžná udržovací potřeba dospělého. U 70kg člověka by to bylo 7–10,5 litru denně, proto tento údaj nepoužívám jako univerzální předpis."
      ]
    },
    {
      "title": "5. Refeeding syndrom",
      "refs": [
        "refeedingASPEN",
        "nutritionNICE"
      ],
      "paragraphs": [
        "Po obnovení přívodu energie podvyživenému pacientovi mohou rychle klesnout fosfát, K a Mg a projevit se deficit thiaminu. Hrozí arytmie, svalová a respirační slabost, porucha vědomí a orgánové selhání. Nejde pouze o izolovanou hypofosfatemii; důležitá je časová souvislost s výživou.",
        "Riziko zvyšuje dlouhý minimální příjem, významný úbytek hmotnosti, nízké BMI, již nízké ionty a alkohol. Před zahájením zkontroluji P/K/Mg a podám thiamin. ASPEN pro dospělé uvádí 100 mg před výživou či glukózou a poté denně 5–7 dní nebo déle podle rizika.",
        "Začínám sníženým přívodem a postupně navyšuji. NICE pro vysoké riziko uvádí nejvýše 10 kcal/kg/den, v extrémním riziku 5; jde o zvláštní režim, ne běžný cíl všech pacientů ICU. U vysoce rizikových ASPEN doporučuje ionty zpočátku každých 12 hodin.",
        "Při těžce nízkých P/K/Mg nejprve koriguji deficit a odložím zahájení či zvýšení kalorií. Při prudkém poklesu během výživy snížím energetický přívod, doplním ionty a znovu vyhodnotím stav; nezvyšuji dávku jen proto, že nebyl splněn energetický plán."
      ]
    }
  ],
  "corrections": [
    "Albumin a prealbumin nejsou samostatná diagnóza malnutrice ani měřítko účinnosti výživy.",
    "Pevné vysoké energetické tabulky a 100–150 ml vody/kg/den nepřebírat jako univerzální cíle.",
    "Enterální cesta má přednost při funkčním GIT, ale ne za každou cenu během nekontrolovaného šoku."
  ],
  "checks": [
    {
      "question": "Má pacient s nízkým albuminem automaticky dostat více bílkovin?",
      "answer": "Ne. Posoudím příjem, ztráty, svaly a zánět; samotný albumin neříká, kolik proteinu pacient potřebuje.",
      "refs": [
        "nutritionAlbumin"
      ]
    },
    {
      "question": "Při stabilní malé dávce noradrenalinu musím vždy odložit EN?",
      "answer": "Ne. Rozhoduje zvládnutí šoku a perfuze, ne samotná přítomnost vazopresoru; začínám opatrně a sleduji toleranci.",
      "refs": [
        "nutritionESICM"
      ]
    },
    {
      "question": "Po zahájení výživy rychle klesají fosfát a K. Dorovnám kalorie na plný cíl?",
      "answer": "Ne. Zvažuji refeeding, omezím přívod, koriguji ionty a ověřím thiamin; kontroluji orgánové projevy.",
      "refs": [
        "refeedingASPEN"
      ]
    }
  ]
},
"B22":{
  "title": "Analgosedace pacientů v intenzivní péči",
  "reviewed": "2026-10-29",
  "edition": "ESPEN 2023 / PADIS 2018 a aktualizace 2025; ověřeno 29. 10. 2026",
  "scope": "Zkoušková odpověď pro dospělé v intenzivní péči. Základní rozhodování a bezpečnost; individuální nutriční předpis a dávkování analgosedace vyžadují klinický protokol.",
  "opening": "Odděleně hodnotím bolest, hloubku sedace a delirium. Nejprve léčím bolest a příčinu neklidu, pak titruji sedativum k předem stanovenému cíli. U většiny ventilovaných preferuji lehkou sedaci, umožňující kontakt a průběžné hodnocení.",
  "openingRefs": [
    "padis2018"
  ],
  "sections": [
    {
      "title": "1. Co léčím a jak měřím účinek",
      "refs": [
        "padis2018",
        "rassQUT"
      ],
      "paragraphs": [
        "Je-li pacient schopen komunikace, bolest hodnotí sám, například NRS 0–10. U nekomunikujícího použiji CPOT nebo BPS. Tachykardie a hypertenze jsou podnět k vyšetření, nikoli spolehlivá škála bolesti.",
        "Sedaci hodnotím RASS: +4 výrazná bojovnost, 0 bdělý klidný pacient, −1 ospalost s kontaktem na hlas déle než 10 sekund, −2 krátký oční kontakt, −3 pohyb/otevření očí na hlas bez kontaktu, −4 reakce pouze na fyzický podnět, −5 žádná reakce. Bolest, sedace a delirium jsou tři různé osy.",
        "Cíl zapíšu a pravidelně přehodnocuji; u běžného ventilovaného pacienta často například RASS −1 až 0, nikoli povinně bezvědomí. Hlubší sedace musí mít konkrétní důvod a plán přehodnocení."
      ]
    },
    {
      "title": "2. Analgezie před prohlubováním sedace",
      "refs": [
        "padis2018",
        "icuBundle"
      ],
      "paragraphs": [
        "Při neklidu nejprve kontroluji bolest, hypoxemii, rourku a ventilátor, retenci moči, metabolickou poruchu či abstinenční stav. Pomáhá vysvětlení výkonu, poloha, komunikace a omezení rušivých podnětů. Bolestivý výkon vyžaduje přípravu předem.",
        "Analgetikum titruji podle účinku. Opioid lze kombinovat s vhodnými neopioidními nebo regionálními postupy podle kontraindikací. Sleduji útlum dýchání a oběhu, střevní funkci a kumulaci. Samotné sedativum neřeší nocicepci.",
        "Kontinuální infuze není povinná u každého pacienta. Volím způsob podání podle potřeb a opakovaného hodnocení; cílem není automatická amnézie, ale přiměřený komfort a bezpečí."
      ]
    },
    {
      "title": "3. Volba sedativa a jeho omezení",
      "refs": [
        "padis2025",
        "propofolICU",
        "dexICU",
        "midazolamICU"
      ],
      "paragraphs": [
        "PADIS 2025 podmíněně preferuje dexmedetomidin před propofolem u ventilovaných dospělých, pokud je prioritou lehká sedace nebo omezení deliria. Není to požadavek použít jej při každé potřebě hluboké sedace.",
        "Dexmedetomidin umožňuje probuditelnost, ale může způsobit bradykardii a hypotenzi. V ICU se nedoporučuje nasycovací dávka ani bolus; vyžaduje monitoraci. Kontakt po oslovení sám neznamená nedostatečný účinek.",
        "Propofol je dobře titrovatelné hypnotikum bez spolehlivé analgezie. Sleduji hypotenzi, triglyceridy a při delší/vysoké expozici propofolový infuzní syndrom: nevysvětlená acidóza, rhabdomyolýza, hyperkalemie, arytmie či srdeční selhání. Při podezření přívod ukončím a řeším orgánové komplikace.",
        "Midazolam může při dlouhé infuzi významně kumulovat, zejména aktivní metabolit při renálním selhání; jaterní dysfunkce snižuje clearance. Pro rutinní dlouhodobou sedaci není automatickou první volbou. Volbu vždy vážu na indikaci, oběh, orgánové funkce a požadovanou probuditelnost."
      ]
    },
    {
      "title": "4. Delirium není jen agitace",
      "refs": [
        "camICU",
        "rassQUT",
        "padis2025"
      ],
      "paragraphs": [
        "Delirium je akutní a kolísající porucha pozornosti a kognice. Může být hyperaktivní i hypoaktivní; tichý pacient proto nemusí být v pořádku. Pravidelně používám CAM-ICU nebo ICDSC. Při RASS −4 až −5 nelze CAM-ICU hodnotit: zapíšu nehodnotitelnost a opakuji, ne negativní nález.",
        "CAM-ICU hledá akutní/kolísající změnu a nepozornost spolu se změnou úrovně vědomí nebo dezorganizovaným myšlením. Samotný vysoký RASS diagnózu deliria neurčuje. Vyšetřuji vyvolávající onemocnění a lékové příčiny.",
        "Aktualizace PADIS 2025 nedává doporučení pro ani proti antipsychotikům k léčbě deliria pro nedostatek přesvědčivých dat. Haloperidol tedy není automatická léčba každého pozitivního screeningu; případný zásah při nebezpečném chování vyžaduje individuální zhodnocení přínosu a rizik."
      ]
    },
    {
      "title": "5. Každodenní plán: probouzení, spánek a mobilizace",
      "refs": [
        "icuBundle",
        "padis2025"
      ],
      "paragraphs": [
        "ABCDEF propojuje hodnocení a léčbu bolesti, spontánní probouzení a dechové zkoušky, volbu léčiv, delirium, mobilizaci a zapojení rodiny. Po bezpečnostním posouzení snižuji zbytečnou sedaci a koordinuji probouzení s odvykáním ventilátoru. Přerušení sedace není automatické při stále trvající indikaci hlubokého útlumu.",
        "Podporuji orientaci, brýle a sluchadla, denní/noční režim, omezení hluku a přiměřenou aktivitu. Rodina pomáhá s kontaktem a orientací. Spánek není totéž co farmakologické bezvědomí.",
        "PADIS 2025 podmíněně doporučuje posílenou mobilizaci/rehabilitaci a melatonin oproti nepodání. Jistota důkazů se liší; nejde o náhradu prostředí a péče o spánek. Každý den přehodnotím cíle, potřebnost infuzí a připravenost k dalšímu odvykání."
      ]
    }
  ],
  "corrections": [
    "Ramsayova škála sama nepokrývá bolest ani delirium; používat oddělená hodnocení.",
    "Kontinuální hluboká sedace a amnézie nejsou plošným cílem péče.",
    "PADIS 2025 upřesňuje výběr sedativa; haloperidol není univerzální odpověď na delirium."
  ],
  "checks": [
    {
      "question": "Pacient má RASS 0, ale udává bolest 8/10. Je analgosedace dostatečná?",
      "answer": "Ne. RASS hodnotí aktivaci a sedaci, nikoli intenzitu bolesti; potřebuji analgezii a její kontrolu.",
      "refs": [
        "padis2018"
      ]
    },
    {
      "question": "Pacient s RASS −5 má negativní CAM-ICU?",
      "answer": "Nelze jej tak označit. Je nehodnotitelný a vyšetření opakuji při dostatečné úrovni vědomí.",
      "refs": [
        "camICU",
        "rassQUT"
      ]
    },
    {
      "question": "Znamená PADIS 2025 povinný dexmedetomidin pro všechny ventilované?",
      "answer": "Ne. Jde o podmíněnou preferenci, pokud je prioritou lehká sedace či snížení deliria; rozhoduje také hemodynamika a konkrétní cíl.",
      "refs": [
        "padis2025"
      ]
    }
  ]
},
"B23":{
  "title": "Levostranné srdeční selhání",
  "reviewed": "2026-10-29",
  "edition": "ESC 2026; pravá komora ACVC/ESC 2024 a ESC/ERS 2022",
  "scope": "Zkouškový výklad pro dospělé: příčiny, diagnostika a základní akutní i dlouhodobá léčba. Podrobné protokoly reperfuze, mechanické podpory a léčby plicní hypertenze jsou mimo rozsah.",
  "opening": "Zvýšené levostranné plnicí tlaky způsobují plicní kongesci; nedostatečný dopředný výdej může vést k hypoperfuzi. U akutního pacienta současně určím závažnost, spouštěč a to, zda převažuje městnání, šok nebo obojí.",
  "openingRefs": [
    "pulmonaryEdema",
    "hfESC2021"
  ],
  "sections": [
    {
      "title": "1. Mechanismus a příčiny",
      "refs": [
        "pulmonaryEdema",
        "hfESC2026"
      ],
      "paragraphs": [
        "Selhání může vzniknout při ischemii, kardiomyopatii, arytmii, akutní chlopenní vadě nebo hypertenzní krizi; dekompenzaci vyvolává také infekce či nadměrná objemová nálož. Zvýšený tlak v levé síni a plicních žilách vede k přesunu tekutiny do intersticia a alveolů. Plicní edém nemusí vyžadovat velký celotělový nadbytek vody.",
        "Pozor na změnu názvosloví: ESC 2026 používá HFrEF při LVEF < 50 % a HFpEF při LVEF ≥ 50 %. Starší tříčlenné dělení mělo HFrEF ≤ 40 % a HFmrEF 41–49 %. Samotná EF diagnózu neurčuje; HFpEF vyžaduje příznaky a objektivní strukturální/funkční známky, přičemž EF dříve nebyla < 50 %."
      ]
    },
    {
      "title": "2. Klinický obraz a urgentní vyšetření",
      "refs": [
        "pulmonaryEdema",
        "hfNICE",
        "hfESC2021"
      ],
      "paragraphs": [
        "Dušnost, ortopnoe, chrůpky, pocení a někdy růžové zpěněné sputum ukazují na plicní edém. Mohou být i pískoty („kardiální astma“), takže pískání samo neprokazuje CHOPN. Studené končetiny, oligurie a porucha vědomí upozorňují na nedostatečnou perfuzi.",
        "Vyšetřím EKG, troponin, krevní obraz, ionty a renální funkci, při dechové tísni krevní plyn a při hypoperfuzi laktát. Echo hodnotí komory, chlopně a mechanickou příčinu; v nestabilitě bez odkladu. RTG a plicní ultrazvuk doplňují obraz kongesce.",
        "Při novém podezření na akutní selhání BNP < 100 ng/l nebo NT-proBNP < 300 ng/l diagnózu činí méně pravděpodobnou. Vyšší výsledek ji sám nepotvrzuje; interpretaci mění například ledviny, fibrilace síní a obezita. Katétr v plicnici není rutinní podmínkou diagnózy."
      ]
    },
    {
      "title": "3. Diferenciální diagnóza a spouštěč",
      "refs": [
        "hfNICE",
        "pulmonaryEdema"
      ],
      "paragraphs": [
        "Odlišuji pneumonii, ARDS, exacerbaci obstrukčního onemocnění a plicní embolii; možné jsou kombinace. Anamnéza a poslech nestačí bez zhodnocení oxygenace, zobrazování a srdce.",
        "Zároveň hledám léčitelný spouštěč: akutní koronární syndrom, závažnou arytmii, hypertenzi, infekci či novou chlopenní/mechanickou komplikaci. Revaskularizaci nebo urgentní řešení vady nenahradí samotné odvodnění. Sleduji reakci na zásahy, nejen vstupní hodnoty."
      ]
    },
    {
      "title": "4. Akutní léčba podle kongesce a perfuze",
      "refs": [
        "hfESC2021",
        "hfESC2026"
      ],
      "paragraphs": [
        "O₂ při SpO₂ < 90 % či PaO₂ < 60 mmHg; při plicním edému s dechovou tísní zvažuji časnou CPAP/NIV. Kontroluji tlak a vědomí; selhání neinvazivní podpory nebo neschopnost chránit dýchací cesty vyžaduje intubaci.",
        "Při objemovém přetížení podávám i.v. kličkové diuretikum a kontroluji diurézu, ionty, renální funkci a ústup kongesce. Při vyšším tlaku lze přidat i.v. vazodilatátor, například nitrát; nepodávám jej automaticky při hypotenzi.",
        "Šok vyžaduje urgentní týmovou péči, léčbu příčiny, podle profilu noradrenalin a při nedostatečném výdeji inotropikum; refrakterní stav posouzení mechanické podpory. Morfin není rutinní léčba dušnosti při srdečním selhání."
      ]
    },
    {
      "title": "5. Léčba po stabilizaci",
      "refs": [
        "hfESC2026",
        "hfACC2024"
      ],
      "paragraphs": [
        "ESC 2026 řadí mezi základní léčbu HFrEF ARNI nebo ACE inhibitor (ARB při intoleranci), betablokátor, MRA a inhibitor SGLT2. Pro HFpEF doporučuje MRA a inhibitor SGLT2. Volba konkrétního MRA závisí na důkazech pro danou EF a bezpečnosti; ne všechny přípravky jsou zaměnitelné.",
        "Léčbu zavádím a titruji podle tolerance, tlaku, K a renální funkce; betablokátor nově zahajuji po kompenzaci, ne v nevyřešeném šoku. Diuretikum řeší kongesci a nenahrazuje prognostickou léčbu.",
        "Patří sem také léčba příčiny, rehabilitace a kontroly. ICD/CRT či chlopenní intervence mají vlastní výběrová kritéria; samotná nálepka HFrEF podle nové širší definice neznamená indikaci přístroje."
      ]
    }
  ],
  "corrections": [
    "Názvosloví EF v ESC 2026 se liší od ESC 2021/2023; nesměšovat hranice mezi verzemi.",
    "Morfin ani kyslík nejsou plošná léčba každého srdečního selhání.",
    "Starý seznam ACEI/betablokátor/digoxin není úplný současný základ léčby."
  ],
  "checks": [
    {
      "question": "Dokazují pískoty, že dušnost je bronchopulmonální a ne srdeční?",
      "answer": "Ne. Plicní edém může vyvolat pískoty; rozhoduje celý nález včetně zobrazování a echokardiografie.",
      "refs": [
        "pulmonaryEdema"
      ]
    },
    {
      "question": "Mám při akutním selhání vždy zavést Swan–Ganzův katétr?",
      "answer": "Ne. Rutinně není doporučen; zvažuji jej u vybraných složitých hemodynamických situací.",
      "refs": [
        "hfNICE"
      ]
    },
    {
      "question": "Pacient v šoku potřebuje nově nasadit plnou dávku betablokátoru?",
      "answer": "Ne. Zahájení a titraci odkládám do kompenzace; nejprve obnovuji perfuzi a řeším příčinu.",
      "refs": [
        "hfACC2024"
      ]
    }
  ]
},
"B24":{
  "title": "Pravostranné srdeční selhání",
  "reviewed": "2026-10-29",
  "edition": "ESC 2026; pravá komora ACVC/ESC 2024 a ESC/ERS 2022",
  "scope": "Zkouškový výklad pro dospělé: příčiny, diagnostika a základní akutní i dlouhodobá léčba. Podrobné protokoly reperfuze, mechanické podpory a léčby plicní hypertenze jsou mimo rozsah.",
  "opening": "Selhávající pravá komora vede k systémové venózní kongesci a případně nízkému srdečnímu výdeji. Rozlišuji poruchu kontraktility, zvýšenou plicní cévní zátěž a objemové přetížení. Léčba závisí na mechanismu; automatická velká infuze může stav zhoršit.",
  "openingRefs": [
    "rvAHA",
    "rvAcute"
  ],
  "sections": [
    {
      "title": "1. Příčiny a souvislost s levým srdcem",
      "refs": [
        "rvAHA",
        "rvClinical"
      ],
      "paragraphs": [
        "Častou příčinou je levostranné srdeční onemocnění s následnou plicní hypertenzí. Akutně myslím na plicní embolii, infarkt PK, ARDS nebo dekompenzaci již existující plicní hypertenze. Objemovou zátěž vyvolají například významná trikuspidální regurgitace a zkraty.",
        "Cor pulmonale označuje postižení pravé komory v důsledku onemocnění plic/plicního řečiště; není synonymem každého pravostranného selhání. Tamponáda a konstrikce mohou napodobit pravostranné městnání poruchou plnění a vyžadují odlišné řešení."
      ]
    },
    {
      "title": "2. Proč dilatace pravé komory snižuje i systémový výdej",
      "refs": [
        "rvAHA"
      ],
      "paragraphs": [
        "PK špatně toleruje náhlý vzestup afterloadu. Dilatace zvyšuje napětí stěny, může zhoršit trikuspidální regurgitaci a při poklesu systémového tlaku i koronární perfuzi. Vzniká bludný kruh ischemie a dalšího oslabení.",
        "Posun septa doleva v omezeném prostoru perikardu zhorší plnění LK. Vyšší centrální žilní tlak proto nemusí znamenat lepší výdej. Venózní městnání současně poškozuje ledviny a játra; orgánová dysfunkce není pouze důsledkem nízkého arteriálního tlaku."
      ]
    },
    {
      "title": "3. Klinický obraz, echo a diferenciální diagnóza",
      "refs": [
        "rvClinical",
        "rvAcute",
        "phESC"
      ],
      "paragraphs": [
        "Hledám zvýšenou náplň krčních žil, periferní otoky, hepatomegalii, ascites a přírůstek hmotnosti. Akutně mohou převládat hypotenze, tachykardie, oligurie a hypoperfuze ještě bez velkých otoků. Plíce mohou být poslechově relativně čisté.",
        "EKG a troponin pomáhají hledat ischemii; BNP/NT-proBNP informují o srdečním zatížení, nejsou specifické pro levou komoru. Kontroluji ledviny, játra, laktát a krevní plyn podle stavu. Echo posoudí velikost a funkci PK, septum, chlopně i LK; samotná dilatace PK neprokazuje embolii.",
        "U podezření na PE volím další vyšetření podle stability a klinické pravděpodobnosti. Chronickou PH upřesňuje specializované vyšetření, podle indikace pravostranná katetrizace. Normální tlak v zaklínění není samostatný důkaz pravostranného selhání. Otoky mohou mít také renální, jaterní či žilní příčinu."
      ]
    },
    {
      "title": "4. Akutní stabilizace: objem není automatický lék",
      "refs": [
        "rvAcute"
      ],
      "paragraphs": [
        "Při hypotenzi bez známek vysokých plnicích tlaků lze zkusit opatrné doplnění objemu s okamžitou kontrolou účinku. Při kongesci naopak zvažuji diuretikum. Další objem bez odpovědi zhoršuje dilataci a plnění LK.",
        "Noradrenalin může obnovit tlak a koronární perfuzi; při přetrvávajícím nízkém výdeji zvažuji inotropní podporu, například dobutamin. Sleduji efekt i arytmie a potřebu včasné eskalace do centra.",
        "Koriguji hypoxemii, závažnou hyperkapnii a acidemii zvyšující plicní cévní odpor. Pozitivní tlak může snížit žilní návrat a zvýšit zátěž PK; nutnou intubaci proto připravuji s oběhovým zajištěním a ventilaci individualizuji. Při refrakterním šoku posuzuji mechanickou podporu."
      ]
    },
    {
      "title": "5. Kauzální a dlouhodobá léčba",
      "refs": [
        "phESC",
        "rvAHA"
      ],
      "paragraphs": [
        "Řeším vyvolávající příčinu: u infarktu koronární reperfuzi, u rizikové PE urgentní rozhodnutí o reperfuzní léčbě, u významné vady její specializované řešení. Podpora oběhu kupuje čas, příčinu sama neodstraní.",
        "Při chronické kongesci titruji diuretika s kontrolou iontů a ledvin. U PH při levostranném onemocnění léčím levé srdce; u plicního onemocnění především plíce a chronickou hypoxemii.",
        "PAH a CTEPH vyžadují centrum a léčbu podle skupiny PH. Léky pro PAH se nepodávají plošně při PH z levostranného selhání. Stejně tak není správné přepsat všechny léky pro HFrEF na izolované selhání PK při PAH bez jiné indikace. Rehabilitaci a sledování přizpůsobuji stabilitě a příčině."
      ]
    }
  ],
  "corrections": [
    "Pravostranné selhání není vždy indikace velkého objemového bolusu.",
    "Zaklínění ani jeden echokardiografický parametr samostatně neurčují příčinu.",
    "Chronická léčba PK není kopie léčby LK; plicní vazodilatancia závisejí na typu PH."
  ],
  "checks": [
    {
      "question": "Hypotenze a dilatovaná PK: automaticky podám litr tekutiny?",
      "answer": "Ne. Posoudím plnění a kongesci. Nadměrný objem může dál posunout septum a snížit výdej LK.",
      "refs": [
        "rvAHA"
      ]
    },
    {
      "question": "Prokazuje dilatovaná PK akutní plicní embolii?",
      "answer": "Ne. Nález může mít řadu akutních i chronických příčin; potřebuji klinický kontext a cílené vyšetření.",
      "refs": [
        "rvClinical"
      ]
    },
    {
      "question": "Má pacient s PH při levostranném selhání automaticky dostat léky pro PAH?",
      "answer": "Ne. Základem je léčba levostranného onemocnění a kongesce; specifická léčba závisí na správné klasifikaci PH.",
      "refs": [
        "phESC"
      ]
    }
  ]
},
"B25":{
  "title": "Plicní embolie",
  "reviewed": "2026-10-29",
  "edition": "Ověřené vydané zdroje k 29. 10. 2026; verze uvedeny u sekcí",
  "scope": "Zkouškový výklad pro dospělé. Rozhodování o akutní léčbě a orgánové podpoře; podrobné dávkové, dialyzační a transplantační protokoly jsou mimo rozsah.",
  "opening": "Trombotická plicní embolie uzavírá část plicního řečiště, zvyšuje zátěž pravé komory a může vést k obstrukčnímu šoku. Nejprve posoudím oběhovou stabilitu; u stabilního pacienta vycházím z klinické pravděpodobnosti, nikoli z izolovaného D-dimeru.",
  "openingRefs": [
    "peESC",
    "rvAcute"
  ],
  "sections": [
    {
      "title": "1. Rizika, projevy a mechanismus",
      "refs": [
        "peESC",
        "rvAcute"
      ],
      "paragraphs": [
        "Často jde o trombus z hlubokých žil dolních končetin či pánve. Riziko zvyšují předchozí VTE, operace, imobilizace, malignita, estrogeny a těhotenství/šestinedělí. Netrombotické embolie mají jiné mechanismy a nepřebírají automaticky stejnou léčbu.",
        "Projevy zahrnují náhlou dušnost, pleurální bolest, tachykardii, synkopu či hemoptýzu. Porucha poměru ventilace/perfuze způsobuje hypoxemii; akutní tlakové přetížení PK snižuje plnění LK a systémový výdej. Normální poslech, RTG ani nespecifické EKG PE nevylučují."
      ]
    },
    {
      "title": "2. Diagnostika stabilního pacienta",
      "refs": [
        "peNICE",
        "pe2026"
      ],
      "paragraphs": [
        "Určím předtestovou pravděpodobnost validovaným postupem, například Wells. Při vysoké pravděpodobnosti směřuji k CTPA bez vylučování D-dimerem. Při nízké/střední pravděpodobnosti může negativní vysoce senzitivní D-dimer PE vyloučit; pozitivní vyžaduje další vyšetření, není diagnózou.",
        "U osob nad 50 let lze použít věkově upravený limit věk × 10 µg/l FEU, pokud jej podporuje použitá metoda a algoritmus. FEU a DDU nejsou stejné jednotky. Alternativou je validovaný YEARS; jednotlivé algoritmy libovolně nekombinuji.",
        "CTPA je hlavní zobrazovací metoda. Při nevhodnosti kontrastu zvažuji V/Q vyšetření; při známkách DVT kompresní ultrazvuk. Je-li nutné vyšetření odloženo, zvažuji dočasnou terapeutickou antikoagulaci podle pravděpodobnosti a rizika krvácení."
      ]
    },
    {
      "title": "3. Nestabilita a riziko po potvrzení",
      "refs": [
        "peESC",
        "pe2026"
      ],
      "paragraphs": [
        "Při šoku či zástavě okamžitě hodnotím příčinu včetně bedside echa. Pokud pacient bezpečně zvládne transport, provádím urgentní CTPA; při krajní nestabilitě může nález akutního přetížení PK v odpovídajícím kontextu vést k urgentní reperfuzi bez čekání na CT. Samotná dilatace PK u stabilního pacienta tuto roli nemá.",
        "Evropské schéma ESC rozlišuje vysoké riziko podle nestability; u normotenze kombinuje PESI/sPESI, funkci PK a troponin. Současná dysfunkce PK a pozitivní troponin při zvýšeném klinickém riziku znamenají intermediate-high risk a potřebu monitorace, nikoli automatické trombolýzy.",
        "AHA/ACC 2026 zavádí jiné kategorie: A asymptomatická PE, B symptomatická s nízkým klinickým rizikem, C vyšší klinická závažnost, D počínající kardiopulmonální selhání a E kardiopulmonální selhání s přetrvávající hypotenzí. Kategorie a jejich podskupiny nelze mechanicky převést na stará skriptová stadia I–IV."
      ]
    },
    {
      "title": "4. Antikoagulace versus reperfuze",
      "refs": [
        "pe2026",
        "peNICE",
        "peESC"
      ],
      "paragraphs": [
        "Základem je terapeutická antikoagulace, pokud není kontraindikovaná. Pro vhodné pacienty jsou preferovány DOAC před warfarinem; při potřebě parenterální léčby obvykle LMWH. UFH má místo například při závažné renální dysfunkci nebo při potřebě rychle upravitelné léčby kolem výkonu. Volbu mění těhotenství, APS, krvácení a orgánové funkce.",
        "Apixaban/rivaroxaban mají úvodní intenzivnější režim; dabigatran/edoxaban vyžadují předchozí parenterální antikoagulaci. Nezaměňuji léčebnou a profylaktickou dávku.",
        "Při hemodynamickém selhání rozhoduje tým o systémové trombolýze, katetrizační nebo chirurgické reperfuzi podle krvácivého rizika a dostupnosti. U stabilního pacienta není samotný velký trombus či pozitivní troponin univerzální indikací trombolýzy. Při zhoršování eskaluji neprodleně."
      ]
    },
    {
      "title": "5. Podpora, propuštění a kontroly",
      "refs": [
        "rvAcute",
        "peNICE",
        "pe2026"
      ],
      "paragraphs": [
        "Léčím hypoxemii a hypotenzi; tekutiny podávám opatrně podle plnění PK. Nutná intubace vyžaduje oběhovou přípravu, protože pozitivní tlak může zhoršit výdej. Refrakterní selhání patří do centra s možností mechanické podpory.",
        "Nízkorizikového pacienta lze léčit ambulantně jen po zhodnocení krvácení, komorbidit, dostupnosti léků a spolehlivých kontrol, například pomocí Hestia. Antikoagulace trvá nejméně 3 měsíce; pokračování závisí na přetrvávajícím riziku recidivy a krvácení.",
        "Při kontrolách hodnotím adherenci, krvácení a návrat funkce. Přetrvávající dušnost po PE vyžaduje vyšetření včetně možnosti chronické tromboembolické plicní nemoci/hypertenze; nepovažuji ji automaticky za dekondici."
      ]
    }
  ],
  "corrections": [
    "Negativní D-dimer vylučuje PE jen v odpovídající klinické pravděpodobnosti a algoritmu.",
    "Stadia I–IV nenahrazují aktuální rizikovou stratifikaci; ESC a AHA/ACC používají různá schémata.",
    "Heparin → warfarin není jediná cesta; „nereaguje na heparin“ není samo o sobě přesná indikace trombolýzy."
  ],
  "checks": [
    {
      "question": "Pacient má vysokou pravděpodobnost PE a negativní D-dimer. Končím vyšetřování?",
      "answer": "Ne. Při vysoké pravděpodobnosti potřebuji zobrazovací diagnostiku; D-dimer zde není bezpečný vylučovací test.",
      "refs": [
        "peNICE"
      ]
    },
    {
      "question": "Normotenzní pacient má dysfunkci PK a pozitivní troponin. Automaticky trombolýza?",
      "answer": "Ne. Vyžaduje rizikovou stratifikaci a monitoraci; reperfuzi zvažuji zejména při rozvoji selhání a po zhodnocení krvácení.",
      "refs": [
        "peESC"
      ]
    },
    {
      "question": "Znamená nízké riziko možnost propustit bez zajištění léčby a kontrol?",
      "answer": "Ne. Ambulantní postup vyžaduje dostupnou antikoagulaci a spolehlivé sledování.",
      "refs": [
        "pe2026"
      ]
    }
  ]
},
"B26":{
  "title": "Akutní renální a jaterní selhání",
  "reviewed": "2026-10-29",
  "edition": "Ověřené vydané zdroje k 29. 10. 2026; verze uvedeny u sekcí",
  "scope": "Zkouškový výklad pro dospělé. Rozhodování o akutní léčbě a orgánové podpoře; podrobné dávkové, dialyzační a transplantační protokoly jsou mimo rozsah.",
  "opening": "U obou stavů hledám reverzibilní příčinu, sleduji trend orgánové funkce a léčím život ohrožující komplikace. Náhrada funkce ledvin se neindikuje jen podle kreatininu; akutní jaterní selhání vyžaduje časné zapojení transplantačního centra.",
  "openingRefs": [
    "akiNICE",
    "alfAASLD"
  ],
  "sections": [
    {
      "title": "1. AKI: definice a stadia",
      "refs": [
        "akiKDIGO",
        "akiDraft"
      ],
      "paragraphs": [
        "AKI podle KDIGO: vzestup kreatininu ≥ 26,5 µmol/l za 48 hodin, nebo ≥ 1,5násobek výchozí hodnoty během 7 dnů, nebo diuréza < 0,5 ml/kg/h alespoň 6 hodin. Rozhoduje i diuréza, ne pouze kreatinin.",
        "Stadium 1: kreatinin 1,5–1,9× či vzestup ≥ 26,5 µmol/l; diuréza < 0,5 ml/kg/h po 6–12 h. Stadium 2: 2,0–2,9× nebo stejná oligurie ≥ 12 h. Stadium 3: ≥ 3×, kreatinin ≥ 353,6 µmol/l či zahájení RRT; diuréza < 0,3 ml/kg/h ≥ 24 h nebo anurie ≥ 12 h. Použiji nejzávažnější splněné kritérium v akutním kontextu.",
        "Aktualizace KDIGO 2026 je k datu kontroly stále po veřejném připomínkování v přípravě publikace. Zde používáme vydanou definici 2012, nikoli návrh jako závazné nové doporučení."
      ]
    },
    {
      "title": "2. AKI: příčina a diagnostika",
      "refs": [
        "akiClinical"
      ],
      "paragraphs": [
        "Prerenální mechanismus znamená nedostatečnou efektivní perfuzi, například hypovolemii nebo nízký výdej; podílet se může i venózní kongesce. Intrarenální příčiny zahrnují tubulární poškození, glomerulonefritidu, intersticiální nefritidu a cévní postižení. Postrenálně hledám obstrukci. U sepse jsou mechanismy často smíšené.",
        "Hodnotím bilanci, oběh, léky a výchozí funkci, močový nález a sediment, K a ABR. Ověřím průchodnost katétru a při podezření na obstrukci provedu ultrazvuk. AKI může být neoligurické; vypočtená eGFR při rychle se měnícím kreatininu není přesným měřením aktuální filtrace."
      ]
    },
    {
      "title": "3. AKI: léčba a indikace náhrady funkce",
      "refs": [
        "akiNICE"
      ],
      "paragraphs": [
        "Řeším příčinu: obnovím přiměřenou perfuzi bez převodnění, léčím sepsi, odstraním obstrukci, reviduji nefrotoxiny a upravím dávky léčiv. Podezření na glomerulonefritidu či vaskulitidu vyžaduje cílenou nefrologickou diagnostiku, ne plošná antibiotika a kortikoidy.",
        "Diuretika mohou pomoci s přetížením, ale neléčí samotné poškození ledvin. „Renální dávka“ dopaminu se nepoužívá. Sleduji návrat funkce i následné riziko chronického onemocnění.",
        "Urgentní RRT při život ohrožující/refrakterní hyperkalemii, acidóze, převodnění s plicním edémem či uremických komplikacích, například perikarditidě. Hodnotím kliniku, trend a odpověď na léčbu; nečekám na jediné magické číslo kreatininu. Samotné stadium 3 není automatický příkaz okamžité dialýzy."
      ]
    },
    {
      "title": "4. Jak se funkce ledvin nahrazuje",
      "refs": [
        "akiKDIGO"
      ],
      "paragraphs": [
        "Intermitentní hemodialýza umožňuje rychlou eliminaci; kontinuální metody jsou vhodné zejména při oběhové nestabilitě nebo potřebě pozvolné kontroly bilance. CVVHD využívá hlavně difuzi, CVVH konvekci, CVVHDF obojí. Ultrafiltrace odstraňuje vodu.",
        "Antikoagulace okruhu se volí podle krvácení a kontraindikací; regionální citrát je u vhodných pacientů preferován před heparinem pro CRRT. Nutné jsou kontroly účinnosti, iontů, acidobazické rovnováhy a bilance; heparin není povinný pro každou eliminaci."
      ]
    },
    {
      "title": "5. ALF: rozpoznání a rychlé hledání příčiny",
      "refs": [
        "alfAASLD"
      ],
      "paragraphs": [
        "Akutní jaterní selhání (ALF) je akutní jaterní poškození s koagulopatií (obvykle INR ≥ 1,5) a encefalopatií bez předchozí cirhózy; běžná definice připouští průběh do 26 týdnů. Odlišuji jej od akutní dekompenzace chronického onemocnění (ACLF). Samotné vysoké ALT/AST nestačí.",
        "Hledám paracetamol a další léky/doplňky, virové a autoimunitní příčiny, ischemii, Wilsonovu chorobu a těhotenské příčiny. Vyšetřím glykemii, INR, jaterní testy, bilirubin, ledviny, ionty, laktát a amoniak; doplním etiologická vyšetření a zobrazování. I mírná změna vědomí je varovná.",
        "Při podezření na paracetamol podávám včas N-acetylcystein; další kauzální léčbu řídím etiologií a centrem. Použití NAC u jiných příčin je individuální, nikoli náhrada transplantace. Centrum kontaktuji časně, před hlubokým kómatem."
      ]
    },
    {
      "title": "6. ALF: intenzivní péče a mozek",
      "refs": [
        "alfSCCM",
        "alfUpdate"
      ],
      "paragraphs": [
        "Opakovaně hodnotím vědomí, glykemii, oběh, infekci a orgánové funkce. Při hluboké encefalopatii zajistím dýchací cesty. Předcházím hypoglykemii, hypoxemii a hypotenzi; hlavu udržuji ve zvýšené poloze a řeším riziko mozkového edému.",
        "SCCM 2023 navrhuje hypertonický NaCl u rizika nitrolební hypertenze; rutinní invazivní monitoraci ICP nedoporučuje (podmíněně, velmi nízká jistota důkazů). Trvalá preventivní hyperventilace není univerzální postup. Neurologickou léčbu individualizuje zkušený tým.",
        "INR ukazuje poruchu syntézy a prognózu, ale samo nevyjadřuje riziko krvácení. Plazmu nepodávám jen k normalizaci čísla bez krvácení či indikovaného výkonu; může zakrýt vývoj INR. Klesající transaminázy také samy nedokazují zotavení, pokud se zhoršuje INR, laktát nebo vědomí."
      ]
    },
    {
      "title": "7. ALF: podpora versus transplantace",
      "refs": [
        "alfSCCM",
        "alfUpdate"
      ],
      "paragraphs": [
        "CRRT řeší současné AKI, bilanci i závažnou hyperamonemii; potřeba podpory se může objevit před extrémním vzestupem kreatininu. SCCM 2023 podmíněně navrhuje výměnu plazmy při hyperamonemii, je-li dostupná. Volbu a načasování určuje centrum.",
        "MARS a další detoxikační systémy nejsou plnohodnotnou náhradou všech funkcí jater a nejsou automaticky pro každého. Překlenovací léčba nesmí odložit posouzení urgentní transplantace.",
        "Prognózu hodnotím opakovaně podle příčiny, encefalopatie, INR, laktátu, renální funkce a vývoje. Kritéria jako King’s College pomáhají rozhodování o transplantaci, ale nejsou podmínkou prvního kontaktu s centrem. Nečekám, až pacient splní všechny známky velmi špatné prognózy."
      ]
    }
  ],
  "corrections": [
    "RIFLE není totéž co současná definice KDIGO; u kreatininu i diurézy jsou důležité časové intervaly.",
    "Diuretika ani dopamin neobnovují automaticky funkci ledvin; heparin není jediná antikoagulace CRRT.",
    "ALF není definováno samotnými transaminázami či osmým týdnem; rutinní ICP čidlo a hyperventilaci nepřebírat jako obecný standard."
  ],
  "checks": [
    {
      "question": "Kreatinin je zatím málo změněný, ale diuréza 0,4 ml/kg/h trvá 8 hodin. Může jít o AKI?",
      "answer": "Ano, splňuje diuretickou větev stadia 1; hledám příčinu a sleduji trend.",
      "refs": [
        "akiKDIGO"
      ]
    },
    {
      "question": "Podám furosemid, abych vyléčil AKI?",
      "answer": "Ne. Může řešit přetížení, ale neléčí samotné poškození. Při refrakterních komplikacích posuzuji RRT.",
      "refs": [
        "akiNICE"
      ]
    },
    {
      "question": "ALT klesá, ale INR a encefalopatie se horší. Je to zlepšení?",
      "answer": "Ne. Posuzuji funkci a klinický vývoj; pokles enzymů nesmí oddálit transplantologické zhodnocení.",
      "refs": [
        "alfUpdate"
      ]
    }
  ]
},
  B27: {
    title: 'Akutní stavy v diabetologii: hypoglykemie, DKA a HHS',
    reviewed: '2026-10-30',
    edition: 'ADA / EASD 2024–2026 · JBDS-IP 2023/2024',
    scope: 'Zkouškový přehled akutních komplikací diabetu u dospělých. Zahrnuje klinickou stratifikaci hypoglykemie a diferenciální diagnostiku i léčbu DKA a HHS (tekutiny, kalium, inzulin, glukóza). Pediatrická specifika a chronická kompenzace vyžadují samostatné postupy.',
    opening: 'Akutní diabetické stavy dělím na hypoglykemické příhody a hyperglykemické krize. U těžké hypoglykemie je prioritou okamžité podání glukózy k ochraně mozku. U hyperglykemií rozlišuji ketoacidózu (DKA) s dominující acidózou a hyperosmolární stav (HHS) s extrémní dehydratací a osmolalitou. V obou případech má obnova objemu a kontrola kalia přednost před unáhleným snižováním glykemie.',
    openingRefs: ['adaDKA', 'adaHypo'],
    sections: [
      {
        title: '1. Hypoglykemie: rozpoznání, patofyziologie a akutní léčba',
        refs: ['adaHypo'],
        paragraphs: [
          'Hypoglykemie je definována poklesem glykemie pod 3,9 mmol/l (úroveň 1). Úroveň 2 (< 3,0 mmol/l) znamená závažný pokles vyžadující okamžitý zásah a úroveň 3 představuje těžkou hypoglykemii se změnou vědomí nebo kognitivní funkcí vyžadující pomoc druhé osoby bez ohledu na konkrétní číslo glykemie.',
          'Příznaky dělím na adrenergní (pocení, třes, tachykardie, palpitace, bledost, anxieta a hlad) a neuroglykopenické (zmatenost, poruchy chování, afázie, křeče, ložiskový neurologický deficit napodobující cévní mozkovou příhodu a bezvědomí). U dlouhodobých diabetiků či autonomní neuropatie mohou vegetativní varovné signály zcela chybět (hypoglycaemia unawareness).',
          'Při zachovaném vědomí a schopnosti polykat podám 15–20 g rychle vstřebatelných sacharidů (ovocný džus, glukózové tablety; pravidlo 15/15 s kontrolou glykemie po 15 minutách). U poruchy vědomí je lékem volby intravenózní glukóza: doporučuje se 10% nebo 20% glukóza (např. 100–150 ml 10% nebo 50–80 ml 20% glukózy). Neředěná bolusová 40% glukóza nese vysoké riziko flebitidy a nekrózy tkání při extravazaci.',
          'Bez i.v. vstupu aplikuji glukagon 1 mg i.m./s.c. (či nosní sprej 3 mg); glukagon však selhává při vyčerpaném jaterním glykogenu (kachexie, dlouhodobé hladovění, intoxikace etanolem). U hypoglykemií vyvolaných deriváty sulfonylurey či dlouhodobě působícími inzuliny hrozí protrahovaný a rekurentní průběh vyžadující hospitalizaci a kontinuální infuzi glukózy.'
        ]
      },
      {
        title: '2. DKA versus HHS: patofyziologie a diagnostika',
        refs: ['adaDKA', 'jbdsDKA'],
        paragraphs: [
          'Diabetická ketoacidóza (DKA) vzniká při absolutním či těžkém relativním nedostatku inzulinu v kombinaci s převahou kontraregulačních hormonů (glukagon, kortizol, katecholaminy). Dochází k masivní lipolýze, uvolnění volných mastných kyselin a jejich jaterní oxidaci na ketolátky (kyselina beta-hydroxymáselná a acetoctová). Výsledkem je metabolická acidóza s vysokým aniontovým gapem (HAGMA), kompenzační hyperventilace (Kussmaulovo dýchání), acetonový zápach dechu, nauzea, zvracení a bolesti břicha (pseudoperitonitis diabetica).',
          'Diagnostická triáda DKA zahrnuje hyperglykemii (obvykle > 11–14 mmol/l, i když u euglykemické DKA, např. při léčbě glifloziny SGLT2-i, těhotenství či hladovění, může být glykemie normální!), ketonemii (beta-hydroxybutyrát v krvi ≥ 3,0 mmol/l či výraznou ketonurii) a acidózu (pH < 7,30 nebo sérový bikarbonát < 18 mmol/l s anion gapem > 10–12 mmol/l). Deficit tekutin činí obvykle 5–8 litrů.',
          'Hyperglykemický hyperosmolární stav (HHS) typicky postihuje starší pacienty s DM2 po týdnech zhoršování. Zbytková sekrece inzulinu postačuje k potlačení masivní lipolýzy a ketogeneze, ale nestačí k utilizaci glukózy. Dochází k extrémní hyperglykemii (často > 30–40 mmol/l), těžké osmotické diuréze a masivní dehydrataci (deficit 8–10+ litrů).',
          'Kritéria HHS: efektivní osmolalita séra > 320 mOsm/kg [vypočtená jako 2×Na + glykemie], těžká hyperglykemie, absence významné ketózy/acidózy (pH > 7,30, bikarbonát > 18 mmol/l) a alterace vědomí (somnolence, zmatenost, křeče až hluboké kóma). HHS nese vysokou mortalitu a výrazné riziko trombembolických komplikací.'
        ]
      },
      {
        title: '3. Tekutinová resuscitace a dynamika osmolality',
        refs: ['adaDKA', 'jbdsDKA'],
        paragraphs: [
          'Obnova intravaskulárního objemu a perfuze tkání je prvním krokem léčby DKA i HHS ještě před podáním inzulinu. Zlepšuje citlivost na inzulin, snižuje hladiny stresových hormonů a zahajuje pokles glykemie samotnou expanzí a glomerulární filtrací.',
          'Zahajuji infuzí izotonického krystaloidu (balancovaný roztok jako Plasmalyte/Ringerfundin nebo 0,9% NaCl): obvykle 1000 ml v první hodině (10–15 ml/kg/h) u dospělého bez kardiálního selhání. Rychlost dalších infuzí (typicky 250–500 ml/h) individualizuji podle hemodynamiky, bilance a korigovaného sodíku.',
          'Protože hyperglykemie osmoticky přesouvá vodu z buněk do cév a zdánlivě snižuje naměřený sodík, počítám korigovaný natrium [naměřený Na + 1,6 až 2,0 mmol/l na každých 5,5 mmol/l glykemie nad normu]. Stoupající korigovaný sodík při léčbě varuje před dehydratací, zatímco příliš prudký pokles efektivní osmolality zvyšuje riziko edému mozku.',
          'Cílem rehydratace u DKA je nahradit deficit během 24–48 hodin; u HHS probíhá rehydratace pozvolněji (během 48–72 hodin) s průběžným sledováním bilance tekutin a centrální hemodynamiky.'
        ]
      },
      {
        title: '4. Inzulinoterapie a kritická role draslíku',
        refs: ['adaDKA', 'jbdsDKA'],
        paragraphs: [
          'Kalium je absolutní prioritou bezpečnosti. Acidóza a nedostatek inzulinu vyhánějí kalium z buněk do extracelulárního prostoru; počáteční kalemie v séru proto může být normální či zvýšená, ačkoli celotělový deficit draslíku vlivem osmotické diurézy činí 300–500 mmol.',
          'Inzulin a hydratace prudce přesouvají draslík zpět do buněk. Pokud je kalemie < 3,3 mmol/l, INZULIN SE NESMÍ ZAHÁJIT! Podání inzulinu při těžké hypokalemii by vedlo k fatálnímu poklesu K+, maligním komorovým arytmiím a zástavě dechového svalstva. Nejprve podám KCl a inzulin zahájím až po vzestupu kalia nad 3,3 mmol/l.',
          'Při kalii 3,3–5,2 mmol/l přidávám 20–30 mmol KCl do každého litru infuze současně se zahájením inzulinu, aby se kalemie udržela v bezpečném rozmezí 4,0–5,0 mmol/l. Inzulin se podává jako kontinuální i.v. infuze rychlého lidského inzulinu v dávce 0,1 j/kg/h (či 0,05–0,1 j/kg/h). Úvodní i.v. bolus není nezbytný a u dětí je zcela opuštěn.',
          'Cílem je bezpečný pokles glykemie o 3–4 mmol/l za hodinu. Jakmile glykemie klesne pod 11–14 mmol/l u DKA (nebo pod 14–17 mmol/l u HHS), PŘIDÁVÁ SE DO INFUZE 5% NEBO 10% GLUKÓZA! Inzulin se nezastavuje, pouze sníží na 0,02–0,05 j/kg/h. Cílem je udržet stabilní glykemii a pokračovat v podávání inzulinu až do úplného vymizení ketoacidózy (normalizace bikarbonátu a uzavření anion gapu).'
        ]
      },
      {
        title: '5. Bikarbonát, edém mozku a vyvolávající příčiny',
        refs: ['adaDKA', 'jbdsDKA'],
        paragraphs: [
          'Rutinní podávání natrium bikarbonátu u DKA je ZAKÁZÁNO. Klinické studie neprokázaly zkrácení hospitalizace ani pokles mortality, naopak bikarbonát nese závažná rizika: paradoxní intracelulární a mozkovou acidózu (exogenní bikarbonát se mění na CO2, který volně difunduje přes hematoencefalickou bariéru, zatímco bikarbonát ne), zhoršení hypokalemie, posun disociační křivky Hb doleva s tkáňovou hypoxií a opožděný pokles laktátu. Zvažuje se pouze u extrémní acidózy s pH < 6,9 spojené s oběhovým selháním.',
          'Edém mozku je vzácná, ale nejnebezpečnější komplikace (častější u dětí a mladých dospělých při DKA a u starších při HHS). Rizikovým faktorem je příliš rychlý pokles glykemie a osmolality a nadměrný přívod hypotonických tekutin. Příznaky zahrnují bolest hlavy, letargii, bradykardii, hypertenzi (Cushingova reakce) a pokles vědomí. Léčba: okamžité podání 20% mannitolu (0,5–1 g/kg během 20 min) nebo 3% NaCl (2,5–3 ml/kg), elevace hlavy a snížení rychlosti infuzí.',
          'Každá hyperglykemická krize má spouštěcí příčinu, po které musím aktivně pátrat: infekce (urosepse, pneumonie – odebrat hemokultury), kardiovaskulární příhoda (akutní infarkt myokardu – u diabetika často němý!), cévní mozková příhoda, akutní pankreatitida, trauma, chirurgický výkon, pochybení v dávkování inzulinu nebo selhání inzulinové pumpy. Vzhledem k hyperkoagulačnímu stavu zahajuji profylaktické podávání LMWH (zejména u imobilních pacientů s HHS).'
        ]
      }
    ],
    corrections: [
      'Při těžké hypoglykemii v bezvědomí nepodávat neředěnou 40% glukózu jako bolus; standardem je 10% nebo 20% glukóza šetřící žíly.',
      'Inzulin se u DKA nikdy nezahajuje při kalémii pod 3,3 mmol/l; hrozí fatální hypokalemická zástava oběhu.',
      'Při poklesu glykemie k 11–14 mmol/l se inzulin nevypíná, ale přidává se glukóza k infuzi pro bezpečné dohojení ketoacidózy; bikarbonát se nepodává rutinně.'
    ],
    checks: [
      {
        question: 'Pacient s DKA má glykemii 28 mmol/l, pH 7,12, ale kalium v laboratoři je 2,9 mmol/l. Jaký je tvůj první krok s inzulinem?',
        answer: 'Inzulin nezahájím! Nejprve podám kalium (např. 20–40 mmol KCl/h do centrální žíly) a inzulin spustím až po vzestupu kalia nad 3,3 mmol/l.',
        refs: ['adaDKA', 'jbdsDKA']
      },
      {
        question: 'Proč se při DKA při poklesu glykemie na 12 mmol/l začíná infundovat 5% nebo 10% glukóza, když měl pacient hyperglykemii?',
        answer: 'Abychom předešli hypoglykemii a zároveň mohli pokračovat v kontinuální infuzi inzulinu, která je nutná k zastavení ketogeneze a normalizaci anion gapu.',
        refs: ['jbdsDKA']
      },
      {
        question: 'Jaký je zásadní rozdíl v patofyziologii mezi DKA a HHS?',
        answer: 'U DKA je absolutní/těžký deficit inzulinu vedoucí k masivní lipolýze, ketogenezi a acidóze. U HHS je zbytkový inzulin, který brání ketóze, ale vede k extrémní hyperglykemii, dehydrataci a hyperosmolalitě.',
        refs: ['adaDKA']
      }
    ]
  },
  B28: {
    title: 'Intoxikace: dělení, toxidromy, dekontaminace a zásady léčby',
    reviewed: '2026-10-30',
    edition: 'TIS ČR · AACT / EAPCCT · EXTRIP',
    scope: 'Obecné zkouškové zásady akutní klinické toxikologie u dospělých. Zahrnuje priority ABCDE, rozpoznání hlavních toxidromů, moderní indikace a kontraindikace gastrointestinální dekontaminace (aktivní uhlí versus výplach) a indikace mimotělní eliminace. Specifické monointoxikace jsou vypracovány v B29.',
    opening: 'Při intoxikaci má zajištění a stabilizace vitálních funkcí (ABCDE) absolutní přednost před pátráním po konkrétním jedu a sháněním antidota. Většina pacientů přežije díky včasné podpůrné intenzivní péči. Diagnostika se opírá o rozpoznání klinických toxidromů, EKG a konzultaci s Toxikologickým informačním střediskem (TIS). Postupy jako nucené zvracení či rutinní výplach žaludku jsou dnes v moderní medicíně opuštěny.',
    openingRefs: ['tisPraha', 'aactDecon'],
    sections: [
      {
        title: '1. Priorita vitálních funkcí (ABCDE) před pátráním po jedu',
        refs: ['tisPraha'],
        paragraphs: [
          'První minuty péče o otráveného se řídí schématem ABCDE. Nejčastější příčinou úmrtí před zahájením léčby je asfyxie z obstrukce dýchacích cest jazykem či zvratky a hypoventilace vyvolaná útlumem dechového centra. Zajištění dýchacích cest orotracheální intubací s utěsněnou manžetou je indikováno při bezvědomí (GCS ≤ 8), zániku obranných reflexů hltanu nebo těžké hypoxemii/hyperkapnii.',
          'Oxygenace a ventilace předcházejí hypoxickému poškození mozku a arytmiím. Oběhová stabilizace zahrnuje monitoraci EKG, invazivní měření tlaku a úvodní krystaloidní infuze při vazodilataci či hypovolemii; při refrakterní hypotenzi se volí noradrenalin. Hypotermie či hypertermie musí být aktivně měřeny a korigovány.',
          'U každého pacienta s poruchou vědomí nejasného původu neprodleně změřím glykemii u lůžka k vyloučení hypoglykemie. Současně zajišťuji toxikologické vzorky (nesrážlivá a sražená krev, první vzorek moči a případný zvratek/žaludeční obsah) a kontaktuji nepřetržitou linku Toxikologického informačního střediska (TIS Praha: 224 91 92 93 nebo 224 91 54 02).'
        ]
      },
      {
        title: '2. Dělení intoxikací a úskalí toxikologické anamnézy',
        refs: ['tisPraha'],
        paragraphs: [
          'Intoxikace dělím podle úmyslu na suicidální (často polypragmazie a kombinace léků s alkoholem u dospělých), náhodné (typicky děti do 5 let požívající čisticí prostředky, kosmetiku či léky prarodičů; senioři s kognitivní poruchou; záměna hub; profesionální a inhalační otravy zplodinami hoření) a kriminální/zneužití návykových látek.',
          'Anamnéza od otráveného pacienta je ze své podstaty nespolehlivá vlivem lhaní, studu, amnézie či zmatenosti. Informace získávám od rodiny, svědků a posádky ZZS: nález prázdných lékových blistrů, lahví chemikálií, dopisu na rozloučenou, čas expozice a dostupné léky v domácnosti.',
          'Při laboratorním screeningu si uvědomuji jeho limity: orientační imunochemické testy moči mají falešné pozitivity i negativity a neposkytují kvantitativní hladinu. Kvantitativní stanovení v séru je urgentně nutné u látek se specifickým antidotem či prahem pro dialýzu: paracetamol, salicyláty, lithium, digoxin, toxické alkoholy, karboxyhemoglobin a methemoglobin.'
        ]
      },
      {
        title: '3. Toxidromy: rozpoznání farmakologických tříd',
        refs: ['tisPraha'],
        paragraphs: [
          'Toxidrom je soubor fyzikálních a laboratorních nálezů typický pro určitou skupinu toxinů působících na specifické receptory. Pomáhá zúžit diferenciální diagnózu dříve, než jsou dostupné laboratorní výsledky.',
          'Anticholinergní toxidrom (atropin, tricyklická antidepresiva, antihistaminika 1. generace, spazmolytika): mydriáza, suchá a horká kůže, suchost sliznic, retence moči, tachykardie, střevní hypomotilita, zmatenost, halucinace a hypertermie („suchý jako kost, červený jako řepa, slepý jako krtek, horký jako pec, šílený jako kloboučník“).',
          'Cholinergní toxidrom (organofosfáty, karbamáty, nervově paralytické látky): mióza, masivní pocení, slinění, slzení, bronchorea a bronchospasmus, bradykardie, průjem, křeče a svalové fascikulace až svalová obrna (mnemotechnika SLUDGE / DUMBELS: salivation, lacrimation, urination, defecation, GI upset, emesis).',
          'Opioidní toxidrom: triáda útlum dechu (bradypnoe/apnoe), mióza (špendlíkovité zornice) a kóma; doprovázená hypotenzí a hypotermií. Sedativně-hypnotický toxidrom (benzodiazepiny, barbituráty, Z-léky): ataxie, dysartrie, letargie, normální či zúžené zornice, malý vliv na oběh a dech v monointoxikaci.',
          'Sympatomimetický toxidrom (kokain, pervitin, extáze, amfetaminy): mydriáza, tachykardie, hypertenze, profúzní pocení (zásadní odlišení od suchého anticholinergního syndromu!), třes, agitovanost, hypertermie a riziko křečí, infarktu a rhabdomyolýzy.'
        ]
      },
      {
        title: '4. Gastrointestinální dekontaminace: současné indikace a mýty',
        refs: ['aactDecon'],
        paragraphs: [
          'Vyvolání zvracení (pomocí ipekaku, slané vody či mechanického dráždění) je v moderní toxikologii ZAKÁZÁNO. Nemá prokázaný přínos, oddaluje podání aktivního uhlí a hrozí masivní aspirací žaludečního obsahu do dýchacích cest, rupturou jícnu (Mallory-Weiss) a fatální vagovou stimulací.',
          'Výplach žaludku se rutinně NEPROVÁDÍ. Má být zvažován pouze výjimečně, pokud pacient požil potenciálně život ohrožující množství toxinu před méně než 60 minutami, a to pouze za předpokladu plného vědomí NEBO po předchozím zajištění dýchacích cest orotracheální intubací s nafouknutou manžetou. Výplach v bezvědomí bez intubace je hrubé pochybení non lege artis.',
          'Kontraindikace výplachu žaludku: požití korozivních látek (kyseliny a louhy – hrozí perforace jícnu a žaludku), požití pěnivých látek a těkavých uhlovodíků/ropných destilátů (benzín, petrolej – extrémní riziko chemické aspirační pneumonitidy s plicní nekrózou) a porucha vědomí bez zajištění dýchacích cest.',
          'Aktivní uhlí (Carbo adsorbens) je lékem volby pro gastrointestinální dekontaminaci: jednorázová dávka 1 g/kg (obvykle 50–100 g u dospělého) per os či žaludeční sondou do 1–2 hodin od požití. Aktivní uhlí NEVÁŽE: alkoholy a glykoly, kovy (železo, lithium, olovo), anorganické kyseliny a louhy, kyanidy a fluoridy.',
          'Opakované dávky aktivního uhlí („gastrointestinální dialýza“, 25–50 g každé 2–4 hodiny) jsou indikovány pouze u vybraných látek s enterohepatální/enterogastrickou cirkulací či pomalým uvolňováním: teofylin, karbamazepin, fenobarbital, dapsone a chinin.'
        ]
      },
      {
        title: '5. Mimotělní eliminace a přehled klíčových antidot',
        refs: ['extripGroup', 'tisPraha'],
        paragraphs: [
          'Hemodialýza je účinná u toxinů s malým distribučním objemem (< 1–2 l/kg), nízkou vazbou na plazmatické bílkoviny, malou molekulovou hmotností a rozpustností ve vodě. Hlavní indikace dle konsenzu EXTRIP: těžké otravy metanolem a etylenglykolem, lithiem, salicyláty a teofylinem. U látek s vysokým distribučním objemem (tricyklická antidepresiva, digoxin, benzodiazepiny) je dialýza zcela neúčinná.',
          'Alkalizace moči (kontinuální infuze 8,4% natrium bikarbonátu k udržení pH moči 7,5–8,5) využívá iontového zachycení slabých kyselin v renálních tubulech a brání jejich zpětné resorpci. Je indikována u závažné intoxikace salicyláty, fenobarbitalem a methotrexátem. Historická „forsírovaná diuréza“ s masivním převodněním je pro riziko plicního a mozkového edému opuštěna.',
          'Specifická antidota zasahují cíleným biochemickým mechanismem. Mezi klíčová patří: naloxon (antagonista opioidů), N-acetylcystein (dárce glutathionu u paracetamolu), fomepizol či etanol (inhibitory ADH u toxických alkoholů), atropin a pralidoxim (kompetice a reaktivace AChE u organofosfátů), flumazenil (antagonista benzodiazepinů – pozor na kontraindikace!), hydroxykobalamin (vazba kyanidů na kyanokobalamin) a 8,4% natrium bikarbonát (antidotum kardiotoxicity TCA).',
          'U intoxikace beta-blokátory a blokátory vápníkových kanálů se uplatňuje vysokodávkovaná inzulinoterapie s glukózou (HIET) a glukagon; u toxicity lokálními anestetiky (LAST) a lipofilními kardiotoxiny je lékem volby 20% intravenózní lipidová emulze.'
        ]
      }
    ],
    corrections: [
      'Vyvolání zvracení po požití jedu je v současné medicíně zakázáno pro vysoké riziko aspirace.',
      'Výplach žaludku se neprovádí rutinně a je absolutně kontraindikován u kyselin, louhů, benzínu a bezvědomí bez intubace.',
      'Aktivní uhlí neadsorbuje alkoholy, kovy (lithium, železo) ani kyseliny a louhy; dialýza je neúčinná u látek s vysokým distribučním objemem.'
    ],
    checks: [
      {
        question: 'Pacient v hlubokém kómatu (GCS 5) požil před 45 minutami neznámé léky. Můžeš ihned zavést sondu a provést výplach žaludku?',
        answer: 'Ne! V bezvědomí bez zajištěných dýchacích cest je výplach přísně kontraindikován pro riziko aspirace. Nejprve musím provést orotracheální intubaci s utěsněnou manžetou.',
        refs: ['aactDecon']
      },
      {
        question: 'Proč je vyvolání zvracení u intoxikace čisticím prostředkem na bázi louhu hrubou chybou?',
        answer: 'Louh je korozivní látka. Při zvracení dochází k opakovanému poleptání jícnu a hltanu s rizikem perforace a aspirace do dýchacích cest.',
        refs: ['aactDecon', 'tisPraha']
      },
      {
        question: 'Mladý muž má po požití neznámé látky mydriázu, tachykardii a hypertenzi. Jak podle kůže odlišíš sympatomimetický syndrom od anticholinergního?',
        answer: 'Podle pocení: sympatomimetický syndrom má výrazně opocenou kůži, zatímco anticholinergní syndrom se vyznačuje horkou, suchou kůží a suchostí sliznic.',
        refs: ['tisPraha']
      }
    ]
  },
  B29: {
    title: 'Vybrané intoxikace: paracetamol, toxické alkoholy, CO, opioidy a psychofarmaka',
    reviewed: '2026-10-30',
    edition: 'TIS ČR · NPIS / MHRA · EAPCCT / EXTRIP · UHMS · WHO / ERC 2025',
    scope: 'Klinický zkouškový přehled nejčastějších a nejzávažnějších specifických intoxikací u dospělých. Zahrnuje paracetamol a N-acetylcystein, toxické alkoholy (metanol a etylenglykol), oxid uhelnatý, opioidy a psychofarmaka (benzodiazepiny a TCA). Právní aspekty a chronická závislost vyžadují samostatný kontext.',
    opening: 'Při léčbě specifických otrav kombinuji obecnou podporu vitálních funkcí s včasným podáním cíleného antidota a eliminací. U paracetamolu rozhoduje včasný N-acetylcystein dříve, než se rozvine hepatocelulární nekróza. U toxických alkoholů je zásadní časná blokáda alkoholdehydrogenázy a hemodialýza. U oxidu uhelnatého nesmím věřit normální pulzní oxymetrii a léčím 100% kyslíkem; u opioidů titruji naloxon k obnově ventilace a u tricyklických antidepresiv alkalizuji natrium bikarbonátem.',
    openingRefs: ['paracetamolNPIS', 'toxicAlcohols'],
    sections: [
      {
        title: '1. Paracetamol: mechanismus toxicity, nomogram a N-acetylcystein',
        refs: ['paracetamolNPIS'],
        paragraphs: [
          'Paracetamol je v terapeutických dávkách metabolizován glukuronidací a sulfatací. Při předávkování (toxická dávka > 150 mg/kg nebo > 7,5–10 g u dospělého; u malnutrice, chronického alkoholismu či indukce CYP2E1 i méně) jsou tyto dráhy saturovány a paracetamol je oxidován cytochromem CYP2E1 na vysoce reaktivní elektrofilní metabolit NAPQI (N-acetyl-p-benzochinonimin).',
          'NAPQI se váže na intracelulární glutathion a neutralizuje se. Po vyčerpání zásob glutathionu (pokles pod 30 %) se NAPQI kovalentně váže na proteiny hepatocytů, což vede k centrilobulární jaterní nekróze a akutnímu jaternímu selhání.',
          'Klinický průběh má typická stadia: v prvních 24 hodinách je pacient často zcela asymptomatický nebo má pouze mírnou nauzeu a nechutenství. Za 24–48 hodin dochází k ústupu GIT potíží, ale laboratorně stoupá AST/ALT a objevuje se bolest v pravém podžebří. Za 72–96 hodin vrcholí jaterní nekróza s ikterem, koagulopatií (vzestup INR), encefalopatií, laktátovou acidózou, selháním ledvin a rizikem úmrtí.',
          'Koncentraci paracetamolu v séru stanovuji nejdříve za 4 hodiny po jednorázovém požití a výsledek hodnotím pomocí Rumack-Matthewova nomogramu. Specifickým antidotem je N-acetylcystein (NAC, prekurzor glutathionu s antioxidačním účinkem). Podává se intravenózně podle zjednodušeného třífázového či dvoufázového infuzního protokolu. Nejvyšší účinnost má do 8 hodin od požití, ale podává se i při pozdním záchytu či fulminantním jaterním selhání. Při těžkém selhání jater včas konzultuji transplantační centrum.'
        ]
      },
      {
        title: '2. Metanol a etylenglykol: osmolální a aniontový gap a blokáda ADH',
        refs: ['toxicAlcohols', 'extripGroup'],
        paragraphs: [
          'Samotný metanol i etylenglykol mají nízkou vlastní toxicitu a způsobují pouze mírný tlumivý účinek na CNS podobný opilosti. Život ohrožující toxicita vzniká až jejich metabolizací jaterní alkoholdehydrogenázou (ADH).',
          'Metanol se metabolizuje přes formaldehyd na kyselinu mravenčí (formiát), která inhibuje mitochondriální cytochrom c oxidázu, vyvolává těžkou metabolickou acidózu a specificky poškozuje sítnici a zrakový nerv (rozmazané vidění, pocit sněhové bouře, edém papily až ireverzibilní slepota) a putamen bazálních ganglií.',
          'Etylenglykol (nemrznoucí směsi) se přes glykolaldehyd a kyselinu glykolovou metabolizuje na kyselinu šťavelovou (oxalát). Oxalát se sráží s vápníkem na nerozpustné jehlicovité krystaly kalciumoxalátu monohydrátu, které ucpávají renální tubuly a způsobují akutní tubulární nekrózu, anurické renální selhání a závažnou hypokalcemii.',
          'Diagnostika: v časné fázi dominuje vysoký osmolální gap (> 10–20 mOsm/kg, podmíněný přítomností nemetabolizovaného alkoholu), který postupně ustupuje a je vystřídán těžkou metabolickou acidózou s vysokým aniontovým gapem (HAGMA) v důsledku hromadění organických kyselin.',
          'Léčba: okamžitá blokáda ADH k zastavení tvorby toxických metabolitů! Lékem volby je fomepizol (specifický kompetitivní inhibitor ADH bez sedativního účinku); alternativou je etanol (má 10–20× vyšší afinitu k ADH než metanol/etylenglykol, cílová hladina v séru 1,0–1,5 ‰). Urgentní hemodialýza je indikována při těžké acidóze (pH < 7,25–7,30), poruše zraku, renálním selhání či vysoké koncentraci alkoholu. Kyselina listová/folinát urychluje odbourávání formiátu u metanolu; thiamin a pyridoxin podporují netoxické dráhy u etylenglykolu.'
        ]
      },
      {
        title: '3. Oxid uhelnatý: tkáňová hypoxie, klam pulzní oxymetrie a O₂',
        refs: ['coGuideline'],
        paragraphs: [
          'Oxid uhelnatý (CO) je bezbarvý plyn bez chuti a zápachu vznikající nedokonalým spalováním uhlíkatých látek (požáry, karmy, výfukové plyny). Jeho afinita k hemoglobinu je přibližně 200–250× vyšší než afinita kyslíku, což vede k tvorbě karboxyhemoglobinu (COHb). CO navíc posouvá disociační křivku hemoglobinu doleva (Haldaneův efekt), což brání uvolňování kyslíku ve tkáních, a váže se na mitochondriální enzymy a myoglobin.',
          'Zásadní diagnostické úskalí: standardní dvou-vlnová prstová pulzní oxymetrie NEROZLIŠÍ karboxyhemoglobin od oxyhemoglobinu! SpO2 měří falešně normální hodnoty (98–100 %) i při smrtelné koncentraci COHb. Diagnózu prokáže pouze spektrofotometrické vyšetření krevních plynů (ko-oxymetrie v ASTRUPu), které změří skutečné procento COHb.',
          'Příznaky: bolest hlavy, nauzea, závratě, slabost, palpitace, zmatenost, kardiopulmonální postižení (ischémie myokardu, arytmie), bezvědomí, křeče a koma. „Třešňové“ zbarvení kůže je nespolehlivý pitevní nález, nikoli časný klinický marker. Hrozí rozvoj opožděného neurologického syndromu (DNS) po týdnech od expozice.',
          'Terapie: okamžité vynesení ze zamořeného prostoru (ochrana zasahujících!) a okamžité podání 100% kyslíku těsnou maskou s rezervoárem nebo po intubaci. Poločas eliminace COHb při dýchání vzduchu je 4–5 hodin; podání 100% O2 jej zkracuje na 60–90 minut.',
          'Hyperbarická oxygenoterapie (HBO, 2,5–3,0 ATA, poločas COHb cca 20–30 minut) je indikována při bezvědomí či křečích, ložiskovém neurologickém deficitu, těhotenství (HbF má extrémní afinitu k CO a hrozí asfyxie plodu), metabolické acidóze či kardiální ischemii, a to nejlépe do 6 hodin od intoxikace.'
        ]
      },
      {
        title: '4. Opioidy a akutní otrava etanolem',
        refs: ['opioidWHO', 'tisPraha'],
        paragraphs: [
          'Předávkování opioidy (heroin, morfin, oxykodon, fentanyl) vede ke stimulaci mí-receptorů v dechovém centru mozkového kmene. Výsledkem je dechový útlum: bradypnoe, apnoe a ztráta citlivosti na hyperkapnii. Dochází k triádě: útlum dýchání, mióza (špendlíkovité zornice; u tramadolu či pethidinu nemusí být vyjádřena) a porucha vědomí až koma.',
          'První prioritou je zprůchodnění dýchacích cest a účinná ventilace samorozpínacím vakem s maskou a kyslíkem! Antidotem je naloxon (čistý kompetitivní antagonista opioidních receptorů). Podává se titrovaně (např. 0,04–0,1 mg i.v. každé 2–3 minuty) s cílem OBNOVIT DOSTATEČNOU SPONTÁNNÍ VENTILACI, nikoli pacienta plně probudit. Neuvážený velký bolus vyvolá prudký abstinenční syndrom, agresivitu, zvracení, tachykardii a riziko nekardiogenního edému plic.',
          'Zásadní riziko: biologický poločas naloxonu je pouze 30–90 minut, zatímco většina opioidů (zejména metadon, retardované tablety a transdermální fentanyl náplasti) má účinek trvající mnoho hodin. Po odeznění naloxonu hrozí relaps dechového útlumu a smrt; nutná je dlouhodobá observace a případně kontinuální infuze naloxonu.',
          'Akutní těžká otrava etanolem: útlum CNS, ataxie, hypotermie a vazodilatace. Zásadním rizikem je zvracení a masivní aspirace do dýchacích cest při bezvědomí a inhibice glukoneogeneze vedoucí k těžké hypoglykemii (zejména u podvyživených pacientů a dětí). Léčba je symptomatická a podpůrná: stabilizovaná poloha či intubace k ochraně dýchacích cest, zahřívání, infuzní rehydratace a měření/korekce glykemie.'
        ]
      },
      {
        title: '5. Psychofarmaka: benzodiazepiny a tricyklická antidepresiva',
        refs: ['tcaToxicology', 'tisPraha'],
        paragraphs: [
          'Benzodiazepiny zvyšují afinitu GABAA receptoru ke kyselině gama-aminomáselné. V monointoxikaci jsou relativně bezpečné: způsobují sedaci, ataxii, dysartrii a spavost; závažný dechový a oběhový útlum vzniká téměř výhradně v kombinaci s alkoholem, opioidy či barbituráty.',
          'Flumazenil je specifický kompetitivní antagonista benzodiazepinů. POUŽÍVAT S MAXIMÁLNÍ OPATRNOSTÍ! Je absolutně kontraindikován u chronických uživatelů benzodiazepinů (vyvolává těžký život ohrožující abstinenční syndrom s refrakterními křečemi) a při smíšených intoxikacích s epileptogenními látkami (tricyklická antidepresiva). Rutinní diagnostické podávání v bezvědomí je dnes zakázáno.',
          'Tricyklická antidepresiva (TCA, dosulepin, amitriptylin) patří k nejnebezpečnějším intoxikacím v intenzivní péči. Mají trojí mechanismus toxicity: blokádu rychlých sodíkových kanálů myokardu, blokádu alfa-1 adrenergních receptorů a centrální i periferní anticholinergní účinek.',
          'Kardiotoxicita TCA se projevuje na EKG rozšířením komplexu QRS > 100–120 ms, prodloužením QTc a prominujícím kmiten R v aVR (≥ 3 mm). Hrozí těžká refrakterní hypotenze a maligní komorové arytmie (komorová tachykardie, fibrilace komor, torsades de pointes) a křeče.',
          'Terapie TCA: při rozšíření QRS > 100 ms, arytmiích nebo hypotenzi je lékem volby 8,4% natrium bikarbonát i.v. (bolus 1–2 mmol/kg, opakovaně k dosažení cílového pH 7,45–7,55). Působí dodáním sodíku, který překonává blokádu Na kanálu, a alkalizací, která zvyšuje vazbu léku na proteiny a snižuje volnou toxickou frakci. Křeče se tlumí benzodiazepiny; hemodialýza je pro obrovský distribuční objem a vazbu na proteiny zcela neúčinná.'
        ]
      }
    ],
    corrections: [
      'Běžná pulzní oxymetrie nerozliší karboxyhemoglobin a oxyhemoglobin; SpO2 u otravy CO je falešně normální.',
      'Flumazenil se nepodává rutinně u bezvědomí nejasného původu; u závislých či smíšené otravy s TCA hrozí fatální křeče.',
      'Naloxon se titruje k obnově spontánního dýchání, ne k plnému probuzení; pro krátký poločas hrozí sekundární zástava dechu.'
    ],
    checks: [
      {
        question: 'Pacient vytažený z hořícího bytu má saturaci na prstovém oxymetru 99 %, ale je somnolentní s bolestí hlavy. Může mít otravu oxidem uhelnatým?',
        answer: 'Ano! Pulzní oxymetr nedokáže odlišit karboxyhemoglobin od oxyhemoglobinu a ukazuje falešně vysoké hodnoty. Nutné je stanovení COHb ko-oxymetrií v krevních plynech.',
        refs: ['coGuideline']
      },
      {
        question: 'Proč se u intoxikace tricyklickými antidepresivy s rozšířením QRS podává 8,4% natrium bikarbonát?',
        answer: 'Dodáním sodíku kompetitivně překonává blokádu rychlých sodíkových kanálů a alkalizací krve (pH 7,45–7,55) zvyšuje vazbu TCA na plazmatické bílkoviny, čímž snižuje arytmogenní volnou frakci.',
        refs: ['tcaToxicology']
      },
      {
        question: 'Proč je nutné pacienta po úspěšném probuzení z opioidního předávkování naloxonem ještě několik hodin sledovat v nemocnici?',
        answer: 'Protože biologický poločas naloxonu (30–90 minut) je mnohem kratší než účinek většiny opioidů. Po odeznění naloxonu hrozí relaps dechového útlumu.',
        refs: ['opioidWHO']
      }
    ]
  }
};
