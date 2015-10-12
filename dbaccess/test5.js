/**
 * Created by 董 on 2015/10/12.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost/test');

var childSchema=new Schema({name:String});

var parentSchema=new Schema({
    children:[childSchema]
});

var Parent=mongoose.model("Parent",parentSchema);


Parent.find({_id:"561bb5082a13dce416f4d0ae"},function(err,items){
    var parent=items[0];
    var child_id=items[0].children[0]._id;
    var children=parent.children.id(child_id);
    console.log(children);
});


