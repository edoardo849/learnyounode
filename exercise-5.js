var fs = require('fs');
var path = require('path');

var file = process.argv[2];
var ext = '.'+process.argv[3];

fs.readdir(file, function(err,list){

    for (var i = 0; i < list.length; i++){
        var fileName = list[i];
        if(path.extname(fileName) === ext){
            console.log(fileName);
        }
    }
});
