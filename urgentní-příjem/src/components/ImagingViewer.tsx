import React, { useRef, useEffect, useState, useCallback } from "react";
import { ZoomIn, ZoomOut, RotateCcw, ChevronUp, ChevronDown, Info, CheckCircle2, AlertTriangle, Layers } from "lucide-react";

// ─────────────────────────────────────────────────────────────────────────────
// Types & Definitions
// ─────────────────────────────────────────────────────────────────────────────
interface Annotation {
  x: number;        // 0-1 fraction of image width
  y: number;        // 0-1 fraction of image height
  label: string;
  color?: string;   // hex / tailwind color name
  arrowDir?: "up" | "down" | "left" | "right";
}

interface ImagingFinding {
  text: string;
  isPathological: boolean;
}

interface ImagingDefinition {
  reportText: string;
  findings: ImagingFinding[];
  annotations: Annotation[];
  teachingPoints: string[];
  quiz?: {
    question: string;
    options: string[];
    correctIndex: number;
    explanation: string;
  };
}

interface CaseImagingData {
  rtg?: ImagingDefinition;
  echo?: ImagingDefinition;
  ct?: ImagingDefinition;
}

// ─────────────────────────────────────────────────────────────────────────────
// Per-case clinical imaging definitions (all 13 cases)
// ─────────────────────────────────────────────────────────────────────────────
const CASE_IMAGING: Record<string, CaseImagingData> = {
  "1": { // STEMI inferior
    rtg: {
      reportText: "RTG Srdce+Plíce: Srdeční stín nezvětšen, plicní křídla bez městnání či ložiskových změn.",
      findings: [
        { text: "Srdeční stín — normální velikost (CTI < 0.5)", isPathological: false },
        { text: "Plíce — bez plicního edému, bez infiltrátů", isPathological: false },
        { text: "Kostofreniccké úhly — volné oboustranně", isPathological: false },
      ],
      annotations: [
        { x: 0.5, y: 0.55, label: "Normální srdeční stín", color: "#22c55e", arrowDir: "up" },
        { x: 0.22, y: 0.72, label: "Volný kostofrenický úhel", color: "#22c55e", arrowDir: "down" },
        { x: 0.75, y: 0.72, label: "Volný kostofrenický úhel", color: "#22c55e", arrowDir: "down" },
      ],
      teachingPoints: [
        "RTG hrudníku při nekomplikovaném STEMI je typicky normální nebo bez plicního edému.",
        "Plicní edém nastupuje při poklesu EF levé komory pod 40 % nebo při kardiogenním šoku.",
        "Klíčová diagnostika STEMI je EKG (ST elevace ≥ 1 mm ve dvou sousedních svodech)."
      ],
      quiz: {
        question: "Co je na tomto RTG hrudníku nejdůležitější NEGATIVNÍ nález?",
        options: [
          "Absence pneumotoraxu",
          "Absence plicního edému / městnání",
          "Normální poloha bránice",
          "Nepřítomnost pleury výpotku"
        ],
        correctIndex: 1,
        explanation: "Absence plicního edému potvrzuje, že STEMI zatím nevede k hemodynamickému selhání LK a kardiogennímu šoku. Při výrazném plicním edému bychom uvažovali o cardiogenním šoku (Case 12)."
      }
    },
    echo: {
      reportText: "Echokardiografie: Hypokineze dolní stěny LK, EF 45-50%, bez chlopenních vad.",
      findings: [
        { text: "Dolní stěna LK — hypokineze (snížená kinetika)", isPathological: true },
        { text: "Ejekční frakce LK — 45-50% (mírně snížena)", isPathological: true },
        { text: "Chlopenní aparát — bez vady", isPathological: false },
        { text: "Perikardiální prostor — bez výpotku", isPathological: false },
      ],
      annotations: [
        { x: 0.48, y: 0.62, label: "Hypokineze dolní stěny LK", color: "#f59e0b", arrowDir: "left" },
        { x: 0.35, y: 0.4, label: "Levá komora", color: "#adc6ff", arrowDir: "right" },
        { x: 0.62, y: 0.35, label: "Pravá komora", color: "#adc6ff", arrowDir: "left" },
      ],
      teachingPoints: [
        "Hypokineze postižené stěny je echokardiografickým ekvivalentem infarktu myokardu.",
        "Dolní stěna LK je zásobována RCA (pravá věnčitá tepna) — odpovídá STEMI svodů II, III, aVF.",
        "EF 45-50% svědčí pro střední poškození myokardu. Kritická EF < 30% hrozí kardiogenním šokem."
      ],
      quiz: {
        question: "Která věnčitá tepna zásobuje dolní stěnu LK a bývá uzavřena při 'inferior STEMI'?",
        options: [
          "LAD (levá sestupná věnčitá tepna)",
          "RCX (ramus circumflexus)",
          "RCA (pravá věnčitá tepna)",
          "LMCA (levý kmen)"
        ],
        correctIndex: 2,
        explanation: "Pravá věnčitá tepna (RCA) zásobuje dolní (inferiorní) a zadní stěnu LK. Její uzávěr se projeví jako STEMI svodů II, III, aVF. LAD zásobuje přední stěnu a septum (STEMI V1-V4)."
      }
    }
  },
  "2": { // Plicní embolie
    rtg: {
      reportText: "RTG Srdce+Plíce: Mírné projasnění vpravo (Westermarkovo znamení), bez pleurálního výpotku.",
      findings: [
        { text: "Westermarkovo znamení — hypovaskularity vpravo", isPathological: true },
        { text: "Srdeční stín — lehce rozšířený směrem vpravo", isPathological: true },
        { text: "Pleurální výpotek — nepřítomen", isPathological: false },
        { text: "Hampton's hump — klínovité zastření u bránice (variabilní)", isPathological: true },
      ],
      annotations: [
        { x: 0.72, y: 0.4, label: "Westermarkovo znamení (projasnění)", color: "#f59e0b", arrowDir: "left" },
        { x: 0.62, y: 0.72, label: "Hampton's hump? (klínovitý stín)", color: "#f59e0b", arrowDir: "up" },
        { x: 0.5, y: 0.58, label: "Mírné rozšíření pravého srdce", color: "#f87171", arrowDir: "down" },
      ],
      teachingPoints: [
        "RTG hrudníku při plicní embolii je VELMI ČASTO NORMÁLNÍ — normální RTG nevylučuje PE!",
        "Westermarkovo znamení = relativní projasnění oblasti plicního pole distálně od embolu (snížení průtoku).",
        "Hampton's hump = klínovitý infarkt periferní plíce, základ u periferie k pleuře.",
        "Diagnostikou volby je CT pulmonální angiografie (CTPA)."
      ],
      quiz: {
        question: "Který radiografický znak označuje fokální projasnění plic distálně od tromboembolie?",
        options: [
          "Hampton's hump",
          "Kerleyho linie B",
          "Westermarkovo znamení",
          "Fleischnerovo znamení"
        ],
        correctIndex: 2,
        explanation: "Westermarkovo znamení označuje oligemii (snížení průtoku) distálně od uzavřené cévní větve. Hampton's hump je klínovitá plicní konsolidace v důsledku plicního infarktu. Kerleyho linie B jsou horizontální čáry u baze plic svědčící pro plicní edém."
      }
    },
    ct: {
      reportText: "CT Pulmonální angiografie: Prokázán masivní embolus v pravé plicní tepně zasahující do lobárních větví.",
      findings: [
        { text: "Pravá plicní tepna — defekt plnění (embolus)", isPathological: true },
        { text: "Lobární větve vpravo — oblekovité filling defekty", isPathological: true },
        { text: "Levá strana — bez prokázaného embolu", isPathological: false },
        { text: "Srdce — dilatace pravé komory (RV/LV > 1.0)", isPathological: true },
      ],
      annotations: [
        { x: 0.6, y: 0.4, label: "EMBOLUS v pravé plicní tepně", color: "#f87171", arrowDir: "left" },
        { x: 0.62, y: 0.52, label: "Defekt plnění kontrastu", color: "#f87171", arrowDir: "up" },
        { x: 0.38, y: 0.38, label: "Levá plicní tepna — volná", color: "#22c55e", arrowDir: "right" },
        { x: 0.5, y: 0.65, label: "Dilatace pravé komory (RV > LV)", color: "#f59e0b", arrowDir: "up" },
      ],
      teachingPoints: [
        "CTPA je zlatý standard diagnostiky plicní embolie — senzitivita a specificita > 95%.",
        "Defekt plnění kontrastu ('filling defect') v plicní tepně je přímý důkaz embolu.",
        "Dilatace pravé komory (RV/LV > 1.0) na CT svědčí pro středně vysoké nebo vysoké riziko PE.",
        "Poměr RV/LV na čtyřkomorovém řezu srdce je klíčovým prognostickým ukazatelem."
      ],
      quiz: {
        question: "Jaký nález na CTPA je přímým důkazem plicní embolie?",
        options: [
          "Westermarkovo znamení v plicním poli",
          "Defekt plnění (filling defect) kontrastu v plicní tepně",
          "Dilatace pravé komory",
          "Vysoká denzita (HU > 60) v plicní parenchymu"
        ],
        correctIndex: 1,
        explanation: "Defekt plnění kontrastu uvnitř plicní tepny je přímou vizualizací trombu. Dilatace pravé komory je nepřímý průvodní nález svědčící pro závažnost PE. Westermarkovo znamení je RTG nález, nikoli CT."
      }
    },
    echo: {
      reportText: "Bedside Echo: Dilatace pravé komory (RV/LV = 1.1), oploštění mezikomorového septa, trikuspidální regurgitace.",
      findings: [
        { text: "Pravá komora — dilatace (RV/LV > 1.0)", isPathological: true },
        { text: "Mezikomorové septum — paradoxní pohyb (D-sign)", isPathological: true },
        { text: "Trikuspidální regurgitace — gradient 40 mmHg (tlak v PA ↑)", isPathological: true },
        { text: "Dolní dutá žíla — dilatovaná bez kollapsu (↑ P CVP)", isPathological: true },
      ],
      annotations: [
        { x: 0.62, y: 0.38, label: "Dilatovaná PK (RV/LV > 1)", color: "#f87171", arrowDir: "left" },
        { x: 0.5, y: 0.55, label: "D-sign septa (paradoxní pohyb)", color: "#f59e0b", arrowDir: "up" },
        { x: 0.38, y: 0.35, label: "LK komprimovaná enlarged PK", color: "#adc6ff", arrowDir: "right" },
      ],
      teachingPoints: [
        "Dilatace pravé komory s D-sign mezikomorového septa svědčí pro akutní cor pulmonale (přetížení PK).",
        "D-sign = oploštění mezikomorového septa v parasternálním pohledu — komora má tvar písmene D místo kulatého O.",
        "McConnell's sign = hypokineze volné stěny PK se zachovanou kinetiku hrotu (specifické pro PE).",
        "Bedside echo je klíčové při hemodynamické nestabilitě — umožňuje rychlou klasifikaci rizika."
      ],
      quiz: {
        question: "Co znamená 'McConnell's sign' na echokardiografii u plicní embolie?",
        options: [
          "Dilatace pravé síně",
          "Hypokineze volné stěny PK se zachovanou kinetiku hrotu PK",
          "Perikardiální výpotek",
          "Trikuspidální stenóza"
        ],
        correctIndex: 1,
        explanation: "McConnell's sign je relativně specifický pro plicní embolii: volná stěna PK hypokinetická, ale hrot PK zachovává normální kontraktilitu. Je způsoben akutním přetížením PK."
      }
    }
  },
  "3": { // Polytrauma
    rtg: {
      reportText: "RTG Pánve+Hrudníku: Zlomenina pánve 'otevřená kniha', hemotorax vpravo, fraktury žeber 4-7.",
      findings: [
        { text: "Pánev — diastáza symfýzy 4 cm (typ 'otevřená kniha')", isPathological: true },
        { text: "Pravá pleurální dutina — hemotorax s kolapsem plíce", isPathological: true },
        { text: "Žebra vpravo 4-7 — fraktury", isPathological: true },
        { text: "Mediastinum — nepřesunuté", isPathological: false },
      ],
      annotations: [
        { x: 0.5, y: 0.82, label: "Diastáza symfýzy 4 cm (otevřená kniha)", color: "#f87171", arrowDir: "up" },
        { x: 0.72, y: 0.42, label: "Hemotorax vpravo (fluidotorax)", color: "#f87171", arrowDir: "left" },
        { x: 0.76, y: 0.3, label: "Zlomeniny žeber 4-7 vpravo", color: "#f59e0b", arrowDir: "down" },
        { x: 0.45, y: 0.35, label: "Mediastinum nepřesunuté", color: "#22c55e", arrowDir: "right" },
      ],
      teachingPoints: [
        "Zlomenina pánve 'otevřená kniha' (APC typ) je spojena s masivním krvácením z pánevního venózního plexu.",
        "Hemotorax vpravo: opacifikace pleurální dutiny tekutinou — nutná drenáž hrudního kanálu (thorakocentéza).",
        "ATLS protokol: A-B-C-D-E. RTG hrudníku, pánve a C-páteře jsou součástí primárního traumatologického scanu.",
        "Nestabilní zlomenina pánve = urgentní stabilizace pánvním pásem nebo C-klampem!"
      ],
      quiz: {
        question: "Jaká je první urgentní léčba nestabilní zlomeniny pánve s masivním krvácením v přednemocniční péči?",
        options: [
          "Urgentní RTG a CT pánve",
          "Aplikace pánvního pásu (pelvic binder) nebo C-klampu",
          "Laparotomie",
          "Arteriální embolizace"
        ],
        correctIndex: 1,
        explanation: "Pánvní pás (pelvic binder) nebo C-klamp mechanicky komprimuje pánevní kruh, redukuje volný prostor pro krvácení a může být život zachraňující. Arteriální embolizace a operace následují v nemocnici."
      }
    },
    echo: {
      reportText: "FAST USG (Trauma): Pozitivní Morrison + hemotorax vpravo + volná tekutina v pánvi.",
      findings: [
        { text: "Morisonova kapsa (jaterně-renální prostor) — anechogenní tekutina (krev)", isPathological: true },
        { text: "Pravá pleurální dutina — velká anechogenní zóna (hemotorax)", isPathological: true },
        { text: "Pánev (Douglasův prostor) — volná tekutina", isPathological: true },
        { text: "Perikard — bez výpotku", isPathological: false },
      ],
      annotations: [
        { x: 0.6, y: 0.48, label: "Morisonova kapsa: krev +++", color: "#f87171", arrowDir: "left" },
        { x: 0.62, y: 0.28, label: "Hemotorax vpravo", color: "#f87171", arrowDir: "left" },
        { x: 0.5, y: 0.72, label: "Volná tekutina v pánvi", color: "#f87171", arrowDir: "up" },
        { x: 0.4, y: 0.45, label: "Jaterní parenchym", color: "#adc6ff", arrowDir: "right" },
      ],
      teachingPoints: [
        "FAST (Focused Assessment with Sonography in Trauma) je rychlá primární ultrazvuková diagnostika při polytraumatu.",
        "Pozitivní FAST = volná tekutina v abdominálních/pleurálních prostorách → indikuje urgentní operaci nebo intervenci.",
        "Anechogenní (tmavé) oblasti v ultrazvuku = tekutina (krev, výpotek, ascites).",
        "eFAST (Extended FAST) zahrnuje také hodnocení pneumotoraxu bilaterálně a perikardiálního výpotku."
      ],
      quiz: {
        question: "Co označuje anechogenní (tmavá) oblast v Morisonově kapse při FAST ultrasonografii?",
        options: [
          "Edém jaterního parenchymu",
          "Volná tekutina (nejčastěji krev) v hepatorenálním prostoru",
          "Střevní peristaltika",
          "Artefakt"
        ],
        correctIndex: 1,
        explanation: "Anechogenní zóna v Morisonově kapse je klasickým nálezem při peritoneálním krvácení. Tento hepatorenální prostor je nejzávislejší části pravé peritoneální dutiny v supinní poloze — krev se zde hromadí jako první."
      }
    }
  },
  "4": { // Croup
    rtg: {
      reportText: "RTG krku: Subglotické zúžení — tzv. 'steeple sign' (znamení kostelní věže).",
      findings: [
        { text: "Subglotický prostor — symetrické zúžení (steeple sign)", isPathological: true },
        { text: "Epiglottis — normální (vylučuje epiglotitidu)", isPathological: false },
        { text: "Plicní parenchym — bez infiltrátů", isPathological: false },
      ],
      annotations: [
        { x: 0.5, y: 0.3, label: "Steeple sign (subglotické zúžení)", color: "#f87171", arrowDir: "down" },
        { x: 0.5, y: 0.2, label: "Normální epiglottis", color: "#22c55e", arrowDir: "down" },
      ],
      teachingPoints: [
        "'Steeple sign' (věžový znak) = symetrické subglotické zúžení průdušnice na PA snímku krku — typické pro croup.",
        "Epiglotitida vs. Croup: epiglotitida = 'thumb sign' (palcový znak) — zduřelá epiglottis, asymetrické.",
        "RTG krku je pomocná diagnostika — diagnóza croupu je primárně klinická (štěkavý kašel, inspirační stridor).",
        "RTG je kontraindikováno u podezření na epiglotitidu — stres spouští laryngospasmus!"
      ],
      quiz: {
        question: "Jak se nazývá radiografický znak typický pro laryngotracheobronchitidu (croup)?",
        options: [
          "Thumb sign (palcový znak)",
          "Steeple sign (věžový znak)",
          "Sail sign (plachtový znak)",
          "Luftsichel sign"
        ],
        correctIndex: 1,
        explanation: "Steeple sign (věžový/kostelní věže znak) = symetrické subglotické zúžení průdušnice na přední projekci krku. Thumb sign je naopak typický pro epiglotitidu (zduřelá epiglottis vypadá jako palec)."
      }
    }
  },
  "6": { // Anafylaxe
    ct: {
      reportText: "CT Krku: Masivní edém hrtanu a měkkých tkání, kritické zúžení dýchacích cest.",
      findings: [
        { text: "Měkké tkáně krku — masivní edém, infiltrace", isPathological: true },
        { text: "Hrtan (larynx) — výrazné zúžení průsvitu", isPathological: true },
        { text: "Podkožní tkáně — edém, infiltrace", isPathological: true },
        { text: "Nádorová masa — nepřítomna", isPathological: false },
      ],
      annotations: [
        { x: 0.5, y: 0.38, label: "Edém laryngu — kritické zúžení", color: "#f87171", arrowDir: "down" },
        { x: 0.38, y: 0.45, label: "Edém měkkých tkání krku", color: "#f59e0b", arrowDir: "right" },
        { x: 0.62, y: 0.45, label: "Edém měkkých tkání krku", color: "#f59e0b", arrowDir: "left" },
      ],
      teachingPoints: [
        "CT krku u anafylaxe zobrazuje edém hrtanu jako příčinu obstrukce dýchacích cest.",
        "V klinické praxi se CT krku při anafylaxi NEPROVÁDÍ — čas je kritický, prioritou je léčba!",
        "Léčba anafylaxe: Adrenalin i.m. 0.5 mg do laterálního stehna (první volba), antihistaminika, kortikosteroidy.",
        "Urgentní zajištění dýchacích cest: OTI nebo chirurgická koniotomie při neúspěšné OTI."
      ],
      quiz: {
        question: "Jaký je lék první volby při anafylaktickém šoku?",
        options: [
          "Methylprednisolon i.v.",
          "Chlorfenamin (antihistaminikum) i.m.",
          "Adrenalin 0.5 mg i.m. do laterálního stehna",
          "Dopamin i.v. infuze"
        ],
        correctIndex: 2,
        explanation: "Adrenalin 0.5 mg i.m. do laterálního stehna (Anterolaterální stehno) je absolut první volba. Antihistaminika a kortikosteroidy jsou podpůrná léčba — snižují pozdní reakci, ale nezastaví akutní šok. Adrenalin zachraňuje život!"
      }
    }
  },
  "7": { // Pankreatitida
    echo: {
      reportText: "Sonografie břicha: Zvětšení hlavy pankreatu, peripankreatická tekutina, cholecystoliáza.",
      findings: [
        { text: "Pankreas — zvětšení, prosáknutí hlavy (snížená echogenita)", isPathological: true },
        { text: "Peripankreaticky — volná tekutinová kolekce", isPathological: true },
        { text: "Žlučník — cholecystoliáza (konkrementy)", isPathological: true },
        { text: "Ductus choledochus — mírně dilatován 7 mm (norma < 6 mm)", isPathological: true },
      ],
      annotations: [
        { x: 0.5, y: 0.52, label: "Zvětšená hlava pankreatu (↓ echogenita)", color: "#f87171", arrowDir: "up" },
        { x: 0.5, y: 0.65, label: "Peripankreatická tekutinová kolekce", color: "#f59e0b", arrowDir: "up" },
        { x: 0.3, y: 0.4, label: "Cholecystoliáza (konkrementy)", color: "#f87171", arrowDir: "right" },
      ],
      teachingPoints: [
        "Ultrazvuk břicha je první volbou u suspektní pankreatitidy — dostupný, levný, bezradiacní.",
        "Prosáknutí a zvětšení pankreatu s peripankreatickou tekutinou = echokardiografický obraz akutní pankreatitidy.",
        "Cholecystoliáza jako příčina biliární pankreatitidy: konkrementy ve žlučníku blokují papilu Vateri.",
        "CT břicha je indikováno pro staging závažnosti pankreatitidy (Balthazar skóre) a průkaz nekrózy."
      ],
      quiz: {
        question: "Jaký nález na abdominální sonografii NEJLÍPE svědčí pro biliární (žlučníkovou) etiologii pankreatitidy?",
        options: [
          "Splenomegalie",
          "Ascites v dutině břišní",
          "Cholecystoliáza s dilatovaným choledochem",
          "Dilatace střevních kliček"
        ],
        correctIndex: 2,
        explanation: "Cholecystoliáza (konkrementy ve žlučníku) s dilatovaným choledochem svědčí pro biliární etiologii — drobný konkremen přechodně obstruoval papilu Vateri a spustil pankreatitidu. Je to nejčastější příčina pankreatitidy u žen středního věku."
      }
    },
    ct: {
      reportText: "CT Břicha: Akutní pankreatitida s peripankreatickými kolekcemi (Balthazar C-D), bez nekrózy.",
      findings: [
        { text: "Pankreas — zvětšený, nehomogenní, peripankreatická zánětlivá infiltrace", isPathological: true },
        { text: "Tekutinové kolekce peripankreaticky — Balthazar C-D", isPathological: true },
        { text: "Parenchym pankreatu — bez nekrózy (zachycení kontrastu)", isPathological: false },
        { text: "Játra, slezina, ledviny — bez fokálních lézí", isPathological: false },
      ],
      annotations: [
        { x: 0.5, y: 0.48, label: "Zvětšený pankreas s peripankreatickým tukem ↑", color: "#f87171", arrowDir: "up" },
        { x: 0.42, y: 0.62, label: "Peripankreatické kolekce", color: "#f59e0b", arrowDir: "up" },
        { x: 0.5, y: 0.42, label: "Pankreas bez nekrózy (CE CT)", color: "#22c55e", arrowDir: "down" },
      ],
      teachingPoints: [
        "Balthazar CT klasifikace: A (normální) → E (rozsáhlé nekrózy, absces) — prognostický nástroj.",
        "Nekrotizující pankreatitida = oblasti pankreatu bez postkontrastního sycení — vysoká mortalita.",
        "CT je zlatý standard pro staging pankreatitidy a detekci komplikací (absces, pseudocysta).",
        "CT by mělo být provedeno ≥ 48-72 h od vzniku příznaků pro přesné zhodnocení nekrózy."
      ],
      quiz: {
        question: "Co označuje 'nekrotizující pankreatitida' na kontrastním CT břicha?",
        options: [
          "Větší množství peripankreatické tekutiny",
          "Oblasti pankreatu bez postkontrastního sycení (nekróza parenchymu)",
          "Dilatace Wirsungova vývodu",
          "Přítomnost plynu v retroperitoneu"
        ],
        correctIndex: 1,
        explanation: "Nekrotizující pankreatitida je charakterizována oblastmi parenchymu bez postkontrastního sycení na CE-CT — hypoperfundované/nekrotické části. Mortalita nekrotizující pankreatitidy (zejm. infikované nekrózy) je > 20%."
      }
    }
  },
  "12": { // Kardiogenní šok
    rtg: {
      reportText: "RTG Hrudníku: Motýlovitý alveolární plicní edém + zvětšený srdeční stín.",
      findings: [
        { text: "Srdeční stín — výrazně zvětšen doleva (kardiomegalie)", isPathological: true },
        { text: "Plicní pole — motýlovité zastření ('butterfly' / 'bat wing' pattern)", isPathological: true },
        { text: "Hilové kresby — rozmazané, smyté (alveolární edém)", isPathological: true },
        { text: "Kerleyho linie B — horizontální čáry u baze plic", isPathological: true },
      ],
      annotations: [
        { x: 0.5, y: 0.58, label: "Zvětšený srdeční stín (CTI > 0.55)", color: "#f87171", arrowDir: "up" },
        { x: 0.3, y: 0.42, label: "Alveolární edém levého plicního křídla", color: "#f87171", arrowDir: "right" },
        { x: 0.7, y: 0.42, label: "Alveolární edém pravého plicního křídla", color: "#f87171", arrowDir: "left" },
        { x: 0.2, y: 0.68, label: "Kerleyho B linie (interst. edém)", color: "#f59e0b", arrowDir: "right" },
      ],
      teachingPoints: [
        "Motýlovitý (butterfly/bat wing) plicní edém = symetrické perihilózní zastření obou plicních křídel — klasický obraz kardiogenního edému.",
        "Kerleyho linie B = horizontální čáry kolmé na periferii plic, délka 1-3cm — interstitiální edém (zvýšený hydrostatický tlak).",
        "CTI (kardiothorakální index) > 0.5 = kardiomegalie.",
        "Intenzita plicního edému koreluje s výší PCWP (tlak v zaklínění): > 25 mmHg = alveolární edém."
      ],
      quiz: {
        question: "Jak se nazývá radiografický vzorec symetrického perihilárního zastření plic typický pro kardiogenní plicní edém?",
        options: [
          "Steeple sign",
          "Butterfly/bat wing pattern (motýlovitý vzorec)",
          "Westermarkovo znamení",
          "White-out plíce (whiteout)"
        ],
        correctIndex: 1,
        explanation: "Butterfly/bat wing pattern = symetrické perihilární zastření — plicní edém tekutinou z hypertenzního malého oběhu vyzařuje od hilů jako křídla motýla. White-out = kompletní neprůhlednost celé plíce (ARDS, masivní výpotek)."
      }
    },
    echo: {
      reportText: "Bedside ECHO: EF LK 20-25%, těžká difúzní porucha kinetiky přední stěny a hrotu.",
      findings: [
        { text: "Ejekční frakce LK — kriticky snížena 20-25%", isPathological: true },
        { text: "Přední stěna + hrot LK — akineze (bez pohybu)", isPathological: true },
        { text: "Levá síň — dilatovaná", isPathological: true },
        { text: "Mechanické komplikace (ruptura septa/papil. svalu) — neprokazaty", isPathological: false },
      ],
      annotations: [
        { x: 0.45, y: 0.55, label: "Akineze přední stěny + hrotu (EF ≈ 20%)", color: "#f87171", arrowDir: "right" },
        { x: 0.38, y: 0.35, label: "Dilatovaná levá síň", color: "#f59e0b", arrowDir: "down" },
        { x: 0.62, y: 0.4, label: "Pravá komora — rozšířena", color: "#f59e0b", arrowDir: "left" },
      ],
      teachingPoints: [
        "EF < 30% = těžká systolická dysfunkce LK — podkladem kardiogenního šoku.",
        "Akineze přední stěny + hrotu = uzávěr LAD (levé sestupné věnčité tepny) — extenzivní přední STEMI.",
        "Bedside echo při kardiogenním šoku: klíčové pro vyloučení mechanických komplikací (VSD, MR, tamponáda).",
        "IABP (intraaortální balonková pumpa) nebo Impella — mechanická srdeční podpora při refrakterním kardiogenním šoku."
      ],
      quiz: {
        question: "Která věnčitá tepna je zodpovědná za extenzivní přední STEMI (V1-V5) s akinezí přední stěny?",
        options: [
          "RCA (pravá věnčitá tepna)",
          "RCX (ramus circumflexus)",
          "LAD (levá přední sestupná tepna)",
          "LMCA (levý kmen)"
        ],
        correctIndex: 2,
        explanation: "LAD (left anterior descending artery) zásobuje přední stěnu LK, septum a hrot — uzávěr způsobuje extenzivní přední STEMI ve svodech V1-V5 a potenciálně nejhorší prognózu. LMCA uzávěr zásobuje celé levé srdce — okamžitá zástava."
      }
    }
  },
  "13": { // CMP
    ct: {
      reportText: "CT Mozku: Bez krvácení, časné znaky ischemie vpravo, hyperdenzní ACM vpravo (trombus).",
      findings: [
        { text: "Intrakraniální krvácení — NEPŘÍTOMNO (klíčový nález!)", isPathological: false },
        { text: "Hyperdenzní arteria cerebri media vpravo — akutní trombus", isPathological: true },
        { text: "Setření struktury kůry-podkoří oblasti inzuly vpravo — časná ischemie", isPathological: true },
        { text: "Mass effect — zatím bez přesunu středočárových struktur", isPathological: false },
      ],
      annotations: [
        { x: 0.62, y: 0.38, label: "Hyperdenzní ACM vpravo (trombus!)", color: "#f87171", arrowDir: "left" },
        { x: 0.65, y: 0.5, label: "Setření denzity kůry-podkoří (ischemie)", color: "#f59e0b", arrowDir: "left" },
        { x: 0.5, y: 0.5, label: "Střední čára — nepřesunutá (příznivé)", color: "#22c55e", arrowDir: "up" },
        { x: 0.35, y: 0.45, label: "Levá hemisféra — bez ischemie", color: "#22c55e", arrowDir: "right" },
      ],
      teachingPoints: [
        "Nativní CT mozku je PRVNÍ vyšetření při podezření na CMP — primárně vylučuje krvácení (kontraindikace trombolýzy)!",
        "Hyperdenzní arteria cerebri media = přímá vizualizace akutního trombu v ACM (svědčí pro velký uzávěr cévy, LVO).",
        "'MCA dense sign' (hyperdenzní ACM) = negativní prognostický faktor, svědčí pro rozsáhlý infarkt.",
        "Časné znaky ischemie na CT: setření struktury kůry-podkoří, ztráta denzity bazálních ganglií, ASPECTS skóre."
      ],
      quiz: {
        question: "Co znamená 'hyperdenzní ACM sign' (hyperdenzní arteria cerebri media) na nativním CT mozku?",
        options: [
          "Kalcifikace stěny tepny (ateroskleróza)",
          "Akutní trombus uvnitř střední mozkové tepny — přímá vizualizace embolu",
          "Kontrastní látka z předchozího CT",
          "Arteriální aneuryzma"
        ],
        correctIndex: 1,
        explanation: "Hyperdenzní ACM sign = vyšší denzita (HU > 40-50) uvnitř střední mozkové tepny oproti kontralaterální straně — akutní krevní trombus/koagulum zvyšuje denzitu. Je přímou vizualizací intraluminálního embolu a svědčí pro velký uzávěr cévy (LVO)."
      }
    }
  }
};

