var http = require('http')
var url = require('url')
var qs = require('querystring')

var server = http.createServer(function (request, response) {
        var query = url.parse(request.url).query;
        var parameters = qs.parse(query)

        response.writeHead(200, {'Content-Type' : 'text/html'})
        response.write(`<strong>Nama Path : </strong> ${url.parse(request.url).pathname}
        

        `)
        response.write(`
        
        <strong>Daftar Parameter : </strong>
        
        `)
        for (var property in parameters) {
           response.write(`property : ${parameters[property]} 
           
           `)
        }

        response.end()
});

server.listen(3000);