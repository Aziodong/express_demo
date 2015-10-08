var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');
var routertest=require('./routes/routertest');
var requesttest=require('./routes/requesttest');
var validate=require('./routes/validate');

//创建应用程序
var app = express();

/*
* app.set包含的属性：http://expressjs.com/4x/api.html#app.settings.table
* */
// view engine setup
//设置动态视图目录
app.set('views', path.join(__dirname, 'views'));
//设置模板引擎
app.set('view engine', 'ejs');

//设置环境开发模式/生产环境
app.set("env","development");

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
//加载中间件
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

//静态目录可以指定多个查找时会依次查找
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'book')));
//加载路由handler
app.use('/', routes);
//validate中间件可以帮助对/user下的一些数据做验证,实现权限控制
app.use('/users',validate);
app.use('/users', users);
app.use('/routertest',routertest);
app.use('/requesttest',requesttest);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
//开发模式，打印详细的错误信息
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
//生产模式，不会打印错误信息
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
