var http = require('http'),
    port = process.argv[2],
    filePath = process.argv[3],
    fs = require('fs');

var server = http.createServer(function(req, res){
    res.writeHead(200,{'content-type':'text/plain'});
    fs.createReadStream(filePath).pipe(res);
});
server.listen(Number(port));
