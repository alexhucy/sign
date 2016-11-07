/**
 * Created by Alex on 2016/10/31.
 */

module.exports = {
	appid: 'wxd84a057c5ec212c9',
	appsecret: '83ab4fc43b334594d8124ab6439f9ff7',
	mchId: '1370367102',
	token: 'Taidii',
	partnerKey: 'fa7f290a56b7d6edaed2b74c261d0732',
	notifyUrl: 'http://tao.s1.natapp.cc',
	app_key: 'node_app',
	app_secret:'1234',
	domain: 'http://tao.s1.natapp.cc',
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