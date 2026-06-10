// pk_sim.js - Interaktivní farmakokinetický a TDM trenažér
class PKSimulator {
  constructor() {
    this.canvas = document.getElementById('pk-canvas');
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');
    
    // Výchozí stav parametrů
    this.state = {
      drug: 'vancomycin', // vancomycin, digoxin, gentamicin, custom
      dose: 1000,         // mg (nebo mcg u digoxinu)
      interval: 12,       // hodiny
      vd: 50,             // litry
      halfLife: 6,        // hodiny (výchozí t1/2 při normálních funkcích)
      egfr: 100,          // % funkce ledvin (glomerulární filtrace)
    };

    // Definice léků
    this.drugs = {
      vancomycin: {
        name: 'Vancomycin',
        unit: 'mg/l',
        defaultDose: 1000,
        defaultInterval: 12,
        defaultVd: 50,
        defaultHalfLife: 6,
        therRangeMin: 15,
        therRangeMax: 20, // cíl pro trough (údolí) u závažných infekcí, toxicita >20-25
        toxicThreshold: 25,
        desc: 'Úzké terapeutické rozmezí, hrozí nefrotoxicita a ototoxicita. Vyžaduje TDM (odběr před 4. dávkou).'
      },
      digoxin: {
        name: 'Digoxin',
        unit: 'ug/l (ng/ml)',
        defaultDose: 250, // 0.25 mg = 250 mcg
        defaultInterval: 24,
        defaultVd: 500, // Obrovský distribuční objem kvůli vazbě ve svalech
        defaultHalfLife: 36,
        therRangeMin: 0.5,
        therRangeMax: 0.9, // Kardiální toxicita >1.2-2.0
        toxicThreshold: 1.5,
        desc: 'Hromadí se v těle kvůli dlouhému poločasu. Výrazně citlivý na renální clearance a hypokalémii.'
      },
      gentamicin: {
        name: 'Gentamicin (Aminoglykosid)',
        unit: 'mg/l',
        defaultDose: 350, // Jednou denně (pulzní dávkování)
        defaultInterval: 24,
        defaultVd: 20,
        defaultHalfLife: 2,
        therRangeMin: 0.5, // Trough musí klesnout pod 1 mg/l k zabránění ototoxicity
        therRangeMax: 8.0, // Cílový peak je 7-10 mg/l u MDD, u pulzního až 15-20 mg/l
        toxicThreshold: 10.0,
        desc: 'Koncentračně závislý účinek a postantibiotický efekt (PAE). Nízký trough před další dávkou chrání ledviny.'
      },
      custom: {
        name: 'Vlastní simulace',
        unit: 'mg/l',
        defaultDose: 500,
        defaultInterval: 12,
        defaultVd: 40,
        defaultHalfLife: 8,
        therRangeMin: 5,
        therRangeMax: 15,
        toxicThreshold: 20,
        desc: 'Nastavte si libovolné parametry a studujte vliv distribuce, eliminace a dávkovacího intervalu.'
      }
    };

    this.initControls();
    this.resizeCanvas();
    this.updateSimulator();

    // Přizpůsobení při změně velikosti okna
    window.addEventListener('resize', () => {
      this.resizeCanvas();
      this.updateSimulator();
    });
  }

  resizeCanvas() {
    const container = this.canvas.parentElement;
    this.canvas.width = container.clientWidth - 32; // Odpočet paddingu
    this.canvas.height = 320;
  }

