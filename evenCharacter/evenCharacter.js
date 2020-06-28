function evenCharacters(string) {
    let myArr = string.split("")
    let newArr = []
    if (string.length >=100 || string.length <2) {
      return "invalid string"
    }
  for (var i = 0; i < myArr.length; i++) {
    if(i%2 > 0) {
      newArr.push(myArr[i]);
    };
   }
    return newArr
      }
  
  console.log(evenCharacters("abcdef"))
  module.exports = {
    evenCharacters
  };