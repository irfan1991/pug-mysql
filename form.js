var http = require('http')
var qs = require('querystring')
var server = http.createServer(function (request, response) {
    response.writeHead(200,{'Content-Type' : 'text/html'})

    if (request.url == '/') {
        switch (request.method) {
            case 'GET':
                response.end(`
                <h2>Demo Penanganan FORM</h2>
                <form action="/" method="POST">
                    Nama : 
                    <input type="text" name="nama" />
                    <br/>
                    Email : 
                    <input type="email" name="email" />
                    <br />
                    <br />
                    <input type="submit" name="btnSubmit" value="Kirim" /> 
                </form>
                `)
                break;
            
            case 'POST':
                var body = '';

                request.on('data', function (data) {
                    body += data
                })

                request.on('end', function () {
                    var form = qs.parse(body)
                    response.end(`Data dikirim :<br />
                    Nama : ${form['nama']} <br />
                    Email : ${form['email']}
                    `)
                })
                break;
        
            default:
                response.end('Metode pengiriman tidak dikenali')
        }
    }
});
server.listen(3000)