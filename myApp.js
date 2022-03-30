require('dotenv').config()
var express = require('express');
const res = require('express/lib/response');
var app = express();
var bodyParser = require('body-parser')

// 7. Implement a Root-Level Request Logger Middleware
app.use(function(req, res, next) {
    console.log(req.method + " " + req.path + " - " + req.ip);
    next();
  });

// 11. Use body-parser to Parse POST Requests
app.use(bodyParser.urlencoded({extended : false}))
app.use(bodyParser.json())

// 1. Meet the Node console
console.log("Hello World")

// 2. Start a Working Express Server
// app.get('/', function(req, res) {
//     res.send("Hello Express")
// });

// 3. Serve an HTML File
app.get('/', function(req, res) {
    res.sendFile(__dirname + "/views/index.html")
});

// 4. Serve Static Assets
app.use("/public", express.static(__dirname + "/public"));

// 5. Serve JSON on a Specific Route
// app.get('/json', function(req, res) {
//     res.json({"message": "Hello json"})
// });

// 6. Use the .env File
app.get('/json', function(req, res) {
    if (process.env.MESSAGE_STYLE=="uppercase"){
        return res.json({ "message": "HELLO JSON" }) 
    } else {
        return res.json({ "message": "Hello json" })
    }
})

// 8. Chain Middleware to Create a Time Server
function getTheCurrentTimeString() {
    return new Date().toString()
};

app.get('/now', function(req, res, next) {
    req.time = getTheCurrentTimeString();
    next();
}, function(req,res) {
    res.json({time : req.time});
})

// 9. Get Route Parameter Input from the Client
app.get("/:word/echo", function(req, res) {
    res.json({echo : req.params.word})
});

// 10. Get Query Parameter Input from the Client
app.get("/name", function(req, res) {
    res.json({name : req.query.first + " " + req.query.last})
})

 module.exports = app;