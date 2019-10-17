var express =require('express');
const payController = require('../controllers/paycontroller')
const path =require('path');
var router =express.Router();

router.get('/pay',payController.pay);

module.exports = router;