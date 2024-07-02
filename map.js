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

const words = ["ground", "control", "to", "major", "tom"];
const numbers = [1.25, 2.01, 3.46, 4.99, -1.33]
const Greetings = ["Hello", "Bonjour", "Buongiorno"]


const map = function (array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const results1 = map(words, (word) => word[0]);
console.log(results1);

const results2 = map(numbers, (number) => Math.round(number));
console.log(results2);

const result3 = map(Greetings, (greeting) => greeting.toUpperCase());
console.log(result3);

assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']); 
assertArraysEqual(results2, [1, 2, 3, 5, -1]); 
assertArraysEqual(result3, ['HELLO', 'BONJOUR', 'CIAO']); 

module.exports = map