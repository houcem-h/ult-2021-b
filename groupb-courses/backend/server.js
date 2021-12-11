const http = require('http');

const server = http.createServer((req, res) => {
    res.end('This is the new server response !');
});

server.listen(process.env.PORT || 3000);
