const express = require('express')

const router = express.Router();


router.get('/', (req,res) =>{
    res.render('crypto', {
        title: "Crypto",
        name: "crypto",
        quote:"The purpose of a centralized financial system or any other system, is not to exploit people, but to ensure stability in the society"
    });
})

router.get('/start', (req,res) =>
{
    res.render('crypto2', {
        title: "Crypto",
        name: "crypto",
        quote:"The purpose of a centralized financial system or any other system, is not to exploit people, but to ensure stability in the society"
    });
});

module.exports = router;