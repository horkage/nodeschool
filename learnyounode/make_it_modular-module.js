var fs = require('fs')
  , path = require('path')

module.exports = function(dir, ext, callback) {
  fs.readdir(dir, function whenDirectoryIsRead(err,files) {
    if (err) return callback(err)
    var fileArray = []
    files.forEach(function(file) {
      if (path.extname(file) === '.' + ext) {
        fileArray.push(file)
      }
    })
    callback(null,fileArray)
  })
}

/*

    var fs = require('fs')
    var path = require('path')
    
    module.exports = function (dir, filterStr, callback) {
    
      fs.readdir(dir, function (err, list) {
        if (err)
          return callback(err)
    
        list = list.filter(function (file) {
          return path.extname(file) === '.' + filterStr
        })
    
        callback(null, list)
      })
    }

*/
