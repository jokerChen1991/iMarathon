/**
 * 赛事管理脚本
 * @author joker
 * @date 2017-10-28
 */


$(function(){
	$("#matchJqGrid").jqGrid({
    	url: util_getContextPath() + '/marathon/console/match/findMatch',
        mtype: "POST",
		styleUI: 'Bootstrap',
        datatype: "json",
        caption: '赛事信息',
        colModel: [ 
            { name: 'id', key: true,hidden:true},
            { label: '比赛名称', name: 'matchName',sortable: false, width: 30 },
            { label: '比赛日期', name: 'matchDate',sortable: false, width: 30 },
			{ label: '比赛地区', name: 'matchArea', sortable: false, width: 30 },
			{ label: '项目', name: 'matchEvent', sortable: false, width: 30 },
			{ label: '官网', name: 'officialWeb', sortable: false, width: 60 }
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

function queryMatch(){
	var data = $('#matchQueryForm').serializeJson();
	$("#matchJqGrid").setGridParam({
		postData : data,
		page: 1
	}).trigger("reloadGrid");
}

function del(){
	var codes = $("#matchJqGrid").jqGrid('getGridParam','selarrrow');
	if(codes.length==0){
		$.messager.alert("请选中要删除的赛事信息！",messager_type_info);
	}else{
		$.messager.confirm('是否删除选中赛事信息',messager_type_warning,null,
			function(res){
				if(res){
					$.defAjax({
						url:util_getContextPath()+"/marathon/console/match/deleteMatch",
						dataType: 'text',
						data:{
							'ids' : codes
						},
						success:function(res){
							$.messager.alert("删除成功！");
							$("#matchJqGrid").trigger("reloadGrid");
						}
					});
				}
			}
		);
	}
}

function add(){
	$('#editDialog').dialog({
		url: util_getContextPath()+"/marathon/console/match/toEditMatchPage",
		data:{
			operation: 'A'
		},
		title: '新增赛事信息',
		height: 520,
		width: 760,
		modal: true,
		buttons:[{
			text: '保存',
			click: function(){
				saveEntity();
			}
		},{
			text: '关闭', 
			click: function(){
				$("#dialog_id_editDialog").find("a.dialog-close-button").click();
			}
		}]
	});
}

function edit(){
	var codes = $("#matchJqGrid").jqGrid('getGridParam','selarrrow');
	if(codes.length==0){
		$.messager.alert("请选中要修改的赛事信息！",messager_type_info);
	}else if(codes.length >1){
		$.messager.alert("一次只能修改一条赛事信息！",messager_type_info);
	}else{
		$('#editDialog').dialog({
			url: util_getContextPath()+"/marathon/console/match/toEditMatchPage",
			data:{
				operation: 'U',
				id: codes[0]
			},
			title: '修改赛事信息',
			height: 520,
			width: 760,
			modal: true,
			buttons:[{
				text: '保存',
				click: function(){
					saveEntity();
				}
			},{
				text: '关闭', 
				click: function(){
					$("#dialog_id_editDialog").find("a.dialog-close-button").click();
				}
			}]
		});
	}
}

function subAdd(){
	subOperationFlag = 'A';
	$('#subEditDialog').show();
	$("#resetBtn").click();
	$('#subEditDialog').dialog({
		title: '新增赛事类型',
		height: 320,
		width: 600,
		modal: true,
		buttons:[{
			text: '保存',
			click: function(){
				saveSubForm();
			}
		},{
			text: '关闭', 
			click: function(){
				$('#subEditDialog').dialog.close();
			}
		}]
	});
	validatorSubForm();
}

function subEdit(){
	var dom = $("#matchTypeBody").find("input:checkbox:checked");
	if(dom == null || dom.length != 1){
		$.messager.alert("请选择一条数据进行修改！");
		return;
	}
	subOperationFlag = 'U';
	var data = editData[$(dom[0]).val()];
	for(var i in data){
		$($("#subForm").find("[name="+i+"]")[0]).val(data[i]);
	}
	$('#subEditDialog').show();
	$('#subEditDialog').dialog({
		title: '修改赛事类型',
		height: 320,
		width: 600,
		modal: true,
		buttons:[{
			text: '保存',
			click: function(){
				saveSubForm();
			}
		},{
			text: '关闭', 
			click: function(){
				$('#subEditDialog').dialog.close();
			}
		}]
	});
	validatorSubForm();
}

function subRemove(){
	var dom = $("#matchTypeBody").find("input:checkbox:checked");
	if(dom != null && dom.length > 0){
		$.messager.confirm('是否删除选中数据',messager_type_warning,null,
				function(res){
					if(res){
						for(var i=0; i< dom.length; i++){
							delete editData[$(dom[i]).val()];
							$(dom[i]).parent().parent().remove();
						}
					}
				}
			);
	}else{
		$.messager.alert("请选择一条数据进行修改！");
		return;
	}
}

function saveEntity(){
	$('#editForm').isValid(function(valid){
	    if (valid) {
	    	var data = $('#editForm').serializeJson();
	    	if(data.id == "") data.id = 0;
	    	var matchItem = [];
	    	if(editData != null){
	    		for(var i in editData){
	    			delete editData[i].text;
	    			matchItem.push(editData[i]);
	    		}
	    	}
	    	data.matchItem = JSON.stringify(matchItem);
	    	$.defUploadFile({
	    		url : util_getContextPath()+'/marathon/console/match/saveMatch',
	    		data : data,
	    		fileElementId:'fileInputHidden',
	    		dataType: 'text',
	    		success:function(res){
	    			$.messager.show("保存成功！");
	    			$("#dialog_id_editDialog").find("a.dialog-close-button").click();
	    			queryMatch();
	    		}
	    	});
	    }
	});
}

function saveSubForm(){
	$('#subForm').isValid(function(valid){
	    if (valid) {
	    	var data = $('#subForm').serializeJson();
	    	var text=$("#subForm").find("[name=marathonType]").find("option:selected").text();
	    	data.text = text;
	    	appendHtmlToTbody(data);
	    	$('#subEditDialog').dialog.close();
	    }
	});
}

function appendHtmlToTbody(data){
	if(subOperationFlag == 'A'){
		//说明是新增
		++editIndex;
		editData[editIndex] = data;
		var html = "<tr>" +
			"<td><input type='checkbox' value='"+editIndex+"'/></td>" +
			"<td>"+data.text+"</td>" +
			"<td>"+data.applicationNum+"</td>" +
			"<td>"+data.registrationFee+"</td>" +
			"</tr>";
		$("#matchTypeBody").append(html);
	}else{
		console.info(data);
		//说明是修改
		var dom = $("#matchTypeBody").find("input:checkbox:checked");
		editData[$(dom[0]).val()] = data;
		var html = "<td><input type='checkbox' value='"+$(dom[0]).val()+"' checked/></td>" +
			"<td>"+data.text+"</td>" +
			"<td>"+data.applicationNum+"</td>" +
			"<td>"+data.registrationFee+"</td>";
		$(dom[0]).parent().parent().html(html);
	}
}

function clickTdSelectCheckbox(dom){
	if($(dom).is(':checked')){
		$(dom).prop('checked', false);
	}else{
		$(dom).prop('checked', true);
	}
}

function validatorForm(){
	$('#editForm').validator({
		theme:'yellow_top',
		rules: {
	        dateTime: [/^[1-9]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])\s+(20|21|22|23|[0-1]\d):[0-5]\d:[0-5]\d$/, "时间格式错误"],
			date: [/^[1-9]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/, "日期格式错误"]
	    },
		fields: {
	        'matchName': 'required;length(0~16);',
	        'matchDate': 'required;date',
	        'registStartTimeStr': 'required;dateTime',
	        'registEndTimeStr': 'required;dateTime',
	        'matchArea': 'required',
	        'province': 'required',
	        'officialWeb': 'required'
	    }
	});
}

function validatorSubForm(){
	$('#subForm').validator({
		theme:'yellow_top',
		rules: {
			time: [/^(20|21|22|23|[0-1]\d):[0-5]\d:[0-5]\d$/, "时间格式错误"],
			number: [/^\d+(\.\d+)?$/,"只能输入数字"]
		},
		fields: {
	        'course': 'required;number;',
	        'applicationNum': 'required;integer(+0);',
	        'registrationFee': 'required;number;',
	        'startingTime': 'required;time;',
	        'closingTime': 'required;time;',
	        'startingPoint': 'required;length(0~16);',
	        'terminalPoint': 'required;length(0~16);'
	    }
	});
}

function checkboxSelectAll(dom){
	if($(dom).is(':checked')){
		//选中全部
		$("#matchTypeBody").find("input:checkbox").prop('checked', true);
	}else{
		//全部取消选中
		$("#matchTypeBody").find("input:checkbox").prop('checked', false);
	}
}

