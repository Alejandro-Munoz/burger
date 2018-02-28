const connection = require('./connection.js');

var orm = {
    selectAll: function(table){
        var queryString = 'SELECT * FROM ?? ';
        
        connection.query(queryString,table,function(err, results){
            console.log(results);
        })
    },
    insertOne: function(obj){
        var queryString = 'INSERT INTO burgers SET ? ';

        connection.query(queryString,[obj],
            function(err, results){
            if(err){
                console.log(err);
                throw err;
            }
            console.log('ok',results);
        })
    },
    updateOne: function(colVals,condition){
        var queryString = "UPDATE burgers SET ? WHERE ?";

        // queryString += " SET ";
        // // queryString += objToSql(objColVals);
        // queryString += ;
        
        // queryString += " WHERE ";
        // queryString += condition;

        console.log(queryString);
        connection.query(queryString,[colVals,condition], function(err, result) {
        if (err) {
            throw err;
        }
        console.log('updated',result);
        // cb(result);
        });
    }

}
// orm.selectAll('burgers');
// orm.insertOne({burger_name:'some name',devoured:0});
orm.updateOne({burger_name:'Bacon burger2'},{id:2})
module.exports = orm;
