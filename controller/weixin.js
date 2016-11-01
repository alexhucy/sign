/**
 * Created by Alex on 2016/10/31.
 */

var wxService = require('../service/weixinService'),
		config = require('../config/config'),
		logger = require('../common/logger');

module.exports = {
	/**
	 * 报名首页
	 */
	index: function (req, res) {
		res.sendfile('./views/index.html')
	},
	
	/**
	 *获取jssdk配置信息
	 */
	getJSConfig: function (req, res) {
		var data = req.body;
		var param = {
			debug: data.debug,
			jsApiList: data.jsApiList,
			url: req.headers.referer
		};
		wxService.getJSConfig(param, function (err, result) {
			if(err === null || err ==='' || err === undefined){
				res.json(result)
			}
			else{
				res.json({'state': '10001','message':'参数错误'})
			}
		})
	},

	pay: function (req, res) {
		var order = req.body;
		console.log(req.body)
		wxService.pay(order, function (err, result) {
			 if(err){
				 res.json(err)
			 }
			 else{
				 res.json(result)
			 }
		})
	}
}