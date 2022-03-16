var express = require('express');
var app = express();
let movies = require('./api/movies.json');
const fs = require('fs')
const movieController = require('./controller/movie.controller')
require('dotenv').config();
let port = 8080;
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger/swagger.json');
const customCss = fs.readFileSync((process.cwd() + "/swagger/swagger.css"), 'utf8');

app.use(express.json());

// app.get('/', function (req, res) {
//     console.log(req.get('Accept'));
//     req.accepts('application/json');
//     req.accepts('application/xml');
//     res.end();
// });

// // respond with "hello world" when a GET request is made to the homepage
// app.get('/', function (req, res) {
//     res.send('hello world');
// });

// app.get('/movies', (req, res) => {
//     res.status(200).json(movies);
//     res.status(400).send('BAD REQUEST : syntaxe erronée');
//     res.status(404).send("Ressource absente");
// })

// app.get('/movies/:id', (req, res) => {
//     const id = req.params.id;
//     const movie = movies.find(movie => movie.id === id);
//     res.status(200).json(movie);
//     res.status(400).send('BAD REQUEST : syntaxe erronée');
//     res.status(404).send("Ressource absente");
// })


// app.post('/movies', (req, res) => {
//     movies.push(req.body)
//     res.status(201).json(movies)
//     res.status(400).send('BAD REQUEST : syntaxe erronée');
//     res.status(404).send("Ressource absente");
//     res.status(422).send("l'entité est incomplète");

// })


// app.put('/movies/:id', (req, res) => {
//     const id = req.params.id;
//     let movie = movies.find(movie => movie.id === id);

//     movie.name = req.body.name,
//         movie.description = req.body.city,
//         movie.date = req.body.type,
//         movie.note = requ.body.note,

//         res.status(200).json(movie);
//     res.status(400).send('BAD REQUEST : syntaxe erronée');
//     res.status(404).send("Ressource absente");
//     res.status(422).send("l'entité est incomplète");
// })


// app.delete('/movies/:id', (req, res) => {
//     const id = parseInt(req.params.id)
//     let movie = movies.find(parking => parking.id === id)
//     movies.splice(movies.indexOf(movie), 1)
//     res.status(200).json(movies)
//     res.status(400).send('BAD REQUEST : syntaxe erronée');
//     res.status(404).send("Ressource absente");

// })


app.get('/api/movies', (req, res) => {
    // res.status(400).send('BAD REQUEST');
    const pageSize = req.query.pageSize ? parseInt(req.query.pageSize) : 0;
    const page = req.query.page ? parseInt(req.query.page) : 0;
    movieController.getMovies(pageSize, page).then(data => res.json(data));
    // res.status(200).json(movies);
});

app.get('/api/movie/:id', (req, res) => {
    movieController.getmovie(req.params.id).then(data => res.status(200).json(data));
})

app.post('/api/movie', (req, res) => {
    console.log(req.body);
    movieController.createMovie(req.body.movie).then(data => res.json(data));
});

app.put('/api/movie', (req, res) => {
    movieController.updateMovie(req.body.movie).then(data => res.json(data));
});

app.delete('/api/movie/:id', (req, res) => {
    movieController.deleteMovie(req.params.id).then(data => res.json(data));
});

app.get('/api/movie/search/:name', (req, res) => {
    movieController.searchMovie(req.params.name).then(data => res.status(200).json(data))
})

app.get('/', (req, res) => {
    res.send(`<h1>OK</h1>`)
});

app.get('/movie/');


app.listen(port, () => {
    console.log(`écoute sur le port ${port}`);
});