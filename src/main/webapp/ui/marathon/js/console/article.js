/**
 * 文章管理脚本
 * @author joker
 * @date 2017-12-09
 */

$(function(){
	$("#tableJqGrid").jqGrid({
    	url: util_getContextPath() + '/marathon/console/article/findArticle',
        mtype: "POST",
		styleUI: 'Bootstrap',
        datatype: "json",
        caption: '文章信息',
        colModel: [ 
            { name: 'id', key: true,hidden:true},
            { label: '标题', name: 'title',sortable: false, width: 30 },
            { label: '作者', name: 'creator',sortable: false, width: 30 },
			{ label: '类型', name: 'type', sortable: false, width: 30 },
			{ label: '浏览数', name: 'visit', sortable: false, width: 20 },
			{ label: '创建时间', name: 'createTimeStr', sortable: false, width: 50 }
		],
        autowidth: true,
        altRows: true,
		viewrecords: true,
		rownumbers: true,
		multiselect: true,
		hidegrid: false,
        rowNum: 10,
        pager: "#jqGridPager",
        pagerpos:'right',
        recordpos:'left',
        height: 'auto',
        //height: 450,
        prmNames: {page: "pageNo", rows: "pageSize"},
        jsonReader: {
        	root: "datas",		//数据模型的入口，查询结果数据
        	page: "pageNo",		//当前的页码
        	total: "totalPages",			//总的页码数
        	records: "totalRecords",		//总的数据数
        	repeatitems: false	//是否需要根据colModel顺序显示数据
        }
    });
    
});

function queryData(){
	var data = $('#queryForm').serializeJson();
	$("#tableJqGrid").setGridParam({
		postData : data,
		page: 1
	}).trigger("reloadGrid");
}

function del(){
	var ids = $("#tableJqGrid").jqGrid('getGridParam','selarrrow');
	if(ids.length==0){
		$.messager.alert("请选中要删除的文章信息！",messager_type_info);
	}else{
		$.messager.confirm('是否删除选中文章',messager_type_warning,null,
			function(res){
				if(res){
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
			}
		);
	}
}

function add(){
	$('#editDialog').dialog({
		url: util_getContextPath()+"/marathon/console/article/toEditPage",
		data:{
			operation: 'A'
		},
		title: '新增文章',
		height: 500,
		width: 720,
		modal: true,
		buttons:[{
			text: '保存',
			click: function(){
				saveEntity();
			}
		},{
			text: '关闭', 
			click: function(){
				$('#editDialog').dialog.close();
			}
		}]
	});
}

function edit(){
	var ids = $("#tableJqGrid").jqGrid('getGridParam','selarrrow');
	if(ids.length==0){
		$.messager.alert("请选中要修改的用户信息！",messager_type_info);
	}else if(ids.length >1){
		$.messager.alert("一次只能修改一条用户信息！",messager_type_info);
	}else{
		$('#editDialog').dialog({
			url: util_getContextPath()+"/marathon/console/article/toEditPage",
			data:{
				operation: 'U',
				id: ids[0]
			},
			title: '修改文章',
			height: 500,
			width: 720,
			modal: true,
			buttons:[{
				text: '保存',
				click: function(){
					saveEntity();
				}
			},{
				text: '关闭', 
				click: function(){
					$('#editDialog').dialog.close();
				}
			}]
		});
	}
}

function saveEntity(){
	$('#editForm').isValid(function(valid){
	    if (valid) {
	    	var data = $('#editForm').serializeJson();
	    	if(data.id == "") data.id = 0;
	    	$.defAjax({
	    		url : util_getContextPath()+'/marathon/console/article/saveArticle',
	    		data : data,
	    		dataType : 'text',
	    		success : function(res) {
	    			$.messager.show("保存成功！");
	    			$('#editDialog').dialog.close();
	    			$("#tableJqGrid").trigger("reloadGrid");
	    		}
	    	});
	    }
	});
}

function validatorForm(){
	$('#editForm').validator({
		theme:'yellow_top',
		rules: {
	        time: [/^[1-9]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])\s+(20|21|22|23|[0-1]\d):[0-5]\d:[0-5]\d$/, "时间格式错误"]
	    },
		fields: {
	        'title': 'required;length(0~32);',
	        'creator': 'length(0~16)',
	        'visit': 'integer(+0)',
	        'createTime': 'time'
	    }
	});
}