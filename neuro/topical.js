// topical.js - Aplikační logika pro Topický diagnostický trenažér ("Kde je léze? → Co je léze?")
// Subportál Neurologie LF OU

(function () {
  let selectedSymptoms = new Set();
  let currentSubTab = "locator"; // 'locator' | 'cases' | 'matrix' | 'diagram'
  let currentCaseIndex = 0;
  let caseScores = {}; // caseId -> { selectedOptId, isCorrect }

  // Presets pro rychlou demonstraci syndromů
  const PRESETS = [
    {
      name: "Wallenbergův syndrom (Oblongata)",
      symptoms: ["crossed_sensory_deficit", "horner_syndrome", "dysphagia_dysphonia", "cerebellar_hemiataxia", "cerebellar_nystagmus"]
    },
    {
      name: "Brown-Séquardův syndrom (Mícha)",
      symptoms: ["hemiparesis_spastic", "sensory_dissociation_syringo", "pyramidal_signs_pos"]
    },
    {
      name: "Weberův syndrom (Mezencefalon)",
      symptoms: ["cn3_palsy", "hemiparesis_spastic", "facial_central", "pyramidal_signs_pos"]
    },
    {
      name: "Syringomyelie (Krční mícha)",
      symptoms: ["cape_like_sensory", "sensory_dissociation_syringo", "flaccid_monoparesis_hk", "fasciculations_atrophy"]
    },
    {
      name: "Radikulopatie L5",
      symptoms: ["foot_drop", "foot_inversion_weakness", "radicular_pain_l5_s1"]
    },
    {
      name: "Obrna n. peroneus communis",
      symptoms: ["foot_drop", "foot_eversion_weakness"]
    },
    {
      name: "Myasthenia gravis (Ploténka)",
      symptoms: ["fluctuating_fatigue", "dysphagia_dysphonia"]
    },
    {
      name: "Kortikální iktus ACM (Kůra)",
      symptoms: ["hemiparesis_brachiocranial", "broca_aphasia", "facial_central", "pyramidal_signs_pos"]
    }
  ];

  // Inicializace po načtení DOM
  document.addEventListener("DOMContentLoaded", () => {
    initTopicalModule();
  });

  function initTopicalModule() {
    const container = document.getElementById("view-topical");
    if (!container) return;

    if (typeof TOPICAL_DATA === "undefined") {
      container.innerHTML = `<div class="alert-box error">Chyba: Data pro topickou diagnostiku se nepodařilo načíst.</div>`;
      return;
    }

    renderTopicalLayout(container);
    setupEventListeners();
  }

  // Vykreslení hlavní kostry modulu
  function renderTopicalLayout(container) {
    container.innerHTML = `
      <div class="topical-wrapper">
        
        <!-- Hlavička modulu -->
        <div class="topical-header">
          <div class="topical-header-info">
            <span class="topical-badge">🧭 Interaktivní neuro-trenažér</span>
            <h2>Topická diagnostika: „Kde je léze? → Co je léze?“</h2>
            <p>
              Základní pilíř klinické neurologie. Vyberte soubor neurologických příznaků z anamnézy a objektivního vyšetření. 
              Diagnostický engine provede kalkulaci anatomické úrovně v neuraxis (od kůry po sval) a určí syndrom, vaskulární teritorium a etiologii.
            </p>
          </div>
          
          <!-- Pod-navigace (Sub-tabs) -->
          <div class="topical-subtabs" role="tablist">
            <button class="topical-subtab-btn active" data-subtab="locator">
              <span>🔍</span>
              <span>Lokalizátor léze</span>
            </button>
            <button class="topical-subtab-btn" data-subtab="cases">
              <span>🎯</span>
              <span>Klinický drill (Kazuistiky)</span>
            </button>
            <button class="topical-subtab-btn" data-subtab="matrix">
              <span>⚖️</span>
              <span>Kořen vs. Nerv</span>
            </button>
            <button class="topical-subtab-btn" data-subtab="diagram">
              <span>🗺️</span>
              <span>Atlas řezů (Mícha & Kmen)</span>
            </button>
          </div>
        </div>

        <!-- Obsah sub-tabů -->
        <div class="topical-content">
          <!-- 1. LOKALIZÁTOR LÉZE -->
          <div id="topical-tab-locator" class="topical-tab-view active">
            ${renderLocatorView()}
          </div>

          <!-- 2. KAZUISTIKY -->
          <div id="topical-tab-cases" class="topical-tab-view" style="display: none;">
            ${renderCasesView()}
          </div>

          <!-- 3. SROVNÁVAČ KOŘEN VS NERV -->
          <div id="topical-tab-matrix" class="topical-tab-view" style="display: none;">
            ${renderMatrixView()}
          </div>

          <!-- 4. ATLAS ŘEZŮ -->
          <div id="topical-tab-diagram" class="topical-tab-view" style="display: none;">
            ${renderDiagramView()}
          </div>
        </div>

      </div>
    `;

    // Propojení klikání na presety a symptomy
    bindLocatorInteractions();
    bindCasesInteractions();
  }

  // --- 1. LOKALIZÁTOR LÉZE (RENDER & LOGIKA) ---
  function renderLocatorView() {
    return `
      <!-- Presety -->
      <div class="topical-presets-bar">
        <span class="presets-label">⚡ Rychlé klinické scénáře:</span>
        <div class="presets-pills">
          ${PRESETS.map((p, idx) => `
            <button class="preset-pill" data-preset-idx="${idx}">${p.name}</button>
          `).join("")}
        </div>
      </div>

      <div class="locator-grid">
        
        <!-- Levý sloupec: Výběr příznaků -->
        <div class="symptom-picker-panel">
          <div class="panel-header-row">
            <h3>1. Klinické příznaky pacienta</h3>
            <button id="clear-symptoms-btn" class="btn-text-sm" title="Vymazat všechny vybrané příznaky">✕ Resetovat výběr</button>
          </div>

          <!-- Vybrané příznaky chips -->
          <div class="selected-chips-bar" id="selected-chips-bar">
            <span class="empty-chips-msg">Kliknutím níže vyberte přítomné neurologické příznaky...</span>
          </div>

          <!-- Kategorie příznaků -->
          <div class="symptom-categories-accordion">
            ${TOPICAL_DATA.symptomCategories.map(cat => `
              <div class="symptom-cat-group">
                <div class="symptom-cat-title">
                  <span class="cat-icon">${cat.icon}</span>
                  <span class="cat-name">${cat.name}</span>
                </div>
                <div class="symptom-chips-wrap">
                  ${cat.symptoms.map(s => `
                    <button class="symptom-chip" data-symptom-id="${s.id}" title="${s.name}">
                      <span class="chip-icon">${s.icon}</span>
                      <span class="chip-text">${s.name}</span>
                    </button>
                  `).join("")}
                </div>
              </div>
            `).join("")}
          </div>
        </div>

        <!-- Pravý sloupec: Výsledky lokalizace a anatomická úroveň -->
        <div class="locator-results-panel">
          <div class="panel-header-row">
            <h3>2. Topická lokalizace & Syndromologie</h3>
            <span class="match-count-badge" id="match-count-badge">0 nálezů</span>
          </div>

          <!-- Neuraxis Bar Indicator -->
          <div class="neuraxis-tracker" id="neuraxis-tracker">
            <div class="axis-step" data-level="cortex">Kůra</div>
            <div class="axis-step" data-level="capsula">Kapsula</div>
            <div class="axis-step" data-level="brainstem">Kmen</div>
            <div class="axis-step" data-level="cerebellum">Mozeček</div>
            <div class="axis-step" data-level="spinal">Mícha</div>
            <div class="axis-step" data-level="root">Kořen</div>
            <div class="axis-step" data-level="nerve">Nerv</div>
            <div class="axis-step" data-level="muscle">Ploténka / Sval</div>
          </div>

          <!-- Karty odpovídajících syndromů -->
          <div class="syndromes-results-list" id="syndromes-results-list">
            <div class="empty-results-box">
              <div class="empty-icon">🧠</div>
              <h4>Zatím nebyly vybrány žádné příznaky</h4>
              <p>Vyberte příznaky z levého panelu nebo zvolte rychlý scénář výše pro spuštění diagnostického algoritmu.</p>
            </div>
          </div>
        </div>

      </div>
    `;
  }

  // Vazby pro lokalizátor
  function bindLocatorInteractions() {
    // Presety
    const presetBtns = document.querySelectorAll(".preset-pill");
    presetBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        const idx = parseInt(btn.getAttribute("data-preset-idx"), 10);
        const preset = PRESETS[idx];
        if (preset) {
          selectedSymptoms = new Set(preset.symptoms);
          updateSymptomChipsUI();
          runDiagnosticEngine();
        }
      });
    });

    // Výběr příznaků
    const symptomBtns = document.querySelectorAll(".symptom-chip");
    symptomBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        const sId = btn.getAttribute("data-symptom-id");
        if (selectedSymptoms.has(sId)) {
          selectedSymptoms.delete(sId);
        } else {
          selectedSymptoms.add(sId);
        }
        updateSymptomChipsUI();
        runDiagnosticEngine();
      });
    });

    // Tlačítko reset
    const clearBtn = document.getElementById("clear-symptoms-btn");
    if (clearBtn) {
      clearBtn.addEventListener("click", () => {
        selectedSymptoms.clear();
        updateSymptomChipsUI();
        runDiagnosticEngine();
      });
    }
  }

  // Aktualizace vybraných chipů
  function updateSymptomChipsUI() {
    // Označení tlačítek v kategoriích
    const symptomBtns = document.querySelectorAll(".symptom-chip");
    symptomBtns.forEach(btn => {
      const sId = btn.getAttribute("data-symptom-id");
      btn.classList.toggle("active", selectedSymptoms.has(sId));
    });

    // Aktualizace horní lišty aktivních chipů
    const chipsBar = document.getElementById("selected-chips-bar");
    if (!chipsBar) return;

    if (selectedSymptoms.size === 0) {
      chipsBar.innerHTML = `<span class="empty-chips-msg">Kliknutím níže vyberte přítomné neurologické příznaky...</span>`;
      return;
    }

    let chipsHtml = "";
    // Najdeme data pro každý vybraný symptom
    selectedSymptoms.forEach(sId => {
      let symptomData = null;
      for (const cat of TOPICAL_DATA.symptomCategories) {
        const found = cat.symptoms.find(s => s.id === sId);
        if (found) {
          symptomData = found;
          break;
        }
      }
      if (symptomData) {
        chipsHtml += `
          <span class="active-badge-chip">
            <span>${symptomData.icon}</span>
            <span>${symptomData.name}</span>
            <button class="remove-chip-btn" data-remove-id="${sId}" title="Odebrat">✕</button>
          </span>
        `;
      }
    });

    chipsBar.innerHTML = chipsHtml;

    // Odstranění jednotlivého chipu
    chipsBar.querySelectorAll(".remove-chip-btn").forEach(rBtn => {
      rBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        const rId = rBtn.getAttribute("data-remove-id");
        selectedSymptoms.delete(rId);
        updateSymptomChipsUI();
        runDiagnosticEngine();
      });
    });
  }

  // DIAGNOSTICKÝ ENGINE: VÝPOČET SHODY A LOKALIZACE
  function runDiagnosticEngine() {
    const resultsContainer = document.getElementById("syndromes-results-list");
    const countBadge = document.getElementById("match-count-badge");
    const axisTracker = document.getElementById("neuraxis-tracker");

    if (!resultsContainer) return;

    // Reset trackeru
    if (axisTracker) {
      axisTracker.querySelectorAll(".axis-step").forEach(step => step.classList.remove("active-level"));
    }

    if (selectedSymptoms.size === 0) {
      resultsContainer.innerHTML = `
        <div class="empty-results-box">
          <div class="empty-icon">🧠</div>
          <h4>Zatím nebyly vybrány žádné příznaky</h4>
          <p>Vyberte příznaky z levého panelu nebo zvolte rychlý scénář výše pro spuštění diagnostického algoritmu.</p>
        </div>
      `;
      if (countBadge) countBadge.textContent = "0 nálezů";
      return;
    }

    // Výpočet skóre pro každý syndrom
    const scoredSyndromes = [];

    TOPICAL_DATA.syndromes.forEach(syn => {
      let matchedCount = 0;
      let totalTypical = syn.typicalSymptoms.length;
      let requiredFulfilled = true;

      // Kontrola povinných / klíčových příznaků (pokud jsou definovány)
      if (syn.requiredAny && syn.requiredAny.length > 0) {
        const hasAnyReq = syn.requiredAny.some(r => selectedSymptoms.has(r));
        if (!hasAnyReq) {
          requiredFulfilled = false;
        }
      }

      // Počet shod
      syn.typicalSymptoms.forEach(ts => {
        if (selectedSymptoms.has(ts)) {
          matchedCount++;
        }
      });

      if (matchedCount > 0 && requiredFulfilled) {
        // Výpočet váženého skóre
        const matchRatio = matchedCount / Math.max(selectedSymptoms.size, 1);
        const sensitivityRatio = matchedCount / totalTypical;
        const confidencePct = Math.min(Math.round(((matchRatio * 0.5) + (sensitivityRatio * 0.5)) * 100) + 15, 99);

        scoredSyndromes.push({
          ...syn,
          matchedCount,
          confidencePct
        });
      }
    });

    // Seřazení podle shody sestupně
    scoredSyndromes.sort((a, b) => b.confidencePct - a.confidencePct || b.matchedCount - a.matchedCount);

    if (countBadge) {
      countBadge.textContent = `${scoredSyndromes.length} odpovídajících syndromů`;
    }

    if (scoredSyndromes.length === 0) {
      resultsContainer.innerHTML = `
        <div class="empty-results-box no-match">
          <div class="empty-icon">⚠️</div>
          <h4>Nenalezena přesná syndromologická shoda</h4>
          <p>Zadaná kombinace příznaků neodpovídá typickému izolovanému syndromu. Může jít o multifokální proces (např. roztroušená skleróza, mnohočetné metastázy) nebo kombinaci více lézí.</p>
        </div>
      `;
      return;
    }

    // Zvýraznění aktivních úrovní v trackeru
    if (axisTracker && scoredSyndromes.length > 0) {
      const topSyn = scoredSyndromes[0];
      const levelEl = axisTracker.querySelector(`[data-level="${topSyn.levelCategory}"]`);
      if (levelEl) {
        levelEl.classList.add("active-level");
      }
    }

    // Vykreslení výsledkových karet
    let cardsHtml = "";
    scoredSyndromes.slice(0, 5).forEach((syn, index) => {
      const isTop = index === 0;
      cardsHtml += `
        <div class="syndrome-match-card ${isTop ? 'top-match' : ''}">
          
          <div class="match-card-header">
            <div class="match-title-wrap">
              <span class="level-pill ${syn.levelCategory}">${syn.axisLevel}</span>
              <h4>${syn.name}</h4>
            </div>
            <div class="confidence-badge ${syn.confidencePct >= 70 ? 'high' : 'medium'}">
              <span>${syn.confidencePct}% shoda</span>
            </div>
          </div>

          <p class="syndrome-desc">${syn.description}</p>

          <div class="syndrome-details-grid">
            <div class="detail-box vascular">
              <span class="detail-label">🩸 Vaskulární teritorium / Anatomie:</span>
              <span class="detail-val">${syn.vascularTerritory}</span>
            </div>
            <div class="detail-box pearl">
              <span class="detail-label">💎 Klíčový rozlišovací znak (Pearl):</span>
              <span class="detail-val">${syn.differentiatingPearls}</span>
            </div>
          </div>

          <!-- Etiologie & Diagnostika accordion -->
          <div class="syndrome-accordion-section">
            <div class="detail-box etiology">
              <span class="detail-label">🔬 Co je léze? (Časté etiologie):</span>
              <ul class="etiology-list">
                ${syn.etiology.map(e => `<li>${e}</li>`).join("")}
              </ul>
            </div>

            <div class="detail-box investigation">
              <span class="detail-label">🏥 Vyšetření 1. volby:</span>
              <p class="investigation-text">${syn.investigationOfChoice}</p>
            </div>
          </div>

        </div>
      `;
    });

    resultsContainer.innerHTML = cardsHtml;
  }

  // --- 2. KAZUISTICKÝ DRILL (RENDER & LOGIKA) ---
  function renderCasesView() {
    const c = TOPICAL_DATA.drillCases[currentCaseIndex];
    if (!c) return "";

    const userState = caseScores[c.id];

    return `
      <div class="drill-case-container">
        
        <!-- Horní lišta kazuistik -->
        <div class="drill-case-nav">
          <div class="drill-case-title-row">
            <span class="drill-badge">Případ ${currentCaseIndex + 1} z ${TOPICAL_DATA.drillCases.length}</span>
            <h3>${c.title}</h3>
          </div>
          <div class="drill-nav-btns">
            <button id="prev-case-btn" class="btn btn-secondary btn-sm" ${currentCaseIndex === 0 ? 'disabled' : ''}>← Předchozí</button>
            <button id="next-case-btn" class="btn btn-secondary btn-sm" ${currentCaseIndex === TOPICAL_DATA.drillCases.length - 1 ? 'disabled' : ''}>Další →</button>
          </div>
        </div>

        <!-- Anamnéza a Status -->
        <div class="case-brief-grid">
          <div class="case-card-box anamnesis">
            <div class="box-tag">📋 Anamnéza & Nástup obtíží</div>
            <p>${c.anamnesis}</p>
          </div>
          <div class="case-card-box status">
            <div class="box-tag">🔍 Objektivní neurologický nález</div>
            <p>${c.status}</p>
          </div>
        </div>

        <!-- Otázka & Možnosti -->
        <div class="case-question-box">
          <h4>❓ ${c.question}</h4>
          
          <div class="case-options-list" id="case-options-list">
            ${c.options.map(opt => {
              let optClass = "";
              let icon = "⚪";
              if (userState) {
                if (opt.id === userState.selectedOptId) {
                  optClass = opt.correct ? "selected-correct" : "selected-wrong";
                  icon = opt.correct ? "✅" : "❌";
                } else if (opt.correct && !userState.isCorrect) {
                  optClass = "show-correct";
                  icon = "✅";
                }
              }

              return `
                <button class="case-option-btn ${optClass}" data-opt-id="${opt.id}" ${userState ? 'disabled' : ''}>
                  <span class="opt-icon">${icon}</span>
                  <span class="opt-text">${opt.text}</span>
                </button>
              `;
            }).join("")}
          </div>

          <!-- Zpětná vazba po zodpovězení -->
          <div class="case-feedback-panel" id="case-feedback-panel" style="${userState ? 'display: block;' : 'display: none;'}">
            ${userState ? renderCaseFeedbackHtml(c, userState) : ''}
          </div>

        </div>

      </div>
    `;
  }

  function renderCaseFeedbackHtml(caseItem, userState) {
    const selectedOpt = caseItem.options.find(o => o.id === userState.selectedOptId);
    return `
      <div class="feedback-alert ${userState.isCorrect ? 'correct' : 'wrong'}">
        <div class="feedback-header">
          <span class="feedback-icon">${userState.isCorrect ? '🎉 Správně!' : '❌ Nesprávná odpověď'}</span>
        </div>
        <p class="feedback-explanation">${selectedOpt ? selectedOpt.feedback : ''}</p>
        <div class="feedback-pearl">
          <strong>💡 Klinická perla (Topical Pearl):</strong> ${caseItem.pearl}
        </div>
      </div>
    `;
  }

  function bindCasesInteractions() {
    const prevBtn = document.getElementById("prev-case-btn");
    const nextBtn = document.getElementById("next-case-btn");
    const optionBtns = document.querySelectorAll(".case-option-btn");

    if (prevBtn) {
      prevBtn.addEventListener("click", () => {
        if (currentCaseIndex > 0) {
          currentCaseIndex--;
          const container = document.getElementById("topical-tab-cases");
          if (container) {
            container.innerHTML = renderCasesView();
            bindCasesInteractions();
          }
        }
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener("click", () => {
        if (currentCaseIndex < TOPICAL_DATA.drillCases.length - 1) {
          currentCaseIndex++;
          const container = document.getElementById("topical-tab-cases");
          if (container) {
            container.innerHTML = renderCasesView();
            bindCasesInteractions();
          }
        }
      });
    }

    optionBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        const optId = btn.getAttribute("data-opt-id");
        const c = TOPICAL_DATA.drillCases[currentCaseIndex];
        const selectedOpt = c.options.find(o => o.id === optId);
        if (!selectedOpt) return;

        caseScores[c.id] = {
          selectedOptId: optId,
          isCorrect: selectedOpt.correct
        };

        const container = document.getElementById("topical-tab-cases");
        if (container) {
          container.innerHTML = renderCasesView();
          bindCasesInteractions();
        }
      });
    });
  }

  // --- 3. SROVNÁVAČ KOŘEN VS NERV (RENDER) ---
  function renderMatrixView() {
    return `
      <div class="matrix-container">
        <div class="matrix-intro">
          <h3>Srovnávací diferenciální diagnostika: Radikulopatie vs. Periferní neuropatie</h3>
          <p>Jak u lůžka pacienta během 30 sekund spolehlivě odlišit postižení spinálního kořene od periferního nervu.</p>
        </div>

        <div class="matrix-cards-grid">
          ${TOPICAL_DATA.rootVsNerveMatrix.map(m => `
            <div class="matrix-card">
              
              <div class="matrix-card-header">
                <span class="domain-tag">${m.domain}</span>
                <h4>${m.pairName}</h4>
              </div>

              <div class="matrix-shared-box">
                <span class="shared-label">🤝 Společné příznaky (Co může zmást):</span>
                <p>${m.sharedSymptoms}</p>
              </div>

              <!-- Klíčový rozlišovací test -->
              <div class="matrix-key-test-box">
                <span class="key-icon">🔑</span>
                <div>
                  <strong>Klíčový rozlišovací test:</strong>
                  <p>${m.differentiatingFeature}</p>
                </div>
              </div>

              <!-- Srovnání detailů ve dvou sloupcích -->
              <div class="matrix-cols-split">
                
                <!-- Kořen -->
                <div class="matrix-subcol root">
                  <div class="subcol-title">🌿 ${m.rootDetails.name}</div>
                  <div class="subcol-item">
                    <span class="subcol-label">Motorický deficit:</span>
                    <p>${m.rootDetails.motorDeficit}</p>
                  </div>
                  <div class="subcol-item">
                    <span class="subcol-label">Reflexy:</span>
                    <p>${m.rootDetails.reflexes}</p>
                  </div>
                  <div class="subcol-item">
                    <span class="subcol-label">Senzitivní distribuce:</span>
                    <p>${m.rootDetails.sensoryArea}</p>
                  </div>
                  <div class="subcol-item">
                    <span class="subcol-label">Častá příčina:</span>
                    <p>${m.rootDetails.typicalCause}</p>
                  </div>
                </div>

                <!-- Periferní nerv -->
                <div class="matrix-subcol nerve">
                  <div class="subcol-title">⚡ ${m.nerveDetails.name}</div>
                  <div class="subcol-item">
                    <span class="subcol-label">Motorický deficit:</span>
                    <p>${m.nerveDetails.motorDeficit}</p>
                  </div>
                  <div class="subcol-item">
                    <span class="subcol-label">Reflexy:</span>
                    <p>${m.nerveDetails.reflexes}</p>
                  </div>
                  <div class="subcol-item">
                    <span class="subcol-label">Senzitivní distribuce:</span>
                    <p>${m.nerveDetails.sensoryArea}</p>
                  </div>
                  <div class="subcol-item">
                    <span class="subcol-label">Častá příčina:</span>
                    <p>${m.nerveDetails.typicalCause}</p>
                  </div>
                </div>

              </div>

            </div>
          `).join("")}
        </div>
      </div>
    `;
  }

  // --- 4. ATLAS ŘEZŮ (MÍCHA & KMEN) ---
  function renderDiagramView() {
    return `
      <div class="diagram-container">
        
        <div class="diagram-section">
          <h3>1. Průřez míchou (Medulla spinalis) & Míšní dráhy</h3>
          <p class="section-sub">Klikněte na jednotlivé struktury míchy pro zobrazení funkce, směru vedení, křížení a klinických syndromů.</p>
          
          <div class="spinal-diagram-layout">
            
            <div class="spinal-schema-box">
              <svg viewBox="0 0 600 400" class="spinal-svg" id="spinal-svg">
                <!-- Vnější obrys míchy -->
                <path d="M 100 200 C 100 80, 500 80, 500 200 C 500 320, 350 350, 300 320 C 250 350, 100 320, 100 200 Z" class="svg-spinal-white" />
                
                <!-- Fissura mediana anterior & Sulcus medianus posterior -->
                <line x1="300" y1="320" x2="300" y2="230" class="svg-fissura" />
                <line x1="300" y1="90" x2="300" y2="170" class="svg-sulcus" />

                <!-- Šedá hmota (Motýl) -->
                <!-- Levá polovina motýla -->
                <path d="M 300 200 C 270 200, 240 240, 210 270 C 180 290, 170 250, 210 220 C 230 200, 230 170, 210 140 C 190 120, 220 110, 240 140 C 260 170, 280 190, 300 195 Z" class="svg-gray-matter" />
                <!-- Pravá polovina motýla -->
                <path d="M 300 200 C 330 200, 360 240, 390 270 C 420 290, 430 250, 390 220 C 370 200, 370 170, 390 140 C 410 120, 380 110, 360 140 C 340 170, 320 190, 300 195 Z" class="svg-gray-matter" />

                <!-- Dráhy - Interaktivní plošky -->
                <!-- Zadní provazce (Funiculus posterior) -->
                <path d="M 245 130 C 270 95, 330 95, 355 130 C 340 160, 260 160, 245 130 Z" class="svg-tract tract-dorsal" data-tract="dorsal_columns" />
                <text x="300" y="130" class="svg-label">Zadní provazce</text>

                <!-- Pyramidová dráha (Tractus corticospinalis lateralis) - Vlevo & Vpravo -->
                <ellipse cx="160" cy="200" rx="35" ry="25" class="svg-tract tract-pyramidal" data-tract="corticospinal" />
                <text x="160" y="205" class="svg-label">Pyramidová dráha</text>
                
                <ellipse cx="440" cy="200" rx="35" ry="25" class="svg-tract tract-pyramidal" data-tract="corticospinal" />
                <text x="440" y="205" class="svg-label">Pyramidová dráha</text>

                <!-- Tractus spinothalamicus lateralis (Bolest & Teplo) -->
                <ellipse cx="140" cy="255" rx="25" ry="20" class="svg-tract tract-spinothalamic" data-tract="spinothalamic" />
                <text x="140" y="260" class="svg-label">Tr. spinothalamicus</text>

                <ellipse cx="460" cy="255" rx="25" ry="20" class="svg-tract tract-spinothalamic" data-tract="spinothalamic" />
                <text x="460" y="260" class="svg-label">Tr. spinothalamicus</text>

                <!-- Přední rohy míšní (Cornu anterius) -->
                <circle cx="210" cy="265" r="18" class="svg-tract tract-anterior-horn" data-tract="anterior_horn" />
                <text x="210" y="270" class="svg-label">Přední roh</text>

                <circle cx="390" cy="265" r="18" class="svg-tract tract-anterior-horn" data-tract="anterior_horn" />
                <text x="390" y="270" class="svg-label">Přední roh</text>
              </svg>
            </div>

            <!-- Detail vybrané dráhy -->
            <div class="spinal-info-card" id="spinal-tract-info">
              <div class="info-empty-state">
                <span style="font-size: 2rem;">👆</span>
                <p>Klikněte nebo najeďte na libovolnou dráhu v nákresu míchy pro zobrazení fyziologie, dráhy a klinických syndromů.</p>
              </div>
            </div>

          </div>
        </div>

        <!-- Mozkový kmen sekce -->
        <div class="diagram-section" style="margin-top: 30px;">
          <h3>2. Mozkový kmen & Alternující kmenové syndromy</h3>
          <p class="section-sub">Rozdělení kmenových pater a jejich typické cévní syndromy.</p>
          
          <div class="brainstem-cards-grid">
            
            <div class="brainstem-level-card mezencephalon">
              <div class="level-header">
                <span class="level-tag">Horní patro</span>
                <h4>Mezencefalon (Střední mozek)</h4>
              </div>
              <ul class="level-features">
                <li><strong>Hlavové nervy:</strong> n. III (oculomotorius), n. IV (trochlearis)</li>
                <li><strong>Dráhy:</strong> Crus cerebri (pyramidová dráha), Lemniscus medialis, Nucleus ruber</li>
                <li><strong>Klíčový syndrom:</strong> <span class="badge-syndrome">Weberův syndrom</span> (homolaterální n. III + kontralaterální spastická hemiparéza)</li>
                <li><strong>Tektální léze:</strong> <span class="badge-syndrome">Parinaudův syndrom</span> (obrna vertikálního pohledu vzhůru u tumorů epifýzy)</li>
              </ul>
            </div>

            <div class="brainstem-level-card pons">
              <div class="level-header">
                <span class="level-tag">Střední patro</span>
                <h4>Pons Varoli (Most)</h4>
              </div>
              <ul class="level-features">
                <li><strong>Hlavové nervy:</strong> n. V (trigeminus), n. VI (abducens), n. VII (facialis), n. VIII (vestibulocochlearis)</li>
                <li><strong>Pohledové centrum:</strong> PPRF (paramediální pontinní retikulární formace) pro horizontální pohled</li>
                <li><strong>Klíčový syndrom:</strong> <span class="badge-syndrome">Millard-Gublerův syndrom</span> (homolaterální periferní n. VII + kontralaterální hemiparéza)</li>
                <li><strong>Báze pontu:</strong> <span class="badge-syndrome">Locked-in syndrom</span> (oboustranný uzávěr a. basilaris)</li>
              </ul>
            </div>

            <div class="brainstem-level-card medulla">
              <div class="level-header">
                <span class="level-tag">Kaudální patro</span>
                <h4>Medulla oblongata (Prodloužená mícha)</h4>
              </div>
              <ul class="level-features">
                <li><strong>Hlavové nervy:</strong> n. IX (glossopharyngeus), n. X (vagus), n. XI (accessorius), n. XII (hypoglossus)</li>
                <li><strong>Životní centra:</strong> Dýchací a vazomotorické centrum, ncl. ambiguus</li>
                <li><strong>Klíčový syndrom:</strong> <span class="badge-syndrome">Wallenbergův syndrom</span> (dorzolaterální infarkt PICA - zkřížená hypestézie + Horner + ataxie + dysfagie)</li>
                <li><strong>Ventrální léze:</strong> <span class="badge-syndrome">Jacksonův syndrom</span> (n. XII + kontralaterální hemiparéza)</li>
              </ul>
            </div>

          </div>
        </div>

      </div>
    `;
  }

  // Interaktivita v SVG nákresu míchy
  const TRACT_DETAILS = {
    dorsal_columns: {
      name: "Zadní provazce (Fasciculus gracilis et cuneatus)",
      function: "Hluboké čití (propriocepce / polohocit), diskriminační a vibrační čití.",
      crossing: "Nekříží se v míše! Běží ipsilaterálně až do jader nucleus gracilis et cuneatus v oblongatě, kde se kříží jako decussatio lemnisci medialis.",
      syndrome: "Funikulární myelóza (deficit B12), Tabes dorsalis (neurosyfilis). Projevuje se spinální ataxií (pozitivní Romberg) a ztrátou polohocitu."
    },
    corticospinal: {
      name: "Tractus corticospinalis lateralis (Pyramidová dráha)",
      function: "Volní motorika kosterního svalstva (centrální motoneuron).",
      crossing: "Kříží se na přechodu oblongaty a míchy v decussatio pyramidum (85 % vláken).",
      syndrome: "Spastická paréza / plegie pod úrovní léze, hyperreflexie, svalová spasticita a pozitivní pyramidové iritační jevy (Babinski, Rossolimo)."
    },
    spinothalamic: {
      name: "Tractus spinothalamicus lateralis",
      function: "Vnímání povrchové bolesti, tepla a chladu (termoalgezie).",
      crossing: "Kříží se v commissura alba anterior 1–2 míšní segmenty nad vstupem zadního kořene.",
      syndrome: "Syringomyelie (plášťovitá ztráta tepla/bolesti), Brown-Séquardův syndrom (kontralaterální ztráta tepla/bolesti), syndrom a. spinalis anterior."
    },
    anterior_horn: {
      name: "Cornu anterius (Přední roh míšní - 2. motoneuron)",
      function: "Alfa a gama motoneurony inervující svalová vlákna (periferní motoneuron).",
      crossing: "Vlákna vystupují předním kořenem bez křížení.",
      syndrome: "Chabá paréza, svalová atrofie, areflexie, fascikulace a fibrilace na EMG (ALS, spinální muskulární atrofie, poliomyelitis)."
    }
  };

  function bindDiagramInteractions() {
    const tracts = document.querySelectorAll(".svg-tract");
    const infoCard = document.getElementById("spinal-tract-info");

    tracts.forEach(t => {
      const tractKey = t.getAttribute("data-tract");
      const data = TRACT_DETAILS[tractKey];

      const showInfo = () => {
        tracts.forEach(tr => tr.classList.remove("highlighted-tract"));
        t.classList.add("highlighted-tract");

        if (infoCard && data) {
          infoCard.innerHTML = `
            <div class="tract-detail-box">
              <span class="tract-badge">Míšní dráha</span>
              <h4>${data.name}</h4>
              <div class="tract-detail-item">
                <strong>🎯 Funkce a modality:</strong>
                <p>${data.function}</p>
              </div>
              <div class="tract-detail-item">
                <strong>🔀 Křížení dráhy:</strong>
                <p>${data.crossing}</p>
              </div>
              <div class="tract-detail-item">
                <strong>⚡ Typické syndromy a projevy:</strong>
                <p>${data.syndrome}</p>
              </div>
            </div>
          `;
        }
      };

      t.addEventListener("click", showInfo);
      t.addEventListener("mouseenter", showInfo);
    });
  }

  // Přepínání pod-tabů
  function setupEventListeners() {
    const subtabBtns = document.querySelectorAll(".topical-subtab-btn");
    const tabViews = {
      locator: document.getElementById("topical-tab-locator"),
      cases: document.getElementById("topical-tab-cases"),
      matrix: document.getElementById("topical-tab-matrix"),
      diagram: document.getElementById("topical-tab-diagram")
    };

    subtabBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        const targetTab = btn.getAttribute("data-subtab");
        currentSubTab = targetTab;

        subtabBtns.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        Object.keys(tabViews).forEach(k => {
          if (tabViews[k]) {
            tabViews[k].style.display = k === targetTab ? "block" : "none";
          }
        });

        if (targetTab === "diagram") {
          bindDiagramInteractions();
        } else if (targetTab === "cases") {
          bindCasesInteractions();
        }
      });
    });
  }

})();
