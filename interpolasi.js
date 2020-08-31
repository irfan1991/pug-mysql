var http = require('http')
var pug = require('pug')
var qs = require('querystring')

var server =  http.createServer(function (request, response) {
    response.writeHead(200,{'Content-Type' : 'text/html'});

    if (request.url == '/') {
        switch (request.method) {
            case 'GET':
                var template = pug.renderFile('interpolasi-form.pug');
                response.end(template);
                break;

            case 'POST':
                console.log('test');
                var body = '';

                request.on('data', function (data) {
                    body += data
                });

                request.on('end', function () {
                    var form = qs.parse(body);
                    var template = pug.renderFile('./interpolasi.pug', {nama : form['nama']});
                    response.end(template);
                });
                break;
        
            default:
                response.end("Metode Pengiriman tidak dikenal");
        }
    }
})
server.listen(3000)