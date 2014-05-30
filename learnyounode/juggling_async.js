var http = require('http')
//var concat = require('concat-stream')
var bl = require('bl')

var urls = process.argv.slice(2)
var writeBuffers = []
var callbackCount = 0

urls.forEach(function(url) {
  writeBuffers[url] = new bl()
  http.get(url, function(response) {
    response.setEncoding('utf8')


    response.on('data', function(data_chunk) {
      writeBuffers[url].append(data_chunk) 
    })

    response.on('end', function() {
      callbackCount++

      if (callbackCount >= urls.length) {
        urls.forEach(function(orderedUrl) {
          writeBuffers[orderedUrl].pipe(bl(function(err,data) {
            console.log(data.toString())
          }))
        })
      }
    })


  })
})

/*
    var http = require('http')
    var bl = require('bl')
    var results = []
    var count = 0
    
    function printResults () {
      for (var i = 0; i < 3; i++)
        console.log(results[i])
    }
    
    function httpGet (index) {
      http.get(process.argv[2 + index], function (response) {
        response.pipe(bl(function (err, data) {
          if (err)
            return console.error(data)
    
          results[index] = data.toString()
          count++
    
          if (count == 3) // yay! we are the last one!
            printResults()
        }))
      })
    }
    
    for (var i = 0; i < 3; i++)
      httpGet(i)
*/
