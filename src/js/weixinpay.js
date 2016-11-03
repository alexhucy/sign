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
		url:'/api/jsconfig',
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
			url:'/api/getOrder/'+id,
			dataType:'json',
			method: 'GET',
			success: function (data) {
					wx.chooseWXPay({
						timestamp: 0, // 支付签名时间戳，注意微信jssdk中的所有使用timestamp字段均为小写。但最新版的支付后台生成签名使用的timeStamp字段名需大写其中的S字符
						nonceStr: '', // 支付签名随机串，不长于 32 位
						package: '', // 统一支付接口返回的prepay_id参数值，提交格式如：prepay_id=***）
						signType: '', // 签名方式，默认为'SHA1'，使用新版支付需传入'MD5'
						paySign: '', // 支付签名
						success: function (res) {
							// 支付成功后的回调函数
						}
					});
				}
		})

	})
})()
