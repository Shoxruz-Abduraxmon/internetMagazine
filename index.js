const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');

const app = express();

const hbs = exphbs.create({
    defaultLayout : 'main',
    extname : 'hbs'
});

app.use(express.static('public'));

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', 'views');

app.get('/', (req, res) => {
    res.render('index' , {
        title: 'Home',
        isHome: true
    });
});

app.get('/Components', (req, res) => {
    res.render('Components' , {
        title: 'Canpania',
        isCanpania: true
    });
});

app.get('/JavaScript', (req, res) => {
    res.render('JavaScript' , {
        title: 'Routes',
        isRoutes: true 

    });
});
const PORT = process.env.PORT || 1101;


app.listen(PORT, () => {
    console.log(`open localhost  ${PORT}`);
});