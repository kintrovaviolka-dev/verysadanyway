import React, { useRef, useState } from "react";
import { useProgress } from "../context/ProgressContext";
import {
  Award,
  Activity,
  Clock,
  CheckCircle2,
  AlertTriangle,
  Download,
  Upload,
  RotateCcw,
  ChevronLeft,
  Calendar,
  Sparkles,
  ShieldCheck
} from "lucide-react";

interface ProgressDashboardProps {
  onClose: () => void;
}

export default function ProgressDashboard({ onClose }: ProgressDashboardProps) {
  const {
    progress,
    getSpecialtyMastery,
    exportProgressJSON,
    importProgressJSON,
    resetProgress
  } = useProgress();

  const fileInputRef = useRef<HTMLInputElement>(null);
  const [importError, setImportError] = useState<string | null>(null);
  const [importSuccess, setImportSuccess] = useState<boolean>(false);
  const [showResetConfirm, setShowResetConfirm] = useState<boolean>(false);

  const mastery = getSpecialtyMastery();

  // 1. Calculate KPI Metrics
  const totalCases = progress.completedCases.length;
  
  // Total elapsed time in completed cases
  const totalTime = progress.completedCases.reduce((sum, c) => sum + c.elapsedTime, 0);

  // Average accuracy: average case score and average quiz success rate
  const caseScores = progress.completedCases.map(c => c.score);
  const quizScores = progress.quizScores.map(q => q.total > 0 ? (q.score / q.total) * 100 : 0);
  const allScores = [...caseScores, ...quizScores];
  const avgAccuracy = allScores.length > 0 
    ? Math.round(allScores.reduce((sum, s) => sum + s, 0) / allScores.length)
    : 0;

  const totalQuizzes = progress.quizScores.length;

  // 2. Combine and Sort Activities for Activity Feed
  interface ActivityItem {
    id: string;
    type: "case" | "quiz" | "mistake";
    title: string;
    specialty: string;
    detail: string;
    timestamp: string;
    scoreInfo?: string;
    badgeColor: string;
  }

  const activities: ActivityItem[] = [];

  progress.completedCases.forEach((c, idx) => {
    activities.push({
      id: `case_${c.caseId}_${idx}`,
      type: "case",
      title: `Úspěšně uzavřen případ: ${c.title}`,
      specialty: c.specialty,
      detail: `Čas na lůžku: ${c.elapsedTime} min.`,
      scoreInfo: `Hodnocení: ${c.score}%`,
      timestamp: c.timestamp,
      badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
    });
  });

  progress.quizScores.forEach((q, idx) => {
    activities.push({
      id: `quiz_${q.quizId}_${idx}`,
      type: "quiz",
      title: `Dokončen test: ${q.title}`,
      specialty: q.specialty,
      detail: `Úspěšnost: ${q.score}/${q.total} správných odpovědí.`,
      scoreInfo: `Úspěšnost: ${Math.round((q.score / q.total) * 100)}%`,
      timestamp: q.timestamp,
      badgeColor: "bg-sky-500/10 text-sky-400 border-sky-500/20"
    });
  });

  progress.incorrectDecisions.forEach((d, idx) => {
    activities.push({
      id: `mistake_${d.questionId}_${idx}`,
      type: "mistake",
      title: `Zaznamenáno suboptimální rozhodnutí`,
      specialty: d.specialty,
      detail: `Otázka: "${d.questionText}" – zvoleno: "${d.selectedChoice}"`,
      timestamp: d.timestamp,
      badgeColor: "bg-rose-500/10 text-rose-400 border-rose-500/20"
    });
  });

  // Sort activities chronologically (newest first)
  activities.sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());

  // 3. Handle File Export
  const handleExport = () => {
    const jsonStr = exportProgressJSON();
    const blob = new Blob([jsonStr], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `clinical_learning_progress_${new Date().toISOString().substring(0, 10)}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  // 4. Handle File Import
  const handleImport = (e: React.ChangeEvent<HTMLInputElement>) => {
    setImportError(null);
    setImportSuccess(false);
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const content = event.target?.result;
      if (typeof content === "string") {
        const res = importProgressJSON(content);
        if (res.success) {
          setImportSuccess(true);
          setTimeout(() => setImportSuccess(false), 4000);
        } else {
          setImportError(res.error || "Došlo k neznámé chybě.");
        }
      }
    };
    reader.readAsText(file);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleReset = () => {
    resetProgress();
    setShowResetConfirm(false);
  };

  // 5. SVG Ring Helper (Circumference ~314.16 for r=50)
  const renderMasteryRing = (val: number, label: string, colorClass: string, trackColor: string, gradientId: string, stopColorStart: string, stopColorEnd: string) => {
    const r = 50;
    const circ = 2 * Math.PI * r;
    const offset = circ - (circ * val) / 100;

    return (
      <div className="flex flex-col items-center p-6 bg-[#191b23]/80 rounded-2xl border border-[#424754]/40 shadow-xl relative overflow-hidden group hover:border-[#adc6ff]/30 transition-all duration-300">
        {/* Decorative background glow */}
        <div className={`absolute -right-12 -bottom-12 w-24 h-24 rounded-full filter blur-2xl opacity-10 transition-opacity group-hover:opacity-20 ${colorClass.includes("cyan") ? "bg-cyan-500" : "bg-purple-500"}`} />
        
        <svg className="w-40 h-40 transform -rotate-90 filter drop-shadow-[0_0_8px_rgba(77,142,255,0.15)]" viewBox="0 0 120 120">
          <defs>
            <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={stopColorStart} />
              <stop offset="100%" stopColor={stopColorEnd} />
            </linearGradient>
          </defs>
          {/* Background circle track */}
          <circle
            cx="60"
            cy="60"
            r={r}
            className={trackColor}
            strokeWidth="8"
            fill="transparent"
          />
          {/* Active progress circle */}
          <circle
            cx="60"
            cy="60"
            r={r}
            stroke={`url(#${gradientId})`}
            strokeWidth="10"
            fill="transparent"
            strokeDasharray={circ}
            strokeDashoffset={offset}
            strokeLinecap="round"
            className="transition-all duration-1000 ease-out"
          />
        </svg>

        {/* Absolute text centered inside ring */}
        <div className="absolute top-[82px] flex flex-col items-center justify-center">
          <span className="text-3xl font-black font-mono text-white tracking-tight">{val}%</span>
          <span className="text-[9px] font-bold text-[#adc6ff]/70 uppercase tracking-widest">Úroveň</span>
        </div>

        <h4 className="mt-4 text-sm font-extrabold text-[#e1e2ec] tracking-wide uppercase">{label}</h4>
        
        {/* Dynamic Mastery Badge */}
        <span className={`mt-2 px-2.5 py-0.5 rounded-full text-[9px] font-extrabold uppercase border ${
          val >= 80 
            ? "bg-emerald-950/40 text-emerald-400 border-emerald-500/20" 
            : val >= 50 
            ? "bg-amber-950/40 text-amber-400 border-amber-500/20" 
            : "bg-rose-950/40 text-rose-400 border-rose-500/20"
        }`}>
          {val >= 80 ? "Atestační úroveň" : val >= 50 ? "Pokročilá znalost" : "Potřebuje revizi"}
        </span>
      </div>
    );
  };

  return (
    <div className="max-w-[1300px] mx-auto space-y-6 pb-12 animate-fade-in">
      {/* Header Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#424754]/50 pb-4">
        <div className="flex items-center gap-3">
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-[#272a31]/50 border border-[#424754]/40 hover:bg-[#272a31] text-[#adc6ff] transition-all cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div>
            <h2 className="text-2xl font-black text-white flex items-center gap-2 uppercase tracking-wide">
              <Award className="w-6 h-6 text-[#adc6ff]" /> Osobní Výkonnostní Panel
            </h2>
            <p className="text-xs text-[#c2c6d6]">Kompletní atestační statistiky a historie klinického rozhodování.</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs text-[#c2c6d6] font-mono">Poslední synchronizace:</span>
          <span className="text-xs text-white font-mono font-bold bg-[#272a31]/40 border border-[#424754]/30 px-2 py-0.5 rounded">
            Nyní (localStorage)
          </span>
        </div>
      </div>

      {/* KPI Cards Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {/* KPI 1: Accuracy */}
        <div className="bg-[#1d2027] p-5 rounded-2xl border border-[#424754]/40 shadow-lg flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <span className="text-[10px] text-[#c2c6d6] uppercase tracking-wider font-bold block">Klinická Přesnost</span>
            <span className="text-2xl font-black font-mono text-white">{avgAccuracy}%</span>
          </div>
        </div>

        {/* KPI 2: Completed Cases */}
        <div className="bg-[#1d2027] p-5 rounded-2xl border border-[#424754]/40 shadow-lg flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <div>
            <span className="text-[10px] text-[#c2c6d6] uppercase tracking-wider font-bold block">Vyřešené Případy</span>
            <span className="text-2xl font-black font-mono text-white">{totalCases}</span>
          </div>
        </div>

        {/* KPI 3: Quizzes */}
        <div className="bg-[#1d2027] p-5 rounded-2xl border border-[#424754]/40 shadow-lg flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
            <Sparkles className="w-6 h-6" />
          </div>
          <div>
            <span className="text-[10px] text-[#c2c6d6] uppercase tracking-wider font-bold block">Pokusy o Kvízy</span>
            <span className="text-2xl font-black font-mono text-white">{totalQuizzes}</span>
          </div>
        </div>

        {/* KPI 4: Time spent */}
        <div className="bg-[#1d2027] p-5 rounded-2xl border border-[#424754]/40 shadow-lg flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
            <Clock className="w-6 h-6" />
          </div>
          <div>
            <span className="text-[10px] text-[#c2c6d6] uppercase tracking-wider font-bold block">Simulační Hodiny</span>
            <span className="text-2xl font-black font-mono text-white">{totalTime} min</span>
          </div>
        </div>
      </div>

      {/* Main Analysis Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Side: Specialty Rings & Comparison */}
        <div className="col-span-12 lg:col-span-5 space-y-6">
          <div className="bg-[#1d2027] p-6 rounded-2xl border border-[#424754]/40 shadow-xl space-y-6">
            <h3 className="text-sm font-extrabold text-[#adc6ff] uppercase tracking-wider border-b border-[#424754]/30 pb-2">
              Klinická Mastery podle oborů
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Emergency Ring */}
              {renderMasteryRing(
                mastery.Emergency,
                "Urgentní příjem",
                "bg-cyan-500",
                "stroke-cyan-950/30",
                "grad-emergency",
                "#06b6d4",
                "#3b82f6"
              )}

              {/* Anesthesia Ring */}
              {renderMasteryRing(
                mastery.Anesthesia,
                "Anesteziologie",
                "bg-purple-500",
                "stroke-purple-950/30",
                "grad-anesthesia",
                "#a855f7",
                "#ec4899"
              )}
            </div>

            {/* Specialty comparison insight */}
            <div className="p-4 bg-[#191b23]/50 rounded-xl border border-[#424754]/30 text-xs text-[#c2c6d6] leading-relaxed space-y-2">
              <span className="font-extrabold text-white block uppercase tracking-wider text-[10px] text-[#adc6ff]">
                Klinické doporučení atestačního modulu:
              </span>
              {mastery.Emergency < 50 || mastery.Anesthesia < 50 ? (
                <p>
                  Váš index u jednoho z oborů klesl pod 50%. Doporučujeme spustit <strong>Cílené opakování (Focus Review)</strong> k procvičení dříve špatně zodpovězených otázek a rizikových stavů.
                </p>
              ) : (
                <p>
                  Vynikající výkon. Oba klíčové obory držíte na pokročilé atestační úrovni. Můžete bez obav přistoupit ke generování obtížnějších klinických scénářů stupně 3.
                </p>
              )}
            </div>
          </div>

          {/* Settings & Import/Export Section */}
          <div className="bg-[#1d2027] p-6 rounded-2xl border border-[#424754]/40 shadow-xl space-y-4">
            <h3 className="text-sm font-extrabold text-[#adc6ff] uppercase tracking-wider border-b border-[#424754]/30 pb-2">
              Správa dat a zálohování
            </h3>

            {/* Alerts */}
            {importSuccess && (
              <div className="p-3 bg-emerald-950/50 border border-emerald-500/30 text-emerald-400 text-xs rounded-xl flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>Data úspěšně importována a uložena!</span>
              </div>
            )}
            {importError && (
              <div className="p-3 bg-rose-950/50 border border-rose-500/30 text-rose-400 text-xs rounded-xl flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 shrink-0" />
                <span>Chyba importu: {importError}</span>
              </div>
            )}

            <div className="flex flex-col gap-3">
              {/* Import/Export buttons */}
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={handleExport}
                  className="flex items-center justify-center gap-2 py-2.5 px-4 bg-[#272a31] border border-[#424754] text-white hover:bg-[#32353c] text-xs font-bold rounded-xl cursor-pointer active:scale-95 transition-all uppercase tracking-wider"
                >
                  <Download className="w-4 h-4 text-[#adc6ff]" /> Exportovat
                </button>
                
                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="flex items-center justify-center gap-2 py-2.5 px-4 bg-[#272a31] border border-[#424754] text-white hover:bg-[#32353c] text-xs font-bold rounded-xl cursor-pointer active:scale-95 transition-all uppercase tracking-wider"
                >
                  <Upload className="w-4 h-4 text-[#adc6ff]" /> Importovat
                </button>
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleImport}
                  accept=".json"
                  className="hidden"
                />
              </div>

              {/* Reset Data button */}
              {!showResetConfirm ? (
                <button
                  onClick={() => setShowResetConfirm(true)}
                  className="flex items-center justify-center gap-2 py-2.5 px-4 bg-rose-950/20 border border-rose-900/30 text-rose-400 hover:bg-rose-950/50 text-xs font-bold rounded-xl cursor-pointer active:scale-95 transition-all uppercase tracking-wider"
                >
                  <RotateCcw className="w-4 h-4" /> Resetovat veškerý pokrok
                </button>
              ) : (
                <div className="p-4 bg-rose-950/30 border border-rose-500/20 rounded-xl space-y-3">
                  <p className="text-xs text-[#e1e2ec] font-bold">Opravdu chcete vymazat veškerou klinickou historii? Tuto akci nelze vzít zpět.</p>
                  <div className="flex gap-2">
                    <button
                      onClick={handleReset}
                      className="px-4 py-1.5 bg-rose-600 hover:bg-rose-500 text-white text-[11px] font-black rounded-lg cursor-pointer transition-colors"
                    >
                      ANO, VYMAZAT
                    </button>
                    <button
                      onClick={() => setShowResetConfirm(false)}
                      className="px-4 py-1.5 bg-[#272a31] text-white text-[11px] font-bold rounded-lg cursor-pointer transition-colors border border-[#424754]"
                    >
                      ZRUŠIT
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right Side: Chronological Activity Feed */}
        <div className="col-span-12 lg:col-span-7">
          <div className="bg-[#1d2027] p-6 rounded-2xl border border-[#424754]/40 shadow-xl flex flex-col h-[585px]">
            <h3 className="text-sm font-extrabold text-[#adc6ff] uppercase tracking-wider border-b border-[#424754]/30 pb-2 flex justify-between items-center shrink-0">
              <span>Chronologická aktivita trenažéru</span>
              <span className="text-[10px] text-[#c2c6d6] font-mono lowercase normal-case bg-[#272a31]/50 border border-[#424754]/30 px-2 py-0.5 rounded">
                Celkem {activities.length} záznamů
              </span>
            </h3>

            {/* Scrollable feed list */}
            <div className="flex-1 overflow-y-auto mt-4 pr-1 space-y-4 custom-scrollbar">
              {activities.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center p-8 space-y-3">
                  <Activity className="w-12 h-12 text-[#424754]" />
                  <p className="text-sm text-[#c2c6d6]">Zatím nebyly zaznamenány žádné klinické události.</p>
                  <p className="text-xs text-[#424754]">Spusťte scénář nebo kvíz a provádějte rozhodnutí k zapsání historie.</p>
                </div>
              ) : (
                activities.map((act) => (
                  <div
                    key={act.id}
                    className="p-4 bg-[#191b23]/60 hover:bg-[#191b23]/95 border border-[#424754]/20 hover:border-[#adc6ff]/20 rounded-xl transition-all flex items-start justify-between gap-4"
                  >
                    <div className="space-y-1.5 flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className={`text-[9px] px-1.5 py-0.5 rounded font-extrabold uppercase border ${act.badgeColor}`}>
                          {act.type === "case" ? "Scénář" : act.type === "quiz" ? "Kvíz" : "Chyba"}
                        </span>
                        <span className="text-[10px] px-1.5 py-0.5 rounded font-extrabold uppercase bg-[#272a31]/80 text-[#e1e2ec] border border-[#424754]/30">
                          {act.specialty === "Emergency" ? "Urgentní" : "Anestézie"}
                        </span>
                        <span className="text-[10px] text-[#c2c6d6] font-mono flex items-center gap-1">
                          <Calendar className="w-3 h-3 text-[#adc6ff]" />
                          {new Date(act.timestamp).toLocaleDateString()} {new Date(act.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </span>
                      </div>

                      <h4 className="text-xs font-extrabold text-[#e1e2ec] leading-relaxed break-words">{act.title}</h4>
                      
                      <p className="text-[11px] text-[#c2c6d6] leading-relaxed break-words">{act.detail}</p>
                    </div>

                    {act.scoreInfo && (
                      <span className="text-[11px] font-black font-mono text-[#adc6ff] bg-[#272a31]/50 px-2 py-1 rounded border border-[#424754]/30 shrink-0">
                        {act.scoreInfo}
                      </span>
                    )}
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
