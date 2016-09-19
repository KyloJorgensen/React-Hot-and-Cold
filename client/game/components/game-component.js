'use strict';

var React = require('react');
var connect = require('react-redux').connect;

var GuessList = require('./guess-list-components');

var actions = require('../actions');

var oldNumber = '';

var Game = React.createClass({
    onSubmit: function(event) {
        event.preventDefault();
        var self = this;
        if (!this.props.gameOver) {
            if (this.refs.guessNumber.value == '') {
                alert('Required Field: Enter Your Guess');
            } else {
                for (var i = 0; i < this.props.guessList.length; i++) {
                    if (this.props.guessList[i] == this.refs.guessNumber.value) {
                        var number = this.refs.guessNumber.value;
                        oldNumber = '';
                        this.refs.guessNumber.value = oldNumber;
                        return alert(number + ' has Already been guessed! Please try another one.');
                    }
                }
                this.props.dispatch(
                    actions.guessNumber(this.refs.guessNumber.value)
                );
                this.refs.guessNumber.value = '';
            }
        }
    },
    onChange: function() {
        var input = Number(this.refs.guessNumber.value);
        var split = this.refs.guessNumber.value.split('');
        if (this.props.gameOver) {
            oldNumber = '';
            this.refs.guessNumber.value = oldNumber;
        } else if (split[split.length - 1] == '.') {
            this.refs.guessNumber.value = oldNumber;
        } else if (this.refs.guessNumber.value == '') {
            oldNumber = '';
        } else if (!input || input > 100) {
            this.refs.guessNumber.value = oldNumber;
        } else {
            oldNumber = input;
        }
    },
    render: function() {
        if (this.props.gameOver) {
            this.props.dispatch(
                actions.postFewestGuesses(this.props.numberOfGuesses)
            );
        }
        this.props.dispatch(
            actions.getFewestGuesses()
        );
        return (
        	<section className="game">
        		<h2 id="feedback">{this.props.feedback}</h2>
    			<form onSubmit={this.onSubmit}>
                    <input type="text" ref="guessNumber" name="userGuess" onChange={this.onChange} id="userGuess" className="text" placeholder="Enter your Guess" autoFocus />
    				<input type="submit" id="guessButton" className="button" name="submit" value="Guess" />
    			</form>
                <p>Guess <span id="count">{this.props.numberOfGuesses}</span>!</p>
        		<GuessList guessList={this.props.guessList} />
                <p> Fewest Guesses: <span>{this.props.fewestGuesses}</span></p>
        	</section>
        );
    }
});

var mapStateToProps = function(state, props) {
    return {
        feedback: state.game.feedback,
        numberOfGuesses: state.game.numberOfGuesses,
        guessList: state.game.guessList,
        gameOver: state.game.gameOver,
        fewestGuesses: state.game.fewestGuesses
    };
};

var Container = connect(mapStateToProps)(Game);

module.exports = Container;