import React, { useRef, useEffect, useState, useCallback } from "react";
import { GameSession } from "../types";
import { ZoomIn, ZoomOut, RotateCcw, ChevronUp, ChevronDown, Info, CheckCircle2, AlertTriangle, Layers, Activity } from "lucide-react";

// Import authentic image assets
// @ts-ignore
import rtgChestNormal from "../assets/images/rtg_chest_normal.jpg";
// @ts-ignore
import ctBrainNormal from "../assets/images/ct_brain_normal.png";
// @ts-ignore
import usgGallbladder from "../assets/images/usg_gallbladder.jpg";

// ─────────────────────────────────────────────────────────────────────────────
// Types & Definitions
// ─────────────────────────────────────────────────────────────────────────────
interface Annotation {
  x: number;        // 0-1 fraction of image width
  y: number;        // 0-1 fraction of image height
  label: string;
  color?: string;   // hex / tailwind color
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
  teachingPoints?: string[];
  quiz?: {
    question: string;
    options: string[];
    correctIndex: number;
    explanation: string;
  };
}

// 6 probe positions for eFAST / RUSH
export type USGViewType = "cardiac" | "morison" | "splenorenal" | "pelvic" | "ivc" | "lungs";

interface USGViewDefinition {
  label: string;
  desc: string;
  findings: ImagingFinding[];
  annotations: Annotation[];
  teachingPoints?: string[];
  quiz?: {
    question: string;
    options: string[];
    correctIndex: number;
    explanation: string;
  };
}

interface CaseImagingData {
  rtg?: ImagingDefinition;
  ct?: ImagingDefinition;
  usg: Record<USGViewType, USGViewDefinition>;
}

