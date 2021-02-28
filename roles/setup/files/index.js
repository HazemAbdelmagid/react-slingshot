var http = require("http");

const hostname = '0.0.0.0';
const port = 3000;

var server = http.createServer(function (req, res) {
res.writeHead(200);
res.end("Hello world!");
});
server.listen(3000);