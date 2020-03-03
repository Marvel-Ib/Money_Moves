const express = require('express');
const convertamt = require('../util/currencyconvert');

const router = express.Router();


router.get('/', (req,res) =>{
    res.render('currency', {
        title:"Currency",
        name:"currency",
        quote:`Don’t tell me where your priorities are. 
Show me where you spend your money and I’ll tell you what they are`
    });
})


router.get('/convert', (req,res) =>
{
    convertamt(req.query.base,req.query.symbol,req.query.amount, (err, response) =>
    {
     //http://localhost:9000/currency/convert?base=USD&symbol=CAD&amount=10000
        if(err)
        {
            return({err: "error"})
        }
        res.send(response);
    })
    
})

router.get('/start', (req,res) =>{
    res.render('currency2', {
        title:"Currency",
        name:"currency",
        quote:`Don’t tell me where your priorities are. 
Show me where you spend your money and I’ll tell you what they are`
    });
})

module.exports = router;