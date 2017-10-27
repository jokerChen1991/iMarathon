/**
 * 数据字典脚本
 * @author joker
 * @date 2017-07-02
 */

$(function(){
	initSortList();
});

function initSortList(delFlag){
	$.defAjax({
		url:util_getContextPath()+"/sys/dict/findDictSort",
		dataType: 'text',
		success:function(res){
			res = eval('('+res+')');
			if(res != null && res.length>0){
				if(delFlag){
					reloadGrid(res[0].code);
				}else{
					initDictGrid(res[0].code);
				}
				$("#sortCodeHidden").val(res[0].code);
				for(var i=0; i<res.length; i++){
					$("#dictSortList").append(
						'<li style="list-style-type:none;'
						+ 'border-bottom: #ccc 1px solid;'
						+ 'padding-left:32px;" '
						+ 'id="'+res[i].code+'SortLi" '
						+ 'onclick="clickDictSort(\''+res[i].code+'\',this);">'
						+ res[i].nameZh
						+ '</li>'
					);
				}
				$("#"+res[0].code+"SortLi").css("background-color","#64A776");
			}else {
				if(delFlag){
					reloadGrid("");
				}else{
					initDictGrid("");
				}
			}
		}
	});
}

function clickDictSort(sortCode,dom){
	$("#sortCodeHidden").val(sortCode);
	reloadGrid(sortCode);
	$("#dictSortList li").css("background-color",""); 
	var dom = $(dom);
	dom.css("background-color","#64A776");
}

function reloadGrid(sortCode){
	$("#dictJqGrid").setGridParam({
		postData : {
			'sortCode': sortCode
		},
		page: 1
	}).trigger("reloadGrid");
}

