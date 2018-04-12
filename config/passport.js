var LocalStrategy = require('passport-local').Strategy;
var User = require('../database/index.js').User;

module.exports = (passport) => {

  console.log('within passport: ');

  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function(id, done) {
    //TODO: create this function in User model
    User.findById(id, function(err, user) {
      done(err, user);
    });
  });

  passport.use('local-signup', new LocalStrategy(
    {
      username: 'username',
      password: 'password',
      passReqToCallback: true,
    },
    function(req, username, password, callback) {
      console.log('within local-signup of passport:  ');
      process.nextTick(function() {
        User.findOne({'username': username}, function(err, user) {
          if (err) return callback(err);
          if (user) return callback(null, false, 'username taken');

          var newUser = new User();
          newUser.username = username;
          newUser.password = password;
          newUser.save(function(err) {
            if (err) console.log('error in newUser.save ' + err);
            console.log(newUser);
            return callback(null, newUser, 'successful signup');
          });
        });
      });
    }
  ));

  passport.use('local-login', new LocalStrategy(
    {
      username: 'username',
      password: 'password',
      passReqToCallback: true,
    },
    function(req, username, password, callback) {
      console.log('Inside passport local strat for login');
      process.nextTick(function() {
        User.findOne({'username': username}, function(err, user) {
          if (err) return callback(err);
          if (!user) return callback(null, false, 'user not found');
          if (user.password !== password) return callback(null, false, 'incorrect password');
          return callback(null, user, 'success login');
        })
      })
    }
  ))

}
