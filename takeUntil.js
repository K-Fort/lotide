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

module.exports = takeUntil


