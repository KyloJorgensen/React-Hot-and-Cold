'use strict';

var actions = require('../actions');

var initialNewGameState = [];

var newGameReducer = function(state, action) {
    state = state || initialNewGameState;
    if (action.type === actions.GUESS_NUMBER) {

    }
};

module.exports = newGameReducer;