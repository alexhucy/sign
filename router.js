/**
 * Created by Alex on 2016/10/31.
 */
var express = require('express'),
		router = express.Router(),
		oauth = require('./middleware/oauth'),
		weixin = require('./controller/weixin');

router.get('/', oauth, weixin.index)

router.post('/api/payment', weixin.pay)

router.get('/register', weixin.register)

router.post('/api/jsconfig', weixin.getJSConfig)

router.get('/order', weixin.order)

router.get('/order/:id', weixin.confirm)

router.get('/success', weixin.success)

router.post('/sign', weixin.sign)

router.post('/test', function (req, res) {
	console.log(req)
})
module.exports = router;