function Spy(target, method) {
  var spy = { 
    count: 0 
  }

  var oldFunction = target[method]

  target[method] = function() {
    spy.count++
    return oldFunction.apply(target, arguments)
  }

  return spy
}

/*
var spy = Spy(console, 'error')

console.error('calling console.error')
console.error('calling console.error')
console.error('calling console.error')

console.log(spy.count)
*/

module.exports = Spy

/*

 function Spy(target, method) {
    var originalFunction = target[method]
  
    // use an object so we can pass by reference, not value
    // i.e. we can return result, but update count from this scope
    var result = {
      count: 0
    }
  
    // replace method with spy method
    target[method] = function() {
      result.count++ // track function was called
      return originalFunction.apply(this, arguments) // invoke original function
    }
  
    return result
  }
  
  module.exports = Spy

*/
