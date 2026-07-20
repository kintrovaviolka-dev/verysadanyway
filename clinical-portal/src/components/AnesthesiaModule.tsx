import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Search,
  Sparkles,
  Calculator,
  RotateCw,
  Bookmark,
  Award,
  ChevronRight,
  BookmarkCheck,
  Check,
  Compass,
  FileText,
  AlertTriangle
} from 'lucide-react';
import { ANESTHESIA_MEDS } from '../data/meds';
import { ANESTHESIA_MEDS_CS } from '../data/meds_cs';
import { ANESTHESIA_QUIZ } from '../data/quizzes';
import { ANESTHESIA_QUIZ_CS } from '../data/quizzes_cs';
import { Medication, QuizQuestion, MedCategory } from '../types';
import { useLanguage } from '../context/LanguageContext';

export default function AnesthesiaModule() {
  const { language } = useLanguage();

  // Select localized data
  const medsData = language === 'cs' ? ANESTHESIA_MEDS_CS : ANESTHESIA_MEDS;
  const quizData = language === 'cs' ? ANESTHESIA_QUIZ_CS : ANESTHESIA_QUIZ;

  const [activeTab, setActiveTab] = useState<'cards' | 'calculator' | 'quiz'>('cards');

  // Flashcards state
  const [searchTerm, setSearchString] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<MedCategory | 'all'>('all');
  const [isFlashcardMode, setIsFlashcardMode] = useState(true);
  const [flippedCardId, setFlippedCardId] = useState<string | null>(null);
  const [masteredMeds, setMasteredMeds] = useState<string[]>([]);

  // Calculator state
  const [calcWeight, setCalcWeight] = useState<number>(70);
  const [calcMedId, setCalcMedId] = useState<string>('propofol');
  const [patientStatus, setPatientStatus] = useState<'standard' | 'elderly' | 'shock' | 'pediatric'>('standard');

  // Quiz state
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState<number | null>(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
  const [quizScore, setQuizScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [shuffledQuestions, setShuffledQuestions] = useState<QuizQuestion[]>([]);

  // Load mastered meds from local storage
  useEffect(() => {
    const saved = localStorage.getItem('mastered_anesthesia_meds');
    if (saved) {
      try {
        setMasteredMeds(JSON.parse(saved));
      } catch (e) {
        console.error(e);
      }
    }
  }, []);

  // Shuffle quiz questions whenever quizData/language changes
  useEffect(() => {
    const questions = [...quizData].sort(() => 0.5 - Math.random());
    setShuffledQuestions(questions);
    setCurrentQuestionIndex(0);
    setSelectedAnswerIndex(null);
    setIsAnswerSubmitted(false);
    setQuizScore(0);
    setQuizCompleted(false);
  }, [quizData]);

  const toggleMastery = (medId: string, e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent card flipping on bookmark click
    let updated: string[];
    if (masteredMeds.includes(medId)) {
      updated = masteredMeds.filter(id => id !== medId);
    } else {
      updated = [...masteredMeds, medId];
    }
    setMasteredMeds(updated);
    localStorage.setItem('mastered_anesthesia_meds', JSON.stringify(updated));
  };

  const handleCardClick = (id: string) => {
    if (flippedCardId === id) {
      setFlippedCardId(null);
    } else {
      setFlippedCardId(id);
    }
  };

  const filteredMeds = medsData.filter(med => {
    const matchesSearch =
      med.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      med.class.toLowerCase().includes(searchTerm.toLowerCase()) ||
      med.mechanism.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || med.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Calculate induction dosages based on weight & clinical state
  const calculateDose = (medId: string, weight: number, status: 'standard' | 'elderly' | 'shock' | 'pediatric') => {
    const med = medsData.find(m => m.id === medId);
    if (!med) return null;

    let doseMgMin = 0;
    let doseMgMax = 0;
    let prepNote = med.standardPrep;
    let comments = '';

    // Calculate ranges
    if (medId === 'propofol') {
      if (status === 'elderly') {
        doseMgMin = weight * 1.0;
        doseMgMax = weight * 1.5;
        comments = language === 'cs'
          ? 'Starší pacienti: Vysoká citlivost na systémovou vazodilataci. Indukční dávka je snížena o 30-50 %. Podávejte pomalu.'
          : 'Elderly: Highly sensitive to systemic vasodilation. Induction requirements are reduced by 30-50%. Infuse slowly.';
      } else if (status === 'shock') {
        doseMgMin = weight * 0.5;
        doseMgMax = weight * 1.0;
        comments = language === 'cs'
          ? 'NEBEZPEČÍ: Propofol způsobuje hlubokou venodilataci a arteriální vazodilataci. Extrémní riziko hypotenze. Nejprve stabilizujte hemodynamiku!'
          : 'DANGER: Propofol causes profound venodilation and arterial vasodilation. Extreme hypotension risk. Stabilize hemodynamics first!';
      } else if (status === 'pediatric') {
        doseMgMin = weight * 2.5;
        doseMgMax = weight * 3.5;
        comments = language === 'cs'
          ? 'Pediatričtí pacienti: Vyšší metabolická clearance a větší relativní distribuční objem vyžadují vyšší váhové dávky pro úvod.'
          : 'Pediatric: Higher metabolic clearance and larger relative volume of distribution require larger weight-based induction boluses.';
      } else {
        doseMgMin = weight * 1.5;
        doseMgMax = weight * 2.5;
        comments = language === 'cs'
          ? 'Standardní dospělý: Typická indukční dávka s rychlým nástupem ("arm-brain travel time"). Udržujte standardní monitorování.'
          : 'Standard Adult: Typical rapid arm-brain travel time induction dose. Maintain standard cardiorespiratory monitoring.';
      }
    } else if (medId === 'ketamine') {
      if (status === 'elderly') {
        doseMgMin = weight * 0.75;
        doseMgMax = weight * 1.25;
        comments = language === 'cs'
          ? 'Starší pacienti: Pomalejší clearance. Zvažte současné podání benzodiazepinů (např. Midazolam) ke zmírnění rizika emergence deliria a živých snů.'
          : 'Elderly: Slower clearance. Co-administer benzodiazepine (e.g. Midazolam) to blunt emergence delirium and high-rate vivid dreaming.';
      } else if (status === 'shock') {
        doseMgMin = weight * 1.0;
        doseMgMax = weight * 1.5;
        comments = language === 'cs'
          ? 'Šok: Lék volby. Zvyšuje TK a SF stimulací uvolňování endogenních katecholaminů. U těžce vyčerpaných pacientů však může ketamin působit jako přímý depresant myokardu!'
          : 'Shock: Drug of choice. Increases BP and HR via sympathomimetic catecholamine release. NOTE: In severe catecholamine-depleted patients, ketamine acts as a direct myocardial depressant!';
      } else if (status === 'pediatric') {
        doseMgMin = weight * 1.5;
        doseMgMax = weight * 2.0;
        comments = language === 'cs'
          ? 'Pediatričtí pacienti: Vynikající prostředek pro procedurální sedaci. Pozor na zvýšené slinění – připravte odsávačku nebo zvažte glykopyrrolát.'
          : 'Pediatric: Excellent procedural sedation agent. Watch for hypersalivation—prepare suction or co-administer glycopyrrolate.';
      } else {
        doseMgMin = weight * 1.0;
        doseMgMax = weight * 2.0;
        comments = language === 'cs'
          ? 'Standardní dospělý: Zajišťuje disociativní anestezii a hlubokou analgézii. Má bronchodilatační účinek – vynikající u těžkých astmatiků.'
          : 'Standard Adult: Provides dissociative anesthesia and profound analgesia. Active bronchodilator—excellent for severe asthmatics.';
      }
    } else if (medId === 'etomidate') {
      if (status === 'elderly') {
        doseMgMin = weight * 0.15;
        doseMgMax = weight * 0.2;
        comments = language === 'cs'
          ? 'Starší pacienti: Standardní snížení s ohledem na fyziologické rezervy. Minimální vliv na krevní tlak činí etomidát mimořádně bezpečným.'
          : 'Elderly: Standard reduction for physiological reserve. Minimal BP change makes it exceptionally safe.';
      } else if (status === 'shock') {
        doseMgMin = weight * 0.2;
        doseMgMax = weight * 0.3;
        comments = language === 'cs'
          ? 'Šok: Výjimečná hemodynamická stabilita. Minimální deprese myokardu. Poznámka: Inhibuje 11-beta-hydroxylázu, což způsobuje přechodnou adrenální supresi.'
          : 'Shock: Exceptional hemodynamic stability. Minimal myocardial depression. Note: Inhibits 11-beta-hydroxylase causing temporary adrenal suppression.';
      } else if (status === 'pediatric') {
        doseMgMin = weight * 0.2;
        doseMgMax = weight * 0.3;
        comments = language === 'cs'
          ? 'Pediatričtí pacienti: Dávkovací rozmezí je obdobné jako u dospělých. Častý výskyt myoklonu při podání.'
          : 'Pediatric: Dose ranges are similar to adults. High incidence of myoclonus upon injection.';
      } else {
        doseMgMin = weight * 0.2;
        doseMgMax = weight * 0.3;
        comments = language === 'cs'
          ? 'Standardní dospělý: Vynikající stabilita. Ideální u těžkých chlopenních vad, hypovolemie nebo závažné ischemické choroby srdeční.'
          : 'Standard Adult: Outstanding stability. Ideal for severe valvular dysfunction, hypovolemia, or severe coronary disease.';
      }
    } else if (medId === 'succinylcholine') {
      if (status === 'pediatric') {
        doseMgMin = weight * 1.5;
        doseMgMax = weight * 2.0;
        comments = language === 'cs'
          ? 'Pediatričtí pacienti: Vyšší objem mimobuněčné tekutiny vyžaduje vyšší váhové dávky. Předem podejte Atropin k prevenci reflexní bradykardie.'
          : 'Pediatric: High extracellular fluid volume requires higher weight-based dosing. Pre-treat with Atropine to prevent severe reflex bradycardia.';
      } else {
        doseMgMin = weight * 1.0;
        doseMgMax = weight * 1.5;
        comments = language === 'cs'
          ? 'Dávka pro RSI u dospělých: Použijte SKUTEČNOU tělesnou hmotnost. Nejrychlejší nástup (30-60 s) a krátké trvání (5-10 min). ABSOLUTNĚ se ujistěte, že pacient nemá hyperkalémii, anamnézu maligní hypertermie nebo subakutní popáleninové/denervační zranění.'
          : 'Adult RSI Dose: Use ACTUAL body weight. Fastest onset (30-60s) and shortest duration (5-10m). ABSOLUTELY ensure patient has no hyperkalemia, history of malignant hyperthermia, or subacute burn/denervation injury.';
      }
    } else if (medId === 'rocuronium') {
      if (status === 'pediatric') {
        doseMgMin = weight * 0.6;
        doseMgMax = weight * 1.0;
        comments = language === 'cs'
          ? 'Pediatričtí pacienti: Vhodná alternativa k sukcinylcholinu pro rutinní intubaci.'
          : 'Pediatric: Suitable alternative to succinylcholine for routine intubation.';
      } else {
        doseMgMin = weight * 0.6;
        doseMgMax = weight * 1.2;
        comments = language === 'cs'
          ? 'Svalová relaxace: 0,6 mg/kg pro standardní intubaci. 1,0 - 1,2 mg/kg pro "RSI" k dosažení srovnatelné rychlosti paralýzy jako u sukcinylcholinu (~60 s). Trvání účinku je ~45 minut.'
          : 'Muscle relaxation: 0.6 mg/kg for standard intubation. 1.0 - 1.2 mg/kg for Rapid Sequence Induction (RSI) to achieve identical paralysis speed to succinylcholine (~60 seconds onset). Duration is ~45 minutes.';
      }
    } else if (medId === 'sugammadex') {
      doseMgMin = weight * 2.0;
      doseMgMax = weight * 16.0;
      comments = language === 'cs'
        ? 'Enkapsulační reverzní látka: Dávkování závisí na hloubce bloku. Návrat TOF 2: použijte 2 mg/kg IV. Hluboký blok (post-tetanic count 1-2): použijte 4 mg/kg IV. Urgentní zrušení hluboké blokády (krátce po RSI): použijte okamžitě bolus 16 mg/kg IV.'
        : 'SRBA: Dose varies by block depth. Re reappearance of TOF 2: use 2 mg/kg IV. For deep post-tetanic count 1-2 block: use 4 mg/kg IV. For emergency rescue of profound block (RSI rescue): use 16 mg/kg IV bolus immediately.';
    } else {
      doseMgMin = weight * 0.5;
      doseMgMax = weight * 1.0;
      comments = language === 'cs' ? 'Dávkování vypočteno podle tělesné hmotnosti.' : 'Dosage calculated based on weight.';
    }

    return {
      minMg: Math.round(doseMgMin * 10) / 10,
      maxMg: Math.round(doseMgMax * 10) / 10,
      prepNote,
      comments
    };
  };

  const currentCalc = calculateDose(calcMedId, calcWeight, patientStatus);

  // Quiz progression
  const handleAnswerClick = (index: number) => {
    if (isAnswerSubmitted) return;
    setSelectedAnswerIndex(index);
  };

  const handleAnswerSubmit = () => {
    if (selectedAnswerIndex === null) return;
    const q = shuffledQuestions[currentQuestionIndex];
    if (selectedAnswerIndex === q.correctAnswerIndex) {
      setQuizScore(prev => prev + 1);
    }
    setIsAnswerSubmitted(true);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < shuffledQuestions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedAnswerIndex(null);
      setIsAnswerSubmitted(false);
    } else {
      setQuizCompleted(true);
    }
  };

  const restartQuiz = () => {
    const questions = [...quizData].sort(() => 0.5 - Math.random());
    setShuffledQuestions(questions);
    setCurrentQuestionIndex(0);
    setSelectedAnswerIndex(null);
    setIsAnswerSubmitted(false);
    setQuizScore(0);
    setQuizCompleted(false);
  };

  return (
    <div className="flex flex-col gap-6" id="anesthesia-module-root">
      {/* Module Title Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-white/10 pb-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-white font-sans flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-teal-400" />
            {language === 'cs' ? 'Anesteziologická léčiva a farmakologie' : 'Anesthesia Medications & Pharmacology'}
          </h1>
          <p className="text-sm text-slate-400 font-sans">
            {language === 'cs'
              ? 'Osvojte si anesteziologické léky, váhové výpočty, receptorové dráhy a kazuistiky.'
              : 'Master anesthetic drugs, weight-based calculations, receptor pathways, and case quizzes.'}
          </p>
        </div>

        {/* Tab Selection buttons */}
        <div className="flex bg-white/5 p-1 rounded-lg border border-white/10 mt-4 md:mt-0 max-w-sm backdrop-blur-md">
          <button
            onClick={() => setActiveTab('cards')}
            className={`flex-1 py-1.5 px-4 text-xs font-semibold rounded-md transition-all font-sans flex items-center justify-center gap-1.5 cursor-pointer ${
              activeTab === 'cards'
                ? 'bg-white/10 border border-white/15 text-white shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Compass className="w-3.5 h-3.5" />
            {language === 'cs' ? 'Kartičky a průzkumník' : 'Flashcards & Explorer'}
          </button>
          <button
            onClick={() => setActiveTab('calculator')}
            className={`flex-1 py-1.5 px-4 text-xs font-semibold rounded-md transition-all font-sans flex items-center justify-center gap-1.5 cursor-pointer ${
              activeTab === 'calculator'
                ? 'bg-white/10 border border-white/15 text-white shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Calculator className="w-3.5 h-3.5" />
            {language === 'cs' ? 'Kalkulátor dávek' : 'Dosage Calc'}
          </button>
          <button
            onClick={() => setActiveTab('quiz')}
            className={`flex-1 py-1.5 px-4 text-xs font-semibold rounded-md transition-all font-sans flex items-center justify-center gap-1.5 cursor-pointer ${
              activeTab === 'quiz'
                ? 'bg-white/10 border border-white/15 text-white shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            {language === 'cs' ? 'Kazuistický kvíz' : 'Case Quiz'}
          </button>
        </div>
      </div>

      {/* TABS CONTAINER */}
      <div className="min-h-[60vh]">
        {/* Tab 1: Flashcards & Explorer */}
        {activeTab === 'cards' && (
          <div className="flex flex-col gap-6">
            {/* Filters and Search Bar */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 bg-white/5 p-4 rounded-xl border border-white/10 backdrop-blur-xl">
              <div className="md:col-span-5 relative">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder={
                    language === 'cs'
                      ? 'Vyhledat název léku, receptor, mechanismus nebo třídu...'
                      : 'Search drug name, receptor, mechanism, or class...'
                  }
                  value={searchTerm}
                  onChange={e => setSearchString(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-lg pl-10 pr-4 py-2 text-sm text-white font-sans outline-none focus:border-teal-500/50"
                />
              </div>

              <div className="md:col-span-4 flex items-center gap-2">
                <span className="text-xs font-semibold text-slate-400 whitespace-nowrap">
                  {language === 'cs' ? 'Filtr:' : 'Filter:'}
                </span>
                <select
                  value={selectedCategory}
                  onChange={e => setSelectedCategory(e.target.value as any)}
                  className="w-full bg-slate-900 border border-white/10 rounded-lg px-3 py-2 text-sm text-slate-200 outline-none focus:border-teal-500/50"
                >
                  <option value="all">
                    {language === 'cs' ? 'Všechna anesteziologická léčiva' : 'All Anesthesia Medications'}
                  </option>
                  <option value="induction">
                    {language === 'cs' ? 'Indukční látky' : 'Induction Agents'}
                  </option>
                  <option value="paralytics">
                    {language === 'cs' ? 'Svalová relaxancia / "paralytics"' : 'Muscle Relaxants / Paralytics'}
                  </option>
                  <option value="analgesics">
                    {language === 'cs' ? 'Opioidní analgetika' : 'Opioid Analgesics'}
                  </option>
                  <option value="sedatives">
                    {language === 'cs' ? 'Sedativa a anxiolytika' : 'Sedatives & Anxiolytics'}
                  </option>
                  <option value="vasoactive">
                    {language === 'cs' ? 'Kardiovaskulární / "vasoactive"' : 'Cardiovascular / Vasoactive'}
                  </option>
                  <option value="reversal">
                    {language === 'cs' ? 'Reverzní látky ("reversal agents")' : 'Reversal Agents'}
                  </option>
                </select>
              </div>

              <div className="md:col-span-3 flex items-center justify-end">
                <button
                  onClick={() => setIsFlashcardMode(prev => !prev)}
                  className="flex items-center gap-1.5 px-4 py-2 border border-teal-500/30 rounded-lg text-xs font-semibold text-teal-300 bg-teal-500/10 hover:bg-teal-500/20 transition-all font-sans cursor-pointer"
                >
                  <RotateCw className="w-3.5 h-3.5" />
                  {isFlashcardMode
                    ? language === 'cs' ? 'Přepnout na seznam' : 'Switch to List View'
                    : language === 'cs' ? 'Přepnout na kartičky' : 'Switch to Flashcard Deck'}
                </button>
              </div>
            </div>

            {/* List and Grid Presentation */}
            {filteredMeds.length === 0 ? (
              <div className="text-center py-16 bg-white/5 border border-white/10 rounded-xl">
                <Search className="w-12 h-12 text-slate-400 mx-auto mb-3" />
                <p className="text-slate-300 font-sans font-medium text-sm">
                  {language === 'cs'
                    ? 'Hledanému výrazu neodpovídají žádná léčiva.'
                    : 'No anesthesia medications match your current query.'}
                </p>
                <button
                  onClick={() => {
                    setSearchString('');
                    setSelectedCategory('all');
                  }}
                  className="text-xs font-bold text-teal-400 hover:text-teal-300 font-sans mt-2 underline cursor-pointer"
                >
                  {language === 'cs' ? 'Vymazat filtry' : 'Clear all filters'}
                </button>
              </div>
            ) : isFlashcardMode ? (
              /* --- Grid of Elegant 3D Flip Flashcards --- */
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredMeds.map(med => {
                  const isFlipped = flippedCardId === med.id;
                  const isMastered = masteredMeds.includes(med.id);
                  return (
                    <div
                      key={med.id}
                      onClick={() => handleCardClick(med.id)}
                      className="group cursor-pointer select-none perspective-[1200px] h-[340px]"
                    >
                      <div
                        className={`relative w-full h-full duration-500 transform-style-3d transition-transform ${
                          isFlipped ? 'rotate-y-180' : ''
                        }`}
                      >
                        {/* CARD FRONT */}
                        <div className="absolute inset-0 w-full h-full backface-hidden bg-white/5 border border-white/10 rounded-xl p-6 shadow-sm flex flex-col justify-between group-hover:border-teal-500/50 transition-colors backdrop-blur-xl">
                          <div className="flex flex-col gap-3">
                            <div className="flex items-center justify-between">
                              <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-teal-500/10 text-teal-300 border border-teal-500/20">
                                {med.categoryLabel}
                              </span>
                              <button
                                onClick={e => toggleMastery(med.id, e)}
                                className={`p-1 rounded hover:bg-white/10 transition-colors ${
                                  isMastered ? 'text-yellow-400' : 'text-slate-500'
                                }`}
                                title={isMastered ? 'Remove bookmark' : 'Mark as Mastered'}
                              >
                                {isMastered ? (
                                  <BookmarkCheck className="w-4 h-4 fill-current" />
                                ) : (
                                  <Bookmark className="w-4 h-4" />
                                )}
                              </button>
                            </div>

                            <div className="mt-1">
                              <h3 className="text-xl font-bold font-sans text-white group-hover:text-teal-300 transition-colors">
                                {med.name}
                              </h3>
                              <p className="text-xs text-slate-400 font-mono italic">
                                {med.genericName}
                              </p>
                            </div>

                            <div className="flex flex-col gap-1.5 mt-2">
                              <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wide">
                                {language === 'cs' ? 'Třída a cíle:' : 'Class / Target:'}
                              </span>
                              <p className="text-xs text-slate-200 font-sans leading-relaxed">
                                {med.class}
                              </p>
                            </div>

                            <div className="flex flex-col gap-1 mt-1">
                              <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wide">
                                {language === 'cs' ? 'Mechanismus účinku:' : 'Mechanism of Action:'}
                              </span>
                              <p className="text-xs text-slate-300 font-sans leading-relaxed line-clamp-3">
                                {med.mechanism}
                              </p>
                            </div>
                          </div>

                          <div className="flex items-center justify-between border-t border-white/10 pt-3 text-xs text-slate-400 font-sans">
                            <span>{language === 'cs' ? 'Kliknutím otočte pro detaily' : 'Click to Flip for Details'}</span>
                            <span className="text-teal-400 font-semibold group-hover:underline">
                              {language === 'cs' ? 'Otočit →' : 'Flip →'}
                            </span>
                          </div>
                        </div>

                        {/* CARD BACK */}
                        <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 bg-slate-900/90 border border-white/10 rounded-xl p-6 shadow-md flex flex-col justify-between text-white overflow-hidden backdrop-blur-xl">
                          <div className="flex flex-col gap-3 overflow-y-auto max-h-[260px] custom-scrollbar pr-1">
                            <div className="flex items-center justify-between border-b border-white/10 pb-2">
                              <div>
                                <h3 className="text-lg font-bold text-teal-300">{med.name}</h3>
                                <p className="text-[10px] text-slate-400 font-mono italic">{med.genericName}</p>
                              </div>
                              <span className="text-[10px] uppercase font-bold bg-teal-500/20 px-2 py-0.5 rounded border border-teal-500/30 text-teal-300">
                                {language === 'cs' ? 'DÁVKOVÁNÍ' : 'DOSING'}
                              </span>
                            </div>

                            <div className="grid grid-cols-2 gap-2 text-xs">
                              <div className="bg-white/5 p-2 rounded border border-white/5">
                                <span className="block text-[10px] font-bold text-teal-300 uppercase tracking-wider">
                                  {language === 'cs' ? 'Indukční dávka:' : 'Induction Dose:'}
                                </span>
                                <p className="font-sans font-medium text-[11px] mt-0.5 leading-snug">{med.dosageInduction}</p>
                              </div>
                              <div className="bg-white/5 p-2 rounded border border-white/5">
                                <span className="block text-[10px] font-bold text-teal-300 uppercase tracking-wider">
                                  {language === 'cs' ? 'Nástup a trvání:' : 'Onset & Duration:'}
                                </span>
                                <p className="font-sans font-medium text-[11px] mt-0.5">⏱️ Onset: {med.onset}</p>
                                <p className="font-sans font-medium text-[11px] mt-0.5">⌛ Duration: {med.duration}</p>
                              </div>
                            </div>

                            {med.pediatricDosage && (
                              <div className="bg-white/5 p-2 rounded border border-white/5 text-xs">
                                <span className="block text-[10px] font-bold text-teal-300 uppercase tracking-wider">
                                  {language === 'cs' ? 'Pediatrické dávkování:' : 'Pediatric Dosing:'}
                                </span>
                                <p className="font-sans text-[11px] mt-0.5">{med.pediatricDosage}</p>
                              </div>
                            )}

                            <div className="text-xs">
                              <span className="block text-[10px] font-bold text-teal-300 uppercase tracking-wider">
                                {language === 'cs' ? 'Kontraindikace:' : 'Contraindications:'}
                              </span>
                              <ul className="list-disc pl-4 font-sans text-[11px] text-slate-300 mt-1 space-y-0.5">
                                {med.contraindications.map((c, i) => (
                                  <li key={i}>{c}</li>
                                ))}
                              </ul>
                            </div>

                            <div className="text-xs">
                              <span className="block text-[10px] font-bold text-teal-300 uppercase tracking-wider">
                                {language === 'cs' ? 'Klinická perla ("Clinical Pearl"):' : 'Clinical Pearl:'}
                              </span>
                              <p className="font-sans text-[11px] italic text-slate-200 bg-white/5 p-2 rounded border-l-2 border-yellow-500/50 mt-1 leading-relaxed">
                                "{med.pearls[0]}"
                              </p>
                            </div>
                          </div>

                          <div className="flex items-center justify-between border-t border-white/10 pt-3 text-[11px] text-slate-400 font-sans">
                            <span>{language === 'cs' ? 'Kliknutím otočte na líc' : 'Click to Flip Front'}</span>
                            <span className="underline hover:text-white">
                              {language === 'cs' ? 'Otočit zpět ←' : 'Flip Back ←'}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              /* --- Classical List View with High Information Density --- */
              <div className="flex flex-col gap-4">
                {filteredMeds.map(med => (
                  <div
                    key={med.id}
                    className="bg-white/5 border border-white/10 rounded-xl p-5 shadow-sm hover:shadow-md transition-all flex flex-col lg:flex-row lg:items-start gap-4 backdrop-blur-xl"
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-3">
                        <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-teal-500/10 text-teal-300 border border-teal-500/20">
                          {med.categoryLabel}
                        </span>
                        <span className="text-xs font-mono text-slate-400 font-semibold italic">{med.genericName}</span>
                      </div>
                      <h3 className="text-xl font-bold font-sans text-white mt-1">{med.name}</h3>

                      <div className="grid grid-cols-1 md:grid-cols-12 gap-3 mt-3 pt-3 border-t border-white/10 text-xs">
                        <div className="md:col-span-4 flex flex-col gap-1">
                          <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400">
                            {language === 'cs' ? 'Třída a receptory' : 'Class & Receptor'}
                          </span>
                          <p className="text-white font-medium font-sans leading-relaxed">{med.class}</p>
                        </div>
                        <div className="md:col-span-8 flex flex-col gap-1">
                          <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400">
                            {language === 'cs' ? 'Mechanismus účinku' : 'Mechanism'}
                          </span>
                          <p className="text-slate-300 font-sans leading-relaxed">{med.mechanism}</p>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-12 gap-3 mt-3 bg-white/5 p-3 rounded-lg border border-white/5 text-xs">
                        <div className="md:col-span-4">
                          <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                            {language === 'cs' ? 'Indukční dávka:' : 'Adult Induction Dose:'}
                          </span>
                          <p className="font-semibold text-white font-sans mt-0.5 leading-snug">{med.dosageInduction}</p>
                        </div>
                        <div className="md:col-span-4">
                          <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                            {language === 'cs' ? 'Nástup a trvání' : 'Onset & Duration:'}
                          </span>
                          <p className="font-medium text-slate-300 font-sans mt-0.5">⏱️ Onset: {med.onset}</p>
                          <p className="font-medium text-slate-300 font-sans mt-0.5">⌛ Duration: {med.duration}</p>
                        </div>
                        <div className="md:col-span-4">
                          <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                            {language === 'cs' ? 'Standardní příprava' : 'Standard Preparation:'}
                          </span>
                          <p className="font-medium text-slate-300 font-mono mt-0.5">{med.standardPrep}</p>
                        </div>
                      </div>

                      <div className="flex flex-col gap-2 mt-4 text-xs font-sans">
                        <div>
                          <strong className="text-slate-200 font-semibold block mb-0.5">
                            {language === 'cs' ? 'Indikace:' : 'Indications:'}
                          </strong>
                          <div className="flex flex-wrap gap-1.5 mt-1">
                            {med.indications.map((ind, i) => (
                              <span key={i} className="bg-white/5 border border-white/10 px-2 py-1 rounded text-slate-300 font-medium">
                                {ind}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="mt-1">
                          <strong className="text-red-400 font-semibold block mb-0.5">
                            {language === 'cs' ? 'Relativní kontraindikace:' : 'Relative Contraindications:'}
                          </strong>
                          <ul className="list-disc pl-4 text-slate-300 space-y-0.5 leading-relaxed">
                            {med.contraindications.map((c, i) => (
                              <li key={i}>{c}</li>
                            ))}
                          </ul>
                        </div>

                        <div className="mt-1.5 bg-yellow-500/10 border-l-4 border-yellow-500/50 p-2.5 rounded-r">
                          <strong className="text-yellow-300 font-bold block mb-0.5">
                            {language === 'cs' ? 'Klinická perla ("Clinical Pearl"):' : 'Clinical Pearl:'}
                          </strong>
                          <ul className="list-disc pl-4 text-yellow-100 font-medium space-y-1 mt-1 leading-relaxed">
                            {med.pearls.map((pearl, i) => (
                              <li key={i}>{pearl}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Tab 2: Dosage Calculator */}
        {activeTab === 'calculator' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 font-sans" id="anesthesia-calculator">
            {/* Input card controls */}
            <div className="lg:col-span-5 flex flex-col gap-6 bg-white/5 border border-white/10 rounded-xl p-6 shadow-lg backdrop-blur-xl">
              <h3 className="text-lg font-bold text-white border-b border-white/10 pb-3 flex items-center gap-1.5">
                <Calculator className="w-5 h-5 text-teal-400" />
                {language === 'cs' ? 'Parametry kalkulátoru dávek' : 'Dose Calculator Parameters'}
              </h3>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-wide">
                  {language === 'cs' ? 'Vyberte lék k natažení' : 'Select Drug to Draw'}
                </label>
                <select
                  value={calcMedId}
                  onChange={e => setCalcMedId(e.target.value)}
                  className="bg-slate-900 border border-white/10 rounded-lg px-3.5 py-2.5 text-sm text-slate-200 outline-none focus:border-teal-500/50"
                >
                  <option value="propofol">Propofol ({language === 'cs' ? 'indukční anestetikum' : 'Induction Agent'})</option>
                  <option value="ketamine">Ketamine ({language === 'cs' ? 'indukční anestetikum / disociativní' : 'Induction Agent / Dissociative'})</option>
                  <option value="etomidate">Etomidate ({language === 'cs' ? 'hemodynamicky stabilní' : 'Induction Agent - CV Stable'})</option>
                  <option value="succinylcholine">Succinylcholine ({language === 'cs' ? 'depolarizující relaxans' : 'Depolarizing Paralytic'})</option>
                  <option value="rocuronium">Rocuronium ({language === 'cs' ? 'nedepolarizující relaxans' : 'Non-depolarizing Paralytic'})</option>
                  <option value="sugammadex">Sugammadex ({language === 'cs' ? 'enkapsulační reverzní látka' : 'Reversal Agent'})</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex justify-between text-xs font-bold text-slate-400 uppercase tracking-wide">
                  <span>{language === 'cs' ? 'Hmotnost pacienta' : 'Patient Weight (IBW or ABW)'}</span>
                  <span className="text-teal-300 font-mono text-sm">{calcWeight} kg</span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="150"
                  step="1"
                  value={calcWeight}
                  onChange={e => setCalcWeight(parseInt(e.target.value))}
                  className="w-full accent-teal-500"
                />
                <div className="flex gap-2">
                  <input
                    type="number"
                    min="1"
                    max="300"
                    value={calcWeight}
                    onChange={e => setCalcWeight(Math.max(1, parseInt(e.target.value) || 1))}
                    className="w-24 bg-slate-900 border border-white/10 rounded px-2 py-1 text-center font-mono text-sm text-white outline-none focus:border-teal-500/50"
                  />
                  <span className="text-xs text-slate-400 self-center">
                    {language === 'cs' ? 'Zadejte hmotnost v kg přímo pro extrémní hodnoty' : 'Enter kg directly for extreme values'}
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-wide">
                  {language === 'cs' ? 'Klinický profil pacienta' : 'Patient Clinical Profile'}
                </label>
                <div className="grid grid-cols-2 gap-2 mt-1">
                  {[
                    { id: 'standard', label_en: 'Standard Adult', label_cs: 'Standardní dospělý' },
                    { id: 'elderly', label_en: 'Elderly / Frail', label_cs: 'Starší / křehký pacient' },
                    { id: 'shock', label_en: 'Unstable Shock', label_cs: 'Nestabilní šok' },
                    { id: 'pediatric', label_en: 'Pediatric / Infant', label_cs: 'Pediatrický / kojenec' }
                  ].map(prof => (
                    <button
                      key={prof.id}
                      onClick={() => setPatientStatus(prof.id as any)}
                      className={`px-3 py-2 text-xs font-semibold rounded-lg border text-center transition-all cursor-pointer ${
                        patientStatus === prof.id
                          ? 'bg-teal-500/20 border-teal-500/50 text-teal-300 shadow-sm'
                          : 'bg-white/5 border-white/10 text-slate-400 hover:bg-white/10 hover:text-white'
                      }`}
                    >
                      {language === 'cs' ? prof.label_cs : prof.label_en}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Results card display */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              {currentCalc ? (
                <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-white shadow-xl flex flex-col justify-between h-full backdrop-blur-xl">
                  <div className="flex flex-col gap-5">
                    <div className="flex justify-between items-start border-b border-white/10 pb-3">
                      <div>
                        <h4 className="text-lg font-bold text-teal-300 uppercase tracking-wider">
                          {language === 'cs' ? 'Vypočtená cílová indukční dávka' : 'Calculated Target Induction Dose'}
                        </h4>
                        <p className="text-xs text-slate-400 mt-0.5">
                          {language === 'cs' ? (
                            <span>
                              Vypočteno pro pacienta o hmotnosti <span className="font-bold text-white">{calcWeight} kg</span> s profilem <span className="font-bold text-white capitalize">{patientStatus}</span>.
                            </span>
                          ) : (
                            <span>
                              Calculated for a <span className="font-bold text-white">{calcWeight} kg</span> patient with <span className="font-bold text-white capitalize">{patientStatus}</span> status.
                            </span>
                          )}
                        </p>
                      </div>
                      <span className="text-xs px-2 py-0.5 rounded bg-teal-500/10 text-teal-300 font-mono font-bold uppercase border border-teal-500/20">
                        {calcMedId}
                      </span>
                    </div>

                    <div className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/10">
                      <div className="p-3 bg-teal-500/10 rounded-lg border border-teal-500/20 text-teal-300">
                        <Calculator className="w-8 h-8" />
                      </div>
                      <div>
                        <span className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                          {language === 'cs' ? 'Požadované rozmezí bolusu' : 'Required Bolus Range'}
                        </span>
                        <div className="flex items-baseline gap-1.5 mt-0.5">
                          <span className="text-4xl font-extrabold font-mono tracking-tight text-white">
                            {currentCalc.minMg === currentCalc.maxMg ? currentCalc.minMg : `${currentCalc.minMg} - ${currentCalc.maxMg}`}
                          </span>
                          <span className="text-xl font-bold font-sans text-teal-300">mg</span>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-white/5 p-4 rounded-lg border border-white/5">
                        <span className="block text-[10px] font-bold text-teal-300 uppercase tracking-wider">
                          {language === 'cs' ? 'Koncentrace přípravku' : 'Preparation Concentration'}
                        </span>
                        <p className="text-xs text-slate-200 font-mono mt-1 font-semibold leading-relaxed">
                          {currentCalc.prepNote}
                        </p>
                      </div>
                      <div className="bg-white/5 p-4 rounded-lg border border-white/5">
                        <span className="block text-[10px] font-bold text-teal-300 uppercase tracking-wider">
                          {language === 'cs' ? 'Objem vypočtené dávky' : 'Calculated Dose Volume'}
                        </span>
                        <p className="text-xs text-slate-200 mt-1 font-semibold leading-relaxed font-sans">
                          {calcMedId === 'propofol' ? (
                            language === 'cs' ? (
                              <span>
                                Natáhněte přesně <span className="text-yellow-300 font-mono font-bold">{(currentCalc.minMg / 10).toFixed(1)} mL</span> až{' '}
                                <span className="text-yellow-300 font-mono font-bold">{(currentCalc.maxMg / 10).toFixed(1)} mL</span> 1% propofolové emulze.
                              </span>
                            ) : (
                              <span>
                                Draw exactly <span className="text-yellow-300 font-mono font-bold">{(currentCalc.minMg / 10).toFixed(1)} mL</span> to{' '}
                                <span className="text-yellow-300 font-mono font-bold">{(currentCalc.maxMg / 10).toFixed(1)} mL</span> of 1% propofol emulsion.
                              </span>
                            )
                          ) : calcMedId === 'succinylcholine' ? (
                            language === 'cs' ? (
                              <span>
                                Natáhněte přesně <span className="text-yellow-300 font-mono font-bold">{(currentCalc.minMg / 20).toFixed(1)} mL</span> až{' '}
                                <span className="text-yellow-300 font-mono font-bold">{(currentCalc.maxMg / 20).toFixed(1)} mL</span> z ampule o koncentraci 20 mg/mL.
                              </span>
                            ) : (
                              <span>
                                Draw exactly <span className="text-yellow-300 font-mono font-bold">{(currentCalc.minMg / 20).toFixed(1)} mL</span> to{' '}
                                <span className="text-yellow-300 font-mono font-bold">{(currentCalc.maxMg / 20).toFixed(1)} mL</span> from a 20 mg/mL vial.
                              </span>
                            )
                          ) : calcMedId === 'rocuronium' ? (
                            language === 'cs' ? (
                              <span>
                                Natáhněte přesně <span className="text-yellow-300 font-mono font-bold">{(currentCalc.minMg / 10).toFixed(1)} mL</span> až{' '}
                                <span className="text-yellow-300 font-mono font-bold">{(currentCalc.maxMg / 10).toFixed(1)} mL</span> z ampule o koncentraci 10 mg/mL.
                              </span>
                            ) : (
                              <span>
                                Draw exactly <span className="text-yellow-300 font-mono font-bold">{(currentCalc.minMg / 10).toFixed(1)} mL</span> to{' '}
                                <span className="text-yellow-300 font-mono font-bold">{(currentCalc.maxMg / 10).toFixed(1)} mL</span> of 10 mg/mL solution.
                              </span>
                            )
                          ) : calcMedId === 'etomidate' ? (
                            language === 'cs' ? (
                              <span>
                                Natáhněte přesně <span className="text-yellow-300 font-mono font-bold">{(currentCalc.minMg / 2).toFixed(1)} mL</span> až{' '}
                                <span className="text-yellow-300 font-mono font-bold">{(currentCalc.maxMg / 2).toFixed(1)} mL</span> z ampule o koncentraci 2 mg/mL etomidátu.
                              </span>
                            ) : (
                              <span>
                                Draw exactly <span className="text-yellow-300 font-mono font-bold">{(currentCalc.minMg / 2).toFixed(1)} mL</span> to{' '}
                                <span className="text-yellow-300 font-mono font-bold">{(currentCalc.maxMg / 2).toFixed(1)} mL</span> of 2 mg/mL etomidate.
                              </span>
                            )
                          ) : (
                            language === 'cs' ? (
                              <span>Dávkujte a titrujte přísně podle klinické odezvy a cílového účinku.</span>
                            ) : (
                              <span>Draw and titrate strictly according to response and targeted clinical endpoint.</span>
                            )
                          )}
                        </p>
                      </div>
                    </div>

                    <div className="bg-yellow-500/10 border border-yellow-500/20 p-4 rounded-lg text-xs leading-relaxed flex flex-col gap-1.5">
                      <span className="font-bold text-yellow-300 flex items-center gap-1.5">
                        <AlertTriangle className="w-4 h-4 text-yellow-300 shrink-0" />
                        {language === 'cs' ? 'Kritické klinické vedení a úpravy:' : 'Critical Clinical Guidance & Adjustments:'}
                      </span>
                      <p className="text-slate-300 font-medium font-sans italic">
                        "{currentCalc.comments}"
                      </p>
                    </div>
                  </div>

                  <div className="text-[10px] text-slate-500 text-center border-t border-white/10 pt-4 mt-5 italic">
                    {language === 'cs'
                      ? 'Uvedené dávky slouží pouze pro simulační výukové účely. Vždy si ověřte oficiální farmakologické manuály a specifické proměnné u konkrétního lůžka pacienta.'
                      : 'Doses provided are for simulated educational training purposes only. Always cross-examine official hospital pharmacology manuals and patient-specific variables at the bedside.'}
                  </div>
                </div>
              ) : (
                <div className="bg-white/5 border border-white/10 rounded-xl flex items-center justify-center p-12 text-slate-400 italic">
                  {language === 'cs' ? 'Vyberte parametry pro výpočet dávky' : 'Select parameters to calculate dose'}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Tab 3: Pharmacology Case Quiz */}
        {activeTab === 'quiz' && (
          <div className="max-w-2xl mx-auto bg-white/5 border border-white/10 rounded-xl p-6 shadow-lg font-sans backdrop-blur-xl" id="anesthesia-quiz-board">
            {shuffledQuestions.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-slate-400 font-sans">
                  {language === 'cs' ? 'Generování otázek kvízu...' : 'Generating anesthesia quiz questions...'}
                </p>
              </div>
            ) : quizCompleted ? (
              /* --- Quiz Results Screen --- */
              <div className="text-center py-8">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: 'spring' }}
                  className="w-16 h-16 bg-teal-500/10 border border-teal-500/20 rounded-full flex items-center justify-center mx-auto mb-4 text-teal-300"
                >
                  <Award className="w-9 h-9" />
                </motion.div>
                <h3 className="text-2xl font-bold text-white">
                  {language === 'cs' ? 'Anesteziologický kvíz dokončen!' : 'Anesthesia Quiz Completed!'}
                </h3>
                <p className="text-sm text-slate-400 mt-2">
                  {language === 'cs'
                    ? 'Vyhodnotili jste všechny anesteziologické profily a kazuistiky.'
                    : 'You evaluated all anesthetic drug profiles and weight-based scenarios.'}
                </p>

                <div className="my-6 max-w-xs mx-auto bg-white/5 border border-white/10 rounded-xl p-5 shadow-inner">
                  <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider">
                    {language === 'cs' ? 'Výsledné skóre úspěšnosti' : 'Final Mastery Score'}
                  </span>
                  <span className="text-5xl font-black font-mono text-teal-300">
                    {Math.round((quizScore / shuffledQuestions.length) * 100)}%
                  </span>
                  <span className="block text-xs font-semibold text-slate-400 mt-1">
                    {language === 'cs'
                      ? `${quizScore} ze ${shuffledQuestions.length} kazuistik správně`
                      : `${quizScore} of ${shuffledQuestions.length} Case Answers Correct`}
                  </span>
                </div>

                <div className="flex gap-3 justify-center">
                  <button
                    onClick={restartQuiz}
                    className="px-5 py-2.5 bg-teal-500/20 hover:bg-teal-500/30 border border-teal-500/30 text-teal-300 hover:text-white font-bold rounded-lg text-sm shadow-sm transition-all cursor-pointer"
                  >
                    {language === 'cs' ? 'Spustit nový test' : 'Take New Test'}
                  </button>
                  <button
                    onClick={() => setActiveTab('cards')}
                    className="px-5 py-2.5 bg-white/10 border border-white/15 text-slate-300 hover:bg-white/20 hover:text-white font-semibold rounded-lg text-sm transition-all cursor-pointer"
                  >
                    {language === 'cs' ? 'Prohlížet studijní kartičky' : 'Review Drug Flashcards'}
                  </button>
                </div>
              </div>
            ) : (
              /* --- Active Quiz Question Form --- */
              <div className="flex flex-col gap-4">
                {/* Question progress header */}
                <div className="flex justify-between items-center text-xs text-slate-400 border-b border-white/10 pb-3">
                  <span>
                    {language === 'cs' ? 'Odborná zkouška z klinické anesteziologie' : 'Anesthesia Medication Board Examination'}
                  </span>
                  <span className="font-bold text-slate-300">
                    {language === 'cs'
                      ? `Otázka ${currentQuestionIndex + 1} ze ${shuffledQuestions.length}`
                      : `Question ${currentQuestionIndex + 1} of ${shuffledQuestions.length}`}
                  </span>
                </div>

                {/* Progress bar */}
                <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-teal-500 transition-all duration-300"
                    style={{ width: `${((currentQuestionIndex + 1) / shuffledQuestions.length) * 100}%` }}
                  ></div>
                </div>

                {/* Patient Vignette block */}
                {shuffledQuestions[currentQuestionIndex].caseContext && (
                  <div className="bg-teal-500/10 border-l-4 border-teal-500 border-y border-r border-teal-500/10 p-4 rounded-r-lg text-xs leading-relaxed text-slate-200 font-sans shadow-sm">
                    <span className="font-bold text-teal-300 block mb-1">
                      {language === 'cs' ? '🏥 Klinická kazuistika:' : '🏥 Clinical Case Vignette:'}
                    </span>
                    {shuffledQuestions[currentQuestionIndex].caseContext}
                  </div>
                )}

                {/* The Question */}
                <h4 className="text-base font-bold text-white mt-2">
                  {shuffledQuestions[currentQuestionIndex].question}
                </h4>

                {/* Options List */}
                <div className="flex flex-col gap-2.5 mt-2">
                  {shuffledQuestions[currentQuestionIndex].options.map((option, idx) => {
                    const isSelected = selectedAnswerIndex === idx;
                    const isCorrect = shuffledQuestions[currentQuestionIndex].correctAnswerIndex === idx;
                    let btnClass = 'border-white/10 bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white';

                    if (isAnswerSubmitted) {
                      if (isCorrect) {
                        btnClass = 'border-green-500/50 bg-green-500/20 text-green-200 font-semibold';
                      } else if (isSelected) {
                        btnClass = 'border-red-500/50 bg-red-500/20 text-red-200 font-semibold';
                      } else {
                        btnClass = 'border-white/5 bg-white/5 text-slate-500 opacity-40';
                      }
                    } else if (isSelected) {
                      btnClass = 'border-teal-500/50 bg-teal-500/10 text-teal-200 font-semibold';
                    }

                    return (
                      <button
                        key={idx}
                        disabled={isAnswerSubmitted}
                        onClick={() => handleAnswerClick(idx)}
                        className={`w-full text-left p-3.5 rounded-lg border text-sm transition-all font-sans flex items-start justify-between gap-3 cursor-pointer ${btnClass}`}
                      >
                        <div className="flex gap-2">
                          <span className="font-bold text-slate-400 uppercase tracking-tight mr-1">
                            {String.fromCharCode(65 + idx)})
                          </span>
                          <span>{option}</span>
                        </div>
                        {isAnswerSubmitted && isCorrect && <Check className="w-4 h-4 text-green-400 shrink-0 self-center" />}
                        {isAnswerSubmitted && isSelected && !isCorrect && (
                          <span className="text-red-400 shrink-0 font-bold self-center">✗</span>
                        )}
                      </button>
                    );
                  })}
                </div>

                {/* Quiz Navigation Buttons */}
                <div className="flex justify-between items-center border-t border-white/10 pt-4 mt-3">
                  <div className="text-xs text-slate-400">
                    {language === 'cs'
                      ? `Dosažené skóre: ${quizScore} správně`
                      : `Resuscitation Score: ${quizScore} correct`}
                  </div>

                  {!isAnswerSubmitted ? (
                    <button
                      onClick={handleAnswerSubmit}
                      disabled={selectedAnswerIndex === null}
                      className="px-5 py-2 bg-teal-500/20 hover:bg-teal-500/30 disabled:bg-white/5 disabled:text-slate-500 border border-teal-500/30 hover:border-teal-500/50 text-teal-300 disabled:border-transparent font-bold rounded-lg text-xs tracking-wide transition-all shadow-sm flex items-center gap-1.5 cursor-pointer"
                    >
                      {language === 'cs' ? 'Ověřit volbu' : 'Verify Choice'}
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  ) : (
                    <button
                      onClick={handleNextQuestion}
                      className="px-5 py-2 bg-white/10 border border-white/15 hover:bg-white/20 text-white font-bold rounded-lg text-xs tracking-wide transition-all shadow-sm flex items-center gap-1.5 cursor-pointer"
                    >
                      {currentQuestionIndex === shuffledQuestions.length - 1
                        ? language === 'cs' ? 'Ukončit zkoušku' : 'Finish Exam'
                        : language === 'cs' ? 'Další kazuistika' : 'Next Case'}
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>

                {/* Educational Feedback block */}
                <AnimatePresence>
                  {isAnswerSubmitted && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="bg-white/5 border border-white/10 p-4 rounded-xl text-xs leading-relaxed text-slate-300 mt-2"
                    >
                      <strong className="text-teal-300 text-[13px] font-bold block mb-1">
                        {language === 'cs' ? '👨‍⚕️ Klinické farmakologické zdůvodnění:' : '👨‍⚕️ Clinical Pharmacological Rationales:'}
                      </strong>
                      {shuffledQuestions[currentQuestionIndex].explanation}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
