var q = require('q')
var badJSON = process.argv[2]

q.fcall(function() {
  var defer = q.defer()

  try {
    JSON.parse(badJSON)
    defer.resolve('ok')
  } catch(e) {
    defer.reject(e)
  }

  return defer.promise
})
  .then(console.log)
  .then(null, console.log)
