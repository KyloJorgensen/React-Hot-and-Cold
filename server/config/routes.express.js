var mainRouter = require('../api/main/main.router'),
	fewestGuessesRouter = require('../api/fewest-guesses/fewest-guesses.router');

module.exports = function(app) {
    app.use('/', mainRouter);
    app.use('/fewest-guesses', fewestGuessesRouter);
};