import {answers, answerSources} from './answers.mjs';
import {questions} from './questions.mjs';
import {lessons, checkedAt} from './lessons.mjs';
import {STORAGE_KEY, drawPair, filterQuestions, validateProgress, contentStatus} from './model.mjs';
const $ = selector => document.querySelector(selector);
const escape = text => String(text).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
let progress = {}, pair = [];
function storageError(message) { $('#storage-warning').hidden = false; $('#storage-warning').textContent = message; }
try {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (raw) progress = validateProgress(JSON.parse(raw), questions);
  if (localStorage.getItem('aro-theme') === 'dark') document.documentElement.dataset.theme = 'dark';
} catch { storageError('Uloženou přípravu nelze načíst. V této relaci můžeš pokračovat; pro zálohu použij export.'); }
function persist() {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(progress)); return true; }
  catch { storageError('Prohlížeč neumožnil uložení přípravy. Změny jsou pouze v paměti této stránky — použij export před zavřením.'); return false; }
}
const statuses = {new:'Zatím nehodnoceno',repeat:'Chci zopakovat',ready:'Umím vysvětlit'};
function stats() {
  $('#ready-count').textContent = questions.filter(q => progress[q.id]?.status === 'ready').length;
  $('#repeat-count').textContent = questions.filter(q => progress[q.id]?.status === 'repeat').length;
}
const contentLabels = {answer:'Zpracovaná odpověď',supplement:'Osnova + dodatek',outline:'Pracovní osnova'};
const badge = q => `<span class="badge ${contentStatus(q) !== 'outline' ? 'updated' : ''}">${contentLabels[contentStatus(q)]}</span>`;
function coverage() {
  const complete = questions.filter(q => contentStatus(q) === 'answer').length;
  const supplements = questions.filter(q => contentStatus(q) === 'supplement').length;
  const outlines = questions.length-complete-supplements;
  $('#answer-count').textContent = complete;
  const form = (n, one, few, many) => n === 1 ? one : n >= 2 && n <= 4 ? few : many;
  const answerLabel = form(complete, 'zpracovaná odpověď', 'zpracované odpovědi', 'zpracovaných odpovědí');
  $('#answer-count').nextElementSibling.textContent = answerLabel;
  $('#coverage').textContent = `${complete} ${answerLabel} · ${supplements} ${form(supplements, 'otázka', 'otázky', 'otázek')} s tematickým dodatkem · ${outlines} ${form(outlines, 'pracovní osnova', 'pracovní osnovy', 'pracovních osnov')}. Zpracované odpovědi mají uvedený rozsah a zdroje; nejsou klinickým protokolem.`;
}
function answerRefs(ids) {
  return `<ul class="sources">${ids.map(id => {const s=answerSources[id];return `<li><a href="${escape(s.url)}" target="_blank" rel="noopener noreferrer">${escape(s.label)} ↗</a><span class="source-locator">${escape(s.locator)}</span></li>`;}).join('')}</ul>`;
}
function answerHTML(id) {
  const a=answers[id];
  if(!a)return '';
  return `<article class="answer"><header class="panel answer-opening"><p class="edition">${escape(a.edition)} · kontrola zdrojů ${escape(a.reviewed)}</p><p class="eyebrow">JAK ZAČÍT U ÚSTNÍ</p><h3>${escape(a.title)}</h3><p class="opening">${escape(a.opening)}</p>${answerRefs(a.openingRefs)}<p class="scope">Rozsah: ${escape(a.scope)}</p></header>${a.sections.map(section => `<section class="panel answer-section"><h3>${escape(section.title)}</h3>${section.paragraphs.map(p => `<p>${escape(p)}</p>`).join('')}${answerRefs(section.refs)}</section>`).join('')}<section class="panel"><h3>Co neopakovat ze starých skript</h3><ul>${a.corrections.map(p=>`<li>${escape(p)}</li>`).join('')}</ul></section><section class="panel"><p class="eyebrow">ZKOUŠEJÍCÍ SE DOPTÁVÁ</p><h3>Zkus odpovědět bez nápovědy</h3>${a.checks.map(c=>`<details class="answer-check"><summary>${escape(c.question)}</summary><p>${escape(c.answer)}</p>${answerRefs(c.refs)}</details>`).join('')}</section></article>`;
}
function contentNotice(q) {
  return answers[q.id] ? 'Zpracovaná zkoušková odpověď s kontrolou uvedených zdrojů. Rozsah a zvláštní situace jsou vymezené ve výkladu.' : q.lessonIds.length ? 'Tato otázka má zdrojovaný dodatek k vybrané části. Úplná odpověď na celý okruh ještě není revidovaná.' : 'Zatím pracovní osnova pro vlastní přípravu. Výklad, doporučení a vzorová odpověď se teprve doplní.';
}

