

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


  module.exports = countLetters