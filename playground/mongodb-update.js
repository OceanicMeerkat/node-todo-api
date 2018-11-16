const {
    MongoClient,
    ObjectID
} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        console.log('Unable to connect to MongoDB server');
    } else {
        console.log('Connect to MongoDB server');
    }

    const db = client.db('TodoApp');
    /*
    db.collection('Todos').findOneAndUpdate({
        _id: new ObjectID("5bed8b698f6a4f155057fcfe")
    }, {
        $set: {
            completed: true
        }
    }, {
        returnOriginal: false
    }).then((res) => {
        console.log(res);
    })
    */

   db.collection('Users').findOneAndUpdate({
    _id: new ObjectID("5bed92358f6a4f155057fd21")
    }, {
    $set: {
        name:"Pai"
    },
    $inc:{
        age: 1
    }
    }, {
    returnOriginal: false
    }).then((res) => {
    console.log(res);
    })

    client.close();
});