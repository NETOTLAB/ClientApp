var express =require('express');
const transController = require('../controllers/transcontroller')
const path =require('path');
var router =express.Router();

router.get('/transactions',transController.trans);

module.exports = router;