// rand.js

const assert = require('assert');
const { rand } = require('../index.js');

describe('array/rand()', () => {
  it(`rand([1, 2, 3])`, () => {
    const res = rand([1, 2, 3]);
    assert.ok([1, 2, 3].includes(res));
    assert.strictEqual(typeof res, 'number');
  });
  it(`rand([1, 2, 3], 2)`, () => {
    const res = rand([1, 2, 3], 2);
    assert.strictEqual(res.length, 2);
    assert.ok([1, 2, 3].includes(res[0]));
    assert.ok([1, 2, 3].includes(res[1]));
  });
});
