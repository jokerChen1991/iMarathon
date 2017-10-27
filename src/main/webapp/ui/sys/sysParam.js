/**
 * 系统参数信息脚本
 * @author joker
 * @date 2017-07-05
 */
$(function(){
	$("#sysParamJqGrid").jqGrid({
    	url: util_getContextPath() + '/sys/sysParam/findSysParam',
        mtype: "POST",
		styleUI: 'Bootstrap',
        datatype: "json",
        caption: '系统参数信息',
        colModel: [ 
            { label: '参数编码',key: true, name: 'code',sortable: false, width: 10 },
            { label: '参数名称', name: 'name',sortable: false, width: 20 },
            { label: '参数值', name: 'value',sortable: false, width: 20 }
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

function querySysParam(){
	var data = $('#sysParamQueryForm').serializeJson();
	$("#sysParamJqGrid").setGridParam({
		postData : data,
		page: 1
	}).trigger("reloadGrid");
}

function del(){
	var codes = $("#sysParamJqGrid").jqGrid('getGridParam','selarrrow');
	if(codes.length==0){
		$.messager.alert("请选中要删除的系统参数信息！",messager_type_info);
	}else{
		$.messager.confirm('是否删除选中系统参数',messager_type_warning,null,
			function(res){
				if(res){
					$.defAjax({
						url:util_getContextPath()+"/sys/sysParam/deleteSysParam",
						dataType: 'text',
						data:{
							'codes' : codes.join(",")
						},
						success:function(res){
							$.messager.alert("删除成功！");
							$("#sysParamJqGrid").trigger("reloadGrid");
						}
					});
				}
			}
		);
	}
}

function add(){
	$('#editDialog').dialog({
		url: util_getContextPath()+"/sys/sysParam/toEditSysParamPage",
		data:{
			operation: 'A'
		},
		title: '新增系统参数',
		height: 280,
		width: 450,
		modal: true,
		buttons:[{
			text: '保存',
			click: function(){
				saveSysParam();
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
	var codes = $("#sysParamJqGrid").jqGrid('getGridParam','selarrrow');
	if(codes.length==0){
		$.messager.alert("请选中要修改的系统参数信息！",messager_type_info);
	}else if(codes.length >1){
		$.messager.alert("一次只能修改一条系统参数信息！",messager_type_info);
	}else{
		$('#editDialog').dialog({
			url: util_getContextPath()+"/sys/sysParam/toEditSysParamPage",
			data:{
				operation: 'U',
				code: codes[0]
			},
			title: '修改系统参数',
			height: 280,
			width: 450,
			modal: true,
			buttons:[{
				text: '保存',
				click: function(){
					saveSysParam();
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

function saveSysParam(){
	$('#sysParamEditForm').isValid(function(valid){
	    if (valid) {
	    	var data = $('#sysParamEditForm').serializeJson();
	    	var url = util_getContextPath()+'/sys/sysParam/updateSysParam';
	    	if(data.oldCode == "") {
	    		url = util_getContextPath()+'/sys/sysParam/addSysParam'
	    	}
	    	$.defAjax({
	    		url : url,
	    		data : data,
	    		dataType : 'text',
	    		success : function(res) {
	    			$.messager.show("保存成功！");
	    			$('#editDialog').dialog.close();
	    			$("#sysParamJqGrid").trigger("reloadGrid");
	    		}
	    	});
	    }
	});
}

function validatorSysParam(){
	$('#sysParamEditForm').validator({
		//timely:2,
		theme:'yellow_top',
		rules: {
	        // 使用正则表达式定义规则
	        nameRegexp: [/^[a-zA-Z0-9_\.]+$/, 
	        	"The code can only consist of alphabetical, number, dot and underscore"]
	    },
		fields: {
	        'code': 'required;length(~16);nameRegexp;remote(jsonp:'
	        	+util_getContextPath()+'/sys/sysParam/isExistSysParamCode)',
	        'name': 'required;length(~16)',
	        'value': 'required;length(~32)'
	    }
	});
}