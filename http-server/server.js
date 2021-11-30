var http = require('http');
var url = require('url');

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    var path = url.parse(req.url, true).pathname;
    switch (path) {
        case '/chunked':
            res.write("chunk1");
            res.write("chunk2");
            res.write("chunk3");
            res.write("chunk4");
            res.write("chunk5");
            res.end();
            break;
        case '/notChunked':
            var q = url.parse(req.url, true).query;
            var data = q.data;
            res.end(data);
            break;
        case '/noContent':
            res.end();
            break;
    }
}).listen(8800);