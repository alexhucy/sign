/**
 * Created by Alex on 2016/11/1.
 */

;(function () {


	/**
	 * ajax封装
	 * @param options {url, data, method, dataType, timeout, success, error}
	 */
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

	var obj = {
		jsApiList:['chooseWXPay']
	}


	ajax({
		url:'/wechat/api/jsconfig',
		data: JSON.stringify(obj),
		dataType:'json',
		method: 'POST',
		success: function (data) {
			wx.config(data)
		},
		error: function (e) {
			console.log(e)
		}
	})

	
	document.getElementById('pay').addEventListener('click', function () {
		var id = document.getElementById('pay').getAttribute('origin')
		ajax({
			url:'/wechat/api/getOrder/'+id,
			dataType:'json',
			method: 'GET',
			success: function (data) {
				 data.success = function () {
					 window.location.href='/success'
				 }
					wx.chooseWXPay(data);
				},
			error: function (e) {

			}
		})
	})
	
})()
