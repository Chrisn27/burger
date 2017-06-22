var express = require('express');
var router = express.Router();
var burgers = require('../models/burger.js');

router.get('/', function(req, res){
    res.redirect('burgers');
});

router.get('/burgers', function(req, res){
	burgers.selectAll(function(data){
        
        var burgerObject = {burgers: data};
        console.log(burgerObject);
        res.render('index', burgerObject);
     
	});
});

module.exports = router;