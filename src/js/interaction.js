/**
 * Created by tao on 2016/10/31.
 */
/**
*多级联动插件
**/
$('#demo').citys({
	nodata:'hidden',
	required:true
})
$('#custom_data').cxSelect({
	selects: ['group','grade'],
	jsonName: 'value',
	jsonValue: 'name',
	jsonSub: 'sub',
	data: [
		{
			name:'小学低龄组',value: '小学低龄组',sub:[
			{
				name: '二年级',value: '二年级'
			},{
				name: '三年级',value: '三年级'
			}
		]
		},
		{
			name: '小学高龄组',value: '小学高龄组',sub:[
			{
				name:'四年级',value: '四年级'
			},
			{
				name:'五年级',value: '五年级'
			},
			{
				name:'六年级',value: '六年级'
			}
		]
		},
		{
			name: '初中组',value: '初中组',sub:[
			{
				name:'初一',value: '初一'
			},
			{
				name:'初二',value: '初二'
			},
			{
				name:'初三',value: '初三'
			}
		]
		},
		{
			name: '高中组',value: '高中组',sub:[
			{
				name:'高一',value: '高一'
			},
			{
				name:'高二',value: '高二'
			},
			{
				name:'高三',value: '高三'
			}
		]
		}
	]
})


/**
报名页表单验证
 改为JS原生操作,通过input上的onfocus,onblur传入this来使用
* */
function NameLenFocusOut(_this) {
	var name = _this.value;
	if (name == '') return
	else if(!(/^\S{1,32}$/.test(name))){
		_this.value = '';
		_this.classList.add('invalid');
		_this.setAttribute('placeholder','长度超过限制,请重新输入');
	}
}
function FocusIn(_this,sum1) {
	if (_this.classList == undefined) return
	_this.classList.remove('invalid');
	_this.setAttribute('placeholder',sum1);
	// $(this).removeClass('invalid');
	// $(this).attr('placeholder',data.data);
}
function change(_this) {
	_this.style.border = '0';
	_this.style.border = '1px solid #DCDCDC';
}
function NumLenFocusOut(_this) {
	var number = _this.value;
	if (number == '') return
	else if (!(/^1[34578]\d{9}$/.test(number))){
		_this.value = '';
		_this.classList.add('invalid');
		_this.setAttribute('placeholder','手机号码格式错误');
	}
}
function EmailFocusOut(_this) {
	var email = _this.value;
	if (email == '') return
	else if (!(/.+@.+\.[a-zA-Z]{2,4}$/.test(email))){
	  _this.value = '';
		_this.classList.add('invalid');
		_this.setAttribute('placeholder','邮箱格式错误');
	}
}
function SubmitContent(_this) {
	_this.classList.add('invalid');
	_this.setAttribute('placeholder','输入不能为空');
}
//封装的ByClassName和querySelectorAll


$('.bm-content form input[type="submit"]').on('click',function () {
	var name = $('.bm-content input').eq(0).val();     //参赛者姓名
	var school = $('.bm-content input').eq(1).val();     //学校
	var family = $('.bm-content input').eq(2).val();   //家长姓名
	var number = $('.bm-content input').eq(3).val();   //手机号
	var address = $('.bm-content input').eq(4).val();    //地址
	var email = $('.bm-content input').eq(5).val();    //邮箱
	var groupId = $('.bm-content select').eq(3).val();   //分组
	var gradeId = $('.bm-content select').eq(4).val();   //年级
	var province = $('.bm-content select').eq(0).val();//省
	var city = $('.bm-content select').eq(1).val();     //市
	var area = $('.bm-content select').eq(2).val();     //区

	if (name && family && number && email && school && address && groupId && gradeId&&province&&city){
		$('.bm-content form').submit()
	} else {
		if (!name){
			$('.bm-content input').eq(0).val('');
			$('.bm-content input').eq(0).addClass('invalid');
			$('.bm-content input').eq(0).attr('placeholder','输入不能为空');
		}
		if (!family){
			$('.bm-content input').eq(2).val('');
			$('.bm-content input').eq(2).addClass('invalid');
			$('.bm-content input').eq(2).attr('placeholder','输入不能为空');
		}
		if ($('.bm-content input[type="tel"]').hasClass('invalid')){
			$('.bm-content input').eq(3).attr('placeholder','手机号码格式错误');
		}else if (!number){
			$('.bm-content input').eq(3).val('');
			$('.bm-content input').eq(3).addClass('invalid');
			$('.bm-content input').eq(3).attr('placeholder','输入不能为空');
		}
		if ($('.bm-content input[type="email"]').hasClass('invalid')){
			$('.bm-content input').eq(3).attr('placeholder','邮箱格式错误');
		}else if (!email){
			$('.bm-content input').eq(5).val('');
			$('.bm-content input').eq(5).addClass('invalid');
			$('.bm-content input').eq(5).attr('placeholder','输入不能为空');
		}
		if (!address){
			$('.bm-content input').eq(4).val('');
			$('.bm-content input').eq(4).addClass('invalid');
			$('.bm-content input').eq(4).attr('placeholder','输入不能为空');
		}
		if (!school){
			$('.bm-content input').eq(1).val('');
			$('.bm-content input').eq(1).addClass('invalid');
			$('.bm-content input').eq(1).attr('placeholder','输入不能为空');
		}
		if (!groupId){
			$('.bm-content select').eq(3).css('border','1px solid red');
		}
		if (!gradeId){
			$('.bm-content select').eq(4).css('border','1px solid red');
		}
		if (!province){
			$('.bm-content select').eq(0).css('border','1px solid red');
		}
		if (!city){
			$('.bm-content select').eq(1).css('border','1px solid red');
		}
		if (!area){
			$('.bm-content select').eq(2).css('border','1px solid red');
		}
		return false
	}
	/*取分组信息的文字信息*/







})