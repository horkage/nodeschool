var strftime = require('strftime')
var net = require('net')

var port = +process.argv[2]
var now = (new Date).valueOf();  //unix epoch for strftime to consume

var server = net.createServer(function whenClientConnects(socket) {
  socket.write(strftime('%F %H:%M', new Date(now)))
  socket.end('\n')
})
server.listen(port, function() {
  console.log('server bound to port: ' + port)
})


/*

    var net = require('net')
    
    function zeroFill(i) {
      return (i < 10 ? '0' : '') + i
    }
    
    function now () {
      var d = new Date()
      return d.getFullYear() + '-'
        + zeroFill(d.getMonth() + 1) + '-'
        + zeroFill(d.getDate()) + ' '
        + zeroFill(d.getHours()) + ':'
        + zeroFill(d.getMinutes())
    }
    
    var server = net.createServer(function (socket) {
      socket.end(now() + '\n')
    })
    
    server.listen(Number(process.argv[2]))

*/
