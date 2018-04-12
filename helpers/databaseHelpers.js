module.exports.createUser = function(newUser, callback){
  bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash(newUser.password, salt, function(err, hash) {
      newUser.password = hash;
      newUser.save(callback);
    });
  });
};
  
module.exports.comparePassword = function(candidatePassword, hash, callback){
  bcrypt.compare(candidatePassword, hash, function(err, isMatch) {
    if(err) throw err;
    callback(null, isMatch);
  });
};

module.exports.getUserByUsername = function(username, callback) {
  User.findOne({ 'username': username }, function (err, user) {
    if (err) return handleError(err);
    callback(user);
  });
};

module.exports.getUserById = function(userId, callback) {
  User.findOne({ 'id': userId }, function (err, user) {
    if (err) return handleError(err);
    callback(user);
  });
};