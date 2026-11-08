// upv/airway.js - Modul "Obtížné dýchací cesty a DOPES"
// Prediktory obtížné ventilace/intubace/SGA/chirurgické cesty, MACOCHA skóre,
// DOPES při náhlém zhoršení ventilovaného pacienta a krátké sebetestování.
// Výukový přehled – nenahrazuje klinický úsudek ani lokální protokoly.

(function () {
  "use strict";

  // ---------- DATA ----------
  const PREDICTORS = [
    {
      id: "moans",
      acronym: "MOANS",
      title: "Obtížná ventilace maskou",
      icon: "😷",
      intro: "Predikce obtížné ventilace obličejovou maskou (BMV).",
      items: [
        { letter: "M", text: "Mask seal – vousy, krev/sekrety, deformity obličeje, nedostatečné těsnění" },
        { letter: "O", text: "Obesity / Obstruction – BMI > 26 kg/m², těhotenství, obstrukce HDC (tumor, absces, edém)" },
        { letter: "A", text: "Age – věk > 55 let" },
        { letter: "N", text: "No teeth – bezzubost" },
        { letter: "S", text: "Stiff lungs – astma, CHOPN, ARDS, plicní edém, bronchospasmus (vysoká rezistence/nízká poddajnost)" }
      ],
      interpret: (n) => {
        if (n === 0) return { level: "ok", text: "Žádný prediktor – nízké riziko, ale obtížná BMV může přijít i neočekávaně. Mějte připravené OPA/NPA a SGA." };
        if (n === 1) return { level: "warn", text: "1 prediktor – zvýšená pozornost. Připravte OPA/NPA, techniku dvou rukou (2-person) a rezervní SGA." };
        return { level: "danger", text: `${n} prediktory – předpokládejte obtížnou BMV. Optimální poloha (sniffing/ramped), preoxygenace, 2 operátoři, OPA+NPA, videolaryngoskop a plán B (SGA) s přivolanou pomocí.` };
      },
      note: "Langeron: nezávislé prediktory – věk > 55, BMI > 26, vousy, bezzubost, chrápání. Dva a více prediktorů významně zvyšují riziko."
    },
    {
      id: "lemon",
      acronym: "LEMON",
      title: "Obtížná laryngoskopie / intubace",
      icon: "🍋",
      intro: "Hodnocení před intubací (1 bod za každý pozitivní prvek).",
      items: [
        { letter: "L", text: "Look externally – obezita, krátký krk, malá/ustupující brada, vyčnívající řezáky, trauma obličeje, vousy" },
        { letter: "E", text: "Evaluate 3-3-2 – ústa < 3 prsty, thyromentální vzdálenost < 3 prsty, hyoid–brada < 2 prsty" },
        { letter: "M", text: "Mallampati III–IV" },
        { letter: "O", text: "Obstruction / Obesity – epiglotitida, absces, tumor, hematom, stridor, otok jazyka, těhotenství" },
        { letter: "N", text: "Neck mobility – omezená hybnost krční páteře (fixace, spondylitida, trauma, límec)" }
      ],
      interpret: (n) => {
        if (n === 0) return { level: "ok", text: "LEMON 0 – nízká predikce obtížnosti. Postup dle standardu, stále mějte plán B/C." };
        if (n <= 2) return { level: "warn", text: `LEMON ${n} – zvýšené riziko. Videolaryngoskop v první volbě, bougie, optimalizace polohy a preoxygenace (HFNO/NIV), připravit SGA.` };
        return { level: "danger", text: `LEMON ${n} – vysoké riziko. Zvažte probuzenou intubaci, dva zkušené operátory, videolaryngoskop/flexibilní bronchoskop, přípravu eFONA a přivolání pomoci. Orientační interpretace.` };
      },
      note: "Skóre je orientační; žádný jednotlivý test nepredikuje obtížnou laryngoskopii spolehlivě – kombinujte více prediktorů."
    },
    {
      id: "rods",
      acronym: "RODS",
      title: "Obtížné zavedení supraglotické pomůcky (SGA)",
      icon: "🪈",
      intro: "Prediktory selhání / obtížného zavedení laryngeální masky.",
      items: [
        { letter: "R", text: "Restricted mouth opening – omezené otevření úst" },
        { letter: "O", text: "Obstruction / Obesity – obstrukce v oblasti hrtanu nebo pod ním, obezita" },
        { letter: "D", text: "Disrupted / Distorted airway – deformita, trauma, tumor, předchozí radioterapie" },
        { letter: "S", text: "Stiff lungs / Cervical spine – vysoké ventilační tlaky, omezená hybnost C páteře" }
      ],
      interpret: (n) => {
        if (n === 0) return { level: "ok", text: "Žádný prediktor – SGA je pravděpodobně použitelná záchranná technika." };
        return { level: n >= 2 ? "danger" : "warn", text: `${n} prediktor${n > 1 ? "y" : ""} – SGA jako záchrana nemusí fungovat. Zvolte větší velikost/2. generaci SGA, mějte připravenou eFONA a nespoléhejte na SGA jako jedinou zálohu.` };
      },
      note: "Pozitivní RODS snižuje spolehlivost SGA jako záchranné techniky při selhání intubace a ventilace."
    },
    {
      id: "short",
      acronym: "SHORT",
      title: "Obtížná chirurgická cesta (eFONA / koniotomie)",
      icon: "🔪",
      intro: "Prediktory obtížné krční (front-of-neck) cesty.",
      items: [
        { letter: "S", text: "Surgery / Disrupted airway – předchozí operace nebo poškozená anatomie krku" },
        { letter: "H", text: "Hematoma – hematom nebo otok v oblasti krku" },
        { letter: "O", text: "Obesity – obezita, nehmatné orientační body" },
        { letter: "R", text: "Radiation / Restricted – radioterapie krku, omezená hybnost krku" },
        { letter: "T", text: "Tumour – nádor, který deformuje krk" }
      ],
      interpret: (n) => {
        if (n === 0) return { level: "ok", text: "Žádný prediktor – běžná anatomie. Přesto předem identifikujte membránu cricothyroideu (palpace/UZ)." };
        return { level: n >= 2 ? "danger" : "warn", text: `${n} prediktor${n > 1 ? "y" : ""} – eFONA může být obtížná. Předem označte membránu pod UZ, zvažte časné zajištění dýchacích cest, připravte skalpel-bougie-trubici a přivolejte zkušeného operatéra.` };
      },
      note: "Při CICO se postupuje podle DAS: skalpel – bougie – trubice (č. 6,0 s manžetou)."
    }
  ];

  const MACOCHA = {
    title: "MACOCHA skóre (intubace na JIP)",
    intro: "Validované skóre predikce obtížné intubace u kriticky nemocných (0–12 bodů). Skóre ≥ 3 predikuje obtížnou intubaci.",
    items: [
      { text: "Mallampati III nebo IV", points: 5 },
      { text: "Syndrom spánkové apnoe (OSA)", points: 2 },
      { text: "Omezená hybnost krční páteře", points: 1 },
      { text: "Otevření úst < 3 cm", points: 1 },
      { text: "Kóma (porucha vědomí)", points: 1 },
      { text: "Hypoxemie (SpO₂ < 80 %)", points: 1 },
      { text: "Operátor – nikoli anesteziolog (méně zkušený)", points: 1 }
    ]
  };

  const MALLAMPATI = [
    ["I", "Viditelné měkké patro, uvula i oblouky patra (pilíře)", "Nízké riziko"],
    ["II", "Viditelné měkké patro a uvula", "Nízké riziko"],
    ["III", "Viditelné měkké patro a báze uvuly", "Zvýšené riziko"],
    ["IV", "Viditelné pouze tvrdé patro", "Vysoké riziko"]
  ];

  const CORMACK = [
    ["I", "Vidíme celou glottis (hlasivky)", "Snadná"],
    ["IIa", "Vidíme zadní část glottis", "Spíše snadná"],
    ["IIb", "Vidíme pouze arytenoidní chrupavky / zadní komisuru", "Možné potíže (bougie)"],
    ["III", "Vidíme pouze epiglottis, glottis nikoli", "Obtížná"],
    ["IV", "Nevidíme ani epiglottis (jen měkké patro)", "Velmi obtížná"]
  ];

  const DOPES = [
    {
      letter: "D",
      name: "Displacement – dislokace rourky",
      signs: "Chybí nebo je plochá křivka ETCO₂, nepřítomné/asymetrické dýchací fenomény, změna hloubky u řezáků, únik vzduchu, nad žaludkem „bublání“, pacient fonuje (rourka nad hlasivkami).",
      action: "Ověřit křivku ETCO₂ a hloubku. Při pochybnosti a zhoršení: vyjmout rourku, ventilovat maskou 100 % O₂ a znovu zajistit dýchací cesty (videolaryngoskopie)."
    },
    {
      letter: "O",
      name: "Obstruction – obstrukce rourky nebo dýchacích cest",
      signs: "↑ PIP při normálním Pplat, zalomení nebo skus rourky, hlen/zátka, krev, herniace manžety, průtok neodpovídá, exspirační obstrukční křivka.",
      action: "Zkontrolovat zalomení/skus (bite block), zavést odsávací cévku, odsát, bronchoskopie při zátce, bronchodilatancia při bronchospasmu. Pokud cévka neprojde – vyměnit rourku."
    },
    {
      letter: "P",
      name: "Pneumothorax (a další plicní příčiny)",
      signs: "Náhlé ↑ PIP a Pplat, ↓ SpO₂ a TK, jednostranně chybí dýchání, UZ: chybí lung sliding / lung point, posun trachey (tenzní).",
      action: "Při tenzním PNO ihned dekomprese (finger/needle thoracostomy), poté hrudní drén. Zvažte i bronchospasmus, plicní edém, aspiraci, embolii a intubaci do pravého bronchu."
    },
    {
      letter: "E",
      name: "Equipment – selhání přístroje, okruhu, zdroje O₂",
      signs: "Alarmy odpojení/nízký tlak, žádný přívod kyslíku, netěsnost okruhu nebo manžety, porucha ventilátoru, vlhkostní filtr (HME) ucpaný.",
      action: "Odpojit od ventilátoru, ručně ventilovat samorozpínacím vakem se 100 % O₂ (vše z nezávislého zdroje), zkontrolovat okruh, manžetu a filtr, vyměnit ventilátor."
    },
    {
      letter: "S",
      name: "Stacked breaths – auto-PEEP / air trapping (někdy také Sedation / Stomach)",
      signs: "Výdechový průtok se nevrací k nule, narůstající tlaky, hypotenze, vysoká DF, nesynchronní dýchání, astma/CHOPN.",
      action: "Krátce odpojit od ventilátoru (výdech 30–60 s, jemný tlak na hrudník), snížit DF a/nebo VT, zkrátit Ti (prodloužit Te), bronchodilatancia, vyloučit asynchronie a nepřiměřenou sedaci/analgezii."
    }
  ];

  const DOPES_FINDINGS = [
    { label: "Plochá nebo chybějící křivka ETCO₂", letters: "D, O", hint: "Rourka mimo trachea nebo úplná obstrukce. Ověřte hloubku a průchodnost; při pochybnosti vyjměte rourku a ventilujte maskou." },
    { label: "Odsávací cévka neprojde rourkou", letters: "O", hint: "Zalomená, skousnutá nebo ucpaná rourka (zátka). Zkontrolujte polohu a skus, použijte bronchoskop; při selhání vyměňte rourku." },
    { label: "Jednostranně chybí dýchání, UZ bez lung sliding, hypotenze", letters: "P", hint: "Tenzní pneumotorax – okamžitá dekomprese a hrudní drén." },
    { label: "Alarm odpojení/nízký tlak, nebo přístroj nefunguje", letters: "E", hint: "Odpojit od ventilátoru a ručně ventilovat vakem se 100 % O₂; teprve poté hledat závadu v okruhu/ventilátoru." },
    { label: "Exspirační průtok se nevrací k nule, hypotenze, auto-PEEP", letters: "S", hint: "Stacked breaths – krátké odpojení od ventilátoru, snížit DF, prodloužit exspirium, bronchodilatancia." },
    { label: "Vysoké PIP, normální Pplat", letters: "O", hint: "Zvýšený odpor: rourka, sekrety, bronchospasmus. Odsát, bronchodilatancia." },
    { label: "Vysoké PIP i Pplat", letters: "P, S", hint: "Snížená compliance nebo auto-PEEP: pneumotorax, intubace do bronchu, edém, atelektáza, distenze břicha." }
  ];

  const QUIZ = [
    {
      q: "Co znamená písmeno „S“ v mnemotechnice RODS?",
      options: ["Sedation", "Stiff lungs / Cervical spine", "Surgery", "Stridor"],
      correct: 1,
      why: "RODS: Restricted mouth opening, Obstruction/Obesity, Disrupted/Distorted airway, Stiff lungs/C-spine."
    },
    {
      q: "Který prediktor patří do MOANS, ale nepatří do LEMON?",
      options: ["Mallampati III–IV", "Bezzubost (No teeth)", "Omezená hybnost krku", "Pravidlo 3-3-2"],
      correct: 1,
      why: "MOANS (obtížná ventilace maskou) obsahuje No teeth, věk > 55 a Stiff lungs. LEMON hodnotí laryngoskopii."
    },
    {
      q: "Ventilovaný pacient se náhle zhorší. Jaký je první krok podle DOPES?",
      options: [
        "Zvýšit FiO₂ na ventilátoru a čekat",
        "Odpojit od ventilátoru, ručně ventilovat se 100 % O₂ a ověřit ETCO₂ a průchodnost rourky",
        "Okamžitě podat myorelaxans",
        "Provést CT hrudníku"
      ],
      correct: 1,
      why: "Odpojit od ventilátoru, 100 % O₂ vakem, ETCO₂ křivka, odsávací cévka, UZ plic – tím se rychle rozliší D, O, P, E, S."
    },
    {
      q: "Co predikuje MACOCHA skóre ≥ 3?",
      options: ["Obtížné odvykání od ventilátoru", "Obtížnou intubaci na JIP", "Riziko ARDS", "Obtížnou ventilaci maskou"],
      correct: 1,
      why: "MACOCHA je validované pro predikci obtížné intubace u kriticky nemocných. Mallampati III–IV má nejvyšší váhu (5 bodů)."
    },
    {
      q: "Který nález při DOPES nejlépe odpovídá tenznímu pneumotoraxu?",
      options: [
        "Normální PIP a chybějící křivka ETCO₂",
        "Náhlé ↑ PIP, jednostranně chybí dýchání, hypotenze, UZ bez lung sliding",
        "Vysoké PIP s normálním Pplat a hlenem v rource",
        "Odpojení okruhu"
      ],
      correct: 1,
      why: "Tenzní PNO: ↑ PIP i Pplat, jednostranný nález, hypotenze/desaturace; léčba je okamžitá dekomprese."
    },
    {
      q: "Co představuje „S“ v SHORT?",
      options: ["Sedation", "Surgery / Disrupted airway", "Stiff lungs", "Stridor"],
      correct: 1,
      why: "SHORT: Surgery/disrupted, Hematoma, Obesity, Radiation/Restricted, Tumour – prediktory obtížné chirurgické cesty."
    }
  ];

  // ---------- RENDER ----------
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  const levelLabel = { ok: "Nízké riziko", warn: "Zvýšené riziko", danger: "Vysoké riziko" };

  function renderPredictor(p) {
    return `
      <div class="checklist-card aw-card" data-predictor="${p.id}">
        <div class="checklist-card-header">
          <span class="aw-icon" aria-hidden="true">${p.icon}</span>
          <div>
            <h4>${esc(p.acronym)} – ${esc(p.title)}</h4>
            <p>${esc(p.intro)}</p>
          </div>
        </div>
        <div class="aw-items">
          ${p.items.map((it, i) => `
            <label class="aw-item">
              <input type="checkbox" data-aw-pred="${p.id}" data-idx="${i}">
              <span class="aw-letter">${esc(it.letter)}</span>
              <span>${esc(it.text)}</span>
            </label>`).join("")}
        </div>
        <div class="aw-result aw-result-ok" id="aw-res-${p.id}" aria-live="polite"></div>
        <p class="aw-note">${esc(p.note)}</p>
      </div>`;
  }

  function renderMacocha() {
    return `
      <div class="calculator-card aw-card" id="aw-macocha">
        <h3>🧮 ${esc(MACOCHA.title)}</h3>
        <p>${esc(MACOCHA.intro)}</p>
        <div class="aw-items">
          ${MACOCHA.items.map((it, i) => `
            <label class="aw-item">
              <input type="checkbox" data-aw-macocha="${i}" data-points="${it.points}">
              <span class="aw-points">+${it.points}</span>
              <span>${esc(it.text)}</span>
            </label>`).join("")}
        </div>
        <div class="aw-result aw-result-ok" id="aw-res-macocha" aria-live="polite"></div>
      </div>`;
  }

  function renderRefTable(title, rows, headers) {
    return `
      <div class="aw-ref">
        <h4>${esc(title)}</h4>
        <div class="table-wrapper">
          <table class="modes-table aw-table">
            <thead><tr>${headers.map((h) => `<th>${esc(h)}</th>`).join("")}</tr></thead>
            <tbody>${rows.map((r) => `<tr>${r.map((c) => `<td>${esc(c)}</td>`).join("")}</tr>`).join("")}</tbody>
          </table>
        </div>
      </div>`;
  }

  function renderDopes() {
    return `
      <div class="quick-diagnostic-widget aw-card" id="aw-dopes">
        <h3>🚨 DOPES – náhlé zhoršení ventilovaného pacienta</h3>
        <p>Při náhlé desaturaci, hypotenzi nebo alarmu: <strong>odpojit od ventilátoru, ručně ventilovat vakem se 100 % O₂</strong>, ověřit křivku ETCO₂, projít odsávací cévkou a zvážit UZ plic. Poté systematicky projít DOPES.</p>
        <div class="aw-dopes-steps">
          <span>1 Odpojit + vak 100 % O₂</span><span>2 ETCO₂ křivka</span><span>3 Odsávací cévka</span><span>4 UZ plic</span><span>5 DOPES</span>
        </div>
        <div class="aw-dopes-grid">
          ${DOPES.map((d) => `
            <div class="pearl-card aw-dopes-card">
              <h4><span class="aw-letter aw-letter-big">${d.letter}</span> ${esc(d.name)}</h4>
              <p><strong>Nález:</strong> ${esc(d.signs)}</p>
              <div class="pearl-action"><strong>Akce:</strong> ${esc(d.action)}</div>
            </div>`).join("")}
        </div>
        <div class="aw-finder">
          <label for="aw-dopes-select"><strong>Rychlý pomocník:</strong> co vidíte?</label>
          <select id="aw-dopes-select" class="select-custom select-large">
            <option value="">-- Vyberte nález --</option>
            ${DOPES_FINDINGS.map((f, i) => `<option value="${i}">${esc(f.label)}</option>`).join("")}
          </select>
          <div class="aw-result aw-result-warn" id="aw-dopes-result" style="display:none" aria-live="polite"></div>
        </div>
      </div>`;
  }

  function renderQuiz() {
    return `
      <div class="calculator-card aw-card" id="aw-quiz">
        <h3>✍️ Rychlé procvičení mnemotechnik</h3>
        <p>Šest krátkých otázek. Odpověď se vyhodnotí hned.</p>
        ${QUIZ.map((q, qi) => `
          <div class="aw-q" data-q="${qi}">
            <p class="aw-q-text"><strong>${qi + 1}.</strong> ${esc(q.q)}</p>
            <div class="aw-q-options">
              ${q.options.map((o, oi) => `<button type="button" class="btn btn-secondary aw-opt" data-q="${qi}" data-o="${oi}">${esc(o)}</button>`).join("")}
            </div>
            <p class="aw-q-why" style="display:none"></p>
          </div>`).join("")}
        <div class="aw-quiz-score" id="aw-quiz-score" aria-live="polite"></div>
      </div>`;
  }

  function setResult(el, r) {
    if (!el) return;
    el.className = `aw-result aw-result-${r.level}`;
    el.innerHTML = `<strong>${levelLabel[r.level]}:</strong> ${esc(r.text)}`;
  }

  function init() {
    const root = document.getElementById("airway-root");
    if (!root) return;

    root.innerHTML = `
      <div class="aw-disclaimer">Výukový přehled určený pro přípravu. Prediktory nejsou spolehlivé samostatně; vždy mějte plán A–D (DAS), připravené vybavení a přivolejte pomoc. Před klinickým použitím ověřte aktuální doporučení a lokální protokoly.</div>
      <h2 class="aw-h2">1) Predikce obtížnosti</h2>
      <div class="checklist-grid aw-grid">${PREDICTORS.map(renderPredictor).join("")}</div>
      ${renderMacocha()}
      <h2 class="aw-h2">2) Rychlé tabulky</h2>
      <div class="aw-ref-grid">
        ${renderRefTable("Mallampati klasifikace", MALLAMPATI, ["Třída", "Viditelné struktury", "Riziko"])}
        ${renderRefTable("Cormack–Lehane (pohled laryngoskopem)", CORMACK, ["Stupeň", "Popis", "Intubace"])}
      </div>
      <h2 class="aw-h2">3) DOPES</h2>
      ${renderDopes()}
      <h2 class="aw-h2">4) Procvičení</h2>
      ${renderQuiz()}
    `;

    // Prediktory
    PREDICTORS.forEach((p) => {
      const refresh = () => {
        const n = root.querySelectorAll(`input[data-aw-pred="${p.id}"]:checked`).length;
        setResult(document.getElementById(`aw-res-${p.id}`), p.interpret(n));
      };
      root.querySelectorAll(`input[data-aw-pred="${p.id}"]`).forEach((cb) => cb.addEventListener("change", refresh));
      refresh();
    });

    // MACOCHA
    const refreshMacocha = () => {
      let sum = 0;
      root.querySelectorAll("input[data-aw-macocha]:checked").forEach((cb) => { sum += Number(cb.dataset.points); });
      const r = sum >= 3
        ? { level: "danger", text: `MACOCHA ${sum}/12 – predikce obtížné intubace. Použijte videolaryngoskop, zkušeného operátora, bougie, optimalizujte preoxygenaci a připravte záložní plán a eFONA.` }
        : { level: "ok", text: `MACOCHA ${sum}/12 – obtížná intubace méně pravděpodobná (hranice ≥ 3). Plán B stejně mějte připravený.` };
      setResult(document.getElementById("aw-res-macocha"), r);
    };
    root.querySelectorAll("input[data-aw-macocha]").forEach((cb) => cb.addEventListener("change", refreshMacocha));
    refreshMacocha();

    // DOPES pomocník
    const sel = document.getElementById("aw-dopes-select");
    const res = document.getElementById("aw-dopes-result");
    if (sel && res) {
      sel.addEventListener("change", () => {
        if (sel.value === "") { res.style.display = "none"; return; }
        const f = DOPES_FINDINGS[Number(sel.value)];
        res.style.display = "block";
        res.className = "aw-result aw-result-warn";
        res.innerHTML = `<strong>Pravděpodobně: ${esc(f.letters)}.</strong> ${esc(f.hint)}`;
      });
    }

    // Kvíz
    let answered = 0;
    let correct = 0;
    root.querySelectorAll(".aw-opt").forEach((btn) => {
      btn.addEventListener("click", () => {
        const qi = Number(btn.dataset.q);
        const oi = Number(btn.dataset.o);
        const block = root.querySelector(`.aw-q[data-q="${qi}"]`);
        if (block.dataset.done) return;
        block.dataset.done = "1";
        const q = QUIZ[qi];
        const isRight = oi === q.correct;
        answered += 1;
        if (isRight) correct += 1;
        block.querySelectorAll(".aw-opt").forEach((b) => {
          b.disabled = true;
          const idx = Number(b.dataset.o);
          if (idx === q.correct) b.classList.add("aw-opt-correct");
          else if (idx === oi) b.classList.add("aw-opt-wrong");
        });
        const why = block.querySelector(".aw-q-why");
        why.style.display = "block";
        why.textContent = `${isRight ? "Správně. " : "Nesprávně. "}${q.why}`;
        const score = document.getElementById("aw-quiz-score");
        if (score) score.textContent = answered === QUIZ.length ? `Výsledek: ${correct} / ${QUIZ.length}` : `Zodpovězeno ${answered} / ${QUIZ.length}`;
      });
    });
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
