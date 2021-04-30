//load modules
const express = require('express');
var app=express();
var path=require('path');
var config=require('config');
var router=require('./routes/bookRouter');

//serving static pages using middleware
app.use(express.static(path.join(__dirname,'./public')));
app.use('/',router);

//from config
app.listen(process.env.PORT || config.get('app.port'),()=>{  
    console.log('server started at '+config.get('app.port'));
});