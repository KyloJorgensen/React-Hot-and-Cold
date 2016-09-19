'use strict';

var mongoose = require('mongoose');

var fewestGuessesSchema = mongoose.Schema({
	fewestGuesses: Number
});

module.exports = mongoose.model('FewestGuesses', fewestGuessesSchema);