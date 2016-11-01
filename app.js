/**
 * Created by Alex on 2016/10/31.
 */

var express = require('express'),
		app = express(),
		path = require('path'),
	  server = require('http').Server(app),
		routes = require('./router'),
		logger = require('./common/logger'),
		bodyParser = require('body-parser'),
	  cookieParser = require('cookie-parser');

app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname + ''));
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './src/')));
app.use(cookieParser())

app.use('/', routes);

server.listen(app.get('port'), function () {
	console.log('Express server listening on port ' + app.get('port'));
});