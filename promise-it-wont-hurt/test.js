var q = require('q')
var fs = require('fs')

function promisifyReadFile() {
  return q.nfapply(fs.readFile, ["myFile.txt", "utf-8"])
}

promisifyReadFile()
  .then(console.log)
  .then(null, console.error)

function fs_readFile(file, encoding) {
  var deferred = q.defer()
  fs.readFile(file, encoding, function(err, data) {
    if (err) deferred.reject(err)
    else deferred.resolve(data)
  })
  return deferred.promise
}

fs_readFile('myFile.txt', 'utf-8')
  .then(console.log)
  .then(null, console.error)

function nerfReadFile() {
  var readFile = q.denodeify(fs.readFile)
  return readFile('myFile.txt', 'utf-8')
}

nerfReadFile()
  .then(console.log, console.error)


