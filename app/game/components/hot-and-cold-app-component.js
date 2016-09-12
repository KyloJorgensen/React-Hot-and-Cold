'use strict';

var store = require('../store');
var headerComponent = require('./header-component');

console.log(store);

var HotAndColdApp = React.createClass({
	newGame: function() {
		console.log('newgame');
	},
	render: function() {
	    return (
	    	<headerComponent newGame={this.newGame} />
	    );
	}
});

module.exports = HotAndColdApp;