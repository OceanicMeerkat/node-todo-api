const {MongoClient, ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        console.log('Unable to connect to MongoDB server');
    } else {
        console.log('Connect to MongoDB server');
    }

    const db = client.db('TodoApp');
/*
    db.collection('Todos')
        .find({_id:new ObjectID('5bec43108f6a4f16a84f4f86')})
        .toArray().then((docs) => {
            console.log('Todos');
            console.log(JSON.stringify(docs,undefined,2));
    }, (err)=>{
        console.log("Error ===> " , err)
    });
*/
/*
    db.collection('Todos')
        .find()
        .count()
        .then((count) => {
            console.log(`Todos count : ${count}`);
    }, (err)=>{
        console.log("Error ===> " , err)
    });
*/

    db.collection('Users')
        .find({name:'Pai'})
        .count()
        .then((count) => {
            console.log(`Users count : ${count}`)
        }, (err)=>{
            console.log("Error ===> " , err)
        });

    client.close();
});