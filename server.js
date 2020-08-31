var http = require('http')

// http.createServer(function (request,response) {
//     response.writeHead(200,{'Content-Type' : 'text/html'})
//     response.end(`<h1>Hello World</h1>`)
// }).listen(3000);

function myFunc(request,response) {
    response.writeHead(200,{'Content-Type' : 'text/html'})
    response.end(`<h1>Hello World</h1>`)
}

http.createServer(myFunc).listen(3000)
console.log('Server aktif di  localhost:3000')