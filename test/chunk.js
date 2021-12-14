// chunk.js

const assert = require('assert');
const chunk = require('../array/chunk.js');

describe('array/chunk()', () => {
  it(`chunk([1, 2, 3, 4], 2)`, () => {
    const res = chunk([1, 2, 3, 4, 5], 2);
    assert.strictEqual(res.length, 3);
    assert.strictEqual(res[0].length, 2);
    assert.strictEqual(res[1].length, 2);
    assert.strictEqual(res[2].length, 1);
  });
});
