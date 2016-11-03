/**
 * Created by Alex on 2016/11/2.
 */

;(function () {
	var ajax = function (options) {
		var xhr = new XMLHttpRequest();
		//设置xhr请求的超时时间
		xhr.timeout = options.timeout || 10000;
		//设置响应返回的数据格式
		xhr.responseType = options.dataType || "json";
		xhr.open(options.method || 'GET', options.url, true);
		//注册相关事件回调处理函数
		xhr.onload = function(e) {
			if(this.status == 200||this.status == 304){
				options.success(this.response)
			}
		};
		xhr.ontimeout = function(e) {
			options.error(e)
		};
		xhr.onerror = function(e) {
			options.error(e)
		};
		//发送数据
		xhr.send(options.data);
	}

	ajax({
		url:'/signup/signup/list/',
		method:'GET',
		dataType:'json',
		success: function (data) {
			console.log(data)
		},
		error: function (e) {
			console.log(e)
		}
	})

})()