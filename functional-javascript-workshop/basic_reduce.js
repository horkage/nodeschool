function countWords(wordList) {
  returnObj = {}
  return wordList.reduce(function(prev, curr, index, array) {
    if (index == 1) returnObj[prev] = 1 
    returnObj[curr] ? returnObj[curr]++ : returnObj[curr] = 1
    return returnObj
  });
}

module.exports = countWords

//var words = ['larry','curly','moe','shemp','larry','shemp','shemp','moe']
//var reduced = countWords(words)
//console.log(reduced)

/*

  function countWords(arr) {
    return arr.reduce(function(countMap, word) {
      countMap[word] = ++countMap[word] || 1 // increment or initialize to 1
      return countMap
    }, {}) // second argument to reduce initialises countMap to {}
  }
  
  module.exports = countWords

*/
