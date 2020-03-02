const express = require('express')

const router = express.Router();


router.get('/', (req,res) =>{
    res.render('currency', {
        title:"Currency",
        name:"currency",
        quote:`Don’t tell me where your priorities are. 
Show me where you spend your money and I’ll tell you what they are`
    });
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