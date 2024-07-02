const letterPositions = require("../letterPositions");
const assert = require('chai').assert;

describe("#letterPositions", () => {
  it("returns correct positions for 'hello'", () => {
    const result = letterPositions("hello");
    assert.deepEqual(result['e'], [1]);
  });

  it("returns correct positions for 'Hello'", () => {
    const result = letterPositions("Hello");
    assert.deepEqual(result['e'], [1]);
  })});