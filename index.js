const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');

const app = express();

const hbs = exphbs.create({
    defaultLayout : 'main',
    extname : 'hbs'
});

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', 'views');

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/boshqa', (req, res) => {
    res.render('boshqa');
});

const PORT = process.env.PORT || 1101;


app.listen(PORT, () => {
    console.log(`open localhost  ${PORT}`);
});