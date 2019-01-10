const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    db.collection('Todos').findOneAndUpdate({
        _id: new ObjectID("5c37021a0a86a789a31812c5"),
    }, {
        $set: {
            completed: false
        },
        $inc : {
            calories: 1000
        }
    }, {
        returnOriginal: false
    }).then((r) => {
        console.log(r);
    })

    // client.close();
});

