const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};

//Implement the function findKey which takes in an object and a callback. It should scan the object and return the first key for which the callback returns a truthy value. If no key is found, then it should return undefined.

const findKey = (object, callback) => {
//looping through the keys of object
  for (const key in object) {
// if you have a key of object, we evaluate it according to the callback function
    if (callback(object[key])) {
 // return the key that satisfies the conditions of the callback function     
      return key
    }  // otherwise, return undefined
  }  return undefined
}




 result = findKey(
  {
    "Blue Hill": { stars: 1 },
    Akaleri: { stars: 3 },
    noma: { stars: 2 },
    elBulli: { stars: 3 },
    Ora: { stars: 2 },
    Akelarre: { stars: 3 },
  },
  (x) => x.stars === 2 // callback function, where each key is evaluated to see if its key-value pair of stars is 2
); 

// the result should be noma
assertEqual(result, "noma");


result = findKey(
  {
    "Blue Hill": { stars: 1 },
    Akaleri: { stars: 3 },
    noma: { stars: 2 },
    elBulli: { stars: 3 },
    Ora: { stars: 2 },
    Akelarre: { stars: 3 },
  },
  (x) => x.stars === 4
);
assertEqual(result, undefined);

result = findKey({}, (x) => x.stars === 2);
assertEqual(result, undefined);


module.exports = findKey
