import React, { useState, useEffect, useRef } from "react";
import { GameSession } from "../types";
import { Heart, Volume2, VolumeX, Maximize2, Minimize2, Activity, ShieldAlert } from "lucide-react";

interface BedsideMonitorProps {
  session: GameSession;
}

// Sub-component for Waveform Canvas
interface WaveformCanvasProps {
  type: "ecg" | "spo2" | "co2";
  rate: number;
  active: boolean;
  color: string;
  isCardiacArrest: boolean;
  onBeat?: () => void;
}

export function WaveformCanvas({ type, rate, active, color, isCardiacArrest, onBeat }: WaveformCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const timeRef = useRef<number>(0);
  const lastBeatTimeRef = useRef<number>(0);

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

      // Advance time ref
      timeRef.current += delta;
      const t = timeRef.current;

      const width = canvas.width;
      const height = canvas.height;

      // Draw background dark grid
      ctx.fillStyle = "#070a08";
      ctx.fillRect(0, 0, width, height);

      ctx.strokeStyle = "rgba(34, 197, 94, 0.04)";
      ctx.lineWidth = 1;
      const gridSize = 12;
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // If inactive (no sensor)
      if (!active) {
        ctx.strokeStyle = "rgba(100, 116, 139, 0.3)";
        ctx.lineWidth = 1.5;
        ctx.setLineDash([4, 4]);
        ctx.beginPath();
        ctx.moveTo(0, height / 2);
        ctx.lineTo(width, height / 2);
        ctx.stroke();
        ctx.setLineDash([]);

        ctx.fillStyle = "rgba(148, 163, 184, 0.6)";
        ctx.font = "bold 9px monospace";
        ctx.fillText("SENZOR NEODPOJITELNÝ / NEPŘIPOJENO", 15, height / 2 + 3);

        animationId = requestAnimationFrame(draw);
        return;
      }

      // Draw trace line
      ctx.strokeStyle = color;
      ctx.lineWidth = 2;
      ctx.beginPath();

      const duration = 2.5; // seconds of history on screen

      for (let x = 0; x < width; x++) {
        const pixelT = t - ((width - x) / width) * duration;
        let val = 0;

        if (isCardiacArrest || rate === 0) {
          // Flatline noise
          val = (Math.sin(pixelT * 180) * 0.012) + (Math.sin(pixelT * 320) * 0.006);
        } else {
          const T = 60 / rate; // period
          const phase = (pixelT % T) / T;

          if (type === "ecg") {
            // ECG shape: P-QRS-T
            if (phase >= 0.05 && phase < 0.13) {
              const pPhase = (phase - 0.05) / 0.08;
              val = 0.12 * Math.sin(Math.PI * pPhase);
            } else if (phase >= 0.17 && phase < 0.20) {
              const qPhase = (phase - 0.17) / 0.03;
              val = -0.08 * Math.sin(Math.PI * qPhase);
            } else if (phase >= 0.20 && phase < 0.24) {
              const rPhase = (phase - 0.20) / 0.04;
              val = 1.15 * Math.sin(Math.PI * rPhase);

              // Trigger heart beat sound sync
              if (x === width - 1) {
                const cycleIndex = Math.floor(pixelT / T);
                if (cycleIndex > lastBeatTimeRef.current) {
                  lastBeatTimeRef.current = cycleIndex;
                  if (onBeat) onBeat();
                }
              }
            } else if (phase >= 0.24 && phase < 0.27) {
              const sPhase = (phase - 0.24) / 0.03;
              val = -0.25 * Math.sin(Math.PI * sPhase);
            } else if (phase >= 0.35 && phase < 0.52) {
              const tPhase = (phase - 0.35) / 0.17;
              val = 0.32 * Math.sin(Math.PI * tPhase);
            } else {
              val = 0;
            }
            // Background hum
            val += (Math.sin(pixelT * 260) * 0.008) + (Math.sin(pixelT * 480) * 0.004);

          } else if (type === "spo2") {
            // SpO2 PPG pulse wave shape, slightly shifted
            const shiftedPhase = (phase + 0.78) % 1.0;
            if (shiftedPhase >= 0.0 && shiftedPhase < 0.65) {
              const ppgPhase = shiftedPhase / 0.65;
              val = Math.sin(Math.PI * ppgPhase);
              if (ppgPhase > 0.42 && ppgPhase < 0.62) {
                const notchPhase = (ppgPhase - 0.42) / 0.20;
                val -= 0.14 * Math.sin(Math.PI * notchPhase);
              }
            } else {
              val = 0;
            }
            val += (Math.sin(pixelT * 190) * 0.006);

          } else if (type === "co2") {
            // Capnography squareish wave
            if (phase >= 0.0 && phase < 0.45) {
              val = 0.85 + (phase / 0.45) * 0.05; // alveolar plateau
            } else if (phase >= 0.45 && phase < 0.52) {
              const dropPhase = (phase - 0.45) / 0.07;
              val = 0.9 - dropPhase * 0.9; // inspiratory downstroke
            } else if (phase >= 0.52 && phase < 0.90) {
              val = 0; // inspiratory baseline
            } else {
              const risePhase = (phase - 0.90) / 0.10;
              val = risePhase * 0.85; // expiratory upstroke
            }
          }
        }

        // Map relative value to y pixel coordinate
        let y = height * 0.5;
        if (type === "ecg") {
          y = height * 0.62 - val * (height * 0.4);
        } else if (type === "spo2") {
          y = height * 0.65 - val * (height * 0.45);
        } else if (type === "co2") {
          y = height * 0.85 - val * (height * 0.7);
        }

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
  }, [type, rate, active, color, isCardiacArrest, onBeat]);

  return (
    <canvas
      ref={canvasRef}
      width={360}
      height={64}
      className="w-full h-full rounded border border-[#22c55e]/10 bg-[#070a08]"
    />
  );
}

