/**
 * Created by 董 on 2015/10/8.
 */
var express = require('express');
var router = express.Router();
/*
* 一个express.Router 对象，可以理解为是一个独立的 mini app，它也可以调用use方法加入中间件，但只作用于自身。
* 可选参数对象有两个可选值，caseSensitive 区分大小写，例如/Foo 和 /foo ，默认false关闭。strict 严格路由，例如 /foo 和 /foo/ ，默认false关闭。
* */

router.get("/",function(req,res,next){
    res.send("SSSAS");
});

/*
* 泛式路由
* /user/:id     user/id
* /user/:id?    /user或者user/id
* /user/*       /user或者user/id
* */
// /user/*/id?  /user或者user/id001或者user/xxx/id001
// /user/*/:id  user/id001或者user/xxx/id001

//正则表达式路由
router.get(/^\/commits\/(\w+)(?:\.\.(\w+))?$/,function(req,res){
    var from=req.params[0];
    var to=req.params[1];
    console.log(from);
    console.log(to);
    res.send();
})


module.exports=router;
