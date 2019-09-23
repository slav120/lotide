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



module.exports = assertArraysEqual; 