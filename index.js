'use strict';

var React = require('react'),
    ReactDOM = require('react-dom');

var Start = function() {
    return (
        <p>Hello Wolrd</p>
    );
}

document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(<Start />, document.getElementById('app'));
});