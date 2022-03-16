const movieservice = require('../Service/movie.service');
const logger = require('../logger/api.logger');

class Controller {

    async getMovies() {
        logger.info('Controller: getMovies')
        return await movieservice.getMovies();
    }

    async createMovie(movie) {
        logger.info('Controller: createMovie', movie);
        return await movieservice.createMovie(movie);
    }
    async getmovie(movieId) {
        logger.info('Controller: get movie', movieId);
        return await movieservice.getmovie(movieId);
    }

    async updateMovie(movie) {
        logger.info('Controller: updateMovie', movie);
        return await movieservice.updateMovie(movie);
    }

    async deleteMovie(movieId) {
        logger.info('Controller: deleteMovie', movieId);
        return await movieservice.deleteMovie(movieId);
    }


    async searchMovie(movieName) {
        logger.info('controller: search movie', movieName);
        return await movieservice.searchmovie(movieName);
    }
}
module.exports = new Controller();