
var index = require('./index');
var user  = require('./user');
var home = require('./home');
var express = require('express');
var test = require('./test');


module.exports= function(app){
	app.get('/',index.index);
//登录界面
	app.get('/login',user.checklogin);
	app.post('/login',user.login);
//登出界面
    app.get('/logout',user.logout);
//注册界面
    app.get('/reg',function (req,res){
    	 res.render('reg',{help3:''});
    });
	app.post('/reg',user.register);
//homepage
    app.get('/home',home.checklogin);
    //app.post('/home',home.home);
//盈亏界面
    app.get('/surplusDeficit',index.surplusDeficit);
    app.get('/test',test.test);
}