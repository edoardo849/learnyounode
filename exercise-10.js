var net= require('net');
var date= require('dateformat');

var server  = net.createServer(function(socket){
    var date = dateFormat(new Date(), "yyyy-mm-dd HH:MM\n");
    socket.end(date);
});
server.listen(process.argv[2]);
