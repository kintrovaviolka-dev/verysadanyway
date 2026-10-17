import { mountLab } from "./labs.mjs";
import { validateProgress } from "./models.mjs";

const subjects = {
  farmakologie: "Farmakologie", derma: "Dermatologie", kardio: "Kardiologie",
  radiolka: "Radiologie", psych: "Psychiatrie", neuro: "Neurologie"
};
const escapeHTML = value => String(value).replace(/[&<>"']/g, character => ({
  "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
}[character]));
const normalize = value => value.normalize("NFD").replace(/\p{M}/gu, "").toLocaleLowerCase("cs");

async function initialize(root) {
  const subject = root.dataset.subject;
  if (!Object.hasOwn(subjects, subject)) throw new Error("Předmět nemá konfiguraci výukových mechanismů.");
  const { default: course } = await import(`./courses/${subject}.mjs`);
  const lessonIds = course.lessons.map(lesson => lesson.id);
  const storageKey = `ctvrtak-v2:${subject}`;
  let progress = { version: 1, lastLesson: lessonIds[0], ratings: {} };
  let storageWarning = "";
  try {
    const saved = localStorage.getItem(storageKey);
    if (saved !== null) progress = validateProgress(JSON.parse(saved), lessonIds);
  } catch (error) {
    console.warn("Výukové mechanismy: pokrok se nepodařilo načíst.", error);
    storageWarning = "Pokrok se nepodařilo načíst. Můžete pokračovat bez obnoveného sebehodnocení; původní kartičky se nemění.";
  }
  const hashLesson = () => course.lessons.find(lesson => location.hash === `#v2-${lesson.id}`);
  let activeLesson = hashLesson()?.id || progress.lastLesson;
  let activeView = location.hash === "#v2-lab" && course.lab ? "lab" : "learn";

  const sourceLinks = sources => sources.map(source =>
    `<a href="${escapeHTML(source.url)}" target="_blank" rel="noopener noreferrer">${escapeHTML(source.label)} <span aria-hidden="true">↗</span></a>`
  ).join("");

  root.innerHTML = `
    <details id="v2-disclosure">
      <summary class="v2-disclosure-summary"><span class="v2-grade">4. ročník</span><span id="v2-heading">Klíčové mechanismy k pochopení</span></summary>
      <div class="v2-progress-row">
        <progress id="v2-progress" max="${course.lessons.length}" value="0" aria-label="Lekce označené Rozumím"></progress>
        <p id="v2-progress-label" aria-live="polite"></p>
        <a href="${course.legacy}" data-legacy>Ke kartičkám a okruhům ↓</a>
      </div>
    <p class="v2-storage-warning" role="status" ${storageWarning ? "" : "hidden"}>${storageWarning}</p>
    <nav class="v2-view-nav" aria-label="Výukové mechanismy">
      <button type="button" class="v2-button" data-view="learn" aria-controls="v2-learn-panel">Výklad</button>
      ${course.lab ? '<button type="button" class="v2-button" data-view="lab" aria-controls="v2-lab-panel">Interaktivní procvičování</button>' : ""}
      <button type="button" class="v2-button" data-view="sources" aria-controls="v2-sources-panel">Zdroje a limity</button>
    </nav>
    <section id="v2-learn-panel" class="v2-panel" aria-label="Výklad v souvislostech">
      <div class="v2-study-layout">
        <div class="v2-syllabus">
          <label for="v2-search">Najít souvislost</label>
          <input id="v2-search" type="search" placeholder="Pojem, příznak, mechanismus…" autocomplete="off">
          <label class="v2-review-filter"><input id="v2-only-review" type="checkbox"> Jen k zopakování</label>
          <p id="v2-search-count" class="v2-muted" aria-live="polite"></p>
          <nav id="v2-lesson-list" aria-label="Lekce klinických souvislostí"></nav>
        </div>
        <article id="v2-lesson" class="v2-lesson" aria-labelledby="v2-lesson-title"></article>
      </div>
    </section>
    ${course.lab ? `<section id="v2-lab-panel" class="v2-panel" aria-labelledby="v2-lab-title" hidden>
      <div class="v2-panel-heading"><h3 id="v2-lab-title">${escapeHTML(course.labTitle)}</h3><p>${escapeHTML(course.labLead)}</p></div>
      <div id="v2-lab"></div></section>` : ""}
    <section id="v2-sources-panel" class="v2-panel v2-sources" aria-labelledby="v2-sources-title" hidden>
      <h3 id="v2-sources-title">Podklady, hranice a způsob použití</h3>
      <p>Nové lekce jsou původním českým výukovým shrnutím, nikoli přepisem doporučení ani úplnou náhradou zkouškových okruhů. U každé lekce najdete navazující zdroje k dalšímu studiu.</p>
      <div class="v2-source-links">${sourceLinks(course.sources)}</div>
      <div class="v2-caution"><strong>Výuka, ne rozhodování o konkrétním pacientovi.</strong>
        <p>Modely a případy jsou záměrně zjednodušené. Nezadávejte identifikační ani zdravotní údaje skutečných pacientů. Diagnostiku, léčbu a dávkování je nutné ověřovat podle aktuálního doporučení, souhrnu údajů o přípravku a místního protokolu pod odborným vedením.</p>
        <p>Externí zdroje mají vlastní datum vydání a mohou být aktualizovány. Uvedené starší dokumenty slouží také pro vysvětlení základních principů; aktuální doporučení je nutné ověřit.</p>
      </div>
      <p>Sebehodnocení se ukládá pouze v tomto prohlížeči, odděleně od kartiček. Neovlivňuje Leitnerovy intervaly, statistiky kvízů ani poznámky. V kardiologii je tento blok česky; přepínání češtiny a španělštiny ve zbytku portálu zůstává zachováno.</p>
    </section>
    <nav class="v2-subjects" aria-label="Předměty čtvrtého ročníku">
      <span>4. ročník</span>${Object.entries(subjects).map(([id, title]) => `<a href="../${id}/index.html#study-v2"${id === subject ? ' aria-current="page"' : ""}>${title}</a>`).join("")}
    </nav>
    </details>`;
  const disclosure = root.querySelector("#v2-disclosure");

  function saveProgress() {
    try {
      localStorage.setItem(storageKey, JSON.stringify(progress));
    } catch (error) {
      console.warn("Výukové mechanismy: pokrok se nepodařilo uložit.", error);
      const warning = root.querySelector(".v2-storage-warning");
      warning.hidden = false;
      warning.textContent = "Pokrok se nyní neukládá. Vaše volby platí pouze do zavření nebo obnovení stránky; zkontrolujte dostupnost úložiště prohlížeče.";
    }
  }

  function updateProgress() {
    const understood = Object.values(progress.ratings).filter(rating => rating === "understood").length;
    root.querySelector("#v2-progress").value = understood;
    root.querySelector("#v2-progress-label").textContent = `${understood} / ${course.lessons.length} lekcí označeno „Rozumím“`;
  }

  function renderList() {
    const query = normalize(root.querySelector("#v2-search").value.trim());
    const reviewOnly = root.querySelector("#v2-only-review").checked;
    const filtered = course.lessons.filter(lesson =>
      normalize(JSON.stringify(lesson)).includes(query) && (!reviewOnly || progress.ratings[lesson.id] === "review")
    );
    root.querySelector("#v2-search-count").textContent = `${filtered.length} / ${course.lessons.length} lekcí`;
    root.querySelector("#v2-lesson-list").innerHTML = filtered.length ? filtered.map(lesson => {
      const rating = progress.ratings[lesson.id];
      return `<a class="v2-lesson-link" href="#v2-${lesson.id}" data-lesson="${lesson.id}"${activeLesson === lesson.id ? ' aria-current="step"' : ""}>
        <span class="v2-lesson-number">${String(lessonIds.indexOf(lesson.id) + 1).padStart(2, "0")}</span>
        <span><strong>${escapeHTML(lesson.title)}</strong><small>${lesson.minutes} min · ${rating === "understood" ? "Rozumím" : rating === "review" ? "K zopakování" : "Nezhodnoceno"}</small></span></a>`;
    }).join("") : '<p class="v2-empty">Žádná lekce neodpovídá filtru. Změňte hledání nebo vypněte „Jen k zopakování“. Otevřený výklad zůstává vedle.</p>';
    root.querySelectorAll("[data-lesson]").forEach(link => link.addEventListener("click", event => {
      event.preventDefault();
      selectLesson(link.dataset.lesson, true);
    }));
  }

  function setView(view) {
    activeView = view;
    root.querySelectorAll("[data-view]").forEach(button => button.setAttribute("aria-pressed", String(button.dataset.view === view)));
    for (const name of ["learn", "lab", "sources"]) {
      const panel = root.querySelector(`#v2-${name}-panel`);
      if (panel) panel.hidden = name !== view;
    }
  }

  function renderLesson(focus = false) {
    const lesson = course.lessons.find(item => item.id === activeLesson);
    const index = lessonIds.indexOf(lesson.id);
    const rating = progress.ratings[lesson.id];
    root.querySelector("#v2-lesson").innerHTML = `
      <p class="v2-eyebrow">LEKCE ${String(index + 1).padStart(2, "0")} / ${course.lessons.length} <span>· ${lesson.minutes} MIN ČTENÍ A ROZVAHY</span></p>
      <h3 id="v2-lesson-title" tabindex="-1">${escapeHTML(lesson.title)}</h3>
      <p class="v2-intro">${escapeHTML(lesson.intro)}</p>
      <h4>Jak to dává smysl</h4>${lesson.explanation.map(text => `<p>${escapeHTML(text)}</p>`).join("")}
      <div class="v2-reasoning"><h4>Postup uvažování</h4><ol>${lesson.steps.map(text => `<li>${escapeHTML(text)}</li>`).join("")}</ol></div>
      <h4>Nezaměňujte</h4><dl class="v2-compare">${lesson.compare.map(([term, description]) => `<div><dt>${escapeHTML(term)}</dt><dd>${escapeHTML(description)}</dd></div>`).join("")}</dl>
      <aside class="v2-caution"><strong>Častá chyba</strong><p>${escapeHTML(lesson.pitfall)}</p></aside>
      <div class="v2-recall"><p class="v2-eyebrow">Kontrolní otázka</p><h4>${escapeHTML(lesson.question)}</h4>
        <details id="v2-answer"><summary>Porovnat s vysvětlením</summary><p>${escapeHTML(lesson.answer)}</p></details>
        <fieldset class="v2-rating"><legend>Jak tomu teď rozumíte?</legend>
          <button type="button" class="v2-button" data-rating="review" aria-pressed="${rating === "review"}">Ještě zopakovat</button>
          <button type="button" class="v2-button" data-rating="understood" aria-pressed="${rating === "understood"}">Rozumím a vysvětlím</button>
        </fieldset><p id="v2-rating-status" class="v2-muted" aria-live="polite">Jde o vaše sebehodnocení, ne automatické známkování.</p>
      </div>
      <div class="v2-lesson-sources"><strong>Navazující zdroje</strong><div class="v2-source-links">${sourceLinks(course.sources.filter(source => lesson.sourceIds.includes(source.id)))}</div></div>
      <div class="v2-lesson-pagination">
        <button type="button" class="v2-button" data-previous ${index === 0 ? "disabled" : ""}>← Předchozí lekce</button>
        <button type="button" class="v2-button" data-next-lesson ${index === lessonIds.length - 1 ? "disabled" : ""}>Další lekce →</button>
      </div>`;
    root.querySelectorAll("[data-rating]").forEach(button => button.addEventListener("click", () => {
      progress.ratings[activeLesson] = button.dataset.rating;
      saveProgress();
      root.querySelectorAll("[data-rating]").forEach(choice => choice.setAttribute("aria-pressed", String(choice === button)));
      root.querySelector("#v2-rating-status").textContent = button.dataset.rating === "understood"
        ? "Označeno „Rozumím“. Zkuste souvislost zítra znovu vybavit bez nápovědy."
        : "Označeno k zopakování. Lekci najdete i pomocí filtru vlevo.";
      updateProgress();
      renderList();
    }));
    root.querySelector("[data-previous]").addEventListener("click", () => selectLesson(lessonIds[index - 1], true));
    root.querySelector("[data-next-lesson]").addEventListener("click", () => selectLesson(lessonIds[index + 1], true));
    if (focus) {
      const heading = root.querySelector("#v2-lesson-title");
      heading.focus({ preventScroll: true });
      heading.scrollIntoView({ block: "start" });
    }
  }

  function selectLesson(id, focus = false, updateUrl = true) {
    if (!lessonIds.includes(id)) return;
    disclosure.open = true;
    activeLesson = id;
    progress.lastLesson = id;
    saveProgress();
    if (updateUrl) history.pushState(null, "", `#v2-${id}`);
    setView("learn");
    renderList();
    renderLesson(focus);
  }

  root.querySelectorAll("[data-view]").forEach(button => button.addEventListener("click", () => {
    const view = button.dataset.view;
    setView(view);
    history.pushState(null, "", view === "lab" ? "#v2-lab" : view === "sources" ? "#v2-sources" : `#v2-${activeLesson}`);
  }));
  root.querySelector("#v2-search").addEventListener("input", renderList);
  root.querySelector("#v2-only-review").addEventListener("change", renderList);
  // Existing portals have document-level flashcard shortcuts; new controls must not grade those cards.
  root.addEventListener("keydown", event => event.stopPropagation());
  window.addEventListener("hashchange", () => {
    const lesson = hashLesson();
    if (lesson || (location.hash === "#v2-lab" && course.lab) || location.hash === "#v2-sources") disclosure.open = true;
    if (lesson) selectLesson(lesson.id, false, false);
    else if (location.hash === "#v2-lab" && course.lab) setView("lab");
    else if (location.hash === "#v2-sources") setView("sources");
    else if (location.hash === "#study-v2") setView("learn");
  });
  if (course.lab) mountLab(course.lab, root.querySelector("#v2-lab"));
  if (location.hash === "#v2-sources") activeView = "sources";
  disclosure.open = Boolean(hashLesson() || (location.hash === "#v2-lab" && course.lab) || location.hash === "#v2-sources");
  setView(activeView);
  updateProgress();
  renderList();
  renderLesson();
  if (progress.lastLesson !== activeLesson) {
    progress.lastLesson = activeLesson;
    saveProgress();
  }
  root.dataset.ready = "true";
}

const root = document.getElementById("study-v2");
if (root) {
  initialize(root).catch(error => {
    console.error("Výukové mechanismy se nepodařilo spustit.", error);
    root.replaceChildren();
    const message = document.createElement("p");
    message.setAttribute("role", "alert");
    message.textContent = "Výukové mechanismy se nepodařilo načíst. Obnovte stránku nebo pokračujte v okruzích níže.";
    root.append(message);
  });
}
