import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import {
  Activity,
  BookOpen,
  GraduationCap,
  Shield,
  Stethoscope,
  ChevronRight,
  Wind,
  MessageCircle
} from 'lucide-react';
import EmergencyModule from './components/EmergencyModule';
import AnesthesiaModule from './components/AnesthesiaModule';
import VentilationModule from './components/VentilationModule';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { ANESTHESIA_MEDS } from './data/meds';
import SupportButton from './components/SupportButton';
import FeedbackButton from './components/FeedbackButton';
import PatientSimulator from './components/PatientSimulator';

function AppContent() {
  const { language, setLanguage, t } = useLanguage();
  const [activeModule, setActiveModule] = useState<'home' | 'emergency' | 'pharmacology' | 'ventilation' | 'simulator'>('home');
  const [masteredCount, setMasteredCount] = useState(0);
  const [apiHealth, setApiHealth] = useState<{ configured: boolean; checking: boolean }>({
    configured: false,
    checking: true
  });

  // Check LocalStorage statistics on load
  useEffect(() => {
    const checkStats = () => {
      const savedMastered = localStorage.getItem('mastered_anesthesia_meds');
      if (savedMastered) {
        try {
          const parsed = JSON.parse(savedMastered);
          setMasteredCount(parsed.length);
        } catch (e) {
          console.error(e);
        }
      }
    };
    checkStats();

    // Custom event or periodic check for live mastery counts
    const interval = setInterval(checkStats, 2000);
    return () => clearInterval(interval);
  }, []);

  // Check if server-side Gemini API key is configured
  useEffect(() => {
    fetch('/api/health')
      .then(res => res.json())
      .then(data => {
        setApiHealth({
          configured: !!data.geminiConfigured,
          checking: false
        });
      })
      .catch(() => {
        setApiHealth({
          configured: false,
          checking: false
        });
      });
  }, []);

  return (
    <div className="min-h-screen glass-portal-bg text-slate-100 font-sans selection:bg-blue-500 selection:text-white relative overflow-x-hidden">
      {/* Mesh Gradient Background Elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600 rounded-full blur-[140px] opacity-20 pointer-events-none"></div>
      <div className="absolute bottom-[10%] right-[-5%] w-[35%] h-[35%] bg-teal-500 rounded-full blur-[120px] opacity-15 pointer-events-none"></div>
      <div className="absolute top-[20%] right-[10%] w-[25%] h-[25%] bg-indigo-500 rounded-full blur-[130px] opacity-15 pointer-events-none"></div>

      {/* Top Clinical Header Bar */}
      <header className="sticky top-0 z-40 glass-panel border-b border-white/10 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => setActiveModule('home')}>
            <div className="p-2.5 bg-blue-600 rounded-lg text-white shadow-md shadow-blue-600/20 flex items-center justify-center">
              <Stethoscope className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400 block -mb-0.5">LF OU • Clinical LMS</span>
              <h1 className="text-sm sm:text-base font-extrabold tracking-tight text-white">
                {language === 'cs' ? 'Lékařský resuscitační, farmakologický a UPV portál' : 'Medical Resuscitation, Anesthesia & Ventilation Portal'}
              </h1>
            </div>
          </div>

          {/* Core Navigation controls */}
          <nav className="hidden md:flex items-center gap-2">
            <button
              onClick={() => setActiveModule('home')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all border ${
                activeModule === 'home' ? 'bg-white/10 text-white border-white/20' : 'text-slate-400 hover:text-white border-transparent hover:bg-white/5'
              }`}
            >
              {t('homePortal')}
            </button>
            <button
              onClick={() => setActiveModule('emergency')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all border ${
                activeModule === 'emergency' ? 'bg-red-500/20 text-red-300 border-red-500/30' : 'text-slate-400 hover:text-white border-transparent hover:bg-white/5'
              }`}
            >
              {t('resuscitationArena')}
            </button>
            <button
              onClick={() => setActiveModule('pharmacology')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all border ${
                activeModule === 'pharmacology' ? 'bg-teal-500/20 text-teal-300 border-teal-500/30' : 'text-slate-400 hover:text-white border-transparent hover:bg-white/5'
              }`}
            >
              {t('pharmacologyHub')}
            </button>
            <button
              onClick={() => setActiveModule('ventilation')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all border ${
                activeModule === 'ventilation' ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30' : 'text-slate-400 hover:text-white border-transparent hover:bg-white/5'
              }`}
            >
              {t('ventilationHub')}
            </button>
            <button
              onClick={() => setActiveModule('simulator')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all border ${
                activeModule === 'simulator' ? 'bg-violet-500/20 text-violet-200 border-violet-400/30' : 'text-slate-400 hover:text-white border-transparent hover:bg-white/5'
              }`}
            >
              AI Patient
            </button>
          </nav>

          {/* Language and API controls */}
          <div className="flex items-center gap-4">
            {/* Bilingual Pill Selector */}
            <div className="flex items-center gap-1 bg-white/5 border border-white/10 p-1 rounded-lg">
              <button
                onClick={() => setLanguage('en')}
                className={`px-2 py-0.5 rounded text-[10px] font-extrabold transition-all ${
                  language === 'en' ? 'bg-blue-600 text-white shadow-sm' : 'text-slate-400 hover:text-white'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage('cs')}
                className={`px-2 py-0.5 rounded text-[10px] font-extrabold transition-all ${
                  language === 'cs' ? 'bg-blue-600 text-white shadow-sm' : 'text-slate-400 hover:text-white'
                }`}
              >
                CZ
              </button>
            </div>

            {/* Quick API Health status */}
            <div className="hidden sm:flex items-center gap-2 text-xs">
              <span className="text-slate-400 font-medium">{t('apiHealthLabel')}</span>
              {apiHealth.checking ? (
                <span className="text-[10px] text-slate-400 animate-pulse">{t('checking')}</span>
              ) : apiHealth.configured ? (
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-teal-500/10 text-teal-300 border border-teal-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
                  {t('online')}
                </span>
              ) : (
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-500/10 text-amber-300 border border-amber-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                  {t('localOnly')}
                </span>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
        {activeModule === 'home' && (
          <div className="flex flex-col gap-10">
            {/* Elegant Hero Banner card */}
            <div className="relative overflow-hidden glass-panel rounded-3xl p-8 md:p-10 shadow-xl">
              <div className="absolute right-0 top-0 w-1/3 h-full opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-400 via-indigo-900 to-transparent pointer-events-none" />
              
              <div className="max-w-2xl relative z-10 flex flex-col gap-4">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold glass-pill text-blue-300 w-fit">
                  <GraduationCap className="w-4 h-4" />
                  {t('heroBadge')}
                </div>

                <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight leading-tight text-white">
                  {t('heroTitle')}
                </h2>
                
                <p className="text-sm md:text-base text-slate-300 leading-relaxed font-sans font-medium">
                  {t('heroDesc')}
                </p>
              </div>

              {/* Live study telemetry widgets */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 border-t border-white/10 pt-6 text-xs">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 glass-card rounded-lg text-teal-400">
                    <BookOpen className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-slate-400 block font-medium">{t('masteredTracker')}</span>
                    <strong className="text-white font-bold">{masteredCount} {t('masteredOf')} {ANESTHESIA_MEDS.length} {t('masteredTitle')}</strong>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-2.5 glass-card rounded-lg text-red-400">
                    <Activity className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-slate-400 block font-medium">{t('guidelineCoverage')}</span>
                    <strong className="text-white font-bold">{t('guidelineList')}</strong>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-2.5 glass-card rounded-lg text-blue-400">
                    <Shield className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-slate-400 block font-medium">{t('standardsVersion')}</span>
                    <strong className="text-white font-bold">{t('standardsList')}</strong>
                  </div>
                </div>
              </div>
            </div>

            {/* Portal Module Entry Choices */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
              {/* Emergency medicine box */}
              <div className="group glass-card glass-card-hover rounded-2xl p-6 shadow-sm flex flex-col justify-between">
                <div className="flex flex-col gap-4">
                  <div className="w-12 h-12 bg-red-500/10 text-red-400 rounded-xl flex items-center justify-center border border-red-500/20">
                    <Activity className="w-6 h-6 animate-pulse" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold tracking-tight text-white group-hover:text-red-400 transition-colors">
                      {t('emergencyTitle')}
                    </h3>
                    <p className="text-xs text-slate-400 font-sans mt-1.5 leading-relaxed">
                      {t('emergencyDesc')}
                    </p>
                  </div>

                  <div className="glass-pill p-4 rounded-xl text-xs flex flex-col gap-2 mt-2">
                    <span className="font-bold text-slate-300 block uppercase tracking-wide">{t('emergencyIncluded')}</span>
                    <div className="grid grid-cols-1 gap-2 text-slate-400 font-medium">
                      <div className="flex items-center gap-1.5">
                        <span className="text-red-400 font-bold">•</span>
                        {t('emergencyFeat1')}
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-red-400 font-bold">•</span>
                        {t('emergencyFeat2')}
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-blue-400 font-bold">✦</span>
                        {t('emergencyFeat3')}
                      </div>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => setActiveModule('emergency')}
                  className="mt-6 flex items-center justify-center gap-1.5 py-3 bg-red-500/20 hover:bg-red-500/30 text-red-300 hover:text-white border border-red-500/20 hover:border-red-400/50 font-bold rounded-xl text-xs tracking-wider transition-all shadow-sm cursor-pointer"
                >
                  {t('emergencyBtn')}
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              {/* Anesthesia pharmacology box */}
              <div className="group glass-card glass-card-hover rounded-2xl p-6 shadow-sm flex flex-col justify-between">
                <div className="flex flex-col gap-4">
                  <div className="w-12 h-12 bg-teal-500/10 text-teal-400 rounded-xl flex items-center justify-center border border-teal-500/20">
                    <Stethoscope className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold tracking-tight text-white group-hover:text-teal-400 transition-colors">
                      {t('pharmacologyTitle')}
                    </h3>
                    <p className="text-xs text-slate-400 font-sans mt-1.5 leading-relaxed">
                      {t('pharmacologyDesc')}
                    </p>
                  </div>

                  <div className="glass-pill p-4 rounded-xl text-xs flex flex-col gap-2 mt-2">
                    <span className="font-bold text-slate-300 block uppercase tracking-wide">{t('pharmacologyIncluded')}</span>
                    <div className="grid grid-cols-1 gap-2 text-slate-400 font-medium">
                      <div className="flex items-center gap-1.5">
                        <span className="text-teal-400 font-bold">•</span>
                        {t('pharmacologyFeat1')}
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-teal-400 font-bold">•</span>
                        {t('pharmacologyFeat2')}
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-teal-400 font-bold">•</span>
                        {t('pharmacologyFeat3')}
                      </div>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => setActiveModule('pharmacology')}
                  className="mt-6 flex items-center justify-center gap-1.5 py-3 bg-teal-500/20 hover:bg-teal-500/30 text-teal-300 hover:text-white border border-teal-500/20 hover:border-teal-400/50 font-bold rounded-xl text-xs tracking-wider transition-all shadow-sm cursor-pointer"
                >
                  {t('pharmacologyBtn')}
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              {/* Mechanical Ventilation UPV box */}
              <div className="group glass-card glass-card-hover rounded-2xl p-6 shadow-sm flex flex-col justify-between">
                <div className="flex flex-col gap-4">
                  <div className="w-12 h-12 bg-emerald-500/10 text-emerald-400 rounded-xl flex items-center justify-center border border-emerald-500/20">
                    <Wind className="w-6 h-6 animate-pulse" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold tracking-tight text-white group-hover:text-emerald-400 transition-colors">
                      {t('ventilationTitle')}
                    </h3>
                    <p className="text-xs text-slate-400 font-sans mt-1.5 leading-relaxed">
                      {t('ventilationDesc')}
                    </p>
                  </div>

                  <div className="glass-pill p-4 rounded-xl text-xs flex flex-col gap-2 mt-2">
                    <span className="font-bold text-slate-300 block uppercase tracking-wide">{t('ventilationIncluded')}</span>
                    <div className="grid grid-cols-1 gap-2 text-slate-400 font-medium">
                      <div className="flex items-center gap-1.5">
                        <span className="text-emerald-400 font-bold">•</span>
                        {t('ventilationFeat1')}
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-emerald-400 font-bold">•</span>
                        {t('ventilationFeat2')}
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-emerald-400 font-bold">•</span>
                        {t('ventilationFeat3')}
                      </div>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => setActiveModule('ventilation')}
                  className="mt-6 flex items-center justify-center gap-1.5 py-3 bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 hover:text-white border border-emerald-500/20 hover:border-emerald-400/50 font-bold rounded-xl text-xs tracking-wider transition-all shadow-sm cursor-pointer"
                >
                  {t('ventilationBtn')}
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              {/* Live AI patient chat simulator */}
              <div className="group glass-card glass-card-hover rounded-2xl p-6 shadow-sm flex flex-col justify-between">
                <div className="flex flex-col gap-4">
                  <div className="w-12 h-12 bg-violet-500/10 text-violet-300 rounded-xl flex items-center justify-center border border-violet-400/20">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold tracking-tight text-white group-hover:text-violet-300 transition-colors">Live AI Patient</h3>
                    <p className="text-xs text-slate-400 font-sans mt-1.5 leading-relaxed">
                      {language === 'cs' ? 'Trénujte klinický rozhovor, diferenciální diagnostiku a první léčebné kroky u dynamického pacienta.' : 'Practice clinical interviewing, differential diagnosis, and first treatment steps with a dynamic patient.'}
                    </p>
                  </div>
                  <div className="glass-pill p-4 rounded-xl text-xs text-slate-400 font-medium">
                    {language === 'cs' ? 'Živé vitální funkce • AI odpovědi • bezpečný trénink' : 'Live vital signs • AI responses • safe practice'}
                  </div>
                </div>
                <button
                  onClick={() => setActiveModule('simulator')}
                  className="mt-6 flex items-center justify-center gap-1.5 py-3 bg-violet-500/20 hover:bg-violet-500/30 text-violet-200 hover:text-white border border-violet-400/20 hover:border-violet-300/50 font-bold rounded-xl text-xs tracking-wider transition-all shadow-sm cursor-pointer"
                >
                  {language === 'cs' ? 'Otevřít simulátor' : 'Open simulator'}
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* 3. MODULAR VIEWS */}
        {activeModule === 'emergency' && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
            <EmergencyModule />
          </motion.div>
        )}

        {activeModule === 'pharmacology' && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
            <AnesthesiaModule />
          </motion.div>
        )}

        {activeModule === 'ventilation' && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
            <VentilationModule />
          </motion.div>
        )}

        {activeModule === 'simulator' && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
            <PatientSimulator />
          </motion.div>
        )}
      </main>

      {/* High-quality Academic medical footer */}
      <footer className="bg-white/5 border-t border-white/10 mt-16 text-slate-400 py-8 text-xs font-sans backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col gap-2.5 max-w-2xl text-center md:text-left">
            <p className="leading-relaxed">
              {t('academicFooter')}
            </p>
            <div className="flex justify-center md:justify-start gap-4">
              <span className="hover:text-white transition-colors cursor-pointer">{t('privacyAndTerms')}</span>
              <span>•</span>
              <span className="hover:text-white transition-colors cursor-pointer">{t('academicOnly')}</span>
            </div>
          </div>
          <div className="flex justify-center shrink-0 gap-3 items-center flex-wrap">
            <SupportButton />
            <FeedbackButton />
          </div>
        </div>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}
