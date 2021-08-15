//ALL STARTING CODE OF THIS FILE IS SHIFTED TO DUMMY.TXT IN THIS FOLDER YOU CAN COPY PASTE TO SEE 
const express = require('express');
// const bodyParser = require('body-parser');    BODYPARSER IS NOW DEPRECATED
const path = require('path');

const app = express();

app.set('view engine','pug');
app.set('views', 'view');

const admin = require("./router/admin");
const home = require('./router/shop');

// CREATING RESPONSIVE SERVER AND PARSING INCOMING REQUESTS
app.use(express.urlencoded({ extended:false }));

app.use(express.static(path.join(__dirname,'public')));

app.use('/admin',admin);
app.use(home);
app.listen(3000);