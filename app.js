var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require("mongoose");
var session = require("express-session");


var index = require('./routes/index');
var users = require('./routes/users');

var app = express();

app.set('view engine', 'html')
app.set('views', 'views')
app.engine('html', require('ejs').renderFile);

app.use(express.static('public'));
app.use(express.static('views'));

app.use(session({
    secret:'@#@$MYSIGN#@$#$',
    resave: false,
    saveUninitialized:true
}));


app.use(bodyParser.urlencoded({extended:false}));


app.listen(3000,function(){
    console.log("Port 3000 Connection");
});
