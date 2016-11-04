/**
 * Created by Alex on 2016/10/31.
 */

module.exports = {
	appid: 'wxd84a057c5ec212c9',
	appsecret: '83ab4fc43b334594d8124ab6439f9ff7',
	mchId: '1370367102',
	// notifyUrl: 'http://bestyiwan.s1.natapp.cc',
	notifyUrl: ' http://edu1.tunnel.qydev.com',
	app_key: 'node_app',
	app_secret:'1234',
	// domain: 'http://bestyiwan.s1.natapp.cc',
	domain: 'http://edu1.tunnel.qydev.com',
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