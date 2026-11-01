#!/usr/bin/env node
// Reproducible offline adapter. Usage: node scripts/import_patient_cases.cjs /path/to/pinned.jsonl
const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const selection = require('../private-patient/selection.cjs');
const concealments = require('../private-patient/concealments.cjs');
const dataset = 'nisten/opus5-5-doctor-patient-conversations-all-human-diseases';
const revision = '9277244e642a8ba02cb8c1d26408e5792932045b';
const file = process.argv[2];
if (!file) throw new Error('Supply the pinned JSONL path. See private-patient/README.md.');
const raw = fs.readFileSync(file);
const sourceSha256 = crypto.createHash('sha256').update(raw).digest('hex');
if (sourceSha256 !== 'f828c30cee7006a3cf5b88909f9b865688f98b11d4c886108b9b9a39e5402e0b') throw new Error('Source checksum does not match the pinned revision');
const rows = raw.toString('utf8').trim().split('\n').map((line, i) => {
  try { return JSON.parse(line); } catch { throw new Error(`Invalid JSONL row ${i + 1}`); }
});
const selected = selection.map((item, index) => {
  const matches = rows.filter(row => row.name === item.sourceName);
  if (matches.length !== 1) throw new Error(`Expected one source for ${item.sourceName}`);
  const original = matches[0];
  if (!Array.isArray(original.conversation) || !original.pubmed_refs?.length) throw new Error(`Incomplete source: ${item.sourceName}`);
  const turns = original.conversation.filter(m => m.role === 'user');
  const concealment = concealments[item.sourceName];
  if (!concealment) throw new Error(`Missing disclosure challenge for ${item.sourceName}`);
  const preparedFacts = item.facts.map(fact => concealment.replaceTopic === fact.topic
    ? { topic: concealment.topic, answer: concealment.revealedAnswer, sourceTurn: concealment.revealSourceTurn,
        sensitive: true, guardedAnswer: concealment.guardedAnswer, disclosureReason: concealment.reason,
        guardedSourceTurn: concealment.guardedSourceTurn }
    : fact);
  if (!concealment.replaceTopic) preparedFacts.push({
    topic: concealment.topic, answer: concealment.revealedAnswer, sourceTurn: concealment.revealSourceTurn,
    sensitive: true, guardedAnswer: concealment.guardedAnswer, disclosureReason: concealment.reason,
    guardedSourceTurn: concealment.guardedSourceTurn,
  });
  const facts = preparedFacts.map((fact, i) => {
    const sourceText = fact.sourceTurn === 'scenario' ? original.patient_scenario : turns[fact.sourceTurn]?.content;
    const guardedSourceText = fact.sensitive
      ? (fact.guardedSourceTurn === 'scenario' ? original.patient_scenario : turns[fact.guardedSourceTurn]?.content)
      : undefined;
    if (!sourceText) throw new Error(`Missing source turn for ${item.sourceName}: ${i}`);
    if (fact.sensitive && !guardedSourceText) throw new Error(`Missing guarded source turn for ${item.sourceName}: ${i}`);
    return { ...fact, id: `f${i + 1}`, sourceText, guardedSourceText, weight: 1 };
  });
  return {
    ...item, facts,
    id: crypto.createHash('sha256').update(`${revision}:${item.sourceName}`).digest('hex').slice(0, 20),
    version: '1.1.0',
    source: { dataset, revision, recordName: item.sourceName, license: 'Apache-2.0', url: `https://huggingface.co/datasets/${dataset}/tree/${revision}` },
    adaptation: 'Česká výuková rekonstrukce před závěrečným rozborem. Zkrácený dialog; pozdější léčba a diagnostické výsledky nejsou součástí simulace. Jeden zdrojově podložený citlivý údaj je odhalen až po cíleném, neodsuzujícím doptání.',
    references: original.pubmed_refs,
    original,
    milestone: index === 0 || item.sourceName === 'GERD' || item.sourceName === 'Migraine' ? 'pilot' : 'expanded',
  };
});
if (selected.length !== 30 || new Set(selected.map(c => c.id)).size !== 30) throw new Error('Expected 30 unique cases');
if (Object.keys(concealments).length !== selected.length) throw new Error('Expected exactly one disclosure challenge per selected case');
for (const specialty of ['kardio', 'pneumo', 'gastro', 'neuro', 'derma', 'psych']) {
  if (selected.filter(c => c.specialty === specialty).length !== 5) throw new Error(`Expected five ${specialty} cases`);
}
const output = path.join(__dirname, '../private-patient/cases.json');
fs.writeFileSync(output, JSON.stringify({
  dataset, revision, license: 'Apache-2.0', sourceSha256,
  sourceRecords: rows.length, cases: selected,
}, null, 2) + '\n');
console.log(`Imported ${selected.length} Czech adaptations with originals (${rows.length} source records). Clinical approval remains pending.`);
