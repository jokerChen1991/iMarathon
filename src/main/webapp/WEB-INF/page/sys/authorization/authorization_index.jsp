<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<c:set var="contextPath" value="<%=request.getContextPath()%>"/>
<!DOCTYPE HTML>
<html lang="zh-CN">
  <head>
	<title>authorization index</title>
  	<link rel="stylesheet" type="text/css" media="screen"
	  		href="${contextPath}/ui/jqGrid/css/ui.jqgrid-bootstrap.css" />
	<link rel="stylesheet" href="${contextPath}/ui/zTree/css/zTreeStyle/zTreeStyle.css" type="text/css">
  </head>
	<body>
		<ul id="myTab" class="nav nav-tabs">
			<li class="active">
				<a data-toggle="tab" onclick="f_loadPage('sys/authorization/role_user')">角色-用户</a>
			</li>
			<li><a data-toggle="tab" onclick="f_loadPage('sys/authorization/user_role')">用户-角色</a></li>
			<li><a data-toggle="tab" onclick="f_loadPage('sys/authorization/role_menu')">角色菜单</a></li>
			<li><a data-toggle="tab" onclick="f_loadPage('sys/authorization/menu_role')">菜单角色</a></li>
		</ul>
		<div class="container-fluid">
			<div class="row" id="authorization_container">
		      	
			</div>
	    </div>

		<script src="${contextPath}/ui/jqGrid/js/jquery-1.11.0.min.js"
				type="text/javascript" charset="utf-8"></script>
		<script src="${contextPath}/ui/jqGrid/js/i18n/grid.locale-cn.js"
				type="text/javascript" charset="utf-8"></script>
		<script src="${contextPath}/ui/jqGrid/js/jquery.jqGrid.min.js"
				type="text/javascript" charset="utf-8"></script>
		<script src="${contextPath}/ui/sys/authorization.js" type="text/javascript"></script>
		<script src="${contextPath}/ui/base/js/basebox.js" type="text/javascript"></script>
		<script src="${contextPath}/ui/base/js/scriptExtend.js" type="text/javascript"></script>
		<script src="${contextPath}/ui/zTree/js/jquery.ztree.core.min.js"></script>
		<script src="${contextPath}/ui/zTree/js/jquery.ztree.excheck.min.js"></script>
		<script>
			$(function () {
				f_loadPage("sys/authorization/role_user");
			});
		</script>

	</body>
</html>