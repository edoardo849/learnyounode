var http = require('http');
var bl = require('bl');

http.get(process.argv[2], function(response){
    // Collect ALL data from the server
    response.setEncoding('utf8');
    response.pipe(bl(function(err, data){
        if(err)
            return console.log(err);
        data = data.toString();
        console.log(data.length);
        console.log(data);
    }));
});
