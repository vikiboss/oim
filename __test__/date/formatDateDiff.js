const assert = require('assert');
const { formatDateDiff } = require('../../index.js');

describe('date/formatDateDiff()', () => {
  it(`formatDateDiff(1000*60*60*24*30*3 + 1000*60*60*24*20 + 1000*60*60*12 + 1000*60*45 + 1000*25)`, () => {
    const res1 = formatDateDiff(
      1000 * 60 * 60 * 24 * 30 * 12 * 2 +
        1000 * 60 * 60 * 24 * 30 * 3 +
        1000 * 60 * 60 * 24 * 20 +
        1000 * 60 * 60 * 12 +
        1000 * 60 * 45 +
        1000 * 25 +
        750
    );
    const res2 = formatDateDiff(
      1000 * 60 * 60 * 24 * 30 * 12 * 2 +
        1000 * 60 * 60 * 24 * 30 * 3 +
        1000 * 60 * 60 * 24 * 20 +
        1000 * 60 * 60 * 12 +
        1000 * 60 * 45 +
        1000 * 25 +
        750,
      false
    );
    assert.strictEqual(res1, '2年3月20天12时45分25秒');
    assert.strictEqual(res2, '2y3mo20d12h45m25s');
  });
});
