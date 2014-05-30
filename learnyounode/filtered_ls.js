var fs = require('fs')
  , path = require('path')
  , dir
  , ext

dir = process.argv[2]
ext = '.' + process.argv[3]

fs.readdir(dir, function whenDirectoryIsRead(err,files) {
  for (var i = 0; i < files.length; i++) {
    if (path.extname(files[i]) == ext) {
      console.log(files[i])
    }
  }
})

/*

    var fs = require('fs')
    var path = require('path')
    
    fs.readdir(process.argv[2], function (err, list) {
      list.forEach(function (file) {
        if (path.extname(file) === '.' + process.argv[3])
          console.log(file)
      })
    })

*/
