/**
 * Created by Alex on 2016/10/31.
 */

module.exports = {
	appid: 'wx0ef00bb37bdf1ce7',
	appsecret: '511771339779ce2855af5dce8584b315',
	mchId: '1370367102',
	token: 'zhonglun',
	partnerKey: 'fa7f290a56b7d6edaed2b74c261d0732',
	notifyUrl: 'http://back.baoming.xingaokaowang.cn/order/wxpay/callback/',
	app_key: 'node_app',
	app_secret:'1234',
	domain: 'http://baoming.xingaokaowang.cn',
	logic: {
		host:'back.baoming.xingaokaowang.cn',
		port:'80',
		createUser:'/api/get-token',
		sign: '/signup/signup/',
		orderList: '/signup/signup/list/',
		orderInfo: '/signup/signup/{id}/order/',
		updateOrder: '/signup/signup/{id}',
		payInfo: '/signup/signup/{id}/pay/',
		commit: '/signup/signup/{id}/commit/'
	},
	session_secret:'haojiaoyubaoming'
}