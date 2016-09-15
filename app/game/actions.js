// Guess number
// Generate Random Number
// response to guess
// displaying guesses

'use strict';

var GUESS_NUMBER = 'GUESS_NUMBER';
var guessNumber = function(number) {
    return {
        type: GUESS_NUMBER,
        number: number
    }
};

var WHAT = 'WHAT';
var what = function() {
    return {
        type: WHAT
    };
};

var NEW_GAME = 'NEW_GAME';
var newGame = function() {
    return {
        type: NEW_GAME
    };
};


exports.GUESS_NUMBER = GUESS_NUMBER;
exports.guessNumber = guessNumber;
exports.WHAT = WHAT;
exports.what = what;
exports.NEW_GAME = NEW_GAME;
exports.newGame = newGame;