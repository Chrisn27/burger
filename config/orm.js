var connection = require('../config/connection.js');
var myql = require('mysql');

var orm = {
	selectAll: function(tableInput, cb){
		var queryString = 'SELECT * FROM burgers';

		connection.query(queryString, function(err, result){
			if(err) throw err;
			return result;
		});
	},

    insertOne: function () {

    },
    updateOne: function () {

    }
};

module.exports = orm;

// app.get("/", function(req, res) {
//   connection.query("SELECT * FROM movies;", function(err, data) {
//     if (err) {
//       throw err;
//     }

//     res.render("index", { movies: data });

//   });
// });