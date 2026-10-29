import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {questions} from '../aro/questions.mjs';
import {answers,answerSources} from '../aro/answers.mjs';
import {lessons} from '../aro/lessons.mjs';
import {drawPair,filterQuestions,validateProgress,contentStatus} from '../aro/model.mjs';
test('Exam inventory preserves both complete numbered groups and source titles',()=>{
  const source=fs.readFileSync(new URL('../aro_materialy/skripta.md',import.meta.url),'utf8').split('\n');
  assert.equal(new Set(questions.map(q=>q.id)).size,55);
  for(const [group,count] of [['A',25],['B',30]]) assert.deepEqual(questions.filter(q=>q.group===group).map(q=>q.number),Array.from({length:count},(_,i)=>i+1));
  for(const q of questions) {assert.ok(source[q.line-1].includes(`${q.number}.`));assert.ok(q.prompts.length>=4);for(const id of q.lessonIds)assert.ok(lessons[id]);}
});
test('Every draw contains exactly one question from each group including endpoints',()=>{
  assert.deepEqual(drawPair(questions,()=>0).map(q=>q.id),['A01','B01']);
  assert.deepEqual(drawPair(questions,()=>.999999).map(q=>q.id),['A25','B30']);
  for(let i=0;i<100;i++)assert.deepEqual(drawPair(questions).map(q=>q.group),['A','B']);
});
test('Search is accent-insensitive; filters distinguish progress from revision',()=>{
  assert.ok(filterQuestions(questions,{search:'krecove'}).some(q=>q.id==='B02'));
  assert.equal(filterQuestions(questions,{search:'PONV'}).length,2);
  assert.equal(filterQuestions(questions,{filter:'updated'}).length,7);
  assert.equal(filterQuestions(questions,{filter:'draft'}).length,27);
  assert.deepEqual(filterQuestions(questions,{filter:'ready'},{B02:{status:'ready'}}).map(q=>q.id),['B02']);
  assert.equal(filterQuestions(questions,{group:'A',search:'sepse'}).length,0);
});
test('Stored state discards unknown identifiers and invalid status values',()=>{
  assert.deepEqual(validateProgress({A01:{status:'bogus',note:'abc'},unknown:{status:'ready'}},questions),{A01:{status:'new',note:'abc'}});
  assert.throws(()=>validateProgress([],questions));
  assert.equal(validateProgress({A01:{note:'x'.repeat(30000)}},questions).A01.note.length,20000);
});
test('Every published supplement discloses scope and links primary sources',()=>{
  assert.equal(Object.keys(lessons).length,5);
  for(const l of Object.values(lessons)){assert.ok(l.scope.length>30);assert.ok(l.edition);assert.ok(l.sources.length);for(const s of l.sources)assert.equal(new URL(s.url).protocol,'https:');}
});

test('Written answers have traceable sources for every section and remain separate from supplements',()=>{
  assert.deepEqual(filterQuestions(questions,{filter:'answer'}).map(q=>q.id),['A04','A07','A18','A20','B04','B05','B06','B11','B12','B17','B18','B19','B20','B21','B22','B23','B24','B25','B26','B27','B28','B29','B30']);
  for(const [id,a] of Object.entries(answers)){
    assert.ok(questions.some(q=>q.id===id));
    assert.equal(contentStatus(questions.find(q=>q.id===id)),'answer');
    assert.ok(a.scope && a.reviewed && a.opening && a.sections.length>=5);
    assert.ok(a.checks.length>=3);
    for(const part of [{refs:a.openingRefs},...a.sections,...a.checks]){
      assert.ok(part.refs.length);
      for(const ref of part.refs){assert.ok(answerSources[ref]?.locator);assert.equal(new URL(answerSources[ref].url).protocol,'https:');}
    }
  }
  assert.equal(contentStatus(questions.find(q=>q.id==='A17')),'supplement');
  assert.equal(contentStatus(questions.find(q=>q.id==='A04')),'answer');
  assert.ok(questions.find(q=>q.id==='A04').lessonIds.includes('ponv'));
  assert.equal(questions.filter(q=>contentStatus(q)==='supplement').length,5);
  assert.equal(contentStatus(questions.find(q=>q.id==='B11')),'answer');
  assert.ok(questions.find(q=>q.id==='B11').lessonIds.includes('sepsis'));
  assert.equal(contentStatus(questions.find(q=>q.id==='A19')),'outline');
});
test('High-risk teaching distinctions remain explicit: PLS vs NLS and IM vs IV adrenaline',()=>{
  const sections=answers.A18.sections;
  const pls=sections[1].paragraphs.join(' '),nls=sections[3].paragraphs.join(' ');
  assert.match(pls,/10 mikrogramů\/kg i.v.\/i.o./);
  assert.match(pls,/po 4 minutách/);
  assert.match(nls,/10–30 mikrogramů\/kg/);
  assert.match(nls,/30 sekundách účinné ventilace/);
  assert.match(nls,/3 : 1/);
  const allergy=answers.B04.sections.flatMap(s=>s.paragraphs).join(' ');
  assert.match(allergy,/0,5 mg i.m./);
  assert.match(allergy,/0,5 ml roztoku 1 mg\/ml/);
  assert.match(allergy,/po dvou správných i.m. dávkách/);
});
