<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<c:set var="contextPath" value="<%=request.getContextPath()%>"/>
<!DOCTYPE HTML>
<html lang="zh-CN">
  <head>
    <title>org index</title>
    <link rel="stylesheet" href="${contextPath}/ui/zTree/css/zTreeStyle/zTreeStyle.css" type="text/css">
  	<script src="${contextPath}/ui/nice-validator-1.0.10/dist/jquery.validator.min.js?local=zh-CN"></script>
  	<script src="${contextPath}/ui/zTree/js/jquery.ztree.core.min.js"></script>
	<script src="${contextPath}/ui/sys/org.js"></script>
  </head>
  <body>
	<div class="col-sm-3 col-md-2" style="background-color: #f5f5f5;padding: 20px;height: 100%;">
		<ul id="org_tree" class="ztree" style="width:100%; overflow:auto;"></ul>
	</div>
	<div class="col-sm-9 col-md-10" style="padding: 40px 0 20px 0;">
		<form id="orgEditForm" class="form-horizontal col-sm-12">
			
			<input type="hidden" name="parentCode">
			<input type="hidden" name="code">
			
			<div class="form-group" style="margin: 0px;">
				<div class="col-sm-6 col-xs-12" style="padding:5px 0 5px 0;">
					<label class="col-xs-3 lable-for-input">上级组织机构：</label>
					<div class="col-xs-9">
						<input type="text" class="form-control" name="parentName"/>
					</div>
				</div>
				<div class="col-sm-6 col-xs-12" style="padding:5px 0 5px 0;">
					<label class="col-xs-3 lable-for-input">名称：</label>
					<div class="col-xs-9">
						<input type="text" class="form-control" name="name">
					</div>
				</div>
				<div class="col-sm-12 col-xs-12" style="padding:5px 0 5px 0;">
					<label class="col-sm-1p5 col-xs-3 lable-for-input">顺序：</label>
					<div class="col-sm-10p5 col-xs-9">
						<input type="text" class="form-control" name="sequence">
					</div>
				</div>
			</div>
		</form>
	</div>
	<div class="button-positon-bottom-xs button-positon-bottom-sm 
		col-xs-12 col-sm-4 col-sm-offset-8" id="orgOperationButton">
		<input type="button" class="btn col-xs-4 col-sm-2" value="删除" onclick="del()">
		<input type="button" class="btn col-xs-4 col-sm-2" value="修改" onclick="edit()">
		<input type="button" class="btn col-xs-4 col-sm-2" value="新增" onclick="add()">
	</div>
	<div class="button-positon-bottom-xs button-positon-bottom-sm 
		col-xs-12 col-sm-4 col-sm-offset-8" id="orgEditButton" style="display: none;">
		<input type="button" class="btn col-xs-4 col-sm-2" value="取消" onclick="cancel()">
		<input type="button" class="btn col-xs-4 col-sm-2" value="保存" onclick="save()">
	</div>
  </body>
</html>