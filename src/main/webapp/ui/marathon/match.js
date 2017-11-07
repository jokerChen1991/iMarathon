/**
 * 赛事管理脚本
 * @author joker
 * @date 2017-10-28
 */

$(function(){
	$("#matchJqGrid").jqGrid({
    	url: util_getContextPath() + '/marathon/match/findMatch',
        mtype: "POST",
		styleUI: 'Bootstrap',
        datatype: "json",
        caption: '用户信息',
        colModel: [ 
            { name: 'id', key: true,hidden:true},
            { label: '用户名', name: 'matchName',sortable: false, width: 30 },
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
						url:util_getContextPath()+"/marathon/match/deleteMatch",
						dataType: 'text',
						data:{
							'codes' : codes.join(",")
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
		url: util_getContextPath()+"/marathon/match/toEditMatchPage",
		data:{
			operation: 'A'
		},
		title: '新增赛事信息',
		height: 500,
		width: 600,
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
	var codes = $("#matchJqGrid").jqGrid('getGridParam','selarrrow');
	if(codes.length==0){
		$.messager.alert("请选中要修改的赛事信息！",messager_type_info);
	}else if(codes.length >1){
		$.messager.alert("一次只能修改一条赛事信息！",messager_type_info);
	}else{
		$('#editDialog').dialog({
			url: util_getContextPath()+"/marathon/match/toEditMatchPage",
			data:{
				operation: 'U',
				code: codes[0]
			},
			title: '修改赛事信息',
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