// Všechna témata B01-B30 a A01-A25 jsou nyní plně integrována v primárních souborech.
export const depthAdditions = {};
export function deepenAnswers(answers) {
  for (const [id, additions] of Object.entries(depthAdditions)) {
    for (const [i, text, refs] of additions) {
      answers[id].sections[i].paragraphs.push(text);
      answers[id].sections[i].refs = [...new Set([...answers[id].sections[i].refs, ...refs])];
    }
    answers[id].reviewed = '3. 11. 2026';
  }
}
