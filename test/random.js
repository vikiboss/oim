const assert = require('assert');
const { random } = require('../index.js');

describe('number/random()', () => {
  it('random()', () => {
    const res = random();
    assert.ok(res >= 0 && res <= 1);
  });
  it('random(1, 2)', () => {
    const res = random(1, 2);
    assert.ok(res >= 1 && res <= 2);
  });
  it('random(-2, 0)', () => {
    const res = random(-2, 0);
    assert.ok(res >= -2 && res <= 0);
  });
});
