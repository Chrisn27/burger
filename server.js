var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override')
var routes = require('./controller/burger_controller.js');

var port = process.env.PORT || 3000;

var app = express();

// process public as static html
app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({
	extended: false
}))

// Override for delete and put
app.use(methodOverride('_method'))

// Riding bikes with no handlebars - handlebar configuration
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({
    defaultLayout: 'main',
}));
app.set('view engine', 'handlebars');

app.use(routes);


app.listen(port);