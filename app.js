// app.js - Hlavní kód lékařského rozcestníku
document.addEventListener("DOMContentLoaded", () => {
  // --- LOCAL STORAGE STATE ---
  const getStoredStats = () => {
    const defaultStats = { xp: 0, level: 1, highestStreak: 0 };
    try {
      const stored = localStorage.getItem("patola_patfyz_dopamine_stats");
      return stored ? JSON.parse(stored) : defaultStats;
    } catch (e) {
      return defaultStats;
    }
  };

  const saveStats = (stats) => {
    try {
      localStorage.setItem("patola_patfyz_dopamine_stats", JSON.stringify(stats));
    } catch (e) {}
  };

  const dopamineStats = getStoredStats();

  // --- INICIALIZACE STAVU ---
  const state = {
    selectedGrade: 3, // Pouze 3. ročník je aktivní
    selectedSubject: null, // 'patfyz' nebo 'patola'
    quizSize: 10,
    quizQuestions: [],
    currentQuestionIndex: 0,
    correctAnswersCount: 0,
    isQuestionAnswered: false,
    quizStats: { correct: 0, total: 0 },
    xp: dopamineStats.xp,
    level: dopamineStats.level,
    highestStreak: dopamineStats.highestStreak,
    currentStreak: 0
  };

  // --- HTML ELEMENTY ---
  const gradesSection = document.getElementById("grades-section");
  const subjectsSection = document.getElementById("subjects-section");
  const hubSection = document.getElementById("hub-section");
  
  // Tlačítka a texty rozcestníku
  const hubTitle = document.getElementById("hub-title");
  const hubBackBtn = document.getElementById("hub-back-btn");
  const portalLinkBtn = document.getElementById("portal-link-btn");
  const quizTriggerBtn = document.getElementById("quiz-trigger-btn");
  const materialsTriggerBtn = document.getElementById("materials-trigger-btn");
  
  // Panely
  const materialsPanel = document.getElementById("materials-panel");
  const materialsPanelTitle = document.getElementById("materials-panel-title");
  const materialsCloseBtn = document.getElementById("materials-close-btn");
  
  const quizPanel = document.getElementById("quiz-panel");
  const quizPanelTitle = document.getElementById("quiz-panel-title");
  const quizCloseBtn = document.getElementById("quiz-close-btn");
  
  // Vyhledávání a seznam otázek
  const downloadsContainer = document.getElementById("downloads-container");
  const questionSearch = document.getElementById("question-search");
  const questionCategories = document.getElementById("question-categories");
  const questionsListContainer = document.getElementById("questions-list-container");
  
  // Beta aplikace
  const betaAppCard = document.getElementById("beta-app-card");
  const betaAppDesc = document.getElementById("beta-app-desc");
  const betaAppLinkBtn = document.getElementById("beta-app-link-btn");
  
  // Kvízové komponenty
  const quizSetup = document.getElementById("quiz-setup");
  const quizActiveArea = document.getElementById("quiz-active-area");
  const quizResults = document.getElementById("quiz-results");
  const startTestBtn = document.getElementById("start-test-btn");
  const restartQuizBtn = document.getElementById("restart-quiz-btn");
  const progressFill = document.getElementById("quiz-progress-fill");
  const questionNumberText = document.getElementById("quiz-question-number");
  const scoreIndicatorText = document.getElementById("quiz-score-indicator");
  const questionCard = document.getElementById("quiz-question-card");
  const resultsScore = document.getElementById("results-score");
  const resultsTitle = document.getElementById("results-title");
  const resultsText = document.getElementById("results-text");

  // --- LOGIKA VOLBY ROČNÍKU A PŘEDMĚTU ---

  // Výběr ročníku
  const selectGrade = (grade) => {
    state.selectedGrade = grade;
    
    // Update active class on grade cards
    document.querySelectorAll(".grade-card").forEach(card => {
      const cardGrade = parseInt(card.getAttribute("data-grade"));
      if (cardGrade === grade) {
        card.classList.add("active");
      } else {
        card.classList.remove("active");
      }
    });

    // Filter subject cards based on selected grade
    document.querySelectorAll(".subject-card").forEach(card => {
      const cardGrade = parseInt(card.getAttribute("data-grade"));
      if (cardGrade === grade) {
        card.style.display = "flex";
      } else {
        card.style.display = "none";
      }
    });
  };

  // Kliknutí na ročník
  document.querySelectorAll(".grade-card").forEach(card => {
    const handleGradeSelection = () => {
      if (card.classList.contains("locked")) {
        alert("Tento ročník se připravuje. Nyní jsou k dispozici portály pro 3. a 4. ročník.");
        return;
      }
      const grade = parseInt(card.getAttribute("data-grade"));
      selectGrade(grade);
    };

    card.addEventListener("click", handleGradeSelection);
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        handleGradeSelection();
      }
    });
  });

  // Výběr předmětu
  const selectSubject = (subject) => {
    state.selectedSubject = subject;
    
    const hubGridDefault = document.getElementById("hub-grid-default");
    const hubGridOset = document.getElementById("hub-grid-oset");
    const hubGridFarmakologie = document.getElementById("hub-grid-farmakologie");
    const hubGridDermatologie = document.getElementById("hub-grid-dermatologie");

    if (subject === "oset") {
      hubTitle.textContent = "Ošetřovatelství";
      hubTitle.style.color = "var(--oset-color)";
      if (hubGridDefault) hubGridDefault.style.display = "none";
      if (hubGridOset) hubGridOset.style.display = "grid";
      if (hubGridFarmakologie) hubGridFarmakologie.style.display = "none";
      if (hubGridDermatologie) hubGridDermatologie.style.display = "none";
    } else if (subject === "farmakologie") {
      hubTitle.textContent = "Farmakologie";
      hubTitle.style.color = "var(--farma-color)";
      if (hubGridDefault) hubGridDefault.style.display = "none";
      if (hubGridOset) hubGridOset.style.display = "none";
      if (hubGridFarmakologie) hubGridFarmakologie.style.display = "grid";
      if (hubGridDermatologie) hubGridDermatologie.style.display = "none";
    } else if (subject === "dermatologie") {
      hubTitle.textContent = "Dermatologie";
      hubTitle.style.color = "var(--derma-color)";
      if (hubGridDefault) hubGridDefault.style.display = "none";
      if (hubGridOset) hubGridOset.style.display = "none";
      if (hubGridFarmakologie) hubGridFarmakologie.style.display = "none";
      if (hubGridDermatologie) hubGridDermatologie.style.display = "grid";
    } else {
      if (hubGridDefault) hubGridDefault.style.display = "grid";
      if (hubGridOset) hubGridOset.style.display = "none";
      if (hubGridFarmakologie) hubGridFarmakologie.style.display = "none";
      if (hubGridDermatologie) hubGridDermatologie.style.display = "none";

      // Nastavení názvu a barev v rozcestníku
      if (subject === "patfyz") {
        hubTitle.textContent = "Patofyziologie";
        hubTitle.style.color = "var(--patfyz-color)";
        portalLinkBtn.href = "https://patfyz.vercel.app/";
        portalLinkBtn.className = "btn btn-primary btn-patfyz";
        
        // Nastavení odkazu na stažení PDF skript
        if (downloadsContainer) downloadsContainer.style.display = "block";
        
        // Update beta app card
        if (betaAppDesc && betaAppLinkBtn) {
          betaAppDesc.textContent = "Aktivní forma studia základů pro chvíle únavy. Obsahuje i interaktivní simulátory hemostázy (koagulace) a EKG.";
          betaAppLinkBtn.href = "https://ai.studio/apps/74714c95-1dc9-4fd2-afea-37fb70cdc32c";
          betaAppLinkBtn.className = "btn btn-primary btn-patfyz";
          betaAppLinkBtn.innerHTML = `
            Spustit Patfyz Beta
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
          `;
        }
      } else if (subject === "patola") {
        hubTitle.textContent = "Patologie";
        hubTitle.style.color = "var(--patola-color)";
        portalLinkBtn.href = "https://patolka.vercel.app/";
        portalLinkBtn.className = "btn btn-primary btn-patola";
        
        // Skrytí stažení PDF pro patologii (nemáme soubor)
        if (downloadsContainer) downloadsContainer.style.display = "none";
        
        // Update beta app card
        if (betaAppDesc && betaAppLinkBtn) {
          betaAppDesc.textContent = "Duolingo-like herní procvičování základů patologie. Skvělé opakování pro momenty, kdy je mozek už unavený.";
          betaAppLinkBtn.href = "https://pathology-master-521011567593.europe-west2.run.app/";
          betaAppLinkBtn.className = "btn btn-primary btn-patola";
          betaAppLinkBtn.innerHTML = `
            Spustit Patolka Beta
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
          `;
        }
      }
    }

    // Plynulé zobrazení rozcestníku
    subjectsSection.classList.remove("active");
    gradesSection.style.display = "none";
    hubSection.classList.add("active");
  };

  const addSubjectListener = (id, subject) => {
    const btn = document.getElementById(id);
    if (btn) {
      btn.addEventListener("click", () => selectSubject(subject));
      btn.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          selectSubject(subject);
        }
      });
    }
  };

  addSubjectListener("subject-patfyz", "patfyz");
  addSubjectListener("subject-patola", "patola");
  addSubjectListener("subject-oset", "oset");
  addSubjectListener("subject-farmakologie", "farmakologie");
  addSubjectListener("subject-dermatologie", "dermatologie");

  // Návrat na předměty
  hubBackBtn.addEventListener("click", () => {
    state.selectedSubject = null;
    hubSection.classList.remove("active");
    gradesSection.style.display = "block";
    subjectsSection.classList.add("active");
    
    // Skrýt otevřené panely
    materialsPanel.classList.remove("active");
    quizPanel.classList.remove("active");
  });

  // --- LOGIKA PANELU: OTÁZKY & MATERIÁLY ---

  let activeCategory = "all";

  materialsTriggerBtn.addEventListener("click", () => {
    materialsPanelTitle.textContent = state.selectedSubject === "patfyz" ? "Materiály & Otázky (Patfyz)" : "Materiály & Otázky (Patologie)";
    materialsPanel.classList.add("active");
    quizPanel.classList.remove("active");
    
    // Reset vyhledávání
    questionSearch.value = "";
    activeCategory = "all";
    
    renderCategories();
    renderQuestionsList();
    
    materialsPanel.scrollIntoView({ behavior: 'smooth' });
  });

  materialsCloseBtn.addEventListener("click", () => {
    materialsPanel.classList.remove("active");
  });

  // Vykreslení kategorií
  const renderCategories = () => {
    questionCategories.innerHTML = "";
    
    const categories = ["Všechny"];
    const accentClass = state.selectedSubject === "patfyz" ? "patfyz-accent" : "patola-accent";
    
    if (state.selectedSubject === "patfyz") {
      categories.push("Obecná patofyziologie", "Speciální I.", "Speciální II.", "Praktická témata");
    } else if (state.selectedSubject === "patola") {
      categories.push("Obecná patologie", "Speciální patologie");
    }

    categories.forEach(cat => {
      const tab = document.createElement("button");
      tab.className = `cat-tab ${activeCategory === cat || (cat === "Všechny" && activeCategory === "all") ? 'active ' + accentClass : ''}`;
      tab.textContent = cat;
      tab.addEventListener("click", () => {
        activeCategory = cat === "Všechny" ? "all" : cat;
        document.querySelectorAll(".cat-tab").forEach(t => t.classList.remove("active", "patfyz-accent", "patola-accent"));
        tab.classList.add("active", accentClass);
        renderQuestionsList();
      });
      questionCategories.appendChild(tab);
    });
  };

  // Vykreslení seznamu otázek
  const renderQuestionsList = () => {
    questionsListContainer.innerHTML = "";
    
    const searchVal = questionSearch.value.toLowerCase().trim();
    let questions = [];

    if (state.selectedSubject === "patfyz") {
      questions = window.PATFYZ_EXAM_QUESTIONS || [];
    } else if (state.selectedSubject === "patola") {
      const zapocet = window.PATHOLOGY_ZAPOCET_QUESTIONS || [];
      questions = zapocet.map(q => ({
        title: q.question,
        category: q.id <= 200 ? "Obecná patologie" : "Speciální patologie",
        keyTerms: []
      }));
    }

    // Filtrování
    const filtered = questions.filter(q => {
      // Filtr kategorie
      if (activeCategory !== "all" && !q.category.startsWith(activeCategory) && !q.category.includes(activeCategory)) {
        return false;
      }
      
      // Vyhledávací filtr
      if (searchVal) {
        const titleMatch = q.title.toLowerCase().includes(searchVal);
        const termsMatch = q.keyTerms ? q.keyTerms.some(t => t.toLowerCase().includes(searchVal)) : false;
        if (!titleMatch && !termsMatch) return false;
      }
      
      return true;
    });

    if (filtered.length === 0) {
      questionsListContainer.innerHTML = `<div style="text-align: center; color: var(--text-secondary); padding: 20px;">Nebyly nalezeny žádné otázky.</div>`;
      return;
    }

    filtered.forEach((q, idx) => {
      const item = document.createElement("div");
      item.className = "question-item";
      item.innerHTML = `
        <span class="question-num">${idx + 1}.</span>
        <span class="question-text">${q.title}</span>
      `;
      questionsListContainer.appendChild(item);
    });
  };

  questionSearch.addEventListener("input", renderQuestionsList);


  // --- LOGIKA PANELU: INTERAKTIVNÍ KVÍZ ---

  quizTriggerBtn.addEventListener("click", () => {
    quizPanelTitle.textContent = state.selectedSubject === "patfyz" ? "Procvičování (Patfyz)" : "Procvičování (Patologie)";
    quizPanel.classList.add("active");
    materialsPanel.classList.remove("active");
    
    // Přejít do úvodního stavu
    quizSetup.style.display = "block";
    quizActiveArea.classList.remove("active");
    quizResults.classList.remove("active");
    
    // Nastavení výchozí velikosti kvízu
    document.querySelectorAll(".quiz-size-btn").forEach(btn => {
      btn.classList.remove("active", "patfyz", "patola");
      if (btn.getAttribute("data-size") === "10") {
        btn.classList.add("active", state.selectedSubject);
      }
    });
    state.quizSize = 10;
    
    quizPanel.scrollIntoView({ behavior: 'smooth' });
  });

  quizCloseBtn.addEventListener("click", () => {
    quizPanel.classList.remove("active");
  });

  // Změna velikosti testu
  document.querySelectorAll(".quiz-size-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".quiz-size-btn").forEach(b => b.classList.remove("active", "patfyz", "patola"));
      btn.classList.add("active", state.selectedSubject);
      state.quizSize = parseInt(btn.getAttribute("data-size"));
    });
  });

  // Generování testu
  startTestBtn.addEventListener("click", () => {
    let sourcePool = [];
    if (state.selectedSubject === "patfyz") {
      sourcePool = window.PATFYZ_QUIZ || [];
    } else if (state.selectedSubject === "patola") {
      sourcePool = window.PATHOLOGY_ZAPOCET_QUESTIONS || [];
    }

    if (sourcePool.length === 0) {
      alert("Pro tento předmět nejsou v databázi připraveny žádné cvičné otázky.");
      return;
    }

    // Náhodný výběr otázek
    const shuffled = [...sourcePool].sort(() => Math.random() - 0.5);
    state.quizQuestions = shuffled.slice(0, Math.min(state.quizSize, shuffled.length));
    state.currentQuestionIndex = 0;
    state.correctAnswersCount = 0;
    
    // Spuštění testu
    quizSetup.style.display = "none";
    quizActiveArea.classList.add("active");
    
    // Nastavení barev pro progress bar
    progressFill.className = `quiz-progress-fill ${state.selectedSubject}`;
    
    loadQuizQuestion();
  });

  // Načtení konkrétní otázky kvízu
  const loadQuizQuestion = () => {
    state.isQuestionAnswered = false;
    const item = state.quizQuestions[state.currentQuestionIndex];
    
    // Aktualizace progress baru
    const progressPct = (state.currentQuestionIndex / state.quizQuestions.length) * 100;
    progressFill.style.width = `${progressPct}%`;
    
    // Popisky
    questionNumberText.textContent = `Otázka ${state.currentQuestionIndex + 1} z ${state.quizQuestions.length}`;
    
    const pctScore = state.currentQuestionIndex > 0 ? Math.round((state.correctAnswersCount / state.currentQuestionIndex) * 100) : 0;
    scoreIndicatorText.textContent = `Úspěšnost: ${pctScore} %`;

    updateDopamineIndicators();

    // Vykreslení těla otázky
    const optionsHTML = item.options.map((opt, idx) => {
      const letter = String.fromCharCode(65 + idx); // A, B, C, D
      return `
        <button class="quiz-option" data-idx="${idx}">
          <span class="quiz-option-letter">${letter}</span>
          <span class="quiz-option-text">${opt}</span>
        </button>
      `;
    }).join("");

    questionCard.innerHTML = `
      <div class="quiz-question">${item.question}</div>
      <div class="quiz-options">
        ${optionsHTML}
      </div>
      <div class="quiz-explanation-container" style="display: none;"></div>
      <div style="text-align: right; margin-top: 20px; display: none;" id="next-question-btn-wrapper">
        <button class="btn btn-secondary" id="next-question-btn">
          ${state.currentQuestionIndex + 1 === state.quizQuestions.length ? 'Vyhodnotit test' : 'Další otázka'}
        </button>
      </div>
    `;

    // Připojení event listenerů na volby
    const optionBtns = questionCard.querySelectorAll(".quiz-option");
    optionBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        if (state.isQuestionAnswered) return;
        state.isQuestionAnswered = true;
        
        const selectedIdx = parseInt(btn.getAttribute("data-idx"));
        const isCorrect = selectedIdx === item.correct;

        // Vypnutí voleb
        optionBtns.forEach(b => b.classList.add("disabled"));

        // Označení odpovědí
        if (isCorrect) {
          btn.classList.add("correct");
          state.correctAnswersCount++;
          triggerConfetti(btn);

          // Update Streaks
          state.currentStreak++;
          if (state.currentStreak > state.highestStreak) {
            state.highestStreak = state.currentStreak;
          }

          // Award XP
          state.xp += 10;
          const oldLevel = state.level;
          const newLevel = Math.floor(state.xp / 100) + 1;
          if (newLevel > oldLevel) {
            triggerLevelUp(newLevel);
          }

          // Save Stats
          dopamineStats.xp = state.xp;
          dopamineStats.level = state.level;
          dopamineStats.highestStreak = Math.max(dopamineStats.highestStreak, state.highestStreak);
          saveStats(dopamineStats);
        } else {
          btn.classList.add("incorrect");
          optionBtns[item.correct].classList.add("correct");

          // Reset Streaks
          state.currentStreak = 0;

          // Shake effect
          questionCard.classList.add("shake");
          setTimeout(() => questionCard.classList.remove("shake"), 500);
        }

        updateDopamineIndicators();

        // Zobrazení vysvětlení
        const explanationContainer = questionCard.querySelector(".quiz-explanation-container");
        const defaultExp = isCorrect ? "Správná medicínská úvaha!" : "Tato možnost není správná. Zkuste se zamyslet nad patofyziologickým mechanismem.";
        const expText = item.explanations ? item.explanations[selectedIdx] : defaultExp;
        
        explanationContainer.className = `quiz-explanation ${isCorrect ? 'correct' : 'incorrect'}`;
        explanationContainer.innerHTML = `
          <strong>${isCorrect ? 'Správně!' : 'Nesprávně.'}</strong> ${expText}
        `;
        explanationContainer.style.display = "block";
        
        // Zobrazení tlačítka další
        const nextWrapper = document.getElementById("next-question-btn-wrapper");
        nextWrapper.style.display = "block";
        
        // Event listener pro další otázku
        document.getElementById("next-question-btn").addEventListener("click", () => {
          state.currentQuestionIndex++;
          if (state.currentQuestionIndex < state.quizQuestions.length) {
            loadQuizQuestion();
          } else {
            showQuizResults();
          }
        });
      });
    });
  };

  // Zobrazení celkových výsledků
  const showQuizResults = () => {
    quizActiveArea.classList.remove("active");
    quizResults.classList.add("active");
    
    progressFill.style.width = "100%";
    
    const finalPct = Math.round((state.correctAnswersCount / state.quizQuestions.length) * 100);
    resultsScore.textContent = `${finalPct} %`;
    resultsScore.className = `results-score ${state.selectedSubject}`;
    
    resultsText.textContent = `Správně zodpovězeno ${state.correctAnswersCount} z ${state.quizQuestions.length} otázek.`;

    // Dopamine dashboard update
    const xpEarned = state.correctAnswersCount * 10;
    document.getElementById("results-highest-streak").textContent = state.highestStreak;
    document.getElementById("results-xp-earned").textContent = `+${xpEarned} XP`;
    document.getElementById("results-new-level").textContent = `Lvl ${state.level}`;

    if (finalPct === 100) {
      resultsTitle.textContent = "Excelentní výsledek!";
    } else if (finalPct >= 80) {
      resultsTitle.textContent = "Skvělá práce!";
    } else if (finalPct >= 50) {
      resultsTitle.textContent = "Úspěšně splněno!";
    } else {
      resultsTitle.textContent = "Chce to ještě trochu cviku.";
    }
  };

  // Restart kvízu
  restartQuizBtn.addEventListener("click", () => {
    quizResults.classList.remove("active");
    quizSetup.style.display = "block";
    state.currentStreak = 0;
  });

  // --- DOPAMINE ENGINE HELPERS ---
  const updateDopamineIndicators = () => {
    const xpCount = document.getElementById("quiz-xp-count");
    const levelCount = document.getElementById("quiz-level-count");
    const streakCount = document.getElementById("quiz-streak-count");
    const streakBadge = document.getElementById("quiz-streak-badge");

    if (xpCount) xpCount.textContent = state.xp;
    if (levelCount) levelCount.textContent = state.level;
    
    if (state.currentStreak > 0) {
      if (streakCount) streakCount.textContent = state.currentStreak;
      if (streakBadge) {
        streakBadge.style.display = "inline-flex";
        streakBadge.style.animation = 'none';
        streakBadge.offsetHeight; // trigger reflow
        streakBadge.style.animation = 'streakPulse 1.5s infinite alternate, bounceIn 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
      }
    } else {
      if (streakBadge) streakBadge.style.display = "none";
    }
  };

  const triggerLevelUp = (newLevel) => {
    state.level = newLevel;
    
    let backdrop = document.getElementById("dopamine-backdrop");
    if (!backdrop) {
      backdrop = document.createElement("div");
      backdrop.className = "overlay-backdrop";
      backdrop.id = "dopamine-backdrop";
      document.body.appendChild(backdrop);
    }
    
    let modal = document.getElementById("dopamine-level-up-modal");
    if (!modal) {
      modal = document.createElement("div");
      modal.className = "level-up-modal";
      modal.id = "dopamine-level-up-modal";
      document.body.appendChild(modal);
    }
    
    const levelsTitles = [
      "Mladý patolog",
      "Histologický učedník",
      "Hrobníkův pomocník",
      "Asistent pitevny",
      "Znalec nekropsie",
      "Buněčný detektiv",
      "Bariéra nepropustná pro chyby",
      "Diagnostický mág",
      "Profesor nekrobiologie",
      "Pán posmrtné tkáně"
    ];
    const title = levelsTitles[Math.min(newLevel - 1, levelsTitles.length - 1)];
    
    modal.innerHTML = `
      <div class="level-up-title">Úroveň Zvýšena!</div>
      <div class="level-up-badge">👑</div>
      <div style="font-size: 1.5rem; font-weight: 700; color: #fff; margin-bottom: 8px;">Level ${newLevel}</div>
      <div style="font-size: 0.85rem; color: #fbbf24; text-transform: uppercase; font-weight: 600; margin-bottom: 15px; letter-spacing: 1px;">"${title}"</div>
      <div class="level-up-text">Gratulujeme! Vaše patologické znalosti dosáhly nové úrovně. Pokračujte v procvičování!</div>
      <button class="btn level-up-close-btn" style="width: 100%;" id="level-up-close-btn">Pokračovat</button>
    `;
    
    backdrop.classList.add("active");
    modal.classList.add("active");
    
    for (let i = 0; i < 3; i++) {
      setTimeout(() => triggerLevelUpConfetti(), i * 300);
    }
    
    document.getElementById("level-up-close-btn").addEventListener("click", () => {
      backdrop.classList.remove("active");
      modal.classList.remove("active");
    });
  };

  const triggerLevelUpConfetti = () => {
    const xCenter = window.innerWidth / 2;
    const yCenter = window.innerHeight / 2;
    const colors = ['#fbbf24', '#a78bfa', '#3b82f6', '#2dd4bf', '#f87171'];
    
    for (let i = 0; i < 40; i++) {
      const particle = document.createElement('div');
      particle.className = 'confetti-particle';
      particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      
      const size = 6 + Math.random() * 10;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.borderRadius = Math.random() > 0.5 ? '50%' : '0%';
      
      particle.style.left = `${xCenter}px`;
      particle.style.top = `${yCenter}px`;
      
      const angle = Math.random() * Math.PI * 2;
      const distance = 80 + Math.random() * 150;
      const xDest = Math.cos(angle) * distance;
      const yDest = Math.sin(angle) * distance;
      const rotation = (Math.random() * 360) + 'deg';
      
      particle.style.setProperty('--x', `${xDest}px`);
      particle.style.setProperty('--y', `${yDest}px`);
      particle.style.setProperty('--r', rotation);
      
      document.body.appendChild(particle);
      setTimeout(() => particle.remove(), 1200);
    }
  };


  // --- POMOCNÝ EFEKT KONFET ---
  const triggerConfetti = (element) => {
    const rect = element.getBoundingClientRect();
    const xCenter = rect.left + rect.width / 2 + window.scrollX;
    const yCenter = rect.top + rect.height / 2 + window.scrollY;

    const colors = ['#2dd4bf', '#a78bfa', '#3b82f6', '#fbbf24', '#f87171'];
    for (let i = 0; i < 30; i++) {
      const particle = document.createElement('div');
      particle.className = 'confetti-particle';
      
      particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      
      const size = 5 + Math.random() * 8;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.borderRadius = Math.random() > 0.5 ? '50%' : '0%';
      
      particle.style.left = `${xCenter}px`;
      particle.style.top = `${yCenter}px`;
      
      const angle = Math.random() * Math.PI * 2;
      const distance = 30 + Math.random() * 70;
      const xDest = Math.cos(angle) * distance;
      const yDest = Math.sin(angle) * distance - 20; 
      const rotation = (Math.random() * 360) + 'deg';
      
      particle.style.setProperty('--x', `${xDest}px`);
      particle.style.setProperty('--y', `${yDest}px`);
      particle.style.setProperty('--r', rotation);
      
      particle.style.animationDelay = `${Math.random() * 0.1}s`;
      
      document.body.appendChild(particle);
      
      setTimeout(() => {
        particle.remove();
      }, 1200);
    }
  };

  // Inicializace výchozího stavu
  selectGrade(3);
});
