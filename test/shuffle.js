// shuffle.js

const assert = require('assert');
const shuffle = require('../array/shuffle.js');

describe('array/shuffle()', () => {
  it('shuffle([0, 1, 2, 3])', () => {
    const res = shuffle([0, 1, 2, 3]);
    assert.strictEqual(res.length, 4);
  });
});
