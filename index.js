const path = require('path')

const express = require('express');
const app = express();

const bodyParser = require('body-parser');

const cryptoroutes = require('./routes/crypto');
const currencyroutes = require('./routes/currency');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('./public'))

app.set('views','views');
app.set('view engine', 'ejs');


app.get('/', (req,res) =>{
    res.render('home',  {
        title:"Money Moves",
        name: "home",
        quote:"If we command our wealth, we shall be rich and free. If our wealth commands us, we are poor indeed."
    });
})

app.use('/currency', currencyroutes)

app.use('/crypto',cryptoroutes);

app.listen('9000');