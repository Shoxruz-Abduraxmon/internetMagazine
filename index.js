const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const mysql = require('mysql');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const multer = require('multer');

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

//             /// multer

//  const saqlash = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cd(null, '../malumotlarBazasi', 'sklat.json')
//     }
//  })
//  const uploud = multer({storage: saqlash})           


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

// const db = mysql.createConnection({
//     host: process.env.DATABASE_host,
//     user: process.env.DATABASE_user,
//     password: process.env.DATABASE_password,
//     database: process.env.DATABASE
// });

// db.connect( (err) => {
//     if (err) {
//         console.log(err)
//     }else{
//         console.log('mysql connect internetMagazin');
//     }
// });

   
// mongose

// mongoose.connect(
//     process.env.MONGO_URI, 
//     {
//         useNewUrlParser: true,
//         useFindAndModify: false,
//         useUnifiedTopology: true  
// }, () => console.log('mongose connect')
// )


async function connectToDatabase() {
    try {
      await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log('Connected to MongoDB successfully!');
    } catch (error) {
      console.error('Error connecting to MongoDB:', error);
    }
  }
  
  connectToDatabase();
  

const PORT = process.env.PORT || 1101;


app.listen(PORT, () => {
    console.log(`open localhost  ${PORT}`);
});

