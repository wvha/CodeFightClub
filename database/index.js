const mongoose = require('mongoose');
const helpers = require('../helpers/databaseHelpers.js');


mongoose.connect('mongodb://localhost/test');

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', () => {
  console.log('Connected to db...');
});

const UserSchema = new mongoose.Schema({
  username: String,
  password: String,
  email: String,
  wins: Number,
  losses: Number,
  score: Number
});

const ToyProblemSchema = new mongoose.Schema({
  title: { type: String, unique: true },
  funcName: String,
  initialCode: String,
  tests: [
    {
      input: String,
      expected: String
    }
  ]
});

// title: "Compete Against Hackers Around the World!",
// funcName: "iAmAwesome",
// code: "var iAmAwesome = function() {\n\n};",
// tests: [ {input: '5, 6', expected: '11'}, {input: '3, 4', expected: '7'}, {input: '30, 30', expected: '60'} ]

// db.toyproblems.insert({
//   "title": "Divide numbers",
//   "funcName": "div",
//   "initialCode": "function div(a, b) {\n\n}",
//   "tests": [
//     {
//       "input": "10, 2",
//       "expected": "5"
//     },
//     {
//       "input": "8, 4",
//       "expected": "2"
//     }
//   ]
// })


const ToyProblem = mongoose.model('ToyProblem', ToyProblemSchema);

const User = mongoose.model('User', UserSchema);

//User collection functions
const getUserById = function(id, callback) {
  return User.findById(id, callback);
};


// Database export
module.exports.db = db;

//User collection export
module.exports.User = User;

// Toy problem export
module.exports.ToyProblem = ToyProblem;

//User functions
module.exports.getUserById = getUserById;
