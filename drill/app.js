// drill/app.js - Hlavní aplikační engine pro MedDrill PWA
(function () {
  'use strict';

  // --- STAV APLIKACE ---
  const state = {
    manifest: null,
    downloadedSubjects: new Map(), // subjectId -> subjectData
    userStates: new Map(),         // questionId -> userState
    customDecks: [],
    soundEnabled: true,
    stats: {
      streak: 0,
      totalAnswered: 0,
      accuracy: 0,
      masteredCount: 0,
      learningCount: 0,
      mistakesCount: 0,
      starredCount: 0
    },
    // Stav právě probíhajícího testu
    currentDrill: {
      deckTitle: '',
      questions: [],
      currentIndex: 0,
      answered: false,
      userAnswers: [],
      missedQuestions: [],
      correctCount: 0,
      answeredQuestionIds: new Set(),
      startTime: null,
      timerInterval: null,
      durationSeconds: null,
      deadlineMs: null,
      timeExpired: false,
      finished: false
    },
    currentFilter: 'all',
    deferredInstallPrompt: null,
    questionCardTemplate: null,
    lastFocusedElement: null
  };

  // --- POMOCNÉ FUNKCE PRO TEXT & FUZZY MATCHING & BEZPEČNOST ---
  function escapeHtml(str) {
    if (str === null || str === undefined) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  function removeDiacritics(str) {
    if (!str) return '';
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim();
  }

  function levenshteinDistance(a, b) {
    const s1 = removeDiacritics(a);
    const s2 = removeDiacritics(b);
    const m = s1.length;
    const n = s2.length;
    const d = [];

    for (let i = 0; i <= m; i++) d[i] = [i];
    for (let j = 0; j <= n; j++) d[0][j] = j;

    for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
        const cost = s1[i - 1] === s2[j - 1] ? 0 : 1;
        d[i][j] = Math.min(
          d[i - 1][j] + 1,      // deletion
          d[i][j - 1] + 1,      // insertion
          d[i - 1][j - 1] + cost // substitution
        );
      }
    }
    return d[m][n];
  }

  function isFuzzyMatch(userInput, acceptedList) {
    // Bezpečnostní limit na délku pro prevenci quadratic CPU DoS v Levenshtein algoritmu
    const cleanUser = removeDiacritics(userInput).slice(0, 150);
    if (!cleanUser) return false;

    return acceptedList.some(accepted => {
      const cleanAccepted = removeDiacritics(accepted).slice(0, 150);
      if (cleanUser === cleanAccepted) return true;
      if (cleanAccepted.includes(cleanUser) && cleanUser.length >= 4) return true;
      if (cleanUser.includes(cleanAccepted) && cleanAccepted.length >= 4) return true;
      // Povolit 1 překlep pro slova delší než 4 znaky
      if (cleanAccepted.length >= 5 && levenshteinDistance(cleanUser, cleanAccepted) <= 1) return true;
      return false;
    });
  }

  // --- ZVUKOVÝ ENGINE (WEB AUDIO API) ---
  let audioCtx = null;
  function getAudioContext() {
    if (!audioCtx && (window.AudioContext || window.webkitAudioContext)) {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      audioCtx = new AudioContextClass();
    }
    if (audioCtx && audioCtx.state === 'suspended') {
      audioCtx.resume().catch(() => {});
    }
    return audioCtx;
  }

  function playSfx(type) {
    if (!state.soundEnabled) return;
    try {
      const ctx = getAudioContext();
      if (!ctx) return;
      const now = ctx.currentTime;

      if (type === 'correct') {
        // Pozitivní harmonický dvojtón (C5 -> E5)
        const osc1 = ctx.createOscillator();
        const osc2 = ctx.createOscillator();
        const gain = ctx.createGain();

        osc1.type = 'sine';
        osc1.frequency.setValueAtTime(523.25, now);
        osc1.frequency.exponentialRampToValueAtTime(659.25, now + 0.1);

        osc2.type = 'sine';
        osc2.frequency.setValueAtTime(659.25, now + 0.08);
        osc2.frequency.exponentialRampToValueAtTime(783.99, now + 0.22);

        gain.gain.setValueAtTime(0.06, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);

        osc1.connect(gain);
        osc2.connect(gain);
        gain.connect(ctx.destination);

        osc1.start(now);
        osc1.stop(now + 0.1);
        osc2.start(now + 0.08);
        osc2.stop(now + 0.25);
      } else if (type === 'incorrect') {
        // Tlumený měkký hlubší tón
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'triangle';
        osc.frequency.setValueAtTime(220, now);
        osc.frequency.exponentialRampToValueAtTime(150, now + 0.22);

        gain.gain.setValueAtTime(0.09, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.22);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(now);
        osc.stop(now + 0.22);
      } else if (type === 'star') {
        // Zvonivý pop
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(880, now);
        osc.frequency.exponentialRampToValueAtTime(1320, now + 0.15);

        gain.gain.setValueAtTime(0.05, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.15);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(now);
        osc.stop(now + 0.15);
      } else if (type === 'complete') {
        // Fanfára při dokončení drillu
        [523.25, 659.25, 783.99, 1046.5].forEach((freq, idx) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          const startTime = now + idx * 0.09;

          osc.type = 'sine';
          osc.frequency.setValueAtTime(freq, startTime);

          gain.gain.setValueAtTime(0.07, startTime);
          gain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.35);

          osc.connect(gain);
          gain.connect(ctx.destination);

          osc.start(startTime);
          osc.stop(startTime + 0.35);
        });
      }
    } catch (e) {
      // Tichý fallback pro nepodporované browsery
    }
  }

  function triggerHaptic(type = 'light') {
    if ('vibrate' in navigator) {
      if (type === 'success') navigator.vibrate([40, 60, 40]);
      else if (type === 'error') navigator.vibrate([100]);
      else navigator.vibrate(25);
    }
  }

  function showToast(message, type = 'info') {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    let icon = 'ℹ️';
    if (type === 'success') icon = '✅';
    if (type === 'error') icon = '🚨';
    if (type === 'warning') icon = '⚠️';

    const iconSpan = document.createElement('span');
    iconSpan.textContent = icon;
    const msgSpan = document.createElement('span');
    msgSpan.textContent = String(message);

    const progBar = document.createElement('div');
    progBar.className = 'toast-progress';

    toast.appendChild(iconSpan);
    toast.appendChild(document.createTextNode(' '));
    toast.appendChild(msgSpan);
    toast.appendChild(progBar);
    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      toast.style.transition = 'all 0.3s';
      setTimeout(() => toast.remove(), 300);
    }, 3200);
  }

  // --- KONFETY ENGINE ---
  function fireConfetti() {
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const canvas = document.getElementById('confetti-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const colors = ['#00f0ff', '#00ffc2', '#f43f5e', '#fbbf24', '#a855f7', '#ffffff'];

    for (let i = 0; i < 90; i++) {
      particles.push({
        x: canvas.width * 0.5,
        y: canvas.height * 0.6,
        vx: (Math.random() - 0.5) * 16,
        vy: (Math.random() - 0.8) * 18,
        size: Math.random() * 8 + 4,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * 360,
        vr: (Math.random() - 0.5) * 12,
        alpha: 1
      });
    }

    let animationFrame;
    function render() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      let alive = false;

      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.45; // Gravitace
        p.rotation += p.vr;
        p.alpha -= 0.012;

        if (p.alpha > 0) {
          alive = true;
          ctx.save();
          ctx.globalAlpha = Math.max(0, p.alpha);
          ctx.translate(p.x, p.y);
          ctx.rotate((p.rotation * Math.PI) / 180);
          ctx.fillStyle = p.color;
          ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
          ctx.restore();
        }
      });

      if (alive) {
        animationFrame = requestAnimationFrame(render);
      } else {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
    }
    render();
  }

  // --- SERVICE WORKER & PWA INSTALL ---
  function initServiceWorker() {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/drill/sw.js')
        .then(reg => {
          console.log('[MedDrill] Service Worker registrován:', reg.scope);
          if (reg.waiting) showToast('Je připravena nová verze aplikace. Obnovte stránku.', 'info');
          reg.addEventListener('updatefound', () => {
            const installing = reg.installing;
            if (!installing) return;
            installing.addEventListener('statechange', () => {
              if (installing.state === 'installed' && navigator.serviceWorker.controller) {
                showToast('Je připravena nová verze aplikace. Obnovte stránku.', 'info');
              }
            });
          });
        })
        .catch(err => {
          console.warn('[MedDrill] Chyba registrace SW:', err);
        });
    }

    window.addEventListener('beforeinstallprompt', e => {
      e.preventDefault();
      state.deferredInstallPrompt = e;
      const btnInstall = document.getElementById('btn-install-pwa');
      if (btnInstall) btnInstall.style.display = 'flex';
      const promptSec = document.getElementById('install-native-prompt-section');
      if (promptSec) promptSec.style.display = 'block';
    });

    window.addEventListener('appinstalled', () => {
      state.deferredInstallPrompt = null;
      showToast('MedDrill byl úspěšně nainstalován na plochu!', 'success');
    });
  }

  // --- NAČTENÍ DAT A INICIALIZACE INDEXEDDB ---
  async function initApp() {
    initServiceWorker();
    const questionCard = document.getElementById('question-card');
    if (questionCard) state.questionCardTemplate = questionCard.innerHTML;

    try {
      // 1. Inicializovat lokální IndexedDB
      await window.drillStorage.init();

      // 2. Načíst manifest modulů
      const res = await fetch('/drill/data/manifest.json');
      if (res.ok) {
        state.manifest = await res.json();
      }
    } catch (e) {
      console.warn('Nelze načíst manifest po síti, pracuji s offline cache:', e);
    }

    // 3. Načíst stažené předměty z IndexedDB
    await refreshDownloadedSubjects();

    // 4. Načíst stav uživatelských odpovědí a statistiky
    await refreshUserStatesAndStats();

    // 5. Načíst vlastní balíčky a nastavení zvuku
    state.customDecks = await window.drillStorage.getCustomDecks();
    const soundPref = await window.drillStorage.getSetting('soundEnabled');
    state.soundEnabled = soundPref !== false;
    updateSoundButton();

    // 6. Zkontrolovat onboarding
    const onboarded = await window.drillStorage.getSetting('onboarded', false);
    if (!onboarded && state.downloadedSubjects.size === 0) {
      openModal('modal-onboarding');
    }

    // 7. Renderovat rozcestník
    renderDecksCatalog();
    renderCustomDecks();
    updateStatsDisplay();

    // 8. Ošetřit URL query parametry (např. /drill/?subject=kardio nebo ?mode=cases)
    handleUrlQueryParams();

    // 9. Nastavit listenery
    setupEventListeners();
  }

  async function refreshDownloadedSubjects() {
    const list = await window.drillStorage.getAllDownloadedSubjects();
    state.downloadedSubjects.clear();
    list.forEach(sub => {
      state.downloadedSubjects.set(sub.id, sub);
    });
  }

  async function refreshUserStatesAndStats() {
    const states = await window.drillStorage.getAllQuestionStates();
    state.userStates.clear();
    states.forEach(s => {
      state.userStates.set(s.questionId, s);
    });

    state.stats = await window.drillStorage.getStats();
  }

  // --- STAHENÍ PŘEDMĚTU DO INDEXEDDB ---
  async function downloadSubject(subjectId) {
    if (!state.manifest) return false;
    const subMeta = state.manifest.subjects.find(s => s.id === subjectId);
    if (!subMeta) return false;

    const updating = isSubjectUpdateAvailable(subMeta);
    showToast(`${updating ? 'Aktualizuji' : 'Stahuji'} ${subMeta.title}...`, 'info');

    try {
      const res = await fetch(subMeta.file);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();

      await window.drillStorage.saveSubject(data, {
        contentRevision: subMeta.revision,
        contentVersion: state.manifest.version
      });
      const storedData = {
        ...data,
        contentRevision: subMeta.revision,
        contentVersion: state.manifest.version,
        downloadedAt: Date.now()
      };
      state.downloadedSubjects.set(subjectId, storedData);

      showToast(`✅ ${subMeta.title} ${updating ? 'byla aktualizována' : 'úspěšně uložena'} offline!`, 'success');
      renderDecksCatalog();
      renderStorageManager();
      return true;
    } catch (err) {
      console.error('Chyba při stahování předmětu:', err);
      showToast(`Nelze stáhnout ${subMeta.title}. Zkontrolujte připojení.`, 'error');
      return false;
    }
  }

  async function removeSubject(subjectId) {
    const sub = state.downloadedSubjects.get(subjectId);
    const title = sub ? sub.title : subjectId;

    if (!confirm(`Opravdu chcete uvolnit místo a smazat offline data pro: ${title}?`)) {
      return;
    }

    await window.drillStorage.deleteSubject(subjectId);
    state.downloadedSubjects.delete(subjectId);
    showToast(`Data pro ${title} byla uvolněna z paměti.`, 'info');

    renderDecksCatalog();
    renderStorageManager();
  }

  async function downloadAllSubjects() {
    if (!state.manifest) return;
    const toDownload = state.manifest.subjects.filter(s => !state.downloadedSubjects.has(s.id) || isSubjectUpdateAvailable(s));

    if (toDownload.length === 0) {
      showToast('Všechny předměty již máte stažené offline!', 'info');
      return;
    }

    showToast(`Stahuji ${toDownload.length} zbývajících předmětů...`, 'info');

    let successCount = 0;
    for (const sub of toDownload) {
      try {
        const res = await fetch(sub.file);
        if (res.ok) {
          const data = await res.json();
          await window.drillStorage.saveSubject(data, {
            contentRevision: sub.revision,
            contentVersion: state.manifest.version
          });
          state.downloadedSubjects.set(sub.id, {
            ...data,
            contentRevision: sub.revision,
            contentVersion: state.manifest.version,
            downloadedAt: Date.now()
          });
          successCount++;
        }
      } catch (e) {
        console.error('Chyba stahování:', sub.id, e);
      }
    }

    showToast(`🎉 Úspěšně staženo ${successCount} předmětů pro 100% offline provoz!`, 'success');
    fireConfetti();
    renderDecksCatalog();
    renderStorageManager();
  }

  // --- RENDER ROZCESTNÍKU (CATALOG) ---
  function renderDecksCatalog() {
    const container = document.getElementById('subject-decks-grid');
    if (!container || !state.manifest) return;

    container.innerHTML = '';

    const filter = state.currentFilter;
    const subjects = state.manifest.subjects.filter(sub => {
      if (filter === 'all') return true;
      if (filter === 'grade-3') return sub.grade === 3;
      if (filter === 'grade-4') return sub.grade === 4;
      if (filter === 'grade-5') return sub.grade === 5;
      return true;
    });

    subjects.forEach(sub => {
      const isDownloaded = state.downloadedSubjects.has(sub.id);
      const updateAvailable = isDownloaded && isSubjectUpdateAvailable(sub);
      const card = document.createElement('div');
      card.className = 'deck-card';
      card.dataset.subjectId = sub.id;
      card.tabIndex = 0;
      card.setAttribute('role', 'button');
      card.setAttribute('aria-label', `${sub.title}: ${updateAvailable ? 'aktualizovat offline data' : (isDownloaded ? 'spustit drill' : 'stáhnout a spustit drill')}`);
      card.style.setProperty('--card-glow', `${sub.color}26`);

      // Výpočet míry zvládnutí (Mastery)
      const downloaded = state.downloadedSubjects.get(sub.id);
      let masteredCount = 0;
      let learningCount = 0;
      let mistakesCount = 0;
      const totalQ = sub.totalQuestions || 0;

      if (downloaded && Array.isArray(downloaded.questions)) {
        downloaded.questions.forEach(q => {
          const uState = state.userStates.get(q.id);
          if (uState) {
            if (uState.box >= 4) masteredCount++;
            else if (uState.box >= 2) learningCount++;
            else if (uState.timesIncorrect > uState.timesCorrect) mistakesCount++;
          }
        });
      }

      const masteredPct = totalQ > 0 ? ((masteredCount / totalQ) * 100) : 0;
      const learningPct = totalQ > 0 ? ((learningCount / totalQ) * 100) : 0;
      const mistakesPct = totalQ > 0 ? ((mistakesCount / totalQ) * 100) : 0;
      const totalStudied = masteredCount + learningCount + mistakesCount;

      let masteryHtml = '';
      if (isDownloaded && totalQ > 0) {
        masteryHtml = `
          <div class="deck-mastery-box">
            <div class="deck-mastery-bar-container">
              <div class="deck-mastery-fill-mastered" style="width: ${masteredPct}%;" title="Zvládnuto: ${masteredCount}"></div>
              <div class="deck-mastery-fill-learning" style="width: ${learningPct}%;" title="V procesu: ${learningCount}"></div>
              <div class="deck-mastery-fill-mistakes" style="width: ${mistakesPct}%;" title="Chyby k nápravě: ${mistakesCount}"></div>
            </div>
            <div class="deck-mastery-labels">
              <span>Pokrok: <strong class="deck-mastery-pct" style="color: ${masteredPct > 50 ? 'var(--emerald)' : (totalStudied > 0 ? 'var(--cyan)' : 'var(--text-muted)')};">${Math.round(masteredPct)}%</strong> (${masteredCount}/${totalQ})</span>
              <span>${totalStudied > 0 ? `${totalStudied} procvičeno` : 'Zatím neprocvičováno'}</span>
            </div>
          </div>
        `;
      }

      card.innerHTML = `
        <div class="deck-card-top">
          <div class="deck-icon-badge" style="background: ${sub.color}1a; border-color: ${sub.color}40; color: ${sub.color};">
            ${sub.icon}
          </div>
          <span class="deck-grade-badge">${sub.grade}. ročník</span>
        </div>
        <div>
          <h3 class="deck-card-title">${sub.title}</h3>
          <p class="deck-card-desc">
            ${sub.counts.single_choice} testových otázek • ${sub.counts.case_study} kazuistik • ${sub.counts.fill_in} dopisovacích
          </p>
          ${masteryHtml}
        </div>
        <div class="deck-card-footer">
          <div class="deck-counts">
            <span class="deck-count-pill">
              <span class="deck-status-dot ${isDownloaded ? 'downloaded' : ''}"></span>
              <span>${updateAvailable ? 'Dostupná aktualizace' : (isDownloaded ? 'Staženo offline' : sub.sizeFormatted)}</span>
            </span>
          </div>
          <span style="color: ${sub.color}; font-weight: 700; font-size: 0.85rem;">
            ${updateAvailable ? 'Aktualizovat →' : (isDownloaded ? 'Spustit drill →' : 'Stáhnout & Spustit ⬇️')}
          </span>
        </div>
      `;

      card.addEventListener('click', async () => {
        if (!state.downloadedSubjects.has(sub.id) || isSubjectUpdateAvailable(sub)) {
          const ok = await downloadSubject(sub.id);
          if (!ok) return;
        }
        startSubjectDrill(sub.id);
      });
      card.addEventListener('keydown', event => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          card.click();
        }
      });

      container.appendChild(card);
    });

    // Aktualizovat počty v Smart kartách
    const mistakesPill = document.getElementById('mistakes-count-pill');
    if (mistakesPill) {
      let mistakesCount = 0;
      state.userStates.forEach(s => {
        if (s.timesIncorrect > s.timesCorrect) mistakesCount++;
      });
      mistakesPill.textContent = `${mistakesCount} chyb k nápravě`;
    }

    const starredPill = document.getElementById('starred-count-pill');
    if (starredPill) {
      let starredCount = 0;
      state.userStates.forEach(s => {
        if (s.isStarred) starredCount++;
      });
      starredPill.textContent = `${starredCount} označených`;
    }

    const daily = window.MedDrillCore.getDailySelection(getAllDownloadedQuestions(), state.userStates);
    const dueTodayEl = document.getElementById('stat-due-today');
    if (dueTodayEl) dueTodayEl.textContent = daily.dueCount;
    const newTodayEl = document.getElementById('stat-new-today');
    if (newTodayEl) newTodayEl.textContent = daily.newCount;
  }

  function getAllDownloadedQuestions() {
    const allQuestions = [];
    state.downloadedSubjects.forEach(sub => {
      if (Array.isArray(sub.questions)) allQuestions.push(...sub.questions);
    });
    return allQuestions;
  }

  function isSubjectUpdateAvailable(subjectMeta) {
    const downloaded = state.downloadedSubjects.get(subjectMeta.id);
    return Boolean(downloaded && window.MedDrillCore.isNewerRevision(subjectMeta.revision, downloaded.contentRevision));
  }

  function renderCustomDecks() {
    const container = document.getElementById('custom-decks-grid');
    const header = document.getElementById('custom-decks-header');
    if (!container) return;

    container.innerHTML = '';

    if (state.customDecks.length === 0) {
      if (state.currentFilter === 'custom') {
        container.innerHTML = `
          <div style="grid-column: 1 / -1; text-align: center; padding: 40px 20px; color: var(--text-muted);">
            Zatím nemáte vytvořené žádné vlastní balíčky.<br>
            <button class="btn-primary" id="btn-empty-create-deck" style="margin-top: 14px;">
              ➕ Vytvořit první balíček
            </button>
          </div>
        `;
        document.getElementById('btn-empty-create-deck')?.addEventListener('click', () => {
          openModal('modal-create-deck');
        });
      }
      return;
    }

    state.customDecks.forEach(deck => {
      const card = document.createElement('div');
      card.className = 'deck-card';
      card.tabIndex = 0;
      card.setAttribute('role', 'button');
      card.setAttribute('aria-label', `Spustit vlastní balíček ${deck.title}`);
      const safeTitle = escapeHtml(deck.title);
      const safeSubjects = escapeHtml(Array.isArray(deck.subjectIds) ? deck.subjectIds.join(', ') : '');
      const safeTypes = escapeHtml(Array.isArray(deck.questionTypes) ? deck.questionTypes.join(' • ') : '');
      const safeLimit = escapeHtml(deck.limit || 'vše');
      const safeId = escapeHtml(deck.id);

      card.innerHTML = `
        <div class="deck-card-top">
          <div class="deck-icon-badge" style="background: rgba(0, 240, 255, 0.15); color: var(--cyan);">
            📁
          </div>
          <button class="btn-icon btn-delete-deck" data-deck-id="${safeId}" style="width: 28px; height: 28px; font-size: 0.8rem;" title="Smazat balíček">
            🗑️
          </button>
        </div>
        <div>
          <h3 class="deck-card-title">${safeTitle}</h3>
          <p class="deck-card-desc">
            Předměty: ${safeSubjects} • limit ${safeLimit} otázek
          </p>
        </div>
        <div class="deck-card-footer">
          <div class="deck-counts">
            <span class="deck-count-pill">${safeTypes}</span>
          </div>
          <span style="color: var(--cyan); font-weight: 700; font-size: 0.85rem;">Spustit →</span>
        </div>
      `;

      card.addEventListener('click', e => {
        if (e.target.closest('.btn-delete-deck')) {
          e.stopPropagation();
          deleteCustomDeck(deck.id);
          return;
        }
        startCustomDeckDrill(deck);
      });
      card.addEventListener('keydown', event => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          card.click();
        }
      });

      container.appendChild(card);
    });
  }

  async function deleteCustomDeck(id) {
    if (!confirm('Opravdu chcete tento vlastní balíček smazat?')) return;
    await window.drillStorage.deleteCustomDeck(id);
    state.customDecks = await window.drillStorage.getCustomDecks();
    renderCustomDecks();
    showToast('Balíček byl smazán.', 'info');
  }

  // --- RENDER STORAGE MANAGER (OFFLINE HUB) ---
  function renderStorageManager() {
    const list = document.getElementById('storage-subject-list');
    const summaryText = document.getElementById('storage-summary-text');
    if (!list || !state.manifest) return;

    list.innerHTML = '';
    const downloadedCount = state.downloadedSubjects.size;
    summaryText.textContent = `Staženo ${downloadedCount} z ${state.manifest.subjects.length} předmětů`;

    state.manifest.subjects.forEach(sub => {
      const isDownloaded = state.downloadedSubjects.has(sub.id);
      const updateAvailable = isDownloaded && isSubjectUpdateAvailable(sub);
      const item = document.createElement('div');
      item.className = 'storage-subject-item';

      item.innerHTML = `
        <div class="storage-sub-info">
          <span class="storage-sub-icon">${sub.icon}</span>
          <div>
            <div class="storage-sub-name">${sub.title} (${sub.grade}. ročník)</div>
            <div class="storage-sub-meta">${sub.totalQuestions} otázek • ${sub.sizeFormatted}</div>
          </div>
        </div>
        <div>
          ${isDownloaded
            ? `<button class="btn-secondary btn-sub-action" data-action="${updateAvailable ? 'update' : 'remove'}" data-id="${sub.id}" style="padding: 6px 12px; font-size: 0.8rem; ${updateAvailable ? 'color: var(--cyan);' : 'color: var(--rose);'}">${updateAvailable ? 'Aktualizovat' : 'Smazat'}</button>`
            : `<button class="btn-primary btn-sub-action" data-action="download" data-id="${sub.id}" style="padding: 6px 12px; font-size: 0.8rem;">Stáhnout</button>`
          }
        </div>
      `;

      item.querySelector('.btn-sub-action').addEventListener('click', async e => {
        const action = e.target.dataset.action;
        const id = e.target.dataset.id;
        if (action === 'download' || action === 'update') {
          await downloadSubject(id);
        } else {
          await removeSubject(id);
        }
      });

      list.appendChild(item);
    });
  }

  // --- DRILL ENGINE (SPUŠTĚNÍ A PRŮBĚH DRILLU) ---

  function startSubjectDrill(subjectId) {
    const sub = state.downloadedSubjects.get(subjectId);
    if (!sub || !sub.questions || sub.questions.length === 0) {
      showToast('Tento předmět nemá žádné otázky k dispozici.', 'warning');
      return;
    }

    // Zamíchat otázky
    const shuffled = [...sub.questions].sort(() => Math.random() - 0.5);
    initDrillSession(`${sub.title} • Kompletní drill`, shuffled);
  }

  function startSmartDrill(mode) {
    const allQuestions = getAllDownloadedQuestions();

    if (allQuestions.length === 0) {
      showToast('Nemáte stažený žádný předmět! Stáhněte si nejprve balíček.', 'warning');
      openModal('modal-storage');
      return;
    }

    let filtered = [];
    let title = '';

    if (mode === 'mistakes') {
      title = '🚨 Chybový záchranář';
      filtered = allQuestions.filter(q => {
        const s = state.userStates.get(q.id);
        return s && s.timesIncorrect > s.timesCorrect;
      });

      if (filtered.length === 0) {
        showToast('Nemáte žádné neopravené chyby! Skvělá práce. 🎯', 'success');
        return;
      }
    } else if (mode === 'cases') {
      title = '🏥 Klinický maraton kazuistik';
      filtered = allQuestions.filter(q => q.type === 'case_study');

      if (filtered.length === 0) {
        showToast('V aktuálně stažených předmětech nejsou kazuistiky. Stáhněte si Kardiologii nebo Neurologii.', 'info');
        return;
      }
    } else if (mode === 'srs') {
      title = '🧠 Dnešní Spaced Repetition opakování';
      const daily = window.MedDrillCore.getDailySelection(allQuestions, state.userStates);
      filtered = daily.questions;

      if (filtered.length === 0) {
        showToast('Pro dnešek nemáte žádné otázky k opakování ani nové karty.', 'success');
        return;
      }
    } else if (mode === 'timed') {
      title = '⏱️ Zkouškový test nanečisto (20 otázek)';
      filtered = [...allQuestions].sort(() => Math.random() - 0.5).slice(0, 20);
    } else if (mode === 'starred') {
      title = '⭐️ Hvězdičkované otázky';
      filtered = allQuestions.filter(q => {
        const s = state.userStates.get(q.id);
        return s && s.isStarred;
      });

      if (filtered.length === 0) {
        showToast('Zatím jste si neoznačili žádnou otázku hvězdičkou ★.', 'info');
        return;
      }
    }

    // Denní SRS musí ponechat nejdříve nejdéle čekající opakování.
    if (mode !== 'srs') filtered = [...filtered].sort(() => Math.random() - 0.5);
    initDrillSession(title, filtered, mode === 'timed'
      ? { durationSeconds: window.MedDrillCore.SPRINT_DURATION_SECONDS }
      : {});
  }

  function startCustomDeckDrill(deck) {
    const questions = [];
    deck.subjectIds.forEach(subId => {
      const sub = state.downloadedSubjects.get(subId);
      if (sub && Array.isArray(sub.questions)) {
        sub.questions.forEach(q => {
          if (deck.questionTypes.includes(q.type)) {
            questions.push(q);
          }
        });
      }
    });

    if (questions.length === 0) {
      showToast('Pro zadaný filtr nebyly nalezeny žádné otázky.', 'warning');
      return;
    }

    const shuffled = [...questions].sort(() => Math.random() - 0.5);
    const limit = parseInt(deck.limit, 10);
    const finalSet = (limit > 0 && shuffled.length > limit) ? shuffled.slice(0, limit) : shuffled;

    initDrillSession(deck.title, finalSet);
  }

  function renderQuestionStepper() {
    const container = document.getElementById('drill-stepper-container');
    if (!container) return;
    const drill = state.currentDrill;
    container.innerHTML = '';

    drill.questions.forEach((q, idx) => {
      const dot = document.createElement('div');
      dot.className = 'drill-stepper-dot';
      const ans = drill.userAnswers[idx];
      if (ans !== undefined) {
        dot.classList.add(ans.isCorrect ? 'correct' : 'incorrect');
      } else if (idx === drill.currentIndex) {
        dot.classList.add('active');
      }
      dot.title = `Otázka ${idx + 1}`;
      container.appendChild(dot);
    });

    const activeDot = container.children[drill.currentIndex];
    if (activeDot && typeof activeDot.scrollIntoView === 'function') {
      activeDot.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
  }

  function initDrillSession(title, questions, options = {}) {
    const durationSeconds = options.durationSeconds || null;
    const questionCard = document.getElementById('question-card');
    if (questionCard && state.questionCardTemplate) {
      questionCard.innerHTML = state.questionCardTemplate;
      bindQuestionControls();
    }
    state.currentDrill = {
      deckTitle: title,
      questions: questions,
      currentIndex: 0,
      answered: false,
      userAnswers: [],
      missedQuestions: [],
      correctCount: 0,
      answeredQuestionIds: new Set(),
      startTime: Date.now(),
      timerInterval: null,
      durationSeconds,
      deadlineMs: durationSeconds ? Date.now() + durationSeconds * 1000 : null,
      timeExpired: false,
      finished: false
    };

    switchView('view-drill');
    renderCurrentQuestion();

    // Časomíra
    const timerEl = document.getElementById('drill-timer-display');
    if (timerEl) {
      if (durationSeconds) {
        timerEl.style.display = 'block';
        const updateTimer = () => {
          const remaining = window.MedDrillCore.getRemainingSeconds(state.currentDrill.deadlineMs);
          const mins = Math.floor(remaining / 60).toString().padStart(2, '0');
          const secs = (remaining % 60).toString().padStart(2, '0');
          timerEl.textContent = `⏱️ ${mins}:${secs}`;
          if (remaining === 0) {
            clearInterval(state.currentDrill.timerInterval);
            state.currentDrill.timeExpired = true;
            finishDrillSession({ timeExpired: true });
          }
        };
        updateTimer();
        state.currentDrill.timerInterval = setInterval(updateTimer, 1000);
      } else {
        timerEl.style.display = 'none';
      }
    }
  }

  function renderCurrentQuestion() {
    const drill = state.currentDrill;
    const q = drill.questions[drill.currentIndex];
    if (!q) {
      finishDrillSession();
      return;
    }

    drill.answered = false;

    // Aktualizace čítače a progress baru i živého stepperu
    const counterEl = document.getElementById('drill-counter');
    const fillEl = document.getElementById('drill-progress-fill');
    counterEl.textContent = `${drill.currentIndex + 1} / ${drill.questions.length}`;
    fillEl.style.width = `${((drill.currentIndex + 1) / drill.questions.length) * 100}%`;
    renderQuestionStepper();

    // Metadata
    const typeBadge = document.getElementById('question-type-badge');
    typeBadge.className = `question-badge ${q.type}`;
    if (q.type === 'single_choice') typeBadge.textContent = 'Single Choice';
    else if (q.type === 'case_study') typeBadge.textContent = 'Kazuistika';
    else if (q.type === 'fill_in') typeBadge.textContent = 'Dopisovací otázka';

    const subBadge = document.getElementById('question-subject-badge');
    subBadge.textContent = `${q.subjectTitle || ''} • ${q.topicTitle || ''}`;

    // Hvězdička
    const starBtn = document.getElementById('btn-star-active-question');
    const userState = state.userStates.get(q.id);
    const isStarred = userState ? userState.isStarred : false;
    starBtn.className = `btn-star-question ${isStarred ? 'starred' : ''}`;

    // Prompt
    const promptEl = document.getElementById('question-prompt');
    promptEl.textContent = q.question || q.title || '';

    // Elementy pro různé typy
    const vignetteBox = document.getElementById('case-vignette-box');
    const optionsGrid = document.getElementById('options-grid');
    const fillInBox = document.getElementById('fill-in-box');
    const explanationCard = document.getElementById('drill-explanation-card');
    const nextBar = document.getElementById('drill-next-bar');
    const srsRating = document.getElementById('srs-rating-container');
    const pearlBox = document.getElementById('pearl-box');

    // Reset stavu
    explanationCard.classList.remove('active');
    nextBar.style.display = 'none';
    srsRating.classList.remove('active');
    pearlBox.style.display = 'none';

    // 1. TYP: KAZUISTIKA
    if (q.type === 'case_study') {
      vignetteBox.style.display = 'block';
      optionsGrid.style.display = 'none';
      fillInBox.style.display = 'none';

      const v = q.vignette || {};
      const headerEl = document.getElementById('vignette-patient-header');
      headerEl.innerHTML = '';

      if (v.patientAge || v.patientSex) {
        const tag1 = document.createElement('span');
        tag1.className = 'vignette-tag';
        tag1.textContent = `👤 ${v.patientAge ? v.patientAge + ' let' : ''} ${v.patientSex || ''}`.trim();
        headerEl.appendChild(tag1);
      }
      if (v.chiefComplaint) {
        const tag2 = document.createElement('span');
        tag2.className = 'vignette-tag';
        tag2.textContent = `⚠️ ${v.chiefComplaint}`;
        headerEl.appendChild(tag2);
      }

      document.getElementById('vignette-scenario-text').textContent = v.scenario || q.question || '';

      // Tlačítko odhalit řešení
      promptEl.innerHTML = '';
      const wrapDiv = document.createElement('div');
      wrapDiv.style.marginTop = '10px';
      const revealBtn = document.createElement('button');
      revealBtn.className = 'btn-primary';
      revealBtn.id = 'btn-reveal-case';
      revealBtn.style.width = '100%';
      revealBtn.innerHTML = '<span>🔍 Odhalit diagnózu & klinické řešení</span> <span class="kbd-hint" style="margin-left: 8px;">Space / Enter ↵</span>';
      revealBtn.addEventListener('click', () => {
        handleCaseReveal(q);
      });
      wrapDiv.appendChild(revealBtn);
      promptEl.appendChild(wrapDiv);

    // 2. TYP: SINGLE CHOICE
    } else if (q.type === 'single_choice') {
      vignetteBox.style.display = 'none';
      fillInBox.style.display = 'none';
      optionsGrid.style.display = 'flex';
      optionsGrid.innerHTML = '';

      const letters = ['A', 'B', 'C', 'D', 'E'];
      (q.options || []).forEach((optText, optIdx) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.setAttribute('data-option-index', optIdx);

        const contentWrap = document.createElement('div');
        contentWrap.className = 'option-btn-content';
        
        const letterSpan = document.createElement('span');
        letterSpan.className = 'option-letter';
        letterSpan.textContent = letters[optIdx] || String(optIdx + 1);

        const textSpan = document.createElement('span');
        textSpan.textContent = String(optText);

        contentWrap.appendChild(letterSpan);
        contentWrap.appendChild(textSpan);
        btn.appendChild(contentWrap);

        const kbdSpan = document.createElement('span');
        kbdSpan.className = 'kbd-hint';
        kbdSpan.textContent = letters[optIdx] || String(optIdx + 1);
        btn.appendChild(kbdSpan);

        btn.addEventListener('click', () => {
          if (drill.answered) return;
          handleSingleChoiceAnswer(q, optIdx, btn);
        });

        optionsGrid.appendChild(btn);
      });

    // 3. TYP: FILL-IN (DOPISOVACÍ)
    } else if (q.type === 'fill_in') {
      vignetteBox.style.display = 'none';
      optionsGrid.style.display = 'none';
      fillInBox.style.display = 'block';

      const input = document.getElementById('fill-in-input');
      input.value = '';
      input.className = 'fill-in-input';
      input.disabled = false;
      input.focus();

      const hintText = document.getElementById('fill-in-hint-text');
      hintText.style.display = 'none';
      hintText.textContent = q.hint || '';
    }
  }

  // Odpověď pro Single Choice
  async function handleSingleChoiceAnswer(question, selectedIdx, selectedBtn) {
    const drill = state.currentDrill;
    drill.answered = true;

    const isCorrect = selectedIdx === question.correctIndex;
    drill.userAnswers[drill.currentIndex] = { isCorrect, selectedIdx, questionId: question.id };

    if (isCorrect) {
      drill.correctCount++;
      selectedBtn.classList.add('selected-correct');
      triggerHaptic('success');
      playSfx('correct');
    } else {
      drill.missedQuestions.push(question);
      selectedBtn.classList.add('selected-incorrect');
      triggerHaptic('error');
      playSfx('incorrect');

      // Označit správnou možnost zeleně
      const buttons = document.querySelectorAll('.option-btn');
      if (buttons[question.correctIndex]) {
        buttons[question.correctIndex].classList.add('selected-correct');
      }
    }

    renderQuestionStepper();

    // Ztlumit ostatní
    document.querySelectorAll('.option-btn').forEach((btn, idx) => {
      if (idx !== selectedIdx && idx !== question.correctIndex) {
        btn.classList.add('dimmed');
      }
    });

    // Záznam do IndexedDB
    await window.drillStorage.recordAnswer(question, isCorrect);
    const updatedState = await window.drillStorage.getQuestionState(question.id);
    state.userStates.set(question.id, updatedState);
    drill.answeredQuestionIds.add(question.id);

    // Zobrazit vysvětlení a perličku
    showExplanation(isCorrect ? 'Správně!' : 'Špatná odpověď', question.explanation, question.pearl, isCorrect, false, question);
  }

  // Odhalení kazuistiky
  function handleCaseReveal(question) {
    const drill = state.currentDrill;
    drill.answered = true;
    triggerHaptic('light');

    const solution = (question.vignette && question.vignette.solution) || question.explanation || '';
    const pearl = question.pearl || (question.vignette && question.vignette.keyTakeaway) || '';

    showExplanation('Klinické řešení & diagnóza', solution, pearl, true, true, question);
  }

  // Odeslání dopisovací otázky
  async function handleFillInSubmit() {
    const drill = state.currentDrill;
    if (drill.answered) return;

    const q = drill.questions[drill.currentIndex];
    const input = document.getElementById('fill-in-input');
    const userVal = input.value.trim();

    if (!userVal) {
      input.focus();
      return;
    }

    drill.answered = true;
    input.disabled = true;

    const accepted = q.acceptedAnswers || [];
    const isCorrect = isFuzzyMatch(userVal, accepted);
    drill.userAnswers[drill.currentIndex] = { isCorrect, userVal, questionId: q.id };

    if (isCorrect) {
      drill.correctCount++;
      input.classList.add('correct');
      triggerHaptic('success');
      playSfx('correct');
    } else {
      drill.missedQuestions.push(q);
      input.classList.add('incorrect');
      triggerHaptic('error');
      playSfx('incorrect');
    }

    renderQuestionStepper();

    // Uložit do IndexedDB
    await window.drillStorage.recordAnswer(q, isCorrect);
    const updatedState = await window.drillStorage.getQuestionState(q.id);
    state.userStates.set(q.id, updatedState);
    drill.answeredQuestionIds.add(q.id);

    const title = isCorrect ? 'Správně!' : `Nesprávně. Správný výraz: ${accepted[0] || '-'}`;
    showExplanation(title, q.explanation, q.pearl, isCorrect, false, q);
  }

  function showExplanation(title, content, pearl, isCorrect, isCaseStudy = false, question = null) {
    const card = document.getElementById('drill-explanation-card');
    const titleEl = document.getElementById('explanation-title');
    const contentEl = document.getElementById('explanation-content');
    const pearlBox = document.getElementById('pearl-box');
    const pearlText = document.getElementById('pearl-text');
    const nextBar = document.getElementById('drill-next-bar');
    const srsRating = document.getElementById('srs-rating-container');
    const sourceEl = document.getElementById('explanation-source');

    titleEl.className = `explanation-title ${isCorrect ? 'correct' : 'incorrect'}`;
    titleEl.textContent = title;
    contentEl.textContent = content || 'Správná volba dle lékařského postupu.';

    if (pearl && pearl.length > 5) {
      pearlBox.style.display = 'block';
      pearlText.textContent = pearl;
    } else {
      pearlBox.style.display = 'none';
    }

    if (sourceEl) {
      if (question && question.source && question.reviewedAt) {
        sourceEl.style.display = 'block';
        sourceEl.textContent = `Zdroj: ${question.source} • odborně revidováno: ${question.reviewedAt}`;
      } else {
        sourceEl.style.display = 'none';
        sourceEl.textContent = '';
      }
    }

    card.classList.add('active');

    if (isCaseStudy) {
      // Pro kazuistiky aktivovat sebehodnocení do SRS
      srsRating.classList.add('active');
      nextBar.style.display = 'none';
    } else {
      nextBar.style.display = 'flex';
      const nextBtn = document.getElementById('btn-next-question');
      if (nextBtn) {
        nextBtn.innerHTML = '<span>Další otázka →</span> <span class="kbd-hint" style="margin-left: 8px;">Space / Enter ↵</span>';
      }
    }
  }

  // Zpracování SRS hodnocení kazuistiky
  async function handleSrsRating(rating) {
    const drill = state.currentDrill;
    const q = drill.questions[drill.currentIndex];
    const updatedState = await window.drillStorage.recordCaseRating(q, rating);
    const isCorrect = rating !== 'bad';

    drill.userAnswers[drill.currentIndex] = { isCorrect, rating, questionId: q.id };

    if (isCorrect) {
      drill.correctCount++;
      playSfx('correct');
    } else {
      drill.missedQuestions.push(q);
      playSfx('incorrect');
    }

    renderQuestionStepper();
    state.userStates.set(q.id, updatedState);
    drill.answeredQuestionIds.add(q.id);

    triggerHaptic('light');

    // Posunout na další otázku
    goToNextQuestion();
  }

  function goToNextQuestion() {
    const drill = state.currentDrill;
    drill.currentIndex++;
    if (drill.currentIndex < drill.questions.length) {
      renderCurrentQuestion();
    } else {
      finishDrillSession();
    }
  }

  // Dokončení drill bloku
  async function finishDrillSession({ timeExpired = false } = {}) {
    const drill = state.currentDrill;
    if (drill.finished) return;
    drill.finished = true;
    if (drill.timerInterval) clearInterval(drill.timerInterval);

    const durationSec = Math.round((Date.now() - drill.startTime) / 1000);
    const total = drill.questions.length;
    const attempted = drill.answeredQuestionIds.size;
    const unanswered = Math.max(0, total - attempted);
    const correct = drill.correctCount;
    const scorePct = total > 0 ? Math.round((correct / total) * 100) : 0;
    const accuracyPct = attempted > 0 ? Math.round((correct / attempted) * 100) : 0;

    // Zapsat do historie
    await window.drillStorage.logSession({
      deckTitle: drill.deckTitle,
      totalAnswered: attempted,
      correctCount: correct,
      totalPresented: total,
      unansweredCount: unanswered,
      timedOut: timeExpired || drill.timeExpired,
      durationSeconds: durationSec
    });

    // Aktualizovat statistiky
    await refreshUserStatesAndStats();
    updateStatsDisplay();

    // Spustit oslavu konfetami a fanfáru při úspěchu >= 70 %
    if (scorePct >= 70) {
      fireConfetti();
      playSfx('complete');
    }

    // Příprava odznaku hodnocení
    let badgeClass = 'practice';
    let badgeText = '💪 Chce to ještě trénink';
    if (scorePct >= 90) {
      badgeClass = 'master';
      badgeText = '🏆 Mistrovské zvládnutí sylabu!';
    } else if (scorePct >= 70) {
      badgeClass = 'solid';
      badgeText = '🎯 Velmi solidní výsledek!';
    }

    // Příprava seznamu chyb
    const missedList = drill.missedQuestions || [];
    let mistakesHtml = '';
    if (missedList.length > 0) {
      const itemsHtml = missedList.slice(0, 8).map(mq => {
        const title = escapeHtml(mq.question || mq.title || 'Otázka');
        const expl = escapeHtml(mq.explanation || mq.hint || '');
        return `
          <div class="results-mistake-item">
            <strong>${escapeHtml(mq.subjectTitle || 'Předmět')} • ${escapeHtml(mq.topicTitle || '')}</strong>
            <div>${title}</div>
            ${expl ? `<div style="font-size: 0.76rem; color: var(--text-muted); margin-top: 4px;">💡 ${expl}</div>` : ''}
          </div>
        `;
      }).join('');

      mistakesHtml = `
        <div class="results-mistakes-box">
          <div class="results-mistakes-header">
            <span class="results-mistakes-title">🚨 Chyby k nápravě (${missedList.length})</span>
            <button class="btn-primary btn-redrill-mistakes" id="btn-redrill-mistakes-now" style="padding: 8px 14px; font-size: 0.82rem;">
              🔄 Procvičit tyto chyby
            </button>
          </div>
          <div class="results-mistake-list">
            ${itemsHtml}
          </div>
        </div>
      `;
    }

    // SVG obvod kruhu pro r=58: 2 * PI * 58 ≈ 364.4
    const circumference = 364.4;
    const strokeOffset = circumference - (circumference * scorePct) / 100;

    // Zobrazit moderní dialog se souhrnem
    const questionCard = document.getElementById('question-card');
    document.getElementById('drill-top-bar')?.style.setProperty('display', 'none');
    document.getElementById('drill-next-bar')?.style.setProperty('display', 'none');

    questionCard.innerHTML = `
      <div class="results-hero-container">
        <!-- Kruhový graf skóre -->
        <div class="results-ring-wrapper">
          <svg class="results-svg-ring" viewBox="0 0 140 140">
            <circle class="results-ring-bg" cx="70" cy="70" r="58"></circle>
            <circle class="results-ring-progress" id="results-ring-circle" cx="70" cy="70" r="58"
              stroke-dasharray="${circumference}"
              stroke-dashoffset="${circumference}"
              style="stroke: ${scorePct >= 85 ? 'var(--emerald)' : (scorePct >= 60 ? 'var(--cyan)' : 'var(--amber)')};"
            ></circle>
          </svg>
          <div class="results-ring-center">
            <div class="results-ring-score" id="results-animated-score">0%</div>
            <div class="results-ring-label">Úspěšnost</div>
          </div>
        </div>

        <div class="results-badge-pill ${badgeClass}">
          ${badgeText}
        </div>

        <h2 style="font-family: var(--font-heading); font-size: 1.4rem; margin-bottom: 4px; color: var(--text-white);">
          ${timeExpired || drill.timeExpired ? '⏱️ Čas vypršel!' : 'Drill dokončen!'}
        </h2>
        <p style="color: var(--text-secondary); font-size: 0.88rem; margin-bottom: 20px;">
          ${escapeHtml(drill.deckTitle)}
        </p>

        <!-- Statistická mřížka -->
        <div class="results-stats-grid">
          <div class="results-stat-card">
            <div class="results-stat-val" style="color: var(--emerald);">${correct} / ${total}</div>
            <div class="results-stat-label">Správně</div>
          </div>
          <div class="results-stat-card">
            <div class="results-stat-val" style="color: #fbbf24;">${Math.floor(durationSec / 60)}m ${durationSec % 60}s</div>
            <div class="results-stat-label">Čas</div>
          </div>
          <div class="results-stat-card">
            <div class="results-stat-val" style="color: var(--cyan);">${accuracyPct}%</div>
            <div class="results-stat-label">Z odpovědí</div>
          </div>
        </div>

        ${mistakesHtml}

        <div style="display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; width: 100%;">
          <button class="btn-primary" id="btn-finish-drill-home">
            <span>🏠 Zpět na balíčky</span>
          </button>
          <button class="btn-secondary" id="btn-finish-drill-restart">
            <span>🔄 Zopakovat celý drill</span>
          </button>
        </div>
      </div>
    `;

    // Animace naplnění kruhu a počítání procent
    setTimeout(() => {
      const circleEl = document.getElementById('results-ring-circle');
      if (circleEl) circleEl.style.strokeDashoffset = String(strokeOffset);

      const scoreEl = document.getElementById('results-animated-score');
      if (scoreEl) {
        let current = 0;
        const stepTime = Math.max(15, Math.floor(1000 / (scorePct || 1)));
        const timer = setInterval(() => {
          if (current >= scorePct) {
            scoreEl.textContent = `${scorePct}%`;
            clearInterval(timer);
          } else {
            current += 1;
            scoreEl.textContent = `${current}%`;
          }
        }, stepTime);
      }
    }, 50);

    // Event listenery pro akce na výsledkové obrazovce
    document.getElementById('btn-finish-drill-home')?.addEventListener('click', () => {
      document.getElementById('drill-top-bar')?.style.removeProperty('display');
      switchView('view-home');
      renderDecksCatalog();
    });

    document.getElementById('btn-finish-drill-restart')?.addEventListener('click', () => {
      document.getElementById('drill-top-bar')?.style.removeProperty('display');
      initDrillSession(drill.deckTitle, drill.questions, { durationSeconds: drill.durationSeconds });
    });

    document.getElementById('btn-redrill-mistakes-now')?.addEventListener('click', () => {
      document.getElementById('drill-top-bar')?.style.removeProperty('display');
      initDrillSession(`🚨 Náprava chyb (${missedList.length} otázek)`, missedList);
    });
  }

  // --- STATISTICKÝ DASHBOARD ---
  function updateStatsDisplay() {
    const stats = state.stats;

    // Header streak
    const streakEl = document.getElementById('streak-count');
    if (streakEl) streakEl.textContent = stats.streak;

    // Home view stats
    const masterEl = document.getElementById('stat-mastered');
    if (masterEl) masterEl.textContent = stats.masteredCount;

    const accEl = document.getElementById('stat-accuracy');
    if (accEl) accEl.textContent = `${stats.accuracy}%`;

    // Stats view
    const statsStreak = document.getElementById('stats-streak-val');
    if (statsStreak) statsStreak.textContent = stats.streak;

    const statsAcc = document.getElementById('stats-accuracy-val');
    if (statsAcc) statsAcc.textContent = stats.accuracy;

    const statsAns = document.getElementById('stats-total-answered');
    if (statsAns) statsAns.textContent = stats.totalAnswered;

    // Leitner krabičky
    const totalCards = (stats.masteredCount + stats.learningCount + stats.mistakesCount) || 1;
    document.getElementById('box-mastered-count')?.replaceChildren(`${stats.masteredCount} karet`);
    document.getElementById('box-mastered-bar')?.style.setProperty('width', `${(stats.masteredCount / totalCards) * 100}%`);

    document.getElementById('box-learning-count')?.replaceChildren(`${stats.learningCount} karet`);
    document.getElementById('box-learning-bar')?.style.setProperty('width', `${(stats.learningCount / totalCards) * 100}%`);

    document.getElementById('box-mistakes-count')?.replaceChildren(`${stats.mistakesCount} karet`);
    document.getElementById('box-mistakes-bar')?.style.setProperty('width', `${(stats.mistakesCount / totalCards) * 100}%`);
  }

  // --- EXPORT A IMPORT DAT ---
  async function exportUserData() {
    const states = await window.drillStorage.getAllQuestionStates();
    const history = await window.drillStorage.getHistory();
    const customDecks = await window.drillStorage.getCustomDecks();

    const backup = {
      version: '2026.1',
      exportedAt: new Date().toISOString(),
      userStates: states,
      history: history,
      customDecks: customDecks
    };

    const blob = new Blob([JSON.stringify(backup, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `meddrill-zaloha-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
    showToast('Záloha byla úspěšně stažena.', 'success');
  }

  async function importUserData(file) {
    if (!file) return;
    
    // Bezpečnostní limit na velikost souboru (max 5 MB)
    if (file.size > 5 * 1024 * 1024) {
      showToast('Soubor je příliš velký (limit 5 MB).', 'error');
      return;
    }

    try {
      const text = await file.text();
      const backup = JSON.parse(text);

      if (!backup || typeof backup !== 'object' || Array.isArray(backup)) {
        throw new Error('Neplatný formát zálohy');
      }

      const allowedTypes = ['single_choice', 'case_study', 'fill_in'];

      // 1. Validace a import stavů otázek
      if (Array.isArray(backup.userStates)) {
        const safeStates = backup.userStates.slice(0, 5000); // max 5000 záznamů
        for (const s of safeStates) {
          if (s && typeof s === 'object' && typeof s.questionId === 'string' && s.questionId.length <= 128) {
            const cleanState = {
              questionId: String(s.questionId),
              subjectId: typeof s.subjectId === 'string' ? String(s.subjectId).slice(0, 64) : 'unknown',
              box: typeof s.box === 'number' && s.box >= 1 && s.box <= 5 ? s.box : 1,
              intervalDays: typeof s.intervalDays === 'number' && s.intervalDays >= 0 ? s.intervalDays : 1,
              timesCorrect: typeof s.timesCorrect === 'number' && s.timesCorrect >= 0 ? s.timesCorrect : 0,
              timesIncorrect: typeof s.timesIncorrect === 'number' && s.timesIncorrect >= 0 ? s.timesIncorrect : 0,
              isStarred: Boolean(s.isStarred),
              lastReviewedDate: typeof s.lastReviewedDate === 'number' ? s.lastReviewedDate : Date.now(),
              nextReviewDate: typeof s.nextReviewDate === 'number' ? s.nextReviewDate : Date.now()
            };
            await window.drillStorage.saveQuestionState(cleanState);
          }
        }
      }

      // 2. Validace a import vlastních balíčků
      if (Array.isArray(backup.customDecks)) {
        const safeDecks = backup.customDecks.slice(0, 100); // max 100 balíčků
        for (const d of safeDecks) {
          if (d && typeof d === 'object') {
            const cleanId = typeof d.id === 'string' ? d.id.replace(/[^a-zA-Z0-9_-]/g, '').slice(0, 64) : 'deck-' + Date.now();
            const cleanTitle = typeof d.title === 'string' ? d.title.trim().slice(0, 80) : 'Importovaný balíček';
            const cleanSubjectIds = Array.isArray(d.subjectIds)
              ? d.subjectIds.filter(id => typeof id === 'string').map(id => id.slice(0, 64))
              : [];
            const cleanQuestionTypes = Array.isArray(d.questionTypes)
              ? d.questionTypes.filter(t => allowedTypes.includes(t))
              : allowedTypes;
            const cleanLimit = typeof d.limit === 'number' ? Math.max(0, Math.min(500, d.limit)) : 30;

            if (cleanSubjectIds.length > 0 && cleanQuestionTypes.length > 0) {
              await window.drillStorage.saveCustomDeck({
                id: cleanId,
                title: cleanTitle,
                subjectIds: cleanSubjectIds,
                questionTypes: cleanQuestionTypes,
                limit: cleanLimit,
                createdAt: typeof d.createdAt === 'number' ? d.createdAt : Date.now(),
                updatedAt: typeof d.updatedAt === 'number' ? d.updatedAt : Date.now()
              });
            }
          }
        }
      }

      // 3. Validace a import historie pro zachování statistik po přenosu zařízení.
      if (Array.isArray(backup.history)) {
        const safeHistory = backup.history.slice(0, 500);
        for (const item of safeHistory) {
          if (!item || typeof item !== 'object') continue;
          const totalAnswered = typeof item.totalAnswered === 'number'
            ? Math.max(0, Math.min(500, Math.floor(item.totalAnswered))) : 0;
          const correctCount = typeof item.correctCount === 'number'
            ? Math.max(0, Math.min(totalAnswered, Math.floor(item.correctCount))) : 0;
          await window.drillStorage.logSession({
            deckTitle: typeof item.deckTitle === 'string' ? item.deckTitle.slice(0, 100) : 'Importovaný drill',
            totalAnswered,
            correctCount,
            totalPresented: typeof item.totalPresented === 'number' ? Math.max(totalAnswered, Math.min(500, Math.floor(item.totalPresented))) : totalAnswered,
            unansweredCount: typeof item.unansweredCount === 'number' ? Math.max(0, Math.min(500, Math.floor(item.unansweredCount))) : 0,
            timedOut: Boolean(item.timedOut),
            durationSeconds: typeof item.durationSeconds === 'number' ? Math.max(0, Math.min(86400, Math.floor(item.durationSeconds))) : 0,
            date: typeof item.date === 'number' && item.date > 0 ? item.date : Date.now()
          });
        }
      }

      await refreshUserStatesAndStats();
      state.customDecks = await window.drillStorage.getCustomDecks();
      renderCustomDecks();
      updateStatsDisplay();

      showToast('Záloha byla úspěšně a bezpečně obnovena! 🎉', 'success');
    } catch (e) {
      console.error('Chyba při importu zálohy:', e);
      showToast('Neplatný nebo poškozený soubor se zálohou.', 'error');
    }
  }

  // --- ROUTING & NAVIGACE ---
  function switchView(viewId) {
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
    document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));

    const targetView = document.getElementById(viewId);
    if (targetView) targetView.classList.add('active');

    const targetNav = document.querySelector(`.nav-item[data-view="${viewId}"]`);
    if (targetNav) targetNav.classList.add('active');

    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.getElementById('main-content')?.focus({ preventScroll: true });
  }

  function handleUrlQueryParams() {
    const params = new URLSearchParams(window.location.search);
    const subjectParam = params.get('subject');
    const modeParam = params.get('mode');

    if (subjectParam) {
      if (state.downloadedSubjects.has(subjectParam)) {
        startSubjectDrill(subjectParam);
      } else {
        downloadSubject(subjectParam).then(ok => {
          if (ok) startSubjectDrill(subjectParam);
        });
      }
    } else if (modeParam) {
      startSmartDrill(modeParam);
    }
  }

  // --- MODÁLNÍ OKNA ---
  function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
      state.lastFocusedElement = document.activeElement;
      modal.classList.add('active');
      setTimeout(() => modal.querySelector('button, input, select, [tabindex]:not([tabindex="-1"])')?.focus(), 0);
    }
  }

  function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) modal.classList.remove('active');
    if (state.lastFocusedElement && typeof state.lastFocusedElement.focus === 'function') {
      state.lastFocusedElement.focus();
      state.lastFocusedElement = null;
    }
  }

  function bindQuestionControls() {
    const submitButton = document.getElementById('btn-submit-fill-in');
    if (submitButton) submitButton.onclick = handleFillInSubmit;

    const fillInput = document.getElementById('fill-in-input');
    if (fillInput) {
      fillInput.onkeydown = e => {
        if (e.key === 'Enter') handleFillInSubmit();
      };
    }

    const hintButton = document.getElementById('btn-fill-in-hint');
    if (hintButton) {
      hintButton.onclick = () => {
        const hintText = document.getElementById('fill-in-hint-text');
        if (hintText) hintText.style.display = 'block';
      };
    }

    document.querySelectorAll('.srs-rate-btn').forEach(btn => {
      btn.onclick = () => handleSrsRating(btn.dataset.rating);
    });
  }

  function updateSoundButton() {
    const btn = document.getElementById('btn-toggle-sound');
    const iconOn = document.getElementById('sound-icon-on');
    const iconOff = document.getElementById('sound-icon-off');
    if (!btn) return;
    if (state.soundEnabled) {
      btn.classList.remove('sound-muted');
      btn.title = 'Zvukové efekty (Zapnuto - klikněte pro ztlumení)';
      if (iconOn) iconOn.style.display = 'block';
      if (iconOff) iconOff.style.display = 'none';
    } else {
      btn.classList.add('sound-muted');
      btn.title = 'Zvukové efekty (Ztlumeno - klikněte pro zapnutí)';
      if (iconOn) iconOn.style.display = 'none';
      if (iconOff) iconOff.style.display = 'block';
    }
  }

  // --- LISTENERY A OVLÁDACÍ PRVKY ---
  function setupEventListeners() {
    bindQuestionControls();

    // Přepínač zvuku
    document.getElementById('btn-toggle-sound')?.addEventListener('click', async () => {
      state.soundEnabled = !state.soundEnabled;
      await window.drillStorage.setSetting('soundEnabled', state.soundEnabled);
      updateSoundButton();
      if (state.soundEnabled) playSfx('star');
      showToast(state.soundEnabled ? 'Zvukové efekty zapnuty 🔊' : 'Zvukové efekty ztlumeny 🔇', 'info');
    });

    // Klávesové zkratky pro bleskový drill
    document.addEventListener('keydown', event => {
      // Ignorovat, pokud je otevřený modální dialog nebo uživatel píše do textového pole
      if (document.querySelector('.modal-backdrop.active')) return;
      if (event.target.tagName === 'INPUT' || event.target.tagName === 'TEXTAREA' || event.target.isContentEditable) {
        return;
      }

      const drillView = document.getElementById('view-drill');
      if (!drillView || !drillView.classList.contains('active')) return;

      const drill = state.currentDrill;
      if (!drill || drill.finished || !drill.questions || drill.questions.length === 0) return;

      const key = event.key.toLowerCase();

      // Hvězdička (S)
      if (key === 's') {
        event.preventDefault();
        document.getElementById('btn-star-active-question')?.click();
        return;
      }

      // 1. Před zodpovězením
      if (!drill.answered) {
        const q = drill.questions[drill.currentIndex];
        if (!q) return;

        if (q.type === 'single_choice') {
          const keyMap = { '1': 0, '2': 1, '3': 2, '4': 3, '5': 4, 'a': 0, 'b': 1, 'c': 2, 'd': 3, 'e': 4 };
          if (key in keyMap) {
            event.preventDefault();
            const buttons = document.querySelectorAll('.option-btn');
            const idx = keyMap[key];
            if (buttons[idx]) buttons[idx].click();
          }
        } else if (q.type === 'case_study') {
          if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            document.getElementById('btn-reveal-case')?.click();
          }
        }
      // 2. Po zodpovězení
      } else {
        const q = drill.questions[drill.currentIndex];
        if (q && q.type === 'case_study') {
          const srsRating = document.getElementById('srs-rating-container');
          if (srsRating && srsRating.classList.contains('active')) {
            if (key === '1') {
              event.preventDefault();
              document.querySelector('.srs-rate-btn.rate-bad')?.click();
            } else if (key === '2') {
              event.preventDefault();
              document.querySelector('.srs-rate-btn.rate-medium')?.click();
            } else if (key === '3') {
              event.preventDefault();
              document.querySelector('.srs-rate-btn.rate-good')?.click();
            }
          }
        } else {
          // Přechod na další otázku
          if (event.key === 'Enter' || event.key === ' ' || event.key === 'ArrowRight') {
            event.preventDefault();
            goToNextQuestion();
          }
        }
      }
    });

    document.querySelectorAll('.deck-card[id^="card-"]').forEach(card => {
      card.tabIndex = 0;
      card.setAttribute('role', 'button');
      card.addEventListener('keydown', event => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          card.click();
        }
      });
    });
    // Navigace ve spodní liště
    document.querySelectorAll('.bottom-nav .nav-item[data-view]').forEach(btn => {
      btn.addEventListener('click', () => {
        switchView(btn.dataset.view);
      });
    });

    // Tlačítko rychlého denního SRS
    document.getElementById('nav-item-daily-srs')?.addEventListener('click', () => {
      startSmartDrill('srs');
    });

    document.getElementById('btn-start-daily-srs')?.addEventListener('click', () => {
      startSmartDrill('srs');
    });

    // Tlačítko Offline dat v navigaci i v hlavičce
    document.getElementById('nav-item-storage')?.addEventListener('click', () => {
      renderStorageManager();
      openModal('modal-storage');
    });

    document.getElementById('btn-open-storage')?.addEventListener('click', () => {
      renderStorageManager();
      openModal('modal-storage');
    });

    // PWA instalace tlačítko
    document.getElementById('btn-install-pwa')?.addEventListener('click', () => {
      openModal('modal-install-guide');
    });

    document.getElementById('btn-trigger-native-install')?.addEventListener('click', async () => {
      if (state.deferredInstallPrompt) {
        state.deferredInstallPrompt.prompt();
        const choice = await state.deferredInstallPrompt.userChoice;
        if (choice.outcome === 'accepted') {
          showToast('Děkujeme za instalaci MedDrillu!', 'success');
        }
        state.deferredInstallPrompt = null;
        closeModal('modal-install-guide');
      }
    });

    // Filtry ročníků na domovské stránce
    document.querySelectorAll('.filter-pill').forEach(pill => {
      pill.addEventListener('click', () => {
        document.querySelectorAll('.filter-pill').forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        state.currentFilter = pill.dataset.filter;

        // Skrýt/zobrazit sekce
        const smartSec = document.getElementById('smart-decks-grid');
        const subjSec = document.getElementById('subject-decks-grid');
        const customSec = document.getElementById('custom-decks-grid');

        if (state.currentFilter === 'smart') {
          smartSec.style.display = 'grid';
          subjSec.style.display = 'none';
          customSec.style.display = 'none';
        } else if (state.currentFilter === 'custom') {
          smartSec.style.display = 'none';
          subjSec.style.display = 'none';
          customSec.style.display = 'grid';
          renderCustomDecks();
        } else {
          smartSec.style.display = 'grid';
          subjSec.style.display = 'grid';
          customSec.style.display = 'grid';
          renderDecksCatalog();
        }
      });
    });

    // Smart sady kliky
    document.getElementById('card-mistakes-deck')?.addEventListener('click', () => startSmartDrill('mistakes'));
    document.getElementById('card-cases-deck')?.addEventListener('click', () => startSmartDrill('cases'));
    document.getElementById('card-timed-exam')?.addEventListener('click', () => startSmartDrill('timed'));
    document.getElementById('card-starred-deck')?.addEventListener('click', () => startSmartDrill('starred'));

    // Tlačítko ukončení testu
    document.getElementById('btn-exit-drill')?.addEventListener('click', () => {
      if (confirm('Chcete probíhající drill ukončit a vrátit se na výběr sad?')) {
        if (state.currentDrill.timerInterval) clearInterval(state.currentDrill.timerInterval);
        switchView('view-home');
        renderDecksCatalog();
      }
    });

    // Hvězdička v testu
    document.getElementById('btn-star-active-question')?.addEventListener('click', async () => {
      const q = state.currentDrill.questions[state.currentDrill.currentIndex];
      if (!q) return;

      const isStarred = await window.drillStorage.toggleStar(q.id, q.subjectId);
      const starBtn = document.getElementById('btn-star-active-question');
      starBtn.className = `btn-star-question ${isStarred ? 'starred' : ''}`;
      if (isStarred) {
        starBtn.classList.add('just-starred');
        playSfx('star');
        setTimeout(() => starBtn.classList.remove('just-starred'), 450);
      }
      triggerHaptic('light');

      showToast(isStarred ? 'Přidáno do hvězdičkovaných ★' : 'Odebráno z hvězdičkovaných', 'info');
    });

    // Tlačítko Další otázka
    document.getElementById('btn-next-question')?.addEventListener('click', goToNextQuestion);

    // Odeslání dopisovací otázky
    // Zavírání modálů křížkem nebo tlačítkem Zavřít
    document.querySelectorAll('.modal-close-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const modal = btn.closest('.modal-backdrop');
        if (modal) closeModal(modal.id);
      });
    });

    // Zavření klikem mimo obsah
    document.querySelectorAll('.modal-backdrop').forEach(backdrop => {
      backdrop.addEventListener('click', e => {
        if (e.target === backdrop && backdrop.id !== 'modal-onboarding') {
          closeModal(backdrop.id);
        }
      });
    });

    document.addEventListener('keydown', event => {
      const activeModal = document.querySelector('.modal-backdrop.active');
      if (!activeModal) return;
      if (event.key === 'Escape' && activeModal.id !== 'modal-onboarding') {
        closeModal(activeModal.id);
        return;
      }
      if (event.key !== 'Tab') return;
      const focusable = [...activeModal.querySelectorAll('button:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])')];
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    });

    // Onboarding volba ročníku
    document.querySelectorAll('[data-onboard-grade]').forEach(btn => {
      btn.addEventListener('click', async () => {
        const gradeChoice = btn.dataset.onboardGrade;
        closeModal('modal-onboarding');
        await window.drillStorage.setSetting('onboarded', true);

        if (gradeChoice === 'all') {
          await downloadAllSubjects();
        } else {
          const gradeNum = parseInt(gradeChoice, 10);
          const relevant = state.manifest.subjects.filter(s => s.grade === gradeNum);
          showToast(`Stahuji předměty pro ${gradeNum}. ročník...`, 'info');
          for (const sub of relevant) {
            await downloadSubject(sub.id);
          }
        }
      });
    });

    // Tlačítko Stáhnout vše v modálu úložiště
    document.getElementById('btn-download-all-offline')?.addEventListener('click', downloadAllSubjects);

    // Tvorba vlastního balíčku
    const openDeckCreator = () => {
      const chkContainer = document.getElementById('custom-deck-subjects-checkboxes');
      chkContainer.innerHTML = '';
      state.manifest?.subjects.forEach(sub => {
        const isDown = state.downloadedSubjects.has(sub.id);
        chkContainer.innerHTML += `
          <label style="display: flex; align-items: center; gap: 6px; font-size: 0.82rem; cursor: pointer;">
            <input type="checkbox" name="custom-sub" value="${sub.id}" ${isDown ? 'checked' : ''}>
            <span>${sub.icon} ${sub.title}</span>
          </label>
        `;
      });
      openModal('modal-create-deck');
    };

    document.getElementById('btn-create-custom-deck')?.addEventListener('click', openDeckCreator);
    document.getElementById('btn-create-custom-deck-inline')?.addEventListener('click', openDeckCreator);

    document.getElementById('btn-save-custom-deck')?.addEventListener('click', async () => {
      const nameInput = document.getElementById('custom-deck-name');
      const name = (nameInput.value.trim() || 'Můj vlastní balíček').slice(0, 80);

      const selectedSubs = Array.from(document.querySelectorAll('input[name="custom-sub"]:checked')).map(i => i.value);
      if (selectedSubs.length === 0) {
        showToast('Vyberte alespoň jeden předmět!', 'warning');
        return;
      }

      const types = [];
      if (document.getElementById('check-type-sc').checked) types.push('single_choice');
      if (document.getElementById('check-type-case').checked) types.push('case_study');
      if (document.getElementById('check-type-fill').checked) types.push('fill_in');

      if (types.length === 0) {
        showToast('Zvolte alespoň jeden typ otázek!', 'warning');
        return;
      }

      const limit = parseInt(document.getElementById('custom-deck-limit').value, 10);

      const deck = {
        id: 'deck-' + Date.now(),
        title: name,
        subjectIds: selectedSubs,
        questionTypes: types,
        limit: limit
      };

      await window.drillStorage.saveCustomDeck(deck);
      state.customDecks = await window.drillStorage.getCustomDecks();
      closeModal('modal-create-deck');
      renderCustomDecks();
      showToast('Vlastní balíček byl vytvořen!', 'success');

      startCustomDeckDrill(deck);
    });

    // Export a Import
    document.getElementById('btn-export-data')?.addEventListener('click', exportUserData);
    document.getElementById('input-import-data')?.addEventListener('change', e => {
      if (e.target.files && e.target.files[0]) {
        importUserData(e.target.files[0]);
      }
    });
  }

  // Spuštění při načtení DOMu
  document.addEventListener('DOMContentLoaded', initApp);
})();
