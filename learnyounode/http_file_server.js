var http = require('http')
var fs = require('fs')

var port = +process.argv[2]
var file = process.argv[3]

var httpServer = http.createServer(function requestHandler(request, response) {
  var readStream = fs.createReadStream(file)  
  readStream.on('open', function() {
    readStream.pipe(response)
  })

  readStream.on('error', function(err) {
    response.end(err)
  })
})

httpServer.listen(port, function() {
  console.log('bound http server to port ' + port)
})

/*

    var http = require('http')
    var fs = require('fs')
    
    var server = http.createServer(function (req, res) {
      res.writeHead(200, { 'content-type': 'text/plain' })
    
      fs.createReadStream(process.argv[3]).pipe(res)
    })
    
    server.listen(Number(process.argv[2]))

*/
