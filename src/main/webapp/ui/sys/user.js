/**
 * 用户管理脚本
 * @author joker
 * @date 2016-08-28
 */

$(function(){
	$("#userJqGrid").jqGrid({
    	url: util_getContextPath() + '/sys/user/findUser',
        mtype: "POST",
		styleUI: 'Bootstrap',
        datatype: "json",
        caption: '用户信息',
        colModel: [ 
            { name: 'id', key: true,hidden:true},
            { label: '用户名', name: 'userName',sortable: false, width: 30 },
            { label: '昵称', name: 'nickname',sortable: false, width: 30 },
			{ label: '邮箱', name: 'email', sortable: false, width: 30 },
			{ label: '电话', name: 'tel', sortable: false, width: 20 },
			{ label: '备注', name: 'remark', sortable: false, width: 50 }
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
    
	
    $(window).resize(function(){
    	resizeShowHideCol();
    });
    
    function resizeShowHideCol(){
    	var winWidth = document.body.clientWidth;
    	if(winWidth<414){
    		$("#userJqGrid").setGridParam().hideCol(["email","phone","remark"]);
    		$("#userJqGrid").setGridWidth(winWidth-1);
    	}else if(winWidth<768){
    		$("#userJqGrid").setGridParam().hideCol(["remark"]);
    		$("#userJqGrid").setGridParam().showCol(["email","phone"]);
    		$("#userJqGrid").setGridWidth(winWidth-1);
    	}else{
    		$("#userJqGrid").setGridParam().showCol(["email","phone","remark"]);
    		$("#userJqGrid").setGridWidth(winWidth-40);
    	}
    }

    resizeShowHideCol();
});

function queryUser(){
	var data = $('#userQueryForm').serializeJson();
	$("#userJqGrid").setGridParam({
		postData : data,
		page: 1
	}).trigger("reloadGrid");
}

function del(){
	var ids = $("#userJqGrid").jqGrid('getGridParam','selarrrow');
	if(ids.length==0){
		$.messager.alert("请选中要删除的用户信息！",messager_type_info);
	}else{
		$.messager.confirm('是否删除选中用户',messager_type_warning,null,
			function(res){
				if(res){
					$.defAjax({
						url:util_getContextPath()+"/sys/user/deleteUser",
						dataType: 'text',
						data:{
							'ids' : ids.join(",")
						},
						success:function(res){
							$.messager.alert("删除成功！");
							$("#userJqGrid").trigger("reloadGrid");
						}
					});
				}
			}
		);
	}
}

function add(){
	$('#editDialog').dialog({
		url: util_getContextPath()+"/sys/user/toEditUserPage",
		data:{
			operation: 'A'
		},
		title: '新增用户',
		height: 500,
		width: 600,
		modal: true,
		buttons:[{
			text: '保存',
			click: function(){
				saveUser();
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
	var ids = $("#userJqGrid").jqGrid('getGridParam','selarrrow');
	if(ids.length==0){
		$.messager.alert("请选中要修改的用户信息！",messager_type_info);
	}else if(ids.length >1){
		$.messager.alert("一次只能修改一条用户信息！",messager_type_info);
	}else{
		$('#editDialog').dialog({
			url: util_getContextPath()+"/sys/user/toEditUserPage",
			data:{
				operation: 'U',
				id: ids[0]
			},
			title: '修改用户',
			height: 500,
			width: 600,
			modal: true,
			buttons:[{
				text: '保存',
				click: function(){
					saveUser();
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

function saveUser(){
	$('#userEditForm').isValid(function(valid){
	    if (valid) {
	    	var data = $('#userEditForm').serializeJson();
	    	if(data.id == "") data.id = 0;
	    	$.defAjax({
	    		url : util_getContextPath()+'/sys/user/saveUser',
	    		data : data,
	    		dataType : 'text',
	    		success : function(res) {
	    			$.messager.show("保存成功！");
	    			$('#editDialog').dialog.close();
	    			$("#userJqGrid").trigger("reloadGrid");
	    		}
	    	});
	    }
	});
}

function validatorUser(){
	$('#userEditForm').validator({
		//timely:2,
		theme:'yellow_top',
		rules: {
	        // 使用正则表达式定义规则
	        nameRegexp: [/^[a-zA-Z0-9_\.]+$/, "The username can only consist of alphabetical, number, dot and underscore"],
	        mobile: [/^1[3-9]\d{9}$/, "请填写有效的手机号"]
	    },
		fields: {
	        'userName': 'required;length(4~32);nameRegexp;remote(jsonp:'
	        	+util_getContextPath()+'/sys/user/isExistUserName, id:#userId)',
	        'nickname': 'required;length(0~16)',
	        'password': 'required;length(0~32)',
	        'confirmPasswd': 'match(password)',
	        'tel': 'mobile',
	        'email': 'email',
	        'remark': 'length(0~128)'
	    }
	});
}