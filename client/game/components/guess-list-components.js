'use strict';

var React = require('react');

var GuessList = function(props) {
    var guessList = Object.keys(props.guessList).map(function(guess, index) {
        return (
            <li key={index}>
                {props.guessList[guess]}
            </li>
        );
    });

    return (
    	<div className="guess-list">
    		<ul id="guessList" className="guessBox clearfix">
                {guessList}
            </ul>
    	</div>
    );
};

module.exports = GuessList;