const assert = require('assert');
const { mid } = require('../../index.js');

describe('string/mid()', () => {
  it(`mid("ooimm", "o", "m")`, () =>
    assert.strictEqual(mid('ooimm', 'o', 'm'), 'oi'));
  it(`mid("ooimm", "o", "m", true)`, () =>
    assert.strictEqual(mid('ooimm', 'o', 'm', true), 'oim'));
  it(`mid("ooimm", "1", "2")`, () =>
    assert.strictEqual(mid('ooimm', '1', '2'), ''));
  it(`mid("ooimm", "1", "2", true)`, () =>
    assert.strictEqual(mid('ooimm', '1', '2', true), ''));
  it(`mid("ooimm", "oi", "im")`, () =>
    assert.strictEqual(mid('ooimm', 'oi', '1m'), ''));
  it(`mid("ooimm", "oi", "im", true)`, () =>
    assert.strictEqual(mid('ooimm', 'oi', '1m', true), ''));
  it(`mid("ooimm", "mm", "oo")`, () =>
    assert.strictEqual(mid('ooimm', 'mm', 'oo'), ''));
  it(`mid("ooimm", "mm", "oo", true)`, () =>
    assert.strictEqual(mid('ooimm', 'mm', 'oo', true), ''));
});
