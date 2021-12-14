const assert = require('assert');
const { wait } = require('../index.js');

describe('other/wait()', () => {
  it(`await wait`, () => assert.ok(wait() instanceof Promise));
});
