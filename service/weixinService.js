/**
 * Created by Alex on 2016/10/31.
 */

var wechatAPI = require('../common/weixin').wechatAPI,
		client = require('../common/weixin').client,
		payment = require('../common/weixin').payment,
		config = require('../config/config'),
		logger = require('../common/logger'),
		jwt = require('jsonwebtoken'),
		remote = require('../common/remote');

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
				logger.error('getInfoFromWeixin:' + err)
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
				'Content-Length': Buffer.byteLength(postData,'utf8')
			}
		};

		remote.post(options, postData, callback)

	},
	
	/**
	 * 提交报名信息
	 * @param info
	 */
	sign: function (token, info, callback) {
		var postData = JSON.stringify(info)
		var options = {
			host: config.logic.host,
			port: config.logic.port,
			path: config.logic.sign,
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': token,
				'Content-Length': Buffer.byteLength(postData,'utf8')
			}
		};

		remote.post(options, postData, callback)
	},


	/**
	 * 获取订单列表
	 */
	getOrderList: function (token, callback) {
		var options = {
			url:'http://'+ config.logic.host + ':' + config.logic.port + config.logic.orderList,
			headers: {
				'Content-Type': 'application/json',
				'Authorization': token
			}
		};

		remote.get(options, callback)
	},


	/**
	 * 获取单个订单信息
	 * @param id
	 * @param callback
	 */
	getOrder: function (token, id, callback) {
		var options = {
			url: 'http://'+ config.logic.host + ':' + config.logic.port + config.logic.orderInfo.replace('{id}', id),
			headers: {
				'Content-Type': 'application/json',
				'Authorization': token
			}
		};
		remote.get(options, callback)
	},

	/**
	 * 更新订单信息
	 * @param id
	 * @param order
	 * @param callback
	 */
	updateOrder: function (token, id, order, callback) {
		var postData = JSON.stringify(order)
		var options = {
			host: config.logic.host,
			port: config.logic.port,
			path: config.logic.updateOrder.replace('{id}', id),
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': token,
				'Content-Length': Buffer.byteLength(postData,'utf8')
			}
		};
		remote.post(options, postData, callback)
	},

	/**
	 * 获取支付信息
	 * @param id
	 * @param callback
	 */
	getPayInfo: function (token, id, callback) {
		var options = {
			url: 'http://' + config.logic.host + ':' + config.logic.port + config.logic.payInfo.replace('{id}', id),
			headers: {
				'Content-Type': 'application/json',
				'Authorization': token
			}
		};
		remote.get(options, callback)
	}
}
