<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<c:set var="contextPath" value="<%=request.getContextPath()%>"/>
<!DOCTYPE HTML>
<html lang="zh-CN">
  	<head>
	<title>user role</title>
  	</head>
	<body>
		<div style="width: 50%;float: left;">
			<table id="userJqGrid"></table>
			<div id="jqGridPager"></div>
		</div>
		<div style="width: 50%;float: left;">
			<table id="roleJqGrid"></table>
		</div>
		<div class="button-positon-bottom-xs button-positon-bottom-sm 
			col-xs-12 col-sm-4 col-sm-offset-8">
			<input type="button" class="btn col-xs-4 col-sm-2" value="保存" onclick="saveUserRole()">
		</div>
		<script>
			$(function () {
				loadRoleUser(true);
				loadRole(false,"user");
			});
		</script>
	</body>
</html>