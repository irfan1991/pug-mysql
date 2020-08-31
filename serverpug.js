var http = require('http')
var pug = require('pug')

var server = http.createServer(function (request, response) {
    var data = {
        nama : 'Davva Wijayanto',
        daftar : ['satu','dua','tiga']
    };
    var template = pug.renderFile('./iterasi.pug',data);
    response.end(template);
})
server.listen(3000);