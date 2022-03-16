const movieRepository  = require('../Repository/movie.repository');

class movieservice {

    constructor() {}

    async getMovies() {
        return await movieRepository.getMovies();
    }

    async createMovie(movie) {
        return await movieRepository.createMovie(movie);
    }

    async updateMovie(movie) {
        return await movieRepository.updateMovie(movie);
    }

    async deleteMovie(movieId) {
        return await movieRepository.deleteMovie(movieId);
    }

    async getmovie(movieId) {
        return await movieRepository.getmovie(movieId);
    }

    async searchmovie(movieName) {
        return await movieRepository.searchmovie(movieName);
    }

}

module.exports = new movieservice();