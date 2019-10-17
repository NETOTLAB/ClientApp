const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'remotemysql.com',
    user: 'FRIO1AWmIB',
    password: 'U7onoB5Q20',
    database: 'FRIO1AWmIB'
});
exports.wallet = function(req, res){

           res.render('Wallet');    
    
    
    };