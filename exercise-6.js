var module = require('./exercise-6_module');

module(process.argv[2], process.argv[3], function(err, list) {
    if (err) {
        return console.log('Error!', err);
    }

    list.forEach(function(fileName) {
        console.log(fileName);
    });


});
