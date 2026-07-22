// app.js – Mikrobiologie portál
// Leitnerův systém, dvojotázky, dark/light mode

const STORAGE_KEY = 'mikra_progress_v1';
const LEITNER_INTERVALS = [0, 1, 2, 5, 10]; // dny pro box 0–4

// ========== STAV APLIKACE ==========
let appState = {
  progress: {}, // { "mikra-1": { a: {box:1, nextDue: ts}, b: {box:1, nextDue: ts} } }
  search: '',
  groupFilter: 'all',
  statusFilter: 'all',
  currentQuestion: null,
  currentPart: 'A',
  currentTab: { A: 'study', B: 'study' }
};

// ========== INIT ==========
document.addEventListener('DOMContentLoaded', () => {
  loadProgress();
  applyTheme();
  renderCards();
  updateDashboard();
  bindEvents();
  initChatbot();
});

// ========== LOCALSTORAGE ==========
function loadProgress() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) appState.progress = JSON.parse(saved);
  } catch (e) { appState.progress = {}; }
}

function saveProgress() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(appState.progress));
}

function getCardProgress(questionId, part) {
  const key = questionId;
  if (!appState.progress[key]) return null;
  return appState.progress[key][part.toLowerCase()] || null;
}

function setCardProgress(questionId, part, box) {
  if (!appState.progress[questionId]) appState.progress[questionId] = {};
  const days = LEITNER_INTERVALS[box] || 10;
  const nextDue = Date.now() + days * 24 * 60 * 60 * 1000;
  appState.progress[questionId][part.toLowerCase()] = { box, nextDue };
  saveProgress();
}

// ========== LEITNER LOGIC ==========
function getBox(questionId, part) {
  const p = getCardProgress(questionId, part);
  return p ? p.box : 0;
}

function isDue(questionId, part) {
  const p = getCardProgress(questionId, part);
  if (!p) return true; // unstudied = due
  return Date.now() >= p.nextDue;
}

function applyGrade(questionId, part, grade) {
  const currentBox = getBox(questionId, part);
  let newBox;
  if (grade === 'wrong') {
    newBox = Math.max(1, currentBox - 1);
    if (currentBox === 0) newBox = 1;
  } else if (grade === 'good') {
    newBox = Math.min(3, currentBox + 1);
    if (currentBox === 0) newBox = 2;
  } else { // perfect
    newBox = 4;
  }
  setCardProgress(questionId, part, newBox);
  updateDashboard();
  renderCards();
  showGradeFeedback(part, grade);
}

function showGradeFeedback(part, grade) {
  const panel = document.getElementById(`part-panel-${part.toUpperCase()}`);
  const existingFb = panel.querySelector('.grade-feedback');
  if (existingFb) existingFb.remove();
  const fb = document.createElement('div');
  fb.className = 'grade-feedback';
  const msgs = { wrong: '❌ Bude brzo opět k opakování', good: '⚠️ Posunuto o box výše', perfect: '✅ Skvěle! Přesunuto do Boxu 4' };
  fb.textContent = msgs[grade] || '';
  fb.style.cssText = 'padding:0.5rem 1.75rem;font-size:0.82rem;color:var(--primary);font-weight:600;animation:fadeIn 0.3s ease;';
  const controls = panel.querySelector('.spaced-repetition-controls');
  if (controls) controls.parentNode.insertBefore(fb, controls);
  setTimeout(() => fb.remove(), 2500);
}

