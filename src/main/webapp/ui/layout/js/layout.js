/**
 * @author joker
 * @date 2016-07-09
 * @description 首页布局脚本
 */

$(function(){
	loadMenu();
});

function loadMenu(){
	$.defAjax({
		url : util_getContextPath()+'/common/findMenu',
		success : function(res){
			var ulDom = $("#narbar_ul_menu");
			if(res != null){
				for(var i=0;i<res.length;i++){
					var li = $("<li></li>");
					if(i == 0){
						menu_loadPage(i,res[i].node.menuCode,res[i].node.url);
						li.addClass("active");
					}
					var children = res[i].children;
					if(children !=null && children.length >0){
						li.addClass("dropdown");
						li.append("<a class=\"dropdown-toggle\" data-toggle=\"dropdown\">"
								+ res[i].node.menuName + "<b class=\"caret\"></b></a>");
						var childUl = $("<ul class=\"dropdown-menu\"></ul>");
						for(var j=0;j<children.length;j++){
							childUl.append("<li><a"
									+ " onclick=\"menu_loadPage('"+i+"','"+children[j].menuCode+"','"+children[j].url+"')\">"
									+ children[j].menuName+"</a></li>");
						}
						li.append(childUl);
					}else{
						li.append("<a "
								+ "onclick=\"menu_loadPage('"+i+"','"+res[i].node.menuCode+"','"+res[i].node.url+"')\">"
								+ res[i].node.menuName+"</a>");
					}
					ulDom.append(li);
				}
			}
		}
	});
}

function menu_loadPage(index,menuCode,url){
	if(url == undefined || url == null || url == 'null') return;
	$('#content_container').load(util_getContextPath()+"/common/loadPage",
			{"url":url});
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





