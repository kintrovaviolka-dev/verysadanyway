import {recallBank} from './recall-bank.mjs';
import {recallCases} from './recall-cases.mjs';
import {makeDeck,matchShort} from './recall-model.mjs';
const bank=[...recallBank,...recallCases];
const key='aro-recall-v1';
const esc=text=>String(text).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
export function initRecall({questions,refs}) {
  const root=document.querySelector('#recall-view');
  let deck=[], index=0, records=[], response=null, stage=0, caseSteps=[], revealed=false, currentGrade=null, history={};
  root.innerHTML=`<div class="section-heading"><div><h2>Aktivní vybavování</h2><p class="muted">55 single choice · 55 krátkých odpovědí · 10 kazuistik po 3 krocích</p></div></div><p class="muted">Aktivní vybavování před zobrazením řešení a zdrojů. Krátké odpovědi vyžadují 1–2 slova. Kazuistiky se hodnotí podle strukturovaných bodů řešení.</p><p id="recall-storage" class="warning" role="status" hidden></p><details class="compact-strip" id="recall-settings" open><summary>Nastavení procvičování</summary><div class="strip-body"><div class="filters"><label>Typ úlohy<select id="recall-type"><option value="mixed">Všechny typy</option><option value="choice">Single choice</option><option value="short">Krátká odpověď</option><option value="case">Kazuistiky</option></select></label><label>Okruh procvičování<select id="recall-group"><option value="">Oba okruhy</option><option value="A">A · Anesteziologie</option><option value="B">B · Intenzivní péče</option></select></label><label>Konkrétní téma<select id="recall-topic"><option value="">Všechna témata</option>${questions.map(q=>`<option value="${q.id}">${q.id} · ${esc(q.title)}</option>`).join('')}</select></label><label>Počet úloh<select id="recall-limit"><option value="5">5</option><option value="10" selected>10</option><option value="20">20</option><option value="120">Všechny dostupné</option></select></label></div><p class="muted" id="recall-pool"></p><button class="primary" id="recall-start">Spustit novou sadu</button><p class="muted">Spuštěním nové sady se nahradí aktuální rozpracovaný výběr. Dokončené výsledky zůstanou uložené.</p></div></details><p class="muted" id="recall-history"></p><div id="recall-play"><p class="empty">Zvolte parametry a spusťte sadu úloh.</p></div>`;
  const $=s=>root.querySelector(s);
  const warning=()=>{$('#recall-storage').hidden=false;$('#recall-storage').textContent='Výsledky nelze uložit v prohlížeči. V této relaci můžeš pokračovat; rozehraná sada se po obnovení stránky ztratí.';};
  try {const raw=JSON.parse(localStorage.getItem(key)||'{}');for(const item of bank){const v=raw?.[item.id];if(v&&['correct','wrong','manual','skipped','case-ready','case-partial','case-repeat'].includes(v.grade))history[item.id]={grade:v.grade};}}catch{warning();}
  function historyText() {const count=Object.keys(history).length;$('#recall-history').textContent=`Vyzkoušeno ${count} ze ${bank.length} úloh. Ukládá se poslední výsledek každé úlohy; rozehraná sada a její texty zůstávají jen do obnovení stránky.`;}
  function options(){return {type:$('#recall-type').value,group:$('#recall-group').value,topic:$('#recall-topic').value,limit:Number($('#recall-limit').value)};}
  function pool(){const o=options();$('#recall-pool').textContent=`Výběru odpovídá ${makeDeck(bank,{...o,limit:bank.length}).length} úloh.`;}
  function save(item,grade) {history[item.id]={grade};try{localStorage.setItem(key,JSON.stringify(history));}catch{warning();}historyText();}
  function feedback(item){return `<div class="recall-feedback" role="status"><h4 tabindex="-1">${response.correct?'Správně':response.kind==='skip'?'Řešení':'Porovnej svou odpověď'}</h4>${item.type==='choice'?`<p><strong>${esc(item.options.find(o=>o.id===item.correct).text)}</strong></p>`:`<p>Očekávaná odpověď: <strong>${esc(item.accepted[0])}</strong></p>${response.kind==='typo'?'<p>Uznáno jako drobný překlep. Zkontroluj správný zápis výše.</p>':''}${!response.correct&&response.kind!=='skip'?'<p>Jiná správná formulace může v seznamu chybět. Porovnej význam s vysvětlením.</p><button data-recall-action="manual">Moje formulace znamená totéž</button>':''}`}<p>${esc(item.explanation)}</p>${refs(item.refs)}${item.topics.map(t=>`<a href="#${t}">Výklad ${t} ↗</a>`).join(' · ')}</div>`;}
  function render() {
    if(index>=deck.length){finish();return;}
    const item=deck[index];
    const type={choice:'Single choice',short:'Krátká odpověď',case:'Kazuistika'}[item.type];
    let body='';
    if(item.type==='case'){
      const s=item.steps[stage];
      body=`<h3>${esc(item.stem)}</h3>${caseSteps.map((r,i)=>`<details class="case-history"><summary>Krok ${i+1} · zadaná odpověď a řešení</summary><p>${esc(item.steps[i].update)}</p><p>${esc(item.steps[i].prompt)}</p><p class="own-answer">${esc(r.text||'Bez odpovědi')}</p><ul>${item.steps[i].points.map(p=>`<li>${esc(p)}</li>`).join('')}</ul></details>`).join('')}<p class="eyebrow">KROK ${stage+1} / ${item.steps.length}</p>${s.update?`<p class="case-update">${esc(s.update)}</p>`:''}<form id="recall-form"><label for="recall-response" class="recall-prompt">${esc(s.prompt)}</label><textarea id="recall-response" maxlength="10000" placeholder="Diagnostický a terapeutický postup (lék, dávka, cesta podání, monitorace)..." ${revealed?'disabled':''}>${esc(response?.text||'')}</textarea>${revealed?'':'<button class="primary" type="submit">Porovnat s řešením</button> <button type="button" data-recall-action="skip">Přeskočit a zobrazit řešení</button>'}</form>${revealed?`<div class="recall-feedback" role="status"><h4 tabindex="-1">Body pro porovnání</h4><ul>${s.points.map(p=>`<li>${esc(p)}</li>`).join('')}</ul><p class="critical"><strong>Podstatné:</strong> ${esc(s.critical)}</p>${refs(s.refs)}<p class="muted">Zkontrolujte jednotky, dávkování, cestu podání a návaznost jednotlivých kroků.</p><div class="ratings" role="group" aria-label="Sebehodnocení kroku">${[['ready','Zvládnuto'],['partial','Částečně'],['repeat','Zopakovat']].map(([v,l])=>`<button data-case-grade="${v}" aria-pressed="${currentGrade===v}">${l}</button>`).join('')}</div></div>`:''}`;
    }else{
      body=`<form id="recall-form">${item.type==='choice'?`<fieldset><legend class="recall-prompt">${esc(item.prompt)}</legend><div class="choice-options">${item.options.map((o,i)=>`<label class="choice-option ${revealed&&o.id===item.correct?'is-correct':''} ${revealed&&response.value===o.id&&o.id!==item.correct?'is-wrong':''}"><input type="radio" name="answer" value="${o.id}" ${revealed?'disabled':''} ${response?.value===o.id?'checked':''}><span><span class="option-letter">${String.fromCharCode(65+i)}.</span> ${esc(o.text)}${revealed&&o.id===item.correct?' — správná odpověď':''}</span></label>`).join('')}</div></fieldset>`:`<label for="recall-response" class="recall-prompt">${esc(item.prompt)}</label><input id="recall-response" type="text" autocomplete="off" spellcheck="false" maxlength="100" value="${esc(response?.value||'')}" ${revealed?'disabled':''}><p class="muted">Jedno až dvě slova nebo zkratka. Diakritika a velikost písmen nerozhodují.</p>`}${revealed?'':'<p id="recall-validation" role="status"></p><button class="primary" type="submit">Zkontrolovat</button> <button type="button" data-recall-action="skip">Nevím</button>'}</form>${revealed?feedback(item):''}`;
    }
    $('#recall-play').innerHTML=`<article class="panel recall-card"><p class="eyebrow" tabindex="-1" id="recall-position">${index+1} / ${deck.length} · ${type}${item.type==='case'?'':` · ${item.topics.join(', ')}`}</p>${body}${revealed?`<button class="primary recall-next" data-recall-action="next" ${item.type==='case'&&!currentGrade?'disabled':''}>${item.type==='case'&&stage<item.steps.length-1?'Další krok':index===deck.length-1?'Dokončit sadu':'Další úloha'} →</button>`:''}</article>`;
    $('#recall-form').addEventListener('submit',submit);
  }
  function submit(event){event.preventDefault();const item=deck[index];if(revealed)return;
    const value=item.type==='choice'?$('#recall-form input:checked')?.value:$('#recall-response').value.trim();
    if(!value){if($('#recall-validation'))$('#recall-validation').textContent='Nejdřív zadejte odpověď, nebo zvolte „Nevím“.';else $('#recall-response').focus();return;}
    if(item.type==='case'){response={text:value};revealed=true;render();$('.recall-feedback h4').focus({preventScroll:true});return;}
    response=item.type==='choice'?{value,correct:value===item.correct,kind:'choice'}:{value,...matchShort(value,item)};
    revealed=true;save(item,response.correct?'correct':'wrong');render();$('.recall-feedback h4').focus({preventScroll:true});
  }
  function finish(){
    const auto=records.filter(r=>r.type!=='case');const cases=records.filter(r=>r.type==='case');
    $('#recall-play').innerHTML=`<article class="panel"><h3 tabindex="-1" id="recall-finish">Sada dokončena</h3><p>${auto.filter(r=>r.grade==='correct').length} z ${auto.length} krátkých/single-choice úloh správně automaticky; ${auto.filter(r=>r.grade==='manual').length} ručně uznaných.</p><p>${cases.length} kazuistik dokončeno se sebehodnocením. Sebehodnocení se nepřičítá k automatickému skóre.</p><ul>${records.map(r=>`<li>${r.type==='case'?esc(bank.find(b=>b.id===r.id).title):esc(r.id.replace('-choice',' · single choice').replace('-short',' · doplnění'))}: <strong>${({correct:'správně',wrong:'zopakovat',manual:'ručně uznáno',skipped:'bez odpovědi','case-ready':'zvládnuto','case-partial':'částečně','case-repeat':'zopakovat'})[r.grade]}</strong> · ${bank.find(b=>b.id===r.id).topics.map(t=>`<a href="#${t}">${t}</a>`).join(', ')}</li>`).join('')}</ul><button data-recall-action="retry" ${records.some(r=>['wrong','skipped','case-partial','case-repeat'].includes(r.grade))?'':'disabled'}>Procvičit chyby a nejisté</button> <button data-recall-action="settings">Vybrat novou sadu</button></article>`;
    $('#recall-finish').focus({preventScroll:true});
  }
  function start(items){deck=items;index=0;records=[];stage=0;caseSteps=[];response=null;revealed=false;currentGrade=null;
    if(!deck.length){$('#recall-play').innerHTML='<p class="empty">Pro tento výběr nejsou úlohy k dispozici. Upravte filtr typu nebo tématu.</p>';return;}
    $('#recall-settings').open=false;render();$('#recall-position').focus({preventScroll:true});$('#recall-play').scrollIntoView({block:'start'});
  }
  root.addEventListener('click',event=>{
    const grade=event.target.closest('[data-case-grade]');if(grade){currentGrade=grade.dataset.caseGrade;root.querySelectorAll('[data-case-grade]').forEach(b=>b.setAttribute('aria-pressed',b===grade));$('[data-recall-action="next"]').disabled=false;return;}
    const action=event.target.closest('[data-recall-action]')?.dataset.recallAction;if(!action)return;
    if(action==='settings'){$('#recall-settings').open=true;$('#recall-type').focus();return;}
    if(action==='retry'){const ids=new Set(records.filter(r=>['wrong','skipped','case-partial','case-repeat'].includes(r.grade)).map(r=>r.id));start(makeDeck(bank.filter(q=>ids.has(q.id)),{limit:bank.length}));return;}
    const item=deck[index];if(!item)return;
    if(action==='skip'&&!revealed){response=item.type==='case'?{text:''}:{value:'',correct:false,kind:'skip'};revealed=true;if(item.type!=='case')save(item,'skipped');render();$('.recall-feedback h4').focus({preventScroll:true});return;}
    if(action==='manual'&&revealed&&item.type==='short'&&!response.correct&&response.value){response={...response,correct:true,kind:'manual'};save(item,'manual');render();$('.recall-feedback h4').textContent='Ručně uznáno';$('.recall-feedback h4').focus({preventScroll:true});return;}
    if(action==='next'&&revealed){
      if(item.type==='case'){
        if(!currentGrade)return;
        caseSteps.push({text:response.text,grade:currentGrade});
        if(stage<item.steps.length-1){stage++;revealed=false;response=null;currentGrade=null;render();$('#recall-position').focus({preventScroll:true});return;}
        const rating=caseSteps.some(s=>s.grade==='repeat')?'case-repeat':caseSteps.some(s=>s.grade==='partial')?'case-partial':'case-ready';
        save(item,rating);records.push({id:item.id,type:item.type,grade:rating});
      }else records.push({id:item.id,type:item.type,grade:history[item.id].grade});
      index++;stage=0;caseSteps=[];response=null;revealed=false;currentGrade=null;render();if($('#recall-position'))$('#recall-position').focus({preventScroll:true});$('#recall-play').scrollIntoView({block:'start'});
    }
  });
  for(const id of ['recall-type','recall-group','recall-topic','recall-limit'])$(`#${id}`).onchange=pool;
  $('#recall-start').onclick=()=>start(makeDeck(bank,options()));
  pool();historyText();
  return {open(topic){if(topic&&questions.some(q=>q.id===topic)){$('#recall-topic').value=topic;$('#recall-group').value='';$('#recall-settings').open=true;pool();}}};
}
