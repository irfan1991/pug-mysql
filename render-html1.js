var http = require('http')
var fs = require('fs')

var html = fs.readFileSync('./index.html')

var server = http.createServer(function (resquest, response) {
    response.writeHead(200,{'Content-Type' : 'text/html'})
    response.end(html)
})
server.listen(3000)