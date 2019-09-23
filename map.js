const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results; 
}

const results1 = map(words, word => word[0]);
console.log(results1);// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
if (actual === expected) {
  console.log(`Assertion Passed: ${actual} = ${expected}`)
}
else if (actual !== expected){
  console.log(`Assertion Failed: ${actual} != ${expected}`)
}
};

function eqArrays(a, b) {
  if (a === b) return console.log("This statement is true");
  if (a == null || b == null) return false;
  if (a.length != b.length) return false;

  for (var i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}

 function assertArraysEqual(a, b) {
   console.log(eqArrays(a, b))
 }  

assertArraysEqual([1, 2], [1, 2])

//////////  IMPLEMENT MAP FUNCTION 

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);

const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results; 
}

const results1 = map(words, word => word[0]);
console.log(results1);


module.exports = map; 