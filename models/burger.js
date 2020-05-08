var orm = require('../config/orm');


var burger = {

    all: function (cb) {
        orm.selectAll('burgers', function (result) {
            // console.log(result)
            cb(result);
            
        })
    },
    create: function(burger_name, devoured, cb){
        orm.insertBurger( burger_name, devoured, function(result){
            cb(result);
        })
    },
    update: function(columnValues, condition, cb){
        orm.devourBurger('burgers', columnValues, condition, function(result){
            cb(result)
        })
    }
}

module.exports = burger