var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //适用render方法返回响应结果，index来自views/index,第二个参数是绑定的对象
  res.render('index', { title: 'Express' });
});

//终端会输入router 1 ruoter2 讲究输出顺序
router.get("/test",function(req,res,next){
  console.log("router 1");
  next();
});
router.get("/test",function(req,res,next){
  console.log("router 2");
  next();
});
//.all表示处理所有HTTP请求,支持多个handler,.get/.post也支持多个handler,.use方法不支持多个handler
router.all("/test",function(req,res,next){
  console.log("router 3");
  next();
},function(req,res,next){
  res.send("完了")
});



module.exports = router;
