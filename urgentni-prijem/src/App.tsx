import React, { useState } from "react";
import { GameSession } from "./types";
import WelcomeScreen from "./components/WelcomeScreen";
import EkgQuiz from "./components/EkgQuiz";
import TriageDashboard from "./components/TriageDashboard";
import Workspace from "./components/Workspace";
import DispositionScreen from "./components/DispositionScreen";
import ProgressDashboard from "./components/ProgressDashboard";
import FocusReviewSession from "./components/FocusReviewSession";
import { useProgress } from "./context/ProgressContext";
import { Activity, Heart, Clock } from "lucide-react";

export default function App() {
  const { logCaseCompletion } = useProgress();
  const [view, setView] = useState<"welcome" | "triage" | "workspace" | "disposition" | "ekg-quiz" | "dashboard" | "focus-review">("welcome");
  const [session, setSession] = useState<GameSession | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [consultingLoading, setConsultingLoading] = useState<boolean>(false);
  const [closingLoading, setClosingLoading] = useState<boolean>(false);

  const startNewGame = async (difficulty: string) => {
    setLoading(true);
    try {
      const res = await fetch("/api/case/init", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ difficulty })
      });
      if (!res.ok) throw new Error("Nepodařilo se inicializovat hru");
      const data: GameSession = await res.json();
      setSession(data);
      setView("triage");
    } catch (err) {
      console.error(err);
      alert("Chyba při zakládání pacienta. Zkuste to prosím znovu.");
    } finally {
      setLoading(false);
    }
  };

  const handleConfirmTriage = async (triageClass: string) => {
    if (!session) return;
    setLoading(true);
    try {
      const res = await fetch("/api/case/action", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          sessionId: session.sessionId,
          actionId: "confirm_triage",
          details: { triageClass }
        })
      });
      if (!res.ok) throw new Error("Chyba při triáži");
      const data: GameSession = await res.json();
      setSession(data);
      setView("workspace");
    } catch (err) {
      console.error(err);
      alert("Nepodařilo se uložit triáž.");
    } finally {
      setLoading(false);
    }
  };

  const handleInstantIntervention = async (actionId: string, details: any) => {
    if (!session) return;
    try {
      const res = await fetch("/api/case/action", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          sessionId: session.sessionId,
          actionId,
          details
        })
      });
      if (res.ok) {
        const data: GameSession = await res.json();
        setSession(data);
      }
    } catch (err) {
      console.error("Instant intervention error:", err);
    }
  };

  const handleAction = async (actionData: { actionId?: string; actionText?: string; details?: any }) => {
    if (!session) return;
    try {
      const res = await fetch("/api/case/action", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          sessionId: session.sessionId,
          ...actionData
        })
      });
      if (!res.ok) throw new Error("Akce selhala");
      const data: GameSession = await res.json();
      setSession(data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleConsult = async (specialty: string, message: string) => {
    if (!session) return;
    setConsultingLoading(true);
    try {
      const res = await fetch("/api/case/consult", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          sessionId: session.sessionId,
          specialty,
          message
        })
      });
      if (!res.ok) throw new Error("Konzultace selhala");
      const data: GameSession = await res.json();
      setSession(data);
    } catch (err) {
      console.error(err);
      alert("Nepodařilo se odeslat dotaz konziliáři.");
    } finally {
      setConsultingLoading(false);
    }
  };

  const handleCloseCase = async (closeDetails: {
    disposition: string;
    diagnosisCode: string;
    epikriza: string;
    checklist: string[];
  }) => {
    if (!session) return;
    setClosingLoading(true);
    try {
      const res = await fetch("/api/case/close", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          sessionId: session.sessionId,
          ...closeDetails
        })
      });
      if (!res.ok) throw new Error("Chyba při uzavírání");
      const data: GameSession = await res.json();
      setSession(data);

      // Parse score from debriefing and log case completion
      let score = 75; // Default fallback score
      if (data.debriefing) {
        const match = data.debriefing.match(/hodnocení\s*:?\s*(\*+)?\s*([0-9]+\s*%)/i);
        if (match && match[2]) {
          score = parseInt(match[2].trim().replace("%", ""), 10) || 75;
        } else {
          const parts = data.debriefing.split(/hodnocení:/i);
          if (parts.length > 1) {
            const parsedVal = parseInt(parts[1].trim().split("\n")[0].replace(/[^0-9]/g, ""), 10);
            if (!isNaN(parsedVal)) score = parsedVal;
          }
        }
      }
      logCaseCompletion(data.caseId, data.patient.name, "", score, data.elapsedTime);
    } catch (err) {
      console.error(err);
      alert("Nepodařilo se vygenerovat hodnocení případu.");
    } finally {
      setClosingLoading(false);
    }
  };

  const handleReset = () => {
    setSession(null);
    setView("welcome");
  };

  const getDifficultyTitle = (level: number) => {
    if (level === 1) return "Úroveň 1: Nízká";
    if (level === 2) return "Úroveň 2: Střední";
    return "Úroveň 3: Vysoká";
  };

  return (
    <div className="min-h-screen bg-[#10131a] text-[#e1e2ec] flex flex-col font-sans">
      {/* Dynamic Header Navbar */}
      <header className="bg-[#191b23] border-b border-[#424754] px-6 py-4 flex justify-between items-center shrink-0">
        <div className="flex items-center gap-3">
          <Activity className="w-6 h-6 text-[#adc6ff] animate-pulse" />
          <div>
            <h1 className="font-black text-lg text-white uppercase tracking-wider flex items-center gap-1.5">
              Urgentní příjem <span className="text-[10px] bg-red-600 px-1.5 py-0.5 rounded text-white font-mono uppercase tracking-widest">Klinický simulátor</span>
            </h1>
            <p className="text-[10px] text-[#c2c6d6] uppercase tracking-widest font-bold">
              Emergency Decision Support & Learning Engine
            </p>
          </div>
        </div>

        {session && (
          <div className="flex items-center gap-6">
            <div className="hidden sm:flex flex-col text-right">
              <span className="text-xs text-[#c2c6d6] uppercase font-bold">Obtížnost</span>
              <span className={`text-xs font-black uppercase ${session.level === 3 ? "text-red-400" : session.level === 2 ? "text-orange-400" : "text-green-400"}`}>
                {getDifficultyTitle(session.level)}
              </span>
            </div>

            <div className="flex items-center gap-2 bg-[#272a31] border border-[#424754] px-4 py-2 rounded-xl">
              <Clock className="w-4 h-4 text-[#adc6ff]" />
              <div className="flex flex-col">
                <span className="text-[9px] text-[#c2c6d6] uppercase font-semibold">Čas na lůžku</span>
                <span className="text-xs font-bold font-mono text-white">
                  {session.elapsedTime} min
                </span>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Main Viewport Container */}
      <main className="flex-1 p-6 overflow-y-auto">
        {loading && (
          <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center backdrop-blur-sm">
            <div className="bg-[#1d2027] p-8 rounded-2xl border border-[#424754] text-center space-y-4 shadow-2xl">
              <div className="w-12 h-12 border-4 border-[#4d8eff] border-t-transparent rounded-full animate-spin mx-auto" />
              <p className="text-sm font-bold text-[#adc6ff]">Inicializace pacienta...</p>
            </div>
          </div>
        )}

        {view === "welcome" && (
          <WelcomeScreen 
            onStartGame={startNewGame} 
            loading={loading} 
            onLaunchEkgQuiz={() => setView("ekg-quiz")} 
            onLaunchDashboard={() => setView("dashboard")}
            onLaunchFocusReview={() => setView("focus-review")}
          />
        )}

        {view === "ekg-quiz" && (
          <EkgQuiz standalone={true} onClose={() => setView("welcome")} />
        )}

        {view === "dashboard" && (
          <ProgressDashboard onClose={() => setView("welcome")} />
        )}

        {view === "focus-review" && (
          <FocusReviewSession onClose={() => setView("welcome")} />
        )}

        {view === "triage" && session && (
          <TriageDashboard
            session={session}
            onConfirmTriage={handleConfirmTriage}
            onInstantIntervention={handleInstantIntervention}
            onActivateTrauma={() => handleInstantIntervention("activate_trauma", {})}
          />
        )}

        {view === "workspace" && session && (
          <Workspace
            session={session}
            onAction={handleAction}
            onConsult={handleConsult}
            onAdvanceToDisposition={() => setView("disposition")}
            consultingLoading={consultingLoading}
          />
        )}

        {view === "disposition" && session && (
          <DispositionScreen
            session={session}
            onCloseCase={handleCloseCase}
            onReset={handleReset}
            closingLoading={closingLoading}
          />
        )}
      </main>
    </div>
  );
}

