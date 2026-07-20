import React, { useState, useEffect, useRef } from "react";
import { GameSession } from "../types";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip as RechartsTooltip,
} from "recharts";
import { Activity, Play, Pause, Info, ShieldAlert, CheckCircle, RefreshCw } from "lucide-react";

interface EkgPoint {
  time: number;
  valI: number;
  valII: number;
  valIII: number;
}

export function generateEkgData(caseId: string, hr: number, offset: number = 0): EkgPoint[] {
  const points: EkgPoint[] = [];
  const N = 250; // number of points for 2.0 seconds
  const totalDuration = 2.0; // 2 seconds window
  
  for (let i = 0; i < N; i++) {
    const t = (i * (totalDuration / N)) + offset;
    
    // Period of one heart beat
    const period = 60 / hr;
    const phase = (t % period) / period; // phase x in [0, 1)
    
    // Wave calculations for Lead I, II, III
    let valI = 0;
    let valII = 0;
    let valIII = 0;
    
    const isTca = caseId === "8";
    const isStemi = caseId === "1";
    const isPe = caseId === "2";
    
    // QRS width and timings
    const qrsStart = isTca ? 0.18 : 0.22;
    const rPeak = isTca ? 0.25 : 0.26;
    const sEnd = isTca ? 0.35 : 0.30;
    
    // Wave components:
    // 1. P wave (at phase 0.05 - 0.15)
    let pVal = 0;
    if (phase >= 0.05 && phase < 0.15) {
      const pPhase = (phase - 0.05) / 0.1;
      pVal = 0.16 * Math.sin(Math.PI * pPhase);
    }
    
    // 2. Q wave (at phase qrsStart to rPeak - split)
    let qVal = 0;
    const qDuration = (rPeak - qrsStart) * 0.4;
    const qEnd = qrsStart + qDuration;
    if (phase >= qrsStart && phase < qEnd) {
      const qPhase = (phase - qrsStart) / qDuration;
      qVal = -0.15 * Math.sin(Math.PI * qPhase);
    }
    
    // 3. R wave (from qEnd to sStart)
    let rVal = 0;
    const sStart = rPeak + (sEnd - rPeak) * 0.3;
    if (phase >= qEnd && phase < sStart) {
      const rPhase = (phase - qEnd) / (sStart - qEnd);
      rVal = 1.8 * Math.sin(Math.PI * rPhase);
    }
    
    // 4. S wave (from sStart to sEnd)
    let sVal = 0;
    if (phase >= sStart && phase < sEnd) {
      const sPhase = (phase - sStart) / (sEnd - sStart);
      sVal = -0.35 * Math.sin(Math.PI * sPhase);
    }
    
    // 5. ST segment & T wave timings
    const tStart = isTca ? 0.46 : 0.36;
    const tEnd = isTca ? 0.78 : 0.58;
    
    // T wave
    let tVal = 0;
    if (phase >= tStart && phase < tEnd) {
      const tPhase = (phase - tStart) / (tEnd - tStart);
      tVal = 0.42 * Math.sin(Math.PI * tPhase);
    }
    
    // Construct leads with case-specific modifications
    if (isStemi) {
      // STEMI: ST elevation in II, III (inferior), reciprocal depression in I
      let elevFactor = 0;
      if (phase >= 0.29 && phase < 0.55) {
        const elevPhase = (phase - 0.29) / 0.26;
        elevFactor = Math.sin(Math.PI * elevPhase);
      }
      
      valII = pVal + qVal + rVal + sVal + (tVal * 1.1) + (elevFactor * 0.75);
      valIII = pVal + (qVal * 1.3) + rVal + sVal + (tVal * 1.2) + (elevFactor * 1.1);
      valI = pVal + qVal + rVal + sVal + tVal - (elevFactor * 0.35);
      
    } else if (isPe) {
      // PE (S1Q3T3): Deep S in Lead I, Deep Q + inverted T in Lead III
      let deepSValI = 0;
      if (phase >= sStart && phase < sEnd) {
        const sPhase = (phase - sStart) / (sEnd - sStart);
        deepSValI = -1.1 * Math.sin(Math.PI * sPhase);
      }
      valI = pVal + qVal + rVal + deepSValI + tVal;
      
      let deepQValIII = 0;
      if (phase >= qrsStart && phase < qEnd) {
        const qPhase = (phase - qrsStart) / qDuration;
        deepQValIII = -0.65 * Math.sin(Math.PI * qPhase);
      }
      let invertedTValIII = 0;
      if (phase >= tStart && phase < tEnd) {
        const tPhase = (phase - tStart) / (tEnd - tStart);
        invertedTValIII = -0.45 * Math.sin(Math.PI * tPhase);
      }
      valIII = pVal + deepQValIII + (rVal * 0.75) + sVal + invertedTValIII;
      valII = pVal + qVal + rVal + sVal + tVal;
      
    } else if (isTca) {
      // TCA: Wide QRS, Prolonged QTc, Deep S in Lead I
      let deepSValI = 0;
      if (phase >= sStart && phase < sEnd) {
        const sPhase = (phase - sStart) / (sEnd - sStart);
        deepSValI = -0.85 * Math.sin(Math.PI * sPhase);
      }
      
      valI = pVal + qVal + rVal + deepSValI + tVal;
      valII = pVal + qVal + rVal + sVal + tVal;
      valIII = pVal + qVal + (rVal * 0.8) + sVal + tVal;
      
    } else {
      // Normal / Sinus Tachycardia
      valI = pVal + qVal + rVal + sVal + tVal;
      valII = pVal + qVal + (rVal * 1.1) + sVal + tVal;
      valIII = pVal + qVal + (rVal * 0.75) + sVal + tVal;
    }
    
    // Add minor background electrical baseline noise for analog realism
    const noise = (Math.sin(t * 100) * 0.012) + (Math.sin(t * 240) * 0.006);
    
    points.push({
      time: Number((i * (totalDuration / N)).toFixed(3)),
      valI: Number((valI + noise).toFixed(3)),
      valII: Number((valII + noise).toFixed(3)),
      valIII: Number((valIII + noise).toFixed(3)),
    });
  }
  
  return points;
}

