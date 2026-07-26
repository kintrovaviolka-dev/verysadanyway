const { useState, useEffect } = React;

// Embedded fallback questions (used when fetch fails, e.g., opening index.html via file://)
const EMBEDDED_QUESTIONS = [
  {
    "id": 1,
    "question": "Která třída imunoglobulinů (protilátek) je jako jediná schopna aktivně procházet placentární bariérou a zajišťovat pasivní imunitu plodu?",
    "options": [
      "IgA",
      "IgM",
      "IgE",
      "IgG"
    ],
    "correct": 3,
    "explanation": "IgG je jedinou třídou imunoglobulinů, která díky vazbě na specifické Fc receptory (FcRn) na buňkách syncytiotrofoblastu aktivně prochází placentou do krevního oběhu plodu. Ostatní třídy placentární bariérou za fyziologických podmínek neprocházejí."
  },
  {
    "id": 2,
    "question": "Které z následujících orgánů řadíme mezi primární (centrální) lymfatické orgány člověka?",
    "options": [
      "Slezina a lymfatické uzliny",
      "Kostní dřeň a brzlík (thymus)",
      "Kostní dřeň a slezina",
      "Mandle (tonsillae) a Peyerovy plaky"
    ],
    "correct": 1,
    "explanation": "Primární (centrální) lymfatické orgány jsou místem vzniku a zrání (imunokompetence) lymfocytů. U člověka se jedná o kostní dřeň (kde vznikají všechny krevní buňky a dozrávají B-lymfocyty) a brzlík (thymus, kde dozrávají T-lymfocyty). Slezina, uzliny a MALT jsou sekundární lymfatické orgány."
  },
  {
    "id": 3,
    "question": "Který z následujících buněčných typů je hlavním zástupcem specifické (adaptivní) buněčné imunity a nese antigen-specifický receptor TCR?",
    "options": [
      "NK buňky (Natural Killers)",
      "B-lymfocyty",
      "T-lymfocyty",
      "Makrofágy"
    ],
    "correct": 2,
    "explanation": "T-lymfocyty jsou hlavními buňkami specifické buněčné imunity. Každý T-lymfocyt nese na svém povrchu unikátní receptor TCR (T-Cell Receptor), který rozpoznává cizorodé antigeny prezentované v komplexu s HLA/MHC molekulami. B-lymfocyty odpovídají za humorální imunitu, NK buňky a makrofágy patří do nespecifické imunity."
  }
];

