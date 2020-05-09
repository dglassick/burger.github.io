var mysql = require("mysql");


var connection;

if(process.env.JAWSDB_URL){
    connection = mysql.createConnection(process.env.JAWSDB_URL);
}else{mysql.createConnection({
    host: "l3855uft9zao23e2.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "n44plfg573zrvzs4",

    // Your password
    password: "ub0sf4n7k8o1ch2x",
    database: "xn6i7yjo689la5yv",

})
};



connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    // startFunction();

});

module.exports = connection;