/**
 * Created by Alex on 2016/10/31.
 */

module.exports = {
	appid: 'wxc3378269c5fd45a7',
	appsecret: '5019a6f743905ac296df161fba2a7c4a',
	mchId: '1370367102',
	token: 'Taidii',
	notifyUrl: 'http://edu.ngrok.chainz.net ',
	app_key: 'node_app',
	app_secret:'1234',
	domain: 'http://edu.ngrok.chainz.net',
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