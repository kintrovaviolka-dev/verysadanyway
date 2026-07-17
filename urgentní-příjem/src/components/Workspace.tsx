import React, { useState, useRef, useEffect } from "react";
import { GameSession, ChatMessage } from "../types";
import EkgVisualization from "./EkgVisualization";
import BedsideMonitor from "./BedsideMonitor";
import EkgQuiz, { RHYTHMS, getCaseRhythm } from "./EkgQuiz";
import {
  Heart,
  Activity,
  ShieldAlert,
  Send,
  MessageSquare,
  ClipboardList,
  FlaskConical,
  Tv,
  Stethoscope,
  Plus,
  Trash2,
  Users,
  Clock
} from "lucide-react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip as RechartsTooltip,
  Legend
} from "recharts";

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#191b23] border border-[#424754] p-3 rounded-lg shadow-xl text-xs space-y-1">
        <p className="font-bold text-[#adc6ff] mb-1 font-mono">Čas: {label} min</p>
        {payload.map((entry: any) => (
          <div key={entry.name} className="flex justify-between items-center gap-4">
            <span style={{ color: entry.stroke }} className="font-semibold">{entry.name}:</span>
            <span className="font-mono font-bold text-white">{entry.value}</span>
          </div>
        ))}
      </div>
    );
  }
  return null;
};

interface WorkspaceProps {
  session: GameSession;
  onAction: (actionData: any) => void;
  onConsult: (specialty: string, message: string) => void;
  onAdvanceToDisposition: () => void;
  consultingLoading: boolean;
}

