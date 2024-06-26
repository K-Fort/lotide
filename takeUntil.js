

const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

//The function will return a "slice of the array with elements taken from the beginning." It should keep going until the callback/ returns a truthy value.


// need an empty array to store values
// need to loop through array
// need an if statement

const takeUntil = function(array, callback) {
  const results = [];
  for (let i = 0; i < array.length; i++) {
    //callback function declares to stop looping if it is truthy
    if (callback(array[i])) {
        break;
    }
    results.push(array[i])
  }
  return results;
}

//Expected Input
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// x => x < 0 is callback function, it will loop until x < 0 (when it is truthy)
const results1 = takeUntil(data1, x => x < 0); 
// will store all values until callback function is truthy (at -1)
console.log(results1); // expects [ 1, 2, 5, 7, 2 ]

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);


assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]); 
assertArraysEqual(results2, ["I've", "been", "to", "Hollywood", "I've", "been", "to", "Redwood"]); 




