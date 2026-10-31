// app.js - Hlavní aplikační logika subportálu Neurologie LF OU
document.addEventListener("DOMContentLoaded", () => {
  if (typeof NEUROLOGY_DATA === "undefined") {
    console.error("NEUROLOGY_DATA is not loaded!");
    return;
  }

  // --- STAV APLIKACE ---
  const STORAGE_KEYS = {
    THEME: "neuro_theme_preference",
    EXPLORED: "neuro_explored_modules",
    SR: "neuro_spaced_repetition_cards",
    QUIZ: "neuro_quiz_progress"
  };

  // Načtení Spaced Repetition stavu z LocalStorage
  const getStoredSRState = () => {
    try {
      const stored = localStorage.getItem(STORAGE_KEYS.SR);
      return stored ? JSON.parse(stored) : {};
    } catch (e) {
      return {};
    }
  };

  const saveSRState = (srState) => {
    try {
      localStorage.setItem(STORAGE_KEYS.SR, JSON.stringify(srState));
    } catch (e) {}
  };

  // Načtení prozkoumaných modulů
  const getStoredExplored = () => {
    try {
      const stored = localStorage.getItem(STORAGE_KEYS.EXPLORED);
      return stored ? JSON.parse(stored) : [];
    } catch (e) {
      return [];
    }
  };

  const saveExplored = (exploredList) => {
    try {
      localStorage.setItem(STORAGE_KEYS.EXPLORED, JSON.stringify(exploredList));
    } catch (e) {}
  };

  // Načtení kvízových výsledků
  const getStoredQuiz = () => {
    try {
      const stored = localStorage.getItem(STORAGE_KEYS.QUIZ);
      return stored ? JSON.parse(stored) : { answered: {}, correctCount: 0, totalAnswered: 0 };
    } catch (e) {
      return { answered: {}, correctCount: 0, totalAnswered: 0 };
    }
  };

  const saveQuiz = (quizState) => {
    try {
      localStorage.setItem(STORAGE_KEYS.QUIZ, JSON.stringify(quizState));
    } catch (e) {}
  };

  // Shromáždění všech karet a kvízových otázek ze všech modulů
  const allCards = [];
  const allQuizQuestions = [];

  NEUROLOGY_DATA.modules.forEach(mod => {
    if (mod.cards) {
      mod.cards.forEach(c => {
        allCards.push({
          ...c,
          moduleId: mod.id,
          moduleNumber: mod.number,
          modulePrefix: mod.badgePrefix || `O${mod.number}`,
          moduleSection: mod.section || 'obecna',
          moduleTitle: mod.title
        });
      });
    }
    if (mod.quiz) {
      mod.quiz.forEach(q => {
        allQuizQuestions.push({
          ...q,
          moduleId: mod.id,
          moduleNumber: mod.number,
          modulePrefix: mod.badgePrefix || `O${mod.number}`,
          moduleSection: mod.section || 'obecna',
          moduleTitle: mod.title
        });
      });
    }
  });

  const state = {
    activeTab: "theory",
    activeSection: "all", // 'all' | 'obecna'
    activeCategory: "all",
    searchQuery: "",
    exploredModules: new Set(getStoredExplored()),
    srCards: getStoredSRState(), // id -> { box: 1..4, nextReview: timestamp, reps: 0 }
    quizProgress: getStoredQuiz(),
    
    // Spaced repetition runner
    flashcardList: [...allCards],
    currentCardIndex: 0,
    isCardFlipped: false,
    isHintShown: false,

    // Modál a coupling stav
    currentModalModuleId: null,
    currentModalTab: "study", // 'study' | 'recall' | 'flashcards' | 'quiz'
    currentModCardIdx: 0,
    isModCardFlipped: false,
    isModHintShown: false,
    modalCaseNotes: {} // id -> poznámka
  };

  // Inicializace neexistujících karet v SR stavu do Boxu 1
  allCards.forEach(card => {
    if (!state.srCards[card.id]) {
      state.srCards[card.id] = {
        box: 1,
        nextReview: Date.now(),
        reps: 0
      };
    }
  });
  saveSRState(state.srCards);

  // --- DOM ELEMENTY ---
  const getEl = (id) => document.getElementById(id);

  // Taby a zobrazení
  const tabButtons = document.querySelectorAll(".tab-btn");
  const tabViews = {
    theory: getEl("view-theory"),
    topical: getEl("view-topical"),
    calculators: getEl("view-calculators"),
    algorithms: getEl("view-algorithms"),
    atlas: getEl("view-atlas"),
    recall: getEl("view-recall"),
    flashcards: getEl("view-flashcards"),
    quiz: getEl("view-quiz"),
    cheatsheet: getEl("view-cheatsheet")
  };
  const tabTheoryLabel = getEl("tab-theory-label");
  const controlsBar = getEl("controls-bar");

  // Filtry & Hledání
  const searchInput = getEl("search-input");
  const categoryPillsContainer = getEl("category-pills");
  const sectionPills = document.querySelectorAll(".section-pill");

  // Kontejnery pro renderování
  const modulesGrid = getEl("modules-grid");
  const recallListContainer = getEl("recall-list-container");
  const quizContainer = getEl("quiz-container");
  const cheatsheetGrid = getEl("cheatsheet-grid");

  // Dashboard elementy
  const statExploredCount = getEl("stat-explored-count");
  const statTotalModules = getEl("stat-total-modules");
  const statExploredBar = getEl("stat-explored-bar");
  const statExploredPct = getEl("stat-explored-pct");

  const box1Count = getEl("box-1-count");
  const box2Count = getEl("box-2-count");
  const box3Count = getEl("box-3-count");
  const box4Count = getEl("box-4-count");
  const statTotalCards = getEl("stat-total-cards");

  const statDueCount = getEl("stat-due-count");
  const statDueDesc = getEl("stat-due-desc");
  const studyDueBtn = getEl("study-due-btn");
  const dueBtnCount = getEl("due-btn-count");

  const statQuizPct = getEl("stat-quiz-pct");
  const statQuizBar = getEl("stat-quiz-bar");
  const statQuizCorrect = getEl("stat-quiz-correct");
  const statQuizTotal = getEl("stat-quiz-total");

  // Modál
  const moduleModalOverlay = getEl("module-modal-overlay");
  const modalCloseBtn = getEl("modal-close-btn");
  const modalPrevBtn = getEl("modal-prev-btn");
  const modalNextBtn = getEl("modal-next-btn");
  const modalModuleBadge = getEl("modal-module-badge");
  const modalModuleTitle = getEl("modal-module-title");
  const modalModuleBody = getEl("modal-module-body");
  const modalTabs = getEl("modal-tabs");
  const modalRecallCount = getEl("modal-recall-count");
  const modalFcCount = getEl("modal-fc-count");
  const modalQuizCount = getEl("modal-quiz-count");

  // Flashcards komponenty
  const activeFlashcard = getEl("active-flashcard");
  const fcCategoryBadge = getEl("fc-category-badge");
  const fcTextContent = getEl("fc-text-content");
  const fcHintContent = getEl("fc-hint-content");
  const fcHintToggle = getEl("fc-hint-toggle");
  const fcHintBox = getEl("fc-hint-box");
  const fcFlipBtn = getEl("fc-flip-btn");
  const fcCurrentIdx = getEl("fc-current-idx");
  const fcTotalCount = getEl("fc-total-count");
  const fcActions = getEl("fc-actions");
  const startSrAllBtn = getEl("start-sr-all-btn");

  // Přepínač motivu
  const themeToggle = getEl("theme-toggle");

  // --- MOTIV (THEME TOGGLE) ---
  const applyStoredTheme = () => {
    const savedTheme = localStorage.getItem(STORAGE_KEYS.THEME);
    if (savedTheme === "light") {
      document.body.classList.add("light-theme");
    } else {
      document.body.classList.remove("light-theme");
    }
  };

  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light-theme");
    const isLight = document.body.classList.contains("light-theme");
    localStorage.setItem(STORAGE_KEYS.THEME, isLight ? "light" : "dark");
  });

  applyStoredTheme();

  // --- PŘEPÍNÁNÍ TABŮ ---
  const switchTab = (tabName) => {
    state.activeTab = tabName;

    tabButtons.forEach(btn => {
      const isSelected = btn.getAttribute("data-tab") === tabName;
      btn.classList.toggle("active", isSelected);
      btn.setAttribute("aria-selected", isSelected ? "true" : "false");
    });

    Object.keys(tabViews).forEach(key => {
      if (tabViews[key]) {
        tabViews[key].style.display = key === tabName ? "block" : "none";
      }
    });

    if (controlsBar) {
      controlsBar.style.display = (tabName === "theory" || tabName === "recall" || tabName === "cheatsheet") ? "block" : "none";
    }

    if (tabName === "flashcards") {
      initFlashcardDrill(false);
    } else if (tabName !== "topical" && tabName !== "calculators" && tabName !== "algorithms" && tabName !== "atlas") {
      renderCurrentView();
    }
  };

  tabButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const tab = btn.getAttribute("data-tab");
      switchTab(tab);
    });
  });

  // --- SEKCE PŘEPÍNAČ ---
  sectionPills.forEach(pill => {
    pill.addEventListener("click", () => {
      const sec = pill.getAttribute("data-section");
      state.activeSection = sec;
      sectionPills.forEach(p => {
        p.classList.remove("active");
        p.setAttribute("aria-checked", "false");
      });
      pill.classList.add("active");
      pill.setAttribute("aria-checked", "true");
      
      updateTabCounts();
      renderCurrentView();
    });
  });

  // --- KATEGORIE FILTR ---
  const renderCategoryPills = () => {
    categoryPillsContainer.innerHTML = "";
    NEUROLOGY_DATA.categories.forEach(cat => {
      const pill = document.createElement("button");
      pill.className = `cat-pill ${state.activeCategory === cat.id ? "active" : ""}`;
      pill.innerHTML = `<span>${cat.icon}</span> <span>${cat.label}</span>`;
      pill.addEventListener("click", () => {
        state.activeCategory = cat.id;
        document.querySelectorAll(".cat-pill").forEach(p => p.classList.remove("active"));
        pill.classList.add("active");
        renderCurrentView();
      });
      categoryPillsContainer.appendChild(pill);
    });
  };

  // --- VYHLEDÁVÁNÍ ---
  searchInput.addEventListener("input", (e) => {
    state.searchQuery = e.target.value.trim().toLowerCase();
    renderCurrentView();
  });

  // --- FILTROVÁNÍ MODULŮ ---
  const getFilteredModules = () => {
    return NEUROLOGY_DATA.modules.filter(mod => {
      const matchSection = state.activeSection === "all" || mod.section === state.activeSection;
      const matchCategory = state.activeCategory === "all" || mod.category === state.activeCategory;
      const matchSearch = !state.searchQuery || 
        mod.title.toLowerCase().includes(state.searchQuery) ||
        mod.shortDesc.toLowerCase().includes(state.searchQuery) ||
        (mod.badgePrefix && mod.badgePrefix.toLowerCase().includes(state.searchQuery)) ||
        `otázka ${mod.number}`.includes(state.searchQuery);
      return matchSection && matchCategory && matchSearch;
    });
  };

  const updateTabCounts = () => {
    if (tabTheoryLabel) {
      const count = getFilteredModules().length;
      tabTheoryLabel.textContent = `${count} Okruhů & Teorie`;
    }
  };

  // --- TAB 1: TEORIE & KARTY MODULŮ ---
  const renderTheoryGrid = () => {
    const filtered = getFilteredModules();
    updateTabCounts();
    modulesGrid.innerHTML = "";

    if (filtered.length === 0) {
      modulesGrid.innerHTML = `
        <div style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--text-muted);">
          <h3>Nebyly nalezeny žádné otázky</h3>
          <p>Zkuste upravit vyhledávání, zvolit jinou sekci nebo kategorii.</p>
        </div>
      `;
      return;
    }

    filtered.forEach(mod => {
      const isExplored = state.exploredModules.has(mod.id);
      const card = document.createElement("div");
      card.className = "module-card";
      card.setAttribute("tabindex", "0");
      card.setAttribute("role", "button");
      card.setAttribute("aria-label", `Otevřít otázku ${mod.badgePrefix || mod.number}: ${mod.title}`);

      card.innerHTML = `
        <div>
          <div class="module-card-header">
            <span class="module-number-badge">${mod.badgePrefix || ('Otázka ' + mod.number)}</span>
            <span class="module-badge">${mod.badge || mod.sectionLabel || "Neurologie"}</span>
          </div>
          <h3 class="module-card-title">${mod.title}</h3>
          <p class="module-card-desc">${mod.shortDesc}</p>
        </div>
        <div class="module-card-footer">
          <div class="module-stats-pills">
            <button type="button" class="mini-stat-pill pill-flashcards" title="Procvičit ${mod.cards ? mod.cards.length : 0} kartiček k tomuto tématu" data-mod-id="${mod.id}" data-open-tab="flashcards">⚡ ${mod.cards ? mod.cards.length : 0} karet</button>
            <button type="button" class="mini-stat-pill pill-quiz" title="Spustit kontrolní kvíz (${mod.quiz ? mod.quiz.length : 0} otázky)" data-mod-id="${mod.id}" data-open-tab="quiz">📝 ${mod.quiz ? mod.quiz.length : 0} kvíz</button>
            ${mod.recall && mod.recall.scenarios && mod.recall.scenarios.length > 0 ? `<button type="button" class="mini-stat-pill pill-recall" title="Otevřít klinickou kazuistiku (${mod.recall.scenarios.length})" data-mod-id="${mod.id}" data-open-tab="recall">🎯 Kazuistika</button>` : ''}
          </div>
          <span style="font-weight: 700; color: ${isExplored ? 'var(--accent-emerald)' : 'var(--primary-light)'};">
            ${isExplored ? '✓ Prostudováno' : 'Otevřít →'}
          </span>
        </div>
      `;

      card.querySelectorAll(".mini-stat-pill").forEach(pill => {
        pill.addEventListener("click", (e) => {
          e.stopPropagation();
          const targetTab = pill.getAttribute("data-open-tab") || "study";
          openModuleModal(mod.id, targetTab);
        });
      });

      const handleOpen = () => openModuleModal(mod.id, "study");
      card.addEventListener("click", handleOpen);
      card.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          handleOpen();
        }
      });

      modulesGrid.appendChild(card);
    });
  };

  // --- TAB 2: ACTIVE RECALL ---
  const renderRecallList = () => {
    const filtered = getFilteredModules();
    recallListContainer.innerHTML = "";

    let hasScenarios = false;
    filtered.forEach(mod => {
      if (mod.recall && mod.recall.scenarios && mod.recall.scenarios.length > 0) {
        hasScenarios = true;
        
        const header = document.createElement("h3");
        header.style.margin = "28px 0 12px 0";
        header.style.color = "var(--text-secondary)";
        header.style.fontFamily = "var(--font-heading)";
        header.innerHTML = `<span style="color: var(--primary-light); font-weight: 800;">${mod.badgePrefix || ('Otázka ' + mod.number)}:</span> ${mod.title}`;
        recallListContainer.appendChild(header);

        mod.recall.scenarios.forEach((sc, scIdx) => {
          const rCard = document.createElement("div");
          rCard.className = "recall-card";
          const noteKey = sc.id || (mod.id + '-sc-' + scIdx);
          rCard.innerHTML = `
            <div class="recall-question-title">🎯 ${sc.title}</div>
            <p style="font-size: 0.94rem; line-height: 1.55; color: var(--text-main);">${sc.question}</p>
            <div class="type-in-box" style="margin: 12px 0 10px 0;">
              <label class="type-in-label">✏️ Napište svou úvahu, syndromologickou rozvahu či postup před odhalením:</label>
              <textarea class="type-in-textarea" placeholder="Zde si napište svou klinickou rozvahu..." rows="2">${state.modalCaseNotes[noteKey] || ''}</textarea>
            </div>
            <div style="display: flex; gap: 8px; flex-wrap: wrap; margin-top: 10px;">
              <button class="btn btn-secondary reveal-answer-btn">
                <span>👁️ Zobrazit klinické řešení</span>
              </button>
              <button class="btn btn-secondary open-mod-theory-btn" style="border-color: rgba(6, 182, 212, 0.4); color: var(--primary-light);">
                <span>📖 Otevřít teorii otázky</span>
              </button>
            </div>
            <div class="recall-answer-box" style="display: none;">
              <strong style="color: var(--accent-emerald); display: block; margin-bottom: 4px;">Správné řešení & Postup:</strong>
              <p style="font-size: 0.9rem; line-height: 1.5; color: var(--text-main);">${sc.answer}</p>
              ${sc.pearl ? `<div class="clinical-pearl"><strong>💡 Klinická perla:</strong> ${sc.pearl}</div>` : ''}
            </div>
          `;

          const textareaEl = rCard.querySelector(".type-in-textarea");
          textareaEl.addEventListener("input", (e) => {
            state.modalCaseNotes[noteKey] = e.target.value;
          });

          const btn = rCard.querySelector(".reveal-answer-btn");
          const ans = rCard.querySelector(".recall-answer-box");
          btn.addEventListener("click", () => {
            const isShown = ans.style.display !== "none";
            ans.style.display = isShown ? "none" : "block";
            btn.innerHTML = isShown ? "<span>👁️ Zobrazit klinické řešení</span>" : "<span>🙈 Skrýt řešení</span>";
          });

          const theoryBtn = rCard.querySelector(".open-mod-theory-btn");
          theoryBtn.addEventListener("click", () => {
            openModuleModal(mod.id, "study");
          });

          recallListContainer.appendChild(rCard);
        });
      }
    });

    if (!hasScenarios) {
      recallListContainer.innerHTML = `<div style="text-align: center; padding: 40px; color: var(--text-muted);">Žádné kazuistiky neodpovídají zadanému filtru.</div>`;
    }
  };

  // --- TAB 3: FLASHCARD / LEITNER SYSTEM ---
  const initFlashcardDrill = (dueOnly = false) => {
    const now = Date.now();
    const filteredMods = getFilteredModules();
    const validModIds = new Set(filteredMods.map(m => m.id));

    if (dueOnly) {
      state.flashcardList = allCards.filter(c => {
        const sr = state.srCards[c.id];
        return sr && sr.nextReview <= now;
      });
      if (state.flashcardList.length === 0) {
        state.flashcardList = allCards.filter(c => validModIds.has(c.moduleId));
      }
    } else {
      state.flashcardList = allCards.filter(c => validModIds.has(c.moduleId));
      if (state.flashcardList.length === 0) {
        state.flashcardList = [...allCards];
      }
    }

    state.currentCardIndex = 0;
    state.isCardFlipped = false;
    renderActiveFlashcard();
  };

  const renderActiveFlashcard = () => {
    if (state.flashcardList.length === 0) {
      fcCategoryBadge.textContent = "Hotovo";
      fcTextContent.textContent = "Všechny karty jsou zopakované!";
      fcHintContent.textContent = "Skvělá práce. Můžete si spustit test nebo opakovat znovu.";
      if (fcHintToggle) fcHintToggle.style.display = "none";
      if (fcHintBox) fcHintBox.style.display = "none";
      if (fcFlipBtn) fcFlipBtn.style.display = "none";
      fcCurrentIdx.textContent = "0";
      fcTotalCount.textContent = "0";
      return;
    }

    const card = state.flashcardList[state.currentCardIndex];
    const sr = state.srCards[card.id] || { box: 1 };

    fcCategoryBadge.textContent = `${card.modulePrefix || ('Otázka ' + card.moduleNumber)} • Box ${sr.box} • ${state.isCardFlipped ? 'ODPOVĚĎ (BACK)' : 'OTÁZKA (FRONT)'}`;
    fcCurrentIdx.textContent = String(state.currentCardIndex + 1);
    fcTotalCount.textContent = String(state.flashcardList.length);

    if (state.isCardFlipped) {
      activeFlashcard.classList.add("flipped");
      fcTextContent.innerHTML = card.back;
      fcHintContent.textContent = "✓ Odpověď zobrazena. Níže ohodnoťte, jak dobře jste ji znali:";
      activeFlashcard.style.borderColor = "var(--primary-light)";
      if (fcFlipBtn) {
        fcFlipBtn.style.display = "inline-flex";
        fcFlipBtn.innerHTML = "<span>🔄 Otočit zpět na otázku</span>";
      }
      if (fcHintToggle) fcHintToggle.style.display = "none";
      if (fcHintBox) fcHintBox.style.display = "none";
    } else {
      activeFlashcard.classList.remove("flipped");
      fcTextContent.innerHTML = card.front;
      fcHintContent.textContent = "Klikněte pro otočení nebo stiskněte Mezerník";
      activeFlashcard.style.borderColor = "var(--border-color)";
      if (fcFlipBtn) {
        fcFlipBtn.style.display = "inline-flex";
        fcFlipBtn.innerHTML = "<span>🔄 Otočit kartičku / Zobrazit odpověď (Mezerník)</span>";
      }

      if (card.hint) {
        if (fcHintToggle) {
          fcHintToggle.style.display = "inline-flex";
          fcHintToggle.innerHTML = state.isHintShown ? "<span>🙈 Skrýt nápovědu</span>" : "<span>💡 Zobrazit nápovědu</span>";
        }
        if (fcHintBox) {
          fcHintBox.style.display = state.isHintShown ? "block" : "none";
          fcHintBox.innerHTML = `<strong>💡 Nápověda:</strong> ${card.hint}`;
        }
      } else {
        if (fcHintToggle) fcHintToggle.style.display = "none";
        if (fcHintBox) fcHintBox.style.display = "none";
      }
    }
  };

  const flipActiveFlashcard = () => {
    state.isCardFlipped = !state.isCardFlipped;
    renderActiveFlashcard();
  };

  activeFlashcard.addEventListener("click", (e) => {
    if (e.target.closest("#fc-hint-toggle") || e.target.closest("#fc-hint-box")) return;
    flipActiveFlashcard();
  });

  if (fcFlipBtn) {
    fcFlipBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      flipActiveFlashcard();
    });
  }

  if (fcHintToggle) {
    fcHintToggle.addEventListener("click", (e) => {
      e.stopPropagation();
      state.isHintShown = !state.isHintShown;
      renderActiveFlashcard();
    });
  }

  activeFlashcard.addEventListener("keydown", (e) => {
    if (e.key === " " || e.key === "Enter") {
      e.preventDefault();
      flipActiveFlashcard();
    }
  });

  const applyCardGrade = (cardId, gradeType) => {
    const sr = state.srCards[cardId] || { box: 1, reps: 0 };
    const now = Date.now();
    const DAY_MS = 24 * 60 * 60 * 1000;

    let nextIntervalDays = 1;
    if (gradeType === "again") {
      sr.box = 1;
      nextIntervalDays = 0.5; // Znovu za 12 hodin
    } else if (gradeType === "hard") {
      sr.box = Math.max(1, sr.box - 1);
      nextIntervalDays = 1; // Znovu za 1 den
    } else if (gradeType === "good") {
      sr.box = Math.min(4, sr.box + 1);
      nextIntervalDays = sr.box === 2 ? 2 : sr.box === 3 ? 5 : 10;
    } else if (gradeType === "easy") {
      sr.box = 4;
      nextIntervalDays = 14;
    }

    sr.nextReview = now + nextIntervalDays * DAY_MS;
    sr.reps = (sr.reps || 0) + 1;
    state.srCards[cardId] = sr;
    saveSRState(state.srCards);
    updateDashboardStats();
    return sr;
  };

  const gradeFlashcard = (gradeType) => {
    if (state.flashcardList.length === 0) return;
    const card = state.flashcardList[state.currentCardIndex];
    applyCardGrade(card.id, gradeType);

    // Další karta
    state.isCardFlipped = false;
    state.isHintShown = false;
    state.currentCardIndex = (state.currentCardIndex + 1) % state.flashcardList.length;
    renderActiveFlashcard();
  };

  fcActions.querySelectorAll(".grade-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const grade = btn.getAttribute("data-grade");
      gradeFlashcard(grade);
    });
  });

  // Klávesové zkratky pro flashcards (1-4 a mezerník)
  document.addEventListener("keydown", (e) => {
    if (state.activeTab !== "flashcards") return;
    if (document.activeElement.tagName === "INPUT") return;

    if (e.key === "1") gradeFlashcard("again");
    else if (e.key === "2") gradeFlashcard("hard");
    else if (e.key === "3") gradeFlashcard("good");
    else if (e.key === "4") gradeFlashcard("easy");
  });

  studyDueBtn.addEventListener("click", () => {
    switchTab("flashcards");
    initFlashcardDrill(true);
  });

  startSrAllBtn.addEventListener("click", () => {
    switchTab("flashcards");
    initFlashcardDrill(false);
  });

  // --- TAB 4: KVÍZ A TESTOVACÍ BANKA ---
  const renderQuiz = () => {
    const filtered = getFilteredModules();
    quizContainer.innerHTML = "";

    const filteredQuestions = allQuizQuestions.filter(q => {
      return filtered.some(m => m.id === q.moduleId);
    });

    if (filteredQuestions.length === 0) {
      quizContainer.innerHTML = `<div style="text-align: center; padding: 40px; color: var(--text-muted);">Žádné kvízové otázky neodpovídají zadanému filtru.</div>`;
      return;
    }

    filteredQuestions.forEach((q, idx) => {
      const savedAns = state.quizProgress.answered[q.id];
      const card = document.createElement("div");
      card.className = "quiz-card";

      const optionsHTML = q.options.map((opt, optIdx) => {
        let btnClass = "quiz-option-btn";
        if (savedAns !== undefined) {
          if (optIdx === q.correctIndex) btnClass += " correct";
          else if (optIdx === savedAns) btnClass += " incorrect";
        }
        return `
          <button class="${btnClass}" data-q-id="${q.id}" data-opt-idx="${optIdx}" ${savedAns !== undefined ? 'disabled' : ''}>
            <span style="font-weight: 700; width: 22px;">${String.fromCharCode(65 + optIdx)})</span>
            <span>${opt}</span>
          </button>
        `;
      }).join("");

      card.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
          <span class="module-number-badge">${q.modulePrefix || ('Otázka ' + q.moduleNumber)}</span>
          <span style="font-size: 0.8rem; color: var(--text-muted);">Testová otázka ${idx + 1} / ${filteredQuestions.length}</span>
        </div>
        <div class="quiz-question-text">${q.question}</div>
        <div class="quiz-options-list">${optionsHTML}</div>
        <div class="quiz-explanation-box ${savedAns !== undefined ? 'active' : ''}">
          <strong style="color: var(--primary-light);">Vysvětlení správné odpovědi:</strong>
          <p style="margin-top: 4px; color: var(--text-main);">${q.explanation}</p>
        </div>
      `;

      card.querySelectorAll(".quiz-option-btn").forEach(btn => {
        btn.addEventListener("click", () => {
          const selectedIdx = parseInt(btn.getAttribute("data-opt-idx"));
          handleQuizSelect(q, selectedIdx, card);
        });
      });

      quizContainer.appendChild(card);
    });
  };

  const handleQuizSelect = (qObj, selectedIdx, cardEl) => {
    if (state.quizProgress.answered[qObj.id] !== undefined) return;

    const isCorrect = selectedIdx === qObj.correctIndex;
    state.quizProgress.answered[qObj.id] = selectedIdx;
    state.quizProgress.totalAnswered += 1;
    if (isCorrect) {
      state.quizProgress.correctCount += 1;
    }
    saveQuiz(state.quizProgress);
    updateDashboardStats();

    // Aktualizace tlačítek a vysvětlení v UI
    const buttons = cardEl.querySelectorAll(".quiz-option-btn");
    buttons.forEach((btn, idx) => {
      btn.disabled = true;
      if (idx === qObj.correctIndex) {
        btn.classList.add("correct");
      } else if (idx === selectedIdx) {
        btn.classList.add("incorrect");
      }
    });

    const expl = cardEl.querySelector(".quiz-explanation-box");
    if (expl) expl.classList.add("active");
  };

  // --- TAB 5: RYCHLÝ TAHÁK (CHEAT SHEET) ---
  const renderCheatSheet = () => {
    const filtered = getFilteredModules();
    cheatsheetGrid.innerHTML = "";

    if (filtered.length === 0) {
      cheatsheetGrid.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--text-muted);">Žádná témata neodpovídají zadanému filtru.</div>`;
      return;
    }

    filtered.forEach(mod => {
      const card = document.createElement("div");
      card.className = "cheat-card";

      // Získat klíčové body z banneru a sekcí
      const keyBullets = [];
      if (mod.theory && mod.theory.banner) {
        keyBullets.push(`<strong>Podstata:</strong> ${mod.theory.banner.text}`);
      }
      if (mod.cards) {
        mod.cards.slice(0, 3).forEach(c => {
          keyBullets.push(`<strong>${c.front}:</strong> ${c.back}`);
        });
      }

      card.innerHTML = `
        <h4>${mod.badgePrefix || ('Otázka ' + mod.number)}: ${mod.title}</h4>
        <ul class="cheat-list">
          ${keyBullets.map(b => `<li>${b}</li>`).join("")}
        </ul>
        <button class="btn btn-secondary" style="width: 100%; margin-top: 14px; padding: 6px 12px; font-size: 0.8rem;" data-mod-id="${mod.id}">
          Otevřít plný rozbor →
        </button>
      `;

      card.querySelector("button").addEventListener("click", () => {
        openModuleModal(mod.id);
      });

      cheatsheetGrid.appendChild(card);
    });
  };

  // --- MODÁL S PLNÝM DETAIL OTÁZKY & COUPLINGEM S ACTIVE RECALL ---
  const openModuleModal = (moduleId, initialTab = "study") => {
    const mod = NEUROLOGY_DATA.modules.find(m => m.id === moduleId);
    if (!mod) return;

    if (state.currentModalModuleId !== moduleId) {
      state.currentModalModuleId = moduleId;
      state.currentModCardIdx = 0;
      state.isModCardFlipped = false;
      state.isModHintShown = false;
    }

    // Označit jako prozkoumané
    state.exploredModules.add(moduleId);
    saveExplored(Array.from(state.exploredModules));
    updateDashboardStats();
    renderTheoryGrid();

    modalModuleBadge.textContent = `${mod.badgePrefix || ('Otázka ' + mod.number)} • ${mod.sectionLabel || "Obecná neurologie"}`;
    modalModuleTitle.textContent = mod.title;

    if (modalRecallCount) modalRecallCount.textContent = mod.recall?.scenarios?.length || 0;
    if (modalFcCount) modalFcCount.textContent = mod.cards?.length || 0;
    if (modalQuizCount) modalQuizCount.textContent = mod.quiz?.length || 0;

    switchModalTab(initialTab);

    moduleModalOverlay.classList.add("active");
    document.body.style.overflow = "hidden";
    modalCloseBtn.focus();
  };

  const closeModuleModal = () => {
    moduleModalOverlay.classList.remove("active");
    document.body.style.overflow = "";
    state.currentModalModuleId = null;
    updateDashboardStats();
  };

  const switchModalTab = (tabName) => {
    state.currentModalTab = tabName;

    const btns = document.querySelectorAll(".modal-tab-btn");
    btns.forEach(btn => {
      const isSel = btn.getAttribute("data-modtab") === tabName;
      btn.classList.toggle("active", isSel);
      btn.setAttribute("aria-selected", isSel ? "true" : "false");
    });

    renderModalBodyContent();
    modalModuleBody.scrollTop = 0;
  };

  const navigateModal = (direction) => {
    if (!state.currentModalModuleId) return;
    const currentList = getFilteredModules();
    if (currentList.length === 0) return;

    const currIdx = currentList.findIndex(m => m.id === state.currentModalModuleId);
    let targetIdx = 0;
    if (currIdx !== -1) {
      targetIdx = (currIdx + direction + currentList.length) % currentList.length;
    }
    openModuleModal(currentList[targetIdx].id, state.currentModalTab);
  };

  const renderModalBodyContent = () => {
    if (!state.currentModalModuleId) return;
    const mod = NEUROLOGY_DATA.modules.find(m => m.id === state.currentModalModuleId);
    if (!mod) return;

    modalModuleBody.innerHTML = "";

    if (state.currentModalTab === "study") {
      let bodyHTML = "";

      // Teorie banner
      if (mod.theory && mod.theory.banner) {
        bodyHTML += `
          <div class="theory-banner">
            <div class="theory-banner-tag">${mod.theory.banner.tag || "Základní přehled"}</div>
            <div class="theory-banner-title">${mod.theory.banner.title}</div>
            <p style="font-size: 0.92rem; color: var(--text-main); line-height: 1.5;">${mod.theory.banner.text}</p>
          </div>
        `;
      }

      // Teorie sekce
      if (mod.theory && mod.theory.sections) {
        mod.theory.sections.forEach(sec => {
          bodyHTML += `
            <div class="theory-section">
              <h3>${sec.title}</h3>
              <div>${sec.content}</div>
            </div>
          `;
        });
      }

      // ACTIVE RECALL COUPLING SEKCE TĚSNĚ PO PŘEČTENÍ TEORIE
      const numCards = mod.cards ? mod.cards.length : 0;
      const numQuiz = mod.quiz ? mod.quiz.length : 0;
      const scenarios = mod.recall && mod.recall.scenarios ? mod.recall.scenarios : [];
      const primaryScenario = scenarios.length > 0 ? scenarios[0] : null;

      bodyHTML += `
        <div class="modal-coupling-section">
          <div class="coupling-badge">⚡ OKAMŽITÝ ACTIVE RECALL PO PŘEČTENÍ</div>
          <h3 class="coupling-title">Upevněte si otázku ${mod.badgePrefix || mod.number} do paměti</h3>
          <p class="coupling-subtitle">Otestujte své porozumění bezprostředně po studiu teorie. Můžete vyzkoušet kazuistiku s vypsáním odpovědi, otočit kartičky nebo vyplnit kontrolní kvíz.</p>

          <div class="coupling-action-row">
            ${primaryScenario ? `
              <button type="button" class="coupling-jump-btn" data-coupling-jump="recall">
                <span>🎯 Klinická kazuistika (${scenarios.length})</span>
              </button>
            ` : ''}
            ${numCards > 0 ? `
              <button type="button" class="coupling-jump-btn" data-coupling-jump="flashcards">
                <span>⚡ ${numCards} tématické kartičky</span>
              </button>
            ` : ''}
            ${numQuiz > 0 ? `
              <button type="button" class="coupling-jump-btn" data-coupling-jump="quiz">
                <span>📝 Kontrolní test (${numQuiz} otázky)</span>
              </button>
            ` : ''}
          </div>

          ${primaryScenario ? `
            <div class="coupling-case-box">
              <div class="coupling-case-tag">🎯 Klinický případ & Syndromologická rozvaha</div>
              <h4 class="coupling-case-title">${primaryScenario.title}</h4>
              <p class="coupling-case-q">${primaryScenario.question}</p>

              <div class="type-in-box">
                <label for="coupling-study-input" class="type-in-label">✏️ Vyzkoušejte si vypsat svou diagnostickou úvahu / syndrom před odhalením:</label>
                <textarea id="coupling-study-input" class="type-in-textarea" placeholder="Zde si stručně poznamenejte svou odpověď..." rows="2">${state.modalCaseNotes[mod.id] || ''}</textarea>
                <div class="type-in-actions">
                  <button type="button" class="btn btn-primary" id="coupling-study-reveal-btn">
                    <span>👁️ Zkontrolovat & Odhalit klinické řešení</span>
                  </button>
                </div>
              </div>

              <div class="coupling-solution-box" id="coupling-study-solution" style="display: none;">
                <strong style="color: var(--accent-emerald); display: block; margin-bottom: 4px;">Správné řešení & Klinický postup:</strong>
                <p style="font-size: 0.9rem; line-height: 1.5; color: var(--text-main);">${primaryScenario.answer}</p>
                ${primaryScenario.pearl ? `<div class="clinical-pearl"><strong>💡 Klinická perla:</strong> ${primaryScenario.pearl}</div>` : ''}
              </div>
            </div>
          ` : ''}

          <div class="modal-leitner-evaluation">
            <h4>Ohodnoťte svou znalost této otázky po prostudování:</h4>
            <div class="modal-leitner-btn-group">
              <button type="button" class="modal-leitner-btn l-btn-wrong" data-mod-grade="wrong" title="Ztěžka — zařadit karty do Boxu 1 a zopakovat dnes">
                <span class="btn-icon">❌</span>
                <span class="btn-text">Ztěžka</span>
                <span class="btn-sub">Box 1 (dnes)</span>
              </button>
              <button type="button" class="modal-leitner-btn l-btn-good" data-mod-grade="good" title="Slibné — posunout o box dopředu">
                <span class="btn-icon">⚠️</span>
                <span class="btn-text">Slibné</span>
                <span class="btn-sub">+1 Box</span>
              </button>
              <button type="button" class="modal-leitner-btn l-btn-perfect" data-mod-grade="perfect" title="Skvěle — otázka zvládnuta (Box 4)">
                <span class="btn-icon">✅</span>
                <span class="btn-text">Skvěle</span>
                <span class="btn-sub">Box 4 (Zvládnuto)</span>
              </button>
            </div>
            <div class="modal-leitner-feedback" id="modal-leitner-feedback" style="display: none;"></div>
          </div>
        </div>
      `;

      modalModuleBody.innerHTML = bodyHTML;

      // Listenery pro skoky mezi záložkami
      modalModuleBody.querySelectorAll("[data-coupling-jump]").forEach(btn => {
        btn.addEventListener("click", () => {
          const target = btn.getAttribute("data-coupling-jump");
          switchModalTab(target);
        });
      });

      // Ukládání psaného textu
      const studyInput = modalModuleBody.querySelector("#coupling-study-input");
      if (studyInput) {
        studyInput.addEventListener("input", (e) => {
          state.modalCaseNotes[mod.id] = e.target.value;
        });
      }

      // Odhalení řešení
      const revealBtn = modalModuleBody.querySelector("#coupling-study-reveal-btn");
      const solBox = modalModuleBody.querySelector("#coupling-study-solution");
      if (revealBtn && solBox) {
        revealBtn.addEventListener("click", () => {
          const isShown = solBox.style.display !== "none";
          solBox.style.display = isShown ? "none" : "block";
          revealBtn.innerHTML = isShown ? "<span>👁️ Zkontrolovat & Odhalit klinické řešení</span>" : "<span>🙈 Skrýt řešení</span>";
        });
      }

      // Leitner tlačítka v modálu
      modalModuleBody.querySelectorAll(".modal-leitner-btn").forEach(btn => {
        btn.addEventListener("click", () => {
          const grade = btn.getAttribute("data-mod-grade");
          gradeModuleFlashcards(mod, grade);
          highlightModalLeitnerBtn(grade);
        });
      });
    }

    else if (state.currentModalTab === "recall") {
      renderModalRecallTab(mod);
    }

    else if (state.currentModalTab === "flashcards") {
      renderModalFlashcardsTab(mod);
    }

    else if (state.currentModalTab === "quiz") {
      renderModalQuizTab(mod);
    }
  };

  const gradeModuleFlashcards = (mod, gradeType) => {
    if (!mod.cards || mod.cards.length === 0) return;

    mod.cards.forEach(card => {
      applyCardGrade(card.id, gradeType === "perfect" ? "easy" : gradeType);
    });

    const feedbackEl = modalModuleBody.querySelector("#modal-leitner-feedback");
    if (feedbackEl) {
      feedbackEl.style.display = "block";
      if (gradeType === "wrong") {
        feedbackEl.innerHTML = `⚠️ Kartičky k tomuto tématu (${mod.cards.length}) zařazeny do <strong>Boxu 1</strong> pro opakování dnes.`;
      } else if (gradeType === "good") {
        feedbackEl.innerHTML = `👍 Dobrá práce! Kartičky (${mod.cards.length}) posunuty do vyššího Leitner boxu.`;
      } else if (gradeType === "perfect") {
        feedbackEl.innerHTML = `🎉 Skvěle! Kartičky (${mod.cards.length}) přesunuty do <strong>Boxu 4 (Zvládnuté)</strong>.`;
      }
    }
  };

  const highlightModalLeitnerBtn = (grade) => {
    modalModuleBody.querySelectorAll(".modal-leitner-btn").forEach(b => {
      b.classList.toggle("active", b.getAttribute("data-mod-grade") === grade);
    });
  };

  const renderModalRecallTab = (mod) => {
    const scenarios = mod.recall && mod.recall.scenarios ? mod.recall.scenarios : [];
    if (scenarios.length === 0) {
      modalModuleBody.innerHTML = `
        <div style="text-align: center; padding: 40px; color: var(--text-muted);">
          <h3>Pro toto téma zatím není dostupná kazuistika.</h3>
          <p>Můžete si projít tématické kartičky nebo kontrolní test.</p>
        </div>
      `;
      return;
    }

    const container = document.createElement("div");
    container.style.maxWidth = "860px";
    container.style.margin = "0 auto";

    scenarios.forEach((sc, idx) => {
      const card = document.createElement("div");
      card.className = "recall-card";
      const noteKey = sc.id || (mod.id + '-modal-sc-' + idx);
      card.innerHTML = `
        <div class="recall-question-title">🎯 ${idx + 1}. ${sc.title}</div>
        <p style="font-size: 0.94rem; line-height: 1.6; color: var(--text-main);">${sc.question}</p>

        <div class="type-in-box">
          <label class="type-in-label">✏️ Napište svou úvahu / syndromologickou rozvahu před odhalením:</label>
          <textarea class="type-in-textarea" placeholder="Zde si napište diagnózu, lokalizaci léze nebo další kroky..." rows="3">${state.modalCaseNotes[noteKey] || ''}</textarea>
        </div>

        <div style="display: flex; gap: 10px; margin-top: 14px; flex-wrap: wrap;">
          <button type="button" class="btn btn-secondary reveal-modal-recall-btn">
            <span>👁️ Zobrazit klinické řešení</span>
          </button>
        </div>

        <div class="recall-answer-box" style="display: none;">
          <strong style="color: var(--accent-emerald); display: block; margin-bottom: 6px;">Správné řešení & Postup:</strong>
          <p style="font-size: 0.92rem; line-height: 1.55; color: var(--text-main);">${sc.answer}</p>
          ${sc.pearl ? `<div class="clinical-pearl"><strong>💡 Klinická perla:</strong> ${sc.pearl}</div>` : ''}
        </div>
      `;

      const noteTextarea = card.querySelector(".type-in-textarea");
      noteTextarea.addEventListener("input", (e) => {
        state.modalCaseNotes[noteKey] = e.target.value;
      });

      const btn = card.querySelector(".reveal-modal-recall-btn");
      const ansBox = card.querySelector(".recall-answer-box");
      btn.addEventListener("click", () => {
        const isShown = ansBox.style.display !== "none";
        ansBox.style.display = isShown ? "none" : "block";
        btn.innerHTML = isShown ? "<span>👁️ Zobrazit klinické řešení</span>" : "<span>🙈 Skrýt řešení</span>";
      });

      container.appendChild(card);
    });

    modalModuleBody.appendChild(container);
  };

  const renderModalFlashcardsTab = (mod) => {
    modalModuleBody.innerHTML = "";

    const cards = mod.cards || [];
    if (cards.length === 0) {
      modalModuleBody.innerHTML = `
        <div style="text-align: center; padding: 40px; color: var(--text-muted);">
          <h3>Pro toto téma nejsou dostupné kartičky.</h3>
        </div>
      `;
      return;
    }

    if (state.currentModCardIdx >= cards.length) {
      state.currentModCardIdx = 0;
    }

    const card = cards[state.currentModCardIdx];
    const sr = state.srCards[card.id] || { box: 1 };

    const wrapper = document.createElement("div");
    wrapper.className = "modal-fc-container";

    wrapper.innerHTML = `
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 14px;">
        <span class="module-number-badge">${mod.badgePrefix || ('Otázka ' + mod.number)} • Karta ${state.currentModCardIdx + 1} z ${cards.length}</span>
        <span style="font-size: 0.8rem; color: var(--text-muted); font-weight: 600;">Leitner: Box ${sr.box || 1} • ${state.isModCardFlipped ? 'ODPOVĚĎ' : 'OTÁZKA'}</span>
      </div>

      <div class="modal-fc-card ${state.isModCardFlipped ? 'flipped' : ''}" id="modal-fc-card" tabindex="0" role="button" aria-label="Otočit kartičku">
        <div class="modal-fc-badge">${state.isModCardFlipped ? 'ODPOVĚĎ (ZADNÍ STRANA)' : 'OTÁZKA (PŘEDNÍ STRANA)'}</div>
        <div class="modal-fc-text">${state.isModCardFlipped ? card.back : card.front}</div>
        
        ${(!state.isModCardFlipped && card.hint) ? `
          <button type="button" class="fc-hint-toggle" id="modal-fc-hint-toggle">
            ${state.isModHintShown ? '🙈 Skrýt nápovědu' : '💡 Zobrazit nápovědu'}
          </button>
          <div class="fc-hint-box" id="modal-fc-hint-box" style="${state.isModHintShown ? 'display: block;' : 'display: none;'}">
            <strong>💡 Nápověda:</strong> ${card.hint}
          </div>
        ` : ''}

        <div class="modal-fc-hint">
          ${state.isModCardFlipped 
            ? '✓ Odpověď zobrazena. Níže zvolte hodnocení podle toho, jak jste odpověď znali:' 
            : 'Klikněte pro otočení nebo stiskněte Mezerník'}
        </div>
      </div>

      <div style="display: flex; justify-content: center; margin-top: 14px;">
        <button type="button" class="btn btn-secondary fc-flip-btn" id="modal-fc-flip-btn">
          <span>${state.isModCardFlipped ? '🔄 Otočit zpět na otázku' : '🔄 Otočit kartičku / Zobrazit odpověď (Mezerník)'}</span>
        </button>
      </div>

      <div style="margin-top: 18px;">
        <div style="font-size: 0.82rem; font-weight: 600; color: var(--text-muted); text-align: center; margin-bottom: 8px;">
          Hodnocení pro Spaced Repetition (Leitner):
        </div>
        <div class="modal-fc-actions">
          <button type="button" class="grade-btn again" data-grade="again" title="Zcela nevím – Box 1 (dnes)">Znovu (1)</button>
          <button type="button" class="grade-btn hard" data-grade="hard" title="S obtížemi – zopakovat brzy">Těžké (2)</button>
          <button type="button" class="grade-btn good" data-grade="good" title="Dobře – posunout o box výše">Dobré (3)</button>
          <button type="button" class="grade-btn easy" data-grade="easy" title="Naprosto snadné – Box 4 (zvládnuto)">Snadné (4)</button>
        </div>
      </div>

      <div class="modal-fc-nav">
        <button type="button" class="btn btn-secondary" id="modal-fc-prev-btn" ${state.currentModCardIdx === 0 ? 'disabled' : ''}>
          <span>◀ Předchozí</span>
        </button>
        <div style="font-size: 0.82rem; color: var(--text-muted);">
          Karta ${state.currentModCardIdx + 1} / ${cards.length} • Klávesy: Mezerník = otočit, 1–4 = hodnocení
        </div>
        <button type="button" class="btn btn-secondary" id="modal-fc-next-btn" ${state.currentModCardIdx === cards.length - 1 ? 'disabled' : ''}>
          <span>Další ▶</span>
        </button>
      </div>
    `;

    const cardEl = wrapper.querySelector("#modal-fc-card");
    const flipBtn = wrapper.querySelector("#modal-fc-flip-btn");
    const hintToggle = wrapper.querySelector("#modal-fc-hint-toggle");

    const doFlip = () => {
      state.isModCardFlipped = !state.isModCardFlipped;
      renderModalFlashcardsTab(mod);
    };

    cardEl.addEventListener("click", (e) => {
      if (e.target.closest("#modal-fc-hint-toggle") || e.target.closest("#modal-fc-hint-box")) return;
      doFlip();
    });

    cardEl.addEventListener("keydown", (e) => {
      if (e.key === " " || e.key === "Enter") {
        e.preventDefault();
        doFlip();
      }
    });

    if (flipBtn) {
      flipBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        doFlip();
      });
    }

    if (hintToggle) {
      hintToggle.addEventListener("click", (e) => {
        e.stopPropagation();
        state.isModHintShown = !state.isModHintShown;
        renderModalFlashcardsTab(mod);
      });
    }

    wrapper.querySelectorAll(".grade-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const grade = btn.getAttribute("data-grade");
        applyCardGrade(card.id, grade);
        state.isModCardFlipped = false;
        state.isModHintShown = false;
        state.currentModCardIdx = (state.currentModCardIdx + 1) % cards.length;
        renderModalFlashcardsTab(mod);
      });
    });

    const prevBtn = wrapper.querySelector("#modal-fc-prev-btn");
    const nextBtn = wrapper.querySelector("#modal-fc-next-btn");
    if (prevBtn) {
      prevBtn.addEventListener("click", () => {
        if (state.currentModCardIdx > 0) {
          state.currentModCardIdx--;
          state.isModCardFlipped = false;
          state.isModHintShown = false;
          renderModalFlashcardsTab(mod);
        }
      });
    }
    if (nextBtn) {
      nextBtn.addEventListener("click", () => {
        if (state.currentModCardIdx < cards.length - 1) {
          state.currentModCardIdx++;
          state.isModCardFlipped = false;
          state.isModHintShown = false;
          renderModalFlashcardsTab(mod);
        }
      });
    }

    modalModuleBody.appendChild(wrapper);
  };

  const renderModalQuizTab = (mod) => {
    const questions = mod.quiz || [];
    if (questions.length === 0) {
      modalModuleBody.innerHTML = `
        <div style="text-align: center; padding: 40px; color: var(--text-muted);">
          <h3>Pro toto téma zatím není dostupný kvíz.</h3>
        </div>
      `;
      return;
    }

    const container = document.createElement("div");
    container.style.maxWidth = "800px";
    container.style.margin = "0 auto";

    questions.forEach((q, idx) => {
      const savedAns = state.quizProgress.answered[q.id];
      const card = document.createElement("div");
      card.className = "quiz-card";

      const optionsHTML = q.options.map((opt, optIdx) => {
        let btnClass = "quiz-option-btn";
        if (savedAns !== undefined) {
          if (optIdx === q.correctIndex) btnClass += " correct";
          else if (optIdx === savedAns) btnClass += " incorrect";
        }
        return `
          <button class="${btnClass}" data-q-id="${q.id}" data-opt-idx="${optIdx}" ${savedAns !== undefined ? 'disabled' : ''}>
            <span style="font-weight: 700; width: 22px;">${String.fromCharCode(65 + optIdx)})</span>
            <span>${opt}</span>
          </button>
        `;
      }).join("");

      card.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
          <span class="module-number-badge">${mod.badgePrefix || ('Otázka ' + mod.number)}</span>
          <span style="font-size: 0.8rem; color: var(--text-muted);">Otázka ${idx + 1} z ${questions.length}</span>
        </div>
        <div class="quiz-question-text">${q.question}</div>
        <div class="quiz-options-list">${optionsHTML}</div>
        <div class="quiz-explanation-box ${savedAns !== undefined ? 'active' : ''}">
          <strong style="color: var(--primary-light);">Vysvětlení:</strong>
          <p style="margin-top: 4px; color: var(--text-main);">${q.explanation}</p>
        </div>
      `;

      card.querySelectorAll(".quiz-option-btn").forEach(btn => {
        btn.addEventListener("click", () => {
          const selectedIdx = parseInt(btn.getAttribute("data-opt-idx"));
          handleQuizSelect(q, selectedIdx, card);
        });
      });

      container.appendChild(card);
    });

    modalModuleBody.appendChild(container);
  };

  // Listenery modálu
  modalCloseBtn.addEventListener("click", closeModuleModal);
  if (modalPrevBtn) modalPrevBtn.addEventListener("click", () => navigateModal(-1));
  if (modalNextBtn) modalNextBtn.addEventListener("click", () => navigateModal(1));

  document.querySelectorAll(".modal-tab-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const tab = btn.getAttribute("data-modtab");
      if (tab) switchModalTab(tab);
    });
  });

  moduleModalOverlay.addEventListener("click", (e) => {
    if (e.target === moduleModalOverlay) closeModuleModal();
  });

  document.addEventListener("keydown", (e) => {
    if (moduleModalOverlay.classList.contains("active")) {
      if (e.key === "Escape") {
        closeModuleModal();
        return;
      }

      const activeTag = document.activeElement ? document.activeElement.tagName : "";
      if (activeTag === "INPUT" || activeTag === "TEXTAREA") return;

      if (state.currentModalTab === "flashcards") {
        const mod = NEUROLOGY_DATA.modules.find(m => m.id === state.currentModalModuleId);
        if (!mod || !mod.cards || mod.cards.length === 0) return;
        const currentCard = mod.cards[state.currentModCardIdx];

        if (e.key === " ") {
          e.preventDefault();
          state.isModCardFlipped = !state.isModCardFlipped;
          renderModalFlashcardsTab(mod);
        } else if (e.key === "1") {
          applyCardGrade(currentCard.id, "again");
          state.isModCardFlipped = false;
          state.isModHintShown = false;
          state.currentModCardIdx = (state.currentModCardIdx + 1) % mod.cards.length;
          renderModalFlashcardsTab(mod);
        } else if (e.key === "2") {
          applyCardGrade(currentCard.id, "hard");
          state.isModCardFlipped = false;
          state.isModHintShown = false;
          state.currentModCardIdx = (state.currentModCardIdx + 1) % mod.cards.length;
          renderModalFlashcardsTab(mod);
        } else if (e.key === "3") {
          applyCardGrade(currentCard.id, "good");
          state.isModCardFlipped = false;
          state.isModHintShown = false;
          state.currentModCardIdx = (state.currentModCardIdx + 1) % mod.cards.length;
          renderModalFlashcardsTab(mod);
        } else if (e.key === "4") {
          applyCardGrade(currentCard.id, "easy");
          state.isModCardFlipped = false;
          state.isModHintShown = false;
          state.currentModCardIdx = (state.currentModCardIdx + 1) % mod.cards.length;
          renderModalFlashcardsTab(mod);
        } else if (e.key === "ArrowLeft") {
          if (state.currentModCardIdx > 0) {
            state.currentModCardIdx--;
            state.isModCardFlipped = false;
            state.isModHintShown = false;
            renderModalFlashcardsTab(mod);
          }
        } else if (e.key === "ArrowRight") {
          if (state.currentModCardIdx < mod.cards.length - 1) {
            state.currentModCardIdx++;
            state.isModCardFlipped = false;
            state.isModHintShown = false;
            renderModalFlashcardsTab(mod);
          }
        }
      } else {
        if (e.key.toLowerCase() === "p" || e.key === "ArrowLeft") navigateModal(-1);
        else if (e.key.toLowerCase() === "n" || e.key === "ArrowRight") navigateModal(1);
      }
      return;
    }

    if (state.activeTab === "flashcards") {
      if (document.activeElement.tagName === "INPUT" || document.activeElement.tagName === "TEXTAREA") return;
      if (e.key === "1") gradeFlashcard("again");
      else if (e.key === "2") gradeFlashcard("hard");
      else if (e.key === "3") gradeFlashcard("good");
      else if (e.key === "4") gradeFlashcard("easy");
    }
  });

  // --- AKTUALIZACE DASHBOARD STATISTIK ---
  const updateDashboardStats = () => {
    // 1. Prozkoumaná témata
    const totalMods = NEUROLOGY_DATA.modules.length;
    const exploredCount = state.exploredModules.size;
    const exploredPct = Math.round((exploredCount / totalMods) * 100);

    statExploredCount.textContent = String(exploredCount);
    statTotalModules.textContent = String(totalMods);
    statExploredBar.style.width = `${exploredPct}%`;
    statExploredPct.textContent = `${exploredPct} % zkouškových okruhů prozkoumáno`;

    // 2. Leitnerovy boxy
    let b1 = 0, b2 = 0, b3 = 0, b4 = 0;
    let dueCount = 0;
    const now = Date.now();

    allCards.forEach(c => {
      const sr = state.srCards[c.id];
      if (!sr || sr.box === 1) b1++;
      else if (sr.box === 2) b2++;
      else if (sr.box === 3) b3++;
      else if (sr.box === 4) b4++;

      if (sr && sr.nextReview <= now) {
        dueCount++;
      }
    });

    box1Count.textContent = String(b1);
    box2Count.textContent = String(b2);
    box3Count.textContent = String(b3);
    box4Count.textContent = String(b4);
    statTotalCards.textContent = String(allCards.length);

    // 3. K opakování dnes
    statDueCount.textContent = String(dueCount);
    if (dueCount > 0) {
      statDueDesc.textContent = `Máte ${dueCount} karet připravených k zopakování pro upevnění v paměti!`;
      studyDueBtn.style.display = "block";
      dueBtnCount.textContent = String(dueCount);
    } else {
      statDueDesc.textContent = "Všechny karty jsou zopakované! Vynikající práce.";
      studyDueBtn.style.display = "none";
    }

    // 4. Kvíz
    const qTotal = state.quizProgress.totalAnswered;
    const qCorrect = state.quizProgress.correctCount;
    const qPct = qTotal > 0 ? Math.round((qCorrect / qTotal) * 100) : 0;

    statQuizPct.textContent = String(qPct);
    statQuizBar.style.width = `${qPct}%`;
    statQuizCorrect.textContent = String(qCorrect);
    statQuizTotal.textContent = String(qTotal);
  };

  // --- RENDER AKTUÁLNÍHO POHLEDU ---
  const renderCurrentView = () => {
    if (state.activeTab === "theory") renderTheoryGrid();
    else if (state.activeTab === "recall") renderRecallList();
    else if (state.activeTab === "flashcards") renderActiveFlashcard();
    else if (state.activeTab === "quiz") renderQuiz();
    else if (state.activeTab === "cheatsheet") renderCheatSheet();
  };

  // --- INICIALIZACE ---
  renderCategoryPills();
  updateDashboardStats();
  renderTheoryGrid();
  renderRecallList();
  renderQuiz();
  renderCheatSheet();
  initFlashcardDrill(false);
});
