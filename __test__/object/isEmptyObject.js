const assert = require('assert');
const { isEmptyObject } = require('../../index.js');

describe('object/isEmptyObject()', () => {
  it(`isEmptyObject()`, () => assert.ok(isEmptyObject() === false));
  it(`isEmptyObject({})`, () => assert.ok(isEmptyObject({}) === true));
  it(`isEmptyObject(new Object())`, () =>
    assert.ok(isEmptyObject(new Object()) === true));
  it(`isEmptyObject(null)`, () => assert.ok(isEmptyObject(null) === false));
  it(`isEmptyObject(undefined)`, () =>
    assert.ok(isEmptyObject(undefined) === false));
  it(`isEmptyObject(123)`, () => assert.ok(isEmptyObject(123) === false));
});
