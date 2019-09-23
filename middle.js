const eqArrays = require('./eqArrays'); 
// const assertArraysEqual = require('./assertArraysEqual'); 




const middle = function(arr) {
  var output = []
  // for (i = 0; i < arr.length; i++) { 
    if (arr.length <= 2) {  
      return output 
    } 
    if (arr.length % 2 === 0) {
     output.push(arr[arr.length / 2])
      output.push(arr[arr.length / 2 -  1])
    }
    else if (arr.length % 2 !== 0) {
      output.push(arr[(arr.length - 1) / 2])
    
    }
  // } 
  return output 
}

// loop trough all array length 
// if array length 1 or 2 return []
// if else count array length 
// if length % 2 = 0 even
// divide 2 take that number position []
// return postion [] 
// if length % 3 = 0 odd
//divide by 2 take [] & [+1] at that place
//return positions []  
//return answer 

module.exports = middle; 