function initDictGrid(sortCode){
	$("#dictJqGrid").jqGrid({
    	url: util_getContextPath() + '/sys/dict/findDictBySortCode',
        mtype: "POST",
        postData: {
        	sortCode: sortCode
        },
		styleUI: 'Bootstrap',
        datatype: "json",
        caption: '字典信息',
        colModel: [ 
            { name: 'id', key: true,hidden:true},
            { label: '编码', name: 'code',sortable: false, width: 30 },
            { label: '中文名称', name: 'nameZh',sortable: false, width: 30 },
			{ label: '英文名称', name: 'nameEn', sortable: false, width: 30 },
			{ label: '中文繁体', name: 'nameTw', sortable: false, width: 20 },
			{ label: '状态', name: 'status', sortable: false, width: 20 }
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
}

/**
 * 添加数据字典类型
 * @returns
 */
function addDictSort(){
	$('#editDialog').dialog({
		url: util_getContextPath()+"/sys/dict/toEditDictSortPage",
		data:{
			operation: 'A'
		},
		title: '新增数据字典类型',
		height: 300,
		width: 450,
		modal: true,
		buttons:[{
			text: '保存',
			click: function(){
				saveDictSort();
			}
		},{
			text: '关闭', 
			click: function(){
				$('#editDialog').dialog.close();
			}
		}]
	});
}

/**
 * 删除数据字典类型
 * @returns
 */
function deleteDictSort(){
	var sortCode = $("#sortCodeHidden").val();
	if(sortCode == null || sortCode == ""){
		$.messager.alert("请选择要删除的字典类型！",messager_type_info);
	} else {
		$.messager.confirm('是否删除选中数据字典类型',messager_type_warning,null,
			function(res){
				if(res){
					$.defAjax({
						url:util_getContextPath()+"/sys/dict/deleteDictSort",
						dataType: 'text',
						data:{
							'sortCode' : sortCode
						},
						success:function(res){
							//$("#"+sortCode+"SortLi").remove();
							$("#dictSortList").children().remove();
							$("#sortCodeHidden").val("");
							initSortList(true);
						}
					});
				}
			}
		);
		
	}
}

/**
 * 修改数据字典类型
 * @returns
 */
function editDictSort(){
	var sortCode = $("#sortCodeHidden").val();
	if(sortCode == null || sortCode == ""){
		$.messager.alert("请选择要修改的字典类型！",messager_type_info);
	} else {
		$('#editDialog').dialog({
			url: util_getContextPath()+"/sys/dict/toEditDictSortPage",
			data:{
				operation: 'U',
				sortCode: sortCode
			},
			title: '修改数据字典类型',
			height: 300,
			width: 450,
			modal: true,
			buttons:[{
				text: '保存',
				click: function(){
					saveDictSort();
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

function validatorDictSort(){
	$('#dictSortEditForm').validator({
		//timely:2,
		theme:'yellow_top',
		rules: {
	        // 使用正则表达式定义规则
	        nameRegexp: [/^[a-zA-Z0-9_\.]+$/, "The username can only consist of alphabetical, number, dot and underscore"]
	    },
		fields: {
	        'code': 'required;length(~32);nameRegexp;remote(jsonp:'
	        	+util_getContextPath()+'/sys/dict/isExistSortCode)',
	        'nameZh': 'required;length(~16)',
        	'nameEn': 'required;length(~16)',
    		'nameTw': 'required;length(~16)'
	    }
	});
}

/**
 * 保存数据字典类型
 * @returns
 */
function saveDictSort(){
	$('#dictSortEditForm').isValid(function(valid){
	    if (valid) {
	    	var data = $('#dictSortEditForm').serializeJson();
	    	var url = util_getContextPath()+'/sys/dict/updateDictSort';
	    	if(data.oldCode == "") {
	    		url = util_getContextPath()+'/sys/dict/addDictSort'
	    	}
	    	$.defAjax({
	    		url : url,
	    		data : data,
	    		dataType : 'text',
	    		success : function(res) {
	    			$.messager.show("保存成功！");
	    			if(data.oldCode == ""){
	    				$("#dictSortList").append(
    						'<li style="list-style-type:none;border-bottom: #ccc 1px solid;'
    						+ 'padding-left:32px;" '
    						+ 'id="'+data.code+'SortLi" '
    						+ 'onclick="clickDictSort(\''+data.code+'\',this);">'
    						+ data.nameZh
    						+ '</li>'
	    				);
	    			} else {
	    				$("#"+$("#sortCodeHidden").val()+"SortLi")
	    					//.attr("onclick","clickDictSort(\'"+data.code+"\',this);")
	    					//.attr("id",data.code+"SortLi")
	    					.text(data.nameZh);
	    				
	    				//$("#sortCodeHidden").val(data.code);
	    			}
	    			
	    			$('#editDialog').dialog.close();
	    		}
	    	});
	    }
	});
}

function saveDict(){
	$('#dictEditForm').isValid(function(valid){
	    if (valid) {
	    	var data = $('#dictEditForm').serializeJson();
	    	if(data.id == "") data.id = 0;
	    	data.sortCode = $("#sortCodeHidden").val();
	    	$.defAjax({
	    		url : util_getContextPath()+'/sys/dict/saveDict',
	    		data : data,
	    		dataType : 'text',
	    		success : function(res) {
	    			$.messager.show("保存成功！");
	    			$('#editDialog').dialog.close();
	    			$("#dictJqGrid").trigger("reloadGrid");
	    		}
	    	});
	    }
	});
}

/**
 * 新增数据字典
 * @returns
 */
function addDict(){
	var sortCode = $("#sortCodeHidden").val();
	if(sortCode == null || sortCode == ""){
		$.messager.alert("请先选择字典类型！",messager_type_info);
	} else {
		$('#editDialog').dialog({
			url: util_getContextPath()+"/sys/dict/toEditDictPage",
			data:{
				operation: 'A'
			},
			title: '新增数据字典',
			height: 300,
			width: 450,
			modal: true,
			buttons:[{
				text: '保存',
				click: function(){
					saveDict();
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

/**
 * 修改数据字典
 * @returns
 */
function editDict(){
	var ids = $("#dictJqGrid").jqGrid('getGridParam','selarrrow');
	if(ids.length==0){
		$.messager.alert("请选中要修改的字典信息！",messager_type_info);
	}else if(ids.length >1){
		$.messager.alert("一次只能修改一条字典信息！",messager_type_info);
	}else{
		$('#editDialog').dialog({
			url: util_getContextPath()+"/sys/dict/toEditDictPage",
			data:{
				operation: 'U',
				id: ids[0]
			},
			title: '修改数据字典',
			height: 300,
			width: 450,
			modal: true,
			buttons:[{
				text: '保存',
				click: function(){
					saveDict();
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

/**
 * 删除数据字典
 * @returns
 */
function delDict(){
	var ids = $("#dictJqGrid").jqGrid('getGridParam','selarrrow');
	if(ids.length==0){
		$.messager.alert("请选中要删除的数据字典信息！",messager_type_info);
	}else{
		$.messager.confirm('是否删除选中数据字典',messager_type_warning,null,
			function(res){
				if(res){
					$.defAjax({
						url:util_getContextPath()+"/sys/dict/deleteDict",
						dataType: 'text',
						data:{
							'ids' : ids.join(",")
						},
						success:function(res){
							$.messager.alert("删除成功！");
							$("#dictJqGrid").trigger("reloadGrid");
						}
					});
				}
			}
		);
	}
}

function validatorDict(){
	var sortCode = $("#sortCodeHidden").val();
	$('#dictEditForm').validator({
		//timely:2,
		theme:'yellow_top',
		rules: {
	        // 使用正则表达式定义规则
	        nameRegexp: [/^[a-zA-Z0-9_\.]+$/, "The username can only consist of alphabetical, number, dot and underscore"],
	        mobile: [/^1[3-9]\d{9}$/, "请填写有效的手机号"]
	    },
		fields: {
	        'code': 'required;length(~32);nameRegexp;remote(jsonp:'
	        	+util_getContextPath()+'/sys/dict/isExistDictCode?sortCode='+sortCode+', id:#dictId)',
	        'nameZh': 'required;length(~16)',
        	'nameEn': 'required;length(~16)',
    		'nameTw': 'required;length(~16)'
	    }
	});
}

