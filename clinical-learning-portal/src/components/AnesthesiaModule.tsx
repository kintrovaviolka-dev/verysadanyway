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
  AlertTriangle,
  Activity
} from 'lucide-react';
import { ANESTHESIA_MEDS } from '../data/meds';
import { ANESTHESIA_MEDS_CS } from '../data/meds_cs';
import { ANESTHESIA_QUIZ } from '../data/quizzes';
import { ANESTHESIA_QUIZ_CS } from '../data/quizzes_cs';
import { Medication, QuizQuestion, MedCategory } from '../types';
import { useLanguage } from '../context/LanguageContext';

const getVolumeCalculation = (medId: string, min: number, max: number, language: string) => {
  let volMin = 0;
  let volMax = 0;
  let textEn = '';
  let textCs = '';

  switch (medId) {
    case 'propofol':
      volMin = min / 10;
      volMax = max / 10;
      textEn = `Draw exactly ${volMin.toFixed(1)} mL to ${volMax.toFixed(1)} mL of 1% propofol emulsion (10 mg/mL).`;
      textCs = `Natáhněte přesně ${volMin.toFixed(1)} mL až ${volMax.toFixed(1)} mL 1% propofolové emulze (10 mg/mL).`;
      break;
    case 'ketamine':
      volMin = min / 10;
      volMax = max / 10;
      textEn = `Draw exactly ${volMin.toFixed(1)} mL to ${volMax.toFixed(1)} mL from a 10 mg/mL solution.`;
      textCs = `Natáhněte přesně ${volMin.toFixed(1)} mL až ${volMax.toFixed(1)} mL z roztoku o koncentraci 10 mg/mL.`;
      break;
    case 'etomidate':
      volMin = min / 2;
      volMax = max / 2;
      textEn = `Draw exactly ${volMin.toFixed(1)} mL to ${volMax.toFixed(1)} mL from a 2 mg/mL vial.`;
      textCs = `Natáhněte přesně ${volMin.toFixed(1)} mL až ${volMax.toFixed(1)} mL z ampule o koncentraci 2 mg/mL.`;
      break;
    case 'succinylcholine':
      volMin = min / 20;
      volMax = max / 20;
      textEn = `Draw exactly ${volMin.toFixed(1)} mL to ${volMax.toFixed(1)} mL from a 20 mg/mL vial.`;
      textCs = `Natáhněte přesně ${volMin.toFixed(1)} mL až ${volMax.toFixed(1)} mL z ampule o koncentraci 20 mg/mL.`;
      break;
    case 'rocuronium':
      volMin = min / 10;
      volMax = max / 10;
      textEn = `Draw exactly ${volMin.toFixed(1)} mL to ${volMax.toFixed(1)} mL of 10 mg/mL solution.`;
      textCs = `Natáhněte přesně ${volMin.toFixed(1)} mL až ${volMax.toFixed(1)} mL z ampule o koncentraci 10 mg/mL.`;
      break;
    case 'fentanyl':
      volMin = min / 50;
      volMax = max / 50;
      textEn = `Draw exactly ${volMin.toFixed(1)} mL to ${volMax.toFixed(1)} mL from a 50 mcg/mL solution.`;
      textCs = `Natáhněte přesně ${volMin.toFixed(1)} mL až ${volMax.toFixed(1)} mL z ampule o koncentraci 50 mcg/mL.`;
      break;
    case 'midazolam':
      volMin = min / 1;
      volMax = max / 1;
      textEn = `Draw exactly ${volMin.toFixed(1)} mL to ${volMax.toFixed(1)} mL from a 1 mg/mL solution.`;
      textCs = `Natáhněte přesně ${volMin.toFixed(1)} mL až ${volMax.toFixed(1)} mL z roztoku o koncentraci 1 mg/mL.`;
      break;
    case 'phenylephrine':
      volMin = min / 100;
      volMax = max / 100;
      textEn = `Draw exactly ${volMin.toFixed(1)} mL to ${volMax.toFixed(1)} mL of diluted 100 mcg/mL solution.`;
      textCs = `Natáhněte přesně ${volMin.toFixed(1)} mL až ${volMax.toFixed(1)} mL z naředěného roztoku o koncentraci 100 mcg/mL.`;
      break;
    case 'ephedrine':
      volMin = min / 5;
      volMax = max / 5;
      textEn = `Draw exactly ${volMin.toFixed(1)} mL to ${volMax.toFixed(1)} mL of diluted 5 mg/mL solution.`;
      textCs = `Natáhněte přesně ${volMin.toFixed(1)} mL až ${volMax.toFixed(1)} mL z naředěného roztoku o koncentraci 5 mg/mL.`;
      break;
    case 'sugammadex':
      volMin = min / 100;
      volMax = max / 100;
      textEn = `Draw exactly ${volMin.toFixed(1)} mL to ${volMax.toFixed(1)} mL from a 100 mg/mL vial.`;
      textCs = `Natáhněte přesně ${volMin.toFixed(1)} mL až ${volMax.toFixed(1)} mL z lahvičky o koncentraci 100 mg/mL.`;
      break;
    case 'thiopental':
      volMin = min / 25;
      volMax = max / 25;
      textEn = `Draw exactly ${volMin.toFixed(1)} mL to ${volMax.toFixed(1)} mL of reconstituted 2.5% solution (25 mg/mL).`;
      textCs = `Natáhněte přesně ${volMin.toFixed(1)} mL až ${volMax.toFixed(1)} mL z rekonstituovaného 2,5% roztoku (25 mg/mL).`;
      break;
    case 'dexmedetomidine':
      volMin = min / 4;
      volMax = max / 4;
      textEn = `Draw exactly ${volMin.toFixed(1)} mL to ${volMax.toFixed(1)} mL of diluted 4 mcg/mL infusion mixture.`;
      textCs = `Natáhněte přesně ${volMin.toFixed(1)} mL až ${volMax.toFixed(1)} mL z naředěné infuzní směsi o koncentraci 4 mcg/mL.`;
      break;
    case 'norepinephrine':
      volMin = min / 16;
      volMax = max / 16;
      textEn = `For peripheral infusion, draw exactly ${volMin.toFixed(1)} mL to ${volMax.toFixed(1)} mL of standard 16 mcg/mL dilution.`;
      textCs = `Pro periferní infuzi natáhněte ${volMin.toFixed(1)} mL až ${volMax.toFixed(1)} mL ze standardního ředění 16 mcg/mL.`;
      break;
    case 'atropine':
      volMin = min / 1;
      volMax = max / 1;
      textEn = `Draw exactly ${volMin.toFixed(1)} mL to ${volMax.toFixed(1)} mL from a 1 mg/mL solution.`;
      textCs = `Natáhněte přesně ${volMin.toFixed(1)} mL až ${volMax.toFixed(1)} mL z ampule o koncentraci 1 mg/mL.`;
      break;
    case 'naloxone':
      volMin = min / 0.4;
      volMax = max / 0.4;
      textEn = `Draw exactly ${volMin.toFixed(1)} mL to ${volMax.toFixed(1)} mL from a 0.4 mg/mL solution.`;
      textCs = `Natáhněte přesně ${volMin.toFixed(1)} mL až ${volMax.toFixed(1)} mL z ampule o koncentraci 0,4 mg/mL.`;
      break;
    case 'neostigmine':
      volMin = min / 0.5;
      volMax = max / 0.5;
      textEn = `Draw exactly ${volMin.toFixed(1)} mL to ${volMax.toFixed(1)} mL from a 0.5 mg/mL solution.`;
      textCs = `Natáhněte přesně ${volMin.toFixed(1)} mL až ${volMax.toFixed(1)} mL z ampule o koncentraci 0,5 mg/mL.`;
      break;
    case 'dexamethasone':
      volMin = min / 4;
      volMax = max / 4;
      textEn = `Draw exactly ${volMin.toFixed(1)} mL to ${volMax.toFixed(1)} mL from a 4 mg/mL solution.`;
      textCs = `Natáhněte přesně ${volMin.toFixed(1)} mL až ${volMax.toFixed(1)} mL z ampule o koncentraci 4 mg/mL.`;
      break;
    default:
      textEn = 'Draw and titrate strictly according to response and targeted clinical endpoint.';
      textCs = 'Dávkujte a titrujte přísně podle klinické odezvy a cílového účinku.';
  }

  return language === 'cs' ? textCs : textEn;
};

export interface BroselowData {
  zone: string;
  zoneLabelCs: string;
  zoneLabelEn: string;
  color: string;
  textColor: string;
  bgGradient: string;
  weightRange: string;
  tubeSize: string;
  tubeDepth: string;
  bladeSize: string;
  maskSize: string;
  defibJoules: number;
  adrenalinDose: string;
  amiodaronDose: string;
  atropinDose: string;
  exacylDose: string;
  glucoseDose: string;
}

