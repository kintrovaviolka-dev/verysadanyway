import { cardiacOutput, receptorResponse, visualFieldDefect, visualSites, windowGray } from "./models.mjs";
import { skinCases } from "./skin-cases.mjs";

const number = (value, digits = 0) => value.toLocaleString("cs-CZ", { maximumFractionDigits: digits });
const slider = (id, label, min, max, value, step = 1) => `
  <label class="v2-control" for="${id}"><span>${label} <output id="${id}-value" for="${id}"></output></span>
  <input id="${id}" type="range" min="${min}" max="${max}" value="${value}" step="${step}"></label>`;
const resetButton = '<button type="button" class="v2-button" data-reset>Obnovit výchozí nastavení</button>';
const exercise = (task, answer) => `<details class="v2-experiment"><summary>Vyzkoušejte: ${task}</summary><p>${answer}</p></details>`;

function receptors(root) {
  root.innerHTML = `
    <div class="v2-lab-grid">
      <div class="v2-controls">
        <label class="v2-control" for="v2-receptor-mode">Model odpovědi
          <select id="v2-receptor-mode">
            <option value="full">Plný agonista</option><option value="competitive">Kompetitivní antagonismus</option>
            <option value="noncompetitive">Nepřekonatelný antagonismus</option><option value="partial">Parciální agonista</option>
          </select>
        </label>
        ${slider("v2-concentration", "Koncentrace agonisty", -1, 3, 1, 0.05)}
        <p class="v2-muted">Logaritmický posuvník: 0,1 až 1 000 relativních jednotek, nikoli dávka léčiva.</p>
        ${slider("v2-antagonist", "Antagonista B / Kb", 0, 5, 1, 0.25)}
        <p id="v2-antagonist-hint" class="v2-muted"></p>
        ${resetButton}
      </div>
      <div>
        <svg class="v2-chart" viewBox="0 0 540 320" role="img" aria-labelledby="v2-receptor-chart-title v2-receptor-chart-desc">
          <title id="v2-receptor-chart-title">Koncentračně-účinková křivka</title>
          <desc id="v2-receptor-chart-desc">Vodorovná osa: logaritmická koncentrace. Svislá: účinek v procentech. Přerušovaná křivka je plný agonista, plná křivka zvolený model.</desc>
          <path class="v2-axis" d="M55 25 V265 H515 M55 145 H515 M55 25 H515"></path>
          <g class="v2-svg-label"><text x="12" y="30">100</text><text x="22" y="150">50</text><text x="30" y="268">0</text>
            <text x="48" y="288">0,1</text><text x="165" y="288">1</text><text x="276" y="288">10</text>
            <text x="386" y="288">100</text><text x="490" y="288">1 000</text>
            <text x="165" y="312">Koncentrace (relativní jednotky)</text><text x="55" y="16">Účinek (%)</text></g>
          <path id="v2-reference-curve" class="v2-reference" fill="none"></path>
          <path id="v2-active-curve" class="v2-curve" fill="none"></path>
          <circle id="v2-effect-point" r="6" class="v2-point"></circle>
        </svg>
        <p class="v2-muted">Přerušovaně: plný agonista bez antagonisty. Barevně: zvolený model.</p>
        <div id="v2-receptor-result" class="v2-readout" aria-live="polite"></div>
        <p id="v2-receptor-explanation" class="v2-lab-explanation"></p>
      </div>
    </div>
    ${exercise("Přesuňte křivku doprava, ale zachovejte její strop.", "Zvolte kompetitivní antagonismus a zvyšte B / Kb. EC50 roste, Emax zůstává 100 %. Na omezeném rozsahu grafu nemusí křivka maxima dosáhnout; asymptotický strop proto čtěte i v číselném výstupu.")}
    <p class="v2-model-note">Výukový rovnovážný Emax model s Hillovým koeficientem 1. EC50 plného agonisty je 10, parciální agonista má Emax 40 %. U nepřekonatelného antagonismu model pouze ilustruje snížení Emax: nepopisuje receptorovou rezervu, vazebnou kinetiku ani konkrétní léčivo. Není určen k dávkování.</p>`;
  const mode = root.querySelector("#v2-receptor-mode");
  const concentration = root.querySelector("#v2-concentration");
  const antagonist = root.querySelector("#v2-antagonist");
  const curve = (type, amount) => Array.from({ length: 101 }, (_, index) => {
    const log = -1 + index * 0.04;
    return `${index ? "L" : "M"}${55 + index * 4.6},${265 - receptorResponse(10 ** log, type, amount).effect * 2.4}`;
  }).join(" ");
  root.querySelector("#v2-reference-curve").setAttribute("d", curve("full", 0));
  function update() {
    const c = 10 ** Number(concentration.value);
    const b = Number(antagonist.value);
    const result = receptorResponse(c, mode.value, b);
    const usesAntagonist = ["competitive", "noncompetitive"].includes(mode.value);
    antagonist.disabled = !usesAntagonist;
    root.querySelector("#v2-concentration-value").textContent = number(c, 1);
    root.querySelector("#v2-antagonist-value").textContent = usesAntagonist ? number(b, 2) : "nepoužívá se";
    concentration.setAttribute("aria-valuetext", `${number(c, 1)} relativních jednotek`);
    root.querySelector("#v2-antagonist-hint").textContent = usesAntagonist
      ? "Relativní množství antagonisty; 0 znamená žádnou blokádu."
      : "Posuvník antagonisty je aktivní jen u modelů antagonismu.";
    root.querySelector("#v2-active-curve").setAttribute("d", curve(mode.value, b));
    const point = root.querySelector("#v2-effect-point");
    point.setAttribute("cx", 55 + (Number(concentration.value) + 1) * 115);
    point.setAttribute("cy", 265 - result.effect * 2.4);
    root.querySelector("#v2-receptor-result").textContent = `Účinek ${number(result.effect, 1)} % · EC50 ${number(result.ec50, 1)} · Emax ${number(result.emax, 1)} %`;
    root.querySelector("#v2-receptor-explanation").textContent = {
      full: "Vyšší koncentrace přibližuje odpověď ke stropu. V bodě EC50 dosahuje agonista poloviny svého maxima.",
      competitive: "Kompetitivní blokádu lze v tomto modelu překonat vyšší koncentrací agonisty. Posouvá se EC50, ne Emax.",
      noncompetitive: "V tomto zjednodušení klesá dosažitelný strop; samotné zvyšování agonisty jej neobnoví. EC50 zbývající odpovědi zůstává stejná.",
      partial: "Parciální agonista nedosáhne maxima plného agonisty ani při vysoké koncentraci. Tato křivka nemodeluje jejich současné podání."
    }[mode.value];
  }
  root.addEventListener("input", update);
  root.querySelector("[data-reset]").addEventListener("click", () => {
    mode.value = "full"; concentration.value = "1"; antagonist.value = "1"; update();
  });
  update();
}

