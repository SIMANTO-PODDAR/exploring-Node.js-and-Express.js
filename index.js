const http = require('http');
const server = http.createServer((req, res) => {

    if (req.url === '/') {
        res.writeHead(200, { 'content-type': 'text/plain' })
        res.end('Hello Node.js');
    }

    if (req.url === '/sp') {
        res.writeHead(200, { 'content-type': 'text/plain' })
        res.end('Hello Simanto Poddar');
    }

});

server.listen(5000, () => {
    console.log('Node app listening on port 5000')
})