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
		return next()
	}
	wxService.getInfoFromWeixin(code, function (err, result) {
		if(err) {
			res.redirect(wxService.getAuthorizeURL(config.domain + req.path,'', 'snsapi_userinfo'))
			// res.sendfile('./views/index.html')
		}
		else if(result && result.subscribe) {
			wxService.getToken(result, function (err, data) {
				if(err === null || err === '' || err === undefined){
					res.cookie('Authorization', 'JWT ' + data.token)
					return next()
				}
				else{
					res.write('403');
					res.end()
				}
			})
		}
		else{
			res.sendfile('./views/qrcode.html')
		}
	})
}