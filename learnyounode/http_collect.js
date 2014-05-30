var http = require('http')
var concat = require('concat-stream')
var fs = require('fs')

http.get(process.argv[2], function(response) {
  response.setEncoding('utf8')
  var write = concat(function(data) {
    console.log(data.length)
    console.log(data)
  })
  response.pipe(write)
})


/*

    var http = require('http')
    var bl = require('bl')
    
    http.get(process.argv[2], function (response) {
      response.pipe(bl(function (err, data) {
        if (err)
          return console.error(err)
        data = data.toString()
        console.log(data.length)
        console.log(data)
      }))  
    })

*/
