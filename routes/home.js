var dbConnect=require('../node_modules/dao/db');
var express = require('express');

exports.checklogin = function(req,res){
  if(req.session.islogin){
    res.locals.islogin=req.session.islogin;
  }
  if(req.cookies.islogin){
    req.session.islogin=req.cookies.islogin;
   res.render('home',{user:res.locals.islogin}); 
   
  }
  else  res.redirect('login');
}

exports.home = function (req,res){

	   
}