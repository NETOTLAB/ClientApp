var express =require('express');
const walletController = require('../controllers/walletcontroller')
const path =require('path');
var router =express.Router();

router.get('/wallet',walletController.wallet);

module.exports = router;