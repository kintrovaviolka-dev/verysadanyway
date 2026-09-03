var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// server.ts
var import_express = __toESM(require("express"), 1);
var import_path = __toESM(require("path"), 1);
var import_dotenv = __toESM(require("dotenv"), 1);
var import_genai = require("@google/genai");
var import_vite = require("vite");
import_dotenv.default.config();
var PORT = 3e3;
var ai = null;
function getGeminiClient() {
  if (!ai) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      console.warn("GEMINI_API_KEY environment variable is not defined. Using rule-based fallback clinical engine.");
      throw new Error("GEMINI_API_KEY is missing");
    }
    ai = new import_genai.GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build"
        }
      }
    });
  }
  return ai;
}
var CASES = {
  "1": {
    id: "1",
    level: 1,
    title: "Akutn\xED infarkt myokardu spodn\xED st\u011Bny (STEMI)",
    name: "Franti\u0161ek Nov\xE1k",
    age: 45,
    sex: "Mu\u017E",
    mainComplaint: "Bolest na hrudi, du\u0161nost",
    complaintDetail: "Pacient uv\xE1d\xED n\xE1hl\xFD za\u010D\xE1tek sv\xEDrav\xE9 bolesti s vyza\u0159ov\xE1n\xEDm do lev\xE9 pa\u017Ee a zadn\xED st\u011Bny krku. Trv\xE1 cca 20 minut, doprov\xE1zeno studen\xFDm potem.",
    history: ["ICHS", "Hypertenze", "Nikotinismus (20 cigaret denn\u011B)"],
    allergies: ["PENICILIN", "J\xD3D"],
    triageClass: "2",
    // Kritický (can be selected by user)
    vitals: {
      tf: 110,
      tk_sys: 160,
      tk_dia: 95,
      spo2: 92,
      gcs: 15,
      temp: 37.2,
      rr: 22
    },
    secretDiagnosis: "Akutn\xED infarkt myokardu spodn\xED st\u011Bny (STEMI)",
    secretDiagnosisCode: "I21.1",
    labsResult: {
      ko: "KO: Leukocyt\xF3za 12.4 x10^9/l, Erytrocyty 4.8 x10^12/l, Hb 145 g/l, Trombocyty 250 x10^9/l.",
      biochem: "Biochemie STATIM: Troponin I: 450 ng/l (norma <14) - SILN\u011A POZITIVN\xCD, CK-MB: 4.2 ug/l (norma <2.5), Urea: 6.2 mmol/l, Kreatinin: 88 umol/l, CRP: 5.2 mg/l, Drasl\xEDk: 3.9 mmol/l, Sod\xEDk: 139 mmol/l.",
      coag: "Koagulace: INR 1.05, APTT 32 s, Fibrinogen 3.1 g/l.",
      mochem: "Mo\u010D chemicky: Negativn\xED.",
      abr: "Astrup (ABR): pH 7.39, pCO2 5.1 kPa, pO2 9.5 kPa, HCO3- 24.2 mmol/l, BE 0.1 mmol/l, Saturace 92%."
    },
    imagingResult: {
      ekg: "12svodov\xE9 EKG: Sinusov\xE1 tachykardie 110/min, ST elevace 3 mm ve svodech II, III, aVF s recipro\u010Dn\xEDmi depresemi v I, aVL.",
      rtg: "RTG Srdce+Pl\xEDce: Srde\u010Dn\xED st\xEDn nezv\u011Bt\u0161en, plicn\xED k\u0159\xEDdla bez m\u011Bstn\xE1n\xED \u010Di lo\u017Eiskov\xFDch zm\u011Bn.",
      echo: "Echokardiografie: Hypokineze doln\xED st\u011Bny lev\xE9 komory, EF lev\xE9 komory 45-50%, bez chlopenn\xEDch vad.",
      ct: "CT Pulmon\xE1ln\xED angiografie: Bez zn\xE1mek plicn\xED embolie."
    }
  },
  "2": {
    id: "2",
    level: 2,
    title: "Akutn\xED plicn\xED embolie se st\u0159edn\xEDm rizikem",
    name: "Alena Dvo\u0159\xE1kov\xE1",
    age: 52,
    sex: "\u017Dena",
    mainComplaint: "N\xE1hl\xFD kolaps, du\u0161nost a pleur\xE1ln\xED bolest na hrudi",
    complaintDetail: "Byla p\u0159ivezena RZP po n\xE1hl\xE9m kolapsu p\u0159i vstan\xED z postele. Nyn\xED st\u011B\u017Euje na v\xFDraznou du\u0161nost, ostr\xFD p\xEDchav\xFD tlak na prav\xE9 stran\u011B hrudn\xEDku zhor\u0161uj\xEDc\xED se p\u0159i n\xE1dechu, a such\xFD dr\xE1\u017Ediv\xFD ka\u0161el.",
    history: ["Hormon\xE1ln\xED antikoncepce (HAK)", "Varixy doln\xEDch kon\u010Detin", "S\xE1drov\xE1 fixace prav\xE9ho b\xE9rce pro zlomeninu p\u0159ed 3 t\xFDdny"],
    allergies: ["J\xD3D"],
    triageClass: "2",
    // Kritický
    vitals: {
      tf: 124,
      tk_sys: 105,
      tk_dia: 65,
      spo2: 88,
      gcs: 14,
      temp: 36.8,
      rr: 26
    },
    secretDiagnosis: "Akutn\xED embolizace plicnice",
    secretDiagnosisCode: "I26.9",
    labsResult: {
      ko: "KO: Leukocyty 9.8 x10^9/l, Hb 132 g/l, Trombocyty 290 x10^9/l.",
      biochem: "Biochemie STATIM: Troponin I: 55 ng/l (lehce zv\xFD\u0161en\xFD), D-Dimery: 3450 ng/ml (norma <500) - EXTR\xC9MN\u011A POZITIVN\xCD, CRP: 15.1 mg/l, Kreatinin: 75 umol/l, Urea: 5.1 mmol/l.",
      coag: "Koagulace: INR 1.01, APTT 30 s.",
      mochem: "Mo\u010D chemicky: Negativn\xED.",
      abr: "Astrup (ABR): pH 7.46 (respira\u010Dn\xED alkal\xF3za), pCO2 4.1 kPa (hypokapnie), pO2 7.8 kPa (hypoxemie), HCO3- 23.5 mmol/l, BE 0.8 mmol/l."
    },
    imagingResult: {
      ekg: "12svodov\xE9 EKG: Sinusov\xE1 tachykardie 124/min, nespecifick\xE9 zm\u011Bny ST-T, p\u0159\xEDtomen S1Q3T3 vzorec (hlubok\xE9 S v I, kmit Q v III a negativn\xED T v III), inkompletn\xED blok\xE1da prav\xE9ho ram\xE9nka (iRBBB).",
      rtg: "RTG Srdce+Pl\xEDce: M\xEDrn\xE9 projasn\u011Bn\xED vpravo (Westermarkovo znamen\xED), bez pleur\xE1ln\xEDho v\xFDpotku.",
      echo: "Echokardiografie u l\u016F\u017Eka (Bedside): Dilatace prav\xE9 komory (RV/LV pom\u011Br 1.1), oplo\u0161t\u011Bn\xED mezikomorov\xE9ho septa, m\xEDrn\xE1 trikuspid\xE1ln\xED regurgitace s odhadem gradientu 40 mmHg. Zn\xE1mky p\u0159et\xED\u017Een\xED prav\xE9 komory.",
      ct: "CT Pulmon\xE1ln\xED angiografie (Upozorn\u011Bn\xED: Alergie na J\xD3D!): Po premedikaci methylprednisolonem a dithiadenem: Prok\xE1z\xE1n masivn\xED embolus v prav\xE9 plicn\xED tepn\u011B zasahuj\xEDc\xED do lob\xE1rn\xEDch v\u011Btv\xED."
    }
  },
  "3": {
    id: "3",
    level: 3,
    title: "Masivn\xED polytrauma s hemoragick\xFDm \u0161okem",
    name: "Jan Ku\u010Dera",
    age: 32,
    sex: "Mu\u017E",
    mainComplaint: "Polytrauma po nehod\u011B na motocyklu",
    complaintDetail: "Mlad\xFD motork\xE1\u0159 po st\u0159etu s autem ve vysok\xE9 rychlosti. P\u0159ivezen v bezv\u011Bdom\xED, zaveden kr\u010Dn\xED l\xEDmec. Viditeln\xE1 deformita p\xE1nve, tr\u017En\xE9 r\xE1ny na stehn\u011B s masivn\xEDm zevn\xEDm krv\xE1cen\xEDm, asymetrie hrudn\xEDku, d\xFDch\xE1n\xED povrchn\xED.",
    history: ["Dosud zdr\xE1v", "Aktivn\xED sportovec"],
    allergies: [],
    triageClass: "1",
    // Resuscitace
    vitals: {
      tf: 138,
      tk_sys: 82,
      tk_dia: 40,
      spo2: 86,
      gcs: 9,
      temp: 35.5,
      rr: 28
    },
    secretDiagnosis: "Polytrauma, hemoragick\xFD \u0161ok, nestabiln\xED zlomenina p\xE1nve, hemotorax vpravo",
    secretDiagnosisCode: "T07",
    labsResult: {
      ko: "KO: Hemoglobin 85 g/l (zna\u010Dn\xFD pokles), Erytrocyty 2.9 x10^12/l, Hematokrit 0.25, Leukocyty 14.5 x10^9/l, Trombocyty 160 x10^9/l.",
      biochem: "Biochemie STATIM: Urea: 7.5 mmol/l, Kreatinin: 120 umol/l, Lakt\xE1t: 4.8 mmol/l (t\u011B\u017Ek\xE1 tk\xE1\u0148ov\xE1 hypoxie), Troponin I: 18 ng/l (v norm\u011B). Krevn\xED skupina: B Rh negativn\xED.",
      coag: "Koagulace: INR 1.45 (traumatick\xE1 koagulopatie), APTT 45 s, Fibrinogen 1.4 g/l (kritick\xFD deficit).",
      mochem: "Mo\u010D chemicky: Hematurie.",
      abr: "Astrup (ABR): pH 7.24 (metabolick\xE1 acid\xF3za), pCO2 4.9 kPa, pO2 7.1 kPa, HCO3- 16.8 mmol/l, BE -8.5 mmol/l, lakt\xE1t 4.8."
    },
    imagingResult: {
      ekg: "12svodov\xE9 EKG: Sinusov\xE1 tachykardie 138/min, bez lo\u017Eiskov\xFDch zm\u011Bn.",
      rtg: "RTG P\xE1nve a Hrudn\xEDku: Zlomenina p\xE1nve typu 'otev\u0159en\xE1 kniha' s diast\xE1zou symf\xFDzy 4 cm. RTG hrudn\xEDku vykazuje fluidotorax vpravo (hemotorax) s kolapsem pl\xEDce, zlomeniny 4.-7. \u017Eebra vpravo.",
      echo: "FAST Ultrasonografie (Trauma USG): Voln\xE1 tekutina v hepatoren\xE1ln\xEDm prostoru (Morisonova kapsa) - pozitivn\xED, a masivn\xED anechogenn\xED z\xF3na v prav\xE9 pleur\xE1ln\xED dutin\u011B (hemotorax). Voln\xE1 tekutina v p\xE1nvi.",
      ct: "CT Celot\u011Blov\xE9 (Pan-scan): CT hlavy bez krv\xE1cen\xED. Hrudn\xEDk: hemotorax vpravo, kontuze plicn\xED. B\u0159icho a p\xE1nev: hematom retroperitonea z p\xE1nevn\xEDho plexus venosus, aktivn\xED arteri\xE1ln\xED krv\xE1cen\xED z a. iliaca interna vpravo."
    }
  },
  "4": {
    id: "4",
    level: 1,
    title: "Akutn\xED subglotick\xE1 laryngitida (Croup)",
    name: "Tobi\xE1\u0161ek Vesel\xFD",
    age: 3,
    sex: "Chlapec",
    mainComplaint: "\u0160t\u011Bkav\xFD ka\u0161el, inspira\u010Dn\xED stridor a zt\xED\u017Een\xE9 d\xFDch\xE1n\xED",
    complaintDetail: "Matka uv\xE1d\xED, \u017Ee d\xEDt\u011B \u0161lo sp\xE1t zdrav\xE9, jen s lehkou r\xFDmou. Kolem p\u016Flnoci se probudilo s drsn\xFDm, \u0161t\u011Bkav\xFDm ka\u0161lem a s\xEDp\xE1n\xEDm p\u0159i n\xE1dechu. Je neklidn\xE9, pl\xE1\u010De, co\u017E zhor\u0161uje du\u0161nost. M\xE1 zatahov\xE1n\xED pod\u017Eeb\u0159\xED a jugula.",
    history: ["B\u011B\u017En\xE1 d\u011Btsk\xE1 onemocn\u011Bn\xED, o\u010Dkov\xE1n \u0159\xE1dn\u011B"],
    allergies: ["Bez zn\xE1m\xFDch alergi\xED"],
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
    secretDiagnosis: "Akutn\xED subglotick\xE1 laryngitida (Croup)",
    secretDiagnosisCode: "J05.0",
    labsResult: {
      ko: "KO: Leukocyty 10.5 x10^9/l (m\xEDrn\xE1 leukocyt\xF3za), Hb 125 g/l, Trombocyty 310 x10^9/l.",
      biochem: "Biochemie: CRP: 8.5 mg/l (virov\xE1 etiologie odpov\xEDd\xE1 n\xEDzk\xE9mu CRP), Drasl\xEDk: 4.2 mmol/l, Sod\xEDk: 140 mmol/l, Glyk\xE9mie: 5.6 mmol/l.",
      coag: "Koagulace: V norm\u011B (INR 1.0, APTT 30 s).",
      mochem: "Mo\u010D: Negativn\xED.",
      abr: "Astrup (ABR): pH 7.41, pCO2 5.0 kPa, pO2 8.4 kPa (lehk\xE1 hypox\xE9mie), HCO3- 24.0 mmol/l, BE 0.2 mmol/l."
    },
    imagingResult: {
      ekg: "EKG: Sinusov\xE1 tachykardie 142/min, bez patologick\xFDch zm\u011Bn.",
      rtg: "RTG krku / hrudn\xEDku: Zu\u017Eov\xE1n\xED subglotick\xE9ho prostoru (klasick\xE9 znamen\xED 'kosteln\xED v\u011B\u017Ee' / steeple sign), pl\xEDce bez infiltrac\xED.",
      echo: "Echokardiografie: Nen\xED indikov\xE1na u akutn\xED laryngitidy, srdce struktur\xE1ln\u011B bez patologie.",
      ct: "CT krku: Nen\xED indikov\xE1no, riziko zbyte\u010Dn\xE9 sedace u d\xEDt\u011Bte."
    }
  },
  "5": {
    id: "5",
    level: 3,
    title: "Meningokokov\xE1 sepse a meningitida",
    name: "Eli\u0161ka Novotn\xE1",
    age: 8,
    sex: "D\xEDvka",
    mainComplaint: "Hore\u010Dka, \xFAporn\xE1 bolest hlavy, zvracen\xED, fialov\xE9 skvrnky na k\u016F\u017Ei",
    complaintDetail: "D\xEDt\u011B je schv\xE1cen\xE9, spav\xE9, t\u011B\u017Eko komunikuje. Trp\xED silnou bolest\xED hlavy, sv\u011Btloplachost\xED a opakovn\u011B zvrac\xED. Matka si p\u0159ed hodinou v\u0161imla drobn\xFDch \u010Dervenofialov\xFDch skvrnek na stehnech a b\u0159i\u0161e, kter\xE9 neblednou p\u0159i zatla\u010Den\xED skleni\u010Dkou.",
    history: ["Dosud zdrav\xE1, neo\u010Dkovan\xE1 proti meningokoku typu B"],
    allergies: ["Bez zn\xE1m\xFDch alergi\xED"],
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
    secretDiagnosis: "Meningokokov\xE1 sepse a meningitida",
    secretDiagnosisCode: "A39.0",
    labsResult: {
      ko: "KO: Leukocyt\xF3za 24.5 x10^9/l s posunem doleva, Hemoglobin 112 g/l, Trombocytopenie 85 x10^9/l (hroz\xEDc\xED DIC).",
      biochem: "Biochemie STATIM: CRP: 185 mg/l - VYSOK\xC9, Lakt\xE1t: 5.4 mmol/l (z\xE1va\u017En\xFD lakt\xE1tov\xFD \u0161ok), Kreatinin: 110 umol/l, Urea: 8.2 mmol/l, Glyk\xE9mie: 3.2 mmol/l.",
      coag: "Koagulace: INR 1.65 (prodlou\u017Eeno), APTT 52 s, Fibrinogen 1.1 g/l (spot\u0159ebn\xED koagulopatie), D-dimery: 4200 ng/ml.",
      mochem: "Mo\u010D: B\xEDlkovina +, krev +.",
      abr: "Astrup (ABR): pH 7.21 (t\u011B\u017Ek\xE1 metabolick\xE1 acid\xF3za s lakt\xE1tem), pCO2 3.8 kPa, pO2 7.5 kPa, HCO3- 14.5 mmol/l, BE -11.5 mmol/l."
    },
    imagingResult: {
      ekg: "EKG: Sinusov\xE1 tachykardie 155/min, bez lo\u017Eiskov\xE9 ischemie.",
      rtg: "RTG Hrudn\xEDku: Bez lo\u017Eiskov\xFDch zm\u011Bn v plicn\xEDm parenchymu.",
      echo: "Echokardiografie: Hyperdynamick\xE1 lev\xE1 komora, EF 70%, bez chlopenn\xEDch vegetac\xED.",
      ct: "CT Mozku: Bez nitrolebn\xEDho krv\xE1cen\xED, m\xEDrn\xFD ed\xE9m mozku, zn\xE1mky meningitidy."
    }
  },
  "6": {
    id: "6",
    level: 2,
    title: "Anafylaktick\xFD \u0161ok po bodnut\xED vosou",
    name: "Jakub Kr\xE1l",
    age: 28,
    sex: "Mu\u017E",
    mainComplaint: "Du\u0161nost, otok obli\u010Deje, celot\u011Blov\xE1 kop\u0159ivka a kolaps",
    complaintDetail: "Pacienta na zahrad\u011B bodla vosa do krku. B\u011Bhem 10 minut se u n\u011Bj rozvinul masivn\xED otok rt\u016F, jazyka a krku, s\xEDp\xE1n\xED, sv\u011Bdiv\xE1 vyr\xE1\u017Eka po cel\xE9m t\u011Ble a n\xE1sledn\u011B zkolaboval na zem. Man\u017Eelka zavolala RZP, na m\xEDst\u011B pod\xE1n Epipen, na urgent p\u0159ivezen st\xE1le du\u0161n\xFD s poklesem tlaku.",
    history: ["Alergie na bodnut\xED blanok\u0159\xEDdl\xFDm hmyzem, astma bronchiale"],
    allergies: ["VOS\xCD JED"],
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
    secretDiagnosis: "Anafylaktick\xFD \u0161ok po bodnut\xED hmyzem",
    secretDiagnosisCode: "T78.2",
    labsResult: {
      ko: "KO: Leukocyty 11.2 x10^9/l, Hb 148 g/l, Trombocyty 220 x10^9/l.",
      biochem: "Biochemie: CRP: 2.1 mg/l, Kreatinin: 82 umol/l, Troponin I: 12 ng/l, Drasl\xEDk: 4.1 mmol/l. IgE specifick\xE9 na vos\xED jed: Extr\xE9mn\u011B zv\xFD\u0161en\xE9.",
      coag: "Koagulace: INR 1.02, APTT 31 s.",
      mochem: "Mo\u010D: Negativn\xED.",
      abr: "Astrup (ABR): pH 7.28 (sm\xED\u0161en\xE1 acid\xF3za), pCO2 6.1 kPa (hyperkapnie z dechov\xE9 obstrukce), pO2 6.8 kPa (t\u011B\u017Ek\xE1 hypox\xE9mie), HCO3- 19.8 mmol/l, BE -5.2 mmol/l."
    },
    imagingResult: {
      ekg: "EKG: Sinusov\xE1 tachykardie 132/min, nespecifick\xE9 oplo\u0161t\u011Bn\xED vln T.",
      rtg: "RTG Hrudn\xEDku: Hyperinflace plic (obraz astmatick\xE9ho z\xE1chvatu), bez lo\u017Eiskov\xFDch zm\u011Bn.",
      echo: "Echokardiografie: Bez chlopenn\xEDch vad, kontraktilita dobr\xE1, doln\xED dut\xE1 \u017E\xEDla kolabuje (relativn\xED hypovolemie p\u0159i redistribuci tekutin).",
      ct: "CT Krku: Masivn\xED ed\xE9m hrtanu a m\u011Bkk\xFDch tk\xE1n\xED krku, v\xFDrazn\xE9 z\xFA\u017Een\xED d\xFDchac\xEDch cest."
    }
  },
  "7": {
    id: "7",
    level: 2,
    title: "Akutn\xED pankreatitida s po\u010D\xEDnaj\xEDc\xED peritonitidou",
    name: "Hana Sou\u010Dkov\xE1",
    age: 39,
    sex: "\u017Dena",
    mainComplaint: "N\xE1hl\xE1 krut\xE1 bolest v nadb\u0159i\u0161ku, zvracen\xED, schv\xE1cenost",
    complaintDetail: "Pacientka uv\xE1d\xED n\xE1hl\xFD vznik extr\xE9mn\xED bolesti v epigastriu po v\u010Derej\u0161\xED oslav\u011B narozenin (tu\u010Dn\xE9 j\xEDdlo, alkohol). Bolest vyza\u0159uje p\xE1sovit\u011B do zad, opakovan\u011B zvrac\xED \u017Elu\u010D, nem\u016F\u017Ee naj\xEDt \xFAlevovou polohu. B\u0159icho je dif\xFAzn\u011B citliv\xE9, sta\u017Een\xE9, p\u0159\xEDtomna palpa\u010Dn\xED bolestivost.",
    history: ["Cholecystoli\xE1za (\u017Elu\u010Dn\xEDkov\xE9 kameny), hypertriglycerid\xE9mie"],
    allergies: ["J\xD3D"],
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
    secretDiagnosis: "Akutn\xED bili\xE1rn\xED pankreatitida",
    secretDiagnosisCode: "K85.9",
    labsResult: {
      ko: "KO: Leukocyt\xF3za 16.8 x10^9/l, Hb 155 g/l (hemokoncentrace), Trombocyty 280 x10^9/l.",
      biochem: "Biochemie STATIM: Amyl\xE1za v s\xE9ru: 1450 U/l (norma <100) - EXTR\xC9MN\u011A ZV\xDD\u0160EN\xC1, Lip\xE1za v s\xE9ru: 2200 U/l (norma <60) - SILN\u011A POZITIVN\xCD, CRP: 110 mg/l, Bilirubin: 42 umol/l, ALT: 2.1 ukat/l, AST: 1.8 ukat/l, Triglyceridy: 8.5 mmol/l.",
      coag: "Koagulace: INR 1.15, APTT 34 s.",
      mochem: "Mo\u010D: Zv\xFD\u0161en\xE1 amyl\xE1za v mo\u010Di (6800 U/l).",
      abr: "Astrup (ABR): pH 7.37, pCO2 4.8 kPa, pO2 10.2 kPa, HCO3- 22.1 mmol/l, BE -2.1 mmol/l."
    },
    imagingResult: {
      ekg: "EKG: Sinusov\xE1 tachykardie 112/min, bez zn\xE1mek ischemie.",
      rtg: "RTG b\u0159icha ve stoje: Bez voln\xE9ho plynu pod br\xE1nic\xED (vylu\u010Duje perforaci gastroduodena), p\u0159\xEDtomen meteorismus a 'str\xE1\u017En\xFD kli\u010Dkov\xFD' st\xEDn v epigastriu.",
      echo: "Sonografie b\u0159icha: Pros\xE1knut\xED a zv\u011Bt\u0161en\xED hlavy pankreatu, kolekce voln\xE9 tekutiny peripankreaticky, cholecystoli\xE1za - mnoho\u010Detn\xE9 drobn\xE9 konkrementy ve \u017Elu\u010Dn\xEDku, m\xEDrn\xE1 dilatace choledochu (7mm).",
      ct: "CT B\u0159icha (Upozorn\u011Bn\xED: Alergie na J\xD3D!): S premedikac\xED antihistaminiky: Akutn\xED pankreatitida s peripankreatick\xFDmi tekutinov\xFDmi kolekcemi (Balthazar C-D), bez prok\xE1zan\xE9 nekr\xF3zy parenchymu."
    }
  },
  "8": {
    id: "8",
    level: 3,
    title: "\xDAmysln\xE1 intoxikace tricyklick\xFDmi antidepresivy",
    name: "Martin Dvo\u0159\xE1k",
    age: 21,
    sex: "Mu\u017E",
    mainComplaint: "Porucha v\u011Bdom\xED, k\u0159e\u010De a arytmie",
    complaintDetail: "Pacient nalezen matkou v pokoji le\u017E\xEDc\xED na zemi, vedle n\u011Bj pr\xE1zdn\xE9 blistry od Amitriptylinu (cca 30 tablet po 50mg). P\u0159i p\u0159\xEDjezdu RZP byl v bezv\u011Bdom\xED, prod\u011Blal jeden generalizovan\xFD tonicko-klonick\xFD z\xE1chvat k\u0159e\u010D\xED trvaj\xEDc\xED 2 minuty. Nyn\xED reaguje pouze na bolestiv\xFD podn\u011Bt hlubok\xFDm st\xE9n\xE1n\xEDm.",
    history: ["Depresivn\xED porucha, psychiatrick\xE1 p\xE9\u010De, v minulosti jeden pokus o sebepo\u0161kozen\xED"],
    allergies: ["Bez zn\xE1m\xFDch alergi\xED"],
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
    secretDiagnosis: "\xDAmysln\xE1 intoxikace tricyklick\xFDmi antidepresivy",
    secretDiagnosisCode: "T43.0",
    labsResult: {
      ko: "KO: V norm\u011B (Leukocyty 8.2 x10^9/l, Hb 142 g/l, Tr 210 x10^9/l).",
      biochem: "Biochemie: Kreatinin: 95 umol/l, Lakt\xE1t: 3.1 mmol/l, Drasl\xEDk: 3.6 mmol/l, Sod\xEDk: 138 mmol/l, Glyk\xE9mie: 5.4 mmol/l. Toxikologick\xFD screening z mo\u010Di: Pozitivn\xED na Tricyklick\xE1 antidepresiva (TCA).",
      coag: "Koagulace: V norm\u011B (INR 1.05, APTT 32 s).",
      mochem: "Mo\u010D: TCA pozitivn\xED.",
      abr: "Astrup (ABR): pH 7.25 (respira\u010Dn\xED a metabolick\xE1 acid\xF3za), pCO2 6.5 kPa (retence CO2), pO2 8.1 kPa, HCO3- 20.2 mmol/l, BE -6.1 mmol/l."
    },
    imagingResult: {
      ekg: "EKG: Sinusov\xE1 tachykardie 128/min, extr\xE9mn\xED roz\u0161\xED\u0159en\xED komplexu QRS (140 ms), prodlou\u017Een\xED intervalu QTc (510 ms), hlubok\xE9 S ve svodech I a aVL (TCA toxicita).",
      rtg: "RTG Hrudn\xEDku: Bez patologick\xE9ho n\xE1lezu.",
      echo: "Echokardiografie: Sn\xED\u017Een\xE1 systolick\xE1 funkce obou komor, EF lev\xE9 komory 40%, bez chlopenn\xEDch vad.",
      ct: "CT Mozku: Bez struktur\xE1ln\xEDch patologi\xED, bez zn\xE1mek krv\xE1cen\xED \u010Di lo\u017Eiskov\xFDch zm\u011Bn."
    }
  },
  "9": {
    id: "9",
    level: 1,
    title: "Komplikovan\xE9 febriln\xED k\u0159e\u010De u batolete",
    name: "Honz\xEDk Novotn\xFD",
    age: 1.5,
    sex: "Chlapec",
    mainComplaint: "Generalizovan\xE9 k\u0159e\u010De cel\xE9ho t\u011Bla, hore\u010Dka a porucha v\u011Bdom\xED",
    complaintDetail: "Matka uv\xE1d\xED, \u017Ee osmn\xE1ctim\u011Bs\xED\u010Dn\xED d\xEDt\u011B m\u011Blo od r\xE1na r\xFDmu a teplotu 38.5 \xB0C. P\u0159ed 10 minutami doma n\xE1hle ztuhlo, za\u010Dalo \u0161kubat v\u0161emi kon\u010Detinami, sto\u010Dilo o\u010Di v sloup a p\u0159estalo reagovat. Z\xE1chvat trval p\u0159es 5 minut. RZP podala rekt\xE1ln\xED Diazepam desitin tube 5mg. Nyn\xED na urgentu k\u0159e\u010De pominuly, ale chlapec je v hlubok\xE9m postikt\xE1ln\xEDm \xFAtlumu (GCS 10) a m\xE1 hore\u010Dku 39.4 \xB0C.",
    history: ["B\u011B\u017En\xE1 d\u011Btsk\xE1 onemocn\u011Bn\xED, str\xFDc v d\u011Btstv\xED febriln\xED k\u0159e\u010De"],
    allergies: ["Bez zn\xE1m\xFDch alergi\xED"],
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
    secretDiagnosis: "Komplikovan\xE9 febriln\xED k\u0159e\u010De",
    secretDiagnosisCode: "R56.0",
    labsResult: {
      ko: "KO: Leukocyt\xF3za 14.8 x10^9/l (\u010Dast\xE1 u hore\u010Dky), Hemoglobin 122 g/l, Trombocyty 290 x10^9/l.",
      biochem: "Biochemie: CRP: 48 mg/l (m\xEDrn\u011B zv\xFD\u0161en\xE9, sv\u011Bd\u010D\xED pro infekt), Drasl\xEDk: 4.0 mmol/l, Sod\xEDk: 136 mmol/l, Glyk\xE9mie: 4.8 mmol/l (vylu\u010Duje hypoglykemickou genezi k\u0159e\u010D\xED).",
      coag: "Koagulace: V norm\u011B (INR 1.0, APTT 30 s).",
      mochem: "Mo\u010D chemicky: Negativn\xED n\xE1lez (vylu\u010Duje uroinfekt jako zdroj hore\u010Dky).",
      abr: "Astrup (ABR): pH 7.32 (lehk\xE1 metabolick\xE1 lakt\xE1tov\xE1 acid\xF3za po k\u0159e\u010D\xEDch), pCO2 5.3 kPa, pO2 8.6 kPa, HCO3- 20.1 mmol/l, BE -4.5 mmol/l, lakt\xE1t 3.1 mmol/l."
    },
    imagingResult: {
      ekg: "EKG: Sinusov\xE1 tachykardie 135/min, bez patologick\xFDch zm\u011Bn.",
      rtg: "RTG hrudn\xEDku: Plicn\xED parenchym bez infiltrac\xED \u010Di lo\u017Eiskov\xFDch zm\u011Bn.",
      echo: "Echokardiografie: Nen\xED indikov\xE1na u febriln\xEDch k\u0159e\u010D\xED.",
      ct: "CT Mozku: Kontraindikov\xE1no! U febriln\xEDch k\u0159e\u010D\xED bez lo\u017Eiskov\xE9ho n\xE1lezu \u010Di traumatu hlavy je CT mozku zbyte\u010Dnou radia\u010Dn\xED z\xE1t\u011B\u017E\xED. Neuroinfekce \u010Di struktur\xE1ln\xED zm\u011Bny se \u0159e\u0161\xED klinick\xFDm vy\u0161et\u0159en\xEDm, lumb\xE1ln\xED punkc\xED \u010Di MRI."
    }
  },
  "10": {
    id: "10",
    level: 2,
    title: "T\u011B\u017Ek\xFD akutn\xED astmatick\xFD stav (Status asthmaticus) u d\xEDt\u011Bte",
    name: "Sofinka Mare\u0161ov\xE1",
    age: 6,
    sex: "D\xEDvka",
    mainComplaint: "T\u011B\u017Ek\xE1 klidov\xE1 du\u0161nost, sly\u0161iteln\xE9 p\xEDsk\xE1n\xED, vy\u010Derp\xE1n\xED",
    complaintDetail: "\u0160estilet\xE1 d\xEDvka s astmatem trp\xED z\xE1chvatem du\u0161nosti od odpoledne. Doma matka podala celkem 6 d\xE1vek Ventolinu inhala\u010Dn\u011B bez v\u011Bt\u0161\xEDho efektu. Nyn\xED je neklidn\xE1, mluv\xED pouze v jednotliv\xFDch slovech, m\xE1 v\xFDrazn\xE9 zatahov\xE1n\xED jugula, pod\u017Eeb\u0159\xED a al\xE1rn\xED kmit. Poslechov\u011B je d\xFDch\xE1n\xED velmi oslaben\xE9 s oboustrann\xFDmi p\xEDskoty (fenom\xE9n 'tich\xFDch plic' / silent chest, varovn\xE9 znamen\xED bl\xED\u017E\xEDc\xEDho se udu\u0161en\xED).",
    history: ["Pr\u016Fdu\u0161kov\xE9 astma (st\u0159edn\u011B t\u011B\u017Ek\xE9, u\u017E\xEDv\xE1 Ventolin a Flixotide), alergie na prach a rozto\u010De"],
    allergies: ["Bez zn\xE1m\xFDch l\xE9kov\xFDch alergi\xED"],
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
      ko: "KO: Leukocyty 11.1 x10^9/l, m\xEDrn\xE1 eosinofilie (vztah k astmatu), Hb 130 g/l, Trombocyty 255 x10^9/l.",
      biochem: "Biochemie: CRP: 12 mg/l, Drasl\xEDk: 3.5 mmol/l (hrani\u010Dn\xED drasl\xEDk - riziko poklesu po opakovan\xFDch inhalac\xEDch beta2-mimetik!), Sod\xEDk: 139 mmol/l, Glyk\xE9mie: 5.8 mmol/l.",
      coag: "Koagulace: V norm\u011B (INR 1.0, APTT 29 s).",
      mochem: "Mo\u010D chemicky: Negativn\xED.",
      abr: "Astrup (ABR): pH 7.31 (po\u010D\xEDnaj\xEDc\xED respira\u010Dn\xED acid\xF3za v d\u016Fsledku dechov\xE9ho vy\u010Derp\xE1n\xED a retence CO2), pCO2 6.2 kPa (hyperkapnie - kritick\xE9 znamen\xED vy\u010Derp\xE1n\xED d\xFDchac\xEDho apar\xE1tu!), pO2 7.2 kPa (v\xFDrazn\xE1 hypox\xE9mie), HCO3- 23.8 mmol/l, BE -1.5 mmol/l."
    },
    imagingResult: {
      ekg: "EKG: V\xFDrazn\xE1 sinusov\xE1 tachykardie 148/min, zn\xE1mky zat\xED\u017Een\xED prav\xE9ho srdce (P pulmonale).",
      rtg: "RTG hrudn\xEDku: V\xFDrazn\xE1 hyperinflace obou plicn\xEDch k\u0159\xEDdel, oplo\u0161t\u011Bn\xED br\xE1nice (obraz astmatick\xE9ho z\xE1chvatu), zv\xFD\u0161en\xE1 bronchovaskul\xE1rn\xED kresba perihil\xF3zn\u011B. \u017D\xE1dn\xFD pneumotorax \u010Di lo\u017Eiskov\xFD z\xE1pal plic.",
      echo: "Echokardiografie: Bez struktur\xE1ln\xED vady, hyperdynamick\xE1 kontraktilita, bez p\u0159et\xED\u017Een\xED prav\xE9 komory.",
      ct: "CT hrudn\xEDku: Nen\xED indikov\xE1no u nekomplikovan\xE9ho astmatick\xE9ho z\xE1chvatu z d\u016Fvodu zbyte\u010Dn\xE9 z\xE1t\u011B\u017Ee."
    }
  },
  "11": {
    id: "11",
    level: 3,
    title: "Akutn\xED epiglotitida (Kritick\xFD d\u011Btsk\xFD stav)",
    name: "Ad\xE1mek Ku\u010Dera",
    age: 4,
    sex: "Chlapec",
    mainComplaint: "Extr\xE9mn\xED bolest v krku, neschopnost polykat (slint\xE1n\xED), inspira\u010Dn\xED stridor",
    complaintDetail: "\u010Cty\u0159let\xFD chlapec s rychlou progres\xED hore\u010Dky a t\u011B\u017Ek\xE9 du\u0161nosti b\u011Bhem n\u011Bkolika hodin. Na urgentn\xEDm p\u0159\xEDjmu sed\xED v tzv. tripod\xE1ln\xED poloze (v p\u0159edklonu, s nata\u017Een\xFDm krkem a pootev\u0159en\xFDmi \xFAsty), masivn\u011B mu vyt\xE9kaj\xED sliny z \xFAst (neschopnost polykat pro extr\xE9mn\xED bolestivost) a mluv\xED tich\xFDm, 'knedl\xEDkov\xFDm' hlasem. P\u0159\xEDtomen tich\xFD inspira\u010Dn\xED stridor.",
    history: ["D\xEDt\u011B nebylo o\u010Dkov\xE1no proti Haemophilus influenzae typu b (rodi\u010De odm\xEDtli Hexavakc\xEDnu)"],
    allergies: ["Bez zn\xE1m\xFDch alergi\xED"],
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
    secretDiagnosis: "Akutn\xED epiglotitida",
    secretDiagnosisCode: "J05.1",
    labsResult: {
      ko: "KO: V\xFDrazn\xE1 bakteri\xE1ln\xED leukocyt\xF3za 18.5 x10^9/l s v\xFDrazn\xFDm posunem doleva, Hb 120 g/l, Trombocyty 340 x10^9/l.",
      biochem: "Biochemie STATIM: CRP: 145 mg/l (velmi vysok\xE1 bakteri\xE1ln\xED aktivita), prokalcitonin: 3.2 ug/l, Drasl\xEDk: 4.1 mmol/l, Sod\xEDk: 138 mmol/l.",
      coag: "Koagulace: V norm\u011B (INR 1.05, APTT 31 s).",
      mochem: "Mo\u010D: Negativn\xED.",
      abr: "Astrup (ABR): pH 7.34, pCO2 5.2 kPa, pO2 7.8 kPa (hypox\xE9mie), HCO3- 22.0 mmol/l, BE -3.0 mmol/l."
    },
    imagingResult: {
      ekg: "EKG: Sinusov\xE1 tachykardie 155/min, bez dal\u0161\xEDch zm\u011Bn.",
      rtg: "RTG krku bo\u010Dn\xED: V\xFDrazn\xE9 pros\xE1knut\xED a zdu\u0159en\xED p\u0159\xEDklopky hrtanov\xE9 (epiglotis) - tzv. 'znamen\xED palce' (thumb sign), kritick\xE9 z\xFA\u017Een\xED vchodu do hrtanu. Upozorn\u011Bn\xED: Jak\xE1koliv manipulace s krkem \u010Di polohov\xE1n\xED d\xEDt\u011Bte na z\xE1da je p\u0159\xEDsn\u011B zak\xE1z\xE1no!",
      echo: "Echokardiografie: Nen\xED indikov\xE1na.",
      ct: "CT krku: Absolutn\u011B kontraindikov\xE1no! Jak\xFDkoliv zbyte\u010Dn\xFD stres, transport \u010Di manipulace s hrdlem hroz\xED reflexn\xED larynge\xE1ln\xED obstrukc\xED (laryngospasmem) a okam\u017Eit\xFDm udu\u0161en\xEDm."
    }
  },
  "12": {
    id: "12",
    level: 3,
    title: "Kardiogenn\xED \u0161ok p\u0159i extenzivn\xEDm infarktu myokardu (STEMI)",
    name: "Josef Hor\xE1k",
    age: 68,
    sex: "Mu\u017E",
    mainComplaint: "Extr\xE9mn\xED du\u0161nost, studen\xFD lepkav\xFD pot, zmatenost, slabost",
    complaintDetail: "Pacient s nar\u016Fstaj\xEDc\xED p\xE1livou bolest\xED za hrudn\xED kost\xED od v\u010Derej\u0161\xEDho ve\u010Dera (nikam nevolal). RZP ho p\u0159iv\xE1\u017E\xED v t\u011B\u017Ek\xE9m kardiogenn\xEDm \u0161oku. Je bled\xFD, studen\u011B opocen\xFD, na kon\u010Detin\xE1ch m\xE1 mramorovanou k\u016F\u017Ei. Je m\xEDrn\u011B zmaten\xFD z hypoperf\xFAze mozku. Poslechov\u011B na plic\xEDch sly\u0161\xEDte oboustrann\u011B vlhk\xE9 chr\xE1pky do poloviny pol\xED sv\u011Bd\u010D\xEDc\xED pro z\xE1va\u017En\xFD plicn\xED ed\xE9m.",
    history: ["Arteri\xE1ln\xED hypertenze, diabetes mellitus 2. typu na inzul\xEDnu, t\u011B\u017Ek\xE1 obezita, hypercholesterolemie"],
    allergies: ["Bez zn\xE1m\xFDch alergi\xED"],
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
    secretDiagnosis: "Kardiogenn\xED \u0161ok p\u0159i akutn\xEDm infarktu myokardu s plicn\xEDm ed\xE9mem",
    secretDiagnosisCode: "R57.0",
    labsResult: {
      ko: "KO: Leukocyt\xF3za 15.1 x10^9/l, Hb 138 g/l, Trombocyty 220 x10^9/l.",
      biochem: "Biochemie STATIM: Troponin I: 5800 ng/l (extr\xE9mn\xED po\u0161kozen\xED myokardu) - EXTR\xC9MN\u011A POZITIVN\xCD, CK-MB: 48 ug/l, Kreatinin: 165 umol/l (po\u010D\xEDnaj\xEDc\xED ren\xE1ln\xED selh\xE1v\xE1n\xED p\u0159i \u0161oku), Drasl\xEDk: 4.8 mmol/l, Sod\xEDk: 137 mmol/l, Lakt\xE1t: 4.2 mmol/l (t\u011B\u017Ek\xFD tk\xE1\u0148ov\xFD \u0161ok).",
      coag: "Koagulace: INR 1.10, APTT 34 s.",
      mochem: "Mo\u010D: V norm\u011B.",
      abr: "Astrup (ABR): pH 7.22 (sm\xED\u0161en\xE1 metabolicko-respira\u010Dn\xED acid\xF3za z plicn\xEDho ed\xE9mu a \u0161oku), pCO2 5.9 kPa, pO2 6.1 kPa (z\xE1va\u017En\xE1 hypoxie), HCO3- 17.5 mmol/l, BE -8.2 mmol/l, lakt\xE1t 4.2."
    },
    imagingResult: {
      ekg: "12svodov\xE9 EKG: Sinusov\xE1 tachykardie 122/min, masivn\xED ST elevace 5 mm ve svodech V1, V2, V3, V4, V5 (extenzivn\xED p\u0159edn\xED STEMI), recipro\u010Dn\xED deprese ve II, III, aVF.",
      rtg: "RTG Hrudn\xEDku: V\xFDrazn\xE9 m\u011Bstn\xE1n\xED v mal\xE9m ob\u011Bhu s mot\xFDlovit\xFDm zast\u0159en\xEDm kolem hil\u016F (alveol\xE1rn\xED plicn\xED ed\xE9m), srde\u010Dn\xED st\xEDn je v\xFDrazn\u011B zv\u011Bt\u0161en\xFD doleva.",
      echo: "Bedside Echokardiografie: T\u011B\u017Ek\xE1 dif\xFAzn\xED porucha kinetiky lev\xE9 komory (hypokineze a\u017E akineze p\u0159edn\xED st\u011Bny a hrotu), ejek\u010Dn\xED frakce lev\xE9 komory kriticky sn\xED\u017Eena na 20-25%. Zn\xE1mky plicn\xED hypertenze, dilatace lev\xE9 s\xEDn\u011B. Bez mechanick\xFDch komplikac\xED (ruptura septa \u010Di papil\xE1rn\xEDho svalu nezji\u0161t\u011Bna).",
      ct: "CT vy\u0161et\u0159en\xED: Kontraindikov\xE1no! Pacient je ob\u011Bhov\u011B extr\xE9mn\u011B nestabiln\xED pro transport na CT, hroz\xED okam\u017Eit\xE1 z\xE1stava ob\u011Bhu."
    }
  },
  "13": {
    id: "13",
    level: 2,
    title: "Hyperakutn\xED c\xE9vn\xED mozkov\xE1 p\u0159\xEDhoda v \u010Dasn\xE9m okn\u011B (iCMP)",
    name: "Ludmila \u010Cern\xE1",
    age: 72,
    sex: "\u017Dena",
    mainComplaint: "N\xE1hl\xE9 ochrnut\xED lev\xE9 poloviny t\u011Bla, nesrozumiteln\xE1 \u0159e\u010D",
    complaintDetail: "Pacientka byla nalezena dcerou le\u017E\xEDc\xED na zemi p\u0159ed 45 minutami. Je p\u0159i v\u011Bdom\xED, ale vykazuje t\u011B\u017Ekou dysartrii (nesrozumiteln\xE1 \u0159e\u010D), poklesl\xFD lev\xFD \xFAstn\xED koutek, levou ruku nezvedne v\u016Fbec (plegie) a lev\xE1 doln\xED kon\u010Detina je t\u011B\u017Ece paretick\xE1. N\xE1hl\xFD vznik p\u0159\xEDznak\u016F p\u0159ed p\u0159ibli\u017En\u011B 1 hodinou. Orienta\u010Dn\xED NIHSS sk\xF3re odhadnuto na 16 (t\u011B\u017Ek\xFD neurologick\xFD deficit).",
    history: ["Fibrilace s\xEDn\xED (neu\u017E\xEDv\xE1 antikoagulancia pro d\u0159\xEDv\u011Bj\u0161\xED \u0161patnou sn\xE1\u0161enlivost), arteri\xE1ln\xED hypertenze"],
    allergies: ["Bez zn\xE1m\xFDch alergi\xED"],
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
    secretDiagnosis: "Hyperakutn\xED ischemick\xE1 c\xE9vn\xED mozkov\xE1 p\u0159\xEDhoda",
    secretDiagnosisCode: "I63.3",
    labsResult: {
      ko: "KO: Leukocyty 7.5 x10^9/l, Hemoglobin 135 g/l, Trombocyty 210 x10^9/l.",
      biochem: "Biochemie STATIM: CRP: 4.2 mg/l, Kreatinin: 90 umol/l, Drasl\xEDk: 4.1 mmol/l, Sod\xEDk: 141 mmol/l, Glyk\xE9mie: 6.8 mmol/l (kl\xED\u010Dov\xE9 pro vylou\u010Den\xED hypoglyk\xE9mie jako imitace mrtvice!).",
      coag: "Koagulace STATIM: INR 1.05 (vylu\u010Duje \xFA\u010Dinnou warfarinizaci), APTT 31 s.",
      mochem: "Mo\u010D chemicky: V norm\u011B.",
      abr: "Astrup (ABR): pH 7.41, pCO2 5.0 kPa, pO2 12.1 kPa, HCO3- 24.2 mmol/l, BE 0.1 mmol/l."
    },
    imagingResult: {
      ekg: "EKG: Fibrilace s\xEDn\xED s frekvenc\xED komor 92/min, bez akutn\xEDch ischemick\xFDch zm\u011Bn na ST-T.",
      rtg: "RTG Hrudn\xEDku: Srde\u010Dn\xED st\xEDn p\u0159im\u011B\u0159en\xE9 velikosti, pl\xEDce bez lo\u017Eiskov\xFDch z\xE1n\u011Btliv\xFDch zm\u011Bn.",
      echo: "Echokardiografie: Nen\xED urgentn\u011B indikov\xE1na u akutn\xED c\xE9vn\xED mozkov\xE9 p\u0159\xEDhody.",
      ct: "CT Mozku: Nativn\xED CT mozku vylou\u010Dilo intrakrani\xE1ln\xED krv\xE1cen\xED i lo\u017Eiskovou expanzi (tumor). Je p\u0159\xEDtomno \u010Dasn\xE9 set\u0159en\xED struktury k\u016Fry a podko\u0159\xED v oblasti inzuly vpravo a hyperdenzn\xED arteria cerebri media vpravo (znamen\xED akutn\xEDho trombu). Pacientka spl\u0148uje krit\xE9ria pro syst\xE9movou trombol\xFDzu!"
    }
  }
};
var sessions = {};
function recordVitalsHistory(session) {
  if (!session.vitalsHistory) {
    session.vitalsHistory = [];
  }
  const existing = session.vitalsHistory.find((h) => h.time === session.elapsedTime);
  if (existing) {
    existing.tf = session.vitals.tf;
    existing.tk_sys = session.vitals.tk_sys;
    existing.tk_dia = session.vitals.tk_dia;
    existing.spo2 = session.vitals.spo2;
    existing.rr = session.vitals.rr;
  } else {
    session.vitalsHistory.push({
      time: session.elapsedTime,
      tf: session.vitals.tf,
      tk_sys: session.vitals.tk_sys,
      tk_dia: session.vitals.tk_dia,
      spo2: session.vitals.spo2,
      rr: session.vitals.rr
    });
  }
}
async function startServer() {
  const app = (0, import_express.default)();
  app.use(import_express.default.json());
  app.post("/api/case/init", (req, res) => {
    const { difficulty } = req.body;
    const caseId = difficulty || "1";
    const caseDef = CASES[caseId];
    if (!caseDef) {
      return res.status(400).json({ error: "Neplatn\xE1 \xFArove\u0148 obt\xED\u017Enosti" });
    }
    const sessionId = "session_" + Math.random().toString(36).substring(2, 9);
    const session = {
      sessionId,
      caseId,
      level: caseDef.level,
      patient: {
        name: caseDef.name,
        age: caseDef.age,
        sex: caseDef.sex,
        mainComplaint: caseDef.mainComplaint,
        complaintDetail: caseDef.complaintDetail,
        history: caseDef.history,
        allergies: caseDef.allergies,
        triageClass: caseDef.triageClass
      },
      vitals: { ...caseDef.vitals },
      vitalsHistory: [
        {
          time: 0,
          tf: caseDef.vitals.tf,
          tk_sys: caseDef.vitals.tk_sys,
          tk_dia: caseDef.vitals.tk_dia,
          spo2: caseDef.vitals.spo2,
          rr: caseDef.vitals.rr
        }
      ],
      elapsedTime: 0,
      actionLog: [
        { time: "14:22", text: "Pacient p\u0159ijat na urgentn\xED p\u0159\xEDjem RZP.", source: "system" }
      ],
      chatHistory: {
        "Kardiolog": [],
        "Chirurg": [],
        "Neurolog": [],
        "ARO": []
      },
      labsOrdered: [],
      labsReady: [],
      labsResultsReceived: {},
      imagingOrdered: [],
      imagingReady: [],
      imagingResultsReceived: {},
      therapies: {
        oxygen: "\u017D\xE1dn\xE9 zaji\u0161t\u011Bn\xED",
        ivAccess: "Nezaveden",
        infusion: "",
        meds: []
      },
      isCompleted: false,
      traumaTeamActivated: false,
      triageConfirmed: false,
      selectedTriageClass: ""
    };
    sessions[sessionId] = session;
    res.json(session);
  });
  app.get("/api/case/session/:sessionId", (req, res) => {
    const { sessionId } = req.params;
    const session = sessions[sessionId];
    if (!session) {
      return res.status(404).json({ error: "Relace nebyla nalezena" });
    }
    res.json(session);
  });
  function formatClinicalContext(session) {
    const caseDef = CASES[session.caseId];
    return `
=== KLINICK\xDD STAV PACIENTA ===
Jm\xE9no: ${session.patient.name} (${session.patient.age} let, ${session.patient.sex})
Hlavn\xED obt\xED\u017Ee: ${session.patient.mainComplaint} - ${session.patient.complaintDetail}
Anamn\xE9za: ${session.patient.history.join(", ")}
Alergie: ${session.patient.allergies.length > 0 ? session.patient.allergies.join(", ") : "Bez zn\xE1m\xFDch alergi\xED"}
Aktu\xE1ln\xED vit\xE1ln\xED funkce:
- Tepov\xE1 frekvence (TF): ${session.vitals.tf} bpm
- Krevn\xED tlak (TK): ${session.vitals.tk_sys}/${session.vitals.tk_dia} mmHg
- Saturace O2: ${session.vitals.spo2}%
- GCS: ${session.vitals.gcs}/15
- Teplota: ${session.vitals.temp} \xB0C
- Dechov\xE1 frekvence (DF): ${session.vitals.rr}/min

Proveden\xE9 intervence / Terapie:
- Kysl\xEDk: ${session.therapies.oxygen}
- \u017Diln\xED p\u0159\xEDstup (i.v.): ${session.therapies.ivAccess}
- Inf\xFAze: ${session.therapies.infusion || "\u017D\xE1dn\xE1"}
- Medikace: ${session.therapies.meds.length > 0 ? session.therapies.meds.map((m) => `${m.name} ${m.dose} ${m.route}`).join(", ") : "\u017D\xE1dn\xE1"}

Objednan\xE1 vy\u0161et\u0159en\xED:
- Laborato\u0159 objedn\xE1no: ${session.labsOrdered.join(", ")} (Hotovo: ${session.labsReady.join(", ")})
- Zobrazovac\xED metody objedn\xE1no: ${session.imagingOrdered.join(", ")} (Hotovo: ${session.imagingReady.join(", ")})

Uplynul\xFD \u010Das: ${session.elapsedTime} minut od p\u0159\xEDjmu.
Skute\u010Dn\xE1 diagn\xF3za (kterou l\xE9ka\u0159 odhaluje): ${caseDef.secretDiagnosis}
`;
  }
  app.post("/api/case/action", async (req, res) => {
    const { sessionId, actionId, actionText, details } = req.body;
    const session = sessions[sessionId];
    if (!session) {
      return res.status(404).json({ error: "Relace nebyla nalezena" });
    }
    const sendSession = (s) => {
      recordVitalsHistory(s);
      return res.json(s);
    };
    const caseDef = CASES[session.caseId];
    const timestamp = new Date(14 * 3600 * 1e3 + 22 * 60 * 1e3 + session.elapsedTime * 60 * 1e3).toTimeString().substring(0, 5);
    session.elapsedTime += Math.floor(Math.random() * 3) + 1;
    if (actionId) {
      if (actionId === "confirm_triage") {
        const { triageClass } = details;
        session.triageConfirmed = true;
        session.selectedTriageClass = triageClass;
        let scoreMessage = `Triage potvrzena na stupe\u0148 ${triageClass}.`;
        if (triageClass !== caseDef.triageClass) {
          scoreMessage += ` (Pozor: Tri\xE1\u017En\xED sestra p\u016Fvodn\u011B doporu\u010Dovala stupe\u0148 ${caseDef.triageClass}).`;
        }
        session.actionLog.push({ time: timestamp, text: scoreMessage, source: "system" });
        return sendSession(session);
      }
      if (actionId === "oxygen_setup") {
        const { value } = details;
        session.therapies.oxygen = value;
        session.actionLog.push({ time: timestamp, text: `Zah\xE1jena oxygenoterapie: ${value}.`, source: "user" });
        if (session.caseId === "1" && session.vitals.spo2 < 95) {
          session.vitals.spo2 = Math.min(98, session.vitals.spo2 + 4);
          session.vitals.rr = Math.max(16, session.vitals.rr - 2);
        } else if (session.caseId === "2" && session.vitals.spo2 < 95) {
          session.vitals.spo2 = Math.min(96, session.vitals.spo2 + 6);
          session.vitals.rr = Math.max(18, session.vitals.rr - 3);
        } else if (session.caseId === "3" && session.vitals.spo2 < 95) {
          session.vitals.spo2 = Math.min(92, session.vitals.spo2 + 4);
        } else if (session.caseId === "9" && session.vitals.spo2 < 95) {
          session.vitals.spo2 = Math.min(99, session.vitals.spo2 + 3);
        } else if (session.caseId === "10" && session.vitals.spo2 < 95) {
          session.vitals.spo2 = Math.min(93, session.vitals.spo2 + 4);
        } else if (session.caseId === "11" && session.vitals.spo2 < 95) {
          session.vitals.spo2 = Math.min(94, session.vitals.spo2 + 2);
        } else if (session.caseId === "12" && session.vitals.spo2 < 95) {
          session.vitals.spo2 = Math.min(89, session.vitals.spo2 + 5);
        } else if (session.caseId === "13") {
          session.vitals.spo2 = Math.min(100, session.vitals.spo2 + 2);
        }
        return sendSession(session);
      }
      if (actionId === "iv_setup") {
        const { value } = details;
        session.therapies.ivAccess = value;
        session.actionLog.push({ time: timestamp, text: `Zaveden perifern\xED \u017Eiln\xED kat\xE9tr (i.v.): ${value}.`, source: "user" });
        return sendSession(session);
      }
      if (actionId === "infusion_setup") {
        const { value } = details;
        session.therapies.infusion = value;
        session.actionLog.push({ time: timestamp, text: `Zah\xE1jena infuze: ${value}.`, source: "user" });
        if (session.caseId === "3") {
          if (value.toLowerCase().includes("transf") || value.toLowerCase().includes("erytr") || value.toLowerCase().includes("plazm")) {
            session.vitals.tk_sys = Math.min(100, session.vitals.tk_sys + 15);
            session.vitals.tk_dia = Math.min(60, session.vitals.tk_dia + 10);
            session.vitals.tf = Math.max(105, session.vitals.tf - 15);
          } else {
            session.vitals.tk_sys = Math.min(90, session.vitals.tk_sys + 5);
          }
        }
        return sendSession(session);
      }
      if (actionId === "add_medication") {
        const { name, dose, route } = details;
        if (!name || !dose || !route) {
          return res.status(400).json({ error: "Vypl\u0148te n\xE1zev, d\xE1vku a zp\u016Fsob pod\xE1n\xED l\xE9ku." });
        }
        session.therapies.meds.push({ name, dose, route });
        session.actionLog.push({ time: timestamp, text: `Pod\xE1n l\xE9k: ${name} ${dose} ${route}.`, source: "user" });
        const nLow = name.toLowerCase();
        if (session.caseId === "1") {
          if (nLow.includes("anopyrin") || nLow.includes("aspirin") || nLow.includes("acetylsalicyl")) {
            session.actionLog.push({ time: timestamp, text: "\xDA\u010Dinek kyseliny acetylsalicylov\xE9 nastupuje. Blok\xE1da agregace desti\u010Dek zah\xE1jena.", source: "system" });
          }
          if (nLow.includes("heparin")) {
            session.actionLog.push({ time: timestamp, text: "Antikoagulace heparinem aktivn\xED.", source: "system" });
          }
          if (nLow.includes("nitroglycerin") || nLow.includes("isoket")) {
            session.vitals.tk_sys = Math.max(110, session.vitals.tk_sys - 15);
            session.vitals.tf = Math.max(80, session.vitals.tf - 5);
            session.actionLog.push({ time: timestamp, text: "Vazodilata\u010Dn\xED \xFA\u010Dinek nitroglycerinu. Sn\xED\u017Een\xED dot\xED\u017Een\xED srdce, \xFAleva od stenokardi\xED.", source: "system" });
          }
        } else if (session.caseId === "2") {
          if (nLow.includes("heparin") || nLow.includes("clexane") || nLow.includes("fraxiparin")) {
            session.actionLog.push({ time: timestamp, text: "Antikoagulace zah\xE1jena. Zabr\xE1n\u011Bn\xED propagaci trombu v plicnici.", source: "system" });
          }
        } else if (session.caseId === "3") {
          if (nLow.includes("exacyl") || nLow.includes("tranexam")) {
            session.actionLog.push({ time: timestamp, text: "Kyselina tranexamov\xE1 pod\xE1na. Antifibrinolytick\xE1 stabilizace krevn\xED sra\u017Eeniny aktivn\xED.", source: "system" });
          }
        } else if (session.caseId === "9") {
          if (nLow.includes("diazepam") || nLow.includes("midazolam") || nLow.includes("apaurin")) {
            session.vitals.rr = 18;
            session.vitals.tf = Math.max(100, session.vitals.tf - 10);
            session.actionLog.push({ time: timestamp, text: "Pod\xE1n benzodiazepin. Svalov\xE9 k\u0159e\u010De a z\xE1\u0161kuby bezprost\u0159edn\u011B ust\xE1vaj\xED, d\xFDch\xE1n\xED se zklid\u0148uje. P\u0159etrv\xE1v\xE1 hlubok\xFD \xFAtlum v\u011Bdom\xED (postikt\xE1ln\xED sp\xE1nek).", source: "system" });
          }
          if (nLow.includes("paracetamol") || nLow.includes("panadol") || nLow.includes("ibuprofen") || nLow.includes("nurofen") || nLow.includes("novalgin")) {
            session.vitals.temp = Math.max(37.4, session.vitals.temp - 1.5);
            session.vitals.tf = Math.max(105, session.vitals.tf - 15);
            session.actionLog.push({ time: timestamp, text: "Pod\xE1no antipyretikum. Hore\u010Dka postupn\u011B kles\xE1, co\u017E zm\xEDr\u0148uje celkov\xFD metabolick\xFD stres pacienta.", source: "system" });
          }
        } else if (session.caseId === "10") {
          if (nLow.includes("salbutamol") || nLow.includes("ventolin") || nLow.includes("ipratropium") || nLow.includes("atrovent")) {
            session.vitals.spo2 = Math.min(96, session.vitals.spo2 + 5);
            session.vitals.rr = Math.max(26, session.vitals.rr - 8);
            session.actionLog.push({ time: timestamp, text: "Pod\xE1na inhala\u010Dn\xED bronchodilata\u010Dn\xED terapie nebulizac\xED. Poslechov\u011B doch\xE1z\xED k \u010D\xE1ste\u010Dn\xE9mu rozvzd\u011Bn\xED d\xFDch\xE1n\xED, ustupuje fenom\xE9n 'tich\xFDch plic'.", source: "system" });
          }
          if (nLow.includes("solu-medrol") || nLow.includes("solumedrol") || nLow.includes("methylprednisolon") || nLow.includes("dexamethas") || nLow.includes("dexamed")) {
            session.vitals.rr = Math.max(30, session.vitals.rr - 4);
            session.actionLog.push({ time: timestamp, text: "Syst\xE9mov\xE9 kortikosteroidy pod\xE1ny. Nastupuje protiz\xE1n\u011Btliv\xFD \xFA\u010Dinek, kter\xFD zredukuje otok sliznice d\xFDchac\xEDch cest.", source: "system" });
          }
          if (nLow.includes("magnes") || nLow.includes("magn\xE9z") || nLow.includes("mgso4")) {
            session.vitals.spo2 = Math.min(99, session.vitals.spo2 + 5);
            session.vitals.rr = Math.max(20, session.vitals.rr - 10);
            session.actionLog.push({ time: timestamp, text: "Magnesium sulf\xE1t pod\xE1n v pomal\xE9 i.v. infuzi. Doch\xE1z\xED k v\xFDrazn\xE9 relaxaci hladk\xE9ho svalstva bronch\u016F, dechov\xE1 t\xEDse\u0148 ustupuje a saturace stoup\xE1.", source: "system" });
          }
        } else if (session.caseId === "11") {
          if (nLow.includes("ceftriaxon") || nLow.includes("cefota") || nLow.includes("lentocilin")) {
            session.actionLog.push({ time: timestamp, text: "Pod\xE1na \u0161irokospektr\xE1 antibiotika i.v. C\xEDlen\xE9 kryt\xED Haemophilus influenzae b zah\xE1jeno.", source: "system" });
          }
          if (nLow.includes("dexamethas") || nLow.includes("dexamed") || nLow.includes("solu-medrol")) {
            session.actionLog.push({ time: timestamp, text: "Pod\xE1ny kortikoidy i.v. s c\xEDlem sn\xED\u017Eit masivn\xED z\xE1n\u011Btliv\xFD otok epiglotis.", source: "system" });
          }
        } else if (session.caseId === "12") {
          if (nLow.includes("noradrenalin") || nLow.includes("norepinefrin")) {
            session.vitals.tk_sys = Math.min(105, session.vitals.tk_sys + 22);
            session.vitals.tk_dia = Math.min(65, session.vitals.tk_dia + 15);
            session.actionLog.push({ time: timestamp, text: "Zah\xE1jena kontinu\xE1ln\xED infuze noradrenalinu i.v. Krevn\xED tlak se zvy\u0161uje sm\u011Brem k bezpe\u010Dn\xE9mu p\xE1smu, zlep\u0161uje se perf\xFAze koron\xE1rn\xEDch a mozkov\xFDch tepen.", source: "system" });
          }
          if (nLow.includes("dobutamin")) {
            session.vitals.tf = Math.max(100, session.vitals.tf - 8);
            session.actionLog.push({ time: timestamp, text: "Zah\xE1jena kontinu\xE1ln\xED infuze dobutaminu i.v. Inotropn\xED podpora posiluje kontraktilitu oslaben\xE9ho levokomorov\xE9ho myokardu.", source: "system" });
          }
          if (nLow.includes("furosemid") || nLow.includes("lasix")) {
            session.vitals.spo2 = Math.min(94, session.vitals.spo2 + 8);
            session.vitals.rr = Math.max(20, session.vitals.rr - 6);
            session.actionLog.push({ time: timestamp, text: "Pod\xE1n Furosemid i.v. Venodilata\u010Dn\xED \xFA\u010Dinek uleh\u010Duje lev\xE9 komo\u0159e a n\xE1sledn\xFD diuretick\xFD efekt zm\xEDr\u0148uje plicn\xED ed\xE9m.", source: "system" });
          }
          if (nLow.includes("heparin")) {
            session.actionLog.push({ time: timestamp, text: "Antikoagulace heparinem i.v. aktivn\xED.", source: "system" });
          }
          if (nLow.includes("anopyrin") || nLow.includes("aspirin")) {
            session.actionLog.push({ time: timestamp, text: "Pod\xE1na kyselina acetylsalicylov\xE1. Protide\u0161ti\u010Dkov\xFD \xFA\u010Dinek zah\xE1jen.", source: "system" });
          }
        } else if (session.caseId === "13") {
          if (nLow.includes("actilyse") || nLow.includes("alteplas") || nLow.includes("trombolyz")) {
            session.actionLog.push({ time: timestamp, text: "Zah\xE1jeno pod\xE1v\xE1n\xED syst\xE9mov\xE9 trombol\xFDzy (Actilyse i.v. bolus a kontinu\xE1ln\xED infuze). Rekanalizace uzav\u0159en\xE9 mozkov\xE9 tepny zapo\u010Dala.", source: "system" });
          }
          if (nLow.includes("urapidil") || nLow.includes("ebrantil")) {
            session.vitals.tk_sys = Math.max(140, session.vitals.tk_sys - 25);
            session.vitals.tk_dia = Math.max(80, session.vitals.tk_dia - 10);
            session.actionLog.push({ time: timestamp, text: "Urapidil i.v. bolusov\u011B/infuzn\u011B pod\xE1n. Krevn\xED tlak kontrolovan\u011B kles\xE1 pod limitn\xEDch 185/110 mmHg, co\u017E umo\u017E\u0148uje bezpe\u010Dn\xE9 pod\xE1n\xED trombol\xFDzy.", source: "system" });
          }
        }
        return sendSession(session);
      }
      if (actionId === "order_labs") {
        const { labs } = details;
        const addedLabs = [];
        labs.forEach((l) => {
          if (!session.labsOrdered.includes(l)) {
            session.labsOrdered.push(l);
            addedLabs.push(l);
          }
        });
        if (addedLabs.length > 0) {
          session.actionLog.push({
            time: timestamp,
            text: `Odesl\xE1na \u017E\xE1danka do laborato\u0159e STATIM: ${addedLabs.map((l) => l.toUpperCase()).join(", ")}.`,
            source: "user"
          });
          const delayMinutes = 10;
          setTimeout(() => {
            addedLabs.forEach((l) => {
              if (sessions[sessionId] && !sessions[sessionId].labsReady.includes(l)) {
                sessions[sessionId].labsReady.push(l);
                sessions[sessionId].labsResultsReceived[l] = caseDef.labsResult[l] || "N\xE1lez bez patologie.";
                sessions[sessionId].actionLog.push({
                  time: new Date(14 * 3600 * 1e3 + 22 * 60 * 1e3 + (session.elapsedTime + delayMinutes) * 60 * 1e3).toTimeString().substring(0, 5),
                  text: `V\xFDsledky STATIM laborato\u0159e k dispozici: ${l.toUpperCase()}.`,
                  source: "result"
                });
              }
            });
          }, 4e3);
        }
        return sendSession(session);
      }
      if (actionId === "order_imaging") {
        const { method } = details;
        if (!session.imagingOrdered.includes(method)) {
          session.imagingOrdered.push(method);
          session.actionLog.push({
            time: timestamp,
            text: `Na\u0159\xEDzeno urgentn\xED vy\u0161et\u0159en\xED: ${method.toUpperCase()}.`,
            source: "user"
          });
          const delayMinutes = method === "ekg" || method === "echo" ? 3 : 8;
          setTimeout(() => {
            if (sessions[sessionId] && !sessions[sessionId].imagingReady.includes(method)) {
              sessions[sessionId].imagingReady.push(method);
              sessions[sessionId].imagingResultsReceived[method] = caseDef.imagingResult[method] || "N\xE1lez bez patologie.";
              sessions[sessionId].actionLog.push({
                time: new Date(14 * 3600 * 1e3 + 22 * 60 * 1e3 + (session.elapsedTime + delayMinutes) * 60 * 1e3).toTimeString().substring(0, 5),
                text: `V\xFDsledek vy\u0161et\u0159en\xED ${method.toUpperCase()} je p\u0159ipraven k zobrazen\xED.`,
                source: "result"
              });
            }
          }, delayMinutes * 400);
        }
        return sendSession(session);
      }
      if (actionId === "activate_trauma") {
        session.traumaTeamActivated = true;
        session.actionLog.push({
          time: timestamp,
          text: "\u{1F6A8} AKTIVOV\xC1N TRAUMA T\xDDM URGENTN\xCDHO P\u0158\xCDJMU! (Chirurg, traumatolog, ARO a radiolog se sch\xE1z\xED na s\xE1le).",
          source: "user"
        });
        return sendSession(session);
      }
    }
    if (actionText && actionText.trim()) {
      session.actionLog.push({ time: timestamp, text: `L\xE9ka\u0159: "${actionText}"`, source: "user" });
      try {
        const gemini = getGeminiClient();
        const clinicalContext = formatClinicalContext(session);
        const prompt = `
Jsi pokro\u010Dil\xE9 vyhodnocovac\xED j\xE1dro hry pro simul\xE1tor klinick\xE9ho rozhodov\xE1n\xED na \u010Desk\xE9m urgentn\xEDm p\u0159\xEDjmu.
Va\u0161\xEDm \xFAkolem je analyzovat klinick\xFD z\xE1sah/akci, kterou zadal l\xE9ka\u0159 (u\u017Eivatel) v \u010Desk\xE9m jazyce.

KONTEXT PACIENTA:
${clinicalContext}

ZADAN\xC1 AKCE L\xC9KA\u0158E (v \u010De\u0161tin\u011B):
"${actionText}"

SM\u011ARNICE PRO VYHODNOCEN\xCD:
1. Akce mus\xED b\xFDt konkr\xE9tn\xED. Obecn\xE1 vyj\xE1d\u0159en\xED jako "ud\u011Bl\xE1m odb\u011Bry" nebo "d\xE1m l\xE9ky" jsou NEPLATN\xC1.
   - Pokud u\u017Eivatel napsal n\u011Bco obecn\xE9ho, nastav "isSpecific" na false a do "message" napi\u0161 v\xFDzvu s vysv\u011Btlen\xEDm, co p\u0159esn\u011B m\xE1 specifikovat (nap\u0159. "Kter\xE9 konkr\xE9tn\xED odb\u011Bry?" nebo "Kter\xFD l\xE9k a v jak\xE9 d\xE1vce chcete podat?").
2. Pokud jde o l\xE9ky, mus\xED uv\xE9st n\xE1zev l\xE9ku, d\xE1vku a cestu pod\xE1n\xED (nap\u0159. "Anopyrin 250mg p.o." nebo "Nitroglycerin 0.5mg s.l." nebo "Heparin 5000 IU i.v."). "Stoptussin" nebo obecn\u011B "d\xE1m l\xE9ky proti bolesti" bez specifikace je nep\u0159ijateln\xE9.
3. Pokud l\xE9ka\u0159 na\u0159\xEDd\xED konkr\xE9tn\xED platn\xFD krok pro danou diagn\xF3zu, popi\u0161 reakci pacienta, vylep\u0161en\xED/zhor\u0161en\xED vit\xE1ln\xEDch funkc\xED (vitalsDelta) a p\u0159idej to do klinick\xE9ho z\xE1znamu.
4. Pokud l\xE9ka\u0159 na\u0159\xEDd\xED kritick\xFD nebo urgentn\xED odb\u011Br (nap\u0159. KO, biochemie, troponin, koagulace, D-Dimery, ABR/Astrup), detekuj to a nastav p\u0159\xEDslu\u0161n\xE9 laborato\u0159e v poli "requestedLabs", a "isLabsOrdered" na true.
5. Reaguj profesion\xE1ln\u011B, v odborn\xE9 \u010De\u0161tin\u011B s klinickou v\xE1\u017Enost\xED.

Odpov\u011Bz V\xDDHRADN\u011A v platn\xE9m form\xE1tu JSON s n\xE1sleduj\xEDc\xED strukturou (nepou\u017E\xEDvej markdown obal krom\u011B \u010Dist\xE9ho json):
{
  "isSpecific": boolean,
  "success": boolean,
  "message": "Detailn\xED klinick\xE9 vyj\xE1d\u0159en\xED o proveden\xE9 akci, jej\xEDm v\xFDsledku nebo nutnosti up\u0159esn\u011Bn\xED.",
  "actionLogEntry": "Zkr\xE1cen\xFD text pro ofici\xE1ln\xED dekurs pacienta (nap\u0159. 'Zavedena i.v. linka, odebr\xE1na STATIM laborato\u0159')",
  "vitalsDelta": {
    "tk_sys": number, // zm\u011Bna sys tlaku (nap\u0159. -10, +5)
    "tk_dia": number, // zm\u011Bna dia tlaku
    "tf": number,     // zm\u011Bna tepov\xE9 frekvence (nap\u0159. -15)
    "spo2": number,   // zm\u011Bna saturace v %
    "rr": number      // zm\u011Bna dechov\xE9 frekvence
  },
  "isLabsOrdered": boolean,
  "requestedLabs": string[] // nap\u0159. ["ko", "biochem", "coag", "abr"]
}
`;
        const response = await gemini.models.generateContent({
          model: "gemini-2.0-flash",
          contents: prompt,
          config: {
            responseMimeType: "application/json"
          }
        });
        const resText = response.text || "";
        const data = JSON.parse(resText.trim());
        if (data.success && data.isSpecific) {
          if (data.vitalsDelta) {
            const delta = data.vitalsDelta;
            if (delta.tf) session.vitals.tf = Math.max(40, Math.min(200, session.vitals.tf + delta.tf));
            if (delta.tk_sys) session.vitals.tk_sys = Math.max(60, Math.min(250, session.vitals.tk_sys + delta.tk_sys));
            if (delta.tk_dia) session.vitals.tk_dia = Math.max(30, Math.min(150, session.vitals.tk_dia + delta.tk_dia));
            if (delta.spo2) session.vitals.spo2 = Math.max(50, Math.min(100, session.vitals.spo2 + delta.spo2));
            if (delta.rr) session.vitals.rr = Math.max(8, Math.min(50, session.vitals.rr + delta.rr));
          }
          if (data.actionLogEntry) {
            session.actionLog.push({ time: timestamp, text: data.actionLogEntry, source: "system" });
          }
          if (data.isLabsOrdered && data.requestedLabs) {
            data.requestedLabs.forEach((l) => {
              const labKey = l.toLowerCase();
              if (["ko", "biochem", "coag", "mochem", "abr"].includes(labKey) && !session.labsOrdered.includes(labKey)) {
                session.labsOrdered.push(labKey);
                setTimeout(() => {
                  if (sessions[sessionId] && !sessions[sessionId].labsReady.includes(labKey)) {
                    sessions[sessionId].labsReady.push(labKey);
                    sessions[sessionId].actionLog.push({
                      time: new Date(14 * 3600 * 1e3 + 22 * 60 * 1e3 + (session.elapsedTime + 10) * 60 * 1e3).toTimeString().substring(0, 5),
                      text: `V\xFDsledky STATIM laborato\u0159e k dispozici: ${labKey.toUpperCase()}.`,
                      source: "result"
                    });
                  }
                }, 4e3);
              }
            });
          }
        }
        session.actionLog.push({ time: timestamp, text: data.message, source: "result" });
      } catch (err) {
        console.error("Gemini action error or key missing, running fallback rules:", err);
        const textLow = actionText.toLowerCase();
        let feedback = "";
        let logEntry = "";
        let isSpecific = true;
        if (textLow.includes("odb\u011Br") || textLow.includes("nabrat") || textLow.includes("laborato\u0159")) {
          const specificLabs = [];
          if (textLow.includes("ko") || textLow.includes("obraz")) specificLabs.push("ko");
          if (textLow.includes("biochem") || textLow.includes("troponin") || textLow.includes("kreatin") || textLow.includes("ionty")) specificLabs.push("biochem");
          if (textLow.includes("koagul") || textLow.includes("aptt") || textLow.includes("quick") || textLow.includes("inr")) specificLabs.push("coag");
          if (textLow.includes("mo\u010D") || textLow.includes("sediment")) specificLabs.push("mochem");
          if (textLow.includes("abr") || textLow.includes("astrup") || textLow.includes("plyny")) specificLabs.push("abr");
          if (specificLabs.length === 0) {
            isSpecific = false;
            feedback = "Kter\xE9 konkr\xE9tn\xED odb\u011Bry chcete nabrat? Specifikujte pros\xEDm (nap\u0159. STATIM KO, Biochemie - troponin, koagulace, ABR).";
          } else {
            specificLabs.forEach((l) => {
              if (!session.labsOrdered.includes(l)) {
                session.labsOrdered.push(l);
                setTimeout(() => {
                  if (sessions[sessionId] && !sessions[sessionId].labsReady.includes(l)) {
                    sessions[sessionId].labsReady.push(l);
                    sessions[sessionId].actionLog.push({
                      time: new Date(14 * 3600 * 1e3 + 22 * 60 * 1e3 + (sessions[sessionId].elapsedTime + 10) * 60 * 1e3).toTimeString().substring(0, 5),
                      text: `V\xFDsledky STATIM laborato\u0159e k dispozici: ${l.toUpperCase()}.`,
                      source: "result"
                    });
                  }
                }, 4e3);
              }
            });
            logEntry = `Odebr\xE1na krev na STATIM laborato\u0159: ${specificLabs.map((l) => l.toUpperCase()).join(", ")}.`;
            feedback = `Sestra odebrala krev na vybran\xE9 panely: ${specificLabs.map((l) => l.toUpperCase()).join(", ")}. V\xFDsledky budou do 10-15 minut.`;
          }
        } else if (textLow.includes("ekg") || textLow.includes("nato\u010Dit")) {
          if (!session.imagingOrdered.includes("ekg")) {
            session.imagingOrdered.push("ekg");
            setTimeout(() => {
              if (sessions[sessionId] && !sessions[sessionId].imagingReady.includes("ekg")) {
                sessions[sessionId].imagingReady.push("ekg");
              }
            }, 1e3);
          }
          logEntry = "Nato\u010Deno 12svodov\xE9 EKG.";
          feedback = "EKG sestra ihned nat\xE1\u010D\xED. V\xFDsledek je p\u0159ipraven k nahl\xE9dnut\xED na z\xE1lo\u017Ece zobrazovac\xEDch metod.";
        } else if (textLow.includes("anopyrin") || textLow.includes("aspirin")) {
          session.therapies.meds.push({ name: "Anopyrin", dose: "400mg", route: "p.o. rozkousat" });
          logEntry = "Pod\xE1n Anopyrin 400mg p.o.";
          feedback = "Pacient rozkousal a polkl Anopyrin 400mg p.o. Kyselina acetylsalicylov\xE1 zahajuje protide\u0161ti\u010Dkov\xFD \xFA\u010Dinek.";
        } else if (textLow.includes("heparin")) {
          session.therapies.meds.push({ name: "Heparin", dose: "5000 IU", route: "i.v. bolus" });
          logEntry = "Pod\xE1n Heparin 5000 IU i.v.";
          feedback = "Pod\xE1no 5000 IU nefrakcionovan\xE9ho heparinu i.v. Antikoagula\u010Dn\xED \xFA\u010Dinek aktivn\xED.";
        } else if (textLow.includes("kysl\xEDk") || textLow.includes("oxygen")) {
          session.therapies.oxygen = "O2 Maska 6L/min";
          logEntry = "Zah\xE1jena inhalace kysl\xEDku maskou.";
          feedback = "Zaveden kysl\xEDk 6L/min p\u0159es obli\u010Dejovou masku. Saturace O2 se zlep\u0161uje.";
          session.vitals.spo2 = Math.min(99, session.vitals.spo2 + 5);
        } else {
          isSpecific = false;
          feedback = "Zadali jste obecnou nebo neinterpretovatelnou akci. Up\u0159esn\u011Bte konkr\xE9tn\xED l\xE9k s d\xE1vkou a cestou (nap\u0159. 'Anopyrin 400mg p.o.') nebo p\u0159esn\xFD diagnostick\xFD po\u017Eadavek (nap\u0159. 'Nato\u010D\xEDm 12svodov\xE9 EKG').";
        }
        if (logEntry) {
          session.actionLog.push({ time: timestamp, text: logEntry, source: "system" });
        }
        session.actionLog.push({ time: timestamp, text: feedback, source: "result" });
      }
    }
    sendSession(session);
  });
  app.post("/api/case/consult", async (req, res) => {
    const { sessionId, specialty, message } = req.body;
    const session = sessions[sessionId];
    if (!session) {
      return res.status(404).json({ error: "Relace nebyla nalezena" });
    }
    const sendSession = (s) => {
      recordVitalsHistory(s);
      return res.json(s);
    };
    const caseDef = CASES[session.caseId];
    const timestamp = new Date(14 * 3600 * 1e3 + 22 * 60 * 1e3 + session.elapsedTime * 60 * 1e3).toTimeString().substring(0, 5);
    if (!session.chatHistory[specialty]) {
      session.chatHistory[specialty] = [];
    }
    session.chatHistory[specialty].push({
      sender: "MUDr. " + (session.level === 3 ? "Ku\u010Dera (Urgent)" : "Nov\xE1k (Urgent)"),
      text: message,
      time: timestamp
    });
    session.elapsedTime += 2;
    let reply = "Rozum\xEDm. M\xE1te k dispozici 12svodov\xE9 EKG, v\xFDsledky laboratorn\xEDch odb\u011Br\u016F a stabilizovali jste vit\xE1ln\xED funkce?";
    try {
      const gemini = getGeminiClient();
      const clinicalContext = formatClinicalContext(session);
      const prompt = `
Jsi l\xE9ka\u0159sk\xFD konzultant specializace [${specialty}] pracuj\xEDc\xED v \u010Desk\xE9 nemocnici.
Va\u0161\xEDm \xFAkolem je odpov\u011Bd\u011Bt slou\u017E\xEDc\xEDmu l\xE9ka\u0159i na urgentn\xEDm p\u0159\xEDjmu, kter\xFD s v\xE1mi konzultuje pacienta.

SPECIALISTA: ${specialty} (nap\u0159. Kardiolog, Neurolog, Chirurg, ARO)
AKTUALN\xCD STAV PACIENTA NA URGENTU:
${clinicalContext}

PERSONA SPECIALISTY:
- Kardiolog: Velmi vyt\xED\u017Een\xFD. U STEMI (Case 1) vy\u017Eaduje 12svodov\xE9 EKG, pod\xE1n\xED Anopyrinu a Heparinu k odsouhlasen\xED transportu na katetriza\u010Dn\xED s\xE1l (PCI). U kardiogenn\xEDho \u0161oku (Case 12) vy\u017Eaduje pod\xE1n\xED noradrenalinu/dobutaminu a Furosemidu (pokr\xE1j\xED plicn\xED ed\xE9m) a okam\u017Eit\xFD transport na katetriza\u010Dn\xED s\xE1l.
- Chirurg: Vy\u017Eaduje jasn\xE9 indikace k operaci. U polytraumatu chce FAST USG a stabilizaci ob\u011Bhu (trauma t\xFDm!). U pankreatitidy (Case 7) schvaluje konzervativn\xED postup na JIP, masivn\xED infuze a analgezii.
- Neurolog: U c\xE9vn\xED mozkov\xE9 p\u0159\xEDhody (Case 13) striktn\u011B vy\u017Eaduje urgentn\xED CT mozku k vylou\u010Den\xED krv\xE1cen\xED. Pokud je CT bez hemoragie, trv\xE1 na okam\u017Eit\xE9m zah\xE1jen\xED syst\xE9mov\xE9 trombol\xFDzy (Actilyse i.v.) v terapeutick\xE9m okn\u011B. Chce udr\u017Eet krevn\xED tlak pod 185/110 mmHg.
- ARO: Vy\u017Eaduje adekv\xE1tn\xED stabilizaci d\xFDchac\xEDch cest (intubace u polytraumatu, GCS < 9, nebo epiglottitidy). 
  - U febriln\xEDch k\u0159e\u010D\xED (Case 9) doporu\u010Duje paracetamol/ibuprofen a studen\xE9 z\xE1baly, pokud k\u0159e\u010De pominuly po diazepamu. 
  - U t\u011B\u017Ek\xE9ho d\u011Btsk\xE9ho astmatu (Case 10) po\u017Eaduje inhala\u010Dn\xED Ventolin/Atrovent, i.v. kortikoidy, a p\u0159\xEDpadn\u011B i.v. magnesium sulf\xE1t.
  - U epiglottitidy (Case 11) varuje p\u0159ed jak\xFDmkoliv stresov\xE1n\xEDm d\xEDt\u011Bte nebo vy\u0161et\u0159en\xEDm krku \u0161pachtl\xED (hroz\xED udu\u0161en\xED!) a doporu\u010Duje urgentn\xED \u0159\xEDzenou intubaci na s\xE1le s p\u0159\xEDtomnost\xED ARO l\xE9ka\u0159e.

Napi\u0161te realistickou, klinicky spr\xE1vnou odpov\u011B\u010F v \u010De\u0161tin\u011B, kter\xE1 odr\xE1\u017E\xED \u010Deskou nemocni\u010Dn\xED realitu (m\xEDrn\u011B form\xE1ln\xED, p\u0159\xEDm\xE1, n\u011Bkdy m\xEDrn\u011B kousav\xE1 nebo skeptick\xE1, pokud l\xE9ka\u0159 na urgentu zapomn\u011Bl z\xE1sadn\xED kroky).

Zpr\xE1va od l\xE9ka\u0159e na urgentn\xEDm p\u0159\xEDjmu:
"${message}"

Napi\u0161 pouze samotn\xFD text odpov\u011Bdi v \u010De\u0161tin\u011B. Nepou\u017E\xEDvej uvozovky ani markdown form\xE1tov\xE1n\xED.
`;
      const response = await gemini.models.generateContent({
        model: "gemini-2.0-flash",
        contents: prompt
      });
      if (response.text) {
        reply = response.text.trim();
      }
    } catch (err) {
      console.error("Consultation error or missing key, using fallback:", err);
      if (specialty === "Kardiolog") {
        if (session.caseId === "1") {
          const hasEkg = session.imagingReady.includes("ekg");
          const hasAnopyrin = session.therapies.meds.some((m) => m.name.toLowerCase().includes("anopyrin"));
          const hasHeparin = session.therapies.meds.some((m) => m.name.toLowerCase().includes("heparin"));
          if (hasEkg && hasAnopyrin && hasHeparin) {
            reply = "Skv\u011Bl\xE9, podle EKG a podan\xE9 terapie se jedn\xE1 o jasn\xE9 STEMI spodn\xED st\u011Bny. Pacient je stabilizovan\xFD, ihned ho transportujte na katetriza\u010Dn\xED s\xE1l (PCI s\xE1l). T\xFDm je p\u0159ipraven.";
          } else {
            reply = "Bez nato\u010Den\xE9ho 12svodov\xE9ho EKG a pod\xE1n\xED Anopyrinu (400mg p.o.) s Heparinem (5000 IU i.v.) pacienta na s\xE1l nep\u0159ijmu. Dopl\u0148te terapii a zavolejte znovu!";
          }
        } else if (session.caseId === "12") {
          const hasEkg = session.imagingReady.includes("ekg");
          const hasVasoactive = session.therapies.meds.some((m) => m.name.toLowerCase().includes("noradrenalin") || m.name.toLowerCase().includes("norepinefrin") || m.name.toLowerCase().includes("dobutamin"));
          if (hasEkg && hasVasoactive) {
            reply = "U pana Hor\xE1ka s masivn\xEDm p\u0159edn\xEDm STEMI a rozvinut\xFDm kardiogenn\xEDm \u0161okem je rekanalizace infarktov\xE9 tepny absolutn\xED prioritou! V\xFDborn\u011B, \u017Ee jste zah\xE1jili noradrenalin a dobutamin k udr\u017Een\xED perf\xFAze. Pod\xE1n\xED Furosemidu pro plicn\xED ed\xE9m schvaluji, ale opatrn\u011B na tlak. Pacienta ihned s monitorov\xE1n\xEDm transportujte k n\xE1m na PCI s\xE1l!";
          } else {
            reply = "Tohle je kardiogenn\xED \u0161ok p\u0159i extenzivn\xEDm p\u0159edn\xEDm STEMI s t\u011B\u017Ek\xFDm plicn\xEDm ed\xE9mem! Okam\u017Eit\u011B nato\u010Dte 12svodov\xE9 EKG a mus\xEDte nasadit vazopresorickou a inotropn\xED podporu (kontinu\xE1ln\u011B Noradrenalin a Dobutamin) k udr\u017Een\xED tlaku, jinak n\xE1m p\u0159i transportu na katetriza\u010Dn\xED s\xE1l zem\u0159e. Pak zavolejte znovu!";
          }
        } else if (session.caseId === "8") {
          reply = "U p\u0159ed\xE1vkov\xE1n\xED tricyklick\xFDmi antidepresivy vid\xEDm na EKG masivn\xED roz\u0161\xED\u0159en\xED QRS a prodlou\u017Een\xED QTc. Je to vysoce rizikov\xE9 pro komorov\xE9 arytmie! Okam\u017Eit\u011B podejte infuzi Natrium Bikarbon\xE1tu (NaHCO3) i.v. k alkalizaci, to stabilizuje myokard. Pokud dojde k z\xE1stav\u011B, volejte ihned ARO.";
        } else {
          reply = "U tohoto pacienta to nevypad\xE1 na akutn\xED koron\xE1rn\xED syndrom vy\u017Eaduj\xEDc\xED katetrizaci. Dopl\u0148te echo k l\u016F\u017Eku a vylu\u010Dte plicn\xED embolizaci.";
        }
      } else if (specialty === "Chirurg") {
        if (session.caseId === "3") {
          if (session.traumaTeamActivated) {
            reply = "Jsem na cest\u011B na urgent. P\u0159ipravte FAST USG k l\u016F\u017Eku a zahajte masivn\xED transfuzn\xED protokol, pacient krv\xE1c\xED!";
          } else {
            reply = "Aktivujte neprodlen\u011B Trauma T\xFDm! Tohle je masivn\xED polytrauma v \u0161oku, mus\xEDme kooperovat anestezii, chirurgii a radiologii.";
          }
        } else if (session.caseId === "7") {
          reply = "Ano, klinick\xFD obraz i extr\xE9mn\xED elevace amyl\xE1z a lip\xE1z jasn\u011B sv\u011Bd\u010D\xED pro akutn\xED bili\xE1rn\xED pankreatitidu. Pacientka pot\u0159ebuje masivn\xED infuzn\xED hydrataci krystaloidy, \xFApln\xFD klid nala\u010Dno a kvalitn\xED analgezii (nap\u0159. Novalgin nebo opi\xE1ty). Pokud sonografie b\u0159icha vylou\u010Dila perforaci, budeme postupovat konzervativn\u011B. P\u0159ijeme ji na chirurgickou JIP.";
        } else {
          reply = "Objednejte ultrazvuk b\u0159icha a zhodno\u0165te lok\xE1ln\xED peritone\xE1ln\xED p\u0159\xEDznaky. Pokud bude n\xE1lez pozitivn\xED, zavolejte.";
        }
      } else if (specialty === "Neurolog") {
        if (session.caseId === "13") {
          const hasCt = session.imagingReady.includes("ct");
          const hasThrombolysis = session.therapies.meds.some((m) => m.name.toLowerCase().includes("actilyse") || m.name.toLowerCase().includes("alteplas") || m.name.toLowerCase().includes("trombolyz"));
          if (hasCt) {
            if (hasThrombolysis) {
              reply = "Nativn\xED CT mozku je negativn\xED na krv\xE1cen\xED, co\u017E perfektn\u011B otev\xEDr\xE1 cestu pro syst\xE9movou trombol\xFDzu. Skv\u011Bl\xE9, \u017Ee jste Actilyse ji\u017E zah\xE1jili v \u010Dasn\xE9m okn\u011B! Sledujte neurologick\xFD deficit (NIHSS) a krevn\xED tlak, kter\xFD dr\u017Ete pod 180/105 mmHg (p\u0159\xEDpadn\u011B podejte Urapidil). Pacientku ihned p\u0159eb\xEDr\xE1me na na\u0161i iktovou jednotku.";
            } else {
              reply = "CT vylou\u010Dilo krv\xE1cen\xED a potvrzuje \u010Dasn\xE9 ischemick\xE9 zm\u011Bny vpravo. Pacientka je v \u010Dasn\xE9m terapeutick\xE9m okn\u011B (p\u0159\xEDznaky trvaj\xED jen 1 hodinu), tak\u017Ee je absolutn\u011B indikov\xE1na k pod\xE1n\xED syst\xE9mov\xE9 trombol\xFDzy (Actilyse 0.9 mg/kg i.v. - 10% bolus, zbytek hodina infuze). Pod\xE1n\xED ihned zahajte a j\xE1 p\u0159ipravuji l\u016F\u017Eko na iktov\xE9 jednotce.";
            }
          } else {
            reply = "U podez\u0159en\xED na hyperakutn\xED c\xE9vn\xED mozkovou p\u0159\xEDhodu s t\u011B\u017Ek\xFDm deficitem (NIHSS 16) mus\xEDme okam\u017Eit\u011B prov\xE9st nativn\xED CT mozku k vylou\u010Den\xED krv\xE1cen\xED! Bez toho nelze podat trombol\xFDzu a riskovali bychom fat\xE1ln\xED intracerebr\xE1ln\xED hemoragii. Po\u0161lete ji ihned na CT a jakmile uvid\xEDte sn\xEDmky, volejte m\u011B zp\u011Bt!";
          }
        } else {
          reply = "Neurologick\xE9 symptomy u tohoto p\u0159\xEDpadu nejsou dominantn\xED. Pokud vylou\u010D\xEDte metabolickou \u010Di kardi\xE1ln\xED p\u0159\xED\u010Dinu, m\u016F\u017Eeme pacienta konzultovat ambulantn\u011B.";
        }
      } else if (specialty === "ARO") {
        if (session.caseId === "3") {
          const hasIntubation = session.therapies.oxygen.toLowerCase().includes("intub") || session.therapies.oxygen.toLowerCase().includes("etk");
          if (!hasIntubation) {
            reply = "Pacient m\xE1 GCS 9 a dechov\xE9 selh\xE1v\xE1n\xED! Pro\u010D je\u0161t\u011B nen\xED zaintubovan\xFD? Okam\u017Eit\u011B zajist\u011Bte d\xFDchac\xED cesty (ETK), nalo\u017Ete p\xE1nevn\xED p\xE1s a pak ho p\u0159evezmeme na resuscita\u010Dn\xED l\u016F\u017Eko.";
          } else {
            reply = "V\xFDborn\u011B, d\xFDchac\xED cesty jsou zaji\u0161t\u011Bny. Jak\xFD je hemoglobin a lakt\xE1t? Podali jste kyselinu tranexamovou? Pokra\u010Dujte v transfuz\xEDch, l\u016F\u017Eko JIP/ARO je p\u0159ipraven\xE9.";
          }
        } else if (session.caseId === "4") {
          reply = "Pro Tobi\xE1\u0161ka (3 roky) s podez\u0159en\xEDm na subglotickou laryngitidu je kl\xED\u010Dov\xE9 zajistit chladn\xFD vlhk\xFD vzduch a podat Dexamethason (0.6 mg/kg i.v./p.o.) nebo Rectodelt \u010D\xEDpek. Pokud m\xE1 inspira\u010Dn\xED stridor i v naprost\xE9m klidu, p\u0159ipravte inhala\u010Dn\xED adrenalin (1:1000) p\u0159es nebuliz\xE1tor. Hlavn\u011B ho zbyte\u010Dn\u011B nestresujte odb\u011Bry a pl\xE1\u010Dem, to otok zhor\u0161\xED. Budeme ho monitorovat.";
        } else if (session.caseId === "5") {
          reply = "Pozor, to vypad\xE1 na rozv\xEDjej\xEDc\xED se fulminantn\xED meningokokovou sepsi! Rychle zajist\u011Bte perifern\xED vstupy, podejte Ceftriaxon (STATIM i.v.) a okam\u017Eit\u011B zahajte agresivn\xED volumoterapii krystaloidy pro rozv\xEDjej\xEDc\xED se \u0161ok. Kysl\xEDk samoz\u0159ejmost\xED. Jsem na cest\u011B k v\xE1m, p\u0159evezmeme ji na d\u011Btskou resuscita\u010Dn\xED p\xE9\u010Di.";
        } else if (session.caseId === "6") {
          reply = "U anafylaxe s hypotenz\xED a bronchospasmem/laryngospasmem okam\u017Eit\u011B aplikujte Adrenalin 0.5 mg i.m. (do stehna) - to je absolutn\xED l\xE9k prvn\xED volby! Soub\u011B\u017En\u011B zapn\u011Bte pln\xFD kysl\xEDk, podejte i.v. krystaloidy pod tlakem, Dithiaden i.v. a Solu-Medrol i.v. Pokud otok hrtanu ohroz\xED d\xFDchac\xED cesty, p\u0159ipravte se na urgentn\xED intubaci, jdu k v\xE1m!";
        } else if (session.caseId === "8") {
          reply = "Pacient v soporu (GCS 8) s intoxikac\xED kardiotoxick\xFDmi antidepresivy vy\u017Eaduje okam\u017Eit\u011B zaji\u0161t\u011Bn\xED d\xFDchac\xEDch cest intubac\xED kv\u016Fli riziku aspirace a \xFAtlumu dechu. EKG ukazuje hroziv\u011B \u0161irok\xFD QRS - ihned podejte Natrium Bikarbon\xE1t 8.4% i.v. k alkalizaci s\xE9ra (c\xEDlov\xE9 pH 7.45-7.50). Bez zaintubov\xE1n\xED a pod\xE1n\xED bikarbon\xE1tu ho nep\u0159ijmeme, jdu v\xE1m s intubac\xED pomoct.";
        } else if (session.caseId === "9") {
          reply = "U Honz\xEDka (febriln\xED k\u0159e\u010De) plat\xED: jeliko\u017E k\u0159e\u010De po rekt\xE1ln\xEDm diazepamu ustaly, nesp\u011Bchejte s agresivn\xED terapi\xED. Podejte antipyretika (Paracetamol nebo Ibuprofen \u010D\xEDpek) a chlape\u010Dka fyzik\xE1ln\u011B chla\u010Fte vla\u017En\xFDmi z\xE1baly. Monitorujte dech a saturaci. Kdyby se k\u0159e\u010De opakovaly, zavolejte n\xE1s k zaji\u0161t\u011Bn\xED d\xFDchac\xEDch cest, ale nyn\xED ho sp\xED\u0161e nechme v klidu dospat a hledejte zdroj hore\u010Dky (ou\u0161ka, krk).";
        } else if (session.caseId === "10") {
          const hasInhalation = session.therapies.meds.some((m) => m.name.toLowerCase().includes("ventolin") || m.name.toLowerCase().includes("salbutamol") || m.name.toLowerCase().includes("atrovent") || m.name.toLowerCase().includes("ipratropium"));
          const hasSteroids = session.therapies.meds.some((m) => m.name.toLowerCase().includes("solu") || m.name.toLowerCase().includes("methylprednisolon") || m.name.toLowerCase().includes("dexamet"));
          if (hasInhalation && hasSteroids) {
            reply = "Skv\u011Ble, inhala\u010Dn\xED bronchodilatancia s i.v. Solu-Medrolem jsou z\xE1klad. Pokud m\xE1 Sofinka st\xE1le t\u011B\u017Ekou dechovou t\xEDse\u0148, nasa\u010Fte magnesium sulf\xE1t (MgSO4) v pomal\xE9 infuzi, to uvoln\xED k\u0159e\u010D hladk\xFDch sval\u016F. Kysl\xEDk d\xE1vejte kontinu\xE1ln\u011B. Kdyby se objevily zn\xE1mky dechov\xE9ho vy\u010Derp\xE1n\xED, poruchy v\u011Bdom\xED nebo tich\xE9ho hrudn\xEDku, okam\u017Eit\u011B b\u011B\u017E\xEDm intubovat.";
          } else {
            reply = "T\u011B\u017Ek\xFD status asthmaticus u d\xEDt\u011Bte vy\u017Eaduje neprodlen\xE9 pod\xE1n\xED inhala\u010Dn\xEDho Ventolinu s Atroventem (nebulizac\xED) a STATIM Solu-Medrol (1-2 mg/kg i.v.)! Bez t\xE9to intensivn\xED bronchodilata\u010Dn\xED a protiz\xE1n\u011Btliv\xE9 l\xE9\u010Dby se d\xFDchac\xED cesty neuvoln\xED. Ihned to podejte a monitorujte saturaci.";
          }
        } else if (session.caseId === "11") {
          reply = "\u{1F6A8} POZOR! Tohle je jasn\xE1 akutn\xED epiglotitida (Ad\xE1mek, 4 roky), extr\xE9mn\xED urgentn\xED situace v pediatrii! Jak\xFDkoliv stres, n\xE1siln\xE9 odb\u011Bry krve nebo vy\u0161et\u0159ov\xE1n\xED hrdla \u0161pachtl\xED jsou P\u0158\xCDSN\u011A ZAK\xC1Z\xC1NY pro riziko reflexn\xEDho laryngospasmu a okam\u017Eit\xE9ho udu\u0161en\xED! Nechte chlapce v klidu sed\u011Bt u maminky, podejte zvlh\u010Den\xFD kysl\xEDk, pokud to snese bez pl\xE1\u010De. J\xE1 okam\u017Eit\u011B b\u011B\u017E\xEDm na urgent s intuba\u010Dn\xEDm i tracheotomick\xFDm setem. Budeme intubovat kontrolovan\u011B v anestezii!";
        } else {
          reply = "Pokud je pacient stabiln\xED a nepot\u0159ebuje um\u011Blou plicn\xED ventilaci ani vazopresory, ulo\u017Ete ho na standardn\xED intern\xED odd\u011Blen\xED nebo JIP.";
        }
      }
    }
    session.chatHistory[specialty].push({
      sender: "MUDr. \u010Cern\xFD (" + specialty + ")",
      text: reply,
      time: timestamp
    });
    session.actionLog.push({
      time: timestamp,
      text: `Konzultov\xE1no s odbornost\xED ${specialty}.`,
      source: "system"
    });
    sendSession(session);
  });
  app.post("/api/case/close", async (req, res) => {
    const { sessionId, disposition, diagnosisCode, epikriza, checklist } = req.body;
    const session = sessions[sessionId];
    if (!session) {
      return res.status(404).json({ error: "Relace nebyla nalezena" });
    }
    session.isCompleted = true;
    const caseDef = CASES[session.caseId];
    try {
      const gemini = getGeminiClient();
      const timelineStr = session.actionLog.map((l) => `[${l.time}] ${l.text}`).join("\n");
      const medsStr = session.therapies.meds.map((m) => `${m.name} ${m.dose} ${m.route}`).join(", ");
      const prompt = `
Jsi p\u0159\xEDsn\xE1 a vysoce odborn\xE1 atesta\u010Dn\xED komise slo\u017Een\xE1 z p\u0159edn\xEDch \u010Desk\xFDch l\xE9ka\u0159\u016F urgentn\xED medic\xEDny.
Va\u0161\xEDm \xFAkolem je vyhodnotit simulovan\xFD z\xE1sah l\xE9ka\u0159e na urgentn\xEDm p\u0159\xEDjmu ("Urgentn\xED p\u0159\xEDjem") a vypracovat detailn\xED "Zp\u011Btnou vazbu" (Debriefing) v \u010De\u0161tin\u011B.

SKUTE\u010CN\xDD STAV PACIENTA:
- Diagn\xF3za: ${caseDef.secretDiagnosis} (K\xF3d MKN-10: ${caseDef.secretDiagnosisCode})
- \xDArove\u0148 obt\xED\u017Enosti: ${session.level}

ROZHODNUT\xCD U\u017DIVATELE (L\xC9KA\u0158E):
- Zvolen\xE1 dispozice/p\u0159eklad: ${disposition} (Mo\u017Enosti: home - propustit dom\u016F, ward - standardn\xED odd., icu - JIP/ARO, surgery - opera\u010Dn\xED s\xE1l/katetriza\u010Dn\xED PCI s\xE1l)
- Zadan\xFD k\xF3d diagn\xF3zy MKN-10: ${diagnosisCode}
- Epikr\xEDza (shrnut\xED l\xE9ka\u0159e): "${epikriza}"
- Bezpe\u010Dnostn\xED checklist (safety): ${checklist ? checklist.join(", ") : "\u017E\xE1dn\xFD"}

PR\u016EB\u011AH KLINICK\xC9HO Z\xC1SAHU (LOG \u010CASOV\xC9 OSY):
${timelineStr}

TERAPEUTICK\xC9 \xDADAJE:
- Zaji\u0161t\u011Bn\xED kysl\xEDku: ${session.therapies.oxygen}
- \u017Diln\xED vstup: ${session.therapies.ivAccess}
- Podan\xE9 infuze: ${session.therapies.infusion}
- Podan\xE9 l\xE9ky: ${medsStr || "\u017D\xE1dn\xE9"}
- Celkov\xFD str\xE1ven\xFD \u010Das na l\u016F\u017Eku: ${session.elapsedTime} minut

Napi\u0161te podrobnou zp\u011Btnou vazbu rozd\u011Blenou do 4 sekc\xED:
1. SPRAVNOST DIAGN\xD3ZY: Vyhodno\u0165te p\u0159esnost zadan\xE9ho k\xF3du MKN-10 (${diagnosisCode}) a epikr\xEDzy. Pro srovn\xE1n\xED, spr\xE1vn\xE1 diagn\xF3za je ${caseDef.secretDiagnosis} (k\xF3d ${caseDef.secretDiagnosisCode}).
2. TERAPEUTICK\xDD POSTUP: Vyhodno\u0165te, zda l\xE9ka\u0159 podal v\u0161echny kritick\xE9 l\xE9ky a z\xE1kroky podle \u010Desk\xFDch doporu\u010Den\xFDch postup\u016F \u010CLS JEP.
   - Pro STEMI (Case 1) je kritick\xE9: 12svodov\xE9 EKG, Anopyrin (Aspirin), Heparin, transport na s\xE1l. Nitroglycerin je vhodn\xFD.
   - Pro Embolii (Case 2) je kritick\xE9: Kysl\xEDk, Heparin/LMWH, CT plicnice (nebo bedside Echo kv\u016Fli alergii na j\xF3d!).
   - Pro Polytrauma (Case 3) je kritick\xE9: Kr\u010Dn\xED l\xEDmec, zaji\u0161t\u011Bn\xED d\xFDchac\xEDch cest (intubace pro GCS 9), kyselina tranexamov\xE1 (Exacyl), masivn\xED transfuzn\xED protokol, FAST USG, p\xE1nevn\xED p\xE1s.
   - Pro Subglotickou laryngitidu u d\xEDt\u011Bte (Case 4) je kritick\xE9: chladn\xFD vzduch/inhalace, pod\xE1n\xED kortikosteroid\u016F (Dexamethason i.v./p.o. nebo Rectodelt \u010D\xEDpek). Pokud je t\u011B\u017Ek\xFD stridor v klidu, pak inhala\u010Dn\xED adrenalin. Vyvarovat se zbyte\u010Dn\xE9mu stresov\xE1n\xED d\xEDt\u011Bte (pl\xE1\u010D zhor\u0161uje otok).
   - Pro Meningokokovou sepse u d\xEDt\u011Bte (Case 5) je kritick\xE9: rychl\xFD i.v. vstup, okam\u017Eit\xE9 pod\xE1n\xED \u0161irokospektr\xFDch antibiotik (Ceftriaxon nebo Penicilin G) STATIM, volumoterapie (krystaloidy v bolusech) k zal\xE9\u010Den\xED septick\xE9ho \u0161oku, oxygenoterapie.
   - Pro Anafylaktick\xFD \u0161ok (Case 6) je kritick\xE9: pod\xE1n\xED Adrenalinu i.m. (nebo i.v. p\u0159i selh\xE1n\xED ob\u011Bhu) jako l\xE9k prvn\xED volby, high-flow kysl\xEDk, agresivn\xED volumoterapie, antihistaminika (Dithiaden i.v.) a kortikosteroidy (Methylprednisolon/Solu-Medrol i.v.).
   - Pro Akutn\xED pankreatitidu (Case 7) je kritick\xE9: masivn\xED infuzn\xED hydratace (krystaloidy, Ringer), \xFA\u010Dinn\xE1 analgetizace (metamizol, metamizol + opioidy), klid nala\u010Dno, monitorov\xE1n\xED. Pozor na alergii na j\xF3d p\u0159i CT.
   - Pro Intoxikaci tricyklick\xFDmi antidepresivy (Case 8) je kritick\xE9: pod\xE1n\xED Natrium Bikarbon\xE1tu (NaHCO3 8.4%) i.v. k alkalizaci s\xE9ra p\u0159i roz\u0161\xED\u0159en\xED QRS na EKG, zaji\u0161t\u011Bn\xED d\xFDchac\xEDch cest (intubace u hlubok\xE9ho bezv\u011Bdom\xED GCS 8), aktivn\xED uhl\xED, EKG monitoring.
   Vy\u010Dt\u011Bte opomenut\xED kl\xED\u010Dov\xFDch l\xE9k\u016F \u010Di zbyte\u010Dn\xE9 wasting time.
3. EFEKTIVITA A \u010CAS: Vyhodno\u0165te str\xE1ven\xFD \u010Das (${session.elapsedTime} min). Byl postup rychl\xFD, nebo l\xE9ka\u0159 pl\xFDtval \u010Dasem na zbyte\u010Dn\xE1 vy\u0161et\u0159en\xED (nap\u0159. pos\xEDlat nestabiln\xEDho pacienta s traumatem v \u0161oku na celot\u011Blov\xE9 CT p\u0159ed stabilizac\xED ob\u011Bhu a pod\xE1n\xEDm transfuz\xED)?
4. KOMUNIKACE: Byly konzultace se specialisty adekv\xE1tn\xED a v\u010Dasn\xE9?

Uve\u010Fte tak\xE9 CELKOV\xC9 HODNOCEN\xCD vyj\xE1d\u0159en\xE9 v procentech (0% a\u017E 100%) na z\xE1klad\u011B l\xE9ka\u0159sk\xE9 preciznosti a bezpe\u010Dnosti pacienta.

Odpov\u011Bzte v\xFDhradn\u011B v \u010De\u0161tin\u011B, form\xE1tujte srozumiteln\u011B v Markdownu s elegantn\xED strukturou. Nepou\u017E\xEDvejte promo hant\xFDrku ani anglicismy, mluvte jako v\xE1\u017Een\xFD \u010Desk\xFD prim\xE1\u0159.
`;
      const response = await gemini.models.generateContent({
        model: "gemini-2.0-flash",
        contents: prompt
      });
      session.debriefing = response.text || "Hodnocen\xED se nepoda\u0159ilo vygenerovat.";
    } catch (err) {
      console.error("Evaluation generation error:", err);
      let score = 50;
      let review = "### 1. Spr\xE1vnost diagn\xF3zy\n";
      const isCorrectDiag = diagnosisCode.trim().toUpperCase().includes(caseDef.secretDiagnosisCode.toUpperCase()) || epikriza.toLowerCase().includes(caseDef.secretDiagnosis.toLowerCase().substring(0, 10));
      if (isCorrectDiag) {
        score += 20;
        review += `\u2705 **V\xFDborn\u011B.** Stanovil jste spr\xE1vnou diagn\xF3zu: **${caseDef.secretDiagnosis}** (K\xF3d: ${caseDef.secretDiagnosisCode}). Va\u0161e epikr\xEDza je klinicky srozumiteln\xE1.

`;
      } else {
        review += `\u274C **Chyba.** Spr\xE1vn\xE1 diagn\xF3za byla **${caseDef.secretDiagnosis}** (K\xF3d MKN-10: ${caseDef.secretDiagnosisCode}). Va\u0161e zadan\xE1 diagn\xF3za neodpov\xEDd\xE1 klinick\xE9mu obrazu pacienta.

`;
      }
      review += "### 2. Terapeutick\xFD postup\n";
      if (session.caseId === "1") {
        const hasEkg = session.imagingReady.includes("ekg");
        const hasAnopyrin = session.therapies.meds.some((m) => m.name.toLowerCase().includes("anopyrin"));
        const hasHeparin = session.therapies.meds.some((m) => m.name.toLowerCase().includes("heparin"));
        if (hasEkg && hasAnopyrin && hasHeparin) {
          score += 20;
          review += "\u2705 **Perfektn\xED zvl\xE1dnut\xED AKS.** Nato\u010Dil jste 12svodov\xE9 EKG, v\u010Das podal du\xE1ln\xED antiagregaci (Anopyrin) a provedl plnou antikoagulaci Heparinem podle standard\u016F \u010CLS JEP.\n";
        } else {
          review += "\u274C **Z\xE1va\u017En\xE9 nedostatky v terapii STEMI!** Zapomn\u011Bl jste podat bu\u010F kyselinu acetylsalicylovou (Anopyrin) p.o. rozkousat, nebo nefrakcionovan\xFD Heparin i.v. Tyto kroky zachra\u0148uj\xED \u017Eivot p\u0159ed uz\xE1v\u011Brem v\u011Bn\u010Dit\xE9 tepny.\n";
        }
      } else if (session.caseId === "2") {
        const hasOxygen = !session.therapies.oxygen.includes("\u017D\xE1dn\xE9");
        const hasHeparin = session.therapies.meds.some((m) => m.name.toLowerCase().includes("heparin") || m.name.toLowerCase().includes("clexane") || m.name.toLowerCase().includes("fraxiparin"));
        if (hasOxygen && hasHeparin) {
          score += 20;
          review += "\u2705 **Spr\xE1vn\xFD postup u plicn\xED embolie.** Podal jste v\u010Das kysl\xEDk a zah\xE1jil antikoagula\u010Dn\xED l\xE9\u010Dbu. Pozor na hl\xE1\u0161enou alergii na j\xF3d - CT angiografie plicnice s kontrastem vy\u017Eadovala adekv\xE1tn\xED premedikaci nebo nahrazen\xED Bedside echokardiografi\xED!\n";
        } else {
          review += "\u274C **Nedostate\u010Dn\xE1 l\xE9\u010Dba plicn\xED embolie.** Selhal jste v rychl\xE9m zah\xE1jen\xED antikoagulace (Heparin/LMWH) nebo adekv\xE1tn\xEDm zaji\u0161t\u011Bn\xED hypoxie pod\xE1n\xEDm kysl\xEDku.\n";
        }
      } else if (session.caseId === "3") {
        const hasIntubation = session.therapies.oxygen.toLowerCase().includes("intub") || session.therapies.oxygen.toLowerCase().includes("etk");
        const hasExacyl = session.therapies.meds.some((m) => m.name.toLowerCase().includes("exacyl") || m.name.toLowerCase().includes("tranexam"));
        const hasTransfusion = session.therapies.infusion.toLowerCase().includes("transf") || session.therapies.infusion.toLowerCase().includes("erytr");
        if (hasIntubation && hasExacyl && hasTransfusion) {
          score += 20;
          review += "\u2705 **Excelentn\xED zvl\xE1dnut\xED masivn\xEDho polytraumatu.** V\u010Das jste zaintuboval pacienta se zhor\u0161en\xFDm v\u011Bdom\xEDm (GCS 9), podal kyselinu tranexamovou (Exacyl) pro kontrolu vnit\u0159n\xEDho krv\xE1cen\xED a zah\xE1jil masivn\xED krevn\xED p\u0159evody.\n";
        } else {
          review += "\u274C **Z\xE1va\u017En\xE1 pochyben\xED u polytraumatu v hemoragick\xE9m \u0161oku!** Opomn\u011Bl jste bu\u010F intubaci pro ochranu d\xFDchac\xEDch cest (GCS 9 vy\u017Eaduje zaji\u0161t\u011Bn\xED ETK!), pod\xE1n\xED Exacylu, nebo v\u010Dasn\xFD masivn\xED transfuzn\xED protokol k n\xE1hrad\u011B ztr\xE1t krve.\n";
        }
      } else if (session.caseId === "4") {
        const hasDexamethason = session.therapies.meds.some((m) => m.name.toLowerCase().includes("dexamethas") || m.name.toLowerCase().includes("rectodelt") || m.name.toLowerCase().includes("prednison"));
        if (hasDexamethason) {
          score += 20;
          review += "\u2705 **Spr\xE1vn\xFD postup u d\u011Btsk\xE9 subglotick\xE9 laryngitidy.** Podal jste v\u010Das kortikosteroidy (Dexamethason/Rectodelt), kter\xE9 sni\u017Euj\xED otok hrtanu. U d\u011Bt\xED je kl\xED\u010Dov\xE9 minimalizovat stres a pl\xE1\u010D a pod\xE1vat chladn\xFD vzduch.\n";
        } else {
          review += "\u274C **Chyba v terapii laryngitidy!** Zapomn\u011Bl jste podat syst\xE9mov\xE9 kortikosteroidy (Dexamethason / Rectodelt \u010D\xEDpek). Tyto l\xE9ky jsou z\xE1kladn\xEDm kamenem sn\xED\u017Een\xED otoku hrtanu u d\xEDt\u011Bte.\n";
        }
      } else if (session.caseId === "5") {
        const hasAb = session.therapies.meds.some((m) => m.name.toLowerCase().includes("ceftriax") || m.name.toLowerCase().includes("penicilin") || m.name.toLowerCase().includes("ampicilin"));
        const hasInfusion = !session.therapies.infusion.includes("\u017D\xE1dn\xE9");
        if (hasAb && hasInfusion) {
          score += 20;
          review += "\u2705 **\u017Divot zachra\u0148uj\xEDc\xED postup u meningokokov\xE9 sepse.** Okam\u017Eit\u011B jste zajistil i.v. vstup, zah\xE1jil volumoterapii pro za\u010D\xEDnaj\xEDc\xED \u0161ok a podal \u0161irokospektr\xE1 antibiotika (Ceftriaxon) STATIM. Tento agresivn\xED p\u0159\xEDstup zachr\xE1nil d\xEDt\u011B p\u0159ed fat\xE1ln\xED progres\xED.\n";
        } else {
          review += "\u274C **Z\xE1va\u017En\xE9 selh\xE1n\xED v l\xE9\u010Db\u011B meningokokov\xE9 sepse!** U meningokokov\xE9 sepse s petechiemi hraje roli ka\u017Ed\xE1 minuta. Zapomn\u011Bl jste podat okam\u017Eit\u011B i.v. \u0161irokospektr\xE1 antibiotika (Ceftriaxon) nebo dostate\u010Dn\u011B hradit ob\u011Bh infuzemi.\n";
        }
      } else if (session.caseId === "6") {
        const hasAdrenalin = session.therapies.meds.some((m) => m.name.toLowerCase().includes("adrenalin") || m.name.toLowerCase().includes("epinephrin"));
        if (hasAdrenalin) {
          score += 20;
          review += "\u2705 **Skv\u011Bl\xE9 zvl\xE1dnut\xED anafylaktick\xE9ho \u0161oku.** Podal jste v\u010Das Adrenalin, co\u017E je l\xE9k prvn\xED volby. Terapii jste vhodn\u011B doplnil kortikosteroidy, antihistaminiky (Dithiaden) a infuzn\xED podporou.\n";
        } else {
          review += "\u274C **Kritick\xE1 chyba p\u0159i anafylaktick\xE9m \u0161oku!** Nepodal jste Adrenalin - l\xE9k prvn\xED volby u anafylaxe doprov\xE1zen\xE9 hypotenz\xED a stridorem. Samotn\xFD Dithiaden nebo Solu-Medrol bez adrenalinu pacienta nezachr\xE1n\xED.\n";
        }
      } else if (session.caseId === "7") {
        const hasInfusion = !session.therapies.infusion.includes("\u017D\xE1dn\xE9");
        const hasAnalgetic = session.therapies.meds.some((m) => m.name.toLowerCase().includes("novalgin") || m.name.toLowerCase().includes("metamizol") || m.name.toLowerCase().includes("fentanyl") || m.name.toLowerCase().includes("sufent") || m.name.toLowerCase().includes("paracet") || m.name.toLowerCase().includes("dolsin"));
        if (hasInfusion && hasAnalgetic) {
          score += 20;
          review += "\u2705 **Korektn\xED postup u akutn\xED pankreatitidy.** Zajistil jste dostate\u010Dnou infuzn\xED volumoterapii (prevence hypovolemick\xE9ho \u0161oku p\u0159i 't\u0159et\xEDm prostoru') a adekv\xE1tn\xED ti\u0161en\xED bolesti analgetiky.\n";
        } else {
          review += "\u274C **Chyby v managementu pankreatitidy.** Pacientka s akutn\xED pankreatitidou vy\u017Eaduje masivn\xED hydrataci krystaloidy k prevenci mikrocirkula\u010Dn\xEDho selh\xE1n\xED pankreatu a \xFA\u010Dinnou analgezii. Jedno z toho chyb\u011Blo.\n";
        }
      } else if (session.caseId === "8") {
        const hasBikarbonat = session.therapies.meds.some((m) => m.name.toLowerCase().includes("bikarbonat") || m.name.toLowerCase().includes("bicarbon") || m.name.toLowerCase().includes("nahco3"));
        if (hasBikarbonat) {
          score += 20;
          review += "\u2705 **Vynikaj\xEDc\xED toxikologick\xFD z\xE1sah.** Rozpoznal jste TCA kardiotoxicitu (prodlou\u017Een\xE9 QRS, tachykardie) a v\u010Das podal infuzi Natrium Bikarbon\xE1tu (NaHCO3) k alkalizaci s\xE9ra a stabilizaci sod\xEDkov\xFDch kan\xE1l\u016F myokardu.\n";
        } else {
          review += "\u274C **Z\xE1va\u017En\xE9 opomenut\xED u intoxikace TCA!** P\u0159i t\u011B\u017Ek\xE9m p\u0159ed\xE1vkov\xE1n\xED tricyklick\xFDmi antidepresivy s roz\u0161\xED\u0159en\xEDm QRS komplexu na EKG je kritick\xFDm a \u017Eivot zachra\u0148uj\xEDc\xEDm krokem pod\xE1n\xED Natrium Bikarbon\xE1tu i.v. k antagonizaci kardiotoxicity.\n";
        }
      }
      review += "\n### 3. Efektivita a \u010Das\n";
      if (session.elapsedTime < 30) {
        score += 10;
        review += `\u26A1 **Vynikaj\xEDc\xED rychlost.** Vy\u0159e\u0161eno za ${session.elapsedTime} minut. Pacient byl minim\xE1ln\u011B ohro\u017Een prodlu\u017Eov\xE1n\xEDm diagn\xF3zy.
`;
      } else {
        review += `\u26A0\uFE0F **Ztr\xE1ta drahocenn\xE9ho \u010Dasu.** Str\xE1vil jste ${session.elapsedTime} minut na urgentn\xEDm p\u0159\xEDjmu. U urgentn\xEDch stav\u016F (STEMI, masivn\xED \u0161ok) rozhoduj\xED minuty.
`;
      }
      review += "\n### 4. Komunikace\n";
      review += "\u{1F4AC} Konzultace se specialisty byly provedeny. Doporu\u010Dujeme volat konzili\xE1\u0159e a\u017E po dokon\u010Den\xED z\xE1kladn\xED stabilizace a diagnostiky (EKG, vit\xE1ly).\n";
      review += `

## **CELKOV\xC9 HODNOCEN\xCD: ${Math.min(100, score)}%**`;
      session.debriefing = review;
    }
    res.json(session);
  });
  if (process.env.NODE_ENV !== "production") {
    const vite = await (0, import_vite.createServer)({
      server: { middlewareMode: true },
      appType: "spa"
    });
    app.use(vite.middlewares);
  } else {
    const distPath = import_path.default.join(process.cwd(), "dist");
    app.use(import_express.default.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(import_path.default.join(distPath, "index.html"));
    });
  }
  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}
startServer();
//# sourceMappingURL=server.cjs.map
