import { readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { TOPIC_CATALOG } from '../src/catalog.generated.js';
import { isActiveThisSemester } from '../src/curriculum.js';

const root = resolve(import.meta.dirname, '..', '..');
const envSource = readFileSync(resolve(root, 'ai_assistant/.env.local'), 'utf8');
const apiKey = envSource.match(/^GEMINI_API_KEY\s*=\s*["']?([^"'\n]+)["']?\s*$/m)?.[1];
const model = envSource.match(/^GEMINI_MODEL\s*=\s*["']?([^"'\n]+)["']?\s*$/m)?.[1] || 'gemini-2.5-flash';
if (!apiKey) throw new Error('GEMINI_API_KEY v ai_assistant/.env.local chybí.');

const subjects = ['radiology', 'dermatology', 'neurology'];
const candidates = Object.fromEntries(subjects.map((subject) => [subject, TOPIC_CATALOG
  .filter((topic) => topic.subject === subject && isActiveThisSemester(topic))
  .map(({ id, title }) => ({ id, title }))
]));

const prompt = `Jsi kurátor studijního plánu pro českou studentku medicíny. Z níže uvedených existujících okruhů vyber pro každý předmět 3 až 9 (nikdy 10) nejvíce high-yield témat, která mají dostat druhý krátký průchod ještě před koncem bloku. Hodnoť klinickou závažnost, frekvenci a schopnost spojovat mnoho dalších témat. Nevybírej jen proto, že je téma vzácné nebo obtížné. Nejde o klinické doporučení ani diagnózu, pouze o prioritizaci studijních okruhů. Vrať výhradně JSON podle schématu. Každé id musí být přesně z nabídky a každé odůvodnění v češtině stručné (max. 16 slov).\n\nKandidáti:\n${JSON.stringify(candidates)}`;
const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(model)}:generateContent`, {
  method: 'POST',
  headers: { 'content-type': 'application/json', 'x-goog-api-key': apiKey },
  body: JSON.stringify({
    contents: [{ parts: [{ text: prompt }] }],
    generationConfig: {
      responseMimeType: 'application/json',
      responseSchema: {
        type: 'OBJECT',
        properties: {
          selections: {
            type: 'ARRAY',
            items: {
              type: 'OBJECT',
              properties: {
                subject: { type: 'STRING', enum: subjects },
                topicIds: { type: 'ARRAY', items: { type: 'STRING' }, minItems: 3, maxItems: 9 },
                reasons: {
                  type: 'ARRAY',
                  items: {
                    type: 'OBJECT',
                    properties: { topicId: { type: 'STRING' }, reason: { type: 'STRING' } },
                    required: ['topicId', 'reason']
                  }
                }
              },
              required: ['subject', 'topicIds', 'reasons']
            }
          }
        },
        required: ['selections']
      }
    }
  })
});
if (!response.ok) {
  const error = await response.json().catch(() => ({}));
  throw new Error(`Gemini kurátorství se nepodařilo (${response.status}): ${error.error?.message ?? 'neznámá chyba'}`);
}
const payload = await response.json();
const text = payload.candidates?.[0]?.content?.parts?.map((part) => part.text ?? '').join('') ?? '';
let generated;
try { generated = JSON.parse(text); } catch { throw new Error('Gemini nevrátil čitelný JSON.'); }

const output = [];
for (const subject of subjects) {
  const selection = generated.selections?.find((item) => item.subject === subject);
  const allowed = new Map(candidates[subject].map((topic) => [topic.id, topic]));
  const ids = selection?.topicIds;
  if (!Array.isArray(ids) || ids.length < 3 || ids.length > 9 || new Set(ids).size !== ids.length || ids.some((id) => !allowed.has(id))) {
    throw new Error(`Neplatný výběr pro ${subject}; katalog se nezměnil.`);
  }
  ids.forEach((id, index) => output.push({
    topicId: id,
    subject,
    title: allowed.get(id).title,
    rank: index + 1,
    reason: String(selection.reasons?.find((reason) => reason.topicId === id)?.reason ?? 'Klíčový klinický a propojující okruh.').slice(0, 220)
  }));
}

writeFileSync(resolve(root, 'study-buddy/src/key-topics.generated.js'), `// Curated locally from the active catalog with Gemini; reviewable and safe to edit by regeneration.\nexport const KEY_TOPICS = ${JSON.stringify(output, null, 2)};\n`);
console.log(`Vybráno ${output.length} klíčových témat: ${Object.entries(Object.groupBy(output, ({ subject }) => subject)).map(([subject, items]) => `${subject} ${items.length}`).join(', ')}.`);
