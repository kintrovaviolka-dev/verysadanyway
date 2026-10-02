// algorithms.js - Aplikační logika pro Akutní neurologické algoritmy a rozhodovací stromy
// Subportál Neurologie LF OU

(function () {
  let activeAlgoSubTab = "stroke"; // 'stroke' | 'epilepsy' | 'lp' | 'icp'
  let selectedStrokeWindow = "window_early";
  let patientWeight = 75; // kg pro výpočet dávek
  let lpCheckedFlags = new Set();
  let ivtCheckedContraindications = new Set();

  document.addEventListener("DOMContentLoaded", () => {
    initAlgorithmsModule();
  });

  function initAlgorithmsModule() {
    const container = document.getElementById("view-algorithms");
    if (!container) return;

    if (typeof ALGORITHMS_DATA === "undefined") {
      container.innerHTML = `<div class="alert-box error">Chyba: Data pro akutní algoritmy se nepodařilo načíst.</div>`;
      return;
    }

    renderAlgorithmsLayout(container);
  }

  function renderAlgorithmsLayout(container) {
    container.innerHTML = `
      <div class="algo-wrapper">
        
        <!-- Hlavička modulu -->
        <div class="algo-header">
          <div class="algo-header-info">
            <span class="algo-badge">🚨 Urgentní protokoly & Rozhodovací stromy</span>
            <h2>Akutní neurologie a emergentní klinické algoritmy</h2>
            <p>
              Interaktivní klinické protokoly pro urgentní příjem a iktové jednotky.
              Reperfuzní časová okna CMP, časový management status epilepticus s kalkulátorem dávek, indikace CT před lumbální punkcí a management nitrolebního tlaku.
            </p>
          </div>

          <!-- Pod-taby -->
          <div class="algo-subtabs" role="tablist">
            <button class="algo-subtab-btn active" data-algotab="stroke">
              <span>⚡</span>
              <span>Akutní iktový protokol (CMP)</span>
            </button>
            <button class="algo-subtab-btn" data-algotab="epilepsy">
              <span>⏱️</span>
              <span>Status Epilepticus (0–60 min)</span>
            </button>
            <button class="algo-subtab-btn" data-algotab="lp">
              <span>💉</span>
              <span>Lumbální punkce (CT před LP)</span>
            </button>
            <button class="algo-subtab-btn" data-algotab="icp">
              <span>🧠</span>
              <span>Intrakraniální tlak & Edém</span>
            </button>
          </div>
        </div>

        <!-- Obsah sub-tabů -->
        <div class="algo-content">
          <div id="algo-view-stroke" class="algo-tab-view active">
            ${renderStrokeView()}
          </div>
          <div id="algo-view-epilepsy" class="algo-tab-view" style="display: none;">
            ${renderEpilepsyView()}
          </div>
          <div id="algo-view-lp" class="algo-tab-view" style="display: none;">
            ${renderLpView()}
          </div>
          <div id="algo-view-icp" class="algo-tab-view" style="display: none;">
            ${renderIcpView()}
          </div>
        </div>

      </div>
    `;

    bindTabSwitching();
    bindStrokeEvents();
    bindEpilepsyEvents();
    bindLpEvents();
  }

  function bindTabSwitching() {
    const btns = document.querySelectorAll(".algo-subtab-btn");
    const views = {
      stroke: document.getElementById("algo-view-stroke"),
      epilepsy: document.getElementById("algo-view-epilepsy"),
      lp: document.getElementById("algo-view-lp"),
      icp: document.getElementById("algo-view-icp")
    };

    btns.forEach(btn => {
      btn.addEventListener("click", () => {
        const target = btn.getAttribute("data-algotab");
        activeAlgoSubTab = target;

        btns.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        Object.keys(views).forEach(k => {
          if (views[k]) {
            views[k].style.display = k === target ? "block" : "none";
          }
        });
      });
    });
  }

  // ==========================================
  // 1. AKUTNÍ IKTOVÝ PROTOKOL (CMP CODE)
  // ==========================================
  function renderStrokeView() {
    return `
      <div class="algo-card-container">
        
        <!-- Výběr časového okna -->
        <div class="algo-section-header">
          <h3>1. Reperfuzní časová okna a rozhodovací algoritmus</h3>
          <p>Vyberte dobu od vzniku prvních příznaků (nebo od okamžiku, kdy byl pacient naposledy viděn v normálním stavu):</p>
        </div>

        <div class="time-window-selector">
          ${ALGORITHMS_DATA.strokeCode.timeWindows.map(w => `
            <button class="time-window-btn ${selectedStrokeWindow === w.id ? 'active' : ''}" data-window-id="${w.id}">
              <span class="tw-time">${w.timeRange}</span>
              <span class="tw-name">${w.name}</span>
            </button>
          `).join("")}
        </div>

        <!-- Detail vybraného okna -->
        <div class="time-window-detail-card" id="time-window-detail-card">
          <!-- Dynamicky renderovaný obsah -->
        </div>

        <!-- Interaktivní kontrola kontraindikací trombolýzy -->
        <div class="algo-section-header" style="margin-top: 30px;">
          <h3>2. Interaktivní kontrolní seznam (Checklist) kontraindikací i.v. trombolýzy</h3>
          <p>Označte přítomné nálezy pro okamžité vyhodnocení bezpečnosti trombolýzy:</p>
        </div>

        <div class="ivt-checklist-box">
          <div class="ivt-checklist-grid">
            ${ALGORITHMS_DATA.strokeCode.contraindications.map(ci => `
              <label class="checklist-label ${ivtCheckedContraindications.has(ci.id) ? 'checked' : ''}">
                <input type="checkbox" class="ivt-ci-checkbox" data-ci-id="${ci.id}" ${ivtCheckedContraindications.has(ci.id) ? 'checked' : ''}>
                <span class="checkbox-text">${ci.text}</span>
              </label>
            `).join("")}
          </div>

          <div class="ivt-status-banner" id="ivt-status-banner">
            <!-- Dynamický banner -->
          </div>
        </div>

        <!-- Management krevního tlaku -->
        <div class="algo-section-header" style="margin-top: 30px;">
          <h3>3. Management krevního tlaku u akutní CMP</h3>
        </div>

        <div class="bp-rules-grid">
          ${ALGORITHMS_DATA.strokeCode.bpManagement.rules.map(r => `
            <div class="bp-rule-card">
              <div class="bp-rule-scenario">${r.scenario}</div>
              <div class="bp-rule-target">${r.target}</div>
              <p class="bp-rule-action">${r.action}</p>
            </div>
          `).join("")}
        </div>

      </div>
    `;
  }

  function updateStrokeWindowDetail() {
    const detailCard = document.getElementById("time-window-detail-card");
    if (!detailCard) return;

    const w = ALGORITHMS_DATA.strokeCode.timeWindows.find(x => x.id === selectedStrokeWindow);
    if (!w) return;

    let recsHtml = "";
    w.recommendations.forEach(r => {
      recsHtml += `
        <div class="recom-block ${r.type}">
          <div class="recom-header">
            <span class="recom-badge">${r.type === 'ivt' ? '💉 Farmakoterapie' : (r.type === 'mt' ? '🩺 Intervence' : '🔬 Zobrazovací protokol')}</span>
            <h4>${r.title}</h4>
          </div>
          ${r.drug ? `<p class="recom-drug"><strong>Dávkování:</strong> ${r.drug}</p>` : ''}
          ${r.conditions ? `<p class="recom-cond"><strong>Podmínky podání:</strong> ${r.conditions}</p>` : ''}
          ${r.description ? `<p class="recom-desc">${r.description}</p>` : ''}
        </div>
      `;
    });

    detailCard.innerHTML = `
      <div class="tw-detail-header">
        <span class="tw-time-badge">${w.timeRange}</span>
        <h4>${w.name}</h4>
      </div>
      <div class="tw-recoms-grid">
        ${recsHtml}
      </div>
    `;
  }

  function updateIvtStatusBanner() {
    const banner = document.getElementById("ivt-status-banner");
    if (!banner) return;

    if (ivtCheckedContraindications.size > 0) {
      banner.className = "ivt-status-banner blocked";
      banner.innerHTML = `
        <span class="banner-icon">🛑</span>
        <div>
          <strong>INTRAVENÓZNÍ TROMBOLÝZA JE KONTRAINDIKOVÁNA</strong>
          <p>Byla označena alespoň 1 absolutní kontraindikace (${ivtCheckedContraindications.size} zjištěno). Zvažte přímou mechanickou trombektomii při uzávěru velké tepny (LVO).</p>
        </div>
      `;
    } else {
      banner.className = "ivt-status-banner approved";
      banner.innerHTML = `
        <span class="banner-icon">✅</span>
        <div>
          <strong>BEZ KONTRAINDIKACÍ PRO i.v. TROMBOLÝZU</strong>
          <p>Pacient je způsobilý k okamžitému podání alteplázy (rtPA 0,9 mg/kg) nebo tenekteplázy při splnění časového okna a TK < 185/110 mmHg.</p>
        </div>
      `;
    }
  }

  function bindStrokeEvents() {
    const windowBtns = document.querySelectorAll(".time-window-btn");
    windowBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        selectedStrokeWindow = btn.getAttribute("data-window-id");
        windowBtns.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        updateStrokeWindowDetail();
      });
    });

    const checkboxes = document.querySelectorAll(".ivt-ci-checkbox");
    checkboxes.forEach(cb => {
      cb.addEventListener("change", () => {
        const ciId = cb.getAttribute("data-ci-id");
        if (cb.checked) {
          ivtCheckedContraindications.add(ciId);
          cb.closest(".checklist-label").classList.add("checked");
        } else {
          ivtCheckedContraindications.delete(ciId);
          cb.closest(".checklist-label").classList.remove("checked");
        }
        updateIvtStatusBanner();
      });
    });

    updateStrokeWindowDetail();
    updateIvtStatusBanner();
  }

  // ==========================================
  // 2. STATUS EPILEPTICUS
  // ==========================================
  function renderEpilepsyView() {
    return `
      <div class="algo-card-container">
        
        <!-- Kalkulátor hmotnosti pro dávkování -->
        <div class="weight-dosage-calculator-bar">
          <div class="weight-input-wrap">
            <label for="epilepsy-weight-input">⚖️ Hmotnost pacienta (kg):</label>
            <input type="number" id="epilepsy-weight-input" class="weight-input" value="${patientWeight}" min="30" max="180" step="5">
            <span class="weight-unit">kg</span>
          </div>
          <div class="weight-calc-notice">
            Dávky antiepileptik 1., 2. i 3. linie níže se automaticky přepočítávají podle zadané tělesné hmotnosti.
          </div>
        </div>

        <!-- Časová osa fází status epilepticus -->
        <div class="status-phases-timeline">
          ${ALGORITHMS_DATA.statusEpilepticus.phases.map(p => `
            <div class="status-phase-card ${p.color}">
              <div class="phase-header-badge">
                <span class="phase-time-pill">${p.time}</span>
                <span class="phase-name">${p.name}</span>
              </div>
              <div class="phase-content-body" id="phase-body-${p.phaseNum}">
                <!-- Renderováno dynamicky s dávkami -->
              </div>
            </div>
          `).join("")}
        </div>

      </div>
    `;
  }

  function updateEpilepsyDoses() {
    const w = patientWeight;

    // Fáze 1 dávky
    const p1Body = document.getElementById("phase-body-1");
    if (p1Body) {
      p1Body.innerHTML = `
        <ul class="phase-steps-list">
          <li>Zajištění dýchacích cest, inhalace O₂ (8–10 l/min), polohování na bok, monitorace SpO₂, EKG, TK.</li>
          <li>Statim glykémie (při hypoglykémii: 40% Glukóza 40–80 ml i.v. + Thiamin 100 mg i.v.).</li>
          <li>
            <strong>1. volba – Benzodiazepiny i.v.:</strong>
            <div class="dosage-highlight-card">
              • <strong>Diazepam:</strong> 10 mg i.v. pomalu (2 mg/min). Při neúspěchu zopakovat 10 mg za 5 minut (celkem max. 20 mg).<br>
              • <strong>Clonazepam (Rivotril):</strong> 1 mg i.v. pomalu.<br>
              • Při chybění i.v. linky: <strong>Midazolam</strong> 10 mg bukálně / i.m. nebo Diazepam rektálně 10–20 mg.
            </div>
          </li>
        </ul>
      `;
    }

    // Fáze 2 dávky (Přepočet dle hmotnosti)
    const keppraDose = Math.min(Math.round(w * 60), 4500);
    const valproateDose = Math.min(Math.round(w * 40), 3000);

    const p2Body = document.getElementById("phase-body-2");
    if (p2Body) {
      p2Body.innerHTML = `
        <ul class="phase-steps-list">
          <li>Pokud křeče přetrvávají po 2 dávkách benzodiazepinů (čas > 5–10 min), okamžitě zahájit nasycovací dávku ne-sedativního antiepileptika v rychlé infuzi:</li>
          <li>
            <div class="dosage-highlight-card">
              • <strong>Levetiracetam (Keppra):</strong> <span class="calc-dose-tag">${keppraDose} mg</span> i.v. (60 mg/kg) v 100 ml FR během 10 minut. <em>(1. volba – bez kardiovaskulární toxicity)</em>.<br>
              • <strong>Valproát sodný (Depakine):</strong> <span class="calc-dose-tag">${valproateDose} mg</span> i.v. (40 mg/kg) během 10 minut. <em>(Kontraindikace: hepatopatie)</em>.<br>
              • <strong>Lakosamid (Vimpat):</strong> <span class="calc-dose-tag">200–400 mg</span> i.v. v rychlé infuzi během 5 minut.
            </div>
          </li>
        </ul>
      `;
    }

    // Fáze 3 dávky
    const propofolBolus = Math.round(w * 2);
    const midazolamBolus = (w * 0.2).toFixed(1);

    const p3Body = document.getElementById("phase-body-3");
    if (p3Body) {
      p3Body.innerHTML = `
        <ul class="phase-steps-list">
          <li><strong>Refrakterní status (RSE):</strong> Okamžitý překlad na ARO/JIP, orotracheální intubace + UPV, zavedení <strong>kontinuálního cEEG</strong> (cíl: Burst-Suppression pattern po dobu 24–48 h).</li>
          <li>
            <div class="dosage-highlight-card critical">
              • <strong>Propofol:</strong> Bolus <span class="calc-dose-tag">${propofolBolus} mg</span> i.v. (2 mg/kg), poté kontinuální infuze ${(w * 0.002 * 1000).toFixed(0)}–${(w * 0.01 * 1000).toFixed(0)} mg/h (2–10 mg/kg/h).<br>
              • <strong>Midazolam:</strong> Bolus <span class="calc-dose-tag">${midazolamBolus} mg</span> i.v. (0,2 mg/kg), poté kontinuálně ${(w * 0.1).toFixed(0)}–${(w * 2.0).toFixed(0)} mg/h.<br>
              • <strong>Thiopental:</strong> Bolus ${(w * 3).toFixed(0)}–${(w * 5).toFixed(0)} mg i.v. (3–5 mg/kg), poté kontinuální infuze.
            </div>
          </li>
        </ul>
      `;
    }
  }

  function bindEpilepsyEvents() {
    const wInput = document.getElementById("epilepsy-weight-input");
    if (wInput) {
      wInput.addEventListener("input", () => {
        patientWeight = parseFloat(wInput.value) || 75;
        updateEpilepsyDoses();
      });
    }
    updateEpilepsyDoses();
  }

  // ==========================================
  // 3. PROTOKOL LUMBÁLNÍ PUNKCE & CT PŘED LP
  // ==========================================
  function renderLpView() {
    return `
      <div class="algo-card-container">
        
        <div class="critical-rule-banner">
          <span class="rule-icon">⚠️</span>
          <div>
            <strong>ZLATÉ PRAVIDLO AKUTNÍ MENINGITIDY:</strong>
            <p>${ALGORITHMS_DATA.lumbarPunctureProtocol.criticalRule}</p>
          </div>
        </div>

        <div class="algo-section-header" style="margin-top: 24px;">
          <h3>Interaktivní rozhodovací strom: „Je nutné provést CT hlavy před lumbální punkcí?“</h3>
          <p>Zaškrtněte všechny varovné příznaky přítomné u vyšetřovaného pacienta:</p>
        </div>

        <div class="lp-checklist-grid">
          ${ALGORITHMS_DATA.lumbarPunctureProtocol.indicationsForCT.map(ind => `
            <label class="checklist-label ${lpCheckedFlags.has(ind.id) ? 'checked' : ''}">
              <input type="checkbox" class="lp-flag-checkbox" data-flag-id="${ind.id}" ${lpCheckedFlags.has(ind.id) ? 'checked' : ''}>
              <div>
                <strong>${ind.title}</strong>
                <p class="ind-reason">${ind.reason}</p>
              </div>
            </label>
          `).join("")}
        </div>

        <!-- Výsledné rozhodnutí -->
        <div class="lp-decision-banner" id="lp-decision-banner">
          <!-- Dynamické rozhodnutí -->
        </div>

        <div class="algo-section-header" style="margin-top: 30px;">
          <h3>Absolutní kontraindikace lumbální punkce</h3>
        </div>

        <div class="lp-contraindications-list">
          ${ALGORITHMS_DATA.lumbarPunctureProtocol.contraindicationsToLP.map(c => `
            <div class="lp-ci-item">
              <span class="ci-dot">🛑</span>
              <p>${c}</p>
            </div>
          `).join("")}
        </div>

      </div>
    `;
  }

  function updateLpDecisionBanner() {
    const banner = document.getElementById("lp-decision-banner");
    if (!banner) return;

    if (lpCheckedFlags.size > 0) {
      banner.className = "lp-decision-banner ct-required";
      banner.innerHTML = `
        <span class="decision-icon">🚨</span>
        <div>
          <h4>INDIKOVÁNO STATIM CT HLAVY PŘED LUMBÁLNÍ PUNKCÍ</h4>
          <p>
            Byl přítomen alespoň jeden varovný příznak (${lpCheckedFlags.size} označeno). Před provedením LP je nutné vyloučit intrakraniální expanzi, posun středočárových struktur a edém mozku pro riziko tentoriální/okcipitální herniace.
          </p>
          <div class="decision-action-box">
            <strong>Klinický postup:</strong> Odebrat hemokultury → Podat i.v. Dexamethason 10 mg + Ceftriaxon 2 g i.v. → Provést CT mozku → Pokud CT vyloučí expanzi, provést lumbální punkci.
          </div>
        </div>
      `;
    } else {
      banner.className = "lp-decision-banner lp-safe";
      banner.innerHTML = `
        <span class="decision-icon">✅</span>
        <div>
          <h4>LUMBÁLNÍ PUNKCI LZE PROVÉST OKAMŽITĚ BEZ PŘEDCHOZÍHO CT</h4>
          <p>
            Žádný z varovných příznaků pro intrakraniální expanzi není přítomen (normální vědomí, bez ložiskového deficitu, bez městnání na pozadí, bez křečí). Provedení CT by znamenalo zbytečné prodlení v zahájení cílené léčby.
          </p>
        </div>
      `;
    }
  }

  function bindLpEvents() {
    const checkboxes = document.querySelectorAll(".lp-flag-checkbox");
    checkboxes.forEach(cb => {
      cb.addEventListener("change", () => {
        const flagId = cb.getAttribute("data-flag-id");
        if (cb.checked) {
          lpCheckedFlags.add(flagId);
          cb.closest(".checklist-label").classList.add("checked");
        } else {
          lpCheckedFlags.delete(flagId);
          cb.closest(".checklist-label").classList.remove("checked");
        }
        updateLpDecisionBanner();
      });
    });

    updateLpDecisionBanner();
  }

  // ==========================================
  // 4. MANAGEMENT ICP A EDÉMU MOZKU
  // ==========================================
  function renderIcpView() {
    return `
      <div class="algo-card-container">
        
        <div class="algo-section-header">
          <h3>Třístupňový protokol terapie intrakraniální hypertenze (ICP > 20 mmHg)</h3>
          <p>Prostupná eskalace léčebných opatření u těžkého edému mozku, kraniotraumat a maligního infarktu.</p>
        </div>

        <div class="icp-tiers-grid">
          ${ALGORITHMS_DATA.icpManagement.tiers.map(t => `
            <div class="icp-tier-card tier-${t.tier}">
              <div class="tier-header">
                <span class="tier-badge">Stupeň ${t.tier}</span>
                <h4>${t.name}</h4>
              </div>
              <ul class="tier-items-list">
                ${t.items.map(item => `<li>${item}</li>`).join("")}
              </ul>
            </div>
          `).join("")}
        </div>

      </div>
    `;
  }

})();
