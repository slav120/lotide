
const findKey = function(object, callback) {
  var result = "" 
  for (var element in object){
  //console.log(object[element] )
  if (callback(object[element])=== true){  return element}
 
 //for (i = 0; i < stars.length; i++){
 //if (number(stars[i]) === true){
  //console.log(stars[i])}
  
 }
 
}

module.exports = findKey; 