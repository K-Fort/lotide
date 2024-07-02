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


  module.exports = letterPositions
