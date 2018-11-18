const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/model/todo');
const {User} = require('./../server/model/user');
const {ObjectID} = require('mongodb');

var userID = "5beee2c1a84de9d40633cf5b";

if (!ObjectID.isValid(userID)){
    console.log('ID not Valid');
}

User.findById(userID).then((user) => {
    if (!user) {
       return console.log("User not found");
    } else {
        console.log(user);
    }
}, (e) => {
    console.log(e)
});



/*
var id = "5bf0405a0f894998061e8a5c";

if (!ObjectID.isValid(id)){
    console.log('ID not Valid');
}


Todo.find({
    _id: id
}).then((todos) => {
    
    console.log('Todos : ', todos);
});

Todo.findOne({
    _id: id
}).then((todo) => {
    if(!todo){
        console.log("No ID was found");
    }else{
        console.log('Todo : ', todo);
    }
});

Todo.findById(id).then((todo) => {
    if(!todo){
        console.log("No ID was found");
    }else{
        console.log('Todo : ', todo);
    }
}).catch((e) => console.log(e));

*/