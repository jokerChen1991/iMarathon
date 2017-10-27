/**
 * 操作日志脚本
 * @author joker
 * @date 2017-07-02
 */

$(function(){
	$("#operationLogJqGrid").jqGrid({
    	url: util_getContextPath() + '/sys/operationLog/findOperationLog',
        mtype: "POST",
		styleUI: 'Bootstrap',
        datatype: "json",
        caption: '操作日志',
        colModel: [ 
            { name: 'id', key: true,hidden:true},
            { label: '操作类型', name: 'operationType',sortable: false, width: 10 },
            { label: '描述', name: 'des',sortable: false, width: 20 },
			{ label: '调用的方法', name: 'method', sortable: false, width: 30 },
			{ label: '参数', name: 'params', sortable: false, width: 20 },
			{ label: '操作人', name: 'operator', sortable: false, width: 10 },
			{ label: '操作时间', name: 'operationTime',sortable: false, width: 20,
				formatter:function(cellvalue, options, row){
					return new Date(cellvalue).toLocaleString()
				}},
			{ label: '发起请求的地址IP', name: 'requestIp', sortable: false, width: 15 },
			{ label: '操作结果', name: 'operationStatus', sortable: false, width: 10 }
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

function queryOperationLog(){
	var data = $('#operationLogQueryForm').serializeJson();
	$("#operationLogJqGrid").setGridParam({
		postData : data,
		page: 1
	}).trigger("reloadGrid");
}