const assert = require('chai').assert;
const middle = require("../middle");
const assertArraysEqual = require("../assertArraysEqual");

describe("#middle", () => {
  it("returns [2] for [1, 2, 3]", () => {
    assert.deepEqual(assertArraysEqual(middle([1, 2, 3]), [2]));
  });

  it("returns ['c'] for ['a', 'b', 'c', 'd', 'e']", () => {
    assert.deepEqual(assertArraysEqual(middle(['a', 'b', 'c', 'd', 'e']), ['c']));
  });
});
