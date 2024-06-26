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

// Implement middle which will take in an array and return the middle-most element(s) of the given array.


const middle = function(arr) {
  let result = [];
  if (arr.length < 3) {
    return result; 
  } else if (arr.length % 2 !== 0) {
    // If the array is odd, we will push the value that is found in the array after we have reduced the array by 1 to make it even and then divide it by two to find the middle
    result.push(arr[(arr.length - 1) / 2]);
  } else {
    // If the array is  even, we will have two middle values. One will be the result of the array after we have divided the array by 2 minus 1, so that the second middle value is pushed first and thus will appear last in our new array and the other will be the array once the array.length is divided by two, giving us the first middle element.
    result.push(arr[arr.length / 2 - 1]);
    result.push(arr[arr.length / 2]);
  }
  return result;
}

console.log(middle([1])); // => []
console.log(middle([1, 2])); // => []

console.log(middle([1, 2, 3])); // => [2]
console.log(middle([1, 2, 3, 4, 5])); // => [3]

console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]
