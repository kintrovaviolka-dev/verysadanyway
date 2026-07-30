import React, { useState, useEffect, useRef } from "react";
import { GameSession } from "../types";
import { useProgress } from "../context/ProgressContext";
import { Activity, CheckCircle2, AlertTriangle, HelpCircle, ArrowRight, RotateCcw, Volume2, VolumeX } from "lucide-react";

// Pre-defined list of ECG rhythms
export interface RhythmDefinition {
  key: string;
  name: string;
  desc: string;
  clinicalNote: string;
}

export const RHYTHMS: Record<string, RhythmDefinition> = {
  nsr: {
    key: "nsr",
    name: "Normální sinusový rytmus / Sinusová tachykardie",
    desc: "Pravidelný rytmus vycházející ze sinusového uzlu. Každému QRS komplexu předchází vlna P s konstantním PR intervalem. Srdeční frekvence je pravidelná.",
    clinicalNote: "Pokud je frekvence > 100/min, jedná se o sinusovou tachykardii. Léčba se zaměřuje na vyvolávající příčinu (horečka, dehydratace, bolest, anémie)."
  },
  stemi: {
    key: "stemi",
    name: "Akutní STEMI spodní stěny (Pardeeho vlny)",
    desc: "Elevace ST segmentu (Pardeeho vlny) > 1-2 mm ve svodech II, III, aVF doprovázené zrcadlovými (recipročními) depresemi ve svodech I, aVL.",
    clinicalNote: "Značí akutní uzávěr pravé věnčité tepny (RCA). Indikováno okamžité podání kyseliny acetylsalicylové (Anopyrin), Heparinu a urgentní koronarografie (PCI)."
  },
  avb3: {
    key: "avb3",
    name: "AV blokáda III. stupně (Kompletní disociace)",
    desc: "Úplné přerušení převodu vzruchu ze síní na komory. Síně a komory pracují nezávisle na sobě. Na EKG jsou vidět pravidelné vlny P (cca 80/min) a pomalé, široké QRS komplexy (cca 30/min) bez vzájemné vazby.",
    clinicalNote: "Pacient je ohrožen bradykardií, synkopou (Adams-Stokes) a srdeční zástavou. Vyžaduje podání Atropinu i.v. a urgentní dočasnou kardiostimulaci (pacing)."
  },
  tdp: {
    key: "tdp",
    name: "Torsades de Pointes (Polymorfní komorová tachykardie)",
    desc: "Komorová tachykardie s charakteristickým plynulým přetáčením polarity a amplitudy QRS komplexů kolem izoelektrické linie (vzhled rotujícího vřetene). Frekvence je 150-250/min. Obvykle vzniká na podkladě prodlouženého intervalu QTc.",
    clinicalNote: "Rychle přechází do komorové fibrilace. Lékem volby je Magnesium sulfát (MgSO4) i.v. bolusově a korekce vnitřního prostředí. Při oběhové zástavě okamžitá defibrilace."
  },
  afib: {
    key: "afib",
    name: "Fibrilace síní (Nepravidelný rytmus bez P vln)",
    desc: "Rytmus je nepravidelně nepravidelný (ztráta pravidelnosti komorových stahů). Vlny P chybí a jsou nahrazeny drobnými, chaotickými fibrilačními vlnami f na izoelektrické linii.",
    clinicalNote: "Nejčastější arytmie. Hrozí vznik trombů v levé síni a tromboembolické cévní mozkové příhody (iCMP). Vyžaduje kontrolu frekvence (např. Betablokátory) a antikoagulační léčbu."
  },
  vfib: {
    key: "vfib",
    name: "Komorová fibrilace (Fibrilace komor)",
    desc: "Chaotická elektrická aktivita komor bez jakýchkoliv známek koordinovaného stahu. Na EKG vidíme nepravidelné, deformované a chaotické oscilace různé amplitudy bez rozlišitelných QRS komplexů či P vln. Klinicky: zástava oběhu.",
    clinicalNote: "Smrtelná arytmie! Okamžitá resuscitace (CPR) a defibrilace (výboj 200J bifázicky). Každá minuta zpoždění snižuje šanci na přežití o 10%!"
  },
  asystole: {
    key: "asystole",
    name: "Asystolie (Flatline)",
    desc: "Úplná elektrická ticho komor. Na EKG se zobrazuje téměř rovná linie s minimálním šumem. Srdce nevykazuje žádný stah a nepumpuje krev.",
    clinicalNote: "Rytmus neodpovídající na výboj (nedefibrilovatelný!). Okamžitá CPR a podání Adrenalinu (1mg i.v. každých 3-5 minut). Hledejte a řešte odstranitelné příčiny (4H / 4T)."
  }
};

