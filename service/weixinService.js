/**
 * Created by Alex on 2016/10/31.
 */

var wechatAPI = require('../common/weixin').wechatAPI,
		client = require('../common/weixin').client,
		payment = require('../common/weixin').payment,
		config = require('../config/config'),
		logger = require('../common/logger'),
		jwt = require('jsonwebtoken'),
		request = require('request'),
		http = require('http');


module.exports = {
	/**
	 * 移动端微信跳转页面
	 * @param redirect
	 * @param state
	 * @param scope
	 */
	getAuthorizeURL: function (redirect, state, scope) {
		return client.getAuthorizeURL(redirect, state, scope)
	},

	/**
	 * 根据参数获取微信jssdk配置信息
	 * @param param
	 * @param callback
	 */
	getJSConfig: function (param, callback) {
		wechatAPI.getJsConfig(param, function (err, result) {
			callback(err, result)
		});
	},
	
	/**
	 * 根据code获取用户信息(unionID机制)
	 * @param code
	 * @param callback
	 */
	getInfoFromWeixin: function (code, callback) {
		if(!code){
			 return callback('NoCode')
		}
		client.getUserByCode(code, function (err, result) {
			if (err === null || err === undefined || err === ''){
				wechatAPI.getUser(result.openid, function (err, result) {
					callback(err, result)
				})
			}
			else{
				callback(err, result)
			}
		})
	},

	/**
	 *var order = {
   *  "body": "吮指原味鸡 * 1",
   *  "attach": "{\"部位\":\"三角\"}",
   *  "out_trade_no": "kfc121342322",
   *  "total_fee": 100,
   *  "spbill_create_ip": "127.0.0.1",
   *  "openid": "127.0.0.1",
   *  "trade_type": "JSAPI"
   *}
	 * @param order
	 * @param callback
	 */
	pay: function (order, callback) {
		payment.getBrandWCPayRequestParams(order, function(err, payargs){
			callback(err, payargs)
		});
	},

	/**
	 * 生成token
	 * @returns {*}
	 */
	createToken: function () {
		return jwt.sign({app_key: config.app_key, time: Math.floor(Date.now()/1000), nonce: 'adgj'}, config.app_secret)
	},

	/**
	 * @params user
	 */
	getToken: function (user, callback) {
		var info = {}

		if(user && user.openid && user.nickname){
			info = {
				"openid" : user.openid,
				"nickname": user.nickname
			}
		}

		var postData = JSON.stringify(info)
		var options = {
			host: config.logic.host,
			port: config.logic.port,
			path: config.logic.createUser,
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Content-Length': postData.length
			}
		};

		var req = http.request(options, function (res) {
			var body = ''
			res.on('data', function (chunk) {
				body += chunk;
			}).on('end', function () {
				try{
					var data = JSON.parse(body);
				}
				catch (e){
					logger.error(e)
					return callback(e)
				}
				if (res.statusCode >= 200 && res.statusCode < 300) {
					callback(null, data.token)
				}
				else {
					logger.error(data)
					callback(data)
				}
			})
		});

		req.on('error', function (e) {
			logger.error(e)
			callback(e)
		});

		req.write(postData);
		req.end();
	},
	
	/**
	 * 提交报名信息
	 * @param info
	 */
	sign: function (info, callback) {
		var postData = JSON.stringify(info)
		var options = {
			host: config.logic.host,
			port: config.logic.port,
			path: config.logic.sign,
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Content-Length': Buffer.byteLength(postData,'utf8')
			}
		};
		var req = http.request(options, function (res) {
			var body = '';
			res.on('data', function (chunk) {
				body += chunk
			}).on('end', function () {
				try {
					var data = JSON.parse(body);
				}
				catch (e){
					logger.error(e)
					return callback(e)
				}
				if(res.statusCode >= 200 && res.statusCode <300) {
					callback(null, data)
				}
				else{
					console.log(data)
					callback(data)
				}
			})
		});
		
		req.on('error', function (e) {
			logger.error(e)
			callback(e)
		});
		
		req.write(postData);

		req.end();
	},


	/**
	 * 获取订单列表
	 */
	getOrderList: function (callback) {
		request('http://'+ config.logic.host + ':' + config.logic.port + config.logic.orderList, function (error, response, body) {
			if (!error && response.statusCode == 200) {
				try{
					callback(null, JSON.parse(body))
				}
				catch (e){
					callback(e)
				}
			}
			else {
				callback(error)
			}
		})
	},

	/**
	 * 获取单个订单信息
	 * @param id
	 * @param callback
	 */
	getOrder: function (id, callback) {
		request('http://'+ config.logic.host + ':' + config.logic.port + config.logic.orderInfo.replace('{id}', id), function (error, response, body) {
			if (!error && response.statusCode == 200) {
				try{
					callback(null, JSON.parse(body))
				}
				catch (e){
					callback(e)
				}
			}
			else {
				callback(error)
			}
		})
	}
}
