var http = require('http')
var pug = require('pug')
var qs = require('querystring')

var server = http.createServer(function (request, response) {
    if (request.url == '/') {
        switch (request.method) {
            case 'GET':
                var template = pug.renderFile('./pemilihan-form.pug');
                response.end(template);
                break;
            
            case 'POST':
                var body = '';

                request.on('data', function (data) {
                    body += data;
                })

                request.on('end', function () {
                    var form = qs.parse(body);
                    var template = pug.renderFile('./pemilihan.pug', {bilangan : form['bilangan']})
                    response.end(template);
                })
               
                break;
        
            default:
                response.end('Metode yang diguankan tidak dikenali')
        }
    }
})
server.listen(3000)