const assert = require('assert');
const { rand } = require('../index.js');

describe('array/rand()', () => {
  const test = [1, 2, 3];
  it(`rand([1, 2, 3])`, () => {
    const res = rand(test);
    assert.ok(test.includes(res));
    assert.strictEqual(typeof res, 'number');
  });
  it(`rand([1, 2, 3], 2)`, () => {
    const res = rand(test, 2);
    assert.strictEqual(res.length, 2);
    assert.ok(test.includes(res[0]));
    assert.ok(test.includes(res[1]));
  });
});
