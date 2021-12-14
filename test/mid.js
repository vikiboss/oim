const { strictEqual } = require('assert');
const { mid } = require('../index.js');

describe('string/mid()', () => {
  it(`mid("ooimm", "o", "m")`, () => strictEqual(mid('ooimm', 'o', 'm'), 'oi'));
  it(`mid("ooimm", "o", "m", true)`, () => strictEqual(mid('ooimm', 'o', 'm', true), 'oim'));
  it(`mid("ooimm", "1", "2")`, () => strictEqual(mid('ooimm', '1', '2'), ''));
  it(`mid("ooimm", "1", "2", true)`, () => strictEqual(mid('ooimm', '1', '2', true), ''));
  it(`mid("ooimm", "oi", "im")`, () => strictEqual(mid('ooimm', 'oi', '1m'), ''));
  it(`mid("ooimm", "oi", "im", true)`, () => strictEqual(mid('ooimm', 'oi', '1m', true), ''));
  it(`mid("ooimm", "mm", "oo")`, () => strictEqual(mid('ooimm', 'mm', 'oo'), ''));
  it(`mid("ooimm", "mm", "oo", true)`, () => strictEqual(mid('ooimm', 'mm', 'oo', true), ''));
});
