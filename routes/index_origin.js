/**
 * Created by Administrator on 2016/5/18 0018.
 */
// var express = require('express');
// var router = express.Router(); // 路由实例

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index',{title:'股票相关性'});  //渲染views里面的.ejs文件
// });
//上面这段代码的意思是：当访问主页时，调用ejs模板引擎，来渲染index.ejs模板文件
//（即将title变量全部替换为字符串），生成静态页面并显示在浏览器中。
// module.exports = router;

//用module导出一个函数接口
module.exports=function (app) {
    app.get('/',function (req,res) {
        res.render('index',{title:'股票相关性'})
    });
};
//生成一个路由实例用来捕获访问主页的GET请求，导出这个路由
//并在app.js中通过app.use('/',routes);加载。这样，当访问
//主页时，就会调用res.render('index',{title:'Express'});
// 渲染views/index.ejs模块并显示到浏览器中。



























