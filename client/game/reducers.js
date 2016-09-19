'use strict';

var actions = require('./actions');

var initialHotAndColdGameState = {
    feedback: 'Make your Guess!',
    guessList: [],
    numberOfGuesses: '0',
    randomNumber: Math.floor((Math.random() * 100) + 1),
    gameOver: false,
    what: false,
    fewestGuesses: 100000
};

var hotAndColdGameReducer = function(state, action) {
    state = state || initialHotAndColdGameState;
    if (action.type === actions.NEW_GAME) {
        state.feedback = 'Make your Guess!';
        state.guessList = [];
        state.numberOfGuesses = '0';
        state.randomNumber = Math.floor((Math.random() * 100) + 1);
        state.gameOver = false;
    } 
    else if (action.type === actions.GUESS_NUMBER) {
        state.guessList.push(action.number);
        state.numberOfGuesses++;

        var difference = Math.abs(state.randomNumber - action.number);

        difference <= 40 ? state.feedback = 'less then warm' : state.feedback = 'cold'; 
        difference <= 30 ? state.feedback = 'warm' : '';
        difference <= 20 ? state.feedback = 'Kinda hot' : '';
        difference <= 10 ? state.feedback = 'hot' : '';

        if (!difference) {
            state.feedback = 'You Won. Click new game to play again';
            state.gameOver = true;
            
        }
    }
    else if (action.type === actions.WHAT) {
        if (state.what) {
            state.what = false;
        } else {
            state.what = true;
        }
    }
    else if (action.type === actions.GET_FEWEST_GUESSES_SUCCESS) {
        // Find the index of the matching repository
        state.fewestGuesses = action.fewestGuesses;
        return state;
    }
    else if (action.type === actions.GET_FEWEST_GUESSES_ERROR) {
        // Find the index of the matching repository
        alert(action.error);
        return state;
    }
    else if (action.type === actions.POST_FEWEST_GUESSES_SUCCESS) {
        // Find the index of the matching repository
        state.fewestGuesses = action.fewestGuesses;
        return state;
    }
    else if (action.type === actions.POST_FEWEST_GUESSES_ERROR) {
        // Find the index of the matching repository
        alert(action.error);
        return state;
    }

    return state;
};

module.exports = hotAndColdGameReducer;