  initControls() {
    // Navázání HTML elementů
    this.sliders = {
      dose: document.getElementById('pk-slider-dose'),
      interval: document.getElementById('pk-slider-interval'),
      vd: document.getElementById('pk-slider-vd'),
      halfLife: document.getElementById('pk-slider-halflife'),
      egfr: document.getElementById('pk-slider-egfr')
    };

    this.displays = {
      dose: document.getElementById('pk-val-dose'),
      interval: document.getElementById('pk-val-interval'),
      vd: document.getElementById('pk-val-vd'),
      halfLife: document.getElementById('pk-val-halflife'),
      egfr: document.getElementById('pk-val-egfr'),
      cmax: document.getElementById('pk-metric-cmax'),
      cmin: document.getElementById('pk-metric-cmin'),
      halfLifeEff: document.getElementById('pk-metric-tleff')
    };

    this.warningBox = document.getElementById('pk-warning');

    // Registrace sliderů
    Object.keys(this.sliders).forEach(key => {
      if (this.sliders[key]) {
        this.sliders[key].addEventListener('input', (e) => {
          this.state[key] = parseFloat(e.target.value);
          this.displays[key].textContent = e.target.value;
          
          // Pokud hýbe uživatel parametry při vybraném léku, přepneme na "custom"
          if (this.state.drug !== 'custom' && key !== 'egfr') {
            this.setDrugActive('custom');
          }
          
          this.updateSimulator();
        });
      }
    });

    // Registrace tlačítek léků
    const drugButtons = document.querySelectorAll('.pk-drug-btn');
    drugButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const drugId = btn.getAttribute('data-drug');
        this.selectDrug(drugId);
      });
    });
  }

  selectDrug(drugId) {
    this.setDrugActive(drugId);
    const drug = this.drugs[drugId];
    
    // Nastavení výchozích hodnot pro lék
    this.state.drug = drugId;
    this.state.dose = drug.defaultDose;
    this.state.interval = drug.defaultInterval;
    this.state.vd = drug.defaultVd;
    this.state.halfLife = drug.defaultHalfLife;
    // Ponecháme aktuální eGFR, aby uživatel viděl vliv na vybraný lék

    // Aktualizace sliderů v UI
    this.updateSlidersUI();
    this.updateSimulator();
  }

  setDrugActive(drugId) {
    const drugButtons = document.querySelectorAll('.pk-drug-btn');
    drugButtons.forEach(btn => {
      if (btn.getAttribute('data-drug') === drugId) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
    this.state.drug = drugId;
  }

  updateSlidersUI() {
    Object.keys(this.sliders).forEach(key => {
      if (this.sliders[key]) {
        this.sliders[key].value = this.state[key];
        this.displays[key].textContent = this.state[key];
      }
    });
  }

  updateSimulator() {
    const drug = this.drugs[this.state.drug];
    
    // 1. Matematické výpočty
    // Vliv eGFR na poločas eliminace (clearance klesá lineárně s eGFR)
    // t1/2_eff = t1/2 / (eGFR / 100)
    const egfrFract = Math.max(0.1, this.state.egfr / 100);
    const halfLifeEff = this.state.halfLife / egfrFract;
    
    // Ke = ln(2) / t1/2
    const ke = Math.log(2) / halfLifeEff;
    
    // Přírůstek koncentrace po jedné dávce C0 = Dose / Vd
    const c0 = this.state.dose / this.state.vd;
    
    // Výpočet ustáleného stavu (Steady State) na základě nekonečného řady
    // Accumulation factor R = 1 / (1 - e^(-ke * tau))
    const tau = this.state.interval;
    const accumFactor = 1 / (1 - Math.exp(-ke * tau));
    
    const cmaxSS = c0 * accumFactor;
    const cminSS = cmaxSS * Math.exp(-ke * tau);
    
    // Zobrazení metrik v UI
    const unit = drug.unit;
    this.displays.cmax.textContent = `${cmaxSS.toFixed(1)} ${unit}`;
    this.displays.cmin.textContent = `${cminSS.toFixed(1)} ${unit}`;
    this.displays.halfLifeEff.textContent = `${halfLifeEff.toFixed(1)} hod`;

    // Vyhodnocení varování
    this.evaluateWarnings(cmaxSS, cminSS, drug);

    // 2. Vykreslení grafu
    this.drawChart(ke, c0, tau, halfLifeEff, drug);
  }

  evaluateWarnings(cmax, cmin, drug) {
    this.warningBox.style.display = 'none';
    this.warningBox.className = 'pk-warning-box';

    // Výjimky / specifická pravidla pro léky
    if (this.state.drug === 'gentamicin') {
      // U Gentamicinu sledujeme trough (má klesnout pod 1.0 k zamezení nefro/ototoxicity) a peak
      if (cmin > 1.5) {
        this.warningBox.style.display = 'block';
        this.warningBox.classList.add('toxic');
        this.warningBox.innerHTML = `<strong>Riziko toxicity!</strong> Údolní koncentrace (trough) gentamicinu je vysoká (${cmin.toFixed(1)} mg/l, cíl < 1.0 mg/l). Hrozí akumulace v buňkách proximálního tubulu ledvin a vláskových buňkách vnitřního ucha. Prodlužte interval podávání!`;
      } else if (cmax < 5.0) {
        this.warningBox.style.display = 'block';
        this.warningBox.classList.add('subtherapeutic');
        this.warningBox.innerHTML = `<strong>Subterapeutická dávka!</strong> Vrcholová koncentrace (peak) je příliš nízká (${cmax.toFixed(1)} mg/l, cíl u závažných infekcí 7-10 mg/l). Gentamicin vykazuje koncentračně závislý účinek - zvyšte jednorázovou dávku.`;
      }
    } else if (this.state.drug === 'vancomycin') {
      if (cmin > drug.toxicThreshold) {
        this.warningBox.style.display = 'block';
        this.warningBox.classList.add('toxic');
        this.warningBox.innerHTML = `<strong>Vysoká nefrotoxicita!</strong> Minimální koncentrace v ustáleném stavu (${cmin.toFixed(1)} mg/l) překračuje limit 20-25 mg/l. Snižte dávku nebo prodlužte interval!`;
      } else if (cmin < drug.therRangeMin) {
        this.warningBox.style.display = 'block';
        this.warningBox.classList.add('subtherapeutic');
        this.warningBox.innerHTML = `<strong>Riziko selhání léčby!</strong> Údolní koncentrace (${cmin.toFixed(1)} mg/l) je pod cílovým rozmezím 15-20 mg/l. Hrozí rozvoj rezistence (např. VISA/VRSA). Zvyšte dávkování.`;
      }
    } else if (this.state.drug === 'digoxin') {
      if (cmin > drug.toxicThreshold) {
        this.warningBox.style.display = 'block';
        this.warningBox.classList.add('toxic');
        this.warningBox.innerHTML = `<strong>Hrozí intoxikace digoxinem!</strong> Koncentrace (${cmin.toFixed(1)} ug/l) překračuje bezpečný limit. Riziko arytmií (AV blokády, komorová extrasystolie), nauzey a žlutozeleného vidění. Okamžitě vysaďte/snižte dávku!`;
      } else if (cmin < drug.therRangeMin) {
        this.warningBox.style.display = 'block';
        this.warningBox.classList.add('subtherapeutic');
        this.warningBox.innerHTML = `<strong>Nedostatečný účinek!</strong> Hladina digoxinu (${cmin.toFixed(1)} ug/l) je pod terapeutickým oknem (0.5 - 0.9 ug/l). Srdeční selhání nemusí být plně kompenzováno.`;
      }
    } else {
      // Vlastní (custom) lék
      if (cmin > drug.toxicThreshold) {
        this.warningBox.style.display = 'block';
        this.warningBox.classList.add('toxic');
        this.warningBox.innerHTML = `<strong>Toxické hladiny!</strong> Koncentrace v údolí (${cmin.toFixed(1)}) přesahuje limit toxicity (${drug.toxicThreshold}).`;
      } else if (cmax < drug.therRangeMin) {
        this.warningBox.style.display = 'block';
        this.warningBox.classList.add('subtherapeutic');
        this.warningBox.innerHTML = `<strong>Nízká koncentrace!</strong> Vrcholová hladina nedosahuje terapeutického okna.`;
      }
    }
  }

  drawChart(ke, c0, tau, halfLifeEff, drug) {
    const ctx = this.ctx;
    const w = this.canvas.width;
    const h = this.canvas.height;
    
    // Vyčištění canvasu
    ctx.clearRect(0, 0, w, h);
    
    // Nastavení okrajů grafu
    const paddingLeft = 50;
    const paddingRight = 20;
    const paddingTop = 20;
    const paddingBottom = 40;
    
    const chartW = w - paddingLeft - paddingRight;
    const chartH = h - paddingTop - paddingBottom;
    
    // Určení maximální koncentrace pro y-osu (škálování)
    // Abychom viděli křivku i při předávkování, spočítáme maximum z křivky, nebo aspoň 1.5 * toxicThreshold
    let maxConc = Math.max(c0 * 3, drug.toxicThreshold * 1.8);
    // U vancomycinu nebo digoxinu
    if (this.state.drug === 'digoxin') maxConc = Math.max(c0 * 4, 3.0);
    
    // Časové rozmezí x-osy (simulujeme 96 hodin)
    const maxTime = 96; // hodin
    
    // Převodní funkce souřadnic
    const getX = (t) => paddingLeft + (t / maxTime) * chartW;
    const getY = (c) => paddingTop + chartH - (c / maxConc) * chartH;
    
    // 1. Kreslení pozadí - Terapeutické okno (zelený pás)
    ctx.fillStyle = 'rgba(16, 185, 129, 0.12)';
    const yMaxTher = getY(drug.therRangeMax);
    const yMinTher = getY(drug.therRangeMin);
    ctx.fillRect(paddingLeft, yMaxTher, chartW, yMinTher - yMaxTher);
    
    // Kreslení toxické zóny (červený pás na vrchu)
    ctx.fillStyle = 'rgba(239, 68, 68, 0.06)';
    const yToxic = getY(drug.toxicThreshold);
    ctx.fillRect(paddingLeft, paddingTop, chartW, yToxic - paddingTop);

    // 2. Kreslení mřížky
    ctx.strokeStyle = '#e2e8f0';
    if (document.body.classList.contains('dark-mode')) {
      ctx.strokeStyle = '#334155';
    }
    ctx.lineWidth = 1;
    
    // Vodorovné čáry (koncentrace)
    const numYDivs = 5;
    for (let i = 0; i <= numYDivs; i++) {
      const val = (maxConc / numYDivs) * i;
      const y = getY(val);
      
      ctx.beginPath();
      ctx.moveTo(paddingLeft, y);
      ctx.lineTo(paddingLeft + chartW, y);
      ctx.stroke();
      
      // Popisky Y
      ctx.fillStyle = '#64748b';
      ctx.font = '10px monospace';
      ctx.textAlign = 'right';
      ctx.fillText(val.toFixed(1), paddingLeft - 8, y + 4);
    }
    
    // Svislé čáry (čas v hodinách - každých 12h nebo 24h)
    const timeStep = 12;
    for (let t = 0; t <= maxTime; t += timeStep) {
      const x = getX(t);
      ctx.beginPath();
      ctx.moveTo(x, paddingTop);
      ctx.lineTo(x, paddingTop + chartH);
      ctx.stroke();
      
      // Popisky X
      ctx.fillStyle = '#64748b';
      ctx.font = '10px monospace';
      ctx.textAlign = 'center';
      ctx.fillText(`${t}h`, x, paddingTop + chartH + 16);
    }
    
    // 3. Výpočet a kreslení křivky koncentrace
    ctx.beginPath();
    ctx.lineWidth = 3;
    ctx.strokeStyle = '#10b981'; // Smaragdová pro křivku
    if (document.body.classList.contains('dark-mode')) {
      ctx.strokeStyle = '#34d399'; // Mátová v dark-modu
    }
    
    let currentConc = 0;
    let t = 0;
    const dt = 0.2; // krok simulace v hodinách
    
    ctx.moveTo(getX(0), getY(0));
    
    for (t = 0; t <= maxTime; t += dt) {
      // Zjistíme, zda v tomto kroku aplikujeme dávku
      // Aplikujeme ji v t = 0, tau, 2tau, 3tau ...
      // Použijeme toleranci kvůli desetinné aritmetice
      const doseIndex = Math.round(t / tau);
      const isDoseTime = Math.abs(t - (doseIndex * tau)) < (dt / 2);
      
      if (isDoseTime && t < maxTime) {
        currentConc += c0;
      }
      
      // Vykreslení bodu
      ctx.lineTo(getX(t), getY(currentConc));
      
      // Exponenciální pokles v dalším kroku
      currentConc = currentConc * Math.exp(-ke * dt);
    }
    ctx.stroke();
    
    // Zvýraznění terapeutických limitů čárami
    ctx.strokeStyle = 'rgba(16, 185, 129, 0.4)';
    ctx.setLineDash([4, 4]);
    
    // Horní limit
    ctx.beginPath();
    ctx.moveTo(paddingLeft, yMaxTher);
    ctx.lineTo(paddingLeft + chartW, yMaxTher);
    ctx.stroke();
    
    // Dolní limit
    ctx.beginPath();
    ctx.moveTo(paddingLeft, yMinTher);
    ctx.lineTo(paddingLeft + chartW, yMinTher);
    ctx.stroke();
    
    // Toxická mez
    ctx.strokeStyle = 'rgba(239, 68, 68, 0.5)';
    ctx.beginPath();
    ctx.moveTo(paddingLeft, yToxic);
    ctx.lineTo(paddingLeft + chartW, yToxic);
    ctx.stroke();
    ctx.setLineDash([]); // Reset přerušení
    
    // Popisky mezí
    ctx.fillStyle = 'rgba(239, 68, 68, 0.8)';
    ctx.font = '9px sans-serif';
    ctx.textAlign = 'left';
    ctx.fillText('Hranice toxicity', paddingLeft + 10, yToxic - 4);
    
    ctx.fillStyle = 'rgba(16, 185, 129, 0.8)';
    ctx.fillText('Ther. okno (horní)', paddingLeft + 10, yMaxTher + 12);
    ctx.fillText('Ther. okno (dolní)', paddingLeft + 10, yMinTher - 4);

    // Kreslení os
    ctx.strokeStyle = '#64748b';
    ctx.lineWidth = 1.5;
    
    // X osa
    ctx.beginPath();
    ctx.moveTo(paddingLeft, paddingTop + chartH);
    ctx.lineTo(paddingLeft + chartW, paddingTop + chartH);
    ctx.stroke();
    
    // Y osa
    ctx.beginPath();
    ctx.moveTo(paddingLeft, paddingTop);
    ctx.lineTo(paddingLeft, paddingTop + chartH);
    ctx.stroke();
  }
}

// Inicializace po načtení DOM
document.addEventListener('DOMContentLoaded', () => {
  // Simulátor se vytvoří pouze pokud existuje canvas na stránce
  if (document.getElementById('pk-canvas')) {
    window.pkSimulator = new PKSimulator();
  }
});
