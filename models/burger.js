var orm = require('../config/orm.js');

var burgers = {
	selectAll: function(){
		orm.selectAll('burgers', function(res){
			res.render("index"), { burgers: res };
		});
	},
	insertOne: function(){
		orm.insertOne('burgers', function(res){
			(res);
		});
	},
	updateOne: function(){
		orm.updateOne('burgers', function(res){
			(res);
		});
	}
};

module.exports = burgers;

// app.get("/", function(req, res) {
//   connection.query("SELECT * FROM movies;", function(err, data) {
//     if (err) {
//       throw err;
//     }

//     res.render("index", { movies: data });

//   });
// });