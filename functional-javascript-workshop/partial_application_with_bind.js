var slice = Array.prototype.slice

function logger() {
  var namespace = slice.call(arguments)[0]
  return console.log.bind(null, namespace)
}

//var info = logger('INFO:')
//info('this is information','even more information')

module.exports = logger

/*

  module.exports = function(namespace) {
    return console.log.bind(console, namespace)
  }

*/

