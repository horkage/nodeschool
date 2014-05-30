function duckCount() {
  var map = Array.prototype.map;

  var results = map.call(arguments, function(value,index) {
    return value
  }).filter(function(arg) {
    return Object.prototype.hasOwnProperty.call(arg, 'quack')
  })

  return results.length

}
module.exports = duckCount

/*
  function duckCount() {
    return Array.prototype.slice.call(arguments).filter(function(obj) {
      return Object.prototype.hasOwnProperty.call(obj, 'quack')
    }).length
  }
  
  module.exports = duckCount
*/
