const assertEqual = require("./assertEqual");

//The function should report back how many instances of each string were found in the allItems array of strings.
const countOnly = function (allItems, itemsToCount) {
  const results = {};

  // We will loop through the values of allItems stored in its key, item will now store all the keys of allItems
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

module.exports = countOnly