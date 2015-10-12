/**
 * Created by 董 on 2015/10/8.
 */
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var Cat = mongoose.model('Cat', { name: String });

var kitty = new Cat({ name: 'Zildjian22' });
kitty.save(function (err) {
    if (err) // ...
        console.log('meow');
});


Cat.find({name:"Zildjian22"},function(err,cats){
    if(err){
        return console.log(err);
    }
    console.log(cats);
})