const assert = require('assert');
const { left } = require('../../index.js');

describe('string/left()', () => {
  it(`left("ooimm", "m")`, () => assert.strictEqual(left('ooimm', 'm'), 'ooi'));
  it(`left("ooimm", "m", true)`, () =>
    assert.strictEqual(left('ooimm', 'm', true), 'ooim'));
  it(`left("ooimm", "oi")`, () => assert.strictEqual(left('ooimm', 'oi'), 'o'));
  it(`left("ooimm", "oi", true)`, () =>
    assert.strictEqual(left('ooimm', 'oi', true), 'o'));
  it(`left("ooimm", "2")`, () => assert.strictEqual(left('ooimm', '2'), ''));
  it(`left("ooimm", "2", true)`, () =>
    assert.strictEqual(left('ooimm', '2', true), ''));
});