function App() {
  const [questions, setQuestions] = useState([]);
  const [activeQuestions, setActiveQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [stats, setStats] = useState({ correct: 0, incorrect: 0 });
  const [mode, setMode] = useState(null); // 'sequential' or 'random'
  const [isStarted, setIsStarted] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Load questions on mount
  useEffect(() => {
    fetch('questions.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Nepodařilo se načíst databázi otázek.');
        }
        return response.json();
      })
      .then(data => {
        setQuestions(data);
        setLoading(false);
        // Check if there is saved progress in localStorage
        const savedState = localStorage.getItem('imunologie_test_state');
        if (savedState) {
          try {
            const parsed = JSON.parse(savedState);
            // Verify if the saved questions match the current questions database size or elements roughly
            if (parsed.activeQuestions && parsed.activeQuestions.length > 0) {
              setActiveQuestions(parsed.activeQuestions);
              setCurrentIndex(parsed.currentIndex);
              setSelectedOption(parsed.selectedOption);
              setIsAnswered(parsed.isAnswered);
              setStats(parsed.stats);
              setMode(parsed.mode);
              setIsStarted(parsed.isStarted);
              setIsFinished(parsed.isFinished);
            }
          } catch (e) {
            console.error('Chyba při parsování uloženého stavu:', e);
          }
        }
      })
      .catch(err => {
        console.warn('Failed to fetch questions.json — using embedded fallback.', err);
        setQuestions(EMBEDDED_QUESTIONS);
        setLoading(false);
      });
  }, []);

  // Save progress to localStorage whenever state changes
  useEffect(() => {
    if (isStarted && activeQuestions.length > 0) {
      const stateToSave = {
        activeQuestions,
        currentIndex,
        selectedOption,
        isAnswered,
        stats,
        mode,
        isStarted,
        isFinished
      };
      localStorage.setItem('imunologie_test_state', JSON.stringify(stateToSave));
    }
  }, [activeQuestions, currentIndex, selectedOption, isAnswered, stats, mode, isStarted, isFinished]);

  // Handle start test
  const startTest = (selectedMode) => {
    let testQuestions = [...questions];
    if (selectedMode === 'random') {
      // Shuffle and pick 20 questions (or all if less than 20)
      testQuestions = testQuestions.sort(() => 0.5 - Math.random());
      if (testQuestions.length > 20) {
        testQuestions = testQuestions.slice(0, 20);
      }
    } else {
      // Sequential - sort by ID just in case
      testQuestions = testQuestions.sort((a, b) => a.id - b.id);
    }

    setActiveQuestions(testQuestions);
    setCurrentIndex(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setStats({ correct: 0, incorrect: 0 });
    setMode(selectedMode);
    setIsStarted(true);
    setIsFinished(false);
  };

  // Handle answer select
  const handleAnswerSelect = (optionIndex) => {
    if (isAnswered) return;

    setSelectedOption(optionIndex);
    setIsAnswered(true);

    const currentQuestion = activeQuestions[currentIndex];
    const isCorrect = optionIndex === currentQuestion.correct;

    setStats(prev => ({
      correct: prev.correct + (isCorrect ? 1 : 0),
      incorrect: prev.incorrect + (isCorrect ? 0 : 1)
    }));
  };

  // Handle next question
  const nextQuestion = () => {
    if (currentIndex < activeQuestions.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setIsFinished(true);
    }
  };

  // Reset/Restart test
  const restart = () => {
    localStorage.removeItem('imunologie_test_state');
    setIsStarted(false);
    setIsFinished(false);
    setMode(null);
    setActiveQuestions([]);
    setCurrentIndex(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setStats({ correct: 0, incorrect: 0 });
  };

  if (loading) {
    return (
      <div class="flex flex-col items-center justify-center min-h-screen text-text-primary">
        <div class="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-accent-blue mb-4"></div>
        <p class="font-medium text-lg">Načítání otázek...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div class="flex flex-col items-center justify-center min-h-screen text-text-primary px-4">
        <div class="bg-red-950/30 border border-red-500/50 p-6 rounded-2xl max-w-md text-center">
          <span class="text-4xl mb-4 block">⚠️</span>
          <h2 class="text-xl font-bold mb-2 text-red-400">Chyba při spuštění</h2>
          <p class="text-text-secondary mb-6">{error}</p>
          <a href="../index.html" class="px-5 py-2.5 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl transition">
            Zpět na rozcestník
          </a>
        </div>
      </div>
    );
  }

  // --- MENU / CONFIGURATION SCREEN ---
  if (!isStarted) {
    return (
      <div class="container max-w-3xl mx-auto px-4 py-8 md:py-12 fade-in-up">
        {/* Header */}
        <header class="mb-10 text-center">
          <div class="brand-badge mb-4">
            <span>🛡️ Imunologie • Testovací modul</span>
          </div>
          <h1 class="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent mb-3 font-heading">
            Imunologický Trenažér
          </h1>
          <p class="text-text-secondary max-w-lg mx-auto text-base">
            Procvičování single-choice testových otázek s okamžitou zpětnou vazbou pro efektivní učení za pochodu.
          </p>
        </header>

        {/* Setup Card */}
        <div class="glass-card p-6 md:p-8 text-center max-w-xl mx-auto">
          <div class="w-16 h-16 bg-accent-blue/10 border border-accent-blue/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <span class="text-3xl">📝</span>
          </div>
          <h2 class="text-xl font-semibold mb-2 text-white font-heading">Nastavení procvičování</h2>
          <p class="text-text-secondary text-sm mb-8">
            Vyberte si režim studia. Celkem je k dispozici <strong class="text-accent-blue">{questions.length}</strong> otázek.
          </p>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            <button 
              onClick={() => startTest('random')}
              class="flex flex-col items-center justify-center p-5 rounded-2xl border border-white/10 hover:border-accent-blue/50 bg-white/[0.02] hover:bg-white/[0.05] transition-all group"
            >
              <span class="text-2xl mb-2 group-hover:scale-110 transition-transform">🎲</span>
              <span class="font-bold text-white text-sm">Náhodných 20 otázek</span>
              <span class="text-text-muted text-xs mt-1 text-center">Rychlý zkušební test pro otestování znalostí</span>
            </button>
            
            <button 
              onClick={() => startTest('sequential')}
              class="flex flex-col items-center justify-center p-5 rounded-2xl border border-white/10 hover:border-accent-blue/50 bg-white/[0.02] hover:bg-white/[0.05] transition-all group"
            >
              <span class="text-2xl mb-2 group-hover:scale-110 transition-transform">📋</span>
              <span class="font-bold text-white text-sm">Procházet všechny</span>
              <span class="text-text-muted text-xs mt-1 text-center">Sekvenční průchod všech otázek za sebou</span>
            </button>
          </div>

          <div class="flex items-center justify-center gap-4 border-t border-white/5 pt-6">
            <a href="../index.html" class="text-sm text-text-muted hover:text-text-secondary transition flex items-center gap-2">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <line x1="19" y1="12" x2="5" y2="12"></line>
                <polyline points="12 19 5 12 12 5"></polyline>
              </svg>
              Zpět na předměty
            </a>
          </div>
        </div>
      </div>
    );
  }

  const currentQuestion = activeQuestions[currentIndex];
  const totalQuestions = activeQuestions.length;
  const progressPercent = ((currentIndex + (isAnswered ? 1 : 0)) / totalQuestions) * 100;
  
  const answeredCount = stats.correct + stats.incorrect;
  const accuracy = answeredCount > 0 ? Math.round((stats.correct / answeredCount) * 100) : 0;

  // --- RESULTS SCREEN ---
  if (isFinished) {
    return (
      <div class="container max-w-2xl mx-auto px-4 py-8 md:py-12 fade-in-up">
        <header class="mb-8 text-center">
          <div class="brand-badge mb-4">
            <span>🎉 Hotovo!</span>
          </div>
          <h1 class="text-3xl font-extrabold text-white mb-2 font-heading">Výsledky testu</h1>
          <p class="text-text-secondary text-sm">Úspěšně jsi dokončil(a) procvičování imunologie.</p>
        </header>

        <div class="glass-card p-6 md:p-8 text-center">
          {/* Circular Score display */}
          <div class="relative w-36 h-36 mx-auto mb-6 flex items-center justify-center rounded-full border-4 border-white/5 bg-white/[0.01]">
            <div class="absolute inset-0 rounded-full border-4 border-accent-blue border-t-transparent animate-pulse"></div>
            <div class="text-center">
              <span class="text-4xl font-extrabold text-white block">{accuracy}%</span>
              <span class="text-xs text-text-secondary uppercase tracking-widest font-semibold">úspěšnost</span>
            </div>
          </div>

          <h2 class="text-2xl font-bold mb-2 text-white font-heading">
            {accuracy >= 80 ? 'Skvělá práce!' : accuracy >= 50 ? 'Dobrá práce!' : 'Chce to ještě trénink'}
          </h2>
          <p class="text-text-secondary text-sm mb-8">
            Správně zodpovězeno <strong class="text-accent-green">{stats.correct}</strong> z <strong class="text-white">{totalQuestions}</strong> otázek.
          </p>

          <div class="grid grid-cols-2 gap-4 max-w-sm mx-auto mb-8">
            <div class="bg-white/[0.02] border border-white/5 rounded-2xl p-4">
              <span class="text-xs text-text-muted uppercase tracking-wider block mb-1">Správně</span>
              <span class="text-2xl font-bold text-accent-green">{stats.correct}</span>
            </div>
            <div class="bg-white/[0.02] border border-white/5 rounded-2xl p-4">
              <span class="text-xs text-text-muted uppercase tracking-wider block mb-1">Špatně</span>
              <span class="text-2xl font-bold text-red-400">{stats.incorrect}</span>
            </div>
          </div>

          <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={restart}
              class="px-8 py-3 bg-gradient-to-r from-accent-blue to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-black font-bold rounded-xl transition shadow-lg shadow-accent-blue/15 hover:scale-[1.02] w-full sm:w-auto"
            >
              Spustit znovu
            </button>
            <a 
              href="../index.html" 
              class="px-8 py-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold rounded-xl transition w-full sm:w-auto text-center"
            >
              Zpět na rozcestník
            </a>
          </div>
        </div>
      </div>
    );
  }

  // --- ACTIVE QUIZ SCREEN ---
  return (
    <div class="container max-w-3xl mx-auto px-4 py-6 md:py-8 fade-in-up">
      
      {/* Top Navigation */}
      <div class="flex items-center justify-between mb-6">
        <button 
          onClick={restart}
          class="text-sm text-text-secondary hover:text-white transition flex items-center gap-2"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
          Ukončit test
        </button>
        
        <span class="text-xs font-semibold px-3 py-1.5 stat-badge text-text-secondary">
          Režim: {mode === 'random' ? 'Náhodných 20' : 'Sekvenční'}
        </span>
      </div>

      {/* Progress & Stats Dashboard */}
      <div class="mb-6 bg-white/[0.01] border border-white/5 rounded-2xl p-4">
        {/* Progress Text */}
        <div class="flex items-center justify-between text-sm mb-2.5">
          <span class="text-text-secondary font-medium">
            Otázka <strong class="text-white">{currentIndex + 1}</strong> z <strong class="text-white">{totalQuestions}</strong>
          </span>
          <div class="flex gap-4">
            <span class="text-accent-green font-medium">Správně: {stats.correct}</span>
            <span class="text-red-400 font-medium">Špatně: {stats.incorrect}</span>
          </div>
        </div>

        {/* Progress Bar Wrapper */}
        <div class="h-2.5 bg-white/5 rounded-full overflow-hidden mb-2">
          <div 
            class="progress-fill h-full" 
            style={{ width: `${progressPercent}%` }}
          ></div>
        </div>

        {/* Accuracy Info */}
        <div class="flex justify-between items-center text-xs text-text-muted">
          <span>Průběh: {Math.round(progressPercent)}%</span>
          <span>Úspěšnost: <strong class="text-white">{accuracy}%</strong></span>
        </div>
      </div>

      {/* Quiz Card */}
      <div class="glass-card p-6 md:p-8">
        
        {/* Question Text */}
        <div class="mb-6">
          <span class="text-xs font-bold text-accent-blue uppercase tracking-widest block mb-2 font-heading">otázka</span>
          <h3 class="text-lg md:text-xl font-bold text-white leading-relaxed font-heading">
            {currentQuestion?.question}
          </h3>
        </div>

        {/* Options */}
        <div class="space-y-3 mb-8">
          {currentQuestion?.options.map((option, idx) => {
            // Determine styling classes for option
            let optionClass = 'option-btn w-full p-4 text-sm md:text-base font-medium flex items-start gap-3 ';
            
            if (isAnswered) {
              if (idx === currentQuestion.correct) {
                optionClass += 'correct ';
              } else if (idx === selectedOption) {
                optionClass += 'incorrect ';
              } else {
                optionClass += 'disabled ';
              }
            }

            return (
              <button
                key={idx}
                disabled={isAnswered}
                onClick={() => handleAnswerSelect(idx)}
                class={optionClass}
              >
                {/* Circular prefix badge */}
                <span class={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                  isAnswered
                    ? idx === currentQuestion.correct
                      ? 'bg-accent-green text-black'
                      : idx === selectedOption
                        ? 'bg-red-500 text-white'
                        : 'bg-white/5 text-text-muted border border-white/5'
                    : 'bg-white/5 text-text-secondary border border-white/10 group-hover:border-accent-blue/30'
                }`}>
                  {String.fromCharCode(65 + idx)}
                </span>
                
                <span class="text-left select-none leading-relaxed text-text-primary">
                  {option}
                </span>
              </button>
            );
          })}
        </div>

        {/* Feedback Area / Explanation */}
        {isAnswered && (
          <div class="mt-6 border-t border-white/5 pt-6 animate-fadeIn">
            {/* Header correctness status */}
            <div class="flex items-center gap-2 mb-3">
              <span class={`text-xl ${selectedOption === currentQuestion.correct ? 'text-accent-green' : 'text-red-400'}`}>
                {selectedOption === currentQuestion.correct ? '✓ Správná odpověď' : '✗ Nesprávná odpověď'}
              </span>
            </div>

            {/* Explanation card */}
            <div class="bg-white/[0.01] border border-white/5 rounded-2xl p-4 md:p-5 mb-6 text-sm text-text-secondary leading-relaxed">
              <strong class="text-white block mb-1.5 font-heading">Vysvětlení:</strong>
              {currentQuestion?.explanation}
            </div>

            {/* Next Button */}
            <div class="flex justify-end">
              <button
                onClick={nextQuestion}
                class="px-6 py-3 bg-white text-black hover:bg-slate-200 font-bold rounded-xl transition flex items-center gap-2 shadow-lg"
              >
                {currentIndex < totalQuestions - 1 ? 'Další otázka' : 'Zobrazit výsledky'}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// Render the application
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
