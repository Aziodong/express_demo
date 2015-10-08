var express = require('express');
//此插件实现文件上传
var multipart = require('connect-multiparty');
var multipartMiddleware = multipart();
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get("/ind",function(rq,res,next){
    res.send("你大爷");
});

router.get("/create",function(req,res){
    res.send("create user");
});
//文件上传测试
router.post("/formsub",multipartMiddleware,function(req,res){

    console.log(req.params);
    console.log(req.query);
    console.log(req.body);
    console.log(req.files);
    res.send();
})

module.exports = router;
