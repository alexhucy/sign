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
	  config = require('./config/config')
		session = require('express-session'),
		cookieParser = require('cookie-parser'),
		wechat = require('wechat');

app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname + ''));
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/static/',express.static(path.join(__dirname, '/src/')));
app.engine('html', require('ejs-mate'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');
app.use(cookieParser())
app.use(cookieParser(config.session_secret));

app.use(session({
	secret: config.session_secret,
	resave: false,
	saveUninitialized: false,
	cookie: { secure: false }
}))

app.use('/wechat/$', wechat(config, function (req, res, next) {
	
}));

app.use('/', routes);

app.get('*', function(req, res){
	res.render('404')
});

server.listen(app.get('port'), function () {
	console.log('Express server listening on port ' + app.get('port'));
});