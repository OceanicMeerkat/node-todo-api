var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect("mongodb://paichayon:P50040115CC#@ds157503.mlab.com:57503/todos" || 'mongodb://127.0.0.1:27017/TodoApp');

module.exports = { mongoose };


// mongodb://<dbuser>:<dbpassword>@ds157503.mlab.com:57503/todos