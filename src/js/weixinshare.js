/**
 * Created by Alex on 2016/11/7.
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


	var obj = {
		jsApiList:['onMenuShareTimeline', 'onMenuShareAppMessage']
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

	wx.ready(function(){
		wx.onMenuShareTimeline({
			title: '', // 分享标题
			desc: '', // 分享描述
			link: '', // 分享链接
			imgUrl: 'http://edu.ngrok.chainz.net/static/images/share.jpg', // 分享图标
			type: '', // 分享类型,music、video或link，不填默认为link
			dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
			success: function () {
				// 用户确认分享后执行的回调函数
			},
			cancel: function () {
				// 用户取消分享后执行的回调函数
			}
		})

		wx.onMenuShareAppMessage({
			imgUrl: 'http://edu.ngrok.chainz.net/static/images/share.jpg'
		})
	});
})()