export default function Workspace({
  session,
  onAction,
  onConsult,
  onAdvanceToDisposition,
  consultingLoading
}: WorkspaceProps) {
  const chartData = session.vitalsHistory && session.vitalsHistory.length > 0
    ? session.vitalsHistory
    : [
        {
          time: 0,
          tf: session.vitals.tf,
          tk_sys: session.vitals.tk_sys,
          tk_dia: session.vitals.tk_dia,
          spo2: session.vitals.spo2,
          rr: session.vitals.rr
        }
      ];

  const [activeHistoryTab, setActiveHistoryTab] = useState<"OSOBNÍ" | "NYNĚJŠÍ" | "FYZIKÁLNÍ">("OSOBNÍ");
  const [activeRightTab, setActiveRightTab] = useState<"labs" | "imaging" | "therapies">("labs");
  const [activeConsultant, setActiveConsultant] = useState<string>("Kardiolog");
  const [chatMessage, setChatMessage] = useState<string>("");
  const [showConsultantModal, setShowConsultantModal] = useState<boolean>(false);
  const [showEkgQuizModal, setShowEkgQuizModal] = useState<boolean>(false);

  // Medication form state
  const [medName, setMedName] = useState<string>("");
  const [medDose, setMedDose] = useState<string>("");
  const [medRoute, setMedRoute] = useState<string>("i.v.");

  // Infusion input
  const [infusionText, setInfusionText] = useState<string>("");

  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [session.chatHistory, activeConsultant, showConsultantModal]);

  const handleSendChat = () => {
    if (!chatMessage.trim()) return;
    onConsult(activeConsultant, chatMessage);
    setChatMessage("");
  };

  const handleAddMed = () => {
    if (!medName || !medDose) {
      alert("Zadejte název léku a dávkování.");
      return;
    }
    onAction({
      actionId: "add_medication",
      details: { name: medName, dose: medDose, route: medRoute }
    });
    setMedName("");
    setMedDose("");
  };

  const handleAddInfusion = () => {
    if (!infusionText) return;
    onAction({
      actionId: "infusion_setup",
      details: { value: infusionText }
    });
    setInfusionText("");
  };

  const toggleLabCheckbox = (labId: string) => {
    onAction({
      actionId: "order_labs",
      details: { labs: [labId] }
    });
  };

  const getTriageColor = (triageClass: string) => {
    switch (triageClass) {
      case "1": return "bg-red-600 text-white";
      case "2": return "bg-orange-500 text-white";
      case "3": return "bg-yellow-500 text-black";
      case "4": return "bg-green-600 text-white";
      default: return "bg-blue-500 text-white";
    }
  };

  const getTriageName = (triageClass: string) => {
    switch (triageClass) {
      case "1": return "1 - Resuscitace";
      case "2": return "2 - Kritický";
      case "3": return "3 - Naléhavý";
      case "4": return "4 - Standardní";
      default: return "5 - Nenaléhavý";
    }
  };

  const availableConsultants = ["Kardiolog", "Chirurg", "Neurolog", "ARO"];

  return (
    <div className="grid grid-cols-12 gap-6 max-w-[1600px] mx-auto h-[calc(100vh-140px)] animate-fade-in overflow-hidden">
      {/* 1. Left Sidebar: Vitals & Patient timeline */}
      <aside className="col-span-12 lg:col-span-3 bg-[#1d2027] border border-[#424754] rounded-2xl flex flex-col overflow-hidden h-full">
        {/* Bedside Vitals Monitor HUD */}
        <div 
          onClick={() => setShowEkgQuizModal(true)}
          className="p-3 border-b border-[#424754] shrink-0 cursor-pointer hover:brightness-110 transition-all"
          title="Klikněte pro klinickou interpretaci EKG rytmu"
        >
          <BedsideMonitor session={session} />
        </div>

        {/* Timeline Log */}
        <div className="flex-1 p-4 overflow-y-auto custom-scrollbar flex flex-col space-y-4">
          <span className="text-xs font-bold text-[#c2c6d6] uppercase tracking-wider">Dekurs a Časová osa</span>
          <div className="relative pl-4 space-y-4 before:absolute before:left-[5px] before:top-2 before:bottom-0 before:w-0.5 before:bg-[#424754]">
            {session.actionLog.map((log, idx) => (
              <div key={idx} className="relative text-xs space-y-1">
                <span className="absolute -left-[15px] top-1 w-2.5 h-2.5 rounded-full bg-[#4d8eff] border-2 border-[#1d2027]" />
                <div className="flex justify-between text-[10px] text-[#c2c6d6] font-mono">
                  <span>{log.time}</span>
                  <span className="capitalize">{log.source}</span>
                </div>
                <p className={`leading-relaxed ${log.source === "result" ? "text-[#adc6ff]" : log.source === "user" ? "text-white font-medium" : "text-[#c2c6d6]"}`}>
                  {log.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Trauma activation */}
        {session.level === 3 && (
          <div className="p-4 bg-[#0b0e15] border-t border-[#424754] shrink-0">
            <button
              onClick={() => onAction({ actionId: "activate_trauma" })}
              disabled={session.traumaTeamActivated}
              className={`w-full py-2.5 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 transition-all ${
                session.traumaTeamActivated
                  ? "bg-red-950/20 text-red-400 border border-red-500/20"
                  : "bg-red-600 hover:bg-red-700 text-white cursor-pointer"
              }`}
            >
              <ShieldAlert className="w-4 h-4" />
              {session.traumaTeamActivated ? "TRAUMA TÝM AKTIVNÍ" : "AKTIVUJE TRAUMA TÝM"}
            </button>
          </div>
        )}
      </aside>

      {/* 2. Central Section: Anamneza, chat, and action box */}
      <section className="col-span-12 lg:col-span-6 bg-[#1d2027] border border-[#424754] rounded-2xl flex flex-col overflow-hidden h-full">
        {/* Patient header info */}
        <div className="p-4 bg-[#191b23] border-b border-[#424754] flex justify-between items-center shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded bg-[#4d8eff]/10 flex items-center justify-center">
              <Stethoscope className="w-4 h-4 text-[#adc6ff]" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white">{session.patient.name} ({session.patient.age} let)</h3>
              <p className="text-[10px] text-[#c2c6d6] uppercase tracking-wider font-mono">
                ID: 290384/1234 • KREV: B Rh-
              </p>
            </div>
          </div>

          <div className="flex gap-1.5 text-[10px] font-bold">
            {session.patient.allergies.map(alg => (
              <span key={alg} className="px-2 py-0.5 bg-red-950/40 border border-red-500/20 text-red-300 rounded">
                ALERGIE: {alg}
              </span>
            ))}
            <span className={`px-2 py-0.5 rounded ${getTriageColor(session.selectedTriageClass || session.patient.triageClass)}`}>
              TRIÁŽ: {getTriageName(session.selectedTriageClass || session.patient.triageClass)}
            </span>
          </div>
        </div>

        {/* Central Workspace area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar">
          {/* Anamnéza Panel */}
          <div className="bg-[#191b23] rounded-xl border border-[#424754]/50 overflow-hidden shrink-0">
            <div className="flex border-b border-[#424754] bg-[#272a31]/50 px-3 py-1.5 gap-3">
              {(["OSOBNÍ", "NYNĚJŠÍ", "FYZIKÁLNÍ"] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveHistoryTab(tab)}
                  className={`text-xs font-bold px-2.5 py-1 rounded transition-colors cursor-pointer ${
                    activeHistoryTab === tab ? "text-[#adc6ff] bg-[#4d8eff]/10" : "text-[#c2c6d6] hover:text-white"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="p-4 text-xs text-[#c2c6d6] space-y-2 leading-relaxed h-32 overflow-y-auto custom-scrollbar">
              {activeHistoryTab === "OSOBNÍ" && (
                <div>
                  <p className="font-semibold text-white mb-1">Rodinná a osobní anamnéza:</p>
                  <ul className="list-disc list-inside space-y-1">
                    {session.patient.history.map(h => <li key={h}>{h}</li>)}
                    <li>Alergie: {session.patient.allergies.join(", ") || "žádné"}</li>
                  </ul>
                </div>
              )}
              {activeHistoryTab === "NYNĚJŠÍ" && (
                <div>
                  <p className="font-semibold text-white mb-1">Nynější onemocnění (Anamnesis morbi):</p>
                  <p>{session.patient.complaintDetail}</p>
                </div>
              )}
              {activeHistoryTab === "FYZIKÁLNÍ" && (
                <div>
                  <p className="font-semibold text-white mb-1">Fyzikální nález při příjmu:</p>
                  {session.caseId === "1" ? (
                    <p>Orientovaný, spolupracující, dušný, poslechově plíce bez chropotů, dýchání čisté oboustranně. Srdce: akce pravidelná, ozvy ohraničené, šelesty neměřeny. Břicho měkké, nebolestivé, bez peritoneálního dráždění.</p>
                  ) : session.caseId === "2" ? (
                    <p>Lehce somnolentní po kolapsu, bledý, zpocený. Dýchání tachypnoické, plíce čisté, bez poslechového nálezu. Srdce: tachykardie pravidelná. Dolní končetiny: patrné varixy, pravý bérec po sádře bez zjevného prosáknutí či hlubokého zánětu, mírná citlivost lýtka.</p>
                  ) : (
                    <p>Somnolentní, zmatený, zaveden krční límec. Asymetrie hrudníku, dýchání vpravo výrazně oslabené, podkožní emfyzém. Deformita a palpační nestabilita pánve, bolestivá reakce na stlačení. Krvácející tržné rány na pravém stehně, pulsace na periferii hmatné ale slabé.</p>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Sledování vitálních funkcí v čase */}
          <div className="bg-[#191b23] p-4 rounded-xl border border-[#424754]/50 space-y-3">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Activity className="w-4 h-4 text-[#4d8eff]" />
                <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                  Křivka vitálních funkcí v čase
                </h4>
              </div>
              <span className="text-[10px] text-[#adc6ff] font-medium bg-[#4d8eff]/10 px-2 py-0.5 rounded">
                Odezva na léčbu
              </span>
            </div>
            
            <div className="h-56 w-full text-xs">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <CartesianGrid stroke="#424754" strokeDasharray="3 3" opacity={0.25} />
                  <XAxis 
                    dataKey="time" 
                    stroke="#8a8f98" 
                    fontSize={10} 
                    tickLine={false} 
                    label={{ value: 'Čas (min)', position: 'insideBottomRight', offset: -5, fill: '#8a8f98', fontSize: 9 }}
                  />
                  <YAxis 
                    stroke="#8a8f98" 
                    fontSize={10} 
                    tickLine={false} 
                    domain={[0, 'auto']} 
                  />
                  <RechartsTooltip content={<CustomTooltip />} />
                  <Legend 
                    verticalAlign="top" 
                    height={36} 
                    iconSize={10} 
                    iconType="circle"
                    wrapperStyle={{ fontSize: 10, color: '#e1e2ec' }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="tf" 
                    name="Tep (TF)" 
                    stroke="#f87171" 
                    strokeWidth={2.5} 
                    dot={{ r: 3 }} 
                    activeDot={{ r: 5 }} 
                  />
                  <Line 
                    type="monotone" 
                    dataKey="tk_sys" 
                    name="TK Systolický" 
                    stroke="#34d399" 
                    strokeWidth={2.5} 
                    dot={{ r: 3 }} 
                    activeDot={{ r: 5 }} 
                  />
                  <Line 
                    type="monotone" 
                    dataKey="spo2" 
                    name="Saturace (SpO2)" 
                    stroke="#38bdf8" 
                    strokeWidth={2.5} 
                    dot={{ r: 3 }} 
                    activeDot={{ r: 5 }} 
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <p className="text-[10px] text-[#c2c6d6] italic text-center leading-normal">
              Graf ukazuje vývoj parametrů pacienta od příjmu (0. minuta) v závislosti na podané medikaci, kyslíku či infuzích.
            </p>
          </div>

          {/* EKG Visualization for cardiac cases or when ready */}
          {(() => {
            const isEkgReady = session.imagingReady.includes("ekg");
            const isCardiacCase = ["1", "2", "8"].includes(session.caseId);
            
            if (isEkgReady) {
              return (
                <div className="space-y-3">
                  <EkgVisualization session={session} />
                  
                  {/* Rhythm Interpretation Banner */}
                  <div 
                    onClick={() => setShowEkgQuizModal(true)}
                    className={`p-3 border rounded-xl text-xs flex items-center justify-between cursor-pointer transition-all active:scale-[0.99] select-none ${
                      session.rhythmInterpreted 
                        ? "bg-green-950/20 border-green-500/35 text-green-400 hover:bg-green-950/30" 
                        : "bg-red-950/20 border-red-500/35 text-red-400 hover:bg-red-950/30 animate-pulse"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-base">{session.rhythmInterpreted ? "🔓" : "🔒"}</span>
                      <div>
                        <p className="font-extrabold text-white uppercase tracking-wider text-[9px] leading-tight">
                          {session.rhythmInterpreted ? "EKG Rytmus Interpretován" : "EKG Rytmus Neinterpretován!"}
                        </p>
                        <p className="text-[10px] text-[#c2c6d6] leading-snug">
                          {session.rhythmInterpreted 
                            ? `Pacient má rytmus: ${RHYTHMS[getCaseRhythm(session.caseId)]?.name || "Sinusový"}. Intervence odblokovány.` 
                            : "Klikněte zde pro klinické zhodnocení rytmu k odblokování terapie."}
                        </p>
                      </div>
                    </div>
                    <span className="text-[9px] font-bold text-[#4d8eff] underline uppercase tracking-wider shrink-0 ml-2">
                      {session.rhythmInterpreted ? "Zobrazit" : "Hodnotit"}
                    </span>
                  </div>
                </div>
              );
            } else if (isCardiacCase) {
              return (
                <div className="bg-amber-950/15 border border-amber-500/30 p-4 rounded-xl flex items-start gap-3.5 text-amber-200 animate-fade-in">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center shrink-0">
                    <Activity className="w-4.5 h-4.5 text-amber-400 animate-pulse" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                      Doporučeno natočit 12svodové EKG
                    </h4>
                    <p className="text-[11px] text-[#c2c6d6] leading-relaxed">
                      Pacient vykazuje kardiální symptomatologii (bolest na hrudi, dušnost, arytmie či intoxikace TCA). Pro přesné zhodnocení srdečního rytmu a stanovení diagnózy objednejte <strong>12svodové EKG</strong> na záložce <strong>Zobrazovací</strong> v pravém panelu nebo napište klinický příkaz (např. <em>"natočit EKG"</em>).
                    </p>
                  </div>
                </div>
              );
            }
            return null;
          })()}

          {/* Interactive Free-Text Action Input */}
          <div className="bg-[#191b23] p-4 rounded-xl border border-[#424754]/50 space-y-2">
            <h4 className="text-xs font-bold text-[#c2c6d6] uppercase tracking-wider">
              Klinický příkaz (Čeština)
            </h4>
            <p className="text-[11px] text-[#c2c6d6] italic">
              Zadejte volným textem, co chcete udělat (např. "Podám Anopyrin 400mg p.o." nebo "Odebírám krev na KO, biochemie a koagulaci").
            </p>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Napište klinický příkaz..."
                id="freeTextActionInput"
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    const val = e.currentTarget.value;
                    if (val.trim()) {
                      onAction({ actionText: val });
                      e.currentTarget.value = "";
                    }
                  }
                }}
                className="flex-1 bg-[#1d2027] border border-[#424754] rounded-lg px-3 py-2 text-xs text-white placeholder-[#c2c6d6] focus:outline-none focus:border-[#4d8eff]"
              />
              <button
                onClick={() => {
                  const el = document.getElementById("freeTextActionInput") as HTMLInputElement;
                  if (el && el.value.trim()) {
                    onAction({ actionText: el.value });
                    el.value = "";
                  }
                }}
                className="px-4 py-2 bg-[#4d8eff] text-white font-bold rounded-lg hover:bg-[#adc6ff] transition-colors active:scale-95 cursor-pointer text-xs"
              >
                PROVÉST
              </button>
            </div>
          </div>

          {/* Consultation Launcher Buttons */}
          <div className="bg-[#191b23] p-4 rounded-xl border border-[#424754]/50 space-y-2 shrink-0">
            <h4 className="text-xs font-bold text-[#c2c6d6] flex items-center gap-1.5 uppercase tracking-wider">
              <Users className="w-4 h-4 text-[#adc6ff]" /> Konziliární vyšetření (Konzilium)
            </h4>
            <div className="grid grid-cols-4 gap-2">
              {availableConsultants.map(specialty => {
                const count = session.chatHistory[specialty]?.length || 0;
                return (
                  <button
                    key={specialty}
                    onClick={() => {
                      setActiveConsultant(specialty);
                      setShowConsultantModal(true);
                    }}
                    className={`p-2.5 rounded-lg border text-center transition-all cursor-pointer active:scale-95 flex flex-col items-center gap-1 ${
                      activeConsultant === specialty
                        ? "bg-[#4d8eff]/10 border-[#4d8eff] text-[#adc6ff]"
                        : "bg-[#272a31]/40 border-[#424754] text-[#c2c6d6] hover:border-[#c2c6d6]"
                    }`}
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span className="text-[11px] font-bold">{specialty}</span>
                    {count > 0 && (
                      <span className="text-[9px] px-1.5 py-0.5 bg-[#4d8eff] text-white rounded-full font-bold">
                        {count}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar inside central layout */}
        <div className="p-4 bg-[#191b23] border-t border-[#424754] flex justify-between items-center shrink-0">
          <div className="flex items-center gap-2 text-xs text-[#c2c6d6]">
            <Clock className="w-4 h-4 text-[#adc6ff]" />
            <span>Čas na lůžku: **{session.elapsedTime} minut**</span>
          </div>

          <button
            onClick={onAdvanceToDisposition}
            className="px-6 py-2.5 bg-gradient-to-r from-[#4d8eff] to-[#adc6ff] hover:brightness-110 text-white font-bold rounded-lg shadow-lg active:scale-95 transition-all text-xs flex items-center gap-1.5 cursor-pointer"
          >
            <ClipboardList className="w-4 h-4" /> DISPOZICE A UKONČENÍ
          </button>
        </div>
      </section>

      {/* 3. Right Action Panel: Lab, Imaging, Therapies Tabs */}
      <aside className="col-span-12 lg:col-span-3 bg-[#1d2027] border border-[#424754] rounded-2xl flex flex-col overflow-hidden h-full">
        {/* Navigation Tabs */}
        <div className="flex border-b border-[#424754] bg-[#191b23] shrink-0">
          <button
            onClick={() => setActiveRightTab("labs")}
            className={`flex-1 py-3 text-[10px] font-bold uppercase tracking-wider flex flex-col items-center gap-1 transition-colors cursor-pointer ${
              activeRightTab === "labs" ? "border-b-2 border-[#adc6ff] text-[#adc6ff]" : "text-[#c2c6d6] hover:text-white"
            }`}
          >
            <FlaskConical className="w-4 h-4" /> Laboratoř
          </button>
          <button
            onClick={() => setActiveRightTab("imaging")}
            className={`flex-1 py-3 text-[10px] font-bold uppercase tracking-wider flex flex-col items-center gap-1 transition-colors cursor-pointer ${
              activeRightTab === "imaging" ? "border-b-2 border-[#adc6ff] text-[#adc6ff]" : "text-[#c2c6d6] hover:text-white"
            }`}
          >
            <Tv className="w-4 h-4" /> Zobrazovací
          </button>
          <button
            onClick={() => setActiveRightTab("therapies")}
            className={`flex-1 py-3 text-[10px] font-bold uppercase tracking-wider flex flex-col items-center gap-1 transition-colors cursor-pointer ${
              activeRightTab === "therapies" ? "border-b-2 border-[#adc6ff] text-[#adc6ff]" : "text-[#c2c6d6] hover:text-white"
            }`}
          >
            <Heart className="w-4 h-4" /> Terapie
          </button>
        </div>

        {/* Dynamic content scroll area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar">
          {/* A. Laboratoř Tab */}
          {activeRightTab === "labs" && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold text-[#c2c6d6] uppercase tracking-wider">Žádanka: STATIM</span>
                <span className="px-2 py-0.5 bg-red-950 text-red-400 text-[10px] rounded font-bold border border-red-500/10">URGENTNÍ</span>
              </div>

              <div className="space-y-2">
                {[
                  { id: "ko", label: "Krevní obraz (KO)", detail: "Leukocyty, Hb, Trombocyty" },
                  { id: "biochem", label: "Biochemie (panel STATIM)", detail: "Troponin, Urea, Kreatinin, Ionty, CRP" },
                  { id: "coag", label: "Koagulace (Quick, INR, APTT)", detail: "Srážlivost krve" },
                  { id: "mochem", label: "Moč chemicky + sediment", detail: "Metabolity, hematurie" },
                  { id: "abr", label: "Astrup / Metabolity (ABR)", detail: "pH, pO2, pCO2, Laktát" }
                ].map((lab) => {
                  const isOrdered = session.labsOrdered.includes(lab.id);
                  const isReady = session.labsReady.includes(lab.id);
                  return (
                    <div
                      key={lab.id}
                      onClick={() => !isOrdered && toggleLabCheckbox(lab.id)}
                      className={`flex flex-col p-3 rounded-lg border transition-all cursor-pointer ${
                        isReady
                          ? "bg-green-950/10 border-green-500/20"
                          : isOrdered
                          ? "bg-orange-950/10 border-orange-500/20"
                          : "bg-[#0b0e15] border-[#424754] hover:bg-[#272a31]/50"
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          checked={isOrdered}
                          readOnly
                          className="w-3.5 h-3.5 rounded border-[#424754] text-[#4d8eff] bg-transparent focus:ring-0 cursor-pointer"
                        />
                        <span className="text-xs font-semibold text-white">{lab.label}</span>
                      </div>
                      <div className="flex justify-between items-center mt-1 pl-5.5">
                        <span className="text-[10px] text-[#c2c6d6]">{lab.detail}</span>
                        <span className="text-[9px] font-bold font-mono">
                          {isReady ? (
                            <span className="text-green-400">HOTOVO</span>
                          ) : isOrdered ? (
                            <span className="text-orange-400 animate-pulse">ZPRACOVÁVÁ SE...</span>
                          ) : (
                            <span className="text-[#c2c6d6]">NEOBJEDNÁNO</span>
                          )}
                        </span>
                      </div>

                      {/* Display labs result details if ready */}
                      {isReady && (
                        <div className="mt-2 pt-2 border-t border-green-500/10 text-[11px] text-green-300 font-mono bg-green-950/20 p-1.5 rounded">
                          {session.labsResultsReceived?.[lab.id] || "Výsledky se načítají..."}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* B. Zobrazovací metody Tab */}
          {activeRightTab === "imaging" && (
            <div className="space-y-4">
              <span className="text-[10px] font-bold text-[#c2c6d6] uppercase tracking-wider block">Urgentní diagnostika</span>
              <div className="space-y-3">
                {[
                  { id: "ekg", label: "12svodové EKG", desc: "Základní křivka srdce" },
                  { id: "rtg", label: "RTG Hrudníku / Srdce", desc: "Snímek plic a mediastina" },
                  { id: "echo", label: "Bedside Echokardiografie", desc: "Ultrazvuk srdce u lůžka" },
                  { id: "ct", label: "CT Angiografie / Pan-scan", desc: "Výpočetní tomografie" }
                ].map((img) => {
                  const isOrdered = session.imagingOrdered.includes(img.id);
                  const isReady = session.imagingReady.includes(img.id);
                  return (
                    <div key={img.id} className="p-3 bg-[#0b0e15] border border-[#424754] rounded-lg space-y-2.5">
                      <div className="flex justify-between items-start">
                        <div>
                          <h5 className="text-xs font-bold text-white">{img.label}</h5>
                          <p className="text-[10px] text-[#c2c6d6]">{img.desc}</p>
                        </div>
                        <span className="text-[9px] font-bold uppercase">
                          {isReady ? (
                            <span className="text-green-400">HOTOVO</span>
                          ) : isOrdered ? (
                            <span className="text-orange-400 animate-pulse">NA CESTĚ...</span>
                          ) : (
                            <span className="text-[#c2c6d6]">NEOBJEDNÁNO</span>
                          )}
                        </span>
                      </div>

                      <div className="flex gap-2">
                        {!isOrdered ? (
                          <button
                            onClick={() => onAction({ actionId: "order_imaging", details: { method: img.id } })}
                            className="flex-1 py-1 bg-[#32353c] hover:bg-[#4d8eff] hover:text-white transition-colors rounded text-[10px] font-bold text-white cursor-pointer"
                          >
                            OBJEDNAT
                          </button>
                        ) : isReady ? (
                          <div className="w-full space-y-2">
                            <div className="bg-[#191b23] p-2 rounded border border-green-500/20 text-[11px] text-green-300 font-mono">
                              {session.imagingResultsReceived?.[img.id] || "Výsledky se načítají..."}
                            </div>
                            {img.id === "ekg" && (
                              <div className="text-[10px] text-[#adc6ff] bg-[#4d8eff]/10 px-2 py-1.5 rounded border border-[#4d8eff]/20 font-bold flex items-center justify-between mt-1 animate-pulse">
                                <span>📈 INTERAKTIVNÍ KŘIVKA AKTIVNÍ</span>
                                <span className="text-[9px] underline uppercase">V centru</span>
                              </div>
                            )}
                          </div>
                        ) : (
                          <button
                            disabled
                            className="flex-1 py-1 bg-[#191b23] text-[#c2c6d6] rounded text-[10px] font-bold opacity-50"
                          >
                            ČEKÁNÍ...
                          </button>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* C. Terapie a Výkon Tab */}
          {activeRightTab === "therapies" && (
            <div className="space-y-4">
              <span className="text-[10px] font-bold text-[#c2c6d6] uppercase tracking-wider block">Terapie a stabilizace</span>

              {/* Airway management */}
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold text-[#c2c6d6] uppercase">Zajištění dýchacích cest</label>
                <select
                  value={session.therapies.oxygen}
                  onChange={(e) => onAction({ actionId: "oxygen_setup", details: { value: e.target.value } })}
                  className="w-full bg-[#0b0e15] border border-[#424754] rounded-lg px-2.5 py-2 text-xs text-white focus:outline-none focus:border-[#4d8eff]"
                >
                  <option value="Žádné zajištění">Žádné zajištění</option>
                  <option value="O2 Brýle 2L/min">O2 Brýle 2L/min</option>
                  <option value="O2 Brýle 4L/min">O2 Brýle 4L/min</option>
                  <option value="O2 Maska 10L/min">O2 Maska 10L/min</option>
                  <option value="Laryngeální maska">Laryngeální maska</option>
                  <option value="Intubace (ETK + řízená ventilace)">Intubace (ETK + ventilace)</option>
                </select>
              </div>

              {/* IV access */}
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold text-[#c2c6d6] uppercase">Žilní přístup</label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    disabled={session.therapies.ivAccess !== "Nezaveden"}
                    placeholder="Např. Pravá antekubita G18"
                    value={session.therapies.ivAccess}
                    onChange={(e) => onAction({ actionId: "iv_setup", details: { value: e.target.value } })}
                    className="flex-1 bg-[#0b0e15] border border-[#424754] rounded-lg px-2.5 py-1.5 text-xs text-white placeholder-[#c2c6d6] focus:outline-none focus:border-[#4d8eff]"
                  />
                  {session.therapies.ivAccess === "Nezaveden" && (
                    <button
                      onClick={() => onAction({ actionId: "iv_setup", details: { value: "Pravá antekubita G18" } })}
                      className="px-2.5 bg-[#4d8eff] hover:bg-[#adc6ff] text-white rounded font-bold text-xs cursor-pointer"
                    >
                      Zavést
                    </button>
                  )}
                </div>
              </div>

              {/* Fluid therapy */}
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold text-[#c2c6d6] uppercase">Infuze / Tekutiny</label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Např. Plasmalyte 500ml 150ml/h"
                    value={infusionText}
                    onChange={(e) => setInfusionText(e.target.value)}
                    className="flex-1 bg-[#0b0e15] border border-[#424754] rounded-lg px-2.5 py-1.5 text-xs text-white placeholder-[#c2c6d6] focus:outline-none focus:border-[#4d8eff]"
                  />
                  <button
                    onClick={handleAddInfusion}
                    className="px-2.5 bg-[#4d8eff] hover:bg-[#adc6ff] text-white rounded font-bold text-xs cursor-pointer"
                  >
                    Podat
                  </button>
                </div>
                {session.therapies.infusion && (
                  <div className="text-xs bg-[#0b0e15] p-2 rounded border border-[#424754]/30 text-[#adc6ff] font-mono">
                    Aktivní infuze: {session.therapies.infusion}
                  </div>
                )}
              </div>

              {/* Farmakoterapie */}
              <div className="space-y-2 pt-2 border-t border-[#424754]/50">
                <label className="text-[10px] font-bold text-[#c2c6d6] uppercase block">Farmakoterapie</label>
                <div className="bg-[#0b0e15] border border-[#424754] rounded-lg p-3 space-y-3">
                  <div className="grid grid-cols-2 gap-2">
                    <input
                      type="text"
                      placeholder="Lék"
                      value={medName}
                      onChange={(e) => setMedName(e.target.value)}
                      className="bg-transparent border-b border-[#424754] py-1 text-xs text-white outline-none focus:border-[#4d8eff]"
                    />
                    <input
                      type="text"
                      placeholder="Dávka"
                      value={medDose}
                      onChange={(e) => setMedDose(e.target.value)}
                      className="bg-transparent border-b border-[#424754] py-1 text-xs text-white outline-none focus:border-[#4d8eff]"
                    />
                  </div>

                  <div className="flex justify-between items-center gap-2">
                    <div className="flex gap-1.5">
                      {["i.v.", "i.m.", "p.o.", "s.c."].map((route) => (
                        <button
                          key={route}
                          onClick={() => setMedRoute(route)}
                          className={`px-1.5 py-0.5 rounded text-[10px] font-bold cursor-pointer ${
                            medRoute === route ? "bg-[#4d8eff] text-white" : "bg-[#272a31] text-[#c2c6d6] hover:text-white"
                          }`}
                        >
                          {route}
                        </button>
                      ))}
                    </div>

                    <button
                      onClick={handleAddMed}
                      className="text-[#4d8eff] hover:text-[#adc6ff] text-xs font-bold flex items-center gap-0.5 cursor-pointer"
                    >
                      <Plus className="w-4 h-4" /> PŘIDAT
                    </button>
                  </div>
                </div>

                {/* List of active/administered meds */}
                {session.therapies.meds.length > 0 && (
                  <div className="bg-[#0b0e15] border border-[#424754]/30 rounded-lg p-2.5 space-y-1.5 max-h-32 overflow-y-auto custom-scrollbar">
                    <span className="text-[9px] font-bold text-[#c2c6d6] uppercase block">Podané léky:</span>
                    {session.therapies.meds.map((med, idx) => (
                      <div key={idx} className="flex justify-between text-xs text-[#adc6ff] font-mono border-b border-[#424754]/20 pb-1">
                        <span>{med.name} {med.dose}</span>
                        <span className="uppercase text-[10px]">{med.route}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </aside>

      {/* 4. Consultation Chat Modal Overlaid inside Workspace */}
      {showConsultantModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/60 backdrop-blur-sm">
          <div className="bg-[#1d2027] w-full max-w-4xl h-[600px] rounded-2xl border border-[#424754] shadow-2xl flex flex-col overflow-hidden animate-zoom-in">
            {/* Modal Header */}
            <div className="p-4 bg-[#191b23] border-b border-[#424754] flex justify-between items-center shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#4d8eff]/10 flex items-center justify-center">
                  <MessageSquare className="w-5 h-5 text-[#adc6ff]" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-lg">Konziliární vyšetření</h3>
                  <p className="text-xs text-[#c2c6d6]">
                    Konzultant pro pacienta: {session.patient.name}
                  </p>
                </div>
              </div>

              <button
                onClick={() => setShowConsultantModal(false)}
                className="w-8 h-8 rounded-full hover:bg-[#32353c] flex items-center justify-center text-[#c2c6d6] hover:text-white cursor-pointer"
              >
                ✕
              </button>
            </div>

            {/* Modal Split Content */}
            <div className="flex flex-1 overflow-hidden">
              {/* Specialty Selector Sidebar inside Modal */}
              <div className="w-1/3 border-r border-[#424754] flex flex-col bg-[#191b23]">
                <div className="p-4">
                  <span className="text-[10px] font-bold text-[#adc6ff] uppercase tracking-wider block mb-3">
                    Dostupné odbornosti
                  </span>

                  <div className="space-y-1.5">
                    {availableConsultants.map((specialty) => {
                      const isActive = activeConsultant === specialty;
                      const hasMessages = session.chatHistory[specialty]?.length > 0;
                      return (
                        <button
                          key={specialty}
                          onClick={() => setActiveConsultant(specialty)}
                          className={`w-full flex items-center justify-between p-3 rounded-lg text-left transition-all active:scale-[0.98] cursor-pointer ${
                            isActive
                              ? "bg-[#4d8eff] text-white font-bold"
                              : "bg-[#272a31]/30 hover:bg-[#272a31] text-[#c2c6d6]"
                          }`}
                        >
                          <span className="text-xs">{specialty}</span>
                          {hasMessages && !isActive && (
                            <span className="text-[9px] px-1.5 py-0.5 bg-[#4d8eff] text-white rounded-full font-bold">
                              AKTIVNÍ
                            </span>
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Chat View inside Modal */}
              <div className="flex-1 flex flex-col bg-[#0b0e15]">
                {/* Chat message logs */}
                <div className="flex-1 p-4 overflow-y-auto custom-scrollbar space-y-4">
                  <div className="text-center">
                    <span className="text-[10px] text-[#c2c6d6] px-2.5 py-0.5 rounded border border-[#424754]/30">
                      Dnes, 14:45
                    </span>
                  </div>

                  {session.chatHistory[activeConsultant]?.length === 0 ? (
                    <div className="text-center py-12 text-[#c2c6d6] italic text-xs">
                      Žádné předchozí zprávy. Položte konzultantovi konkrétní otázku ohledně stavu pacienta nebo interpretace nálezů.
                    </div>
                  ) : (
                    session.chatHistory[activeConsultant]?.map((msg, index) => {
                      const isMe = msg.sender.includes("Urgent");
                      return (
                        <div
                          key={index}
                          className={`flex ${isMe ? "justify-end" : "justify-start"} animate-fade-in`}
                        >
                          <div
                            className={`p-3 rounded-xl max-w-[80%] text-xs border ${
                              isMe
                                ? "bg-[#4d8eff]/10 border-[#4d8eff]/30 text-white rounded-tr-none"
                                : "bg-[#272a31] border-[#424754]/40 text-[#e1e2ec] rounded-tl-none"
                            }`}
                          >
                            <div className="flex justify-between items-center gap-4 mb-1">
                              <span className={`font-bold text-[10px] ${isMe ? "text-[#adc6ff]" : "text-green-400"}`}>
                                {msg.sender}
                              </span>
                              <span className="text-[9px] text-[#c2c6d6]">{msg.time}</span>
                            </div>
                            <p className="leading-relaxed">{msg.text}</p>
                          </div>
                        </div>
                      );
                    })
                  )}

                  {consultingLoading && (
                    <div className="flex justify-start">
                      <div className="p-3 bg-[#272a31] border border-[#424754]/40 text-[#c2c6d6] rounded-xl rounded-tl-none text-xs flex items-center gap-1.5 animate-pulse">
                        <span>Specialista píše odpověď</span>
                        <span className="flex gap-1">
                          <span className="w-1.5 h-1.5 bg-[#c2c6d6] rounded-full animate-bounce delay-100" />
                          <span className="w-1.5 h-1.5 bg-[#c2c6d6] rounded-full animate-bounce delay-200" />
                          <span className="w-1.5 h-1.5 bg-[#c2c6d6] rounded-full animate-bounce delay-300" />
                        </span>
                      </div>
                    </div>
                  )}

                  <div ref={chatEndRef} />
                </div>

                {/* Chat message input */}
                <div className="p-4 bg-[#1d2027] border-t border-[#424754] flex gap-2 shrink-0">
                  <input
                    type="text"
                    placeholder={`Zeptejte se specialisty (${activeConsultant})...`}
                    value={chatMessage}
                    onChange={(e) => setChatMessage(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") handleSendChat();
                    }}
                    className="flex-1 bg-[#0b0e15] border border-[#424754] rounded-lg px-3 py-2 text-xs text-white placeholder-[#c2c6d6] focus:outline-none focus:border-[#4d8eff]"
                  />
                  <button
                    onClick={handleSendChat}
                    className="p-2 bg-[#4d8eff] hover:bg-[#adc6ff] text-white rounded-lg transition-colors active:scale-95 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {showEkgQuizModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/60 backdrop-blur-sm animate-fade-in">
          <div className="w-full max-w-3xl rounded-2xl border border-[#424754] shadow-2xl overflow-hidden animate-zoom-in">
            <EkgQuiz 
              standalone={false} 
              session={session} 
              onAction={onAction} 
              onClose={() => setShowEkgQuizModal(false)} 
            />
          </div>
        </div>
      )}
    </div>
  );
}
