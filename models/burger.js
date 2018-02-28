var orm = require('../config/orm.js');

module.exports = function(){
// Find all the burgers.
orm.selectAll('burgers', function(results){
    var data = results;
    console.log(results);
});

// Insert one burger.
orm.insertOne('burgers',{burger_name:'Supreme burger',devoured:0})

// Update one burger
orm.updateOne('burgers', {burger_name:"Avocado burger2"}, {id:3})

}

