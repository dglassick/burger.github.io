

// will need to use the three methods below


//will display all of the options when the page loads.
// selectAll()


//will insert one new burger onto the non-devoured side
// insertOne()


//this one will update if a burger has been devoured 
// updateOne()

var connection = require('./connection')

function objToSql(ob) {
    var arr = [];
  
    // loop through the keys and push the key/value as a string int arr
    for (var key in ob) {
      var value = ob[key];
      // check to skip hidden properties
      if (Object.hasOwnProperty.call(ob, key)) {
        // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
        if (typeof value === "string" && value.indexOf(" ") >= 0) {
          value = "'" + value + "'";
        }
        // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
        // e.g. {sleepy: true} => ["sleepy=true"]
        arr.push(key + "=" + value);
      }
    }
  
    // translate array of strings to a single comma-separated string
    return arr.toString();
  }



var orm = {

    selectAll: function(burgers, cb){
        var queryString = 'SELECT * FROM ??;';
        connection.query(queryString, [burgers],function(err, result){
            if(err) throw err;
            // console.log(result)
            cb(result);
        })
    }
,
    insertBurger: function(burger_name, devoured, cb){
        var queryString = `INSERT INTO burgers (burger_name, devoured) VALUES ('${burger_name}', ${devoured})`;
        connection.query(queryString, function(err, result){
            if(err) throw err;
            console.log(result)
            cb(result);
        })

    }
,
    devourBurger: function(table, columnValues, condition, cb){
        var queryString = `UPDATE ${table} SET ${objToSql(columnValues)} WHERE ${condition}`;
        connection.query(queryString, function(err, result){
            if (err) throw err;
            console.log(result)
            cb(result);
        })

    }
};

module.exports = orm;