!function(){var e=function(e){var n=new XMLHttpRequest;n.timeout=e.timeout||1e4,n.responseType=e.dataType||"json",n.open(e.method||"GET",e.url,!0),n.onload=function(n){200!=this.status&&304!=this.status||e.success(this.response)},n.ontimeout=function(n){e.error(n)},n.onerror=function(n){e.error(n)},n.send(e.data)};e({url:"/wechat/api/jsconfig",dataType:"json",method:"POST",success:function(e){wx.config(e)},error:function(e){console.log(e)}}),document.getElementById("pay")&&document.getElementById("pay").addEventListener("click",function(){var n=document.getElementById("pay").getAttribute("origin");e({url:"/wechat/api/getOrder/"+n,dataType:"json",method:"GET",success:function(e){e.success=function(){window.location.href="/success"},wx.chooseWXPay(e)},error:function(e){}})}),wx.ready(function(){wx.onMenuShareTimeline({imgUrl:"http://test.baoming.xingaokaowang.cn/images/share.jpg"}),wx.onMenuShareAppMessage({imgUrl:"http://test.baoming.xingaokaowang.cn/images/share.jpg"})})}();