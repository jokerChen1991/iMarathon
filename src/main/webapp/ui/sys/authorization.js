/**
 * 权限管理脚本
 * @author joker
 * @date 2017-08-18
 */

var jrgridSetting = {
    mtype: "POST",
    styleUI: 'Bootstrap',
    datatype: "json",
    autowidth: true,
    altRows: true,
    viewrecords: true,
    rownumbers: true,
    hidegrid: false,
    height: 'auto',
    jsonReader: {
        root: "datas",		//数据模型的入口，查询结果数据
        page: "pageNo",		//当前的页码
        total: "totalPages",			//总的页码数
        records: "totalRecords",		//总的数据数
        repeatitems: false	//是否需要根据colModel顺序显示数据
    }
};

var page = {
	rowNum: 10,
    pager: "#jqGridPager",
    pagerpos:'right',
    recordpos:'left',
    prmNames: {page: "pageNo", rows: "pageSize"},	
};

var zTreeObj;

function loadRole(needPage,func) {
	var setting = {
		caption: '角色信息',
        colModel: [
            { label: '角色编码',key: true, name: 'roleCode',sortable: false, width: 10 },
            { label: '角色名称', name: 'roleName',sortable: false, width: 20 }
        ]
	};
	if(needPage){
		setting.url = util_getContextPath() + '/sys/role/findRole';
		if(func == "user"){
			setting.onSelectRow = function(roleCode) {
	        	$("#userJqGrid").setGridParam({
	        		postData : {roleCode:roleCode}
	        	}).trigger("reloadGrid");
	        };
		}else{
			setting.onSelectRow = function(roleCode) {
				loadMenu(roleCode);
	        };
			
		}
        $.extend(true,setting,jrgridSetting,page);
	}else{
		setting.multiselect= true;
		if(func == "user"){
			setting.url = util_getContextPath() + '/sys/authorization/findRoleByUserName';
			setting.loadComplete = function(xhr){
	        	selectRowOnLoad(xhr,"roleJqGrid","roleCode","userName");
	        }
		}else{
			setting.url = util_getContextPath() + '/sys/authorization/findRoleByMenuCode';
			setting.loadComplete = function(xhr){
	        	selectRowOnLoad(xhr,"roleJqGrid","roleCode","menuCode");
	        }
		}
		
		$.extend(true,setting,jrgridSetting);
	}
    $("#roleJqGrid").jqGrid(setting);
}

function loadRoleUser(needPage) {
	var setting = {
		caption: '用户信息',
        colModel: [ 
            { label: '用户名',key:true, name: 'userName',sortable: false, width: 30 },
            { label: '昵称', name: 'nickname',sortable: false, width: 30 }/*,
            { name: 'roleCode',hidden:true,formatter:function(cellvalue, options, rowObject){
            	if(cellvalue != undefined && cellvalue != null && cellvalue != ""){
            		$("#userJqGrid").jqGrid('setSelection',rowObject.userName,false);
            	}
            }}*/
		],
	};
	if(needPage){
		setting.url = util_getContextPath() + '/sys/user/findUser',
		setting.onSelectRow = function(userName) {
        	$("#roleJqGrid").setGridParam({
        		postData : {userName:userName}
        	}).trigger("reloadGrid");
        };
		$.extend(setting,jrgridSetting,page);
	}else{
		setting.url = util_getContextPath() + '/sys/authorization/findUserByRoleCode',
		setting.multiselect= true;
		setting.loadComplete = function(xhr){
        	selectRowOnLoad(xhr,"userJqGrid","userName","roleCode");
        }
		$.extend(setting,jrgridSetting);
	}
    $("#userJqGrid").jqGrid(setting);
}

function f_loadPage(url){
	$('#authorization_container').load(util_getContextPath()+"/common/loadPage",
			{"url":url});
}

/**
 * 保存角色和用户信息
 * @returns
 */
function saveRoleUser(){
	var userNames = $("#userJqGrid").jqGrid('getGridParam','selarrrow');
	var roleCode = $("#roleJqGrid").jqGrid('getGridParam','selrow');
	if(roleCode == null || roleCode == ""){
		$.messager.alert("请先选择一个角色！");
		return ;
	}
	$.defAjax({
		url:util_getContextPath()+"/sys/authorization/saveRoleUser",
		dataType: 'text',
		data:{
			'userNames' : userNames.join(","),
			'roleCode' : roleCode
		},
		success:function(res){
			$.messager.alert("保存成功！");
		}
	});
}

/**
 * 保存用户角色信息
 * @returns
 */
