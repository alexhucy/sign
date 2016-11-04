/**
 * Created by Alex on 2016/10/31.
 */
var express = require('express'),
		router = express.Router(),
		oauth = require('./middleware/oauth'),
		weixin = require('./controller/weixin');

router.get('/', oauth, weixin.index);

router.get('/register', oauth, weixin.register);

router.post('/wechat/api/jsconfig', weixin.getJSConfig);

router.get('/order', oauth, weixin.order);

router.get('/order/:id', oauth, weixin.confirm);

router.get('/order/:id/edit', oauth, weixin.orderEdit);

router.post('/order/:id/update', weixin.orderUpdate)

router.get('/success', oauth, weixin.success);

router.post('/sign', weixin.sign);

router.get('/wechat/api/getOrder/:id',  weixin.pay);

module.exports = router;