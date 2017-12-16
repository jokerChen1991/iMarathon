
/**
 * 加载省份的select
 * @returns
 */
function loadProvinceSelect(){
	$.defAjax({
		url:util_getContextPath()+"/marathon/console/article/deleteArticle",
		dataType: 'text',
		data:{
			'ids' : ids.join(",")
		},
		success:function(res){
			$.messager.alert("删除成功！");
			$("#tableJqGrid").trigger("reloadGrid");
		}
	});
}