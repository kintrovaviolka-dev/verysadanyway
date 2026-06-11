// app.js - Aplikační logika studijního portálu Obecné Dermatologie

document.addEventListener("DOMContentLoaded", () => {
  // 1. Načtení databáze otázek
  const QUESTIONS = (window.DATA_DERMATOLOGIE || []).map(q => {
    let category = "Obecná";
    if (q.section.includes("Speciální")) {
      category = "Speciální";
    } else if (q.section.includes("Venerologie")) {
      category = "Venerologie";
    }
    return {
      ...q,
      category
    };
  });

  // Ověření, zda se data načetla
  if (QUESTIONS.length === 0) {
    console.error("Chyba: Databáze otázek z dermatologie je prázdná nebo nebyla správně načtena.");
    document.getElementById("cards-grid").innerHTML = "<p class='text-center text-rose'>Chyba při načítání databáze otázek. Zkontrolujte prosím datové soubory.</p>";
    return;
  }

  // 2. Definice intervalů Leitnerova systému (v milisekundách)
  const LEITNER_INTERVALS = {
    1: 24 * 60 * 60 * 1000,      // Box 1: 1 den
    2: 2 * 24 * 60 * 60 * 1000,  // Box 2: 2 dny
    3: 5 * 24 * 60 * 60 * 1000,  // Box 3: 5 dní
    4: 10 * 24 * 60 * 60 * 1000  // Box 4: 10 dní (Zvládnuté)
  };

  // 3. Inicializace stavu (Pokrok uživatele) z localStorage
  let userProgress = JSON.parse(localStorage.getItem("dermatologie_progress")) || {};
  
  // Zajištění, že všechny otázky mají záznam v progressu
  QUESTIONS.forEach(q => {
    if (!userProgress[q.id]) {
      userProgress[q.id] = {
        box: 1,
        lastReviewed: null,
        nextReview: null, // null znamená, že nebyla nikdy testována
        testedCount: 0,
        correctCount: 0
      };
    }
  });
  saveProgress();

  // 4. Globální stav aplikace
  let activeQuestion = null;
  let activeTab = "tab-study";
  let activeFilterCategory = "all";
  let activeFilterSection = "all";
  let activeFilterStatus = "all";
  let activeSearchQuery = "";
  
  // Herní stav pro přiřazovačku
  let gameSelectedTerm = null;
  let gameSelectedDesc = null;
  let gamePairsLeft = 0;
  let gameErrorsCount = 0;
  let gameCurrentPairs = []; // Obsahuje aktivní dvojice v aktuálním kole

  // 5. DOM Elementy
  const cardsGrid = document.getElementById("cards-grid");
  const searchInput = document.getElementById("search-input");
  const categoryFilter = document.getElementById("category-filter");
  const sectionFilter = document.getElementById("section-filter");
  const statusFilter = document.getElementById("status-filter");
  const totalQuestionsCountEl = document.getElementById("total-questions-count");

  // Dynamická inicializace celkového počtu otázek
  if (totalQuestionsCountEl) {
    totalQuestionsCountEl.textContent = QUESTIONS.length;
  }
  
  // Dom elementů statistik
  const statProgressPct = document.getElementById("stat-progress-pct");
  const statProgressBar = document.getElementById("stat-progress-bar");
  const statProgressRatio = document.getElementById("stat-progress-ratio");
  const box1CountEl = document.getElementById("box-1-count");
  const box2CountEl = document.getElementById("box-2-count");
  const box3CountEl = document.getElementById("box-3-count");
  const box4CountEl = document.getElementById("box-4-count");
  const statDueCountEl = document.getElementById("stat-due-count");
  const statDueDescEl = document.getElementById("stat-due-desc");
  const studyDueBtn = document.getElementById("study-due-btn");
  
  // Dialogové okno
  const detailDialog = document.getElementById("detail-dialog");
  const dialogCloseBtn = document.getElementById("dialog-close");
  const dialogTitle = document.getElementById("dialog-title");
  const dialogSection = document.getElementById("dialog-section");
  const tabBtns = document.querySelectorAll(".tab-btn");
  const tabPanels = document.querySelectorAll(".tab-panel");
  
  // Výkladové elementy
  const studyDefinition = document.getElementById("study-definition");
  const studyEtiology = document.getElementById("study-etiology");
  const studyPathogenesis = document.getElementById("study-pathogenesis");
  const studyMacroscopy = document.getElementById("study-macroscopy");
  const studyMicroscopy = document.getElementById("study-microscopy");
  const studyClinical = document.getElementById("study-clinical");
  const leitnerBtns = document.querySelectorAll(".leitner-btn");
  
  // Kvízové elementy
  const quizContainer = document.getElementById("quiz-container");
  
  // Elementy hry
  const gameDialog = document.getElementById("game-dialog");
  const gameOpenBtn = document.getElementById("matching-game-open-btn");
  const gameCloseBtn = document.getElementById("game-close");
  const gameColLeft = document.getElementById("game-column-left");
  const gameColRight = document.getElementById("game-column-right");
  const gameLeftCountEl = document.getElementById("game-left-count");
  const gameErrorsEl = document.getElementById("game-errors");
  const gameResetBtn = document.getElementById("game-reset-btn");
  
  // Přepínač motivu
  const themeToggle = document.getElementById("theme-toggle");

  // 6. Funkce pro správu uložení
  function saveProgress() {
    localStorage.setItem("dermatologie_progress", JSON.stringify(userProgress));
  }

  // 7. Vyhodnocení, zda je karta "Due" (k opakování)
  function isCardDue(id) {
    const qProgress = userProgress[id];
    if (!qProgress) return true;
    
    // Pokud nebyla nikdy testována/prohlížena, je due
    if (!qProgress.lastReviewed) return true;
    
    // Pokud nastal čas příštího opakování
    if (qProgress.nextReview && Date.now() >= qProgress.nextReview) return true;
    
    return false;
  }

  // 8. Výpočet a aktualizace statistik na Dashboardu
  function updateDashboard() {
    let totalQuestions = QUESTIONS.length;
    let b1 = 0, b2 = 0, b3 = 0, b4 = 0;
    let dueCount = 0;

    QUESTIONS.forEach(q => {
      const qProgress = userProgress[q.id];
      if (qProgress) {
        if (qProgress.box === 1) b1++;
        else if (qProgress.box === 2) b2++;
        else if (qProgress.box === 3) b3++;
        else if (qProgress.box === 4) b4++;

        if (isCardDue(q.id)) {
          dueCount++;
        }
      }
    });

    // Zvládnuté jsou ty v Boxu 4
    let masteredCount = b4;
    let progressPct = Math.round((masteredCount / totalQuestions) * 100);

    // Vykreslení do UI
    statProgressPct.textContent = `${progressPct} %`;
    statProgressBar.style.width = `${progressPct}%`;
    statProgressRatio.textContent = `Zvládnuté: ${masteredCount} z ${totalQuestions} otázek`;

    box1CountEl.textContent = b1;
    box2CountEl.textContent = b2;
    box3CountEl.textContent = b3;
    box4CountEl.textContent = b4;

    statDueCountEl.textContent = dueCount;
    if (dueCount > 0) {
      statDueDescEl.textContent = `Dnes by ses měl/a podívat na ${dueCount} karet.`;
      studyDueBtn.style.display = "inline-flex";
    } else {
      statDueDescEl.textContent = "Skvělá práce! Pro dnešek máš vše splněno.";
      studyDueBtn.style.display = "none";
    }
  }

  // 9. Vykreslení gridu studijních karet
  function renderQuestionsGrid() {
    cardsGrid.innerHTML = "";
    
    const filteredQuestions = QUESTIONS.filter(q => {
      // Vyhledávání (titulky, kapitoly, klíčová slova, texty)
      const matchesSearch = q.title.toLowerCase().includes(activeSearchQuery) || 
                            q.section.toLowerCase().includes(activeSearchQuery) || 
                            q.keywords.some(k => k.toLowerCase().includes(activeSearchQuery)) ||
                            q.content.definition.toLowerCase().includes(activeSearchQuery) ||
                            q.content.clinical.toLowerCase().includes(activeSearchQuery);
      
      // Filtr podle oboru
      const matchesCategory = activeFilterCategory === "all" || q.category === activeFilterCategory;
      
      // Filtr podle kapitol
      const matchesSection = activeFilterSection === "all" || q.section === activeFilterSection;
      
      // Filtr podle stavu studia
      let matchesStatus = true;
      const qProgress = userProgress[q.id];
      
      if (activeFilterStatus === "due") {
        matchesStatus = isCardDue(q.id);
      } else if (activeFilterStatus === "box-1") {
        matchesStatus = qProgress.box === 1 && qProgress.lastReviewed !== null;
      } else if (activeFilterStatus === "box-2") {
        matchesStatus = qProgress.box === 2;
      } else if (activeFilterStatus === "box-3") {
        matchesStatus = qProgress.box === 3;
      } else if (activeFilterStatus === "box-4") {
        matchesStatus = qProgress.box === 4;
      } else if (activeFilterStatus === "unstudied") {
        matchesStatus = qProgress.lastReviewed === null;
      }

      return matchesSearch && matchesCategory && matchesSection && matchesStatus;
    });

    if (filteredQuestions.length === 0) {
      cardsGrid.innerHTML = "<p class='text-center text-secondary grid-empty-message'>Žádné otázky neodpovídají zvoleným filtrům.</p>";
      return;
    }

    filteredQuestions.forEach(q => {
      const qProgress = userProgress[q.id];
      const card = document.createElement("div");
      card.className = "question-card";
      card.setAttribute("data-id", q.id);

      const isDue = isCardDue(q.id);
      const isUnstudied = qProgress.lastReviewed === null;

      card.innerHTML = `
        <div class="card-top">
          <span class="card-id">${q.id}</span>
          <div class="card-box-indicator b-${qProgress.box}" title="Krabička ${qProgress.box}"></div>
        </div>
        <h3 class="card-title">${q.title}</h3>
        <div class="card-footer">
          <span class="card-section">${q.section}</span>
          ${isDue ? `<span class="due-badge">K opakování</span>` : ""}
          ${isUnstudied && !isDue ? `<span class="due-badge" style="background-color: var(--primary-light); color: var(--primary); border-color: rgba(255,122,89,0.2)">Nová</span>` : ""}
        </div>
      `;

      cardsGrid.appendChild(card);
    });
  }

  // 10. Otevření detailu otázky
  function openQuestionDetail(id) {
    activeQuestion = QUESTIONS.find(q => q.id === id);
    if (!activeQuestion) return;

    // Resetovat aktivní záložku na "Výklad"
    switchTab("tab-study");

    // Naplnění textů
    dialogTitle.textContent = activeQuestion.title;
    dialogSection.textContent = activeQuestion.section;
    
    studyDefinition.innerHTML = activeQuestion.content.definition;
    studyEtiology.innerHTML = activeQuestion.content.etiology;
    studyPathogenesis.innerHTML = activeQuestion.content.pathogenesis;
    studyMacroscopy.innerHTML = activeQuestion.content.macroscopy;
    studyMicroscopy.innerHTML = activeQuestion.content.microscopy;
    studyClinical.innerHTML = activeQuestion.content.clinical;

    // Vykreslení kvízu
    renderQuiz();

    // Zobrazení dialogu
    detailDialog.showModal();
    document.body.style.overflow = "hidden"; // Zamezení rolování na pozadí
  }

  // 11. Přepínání záložek v detailu
  function switchTab(tabId) {
    activeTab = tabId;
    
    tabBtns.forEach(btn => {
      if (btn.getAttribute("data-tab") === tabId) {
        btn.classList.add("active");
      } else {
        btn.classList.remove("active");
      }
    });

    tabPanels.forEach(panel => {
      if (panel.id === tabId) {
        panel.classList.add("active");
      } else {
        panel.classList.remove("active");
      }
    });
  }

  // 12. Vyhodnocení Spaced Repetition (tlačítka Leitnerova systému)
  function gradeQuestion(grade) {
    if (!activeQuestion) return;
    
    const qId = activeQuestion.id;
    const progress = userProgress[qId];
    const now = Date.now();

    let newBox = progress.box;

    if (grade === "wrong") {
      newBox = 1; // Chyba vrací kartu do Boxu 1
    } else if (grade === "good") {
      newBox = Math.min(progress.box + 1, 4); // Slibné posune o 1 box dopředu
    } else if (grade === "perfect") {
      newBox = 4; // Skvělé okamžitě posune do Boxu 4
    }

    progress.box = newBox;
    progress.lastReviewed = now;
    progress.nextReview = now + LEITNER_INTERVALS[newBox];
    progress.testedCount++;

    saveProgress();
    updateDashboard();
    renderQuestionsGrid();
    closeDetailDialog();
  }

  function closeDetailDialog() {
    detailDialog.close();
    document.body.style.overflow = ""; // Obnovení rolování
    activeQuestion = null;
  }

  // 13. Vygenerování a zobrazení kvízu
  function renderQuiz() {
    quizContainer.innerHTML = "";
    
    if (!activeQuestion.quiz || activeQuestion.quiz.length === 0) {
      quizContainer.innerHTML = "<p class='text-center text-muted'>Pro toto téma zatím není dostupný kvíz.</p>";
      return;
    }

    const quizWrapper = document.createElement("div");
    quizWrapper.className = "quiz-wrapper";

    activeQuestion.quiz.forEach((q, qIndex) => {
      const quizCard = document.createElement("div");
      quizCard.className = "quiz-card";
      
      let optionsHTML = "";
      q.options.forEach((opt, optIndex) => {
        optionsHTML += `
          <button class="quiz-option" data-qindex="${qIndex}" data-optindex="${optIndex}">
            ${opt}
          </button>
        `;
      });

      quizCard.innerHTML = `
        <div class="quiz-question">${qIndex + 1}. ${q.question}</div>
        <div class="quiz-options">
          ${optionsHTML}
        </div>
        <div class="quiz-explanation" id="explanation-${qIndex}" style="display: none;">
          <strong>Vysvětlení:</strong> ${q.explanation}
        </div>
      `;

      quizWrapper.appendChild(quizCard);
    });

    quizContainer.appendChild(quizWrapper);

    // Event listenery pro možnosti v kvízu
    const options = quizContainer.querySelectorAll(".quiz-option");
    options.forEach(option => {
      option.addEventListener("click", function() {
        const qIndex = parseInt(this.getAttribute("data-qindex"));
        const optIndex = parseInt(this.getAttribute("data-optindex"));
        const quizData = activeQuestion.quiz[qIndex];
        
        // Zamezení vícenásobné volbě pro stejnou otázku
        const parent = this.closest(".quiz-options");
        if (parent.classList.contains("answered")) return;
        parent.classList.add("answered");

        // Zvýraznění správné a špatné odpovědi
        const btns = parent.querySelectorAll(".quiz-option");
        btns.forEach((btn, idx) => {
          if (idx === quizData.correct) {
            btn.classList.add("correct"); // Správná zelená
          }
          if (idx === optIndex && idx !== quizData.correct) {
            btn.classList.add("incorrect"); // Vybraná špatná červená
          }
        });

        // Statistiky
        if (optIndex === quizData.correct) {
          userProgress[activeQuestion.id].correctCount++;
        }
        saveProgress();

        // Zobrazení vysvětlení
        const explanationBox = document.getElementById(`explanation-${qIndex}`);
        explanationBox.style.display = "block";
      });
    });
  }

  // 14. LOGIKA PŘIŘAZOVACÍ HRY (MATCHING GAME)
  function openMatchingGame() {
    // Výběr 4 náhodných otázek s vyplněnou definicí
    const validQuestions = QUESTIONS.filter(q => q.content && q.content.definition);
    if (validQuestions.length < 4) {
      alert("Nedostatek dat pro přiřazovačku.");
      return;
    }

    // Náhodné promíchání a výběr 4 unikátních otázek
    const shuffled = [...validQuestions].sort(() => 0.5 - Math.random());
    gameCurrentPairs = shuffled.slice(0, 4);

    gameSelectedTerm = null;
    gameSelectedDesc = null;
    gameErrorsCount = 0;
    gamePairsLeft = 4;

    gameErrorsEl.textContent = "0";
    gameLeftCountEl.textContent = "4";

    // Vytvoření seznamu termínů a popisů
    const terms = gameCurrentPairs.map(q => ({
      id: q.id,
      text: q.title
    }));

    const descriptions = gameCurrentPairs.map(q => {
      let shortText = q.content.definition;
      
      // Zkrácení na max 120 znaků pro karty
      if (shortText.length > 130) {
        shortText = shortText.substring(0, 125) + "...";
      }

      return {
        id: q.id,
        text: shortText
      };
    });

    // Náhodně promíchat sloupce nezávisle na sobě
    const shuffledTerms = [...terms].sort(() => 0.5 - Math.random());
    const shuffledDescs = [...descriptions].sort(() => 0.5 - Math.random());

    // Vykreslení do UI
    gameColLeft.innerHTML = "";
    gameColRight.innerHTML = "";

    shuffledTerms.forEach(t => {
      const card = document.createElement("div");
      card.className = "game-card";
      card.setAttribute("data-id", t.id);
      card.textContent = t.text;
      card.addEventListener("click", () => selectTerm(card));
      gameColLeft.appendChild(card);
    });

    shuffledDescs.forEach(d => {
      const card = document.createElement("div");
      card.className = "game-card";
      card.setAttribute("data-id", d.id);
      card.textContent = d.text;
      card.addEventListener("click", () => selectDesc(card));
      gameColRight.appendChild(card);
    });

    gameDialog.showModal();
    document.body.style.overflow = "hidden";
  }

  function selectTerm(card) {
    if (card.classList.contains("matched")) return;

    // Pokud už je něco vybráno, zrušit zvýraznění
    const alreadySelected = gameColLeft.querySelector(".game-card.selected");
    if (alreadySelected) alreadySelected.classList.remove("selected");

    gameSelectedTerm = card;
    card.classList.add("selected");

    checkGameMatch();
  }

  function selectDesc(card) {
    if (card.classList.contains("matched")) return;

    // Pokud už je něco vybráno, zrušit zvýraznění
    const alreadySelected = gameColRight.querySelector(".game-card.selected");
    if (alreadySelected) alreadySelected.classList.remove("selected");

    gameSelectedDesc = card;
    card.classList.add("selected");

    checkGameMatch();
  }

  function checkGameMatch() {
    if (!gameSelectedTerm || !gameSelectedDesc) return;

    const termId = gameSelectedTerm.getAttribute("data-id");
    const descId = gameSelectedDesc.getAttribute("data-id");

    if (termId === descId) {
      // SPRÁVNÁ DVOJICE
      const tCard = gameSelectedTerm;
      const dCard = gameSelectedDesc;

      tCard.classList.remove("selected");
      dCard.classList.remove("selected");
      tCard.classList.add("matched");
      dCard.classList.add("matched");

      gamePairsLeft--;
      gameLeftCountEl.textContent = gamePairsLeft;

      gameSelectedTerm = null;
      gameSelectedDesc = null;

      // Pokud jsou všechny dvojice spárovány
      if (gamePairsLeft === 0) {
        setTimeout(() => {
          alert(`Gratulujeme! Úspěšně jsi přiřadil/a všechny pojmy s počtem chyb: ${gameErrorsCount}.`);
          openMatchingGame(); // Automaticky spustit další kolo
        }, 500);
      }
    } else {
      // ŠPATNÁ DVOJICE
      const tCard = gameSelectedTerm;
      const dCard = gameSelectedDesc;

      tCard.classList.add("wrong");
      dCard.classList.add("wrong");

      gameErrorsCount++;
      gameErrorsEl.textContent = gameErrorsCount;

      gameSelectedTerm = null;
      gameSelectedDesc = null;

      // Zrušení chybného stavu po chvíli
      setTimeout(() => {
        tCard.classList.remove("selected", "wrong");
        dCard.classList.remove("selected", "wrong");
      }, 700);
    }
  }

  // Pomocná funkce pro filtraci kapitol na základě oboru
  function updateChapterFilterOptions() {
    if (!categoryFilter || !sectionFilter) return;
    const selectedCategory = categoryFilter.value;
    let resetSelected = false;
    
    Array.from(sectionFilter.options).forEach(opt => {
      const optCategory = opt.getAttribute("data-category");
      if (!optCategory || selectedCategory === "all" || optCategory === selectedCategory) {
        opt.style.display = "";
      } else {
        opt.style.display = "none";
        if (sectionFilter.value === opt.value) {
          resetSelected = true;
        }
      }
    });
    
    if (resetSelected) {
      sectionFilter.value = "all";
      activeFilterSection = "all";
    }
  }

  function closeMatchingGame() {
    gameDialog.close();
    document.body.style.overflow = "";
  }

  // 15. NASTAVENÍ EVENT LISTENERŮ

  // Kliknutí na kartu
  cardsGrid.addEventListener("click", (e) => {
    const card = e.target.closest(".question-card");
    if (card) {
      openQuestionDetail(card.getAttribute("data-id"));
    }
  });

  // Filtry a vyhledávání
  searchInput.addEventListener("input", (e) => {
    activeSearchQuery = e.target.value.toLowerCase().trim();
    renderQuestionsGrid();
  });

  categoryFilter.addEventListener("change", (e) => {
    activeFilterCategory = e.target.value;
    updateChapterFilterOptions();
    renderQuestionsGrid();
  });

  sectionFilter.addEventListener("change", (e) => {
    activeFilterSection = e.target.value;
    renderQuestionsGrid();
  });

  statusFilter.addEventListener("change", (e) => {
    activeFilterStatus = e.target.value;
    renderQuestionsGrid();
  });

  // Tlačítka pro uzavření a přepínání záložek
  dialogCloseBtn.addEventListener("click", closeDetailDialog);
  
  tabBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const tabId = btn.getAttribute("data-tab");
      switchTab(tabId);
    });
  });

  // Tlačítka Spaced Repetition hodnocení v detailu
  leitnerBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const grade = btn.getAttribute("data-grade");
      gradeQuestion(grade);
    });
  });

  // Tlačítko "Učit se dnešní karty" z dashboardu
  studyDueBtn.addEventListener("click", () => {
    statusFilter.value = "due";
    activeFilterStatus = "due";
    renderQuestionsGrid();
    
    // Automaticky otevřít první kartu z gridu
    const firstCard = cardsGrid.querySelector(".question-card");
    if (firstCard) {
      const id = firstCard.getAttribute("data-id");
      openQuestionDetail(id);
    }
  });

  // Event listenery pro Přiřazovací hru
  gameOpenBtn.addEventListener("click", openMatchingGame);
  gameCloseBtn.addEventListener("click", closeMatchingGame);
  gameResetBtn.addEventListener("click", openMatchingGame);

  // 16. SPRÁVA TÉMATU (TMÁVÝ / SVĚTLÝ REŽIM)
  const savedTheme = localStorage.getItem("dermatologie_theme") || "dark-theme";
  document.body.className = savedTheme;

  themeToggle.addEventListener("click", () => {
    if (document.body.classList.contains("dark-theme")) {
      document.body.classList.remove("dark-theme");
      document.body.classList.add("light-theme");
      localStorage.setItem("dermatologie_theme", "light-theme");
    } else {
      document.body.classList.remove("light-theme");
      document.body.classList.add("dark-theme");
      localStorage.setItem("dermatologie_theme", "dark-theme");
    }
  });

  // 17. PRVNÍ SPUŠTĚNÍ - INICIALIZACE STRÁNKY
  updateDashboard();
  renderQuestionsGrid();
});
