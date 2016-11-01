/**
 * Created by Alex on 2016/10/31.
 */
var express = require('express'),
		router = express.Router(),
		oauth = require('./middleware/oauth'),
		weixin = require('./controller/weixin');

router.get('/', oauth, weixin.index)

router.post('/api/payment', weixin.pay)

router.post('/api/jsconfig', weixin.getJSConfig)

module.exports = router;