function hemodynamics(root) {
  const presets = [
    { title: "Referenční komora", values: [140, 56, 70] },
    { title: "Malá komora, stejná EF", values: [70, 28, 70] },
    { title: "Dilatace, snížená EF", values: [200, 140, 80] }
  ];
  root.innerHTML = `
    <div class="v2-preset-row">${presets.map((p, i) => `<button type="button" class="v2-button" data-preset="${i}">${p.title}</button>`).join("")}</div>
    <div class="v2-lab-grid">
      <div class="v2-controls">
        ${slider("v2-edv", "EDV · naplnění", 60, 220, 140)}
        ${slider("v2-esv", "ESV · zbývající objem", 10, 210, 56)}
        ${slider("v2-rate", "Srdeční frekvence", 40, 160, 70)}
        ${resetButton}
      </div>
      <div>
        <svg class="v2-chart" viewBox="0 0 540 280" role="img" aria-labelledby="v2-heart-title v2-heart-desc">
          <title id="v2-heart-title">Objem před a po stahu</title>
          <desc id="v2-heart-desc">Plocha kruhů odpovídá objemu krve, ne anatomickému tvaru komory.</desc>
          <circle cx="145" cy="125" r="92" class="v2-volume-outline"></circle>
          <circle cx="395" cy="125" r="92" class="v2-volume-outline"></circle>
          <circle id="v2-diastole" cx="145" cy="125" class="v2-volume"></circle>
          <circle id="v2-systole" cx="395" cy="125" class="v2-volume v2-volume-residual"></circle>
          <path class="v2-axis" d="M250 125 H285 M275 115 L285 125 L275 135"></path>
          <g class="v2-svg-label"><text x="145" y="240" text-anchor="middle">Před stahem · EDV</text><text x="395" y="240" text-anchor="middle">Po stahu · ESV</text></g>
        </svg>
        <div id="v2-heart-result" class="v2-readout" aria-live="polite"></div>
        <p class="v2-muted">Tepový objem = EDV − ESV. EF = tepový objem / EDV. Výdej = tepový objem × frekvence.</p>
      </div>
    </div>
    ${exercise("Porovnejte první dva scénáře. Proč je výdej poloviční?", "Oba mají EF 60 % a frekvenci 70/min. Referenční komora vypudí 84 ml, malá jen 42 ml. Jejich výdej je 5,88 a 2,94 l/min. Stejný poměr neznamená stejné absolutní množství.")}
    <p class="v2-model-note">Jde o objemové účetnictví, nikoli simulaci diagnózy. Frekvence zde nemění plnění, preload ani kontraktilitu. Model neobsahuje chlopenní regurgitaci, zkraty nebo zpětné vazby; výdej není indexován na tělesný povrch. Kruhy jsou schéma, ne echokardiogram.</p>`;
  const controls = ["edv", "esv", "rate"].map(id => root.querySelector(`#v2-${id}`));
  function update() {
    const values = controls.map(input => Number(input.value));
    controls.forEach((input, i) => {
      root.querySelector(`#${input.id}-value`).textContent = `${values[i]} ${i === 2 ? "/min" : "ml"}`;
    });
    root.querySelectorAll("[data-preset]").forEach(button => {
      button.setAttribute("aria-pressed", String(presets[Number(button.dataset.preset)].values.every((v, i) => v === values[i])));
    });
    const resultEl = root.querySelector("#v2-heart-result");
    const chart = root.querySelector("svg");
    try {
      const result = cardiacOutput(...values);
      chart.removeAttribute("hidden");
      resultEl.removeAttribute("data-error");
      resultEl.textContent = `Tepový objem ${number(result.strokeVolume)} ml · EF ${number(result.ef, 1)} % · Výdej ${number(result.output, 2)} l/min`;
      root.querySelector("#v2-diastole").setAttribute("r", 92 * Math.sqrt(values[0] / 220));
      root.querySelector("#v2-systole").setAttribute("r", 92 * Math.sqrt(values[1] / 220));
    } catch (error) {
      if (!(error instanceof RangeError)) throw error;
      chart.setAttribute("hidden", "");
      resultEl.dataset.error = "true";
      resultEl.textContent = error.message;
    }
  }
  function preset(index) {
    controls.forEach((input, i) => { input.value = String(presets[index].values[i]); });
    update();
  }
  root.addEventListener("input", update);
  root.querySelectorAll("[data-preset]").forEach(button => button.addEventListener("click", () => preset(Number(button.dataset.preset))));
  root.querySelector("[data-reset]").addEventListener("click", () => preset(0));
  update();
}

