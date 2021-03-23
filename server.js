const express = require('express');
const app = express();

//get request
app.get("/", (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

app.listen(3000, function() {
    console.log('listening on port 3000');
});