// ─────────────────────────────────────────────────────────────────────────────
// Per-case clinical imaging definitions (all 13 cases)
// ─────────────────────────────────────────────────────────────────────────────
const CASE_IMAGING: Record<string, CaseImagingData> = {
  "1": { // Inferior STEMI
    rtg: {
      reportText: "RTG Hrudníku: Srdeční stín nezvětšen, plíce bez městnání či ložiskových změn.",
      findings: [
        { text: "Normální velikost srdečního stínu", isPathological: false },
        { text: "Bez plicního edému nebo městnání", isPathological: false },
        { text: "Kostofrenické úhly volné oboustranně", isPathological: false },
      ],
      annotations: [
        { x: 0.5, y: 0.55, label: "Normální srdeční stín", color: "#22c55e", arrowDir: "up" }
      ],
      teachingPoints: [
        "RTG hrudníku u nekomplikovaného AIM bývá normální.",
        "Klíčové je vyloučení jiných příčin bolesti na hrudi (Pneumotorax, disekce aorty, pneumonie)."
      ]
    },
    ct: {
      reportText: "CT Pulmonální angiografie: Bez známek plicní embolie. Aorta bez disekce.",
      findings: [
        { text: "Plicní tepny volné bez defektů plnění", isPathological: false },
        { text: "Aorta normálního kalibru, bez intimální vlásky", isPathological: false }
      ],
      annotations: [],
      teachingPoints: ["CTPA vyloučilo plicní embolii a disekci aorty jako ddx bolesti na hrudi."]
    },
    usg: {
      cardiac: {
        label: "Kardiální (PLAX)",
        desc: "Hodnocení kontraktility a perikardu",
        findings: [
          { text: "Hypokineze dolní stěny levé komory", isPathological: true },
          { text: "Ejekční frakce LK snížena (45-50%)", isPathological: true },
          { text: "Bez perikardiálního výpotku", isPathological: false }
        ],
        annotations: [
          { x: 0.52, y: 0.65, label: "Hypokinetická dolní stěna LK", color: "#f59e0b", arrowDir: "left" }
        ],
        teachingPoints: [
          "Hypokineze stěny odpovídá uzávěru příslušné věnčité tepny (zde RCA).",
          "Důležité pro odlišení ischemické etiologie od jiných forem šoku."
        ],
        quiz: {
          question: "Která stěna levé komory je postižena hypokinezí při infarktu spodní stěny (II, III, aVF)?",
          options: [
            "Přední stěna a septum",
            "Laterální (boční) stěna",
            "Dolní (inferiorní) stěna",
            "Hrot levé komory"
          ],
          correctIndex: 2,
          explanation: "Rytmus i EKG změny ve svodech II, III, aVF přímo korelují s ischemií dolní (inferiorní) stěny levé komory, která je nejčastěji zásobována z pravé věnčité tepny (RCA)."
        }
      },
      morison: {
        label: "Morisonův prostor",
        desc: "Hepatorenální prostor",
        findings: [{ text: "Volná tekutina nepřítomna", isPathological: false }],
        annotations: [],
        teachingPoints: ["Hepatorenální rozhraní je čisté, bez anechogenního lemu."]
      },
      splenorenal: {
        label: "Splenorenální",
        desc: "Slezinně-renální prostor",
        findings: [{ text: "Volná tekutina nepřítomna", isPathological: false }],
        annotations: [],
        teachingPoints: ["Splenorenální rozhraní je čisté."]
      },
      pelvic: {
        label: "Pánevní",
        desc: "Retrovesikální prostor",
        findings: [{ text: "Volná tekutina v pánvi nepřítomna", isPathological: false }],
        annotations: [],
        teachingPoints: ["Kolem močového měchýře není přítomna krev ani jiná tekutina."]
      },
      ivc: {
        label: "Dolní dutá žíla (IVC)",
        desc: "Hodnocení plnění tanku",
        findings: [
          { text: "Šíře IVC přiměřená (cca 1.8 cm)", isPathological: false },
          { text: "Respirační kolapsibilita v normě (40%)", isPathological: false }
        ],
        annotations: [],
        teachingPoints: ["Normální IVC svědčí o euvolemii. Pacient nevykazuje známky těžké dehydratace ani kongesce."]
      },
      lungs: {
        label: "Plíce",
        desc: "Bilateralní vyšetření pleury",
        findings: [
          { text: "Přítomen fenomén lung sliding (klouzání plíce)", isPathological: false },
          { text: "Přítomny fyziologické A-linie", isPathological: false }
        ],
        annotations: [],
        teachingPoints: ["Vylučuje pneumotorax na vyšetřovaných místech."]
      }
    }
  },
  "2": { // Plicní embolie
    rtg: {
      reportText: "RTG Hrudníku: Mírné projasnění vpravo (Westermarkovo znamení), bez pleurálního výpotku.",
      findings: [
        { text: "Westermarkovo znamení vpravo (lokální hypovaskularizace)", isPathological: true },
        { text: "Bez městnání v plicním oběhu", isPathological: false }
      ],
      annotations: [
        { x: 0.72, y: 0.4, label: "Westermarkovo znamení (projasnění)", color: "#f59e0b", arrowDir: "left" }
      ],
      teachingPoints: [
        "Westermarkovo znamení značí oligemii za místem uzávěru plicní tepny.",
        "RTG hrudníku je u plicní embolie často zcela normální."
      ]
    },
    ct: {
      reportText: "CT Pulmonální angiografie: Prokázán masivní embolus v pravé plicní tepně zasahující do lobárních větví. Dilatace pravé komory.",
      findings: [
        { text: "Defekt plnění v pravé plicní tepně (embolus)", isPathological: true },
        { text: "Dilatace pravé komory srdce", isPathological: true }
      ],
      annotations: [
        { x: 0.6, y: 0.4, label: "Masivní embolus v pravé PA", color: "#f87171", arrowDir: "left" },
        { x: 0.5, y: 0.65, label: "Dilatovaná pravá komora", color: "#f59e0b", arrowDir: "up" }
      ],
      teachingPoints: [
        "CT pulmonální angiografie je zlatým standardem for potvrzení plicní embolie.",
        "Zvětšení poměru RV/LV nad 1.0 svědčí o přetížení pravé komory a středně vysokém riziku."
      ]
    },
    usg: {
      cardiac: {
        label: "Kardiální (PLAX/4C)",
        desc: "Hodnocení pravé komory a perikardu",
        findings: [
          { text: "Výrazná dilatace pravé komory (RV/LV poměr 1.1)", isPathological: true },
          { text: "Oploštění mezikomorového septa (D-sign)", isPathological: true },
          { text: "McConnellovo znamení přítomno", isPathological: true }
        ],
        annotations: [
          { x: 0.62, y: 0.38, label: "Dilatovaná pravá komora (RV > LV)", color: "#f87171", arrowDir: "left" },
          { x: 0.5, y: 0.55, label: "Oploštělé septum (D-tvar)", color: "#f59e0b", arrowDir: "up" }
        ],
        teachingPoints: [
          "Dilatace PK a D-tvar levé komory svědčí o akutním přetížení pravého srdce tlakem.",
          "McConnellovo znamení: akineze volné stěny PK se zachovalým pohybem hrotu."
        ],
        quiz: {
          question: "Co vyjadřuje přítomnost 'D-sign' (D-tvaru LK) na kardiálním ultrazvuku?",
          options: [
            "Hypertrofii levé komory",
            "Tlakové přetížení pravé komory oplošťující mezikomorové septum",
            "Levostranné srdeční selhání",
            "Tamponádu srdce"
          ],
          correctIndex: 1,
          explanation: "Tlakové přetížení pravé komory (např. při masivní plicní embolii) způsobí, že tlak v PK převýší tlak v LK na konci diastoly, což vytlačí a oploští mezikomorové septum. LK pak na krátké ose vypadá jako písmeno D."
        }
      },
      morison: {
        label: "Morisonův prostor",
        desc: "Hepatorenální prostor",
        findings: [{ text: "Volná tekutina nepřítomna", isPathological: false }],
        annotations: [],
        teachingPoints: ["FAST je v této oblasti negativní."]
      },
      splenorenal: {
        label: "Splenorenální",
        desc: "Slezinně-renální prostor",
        findings: [{ text: "Volná tekutina nepřítomna", isPathological: false }],
        annotations: [],
        teachingPoints: ["FAST negativní."]
      },
      pelvic: {
        label: "Pánevní",
        desc: "Retrovesikální prostor",
        findings: [{ text: "Volná tekutina nepřítomna", isPathological: false }],
        annotations: [],
        teachingPoints: ["FAST negativní."]
      },
      ivc: {
        label: "Dolní dutá žíla (IVC)",
        desc: "Hodnocení plnění tanku",
        findings: [
          { text: "Dilatovaná IVC (šíře 2.4 cm)", isPathological: true },
          { text: "Respirační kolapsibilita minimální (<10%)", isPathological: true }
        ],
        annotations: [
          { x: 0.5, y: 0.5, label: "Plethorická (široká) IVC", color: "#f59e0b", arrowDir: "up" }
        ],
        teachingPoints: [
          "Městnání krve před selhávající pravou komorou vede k dilataci IVC.",
          "Ztráta kolapsibility IVC je známkou zvýšeného centrálního žilního tlaku."
        ]
      },
      lungs: {
        label: "Plíce",
        desc: "Bilateralní vyšetření pleury",
        findings: [
          { text: "Klouzání plic zachováno (bez PNO)", isPathological: false },
          { text: "Bilateralně přítomny A-linie", isPathological: false }
        ],
        annotations: [],
        teachingPoints: ["Plíce jsou vzdušné, bez známek fluidotoraxu či pneumotoraxu."]
      }
    }
  },
  "3": { // Polytrauma
    rtg: {
      reportText: "RTG Pánve a Hrudníku: Zlomenina pánve 'otevřená kniha' s diastázou 4 cm. Hemotorax vpravo, zlomeniny žeber.",
      findings: [
        { text: "Masivní fluidotorax (hemotorax) vpravo", isPathological: true },
        { text: "Zlomenina pánve typu 'otevřená kniha' (diastáza 4 cm)", isPathological: true },
        { text: "Zlomeniny 4.-7. žebra vpravo", isPathological: true }
      ],
      annotations: [
        { x: 0.72, y: 0.42, label: "Hemotorax vpravo", color: "#f87171", arrowDir: "left" },
        { x: 0.5, y: 0.82, label: "Diastáza symfýzy 4 cm", color: "#f87171", arrowDir: "up" }
      ],
      teachingPoints: [
        "Zlomenina pánve 'otevřená kniha' je život ohrožující trauma s rizikem masivního retroperitoneálního krvácení.",
        "Hemotorax vyžaduje okamžité zavedení hrudního drénu."
      ]
    },
    ct: {
      reportText: "CT Pan-scan: Kontuse plic, hemotorax vpravo. Hematom retroperitonea s aktivním arteriálním krvácením v pánvi.",
      findings: [
        { text: "Kontuse plic a hemotorax vpravo", isPathological: true },
        { text: "Retroperitoneální hematom", isPathological: true },
        { text: "Aktivní extravazace kontrastní látky (krvácení z a. iliaca interna)", isPathological: true }
      ],
      annotations: [
        { x: 0.8, y: 0.3, label: "Pravostranný hemotorax", color: "#f87171", arrowDir: "left" }
      ],
      teachingPoints: [
        "CT pan-scan je klíčový pro stabilní/stabilizované pacienty po těžkém traumatu.",
        "Prokazuje zdroj krvácení pro případnou operační revizi nebo angioembolizaci."
      ]
    },
    usg: {
      cardiac: {
        label: "Kardiální (PLAX)",
        desc: "Hodnocení pumpy",
        findings: [
          { text: "Hyperdynamická levá komora (EF >75%)", isPathological: false },
          { text: "Téměř kolabující komory na konci systoly ('kissing ventricles')", isPathological: true },
          { text: "Bez perikardiálního výpotku", isPathological: false }
        ],
        annotations: [],
        teachingPoints: [
          "Hyperdynamické srdce a kolabující komory svědčí o těžké hypovolémii (hemoragický šok).",
          "Srdce se snaží kompenzovat nízký tepový objem zvýšenou frekvencí a kontraktilitou."
        ],
        quiz: {
          question: "Co značí nález hyperdynamického myokardu s 'líbajícími se' komorami (kissing ventricles) u traumatického šoku?",
          options: [
            "Srdeční tamponádu",
            "Těžkou hypovolémii s kritickým nedostatkem náplně (prázdný tank)",
            "Kardiogenní šok",
            "Tenzní pneumotorax"
          ],
          correctIndex: 1,
          explanation: "Při těžkém krvácení a hypovolémii je žilní návrat minimální. Prázdná komora se stahuje tak silně, že se její stěny v systole téměř dotýkají (tzv. kissing ventricles). Kontraktilita je kompenzačně maximální."
        }
      },
      morison: {
        label: "Morisonův prostor (RUQ)",
        desc: "Hepatorenální rozhraní",
        findings: [
          { text: "Přítomen anechogenní (černý) lem tekutiny", isPathological: true },
          { text: "Volná krev v hepatorenálním prostoru", isPathological: true }
        ],
        annotations: [
          { x: 0.6, y: 0.48, label: "Volná krev (Morisonův prostor)", color: "#f87171", arrowDir: "left" }
        ],
        teachingPoints: [
          "Morisonův prostor je nejnižší bod pravé poloviny břišní dutiny u ležícího pacienta.",
          "Nález volné tekutiny u traumatického šoku indikuje nitrobřišní krvácení."
        ]
      },
      splenorenal: {
        label: "Splenorenální (LUQ)",
        desc: "Slezinně-renální rozhraní",
        findings: [
          { text: "Anechogenní lem tekutiny mezi slezinou a ledvinou", isPathological: true }
        ],
        annotations: [
          { x: 0.5, y: 0.5, label: "Volná krev splenorenálně", color: "#f87171", arrowDir: "up" }
        ],
        teachingPoints: [
          "Pozitivní nález v levém horním kvadrantu svědčí pro poranění sleziny nebo levé ledviny."
        ]
      },
      pelvic: {
        label: "Pánevní",
        desc: "Pánevní eFAST",
        findings: [
          { text: "Volná tekutina za močovým měchýřem", isPathological: true }
        ],
        annotations: [
          { x: 0.5, y: 0.72, label: "Volná tekutina v Douglasu", color: "#f87171", arrowDir: "up" }
        ],
        teachingPoints: [
          "Krev v malé pánvi se u ležícího pacienta hromadí v Douglasově prostoru u žen / retrovesikálně u mužů."
        ]
      },
      ivc: {
        label: "Dolní dutá žíla (IVC)",
        desc: "Hodnocení plnění",
        findings: [
          { text: "Zúžená až kolabující IVC (šíře < 1 cm)", isPathological: true },
          { text: "Respirační kolapsibilita extrémní (>75%)", isPathological: true }
        ],
        annotations: [
          { x: 0.5, y: 0.5, label: "Téměř zkolabovaná IVC", color: "#f87171", arrowDir: "up" }
        ],
        teachingPoints: [
          "Zkolabovaná IVC rezonuje s těžkým nedostatkem objemu v cévním řečišti (prázdný tank)."
        ]
      },
      lungs: {
        label: "Plíce",
        desc: "Pleurální prostor",
        findings: [
          { text: "Pravá plíce: Masivní anechogenní prostor (fluidotorax)", isPathological: true },
          { text: "Pravá plíce: Vymizelé klouzání plíce", isPathological: true }
        ],
        annotations: [
          { x: 0.62, y: 0.28, label: "Pravostranný fluidotorax", color: "#f87171", arrowDir: "left" }
        ],
        teachingPoints: [
          "Anechogenní (černá) zóna nad bránicí odpovídá hemotoraxu.",
          "Při přítomnosti pneumotoraxu bychom navíc viděli vymizení klouzání plíce a přítomnost 'lung pointu'."
        ]
      }
    }
  },
  "7": { // Akutní pankreatitida
    rtg: {
      reportText: "RTG břicha: Meteorismus, přítomna sentinelová (strážní) klička v epigastriu. Bez volného plynu.",
      findings: [
        { text: "Strážní klička v epigastriu (lokální ileus)", isPathological: true },
        { text: "Bez volného plynu pod bránicemi", isPathological: false }
      ],
      annotations: [
        { x: 0.5, y: 0.6, label: "Strážní klička (sentinel loop)", color: "#f59e0b", arrowDir: "up" }
      ],
      teachingPoints: [
        "Sentinelová klička je lokální paralytický ileus způsobený sousedícím zánětem (pankreatitida).",
        "Absence volného plynu vylučuje perforaci dušného orgánu."
      ]
    },
    ct: {
      reportText: "CT Břicha: Akutní pankreatitida s peripankreatickými kolekcemi (Balthazar C-D), bez nekrózy parenchymu.",
      findings: [
        { text: "Zvětšený pankreas s peripankreatickým prosáknutím", isPathological: true },
        { text: "Tekutinové kolekce peripankreaticky", isPathological: true },
        { text: "Parenchym se sytí homogenně (bez nekróz)", isPathological: false }
      ],
      annotations: [
        { x: 0.5, y: 0.48, label: "Prosáklý pankreas (Balthazar C)", color: "#f87171", arrowDir: "up" },
        { x: 0.42, y: 0.62, label: "Peripankreatická tekutina", color: "#f59e0b", arrowDir: "up" }
      ],
      teachingPoints: [
        "CT břicha je užitečné k posouzení rozsahu nekrózy u těžkých stavů.",
        "Homogenní sycení kontrastní látkou svědčí o životaschopnosti tkáně pankreatu."
      ]
    },
    usg: {
      cardiac: {
        label: "Kardiální (PLAX)",
        desc: "Kardiální sono",
        findings: [{ text: "Normální kontraktilita LK (EF 60%)", isPathological: false }],
        annotations: [],
        teachingPoints: ["Srdce pracuje fyziologicky."]
      },
      morison: {
        label: "Morisonův prostor / Žlučník",
        desc: "Vyšetření žlučníku a hepatorenální oblasti",
        findings: [
          { text: "Cholecystoliáza — četné drobné konkrementy ve žlučníku", isPathological: true },
          { text: "Mírná dilatace žlučových cest (choledochus 7mm)", isPathological: true },
          { text: "Pankreas prosáklý, nehomogenní", isPathological: true }
        ],
        annotations: [
          { x: 0.3, y: 0.4, label: "Cholecystoliáza s akustickým stínem", color: "#f87171", arrowDir: "right" },
          { x: 0.5, y: 0.52, label: "Prosáklá hlava pankreatu", color: "#f87171", arrowDir: "up" }
        ],
        teachingPoints: [
          "Biliární pankreatitida vzniká zaklíněním konkrementu v oblasti papily.",
          "Tato oblast RUQ v Case 7 zobrazuje přímo reálnou cholecystosonografii s konkrementy."
        ],
        quiz: {
          question: "Jaká je nejčastější příčina akutní pankreatitidy v rozvinutých zemích?",
          options: [
            "Chronický alkoholismus a cholecystoliáza (biliární)",
            "Hypertriglyceridémie",
            "Autoimunitní zánět",
            "Trauma břicha"
          ],
          correctIndex: 0,
          explanation: "Cholecystoliáza (biliární pankreatitida) a zneužívání alkoholu představují dohromady více než 80% všech případů akutní pankreatitidy."
        }
      },
      splenorenal: {
        label: "Splenorenální",
        desc: "Splenorenální eFAST",
        findings: [{ text: "Bez volné tekutiny", isPathological: false }],
        annotations: [],
        teachingPoints: []
      },
      pelvic: {
        label: "Pánevní",
        desc: "Douglasův prostor",
        findings: [{ text: "Bez volné tekutiny v pánvi", isPathological: false }],
        annotations: [],
        teachingPoints: []
      },
      ivc: {
        label: "Dolní dutá žíla (IVC)",
        desc: "Stav hydratace",
        findings: [
          { text: "Šíře IVC hraniční (1.5 cm)", isPathological: false },
          { text: "Kolapsibilita kolem 50% (lehká dehydratace)", isPathological: false }
        ],
        annotations: [],
        teachingPoints: ["Lehký deficit tekutin v důsledku zvracení a sekvestrace tekutin do třetího prostoru."]
      },
      lungs: {
        label: "Plíce",
        desc: "Bilateralní plicní sono",
        findings: [
          { text: "Klouzání plic přítomno bilaterálně", isPathological: false },
          { text: "Normální A-linie", isPathological: false }
        ],
        annotations: [],
        teachingPoints: ["Plíce jsou vzdušné, bez známek fluidotoraxu či pneumotoraxu."]
      }
    }
  },
  "12": { // Kardiogenní šok
    rtg: {
      reportText: "RTG Hrudníku: Výrazné městnání v plicním oběhu, motýlovité zastření perihilárně (plicní edém), kardiomegalie.",
      findings: [
        { text: "Výrazná kardiomegalie (zvětšení srdce doleva)", isPathological: true },
        { text: "Motýlovité symetrické zastření plic (alveolární edém)", isPathological: true },
        { text: "Přítomny Kerleyho B linie", isPathological: true }
      ],
      annotations: [
        { x: 0.5, y: 0.58, label: "Kardiomegalie", color: "#f87171", arrowDir: "up" },
        { x: 0.3, y: 0.42, label: "Alveolární plicní edém", color: "#f87171", arrowDir: "right" },
        { x: 0.2, y: 0.68, label: "Kerleyho B linie", color: "#f59e0b", arrowDir: "right" }
      ],
      teachingPoints: [
        "Kardiomegalie svědčí o chronickém zatížení nebo dilatačním selhání srdce.",
        "Alveolární edém plic je důsledkem selhání levé komory (tlakový přetlak v plicních žilách)."
      ]
    },
    ct: {
      reportText: "CT vyšetření: Kontraindikováno! Pacient je oběhově nestabilní, transport by mohl způsobit zástavu oběhu.",
      findings: [
        { text: "Vyšetření neprovedeno pro nestabilitu", isPathological: true }
      ],
      annotations: [],
      teachingPoints: ["U pacientů v těžkém šoku platí pravidlo: stabilizuj a vyšetřuj u lůžka (ultrazvuk). Transport na CT je rizikový."]
    },
    usg: {
      cardiac: {
        label: "Kardiální (PLAX)",
        desc: "Kinetika myokardu a perikard",
        findings: [
          { text: "Těžká difúzní hypokineze až akineze přední stěny a hrotu LK", isPathological: true },
          { text: "Kriticky snížená ejekční frakce LK (20-25%)", isPathological: true },
          { text: "Bez perikardiálního výpotku", isPathological: false }
        ],
        annotations: [
          { x: 0.45, y: 0.55, label: "Akinetická přední stěna LK", color: "#f87171", arrowDir: "right" }
        ],
        teachingPoints: [
          "Těžké poškození kontraktility levé komory je bezprostřední příčinou kardiogenního šoku.",
          "Akineze přední stěny ukazuje na uzávěr ramus interventricularis anterior (LAD)."
        ],
        quiz: {
          question: "Jaká je kritická hodnota ejekční frakce levé komory (EF LK), pod kterou dochází k těžkému kardiogennímu selhávání?",
          options: [
            "Pod 50 %",
            "Pod 40 %",
            "Pod 30 %",
            "Pod 15 %"
          ],
          correctIndex: 2,
          explanation: "Ejekční frakce levé komory pod 30% značí těžkou dysfunkci a pacient je vystaven bezprostřednímu riziku kardiogenního šoku a nízkého minutového výdeje."
        }
      },
      morison: {
        label: "Morisonův prostor",
        desc: "FAST břicho",
        findings: [{ text: "Volná tekutina nepřítomna", isPathological: false }],
        annotations: [],
        teachingPoints: []
      },
      splenorenal: {
        label: "Splenorenální",
        desc: "FAST břicho",
        findings: [{ text: "Volná tekutina nepřítomna", isPathological: false }],
        annotations: [],
        teachingPoints: []
      },
      pelvic: {
        label: "Pánevní",
        desc: "Douglas",
        findings: [{ text: "Volná tekutina nepřítomna", isPathological: false }],
        annotations: [],
        teachingPoints: []
      },
      ivc: {
        label: "Dolní dutá žíla (IVC)",
        desc: "Pravostranné plnění",
        findings: [
          { text: "Plethorická (široká) IVC (2.5 cm)", isPathological: true },
          { text: "Respirační kolapsibilita chybí (< 5%)", isPathological: true }
        ],
        annotations: [
          { x: 0.5, y: 0.5, label: "Kongestivní dilatovaná IVC", color: "#f87171", arrowDir: "up" }
        ],
        teachingPoints: [
          "Široká IVC bez kolapsu odráží vysoký centrální žilní tlak (CVP) v důsledku selhávání srdce jako pumpy."
        ]
      },
      lungs: {
        label: "Plíce",
        desc: "Plicní sono (LUS)",
        findings: [
          { text: "Mnohočetné bilaterální B-linie (plicní edém)", isPathological: true },
          { text: "Klouzání plic zachováno", isPathological: false }
        ],
        annotations: [
          { x: 0.5, y: 0.6, label: "B-linie (edém plic)", color: "#f87171", arrowDir: "up" }
        ],
        teachingPoints: [
          "B-linie (tzv. plicní rakety) jsou vertikální artefakty vycházející z pleurální čáry až na konec obrazovky.",
          "Jejich bilaterální nález (tři a více v jednom sektoru) odpovídá intersticiálnímu / alveolárnímu edému."
        ]
      }
    }
  },
  "13": { // CMP ischemická
    rtg: {
      reportText: "RTG Hrudníku: Srdeční stín přiměřené velikosti, plíce bez ložiskových změn.",
      findings: [
        { text: "Normální RTG hrudníku", isPathological: false }
      ],
      annotations: []
    },
    ct: {
      reportText: "CT Mozku: Bez nitrolebního krvácení. Časná ischemie vpravo, hyperdenzní arteria cerebri media vpravo (trombus).",
      findings: [
        { text: "Intrakraniální krvácení vyloučeno", isPathological: false },
        { text: "Hyperdenzní ACM vpravo (dense MCA sign)", isPathological: true },
        { text: "Setření struktury kůry a podkoří v oblasti inzuly vpravo", isPathological: true }
      ],
      annotations: [
        { x: 0.62, y: 0.38, label: "Hyperdenzní ACM vpravo (trombus)", color: "#f87171", arrowDir: "left" },
        { x: 0.65, y: 0.5, label: "Setření kůry (časná ischemie)", color: "#f59e0b", arrowDir: "left" }
      ],
      teachingPoints: [
        "Hlavním úkolem nativního CT u podezření na CMP je vyloučit krvácení.",
        "Hyperdenzní ACM značí přítomnost čerstvého trombu/embolu v tepně.",
        "Setření rozhraní šedé a bílé hmoty je časným znakem ischemie."
      ],
      quiz: {
        question: "Jaký je hlavní terapeutický krok u pacienta s iCMP v časném okně po vyloučení krvácení na CT?",
        options: [
          "Podání Kyseliny acetylsalicylové 400mg i.v.",
          "Systémová trombolýza (rtPA) a/nebo mechanická trombektomie",
          "Podání nízkomolekulárního heparinu (LMWH)",
          "Uvedení do umělého spánku a neurochirurgická dekomprese"
        ],
        correctIndex: 1,
        explanation: "Při potvrzené ischemické CMP v časném okně (do 4.5 hodiny) a vyloučení krvácení na CT je metodou volby systémová trombolýza (rtPA) k rekanalizaci uzavřené tepny, případně mechanická trombektomie."
      }
    },
    usg: {
      cardiac: {
        label: "Kardiální (PLAX)",
        desc: "Kardiální sono",
        findings: [
          { text: "Normální kinetika komor, EF 60%", isPathological: false },
          { text: "Bez perikardiálního výpotku", isPathological: false }
        ],
        annotations: [],
        teachingPoints: ["Kontraktilita je dobrá. EKG sice vykazuje fibrilaci síní, ale mechanická funkce komor je zachována."]
      },
      morison: {
        label: "Morisonův prostor",
        desc: "FAST",
        findings: [{ text: "Bez volné tekutiny", isPathological: false }],
        annotations: []
      },
      splenorenal: {
        label: "Splenorenální",
        desc: "FAST",
        findings: [{ text: "Bez volné tekutiny", isPathological: false }],
        annotations: []
      },
      pelvic: {
        label: "Pánevní",
        desc: "FAST",
        findings: [{ text: "Bez volné tekutiny", isPathological: false }],
        annotations: []
      },
      ivc: {
        label: "Dolní dutá žíla (IVC)",
        desc: "Hydratace",
        findings: [
          { text: "Šíře IVC 1.8 cm, kolaps 40% (norma)", isPathological: false }
        ],
        annotations: []
      },
      lungs: {
        label: "Plíce",
        desc: "Plicní sono",
        findings: [
          { text: "Klouzání plic zachováno bilateralně", isPathological: false },
          { text: "Fyziologické A-linie", isPathological: false }
        ],
        annotations: []
      }
    }
  }
};

