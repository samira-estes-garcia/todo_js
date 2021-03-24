const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mongoClient = require('mongodb').MongoClient;
const { MongoClient } = require('mongodb');

//
MongoClient.connect('mongodb+srv://admin:admin@cluster0.tpkms.mongodb.net/todo_js?retryWrites=true&w=majority', {useUnifiedTopology: true})
.then(client => {
    console.log('Connected to database');
    const db = client.db('todo_js')
    const tasksCollection = db.collection('tasks');
    app.set('view engine', 'ejs');
    //body parser is a middleware that tidies up the request object before we use them. use middleware with 'use'
    app.use(bodyParser.urlencoded({ extended: true }));
    //get request
    app.get("/", (req, res) => {
        db.collection('tasks').find().toArray()
        .then(results => {
            res.render('index.ejs', { tasks: results });
        })
        .catch(error => console.error(error))
    })
    //post request
    app.post("/tasks", (req, res) => {
        tasksCollection.insertOne(req.body)
        .then(result => {
            res.redirect('/');
        })
        .catch(error => console.error(error));
    })
    app.listen(3000, function() {
        console.log('listening on port 3000');
    });
})

