// mid.js

const assert = require('assert');
const mid = require('../string/mid.js');

describe('string/mid()', () => {
  it(`mid("ooimm", "o", "m")`, () => {
    assert.strictEqual(mid('ooimm', 'o', 'm'), 'oi');
  });
  it(`mid("ooimm", "o", "m", true)`, () => {
    assert.strictEqual(mid('ooimm', 'o', 'm', true), 'oim');
  });
});
