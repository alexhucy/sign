function NameLenFocusOut(t){var e=t.value;if(""!=e)return/^\D+$/.test(e)?void(/^[\u4e00-\u9fa5_a-zA-Z\s]{1,32}$/.test(e)||(t.value="",t.classList.add("invalid"),t.setAttribute("placeholder","长度超过限制,请重新输入"))):(t.value="",t.classList.add("invalid"),void t.setAttribute("placeholder","名字不能有数字"))}function FocusIn(t,e){void 0!=t.classList&&(t.classList.remove("invalid"),t.setAttribute("placeholder",e))}function change(t){t.style.border="0",t.style.border="1px solid #DCDCDC"}function EmailFocusOut(t){var e=t.value,n=/^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i;""!=e&&(n.test(e)||(t.value="",t.classList.add("invalid"),t.setAttribute("placeholder","邮箱格式错误")))}function NumLenFocusOut(t){var e=t.value;""!=e&&(/^1[34578]\d{9}$/.test(e)||(t.value="",t.classList.add("invalid"),t.setAttribute("placeholder","手机号码格式错误")))}function SubmitContent(t){t.classList.add("invalid"),t.setAttribute("placeholder","输入不能为空")}function SelectChange(t){var e=$(".bm-content select").eq(t).find("option:checked").text();$(".bm-content select").eq(t).find("option:checked").val(e)}$('.bm-content form input[type="submit"]').on("click",function(){var t=$(".bm-content input").eq(0).val(),e=$(".bm-content input").eq(1).val(),n=$(".bm-content input").eq(2).val(),a=$(".bm-content input").eq(3).val(),i=$(".bm-content input").eq(4).val(),l=$(".bm-content input").eq(5).val(),o=$(".bm-content select").eq(3).val(),c=$(".bm-content select").eq(4).val(),d=$(".bm-content select").eq(0).val(),s=$(".bm-content select").eq(1).val(),u=$(".bm-content select").eq(2).val();if(t||n||a||l){var r=/^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i;if(!/^\D+$/.test(t))return""!=t&&($(".bm-content input").eq(0).val(""),$(".bm-content input").eq(0).addClass("invalid"),$(".bm-content input").eq(0).attr("placeholder","名字不能有数字"),!1);if(!/^[\u4e00-\u9fa5_a-zA-Z\s]{1,32}$/.test(t))return $(".bm-content input").eq(0).val(""),$(".bm-content input").eq(0).addClass("invalid"),$(".bm-content input").eq(0).attr("placeholder","长度超过限制"),!1;if(/^\D+$/.test(n)){if(!/^[\u4e00-\u9fa5_a-zA-Z\s]{1,32}$/.test(n))return $(".bm-content input").eq(2).val(""),$(".bm-content input").eq(2).addClass("invalid"),$(".bm-content input").eq(2).attr("placeholder","长度超过限制"),!1;if(!/^1[34578]\d{9}$/.test(a))return $(".bm-content input").eq(3).val(""),$(".bm-content input").eq(3).addClass("invalid"),$(".bm-content input").eq(3).attr("placeholder","手机号码格式错误"),!1;if(!r.test(l))return $(".bm-content input").eq(5).val(""),$(".bm-content input").eq(5).addClass("invalid"),$(".bm-content input").eq(5).attr("placeholder","邮箱格式错误"),!1}else{if(""==t)return!1;$(".bm-content input").eq(2).val(""),$(".bm-content input").eq(2).addClass("invalid"),$(".bm-content input").eq(2).attr("placeholder","名字不能有数字")}}return t&&n&&a&&l&&e&&i&&o&&c&&d&&s?(SelectChange(0),SelectChange(1),SelectChange(2),SelectChange(3),SelectChange(4),"选择县"==$(".bm-content select").eq(2).find("option:checked").val()&&$(".bm-content select").eq(2).find("option:checked").val(""),$(".bm-content form").submit(),void 0):(t?/^[\u4e00-\u9fa5_a-zA-Z\s]{1,32}$/.test(t)||($(".bm-content input").eq(0).val(""),$(".bm-content input").eq(0).addClass("invalid"),$(".bm-content input").eq(0).attr("placeholder","长度超过限制")):($(".bm-content input").eq(0).val(""),$(".bm-content input").eq(0).addClass("invalid"),$(".bm-content input").eq(0).attr("placeholder","输入不能为空")),n?/^[\u4e00-\u9fa5_a-zA-Z\s]{1,32}$/.test(n)||($(".bm-content input").eq(2).val(""),$(".bm-content input").eq(2).addClass("invalid"),$(".bm-content input").eq(2).attr("placeholder","长度超过限制")):($(".bm-content input").eq(2).val(""),$(".bm-content input").eq(2).addClass("invalid"),$(".bm-content input").eq(2).attr("placeholder","输入不能为空")),a?/^1[34578]\d{9}$/.test(a)||($(".bm-content input").eq(3).val(""),$(".bm-content input").eq(3).addClass("invalid"),$(".bm-content input").eq(3).attr("placeholder","手机号码格式错误")):"手机号码格式错误"==$(".bm-content input").eq(3).attr("placeholder")||($(".bm-content input").eq(3).val(""),$(".bm-content input").eq(3).addClass("invalid"),$(".bm-content input").eq(3).attr("placeholder","输入不能为空")),l?/.+@.+\.[a-zA-Z]{2,4}$/.test(l)||($(".bm-content input").eq(5).val(""),$(".bm-content input").eq(5).addClass("invalid"),$(".bm-content input").eq(5).attr("placeholder","邮箱格式错误")):"邮箱格式错误"==$(".bm-content input").eq(5).attr("placeholder")||($(".bm-content input").eq(5).val(""),$(".bm-content input").eq(5).addClass("invalid"),$(".bm-content input").eq(5).attr("placeholder","输入不能为空")),i||($(".bm-content input").eq(4).val(""),$(".bm-content input").eq(4).addClass("invalid"),$(".bm-content input").eq(4).attr("placeholder","输入不能为空")),e||($(".bm-content input").eq(1).val(""),$(".bm-content input").eq(1).addClass("invalid"),$(".bm-content input").eq(1).attr("placeholder","输入不能为空")),o||$(".bm-content select").eq(3).css("border","1px solid red"),c||$(".bm-content select").eq(4).css("border","1px solid red"),d||$(".bm-content select").eq(0).css("border","1px solid red"),s||$(".bm-content select").eq(1).css("border","1px solid red"),u||$(".bm-content select").eq(2).css("border","1px solid red"),!1)});