export default function BedsideMonitor({ session }: BedsideMonitorProps) {
  const hr = session.vitals.tf;
  const sys = session.vitals.tk_sys;
  const dia = session.vitals.tk_dia;
  const spo2 = session.vitals.spo2;
  const rr = session.vitals.rr;
  const temp = session.vitals.temp;

  const isCardiacArrest = hr === 0;

  // Determine if patient has capnography sensor active (intubated / laryngeal mask)
  const isIntubated =
    session.therapies.oxygen.toLowerCase().includes("intub") ||
    session.therapies.oxygen.toLowerCase().includes("etk") ||
    session.therapies.oxygen.toLowerCase().includes("larynge");

  // Calculate EtCO2 value based on clinical state
  const getEtco2Val = () => {
    if (!isIntubated) return 0;
    // Specific case scenarios
    switch (session.caseId) {
      case "2": return 28; // PE (low due to perfusion defect)
      case "10": return 49; // Asthma status (hypercapnia)
      case "3": return 33; // Hemorrhagic shock / polytrauma (slightly low)
      case "8": return 44; // TCA overdose (depressed respiration)
      default: return 38; // Normal range (35-45)
    }
  };

  const etco2 = getEtco2Val();

  // Audio system state
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [heartIndicatorActive, setHeartIndicatorActive] = useState<boolean>(false);

  const audioCtxRef = useRef<AudioContext | null>(null);
  const continuousOsc = useRef<OscillatorNode | null>(null);
  const continuousGain = useRef<GainNode | null>(null);

  // Beep sound trigger
  const triggerPulseBeep = () => {
    setHeartIndicatorActive(true);
    setTimeout(() => setHeartIndicatorActive(false), 120);

    if (isMuted || isCardiacArrest) return;

    try {
      if (!audioCtxRef.current) {
        audioCtxRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
      }
      const ctx = audioCtxRef.current;
      if (ctx.state === "suspended") {
        ctx.resume();
      }

      const osc = ctx.createOscillator();
      const gainNode = ctx.createGain();

      osc.connect(gainNode);
      gainNode.connect(ctx.destination);

      osc.type = "sine";
      
      // Calculate dynamic frequency based on SpO2 (800Hz down to 400Hz)
      const clampedSpo2 = Math.max(50, Math.min(100, spo2));
      const freq = 350 + (clampedSpo2 - 50) * 9; // e.g. 100% SpO2 = 800Hz, 80% SpO2 = 620Hz, 50% SpO2 = 350Hz
      osc.frequency.setValueAtTime(freq, ctx.currentTime);

      // Envelope
      gainNode.gain.setValueAtTime(0.08, ctx.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.1);

      osc.start(ctx.currentTime);
      osc.stop(ctx.currentTime + 0.12);
    } catch (e) {
      console.warn("Failed to play heart rate beep:", e);
    }
  };

  // Continuous tone for Cardiac Arrest (Asystole/V-Fib)
  useEffect(() => {
    if (isCardiacArrest && !isMuted) {
      try {
        if (!audioCtxRef.current) {
          audioCtxRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
        }
        const ctx = audioCtxRef.current;
        if (ctx.state === "suspended") {
          ctx.resume();
        }

        if (!continuousOsc.current) {
          const osc = ctx.createOscillator();
          const gainNode = ctx.createGain();

          osc.connect(gainNode);
          gainNode.connect(ctx.destination);

          osc.type = "sine";
          osc.frequency.setValueAtTime(380, ctx.currentTime); // Flatline alarm tone

          gainNode.gain.setValueAtTime(0.06, ctx.currentTime);

          osc.start(ctx.currentTime);
          continuousOsc.current = osc;
          continuousGain.current = gainNode;
        }
      } catch (e) {
        console.warn("Failed to play flatline alarm:", e);
      }
    } else {
      // Stop continuous tone
      if (continuousOsc.current) {
        try {
          continuousOsc.current.stop();
          continuousOsc.current.disconnect();
        } catch (e) {}
        continuousOsc.current = null;
      }
      if (continuousGain.current) {
        try {
          continuousGain.current.disconnect();
        } catch (e) {}
        continuousGain.current = null;
      }
    }

    return () => {
      if (continuousOsc.current) {
        try {
          continuousOsc.current.stop();
          continuousOsc.current.disconnect();
        } catch (e) {}
        continuousOsc.current = null;
      }
    };
  }, [isCardiacArrest, isMuted]);

  // Alarm classification and styling
  const getAlarmState = () => {
    if (isCardiacArrest) {
      return { text: "CRITICAL: ASYSTOLIE", color: "bg-red-600 border-red-500 animate-pulse text-white" };
    }
    if (spo2 < 90) {
      return { text: "VAROVÁNÍ: TĚŽKÁ HYPOXIE", color: "bg-red-600 border-red-500 animate-pulse text-white" };
    }
    if (spo2 < 94) {
      return { text: "VAROVÁNÍ: DESATURACE", color: "bg-orange-600 border-orange-500 text-white" };
    }
    if (hr > 130) {
      return { text: "MONITORING: TACHYKARDE", color: "bg-orange-600 border-orange-500 text-white" };
    }
    if (sys < 90) {
      return { text: "VAROVÁNÍ: HYPOTENZE", color: "bg-orange-600 border-orange-500 text-white" };
    }
    return { text: "MONITORING AKTIVNÍ", color: "bg-[#0c1910] border-green-500/20 text-[#22c55e]" };
  };

  const alarm = getAlarmState();

  const handleToggleMute = () => {
    setIsMuted(!isMuted);
    // Initialize audio context on first click to comply with user interaction requirement
    if (isMuted && !audioCtxRef.current) {
      audioCtxRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
    }
  };

  // Mean arterial pressure
  const mapValue = Math.round((sys + 2 * dia) / 3);

  const mainDashboard = (
    <div className="bg-[#0b0e15] border border-[#272a31] rounded-2xl p-4 flex flex-col gap-3 font-sans shadow-2xl relative overflow-hidden select-none">
      {/* Grid Monitor Header */}
      <div className="flex justify-between items-center border-b border-[#272a31] pb-2 text-[10px] uppercase font-mono tracking-widest text-[#8892b0]">
        <div className="flex items-center gap-2">
          <Activity className="w-3.5 h-3.5 text-[#22c55e] animate-pulse" />
          <span className="font-extrabold text-white text-xs">BEDSIDE MONITOR HUD</span>
        </div>
        <div className="flex items-center gap-3">
          <span className={`px-2 py-0.5 rounded border text-[9px] font-extrabold tracking-wider ${alarm.color}`}>
            {alarm.text}
          </span>
          <button
            onClick={handleToggleMute}
            className={`p-1 rounded transition-colors cursor-pointer ${
              isMuted ? "bg-red-950/40 text-red-400 hover:bg-red-950" : "bg-[#22c55e]/10 text-[#22c55e] hover:bg-[#22c55e]/20"
            }`}
            title={isMuted ? "Zapnout zvuk" : "Vypnout zvuk"}
          >
            {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
          </button>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="p-1 bg-[#272a31]/60 text-white rounded hover:bg-[#272a31] cursor-pointer"
            title="Rozbalit detail"
          >
            <Maximize2 className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Grid layout for vital channels */}
      <div className="flex flex-col gap-2.5">
        {/* Row 1: ECG (Green) */}
        <div className="grid grid-cols-12 gap-3 items-center">
          <div className="col-span-4 flex justify-between bg-[#070a08]/80 p-2 rounded border border-[#22c55e]/10">
            <div className="flex flex-col">
              <span className="text-[9px] font-bold text-[#22c55e] uppercase tracking-wider font-mono">HR</span>
              <span className="text-[8px] text-[#8892b0] font-mono">bpm</span>
            </div>
            <div className="flex items-baseline gap-1 select-none">
              <Heart
                className={`w-3.5 h-3.5 text-red-500 self-center transition-transform ${
                  heartIndicatorActive ? "scale-130" : "scale-100"
                }`}
              />
              <span className="text-3xl font-black font-mono text-[#22c55e] leading-none tracking-tighter">
                {isCardiacArrest ? "0" : hr}
              </span>
            </div>
          </div>
          <div className="col-span-8 h-12">
            <WaveformCanvas
              type="ecg"
              rate={hr}
              active={true}
              color="#22c55e"
              isCardiacArrest={isCardiacArrest}
              onBeat={triggerPulseBeep}
            />
          </div>
        </div>

        {/* Row 2: SpO2 (Cyan) */}
        <div className="grid grid-cols-12 gap-3 items-center">
          <div className="col-span-4 flex justify-between bg-[#070a08]/80 p-2 rounded border border-cyan-500/10">
            <div className="flex flex-col">
              <span className="text-[9px] font-bold text-cyan-400 uppercase tracking-wider font-mono">SpO2</span>
              <span className="text-[8px] text-[#8892b0] font-mono">%</span>
            </div>
            <div className="flex items-baseline select-none">
              <span className="text-3xl font-black font-mono text-cyan-400 leading-none tracking-tighter">
                {isCardiacArrest ? "0" : spo2}
              </span>
            </div>
          </div>
          <div className="col-span-8 h-12">
            <WaveformCanvas
              type="spo2"
              rate={hr}
              active={true}
              color="#22d3ee"
              isCardiacArrest={isCardiacArrest}
            />
          </div>
        </div>

        {/* Row 3: NIBP (White/Red - Text Only standard) */}
        <div className="grid grid-cols-12 gap-3 items-center">
          <div className="col-span-4 flex justify-between bg-[#070a08]/80 p-2 rounded border border-white/10">
            <div className="flex flex-col">
              <span className="text-[9px] font-bold text-white uppercase tracking-wider font-mono">NIBP</span>
              <span className="text-[8px] text-[#8892b0] font-mono">mmHg</span>
            </div>
            <div className="flex flex-col items-end select-none">
              <span className="text-xl font-black font-mono text-white leading-none tracking-tighter">
                {sys}/{dia}
              </span>
              <span className="text-[8px] text-[#8892b0] font-mono leading-none">MAP {mapValue}</span>
            </div>
          </div>
          <div className="col-span-8 flex justify-around items-center bg-[#070a08]/80 h-12 rounded border border-white/5 font-mono text-[10px] text-[#8892b0] p-1.5">
            <div className="text-center">
              <span className="block text-[8px] text-white">TEMP</span>
              <span className="font-bold text-xs text-white">{temp.toFixed(1)} °C</span>
            </div>
            <div className="w-px h-6 bg-[#272a31]" />
            <div className="text-center">
              <span className="block text-[8px] text-yellow-500">RR</span>
              <span className="font-bold text-xs text-yellow-500">{rr} /min</span>
            </div>
          </div>
        </div>

        {/* Row 4: Capnography (Yellow - EtCO2) */}
        <div className="grid grid-cols-12 gap-3 items-center">
          <div className="col-span-4 flex justify-between bg-[#070a08]/80 p-2 rounded border border-yellow-500/10">
            <div className="flex flex-col">
              <span className="text-[9px] font-bold text-yellow-400 uppercase tracking-wider font-mono">EtCO2</span>
              <span className="text-[8px] text-[#8892b0] font-mono">mmHg</span>
            </div>
            <div className="flex items-baseline select-none">
              <span className="text-3xl font-black font-mono text-yellow-400 leading-none tracking-tighter">
                {isIntubated ? etco2 : "--"}
              </span>
            </div>
          </div>
          <div className="col-span-8 h-12">
            <WaveformCanvas
              type="co2"
              rate={rr}
              active={isIntubated}
              color="#eab308"
              isCardiacArrest={isCardiacArrest}
            />
          </div>
        </div>
      </div>

      {!isIntubated && (
        <p className="text-[9px] text-yellow-500/80 bg-yellow-500/5 border border-yellow-500/10 p-1.5 rounded leading-normal">
          💡 <strong>Tip pro intubaci</strong>: Pacient není zajištěn pokročilými dýchacími cestami (ETK). Capnografie (žlutá křivka EtCO2) se spustí po zavedení intubace či laryngeální masky v záložce Terapie.
        </p>
      )}
    </div>
  );

  return (
    <>
      {mainDashboard}

      {/* Expanded high-fidelity modal view */}
      {isExpanded && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/85 backdrop-blur-md">
          <div className="bg-[#0b0e15] w-full max-w-5xl h-[85vh] rounded-3xl border border-[#272a31] shadow-[0_0_50px_rgba(34,197,94,0.1)] flex flex-col overflow-hidden animate-zoom-in font-mono text-white p-6 gap-4 select-none">
            {/* Modal Header */}
            <div className="flex justify-between items-center border-b border-[#272a31] pb-3">
              <div className="flex items-center gap-3">
                <Activity className="w-6 h-6 text-[#22c55e] animate-pulse" />
                <div>
                  <h3 className="font-bold text-lg text-white">LŮŽKOVÝ RESUSCITAČNÍ MONITOR - JIP / URGENT</h3>
                  <p className="text-xs text-[#8892b0]">PACIENT: {session.patient.name} • CAS: {session.elapsedTime} min</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className={`px-3 py-1 rounded-full border text-[11px] font-extrabold tracking-widest ${alarm.color}`}>
                  {alarm.text}
                </span>
                <button
                  onClick={handleToggleMute}
                  className={`p-2 rounded-xl transition-colors cursor-pointer ${
                    isMuted ? "bg-red-950/40 text-red-400 hover:bg-red-950" : "bg-[#22c55e]/10 text-[#22c55e] hover:bg-[#22c55e]/20"
                  }`}
                >
                  {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                </button>
                <button
                  onClick={() => setIsExpanded(false)}
                  className="w-10 h-10 rounded-full hover:bg-[#272a31] flex items-center justify-center text-[#8892b0] hover:text-white cursor-pointer transition-colors text-lg"
                >
                  ✕
                </button>
              </div>
            </div>

            {/* Split screen display */}
            <div className="flex-1 grid grid-cols-12 gap-6 min-h-0 overflow-y-auto">
              {/* Waveforms - Left Column */}
              <div className="col-span-8 flex flex-col gap-4">
                {/* Channel 1: ECG */}
                <div className="flex-1 flex flex-col bg-[#070a08] rounded-2xl border border-[#22c55e]/10 p-3 relative font-sans">
                  <div className="absolute top-2 left-3 z-10 flex items-center gap-2 text-[#22c55e] font-bold text-xs uppercase bg-[#070a08]/85 px-2.5 py-0.5 rounded border border-[#22c55e]/10">
                    <span>Svod II (ECG)</span>
                    <Heart className={`w-3.5 h-3.5 text-red-500 ${heartIndicatorActive ? "scale-120 animate-ping" : ""}`} />
                  </div>
                  <div className="flex-1 min-h-[120px]">
                    <WaveformCanvas
                      type="ecg"
                      rate={hr}
                      active={true}
                      color="#22c55e"
                      isCardiacArrest={isCardiacArrest}
                      onBeat={triggerPulseBeep}
                    />
                  </div>
                </div>

                {/* Channel 2: SpO2 */}
                <div className="flex-1 flex flex-col bg-[#070a08] rounded-2xl border border-cyan-500/10 p-3 relative font-sans">
                  <div className="absolute top-2 left-3 z-10 text-cyan-400 font-bold text-xs uppercase bg-[#070a08]/85 px-2.5 py-0.5 rounded border border-cyan-500/10">
                    Saturace (Plethysmogram)
                  </div>
                  <div className="flex-1 min-h-[120px]">
                    <WaveformCanvas
                      type="spo2"
                      rate={hr}
                      active={true}
                      color="#22d3ee"
                      isCardiacArrest={isCardiacArrest}
                    />
                  </div>
                </div>

                {/* Channel 3: Capnography */}
                <div className="flex-1 flex flex-col bg-[#070a08] rounded-2xl border border-yellow-500/10 p-3 relative font-sans">
                  <div className="absolute top-2 left-3 z-10 text-yellow-400 font-bold text-xs uppercase bg-[#070a08]/85 px-2.5 py-0.5 rounded border border-yellow-500/10">
                    Capnografie (EtCO2)
                  </div>
                  <div className="flex-1 min-h-[120px]">
                    <WaveformCanvas
                      type="co2"
                      rate={rr}
                      active={isIntubated}
                      color="#eab308"
                      isCardiacArrest={isCardiacArrest}
                    />
                  </div>
                </div>
              </div>

              {/* Digital Vitals - Right Column */}
              <div className="col-span-4 flex flex-col gap-4">
                {/* Numeric HR */}
                <div className="flex-1 bg-[#070a08] rounded-2xl border border-[#22c55e]/25 p-4 flex flex-col justify-between">
                  <span className="text-xs font-bold text-[#22c55e] uppercase tracking-wider">TEPOVÁ FREKVENCE (HR)</span>
                  <div className="flex justify-between items-baseline mt-2">
                    <span className="text-[10px] text-[#8892b0]">ALARM LIMITY:<br />45 - 130 bpm</span>
                    <span className="text-6xl font-black text-[#22c55e] font-mono leading-none">
                      {isCardiacArrest ? "0" : hr}
                    </span>
                  </div>
                </div>

                {/* Numeric SpO2 */}
                <div className="flex-1 bg-[#070a08] rounded-2xl border border-cyan-500/25 p-4 flex flex-col justify-between">
                  <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">SATURACE O2 (SpO2)</span>
                  <div className="flex justify-between items-baseline mt-2">
                    <span className="text-[10px] text-[#8892b0]">ALARM LIMITY:<br />90% - 100%</span>
                    <span className="text-6xl font-black text-cyan-400 font-mono leading-none">
                      {isCardiacArrest ? "0" : spo2}
                    </span>
                  </div>
                </div>

                {/* Numeric BP */}
                <div className="flex-1 bg-[#070a08] rounded-2xl border border-white/20 p-4 flex flex-col justify-between">
                  <span className="text-xs font-bold text-white uppercase tracking-wider">KREVNÍ TLAK (NIBP)</span>
                  <div className="flex flex-col mt-2">
                    <div className="flex justify-between items-baseline">
                      <span className="text-[10px] text-[#8892b0]">MAP:<br />{mapValue} mmHg</span>
                      <span className="text-4xl font-black text-white font-mono leading-none">
                        {sys}/{dia}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Numeric EtCO2 & RR */}
                <div className="flex-1 bg-[#070a08] rounded-2xl border border-yellow-500/20 p-4 flex flex-col justify-between">
                  <span className="text-xs font-bold text-yellow-400 uppercase tracking-wider">DECH / CAPNO</span>
                  <div className="grid grid-cols-2 gap-4 mt-2">
                    <div className="flex flex-col">
                      <span className="text-[8px] text-[#8892b0]">EtCO2 (mmHg)</span>
                      <span className="text-4xl font-black text-yellow-400 font-mono leading-none">
                        {isIntubated ? etco2 : "--"}
                      </span>
                    </div>
                    <div className="flex flex-col border-l border-[#272a31] pl-3">
                      <span className="text-[8px] text-[#8892b0]">DF (/min)</span>
                      <span className="text-4xl font-black text-yellow-400 font-mono leading-none">
                        {rr}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-[#272a31] pt-3 text-[10px] text-[#8892b0] flex justify-between items-center font-mono">
              <span>MODEL: BEDSIDE SIMULATOR v1.1</span>
              <span>STAV BATERIE: AC SÍŤ</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
