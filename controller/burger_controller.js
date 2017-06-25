var express = require('express');
var router = express.Router();

var burgers = require('../models/burger.js');

router.get('/', function (req, res) {
    burgers.selectAll(function (data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/", function (req, res) {
    burgers.create([
        "burger_name"
    ], [
            req.body.bname,
        ], function () {
            res.redirect("/");
        });
});

router.put("/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  burgers.update({
    devoured: req.body.devoured
  }, condition, function() {
    res.redirect("/");
  });
});

module.exports = router;