const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(sentence) {
  result = {};

  for (const letter of sentence) {
    let result = {}
      for (const letter of sentence) {
        if (letter === ' ') {
          continue;
        }

        if (!result[letter]) {
          result[letter] = 0;
          
        } result[letter]++
      }
      return result;
        }
  }




console.log(countLetters("LHL"))
console.log(countLetters("Lighthouse Labs"))