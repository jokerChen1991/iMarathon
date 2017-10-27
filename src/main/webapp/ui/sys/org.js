/**
 * 组织机构管理脚本
 * @author joker
 * @date 2017-07-15
 */
var zTreeObj;

var selectedNode;

var treeNodeData;

var operationFlag;

$(function(){
	f_load_org_tree();
	cancel();
});

function f_load_org_tree(){
	var setting = {
		/*async: {
			enable: false,
			url: util_getContextPath() + "/sys/org/findOrg",
			type: "post",
			contentType: "application/json",
			dataType: "json",
			autoParam: ["code"]
		},*/
		data: {
			simpleData: {
				enable: true,
				idKey: "code",
				pIdKey: "parentCode",
				rootPId: 'ROOT'
			}
		},
		callback: {
			onClick: zTreeOnClick
		}
	};
	//zTreeObj = $.fn.zTree.init($("#org_tree"), setting);
	load_tree_data(setting);
}

function load_tree_data(setting){
	$.defAjax({
		url: util_getContextPath() + "/sys/org/findOrg",
		success : function(res) {
			treeNodeData = res;
			zTreeObj = $.fn.zTree.init($("#org_tree"), setting,treeNodeData);
			zTreeObj.expandAll(true);
			zTreeObj.selectNode(selectedNode);
		}
	});
}

function zTreeOnClick(event, treeId, treeNode) {
	selectedNode = treeNode;
	treeNodeSelected();
}

function treeNodeSelected(){
	$("#orgEditForm input[name='parentName']").attr("disabled", "disabled");
	$("#orgEditForm input[name='name']").attr("disabled", "disabled");
	$("#orgEditForm input[name='sequence']").attr("disabled", "disabled");
	$("#orgEditButton").hide();
	$("#orgOperationButton").show();
	
	if(selectedNode != null){
		$("#orgEditForm input[name='name']").val(selectedNode.name);
		$("#orgEditForm input[name='code']").val(selectedNode.code);
		$("#orgEditForm input[name='parentName']").val(selectedNode.parentName);
		$("#orgEditForm input[name='parentCode']").val(selectedNode.parentCode);
		$("#orgEditForm input[name='sequence']").val(selectedNode.sequence);
	}else{
		$("#orgEditForm input").val("");
	}
}

function add(){
	$("#orgEditForm input").val("");
	$("#orgEditForm input[name='name']").removeAttr("disabled");
	$("#orgEditForm input[name='sequence']").removeAttr("disabled");
	
	if (selectedNode != null && selectedNode != "") {
		$("#orgEditForm input[name='parentName']").val(selectedNode.name);
		$("#orgEditForm input[name='parentCode']").val(selectedNode.code);
	}
	$("#orgOperationButton").hide();
	$("#orgEditButton").show();
	validatorOrg();
	operationFlag = "add";
}

function edit(){
	if(selectedNode != null && selectedNode != ""){
		$("#orgEditForm input[name='name']").removeAttr("disabled");
		$("#orgEditForm input[name='sequence']").removeAttr("disabled");
		$("#orgOperationButton").hide();
		$("#orgEditButton").show();
		validatorOrg();
		
		operationFlag="update";
	}else{
		$.messager.alert("请先选择要修改的数据！");
		return;
	}
}

function del(){
	if(selectedNode != null && selectedNode != ""){
		$.defAjax({
			url: util_getContextPath() + "/sys/org/deleteOrg",
			dataType : 'text',
			data:{
				code : selectedNode.code
			},
			success : function(res) {
				selectedNode = null;
				f_load_org_tree();
				treeNodeSelected();
				$.messager.show("删除成功！");
			}
		});
	}else{
		$.messager.alert("请先选择要删除的数据！");
		return;
	}
}

function save(){
	$('#orgEditForm').isValid(function(valid){
	    if (valid) {
	    	var data = $('#orgEditForm').serializeJson();
	    	var url = util_getContextPath()+'/sys/org/updateOrg';
	    	if(data.code == null || data.code == "") {
	    		url = util_getContextPath()+'/sys/org/addOrg'
	    	}
	    	$.defAjax({
	    		url : url,
	    		data : data,
	    		dataType : 'text',
	    		success : function(res) {
	    			if(operationFlag == "update"){
	    				selectedNode.name = data.name;
	    				selectedNode.sequence = data.sequence;
	    			}
	    			
	    			f_load_org_tree();
	    			treeNodeSelected();
	    			$.messager.show("保存成功！");
	    		}
	    	});
	    }
	});
}

function cancel(){
	treeNodeSelected();
}

function validatorOrg(){
	$('#orgEditForm').validator({
		//timely:2,
		theme:'yellow_top',
		rules: {
	        // 使用正则表达式定义规则
	        nameRegexp: [/^[a-zA-Z0-9_\.]+$/, 
	        	"The code can only consist of alphabetical, number, dot and underscore"]
	    },
		fields: {
	        'name': 'required;length(~16)',
	        'sequence': 'required;integer(+)'
	    }
	});
}