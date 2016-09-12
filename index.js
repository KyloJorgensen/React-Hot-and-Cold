'use strict';

var React = require('react'),
    ReactDOM = require('react-dom');
var HotAndColdApp = require('./app/game/components/hot-and-cold-app-component');

var Start = function() {
    return (
        <p>Hello Wolrd</p>
    );
}


document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(<HotAndColdApp />, document.getElementById('app'));
});