export const getBroselowData = (weight: number): BroselowData => {
  const w = Math.max(3, Math.min(36, weight));
  
  if (w < 6) {
    return {
      zone: 'grey', zoneLabelCs: 'Šedá (Grey)', zoneLabelEn: 'Grey',
      color: '#708090', textColor: 'text-slate-200', bgGradient: 'from-slate-600 to-slate-900 border-slate-500/50 shadow-slate-900/40',
      weightRange: '3 - 5 kg',
      tubeSize: '3.0 uncuffed / 3.0 cuffed',
      tubeDepth: '9.0 - 10.0 cm',
      bladeSize: '0 straight (Miller)',
      maskSize: '0 (Neonate/Infant)',
      defibJoules: Math.round(w * 4),
      adrenalinDose: `${(w * 0.01).toFixed(2)} mg (i.v./i.o. bolus)`,
      amiodaronDose: `${(w * 5).toFixed(0)} mg (i.v./i.o. bolus)`,
      atropinDose: `${(w * 0.02).toFixed(2)} mg (i.v./i.o. bolus)`,
      exacylDose: `${(w * 15).toFixed(0)} mg (i.v./i.o. infuze)`,
      glucoseDose: `${(w * 5).toFixed(0)} ml (G10% pomalu i.v./i.o.)`
    };
  } else if (w < 8) {
    return {
      zone: 'pink', zoneLabelCs: 'Růžová (Pink)', zoneLabelEn: 'Pink',
      color: '#ec4899', textColor: 'text-pink-100', bgGradient: 'from-pink-600 to-pink-900 border-pink-500/50 shadow-pink-900/40',
      weightRange: '6 - 7 kg',
      tubeSize: '3.5 uncuffed / 3.0 cuffed',
      tubeDepth: '10.0 - 10.5 cm',
      bladeSize: '1 straight (Miller)',
      maskSize: '1 (Infant/Toddler)',
      defibJoules: Math.round(w * 4),
      adrenalinDose: `${(w * 0.01).toFixed(2)} mg (i.v./i.o. bolus)`,
      amiodaronDose: `${(w * 5).toFixed(0)} mg (i.v./i.o. bolus)`,
      atropinDose: `${(w * 0.02).toFixed(2)} mg (i.v./i.o. bolus)`,
      exacylDose: `${(w * 15).toFixed(0)} mg (i.v./i.o. infuze)`,
      glucoseDose: `${(w * 5).toFixed(0)} ml (G10% pomalu i.v./i.o.)`
    };
  } else if (w < 10) {
    return {
      zone: 'red', zoneLabelCs: 'Červená (Red)', zoneLabelEn: 'Red',
      color: '#ef4444', textColor: 'text-red-100', bgGradient: 'from-red-600 to-red-900 border-red-500/50 shadow-red-900/40',
      weightRange: '8 - 9 kg',
      tubeSize: '3.5 or 4.0 uncuffed / 3.5 cuffed',
      tubeDepth: '10.5 - 11.0 cm',
      bladeSize: '1 straight (Miller)',
      maskSize: '1 (Toddler)',
      defibJoules: Math.round(w * 4),
      adrenalinDose: `${(w * 0.01).toFixed(2)} mg (i.v./i.o. bolus)`,
      amiodaronDose: `${(w * 5).toFixed(0)} mg (i.v./i.o. bolus)`,
      atropinDose: `${(w * 0.02).toFixed(2)} mg (i.v./i.o. bolus)`,
      exacylDose: `${(w * 15).toFixed(0)} mg (i.v./i.o. infuze)`,
      glucoseDose: `${(w * 5).toFixed(0)} ml (G10% pomalu i.v./i.o.)`
    };
  } else if (w < 12) {
    return {
      zone: 'purple', zoneLabelCs: 'Fialová (Purple)', zoneLabelEn: 'Purple',
      color: '#a855f7', textColor: 'text-purple-100', bgGradient: 'from-purple-600 to-purple-900 border-purple-500/50 shadow-purple-900/40',
      weightRange: '10 - 11 kg',
      tubeSize: '4.0 uncuffed / 3.5 cuffed',
      tubeDepth: '11.5 - 12.0 cm',
      bladeSize: '1.5 or 2 (Mac/Miller)',
      maskSize: '2 (Toddler/Child)',
      defibJoules: Math.round(w * 4),
      adrenalinDose: `${(w * 0.01).toFixed(2)} mg (i.v./i.o. bolus)`,
      amiodaronDose: `${(w * 5).toFixed(0)} mg (i.v./i.o. bolus)`,
      atropinDose: `${(w * 0.02).toFixed(2)} mg (i.v./i.o. bolus)`,
      exacylDose: `${(w * 15).toFixed(0)} mg (i.v./i.o. infuze)`,
      glucoseDose: `${(w * 5).toFixed(0)} ml (G10% pomalu i.v./i.o.)`
    };
  } else if (w < 15) {
    return {
      zone: 'yellow', zoneLabelCs: 'Žlutá (Yellow)', zoneLabelEn: 'Yellow',
      color: '#eab308', textColor: 'text-amber-100', bgGradient: 'from-amber-600 to-amber-900 border-amber-500/50 shadow-amber-950/40',
      weightRange: '12 - 14 kg',
      tubeSize: '4.5 uncuffed / 4.0 cuffed',
      tubeDepth: '12.5 - 13.0 cm',
      bladeSize: '2 (Macintosh)',
      maskSize: '2 (Child)',
      defibJoules: Math.round(w * 4),
      adrenalinDose: `${(w * 0.01).toFixed(2)} mg (i.v./i.o. bolus)`,
      amiodaronDose: `${(w * 5).toFixed(0)} mg (i.v./i.o. bolus)`,
      atropinDose: `${(w * 0.02).toFixed(2)} mg (i.v./i.o. bolus)`,
      exacylDose: `${(w * 15).toFixed(0)} mg (i.v./i.o. infuze)`,
      glucoseDose: `${(w * 5).toFixed(0)} ml (G10% pomalu i.v./i.o.)`
    };
  } else if (w < 19) {
    return {
      zone: 'white', zoneLabelCs: 'Bílá (White)', zoneLabelEn: 'White',
      color: '#ffffff', textColor: 'text-slate-800', bgGradient: 'from-slate-100 to-slate-200 border-slate-300 shadow-slate-400/20',
      weightRange: '15 - 18 kg',
      tubeSize: '5.0 uncuffed / 4.5 cuffed',
      tubeDepth: '13.5 - 14.0 cm',
      bladeSize: '2 (Macintosh)',
      maskSize: '3 (Child)',
      defibJoules: Math.round(w * 4),
      adrenalinDose: `${(w * 0.01).toFixed(2)} mg (i.v./i.o. bolus)`,
      amiodaronDose: `${(w * 5).toFixed(0)} mg (i.v./i.o. bolus)`,
      atropinDose: `${(w * 0.02).toFixed(2)} mg (i.v./i.o. bolus)`,
      exacylDose: `${(w * 15).toFixed(0)} mg (i.v./i.o. infuze)`,
      glucoseDose: `${(w * 5).toFixed(0)} ml (G10% pomalu i.v./i.o.)`
    };
  } else if (w < 23) {
    return {
      zone: 'blue', zoneLabelCs: 'Modrá (Blue)', zoneLabelEn: 'Blue',
      color: '#3b82f6', textColor: 'text-blue-100', bgGradient: 'from-blue-600 to-blue-900 border-blue-500/50 shadow-blue-900/40',
      weightRange: '19 - 22 kg',
      tubeSize: '5.5 uncuffed / 5.0 cuffed',
      tubeDepth: '14.5 - 15.0 cm',
      bladeSize: '2 or 3 (Macintosh)',
      maskSize: '3 (Child)',
      defibJoules: Math.round(w * 4),
      adrenalinDose: `${(w * 0.01).toFixed(2)} mg (i.v./i.o. bolus)`,
      amiodaronDose: `${(w * 5).toFixed(0)} mg (i.v./i.o. bolus)`,
      atropinDose: `${(w * 0.02).toFixed(2)} mg (i.v./i.o. bolus)`,
      exacylDose: `${(w * 15).toFixed(0)} mg (i.v./i.o. infuze)`,
      glucoseDose: `${(w * 5).toFixed(0)} ml (G10% pomalu i.v./i.o.)`
    };
  } else if (w < 30) {
    return {
      zone: 'orange', zoneLabelCs: 'Oranžová (Orange)', zoneLabelEn: 'Orange',
      color: '#f97316', textColor: 'text-orange-100', bgGradient: 'from-orange-600 to-orange-950 border-orange-500/50 shadow-orange-900/40',
      weightRange: '23 - 29 kg',
      tubeSize: '6.0 cuffed',
      tubeDepth: '15.5 - 16.5 cm',
      bladeSize: '3 (Macintosh)',
      maskSize: '4 (Child/Adult Small)',
      defibJoules: Math.round(w * 4),
      adrenalinDose: `${(w * 0.01).toFixed(2)} mg (i.v./i.o. bolus)`,
      amiodaronDose: `${(w * 5).toFixed(0)} mg (i.v./i.o. bolus)`,
      atropinDose: `${(w * 0.02).toFixed(2)} mg (i.v./i.o. bolus)`,
      exacylDose: `${(w * 15).toFixed(0)} mg (i.v./i.o. infuze)`,
      glucoseDose: `${(w * 5).toFixed(0)} ml (G10% pomalu i.v./i.o.)`
    };
  } else {
    return {
      zone: 'green', zoneLabelCs: 'Zelená (Green)', zoneLabelEn: 'Green',
      color: '#10b981', textColor: 'text-green-100', bgGradient: 'from-green-600 to-green-900 border-green-500/50 shadow-green-900/40',
      weightRange: '30 - 36 kg',
      tubeSize: '6.5 cuffed',
      tubeDepth: '17.0 - 18.0 cm',
      bladeSize: '3 (Macintosh)',
      maskSize: '4 (Adult Small)',
      defibJoules: Math.round(w * 4),
      adrenalinDose: `${(w * 0.01).toFixed(2)} mg (i.v./i.o. bolus)`,
      amiodaronDose: `${(w * 5).toFixed(0)} mg (i.v./i.o. bolus)`,
      atropinDose: `${(w * 0.02).toFixed(2)} mg (i.v./i.o. bolus)`,
      exacylDose: `${(w * 15).toFixed(0)} mg (i.v./i.o. infuze)`,
      glucoseDose: `${(w * 5).toFixed(0)} ml (G10% pomalu i.v./i.o.)`
    };

export default function AnesthesiaModule() {
  const { language, t } = useLanguage();

  // Select localized data
  const medsData = language === 'cs' ? ANESTHESIA_MEDS_CS : ANESTHESIA_MEDS;
  const quizData = language === 'cs' ? ANESTHESIA_QUIZ_CS : ANESTHESIA_QUIZ;

  const [activeTab, setActiveTab] = useState<'cards' | 'calculator' | 'broselow' | 'quiz' | 'recall'>('cards');

  // Broselow state
  const [pediatricWeight, setPediatricWeight] = useState<number>(14);
  const [pediatricAge, setPediatricAge] = useState<number>(3); // years
  const [pediatricInputMode, setPediatricInputMode] = useState<'weight' | 'age'>('weight');

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

  // Active Recall Center State
  const [recallGameMode, setRecallGameMode] = useState<'menu' | 'sorter' | 'trainer'>('menu');
  
  // Game 1: Category Sorter State
  const [sorterMeds, setSorterMeds] = useState<Medication[]>([]);
  const [sorterIndex, setSorterIndex] = useState(0);
  const [sorterScore, setSorterScore] = useState(0);
  const [sorterSelectedCat, setSorterSelectedCat] = useState<MedCategory | null>(null);
  const [sorterIsChecked, setSorterIsChecked] = useState(false);
  const [sorterCompleted, setSorterCompleted] = useState(false);

  // Game 2: Dose Master Trainer State
  const [trainerRound, setTrainerRound] = useState(0);
  const [trainerScore, setTrainerScore] = useState(0);
  const [trainerQuestion, setTrainerQuestion] = useState<{
    med: Medication;
    weight: number;
    status: 'standard' | 'elderly' | 'shock' | 'pediatric';
    correctRange: string;
    options: string[];
    unit: string;
  } | null>(null);
  const [trainerSelectedOpt, setTrainerSelectedOpt] = useState<string | null>(null);
  const [trainerIsChecked, setTrainerIsChecked] = useState(false);
  const [trainerCompleted, setTrainerCompleted] = useState(false);

  const startSorterGame = () => {
    const shuffled = [...medsData].sort(() => 0.5 - Math.random()).slice(0, 10);
    setSorterMeds(shuffled);
    setSorterIndex(0);
    setSorterScore(0);
    setSorterSelectedCat(null);
    setSorterIsChecked(false);
    setSorterCompleted(false);
    setRecallGameMode('sorter');
  };

  const handleSorterChoice = (cat: MedCategory) => {
    if (sorterIsChecked) return;
    setSorterSelectedCat(cat);
  };

  const verifySorterChoice = () => {
    if (sorterSelectedCat === null || sorterIsChecked) return;
    const currentMed = sorterMeds[sorterIndex];
    if (sorterSelectedCat === currentMed.category) {
      setSorterScore(prev => prev + 1);
    }
    setSorterIsChecked(true);
  };

  const nextSorterQuestion = () => {
    if (sorterIndex < sorterMeds.length - 1) {
      setSorterIndex(prev => prev + 1);
      setSorterSelectedCat(null);
      setSorterIsChecked(false);
    } else {
      setSorterCompleted(true);
    }
  };

  const generateTrainerQuestion = () => {
    const eligibleMeds = medsData.filter(m => 
      ['propofol', 'ketamine', 'etomidate', 'succinylcholine', 'rocuronium', 'sugammadex', 'thiopental', 'midazolam', 'fentanyl', 'dexmedetomidine', 'norepinephrine', 'atropine', 'naloxone', 'neostigmine', 'dexamethasone', 'ephedrine', 'phenylephrine'].includes(m.id)
    );
    const randomMed = eligibleMeds[Math.floor(Math.random() * eligibleMeds.length)];
    
    const weights = [50, 60, 65, 70, 75, 80, 85, 90, 100];
    const weight = weights[Math.floor(Math.random() * weights.length)];
    
    const statuses: ('standard' | 'elderly' | 'shock' | 'pediatric')[] = ['standard', 'elderly', 'shock', 'pediatric'];
    let status = statuses[Math.floor(Math.random() * statuses.length)];
    
    if (status === 'pediatric' && randomMed.id === 'sugammadex') {
      status = 'standard';
    }

    const calculated = calculateDose(randomMed.id, weight, status);
    if (!calculated) return;

    const unit = ['fentanyl', 'dexmedetomidine', 'norepinephrine', 'phenylephrine'].includes(randomMed.id) ? 'mcg' : 'mg';
    const correctRange = calculated.minMg === calculated.maxMg ? `${calculated.minMg}` : `${calculated.minMg} - ${calculated.maxMg}`;
    
    const incorrects = new Set<string>();
    
    const halfMin = Math.round((calculated.minMg / 2) * 10) / 10;
    const halfMax = Math.round((calculated.maxMg / 2) * 10) / 10;
    const halfRange = halfMin === halfMax ? `${halfMin}` : `${halfMin} - ${halfMax}`;
    if (halfRange !== correctRange) incorrects.add(halfRange);

    const doubleMin = Math.round((calculated.minMg * 2) * 10) / 10;
    const doubleMax = Math.round((calculated.maxMg * 2) * 10) / 10;
    const doubleRange = doubleMin === doubleMax ? `${doubleMin}` : `${doubleMin} - ${doubleMax}`;
    if (doubleRange !== correctRange) incorrects.add(doubleRange);

    const diffMin = Math.round((calculated.minMg + 10) * 10) / 10;
    const diffMax = Math.round((calculated.maxMg + 15) * 10) / 10;
    const diffRange = diffMin === diffMax ? `${diffMin}` : `${diffMin} - ${diffMax}`;
    if (diffRange !== correctRange) incorrects.add(diffRange);

    while (incorrects.size < 3) {
      const offset = (incorrects.size + 1) * 5;
      const fMin = Math.round(Math.max(1, calculated.minMg - offset) * 10) / 10;
      const fMax = Math.round((calculated.maxMg + offset) * 10) / 10;
      const fRange = fMin === fMax ? `${fMin}` : `${fMin} - ${fMax}`;
      if (fRange !== correctRange) incorrects.add(fRange);
    }

    const options = [correctRange, ...Array.from(incorrects).slice(0, 3)].sort(() => 0.5 - Math.random());

    setTrainerQuestion({
      med: randomMed,
      weight,
      status,
      correctRange,
      options,
      unit
    });
  };

  const startTrainerGame = () => {
    setTrainerRound(0);
    setTrainerScore(0);
    setTrainerSelectedOpt(null);
    setTrainerIsChecked(false);
    setTrainerCompleted(false);
    setRecallGameMode('trainer');
  };

  useEffect(() => {
    if (recallGameMode === 'trainer' && trainerRound < 10 && !trainerCompleted) {
      generateTrainerQuestion();
    }
  }, [trainerRound, recallGameMode, trainerCompleted]);

  const verifyTrainerChoice = () => {
    if (trainerSelectedOpt === null || trainerIsChecked) return;
    if (trainerSelectedOpt === trainerQuestion?.correctRange) {
      setTrainerScore(prev => prev + 1);
    }
    setTrainerIsChecked(true);
  };

  const nextTrainerQuestion = () => {
    if (trainerRound < 9) {
      setTrainerRound(prev => prev + 1);
      setTrainerSelectedOpt(null);
      setTrainerIsChecked(false);
    } else {
      setTrainerCompleted(true);
    }
  };

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
    } else if (medId === 'fentanyl') {
      if (status === 'elderly' || status === 'shock') {
        doseMgMin = weight * 0.5;
        doseMgMax = weight * 1.0;
        comments = language === 'cs'
          ? 'Snížená dávka u starších osob / šoku k zabránění závažné dechové deprese a hypotenze.'
          : 'Reduced dose in elderly/shock to prevent severe respiratory depression and hypotension.';
      } else {
        doseMgMin = weight * 1.0;
        doseMgMax = weight * 2.0;
        comments = language === 'cs'
          ? 'Syntetický opioid. Tlumí presorickou reakci (vzestup TK a SF) při laryngoskopii a intubaci.'
          : 'Synthetic opioid. Blunts pressor response (hypertension/tachycardia) during laryngoscopy and intubation.';
      }
    } else if (medId === 'midazolam') {
      if (status === 'elderly' || status === 'shock') {
        doseMgMin = weight * 0.01;
        doseMgMax = weight * 0.03;
        comments = language === 'cs'
          ? 'Anxiolýza/Sedace: Výrazně snížená dávka, riziko synergie s opioidy a rozvoje těžké hypotenze.'
          : 'Anxiolysis/Sedation: Highly reduced dose, risk of synergy with opioids and severe hypotension.';
      } else if (status === 'pediatric') {
        doseMgMin = weight * 0.05;
        doseMgMax = weight * 0.15;
        comments = language === 'cs'
          ? 'Pediatričtí pacienti: Často podáván perorálně (0,25 - 0,5 mg/kg) k premedikaci před úvodem.'
          : 'Pediatric: Often administered orally (0.25 - 0.5 mg/kg) for pre-medication before induction.';
      } else {
        doseMgMin = weight * 0.02;
        doseMgMax = weight * 0.05;
        comments = language === 'cs'
          ? 'Sedativum/Anxiolytikum: Zajišťuje vynikající anterográdní amnesii a zklidnění před výkonem.'
          : 'Sedative/Anxiolytic: Provides excellent anterograde amnesia and pre-procedure calming.';
      }
    } else if (medId === 'phenylephrine') {
      if (status === 'elderly') {
        doseMgMin = weight * 0.5;
        doseMgMax = weight * 1.0;
        comments = language === 'cs'
          ? 'Čistý alpha-1 agonista. U starších osob opatrně s reflexní bradykardií.'
          : 'Pure alpha-1 agonist. Exercise caution in elderly due to reflex bradycardia.';
      } else if (status === 'pediatric') {
        doseMgMin = weight * 5.0;
        doseMgMax = weight * 10.0;
        comments = language === 'cs'
          ? 'Pediatrický bolus: Používá se k léčbě hypotenze při anestezii u dětí.'
          : 'Pediatric bolus: Used to treat anesthesia-induced hypotension in children.';
      } else {
        doseMgMin = weight * 0.5;
        doseMgMax = weight * 2.0;
        comments = language === 'cs'
          ? 'Čistý alpha-1 agonista. Lék volby pro léčbu hypotenze vyvolané spinální anestezií.'
          : 'Pure alpha-1 agonist. Drug of choice for spinal anesthesia-induced hypotension.';
      }
    } else if (medId === 'ephedrine') {
      if (status === 'elderly') {
        doseMgMin = weight * 0.05;
        doseMgMax = weight * 0.1;
        comments = language === 'cs'
          ? 'Starší pacienti: Zvažte nižší dávky kvůli riziku tachykardie a ischemie myokardu.'
          : 'Elderly: Consider lower doses due to risk of tachycardia and myocardial ischemia.';
      } else {
        doseMgMin = weight * 0.07;
        doseMgMax = weight * 0.15;
        comments = language === 'cs'
          ? 'Smíšené sympatomimetikum. Zvyšuje TK i SF. Vhodný při hypotenzi doprovázené bradykardií.'
          : 'Mixed sympathomimetic. Raises BP and HR. Ideal for hypotension accompanied by bradycardia.';
      }
    } else if (medId === 'thiopental') {
      if (status === 'elderly') {
        doseMgMin = weight * 1.5;
        doseMgMax = weight * 2.5;
        comments = language === 'cs'
          ? 'Starší pacienti: Výrazně snížená dávka kvůli kardiodepresivním účinkům a vazodilataci.'
          : 'Elderly: Significantly reduced dose due to cardiodepressant effects and vasodilation.';
      } else if (status === 'shock') {
        doseMgMin = weight * 1.0;
        doseMgMax = weight * 2.0;
        comments = language === 'cs'
          ? 'KONTRAINDIKACE/NEBEZPEČÍ: Thiopental způsobuje těžkou venodilataci a depresi myokardu. V šoku nepodávat!'
          : 'CONTRAINDICATION/DANGER: Thiopental causes severe venodilation and myocardial depression. Avoid in shock!';
      } else if (status === 'pediatric') {
        doseMgMin = weight * 5.0;
        doseMgMax = weight * 7.0;
        comments = language === 'cs'
          ? 'Pediatričtí pacienti: Vyžadují vyšší váhové dávky kvůli rychlejšímu metabolismu.'
          : 'Pediatric: Require higher weight-based doses due to faster metabolic clearance.';
      } else {
        doseMgMin = weight * 3.0;
        doseMgMax = weight * 5.0;
        comments = language === 'cs'
          ? 'Barbiturátové anestetikum. Snižuje ICP a průtok krve mozkem. Kontraindikován u porfyrie.'
          : 'Barbiturate anesthetic. Decreases ICP and cerebral blood flow. Contraindicated in porphyria.';
      }
    } else if (medId === 'dexmedetomidine') {
      if (status === 'elderly') {
        doseMgMin = weight * 0.15;
        doseMgMax = weight * 0.5;
        comments = language === 'cs'
          ? 'Starší pacienti: Udržovací infuze bez nasycovací dávky (prevence těžké bradykardie).'
          : 'Elderly: Maintenance infusion without loading dose (prevents severe bradycardia).';
      } else if (status === 'pediatric') {
        doseMgMin = weight * 0.2;
        doseMgMax = weight * 1.0;
        comments = language === 'cs'
          ? 'Pediatrická sedace: Vhodný pro sedaci na JIP nebo premedikaci.'
          : 'Pediatric sedation: Suitable for ICU sedation or pre-medication.';
      } else {
        doseMgMin = weight * 0.2;
        doseMgMax = weight * 0.7;
        comments = language === 'cs'
          ? 'Selektivní alpha-2 agonista. Zajišťuje kooperativní sedaci bez útlumu dýchání.'
          : 'Selective alpha-2 agonist. Provides cooperative sedation without respiratory depression.';
      }
    } else if (medId === 'norepinephrine') {
      if (status === 'elderly') {
        doseMgMin = weight * 0.05;
        doseMgMax = weight * 0.3;
        comments = language === 'cs'
          ? 'Starší pacienti: Nižší udržovací dávky, monitorujte končetinovou a orgánovou perfuzi.'
          : 'Elderly: Lower maintenance doses, monitor limb and organ perfusion closely.';
      } else if (status === 'shock') {
        doseMgMin = weight * 0.1;
        doseMgMax = weight * 1.0;
        comments = language === 'cs'
          ? 'Septický/kardiogenní šok: Lék první volby. Titrujte kontinuálně na MAP > 65 mmHg.'
          : 'Septic/Cardiogenic Shock: First-line vasopressor. Titrate continuously to MAP > 65 mmHg.';
      } else {
        doseMgMin = weight * 0.05;
        doseMgMax = weight * 0.5;
        comments = language === 'cs'
          ? 'Vasopresor: Silná vazokonstrikce. Podávat přednostně do centrální žíly.'
          : 'Vasopressor: Potent vasoconstriction. Administer preferably via central line.';
      }
    } else if (medId === 'atropine') {
      if (status === 'pediatric') {
        doseMgMin = weight * 0.02;
        doseMgMax = weight * 0.02;
        comments = language === 'cs'
          ? 'Pediatrický bolus: Minimální jednorázová dávka je 0,1 mg k zamezení paradoxní bradykardie.'
          : 'Pediatric bolus: Minimum single dose is 0.1 mg to prevent paradoxical bradycardia.';
      } else {
        doseMgMin = weight * 0.01;
        doseMgMax = weight * 0.02;
        comments = language === 'cs'
          ? 'Anticholinergikum. První volba u symptomatické bradykardie. Dávky < 0,5 mg jsou zakázány.'
          : 'Anticholinergic. First choice in symptomatic bradycardia. Doses < 0.5 mg are prohibited.';
      }
    } else if (medId === 'naloxone') {
      if (status === 'elderly') {
        doseMgMin = weight * 0.0005;
        doseMgMax = weight * 0.005;
        comments = language === 'cs'
          ? 'Starší pacienti: Titrujte velmi pomalu, abyste zabránili náhlému rozvoji bolesti a neklidu.'
          : 'Elderly: Titrate very slowly to prevent sudden emergence of severe pain and agitation.';
      } else if (status === 'pediatric') {
        doseMgMin = weight * 0.01;
        doseMgMax = weight * 0.1;
        comments = language === 'cs'
          ? 'Pediatrický reverz opioidů: Podávejte podle klinického účinku dýchání.'
          : 'Pediatric opioid reversal: Administer based on clinical respiratory response.';
      } else {
        doseMgMin = weight * 0.001;
        doseMgMax = weight * 0.01;
        comments = language === 'cs'
          ? 'Antidotum opioidů. Krátká doba účinku (30-90 min), hrozí renarkotizace!'
          : 'Opioid antidote. Short duration of action (30-90 min), risk of re-narcotization!';
      }
    } else if (medId === 'neostigmine') {
      if (status === 'elderly') {
        doseMgMin = weight * 0.03;
        doseMgMax = weight * 0.05;
        comments = language === 'cs'
          ? 'Starší pacienti: Vyšší citlivost na nežádoucí účinky (bradykardie). Vždy podat s atropinem.'
          : 'Elderly: Higher sensitivity to adverse effects (bradycardia). Always administer with atropine.';
      } else if (status === 'shock') {
        doseMgMin = weight * 0.03;
        doseMgMax = weight * 0.03;
        comments = language === 'cs'
          ? 'NEBEZPEČÍ: Neostigmin v šoku může vyvolat těžkou bradykardii až asystolii. Podávat extrémně opatrně.'
          : 'DANGER: Neostigmine in shock can trigger severe bradycardia or asystole. Administer with extreme care.';
      } else {
        doseMgMin = weight * 0.03;
        doseMgMax = weight * 0.07;
        comments = language === 'cs'
          ? 'Inhibitor acetylcholinesterázy. Musí být VŽDY podán s anticholinergikem k prevenci bradykardie.'
          : 'Acetylcholinesterase inhibitor. Must ALWAYS be given with anticholinergic to prevent bradycardia.';
      }
    } else if (medId === 'dexamethasone') {
      if (status === 'pediatric') {
        doseMgMin = weight * 0.15;
        doseMgMax = weight * 0.5;
        comments = language === 'cs'
          ? 'Pediatrické použití: Prevence laryngoedému nebo jako antiemetikum (max. 10 mg).'
          : 'Pediatric use: Prevention of laryngeal edema or as antiemetic (max 10mg).';
      } else if (status === 'elderly') {
        doseMgMin = weight * 0.05;
        doseMgMax = weight * 0.1;
        comments = language === 'cs'
          ? 'Starší pacienti: Nižší dávky (např. 4 - 8 mg), sledujte hladinu glykémie (riziko hyperglykémie).'
          : 'Elderly: Lower doses (e.g. 4 - 8 mg), monitor blood glucose (hyperglycemia risk).';
      } else {
        doseMgMin = weight * 0.1;
        doseMgMax = weight * 0.15;
        comments = language === 'cs'
          ? 'Kortikosteroid. Profylaxe PONV (4 - 10 mg IV). Pomalejší nástup účinku (1-2 hodiny).'
          : 'Corticosteroid. PONV prophylaxis (4 - 10 mg IV). Slower onset of action (1-2 hours).';
      }
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
  const doseUnit = ['fentanyl', 'dexmedetomidine', 'norepinephrine', 'phenylephrine'].includes(calcMedId) ? 'mcg' : 'mg';

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
        <div className="flex bg-white/5 p-1 rounded-lg border border-white/10 mt-4 md:mt-0 max-w-lg backdrop-blur-md">
          <button
            onClick={() => setActiveTab('cards')}
            className={`flex-1 py-1.5 px-4 text-xs font-semibold rounded-md transition-all font-sans flex items-center justify-center gap-1.5 cursor-pointer ${
              activeTab === 'cards'
                ? 'bg-white/10 border border-white/15 text-white shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Compass className="w-3.5 h-3.5" />
            {language === 'cs' ? 'Kartičky' : 'Flashcards'}
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
            onClick={() => setActiveTab('broselow')}
            className={`flex-1 py-1.5 px-4 text-xs font-semibold rounded-md transition-all font-sans flex items-center justify-center gap-1.5 cursor-pointer ${
              activeTab === 'broselow'
                ? 'bg-white/10 border border-white/15 text-white shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Activity className="w-3.5 h-3.5" />
            {language === 'cs' ? 'Pediatrická resuscitace' : 'Pediatric CPR'}
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
          <button
            onClick={() => setActiveTab('recall')}
            className={`flex-1 py-1.5 px-4 text-xs font-semibold rounded-md transition-all font-sans flex items-center justify-center gap-1.5 cursor-pointer ${
              activeTab === 'recall'
                ? 'bg-white/10 border border-white/15 text-white shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <RotateCw className="w-3.5 h-3.5" />
            {language === 'cs' ? 'Aktivní trénink' : 'Active Recall'}
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
                  {medsData.map(med => (
                    <option key={med.id} value={med.id}>
                      {med.name} ({med.categoryLabel})
                    </option>
                  ))}
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
                          <span className="text-xl font-bold font-sans text-teal-300">{doseUnit}</span>
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
                          {getVolumeCalculation(calcMedId, currentCalc.minMg, currentCalc.maxMg, language)}
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
        {activeTab === 'broselow' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 font-sans" id="anesthesia-broselow">
            {/* Left Controls Card */}
            <div className="lg:col-span-5 flex flex-col gap-6 bg-white/5 border border-white/10 rounded-xl p-6 shadow-lg backdrop-blur-xl">
              <h3 className="text-lg font-bold text-white border-b border-white/10 pb-3 flex items-center gap-1.5">
                <Activity className="w-5 h-5 text-rose-400 animate-pulse" />
                {language === 'cs' ? 'Pediatrický urgentní kalkulátor' : 'Pediatric Emergency Calc'}
              </h3>

              {/* Mode Toggle */}
              <div className="flex bg-slate-900/80 p-1 rounded-lg border border-white/5">
                <button
                  onClick={() => setPediatricInputMode('weight')}
                  className={`flex-1 py-1.5 text-xs font-semibold rounded-md transition-all cursor-pointer ${
                    pediatricInputMode === 'weight'
                      ? 'bg-teal-500/20 text-teal-300 border border-teal-500/30'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {language === 'cs' ? 'Zadat hmotnost' : 'Enter Weight'}
                </button>
                <button
                  onClick={() => setPediatricInputMode('age')}
                  className={`flex-1 py-1.5 text-xs font-semibold rounded-md transition-all cursor-pointer ${
                    pediatricInputMode === 'age'
                      ? 'bg-teal-500/20 text-teal-300 border border-teal-500/30'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {language === 'cs' ? 'Odhadnout podle věku' : 'Estimate by Age'}
                </button>
              </div>

              {pediatricInputMode === 'weight' ? (
                /* Weight Input Controls */
                <div className="flex flex-col gap-4">
                  <div className="flex justify-between text-xs font-bold text-slate-400 uppercase tracking-wide">
                    <span>{language === 'cs' ? 'Tělesná hmotnost' : 'Body Weight'}</span>
                    <span className="text-teal-300 font-mono text-sm">{pediatricWeight} kg</span>
                  </div>
                  <input
                    type="range"
                    min="3"
                    max="45"
                    step="1"
                    value={pediatricWeight}
                    onChange={e => setPediatricWeight(parseInt(e.target.value))}
                    className="w-full accent-teal-500"
                  />
                  <div className="flex gap-2">
                    <input
                      type="number"
                      min="3"
                      max="100"
                      value={pediatricWeight}
                      onChange={e => setPediatricWeight(Math.max(3, parseInt(e.target.value) || 3))}
                      className="w-24 bg-slate-900 border border-white/10 rounded px-2.5 py-1.5 text-center font-mono text-sm text-white outline-none focus:border-teal-500/50"
                    />
                    <span className="text-xs text-slate-400 self-center">
                      {language === 'cs' ? 'Zadejte hmotnost dítěte v kg přímo.' : 'Enter child weight in kg directly.'}
                    </span>
                  </div>
                </div>
              ) : (
                /* Age Input Controls */
                <div className="flex flex-col gap-4">
                  <div className="flex justify-between text-xs font-bold text-slate-400 uppercase tracking-wide">
                    <span>{language === 'cs' ? 'Věk dítěte' : 'Child Age'}</span>
                    <span className="text-teal-300 font-mono text-sm">
                      {pediatricAge === 0 
                        ? (language === 'cs' ? 'Kojenec (< 1 rok)' : 'Infant (< 1 yr)') 
                        : `${pediatricAge} ${language === 'cs' ? (pediatricAge < 5 ? (pediatricAge === 1 ? 'rok' : 'roky') : 'let') : (pediatricAge === 1 ? 'yr' : 'yrs')}`}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="12"
                    step="1"
                    value={pediatricAge}
                    onChange={e => {
                      const age = parseInt(e.target.value);
                      setPediatricAge(age);
                      // Estimate weight based on APLS formulas:
                      // < 1 yr: 4kg (0)
                      // 1-5 yrs: (age * 2) + 8
                      // 6-12 yrs: (age * 3) + 7
                      let estW = 4;
                      if (age >= 1 && age <= 5) {
                        estW = age * 2 + 8;
                      } else if (age >= 6) {
                        estW = age * 3 + 7;
                      }
                      setPediatricWeight(estW);
                    }}
                    className="w-full accent-teal-500"
                  />
                  <div className="text-xs text-slate-400 bg-slate-900/50 border border-white/5 rounded-lg p-3 italic">
                    {language === 'cs' 
                      ? `Orientační odhad podle APLS vzorce: Hmotnost = ${pediatricAge === 0 ? '4 kg' : pediatricAge <= 5 ? '(Věk × 2) + 8' : '(Věk × 3) + 7'}. Vypočtená hmotnost: ${pediatricWeight} kg.`
                      : `Standard APLS formula: Weight = ${pediatricAge === 0 ? '4 kg' : pediatricAge <= 5 ? '(Age × 2) + 8' : '(Age × 3) + 7'}. Estimated weight: ${pediatricWeight} kg.`}
                  </div>
                </div>
              )}

              {/* Broselow Tape Visual indicator */}
              {pediatricWeight <= 36 ? (
                <div className="flex flex-col gap-2 mt-2">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wide">
                    {language === 'cs' ? 'Broselowova barevná zóna' : 'Broselow Color Zone'}
                  </span>
                  <div className={`p-4 rounded-xl border font-bold text-center capitalize transition-all shadow-md bg-gradient-to-r ${getBroselowData(pediatricWeight).bgGradient} ${getBroselowData(pediatricWeight).textColor}`}>
                    {language === 'cs' ? getBroselowData(pediatricWeight).zoneLabelCs : getBroselowData(pediatricWeight).zoneLabelEn}
                    <span className="block text-xs font-normal opacity-90 mt-1">
                      {language === 'cs' ? 'Hmotnostní rozmezí zóny' : 'Zone Weight Range'}: {getBroselowData(pediatricWeight).weightRange}
                    </span>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col gap-2 mt-2">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wide">
                    {language === 'cs' ? 'Limit Broselowovy pásky' : 'Broselow Tape Limit'}
                  </span>
                  <div className="p-4 rounded-xl border border-yellow-500/30 bg-yellow-500/10 font-semibold text-center text-yellow-300 text-sm leading-relaxed">
                    {language === 'cs' 
                      ? 'Pacient přesahuje 36 kg. Broselowova páska končí na zelené zóně. Použijte standardní pediatrické/dospělé dávkování.'
                      : 'Patient exceeds 36 kg. Broselow tape limits end on the Green zone. Apply standard pediatric/adult dosing.'}
                  </div>
                </div>
              )}
            </div>

            {/* Right Display Card - Results split into Equipment and Drugs */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              {(() => {
                const b = getBroselowData(pediatricWeight);
                return (
                  <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-white shadow-xl flex flex-col justify-between h-full backdrop-blur-xl">
                    <div className="flex flex-col gap-6">
                      <div className="flex justify-between items-start border-b border-white/10 pb-3">
                        <div>
                          <h4 className="text-lg font-bold text-teal-300 uppercase tracking-wider">
                            {language === 'cs' ? 'Pediatrický pohotovostní rozpis' : 'Pediatric Emergency Protocol'}
                          </h4>
                          <p className="text-xs text-slate-400 mt-0.5">
                            {language === 'cs' ? (
                              <span>
                                Vypočteno pro hmotnost <span className="font-bold text-white">{pediatricWeight} kg</span>
                              </span>
                            ) : (
                              <span>
                                Calculated for weight <span className="font-bold text-white">{pediatricWeight} kg</span>
                              </span>
                            )}
                          </p>
                        </div>
                        <span className="text-xs px-2 py-0.5 rounded bg-teal-500/10 text-teal-300 font-mono font-bold uppercase border border-teal-500/20">
                          APLS / ERC
                        </span>
                      </div>

                      {/* Section A: Equipment */}
                      <div className="flex flex-col gap-3">
                        <h5 className="text-xs font-bold text-teal-400 uppercase tracking-wider border-b border-white/5 pb-1">
                          🩻 {language === 'cs' ? 'Pomůcky a technické zajištění' : 'Equipment & Airway Sizes'}
                        </h5>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                          <div className="bg-slate-900/60 border border-white/5 rounded-lg p-3">
                            <span className="text-xs text-slate-400 block">{language === 'cs' ? 'Intubační kanyla (ETK)' : 'Endotracheal Tube'}</span>
                            <span className="font-bold text-white font-mono">{b.tubeSize}</span>
                            <span className="text-[11px] text-slate-400 block mt-0.5">
                              {language === 'cs' ? `Zavedení (hloubka): ${b.tubeDepth}` : `Insertion Depth: ${b.tubeDepth}`}
                            </span>
                          </div>
                          <div className="bg-slate-900/60 border border-white/5 rounded-lg p-3">
                            <span className="text-xs text-slate-400 block">{language === 'cs' ? 'Laryngoskopická lžíce' : 'Laryngoscope Blade'}</span>
                            <span className="font-bold text-white font-mono">{b.bladeSize}</span>
                          </div>
                          <div className="bg-slate-900/60 border border-white/5 rounded-lg p-3">
                            <span className="text-xs text-slate-400 block">{language === 'cs' ? 'Obličejová maska a vak' : 'Bag-Valve Mask'}</span>
                            <span className="font-bold text-white font-mono">{b.maskSize}</span>
                          </div>
                          <div className="bg-slate-900/60 border border-white/5 rounded-lg p-3">
                            <span className="text-xs text-slate-400 block">{language === 'cs' ? 'Defibrilační výboj' : 'Defibrillation Shock'}</span>
                            <span className="font-bold text-rose-400 font-mono">{b.defibJoules} J</span>
                            <span className="text-[11px] text-slate-400 block mt-0.5">
                              {language === 'cs' ? 'Vypočteno jako 4 J/kg (STATIM KPR)' : 'Calculated as 4 J/kg (STATIM CPR)'}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Section B: Resuscitation Drugs */}
                      <div className="flex flex-col gap-3">
                        <h5 className="text-xs font-bold text-rose-400 uppercase tracking-wider border-b border-white/5 pb-1">
                          💊 {language === 'cs' ? 'Resuscitační a emergency farmaka' : 'Emergency & Resuscitation Drugs'}
                        </h5>
                        <div className="flex flex-col gap-2">
                          {[
                            { name: 'Adrenalin (Epinephrine)', dose: b.adrenalinDose, desc_cs: 'Kardiostimulace a vazokonstrikce při asystolii / PEA / VF. Opakovat každých 3-5 minut.', desc_en: 'Cardiac stimulation & vasoconstriction in arrest. Repeat every 3-5 min.' },
                            { name: 'Amiodaron (Cordarone)', dose: b.amiodaronDose, desc_cs: 'Podat po 3. a 5. neúspěšném defibrilačním výboji u komorové fibrilace.', desc_en: 'Administer after 3rd and 5th shocks for refractory VF/pVT.' },
                            { name: 'Atropin sulfát', dose: b.atropinDose, desc_cs: 'Indikováno u závažné symptomatické bradykardie (např. před podáním sukcinylcholinu).', desc_en: 'Indicated for severe symptomatic bradycardia (e.g. pre-succinylcholine).' },
                            { name: 'Exacyl (Tranexamic Acid)', dose: b.exacylDose, desc_cs: 'Antifibrinolytikum při závažném traumatickém krvácení.', desc_en: 'Antifibrinolytic for severe traumatic hemorrhage.' },
                            { name: 'Glukóza 10%', dose: b.glucoseDose, desc_cs: 'Léčba hypoglykémie při resuscitaci nebo křečích.', desc_en: 'Treatment of hypoglycemia during CPR or active seizures.' }
                          ].map((d, idx) => (
                            <div key={idx} className="bg-slate-900/60 border border-white/5 rounded-lg p-3 flex justify-between items-start gap-4">
                              <div className="flex flex-col">
                                <span className="font-bold text-slate-100 text-sm">{d.name}</span>
                                <span className="text-[11px] text-slate-400 mt-1 leading-normal">
                                  {language === 'cs' ? d.desc_cs : d.desc_en}
                                </span>
                              </div>
                              <span className="font-mono text-sm font-bold text-teal-300 bg-teal-500/10 border border-teal-500/20 px-2 py-1 rounded shrink-0">
                                {d.dose}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="text-[10px] text-slate-500 text-center border-t border-white/10 pt-4 mt-6 italic">
                      {language === 'cs'
                        ? 'Pediatrické dávkování odpovídá aktuálním guidelines ERC 2021. Výpočty jsou pouze pro studijní účely.'
                        : 'Pediatric dosing corresponds to current ERC 2021 guidelines. Computations are for educational training purposes only.'}
                    </div>
                  </div>
                );
              })()}
            </div>
          </div>
        )}}

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

        {/* Tab 4: Pharmacology Active Recall Center */}
        {activeTab === 'recall' && (
          <div className="max-w-2xl mx-auto bg-white/5 border border-white/10 rounded-xl p-6 shadow-lg font-sans backdrop-blur-xl animate-fade-in" id="pharmacology-recall-board">
            
            {recallGameMode === 'menu' && (
              /* --- MENU STATE --- */
              <div className="flex flex-col gap-6">
                <div className="text-center py-4">
                  <div className="w-14 h-14 bg-teal-500/10 border border-teal-500/20 rounded-full flex items-center justify-center mx-auto mb-3 text-teal-300 shadow-lg shadow-teal-500/5">
                    <RotateCw className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-extrabold text-white tracking-tight">
                    {t('recallTitle')}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1 max-w-md mx-auto leading-relaxed">
                    {t('recallDesc')}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Game 1: Category Sorter Card */}
                  <div className="bg-white/5 border border-white/10 rounded-xl p-5 hover:border-teal-500/30 hover:bg-white/8 transition-all flex flex-col justify-between gap-4 shadow-sm">
                    <div>
                      <h4 className="font-bold text-white flex items-center gap-2 text-sm">
                        <Compass className="w-4.5 h-4.5 text-teal-400" />
                        {t('sorterTitle')}
                      </h4>
                      <p className="text-xs text-slate-400 mt-2 leading-relaxed font-medium">
                        {t('sorterDesc')}
                      </p>
                    </div>
                    <button
                      onClick={startSorterGame}
                      className="w-full py-2 bg-teal-500/20 hover:bg-teal-500/30 border border-teal-500/30 text-teal-300 hover:text-white text-xs font-bold rounded-lg transition-all cursor-pointer shadow-sm shadow-teal-500/5"
                    >
                      {t('startGame')}
                    </button>
                  </div>

                  {/* Game 2: Dose Master Trainer Card */}
                  <div className="bg-white/5 border border-white/10 rounded-xl p-5 hover:border-teal-500/30 hover:bg-white/8 transition-all flex flex-col justify-between gap-4 shadow-sm">
                    <div>
                      <h4 className="font-bold text-white flex items-center gap-2 text-sm">
                        <Calculator className="w-4.5 h-4.5 text-teal-400" />
                        {t('trainerTitle')}
                      </h4>
                      <p className="text-xs text-slate-400 mt-2 leading-relaxed font-medium">
                        {t('trainerDesc')}
                      </p>
                    </div>
                    <button
                      onClick={startTrainerGame}
                      className="w-full py-2 bg-teal-500/20 hover:bg-teal-500/30 border border-teal-500/30 text-teal-300 hover:text-white text-xs font-bold rounded-lg transition-all cursor-pointer shadow-sm shadow-teal-500/5"
                    >
                      {t('startGame')}
                    </button>
                  </div>
                </div>
              </div>
            )}

            {recallGameMode === 'sorter' && (
              /* --- GAME 1: SORTER STATE --- */
              sorterCompleted ? (
                /* --- Sorter Completed Screen --- */
                <div className="text-center py-6">
                  <div className="w-16 h-16 bg-teal-500/10 border border-teal-500/20 rounded-full flex items-center justify-center mx-auto mb-4 text-teal-300">
                    <Award className="w-9 h-9" />
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    {t('finalScore')}
                  </h3>
                  <div className="my-6 max-w-xs mx-auto bg-white/5 border border-white/10 rounded-xl p-5 shadow-inner">
                    <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                      {language === 'cs' ? 'Skóre zařazování' : 'Sorting Accuracy'}
                    </span>
                    <span className="text-5xl font-black font-mono text-teal-300">
                      {Math.round((sorterScore / sorterMeds.length) * 100)}%
                    </span>
                    <span className="block text-xs font-semibold text-slate-400 mt-1">
                      {sorterScore} {language === 'cs' ? 'z' : 'of'} {sorterMeds.length} {language === 'cs' ? 'správně' : 'correct'}
                    </span>
                  </div>
                  <div className="flex gap-3 justify-center">
                    <button
                      onClick={startSorterGame}
                      className="px-4 py-2 bg-teal-500/20 hover:bg-teal-500/30 border border-teal-500/30 text-teal-300 hover:text-white font-bold rounded-lg text-xs transition-all cursor-pointer shadow-sm"
                    >
                      {t('playAgain')}
                    </button>
                    <button
                      onClick={() => setRecallGameMode('menu')}
                      className="px-4 py-2 bg-white/10 border border-white/15 text-slate-300 hover:bg-white/20 hover:text-white font-semibold rounded-lg text-xs transition-all cursor-pointer"
                    >
                      {t('backToMenu')}
                    </button>
                  </div>
                </div>
              ) : (
                /* --- Sorter Game Active Round --- */
                <div className="flex flex-col gap-4">
                  <div className="flex justify-between items-center text-xs text-slate-400 border-b border-white/10 pb-3">
                    <span className="font-medium">{t('sorterTitle')}</span>
                    <span className="font-bold text-slate-300">
                      {t('questionCount')} {sorterIndex + 1} / {sorterMeds.length}
                    </span>
                  </div>

                  <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-teal-500 transition-all duration-300"
                      style={{ width: `${((sorterIndex + 1) / sorterMeds.length) * 100}%` }}
                    />
                  </div>

                  <div className="bg-white/5 border border-white/10 p-6 rounded-xl text-center flex flex-col gap-2 mt-2 backdrop-blur-md">
                    <span className="text-[10px] text-teal-400 font-bold uppercase tracking-widest">{t('selectCategory')}</span>
                    <h4 className="text-2xl font-black text-white leading-tight">{sorterMeds[sorterIndex]?.name}</h4>
                    <p className="text-xs text-slate-400 italic font-mono">{sorterMeds[sorterIndex]?.genericName}</p>
                    <div className="text-left bg-white/5 p-3.5 rounded-lg border border-white/5 text-[11px] text-slate-300 leading-relaxed mt-3 w-full">
                      <div className="mb-1"><strong className="text-teal-300">Class:</strong> {sorterMeds[sorterIndex]?.class}</div>
                      <div><strong className="text-teal-300">Mechanism:</strong> {sorterMeds[sorterIndex]?.mechanism}</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2 mt-2">
                    {(['induction', 'paralytics', 'analgesics', 'sedatives', 'vasoactive', 'reversal'] as MedCategory[]).map(cat => {
                      const isSelected = sorterSelectedCat === cat;
                      const isCorrect = sorterMeds[sorterIndex]?.category === cat;
                      let btnClass = 'border-white/10 bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white';
                      
                      if (sorterIsChecked) {
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

                      const labelMap: Record<string, string> = {
                        induction: language === 'cs' ? 'Indukční anestetikum' : 'Induction Agent',
                        paralytics: language === 'cs' ? 'Svalové relaxans' : 'Muscle Relaxant',
                        analgesics: language === 'cs' ? 'Analgetikum (Opioid)' : 'Analgesic (Opioid)',
                        sedatives: language === 'cs' ? 'Sedativum / Anxiolytikum' : 'Sedative / Anxiolytic',
                        vasoactive: language === 'cs' ? 'Kardiovaskulární / Vasoaktivní' : 'Vasoactive',
                        reversal: language === 'cs' ? 'Antidotum / Reversal' : 'Reversal Agent'
                      };

                      return (
                        <button
                          key={cat}
                          disabled={sorterIsChecked}
                          onClick={() => handleSorterChoice(cat)}
                          className={`text-center py-3 rounded-lg border text-xs transition-all font-sans cursor-pointer ${btnClass}`}
                        >
                          {labelMap[cat]}
                        </button>
                      );
                    })}
                  </div>

                  <div className="flex justify-between items-center border-t border-white/10 pt-4 mt-2">
                    <div className="text-xs text-slate-400 font-semibold">
                      {t('points')}: {sorterScore}
                    </div>

                    {!sorterIsChecked ? (
                      <button
                        onClick={verifySorterChoice}
                        disabled={sorterSelectedCat === null}
                        className="px-5 py-2 bg-teal-500/20 hover:bg-teal-500/30 disabled:bg-white/5 disabled:text-slate-500 border border-teal-500/30 hover:border-teal-500/50 text-teal-300 disabled:border-transparent font-bold rounded-lg text-xs transition-all cursor-pointer"
                      >
                        {language === 'cs' ? 'Ověřit' : 'Verify'}
                      </button>
                    ) : (
                      <button
                        onClick={nextSorterQuestion}
                        className="px-5 py-2 bg-white/10 border border-white/15 hover:bg-white/20 text-white font-bold rounded-lg text-xs transition-all cursor-pointer flex items-center gap-1"
                      >
                        {sorterIndex === sorterMeds.length - 1 ? t('backToMenu') : language === 'cs' ? 'Další' : 'Next'}
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>

                  <AnimatePresence>
                    {sorterIsChecked && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="bg-white/5 border border-white/10 p-4 rounded-xl text-xs leading-relaxed text-slate-300 mt-2"
                      >
                        {sorterSelectedCat === sorterMeds[sorterIndex]?.category ? (
                          <span className="text-green-400 font-bold block mb-1">✓ {t('correct')}</span>
                        ) : (
                          <span className="text-red-400 font-bold block mb-1">✗ {t('incorrect')}</span>
                        )}
                        <p className="text-[11px] leading-relaxed">
                          <strong>{sorterMeds[sorterIndex]?.name}</strong> {language === 'cs' ? 'patří do skupiny:' : 'belongs to the group:'}{' '}
                          <strong className="text-teal-300">
                            {sorterMeds[sorterIndex]?.categoryLabel}
                          </strong>.
                        </p>
                        <ul className="list-disc pl-4 mt-2 space-y-1 text-[11px] text-slate-400 leading-relaxed">
                          {sorterMeds[sorterIndex]?.pearls.slice(0, 2).map((pearl, i) => (
                            <li key={i}>{pearl}</li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            )}

            {recallGameMode === 'trainer' && (
              /* --- GAME 2: DOSE TRAINER STATE --- */
              trainerCompleted ? (
                /* --- Trainer Completed Screen --- */
                <div className="text-center py-6">
                  <div className="w-16 h-16 bg-teal-500/10 border border-teal-500/20 rounded-full flex items-center justify-center mx-auto mb-4 text-teal-300">
                    <Award className="w-9 h-9" />
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    {t('finalScore')}
                  </h3>
                  <div className="my-6 max-w-xs mx-auto bg-white/5 border border-white/10 rounded-xl p-5 shadow-inner">
                    <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                      {language === 'cs' ? 'Přesnost dávkování' : 'Dosing Accuracy'}
                    </span>
                    <span className="text-5xl font-black font-mono text-teal-300">
                      {Math.round((trainerScore / 10) * 100)}%
                    </span>
                    <span className="block text-xs font-semibold text-slate-400 mt-1">
                      {trainerScore} {language === 'cs' ? 'z' : 'of'} 10 {language === 'cs' ? 'správně' : 'correct'}
                    </span>
                  </div>
                  <div className="flex gap-3 justify-center">
                    <button
                      onClick={startTrainerGame}
                      className="px-4 py-2 bg-teal-500/20 hover:bg-teal-500/30 border border-teal-500/30 text-teal-300 hover:text-white font-bold rounded-lg text-xs transition-all cursor-pointer"
                    >
                      {t('playAgain')}
                    </button>
                    <button
                      onClick={() => setRecallGameMode('menu')}
                      className="px-4 py-2 bg-white/10 border border-white/15 text-slate-300 hover:bg-white/20 hover:text-white font-semibold rounded-lg text-xs transition-all cursor-pointer"
                    >
                      {t('backToMenu')}
                    </button>
                  </div>
                </div>
              ) : (
                /* --- Trainer Game Active Round --- */
                trainerQuestion ? (
                  <div className="flex flex-col gap-4">
                    <div className="flex justify-between items-center text-xs text-slate-400 border-b border-white/10 pb-3">
                      <span className="font-medium">{t('trainerTitle')}</span>
                      <span className="font-bold text-slate-300">
                        {t('questionCount')} {trainerRound + 1} / 10
                      </span>
                    </div>

                    <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-teal-500 transition-all duration-300"
                        style={{ width: `${((trainerRound + 1) / 10) * 100}%` }}
                      />
                    </div>

                    <div className="bg-white/5 border border-white/10 p-5 rounded-xl flex flex-col gap-2 mt-2 backdrop-blur-md shadow-sm">
                      <span className="text-[10px] text-teal-400 font-bold uppercase tracking-widest">{t('doseQuestion')}</span>
                      <h4 className="text-xl font-bold text-white leading-tight">{trainerQuestion.med.name}</h4>
                      
                      <div className="grid grid-cols-2 gap-3 mt-3 text-xs bg-white/5 p-3 rounded-lg border border-white/5 w-full">
                        <div>
                          <span className="text-slate-400 block font-medium">{t('patientWeight')}</span>
                          <strong className="text-white text-sm font-mono font-extrabold">{trainerQuestion.weight} kg</strong>
                        </div>
                        <div>
                          <span className="text-slate-400 block font-medium">{t('patientStatusLabel')}</span>
                          <strong className="text-white text-xs font-bold capitalize">
                            {language === 'cs' 
                              ? (trainerQuestion.status === 'standard' ? 'Standardní dospělý' : trainerQuestion.status === 'elderly' ? 'Starší pacient' : trainerQuestion.status === 'shock' ? 'Kardiovaskulární nestabilita / Šok' : 'Dětský pacient')
                              : trainerQuestion.status}
                          </strong>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2 mt-1">
                      {trainerQuestion.options.map((opt, idx) => {
                        const isSelected = trainerSelectedOpt === opt;
                        const isCorrect = trainerQuestion.correctRange === opt;
                        let btnClass = 'border-white/10 bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white';
                        
                        if (trainerIsChecked) {
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
                            disabled={trainerIsChecked}
                            onClick={() => {
                              if (!trainerIsChecked) setTrainerSelectedOpt(opt);
                            }}
                            className={`w-full text-left p-3.5 rounded-lg border text-sm transition-all font-sans flex justify-between items-center cursor-pointer ${btnClass}`}
                          >
                            <span>
                              <span className="font-bold text-slate-400 mr-2">{String.fromCharCode(65 + idx)})</span>
                              {opt} <span className="font-mono text-xs text-slate-400 font-semibold">{trainerQuestion.unit}</span>
                            </span>
                            {trainerIsChecked && isCorrect && <Check className="w-4 h-4 text-green-400 shrink-0" />}
                          </button>
                        );
                      })}
                    </div>

                    <div className="flex justify-between items-center border-t border-white/10 pt-4 mt-2">
                      <div className="text-xs text-slate-400 font-semibold">
                        {t('points')}: {trainerScore}
                      </div>

                      {!trainerIsChecked ? (
                        <button
                          onClick={verifyTrainerChoice}
                          disabled={trainerSelectedOpt === null}
                          className="px-5 py-2 bg-teal-500/20 hover:bg-teal-500/30 disabled:bg-white/5 disabled:text-slate-500 border border-teal-500/30 hover:border-teal-500/50 text-teal-300 disabled:border-transparent font-bold rounded-lg text-xs transition-all cursor-pointer shadow-sm"
                        >
                          {language === 'cs' ? 'Ověřit' : 'Verify'}
                        </button>
                      ) : (
                        <button
                          onClick={nextTrainerQuestion}
                          className="px-5 py-2 bg-white/10 border border-white/15 hover:bg-white/20 text-white font-bold rounded-lg text-xs transition-all cursor-pointer flex items-center gap-1"
                        >
                          {trainerRound === 9 ? t('backToMenu') : language === 'cs' ? 'Další' : 'Next'}
                          <ChevronRight className="w-3.5 h-3.5" />
                        </button>
                      )}
                    </div>

                    <AnimatePresence>
                      {trainerIsChecked && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="bg-white/5 border border-white/10 p-4 rounded-xl text-xs leading-relaxed text-slate-300 mt-2"
                        >
                          {trainerSelectedOpt === trainerQuestion.correctRange ? (
                            <span className="text-green-400 font-bold block mb-1">✓ {t('correct')}</span>
                          ) : (
                            <span className="text-red-400 font-bold block mb-1">✗ {t('incorrect')}</span>
                          )}
                          <p className="text-[11px] leading-relaxed">
                            {language === 'cs' ? 'Správné doporučené dávkování pro' : 'The correct recommended dosage range for'}{' '}
                            <strong>{trainerQuestion.med.name}</strong> ({trainerQuestion.weight} kg,{' '}
                            {trainerQuestion.status}) {language === 'cs' ? 'je:' : 'is:'}{' '}
                            <strong className="text-yellow-300 font-mono font-bold">
                              {trainerQuestion.correctRange} {trainerQuestion.unit}
                            </strong>.
                          </p>
                          <p className="mt-2 text-[11px] text-slate-400 leading-relaxed border-t border-white/5 pt-2">
                            <strong>{language === 'cs' ? 'Klinické odůvodnění:' : 'Clinical Rationale:'}</strong>{' '}
                            {calculateDose(trainerQuestion.med.id, trainerQuestion.weight, trainerQuestion.status)?.comments}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <p className="text-slate-400 text-xs font-sans animate-pulse">Generating dose training scenario...</p>
                  </div>
                )
              )
            )}
          </div>
        )}
      </div>
    </div>
  );
}
