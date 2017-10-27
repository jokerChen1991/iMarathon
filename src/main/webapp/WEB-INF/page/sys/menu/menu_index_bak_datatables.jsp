<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<c:set var="contextPath" value="<%=request.getContextPath()%>"/>
<!DOCTYPE HTML>
<html lang="zh-CN">
  <head>
    <title>menu index</title>
    <link rel="stylesheet" type="text/css" 
    	href="${contextPath}/ui/DataTables/css/jquery.dataTables.min.css">
  </head>
  <body>
	<div class="col-sm-12">
		<table id="menu_grid" class="display" style="width:100%;">
	        <thead>
	            <tr>
	                <th>名称</th>
	                <th>代码</th>
	                <th>路径</th>
	                <th>顺序</th>
	                <th>图标</th>
	                <th>状态</th>
	            </tr>
	        </thead>
	    </table>
	</div>

	
	<script type="text/javascript" charset="utf8" 
		src="${contextPath}/ui/DataTables/js/jquery.dataTables.min.js"></script>
	<script type="text/javascript" charset="utf8" 
		src="${contextPath}/ui/DataTables/js/dataTables.bootstrap4.min.js"></script>
	<script src="${contextPath}/ui/sys/menu.js"></script>
  </body>
</html>