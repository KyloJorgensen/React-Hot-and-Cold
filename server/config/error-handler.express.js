'use strict';

var express = require('express');

module.exports = function(app) {
	app.use(function(err, req, res, next) {
		console.error('middleware error:', err);
		res.status(500).json({'error': err});
	});
};