'use strict';

var FewestGuesses = require('./fewest-guesses.model');

function FewestGuessesController() {};

FewestGuessesController.prototype.getFewestGuesses = function(req, res, next) {
    return new Promise(function(resolve, reject) {
    	FewestGuesses.find({}, function(error, fewestGuesses) {
			if (error) {
				reject(error);
			} else {
				resolve(fewestGuesses);
			}
		});
    }).then(function(fewestGuesses) {
    	res.status(200).json(fewestGuesses[0].fewestGuesses);
    }).catch(function(error) {
    	next(error);
    });
};

FewestGuessesController.prototype.postFewestGuesses = function(req, res, next) {
	if (!'body' in req) {
		return next({message: 'request missing body'});
	} 
	if (!'fewestGuesses' in req.body) {
		return next({message: 'request missing body.fewestGuesses'});
	}
	var fewestGuesses = Number(req.body.fewestGuesses);
	if (fewestGuesses < 1 || isNaN(fewestGuesses) || fewestGuesses % 1 != 0) {
		return next({message: 'fewestGuesses needs to be a whole number above 0'});
	}

    console.log(req.body);

    return new Promise(function(resolve, reject) {
    	FewestGuesses.find({}, function(error, fewestGuesses) {
			if (error) {
				reject(error);
			} else {
				resolve(fewestGuesses);
			}
		});
    }).then(function(fewestGuesses) {
    	if (fewestGuesses[0]) {
    		return fewestGuesses[0];
    	} else {
    		return new Promise(function(resolve, reject) {
    			FewestGuesses.create({
    				fewestGuesses: req.body.fewestGuesses
    			}, function(error, fewestGuesses) {
					if (error) {
						reject(error);
					} else {
						resolve(fewestGuesses);
					}
				});
    		}).then(function() {
				return new Promise(function(resolve, reject) {
			    	FewestGuesses.find({}, function(error, fewestGuesses) {
						if (error) {
							reject(error);
						} else {
							resolve(fewestGuesses);
						}
					});
			    }).then(function(fewestGuesses) {
			    	return fewestGuesses[0];
			    }).catch(function(error) {
			    	next(error);
			    });
    		}).catch(function(error) {
    			next(error);
    		});
    	}
    }).then(function(fewestGuesses) {
    	if (fewestGuesses.fewestGuesses > req.body.fewestGuesses) {
    		return new Promise(function(resolve, reject) {
    			FewestGuesses.findOneAndUpdate({
    				_id: fewestGuesses._id
    			}, {
    				$set: {fewestGuesses: Number(req.body.fewestGuesses)}
    			}, {
    				new: true
    			}, function(error, fewestGuesses) {
    				if (error) {
    					reject(error);
    				} else {
    					resolve(fewestGuesses);
    				}
    			})
    		}).then(function(fewestGuesses) {
    			res.status(200).json(fewestGuesses.fewestGuesses);
    		}).catch(function(error) {
    			next(error);
    		});
    	} else {
    		res.status(200).json(fewestGuesses.fewestGuesses)
    	}
    }).catch(function(error) {
    	next(error);
    });
};

module.exports = FewestGuessesController.prototype;