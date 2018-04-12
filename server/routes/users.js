var express = require('express');
var router = express.Router();
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

// var User = require('../models/user');

// SIGNUP
router.get('/signup', function(req, res) {
  res.render('signup');
});

// LOGIN
router.get('/login', function(req, res) {
  res.render('login');
});

// SIGNUP USER
router.post('/signup', function(req, res) {
  var name = req.body.name;
  var email = req.body.email;
  var password = req.body.password;
  // VALIDATION
  req.checkBody('name', 'Name is required').notEmpty();
  req.checkBody('email', 'Email is required').notEmpty();
  req.checkBody('email', 'Email is not valid').isEmail();
  req.checkBody('password', 'Password is required').notEmpty();

  var errors = req.validationErrors();

  if (errors) {
    res.render('/signup', {
      errors: errors
    });
  } else {
    var newUser = new User({
      name: name,
      email: email,
      password: password
    });

    //TODO: Create this function in User model
    User.createUser(newUser, function(err, user) {
      if (err) {
        throw err;
      }
      console.log(user);
    });

    //only way to show this is to check for 'success_msg' in the view
    req.flash('success_msg', 'You are registered and can now login');

    res.redirect('/users/login');

  }
});

passport.use(new LocalStrategy(
  function(username, password, done) {
    //TODO: Create this function in User model
    User.getUserByUsername(username, function(err, user) {
      if (err) {
        throw err;
      }
      if (!user) {
        return done(null, false, {message: 'Unknown user'});
      }
      //TODO: Create this function in User model
      User.comparePassword(password, user.password, function(err, isMatch) {
        if (err) {
          throw err;
        }
        if (isMatch) {
          return done(null, user);
        } else {
          return done(null, false, {message: "invalid Password"});
        }
      });
    });
  }
));

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  //TODO: create this function in User model
  User.getUserById(id, function(err, user) {
    done(err, user);
  });
});

router.post('/login', passport.authenticate('local', {successRedirect:'/', failureRedirect:'/users/login', failureFlash: true}), function(req, res) {
  res.redirect('/');
});

router.get('/logout', function(req, res) {
  req.logout();
  req.flash('success_msg', 'You are logged out');
  res.redirect('/users/login');
});

module.exports = router;