// ========== DASHBOARD ==========
function updateDashboard() {
  const total = MIKRA_QUESTIONS.length;
  let box1 = 0, box2 = 0, box3 = 0, box4 = 0, due = 0;

  MIKRA_QUESTIONS.forEach(q => {
    ['a', 'b'].forEach(part => {
      const box = getBox(q.id, part);
      const d = isDue(q.id, part);
      if (d) due++;
      if (box === 1) box1++;
      else if (box === 2) box2++;
      else if (box === 3) box3++;
      else if (box === 4) box4++;
    });
  });

  const totalParts = total * 2;
  const mastered = MIKRA_QUESTIONS.filter(q => getBox(q.id, 'a') === 4 && getBox(q.id, 'b') === 4).length;
  const pct = Math.round((mastered / total) * 100);

  setEl('stat-progress-pct', pct + ' %');
  setEl('stat-progress-ratio', `Zvládnuté: ${mastered} z ${total} dvojotázek`);
  const bar = document.getElementById('stat-progress-bar');
  if (bar) bar.style.width = pct + '%';

  setEl('box-1-count', box1);
  setEl('box-2-count', box2);
  setEl('box-3-count', box3);
  setEl('box-4-count', box4);

  setEl('stat-due-count', due);
  const dueDesc = document.getElementById('stat-due-desc');
  const dueBtn = document.getElementById('study-due-btn');
  if (dueDesc) dueDesc.textContent = due > 0 ? `${due} části potřebují zopakování` : 'Všechny karty jsou aktuální!';
  if (dueBtn) dueBtn.style.display = due > 0 ? 'flex' : 'none';
}

function setEl(id, val) {
  const el = document.getElementById(id);
  if (el) el.textContent = val;
}

