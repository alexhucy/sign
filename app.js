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
	  config = require('./config/config'),
		session = require('express-session'),
		cookieParser = require('cookie-parser'),
		RedisStore = require('connect-redis')(session),
		wechat = require('wechat');

app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname + ''));
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/static/',express.static(path.join(__dirname, '/public/')));
app.engine('html', require('ejs-mate'));
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'html');
app.use(cookieParser())
app.use(cookieParser(config.session_secret));

var options = {
	"host": "127.0.0.1",
	"port": "6379",
	"ttl": 60 * 60 * 24 * 30,   //Session的有效期为30天
};

app.use(session({
	store: new RedisStore(options),
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

app.use(function(err, req, res, next){
	var meta = '[' + new Date() + '] ' + req.url + '\n';
	logger.error(meta + err.stack + '\n')
	next();
});


server.listen(app.get('port'), function () {
	console.log('Express server listening on port ' + app.get('port'));
});