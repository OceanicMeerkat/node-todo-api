var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

var dbPath = process.env.PORT ? "mongodb://paichayon:P50040115CC#@ds157503.mlab.com:57503/todos" : "mongodb://127.0.0.1:27017/TodoApp"

mongoose.connect(dbPath);
console.log(`DB Location : ${dbPath}`);

module.exports = { mongoose };


// mongodb://<dbuser>:<dbpassword>@ds157503.mlab.com:57503/todos