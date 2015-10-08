/**
 * Created by 董 on 2015/10/8.
 */
//此中间件用于权限控制

var router=require("express").Router();

router.get("/create",function(req,res,next){
    if(req.query.name==="acuzio"){
        next();
    }else{
        res.send("error");
    }
})

module.exports=router;