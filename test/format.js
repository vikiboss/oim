const { strictEqual } = require('assert');
const { format } = require('../index.js');

describe('date/format()', () => {
  it(`format(new Date('2021-12-12 12:12:12:120'))`, () => {
    const date = new Date('2021-12-12 12:12:12:120');
    strictEqual(format(date), '2021/12/12 12:12:12');
    strictEqual(format(date, 'YY-MMM-D-H-m-s-S-SS-SSS'), '21-Dec-12-12-12-12-1-12-120');
  });
});
