// cases.js - Clinical cases data for Urgentní příjem simulation game

const CASES = {
  "1": {
    id: "1",
    level: 1,
    title: "Akutní infarkt myokardu spodní stěny (STEMI)",
    name: "František Novák",
    age: 45,
    sex: "Muž",
    mainComplaint: "Bolest na hrudi, dušnost",
    complaintDetail: "Pacient uvádí náhlý začátek svíravé bolesti s vyzařováním do levé paže a zadní stěny krku. Trvá cca 20 minut, doprovázeno studeným potem.",
    history: ["ICHS", "Hypertenze", "Nikotinismus (20 cigaret denně)"],
    allergies: ["PENICILIN", "JÓD"],
    triageClass: "2", // Kritický (can be selected by user)
    vitals: {
      tf: 110,
      tk_sys: 160,
      tk_dia: 95,
      spo2: 92,
      gcs: 15,
      temp: 37.2,
      rr: 22,
    },
    secretDiagnosis: "Akutní infarkt myokardu spodní stěny (STEMI)",
    secretDiagnosisCode: "I21.1",
    labsResult: {
      ko: "KO: Leukocytóza 12.4 x10^9/l, Erytrocyty 4.8 x10^12/l, Hb 145 g/l, Trombocyty 250 x10^9/l.",
      biochem: "Biochemie STATIM: Troponin I: 450 ng/l (norma <14) - SILNĚ POZITIVNÍ, CK-MB: 4.2 ug/l (norma <2.5), Urea: 6.2 mmol/l, Kreatinin: 88 umol/l, CRP: 5.2 mg/l, Draslík: 3.9 mmol/l, Sodík: 139 mmol/l.",
      coag: "Koagulace: INR 1.05, APTT 32 s, Fibrinogen 3.1 g/l.",
      mochem: "Moč chemicky: Negativní.",
      abr: "Astrup (ABR): pH 7.39, pCO2 5.1 kPa, pO2 9.5 kPa, HCO3- 24.2 mmol/l, BE 0.1 mmol/l, Saturace 92%."
    },
    imagingResult: {
      ekg: "12svodové EKG: Sinusová tachykardie 110/min, ST elevace 3 mm ve svodech II, III, aVF s recipročními depresemi v I, aVL.",
      rtg: "RTG Srdce+Plíce: Srdeční stín nezvětšen, plicní křídla bez městnání či ložiskových změn.",
      echo: "Echokardiografie: Hypokineze dolní stěny levé komory, EF levé komory 45-50%, bez chlopenních vad.",
      ct: "CT Pulmonální angiografie: Bez známek plicní embolie."
    }
  },
  "2": {
    id: "2",
    level: 2,
    title: "Akutní plicní embolie se středním rizikem",
    name: "Alena Dvořáková",
    age: 52,
    sex: "Žena",
    mainComplaint: "Náhlý kolaps, dušnost a pleurální bolest na hrudi",
    complaintDetail: "Byla přivezena RZP po náhlém kolapsu při vstaní z postele. Nyní stěžuje na výraznou dušnost, ostrý píchavý tlak na pravé straně hrudníku zhoršující se při nádechu, a suchý dráždivý kašel.",
    history: ["Hormonální antikoncepce (HAK)", "Varixy dolních končetin", "Sádrová fixace pravého bérce pro zlomeninu před 3 týdny"],
    allergies: ["JÓD"],
    triageClass: "2", // Kritický
    vitals: {
      tf: 124,
      tk_sys: 105,
      tk_dia: 65,
      spo2: 88,
      gcs: 14,
      temp: 36.8,
      rr: 26,
    },
    secretDiagnosis: "Akutní embolizace plicnice",
    secretDiagnosisCode: "I26.9",
    labsResult: {
      ko: "KO: Leukocyty 9.8 x10^9/l, Hb 132 g/l, Trombocyty 290 x10^9/l.",
      biochem: "Biochemie STATIM: Troponin I: 55 ng/l (lehce zvýšený), D-Dimery: 3450 ng/ml (norma <500) - EXTRÉMNĚ POZITIVNÍ, CRP: 15.1 mg/l, Kreatinin: 75 umol/l, Urea: 5.1 mmol/l.",
      coag: "Koagulace: INR 1.01, APTT 30 s.",
      mochem: "Moč chemicky: Negativní.",
      abr: "Astrup (ABR): pH 7.46 (respirační alkalóza), pCO2 4.1 kPa (hypokapnie), pO2 7.8 kPa (hypoxemie), HCO3- 23.5 mmol/l, BE 0.8 mmol/l."
    },
    imagingResult: {
      ekg: "12svodové EKG: Sinusová tachykardie 124/min, nespecifické změny ST-T, přítomen S1Q3T3 vzorec (hluboké S v I, kmit Q v III a negativní T v III), inkompletní blokáda pravého raménka (iRBBB).",
      rtg: "RTG Srdce+Plíce: Mírné projasnění vpravo (Westermarkovo znamení), bez pleurálního výpotku.",
      echo: "Echokardiografie u lůžka (Bedside): Dilatace pravé komory (RV/LV poměr 1.1), oploštění mezikomorového septa, mírná trikuspidální regurgitace s odhadem gradientu 40 mmHg. Známky přetížení pravé komory.",
      ct: "CT Pulmonální angiografie (Upozornění: Alergie na JÓD!): Po premedikaci methylprednisolonem a dithiadenem: Prokázán masivní embolus v pravé plicní tepně zasahující do lobárních větví."
    }
  },
  "3": {
    id: "3",
    level: 3,
    title: "Masivní polytrauma s hemoragickým šokem",
    name: "Jan Kučera",
    age: 32,
    sex: "Muž",
    mainComplaint: "Polytrauma po nehodě na motocyklu",
    complaintDetail: "Mladý motorkář po střetu s autem ve vysoké rychlosti. Přivezen v bezvědomí, zaveden krční límec. Viditelná deformita pánve, tržné rány na stehně s masivním zevním krvácením, asymetrie hrudníku, dýchání povrchní.",
    history: ["Dosud zdráv", "Aktivní sportovec"],
    allergies: ["Bez známých alergií"],
    triageClass: "1", // Resuscitace
    vitals: {
      tf: 138,
      tk_sys: 82,
      tk_dia: 40,
      spo2: 86,
      gcs: 9,
      temp: 35.5,
      rr: 28,
    },
    secretDiagnosis: "Polytrauma, hemoragický šok, nestabilní zlomenina pánve, hemotorax vpravo",
    secretDiagnosisCode: "T07",
    labsResult: {
      ko: "KO: Hemoglobin 85 g/l (značný pokles), Erytrocyty 2.9 x10^12/l, Hematokrit 0.25, Leukocyty 14.5 x10^9/l, Trombocyty 160 x10^9/l.",
      biochem: "Biochemie STATIM: Urea: 7.5 mmol/l, Kreatinin: 120 umol/l, Laktát: 4.8 mmol/l (těžká tkáňová hypoxie), Troponin I: 18 ng/l (v normě). Krevní skupina: B Rh negativní.",
      coag: "Koagulace: INR 1.45 (traumatická koagulopatie), APTT 45 s, Fibrinogen 1.4 g/l (kritický deficit).",
      mochem: "Moč chemicky: Hematurie.",
      abr: "Astrup (ABR): pH 7.24 (metabolická acidóza), pCO2 4.9 kPa, pO2 7.1 kPa, HCO3- 16.8 mmol/l, BE -8.5 mmol/l, laktát 4.8."
    },
    imagingResult: {
      ekg: "12svodové EKG: Sinusová tachykardie 138/min, bez ložiskových změn.",
      rtg: "RTG Pánve a Hrudníku: Zlomenina pánve typu 'otevřená kniha' s diastázou symfýzy 4 cm. RTG hrudníku vykazuje fluidotorax vpravo (hemotorax) s kolapsem plíce, zlomeniny 4.-7. žebra vpravo.",
      echo: "FAST Ultrasonografie (Trauma USG): Volná tekutina v hepatorenálním prostoru (Morisonova kapsa) - pozitivní, a masivní anechogenní zóna v pravé pleurální dutině (hemotorax). Volná tekutina v pánvi.",
      ct: "CT Celotělové (Pan-scan): CT hlavy bez krvácení. Hrudník: hemotorax vpravo, kontuze plicní. Břicho a pánev: hematom retroperitonea z pánevního plexus venosus, aktivní arteriální krvácení z a. iliaca interna vpravo."
    }
  },
  "4": {
    id: "4",
    level: 1,
    title: "Akutní subglotická laryngitida (Croup)",
    name: "Tobiášek Veselý",
    age: 3,
    sex: "Chlapec",
    mainComplaint: "Štěkavý kašel, inspirační stridor a ztížené dýchání",
    complaintDetail: "Matka uvádí, že dítě šlo spát zdravé, jen s lehkou rýmou. Kolem půlnoci se probudilo s drsným, štěkavým kašlem a sípáním při nádechu. Je neklidné, pláče, což zhoršuje dušnost. Má zatahování podžebří a jugula.",
    history: ["Běžná dětská onemocnění, očkován řádně"],
    allergies: ["Bez známých alergií"],
    triageClass: "2",
    vitals: {
      tf: 142,
      tk_sys: 95,
      tk_dia: 60,
      spo2: 91,
      gcs: 15,
      temp: 37.8,
      rr: 36
    },
    secretDiagnosis: "Akutní subglotická laryngitida (Croup)",
    secretDiagnosisCode: "J05.0",
    labsResult: {
      ko: "KO: Leukocyty 10.5 x10^9/l (mírná leukocytóza), Hb 125 g/l, Trombocyty 310 x10^9/l.",
      biochem: "Biochemie: CRP: 8.5 mg/l (virová etiologie odpovídá nízkému CRP), Draslík: 4.2 mmol/l, Sodík: 140 mmol/l, Glykémie: 5.6 mmol/l.",
      coag: "Koagulace: V normě (INR 1.0, APTT 30 s).",
      mochem: "Moč: Negativní.",
      abr: "Astrup (ABR): pH 7.41, pCO2 5.0 kPa, pO2 8.4 kPa (lehká hypoxémie), HCO3- 24.0 mmol/l, BE 0.2 mmol/l."
    },
    imagingResult: {
      ekg: "EKG: Sinusová tachykardie 142/min, bez patologických změn.",
      rtg: "RTG krku / hrudníku: Zužování subglotického prostoru (klasické znamení 'kostelní věže' / steeple sign), plíce bez infiltrací.",
      echo: "Echokardiografie: Není indikována u akutní laryngitidy, srdce strukturálně bez patologie.",
      ct: "CT krku: Není indikováno, riziko zbytečné sedace u dítěte."
    }
  },
  "5": {
    id: "5",
    level: 3,
    title: "Meningokoková sepse a meningitida",
    name: "Eliška Novotná",
    age: 8,
    sex: "Dívka",
    mainComplaint: "Horečka, úporná bolest hlavy, zvracení, fialové skvrnky na kůži",
    complaintDetail: "Dítě je schvácené, spavé, těžko komunikuje. Trpí silnou bolestí hlavy, světloplachostí a opakovně zvrací. Matka si před hodinou všimla drobných červenofialových skvrnek na stehnech a břiše, které neblednou při zatlačení skleničkou.",
    history: ["Dosud zdravá, neočkovaná proti meningokoku typu B"],
    allergies: ["Bez známých alergií"],
    triageClass: "1",
    vitals: {
      tf: 155,
      tk_sys: 80,
      tk_dia: 42,
      spo2: 90,
      gcs: 11,
      temp: 39.9,
      rr: 32
    },
    secretDiagnosis: "Meningokoková sepse a meningitida",
    secretDiagnosisCode: "A39.0",
    labsResult: {
      ko: "KO: Leukocytóza 24.5 x10^9/l s posunem doleva, Hemoglobin 112 g/l, Trombocytopenie 85 x10^9/l (hrozící DIC).",
      biochem: "Biochemie STATIM: CRP: 185 mg/l - VYSOKÉ, Laktát: 5.4 mmol/l (závažný laktátový šok), Kreatinin: 110 umol/l, Urea: 8.2 mmol/l, Glykémie: 3.2 mmol/l.",
      coag: "Koagulace: INR 1.65 (prodlouženo), APTT 52 s, Fibrinogen 1.1 g/l (spotřební koagulopatie), D-dimery: 4200 ng/ml.",
      mochem: "Moč: Bílkovina +, krev +.",
      abr: "Astrup (ABR): pH 7.21 (těžká metabolická acidóza s laktátem), pCO2 3.8 kPa, pO2 7.5 kPa, HCO3- 14.5 mmol/l, BE -11.5 mmol/l."
    },
    imagingResult: {
      ekg: "EKG: Sinusová tachykardie 155/min, bez ložiskové ischemie.",
      rtg: "RTG Hrudníku: Bez ložiskových změn v plicním parenchymu.",
      echo: "Echokardiografie: Hyperdynamická levá komora, EF 70%, bez chlopenních vegetací.",
      ct: "CT Mozku: Bez nitrolebního krvácení, mírný edém mozku, známky meningitidy."
    }
  },
  "6": {
    id: "6",
    level: 2,
    title: "Anafylaktický šok po bodnutí vosou",
    name: "Jakub Král",
    age: 28,
    sex: "Muž",
    mainComplaint: "Dušnost, otok obličeje, celotělová kopřivka a kolaps",
    complaintDetail: "Pacienta na zahradě bodla vosa do krku. Během 10 minut se u něj rozvinul masivní otok rtů, jazyka a krku, sípání, svědivá vyrážka po celém těle a následně zkolaboval na zem. Manželka zavolala RZP, na místě podán Epipen, na urgent přivezen stále dušný s poklesem tlaku.",
    history: ["Alergie na bodnutí blanokřídlým hmyzem, astma bronchiale"],
    allergies: ["VOSÍ JED"],
    triageClass: "1",
    vitals: {
      tf: 132,
      tk_sys: 75,
      tk_dia: 40,
      spo2: 85,
      gcs: 13,
      temp: 36.5,
      rr: 30
    },
    secretDiagnosis: "Anafylaktický šok po bodnutí hmyzem",
    secretDiagnosisCode: "T78.2",
    labsResult: {
      ko: "KO: Leukocyty 11.2 x10^9/l, Hb 148 g/l, Trombocyty 220 x10^9/l.",
      biochem: "Biochemie: CRP: 2.1 mg/l, Kreatinin: 82 umol/l, Troponin I: 12 ng/l, Draslík: 4.1 mmol/l. IgE specifické na vosí jed: Extrémně zvýšené.",
      coag: "Koagulace: INR 1.02, APTT 31 s.",
      mochem: "Moč: Negativní.",
      abr: "Astrup (ABR): pH 7.28 (smíšená acidóza), pCO2 6.1 kPa (hyperkapnie z dechové obstrukce), pO2 6.8 kPa (těžká hypoxémie), HCO3- 19.8 mmol/l, BE -5.2 mmol/l."
    },
    imagingResult: {
      ekg: "EKG: Sinusová tachykardie 132/min, nespecifické oploštění vln T.",
      rtg: "RTG Hrudníku: Hyperinflace plic (obraz astmatického záchvatu), bez ložiskových změn.",
      echo: "Echokardiografie: Bez chlopenních vad, kontraktilita dobrá, dolní dutá žíla kolabuje (relativní hypovolemie při redistribuci tekutin).",
      ct: "CT Krku: Masivní edém hrtanu a měkkých tkání krku, výrazné zúžení dýchacích cest."
    }
  },
  "7": {
    id: "7",
    level: 2,
    title: "Akutní pankreatitida s počínající peritonitidou",
    name: "Hana Součková",
    age: 39,
    sex: "Žena",
    mainComplaint: "Náhlá krutá bolest v nadbřišku, zvracení, schvácenost",
    complaintDetail: "Pacientka uvádí náhlý vznik extrémní bolesti v epigastriu po včerejší oslavě narozenin (tučné jídlo, alkohol). Bolest vyzařuje pásovitě do zad, opakovaně zvrací žluč, nemůže najít úlevovou polohu. Břicho je difúzně citlivé, stažené, přítomna palpační bolestivost.",
    history: ["Cholecystoliáza (žlučníkové kameny), hypertriglyceridémie"],
    allergies: ["JÓD"],
    triageClass: "3",
    vitals: {
      tf: 112,
      tk_sys: 110,
      tk_dia: 70,
      spo2: 95,
      gcs: 15,
      temp: 38.4,
      rr: 20
    },
    secretDiagnosis: "Akutní biliární pankreatitida",
    secretDiagnosisCode: "K85.9",
    labsResult: {
      ko: "KO: Leukocytóza 16.8 x10^9/l, Hb 155 g/l (hemokoncentrace), Trombocyty 280 x10^9/l.",
      biochem: "Biochemie STATIM: Amyláza v séru: 1450 U/l (norma <100) - EXTRÉMNĚ ZVÝŠENÁ, Lipáza v séru: 2200 U/l (norma <60) - SILNĚ POZITIVNÍ, CRP: 110 mg/l, Bilirubin: 42 umol/l, ALT: 2.1 ukat/l, AST: 1.8 ukat/l, Triglyceridy: 8.5 mmol/l.",
      coag: "Koagulace: INR 1.15, APTT 34 s.",
      mochem: "Moč: Zvýšená amyláza v moči (6800 U/l).",
      abr: "Astrup (ABR): pH 7.37, pCO2 4.8 kPa, pO2 10.2 kPa, HCO3- 22.1 mmol/l, BE -2.1 mmol/l."
    },
    imagingResult: {
      ekg: "EKG: Sinusová tachykardie 112/min, bez známek ischemie.",
      rtg: "RTG břicha ve stoje: Bez volného plynu pod bránicí (vylučuje perforaci gastroduodena), přítomen meteorismus a 'strážný kličkový' stín v epigastriu.",
      echo: "Sonografie břicha: Prosáknutí a zvětšení hlavy pankreatu, kolekce volné tekutiny peripankreaticky, cholecystoliáza - mnohočetné drobné konkrementy ve žlučníku, mírná dilatace choledochu (7mm).",
      ct: "CT Břicha (Upozornění: Alergie na JÓD!): S premedikací antihistaminiky: Akutní pankreatitida s peripankreatickými tekutinovými kolekcemi (Balthazar C-D), bez prokázané nekrózy parenchymu."
    }
  },
  "8": {
    id: "8",
    level: 3,
    title: "Úmyslná intoxikace tricyklickými antidepresivy",
    name: "Martin Dvořák",
    age: 21,
    sex: "Muž",
    mainComplaint: "Porucha vědomí, křeče a arytmie",
    complaintDetail: "Pacient nalezen matkou v pokoji ležící na zemi, vedle něj prázdné blistry od Amitriptylinu (cca 30 tablet po 50mg). Při příjezdu RZP byl v bezvědomí, prodělal jeden generalizovaný tonicko-klonický záchvat křečí trvající 2 minuty. Nyní reaguje pouze na bolestivý podnět hlubokým sténáním.",
    history: ["Depresivní porucha, psychiatrická péče, v minulosti jeden pokus o sebepoškození"],
    allergies: ["Bez známých alergií"],
    triageClass: "2",
    vitals: {
      tf: 128,
      tk_sys: 85,
      tk_dia: 50,
      spo2: 91,
      gcs: 8,
      temp: 37.6,
      rr: 10
    },
    secretDiagnosis: "Úmyslná intoxikace tricyklickými antidepresivy",
    secretDiagnosisCode: "T43.0",
    labsResult: {
      ko: "KO: V normě (Leukocyty 8.2 x10^9/l, Hb 142 g/l, Tr 210 x10^9/l).",
      biochem: "Biochemie: Kreatinin: 95 umol/l, Laktát: 3.1 mmol/l, Draslík: 3.6 mmol/l, Sodík: 138 mmol/l, Glykémie: 5.4 mmol/l. Toxikologický screening z moči: Pozitivní na Tricyklická antidepresiva (TCA).",
      coag: "Koagulace: V normě (INR 1.05, APTT 32 s).",
      mochem: "Moč: TCA pozitivní.",
      abr: "Astrup (ABR): pH 7.25 (respirační a metabolická acidóza), pCO2 6.5 kPa (retence CO2), pO2 8.1 kPa, HCO3- 20.2 mmol/l, BE -6.1 mmol/l."
    },
    imagingResult: {
      ekg: "EKG: Sinusová tachykardie 128/min, extrémní rozšíření komplexu QRS (140 ms), prodloužení intervalu QTc (510 ms), hluboké S ve svodech I a aVL (TCA toxicita).",
      rtg: "RTG Hrudníku: Bez patologického nálezu.",
      echo: "Echokardiografie: Snížená systolická funkce obou komor, EF levé komory 40%, bez chlopenních vad.",
      ct: "CT Mozku: Bez strukturálních patologií, bez známek krvácení či ložiskových změn."
    }
  },
  "9": {
    id: "9",
    level: 1,
    title: "Komplikované febrilní křeče u batolete",
    name: "Honzík Novotný",
    age: 1.5,
    sex: "Chlapec",
    mainComplaint: "Generalizované křeče celého těla, horečka a porucha vědomí",
    complaintDetail: "Matka uvádí, že osmnáctiměsíční dítě mělo od rána rýmu a teplotu 38.5 °C. Před 10 minutami doma náhle ztuhlo, začalo škubat všemi končetinami, stočilo oči v sloup a přestalo reagovat. Záchvat trval přes 5 minut. RZP podala rektální Diazepam desitin tube 5mg. Nyní na urgentu křeče pominuly, ale chlapec je v hlubokém postiktálním útlumu (GCS 10) a má horečku 39.4 °C.",
    history: ["Běžná dětská onemocnění, strýc v dětství febrilní křeče"],
    allergies: ["Bez známých alergií"],
    triageClass: "2",
    vitals: {
      tf: 135,
      tk_sys: 90,
      tk_dia: 55,
      spo2: 92,
      gcs: 10,
      temp: 39.4,
      rr: 24
    },
    secretDiagnosis: "Komplikované febrilní křeče",
    secretDiagnosisCode: "R56.0",
    labsResult: {
      ko: "KO: Leukocytóza 14.8 x10^9/l (častá u horečky), Hemoglobin 122 g/l, Trombocyty 290 x10^9/l.",
      biochem: "Biochemie: CRP: 48 mg/l (mírně zvýšené, svědčí pro infekt), Draslík: 4.0 mmol/l, Sodík: 136 mmol/l, Glykémie: 4.8 mmol/l (vylučuje hypoglykemickou genezi křečí).",
      coag: "Koagulace: V normě (INR 1.0, APTT 30 s).",
      mochem: "Moč chemicky: Negativní nález (vylučuje uroinfekt jako zdroj horečky).",
      abr: "Astrup (ABR): pH 7.32 (lehká metabolická laktátová acidóza po křečích), pCO2 5.3 kPa, pO2 8.6 kPa, HCO3- 20.1 mmol/l, BE -4.5 mmol/l, laktát 3.1 mmol/l."
    },
    imagingResult: {
      ekg: "EKG: Sinusová tachykardie 135/min, bez patologických změn.",
      rtg: "RTG hrudníku: Plicní parenchym bez infiltrací či ložiskových změn.",
      echo: "Echokardiografie: Není indikována u febrilních křečí.",
      ct: "CT Mozku: Kontraindikováno! U febrilních křečí bez ložiskového nálezu či traumatu hlavy je CT mozku zbytečnou radiační zátěží. Neuroinfekce či strukturální změny se řeší klinickým vyšetřením, lumbální punkcí či MRI."
    }
  },
  "10": {
    id: "10",
    level: 2,
    title: "Těžký akutní astmatický stav (Status asthmaticus) u dítěte",
    name: "Sofinka Marešová",
    age: 6,
    sex: "Dívka",
    mainComplaint: "Těžká klidová dušnost, slyšitelné pískání, vyčerpání",
    complaintDetail: "Šestiletá dívka s astmatem trpí záchvatem dušnosti od odpoledne. Doma matka podala celkem 6 dávek Ventolinu inhalačně bez většího efektu. Nyní je neklidná, mluví pouze v jednotlivých slovech, má výrazné zatahování jugula, podžebří a alární kmit. Poslechově je dýchání velmi oslabené s oboustrannými pískoty (fenomén 'tichých plic' / silent chest, varovné znamení blížícího se udušení).",
    history: ["Průduškové astma (středně těžké, užívá Ventolin a Flixotide), alergie na prach a roztoče"],
    allergies: ["Bez známých lékových alergií"],
    triageClass: "2",
    vitals: {
      tf: 148,
      tk_sys: 105,
      tk_dia: 65,
      spo2: 89,
      gcs: 15,
      temp: 36.9,
      rr: 42
    },
    secretDiagnosis: "Status asthmaticus",
    secretDiagnosisCode: "J46",
    labsResult: {
      ko: "KO: Leukocyty 11.1 x10^9/l, mírná eosinofilie (vztah k astmatu), Hb 130 g/l, Trombocyty 255 x10^9/l.",
      biochem: "Biochemie: CRP: 12 mg/l, Draslík: 3.5 mmol/l (hraniční draslík - riziko poklesu po opakovaných inhalacích beta2-mimetik!), Sodík: 139 mmol/l, Glykémie: 5.8 mmol/l.",
      coag: "Koagulace: V normě (INR 1.0, APTT 29 s).",
      mochem: "Moč chemicky: Negativní.",
      abr: "Astrup (ABR): pH 7.31 (počínající respirační acidóza v důsledku dechového vyčerpání a retence CO2), pCO2 6.2 kPa (hyperkapnie - kritické znamení vyčerpání dýchacího aparátu!), pO2 7.2 kPa (výrazná hypoxémie), HCO3- 23.8 mmol/l, BE -1.5 mmol/l."
    },
    imagingResult: {
      ekg: "EKG: Výrazná sinusová tachykardie 148/min, známky zatížení pravého srdce (P pulmonale).",
      rtg: "RTG hrudníku: Výrazná hyperinflace obou plicních křídel, oploštění bránice (obraz astmatického záchvatu), zvýšená bronchovaskulární kresba perihilózně. Žádný pneumotorax či ložiskový zápal plic.",
      echo: "Echokardiografie: Bez strukturální vady, hyperdynamická kontraktilita, bez přetížení pravé komory.",
      ct: "CT hrudníku: Není indikováno u nekomplikovaného astmatického záchvatu z důvodu zbytečné zátěže."
    }
  },
  "11": {
    id: "11",
    level: 3,
    title: "Akutní epiglotitida (Kritický dětský stav)",
    name: "Adámek Kučera",
    age: 4,
    sex: "Chlapec",
    mainComplaint: "Extrémní bolest v krku, neschopnost polykat (slintání), inspirační stridor",
    complaintDetail: "Čtyřletý chlapec s rychlou progresí horečky a těžké dušnosti během několika hodin. Na urgentním příjmu sedí v tzv. tripodální poloze (v předklonu, s nataženým krkem a pootevřenými ústy), masivně mu vytékají sliny z úst (neschopnost polykat pro extrémní bolestivost) a mluví tichým, 'knedlíkovým' hlasem. Přítomen tichý inspirační stridor.",
    history: ["Dítě nebylo očkováno proti Haemophilus influenzae typu b (rodiče odmítli Hexavakcínu)"],
    allergies: ["Bez známých alergií"],
    triageClass: "1",
    vitals: {
      tf: 155,
      tk_sys: 95,
      tk_dia: 60,
      spo2: 90,
      gcs: 14,
      temp: 39.7,
      rr: 35
    },
    secretDiagnosis: "Akutní epiglotitida",
    secretDiagnosisCode: "J05.1",
    labsResult: {
      ko: "KO: Výrazná bakteriální leukocytóza 18.5 x10^9/l s výrazným posunem doleva, Hb 120 g/l, Trombocyty 340 x10^9/l.",
      biochem: "Biochemie STATIM: CRP: 145 mg/l (velmi vysoká bakteriální aktivita), prokalcitonin: 3.2 ug/l, Draslík: 4.1 mmol/l, Sodík: 138 mmol/l.",
      coag: "Koagulace: V normě (INR 1.05, APTT 31 s).",
      mochem: "Moč: Negativní.",
      abr: "Astrup (ABR): pH 7.34, pCO2 5.2 kPa, pO2 7.8 kPa (hypoxémie), HCO3- 22.0 mmol/l, BE -3.0 mmol/l."
    },
    imagingResult: {
      ekg: "EKG: Sinusová tachykardie 155/min, bez dalších změn.",
      rtg: "RTG krku boční: Výrazné prosáknutí a zduření příklopky hrtanové (epiglotis) - tzv. 'znamení palce' (thumb sign), kritické zúžení vchodu do hrtanu. Upozornění: Jakákoliv manipulace s krkem či polohování dítěte na záda je přísně zakázáno!",
      echo: "Echokardiografie: Není indikována.",
      ct: "CT krku: Absolutně kontraindikováno! Jakýkoliv zbytečný stres, transport či manipulace s hrdlem hrozí reflexní laryngeální obstrukcí (laryngospasmem) a okamžitým udušením."
    }
  },
  "12": {
    id: "12",
    level: 3,
    title: "Kardiogenní šok při extenzivním infarktu myokardu (STEMI)",
    name: "Josef Horák",
    age: 68,
    sex: "Muž",
    mainComplaint: "Extrémní dušnost, studený lepkavý pot, zmatenost, slabost",
    complaintDetail: "Pacient s narůstající pálivou bolestí za hrudní kostí od včerejšího večera (nikam nevolal). RZP ho přiváží v těžkém kardiogenním šoku. Je bledý, studeně opocený, na končetinách má mramorovanou kůži. Je mírně zmatený z hypoperfúze mozku. Poslechově na plicích slyšíte oboustranně vlhké chrápky do poloviny polí svědčící pro závažný plicní edém.",
    history: ["Arteriální hypertenze, diabetes mellitus 2. typu na inzulínu, těžká obezita, hypercholesterolemie"],
    allergies: ["Bez známých alergií"],
    triageClass: "1",
    vitals: {
      tf: 122,
      tk_sys: 78,
      tk_dia: 45,
      spo2: 83,
      gcs: 13,
      temp: 36.2,
      rr: 32
    },
    secretDiagnosis: "Kardiogenní šok při akutním infarktu myokardu s plicném edémem",
    secretDiagnosisCode: "R57.0",
    labsResult: {
      ko: "KO: Leukocytóza 15.1 x10^9/l, Hb 138 g/l, Trombocyty 220 x10^9/l.",
      biochem: "Biochemie STATIM: Troponin I: 5800 ng/l (extrémní poškození myokardu) - EXTRÉMNĚ POZITIVNÍ, CK-MB: 48 ug/l, Kreatinin: 165 umol/l (počínající renální selhávání při šoku), Draslík: 4.8 mmol/l, Sodík: 137 mmol/l, Laktát: 4.2 mmol/l (těžký tkáňový šok).",
      coag: "Koagulace: INR 1.10, APTT 34 s.",
      mochem: "Moč: V normě.",
      abr: "Astrup (ABR): pH 7.22 (smíšená metabolicko-respirační acidóza z plicního edému a šoku), pCO2 5.9 kPa, pO2 6.1 kPa (závažná hypoxie), HCO3- 17.5 mmol/l, BE -8.2 mmol/l, laktát 4.2."
    },
    imagingResult: {
      ekg: "12svodové EKG: Sinusová tachykardie 122/min, masivní ST elevace 5 mm ve svodech V1, V2, V3, V4, V5 (extenzivní přední STEMI), reciproční deprese ve II, III, aVF.",
      rtg: "RTG Hrudníku: Výrazné městnání v malém oběhu s motýlovitým zastřením kolem hilů (alveolární plicní edém), srdeční stín je výrazně zvětšený doleva.",
      echo: "Bedside Echokardiografie: Těžká difúzní porucha kinetiky levé komory (hypokineze až akineze přední stěny a hrotu), ejekční frakce levé komory kriticky snížena na 20-25%. Známky plicní hypertenze, dilatace levé síně. Bez mechanických komplikací (ruptura septa či papilárního svalu nezjištěna).",
      ct: "CT vyšetření: Kontraindikováno! Pacient je oběhově extrémně nestabilní pro transport na CT, hrozí okamžitá zástava oběhu."
    }
  },
  "13": {
    id: "13",
    level: 2,
    title: "Hyperakutní cévní mozková příhoda v časném okně (iCMP)",
    name: "Ludmila Černá",
    age: 72,
    sex: "Žena",
    mainComplaint: "Náhlé ochrnutí levé poloviny těla, nesrozumitelná řeč",
    complaintDetail: "Pacientka byla nalezena dcerou ležící na zemi před 45 minutami. Je při vědomí, ale vykazuje těžkou dysartrii (nesrozumitelná řeč), pokleslý levý ústní koutek, levou ruku nezvedne vůbec (plegie) a levá dolní končetina je těžce paretická. Náhlý vznik příznaků před přibližně 1 hodinou. Orientační NIHSS skóre odhadnuto na 16 (těžký neurologický deficit).",
    history: ["Fibrilace síní (neužívá antikoagulancia pro dřívější špatnou snášenlivost), arteriální hypertenze"],
    allergies: ["Bez známých alergií"],
    triageClass: "2",
    vitals: {
      tf: 92,
      tk_sys: 175,
      tk_dia: 95,
      spo2: 96,
      gcs: 14,
      temp: 36.6,
      rr: 16
    },
    secretDiagnosis: "Hyperakutní ischemická cévní mozková příhoda",
    secretDiagnosisCode: "I63.3",
    labsResult: {
      ko: "KO: Leukocyty 7.5 x10^9/l, Hemoglobin 135 g/l, Trombocyty 210 x10^9/l.",
      biochem: "Biochemie STATIM: CRP: 4.2 mg/l, Kreatinin: 90 umol/l, Draslík: 4.1 mmol/l, Sodík: 141 mmol/l, Glykémie: 6.8 mmol/l (klíčové pro vyloučení hypoglykémie jako imitace mrtvice!).",
      coag: "Koagulace STATIM: INR 1.05 (vylučuje účinnou warfarinizaci), APTT 31 s.",
      mochem: "Moč chemicky: V normě.",
      abr: "Astrup (ABR): pH 7.41, pCO2 5.0 kPa, pO2 12.1 kPa, HCO3- 24.2 mmol/l, BE 0.1 mmol/l."
    },
    imagingResult: {
      ekg: "EKG: Fibrilace síní s frekvencí komor 92/min, bez akutních ischemických změn na ST-T.",
      rtg: "RTG Hrudníku: Srdeční stín přiměřené velikosti, plice bez ložiskových zánětlivých změn.",
      echo: "Echokardiografie: Není urgentně indikována u akutní cévní mozkové příhody.",
      ct: "CT Mozku: Nativní CT mozku vyloučilo intrakraniální krvácení i ložiskovou expanzi (tumor). Je přítomno časné setření struktury kůry a podkoří v oblasti inzuly vpravo a hyperdenzní arteria cerebri media vpravo (znamení akutního trombu). Pacientka splňuje kritéria pro systémovou trombolýzu!"
    }
  }
};

module.exports = { CASES };
