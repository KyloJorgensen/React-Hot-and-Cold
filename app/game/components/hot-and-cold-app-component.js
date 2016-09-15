'use strict';

var React = require('react');

var HeaderComponent = require('./header-component');
var GameComponent = require('./game-component');


var HotAndColdApp = React.createClass({
	render: function() {
	    return (
	    	<div className="hot-and-cold-app">
	    		<HeaderComponent />
	    		<GameComponent />
	    	</div>
	    );
	}
});

module.exports = HotAndColdApp;