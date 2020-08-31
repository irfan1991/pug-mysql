var http = require('http')
var pug = require('pug')
var qs = require('querystring')

var server = http.createServer(function (request, response) {
    response.writeHead(200,{'Content-Type' : 'text/html'})
    var data = [
        ['PROD1','Pensil',6000],
        ['PROD2','Penghapus',9000],
        ['PROD3','Stabilo',6800],
    ]

    var template = pug.renderFile('./iterasi.pug',{produk : data})
    response.end(template)
})
server.listen(3000)