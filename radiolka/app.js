// app.js - Aplikační logika studijního portálu Radiologie & Zobrazovací Metody

document.addEventListener("DOMContentLoaded", () => {
  // 1. Načtení databáze otázek
  const QUESTIONS = (window.DATA_RADIOLOGIE || []).map(q => {
    return {
      ...q,
      category: q.category || "Základy"
    };
  });

  // Ověření, zda se data načetla
  if (QUESTIONS.length === 0) {
    console.error("Chyba: Databáze otázek z radiologie je prázdná nebo nebyla správně načtena.");
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
  let userProgress = JSON.parse(localStorage.getItem("radiologie_progress")) || {};
  
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
  let activeFilterStatus = "all";
  let activeSearchQuery = "";
  
  // Herní stav pro přiřazovačku
  let gameSelectedTerm = null;
  let gameSelectedDesc = null;
  let gamePairsLeft = 0;
  let gameErrorsCount = 0;

  // 5. DOM Elementy
  const cardsGrid = document.getElementById("cards-grid");
  const searchInput = document.getElementById("search-input");
  const categoryFilter = document.getElementById("category-filter");
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
  const modalImageContainer = document.getElementById("modal-image-container");
  const studyImage = document.getElementById("study-image");
  
  // Hra elementy
  const gameDialog = document.getElementById("game-dialog");
  const gameCloseBtn = document.getElementById("game-close");
  const gameColLeft = document.getElementById("game-column-left");
  const gameColRight = document.getElementById("game-column-right");
  const gameLeftCountEl = document.getElementById("game-left-count");
  const gameErrorsEl = document.getElementById("game-errors");
  const gameResetBtn = document.getElementById("game-reset-btn");
  const matchingGameOpenBtn = document.getElementById("matching-game-open-btn");

  // Spaced Repetition tlačítka
  const leitnerBtns = document.querySelectorAll(".leitner-btn");

  // Kvíz kontejner
  const quizContainer = document.getElementById("quiz-container");

  // --- POMOCNÉ FUNKCE ---

  function saveProgress() {
    try {
      localStorage.setItem("radiologie_progress", JSON.stringify(userProgress));
    } catch (e) {
      console.error("Nelze uložit pokrok do localStorage", e);
    }
  }

  // Výpočet statistik pro dashboard
  function updateDashboardStats() {
    const now = Date.now();
    let box1 = 0, box2 = 0, box3 = 0, box4 = 0;
    let dueCount = 0;
    let mastered = 0;

    QUESTIONS.forEach(q => {
      const prog = userProgress[q.id];
      if (prog.box === 1) box1++;
      else if (prog.box === 2) box2++;
      else if (prog.box === 3) box3++;
      else if (prog.box === 4) {
        box4++;
        mastered++;
      }

      // Karta je 'due' (k opakování) pokud má nastavený nextReview a ten je v minulosti
      if (prog.nextReview && prog.nextReview <= now && prog.box < 4) {
        dueCount++;
      }
    });

    // Aktualizace čísel boxů
    if (box1CountEl) box1CountEl.textContent = box1;
    if (box2CountEl) box2CountEl.textContent = box2;
    if (box3CountEl) box3CountEl.textContent = box3;
    if (box4CountEl) box4CountEl.textContent = box4;

    // Celkový pokrok (procento zvládnutých karet v Boxu 4)
    const total = QUESTIONS.length;
    const progressPct = Math.round((mastered / total) * 100);
    
    if (statProgressPct) statProgressPct.textContent = `${progressPct} %`;
    if (statProgressBar) statProgressBar.style.width = `${progressPct}%`;
    if (statProgressRatio) statProgressRatio.textContent = `Zvládnuté: ${mastered} z ${total} témat`;

    // K opakování dnes
    if (statDueCountEl) statDueCountEl.textContent = dueCount;
    if (statDueDescEl) {
      if (dueCount > 0) {
        statDueDescEl.textContent = "Je čas zopakovat si dřívější znalosti!";
        statDueDescEl.className = "stat-desc text-amber font-semibold";
        if (studyDueBtn) studyDueBtn.style.display = "block";
      } else {
        statDueDescEl.textContent = "Všechny karty jsou aktuální!";
        statDueDescEl.className = "stat-desc text-muted";
        if (studyDueBtn) studyDueBtn.style.display = "none";
      }
    }
  }

  // --- FILTRACE A RENDER KARET ---

  function renderCards() {
    cardsGrid.innerHTML = "";
    const now = Date.now();

    const filtered = QUESTIONS.filter(q => {
      const prog = userProgress[q.id];
      
      // 1. Vyhledávání
      const matchesSearch = q.title.toLowerCase().includes(activeSearchQuery) || 
                            q.keywords.some(k => k.toLowerCase().includes(activeSearchQuery));
      
      // 2. Kategorie (Obor)
      const matchesCategory = activeFilterCategory === "all" || q.category === activeFilterCategory;
      
      // 3. Stav studia
      let matchesStatus = true;
      if (activeFilterStatus === "due") {
        matchesStatus = prog.nextReview && prog.nextReview <= now && prog.box < 4;
      } else if (activeFilterStatus === "box-1") {
        matchesStatus = prog.box === 1;
      } else if (activeFilterStatus === "box-2") {
        matchesStatus = prog.box === 2;
      } else if (activeFilterStatus === "box-3") {
        matchesStatus = prog.box === 3;
      } else if (activeFilterStatus === "box-4") {
        matchesStatus = prog.box === 4;
      } else if (activeFilterStatus === "unstudied") {
        matchesStatus = prog.box === 1 && prog.lastReviewed === null;
      }

      return matchesSearch && matchesCategory && matchesStatus;
    });

    if (filtered.length === 0) {
      cardsGrid.innerHTML = `<div class="no-cards-placeholder">Žádná témata nevyhovují zvoleným filtrům.</div>`;
      return;
    }

    filtered.forEach(q => {
      const prog = userProgress[q.id];
      const card = document.createElement("div");
      card.className = "question-card";

      // Karta k opakování dostane pulzující tečku/badge
      const isDue = prog.nextReview && prog.nextReview <= now && prog.box < 4;
      const isUnstudied = prog.lastReviewed === null;

      card.innerHTML = `
        <div class="card-top">
          <span class="card-id">${q.id}</span>
          <div class="card-box-indicator b-${prog.box}" title="Box ${prog.box}"></div>
        </div>
        <h3 class="card-title">${q.title}</h3>
        <p class="card-keywords">${q.keywords.slice(0, 4).join(" • ")}</p>
        <div class="card-footer">
          <span class="card-section">${q.section}</span>
          <div style="display: flex; gap: 0.5rem; align-items: center;">
            ${isDue ? `<span class="due-badge">K opakování</span>` : ""}
            ${isUnstudied && !isDue ? `<span class="due-badge" style="background-color: var(--primary-light); color: var(--primary); border-color: rgba(168, 85, 247, 0.2)">Nová</span>` : ""}
          </div>
        </div>
      `;

      card.addEventListener("click", () => openCardDetail(q));
      cardsGrid.appendChild(card);
    });
  }

  // --- DETAIL KARTY & SPACED REPETITION ---

  function openCardDetail(question) {
    activeQuestion = question;
    dialogTitle.textContent = question.title;
    dialogSection.textContent = question.section;

    // Vykreslení obsahu do panelu studia
    studyDefinition.innerHTML = question.content.definition || "";
    studyEtiology.innerHTML = question.content.etiology || "";
    studyPathogenesis.innerHTML = question.content.pathogenesis || "";
    studyMacroscopy.innerHTML = question.content.macroscopy || "";
    studyMicroscopy.innerHTML = question.content.microscopy || "";
    studyClinical.innerHTML = question.content.clinical || "";

    // Vykreslení schématu modality
    if (question.image && modalImageContainer && studyImage) {
      studyImage.src = question.image;
      modalImageContainer.style.display = "block";
    } else if (modalImageContainer) {
      modalImageContainer.style.display = "none";
    }

    // Reset záložek
    switchTab("tab-study");

    // Inicializace kvízu
    renderCardQuiz(question);

    detailDialog.showModal();
    document.body.style.overflow = "hidden";
  }

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

  // Zpracování hodnocení obtížnosti (Spaced Repetition)
  function gradeQuestion(grade) {
    if (!activeQuestion) return;

    const prog = userProgress[activeQuestion.id];
    const now = Date.now();
    prog.lastReviewed = now;
    prog.testedCount++;

    if (grade === "wrong") {
      // Ztěžka - propad do Boxu 1
      prog.box = 1;
    } else if (grade === "good") {
      // Slibné - posun o jeden box výše (max Box 4)
      if (prog.box < 4) prog.box++;
      prog.correctCount++;
    } else if (grade === "perfect") {
      // Skvěle - skok přímo do Boxu 4
      prog.box = 4;
      prog.correctCount++;
    }

    // Nastavení dalšího opakování
    if (prog.box === 4) {
      prog.nextReview = null; // Zvládnuté téma, neplánuje se automaticky
    } else {
      prog.nextReview = now + LEITNER_INTERVALS[prog.box];
    }

    saveProgress();
    updateDashboardStats();
    renderCards();
    closeCardDetail();
  }

  function closeCardDetail() {
    detailDialog.close();
    document.body.style.overflow = "auto";
    activeQuestion = null;
  }

  // --- KONTROLNÍ KVÍZ PRO KONKRÉTNÍ KARTU ---

  function renderCardQuiz(question) {
    quizContainer.innerHTML = "";
    
    if (!question.quiz || question.quiz.length === 0) {
      quizContainer.innerHTML = "<p class='text-center text-muted'>Pro toto téma nejsou dostupné kvízové otázky.</p>";
      return;
    }

    const quizWrapper = document.createElement("div");
    quizWrapper.className = "quiz-wrapper";

    question.quiz.forEach((q, qIndex) => {
      const qDiv = document.createElement("div");
      qDiv.className = "quiz-card";
      qDiv.innerHTML = `
        <div class="quiz-question">${qIndex + 1}. ${q.question}</div>
        <div class="quiz-options" id="options-${question.id}-${qIndex}">
          ${q.options.map((opt, optIndex) => `
            <button class="quiz-option" data-correct="${optIndex === q.correct}" data-index="${optIndex}">
              ${opt}
            </button>
          `).join("")}
        </div>
        <div class="quiz-explanation" id="explanation-${question.id}-${qIndex}" style="display:none;">
          <strong>Vysvětlení:</strong> ${q.explanation}
        </div>
      `;

      // Event listenery pro tlačítka možností
      const optionsContainer = qDiv.querySelector(`#options-${question.id}-${qIndex}`);
      const optionBtns = optionsContainer.querySelectorAll(".quiz-option");
      const explanationBox = qDiv.querySelector(`#explanation-${question.id}-${qIndex}`);

      optionBtns.forEach(btn => {
        btn.addEventListener("click", () => {
          // Zabránit vícenásobnému klikání
          if (optionsContainer.classList.contains("answered")) return;
          optionsContainer.classList.add("answered");

          const isCorrect = btn.getAttribute("data-correct") === "true";
          
          optionBtns.forEach(b => {
            const isBtnCorrect = b.getAttribute("data-correct") === "true";
            if (isBtnCorrect) {
              b.classList.add("correct");
            } else if (b === btn && !isCorrect) {
              b.classList.add("incorrect");
            }
            b.disabled = true;
          });

          // Zobrazit vysvětlení
          if (explanationBox) {
            explanationBox.style.display = "block";
          }
        });
      });

      quizWrapper.appendChild(qDiv);
    });

    quizContainer.appendChild(quizWrapper);
  }

  // --- LOGIKA PŘIŘAZOVACÍ HRY (MATCHING GAME) ---

  function openMatchingGame() {
    const pairs = window.RADIOLOGY_MATCHING_PAIRS || [];
    if (pairs.length < 4) {
      alert("Nedostatek dat pro přiřazovačku.");
      return;
    }

    // Náhodně vybrat 4 páry
    const shuffledPairs = [...pairs].sort(() => 0.5 - Math.random()).slice(0, 4);

    gameSelectedTerm = null;
    gameSelectedDesc = null;
    gameErrorsCount = 0;
    gamePairsLeft = 4;

    gameErrorsEl.textContent = "0";
    gameLeftCountEl.textContent = "4";

    // Vytvoření seznamu termínů a popisů s ID jako index
    const terms = shuffledPairs.map((p, idx) => ({
      id: `pair-${idx}`,
      text: p.term
    }));

    const descriptions = shuffledPairs.map((p, idx) => ({
      id: `pair-${idx}`,
      text: p.desc
    }));

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
      gameSelectedTerm.classList.remove("selected");
      gameSelectedDesc.classList.remove("selected");
      
      gameSelectedTerm.classList.add("matched");
      gameSelectedDesc.classList.add("matched");

      gamePairsLeft--;
      gameLeftCountEl.textContent = gamePairsLeft;

      gameSelectedTerm = null;
      gameSelectedDesc = null;

      if (gamePairsLeft === 0) {
        setTimeout(() => {
          alert(`Gratulujeme! Úspěšně jsi spojil(a) všechny pojmy. Počet chyb: ${gameErrorsCount}`);
          closeMatchingGame();
        }, 300);
      }
    } else {
      // NESPRÁVNÁ DVOJICE
      const tCard = gameSelectedTerm;
      const dCard = gameSelectedDesc;
      
      tCard.classList.add("wrong");
      dCard.classList.add("wrong");

      gameErrorsCount++;
      gameErrorsEl.textContent = gameErrorsCount;

      gameSelectedTerm = null;
      gameSelectedDesc = null;

      setTimeout(() => {
        tCard.classList.remove("selected", "wrong");
        dCard.classList.remove("selected", "wrong");
      }, 600);
    }
  }

  function closeMatchingGame() {
    gameDialog.close();
    document.body.style.overflow = "auto";
  }

  // --- TLAČÍTKA A EVENT LISTENERY ---

  // Filtry
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      activeSearchQuery = e.target.value.toLowerCase().trim();
      renderCards();
    });
  }

  if (categoryFilter) {
    categoryFilter.addEventListener("change", (e) => {
      activeFilterCategory = e.target.value;
      renderCards();
    });
  }

  if (statusFilter) {
    statusFilter.addEventListener("change", (e) => {
      activeFilterStatus = e.target.value;
      renderCards();
    });
  }

  // Spaced Repetition hodnocení
  leitnerBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const grade = btn.getAttribute("data-grade");
      gradeQuestion(grade);
    });
  });

  // Učení dnešních karet z dashboardu
  if (studyDueBtn) {
    studyDueBtn.addEventListener("click", () => {
      activeFilterStatus = "due";
      if (statusFilter) statusFilter.value = "due";
      renderCards();
    });
  }

  // Klávesové zkratky a zavírání dialogů
  if (dialogCloseBtn) {
    dialogCloseBtn.addEventListener("click", closeCardDetail);
  }

  tabBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const tabId = btn.getAttribute("data-tab");
      switchTab(tabId);
    });
  });

  // Matching game tlačítka
  if (matchingGameOpenBtn) {
    matchingGameOpenBtn.addEventListener("click", openMatchingGame);
  }
  if (gameCloseBtn) {
    gameCloseBtn.addEventListener("click", closeMatchingGame);
  }
  if (gameResetBtn) {
    gameResetBtn.addEventListener("click", openMatchingGame);
  }

  // Přepínání motivu (dark/light)
  const themeToggleBtn = document.getElementById("theme-toggle");
  if (themeToggleBtn) {
    // Inicializace podle uloženého motivu
    const savedTheme = localStorage.getItem("theme") || "dark";
    if (savedTheme === "light") {
      document.body.classList.remove("dark-theme");
      document.body.classList.add("light-theme");
    }

    themeToggleBtn.addEventListener("click", () => {
      const isLight = document.body.classList.toggle("light-theme");
      document.body.classList.toggle("dark-theme", !isLight);
      localStorage.setItem("theme", isLight ? "light" : "dark");
    });
  }

  // --- LOGIKA TLAČÍTKA ZPĚT NA ROZCESTNÍK ---
  const backHubBtn = document.getElementById("back-hub-btn");
  if (backHubBtn) {
    backHubBtn.addEventListener("click", () => {
      if (window.location.protocol === 'file:') {
        window.location.href = '../index.html';
      } else {
        window.location.href = 'https://verysadanyway.vercel.app/';
      }
    });
  }

  // --- LOGIKA GEMINI CHATBOTA ---
  // ==========================================
  const chatbotContainer = document.getElementById("gemini-chatbot-container");
  const chatbotFab = document.getElementById("chatbot-fab");
  const chatbotPanel = document.getElementById("chatbot-panel");
  const chatbotMessages = document.getElementById("chatbot-messages");
  const chatbotInput = document.getElementById("chatbot-input");
  const chatbotInputForm = document.getElementById("chatbot-input-form");
  const chatbotTypingIndicator = document.getElementById("chatbot-typing-indicator");
  const chatbotApiKeyInput = document.getElementById("chatbot-api-key-input");
  const chatbotSaveKeyBtn = document.getElementById("chatbot-save-key-btn");
  const chatbotClearKeyBtn = document.getElementById("chatbot-clear-key-btn");
  const chatbotSettingsCloseBtn = document.getElementById("chatbot-settings-close-btn");
  const chatbotSettingsBtn = document.getElementById("chatbot-settings-btn");
  const chatbotSettingsOverlay = document.getElementById("chatbot-settings-overlay");
  const chatbotBadge = document.getElementById("chatbot-badge");
  const chatbotSuggestions = document.getElementById("chatbot-suggestions");

  let chatHistory = [
    { role: "assistant", text: "Ahoj! Jsem tvůj radiologický asistent. Pomůžu ti se studiem fyzikálních principů RTG, CT, MR, UZ, intervenční radiologie, radiační ochrany a indikací vyšetření. S čím dnes začneme?" }
  ];

  const systemInstructionText = "Jste odborník na radiologii a zobrazovací metody. Pomáháte studentům lékařství s fyzikálními principy RTG, CT, MR, UZ, intervenční radiologie, radiační ochranou, indikacemi vyšetření a popisem patologií v obrazech. Odpovídejte věcně, stručně a odborně česky. Používejte markdown pro přehlednost.";

  const getSavedKey = () => localStorage.getItem("gemini_chat_local_key") || "";
  if (chatbotApiKeyInput) chatbotApiKeyInput.value = getSavedKey();

  let lastMessageTime = 0;
  const CLIENT_MIN_INTERVAL = 3000;

  if (chatbotFab) {
    chatbotFab.addEventListener("click", () => {
      const isOpen = chatbotPanel.classList.toggle("open");
      chatbotFab.classList.toggle("open");
      if (isOpen) {
        if (chatbotBadge) chatbotBadge.style.display = "none";
        if (chatbotInput) chatbotInput.focus();
        scrollToBottom();
      }
    });
  }

  const closeBtn = document.getElementById("chatbot-close-btn");
  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      chatbotPanel.classList.remove("open");
      chatbotFab.classList.remove("open");
    });
  }

  if (chatbotSettingsBtn) {
    chatbotSettingsBtn.addEventListener("click", () => {
      chatbotSettingsOverlay.classList.add("open");
    });
  }

  if (chatbotSettingsCloseBtn) {
    chatbotSettingsCloseBtn.addEventListener("click", () => {
      chatbotSettingsOverlay.classList.remove("open");
    });
  }

  if (chatbotSaveKeyBtn) {
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
  }

  if (chatbotClearKeyBtn) {
    chatbotClearKeyBtn.addEventListener("click", () => {
      localStorage.removeItem("gemini_chat_local_key");
      chatbotApiKeyInput.value = "";
      alert("API klíč byl vymazán. Nyní se dotazy posílají přes proxy server.");
    });
  }

  const parseMarkdown = (text) => {
    let html = text
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");

    html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    html = html.replace(/```([\s\S]*?)```/g, '<pre><code>$1</code></pre>');
    html = html.replace(/`(.*?)`/g, '<code>$1</code>');
    
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
    if (inList) html += '</ul>';
    return html;
  };

  const scrollToBottom = () => {
    if (chatbotMessages) chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
  };

  const addMessage = (role, text) => {
    chatHistory.push({ role, text });
    if (chatHistory.length > 15) chatHistory.shift();

    const messageDiv = document.createElement("div");
    messageDiv.className = `message ${role}`;
    
    const contentDiv = document.createElement("div");
    contentDiv.className = "message-content";
    contentDiv.innerHTML = role === "assistant" ? parseMarkdown(text) : text;
    
    messageDiv.appendChild(contentDiv);
    if (chatbotMessages) chatbotMessages.appendChild(messageDiv);
    scrollToBottom();

    if (chatbotBadge && !chatbotPanel.classList.contains("open") && role === "assistant") {
      chatbotBadge.style.display = "block";
    }
  };

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

  const callProxyServerStream = async (messages, onChunk, onStart) => {
    const response = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${clientToken}`
      },
      body: JSON.stringify({ messages, subject: "radiologie" })
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
      buffer = lines.pop();

      for (const line of lines) {
        const trimmed = line.trim();
        if (!trimmed.startsWith("data: ")) continue;
        const jsonStr = trimmed.substring(6);
        try {
          const parsed = JSON.parse(jsonStr);
          if (parsed.text) onChunk(parsed.text);
        } catch (e) {}
      }
    }

    if (buffer.length > 0) {
      const trimmed = buffer.trim();
      if (trimmed.startsWith("data: ")) {
        try {
          const parsed = JSON.parse(trimmed.substring(6));
          if (parsed.text) onChunk(parsed.text);
        } catch (e) {}
      }
    }
  };

  const callGeminiDirectlyStream = async (key, messages, onChunk, onStart) => {
    const contents = [];
    for (const msg of messages) {
      const role = msg.role === "assistant" || msg.role === "model" ? "model" : "user";
      if (contents.length > 0 && contents[contents.length - 1].role === role) {
        contents[contents.length - 1].parts.push({ text: msg.text });
      } else {
        contents.push({ role, parts: [{ text: msg.text }] });
      }
    }
    if (contents.length > 0 && contents[0].role !== "user") contents.shift();
    if (contents.length === 0) throw new Error("Žádné platné zprávy.");

    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:streamGenerateContent?alt=sse&key=${key}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents,
        systemInstruction: { parts: [{ text: systemInstructionText }] },
        generationConfig: { temperature: 0.7, maxOutputTokens: 1500 }
      })
    });

    if (!response.ok) {
      const err = await response.json().catch(() => ({}));
      throw new Error(err.error?.message || `API vrátilo chybu ${response.status}`);
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
      buffer = lines.pop();

      for (const line of lines) {
        const trimmed = line.trim();
        if (!trimmed.startsWith("data: ")) continue;
        const jsonStr = trimmed.substring(6);
        try {
          const parsed = JSON.parse(jsonStr);
          const chunkText = parsed.candidates?.[0]?.content?.parts?.[0]?.text;
          if (chunkText) onChunk(chunkText);
        } catch (e) {}
      }
    }
  };

  if (chatbotInputForm) {
    chatbotInputForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      const query = chatbotInput.value.trim();
      if (!query) return;

      const now = Date.now();
      if (now - lastMessageTime < CLIENT_MIN_INTERVAL) {
        alert("Prosím, počkejte chvíli před dalším dotazem.");
        return;
      }
      lastMessageTime = now;

      chatbotInput.value = "";
      addMessage("user", query);

      const assistantMessageDiv = document.createElement("div");
      assistantMessageDiv.className = "message assistant streaming";
      const contentDiv = document.createElement("div");
      contentDiv.className = "message-content";
      assistantMessageDiv.appendChild(contentDiv);
      chatbotMessages.appendChild(assistantMessageDiv);
      scrollToBottom();

      if (chatbotTypingIndicator) chatbotTypingIndicator.classList.add("active");

      let fullResponseText = "";
      const onStart = () => {
        if (chatbotTypingIndicator) chatbotTypingIndicator.classList.remove("active");
        assistantMessageDiv.classList.remove("streaming");
      };
      const onChunk = (text) => {
        fullResponseText += text;
        contentDiv.innerHTML = parseMarkdown(fullResponseText);
        scrollToBottom();
      };

      try {
        const localKey = getSavedKey();
        const formattedHistory = chatHistory.slice(0, -1).map(h => ({
          role: h.role,
          text: h.text
        }));
        formattedHistory.push({ role: "user", text: query });

        if (localKey) {
          await callGeminiDirectlyStream(localKey, formattedHistory, onChunk, onStart);
        } else {
          await callProxyServerStream(formattedHistory, onChunk, onStart);
        }

        // Uložit do historie
        chatHistory.push({ role: "assistant", text: fullResponseText });
        if (chatHistory.length > 15) chatHistory.shift();
      } catch (err) {
        if (chatbotTypingIndicator) chatbotTypingIndicator.classList.remove("active");
        assistantMessageDiv.classList.remove("streaming");
        contentDiv.innerHTML = `<span class="text-rose">Chyba: ${err.message}</span>`;
        scrollToBottom();
      }
    });
  }

  // Event listenery pro suggestion chips
  if (chatbotSuggestions) {
    const chips = chatbotSuggestions.querySelectorAll(".suggestion-chip");
    chips.forEach(chip => {
      chip.addEventListener("click", () => {
        const query = chip.getAttribute("data-query");
        if (query && chatbotInput) {
          chatbotInput.value = query;
          chatbotInputForm.dispatchEvent(new Event("submit"));
        }
      });
    });
  }

  // --- INICIALIZACE ---
  updateDashboardStats();
  renderCards();
});
