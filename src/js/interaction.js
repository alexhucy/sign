/**
 * Created by tao on 2016/10/31.
 */
/**
*多级联动插件
**/

$('#demo').citys({
	dataUrl:"http://7xj2zq.com1.z0.glb.clouddn.com/city-list.json",
	provinceField:'province_name', //省份字段名
	cityField:'city_name',         //城市字段名
	areaField:'district_name',         //地区字段名
	nodata:'disable',
	required: false
})
$('#custom_data').grade({
	dataUrl:"/static/js/grade.json",
	provinceField:'grade_name',
	cityField:'class_name',
	nodata:'disable',
	required: false
})

/**
报名页表单验证
 改为JS原生操作,通过input上的onfocus,onblur传入this来使用
* */
function NameLenFocusOut(_this) {
	var name = _this.value;
	if (name == '') return
	else if (!(/^\D+$/.test(name))) {
		_this.value = '';
		_this.classList.add('invalid');
		_this.setAttribute('placeholder','名字不能有数字');
		return
	}
	else if(!(/^[\u4e00-\u9fa5_a-zA-Z\s]{1,32}$/.test(name))){
		_this.value = '';
		_this.classList.add('invalid');
		_this.setAttribute('placeholder','长度超过限制,请重新输入');
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
	debugger
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
debugger
	if (name || family || number || email) {
		var reg = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i;
		if (!(/^\D+$/.test(name))) {
			if (name == ''){
				return false
			}
			$('.bm-content input').eq(0).val('');
			$('.bm-content input').eq(0).addClass('invalid');
			$('.bm-content input').eq(0).attr('placeholder', '名字不能有数字');
			return false
		} else if (!(/^[\u4e00-\u9fa5_a-zA-Z\s]{1,32}$/.test(name))) {
			$('.bm-content input').eq(0).val('');
			$('.bm-content input').eq(0).addClass('invalid');
			$('.bm-content input').eq(0).attr('placeholder', '长度超过限制');
			return false
		} else if (!(/^\D+$/.test(family))) {
			if (name == ''){
				return false
			}
			$('.bm-content input').eq(2).val('');
			$('.bm-content input').eq(2).addClass('invalid');
			$('.bm-content input').eq(2).attr('placeholder', '名字不能有数字');
		} else if (!(/^[\u4e00-\u9fa5_a-zA-Z\s]{1,32}$/.test(family))) {
			$('.bm-content input').eq(2).val('');
			$('.bm-content input').eq(2).addClass('invalid');
			$('.bm-content input').eq(2).attr('placeholder', '长度超过限制');
			return false
		}else if (!(/^1[34578]\d{9}$/.test(number))){
			$('.bm-content input').eq(3).val('');
			$('.bm-content input').eq(3).addClass('invalid');
			$('.bm-content input').eq(3).attr('placeholder','手机号码格式错误');
			return false
		}else if ( !reg.test(email)){
			$('.bm-content input').eq(5).val('');
			$('.bm-content input').eq(5).addClass('invalid');
			$('.bm-content input').eq(5).attr('placeholder','邮箱格式错误');
			return false
		}
	}
		if (name && family && number && email && school && address && groupId && gradeId&&province&&city){
		SelectChange(0)
		SelectChange(1)
		SelectChange(2)
		SelectChange(3)
		SelectChange(4)
			if ($('.bm-content select').eq(2).find('option:checked').val() == '选择县'){
				$('.bm-content select').eq(2).find('option:checked').val('')
			}
			debugger
		$('.bm-content form').submit()
	} else {
		if (!name){
			$('.bm-content input').eq(0).val('');
			$('.bm-content input').eq(0).addClass('invalid');
			$('.bm-content input').eq(0).attr('placeholder','输入不能为空');
		}else if(!(/^[\u4e00-\u9fa5_a-zA-Z\s]{1,32}$/.test(name))){
			$('.bm-content input').eq(0).val('');
			$('.bm-content input').eq(0).addClass('invalid');
			$('.bm-content input').eq(0).attr('placeholder','长度超过限制');
		}
		if (!family){
			$('.bm-content input').eq(2).val('');
			$('.bm-content input').eq(2).addClass('invalid');
			$('.bm-content input').eq(2).attr('placeholder','输入不能为空');
		} else if(!(/^[\u4e00-\u9fa5_a-zA-Z\s]{1,32}$/.test(family))){
			$('.bm-content input').eq(2).val('');
			$('.bm-content input').eq(2).addClass('invalid');
			$('.bm-content input').eq(2).attr('placeholder','长度超过限制');
		}
		if (!number){
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
		if (!email) {
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