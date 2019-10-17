const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'remotemysql.com',
    user: 'FRIO1AWmIB',
    password: 'U7onoB5Q20',
    database: 'FRIO1AWmIB'
});
exports.getLogin = function(req, res){

           res.render('Login');    
   
    
    };

exports.postLogin = function(req, res){
        req.session.isLoggedIn = true;
        res.redirect('/');    

 
 };