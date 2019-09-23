var flatten = function(arr, output = []) { 
  for (let i = 0; i < arr.length; i++) { 
    if ( Array.isArray(arr[i])) {
      flatten(arr[i],output)
    }
    else {
      output.push(arr[i])
    } 
    
  }
  return output 
}

module.exports = flatten; 