// Custom canvas waveform drawing component for EkgQuiz
interface QuizCanvasProps {
  rhythm: string;
}

export function QuizWaveformCanvas({ rhythm }: QuizCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const timeRef = useRef<number>(0);
  
  // Pre-generate random beat intervals for Atrial Fibrillation (irregular)
  const afibBeats = useRef<number[]>([]);
  if (afibBeats.current.length === 0) {
    let curr = 0;
    for (let i = 0; i < 300; i++) {
      afibBeats.current.push(curr);
      curr += 0.45 + Math.random() * 0.85; // average 0.8s
    }
  }

  // Pre-generate dissociated P-waves and QRS complexes for AV block III
  const avbPwaves = useRef<number[]>([]);
  const avbQrs = useRef<number[]>([]);
  if (avbPwaves.current.length === 0) {
    let pCurr = 0;
    let qrsCurr = 0.2;
    for (let i = 0; i < 200; i++) {
      avbPwaves.current.push(pCurr);
      pCurr += 0.72; // regular P waves at ~83 bpm
      
      avbQrs.current.push(qrsCurr);
      qrsCurr += 1.85; // slow wide QRS at ~32 bpm
    }
  }

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let lastTimestamp = performance.now();

    const draw = (timestamp: number) => {
      const delta = (timestamp - lastTimestamp) / 1000;
      lastTimestamp = timestamp;

      timeRef.current += delta;
      const t = timeRef.current;

      const width = canvas.width;
      const height = canvas.height;

      // Draw background monitor grid
      ctx.fillStyle = "#040705";
      ctx.fillRect(0, 0, width, height);

      // Grid
      ctx.strokeStyle = "rgba(34, 197, 94, 0.05)";
      ctx.lineWidth = 1;
      const gridSize = 16;
      for (let gx = 0; gx < width; gx += gridSize) {
        ctx.beginPath();
        ctx.moveTo(gx, 0);
        ctx.lineTo(gx, height);
        ctx.stroke();
      }
      for (let gy = 0; gy < height; gy += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, gy);
        ctx.lineTo(width, gy);
        ctx.stroke();
      }

      // Draw waveform
      ctx.strokeStyle = "#22c55e"; // bright neon green
      ctx.lineWidth = 2.5;
      ctx.shadowColor = "#22c55e";
      ctx.shadowBlur = 4;
      ctx.beginPath();

      const duration = 4.0; // display 4 seconds of data on screen

      for (let x = 0; x < width; x++) {
        const pixelT = t - ((width - x) / width) * duration;
        let val = 0;

        if (rhythm === "asystole") {
          // Flatline
          val = (Math.sin(pixelT * 120) * 0.012) + (Math.sin(pixelT * 260) * 0.006) + (Math.random() * 0.005);
        } else if (rhythm === "vfib") {
          // Ventricular Fibrillation: chaotic oscillations
          val = Math.sin(pixelT * 24) * 0.45 + Math.sin(pixelT * 51) * 0.28 + Math.sin(pixelT * 11) * 0.12 + Math.random() * 0.06;
        } else if (rhythm === "tdp") {
          // Torsades de Pointes: rapid twisting sinusoidal
          const freq = 3.6; // 216 bpm
          const ampMod = Math.sin(pixelT * 2 * Math.PI * 0.16) * 0.8 + 0.85; // slow spindle modulation
          val = Math.sin(pixelT * 2 * Math.PI * freq) * ampMod * 0.55;
          // Add wide QRS character
          val += Math.sin(pixelT * 2 * Math.PI * freq * 2) * ampMod * 0.1;
        } else if (rhythm === "nsr") {
          // Normal Sinus Rhythm (75 bpm)
          const T = 0.8;
          const phase = (pixelT % T) / T;
          
          if (phase >= 0.05 && phase < 0.13) {
            val = 0.12 * Math.sin(Math.PI * ((phase - 0.05) / 0.08)); // P wave
          } else if (phase >= 0.18 && phase < 0.21) {
            val = -0.1 * Math.sin(Math.PI * ((phase - 0.18) / 0.03)); // Q wave
          } else if (phase >= 0.21 && phase < 0.25) {
            val = 1.2 * Math.sin(Math.PI * ((phase - 0.21) / 0.04)); // R wave
          } else if (phase >= 0.25 && phase < 0.28) {
            val = -0.28 * Math.sin(Math.PI * ((phase - 0.25) / 0.03)); // S wave
          } else if (phase >= 0.38 && phase < 0.54) {
            val = 0.32 * Math.sin(Math.PI * ((phase - 0.38) / 0.16)); // T wave
          }
          val += (Math.sin(pixelT * 240) * 0.005);
        } else if (rhythm === "stemi") {
          // STEMI: ST elevation in inferior leads
          const T = 0.75;
          const phase = (pixelT % T) / T;

          if (phase >= 0.05 && phase < 0.13) {
            val = 0.12 * Math.sin(Math.PI * ((phase - 0.05) / 0.08)); // P
          } else if (phase >= 0.18 && phase < 0.21) {
            val = -0.1 * Math.sin(Math.PI * ((phase - 0.18) / 0.03)); // Q
          } else if (phase >= 0.21 && phase < 0.25) {
            val = 1.15 * Math.sin(Math.PI * ((phase - 0.21) / 0.04)); // R
          } else if (phase >= 0.25 && phase < 0.28) {
            val = -0.22 * Math.sin(Math.PI * ((phase - 0.25) / 0.03)); // S
          }
          
          // ST Elevation segment (holds high before T wave)
          if (phase >= 0.25 && phase < 0.56) {
            // Plateau elevation
            const stElev = 0.65;
            if (phase >= 0.25 && phase < 0.35) {
              const fraction = (phase - 0.25) / 0.10;
              val += fraction * stElev;
            } else {
              val += stElev;
            }
          }
          
          if (phase >= 0.40 && phase < 0.58) {
            val += 0.38 * Math.sin(Math.PI * ((phase - 0.40) / 0.18)); // T wave merged with ST
          }
          val += (Math.sin(pixelT * 240) * 0.005);
        } else if (rhythm === "afib") {
          // Atrial Fibrillation: chaotic baseline + irregular beats
          // 1. Chaotic fibrillatory baseline f waves
          val = Math.sin(pixelT * 60) * 0.07 + Math.sin(pixelT * 115) * 0.04 + Math.random() * 0.03;
          
          // 2. Plot irregular beats
          const beats = afibBeats.current;
          // Find if there is a beat occurring at pixelT
          const nextBeatIndex = beats.findIndex(tb => tb > pixelT);
          if (nextBeatIndex > 0) {
            const lastBeat = beats[nextBeatIndex - 1];
            const diff = pixelT - lastBeat;
            
            // Draw QRS-T complex
            if (diff >= 0 && diff < 0.35) {
              const dur = 0.35;
              const p = diff / dur;
              
              if (p >= 0.0 && p < 0.08) {
                val += -0.1 * Math.sin(Math.PI * (p / 0.08)); // Q
              } else if (p >= 0.08 && p < 0.18) {
                val += 1.2 * Math.sin(Math.PI * ((p - 0.08) / 0.10)); // R
              } else if (p >= 0.18 && p < 0.26) {
                val += -0.28 * Math.sin(Math.PI * ((p - 0.18) / 0.08)); // S
              } else if (p >= 0.45 && p < 0.85) {
                val += 0.28 * Math.sin(Math.PI * ((p - 0.45) / 0.40)); // T
              }
            }
          }
        } else if (rhythm === "avb3") {
          // AV block III: dissociated P waves and slow wide QRS complexes
          // 1. Draw P waves
          const pBeats = avbPwaves.current;
          const nextPIndex = pBeats.findIndex(tp => tp > pixelT);
          if (nextPIndex > 0) {
            const lastP = pBeats[nextPIndex - 1];
            const diffP = pixelT - lastP;
            if (diffP >= 0 && diffP < 0.12) {
              val += 0.15 * Math.sin(Math.PI * (diffP / 0.12));
            }
          }

          // 2. Draw wide slow QRS complexes
          const qrsBeats = avbQrs.current;
          const nextQIndex = qrsBeats.findIndex(tq => tq > pixelT);
          if (nextQIndex > 0) {
            const lastQ = qrsBeats[nextQIndex - 1];
            const diffQ = pixelT - lastQ;
            if (diffQ >= 0 && diffQ < 0.45) {
              // Wide QRS complex (longer duration)
              const p = diffQ / 0.45;
              if (p >= 0.0 && p < 0.1) {
                val += -0.12 * Math.sin(Math.PI * (p / 0.1)); // Q
              } else if (p >= 0.1 && p < 0.25) {
                val += 0.95 * Math.sin(Math.PI * ((p - 0.1) / 0.15)); // wide R
              } else if (p >= 0.25 && p < 0.38) {
                val += -0.32 * Math.sin(Math.PI * ((p - 0.25) / 0.13)); // wide S
              } else if (p >= 0.55 && p < 0.95) {
                val += 0.28 * Math.sin(Math.PI * ((p - 0.55) / 0.40)); // T
              }
            }
          }
          val += (Math.sin(pixelT * 240) * 0.005);
        }

        // Map relative value to y pixel coordinate
        const y = height * 0.55 - val * (height * 0.35);

        if (x === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }

      ctx.stroke();

      animationId = requestAnimationFrame(draw);
    };

    animationId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [rhythm]);

  return (
    <div className="w-full h-48 md:h-56 bg-[#040705] border border-green-500/20 rounded-xl overflow-hidden shadow-inner">
      <canvas
        ref={canvasRef}
        width={720}
        height={220}
        className="w-full h-full"
      />
    </div>
  );
}

