var User = require('../database/index.js').User;

var passportRoutes = function(app, passport) {
  require('../config/passport.js')(passport);


  app.post('/signup', passport.authenticate('local-signup', {
    successRedirect: '/signupSuccess',
    failureRedirect: 'signupFailure'
  }));
  app.get('/signupSuccess', function(req, res) {
    res.send('successful signup');
  });
  app.get('/signupFailure', function(req, res) {
    res.send('failed signup');
  });


  app.post('/login', passport.authenticate('local-login', {
    successRedirect: '/loginSuccess',
    failureRedirect: '/loginFailure'
  }));
  app.get('/loginSuccess', function(req, res) {
    res.send('successful login');
  });
  app.get('/loginFailure', function(req, res) {
    res.send('failed login');
  });


  app.get('/logout', function(req, res) {
    console.log('Logging out user: ' + req.user);
  });
};

module.exports.passportRoutes = passportRoutes;
