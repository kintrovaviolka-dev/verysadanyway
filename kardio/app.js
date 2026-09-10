// kardio/app.js - Aplikační logika pro Kardiologický studijní portál

document.addEventListener("DOMContentLoaded", () => {
  // --- LOCAL STORAGE & LEITNER ENGINE ---
  const STORAGE_KEY = "kardio_leitner_v1";
  const THEME_KEY = "kardio_theme_v1";
  const STATS_KEY = "kardio_stats_v1";

  const getStoredLeitner = () => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored) : {};
    } catch (e) {
      return {};
    }
  };

  const saveLeitner = (data) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch (e) {}
  };

  const getStoredStats = () => {
    try {
      const stored = localStorage.getItem(STATS_KEY);
      return stored ? JSON.parse(stored) : { xp: 0, streak: 0, lastReviewDate: null };
    } catch (e) {
      return { xp: 0, streak: 0, lastReviewDate: null };
    }
  };

  const saveStats = (stats) => {
    try {
      localStorage.setItem(STATS_KEY, JSON.stringify(stats));
    } catch (e) {}
  };

  let leitnerState = getStoredLeitner(); // { [cardId]: { box: 1, nextDue: timestamp, lastReview: timestamp } }
  let userStats = getStoredStats();

  // Intervals in days for Leitner boxes
  const BOX_INTERVALS = {
    1: 1,  // Box 1: Denně (1 den)
    2: 2,  // Box 2: Obden (2 dny)
    3: 5,  // Box 3: Každých 5 dní
    4: 10  // Box 4: Zvládnuto (10 dní)
  };

  // --- APPLICATION STATE ---
  const state = {
    activeView: "modules", // "modules" | "module-detail" | "spaced-repetition"
    selectedModuleId: null,
    activeTopicStep: "theory", // "theory" | "recall" | "summary"
    searchQuery: "",
    srSession: {
      cards: [],
      currentIndex: 0,
      isFlipped: false,
      filterCategory: "all",
      filterDueOnly: false
    }
  };

  // --- DOM ELEMENTS ---
  const themeToggleBtn = document.getElementById("theme-toggle");
  const backHubBtn = document.getElementById("back-hub-btn");
  const navModulesBtn = document.getElementById("nav-modules-btn");
  const navSrBtn = document.getElementById("nav-sr-btn");
  const searchInput = document.getElementById("search-input");
  
  // Dashboard elements
  const totalMasteredCount = document.getElementById("total-mastered-count");
  const totalCardsCount = document.getElementById("total-cards-count");
  const overallProgressBar = document.getElementById("overall-progress-bar");
  const box1Count = document.getElementById("box-1-count");
  const box2Count = document.getElementById("box-2-count");
  const box3Count = document.getElementById("box-3-count");
  const box4Count = document.getElementById("box-4-count");
  const dueTodayCount = document.getElementById("due-today-count");
  const startDueBtn = document.getElementById("start-due-btn");
  const startAllSrBtn = document.getElementById("start-all-sr-btn");

  // Views
  const modulesView = document.getElementById("modules-view");
  const moduleDetailView = document.getElementById("module-detail-view");
  const srView = document.getElementById("sr-view");
  const modulesGrid = document.getElementById("modules-grid");

  // Detail View elements
  const detailBackBtn = document.getElementById("detail-back-btn");
  const detailModuleTitle = document.getElementById("detail-module-title");
  const detailStepTheoryBtn = document.getElementById("step-theory-btn");
  const detailStepRecallBtn = document.getElementById("step-recall-btn");
  const detailStepSummaryBtn = document.getElementById("step-summary-btn");
  const theoryPane = document.getElementById("theory-pane");
  const recallPane = document.getElementById("recall-pane");
  const summaryPane = document.getElementById("summary-pane");

  // Spaced Repetition elements
  const srBackBtn = document.getElementById("sr-back-btn");
  const srFilterCategory = document.getElementById("sr-filter-category");
  const srCounterCurrent = document.getElementById("sr-counter-current");
  const srCounterTotal = document.getElementById("sr-counter-total");
  const srCardWrapper = document.getElementById("sr-card-wrapper");
  const srMainCard = document.getElementById("sr-main-card");
  const srCardCategory = document.getElementById("sr-card-category");
  const srQuestionText = document.getElementById("sr-question-text");
  const srAnswerText = document.getElementById("sr-answer-text");
  const srHighYieldPill = document.getElementById("sr-high-yield-pill");
  const srBoxIndicator = document.getElementById("sr-box-indicator");
  const srRateAgainBtn = document.getElementById("sr-rate-again-btn");
  const srRateGoodBtn = document.getElementById("sr-rate-good-btn");

  // --- THEME INITIALIZATION ---
  const initTheme = () => {
    const savedTheme = localStorage.getItem(THEME_KEY);
    if (savedTheme === "light") {
      document.body.classList.add("light-theme");
    }
  };

  themeToggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("light-theme");
    const isLight = document.body.classList.contains("light-theme");
    localStorage.setItem(THEME_KEY, isLight ? "light" : "dark");
  });

  // --- BACK TO MAIN HUB ---
  backHubBtn.addEventListener("click", () => {
    window.location.href = "../index.html";
  });

  // --- LEITNER BOX & STATS RECALCULATION ---
  const updateDashboardStats = () => {
    const allCards = CARDIOLOGY_DATA.flashcards;
    const now = Date.now();
    let b1 = 0, b2 = 0, b3 = 0, b4 = 0, due = 0;

    allCards.forEach((card) => {
      const cardState = leitnerState[card.id];
      if (!cardState) {
        b1++;
        due++; // Unstudied cards count as due
      } else {
        if (cardState.box === 1) b1++;
        else if (cardState.box === 2) b2++;
        else if (cardState.box === 3) b3++;
        else if (cardState.box === 4) b4++;

        if (!cardState.nextDue || cardState.nextDue <= now) {
          due++;
        }
      }
    });

    const total = allCards.length;
    const mastered = b4;
    const pct = Math.round((mastered / total) * 100);

    totalMasteredCount.textContent = mastered;
    totalCardsCount.textContent = total;
    overallProgressBar.style.width = `${pct}%`;

    box1Count.textContent = b1;
    box2Count.textContent = b2;
    box3Count.textContent = b3;
    box4Count.textContent = b4;
    dueTodayCount.textContent = due;

    if (due > 0) {
      startDueBtn.style.display = "inline-flex";
    } else {
      startDueBtn.style.display = "none";
    }
  };

  // --- RENDER MODULES LIST ---
  const renderModulesList = () => {
    modulesGrid.innerHTML = "";
    const query = state.searchQuery.toLowerCase().trim();

    const filtered = CARDIOLOGY_DATA.modules.filter((mod) => {
      if (!query) return true;
      return (
        mod.title.toLowerCase().includes(query) ||
        mod.shortDesc.toLowerCase().includes(query) ||
        mod.badge.toLowerCase().includes(query)
      );
    });

    if (filtered.length === 0) {
      modulesGrid.innerHTML = `
        <div style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--text-muted);">
          <p style="font-size: 1.1rem; margin-bottom: 8px;">Žádný kardiologický modul neodpovídá hledání "${escapeHTML(query)}".</p>
          <button class="btn btn-secondary btn-sm" id="clear-search-btn">Vymazat filtr</button>
        </div>
      `;
      const clearBtn = document.getElementById("clear-search-btn");
      if (clearBtn) clearBtn.addEventListener("click", () => {
        searchInput.value = "";
        state.searchQuery = "";
        renderModulesList();
      });
      return;
    }

    filtered.forEach((mod) => {
      const cardEl = document.createElement("div");
      cardEl.className = "module-card";
      cardEl.innerHTML = `
        <div>
          <div class="module-header">
            <div class="module-icon-wrap">${mod.icon}</div>
            <span class="module-badge badge-${mod.badgeColor}">${mod.badge}</span>
          </div>
          <h3 class="module-title">${mod.number}. ${mod.title}</h3>
          <p class="module-desc">${mod.shortDesc}</p>
        </div>
        <div class="module-footer">
          <div class="flow-pills">
            <span class="flow-pill">1. Teorie</span>
            <span class="flow-pill">2. Recall</span>
            <span class="flow-pill">3. Tahák</span>
          </div>
          <span class="module-action-text">Spustit →</span>
        </div>
      `;
      cardEl.addEventListener("click", () => {
        openModuleDetail(mod.id);
      });
      modulesGrid.appendChild(cardEl);
    });
  };

  // --- OPEN MODULE DETAIL (3-STEP MASTERY VIEW) ---
  const openModuleDetail = (moduleId) => {
    const mod = CARDIOLOGY_DATA.modules.find((m) => m.id === moduleId);
    if (!mod) return;

    state.selectedModuleId = moduleId;
    state.activeTopicStep = "theory";
    state.activeView = "module-detail";

    detailModuleTitle.textContent = `${mod.number}. ${mod.title}`;

    // Render Step 1: Teorie
    theoryPane.innerHTML = `
      <div class="theory-banner-box">
        <span class="theory-banner-tag">${mod.theory.banner.tag}</span>
        <h2>${mod.theory.banner.title}</h2>
        <p>${mod.theory.banner.text}</p>
      </div>
      ${mod.theory.sections
        .map(
          (sec) => `
        <div class="theory-section-card">
          <h3 class="section-card-title">
            <span class="title-pill"></span>
            ${sec.title}
          </h3>
          <div class="section-card-body">
            ${sec.content}
          </div>
        </div>
      `
        )
        .join("")}
      <div style="text-align: center; margin-top: 30px;">
        <button class="btn btn-primary" id="btn-next-to-recall" style="padding: 12px 28px; font-size: 0.95rem;">
          Přejít na Krok 2: Active Recall & Klinické scénáře →
        </button>
      </div>
    `;

    document.getElementById("btn-next-to-recall")?.addEventListener("click", () => {
      switchTopicStep("recall");
    });

    // Render Step 2: Active Recall
    recallPane.innerHTML = `
      <div style="margin-bottom: 20px; background: rgba(225,29,72,0.1); border: 1px solid rgba(225,29,72,0.25); border-radius: var(--radius-md); padding: 14px 18px; font-size: 0.85rem; color: #fecdd3;">
        💡 <strong>Jak postupovat:</strong> Zkuste si odpověď na klinický scénář formulovat v hlavě ještě před kliknutím na kartičku.
      </div>
      <div class="recall-cards-grid">
        ${mod.recall.scenarios
          .map(
            (scen) => `
          <div class="recall-flip-card" data-recall-id="${scen.id}">
            <div class="recall-card-inner">
              <div class="card-face card-face-front">
                <div class="face-header">
                  <span class="face-badge front-badge">${scen.title}</span>
                  <span style="font-size: 1.1rem;">🫀</span>
                </div>
                <div class="face-body">
                  <p>${scen.question}</p>
                </div>
                <div class="face-footer">
                  <span>Kliknutím otočit</span>
                  <span>🔄</span>
                </div>
              </div>
              <div class="card-face card-face-back">
                <div class="face-header">
                  <span class="face-badge back-badge">Klinické řešení</span>
                  <span>✅</span>
                </div>
                <div class="face-body">
                  <p><strong>${scen.answer}</strong></p>
                  ${scen.pearl ? `<div class="pearl-note">📌 <strong>Clinical Pearl:</strong> ${scen.pearl}</div>` : ""}
                </div>
                <div class="face-footer">
                  <span>Kliknutím zpět</span>
                  <span>🔄</span>
                </div>
              </div>
            </div>
          </div>
        `
          )
          .join("")}
      </div>

      ${
        mod.recall.quiz
          ? `
        <div class="decision-quiz-box">
          <span class="quiz-badge">Klinický rozhodovací test</span>
          <h4 style="font-size: 1.05rem; font-family: var(--font-heading); margin-bottom: 8px;">${mod.recall.quiz.title}</h4>
          <p class="quiz-prompt">${mod.recall.quiz.prompt}</p>
          <div class="quiz-options-list" id="quiz-opts-list">
            ${mod.recall.quiz.options
              .map(
                (opt, idx) => `
              <button class="quiz-opt-btn" data-idx="${idx}">
                ${opt.text}
              </button>
            `
              )
              .join("")}
          </div>
          <div class="quiz-feedback-box" id="quiz-feedback-box"></div>
        </div>
      `
          : ""
      }

      <div style="text-align: center; margin-top: 30px;">
        <button class="btn btn-primary" id="btn-next-to-summary" style="padding: 12px 28px; font-size: 0.95rem;">
          Přejít na Krok 3: Klinický tahák & Co NEDĚLAT →
        </button>
      </div>
    `;

    // Bind flip events to recall cards
    recallPane.querySelectorAll(".recall-flip-card").forEach((card) => {
      card.addEventListener("click", () => {
        card.classList.toggle("flipped");
      });
    });

    // Bind quiz options
    if (mod.recall.quiz) {
      const quizOptsList = document.getElementById("quiz-opts-list");
      const quizFeedbackBox = document.getElementById("quiz-feedback-box");
      const opts = mod.recall.quiz.options;

      quizOptsList.querySelectorAll(".quiz-opt-btn").forEach((btn) => {
        btn.addEventListener("click", () => {
          const idx = parseInt(btn.getAttribute("data-idx"));
          const selected = opts[idx];

          quizOptsList.querySelectorAll(".quiz-opt-btn").forEach((b, i) => {
            b.disabled = true;
            if (opts[i].isCorrect) {
              b.classList.add("correct");
            } else if (i === idx) {
              b.classList.add("incorrect");
            }
          });

          quizFeedbackBox.className = `quiz-feedback-box show ${selected.isCorrect ? "correct-fb" : "incorrect-fb"}`;
          quizFeedbackBox.innerHTML = `
            <strong>${selected.isCorrect ? "✅ Správně!" : "❌ Nesprávně."}</strong><br>
            ${mod.recall.quiz.explanation}
          `;
        });
      });
    }

    document.getElementById("btn-next-to-summary")?.addEventListener("click", () => {
      switchTopicStep("summary");
    });

    // Render Step 3: Final Breakdown (Tahák)
    summaryPane.innerHTML = `
      <div class="class-three-box">
        <h3 class="class-three-title">
          <span>❌</span>
          Co v praxi NEDĚLAT (Kontraindikace & ESC Třída III)
        </h3>
        <p class="class-three-sub">Tyto postupy jsou v guidelines přísně nedoporučeny nebo mohou pacienta bezprostředně poškodit.</p>
        <div class="class-three-list">
          ${mod.breakdown.classThree
            .map(
              (item) => `
            <div class="class-three-item">
              <span class="x-icon">✕</span>
              <span>${item}</span>
            </div>
          `
            )
            .join("")}
        </div>
      </div>

      <div class="must-know-box">
        <h3 class="must-know-title">
          <span>💎</span>
          Klíčové body ke zkoušce (Must-know Summary)
        </h3>
        <div class="must-know-list">
          ${mod.breakdown.mustKnow
            .map(
              (item) => `
            <div class="must-know-item">
              ${item}
            </div>
          `
            )
            .join("")}
        </div>
      </div>

      <div style="text-align: center; margin-top: 30px; display: flex; justify-content: center; gap: 14px; flex-wrap: wrap;">
        <button class="btn btn-secondary" id="btn-back-to-modules">
          ← Zpět na seznam témat
        </button>
        <button class="btn btn-primary" id="btn-start-topic-sr">
          🔥 Procvičit kartičky tohoto tématu ve Spaced Repetition
        </button>
      </div>
    `;

    document.getElementById("btn-back-to-modules")?.addEventListener("click", () => {
      switchView("modules");
    });

    document.getElementById("btn-start-topic-sr")?.addEventListener("click", () => {
      startSpacedRepetition(mod.id, false);
    });

    switchTopicStep("theory");
    switchView("module-detail");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // --- TOPIC STEP SWITCHER ---
  const switchTopicStep = (step) => {
    state.activeTopicStep = step;

    [detailStepTheoryBtn, detailStepRecallBtn, detailStepSummaryBtn].forEach((b) =>
      b.classList.remove("active")
    );
    [theoryPane, recallPane, summaryPane].forEach((p) => p.classList.remove("active"));

    if (step === "theory") {
      detailStepTheoryBtn.classList.add("active");
      theoryPane.classList.add("active");
    } else if (step === "recall") {
      detailStepRecallBtn.classList.add("active");
      recallPane.classList.add("active");
    } else if (step === "summary") {
      detailStepSummaryBtn.classList.add("active");
      summaryPane.classList.add("active");
    }
  };

  detailStepTheoryBtn.addEventListener("click", () => switchTopicStep("theory"));
  detailStepRecallBtn.addEventListener("click", () => switchTopicStep("recall"));
  detailStepSummaryBtn.addEventListener("click", () => switchTopicStep("summary"));
  detailBackBtn.addEventListener("click", () => switchView("modules"));

  // --- SPACED REPETITION ENGINE ---
  const startSpacedRepetition = (moduleId = "all", dueOnly = false) => {
    let pool = CARDIOLOGY_DATA.flashcards;

    if (moduleId && moduleId !== "all") {
      pool = pool.filter((c) => c.moduleId === moduleId);
    }

    if (dueOnly) {
      const now = Date.now();
      pool = pool.filter((c) => {
        const item = leitnerState[c.id];
        return !item || !item.nextDue || item.nextDue <= now;
      });
    }

    if (pool.length === 0) {
      alert("Pro zvolený filtr nemáte momentálně žádné karty k opakování!");
      return;
    }

    // Shuffle pool
    pool = [...pool].sort(() => Math.random() - 0.5);

    state.srSession = {
      cards: pool,
      currentIndex: 0,
      isFlipped: false,
      filterCategory: moduleId,
      filterDueOnly: dueOnly
    };

    // Populate Category filter select
    srFilterCategory.innerHTML = `<option value="all">Všechna témata (115+ karet)</option>`;
    CARDIOLOGY_DATA.modules.forEach((mod) => {
      const opt = document.createElement("option");
      opt.value = mod.id;
      opt.textContent = `${mod.number}. ${mod.title}`;
      if (mod.id === moduleId) opt.selected = true;
      srFilterCategory.appendChild(opt);
    });

    renderCurrentSrCard();
    switchView("spaced-repetition");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const renderCurrentSrCard = () => {
    const session = state.srSession;
    if (session.cards.length === 0 || session.currentIndex >= session.cards.length) {
      // Session finished
      srQuestionText.textContent = "🎉 Skvělá práce! Všechny karty z tohoto bloku jsou zopakované.";
      srAnswerText.textContent = "";
      srHighYieldPill.textContent = "";
      srHighYieldPill.style.display = "none";
      srCardCategory.textContent = "HOTOVO";
      srBoxIndicator.textContent = "";
      srMainCard.classList.remove("flipped");
      session.isFlipped = false;
      srRateAgainBtn.style.display = "none";
      srRateGoodBtn.style.display = "none";
      return;
    }

    const currentCard = session.cards[session.currentIndex];
    const cardState = leitnerState[currentCard.id] || { box: 1 };

    srCounterCurrent.textContent = session.currentIndex + 1;
    srCounterTotal.textContent = session.cards.length;

    srCardCategory.textContent = currentCard.category;
    srQuestionText.textContent = currentCard.question;
    srAnswerText.textContent = currentCard.answer;
    
    if (currentCard.highYield) {
      srHighYieldPill.style.display = "block";
      srHighYieldPill.innerHTML = `📌 <strong>High-Yield:</strong> ${currentCard.highYield}`;
    } else {
      srHighYieldPill.style.display = "none";
    }

    srBoxIndicator.textContent = `Box ${cardState.box}`;
    srMainCard.classList.remove("flipped");
    session.isFlipped = false;

    srRateAgainBtn.style.display = "flex";
    srRateGoodBtn.style.display = "flex";
  };

  const flipSrCard = () => {
    state.srSession.isFlipped = !state.srSession.isFlipped;
    srMainCard.classList.toggle("flipped", state.srSession.isFlipped);
  };

  srCardWrapper.addEventListener("click", flipSrCard);

  const rateSrCard = (isSuccess) => {
    const session = state.srSession;
    if (session.currentIndex >= session.cards.length) return;

    const currentCard = session.cards[session.currentIndex];
    const now = Date.now();
    let prevBox = leitnerState[currentCard.id]?.box || 1;
    let newBox = 1;

    if (isSuccess) {
      newBox = Math.min(prevBox + 1, 4);
    } else {
      newBox = 1; // Drop back to box 1 on mistake
    }

    const intervalDays = BOX_INTERVALS[newBox];
    const nextDue = now + intervalDays * 24 * 60 * 60 * 1000;

    leitnerState[currentCard.id] = {
      box: newBox,
      lastReview: now,
      nextDue: nextDue
    };
    saveLeitner(leitnerState);

    // Update stats
    userStats.xp += isSuccess ? 10 : 2;
    saveStats(userStats);
    updateDashboardStats();

    // Move to next card
    session.currentIndex++;
    renderCurrentSrCard();
  };

  srRateAgainBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    rateSrCard(false);
  });

  srRateGoodBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    rateSrCard(true);
  });

  srFilterCategory.addEventListener("change", () => {
    const sel = srFilterCategory.value;
    startSpacedRepetition(sel, false);
  });

  srBackBtn.addEventListener("click", () => {
    switchView("modules");
  });

  // --- KEYBOARD SHORTCUTS ---
  document.addEventListener("keydown", (e) => {
    if (state.activeView === "spaced-repetition") {
      if (e.code === "Space") {
        e.preventDefault();
        flipSrCard();
      } else if (e.key === "1" || e.code === "Digit1") {
        rateSrCard(false);
      } else if (e.key === "2" || e.code === "Digit2") {
        rateSrCard(true);
      }
    }
  });

  // --- VIEW SWITCHING ---
  const switchView = (viewName) => {
    state.activeView = viewName;
    [modulesView, moduleDetailView, srView].forEach((v) => v.classList.remove("active"));
    [navModulesBtn, navSrBtn].forEach((b) => b.classList.remove("active"));

    if (viewName === "modules") {
      modulesView.classList.add("active");
      navModulesBtn.classList.add("active");
      renderModulesList();
      updateDashboardStats();
    } else if (viewName === "module-detail") {
      moduleDetailView.classList.add("active");
    } else if (viewName === "spaced-repetition") {
      srView.classList.add("active");
      navSrBtn.classList.add("active");
    }
  };

  navModulesBtn.addEventListener("click", () => switchView("modules"));
  navSrBtn.addEventListener("click", () => startSpacedRepetition("all", false));
  startDueBtn.addEventListener("click", () => startSpacedRepetition("all", true));
  startAllSrBtn.addEventListener("click", () => startSpacedRepetition("all", false));

  // Search input binding
  searchInput.addEventListener("input", (e) => {
    state.searchQuery = e.target.value;
    if (state.activeView !== "modules") {
      switchView("modules");
    } else {
      renderModulesList();
    }
  });

  const escapeHTML = (str) => {
    if (!str) return "";
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  };

  // --- INIT ---
  initTheme();
  updateDashboardStats();
  renderModulesList();
  switchView("modules");
});
