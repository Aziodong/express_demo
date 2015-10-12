/**
 * Created by 董 on 2015/10/12.
 */
var mongoose = require('mongoose');
var Schema=mongoose.Schema;
mongoose.connect('mongodb://localhost/test');

var CatSchema=new Schema({name:String,age:Number});

CatSchema.methods.changeName=function(){
    console.log(this);
}

var Cat=mongoose.model("Cat",CatSchema);

var kitty=new Cat({name:"acuzio",age:22});

kitty.changeName();

kitty.save(function(err){
    console.log(err);
})

