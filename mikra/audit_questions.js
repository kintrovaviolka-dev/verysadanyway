const fs = require('fs');
const code = fs.readFileSync('./mikra/data_mikra.js', 'utf8');
eval(code + '; global.MIKRA_QUESTIONS = MIKRA_QUESTIONS;');

const questions = global.MIKRA_QUESTIONS;
console.log('==================================================');
console.log(`TOTAL DUAL-QUESTIONS: ${questions.length}`);
console.log('==================================================');

let totalQuizzes = 0;
let missingExplanationCount = 0;
let invalidOptionCount = 0;

questions.forEach(q => {
  console.log(`\n--- [OTÁZKA ${q.cislo}] ID: ${q.id} ---`);
  console.log(`  Část A (${q.skupina_a}): ${q.cast_a.title}`);
  console.log(`  Část B (${q.skupina_b}): ${q.cast_b.title}`);
  
  const quizA = q.cast_a.quiz || [];
  const quizB = q.cast_b.quiz || [];
  
  totalQuizzes += quizA.length + quizB.length;
  
  quizA.forEach((item, i) => {
    if (!item.options || item.options.length !== 4) {
      invalidOptionCount++;
      console.log(`  ⚠️ [Part A Quiz ${i+1}] Invalid options count (${item.options ? item.options.length : 0}): "${item.q}"`);
    }
    if (!item.explanation) {
      missingExplanationCount++;
      console.log(`  ⚠️ [Part A Quiz ${i+1}] Missing explanation: "${item.q}"`);
    }
  });

  quizB.forEach((item, i) => {
    if (!item.options || item.options.length !== 4) {
      invalidOptionCount++;
      console.log(`  ⚠️ [Part B Quiz ${i+1}] Invalid options count (${item.options ? item.options.length : 0}): "${item.q}"`);
    }
    if (!item.explanation) {
      missingExplanationCount++;
      console.log(`  ⚠️ [Part B Quiz ${i+1}] Missing explanation: "${item.q}"`);
    }
  });
});

console.log('\n==================================================');
console.log(`TOTAL ACTIVE RECALL QUIZZES: ${totalQuizzes}`);
console.log(`QUIZZES WITH INVALID OPTION COUNT (!=4): ${invalidOptionCount}`);
console.log(`QUIZZES MISSING EXPLANATIONS: ${missingExplanationCount}`);
console.log('==================================================');
