var slice = Array.prototype.slice

function logger() {
  var namespace = slice.call(arguments)[0]
  return function() {
    console.log.apply(null, [namespace, slice.call(arguments).join(" ")])
  }
}

/*
var info = logger('INFO:')
info('bob')
info('splat','gore','fred')

var warn = logger('WARN:')
warn('ur not as think as u dumb u r')
*/

module.exports = logger

/*

  var slice = Array.prototype.slice
  
  function logger(namespace) {
    return function() {
      console.log.apply(console, [namespace].concat(slice.call(arguments)))
    }
  }
  
  module.exports = logger

*/
