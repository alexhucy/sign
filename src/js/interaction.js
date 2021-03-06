/**
 * Created by tao on 2016/10/31.
 */
/**
*多级联动插件
**/



/**
报名页表单验证
 改为JS原生操作,通过input上的onfocus,onblur传入this来使用
* */
function NameLenFocusOut(_this) {
	var name = _this.value;
	if (name == '') return
	if(!(/^[\u4e00-\u9fa5_a-zA-Z\s]{1,32}$/.test(name))){
		_this.value = '';
		_this.classList.add('invalid');
		_this.setAttribute('placeholder','不能含数字和特殊字符');
	}
}
function FocusIn(_this,sum1) {
	if (_this.classList == undefined) return
	_this.classList.remove('invalid');
	_this.setAttribute('placeholder',sum1);
}
function change(_this) {
	_this.style.border = '0';
	_this.style.border = '1px solid #DCDCDC';
}
function EmailFocusOut(_this) {
	var email = _this.value;
	var reg = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i;
	if (email == '') return
	else if (!reg.test(email)){
		_this.value = '';
		_this.classList.add('invalid');
		_this.setAttribute('placeholder','邮箱格式错误');
	}
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
function SubmitContent(_this) {
	_this.classList.add('invalid');
	_this.setAttribute('placeholder','输入不能为空');
}
//封装的ByClassName和querySelectorAll
function SelectChange(num) {
	var province = $('.bm-content select').eq(num).find('option:checked').text();//省
	$('.bm-content select').eq(num).find('option:checked').val(province)
}
$('.bm-content form input[type="submit"]').on('click',function () {
	var reg = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i;

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

		if (name!= '' && family!='' && number!='' && email!='' && school!='' && address!='' && groupId!='' && gradeId!=''&&province!=''&&city!=''){
			if (!(/^[\u4e00-\u9fa5_a-zA-Z\s]{1,32}$/.test(family))) {
				$('.bm-content input').eq(2).val('');
				$('.bm-content input').eq(2).addClass('invalid');
				$('.bm-content input').eq(2).attr('placeholder', '不能含数字和特殊字符');
				return false
			}
			if (!(/^[\u4e00-\u9fa5_a-zA-Z\s]{1,32}$/.test(name))) {
				$('.bm-content input').eq(0).val('');
				$('.bm-content input').eq(0).addClass('invalid');
				$('.bm-content input').eq(0).attr('placeholder', '不能含数字和特殊字符');
				return false
			}
			if (!(/^1[34578]\d{9}$/.test(number))) {
				$('.bm-content input').eq(3).val('');
				$('.bm-content input').eq(3).addClass('invalid');
				$('.bm-content input').eq(3).attr('placeholder', '手机号码格式错误');
				return false
			}
			if ( !reg.test(email)) {
				$('.bm-content input').eq(5).val('');
				$('.bm-content input').eq(5).addClass('invalid');
				$('.bm-content input').eq(5).attr('placeholder', '邮箱格式错误');
				return false
			}
			SelectChange(0)
			SelectChange(1)
			SelectChange(2)
			SelectChange(3)
			SelectChange(4)
			if ($('.bm-content select').eq(2).find('option:checked').val() == '选择县'){
				$('.bm-content select').eq(2).find('option:checked').val('')
			}
		$('.bm-content form').submit()
	} else {
		if (name == ''){
			if ($('.bm-content input').eq(0).attr('placeholder') == '不能含数字和特殊字符') {

			}else {
				$('.bm-content input').eq(0).val('');
				$('.bm-content input').eq(0).addClass('invalid');
				$('.bm-content input').eq(0).attr('placeholder','输入不能为空');
			}
		}else if(!(/^[\u4e00-\u9fa5_a-zA-Z\s]{1,32}$/.test(name))){
			$('.bm-content input').eq(0).val('');
			$('.bm-content input').eq(0).addClass('invalid');
			$('.bm-content input').eq(0).attr('placeholder','不能含数字和特殊字符');
		}
		if (family == ''){
			if ($('.bm-content input').eq(2).attr('placeholder') == '不能含数字和特殊字符') {

			}else {
				$('.bm-content input').eq(2).val('');
				$('.bm-content input').eq(2).addClass('invalid');
				$('.bm-content input').eq(2).attr('placeholder', '输入不能为空');
			}
		} else if(!(/^[\u4e00-\u9fa5_a-zA-Z\s]{1,32}$/.test(family))){
			$('.bm-content input').eq(2).val('');
			$('.bm-content input').eq(2).addClass('invalid');
			$('.bm-content input').eq(2).attr('placeholder','不能含数字和特殊字符');
		}
		if (number == ''){
			if ($('.bm-content input').eq(3).attr('placeholder') == '手机号码格式错误'){

			}else {
				$('.bm-content input').eq(3).val('');
				$('.bm-content input').eq(3).addClass('invalid');
				$('.bm-content input').eq(3).attr('placeholder', '输入不能为空');
			}
		}else if (!(/^1[34578]\d{9}$/.test(number))){
			$('.bm-content input').eq(3).val('');
			$('.bm-content input').eq(3).addClass('invalid');
			$('.bm-content input').eq(3).attr('placeholder','手机号码格式错误');
		}
		if (email == '') {
			if ($('.bm-content input').eq(5).attr('placeholder') == '邮箱格式错误') {

			} else {

				$('.bm-content input').eq(5).val('');
				$('.bm-content input').eq(5).addClass('invalid');
				$('.bm-content input').eq(5).attr('placeholder', '输入不能为空');
			}
		} else if (!(/.+@.+\.[a-zA-Z]{2,4}$/.test(email))){
			$('.bm-content input').eq(5).val('');
			$('.bm-content input').eq(5).addClass('invalid');
			$('.bm-content input').eq(5).attr('placeholder','邮箱格式错误');
		}
		if (address == ''){
			$('.bm-content input').eq(4).val('');
			$('.bm-content input').eq(4).addClass('invalid');
			$('.bm-content input').eq(4).attr('placeholder','输入不能为空');
		}
		if (school == ''){
			$('.bm-content input').eq(1).val('');
			$('.bm-content input').eq(1).addClass('invalid');
			$('.bm-content input').eq(1).attr('placeholder','输入不能为空');
		}
		if (groupId == ''){
			$('.bm-content select').eq(3).css('border','1px solid red');
		}
		if (gradeId == ''){
			$('.bm-content select').eq(4).css('border','1px solid red');
		}
		if (province == ''){
			$('.bm-content select').eq(0).css('border','1px solid red');
		}
		if (city == ''){
			$('.bm-content select').eq(1).css('border','1px solid red');
		}
		if (area == ''){
			$('.bm-content select').eq(2).css('border','1px solid red');
		}
		return false
	}
	/*取分组信息的文字信息*/







})