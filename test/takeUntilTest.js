const takeUntil = require("../takeUntil");
const assert = require('chai').assert;


describe("#takeUntil", () => {
  it("returns a slice of the array with elements taken from the beginning until the callback returns a truthy value", () => {
    const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
    const results1 = takeUntil(data1, x => x < 0);
    assert.deepEqual(results1, [1, 2, 5, 7, 2]);

    const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
    const results2 = takeUntil(data2, x => x === ',');
    assert.deepEqual(results2, ["I've", "been", "to", "Hollywood"]);
  });

  it("returns an empty array if the first element meets the condition", () => {
    const data = [1, 2, 3, 4, 5];
    const result = takeUntil(data, x => x === 1);
    assert.deepEqual(result, []);
  });

  it("returns the entire array if none of the elements meet the condition", () => {
    const data = [1, 2, 3, 4, 5];
    const result = takeUntil(data, x => x === 10);
    assert.deepEqual(result, [1, 2, 3, 4, 5]);
  });
});