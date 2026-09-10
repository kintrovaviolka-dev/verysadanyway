const fs = require('fs');
const code = fs.readFileSync('./mikra/data_mikra.js', 'utf8');
eval(code + '; global.MIKRA_QUESTIONS = MIKRA_QUESTIONS;');

const questions = global.MIKRA_QUESTIONS;

console.log('=== MEDICAL CONTENT AUDIT OF 40 DUAL-QUESTIONS ===');

questions.forEach(q => {
  const cA = q.cast_a;
  const cB = q.cast_b;
  
  // Check if content has key sections
  const requiredA = ['definice', 'etiologie', 'patogeneze', 'klinicky', 'laborator', 'terapie'];
  const missingA = requiredA.filter(k => !cA.content[k]);
  
  if (missingA.length > 0 && cA.title.includes('Bakteri')) {
    console.log(`[Q${q.cislo} Part A: ${cA.title}] Missing content fields: ${missingA.join(', ')}`);
  }

  // Check quiz explanation length & quality
  (cA.quiz || []).forEach((qz, idx) => {
    if (!qz.explanation || qz.explanation.length < 20) {
      console.log(`[Q${q.cislo} Part A Quiz ${idx+1}] Short/missing explanation: "${qz.q}"`);
    }
  });

  (cB.quiz || []).forEach((qz, idx) => {
    if (!qz.explanation || qz.explanation.length < 20) {
      console.log(`[Q${q.cislo} Part B Quiz ${idx+1}] Short/missing explanation: "${qz.q}"`);
    }
  });
});

console.log('=== MEDICAL CONTENT AUDIT COMPLETED ===');
