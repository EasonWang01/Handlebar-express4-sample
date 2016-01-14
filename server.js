var express = require('express');
var exphbs  = require('express-handlebars');

var app = express();

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.get('/as', function (req, res) {
    res.render('home');
});
app.get('/', function (req, res) {
    res.render('main', { title: 'Express' });
});


app.listen(3000);