function saveUserRole(){
	var userName = $("#userJqGrid").jqGrid('getGridParam','selrow');
	var roleCodes = $("#roleJqGrid").jqGrid('getGridParam','selarrrow');
	if(userName == null || userName == ""){
		$.messager.alert("请先选择一个用户！");
		return ;
	}
	$.defAjax({
		url:util_getContextPath()+"/sys/authorization/saveUserRole",
		dataType: 'text',
		data:{
			'userName' : userName,
			'roleCodes' : roleCodes.join(",")
		},
		success:function(res){
			$.messager.alert("保存成功！");
		}
	});
}

function selectRowOnLoad(data,jqgridName,rowIdField,checkField) {
	for(var i=0; i<data.length; i++){
		rowid = data[i][rowIdField];
		var checked = data[i][checkField];
		if (rowid != undefined && checked != undefined && checked != null && checked != "") {
			$("#"+jqgridName).jqGrid('setSelection',rowid,false);
		}
	}
}


function loadMenu(roleCode){
	var setting = {
		/*async: {
			enable: false,
			url: util_getContextPath() + "/sys/org/findOrg",
			type: "post",
			contentType: "application/json",
			dataType: "json",
			autoParam: ["code"]
		},*/
		check: {
			enable: true/*,
			chkStyle: "checkbox",
			chkboxType: { "Y": "p", "N": "s" }*/
		},
		data: {
			key: {
				name : "menuName"
			},
			simpleData: {
				enable: true,
				idKey: "menuCode",
				pIdKey: "parentCode",
				rootPId: 'ROOT'
			}
		}/*,
		callback: {
			onClick: zTreeOnClick
		}*/
	};
	//zTreeObj = $.fn.zTree.init($("#org_tree"), setting);
	$.defAjax({
		url: util_getContextPath() + "/sys/authorization/findMenuByRoleCode",
		data:{
			roleCode : roleCode
		},
		success : function(res) {
			treeNodeData = res;
			zTreeObj = $.fn.zTree.init($("#menu_tree"), setting,treeNodeData);
			zTreeObj.expandAll(true);
			//zTreeObj.selectNode(selectedNode);
		}
	});
}

function loadMenuTree(){
	var setting = {
		data: {
			key: {
				name : "menuName"
			},
			simpleData: {
				enable: true,
				idKey: "menuCode",
				pIdKey: "parentCode",
				rootPId: 'ROOT'
			}
		},
		callback: {
			onClick: function(event, treeId, treeNode) {
				$("#roleJqGrid").setGridParam({
	        		postData : {menuCode:treeNode.menuCode}
	        	}).trigger("reloadGrid");
			}
		}
	};
	$.defAjax({
		url: util_getContextPath() + "/sys/authorization/findMenuByRoleCode",
		success : function(res) {
			treeNodeData = res;
			zTreeObj = $.fn.zTree.init($("#menu_tree"), setting,treeNodeData);
			zTreeObj.expandAll(true);
		}
	});
}

/**
 * 保存角色和菜单信息
 * @returns
 */
function saveRoleMenu(){
	var nodes = zTreeObj.getCheckedNodes(true);
	var roleCode = $("#roleJqGrid").jqGrid('getGridParam','selrow');
	if(roleCode == null || roleCode == ""){
		$.messager.alert("请先选择一个角色！");
		return ;
	}
	var menuCodes= [];
	if(nodes != null && nodes.length>0){
		for(var i=0; i< nodes.length; i++){
			menuCodes.push(nodes[i].menuCode);
		}
	}
	$.defAjax({
		url:util_getContextPath()+"/sys/authorization/saveRoleMenu",
		dataType: 'text',
		data:{
			'menuCodes' : menuCodes.join(","),
			'roleCode' : roleCode
		},
		success:function(res){
			$.messager.alert("保存成功！");
		}
	});
}

/**
 * 保存菜单和角色信息
 * @returns
 */
function saveMenuRole(){
	var nodes = zTreeObj.getSelectedNodes();
	var roleCodes = $("#roleJqGrid").jqGrid('getGridParam','selarrrow');
	if(nodes == null || nodes == ""){
		$.messager.alert("请先选择一个菜单！");
		return ;
	}
	$.defAjax({
		url:util_getContextPath()+"/sys/authorization/saveMenuRole",
		dataType: 'text',
		data:{
			'roleCodes' : roleCodes.join(","),
			'menuCode' : nodes[0].menuCode
		},
		success:function(res){
			$.messager.alert("保存成功！");
		}
	});
}