// calculators.js - Aplikační logika pro Neurologické klinické kalkulátory a Likvorový interpretátor
// Subportál Neurologie LF OU

(function () {
  let activeCalcTab = "nihss"; // 'nihss' | 'gcs_four' | 'abcd2' | 'sah' | 'csf'

  // Stav pro NIHSS
  const nihssValues = {};

  // Stav pro GCS
  let gcsValues = { eye: 4, verbal: 5, motor: 6 };
  let fourValues = { eye: 4, motor: 4, brainstem: 4, respiration: 4 };

  // Stav pro ABCD2
  let abcd2Values = { a_age: 1, b_bp: 1, c_clinical: 2, d_duration: 2, d_diabetes: 0 };

  // Stav pro SAH
  let sahValues = { huntHess: 1, fisher: 1 };

  // Stav pro CSF
  let csfInput = {
    appearance: "zkaleny",
    cells: 2500,
    cellType: "neutrophils",
    protein: 3.5,
    glucoseRatio: 0.2,
    lactate: 5.2,
    ocb: "none"
  };

  document.addEventListener("DOMContentLoaded", () => {
    initCalculatorsModule();
  });

  function initCalculatorsModule() {
    const container = document.getElementById("view-calculators");
    if (!container) return;

    if (typeof CALCULATORS_DATA === "undefined") {
      container.innerHTML = `<div class="alert-box error">Chyba: Data pro neurologické kalkulátory se nepodařilo načíst.</div>`;
      return;
    }

    // Výchozí inicializace NIHSS na 0
    CALCULATORS_DATA.nihss.items.forEach(item => {
      nihssValues[item.id] = 0;
    });

    renderCalculatorsLayout(container);
  }

  function renderCalculatorsLayout(container) {
    container.innerHTML = `
      <div class="calc-wrapper">
        
        <!-- Hlavička modulu -->
        <div class="calc-header">
          <div class="calc-header-info">
            <span class="calc-badge">📊 Klinické kalkulátory & Likvorologie</span>
            <h2>Neurologické skórovací systémy a interpretátor mozkomíšního moku</h2>
            <p>
              Interaktivní skórovací nástroje pro lůžkovou i ambulantní praxi podle aktuálních guidelines (ČNS ČLS JEP, ESO 2024–2026).
              Kvantifikace iktů (NIHSS), poruch vědomí (GCS / FOUR), rizika po TIA (ABCD²) a diferenciální diagnostika likvoru.
            </p>
          </div>

          <!-- Navigační pod-taby -->
          <div class="calc-subtabs" role="tablist">
            <button class="calc-subtab-btn active" data-calctab="nihss">
              <span>⚡</span>
              <span>NIHSS (CMP)</span>
            </button>
            <button class="calc-subtab-btn" data-calctab="gcs_four">
              <span>🧠</span>
              <span>GCS & FOUR (Vědomí)</span>
            </button>
            <button class="calc-subtab-btn" data-calctab="abcd2">
              <span>⏱️</span>
              <span>ABCD² (TIA riziko)</span>
            </button>
            <button class="calc-subtab-btn" data-calctab="sah">
              <span>🩸</span>
              <span>Hunt-Hess & Fisher (SAH)</span>
            </button>
            <button class="calc-subtab-btn" data-calctab="csf">
              <span>🧪</span>
              <span>Likvorový interpretátor</span>
            </button>
          </div>
        </div>

        <!-- Obsah jednotlivých kalkulátorů -->
        <div class="calc-content">
          <div id="calc-view-nihss" class="calc-tab-view active">
            ${renderNihssView()}
          </div>
          <div id="calc-view-gcs_four" class="calc-tab-view" style="display: none;">
            ${renderGcsFourView()}
          </div>
          <div id="calc-view-abcd2" class="calc-tab-view" style="display: none;">
            ${renderAbcd2View()}
          </div>
          <div id="calc-view-sah" class="calc-tab-view" style="display: none;">
            ${renderSahView()}
          </div>
          <div id="calc-view-csf" class="calc-tab-view" style="display: none;">
            ${renderCsfView()}
          </div>
        </div>

      </div>
    `;

    bindTabSwitching();
    bindNihssEvents();
    bindGcsEvents();
    bindAbcd2Events();
    bindSahEvents();
    bindCsfEvents();
  }

  // --- TAB SWITCHING ---
  function bindTabSwitching() {
    const subtabBtns = document.querySelectorAll(".calc-subtab-btn");
    const views = {
      nihss: document.getElementById("calc-view-nihss"),
      gcs_four: document.getElementById("calc-view-gcs_four"),
      abcd2: document.getElementById("calc-view-abcd2"),
      sah: document.getElementById("calc-view-sah"),
      csf: document.getElementById("calc-view-csf")
    };

    subtabBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        const target = btn.getAttribute("data-calctab");
        activeCalcTab = target;

        subtabBtns.forEach(b => b.classList.remove("active"));
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
  // 1. NIHSS KALKULÁTOR
  // ==========================================
  function renderNihssView() {
    return `
      <div class="calc-grid-layout">
        
        <!-- Levý sloupec: 11 položek formuláře -->
        <div class="calc-form-panel">
          <div class="panel-header-row">
            <h3>Položky NIHSS škály (11 domén)</h3>
            <button id="reset-nihss-btn" class="btn-text-sm">✕ Vynulovat skóre</button>
          </div>

          <div class="nihss-items-list">
            ${CALCULATORS_DATA.nihss.items.map(item => `
              <div class="nihss-item-box" data-item-id="${item.id}">
                <div class="nihss-item-title">${item.title}</div>
                <div class="nihss-options-grid">
                  ${item.options.map(opt => `
                    <button class="nihss-opt-btn ${nihssValues[item.id] === opt.score ? 'active' : ''}" 
                            data-item-id="${item.id}" 
                            data-score="${opt.score}">
                      ${opt.label}
                    </button>
                  `).join("")}
                </div>
              </div>
            `).join("")}
          </div>
        </div>

        <!-- Pravý sloupec: Sticky panel s výsledkem a doporučením -->
        <div class="calc-summary-panel">
          <div class="summary-sticky-card">
            <span class="summary-label">Celkové skóre NIHSS</span>
            <div class="summary-score-val" id="nihss-total-score">0 / 42</div>
            <div class="summary-badge" id="nihss-severity-badge">0 bodů • Bez iktového deficitu</div>

            <div class="summary-divider"></div>

            <div class="nihss-stratification-box" id="nihss-clinical-guide">
              <!-- Dynamický obsah -->
            </div>
          </div>
        </div>

      </div>
    `;
  }

  function updateNihssResult() {
    let total = 0;
    Object.values(nihssValues).forEach(v => total += v);

    const scoreEl = document.getElementById("nihss-total-score");
    const badgeEl = document.getElementById("nihss-severity-badge");
    const guideEl = document.getElementById("nihss-clinical-guide");

    if (!scoreEl || !badgeEl || !guideEl) return;

    scoreEl.textContent = `${total} / 42`;

    let severityText = "";
    let badgeClass = "low";
    let guideHtml = "";

    if (total === 0) {
      severityText = "0 bodů • Bez známek deficitu";
      badgeClass = "low";
      guideHtml = `
        <div class="guide-item">
          <strong>Klinický stav:</strong> Normální neurologický nález.
        </div>
      `;
    } else if (total <= 4) {
      severityText = `${total} b. • Lehký iktus (Minor Stroke)`;
      badgeClass = "low";
      guideHtml = `
        <div class="guide-item">
          <strong>Klinická stratifikace:</strong> Lehký iktus. Často izolovaný deficit (např. dysartrie, lehká monoparéza).
        </div>
        <div class="guide-item pearl">
          <strong>⚡ Trombolýza & Trombektomie:</strong> I u lehkého deficitu zvažte i.v. trombolýzu, pokud je přítomen invalidizující deficit (např. afázie, hemianopsie, paréza ruky bránící práci).
        </div>
      `;
    } else if (total <= 15) {
      severityText = `${total} b. • Středně těžký iktus (Moderate Stroke)`;
      badgeClass = "medium";
      guideHtml = `
        <div class="guide-item">
          <strong>Klinická stratifikace:</strong> Středně těžká ischemická CMP. Typicky hemiparéza + centrální léze n. VII + afázie / dysartrie.
        </div>
        <div class="guide-item urgent">
          <strong>🚨 Akutní reperfuzní léčba:</strong>
          <ul>
            <li><strong>i.v. Trombolýza (rtPA):</strong> Indikována do 4,5 hodiny od vzniku (TK < 185/110 mmHg).</li>
            <li><strong>Mechanická trombektomie:</strong> Indikována při uzávěru velké mozkové tepny (LVO - ACM úsek M1, ACI) do 6 hodin (nebo do 24 h dle CT perfuze / mismatchu).</li>
          </ul>
        </div>
      `;
    } else if (total <= 20) {
      severityText = `${total} b. • Středně těžký až těžký iktus`;
      badgeClass = "high";
      guideHtml = `
        <div class="guide-item">
          <strong>Klinická stratifikace:</strong> Těžký iktus s vysokým rizikem trvalé invalidity a edému mozku.
        </div>
        <div class="guide-item urgent">
          <strong>🚨 Okamžitá iktová péče:</strong> Statim CTA k posouzení uzávěru velkých tepen pro endovaskulární trombektomii + statim i.v. trombolýza. Monitorace na iktové jednotce (JIP).
        </div>
      `;
    } else {
      severityText = `${total} b. • Těžký devastující iktus (Severe Stroke)`;
      badgeClass = "critical";
      guideHtml = `
        <div class="guide-item">
          <strong>Klinická stratifikace:</strong> Masivní ischemická léze (často kompletní uzávěr kmene ACM nebo a. basilaris).
        </div>
        <div class="guide-item alert">
          <strong>⚠️ Riziko maligního infarktu:</strong> Vysoké riziko rozvoje maligního edému mozku (indikace k časné dekompresivní kraniektomii u mladších pacientů do 48 h) a hemoragické transformace.
        </div>
      `;
    }

    badgeEl.className = `summary-badge ${badgeClass}`;
    badgeEl.textContent = severityText;
    guideEl.innerHTML = guideHtml;
  }

  function bindNihssEvents() {
    const buttons = document.querySelectorAll(".nihss-opt-btn");
    buttons.forEach(btn => {
      btn.addEventListener("click", () => {
        const itemId = btn.getAttribute("data-item-id");
        const score = parseInt(btn.getAttribute("data-score"), 10);
        nihssValues[itemId] = score;

        // Označení aktivního tlačítka v rámci položky
        const parent = btn.closest(".nihss-item-box");
        if (parent) {
          parent.querySelectorAll(".nihss-opt-btn").forEach(b => b.classList.remove("active"));
          btn.classList.add("active");
        }

        updateNihssResult();
      });
    });

    const resetBtn = document.getElementById("reset-nihss-btn");
    if (resetBtn) {
      resetBtn.addEventListener("click", () => {
        Object.keys(nihssValues).forEach(k => nihssValues[k] = 0);
        document.querySelectorAll(".nihss-opt-btn").forEach(btn => {
          const score = parseInt(btn.getAttribute("data-score"), 10);
          btn.classList.toggle("active", score === 0);
        });
        updateNihssResult();
      });
    }

    updateNihssResult();
  }

  // ==========================================
  // 2. GCS & FOUR SCORE
  // ==========================================
  function renderGcsFourView() {
    return `
      <div class="calc-grid-layout">
        
        <div class="calc-form-panel">
          <div class="panel-header-row">
            <h3>Glasgow Coma Scale (GCS)</h3>
          </div>

          <!-- GCS Domény -->
          <div class="gcs-domain-group">
            <div class="gcs-domain-title">👁️ Otevírání očí (Eye Opening, 1–4 b.)</div>
            <div class="gcs-options-list">
              ${CALCULATORS_DATA.gcs.eye.map(opt => `
                <button class="gcs-opt-btn ${gcsValues.eye === opt.score ? 'active' : ''}" data-domain="eye" data-score="${opt.score}">
                  ${opt.label}
                </button>
              `).join("")}
            </div>
          </div>

          <div class="gcs-domain-group">
            <div class="gcs-domain-title">🗣️ Slovní odpověď (Verbal Response, 1–5 b.)</div>
            <div class="gcs-options-list">
              ${CALCULATORS_DATA.gcs.verbal.map(opt => `
                <button class="gcs-opt-btn ${gcsValues.verbal === opt.score ? 'active' : ''}" data-domain="verbal" data-score="${opt.score}">
                  ${opt.label}
                </button>
              `).join("")}
            </div>
          </div>

          <div class="gcs-domain-group">
            <div class="gcs-domain-title">💪 Motorická odpověď (Motor Response, 1–6 b.)</div>
            <div class="gcs-options-list">
              ${CALCULATORS_DATA.gcs.motor.map(opt => `
                <button class="gcs-opt-btn ${gcsValues.motor === opt.score ? 'active' : ''}" data-domain="motor" data-score="${opt.score}">
                  ${opt.label}
                </button>
              `).join("")}
            </div>
          </div>

          <!-- FOUR SCORE (Pro intubované a JIP) -->
          <div class="panel-header-row" style="margin-top: 30px;">
            <h3>FOUR Score (Full Outline of UnResponsiveness - JIP / Intubovaní)</h3>
          </div>

          <div class="gcs-domain-group">
            <div class="gcs-domain-title">👁️ Oční odpověď (Eye, 0–4 b.)</div>
            <div class="gcs-options-list">
              ${CALCULATORS_DATA.gcs.fourScore.eye.map(opt => `
                <button class="four-opt-btn ${fourValues.eye === opt.score ? 'active' : ''}" data-four-domain="eye" data-score="${opt.score}">${opt.label}</button>
              `).join("")}
            </div>
          </div>

          <div class="gcs-domain-group">
            <div class="gcs-domain-title">✋ Motorická odpověď (Motor, 0–4 b.)</div>
            <div class="gcs-options-list">
              ${CALCULATORS_DATA.gcs.fourScore.motor.map(opt => `
                <button class="four-opt-btn ${fourValues.motor === opt.score ? 'active' : ''}" data-four-domain="motor" data-score="${opt.score}">${opt.label}</button>
              `).join("")}
            </div>
          </div>

          <div class="gcs-domain-group">
            <div class="gcs-domain-title">🧠 Kmenové reflexy (Brainstem, 0–4 b.)</div>
            <div class="gcs-options-list">
              ${CALCULATORS_DATA.gcs.fourScore.brainstem.map(opt => `
                <button class="four-opt-btn ${fourValues.brainstem === opt.score ? 'active' : ''}" data-four-domain="brainstem" data-score="${opt.score}">${opt.label}</button>
              `).join("")}
            </div>
          </div>

          <div class="gcs-domain-group">
            <div class="gcs-domain-title">🫁 Dýchání (Respiration, 0–4 b.)</div>
            <div class="gcs-options-list">
              ${CALCULATORS_DATA.gcs.fourScore.respiration.map(opt => `
                <button class="four-opt-btn ${fourValues.respiration === opt.score ? 'active' : ''}" data-four-domain="respiration" data-score="${opt.score}">${opt.label}</button>
              `).join("")}
            </div>
          </div>

        </div>

        <!-- Pravý sloupec: Výsledné skóre -->
        <div class="calc-summary-panel">
          <div class="summary-sticky-card">
            <span class="summary-label">Glasgow Coma Scale</span>
            <div class="summary-score-val" id="gcs-total-score">15 / 15</div>
            <div class="summary-badge low" id="gcs-severity-badge">Plné vědomí (E4 V5 M6)</div>

            <div class="summary-divider"></div>

            <span class="summary-label">FOUR Score (Intubovaní)</span>
            <div class="summary-score-val" style="font-size: 1.8rem;" id="four-total-score">16 / 16</div>

            <div class="nihss-stratification-box" id="gcs-clinical-guide">
              <!-- Dynamický obsah -->
            </div>
          </div>
        </div>

      </div>
    `;
  }

  function updateGcsResult() {
    const totalGcs = gcsValues.eye + gcsValues.verbal + gcsValues.motor;
    const totalFour = fourValues.eye + fourValues.motor + fourValues.brainstem + fourValues.respiration;

    const gcsScoreEl = document.getElementById("gcs-total-score");
    const gcsBadgeEl = document.getElementById("gcs-severity-badge");
    const fourScoreEl = document.getElementById("four-total-score");
    const guideEl = document.getElementById("gcs-clinical-guide");

    if (!gcsScoreEl || !gcsBadgeEl || !fourScoreEl || !guideEl) return;

    gcsScoreEl.textContent = `${totalGcs} / 15`;
    fourScoreEl.textContent = `${totalFour} / 16`;

    let badgeClass = "low";
    let badgeText = "";
    let guideHtml = "";

    if (totalGcs >= 13) {
      badgeClass = "low";
      badgeText = `GCS ${totalGcs} (E${gcsValues.eye} V${gcsValues.verbal} M${gcsValues.motor}) • Lehká porucha / Bdělý`;
      guideHtml = `
        <div class="guide-item">
          <strong>Klasifikace kraniotraumatu:</strong> Lehký úraz mozku (Mild TBI).
        </div>
      `;
    } else if (totalGcs >= 9) {
      badgeClass = "medium";
      badgeText = `GCS ${totalGcs} (E${gcsValues.eye} V${gcsValues.verbal} M${gcsValues.motor}) • Středně těžká porucha vědomí`;
      guideHtml = `
        <div class="guide-item alert">
          <strong>Klinický management:</strong> Středně těžký úraz mozku (Moderate TBI). Urgentní CT mozku, hospitalizace na JIP/ARO, přísné sledování dynamiky vědomí.
        </div>
      `;
    } else {
      badgeClass = "critical";
      badgeText = `GCS ${totalGcs} (E${gcsValues.eye} V${gcsValues.verbal} M${gcsValues.motor}) • KOMA (GCS ≤ 8)`;
      guideHtml = `
        <div class="guide-item critical-box">
          <strong>🚨 GCS ≤ 8 = INDIKACE K OROTRACHEÁLNÍ INTUBACI:</strong>
          <p>Pacient v bezvědomí ztrácí ochranné reflexy dýchacích cest (polykací, kašlací). Hrozí masivní aspirace a asfyxie. Okamžité zajištění dýchacích cest (intubace + UPV) a urgentní CT mozku!</p>
        </div>
      `;
    }

    gcsBadgeEl.className = `summary-badge ${badgeClass}`;
    gcsBadgeEl.textContent = badgeText;
    guideEl.innerHTML = guideHtml;
  }

  function bindGcsEvents() {
    const gcsBtns = document.querySelectorAll(".gcs-opt-btn");
    gcsBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        const domain = btn.getAttribute("data-domain");
        const score = parseInt(btn.getAttribute("data-score"), 10);
        gcsValues[domain] = score;

        const parent = btn.closest(".gcs-options-list");
        if (parent) {
          parent.querySelectorAll(".gcs-opt-btn").forEach(b => b.classList.remove("active"));
          btn.classList.add("active");
        }
        updateGcsResult();
      });
    });

    const fourBtns = document.querySelectorAll(".four-opt-btn");
    fourBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        const domain = btn.getAttribute("data-four-domain");
        const score = parseInt(btn.getAttribute("data-score"), 10);
        fourValues[domain] = score;

        const parent = btn.closest(".gcs-options-list");
        if (parent) {
          parent.querySelectorAll(".four-opt-btn").forEach(b => b.classList.remove("active"));
          btn.classList.add("active");
        }
        updateGcsResult();
      });
    });

    updateGcsResult();
  }

  // ==========================================
  // 3. ABCD2 SKÓRE PRO TIA
  // ==========================================
  function renderAbcd2View() {
    return `
      <div class="calc-grid-layout">
        
        <div class="calc-form-panel">
          <div class="panel-header-row">
            <h3>Parametry ABCD² skóre</h3>
          </div>

          <div class="abcd2-items-list">
            ${CALCULATORS_DATA.abcd2.items.map(item => `
              <div class="abcd2-item-box" data-item-id="${item.id}">
                <div class="abcd2-item-title">${item.name}</div>
                <div class="abcd2-options-list">
                  ${item.options.map(opt => `
                    <button class="abcd2-opt-btn ${abcd2Values[item.id] === opt.score ? 'active' : ''}" 
                            data-item-id="${item.id}" 
                            data-score="${opt.score}">
                      ${opt.label}
                    </button>
                  `).join("")}
                </div>
              </div>
            `).join("")}
          </div>
        </div>

        <!-- Pravý sloupec: Výsledné riziko -->
        <div class="calc-summary-panel">
          <div class="summary-sticky-card">
            <span class="summary-label">Celkové ABCD² skóre</span>
            <div class="summary-score-val" id="abcd2-total-score">6 / 7</div>
            <div class="summary-badge high" id="abcd2-severity-badge">Vysoké riziko časné CMP</div>

            <div class="summary-divider"></div>

            <div class="risk-stats-table" id="abcd2-risk-table">
              <!-- Dynamické statistiky rizika -->
            </div>

            <div class="nihss-stratification-box" id="abcd2-clinical-guide" style="margin-top: 16px;">
              <!-- Doporučení k hospitalizaci -->
            </div>
          </div>
        </div>

      </div>
    `;
  }

  function updateAbcd2Result() {
    let total = 0;
    Object.values(abcd2Values).forEach(v => total += v);

    const scoreEl = document.getElementById("abcd2-total-score");
    const badgeEl = document.getElementById("abcd2-severity-badge");
    const tableEl = document.getElementById("abcd2-risk-table");
    const guideEl = document.getElementById("abcd2-clinical-guide");

    if (!scoreEl || !badgeEl || !tableEl || !guideEl) return;

    scoreEl.textContent = `${total} / 7`;

    let riskLevel = "";
    let badgeClass = "low";
    let risk2d = "", risk7d = "", risk90d = "";
    let guideHtml = "";

    if (total <= 3) {
      riskLevel = "Nízké riziko časné CMP (0–3 body)";
      badgeClass = "low";
      risk2d = "1.0 %";
      risk7d = "1.2 %";
      risk90d = "3.1 %";
      guideHtml = `
        <div class="guide-item">
          <strong>Klinické doporučení:</strong> Ambulantní dovyšetření do 24–48 hodin (UZ karotid, EKG Holter, antitrombotická terapie ASA 100 mg).
        </div>
      `;
    } else if (total <= 5) {
      riskLevel = "Střední riziko časné CMP (4–5 bodů)";
      badgeClass = "medium";
      risk2d = "4.1 %";
      risk7d = "5.9 %";
      risk90d = "9.8 %";
      guideHtml = `
        <div class="guide-item alert">
          <strong>Klinické doporučení:</strong> Indikována časná hospitalizace na lůžku iktového centra k urgentnímu dovyšetření (CT/MRI mozku, UZ/CTA krčních tepen k vyloučení stenózy ACI indikované k endarterektomii).
        </div>
      `;
    } else {
      riskLevel = "VYSOKÉ RIZIKO ČASNÉ CMP (6–7 bodů)";
      badgeClass = "critical";
      risk2d = "8.1 %";
      risk7d = "11.7 %";
      risk90d = "17.8 %";
      guideHtml = `
        <div class="guide-item critical-box">
          <strong>🚨 URGENTNÍ INDIKACE K HOSPITALIZACI:</strong>
          <p>Téměř 1 z 5 pacientů utrpí do 90 dnů velkou invalidizující mozkovou příhodu! Okamžitá duální antiagregační léčba (DAPT: ASA + Klopidogrel po dobu 21 dní), telemetrie srdečního rytmu a statim CTA magistrálních tepen.</p>
        </div>
      `;
    }

    badgeEl.className = `summary-badge ${badgeClass}`;
    badgeEl.textContent = `${total} b. • ${riskLevel}`;

    tableEl.innerHTML = `
      <div class="risk-row">
        <span>Riziko iktu do 2 dnů:</span>
        <strong>${risk2d}</strong>
      </div>
      <div class="risk-row">
        <span>Riziko iktu do 7 dnů:</span>
        <strong>${risk7d}</strong>
      </div>
      <div class="risk-row">
        <span>Riziko iktu do 90 dnů:</span>
        <strong>${risk90d}</strong>
      </div>
    `;

    guideEl.innerHTML = guideHtml;
  }

  function bindAbcd2Events() {
    const buttons = document.querySelectorAll(".abcd2-opt-btn");
    buttons.forEach(btn => {
      btn.addEventListener("click", () => {
        const itemId = btn.getAttribute("data-item-id");
        const score = parseInt(btn.getAttribute("data-score"), 10);
        abcd2Values[itemId] = score;

        const parent = btn.closest(".abcd2-options-list");
        if (parent) {
          parent.querySelectorAll(".abcd2-opt-btn").forEach(b => b.classList.remove("active"));
          btn.classList.add("active");
        }
        updateAbcd2Result();
      });
    });

    updateAbcd2Result();
  }

  // ==========================================
  // 4. HUNT-HESS & FISHER (SAH)
  // ==========================================
  function renderSahView() {
    return `
      <div class="calc-grid-layout">
        
        <div class="calc-form-panel">
          <div class="panel-header-row">
            <h3>1. Hunt-Hessova klinická škála (Klinický stav u SAH)</h3>
          </div>
          <div class="sah-options-list">
            ${CALCULATORS_DATA.sah.huntHess.map(opt => `
              <button class="sah-hh-btn ${sahValues.huntHess === opt.score ? 'active' : ''}" data-score="${opt.score}">
                <strong>${opt.grade}:</strong> ${opt.label}
              </button>
            `).join("")}
          </div>

          <div class="panel-header-row" style="margin-top: 30px;">
            <h3>2. Fisherova radiologická škála (Riziko vazospasmů z CT)</h3>
          </div>
          <div class="sah-options-list">
            ${CALCULATORS_DATA.sah.fisher.map(opt => `
              <button class="sah-fisher-btn ${sahValues.fisher === opt.score ? 'active' : ''}" data-score="${opt.score}">
                <strong>${opt.grade}:</strong> ${opt.label}
              </button>
            `).join("")}
          </div>
        </div>

        <!-- Pravý sloupec -->
        <div class="calc-summary-panel">
          <div class="summary-sticky-card">
            <span class="summary-label">Klasifikace SAH</span>
            <div class="summary-score-val" id="sah-summary-title">Hunt-Hess 1 • Fisher 1</div>
            <div class="summary-badge low" id="sah-summary-badge">Nízké riziko mortality</div>

            <div class="summary-divider"></div>

            <div class="nihss-stratification-box" id="sah-clinical-guide">
              <!-- Dynamické doporučení pro SAH -->
            </div>
          </div>
        </div>

      </div>
    `;
  }

  function updateSahResult() {
    const titleEl = document.getElementById("sah-summary-title");
    const badgeEl = document.getElementById("sah-summary-badge");
    const guideEl = document.getElementById("sah-clinical-guide");

    if (!titleEl || !badgeEl || !guideEl) return;

    titleEl.textContent = `Hunt-Hess ${sahValues.huntHess} • Fisher ${sahValues.fisher}`;

    let badgeClass = sahValues.huntHess >= 4 || sahValues.fisher === 3 ? "critical" : (sahValues.huntHess >= 3 ? "medium" : "low");

    badgeEl.className = `summary-badge ${badgeClass}`;
    badgeEl.textContent = `Hunt-Hess Stupeň ${sahValues.huntHess}`;

    guideEl.innerHTML = `
      <div class="guide-item">
        <strong>🩸 Management aneuryzmatu:</strong> STATIM CTA mozkových tepen a urgentní ošetření prasklého aneuryzmatu (endovaskulární coiling nebo neurochirurgický clipping) do 24–72 hodin k prevenci rekrvácení!
      </div>
      <div class="guide-item ${sahValues.fisher === 3 ? 'urgent' : ''}">
        <strong>⚠️ Prevence cerebrálních vazospasmů:</strong>
        <p>U Fisher 3 je maximální riziko opožděné cerebrální ischemie (DCI) mezi 4.–14. dnem. Zahájit profylaxi blokátorem kalciových kanálů: <strong>Nimodipin 60 mg p.o. po 4 hodinách</strong> po dobu 21 dní + euvolémie.</p>
      </div>
    `;
  }

  function bindSahEvents() {
    document.querySelectorAll(".sah-hh-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        sahValues.huntHess = parseInt(btn.getAttribute("data-score"), 10);
        document.querySelectorAll(".sah-hh-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        updateSahResult();
      });
    });

    document.querySelectorAll(".sah-fisher-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        sahValues.fisher = parseInt(btn.getAttribute("data-score"), 10);
        document.querySelectorAll(".sah-fisher-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        updateSahResult();
      });
    });

    updateSahResult();
  }

  // ==========================================
  // 5. LIKVOROVÝ INTERPRETÁTOR (CSF ANALYZER)
  // ==========================================
  function renderCsfView() {
    return `
      <!-- Rychlé presety vzorků likvoru -->
      <div class="topical-presets-bar">
        <span class="presets-label">🧪 Typické vzorky likvoru (Presety):</span>
        <div class="presets-pills">
          <button class="csf-preset-btn" data-preset="bacterial">🚨 Hnisavá meningitida</button>
          <button class="csf-preset-btn" data-preset="viral">🦠 Virová meningoencefalitida</button>
          <button class="csf-preset-btn" data-preset="tbc">⚠️ Tuberkulózní meningitida</button>
          <button class="csf-preset-btn" data-preset="sah">🩸 Subarachnoidální krvácení (SAH)</button>
          <button class="csf-preset-btn" data-preset="ms">🧠 Roztroušená skleróza (RS)</button>
          <button class="csf-preset-btn" data-preset="gbs">⚡ Guillain-Barré (AIDP)</button>
        </div>
      </div>

      <div class="calc-grid-layout">
        
        <!-- Levý formulář: Vstupní parametry CSF -->
        <div class="calc-form-panel">
          <div class="panel-header-row">
            <h3>Parametry mozkomíšního moku (Lumbální punkce)</h3>
          </div>

          <div class="csf-inputs-grid">
            
            <div class="csf-input-group">
              <label>1. Vzhled likvoru (Makroskopicky):</label>
              <select id="csf-in-appearance" class="csf-select">
                <option value="ciry" ${csfInput.appearance === 'ciry' ? 'selected' : ''}>Čirý / bezbarvý (Normální)</option>
                <option value="zkaleny" ${csfInput.appearance === 'zkaleny' ? 'selected' : ''}>Zkalený / purulentní / mléčný</option>
                <option value="opalescentni" ${csfInput.appearance === 'opalescentni' ? 'selected' : ''}>Opalescentní / opalizující</option>
                <option value="xantochromni" ${csfInput.appearance === 'xantochromni' ? 'selected' : ''}>Xantochromní (žlutavý supernatant)</option>
                <option value="sanguinolentni" ${csfInput.appearance === 'sanguinolentni' ? 'selected' : ''}>Sanguinolentní (krvavý)</option>
              </select>
            </div>

            <div class="csf-input-group">
              <label>2. Počet elementů / Pleocytóza (buněk / μl, norma 0–5):</label>
              <input type="number" id="csf-in-cells" class="csf-input-num" value="${csfInput.cells}" min="0" max="50000" step="5">
            </div>

            <div class="csf-input-group">
              <label>3. Cytologický diferenciál (Převaha buněk):</label>
              <select id="csf-in-celltype" class="csf-select">
                <option value="neutrophils" ${csfInput.cellType === 'neutrophils' ? 'selected' : ''}>Polymorfonukleáry / Neutrofily (> 70 %)</option>
                <option value="mononuclears" ${csfInput.cellType === 'mononuclears' ? 'selected' : ''}>Mononukleáry / Lymfocyty (> 80 %)</option>
                <option value="mixed" ${csfInput.cellType === 'mixed' ? 'selected' : ''}>Smíšená lymfo-plazmocelulární</option>
                <option value="erythrocytes" ${csfInput.cellType === 'erythrocytes' ? 'selected' : ''}>Záplava erytrocytů / erytrofágy</option>
                <option value="normal" ${csfInput.cellType === 'normal' ? 'selected' : ''}>Normální cytologický nález</option>
              </select>
            </div>

            <div class="csf-input-group">
              <label>4. Celková bílkovina / Proteinorachie (g/l, norma 0,15–0,45):</label>
              <input type="number" id="csf-in-protein" class="csf-input-num" value="${csfInput.protein}" min="0.1" max="20.0" step="0.1">
            </div>

            <div class="csf-input-group">
              <label>5. Poměr glukóza likvor / glykémie (Q-Glu, norma > 0,6):</label>
              <input type="number" id="csf-in-glucose" class="csf-input-num" value="${csfInput.glucoseRatio}" min="0.05" max="1.0" step="0.05">
            </div>

            <div class="csf-input-group">
              <label>6. Laktát v likvoru (mmol/l, norma 1,2–2,1):</label>
              <input type="number" id="csf-in-lactate" class="csf-input-num" value="${csfInput.lactate}" min="0.5" max="20.0" step="0.1">
            </div>

            <div class="csf-input-group">
              <label>7. Oligoklonální pásy (OCB v IEF):</label>
              <select id="csf-in-ocb" class="csf-select">
                <option value="none" ${csfInput.ocb === 'none' ? 'selected' : ''}>Typ 1: Negativní (Žádné pásy v likvoru ani séru)</option>
                <option value="type2" ${csfInput.ocb === 'type2' ? 'selected' : ''}>Typ 2: Pozitivní (Pásy pouze v likvoru = intratekální syntéza)</option>
                <option value="type4" ${csfInput.ocb === 'type4' ? 'selected' : ''}>Typ 4: Zrcadlový obraz v séru i likvoru (systémová syntéza)</option>
              </select>
            </div>

          </div>
        </div>

        <!-- Pravý sloupec: Diagnostický výsledek a protokol -->
        <div class="calc-summary-panel">
          <div class="summary-sticky-card" id="csf-result-card">
            <!-- Dynamický report -->
          </div>
        </div>

      </div>
    `;
  }

  function evaluateCsf() {
    const resultCard = document.getElementById("csf-result-card");
    if (!resultCard) return;

    let matchedPattern = null;

    // Detekce SAH
    if (csfInput.appearance === "xantochromni" || csfInput.appearance === "sanguinolentni" || csfInput.cellType === "erythrocytes") {
      matchedPattern = CALCULATORS_DATA.csfPatterns.find(p => p.id === "subarachnoid_hemorrhage_csf");
    }
    // Detekce Bakteriální meningitidy (vysoký laktát, neutrofily, hypoglykorachie, vysoká bílkovina)
    else if (csfInput.lactate >= 3.5 || (csfInput.cellType === "neutrophils" && csfInput.cells > 100) || csfInput.glucoseRatio < 0.3) {
      if (csfInput.protein > 3.0 && csfInput.glucoseRatio < 0.25 && csfInput.cellType === "mixed") {
        matchedPattern = CALCULATORS_DATA.csfPatterns.find(p => p.id === "tuberculous_csf");
      } else {
        matchedPattern = CALCULATORS_DATA.csfPatterns.find(p => p.id === "bacterial_purulent");
      }
    }
    // Detekce Albuminocytologické disociace (Guillain-Barré) - vysoká bílkovina, normální počet buněk
    else if (csfInput.protein > 0.9 && csfInput.cells <= 10 && csfInput.lactate < 2.5) {
      matchedPattern = CALCULATORS_DATA.csfPatterns.find(p => p.id === "guillain_barre_csf");
    }
    // Detekce Roztroušené sklerózy (OCB Typ 2)
    else if (csfInput.ocb === "type2") {
      matchedPattern = CALCULATORS_DATA.csfPatterns.find(p => p.id === "multiple_sclerosis_csf");
    }
    // Detekce Virové meningitidy / Neuroborreliózy
    else if (csfInput.cellType === "mononuclears" || csfInput.cellType === "mixed" || csfInput.cells > 10) {
      if (csfInput.cellType === "mixed" && csfInput.protein > 0.8) {
        matchedPattern = CALCULATORS_DATA.csfPatterns.find(p => p.id === "neuroborreliosis");
      } else {
        matchedPattern = CALCULATORS_DATA.csfPatterns.find(p => p.id === "viral_aseptic");
      }
    } else {
      matchedPattern = {
        name: "Normální nález v mozkomíšním moku",
        badge: "✅ FYZIOLOGICKÝ LIKVOR",
        appearance: "Čirý, bezbarvý",
        cytology: "Do 5 elementů / μl (normocytóza)",
        protein: "0,15–0,45 g/l",
        glucose: "Poměr likvor/glykémie > 0,6",
        lactate: "1,2–2,1 mmol/l",
        etiology: ["Normální fyziologický stav nebo mimonervové onemocnění."],
        immediateTherapy: "Při trvajícím klinickém podezření na infekci/krvácení zvažte časný odběr (opakování LP za 24–48 h) nebo MRI mozku/míchy."
      };
    }

    resultCard.innerHTML = `
      <span class="summary-label">Diferenciální interpretace likvoru</span>
      <div class="summary-score-val" style="font-size: 1.3rem; margin-top: 4px;">${matchedPattern.name}</div>
      <div class="summary-badge ${matchedPattern.severity === 'critical' ? 'critical' : (matchedPattern.severity === 'severe' ? 'high' : 'medium')}">
        ${matchedPattern.badge}
      </div>

      <div class="summary-divider"></div>

      <div class="csf-pattern-details">
        <div class="detail-box pearl">
          <span class="detail-label">🎯 Klíčové laboratorní znaky:</span>
          <ul class="etiology-list" style="margin-top: 4px;">
            <li><strong>Vzhled:</strong> ${matchedPattern.appearance}</li>
            <li><strong>Cytologie:</strong> ${matchedPattern.cytology}</li>
            <li><strong>Bílkovina:</strong> ${matchedPattern.protein}</li>
            <li><strong>Laktát:</strong> ${matchedPattern.lactate}</li>
          </ul>
        </div>

        <div class="detail-box etiology" style="margin-top: 10px;">
          <span class="detail-label">🔬 Nejpravděpodobnější původci / etiologie:</span>
          <ul class="etiology-list">
            ${matchedPattern.etiology.map(e => `<li>${e}</li>`).join("")}
          </ul>
        </div>

        <div class="detail-box investigation" style="margin-top: 10px;">
          <span class="detail-label">🚨 Doporučený terapeutický postup:</span>
          <p class="investigation-text">${matchedPattern.immediateTherapy}</p>
        </div>
      </div>
    `;
  }

  function bindCsfEvents() {
    const appSelect = document.getElementById("csf-in-appearance");
    const cellsInput = document.getElementById("csf-in-cells");
    const cellTypeSelect = document.getElementById("csf-in-celltype");
    const proteinInput = document.getElementById("csf-in-protein");
    const glucoseInput = document.getElementById("csf-in-glucose");
    const lactateInput = document.getElementById("csf-in-lactate");
    const ocbSelect = document.getElementById("csf-in-ocb");

    const updateFromInputs = () => {
      if (appSelect) csfInput.appearance = appSelect.value;
      if (cellsInput) csfInput.cells = parseFloat(cellsInput.value) || 0;
      if (cellTypeSelect) csfInput.cellType = cellTypeSelect.value;
      if (proteinInput) csfInput.protein = parseFloat(proteinInput.value) || 0;
      if (glucoseInput) csfInput.glucoseRatio = parseFloat(glucoseInput.value) || 0;
      if (lactateInput) csfInput.lactate = parseFloat(lactateInput.value) || 0;
      if (ocbSelect) csfInput.ocb = ocbSelect.value;
      evaluateCsf();
    };

    [appSelect, cellTypeSelect, ocbSelect].forEach(el => {
      if (el) el.addEventListener("change", updateFromInputs);
    });

    [cellsInput, proteinInput, glucoseInput, lactateInput].forEach(el => {
      if (el) el.addEventListener("input", updateFromInputs);
    });

    // Presety
    document.querySelectorAll(".csf-preset-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const preset = btn.getAttribute("data-preset");
        if (preset === "bacterial") {
          csfInput = { appearance: "zkaleny", cells: 3500, cellType: "neutrophils", protein: 4.2, glucoseRatio: 0.15, lactate: 6.5, ocb: "none" };
        } else if (preset === "viral") {
          csfInput = { appearance: "ciry", cells: 120, cellType: "mononuclears", protein: 0.7, glucoseRatio: 0.65, lactate: 1.8, ocb: "none" };
        } else if (preset === "tbc") {
          csfInput = { appearance: "opalescentni", cells: 300, cellType: "mixed", protein: 4.8, glucoseRatio: 0.2, lactate: 4.5, ocb: "none" };
        } else if (preset === "sah") {
          csfInput = { appearance: "xantochromni", cells: 15000, cellType: "erythrocytes", protein: 1.8, glucoseRatio: 0.5, lactate: 2.8, ocb: "none" };
        } else if (preset === "ms") {
          csfInput = { appearance: "ciry", cells: 8, cellType: "mononuclears", protein: 0.45, glucoseRatio: 0.65, lactate: 1.6, ocb: "type2" };
        } else if (preset === "gbs") {
          csfInput = { appearance: "ciry", cells: 2, cellType: "normal", protein: 2.4, glucoseRatio: 0.65, lactate: 1.7, ocb: "none" };
        }

        // Aktualizace UI prvků
        if (appSelect) appSelect.value = csfInput.appearance;
        if (cellsInput) cellsInput.value = csfInput.cells;
        if (cellTypeSelect) cellTypeSelect.value = csfInput.cellType;
        if (proteinInput) proteinInput.value = csfInput.protein;
        if (glucoseInput) glucoseInput.value = csfInput.glucoseRatio;
        if (lactateInput) lactateInput.value = csfInput.lactate;
        if (ocbSelect) ocbSelect.value = csfInput.ocb;

        evaluateCsf();
      });
    });

    evaluateCsf();
  }

})();
