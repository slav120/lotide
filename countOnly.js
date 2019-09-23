const countOnly = function(allItems, itemsToCount) {
  // Look over itemsCount first 
  const results = {};

  for (let item in itemsToCount) {

    if (itemsToCount[item] === true) {
      results[item] = 0;

      for (let letter of allItems) {
        if (letter == item){
          results[letter] += 1;
        }
      }
    } 
  }
  return results
}

module.exports = countOnly; 

// Look over itemsCount first 
// if itemsCount = true verify with allItems 
// check allItems 
// keep a number count  