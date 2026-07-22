import React, { useState, useEffect } from "react";
import { Activity, ShieldAlert, Heart, Clock, Award, Sparkles } from "lucide-react";
import { useProgress } from "../context/ProgressContext";

interface CaseDefinition {
  id: string;
  level: number;
  specialty: string;
  title: string;
  name: string;
  age: number;
  sex: string;
  mainComplaint: string;
  complaintDetail: string;
}

interface WelcomeScreenProps {
  onStartGame: (difficulty: string) => void;
  loading: boolean;
  onLaunchEkgQuiz: () => void;
  onLaunchDashboard: () => void;
  onLaunchFocusReview: () => void;
}

export default function WelcomeScreen({
  onStartGame,
  loading,
  onLaunchEkgQuiz,
  onLaunchDashboard,
  onLaunchFocusReview
}: WelcomeScreenProps) {
  const [selectedSpecialty, setSelectedSpecialty] = useState<string>("all");
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>("all");
  const [cases, setCases] = useState<CaseDefinition[]>([]);
  const [casesLoading, setCasesLoading] = useState<boolean>(true);
  const [generating, setGenerating] = useState<boolean>(false);

  const { getPendingReviewItemsCount } = useProgress();
  const pendingReviews = getPendingReviewItemsCount();

  // Fetch cases based on filters
  useEffect(() => {
    const fetchCases = async () => {
      setCasesLoading(true);
      try {
        const query = new URLSearchParams();
        if (selectedSpecialty !== "all") query.append("specialty", selectedSpecialty);
        if (selectedDifficulty !== "all") query.append("difficulty", selectedDifficulty);
        const res = await fetch(`/api/cases?${query.toString()}`);
        if (res.ok) {
          const data = await res.json();
          setCases(data);
        }
      } catch (err) {
        console.error("Failed to fetch cases:", err);
      } finally {
        setCasesLoading(false);
      }
    };
    fetchCases();
  }, [selectedSpecialty, selectedDifficulty]);

  const handleGenerateAiCase = async () => {
    setGenerating(true);
    try {
      const res = await fetch("/api/case/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          specialty: selectedSpecialty === "all" ? "Kardiologie" : selectedSpecialty,
          difficulty: selectedDifficulty === "all" ? "1" : selectedDifficulty
        })
      });
      if (!res.ok) throw new Error("Chyba při generování");
      const data = await res.json();
      onStartGame(data.id);
    } catch (err) {
      console.error(err);
      alert("Generování se nezdařilo. Spouštím náhradní předem připravený případ.");
    } finally {
      setGenerating(false);
    }
  };

  const getSpecialtyBadgeClass = (specialty: string) => {
    const spec = specialty.toLowerCase();
    if (spec.includes("kardio")) return "bg-green-500/10 text-green-400 border border-green-500/20";
    if (spec.includes("pediatr")) return "bg-sky-500/10 text-sky-400 border border-sky-500/20";
    if (spec.includes("pneumo")) return "bg-orange-500/10 text-orange-400 border border-orange-500/20";
    if (spec.includes("alerg") || spec.includes("imun")) return "bg-red-500/10 text-red-400 border border-red-500/20";
    if (spec.includes("chirur")) return "bg-yellow-500/10 text-yellow-400 border border-yellow-500/20";
    if (spec.includes("trauma")) return "bg-red-600/10 text-red-500 border border-red-500/20";
    if (spec.includes("infekt")) return "bg-purple-500/10 text-purple-400 border border-purple-500/20";
    if (spec.includes("toxiko")) return "bg-stone-500/10 text-stone-400 border border-stone-500/20";
    if (spec.includes("neuro")) return "bg-indigo-500/10 text-indigo-400 border border-indigo-500/20";
    if (spec.includes("nefro")) return "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20";
    return "bg-slate-500/10 text-slate-400 border border-slate-500/20";
  };

  const easyCases = cases.filter((c) => c.level === 1);
  const mediumCases = cases.filter((c) => c.level === 2);
  const hardCases = cases.filter((c) => c.level === 3);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-[#1d2027] rounded-2xl border border-[#424754] shadow-2xl space-y-8 animate-fade-in">
      <div className="text-center space-y-4">
        <div className="inline-flex items-center justify-center p-4 bg-[#4d8eff]/10 rounded-full border border-[#4d8eff]/20">
          <Activity className="w-12 h-12 text-[#adc6ff] animate-pulse" />
        </div>
        <h1 className="text-4xl font-extrabold text-[#adc6ff] tracking-tight">
          Urgentní příjem
        </h1>
        <p className="text-lg text-[#c2c6d6] max-w-2xl mx-auto">
          Pokročilý klinický trenažér a simulátor rozhodování v reálném čase. Otestujte své diagnostické schopnosti, rychlost a dodržování standardů **ČLS JEP**.
        </p>
        <div className="pt-3 flex flex-wrap justify-center gap-4">
          <button
            onClick={onLaunchEkgQuiz}
            className="px-6 py-2.5 bg-gradient-to-r from-emerald-600 to-teal-500 hover:brightness-110 text-white font-extrabold rounded-xl shadow-lg hover:shadow-teal-500/20 active:scale-95 transition-all text-xs flex items-center gap-2 cursor-pointer uppercase tracking-wider font-mono border border-emerald-400/20"
          >
            <Activity className="w-4 h-4 animate-pulse" />
            Spustit EKG Kvíz
          </button>

          <button
            onClick={onLaunchFocusReview}
            className="px-6 py-2.5 bg-gradient-to-r from-rose-600 to-orange-500 hover:brightness-110 text-white font-extrabold rounded-xl shadow-lg hover:shadow-rose-500/20 active:scale-95 transition-all text-xs flex items-center gap-2 cursor-pointer uppercase tracking-wider font-mono border border-rose-400/20 relative"
          >
            <ShieldAlert className="w-4 h-4" />
            Cílené Opakování
            {pendingReviews > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white font-black text-[9px] w-5 h-5 rounded-full flex items-center justify-center border border-[#1d2027] animate-bounce">
                {pendingReviews}
              </span>
            )}
          </button>

          <button
            onClick={onLaunchDashboard}
            className="px-6 py-2.5 bg-gradient-to-r from-indigo-600 to-blue-500 hover:brightness-110 text-white font-extrabold rounded-xl shadow-lg hover:shadow-blue-500/20 active:scale-95 transition-all text-xs flex items-center gap-2 cursor-pointer uppercase tracking-wider font-mono border border-indigo-400/20"
          >
            <Award className="w-4 h-4" />
            Můj Pokrok
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-5 bg-[#191b23] rounded-xl border border-[#424754]/40 space-y-3">
          <h2 className="text-lg font-bold text-[#e1e2ec] flex items-center gap-2">
            <ShieldAlert className="w-5 h-5 text-red-400" />
            Pravidla klinické přesnosti
          </h2>
          <ul className="space-y-2.5 text-sm text-[#c2c6d6] list-disc list-inside">
            <li>
              <span className="font-semibold text-white">Buďte konkrétní:</span> Obecné příkazy jako <span className="italic text-[#adc6ff]">"odběry"</span> nebo <span className="italic text-[#adc6ff]">"dám léky"</span> nebudou uznány. Musíte přesně specifikovat lék, dávku a způsob podání (např. <span className="font-mono text-xs text-[#adc6ff] bg-[#0b0e15] px-1 py-0.5 rounded">Anopyrin 400mg p.o.</span>).
            </li>
            <li>
              <span className="font-semibold text-white">Řiďte se standardy:</span> Každé opomenutí klíčového léku či zbytečné zdržení (např. posílání nestabilního pacienta na CT) se negativně odrazí ve vitálních funkcích a závěrečném hodnocení.
            </li>
            <li>
              <span className="font-semibold text-white">Konziliární vyšetření:</span> Specialisté (Kardiolog, ARO, Chirurg) s vámi komunikují na základě reálného klinického stavu. Pokud jim zavoláte bez EKG či laboratorních výsledků, odmítnou s vámi spolupracovat.
            </li>
          </ul>
        </div>

        <div className="p-5 bg-[#191b23] rounded-xl border border-[#424754]/40 space-y-3">
          <h2 className="text-lg font-bold text-[#e1e2ec] flex items-center gap-2">
            <Award className="w-5 h-5 text-[#adc6ff]" />
            Vyhodnocovací modul
          </h2>
          <p className="text-sm text-[#c2c6d6] leading-relaxed">
            Na konci případu po stanovení definitivní dispozice a sepsání **epikrízy** provede atestační komise složená z primářů urgentních příjmů přísný debriefing pokrývající:
          </p>
          <div className="grid grid-cols-2 gap-3 text-xs text-[#c2c6d6]">
            <div className="flex items-center gap-2 bg-[#1d2027] p-2 rounded border border-[#424754]/30">
              <Heart className="w-4 h-4 text-green-400 shrink-0" />
              <span>Správnost diagnózy</span>
            </div>
            <div className="flex items-center gap-2 bg-[#1d2027] p-2 rounded border border-[#424754]/30">
              <ShieldAlert className="w-4 h-4 text-orange-400 shrink-0" />
              <span>Terapeutický postup</span>
            </div>
            <div className="flex items-center gap-2 bg-[#1d2027] p-2 rounded border border-[#424754]/30">
              <Clock className="w-4 h-4 text-[#adc6ff] shrink-0" />
              <span>Efektivita a čas</span>
            </div>
            <div className="flex items-center gap-2 bg-[#1d2027] p-2 rounded border border-[#424754]/30">
              <Activity className="w-4 h-4 text-purple-400 shrink-0" />
              <span>Konzultace & Komunikace</span>
            </div>
          </div>
        </div>
      </div>

      {/* Control Panel: Filters & AI Generation */}
      <div className="bg-[#191b23] p-5 rounded-xl border border-[#424754]/40 space-y-4">
        <h3 className="font-bold text-sm text-[#adc6ff] uppercase tracking-wider">
          Nastavení a filtry klinických scénářů
        </h3>
        
        <div className="flex flex-col md:flex-row gap-4 justify-between items-stretch md:items-end">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1">
            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] uppercase tracking-wider text-[#c2c6d6] font-bold">Lékařská specializace</label>
              <select
                value={selectedSpecialty}
                onChange={(e) => setSelectedSpecialty(e.target.value)}
                className="bg-[#1d2027] border border-[#424754] text-[#e1e2ec] px-3 py-2 rounded-xl text-sm focus:outline-none focus:border-[#4d8eff] cursor-pointer"
              >
                <option value="all">Všechny obory</option>
                <option value="Kardiologie">Kardiologie</option>
                <option value="Pneumologie">Pneumologie</option>
                <option value="Neurologie">Neurologie</option>
                <option value="Pediatrie">Pediatrie</option>
                <option value="Nefrologie">Nefrologie</option>
                <option value="Traumatologie">Traumatologie</option>
                <option value="Infektologie">Infektologie</option>
                <option value="Alergologie">Alergologie</option>
                <option value="Chirurgie">Chirurgie</option>
                <option value="Toxikologie">Toxikologie</option>
              </select>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] uppercase tracking-wider text-[#c2c6d6] font-bold">Obtížnost případu</label>
              <select
                value={selectedDifficulty}
                onChange={(e) => setSelectedDifficulty(e.target.value)}
                className="bg-[#1d2027] border border-[#424754] text-[#e1e2ec] px-3 py-2 rounded-xl text-sm focus:outline-none focus:border-[#4d8eff] cursor-pointer"
              >
                <option value="all">Všechny úrovně</option>
                <option value="1">Level 1 - Snadná</option>
                <option value="2">Level 2 - Střední</option>
                <option value="3">Level 3 - Kritická</option>
              </select>
            </div>
          </div>

          <button
            onClick={handleGenerateAiCase}
            disabled={generating || loading}
            className="px-6 py-2.5 bg-gradient-to-r from-indigo-600 to-[#4d8eff] hover:brightness-110 disabled:opacity-50 text-white font-extrabold rounded-xl shadow-lg flex items-center justify-center gap-2 cursor-pointer transition-all active:scale-95 text-xs uppercase tracking-wider border border-indigo-400/20 font-mono h-[38px] md:self-end"
          >
            <Sparkles className={`w-4 h-4 ${generating ? "animate-spin" : "animate-pulse"}`} />
            {generating ? "Generuji případ..." : "Generovat AI případ"}
          </button>
        </div>
      </div>

      {/* Dynamic Case Grid */}
      <div className="space-y-6">
        <h3 className="text-center font-bold text-sm text-[#c2c6d6] uppercase tracking-wider">
          Zvolte klinický scénář pro spuštění trenažéru
        </h3>

        {casesLoading ? (
          <div className="text-center py-12 space-y-4">
            <div className="w-8 h-8 border-2 border-[#adc6ff] border-t-transparent rounded-full animate-spin mx-auto" />
            <p className="text-xs text-[#c2c6d6] font-mono">Načítám klinickou databázi...</p>
          </div>
        ) : cases.length === 0 ? (
          <div className="text-center py-12 bg-[#191b23]/50 rounded-xl border border-[#424754]/30">
            <p className="text-sm text-[#c2c6d6]">Pro vybrané filtry nebyly nalezeny žádné scénáře.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Úroveň 1 */}
            {(selectedDifficulty === "all" || selectedDifficulty === "1") && (
              <div className="space-y-4 bg-[#191b23]/50 p-4 rounded-xl border border-[#424754]/30">
                <div className="pb-2 border-b border-[#424754]/40">
                  <span className="text-xs font-bold uppercase tracking-wider text-green-400">Úroveň 1 • Snadná</span>
                  <h4 className="text-sm font-bold text-[#e1e2ec]">Jasné klinické vzorce</h4>
                </div>
                <div className="space-y-3">
                  {easyCases.length === 0 ? (
                    <p className="text-xs text-[#c2c6d6] italic py-2">Žádné případy</p>
                  ) : (
                    easyCases.map((c) => (
                      <button
                        key={c.id}
                        onClick={() => onStartGame(c.id)}
                        disabled={loading}
                        className="w-full text-left p-4 bg-[#272a31]/40 hover:bg-[#272a31]/90 border border-green-500/20 hover:border-green-500 rounded-lg transition-all cursor-pointer space-y-2 disabled:opacity-50 block"
                      >
                        <div className="flex justify-between items-start gap-2">
                          <span className="font-bold text-sm text-[#adc6ff] break-words">{c.name} ({c.age} let)</span>
                          <span className={`text-[9px] px-1.5 py-0.5 rounded shrink-0 ${getSpecialtyBadgeClass(c.specialty)}`}>
                            {c.specialty}
                          </span>
                        </div>
                        <p className="text-xs text-[#e1e2ec] font-medium leading-tight">{c.title}</p>
                        <p className="text-[11px] text-[#c2c6d6] leading-relaxed line-clamp-3">
                          {c.mainComplaint} – {c.complaintDetail}
                        </p>
                      </button>
                    ))
                  )}
                </div>
              </div>
            )}

            {/* Úroveň 2 */}
            {(selectedDifficulty === "all" || selectedDifficulty === "2") && (
              <div className="space-y-4 bg-[#191b23]/50 p-4 rounded-xl border border-[#424754]/30">
                <div className="pb-2 border-b border-[#424754]/40">
                  <span className="text-xs font-bold uppercase tracking-wider text-orange-400">Úroveň 2 • Střední</span>
                  <h4 className="text-sm font-bold text-[#e1e2ec]">Netypické či komplikované stavy</h4>
                </div>
                <div className="space-y-3">
                  {mediumCases.length === 0 ? (
                    <p className="text-xs text-[#c2c6d6] italic py-2">Žádné případy</p>
                  ) : (
                    mediumCases.map((c) => (
                      <button
                        key={c.id}
                        onClick={() => onStartGame(c.id)}
                        disabled={loading}
                        className="w-full text-left p-4 bg-[#272a31]/40 hover:bg-[#272a31]/90 border border-orange-500/20 hover:border-orange-500 rounded-lg transition-all cursor-pointer space-y-2 disabled:opacity-50 block"
                      >
                        <div className="flex justify-between items-start gap-2">
                          <span className="font-bold text-sm text-[#adc6ff] break-words">{c.name} ({c.age} let)</span>
                          <span className={`text-[9px] px-1.5 py-0.5 rounded shrink-0 ${getSpecialtyBadgeClass(c.specialty)}`}>
                            {c.specialty}
                          </span>
                        </div>
                        <p className="text-xs text-[#e1e2ec] font-medium leading-tight">{c.title}</p>
                        <p className="text-[11px] text-[#c2c6d6] leading-relaxed line-clamp-3">
                          {c.mainComplaint} – {c.complaintDetail}
                        </p>
                      </button>
                    ))
                  )}
                </div>
              </div>
            )}

            {/* Úroveň 3 */}
            {(selectedDifficulty === "all" || selectedDifficulty === "3") && (
              <div className="space-y-4 bg-[#191b23]/50 p-4 rounded-xl border border-[#424754]/30">
                <div className="pb-2 border-b border-[#424754]/40">
                  <span className="text-xs font-bold uppercase tracking-wider text-red-400">Úroveň 3 • Kritická</span>
                  <h4 className="text-sm font-bold text-[#e1e2ec]">Multidisciplinární šokové stavy</h4>
                </div>
                <div className="space-y-3">
                  {hardCases.length === 0 ? (
                    <p className="text-xs text-[#c2c6d6] italic py-2">Žádné případy</p>
                  ) : (
                    hardCases.map((c) => (
                      <button
                        key={c.id}
                        onClick={() => onStartGame(c.id)}
                        disabled={loading}
                        className="w-full text-left p-4 bg-[#272a31]/40 hover:bg-[#272a31]/90 border border-red-500/20 hover:border-red-500 rounded-lg transition-all cursor-pointer space-y-2 disabled:opacity-50 block"
                      >
                        <div className="flex justify-between items-start gap-2">
                          <span className="font-bold text-sm text-[#adc6ff] break-words">{c.name} ({c.age} let)</span>
                          <span className={`text-[9px] px-1.5 py-0.5 rounded shrink-0 ${getSpecialtyBadgeClass(c.specialty)}`}>
                            {c.specialty}
                          </span>
                        </div>
                        <p className="text-xs text-[#e1e2ec] font-medium leading-tight">{c.title}</p>
                        <p className="text-[11px] text-[#c2c6d6] leading-relaxed line-clamp-3">
                          {c.mainComplaint} – {c.complaintDetail}
                        </p>
                      </button>
                    ))
                  )}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
