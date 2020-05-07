

// will need to use the three methods below


//will display all of the options when the page loads.
// selectAll()


//will insert one new burger onto the non-devoured side
// insertOne()


//this one will update if a burger has been devoured 
// updateOne()

var connection = require('./connection')

var orm = {

    selectAll: function(burgers, cb){
        var queryString = 'SELECT * FROM ??';
        connection.query(queryString, [burgers],function(err, result){
            if(err) throw err;
            console.log(result)
            cb(result);
        })
    }
,
    insertBurger: function(burgers, burger_name, devoured, burg_name, eaten, cb){
        var queryString = 'INSERT INTO ?? (??, ??) VALUES (??, ??);';
        connection.query(queryString, [burgers, burger_name, devoured, burg_name, eaten], function(err, result){
            if(err) throw err;
            console.log(result)
            cb(result);
        })

    }
,
    devourBurger: function(burgers, devoured, notEaten, burgerId, cb){
        var queryString = 'UPDATE ?? SET ?? = ?? WHERE id = ??';
        connection.query(queryString, [burgers, devoured, notEaten, burgerId], function(err, result){
            if (err) throw err;
            console.log(result)
            cb(result);
        })

    }
};
orm.selectAll()
module.exports = orm;