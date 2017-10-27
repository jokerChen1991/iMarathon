<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<c:set var="contextPath" value="<%=request.getContextPath()%>" />
<!DOCTYPE HTML>
<html lang="zh-CN">
	<head>
		<title>role index</title>
		<meta charset="utf-8" />
	    <link rel="stylesheet" type="text/css" media="screen" 
	    	href="${contextPath}/ui/jqGrid/css/ui.jqgrid-bootstrap.css" />
	    	
	</head>
	<body>
		<div class="jqgrid-container-sm jqgrid-container-xs row" style="border: 1px solid #ddd;margin-bottom: 5px;">
			<form id="roleQueryForm">
				<div class="col-sm-4 col-xs-12" style="padding:5px 0 0 0;">
					<label class="lable-for-input" style="float:left;padding:8px;">角色编码 : </label>
					<div class="col-xs-9">
					<input class="form-control" name="roleCode" 
						type="text" placeholder="角色编码"/>
					</div>
				</div>
				<div class="col-sm-4 col-xs-12" style="padding:5px 0 0 0;">
					<label class="lable-for-input" style="float: left;padding:8px;">角色名称: </label>
					<div class="col-xs-9">
						<input type="text" class="form-control"
							placeholder="角色名称" name="roleName" >
					</div>
				</div>
				<div class="col-sm-4 col-xs-12" style="padding:5px 0 0px 0;">
					<input type="button" class="btn col-xs-4 col-sm-2" 
						style="float:right;" value="查询" onclick="queryRole()">
				</div>
			</form>
		</div>
	
		<div class="jqgrid-container-sm jqgrid-container-xs">
		    <table id="roleJqGrid"></table>
		    <div id="jqGridPager"></div>
		</div>

		<div class="button-positon-bottom-xs button-positon-bottom-sm 
			col-xs-12 col-sm-4 col-sm-offset-8">
			<input type="button" class="btn col-xs-4 col-sm-2" value="删除" onclick="del()">
			<input type="button" class="btn col-xs-4 col-sm-2" value="修改" onclick="edit()">
			<input type="button" class="btn col-xs-4 col-sm-2" value="新增" onclick="add()">
		</div>
		
		<div id="editDialog"></div>

		<script src="${contextPath}/ui/jqGrid/js/jquery-1.11.0.min.js"
			type="text/javascript" charset="utf-8"></script>
	    <script src="${contextPath}/ui/jqGrid/js/i18n/grid.locale-cn.js"
			type="text/javascript" charset="utf-8"></script>
	    <script src="${contextPath}/ui/jqGrid/js/jquery.jqGrid.min.js"
			type="text/javascript" charset="utf-8"></script>
		<script src="${contextPath}/ui/sys/role.js" type="text/javascript"></script>
		<script src="${contextPath}/ui/base/js/basebox.js" type="text/javascript"></script>
		<script src="${contextPath}/ui/base/js/scriptExtend.js" type="text/javascript"></script>
		
		<script src="${contextPath}/ui/nice-validator-1.0.10/dist/jquery.validator.min.js?local=zh-CN"></script>
	</body>
</html>