
var express = require('express');
var bodyParser = require('body-parser');
var http = require('http')
var socketIO = require('socket.io')

const PORT = 3000;

var app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(__dirname + '/../client/dist'));

var server = http.createServer(app);


server.listen(PORT, () => console.log(`listening on port:${PORT}`));
