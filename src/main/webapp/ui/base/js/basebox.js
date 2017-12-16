/**
 * 弹窗工具
 * @author joker
 * @date 2016-07-20
 */

$.fn.window = $.extend({
	zIndex : 9000
});

var messager_type_info="info"; //普通提示
var messager_type_success="success"; //成功
var messager_type_error="error"; //失败、错误
var messager_type_warning="warning"; //警告

(function($) {
	
	/** 消息弹窗 **/
	$.messager = {
		/** 弹窗提示信息对话框 **/
		/**
		 * msg: 提示信息
		 * flag: 提示类型标志
		 * title：标题
		 * 
		 * clickFunction：回调函数
		 * 
		 * time：显示时间
		 * position：显示位置
		 */
		alert : function(msg, flag, title) { //弹出框，只作为提示信息
			var button = $("<button class=\"messager-button messager-"+ flag + "-border col-xs-12\">确定</button>");
			createAlert(msg, flag, title,button);
		},
		confirm: function(msg, flag, title,clickFunction){ //确认选择框
			var buttonOK = $("<button class=\"messager-button messager-"+ flag + "-border col-xs-6\">确定</button>");
			var buttonCancel = $("<button class=\"messager-button messager-"+ flag + "-border col-xs-6\">取消</button>");
			createAlert(msg, flag, title,buttonOK,buttonCancel,clickFunction);
		},
		show: function(msg,flag,title,time,position){ //提示显示框
			createShow(msg,flag,title,time,position);
		}
		
	};
	
	function createAlert(msg, flag, title,buttonOK,buttonCancel,clickFunction){
		if (flag == null)
			flag = "info";
		if (title == null)
			switch (flag) {
			case messager_type_info:
				title = "提示";
				break;
			case messager_type_success:
				title = "成功";
				break;
			case messager_type_error:
				title = "失败";
				break;
			case messager_type_warning:
				title = "警告";
				break;
			}
		msg = msg === undefined ? "" : msg;
		var modalDiv = $("<div />");
		modalDiv.addClass("dialog-backdrop");
		modalDiv.css("z-index", $.fn.window.zIndex++);
		var content = $("<div class=\"dialog-container alert-container \"></div>");
		modalDiv.append(content);
		var header = $("<div class=\"messager-alert-header messager-" 
				+ flag + "-bg\"><strong>"
				+ title + "</strong></div>");
		var body = $("<div class=\"messager-alert-body\">"
				+ "<div class=\"messager-icon messager-" + flag
				+ "\"></div>" + "<div style=\"word-break:break-all;\">"
				+ msg + "</div></div>");
		var footer = $("<div class=\"messager-alert-footer messager-"+ flag + "-border messager-" + flag + "-bg\">");
		content.append(header).append(body).append(footer);
		footer.append(buttonOK);
		buttonOK.bind("click", function() {
			if(clickFunction && $.isFunction(clickFunction)){
				clickFunction(true);
			}
			modalDiv.remove();
		});
		if(buttonCancel != undefined && buttonCancel != null && buttonCancel != ""){
			footer.append(buttonCancel);
			buttonCancel.bind("click", function() {
				if(clickFunction && $.isFunction(clickFunction)){
					clickFunction(false);
				}
				modalDiv.remove();
			});
		}
		draggin_dialog(header, content);
		modalDiv.appendTo("body");
	}

	/**
	 * 创建show提示框
	 */
	function createShow(msg,flag,title,time,position){
		if (flag == null)
			flag = "info";
		if (title == null)
			switch (flag) {
			case messager_type_info:
				title = "提示";
				break;
			case messager_type_success:
				title = "成功";
				break;
			case messager_type_error:
				title = "失败";
				break;
			case messager_type_warning:
				title = "警告";
				break;
			}
		msg = msg === undefined ? "" : msg;
		var content = $("<div class=\"show-container messager-"
				+ flag + "-border \" " + "style=\"\"></div>");
		content.css("z-index", $.fn.window.zIndex++);
		if(position == null){
			content.css("right", 1);
			content.css("bottom", 1);
		}else{
			if(position.left != null && position.left != "")
				content.css("left", position.left);
			if(position.top != null && position.top != "")
				content.css("top", position.top);
			if(position.right != null && position.right != "")
				content.css("right", position.right);
			if(position.bottom != null && position.bottom != "")
				content.css("bottom", position.bottom);
		}
		
		var header = $("<div class=\"messager-alert-header messager-" 
				+ flag + "-bg\"><strong>"
				+ title + "</strong></div>");
		var body = $("<div class=\"messager-alert-body\">"
				+ "<div style=\"word-break:break-all;\">"
				+ msg + "</div></div>");
		var button = $('<a class="dialog-close-button" style="text-decoration: none;">'
				+ '&times;</a>');
		button.bind("click", function() {
			content.hide("slow",function(){content.remove();});
		});
		header.append(button);
		content.append(header).append(body);
		content.hide().appendTo("body").show('slow');
		if(time != null && time != "")
			setTimeout(
					function(){content.hide("slow",function(){content.remove();})}
					, time);
			//content.delay(time);
		else
			setTimeout(
					function(){content.hide("slow",function(){content.remove();})}
					, 3000);
			//content.delay(3000);
		//content.hide("slow",function(){content.remove();});
	}
	
	/**弹出操作框**/
	//$.fn.extend({
		var dialog = $.fn.dialog = function(options) {
			if (options == null)
				options = {};
			var oldDialogDom = $('#dialog_id_'+$(this).attr("id"));
			if(oldDialogDom.length>0){
				oldDialogDom.remove();
			}
			var dialog_id = "dialog_id_"+$(this).attr("id");
			var content = $("<div class=\"dialog-container\" id=\""+dialog_id+"\"" +
					"style=\"border: 1px solid #48A5E4;border-top:none;\"></div>");
			var modalDiv = $("<div />");
			var dialogBody = $(this);
			if (options.modal == null || options.modal) {//是否需要遮罩，默认为需要
				modalDiv.addClass("dialog-backdrop");
				modalDiv.css("z-index", $.fn.window.zIndex++);
				modalDiv.appendTo("body");
			}
			content.css("z-index", $.fn.window.zIndex++);
			if(options.height == null){
				options.height = $(this).height();
			}
			if(options.width == null){
				options.width = $(this).width();
			}
			if(options.height!=0){
				content.css("height",options.height);
				if(document.documentElement.clientHeight < options.height){
					content.css("top",0);
				}else{
					content.css("margin-top",-options.height/2);
				}
			}
			if(options.width!=0){
				content.css("width",options.width);
				var mediaWIdth = document.documentElement.clientWidth;
				if(mediaWIdth  < options.width){
					content.css("left",0);
					if(mediaWIdth<768){
						content.css("width",mediaWIdth);
						$(this).css("width",mediaWIdth-2);
					}
				}else{
					content.css("margin-left",-options.width/2);
				}
			}
			if(options.title == null) options.title = "My Dialog";
			var header = $("<div class=\"messager-alert-header messager-info-bg\" "
					+ " style=\"border-top-right-radius: 6px;border-top-left-radius: 6px;\"><strong>"
					+ options.title + "</strong></div>");
			if(options.closed == null || options.closed){
				var button = $('<a class="dialog-close-button" style="text-decoration: none;">'
						+ '&times;</a>');
				button.bind("click", function() {
					modalDiv.remove();
					content.css("display","none");
				});
				header.append(button);
			}
			content.append(header);
			if(options.url != null){
				$(this).load(options.url,options.data,options.onload);
			}
			if(options.buttons !=null && options.buttons != "" && options.buttons.length>0){
				$(this).css("height",options.height-71);
				$(this).css("overflow","auto");
				$(this).css("background","#fff");
				content.append(this);
				var footer = $("<div class=\"dialog-footer-button\">");
				var xsNum = 12/options.buttons.length;
				for(var i=0;i<options.buttons.length;i++){
					var btn = options.buttons[i];
					var button = $("<button class=\"col-xs-"+xsNum+"\" "
							+ " style=\"text-decoration: none;\">"+btn.text+"</button>");
					if(btn.click && $.isFunction(btn.click)){
						button.bind("click", btn.click);
					}
					footer.append(button);
				}
				content.append(footer);
			}else{
				$(this).css("height",options.height-31);
				$(this).css("background","#fff");
				$(this).css("border-bottom-right-radius","6px");
				$(this).css("border-bottom-left-radius","6px");
				$(this).css("overflow","auto");
				content.append(this);
			}
			
			if(options.closed !=null && options.closed){
				modalDiv.remove();
				content.css("display","none");
			}
			
			if(options.drag == null || options.drag == true){ //添加拖拽
				draggin_dialog(header, content);
			}
			
			content.appendTo("body");
			
			dialog.close = function(){
				modalDiv.css("display","none");
				content.css("display","none");
			};
			dialog.open = function(){
				modalDiv.css("display","");
				content.css("display","");
			};
			dialog.reload = function(data,onload){
				if(options.url != null){
					if(!(onload && $.isFunction(onload))){
						onload = options.onload;
					}
					if(data == null){
						data = options.data;
					}
					dialogBody.load(options.url,data,onload);
				}
			};
			dialog.load = function(url,data,onload){
				if(url != null){
					if(!(onload && $.isFunction(onload))){
						onload = options.onload;
					}
					if(data == null){
						data = options.data;
					}
					dialogBody.load(url,data,onload);
				}
			};
		};
	//});

	
	/**
	 * 窗体拖拽效果
	 * @param handler 拖拽的dom节点
	 * @param draggObj 移动的dom
	 */
	function draggin_dialog(handler, draggObj) {
		var draggingObj = null;
		if (handler == undefined)
			return;
		if (draggObj == undefined)
			return;
		var diffX = 0;
		var diffY = 0;
		handler.bind('mousedown', mouseHandler);
		document.addEventListener('mousemove', mouseHandler);
		document.addEventListener('mouseup', mouseHandler);

		function mouseHandler(e) {
			switch (e.type) {
			case 'mousedown':
				draggingObj = draggObj[0];
				handler.css("cursor", "move");
				if (draggingObj != null) {
					diffX = e.clientX - draggingObj.offsetLeft;
					diffY = e.clientY - draggingObj.offsetTop;
				}
				break;
			case 'mousemove':
				if (draggingObj) {
					draggingObj.style.margin = '0px';
					draggingObj.style.left = (e.clientX - diffX) + 'px';
					draggingObj.style.top = (e.clientY - diffY) + 'px';
				}
				break;
			case 'mouseup':
				handler.css("cursor", "");
				draggingObj = null;
				diffX = 0;
				diffY = 0;
				break;
			}
		}
		;
	}

})(jQuery);