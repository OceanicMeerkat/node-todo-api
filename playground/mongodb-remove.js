const {
    ObjectID
} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/model/todo');
const {User} = require('./../server/model/user');

/*
Todo.remove({}).then((res) => {
    console.log(res);
});

Todo.findOneAndRemove({_id: "5bf58eb7b7cff62424dbf660"}).then((todo) => {
    console.log(todo);
});

Todo.findByIdAndRemove("5bf58ebfb7cff62424dbf661").then((todo) => {
    console.log(todo);
});

*/