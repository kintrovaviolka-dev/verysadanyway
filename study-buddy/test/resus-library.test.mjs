import test from 'node:test';
import assert from 'node:assert/strict';
import { RESUS_ALGORITHMS, RESUS_DOSE_TABLES, RESUS_DRILLS, algorithmById } from '../public/resus-library.js';

test('resus knihovna má zdrojový PDF soubor u každého algoritmu', () => {
  assert.equal(RESUS_ALGORITHMS.length, 10);
  RESUS_ALGORITHMS.forEach((algorithm) => {
    assert.match(algorithm.pdf, /\.pdf$/);
    assert.match(algorithm.preview, /\.webp$/);
  });
});

test('kazuistiky a dávky vždy odkazují na existující zdrojový algoritmus', () => {
  [...RESUS_DOSE_TABLES, ...RESUS_DRILLS].forEach(({ sourceId }) => {
    assert.ok(algorithmById(sourceId), `chybí zdroj ${sourceId}`);
  });
  assert.ok(RESUS_DRILLS.every((drill) => drill.steps.length >= 3));
});
