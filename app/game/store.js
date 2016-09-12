'use strict';

var redux = require('redux');
var createStore = redux.createStore;

var gameReducers = require('./reducers.js');

var initialState = {};

var reducers = function(state, action) {
    state = state || initialState;
    return {
        game: gameReducers(state.game, action)
    };
};

var store = createStore(reducers);
module.exports  = store;