var http = require('http')
var pug = require('pug')

var server = http.createServer(function (request, response ) {
    var data = {data : ['Javascript','NodeJS','Android','Express','Sails.JS'] };
    var template =pug.renderFile('./variable.pug', data);

    response.end(template);
});
server.listen(3000);