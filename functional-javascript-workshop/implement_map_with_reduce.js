var reduce = Array.prototype.reduce

function arrayMap(arr, fn) {
  var stash = []
  var result = arr.reduce(function(prev,curr,index,array) {
    stash.push(fn(curr))
  }, 0)
  return stash
}

module.exports = arrayMap

/*
var nums = [1,2,3,4,5]

var output = arrayMap(nums, double)

console.log(output) // 2,4,6,8,10
*/


/*

  module.exports = function map(arr, fn) {
    return arr.reduce(function(acc, item, index, arr) {
      return acc.concat(fn(item, index, arr))
    }, [])
  }

*/
