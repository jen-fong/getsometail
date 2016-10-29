var express = require('express');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');
var path = require('path');
var girlsController = require('./controllers/girls_controller');
var models = require('./models');

models.sequelize.sync().then(function() {
	console.log('successfully synced model!');
});

var app = express();
var hbs = exphbs.create({
	defaultLayout: 'main',
	helpers: {
		css: function() { return "../assets/css/style.css";},
		title: function() { return "Get Some Tail"}
	},
	partialDir: [
		'views/partials'
	]
});
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

var PORT = process.env.PORT || 8000;

app.use(express.static(__dirname + '/public'));

// girlsController(app);

app.listen(PORT, function() {
	console.log('connected on port ' + PORT);
});