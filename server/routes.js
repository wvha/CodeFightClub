var User = require('../database/index.js').User;
var ToyProblem = require('../database/index.js').ToyProblem;
var run = require('../helpers/sandbox.js').run;
var execute = require('../helpers/sandbox.js').execute;
const Promise = require('bluebird');

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

  app.get('/loggedIn', function(req, res) {
    if (req.user) {
      res.send(true);
    } else {
      res.send(false);
    }
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
      console.log(data);
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

  //Get a specific toy problem from the database, using the funcName as a query.
  app.get('/challenge:name', (req, res) => {
    var func = req.params.name.slice(1);
    console.log(func);
    ToyProblem.findOne({"funcName": func}).exec(function(err, result) {
      res.end(JSON.stringify(result));
    });
  });

  app.get('/users:name', (req, res) => {
    var name = req.params.name.slice(1);
    User.update({"username": name}, {$inc: {"score": 10}}, function(err, result) {
      if (err) console.log(err);
      console.log(result);
    });
    res.end('updated?');
  });

  //$.post('/admin/toyProblem', toyProblem)
  app.post('/admin/toyProblem', (req, res) => {
    var problem = {};
    problem.title = req.body.title;
    problem.body = req.body.body;
    problem.funcName = req.body.code;
    problem.initialCode = req.body.initCode;
    problem.tests = []; //Ummmm... how do we save arrays to the database?
    var dbProblem = new ToyProblem(problem);
    dbProblem.save((err) => {
      if (err) {
        console.log(err);
      }
      //res.end('saved?');
    });
  });

};


module.exports.passportRoutes = passportRoutes;
module.exports.challengeRoutes = challengeRoutes;
module.exports.databaseRoutes = databaseRoutes;

//todo: create route to update scores and win/loss stats (patch requests)
//todo: bcrypt auth and admin functionality
//todo: adding toy problems to database
