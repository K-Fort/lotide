const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};

//The function should report back how many instances of each string were found in the allItems array of strings.
const countOnly = function (allItems, itemsToCount) {
  const results = {};

  // We will loop through the keys of allItems, item will now store all the keys of allItems
  for (const item of allItems) {
  // We will check if itemsToCount includes the items in allItems
    if (itemsToCount[item]) {
  // set a property with that string key to:
  // the value that was already there (or zero if nothing there) with 1 added to it
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  }
  return results;
};

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe",
];

const result1 = countOnly(firstNames, {
  Jason: true,
  Karima: true,
  Fang: true,
  Agouhanna: false,
});

console.log(assertEqual(result1["Jason"], 1));
console.log(assertEqual(result1["Karima"], undefined));
console.log(assertEqual(result1["Fang"], 2));
console.log(assertEqual(result1["Agouhanna"], undefined));