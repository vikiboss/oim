const { strictEqual } = require('assert');
const { right } = require('../index.js');

describe('string/right()', () => {
  it(`right("ooimm", "o")`, () => strictEqual(right('ooimm', 'o'), 'imm'));
  it(`right("ooimm", "o", true)`, () => strictEqual(right('ooimm', 'o', true), 'oimm'));
  it(`right("ooimm", "oi")`, () => strictEqual(right('ooimm', 'oi'), 'mm'));
  it(`right("ooimm", "oi", true)`, () => strictEqual(right('ooimm', 'oi', true), 'mm'));
  it(`right("ooimm", "2")`, () => strictEqual(right('ooimm', '2'), ''));
  it(`right("ooimm", "2", true)`, () => strictEqual(right('ooimm', '2', true), ''));
});
