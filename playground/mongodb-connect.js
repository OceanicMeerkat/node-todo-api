const {MongoClient, ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        console.log('Unable to connect to MongoDB server');
    } else {
        console.log('Connect to MongoDB server');
    }

    const db = client.db('TodoApp');

   
        db.collection('Todos').insertOne({
            text: 'Something to do',
            completed: false
        }, (err,res) => {
            if(err){
                return console.log('Unable to intert todo ', err);
            }

            console.log(JSON.stringify(res.ops, undefined, 2));
        })
    


    client.close();
});