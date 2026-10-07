// audit_questions.js – Strukturální audit kvízových otázek Neurologie
// Spuštění: node neuro/audit_questions.js  (ze složky projektu)

const fs = require('fs');
const path = require('path');

const srcPath = path.join(__dirname, 'data.js');
const src = fs.readFileSync(srcPath, 'utf8');

// data.js je browser-only (bez module.exports), patch pro Node.js
const tmpPath = '/tmp/_neuro_audit_tmp.js';
fs.writeFileSync(tmpPath, src + '\nmodule.exports = NEUROLOGY_DATA;');
const data = require(tmpPath);

const SEP = '='.repeat(60);

console.log(SEP);
console.log(`NEUROLOGIE – STRUKTURÁLNÍ AUDIT KVÍZOVÝCH OTÁZEK`);
console.log(`Modulů celkem: ${data.modules.length}`);
console.log(SEP);

let totalQuiz = 0;
let invalidOptions = 0;
let missingExplanation = 0;
let missingCorrectIndex = 0;

data.modules.forEach(mod => {
  const quizList = mod.quiz || [];
  console.log(`\n--- [MODUL ${mod.number}] ${mod.badgePrefix} | ${mod.title} ---`);
  console.log(`  Sekce: ${mod.sectionLabel} | Počet quiz otázek: ${quizList.length}`);

  quizList.forEach((q, i) => {
    totalQuiz++;

    if (!q.options || q.options.length !== 4) {
      invalidOptions++;
      console.log(`  ⚠️  [Quiz ${i + 1}] Nesprávný počet možností (${q.options ? q.options.length : 0}): "${q.question}"`);
    }

    if (!q.explanation) {
      missingExplanation++;
      console.log(`  ⚠️  [Quiz ${i + 1}] Chybí explanation: "${q.question}"`);
    }

    if (q.correctIndex === undefined) {
      missingCorrectIndex++;
      console.log(`  ⚠️  [Quiz ${i + 1}] Chybí correctIndex: "${q.question}"`);
    }
  });
});

console.log(`\n${SEP}`);
console.log(`VÝSLEDKY STRUKTURÁLNÍHO AUDITU`);
console.log(SEP);
console.log(`Celkem kvíz otázek:                     ${totalQuiz}`);
console.log(`Nesprávný počet možností (!=4):          ${invalidOptions}`);
console.log(`Chybějící explanation:                   ${missingExplanation}`);
console.log(`Chybějící correctIndex:                  ${missingCorrectIndex}`);
console.log(`Strukturální chyby CELKEM:               ${invalidOptions + missingExplanation + missingCorrectIndex}`);
console.log(SEP);
