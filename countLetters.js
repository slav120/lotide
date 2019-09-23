function count(string) {
  return string.split("").reduce((a, letter) => {
    var currentCount = a[letter];
    if (currentCount) { 
      currentCount = currentCount + 1; // If previously counted + 1
    } else {
      currentCount = 1; // Else initialize with first occurence.
    }
    
    a[letter] = currentCount; //Store the new count.
    
    return a;
  }, {});
}

module.exports = count; 