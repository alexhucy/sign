/**
 * Created by Alex on 2016/10/31.
 */

module.exports = {
	appid: 'wxd84a057c5ec212c9',
	appsecret: '83ab4fc43b334594d8124ab6439f9ff7',
	mchId: '1370367102',
	notifyUrl: 'http://edu1.ngrok.taidii.com',
	app_key: 'node_app',
	app_secret:'1234',
	domain: 'http://edu1.ngrok.taidii.com',
	logic: {
		host:'192.168.1.105',
		port:'8000',
		createUser:'/api/get-token',
		sign: '/signup/signup/',
		orderList: '/signup/signup/list/',
		orderInfo: '/signup/signup/{id}/order/'
	},
	session_secret:'haojiaoyubaoming'
}