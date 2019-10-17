var express =require('express');
const gasController = require('../controllers/gascontroller')
const path =require('path');
var router =express.Router();

router.get('/',gasController.gasusage);

module.exports = router;