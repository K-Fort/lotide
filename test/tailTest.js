const tail = require("../tail");
const assert = require('chai').assert;

describe("#tail", () => {
  it("returns ['Lighthouse', 'Labs'] for ['Hello', 'Lighthouse', 'Labs']", () => {
    const result = tail(["Hello", "Lighthouse", "Labs"]);
    assert.deepEqual(result.length, 2);
    assert.deepEqual(result[0], "Lighthouse");
    assert.deepEqual(result[1], "Labs");
  });

  it("does not modify the original array", () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    tail(words);
    assert.deepEqual(words.length, 3);
  });
});