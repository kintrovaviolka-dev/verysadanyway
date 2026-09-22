// kardio/app.js - Aplikační logika pro Kardiologický studijní portál (4. ročník VL)

document.addEventListener("DOMContentLoaded", () => {
  // --- LOCAL STORAGE & LEITNER ENGINE ---
  const STORAGE_KEY = "kardio_leitner_v1";
  const THEME_KEY = "kardio_theme_v1";
  const STATS_KEY = "kardio_stats_v1";
  const PORTAL_LANG_KEY = "kardio_portal_lang_v1";
  const EKG_LANG_KEY = "kardio_ekg_lang_v1";

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

  let leitnerState = getStoredLeitner();
  let userStats = getStoredStats();

  const BOX_INTERVALS = {
    1: 1,  // Box 1: Denně (1 den)
    2: 2,  // Box 2: Obden (2 dny)
    3: 5,  // Box 3: Každých 5 dní
    4: 10  // Box 4: Zvládnuto (10 dní)
  };

  // --- I18N TRANSLATIONS DICTIONARY ---
  const I18N = {
    cs: {
      title: "Kardiologie | Lékařský Studijní Portál 4. ročníku",
      metaDesc: "Interaktivní studijní portál kardiologie pro studenty 4. ročníku všeobecného lékařství. Třífázová metodika Learn-Recall-Breakdown, nejnovější ESC Guidelines (2023–2026) a Spaced Repetition banka s 115+ kartičkami.",
      skipLink: "Přeskočit na obsah",
      brandTitle: "Kardiologie",
      brandTag: "4. ročník",
      brandSubtitle: "ESC Guidelines (2023–2026) • 3-fázový rozpad témat • 115+ Leitner karet",
      backHub: "← Rozcestník",
      srGlobalBtn: "Spaced Repetition (115+)",
      themeToggle: "Přepnout motiv",
      dashOverallLabel: "Celkové zvládnutí oboru",
      dashOverallSub: "Karty v Boxu 4 (zvládnuté s odstupem 10 dní)",
      dashLeitnerLabel: "Leitnerův systém (Box 1–4)",
      dashBox1Title: "Karty k opakování denně",
      dashBox2Title: "Karty k opakování obden",
      dashBox3Title: "Karty k opakování každých 5 dní",
      dashBox4Title: "Zvládnuté karty (každých 10 dní)",
      dashFreq1: "Denně",
      dashFreq2: "2 dny",
      dashFreq3: "5 dní",
      dashFreq4: "10 dní",
      dashLeitnerSub: "Intervalový algoritmus upevňování znalostí v dlouhodobé paměti",
      dashDueLabel: "K opakování na dnešek",
      dashDueBtn: "⚡ Zopakovat dnešní karty",
      navModules: "Témata (12)",
      navEkg: "EKG Masterclass",
      navSr: "Spaced Repetition (115+)",
      searchPlaceholder: "Hledat téma, lék, syndrom...",
      searchNoMatch: 'Žádný kardiologický modul neodpovídá hledání "{query}".',
      searchClear: "Vymazat filtr",
      moduleFlow1: "1. Teorie",
      moduleFlow2: "2. Recall",
      moduleFlow3: "3. Tahák",
      moduleAction: "Spustit →",
      detailBack: "← Zpět na přehled",
      stepTheory: "Teorie & Algoritmy",
      stepRecall: "Active Recall & Scénáře",
      stepSummary: "Klinický tahák & Třída III",
      theoryDone: "Krok 1/3: Teorie nastudována",
      nextRecall: "Přejít na Krok 2: Active Recall & Scénáře →",
      backTheory: "← Zpět na Teorie",
      nextSummary: "Přejít na Krok 3: Klinický tahák & Třída III →",
      scDecision: "Rozhodnutí & Postup:",
      scPearl: "High-Yield Perla:",
      scReveal: "👁️ Zobrazit klinické řešení a zdůvodnění",
      scHide: "🙈 Skrýt řešení",
      scBadge: "Scénář",
      quizCorrect: "✅ Správně!",
      quizIncorrect: "❌ Nesprávně.",
      mustKnowHeading: "High-Yield Zkouškové Perly (Must-Know)",
      classThreeHeading: "ESC Třída III: Škodlivé a zakázané postupy",
      classThreeTag: "❌ ZÁKAZ / TŘÍDA III",
      classThreeReason: "Důvod:",
      backToModules: "← Zpět na seznam témat",
      startTopicSr: "🔥 Procvičit kartičky tohoto tématu ve Spaced Repetition",
      srAllTopics: "Všechna témata (115+ karet)",
      srBack: "← Zpět",
      srHintFront: "Klikněte pro zobrazení odpovědi",
      srHeadingBack: "Správné řešení",
      srHintBack: "Ohodnoťte své vybavení níže",
      srBtnAgainLabel: "❌ Znovu / Nevím",
      srBtnAgainSub: "Vrátit do Boxu 1",
      srBtnGoodLabel: "✅ Zvládnuto / Vím",
      srBtnGoodSub: "Posunout do vyššího boxu",
      srKeyHints: 'Klávesové zkratky: <span class="key-hint">Mezerník</span> pro otočení, <span class="key-hint">1</span> Znovu, <span class="key-hint">2</span> Zvládnuto',
      srDoneTitle: "🎉 Skvělá práce! Všechny karty z tohoto bloku jsou zopakované.",
      srDoneCategory: "HOTOVO",
      srHighYieldLabel: "High-Yield:",
      srEmptyAlert: "Pro zvolený filtr nemáte momentálně žádné karty k opakování!",
      guidelinesHeading: "Oficiální fulltexty ESC Guidelines & Reference",
      suppSectionTitle: "Doplňkové interaktivní moduly & Fulltextové průvodce",
      suppSectionSubtitle: "Samostatné interaktivní simulátory, hloubkové ESC průvodce, kazuistiky a osciloskopy",
      suppTag: "Doplňkové studijní materiály",
      suppPsvtTitle: "Paroxysmální SVT (pSVT / TSVP)",
      suppPsvtDesc: "Interaktivní klinický simulátor s EKG osciloskopem, AVNRT vs. AVRT/WPW, modifikovaný Valsalva manévr a 6 reálných kazuistik.",
      suppPsvtBtn: "Otevřít pSVT simulátor →",
      suppAksTitle: "ESC Guidelines: Akutní koronární syndrom",
      suppAksDesc: "Samostatný interaktivní výukový portál pro doporučení ESC 2023 s integrovanými 3D kartami a kazuistikami.",
      suppAksBtn: "Otevřít AKS průvodce →",
      suppHtnTitle: "ESC Guidelines: Arteriální hypertenze",
      suppHtnDesc: "Interaktivní aplikace pokrývající novou definici zvýšeného TK, cílový STK 120–129 mmHg a fixní trojkombinace.",
      suppHtnBtn: "Otevřít Hypertenze průvodce →",
      suppHfTitle: "ESC Guidelines: Srdeční selhání",
      suppHfDesc: "Hloubkový modul pro léčbu srdečního selhání, pilíře farmakoterapie (ARNI/ACEi, BB, MRA, SGLT2i) a i.v. železo.",
      suppHfBtn: "Otevřít HF průvodce →",
      suppMidefTitle: "5. Univerzální definice infarktu myokardu",
      suppMidefDesc: "Interaktivní průvodce klasifikací typů 1–5 IM, kritéria myokardiálního poškození, MINOCA a periprocedurálního infarktu.",
      suppMidefBtn: "Otevřít Definici IM →",
      footerText: "© 2026 Viola Kintrová • Kardiologický výukový portál pro 4. ročník Všeobecného lékařství."
    },
    es: {
      title: "Cardiología | Portal de Estudio Médico de 4.º Curso",
      metaDesc: "Portal interactivo de estudio de cardiología para estudiantes de 4.º curso de medicina. Metodología Learn-Recall-Breakdown en 3 fases, últimas guías ESC (2023–2026) y banco de repaso espaciado con 115+ tarjetas.",
      skipLink: "Saltar al contenido",
      brandTitle: "Cardiología",
      brandTag: "4.º curso",
      brandSubtitle: "Guías ESC (2023–2026) • Metodología en 3 fases • Banco Leitner de 115+ tarjetas",
      backHub: "← Índice central",
      srGlobalBtn: "Repaso Espaciado (115+)",
      themeToggle: "Cambiar tema",
      dashOverallLabel: "Dominio total de la materia",
      dashOverallSub: "Tarjetas en Caja 4 (dominadas tras 10 días)",
      dashLeitnerLabel: "Sistema Leitner (Cajas 1–4)",
      dashBox1Title: "Tarjetas para repasar a diario",
      dashBox2Title: "Tarjetas para repasar cada 2 días",
      dashBox3Title: "Tarjetas para repasar cada 5 días",
      dashBox4Title: "Tarjetas dominadas (cada 10 días)",
      dashFreq1: "Diario",
      dashFreq2: "2 días",
      dashFreq3: "5 días",
      dashFreq4: "10 días",
      dashLeitnerSub: "Algoritmo de repaso espaciado para consolidación en memoria a largo plazo",
      dashDueLabel: "Pendientes para hoy",
      dashDueBtn: "⚡ Repasar tarjetas de hoy",
      navModules: "Temas (12)",
      navEkg: "EKG Masterclass",
      navSr: "Repaso Espaciado (115+)",
      searchPlaceholder: "Buscar tema, fármaco, síndrome...",
      searchNoMatch: 'Ningún módulo de cardiología coincide con la búsqueda "{query}".',
      searchClear: "Limpiar filtro",
      moduleFlow1: "1. Teoría",
      moduleFlow2: "2. Recall",
      moduleFlow3: "3. Perlas",
      moduleAction: "Iniciar →",
      detailBack: "← Volver al índice",
      stepTheory: "Teoría y Algoritmos",
      stepRecall: "Active Recall y Casos",
      stepSummary: "Perlas Clínicas y Clase III",
      theoryDone: "Paso 1/3: Teoría completada",
      nextRecall: "Ir al Paso 2: Active Recall y Casos Clínicos →",
      backTheory: "← Volver a Teoría",
      nextSummary: "Ir al Paso 3: Perlas Clínicas y Clase III →",
      scDecision: "Decisión y Conducta Clínica:",
      scPearl: "Perla de Alto Rendimiento:",
      scReveal: "👁️ Ver resolución clínica y justificación",
      scHide: "🙈 Ocultar solución",
      scBadge: "Caso Clínico",
      quizCorrect: "✅ ¡Correcto!",
      quizIncorrect: "❌ Incorrecto.",
      mustKnowHeading: "Perlas Clave de Examen de Alto Rendimiento (Must-Know)",
      classThreeHeading: "Guías ESC Clase III: Intervenciones Perjudiciales y Prohibidas",
      classThreeTag: "❌ PROHIBIDO / CLASE III",
      classThreeReason: "Justificación:",
      backToModules: "← Volver a la lista de temas",
      startTopicSr: "🔥 Practicar tarjetas de este tema en Repaso Espaciado",
      srAllTopics: "Todos los temas (115+ tarjetas)",
      srBack: "← Volver",
      srHintFront: "Haga clic para ver la respuesta",
      srHeadingBack: "Solución correcta",
      srHintBack: "Evalúe su recuerdo a continuación",
      srBtnAgainLabel: "❌ Otra vez / No sé",
      srBtnAgainSub: "Volver a Caja 1",
      srBtnGoodLabel: "✅ Dominado / Lo sé",
      srBtnGoodSub: "Avanzar a caja superior",
      srKeyHints: 'Atajos de teclado: <span class="key-hint">Espacio</span> para voltear, <span class="key-hint">1</span> Otra vez, <span class="key-hint">2</span> Dominado',
      srDoneTitle: "🎉 ¡Excelente trabajo! Ha repasado todas las tarjetas de este bloque.",
      srDoneCategory: "COMPLETADO",
      srHighYieldLabel: "Alto Rendimiento:",
      srEmptyAlert: "¡No tiene tarjetas pendientes de repaso para el filtro seleccionado!",
      guidelinesHeading: "Guías Oficiales ESC de Texto Completo y Referencias",
      suppSectionTitle: "Módulos interactivos complementarios y Guías de texto completo",
      suppSectionSubtitle: "Simuladores clínicos interactivos, guías profundas ESC, casos y osciloscopio",
      suppTag: "Materiales complementarios de estudio",
      suppPsvtTitle: "Taquicardia Supraventricular Paroxística (TSVP / pSVT)",
      suppPsvtDesc: "Guía clínica interactiva: TRNAV vs. TRAV/WPW vs. Taquicardia auricular, osciloscopio de ECG en Canvas, maniobra de Valsalva modificada y 6 casos.",
      suppPsvtBtn: "Abrir simulador TSVP →",
      suppAksTitle: "Guías ESC: Síndrome Coronario Agudo",
      suppAksDesc: "Portal interactivo dedicado a las recomendaciones ESC 2023 con tarjetas 3D y casos integrados.",
      suppAksBtn: "Abrir guía de SCA →",
      suppHtnTitle: "Guías ESC: Hipertensión arterial",
      suppHtnDesc: "Aplicación interactiva que aborda la nueva definición de PA elevada, objetivo PAS 120–129 mmHg y combinaciones triples.",
      suppHtnBtn: "Abrir guía de Hipertensión →",
      suppHfTitle: "Guías ESC: Insuficiencia cardíaca",
      suppHfDesc: "Módulo profundo para el tratamiento de la insuficiencia cardíaca, pilares de farmacoterapia (ARNI/IECA, BB, ARM, iSGLT2) y hierro i.v.",
      suppHfBtn: "Abrir guía de IC →",
      suppMidefTitle: "5.ª Definición universal de infarto",
      suppMidefDesc: "Guía interactiva sobre los tipos 1–5 de IM, criterios de daño miocárdico, MINOCA e infarto periprocedimiento.",
      suppMidefBtn: "Abrir Definición de IM →",
      footerText: "© 2026 Viola Kintrová • Portal de estudio de cardiología para 4.º curso de Medicina."
    }
  };

  const initialLang = localStorage.getItem(PORTAL_LANG_KEY) || localStorage.getItem(EKG_LANG_KEY) || "cs";

  // --- APPLICATION STATE ---
  const state = {
    activeView: "modules", // "modules" | "ekg" | "module-detail" | "spaced-repetition"
    selectedModuleId: null,
    activeTopicStep: "theory", // "theory" | "recall" | "summary"
    activeEkgSubpane: "desatero", // "desatero" | "anatomy" | "ions" | "syndromes" | "pacemakers" | "quiz"
    lang: initialLang, // "cs" | "es"
    ekgLang: initialLang, // "cs" | "es"
    searchQuery: "",
    srSession: {
      cards: [],
      currentIndex: 0,
      isFlipped: false,
      filterCategory: "all",
      filterDueOnly: false
    }
  };

  // --- DATA ACCESS & FORMATTING HELPERS ---
  const formatMarkdown = (str) => {
    if (!str) return "";
    let formatted = String(str);
    // Bold: **text** -> <strong>text</strong>
    formatted = formatted.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
    // Italic: *text* -> <em>text</em>
    formatted = formatted.replace(/(?<!\*)\*(?!\*)(.*?)(?<!\*)\*(?!\*)/g, "<em>$1</em>");
    return formatted;
  };

  const getCardiologyData = () => {
    if (state.lang === "es" && typeof CARDIOLOGY_DATA_ES !== "undefined") {
      return CARDIOLOGY_DATA_ES;
    }
    return CARDIOLOGY_DATA;
  };

  // --- DOM ELEMENTS ---
  const themeToggleBtn = document.getElementById("theme-toggle");
  const backHubBtn = document.getElementById("back-hub-btn");
  const navModulesBtn = document.getElementById("nav-modules-btn");
  const navEkgBtn = document.getElementById("nav-ekg-btn");
  const navSrBtn = document.getElementById("nav-sr-btn");
  const searchInput = document.getElementById("search-input");
  
  // Global & EKG Language Switchers
  const portalLangCsBtn = document.getElementById("portal-lang-cs");
  const portalLangEsBtn = document.getElementById("portal-lang-es");
  const ekgLangCsBtn = document.getElementById("ekg-lang-cs");
  const ekgLangEsBtn = document.getElementById("ekg-lang-es");
  
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
  const ekgView = document.getElementById("ekg-view");
  const moduleDetailView = document.getElementById("module-detail-view");
  const srView = document.getElementById("sr-view");
  const modulesGrid = document.getElementById("modules-grid");

  // EKG Masterclass Subnav elements
  const ekgSubDesatero = document.getElementById("ekg-sub-desatero");
  const ekgSubAnatomy = document.getElementById("ekg-sub-anatomy");
  const ekgSubIons = document.getElementById("ekg-sub-ions");
  const ekgSubSyndromes = document.getElementById("ekg-sub-syndromes");
  const ekgSubPacemakers = document.getElementById("ekg-sub-pacemakers");
  const ekgSubQuiz = document.getElementById("ekg-sub-quiz");

  const ekgPaneDesatero = document.getElementById("ekg-pane-desatero");
  const ekgPaneAnatomy = document.getElementById("ekg-pane-anatomy");
  const ekgPaneIons = document.getElementById("ekg-pane-ions");
  const ekgPaneSyndromes = document.getElementById("ekg-pane-syndromes");
  const ekgPanePacemakers = document.getElementById("ekg-pane-pacemakers");
  const ekgPaneQuiz = document.getElementById("ekg-pane-quiz");

  const desateroContainer = document.getElementById("desatero-container");
  const anatomyContainer = document.getElementById("anatomy-container");
  const ionsContainer = document.getElementById("ions-container");
  const syndromesContainer = document.getElementById("syndromes-container");
  const pacemakersContainer = document.getElementById("pacemakers-container");
  const ekgQuizContainer = document.getElementById("ekg-quiz-container");

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

  themeToggleBtn?.addEventListener("click", () => {
    document.body.classList.toggle("light-theme");
    const isLight = document.body.classList.contains("light-theme");
    localStorage.setItem(THEME_KEY, isLight ? "light" : "dark");
  });

  // --- BACK TO MAIN HUB ---
  backHubBtn?.addEventListener("click", () => {
    window.location.href = "../index.html";
  });

  // --- LEITNER BOX & STATS RECALCULATION ---
  const updateDashboardStats = () => {
    const allCards = getCardiologyData().flashcards;
    const now = Date.now();
    let b1 = 0, b2 = 0, b3 = 0, b4 = 0, due = 0;

    allCards.forEach((card) => {
      const cardState = leitnerState[card.id];
      if (!cardState) {
        b1++;
        due++;
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

  // --- GLOBAL UI LOCALIZATION UPDATER ---
  const updateGlobalLanguage = () => {
    const lang = state.lang;
    const i18n = I18N[lang] || I18N.cs;
    const isEs = lang === "es";

    document.documentElement.lang = lang;
    document.title = i18n.title;

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", i18n.metaDesc);

    const skipLink = document.getElementById("skip-link-text");
    if (skipLink) skipLink.textContent = i18n.skipLink;

    const brandTitle = document.getElementById("portal-brand-title");
    if (brandTitle) brandTitle.textContent = i18n.brandTitle;

    const brandTag = document.getElementById("portal-brand-tag");
    if (brandTag) brandTag.textContent = i18n.brandTag;

    const brandSubtitle = document.getElementById("portal-brand-subtitle");
    if (brandSubtitle) brandSubtitle.textContent = i18n.brandSubtitle;

    const backHubText = document.getElementById("back-hub-text");
    if (backHubText) backHubText.textContent = i18n.backHub;
    if (backHubBtn) backHubBtn.title = isEs ? "Volver al índice general" : "Zpět na centrální rozcestník předmětů";

    const startAllSrText = document.getElementById("start-all-sr-text");
    if (startAllSrText) startAllSrText.textContent = i18n.srGlobalBtn;
    if (startAllSrBtn) startAllSrBtn.title = isEs ? "Iniciar repaso de las 115+ tarjetas" : "Spustit globální trénink všech 115+ kartiček";

    if (themeToggleBtn) {
      themeToggleBtn.title = i18n.themeToggle;
      themeToggleBtn.setAttribute("aria-label", i18n.themeToggle);
    }

    // Dashboard
    const dashLabelOverall = document.getElementById("dash-label-overall");
    if (dashLabelOverall) dashLabelOverall.textContent = i18n.dashOverallLabel;

    const dashSubtextOverall = document.getElementById("dash-subtext-overall");
    if (dashSubtextOverall) dashSubtextOverall.textContent = i18n.dashOverallSub;

    const dashLabelLeitner = document.getElementById("dash-label-leitner");
    if (dashLabelLeitner) dashLabelLeitner.textContent = i18n.dashLeitnerLabel;

    const boxSlot1 = document.getElementById("box-slot-1");
    if (boxSlot1) boxSlot1.title = i18n.dashBox1Title;
    const boxSlot2 = document.getElementById("box-slot-2");
    if (boxSlot2) boxSlot2.title = i18n.dashBox2Title;
    const boxSlot3 = document.getElementById("box-slot-3");
    if (boxSlot3) boxSlot3.title = i18n.dashBox3Title;
    const boxSlot4 = document.getElementById("box-slot-4");
    if (boxSlot4) boxSlot4.title = i18n.dashBox4Title;

    const dashFreqBox1 = document.getElementById("dash-freq-box1");
    if (dashFreqBox1) dashFreqBox1.textContent = i18n.dashFreq1;
    const dashFreqBox2 = document.getElementById("dash-freq-box2");
    if (dashFreqBox2) dashFreqBox2.textContent = i18n.dashFreq2;
    const dashFreqBox3 = document.getElementById("dash-freq-box3");
    if (dashFreqBox3) dashFreqBox3.textContent = i18n.dashFreq3;
    const dashFreqBox4 = document.getElementById("dash-freq-box4");
    if (dashFreqBox4) dashFreqBox4.textContent = i18n.dashFreq4;

    const dashSubtextLeitner = document.getElementById("dash-subtext-leitner");
    if (dashSubtextLeitner) dashSubtextLeitner.textContent = i18n.dashLeitnerSub;

    const dashLabelDue = document.getElementById("dash-label-due");
    if (dashLabelDue) dashLabelDue.textContent = i18n.dashDueLabel;

    const startDueText = document.getElementById("start-due-text");
    if (startDueText) startDueText.textContent = i18n.dashDueBtn;

    // Navigation
    const navModulesText = document.getElementById("nav-modules-text");
    if (navModulesText) navModulesText.textContent = i18n.navModules;

    const navEkgText = document.getElementById("nav-ekg-text");
    if (navEkgText) navEkgText.textContent = i18n.navEkg;

    const navSrText = document.getElementById("nav-sr-text");
    if (navSrText) navSrText.textContent = i18n.navSr;

    if (searchInput) {
      searchInput.placeholder = i18n.searchPlaceholder;
      searchInput.setAttribute("aria-label", i18n.searchPlaceholder);
    }

    // Detail View breadcrumb & step tabs
    const detailBackText = document.getElementById("detail-back-text");
    if (detailBackText) detailBackText.textContent = i18n.detailBack;

    const stepTheoryText = document.getElementById("step-theory-text");
    if (stepTheoryText) stepTheoryText.textContent = i18n.stepTheory;

    const stepRecallText = document.getElementById("step-recall-text");
    if (stepRecallText) stepRecallText.textContent = i18n.stepRecall;

    const stepSummaryText = document.getElementById("step-summary-text");
    if (stepSummaryText) stepSummaryText.textContent = i18n.stepSummary;

    // Spaced Repetition View
    const srBackText = document.getElementById("sr-back-text");
    if (srBackText) srBackText.textContent = i18n.srBack;

    const srHintFront = document.getElementById("sr-hint-front");
    if (srHintFront) srHintFront.textContent = i18n.srHintFront;

    const srHeadingBack = document.getElementById("sr-heading-back");
    if (srHeadingBack) srHeadingBack.textContent = i18n.srHeadingBack;

    const srHintBack = document.getElementById("sr-hint-back");
    if (srHintBack) srHintBack.textContent = i18n.srHintBack;

    const srBtnAgainLabel = document.getElementById("sr-btn-again-label");
    if (srBtnAgainLabel) srBtnAgainLabel.textContent = i18n.srBtnAgainLabel;

    const srBtnAgainSub = document.getElementById("sr-btn-again-sub");
    if (srBtnAgainSub) srBtnAgainSub.textContent = i18n.srBtnAgainSub;

    const srBtnGoodLabel = document.getElementById("sr-btn-good-label");
    if (srBtnGoodLabel) srBtnGoodLabel.textContent = i18n.srBtnGoodLabel;

    const srBtnGoodSub = document.getElementById("sr-btn-good-sub");
    if (srBtnGoodSub) srBtnGoodSub.textContent = i18n.srBtnGoodSub;

    const srKeyHints = document.getElementById("sr-key-hints");
    if (srKeyHints) srKeyHints.innerHTML = i18n.srKeyHints;

    // Supplementary Section
    const suppSectionTitle = document.getElementById("supp-section-title");
    if (suppSectionTitle && i18n.suppSectionTitle) suppSectionTitle.textContent = i18n.suppSectionTitle;

    const suppSectionSubtitle = document.getElementById("supp-section-subtitle");
    if (suppSectionSubtitle && i18n.suppSectionSubtitle) suppSectionSubtitle.textContent = i18n.suppSectionSubtitle;

    const suppTag = document.getElementById("supp-tag");
    if (suppTag && i18n.suppTag) suppTag.textContent = i18n.suppTag;

    const suppPsvtTitle = document.getElementById("supp-psvt-title");
    if (suppPsvtTitle && i18n.suppPsvtTitle) suppPsvtTitle.textContent = i18n.suppPsvtTitle;
    const suppPsvtDesc = document.getElementById("supp-psvt-desc");
    if (suppPsvtDesc && i18n.suppPsvtDesc) suppPsvtDesc.textContent = i18n.suppPsvtDesc;

    const suppAksTitle = document.getElementById("supp-aks-title");
    if (suppAksTitle && i18n.suppAksTitle) suppAksTitle.textContent = i18n.suppAksTitle;
    const suppAksDesc = document.getElementById("supp-aks-desc");
    if (suppAksDesc && i18n.suppAksDesc) suppAksDesc.textContent = i18n.suppAksDesc;

    const suppHtnTitle = document.getElementById("supp-htn-title");
    if (suppHtnTitle && i18n.suppHtnTitle) suppHtnTitle.textContent = i18n.suppHtnTitle;
    const suppHtnDesc = document.getElementById("supp-htn-desc");
    if (suppHtnDesc && i18n.suppHtnDesc) suppHtnDesc.textContent = i18n.suppHtnDesc;

    const suppHfTitle = document.getElementById("supp-hf-title");
    if (suppHfTitle && i18n.suppHfTitle) suppHfTitle.textContent = i18n.suppHfTitle;
    const suppHfDesc = document.getElementById("supp-hf-desc");
    if (suppHfDesc && i18n.suppHfDesc) suppHfDesc.textContent = i18n.suppHfDesc;

    const suppMidefTitle = document.getElementById("supp-midef-title");
    if (suppMidefTitle && i18n.suppMidefTitle) suppMidefTitle.textContent = i18n.suppMidefTitle;
    const suppMidefDesc = document.getElementById("supp-midef-desc");
    if (suppMidefDesc && i18n.suppMidefDesc) suppMidefDesc.textContent = i18n.suppMidefDesc;

    // Featured Banner
    const featuredBannerTag = document.getElementById("featured-banner-tag");
    if (featuredBannerTag && i18n.featuredBannerTag) featuredBannerTag.textContent = i18n.featuredBannerTag;

    const featuredBannerTitle = document.getElementById("featured-banner-title");
    if (featuredBannerTitle && i18n.featuredBannerTitle) featuredBannerTitle.textContent = i18n.featuredBannerTitle;

    const featuredBannerDesc = document.getElementById("featured-banner-desc");
    if (featuredBannerDesc && i18n.featuredBannerDesc) featuredBannerDesc.textContent = i18n.featuredBannerDesc;

    const featuredBannerBtn = document.getElementById("featured-banner-btn");
    if (featuredBannerBtn && i18n.featuredBannerBtn) featuredBannerBtn.textContent = i18n.featuredBannerBtn;

    // Footer
    const footerText = document.getElementById("footer-text");
    if (footerText) footerText.textContent = i18n.footerText;

    // Sync button active classes
    if (isEs) {
      portalLangEsBtn?.classList.add("active");
      portalLangCsBtn?.classList.remove("active");
      ekgLangEsBtn?.classList.add("active");
      ekgLangCsBtn?.classList.remove("active");
    } else {
      portalLangCsBtn?.classList.add("active");
      portalLangEsBtn?.classList.remove("active");
      ekgLangCsBtn?.classList.add("active");
      ekgLangEsBtn?.classList.remove("active");
    }
  };

  const setLanguage = (lang) => {
    state.lang = lang;
    state.ekgLang = lang;
    try {
      localStorage.setItem(PORTAL_LANG_KEY, lang);
      localStorage.setItem(EKG_LANG_KEY, lang);
    } catch (e) {}

    updateGlobalLanguage();
    updateEkgUiLanguage();

    if (state.activeView === "modules") {
      renderModulesList();
    } else if (state.activeView === "module-detail" && state.selectedModuleId) {
      openModuleDetail(state.selectedModuleId, true);
    } else if (state.activeView === "spaced-repetition") {
      updateSrCategoryFilter();
      renderCurrentSrCard();
    } else if (state.activeView === "ekg") {
      switchEkgSubpane(state.activeEkgSubpane || "desatero");
    }
    updateDashboardStats();
  };

  portalLangCsBtn?.addEventListener("click", () => setLanguage("cs"));
  portalLangEsBtn?.addEventListener("click", () => setLanguage("es"));

  // Helper to render official ESC guideline links
  const renderGuidelinesBox = (mod, i18n) => {
    if (!mod.guidelineLinks || mod.guidelineLinks.length === 0) return "";
    return `
      <div class="guidelines-ref-box">
        <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 6px;">
          <div style="display: flex; align-items: center; gap: 8px;">
            <span style="font-size: 1.1rem;">📚</span>
            <strong style="font-size: 0.88rem; color: #38bdf8;">${i18n.guidelinesHeading || "Oficiální fulltexty ESC Guidelines & Reference"}</strong>
          </div>
          <span style="font-size: 0.72rem; color: var(--text-muted); font-family: var(--font-mono);">European Heart Journal • ESC</span>
        </div>
        <div style="display: flex; flex-wrap: wrap; gap: 10px; margin-top: 4px;">
          ${mod.guidelineLinks
            .map(
              (link) => `
            <a href="${link.url}" target="_blank" rel="noopener noreferrer" class="guideline-link-item" title="${escapeHTML(link.title)}">
              <span>🔗</span>
              <span>${escapeHTML(link.title)} ${link.year ? `(${link.year})` : ""}</span>
              <span style="font-size: 0.7rem; opacity: 0.8; font-family: var(--font-mono); margin-left: 2px;">[Fulltext ↗]</span>
            </a>
          `
            )
            .join("")}
        </div>
      </div>
    `;
  };

  // --- RENDER MODULES LIST ---
  const renderModulesList = () => {
    modulesGrid.innerHTML = "";
    const query = state.searchQuery.toLowerCase().trim();
    const currentData = getCardiologyData();
    const i18n = I18N[state.lang] || I18N.cs;

    const filtered = currentData.modules.filter((mod) => {
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
          <p style="font-size: 1.1rem; margin-bottom: 8px;">${i18n.searchNoMatch.replace("{query}", escapeHTML(query))}</p>
          <button class="btn btn-secondary btn-sm" id="clear-search-btn">${i18n.searchClear}</button>
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
            <span class="module-badge badge-${mod.badgeColor}">${formatMarkdown(mod.badge)}</span>
          </div>
          <h3 class="module-title">${mod.number}. ${formatMarkdown(mod.title)}</h3>
          <p class="module-desc">${formatMarkdown(mod.shortDesc)}</p>
        </div>
        <div class="module-footer">
          <div class="flow-pills">
            <span class="flow-pill">${i18n.moduleFlow1}</span>
            <span class="flow-pill">${i18n.moduleFlow2}</span>
            <span class="flow-pill">${i18n.moduleFlow3}</span>
          </div>
          <span class="module-action-text">${i18n.moduleAction}</span>
        </div>
      `;
      cardEl.addEventListener("click", () => {
        window.location.hash = `#modul-${mod.id}`;
        openModuleDetail(mod.id);
      });
      modulesGrid.appendChild(cardEl);
    });
  };

  // --- OPEN MODULE DETAIL (3-STEP MASTERY VIEW) ---
  const openModuleDetail = (moduleId, keepCurrentStep = false) => {
    const currentData = getCardiologyData();
    const mod = currentData.modules.find((m) => m.id === moduleId);
    if (!mod) return;

    const i18n = I18N[state.lang] || I18N.cs;
    state.selectedModuleId = moduleId;
    detailModuleTitle.textContent = `${mod.number}. ${mod.title}`;

    // 1. Teorie (Learn)
    theoryPane.innerHTML = `
      <div class="theory-banner-box">
        <span class="theory-tag">${formatMarkdown(mod.theory.banner.tag)}</span>
        <h3 class="theory-title">${formatMarkdown(mod.theory.banner.title)}</h3>
        <p class="theory-desc">${formatMarkdown(mod.theory.banner.text)}</p>
      </div>

      <div class="theory-sections-list">
        ${mod.theory.sections
          .map(
            (sec) => `
          <div class="theory-section-card">
            <h4 class="theory-sec-title sec-${sec.color}">${formatMarkdown(sec.title)}</h4>
            <div class="theory-sec-body">${formatMarkdown(sec.content)}</div>
          </div>
        `
          )
          .join("")}
      </div>

      ${renderGuidelinesBox(mod, i18n)}

      <div class="step-footer-actions">
        <span>${i18n.theoryDone}</span>
        <button class="btn btn-primary" id="btn-next-to-recall">
          ${i18n.nextRecall}
        </button>
      </div>
    `;

    document.getElementById("btn-next-to-recall")?.addEventListener("click", () => {
      switchTopicStep("recall");
      window.scrollTo({ top: 300, behavior: "smooth" });
    });

    // 2. Active Recall
    const scenariosHtml = (mod.recall.scenarios || [])
      .map(
        (sc, idx) => `
      <div class="scenario-card" id="sc-card-${idx}">
        <div class="scenario-header">
          <span class="scenario-badge">${i18n.scBadge} ${idx + 1}</span>
          <h4 class="scenario-title">${formatMarkdown(sc.title)}</h4>
        </div>
        
        <p class="scenario-question">${formatMarkdown(sc.question)}</p>

        <button class="reveal-btn" data-target="sc-ans-${idx}">
          <span>${i18n.scReveal}</span>
          <span>▼</span>
        </button>

        <div class="hidden-answer-box" id="sc-ans-${idx}">
          <div class="answer-text-block">
            <strong>${i18n.scDecision}</strong><br>
            ${formatMarkdown(sc.answer)}
          </div>
          <div class="pearl-box">
            📌 <strong>${i18n.scPearl}</strong> ${formatMarkdown(sc.pearl)}
          </div>
        </div>
      </div>
    `
      )
      .join("");

    const quizHtml = mod.recall.quiz
      ? `
      <div class="decision-quiz-box" style="margin-top: 30px;">
        <span class="quiz-badge">🎯 ${formatMarkdown(mod.recall.quiz.title)}</span>
        <p class="quiz-prompt">${formatMarkdown(mod.recall.quiz.prompt)}</p>
        <div class="quiz-options-list" id="mod-quiz-opts">
          ${mod.recall.quiz.options
            .map(
              (opt, optIdx) => `
            <button class="quiz-opt-btn" data-optidx="${optIdx}">
              ${formatMarkdown(opt.text)}
            </button>
          `
            )
            .join("")}
        </div>
        <div class="quiz-feedback-box" id="mod-quiz-fb"></div>
      </div>
    `
      : "";

    recallPane.innerHTML = `
      <div class="scenarios-list">
        ${scenariosHtml}
      </div>

      ${quizHtml}

      <div class="step-footer-actions">
        <button class="btn btn-secondary" id="btn-back-to-theory">
          ${i18n.backTheory}
        </button>
        <button class="btn btn-primary" id="btn-next-to-summary">
          ${i18n.nextSummary}
        </button>
      </div>
    `;

    document.getElementById("btn-back-to-theory")?.addEventListener("click", () => {
      switchTopicStep("theory");
      window.scrollTo({ top: 300, behavior: "smooth" });
    });

    document.getElementById("btn-next-to-summary")?.addEventListener("click", () => {
      switchTopicStep("summary");
      window.scrollTo({ top: 300, behavior: "smooth" });
    });

    // Reveal buttons
    recallPane.querySelectorAll(".reveal-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const targetId = btn.getAttribute("data-target");
        const ansBox = document.getElementById(targetId);
        if (!ansBox) return;

        ansBox.classList.toggle("revealed");
        btn.classList.toggle("active");
        btn.innerHTML = ansBox.classList.contains("revealed")
          ? `<span>${i18n.scHide}</span><span>▲</span>`
          : `<span>${i18n.scReveal}</span><span>▼</span>`;
      });
    });

    // Module decision quiz logic
    if (mod.recall.quiz) {
      const qOptsContainer = document.getElementById("mod-quiz-opts");
      const qFbBox = document.getElementById("mod-quiz-fb");
      if (qOptsContainer && qFbBox) {
        qOptsContainer.querySelectorAll(".quiz-opt-btn").forEach((btn) => {
          btn.addEventListener("click", () => {
            const optIdx = parseInt(btn.getAttribute("data-optidx"));
            const selected = mod.recall.quiz.options[optIdx];

            qOptsContainer.querySelectorAll(".quiz-opt-btn").forEach((b, i) => {
              b.disabled = true;
              if (mod.recall.quiz.options[i].isCorrect) {
                b.classList.add("correct");
              } else if (i === optIdx) {
                b.classList.add("incorrect");
              }
            });

            qFbBox.className = `quiz-feedback-box show ${selected.isCorrect ? "correct-fb" : "incorrect-fb"}`;
            qFbBox.innerHTML = `
              <strong>${selected.isCorrect ? i18n.quizCorrect : i18n.quizIncorrect}</strong><br>
              ${formatMarkdown(mod.recall.quiz.explanation)}
            `;
          });
        });
      }
    }

    // 3. Summary & Class III (Breakdown)
    const mustKnowItems = mod.breakdown?.mustKnow || [];
    const classThreeItems = mod.breakdown?.classThree || [];

    summaryPane.innerHTML = `
      <div class="breakdown-grid">
        <!-- Must Know High-Yield Pearls -->
        <div class="breakdown-column">
          <div class="column-header pearls-head">
            <span>⭐</span>
            <h3>${i18n.mustKnowHeading}</h3>
          </div>
          <div class="pearls-list">
            ${mustKnowItems
              .map(
                (item) => `
              <div class="pearl-item">
                <span class="pearl-item-desc">${
                  typeof item === "string"
                    ? formatMarkdown(item)
                    : `<strong>${formatMarkdown(item.title)}:</strong> ${formatMarkdown(item.desc)}`
                }</span>
              </div>
            `
              )
              .join("")}
          </div>
        </div>

        <!-- Class III Harmful Interventions (Co nedělat) -->
        <div class="breakdown-column">
          <div class="column-header danger-head">
            <span>🚫</span>
            <h3>${i18n.classThreeHeading}</h3>
          </div>
          <div class="contra-list">
            ${classThreeItems
              .map(
                (c) => `
              <div class="contra-item">
                <span class="contra-tag">${i18n.classThreeTag}</span>
                <p class="contra-reason" style="margin-top: 6px;">${
                  typeof c === "string" ? formatMarkdown(c) : formatMarkdown(c.action)
                }</p>
                ${c.reason ? `<p class="contra-reason" style="font-size: 0.78rem; opacity: 0.85;"><strong>${i18n.classThreeReason}</strong> ${formatMarkdown(c.reason)}</p>` : ""}
              </div>
            `
              )
              .join("")}
          </div>
        </div>
      </div>

      ${renderGuidelinesBox(mod, i18n)}

      <div style="text-align: center; margin-top: 30px; display: flex; justify-content: center; gap: 14px; flex-wrap: wrap;">
        <button class="btn btn-secondary" id="btn-back-to-modules">
          ${i18n.backToModules}
        </button>
        <button class="btn btn-primary" id="btn-start-topic-sr">
          ${i18n.startTopicSr}
        </button>
      </div>
    `;

    document.getElementById("btn-back-to-modules")?.addEventListener("click", () => {
      window.location.hash = "#temata";
      switchView("modules", false);
    });

    document.getElementById("btn-start-topic-sr")?.addEventListener("click", () => {
      startSpacedRepetition(mod.id, false);
    });

    if (!keepCurrentStep) {
      switchTopicStep("theory");
      switchView("module-detail", false);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      switchTopicStep(state.activeTopicStep || "theory");
    }
  };

  // --- TOPIC STEP SWITCHER ---
  const switchTopicStep = (step) => {
    state.activeTopicStep = step;

    [detailStepTheoryBtn, detailStepRecallBtn, detailStepSummaryBtn].forEach((b) =>
      b?.classList.remove("active")
    );
    [theoryPane, recallPane, summaryPane].forEach((p) => p?.classList.remove("active"));

    if (step === "theory") {
      detailStepTheoryBtn?.classList.add("active");
      theoryPane?.classList.add("active");
    } else if (step === "recall") {
      detailStepRecallBtn?.classList.add("active");
      recallPane?.classList.add("active");
    } else if (step === "summary") {
      detailStepSummaryBtn?.classList.add("active");
      summaryPane?.classList.add("active");
    }
  };

  detailStepTheoryBtn?.addEventListener("click", () => switchTopicStep("theory"));
  detailStepRecallBtn?.addEventListener("click", () => switchTopicStep("recall"));
  detailStepSummaryBtn?.addEventListener("click", () => switchTopicStep("summary"));
  detailBackBtn?.addEventListener("click", () => {
    window.location.hash = "#temata";
    switchView("modules", false);
  });

  // --- SPACED REPETITION ENGINE ---
  const updateSrCategoryFilter = () => {
    const currentData = getCardiologyData();
    const i18n = I18N[state.lang] || I18N.cs;
    const selected = state.srSession.filterCategory || "all";
    srFilterCategory.innerHTML = `<option value="all">${i18n.srAllTopics}</option>`;
    currentData.modules.forEach((mod) => {
      const opt = document.createElement("option");
      opt.value = mod.id;
      opt.textContent = `${mod.number}. ${mod.title}`;
      if (mod.id === selected) opt.selected = true;
      srFilterCategory.appendChild(opt);
    });
  };

  const startSpacedRepetition = (moduleId = "all", dueOnly = false) => {
    const currentData = getCardiologyData();
    const i18n = I18N[state.lang] || I18N.cs;
    let pool = currentData.flashcards;

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
      alert(i18n.srEmptyAlert);
      return;
    }

    pool = [...pool].sort(() => Math.random() - 0.5);

    state.srSession = {
      cards: pool,
      currentIndex: 0,
      isFlipped: false,
      filterCategory: moduleId,
      filterDueOnly: dueOnly
    };

    updateSrCategoryFilter();

    renderCurrentSrCard();
    switchView("spaced-repetition", false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const renderCurrentSrCard = () => {
    const session = state.srSession;
    const i18n = I18N[state.lang] || I18N.cs;
    if (session.cards.length === 0 || session.currentIndex >= session.cards.length) {
      srQuestionText.textContent = i18n.srDoneTitle;
      srAnswerText.textContent = "";
      srHighYieldPill.textContent = "";
      srHighYieldPill.style.display = "none";
      srCardCategory.textContent = i18n.srDoneCategory;
      srBoxIndicator.textContent = "";
      srMainCard.classList.remove("flipped");
      session.isFlipped = false;
      srRateAgainBtn.style.display = "none";
      srRateGoodBtn.style.display = "none";
      return;
    }

    const rawCard = session.cards[session.currentIndex];
    const currentData = getCardiologyData();
    const currentCard = currentData.flashcards.find((c) => c.id === rawCard.id) || rawCard;
    const cardState = leitnerState[currentCard.id] || { box: 1 };

    srCounterCurrent.textContent = session.currentIndex + 1;
    srCounterTotal.textContent = session.cards.length;

    srCardCategory.textContent = currentCard.category;
    srQuestionText.innerHTML = formatMarkdown(currentCard.question);
    srAnswerText.innerHTML = formatMarkdown(currentCard.answer);
    
    if (currentCard.highYield) {
      srHighYieldPill.style.display = "block";
      srHighYieldPill.innerHTML = `📌 <strong>${i18n.srHighYieldLabel}</strong> ${formatMarkdown(currentCard.highYield)}`;
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

  const rateSrCard = (isGood) => {
    const session = state.srSession;
    if (session.cards.length === 0 || session.currentIndex >= session.cards.length) return;

    const currentCard = session.cards[session.currentIndex];
    const now = Date.now();
    const existing = leitnerState[currentCard.id] || { box: 1, reviews: 0 };

    let nextBox = existing.box;
    if (isGood) {
      nextBox = Math.min(4, existing.box + 1);
      userStats.xp += 10 * nextBox;
    } else {
      nextBox = 1;
      userStats.xp += 2;
    }

    const intervalDays = BOX_INTERVALS[nextBox];
    const nextDue = now + intervalDays * 24 * 60 * 60 * 1000;

    leitnerState[currentCard.id] = {
      box: nextBox,
      lastReview: now,
      nextDue: nextDue,
      reviews: (existing.reviews || 0) + 1
    };

    saveLeitner(leitnerState);
    saveStats(userStats);
    updateDashboardStats();

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

  srFilterCategory.addEventListener("change", (e) => {
    startSpacedRepetition(e.target.value, false);
  });

  srBackBtn.addEventListener("click", () => {
    window.location.hash = "#temata";
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

  // =========================================================================
  // --- SVG GENERATORS FOR ECG WAVEFORMS & HEART CONDUCTION ANATOMY ---
  // =========================================================================

  const getEkgData = () => {
    if (state.ekgLang === "es" && typeof EKG_MASTERCLASS_DATA_ES !== "undefined") {
      return EKG_MASTERCLASS_DATA_ES;
    }
    return EKG_MASTERCLASS_DATA;
  };

  const generateEkgSvg = (type, opts = {}) => {
    const isPink = opts.paper === "pink";
    const isEs = (opts.lang || state.ekgLang) === "es";
    const gridColor = isPink ? "rgba(244,63,94,0.18)" : "rgba(6,182,212,0.18)";
    const mainGridColor = isPink ? "rgba(244,63,94,0.35)" : "rgba(6,182,212,0.35)";
    const waveColor = opts.waveColor || (isPink ? "#f43f5e" : "#38bdf8");
    const highlightColor = opts.highlightColor || "#fbbf24";
    const spikeColor = "#f43f5e";

    let pathD = "";
    let overlays = "";

    switch (type) {
      case "desatero-1": // Sinus Rhythm
      case "normal":
        pathD = "M 20 90 L 70 90 Q 85 70 100 90 L 125 90 L 132 98 L 145 25 L 158 115 L 165 90 L 195 90 Q 230 55 265 90 L 320 90 Q 335 70 350 90 L 375 90 L 382 98 L 395 25 L 408 115 L 415 90 L 445 90 Q 480 55 515 90 L 580 90";
        overlays = `
          <text x="85" y="62" fill="${highlightColor}" font-size="11" font-weight="bold">P</text>
          <text x="145" y="18" fill="#34d399" font-size="11" font-weight="bold">R</text>
          <text x="245" y="50" fill="#38bdf8" font-size="11" font-weight="bold">T</text>
        `;
        break;

      case "desatero-2": // Heart Rate / Interval
        pathD = "M 20 90 L 80 90 Q 95 72 110 90 L 130 90 L 136 96 L 148 25 L 160 115 L 166 90 L 195 90 Q 230 60 265 90 L 370 90 L 376 96 L 388 25 L 400 115 L 406 90 L 435 90 Q 470 60 505 90 L 580 90";
        overlays = `
          <line x1="148" y1="20" x2="388" y2="20" stroke="${highlightColor}" stroke-width="2" stroke-dasharray="4" />
          <text x="220" y="15" fill="${highlightColor}" font-size="11" font-weight="bold">${isEs ? "Intervalo R-R = 4 cuadros grandes (75 lpm)" : "Interval R-R = 4 velká pole (75/min)"}</text>
          <line x1="148" y1="20" x2="148" y2="35" stroke="${highlightColor}" stroke-width="2" />
          <line x1="388" y1="20" x2="388" y2="35" stroke="${highlightColor}" stroke-width="2" />
        `;
        break;

      case "desatero-3": // Axis Svod I + aVF
        pathD = "M 20 90 L 60 90 Q 75 75 90 90 L 110 90 L 115 98 L 125 25 L 135 110 L 140 90 L 170 90 Q 200 65 230 90 L 290 90";
        overlays = `
          <text x="30" y="30" fill="#34d399" font-size="12" font-weight="bold">${isEs ? "Derivación I: R > S (+)" : "Svod I: R > S (+)"}</text>
          <text x="330" y="30" fill="#34d399" font-size="12" font-weight="bold">${isEs ? "Derivación aVF: R > S (+)" : "Svod aVF: R > S (+)"}</text>
          <path d="M 320 90 L 360 90 Q 375 75 390 90 L 410 90 L 415 98 L 425 35 L 435 105 L 440 90 L 470 90 Q 500 65 530 90 L 580 90" stroke="${waveColor}" stroke-width="2.5" fill="none"/>
          <text x="180" y="160" fill="${highlightColor}" font-size="12" font-weight="bold">${isEs ? "Eje normal (-30° a +90°)" : "Normální osa (-30° až +90°)"}</text>
        `;
        break;

      case "desatero-4": // P pulmonale vs P mitrale
        pathD = "M 20 90 L 60 90 Q 75 40 90 90 L 115 90 L 122 96 L 133 30 L 144 110 L 150 90 L 180 90 Q 210 65 240 90 L 280 90";
        overlays = `
          <text x="30" y="25" fill="#fb7185" font-size="11" font-weight="bold">${isEs ? "P-pulmonale (≥ 2.5 mm, picuda)" : "P-pulmonale (≥ 2.5 mm, hrotnaté)"}</text>
          <path d="M 310 90 L 350 90 Q 362 65 372 75 Q 382 65 394 90 L 420 90 L 427 96 L 438 30 L 449 110 L 455 90 L 485 90 Q 515 65 545 90 L 580 90" stroke="${waveColor}" stroke-width="2.5" fill="none"/>
          <text x="330" y="25" fill="#a78bfa" font-size="11" font-weight="bold">${isEs ? "P-mitrale (≥ 120 ms, mellada)" : "P-mitrale (≥ 120 ms, dvouvrcholové)"}</text>
        `;
        break;

      case "desatero-5": // PQ Interval & AV conduction
        pathD = "M 20 90 L 70 90 Q 85 70 100 90 L 170 90 L 176 96 L 188 25 L 200 115 L 206 90 L 235 90 Q 270 60 305 90 L 360 90 Q 375 70 390 90 L 460 90 L 466 96 L 478 25 L 490 115 L 496 90 L 525 90 Q 560 60 580 90";
        overlays = `
          <line x1="70" y1="110" x2="176" y2="110" stroke="${highlightColor}" stroke-width="2" stroke-dasharray="3" />
          <text x="75" y="130" fill="${highlightColor}" font-size="11" font-weight="bold">${isEs ? "PR > 200 ms (Bloqueo AV I°)" : "PQ > 200 ms (AV blok I. st.)"}</text>
        `;
        break;

      case "desatero-6": // Broad QRS (LBBB / RBBB)
        pathD = "M 20 90 L 70 90 Q 85 75 100 90 L 120 90 L 128 35 Q 138 50 148 25 L 160 125 L 168 90 L 195 90 Q 225 120 255 90 L 320 90 L 328 35 Q 338 50 348 25 L 360 125 L 368 90 L 395 90 Q 425 120 455 90 L 580 90";
        overlays = `
          <text x="120" y="18" fill="#fb7185" font-size="11" font-weight="bold">${isEs ? "Muesca en 'M' (BRIHH > 120 ms)" : "Rozeklaný 'M' kmit (LBBB > 120 ms)"}</text>
          <text x="210" y="145" fill="#38bdf8" font-size="11" font-weight="bold">${isEs ? "Discordancia ST-T secundaria" : "Sekundární ST-T diskordance"}</text>
        `;
        break;

      case "desatero-7": // ST Elevation (STEMI / Pardee)
        pathD = "M 20 90 L 70 90 Q 85 72 100 90 L 120 90 L 126 96 L 138 25 L 148 100 Q 170 35 220 50 Q 250 65 270 90 L 330 90 L 336 96 L 348 25 L 358 100 Q 380 35 430 50 Q 460 65 480 90 L 580 90";
        overlays = `
          <line x1="120" y1="90" x2="220" y2="90" stroke="#94a3b8" stroke-dasharray="2" />
          <text x="165" y="30" fill="#ef4444" font-size="12" font-weight="bold">${isEs ? "Elevación convexa del ST de Pardee" : "Konvexní Pardeeho ST elevace"}</text>
          <circle cx="150" cy="55" r="4" fill="#ef4444" />
          <text x="156" y="65" fill="#fca5a5" font-size="10">${isEs ? "Punto J +4 mm" : "J-point +4 mm"}</text>
        `;
        break;

      case "desatero-8": // Wellens & Inverted T waves
        pathD = "M 20 90 L 70 90 Q 85 72 100 90 L 120 90 L 126 96 L 138 30 L 148 110 L 154 90 L 180 90 Q 210 145 240 90 L 320 90 L 326 96 L 338 30 L 348 110 L 354 90 L 380 90 Q 410 145 440 90 L 580 90";
        overlays = `
          <text x="180" y="160" fill="#a78bfa" font-size="11" font-weight="bold">${isEs ? "Ondas T negativas simétricas (Wellens / Isquemia DA)" : "Hluboké symetrické negativní T (Ischémie LAD / Wellens)"}</text>
        `;
        break;

      case "desatero-9": // Long QT Interval
      case "lqts":
        pathD = "M 20 90 L 70 90 Q 85 72 100 90 L 120 90 L 126 96 L 138 25 L 148 110 L 154 90 L 240 90 Q 285 45 320 90 L 380 90 Q 395 72 410 90 L 430 90 L 436 96 L 448 25 L 458 110 L 464 90 L 550 90";
        overlays = `
          <line x1="126" y1="125" x2="320" y2="125" stroke="${highlightColor}" stroke-width="2" stroke-dasharray="3" />
          <text x="150" y="145" fill="${highlightColor}" font-size="11" font-weight="bold">${isEs ? "QT prolongado / QTc > 500 ms" : "Prodloužený QT / QTc > 500 ms"}</text>
          <text x="260" y="35" fill="#f43f5e" font-size="11">${isEs ? "Riesgo de Torsades de Pointes" : "Riziko Torsades de Pointes"}</text>
        `;
        break;

      case "desatero-10": // U-Wave & Hypokalemia
      case "hypokalemia":
        pathD = "M 20 90 L 60 90 Q 75 75 90 90 L 110 90 L 116 96 L 128 30 L 138 110 L 144 92 L 170 96 Q 195 85 215 90 Q 235 60 255 90 L 310 90 L 316 96 L 328 30 L 338 110 L 344 92 L 370 96 Q 395 85 415 90 Q 435 60 455 90 L 580 90";
        overlays = `
          <text x="180" y="115" fill="#38bdf8" font-size="10">${isEs ? "T aplanada" : "Ploché T"}</text>
          <text x="235" y="48" fill="${highlightColor}" font-size="11" font-weight="bold">${isEs ? "Onda U prominente > T" : "Prominentní Vlna U > T"}</text>
        `;
        break;

      case "hyperkalemia": // Hyperkalemia (Tented T)
        pathD = "M 20 90 L 80 90 L 88 105 L 105 30 L 122 125 L 132 90 L 155 90 L 175 10 L 195 90 L 280 90 L 288 105 L 305 30 L 322 125 L 332 90 L 355 90 L 375 10 L 395 90 L 580 90";
        overlays = `
          <text x="145" y="15" fill="#ef4444" font-size="11" font-weight="bold">${isEs ? "Ondas T picudas (Tented T)" : "Stanovitá vlna T (Tented T)"}</text>
          <text x="80" y="145" fill="#fca5a5" font-size="10">${isEs ? "QRS ensanchado sin onda P" : "Rozšířený QRS bez vlny P"}</text>
        `;
        break;

      case "hypercalcemia": // Short QT
        pathD = "M 20 90 L 70 90 Q 85 72 100 90 L 120 90 L 126 96 L 138 25 L 148 110 L 154 90 Q 170 45 190 90 L 310 90 L 316 96 L 328 25 L 338 110 L 344 90 Q 360 45 380 90 L 580 90";
        overlays = `
          <line x1="126" y1="125" x2="190" y2="125" stroke="${highlightColor}" stroke-width="2" />
          <text x="110" y="145" fill="${highlightColor}" font-size="11" font-weight="bold">${isEs ? "Segmento ST y QT extremadamente cortos (< 340 ms)" : "Extrémně krátké ST & QT (< 340 ms)"}</text>
        `;
        break;

      case "hypocalcemia": // Long ST segment
        pathD = "M 20 90 L 70 90 Q 85 72 100 90 L 120 90 L 126 96 L 138 25 L 148 110 L 154 90 L 250 90 Q 275 55 300 90 L 400 90 L 406 96 L 418 25 L 428 110 L 434 90 L 530 90";
        overlays = `
          <line x1="154" y1="90" x2="250" y2="90" stroke="${highlightColor}" stroke-width="3" />
          <text x="160" y="80" fill="${highlightColor}" font-size="11" font-weight="bold">${isEs ? "Segmento ST isoeléctrico prolongado" : "Dlouhý izoelektrický ST segment"}</text>
        `;
        break;

      case "hypothermia": // Osborn J-wave
        pathD = "M 20 90 L 100 90 Q 115 75 130 90 L 155 90 L 162 96 L 174 25 L 184 105 Q 198 45 210 88 L 225 90 Q 260 60 295 90 L 430 90 Q 445 75 460 90 L 485 90 L 492 96 L 504 25 L 514 105 Q 528 45 540 88 L 580 90";
        overlays = `
          <circle cx="198" cy="55" r="6" fill="none" stroke="#38bdf8" stroke-width="2" />
          <text x="175" y="38" fill="#38bdf8" font-size="11" font-weight="bold">${isEs ? "Onda J de Osborn" : "Osbornova J-vlna"}</text>
          <text x="290" y="145" fill="#94a3b8" font-size="10">${isEs ? "Bradicardia sinusal severa (38 lpm)" : "Těžká sinusová bradykardie (38/min)"}</text>
        `;
        break;

      case "brugada": // Brugada Type 1
        pathD = "M 20 90 L 70 90 Q 85 75 100 90 L 120 90 L 126 96 L 138 35 L 148 85 Q 165 25 190 35 Q 215 50 230 120 Q 245 135 260 90 L 330 90 L 336 96 L 348 35 L 358 85 Q 375 25 400 35 Q 425 50 440 120 Q 455 135 470 90 L 580 90";
        overlays = `
          <text x="145" y="20" fill="#ef4444" font-size="11" font-weight="bold">${isEs ? "Elevación en cúpula del ST (Tipo 1 ≥ 2 mm)" : "Klenutá ST elevace (Coved-type ≥ 2 mm)"}</text>
          <text x="215" y="150" fill="#a78bfa" font-size="10">${isEs ? "T invertida en V1-V2" : "Invertované T ve V1-V2"}</text>
        `;
        break;

      case "wpw": // WPW Delta wave
        pathD = "M 20 90 L 70 90 Q 82 72 94 90 L 108 90 L 126 55 L 136 20 L 148 115 L 156 90 Q 185 115 215 90 L 290 90 Q 302 72 314 90 L 328 90 L 346 55 L 356 20 L 368 115 L 376 90 Q 405 115 435 90 L 580 90";
        overlays = `
          <line x1="94" y1="90" x2="108" y2="90" stroke="${highlightColor}" stroke-width="2" />
          <text x="65" y="115" fill="${highlightColor}" font-size="10">${isEs ? "PR corto < 120 ms" : "Krátké PR < 120 ms"}</text>
          <path d="M 108 90 L 126 55" stroke="#ef4444" stroke-width="4" />
          <text x="128" y="45" fill="#ef4444" font-size="11" font-weight="bold">${isEs ? "Onda delta (empastamiento inicial)" : "Delta vlna (pomalý náběh R)"}</text>
        `;
        break;

      case "arvc": // ARVC Epsilon wave
        pathD = "M 20 90 L 70 90 Q 85 75 100 90 L 120 90 L 126 96 L 136 30 L 148 120 Q 155 100 162 108 L 168 90 Q 195 130 225 90 L 310 90 L 316 96 L 326 30 L 338 120 Q 345 100 352 108 L 358 90 Q 385 130 415 90 L 580 90";
        overlays = `
          <circle cx="158" cy="104" r="7" fill="none" stroke="#fbbf24" stroke-width="2" />
          <text x="140" y="145" fill="#fbbf24" font-size="11" font-weight="bold">${isEs ? "Onda Épsilon (muesca pos-QRS)" : "Vlna Epsilon (zářez na konci QRS)"}</text>
          <text x="195" y="150" fill="#a78bfa" font-size="10">${isEs ? "T negativas en V1-V3" : "Negativní T ve V1-V3"}</text>
        `;
        break;

      case "early-repoc": // Early Repolarization
        pathD = "M 20 90 L 70 90 Q 85 75 100 90 L 120 90 L 126 96 L 138 25 L 148 100 Q 154 75 160 82 Q 180 70 210 75 Q 235 50 260 90 L 340 90 L 346 96 L 358 25 L 368 100 Q 374 75 380 82 Q 400 70 430 75 Q 455 50 480 90 L 580 90";
        overlays = `
          <text x="150" y="60" fill="#34d399" font-size="11" font-weight="bold">${isEs ? "Muesca en punto J y ST cóncavo" : "J-point Notching & konkávní ST elevace"}</text>
        `;
        break;

      // --- PACEMAKERS ---
      case "vvi-apex": // VVI RV Apex Pacing
        pathD = "M 20 90 L 90 90 L 90 20 L 90 90 L 98 80 L 115 145 L 125 155 L 140 30 Q 170 50 200 90 L 290 90 L 290 20 L 290 90 L 298 80 L 315 145 L 325 155 L 340 30 Q 370 50 400 90 L 580 90";
        overlays = `
          <line x1="90" y1="15" x2="90" y2="90" stroke="${spikeColor}" stroke-width="3" />
          <text x="50" y="15" fill="${spikeColor}" font-size="11" font-weight="bold">${isEs ? "Espícula ventricular" : "Ventrikulární Spike"}</text>
          <text x="105" y="170" fill="#fb7185" font-size="11" font-weight="bold">${isEs ? "QRS ancho con patrón BRIHH (S profunda V1)" : "Široký QRS s LBBB obrazem (hluboké S ve V1)"}</text>
          <line x1="290" y1="15" x2="290" y2="90" stroke="${spikeColor}" stroke-width="3" />
        `;
        break;

      case "aai": // AAI Atrial Pacing
        pathD = "M 20 90 L 60 90 L 60 40 L 60 90 Q 75 68 90 90 L 130 90 L 136 96 L 148 25 L 160 115 L 166 90 L 195 90 Q 230 55 265 90 L 320 90 L 320 40 L 320 90 Q 335 68 350 90 L 390 90 L 396 96 L 408 25 L 420 115 L 426 90 L 455 90 Q 490 55 525 90 L 580 90";
        overlays = `
          <line x1="60" y1="35" x2="60" y2="90" stroke="${spikeColor}" stroke-width="3" />
          <text x="25" y="30" fill="${spikeColor}" font-size="11" font-weight="bold">${isEs ? "Espícula auricular" : "Síňový Spike"}</text>
          <text x="140" y="18" fill="#34d399" font-size="11" font-weight="bold">${isEs ? "QRS estrecho fisiológico (<100 ms)" : "Štíhlý fyziologický QRS (<100 ms)"}</text>
        `;
        break;

      case "ddd-dual": // DDD Dual Chamber
        pathD = "M 20 90 L 60 90 L 60 45 L 60 90 Q 75 70 90 90 L 140 90 L 140 18 L 140 90 L 148 80 L 165 145 L 175 155 L 190 35 Q 220 55 250 90 L 310 90 L 310 45 L 310 90 Q 325 70 340 90 L 390 90 L 390 18 L 390 90 L 398 80 L 415 145 L 425 155 L 440 35 Q 470 55 500 90 L 580 90";
        overlays = `
          <line x1="60" y1="40" x2="60" y2="90" stroke="${spikeColor}" stroke-width="2.5" />
          <text x="20" y="35" fill="${spikeColor}" font-size="10" font-weight="bold">${isEs ? "1. Espícula A" : "1. A-Spike"}</text>
          <line x1="140" y1="15" x2="140" y2="90" stroke="${spikeColor}" stroke-width="2.5" />
          <text x="130" y="12" fill="${spikeColor}" font-size="10" font-weight="bold">${isEs ? "2. Espícula V" : "2. V-Spike"}</text>
          <line x1="60" y1="110" x2="140" y2="110" stroke="${highlightColor}" stroke-dasharray="2" />
          <text x="75" y="125" fill="${highlightColor}" font-size="10">${isEs ? "Retraso AV" : "AV zpoždění"}</text>
        `;
        break;

      case "biv-crt": // BiV CRT Resynchronization
        pathD = "M 20 90 L 80 90 L 80 25 L 82 25 L 82 90 L 90 96 L 105 20 L 120 98 L 130 90 Q 155 55 185 90 L 280 90 L 280 25 L 282 25 L 282 90 L 290 96 L 305 20 L 320 98 L 330 90 Q 355 55 385 90 L 580 90";
        overlays = `
          <line x1="80" y1="20" x2="80" y2="90" stroke="${spikeColor}" stroke-width="2.5" />
          <text x="40" y="18" fill="${spikeColor}" font-size="10" font-weight="bold">${isEs ? "Espículas BiV" : "BiV Spikes"}</text>
          <text x="95" y="15" fill="#34d399" font-size="11" font-weight="bold">${isEs ? "Onda R dominante en V1 (Activación VI)" : "Dominantní kmit R ve V1 (Aktivace LK)"}</text>
          <text x="140" y="145" fill="#38bdf8" font-size="10">${isEs ? "QRS estrecho sincronizado (<130 ms)" : "Zúžený synchronizovaný QRS (<130 ms)"}</text>
        `;
        break;

      case "csp-his-lbbp": // Conduction System Pacing (His / LBBP)
        pathD = "M 20 90 L 70 90 Q 85 70 100 90 L 125 90 L 125 70 L 125 90 L 132 98 L 145 25 L 158 115 L 165 90 L 195 90 Q 230 55 265 90 L 320 90 Q 335 70 350 90 L 375 90 L 375 70 L 375 90 L 382 98 L 395 25 L 408 115 L 415 90 L 445 90 Q 480 55 515 90 L 580 90";
        overlays = `
          <line x1="125" y1="68" x2="125" y2="90" stroke="${spikeColor}" stroke-width="2" />
          <circle cx="125" cy="80" r="5" fill="none" stroke="${highlightColor}" stroke-width="1.5" />
          <text x="80" y="60" fill="${highlightColor}" font-size="11" font-weight="bold">${isEs ? "Micro-espícula discreta" : "Nenápadný Mikro-Spike"}</text>
          <text x="135" y="18" fill="#34d399" font-size="11" font-weight="bold">${isEs ? "QRS FISIOLÓGICO ESTRECHO (<100 ms!)" : "ŠTÍHLÝ FYZIOLOGICKÝ QRS (<100 ms!)"}</text>
        `;
        break;

      case "pm-failure-capture": // Loss of capture
        pathD = "M 20 90 L 100 90 L 100 25 L 100 90 L 250 90 L 250 25 L 250 90 L 400 90 L 400 25 L 400 90 L 580 90";
        overlays = `
          <line x1="100" y1="20" x2="100" y2="90" stroke="${spikeColor}" stroke-width="3" />
          <line x1="250" y1="20" x2="250" y2="90" stroke="${spikeColor}" stroke-width="3" />
          <line x1="400" y1="20" x2="400" y2="90" stroke="${spikeColor}" stroke-width="3" />
          <text x="120" y="55" fill="#ef4444" font-size="12" font-weight="bold">${isEs ? "Fallo de captura (Espícula sin respuesta)" : "Ztráta záchytu (Spike bez odpovědi myokardu)"}</text>
          <text x="260" y="125" fill="#fca5a5" font-size="11">${isEs ? "Pausa asistólica (Riesgo de síncope)" : "Asystolická pauza (Hrozí synkopa)"}</text>
        `;
        break;

      case "pm-undersensing": // Undersensing
        pathD = "M 20 90 L 70 90 Q 85 70 100 90 L 120 90 L 126 96 L 138 25 L 148 110 L 154 90 Q 185 55 215 90 L 225 90 L 225 20 L 225 90 L 280 90 Q 295 70 310 90 L 330 90 L 336 96 L 348 25 L 358 110 L 360 20 L 360 110 L 364 90 Q 395 55 425 90 L 580 90";
        overlays = `
          <line x1="225" y1="15" x2="225" y2="90" stroke="${spikeColor}" stroke-width="3" />
          <line x1="360" y1="15" x2="360" y2="90" stroke="${spikeColor}" stroke-width="3" />
          <text x="180" y="15" fill="#ef4444" font-size="11" font-weight="bold">${isEs ? "Espícula asíncrona sobre T (¡R sobre T!)" : "Asynchronní Spike do T-vlny (R-na-T fenomén!)"}</text>
          <text x="280" y="145" fill="#fca5a5" font-size="11">${isEs ? "Infracaptación: no censa latidos propios" : "Slepý stimulátor neregistruje vlastní stahy"}</text>
        `;
        break;

      case "pm-oversensing": // Oversensing
        pathD = "M 20 90 L 60 90 L 68 96 L 78 30 L 88 110 L 94 90 Q 120 60 145 90 L 160 93 L 165 87 L 170 92 L 175 88 L 180 91 L 440 90 L 448 96 L 458 30 L 468 110 L 474 90 Q 500 60 525 90 L 580 90";
        overlays = `
          <text x="150" y="70" fill="#fbbf24" font-size="10">${isEs ? "Miopotenciales / Ruido" : "Myopotenciály / Šum"}</text>
          <line x1="180" y1="120" x2="440" y2="120" stroke="#ef4444" stroke-width="2" stroke-dasharray="4" />
          <text x="210" y="140" fill="#ef4444" font-size="11" font-weight="bold">${isEs ? "Inhibición inapropiada -> Pausa asistólica" : "Chybění stimulace -> Asystolická pauza"}</text>
        `;
        break;

      default:
        pathD = "M 20 90 L 70 90 Q 85 70 100 90 L 125 90 L 132 98 L 145 25 L 158 115 L 165 90 L 195 90 Q 230 55 265 90 L 580 90";
    }

    return `
      <svg class="ecg-svg-canvas" viewBox="0 0 600 180" preserveAspectRatio="none" aria-hidden="true">
        <!-- ECG Millimeter Grid Background -->
        <defs>
          <pattern id="grid-small-${type}" width="10" height="10" patternUnits="userSpaceOnUse">
            <path d="M 10 0 L 0 0 0 10" fill="none" stroke="${gridColor}" stroke-width="0.5"/>
          </pattern>
          <pattern id="grid-large-${type}" width="50" height="50" patternUnits="userSpaceOnUse">
            <rect width="50" height="50" fill="url(#grid-small-${type})"/>
            <path d="M 50 0 L 0 0 0 50" fill="none" stroke="${mainGridColor}" stroke-width="1.2"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid-large-${type})"/>

        <!-- Baseline -->
        <line x1="0" y1="90" x2="600" y2="90" stroke="rgba(255,255,255,0.06)" stroke-width="1" />

        <!-- ECG Trace Waveform -->
        <path d="${pathD}" fill="none" stroke="${waveColor}" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" />

        <!-- Annotations & Highlights -->
        ${overlays}
      </svg>
    `;
  };

  const generateAnatomySvg = (type, opts = {}) => {
    const isEs = (opts.lang || state.ekgLang) === "es";
    let highlightElements = "";
    let leadElements = "";
    let vectorArrow = "";

    switch (type) {
      case "sa-node":
        highlightElements = `
          <circle cx="42" cy="36" r="7" fill="#fbbf24" stroke="#ffffff" stroke-width="1.5" />
          <path d="M 42 36 Q 55 45 70 50" stroke="#fbbf24" stroke-width="2.5" fill="none" marker-end="url(#arrow-head)" />
          <path d="M 42 36 Q 48 55 52 70" stroke="#fbbf24" stroke-width="2.5" fill="none" />
        `;
        vectorArrow = `<text x="10" y="112" fill="#fbbf24" font-size="9" font-weight="bold">${isEs ? "Vector SA: Abajo e izquierda" : "SA Vektor: Dolů & Vlevo"}</text>`;
        break;

      case "av-node":
        highlightElements = `
          <circle cx="56" cy="58" r="6" fill="#38bdf8" stroke="#ffffff" stroke-width="1.5" />
          <rect x="54" y="64" width="4" height="12" fill="#38bdf8" />
        `;
        vectorArrow = `<text x="8" y="112" fill="#38bdf8" font-size="9" font-weight="bold">${isEs ? "Nodo AV: Pausa 0.08-0.12s" : "AV Uzel: Pauza 0.08-0.12s"}</text>`;
        break;

      case "septum":
        highlightElements = `
          <line x1="62" y1="68" x2="48" y2="76" stroke="#f43f5e" stroke-width="3" marker-end="url(#arrow-head)" />
        `;
        vectorArrow = `<text x="5" y="112" fill="#f43f5e" font-size="9" font-weight="bold">${isEs ? "Septo: Izquierda a derecha" : "Septum: Zleva Doprava"}</text>`;
        break;

      case "ventricles":
        highlightElements = `
          <path d="M 58 76 Q 75 90 80 80" stroke="#34d399" stroke-width="3.5" fill="none" marker-end="url(#arrow-head)" />
          <path d="M 54 76 Q 35 88 28 78" stroke="#34d399" stroke-width="2" fill="none" />
        `;
        vectorArrow = `<text x="8" y="112" fill="#34d399" font-size="9" font-weight="bold">${isEs ? "Ventrículos: Dominancia VI" : "Komory: Dominance LK"}</text>`;
        break;

      case "repolarization":
        highlightElements = `
          <path d="M 82 80 Q 72 82 64 78" stroke="#a78bfa" stroke-width="2.5" fill="none" marker-end="url(#arrow-head)" />
        `;
        vectorArrow = `<text x="6" y="112" fill="#a78bfa" font-size="9" font-weight="bold">${isEs ? "Epicardio -> Endocardio" : "Epikard -> Endokard"}</text>`;
        break;

      case "wpw":
        highlightElements = `
          <path d="M 76 45 Q 86 60 84 75" stroke="#ef4444" stroke-width="3.5" stroke-dasharray="2" fill="none" />
          <circle cx="85" cy="60" r="4" fill="#ef4444" />
        `;
        vectorArrow = `<text x="8" y="112" fill="#ef4444" font-size="9" font-weight="bold">${isEs ? "Haz de Kent (Vía accesoria)" : "Kentův svazek (Bypass)"}</text>`;
        break;

      case "brugada":
        highlightElements = `
          <rect x="28" y="52" width="14" height="20" rx="3" fill="rgba(239,68,68,0.4)" stroke="#ef4444" />
        `;
        vectorArrow = `<text x="12" y="112" fill="#ef4444" font-size="9" font-weight="bold">${isEs ? "Epicardio TSVD (Déficit Na+)" : "RVOT Epikard (Na+ deficit)"}</text>`;
        break;

      // --- PACEMAKER LEADS ---
      case "vvi-apex":
        leadElements = `
          <path d="M 40 10 Q 35 40 34 94" stroke="#94a3b8" stroke-width="2" fill="none" />
          <circle cx="34" cy="94" r="4" fill="#ef4444" />
          <path d="M 34 94 Q 55 85 75 70" stroke="#fbbf24" stroke-width="2.5" fill="none" marker-end="url(#arrow-head)" />
        `;
        vectorArrow = `<text x="10" y="112" fill="#fbbf24" font-size="9" font-weight="bold">${isEs ? "Electrodo: Ápex VD (RVA)" : "Elektroda: Hrot PK (RVA)"}</text>`;
        break;

      case "aai":
        leadElements = `
          <path d="M 40 10 Q 42 25 42 38" stroke="#94a3b8" stroke-width="2" fill="none" />
          <circle cx="42" cy="38" r="4" fill="#38bdf8" />
          <path d="M 42 38 Q 58 55 58 65" stroke="#34d399" stroke-width="2" fill="none" />
        `;
        vectorArrow = `<text x="8" y="112" fill="#38bdf8" font-size="9" font-weight="bold">${isEs ? "Electrodo: Orejuela AD (RAA)" : "Elektroda: Ouško PS (RAA)"}</text>`;
        break;

      case "ddd-dual":
        leadElements = `
          <path d="M 40 10 Q 42 25 42 38" stroke="#94a3b8" stroke-width="1.8" fill="none" />
          <circle cx="42" cy="38" r="3.5" fill="#38bdf8" />
          <path d="M 38 10 Q 32 45 34 94" stroke="#94a3b8" stroke-width="1.8" fill="none" />
          <circle cx="34" cy="94" r="3.5" fill="#ef4444" />
        `;
        vectorArrow = `<text x="14" y="112" fill="#fbbf24" font-size="9" font-weight="bold">${isEs ? "Electrodos duales: AD + Ápex VD" : "Dual Leads: RA + RVA"}</text>`;
        break;

      case "biv-crt":
        leadElements = `
          <path d="M 40 10 Q 32 45 34 94" stroke="#94a3b8" stroke-width="1.5" fill="none" />
          <circle cx="34" cy="94" r="3" fill="#ef4444" />
          <path d="M 42 10 Q 65 30 84 75" stroke="#94a3b8" stroke-width="1.5" fill="none" />
          <circle cx="84" cy="75" r="3.5" fill="#34d399" />
          <path d="M 84 75 Q 60 78 54 80" stroke="#34d399" stroke-width="2" fill="none" />
        `;
        vectorArrow = `<text x="5" y="112" fill="#34d399" font-size="9" font-weight="bold">${isEs ? "TRC: VD + Seno coronario (VI)" : "CRT: RV + CS LV elektroda"}</text>`;
        break;

      case "csp-his-lbbp":
        leadElements = `
          <path d="M 40 10 Q 48 40 56 64" stroke="#94a3b8" stroke-width="2" fill="none" />
          <circle cx="56" cy="64" r="4" fill="#fbbf24" stroke="#ffffff" stroke-width="1" />
          <path d="M 56 64 L 56 85" stroke="#fbbf24" stroke-width="2.5" fill="none" />
        `;
        vectorArrow = `<text x="6" y="112" fill="#fbbf24" font-size="9" font-weight="bold">${isEs ? "ECP: Haz de His / rama izq." : "CSP: Přímo do Hisova svazku"}</text>`;
        break;

      default:
        highlightElements = `<circle cx="56" cy="58" r="5" fill="#38bdf8" />`;
        vectorArrow = `<text x="15" y="112" fill="#38bdf8" font-size="9">${isEs ? "Sistema de conducción" : "Převodní systém"}</text>`;
    }

    return `
      <svg viewBox="0 0 110 120" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
        <defs>
          <marker id="arrow-head" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="4" markerHeight="4" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#fbbf24" />
          </marker>
        </defs>

        <!-- Stylized 4-Chamber Heart Outline -->
        <!-- Right Atrium -->
        <path d="M 28 32 C 20 32 18 50 28 58 L 48 58 L 48 32 Z" fill="#1e293b" stroke="#475569" stroke-width="1.5" />
        <!-- Left Atrium -->
        <path d="M 56 32 L 56 58 L 82 58 C 90 50 88 32 80 32 Z" fill="#1e293b" stroke="#475569" stroke-width="1.5" />
        <!-- Right Ventricle -->
        <path d="M 26 62 L 50 62 L 48 98 C 38 98 24 85 26 62 Z" fill="#0f172a" stroke="#475569" stroke-width="1.5" />
        <!-- Left Ventricle (Thick Wall) -->
        <path d="M 54 62 L 84 62 C 86 85 70 104 52 104 L 52 62 Z" fill="#0f172a" stroke="#0ea5e9" stroke-width="2" />
        <!-- Central Septum -->
        <line x1="51" y1="32" x2="51" y2="102" stroke="#64748b" stroke-width="3" />

        <!-- Dynamic Overlays -->
        ${highlightElements}
        ${leadElements}
        ${vectorArrow}
      </svg>
    `;
  };

  // --- EKG UI LOCALIZATION UPDATER ---
  const updateEkgUiLanguage = () => {
    const isEs = state.ekgLang === "es";

    const ekgTag = document.getElementById("ekg-tag-label");
    const ekgHeroTitle = document.getElementById("ekg-hero-title");
    const ekgHeroDesc = document.getElementById("ekg-hero-desc");

    if (ekgTag) ekgTag.textContent = isEs ? "Módulo interactivo" : "Interaktivní modul";
    if (ekgHeroTitle) ekgHeroTitle.textContent = isEs ? "EKG Masterclass y Atlas Diagnóstico" : "EKG Masterclass & Diagnostický atlas";
    if (ekgHeroDesc) {
      ekgHeroDesc.textContent = isEs
        ? "Guía visual exhaustiva de electrocardiografía: visualización split-card con trazado de EKG, esquema simplificado de propagación anatómica del impulso, Decálogo de EKG, trastornos iónicos, síndromes y desglose detallado de tipos de marcapasos (desde VVI y TRC hasta el marcapasos fisiológico del haz de His)."
        : "Komplexní vizuální průvodce elektrokardiografií: split-card rozpad s reálným EKG pruhem, zjednodušeným schématem anatomického šíření vzruchu, EKG Desaterem, iontovými dysbalancemi, syndromy a detailním přehledem typů kardiostimulace (od VVI přes CRT až po nenápadný His-bundle pacing).";
    }

    const tabDesatero = document.getElementById("ekg-tab-label-desatero");
    const tabAnatomy = document.getElementById("ekg-tab-label-anatomy");
    const tabIons = document.getElementById("ekg-tab-label-ions");
    const tabSyndromes = document.getElementById("ekg-tab-label-syndromes");
    const tabPacemakers = document.getElementById("ekg-tab-label-pacemakers");
    const tabQuiz = document.getElementById("ekg-tab-label-quiz");

    if (tabDesatero) tabDesatero.textContent = isEs ? "1. Decálogo de EKG" : "1. EKG Desatero";
    if (tabAnatomy) tabAnatomy.textContent = isEs ? "2. Origen Anatómico" : "2. Anatomický původ";
    if (tabIons) tabIons.textContent = isEs ? "3. Iones y Temperatura" : "3. Ionty & Teplota";
    if (tabSyndromes) tabSyndromes.textContent = isEs ? "4. Síndromes y Cardiopatías" : "4. Syndromy & Vady";
    if (tabPacemakers) tabPacemakers.textContent = isEs ? "5. Marcapasos en EKG" : "5. Kardiostimulace na EKG";
    if (tabQuiz) tabQuiz.textContent = isEs ? "6. Test de EKG" : "6. EKG Kvíz";

    if (isEs) {
      ekgLangEsBtn?.classList.add("active");
      ekgLangCsBtn?.classList.remove("active");
    } else {
      ekgLangCsBtn?.classList.add("active");
      ekgLangEsBtn?.classList.remove("active");
    }
  };

  const setEkgLanguage = (lang) => {
    setLanguage(lang);
  };

  ekgLangCsBtn?.addEventListener("click", () => setLanguage("cs"));
  ekgLangEsBtn?.addEventListener("click", () => setLanguage("es"));

  // --- EKG MASTERCLASS RENDERING ---
  const renderEkgDesatero = () => {
    if (!desateroContainer) return;
    const ekgData = getEkgData();
    const isEs = state.ekgLang === "es";

    desateroContainer.innerHTML = ekgData.desatero
      .map(
        (item) => `
      <div class="ekg-split-card">
        <!-- Left Column: EKG Strip Display -->
        <div class="ekg-strip-col">
          <div class="ekg-strip-header">
            <div class="ekg-strip-title">
              <span>${item.icon}</span>
              <span>${item.title}</span>
            </div>
            <span class="ekg-lead-badge">${isEs ? "Derivación II / 12 derivaciones estándar" : "Svod II / standardní 12svod"}</span>
          </div>

          <div class="ecg-paper-container ecg-paper-pink">
            ${generateEkgSvg(`desatero-${item.step}`, { paper: "pink" })}
          </div>

          <div class="ekg-paper-meta">
            ${isEs ? "Velocidad: 25 mm/s • Calibración: 10 mm/mV • 1 cuadro pequeño = 40 ms (0.04 s) / 0.1 mV" : "Posun: 25 mm/s • Kalibrace: 10 mm/mV • 1 malý čtvereček = 40 ms (0.04 s) / 0.1 mV"}
          </div>
        </div>

        <!-- Right Column: Rule, Logic & Anatomy Breakdown -->
        <div class="ekg-logic-col">
          <div class="ekg-logic-box">
            <span class="logic-box-label">${isEs ? "🎯 Regla de oro para la evaluación" : "🎯 Zlaté pravidlo pro hodnocení"}</span>
            <p class="logic-box-text"><strong>${item.rule}</strong></p>
          </div>

          <div class="ekg-logic-box">
            <span class="logic-box-label" style="color: #38bdf8;">${isEs ? "🧠 Fundamento fisiológico y lógico" : "🧠 Logické a fyziologické souvislosti"}</span>
            <p class="logic-box-text">${item.details}</p>
          </div>

          <div class="ekg-pearl-box">
            💡 <strong>${isEs ? "Perla clínica:" : "Klinická perla:"}</strong> ${item.clinicalPearl}
          </div>
        </div>
      </div>
    `
      )
      .join("");
  };

  const renderEkgAnatomy = () => {
    if (!anatomyContainer) return;
    const ekgData = getEkgData();
    const isEs = state.ekgLang === "es";

    anatomyContainer.innerHTML = ekgData.anatomy
      .map(
        (item) => `
      <div class="ekg-split-card">
        <!-- Left: Waveform with Grid -->
        <div class="ekg-strip-col">
          <div class="ekg-strip-header">
            <div class="ekg-strip-title">
              <span>🫀</span>
              <span>${item.name}</span>
            </div>
            <span class="ekg-lead-badge">${item.ecgCorrelate}</span>
          </div>

          <div class="ecg-paper-container ecg-paper-dark">
            ${generateEkgSvg(item.id, { paper: "dark", highlightColor: "#38bdf8" })}
          </div>

          <div class="ekg-markers-list">
            <div class="ekg-marker-item">
              <span class="ekg-marker-tag">${isEs ? "Localización:" : "Lokalizace:"}</span>
              <span class="ekg-marker-desc">${item.location}</span>
            </div>
          </div>
        </div>

        <!-- Right: Simplified Anatomy Scheme & Logical Cause -->
        <div class="ekg-logic-col">
          <div class="ekg-anatomy-diagram-card">
            <div class="anatomy-svg-thumb">
              ${generateAnatomySvg(item.id)}
            </div>
            <div class="anatomy-text-wrap">
              <span class="anatomy-origin-title">${isEs ? "Origen anatómico del impulso" : "Anatomický původ vzruchu"}</span>
              <span class="anatomy-origin-loc">${item.location}</span>
              <span class="anatomy-vector-pill">🧭 ${isEs ? "Vector:" : "Vektor:"} ${item.vector}</span>
            </div>
          </div>

          <div class="ekg-logic-box">
            <span class="logic-box-label">${isEs ? "⚡ Mecanismo electrofisiológico" : "⚡ Elektrofyziologický mechanismus"}</span>
            <p class="logic-box-text">${item.mechanism}</p>
          </div>

          <div class="ekg-danger-box">
            ⚠️ <strong>${isEs ? "Patología por disfunción:" : "Patologie při poruše:"}</strong> ${item.pathology}
          </div>
        </div>
      </div>
    `
      )
      .join("");
  };

  const renderEkgIons = () => {
    if (!ionsContainer) return;
    const ekgData = getEkgData();
    const isEs = state.ekgLang === "es";

    ionsContainer.innerHTML = ekgData.ionAndTemperature
      .map(
        (item) => `
      <div class="ekg-split-card">
        <!-- Left: EKG Waveform Strip -->
        <div class="ekg-strip-col">
          <div class="ekg-strip-header">
            <div class="ekg-strip-title">
              <span>🧪</span>
              <span>${item.name}</span>
            </div>
            <span class="badge-recognition-${item.color === 'rose' ? 'danger' : (item.color === 'amber' ? 'warning' : 'medium')}">
              ${item.severity}
            </span>
          </div>

          <div class="ecg-paper-container ecg-paper-dark">
            ${generateEkgSvg(item.id, { paper: "dark", waveColor: item.color === 'rose' ? '#f43f5e' : '#38bdf8' })}
          </div>

          <div class="ekg-markers-list">
            <div class="ekg-marker-item">
              <span class="ekg-marker-tag">${isEs ? "Patrón típico:" : "Typická křivka:"}</span>
              <span class="ekg-marker-desc">${item.ecgWaveform}</span>
            </div>
          </div>
        </div>

        <!-- Right: Pathophysiology & Pearls -->
        <div class="ekg-logic-col">
          <div class="ekg-logic-box">
            <span class="logic-box-label">${isEs ? "🔍 Cambios característicos en el EKG" : "🔍 Charakteristické EKG změny"}</span>
            <ul style="list-style: disc; margin-left: 18px; line-height: 1.55; font-size: 0.82rem; color: var(--text-secondary);">
              ${item.changes.map((ch) => `<li style="margin-bottom: 6px;">${ch}</li>`).join("")}
            </ul>
          </div>

          <div class="ekg-pearl-box">
            💊 <strong>${isEs ? "Manejo clínico y antídoto:" : "Klinický management &amp; Antidotum:"}</strong> ${item.pearl}
          </div>
        </div>
      </div>
    `
      )
      .join("");
  };

  const renderEkgSyndromes = () => {
    if (!syndromesContainer) return;
    const ekgData = getEkgData();
    const isEs = state.ekgLang === "es";

    syndromesContainer.innerHTML = ekgData.syndromesAndCongenital
      .map(
        (item) => `
      <div class="ekg-split-card">
        <!-- Left: EKG Waveform Strip -->
        <div class="ekg-strip-col">
          <div class="ekg-strip-header">
            <div class="ekg-strip-title">
              <span>${item.icon}</span>
              <span>${item.name}</span>
            </div>
            <span class="ekg-lead-badge">${item.type}</span>
          </div>

          <div class="ecg-paper-container ecg-paper-pink">
            ${generateEkgSvg(item.id, { paper: "pink" })}
          </div>

          <div class="ekg-markers-list">
            <div class="ekg-marker-item">
              <span class="ekg-marker-tag">${isEs ? "Criterios de EKG:" : "EKG kritéria:"}</span>
              <span class="ekg-marker-desc">${item.ecgCriteria}</span>
            </div>
          </div>
        </div>

        <!-- Right: Clinical Logic & Pitfalls -->
        <div class="ekg-logic-col">
          <div class="ekg-anatomy-diagram-card">
            <div class="anatomy-svg-thumb">
              ${generateAnatomySvg(item.id)}
            </div>
            <div class="anatomy-text-wrap">
              <span class="anatomy-origin-title">${item.name}</span>
              <span class="anatomy-origin-loc">${item.type}</span>
              ${item.triggers ? `<span class="anatomy-vector-pill">🔥 ${isEs ? "Desencadenantes:" : "Spouštěče:"} ${item.triggers}</span>` : ""}
            </div>
          </div>

          <div class="ekg-logic-box">
            <span class="logic-box-label">${isEs ? "🧑‍⚕️ Presentación clínica y pacientes" : "🧑‍⚕️ Klinický obraz a pacienti"}</span>
            <p class="logic-box-text">${item.clinicalPresentation}</p>
          </div>

          ${item.dangerAlert ? `<div class="ekg-danger-box">${item.dangerAlert}</div>` : ""}

          <div class="ekg-pearl-box">
            🛡️ <strong>${isEs ? "Manejo y prevención de muerte súbita:" : "Léčba a prevence náhlé smrti:"}</strong> ${item.management}
          </div>
        </div>
      </div>
    `
      )
      .join("");
  };

  // --- RENDER PACEMAKERS (TYPY KARDIOSTIMULACE) ---
  const renderEkgPacemakers = () => {
    if (!pacemakersContainer) return;
    const ekgData = getEkgData();
    const isEs = state.ekgLang === "es";

    pacemakersContainer.innerHTML = `
      <div style="background: rgba(16, 185, 129, 0.08); border: 1px solid rgba(16, 185, 129, 0.25); border-radius: var(--radius-lg); padding: 18px 22px; margin-bottom: 24px;">
        <h3 style="font-family: var(--font-heading); font-size: 1.15rem; font-weight: 700; color: var(--cardio-emerald); margin-bottom: 6px;">
          ${isEs ? "🔋 Atlas de estimulación cardíaca: Desde complejos anchos clásicos hasta el marcapasos fisiológico del haz de His" : "🔋 Atlas kardiostimulace: Od klasických širokých křivek po nenápadný His-bundle pacing"}
        </h3>
        <p style="font-size: 0.84rem; color: var(--text-secondary); line-height: 1.55;">
          ${isEs
            ? "El reconocimiento del marcapasos en el EKG depende de la posición del electrodo: mientras que la estimulación clásica del ápex del ventrículo derecho (VVI) genera un QRS ancho con morfología de BRIHH y una espícula prominente, la moderna <strong>estimulación fisiológica del sistema de conducción (CSP)</strong> genera un <strong>QRS estrecho fisiológico</strong> con una micro-espícula fácil de pasar por alto."
            : "Rozpoznání stimulace na EKG závisí na poloze elektrody: zatímco klasická stimulace z hrotu pravé komory (VVI) vytváří snadno čitelný široký QRS s LBBB obrazem a velkým spikem, moderní <strong>fyziologická stimulace Hisova svazku (CSP)</strong> vytváří <strong>štíhlý fyziologický QRS</strong> s drobným mikro-spikem, který je velmi snadné přehlédnout!"}
        </p>
      </div>

      ${ekgData.pacemakers
        .map(
          (pm) => `
        <div class="ekg-split-card">
          <!-- Left: ECG Trace & Pacing Markers -->
          <div class="ekg-strip-col">
            <div class="ekg-strip-header">
              <div class="ekg-strip-title">
                <span>${pm.icon}</span>
                <span>${pm.name}</span>
              </div>
              <span class="badge-recognition-${pm.recognitionBadge}">
                ${pm.recognitionLevel}
              </span>
            </div>

            <div class="ecg-paper-container ecg-paper-dark">
              ${generateEkgSvg(pm.id, { paper: "dark" })}
            </div>

            <div class="ekg-markers-list">
              ${pm.leadMarkers
                .map(
                  (m) => `
                <div class="ekg-marker-item">
                  <span class="ekg-marker-tag">${m.label}:</span>
                  <span class="ekg-marker-desc">${m.desc}</span>
                </div>
              `
                )
                .join("")}
            </div>
          </div>

          <!-- Right: Lead Anatomy Scheme & Logic -->
          <div class="ekg-logic-col">
            <div class="ekg-anatomy-diagram-card">
              <div class="anatomy-svg-thumb">
                ${generateAnatomySvg(pm.id)}
              </div>
              <div class="anatomy-text-wrap">
                <span class="anatomy-origin-title">${isEs ? "Posición del electrodo de estimulación" : "Poloha stimulační elektrody"}</span>
                <span class="anatomy-origin-loc">${pm.leadOrigin}</span>
                <span class="anatomy-vector-pill">🧭 ${isEs ? "Vector:" : "Vektor:"} ${pm.vectorLogic}</span>
              </div>
            </div>

            <div class="ekg-logic-box">
              <span class="logic-box-label">${isEs ? "⚡ Por qué el trazado se ve así" : "⚡ Proč křivka vypadá právě takto"}</span>
              <p class="logic-box-text">${pm.mechanism}</p>
            </div>

            <div class="ekg-pearl-box">
              💡 <strong>${isEs ? "Consejo clínico y trampa de examen:" : "Klinický tip a chyták ke zkoušce:"}</strong> ${pm.clinicalPearl}
            </div>
          </div>
        </div>
      `
        )
        .join("")}
    `;
  };

  const renderEkgQuiz = () => {
    if (!ekgQuizContainer) return;
    const ekgData = getEkgData();
    const isEs = state.ekgLang === "es";

    ekgQuizContainer.innerHTML = ekgData.masterclassQuiz
      .map(
        (q, qIdx) => `
      <div class="decision-quiz-box" style="margin-bottom: 24px;">
        <span class="quiz-badge">${isEs ? `Pregunta ${qIdx + 1} de ${ekgData.masterclassQuiz.length}` : `Otázka ${qIdx + 1} z ${ekgData.masterclassQuiz.length}`}</span>
        <p class="quiz-prompt">${q.question}</p>
        <div class="quiz-options-list" id="emq-opts-${qIdx}">
          ${q.options
            .map(
              (opt, optIdx) => `
            <button class="quiz-opt-btn" data-qidx="${qIdx}" data-optidx="${optIdx}">
              ${opt.text}
            </button>
          `
            )
            .join("")}
        </div>
        <div class="quiz-feedback-box" id="emq-fb-${qIdx}"></div>
      </div>
    `
      )
      .join("");

    // Bind events
    ekgData.masterclassQuiz.forEach((q, qIdx) => {
      const container = document.getElementById(`emq-opts-${qIdx}`);
      const fbBox = document.getElementById(`emq-fb-${qIdx}`);
      if (!container || !fbBox) return;

      container.querySelectorAll(".quiz-opt-btn").forEach((btn) => {
        btn.addEventListener("click", () => {
          const optIdx = parseInt(btn.getAttribute("data-optidx"));
          const selected = q.options[optIdx];

          container.querySelectorAll(".quiz-opt-btn").forEach((b, i) => {
            b.disabled = true;
            if (q.options[i].isCorrect) {
              b.classList.add("correct");
            } else if (i === optIdx) {
              b.classList.add("incorrect");
            }
          });

          fbBox.className = `quiz-feedback-box show ${selected.isCorrect ? "correct-fb" : "incorrect-fb"}`;
          fbBox.innerHTML = `
            <strong>${selected.isCorrect ? (isEs ? "✅ ¡Correcto!" : "✅ Správně!") : (isEs ? "❌ Incorrecto." : "❌ Nesprávně.")}</strong><br>
            ${q.explanation}
          `;
        });
      });
    });
  };

  // EKG Subpane Switcher
  const switchEkgSubpane = (paneName) => {
    state.activeEkgSubpane = paneName;

    [ekgSubDesatero, ekgSubAnatomy, ekgSubIons, ekgSubSyndromes, ekgSubPacemakers, ekgSubQuiz].forEach((b) =>
      b?.classList.remove("active")
    );
    [ekgPaneDesatero, ekgPaneAnatomy, ekgPaneIons, ekgPaneSyndromes, ekgPanePacemakers, ekgPaneQuiz].forEach((p) =>
      p?.classList.remove("active")
    );

    if (paneName === "desatero") {
      ekgSubDesatero?.classList.add("active");
      ekgPaneDesatero?.classList.add("active");
      renderEkgDesatero();
    } else if (paneName === "anatomy") {
      ekgSubAnatomy?.classList.add("active");
      ekgPaneAnatomy?.classList.add("active");
      renderEkgAnatomy();
    } else if (paneName === "ions") {
      ekgSubIons?.classList.add("active");
      ekgPaneIons?.classList.add("active");
      renderEkgIons();
    } else if (paneName === "syndromes") {
      ekgSubSyndromes?.classList.add("active");
      ekgPaneSyndromes?.classList.add("active");
      renderEkgSyndromes();
    } else if (paneName === "pacemakers") {
      ekgSubPacemakers?.classList.add("active");
      ekgPanePacemakers?.classList.add("active");
      renderEkgPacemakers();
    } else if (paneName === "quiz") {
      ekgSubQuiz?.classList.add("active");
      ekgPaneQuiz?.classList.add("active");
      renderEkgQuiz();
    }
  };

  ekgSubDesatero?.addEventListener("click", () => switchEkgSubpane("desatero"));
  ekgSubAnatomy?.addEventListener("click", () => switchEkgSubpane("anatomy"));
  ekgSubIons?.addEventListener("click", () => switchEkgSubpane("ions"));
  ekgSubSyndromes?.addEventListener("click", () => switchEkgSubpane("syndromes"));
  ekgSubPacemakers?.addEventListener("click", () => switchEkgSubpane("pacemakers"));
  ekgSubQuiz?.addEventListener("click", () => switchEkgSubpane("quiz"));

  // =========================================================================
  // --- ROUTING & VIEW SWITCHING ---
  // =========================================================================

  const switchView = (viewName, updateHash = true) => {
    state.activeView = viewName;
    [modulesView, ekgView, moduleDetailView, srView].forEach((v) => v?.classList.remove("active"));
    [navModulesBtn, navEkgBtn, navSrBtn].forEach((b) => b?.classList.remove("active"));

    if (viewName === "modules") {
      modulesView.classList.add("active");
      navModulesBtn.classList.add("active");
      renderModulesList();
      updateDashboardStats();
      if (updateHash && window.location.hash !== "#temata") {
        window.location.hash = "#temata";
      }
    } else if (viewName === "ekg") {
      ekgView.classList.add("active");
      navEkgBtn.classList.add("active");
      switchEkgSubpane(state.activeEkgSubpane || "desatero");
      if (updateHash && window.location.hash !== "#ekg") {
        window.location.hash = "#ekg";
      }
    } else if (viewName === "module-detail") {
      moduleDetailView.classList.add("active");
    } else if (viewName === "spaced-repetition") {
      srView.classList.add("active");
      navSrBtn.classList.add("active");
      if (updateHash && window.location.hash !== "#leitner") {
        window.location.hash = "#leitner";
      }
    }
  };

  const handleHashRouting = () => {
    const hash = window.location.hash || "#temata";

    if (hash === "#temata" || hash === "" || hash === "#") {
      switchView("modules", false);
    } else if (hash.startsWith("#ekg")) {
      switchView("ekg", false);
      if (hash === "#ekg-anatomy") switchEkgSubpane("anatomy");
      else if (hash === "#ekg-ions") switchEkgSubpane("ions");
      else if (hash === "#ekg-syndromes") switchEkgSubpane("syndromes");
      else if (hash === "#ekg-pacemakers") switchEkgSubpane("pacemakers");
      else if (hash === "#ekg-quiz") switchEkgSubpane("quiz");
      else switchEkgSubpane(state.activeEkgSubpane || "desatero");
    } else if (hash === "#leitner" || hash === "#spaced-repetition") {
      startSpacedRepetition("all", false);
    } else if (hash.startsWith("#modul-")) {
      const modId = hash.replace("#modul-", "");
      openModuleDetail(modId);
    }
  };

  window.addEventListener("hashchange", handleHashRouting);

  navModulesBtn?.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.hash = "#temata";
  });

  navEkgBtn?.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.hash = "#ekg";
  });

  navSrBtn?.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.hash = "#leitner";
  });

  startDueBtn?.addEventListener("click", () => startSpacedRepetition("all", true));
  startAllSrBtn?.addEventListener("click", () => {
    window.location.hash = "#leitner";
  });

  // Search input binding
  searchInput?.addEventListener("input", (e) => {
    state.searchQuery = e.target.value;
    if (state.activeView !== "modules") {
      window.location.hash = "#temata";
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
  updateGlobalLanguage();
  updateEkgUiLanguage();
  updateDashboardStats();
  handleHashRouting();
});
