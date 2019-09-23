
function without(a, b) {
  let result = []
  for (let i = 0; i < a.length; i++){
   var isInB = false
    for (let j = 0; j < b.length; j++){
      if (a[i] === b[j]){
        isInB = true 
        break;
      }
    }
    if (isInB === false ){
      result.push(a[i])
    }
  }
return result 
}

module.exports = without; 