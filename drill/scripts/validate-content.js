#!/usr/bin/env node
// Validates the generated MedDrill content before it is published.
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const manifestPath = path.join(ROOT, 'data', 'manifest.json');
const requireReview = process.argv.includes('--require-review');
const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
const errors = [];
const ids = new Set();

function fail(message) {
  errors.push(message);
}

function isText(value) {
  return typeof value === 'string' && value.trim().length > 0;
}

if (!isText(manifest.version)) fail('Manifest musí mít release verzi.');

for (const subject of manifest.subjects || []) {
  if (!isText(subject.id) || !isText(subject.revision)) {
    fail(`Předmět musí mít id a revision: ${subject.title || '<bez názvu>'}`);
    continue;
  }

  const modulePath = path.join(ROOT, subject.file.replace(/^\/drill\//, ''));
  if (!fs.existsSync(modulePath)) {
    fail(`${subject.id}: chybí soubor ${subject.file}`);
    continue;
  }

  const moduleData = JSON.parse(fs.readFileSync(modulePath, 'utf8'));
  const questions = moduleData.questions;
  if (!Array.isArray(questions)) {
    fail(`${subject.id}: questions musí být pole.`);
    continue;
  }

  const counts = { single_choice: 0, case_study: 0, fill_in: 0 };
  for (const question of questions) {
    const prefix = `${subject.id}/${question && question.id ? question.id : '<bez id>'}`;
    if (!question || !isText(question.id) || ids.has(question.id)) fail(`${prefix}: neplatné nebo duplicitní id.`);
    else ids.add(question.id);
    if (!question || question.subjectId !== subject.id) fail(`${prefix}: subjectId neodpovídá modulu.`);
    if (!question || !isText(question.type) || !(question.type in counts)) fail(`${prefix}: neznámý typ otázky.`);
    else counts[question.type]++;
    if (!question || !isText(question.explanation)) fail(`${prefix}: chybí vysvětlení.`);

    if (question && question.type === 'single_choice') {
      if (!Array.isArray(question.options) || question.options.length < 2 || !question.options.every(isText)) fail(`${prefix}: single-choice musí mít alespoň dvě odpovědi.`);
      if (!Number.isInteger(question.correctIndex) || question.correctIndex < 0 || question.correctIndex >= question.options.length) fail(`${prefix}: correctIndex je mimo možnosti.`);
      if (!isText(question.question)) fail(`${prefix}: chybí text otázky.`);
    }
    if (question && question.type === 'fill_in') {
      if (!isText(question.question)) fail(`${prefix}: chybí text otázky.`);
      if (!Array.isArray(question.acceptedAnswers) || question.acceptedAnswers.length === 0 || !question.acceptedAnswers.every(isText)) fail(`${prefix}: fill-in musí mít alespoň jednu přijatelnou odpověď.`);
    }
    if (question && question.type === 'case_study') {
      if (!isText(question.title) || !question.vignette || !isText(question.vignette.scenario) || !isText(question.vignette.solution)) fail(`${prefix}: kazuistika musí mít title, scénář a řešení.`);
    }

    const hasSource = isText(question && question.source);
    const hasReview = isText(question && question.reviewedAt);
    if (hasSource !== hasReview) fail(`${prefix}: source a reviewedAt musí být vyplněny společně.`);
    if (requireReview && (!hasSource || !hasReview)) fail(`${prefix}: pro nově publikovaný obsah je povinný source a reviewedAt.`);
  }

  if (subject.totalQuestions !== questions.length) fail(`${subject.id}: totalQuestions neodpovídá souboru.`);
  for (const type of Object.keys(counts)) {
    if (!subject.counts || subject.counts[type] !== counts[type]) fail(`${subject.id}: součet ${type} neodpovídá souboru.`);
  }
}

if (errors.length) {
  console.error(`MedDrill content validation failed (${errors.length} chyb):`);
  errors.forEach(error => console.error(`- ${error}`));
  process.exitCode = 1;
} else {
  console.log(`MedDrill content validation passed: ${manifest.subjects.length} modulů, ${ids.size} unikátních otázek.`);
}
