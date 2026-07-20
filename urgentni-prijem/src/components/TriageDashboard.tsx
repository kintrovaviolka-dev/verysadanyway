import React, { useState } from "react";
import { GameSession } from "../types";
import { Heart, Activity, AlertTriangle, ShieldAlert, CheckCircle, ChevronRight } from "lucide-react";

interface TriageDashboardProps {
  session: GameSession;
  onConfirmTriage: (triageClass: string) => void;
  onInstantIntervention: (actionId: string, details: any) => void;
  onActivateTrauma: () => void;
}

export default function TriageDashboard({
  session,
  onConfirmTriage,
  onInstantIntervention,
  onActivateTrauma
}: TriageDashboardProps) {
  const [selectedTriage, setSelectedTriage] = useState<string>("");

  const triageClasses = [
    { id: "1", label: "Resuscitace", color: "bg-red-600 border-red-500 text-red-500 text-red-100" },
    { id: "2", label: "Kritický", color: "bg-orange-600 border-orange-500 text-orange-500 text-orange-100" },
    { id: "3", label: "Naléhavý", color: "bg-yellow-600 border-yellow-500 text-yellow-500 text-yellow-100" },
    { id: "4", label: "Standardní", color: "bg-green-600 border-green-500 text-green-500 text-green-100" },
    { id: "5", label: "Nenaléhavý", color: "bg-blue-600 border-blue-500 text-blue-500 text-blue-100" }
  ];

  return (
    <div className="grid grid-cols-12 gap-6 max-w-[1600px] mx-auto animate-fade-in">
      {/* Central Section (Lef/Mid) */}
      <div className="col-span-12 lg:col-span-8 space-y-6">
        {/* Triage Header */}
        <div className="bg-[#1d2027] p-6 rounded-2xl border border-[#424754] flex flex-col md:flex-row gap-6 items-start">
          <div className="flex-1 space-y-4">
            <div className="flex items-center gap-3">
              <span className="px-2 py-0.5 bg-[#4d8eff]/20 text-[#adc6ff] text-xs font-bold rounded border border-[#4d8eff]/30 uppercase tracking-widest">
                Příjem
              </span>
              <h2 className="text-2xl font-bold text-[#e1e2ec]">Základní údaje pacienta</h2>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#191b23] p-3 rounded-lg border border-[#424754]/30">
                <p className="text-xs text-[#c2c6d6] mb-1">Věk / Pohlaví</p>
                <p className="text-lg text-white font-bold">
                  {session.patient.age} let, {session.patient.sex}
                </p>
              </div>
              <div className="bg-[#191b23] p-3 rounded-lg border border-[#424754]/30">
                <p className="text-xs text-[#c2c6d6] mb-1">Čas příjezdu</p>
                <p className="text-lg text-white font-bold">14:22 (před 12 min)</p>
              </div>
            </div>

            <div className="bg-red-500/10 p-4 rounded-lg border border-red-500/20">
              <p className="text-xs text-red-400 mb-1 font-bold flex items-center gap-2">
                <ShieldAlert className="w-4 h-4" />
                HLAVNÍ POTÍŽE
              </p>
              <p className="text-2xl font-extrabold text-[#e1e2ec]">
                {session.patient.mainComplaint}
              </p>
              <p className="text-sm text-[#c2c6d6] mt-2 italic">
                {session.patient.complaintDetail}
              </p>
            </div>
          </div>

          <div className="w-full md:w-64 space-y-4 shrink-0">
            <div className="bg-[#32353c] p-4 rounded-lg border border-[#424754] text-center space-y-2">
              <p className="text-xs text-[#c2c6d6] font-bold uppercase tracking-widest">Triážní sestra</p>
              <div className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 rounded-full border-2 border-[#adc6ff]/40 bg-[#1d2027] flex items-center justify-center font-bold text-lg text-[#adc6ff]">
                  MK
                </div>
                <p className="text-sm font-bold text-[#e1e2ec]">Bc. Marie Krátká</p>
              </div>
            </div>
          </div>
        </div>

        {/* ESI Triage Score Selector */}
        <div className="bg-[#1d2027] p-6 rounded-2xl border border-[#424754] space-y-4">
          <h3 className="text-xs font-bold text-[#c2c6d6] uppercase tracking-widest">
            ESI Triage Score Selector
          </h3>
          <div className="grid grid-cols-5 gap-2">
            {triageClasses.map((cls) => {
              const isSelected = selectedTriage === cls.id;
              return (
                <button
                  key={cls.id}
                  onClick={() => setSelectedTriage(cls.id)}
                  className={`flex flex-col items-center gap-2 p-4 rounded-lg border-2 transition-all active:scale-95 cursor-pointer ${
                    isSelected
                      ? "border-[#4d8eff] bg-[#4d8eff]/10"
                      : "border-[#424754] bg-[#32353c]/40 hover:border-[#c2c6d6]"
                  }`}
                >
                  <span className={`text-3xl font-extrabold ${isSelected ? "text-[#4d8eff]" : "text-[#c2c6d6]"}`}>
                    {cls.id}
                  </span>
                  <span className="text-[10px] font-bold text-[#c2c6d6] uppercase tracking-wider">
                    {cls.label}
                  </span>
                  <div
                    className={`w-full h-1 rounded-full mt-2 ${
                      cls.id === "1" ? "bg-red-500" : cls.id === "2" ? "bg-orange-500" : cls.id === "3" ? "bg-yellow-500" : cls.id === "4" ? "bg-green-500" : "bg-blue-500"
                    } ${isSelected ? "opacity-100 shadow-[0_0_8px_rgba(77,142,255,0.6)]" : "opacity-30"}`}
                  />
                </button>
              );
            })}
          </div>
        </div>

        {/* Allergy and History inputs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-[#1d2027] p-5 rounded-2xl border border-[#424754] space-y-3">
            <h4 className="text-xs font-bold text-[#c2c6d6] uppercase tracking-widest">Alergie</h4>
            <div className="flex flex-wrap gap-2">
              {session.patient.allergies.length > 0 ? (
                session.patient.allergies.map((alg) => (
                  <span key={alg} className="px-3 py-1 bg-red-950/40 text-red-300 rounded-full text-xs font-bold border border-red-500/20 flex items-center gap-1">
                    <ShieldAlert className="w-3 h-3" /> {alg}
                  </span>
                ))
              ) : (
                <span className="text-sm text-[#c2c6d6] italic">Bez známých alergií</span>
              )}
            </div>
          </div>

          <div className="bg-[#1d2027] p-5 rounded-2xl border border-[#424754] space-y-3">
            <h4 className="text-xs font-bold text-[#c2c6d6] uppercase tracking-widest">Anamnéza</h4>
            <div className="flex flex-wrap gap-2">
              {session.patient.history.map((hist) => (
                <span key={hist} className="px-3 py-1 bg-[#3e495d]/30 text-[#bcc7de] rounded-full text-xs font-bold border border-[#bcc7de]/20">
                  {hist}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Vitals Sidebar */}
      <div className="col-span-12 lg:col-span-4 space-y-6">
        <div className="bg-[#1d2027] p-6 rounded-2xl border-2 border-red-500/50 vitals-pulse space-y-6">
          <div className="flex justify-between items-center">
            <h3 className="text-xs font-bold text-[#c2c6d6] uppercase tracking-widest flex items-center gap-2">
              <Activity className="w-4 h-4 text-[#adc6ff]" /> Monitor vitálních funkcí
            </h3>
            <span className="flex items-center gap-1.5 text-[10px] text-red-400 font-bold animate-pulse">
              <span className="w-2 h-2 bg-red-500 rounded-full" /> LIVE
            </span>
          </div>

          <div className="space-y-4">
            {/* TK */}
            <div className="flex items-end justify-between border-b border-[#424754]/50 pb-3">
              <div>
                <p className="text-xs text-[#c2c6d6] uppercase font-semibold">Krevní tlak</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-bold font-mono tracking-tight text-[#e1e2ec]">
                    {session.vitals.tk_sys}/{session.vitals.tk_dia}
                  </span>
                  <span className="text-xs text-[#c2c6d6]">mmHg</span>
                </div>
              </div>
              <div className="w-16 h-8 opacity-35 bg-[#191b23] rounded flex items-center justify-center font-mono text-[10px] text-green-400">
                STABILNÍ
              </div>
            </div>

            {/* TF */}
            <div className={`flex items-end justify-between border-b border-[#424754]/50 pb-3 p-1 rounded ${session.vitals.tf > 100 ? "bg-red-500/5" : ""}`}>
              <div>
                <p className={`text-xs uppercase font-semibold ${session.vitals.tf > 100 ? "text-red-400" : "text-[#c2c6d6]"}`}>
                  Tepová frekvence
                </p>
                <div className="flex items-baseline gap-1">
                  <span className={`text-3xl font-bold font-mono tracking-tight ${session.vitals.tf > 100 ? "text-red-400" : "text-[#e1e2ec]"}`}>
                    {session.vitals.tf}
                  </span>
                  <span className="text-xs text-[#c2c6d6]">bpm</span>
                </div>
              </div>
              <div className={`w-16 h-8 rounded flex items-center justify-center font-mono text-[10px] ${session.vitals.tf > 100 ? "bg-red-950/30 text-red-400 border border-red-500/20" : "bg-[#191b23] text-green-400"}`}>
                {session.vitals.tf > 100 ? "ZVÝŠENÁ" : "NORMA"}
              </div>
            </div>

            {/* SpO2 */}
            <div className={`flex items-end justify-between border-b border-[#424754]/50 pb-3 p-1 rounded ${session.vitals.spo2 < 93 ? "bg-orange-500/5" : ""}`}>
              <div>
                <p className={`text-xs uppercase font-semibold ${session.vitals.spo2 < 93 ? "text-orange-400" : "text-[#c2c6d6]"}`}>
                  Saturace O2
                </p>
                <div className="flex items-baseline gap-1">
                  <span className={`text-3xl font-bold font-mono tracking-tight ${session.vitals.spo2 < 93 ? "text-orange-400" : "text-[#e1e2ec]"}`}>
                    {session.vitals.spo2}
                  </span>
                  <span className="text-xs text-[#c2c6d6]">%</span>
                </div>
              </div>
              <div className={`w-16 h-8 rounded flex items-center justify-center font-mono text-[10px] ${session.vitals.spo2 < 93 ? "bg-orange-950/30 text-orange-400 border border-orange-500/20" : "bg-[#191b23] text-green-400"}`}>
                {session.vitals.spo2 < 93 ? "HYPOXIE" : "NORMA"}
              </div>
            </div>

            {/* Other Vitals */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="p-3 bg-[#191b23] rounded border border-[#424754]/40">
                <p className="text-[10px] text-[#c2c6d6] uppercase font-bold">GCS</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-xl font-bold text-[#e1e2ec] font-mono">{session.vitals.gcs}</span>
                  <span className="text-[10px] text-[#c2c6d6]">/ 15</span>
                </div>
              </div>
              <div className="p-3 bg-[#191b23] rounded border border-[#424754]/40">
                <p className="text-[10px] text-[#c2c6d6] uppercase font-bold">Teplota</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-xl font-bold text-[#e1e2ec] font-mono">{session.vitals.temp}</span>
                  <span className="text-[10px] text-[#c2c6d6]">°C</span>
                </div>
              </div>
              <div className="p-3 bg-[#191b23] rounded border border-[#424754]/40 col-span-2">
                <p className="text-[10px] text-[#c2c6d6] uppercase font-bold">Dechová frekvence</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-xl font-bold text-[#e1e2ec] font-mono">{session.vitals.rr}</span>
                  <span className="text-[10px] text-[#c2c6d6]">/ min</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Immediate Interventions */}
        <div className="bg-[#1d2027] p-5 rounded-2xl border border-[#424754] space-y-3">
          <h3 className="text-xs font-bold text-[#c2c6d6] uppercase tracking-widest">
            Okamžité intervence
          </h3>
          <div className="space-y-2">
            <button
              onClick={() => onInstantIntervention("oxygen_setup", { value: "O2 Brýle 4L/min" })}
              disabled={session.therapies.oxygen.includes("4L/min")}
              className="w-full flex items-center justify-between p-3 rounded-lg bg-[#32353c]/50 border border-[#424754] hover:bg-[#4d8eff]/10 hover:border-[#4d8eff]/50 transition-colors cursor-pointer text-left disabled:opacity-50"
            >
              <div className="flex items-center gap-3">
                <Heart className="w-5 h-5 text-[#adc6ff]" />
                <span className="text-sm font-semibold text-[#e1e2ec]">Zavést kyslík 4L/min</span>
              </div>
              <ChevronRight className="w-4 h-4 text-[#c2c6d6]" />
            </button>

            <button
              onClick={() => onInstantIntervention("order_imaging", { method: "ekg" })}
              disabled={session.imagingOrdered.includes("ekg")}
              className="w-full flex items-center justify-between p-3 rounded-lg bg-[#32353c]/50 border border-[#424754] hover:bg-[#4d8eff]/10 hover:border-[#4d8eff]/50 transition-colors cursor-pointer text-left disabled:opacity-50"
            >
              <div className="flex items-center gap-3">
                <Activity className="w-5 h-5 text-[#adc6ff]" />
                <span className="text-sm font-semibold text-[#e1e2ec]">Natočit 12-svodové EKG</span>
              </div>
              <ChevronRight className="w-4 h-4 text-[#c2c6d6]" />
            </button>

            <button
              onClick={() => onInstantIntervention("iv_setup", { value: "Pravá antekubita G18" })}
              disabled={session.therapies.ivAccess !== "Nezaveden"}
              className="w-full flex items-center justify-between p-3 rounded-lg bg-[#32353c]/50 border border-[#424754] hover:bg-[#4d8eff]/10 hover:border-[#4d8eff]/50 transition-colors cursor-pointer text-left disabled:opacity-50"
            >
              <div className="flex items-center gap-3">
                <AlertTriangle className="w-5 h-5 text-[#adc6ff]" />
                <span className="text-sm font-semibold text-[#e1e2ec]">Žilní vstup G18</span>
              </div>
              <ChevronRight className="w-4 h-4 text-[#c2c6d6]" />
            </button>
          </div>
        </div>

        {/* Trauma team Activation */}
        {session.level === 3 && (
          <button
            onClick={onActivateTrauma}
            disabled={session.traumaTeamActivated}
            className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 border shadow-lg transition-all active:scale-[0.98] cursor-pointer ${
              session.traumaTeamActivated
                ? "bg-red-950/20 border-red-500/20 text-red-400"
                : "bg-red-600 border-red-500 text-white hover:bg-red-700"
            }`}
          >
            <ShieldAlert className="w-5 h-5" />
            {session.traumaTeamActivated ? "TRAUMA TÝM AKTIVOVÁN" : "AKTIVUJE TRAUMA TÝM"}
          </button>
        )}
      </div>

      {/* Bottom Transactional Bar */}
      <div className="col-span-12 mt-4">
        <div className="bg-[#272a31] p-6 rounded-2xl border-t-4 border-[#4d8eff] flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h4 className="text-xl font-bold text-[#e1e2ec]">Dokončit triáž</h4>
            <p className="text-sm text-[#c2c6d6]">
              Zkontrolujte parametry před odesláním. Pacient bude převeden do hlavního vyšetřovacího boxu k intenzivní péči.
            </p>
          </div>
          <div className="flex gap-4 w-full md:w-auto shrink-0">
            <button
              onClick={() => {
                if (!selectedTriage) {
                  alert("Prosím zvolte stupeň ESI triáže (1-5) před odesláním!");
                  return;
                }
                onConfirmTriage(selectedTriage);
              }}
              className="w-full md:w-auto px-12 py-3 bg-[#4d8eff] hover:bg-[#adc6ff] text-white font-bold rounded-lg shadow-xl active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer text-sm"
            >
              <CheckCircle className="w-4 h-4" /> POTVRDIT A ODESLAT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
