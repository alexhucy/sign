/**
 * Created by Alex on 2016/10/31.
 */

var wechatAPI = require('../common/weixin').wechatAPI,
		client = require('../common/weixin').client,
		payment = require('../common/weixin').payment;


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
		console.log(payment)
		payment.getBrandWCPayRequestParams(order, function(err, payargs){
			callback(err, payargs)
		});
	}
}
