var orm = require('../config/orm');


var burgers = {

    all: function (cb) {
        orm.selectAll('burgers', function (result) {
            cb(result);
            
        })
    },
    create: function(burg_name, eaten, cb){
        orm.insertBurger('burgers', 'burger_name', 'devoured', burg_name, eaten, function(result){
            cb(result);
        })
    },
    update: function(burgers, devoured, notEaten, burgerId, cb){
        orm.devourBurger('burgers', 'devoured', notEaten, burgerId)
    }
}

module.exports = burgers