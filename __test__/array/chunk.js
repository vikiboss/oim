const assert = require('assert');
const { chunk } = require('../../index.js');

describe('array/chunk()', () => {
  const test = [1, 2, 3, 4, 5];
  it(`chunk([1, 2, 3, 4, 5], 2)`, () => {
    assert.strictEqual(chunk([], 2).length, 0);
    assert.strictEqual(chunk(test, 2).length, 3);
    assert.strictEqual(chunk(test, 2)[2].length, 1);
    assert.strictEqual(chunk(test, 2)[2][0], 5);
  });
  it(`chunk([1, 2, 3, 4, 5], 3)`, () => {
    assert.strictEqual(chunk(test, 3).length, 2);
    assert.strictEqual(chunk(test, 3)[1].length, 2);
    assert.strictEqual(chunk(test, 3)[1][1], 5);
  });
  it(`chunk([1, 2, 3, 4, 5], 5)`, () => {
    assert.strictEqual(chunk(test, 5).length, 1);
  });
  it(`chunk([1, 2, 3, 4, 5], 10)`, () => {
    assert.strictEqual(chunk(test, 10)[0].length, test.length);
  });
});
