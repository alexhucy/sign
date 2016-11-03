/**
 * Created by Alex on 2016/10/31.
 */

module.exports = {
	appid: 'wx77025818d05fc144',
	appsecret: 'df9d2adcea9a29136c31ef0b3b496551',
	mchId: '1370367102',
	token: 'Taidii',
	notifyUrl: 'http://back.test.baoming.xingaokaowang.cn/order/wxpay/callback',
	app_key: 'node_app',
	app_secret:'1234',
	domain: 'http://edu.ngrok.chainz.net',
	logic: {
		host:'back.test.baoming.xingaokaowang.cn',
		port:'80',
		createUser:'/api/get-token',
		sign: '/signup/signup/',
		orderList: '/signup/signup/list/',
		orderInfo: '/signup/signup/{id}/order/',
		updateOrder: '/signup/signup/{id}',
		payInfo: '/signup/signup/{id}/pay/'
	},
	session_secret:'haojiaoyubaoming'
}