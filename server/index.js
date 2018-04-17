
var express = require('express');
var session = require('express-session');
var expressValidator = require('express-validator');
var path = require('path');
var mongo = require('mongodb');
var mongoose = require('mongoose');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var flash = require('connect-flash');
var http = require('http');
//var socketIO = require('socket.io');
var db = require('../database/index.js');
var User = require('../database/index.js').User;

var app = express();

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

require('./routes.js').passportRoutes(app, passport);
require('./routes.js').challengeRoutes(app);

module.exports = app;
