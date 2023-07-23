const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const mysql = require('mysql');


       /// router papkalari
const routerHome = require('./router/home');
const routerJavaScript = require('./router/javaScript');
const routerComponents = require('./router/components');

const app = express();

const hbs = exphbs.create({
    defaultLayout : 'main',
    extname : 'hbs'
});


app.use('/public', express.static('public'));
app.use(express.urlencoded({extended: true}));

    /// router papkalarini ulash
app.use('/', routerHome);
app.use('/JavaScript', routerJavaScript);
app.use('/Components', routerComponents);

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', 'views');

const db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'internetMagazin'
});

db.connect( (err) => {
    if (err) {
        console.log(err)
    }else{
        console.log('mysql connect internetMagazin');
    }
});

const PORT = process.env.PORT || 1101;


app.listen(PORT, () => {
    console.log(`open localhost  ${PORT}`);
});