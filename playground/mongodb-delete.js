const {MongoClient, ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        console.log('Unable to connect to MongoDB server');
    } else {
        console.log('Connect to MongoDB server');
    }

    const db = client.db('TodoApp');

        /*
        db.collection('Users').deleteMany({name:'Pai'}).then((res) => {
            console.log(res);
        })
        */
       db.collection('Users').findOneAndDelete({_id:ObjectID("5bec3e2fed3a041b4cdbc87c")}).then((res) => {
        console.log(res);
        });

    client.close();
});