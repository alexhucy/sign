/**
 * Created by Alex on 2016/10/31.
 */

module.exports = {
	appid: 'wx77025818d05fc144',
	appsecret: 'df9d2adcea9a29136c31ef0b3b496551',
	mchId: '1370367102',
	token: 'Taidii',
	partnerKey: 'fa7f290a56b7d6edaed2b74c261d0732',
	notifyUrl: 'http://back.test.baoming.xingaokaowang.cn/order/wxpay/callback/',
	app_key: 'node_app',
	app_secret:'1234',
	domain: 'http://test.baoming.xingaokaowang.cn',
	logic: {
		host:'back.test.baoming.xingaokaowang.cn',
		port:'8000',
		createUser:'/api/get-token',
		sign: '/signup/signup/',
		orderList: '/signup/signup/list/',
		orderInfo: '/signup/signup/{id}/order/',
		updateOrder: '/signup/signup/{id}',
		payInfo: '/signup/signup/{id}/pay/'
	},
	session_secret:'haojiaoyubaoming'
}