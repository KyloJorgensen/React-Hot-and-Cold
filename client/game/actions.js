'use strict';

var $ = require('jquery');
require('isomorphic-fetch');

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

var getFewestGuesses = function() {
    return function(dispatch) {
        $.ajax({
            url: '/fewest-guesses',
            datatype: 'jsonp',
            type: 'GET'
        }).done(function(fewestGuesses) {
            return dispatch(
                getFewestGuessesSuccess(fewestGuesses)
            );
        }).fail(function(error){
            return dispatch(
                getFewestGuessesError(error)
            );
        });
    }
};

var GET_FEWEST_GUESSES_SUCCESS = 'GET_FEWEST_GUESSES_SUCCESS';
var getFewestGuessesSuccess = function(fewestGuesses) {
    return {
        type: GET_FEWEST_GUESSES_SUCCESS,
        fewestGuesses: fewestGuesses
    };
};

var GET_FEWEST_GUESSES_ERROR= 'GET_FEWEST_GUESSES_ERROR';
var getFewestGuessesError = function(error) {
    return {
        type: GET_FEWEST_GUESSES_ERROR,
        error: error
    };
};

var postFewestGuesses = function(numberOfGuesses) {
    return function(dispatch) {
        var data = {};
        data.fewestGuesses = numberOfGuesses;
        $.ajax({
            url: '/fewest-guesses',
            datatype: 'jsonp',
            data: JSON.stringify(data),
            contentType: 'application/json',
            type: 'POST'
        }).done(function(fewestGuesses) {
            return dispatch(
                postFewestGuessesSuccess(fewestGuesses)
            );
        }).fail(function(error){
            return dispatch(
                postFewestGuessesError(error)
            );
        });
    }
};

var POST_FEWEST_GUESSES_SUCCESS = 'POST_FEWEST_GUESSES_SUCCESS';
var postFewestGuessesSuccess = function(fewestGuesses) {
    return {
        type: POST_FEWEST_GUESSES_SUCCESS,
        fewestGuesses: fewestGuesses
    };
};

var POST_FEWEST_GUESSES_ERROR= 'POST_FEWEST_GUESSES_ERROR';
var postFewestGuessesError = function(error) {
    return {
        type: POST_FEWEST_GUESSES_ERROR,
        error: error
    };
};

exports.GUESS_NUMBER = GUESS_NUMBER;
exports.guessNumber = guessNumber;
exports.WHAT = WHAT;
exports.what = what;
exports.NEW_GAME = NEW_GAME;
exports.newGame = newGame;
exports.getFewestGuesses = getFewestGuesses;
exports.GET_FEWEST_GUESSES_SUCCESS = GET_FEWEST_GUESSES_SUCCESS;
exports.getFewestGuessesSuccess = getFewestGuessesSuccess;
exports.GET_FEWEST_GUESSES_ERROR = GET_FEWEST_GUESSES_ERROR;
exports.getFewestGuessesError = getFewestGuessesError;
exports.postFewestGuesses = postFewestGuesses;
exports.POST_FEWEST_GUESSES_SUCCESS = POST_FEWEST_GUESSES_SUCCESS;
exports.postFewestGuessesSuccess = postFewestGuessesSuccess;
exports.POST_FEWEST_GUESSES_ERROR = POST_FEWEST_GUESSES_ERROR;
exports.postFewestGuessesError = postFewestGuessesError;