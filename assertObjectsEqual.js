
// This function compares two objects to see if they have the same keys and values
const eqObjects = function (object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (let key of keys1) {
    const value1 = object1[key];
    const value2 = object2[key];

    if (Array.isArray(value1) && Array.isArray(value2)) {
      if (!eqArrays(value1, value2)) {
        return false;
      }
    } else if (value1 !== value2) {
      return false;
    }
  }
  return true;
};

// This function asserts if two objects are equal and logs the result
const assertObjectsEqual = function (actual, expected) {
  const inspect = require("util").inspect;

  if (eqObjects(actual, expected)) {
    console.log(
      `✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`,
    );
  } else {
    console.log(`
🛑🛑🛑  Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

const sally = { hair: "long", hairColor: "brown", children: "2" };
const susanne = { hair: "long", hairColor: "brown", children: "2" };
const jeremy = { hair: "short", hairColor: "blond", children: "2" };
const bob = { hair: "short", hairColor: "brown", children: "0" };

assertObjectsEqual(sally, susanne);
assertObjectsEqual(sally, bob);
assertObjectsEqual(sally, jeremy);

module.exports = assertObjectsEqual