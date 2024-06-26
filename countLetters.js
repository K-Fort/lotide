const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(sentence) {
  let result = {};

  for (const letter of sentence) {
           
        if (letter === ' ') {
          continue;
        }

        if (!result[letter]) {
          result[letter] = 0;
          
        } result[letter]++
        
        } return result;    
  }



  const result1 = countLetters('LHL');
  assertEqual(result1['L'], 2);
  assertEqual(result1['H'], 1);