/**
 * js 提取一些具体方法
 * eg
 * 	ajax封装
 * @author joker
 * @date 2016-07-09
 */

(function($) {
	/**
	 * ajax封装
	 * url 发送请求的地址
	 * data 发送到服务器的数据，数组存储，如：{"date": new Date().getTime(), "state": 1}
	 * dataType 预期服务器返回的数据类型，常用的如：xml、html、json、text
	 * cache 缓存。默认为false
	 * successfn 成功回调函数
	 * errorfn 失败回调函数
	 */
	jQuery.defAjax = function(options){
		var data = options.data;
		if(typeof(data) != "undefined"){
			data.ajaxRequestFlag = "true";
		}else{
			data = {"ajaxRequestFlag" : "true"};
		}
		$.ajax({
			url : options.url,
			type : options.type == null ? "POST" : options.type,
			data : data,
			dataType : options.dataType == null ? "json" : options.dataType,
			cache: options.cache == null ? false : options.cache,
			success : function(res) {
				if(options.success && $.isFunction(options.success)){
					options.success(res);
				}
			},
			error : function(e) {
				var res = e.responseJSON;
				if(res != null){
					if(res.code == "unlogin"){
						window.open(util_getContextPath()+"/sys/common/login/toLogin", "_self");
					}else{
						$.messager.alert(res.code + "："+res.message,"error");
					}
				}
				if(options.error && !$.isFunction(options.error)){
					options.error(res);
				}
			}
		});
	};
	
    $.fn.serializeJson=function(){  
        var serializeObj={};  
        $(this.serializeArray()).each(function(){  
            serializeObj[this.name]=this.value;  
        });  
        return serializeObj;  
    };  
    
    /**
	 * ajaxFileUpload 封装
	 * url 发送请求的地址
	 * data 发送到服务器的数据，数组存储，如：{"date": new Date().getTime(), "state": 1}
	 * dataType 预期服务器返回的数据类型，常用的如：xml、html、json、text
	 * cache 缓存。默认为false
	 * successfn 成功回调函数
	 * errorfn 失败回调函数
	 */
	jQuery.defUploadFile = function(options){
		var data = options.data;
		if(typeof(data) != "undefined"){
			data.ajaxRequestFlag = "true";
		}else{
			data = {"ajaxRequestFlag" : "true"};
		}
		$.ajaxFileUpload({
			url : options.url,
			type : options.type == null ? "POST" : options.type,
			secureuri : options.secureuri == null ? true : options.secureuri,
			fileElementId : options.fileElementId,//文件选择框的id属性 
			data : data,
			dataType : options.dataType == null ? "json" : options.dataType,
			cache: options.cache == null ? false : options.cache,
			success : function(res) {
				if(options.success && $.isFunction(options.success)){
					options.success(res);
				}
			},
			error : function(e) {
				var res = e.responseJSON;
				if(res != null){
					if(res.code == "unlogin"){
						window.open(util_getContextPath()+"/sys/common/login/toLogin", "_self");
					}else{
						$.messager.alert(res.code + "："+res.message,"error");
					}
				}
				if(options.error && !$.isFunction(options.error)){
					options.error(res);
				}
			}
		});
	};
    
})(jQuery);