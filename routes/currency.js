const express = require('express');
const convertamt = require('../util/currencyconvert');

const control = require('../Controllers/currencycontrol') 


const router = express.Router();


router.get('/', control.currencyhome)


router.get('/convert', control.currencyconvert)

router.get('/start', control.currencystart)

module.exports = router;