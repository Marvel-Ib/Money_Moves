const path = require('path')

const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const PORT = process.env.PORT || 9000;

const cryptoroutes = require('./routes/crypto');
const currencyroutes = require('./routes/currency');
const homecontroller = require('./Controllers/homecontol')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('./public'))

app.set('views','views');
app.set('view engine', 'ejs');


app.get('/', homecontroller.homestuff)

app.use('/currency', currencyroutes)

app.use('/crypto',cryptoroutes);

app.use(homecontroller.errorstuff)

app.listen(PORT);