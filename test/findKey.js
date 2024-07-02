const findKey = require("../findKey");
const assert = require('chai').assert;

describe("#findKey", () => {
  it("returns 'noma' for an object where stars === 2", () => {
    const result = findKey(
      {
        "Blue Hill": { stars: 1 },
        Akaleri: { stars: 3 },
        noma: { stars: 2 },
        elBulli: { stars: 3 },
        Ora: { stars: 2 },
        Akelarre: { stars: 3 },
      },
      (x) => x.stars === 2
    );

    assert.strictEqual(result, "noma");
  });

  it("returns undefined when no key satisfies the condition stars === 4", () => {
    const result = findKey(
      {
        "Blue Hill": { stars: 1 },
        Akaleri: { stars: 3 },
        noma: { stars: 2 },
        elBulli: { stars: 3 },
        Ora: { stars: 2 },
        Akelarre: { stars: 3 },
      },
      (x) => x.stars === 4
    );

    assert.strictEqual(result, undefined);
  });

  it("returns undefined for an empty object", () => {
    const result = findKey({}, (x) => x.stars === 2);
    assert.strictEqual(result, undefined);
  });
});