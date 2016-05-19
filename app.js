var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var routes = require('./routes/index');
// var settings = require('./node_modules/settings');
var flash = require('connect-flash')
var db = require('./node_modules/dao/db');
// var users = require('./routes/users');
var session = require('express-session');
var mysqlStore = require('connect-mysql')(session);

var app = express();  //生成一个express实例app

app.set('port',process.env.PORT || 4000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(flash());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser('An'));
app.use(session({
  secret: 'an',
  resave: false,
  saveUninitialized:true
}));

app.use(express.static(path.join(__dirname, 'public')));

routes(app);

app.listen(app.get('port'),function(){
  console.log('BKLD_express server listening on port' + app.get('port'));
});

app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

module.exports = app;












































