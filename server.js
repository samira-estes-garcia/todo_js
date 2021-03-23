const express = require('express');
const bodyParser = require('body-parser');
const app = express();

//body parser is a middleware that tidies up the request object before we use them. use middleware with 'use'
app.use(bodyParser.urlencoded({ extended: true }));

//get request
app.get("/", (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

//post request
app.post("/tasks", (req, res) => {
    console.log(req.body);
})

app.listen(3000, function() {
    console.log('listening on port 3000');
});