// Default imaging mapping for cases not fully specified
const getDefaultCaseImaging = (caseId: string): CaseImagingData => {
  return {
    rtg: {
      reportText: "RTG Hrudníku: Plíce bez infiltrace, srdeční stín přiměřené velikosti a tvaru.",
      findings: [{ text: "Normální nález na plicním parenchymu a srdci", isPathological: false }],
      annotations: [],
      teachingPoints: ["Žádný zjevný patologický nález na RTG snímku."]
    },
    ct: {
      reportText: "CT Vyšetření: Nativní CT mozku / pan-scan bez zjevných akutních změn.",
      findings: [{ text: "Bez známek akutního krvácení či ischemie", isPathological: false }],
      annotations: [],
      teachingPoints: ["Nativní CT nevykazuje strukturální patologii."]
    },
    usg: {
      cardiac: {
        label: "Kardiální (PLAX)",
        desc: "Kontraktilita a perikard",
        findings: [{ text: "Normální kinetika komor, EF 60%", isPathological: false }],
        annotations: [],
        teachingPoints: ["Levá i pravá komora mají normální plnění i vyprazdňování."]
      },
      morison: {
        label: "Morisonův prostor",
        desc: "Hepatorenální rozhraní",
        findings: [{ text: "Volná tekutina v Morisonově prostoru nepřítomna", isPathological: false }],
        annotations: [],
        teachingPoints: ["Rozhraní jater a pravé ledviny je volné."]
      },
      splenorenal: {
        label: "Splenorenální",
        desc: "Slezinně-renální rozhraní",
        findings: [{ text: "Volná tekutina ve splenorenálním prostoru nepřítomna", isPathological: false }],
        annotations: [],
        teachingPoints: ["Rozhraní sleziny a levé ledviny bez patologie."]
      },
      pelvic: {
        label: "Pánevní",
        desc: "Douglasův prostor",
        findings: [{ text: "Volná tekutina v malé pánvi nepřítomna", isPathological: false }],
        annotations: [],
        teachingPoints: []
      },
      ivc: {
        label: "Dolní dutá žíla (IVC)",
        desc: "Průměr a kolapsibilita",
        findings: [
          { text: "Normální šíře IVC (1.7 - 1.9 cm)", isPathological: false },
          { text: "Normální kolapsibilita při nádechu (cca 40%)", isPathological: false }
        ],
        annotations: [],
        teachingPoints: []
      },
      lungs: {
        label: "Plíce",
        desc: "Klouzání plic",
        findings: [
          { text: "Přítomno normální klouzání plíce", isPathological: false },
          { text: "Přítomny normální A-linie bilaterálně", isPathological: false }
        ],
        annotations: [],
        teachingPoints: ["Vylučuje přítomnost pneumotoraxu v místech vyšetření."]
      }
    }
  };
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
  const isNormalCase = !["2", "3", "4", "10", "12"].includes(caseId);

  const getPathologyLayer = () => {
    switch (caseId) {
      case "12": // Cardiogenic shock - pulmonary edema + cardiomegaly
        return (
          <>
            {/* Enlarged heart */}
            <ellipse cx="200" cy="270" rx="118" ry="98" fill="rgba(255,255,255,0.22)" />
            {/* Bilateral alveolar opacities (butterfly pattern) */}
            <ellipse cx="115" cy="220" rx="65" ry="80" fill="rgba(235,235,235,0.35)" />
            <ellipse cx="285" cy="220" rx="65" ry="80" fill="rgba(235,235,235,0.35)" />
            {/* Kerley B lines */}
            {[0, 1, 2, 3, 4].map(i => (
              <line key={i} x1={55} y1={290 + i * 10} x2={85} y2={290 + i * 10} stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" />
            ))}
            {[0, 1, 2, 3, 4].map(i => (
              <line key={i} x1={315} y1={290 + i * 10} x2={345} y2={290 + i * 10} stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" />
            ))}
          </>
        );
      case "2": // PE - Westermark / Hampton's hump
        return (
          <>
            {/* Westermark - hypolucency in right lung upper lobe */}
            <ellipse cx="285" cy="170" rx="55" ry="60" fill="rgba(20,20,20,0.35)" stroke="rgba(255,230,100,0.5)" strokeWidth="1.5" strokeDasharray="4 3" />
            {/* Hampton's hump - wedge-shaped opacity at right base */}
            <polygon points="255,330 310,330 280,295" fill="rgba(255,255,255,0.3)" stroke="rgba(255,255,255,0.4)" strokeWidth="1" />
          </>
        );
      case "3": // Polytrauma - hemothorax right + rib fractures
        return (
          <>
            {/* Hemothorax right - opacification of lower zone */}
            <rect x="230" y="260" width="120" height="120" rx="10" fill="rgba(240,240,240,0.5)" />
            <ellipse cx="290" cy="315" rx="55" ry="55" fill="rgba(240,240,240,0.4)" />
            {/* Rib fractures */}
            {[145, 165, 185, 205].map((y, i) => (
              <line key={i} x1={300 + i * 2} y1={y - 5} x2={315 + i * 2} y2={y + 8} stroke="rgba(239,68,68,0.9)" strokeWidth="2.5" />
            ))}
          </>
        );
      case "10": // Asthma - hyperinflation
        return (
          <>
            {/* Flattened diaphragm */}
            <path d="M 68 355 Q 200 342 332 355" stroke="rgba(255,255,255,0.6)" strokeWidth="2.5" fill="none" />
            {/* Darker lung fields */}
            <ellipse cx="128" cy="210" rx="68" ry="98" fill="rgba(0,0,0,0.2)" />
            <ellipse cx="272" cy="210" rx="68" ry="98" fill="rgba(0,0,0,0.2)" />
          </>
        );
      case "4": // Croup - steeple sign
        return (
          <>
            {/* Narrowed trachea */}
            <rect x="188" y="160" width="24" height="70" fill="rgba(0,0,0,0.85)" />
            <polygon points="188,210 200,240 212,210" fill="rgba(0,0,0,0.85)" />
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="relative w-full aspect-[400/420] overflow-hidden rounded bg-black">
      {/* If normal case, display authentic chest X-ray image */}
      {isNormalCase ? (
        <img
          src={rtgChestNormal}
          alt="Normal Chest X-Ray"
          className="w-full h-full object-cover opacity-85"
        />
      ) : (
        /* Otherwise, render our stylized vector X-Ray with pathology */
        <svg viewBox="0 0 400 420" className="w-full h-full" style={{ background: "#111" }}>
          <rect width="400" height="420" fill="#111" />
          <ellipse cx="128" cy="215" rx="75" ry="115" fill="#222" />
          <ellipse cx="272" cy="215" rx="75" ry="115" fill="#222" />
          {[0, 1, 2, 3, 4, 5, 6, 7].map(i => {
            const y = 110 + i * 30;
            const w = 60 + (i < 4 ? i * 5 : (7 - i) * 3);
            return (
              <g key={i}>
                <path d={`M ${90 - w} ${y} Q ${90} ${y - 10} ${175 - i * 3} ${y + 8}`} stroke="rgba(255,255,255,0.2)" strokeWidth="2" fill="none" />
                <path d={`M ${310 + w} ${y} Q ${310} ${y - 10} ${225 + i * 3} ${y + 8}`} stroke="rgba(255,255,255,0.2)" strokeWidth="2" fill="none" />
              </g>
            );
          })}
          <rect x="191" y="55" width="18" height="90" fill="rgba(40,40,40,0.85)" rx="3" />
          <path d="M 191 140 Q 160 155 145 165" stroke="rgba(255,255,255,0.3)" strokeWidth="2" fill="none" />
          <path d="M 209 140 Q 240 155 255 165" stroke="rgba(255,255,255,0.3)" strokeWidth="2" fill="none" />
          <ellipse cx="190" cy="270" rx="85" ry="82" fill="rgba(255,255,255,0.12)" />
          <path d="M 55 365 Q 128 348 200 352 Q 272 348 345 365" stroke="rgba(255,255,255,0.4)" strokeWidth="3" fill="none" />
          {getPathologyLayer()}
        </svg>
      )}

      {/* Shared annotations layer on top */}
      {showAnnotations && (
        <svg viewBox="0 0 400 420" className="absolute inset-0 w-full h-full pointer-events-none">
          {annotations.map((ann, i) => {
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
              <g key={i} className="pointer-events-auto">
                <line x1={ax} y1={ay} x2={ax2} y2={ay2} stroke={color} strokeWidth="2" markerEnd={`url(#arrow-rtg-${i})`} />
                <defs>
                  <marker id={`arrow-rtg-${i}`} markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                    <path d="M0,0 L0,6 L6,3 z" fill={color} />
                  </marker>
                </defs>
                <rect x={ax2 - 10} y={ay2 - 20} width={Math.min(ann.label.length * 6, 170)} height={18} rx="3" fill="rgba(10,12,16,0.85)" stroke={color} strokeWidth="0.5" />
                <text x={ax2 - 6} y={ay2 - 7} fontSize="9" fill={color} fontFamily="monospace" fontWeight="bold">{ann.label}</text>
              </g>
            );
          })}
        </svg>
      )}

      {/* Film metadata */}
      <div className="absolute top-2 left-2 text-[8px] font-mono text-white/50 select-none">
        <div>PROJEKCE: AP STOJE</div>
        <div>EXP: 110kVp • 4.2mAs</div>
      </div>
      <div className="absolute top-2 right-2 text-[9px] font-bold font-mono text-white/70 select-none">
        R
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Canvas Ultrasound / Echo Viewer (Morison, Cardiac, IVC, Lungs etc.)
// ─────────────────────────────────────────────────────────────────────────────
interface USGCanvasProps {
  caseId: string;
  viewType: USGViewType;
  annotations: Annotation[];
  showAnnotations: boolean;
}

function USGCanvas({ caseId, viewType, annotations, showAnnotations }: USGCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);
  const timeRef = useRef<number>(0);

  // Gallbladder image loading status
  const [gbImg, setGbImg] = useState<HTMLImageElement | null>(null);

  useEffect(() => {
    if (viewType === "morison" && caseId === "7") {
      const img = new Image();
      img.src = usgGallbladder;
      img.onload = () => setGbImg(img);
    } else {
      setGbImg(null);
    }
  }, [viewType, caseId]);

  const drawFrame = useCallback((timestamp: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const W = canvas.width;
    const H = canvas.height;
    timeRef.current = timestamp / 1000;
    const t = timeRef.current;

    // 1. Background
    ctx.fillStyle = "#0c0e12";
    ctx.fillRect(0, 0, W, H);

    // If using the real gallbladder image background (Case 7 RUQ)
    if (gbImg && viewType === "morison" && caseId === "7") {
      ctx.drawImage(gbImg, 0, 0, W, H);
      // Speckle contrast filter overlay
      ctx.fillStyle = "rgba(255,255,255,0.02)";
      ctx.fillRect(0, 0, W, H);
    } else {
      // 2. Draw standard sector/wedge sector field
      const cx = W / 2, cy = 15;
      const R = H * 1.3;
      const angle = Math.PI / 2.5;
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.arc(cx, cy, R, Math.PI / 2 - angle, Math.PI / 2 + angle);
      ctx.closePath();
      ctx.clip();

      // Gray tissue base
      const grad = ctx.createRadialGradient(cx, cy, 20, cx, cy, R);
      grad.addColorStop(0, "#22252c");
      grad.addColorStop(0.5, "#15171c");
      grad.addColorStop(1, "#08090b");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, W, H);

      // Add digital speckle noise
      const imgData = ctx.getImageData(0, 0, W, H);
      const d = imgData.data;
      for (let i = 0; i < d.length; i += 4) {
        const noise = (Math.random() - 0.5) * 20;
        d[i] = Math.max(0, Math.min(255, d[i] + noise));
        d[i + 1] = d[i];
        d[i + 2] = d[i];
      }
      ctx.putImageData(imgData, 0, 0);

      // Utility drawing functions
      const drawFluid = (x: number, y: number, w: number, h: number, rx = 6) => {
        ctx.fillStyle = "rgba(4,6,10,0.92)"; // anechoic fluid
        ctx.beginPath();
        ctx.roundRect(x, y, w, h, rx);
        ctx.fill();
        // Posterior acoustic enhancement
        const enh = ctx.createLinearGradient(x, y + h, x, y + h + 40);
        enh.addColorStop(0, "rgba(90,95,110,0.4)");
        enh.addColorStop(1, "rgba(10,12,15,0)");
        ctx.fillStyle = enh;
        ctx.fillRect(x, y + h, w, 40);
      };

      const drawTissue = (x: number, y: number, w: number, h: number, brightness = 90, rx = 10) => {
        ctx.fillStyle = `rgba(${brightness},${brightness + 4},${brightness + 10},0.7)`;
        ctx.beginPath();
        ctx.roundRect(x, y, w, h, rx);
        ctx.fill();
      };

      // 3. Render specific views
      if (viewType === "cardiac") {
        // PLAX Cardiac simulation
        let hr = 75; // Case heart rate
        let ef = 0.6; // Ejekční frakce
        let rvSize = 40;
        let lvSize = 65;

        if (caseId === "12") { hr = 122; ef = 0.22; } // cardiogenic shock
        else if (caseId === "1") { hr = 110; ef = 0.45; } // inferior stemi
        else if (caseId === "2") { hr = 124; ef = 0.55; rvSize = 85; lvSize = 42; } // PE: dilated RV, small compressed LV
        else if (["3", "5", "6"].includes(caseId)) { hr = 135; ef = 0.8; } // shock/hypovolemia

        const beatPeriod = 60 / hr;
        const beatPhase = (t % beatPeriod) / beatPeriod;
        // Systole vs Diastole excursion
        const systoleFactor = Math.sin(beatPhase * Math.PI); 
        const compression = systoleFactor * ef * 0.35;

        // Draw Left Ventricle (LV)
        ctx.fillStyle = "rgba(4,6,10,0.95)";
        ctx.beginPath();
        if (caseId === "2") {
          // Compressed D-shape LV
          ctx.ellipse(cx - 35, cy + 180, lvSize * (1 - compression), lvSize * 1.3 * (1 - compression * 0.5), 0, 0, Math.PI * 2);
        } else {
          // Standard oval LV
          ctx.ellipse(cx - 30, cy + 175, lvSize * (1 - compression), lvSize * 1.4 * (1 - compression), 0, 0, Math.PI * 2);
        }
        ctx.fill();

        // Draw LV wall (Myocardium)
        ctx.strokeStyle = "rgba(160,170,185,0.7)";
        ctx.lineWidth = 8 + (compression * 8); // thickens in systole
        ctx.beginPath();
        if (caseId === "2") {
          ctx.ellipse(cx - 35, cy + 180, lvSize * (1 - compression), lvSize * 1.3 * (1 - compression * 0.5), 0, 0, Math.PI * 2);
        } else {
          ctx.ellipse(cx - 30, cy + 175, lvSize * (1 - compression), lvSize * 1.4 * (1 - compression), 0, 0, Math.PI * 2);
        }
        ctx.stroke();

        // Draw Right Ventricle (RV) - sits anterior (above on USG screen)
        ctx.fillStyle = "rgba(4,6,10,0.92)";
        ctx.beginPath();
        ctx.ellipse(cx + 40, cy + 130, rvSize * (1 - compression * 0.4), rvSize * 1.1 * (1 - compression * 0.3), 0.2, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = "rgba(140,150,165,0.6)";
        ctx.lineWidth = 5;
        ctx.stroke();

        // Akinetic anterior wall highlight for Case 12
        if (caseId === "12") {
          ctx.strokeStyle = "rgba(239,68,68,0.8)";
          ctx.lineWidth = 6;
          ctx.beginPath();
          ctx.arc(cx - 30, cy + 175, lvSize * (1 - compression), -Math.PI * 0.6, -Math.PI * 0.1);
          ctx.stroke();
        }

      } else if (viewType === "morison") {
        // RUQ simulation
        drawTissue(90, 80, 240, 120, 65, 16); // Liver
        drawTissue(280, 150, 70, 90, 52, 14); // Kidney

        if (caseId === "3") {
          // Free fluid: black stripe in Morison's pouch
          drawFluid(260, 140, 80, 55, 6);
        }

      } else if (viewType === "splenorenal") {
        // LUQ simulation
        drawTissue(90, 80, 230, 110, 58, 16); // Spleen
        drawTissue(275, 145, 70, 90, 52, 14); // Kidney

        if (caseId === "3") {
          drawFluid(250, 135, 80, 50, 6); // free blood
        }

      } else if (viewType === "pelvic") {
        // Pelvic view: urinary bladder (large fluid filled pocket)
        drawFluid(120, 110, 160, 120, 30); // bladder cavity
        drawTissue(105, 95, 190, 150, 50, 35); // bladder wall

        if (caseId === "3") {
          drawFluid(140, 225, 120, 45, 8); // free blood behind bladder
        }

      } else if (viewType === "ivc") {
        // IVC view: vessel crossing horizontally
        const isShock = ["3", "5", "6"].includes(caseId);
        const isCongested = ["2", "12"].includes(caseId);

        let baseHeight = 35;
        let collapseRate = 0.4;
        if (isShock) { baseHeight = 16; collapseRate = 0.85; } // collapsed
        if (isCongested) { baseHeight = 52; collapseRate = 0.05; } // plethoric

        const respPeriod = 3.5; // respiratory cycle (seconds)
        const respPhase = (t % respPeriod) / respPeriod;
        // Respiratory collapse factor
        const collFactor = Math.sin(respPhase * Math.PI);
        const currentHeight = baseHeight * (1 - collFactor * collapseRate);

        // Liver tissue background surrounding IVC
        drawTissue(70, 100, 260, 140, 60, 10);
        // IVC lumen
        drawFluid(75, 170 - currentHeight / 2, 250, currentHeight, 4);

      } else if (viewType === "lungs") {
        // Lung view
        const isEdema = caseId === "12";
        const isHemothorax = caseId === "3";

        if (isHemothorax) {
          // Pleural effusion (black fluid space above liver/diaphragm)
          drawTissue(70, 200, 260, 80, 65, 8); // liver/diaphragm baze
          drawFluid(75, 80, 250, 115, 4); // hemothorax fluid
        } else {
          // Normal lung sliding or B-lines
          const pleuraY = 120;
          // Shimmering sliding effect
          const slideOffset = Math.sin(t * 12) * 1.5;

          // Rib shadows (dark acoustic shadow cones)
          ctx.fillStyle = "rgba(4,6,10,0.88)";
          ctx.fillRect(80, pleuraY, 45, 180);
          ctx.fillRect(270, pleuraY, 45, 180);

          // Pleural line (bright hyperechoic line)
          ctx.strokeStyle = "rgba(240,245,255,0.85)";
          ctx.lineWidth = 3.5;
          ctx.beginPath();
          ctx.moveTo(60, pleuraY);
          ctx.lineTo(W - 60, pleuraY + slideOffset);
          ctx.stroke();

          if (isEdema) {
            // Pulmonary edema: laser-like vertical B-lines originating from pleura
            const lineCount = 3;
            ctx.fillStyle = "rgba(245,248,255,0.22)";
            for (let i = 0; i < lineCount; i++) {
              const lx = 145 + i * 45 + Math.sin(t * 8 + i) * 2;
              const w = 12 + Math.sin(t * 15) * 3;
              // Draw narrow vertical beams
              const beamGrad = ctx.createLinearGradient(lx, pleuraY, lx, H);
              beamGrad.addColorStop(0, "rgba(245,248,255,0.7)");
              beamGrad.addColorStop(1, "rgba(20,25,35,0)");
              ctx.fillStyle = beamGrad;
              ctx.beginPath();
              ctx.moveTo(lx - w/2, pleuraY);
              ctx.lineTo(lx + w/2, pleuraY);
              ctx.lineTo(lx + w * 1.5, H);
              ctx.lineTo(lx - w * 1.5, H);
              ctx.closePath();
              ctx.fill();
            }
          } else {
            // Normal lung: Horizontal A-lines (reverberations of pleural line)
            ctx.strokeStyle = "rgba(130,140,155,0.3)";
            ctx.lineWidth = 2;
            for (let i = 1; i <= 3; i++) {
              const ay = pleuraY + i * 50;
              ctx.beginPath();
              ctx.moveTo(130, ay);
              ctx.lineTo(260, ay);
              ctx.stroke();
            }
          }
        }
      }

      // 4. Scan line sweep overlay
      for (let i = 0; i < 12; i++) {
        const ang = -angle + (i / 11) * angle * 2 + Math.PI / 2;
        const sx = cx + Math.cos(ang) * 15;
        const sy = cy + Math.sin(ang) * 15;
        const ex = cx + Math.cos(ang) * R * 0.95;
        const ey = cy + Math.sin(ang) * R * 0.95;
        ctx.strokeStyle = "rgba(255,255,255,0.015)";
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(sx, sy);
        ctx.lineTo(ex, ey);
        ctx.stroke();
      }

      // Restore clipping mask
      ctx.restore();
    }

    // 5. Annotations overlay
    if (showAnnotations) {
      annotations.forEach((ann, i) => {
        const ax = ann.x * W;
        const ay = ann.y * H;
        const color = ann.color || "#facc15";
        ctx.strokeStyle = color;
        ctx.lineWidth = 1.8;
        ctx.setLineDash([4, 3]);
        ctx.beginPath();
        ctx.arc(ax, ay, 12, 0, Math.PI * 2);
        ctx.stroke();
        ctx.setLineDash([]);
        ctx.fillStyle = "rgba(10,12,16,0.85)";
        ctx.fillRect(ax + 16, ay - 12, ann.label.length * 5.8, 16);
        ctx.fillStyle = color;
        ctx.font = "bold 9px monospace";
        ctx.fillText(ann.label, ax + 18, ay);
      });
    }

    // Generic USG Info overlay
    ctx.fillStyle = "rgba(120,230,120,0.75)";
    ctx.font = "bold 9.5px monospace";
    ctx.fillText("USG • Real-time", W - 115, H - 22);
    ctx.fillText("FR: 30 fps", W - 115, H - 10);
    ctx.fillText("MI: 1.1 • TIB: 0.3", 10, H - 10);

    animRef.current = requestAnimationFrame(drawFrame);
  }, [caseId, viewType, annotations, showAnnotations, gbImg]);

  useEffect(() => {
    animRef.current = requestAnimationFrame(drawFrame);
    return () => cancelAnimationFrame(animRef.current);
  }, [drawFrame]);

  return (
    <canvas
      ref={canvasRef}
      width={400}
      height={340}
      className="w-full max-h-80 md:max-h-96 bg-black rounded"
      style={{ imageRendering: "pixelated" }}
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

  // Normal brain CT image
  const [ctImg, setCtImg] = useState<HTMLImageElement | null>(null);

  useEffect(() => {
    const isNormalBrain = !["2", "3", "7"].includes(caseId); // PE is chest, pancreatitis břicho, trauma is pan-scan chest/abd
    if (isNormalBrain) {
      const img = new Image();
      img.src = ctBrainNormal;
      img.onload = () => setCtImg(img);
    } else {
      setCtImg(null);
    }
  }, [caseId]);

  const drawSlice = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const W = canvas.width;
    const H = canvas.height;
    const cx = W / 2, cy = H / 2;
    const slice = sliceIndex / totalSlices;

    ctx.fillStyle = "#000";
    ctx.fillRect(0, 0, W, H);

    // If using the real brain CT image as base (Cases 1, 4, 5, 6, 8, 9, 10, 11, 13)
    if (ctImg) {
      ctx.drawImage(ctImg, 0, 0, W, H);
      
      // Case 13 (Ischemic Stroke) - overlay the early ischemic changes
      if (caseId === "13") {
        // Hypodensity in right insula (darker area)
        ctx.fillStyle = "rgba(35,32,28,0.85)";
        ctx.beginPath();
        ctx.ellipse(cx + 42, cy - 10, 35, 28, -0.1, 0, Math.PI * 2);
        ctx.fill();

        // Hyperdense ACM (bright thrombus)
        ctx.fillStyle = "rgba(255,235,180,0.95)";
        ctx.beginPath();
        ctx.ellipse(cx + 46, cy - 20, 6, 4, 0.4, 0, Math.PI * 2);
        ctx.fill();
      }
    } else {
      // Draw simulated body slice (chest or abdominal scan)
      const bodyW = 165, bodyH = 145;
      const bodyGrad = ctx.createRadialGradient(cx, cy, 20, cx, cy, bodyW);
      bodyGrad.addColorStop(0, "#2c2522");
      bodyGrad.addColorStop(0.7, "#201c1a");
      bodyGrad.addColorStop(1, "#120e0d");
      ctx.fillStyle = bodyGrad;
      ctx.beginPath();
      ctx.ellipse(cx, cy, bodyW, bodyH, 0, 0, Math.PI * 2);
      ctx.fill();

      // Vertebra bone
      const spineY = cy + 85;
      ctx.fillStyle = "rgba(235,230,220,0.9)";
      ctx.beginPath();
      ctx.ellipse(cx, spineY, 20, 18, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = "rgba(0,0,0,0.95)";
      ctx.beginPath();
      ctx.ellipse(cx, spineY, 7, 8, 0, 0, Math.PI * 2);
      ctx.fill();

      if (caseId === "2" && slice > 0.2 && slice < 0.8) {
        // PE PA vessels
        ctx.fillStyle = "rgba(175,60,60,0.9)"; // Right PA lumen (contrast)
        ctx.beginPath();
        ctx.ellipse(cx + 55, cy - 18, 16, 13, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = "rgba(65,30,30,0.98)"; // Clot filling defect
        ctx.beginPath();
        ctx.ellipse(cx + 55, cy - 16, 10, 7, 0.2, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = "rgba(180,70,70,0.85)"; // Left PA lumen
        ctx.beginPath();
        ctx.ellipse(cx - 50, cy - 18, 15, 11, 0, 0, Math.PI * 2);
        ctx.fill();

        // Lungs
        ctx.fillStyle = "#0c0d10";
        ctx.beginPath();
        ctx.ellipse(cx + 80, cy, 52, 62, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.ellipse(cx - 80, cy, 52, 62, 0, 0, Math.PI * 2);
        ctx.fill();
      } else if (caseId === "7" && slice > 0.3) {
        // Pancreatitis - abdominal scan
        // Liver
        ctx.fillStyle = "rgba(70,58,48,0.9)";
        ctx.beginPath();
        ctx.ellipse(cx + 60, cy - 25, 70, 52, 0.2, 0, Math.PI * 2);
        ctx.fill();
        // Pancreas (low-density, enlarged)
        ctx.fillStyle = "rgba(42,38,34,0.9)";
        ctx.beginPath();
        ctx.roundRect(cx - 70, cy + 22, 140, 36, 10);
        ctx.fill();
        // Fluid collection
        ctx.fillStyle = "#08090a";
        ctx.beginPath();
        ctx.ellipse(cx + 70, cy + 50, 30, 22, 0.3, 0, Math.PI * 2);
        ctx.fill();
      } else {
        // General chest CT
        ctx.fillStyle = "#0c0d10";
        ctx.beginPath();
        ctx.ellipse(cx + 80, cy, 50, 65, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.ellipse(cx - 80, cy, 50, 65, 0, 0, Math.PI * 2);
        ctx.fill();

        if (caseId === "3" && slice > 0.3) {
          // Hemothorax right
          ctx.fillStyle = "rgba(95,45,45,0.75)";
          ctx.beginPath();
          ctx.ellipse(cx + 80, cy + 30, 42, 38, 0.3, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    }

    // 6. Draw annotations on top
    if (showAnnotations) {
      annotations.forEach((ann, i) => {
        const ax = ann.x * W;
        const ay = ann.y * H;
        const color = ann.color || "#facc15";
        ctx.strokeStyle = color;
        ctx.lineWidth = 1.8;
        ctx.setLineDash([4, 3]);
        ctx.beginPath();
        ctx.arc(ax, ay, 14, 0, Math.PI * 2);
        ctx.stroke();
        ctx.setLineDash([]);
        ctx.fillStyle = "rgba(10,12,16,0.85)";
        ctx.fillRect(ax + 18, ay - 12, ann.label.length * 5.8, 16);
        ctx.fillStyle = color;
        ctx.font = "bold 9px monospace";
        ctx.fillText(ann.label, ax + 20, ay);
      });
    }

    // CT technical metrics
    ctx.fillStyle = "rgba(255,255,255,0.45)";
    ctx.font = "8.5px font-mono monospace";
    ctx.fillText(`W:${windowWidth} L:45`, 8, H - 22);
    ctx.fillText(`Slice: ${sliceIndex + 1}/${totalSlices}`, 8, H - 10);
    ctx.fillText("AXIAL • 4.5mm", W - 92, H - 10);
  }, [sliceIndex, windowWidth, caseId, annotations, showAnnotations, ctImg]);

  useEffect(() => {
    drawSlice();
  }, [drawSlice]);

  return (
    <div className="space-y-2">
      <div className="relative">
        <canvas
          ref={canvasRef}
          width={400}
          height={340}
          className="w-full max-h-80 md:max-h-96 bg-black rounded"
        />
        {/* Overlay showing normal tag */}
        {ctImg && (
          <div className="absolute top-2 right-2 px-1.5 py-0.5 bg-green-500/10 border border-green-500/20 text-green-400 text-[8px] font-bold uppercase rounded">
            Nativní CT
          </div>
        )}
      </div>
      <div className="flex items-center gap-3 px-1">
        <span className="text-[9px] text-[#c2c6d6] font-mono uppercase tracking-wider">Řez {sliceIndex + 1}/{totalSlices}</span>
        <input
          type="range"
          min={0}
          max={totalSlices - 1}
          value={sliceIndex}
          onChange={e => setSliceIndex(Number(e.target.value))}
          className="flex-1 accent-[#4d8eff] h-1.5"
        />
        <div className="flex gap-1">
          <button
            onClick={() => setSliceIndex(s => Math.max(0, s - 1))}
            className="w-6 h-6 rounded bg-[#272a31] hover:bg-[#424754] flex items-center justify-center cursor-pointer"
          >
            <ChevronUp className="w-3.5 h-3.5 text-white" />
          </button>
          <button
            onClick={() => setSliceIndex(s => Math.min(totalSlices - 1, s + 1))}
            className="w-6 h-6 rounded bg-[#272a31] hover:bg-[#424754] flex items-center justify-center cursor-pointer"
          >
            <ChevronDown className="w-3.5 h-3.5 text-white" />
          </button>
        </div>
      </div>
      <div className="flex items-center gap-2 px-1">
        <span className="text-[9px] text-[#c2c6d6] font-mono">W:{windowWidth}</span>
        <input
          type="range"
          min={100}
          max={1500}
          value={windowWidth}
          onChange={e => setWindowWidth(Number(e.target.value))}
          className="flex-1 accent-[#adc6ff] h-1"
        />
        <span className="text-[9px] text-[#c2c6d6] font-mono">Šířka okna</span>
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

  // USG view selector state
  const [usgView, setUsgView] = useState<USGViewType>("cardiac");

  // Load case-specific data or fallback
  const caseData = CASE_IMAGING[caseId] || getDefaultCaseImaging(caseId);

  const getActiveViewData = () => {
    if (modality === "rtg") return caseData.rtg || getDefaultCaseImaging(caseId).rtg;
    if (modality === "ct") return caseData.ct || getDefaultCaseImaging(caseId).ct;
    return caseData.usg[usgView];
  };

  const activeData = getActiveViewData();
  const annotations = activeData?.annotations || [];
  const quiz = activeData?.quiz;

  const modalityLabel = {
    rtg: "RTG / Rentgen hrudníku",
    echo: "FAST / RUSH Plicní a Kardiální Sono",
    ct: "Výpočetní tomografie (CT)"
  }[modality];

  return (
    <div className="bg-[#1d2027] text-[#e1e2ec] rounded-2xl border border-[#424754] overflow-hidden shadow-2xl flex flex-col max-h-[95vh] overflow-y-auto custom-scrollbar">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-[#424754] shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-[#4d8eff]/10 rounded-xl flex items-center justify-center border border-[#4d8eff]/20">
            <Layers className="w-4 h-4 text-[#adc6ff]" />
          </div>
          <div>
            <h3 className="font-extrabold text-sm text-white">{modalityLabel}</h3>
            <p className="text-[10px] text-[#c2c6d6]">Interaktivní diagnostický trenažér</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowAnnotations(!showAnnotations)}
            className={`px-3 py-1.5 rounded-lg text-[10px] font-bold cursor-pointer transition-all ${
              showAnnotations
                ? "bg-[#4d8eff]/20 text-[#adc6ff] border border-[#4d8eff]/30"
                : "bg-[#272a31] text-[#c2c6d6] border border-[#424754]"
            }`}
          >
            {showAnnotations ? "Skrýt popisky" : "Zobrazit popisky"}
          </button>
          {onClose && (
            <button
              onClick={onClose}
              className="px-3 py-1.5 rounded-lg text-[10px] font-bold cursor-pointer bg-[#272a31] text-[#c2c6d6] border border-[#424754] hover:border-[#c2c6d6]"
            >
              ZAVŘÍT
            </button>
          )}
        </div>
      </div>

      {/* USG Probe Selector Tab Bar */}
      {modality === "echo" && (
        <div className="bg-[#16181f] border-b border-[#424754]/50 p-2 flex flex-wrap gap-1 shrink-0">
          {(["cardiac", "morison", "splenorenal", "pelvic", "ivc", "lungs"] as USGViewType[]).map((v) => {
            const vDef = caseData.usg[v] || getDefaultCaseImaging(caseId).usg[v];
            const active = usgView === v;
            return (
              <button
                key={v}
                onClick={() => {
                  setUsgView(v);
                  setQuizAnswer(null);
                  setQuizAnswered(false);
                }}
                className={`px-2.5 py-1.5 rounded-md text-[10px] font-bold cursor-pointer transition-all flex items-center gap-1 ${
                  active
                    ? "bg-[#4d8eff] text-white"
                    : "bg-[#272a31]/60 text-[#c2c6d6] hover:bg-[#272a31]"
                }`}
              >
                <Activity className="w-3 h-3" />
                <span>{vDef.label}</span>
              </button>
            );
          })}
        </div>
      )}

      {/* Image Rendering Area */}
      <div className="bg-black p-2 shrink-0 flex justify-center items-center">
        <div className="w-full max-w-lg">
          {modality === "rtg" && (
            <RTGViewer caseId={caseId} annotations={annotations} showAnnotations={showAnnotations} />
          )}
          {modality === "echo" && (
            <USGCanvas caseId={caseId} viewType={usgView} annotations={annotations} showAnnotations={showAnnotations} />
          )}
          {modality === "ct" && (
            <CTViewer caseId={caseId} annotations={annotations} showAnnotations={showAnnotations} />
          )}
        </div>
      </div>

      {/* Info & Quiz Section */}
      {activeData && (
        <div className="p-4 space-y-4">
          {/* Probe / View info */}
          {modality === "echo" && (
            <div className="bg-[#16181f] p-3 rounded-lg border border-[#424754]/30 space-y-1">
              <span className="text-[9px] font-extrabold uppercase text-[#adc6ff] tracking-wider font-mono">Vyšetřovaná rovina</span>
              <h4 className="text-xs font-bold text-white">{(activeData as USGViewDefinition).label}</h4>
              <p className="text-[10px] text-[#c2c6d6] leading-relaxed">{(activeData as USGViewDefinition).desc}</p>
            </div>
          )}

          {/* Key findings list */}
          <div className="space-y-2">
            <h4 className="text-[10px] font-extrabold text-[#c2c6d6] uppercase tracking-wider">Popis nálezu</h4>
            <div className="space-y-1.5">
              {activeData.findings.map((f, i) => (
                <div key={i} className="flex items-start gap-2 text-xs">
                  <span
                    className={`mt-0.5 shrink-0 w-4 h-4 rounded-full flex items-center justify-center text-[9px] font-bold ${
                      f.isPathological ? "bg-red-500/20 text-red-400" : "bg-green-500/20 text-green-400"
                    }`}
                  >
                    {f.isPathological ? "!" : "✓"}
                  </span>
                  <span className={f.isPathological ? "text-red-200" : "text-[#c2c6d6]"}>
                    {f.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Teaching Points */}
          {activeData.teachingPoints && activeData.teachingPoints.length > 0 && (
            <div className="space-y-2">
              <h4 className="text-[10px] font-extrabold text-[#c2c6d6] uppercase tracking-wider">Klinické a výukové souvislosti</h4>
              <div className="space-y-1.5">
                {activeData.teachingPoints.map((tp, i) => (
                  <div key={i} className="flex items-start gap-2 text-[11px] leading-relaxed">
                    <span className="text-[#4d8eff] shrink-0 mt-0.5">→</span>
                    <span className="text-[#c2c6d6]">{tp}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Text Report */}
          <div className="pt-1">
            <button
              onClick={() => setShowReport(!showReport)}
              className="text-[10px] text-[#adc6ff] underline cursor-pointer hover:text-white transition-colors"
            >
              {showReport ? "▲ Skrýt textový nález" : "▼ Zobrazit textový lékařský nález"}
            </button>
            {showReport && (
              <div className="mt-2 p-3 bg-[#0b0e15] rounded-lg border border-green-500/20 text-[11px] text-green-300 font-mono leading-relaxed">
                {modality === "echo" ? reportText : (activeData as ImagingDefinition).reportText || reportText}
              </div>
            )}
          </div>

          {/* Interactive Quiz */}
          {quiz && (
            <div className="pt-3 border-t border-[#424754]/50 space-y-3">
              <h4 className="text-[10px] font-extrabold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                <Info className="w-3.5 h-3.5" /> Výukový Kvíz k Snímku
              </h4>
              <p className="text-xs text-white font-medium">{quiz.question}</p>
              <div className="grid grid-cols-1 gap-2">
                {quiz.options.map((opt, i) => {
                  const isCorrect = i === quiz.correctIndex;
                  const isSelected = quizAnswer === i;
                  let btnClass =
                    "bg-[#272a31]/40 border-[#424754] text-[#c2c6d6] hover:bg-[#272a31]/80 hover:border-[#adc6ff]";
                  if (quizAnswered) {
                    if (isCorrect) {
                      btnClass = "bg-green-950/30 border-green-500 text-green-300 font-bold";
                    } else if (isSelected) {
                      btnClass = "bg-red-950/30 border-red-500 text-red-300 font-bold";
                    } else {
                      btnClass = "opacity-40 bg-[#272a31]/10 border-[#424754]/30 text-[#c2c6d6]";
                    }
                  }
                  return (
                    <button
                      key={i}
                      disabled={quizAnswered}
                      onClick={() => {
                        setQuizAnswer(i);
                        setQuizAnswered(true);
                      }}
                      className={`p-3 border rounded-lg text-left text-xs transition-all cursor-pointer flex items-center gap-2 ${btnClass}`}
                    >
                      {quizAnswered && isCorrect && <CheckCircle2 className="w-4 h-4 text-green-400 shrink-0" />}
                      {quizAnswered && isSelected && !isCorrect && (
                        <AlertTriangle className="w-4 h-4 text-red-400 shrink-0" />
                      )}
                      <span>{opt}</span>
                    </button>
                  );
                })}
              </div>
              {quizAnswered && (
                <div
                  className={`p-3 rounded-lg border text-xs leading-relaxed ${
                    quizAnswer === quiz.correctIndex
                      ? "bg-green-950/15 border-green-500/30 text-green-300"
                      : "bg-red-950/15 border-red-500/30 text-red-300"
                  }`}
                >
                  <strong className="block text-white mb-1">
                    {quizAnswer === quiz.correctIndex
                      ? "✓ Výborně, správná diagnóza!"
                      : `✗ Chyba. Správně: ${quiz.options[quiz.correctIndex]}`}
                  </strong>
                  {quiz.explanation}
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
