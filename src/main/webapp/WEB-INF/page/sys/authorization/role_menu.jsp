<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<c:set var="contextPath" value="<%=request.getContextPath()%>"/>
<!DOCTYPE HTML>
<html lang="zh-CN">
  	<head>
	<title>role menu</title>
  	</head>
	<body>
		<div style="width: 50%;float: left;">
			<table id="roleJqGrid"></table>
			<div id="jqGridPager"></div>
		</div>
		<div style="width: 50%;float: left;">
			<div style="border-radius: 3px;border: 1px solid #ddd;">
				<div style="padding: 4px 8px;position: relative;min-height: 37px;
					margin-right: 2px;border-bottom: 1px solid #ddd;">
					<span style="padding-top: 5px;vertical-align: middle;">菜单信息</span>
				</div>
				<ul id="menu_tree" class="ztree" style="width:100%; overflow:auto;"></ul>
			</div>
		</div>
		<div class="button-positon-bottom-xs button-positon-bottom-sm 
			col-xs-12 col-sm-4 col-sm-offset-8">
			<input type="button" class="btn col-xs-4 col-sm-2" value="保存" onclick="saveRoleMenu()">
		</div>
		<script>
			$(function () {
				loadRole(true,"menu");
				loadMenu();
			});
		</script>
	</body>
</html>