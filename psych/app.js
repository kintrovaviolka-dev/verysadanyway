// app.js - Hlavní aplikační logika subportálu Psychiatrie LF OU
document.addEventListener("DOMContentLoaded", () => {
  if (typeof PSYCHIATRY_DATA === "undefined") {
    console.error("PSYCHIATRY_DATA is not loaded!");
    return;
  }

  // --- STAV APLIKACE ---
  const STORAGE_KEYS = {
    THEME: "psych_theme_preference",
    EXPLORED: "psych_explored_modules",
    SR: "psych_spaced_repetition_cards",
    QUIZ: "psych_quiz_progress"
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

  PSYCHIATRY_DATA.modules.forEach(mod => {
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
    activeSection: "all", // 'all' | 'obecna' | 'specialni'
    activeCategory: "all",
    searchQuery: "",
    exploredModules: new Set(getStoredExplored()),
    srCards: getStoredSRState(), // id -> { box: 1..4, nextReview: timestamp, reps: 0 }
    quizProgress: getStoredQuiz(),
    
    // Spaced repetition runner
    flashcardList: [...allCards],
    currentCardIndex: 0,
    isCardFlipped: false
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
    recall: getEl("view-recall"),
    flashcards: getEl("view-flashcards"),
    quiz: getEl("view-quiz"),
    cheatsheet: getEl("view-cheatsheet")
  };
  const tabTheoryLabel = getEl("tab-theory-label");

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
  const modalModuleBadge = getEl("modal-module-badge");
  const modalModuleTitle = getEl("modal-module-title");
  const modalModuleBody = getEl("modal-module-body");

  // Flashcards komponenty
  const activeFlashcard = getEl("active-flashcard");
  const fcCategoryBadge = getEl("fc-category-badge");
  const fcTextContent = getEl("fc-text-content");
  const fcHintContent = getEl("fc-hint-content");
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

    if (tabName === "flashcards") {
      initFlashcardDrill(false);
    } else {
      renderCurrentView();
    }
  };

  tabButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const tab = btn.getAttribute("data-tab");
      switchTab(tab);
    });
  });

  // --- SEKCE PŘEPÍNAČ (VŠE vs OBECNÁ vs SPECIÁLNÍ) ---
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
      
      // Update tab label count
      updateTabCounts();
      renderCurrentView();
    });
  });

  // --- KATEGORIE FILTR ---
  const renderCategoryPills = () => {
    categoryPillsContainer.innerHTML = "";
    PSYCHIATRY_DATA.categories.forEach(cat => {
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
    return PSYCHIATRY_DATA.modules.filter(mod => {
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
      const isSpecial = mod.section === "specialni";
      const card = document.createElement("div");
      card.className = "module-card";
      card.setAttribute("tabindex", "0");
      card.setAttribute("role", "button");
      card.setAttribute("aria-label", `Otevřít otázku ${mod.badgePrefix || mod.number}: ${mod.title}`);

      card.innerHTML = `
        <div>
          <div class="module-card-header">
            <span class="module-number-badge ${isSpecial ? 'style-special' : ''}">
              ${mod.badgePrefix || ('Otázka ' + mod.number)}
            </span>
            <span class="module-badge">${mod.badge || mod.sectionLabel || "Psychiatrie"}</span>
          </div>
          <h3 class="module-card-title">${mod.title}</h3>
          <p class="module-card-desc">${mod.shortDesc}</p>
        </div>
        <div class="module-card-footer">
          <div class="module-stats-pills">
            <span class="mini-stat-pill" title="Počet flashcards">⚡ ${mod.cards ? mod.cards.length : 0} karet</span>
            <span class="mini-stat-pill" title="Počet cvičných otázek">📝 ${mod.quiz ? mod.quiz.length : 0} kvíz</span>
          </div>
          <span style="font-weight: 700; color: ${isExplored ? 'var(--accent-emerald)' : 'var(--primary-light)'};">
            ${isExplored ? '✓ Prostudováno' : 'Otevřít →'}
          </span>
        </div>
      `;

      const handleOpen = () => openModuleModal(mod.id);
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

        mod.recall.scenarios.forEach(sc => {
          const rCard = document.createElement("div");
          rCard.className = "recall-card";
          rCard.innerHTML = `
            <div class="recall-question-title">🎯 ${sc.title}</div>
            <p style="font-size: 0.92rem; line-height: 1.5; color: var(--text-main);">${sc.question}</p>
            <button class="btn btn-secondary reveal-answer-btn" style="margin-top: 12px;">
              <span>👁️ Zobrazit klinické řešení</span>
            </button>
            <div class="recall-answer-box">
              <strong style="color: var(--accent-emerald); display: block; margin-bottom: 4px;">Správné řešení & Postup:</strong>
              <p style="font-size: 0.9rem; line-height: 1.5; color: var(--text-main);">${sc.answer}</p>
              ${sc.pearl ? `<div class="clinical-pearl"><strong>💡 Klinická perla:</strong> ${sc.pearl}</div>` : ''}
            </div>
          `;

          const btn = rCard.querySelector(".reveal-answer-btn");
          const ans = rCard.querySelector(".recall-answer-box");
          btn.addEventListener("click", () => {
            const isShown = ans.classList.toggle("active");
            btn.innerHTML = isShown ? "<span>🙈 Skrýt řešení</span>" : "<span>👁️ Zobrazit klinické řešení</span>";
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
      fcCurrentIdx.textContent = "0";
      fcTotalCount.textContent = "0";
      return;
    }

    const card = state.flashcardList[state.currentCardIndex];
    const sr = state.srCards[card.id] || { box: 1 };

    fcCategoryBadge.textContent = `${card.modulePrefix || ('Otázka ' + card.moduleNumber)} • Box ${sr.box}`;
    fcCurrentIdx.textContent = String(state.currentCardIndex + 1);
    fcTotalCount.textContent = String(state.flashcardList.length);

    if (state.isCardFlipped) {
      fcTextContent.innerHTML = card.back;
      fcHintContent.textContent = "Odpověď (ohodnoťte, jak přesně jste odpověď znali)";
      activeFlashcard.style.borderColor = "var(--primary-light)";
    } else {
      fcTextContent.innerHTML = card.front;
      fcHintContent.textContent = card.hint ? `Nápověda: ${card.hint}` : "Klikněte nebo stiskněte mezerník pro otočení";
      activeFlashcard.style.borderColor = "var(--border-color)";
    }
  };

  activeFlashcard.addEventListener("click", () => {
    state.isCardFlipped = !state.isCardFlipped;
    renderActiveFlashcard();
  });

  activeFlashcard.addEventListener("keydown", (e) => {
    if (e.key === " " || e.key === "Enter") {
      e.preventDefault();
      state.isCardFlipped = !state.isCardFlipped;
      renderActiveFlashcard();
    }
  });

  const gradeFlashcard = (gradeType) => {
    if (state.flashcardList.length === 0) return;
    const card = state.flashcardList[state.currentCardIndex];
    const sr = state.srCards[card.id] || { box: 1, reps: 0 };

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
    state.srCards[card.id] = sr;
    saveSRState(state.srCards);
    updateDashboardStats();

    // Další karta
    state.isCardFlipped = false;
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
          <span class="module-number-badge ${q.moduleSection === 'specialni' ? 'style-special' : ''}">
            ${q.modulePrefix || ('Otázka ' + q.moduleNumber)}
          </span>
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

  // --- MODÁL S PLNÝM DETAIL OTÁZKY ---
  const openModuleModal = (moduleId) => {
    const mod = PSYCHIATRY_DATA.modules.find(m => m.id === moduleId);
    if (!mod) return;

    // Označit jako prozkoumané
    state.exploredModules.add(moduleId);
    saveExplored(Array.from(state.exploredModules));
    updateDashboardStats();
    renderTheoryGrid();

    modalModuleBadge.textContent = `${mod.badgePrefix || ('Otázka ' + mod.number)} • ${mod.sectionLabel || (mod.section === 'specialni' ? 'Speciální psychiatrie' : 'Obecná psychiatrie')}`;
    modalModuleTitle.textContent = mod.title;

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

    // Active recall sekce
    if (mod.recall && mod.recall.scenarios && mod.recall.scenarios.length > 0) {
      bodyHTML += `<h3 style="font-family: var(--font-heading); color: var(--primary-light); margin: 30px 0 14px 0;">🎯 Active Recall & Kazuistika</h3>`;
      mod.recall.scenarios.forEach(sc => {
        bodyHTML += `
          <div class="recall-card">
            <div class="recall-question-title">${sc.title}</div>
            <p style="font-size: 0.92rem; line-height: 1.5; color: var(--text-main);">${sc.question}</p>
            <div style="margin-top: 12px; padding: 12px; background: rgba(16, 185, 129, 0.12); border: 1px solid rgba(16, 185, 129, 0.3); border-radius: var(--radius-sm);">
              <strong style="color: #34d399; font-size: 0.85rem;">Správné řešení:</strong>
              <p style="font-size: 0.88rem; color: var(--text-main); margin-top: 2px;">${sc.answer}</p>
              ${sc.pearl ? `<div style="font-size: 0.82rem; color: #6ee7b7; margin-top: 6px;">💡 <em>${sc.pearl}</em></div>` : ''}
            </div>
          </div>
        `;
      });
    }

    modalModuleBody.innerHTML = bodyHTML;
    moduleModalOverlay.classList.add("active");
    modalCloseBtn.focus();
  };

  const closeModuleModal = () => {
    moduleModalOverlay.classList.remove("active");
  };

  modalCloseBtn.addEventListener("click", closeModuleModal);
  moduleModalOverlay.addEventListener("click", (e) => {
    if (e.target === moduleModalOverlay) closeModuleModal();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && moduleModalOverlay.classList.contains("active")) {
      closeModuleModal();
    }
  });

  // --- AKTUALIZACE DASHBOARD STATISTIK ---
  const updateDashboardStats = () => {
    // 1. Prozkoumaná témata
    const totalMods = PSYCHIATRY_DATA.modules.length;
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
