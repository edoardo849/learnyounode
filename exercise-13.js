var http = require('http'),
    url = require('url'),
    dateFormat = require('dateformat');


function getParseTime(time) {
    return {
        'hour': Number(dateFormat(time,"HH")),
        'minute': Number(dateFormat(time, "MM")),
        'second': Number(dateFormat(time,"ss"))
    };
}

function getUnixTime(time) {
    return {
        'unixtime': Number(time.getTime())
    };
}

var server = http.createServer(function(req, res) {

    var reqUrl = url.parse(req.url, true);
    var date = new Date(reqUrl.query.iso);
    var response;

    if(reqUrl.pathname === '/api/parsetime'){
        response = getParseTime(date);
    } else if (reqUrl.pathname === '/api/unixtime') {
        response = getUnixTime(date);
    }

    if (response){
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(response));
    }else {
        res.writeHead(404);
        res.end();
    }
});
server.listen(Number(process.argv[2]));
