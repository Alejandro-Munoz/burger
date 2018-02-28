const connection = require('./connection.js');

var orm = {
    selectAll: function(table, cb){
        var queryString = 'SELECT * FROM ?? ';
        
        connection.query(queryString,table,function(err, results){
            // console.log(results);
            cb(results)
        })
    },
    insertOne: function(table, objBurger){
        var queryString = 'INSERT INTO ?? SET ? ';

        connection.query(queryString,[table,objBurger],
            function(err, results){
            if(err){
                console.log(err);
                throw err;
            }
            console.log('ok',results);
        })
    },
    updateOne: function(table, colVals,condition){
        var queryString = "UPDATE ?? SET ? WHERE ?";

        // queryString += " SET ";
        // // queryString += objToSql(objColVals);
        // queryString += ;
        
        // queryString += " WHERE ";
        // queryString += condition;

        console.log(queryString);
        connection.query(queryString,[table, colVals,condition], function(err, result) {
        if (err) {
            throw err;
        }
        console.log('updated',result);
        // cb(result);
        });
    }

}
// orm.selectAll('burgers');
// orm.insertOne('burgers', {burger_name:'Blue Cheese Burger', devoured:1});
// orm.updateOne({burger_name:'Bacon burger2'},{id:2})
module.exports = orm;
