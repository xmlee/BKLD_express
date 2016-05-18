var express = require('express');
var router = express.Router(); // 路由实例

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('jiemian',{title:'股票相关性分析'});  //渲染views里面的.ejs文件
});

module.exports = router;

//生成一个路由实例用来捕获访问主页的GET请求，导出这个路由
//并在app.js中通过app.use('/',routes);加载。这样，当访问
//主页时，就会调用res.render('index',{title:'Express'});
// 渲染views/index.ejs模块并显示到浏览器中。



























