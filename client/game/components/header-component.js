'use strict';

var React = require('react');
var connect = require('react-redux').connect;
var Overlay = require('./overlay-component');

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
                <Overlay fadeOut={this.fadeOut} fadeValue={this.state.fadeValue} />
                <h1>HOT or COLD</h1>
        	</header>
        );
    }
});

var Container = connect()(Header);

module.exports = Container;