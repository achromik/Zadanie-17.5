var express = require('express');

var app = express();

app.use('/store',  (req, res, next) => {
    console.log('Jestem pośrednikiem przy żądaniu /store');
    next();
});

app.use('/login',  (req, res, next) => {
    console.log('Jestem pośrednikiem przy żądaniu /login');
    next();
});

app.get('/', function (req, res) {
    res.send('Hello world');
});

app.get('/store', function (req, res) {
    res.send('To jest sklep');
});

app.get('/login', function (req, res) {
    res.send('To jest logowanie');
});

app.use((req, res, next) => {
    res.status(404).send('Sorry! Nic tu nie ma :( ');
});

var server = app.listen(3000);
