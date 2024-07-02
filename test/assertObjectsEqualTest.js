const eqObjects = require("../eqObjects");
const assert = require('chai').assert;


//const sally = { hair: "long", hairColor: "brown", children: "2" };
//const susanne = { hair: "long", hairColor: "brown", children: "2" };
//const jeremy = { hair: "short", hairColor: "blond", children: "2" };
//const bob = { hair: "short", hairColor: "brown", children: "0" };

//function assertObjectsEqual(actual, expected) {
//  assert.deepStrictEqual(actual, expected);
//}

describe("#eqObjects", () => {
  it("returns true for objects with the same keys and values", () => {
    const sally = { hair: "long", hairColor: "brown", children: "2" };
    const susanne = { hair: "long", hairColor: "brown", children: "2" };
    assert.strictEqual(eqObjects(sally, susanne), true);
  });

  it("returns false for objects with different keys or values", () => {
    const sally = { hair: "long", hairColor: "brown", children: "2" };
    const bob = { hair: "short", hairColor: "brown", children: "0" };
    assert.strictEqual(eqObjects(sally, bob), false);
  });

  it("returns false for objects with different values for same keys", () => {
    const sally = { hair: "long", hairColor: "brown", children: "2" };
    const jeremy = { hair: "short", hairColor: "blond", children: "2" };
    assert.strictEqual(eqObjects(sally, jeremy), false);
  });

  it("returns true for objects with same keys and array values", () => {
    const obj1 = { a: [1, 2, 3], b: "2" };
    const obj2 = { a: [1, 2, 3], b: "2" };
    assert.strictEqual(eqObjects(obj1, obj2), true);
  });

  it("returns false for objects with different array values", () => {
    const obj1 = { a: [1, 2, 3], b: "2" };
    const obj2 = { a: [1, 2], b: "2" };
    assert.strictEqual(eqObjects(obj1, obj2), false);
  });
});