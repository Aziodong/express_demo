/**
 * Created by 董 on 2015/10/12.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost/test');

var blogSchema = new Schema({
    title:  String,
    author: String,
    body:   String,
    comments: [{ body: String, date: Date }],
    date: { type: Date, default: Date.now },
    hidden: Boolean,
    meta: {
        votes: Number,
        favs:  Number
    }
});

var Blog=mongoose.model("Blogs",blogSchema);

var post=new Blog({
    title:"王二狗",
    author:"小明",
    body:"今天天气不错"
});

post.save();

Blog.find({},function(err,blogs){
    console.log(blogs);
})