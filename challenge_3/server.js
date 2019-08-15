const express = require('express');
const bodyParser = require('body-parser');
const app = express();
var mongoClient = require('mongodb').MongoClient

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));

// var db = mongoClient.connect('mongodb://localhost:27017/test');
// var test = {name:'eileen', email:'e@world.com', password:'world'}
// db.createCollection('users')
// db.users.insertOne(test)

// mongoClient.connect(url, function(err, db) {
//     // db.createCollection('users', function(err, collection) {
//     //     var test = {name:'eileen', email:'e@world.com', password:'world'}
//     //     collection.insert(test);
//     //     db.close();
//     // })

//     var test = {name:'eileen', email:'e@world.com', password:'world'}
//     db.users.insertOne(test)
// })

app.post('/f1', (req, res) => {
    // console.log(req.body);
    // console.log(req.body)
    const input = {name, email, password} = req.body
    console.log(input)

    res.send()
})

app.listen(3000)
console.log("Listening on Port 3000...")
