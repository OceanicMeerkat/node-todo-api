var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

var dbPath = process.env.PORT !== "3000" ? "mongodb://paichayon:P50040115CC#@ds157503.mlab.com:57503/todos" : process.env.MONGODB_URI ;


mongoose.connect(dbPath);
console.log(`DB Location : ${dbPath}`);
module.exports = { mongoose };


// mongodb://<dbuser>:<dbpassword>@ds157503.mlab.com:57503/todos