const path = require('path')

const express = require('express');
const app = express();

const bodyParser = require('body-parser');

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

app.get('/currency', (req,res) =>{
    res.render('currency', {
        title:"Currency",
        name:"currency",
        quote:`Don’t tell me where your priorities are. 
Show me where you spend your money and I’ll tell you what they are`
    });
})

app.get('/crypto', (req,res) =>{
    res.render('crypto', {
        title: "Crypto",
        name: "crypto",
        quote:"The purpose of a centralized financial system or any other system, is not to exploit people, but to ensure stability in the society"
    });
})

app.listen('9000');