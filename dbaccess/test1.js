/**
 * Created by 董 on 2015/10/8.
 */
var mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/test');


var Schema=mongoose.Schema;

var blogSchema=new Schema({
    title:String,
    author:String,
    body:String,
    comments:[{body:String,date:Date}],
    date:{type:Date,default:Date.now},
    hidden:Boolean,
    meta:{
        votes:Number,
        favs:Number
    }
});

var Blog=mongoose.model('Blog',blogSchema);