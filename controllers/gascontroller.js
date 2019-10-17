const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'remotemysql.com',
    user: 'FRIO1AWmIB',
    password: 'U7onoB5Q20',
    database: 'FRIO1AWmIB'
});
exports.gasusage = function(req, res){
    var sql="SELECT * FROM Infos ORDER BY infoId DESC LIMIT 1;";
    connection.query(sql, (err,rows,fields) => {
        if(err){
            return console.log("Error acquired:",err);
    }//
    console.log(rows);
           res.render('GasUsage',{weight:rows});    
    });
    
    };