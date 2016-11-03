/**
 * Created by tao on 2016/10/31.
 */
/**
*多级联动插件
**/
$('#element_id').cxSelect({
	url: '/static/js/cityData.min.json',
	selects: ['province','city','area'],
});
$('#custom_data').cxSelect({
	selects: ['group','grade'],
	jsonName: 'value',
	jsonValue: 'name',
	jsonSub: 'sub',
	data: [
		{
			name:'100',value: '小学低龄组',sub:[
			{
				name: '101',value: '二年级'
			},{
				name: '102',value: '三年级'
			}
		]
		},
		{
			name: '200',value: '小学高龄组',sub:[
			{
				name:'201',value: '四年级'
			},
			{
				name:'202',value: '五年级'
			},
			{
				name:'203',value: '六年级'
			}
		]
		},
		{
			name: '300',value: '初中组',sub:[
			{
				name:'301',value: '初一'
			},
			{
				name:'302',value: '初二'
			},
			{
				name:'303',value: '初三'
			}
		]
		},
		{
			name: '400',value: '高中组',sub:[
			{
				name:'401',value: '高一'
			},
			{
				name:'402',value: '高二'
			},
			{
				name:'403',value: '高三'
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
//封装的ByClassName和querySelectorAll
function Select(elementClass,num_1,ElAttr,num2) {
	if (arguments.length == 2){
		return document.getElementsByClassName(elementClass)[num_1]
	}
	else if (arguments.length == 4){
		return document.getElementsByClassName(elementClass)[num_1].querySelectorAll(ElAttr)[num2];
	}
}


$('.bm-content form').on('submit',function () {
	// var name = Select('bm-content',0,'input',0).value;     //参赛者姓名
	// var family = Select('bm-content',0,'input',1).value;   //家长姓名
	// var number = Select('bm-content',0,'input',2).value;   //手机号
	// var email = Select('bm-content',0,'input',3).value;    //邮箱
	// var province = Select('bm-content',0,'select',0).value;  //省
	// var city = Select('bm-content',0,'select',1).value;      //市
	// var area = Select('bm-content',0,'select',2).value;      //区
	// var groupId = Select('bm-content',0,'select',3).value;   //分组
	// var gradeId = Select('bm-content',0,'select',4).value;   //年级
	// var school = Select('bm-content',0,'input',4).value;     //学校
	// var address = Select('bm-content',0,'input',5).value;    //地址
	//
	// /*取分组信息的文字信息*/
	// var groupIndex = Select('bm-content',0,'select',3).selectedIndex;
	// var gradeIndex = Select('bm-content',0,'select',4).selectedIndex;
	// var groupName = Select('bm-content',0,'select',3).options[groupIndex].text;
	// var gradeName = Select('bm-content',0,'select',4).options[gradeIndex].text;
	//
	// return false
})