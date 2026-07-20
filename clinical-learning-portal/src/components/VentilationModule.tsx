import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Wind,
  Activity,
  Calculator,
  Layers,
  HelpCircle,
  CheckCircle,
  AlertTriangle,
  Zap,
  BookOpen,
  ArrowRight,
  RefreshCw,
  Gauge
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function VentilationModule() {
  const { language } = useLanguage();
  const isCs = language === 'cs';

  const [activeTab, setActiveTab] = useState<'basics' | 'modes' | 'curves' | 'calculator'>('basics');

  // Calculator state
  const [vt, setVt] = useState<number>(450); // ml
  const [pip, setPip] = useState<number>(28); // cmH2O
  const [pplat, setPplat] = useState<number>(20); // cmH2O
  const [peep, setPeep] = useState<number>(8); // cmH2O
  const [flow, setFlow] = useState<number>(60); // L/min

  // Calculations
  const cStat = pplat > peep ? Math.round((vt / (pplat - peep)) * 10) / 10 : 0; // ml/cmH2O
  const cDyn = pip > peep ? Math.round((vt / (pip - peep)) * 10) / 10 : 0; // ml/cmH2O
  const flowLPerSec = flow / 60;
  const resistance = flowLPerSec > 0 && pip > pplat ? Math.round(((pip - pplat) / flowLPerSec) * 10) / 10 : 0; // cmH2O/L/s
  const tauSec = Math.round((resistance * (cStat / 1000)) * 100) / 100; // seconds
  const drivingPressure = pplat - peep;
  const minTe = Math.round(tauSec * 4 * 10) / 10;

  return (
    <div className="flex flex-col gap-8">
      {/* Banner */}
      <div className="relative overflow-hidden glass-panel rounded-3xl p-6 md:p-8 shadow-xl">
        <div className="absolute right-0 top-0 w-1/3 h-full opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-teal-400 via-emerald-800 to-transparent pointer-events-none" />
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative z-10">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-teal-500/20 text-teal-300 rounded-2xl border border-teal-500/30 flex items-center justify-center">
              <Wind className="w-8 h-8 animate-pulse" />
            </div>
            <div>
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-teal-400 block">
                {isCs ? 'LF OU • JIP / ARO LMS' : 'LF OU • ICU / CCU LMS'}
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
                {isCs ? 'Mechanická plicní ventilace (UPV)' : 'Mechanical Ventilation (UPV)'}
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 font-medium max-w-xl">
                {isCs
                  ? 'Fyzikální rovnice pohybu, mechanika dýchání, ventilační režimy a klinická kalkulace u lůžka podle standardů ČSARIM / ČSIM.'
                  : 'Physics equation of motion, respiratory mechanics, ventilation modes, and bedside clinical calculators compliant with ASA/ESICM standards.'}
              </p>
            </div>
          </div>
        </div>

        {/* Tab Controls */}
        <div className="flex flex-wrap items-center gap-2 mt-6 pt-6 border-t border-white/10">
          <button
            onClick={() => setActiveTab('basics')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all border ${
              activeTab === 'basics'
                ? 'bg-teal-500/20 text-teal-300 border-teal-500/40 shadow-md'
                : 'text-slate-400 hover:text-white border-transparent hover:bg-white/5'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            {isCs ? '1. Základy & Fyzikální principy' : '1. Fundamentals & Physics'}
          </button>
          <button
            onClick={() => setActiveTab('modes')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all border ${
              activeTab === 'modes'
                ? 'bg-teal-500/20 text-teal-300 border-teal-500/40 shadow-md'
                : 'text-slate-400 hover:text-white border-transparent hover:bg-white/5'
            }`}
          >
            <Layers className="w-4 h-4" />
            {isCs ? '2. Ventilační režimy & PEEP' : '2. Ventilation Modes & PEEP'}
          </button>
          <button
            onClick={() => setActiveTab('curves')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all border ${
              activeTab === 'curves'
                ? 'bg-teal-500/20 text-teal-300 border-teal-500/40 shadow-md'
                : 'text-slate-400 hover:text-white border-transparent hover:bg-white/5'
            }`}
          >
            <Activity className="w-4 h-4" />
            {isCs ? '3. Křivky & Asynchronie' : '3. Waveforms & Asynchronies'}
          </button>
          <button
            onClick={() => setActiveTab('calculator')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all border ${
              activeTab === 'calculator'
                ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40 shadow-md'
                : 'text-slate-400 hover:text-white border-transparent hover:bg-white/5'
            }`}
          >
            <Calculator className="w-4 h-4" />
            {isCs ? '4. Bedside Kalkulátor Mechaniky' : '4. Bedside Mechanics Calculator'}
          </button>
        </div>
      </div>

      {/* Tab Content */}
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.2 }}>
        {activeTab === 'basics' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Equation of Motion Card */}
            <div className="glass-card rounded-2xl p-6 border border-white/10 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-500/10 text-blue-400 rounded-lg">
                  <Zap className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white">
                  {isCs ? 'Rovnice pohybu (Equation of Motion)' : 'Equation of Motion'}
                </h3>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed font-sans">
                {isCs
                  ? 'Základní fyzikální popis mechaniky dýchání. Popisuje celkový tlak v dýchacích cestách (Paw), který musí ventilátor vyvinout k překonání pružnosti plic a odporu dýchacích cest:'
                  : 'The foundational equation governing mechanical ventilation physics, accounting for static elastic forces and dynamic airway resistance:'}
              </p>
              <div className="p-4 bg-slate-900/80 rounded-xl border border-blue-500/30 text-center text-sm font-mono text-teal-300 font-bold">
                P<sub>aw</sub> = (V / C) + (R · V̇) + PEEP
              </div>
              <ul className="text-xs text-slate-400 space-y-2 font-medium">
                <li><strong className="text-white">V / C:</strong> {isCs ? 'Statický (elastický) tlak k překonání pružnosti plic a hrudníku.' : 'Elastance component overcoming lung parenchymal stiffness.'}</li>
                <li><strong className="text-white">R · V̇:</strong> {isCs ? 'Dynamický tlak k překonání odporu proudění plynu dýchacími cestami.' : 'Resistive pressure required to drive airflow through tubes.'}</li>
                <li><strong className="text-white">PEEP:</strong> {isCs ? 'Pozitivní tlak na konci výdechu udržující alveoly v rozepnutém stavu.' : 'Positive End-Expiratory Pressure preventing end-expiratory atelectasis.'}</li>
              </ul>
            </div>

            {/* Compliance Card */}
            <div className="glass-card rounded-2xl p-6 border border-white/10 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-teal-500/10 text-teal-400 rounded-lg">
                  <Gauge className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white">
                  {isCs ? 'Compliance (Poddajnost plic)' : 'Compliance (C)'}
                </h3>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed font-sans">
                {isCs
                  ? 'Poddajnost vyjadřuje schopnost plic měnit objem při dané změně tlaku (C = ΔV / ΔP).'
                  : 'Compliance represents lung volume change per unit change in pressure (C = ΔV / ΔP).'}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                  <span className="font-bold text-teal-300 block mb-1">C<sub>stat</sub> (Statická)</span>
                  <p className="text-[11px] text-slate-300 font-mono">V<sub>T</sub> / (P<sub>plat</sub> - PEEP)</p>
                  <p className="text-[10px] text-slate-400 mt-1">Norma: 50–80 ml/cmH<sub>2</sub>O. Pokles u ARDS (&lt;30).</p>
                </div>
                <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                  <span className="font-bold text-blue-300 block mb-1">C<sub>dyn</sub> (Dynamická)</span>
                  <p className="text-[11px] text-slate-300 font-mono">V<sub>T</sub> / (PIP - PEEP)</p>
                  <p className="text-[10px] text-slate-400 mt-1">Zahrnuje i rezistenční složku proudění.</p>
                </div>
              </div>
            </div>

            {/* Resistance & Dead Space Card */}
            <div className="glass-card rounded-2xl p-6 border border-white/10 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-amber-500/10 text-amber-400 rounded-lg">
                  <Wind className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white">
                  {isCs ? 'Rezistence (R) a Mrtvý prostor (VD)' : 'Airway Resistance (R) & Dead Space'}
                </h3>
              </div>
              <div className="space-y-3 text-xs text-slate-300">
                <p>
                  <strong className="text-amber-300">Rezistence R = (PIP - P<sub>plat</sub>) / V̇:</strong> {isCs ? 'Odpor dýchacích cest. Normální hodnota u ETK je 5–10 cmH2O/L/s. Zvýšení signalizuje bronchospasmus, sekret či obstruovanou kanylu.' : 'Airway resistance. Normal values for ETK are 5-10 cmH2O/L/s.'}
                </p>
                <p>
                  <strong className="text-blue-300">Anatomický vs Alveolární mrtvý prostor:</strong> {isCs ? 'VD/VT činí normálně 20–30 %. U těžkého ARDS nebo plicní embolie roste přes 50 %, což vyžaduje úpravu minutové ventilace.' : 'Physiological dead space ratio VD/VT increases in ARDS or PE.'}
                </p>
              </div>
            </div>

            {/* Time Constant Tau Card */}
            <div className="glass-card rounded-2xl p-6 border border-white/10 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-emerald-500/10 text-emerald-400 rounded-lg">
                  <Activity className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white">
                  {isCs ? 'Časová konstanta (Tau, τ = R · C)' : 'Time Constant (τ = R · C)'}
                </h3>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed font-sans">
                {isCs
                  ? 'Časová konstanta vyjadřuje rychlost vyprázdnění nebo naplnění alveolů. Za 1τ se plíce vyprázdní z 63 %, za 3–4τ z více než 95 %.'
                  : 'Time constant determines the rate of alveolar inflation and deflation. Complete exhalation requires 3–5 τ.'}
              </p>
              <div className="p-3 bg-emerald-500/10 border border-emerald-500/20 rounded-xl text-xs text-emerald-200">
                <strong>{isCs ? 'Klinické pravidlo:' : 'Clinical Rule:'}</strong> {isCs ? 'U obstrukce (CHOPN) je τ dlouhá (hrozí Auto-PEEP!). U restrikce (ARDS) je τ krátká.' : 'Obstructive disease has long τ (risk of Auto-PEEP). ARDS has short τ.'}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'modes' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass-card rounded-2xl p-6 border border-white/10 flex flex-col gap-3">
              <span className="px-2.5 py-1 rounded-md text-[10px] font-bold bg-blue-500/20 text-blue-300 w-fit">VCV</span>
              <h3 className="text-base font-bold text-white">{isCs ? 'Objemově řízená ventilace' : 'Volume Control (VCV)'}</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                {isCs
                  ? 'Garantuje přesný dechový objem (VT). Tlaky v dýchacích cestách (PIP) se mění podle změny poddajnosti a rezistence.'
                  : 'Delivers fixed tidal volume. Airway pressure varies according to lung mechanics.'}
              </p>
            </div>

            <div className="glass-card rounded-2xl p-6 border border-white/10 flex flex-col gap-3">
              <span className="px-2.5 py-1 rounded-md text-[10px] font-bold bg-teal-500/20 text-teal-300 w-fit">PCV</span>
              <h3 className="text-base font-bold text-white">{isCs ? 'Tlakově řízená ventilace' : 'Pressure Control (PCV)'}</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                {isCs
                  ? 'Garantuje nastavený inspirační tlak (Pinsp). Dechový objem závisí na compliance a rezistenci pacienta.'
                  : 'Maintains constant inspiratory pressure. Tidal volume varies with patient compliance.'}
              </p>
            </div>

            <div className="glass-card rounded-2xl p-6 border border-white/10 flex flex-col gap-3">
              <span className="px-2.5 py-1 rounded-md text-[10px] font-bold bg-amber-500/20 text-amber-300 w-fit">PSV / CPAP</span>
              <h3 className="text-base font-bold text-white">{isCs ? 'Tlaková podpora & CPAP' : 'Pressure Support (PSV)'}</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                {isCs
                  ? 'Podpůrný režim pro sponánně dýchající pacienty. Pacient sám spouští dech (triggering) a ventilátor asistuje nastaveným tlakem PS.'
                  : 'Assists spontaneous breathing efforts with user-defined pressure support.'}
              </p>
            </div>

            {/* ARDS Protocol banner */}
            <div className="md:col-span-3 glass-card rounded-2xl p-6 border border-teal-500/30 bg-teal-950/20 flex flex-col gap-3">
              <h4 className="text-sm font-extrabold text-teal-300 uppercase tracking-wider">
                {isCs ? 'Protektivní ventilace u ARDS (ARDSNet Protocol)' : 'ARDS Lung Protective Ventilation Protocol'}
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-slate-200">
                <div className="p-3 bg-white/5 rounded-xl">
                  <strong className="text-white block font-bold mb-1">Low Tidal Volume (V<sub>T</sub>)</strong>
                  <span>{isCs ? '4–8 ml/kg ideální tělesné hmotnosti (PBW), nikoli skutečné hmotnosti!' : '4-8 ml/kg Predicted Body Weight (PBW).'}</span>
                </div>
                <div className="p-3 bg-white/5 rounded-xl">
                  <strong className="text-white block font-bold mb-1">Plateau Pressure (P<sub>plat</sub>)</strong>
                  <span>{isCs ? 'Držte Pplat < 30 cmH2O pro prevenci barotraumatu a volutraumu.' : 'Keep Pplat < 30 cmH2O.'}</span>
                </div>
                <div className="p-3 bg-white/5 rounded-xl">
                  <strong className="text-white block font-bold mb-1">Driving Pressure (ΔP)</strong>
                  <span>{isCs ? 'ΔP = Pplat - PEEP. Cílová hodnota ΔP < 15 cmH2O výrazně snižuje mortalitu.' : 'Driving pressure ΔP < 15 cmH2O.'}</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'curves' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass-card rounded-2xl p-6 border border-white/10 flex flex-col gap-3">
              <h3 className="text-base font-bold text-white">{isCs ? 'Auto-PEEP & Air Trapping' : 'Auto-PEEP & Air Trapping'}</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                {isCs
                  ? 'Když expirační průtok nedosáhne nuly před začátkem dalšího nádechu. Vzduch zůstává uvíznutý v alveolech (dynamic hyperinflation). Často u CHOPN a těžkého astmatu.'
                  : 'Incomplete exhalation before next breath initiation, causing trapped gas and hemodynamically dangerous intrinsic PEEP.'}
              </p>
            </div>

            <div className="glass-card rounded-2xl p-6 border border-white/10 flex flex-col gap-3">
              <h3 className="text-base font-bold text-white">{isCs ? 'Ventilační asynchronie' : 'Patient-Ventilator Asynchrony'}</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                {isCs
                  ? 'Neshoda mezi pacientovým nervovým úsilím a akcí ventilátoru: Double triggering (dvojité spuštění), Ineffective triggering (neúčinné úsilí) či Flow starvation (nedostatek průtoku).'
                  : 'Mismatch between patient neural respiratory drive and mechanical ventilator breath delivery.'}
              </p>
            </div>
          </div>
        )}

        {activeTab === 'calculator' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Input Form */}
            <div className="glass-card rounded-2xl p-6 border border-white/10 flex flex-col gap-4">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Calculator className="w-5 h-5 text-emerald-400" />
                {isCs ? 'Vstupní ventilační parametry' : 'Ventilator Input Parameters'}
              </h3>

              <div className="space-y-4 text-xs">
                <div>
                  <label className="text-slate-300 font-bold block mb-1">
                    {isCs ? 'Dechový objem VT (ml):' : 'Tidal Volume VT (ml):'} <span className="text-emerald-400 font-mono">{vt} ml</span>
                  </label>
                  <input
                    type="range"
                    min="200"
                    max="800"
                    step="10"
                    value={vt}
                    onChange={(e) => setVt(Number(e.target.value))}
                    className="w-full accent-emerald-400"
                  />
                </div>

                <div>
                  <label className="text-slate-300 font-bold block mb-1">
                    {isCs ? 'Špičkový tlak PIP (cmH2O):' : 'Peak Inspiratory Pressure PIP (cmH2O):'} <span className="text-emerald-400 font-mono">{pip} cmH2O</span>
                  </label>
                  <input
                    type="range"
                    min="10"
                    max="50"
                    step="1"
                    value={pip}
                    onChange={(e) => setPip(Number(e.target.value))}
                    className="w-full accent-emerald-400"
                  />
                </div>

                <div>
                  <label className="text-slate-300 font-bold block mb-1">
                    {isCs ? 'Tlak na plató Pplat (cmH2O):' : 'Plateau Pressure Pplat (cmH2O):'} <span className="text-emerald-400 font-mono">{pplat} cmH2O</span>
                  </label>
                  <input
                    type="range"
                    min="5"
                    max={pip}
                    step="1"
                    value={pplat}
                    onChange={(e) => setPplat(Number(e.target.value))}
                    className="w-full accent-emerald-400"
                  />
                </div>

                <div>
                  <label className="text-slate-300 font-bold block mb-1">
                    {isCs ? 'PEEP (cmH2O):' : 'PEEP (cmH2O):'} <span className="text-emerald-400 font-mono">{peep} cmH2O</span>
                  </label>
                  <input
                    type="range"
                    min="0"
                    max={pplat - 1}
                    step="1"
                    value={peep}
                    onChange={(e) => setPeep(Number(e.target.value))}
                    className="w-full accent-emerald-400"
                  />
                </div>

                <div>
                  <label className="text-slate-300 font-bold block mb-1">
                    {isCs ? 'Inspirační průtok V̇ (L/min):' : 'Inspiratory Flow V̇ (L/min):'} <span className="text-emerald-400 font-mono">{flow} L/min</span>
                  </label>
                  <input
                    type="range"
                    min="30"
                    max="90"
                    step="5"
                    value={flow}
                    onChange={(e) => setFlow(Number(e.target.value))}
                    className="w-full accent-emerald-400"
                  />
                </div>
              </div>
            </div>

            {/* Calculations Dashboard */}
            <div className="lg:col-span-2 glass-card rounded-2xl p-6 border border-emerald-500/30 bg-emerald-950/10 flex flex-col gap-6">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Gauge className="w-5 h-5 text-emerald-400" />
                {isCs ? 'Vypočtená plicní mechanika a vyhodnocení' : 'Calculated Respiratory Mechanics'}
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="p-4 bg-white/5 rounded-xl border border-white/10 flex flex-col gap-1">
                  <span className="text-slate-400 font-bold">{isCs ? 'Statická compliance (Cstat)' : 'Static Compliance (Cstat)'}</span>
                  <strong className="text-2xl font-black text-emerald-400 font-mono">{cStat} <span className="text-xs font-normal">ml/cmH<sub>2</sub>O</span></strong>
                  <span className="text-[11px] text-slate-400 mt-1">
                    {cStat >= 50
                      ? (isCs ? '✅ Normální poddajnost' : 'Normal compliance')
                      : (isCs ? '⚠️ Snížená poddajnost (např. ARDS, plicní edém)' : 'Decreased compliance')}
                  </span>
                </div>

                <div className="p-4 bg-white/5 rounded-xl border border-white/10 flex flex-col gap-1">
                  <span className="text-slate-400 font-bold">{isCs ? 'Rezistence dýchacích cest (R)' : 'Airway Resistance (R)'}</span>
                  <strong className="text-2xl font-black text-amber-400 font-mono">{resistance} <span className="text-xs font-normal">cmH<sub>2</sub>O/L/s</span></strong>
                  <span className="text-[11px] text-slate-400 mt-1">
                    {resistance <= 12
                      ? (isCs ? '✅ Nízký/Normální odpor' : 'Normal resistance')
                      : (isCs ? '⚠️ Zvýšený odpor dýchacích cest (bronchospasmus, sekret)' : 'High airway resistance')}
                  </span>
                </div>

                <div className="p-4 bg-white/5 rounded-xl border border-white/10 flex flex-col gap-1">
                  <span className="text-slate-400 font-bold">{isCs ? 'Driving Pressure (ΔP = Pplat - PEEP)' : 'Driving Pressure (ΔP)'}</span>
                  <strong className={`text-2xl font-black font-mono ${drivingPressure > 15 ? 'text-red-400' : 'text-teal-300'}`}>
                    {drivingPressure} <span className="text-xs font-normal">cmH<sub>2</sub>O</span>
                  </strong>
                  <span className="text-[11px] text-slate-400 mt-1">
                    {drivingPressure <= 15
                      ? (isCs ? '✅ Bezpečná hranice (ΔP < 15)' : 'Safe limit (ΔP < 15)')
                      : (isCs ? '🚨 RIZIKO VILI! Snižte VT nebo upravte PEEP' : 'High mortality risk')}
                  </span>
                </div>

                <div className="p-4 bg-white/5 rounded-xl border border-white/10 flex flex-col gap-1">
                  <span className="text-slate-400 font-bold">{isCs ? 'Časová konstanta (τ = R · Cstat)' : 'Time Constant (τ)'}</span>
                  <strong className="text-2xl font-black text-blue-300 font-mono">{tauSec} <span className="text-xs font-normal">sekund</span></strong>
                  <span className="text-[11px] text-slate-400 mt-1">
                    {isCs ? `Doporučený expirační čas Te ≥ ${minTe} s pro úplný výdech.` : `Min exp time Te ≥ ${minTe} s.`}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
}
