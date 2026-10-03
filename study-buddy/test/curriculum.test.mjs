import test from 'node:test';
import assert from 'node:assert/strict';
import { isActiveThisSemester } from '../src/curriculum.js';

test('dermatologie tento semestr obsahuje jen obecnou část', () => {
  assert.equal(isActiveThisSemester({ subject: 'dermatology', section: 'Obecná část' }), true);
  assert.equal(isActiveThisSemester({ subject: 'dermatology', section: 'Speciální dermatologie (Specka)' }), false);
  assert.equal(isActiveThisSemester({ subject: 'dermatology', section: 'Venerologie' }), false);
  assert.equal(isActiveThisSemester({ subject: 'radiology' }), true);
});
