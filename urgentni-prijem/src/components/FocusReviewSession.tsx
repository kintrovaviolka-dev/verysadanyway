import React, { useState, useEffect } from "react";
import { useProgress, ReviewItem } from "../context/ProgressContext";
import {
  HelpCircle,
  Activity,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  RotateCcw,
  Volume2,
  VolumeX,
  Sparkles,
  BookOpen
} from "lucide-react";

interface FocusReviewProps {
  onClose: () => void;
}

interface ShuffledOption {
  text: string;
  originalIndex: number;
}

export default function FocusReviewSession({ onClose }: FocusReviewProps) {
  const {
    getReviewSession,
    logIncorrectChoice,
    clearIncorrectChoice,
    getPendingReviewItemsCount
  } = useProgress();

  const [sessionItems, setSessionItems] = useState<ReviewItem[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [shuffledOptions, setShuffledOptions] = useState<ShuffledOption[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState<boolean>(false);
  
  // Scoring
  const [correctCount, setCorrectCount] = useState<number>(0);
  const [completed, setCompleted] = useState<boolean>(false);
  const [sessionErrors, setSessionErrors] = useState<Array<{ item: ReviewItem; selected: string }>>([]);

  // Load session items on mount
  useEffect(() => {
    const items = getReviewSession();
    setSessionItems(items);
    if (items.length > 0) {
      shuffleQuestionOptions(items[0]);
    }
  }, []);

  const shuffleQuestionOptions = (item: ReviewItem) => {
    const opts = item.options.map((text, i) => ({ text, originalIndex: i }));
    // Shuffle using standard array sort
    const shuffled = [...opts].sort(() => Math.random() - 0.5);
    setShuffledOptions(shuffled);
    setSelectedAnswer(null);
    setIsAnswered(false);
  };

  const handleSelectAnswer = (index: number) => {
    if (isAnswered) return;
    setSelectedAnswer(index);
  };

  const handleSubmitAnswer = () => {
    if (selectedAnswer === null || isAnswered) return;
    setIsAnswered(true);

    const activeItem = sessionItems[currentIndex];
    const selectedOpt = shuffledOptions[selectedAnswer];
    const isCorrect = selectedOpt.originalIndex === activeItem.correctIndex;

    if (isCorrect) {
      setCorrectCount(prev => prev + 1);
      // Success! Clear this question from incorrect decisions list so it decreases in priority
      clearIncorrectChoice(activeItem.id);
    } else {
      // Mistake! Log/re-log the incorrect choice
      const correctText = activeItem.options[activeItem.correctIndex];
      logIncorrectChoice(
        activeItem.id,
        activeItem.specialty,
        selectedOpt.text,
        activeItem.question,
        correctText
      );
      setSessionErrors(prev => [...prev, { item: activeItem, selected: selectedOpt.text }]);
    }
  };

  const handleNext = () => {
    const nextIdx = currentIndex + 1;
    if (nextIdx < sessionItems.length) {
      setCurrentIndex(nextIdx);
      shuffleQuestionOptions(sessionItems[nextIdx]);
    } else {
      setCompleted(true);
    }
  };

  const handleRestart = () => {
    const newItems = getReviewSession();
    setSessionItems(newItems);
    setCurrentIndex(0);
    setCorrectCount(0);
    setCompleted(false);
    setSessionErrors([]);
    if (newItems.length > 0) {
      shuffleQuestionOptions(newItems[0]);
    }
  };

  if (sessionItems.length === 0) {
    return (
      <div className="max-w-2xl mx-auto p-8 bg-[#1d2027] rounded-2xl border border-[#424754] shadow-2xl text-center space-y-6 animate-fade-in">
        <div className="w-16 h-16 bg-[#4d8eff]/10 rounded-full flex items-center justify-center mx-auto text-[#adc6ff]">
          <BookOpen className="w-8 h-8" />
        </div>
        <h2 className="text-2xl font-black text-white uppercase tracking-wide">Nemáte žádné resty!</h2>
        <p className="text-sm text-[#c2c6d6] leading-relaxed">
          Skvělá práce! Nemáte v historii zaznamenaná žádná chybná rozhodnutí nebo nedokončené kvízy.
        </p>
        <button
          onClick={onClose}
          className="px-6 py-3 bg-[#4d8eff] hover:bg-[#adc6ff] text-white font-bold rounded-xl shadow-lg active:scale-95 transition-all text-xs uppercase tracking-wider cursor-pointer"
        >
          Zpět na hlavní obrazovku
        </button>
      </div>
    );
  }

  const currentItem = sessionItems[currentIndex];
  const isCorrectChoice = selectedAnswer !== null && shuffledOptions[selectedAnswer]?.originalIndex === currentItem.correctIndex;

  return (
    <div className="max-w-3xl mx-auto space-y-6 pb-12 animate-fade-in">
      {/* Session Progress Header */}
      <div className="flex justify-between items-center bg-[#1d2027] px-6 py-4 rounded-2xl border border-[#424754]/40 shadow-md">
        <div className="flex items-center gap-3">
          <div className="px-2.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[10px] font-black uppercase font-mono">
            Focus Review
          </div>
          <span className="text-xs text-[#c2c6d6] font-mono">
            Karta <strong className="text-white">{currentIndex + 1}</strong> z <strong className="text-white">{sessionItems.length}</strong>
          </span>
        </div>
        <button
          onClick={onClose}
          className="text-xs font-bold text-[#c2c6d6] hover:text-white transition-colors cursor-pointer"
        >
          PŘERUŠIT REVÍZI
        </button>
      </div>

      {!completed ? (
        /* Active Question Card */
        <div className="bg-[#1d2027] p-8 rounded-2xl border border-[#424754]/40 shadow-2xl space-y-6">
          {/* Question Source */}
          <div className="flex justify-between items-start gap-4">
            <span className="text-[10px] text-[#c2c6d6] uppercase tracking-widest font-mono block">
              Zdroj: <span className="text-[#adc6ff] font-bold">{currentItem.sourceTitle}</span>
            </span>
            <span className="text-[10px] px-2 py-0.5 rounded-full font-extrabold uppercase bg-[#272a31]/80 text-[#e1e2ec] border border-[#424754]/30">
              {currentItem.specialty === "Emergency" ? "Urgentní příjem" : "Anesteziologie"}
            </span>
          </div>

          {/* Question text */}
          <h3 className="text-lg font-black text-white leading-relaxed">
            {currentItem.question}
          </h3>

          {/* Options Grid */}
          <div className="grid grid-cols-1 gap-3 pt-2">
            {shuffledOptions.map((opt, index) => {
              const isSel = selectedAnswer === index;
              const isOrigCorrect = opt.originalIndex === currentItem.correctIndex;
              
              let cardStyle = "bg-[#272a31]/30 border-[#424754]/50 hover:border-[#adc6ff]/50";
              if (isSel) cardStyle = "bg-[#4d8eff]/10 border-[#4d8eff]";
              
              if (isAnswered) {
                if (isOrigCorrect) {
                  cardStyle = "bg-emerald-950/30 border-emerald-500 text-emerald-300";
                } else if (isSel) {
                  cardStyle = "bg-rose-950/30 border-rose-500 text-rose-300";
                } else {
                  cardStyle = "bg-[#272a31]/10 border-[#424754]/20 opacity-50";
                }
              }

              return (
                <button
                  key={index}
                  onClick={() => handleSelectAnswer(index)}
                  disabled={isAnswered}
                  className={`p-4 rounded-xl border text-left transition-all text-sm font-medium flex items-center justify-between gap-4 cursor-pointer ${cardStyle}`}
                >
                  <span className="leading-relaxed">{opt.text}</span>
                  <div className="shrink-0">
                    {isAnswered && isOrigCorrect && (
                      <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                    )}
                    {isAnswered && isSel && !isOrigCorrect && (
                      <AlertTriangle className="w-5 h-5 text-rose-400" />
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Action Area */}
          <div className="pt-4 border-t border-[#424754]/40 flex justify-between items-center gap-4">
            <div>
              {isAnswered && (
                <div className={`flex items-center gap-1.5 text-xs font-bold ${isCorrectChoice ? "text-emerald-400" : "text-rose-400"}`}>
                  {isCorrectChoice ? (
                    <>
                      <CheckCircle2 className="w-4 h-4" /> Správné rozhodnutí!
                    </>
                  ) : (
                    <>
                      <AlertTriangle className="w-4 h-4" /> Suboptimální volba!
                    </>
                  )}
                </div>
              )}
            </div>

            {!isAnswered ? (
              <button
                onClick={handleSubmitAnswer}
                disabled={selectedAnswer === null}
                className="px-6 py-2.5 bg-green-600 hover:bg-green-500 disabled:opacity-50 text-white font-extrabold rounded-xl shadow-lg active:scale-95 transition-all text-xs uppercase tracking-wider cursor-pointer"
              >
                Odeslat odpověď
              </button>
            ) : (
              <button
                onClick={handleNext}
                className="px-6 py-2.5 bg-[#4d8eff] hover:bg-[#adc6ff] text-white font-extrabold rounded-xl shadow-lg active:scale-95 transition-all text-xs uppercase tracking-wider flex items-center gap-1.5 cursor-pointer"
              >
                {currentIndex + 1 < sessionItems.length ? (
                  <>
                    Další otázka <ArrowRight className="w-4 h-4" />
                  </>
                ) : (
                  "Dokončit revizi"
                )}
              </button>
            )}
          </div>

          {/* Clinical Explanation (shown after answering) */}
          {isAnswered && (
            <div className="p-4 bg-[#191b23] rounded-xl border border-[#424754]/40 text-xs text-[#c2c6d6] leading-relaxed space-y-2 animate-slide-up">
              <span className="font-extrabold text-white block uppercase tracking-wider text-[10px] text-[#adc6ff] flex items-center gap-1">
                <BookOpen className="w-3.5 h-3.5" /> Klinické zdůvodnění (ČLS JEP):
              </span>
              <p>{currentItem.explanation}</p>
            </div>
          )}
        </div>
      ) : (
        /* Summary Screen */
        <div className="bg-[#1d2027] p-8 rounded-2xl border-2 border-[#4d8eff] space-y-8 animate-fade-in text-center">
          <div className="space-y-3">
            <div className="inline-flex items-center justify-center p-4 bg-[#4d8eff]/10 rounded-full border border-[#4d8eff]/20">
              <Sparkles className="w-10 h-10 text-[#adc6ff] animate-pulse" />
            </div>
            <h3 className="text-2xl font-black text-white uppercase tracking-wide">
              Revize dokončena!
            </h3>
            <p className="text-sm text-[#c2c6d6] max-w-md mx-auto">
              Prošli jste {sessionItems.length} otázek zaměřených na Vaše slabší klinické oblasti.
            </p>
          </div>

          {/* Score Indicator */}
          <div className="max-w-xs mx-auto bg-[#0b0e15] p-5 rounded-xl border border-[#424754] text-center">
            <span className="text-[10px] font-bold text-[#c2c6d6] uppercase tracking-widest block mb-1">
              Dosažené skóre
            </span>
            <span className="text-4xl font-black text-[#4d8eff] font-mono">
              {correctCount} / {sessionItems.length}
            </span>
            <span className="text-xs text-[#c2c6d6] block mt-1">
              Úspěšnost: {Math.round((correctCount / sessionItems.length) * 100)}%
            </span>
          </div>

          {/* Missed list details */}
          {sessionErrors.length > 0 && (
            <div className="text-left space-y-3 pt-4 border-t border-[#424754]/40">
              <h4 className="text-xs font-black text-rose-400 uppercase tracking-wider">
                Otázky s chybnou odpovědí k zopakování:
              </h4>
              <div className="space-y-3 max-h-48 overflow-y-auto pr-1">
                {sessionErrors.map(({ item, selected }, idx) => (
                  <div key={idx} className="p-3 bg-[#191b23]/50 rounded-lg border border-[#424754]/20 space-y-1">
                    <span className="text-[9px] font-bold text-[#c2c6d6] block">ZDROJ: {item.sourceTitle}</span>
                    <p className="text-xs text-white font-semibold leading-relaxed">{item.question}</p>
                    <p className="text-[11px] text-[#c2c6d6] leading-relaxed">
                      Zvolili jste: <span className="text-rose-400 font-bold">"{selected}"</span>
                    </p>
                    <p className="text-[11px] text-emerald-400 leading-relaxed font-semibold">
                      Správná volba: "{item.options[item.correctIndex]}"
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Action buttons */}
          <div className="pt-6 border-t border-[#424754]/40 flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={handleRestart}
              className="px-6 py-3 bg-[#272a31] border border-[#424754] text-white hover:bg-[#32353c] font-bold rounded-xl active:scale-95 transition-all text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" /> Další kolo revize
            </button>
            <button
              onClick={onClose}
              className="px-8 py-3 bg-[#4d8eff] hover:bg-[#adc6ff] text-white font-bold rounded-xl active:scale-95 transition-all text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 cursor-pointer"
            >
              Ukončit a jít domů
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
