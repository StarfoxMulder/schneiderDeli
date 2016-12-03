var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var models = require('./models');

models.sequelize.sync();

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(__dirname + '/public'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
	extended: false
}));

// override with POST having ?_method=DELETE
app.use(methodOverride('_method'));
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({
	defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

var router = require('./controllers/controller.js');
app.use('/', router);
app.use('/insertOne', router);
app.use('/updateOne', router);
app.use('/deleteOne', router);


var port = process.env.PORT || 3000;
app.listen(port, function () {
	console.log('Listening on PORT ' + port);
});
