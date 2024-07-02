const assert = require('chai').assert;
const eqArrays = require("../eqArrays");
const assertEqual = require("../assertEqual");

describe("#eqArrays", () => {
  it("returns true for [1, 2, 3] and [1, 2, 3]", () => {
    assert.strictEqual(assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true));
  });

  it("returns false for [1, 2, 3] and [1, 2, 4]", () => {
    assert.strictEqual(assertEqual(eqArrays([1, 2, 3], [1, 2, 4]), false));
  });
});