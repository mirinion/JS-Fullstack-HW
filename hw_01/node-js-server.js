const http = require('http');
const fs = require('fs');

const PORT = 3000;

fs.readFile('./index.html', function (err, html) {
    if  (err) throw err;

    http.createServer((req, res) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end();
    }).listen(PORT);
});