// ========== RENDER CARDS ==========
function renderCards() {
  const grid = document.getElementById('cards-grid');
  if (!grid) return;
  grid.innerHTML = '';

  const filtered = getFilteredQuestions();

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="empty-state">
        <span class="empty-state-icon">🔬</span>
        <h3>Žádné otázky nenalezeny</h3>
        <p>Zkus upravit filtr nebo vyhledávání.</p>
      </div>`;
    return;
  }

  filtered.forEach(q => {
    const boxA = getBox(q.id, 'a');
    const boxB = getBox(q.id, 'b');
    const card = createCard(q, boxA, boxB);
    grid.appendChild(card);
  });
}

function getFilteredQuestions() {
  return MIKRA_QUESTIONS.filter(q => {
    // Search
    const search = appState.search.toLowerCase();
    if (search) {
      const searchable = [
        q.cast_a.title, q.cast_b.title,
        ...(q.cast_a.keywords || []),
        ...(q.cast_b.keywords || []),
        q.cast_a.content.definice || '',
        q.cast_b.content.definice || '',
      ].join(' ').toLowerCase();
      if (!searchable.includes(search)) return false;
    }

    // Group filter
    const gf = appState.groupFilter;
    if (gf !== 'all') {
      if (gf === 'Bakteriologie' && q.skupina_a !== 'Bakteriologie') return false;
      if (gf === 'Virologie' && q.skupina_b !== 'Virologie') return false;
      if (gf === 'Mykologie' && q.skupina_b !== 'Mykologie') return false;
      if (gf === 'Diagnostika' && q.skupina_b !== 'Diagnostika') return false;
    }

    // Status filter
    const sf = appState.statusFilter;
    if (sf !== 'all') {
      const boxA = getBox(q.id, 'a');
      const boxB = getBox(q.id, 'b');
      if (sf === 'due') {
        if (!isDue(q.id, 'a') && !isDue(q.id, 'b')) return false;
      } else if (sf === 'unstudied') {
        if (boxA !== 0 || boxB !== 0) return false;
      } else {
        const boxNum = parseInt(sf.split('-')[1]);
        if (boxA !== boxNum && boxB !== boxNum) return false;
      }
    }

    return true;
  });
}

function createCard(q, boxA, boxB) {
  const card = document.createElement('div');
  card.className = 'question-card';
  card.dataset.id = q.id;

  const statusBadgeA = getStatusBadge(q.id, 'a');
  const statusBadgeB = getStatusBadge(q.id, 'b');

  const keywordsA = (q.cast_a.keywords || []).slice(0, 3).map(k => `<span class="keyword-chip">${k}</span>`).join('');
  const keywordsB = (q.cast_b.keywords || []).slice(0, 2).map(k => `<span class="keyword-chip">${k}</span>`).join('');

  card.innerHTML = `
    <div class="card-header">
      <div class="card-part card-part-a">
        <span class="card-part-label">Část A · ${q.skupina_a}</span>
        <span class="card-part-title">${q.cast_a.title}</span>
      </div>
      <div class="card-part card-part-b">
        <span class="card-part-label">Část B · ${q.skupina_b}</span>
        <span class="card-part-title">${q.cast_b.title}</span>
      </div>
    </div>
    <div class="card-keywords">${keywordsA}${keywordsB}</div>
    <div class="card-footer">
      <span class="card-num-badge">OTÁZKA ${q.cislo}</span>
      <div class="card-status-badges">
        ${statusBadgeA}
        ${statusBadgeB}
      </div>
    </div>
  `;

  card.addEventListener('click', () => openDialog(q));
  return card;
}

function getStatusBadge(questionId, part) {
  const box = getBox(questionId, part);
  const label = part.toUpperCase();
  if (box === 0) return `<span class="status-badge unstudied">${label}: Nové</span>`;
  return `<span class="status-badge box-${box}">${label}: Box ${box}</span>`;
}

// ========== DIALOG ==========
function openDialog(question) {
  appState.currentQuestion = question;
  appState.currentPart = 'A';

  const dialog = document.getElementById('detail-dialog');
  const numEl = document.getElementById('dialog-question-num');
  const titleEl = document.getElementById('dialog-title');

  if (numEl) numEl.textContent = `OTÁZKA ${question.cislo}`;
  if (titleEl) titleEl.textContent = `${question.cast_a.title}  ·  ${question.cast_b.title}`;

  document.getElementById('part-tab-a-title').textContent = question.cast_a.title;
  document.getElementById('part-tab-b-title').textContent = question.cast_b.title;

  // Aktivovat část A
  switchPart('A');

  // Render obsahu
  renderStudyContent('A', question.cast_a);
  renderStudyContent('B', question.cast_b);
  renderQuiz('A', question.cast_a.quiz || [], question.id);
  renderQuiz('B', question.cast_b.quiz || [], question.id);

  dialog.showModal();
}

function switchPart(part) {
  appState.currentPart = part;

  document.querySelectorAll('.part-tab-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.part === part);
  });

  document.querySelectorAll('.part-panel').forEach(panel => {
    panel.classList.toggle('active', panel.id === `part-panel-${part}`);
  });

  // Reset to study tab
  switchTab(part, 'study');
}

function switchTab(part, tabType) {
  appState.currentTab[part] = tabType;
  const panel = document.getElementById(`part-panel-${part}`);
  if (!panel) return;

  panel.querySelectorAll('.tab-btn').forEach(btn => {
    const isTarget = btn.dataset.tab === `tab-${tabType}-${part.toLowerCase()}`;
    btn.classList.toggle('active', isTarget);
  });

  panel.querySelectorAll('.tab-panel').forEach(tp => {
    const isTarget = tp.id === `tab-${tabType}-${part.toLowerCase()}`;
    tp.classList.toggle('active', isTarget);
  });
}

// ========== RENDER STUDY CONTENT ==========
function renderStudyContent(part, castData) {
  const el = document.getElementById(`study-content-${part.toLowerCase()}`);
  if (!el) return;

  const content = castData.content || {};
  const cards = [];

  const fieldMap = {
    definice: 'Definice a přehled',
    etiologie: 'Etiologie',
    patogeneze: 'Patogeneze',
    klinicky: 'Klinický obraz',
    laborator: 'Laboratorní diagnostika',
    terapie: 'Terapie a prevence',
    metody: 'Metody',
    vzorek: 'Vzorky a odběr',
    vyhody_nevyhody: 'Výhody a nevýhody',
    materialy: 'Materiály k odběru',
    klasifikace: 'Klasifikace',
    prevence: 'Prevence a vakcinace',
    diagnostika: 'Diagnostika',
    viry: 'Viry a původci',
    ecoli_kmeny: 'Kmeny E. coli',
    shigella: 'Shigella – úplavice',
    salmonella_antrop: 'Antropopatogenní Salmonella',
    salmonella_zoo: 'Zoopatogenní Salmonella',
    yersinia: 'Yersinia',
    vibrio: 'Rod Vibrio',
    aeromonas: 'Rod Aeromonas',
    plesiomonas: 'Rod Plesiomonas',
    gonorrhoeae: 'N. gonorrhoeae',
    meningitidis: 'N. meningitidis',
    rody: 'Rody a zástupci',
    aureus: 'S. aureus',
    koagneg: 'Koagulásanegativní stafylokoky',
    kroky: 'Kroky PCR cyklu',
    komponenty: 'Komponenty PCR',
    varianty: 'Varianty PCR',
    nastaveni_primeru: 'Nastavení primerů',
    rRNA_16S: '16S rRNA – taxonomie',
    sangerova_metoda: 'Sangerovo sekvenování',
    ngs: 'Next Generation Sequencing (NGS)',
    usni_streptokoky: 'Ústní streptokoky',
    pneumokok: 'S. pneumoniae (pneumokok)',
    mikromycety: 'Mikromycety – obecně',
    candida: 'Candida spp.',
    typy: 'Typy infekcí',
    kryptokokoza: 'Kryptokokóza',
    mukormykoza: 'Mukormykóza',
    pcp: 'Pneumocystis jirovecii (PCP)',
    listeria: 'Listeria monocytogenes',
    erysipelothrix: 'Erysipelothrix',
    lactobacillus: 'Lactobacillus',
    nocardia: 'Nocardia',
    actinomyces: 'Actinomyces',
    dalsi: 'Další organismy',
    diphteriae: 'C. diphtheriae – záškrt',
    bacillus: 'Bacillus – antrax, B. cereus',
    enterokoky: 'Enterokoky',
    leuconostoc: 'Leuconostoc',
    pediococcus: 'Pediococcus',
    nutritionally_variant: 'Nutričně variantní streptokoky',
    clostridium: 'Clostridium spp.',
    peptostreptococcus: 'Peptostreptococcus',
    formy: 'Klinické formy',
    dimorfismus: 'Dimorfismus hub',
    puvodci: 'Původci',
    klinicky: 'Klinický obraz',
    klimaticke_zmeny: 'Vliv klimatických změn',
    hybridizace: 'Hybridizační metody',
    amplifikace: 'Amplifikační metody',
    viry: 'Viry a původci',
  };

  for (const [key, label] of Object.entries(fieldMap)) {
    if (content[key]) {
      cards.push(`
        <div class="study-card">
          <h3>${label}</h3>
          <div class="content-text">${content[key]}</div>
        </div>`);
    }
  }

  // Also handle keywords
  if (castData.keywords && castData.keywords.length > 0) {
    const kws = castData.keywords.map(k => `<span class="keyword-chip">${k}</span>`).join(' ');
    cards.unshift(`<div class="card-keywords" style="padding:0;">${kws}</div>`);
  }

  el.innerHTML = cards.length > 0 ? cards.join('') : '<p style="color:var(--text-muted);font-size:0.875rem;">Obsah bude doplněn.</p>';
}

// ========== RENDER QUIZ ==========
function renderQuiz(part, quizData, questionId) {
  const el = document.getElementById(`quiz-container-${part.toLowerCase()}`);
  if (!el) return;

  if (!quizData || quizData.length === 0) {
    el.innerHTML = '<p style="color:var(--text-muted);font-size:0.875rem;padding:1rem 0;">Pro tuto část zatím nejsou kvízové otázky.</p>';
    return;
  }

  el.innerHTML = quizData.map((item, i) => `
    <div class="quiz-question-block" id="quiz-${part}-${i}">
      <p class="quiz-q-text">${i + 1}. ${item.q}</p>
      <div class="quiz-options">
        ${item.options.map((opt, j) => `
          <button class="quiz-option" data-part="${part}" data-qi="${i}" data-oi="${j}" data-correct="${item.correct}">
            ${['A', 'B', 'C', 'D'][j]}. ${opt}
          </button>
        `).join('')}
      </div>
      <div class="quiz-explanation" id="quiz-exp-${part}-${i}">
        💡 ${item.explanation || ''}
      </div>
    </div>
  `).join('');

  // Bind quiz option clicks
  el.querySelectorAll('.quiz-option').forEach(btn => {
    btn.addEventListener('click', handleQuizAnswer);
  });
}

function handleQuizAnswer(e) {
  const btn = e.currentTarget;
  const part = btn.dataset.part;
  const qi = btn.dataset.qi;
  const oi = parseInt(btn.dataset.oi);
  const correct = parseInt(btn.dataset.correct);

  const block = document.getElementById(`quiz-${part}-${qi}`);
  if (!block) return;

  // Disable all options
  block.querySelectorAll('.quiz-option').forEach(b => {
    b.disabled = true;
    b.classList.remove('correct', 'incorrect');
  });

  btn.classList.add(oi === correct ? 'correct' : 'incorrect');
  block.querySelectorAll('.quiz-option')[correct].classList.add('correct');

  const exp = document.getElementById(`quiz-exp-${part}-${qi}`);
  if (exp) exp.classList.add('visible');
}

// ========== EVENTS ==========
function bindEvents() {
  // Back to hub button
  const backHubBtn = document.getElementById('back-hub-btn');
  if (backHubBtn) {
    backHubBtn.addEventListener('click', () => {
      window.location.href = '../index.html';
    });
  }

  // Dialog close
  const closeBtn = document.getElementById('dialog-close');
  if (closeBtn) closeBtn.addEventListener('click', closeDialog);

  const dialog = document.getElementById('detail-dialog');
  if (dialog) dialog.addEventListener('click', e => {
    if (e.target === dialog) closeDialog();
  });

  // Part tabs
  document.querySelectorAll('.part-tab-btn').forEach(btn => {
    btn.addEventListener('click', () => switchPart(btn.dataset.part));
  });

  // Study tabs (A)
  const panelA = document.getElementById('part-panel-A');
  if (panelA) {
    panelA.querySelectorAll('.tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const tabType = btn.dataset.tab === 'tab-study-a' ? 'study' : 'quiz';
        switchTab('A', tabType);
      });
    });
  }

  // Study tabs (B)
  const panelB = document.getElementById('part-panel-B');
  if (panelB) {
    panelB.querySelectorAll('.tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const tabType = btn.dataset.tab === 'tab-study-b' ? 'study' : 'quiz';
        switchTab('B', tabType);
      });
    });
  }

  // Leitner buttons
  document.querySelectorAll('.leitner-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      if (!appState.currentQuestion) return;
      const grade = btn.dataset.grade;
      const target = btn.dataset.target.toUpperCase();
      applyGrade(appState.currentQuestion.id, target, grade);
    });
  });

  // Search
  const searchInput = document.getElementById('search-input');
  if (searchInput) {
    searchInput.addEventListener('input', e => {
      appState.search = e.target.value;
      renderCards();
    });
  }

  // Group filter
  const groupFilter = document.getElementById('group-filter');
  if (groupFilter) {
    groupFilter.addEventListener('change', e => {
      appState.groupFilter = e.target.value;
      renderCards();
    });
  }

  // Status filter
  const statusFilter = document.getElementById('status-filter');
  if (statusFilter) {
    statusFilter.addEventListener('change', e => {
      appState.statusFilter = e.target.value;
      renderCards();
    });
  }

  // Theme toggle
  const themeBtn = document.getElementById('theme-toggle');
  if (themeBtn) themeBtn.addEventListener('click', toggleTheme);

  // Keyboard: Escape closes dialog
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeDialog();
  });
}

function closeDialog() {
  const dialog = document.getElementById('detail-dialog');
  if (dialog) dialog.close();
  appState.currentQuestion = null;
}

// ========== THEME ==========
function applyTheme() {
  const saved = localStorage.getItem('mikra_theme') || 'dark';
  document.body.className = saved === 'light' ? 'light-theme' : 'dark-theme';
}

function toggleTheme() {
  const isLight = document.body.classList.contains('light-theme');
  const newTheme = isLight ? 'dark' : 'light';
  document.body.className = newTheme === 'light' ? 'light-theme' : 'dark-theme';
  localStorage.setItem('mikra_theme', newTheme);
}

// ========== FADE-IN ANIMATION CSS ==========
const style = document.createElement('style');
style.textContent = `
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(-4px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;
document.head.appendChild(style);


// ========== GEMINI CHATBOT LOGIC ==========
function initChatbot() {
  const chatbotContainer = document.getElementById("gemini-chatbot-container");
  if (!chatbotContainer) return;

  const chatbotFab = document.getElementById("chatbot-fab");
  const chatbotPanel = document.getElementById("chatbot-panel");
  const chatbotMessages = document.getElementById("chatbot-messages");
  const chatbotInput = document.getElementById("chatbot-input");
  const chatbotInputForm = document.getElementById("chatbot-input-form");
  const chatbotTypingIndicator = document.getElementById("chatbot-typing-indicator");
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
    { role: "assistant", text: "Ahoj! Jsem tvůj medicínský asistent pro Mikrobiologii. Pomohu ti s bakteriologií, virologií, mykologií, parazitologií a diagnostickými metodami. S čím dnes začneme?" }
  ];

  const systemInstructionText = "Jste odborník na mikrobiologii. Pomáháte studentům lékařství s bakteriologií, virologií, mykologií, parazitologií a diagnostickými metodami. Odpovídejte věcně, stručně a odborně česky. Používejte markdown pro přehlednost.";

  const getSavedKey = () => localStorage.getItem("gemini_chat_local_key") || "";
  if (chatbotApiKeyInput) {
    chatbotApiKeyInput.value = getSavedKey();
  }

  let lastMessageTime = 0;
  const CLIENT_MIN_INTERVAL = 3000;

  // Toggle Chat Panel
  if (chatbotFab && chatbotPanel) {
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
  if (closeBtn && chatbotPanel && chatbotFab) {
    closeBtn.addEventListener("click", () => {
      chatbotPanel.classList.remove("open");
      chatbotFab.classList.remove("open");
    });
  }

  // Settings Panel
  if (chatbotSettingsBtn && chatbotSettingsOverlay) {
    chatbotSettingsBtn.addEventListener("click", () => {
      chatbotSettingsOverlay.classList.add("open");
    });
  }

  if (chatbotSettingsCloseBtn && chatbotSettingsOverlay) {
    chatbotSettingsCloseBtn.addEventListener("click", () => {
      chatbotSettingsOverlay.classList.remove("open");
    });
  }

  if (chatbotSaveKeyBtn && chatbotApiKeyInput && chatbotSettingsOverlay) {
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

  if (chatbotClearKeyBtn && chatbotApiKeyInput) {
    chatbotClearKeyBtn.addEventListener("click", () => {
      localStorage.removeItem("gemini_chat_local_key");
      chatbotApiKeyInput.value = "";
      alert("API klíč byl vymazán. Nyní se dotazy posílají přes proxy server.");
    });
  }

  // Simple Markdown Parser
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
    if (inList) {
      html += '</ul>';
    }
    return html;
  };

  const scrollToBottom = () => {
    if (chatbotMessages) chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
  };

  const addMessage = (role, text) => {
    chatHistory.push({ role, text });
    if (chatHistory.length > 15) {
      chatHistory.shift();
    }

    const messageDiv = document.createElement("div");
    messageDiv.className = `message ${role}`;
    
    const contentDiv = document.createElement("div");
    contentDiv.className = "message-content";
    contentDiv.innerHTML = role === "assistant" ? parseMarkdown(text) : text;
    
    messageDiv.appendChild(contentDiv);
    if (chatbotMessages) {
      chatbotMessages.appendChild(messageDiv);
      scrollToBottom();
    }

    if (chatbotPanel && !chatbotPanel.classList.contains("open") && role === "assistant") {
      if (chatbotBadge) chatbotBadge.style.display = "block";
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
      buffer = lines.pop();

      for (const line of lines) {
        const trimmed = line.trim();
        if (!trimmed.startsWith("data: ")) continue;
        const jsonStr = trimmed.substring(6);
        try {
          const parsed = JSON.parse(jsonStr);
          if (parsed.text) {
            onChunk(parsed.text);
          }
        } catch (e) {}
      }
    }

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

  const callGeminiDirectlyStream = async (key, messages, subject, onChunk, onStart) => {
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
          { category: "HARM_CATEGORY_HARASSMENT", threshold: "BLOCK_NONE" },
          { category: "HARM_CATEGORY_HATE_SPEECH", threshold: "BLOCK_NONE" },
          { category: "HARM_CATEGORY_SEXUALLY_EXPLICIT", threshold: "BLOCK_NONE" },
          { category: "HARM_CATEGORY_DANGEROUS_CONTENT", threshold: "BLOCK_NONE" }
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
      buffer = lines.pop();

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
        } catch (e) {}
      }
    }

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

  const createAssistantMessageBubble = () => {
    const messageDiv = document.createElement("div");
    messageDiv.className = "message assistant";
    
    const contentDiv = document.createElement("div");
    contentDiv.className = "message-content";
    contentDiv.innerHTML = "";
    
    messageDiv.appendChild(contentDiv);
    if (chatbotMessages) {
      chatbotMessages.appendChild(messageDiv);
      scrollToBottom();
    }
    return contentDiv;
  };

  if (chatbotInputForm) {
    chatbotInputForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      
      const now = Date.now();
      if (now - lastMessageTime < CLIENT_MIN_INTERVAL) {
        const errorDiv = document.createElement("div");
        errorDiv.className = "message system";
        errorDiv.innerHTML = '<div class="message-content">Příliš rychlé dotazy. Zkuste to za chvíli.</div>';
        if (chatbotMessages) {
          chatbotMessages.appendChild(errorDiv);
          scrollToBottom();
        }
        return;
      }

      if (!chatbotInput) return;
      const query = chatbotInput.value.trim();
      if (!query) return;

      addMessage("user", query);
      chatbotInput.value = "";
      chatbotInput.disabled = true;
      const submitBtn = chatbotInputForm.querySelector("button");
      if (submitBtn) submitBtn.disabled = true;
      
      if (chatbotTypingIndicator) chatbotTypingIndicator.classList.add("active");
      if (statusDot) statusDot.className = "avatar-status-dot typing";
      scrollToBottom();

      lastMessageTime = Date.now();

      let contentDiv = null;
      try {
        const savedKey = getSavedKey();
        let responseText = "";
        
        const onStart = () => {
          if (chatbotTypingIndicator) chatbotTypingIndicator.classList.remove("active");
          if (statusDot) statusDot.className = "avatar-status-dot online";
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
          await callGeminiDirectlyStream(savedKey, chatHistory, "mikra", onChunk, onStart);
        } else {
          await callProxyServerStream(chatHistory, "mikra", onChunk, onStart);
        }

        chatHistory.push({ role: "assistant", text: responseText });
        if (chatHistory.length > 15) {
          chatHistory.shift();
        }

        if (chatbotPanel && !chatbotPanel.classList.contains("open")) {
          if (chatbotBadge) chatbotBadge.style.display = "block";
        }
      } catch (err) {
        console.error(err);
        if (chatbotTypingIndicator) chatbotTypingIndicator.classList.remove("active");
        if (statusDot) statusDot.className = "avatar-status-dot online";
        
        if (chatHistory.length > 0 && chatHistory[chatHistory.length - 1].role === "user") {
          chatHistory.pop();
        }

        const errorDiv = document.createElement("div");
        errorDiv.className = "message system";
        errorDiv.innerHTML = `<div class="message-content">Chyba: ${err.message}</div>`;
        if (chatbotMessages) {
          chatbotMessages.appendChild(errorDiv);
          scrollToBottom();
        }
      } finally {
        if (chatbotInput) {
          chatbotInput.disabled = false;
          if (submitBtn) submitBtn.disabled = false;
          chatbotInput.focus();
        }
      }
    });
  }

  // Suggestion chips
  const suggestions = [
    { label: "Gramovo barvení", query: "Jaký je princip Gramova barvení a jaký je rozdíl v buněčné stěně G+ a G- bakterií?" },
    { label: "Bakteriální spory", query: "Které medicínsky významné bakterie tvoří spory a jaké jsou metody jejich sterilizace?" },
    { label: "PCR v diagnostice", query: "Jak funguje metoda PCR a jaké jsou její výhody při diagnostice virových infekcí?" }
  ];

  if (chatbotSuggestions) {
    chatbotSuggestions.innerHTML = "";
    suggestions.forEach(s => {
      const chip = document.createElement("button");
      chip.type = "button";
      chip.className = "suggestion-chip";
      chip.textContent = s.label;
      chip.addEventListener("click", () => {
        if (chatbotInput) {
          chatbotInput.value = s.query;
          if (chatbotInputForm) {
            chatbotInputForm.dispatchEvent(new Event("submit"));
          }
        }
      });
      chatbotSuggestions.appendChild(chip);
    });
  }
}
