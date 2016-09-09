'use strict';

var GUESS_NUMBER = 'GUESS_NUMBER';
var guessNumber = function(number) {
    return {
        type: GUESS_NUMBER,
        number: number
    }
};

var RESPONSE_TO_GUESS = 'RESPONSE_TO_GUESS';
var responseToGuess = function(guess) {
    return {
        type: RESPONSE_TO_GUESS,
        guess: guess
    }
};

var DISPLAY_NEW_GUESS = 'DISPLAY_NEW_GUESS';
var displayNewGuess = function(guess) {
    return {
        type: DISPLAY_NEW_GUESS,
        guess: guess
    };
};

exports.GUESS_NUMBER = GUESS_NUMBER;
exports.guessNumber = guessNumber;
exports.RESPONSE_TO_GUESS = RESPONSE_TO_GUESS;
exports.responseToGuess = responseToGuess;
exports.DISPLAY_NEW_GUESS = DISPLAY_NEW_GUESS;
exports.displayNewGuess = displayNewGuess;