function renderList() {
  const list = filterQuestions(questions,{search:$('#search').value,group:$('#group').value,filter:$('#filter').value},progress);
  $('#results-count').textContent = `${list.length} z 55 otázek`;
  $('#question-list').innerHTML = list.length ? list.map(q => `<a class="question-card" href="#${q.id}"><div class="card-top"><span class="qid">${q.id} / ${q.group === 'A' ? 'ANESTEZIOLOGIE' : 'INTENZIVNÍ PÉČE'}</span>${badge(q)}</div><h3>${escape(q.title)}</h3><div class="card-bottom"><span>${statuses[progress[q.id]?.status || 'new']}</span><span>Otevřít přípravu ↗</span></div></a>`).join('') : '<p class="empty">Žádná otázka neodpovídá výběru. Zkus změnit hledání nebo filtry.</p>';
}
function sourceLinks(lesson) { return `<ul class="sources">${lesson.sources.map(s => `<li><a href="${escape(s.url)}" target="_blank" rel="noopener noreferrer">${escape(s.label)} ↗</a></li>`).join('')}</ul>`; }
function lessonHTML(id) {
  const l = lessons[id];
  return `<article class="lesson"><p class="edition">${escape(l.edition)} · revize 28. 10. 2026</p><h3>${escape(l.title)}</h3><p class="scope">Rozsah: ${escape(l.scope)}</p><p><strong>${escape(l.intro)}</strong></p><ul>${l.points.map(p => `<li>${escape(p)}</li>`).join('')}</ul><div class="change"><strong>Co si odnést oproti starému učení</strong>${escape(l.change)}</div><details><summary>Zkus odpovědět: ${escape(l.recall)}</summary><p>${escape(l.answer)}</p></details>${sourceLinks(l)}</article>`;
}
function outline(q) { return `<ol class="outline">${q.prompts.map(p => `<li>${escape(p)}</li>`).join('')}</ol>`; }
function ratings(q) { return `<div class="ratings" role="group" aria-label="Moje připravenost ${q.id}">${Object.entries(statuses).map(([key,label]) => `<button data-rate="${key}" data-id="${q.id}" aria-pressed="${(progress[q.id]?.status || 'new') === key}">${label}</button>`).join('')}</div>`; }
function notes(q, prefix) { return `<label for="${prefix}-${q.id}">Moje odpověď a poznámky · ${q.id}<textarea id="${prefix}-${q.id}" data-note="${q.id}" maxlength="20000" placeholder="Zkus první větu, hlavní body a souvislosti…">${escape(progress[q.id]?.note || '')}</textarea></label><span class="saved" data-saved="${q.id}" role="status">Ukládá se v tomto prohlížeči.</span>`; }
function renderTopic(q) {
  const i = questions.indexOf(q);
  $('#topic-view').innerHTML = `<a class="back" href="#questions">← Zpět na otázky</a><div class="topic-header"><p class="eyebrow">${q.id} / ${q.group === 'A' ? 'ANESTEZIOLOGIE, BOLEST A OBECNÁ PROBLEMATIKA' : 'INTENZIVNÍ A URGENTNÍ MEDICÍNA'}</p><h2 tabindex="-1">${escape(q.title)}</h2>${badge(q)}</div><div class="notice">${contentNotice(q)}</div><div class="topic-layout"><div><article class="panel"><p class="eyebrow">OSNOVA ODPOVĚDI NAHLAS</p><h3>O čem mluvit a v jakém pořadí</h3>${outline(q)}<p class="muted">Osnova vymezuje témata otázky; nejde o hotovou odpověď.</p></article>${answerHTML(q.id)}${q.lessonIds.map(lessonHTML).join('')}</div><aside><section class="panel"><h3>Moje příprava</h3><p class="muted">Hodnoť, zda zvládneš celou otázku vysvětlit bez čtení.</p>${ratings(q)}${notes(q,'topic')}</section><section class="panel"><h3>Původ otázky</h3><small>Struktura: skripta.md, seznam otázek, řádek ${q.line}. Klinický obsah skript se automaticky nepřebírá.</small></section></aside></div><nav class="topic-nav" aria-label="Další otázky">${i ? `<a class="button" href="#${questions[i-1].id}">← ${questions[i-1].id}</a>` : '<span></span>'}${i < questions.length-1 ? `<a class="button" href="#${questions[i+1].id}">${questions[i+1].id} →</a>` : ''}</nav>`;
}
function renderExam() {
  $('#exam-pair').innerHTML = pair.map(q => `<article class="exam-card"><div class="card-top"><span class="qid">${q.id} / OKRUH ${q.group}</span>${badge(q)}</div><h3>${escape(q.title)}</h3>${notes(q,'exam')}<details><summary>Odhalit osnovu a výklad</summary>${outline(q)}<p class="muted">${contentNotice(q)}</p>${answerHTML(q.id)}${q.lessonIds.map(lessonHTML).join('')}</details>${ratings(q)}<a href="#${q.id}">Otevřít celou přípravu ↗</a></article>`).join('');
}
function renderSources() {
  $('#sources-list').innerHTML = Object.entries(answers).map(([id,a])=>`<article class="source-card"><p class="eyebrow">${id} · ZPRACOVANÁ ODPOVĚĎ · ${escape(a.reviewed)}</p><h3><a href="#${id}">${escape(a.title)}</a></h3><p>${escape(a.scope)}</p>${answerRefs([...new Set([...a.openingRefs,...a.sections.flatMap(s=>s.refs),...a.checks.flatMap(c=>c.refs)])])}</article>`).join('') + Object.values(lessons).map(l => `<article class="source-card"><p class="eyebrow">${escape(l.edition)}</p><h3>${escape(l.title)}</h3><p>${escape(l.scope)}</p>${sourceLinks(l)}</article>`).join('');
}
function route(scroll = true) {
  const hash = location.hash.slice(1), q = questions.find(q => q.id === hash);
  const section = q ? 'topic' : ['exam','sources'].includes(hash) ? hash : 'questions';
  for (const name of ['questions','topic','exam','sources']) $(`#${name}-view`).hidden = name !== section;
  document.querySelectorAll('[data-tab]').forEach(a => { if (a.dataset.tab === (q ? 'questions' : section)) a.setAttribute('aria-current','page'); else a.removeAttribute('aria-current'); });
  if (q) renderTopic(q);
  if (section === 'questions') renderList();
  if (section === 'exam' && pair.length) renderExam();
  if (scroll && hash !== 'overview') $(`#${section}-view`).scrollIntoView({block:'start'});
  if (hash === 'overview') window.scrollTo(0,0);
  if (q && scroll) $('#topic-view h2').focus({preventScroll:true});
}
for (const id of ['search','group','filter']) $(`#${id}`).addEventListener(id === 'search' ? 'input' : 'change',renderList);
document.addEventListener('click', event => {
  const b = event.target.closest('[data-rate]');
  if (!b) return;
  const id = b.dataset.id;
  progress[id] = {...progress[id],status:b.dataset.rate};
  const saved = persist(); stats(); renderList();
  document.querySelectorAll(`[data-rate][data-id="${id}"]`).forEach(el => el.setAttribute('aria-pressed',el.dataset.rate === b.dataset.rate));
  document.querySelectorAll(`[data-saved="${id}"]`).forEach(el => {el.textContent = saved ? 'Připravenost uložena.' : 'Pouze v paměti — použij export.';});
});
document.addEventListener('input', event => {
  const id = event.target.dataset.note;
  if (!id) return;
  progress[id] = {...progress[id], note:event.target.value};
  const saved = persist();
  document.querySelectorAll(`[data-note="${id}"]`).forEach(el => { if (el !== event.target) el.value = event.target.value; });
  document.querySelectorAll(`[data-saved="${id}"]`).forEach(el => {el.textContent = saved ? 'Poznámka uložena.' : 'Pouze v paměti — použij export.';});
});
$('#theme').onclick = () => {
  const theme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
  document.documentElement.dataset.theme = theme;
  try {localStorage.setItem('aro-theme',theme);} catch {storageError('Motiv se nepodařilo uložit pro příští návštěvu.');}
};
let remaining = 600000, deadline = null;
function updateClock() {
  if (deadline !== null) remaining = Math.max(0,deadline-Date.now());
  const seconds = Math.ceil(remaining/1000);
  $('#clock').textContent = `${String(Math.floor(seconds/60)).padStart(2,'0')}:${String(seconds%60).padStart(2,'0')}`;
  if (remaining === 0 && deadline !== null) {deadline = null; $('#timer-state').textContent = 'Čas přípravy uplynul. Zkus teď odpovědět nahlas.';}
  $('#timer-toggle').textContent = deadline !== null ? 'Pozastavit' : 'Spustit čas';
  $('#timer-toggle').disabled = remaining === 0;
  $('#duration').disabled = deadline !== null;
}
function resetTimer() {deadline=null;remaining=Number($('#duration').value)*60000;$('#timer-state').textContent='Připraveno. Spusť čas, až budeš chtít.';updateClock();}
$('#timer-toggle').onclick = () => {
  if (deadline !== null) {remaining=Math.max(0,deadline-Date.now());deadline=null;$('#timer-state').textContent='Čas je pozastavený.';}
  else {deadline=Date.now()+remaining;$('#timer-state').textContent='Probíhá příprava.';}
  updateClock();
};
$('#timer-reset').onclick=resetTimer; $('#duration').onchange=resetTimer;
setInterval(updateClock,250);
function draw() {pair=drawPair(questions);resetTimer();renderExam();if(location.hash !== '#exam') location.hash='exam';else $('#exam-pair').scrollIntoView({block:'start'});}
$('#draw').onclick=draw; $('#hero-draw').onclick=draw;
$('#export').onclick=() => {
  const text = ['# Moje příprava na ARO',`Export: ${new Date().toLocaleDateString('cs-CZ')}`,`Revize dodatků: ${checkedAt}`,...questions.filter(q => progress[q.id]).map(q => `\n## ${q.id} — ${q.title}\n${statuses[progress[q.id].status || 'new']}\n\n${progress[q.id].note || '(Bez poznámky)'}`)].join('\n\n');
  const url = URL.createObjectURL(new Blob([text],{type:'text/markdown;charset=utf-8'}));
  const a=document.createElement('a');a.href=url;a.download='aro-moje-priprava.md';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);
};
window.addEventListener('hashchange',()=>route());
coverage();stats();renderSources();route(false);
