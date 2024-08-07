//Implement the function findKeyByValue which takes in an object and a value. It should scan the object and return the first key which contains the given value. If no key with that given value is found, then it should return undefined.

//Consider using the Object.keys function to help you easily search through all the object keys.

//Consider using for...of to loop over the keys returned by Object.keys.


const findKeyByValue = function(object, value) {
 const objectKeys = Object.keys(object)

  for (const key of objectKeys) {
   
    if (object[key] === value) {
      return key;
    } 
  }
}

module.exports = findKeyByValue