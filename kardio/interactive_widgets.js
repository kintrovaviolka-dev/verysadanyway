// =========================================================================
// KARDIOLOGIE - INTERAKTIVNÍ VÝUKOVÉ PRVKY PRO VŠECH 12 MODULŮ (ESC 2023-2026)
// =========================================================================

window.CardioInteractiveWidgets = (function() {
  'use strict';

  // Helper for i18n
  function getLang() {
    return (window.currentCardioLang || localStorage.getItem('cardio_lang') || 'cs');
  }

  // Render widget for specific module
  function renderWidget(moduleId, containerEl) {
    if (!containerEl) return;
    containerEl.innerHTML = '';
    const lang = getLang();

    switch(moduleId) {
      case 'aks':
        renderAksWidget(containerEl, lang);
        break;
      case 'midef':
        renderMidefWidget(containerEl, lang);
        break;
      case 'hf':
        renderHfWidget(containerEl, lang);
        break;
      case 'htn':
        renderHtnWidget(containerEl, lang);
        break;
      case 'afib':
        renderAfibWidget(containerEl, lang);
        break;
      case 'arytmie':
        renderArytmieWidget(containerEl, lang);
        break;
      case 'chlopne':
        renderChlopneWidget(containerEl, lang);
        break;
      case 'kmp':
        renderKmpWidget(containerEl, lang);
        break;
      case 'zanety':
        renderZanetyWidget(containerEl, lang);
        break;
      case 'pe':
        renderPeWidget(containerEl, lang);
        break;
      case 'ccs':
        renderCcsWidget(containerEl, lang);
        break;
      case 'ekg':
        renderEkgWidget(containerEl, lang);
        break;
      default:
        containerEl.innerHTML = '';
    }
  }

  // -------------------------------------------------------------
  // 1. AKS: 0h/1h hs-cTn ESC Triage Simulator
  // -------------------------------------------------------------
  function renderAksWidget(container, lang) {
    const isCs = lang === 'cs';
    const html = `
      <div class="interactive-widget-box" id="widget-aks">
        <div class="widget-header">
          <div class="widget-badge">⚡ ${isCs ? 'Interaktivní ESC 0h/1h hs-cTn Triage Trenažér' : 'Simulador Interactivo de Triaje hs-cTn 0h/1h ESC'}</div>
          <p class="widget-subtitle">${isCs ? 'Nastavte výchozí troponin (0h) a dynamiku (1h) pro simulaci rozhodovacího algoritmu ESC 2023.' : 'Ajuste la troponina basal (0h) y el delta (1h) para simular el algoritmo ESC 2023.'}</p>
        </div>

        <div class="widget-controls-grid">
          <div class="widget-control-group">
            <label for="aks-t0-slider">${isCs ? 'Výchozí hs-cTn (0h):' : 'hs-cTn Basal (0h):'} <strong id="aks-t0-val" class="val-display">15 ng/L</strong></label>
            <input type="range" id="aks-t0-slider" min="1" max="100" value="15" class="custom-slider">
            <div class="slider-ticks"><span>1 ng/L</span><span>25</span><span>50</span><span>100 ng/L</span></div>
          </div>

          <div class="widget-control-group">
            <label for="aks-t1-slider">${isCs ? 'Změna za 1 hodinu (Δ 1h):' : 'Delta a 1 hora (Δ 1h):'} <strong id="aks-t1-val" class="val-display">+4 ng/L</strong></label>
            <input type="range" id="aks-t1-slider" min="-5" max="30" value="4" class="custom-slider">
            <div class="slider-ticks"><span>-5 ng/L</span><span>0</span><span>+10</span><span>+30 ng/L</span></div>
          </div>
        </div>

        <div class="preset-buttons-row">
          <button class="widget-pill-btn" data-t0="3" data-t1="1">${isCs ? '🟢 Typický Rule-Out' : '🟢 Rule-Out Típico'}</button>
          <button class="widget-pill-btn" data-t0="18" data-t1="2">${isCs ? '🟡 Zóna pozorování (Observe)' : '🟡 Zona de Observación'}</button>
          <button class="widget-pill-btn" data-t0="65" data-t1="12">${isCs ? '🔴 Jasný Rule-In (NSTEMI)' : '🔴 Rule-In Claro (NSTEMI)'}</button>
        </div>

        <div class="aks-triage-result-card" id="aks-result-card">
          <!-- Dynamically filled -->
        </div>
      </div>
    `;
    container.innerHTML = html;

    const t0Slider = container.querySelector('#aks-t0-slider');
    const t1Slider = container.querySelector('#aks-t1-slider');
    const t0Val = container.querySelector('#aks-t0-val');
    const t1Val = container.querySelector('#aks-t1-val');
    const resultCard = container.querySelector('#aks-result-card');

    function updateAks() {
      const t0 = parseInt(t0Slider.value, 10);
      const t1 = parseInt(t1Slider.value, 10);
      t0Val.textContent = `${t0} ng/L`;
      t1Val.textContent = `${t1 >= 0 ? '+' + t1 : t1} ng/L`;

      let zone = 'observe';
      if (t0 < 5 || (t0 < 12 && t1 < 3)) {
        zone = 'ruleout';
      } else if (t0 >= 52 || t1 >= 5) {
        zone = 'rulein';
      }

      if (zone === 'ruleout') {
        resultCard.className = 'aks-triage-result-card zone-ruleout';
        resultCard.innerHTML = `
          <div class="result-icon">🟢</div>
          <div class="result-content">
            <h4>${isCs ? 'RULE-OUT (Vyloučení NSTEMI)' : 'RULE-OUT (Descarte de NSTEMI)'}</h4>
            <p>${isCs ? 'hs-cTn je velmi nízký nebo bez významné kinetiky. Pravděpodobnost NSTEMI < 1 %.' : 'hs-cTn muy baja o sin cinética significativa. Probabilidad de NSTEMI < 1%.'}</p>
            <div class="result-action">
              <strong>${isCs ? 'Postup:' : 'Conducta:'}</strong> ${isCs ? 'Možné bezpečné propuštění s ambulantním došetřením (pokud bolest trvá > 3h a GRACE < 140).' : 'Alta temprana segura con estudio ambulatorio (si el dolor dura > 3h y GRACE < 140).'}
            </div>
          </div>
        `;
      } else if (zone === 'rulein') {
        resultCard.className = 'aks-triage-result-card zone-rulein';
        resultCard.innerHTML = `
          <div class="result-icon">🔴</div>
          <div class="result-content">
            <h4>${isCs ? 'RULE-IN (Potvrzení NSTEMI)' : 'RULE-IN (Confirmación de NSTEMI)'}</h4>
            <p>${isCs ? 'Signifikantní elevace hs-cTn nebo nárůst Δ1h ≥ 5 ng/L. Pozitivní prediktivní hodnota > 75-80 %.' : 'Elevación significativa de hs-cTn o incremento Δ1h ≥ 5 ng/L. VPP > 75-80%.'}</p>
            <div class="result-action">
              <strong>${isCs ? 'Postup:' : 'Conducta:'}</strong> ${isCs ? 'Příjem na JIP/koronární jednotku, monitorace, zahájení DAPT (ASA + Prasugrel po SKG), invazivní koronarografie do 24 h!' : 'Ingreso en UCI/Unidad Coronaria, monitorización, DAPT (AAS + Prasugrel tras coronariografía), coronariografía invasiva < 24 h.'}
            </div>
          </div>
        `;
      } else {
        resultCard.className = 'aks-triage-result-card zone-observe';
        resultCard.innerHTML = `
          <div class="result-icon">🟡</div>
          <div class="result-content">
            <h4>${isCs ? 'OBSERVE (Zóna pozorování)' : 'OBSERVE (Zona de Observación)'}</h4>
            <p>${isCs ? 'Hodnoty nesplňují kritéria pro vyloučení ani pro potvrzení (šedá zóna).' : 'Los valores no cumplen criterios de descarte ni confirmación (zona gris).'}</p>
            <div class="result-action">
              <strong>${isCs ? 'Postup:' : 'Conducta:'}</strong> ${isCs ? 'Odběr 3. vzorku troponinu za 3 hodiny (Δ3h), statimové echokardiografické vyšetření kinetiky LK a sledování vývoje EKG.' : 'Toma de 3ª muestra de troponina a las 3 horas (Δ3h), ecocardiografía urgente y monitorización ECG.'}
            </div>
          </div>
        `;
      }
    }

    t0Slider.addEventListener('input', updateAks);
    t1Slider.addEventListener('input', updateAks);

    container.querySelectorAll('.widget-pill-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        t0Slider.value = btn.dataset.t0;
        t1Slider.value = btn.dataset.t1;
        updateAks();
      });
    });

    updateAks();
  }

  // -------------------------------------------------------------
  // 2. MIDEF: 5th Universal Definition of MI (2026) Interactive Classifier
  // -------------------------------------------------------------
  function renderMidefWidget(container, lang) {
    const isCs = lang === 'cs';
    const miTypes = [
      { id: 'primary', name: isCs ? '1. Primární IM' : '1. IM Primario', icon: '💥', badge: isCs ? 'Akutní koronární patologie' : 'Patología coronaria aguda', desc: isCs ? 'Spontánní vznik v důsledku primární koronární léze: aterotrombóza s rupturou/erozí plátu, SCAD (spontánní disekce), embolie či spasmus.' : 'Aparición espontánea por patología coronaria aguda primaria: aterotrombosis con rotura/erosión de placa, SCAD, embolia o espasmo.', rx: isCs ? 'DAPT + Emergentní PCI / Reperfúze' : 'DAPT + ICP urgente / Reperfusión' },
      { id: 'secondary', name: isCs ? '2. Sekundární IM' : '2. IM Secundario', icon: '⚖️', badge: isCs ? 'Supply-Demand Mismatch' : 'Desajuste Oferta/Demanda', desc: isCs ? 'Ischémie vzniklá nepoměrem mezi nabídkou a poptávkou O₂ způsobená jiným akutním stavem (sepse, tachyarytmie, těžká anémie, šok, hypertenze). 3 fáze: Podezření → Pravděpodobný → Potvrzený (stenóza ≥ 70 % nebo nová RWMA na Echo/CMR).' : 'Isquemia por desajuste aporte/demanda de O₂ debida a otra patología aguda (sepsis, taquiarritmia, anemia grave, shock, crisis HTA). 3 fases: Sospecha → Probable → Confirmado.', rx: isCs ? 'Kauzální léčba vyvolávající příčiny (ne rutinní PCI/DAPT!)' : 'Tratamiento etiológico del factor causal (¡no ICP de rutina!)' },
      { id: 'procedure', name: isCs ? '3. IM vázaný na výkon' : '3. IM por Procedimientos', icon: '🩺', badge: isCs ? 'Komplikace PCI / CABG' : 'Complicación ICP / CABG', desc: isCs ? 'Komplikace jakéhokoli srdečního výkonu do 30 dnů. Vyžaduje vzestup cTn + ischémii + průkaz koronární komplikace (disekce, perforace, trombóza stentu, slow-flow) a/nebo novou poruchu kinetiky stěny (RWMA).' : 'Complicación de procedimiento cardíaco en ≤30 días. Requiere cTn elevada + isquemia + evidencia de complicación coronaria o nueva alteración segmentaria (RWMA).', rx: isCs ? 'Re-PCI, revize štěpů, hemodynamická podpora' : 'Re-ICP, revisión quirúrgica, soporte' },
      { id: 'minoca', name: 'MINOCA', icon: '🔍', badge: isCs ? 'Neobstrukční tepny (<50%)' : 'Arterias no obstructivas (<50%)', desc: isCs ? 'Kritéria IM s normálním nálezem na koronarografii (< 50% stenóza). Vyžaduje urgentní CMR (magnetickou rezonanci srdce) k odlišení infarktu, myokarditidy (až 40 %) a Takotsubo kardiomyopatie!' : 'Criterios de IAM con coronarias no obstructivas (< 50% estenosis). Requiere RMC para diferenciar infarto real, miocarditis aguda y Takotsubo.', rx: isCs ? 'Cílená terapie dle CMR a intrakoronárního zobrazení' : 'Tratamiento guiado por RMC e imagen intracoronaria' },
      { id: 'injury', name: isCs ? 'Myokardiální poškození' : 'Daño Miocárdico', icon: '🩸', badge: isCs ? 'Injury (Bez ischémie)' : 'Injury (Sin isquemia)', desc: isCs ? 'Izolovaná elevace troponinu nad 99. percentil bez klinických, EKG či zobrazovacích známek ischémie myokardu (akutní u sepse/PE, chronické u CKD/amyloidózy).' : 'Elevación aislada de troponina > percentil 99 sin datos clínicos, ECG ni de imagen de isquemia miocárdica (agudo en sepsis/TEP, crónico en ERC/amiloidosis).', rx: isCs ? 'Léčba základního nekardiálního / chronického onemocnění' : 'Tratamiento de la patología de base subyacente' }
    ];

    let currentSelected = miTypes[0];

    const html = `
      <div class="interactive-widget-box" id="widget-midef">
        <div class="widget-header">
          <div class="widget-badge">🎯 ${isCs ? '5. Univerzální definice IM (2026): 3 Klinické typy & Poškození' : '5.ª Definición Universal de IAM (2026): 3 Tipos Clínicos'}</div>
          <p class="widget-subtitle">${isCs ? 'Klikněte na jednotlivé klinické typy infarktu pro zobrazení patofyziologie, diagnostických kritérií a managementu dle 5. definice 2026.' : 'Haga clic en los tipos clínicos de infarto para ver su fisiopatología y manejo según la 5.ª definición 2026.'}</p>
        </div>

        <div class="midef-types-grid">
          ${miTypes.map(t => `
            <button class="midef-type-card ${t.id === 'primary' ? 'active' : ''}" data-typeid="${t.id}">
              <div class="midef-type-icon">${t.icon}</div>
              <div class="midef-type-name">${t.name}</div>
              <span class="midef-type-badge">${t.badge}</span>
            </button>
          `).join('')}
        </div>

        <div class="midef-detail-display" id="midef-detail-box">
          <div class="midef-detail-header">
            <span class="midef-detail-icon">${currentSelected.icon}</span>
            <div>
              <h4 class="midef-detail-title">${currentSelected.name} — ${currentSelected.badge}</h4>
              <p class="midef-detail-desc">${currentSelected.desc}</p>
            </div>
          </div>
          <div class="midef-detail-footer">
            <span class="midef-rx-badge">💊 ${isCs ? 'Terapeutický přístup:' : 'Abordaje terapéutico:'} <strong>${currentSelected.rx}</strong></span>
          </div>
        </div>
      </div>
    `;
    container.innerHTML = html;

    const detailBox = container.querySelector('#midef-detail-box');
    const buttons = container.querySelectorAll('.midef-type-card');

    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        buttons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const selected = miTypes.find(t => t.id === btn.dataset.typeid);
        if (selected) {
          detailBox.innerHTML = `
            <div class="midef-detail-header animate-fade-in">
              <span class="midef-detail-icon">${selected.icon}</span>
              <div>
                <h4 class="midef-detail-title">${selected.name} — ${selected.badge}</h4>
                <p class="midef-detail-desc">${selected.desc}</p>
              </div>
            </div>
            <div class="midef-detail-footer">
              <span class="midef-rx-badge">💊 ${isCs ? 'Terapeutický přístup:' : 'Abordaje terapéutico:'} <strong>${selected.rx}</strong></span>
            </div>
          `;
        }
      });
    });
  }

  // -------------------------------------------------------------
  // 3. HF: 2026 ESC Heart Failure Phenotypes (HFrEF <50% vs HFpEF >=50%)
  // -------------------------------------------------------------
  function renderHfWidget(container, lang) {
    const isCs = lang === 'cs';
    const drugs = [
      { id: 'arni', name: 'ARNI', title: 'Sacubitril / Valsartan', icon: '💊', color: 'blue', hfref: 'Class I (RRR 20% mortalita)', hfpef: 'Class IIa/IIb (redukce hospitalizací)', dose: '24/26 mg bid → cíl 97/103 mg bid', warning: isCs ? 'Pauza 36h po vysazení ACEi (riziko angioedému)!' : '¡Pausa de 36h tras suspender IECA por angioedema!' },
      { id: 'bb', name: 'Beta-blokátor', title: 'Bisoprolol / Metoprolol ZOK / Carvedilol / Nebivolol', icon: '🫀', color: 'purple', hfref: 'Class I (RRR 34% mortalita)', hfpef: 'Pro kontrolu TF / komorbidity', dose: isCs ? 'Start nízkou dávkou, titrace co 2 týdny' : 'Iniciar dosis baja, titular cada 2 semanas', warning: isCs ? 'Nenasazovat v akutní těžké dekompenzaci!' : '¡No iniciar en fase de descompensación aguda!' },
      { id: 'mra', name: 'MRA', title: 'Spironolakton / Eplerenon / Finerenon', icon: '🛡️', color: 'amber', hfref: 'Class I (RRR 30% mortalita)', hfpef: 'Class I/IIa (TOPCAT & FINEARTS-HF)', dose: '25 mg qd → cíl 50 mg qd', warning: isCs ? 'Sledovat kalémii (K > 5.5 mmol/L = redukce/vazače K)' : 'Control de potasio (K > 5.5 = quelantes/suspender)' },
      { id: 'sglt2i', name: 'SGLT2i', title: 'Dapagliflozin / Empagliflozin', icon: '✨', color: 'green', hfref: 'Class I (Základ FMT pro všechny)', hfpef: 'Class I (Základ léčby pro všechny)', dose: '10 mg 1x denně (fixní dávka bez nutnosti titrace)', warning: isCs ? 'Hlídat mykotické infekce a euglykemickou DKA' : 'Vigilar infecciones micóticas y CAD euglucémica' },
      { id: 'diur', name: 'Kličkové diuretikum', title: 'Furosemid / Torasemid', icon: '💧', color: 'cyan', hfref: 'Class I (dekongesce)', hfpef: 'Class I (dekongesce)', dose: isCs ? 'Dle stupně hypervolemie (titrovat na euvolemii)' : 'Según congestión (titular a euvolemia)', warning: isCs ? 'Nesnižuje mortalitu, titrovat na nejnižší účinnou dávku' : 'No reduce mortalidad, titular a dosis mínima eficaz' },
      { id: 'veri', name: 'Vericiguat', title: 'Stimulátor solubilní guanylátcyklázy', icon: '⚡', color: 'red', hfref: 'Class IIb (po nedávné dekompenzaci)', hfpef: 'Nestudováno', dose: '2.5 mg → cíl 10 mg qd', warning: isCs ? 'Při zhoršení HF přes zavedenou 4-kombinaci FMT' : 'En empeoramiento de IC a pesar de 4 pilares FMT' },
      { id: 'iron', name: 'i.v. Železo', title: 'Ferric Carboxymaltose / Derisomaltose', icon: '🩸', color: 'brown', hfref: 'Class I/IIa (ferritin <100 nebo TSAT <20%)', hfpef: 'Class I/IIa (zlepšení kvality života)', dose: isCs ? 'Dle hmotnosti a hemoglobinu (500-1000 mg i.v.)' : 'Según peso y Hb (500-1000 mg i.v.)', warning: isCs ? 'Zlepšuje symptomy a 6MWT, perorální železo je neúčinné!' : 'Mejora síntomas y 6MWT; ¡hierro oral ineficaz!' }
    ];

    let currentPhenotype = 'hfref';

    const html = `
      <div class="interactive-widget-box" id="widget-hf">
        <div class="widget-header">
          <div class="widget-badge">🫧 ${isCs ? 'ESC 2026: 2 Fenotypy srdečního selhání & Lékové bubliny' : 'ESC 2026: 2 Fenotipos de Insuficiencia Cardíaca'}</div>
          <p class="widget-subtitle">${isCs ? 'Guidelines ESC 2026 sjednotily klasifikaci na 2 fenotypy (HFmrEF bylo zrušeno). Zvolte fenotyp a najeďte na bubliny léků.' : 'Las Guías ESC 2026 unifican la IC en 2 fenotipos (eliminando IC-FElm). Seleccione el fenotipo para ver las recomendaciones.'}</p>
        </div>

        <div class="hf-phenotype-selector">
          <button class="hf-pheno-btn active" data-pheno="hfref"><strong>🔴 HFrEF</strong> (LVEF &lt; 50 % — Snížená EF)</button>
          <button class="hf-pheno-btn" data-pheno="hfpef"><strong>🟢 HFpEF</strong> (LVEF &ge; 50 % — Zachovaná EF)</button>
        </div>

        <div class="hf-bubbles-cloud" id="hf-bubbles-container">
          ${drugs.map(d => `
            <div class="hf-bubble-pill pill-${d.color} ${d.hfref.includes('Class I') ? 'highlight-class-1' : ''}" data-drugid="${d.id}">
              <span class="bubble-icon">${d.icon}</span>
              <span class="bubble-name">${d.name}</span>
              <span class="bubble-tag">${d.hfref}</span>
            </div>
          `).join('')}
        </div>

        <div class="hf-drug-info-card" id="hf-drug-info">
          <div class="hf-drug-info-empty">${isCs ? '👆 Vyberte lék kliknutím nebo najetím myši pro zobrazení detailů' : '👆 Toque o pase el cursor sobre un fármaco para ver los detalles'}</div>
        </div>
      </div>
    `;
    container.innerHTML = html;

    const phenoBtns = container.querySelectorAll('.hf-pheno-btn');
    const bubbles = container.querySelectorAll('.hf-bubble-pill');
    const infoCard = container.querySelector('#hf-drug-info');

    function updatePhenotype(pheno) {
      currentPhenotype = pheno;
      bubbles.forEach(b => {
        const drug = drugs.find(d => d.id === b.dataset.drugid);
        if (drug) {
          const recText = drug[pheno];
          b.querySelector('.bubble-tag').textContent = recText;
          if (recText.includes('Class I')) {
            b.className = `hf-bubble-pill pill-${drug.color} highlight-class-1`;
          } else {
            b.className = `hf-bubble-pill pill-${drug.color}`;
          }
        }
      });
    }

    function showDrugDetail(drug) {
      const rec = drug[currentPhenotype];
      infoCard.innerHTML = `
        <div class="drug-detail-box animate-fade-in">
          <div class="drug-detail-top">
            <span class="drug-main-icon">${drug.icon}</span>
            <div>
              <h4 class="drug-main-title">${drug.name} (${drug.title})</h4>
              <span class="drug-rec-badge">${rec}</span>
            </div>
          </div>
          <div class="drug-detail-grid">
            <div class="drug-detail-item">
              <span class="detail-label">🎯 ${isCs ? 'Dávkování & titrace:' : 'Dosificación y titulación:'}</span>
              <span class="detail-val">${drug.dose}</span>
            </div>
            <div class="drug-detail-item">
              <span class="detail-label">⚠️ ${isCs ? 'Klíčové upozornění / Perla:' : 'Advertencia clave / Perla:'}</span>
              <span class="detail-val warning-val">${drug.warning}</span>
            </div>
          </div>
        </div>
      `;
    }

    phenoBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        phenoBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        updatePhenotype(btn.dataset.pheno);
      });
    });

    bubbles.forEach(b => {
      b.addEventListener('mouseenter', () => {
        const drug = drugs.find(d => d.id === b.dataset.drugid);
        if (drug) showDrugDetail(drug);
      });
      b.addEventListener('click', () => {
        const drug = drugs.find(d => d.id === b.dataset.drugid);
        if (drug) showDrugDetail(drug);
      });
    });

    showDrugDetail(drugs[0]);
  }

  // -------------------------------------------------------------
  // 4. HTN: ESC 2024 BP Category & SPC Dial / Meter
  // -------------------------------------------------------------
  function renderHtnWidget(container, lang) {
    const isCs = lang === 'cs';
    const html = `
      <div class="interactive-widget-box" id="widget-htn">
        <div class="widget-header">
          <div class="widget-badge">🩺 ${isCs ? 'Interaktivní měřič krevního tlaku & ESC 2024 algoritmus' : 'Medidor Interactivo de PA y Algoritmo ESC 2024'}</div>
          <p class="widget-subtitle">${isCs ? 'Nastavte hodnoty systolického a diastolického tlaku a sledujte 3 nové kategorie ESC 2024 a doporučenou léčbu.' : 'Ajuste la PA sistólica y diastólica para ver las 3 nuevas categorías ESC 2024 y la terapia recomendada.'}</p>
        </div>

        <div class="htn-sliders-grid">
          <div class="widget-control-group">
            <label for="htn-sbp-slider">${isCs ? 'Systolický TK (sTK):' : 'PA Sistólica (PAS):'} <strong id="htn-sbp-val" class="val-display">145 mmHg</strong></label>
            <input type="range" id="htn-sbp-slider" min="90" max="210" value="145" class="custom-slider">
            <div class="slider-ticks"><span>90 mmHg</span><span>120</span><span>140</span><span>210 mmHg</span></div>
          </div>

          <div class="widget-control-group">
            <label for="htn-dbp-slider">${isCs ? 'Diastolický TK (dTK):' : 'PA Diastólica (PAD):'} <strong id="htn-dbp-val" class="val-display">92 mmHg</strong></label>
            <input type="range" id="htn-dbp-slider" min="50" max="130" value="92" class="custom-slider">
            <div class="slider-ticks"><span>50 mmHg</span><span>70</span><span>90</span><span>130 mmHg</span></div>
          </div>
        </div>

        <div class="htn-gauge-visual" id="htn-gauge-box">
          <!-- Dynamically updated -->
        </div>

        <div class="htn-rx-recommendation" id="htn-rx-box">
          <!-- Dynamically updated -->
        </div>
      </div>
    `;
    container.innerHTML = html;

    const sbpSlider = container.querySelector('#htn-sbp-slider');
    const dbpSlider = container.querySelector('#htn-dbp-slider');
    const sbpVal = container.querySelector('#htn-sbp-val');
    const dbpVal = container.querySelector('#htn-dbp-val');
    const gaugeBox = container.querySelector('#htn-gauge-box');
    const rxBox = container.querySelector('#htn-rx-box');

    function updateHtn() {
      const sbp = parseInt(sbpSlider.value, 10);
      const dbp = parseInt(dbpSlider.value, 10);
      sbpVal.textContent = `${sbp} mmHg`;
      dbpVal.textContent = `${dbp} mmHg`;

      let cat = 'hypertension';
      if (sbp < 120 && dbp < 70) {
        cat = 'nonelevated';
      } else if (sbp < 140 && dbp < 90) {
        cat = 'elevated';
      } else {
        cat = 'hypertension';
      }

      if (cat === 'nonelevated') {
        gaugeBox.className = 'htn-gauge-visual cat-nonelevated';
        gaugeBox.innerHTML = `
          <div class="gauge-bar"><div class="gauge-fill" style="width: 25%;"></div></div>
          <div class="gauge-status">
            <span class="status-badge">🟢 ${isCs ? 'Non-Elevated BP (Nezvýšený TK)' : 'PA No Elevada'}</span>
            <span class="status-range">&lt; 120 / &lt; 70 mmHg</span>
          </div>
        `;
        rxBox.innerHTML = `
          <div class="htn-rx-card">
            <h4>🌿 ${isCs ? 'Doporučený postup (ESC 2024):' : 'Conducta recomendada (ESC 2024):'}</h4>
            <p>${isCs ? 'Zdravý životní styl, vyvážená strava (DASH/středomořská), omezení sodíku (< 2g/den), pravidelný pohyb. Kontrola tlaku za 3 roky.' : 'Estilo de vida saludable, dieta DASH/mediterránea, restricción de sodio (<2g/día), ejercicio regular. Reevaluar en 3 años.'}</p>
          </div>
        `;
      } else if (cat === 'elevated') {
        gaugeBox.className = 'htn-gauge-visual cat-elevated';
        gaugeBox.innerHTML = `
          <div class="gauge-bar"><div class="gauge-fill" style="width: 60%;"></div></div>
          <div class="gauge-status">
            <span class="status-badge">🟡 ${isCs ? 'Elevated BP (Zvýšený TK)' : 'PA Elevada'}</span>
            <span class="status-range">120–139 / 70–89 mmHg</span>
          </div>
        `;
        rxBox.innerHTML = `
          <div class="htn-rx-card">
            <h4>⚠️ ${isCs ? 'Doporučený postup (ESC 2024):' : 'Conducta recomendada (ESC 2024):'}</h4>
            <p>${isCs ? 'Intenzivní režimová opatření na 3 měsíce. Farmakoterapie zvážena, pokud má pacient vysoké KV riziko (SCORE2 ≥ 10 %, diabetes, CKD nebo známé KVO) s cílem sTK 120–129 mmHg.' : 'Cambios intensivos de estilo de vida durante 3 meses. Considerar fármacos si alto riesgo CV (SCORE2 ≥ 10%, diabetes, ERC o ECV establecida) con objetivo PAS 120-129 mmHg.'}</p>
          </div>
        `;
      } else {
        const isGrade2 = sbp >= 160 || dbp >= 100;
        gaugeBox.className = 'htn-gauge-visual cat-hypertension';
        gaugeBox.innerHTML = `
          <div class="gauge-bar"><div class="gauge-fill" style="width: 100%;"></div></div>
          <div class="gauge-status">
            <span class="status-badge">🔴 ${isCs ? 'Hypertension (Hypertenze)' : 'Hipertensión Arterial'} ${isGrade2 ? '(Grade 2)' : '(Grade 1)'}</span>
            <span class="status-range">≥ 140 / ≥ 90 mmHg</span>
          </div>
        `;
        rxBox.innerHTML = `
          <div class="htn-rx-card">
            <h4>💊 ${isCs ? 'Doporučený léčebný postup (ESC 2024):' : 'Tratamiento recomendado (ESC 2024):'}</h4>
            <div class="htn-steps-list">
              <div class="htn-step-item">
                <strong>${isCs ? 'Krok 1 (Základ):' : 'Paso 1 (Inicial):'}</strong> ${isCs ? 'Dvojkombinace v 1 tabletě (SPC): ACEi / ARB + BKK nebo thiazidové diuretikum (např. Perindopril + Amlodipin).' : 'Doble combinación en 1 comprimido (SPC): IECA/ARA-II + BCC o diurético tiazídico.'}
              </div>
              <div class="htn-step-item">
                <strong>${isCs ? 'Krok 2 (Při neúčinnosti):' : 'Paso 2 (Si no se controla):'}</strong> ${isCs ? 'Trojkombinace v 1 tabletě (SPC): ACEi / ARB + BKK + Diuretikum.' : 'Triple combinación en 1 comprimido (SPC): IECA/ARA-II + BCC + Diurético.'}
              </div>
              <div class="htn-step-item">
                <strong>${isCs ? 'Krok 3 (Rezistentní hypertenze):' : 'Paso 3 (HTA Resistente):'}</strong> ${isCs ? 'Přidat Spironolakton (25-50 mg qd) nebo zvážit renální denervaci (RDN).' : 'Añadir Espironolactona (25-50 mg/d) o considerar denervación renal.'}
              </div>
            </div>
            <div class="htn-target-box">🎯 ${isCs ? 'Cílový systolický tlak:' : 'Objetivo PAS:'} <strong>120–129 mmHg</strong> ${isCs ? '(pokud je tolerován)' : '(si se tolera)'}</div>
          </div>
        `;
      }
    }

    sbpSlider.addEventListener('input', updateHtn);
    dbpSlider.addEventListener('input', updateHtn);
    updateHtn();
  }

  // -------------------------------------------------------------
  // 5. AFIB: Progressive Expandable AF-CARE Flowchart
  // -------------------------------------------------------------
  function renderAfibWidget(container, lang) {
    const isCs = lang === 'cs';
    const afCareNodes = [
      {
        id: 'c',
        letter: 'C',
        title: isCs ? 'Comorbidity & Risk Factors' : 'Comorbilidades y Factores de Riesgo',
        short: isCs ? 'Léčba komorbidit a životní styl' : 'Manejo de comorbilidades y estilo de vida',
        details: [
          { subtitle: isCs ? 'Klíčové rizikové faktory' : 'Factores clave', text: isCs ? 'Hypertenze (cíl <130/80), Obezita (redukce váhy o ≥ 10 % snižuje recidivy FS na polovinu!), Spánková apnoe (CPAP terapie), Diabetes mellitus, abstinence alkoholu.' : 'Hipertensión (objetivo <130/80), Obesidad (¡reducción de peso ≥10% reduce recidivas a la mitad!), Apnea del sueño (CPAP), Diabetes, abstinencia alcohólica.' },
          { subtitle: isCs ? 'Intervence' : 'Intervención', text: isCs ? 'Režimová opatření + optimalizace kardiovaskulární farmakoterapie.' : 'Estilo de vida + optimización farmacológica cardiovascular.' }
        ]
      },
      {
        id: 'a',
        letter: 'A',
        title: isCs ? 'Avoid stroke & thromboembolism' : 'Evitar Ictus y Tromboembolismo',
        short: isCs ? 'Antikoagulační léčba (NOAC)' : 'Anticoagulación oral (ACOD)',
        details: [
          { subtitle: isCs ? 'Indikační kritéria' : 'Criterios de indicación', text: isCs ? 'CHA₂DS₂-VA skóre ≥ 2 u mužů / ≥ 3 u žen = Třída I (NOAC preferována před Warfarinem). U skóre 1 u mužů / 2 u žen = Třída IIa.' : 'Puntuación CHA₂DS₂-VA ≥ 2 en hombres / ≥ 3 en mujeres = Clase I (ACOD de elección). Puntuación 1 en hombres / 2 en mujeres = Clase IIa.' },
          { subtitle: isCs ? 'Volba léku' : 'Elección de fármaco', text: isCs ? 'Apixaban 5 mg bid, Rivaroxaban 20 mg qd, Dabigatran 150 mg bid, Edoxaban 60 mg qd. Při KI antikoagulace: perkutánní uzávěr ouška LS (LAAO).' : 'Apixabán 5 mg c/12h, Rivaroxabán 20 mg/d, Dabigatrán 150 mg c/12h, Edoxabán 60 mg/d. Si contraindicación: cierre de orejuela izquierda.' }
        ]
      },
      {
        id: 'r',
        letter: 'R',
        title: isCs ? 'Reduce symptoms: Rate & Rhythm' : 'Reducción de Síntomas: Frecuencia y Ritmo',
        short: isCs ? 'Kontrola frekvence vs. Časná kontrola rytmu' : 'Control de frecuencia vs. Control de ritmo',
        details: [
          { subtitle: isCs ? 'Kontrola frekvence (Rate)' : 'Control de frecuencia (Rate)', text: isCs ? 'Cílová klidová TF < 110/min. Lékem 1. volby jsou Beta-blokátory, alternativně Verapamil/Diltiazem (pouze při zachovalé EF LK > 40%) nebo Digoxin.' : 'FC diana en reposo < 110 lpm. Primera línea: Betabloqueantes; alternativa: Verapamilo/Diltiazem (solo con FEVI > 40%) o Digoxina.' },
          { subtitle: isCs ? 'Kontrola rytmu (Rhythm)' : 'Control del ritmo (Rhythm)', text: isCs ? 'Katetrizační ablace (PVI) prvoliniově u paroxyzmální FS i u srdečního selhání HFrEF! Časná kontrola rytmu (EAST-AFNET 4) snižuje kardiovaskulární mortalitu.' : '¡Ablación por catéter (PVI) de primera línea en FA paroxística y en IC con FEVI reducida! Control temprano del ritmo (EAST-AFNET 4) reduce mortalidad.' }
        ]
      },
      {
        id: 'e',
        letter: 'E',
        title: isCs ? 'Evaluation & Dynamic Follow-up' : 'Evaluación y Seguimiento Dinámico',
        short: isCs ? 'Pravidelné přehodnocování a sledování' : 'Reevaluación periódica y monitorización',
        details: [
          { subtitle: isCs ? 'Pravidelné kontroly' : 'Controles periódicos', text: isCs ? 'Minimálně 1x ročně kontrola renálních funkcí (kalkulace clearance kreatininu dle Cockcroft-Gaulta pro dávkování NOAC) a jaterních testů.' : 'Control anual de función renal (aclaramiento de creatinina Cockcroft-Gault para ajustar ACOD) y función hepática.' },
          { subtitle: isCs ? 'Detekce recidiv' : 'Detección de recidivas', text: isCs ? 'Holter EKG, nositelná elektronika (smartwatches), kontrola adherence k antikoagulaci.' : 'Holter ECG, dispositivos wearables (smartwatch), control estricto de adherencia a anticoagulación.' }
        ]
      }
    ];

    const html = `
      <div class="interactive-widget-box" id="widget-afib">
        <div class="widget-header">
          <div class="widget-badge">🌳 ${isCs ? 'Interaktivní strom přístupu AF-CARE (ESC 2024)' : 'Árbol Interactivo del Enfoque AF-CARE (ESC 2024)'}</div>
          <p class="widget-subtitle">${isCs ? 'Klikněte na jednotlivé pilíře C-A-R-E pro postupné rozbalení detailních větví a doporučení.' : 'Haga clic en los pilares C-A-R-E para desplegar progresivamente las ramas y recomendaciones.'}</p>
        </div>

        <div class="afib-care-grid">
          ${afCareNodes.map(node => `
            <div class="afib-care-card" id="care-card-${node.id}">
              <div class="care-card-header" data-nodeid="${node.id}">
                <div class="care-letter-badge">${node.letter}</div>
                <div class="care-header-text">
                  <h4>${node.title}</h4>
                  <span class="care-short-desc">${node.short}</span>
                </div>
                <span class="care-toggle-icon">▼</span>
              </div>
              <div class="care-branches-container" id="branches-${node.id}">
                ${node.details.map((d, i) => `
                  <div class="care-sub-branch">
                    <div class="sub-branch-badge">🌿 ${isCs ? 'Větev' : 'Rama'} ${i+1}: ${d.subtitle}</div>
                    <p class="sub-branch-text">${d.text}</p>
                  </div>
                `).join('')}
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
    container.innerHTML = html;

    container.querySelectorAll('.care-card-header').forEach(header => {
      header.addEventListener('click', () => {
        const card = header.closest('.afib-care-card');
        card.classList.toggle('expanded');
      });
    });

    container.querySelector('#care-card-c')?.classList.add('expanded');
  }

  // -------------------------------------------------------------
  // 6. ARYTMIE: Emergency Tachycardia Station
  // -------------------------------------------------------------
  function renderArytmieWidget(container, lang) {
    const isCs = lang === 'cs';
    const scenarios = [
      {
        id: 'unstable',
        name: isCs ? '⚡ Nestabilní tachykardie' : '⚡ Taquicardia Inestable',
        tag: isCs ? 'Šok / Hypotenze / Edém plic' : 'Shock / Hipotensión / EAP',
        step1: isCs ? 'Okamžitá synchronizovaná elektrická kardioverze (100–200 J).' : 'Cardioversión eléctrica sincronizada inmediata (100-200 J).',
        step2: isCs ? 'Před výbojem analgosedace (pokud to stav a čas dovolí). Při neúspěchu eskalace na max. energii.' : 'Sedación previa si el estado lo permite. Si fracasa, escalar a máxima energía.'
      },
      {
        id: 'avnrt',
        name: isCs ? '💉 Stabilní AVNRT / AVRT (Úzkokomorová)' : '💉 AVNRT / AVRT Estable (QRS estrecho)',
        tag: isCs ? 'QRS < 120 ms, Pravidelná' : 'QRS < 120 ms, Regular',
        step1: isCs ? '1. Krok: Modifikovaný Valsalvův manévr (výdech proti odporu 40 mmHg na 15s + pasivní zvednutí nohou o 45°).' : 'Paso 1: Maniobra de Valsalva modificada (espiración contra 40 mmHg 15s + elevación pasiva de piernas 45°).',
        step2: isCs ? '2. Krok: Adenosin 6 mg i.v. rychlý bolus → při neúspěchu 12 mg → 18 mg (s proplachem 20ml FR). Varování: KI u astmatu a WPW s FS!' : 'Paso 2: Adenosina 6 mg i.v. en bolo rápido → si no cede, 12 mg → 18 mg (+ bolo 20ml SF). ¡Contraindicada en asma y WPW con FA!'
      },
      {
        id: 'vt',
        name: isCs ? '🟣 Stabilní komorová tachykardie (VT)' : '🟣 Taquicardia Ventricular Estable (QRS ancho)',
        tag: isCs ? 'QRS ≥ 120 ms, Monomorfní' : 'QRS ≥ 120 ms, Monomórfica',
        step1: isCs ? 'Amiodaron 300 mg i.v. v infúzi během 20-60 minut (nebo Procainamid).' : 'Amiodarona 300 mg i.v. en infusión durante 20-60 min (o Procainamida).',
        step2: isCs ? 'Při selhání farmakoterapie nebo známkách nestability: plánovaná synchronizovaná kardioverze.' : 'Si fracaso farmacológico o signos de deterioro: cardioversión sincronizada.'
      }
    ];

    let current = scenarios[1];

    const html = `
      <div class="interactive-widget-box" id="widget-arytmie">
        <div class="widget-header">
          <div class="widget-badge">⚡ ${isCs ? 'Akutní stanice pro management tachykardií (ESC Guidelines)' : 'Estación de Emergencia: Manejo de Taquiarritmias'}</div>
          <p class="widget-subtitle">${isCs ? 'Vyberte klinický scénář pro spuštění záchranného protokolu krok za krokem.' : 'Seleccione el escenario clínico para ver el protocolo de rescate paso a paso.'}</p>
        </div>

        <div class="arytmie-tabs-row">
          ${scenarios.map(s => `
            <button class="arytmie-tab-btn ${s.id === 'avnrt' ? 'active' : ''}" data-scenid="${s.id}">
              <strong>${s.name}</strong>
              <span class="arytmie-tab-tag">${s.tag}</span>
            </button>
          `).join('')}
        </div>

        <div class="arytmie-action-display" id="arytmie-action-box">
          <!-- Dynamically filled -->
        </div>
      </div>
    `;
    container.innerHTML = html;

    const actionBox = container.querySelector('#arytmie-action-box');
    const tabs = container.querySelectorAll('.arytmie-tab-btn');

    function renderScenario(s) {
      actionBox.innerHTML = `
        <div class="arytmie-flow-card animate-fade-in">
          <div class="flow-header">
            <h4>${s.name}</h4>
            <span class="flow-tag">${s.tag}</span>
          </div>
          <div class="flow-steps">
            <div class="flow-step-box step-primary">
              <span class="step-num">1</span>
              <div>
                <strong>${isCs ? 'Primární intervence:' : 'Intervención inicial:'}</strong>
                <p>${s.step1}</p>
              </div>
            </div>
            <div class="flow-step-box step-secondary">
              <span class="step-num">2</span>
              <div>
                <strong>${isCs ? 'Následný krok při neúspěchu:' : 'Siguiente paso si no responde:'}</strong>
                <p>${s.step2}</p>
              </div>
            </div>
          </div>
        </div>
      `;
    }

    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        const sc = scenarios.find(s => s.id === tab.dataset.scenid);
        if (sc) renderScenario(sc);
      });
    });

    renderScenario(current);
  }

  // -------------------------------------------------------------
  // 7. CHLOPNE: Severe Aortic Stenosis & TAVI vs SAVR Dial
  // -------------------------------------------------------------
  function renderChlopneWidget(container, lang) {
    const isCs = lang === 'cs';
    const html = `
      <div class="interactive-widget-box" id="widget-chlopne">
        <div class="widget-header">
          <div class="widget-badge">🚪 ${isCs ? 'Interaktivní kalkulátor závažnosti aortální stenózy & TAVI vs. SAVR' : 'Calculador de Estenosis Aórtica Severa y TAVI vs SAVR'}</div>
          <p class="widget-subtitle">${isCs ? 'Nastavte echokardiografické parametry aortální chlopně a věk pacienta dle ESC/EACTS 2021.' : 'Ajuste los parámetros ecocardiográficos y edad del paciente según guías ESC/EACTS 2021.'}</p>
        </div>

        <div class="widget-controls-grid">
          <div class="widget-control-group">
            <label for="as-vmax-slider">${isCs ? 'Maximální rychlost (Vmax):' : 'Velocidad máxima (Vmax):'} <strong id="as-vmax-val" class="val-display">4.2 m/s</strong></label>
            <input type="range" id="as-vmax-slider" min="1.5" max="5.5" step="0.1" value="4.2" class="custom-slider">
            <div class="slider-ticks"><span>1.5 m/s</span><span>3.0</span><span>4.0 (Těžká)</span><span>5.5 m/s</span></div>
          </div>

          <div class="widget-control-group">
            <label for="as-grad-slider">${isCs ? 'Střední tlakový gradient (ΔPmean):' : 'Gradiente medio (ΔPmedio):'} <strong id="as-grad-val" class="val-display">44 mmHg</strong></label>
            <input type="range" id="as-grad-slider" min="10" max="75" value="44" class="custom-slider">
            <div class="slider-ticks"><span>10 mmHg</span><span>30</span><span>40 (Těžká)</span><span>75 mmHg</span></div>
          </div>
        </div>

        <div class="as-patient-context">
          <label>${isCs ? 'Věk pacienta a operační riziko:' : 'Edad del paciente y riesgo quirúrgico:'}</label>
          <div class="as-age-toggles">
            <button class="as-age-btn active" data-age="old">👴 ${isCs ? 'Věk ≥ 75 let / Vysoké riziko (STS > 8 %)' : 'Edad ≥ 75 años / Alto riesgo (STS > 8%)'}</button>
            <button class="as-age-btn" data-age="young">🧑 ${isCs ? 'Věk < 75 let / Nízké chirurgické riziko' : 'Edad < 75 años / Bajo riesgo quirúrgico'}</button>
          </div>
        </div>

        <div class="as-decision-card" id="as-decision-box">
          <!-- Dynamically updated -->
        </div>
      </div>
    `;
    container.innerHTML = html;

    const vmaxSlider = container.querySelector('#as-vmax-slider');
    const gradSlider = container.querySelector('#as-grad-slider');
    const vmaxVal = container.querySelector('#as-vmax-val');
    const gradVal = container.querySelector('#as-grad-val');
    const ageBtns = container.querySelectorAll('.as-age-btn');
    const decisionBox = container.querySelector('#as-decision-box');

    let currentAge = 'old';

    function updateAs() {
      const vmax = parseFloat(vmaxSlider.value);
      const grad = parseInt(gradSlider.value, 10);
      vmaxVal.textContent = `${vmax.toFixed(1)} m/s`;
      gradVal.textContent = `${grad} mmHg`;

      const isSevere = vmax >= 4.0 || grad >= 40;

      if (isSevere) {
        if (currentAge === 'old') {
          decisionBox.className = 'as-decision-card decision-tavi';
          decisionBox.innerHTML = `
            <div class="decision-header">
              <span class="decision-badge">🔴 ${isCs ? 'TĚŽKÁ AORTÁLNÍ STENÓZA' : 'ESTENOSIS AÓRTICA SEVERA'}</span>
              <h4>⚡ ${isCs ? 'Doporučení: TAVI (Transkatetrová implantace chlopně)' : 'Recomendación: TAVI (Implante percutáneo)'}</h4>
            </div>
            <p>${isCs ? 'Pacient splňuje kritéria těžké AS (Vmax ≥ 4 m/s nebo gradient ≥ 40 mmHg). Vzhledem k věku ≥ 75 let je dle ESC/EACTS 2021 preferován transfemorální TAVI (Třída I, Úroveň A).' : 'Cumple criterios de EA severa (Vmax ≥ 4 m/s o gradiente ≥ 40 mmHg). Por edad ≥ 75 años, se recomienda TAVI transfemoral como primera opción (Clase I, Nivel A).'}</p>
          `;
        } else {
          decisionBox.className = 'as-decision-card decision-savr';
          decisionBox.innerHTML = `
            <div class="decision-header">
              <span class="decision-badge">🔴 ${isCs ? 'TĚŽKÁ AORTÁLNÍ STENÓZA' : 'ESTENOSIS AÓRTICA SEVERA'}</span>
              <h4>🔪 ${isCs ? 'Doporučení: SAVR (Chirurgická náhrada chlopně)' : 'Recomendación: SAVR (Sustitución quirúrgica)'}</h4>
            </div>
            <p>${isCs ? 'Pacient splňuje kritéria těžké AS. U pacientů < 75 let s nízkým chirurgickým rizikem je indikována chirurgická náhrada (SAVR) s volbou mechanické nebo biologické protézy.' : 'Cumple criterios de EA severa. En pacientes < 75 años y bajo riesgo quirúrgico, está indicada la cirugía convencional (SAVR) con prótesis mecánica o biológica.'}</p>
          `;
        }
      } else {
        decisionBox.className = 'as-decision-card decision-moderate';
        decisionBox.innerHTML = `
          <div class="decision-header">
            <span class="decision-badge">🟡 ${isCs ? 'LEHKÁ AŽ STŘEDNĚ TĚŽKÁ AS' : 'EA LEVE - MODERADA'}</span>
            <h4>👀 ${isCs ? 'Doporučení: Pravidelná dispenzarizace & Echo' : 'Recomendación: Seguimiento ecocardiográfico regular'}</h4>
          </div>
          <p>${isCs ? 'Hodnoty nedosahují prahu těžké stenózy (Vmax < 4.0 m/s a gradient < 40 mmHg). Doporučena kontrolní echokardiografie za 6-12 měsíců a edukace o varovných příznacích (dušnost, synkopa, stenokardie).' : 'Los valores no alcanzan el umbral de severidad (Vmax < 4.0 m/s y gradiente < 40 mmHg). Seguimiento clínico y ecocardiográfico en 6-12 meses.'}</p>
        `;
      }
    }

    vmaxSlider.addEventListener('input', updateAs);
    gradSlider.addEventListener('input', updateAs);

    ageBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        ageBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentAge = btn.dataset.age;
        updateAs();
      });
    });

    updateAs();
  }

  // -------------------------------------------------------------
  // 8. KMP: Targeted Molecule & Phenotype Explorer
  // -------------------------------------------------------------
  function renderKmpWidget(container, lang) {
    const isCs = lang === 'cs';
    const phenotypes = [
      {
        id: 'hcm',
        name: isCs ? '🧬 Hypertrofická KMP (HCM)' : '🧬 Miocardiopatía Hipertrófica (MCH)',
        drug: 'Mavacamten (Camzyos)',
        drugClass: isCs ? 'Alosterický inhibitor srdečního myosinu' : 'Inhibidor alostérico de la miosina cardíaca',
        mechanism: isCs ? 'Snižuje nadměrnou tvorbu aktin-myosinových můstků, odstraňuje obstrukci LVOT, zlepšuje plnění LK a symptomy NYHA.' : 'Reduce la formación excesiva de puentes actina-miosina, alivia la obstrucción del TSVI y mejora la clase NYHA.',
        pearl: isCs ? 'ESC HCM Risk-SCD kalkulátor: při riziku ≥ 6 % / 5 let je indikována primární prevence ICD!' : 'Calculador ESC HCM Risk-SCD: ¡si riesgo ≥ 6% a 5 años, está indicado DAI en prevención primaria!'
      },
      {
        id: 'amyloid',
        name: isCs ? '🛡️ ATTR Kardiální Amyloidóza' : '🛡️ Amiloidosis Cardíaca ATTR',
        drug: 'Tafamidis (Vyndaqel)',
        drugClass: isCs ? 'Kinetický stabilizátor tetrameru transthyretinu' : 'Estabilizador cinético del tetrámero de transtiretina',
        mechanism: isCs ? 'Zabraňuje disociaci tetrameru TTR na monomery a tvorbě toxických amyloidních fibril v myokardu. Snižuje mortalitu o 30 %.' : 'Previene la disociación de TTR en monómeros y depósito de fibrillas amiloides. Reduce la mortalidad un 30%.',
        pearl: isCs ? 'Diagnostika: Scintigrafie skeletu (99mTc-DPD) s vysokým záchytem v myokardu + vyloučení AL amyloidózy.' : 'Diagnóstico: Gammagrafía ósea con 99mTc-DPD con captación cardíaca Grado 2-3 + descartar cadenas ligeras (AL).'
      },
      {
        id: 'dcm',
        name: isCs ? '🫀 Dilatační KMP (DCM)' : '🫀 Miocardiopatía Dilatada (MCD)',
        drug: 'GDMT + ICD / CRT',
        drugClass: isCs ? 'Neurohumorální blokáda + Přístrojová léčba' : 'Bloqueo neurohumoral + Terapia con dispositivos',
        mechanism: isCs ? 'Reverzní remodelace LK pomocí 4 pilířů FMT (ARNI, BB, MRA, SGLT2i). Genetické testování (mutace LMNA, TTN, PLN).' : 'Remodelado inverso con 4 pilares FMT. Estudio genético de rutina (mutaciones LMNA, TTN, PLN).',
        pearl: isCs ? 'Indikace primárně preventivního ICD při LVEF ≤ 35 % i po 3 měsících optimální farmakoterapie.' : 'Indicación de DAI en prevención primaria si FEVI ≤ 35% tras 3 meses de terapia médica óptima.'
      }
    ];

    let current = phenotypes[0];

    const html = `
      <div class="interactive-widget-box" id="widget-kmp">
        <div class="widget-header">
          <div class="widget-badge">🎯 ${isCs ? 'Cílené molekuly & fenotypy kardiomyopatií (ESC 2023)' : 'Moléculas Dirigidas y Fenotipos de Miocardiopatías (ESC 2023)'}</div>
          <p class="widget-subtitle">${isCs ? 'Prozkoumejte moderní cílenou léčbu kardiomyopatií (Mavacamten, Tafamidis) na jeden klik.' : 'Explore los nuevos fármacos diana para miocardiopatías con un solo toque.'}</p>
        </div>

        <div class="kmp-selector-row">
          ${phenotypes.map(p => `
            <button class="kmp-pheno-btn ${p.id === 'hcm' ? 'active' : ''}" data-kmpid="${p.id}">
              ${p.name}
            </button>
          `).join('')}
        </div>

        <div class="kmp-display-card" id="kmp-card-box">
          <!-- Dynamically filled -->
        </div>
      </div>
    `;
    container.innerHTML = html;

    const cardBox = container.querySelector('#kmp-card-box');
    const btns = container.querySelectorAll('.kmp-pheno-btn');

    function renderKmp(p) {
      cardBox.innerHTML = `
        <div class="kmp-card-inner animate-fade-in">
          <div class="kmp-drug-header">
            <span class="kmp-icon">🧬</span>
            <div>
              <h4>${p.drug}</h4>
              <span class="kmp-drug-class">${p.drugClass}</span>
            </div>
          </div>
          <div class="kmp-body">
            <p class="kmp-mechanism"><strong>${isCs ? 'Mechanismus účinku:' : 'Mecanismo de acción:'}</strong> ${p.mechanism}</p>
            <div class="kmp-pearl-alert">📌 <strong>${isCs ? 'ESC Guideline Perla:' : 'Perla Guías ESC:'}</strong> ${p.pearl}</div>
          </div>
        </div>
      `;
    }

    btns.forEach(btn => {
      btn.addEventListener('click', () => {
        btns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const p = phenotypes.find(item => item.id === btn.dataset.kmpid);
        if (p) renderKmp(p);
      });
    });

    renderKmp(current);
  }

  // -------------------------------------------------------------
  // 9. ZANETY: Modified 2023 Duke Criteria & Pericarditis EKG
  // -------------------------------------------------------------
  function renderZanetyWidget(container, lang) {
    const isCs = lang === 'cs';
    const html = `
      <div class="interactive-widget-box" id="widget-zanety">
        <div class="widget-header">
          <div class="widget-badge">🔬 ${isCs ? 'Interaktivní kalkulátor Dukeových kritérií 2023 pro IE' : 'Criterios de Duke Modificados 2023 para Endocarditis'}</div>
          <p class="widget-subtitle">${isCs ? 'Zaškrtněte přítomná velká a malá kritéria infekční endokarditidy pro okamžité vyhodnocení pravděpodobnosti.' : 'Marque los criterios mayores y menores para evaluar la probabilidad diagnóstica.'}</p>
        </div>

        <div class="duke-grid">
          <div class="duke-col">
            <h5>🌟 ${isCs ? 'Velká kritéria (Major)' : 'Criterios Mayores'}</h5>
            <label class="duke-check-item">
              <input type="checkbox" class="duke-cb" data-type="major" id="duke-m1">
              <span>${isCs ? '2x Pozitivní hemokultury s typickým mikroorganismem' : '2 Hemocultivos positivos con microorganismo típico'}</span>
            </label>
            <label class="duke-check-item">
              <input type="checkbox" class="duke-cb" data-type="major" id="duke-m2">
              <span>${isCs ? 'ECHO/TEE: Vegetace, absces, nová dehiscence chlopně' : 'Ecocardiograma: Vegetación, absceso, dehiscencia protésica'}</span>
            </label>
            <label class="duke-check-item">
              <input type="checkbox" class="duke-cb" data-type="major" id="duke-m3">
              <span>${isCs ? 'PET/CT nebo CT srdce: Pozitivní metabolická aktivita' : 'PET/TC o TC cardíaco: Actividad metabólica positiva'}</span>
            </label>
          </div>

          <div class="duke-col">
            <h5>🔹 ${isCs ? 'Malá kritéria (Minor)' : 'Criterios Menores'}</h5>
            <label class="duke-check-item">
              <input type="checkbox" class="duke-cb" data-type="minor">
              <span>${isCs ? 'Predispozice (chlopenní protéza, i.v. drogy)' : 'Predisposición (prótesis, uso de drogas i.v.)'}</span>
            </label>
            <label class="duke-check-item">
              <input type="checkbox" class="duke-cb" data-type="minor">
              <span>${isCs ? 'Horečka ≥ 38.0 °C' : 'Fiebre ≥ 38.0 °C'}</span>
            </label>
            <label class="duke-check-item">
              <input type="checkbox" class="duke-cb" data-type="minor">
              <span>${isCs ? 'Vaskulární léze (Janewayovy léze, embolie)' : 'Fenómenos vasculares (lesiones de Janeway, émbolos)'}</span>
            </label>
            <label class="duke-check-item">
              <input type="checkbox" class="duke-cb" data-type="minor">
              <span>${isCs ? 'Imunologické léze (Oslerovy uzly, Rothovy skvrny)' : 'Fenómenos inmunológicos (nódulos de Osler, manchas de Roth)'}</span>
            </label>
          </div>
        </div>

        <div class="duke-result-card" id="duke-result-box">
          <!-- Dynamically filled -->
        </div>
      </div>
    `;
    container.innerHTML = html;

    const checkboxes = container.querySelectorAll('.duke-cb');
    const resultBox = container.querySelector('#duke-result-box');

    function updateDuke() {
      let majorCount = 0;
      let minorCount = 0;
      checkboxes.forEach(cb => {
        if (cb.checked) {
          if (cb.dataset.type === 'major') majorCount++;
          if (cb.dataset.type === 'minor') minorCount++;
        }
      });

      let status = 'rejected';
      if (majorCount >= 2 || (majorCount === 1 && minorCount >= 3) || minorCount >= 5) {
        status = 'definite';
      } else if ((majorCount === 1 && minorCount >= 1) || minorCount >= 3) {
        status = 'possible';
      }

      if (status === 'definite') {
        resultBox.className = 'duke-result-card status-definite';
        resultBox.innerHTML = `
          <div class="result-badge-row">
            <span class="duke-badge">🔴 ${isCs ? 'DEFINITIVNÍ INFEKČNÍ ENDOKARDITIDA' : 'ENDOCARDITIS DEFINITIVA'}</span>
            <span class="duke-score-count">Major: ${majorCount} | Minor: ${minorCount}</span>
          </div>
          <p>${isCs ? 'Pacient splňuje 2023 modifikovaná Dukeova kritéria pro definitivní IE. Indikována okamžitá cílená i.v. antibiotická terapie na 4-6 týdnů a konzultace Endocarditis Teamu ohledně včasné operace.' : 'Cumple criterios de Duke modificados para EI definitiva. Iniciar antibioterapia i.v. bactericida 4-6 semanas y valorar cirugía precoz con Endocarditis Team.'}</p>
        `;
      } else if (status === 'possible') {
        resultBox.className = 'duke-result-card status-possible';
        resultBox.innerHTML = `
          <div class="result-badge-row">
            <span class="duke-badge">🟡 ${isCs ? 'MOŽNÁ INFEKČNÍ ENDOKARDITIDA' : 'ENDOCARDITIS POSIBLE'}</span>
            <span class="duke-score-count">Major: ${majorCount} | Minor: ${minorCount}</span>
          </div>
          <p>${isCs ? 'Nález nevylučuje ani nepotvrzuje IE. Nutno provést TEE (transezofageální echo) a doplnit PET/CT u chlopenních náhrad a opakované hemokultury.' : 'Cuadro sugestivo pero no confirmatorio. Repetir hemocultivos y realizar ecocardiograma transesofágico (ETE) y PET/TC.'}</p>
        `;
      } else {
        resultBox.className = 'duke-result-card status-rejected';
        resultBox.innerHTML = `
          <div class="result-badge-row">
            <span class="duke-badge">🟢 ${isCs ? 'IE MÁLO PRAVDĚPODOBNÁ' : 'EI POCO PROBABLE'}</span>
            <span class="duke-score-count">Major: ${majorCount} | Minor: ${minorCount}</span>
          </div>
          <p>${isCs ? 'Kritéria pro IE nejsou splněna. Pátrejte po jiných zdrojích infekce.' : 'No cumple criterios diagnósticos. Buscar otros focos infecciosos.'}</p>
        `;
      }
    }

    checkboxes.forEach(cb => cb.addEventListener('change', updateDuke));
    updateDuke();
  }

  // -------------------------------------------------------------
  // 10. PE: sPESI & Hemodynamic Risk Calculator
  // -------------------------------------------------------------
  function renderPeWidget(container, lang) {
    const isCs = lang === 'cs';
    const html = `
      <div class="interactive-widget-box" id="widget-pe">
        <div class="widget-header">
          <div class="widget-badge">🫁 ${isCs ? 'Kalkulátor sPESI & stratifikace rizika plicní embolie' : 'Calculador sPESI y Estratificación de Riesgo en TEP'}</div>
          <p class="widget-subtitle">${isCs ? 'Zvolte přítomné rizikové faktory a hemodynamický stav pro stanovení mortality a léčebné strategie.' : 'Seleccione factores de riesgo y estado hemodinámico para ver la estrategia de reperfusión.'}</p>
        </div>

        <div class="pe-shock-toggle">
          <label class="shock-switch-label">
            <input type="checkbox" id="pe-shock-cb">
            <span class="shock-slider"></span>
            <span class="shock-text">⚠️ <strong>${isCs ? 'Hemodynamická nestabilita (Obstrukční šok / sTK < 90 mmHg)' : 'Inestabilidad Hemodinámica (Shock Obstructivo / PAS < 90 mmHg)'}</strong></span>
          </label>
        </div>

        <div class="spesi-items-grid">
          <label class="spesi-check"><input type="checkbox" class="spesi-cb"> <span>${isCs ? 'Věk > 80 let' : 'Edad > 80 años'} (+1)</span></label>
          <label class="spesi-check"><input type="checkbox" class="spesi-cb"> <span>${isCs ? 'Anamnéza malignity' : 'Cáncer / Malignidad'} (+1)</span></label>
          <label class="spesi-check"><input type="checkbox" class="spesi-cb"> <span>${isCs ? 'Chronické srdeční/plicní selhání' : 'Insuficiencia cardíaca/pulmonar crónica'} (+1)</span></label>
          <label class="spesi-check"><input type="checkbox" class="spesi-cb"> <span>${isCs ? 'Tepová frekvence ≥ 110 /min' : 'Frecuencia cardíaca ≥ 110 lpm'} (+1)</span></label>
          <label class="spesi-check"><input type="checkbox" class="spesi-cb"> <span>${isCs ? 'Systolický TK < 100 mmHg' : 'PA Sistólica < 100 mmHg'} (+1)</span></label>
          <label class="spesi-check"><input type="checkbox" class="spesi-cb"> <span>${isCs ? 'Saturace SpO₂ < 90 %' : 'Saturación SpO₂ < 90%'} (+1)</span></label>
        </div>

        <div class="pe-result-card" id="pe-result-box">
          <!-- Dynamically filled -->
        </div>
      </div>
    `;
    container.innerHTML = html;

    const shockCb = container.querySelector('#pe-shock-cb');
    const spesiCbs = container.querySelectorAll('.spesi-cb');
    const resultBox = container.querySelector('#pe-result-box');

    function updatePe() {
      const isShock = shockCb.checked;
      let spesiScore = 0;
      spesiCbs.forEach(cb => { if (cb.checked) spesiScore++; });

      if (isShock) {
        resultBox.className = 'pe-result-card status-high-risk';
        resultBox.innerHTML = `
          <div class="result-badge-row">
            <span class="pe-risk-badge">🔴 ${isCs ? 'VYSOKÉ RIZIKO (HIGH RISK - ŠOK)' : 'ALTO RIESGO (SHOCK OBSTRUCTIVO)'}</span>
            <span class="pe-mortality">${isCs ? 'Časná mortalita > 15-20 %' : 'Mortalidad precoz > 15-20%'}</span>
          </div>
          <p>${isCs ? 'Okamžitá systémová trombolýza (Altepláza 100 mg / 2h nebo 0.6 mg/kg / 15 min bolus) + nefrakcionovaný heparin (UFH). Při kontraindikaci: chirurgická embolectomie nebo katetrová embolectomie.' : 'Trombolisis sistémica urgente (Alteplasa 100 mg en 2h o bolo 0.6 mg/kg) + heparina no fraccionada (HNF). Si contraindicación: embolectomía quirúrgica o por catéter.'}</p>
        `;
      } else if (spesiScore >= 1) {
        resultBox.className = 'pe-result-card status-intermediate-risk';
        resultBox.innerHTML = `
          <div class="result-badge-row">
            <span class="pe-risk-badge">🟡 ${isCs ? 'STŘEDNÍ RIZIKO (INTERMEDIATE RISK)' : 'RIESGO INTERMEDIO'}</span>
            <span class="pe-mortality">sPESI = ${spesiScore} (${isCs ? 'Mortalita 3–11 %' : 'Mortalidad 3-11%'})</span>
          </div>
          <p>${isCs ? 'Hospitalizace na monitorovaném lůžku, antikoagulace (LMWH nebo NOAC). Pokud je přítomna dysfunkce PK na Echo/CT A pozitivní troponin (Intermediate-High), připravit možnost záchranné reperfúze.' : 'Ingreso hospitalario monitorizado, anticoagulación con HBPM o ACOD. Si disfunción de VD + troponina positiva (Riesgo Intermedio-Alto), vigilar estrechamente para reperfusión de rescate.'}</p>
        `;
      } else {
        resultBox.className = 'pe-result-card status-low-risk';
        resultBox.innerHTML = `
          <div class="result-badge-row">
            <span class="pe-risk-badge">🟢 ${isCs ? 'NÍZKÉ RIZIKO (LOW RISK)' : 'BAJO RIESGO'}</span>
            <span class="pe-mortality">sPESI = 0 (${isCs ? '30denní mortalita ~ 1 %' : 'Mortalidad a 30d ~ 1%'})</span>
          </div>
          <p>${isCs ? 'Antikoagulace perorálními NOAC (Apixaban / Rivaroxaban). Možné časné propuštění a ambulantní doléčení při zajištěném sociálním zázemí.' : 'Anticoagulación oral con ACOD (Apixabán / Rivaroxabán). Posibilidad de alta precoz y tratamiento ambulatorio.'}</p>
        `;
      }
    }

    shockCb.addEventListener('change', updatePe);
    spesiCbs.forEach(cb => cb.addEventListener('change', updatePe));
    updatePe();
  }

  // -------------------------------------------------------------
  // 11. CCS: Diamond Pre-test Probability & Diagnostic Pathfinder
  // -------------------------------------------------------------
  function renderCcsWidget(container, lang) {
    const isCs = lang === 'cs';
    const html = `
      <div class="interactive-widget-box" id="widget-ccs">
        <div class="widget-header">
          <div class="widget-badge">💎 ${isCs ? 'ESC 2024 PTP kalkulátor & diagnostický rozcestník ICHS' : 'Calculador PTP y Algoritmo Diagnóstico de SCC (ESC 2024)'}</div>
          <p class="widget-subtitle">${isCs ? 'Zadejte charakter bolesti na hrudi a profil pacienta pro výpočet předtestové pravděpodobnosti a volbu vyšetření.' : 'Seleccione las características del dolor y perfil del paciente para calcular la probabilidad pre-test.'}</p>
        </div>

        <div class="ccs-controls-grid">
          <div class="widget-control-group">
            <label>${isCs ? 'Typ symptomů / bolesti:' : 'Tipo de síntomas / dolor:'}</label>
            <select id="ccs-pain-type" class="custom-select">
              <option value="typical">${isCs ? 'Typická angina pectoris (3/3 kritéria)' : 'Angina típica (3/3 criterios)'}</option>
              <option value="atypical" selected>${isCs ? 'Atypická angina pectoris (2/3 kritéria)' : 'Angina atípica (2/3 criterios)'}</option>
              <option value="nonanginal">${isCs ? 'Nekardiální / Neangiciózní bolest (≤1 kritérium)' : 'Dolor no anginoso (≤1 criterio)'}</option>
            </select>
          </div>

          <div class="widget-control-group">
            <label>${isCs ? 'Věk a pohlaví pacienta:' : 'Edad y sexo del paciente:'}</label>
            <div class="ccs-sex-age-row">
              <select id="ccs-sex" class="custom-select" style="flex: 1;">
                <option value="male">${isCs ? 'Muž' : 'Varón'}</option>
                <option value="female">${isCs ? 'Žena' : 'Mujer'}</option>
              </select>
              <select id="ccs-age" class="custom-select" style="flex: 1;">
                <option value="young">&lt; 50 let</option>
                <option value="middle" selected>50–65 let</option>
                <option value="old">&gt; 65 let</option>
              </select>
            </div>
          </div>
        </div>

        <div class="ccs-result-card" id="ccs-result-box">
          <!-- Dynamically filled -->
        </div>
      </div>
    `;
    container.innerHTML = html;

    const painSelect = container.querySelector('#ccs-pain-type');
    const sexSelect = container.querySelector('#ccs-sex');
    const ageSelect = container.querySelector('#ccs-age');
    const resultBox = container.querySelector('#ccs-result-box');

    function updateCcs() {
      const pain = painSelect.value;
      const sex = sexSelect.value;
      const age = ageSelect.value;

      let ptpScore = 15;
      if (pain === 'typical') {
        ptpScore = sex === 'male' ? (age === 'old' ? 45 : 30) : (age === 'old' ? 30 : 15);
      } else if (pain === 'atypical') {
        ptpScore = sex === 'male' ? (age === 'old' ? 20 : 12) : (age === 'old' ? 10 : 5);
      } else {
        ptpScore = sex === 'male' ? (age === 'old' ? 8 : 4) : 2;
      }

      if (ptpScore < 5) {
        resultBox.className = 'ccs-result-card status-very-low';
        resultBox.innerHTML = `
          <div class="result-badge-row">
            <span class="ccs-ptp-badge">🟢 ${isCs ? 'Velmi nízká PTP' : 'Muy Baja PTP'} (&lt; 5 %)</span>
            <span class="ccs-rec-title">🔍 ${isCs ? 'Vyšetření ICHS není indikováno' : 'No se precisan más pruebas'}</span>
          </div>
          <p>${isCs ? 'Pravděpodobnost obstrukční ICHS je zanedbatelná. Doporučeno pátrat po nekardiální etiologii (pohybový aparát, GERD).' : 'Probabilidad de enfermedad coronaria obstructiva despreciable. Investigar causas no cardíacas.'}</p>
        `;
      } else if (ptpScore <= 15) {
        resultBox.className = 'ccs-result-card status-ccta';
        resultBox.innerHTML = `
          <div class="result-badge-row">
            <span class="ccs-ptp-badge">🟡 ${isCs ? 'Nízká až střední PTP' : 'PTP Baja-Intermedia'} (${ptpScore} %)</span>
            <span class="ccs-rec-title">⚡ ${isCs ? 'Zlatý standard: CCTA (CT koronarografie)' : 'Elección: Angio-TC Coronario (CCTA)'}</span>
          </div>
          <p>${isCs ? 'Dle ESC 2024 je CCTA vyšetřením 1. volby pro vyloučení stenóz díky vynikající negativní prediktivní hodnotě a zhodnocení anatomie plátů.' : 'Según ESC 2024, la Angio-TC coronaria es la prueba de 1ª línea por su excelente valor predictivo negativo.'}</p>
        `;
      } else {
        resultBox.className = 'ccs-result-card status-stress';
        resultBox.innerHTML = `
          <div class="result-badge-row">
            <span class="ccs-ptp-badge">🔴 ${isCs ? 'Střední až vysoká PTP' : 'PTP Intermedia-Alta'} (${ptpScore} %)</span>
            <span class="ccs-rec-title">🫀 ${isCs ? 'Zátěžové funkční zobrazení / Koronarografie' : 'Prueba de Imagen de Estrés / Coronariografía'}</span>
          </div>
          <p>${isCs ? 'Indikováno neinvazivní funkční zátěžové zobrazení (Stress CMR, zátěžové echo nebo SPECT) k průkazu indukovatelné ischémie myokardu. Při vysokém riziku přímo invazivní koronarografie s FFR/iwFR.' : 'Indicada imagen de estrés (RMN cardíaca de estrés, ecocardiograma de estrés o SPECT) para objetivar isquemia.'}</p>
        `;
      }
    }

    painSelect.addEventListener('change', updateCcs);
    sexSelect.addEventListener('change', updateCcs);
    ageSelect.addEventListener('change', updateCcs);
    updateCcs();
  }

  // -------------------------------------------------------------
  // 12. EKG: Cabrera Vector Compass & Smith-Sgarbossa STEMI in LBBB
  // -------------------------------------------------------------
  function renderEkgWidget(container, lang) {
    const isCs = lang === 'cs';
    const axes = [
      { id: 'norm', name: isCs ? 'Normální sklon osy (-30° až +90°)' : 'Eje Normal (-30° a +90°)', icon: '🧭', desc: isCs ? 'Pozitivní QRS svody I a aVF. Fyziologický nález u zdravých dospělých.' : 'QRS positivo en I y aVF. Hallazgo fisiológico normal.' },
      { id: 'lad', name: isCs ? 'Levogram (osa < -30°)' : 'Desviación Izquierda (eje < -30°)', icon: '↖️', desc: isCs ? 'Pozitivní svod I, negativní svody II a aVF. Příčiny: LAHB (levý přední hemiblok), hypertrofie levé komory (LVH), starý dolní infarkt.' : 'QRS positivo en I, negativo en II y aVF. Causas: HBAI, hipertrofia ventricular izquierda, infarto inferior previo.' },
      { id: 'rad', name: isCs ? 'Pravogram (osa > +90°)' : 'Desviación Derecha (eje > +90°)', icon: '↘️', desc: isCs ? 'Negativní svod I, pozitivní svod aVF. Příčiny: LPHB (levý zadní hemiblok), přetížení/hypertrofie pravé komory (RVH), plicní embolie.' : 'QRS negativo en I, positivo en aVF. Causas: HBPI, sobrecarga de ventrículo derecho, TEP.' }
    ];

    let currentAxis = axes[0];

    const html = `
      <div class="interactive-widget-box" id="widget-ekg">
        <div class="widget-header">
          <div class="widget-badge">📈 ${isCs ? 'Interaktivní EKG kompas osy & Smith-Sgarbossa kalkulátor' : 'Brújula de Eje ECG y Criterios de Smith-Sgarbossa'}</div>
          <p class="widget-subtitle">${isCs ? 'Kliknutím na osu ověřte diferenciální diagnostiku sklonu a vyzkoušejte pravidla pro STEMI při LBBB.' : 'Explore la desviación del eje y verifique infarto agudo en presencia de bloqueo de rama izquierda.'}</p>
        </div>

        <div class="ekg-axis-selector">
          ${axes.map(a => `
            <button class="ekg-axis-btn ${a.id === 'norm' ? 'active' : ''}" data-axisid="${a.id}">
              <span class="axis-icon">${a.icon}</span>
              <span>${a.name}</span>
            </button>
          `).join('')}
        </div>

        <div class="ekg-axis-info" id="ekg-axis-info-box">
          <p>${currentAxis.desc}</p>
        </div>

        <div class="sgarbossa-interactive-box">
          <h5 class="sgarbossa-title">🚨 ${isCs ? 'Modifikovaná Smith-Sgarbossa kritéria pro STEMI při LBBB / kardiostimulaci:' : 'Criterios de Smith-Sgarbossa para IAM con Bloqueo de Rama Izquierda:'}</h5>
          <div class="sgarbossa-checks">
            <label class="sgarbossa-item">
              <input type="checkbox" class="sgarbossa-cb" id="sg-c1">
              <span><strong>${isCs ? 'Konkordantní ST elevace ≥ 1 mm' : 'Elevación concordante de ST ≥ 1 mm'}</strong> ${isCs ? 'v kterémkoliv svodu (+5 bodů)' : 'en cualquier derivación (+5 pts)'}</span>
            </label>
            <label class="sgarbossa-item">
              <input type="checkbox" class="sgarbossa-cb" id="sg-c2">
              <span><strong>${isCs ? 'Konkordantní ST deprese ≥ 1 mm' : 'Depresión concordante de ST ≥ 1 mm'}</strong> ${isCs ? 've svodech V1–V3 (+3 body)' : 'en derivaciones V1-V3 (+3 pts)'}</span>
            </label>
            <label class="sgarbossa-item">
              <input type="checkbox" class="sgarbossa-cb" id="sg-c3">
              <span><strong>${isCs ? 'Proporcionální diskordance: Poměr ST/S ≤ -0.25' : 'Discordancia desproporcionada: Ratio ST/S ≤ -0.25'}</strong> ${isCs ? '(elevace ST ≥ 25 % hloubky S kmitu)' : '(elevación ST ≥ 25% de la onda S)'}</span>
            </label>
          </div>
          <div class="sgarbossa-alert-box" id="sgarbossa-alert">
            <!-- Dynamically updated -->
          </div>
        </div>
      </div>
    `;
    container.innerHTML = html;

    const axisBtns = container.querySelectorAll('.ekg-axis-btn');
    const axisInfoBox = container.querySelector('#ekg-axis-info-box');
    const sgarbossaCbs = container.querySelectorAll('.sgarbossa-cb');
    const sgarbossaAlert = container.querySelector('#sgarbossa-alert');

    axisBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        axisBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const axis = axes.find(a => a.id === btn.dataset.axisid);
        if (axis) {
          axisInfoBox.innerHTML = `<p class="animate-fade-in">${axis.desc}</p>`;
        }
      });
    });

    function updateSgarbossa() {
      const c1 = container.querySelector('#sg-c1').checked;
      const c2 = container.querySelector('#sg-c2').checked;
      const c3 = container.querySelector('#sg-c3').checked;

      if (c1 || c2 || c3) {
        sgarbossaAlert.className = 'sgarbossa-alert-box alert-positive';
        sgarbossaAlert.innerHTML = `
          <strong>🚨 ${isCs ? 'POZITIVNÍ NA AKUTNÍ KORONÁRNÍ OKLUZI (OMI / STEMI EKVIVALENT)!' : '¡POSITIVO PARA OCLUSIÓN CORONARIA AGUDA (EQUIVALENTE STEMI)!'}</strong>
          <p>${isCs ? 'Specificita > 95-98 % pro akutní infarkt myokardu. Indikována okamžitá aktivace katetrizačního sálu a urgentní koronarografie do 120 minut.' : 'Especificidad > 95-98% para infarto agudo. Activación inmediata de sala de hemodinámica para coronariografía urgente < 120 min.'}</p>
        `;
      } else {
        sgarbossaAlert.className = 'sgarbossa-alert-box alert-negative';
        sgarbossaAlert.innerHTML = `
          <span>ℹ️ ${isCs ? 'Zaškrtněte kritéria pro zhodnocení podezření na infarkt myokardu při přítomném bloku levého raménka (LBBB).' : 'Marque los criterios para valorar sospecha de infarto con bloqueo de rama izquierda.'}</span>
        `;
      }
    }

    sgarbossaCbs.forEach(cb => cb.addEventListener('change', updateSgarbossa));
    updateSgarbossa();
  }

  return {
    renderWidget: renderWidget
  };
})();
