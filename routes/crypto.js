const express = require('express')
const control = require('../Controllers/cryptocontrol')


const router = express.Router();


router.get('/', control.hometinz)

router.get('/cryptoconvert', control.cryptoconvert) 

router.get('/start', control.cryptostuff);

module.exports = router;