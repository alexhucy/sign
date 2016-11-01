/**
 * Created by Alex on 2016/11/1.
 */

var wxService = require('../service/weixinService'),
		config = require('../config/config'),
		logger = require('../common/logger');

module.exports = function (req, res, next) {
	var code = req.query.code || '',
		  token = req.cookies.Authorization;
	if (token){
		next()
	}
	wxService.getInfoFromWeixin(code, function (err, result) {
		if(err) {
			res.redirect(wxService.getAuthorizeURL(config.domain + req.path,'', 'snsapi_userinfo'))
		}
		else if(result && result.subscribe) {
			next()
		}
		else{
			res.sendfile('./views/qrcode.html')
		}
	})
}