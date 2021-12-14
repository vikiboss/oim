const assert = require('assert');
const { wait } = require('../index.js');

describe('other/wait()', () => {
  it(`await wait`, async () => {
    const res = await wait(10);
    assert.strictEqual(res, undefined);
  });
});
