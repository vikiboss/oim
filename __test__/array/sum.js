const assert = require('assert');
const { sum } = require('../../index.js');

describe('array/sum()', () => {
  it('sum([1, 2])', () => assert.strictEqual(sum([1, 2]), 3));
  it('sum([-2, 0, 1, 3, 10])', () =>
    assert.strictEqual(sum([-2, 0, 1, 3, 10]), 12));
});
