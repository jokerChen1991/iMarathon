/**
 * @author joker
 * @date 2016-06-19
 */

$(function(){
	$('#loginForm').bootstrapValidator({
        fields: {
            userName: {
                validators: {
		            notEmpty: {
		                message: 'The username is required and can\'t be empty'
		            },
                    regexp: {
                        regexp: /^[a-zA-Z0-9_\.]+$/,
                        message: 'The username can only consist of alphabetical, number, dot and underscore'
                    }
                }
            },
            password: {
            	validators: {
		            notEmpty: {
		                message: 'The password is required and can\'t be empty'
		            }
                }
            },
            captcha: {
            	validators: {
		            notEmpty: {
		                message: 'The captcha is required and can\'t be empty'
		            },
		            remote: {
                        type: 'POST',
                        dataType : 'json',
                        url: util_getContextPath()+'/captcha/checkCaptcha',
                        message: 'The captcha is wrong',
                        delay: 1000
                    }
                }
            }
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
