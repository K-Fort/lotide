const assertEqual = require("../assertEqual");
const assert = require('chai').assert;

describe("#assertEqual", () => {
  it("returns Lighthouse Labs for Boot camp", () => {
    assert.strictEqual(assertEqual("Lighthouse Labs", "Boot camp"))
  });
});

describe("#assertEqual", () => {
  it("returns 1 for 1", () => {
    assert.strictEqual(assertEqual(1, 1))
  });
});

