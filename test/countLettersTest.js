const countLetters = require("../countLetters");
const assertEqual = require("../assertEqual");
const assert = require('chai').assert;

describe("#countLetters", () => {
  it("returns correct counts for 'LHL'", () => {
    const result = countLetters('LHL');
    assert.strictEqual(result['L'], 2);
    assert.strictEqual(result['H'], 1);
  });

  it("returns correct counts for 'hello'", () => {
    const result = countLetters('hello');
    assert.strictEqual(result['h'], 1);
    assert.strictEqual(result['e'], 1);
    assert.strictEqual(result['l'], 2);
    assert.strictEqual(result['o'], 1);
  });

  it("returns correct counts for an empty string", () => {
    const result = countLetters('');
    assert.deepEqual(result, {});
  });

  it("ignores spaces", () => {
    const result = countLetters('h e l l o');
    assert.strictEqual(result['h'], 1);
    assert.strictEqual(result['e'], 1);
    assert.strictEqual(result['l'], 2);
    assert.strictEqual(result['o'], 1);
    assert.strictEqual(result[' '], undefined);
  });
})
