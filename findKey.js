

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


module.exports = findKey
