'use strict';

var React = require('react'),
    ReactDOM = require('react-dom'),
    Provider = require('react-redux').Provider;

var store = require('./app/game/store');
var HotAndColdApp = require('./app/game/components/hot-and-cold-app-component');

document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(
    	<Provider store={store}>
    		<HotAndColdApp />
    	</Provider>,
    	document.getElementById('app')
    );
});