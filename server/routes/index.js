var express = require('express');
var router = express.Router();

// GET homepage
router.get('/', ensureAuthenticated, function(req, res) {
  res.render('index');
});

function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  } else {
    // req.flash('error_msg', 'You are not logged in');
    // ! determine if modal can be used as endpoint
    res.redirect('/user/login');
  }
}

module.exports = router;