function windowing(root) {
  const presets = [
    { title: "Měkké tkáně", level: 40, width: 400 }, { title: "Mozkové okno", level: 40, width: 80 },
    { title: "Plicní okno", level: -600, width: 1500 }, { title: "Kostní okno", level: 500, width: 2000 }
  ];
  const tissues = [
    ["Vzduch", -1000], ["Plíce (model)", -750], ["Tuk", -100], ["Voda", 0],
    ["Parenchym (model)", 35], ["Hustší ložisko (model)", 65], ["Kost (model)", 1000]
  ];
  root.innerHTML = `
    <div class="v2-preset-row">${presets.map((p, i) => `<button type="button" class="v2-button" data-preset="${i}">${p.title}</button>`).join("")}</div>
    <div class="v2-lab-grid">
      <div class="v2-controls">
        ${slider("v2-window-level", "Střed okna", -1000, 1000, 40)}
        ${slider("v2-window-width", "Šířka okna", 1, 2500, 400)}
        <p class="v2-muted">Nejdřív odhadněte, zda bude 65 HU světlejší než 35 HU. Pak porovnejte mozkové a kostní okno.</p>
        ${resetButton}
      </div>
      <div>
        <svg class="v2-phantom" viewBox="0 0 540 300" role="img" aria-labelledby="v2-phantom-title v2-phantom-desc">
          <title id="v2-phantom-title">Syntetický HU fantom</title>
          <desc id="v2-phantom-desc">Schematický průřez s modelovými hodnotami vzduchu, tuku, plic, parenchymu, hustšího ložiska a kosti. Nejde o snímek pacienta ani anatomicky přesný model.</desc>
          <rect width="540" height="300" data-hu="-1000"></rect>
          <ellipse cx="270" cy="150" rx="205" ry="132" data-hu="-100"></ellipse>
          <ellipse cx="270" cy="150" rx="184" ry="114" data-hu="35"></ellipse>
          <ellipse cx="170" cy="143" rx="57" ry="78" data-hu="-750"></ellipse>
          <ellipse cx="370" cy="143" rx="57" ry="78" data-hu="-750"></ellipse>
          <circle cx="270" cy="210" r="28" data-hu="1000"></circle>
          <circle cx="276" cy="118" r="30" data-hu="65"></circle>
          <text x="276" y="122" text-anchor="middle" class="v2-phantom-marker">65</text>
        </svg>
        <div id="v2-window-result" class="v2-readout" aria-live="polite"></div>
      </div>
    </div>
    <div class="v2-tissues">${tissues.map(([label, hu]) => `<div class="v2-tissue"><span class="v2-swatch" data-hu="${hu}" aria-hidden="true"></span><strong>${label}</strong><span>${hu} HU</span><output data-gray="${hu}"></output></div>`).join("")}</div>
    ${exercise("Skryjte rozdíl mezi 35 HU a 65 HU bez změny dat.", "Posuňte střed tak nízko, aby obě hodnoty byly nad horní mezí okna: obě budou bílé. Nebo použijte velmi široké okno, kde bude rozdíl odstínů malý. Nález může být v datech přítomen, ale při nevhodném okně špatně viditelný.")}
    <p class="v2-model-note">Lineární výukový převod: dolní mez = střed − šířka / 2, horní mez = střed + šířka / 2; odstín 0 je černá a 255 bílá. Nejde o přesnou implementaci DICOM VOI LUT. Hodnoty tkání jsou orientační, model neobsahuje šum, rekonstrukční kernel, kontrast ani skutečná pacientská data.</p>`;
  const level = root.querySelector("#v2-window-level");
  const width = root.querySelector("#v2-window-width");
  function update() {
    const l = Number(level.value), w = Number(width.value);
    root.querySelector("#v2-window-level-value").textContent = `${l} HU`;
    root.querySelector("#v2-window-width-value").textContent = `${w} HU`;
    root.querySelectorAll("[data-hu]").forEach(element => {
      const gray = windowGray(Number(element.dataset.hu), l, w);
      const color = `rgb(${gray}, ${gray}, ${gray})`;
      if (element.namespaceURI === "http://www.w3.org/2000/svg") element.setAttribute("fill", color);
      else element.style.backgroundColor = color;
    });
    root.querySelectorAll("[data-gray]").forEach(element => {
      element.textContent = `Odstín ${windowGray(Number(element.dataset.gray), l, w)} / 255`;
    });
    root.querySelectorAll("[data-preset]").forEach(button => {
      const p = presets[Number(button.dataset.preset)];
      button.setAttribute("aria-pressed", String(p.level === l && p.width === w));
    });
    const contrast = windowGray(65, l, w) - windowGray(35, l, w);
    root.querySelector("#v2-window-result").textContent = `Černá ≤ ${number(l - w / 2, 1)} HU · Bílá ≥ ${number(l + w / 2, 1)} HU · Rozdíl 35/65 HU: ${contrast} odstínů`;
  }
  function preset(index) { level.value = String(presets[index].level); width.value = String(presets[index].width); update(); }
  root.addEventListener("input", update);
  root.querySelectorAll("[data-preset]").forEach(button => button.addEventListener("click", () => preset(Number(button.dataset.preset))));
  root.querySelector("[data-reset]").addEventListener("click", () => preset(0));
  update();
}

