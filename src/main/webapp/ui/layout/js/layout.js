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
			var ulDom = $("#narbar_ul");
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
	$("#narbar_ul>li.active").removeClass("active");
	$("#narbar_ul>li:eq("+index+")").addClass("active");
}