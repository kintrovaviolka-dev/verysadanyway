// Aplikace Farmakologie SPA - Klientský kód
document.addEventListener("DOMContentLoaded", () => {
  // --- INICIALIZACE STAVU ---
  const state = {
    questions: window.COMPLETE_QUESTIONS || [],
    userProgress: JSON.parse(localStorage.getItem("pharm_progress")) || {},
    userNotes: JSON.parse(localStorage.getItem("pharm_notes")) || {},
    quizStats: JSON.parse(localStorage.getItem("pharm_quiz")) || { correctCount: 0, totalCount: 0 },
    theme: localStorage.getItem("pharm_theme") || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"),
    activeQuestion: null,
    activeTab: "panel-study",
    activeChapter: localStorage.getItem("pharm_active_chapter") || "obecna"
  };

  // Uložení výchozího stavu do localStorage
  const saveState = () => {
    localStorage.setItem("pharm_progress", JSON.stringify(state.userProgress));
    localStorage.setItem("pharm_notes", JSON.stringify(state.userNotes));
    localStorage.setItem("pharm_quiz", JSON.stringify(state.quizStats));
  };

  // Použití barevného motivu
  if (state.theme === "dark") {
    document.body.classList.add("dark-mode");
  } else {
    document.body.classList.remove("dark-mode");
  }

  // --- HTML ELEMENTY ---
  const cardsGrid = document.getElementById("cards-grid");
  const searchInput = document.getElementById("search-input");
  const categoryFilter = document.getElementById("category-filter");
  const systemFilter = document.getElementById("system-filter");
  const statusFilter = document.getElementById("status-filter");
  const themeToggle = document.getElementById("theme-toggle");
  const chapterTabs = document.querySelector(".chapter-tabs");
  
  // Modál
  const detailModal = document.getElementById("detail-modal");
  const modalClose = document.getElementById("modal-close");
  const modalCategory = document.getElementById("modal-category");
  const modalTitle = document.getElementById("modal-title");
  const studyContent = document.getElementById("study-content");
  
  // Editor
  const editorContent = document.getElementById("editor-content");
  const saveNotesBtn = document.getElementById("save-notes-btn");
  const saveStatus = document.getElementById("save-status");
  
  // Kvíz
  const quizContainer = document.getElementById("quiz-container");
  
  // TDM kalkulačka tab
  const tdmCalcContainer = document.getElementById("tdm-calc-container");

  // Statistiky
  const statTotal = document.getElementById("stat-total");
  const statMastered = document.getElementById("stat-mastered");
  const statMasteredPct = document.getElementById("stat-mastered-pct");
  const statLearning = document.getElementById("stat-learning");
  const statLearningPct = document.getElementById("stat-learning-pct");
  const statQuizScore = document.getElementById("stat-quiz-score");
  const statQuizCount = document.getElementById("stat-quiz-count");

  // Export / Import
  const exportBtn = document.getElementById("export-btn");
  const importBtn = document.getElementById("import-btn");
  const importFile = document.getElementById("import-file");

  // TDM Trenažér panel
  const pkSimBtn = document.getElementById("ekg-sim-btn"); // Zůstává ID z UI designu
  const pkSimPanel = document.getElementById("pk-sim-panel");

  // --- OTEVŘENÍ / ZAVŘENÍ PK SIMULÁTORU ---
  if (pkSimBtn && pkSimPanel) {
    pkSimBtn.addEventListener("click", () => {
      pkSimPanel.classList.toggle("open");
      if (pkSimPanel.classList.contains("open") && window.pkSimulator) {
        window.pkSimulator.resizeCanvas();
        window.pkSimulator.updateSimulator();
        pkSimPanel.scrollIntoView({ behavior: "smooth" });
      }
    });
  }

  // --- KLÍČOVÉ FILTRY PRO KAPITOLU ---
  const rebuildFilters = () => {
    if (!categoryFilter || !systemFilter) return;
    const activeQuestions = state.questions.filter(q => q.chapter === state.activeChapter);
    
    const cats = [...new Set(activeQuestions.map(q => q.category))].sort();
    categoryFilter.innerHTML = `<option value="all">Všechny kategorie</option>` +
      cats.map(cat => `<option value="${cat}">${cat}</option>`).join("");
      
    const systems = [...new Set(activeQuestions.map(q => q.organSystem))].sort();
    systemFilter.innerHTML = `<option value="all">Všechny systémy</option>` +
      systems.map(sys => `<option value="${sys}">${sys}</option>`).join("");
  };

  // --- KLIKNUTÍ NA KAPITOLU ---
  if (chapterTabs) {
    chapterTabs.addEventListener("click", (e) => {
      const btn = e.target.closest(".chapter-tab");
      if (!btn) return;
      
      const targetChapter = btn.getAttribute("data-chapter");
      if (state.activeChapter === targetChapter) return;
      
      state.activeChapter = targetChapter;
      localStorage.setItem("pharm_active_chapter", state.activeChapter);
      
      // Upravit aktivní třídu v UI
      document.querySelectorAll(".chapter-tab").forEach(tab => {
        tab.classList.toggle("active", tab.getAttribute("data-chapter") === state.activeChapter);
      });
      
      // Vyresetovat hodnoty filtrů při přepnutí kapitol
      categoryFilter.value = "all";
      systemFilter.value = "all";
      
      // Znovu sestavit filtry pro novou kapitolu a překreslit
      rebuildFilters();
      renderCards();
      updateDashboard();
    });
  }

  // --- ZPĚT NA ROZCESTNÍK ---
  const backHubBtn = document.getElementById("back-hub-btn");
  if (backHubBtn) {
    backHubBtn.addEventListener("click", () => {
      window.location.href = "../index.html";
    });
  }

  // --- LEITNER SYSTEM HELPERS ---
  const getLeitnerData = (id) => {
    const val = state.userProgress[id];
    if (!val) return { box: 1, nextReviewDate: 0, tested: false };
    if (typeof val === "string") {
      if (val === "mastered") return { box: 4, nextReviewDate: Date.now() + 10 * 86400000, tested: true };
      if (val === "learning") return { box: 2, nextReviewDate: Date.now() + 2 * 86400000, tested: true };
      return { box: 1, nextReviewDate: 0, tested: false };
    }
    return {
      box: val.box || 1,
      nextReviewDate: val.nextReviewDate || 0,
      tested: val.tested !== undefined ? val.tested : true
    };
  };

  const isDue = (id) => {
    const data = getLeitnerData(id);
    if (!data.tested) return false;
    return Date.now() >= data.nextReviewDate;
  };

  const setLeitnerStatus = (id, isCorrect) => {
    const data = getLeitnerData(id);
    let newBox = data.box;
    if (isCorrect) {
      newBox = Math.min(4, newBox + 1);
    } else {
      newBox = 1;
    }
    const intervals = [0, 1, 2, 5, 10];
    const days = intervals[newBox] || 1;
    state.userProgress[id] = {
      box: newBox,
      nextReviewDate: Date.now() + days * 86400000,
      tested: true
    };
    saveState();
    updateDashboard();
    renderCards();
  };

  // --- AKTUALIZACE STATISTIK ---
  const updateDashboard = () => {
    const activeQuestions = state.questions.filter(q => q.chapter === state.activeChapter);
    const total = activeQuestions.length;
    let box1 = 0, box2 = 0, box3 = 0, box4 = 0;
    let dueCount = 0;

    activeQuestions.forEach(q => {
      const data = getLeitnerData(q.id);
      if (data.box === 1) box1++;
      else if (data.box === 2) box2++;
      else if (data.box === 3) box3++;
      else if (data.box === 4) box4++;

      if (isDue(q.id)) dueCount++;
    });

    const masteredPct = Math.round((box4 / total) * 100) || 0;

    if (statTotal) statTotal.textContent = total;
    if (statMasteredPct) statMasteredPct.textContent = `Zvládnuté: ${masteredPct} % (${box4} z ${total})`;

    const box1El = document.getElementById("box-1-count");
    const box2El = document.getElementById("box-2-count");
    const box3El = document.getElementById("box-3-count");
    const box4El = document.getElementById("box-4-count");
    const dueCountEl = document.getElementById("stat-due-count");
    const dueDescEl = document.getElementById("stat-due-desc");
    const dueBtn = document.getElementById("study-due-btn");

    if (box1El) box1El.textContent = box1;
    if (box2El) box2El.textContent = box2;
    if (box3El) box3El.textContent = box3;
    if (box4El) box4El.textContent = box4;

    if (dueCountEl) dueCountEl.textContent = dueCount;
    if (dueDescEl) {
      dueDescEl.textContent = dueCount > 0 ? `${dueCount} karet vyžaduje dnešní zopakováni!` : "Všechny karty jsou aktuální!";
    }
    if (dueBtn) {
      dueBtn.style.display = dueCount > 0 ? "block" : "none";
    }

    if (statQuizScore && statQuizCount) {
      if (state.quizStats.totalCount > 0) {
        const scorePct = Math.round((state.quizStats.correctCount / state.quizStats.totalCount) * 100);
        statQuizScore.textContent = `${scorePct} %`;
        statQuizCount.textContent = `Zodpovězeno ${state.quizStats.totalCount} otázek (${state.quizStats.correctCount} správně)`;
      } else {
        statQuizScore.textContent = "0 %";
        statQuizCount.textContent = "Zodpovězeno 0 otázek";
      }
    }
  };

  const studyDueBtn = document.getElementById("study-due-btn");
  if (studyDueBtn) {
    studyDueBtn.addEventListener("click", () => {
      statusFilter.value = "due";
      renderCards();
      cardsGrid.scrollIntoView({ behavior: "smooth" });
    });
  }

  // --- RENDER KARET ---
  const renderCards = () => {
    cardsGrid.innerHTML = "";
    
    const searchVal = searchInput.value.toLowerCase().trim();
    const catVal = categoryFilter.value;
    const systemVal = systemFilter.value;
    const statVal = statusFilter.value;

    const filtered = state.questions.filter(q => {
      if (q.chapter !== state.activeChapter) return false;
      if (catVal !== "all" && q.category !== catVal) return false;
      if (systemVal !== "all" && q.organSystem !== systemVal) return false;

      const leitner = getLeitnerData(q.id);
      if (statVal === "due" && !isDue(q.id)) return false;
      if (statVal === "box-1" && leitner.box !== 1) return false;
      if (statVal === "box-2" && leitner.box !== 2) return false;
      if (statVal === "box-3" && leitner.box !== 3) return false;
      if (statVal === "box-4" && leitner.box !== 4) return false;
      if (statVal === "not-started" && leitner.tested) return false;

      if (searchVal) {
        const titleMatch = q.title.toLowerCase().includes(searchVal);
        const keywordMatch = q.keyTerms.some(k => k.toLowerCase().includes(searchVal));
        const notesMatch = (state.userNotes[q.id] || "").toLowerCase().includes(searchVal);
        if (!titleMatch && !keywordMatch && !notesMatch) return false;
      }

      return true;
    });

    if (filtered.length === 0) {
      cardsGrid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 40px; color: var(--text-secondary);">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-bottom: 12px; color: var(--text-muted);"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg>
          <h3>Nebyly nalezeny žádné otázky</h3>
          <p style="margin-top: 8px;">Zkuste upravit vyhledávaný výraz nebo filtry.</p>
          <button id="reset-filters-btn" class="btn btn-primary" style="margin-top: 16px;">Obnovit filtry</button>
        </div>
      `;
      const resetBtn = document.getElementById("reset-filters-btn");
      if (resetBtn) {
        resetBtn.addEventListener("click", () => {
          searchInput.value = "";
          categoryFilter.value = "all";
          systemFilter.value = "all";
          statusFilter.value = "all";
          renderCards();
        });
      }
      return;
    }

    filtered.forEach((q) => {
      const cardContainer = document.createElement("div");
      cardContainer.className = "card-container";
      
      const leitner = getLeitnerData(q.id);
      let statusLabel = `Box ${leitner.box}`;
      let statusClass = `status-box-${leitner.box}`;
      if (isDue(q.id)) {
        statusLabel = "K opakování";
        statusClass = "status-due";
      }

      const keywordsTags = q.keyTerms.map(k => `<span class="keyword-tag">${k}</span>`).join("");
      
      let catClass = "";
      if (q.category === "Lékové formy") catClass = "cat-forms";
      else if (q.category === "Farmakokinetika") catClass = "cat-kin";
      else if (q.category === "Farmakodynamika") catClass = "cat-dyn";
      else if (q.category === "TDM & Klinická") catClass = "cat-tdm";
      else if (q.category === "Legislativa & Toxikologie") catClass = "cat-leg";
      else if (q.category === "Farmakogenomika") catClass = "cat-genom";
      // Speciální farmakologie
      else if (q.category === "ANS & Receptorové systémy") catClass = "cat-ans";
      else if (q.category === "Analgetika, Spazmolytika & NSAIDs") catClass = "cat-analg";
      else if (q.category === "Antiinfektiva & Imunitní systém") catClass = "cat-inf";
      else if (q.category === "CNS & Psychofarmaka") catClass = "cat-cns";
      else if (q.category === "Endokrinologie & Hormony") catClass = "cat-endo";
      else if (q.category === "GIT, Respirační & Urogenitální") catClass = "cat-git";
      else if (q.category === "Kardiovaskulární systém") catClass = "cat-kvs";
      else if (q.category.includes("Metabolismus")) catClass = "cat-metab";
      else if (q.category === "Onkologie & Toxikologie") catClass = "cat-onk";

      cardContainer.innerHTML = `
        <div class="card-inner" data-id="${q.id}">
          <!-- Přední strana -->
          <div class="card-front">
            <div class="card-badges">
              <span class="card-category ${catClass}">${q.category}</span>
              <span class="card-system-badge">${q.organSystem}</span>
              ${q.notOnExam ? '<span class="card-exam-badge not-on-exam">Není na zkoušce</span>' : ''}
            </div>
            <h3 class="card-title">${q.title}</h3>
            
            <div class="card-footer">
              <div class="card-status-badge">
                <span class="status-dot ${statusClass}"></span>
                <span>${statusLabel}</span>
              </div>
              <div class="card-actions">
                <button class="btn btn-secondary btn-flip-trigger" title="Zobrazit klíčové pojmy">Otočit</button>
                <button class="btn btn-primary btn-study-trigger">Studovat</button>
              </div>
            </div>
          </div>
          
          <!-- Zadní strana -->
          <div class="card-back">
            <div>
              <div class="card-back-title">Klíčové pojmy a zařazení</div>
              <div class="keywords-list">
                ${keywordsTags}
              </div>
            </div>
            
            <div class="card-footer">
              <button class="btn btn-secondary btn-flip-back" title="Zpět na název">Zpět</button>
              <button class="btn btn-primary btn-study-trigger">Studovat</button>
            </div>
          </div>
        </div>
      `;

      const cardInner = cardContainer.querySelector(".card-inner");
      
      cardInner.addEventListener("click", (e) => {
        if (e.target.classList.contains("btn-study-trigger")) {
          e.stopPropagation();
          openModal(q.id);
          return;
        }

        if (e.target.classList.contains("btn-flip-trigger") || e.target.classList.contains("btn-flip-back")) {
          e.stopPropagation();
          cardInner.classList.toggle("flipped");
          return;
        }

        if (!e.target.closest(".card-footer")) {
          cardInner.classList.toggle("flipped");
        }
      });

      cardsGrid.appendChild(cardContainer);
    });
  };

  // --- MODÁLNÍ OKNO / OTEVŘENÍ DETAILU ---
  const openModal = (id) => {
    const q = state.questions.find(item => item.id === id);
    if (!q) return;

    state.activeQuestion = q;
    
    // Nastavení hlavičky
    modalCategory.innerHTML = `${q.category.toUpperCase()} | ${q.organSystem.toUpperCase()}${q.notOnExam ? ' <span class="modal-exam-badge not-on-exam">Není na zkoušce</span>' : ''}`;
    modalCategory.className = "modal-category";
    
    if (q.category === "Lékové formy") modalCategory.classList.add("cat-forms");
    else if (q.category === "TDM & Klinická") modalCategory.classList.add("cat-tdm");
    else if (q.category === "Legislativa & Toxikologie") modalCategory.classList.add("cat-leg");
    else if (q.category === "Farmakogenomika") modalCategory.classList.add("cat-genom");
    
    modalTitle.textContent = q.title;

    // Přepnutí na první záložku
    switchTab("panel-study");

    // Načtení výkladu
    studyContent.innerHTML = q.detailContent || "";

    // Načtení poznámek
    editorContent.innerHTML = state.userNotes[q.id] || "";

    // Nastavení stavu učení
    const currentStatus = state.userProgress[q.id] || "not-started";
    document.querySelectorAll(".status-btn").forEach(btn => {
      btn.classList.remove("active");
      if (btn.getAttribute("data-status") === currentStatus) {
        btn.classList.add("active");
      }
    });

    // Kvíz
    renderQuiz(q);

    // Načtení TDM interaktivní záložky
    renderTdmTab(q);

    detailModal.showModal();
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    detailModal.close();
    state.activeQuestion = null;
    document.body.style.overflow = "";
    renderCards();
    updateDashboard();
  };

  modalClose.addEventListener("click", closeModal);

  detailModal.addEventListener("click", (e) => {
    if (e.target === detailModal) {
      closeModal();
    }
  });

  // --- LOGIKA ZÁLOŽEK ---
  const switchTab = (tabId) => {
    state.activeTab = tabId;
    
    document.querySelectorAll(".tab-btn").forEach(btn => {
      btn.classList.remove("active");
      if (btn.getAttribute("data-tab") === tabId) {
        btn.classList.add("active");
      }
    });

    document.querySelectorAll(".tab-panel").forEach(panel => {
      panel.classList.remove("active");
    });

    const activePanel = document.getElementById(tabId);
    if (activePanel) {
      activePanel.classList.add("active");
    }
  };

  document.querySelectorAll(".tab-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const tabId = btn.getAttribute("data-tab");
      switchTab(tabId);
    });
  });

  // --- RENDER TDM TABU U SPECIFICKÝCH KARET ---
  const renderTdmTab = (q) => {
    tdmCalcContainer.innerHTML = "";
    
    // Zjistíme, zda se karta váže k léku s TDM
    let matchedDrug = null;
    const titleLower = q.title.toLowerCase();
    
    if (titleLower.includes("digoxin")) matchedDrug = "digoxin";
    else if (titleLower.includes("vankomycin")) matchedDrug = "vancomycin";
    else if (titleLower.includes("aminoglyk")) matchedDrug = "gentamicin";
    else if (titleLower.includes("teofylin")) matchedDrug = "gentamicin"; // theophylline can run in custom mode
    
    if (matchedDrug || q.category === "TDM & Klinická") {
      const drugId = matchedDrug || "custom";
      const drugName = matchedDrug ? (matchedDrug === "vancomycin" ? "Vancomycin" : matchedDrug === "gentamicin" ? "Gentamicin" : "Digoxin") : "vlastní simulovaný lék";
      
      tdmCalcContainer.innerHTML = `
        <div class="tdm-calculator-panel">
          <h3>TDM Trenažér pro: ${drugName}</h3>
          <p style="margin-top: 8px; color: var(--text-secondary);">Tento lék vyžaduje terapeutické monitorování. Můžete spustit vizuální simulaci jeho koncentračních křivek v našem interaktivním trenažéru na hlavní stránce.</p>
          
          <button id="open-in-simulator-btn" class="btn btn-pk" style="margin-top: 16px;">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
            Otevřít v PK trenažéru
          </button>
        </div>
      `;
      
      const openSimBtn = document.getElementById("open-in-simulator-btn");
      if (openSimBtn) {
        openSimBtn.addEventListener("click", () => {
          closeModal();
          
          // Otevřeme panel simulátoru
          if (pkSimPanel && !pkSimPanel.classList.contains("open")) {
            pkSimPanel.classList.add("open");
          }
          
          // Nastavíme lék v simulátoru
          if (window.pkSimulator) {
            window.pkSimulator.selectDrug(drugId);
            window.pkSimulator.resizeCanvas();
            window.pkSimulator.updateSimulator();
          }
          
          // Odrolujeme na simulátor
          if (pkSimPanel) {
            pkSimPanel.scrollIntoView({ behavior: "smooth" });
          }
        });
      }
    } else {
      tdmCalcContainer.innerHTML = `
        <div style="text-align: center; padding: 20px; color: var(--text-muted);">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin-bottom: 8px; opacity: 0.5;"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
          <p>Tento studijní okruh nevyžaduje přímé klinické monitorování TDM. Simulátor můžete vyzkoušet pro vybrané léky (Vancomycin, Digoxin, Gentamicin) z panelu na hlavní stránce.</p>
        </div>
      `;
    }
  };

  // --- LOGIKA STAVU UČENÍ (V MODÁLU) ---
  document.querySelectorAll(".status-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      if (!state.activeQuestion) return;

      const newStatus = btn.getAttribute("data-status");
      state.userProgress[state.activeQuestion.id] = newStatus;
      saveState();

      document.querySelectorAll(".status-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
    });
  });

  // --- WYSIWYG NOTE EDITOR ---
  document.querySelectorAll(".editor-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const command = btn.getAttribute("data-command");
      const value = btn.getAttribute("data-value") || null;
      document.execCommand(command, false, value);
      editorContent.focus();
    });
  });

  // Debounce pro automatické ukládání
  let saveTimeout;
  editorContent.addEventListener("input", () => {
    if (!state.activeQuestion) return;

    clearTimeout(saveTimeout);
    saveTimeout = setTimeout(() => {
      state.userNotes[state.activeQuestion.id] = editorContent.innerHTML;
      saveState();
      
      saveStatus.classList.add("show");
      setTimeout(() => {
        saveStatus.classList.remove("show");
      }, 2000);
    }, 1000);
  });

  saveNotesBtn.addEventListener("click", () => {
    if (!state.activeQuestion) return;

    state.userNotes[state.activeQuestion.id] = editorContent.innerHTML;
    saveState();
    
    saveStatus.innerHTML = `
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
      Uloženo úspěšně
    `;
    saveStatus.classList.add("show");
    
    setTimeout(() => {
      saveStatus.classList.remove("show");
      setTimeout(() => {
        saveStatus.innerHTML = `
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
          Změny automaticky uloženy
        `;
      }, 300);
    }, 2000);
  });

  // --- LOGIKA INTERAKTIVNÍHO KVÍZU ---
  const renderQuiz = (q) => {
    quizContainer.innerHTML = "";
    const quizQuestions = q.quiz || [];

    if (quizQuestions.length === 0) {
      quizContainer.innerHTML = `
        <div style="text-align: center; padding: 20px; color: var(--text-muted);">
          <p>Pro toto téma zatím není dostupný kvíz.</p>
        </div>
      `;
      return;
    }

    quizQuestions.forEach((item, questionIndex) => {
      const quizCard = document.createElement("div");
      quizCard.className = "quiz-card";
      
      const optionsHTML = item.options.map((opt, optIndex) => {
        const letter = String.fromCharCode(65 + optIndex); // A, B, C, D
        return `
          <button class="quiz-option" data-question-idx="${questionIndex}" data-opt-idx="${optIndex}">
            <span class="quiz-option-letter">${letter}</span>
            <span class="quiz-option-text">${parseMedicalMarkdown(opt)}</span>
          </button>
        `;
      }).join("");

      quizCard.innerHTML = `
        <div class="quiz-question">${questionIndex + 1}. ${parseMedicalMarkdown(item.question)}</div>
        <div class="quiz-options">
          ${optionsHTML}
        </div>
        <div class="quiz-explanation-container" id="explanation-${questionIndex}"></div>
      `;

      const optionsButtons = quizCard.querySelectorAll(".quiz-option");
      let questionAnswered = false;

      optionsButtons.forEach(btn => {
        btn.addEventListener("click", () => {
          if (questionAnswered) return;

          questionAnswered = true;
          const optIdx = parseInt(btn.getAttribute("data-opt-idx"));
          const isCorrect = optIdx === item.correct;

          optionsButtons.forEach(b => b.classList.add("disabled"));

          if (isCorrect) {
            btn.classList.add("correct");
            triggerConfetti(btn);
            state.quizStats.correctCount++;
            state.quizStats.totalCount++;
          } else {
            btn.classList.add("incorrect");
            optionsButtons[item.correct].classList.add("correct");
            state.quizStats.totalCount++;
          }

          saveState();
          updateDashboard();

          // Zobrazení detailního vysvětlení
          const expContainer = quizCard.querySelector(`#explanation-${questionIndex}`);
          const explanationText = item.explanations ? item.explanations[optIdx] : (isCorrect ? "Správná úvaha!" : "Nesprávná úvaha.");
          
          expContainer.innerHTML = `
            <div class="quiz-explanation ${isCorrect ? 'correct' : 'incorrect'}">
              <strong>${isCorrect ? 'Správně!' : 'Nesprávně.'}</strong> ${parseMedicalMarkdown(explanationText)}
            </div>
          `;
        });
      });

      quizContainer.appendChild(quizCard);
    });
  };

  // --- FILTROVÁNÍ A HLEDÁNÍ ---
  searchInput.addEventListener("input", renderCards);
  categoryFilter.addEventListener("change", renderCards);
  systemFilter.addEventListener("change", renderCards);
  statusFilter.addEventListener("change", renderCards);

  // --- PŘEPÍNAČ TÉMATU ---
  themeToggle.addEventListener("click", () => {
    if (document.body.classList.contains("dark-mode")) {
      document.body.classList.remove("dark-mode");
      state.theme = "light";
    } else {
      document.body.classList.add("dark-mode");
      state.theme = "dark";
    }
    localStorage.setItem("pharm_theme", state.theme);
  });

  // --- EXPORT A IMPORT DAT ---
  exportBtn.addEventListener("click", () => {
    const exportData = {
      progress: state.userProgress,
      notes: state.userNotes,
      quiz: state.quizStats
    };

    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(exportData));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", "farmakologie_studijni_data.json");
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  });

  importBtn.addEventListener("click", () => {
    importFile.click();
  });

  importFile.addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const imported = JSON.parse(event.target.result);
        
        if (imported.progress) state.userProgress = imported.progress;
        if (imported.notes) state.userNotes = imported.notes;
        if (imported.quiz) state.quizStats = imported.quiz;

        saveState();
        alert("Data byla úspěšně importována. Stránka se nyní obnoví.");
        window.location.reload();
      } catch (err) {
        alert("Chyba při čtení souboru. Ujistěte se, že jde o platný JSON.");
      }
    };
    reader.readAsText(file);
  });

  // --- FUNKCE PRO EFEKT KONFET ---
  const triggerConfetti = (element) => {
    const rect = element.getBoundingClientRect();
    const xCenter = rect.left + rect.width / 2 + window.scrollX;
    const yCenter = rect.top + rect.height / 2 + window.scrollY;

    const colors = ['#10b981', '#34d399', '#059669', '#3b82f6', '#f59e0b', '#8b5cf6', '#ec4899'];
    const shapes = ['50%', '0%', '0% 50%'];

    for (let i = 0; i < 35; i++) {
      const particle = document.createElement('div');
      particle.className = 'confetti-particle';
      
      particle.style.borderRadius = shapes[Math.floor(Math.random() * shapes.length)];
      particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      
      const size = 6 + Math.random() * 8;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      
      particle.style.left = `${xCenter}px`;
      particle.style.top = `${yCenter}px`;
      
      const angle = Math.random() * Math.PI * 2;
      const distance = 40 + Math.random() * 90;
      const xDest = Math.cos(angle) * distance;
      const yDest = Math.sin(angle) * distance - 20; 
      const rotation = (Math.random() * 360) + 'deg';
      
      particle.style.setProperty('--x', `${xDest}px`);
      particle.style.setProperty('--y', `${yDest}px`);
      particle.style.setProperty('--r', rotation);
      
      particle.style.animationDelay = `${Math.random() * 0.15}s`;
      
      document.body.appendChild(particle);
      
      setTimeout(() => {
        particle.remove();
      }, 1300);
    }
  };

  // --- INICIALIZACE STRÁNKY ---
  // Nastavení správné kapitoly v UI při spuštění
  document.querySelectorAll(".chapter-tab").forEach(tab => {
    tab.classList.toggle("active", tab.getAttribute("data-chapter") === state.activeChapter);
  });

  rebuildFilters();
  renderCards();
  updateDashboard();

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
    { role: "assistant", text: "Ahoj! Jsem tvůj medicínský asistent pro Farmakologii. Pomohu ti s mechanismy účinku léčiv, kinetikou, interakcemi, TDM trenažérem nebo kvízy. S čím dnes začneme?" }
  ];

  // System instruction for pharmacology
  const systemInstructionText = "Jste odborník na farmakologii. Pomáháte studentům lékařství s mechanismy účinku léčiv, farmakokinetikou, nežádoucími účinky, indikacemi a interakcemi. Odpovídejte věcně, stručně a odborně česky. Používejte markdown pro přehlednost.";

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

  // Send request via backend proxy with streaming
  const callProxyServerStream = async (messages, subject, onChunk, onStart) => {
    const response = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
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

    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:streamGenerateContent?alt=sse&key=${key}`, {
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
        await callGeminiDirectlyStream(savedKey, chatHistory, "farmakologie", onChunk, onStart);
      } else {
        await callProxyServerStream(chatHistory, "farmakologie", onChunk, onStart);
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

  // Render suggestion chips
  const suggestions = [
    { label: "First-pass efekt", query: "Vysvětli, co znamená first-pass efekt léčiva." },
    { label: "Beta-blokátory", query: "Jaký je mechanismus účinku a hlavní nežádoucí účinky beta-blokátorů?" },
    { label: "TDM vancomycinu", query: "Proč a jak se provádí terapeutické monitorování (TDM) vankomycinu?" }
  ];

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
  // --- FARMAKO-PŘIŘAZOVAČKA LOGIKA ---
  const matchingGameBtn = document.getElementById("matching-game-open-btn");
  const matchingModal = document.getElementById("matching-modal");
  const matchingModalClose = document.getElementById("matching-modal-close");
  const matchingGrid = document.getElementById("matching-grid");
  const gameTimerEl = document.getElementById("game-timer");
  const gameScoreEl = document.getElementById("game-score");
  const gameCompletionMsg = document.getElementById("game-completion-msg");

  let gameTimerInterval = null;
  let gameSeconds = 0;
  let selectedTile = null;
  let matchedPairsCount = 0;

  const startMatchingGame = () => {
    if (!matchingGrid) return;
    matchingGrid.innerHTML = "";
    if (gameCompletionMsg) gameCompletionMsg.style.display = "none";
    
    clearInterval(gameTimerInterval);
    gameSeconds = 0;
    matchedPairsCount = 0;
    selectedTile = null;
    if (gameTimerEl) gameTimerEl.textContent = "00:00";
    if (gameScoreEl) gameScoreEl.textContent = "0 / 6";

    // Vybrat 6 náhodných témat s titulkem a klíčovými pojmy
    const available = state.questions.filter(q => q.keyTerms && q.keyTerms.length > 0);
    const shuffled = [...available].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 6);

    const leftTiles = [];
    const rightTiles = [];

    selected.forEach((q, idx) => {
      leftTiles.push({ id: idx, text: q.title, type: "left" });
      const clue = q.keyTerms.slice(0, 3).join(" • ");
      rightTiles.push({ id: idx, text: clue, type: "right" });
    });

    const shuffledLeft = [...leftTiles].sort(() => 0.5 - Math.random());
    const shuffledRight = [...rightTiles].sort(() => 0.5 - Math.random());

    shuffledLeft.forEach(tile => {
      const el = document.createElement("div");
      el.className = "matching-tile tile-left";
      el.dataset.pairId = tile.id;
      el.textContent = tile.text;
      matchingGrid.appendChild(el);
    });

    shuffledRight.forEach(tile => {
      const el = document.createElement("div");
      el.className = "matching-tile tile-right";
      el.dataset.pairId = tile.id;
      el.textContent = tile.text;
      matchingGrid.appendChild(el);
    });

    gameTimerInterval = setInterval(() => {
      gameSeconds++;
      const m = String(Math.floor(gameSeconds / 60)).padStart(2, '0');
      const s = String(gameSeconds % 60).padStart(2, '0');
      if (gameTimerEl) gameTimerEl.textContent = `${m}:${s}`;
    }, 1000);

    if (matchingModal) {
      if (typeof matchingModal.showModal === "function") matchingModal.showModal();
      else matchingModal.setAttribute("open", "true");
    }
  };

  if (matchingGameBtn) {
    matchingGameBtn.addEventListener("click", startMatchingGame);
  }

  if (matchingModalClose && matchingModal) {
    matchingModalClose.addEventListener("click", () => {
      clearInterval(gameTimerInterval);
      if (typeof matchingModal.close === "function") matchingModal.close();
      else matchingModal.removeAttribute("open");
    });
  }

  if (matchingGrid) {
    matchingGrid.addEventListener("click", (e) => {
      const tile = e.target.closest(".matching-tile");
      if (!tile || tile.classList.contains("matched")) return;

      if (!selectedTile) {
        selectedTile = tile;
        tile.classList.add("selected");
      } else if (selectedTile === tile) {
        tile.classList.remove("selected");
        selectedTile = null;
      } else {
        if (selectedTile.dataset.pairId === tile.dataset.pairId && selectedTile !== tile) {
          selectedTile.classList.remove("selected");
          selectedTile.classList.add("matched");
          tile.classList.add("matched");
          selectedTile = null;
          matchedPairsCount++;
          if (gameScoreEl) gameScoreEl.textContent = `${matchedPairsCount} / 6`;
          if (matchedPairsCount === 6) {
            clearInterval(gameTimerInterval);
            if (gameCompletionMsg) gameCompletionMsg.style.display = "block";
          }
        } else {
          tile.classList.add("wrong");
          selectedTile.classList.add("wrong");
          const temp = selectedTile;
          selectedTile = null;
          setTimeout(() => {
            tile.classList.remove("wrong", "selected");
            temp.classList.remove("wrong", "selected");
          }, 600);
        }
      }
    });
  }
});
