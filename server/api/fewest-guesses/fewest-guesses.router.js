'use strict';

var express = require('express');
var router = express.Router();
var controller = require('./fewest-guesses.controller');

router.get('/', controller.getFewestGuesses);
router.post('/', controller.postFewestGuesses);

module.exports = router;