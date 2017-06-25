var orm = require('../config/orm.js');

var burgers = {
	selectAll: function(cb){
		orm.selectAll('burgers', function(res){
			cb(res)
		});
	},
	create: function(cols, vals, cb){
		orm.create('burgers', vals, cols, function(res) {
			cb(res);
		});
	},
	update: function(objColVals, condition, cb){
		orm.updateOne('burgers', objColVals, condition, function (res) {		
			cb(res);
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