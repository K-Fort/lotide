const without = function(source, itemsToRemove) {
  let result = [...source];
  
    for (let i = 0; i < itemsToRemove.length; i++) {
      for (let j = 0; j < source.length; j++) {
        if (itemsToRemove[i] === source[j]) {
          result.splice(j, 1)
        }
      }
    } return result;
}

module.exports = without

