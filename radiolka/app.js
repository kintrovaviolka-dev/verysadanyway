// app.js - Aplikační logika studijního portálu Radiologie & Zobrazovací Metody

document.addEventListener("DOMContentLoaded", () => {
  // 1. Načtení databáze otázek a atlasu
  const QUESTIONS = (window.DATA_RADIOLOGIE || []).map(q => {
    return {
      ...q,
      category: q.category || "Základy",
      modalities: q.modalities || ["RTG"],
      images: q.images || []
    };
  });

  const ATLAS_ITEMS = window.RADIOLKA_ATLAS || [];

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
        nextReview: null,
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
  
  // Atlas stav
  let activeAtlasModality = "all";
  let activeAtlasSearch = "";
  let activeLightboxItem = null;

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

  if (totalQuestionsCountEl) {
    totalQuestionsCountEl.textContent = QUESTIONS.length;
  }
  
  // DOM elementů statistik
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
  
  // Dialogové okno detailu
  const detailDialog = document.getElementById("detail-dialog");
  const dialogCloseBtn = document.getElementById("dialog-close");
  const dialogTitle = document.getElementById("dialog-title");
  const dialogSection = document.getElementById("dialog-section");
  const dialogModalityTags = document.getElementById("dialog-modality-tags");
  const dialogJumpAtlasBtn = document.getElementById("dialog-jump-atlas-btn");
  const tabBtns = document.querySelectorAll(".tab-btn");
  const tabPanels = document.querySelectorAll(".tab-panel");
  
  // Výkladové elementy
  const modalGalleryContainer = document.getElementById("modal-gallery-container");
  const modalGalleryGrid = document.getElementById("modal-gallery-grid");
  const studyPrinciple = document.getElementById("study-principle");
  const studyMethodology = document.getElementById("study-methodology");
  const studyNormal = document.getElementById("study-normal");
  const studyPathology = document.getElementById("study-pathology");
  const studyClinical = document.getElementById("study-clinical");
  const studyKeypoints = document.getElementById("study-keypoints");
  const quizContainer = document.getElementById("quiz-container");
  const leitnerBtns = document.querySelectorAll(".leitner-btn");

  // Atlas elementy
  const atlasDialog = document.getElementById("atlas-dialog");
  const atlasOpenBtn = document.getElementById("atlas-open-btn");
  const atlasCloseBtn = document.getElementById("atlas-close");
  const atlasSearchInput = document.getElementById("atlas-search-input");
  const atlasGrid = document.getElementById("atlas-grid");
  const atlasItemsCountEl = document.getElementById("atlas-items-count");
  const atlasModBtns = document.querySelectorAll(".atlas-mod-btn");

  // Lightbox elementy
  const lightboxDialog = document.getElementById("lightbox-dialog");
  const lightboxCloseBtn = document.getElementById("lightbox-close");
  const lightboxImg = document.getElementById("lightbox-img");
  const lightboxTitle = document.getElementById("lightbox-title");
  const lightboxModality = document.getElementById("lightbox-modality");
  const lightboxCaption = document.getElementById("lightbox-caption");
  const lightboxOpenTopicBtn = document.getElementById("lightbox-open-topic-btn");
  
  // Hra elementy
  const gameDialog = document.getElementById("game-dialog");
  const matchingGameOpenBtn = document.getElementById("matching-game-open-btn");
  const gameCloseBtn = document.getElementById("game-close");
  const gameResetBtn = document.getElementById("game-reset-btn");
  const gameColLeft = document.getElementById("game-column-left");
  const gameColRight = document.getElementById("game-column-right");
  const gameLeftCountEl = document.getElementById("game-left-count");
  const gameErrorsEl = document.getElementById("game-errors");

  // Algoritmy elementy
  const algoBtn = document.getElementById("algo-btn");
  const algoDialog = document.getElementById("algo-dialog");
  const algoCloseBtn = document.getElementById("algo-close");
  const algoMatrixGrid = document.getElementById("algo-matrix-grid");

  // Tlačítko zpět
  const backHubBtn = document.getElementById("back-hub-btn");
  if (backHubBtn) {
    backHubBtn.addEventListener("click", () => {
      window.location.href = "../index.html";
    });
  }

  // Přepínač motivu
  const themeToggleBtn = document.getElementById("theme-toggle");
  if (themeToggleBtn) {
    const savedTheme = localStorage.getItem("radiologie_theme") || "dark";
    if (savedTheme === "light") {
      document.body.classList.remove("dark-theme");
      document.body.classList.add("light-theme");
    }
    themeToggleBtn.addEventListener("click", () => {
      if (document.body.classList.contains("dark-theme")) {
        document.body.classList.remove("dark-theme");
        document.body.classList.add("light-theme");
        localStorage.setItem("radiologie_theme", "light");
      } else {
        document.body.classList.remove("light-theme");
        document.body.classList.add("dark-theme");
        localStorage.setItem("radiologie_theme", "dark");
      }
    });
  }

  // --- STATISTIKY & DASHBOARD ---

  function saveProgress() {
    localStorage.setItem("radiologie_progress", JSON.stringify(userProgress));
  }

  function updateDashboardStats() {
    let box1 = 0, box2 = 0, box3 = 0, box4 = 0;
    let dueCount = 0;
    let mastered = 0;
    const now = Date.now();

    QUESTIONS.forEach(q => {
      const p = userProgress[q.id];
      if (!p) return;

      if (p.box === 1) box1++;
      else if (p.box === 2) box2++;
      else if (p.box === 3) box3++;
      else if (p.box === 4) {
        box4++;
        mastered++;
      }

      if (p.nextReview && p.nextReview <= now && p.box < 4) {
        dueCount++;
      }
    });

    if (box1CountEl) box1CountEl.textContent = box1;
    if (box2CountEl) box2CountEl.textContent = box2;
    if (box3CountEl) box3CountEl.textContent = box3;
    if (box4CountEl) box4CountEl.textContent = box4;

    const total = QUESTIONS.length;
    const progressPct = Math.round((mastered / total) * 100);
    
    if (statProgressPct) statProgressPct.textContent = `${progressPct} %`;
    if (statProgressBar) statProgressBar.style.width = `${progressPct}%`;
    if (statProgressRatio) statProgressRatio.textContent = `Zvládnuté: ${mastered} z ${total} témat`;

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
      
      const query = activeSearchQuery.toLowerCase();
      const matchesSearch = !query || 
                            q.title.toLowerCase().includes(query) || 
                            q.section.toLowerCase().includes(query) ||
                            q.keywords.some(k => k.toLowerCase().includes(query)) ||
                            q.modalities.some(m => m.toLowerCase().includes(query));
      
      let matchesCategory = true;
      if (activeFilterCategory !== "all") {
        matchesCategory = (q.category === activeFilterCategory) || 
                          (q.section && q.section.toLowerCase().includes(activeFilterCategory.toLowerCase()));
      }
      
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

    const escapeHTML = (str) => String(str).replace(/[&<>'"]/g, tag => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      "'": '&#39;',
      '"': '&quot;'
    }[tag] || tag));

    filtered.forEach(q => {
      const prog = userProgress[q.id];
      const card = document.createElement("div");
      card.className = "question-card";

      const isDue = prog.nextReview && prog.nextReview <= now && prog.box < 4;
      const isUnstudied = prog.lastReviewed === null;

      // Zobrazení modality chips
      const modalities = q.modalities || [];
      const modalityHTML = modalities.length > 0 ? `
        <div class="modality-tags">
          ${modalities.slice(0, 3).map(m => {
            const mLow = m.toLowerCase();
            let chipClass = "mod-rtg";
            if (mLow.includes("ct")) chipClass = "mod-ct";
            else if (mLow.includes("mr")) chipClass = "mod-mr";
            else if (mLow.includes("uz") || mLow.includes("doppler")) chipClass = "mod-uz";
            else if (mLow.includes("interv") || mLow.includes("dsa") || mLow.includes("angio") || mLow.includes("pta")) chipClass = "mod-intervence";
            return `<span class="modality-chip ${chipClass}">${escapeHTML(m)}</span>`;
          }).join('')}
          ${q.images && q.images.length > 0 ? `<span class="modality-chip mod-has-img" title="Obsahuje ${q.images.length} obrazových materiálů">📷 ${q.images.length}</span>` : ''}
        </div>
      ` : '';

      card.innerHTML = `
        <div class="card-top">
          <span class="card-id">${escapeHTML(q.id)}</span>
          <div class="card-box-indicator b-${prog.box}" title="Box ${prog.box}"></div>
        </div>
        <h3 class="card-title">${escapeHTML(q.title)}</h3>
        ${modalityHTML}
        <p class="card-keywords">${escapeHTML(q.keywords.slice(0, 4).join(" • "))}</p>
        <div class="card-footer">
          <span class="card-section">${escapeHTML(q.section)}</span>
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

    // Vykreslení modalit v hlavičce
    if (dialogModalityTags) {
      dialogModalityTags.innerHTML = (question.modalities || []).map(m => {
        const mLow = m.toLowerCase();
        let chipClass = "mod-rtg";
        if (mLow.includes("ct")) chipClass = "mod-ct";
        else if (mLow.includes("mr")) chipClass = "mod-mr";
        else if (mLow.includes("uz") || mLow.includes("doppler")) chipClass = "mod-uz";
        else if (mLow.includes("interv") || mLow.includes("dsa") || mLow.includes("angio") || mLow.includes("pta")) chipClass = "mod-intervence";
        return `<span class="modality-chip ${chipClass}">${m}</span>`;
      }).join('');
    }

    // Vykreslení obrazové galerie
    if (question.images && question.images.length > 0 && modalGalleryContainer && modalGalleryGrid) {
      modalGalleryGrid.innerHTML = "";
      question.images.forEach(img => {
        const item = document.createElement("div");
        item.className = "gallery-thumb-card";
        item.innerHTML = `
          <div class="gallery-thumb-wrapper">
            <img src="${img.src}" alt="${img.title}" loading="lazy" />
            <span class="gallery-thumb-modality">${img.modality || "Snímek"}</span>
          </div>
          <div class="gallery-thumb-info">
            <h4>${img.title}</h4>
            <p>${img.caption}</p>
          </div>
        `;
        item.addEventListener("click", () => {
          openLightbox({
            src: img.src,
            title: img.title,
            modality: img.modality || "Snímek",
            caption: img.caption,
            questionId: question.id
          });
        });
        modalGalleryGrid.appendChild(item);
      });
      modalGalleryContainer.style.display = "block";
    } else if (modalGalleryContainer) {
      modalGalleryContainer.style.display = "none";
    }

    // Vykreslení obsahu do strukturovaných karet
    const c = question.content || {};
    if (studyPrinciple) studyPrinciple.innerHTML = c.principle || c.definition || "<p>Informace nejsou dostupné.</p>";
    if (studyMethodology) studyMethodology.innerHTML = c.methodology || c.etiology || "<p>Informace nejsou dostupné.</p>";
    if (studyNormal) studyNormal.innerHTML = c.normal_anatomy || c.pathogenesis || "<p>Informace nejsou dostupné.</p>";
    if (studyPathology) studyPathology.innerHTML = c.pathology || c.macroscopy || "<p>Informace nejsou dostupné.</p>";
    if (studyClinical) studyClinical.innerHTML = c.clinical || c.clinical_legacy || "<p>Informace nejsou dostupné.</p>";
    if (studyKeypoints) studyKeypoints.innerHTML = c.key_points || "<p>Informace nejsou dostupné.</p>";

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
      prog.box = 1;
    } else if (grade === "good") {
      if (prog.box < 4) prog.box++;
      prog.correctCount++;
    } else if (grade === "perfect") {
      prog.box = 4;
      prog.correctCount++;
    }

    if (prog.box === 4) {
      prog.nextReview = null;
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
          `).join('')}
        </div>
        <div class="quiz-explanation" id="exp-${question.id}-${qIndex}" style="display: none;">
          <strong>Vysvětlení:</strong> ${q.explanation}
        </div>
      `;

      const optionBtns = qDiv.querySelectorAll(".quiz-option");
      const explanationBox = qDiv.querySelector(".quiz-explanation");

      optionBtns.forEach(btn => {
        btn.addEventListener("click", () => {
          if (btn.classList.contains("correct") || btn.classList.contains("incorrect")) return;

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

          if (explanationBox) {
            explanationBox.style.display = "block";
          }
        });
      });

      quizWrapper.appendChild(qDiv);
    });

    quizContainer.appendChild(quizWrapper);
  }

  // --- RADIOLOGICKÝ OBRAZOVÝ ATLAS ---

  function openAtlas(filterQuery = "") {
    if (filterQuery) {
      activeAtlasSearch = filterQuery;
      if (atlasSearchInput) atlasSearchInput.value = filterQuery;
    }
    renderAtlasGrid();
    atlasDialog.showModal();
    document.body.style.overflow = "hidden";
  }

  function closeAtlas() {
    atlasDialog.close();
    document.body.style.overflow = "auto";
  }

  function renderAtlasGrid() {
    if (!atlasGrid) return;
    atlasGrid.innerHTML = "";

    const query = activeAtlasSearch.toLowerCase().trim();
    const filtered = ATLAS_ITEMS.filter(item => {
      const matchesSearch = !query || 
                            item.title.toLowerCase().includes(query) ||
                            item.caption.toLowerCase().includes(query) ||
                            item.topicTitle.toLowerCase().includes(query) ||
                            item.section.toLowerCase().includes(query) ||
                            item.modality.toLowerCase().includes(query);

      let matchesModality = true;
      if (activeAtlasModality !== "all") {
        matchesModality = item.modality.toLowerCase().includes(activeAtlasModality.toLowerCase());
      }

      return matchesSearch && matchesModality;
    });

    if (atlasItemsCountEl) atlasItemsCountEl.textContent = filtered.length;

    if (filtered.length === 0) {
      atlasGrid.innerHTML = `<div class="no-cards-placeholder" style="grid-column: 1 / -1;">Žádné snímky nevyhovují zvoleným filtrům.</div>`;
      return;
    }

    filtered.forEach(item => {
      const card = document.createElement("div");
      card.className = "atlas-card";

      const mLow = item.modality.toLowerCase();
      let chipClass = "mod-rtg";
      if (mLow.includes("ct")) chipClass = "mod-ct";
      else if (mLow.includes("mr")) chipClass = "mod-mr";
      else if (mLow.includes("uz") || mLow.includes("doppler")) chipClass = "mod-uz";
      else if (mLow.includes("interv") || mLow.includes("dsa") || mLow.includes("angio") || mLow.includes("pta")) chipClass = "mod-intervence";

      card.innerHTML = `
        <div class="atlas-card-image-box">
          <img src="${item.src}" alt="${item.title}" loading="lazy" />
          <span class="atlas-modality-badge ${chipClass}">${item.modality}</span>
        </div>
        <div class="atlas-card-body">
          <span class="atlas-card-category">${item.section}</span>
          <h4 class="atlas-card-title">${item.title}</h4>
          <p class="atlas-card-desc">${item.caption}</p>
        </div>
      `;

      card.addEventListener("click", () => {
        openLightbox(item);
      });

      atlasGrid.appendChild(card);
    });
  }

  // --- LIGHTBOX (DETAIL SNÍMKU) ---

  function openLightbox(item) {
    activeLightboxItem = item;
    if (lightboxImg) lightboxImg.src = item.src;
    if (lightboxTitle) lightboxTitle.textContent = item.title;
    if (lightboxModality) {
      lightboxModality.textContent = item.modality;
      const mLow = item.modality.toLowerCase();
      lightboxModality.className = "lightbox-modality " + (
        mLow.includes("ct") ? "mod-ct" :
        mLow.includes("mr") ? "mod-mr" :
        mLow.includes("uz") ? "mod-uz" :
        mLow.includes("interv") ? "mod-intervence" : "mod-rtg"
      );
    }
    if (lightboxCaption) lightboxCaption.textContent = item.caption;

    if (lightboxOpenTopicBtn) {
      if (item.questionId) {
        lightboxOpenTopicBtn.style.display = "inline-flex";
        lightboxOpenTopicBtn.onclick = () => {
          closeLightbox();
          closeAtlas();
          const targetQ = QUESTIONS.find(q => q.id === item.questionId);
          if (targetQ) openCardDetail(targetQ);
        };
      } else {
        lightboxOpenTopicBtn.style.display = "none";
      }
    }

    lightboxDialog.showModal();
  }

  function closeLightbox() {
    lightboxDialog.close();
    activeLightboxItem = null;
  }

  // --- INDIKAČNÍ ALGORITMY ---

  function openAlgoDialog() {
    renderAlgoMatrix();
    algoDialog.showModal();
    document.body.style.overflow = "hidden";
  }

  function closeAlgoDialog() {
    algoDialog.close();
    document.body.style.overflow = "auto";
  }

  function renderAlgoMatrix() {
    if (!algoMatrixGrid) return;
    
    const ALGO_DATA = [
      {
        clinicalState: "Akutní CMP (podezření na ischemii / krvácení)",
        modality1st: "Nativní CT mozku + CTA + CTP",
        notes: "Vyloučení krvácení pro i.v. trombolýzu, CTA pro trombektomii do 6-24 h",
        goldStandard: "CT iktový protokol / DWI MRI"
      },
      {
        clinicalState: "Akutní trauma hlavy a krku (GCS < 15, ztráta vědomí)",
        modality1st: "Nativní CT mozku + kostní okno + CT krční páteře",
        notes: "Rychlá detekce epidurálního/subdurálního hematomu a fraktur",
        goldStandard: "Multidetektorové CT"
      },
      {
        clinicalState: "Podezření na plicní embolii (PE)",
        modality1st: "CT angiografie plicnice (CTA)",
        notes: "Při KI kontrastní látky ventilačně-perfuzní scintigrafie plic (V/Q)",
        goldStandard: "CTA plicnice"
      },
      {
        clinicalState: "Bolest v pravém podžebří (suspektní cholecystitida)",
        modality1st: "Ultrasonografie (UZ) břicha",
        notes: "Detekce konkrementů, ztluštění stěny > 3 mm, sonografický Murphyho znak",
        goldStandard: "UZ břicha / MRCP"
      },
      {
        clinicalState: "Bolest v pravém podbřišku (suspektní apendicitida)",
        modality1st: "UZ břicha (děti, mladí) / Kontrastní CT (dospělí)",
        notes: "Aperistaltická tubulární struktura > 6 mm se stěnou bez kompresibility",
        goldStandard: "Kontrastní CT břicha"
      },
      {
        clinicalState: "Akutní renální kolika (suspektní urolitiáza)",
        modality1st: "Nízkodávkové nekontrastní CT (Low-Dose NCCT)",
        notes: "100% senzitivita i pro rtg nekontrastní urátové konkrementy",
        goldStandard: "Low-Dose NCCT břicha a pánve"
      },
      {
        clinicalState: "Perforace dutého orgánu (akutní břicho)",
        modality1st: "Nativní RTG hrudníku/břicha vestoje + CT s i.v. KL",
        notes: "Srpkovitý volný plyn pod bránicí; CT odhalí přesné místo perforace",
        goldStandard: "Kontrastní CT břicha"
      },
      {
        clinicalState: "Hluboká žilní trombóza (HŽT) DKK",
        modality1st: "Kompresní duplexní ultrasonografie (CUS)",
        notes: "Nemožnost stlačení žilního lumen sondou, chybění toku na Doppleru",
        goldStandard: "Kompresní duplexní UZ"
      }
    ];

    algoMatrixGrid.innerHTML = ALGO_DATA.map(item => `
      <div class="algo-card" style="background: var(--bg-secondary); border: 1px solid var(--border); border-radius: var(--radius-md); padding: 1.25rem;">
        <h4 style="color: var(--primary); font-size: 1rem; margin-bottom: 0.5rem;">${item.clinicalState}</h4>
        <div style="font-size: 0.85rem; margin-bottom: 0.4rem;"><strong>1. volba:</strong> <span class="text-amber">${item.modality1st}</span></div>
        <div style="font-size: 0.82rem; color: var(--text-secondary); margin-bottom: 0.4rem;">${item.notes}</div>
        <div style="font-size: 0.78rem; color: var(--text-muted); border-top: 1px solid var(--border); padding-top: 0.4rem;"><strong>Standard:</strong> ${item.goldStandard}</div>
      </div>
    `).join('');
  }

  // --- LOGIKA PŘIŘAZOVACÍ HRY (MATCHING GAME) ---

  const RADIOLOGY_MATCHING_PAIRS = [
    { term: "Hounsfieldova jednotka (HU)", desc: "Kvantitativní škála denzity na CT: voda = 0, vzduch = -1000, kost = +1000 HU." },
    { term: "T1 vážený obraz na MR", desc: "Tuk je hyperintenzní (světlý), tekutina/likvor je hypointenzní (tmavá)." },
    { term: "T2 vážený obraz na MR", desc: "Tekutina a edém jsou hyperintenzní (jasně světlé), tuk je středně šedý." },
    { term: "FLAIR sekvence na MR", desc: "T2 zobrazení s potlačením volné tekutiny (likvoru) pro vyniknutí periventrikulárních lézí a edému." },
    { term: "DWI sekvence na MR", desc: "Zobrazení difuze molekul vody – klíčové pro hyperakutní záchyt cytotoxického edému při ischémii." },
    { term: "Piezoelektrický jev", desc: "Přeměna elektrické energie na vysokofrekvenční akustické vlnění v ultrazvukové sondě a naopak." },
    { term: "Dopplerův jev", desc: "Frekvenční posun odraženého ultrazvuku od pohybujících se erytrocytů pro měření rychlosti a směru toku krve." },
    { term: "Riglerův příznak (Double wall)", desc: "Vizualizace vnitřního i vnějšího obrysu střevní stěny na RTG břicha vleže při pneumoperitoneu." },
    { term: "Golden S sign", desc: "S-tvarované zakřivení zvednuté horizontální fisury při atelektáze horního laloku způsobené centrálním nádorem." },
    { term: "Epidurální hematom", desc: "Bikonvexní (čočkovitý) hyperdenzní útvar na CT po ruptuře a. meningea media, nepřekračuje lebeční švy." },
    { term: "Subdurální hematom", desc: "Srpkovitý hyperdenzní/hypodenzní útvar po ruptuře přemosťujících žil volně překračující lebeční švy." },
    { term: "Perkutánní transluminální angioplastika (PTA)", desc: "Mechanické rozšíření zúžené či uzavřené tepny pomocí balónkového katetru s možností implantace stentu." }
  ];

  function openMatchingGame() {
    const shuffledPairs = [...RADIOLOGY_MATCHING_PAIRS].sort(() => 0.5 - Math.random()).slice(0, 4);

    gameSelectedTerm = null;
    gameSelectedDesc = null;
    gameErrorsCount = 0;
    gamePairsLeft = 4;

    if (gameErrorsEl) gameErrorsEl.textContent = "0";
    if (gameLeftCountEl) gameLeftCountEl.textContent = "4";

    const terms = shuffledPairs.map((p, idx) => ({ id: `pair-${idx}`, text: p.term }));
    const descriptions = shuffledPairs.map((p, idx) => ({ id: `pair-${idx}`, text: p.desc }));

    const shuffledTerms = [...terms].sort(() => 0.5 - Math.random());
    const shuffledDescs = [...descriptions].sort(() => 0.5 - Math.random());

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
    const alreadySelected = gameColLeft.querySelector(".game-card.selected");
    if (alreadySelected) alreadySelected.classList.remove("selected");
    gameSelectedTerm = card;
    card.classList.add("selected");
    checkGameMatch();
  }

  function selectDesc(card) {
    if (card.classList.contains("matched")) return;
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
      gameSelectedTerm.classList.remove("selected");
      gameSelectedDesc.classList.remove("selected");
      gameSelectedTerm.classList.add("matched");
      gameSelectedDesc.classList.add("matched");

      gamePairsLeft--;
      if (gameLeftCountEl) gameLeftCountEl.textContent = gamePairsLeft;

      gameSelectedTerm = null;
      gameSelectedDesc = null;

      if (gamePairsLeft === 0) {
        setTimeout(() => {
          alert(`Výborně! Úspěšně jsi spojil(a) všechny radiologické pojmy. Počet chyb: ${gameErrorsCount}`);
          closeMatchingGame();
        }, 300);
      }
    } else {
      const tCard = gameSelectedTerm;
      const dCard = gameSelectedDesc;
      tCard.classList.add("wrong");
      dCard.classList.add("wrong");

      gameErrorsCount++;
      if (gameErrorsEl) gameErrorsEl.textContent = gameErrorsCount;

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

  // --- EVENT LISTENERY ---

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

  leitnerBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const grade = btn.getAttribute("data-grade");
      gradeQuestion(grade);
    });
  });

  if (studyDueBtn) {
    studyDueBtn.addEventListener("click", () => {
      activeFilterStatus = "due";
      if (statusFilter) statusFilter.value = "due";
      renderCards();
      cardsGrid.scrollIntoView({ behavior: "smooth" });
    });
  }

  tabBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const tabId = btn.getAttribute("data-tab");
      switchTab(tabId);
    });
  });

  if (dialogCloseBtn) dialogCloseBtn.addEventListener("click", closeCardDetail);
  if (detailDialog) {
    detailDialog.addEventListener("click", (e) => {
      if (e.target === detailDialog) closeCardDetail();
    });
  }

  if (dialogJumpAtlasBtn) {
    dialogJumpAtlasBtn.addEventListener("click", () => {
      if (activeQuestion) {
        closeCardDetail();
        openAtlas(activeQuestion.title);
      }
    });
  }

  // Atlas listenery
  if (atlasOpenBtn) atlasOpenBtn.addEventListener("click", () => openAtlas());
  if (atlasCloseBtn) atlasCloseBtn.addEventListener("click", closeAtlas);
  if (atlasDialog) {
    atlasDialog.addEventListener("click", (e) => {
      if (e.target === atlasDialog) closeAtlas();
    });
  }

  if (atlasSearchInput) {
    atlasSearchInput.addEventListener("input", (e) => {
      activeAtlasSearch = e.target.value;
      renderAtlasGrid();
    });
  }

  atlasModBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      atlasModBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      activeAtlasModality = btn.getAttribute("data-mod");
      renderAtlasGrid();
    });
  });

  // Lightbox listenery
  if (lightboxCloseBtn) lightboxCloseBtn.addEventListener("click", closeLightbox);
  if (lightboxDialog) {
    lightboxDialog.addEventListener("click", (e) => {
      if (e.target === lightboxDialog) closeLightbox();
    });
  }

  // Matching game listenery
  if (matchingGameOpenBtn) matchingGameOpenBtn.addEventListener("click", openMatchingGame);
  if (gameCloseBtn) gameCloseBtn.addEventListener("click", closeMatchingGame);
  if (gameResetBtn) gameResetBtn.addEventListener("click", openMatchingGame);
  if (gameDialog) {
    gameDialog.addEventListener("click", (e) => {
      if (e.target === gameDialog) closeMatchingGame();
    });
  }

  // Algoritmy listenery
  if (algoBtn) algoBtn.addEventListener("click", openAlgoDialog);
  if (algoCloseBtn) algoCloseBtn.addEventListener("click", closeAlgoDialog);
  if (algoDialog) {
    algoDialog.addEventListener("click", (e) => {
      if (e.target === algoDialog) closeAlgoDialog();
    });
  }

  // Klávesové zkratky (ESC)
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      if (lightboxDialog && lightboxDialog.open) closeLightbox();
      else if (detailDialog && detailDialog.open) closeCardDetail();
      else if (atlasDialog && atlasDialog.open) closeAtlas();
      else if (gameDialog && gameDialog.open) closeMatchingGame();
      else if (algoDialog && algoDialog.open) closeAlgoDialog();
    }
  });

  // Chatbot integrace
  initChatbot();

  // Prvotní vykreslení
  updateDashboardStats();
  renderCards();
});

// --- FLOATING GEMINI CHATBOT LOGIC ---

function initChatbot() {
  const fab = document.getElementById("chatbot-fab");
  const panel = document.getElementById("chatbot-panel");
  const closeBtn = document.getElementById("chatbot-close-btn");
  const form = document.getElementById("chatbot-input-form");
  const input = document.getElementById("chatbot-input");
  const messages = document.getElementById("chatbot-messages");
  const settingsBtn = document.getElementById("chatbot-settings-btn");
  const settingsOverlay = document.getElementById("chatbot-settings-overlay");
  const settingsCloseBtn = document.getElementById("chatbot-settings-close-btn");
  const apiKeyInput = document.getElementById("chatbot-api-key-input");
  const saveKeyBtn = document.getElementById("chatbot-save-key-btn");
  const clearKeyBtn = document.getElementById("chatbot-clear-key-btn");
  const typingIndicator = document.getElementById("chatbot-typing-indicator");
  const suggestionChips = document.querySelectorAll(".suggestion-chip");

  if (!fab || !panel) return;

  let apiKey = localStorage.getItem("radiologie_gemini_api_key") || "";
  let conversationHistory = [];

  const togglePanel = (open) => {
    const isOpen = open !== undefined ? open : !panel.classList.contains("open");
    panel.classList.toggle("open", isOpen);
    fab.setAttribute("aria-expanded", isOpen ? "true" : "false");
    if (isOpen) {
      input.focus();
      const badge = document.getElementById("chatbot-badge");
      if (badge) badge.style.display = "none";
    }
  };

  fab.addEventListener("click", () => togglePanel());
  closeBtn.addEventListener("click", () => togglePanel(false));

  settingsBtn.addEventListener("click", () => {
    if (apiKeyInput) apiKeyInput.value = apiKey;
    settingsOverlay.classList.add("open");
  });

  settingsCloseBtn.addEventListener("click", () => {
    settingsOverlay.classList.remove("open");
  });

  saveKeyBtn.addEventListener("click", () => {
    const val = apiKeyInput.value.trim();
    if (val) {
      apiKey = val;
      localStorage.setItem("radiologie_gemini_api_key", apiKey);
      alert("API klíč byl úspěšně uložen do vašeho prohlížeče.");
      settingsOverlay.classList.remove("open");
    }
  });

  clearKeyBtn.addEventListener("click", () => {
    apiKey = "";
    localStorage.removeItem("radiologie_gemini_api_key");
    if (apiKeyInput) apiKeyInput.value = "";
    alert("Uložený API klíč byl smazán.");
    settingsOverlay.classList.remove("open");
  });

  suggestionChips.forEach(chip => {
    chip.addEventListener("click", () => {
      const q = chip.getAttribute("data-query");
      if (q) {
        input.value = q;
        form.dispatchEvent(new Event("submit"));
      }
    });
  });

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const userText = input.value.trim();
    if (!userText) return;

    appendMessage("user", userText);
    input.value = "";
    conversationHistory.push({ role: "user", text: userText });

    if (typingIndicator) typingIndicator.classList.add("active");
    messages.scrollTop = messages.scrollHeight;

    try {
      let responseText = "";
      if (apiKey) {
        responseText = await callDirectGemini(userText, conversationHistory, apiKey);
      } else {
        responseText = await callServerProxy(userText, conversationHistory);
      }
      appendMessage("assistant", responseText);
      conversationHistory.push({ role: "model", text: responseText });
    } catch (err) {
      console.error(err);
      appendMessage("assistant", "Omlouvám se, došlo k chybě při komunikaci s AI asistentem. Zkontrolujte prosím připojení k internetu nebo zadejte svůj Gemini API klíč v nastavení.");
    } finally {
      if (typingIndicator) typingIndicator.classList.remove("active");
      messages.scrollTop = messages.scrollHeight;
    }
  });

  function appendMessage(sender, text) {
    const msgDiv = document.createElement("div");
    msgDiv.className = `message ${sender}`;
    msgDiv.innerHTML = `<div class="message-content">${formatMessageText(text)}</div>`;
    messages.appendChild(msgDiv);
    messages.scrollTop = messages.scrollHeight;
  }

  function formatMessageText(text) {
    return text
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      .replace(/`([^`]+)`/g, '<code>$1</code>')
      .replace(/\n/g, '<br>');
  }

  async function callDirectGemini(query, history, key) {
    const systemPrompt = "Jsi vysoce odborný lékařský asistent pro výuku radiologie a zobrazovacích metod pro studenty všeobecného lékařství. Odpovídej věcně, srozumitelně, v českém jazyce s důrazem na klinickou semiologii, fyzikální principy RTG, CT, MR, UZ, intervenční radiologie a indikační kritéria.";
    
    const contents = history.map(h => ({
      role: h.role === "assistant" || h.role === "model" ? "model" : "user",
      parts: [{ text: h.text }]
    }));

    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${key}`;
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        system_instruction: { parts: [{ text: systemPrompt }] },
        contents: contents,
        generationConfig: { temperature: 0.3, maxOutputTokens: 1000 }
      })
    });

    if (!res.ok) throw new Error("Chyba Gemini API");
    const data = await res.json();
    return data.candidates[0].content.parts[0].text;
  }

  async function callServerProxy(query, history) {
    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        message: query,
        subject: "radiologie",
        history: history
      })
    });
    if (!res.ok) throw new Error("Proxy failed");
    const data = await res.json();
    return data.reply || data.response;
  }
}
