var User = require('../database/index.js').User;
var run = require('../helpers/sandbox.js').run;
var execute = require('../helpers/sandbox.js').execute;

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
    // console.log('req.body:  ' + req.body.tests);
    let funcName = req.body.funcName;
    let solution = req.body.solution;
    let tests = req.body.tests; //[ { input: '5, 6', expected: '11'}, { input: '3, 4', expected: '7'} ]
    let status;
    let testRes = [];
    tests.forEach((test) => {
      execute(`${solution} ${funcName}(${test.input})`)
      .then((data) => {
        console.log(data);
        if (data !== test.expected) {
          status = 'fail';
        } else {
          status = 'pass';
        }
        testRes.push({input: test.input, expected: test.expected, actual: data, status: status});
      });
    });
    res.end()
  });

};

var databaseRoutes = function(app) {
  app.get('/challenge', function(req, res) {
    //Get data for challenge from database
    //Send response with title, funcName, initialCode, tests
  });
}


module.exports.passportRoutes = passportRoutes;
module.exports.challengeRoutes = challengeRoutes;
module.exports.databaseRoutes = databaseRoutes;
