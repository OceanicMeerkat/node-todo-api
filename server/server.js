
require('./config/config');

const express = require('express');
const bodyParser = require('body-parser');
const {
    mongoose
} = require('./db/mongoose');
const {
    Todo
} = require('./model/todo');
const {
    User
} = require('./model/user');
const {
    ObjectID
} = require('mongodb');

var app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    var todo = new Todo({
        text: req.body.text
    });

    todo.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    });
});

app.get('/todos/:id', (req, res) => {
    var id = req.params.id;
    if (!ObjectID.isValid(id)) {
        return res.status(404).send();
    }

    Todo.findById(id).then((todo) => {
        if (todo) {
            res.send(todo);
        } else {
            return res.status(404).send();
        }
    }, (err) => {
        res.status(400).send("No todo found");
    });

})

app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.send({
            todos
        })
    }, (err) => {
        res.status(400).send(err);
    });
});

app.delete('/todos/:id', (req, res) => {
    var id = req.params.id;

    if (!ObjectID.isValid(id)) {
        return res.status(404).send();
    }

    Todo.findByIdAndRemove(id).then((todo) => {
        if (todo) {
            res.send({
                todo
            });
        } else {
            res.status(404).send(
                "Todo not found"
            );
        }
    }, (err) => {
        res.status(400).send();
    });

});

app.patch('/todos/:id', (req,res) => {
    var id = req.params.id;
    var body = _.pick(req.body, ['text','completed']);
    if (!ObjectID.isValid(id)) {
        return res.status(404).send();
    }


    if(_.isBoolean(body.completed) && body.completed){
        body.completedAt =new Date().getTime();


    }else{
        body.completed = false;
        body.completedAt = null;
    }

    Todo.findByIdAndUpdate(id, {$set : body}, {new: true}).then((todo) => {
        if (!todo) {
            return res.status(404).send();
        }

        res.send({todo});
    }).catch((e) => {
        res.status(400).send(e);
    })

})

app.listen(port, () => {
    console.log(`Server run on port ${port}`);
});


module.exports = {
    app
};