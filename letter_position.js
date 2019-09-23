const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
let currentLetter = sentence[i] 
 if (results[currentLetter]) {
   results[currentLetter].push(i)
 }
 else { results[currentLetter] = [i]

 }
  }
return results
};

// run loop trough every letter in sentence  
// create new array for every letter 
// look at letter position and return what position 
// return results 
 
module.exports = letterPositions; 