var LocalStrategy = require('passport-local').Strategy;
var User = require('../database/index.js').User;

module.exports = function(passport) {
  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function(id, done) {
    //TODO: create this function in User model
    User.getUserById(id, function(err, user) {
      done(err, user);
    });
  });

  passport.use('local-login', new LocalStrategy(
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

}
