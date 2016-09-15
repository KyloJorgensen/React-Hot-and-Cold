'use strict';

var React = require('react');
var connect = require('react-redux').connect;

var actions = require('../actions');

var sleep = function(value, self, callback) {
    setTimeout(function(){
        callback(self, value);
    }, value);
};

var Header = React.createClass({
    getInitialState: function() {
        return {
            fadeValue: {display: 'none'}
        };
    },
    new: function() {
        this.props.dispatch(
            actions.newGame()
        );
    },
    fadeIn: function() {
        var time = 1000;
        for (var i = 0; i <= time; i++) {
            sleep(i, this, function(self, value) {
                var opacity = value/time;
                if (opacity != 1) {
                    self.setState({
                        fadeValue: {display: 'block', opacity: opacity}
                    });
                } else {
                    self.setState({
                        fadeValue: {display: 'block'}
                    });
                }
            });
        }
    },
    fadeOut: function() {
        var time = 1000;
        for (var i = 0; i <= time; i++) {
            sleep(i, this, function(self, value) {
                var opacity = (time - value)/time;
                if (opacity != 0) {
                    self.setState({
                        fadeValue: {display: 'block', opacity: opacity}
                    });
                } else {
                    self.setState({
                        fadeValue: {display: 'none'}
                    });                    
                }
            });
        }
    },
    render: function() {
        return (
        	<header className="game-header">
                <nav>
                    <ul className="clearfix">
                        <li>
        				    <a className="what" onClick={this.fadeIn} >WHAT?</a>
                        </li>
                        <li>
        				    <a className="new" onClick={this.new} >+ NEW GAME</a>
                        </li>
                    </ul>
                </nav>
                <div className="overlay" id="modal" style={this.state.fadeValue}>
                    <div className="content">
                        <h3>What do I do?</h3>
                        <div>
                            <p>This is a Hot or Cold Number Guessing Game. The game goes like this: </p>
                            <ul>
                                <li>1. I pick a <strong>random secret number</strong> between 1 to 100 and keep it hidden.</li>
                                <li>2. You need to <strong>guess</strong> until you can find the hidden secret number.</li>
                                <li>3. You will <strong>get feedback</strong> on how close ("hot") or far ("cold") your guess is.</li>
                            </ul>
                            <p>So, Are you ready?</p>
                            <a className="close" href="#" onClick={this.fadeOut}>Got It!</a>
                        </div>
                    </div>
                </div>
                <h1>HOT or COLD</h1>
        	</header>
        );
    }
});

var Container = connect()(Header);

module.exports = Container;