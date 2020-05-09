var mysql = require("mysql");


var connection;

if(process.env.JAWSDB_URL){
    connection = mysql.createConnection(process.env.JAWSDB_URL);
}else{mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "12345678",
    database: "burgers_db",

});



connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    // startFunction();

});

module.exports = connection;