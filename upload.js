var http = require('http')
var fs = require('fs')
var formidable = require('formidable')
var mv = require('mv');

var html = fs.readFileSync('./uploadform.html');
var server = http.createServer(function (request, response) {
    response.writeHead(200,{'Content-Type' : 'text/html'});
    if (request.method === 'GET') {
        response.end(html);
    } else if(request.method === 'POST'){
        //Membuat objek dari kelas formidable.Incomingform
        var form = new formidable.IncomingForm();

        //memanggil parse
        form.parse(request, function (err, fields, files) {
            // mengambil nama file temporari
            var tempFile = files.userfile.path;

            //menentukan tujuan file 
            var destFile = './uploads/'+files.userfile.name;

            //memindahkan file temporari ke tujuan upload 
            mv(tempFile, destFile, function (error) {
                if (error) {
                    response.end('Proses uload gagal '); throw error;
                }
                response.end('Proses Upload berhasil')
            })
        });
    }
});
server.listen(3000);
