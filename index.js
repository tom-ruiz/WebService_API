var express = require('express');
var app = express();
let movies = require('./api/movies.json');

let port = 8080;

// utilisation d'express
app.use(express.json())

app.get('/', function (req, res) {
    console.log(req.get('Accept'));
    req.accepts('application/json');
    req.accepts('application/xml');
    res.end();
});

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
    res.send('hello world');
});

app.get('/movies', (req, res) => {
    res.status(200).json(movies);
    res.status(400).send('BAD REQUEST : syntaxe erronée');
    res.status(404).send("Ressource absente");
})

app.get('/movies/:id', (req, res) => {
    const id = req.params.id;
    const movie = movies.find(movie => movie.id === id);
    res.status(200).json(movie);
    res.status(400).send('BAD REQUEST : syntaxe erronée');
    res.status(404).send("Ressource absente");
})


app.post('/movies', (req, res) => {
    movies.push(req.body)
    res.status(201).json(movies)
    res.status(400).send('BAD REQUEST : syntaxe erronée');
    res.status(404).send("Ressource absente");
    res.status(422).send("l'entité est incomplète");

})


app.put('/movies/:id', (req, res) => {
    const id = req.params.id;
    let movie = movies.find(movie => movie.id === id);

    movie.name = req.body.name,
        movie.description = req.body.city,
        movie.date = req.body.type,
        movie.note = requ.body.note,

        res.status(200).json(movie);
    res.status(400).send('BAD REQUEST : syntaxe erronée');
    res.status(404).send("Ressource absente");
    res.status(422).send("l'entité est incomplète");
})


app.delete('/movies/:id', (req, res) => {
    const id = parseInt(req.params.id)
    let movie = movies.find(parking => parking.id === id)
    movies.splice(movies.indexOf(movie), 1)
    res.status(200).json(movies)
    res.status(400).send('BAD REQUEST : syntaxe erronée');
    res.status(404).send("Ressource absente");

})


app.listen(port, () => {
    console.log(`écoute sur le port ${port}`);
});