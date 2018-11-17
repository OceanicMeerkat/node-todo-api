var express = require('express');
var bodyParser = require('body-parser');
var {mongoose} = require('./db/mongoose');
var {Todo} = require('./model/todo');
var {User} = require('./model/user');

var app = express();



app.listen(3000, () => {
    console.log("Server run on port 3000");
});
