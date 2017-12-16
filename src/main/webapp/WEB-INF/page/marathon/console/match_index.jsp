<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<c:set var="contextPath" value="<%=request.getContextPath()%>" />
<!DOCTYPE HTML>
<html lang="zh-CN">
	<head>
		<title>match manager index</title>
		<meta charset="utf-8" />
	    <link rel="stylesheet" type="text/css" media="screen" 
	    	href="${contextPath}/ui/jqGrid/css/ui.jqgrid-bootstrap.css" />
	</head>
	<body>
		<div class="jqgrid-container-sm jqgrid-container-xs row" style="border: 1px solid #ddd;margin-bottom: 5px;">
			<form id="matchQueryForm">
				<div class="col-sm-2 col-xs-12" style="padding:5px 0 0px 0;">
					<label class="lable-for-input" style="float:left;padding:8px;">比赛名称 : </label>
					<div class="col-xs-8">
					<input class="form-control" name="matchName" type="text"/>
					</div>
				</div>
				<div class="col-sm-5 col-xs-12" style="padding:5px 0 0px 0;">
					<label class="lable-for-input" style="float: left;padding:8px;">比赛时间 : </label>
					<div class="col-xs-4 col-sm-4">
						<div class="input-group date form_date">
		                    <input class="form-control" size="16" type="text" name="queryStartDate">
							<span class="input-group-addon">
								<span class="glyphicon glyphicon-calendar"></span>
							</span>
		                </div>
		            </div>
		            <div class="col-sm-1" style="padding-top:8px;">~</div>
		            <div class="col-xs-4 col-sm-4">
		                <div class="input-group date form_date">
		                    <input class="form-control" size="16" type="text" name="queryEndDate">
							<span class="input-group-addon">
								<span class="glyphicon glyphicon-calendar"></span>
							</span>
		                </div>
					</div>
				</div>
				<div class="col-sm-4 col-xs-12" style="padding:5px 0 0px 0;">
					<label class="lable-for-input" style="float: left;padding:8px;">比赛地区: </label>
					<div class="col-sm-4">
						<select class="form-control" name="province" id="provinceQuery"/>
					</div>
					<div class="col-sm-4">
						<select class="form-control" name="city" id="cityQuery"/>
					</div>
				</div>
				<div class="col-sm-1 col-xs-12" style="padding:5px 0 0px 0;">
					<input type="button" class="btn" style="float:right;" value="查询" onclick="queryMatch()">
				</div>
			</form>
		</div>
	
		<div class="jqgrid-container-sm jqgrid-container-xs">
		    <table id="matchJqGrid"></table>
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
		<script src="${contextPath}/ui/marathon/js/console/match.js" type="text/javascript"></script>
		<script src="${contextPath}/ui/base/js/basebox.js" type="text/javascript"></script>
		<script src="${contextPath}/ui/base/js/scriptExtend.js" type="text/javascript"></script>
		
		<script src="${contextPath}/ui/nice-validator-1.0.10/dist/jquery.validator.min.js?local=zh-CN"></script>
		
		<script src="${contextPath}/ui/base/js/ajaxfileupload.js"
			type="text/javascript"></script>
			
		<script src="${contextPath}/ui/datetimepicker/js/bootstrap-datetimepicker.min.js"></script>
		<script src="${contextPath}/ui/datetimepicker/js/locales/bootstrap-datetimepicker.zh-CN.js"
		 	charset="UTF-8"></script>
		<script src="${contextPath}/ui/base/js/area.js"></script>
		
		<script type="text/javascript">
			$(function(){
				$('.form_date').datetimepicker({
			        language:  'zh-CN',
			        format: "yyyy-mm-dd",
			        showMeridian: true,
			        autoclose: true,
			        todayBtn: true,
			        minView: 2
			    });
			});
			
			initCitySelect("provinceQuery","cityQuery");
		</script>
	</body>
</html>