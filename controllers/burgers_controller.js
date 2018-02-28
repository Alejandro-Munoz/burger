const express = require('express');
var burger = require('../models/burger');

var router = express.Router();

router.get('/all', function(req, res){
    console.log('get route');
    burger.selectAll(function(res){
        console.log(res);
    })
})



module.exports = router;