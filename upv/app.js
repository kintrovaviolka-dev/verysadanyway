// upv/app.js - Aplikační logika výukového subportálu mechanické ventilace

document.addEventListener("DOMContentLoaded", () => {
  // --- INICIALIZACE STAVU A DATA ---
  const data = window.UPV_DATA;
  if (!data) {
    console.error("Chyba: Odborná data UPV nebyla načtena!");
    return;
  }

  // --- HTML ELEMENTY ---
  const sidebar = document.getElementById("sidebar");
  const menuToggle = document.getElementById("menu-toggle");
  const themeToggle = document.getElementById("theme-toggle");
  const themeToggleMobile = document.getElementById("theme-toggle-mobile");
  const printCheatBtn = document.getElementById("print-cheat-btn");
  const pocketGuideMenuBtn = document.getElementById("pocket-guide-menu-btn");
  
  // Hledání
  const globalSearch = document.getElementById("global-search");
  const searchResultsDropdown = document.getElementById("search-results-dropdown");
  
  // Tlačítka menu
  const navItems = document.querySelectorAll(".nav-item:not(.print-btn-menu):not(.nav-back-root)");
  const moduleTabs = document.querySelectorAll(".module-tab");

  // --- TÉMA (DARK / LIGHT MODE) ---
  const initTheme = () => {
    const savedTheme = localStorage.getItem("upv-theme") || "dark";
    if (savedTheme === "light") {
      document.body.classList.remove("dark-theme");
      document.body.classList.add("light-theme");
    } else {
      document.body.classList.remove("light-theme");
      document.body.classList.add("dark-theme");
    }
  };

  const toggleTheme = () => {
    if (document.body.classList.contains("dark-theme")) {
      document.body.classList.remove("dark-theme");
      document.body.classList.add("light-theme");
      localStorage.setItem("upv-theme", "light");
    } else {
      document.body.classList.remove("light-theme");
      document.body.classList.add("dark-theme");
      localStorage.setItem("upv-theme", "dark");
    }
  };

  if (themeToggle) themeToggle.addEventListener("click", toggleTheme);
  if (themeToggleMobile) themeToggleMobile.addEventListener("click", toggleTheme);
  initTheme();

  // --- SIDEBAR PRO MOBILY ---
  if (menuToggle) {
    menuToggle.addEventListener("click", () => {
      sidebar.classList.toggle("active");
    });
  }

  // Kliknutí mimo sidebar na mobilu ho zavře
  document.addEventListener("click", (e) => {
    if (window.innerWidth <= 900) {
      if (!sidebar.contains(e.target) && !menuToggle.contains(e.target) && sidebar.classList.contains("active")) {
        sidebar.classList.remove("active");
      }
    }
  });

  // --- TISK TAHÁKU ---
  const triggerPrint = () => {
    window.print();
  };
  if (printCheatBtn) printCheatBtn.addEventListener("click", triggerPrint);
  if (pocketGuideMenuBtn) pocketGuideMenuBtn.addEventListener("click", triggerPrint);

  // --- NAVIGACE MEZI MODULY ---
  const switchTab = (targetId) => {
    // Odstranit aktivní třídy
    navItems.forEach(item => item.classList.remove("active"));
    moduleTabs.forEach(tab => tab.classList.remove("active"));

    // Nastavit aktivní vybrané
    const activeNavItem = document.querySelector(`.nav-item[data-target="${targetId}"]`);
    if (activeNavItem) activeNavItem.classList.add("active");

    const activeTab = document.getElementById(targetId);
    if (activeTab) {
      activeTab.classList.add("active");
      // Posun na začátek
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    // Zavřít mobilní menu
    sidebar.classList.remove("active");
    
    // Spustit specifické inicializace pro moduly, pokud jsou potřeba
    if (targetId === "modul-krivky") {
      startCurveSimulation();
    } else {
      stopCurveSimulation();
    }
    
    if (targetId === "modul-smycky") {
      updateLoopsUI();
    }

    // Překreslit MathJax rovnice po přepnutí záložky
    if (window.MathJax && typeof window.MathJax.typesetPromise === "function") {
      window.MathJax.typesetPromise();
    }
  };

  navItems.forEach(item => {
    item.addEventListener("click", () => {
      const target = item.getAttribute("data-target");
      if (target) switchTab(target);
    });
  });

  // --- GLOBÁLNÍ VYHLEDÁVÁNÍ ---
  const buildSearchIndex = () => {
    const index = [];
    
    // 1. Základy
    data.zaklady.topics.forEach(t => {
      index.push({
        title: t.title,
        text: t.content,
        target: "modul-zaklady",
        action: () => {
          switchTab("modul-zaklady");
          // Otevřít příslušný akordion
          setTimeout(() => {
            const headers = document.querySelectorAll(".accordion-header");
            headers.forEach(h => {
              if (h.querySelector("h3").textContent.trim() === t.title.trim()) {
                const item = h.parentElement;
                if (!item.classList.contains("active")) {
                  h.click();
                }
                h.scrollIntoView({ behavior: "smooth", block: "center" });
              }
            });
          }, 300);
        }
      });
    });

    // 2. Tlaky
    data.tlaky.topics.forEach(t => {
      index.push({
        title: `${t.title} (${t.abbreviation})`,
        text: t.content,
        target: "modul-tlaky",
        action: () => {
          switchTab("modul-tlaky");
          setTimeout(() => {
            const card = document.getElementById(`pressure-card-${t.id}`);
            if (card) {
              card.scrollIntoView({ behavior: "smooth", block: "center" });
              card.style.borderColor = "var(--primary)";
              card.style.boxShadow = "0 0 15px var(--primary-glow)";
              setTimeout(() => {
                card.style.borderColor = "";
                card.style.boxShadow = "";
              }, 2000);
            }
          }, 300);
        }
      });
    });

    // 3. Režimy
    data.rezimy.forEach(r => {
      index.push({
        title: `${r.name} - ${r.fullName}`,
        text: `${r.indications} ${r.advantages} ${r.disadvantages}`,
        target: "modul-rezimy",
        action: () => {
          switchTab("modul-rezimy");
          setTimeout(() => {
            openModeDetail(r);
          }, 300);
        }
      });
    });

    // 4. Asynchronie
    data.asynchronie.items.forEach(a => {
      index.push({
        title: a.name,
        text: `${a.pathology} ${a.causes} ${a.treatment}`,
        target: "modul-asynchronie",
        action: () => {
          switchTab("modul-asynchronie");
          setTimeout(() => {
            const btn = document.querySelector(`.btn-asynch-item[data-id="${a.id}"]`);
            if (btn) btn.click();
          }, 300);
        }
      });
    });

    // 5. ARDS
    data.ards.checklist.forEach(c => {
      index.push({
        title: `ARDS: ${c.title}`,
        text: `${c.target} ${c.rationale}`,
        target: "modul-ards",
        action: () => {
          switchTab("modul-ards");
          setTimeout(() => {
            const cards = document.querySelectorAll(".checklist-card");
            cards.forEach(card => {
              if (card.querySelector("h4").textContent.includes(c.title)) {
                card.scrollIntoView({ behavior: "smooth", block: "center" });
                card.style.borderColor = "var(--secondary)";
                setTimeout(() => card.style.borderColor = "", 2000);
              }
            });
          }, 300);
        }
      });
    });

    // 6. Pearls
    data.pearls.forEach(p => {
      index.push({
        title: `ICU Pearl: ${p.condition}`,
        text: `${p.result} ${p.action}`,
        target: "modul-pearls",
        action: () => {
          switchTab("modul-pearls");
          setTimeout(() => {
            const cards = document.querySelectorAll(".pearl-card");
            cards.forEach(card => {
              if (card.querySelector("h4").textContent.includes(p.condition)) {
                card.scrollIntoView({ behavior: "smooth", block: "center" });
                card.style.borderColor = "var(--accent)";
                setTimeout(() => card.style.borderColor = "", 2000);
              }
            });
          }, 300);
        }
      });
    });

    // 7. Weaning
    if (data.weaning && data.weaning.theory) {
      data.weaning.theory.forEach(t => {
        index.push({
          title: `Weaning: ${t.title}`,
          text: t.items.join(' '),
          target: "modul-weaning",
          action: () => {
            switchTab("modul-weaning");
            setTimeout(() => {
              const headers = document.querySelectorAll(".weaning-accordion .accordion-header");
              headers.forEach(h => {
                if (h.querySelector("h4").textContent.trim() === t.title.trim()) {
                  const content = h.nextElementSibling;
                  const arrow = h.querySelector(".acc-arrow");
                  content.style.display = "block";
                  arrow.textContent = "▲";
                  h.scrollIntoView({ behavior: "smooth", block: "center" });
                }
              });
            }, 300);
          }
        });
      });
    }

    return index;
  };

  const searchIndex = buildSearchIndex();

  if (globalSearch) {
    globalSearch.addEventListener("input", (e) => {
      const val = e.target.value.toLowerCase().trim();
      if (val.length < 2) {
        searchResultsDropdown.style.display = "none";
        return;
      }

      const matches = searchIndex.filter(item => 
        item.title.toLowerCase().includes(val) || 
        item.text.toLowerCase().includes(val)
      ).slice(0, 5);

      if (matches.length === 0) {
        searchResultsDropdown.innerHTML = `<div class="search-result-item text-muted">Žádné shody nenalezeny</div>`;
      } else {
        searchResultsDropdown.innerHTML = matches.map((m, idx) => `
          <div class="search-result-item" data-idx="${idx}">
            <div class="search-result-title">${m.title}</div>
            <div class="search-result-text">${m.text.replace(/[$#*\`]/g, '').substring(0, 100)}...</div>
          </div>
        `).join('');

        // Přidat click listenery
        const resultItems = searchResultsDropdown.querySelectorAll(".search-result-item");
        resultItems.forEach(item => {
          item.addEventListener("click", () => {
            const idx = parseInt(item.getAttribute("data-idx"));
            matches[idx].action();
            globalSearch.value = "";
            searchResultsDropdown.style.display = "none";
          });
        });
      }

      searchResultsDropdown.style.display = "block";
    });

    // Zavření vyhledávání kliknutím jinam
    document.addEventListener("click", (e) => {
      if (!globalSearch.contains(e.target) && !searchResultsDropdown.contains(e.target)) {
        searchResultsDropdown.style.display = "none";
      }
    });
  }

  // --- MODUL 1: INICIALIZACE TEORIE (ACCORDIONS) ---
  const initZakladyModule = () => {
    const container = document.getElementById("zaklady-accordion-container");
    if (!container) return;

    container.innerHTML = data.zaklady.topics.map(t => `
      <div class="accordion-item">
        <div class="accordion-header">
          <div class="accordion-title-block">
            <span class="accordion-icon">${t.icon}</span>
            <h3>${t.title}</h3>
          </div>
          <span class="accordion-arrow">▼</span>
        </div>
        <div class="accordion-content">
          <div class="accordion-content-inner">
            ${formatMarkdown(t.content)}
          </div>
        </div>
      </div>
    `).join('');

    // Accordion click handler
    const headers = container.querySelectorAll(".accordion-header");
    headers.forEach(h => {
      h.addEventListener("click", () => {
        const item = h.parentElement;
        const content = item.querySelector(".accordion-content");
        const isActive = item.classList.contains("active");

        // Zavřít všechny ostatní
        container.querySelectorAll(".accordion-item").forEach(otherItem => {
          if (otherItem !== item) {
            otherItem.classList.remove("active");
            otherItem.querySelector(".accordion-content").style.maxHeight = null;
          }
        });

        if (isActive) {
          item.classList.remove("active");
          content.style.maxHeight = null;
        } else {
          item.classList.add("active");
          // Nastavit max-height na výšku obsahu
          content.style.maxHeight = content.scrollHeight + "px";
        }
        
        // Překreslit MathJax rovnice po otevření
        if (window.MathJax && typeof window.MathJax.typesetPromise === "function") {
          window.MathJax.typesetPromise();
        }
      });
    });
  };

  // Pomocná funkce pro převod markdownu/LaTeXu
  function formatMarkdown(text) {
    return text
      .replace(/\n/g, '<br>')
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>');
  }

  initZakladyModule();

  // --- MODUL 2: INICIALIZACE TLAKŮ A KALKULÁTORU ---
  const initTlakyModule = () => {
    const container = document.getElementById("tlaky-cards-container");
    if (!container) return;

    container.innerHTML = data.tlaky.topics.map(t => `
      <div class="pressure-card" id="pressure-card-${t.id}">
        <div class="pressure-card-header">
          <h3>${t.title}</h3>
          <span class="pressure-badge">${t.abbreviation}</span>
        </div>
        <div class="pressure-card-body">
          <p>${formatMarkdown(t.content)}</p>
        </div>
        <div class="pressure-card-footer">
          <span class="limit-label">Bezpečný limit:</span>
          <span class="limit-val">${t.safetyLimit}</span>
        </div>
      </div>
    `).join('');

    // Logika kalkulátoru
    const calcVt = document.getElementById("calc-vt");
    const calcPip = document.getElementById("calc-pip");
    const calcPplat = document.getElementById("calc-pplat");
    const calcPeep = document.getElementById("calc-peep");

    const resDp = document.getElementById("res-dp");
    const resCstat = document.getElementById("res-cstat");
    
    const resDpCard = document.getElementById("res-dp-card");
    const resCstatCard = document.getElementById("res-cstat-card");

    const resDpStatus = document.getElementById("res-dp-status");
    const resCstatStatus = document.getElementById("res-cstat-status");

    const runCalculator = () => {
      const vt = parseFloat(calcVt.value) || 0;
      const pip = parseFloat(calcPip.value) || 0;
      const pplat = parseFloat(calcPplat.value) || 0;
      const peep = parseFloat(calcPeep.value) || 0;

      // 1. Driving pressure
      const dp = pplat - peep;
      resDp.textContent = `${dp} cmH₂O`;

      if (dp < 15) {
        resDpCard.style.borderColor = "var(--secondary)";
        resDpStatus.textContent = "V normě (<15)";
        resDpStatus.className = "res-status status-ok";
      } else {
        resDpCard.style.borderColor = "var(--danger)";
        resDpStatus.textContent = "Vysoké riziko (≥15)";
        resDpStatus.className = "res-status status-danger";
      }

      // 2. Statická compliance
      if (pplat - peep > 0) {
        const cstat = vt / (pplat - peep);
        resCstat.textContent = `${cstat.toFixed(1)} ml/cmH₂O`;

        if (cstat >= 50) {
          resCstatCard.style.borderColor = "var(--secondary)";
          resCstatStatus.textContent = "Normální (50–80)";
          resCstatStatus.className = "res-status status-ok";
        } else if (cstat >= 30) {
          resCstatCard.style.borderColor = "var(--accent)";
          resCstatStatus.textContent = "Snížená (30–50)";
          resCstatStatus.className = "res-status status-warning";
        } else {
          resCstatCard.style.borderColor = "var(--danger)";
          resCstatStatus.textContent = "Kriticky tuhá plíce (<30)";
          resCstatStatus.className = "res-status status-danger";
        }
      } else {
        resCstat.textContent = "N/A";
        resCstatStatus.textContent = "Neplatné hodnoty";
        resCstatStatus.className = "res-status status-danger";
      }
    };

    [calcVt, calcPip, calcPplat, calcPeep].forEach(input => {
      input.addEventListener("input", runCalculator);
    });

    runCalculator();
  };

  initTlakyModule();

  // --- MODUL 3: INICIALIZACE VENTILAČNÍCH REŽIMŮ ---
  const initRezimyModule = () => {
    const tableBody = document.getElementById("modes-table-body");
    const modal = document.getElementById("mode-detail-modal");
    const modalClose = document.getElementById("modal-close-btn");
    
    if (!tableBody || !modal) return;

    const renderTable = (filterType = "all") => {
      let filteredData = data.rezimy;
      if (filterType === "Řízená ventilace") {
        filteredData = data.rezimy.filter(r => r.type.includes("Řízená"));
      } else if (filterType === "Spontánní") {
        filteredData = data.rezimy.filter(r => r.type.includes("Spontánní") || r.type.includes("Smíšený"));
      } else if (filterType === "Neinvazivní") {
        filteredData = data.rezimy.filter(r => r.name === "NIV" || r.name === "HFNC" || r.name === "CPAP");
      }

      tableBody.innerHTML = filteredData.map((r, idx) => `
        <tr>
          <td class="mode-name-col">${r.name}</td>
          <td>${r.type}</td>
          <td>${r.mechanics.trigger}</td>
          <td>${r.mechanics.limit}</td>
          <td>${r.mechanics.cycle}</td>
          <td>
            <button class="btn btn-secondary btn-sm btn-mode-detail" data-idx="${idx}">Detail</button>
          </td>
        </tr>
      `).join('');

      // Detail buttons click
      const detailBtns = tableBody.querySelectorAll(".btn-mode-detail");
      detailBtns.forEach(btn => {
        btn.addEventListener("click", () => {
          const idx = parseInt(btn.getAttribute("data-idx"));
          openModeDetail(filteredData[idx]);
        });
      });
    };

    // Otevřít detail režimu
    window.openModeDetail = (mode) => {
      document.getElementById("modal-mode-name").textContent = mode.name;
      document.getElementById("modal-mode-fullname").textContent = mode.fullName;
      document.getElementById("modal-trigger").innerHTML = formatMarkdown(mode.mechanics.trigger);
      document.getElementById("modal-limit").innerHTML = formatMarkdown(mode.mechanics.limit);
      document.getElementById("modal-cycle").innerHTML = formatMarkdown(mode.mechanics.cycle);
      document.getElementById("modal-params").innerHTML = formatMarkdown(mode.standardParams);
      document.getElementById("modal-indications").innerHTML = formatMarkdown(mode.indications);
      document.getElementById("modal-advantages").innerHTML = formatMarkdown(mode.advantages);
      document.getElementById("modal-disadvantages").innerHTML = formatMarkdown(mode.disadvantages);

      modal.classList.add("active");

      if (window.MathJax && typeof window.MathJax.typesetPromise === "function") {
        window.MathJax.typesetPromise([modal]);
      }
    };

    // Zavřít modal
    if (modalClose) {
      modalClose.addEventListener("click", () => {
        modal.classList.remove("active");
      });
    }

    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.classList.remove("active");
      }
    });

    // Filtry
    const filterBtns = document.querySelectorAll(".btn-filter");
    filterBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        filterBtns.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        const filterVal = btn.getAttribute("data-filter");
        renderTable(filterVal);
      });
    });

    renderTable();
  };

  initRezimyModule();

  // --- MODUL 4: SIMULÁTOR KŘIVEK (CANVAS A FYZIKÁLNÍ MODEL) ---
  let curveAnimFrameId = null;
  let sweepX = 0;
  const sweepSpeed = 2.5; // pixely za snímek

  // Canvasy
  const canvasP = document.getElementById("canvas-pressure");
  const canvasF = document.getElementById("canvas-flow");
  const canvasV = document.getElementById("canvas-volume");

  // Knoflíky plicní mechaniky u simulátoru
  const knobR = document.getElementById("knob-r");
  const knobC = document.getElementById("knob-c");
  const knobRVal = document.getElementById("knob-r-val");
  const knobCVal = document.getElementById("knob-c-val");

  // Nové ovládací prvky ventilátoru
  const knobRR = document.getElementById("knob-rr");
  const knobRRVal = document.getElementById("knob-rr-val");
  const knobFiO2 = document.getElementById("knob-fio2");
  const knobFiO2Val = document.getElementById("knob-fio2-val");
  const knobVT = document.getElementById("knob-vt");
  const knobVTVal = document.getElementById("knob-vt-val");
  const knobPinsp = document.getElementById("knob-pinsp");
  const knobPinspVal = document.getElementById("knob-pinsp-val");
  const knobPEEP = document.getElementById("knob-peep");
  const knobPEEPVal = document.getElementById("knob-peep-val");

  // --- LOGIKA VIRTUÁLNÍHO MONITORU (ASTRUP & OBĚH) ---
  const updatePatientMonitor = () => {
    const mode = document.querySelector('input[name="sim-mode"]:checked').value;
    const state = document.getElementById("sim-state").value;
    
    const R = knobR ? parseFloat(knobR.value) : 10;
    const C = knobC ? parseFloat(knobC.value) : 50;
    const rr = knobRR ? parseFloat(knobRR.value) : 14;
    const fio2 = knobFiO2 ? parseFloat(knobFiO2.value) / 100 : 0.40;
    const peep = knobPEEP ? parseFloat(knobPEEP.value) : 8;

    let vt = 450;
    let pinsp = 16;
    let pplat = peep + (vt / C);
    let pip = pplat + R * (vt / 1000 / 1.0);

    if (mode === "VCV") {
      vt = knobVT ? parseFloat(knobVT.value) : 450;
      pplat = peep + (vt / C);
      const flowRate = vt / 1000 / 1.0; // předpokládáme T_flow = 1.0s
      pip = pplat + R * flowRate;
    } else {
      pinsp = knobPinsp ? parseFloat(knobPinsp.value) : 16;
      pip = peep + pinsp;
      const tau = (R * C) / 1000;
      // Pro PCV: Vt závisí na compliance, tlaku a časové konstantě
      const vtAchieved = C * pinsp * (1 - Math.exp(-1.33 / (tau || 0.1)));
      vt = vtAchieved;
      pplat = peep + (vt / C);
    }

    // Korekce PEEP při air trappingu (Auto-PEEP)
    let adjustedPEEP = peep;
    if (state === "autopeep") {
      adjustedPEEP = peep + 4; 
    }

    // 1. Alveolární ventilace Va (norma: 4.2 L/min)
    const V_D = 150; // mrtvý prostor
    const V_A = Math.max(100, (vt - V_D) * rr); // ml/min
    const V_A_normal = 4200;

    // 2. paCO2 v mmHg (norma: 40)
    let pco2 = 40 * (V_A_normal / V_A);
    pco2 = Math.min(100, Math.max(15, pco2));

    // 3. pH krve (norma: 7.40)
    const ph = 7.40 - 0.008 * (pco2 - 40);

    // 4. paO2 v mmHg (norma: 90)
    const PAO2 = fio2 * 713 - pco2 / 0.8;
    // Plicní zkrat: závisí na compliance (atelektázy) a PEEP (nábor)
    let shunt = 0.05 + 0.35 * Math.exp(-adjustedPEEP / 6) * (50 / C);
    shunt = Math.min(0.8, Math.max(0.02, shunt));
    let po2 = PAO2 * (1 - shunt);
    po2 = Math.min(150, Math.max(20, po2));

    // 5. SpO2 saturace v % (Hillova rovnice)
    let spo2 = 100 * (Math.pow(po2, 3) + 150 * po2) / (Math.pow(po2, 3) + 150 * po2 + 23400);
    spo2 = Math.min(100, Math.max(10, spo2));

    // 6. Hemodynamika
    // Srdeční výdej CO (norma: 5.4 L/min)
    let co = 6.0 - 0.12 * (adjustedPEEP - 5) - 0.04 * (pplat - 15);
    co = Math.min(8.0, Math.max(2.0, co));

    // Střední arteriální tlak MAP (norma: 85)
    let map = 85 - 1.8 * (adjustedPEEP - 5) - 0.5 * (pplat - 15);
    map = Math.min(120, Math.max(45, map));

    // Srdeční frekvence HR (norma: 75 bpm)
    let hr = 75;
    if (map < 80) {
      hr += 1.5 * (80 - map); // baroreflexní tachykardie
    }
    hr = Math.min(150, Math.max(50, hr));

    // Zobrazení hodnot na virtuálním monitoru
    const elPh = document.getElementById("mon-ph");
    const elPco2 = document.getElementById("mon-pco2");
    const elPo2 = document.getElementById("mon-po2");
    const elSpo2 = document.getElementById("mon-spo2");
    const elHr = document.getElementById("mon-hr");
    const elMap = document.getElementById("mon-map");
    const elCo = document.getElementById("mon-co");

    if (elPh) elPh.textContent = ph.toFixed(2);
    if (elPco2) elPco2.textContent = pco2.toFixed(0);
    if (elPo2) elPo2.textContent = po2.toFixed(0);
    if (elSpo2) elSpo2.textContent = spo2.toFixed(0);
    if (elHr) elHr.textContent = hr.toFixed(0);
    if (elMap) elMap.textContent = map.toFixed(0);
    if (elCo) elCo.textContent = co.toFixed(1);

    // Nastavení barevných kódů stavů
    setCardStatus("ph", ph, 7.35, 7.45, 7.20, 7.55);
    setCardStatus("pco2", pco2, 35, 45, 25, 60);
    setCardStatus("po2", po2, 75, 120, 55, 150);
    setCardStatus("spo2", spo2, 94, 100, 88, 100);
    setCardStatus("hr", hr, 60, 95, 45, 120);
    setCardStatus("map", map, 70, 105, 65, 120);
    setCardStatus("co", co, 4.5, 7.0, 3.5, 8.0);

    // Alarmová zóna
    const alarmZone = document.getElementById("monitor-alarm-zone");
    const alarmBody = document.getElementById("alarm-msg-body");

    let alarmActive = false;
    let alarmMsg = "";

    if (ph < 7.20) {
      alarmActive = true;
      alarmMsg = "Kritická respirační acidóza! Navyšte minutovou ventilaci.";
    } else if (ph > 7.55) {
      alarmActive = true;
      alarmMsg = "Kritická respirační alkalóza! Snižte dechovou frekvenci/objem.";
    } else if (spo2 < 88) {
      alarmActive = true;
      alarmMsg = "Těžká hypoxémie! Plicní kolaps. Navyšte PEEP nebo FiO₂.";
    } else if (map < 65) {
      alarmActive = true;
      alarmMsg = "Oběhová deprese způsobená PEEP! MAP < 65 mmHg.";
    } else if (pip > 35) {
      alarmActive = true;
      alarmMsg = "Vysoký inspirační tlak! PIP > 35 cmH₂O.";
    }

    if (alarmZone && alarmBody) {
      if (alarmActive) {
        alarmBody.textContent = alarmMsg;
        alarmZone.style.display = "block";
      } else {
        alarmZone.style.display = "none";
      }
    }
  };

  const setCardStatus = (id, val, normalMin, normalMax, critMin, critMax) => {
    const card = document.getElementById(`mon-${id}-card`);
    const valText = document.getElementById(`mon-${id}`);
    const dot = document.getElementById(`mon-${id}-dot`);

    if (!card || !valText || !dot) return;

    // Resetovat třídy
    valText.className = "mon-value";
    dot.className = "mon-status-dot";

    if (val >= normalMin && val <= normalMax) {
      valText.classList.add("text-green");
      dot.classList.add("bg-green");
    } else if (val < critMin || val > critMax) {
      valText.classList.add("text-red");
      dot.classList.add("bg-red");
    } else {
      valText.classList.add("text-orange");
      dot.classList.add("bg-orange");
    }
  };

  // Posluchače změn posuvníků
  if (knobR && knobRVal) {
    knobR.addEventListener("input", (e) => {
      knobRVal.textContent = `${e.target.value} cmH₂O/L/s`;
      updatePatientMonitor();
    });
  }
  if (knobC && knobCVal) {
    knobC.addEventListener("input", (e) => {
      knobCVal.textContent = `${e.target.value} ml/cmH₂O`;
      updatePatientMonitor();
    });
  }
  if (knobRR && knobRRVal) {
    knobRR.addEventListener("input", (e) => {
      knobRRVal.textContent = `${e.target.value} /min`;
      updatePatientMonitor();
    });
  }
  if (knobFiO2 && knobFiO2Val) {
    knobFiO2.addEventListener("input", (e) => {
      knobFiO2Val.textContent = `${e.target.value} %`;
      updatePatientMonitor();
    });
  }
  if (knobVT && knobVTVal) {
    knobVT.addEventListener("input", (e) => {
      knobVTVal.textContent = `${e.target.value} ml`;
      updatePatientMonitor();
    });
  }
  if (knobPinsp && knobPinspVal) {
    knobPinsp.addEventListener("input", (e) => {
      knobPinspVal.textContent = `${e.target.value} cmH₂O`;
      updatePatientMonitor();
    });
  }
  if (knobPEEP && knobPEEPVal) {
    knobPEEP.addEventListener("input", (e) => {
      knobPEEPVal.textContent = `${e.target.value} cmH₂O`;
      updatePatientMonitor();
    });
  }

  // Přepínání posuvníků VCV vs PCV
  const modeRadios = document.querySelectorAll('input[name="sim-mode"]');
  const vtWrapper = document.getElementById("control-vt-wrapper");
  const pinspWrapper = document.getElementById("control-pinsp-wrapper");

  modeRadios.forEach(radio => {
    radio.addEventListener("change", () => {
      const mode = document.querySelector('input[name="sim-mode"]:checked').value;
      if (mode === "VCV") {
        if (vtWrapper) vtWrapper.style.display = "block";
        if (pinspWrapper) pinspWrapper.style.display = "none";
      } else {
        if (vtWrapper) vtWrapper.style.display = "none";
        if (pinspWrapper) pinspWrapper.style.display = "block";
      }
      
      const state = simStateSelect ? simStateSelect.value : "normal";
      updateSimStateInfo(mode, state);
      updatePatientMonitor();
    });
  });

  const updateSimStateInfo = (mode, state) => {
    const desc = data.krivky.categories[mode === "VCV" ? 0 : 2] || data.krivky.categories[0];
    const stateData = data.krivky.categories.find(c => c.name.includes("Tlak"))?.states[state] || 
                      data.krivky.categories.find(c => c.name.includes("Průtok"))?.states[state];

    if (stateData) {
      simStateTitle.textContent = stateData.title;
      simStateDesc.textContent = stateData.desc;
    }
  };

  // Model dýchacího cyklu pro kreslení
  const getSimulatedValues = (mode, state, R, C, t) => {
    // Načíst frekvenci z posuvníku pro výpočet periody dechu
    const rr = knobRR ? parseFloat(knobRR.value) : 14;
    const T_total = 60 / rr; // celková délka dechového cyklu
    const T_insp = T_total / 3; // poměr I:E = 1:2
    
    // Normalizace času v cyklu t (0 až T_total)
    const tc = t % T_total;
    
    // Načíst PEEP a tlakové/objemové parametry z posuvníků
    let PEEP = knobPEEP ? parseFloat(knobPEEP.value) : 8;
    let VT_set = knobVT ? parseFloat(knobVT.value) : 450;
    let Pinsp = knobPinsp ? parseFloat(knobPinsp.value) : 16;
    let PIP_target = PEEP + Pinsp;
    
    // Úprava parametrů podle patologického stavu
    if (state === "autopeep") {
      PEEP = PEEP + 4; 
    }

    // Časové konstanty
    const tau_insp = (R * C) / 1000; 
    const tau_exp = (R * C) / 1000;

    let p = PEEP;
    let f = 0;
    let v = 0;

    if (mode === "VCV") {
      // 1. OBJEMOVĚ ŘÍZENÁ VENTILACE (VCV)
      const T_pause = T_insp * 0.25; // 25% času nádechu je pauza
      const T_flow = T_insp - T_pause;
      
      if (tc < T_flow) {
        // A. Konstantní průtok
        const flow_rate = (VT_set / 1000) / T_flow;
        f = flow_rate * 60;
        v = (tc / T_flow) * VT_set;
        p = PEEP + (v / C) + (R * flow_rate);
      } 
      else if (tc < T_insp) {
        // B. Inspirační pauza
        f = 0;
        v = VT_set;
        p = PEEP + (v / C);
      } 
      else {
        // C. Exponenciální výdech
        const te = tc - T_insp;
        
        if (state === "leak") {
          const leak_fraction = 0.7;
          v = VT_set * (leak_fraction + (1 - leak_fraction) * Math.exp(-te / tau_exp));
          f = -(VT_set * (1 - leak_fraction) / tau_exp / 1000) * 60 * Math.exp(-te / tau_exp);
        } else if (state === "autopeep") {
          v = VT_set * Math.exp(-te / (tau_exp * 1.5)) + 40;
          f = -(VT_set / (tau_exp * 1.5) / 1000) * 60 * Math.exp(-te / (tau_exp * 1.5));
        } else {
          v = VT_set * Math.exp(-te / tau_exp);
          f = -(VT_set / tau_exp / 1000) * 60 * Math.exp(-te / tau_exp);
        }
        
        p = PEEP + v / C;
      }
    } 
    else {
      // 2. TLAKOVĚ ŘÍZENÁ VENTILACE (PCV)
      if (tc < T_insp) {
        // A. Nádech (obdélníkový tlak)
        p = PEEP + Pinsp;
        
        // Decelerační průtok
        const f_peak = (Pinsp / R) * 60;
        f = f_peak * Math.exp(-tc / tau_insp);
        
        // Exponenciální nárůst objemu
        const max_v = C * Pinsp;
        v = max_v * (1 - Math.exp(-tc / tau_insp));
      } 
      else {
        // B. Výdech
        const te = tc - T_insp;
        p = PEEP;
        
        const v_end_insp = C * Pinsp * (1 - Math.exp(-T_insp / tau_insp));
        
        if (state === "leak") {
          const leak_fraction = 0.7;
          v = v_end_insp * (leak_fraction + (1 - leak_fraction) * Math.exp(-te / tau_exp));
          f = -(v_end_insp * (1 - leak_fraction) / tau_exp / 1000) * 60 * Math.exp(-te / tau_exp);
        } else if (state === "autopeep") {
          v = v_end_insp * Math.exp(-te / (tau_exp * 1.5)) + 40;
          f = -(v_end_insp / (tau_exp * 1.5) / 1000) * 60 * Math.exp(-te / (tau_exp * 1.5));
        } else {
          v = v_end_insp * Math.exp(-te / tau_exp);
          f = -(v_end_insp / tau_exp / 1000) * 60 * Math.exp(-te / tau_exp);
        }
      }
    }

    return { pressure: p, flow: f, volume: v };
  };

  const drawSweepLine = (ctx, x) => {
    ctx.fillStyle = "#0c0d0f";
    ctx.fillRect(x, 0, 15, ctx.canvas.height);
    ctx.fillStyle = "rgba(255, 255, 255, 0.4)";
    ctx.fillRect(x, 0, 2, ctx.canvas.height);
  };

  const runSimulationFrame = () => {
    if (!canvasP || !canvasF || !canvasV) return;

    const ctxP = canvasP.getContext("2d");
    const ctxF = canvasF.getContext("2d");
    const ctxV = canvasV.getContext("2d");

    const w = canvasP.width;
    const h = canvasP.height;

    const mode = document.querySelector('input[name="sim-mode"]:checked').value;
    const state = document.getElementById("sim-state").value;
    const R = parseFloat(knobR.value);
    const C = parseFloat(knobC.value);

    // Kreslíme 4 dechové sekundy na celou šířku obrazovky
    const t = (sweepX / w) * 4.0;
    const values = getSimulatedValues(mode, state, R, C, t);

    // Kreslení Paw (tlak)
    const yP = h - (values.pressure / 45) * h;
    ctxP.strokeStyle = getComputedStyle(document.body).getPropertyValue('--wave-pressure').trim() || "#e2be12";
    ctxP.lineWidth = 2.5;
    ctxP.beginPath();
    ctxP.moveTo(sweepX - sweepSpeed, canvasP.lastY || yP);
    ctxP.lineTo(sweepX, yP);
    ctxP.stroke();
    canvasP.lastY = yP;
    drawSweepLine(ctxP, sweepX);

    // Kreslení Flow (průtok)
    const yF = h / 2 - (values.flow / 180) * h;
    ctxF.strokeStyle = getComputedStyle(document.body).getPropertyValue('--wave-flow').trim() || "#10b981";
    ctxF.lineWidth = 2.5;
    ctxF.beginPath();
    ctxF.moveTo(sweepX - sweepSpeed, canvasF.lastY || yF);
    ctxF.lineTo(sweepX, yF);
    ctxF.stroke();
    canvasF.lastY = yF;
    
    ctxF.strokeStyle = "rgba(255,255,255,0.06)";
    ctxF.lineWidth = 1;
    ctxF.beginPath();
    ctxF.moveTo(sweepX, h/2);
    ctxF.lineTo(sweepX + sweepSpeed, h/2);
    ctxF.stroke();
    drawSweepLine(ctxF, sweepX);

    // Kreslení Volume (objem)
    const yV = h - (values.volume / 800) * h;
    ctxV.strokeStyle = getComputedStyle(document.body).getPropertyValue('--wave-volume').trim() || "#0ea5e9";
    ctxV.lineWidth = 2.5;
    ctxV.beginPath();
    ctxV.moveTo(sweepX - sweepSpeed, canvasV.lastY || yV);
    ctxV.lineTo(sweepX, yV);
    ctxV.stroke();
    canvasV.lastY = yV;
    drawSweepLine(ctxV, sweepX);

    // Číselné texty monitoru (pravidelný update)
    if (sweepX % 30 === 0) {
      const peep = knobPEEP ? parseFloat(knobPEEP.value) : 8;
      const vt_set = knobVT ? parseFloat(knobVT.value) : 450;
      const pinsp = knobPinsp ? parseFloat(knobPinsp.value) : 16;

      let pip, pplat;
      if (mode === "VCV") {
        pplat = peep + (vt_set / C);
        const flowRate = vt_set / 1000 / 1.0;
        pip = pplat + R * flowRate;
      } else {
        pip = peep + pinsp;
        const tau = (R * C) / 1000;
        const vtAchieved = C * pinsp * (1 - Math.exp(-1.33 / (tau || 0.1)));
        pplat = peep + (vtAchieved / C);
      }
      
      if (state === "autopeep") {
        pplat += 4;
        pip += 4;
      }
      
      document.getElementById("num-pip").textContent = `PIP: ${pip.toFixed(0)} | Pplat: ${pplat.toFixed(0)}`;
      document.getElementById("num-flow").textContent = `Peak Exp Flow: ${values.flow < 0 ? values.flow.toFixed(0) : '-45'}`;
      document.getElementById("num-volume").textContent = `V_Te: ${values.volume > 20 ? values.volume.toFixed(0) : '0'} ml`;
    }

    sweepX += sweepSpeed;
    if (sweepX >= w) {
      sweepX = 0;
      ctxP.clearRect(0,0,w,h);
      ctxF.clearRect(0,0,w,h);
      ctxV.clearRect(0,0,w,h);
      
      ctxP.fillStyle = "#0c0d0f"; ctxP.fillRect(0,0,w,h);
      ctxF.fillStyle = "#0c0d0f"; ctxF.fillRect(0,0,w,h);
      ctxV.fillStyle = "#0c0d0f"; ctxV.fillRect(0,0,w,h);
      
      canvasP.lastY = null;
      canvasF.lastY = null;
      canvasV.lastY = null;
    }

    curveAnimFrameId = requestAnimationFrame(runSimulationFrame);
  };

  const startCurveSimulation = () => {
    if (curveAnimFrameId) return;
    sweepX = 0;
    
    [canvasP, canvasF, canvasV].forEach(c => {
      if (c) {
        const ctx = c.getContext("2d");
        ctx.fillStyle = "#0c0d0f";
        ctx.fillRect(0, 0, c.width, c.height);
      }
    });

    updatePatientMonitor(); // Inicializovat monitor
    runSimulationFrame();
  };

  const stopCurveSimulation = () => {
    if (curveAnimFrameId) {
      cancelAnimationFrame(curveAnimFrameId);
      curveAnimFrameId = null;
    }
  };

  // Reakce na změnu stavu v simulátoru
  const simStateSelect = document.getElementById("sim-state");
  const simStateTitle = document.getElementById("sim-state-title");
  const simStateDesc = document.getElementById("sim-state-desc");

  if (simStateSelect) {
    simStateSelect.addEventListener("change", (e) => {
      const state = e.target.value;
      const mode = document.querySelector('input[name="sim-mode"]:checked').value;
      
      if (state === "resistance") {
        knobR.value = 25;
        knobC.value = 50;
      } else if (state === "compliance") {
        knobR.value = 10;
        knobC.value = 20;
      } else if (state === "autopeep") {
        knobR.value = 20;
        knobC.value = 60;
      } else {
        knobR.value = 10;
        knobC.value = 50;
      }

      knobR.dispatchEvent(new Event('input'));
      knobC.dispatchEvent(new Event('input'));
      
      updateSimStateInfo(mode, state);
      updatePatientMonitor();
    });
  }

  // Inicializace monitoru při načtení
  updatePatientMonitor();

  // --- MODUL 5: VENTILAČNÍ SMYČKY (SVG KRESLENÍ) ---
  const loopTypeSelect = document.getElementById("loop-type-select");
  const loopStateBtnContainer = document.getElementById("loop-state-btn-container");
  const loopStateTitle = document.getElementById("loop-state-title");
  const loopStateDesc = document.getElementById("loop-state-desc");
  const loopSvgPath = document.getElementById("svg-loop-path");
  const loopRefPath = document.getElementById("svg-ref-path");

  let currentLoopType = "pv";
  let currentLoopState = "normal";

  const updateLoopsUI = () => {
    currentLoopType = loopTypeSelect.value;
    
    // Najít data pro vybranou smyčku
    const loopData = data.smycky.topics.find(t => 
      currentLoopType === "pv" ? t.name.includes("Tlak") : t.name.includes("Průtok")
    );

    document.getElementById("loop-display-title").textContent = loopData.name;

    // Vygenerovat tlačítka stavů
    loopStateBtnContainer.innerHTML = Object.keys(loopData.states).map(stateKey => `
      <button class="btn-loop-state ${stateKey === currentLoopState ? 'active' : ''}" data-state="${stateKey}">
        ${loopData.states[stateKey].title}
      </button>
    `).join('');

    // Click handler pro stavy
    const stateBtns = loopStateBtnContainer.querySelectorAll(".btn-loop-state");
    stateBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        stateBtns.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        currentLoopState = btn.getAttribute("data-state");
        drawLoop(loopData.states[currentLoopState]);
      });
    });

    // Vykreslit výchozí smyčku
    if (loopData.states[currentLoopState]) {
      drawLoop(loopData.states[currentLoopState]);
    } else {
      currentLoopState = "normal";
      drawLoop(loopData.states.normal);
    }
  };

  const drawLoop = (stateObj) => {
    loopStateTitle.textContent = stateObj.title;
    loopStateDesc.textContent = stateObj.desc;

    // Generování SVG cest pro smyčky
    let dPath = "";
    let dRef = "";

    // Kreslení os a mřížky
    const svgGrid = document.getElementById("svg-grid");
    const svgAxes = document.getElementById("svg-axes");
    
    // Nakreslit mřížku
    let gridHTML = "";
    for (let i = 50; i < 450; i += 50) {
      gridHTML += `<line x1="${i}" y1="50" x2="${i}" y2="350" stroke="rgba(255,255,255,0.03)" stroke-width="1" />`;
      gridHTML += `<line x1="50" y1="${i}" x2="450" y2="${i}" stroke="rgba(255,255,255,0.03)" stroke-width="1" />`;
    }
    svgGrid.innerHTML = gridHTML;

    // Nakreslit osy
    svgAxes.innerHTML = `
      <line x1="50" y1="350" x2="450" y2="350" stroke="var(--text-muted)" stroke-width="2" />
      <line x1="50" y1="50" x2="50" y2="350" stroke="var(--text-muted)" stroke-width="2" />
    `;

    // Skrýt inflexní body standardně
    document.getElementById("svg-point-lip").style.display = "none";

    if (currentLoopType === "pv") {
      // TLAK - OBJEMOVÁ SMYČKA (Osa X: Tlak, Osa Y: Objem)
      // Normal: elipsa zkosená pod úhlem
      dRef = "M 100,350 C 130,280 250,150 300,150 C 270,180 180,300 100,350";
      
      switch (currentLoopState) {
        case "normal":
          dPath = "M 100,350 C 130,280 250,150 300,150 C 270,180 180,300 100,350";
          break;
        case "overdistension":
          // Bird beak: plochý hrot na konci
          dPath = "M 100,350 C 130,280 250,180 300,180 L 420,185 C 330,195 180,300 100,350";
          break;
        case "recruitment":
          // Inflexní bod na začátku (S-křivka)
          dPath = "M 100,350 C 180,350 200,200 320,150 C 260,180 180,300 100,350";
          // Zobrazit dolní inflexní bod (LIP)
          const lip = document.getElementById("svg-point-lip");
          lip.setAttribute("cx", "190");
          lip.setAttribute("cy", "275");
          lip.style.display = "block";
          break;
        case "leak":
          // Smyčka se nevrací do nuly
          dPath = "M 100,350 C 130,280 250,150 300,150 C 270,180 200,280 200,280 L 200,350";
          break;
        case "restriction":
          // Velmi plochá smyčka (nízká compliance)
          dPath = "M 100,350 C 150,330 280,260 320,260 C 280,275 180,330 100,350";
          break;
      }
      
      document.getElementById("svg-axis-x-label").textContent = "Tlak (cmH₂O)";
      document.getElementById("svg-axis-y-label").textContent = "Objem (ml)";
      
    } else {
      // PRŮTOK - OBJEMOVÁ SMYČKA (Osa X: Objem, Osa Y: Průtok)
      // Osa Y prochází středem (střed je 200)
      svgAxes.innerHTML += `
        <line x1="50" y1="200" x2="450" y2="200" stroke="rgba(255,255,255,0.15)" stroke-dasharray="3,3" />
      `;

      dRef = "M 100,200 C 150,120 280,120 300,200 C 250,280 150,280 100,200";

      switch (currentLoopState) {
        case "normal":
          dPath = "M 100,200 C 150,120 280,120 300,200 C 250,280 150,280 100,200";
          break;
        case "obstruction":
          // Prohnuté expirium (scooped)
          dPath = "M 100,200 C 150,120 280,120 300,200 C 270,240 220,245 100,200";
          break;
        case "airtrapping":
          // Výdech neskončí na nule
          dPath = "M 100,200 C 150,120 280,120 300,200 C 250,280 180,260 180,260 L 180,200";
          break;
      }

      document.getElementById("svg-axis-x-label").textContent = "Objem (ml)";
      document.getElementById("svg-axis-y-label").textContent = "Průtok (L/min)";
    }

    loopSvgPath.setAttribute("d", dPath);
    loopRefPath.setAttribute("d", dRef);
  };

  if (loopTypeSelect) {
    loopTypeSelect.addEventListener("change", updateLoopsUI);
  }

  // Tooltip pro smyčky
  const loopSvg = document.getElementById("loop-svg");
  const loopTooltip = document.getElementById("loop-tooltip");

  if (loopSvg && loopTooltip) {
    loopSvg.addEventListener("mousemove", (e) => {
      const rect = loopSvg.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      // Propojit koordináty se smysluplnou hodnotou
      let valX = 0;
      let valY = 0;
      
      if (currentLoopType === "pv") {
        valX = Math.round((x / rect.width) * 50); // Odhad tlaku 0-50
        valY = Math.round((1 - y / rect.height) * 800); // Odhad objemu 0-800
        
        loopTooltip.innerHTML = `<strong>Tlak:</strong> ${valX} cmH₂O<br><strong>Objem:</strong> ${valY} ml`;
      } else {
        valX = Math.round((x / rect.width) * 800); // Odhad objemu
        valY = Math.round(((rect.height / 2 - y) / (rect.height / 2)) * 80); // Odhad průtoku -80 až +80
        
        loopTooltip.innerHTML = `<strong>Objem:</strong> ${valX} ml<br><strong>Průtok:</strong> ${valY} L/min`;
      }
      
      loopTooltip.style.left = `${e.clientX - rect.left + 15}px`;
      loopTooltip.style.top = `${e.clientY - rect.top + 15}px`;
      loopTooltip.style.display = "block";
    });

    loopSvg.addEventListener("mouseleave", () => {
      loopTooltip.style.display = "none";
    });
  }

  // --- MODUL 6: INICIALIZACE ASYNCHRONIÍ ---
  const initAsynchronieModule = () => {
    const listContainer = document.getElementById("asynchrony-list");
    const detailPanel = document.getElementById("asynchrony-detail-panel");
    if (!listContainer || !detailPanel) return;

    // Vykreslit boční menu asynchronií
    listContainer.innerHTML = data.asynchronie.items.map((item, idx) => `
      <button class="btn-asynch-item ${idx === 0 ? 'active' : ''}" data-id="${item.id}">
        ${item.name}
      </button>
    `).join('');

    const renderAsynchronyDetail = (asynchId) => {
      const asynch = data.asynchronie.items.find(item => item.id === asynchId);
      if (!asynch) return;

      // Naplnit texty
      document.getElementById("asynch-title").textContent = asynch.name;
      
      // Určit badge podle typu asynchronie
      const badge = document.getElementById("asynch-badge");
      if (asynch.id.includes("trigger")) {
        badge.textContent = "Triggering vada";
        badge.className = "badge badge-danger";
      } else if (asynch.id.includes("flow")) {
        badge.textContent = "Flow dysbalance";
        badge.className = "badge badge-danger";
      } else {
        badge.textContent = "Cyklování / Jiné";
        badge.className = "badge badge-danger";
      }

      document.getElementById("asynch-monitor-desc").innerHTML = formatMarkdown(asynch.monitor.desc);
      document.getElementById("asynch-pathology-text").innerHTML = formatMarkdown(asynch.pathology);
      document.getElementById("asynch-causes-text").innerHTML = formatMarkdown(asynch.causes);
      document.getElementById("asynch-action-text").innerHTML = formatMarkdown(asynch.treatment);

      if (window.MathJax && typeof window.MathJax.typesetPromise === "function") {
        window.MathJax.typesetPromise([
          document.getElementById("asynch-monitor-desc"),
          document.getElementById("asynch-pathology-text"),
          document.getElementById("asynch-causes-text"),
          document.getElementById("asynch-action-text")
        ]);
      }

      // Nakreslit statický SVG graf pro asynchronii
      drawStaticAsynchGraph(asynch.id);
    };

    // Obsluha kliknutí na položku seznamu
    const items = listContainer.querySelectorAll(".btn-asynch-item");
    items.forEach(btn => {
      btn.addEventListener("click", () => {
        items.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        renderAsynchronyDetail(btn.getAttribute("data-id"));
      });
    });

    // Obsluha kliknutí na záložky v detailu
    const tabBtns = document.querySelectorAll(".asynch-tab-btn");
    const tabContents = document.querySelectorAll(".asynch-tab-content");

    tabBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        tabBtns.forEach(b => b.classList.remove("active"));
        tabContents.forEach(c => c.classList.remove("active"));

        btn.classList.add("active");
        const tabTarget = btn.getAttribute("data-tab");
        const activeContent = document.getElementById(`asynch-tab-${tabTarget}`);
        if (activeContent) activeContent.classList.add("active");
        
        // Znovu vykreslit SVG graf, pokud přepneme zpět na monitor
        if (tabTarget === "monitor") {
          const activeId = listContainer.querySelector(".btn-asynch-item.active").getAttribute("data-id");
          drawStaticAsynchGraph(activeId);
        }
      });
    });

    // Pomocná funkce pro kreslení statických schémat asynchronií v SVG
    const drawStaticAsynchGraph = (id) => {
      const svg = document.getElementById("asynch-svg-graphic");
      if (!svg) return;

      // Vyčistit SVG
      svg.innerHTML = `
        <!-- Pozadí -->
        <rect width="100%" height="100%" fill="#0c0d0f" rx="6" />
        <!-- Osy -->
        <line x1="40" y1="110" x2="480" y2="110" stroke="rgba(255,255,255,0.2)" stroke-width="1.5" />
        <line x1="40" y1="210" x2="480" y2="210" stroke="rgba(255,255,255,0.2)" stroke-width="1.5" />
        <!-- Popisky -->
        <text x="15" y="60" fill="#e2be12" font-size="10" font-family="monospace" transform="rotate(-90 15 60)">Tlak</text>
        <text x="15" y="180" fill="#10b981" font-size="10" font-family="monospace" transform="rotate(-90 15 180)">Průtok</text>
      `;

      let pathPressure = "";
      let pathFlow = "";
      let annotations = "";

      if (id === "delayed-trigger" || id === "ineffective-trigger") {
        // Zobrazení propadu tlaku při dechovém úsilí před sepnutím nádechu
        pathPressure = "M 40,80 L 100,80 C 110,80 120,95 125,95 C 130,95 135,50 150,50 L 220,50 L 220,80 L 320,80 C 330,80 340,95 345,95 C 347,95 348,93 350,90 L 350,80 L 480,80";
        pathFlow = "M 40,160 L 120,160 C 122,155 125,150 128,150 C 131,150 135,120 140,120 L 200,160 L 200,190 C 220,170 280,160 320,160 C 322,156 325,153 327,153 L 330,160 L 480,160";
        
        if (id === "delayed-trigger") {
          annotations = `
            <circle cx="125" cy="95" r="4" fill="#ff4d4d" />
            <text x="125" y="115" fill="#ff4d4d" font-size="9" text-anchor="middle">Úsilí</text>
            <text x="175" y="40" fill="#00f0ff" font-size="9" text-anchor="middle">Opožděný nádech</text>
          `;
        } else {
          annotations = `
            <circle cx="345" cy="95" r="4" fill="#ff4d4d" />
            <text x="345" y="115" fill="#ff4d4d" font-size="9" text-anchor="middle">Neúčinné úsilí</text>
            <text x="350" y="40" fill="#ff4d4d" font-size="9" text-anchor="middle">Žádný nádech stroje!</text>
          `;
        }
      } 
      else if (id === "auto-trigger") {
        // Cykly spouštěné bez tlaku dolů
        pathPressure = "M 40,80 L 70,80 L 80,40 L 140,40 L 140,80 L 170,80 L 180,40 L 240,40 L 240,80 L 270,80 L 280,40 L 340,40 L 340,80 L 480,80";
        pathFlow = "M 40,160 L 70,160 L 75,120 L 120,160 L 120,190 C 130,175 160,160 170,160 L 175,120 L 220,160 L 220,190 C 230,175 260,160 270,160 L 275,120 L 320,160 L 320,190 C 330,175 360,160 480,160";
        annotations = `
          <text x="150" y="25" fill="#ff4d4d" font-size="9" text-anchor="middle">Autotrigger (Chybí propad tlaku)</text>
        `;
      }
      else if (id === "flow-starvation") {
        // Vykousnutá tlaková křivka u VCV
        pathPressure = "M 40,80 L 80,80 L 100,65 C 120,78 140,78 160,50 L 160,80 L 480,80";
        pathFlow = "M 40,160 L 80,160 L 80,120 L 140,120 L 140,160 L 480,160";
        annotations = `
          <path d="M 120,60 L 120,72" stroke="#ff4d4d" stroke-width="1.5" marker-end="url(#arrow)" />
          <text x="120" y="45" fill="#ff4d4d" font-size="9" text-anchor="middle">Flow Starvation (Vykousnutí)</text>
        `;
      }
      else {
        // Výchozí nebo standardní dech pro zbytek asynchronií
        pathPressure = "M 40,80 L 90,80 L 100,50 L 160,50 L 160,80 L 480,80";
        pathFlow = "M 40,160 L 90,160 L 90,120 L 140,160 L 140,190 C 160,175 200,160 480,160";
      }

      svg.innerHTML += `
        <path d="${pathPressure}" fill="none" stroke="#e2be12" stroke-width="2.5" />
        <path d="${pathFlow}" fill="none" stroke="#10b981" stroke-width="2.5" />
        ${annotations}
      `;
    };

    // Spustit výchozí detail
    renderAsynchronyDetail("delayed-trigger");
  };

  initAsynchronieModule();

  // --- MODUL 7: INICIALIZACE ARDS A PBW KALKULÁTORU ---
  const initArdsModule = () => {
    const checklistContainer = document.getElementById("ards-checklist-container");
    if (!checklistContainer) return;

    checklistContainer.innerHTML = data.ards.checklist.map((c, idx) => `
      <div class="checklist-card">
        <div class="checklist-card-header">
          <span class="chk-badge">Krok ${idx + 1}</span>
          <h4>${formatMarkdown(c.title)}</h4>
        </div>
        <p><strong>Cíl:</strong> ${formatMarkdown(c.target)}</p>
        <p>${formatMarkdown(c.rationale)}</p>
      </div>
    `).join('');

    if (window.MathJax && typeof window.MathJax.typesetPromise === "function") {
      window.MathJax.typesetPromise([checklistContainer]);
    }

    // Logika PBW kalkulátoru
    const genderMale = document.getElementById("pbw-male");
    const genderFemale = document.getElementById("pbw-female");
    const heightInput = document.getElementById("pbw-height");

    const pbwValKg = document.getElementById("pbw-val-kg");
    const pbwValVt6 = document.getElementById("pbw-val-vt6");
    const pbwValVt4 = document.getElementById("pbw-val-vt4");

    const runPbwCalculator = () => {
      const height = parseFloat(heightInput.value) || 0;
      const isMale = genderMale.checked;

      if (height < 100) return;

      let pbw = 0;
      if (isMale) {
        pbw = 50 + 2.3 * ((height - 152.4) / 1);
      } else {
        pbw = 45.5 + 2.3 * ((height - 152.4) / 1);
      }

      pbwValKg.textContent = `${pbw.toFixed(1)} kg`;
      pbwValVt6.textContent = `${Math.round(pbw * 6)} ml`;
      pbwValVt4.textContent = `${Math.round(pbw * 4)} ml`;
    };

    [genderMale, genderFemale, heightInput].forEach(el => {
      el.addEventListener("change", runPbwCalculator);
      el.addEventListener("input", runPbwCalculator);
    });

    runPbwCalculator();
  };

  initArdsModule();

  // --- MODUL 8: INICIALIZACE PEARLS A RYCHLÉ DG. ---
  const initPearlsModule = () => {
    const container = document.getElementById("pearls-cards-container");
    const dgSelect = document.getElementById("quick-dg-select");
    const dgResultBox = document.getElementById("quick-dg-result-box");
    const dgCauseText = document.getElementById("quick-dg-cause");
    const dgActionText = document.getElementById("quick-dg-action");

    if (!container || !dgSelect) return;

    // Vykreslit karty Pearls
    container.innerHTML = data.pearls.map(p => `
      <div class="pearl-card">
        <h4>🔍 ${formatMarkdown(p.condition)}</h4>
        <p><strong>Nález / Patofyziologie:</strong> ${formatMarkdown(p.result)}</p>
        <div class="pearl-action">
          <strong>Klinická akce:</strong> ${formatMarkdown(p.action)}
        </div>
      </div>
    `).join('');

    if (window.MathJax && typeof window.MathJax.typesetPromise === "function") {
      window.MathJax.typesetPromise([container]);
    }

    // Naplnit dropdown pro rychlou diagnostiku
    dgSelect.innerHTML = `<option value="none">-- Vyberte klinický alarm / stav --</option>` + 
      data.pearls.map((p, idx) => `
        <option value="${idx}">${p.condition}</option>
      `).join('');

    dgSelect.addEventListener("change", (e) => {
      const idx = e.target.value;
      if (idx === "none") {
        dgResultBox.style.display = "none";
        return;
      }

      const pearl = data.pearls[parseInt(idx)];
      dgCauseText.innerHTML = formatMarkdown(pearl.result);
      dgActionText.innerHTML = formatMarkdown(pearl.action);
      dgResultBox.style.display = "flex";

      if (window.MathJax && typeof window.MathJax.typesetPromise === "function") {
        window.MathJax.typesetPromise([dgCauseText, dgActionText]);
      }
    });
  };

  initPearlsModule();

  // --- KVÍZOVÝ SYSTÉM ---
  const initQuiz = () => {
    const startBtn = document.getElementById("start-quiz-btn");
    const restartBtn = document.getElementById("restart-quiz-btn");
    const nextBtn = document.getElementById("next-question-btn");
    const reviewBtn = document.getElementById("results-review-theory-btn");

    const quizIntro = document.getElementById("quiz-intro");
    const quizActive = document.getElementById("quiz-active");
    const quizResultsTab = document.getElementById("quiz-results");

    const questionText = document.getElementById("quiz-question-text");
    const optionsList = document.getElementById("quiz-options-list");
    const feedbackBox = document.getElementById("quiz-feedback-box");
    const feedbackTitle = document.getElementById("quiz-feedback-title");
    const feedbackExplanation = document.getElementById("quiz-feedback-explanation");

    const progressFill = document.getElementById("quiz-progress-fill");
    const questionNumberText = document.getElementById("quiz-question-number");
    const scoreBadge = document.getElementById("quiz-score-badge");

    const resultsScorePct = document.getElementById("results-score-pct");
    const resultsScoreRatio = document.getElementById("results-score-ratio");
    const resultsHeadline = document.getElementById("results-headline");
    const resultsText = document.getElementById("results-text");

    let currentQuestions = [];
    let currentIdx = 0;
    let score = 0;
    let isQuestionAnswered = false;

    // Vybrat 10 náhodných otázek
    const getRandomQuestions = () => {
      const shuffled = [...data.quiz].sort(() => 0.5 - Math.random());
      return shuffled.slice(0, 10);
    };

    const loadQuestion = () => {
      isQuestionAnswered = false;
      feedbackBox.style.display = "none";
      nextBtn.style.display = "none";

      const q = currentQuestions[currentIdx];
      questionText.innerHTML = formatMarkdown(q.question);

      // Pokrok
      const pct = ((currentIdx) / 10) * 100;
      progressFill.style.width = `${pct === 0 ? 5 : pct}%`;
      questionNumberText.textContent = `Otázka ${currentIdx + 1} z 10`;
      scoreBadge.textContent = `Skóre: ${score}/${currentIdx}`;

      optionsList.innerHTML = q.options.map((opt, idx) => `
        <button class="btn-option" data-idx="${idx}">${formatMarkdown(opt)}</button>
      `).join('');

      if (window.MathJax && typeof window.MathJax.typesetPromise === "function") {
        window.MathJax.typesetPromise([questionText, optionsList]);
      }

      // Click listenery pro možnosti
      const optionBtns = optionsList.querySelectorAll(".btn-option");
      optionBtns.forEach(btn => {
        btn.addEventListener("click", () => {
          if (isQuestionAnswered) return;
          
          isQuestionAnswered = true;
          const selectedIdx = parseInt(btn.getAttribute("data-idx"));
          
          // Obarvení tlačítek
          optionBtns.forEach((b, i) => {
            if (i === q.correct) {
              b.classList.add("correct");
            } else if (i === selectedIdx) {
              b.classList.add("incorrect");
            }
          });

          // Vyhodnocení skóre
          if (selectedIdx === q.correct) {
            score++;
            feedbackTitle.textContent = "✓ Správná odpověď!";
            feedbackTitle.style.color = "var(--secondary)";
          } else {
            feedbackTitle.textContent = "✗ Nesprávná odpověď!";
            feedbackTitle.style.color = "var(--danger)";
          }

          feedbackExplanation.innerHTML = formatMarkdown(q.explanation);
          feedbackBox.style.display = "flex";
          nextBtn.style.display = "block";

          if (window.MathJax && typeof window.MathJax.typesetPromise === "function") {
            window.MathJax.typesetPromise([feedbackExplanation]);
          }
          
          scoreBadge.textContent = `Skóre: ${score}/${currentIdx + 1}`;
        });
      });
    };

    const startQuiz = () => {
      currentQuestions = getRandomQuestions();
      currentIdx = 0;
      score = 0;
      
      quizIntro.style.display = "none";
      quizResultsTab.style.display = "none";
      quizActive.style.display = "flex";

      loadQuestion();
    };

    const finishQuiz = () => {
      quizActive.style.display = "none";
      quizResultsTab.style.display = "flex";

      const pct = Math.round((score / 10) * 100);
      resultsScorePct.textContent = `${pct}%`;
      resultsScoreRatio.textContent = `${score} z 10 správně`;

      // Custom zprávy podle skóre
      if (score >= 9) {
        resultsHeadline.textContent = "🌟 Excelentní práce!";
        resultsText.textContent = "Prokázali jste hluboké, komplexní a pohotové znalosti ventilace pro ARO/JIP.";
      } else if (score >= 7) {
        resultsHeadline.textContent = "👍 Skvělý výsledek!";
        resultsText.textContent = "Vaše znalosti jsou na velmi dobré úrovni. Zvládáte většinu klíčových klinických situací.";
      } else if (score >= 5) {
        resultsHeadline.textContent = "📚 Solidní základ";
        resultsText.textContent = "Znáte základy ventilace, ale doporučujeme si znovu projít matici asynchronií a ventilační tlaky.";
      } else {
        resultsHeadline.textContent = "📖 Bude to chtít opakování";
        resultsText.textContent = "Téma UPV je náročné. Projděte si znovu základy, interaktivní simulace a zuste test opakovat.";
      }
    };

    startBtn.addEventListener("click", startQuiz);
    restartBtn.addEventListener("click", startQuiz);
    
    nextBtn.addEventListener("click", () => {
      currentIdx++;
      if (currentIdx < 10) {
        loadQuestion();
      } else {
        finishQuiz();
      }
    });

    reviewBtn.addEventListener("click", () => {
      switchTab("modul-zaklady");
    });
  };

  initQuiz();

  // ================= --- MODUL 9: WEANING & ODPOJOVÁNÍ --- =================
  const initWeaning = () => {
    // 1. Teorie weaningu - akordeon
    const theoryContainer = document.getElementById("weaning-theory-container");
    if (theoryContainer && data.weaning && data.weaning.theory) {
      theoryContainer.innerHTML = data.weaning.theory.map((t, idx) => `
        <div class="accordion-item">
          <div class="accordion-header" style="padding: 12px 16px;">
            <div class="accordion-title-block">
              <span class="acc-bullet" style="color: var(--upv-color); font-weight: bold; margin-right: 8px;">•</span>
              <h4 style="margin: 0; font-size: 14px;">${formatMarkdown(t.title)}</h4>
            </div>
            <span class="acc-arrow">▼</span>
          </div>
          <div class="accordion-content" style="display: none; padding: 12px 16px; font-size: 13px; line-height: 1.5;">
            <ul style="margin: 0; padding-left: 20px;">
              ${t.items.map(item => `<li style="margin-bottom: 6px;">${formatMarkdown(item)}</li>`).join('')}
            </ul>
          </div>
        </div>
      `).join('');

      if (window.MathJax && typeof window.MathJax.typesetPromise === "function") {
        window.MathJax.typesetPromise([theoryContainer]);
      }

      // Přidat click listenery pro akordeon
      const headers = theoryContainer.querySelectorAll(".accordion-header");
      headers.forEach(h => {
        h.addEventListener("click", () => {
          const content = h.nextElementSibling;
          const arrow = h.querySelector(".acc-arrow");
          const isVisible = content.style.display === "block";
          
          content.style.display = isVisible ? "none" : "block";
          arrow.textContent = isVisible ? "▼" : "▲";
        });
      });
    }

    // 2. RSBI Kalkulátor
    const btnCalcRsbi = document.getElementById("btn-calc-rsbi");
    const inputRsbiRr = document.getElementById("rsbi-rr");
    const inputRsbiVt = document.getElementById("rsbi-vt");
    const rsbiResultsBox = document.getElementById("rsbi-results-box");
    const rsbiValue = document.getElementById("rsbi-value");
    const rsbiStatusFill = document.getElementById("rsbi-status-fill");
    const rsbiInterpretation = document.getElementById("rsbi-interpretation-text");

    if (btnCalcRsbi && inputRsbiRr && inputRsbiVt) {
      btnCalcRsbi.addEventListener("click", () => {
        const rr = parseFloat(inputRsbiRr.value) || 0;
        const vtMl = parseFloat(inputRsbiVt.value) || 0;
        
        if (rr <= 0 || vtMl <= 0) {
          alert("Zadejte prosím kladné hodnoty.");
          return;
        }

        const vtL = vtMl / 1000;
        const rsbi = rr / vtL;

        if (rsbiValue) rsbiValue.textContent = rsbi.toFixed(0);

        if (rsbiResultsBox) rsbiResultsBox.style.display = "flex";

        // Vizuální interpretace
        let fillWidth = (rsbi / 150) * 100;
        fillWidth = Math.min(100, Math.max(5, fillWidth));
        
        if (rsbiStatusFill) {
          rsbiStatusFill.style.width = `${fillWidth}%`;
          if (rsbi < 80) {
            rsbiStatusFill.style.backgroundColor = "#10b981"; // zelená
            if (rsbiInterpretation) rsbiInterpretation.innerHTML = `<strong>RSBI = ${rsbi.toFixed(0)} (V normě)</strong><br><span style="color: #10b981;">Nízké riziko selhání extubace. Pacient má dostatečnou sílu dýchacích svalů.</span>`;
          } else if (rsbi < 105) {
            rsbiStatusFill.style.backgroundColor = "#f59e0b"; // oranžová
            if (rsbiInterpretation) rsbiInterpretation.innerHTML = `<strong>RSBI = ${rsbi.toFixed(0)} (Hraniční)</strong><br><span style="color: #f59e0b;">Zvýšená pozornost. Spustit SBT a sledovat stabilitu.</span>`;
          } else {
            rsbiStatusFill.style.backgroundColor = "#ef4444"; // červená
            if (rsbiInterpretation) rsbiInterpretation.innerHTML = `<strong>RSBI = ${rsbi.toFixed(0)} (Patologie)</strong><br><span style="color: #ef4444;">Vysoké riziko selhání extubace! Pacient dýchá rychle a mělce (svalové vyčerpání). Extubace se nedoporučuje.</span>`;
          }
        }
      });
    }

    // 3. SBT Simulátor
    const patientSelect = document.getElementById("sbt-patient-select");
    const patientInfoBox = document.getElementById("sbt-patient-info-box");
    const btnStartSbt = document.getElementById("btn-start-sbt");
    
    const sbtRunningArea = document.getElementById("sbt-running-area");
    const sbtClock = document.getElementById("sbt-clock");
    const sbtProgressBarFill = document.getElementById("sbt-progress-bar-fill");
    const sbtLogBox = document.getElementById("sbt-log-box");
    const sbtActionsBlock = document.getElementById("sbt-actions-block");
    const sbtResultScreen = document.getElementById("sbt-result-screen");

    // Vitální funkce v trenažéru
    const vitRr = document.getElementById("sbt-v-rr");
    const vitVt = document.getElementById("sbt-v-vt");
    const vitSpo2 = document.getElementById("sbt-v-spo2");
    const vitHr = document.getElementById("sbt-v-hr");
    const vitMap = document.getElementById("sbt-v-map");
    const vitPco2 = document.getElementById("sbt-v-pco2");

    const btnExtubate = document.getElementById("btn-sbt-extubate");
    const btnAbort = document.getElementById("btn-sbt-abort");
    const btnResetSbt = document.getElementById("btn-reset-sbt");

    let activeCase = null;
    let sbtIntervalId = null;
    let sbtStep = 0;

    const renderPatients = () => {
      if (!patientSelect || !data.weaning || !data.weaning.sbtCases) return;
      patientSelect.innerHTML = data.weaning.sbtCases.map(c => `
        <option value="${c.id}">${c.name}</option>
      `).join('');
      
      selectPatient(data.weaning.sbtCases[0].id);
    };

    const selectPatient = (id) => {
      if (!data.weaning || !data.weaning.sbtCases) return;
      activeCase = data.weaning.sbtCases.find(c => c.id === id);
      if (activeCase && patientInfoBox) {
        patientInfoBox.innerHTML = `
          <strong>Anamnéza:</strong> ${activeCase.history}<br><br>
          <strong>Výchozí parametry na ventilátoru:</strong><br>
          Dechový objem Vt: ${activeCase.vt_baseline} ml | Dechová frekvence: ${activeCase.rr_baseline}/min | Saturace SpO₂: ${activeCase.spo2_baseline}% | MAP: ${activeCase.map_baseline} mmHg
        `;
      }
      resetSbtUI();
    };

    const resetSbtUI = () => {
      if (sbtIntervalId) clearInterval(sbtIntervalId);
      sbtIntervalId = null;
      sbtStep = 0;
      if (sbtRunningArea) sbtRunningArea.style.display = "none";
      if (sbtResultScreen) sbtResultScreen.style.display = "none";
      if (btnStartSbt) {
        btnStartSbt.style.display = "block";
        btnStartSbt.disabled = false;
      }
      if (patientSelect) patientSelect.disabled = false;
      if (sbtProgressBarFill) sbtProgressBarFill.style.width = "0%";
    };

    if (patientSelect) {
      patientSelect.addEventListener("change", (e) => {
        selectPatient(e.target.value);
      });
    }

    const runSbtStep = () => {
      if (!activeCase) return;
      
      const stepData = activeCase.progression[sbtStep];
      if (!stepData) return;

      // Aktualizace hodin a pokroku
      if (sbtClock) sbtClock.textContent = `Čas: ${stepData.minute}. minuta`;
      const progressPercent = ((sbtStep + 1) / activeCase.progression.length) * 100;
      if (sbtProgressBarFill) sbtProgressBarFill.style.width = `${progressPercent}%`;

      // Aktualizace vitálních funkcí
      if (vitRr) vitRr.textContent = `${stepData.rr} /min`;
      if (vitVt) vitVt.textContent = `${stepData.vt} ml`;
      if (vitSpo2) {
        vitSpo2.textContent = `${stepData.spo2} %`;
        vitSpo2.className = stepData.spo2 < 90 ? "val text-red" : (stepData.spo2 < 94 ? "val text-orange" : "val text-green");
      }
      if (vitHr) {
        vitHr.textContent = `${stepData.hr} bpm`;
        vitHr.className = stepData.hr > 115 ? "val text-red" : "val";
      }
      if (vitMap) {
        vitMap.textContent = `${stepData.map} mmHg`;
        vitMap.className = stepData.map < 65 ? "val text-red" : "val";
      }
      if (vitPco2) {
        vitPco2.textContent = `${stepData.pco2} mmHg`;
        vitPco2.className = stepData.pco2 > 50 ? "val text-orange" : "val";
      }

      // Zápis do logu sestry
      if (sbtLogBox) {
        const timeLog = document.createElement("p");
        timeLog.className = "log-entry log-time";
        timeLog.textContent = `[Minuta ${stepData.minute}]:`;
        
        const noteLog = document.createElement("p");
        noteLog.className = "log-entry";
        noteLog.textContent = stepData.note;

        sbtLogBox.appendChild(timeLog);
        sbtLogBox.appendChild(noteLog);
        sbtLogBox.scrollTop = sbtLogBox.scrollHeight;
      }

      sbtStep++;

      if (sbtStep >= activeCase.progression.length) {
        clearInterval(sbtIntervalId);
        sbtIntervalId = null;
        if (sbtActionsBlock) sbtActionsBlock.style.display = "flex";
        const statusText = sbtRunningArea.querySelector(".sbt-running-status");
        if (statusText) {
          statusText.textContent = "● TEST DOKONČEN. ROZHODNÊTE O DALŠÍM POSTUPU.";
          statusText.className = "sbt-running-status";
        }
      }
    };

    if (btnStartSbt) {
      btnStartSbt.addEventListener("click", () => {
        if (!activeCase) return;
        btnStartSbt.style.display = "none";
        if (patientSelect) patientSelect.disabled = true;
        if (sbtRunningArea) sbtRunningArea.style.display = "block";
        if (sbtActionsBlock) sbtActionsBlock.style.display = "none";
        
        if (sbtLogBox) sbtLogBox.innerHTML = "";
        
        const statusText = sbtRunningArea.querySelector(".sbt-running-status");
        if (statusText) {
          statusText.textContent = "● TEST PROBÍHÁ (ZRYCHLENO)";
          statusText.className = "sbt-running-status blinking";
        }

        sbtStep = 0;
        runSbtStep();
        
        sbtIntervalId = setInterval(runSbtStep, 3500); 
      });
    }

    const showSbtResult = (isExtubated, isAborted) => {
      if (sbtIntervalId) clearInterval(sbtIntervalId);
      if (sbtRunningArea) sbtRunningArea.style.display = "none";
      if (sbtResultScreen) sbtResultScreen.style.display = "block";

      const titleEl = document.getElementById("sbt-result-title");
      const textEl = document.getElementById("sbt-result-text");

      if (!activeCase || !titleEl || !textEl) return;

      if (isExtubated) {
        if (activeCase.success) {
          sbtResultScreen.className = "sbt-result-screen sbt-success";
          titleEl.textContent = "🟢 ÚSPĚŠNÁ EXTUBACE PACIENTA";
          textEl.innerHTML = `<strong>Gratulujeme! Zvolili jste správný klinický postup.</strong><br><br>
            Pacient <strong>${activeCase.name}</strong> úspěšně prošel spontaneous breathing trialem bez vyčerpání. Extubace proběhla bez komplikací a pacient dýchá sám s adekvátními objemy a dobrou saturací.<br><br>
            <em>Klinické zdůvodnění:</em> ${activeCase.exit_recommendation}`;
        } else {
          sbtResultScreen.className = "sbt-result-screen sbt-fail";
          titleEl.textContent = "🔴 NEÚSPĚŠNÁ EXTUBACE (REINTUBACE)";
          textEl.innerHTML = `<strong>Klinická chyba! Pacientka zkolabovala krátce po vytažení kanyly.</strong><br><br>
            Pacientka <strong>${activeCase.name}</strong> neměla dostatečnou sílu dýchacích svalů (RSBI = 171 >> 105). Krátce po extubaci došlo k vyčerpání dýchacích svalů, rozvoji těžké hypoxémie a hyperkapnického kómatu. Bylo nutné provést urgentní reintubaci, což pacienta vystavilo vážným rizikům.<br><br>
            <em>Doporučený postup:</em> ${activeCase.exit_recommendation}`;
        }
      } else if (isAborted) {
        if (!activeCase.success) {
          sbtResultScreen.className = "sbt-result-screen sbt-success";
          titleEl.textContent = "🟢 SPRÁVNÉ ROZHODNUTÍ: PŘERUŠENÍ TESTU";
          textEl.innerHTML = `<strong>Výborně! Správný klinický úsudek.</strong><br><br>
            SBT test u pacientky <strong>${activeCase.name}</strong> vykazoval jasné známky selhání (svalové vyčerpání, mělké rychlé dýchání s RSBI = 171, pokles saturace). Správně jste test přerušili a vrátili pacientku na tlakovou podporu ventilátoru (PSV) k odpočinku, čímž jste zabránili respiračnímu a oběhovému kolapsu.<br><br>
            <em>Klinické doporučení:</em> ${activeCase.exit_recommendation}`;
        } else {
          sbtResultScreen.className = "sbt-result-screen sbt-fail";
          titleEl.textContent = "🔴 CHYBNÉ ROZHODNUTÍ: ZBYTEČNÉ PŘERUŠENÍ";
          textEl.innerHTML = `<strong>Zbytečné přerušení weaningového testu!</strong><br><br>
            Pacient <strong>${activeCase.name}</strong> test toleroval výtečně, dechová frekvence byla stabilní, ventilace adekvátní a RSBI byl pouhých 38. Nebyl žádný důvod test přerušovat. Odložením extubace zbytečně prodlužujete pobyt pacienta na ventilátoru a zvyšujete riziko VAP (pneumonie spojené s ventilátorem).<br><br>
            <em>Doporučený postup:</em> ${activeCase.exit_recommendation}`;
        }
      }
    };

    if (btnExtubate) {
      btnExtubate.addEventListener("click", () => showSbtResult(true, false));
    }
    if (btnAbort) {
      btnAbort.addEventListener("click", () => showSbtResult(false, true));
    }
    if (btnResetSbt) {
      btnResetSbt.addEventListener("click", resetSbtUI);
    }

    renderPatients();
  };

  initWeaning();

  // --- AUTOMATICKÉ SPOUŠTĚNÍ TISKU Z QUERY PARAMETRU ---
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get('print') === 'true') {
    setTimeout(triggerPrint, 1000);
  }

  // Spustit MathJax po inicializaci všech modulů
  if (window.MathJax && typeof window.MathJax.typesetPromise === "function") {
    window.MathJax.typesetPromise();
  }
});
