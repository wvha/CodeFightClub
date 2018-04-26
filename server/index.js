
const express = require('express');
const http = require('http');
const socket = require('socket.io');

const session = require('express-session');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const passport = require('passport');


const app = express();
const server = http.Server(app);
const io = socket(server);

// Setup middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());
app.use(express.static(__dirname + '/../client/dist'));

app.use(session({
  secret: 'secret',
  saveUninitialized: true,
  resave: true
}));

app.use(passport.initialize());
app.use(passport.session());

app.set('port', (process.env.PORT || 3000));

app.listen(app.get('port'), function() {
  console.log('Server started on port:' + app.get('port'));
});

//Here are the routes we use
require('./routes.js').passportRoutes(app, passport);
require('./routes.js').challengeRoutes(app);
require('./routes.js').databaseRoutes(app);

// socket.io
io.on('connection', (socket) => {
  console.log('socket connected', socket);

  // how to emit
  socket.emit('event type', {jsonObject: 'any json compatable object'});

  socket.on('event from client', (data) => {
    console.log('data from client', data);
  })
});

module.exports = app;
