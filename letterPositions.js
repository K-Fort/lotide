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

const letterPositions = function(sentence) {
  let result = {}

  for (let i = 0; i < sentence.length; i++) {
    const letter = sentence[i]
    if (letter === ' ') {
      continue;
    }
    if (!result[letter]) {
      result[letter] = []
    }
    result[letter].push(i)
  }

  return result
}

  console.log(letterPositions("Hello"))
  assertArraysEqual(letterPositions("hello").e, [1]);
