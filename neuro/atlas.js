// atlas.js - Aplikační logika pro Multimediální atlas neurologického vyšetření
// Subportál Neurologie LF OU

(function () {
  let activeCategory = "all";
  let atlasSearchQuery = "";
  let practicedItems = new Set();

  const STORAGE_KEY = "neuro_practiced_exam_items";

  // Načtení z LocalStorage
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      practicedItems = new Set(JSON.parse(stored));
    }
  } catch (e) {}

  function savePracticed() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify([...practicedItems]));
    } catch (e) {}
  }

  document.addEventListener("DOMContentLoaded", () => {
    initAtlasModule();
  });

  function initAtlasModule() {
    const container = document.getElementById("view-atlas");
    if (!container) return;

    if (typeof ATLAS_DATA === "undefined") {
      container.innerHTML = `<div class="alert-box error">Chyba: Data pro atlas vyšetření se nepodařilo načíst.</div>`;
      return;
    }

    renderAtlasLayout(container);
    bindAtlasEvents();
  }

  function renderAtlasLayout(container) {
    container.innerHTML = `
      <div class="atlas-wrapper">
        
        <!-- Hlavička modulu -->
        <div class="atlas-header">
          <div class="atlas-header-info">
            <span class="atlas-badge">🩺 Praktické dovednosti • LF OU</span>
            <h2>Multimediální atlas neurologického vyšetření</h2>
            <p>
              Komplexní manuál fyzikálního vyšetření nervového systému pro stáže a praktickou část zkoušky z neurologie.
              Správná technika provedení manévrů, fyziologický vs. patologický nález, diferenciální diagnostika a státnicové perly.
            </p>
          </div>

          <!-- Ovládací lišta: Kategorie a hledání -->
          <div class="atlas-controls-bar">
            
            <div class="atlas-category-pills" id="atlas-category-pills">
              ${ATLAS_DATA.categories.map(cat => `
                <button class="atlas-cat-pill ${activeCategory === cat.id ? 'active' : ''}" data-cat-id="${cat.id}">
                  <span>${cat.icon}</span>
                  <span>${cat.name}</span>
                </button>
              `).join("")}
            </div>

            <div class="atlas-search-wrap">
              <span class="atlas-search-icon">🔍</span>
              <input type="text" id="atlas-search-input" class="atlas-search-input" placeholder="Hledat manévr, reflex nebo jev (např. Babinski, Mingazzini, Romberg, n. VII)...">
            </div>

          </div>
        </div>

        <!-- Statistiky nácviku -->
        <div class="atlas-stats-banner">
          <div class="atlas-stat-box">
            <span class="stat-num" id="atlas-practiced-count">${practicedItems.size}</span> / <span id="atlas-total-count">${ATLAS_DATA.items.length}</span>
            <span class="stat-lbl">Nacvičených vyšetřovacích technik</span>
          </div>
          <div class="atlas-progress-track">
            <div class="atlas-progress-fill" id="atlas-progress-bar" style="width: ${(practicedItems.size / ATLAS_DATA.items.length) * 100}%;"></div>
          </div>
        </div>

        <!-- Mřížka vyšetřovacích karet -->
        <div class="atlas-items-grid" id="atlas-items-grid">
          <!-- Dynamicky renderované karty -->
        </div>

      </div>
    `;

    renderAtlasCards();
  }

  function getFilteredAtlasItems() {
    return ATLAS_DATA.items.filter(item => {
      const matchCat = activeCategory === "all" || item.category === activeCategory;
      const matchSearch = !atlasSearchQuery ||
        item.title.toLowerCase().includes(atlasSearchQuery) ||
        item.technique.toLowerCase().includes(atlasSearchQuery) ||
        item.pathologicalFinding.toLowerCase().includes(atlasSearchQuery) ||
        item.categoryLabel.toLowerCase().includes(atlasSearchQuery);
      return matchCat && matchSearch;
    });
  }

  function renderAtlasCards() {
    const grid = document.getElementById("atlas-items-grid");
    if (!grid) return;

    const items = getFilteredAtlasItems();

    if (items.length === 0) {
      grid.innerHTML = `
        <div class="atlas-empty-state">
          <span>🔍</span>
          <h4>Nebyly nalezeny žádné odpovídající vyšetřovací techniky</h4>
          <p>Zkuste upravit vyhledávací dotaz nebo zvolit jinou kategorii.</p>
        </div>
      `;
      return;
    }

    grid.innerHTML = items.map(item => {
      const isPracticed = practicedItems.has(item.id);
      return `
        <div class="atlas-card ${isPracticed ? 'practiced' : ''}" id="atlas-card-${item.id}">
          
          <div class="atlas-card-header">
            <div class="atlas-card-title-group">
              <span class="atlas-item-category-tag">${item.categoryLabel}</span>
              <h3 class="atlas-item-title">${item.icon} ${item.title}</h3>
            </div>
            <button class="practice-toggle-btn ${isPracticed ? 'active' : ''}" data-practice-id="${item.id}" title="${isPracticed ? 'Označeno jako nacvičeno' : 'Označit jako nacvičeno'}">
              ${isPracticed ? '✓ Nacvičeno' : '○ Nenacvičeno'}
            </button>
          </div>

          <!-- Technika provedení -->
          <div class="atlas-section-block technique">
            <span class="block-lbl">🎯 Správná technika provedení:</span>
            <p>${item.technique}</p>
          </div>

          <!-- Nálezy ve dvou sloupcích -->
          <div class="atlas-findings-split">
            <div class="finding-box normal">
              <span class="finding-lbl">✅ Fyziologický (Normální) nález:</span>
              <p>${item.normalFinding}</p>
            </div>
            <div class="finding-box pathol">
              <span class="finding-lbl">❌ Patologický nález & Hodnocení:</span>
              <p>${item.pathologicalFinding}</p>
            </div>
          </div>

          <!-- Klinický význam a státnicová perla -->
          <div class="atlas-section-block significance">
            <span class="block-lbl">🏥 Klinický význam & Lokalizace:</span>
            <p>${item.clinicalSignificance}</p>
          </div>

          <div class="atlas-section-block pearl">
            <span class="block-lbl">💎 Státnicová perla (LF OU Exam Tip):</span>
            <p>${item.pearl}</p>
          </div>

        </div>
      `;
    }).join("");

    bindCardInteractions();
  }

  function bindCardInteractions() {
    const practiceBtns = document.querySelectorAll(".practice-toggle-btn");
    practiceBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        const id = btn.getAttribute("data-practice-id");
        if (practicedItems.has(id)) {
          practicedItems.delete(id);
          btn.classList.remove("active");
          btn.textContent = "○ Nenacvičeno";
          const card = document.getElementById(`atlas-card-${id}`);
          if (card) card.classList.remove("practiced");
        } else {
          practicedItems.add(id);
          btn.classList.add("active");
          btn.textContent = "✓ Nacvičeno";
          const card = document.getElementById(`atlas-card-${id}`);
          if (card) card.classList.add("practiced");
        }

        savePracticed();
        updateProgressStats();
      });
    });
  }

  function updateProgressStats() {
    const countEl = document.getElementById("atlas-practiced-count");
    const barEl = document.getElementById("atlas-progress-bar");
    if (countEl) countEl.textContent = String(practicedItems.size);
    if (barEl) {
      const pct = (practicedItems.size / ATLAS_DATA.items.length) * 100;
      barEl.style.width = `${pct}%`;
    }
  }

  function bindAtlasEvents() {
    // Kategorie
    const catBtns = document.querySelectorAll(".atlas-cat-pill");
    catBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        activeCategory = btn.getAttribute("data-cat-id");
        catBtns.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        renderAtlasCards();
      });
    });

    // Hledání
    const searchInput = document.getElementById("atlas-search-input");
    if (searchInput) {
      searchInput.addEventListener("input", (e) => {
        atlasSearchQuery = e.target.value.trim().toLowerCase();
        renderAtlasCards();
      });
    }
  }

})();
