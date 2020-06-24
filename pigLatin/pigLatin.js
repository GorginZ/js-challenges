function toPigLatin(phrase) {
    let words = phrase.split(" ")
    let newWord = ""
    let res = []
    
    if (phrase.length < 1) {
      return ""
    }
    words.forEach(function(index) {
      let first = index.charAt(0);
    
      newWord = index.replace(first,"")+ first + "ay"
      res.push(newWord)
     });
     return res.join(" ")
    }
    
    console.log(toPigLatin("the quick brown fox"))
    
    module.exports = {
      toPigLatin,
    };