// ─────────────────────────────────────────────────────────────────────────────
// SVG Chest X-Ray Component (RTG)
// ─────────────────────────────────────────────────────────────────────────────
interface RTGViewerProps {
  caseId: string;
  annotations: Annotation[];
  showAnnotations: boolean;
}

function RTGViewer({ caseId, annotations, showAnnotations }: RTGViewerProps) {
  // Returns case-specific SVG pathology elements
  const getPathologyLayer = () => {
    switch (caseId) {
      case "12": // Kardiogenní šok - massive pulmonary edema + big heart
        return (
          <>
            {/* Enlarged heart */}
            <ellipse cx="200" cy="270" rx="115" ry="100" fill="rgba(255,255,255,0.22)" />
            {/* Bilateral alveolar opacities (butterfly pattern) */}
            <ellipse cx="112" cy="220" rx="65" ry="80" fill="rgba(220,200,200,0.38)" />
            <ellipse cx="290" cy="220" rx="65" ry="80" fill="rgba(220,200,200,0.38)" />
            {/* Kerley B lines */}
            {[0,1,2,3,4].map(i => (
              <line key={i} x1={60} y1={290+i*10} x2={88} y2={290+i*10} stroke="rgba(200,160,160,0.8)" strokeWidth="1.2"/>
            ))}
            {[0,1,2,3,4].map(i => (
              <line key={i} x1={310} y1={290+i*10} x2={338} y2={290+i*10} stroke="rgba(200,160,160,0.8)" strokeWidth="1.2"/>
            ))}
          </>
        );
      case "2": // PE - Westermark, Hampton's hump
        return (
          <>
            {/* Westermark sign - hypolucent right upper zone */}
            <ellipse cx="285" cy="175" rx="55" ry="60" fill="rgba(250,250,230,0.25)" stroke="rgba(255,230,100,0.5)" strokeWidth="1.5" strokeDasharray="4 3"/>
            {/* Hampton's hump - wedge-shaped opacity at right base */}
            <polygon points="255,330 310,330 280,300" fill="rgba(200,180,160,0.45)" />
            {/* Slight right heart enlargement */}
            <ellipse cx="220" cy="275" rx="92" ry="88" fill="rgba(255,255,255,0.19)" />
          </>
        );
      case "3": // Polytrauma - hemothorax right + rib fractures
        return (
          <>
            {/* Hemothorax right - complete opacification right lower zone */}
            <rect x="230" y="260" width="120" height="120" rx="10" fill="rgba(180,160,160,0.55)" />
            <ellipse cx="290" cy="315" rx="55" ry="55" fill="rgba(180,160,160,0.45)" />
            {/* Rib fractures - marks on right ribs */}
            {[145,165,185,205].map((y, i) => (
              <line key={i} x1={300+i*2} y1={y-5} x2={315+i*2} y2={y+8} stroke="rgba(255,100,100,0.9)" strokeWidth="2.5"/>
            ))}
          </>
        );
      case "10": // Astma - hyperinflation
        return (
          <>
            {/* Flattened diaphragm */}
            <path d="M 70 355 Q 200 340 330 355" stroke="rgba(240,200,100,0.8)" strokeWidth="2.5" fill="none"/>
            {/* Hyperinflated lung fields - darker (more radiolucent) */}
            <ellipse cx="128" cy="210" rx="68" ry="95" fill="rgba(10,10,10,0.1)" />
            <ellipse cx="272" cy="210" rx="68" ry="95" fill="rgba(10,10,10,0.1)" />
            {/* Increased bronchovascular markings */}
            {[0,1,2,3].map(i => (
              <line key={i} x1={140+i*8} y1={130} x2={130+i*6} y2={220} stroke="rgba(180,180,180,0.4)" strokeWidth="1"/>
            ))}
          </>
        );
      case "4": // Croup - steeple sign on neck (used as RTG neck view)
        return (
          <>
            {/* Narrowed subglottic airway */}
            <rect x="185" y="155" width="30" height="80" fill="rgba(0,0,0,0.6)" /> {/* normal trachea above */}
            <rect x="190" y="200" width="20" height="60" fill="rgba(0,0,0,0.6)" rx="3"/> {/* subglottic narrowing */}
          </>
        );
      default: // Normal CXR (cases 1, 5, 8, etc)
        return null;
    }
  };

  return (
    <svg viewBox="0 0 400 420" className="w-full max-h-80 md:max-h-96" style={{ background: "#1a1a1a" }}>
      {/* Film background */}
      <rect width="400" height="420" fill="#1a1a1a" />

      {/* Lung fields */}
      <ellipse cx="128" cy="215" rx="75" ry="115" fill="#2a2a2a" />
      <ellipse cx="272" cy="215" rx="75" ry="115" fill="#2a2a2a" />

      {/* Rib cage - roughly drawn */}
      {[0,1,2,3,4,5,6,7].map(i => {
        const y = 110 + i * 30;
        const w = 60 + (i < 4 ? i * 5 : (7-i)*3);
        return (
          <g key={i}>
            <path d={`M ${90-w} ${y} Q ${90} ${y-10} ${175-i*3} ${y+8}`} stroke="rgba(190,190,190,0.4)" strokeWidth="2" fill="none"/>
            <path d={`M ${310+w} ${y} Q ${310} ${y-10} ${225+i*3} ${y+8}`} stroke="rgba(190,190,190,0.4)" strokeWidth="2" fill="none"/>
          </g>
        );
      })}

      {/* Mediastinum / trachea */}
      <rect x="191" y="55" width="18" height="90" fill="rgba(50,50,50,0.9)" rx="3" />

      {/* Carina */}
      <path d="M 191 140 Q 160 155 145 165" stroke="rgba(180,180,180,0.5)" strokeWidth="2" fill="none"/>
      <path d="M 209 140 Q 240 155 255 165" stroke="rgba(180,180,180,0.5)" strokeWidth="2" fill="none"/>

      {/* Heart / cardiac silhouette */}
      <ellipse cx="190" cy="270" rx="85" ry="82" fill="rgba(255,255,255,0.14)" />

      {/* Diaphragm */}
      <path d="M 55 365 Q 128 348 200 352 Q 272 348 345 365" stroke="rgba(200,200,200,0.6)" strokeWidth="3" fill="none"/>
      <path d="M 55 367 Q 200 354 345 367" stroke="rgba(200,200,200,0.3)" strokeWidth="1.5" fill="none"/>

      {/* Hemidiaphragm domes */}
      <ellipse cx="130" cy="358" rx="68" ry="12" fill="rgba(255,255,255,0.08)"/>
      <ellipse cx="272" cy="362" rx="68" ry="12" fill="rgba(255,255,255,0.08)"/>

      {/* Case-specific pathology layer */}
      {getPathologyLayer()}

      {/* Annotations */}
      {showAnnotations && annotations.map((ann, i) => {
        const ax = ann.x * 400;
        const ay = ann.y * 420;
        const arrowLen = 28;
        let ax2 = ax, ay2 = ay;
        if (ann.arrowDir === "up") ay2 = ay - arrowLen;
        if (ann.arrowDir === "down") ay2 = ay + arrowLen;
        if (ann.arrowDir === "left") ax2 = ax - arrowLen;
        if (ann.arrowDir === "right") ax2 = ax + arrowLen;
        const color = ann.color || "#facc15";
        return (
          <g key={i}>
            <line x1={ax} y1={ay} x2={ax2} y2={ay2} stroke={color} strokeWidth="1.8" markerEnd={`url(#arrow-${i})`}/>
            <defs>
              <marker id={`arrow-${i}`} markerWidth="7" markerHeight="7" refX="6" refY="3" orient="auto">
                <path d="M0,0 L0,6 L7,3 z" fill={color}/>
              </marker>
            </defs>
            <rect x={ax2 - 2} y={ay2 - 20} width={Math.min(ann.label.length * 5.5, 160)} height={20} rx="3" fill="rgba(0,0,0,0.75)" />
            <text x={ax2 + 2} y={ay2 - 5} fontSize="9" fill={color} fontFamily="monospace" fontWeight="bold">{ann.label}</text>
          </g>
        );
      })}

      {/* Film metadata overlay */}
      <text x="8" y="18" fontSize="8" fill="rgba(255,255,255,0.4)" fontFamily="monospace">PA • INSPIRATION</text>
      <text x="8" y="30" fontSize="8" fill="rgba(255,255,255,0.4)" fontFamily="monospace">100kVp • 5mAs</text>
      <text x="290" y="18" fontSize="8" fill="rgba(255,255,255,0.4)" fontFamily="monospace">R ←</text>
      <text x="8" y="410" fontSize="8" fill="rgba(255,255,255,0.3)" fontFamily="monospace">URG Příjem • DIGI RTG</text>
    </svg>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Canvas Ultrasound Viewer (B-mode simulation)
// ─────────────────────────────────────────────────────────────────────────────
interface UltrasoundViewerProps {
  caseId: string;
  annotations: Annotation[];
  showAnnotations: boolean;
}

function UltrasoundViewer({ caseId, annotations, showAnnotations }: UltrasoundViewerProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);
  const timeRef = useRef<number>(0);

  const drawFrame = useCallback((timestamp: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const W = canvas.width;
    const H = canvas.height;
    timeRef.current = timestamp / 1000;
    const t = timeRef.current;

    // Background - ultrasound dark gray
    ctx.fillStyle = "#0d0d0d";
    ctx.fillRect(0, 0, W, H);

    // Draw sector/wedge shaped scan field
    const cx = W / 2, cy = 12;
    const R = H * 1.35;
    const angle = Math.PI / 2.4;
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.arc(cx, cy, R, Math.PI/2 - angle, Math.PI/2 + angle);
    ctx.closePath();
    ctx.clip();

    // Base tissue gradient (grey scale)
    const grad = ctx.createRadialGradient(cx, cy, 10, cx, cy, R);
    grad.addColorStop(0, "rgba(60,60,60,1)");
    grad.addColorStop(0.5, "rgba(40,40,40,1)");
    grad.addColorStop(1, "rgba(20,20,20,1)");
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, W, H);

    // Speckle noise (simulates tissue texture)
    const imageData = ctx.getImageData(0, 0, W, H);
    const data = imageData.data;
    for (let i = 0; i < data.length; i += 4) {
      const noise = (Math.random() - 0.5) * 22;
      data[i] = Math.max(0, Math.min(255, data[i] + noise));
      data[i+1] = data[i];
      data[i+2] = data[i];
    }
    ctx.putImageData(imageData, 0, 0);

    // Case-specific anatomical structures
    const drawAnechoic = (x: number, y: number, w: number, h: number, rx = 10) => {
      ctx.fillStyle = "rgba(0,0,0,0.92)";
      ctx.beginPath();
      ctx.roundRect(x, y, w, h, rx);
      ctx.fill();
      // Acoustic enhancement (bright below)
      const enhGrad = ctx.createLinearGradient(x, y+h, x, y+h+30);
      enhGrad.addColorStop(0, "rgba(80,80,80,0.6)");
      enhGrad.addColorStop(1, "rgba(20,20,20,0)");
      ctx.fillStyle = enhGrad;
      ctx.fillRect(x, y+h, w, 35);
    };

    const drawHyperechoic = (x: number, y: number, w: number, h: number, rx = 6) => {
      ctx.fillStyle = "rgba(200,200,200,0.85)";
      ctx.beginPath();
      ctx.roundRect(x, y, w, h, rx);
      ctx.fill();
      // Shadow behind
      ctx.fillStyle = "rgba(0,0,0,0.7)";
      ctx.fillRect(x+5, y+h, w-10, 40);
    };

    const drawGrayStructure = (x: number, y: number, w: number, h: number, brightness = 80, rx = 8) => {
      ctx.fillStyle = `rgba(${brightness},${brightness},${brightness},0.75)`;
      ctx.beginPath();
      ctx.roundRect(x, y, w, h, rx);
      ctx.fill();
    };

    switch (caseId) {
      case "3": // FAST trauma - Morrison + hemothorax
        // Liver
        drawGrayStructure(100, 90, 250, 130, 68, 20);
        // Kidney
        drawGrayStructure(280, 160, 65, 95, 55, 18);
        // Morrison - fluid (anechoic between liver and kidney)
        drawAnechoic(265, 155, 80, 70, 8);
        // Hemothorax above liver
        drawAnechoic(105, 45, 210, 55, 6);
        // Moving heart beat simulation
        const hbSize = 3 + Math.sin(t * 5.5) * 2;
        ctx.fillStyle = "rgba(255,80,80,0.5)";
        ctx.beginPath();
        ctx.ellipse(175, 80, 25+hbSize, 20+hbSize, 0, 0, Math.PI*2);
        ctx.fill();
        break;
      case "2": // Echo - dilated RV
        // LV (left ventricle) - smaller, D-shaped
        const lvWall = Math.sin(t * 4.5) * 8;
        ctx.fillStyle = "rgba(0,0,0,0.9)";
        ctx.beginPath();
        ctx.ellipse(160, 210, 75+lvWall/2, 90+lvWall, -0.15, 0, Math.PI*2);
        ctx.fill();
        drawGrayStructure(90, 125, 145, 170, 55, 35);
        // RV (dilated right ventricle)
        const rvWall = Math.sin(t * 4.5 + 0.5) * 5;
        ctx.fillStyle = "rgba(0,0,0,0.88)";
        ctx.beginPath();
        ctx.ellipse(270, 215, 90+rvWall, 85+rvWall/2, 0.2, 0, Math.PI*2);
        ctx.fill();
        drawGrayStructure(195, 130, 150, 160, 50, 30);
        // Septum flatten (D-sign)
        ctx.strokeStyle = "rgba(200,200,200,0.6)";
        ctx.lineWidth = 4;
        ctx.beginPath();
        ctx.moveTo(215, 140);
        ctx.quadraticCurveTo(220, 215, 215, 285); // flattened/inverted
        ctx.stroke();
        break;
      case "1": // Echo cardiac - normal + hypokinetic inferior wall
        const lvWall1 = Math.sin(t * 4.8) * 9;
        ctx.fillStyle = "rgba(0,0,0,0.92)";
        ctx.beginPath();
        ctx.ellipse(200, 210, 80+lvWall1/2, 95+lvWall1, 0, 0, Math.PI*2);
        ctx.fill();
        drawGrayStructure(120, 120, 160, 175, 58, 30);
        // Inferior wall hypokinesia - thinner wall movement bottom
        const hypWall = Math.sin(t * 4.8) * 2; // reduced excursion
        ctx.strokeStyle = "rgba(255,180,50,0.8)";
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.arc(200, 210, 80, Math.PI * 0.45, Math.PI * 0.85);
        ctx.stroke();
        break;
      case "7": // Abd sono - pancreas + gallstones
        // Liver
        drawGrayStructure(60, 80, 200, 110, 65, 18);
        // Gallbladder with stones
        drawAnechoic(85, 130, 80, 55, 12);
        drawHyperechoic(105, 170, 18, 8, 4); // stone
        drawHyperechoic(120, 168, 12, 8, 4); // stone 2
        // Pancreas - enlarged, decreased echogenicity
        ctx.fillStyle = "rgba(45,45,45,0.85)";
        ctx.beginPath();
        ctx.roundRect(100, 220, 200, 50, 12);
        ctx.fill();
        // Peripancreatic fluid
        drawAnechoic(90, 268, 220, 35, 8);
        // Choledochus (slightly dilated)
        ctx.strokeStyle = "rgba(80,80,80,0.8)";
        ctx.lineWidth = 6;
        ctx.beginPath();
        ctx.moveTo(160, 130);
        ctx.lineTo(175, 200);
        ctx.stroke();
        ctx.strokeStyle = "rgba(0,0,0,0.9)";
        ctx.lineWidth = 4;
        ctx.beginPath();
        ctx.moveTo(161, 130);
        ctx.lineTo(174, 200);
        ctx.stroke();
        break;
      case "12": // Echo - cardiogenic shock, akinetic anterior wall
        const lvS = Math.sin(t * 4.2) * 4; // very reduced excursion
        ctx.fillStyle = "rgba(0,0,0,0.92)";
        ctx.beginPath();
        ctx.ellipse(195, 215, 88+lvS/3, 100+lvS/2, 0, 0, Math.PI*2);
        ctx.fill();
        drawGrayStructure(110, 120, 170, 185, 50, 30);
        // Dilated left atrium
        drawGrayStructure(105, 115, 80, 55, 50, 18);
        // Anterior wall - akinetic (no movement, highlighted red)
        ctx.strokeStyle = "rgba(255,60,60,0.75)";
        ctx.lineWidth = 4;
        ctx.setLineDash([6, 3]);
        ctx.beginPath();
        ctx.arc(195, 215, 88, -Math.PI * 0.5, Math.PI * 0.4);
        ctx.stroke();
        ctx.setLineDash([]);
        break;
      default:
        // Generic cardiac view
        const lvD = Math.sin(t * 4.5) * 8;
        ctx.fillStyle = "rgba(0,0,0,0.9)";
        ctx.beginPath();
        ctx.ellipse(190, 205, 78+lvD/2, 92+lvD, 0, 0, Math.PI*2);
        ctx.fill();
        drawGrayStructure(115, 120, 155, 170, 56, 28);
        break;
    }

    // Scan lines (sector sweep artifacts)
    for (let i = 0; i < 14; i++) {
      const ang = -angle + (i / 13) * angle * 2 + Math.PI / 2;
      const sx = cx + Math.cos(ang) * 15;
      const sy = cy + Math.sin(ang) * 15;
      const ex = cx + Math.cos(ang) * R * 0.95;
      const ey = cy + Math.sin(ang) * R * 0.95;
      ctx.strokeStyle = "rgba(255,255,255,0.02)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(sx, sy);
      ctx.lineTo(ex, ey);
      ctx.stroke();
    }

    // Depth markers
    for (let d = 1; d <= 5; d++) {
      const r = (R * 0.9 * d) / 5;
      ctx.strokeStyle = "rgba(100,200,100,0.15)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(cx, cy, r, Math.PI/2 - angle, Math.PI/2 + angle);
      ctx.stroke();
      ctx.fillStyle = "rgba(100,200,100,0.5)";
      ctx.font = "9px monospace";
      ctx.fillText(`${d * 3}cm`, cx - R + r - 16, cy + r + 4);
    }

    // Annotations overlay
    if (showAnnotations) {
      annotations.forEach((ann) => {
        const ax = ann.x * W;
        const ay = ann.y * H;
        const color = ann.color || "#facc15";
        ctx.strokeStyle = color;
        ctx.lineWidth = 1.5;
        ctx.setLineDash([4, 3]);
        ctx.beginPath();
        ctx.arc(ax, ay, 14, 0, Math.PI * 2);
        ctx.stroke();
        ctx.setLineDash([]);
        ctx.fillStyle = "rgba(0,0,0,0.75)";
        ctx.fillRect(ax + 16, ay - 14, ann.label.length * 6, 16);
        ctx.fillStyle = color;
        ctx.font = "bold 9px monospace";
        ctx.fillText(ann.label, ax + 18, ay - 2);
      });
    }

    // Probe info & timestamp
    ctx.fillStyle = "rgba(100,200,100,0.7)";
    ctx.font = "bold 9px monospace";
    ctx.fillText("C5-2MHz  MI:0.7  TI:0.4", 8, H - 22);
    ctx.fillText(new Date().toLocaleTimeString("cs-CZ"), 8, H - 10);
    ctx.fillText("BEDSIDE • B-mode", W - 110, H - 10);

    ctx.restore();

    animRef.current = requestAnimationFrame(drawFrame);
  }, [caseId, annotations, showAnnotations]);

  useEffect(() => {
    animRef.current = requestAnimationFrame(drawFrame);
    return () => cancelAnimationFrame(animRef.current);
  }, [drawFrame]);

  return (
    <canvas ref={canvasRef} width={400} height={340}
      className="w-full max-h-80 md:max-h-96 bg-black rounded"
      style={{ imageRendering: "crisp-edges" }}
    />
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Canvas CT Viewer (axial slice simulation with scrolling)
// ─────────────────────────────────────────────────────────────────────────────
interface CTViewerProps {
  caseId: string;
  annotations: Annotation[];
  showAnnotations: boolean;
}

function CTViewer({ caseId, annotations, showAnnotations }: CTViewerProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [sliceIndex, setSliceIndex] = useState(15);
  const [windowWidth, setWindowWidth] = useState(350);
  const totalSlices = 30;

  const drawSlice = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const W = canvas.width;
    const H = canvas.height;
    const cx = W / 2, cy = H / 2;
    const slice = sliceIndex / totalSlices; // 0 → 1 (superior → inferior)

    ctx.fillStyle = "#000";
    ctx.fillRect(0, 0, W, H);

    // Body outline (circular/oval)
    const bodyW = 165, bodyH = 148;
    const bodyGrad = ctx.createRadialGradient(cx, cy, 20, cx, cy, bodyW);
    bodyGrad.addColorStop(0, "rgba(55,50,45,1)");
    bodyGrad.addColorStop(0.7, "rgba(45,40,38,1)");
    bodyGrad.addColorStop(1, "rgba(30,25,22,1)");
    ctx.fillStyle = bodyGrad;
    ctx.beginPath();
    ctx.ellipse(cx, cy, bodyW, bodyH, 0, 0, Math.PI * 2);
    ctx.fill();

    // Subcutaneous fat layer
    ctx.strokeStyle = "rgba(180,140,90,0.25)";
    ctx.lineWidth = 12;
    ctx.beginPath();
    ctx.ellipse(cx, cy, bodyW - 4, bodyH - 4, 0, 0, Math.PI * 2);
    ctx.stroke();

    // Spine / vertebral body
    const spineX = cx, spineY = cy + 85;
    ctx.fillStyle = "rgba(240,235,225,0.9)"; // bone HU ~400
    ctx.beginPath();
    ctx.ellipse(spineX, spineY, 22, 20, 0, 0, Math.PI * 2);
    ctx.fill();
    // Spinal canal
    ctx.fillStyle = "rgba(0,0,0,0.8)";
    ctx.beginPath();
    ctx.ellipse(spineX, spineY, 8, 9, 0, 0, Math.PI * 2);
    ctx.fill();

    // Case-specific CT pathology
    if (caseId === "2" && slice > 0.25 && slice < 0.7) { // PE - pulmonary embolism
      // Right pulmonary artery with filling defect
      ctx.fillStyle = "rgba(160,50,50,0.9)"; // vessel with contrast (normally bright)
      ctx.beginPath();
      ctx.ellipse(cx + 60, cy - 20, 18, 14, 0, 0, Math.PI * 2);
      ctx.fill();
      // Filling defect (darker area = clot)
      ctx.fillStyle = "rgba(70,30,30,0.95)";
      ctx.beginPath();
      ctx.ellipse(cx + 60, cy - 18, 10, 8, 0.3, 0, Math.PI * 2);
      ctx.fill();
      // Left PA - normal (no filling defect)
      ctx.fillStyle = "rgba(180,80,80,0.85)";
      ctx.beginPath();
      ctx.ellipse(cx - 50, cy - 20, 16, 12, 0, 0, Math.PI * 2);
      ctx.fill();
      // Lung fields
      ctx.fillStyle = "rgba(15,15,15,0.9)";
      ctx.beginPath();
      ctx.ellipse(cx + 80, cy, 55, 65, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.ellipse(cx - 80, cy, 55, 65, 0, 0, Math.PI * 2);
      ctx.fill();
      // Enlarged RV
      ctx.fillStyle = "rgba(30,15,15,0.7)";
      ctx.beginPath();
      ctx.ellipse(cx + 25, cy + 10, 42, 38, 0.2, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = "rgba(30,15,15,0.7)";
      ctx.beginPath();
      ctx.ellipse(cx - 28, cy + 12, 35, 32, -0.2, 0, Math.PI * 2);
      ctx.fill();
    } else if (caseId === "13" && slice < 0.4) { // CMP - brain CT
      // Brain hemispheres
      ctx.fillStyle = "rgba(65,58,52,1)";
      ctx.beginPath();
      ctx.ellipse(cx, cy, 140, 120, 0, 0, Math.PI * 2);
      ctx.fill();
      // Gray/white matter differentiation
      ctx.strokeStyle = "rgba(80,72,65,0.6)";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.ellipse(cx, cy, 105, 90, 0, 0, Math.PI * 2);
      ctx.stroke();
      // Right hemisphere - area of hypodensity (ischemia)
      ctx.fillStyle = "rgba(48,44,38,0.9)";
      ctx.beginPath();
      ctx.ellipse(cx + 50, cy - 20, 45, 35, -0.2, 0, Math.PI * 2);
      ctx.fill();
      // Hyperdense ACM (trombus)
      ctx.fillStyle = "rgba(200,150,100,0.95)"; // high density ~ 70HU
      ctx.beginPath();
      ctx.ellipse(cx + 58, cy - 30, 7, 5, 0.5, 0, Math.PI * 2);
      ctx.fill();
      // Midline
      ctx.strokeStyle = "rgba(100,90,82,0.4)";
      ctx.lineWidth = 2;
      ctx.setLineDash([4, 3]);
      ctx.beginPath();
      ctx.moveTo(cx, cy - 115);
      ctx.lineTo(cx, cy + 115);
      ctx.stroke();
      ctx.setLineDash([]);
      // Skull
      ctx.strokeStyle = "rgba(240,235,228,0.85)";
      ctx.lineWidth = 10;
      ctx.beginPath();
      ctx.ellipse(cx, cy, 148, 128, 0, 0, Math.PI * 2);
      ctx.stroke();
    } else if (caseId === "7" && slice > 0.35) { // Pancreatitis - abdominal
      // Liver right lobe
      ctx.fillStyle = "rgba(72,60,50,0.9)";
      ctx.beginPath();
      ctx.ellipse(cx + 60, cy - 30, 70, 55, 0.2, 0, Math.PI * 2);
      ctx.fill();
      // Pancreas - enlarged, low density
      ctx.fillStyle = "rgba(48,42,38,0.85)";
      ctx.beginPath();
      ctx.roundRect(cx - 70, cy + 20, 145, 38, 12);
      ctx.fill();
      // Peripancreatic fat stranding
      ctx.strokeStyle = "rgba(90,80,55,0.5)";
      ctx.lineWidth = 8;
      ctx.beginPath();
      ctx.roundRect(cx - 80, cy + 10, 165, 58, 16);
      ctx.stroke();
      // Fluid collection
      ctx.fillStyle = "rgba(20,20,22,0.92)";
      ctx.beginPath();
      ctx.ellipse(cx + 70, cy + 50, 35, 25, 0.4, 0, Math.PI * 2);
      ctx.fill();
    } else {
      // Generic chest/abd CT — show mediastinum + lung fields
      // Aorta
      ctx.fillStyle = "rgba(170,60,60,0.85)";
      ctx.beginPath();
      ctx.ellipse(cx + 20, cy + 50, 12, 12, 0, 0, Math.PI * 2);
      ctx.fill();
      // Main pulmonary artery
      ctx.fillStyle = "rgba(140,80,80,0.8)";
      ctx.beginPath();
      ctx.ellipse(cx - 20, cy - 10, 14, 12, 0, 0, Math.PI * 2);
      ctx.fill();
      // Lung fields
      ctx.fillStyle = "rgba(12,12,12,0.9)";
      ctx.beginPath();
      ctx.ellipse(cx + 80, cy, 55, 68, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.ellipse(cx - 80, cy, 55, 68, 0, 0, Math.PI * 2);
      ctx.fill();
      // Trachea/bronchi
      ctx.fillStyle = "rgba(0,0,0,0.95)";
      ctx.beginPath();
      ctx.ellipse(cx, cy - 55, 10, 10, 0, 0, Math.PI * 2);
      ctx.fill();
      // Case specific: Hemothorax
      if (caseId === "3" && slice > 0.3) {
        ctx.fillStyle = "rgba(90,40,40,0.8)"; // hemothorax (high density fluid)
        ctx.beginPath();
        ctx.ellipse(cx + 80, cy + 30, 45, 40, 0.3, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = "rgba(12,12,12,0.9)"; // collapsed lung behind
        ctx.beginPath();
        ctx.ellipse(cx + 72, cy - 20, 30, 30, 0, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Annotations
    if (showAnnotations) {
      annotations.forEach((ann) => {
        const ax = ann.x * W;
        const ay = ann.y * H;
        const color = ann.color || "#facc15";
        ctx.strokeStyle = color;
        ctx.lineWidth = 2;
        ctx.setLineDash([5, 3]);
        ctx.beginPath();
        ctx.arc(ax, ay, 16, 0, Math.PI * 2);
        ctx.stroke();
        ctx.setLineDash([]);
        ctx.fillStyle = "rgba(0,0,0,0.8)";
        ctx.fillRect(ax + 18, ay - 14, ann.label.length * 5.8, 17);
        ctx.fillStyle = color;
        ctx.font = "bold 9px monospace";
        ctx.fillText(ann.label, ax + 20, ay - 1);
      });
    }

    // HU window info
    ctx.fillStyle = "rgba(255,255,255,0.5)";
    ctx.font = "9px monospace";
    ctx.fillText(`W:${windowWidth} L:40`, 8, H - 22);
    ctx.fillText(`Slice: ${sliceIndex + 1}/${totalSlices}`, 8, H - 10);
    ctx.fillText("AXIAL • 5mm", W - 85, H - 10);
  }, [sliceIndex, windowWidth, caseId, annotations, showAnnotations]);

  useEffect(() => {
    drawSlice();
  }, [drawSlice]);

  return (
    <div className="space-y-2">
      <canvas ref={canvasRef} width={400} height={340}
        className="w-full max-h-80 md:max-h-96 bg-black rounded cursor-crosshair"
      />
      <div className="flex items-center gap-3 px-1">
        <span className="text-[9px] text-[#c2c6d6] font-mono uppercase tracking-wider">Řez {sliceIndex + 1}/{totalSlices}</span>
        <input
          type="range" min={0} max={totalSlices - 1} value={sliceIndex}
          onChange={e => setSliceIndex(Number(e.target.value))}
          className="flex-1 accent-[#4d8eff] h-1.5"
        />
        <div className="flex gap-1">
          <button onClick={() => setSliceIndex(s => Math.max(0, s - 1))}
            className="w-6 h-6 rounded bg-[#272a31] hover:bg-[#424754] flex items-center justify-center cursor-pointer">
            <ChevronUp className="w-3.5 h-3.5 text-white"/>
          </button>
          <button onClick={() => setSliceIndex(s => Math.min(totalSlices - 1, s + 1))}
            className="w-6 h-6 rounded bg-[#272a31] hover:bg-[#424754] flex items-center justify-center cursor-pointer">
            <ChevronDown className="w-3.5 h-3.5 text-white"/>
          </button>
        </div>
      </div>
      <div className="flex items-center gap-2 px-1">
        <span className="text-[9px] text-[#c2c6d6] font-mono">W:{windowWidth}</span>
        <input
          type="range" min={100} max={2000} value={windowWidth}
          onChange={e => setWindowWidth(Number(e.target.value))}
          className="flex-1 accent-[#adc6ff] h-1"
        />
        <span className="text-[9px] text-[#c2c6d6] font-mono">Šíře okna</span>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Main ImagingViewer Component
// ─────────────────────────────────────────────────────────────────────────────
interface ImagingViewerProps {
  caseId: string;
  modality: "rtg" | "echo" | "ct";
  reportText: string;
  onClose?: () => void;
}

export default function ImagingViewer({ caseId, modality, reportText, onClose }: ImagingViewerProps) {
  const [showAnnotations, setShowAnnotations] = useState(true);
  const [quizAnswer, setQuizAnswer] = useState<number | null>(null);
  const [quizAnswered, setQuizAnswered] = useState(false);
  const [showReport, setShowReport] = useState(false);

  const caseData = CASE_IMAGING[caseId]?.[modality];
  const annotations = caseData?.annotations ?? [];
  const quiz = caseData?.quiz;

  const modalityLabel = {
    rtg: "RTG / Skiagram",
    echo: "Ultrazvuk / Echokardiografie",
    ct: "CT Scan — Axiální řezy"
  }[modality];

  const modalityColor = {
    rtg: "text-sky-400",
    echo: "text-teal-400",
    ct: "text-violet-400"
  }[modality];

  return (
    <div className="bg-[#1d2027] text-[#e1e2ec] rounded-2xl border border-[#424754] overflow-hidden shadow-2xl flex flex-col max-h-[92vh] overflow-y-auto custom-scrollbar">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-[#424754] shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-[#4d8eff]/10 rounded-xl flex items-center justify-center border border-[#4d8eff]/20">
            <Layers className={`w-4 h-4 ${modalityColor}`} />
          </div>
          <div>
            <h3 className="font-extrabold text-sm text-white">{modalityLabel}</h3>
            <p className="text-[10px] text-[#c2c6d6]">Interaktivní diagnostické zobrazení</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowAnnotations(!showAnnotations)}
            className={`px-3 py-1.5 rounded-lg text-[10px] font-bold cursor-pointer transition-all ${showAnnotations ? "bg-[#4d8eff]/20 text-[#adc6ff] border border-[#4d8eff]/30" : "bg-[#272a31] text-[#c2c6d6] border border-[#424754]"}`}
          >
            {showAnnotations ? "Skrýt nálezy" : "Zobrazit nálezy"}
          </button>
          {onClose && (
            <button onClick={onClose} className="px-3 py-1.5 rounded-lg text-[10px] font-bold cursor-pointer bg-[#272a31] text-[#c2c6d6] border border-[#424754] hover:border-[#c2c6d6] transition-all">
              ✕ ZAVŘÍT
            </button>
          )}
        </div>
      </div>

      {/* Image Area */}
      <div className="bg-black p-2 shrink-0">
        {modality === "rtg" && (
          <RTGViewer caseId={caseId} annotations={annotations} showAnnotations={showAnnotations} />
        )}
        {modality === "echo" && (
          <UltrasoundViewer caseId={caseId} annotations={annotations} showAnnotations={showAnnotations} />
        )}
        {modality === "ct" && (
          <CTViewer caseId={caseId} annotations={annotations} showAnnotations={showAnnotations} />
        )}
      </div>

      {/* Findings Panel */}
      {caseData && (
        <div className="p-4 space-y-4">
          {/* Key findings */}
          <div className="space-y-2">
            <h4 className="text-[10px] font-extrabold text-[#c2c6d6] uppercase tracking-wider">Klíčové nálezy</h4>
            <div className="space-y-1.5">
              {caseData.findings.map((f, i) => (
                <div key={i} className="flex items-start gap-2 text-xs">
                  <span className={`mt-0.5 shrink-0 w-4 h-4 rounded-full flex items-center justify-center text-[9px] font-bold ${f.isPathological ? "bg-red-500/20 text-red-400" : "bg-green-500/20 text-green-400"}`}>
                    {f.isPathological ? "!" : "✓"}
                  </span>
                  <span className={f.isPathological ? "text-red-200" : "text-[#c2c6d6]"}>{f.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Teaching points */}
          <div className="space-y-2">
            <h4 className="text-[10px] font-extrabold text-[#c2c6d6] uppercase tracking-wider">Výukové poznámky</h4>
            <div className="space-y-1.5">
              {caseData.teachingPoints.map((tp, i) => (
                <div key={i} className="flex items-start gap-2 text-[11px] leading-relaxed">
                  <span className="text-[#4d8eff] shrink-0 mt-0.5">→</span>
                  <span className="text-[#c2c6d6]">{tp}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Collapsible report text */}
          <div>
            <button
              onClick={() => setShowReport(!showReport)}
              className="text-[10px] text-[#adc6ff] underline cursor-pointer hover:text-white transition-colors"
            >
              {showReport ? "▲ Skrýt textový popis" : "▼ Zobrazit celý textový nálezový list"}
            </button>
            {showReport && (
              <div className="mt-2 p-3 bg-[#0b0e15] rounded-lg border border-green-500/20 text-[11px] text-green-300 font-mono leading-relaxed">
                {reportText || caseData.reportText}
              </div>
            )}
          </div>

          {/* Quiz */}
          {quiz && (
            <div className="pt-2 border-t border-[#424754]/50 space-y-3">
              <h4 className="text-[10px] font-extrabold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                <Info className="w-3.5 h-3.5" /> Klinická otázka
              </h4>
              <p className="text-xs text-white font-medium">{quiz.question}</p>
              <div className="grid grid-cols-1 gap-2">
                {quiz.options.map((opt, i) => {
                  const isCorrect = i === quiz.correctIndex;
                  const isSelected = quizAnswer === i;
                  let btnClass = "bg-[#272a31]/40 border-[#424754] text-[#c2c6d6] hover:bg-[#272a31]/80 hover:border-[#adc6ff]";
                  if (quizAnswered) {
                    if (isCorrect) btnClass = "bg-green-950/30 border-green-500 text-green-300 font-bold";
                    else if (isSelected) btnClass = "bg-red-950/30 border-red-500 text-red-300 font-bold";
                    else btnClass = "opacity-40 bg-[#272a31]/10 border-[#424754]/30 text-[#c2c6d6]";
                  }
                  return (
                    <button key={i} disabled={quizAnswered}
                      onClick={() => { setQuizAnswer(i); setQuizAnswered(true); }}
                      className={`p-3 border rounded-lg text-left text-xs transition-all cursor-pointer flex items-center gap-2 ${btnClass}`}
                    >
                      {quizAnswered && isCorrect && <CheckCircle2 className="w-4 h-4 text-green-400 shrink-0"/>}
                      {quizAnswered && isSelected && !isCorrect && <AlertTriangle className="w-4 h-4 text-red-400 shrink-0"/>}
                      <span>{opt}</span>
                    </button>
                  );
                })}
              </div>
              {quizAnswered && (
                <div className={`p-3 rounded-lg border text-xs leading-relaxed ${quizAnswer === quiz.correctIndex ? "bg-green-950/15 border-green-500/30 text-green-300" : "bg-red-950/15 border-red-500/30 text-red-300"}`}>
                  <strong className="block text-white mb-1">{quizAnswer === quiz.correctIndex ? "✓ Správně!" : `✗ Správná odpověď: ${quiz.options[quiz.correctIndex]}`}</strong>
                  {quiz.explanation}
                </div>
              )}
              {quizAnswered && (
                <button onClick={() => { setQuizAnswer(null); setQuizAnswered(false); }}
                  className="text-[10px] text-[#adc6ff] underline cursor-pointer hover:text-white">
                  ↺ Zkusit znovu
                </button>
              )}
            </div>
          )}
        </div>
      )}

      {/* Fallback if no case data */}
      {!caseData && (
        <div className="p-4 text-xs text-[#c2c6d6] leading-relaxed">
          <div className="bg-[#0b0e15] rounded-lg border border-green-500/20 p-3 font-mono text-green-300">
            {reportText}
          </div>
        </div>
      )}
    </div>
  );
}
