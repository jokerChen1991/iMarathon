/**
 * 角色信息脚本
 * @author joker
 * @date 2017-07-05
 */
$(function(){
	$("#roleJqGrid").jqGrid({
    	url: util_getContextPath() + '/sys/role/findRole',
        mtype: "POST",
		styleUI: 'Bootstrap',
        datatype: "json",
        caption: '角色信息',
        colModel: [ 
            { label: '角色编码',key: true, name: 'roleCode',sortable: false, width: 10 },
            { label: '角色名称', name: 'roleName',sortable: false, width: 20 }
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

function queryRole(){
	var data = $('#roleQueryForm').serializeJson();
	$("#roleJqGrid").setGridParam({
		postData : data,
		page: 1
	}).trigger("reloadGrid");
}

function del(){
	var codes = $("#roleJqGrid").jqGrid('getGridParam','selarrrow');
	if(codes.length==0){
		$.messager.alert("请选中要删除的角色信息！",messager_type_info);
	}else{
		$.messager.confirm('是否删除选中角色',messager_type_warning,null,
			function(res){
				if(res){
					$.defAjax({
						url:util_getContextPath()+"/sys/role/deleteRole",
						dataType: 'text',
						data:{
							'codes' : codes.join(",")
						},
						success:function(res){
							$.messager.alert("删除成功！");
							$("#roleJqGrid").trigger("reloadGrid");
						}
					});
				}
			}
		);
	}
}

function add(){
	$('#editDialog').dialog({
		url: util_getContextPath()+"/sys/role/toEditRolePage",
		data:{
			operation: 'A'
		},
		title: '新增角色',
		height: 200,
		width: 450,
		modal: true,
		buttons:[{
			text: '保存',
			click: function(){
				saveRole();
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
	var codes = $("#roleJqGrid").jqGrid('getGridParam','selarrrow');
	if(codes.length==0){
		$.messager.alert("请选中要修改的角色信息！",messager_type_info);
	}else if(codes.length >1){
		$.messager.alert("一次只能修改一条角色信息！",messager_type_info);
	}else{
		$('#editDialog').dialog({
			url: util_getContextPath()+"/sys/role/toEditRolePage",
			data:{
				operation: 'U',
				roleCode: codes[0]
			},
			title: '修改角色',
			height: 200,
			width: 450,
			modal: true,
			buttons:[{
				text: '保存',
				click: function(){
					saveRole();
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

function saveRole(){
	$('#roleEditForm').isValid(function(valid){
	    if (valid) {
	    	var data = $('#roleEditForm').serializeJson();
	    	var url = util_getContextPath()+'/sys/role/updateRole';
	    	if(data.oldCode == "") {
	    		url = util_getContextPath()+'/sys/role/addRole'
	    	}
	    	$.defAjax({
	    		url : url,
	    		data : data,
	    		dataType : 'text',
	    		success : function(res) {
	    			$.messager.show("保存成功！");
	    			$('#editDialog').dialog.close();
	    			$("#roleJqGrid").trigger("reloadGrid");
	    		}
	    	});
	    }
	});
}

function validatorRole(){
	$('#roleEditForm').validator({
		//timely:2,
		theme:'yellow_top',
		rules: {
	        // 使用正则表达式定义规则
	        nameRegexp: [/^[a-zA-Z0-9_\.]+$/, 
	        	"The roleCode can only consist of alphabetical, number, dot and underscore"]
	    },
		fields: {
	        'roleCode': 'required;length(~16);nameRegexp;remote(jsonp:'
	        	+util_getContextPath()+'/sys/role/isExistRoleCode)',
	        'roleName': 'required;length(~16)'
	    }
	});
}