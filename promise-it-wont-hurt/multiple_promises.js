var q = require('q')
var defer1 = q.defer()
var defer2 = q.defer()
var util = require('util')

function all(promises) {
  var internalPromise = q.defer()
  var counter = 0

  promises[0]
    .then(++counter)
    .then(console.log)


  promises[1]
    .then(++counter)
    .then(console.log)

  if (counter == 2) {
    internalPromise.resolve()
  }

  return internalPromise.promise
}

all([defer1.promise, defer2.promise])
  .then()

setTimeout(function() {
  defer1.resolve('PROMISES')
  defer2.resolve('FTW')
}, 1000)
