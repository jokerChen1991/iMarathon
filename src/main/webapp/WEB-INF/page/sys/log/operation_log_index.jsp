<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<c:set var="contextPath" value="<%=request.getContextPath()%>" />
<!DOCTYPE HTML>
<html lang="zh-CN">
	<head>
		<title>user index</title>
		<meta charset="utf-8" />
	    <link rel="stylesheet" type="text/css" media="screen" 
	    	href="${contextPath}/ui/jqGrid/css/ui.jqgrid-bootstrap.css" />
	    	
	</head>
	<body>
		<div class="jqgrid-container-sm jqgrid-container-xs row" style="border: 1px solid #ddd;margin-bottom: 5px;">
			<form id="operationLogQueryForm">
				<div class="col-sm-4 col-xs-12" style="padding:5px 0 0px 0;">
					<label class="lable-for-input" style="float:left;padding:8px;">操作类型 : </label>
					<div class="col-xs-9">
					<input class="form-control" name=operationType
						value="${operationLog.operationType}" type="text" placeholder="操作类型"/>
					</div>
				</div>
				<div class="col-sm-4 col-xs-12" style="padding:5px 0 0px 0;">
					<label class="lable-for-input" style="float: left;padding:8px;">操作结果: </label>
					<div class="col-xs-9">
						<input type="text" class="form-control" value="${operationLog.operationStatus}"
							placeholder="操作结果" name="operationStatus" >
					</div>
				</div>
				<div class="col-sm-4 col-xs-12" style="padding:5px 0 0px 0;">
					<input type="button" class="btn col-xs-4 col-sm-2" 
						style="float:right;" value="查询" onclick="queryOperationLog()">
				</div>
			</form>
		</div>
	
		<div class="jqgrid-container-sm jqgrid-container-xs">
		    <table id="operationLogJqGrid"></table>
		    <div id="jqGridPager"></div>
		</div>

		<script src="${contextPath}/ui/jqGrid/js/jquery-1.11.0.min.js"
			type="text/javascript" charset="utf-8"></script>
	    <script src="${contextPath}/ui/jqGrid/js/i18n/grid.locale-cn.js"
			type="text/javascript" charset="utf-8"></script>
	    <script src="${contextPath}/ui/jqGrid/js/jquery.jqGrid.min.js"
			type="text/javascript" charset="utf-8"></script>
		<script src="${contextPath}/ui/sys/operationLog.js" type="text/javascript"></script>
		<script src="${contextPath}/ui/base/js/basebox.js" type="text/javascript"></script>
		<script src="${contextPath}/ui/base/js/scriptExtend.js" type="text/javascript"></script>
		
		<script src="${contextPath}/ui/nice-validator-1.0.10/dist/jquery.validator.min.js?local=zh-CN"></script>
	</body>
</html>