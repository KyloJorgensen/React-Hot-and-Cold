'use strict';

var redux = require('redux');
var createStore = redux.createStore;

var hotAndColdGameReducer = require('./reducers.js');

var initialState = {};

var reducers = function(state, action) {
    state = state || initialState;
    return {
        game: hotAndColdGameReducer(state.game, action)
    };
};

var store = createStore(reducers);
module.exports  = store;