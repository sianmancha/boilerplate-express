var express = require('express');
var app = express();

// Meet the Node console
console.log("Hello World")

// Start a Working Express Server
// app.get('/', function(req, res) {
//     res.send("Hello Express")
// });

// Serve an HTML File
app.get('/', function(req, res) {
    res.sendFile(__dirname + "/views/index.html")
});

// Serve Static Assets
app.use("/public", express.static(__dirname + "/public"));

// Serve JSON on a Specific Route
app.get('/json', function(req, res) {
    res.json({"message": "Hello json"})
});

 module.exports = app;
