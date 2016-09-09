'use strict';

var redux = require('redux');
var createStore = redux.createStore;

var guessesReducers = require('./guesses/guesses-reducers');

var initialState = {};

var reducers = function(state, action) {
    state = state || initialState;
    return {
        guesses: guessesReducers(state.guesses, action)
    };
};

var store = createStore(reducers);
module.exports  = store;