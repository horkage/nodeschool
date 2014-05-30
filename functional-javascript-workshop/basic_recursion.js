var util = require('util')

var result = {}
var index = 0;
function reduce(arr, fn, init) {
  var prev = init;
  var curr = arr[0];

  if (arr.length == 0) {
    return init
  } else {
    init = fn( prev, curr);
    return reduce(arr.slice(1), fn, init)
  }
}

module.exports = reduce

/*

  function reduce(arr, fn, initial) {
    return (function reduceOne(index, value) {
      if (index > arr.length - 1) return value // end condition
      return reduceOne(index + 1, fn(value, arr[index], index, arr)) // calculate & pass values to next step
    })(0, initial) // IIFE. kick off recursion with initial values
  }
  
  module.exports = reduce
*/
