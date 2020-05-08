var express = require('express');
var router = express.Router();

//import the model/burger.js
var burger = require('../models/burger');

router.get('/', function(req, res){
    burger.all(function(data){
        var burgObject = {
            burgers:data
        }
        // console.log(burgObject);
        res.render('index', burgObject)
    })
})

router.post('/api/burgers', function(req, res){
    console.log("route was hit", req.body)
    burger.create(req.body.burger_name, req.body.devoured, function(result){
        console.log('burger posted')
        res.json({id:result.insertId})
    })
})

router.put('/api/burgers/:id', function( req, res){
    var condition = `id = ${req.params.id}`;
    console.log(condition)
    
    burger.update({devoured: req.body.devoured}, condition, function(result){
        if(result.changedRow == 0){
            return res.status(404).end();
        }else{
            res.status(200).end()
        }
    })
})
module.exports = router