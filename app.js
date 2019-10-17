var express =require('express');
const path =require('path');
var bodyParser = require('body-parser');
const gasRoutes = require('./routes/gasusage');
const walletRoutes = require('./routes/wallet');
const transRoutes = require('./routes/trans');
const loginRoutes = require('./routes/login');
const session =require('express-session');
var MySQLStore = require('express-mysql-session')(session);


var options = {
    host: 'remotemysql.com',
    user: 'FRIO1AWmIB',
    password: 'U7onoB5Q20',
    database: 'FRIO1AWmIB'
};
var sessionStore = new MySQLStore(options);

var app = express();
app.set('view engine','ejs');
app.set('views','views');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname,'public')));
app.use(session({secret:'idk1icui4cujesuss1212axel#@.com',resave:false,store: sessionStore,saveUninitialized:false}));


app.use(gasRoutes);
app.use(walletRoutes);
app.use(transRoutes);
app.use(loginRoutes);

app.use((req,res,next)=>{
    res.status(404).send("<h1>Page not found</h1>");
});
app.listen(3000);