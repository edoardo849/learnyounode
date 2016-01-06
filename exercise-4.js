var fs = require('fs');

fs.readFile(process.argv[2], 'utf8',function(err, fileContents){
    var lines = fileContents.split("\n").length -1;
    console.log(lines);
});
