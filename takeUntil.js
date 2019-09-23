const takeUntil = function(array, callback) {
  var results = []
for (i = 0; i < array.length && callback(array[i]) === false; i++) {
  results.push(array[i])  
  
  
}
  return results   
}

module.exports = takeUntil; 