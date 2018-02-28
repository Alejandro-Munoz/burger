const express = require('express');
var burger = require('../models/burger');

var router = express.Router();

router.get('/all', function(req, res){
    console.log('get route');
    burger.selectAll(function(data){
        var hbsObject = {
            burgers: data
          };
          console.log(hbsObject);
          res.render("index", hbsObject);
    })
})



module.exports = router;