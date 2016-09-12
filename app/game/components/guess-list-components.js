'use strict';

var GuessList = function(props) {

    var guessList = Object.keys(props.guessList).map(function(guess, index) {
        return (
            <li key={index}>
                {guess}
            </li>
        );
    });

    console.log(guessList);

    return (
    	<div className="guess-list">
    		<ul>
                
            </ul>
    	</div>
    );
};

module.exports = GuessList;