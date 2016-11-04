/**
 * Created by Alex on 2016/10/31.
 */

var wxService = require('../service/weixinService'),
		logger = require('../common/logger');

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
		var data = {};
		var error = '';
		if(req.session.data){
			data = req.session.data
			error = req.session.error
		}
		res.render('apply', {data: data})
	},
	
	/**
	 *确认信息 
	 */
	confirm: function (req, res) {
		var data = {};
		var activity = {};
		if(req.session && req.session.data){
			data = req.session.data.signup_info;
			activity = req.session.data.activity_info;
			delete req.session.data;
			res.render('check',{data: data, activity: activity})
		}
		else{
			wxService.getOrder(req.cookies.Authorization, req.params.id, function (err, body) {
				if(err === null || err === '' || err === undefined){
					data = body.signup_info;
					activity = body.activity_info;
					res.render('check',{data: data, activity: activity})
				}
				else{
					res.redirect('/404')
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
	 * 产看订单列表
	 */
	order: function (req, res) {
		wxService.getOrderList(req.cookies.Authorization, function (err, data) {
			if(err === null || err === '' || err === undefined){
				res.render('registration',{orders: data})
			}
			else{
				res.redirect('/404')
			}
		})
	},

	/**
	 * 编辑订单信息
	 */
	orderEdit: function (req, res) {
		var data = {};
		wxService.getOrder(req.cookies.Authorization, req.params.id, function (err, body) {
			if(err === null || err === '' || err === undefined){
				data = body.signup_info;
				res.render('edit',{data: data})
			}
			else{
				res.redirect('/404')
			}
		})
	},
	
	/**
	 * 更新订单信息
	 */
	orderUpdate: function (req, res) {
		var order = req.body;
		wxService.updateOrder(req.cookies.Authorization, req.params.id, order, function (err, data) {
			if(err === null || err === undefined || err === ''){
				req.session.data = data
				res.redirect('/order/' + order.id)
			}
			else{
				res.redirect('/edit/' + order.id)
			}
		})
		
	},
	
	/**
	 * 报名form提交
	 */
	sign: function (req, res,data) {
		var data = req.body
		wxService.sign(req.cookies.Authorization, data, function (err, data) {
			if(err === '' || err === null || err === undefined){
				req.session.data = data
				res.redirect('/order/' + data.signup_info.id)
			}
			else{
				req.session.data = data
				req.session.error = err
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
		wxService.getPayInfo(req.cookies.Authorization, req.params.id, function (err, data) {
			if(err === null || err === '' || err === undefined ){
				wxService.pay(data, function (err, result) {
					console.log(err)
					console.log(result)
					if(err){
						res.json(err)
					}
					else{
						res.json(result)
					}
				})
			}
			else{
				res.json(err)
			}
		})

	}
}