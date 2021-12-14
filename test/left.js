const { strictEqual } = require('assert');
const { left } = require('../index.js');

describe('string/left()', () => {
  it(`left("ooimm", "m")`, () => strictEqual(left('ooimm', 'm'), 'ooi'));
  it(`left("ooimm", "m", true)`, () => strictEqual(left('ooimm', 'm', true), 'ooim'));
  it(`left("ooimm", "oi")`, () => strictEqual(left('ooimm', 'oi'), 'o'));
  it(`left("ooimm", "oi", true)`, () => strictEqual(left('ooimm', 'oi', true), 'o'));
  it(`left("ooimm", "2")`, () => strictEqual(left('ooimm', '2'), ''));
  it(`left("ooimm", "2", true)`, () => strictEqual(left('ooimm', '2', true), ''));
});
