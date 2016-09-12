'use strict';

var actions = require('./guesses-actions');

var initialGuessesState = [];

var guessesReducer = function(state, action) {
    state = state || initialGuessesState;
    if (action.type === actions.GUESS_NUMBER) {

    }
    else if (action.type === actions.RESPONSE_TO_GUESS) {

    }
    else if (action.type === actions.DISPLAY_NEW_GUESS) {

    }
    return state;
};

module.exports = guessesReducer;