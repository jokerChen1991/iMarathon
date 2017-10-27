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
	    <link rel="stylesheet" type="text/css"
	    	href="${contextPath}/ui/zTree/css/zTreeStyle/zTreeStyle.css">	
	</head>
	<body>
		
		<input id="sortCodeHidden" type="hidden"/>
	
		<div class="col-lg-2 col-md-3 col-sm-4 col-xs-2" 
			style="border-right: #ccc 1px solid;padding: 0;">
			<div class="col-sm-12" style="background-color: #418BCA;">
				<span style="font-size: 18px;color: #fff">
					数据字典类型
				</span>
				<span style="font-size: 18px;float: right;">
					<a style="color:#fff;" href="#" onclick="addDictSort();">+</a>
					&nbsp;
					<a style="color:#fff;" href="#" onclick="deleteDictSort();">-</a>
					&nbsp;
					<a style="color:#fff;" href="#" onclick="editDictSort();">✎</a>
				</span>
			</div>
			<ul id="dictSortList" style="padding:0;">
			</ul>
		</div>
		<div class="col-lg-10 col-md-9 col-sm-8 col-xs-10">
			<!-- <div class="jqgrid-container-sm jqgrid-container-xs"> -->
			    <table id="dictJqGrid"></table>
			    <div id="jqGridPager"></div>
			<!-- </div> -->
		</div>
		
		<div class="button-positon-bottom-xs button-positon-bottom-sm 
			col-xs-12 col-sm-4 col-sm-offset-8" style="margin-top: 20px;">
			<input type="button" class="btn col-xs-4 col-sm-2" value="删除" onclick="delDict()">
			<input type="button" class="btn col-xs-4 col-sm-2" value="修改" onclick="editDict()">
			<input type="button" class="btn col-xs-4 col-sm-2" value="新增" onclick="addDict()">
		</div>
		
		<div id="editDialog"></div>
	
		<script src="${contextPath}/ui/jqGrid/js/jquery-1.11.0.min.js"
			type="text/javascript" charset="utf-8"></script>
	    <script src="${contextPath}/ui/jqGrid/js/i18n/grid.locale-cn.js"
			type="text/javascript" charset="utf-8"></script>
	    <script src="${contextPath}/ui/jqGrid/js/jquery.jqGrid.min.js"
			type="text/javascript" charset="utf-8"></script>
		<script src="${contextPath}/ui/sys/dict.js" type="text/javascript"></script>
		<script src="${contextPath}/ui/base/js/basebox.js" type="text/javascript"></script>
		<script src="${contextPath}/ui/base/js/scriptExtend.js" type="text/javascript"></script>
		
		<script src="${contextPath}/ui/nice-validator-1.0.10/dist/jquery.validator.min.js?local=zh-CN"></script>
	</body>
</html>