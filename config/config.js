/**
 * Created by Alex on 2016/10/31.
 */
if (process.env.NODE_ENV  !== 'production'){
	module.exports = require('./config.dev')
}
else{
	module.exports = require('./config.prod')
}