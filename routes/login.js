var express =require('express');
const loginController = require('../controllers/logincontroller')
const path =require('path');
var router =express.Router();

router.get('/login',loginController.getLogin);
router.post('/login',loginController.postLogin);

module.exports = router;