var express = require('express');
var app = express();

// Meet the Node console
console.log("Hello World")

// Start a Working Express Server
app.get('/', function(req, res) {
    res.send("Hello Express")
});


































 module.exports = app;
