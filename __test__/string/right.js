const assert = require('assert');
const { right } = require('../../index.js');

describe('string/right()', () => {
  it(`right("ooimm", "o")`, () =>
    assert.strictEqual(right('ooimm', 'o'), 'imm'));
  it(`right("ooimm", "o", true)`, () =>
    assert.strictEqual(right('ooimm', 'o', true), 'oimm'));
  it(`right("ooimm", "oi")`, () =>
    assert.strictEqual(right('ooimm', 'oi'), 'mm'));
  it(`right("ooimm", "oi", true)`, () =>
    assert.strictEqual(right('ooimm', 'oi', true), 'mm'));
  it(`right("ooimm", "2")`, () => assert.strictEqual(right('ooimm', '2'), ''));
  it(`right("ooimm", "2", true)`, () =>
    assert.strictEqual(right('ooimm', '2', true), ''));
});
