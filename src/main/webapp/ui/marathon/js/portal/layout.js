

$(function(){
	menu_loadPage('0','homepage','/marathon/portal/homepage');
});

function menu_loadPage(index,menuCode,url){
	if(url == undefined || url == null || url == 'null') return;
	$('#content_container').load(util_getContextPath()+url);
	$("#narbar_ul_menu>li.active").removeClass("active");
	$("#narbar_ul_menu>li:eq("+index+")").addClass("active");
}

function updatePassword(){
	$('#layout_diglog').dialog({
		url: util_getContextPath()+"/sys/user/toUpdatePassword",
		title: '修改密码',
		height: 250,
		width: 300,
		modal: true,
		buttons:[{
			text: '保存',
			click: function(){
				update_password();
			}
		},{
			text: '关闭', 
			click: function(){
				$('#layout_diglog').dialog.close();
			}
		}]
	});
}

function update_password(){
	$('#userEditPasswordForm').isValid(function(valid){
	    if (valid) {
	    	var data = $('#userEditPasswordForm').serializeJson();
	    	$.defAjax({
	    		url : util_getContextPath()+'/sys/user/updatePassword',
	    		data : data,
	    		dataType : 'JSON',
	    		success : function(res) {
	    			console.info(res);
	    			if(res != null && res.code == "T"){
	    				$.messager.show("保存成功！");
	    				$('#layout_diglog').dialog.close();
	    			}else{
	    				$.messager.alert("保存失败！");
	    			}
	    		}
	    	});
	    }
	});
}

function userDetail(){
	$('#layout_diglog').dialog({
		url: util_getContextPath()+"/sys/user/toUserDetail",
		title: '用户详情',
		height: 500,
		width: 600,
		modal: true,
		buttons:[{
			text: '关闭', 
			click: function(){
				$('#layout_diglog').dialog.close();
			}
		}]
	});
}

function loginDialog(){
	$('#layout_diglog').dialog({
		url: util_getContextPath()+"/marathon/portal/loginDialog",
		title: '登录',
		height: 270,
		width: 400,
		modal: true,
		buttons:[{
			text: '登录',
			click: function(){
				doLogin();
			}
		},{
			text: '关闭', 
			click: function(){
				$('#layout_diglog').dialog.close();
			}
		}]
	});
}

function logout(){
	$.defAjax({
		url : util_getContextPath()+"/sys/common/login/logout",
		dataType : 'text',
		success : function(res) {
			document.location.reload();
		}
	});
}


