/**
 * Created by Alex on 2016/10/31.
 */

var wxService = require('../service/weixinService'),
		config = require('../config/config'),
		logger = require('../common/logger'),
	  router = require('../router')

module.exports = {
	/**
	 * 报名首页
	 */
	index: function (req, res) {
		res.render('index')
	},

	/**
	 *报名
	 */
	register: function (req, res) {
		res.render('apply')
	},
	
	/**
	 *确认信息 
	 */
	confirm: function (req, res) {
		var data = {};
		var activity = {}
		if(req.session && req.session.data){
			data = req.session.data.signup_info
			activity = req.session.data.activity_info
			res.render('check',{data: data, activity: activity})
		}
		else{
			wxService.getOrder(req.params.id, function (err, body) {
				if(err === null || err === '' || err === undefined){
					data = body.signup_info;
					activity = body.activity_info;
					res.render('check',{data: data, activity: activity})
				}
				else{
					res.render('check',{data: data, activity: activity})
				}
			})
		}
	},
	
	/**
	 * 支付成功
	 */
	success: function (req, res) {
		res.render('registersuccess')
	},

	/**
	 * 产看订单
	 */
	order: function (req, res) {
		wxService.getOrderList(function (err, data) {
			if(err === null || err === '' || err === undefined){
				console.log(data)
				res.render('registration',{orders: data})
			}
			else{
				res.render('registration')
			}
		})
	},

	/**
	 * 报名form提交
	 */
	sign: function (req, res) {
		var data = req.body
		wxService.sign(data, function (err, data) {
			if(err === '' || err === null || err === undefined){
				req.session.data = data
				res.redirect('/order/' + data.signup_info.id)
			}
			else{
				res.redirect('/register')
			}
		})
	},
	
	/**
	 *获取jssdk配置信息
	 */
	getJSConfig: function (req, res) {
		var data = req.body;
		var param = {
			debug: data.debug || false,
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