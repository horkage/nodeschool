var http = require('http')
var port = +process.argv[2]
var url = require('url')


var server = http.createServer(function(request, response) {
  var urlObject = url.parse(request.url, true)

  response.writeHead(200, { 'Content-Type' : 'application/json' })

  var param = urlObject.query.iso

  if (urlObject.pathname == '/api/parsetime') {
    var parsed_time = new Date(param)
    var hours = parsed_time.getHours();
    var minutes = parsed_time.getMinutes();
    var seconds = parsed_time.getSeconds();
    response.end(JSON.stringify({
      'hour' : hours,
      'minute' : minutes,
      'second' : seconds
    }))
  } else if (urlObject.pathname == '/api/unixtime') {
    var now = (new Date(param)).valueOf();
    response.end(JSON.stringify({
      'unixtime' : now
    }))
  }
})
server.listen(port)

/*

    var http = require('http')
    var url = require('url')
    
    function parsetime (time) {
      return {
        hour: time.getHours(),
        minute: time.getMinutes(),
        second: time.getSeconds()
      }
    }
    
    function unixtime (time) {
      return { unixtime : time.getTime() }
    }
    
    var server = http.createServer(function (req, res) {
      var parsedUrl = url.parse(req.url, true)
      var time = new Date(parsedUrl.query.iso)
      var result
    
      if (/^\/api\/parsetime/.test(req.url))
        result = parsetime(time)
      else if (/^\/api\/unixtime/.test(req.url))
        result = unixtime(time)
    
      if (result) {
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(result))
      } else {
        res.writeHead(404)
        res.end()
      }
    })
    server.listen(Number(process.argv[2]))

*/
