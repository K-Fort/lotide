const assertArraysEqual = require("../assertArraysEqual");
const assert = require('chai').assert;

describe("#assertArraysEqual", () => {
  it("returns [1, 2, 3] for [1, 2, 3]", () => {
    assert.strictEqual(assertArraysEqual([1, 2, 3], [1, 2, 3]))
  });
});

describe("#assertArraysEqual", () => {
  it("returns [1, 2, 4] for [1, 2, 3]", () => {
    assert.strictEqual(assertArraysEqual([1, 2, 3], [1, 2, 4]))
  });
});



