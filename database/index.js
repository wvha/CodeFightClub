import { mongo } from 'mongoose'; // ! What the fuck is this?

const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost/test');

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', () => {
  
  const UserSchema = new mongoose.Schema({
    username: String,
    password: String,
    email: String,
    wins: Number,
    losses: Number,
    score: Number
  });
  
  const ToyProblemSchema = new mongoose.Schema({
    title: String,
    prompt: String,
    functionName: String,
    tests: [TestSchema]
  });
  
  // ? Should we create a test validation method directly on the ToyProblem model or do we want to do it externally?

  const TestSchema = new mongoose.Schema({
    // Todo: Needs to be updated when we know test format
  })

const ToyProblem = mongoose.Model('ToyProblem', ToyProblemSchema);

const User = mongoose.Model('User', UserSchema);

});