/**
 * Created by Alex on 2016/11/1.
 */

var config = require('../config/config'),
	API = require('wechat-api'),
	OAuth=require('wechat-oauth'),
	redis = require('redis'),
	Payment = require('wechat-pay').Payment,
	logger = require('./logger');
	initConfig = {
		appId: config.appid,
		mchId: config.mchId,
		notifyUrl: config.notifyUrl,
	};

exports.payment = new Payment(initConfig);

var redisClient = redis.createClient({
	retry_strategy: function (options) {
		if (options.total_retry_time > 1000*60*5) {
			return new Error('Retry time exhausted');
		}
		if (options.times_connected > 10) {
			return undefined;
		}
		return Math.max(options.attempt * 100, 3000);
	}
});

redisClient.on('error', function (err) {
	logger.error(err)
})

exports.client = new OAuth(config.appid, config.appsecret, function (unionId, callback) {
	redisClient.get('baoming_' + unionId + ':access_token', function (err, reply) {
		if(err){
			logger.error(err)
			return callback('500', reply)
		}
		callback(null, JSON.parse(reply));
	});
}, function (unionId, token, callback) {
	redisClient.set('baoming_' + unionId + ':access_token', JSON.stringify(token), function (err, reply) {
		if(err){
			logger.error(err)
			return callback('500', reply)
		}
		callback(null, reply);
		redisClient.expire('baoming_' + unionId +':access_token', 7200);
	});
});


exports.wechatAPI = new API(config.appid, config.appsecret, function (callback) {
	redisClient.get('baoming_access_token', function (err, reply) {
		if(err){
			logger.error(err)
			return callback('500', reply)
		}
		callback(null, JSON.parse(reply));
	});
}, function (token, callback) {
	redisClient.set('baoming_access_token', JSON.stringify(token), function (err, reply) {
		if(err){
			logger.error(err)
			return callback('500', reply)
		}
		callback(null, reply);
		redisClient.expire('baoming_access_token', 7200);
	});
})