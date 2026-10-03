import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import vm from 'node:vm';

const root = resolve(import.meta.dirname, '..', '..');

function evaluate(file, expression) {
  const context = { window: {}, console };
  vm.createContext(context);
  const source = readFileSync(resolve(root, file), 'utf8');
  vm.runInContext(`${source}\n; globalThis.__result = ${expression};`, context, { timeout: 5_000 });
  return context.__result;
}

function toTopics(subject, sourcePath, entries) {
  return entries.map((item) => ({
    id: `${subject}:${item.id}`,
    subject,
    title: item.title,
    sourcePath,
    // První průchod je o jedné dobře ohraničené otázce/okruhu, ne o perfektním naučení celé kapitoly.
    // Pět minut znamená: otevřít, aktivně si vybavit odpověď a krátce zkontrolovat.
    estimatedMinutes: 5
  }));
}

const radiology = evaluate('radiolka/data.js', 'window.DATA_RADIOLOGIE');
const dermatology = evaluate('derma/data.js', 'DATA_DERMATOLOGIE');
const neurology = evaluate('neuro/data.js', 'NEUROLOGY_DATA.modules');
const catalog = [
  ...toTopics('radiology', '/radiolka/', radiology),
  ...toTopics('dermatology', '/derma/', dermatology),
  ...toTopics('neurology', '/neuro/', neurology)
];

const destination = resolve(root, 'study-buddy/src/catalog.generated.js');
mkdirSync(dirname(destination), { recursive: true });
writeFileSync(destination, `// Generated from the local study modules; do not hand-edit.\nexport const TOPIC_CATALOG = ${JSON.stringify(catalog, null, 2)};\n\nexport const URGENT_TOPICS = ${JSON.stringify([
  { id: 'urgent-adult-tachycardia', title: 'Adult tachycardia approach', minutes: 10 },
  { id: 'urgent-last', title: 'Systémová toxicita lokálních anestetik (LAST)', minutes: 10 },
  { id: 'urgent-anafilaxe', title: 'Anafylaxe: první minuty a dávkování adrenalinu', minutes: 10 },
  { id: 'urgent-airway', title: 'Obtížné dýchací cesty a CICO', minutes: 10 },
  { id: 'urgent-sepsis', title: 'Sepsa a septický šok: první hodina', minutes: 10 },
  { id: 'urgent-bradycardia', title: 'Symptomatická bradykardie', minutes: 10 },
  { id: 'urgent-hyperk', title: 'Hyperkalémie s EKG změnami', minutes: 10 }
], null, 2)};\n`);
console.log(`Vytvořen katalog: ${catalog.length} témat.`);