function vision(root) {
  const quadrants = ["horní levý", "horní pravý", "dolní levý", "dolní pravý"];
  root.innerHTML = `
    <div class="v2-lab-grid">
      <div class="v2-controls">
        <label class="v2-control" for="v2-vision-site">Místo úplné modelové léze
          <select id="v2-vision-site">${visualSites.map(site => `<option value="${site.id}">${site.label}</option>`).join("")}</select>
        </label>
        <fieldset class="v2-side"><legend>Strana léze v pacientovi</legend>
          <label><input type="radio" name="v2-vision-side" value="left" checked> Levá</label>
          <label><input type="radio" name="v2-vision-side" value="right"> Pravá</label>
        </fieldset>
        <p id="v2-vision-description" class="v2-lab-explanation"></p>
        <p class="v2-muted">Zobrazení je z pohledu pacienta: vlevo na obrázku je levá část jeho zorného pole. Šrafování znamená výpadek, ne zachované vidění.</p>
        ${resetButton}
      </div>
      <div>
        <svg class="v2-chart" viewBox="0 0 540 290" role="img" aria-labelledby="v2-vision-title v2-vision-desc">
          <title id="v2-vision-title">Zorná pole levého a pravého oka</title><desc id="v2-vision-desc"></desc>
          <defs><pattern id="v2-field-loss" patternUnits="userSpaceOnUse" width="9" height="9"><rect width="9" height="9" fill="#26344d"></rect><path d="M0 9 L9 0" stroke="#ffb4b4" stroke-width="3"></path></pattern></defs>
          ${[140, 400].map((x, eye) => `<g transform="translate(${x},140)">
            <circle r="94" class="v2-field-background"></circle>
            ${["M0 0 H-90 A90 90 0 0 1 0 -90 Z", "M0 0 V-90 A90 90 0 0 1 90 0 Z", "M0 0 V90 A90 90 0 0 1 -90 0 Z", "M0 0 H90 A90 90 0 0 1 0 90 Z"].map((d, q) => `<path d="${d}" data-eye="${eye}" data-quadrant="${q}" fill="transparent"></path>`).join("")}
            <path d="M-94 0 H94 M0 -94 V94" class="v2-axis"></path><circle r="4" class="v2-point"></circle>
            <text y="125" text-anchor="middle" class="v2-svg-label">${eye ? "Pravé oko" : "Levé oko"}</text>
          </g>`).join("")}
          <text x="270" y="22" text-anchor="middle" class="v2-svg-label">Pohled pacienta · výpadek je šrafovaný</text>
        </svg>
        <div id="v2-vision-result" class="v2-readout" aria-live="polite"></div>
        <p id="v2-vision-path" class="v2-muted"></p>
      </div>
    </div>
    ${exercise("Před přepnutím na levou Meyerovu kličku předpovězte výpadek.", "Vypadne pravý horní kvadrant zorného pole obou očí. Nejde o levé oko ani levou polovinu světa: za chiasmatem jde informace z opačné poloviny zorného pole.")}
    <p class="v2-model-note">Idealizované úplné léze. Chiasmatický scénář představuje centrální postižení křížících se vláken, proto nemá volbu strany. Skutečný nález může být neúplný, kombinovaný a nemusí sám přesně lokalizovat lézi. Schéma nenahrazuje perimetrii ani neurologické a oční vyšetření.</p>`;
  const site = root.querySelector("#v2-vision-site");
  function update() {
    const side = root.querySelector('input[name="v2-vision-side"]:checked').value;
    const result = visualFieldDefect(site.value, side);
    root.querySelectorAll('input[name="v2-vision-side"]').forEach(input => { input.disabled = site.value === "chiasm"; });
    root.querySelector("#v2-vision-description").textContent = visualSites.find(item => item.id === site.value).description;
    root.querySelectorAll("[data-eye]").forEach(path => {
      const lost = (path.dataset.eye === "0" ? result.left : result.right)[Number(path.dataset.quadrant)];
      path.setAttribute("fill", lost ? "url(#v2-field-loss)" : "transparent");
      path.dataset.lost = String(lost);
    });
    const description = ["left", "right"].map((eye, i) => {
      const lost = quadrants.filter((_, q) => result[eye][q]);
      return `${i ? "Pravé" : "Levé"} oko: ${lost.length ? `výpadek kvadrantů ${lost.join(", ")}` : "bez výpadku"}.`;
    }).join(" ");
    root.querySelector("#v2-vision-desc").textContent = description;
    root.querySelector("#v2-vision-result").textContent = result.label;
    root.querySelector("#v2-vision-path").textContent = description;
  }
  root.addEventListener("change", update);
  root.querySelector("[data-reset]").addEventListener("click", () => {
    site.value = "nerve"; root.querySelector('input[value="left"]').checked = true; update();
  });
  update();
}

