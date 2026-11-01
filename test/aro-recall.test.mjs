import test from 'node:test';
import assert from 'node:assert/strict';
import {recallBank} from '../aro/recall-bank.mjs';
import {recallCases} from '../aro/recall-cases.mjs';
import {makeDeck,matchShort,shuffle,normalizeRecall} from '../aro/recall-model.mjs';
import {questions} from '../aro/questions.mjs';
import {answerSources,answers} from '../aro/answers.mjs';
import {depthAdditions} from '../aro/answers-depth.mjs';
const bank=[...recallBank,...recallCases];
test('Every exam topic has a choice and short question with valid explanations and references',()=>{
 assert.equal(bank.length,120);assert.equal(new Set(bank.map(q=>q.id)).size,120);
 for(const q of questions)for(const type of ['choice','short'])assert.ok(recallBank.some(x=>x.type===type&&x.topics.includes(q.id)));
 for(const item of recallBank){assert.ok(item.prompt.length>20);assert.ok(item.explanation.length>30);assert.ok(item.refs.length);for(const id of item.refs)assert.ok(answerSources[id]);if(item.type==='choice'){assert.equal(item.options.length,4);assert.equal(new Set(item.options.map(x=>x.text)).size,4);assert.equal(item.options.filter(o=>o.id===item.correct).length,1);}else{assert.ok(item.accepted.length);assert.ok(normalizeRecall(item.accepted[0]).split(' ').length<=2);for(const a of item.accepted)assert.equal(matchShort(a,item).correct,true);}}
});
test('Choice keys are not encoded by length or a fixed screen position',()=>{
 const choice=recallBank.filter(x=>x.type==='choice');const longest=choice.filter(q=>{const a=q.options.find(x=>x.id===q.correct);return q.options.every(x=>x===a||a.text.length>x.text.length);});assert.ok(longest.length/choice.length<0.35);
 const positions=new Set();for(const r of [0,.3,.4,.5]){const [q]=makeDeck([choice[0]],{limit:1},()=>r);positions.add(q.options.findIndex(o=>o.id===q.correct));assert.equal(new Set(q.options.map(o=>o.id)).size,4);}assert.equal(positions.size,4);
});
test('Short evaluator tolerates Czech variants and a minor typo but rejects opposite meanings and numeric edits',()=>{
 const find=id=>recallBank.find(q=>q.id===id+'-short');
 assert.equal(matchShort('  EPINEFRIN. ',find('B04')).kind,'exact');
 assert.equal(matchShort('adrnealin',find('B04')).kind,'typo');
 assert.equal(matchShort('noradrenalin',find('B04')).correct,false);
 assert.equal(matchShort('hypokapnie',find('B15')).correct,false);
 assert.equal(matchShort('GSC',find('A22')).correct,false);
 assert.equal(matchShort('ne adrenalin',find('B04')).correct,false);
 assert.equal(matchShort('',find('A22')).kind,'empty');
 assert.equal(matchShort('6',{accepted:['5']}).correct,false);
 assert.equal(matchShort('vitamin B2',find('B21')).correct,false);
 assert.equal(matchShort('glukoza',find('B02')).correct,true);
});
test('Deck filters intersect, never duplicate and never mutate the authored options',()=>{
 const before=JSON.stringify(bank);const selected=makeDeck(bank,{type:'short',group:'A',limit:120},()=>.5);assert.equal(selected.length,25);
 assert.equal(makeDeck(bank,{type:'case',topic:'A01',limit:120}).length,0);
 assert.equal(makeDeck(bank,{type:'choice',topic:'B04',group:'A',limit:120}).length,0);
 const all=makeDeck(bank,{limit:120});assert.equal(new Set(all.map(x=>x.id)).size,120);assert.equal(JSON.stringify(bank),before);assert.deepEqual(shuffle([]),[]);
});
test('Cases have three staged questions, assessment criteria, critical actions and traceable sources',()=>{
 for(const item of recallCases){assert.equal(item.steps.length,3);assert.ok(item.stem.length>100);for(const s of item.steps){assert.ok(s.prompt.length>10);assert.ok(s.points.length>=2);assert.ok(s.critical.length>10);for(const ref of s.refs)assert.ok(answerSources[ref]);}}
 assert.ok(recallCases.find(q=>q.id==='case-04').steps[1].points.join(' ').includes('15 ml/min'));
 assert.ok(recallCases.find(q=>q.id==='case-02').steps[1].points.join(' ').includes('K >3,5'));
});
test('Depth audit expands twelve answers without replacing their original examiner checks',()=>{
 assert.equal(Object.keys(depthAdditions).length,12);for(const id of Object.keys(depthAdditions)){assert.equal(answers[id].checks.length,3);assert.ok(answers[id].sections.reduce((n,s)=>n+s.paragraphs.join(' ').split(/\s+/).length,0)>390);}
});
