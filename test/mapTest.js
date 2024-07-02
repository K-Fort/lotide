const map = require("../map");
const assert = require('chai').assert;


describe("#map", () => {
  it("returns the first letter of each word in an array of words", () => {
    const words = ["ground", "control", "to", "major", "tom"];
    const results1 = map(words, (word) => word[0]);
    assert.deepEqual(results1, ['g', 'c', 't', 'm', 't']);
  });

  it("returns the rounded numbers in an array of numbers", () => {
    const numbers = [1.25, 2.01, 3.46, 4.99, -1.33];
    const results2 = map(numbers, (number) => Math.round(number));
    assert.deepEqual(results2, [1, 2, 3, 5, -1]);
  });

  it("returns the uppercase version of each string in an array of greetings", () => {
    const greetings = ["Hello", "Bonjour", "Buongiorno"];
    const result3 = map(greetings, (greeting) => greeting.toUpperCase());
    assert.deepEqual(result3, ['HELLO', 'BONJOUR', 'BUONGIORNO']);
  });
});