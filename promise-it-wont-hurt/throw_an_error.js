var q = require('q')
var badJSON = process.argv[2]

function parsePromised() {
  var defer = q.defer()

  try {
    JSON.parse(badJSON)
    defer.resolve('ok')
  } catch(e) {
    defer.reject(e)
  }

  return defer.promise
}

parsePromised()
  .then(console.log)
  .then(null, console.log)