// Case mode: determine the target rhythm based on case ID
export const getCaseRhythm = (caseId: string): string => {
  switch (caseId) {
    case "1": return "stemi";
    case "8": return "avb3"; // Amitriptyline toxicity features prolonged QTc / wide QRS resembling AVB3 in our simulator
    case "12": return "stemi";
    case "13":
    case "16": return "afib";
    default: return "nsr"; // Case 2, 3, 5, 6, etc have sinus tachycardia
  }
};

interface EkgQuizProps {
  standalone?: boolean;
  session?: GameSession;
  onAction?: (actionData: any) => void;
  onClose: () => void;
}

export default function EkgQuiz({ standalone = false, session, onAction, onClose }: EkgQuizProps) {
  const { logIncorrectChoice, logQuizScore } = useProgress();
  // Standalone mode state
  const [currentRhythm, setCurrentRhythm] = useState<string>("nsr");
  const [options, setOptions] = useState<string[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [questionCount, setQuestionCount] = useState<number>(1);
  const [streak, setStreak] = useState<number>(0);
  
  // Audio state
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const quizBeepInterval = useRef<number | null>(null);

  // Standalone quiz: generate random question
  const generateQuestion = () => {
    const keys = Object.keys(RHYTHMS);
    const correct = keys[Math.floor(Math.random() * keys.length)];
    setCurrentRhythm(correct);

    // Shuffle options
    const shuf = [correct];
    while (shuf.length < 4) {
      const rand = keys[Math.floor(Math.random() * keys.length)];
      if (!shuf.includes(rand)) {
        shuf.push(rand);
      }
    }
    setOptions(shuf.sort(() => Math.random() - 0.5));
    setSelectedAnswer(null);
    setIsAnswered(false);
  };



  const caseRhythmKey = session ? getCaseRhythm(session.caseId) : "nsr";
  const caseCorrectRhythm = RHYTHMS[caseRhythmKey];

  useEffect(() => {
    if (standalone) {
      generateQuestion();
    } else {
      // In case mode, the rhythm is fixed based on caseId
      setCurrentRhythm(caseRhythmKey);
      // Generate multiple choice options containing the correct one
      const keys = Object.keys(RHYTHMS);
      const shuf = [caseRhythmKey];
      while (shuf.length < 4) {
        const rand = keys[Math.floor(Math.random() * keys.length)];
        if (!shuf.includes(rand)) {
          shuf.push(rand);
        }
      }
      setOptions(shuf.sort(() => Math.random() - 0.5));
    }
  }, [standalone, session?.caseId]);

  // Periodic beeping audio for the quiz rhythm
  useEffect(() => {
    if (isMuted || currentRhythm === "asystole") {
      if (quizBeepInterval.current !== null) {
        clearInterval(quizBeepInterval.current);
        quizBeepInterval.current = null;
      }
      return;
    }

    // Determine beep rate
    let bpm = 75;
    if (currentRhythm === "stemi") bpm = 90;
    if (currentRhythm === "avb3") bpm = 33; // bradycardia
    if (currentRhythm === "tdp") bpm = 210; // tachycardia
    if (currentRhythm === "afib") bpm = 88;
    if (currentRhythm === "vfib") bpm = 180;

    const playBeep = () => {
      try {
        if (!audioCtxRef.current) {
          audioCtxRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
        }
        const ctx = audioCtxRef.current;
        if (ctx.state === "suspended") {
          ctx.resume();
        }

        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.type = "sine";
        // Pitches: lower for vfib/tdp, higher for normal
        let freq = 750;
        if (currentRhythm === "vfib" || currentRhythm === "tdp") freq = 550;
        osc.frequency.setValueAtTime(freq, ctx.currentTime);

        gain.gain.setValueAtTime(0.06, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08);

        osc.start(ctx.currentTime);
        osc.stop(ctx.currentTime + 0.1);
      } catch (e) {}
    };

    if (quizBeepInterval.current !== null) {
      clearInterval(quizBeepInterval.current);
    }

    if (currentRhythm === "afib") {
      // Irregular beeping interval for Afib!
      const triggerNextAfibBeep = () => {
        if (isMuted || currentRhythm !== "afib") return;
        playBeep();
        const nextDelay = 400 + Math.random() * 800; // 400ms - 1200ms
        setTimeout(triggerNextAfibBeep, nextDelay);
      };
      const tid = setTimeout(triggerNextAfibBeep, 500);
      return () => clearTimeout(tid);
    } else {
      const intervalSec = 60 / bpm;
      quizBeepInterval.current = window.setInterval(playBeep, intervalSec * 1000);
    }

    return () => {
      if (quizBeepInterval.current !== null) {
        clearInterval(quizBeepInterval.current);
        quizBeepInterval.current = null;
      }
    };
  }, [currentRhythm, isMuted]);

  const handleToggleMute = () => {
    setIsMuted(!isMuted);
    if (isMuted && !audioCtxRef.current) {
      audioCtxRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
    }
  };

  const handleAnswerSubmit = (optionKey: string) => {
    if (isAnswered) return;
    setSelectedAnswer(optionKey);
    setIsAnswered(true);

    const correct = optionKey === currentRhythm;

    if (standalone) {
      if (correct) {
        setScore(prev => prev + 1);
        setStreak(prev => prev + 1);
      } else {
        setStreak(0);
        logIncorrectChoice(
          `ekg_rhythm_${currentRhythm}`,
          "Emergency",
          RHYTHMS[optionKey]?.name || optionKey,
          `Jaký rytmus ukazuje EKG monitor?`,
          RHYTHMS[currentRhythm]?.name || currentRhythm
        );
      }
    } else {
      // In Case Mode
      if (correct && onAction) {
        // Unlock cardiovascular actions
        onAction({ actionId: "interpret_rhythm" });
      }
    }
  };

  const handleNextQuestion = () => {
    setQuestionCount(prev => prev + 1);
    generateQuestion();
  };

  const handleResetQuiz = () => {
    setScore(0);
    setQuestionCount(1);
    setStreak(0);
    generateQuestion();
  };

  return (
    <div className={`${standalone ? "max-w-4xl mx-auto" : "w-full"} bg-[#1d2027] text-[#e1e2ec] p-6 rounded-2xl border border-[#424754] shadow-2xl space-y-6 flex flex-col`}>
      {/* Quiz Header */}
      <div className="flex justify-between items-center border-b border-[#424754] pb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#4d8eff]/10 rounded-xl flex items-center justify-center border border-[#4d8eff]/20">
            <Activity className="w-5 h-5 text-[#adc6ff] animate-pulse" />
          </div>
          <div>
            <h2 className="font-extrabold text-xl text-white">
              {standalone ? "EKG Rytmický Trenažér (Kvíz)" : "Klinický EKG Interpret"}
            </h2>
            <p className="text-xs text-[#c2c6d6]">
              {standalone
                ? "Procvičujte rychlou identifikaci kritických srdečních arytmií"
                : "Zhodnoťte a určete rytmus u lůžka pacienta pro odblokování intervencí"}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          {standalone && (
            <div className="hidden sm:flex gap-4 text-xs font-mono bg-[#191b23] px-4 py-1.5 rounded-lg border border-[#424754]/30">
              <div>Skóre: <span className="text-[#4d8eff] font-bold">{score}/{questionCount - 1}</span></div>
              <div className="w-px bg-[#424754]/50" />
              <div>Streak: <span className="text-orange-400 font-bold">{streak} 🔥</span></div>
            </div>
          )}
          <button
            onClick={handleToggleMute}
            className={`p-2 rounded-lg transition-colors cursor-pointer ${
              isMuted ? "bg-red-950/40 text-red-400 hover:bg-red-950" : "bg-[#22c55e]/10 text-[#22c55e] hover:bg-[#22c55e]/20"
            }`}
            title={isMuted ? "Zapnout zvuk" : "Vypnout zvuk"}
          >
            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          </button>
          {!standalone && (
            <button
              onClick={onClose}
              className="text-[#c2c6d6] hover:text-white px-3 py-1.5 bg-[#272a31]/60 hover:bg-[#272a31] rounded-lg text-xs font-bold cursor-pointer"
            >
              ZAVŘÍT
            </button>
          )}
        </div>
      </div>

      {/* Standalone score banner for small screens */}
      {standalone && (
        <div className="sm:hidden flex justify-between text-xs font-mono bg-[#191b23] p-3 rounded-lg border border-[#424754]/30">
          <div>Skóre: <span className="text-[#4d8eff] font-bold">{score}/{questionCount - 1}</span></div>
          <div>Streak: <span className="text-orange-400 font-bold">{streak} 🔥</span></div>
        </div>
      )}

      {/* Waveform Area */}
      <div className="space-y-2">
        <div className="flex justify-between items-center text-xs font-bold uppercase tracking-wider text-[#adc6ff]">
          <span>Svod II (Real-time Simulace)</span>
          <span className="text-[10px] text-green-400 font-mono animate-pulse">25 mm/s • 10 mm/mV</span>
        </div>
        <QuizWaveformCanvas rhythm={currentRhythm} />
      </div>

      {/* Interactive Options Area */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {options.map((key) => {
          const rhythmDef = RHYTHMS[key];
          const isCorrect = key === currentRhythm;
          const isSelected = selectedAnswer === key;
          
          let btnClass = "bg-[#272a31]/30 border-[#424754] text-white hover:bg-[#272a31]/80 hover:border-[#adc6ff]";
          if (isAnswered) {
            if (isCorrect) {
              btnClass = "bg-green-950/20 border-green-500 text-green-400 font-bold";
            } else if (isSelected) {
              btnClass = "bg-red-950/20 border-red-500 text-red-400 font-bold";
            } else {
              btnClass = "bg-[#272a31]/10 border-[#424754]/30 text-[#c2c6d6] opacity-50 cursor-not-allowed";
            }
          }

          return (
            <button
              key={key}
              onClick={() => handleAnswerSubmit(key)}
              disabled={isAnswered}
              className={`p-4 rounded-xl border text-left text-sm transition-all flex justify-between items-center cursor-pointer ${btnClass}`}
            >
              <span>{rhythmDef.name}</span>
              {isAnswered && isCorrect && <CheckCircle2 className="w-5 h-5 text-green-400 shrink-0 ml-2" />}
              {isAnswered && isSelected && !isCorrect && <AlertTriangle className="w-5 h-5 text-red-400 shrink-0 ml-2" />}
            </button>
          );
        })}
      </div>

      {/* Diagnostic Explanation and Navigation Banner */}
      {isAnswered && (
        <div className={`p-5 rounded-xl border text-xs space-y-3 leading-relaxed animate-fade-in ${
          selectedAnswer === currentRhythm
            ? "bg-green-950/15 border-green-500/30 text-green-300"
            : "bg-red-950/15 border-red-500/30 text-red-300"
        }`}>
          <div className="flex items-start gap-3">
            {selectedAnswer === currentRhythm ? (
              <CheckCircle2 className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
            ) : (
              <AlertTriangle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
            )}
            <div className="space-y-1">
              <h4 className="font-extrabold text-sm text-white">
                {selectedAnswer === currentRhythm
                  ? "✓ Správná diagnóza!"
                  : `✗ Nesprávně. Skutečný rytmus je: ${RHYTHMS[currentRhythm].name}`}
              </h4>
              <p className="text-[#c2c6d6]">{RHYTHMS[currentRhythm].desc}</p>
            </div>
          </div>

          <div className="pt-3 border-t border-[#424754]/30 space-y-1">
            <span className="font-bold text-white uppercase tracking-wider block text-[10px]">Doporučený klinický postup:</span>
            <p className="text-[#adc6ff]">{RHYTHMS[currentRhythm].clinicalNote}</p>
          </div>

          {/* Action buttons inside feedback block */}
          <div className="pt-2 flex justify-end">
            {standalone ? (
              <button
                onClick={handleNextQuestion}
                className="px-5 py-2 bg-[#4d8eff] hover:bg-[#adc6ff] text-white font-bold rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer text-xs uppercase tracking-wider"
              >
                Další otázka <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              selectedAnswer === currentRhythm ? (
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-bold text-green-400 bg-green-500/10 px-2 py-1 rounded border border-green-500/20">
                    🔓 Kardiovaskulární intervence odblokovány
                  </span>
                  <button
                    onClick={onClose}
                    className="px-5 py-2 bg-[#22c55e] hover:bg-[#4ade80] text-white font-bold rounded-lg transition-all active:scale-95 cursor-pointer text-xs uppercase tracking-wider"
                  >
                    Pokračovat v případu
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => {
                    setSelectedAnswer(null);
                    setIsAnswered(false);
                  }}
                  className="px-4 py-2 bg-[#272a31] hover:bg-[#32353c] text-white font-bold rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer text-xs uppercase tracking-wider"
                >
                  <RotateCcw className="w-4 h-4" /> Zkusit znovu
                </button>
              )
            )}
          </div>
        </div>
      )}

      {/* Case mode help banner before answered */}
      {!standalone && !isAnswered && (
        <div className="bg-[#191b23] p-4 rounded-xl border border-[#424754]/50 flex items-start gap-3 text-xs leading-relaxed">
          <HelpCircle className="w-5 h-5 text-[#adc6ff] shrink-0 mt-0.5" />
          <div className="space-y-1">
            <span className="font-bold text-white block">Instrukce k odblokování resuscitace</span>
            <p className="text-[#c2c6d6]">
              Pacient vyžaduje zhodnocení EKG rytmu před podáním antiarytmitik či provedením defibrilace. Analyzujte běžící křivku výše a vyberte správný rytmus z nabídky. Úspěšné vyhodnocení odemkne všechny terapeutické zásahy.
            </p>
          </div>
        </div>
      )}

      {/* Standalone controls */}
      {standalone && (
        <div className="flex justify-between items-center pt-2">
          <button
            onClick={() => {
              if (questionCount > 1) {
                logQuizScore("ekg_rhythm_quiz", "EKG trenažér rytmů", "Emergency", score, questionCount - 1);
              }
              onClose();
            }}
            className="px-4 py-2 bg-[#272a31]/60 hover:bg-[#272a31] text-[#c2c6d6] hover:text-white rounded-lg text-xs font-bold transition-colors cursor-pointer"
          >
            ← ZPĚT NA HOME SCREEN
          </button>
          
          <button
            onClick={handleResetQuiz}
            className="px-4 py-2 bg-red-950/20 hover:bg-red-950/50 border border-red-500/20 hover:border-red-500/50 text-red-300 rounded-lg text-xs font-bold transition-all active:scale-95 cursor-pointer flex items-center gap-1"
          >
            <RotateCcw className="w-3.5 h-3.5" /> RESETOVAT SKÓRE
          </button>
        </div>
      )}
    </div>
  );
}
