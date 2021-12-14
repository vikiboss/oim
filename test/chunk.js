const { strictEqual } = require('assert');
const { chunk } = require('../index.js');

describe('array/chunk()', () => {
  const test = [1, 2, 3, 4, 5];
  it(`chunk([1, 2, 3, 4, 5], 2)`, () => {
    strictEqual(chunk([], 2).length, 0);
    strictEqual(chunk(test, 2).length, 3);
    strictEqual(chunk(test, 2)[2].length, 1);
    strictEqual(chunk(test, 2)[2][0], 5);
  });
  it(`chunk([1, 2, 3, 4, 5], 3)`, () => {
    strictEqual(chunk(test, 3).length, 2);
    strictEqual(chunk(test, 3)[1].length, 2);
    strictEqual(chunk(test, 3)[1][1], 5);
  });
  it(`chunk([1, 2, 3, 4, 5], 5)`, () => {
    strictEqual(chunk(test, 5).length, 1);
  });
  it(`chunk([1, 2, 3, 4, 5], 10)`, () => {
    strictEqual(chunk(test, 10)[0].length, test.length);
  });
});
