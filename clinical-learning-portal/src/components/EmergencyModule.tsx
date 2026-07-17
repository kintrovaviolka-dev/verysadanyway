import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Activity,
  Heart,
  User,
  CheckCircle,
  AlertCircle,
  ChevronRight,
  ArrowLeft,
  Cpu,
  Play,
  RotateCcw,
  Info,
  Clock,
  Zap
} from 'lucide-react';
import { EMERGENCY_ALGORITHMS } from '../data/algorithms';
import { EMERGENCY_ALGORITHMS_CS } from '../data/algorithms_cs';
import { EmergencyAlgorithm, AlgorithmStep, AIScenarioState, AIEvaluationResponse } from '../types';
import { useLanguage } from '../context/LanguageContext';

export default function EmergencyModule() {
  const { language } = useLanguage();

  // Select localized data
  const algorithmsData = language === 'cs' ? EMERGENCY_ALGORITHMS_CS : EMERGENCY_ALGORITHMS;

  const [mode, setMode] = useState<'menu' | 'static' | 'ai'>('menu');

  // Static Algorithm Resuscitation State
  const [selectedAlgo, setSelectedAlgorithm] = useState<EmergencyAlgorithm | null>(null);
  const [currentStepId, setCurrentStepId] = useState<string>('');
  const [decisionHistory, setDecisionHistory] = useState<{ stepId: string; choiceText: string; rationale: string; isCorrect?: boolean }[]>([]);
  const [activeRationale, setActiveRationale] = useState<string | null>(null);
  const [nextStepTarget, setNextStepId] = useState<string | null>(null);

  // AI Resuscitation State
  const [aiTopic, setAiTopic] = useState('Severe Septic Shock');
  const [aiDifficulty, setAiDifficulty] = useState<'Easy' | 'Medium' | 'Hard'>('Medium');
  const [aiPatientType, setAiPatientType] = useState<'Adult' | 'Pediatric' | 'Geriatric'>('Adult');
  const [isAiLoading, setIsAiLoading] = useState(false);
  const [aiConfigError, setAiConfigError] = useState<string | null>(null);

  const [aiScenario, setAiScenario] = useState<AIScenarioState | null>(null);
  const [aiHistory, setAiHistory] = useState<{ role: 'user' | 'assistant' | 'system'; text: string; vitals?: any }[]>([]);
  const [aiFeedback, setAiFeedback] = useState<string | null>(null);
  const [aiIsTerminated, setAiIsTerminated] = useState(false);
  const [aiIsSuccess, setAiIsSuccess] = useState(false);

  // Quick suggestions for AI scenarios with bilingual support
  const aiTemplates = [
    { title_en: 'Traumatic Hemorrhagic Shock', title_cs: 'Traumatický hemoragický šok', type: 'Adult', diff: 'Hard' },
    { title_en: 'Pediatric Status Asthmaticus', title_cs: 'Pediatrický status asthmaticus', type: 'Pediatric', diff: 'Medium' },
    { title_en: 'Tricyclic Antidepressant Overdose', title_cs: 'Předávkování tricyklickými antidepresivy', type: 'Adult', diff: 'Hard' },
    { title_en: 'Severe Hyperkalemia (K+ 7.2) with Bradycardia', title_cs: 'Závažná hyperkalémie (K+ 7.2) s bradykardií', type: 'Geriatric', diff: 'Medium' }
  ];

  // Set default localized topic
  useEffect(() => {
    if (language === 'cs') {
      setAiTopic('Těžký septický šok');
    } else {
      setAiTopic('Severe Septic Shock');
    }
  }, [language]);

  // Load static algorithm
  const startStaticSimulation = (algo: EmergencyAlgorithm) => {
    setSelectedAlgorithm(algo);
    setCurrentStepId(algo.startStepId);
    setDecisionHistory([]);
    setActiveRationale(null);
    setNextStepId(null);
    setMode('static');
  };

  const handleStaticChoice = (choice: { text: string; nextStepId: string; rationale: string; isCorrect?: boolean }) => {
    setActiveRationale(choice.rationale);
    setNextStepId(choice.nextStepId);

    setDecisionHistory(prev => [
      ...prev,
      {
        stepId: currentStepId,
        choiceText: choice.text,
        rationale: choice.rationale,
        isCorrect: choice.isCorrect
      }
    ]);
  };

  const proceedStaticStep = () => {
    if (nextStepTarget) {
      setCurrentStepId(nextStepTarget);
      setActiveRationale(null);
      setNextStepId(null);
    }
  };

  // Launch AI scenario using Express API
  const generateAIScenario = async (topicStr = aiTopic, typeStr = aiPatientType, diffStr = aiDifficulty) => {
    setIsAiLoading(true);
    setAiConfigError(null);
    setAiScenario(null);
    setAiFeedback(null);
    setAiIsTerminated(false);
    setAiIsSuccess(false);

    try {
      const response = await fetch('/api/gemini/generate-scenario', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          topic: topicStr,
          patientType: typeStr,
          difficulty: diffStr,
          language: language // Pass active language
        })
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || 'Failed to generate AI scenario.');
      }

      const data: AIScenarioState = await response.json();
      setAiScenario(data);
      setAiHistory([
        {
          role: 'system',
          text: language === 'cs'
            ? `ÚVODNÍ PREZENTACE: ${data.presentation}\n\nANAMNÉZA: ${data.background}`
            : `INITIAL PRESENTATION: ${data.presentation}\n\nBACKGROUND: ${data.background}`,
          vitals: data.vitals
        }
      ]);
    } catch (err: any) {
      console.error(err);
      if (err.message?.includes('GEMINI_API_KEY')) {
        setAiConfigError(
          language === 'cs'
            ? 'V sekci Nastavení chybí klíč GEMINI_API_KEY. Připojte prosím klíč k odemčení dynamického AI generování pacienta! Mezitím můžete procházet lokální offline postupy.'
            : 'GEMINI_API_KEY is not configured in Settings secrets. Please attach an API key to unleash dynamic AI patient generation! Meanwhile, you can run all of our offline pathways.'
        );
      } else {
        setAiConfigError(
          language === 'cs'
            ? err.message || 'Při připojování k AI serveru došlo k chybě.'
            : err.message || 'An error occurred while connecting to the AI server.'
        );
      }
    } finally {
      setIsAiLoading(false);
    }
  };

  // Submit AI simulation action
  const handleAIAction = async (actionText: string) => {
    if (!aiScenario) return;

    setIsAiLoading(true);
    setAiFeedback(null);

    // Prepare current history log
    const updatedHistory = [
      ...aiHistory,
      { role: 'user' as const, text: actionText }
    ];

    try {
      const response = await fetch('/api/gemini/evaluate-action', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          history: updatedHistory,
          actionTaken: actionText,
          difficulty: aiDifficulty,
          language: language // Pass active language
        })
      });

      if (!response.ok) {
        throw new Error('Failed to evaluate action on the server.');
      }

      const data: AIEvaluationResponse = await response.json();

      setAiFeedback(data.feedback);
      setAiIsTerminated(data.isTerminated);
      setAiIsSuccess(data.isSuccess);

      // Update simulation history log
      setAiHistory([
        ...updatedHistory,
        {
          role: 'assistant' as const,
          text: data.outcome,
          vitals: data.vitals
        }
      ]);

      // Update active state
      setAiScenario(prev => {
        if (!prev) return null;
        return {
          ...prev,
          presentation: data.outcome,
          vitals: data.vitals,
          actions: data.actions
        };
      });
    } catch (err: any) {
      console.error(err);
      setAiConfigError(
        language === 'cs'
          ? 'Chyba při vyhodnocování volby. Zkuste to prosím znovu.'
          : 'Error evaluating choice. Please try again.'
      );
    } finally {
      setIsAiLoading(false);
    }
  };

  const currentStaticStep: AlgorithmStep | undefined = selectedAlgo?.steps[currentStepId];

  return (
    <div className="flex flex-col gap-6" id="emergency-module-root">
      {/* Module Title Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-white/10 pb-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-white font-sans flex items-center gap-2">
            <Activity className="w-6 h-6 text-red-500 animate-pulse" />
            {language === 'cs' ? 'Simulační aréna urgentní medicíny' : 'Emergency Medicine Resuscitation Arena'}
          </h1>
          <p className="text-sm text-slate-400 font-sans">
            {language === 'cs'
              ? 'Procvičujte doporučené postupy ("guidelines") akutní resuscitace, procházejte interaktivní rozhodovací algoritmy a získejte okamžitou AI zpětnou vazbu.'
              : 'Practice acute life-support guidelines, run interactive algorithm scenarios, and get dynamic AI feedback.'}
          </p>
        </div>

        {mode !== 'menu' && (
          <button
            onClick={() => setMode('menu')}
            className="flex items-center gap-1.5 px-4 py-2 bg-white/10 hover:bg-white/20 text-slate-200 rounded-lg text-xs font-semibold font-sans transition-all mt-3 md:mt-0 border border-white/10 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            {language === 'cs' ? 'Ukončit simulaci a vrátit se do menu' : 'Exit Simulation to Menu'}
          </button>
        )}
      </div>

      {/* 1. SELECTION MENU */}
      {mode === 'menu' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Block: Guidelines-based pathways */}
          <div className="lg:col-span-6 flex flex-col gap-5">
            <div className="flex items-center gap-2 border-b border-white/10 pb-2">
              <Heart className="w-5 h-5 text-red-400" />
              <h2 className="text-lg font-bold text-white font-sans">
                {language === 'cs' ? 'Interaktivní klinické algoritmy' : 'Interactive Clinical Algorithms'}
              </h2>
            </div>
            <p className="text-xs text-slate-400 font-sans -mt-2">
              {language === 'cs'
                ? 'Procvičujte standardizované urgentní protokoly s deterministickým větvením rozhodovacích stromů.'
                : 'Practice validated emergency protocols with deterministic, high-fidelity branching choice trees.'}
            </p>

            <div className="flex flex-col gap-4 mt-1">
              {algorithmsData.map(algo => (
                <div
                  key={algo.id}
                  className="bg-white/5 border border-white/10 hover:border-red-500/30 rounded-xl p-5 shadow-sm hover:shadow-md transition-all flex flex-col justify-between backdrop-blur-xl"
                >
                  <div className="flex flex-col gap-1.5">
                    <div className="flex justify-between items-center">
                      <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-red-500/20 text-red-300 border border-red-500/30">
                        {algo.category === 'cardiac_arrest'
                          ? (language === 'cs' ? 'Resuscitace / ACLS' : 'Resuscitation / ACLS')
                          : (language === 'cs' ? 'Urgentní příjem' : 'ED Emergency')}
                      </span>
                      <span className="text-[11px] font-medium text-slate-400 font-mono">
                        {language === 'cs' ? 'Dostupné offline' : 'Offline Ready'}
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-white font-sans">{algo.title}</h3>
                    <p className="text-xs text-slate-300 font-sans leading-relaxed">{algo.shortDescription}</p>
                  </div>

                  <button
                    onClick={() => startStaticSimulation(algo)}
                    className="mt-4 w-full flex items-center justify-center gap-1.5 py-2 bg-red-500/10 hover:bg-red-500/20 text-red-300 hover:text-white border border-red-500/20 hover:border-red-400/50 font-bold rounded-lg text-xs tracking-wider transition-all cursor-pointer"
                  >
                    <Play className="w-3.5 h-3.5" />
                    {language === 'cs' ? 'Spustit simulaci protokolu' : 'Begin Protocol Simulation'}
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Right Block: Dynamic AI resuscitation sandbox */}
          <div className="lg:col-span-6 flex flex-col gap-5">
            <div className="flex items-center gap-2 border-b border-white/10 pb-2">
              <Cpu className="w-5 h-5 text-teal-400" />
              <h2 className="text-lg font-bold text-white font-sans">
                {language === 'cs' ? 'Dynamická AI resuscitace' : 'Dynamic AI Resuscitation Arena'}
              </h2>
            </div>
            <p className="text-xs text-slate-400 font-sans -mt-2">
              {language === 'cs'
                ? 'Běží na rozhraní Gemini API. Zadejte libovolnou klinickou stížnost a vytvořte kritický scénář pacienta.'
                : 'Powered by the Gemini 3.5 API. Choose any clinical complaint to spawn a custom high-acuity crisis.'}
            </p>

            <div className="bg-white/5 border border-white/10 rounded-xl p-6 shadow-sm flex flex-col gap-4 backdrop-blur-xl">
              <div className="flex flex-col gap-1.5 font-sans">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-wide">
                  {language === 'cs' ? 'Hlavní potíže / téma scénáře' : 'Chief Complaint / Scenario Topic'}
                </label>
                <input
                  type="text"
                  placeholder={
                    language === 'cs'
                      ? 'např. Pediatrické astma, předávkování tricyklickými antidepresivy, bodné poranění...'
                      : 'e.g. Pediatric Asthma, Tricyclic Overdose, Stab Wound...'
                  }
                  value={aiTopic}
                  onChange={e => setAiTopic(e.target.value)}
                  className="bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:border-teal-500/50 focus:bg-white/10 outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5 font-sans">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-wide">
                    {language === 'cs' ? 'Typ pacienta' : 'Patient Type'}
                  </label>
                  <select
                    value={aiPatientType}
                    onChange={e => setAiPatientType(e.target.value as any)}
                    className="bg-slate-900/90 border border-white/10 rounded-lg px-3 py-2 text-xs text-white outline-none focus:border-teal-500"
                  >
                    <option value="Adult">{language === 'cs' ? 'Dospělý (20-64)' : 'Adult (20-64)'}</option>
                    <option value="Pediatric">{language === 'cs' ? 'Dětský (batole/dítě)' : 'Pediatric (Toddler/Child)'}</option>
                    <option value="Geriatric">{language === 'cs' ? 'Geriatrický (křehký 75+)' : 'Geriatric (Frail 75+)'}</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1.5 font-sans">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-wide">
                    {language === 'cs' ? 'Klinická obtížnost' : 'Clinical Difficulty'}
                  </label>
                  <select
                    value={aiDifficulty}
                    onChange={e => setAiDifficulty(e.target.value as any)}
                    className="bg-slate-900/90 border border-white/10 rounded-lg px-3 py-2 text-xs text-white outline-none focus:border-teal-500"
                  >
                    <option value="Easy">{language === 'cs' ? 'Lehká (jasné indikace)' : 'Easy (Clear indicators)'}</option>
                    <option value="Medium">{language === 'cs' ? 'Střední (drobné diagnostické pasti)' : 'Medium (Minor diagnostic traps)'}</option>
                    <option value="Hard">{language === 'cs' ? 'Těžká (vysoká nestabilita a "pitfalls")' : 'Hard (Severe instability & pitfalls)'}</option>
                  </select>
                </div>
              </div>

              <button
                onClick={() => {
                  setMode('ai');
                  generateAIScenario();
                }}
                className="w-full flex items-center justify-center gap-1.5 py-3 bg-teal-500/20 hover:bg-teal-500/30 text-teal-300 hover:text-white border border-teal-500/20 hover:border-teal-400/50 font-bold rounded-lg text-xs tracking-wider transition-all shadow-sm cursor-pointer"
              >
                <Zap className="w-4 h-4 text-yellow-300" />
                {language === 'cs' ? 'Spustit AI simulaci případu' : 'Initialize AI Emergency Simulation'}
              </button>

              <div className="border-t border-white/10 pt-3">
                <span className="text-[10px] uppercase font-bold text-slate-400 block mb-2 tracking-wide">
                  {language === 'cs' ? 'Navržené profily případů:' : 'Suggested Case Profiles:'}
                </span>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {aiTemplates.map((tpl, i) => {
                    const title = language === 'cs' ? tpl.title_cs : tpl.title_en;
                    const diffLabel = language === 'cs'
                      ? tpl.diff === 'Easy' ? 'Lehká' : tpl.diff === 'Medium' ? 'Střední' : 'Těžká'
                      : tpl.diff;
                    return (
                      <button
                        key={i}
                        onClick={() => {
                          setAiTopic(tpl.title_en);
                          setAiPatientType(tpl.type as any);
                          setAiDifficulty(tpl.diff as any);
                          setMode('ai');
                          generateAIScenario(tpl.title_en, tpl.type, tpl.diff);
                        }}
                        className="text-left px-2.5 py-1.5 rounded-lg border border-white/10 hover:border-teal-500/50 bg-white/5 text-[11px] text-slate-300 hover:text-white hover:bg-white/10 transition-colors truncate font-sans font-medium cursor-pointer"
                      >
                        💡 {title} ({diffLabel})
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 2. OFFLINE STATIC PATHWAYS ENGINE */}
      {mode === 'static' && selectedAlgo && currentStaticStep && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 font-sans">
          {/* Left panel: Clinical vignette, Vitals monitor & Patient State */}
          <div className="lg:col-span-8 flex flex-col gap-6">
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 shadow-sm backdrop-blur-xl">
              <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <User className="w-5 h-5 text-red-400" />
                  <span className="text-sm font-bold text-white uppercase tracking-wide">
                    {language === 'cs' ? `${selectedAlgo.title} - Aktivní stav pacienta` : `${selectedAlgo.title} - Active Airway Status`}
                  </span>
                </div>
                <span className="text-xs px-2 py-0.5 rounded bg-red-500/20 text-red-300 border border-red-500/30 font-mono font-bold uppercase">
                  {currentStaticStep.type === 'decision'
                    ? (language === 'cs' ? 'Čeká se na rozhodnutí' : 'Awaiting Action')
                    : (language === 'cs' ? 'Scénář dokončen' : 'Scenario Completed')}
                </span>
              </div>

              {/* Vitals Bedside monitor UI */}
              {currentStaticStep.vitals && (
                <div className="bg-slate-950/80 border border-white/10 rounded-xl p-5 mb-5 font-mono text-white flex flex-col gap-4 shadow-inner backdrop-blur-xl">
                  <div className="flex justify-between items-center text-[10px] text-slate-400 border-b border-white/5 pb-2">
                    <span className="flex items-center gap-1.5 uppercase">
                      <span className="w-2 h-2 rounded-full bg-red-500 animate-ping"></span>
                      {language === 'cs' ? 'Lůžkový fyziologický monitor ("telemetry monitor")' : 'Bedside Physiological telemetry monitor'}
                    </span>
                    <span>{language === 'cs' ? 'RYCHLOST POSUVU: 25 mm/s' : 'SWEEP SPEED: 25 mm/s'}</span>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="bg-white/5 p-3 rounded-lg border border-white/5 flex flex-col">
                      <span className="text-[10px] text-green-400 font-bold uppercase tracking-wider">
                        {language === 'cs' ? 'Srdeční frekvence (SF)' : 'Heart Rate (HR)'}
                      </span>
                      <div className="flex items-baseline gap-1 mt-1 text-green-400">
                        <span className="text-3xl font-bold tracking-tight">
                          {currentStaticStep.vitals.hr === 0 ? '0' : currentStaticStep.vitals.hr || '--'}
                        </span>
                        <span className="text-xs">bpm</span>
                      </div>
                    </div>

                    <div className="bg-white/5 p-3 rounded-lg border border-white/5 flex flex-col">
                      <span className="text-[10px] text-white font-bold uppercase tracking-wider">
                        {language === 'cs' ? 'Klevní tlak (TK)' : 'Blood Pressure (BP)'}
                      </span>
                      <div className="flex items-baseline gap-1 mt-1 text-white">
                        <span className="text-2xl font-bold tracking-tight">
                          {currentStaticStep.vitals.bp || '0/0'}
                        </span>
                        <span className="text-[10px] uppercase text-slate-400">mmHg</span>
                      </div>
                    </div>

                    <div className="bg-white/5 p-3 rounded-lg border border-white/5 flex flex-col">
                      <span className="text-[10px] text-blue-400 font-bold uppercase tracking-wider">
                        {language === 'cs' ? 'Saturace kyslíkem (SpO₂)' : 'SpO₂ Oxygen'}
                      </span>
                      <div className="flex items-baseline gap-1 mt-1 text-blue-400">
                        <span className="text-3xl font-bold tracking-tight">
                          {currentStaticStep.vitals.spo2 === 0 ? '0' : currentStaticStep.vitals.spo2 || '--'}
                        </span>
                        <span className="text-xs">%</span>
                      </div>
                    </div>

                    <div className="bg-white/5 p-3 rounded-lg border border-white/5 flex flex-col">
                      <span className="text-[10px] text-yellow-400 font-bold uppercase tracking-wider">
                        {language === 'cs' ? 'Dechová frekvence (DF)' : 'Respiration (RR)'}
                      </span>
                      <div className="flex items-baseline gap-1 mt-1 text-yellow-400">
                        <span className="text-3xl font-bold tracking-tight">
                          {currentStaticStep.vitals.rr || '--'}
                        </span>
                        <span className="text-xs">/min</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-slate-950/40 px-3 py-2 rounded border border-white/5 flex items-center justify-between text-xs mt-1">
                    <span className="text-slate-400 font-semibold uppercase tracking-wider text-[10px]">
                      {language === 'cs' ? 'Srdeční rytmus:' : 'Cardiac Rhythm:'}
                    </span>
                    <span className="font-bold text-red-400 uppercase tracking-widest">
                      {currentStaticStep.vitals.rhythm || 'Flatline'}
                    </span>
                  </div>
                </div>
              )}

              {/* Vignette narrative step text */}
              <div className="flex flex-col gap-3">
                <h3 className="text-lg font-bold text-white font-sans border-b border-white/10 pb-2">
                  {currentStaticStep.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-200 whitespace-pre-line bg-white/5 p-4 rounded-xl border border-white/10 font-sans">
                  {currentStaticStep.description}
                </p>

                {currentStaticStep.criticalNote && (
                  <div className="bg-yellow-500/10 border-l-4 border-yellow-500 p-3.5 rounded-r-lg text-xs leading-relaxed text-yellow-200 italic mt-2 border-y border-r border-yellow-500/20">
                    <strong>{language === 'cs' ? 'Kritická poznámka:' : 'Critical Note:'}</strong> "{currentStaticStep.criticalNote}"
                  </div>
                )}
              </div>

              {/* Active branching choices */}
              {currentStaticStep.choices && !activeRationale && (
                <div className="flex flex-col gap-3 mt-6">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">
                    {language === 'cs' ? 'Udělejte klinické rozhodnutí:' : 'Make Your Clinical Assessment Decision:'}
                  </span>
                  {currentStaticStep.choices.map((choice, i) => (
                    <button
                      key={i}
                      onClick={() => handleStaticChoice(choice)}
                      className="w-full text-left p-4 bg-white/5 border border-white/10 hover:border-red-500/50 hover:bg-white/10 text-sm font-semibold rounded-xl text-slate-200 hover:text-white transition-all font-sans flex justify-between items-center group shadow-sm hover:shadow cursor-pointer"
                    >
                      <span className="pr-4">{choice.text}</span>
                      <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-red-400 shrink-0" />
                    </button>
                  ))}
                </div>
              )}

              {/* Step rational evaluation summary */}
              <AnimatePresence>
                {activeRationale && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-6 border border-white/10 rounded-xl p-5 bg-white/5 backdrop-blur-xl"
                  >
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-red-500/10 rounded-lg text-red-400 shrink-0">
                        <Info className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-red-300 uppercase tracking-wide">
                          {language === 'cs' ? 'Fyziologické zdůvodnění odpovědi:' : 'Physiological Rationale Response:'}
                        </h4>
                        <p className="text-xs text-slate-300 leading-relaxed mt-1 font-sans">
                          {activeRationale}
                        </p>
                      </div>
                    </div>

                    <button
                      onClick={proceedStaticStep}
                      className="mt-5 w-full py-2.5 bg-red-500/20 hover:bg-red-500/30 border border-red-500/30 hover:border-red-400 text-red-300 hover:text-white font-bold rounded-lg text-xs tracking-wider transition-all shadow-sm flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      {language === 'cs' ? 'Pokračovat na další krok' : 'Proceed to next step'}
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Complete state */}
              {(currentStaticStep.type === 'outcome_success' || currentStaticStep.type === 'outcome_failure') && (
                <div className="mt-8 text-center bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-xl">
                  {currentStaticStep.type === 'outcome_success' ? (
                    <>
                      <div className="w-14 h-14 bg-green-500/20 border border-green-500/30 rounded-full flex items-center justify-center text-green-400 mx-auto mb-3">
                        <CheckCircle className="w-8 h-8" />
                      </div>
                      <h3 className="text-xl font-bold text-green-300">
                        {language === 'cs' ? 'Stabilizace úspěšná!' : 'Stabilization Successful!'}
                      </h3>
                      <p className="text-xs text-slate-400 font-sans mt-2">
                        {language === 'cs'
                          ? 'Úspěšně jste postupovali podle doporučení pro vyřešení tohoto kritického stavu.'
                          : 'You successfully navigated the guidelines to resolve this emergency event.'}
                      </p>
                    </>
                  ) : (
                    <>
                      <div className="w-14 h-14 bg-red-500/20 border border-red-500/30 rounded-full flex items-center justify-center text-red-400 mx-auto mb-3">
                        <AlertCircle className="w-8 h-8" />
                      </div>
                      <h3 className="text-xl font-bold text-red-300">
                        {language === 'cs' ? 'Resuscitace selhala!' : 'Resuscitation Failed!'}
                      </h3>
                      <p className="text-xs text-slate-400 font-sans mt-2">
                        {language === 'cs'
                          ? 'Stav pacienta se zhoršil v důsledku prodlení nebo nesprávné léčby.'
                          : 'The patient deteriorated due to excessive delay or unguided therapy administration.'}
                      </p>
                    </>
                  )}

                  <div className="flex gap-3 justify-center mt-6">
                    <button
                      onClick={() => startStaticSimulation(selectedAlgo)}
                      className="px-5 py-2 bg-red-500/20 hover:bg-red-500/30 border border-red-500/30 text-red-300 hover:text-white font-bold text-xs rounded-lg shadow-sm transition-all flex items-center gap-1.5 cursor-pointer"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      {language === 'cs' ? 'Restartovat případ' : 'Restart Case'}
                    </button>
                    <button
                      onClick={() => setMode('menu')}
                      className="px-5 py-2 bg-white/10 border border-white/15 text-slate-300 hover:bg-white/20 hover:text-white font-bold text-xs rounded-lg transition-all cursor-pointer"
                    >
                      {language === 'cs' ? 'Vybrat jiný algoritmus' : 'Choose Different Algorithm'}
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right panel: Timeline & Decision Log */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <div className="bg-white/5 border border-white/10 rounded-xl p-5 shadow-sm backdrop-blur-xl">
              <h3 className="text-sm font-bold text-white border-b border-white/10 pb-2 mb-3 tracking-wide uppercase">
                {language === 'cs' ? 'Záznam průběhu resuscitace' : 'Resuscitation Audit Log'}
              </h3>
              {decisionHistory.length === 0 ? (
                <p className="text-xs text-slate-400 italic">
                  {language === 'cs'
                    ? 'Zatím nebyly zaznamenány žádné kroky. Časová osa bude sledovat vaše volby.'
                    : 'No decisions logged yet. The timeline will track your decisions.'}
                </p>
              ) : (
                <div className="flex flex-col gap-3 max-h-[420px] overflow-y-auto pr-1">
                  {decisionHistory.map((log, idx) => (
                    <div
                      key={idx}
                      className={`text-xs border-l-2 p-2.5 rounded-r flex flex-col gap-1 ${
                        log.isCorrect ? 'border-green-400 bg-green-500/5' : 'border-red-400 bg-red-500/5'
                      }`}
                    >
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block font-sans">
                        {language === 'cs' ? `Krok rozhodnutí ${idx + 1}` : `Decision Step ${idx + 1}`}
                      </span>
                      <strong className="text-white block font-medium">"{log.choiceText}"</strong>
                      <p className="text-[11px] text-slate-300 italic font-sans leading-snug">
                        {log.rationale.substring(0, 110)}...
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* 3. DYNAMIC AI RESUSCITATION SANDBOX (Express + Gemini API) */}
      {mode === 'ai' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 font-sans" id="ai-resus-arena">
          {/* Main workspace */}
          <div className="lg:col-span-8 flex flex-col gap-6">
            {/* Show configuration error or API missing notice */}
            {aiConfigError && (
              <div className="bg-teal-500/10 border border-teal-500/20 p-5 rounded-xl flex items-start gap-4 backdrop-blur-md">
                <AlertCircle className="w-8 h-8 text-teal-400 shrink-0" />
                <div className="flex flex-col gap-2">
                  <h4 className="text-sm font-bold text-teal-300 uppercase tracking-wider">
                    {language === 'cs' ? 'Upozornění k AI integraci' : 'AI Integration Notice'}
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed font-sans">
                    {aiConfigError}
                  </p>
                  <div className="flex gap-3 mt-1">
                    <button
                      onClick={() => setMode('menu')}
                      className="px-4 py-1.5 bg-teal-500/20 hover:bg-teal-500/30 text-teal-300 border border-teal-500/30 font-bold rounded-lg text-xs transition-all cursor-pointer"
                    >
                      {language === 'cs' ? 'Procvičovat lokální algoritmy' : 'Practice Local Algorithms'}
                    </button>
                    <button
                      onClick={() => {
                        setAiConfigError(null);
                        generateAIScenario();
                      }}
                      className="px-4 py-1.5 bg-white/10 border border-white/15 text-slate-300 hover:bg-white/20 hover:text-white font-bold rounded-lg text-xs transition-all cursor-pointer"
                    >
                      {language === 'cs' ? 'Zkusit znovu' : 'Retry Connection'}
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* AI Patient Bedside Vitals Monitor */}
            {aiScenario && (
              <div className="bg-slate-950/80 border border-white/10 rounded-xl p-5 font-mono text-white flex flex-col gap-4 shadow-inner backdrop-blur-xl">
                <div className="flex justify-between items-center text-[10px] text-teal-400 border-b border-white/10 pb-2">
                  <span className="flex items-center gap-1.5 uppercase font-semibold">
                    <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse"></span>
                    {language === 'cs' ? `AI dynamická telemetrie: ${aiScenario.title}` : `AI Dynamic Telemetry: ${aiScenario.title}`}
                  </span>
                  <span>{language === 'cs' ? 'REŽIM: KONTINUÁLNÍ ABG/EKG' : 'MODE: CONTINUOUS ABG/ECG'}</span>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                  <div className="bg-white/5 p-2.5 rounded border border-white/5 flex flex-col">
                    <span className="text-[9px] text-green-400 font-bold uppercase tracking-wider">
                      {language === 'cs' ? 'EKG Srdeční frekvence' : 'ECG Heart Rate'}
                    </span>
                    <div className="flex items-baseline gap-1 mt-0.5 text-green-400">
                      <span className="text-2xl font-bold tracking-tight">{aiScenario.vitals.hr || '--'}</span>
                      <span className="text-[9px]">BPM</span>
                    </div>
                  </div>

                  <div className="bg-white/5 p-2.5 rounded border border-white/5 flex flex-col">
                    <span className="text-[9px] text-white font-bold uppercase tracking-wider">
                      {language === 'cs' ? 'Arteriální krevní tlak' : 'Arterial BP'}
                    </span>
                    <div className="flex items-baseline gap-1 mt-0.5 text-white">
                      <span className="text-xl font-bold tracking-tight">{aiScenario.vitals.bp || '0/0'}</span>
                      <span className="text-[8px]">mmHg</span>
                    </div>
                  </div>

                  <div className="bg-white/5 p-2.5 rounded border border-white/5 flex flex-col">
                    <span className="text-[9px] text-blue-400 font-bold uppercase tracking-wider">
                      {language === 'cs' ? 'Saturace SpO₂' : 'Pulse SpO₂'}
                    </span>
                    <div className="flex items-baseline gap-1 mt-0.5 text-blue-400">
                      <span className="text-2xl font-bold tracking-tight">{aiScenario.vitals.spo2 || '--'}</span>
                      <span className="text-[9px]">%</span>
                    </div>
                  </div>

                  <div className="bg-white/5 p-2.5 rounded border border-white/5 flex flex-col">
                    <span className="text-[9px] text-yellow-400 font-bold uppercase tracking-wider">
                      {language === 'cs' ? 'Dechová frekvence' : 'Respiration (RR)'}
                    </span>
                    <div className="flex items-baseline gap-1 mt-0.5 text-yellow-400">
                      <span className="text-2xl font-bold tracking-tight">{aiScenario.vitals.rr || '--'}</span>
                      <span className="text-[9px]">/min</span>
                    </div>
                  </div>

                  <div className="bg-white/5 p-2.5 rounded border border-white/5 flex flex-col">
                    <span className="text-[9px] text-red-400 font-bold uppercase tracking-wider">
                      {language === 'cs' ? 'Tělesná teplota' : 'Core Temp'}
                    </span>
                    <div className="flex items-baseline gap-1 mt-0.5 text-red-400">
                      <span className="text-2xl font-bold tracking-tight">{aiScenario.vitals.temp || '--'}</span>
                      <span className="text-[9px]">°C</span>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-950/40 px-3 py-1.5 rounded border border-white/5 flex items-center justify-between text-xs font-semibold">
                  <span className="text-slate-400 text-[10px] uppercase">
                    {language === 'cs' ? 'Analýza rytmu:' : 'Rhythm Analysis:'}
                  </span>
                  <span className="text-red-400 uppercase tracking-widest">{aiScenario.vitals.rhythm || 'Undifferentiated Tachycardia'}</span>
                </div>
              </div>
            )}

            {/* AI Loading State */}
            {isAiLoading && (
              <div className="flex flex-col items-center justify-center py-16 bg-white/5 border border-white/10 rounded-xl shadow-sm gap-4 backdrop-blur-xl">
                <div className="w-10 h-10 border-4 border-teal-500/20 border-t-teal-400 rounded-full animate-spin"></div>
                <div className="text-center">
                  <p className="text-sm font-semibold text-white font-sans">
                    {language === 'cs' ? 'AI provádí klinické hodnocení...' : 'AI is running clinical evaluations...'}
                  </p>
                  <p className="text-xs text-slate-400 font-sans mt-1">
                    {language === 'cs' ? 'Generování fyziologických reakcí a kritiky.' : 'Generating physiological responses & critiques.'}
                  </p>
                </div>
              </div>
            )}

            {/* Scenario Presentation block */}
            {aiScenario && !isAiLoading && (
              <div className="bg-white/5 border border-white/10 rounded-xl p-6 shadow-sm flex flex-col gap-4 backdrop-blur-xl">
                <div className="border-b border-white/10 pb-3">
                  <span className="text-[10px] uppercase font-bold bg-teal-500/10 border border-teal-500/20 text-teal-300 px-2 py-0.5 rounded">
                    {language === 'cs' ? 'Aktivní AI případ urgentní resuscitace' : 'Active AI Resus Case'}
                  </span>
                  <h3 className="text-lg font-bold text-white font-sans mt-2">{aiScenario.title}</h3>
                </div>

                <div className="flex flex-col gap-3 font-sans leading-relaxed">
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wide">
                      {language === 'cs' ? 'Prezentace pacienta:' : 'Patient Presentation:'}
                    </h4>
                    <p className="text-sm text-slate-200 bg-white/5 border border-white/10 p-4 rounded-xl mt-1.5">
                      {aiScenario.presentation}
                    </p>
                  </div>

                  {aiScenario.background && (
                    <div className="mt-1">
                      <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wide">
                        {language === 'cs' ? 'Anamnéza / známé alergie:' : 'Reported Background / Allergies:'}
                      </h4>
                      <p className="text-xs text-slate-300 bg-white/5 border border-white/10 p-3 rounded-lg mt-1 font-sans italic">
                        {aiScenario.background}
                      </p>
                    </div>
                  )}
                </div>

                {/* Displaying Choices */}
                {!aiIsTerminated && aiScenario.actions && (
                  <div className="flex flex-col gap-3 mt-4">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">
                      {language === 'cs' ? 'Vyberte další léčebný zásah:' : 'Select Next Bedside Action:'}
                    </span>
                    {aiScenario.actions.map((action, i) => (
                      <button
                        key={i}
                        onClick={() => handleAIAction(action)}
                        className="w-full text-left p-4 bg-white/5 border border-white/10 hover:border-teal-500/50 hover:bg-white/10 text-sm font-semibold rounded-xl text-slate-200 hover:text-white transition-all font-sans flex justify-between items-center group shadow-sm hover:shadow cursor-pointer"
                      >
                        <span className="pr-4">{action}</span>
                        <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-teal-300 shrink-0" />
                      </button>
                    ))}
                  </div>
                )}

                {/* Educational feedback for last choice */}
                {aiFeedback && (
                  <div className="bg-teal-500/10 border border-teal-500/20 p-4 rounded-xl text-xs leading-relaxed text-slate-300 mt-2">
                    <strong className="text-teal-300 text-[13px] font-bold block mb-1">
                      {language === 'cs' ? '👨‍⚕️ Hodnocení klinického zkoušejícího:' : '👨‍⚕️ Clinical Examiner Feedback:'}
                    </strong>
                    {aiFeedback}
                  </div>
                )}

                {/* Scenario Terminated */}
                {aiIsTerminated && (
                  <div className="mt-6 text-center bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-xl">
                    {aiIsSuccess ? (
                      <>
                        <div className="w-14 h-14 bg-green-500/20 border border-green-500/30 rounded-full flex items-center justify-center text-green-400 mx-auto mb-3">
                          <CheckCircle className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold text-green-300">
                          {language === 'cs' ? 'Stabilizace úspěšná!' : 'Stabilization Successful!'}
                        </h3>
                        <p className="text-xs text-slate-400 font-sans mt-2">
                          {language === 'cs'
                            ? 'Vynikající sekvence zásahů. Úspěšně jste stabilizovali pacienta.'
                            : 'Excellent clinical sequencing. You successfully stabilized the patient.'}
                        </p>
                      </>
                    ) : (
                      <>
                        <div className="w-14 h-14 bg-red-500/20 border border-red-500/30 rounded-full flex items-center justify-center text-red-400 mx-auto mb-3">
                          <AlertCircle className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold text-red-300">
                          {language === 'cs' ? 'Resuscitace neúspěšná' : 'Patient Deceased / Irreversibly Deteriorated'}
                        </h3>
                        <p className="text-xs text-slate-400 font-sans mt-2">
                          {language === 'cs'
                            ? 'Pacient upadl do stavu neslučitelného se životem. Projděte si historii případu vpravo k odhalení chyb.'
                            : 'The patient deteriorated. Review the simulation history log on the right to examine mistakes.'}
                        </p>
                      </>
                    )}

                    <div className="flex gap-3 justify-center mt-6">
                      <button
                        onClick={() => generateAIScenario()}
                        className="px-5 py-2.5 bg-teal-500/20 hover:bg-teal-500/30 border border-teal-500/20 hover:border-teal-400/50 font-bold text-xs rounded-lg shadow-sm transition-all flex items-center gap-1.5 text-teal-300 hover:text-white cursor-pointer"
                      >
                        <RotateCcw className="w-3.5 h-3.5" />
                        {language === 'cs' ? 'Simulovat znovu' : 'Simulate Again'}
                      </button>
                      <button
                        onClick={() => setMode('menu')}
                        className="px-5 py-2.5 bg-white/10 border border-white/15 text-slate-300 hover:bg-white/20 hover:text-white font-bold text-xs rounded-lg transition-all cursor-pointer"
                      >
                        {language === 'cs' ? 'Návrat do menu' : 'Return to Menu'}
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Right panel: Timeline & Decision Log */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <div className="bg-white/5 border border-white/10 rounded-xl p-5 shadow-sm backdrop-blur-xl">
              <h3 className="text-sm font-bold text-white border-b border-white/10 pb-2 mb-3 tracking-wide uppercase flex items-center justify-between">
                <span>{language === 'cs' ? 'Záznam událostí scénáře' : 'Scenario Events Log'}</span>
                <Clock className="w-4 h-4 text-slate-400" />
              </h3>

              {aiHistory.length === 0 ? (
                <p className="text-xs text-slate-400 italic">No decisions logged yet.</p>
              ) : (
                <div className="flex flex-col gap-4 max-h-[500px] overflow-y-auto pr-1">
                  {aiHistory.map((log, idx) => (
                    <div
                      key={idx}
                      className={`text-xs border-l-2 p-3 rounded-r flex flex-col gap-1.5 ${
                        log.role === 'system'
                          ? 'border-slate-500 bg-white/5'
                          : log.role === 'user'
                          ? 'border-teal-500 bg-teal-500/5'
                          : 'border-yellow-400 bg-yellow-500/5'
                      }`}
                    >
                      <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest block font-mono">
                        {log.role === 'system'
                          ? (language === 'cs' ? 'Úvodní stav pacienta' : 'Initial Presentation')
                          : log.role === 'user'
                          ? (language === 'cs' ? 'Léčebný zásah' : 'Intervention Action')
                          : (language === 'cs' ? 'Odezva pacienta' : 'Bedside Response')}
                      </span>
                      <p className="text-slate-100 font-sans leading-relaxed">
                        {log.text}
                      </p>
                      {log.vitals && (
                        <div className="flex flex-wrap gap-2 text-[10px] text-slate-400 font-mono bg-slate-950/40 border border-white/10 p-1.5 rounded mt-1">
                          <span>HR: <strong>{log.vitals.hr}</strong></span>
                          <span>BP: <strong>{log.vitals.bp}</strong></span>
                          <span>SpO₂: <strong>{log.vitals.spo2}%</strong></span>
                          <span>RR: <strong>{log.vitals.rr}</strong></span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
