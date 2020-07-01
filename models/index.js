const mongoose = require('mongoose');

mongoose.set('debug', true);

mongoose.connect('mongodb://localhost/TodoApi');

mongoose.Promise = Promise;

module.exports.Todo = require("./todos");