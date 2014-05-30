var map = Array.prototype.map

function doubleAll(arr) {
  return arr.map(function(arg) {
    return arg * 2
  })
}

module.exports = doubleAll

/*

  module.exports = function doubleAll(numbers) {
    return numbers.map(function double(num) {
      return num * 2
    })
  }

*/
