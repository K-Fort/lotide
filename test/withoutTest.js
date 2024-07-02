const without = require("../without");
const assert = require('chai').assert;

describe("#without", () => {
  it("removes specified elements from the array", () => {
    assert.deepEqual(without([1, 2, 3], [1]), [2, 3]);
  });

  it("handles different types correctly", () => {
    assert.deepEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
  });

  it("does not alter the original array", () => {
    const words = ["hello", "world", "lighthouse"];
    without(words, ["lighthouse"]);
    assert.deepEqual(words, ["hello", "world", "lighthouse"]);
  });
});