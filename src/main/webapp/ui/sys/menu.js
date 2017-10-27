/**
 * 菜单管理脚本
 * @author joker
 * @date 2016-06-19
 */

$(function(){
	$("#menuJqGrid").jqGrid({
    	url: util_getContextPath() + '/sys/menu/findMenu',
        mtype: "POST",
		styleUI: 'Bootstrap',
        datatype: "json",
        caption: '菜单信息',
        colModel: [ 
            { name: 'id', key: true,hidden:true},
            { label: '名称', name: 'menuName',sortable: false, width: 30 },
            { label: '编码', name: 'menuCode',sortable: false, width: 30 },
            { label: '路径', name: 'url',sortable: false, width: 30 },
            { label: '级别', name: 'level',sortable: false, width: 30 },
			{ name: 'parent', hidden:true }
		],
        autowidth: true,
        altRows: true,
		viewrecords: true,
		rownumbers: true,
		multiselect: true,
		hidegrid: false,
        recordpos:'left',
        height: 'auto'
    });

    
	
    $(window).resize(function(){
    	resizeShowHideCol();
    });
    
    function resizeShowHideCol(){
    	var winWidth = document.body.clientWidth;
    	if(winWidth<414){
    		$("#menuJqGrid").setGridParam().hideCol(["url","level"]);
    		$("#menuJqGrid").setGridWidth(winWidth-1);
    	}else{
    		$("#menuJqGrid").setGridParam().showCol(["url","level"]);
    		$("#menuJqGrid").setGridWidth(winWidth-40);
    	}
    }

    resizeShowHideCol();
});

function del(){
	var ids = $("#menuJqGrid").jqGrid('getGridParam','selarrrow');
	if(ids.length==0){
		$.messager.alert("请选中要删除的菜单！",messager_type_info);
	}else{
		$.messager.confirm('是否删除选中菜单！',messager_type_warning,null,
			function(res){
				if(res){
					$.defAjax({
						url:util_getContextPath()+"/sys/menu/deleteMenu",
						dataType: 'text',
						data:{
							'ids' : ids.join(",")
						},
						success:function(res){
							$.messager.alert("删除成功！");
							$("#menuJqGrid").trigger("reloadGrid");
						}
					});
				}
			}
		);
	}
}

function add(){
	$('#editDialog').dialog({
		url: util_getContextPath()+"/sys/menu/toEditMenuPage",
		title: '新增菜单',
		height: 500,
		width: 600,
		modal: true,
		buttons:[{
			text: '保存',
			click: function(){
				saveMenu();
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
	var ids = $("#menuJqGrid").jqGrid('getGridParam','selarrrow');
	if(ids.length==0){
		$.messager.alert("请选中要修改的菜单！",messager_type_info);
	}else if(ids.length >1){
		$.messager.alert("一次只能修改一条菜单！",messager_type_info);
	}else{
		$('#editDialog').dialog({
			url: util_getContextPath()+"/sys/menu/toEditMenuPage",
			data:{
				id: ids[0]
			},
			title: '修改菜单',
			height: 500,
			width: 600,
			modal: true,
			buttons:[{
				text: '保存',
				click: function(){
					saveMenu();
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

function saveMenu() {
	$('#menuEditForm').isValid(function(valid){
	    if (valid) {
	    	var data = $('#menuEditForm').serializeJson();
	    	if(data.id == "") data.id = 0;
	    	if(data.sequence == "") data.sequence = 0;
	    	$.defAjax({
	    		url : util_getContextPath()+'/sys/menu/saveMenu',
	    		data : data,
	    		dataType : 'text',
	    		success : function(res) {
	    			$.messager.show("保存成功！");
	    			$('#editDialog').dialog.close();
	    			$("#menuJqGrid").trigger("reloadGrid");
	    		}
	    	});
	    }
	});
}

function validatorMenu(){
	$('#menuEditForm').validator({
		theme:'yellow_top',
		rules: {
	        // 使用正则表达式定义规则
	        codeRegexp: [/^[a-zA-Z]+$/, "only alphabetical"]
	    },
		fields: {
	        'menuName': 'required;length(0~32);',
	        'menuCode': 'required;length(0~16),codeRegexp;remote(jsonp:'
	        	+util_getContextPath()+'/sys/menu/isExistMenuCode, id:#menuId)',
	        'url': 'length(0~128)',
	        'sequence': 'integer(+)'
	    }
	});
}