var http = require('http')

var server = http.createServer(function (request, response) {
    if (request.url === '/') {
        response.end(`<h1>Halaman Utama</h1>`)
    } else if(request.url == '/katalog') {
        response.end(`<h1>Halaman Katalog</h1>`)
    } else if(request.url == '/kontak') {
        response.end(`<h1>Halaman Kontak</h1>`)
    } else {
        // halaman tidak ditemukan
        response.statusCode = 404;
        response.end(`<h1>404 : halaman tidak ditemukan</h1>`)
    }
})

server.listen(3000)