const eqObjects = function(object1, object2) { 
  if(Object.keys(object1).length === Object.keys(object2).length) {
    for(let key in object1) {
      console.log(key)
      if (object1[key] !== object2[key]) {
        return false
      }
    }
    return true
  } else { 
    return false 
  } 
}

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
if (eqObjects(actual, expected))  
console.log('✅✅✅ Assertion Passed: ${[actual]} === ${expected}')

else 
console.log('🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}') 
}

module.exports = assertObjectsEqual; 
