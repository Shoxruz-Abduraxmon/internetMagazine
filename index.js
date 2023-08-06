const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config();


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
app.use(express.json());

    /// router papkalarini ulash
app.use('/', routerHome);
app.use('/JavaScript', routerJavaScript);
app.use('/Components', routerComponents);

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', 'views');


const PORT = process.env.PORT || 1101;


async function connectToDatabase() {
    try {
      await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true
      });
      console.log('Connected to MongoDB successfully!');
      app.listen(PORT, () => {
      console.log(`open localhost  ${PORT}`);
    });
    
    } catch (error) {
      console.error('Error connecting to MongoDB:', error);
    }
  }
  
  connectToDatabase();
  




