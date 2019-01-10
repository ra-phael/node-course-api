const mongoose = require('mongoose');

mongoose.Promise = global.Promise; // set up mongoose to use promises
mongoose.connect('mongodb://localhost:27017/TodoApp');

module.exports = { mongoose };