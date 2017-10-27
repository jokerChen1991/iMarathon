<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<c:set var="contextPath" value="<%=request.getContextPath()%>"/>
<!DOCTYPE HTML>
<html lang="zh-CN">
  <head>
    <title>menu index</title>
    <link rel="stylesheet" href="${contextPath}/ui/zTree/css/zTreeStyle/zTreeStyle.css" type="text/css">
  </head>
  <body>
	<div class="col-sm-3 col-md-2" style="background-color: #f5f5f5;padding: 20px;height: 100%;">
		<ul id="edit_menu_tree" class="ztree" style="width:100%; overflow:auto;"></ul>
	</div>
	<div class="col-sm-9 col-md-10" style="padding: 20px;">
		<form class="form-horizontal">
			<div class="col-sm-12 col-md-6">
				<div class="form-group">
			      <label for="name" class="col-sm-2 control-label">名称：</label>
			      <div class="col-sm-10">
			         <input type="text" class="form-control" id="name" name="name"
			            placeholder="请输菜单名称">
			      </div>
			   </div>
			</div>
			<div class="col-sm-12 col-md-6">
				<div class="form-group">
			      	<label for="code" class="col-sm-2 control-label">代码：</label>
			      	<div class="col-sm-10">
			         	<input type="text" class="form-control" id="code" name="code"
			            	placeholder="请输菜单代码">
			      	</div>
			   	</div>
			</div>
			<div class="col-sm-12 col-md-6">
				<div class="form-group">
			      	<label for="url" class="col-sm-2 control-label">路径：</label>
			      	<div class="col-sm-10">
			         	<input type="text" class="form-control" id="url" name="url" 
			            	placeholder="请输菜单路径">
			      	</div>
			   	</div>
			</div>
			<div class="col-sm-12 col-md-6">
				<div class="form-group">
			      	<label for="sequence" class="col-sm-2 control-label">顺序：</label>
			      	<div class="col-sm-10">
			         	<input type="text" class="form-control" id="sequence" name="sequence"
			            	placeholder="请输菜单顺序">
			      	</div>
			   	</div>
			</div>
			<div class="col-sm-12 col-md-6">
				<div class="form-group">
			      	<label for="icon" class="col-sm-2 control-label">图标：</label>
			      	<div class="col-sm-10">
			         	<input type="text" class="form-control" id="icon" name="icon" 
			            	placeholder="请输菜单图标">
			      	</div>
			   	</div>
			</div>
			<div class="col-sm-12 col-md-6">
				<div class="form-group">
			      	<label for="status" class="col-sm-2 control-label">状态：</label>
			      	<div class="col-sm-10">
			         	<input type="text" class="form-control" id="status" name="status"
			            	placeholder="请输菜单状态">
			      	</div>
			   	</div>
			</div>
		   <div class="form-group">
		      <div class="col-sm-12" style="text-align: right;">
		         <button type="submit" class="btn btn-default">新增</button>
		         <button type="submit" class="btn btn-default">修改</button>
		         <button type="submit" class="btn btn-default">删除</button>
		      </div>
		   </div>
		</form>
	</div>
	
	<script src="${contextPath}/ui/zTree/js/jquery.ztree.core.min.js"></script>
	<script src="${contextPath}/ui/sys/menu.js"></script>
  </body>
</html>