require('dotenv').config()
var express = require('express');
const res = require('express/lib/response');
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
// app.get('/json', function(req, res) {
//     res.json({"message": "Hello json"})
// });

// Use the .env Filec
if (process.env.MESSAGE_STYLE=="uppercase"){
    app.get('/json', function(req, res) {
    return res.json({ "message": "HELLO JSON" })
    });
    }
    else {
    app.get('/json', function(req, res) {
     return res.json({ "message": "Hello json" })
    });
    
    }

 module.exports = app;