interface EkgVisualizationProps {
  session: GameSession;
}

export default function EkgVisualization({ session }: EkgVisualizationProps) {
  const caseId = session.caseId;
  const hr = session.vitals.tf; // Dynamic heart rate from current vitals
  
  const [selectedLead, setSelectedLead] = useState<"I" | "II" | "III" | "ALL">("II");
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [themeMode, setThemeMode] = useState<"cyber" | "paper">("cyber");
  const [offset, setOffset] = useState<number>(0);
  
  const animationRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number>(0);

  // Animation loop for scrolling EKG
  useEffect(() => {
    if (!isPlaying) {
      if (animationRef.current !== null) {
        cancelAnimationFrame(animationRef.current);
        animationRef.current = null;
      }
      return;
    }

    const animate = (timestamp: number) => {
      if (!lastTimeRef.current) lastTimeRef.current = timestamp;
      const delta = (timestamp - lastTimeRef.current) / 1000; // in seconds
      lastTimeRef.current = timestamp;
      
      // Speed factor: how fast the trace scrolls
      setOffset((prev) => (prev + delta * 0.65) % 100);
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationRef.current !== null) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isPlaying]);

  // Handle play/pause toggle resetting timestamps
  const handleTogglePlay = () => {
    if (!isPlaying) {
      lastTimeRef.current = 0;
    }
    setIsPlaying(!isPlaying);
  };

  const ekgData = generateEkgData(caseId, hr, offset);

  // Content-specific interpretation guides
  const getInterpretationGuide = () => {
    switch (caseId) {
      case "1": // STEMI
        return {
          title: "Akutní infarkt myokardu spodní stěny (Inferior STEMI)",
          findings: [
            "ST elevace ve svodech II a III (Pardeeho vlny) > 1-2 mm.",
            "Reciproční ST deprese ve svodu I (zrcadlový obraz).",
            "Sinusová tachykardie jako kompenzační mechanismus."
          ],
          actions: "Indikováno podání Anopyrinu (400mg p.o.), Heparinu (5000 IU i.v.) a okamžitá katetrizace (PCI).",
          severity: "high"
        };
      case "2": // PE
        return {
          title: "Akutní plicní embolie s přetížením pravého srdce",
          findings: [
            "Vzorec S1Q3T3: hluboký kmit S v I, patologický kmit Q v III, negativní vlna T v III.",
            "Výrazná sinusová tachykardie.",
            "Zatížení pravé komory (může doprovázet inkompletní RBBB)."
          ],
          actions: "Kyslíková terapie, antikoagulace (Heparin i.v. bolus) a urgentní CT pulmonální angiografie.",
          severity: "high"
        };
      case "8": // TCA
        return {
          title: "Toxicity / Intoxikace tricyklickými antidepresivy",
          findings: [
            "Výrazně rozšířený komplex QRS (>130 ms) - riziko křečí a komorových arytmií.",
            "Prodloužený interval QTc (>500 ms).",
            "Hluboké a široké S ve svodu I."
          ],
          actions: "Okamžité podání Natrium Bikarbonátu 8.4% i.v. (STATIM) k alkalizaci a zúžení QRS.",
          severity: "high"
        };
      default:
        return {
          title: `Sinusová tachykardie / Rytmus bez akutní ischemie (Tep: ${hr}/min)`,
          findings: [
            "Pravidelný sinusový rytmus se štíhlým komplexem QRS.",
            "ST segmenty v izoelektrické linii (bez elevací či depresí).",
            "Normální, správně orientované vlny P a T."
          ],
          actions: "Terapeutické řešení primární příčiny (horečka, sepse, strach, dehydratace, anafylaxe).",
          severity: "normal"
        };
    }
  };

  const guide = getInterpretationGuide();

  // Custom styling elements based on Theme
  const isCyber = themeMode === "cyber";
  const gridColor = isCyber ? "#16a34a" : "#f87171";
  const gridOpacity = isCyber ? 0.08 : 0.25;
  const traceColor = isCyber ? "#22c55e" : "#dc2626"; // neon green vs classic red ink

  const renderChart = (lead: "I" | "II" | "III", height: number = 180) => {
    const dataKey = lead === "I" ? "valI" : lead === "II" ? "valII" : "valIII";
    return (
      <div 
        className={`w-full relative rounded-xl border p-2 transition-all ${
          isCyber 
            ? "bg-[#080d09] border-[#166534]/40 shadow-[inset_0_0_15px_rgba(22,101,34,0.15)]" 
            : "bg-[#fffbf7] border-[#fca5a5]/30 shadow-sm"
        }`}
        style={{ height }}
      >
        <span className={`absolute top-2 left-3 z-10 px-2 py-0.5 rounded font-mono text-[11px] font-bold ${
          isCyber ? "bg-[#166534]/30 text-[#4ade80] border border-[#22c55e]/20" : "bg-red-50 text-red-700 border border-red-200"
        }`}>
          Svod {lead}
        </span>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={ekgData} margin={{ top: 15, right: 10, left: -25, bottom: 5 }}>
            <CartesianGrid 
              stroke={gridColor} 
              strokeOpacity={gridOpacity} 
              strokeWidth={1}
              verticalFill={isCyber ? undefined : ["rgba(252,165,165,0.02)"]}
              horizontalFill={isCyber ? undefined : ["rgba(252,165,165,0.02)"]}
            />
            <XAxis dataKey="time" hide={true} />
            <YAxis domain={[-2.5, 2.5]} hide={true} />
            <Line
              type="monotone"
              dataKey={dataKey}
              stroke={traceColor}
              strokeWidth={2.2}
              dot={false}
              animationDuration={0}
              isAnimationActive={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  };

  return (
    <div className="bg-[#191b23]/90 rounded-2xl border border-[#424754] p-4 space-y-4">
      {/* Header section with buttons */}
      <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-3">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-[#4d8eff]/10 flex items-center justify-center">
            <Activity className="w-4.5 h-4.5 text-[#adc6ff] animate-pulse" />
          </div>
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
              Elektrokardiogram (EKG Záznamník)
            </h4>
            <p className="text-[10px] text-[#c2c6d6]">
              Real-time analýza srdečního rytmu z lůžkového monitoru
            </p>
          </div>
        </div>

        {/* View and theme controllers */}
        <div className="flex items-center gap-2 self-end sm:self-auto">
          {/* Play/Pause */}
          <button
            onClick={handleTogglePlay}
            className={`px-2.5 py-1.5 rounded-lg border text-[10px] font-bold flex items-center gap-1 transition-all cursor-pointer ${
              isPlaying
                ? "bg-amber-950/20 text-amber-400 border-amber-500/20 hover:bg-amber-950/40"
                : "bg-green-950/20 text-green-400 border-green-500/20 hover:bg-green-950/40"
            }`}
          >
            {isPlaying ? (
              <>
                <Pause className="w-3 h-3" /> ZASTAVIT
              </>
            ) : (
              <>
                <Play className="w-3 h-3" /> AKTIVOVAT
              </>
            )}
          </button>

          {/* Theme selection */}
          <button
            onClick={() => setThemeMode(isCyber ? "paper" : "cyber")}
            className="px-2.5 py-1.5 bg-[#272a31]/60 hover:bg-[#272a31] text-[#c2c6d6] border border-[#424754] rounded-lg text-[10px] font-bold font-mono transition-all flex items-center gap-1 cursor-pointer"
          >
            <RefreshCw className="w-3 h-3" />
            VZHLED: {isCyber ? "CYBER" : "PAPÍR"}
          </button>
        </div>
      </div>

      {/* Grid selector / tabs for leads */}
      <div className="flex items-center gap-2 bg-[#0b0e15]/60 p-1 rounded-lg border border-[#424754]/30">
        {(["I", "II", "III", "ALL"] as const).map((lead) => (
          <button
            key={lead}
            onClick={() => setSelectedLead(lead)}
            className={`flex-1 py-1.5 text-xs font-bold rounded transition-all cursor-pointer ${
              selectedLead === lead
                ? "bg-[#4d8eff] text-white shadow-md"
                : "text-[#c2c6d6] hover:text-white hover:bg-[#272a31]/40"
            }`}
          >
            {lead === "ALL" ? "Všechny svody" : `Svod ${lead}`}
          </button>
        ))}
      </div>

      {/* Rendering single chart or stack of all 3 */}
      <div className="space-y-3">
        {selectedLead === "ALL" ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {renderChart("I", 140)}
            {renderChart("II", 140)}
            {renderChart("III", 140)}
          </div>
        ) : (
          renderChart(selectedLead, 190)
        )}
      </div>

      {/* Diagnostic & Interpretation panel */}
      <div className={`p-3.5 rounded-xl border text-xs flex flex-col sm:flex-row gap-3.5 items-start ${
        guide.severity === "high"
          ? "bg-red-950/15 border-red-500/25 text-red-200"
          : "bg-green-950/15 border-green-500/25 text-green-200"
      }`}>
        <div className="shrink-0 mt-0.5">
          {guide.severity === "high" ? (
            <ShieldAlert className="w-5 h-5 text-red-400 animate-pulse" />
          ) : (
            <CheckCircle className="w-5 h-5 text-green-400" />
          )}
        </div>

        <div className="space-y-2 flex-1">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
            <span className="font-extrabold text-sm text-white">{guide.title}</span>
            <span className={`px-2 py-0.5 rounded text-[9px] font-bold self-start sm:self-auto ${
              guide.severity === "high" 
                ? "bg-red-500/10 border border-red-500/30 text-red-400" 
                : "bg-green-500/10 border border-green-500/30 text-green-400"
            }`}>
              {guide.severity === "high" ? "KRITICKÝ NÁLEZ" : "STABILNÍ NÁLEZ"}
            </span>
          </div>

          <div className="space-y-1.5 text-xs text-[#c2c6d6] leading-relaxed">
            <p className="font-semibold text-white">Hlavní EKG znaky k interpretaci:</p>
            <ul className="list-disc list-inside space-y-0.5 pl-1">
              {guide.findings.map((finding, index) => (
                <li key={index}>{finding}</li>
              ))}
            </ul>
            <div className="mt-2 pt-2 border-t border-[#424754]/30 text-[#adc6ff] flex items-center gap-1">
              <Info className="w-4 h-4 text-[#adc6ff] shrink-0" />
              <span><strong>Doporučený postup:</strong> {guide.actions}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
