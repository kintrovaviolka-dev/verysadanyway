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
    const handleGradeSelect = () => {
      if (card.classList.contains("locked")) {
        alert("Tento ročník se připravuje. Nyní jsou k dispozici portály pro 3. a 4. ročník.");
        return;
      }
      const grade = parseInt(card.getAttribute("data-grade"));
      selectGrade(grade);
    };

    card.addEventListener("click", handleGradeSelect);
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        handleGradeSelect();
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
    
    // Aktualizovat kontext chatbota podle zvoleného předmětu
    if (typeof updateChatbotContext === "function") {
      updateChatbotContext(subject);
    }
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
    
    // Resetovat kontext chatbota na obecný
    if (typeof updateChatbotContext === "function") {
      updateChatbotContext(null);
    }
    
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

  // ==========================================
  // --- LOGIKA GEMINI CHATBOTA ---
  // ==========================================
  const chatbotContainer = document.getElementById("gemini-chatbot-container");
  const chatbotFab = document.getElementById("chatbot-fab");
  const chatbotPanel = document.getElementById("chatbot-panel");
  const chatbotMessages = document.getElementById("chatbot-messages");
  const chatbotInput = document.getElementById("chatbot-input");
  const chatbotInputForm = document.getElementById("chatbot-input-form");
  const chatbotTypingIndicator = document.getElementById("chatbot-typing-indicator");
  const chatbotSubjectContext = document.getElementById("chatbot-subject-context");
  const chatbotSettingsBtn = document.getElementById("chatbot-settings-btn");
  const chatbotSettingsOverlay = document.getElementById("chatbot-settings-overlay");
  const chatbotApiKeyInput = document.getElementById("chatbot-api-key-input");
  const chatbotSaveKeyBtn = document.getElementById("chatbot-save-key-btn");
  const chatbotClearKeyBtn = document.getElementById("chatbot-clear-key-btn");
  const chatbotSettingsCloseBtn = document.getElementById("chatbot-settings-close-btn");
  const chatbotSuggestions = document.getElementById("chatbot-suggestions");
  const chatbotBadge = document.getElementById("chatbot-badge");
  const statusDot = chatbotContainer.querySelector(".avatar-status-dot");

  let chatHistory = [
    { role: "assistant", text: "Ahoj! Jsem tvůj medicínský asistent. Vyber si nahoře předmět (Patofyziologii, Patologii, atd.) a já se automaticky přizpůsobím, abych ti pomohl s konkrétní látkou. S čím dnes začneme?" }
  ];

  // System instructions map
  const systemInstructions = {
    general: "Jste zkušený lékařský asistent a mentor pro studenty lékařské fakulty. Pomáháte jim se studiem lékařských oborů. Odpovídejte věcně, stručně, odborně správně, česky a srozumitelně. Používejte přehledný markdown (např. odrážky, tučné písmo pro klíčové termíny, případně záhlaví).",
    patfyz: "Jste odborník na patofyziologii. Pomáháte studentům lékařství porozumět funkčním změnám v organismu při nemoci, mechanismům patogeneze, kompenzačním reakcím a klinickým souvislostem. Odpovídejte věcně, stručně a odborně česky. Používejte markdown pro přehlednost.",
    patola: "Jste odborník na patologii (morfologickou patologii). Pomáháte studentům lékařství s makroskopickým a mikroskopickým popisem tkání, nekropsii, biopsii, klasifikací nádorů a patologickou anatomií. Odpovídejte věcně, stručně a odborně česky. Používejte markdown pro přehlednost.",
    farmakologie: "Jste odborník na farmakologii. Pomáháte studentům lékařství s mechanismy účinku léčiv, farmakokinetikou, nežádoucími účinky, indikacemi a interakcemi. Odpovídejte věcně, stručně a odborně česky. Používejte markdown pro přehlednost.",
    dermatologie: "Jste odborník na dermatovenerologii. Pomáháte studentům lékařství s chorobami kůže a pohlavními chorobami, diagnostikou, eflorescencemi a léčbou. Odpovídejte věcně, stručně a odborně česky. Používejte markdown pro přehlednost.",
    oset: "Jste odborník na ošetřovatelství a ošetřovatelskou péči. Pomáháte studentům lékařství a ošetřovatelství s ošetřovatelskými postupy, diagnózami a péčí o pacienta. Odpovídejte věcně, stručně a odborně česky. Používejte markdown pro přehlednost."
  };

  // Load key from localStorage
  const getSavedKey = () => localStorage.getItem("gemini_chat_local_key") || "";
  chatbotApiKeyInput.value = getSavedKey();

  // Rate limiting (client-side)
  let lastMessageTime = 0;
  const CLIENT_MIN_INTERVAL = 3000; // 3 seconds between messages

  // Open/Close Chat
  chatbotFab.addEventListener("click", () => {
    const isOpen = chatbotPanel.classList.toggle("open");
    chatbotFab.classList.toggle("open");
    if (isOpen) {
      chatbotBadge.style.display = "none";
      chatbotInput.focus();
      scrollToBottom();
    }
  });

  document.getElementById("chatbot-close-btn").addEventListener("click", () => {
    chatbotPanel.classList.remove("open");
    chatbotFab.classList.remove("open");
  });

  // Settings Panel Toggle
  chatbotSettingsBtn.addEventListener("click", () => {
    chatbotSettingsOverlay.classList.add("open");
  });

  chatbotSettingsCloseBtn.addEventListener("click", () => {
    chatbotSettingsOverlay.classList.remove("open");
  });

  // Save/Clear key locally
  chatbotSaveKeyBtn.addEventListener("click", () => {
    const key = chatbotApiKeyInput.value.trim();
    if (key) {
      localStorage.setItem("gemini_chat_local_key", key);
      alert("API klíč byl uložen do vašeho prohlížeče.");
      chatbotSettingsOverlay.classList.remove("open");
    } else {
      alert("Prosím zadejte platný klíč.");
    }
  });

  chatbotClearKeyBtn.addEventListener("click", () => {
    localStorage.removeItem("gemini_chat_local_key");
    chatbotApiKeyInput.value = "";
    alert("API klíč byl vymazán. Nyní se dotazy posílají přes proxy server.");
  });

  // Simple Markdown Parser for UI Bubble rendering
  const parseMarkdown = (text) => {
    let html = text
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");

    // Bold (**text**)
    html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    
    // Code blocks (```code```)
    html = html.replace(/```([\s\S]*?)```/g, '<pre><code>$1</code></pre>');
    
    // Inline code (`code`)
    html = html.replace(/`(.*?)`/g, '<code>$1</code>');
    
    // Bullet lists
    const lines = html.split('\n');
    let inList = false;
    const processedLines = lines.map(line => {
      const trimmed = line.trim();
      if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
        const content = trimmed.substring(2);
        if (!inList) {
          inList = true;
          return '<ul><li>' + content + '</li>';
        }
        return '<li>' + content + '</li>';
      } else {
        if (inList) {
          inList = false;
          return '</ul><p>' + line + '</p>';
        }
        return trimmed ? '<p>' + line + '</p>' : '';
      }
    });
    
    html = processedLines.join('');
    if (inList) {
      html += '</ul>';
    }
    
    return html;
  };

  const scrollToBottom = () => {
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
  };

  // Add Message to DOM and History
  const addMessage = (role, text) => {
    chatHistory.push({ role, text });
    
    // Keep context window compact (last 15 messages)
    if (chatHistory.length > 15) {
      chatHistory.shift();
    }

    const messageDiv = document.createElement("div");
    messageDiv.className = `message ${role}`;
    
    const contentDiv = document.createElement("div");
    contentDiv.className = "message-content";
    contentDiv.innerHTML = role === "assistant" ? parseMarkdown(text) : text;
    
    messageDiv.appendChild(contentDiv);
    chatbotMessages.appendChild(messageDiv);
    scrollToBottom();

    // Show pulse badge on FAB if closed
    if (!chatbotPanel.classList.contains("open") && role === "assistant") {
      chatbotBadge.style.display = "block";
    }
  };

  // Load client token from /api/config for verification handshake
  let clientToken = "";
  const loadClientToken = async () => {
    try {
      const res = await fetch("/api/config");
      if (res.ok) {
        const data = await res.json();
        clientToken = data.clientToken;
      }
    } catch (e) {
      console.error("Failed to load client token", e);
    }
  };
  loadClientToken();

  // Send request via backend proxy with streaming
  const callProxyServerStream = async (messages, subject, onChunk, onStart) => {
    const response = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${clientToken}`
      },
      body: JSON.stringify({ messages, subject })
    });

    if (!response.ok) {
      const errData = await response.json().catch(() => ({}));
      throw new Error(errData.error || `Server vrátil chybu ${response.status}.`);
    }

    onStart();

    const reader = response.body.getReader();
    const decoder = new TextDecoder();
    let buffer = "";

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      buffer += decoder.decode(value, { stream: true });
      const lines = buffer.split("\n");
      buffer = lines.pop(); // Keep partial line

      for (const line of lines) {
        const trimmed = line.trim();
        if (!trimmed.startsWith("data: ")) continue;
        const jsonStr = trimmed.substring(6);
        try {
          const parsed = JSON.parse(jsonStr);
          if (parsed.text) {
            onChunk(parsed.text);
          }
        } catch (e) {
          // Ignore partial chunk parsing errors
        }
      }
    }

    // Process remaining buffer
    if (buffer.length > 0) {
      const trimmed = buffer.trim();
      if (trimmed.startsWith("data: ")) {
        try {
          const parsed = JSON.parse(trimmed.substring(6));
          if (parsed.text) {
            onChunk(parsed.text);
          }
        } catch (e) {}
      }
    }
  };

  // Send request directly to Gemini API with streaming
  const callGeminiDirectlyStream = async (key, messages, subject, onChunk, onStart) => {
    const systemInstructionText = systemInstructions[subject] || systemInstructions.general;
    
    // Format messages for the Gemini API, stitching consecutive same-role messages
    const contents = [];
    for (const msg of messages) {
      const role = msg.role === "assistant" || msg.role === "model" ? "model" : "user";
      if (contents.length > 0 && contents[contents.length - 1].role === role) {
        contents[contents.length - 1].parts.push({ text: msg.text });
      } else {
        contents.push({
          role,
          parts: [{ text: msg.text }]
        });
      }
    }
    if (contents.length > 0 && contents[0].role !== "user") {
      contents.shift();
    }
    if (contents.length === 0) {
      throw new Error("Žádné platné zprávy k odeslání.");
    }

    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:streamGenerateContent?alt=sse&key=${key}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        contents,
        systemInstruction: {
          parts: [{ text: systemInstructionText }]
        },
        generationConfig: {
          temperature: 0.7,
          maxOutputTokens: 1500
        },
        safetySettings: [
          {
            category: "HARM_CATEGORY_HARASSMENT",
            threshold: "BLOCK_NONE"
          },
          {
            category: "HARM_CATEGORY_HATE_SPEECH",
            threshold: "BLOCK_NONE"
          },
          {
            category: "HARM_CATEGORY_SEXUALLY_EXPLICIT",
            threshold: "BLOCK_NONE"
          },
          {
            category: "HARM_CATEGORY_DANGEROUS_CONTENT",
            threshold: "BLOCK_NONE"
          }
        ]
      })
    });

    if (!response.ok) {
      const errData = await response.json().catch(() => ({}));
      throw new Error(errData.error?.message || `Gemini API vrátilo chybu ${response.status}.`);
    }

    onStart();

    const reader = response.body.getReader();
    const decoder = new TextDecoder();
    let buffer = "";

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      buffer += decoder.decode(value, { stream: true });
      const lines = buffer.split("\n");
      buffer = lines.pop(); // Keep partial line

      for (const line of lines) {
        const trimmed = line.trim();
        if (!trimmed.startsWith("data: ")) continue;
        const jsonStr = trimmed.substring(6);
        try {
          const parsed = JSON.parse(jsonStr);
          const text = parsed.candidates?.[0]?.content?.parts?.[0]?.text;
          if (text) {
            onChunk(text);
          }
        } catch (e) {
          // Ignore partial chunk parsing errors
        }
      }
    }

    // Process remaining buffer
    if (buffer.length > 0) {
      const trimmed = buffer.trim();
      if (trimmed.startsWith("data: ")) {
        try {
          const parsed = JSON.parse(trimmed.substring(6));
          const text = parsed.candidates?.[0]?.content?.parts?.[0]?.text;
          if (text) {
            onChunk(text);
          }
        } catch (e) {}
      }
    }
  };

  // Helper to create an assistant message bubble for streaming
  const createAssistantMessageBubble = () => {
    const messageDiv = document.createElement("div");
    messageDiv.className = "message assistant";
    
    const contentDiv = document.createElement("div");
    contentDiv.className = "message-content";
    contentDiv.innerHTML = "";
    
    messageDiv.appendChild(contentDiv);
    chatbotMessages.appendChild(messageDiv);
    scrollToBottom();
    
    return contentDiv;
  };

  // Submit Handler
  chatbotInputForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    
    // Client-side spam protection
    const now = Date.now();
    if (now - lastMessageTime < CLIENT_MIN_INTERVAL) {
      const errorDiv = document.createElement("div");
      errorDiv.className = "message system";
      errorDiv.innerHTML = '<div class="message-content">Příliš rychlé dotazy. Zkuste to za chvíli.</div>';
      chatbotMessages.appendChild(errorDiv);
      scrollToBottom();
      return;
    }

    const query = chatbotInput.value.trim();
    if (!query) return;

    addMessage("user", query);
    chatbotInput.value = "";
    chatbotInput.disabled = true;
    chatbotInputForm.querySelector("button").disabled = true;
    
    chatbotTypingIndicator.classList.add("active");
    statusDot.className = "avatar-status-dot typing";
    scrollToBottom();

    lastMessageTime = Date.now();

    let contentDiv = null;
    try {
      const savedKey = getSavedKey();
      let responseText = "";
      
      const onStart = () => {
        chatbotTypingIndicator.classList.remove("active");
        statusDot.className = "avatar-status-dot online";
        contentDiv = createAssistantMessageBubble();
      };
      
      const onChunk = (text) => {
        responseText += text;
        if (contentDiv) {
          contentDiv.innerHTML = parseMarkdown(responseText);
          scrollToBottom();
        }
      };

      if (savedKey) {
        await callGeminiDirectlyStream(savedKey, chatHistory, state.selectedSubject || "general", onChunk, onStart);
      } else {
        await callProxyServerStream(chatHistory, state.selectedSubject || "general", onChunk, onStart);
      }

      // Add the final response to chat history
      chatHistory.push({ role: "assistant", text: responseText });
      if (chatHistory.length > 15) {
        chatHistory.shift();
      }

      // Show pulse badge on FAB if closed
      if (!chatbotPanel.classList.contains("open")) {
        chatbotBadge.style.display = "block";
      }
    } catch (err) {
      console.error(err);
      chatbotTypingIndicator.classList.remove("active");
      statusDot.className = "avatar-status-dot online";
      
      // Clean up chatHistory by popping the failed user query
      if (chatHistory.length > 0 && chatHistory[chatHistory.length - 1].role === "user") {
        chatHistory.pop();
      }

      const errorDiv = document.createElement("div");
      errorDiv.className = "message system";
      errorDiv.innerHTML = `<div class="message-content">Chyba: ${err.message}</div>`;
      chatbotMessages.appendChild(errorDiv);
      scrollToBottom();
    } finally {
      chatbotInput.disabled = false;
      chatbotInputForm.querySelector("button").disabled = false;
      chatbotInput.focus();
    }
  });

  // Dynamic Suggestion Chips and Theme Accent adaptation
  const updateChatbotContext = (subject) => {
    // Remove old classes
    chatbotContainer.classList.remove(
      "context-patfyz",
      "context-patola",
      "context-oset",
      "context-farmakologie",
      "context-dermatologie"
    );
    
    let contextLabel = "Obecný medicínský rádce 🤖";
    let suggestions = [];

    if (subject === "patfyz") {
      chatbotContainer.classList.add("context-patfyz");
      contextLabel = "Asistent pro Patofyziologii ⚡";
      suggestions = [
        { label: "Vznik edémů", query: "Vysvětli patofyziologické mechanismy vzniku edémů u srdečního selhání." },
        { label: "Hypoxie vs Hypoxémie", query: "Jaký je rozdíl mezi hypoxií a hypoxémií a jaké jsou hlavní příčiny?" }
      ];
    } else if (subject === "patola") {
      chatbotContainer.classList.add("context-patola");
      contextLabel = "Asistent pro Patologii 🔬";
      suggestions = [
        { label: "Typy nekróz", query: "Vyjmenuj a popiš základní typy nekróz a uveď příklady." },
        { label: "Staging vs Grading", query: "Jaký je rozdíl mezi gradingem a stagingem u nádorů?" }
      ];
    } else if (subject === "oset") {
      chatbotContainer.classList.add("context-oset");
      contextLabel = "Asistent pro Ošetřovatelství 🩺";
      suggestions = [
        { label: "Prevence dekubitů", query: "Jaké jsou ošetřovatelské postupy pro prevenci dekubitů u ležících pacientů?" },
        { label: "Ošetřovatelský proces", query: "Popiš fáze ošetřovatelského procesu." }
      ];
    } else if (subject === "farmakologie") {
      chatbotContainer.classList.add("context-farmakologie");
      contextLabel = "Asistent pro Farmakologii 💊";
      suggestions = [
        { label: "First-pass efekt", query: "Vysvětli, co znamená first-pass efekt léčiva." },
        { label: "Beta-blokátory", query: "Jaký je mechanismus účinku a hlavní nežádoucí účinky beta-blokátorů?" }
      ];
    } else if (subject === "dermatologie") {
      chatbotContainer.classList.add("context-dermatologie");
      contextLabel = "Asistent pro Dermatologii ☀️";
      suggestions = [
        { label: "ABCDE melanomu", query: "Vysvětli klinické pravidlo ABCDE pro hodnocení melanomu." },
        { label: "Primární eflorescence", query: "Co jsou to primární eflorescence a uveď příklady." }
      ];
    } else {
      // Default / General
      suggestions = [
        { label: "Apoptóza vs Nekróza", query: "Vysvětli rozdíl mezi nekrózou a apoptózou." },
        { label: "Známky zánětu", query: "Jaké jsou typické místní známky zánětu?" }
      ];
    }

    chatbotSubjectContext.textContent = contextLabel;

    // Render suggestion chips
    chatbotSuggestions.innerHTML = "";
    suggestions.forEach(s => {
      const chip = document.createElement("button");
      chip.type = "button";
      chip.className = "suggestion-chip";
      chip.textContent = s.label;
      chip.addEventListener("click", () => {
        chatbotInput.value = s.query;
        chatbotInputForm.dispatchEvent(new Event("submit"));
      });
      chatbotSuggestions.appendChild(chip);
    });
  };

  // Expose context updater globally so subject switches can invoke it
  window.updateChatbotContext = updateChatbotContext;

  // Initialize suggestions
  updateChatbotContext(state.selectedSubject);

  // Inicializace výchozího stavu
  selectGrade(3);
});
