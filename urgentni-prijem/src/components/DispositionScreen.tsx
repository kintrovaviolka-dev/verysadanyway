import React, { useState } from "react";
import { GameSession } from "../types";
import ReactMarkdown from "react-markdown";
import {
  FileText,
  Activity,
  Award,
  Clock,
  ShieldCheck,
  RotateCcw,
  BookOpen,
  ArrowRight,
  ShieldAlert
} from "lucide-react";

interface DispositionScreenProps {
  session: GameSession;
  onCloseCase: (details: {
    disposition: string;
    diagnosisCode: string;
    epikriza: string;
    checklist: string[];
  }) => void;
  onReset: () => void;
  closingLoading: boolean;
}

export default function DispositionScreen({
  session,
  onCloseCase,
  onReset,
  closingLoading
}: DispositionScreenProps) {
  const [selectedDisp, setSelectedDisp] = useState<string>("icu");
  const [diagCode, setDiagCode] = useState<string>("");
  const [epikriza, setEpikriza] = useState<string>("");
  const [checklist, setChecklist] = useState<string[]>([]);

  const dispositions = [
    { id: "home", label: "PROPUSTIT DOMŮ", desc: "Pacient je v pořádku k ambulantní péči." },
    { id: "ward", label: "STAND. ODDĚLENÍ", desc: "Překlad na standardní lůžko interny/chirurgie." },
    { id: "icu", label: "JIP / ARO RESUSC.", desc: "Intenzivní péče a trvalý monitoring vitálních funkcí." },
    { id: "surgery", label: "OPERAČNÍ / PCI SÁL", desc: "Urgentní invazivní výkon nebo katetrizace srdce." }
  ];

  const toggleChecklist = (item: string) => {
    if (checklist.includes(item)) {
      setChecklist(checklist.filter((i) => i !== item));
    } else {
      setChecklist([...checklist, item]);
    }
  };

  const getSafetyItems = () => {
    const caseId = session.caseId;
    
    // Cardiology (STEMI, NSTEMI, Cardiogenic shock) - Cases 1, 12, 14
    if (caseId === "1" || caseId === "12" || caseId === "14") {
      return [
        "Vytištěna zpráva a EKG křivka předána transportnímu týmu",
        "Zajištěna kontinuální monitorace vitálních funkcí a defibrilátor",
        "Duální antiagregace a antikoagulace podána a zaznamenána",
        "Zajištěn doprovod lékaře (kardiolog/anesteziolog) při transportu",
        "Cílové pracoviště (PCI sál / JIP) telefonicky informováno a připraveno"
      ];
    }
    
    // Pulmonary / Respiratory (PE, COPD) - Cases 2, 15
    if (caseId === "2" || caseId === "15") {
      return [
        "Kontrola krevního tlaku a saturace před transportem",
        "Zajištěna kontinuální kyslíková podpora",
        "Antikoagulační / bronchodilatační terapie řádně zdokumentována",
        "Monitorované lůžko na JIP/ARO rezervováno a potvrzeno",
        "Pacient poučen o nutnosti klidu na lůžku nebo správné inhalaci"
      ];
    }
    
    // Polytrauma - Case 3
    if (caseId === "3") {
      return [
        "Zafixována krční páteř (krční límec)",
        "Naložen a dotažen pánevní pás (Pelvic Binder)",
        "Erytrocytové nálevy a plazma podány ohřáté",
        "Zajištěno trvalé monitorování dýchacích cest (ETK/ventilace)",
        "Doprovod anesteziologa během celého transportu na sál/CT"
      ];
    }
    
    // Pediatrics - Cases 4, 9, 10, 11, 17
    if (caseId === "4" || caseId === "9" || caseId === "10" || caseId === "11" || caseId === "17") {
      return [
        "Dítě transportováno v klidu na klíně matky k zamezení pláče",
        "Zajištěna monitorace dechu a saturace (pulsní oximetrie)",
        "Kortikosteroidy (i.v./p.o. nebo Rectodelt čípek) podány a zapsány",
        "Zajištěn inhalační adrenalin nebo Ventolin/Atrovent v pohotovosti",
        "Pediatrická JIP/ARO informována a připravuje lůžko k převzetí"
      ];
    }
    
    // Sepsis / Infection - Case 5
    if (caseId === "5") {
      return [
        "Širokospektrá antibiotika i.v. podána v první zlaté hodině",
        "Agresivní volumoterapie krystaloidy dokončena a bilancována",
        "Kontrola laktátu a ABR před transportem na jednotku",
        "Zajištěna kontinuální monitorace oběhu a krevního tlaku",
        "Rezervováno izolační JIP lůžko s bariérovým režimem"
      ];
    }
    
    // Anaphylaxis (Adult) - Case 6
    if (caseId === "6") {
      return [
        "Adrenalin i.m. podán jako lék první volby a zapsán čas podání",
        "Zajištěny minimálně dva funkční i.v. vstupy širokou kanylou",
        "Podána i.v. antihistaminika (Dithiaden) a kortikoidy (Solu-Medrol)",
        "Pacient monitorován na lůžku minimálně 4-6 hodin pro riziko bifázické reakce",
        "Vybaven pohotovostním balíčkem s Epipenem a poučen o jeho aplikaci"
      ];
    }
    
    // Pancreatitis / Acute Abdomen - Case 7
    if (caseId === "7") {
      return [
        "Zahájena intenzivní hydratace krystaloidy s kontrolou diurézy",
        "Nastavena účinná analgetická terapie (metamizol / opiáty)",
        "Pacient ponechán striktně nalačno (nulová dieta)",
        "Zkontrolována laboratoř (amyláza, lipáza, ionty, urea)",
        "Přijetí na monitorované lůžko chirurgické JIP schváleno"
      ];
    }
    
    // Toxicology / TCA overdose - Case 8
    if (caseId === "8") {
      return [
        "Zajištěny dýchací cesty (intubace/ETK) pro ochranu před aspirací",
        "Natrium Bikarbonát 8.4% i.v. podán k alkalizaci séra",
        "Kontinuální monitorace EKG (riziko komorových arytmií / torsades)",
        "Aplikováno aktivní uhlí a proveden výplach žaludku",
        "Rezervováno lůžko na toxikologické JIP / ARO"
      ];
    }
    
    // Stroke / Neurological - Cases 13, 16
    if (caseId === "13" || caseId === "16") {
      return [
        "Nativní CT mozku dokončeno a vyloučeno intrakraniální krvácení",
        "Systémová trombolýza (Actilyse) zahájena v terapeutickém okně (je-li indikována)",
        "Krevní tlak stabilizován pod limitních 180/105 mmHg",
        "Pravidelné hodnocení neurologického stavu (NIHSS/GCS)",
        "Transport na iktovou jednotku s trvalým monitorováním"
      ];
    }
    
    // Nephrology / AKI - Case 18
    if (caseId === "18") {
      return [
        "Vysazeny nefrotoxické léky (ACE inhibitory - Ramipril, NSAID)",
        "Zahájena šetrná rehydratační terapie krystaloidy",
        "Zajištěno hodinové měření diurézy (permanentní močový katétr)",
        "Kontrola hladiny draslíku a urey STATIM z biochemie",
        "Zajištěno lůžko na standardním interním nebo nefrologickém oddělení"
      ];
    }

    // Default safety items fallback
    return [
      "Vytištěna zpráva a dokumentace předána ošetřovatelskému týmu",
      "Zajištěn bezpečný transport pacienta podle stupně závažnosti",
      "Pacient i rodina srozumitelně informováni o dalším postupu",
      "Zavedená medikace zkontrolována na lékové interakce",
      "Rezervace a schválení přijímacího lůžka na příslušném oddělení"
    ];
  };

  const handleClose = () => {
    if (!diagCode.trim()) {
      alert("Zadejte kód diagnózy MKN-10!");
      return;
    }
    if (!epikriza.trim()) {
      alert("Zapište krátkou epikrízu / shrnutí případu!");
      return;
    }
    onCloseCase({
      disposition: selectedDisp,
      diagnosisCode: diagCode,
      epikriza,
      checklist
    });
  };

  return (
    <div className="max-w-[1400px] mx-auto animate-fade-in space-y-6 pb-12">
      <div className="flex items-center justify-between border-b border-[#424754]/50 pb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#4d8eff]/10 flex items-center justify-center">
            <ShieldCheck className="w-5 h-5 text-[#adc6ff]" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white">Ukončení případu & Definitivní dispozice</h2>
            <p className="text-xs text-[#c2c6d6]">Vyplňte finální hlášení pro atestační komisi ČLS JEP.</p>
          </div>
        </div>
        {session.isCompleted && (
          <button
            onClick={onReset}
            className="px-5 py-2 bg-[#272a31] text-white rounded-lg hover:bg-[#32353c] border border-[#424754] transition-all cursor-pointer text-xs font-bold flex items-center gap-1.5 active:scale-95"
          >
            <RotateCcw className="w-4 h-4" /> NOVÝ PACIENT
          </button>
        )}
      </div>

      {!session.isCompleted ? (
        <div className="grid grid-cols-12 gap-6">
          {/* Main disposition input form */}
          <div className="col-span-12 lg:col-span-8 space-y-6">
            <div className="bg-[#1d2027] p-6 rounded-2xl border border-[#424754] space-y-6">
              <h3 className="text-sm font-bold text-[#adc6ff] uppercase tracking-wider">
                1. Rozhodnutí o dispozici pacienta
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {dispositions.map((disp) => {
                  const isSel = selectedDisp === disp.id;
                  return (
                    <button
                      key={disp.id}
                      type="button"
                      onClick={() => setSelectedDisp(disp.id)}
                      className={`p-4 rounded-xl border-2 text-left transition-all active:scale-[0.98] cursor-pointer ${
                        isSel
                          ? "bg-[#4d8eff]/10 border-[#4d8eff]"
                          : "bg-[#272a31]/30 border-[#424754]/50 hover:border-[#c2c6d6]"
                      }`}
                    >
                      <span className={`text-sm font-bold block ${isSel ? "text-[#4d8eff]" : "text-white"}`}>
                        {disp.label}
                      </span>
                      <span className="text-xs text-[#c2c6d6] mt-1 block leading-normal">
                        {disp.desc}
                      </span>
                    </button>
                  );
                })}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-[#424754]/40">
                <div className="space-y-1.5 md:col-span-1">
                  <label className="text-xs font-bold text-[#c2c6d6] uppercase tracking-wider">
                    Závěrečná diagnóza (MKN-10)
                  </label>
                  <input
                    type="text"
                    placeholder="Např. I21.1 nebo I26.9"
                    value={diagCode}
                    onChange={(e) => setDiagCode(e.target.value)}
                    className="w-full bg-[#0b0e15] border border-[#424754] rounded-lg px-3 py-2 text-sm text-white placeholder-[#c2c6d6] focus:outline-none focus:border-[#4d8eff] font-mono"
                  />
                  <p className="text-[10px] text-[#c2c6d6] italic">Zadejte přesný kód z klasifikace MKN.</p>
                </div>

                <div className="space-y-1.5 md:col-span-2">
                  <label className="text-xs font-bold text-[#c2c6d6] uppercase tracking-wider">
                    Epikríza a shrnutí péče
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Popište průběh hospitalizace, výsledky vyšetření a důvod zvolené dispozice..."
                    value={epikriza}
                    onChange={(e) => setEpikriza(e.target.value)}
                    className="w-full bg-[#0b0e15] border border-[#424754] rounded-lg px-3 py-2 text-sm text-white placeholder-[#c2c6d6] focus:outline-none focus:border-[#4d8eff]"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Checklist Panel */}
          <div className="col-span-12 lg:col-span-4 space-y-6">
            <div className="bg-[#1d2027] p-6 rounded-2xl border border-[#424754] space-y-4">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
                <ShieldCheck className="w-5 h-5 text-green-400" />
                Bezpečnostní checklist
              </h3>
              <p className="text-xs text-[#c2c6d6]">Zaškrtněte splněné bezpečnostní body před propuštěním pacienta.</p>

              <div className="space-y-3">
                {getSafetyItems().map((item) => {
                  const hasItem = checklist.includes(item);
                  return (
                    <div
                      key={item}
                      onClick={() => toggleChecklist(item)}
                      className="flex items-start gap-3 p-3 bg-[#0b0e15] hover:bg-[#272a31]/50 border border-[#424754]/40 rounded-lg cursor-pointer transition-colors"
                    >
                      <input
                        type="checkbox"
                        checked={hasItem}
                        readOnly
                        className="w-4 h-4 rounded border-[#424754] text-green-500 bg-transparent focus:ring-0 cursor-pointer mt-0.5"
                      />
                      <span className="text-xs text-[#e1e2ec] leading-relaxed">{item}</span>
                    </div>
                  );
                })}
              </div>

              <div className="pt-4 border-t border-[#424754]/50">
                <button
                  onClick={handleClose}
                  disabled={closingLoading}
                  className="w-full py-3 bg-green-600 hover:bg-green-500 disabled:opacity-50 text-white font-bold rounded-xl shadow-xl transition-all active:scale-[0.98] flex items-center justify-center gap-1.5 cursor-pointer text-sm"
                >
                  {closingLoading ? (
                    <span className="animate-pulse">EVALUACE V PRŮBĚHU...</span>
                  ) : (
                    <>
                      <FileText className="w-4 h-4" /> UZAVŘÍT PŘÍPAD A VYHODNOTIT
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* Debriefing Report View */
        <div className="bg-[#1d2027] p-8 rounded-2xl border-2 border-[#4d8eff] space-y-8 animate-fade-in">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 pb-6 border-b border-[#424754]/50">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-950/40 text-green-400 border border-green-500/20 text-xs font-bold rounded-full mb-2 uppercase tracking-wide">
                <Award className="w-3.5 h-3.5" /> Případ úspěšně uzavřen
              </div>
              <h3 className="text-3xl font-extrabold text-[#e1e2ec]">Atestační protokol</h3>
              <p className="text-sm text-[#c2c6d6]">
                Vyhodnocení klinické komise ČLS JEP pro případ: <span className="font-semibold text-white">{session.patient.name}</span>
              </p>
            </div>

            <div className="bg-[#0b0e15] p-4 rounded-xl border border-[#424754] text-center w-full md:w-48">
              <span className="text-[10px] font-bold text-[#c2c6d6] uppercase tracking-widest block mb-1">
                Celkový výsledek
              </span>
              <span className="text-4xl font-black text-[#4d8eff] font-mono">
                {(() => {
                  if (!session.debriefing) return "SCHVÁLENO";
                  const match = session.debriefing.match(/hodnocení\s*:?\s*(\*+)?\s*([0-9]+\s*%)/i);
                  if (match && match[2]) {
                    return match[2].trim();
                  }
                  const parts = session.debriefing.split(/hodnocení:/i);
                  if (parts.length > 1) {
                    return parts[1].trim().split("\n")[0].replace(/[\*#_]/g, "").trim();
                  }
                  return "SCHVÁLENO";
                })()}
              </span>
            </div>
          </div>

          {/* Debriefing report content (Markdown structured representation) */}
          <div className="text-sm text-[#e1e2ec] leading-relaxed space-y-4">
            <ReactMarkdown
              components={{
                h1: ({ children }) => <h1 className="text-2xl font-black text-white mt-6 mb-4">{children}</h1>,
                h2: ({ children }) => <h2 className="text-xl font-extrabold text-[#adc6ff] mt-6 mb-3 border-b border-[#424754]/30 pb-2">{children}</h2>,
                h3: ({ children }) => <h3 className="text-lg font-bold text-[#adc6ff] mt-5 mb-2">{children}</h3>,
                h4: ({ children }) => <h4 className="text-md font-bold text-white mt-4 mb-2">{children}</h4>,
                p: ({ children }) => <p className="text-sm text-[#c2c6d6] leading-relaxed mb-4">{children}</p>,
                strong: ({ children }) => <strong className="font-bold text-white">{children}</strong>,
                em: ({ children }) => <em className="italic text-[#adc6ff]">{children}</em>,
                ul: ({ children }) => <ul className="list-disc list-outside space-y-2 pl-5 mb-4 text-[#c2c6d6]">{children}</ul>,
                ol: ({ children }) => <ol className="list-decimal list-outside space-y-2 pl-5 mb-4 text-[#c2c6d6]">{children}</ol>,
                li: ({ children }) => <li className="text-sm text-[#c2c6d6] leading-relaxed">{children}</li>,
              }}
            >
              {session.debriefing || ""}
            </ReactMarkdown>
          </div>

          <div className="pt-6 border-t border-[#424754]/50 flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-xs text-[#c2c6d6]">
              <Clock className="w-4 h-4 text-[#adc6ff]" />
              <span>Celkový strávený čas na lůžku: <strong className="font-bold text-white">{session.elapsedTime} minut</strong></span>
            </div>

            <button
              onClick={onReset}
              className="w-full sm:w-auto px-8 py-3 bg-[#4d8eff] hover:bg-[#adc6ff] text-white font-bold rounded-lg shadow-xl active:scale-95 transition-all cursor-pointer text-xs flex items-center gap-2 justify-center"
            >
              <RotateCcw className="w-4 h-4" /> VYBRAT JINÝ SCÉNÁŘ / RESET
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
