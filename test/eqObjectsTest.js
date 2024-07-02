
const eqObjects = require("../eqObjects");
const assert = require('chai').assert;

describe("#eqObjects", () => {
  it("returns true for objects with the same properties and values", () => {
    const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
    const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };

    assert.strictEqual(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject), true);
  });

  it("returns false for objects with different properties", () => {
    const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
    const longSleeveMultiColorShirtObject = {
      size: "medium",
      colors: ["red", "blue"],
      sleeveLength: "long",
    };

    assert.strictEqual(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject), false);
  });
});