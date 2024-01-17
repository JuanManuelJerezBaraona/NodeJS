const http = require('http');

http.createServer((req, res) => {

    res.write('Hola Mundo');

}).listen(3000);
