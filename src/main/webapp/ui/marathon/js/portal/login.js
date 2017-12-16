/**
 * @author joker
 * @date 2016-06-19
 */

$(function(){
	$('#loginDialogForm').validator({
		//timely:2,
		theme:'yellow_top',
		fields: {
	        'userName': 'required',
	        'password': 'required',
	        'captcha': 'required;remote(jsonp:'+util_getContextPath()+'/captcha/checkCaptcha)'
	    }
	});
});

/**
 * 修改验证码图片
 */
function changeCaptchaImage(){
	var imgSrc = $("#captchaImg");
	var src = imgSrc.attr("src");
	imgSrc.attr("src",changeURL(src));
}

/**
 * 验证码路径添加时间戳，保证每次都会获取新的
 * @param url 验证码路径
 * @returns
 */
function changeURL(url){
	var timestamp = (new Date()).valueOf();
	if(url.indexOf("&") >= 0){
		url += "&timestamp=" + timestamp;
	}else{
		url += "?timestamp=" + timestamp;
	}
	return url;
}

function doLogin(){
	$('#loginDialogForm').isValid(function(valid){
	    if (valid) {
	    	var data = $('#loginDialogForm').serializeJson();
	    	$.defAjax({
	    		url : util_getContextPath()+"/sys/common/login/doAjaxLogin",
	    		data : data,
	    		success : function(res) {
	    			if(res.code != null && res.code == 'T'){
	    				/*$.messager.show("登录成功");
	    				$('#layout_diglog').dialog.close();*/
	    				document.location.reload();
	    			}else{
	    				$.messager.alert(res.message);
	    			}
	    		}
	    	});
	    }
	});
}
