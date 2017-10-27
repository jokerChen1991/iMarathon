<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<c:set var="contextPath" value="<%=request.getContextPath()%>"/>
<!DOCTYPE HTML>
<html lang="zh-CN">
  <head>
    <title>menu index</title>
    <%-- <link rel="stylesheet" type="text/css" 
    	href="${contextPath}/ui/DataTables/css/jquery.dataTables.min.css"> --%>

	<link rel="stylesheet" type="text/css" 
		href="${contextPath}/ui/jqGrid/css/jquery-ui.min.css" />
	<link rel="stylesheet" type="text/css" 
		href="${contextPath}/ui/jqGrid/css/jquery-ui.theme.min.css" />
	<link rel="stylesheet" type="text/css" 
	href="${contextPath}/ui/jqGrid/css/ui.jqgrid-bootstrap-ui.css" />
	<link rel="stylesheet" type="text/css" 
		href="${contextPath}/ui/jqGrid/css/ui.jqgrid.css" />
	
  </head>
  <body>
	<!-- <div class="col-sm-12">
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
	</div> -->
<table id="tree"></table>
    <div id="pager"></div>
<!-- 	    <div class="jqGrid_wrapper">  
	        <table id="jqGridList"></table>  
	        <div id="jqGridPager"></div>  
	    </div>   -->
<!--     <div class="main" id="main">
jqGrid所在
<table id="grid-table"></table>
jqGrid 浏览导航栏所在
<div id="grid-pager"></div>
</div> -->

	<script src="${contextPath}/ui/jqGrid/js/jquery-1.11.0.min.js" 
		type="text/javascript" charset="utf-8"></script>
	<script src="${contextPath}/ui/jqGrid/js/i18n/grid.locale-cn.js" 
		type="text/javascript" charset="utf-8"></script>
	<script src="${contextPath}/ui/jqGrid/js/jquery.jqGrid.min.js" 
		type="text/javascript" charset="utf-8"></script>

	
	<%-- <script type="text/javascript" charset="utf8" 
		src="${contextPath}/ui/DataTables/js/jquery.dataTables.min.js"></script>
	<script type="text/javascript" charset="utf8" 
		src="${contextPath}/ui/DataTables/js/dataTables.bootstrap4.min.js"></script> --%>
	<script src="${contextPath}/ui/sys/menu.js"></script>
  </body>
</html>