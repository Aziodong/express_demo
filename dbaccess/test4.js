/**
 * Created by 董 on 2015/10/12.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost/test');

var PersonSchema=new Schema({
    firstName:String,
    lastName:String
});

PersonSchema.virtual("fullname").get(function(){
    return this.firstName+"."+this.lastName;
});

PersonSchema.virtual("fullname").set(function(fullname){
    var rs=fullname.split(".");
    this.firstName=rs[0];
    this.lastName=rs[1];
})

var User=mongoose.model("User",PersonSchema);

var user=new User({
    firstName:"Acuzio",
    lastName:"Dong"
});

console.log(user.fullname);
