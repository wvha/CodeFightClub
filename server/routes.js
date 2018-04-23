const User = require('../database/index.js').User;
const ToyProblem = require('../database/index.js').ToyProblem;
const execute = require('../helpers/sandbox.js').execute;
const Promise = require('bluebird');
const path = require('path');
const db = require('../database/index.js');

var passportRoutes = function(app, passport) {
  require('../config/passport.js')(passport);


  app.post('/signup', passport.authenticate('local-signup', {
    successRedirect: '/signupSuccess',
    failureRedirect: '/signupFailure'
  }));
  app.get('/signupSuccess', function(req, res) {
    res.statusCode = 201;
    res.send('successful signup');
  });
  app.get('/signupFailure', function(req, res) {
    res.statusCode = 406;
    res.send('failed signup');
  });


  app.post('/login', passport.authenticate('local-login', {
    successRedirect: '/loginSuccess',
    failureRedirect: '/loginFailure'
  }));
  app.get('/loginSuccess', function(req, res) {
    res.statusCode = 200;
    res.send('successful login');
  });
  app.get('/loginFailure', function(req, res) {
    res.statusCode = 406;
    res.send('failed login');
  });


  app.get('/logout', function(req, res) {
    console.log('Logging out user: ' + req.user);
    req.logout();
    res.end('Logout was a success!');
  });

};

var challengeRoutes = function(app) {

  app.post('/challenge', function(req, res) {
    let funcName = req.body.funcName;
    let solution = req.body.solution;
    let tests = req.body.tests;
    let status;
    var testRes = [];

    Promise.map(tests, function(test) {
      return execute(`${solution} ${funcName}(${test.input})`)
      .then((data) => {
        if (data !== test.expected) {
          status = 'fail';
        } else {
          status = 'pass';
        }
        return { input: test.input, actual: data, expected: test.expected, status: status};
      });
    }).then((data) => {
      res.status(200);
      res.data = data;
      res.end(JSON.stringify(data));
    });
  });

};


//Routes that deal with databse actions
var databaseRoutes = function(app) {

  //Get a random toy problem from the database
  app.get('/randomChallenge', function(req, res) {
    ToyProblem.count().exec(function(err, count) {
      var random = Math.floor(Math.random() * count);
      ToyProblem.findOne().skip(random).exec(function(err, result) {
        res.end(JSON.stringify(result));
      });
    });
  });

  app.get('/leaderboard', function(req, res) {
    db.findLeaderboard((users) => {
      res.json(users);
    });
  });

  //Get a specific toy problem from the database, using the funcName as a query.
  app.get('/challenge:name', (req, res) => {
    var func = req.params.name.slice(1);
    ToyProblem.findOne({"funcName": func}).exec(function(err, result) {
      res.end(JSON.stringify(result));
    });
  });

  app.patch('/users:name', (req, res) => {
    var name = req.params.name.slice(1);
    User.update({"username": name}, {$inc: {"score": 10}}, function(err, result) {
      if (err) console.log(err);
      console.log(result);
    });
    res.end('updated');
  });

  app.post('/admin/toyProblem', (req, res) => {
    var problem = {};
    problem.title = req.body.title;
    problem.body = req.body.body;
    problem.funcName = req.body.code;
    problem.params = req.body.params;
    problem.tests = JSON.parse(req.body.tests);
    var dbProblem = new ToyProblem(problem);
    dbProblem.save((err) => {
      if (err) {
        console.log(err);
        res.end("error saving db");
      }
      res.end('saved to db');
    });
  });

  app.get('/isLoggedIn', function(req, res) {
    if (req.user) {
      var username = req.user.username;
      User.find({username}).exec((err, data) => {
        if (err) {
          console.log(err);
        }
        res.send(data[0].username);
      });
    } else {
      res.send(undefined);
    }
  });

};


module.exports.passportRoutes = passportRoutes;
module.exports.challengeRoutes = challengeRoutes;
module.exports.databaseRoutes = databaseRoutes;
