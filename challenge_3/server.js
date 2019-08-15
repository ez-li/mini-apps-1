const express = require('express');
const bodyParser = require('body-parser');
const app = express();
var mongoClient = require('mongodb').MongoClient

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));

var url = 'mongodb://localhost:27017/test';

app.post('/f1', (req, res) => {
    console.log(req.body);
    const name = {name: req.body.name};
    const email = {email: req.body.email};
    const password = {password: req.body.password};
    const input = [];
    input.push(name, email, password);
    console.log(input);

    mongoClient.connect(url, { useUnifiedTopology: true, useNewUrlParser: true }, function(err, client) {
        console.log('connected to mongo');
        const db = client.db('checkout');
        db.createCollection('users');
        const collection = db.collection('users');
        // collection.insertMany(input);
        collection.insertOne(name, function(err, docs) {
            if (err) {
                console.log(err);
            }
            console.log('inserted');
        });

    })

    res.send()
})

app.listen(3000)
console.log("Listening on Port 3000...")