function skin(root) {
  let caseIndex = 0, step = 0, answers = [];
  root.innerHTML = `
    <label class="v2-control" for="v2-skin-case">Výukový případ (změna zahájí případ znovu)
      <select id="v2-skin-case">${skinCases.map((item, i) => `<option value="${i}">${item.title}</option>`).join("")}</select>
    </label>
    <div id="v2-case-workspace"></div>
    <p class="v2-model-note">Smyšlené výukové kazuistiky se zjednodušeným průběhem. Volby nejsou diagnostický nástroj pro skutečný kožní nález. Naléhavost závisí na celkovém stavu; při skutečných varovných příznacích je nutné odborné vyšetření.</p>`;
  const workspace = root.querySelector("#v2-case-workspace");
  function render(focus = false) {
    const item = skinCases[caseIndex];
    if (step === item.steps.length) {
      const correct = answers.filter((answer, i) => answer === item.steps[i].correct).length;
      workspace.innerHTML = `<div class="v2-case-summary"><p class="v2-eyebrow">Případ dokončen</p>
        <h4 tabindex="-1">${correct} / ${item.steps.length} rozhodnutí správně</h4><p>${item.takeaway}</p>
        <ol>${item.steps.map((s, i) => `<li><strong>${answers[i] === s.correct ? "Správně" : "K zopakování"}:</strong> ${s.reasons[s.correct]}</li>`).join("")}</ol>
        <button type="button" class="v2-button" data-restart>Projít tento případ znovu</button></div>`;
      workspace.querySelector("[data-restart]").addEventListener("click", () => { step = 0; answers = []; render(true); });
    } else {
      const current = item.steps[step];
      workspace.innerHTML = `<p class="v2-eyebrow">Rozhodnutí ${step + 1} / ${item.steps.length}</p>
        <p class="v2-case-intro">${item.summary}</p><div class="v2-finding"><strong>Nová informace</strong><p>${current.finding}</p></div>
        <h4 tabindex="-1">${current.question}</h4>
        <div class="v2-case-options">${current.options.map((option, i) => `<button type="button" class="v2-button" data-answer="${i}">${option}</button>`).join("")}</div>
        <div class="v2-case-feedback" aria-live="polite"></div>
        <button type="button" class="v2-button v2-primary" data-next disabled>${step === item.steps.length - 1 ? "Zobrazit rozbor případu" : "Odkrýt další informace"}</button>`;
      workspace.querySelectorAll("[data-answer]").forEach(button => button.addEventListener("click", () => {
        const choice = Number(button.dataset.answer);
        answers.push(choice);
        workspace.querySelectorAll("[data-answer]").forEach(option => {
          option.disabled = true;
          if (Number(option.dataset.answer) === current.correct) option.dataset.correct = "true";
        });
        button.dataset.chosen = "true";
        workspace.querySelector(".v2-case-feedback").textContent = `${choice === current.correct ? "Správně." : "Tuto volbu upravte."} ${current.reasons[choice]}${choice !== current.correct ? ` Vhodnější odpověď: ${current.options[current.correct]}. ${current.reasons[current.correct]}` : ""}`;
        workspace.querySelector("[data-next]").disabled = false;
      }));
      workspace.querySelector("[data-next]").addEventListener("click", () => { step++; render(true); });
    }
    if (focus) workspace.querySelector("h4").focus({ preventScroll: true });
  }
  root.querySelector("#v2-skin-case").addEventListener("change", event => {
    caseIndex = Number(event.target.value); step = 0; answers = []; render();
  });
  render();
}

export function mountLab(type, root) {
  const renderers = { receptors, hemodynamics, windowing, vision, skin };
  if (!Object.hasOwn(renderers, type)) throw new Error(`Neznámá výuková laboratoř: ${type}`);
  renderers[type](root);
}
