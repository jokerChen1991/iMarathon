<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="d" uri="/WEB-INF/tag/dictTag.tld"%>
<c:set var="contextPath" value="<%=request.getContextPath()%>" />
<!DOCTYPE HTML>
<html lang="zh-CN">
	<head>
		<title>match edit</title>
		<meta charset="utf-8" />
	    <link rel="stylesheet" type="text/css" media="screen" 
    	href="${contextPath}/ui/datetimepicker/css/bootstrap-datetimepicker.min.css" />
    	<link rel="stylesheet" type="text/css" media="screen"
			href="${contextPath}/ui/marathon/style/console.css" />
		<style>
			caption{padding:0 20px;}
			#match_event_table th,
			#match_event_table td{text-align: center;}
			/* .form-horizontal .form-group {
			    margin-right: 0px;
			    margin-left: 0px;
			} */
			.n-yellow .msg-wrap{z-index:3;}
		</style>
	</head>
	<body>
		<form id="editForm" class="form-horizontal col-sm-12" 
			style="padding: 35px 0 0 0;">
			<div style="overflow: visible;">
				<input type="hidden" value="${entity.id}" name="id">
				<div class="form-group col-sm-6 col-xs-12">
					<label class="col-sm-4 lable-for-input">赛事名称：</label>
					<div class="col-sm-8">
						<input class="form-control" name="matchName" value="${entity.matchName}"/>
					</div>
				</div>
				<div class="form-group col-sm-6 col-xs-12">
					<label class="col-sm-4 lable-for-input">比赛日期：</label>
					<div class="col-sm-8">
						<div class="input-group date form_date">
		                    <input class="form-control" size="16" type="text" style="height:36px;"
		                    	name="matchDate" value="${entity.matchDate}">
							<span class="input-group-addon">
								<span class="glyphicon glyphicon-calendar"></span>
							</span>
		                </div>
					</div>
				</div>
				<div class="form-group col-sm-6 col-xs-12">
					<label class="col-sm-4 lable-for-input">报名开始时间：</label>
					<div class="col-sm-8">
						<div class="input-group date form_datetime">
		                    <input class="form-control" size="16" type="text" style="height:36px;"
		                    	name="registStartTimeStr" value="${entity.registStartTimeStr}">
							<span class="input-group-addon">
								<span class="glyphicon glyphicon-calendar"></span>
							</span>
		                </div>
					</div>
				</div>
				<div class="form-group col-sm-6 col-xs-12">
					<label class="col-sm-4 lable-for-input">报名结束时间：</label>
					<div class="col-sm-8">
						<div class="input-group date form_datetime">
		                    <input class="form-control" size="16" type="text" style="height:36px;"
		                    	name="registEndTimeStr" value="${entity.registEndTimeStr}">
							<span class="input-group-addon">
								<span class="glyphicon glyphicon-calendar"></span>
							</span>
		                </div>
					</div>
				</div>
				<div class="form-group col-sm-6 col-xs-12">
					<label class="col-sm-4 lable-for-input">比赛地区：</label>
					<div class="col-sm-4">
						<select class="form-control" name="province"
							id="provinceSelect" value="${entity.province}"/>
					</div>
					<div class="col-sm-4">
						<select class="form-control" name="matchArea"
							id="citySelect" value="${entity.city}"/>
					</div>
				</div>
				<div class="form-group col-sm-6 col-xs-12">
					<label class="col-sm-4 lable-for-input">赛事标志：</label>
					<div class="col-sm-8">
						<div class="input-group">
							<input id="imgCover" readonly="readonly" 
								class="form-control"  style="height:36px;">
							<span class="input-group-addon">
								<a onclick="$('#fileInputHidden').click();">上传文件</a>
							</span>
						</div>
					</div>
				</div>
				<div class="form-group col-sm-12 col-xs-12">
					<label class="col-sm-2 lable-for-input" style="width:16%;">官网地址：</label>
					<div class="col-sm-10"  style="width:80%;">
						<input class="form-control" name="officialWeb" value="${entity.officialWeb}"/>
					</div>
				</div>
			</div>
		</form>
		<input id="fileInputHidden" name="imgFile" type="file" style="display: none;">  
		<table class="table table-bordered" id="match_event_table">
			<caption>
				<a onclick="subAdd();" class="add_btn button"></a>
				<a onclick="subRemove();" class="remove_btn button"></a>
				<a onclick="subEdit();" class="edit_btn button"></a>
			</caption>
			<thead>
				<tr>
					<th style="width:40px;">
						<input type="checkbox" onclick="checkboxSelectAll(this);">
					</th>
					<th>赛事类型</th>
					<th>报名人数</th>
					<th>报名费</th>
				</tr>
			</thead>
			<tbody id="matchTypeBody">
			</tbody>
		</table>
		
		<div id="subEditDialog" style="display:none;">
			<form id="subForm" style="padding: 35px 0 10px 0;">
				<input type="hidden" namae="id"/>
				<div class="form-group col-sm-6 col-xs-12">
					<label class="col-sm-4 lable-for-input">项目类型：</label>
					<div class="col-sm-8">
						<d:select cssClass="form-control" name="marathonType" sortCode="marathon_type"/>
					</div>
				</div>
				<div class="form-group col-sm-6 col-xs-12">
					<label class="col-sm-4 lable-for-input">赛程：</label>
					<div class="col-sm-8">
						<input class="form-control" name="course"/>
					</div>
				</div>
				<div class="form-group col-sm-6 col-xs-12">
					<label class="col-sm-4 lable-for-input">报名人数：</label>
					<div class="col-sm-8">
						<input class="form-control" name="applicationNum"/>
					</div>
				</div>
				<div class="form-group col-sm-6 col-xs-12">
					<label class="col-sm-4 lable-for-input">报名费：</label>
					<div class="col-sm-8">
						<input class="form-control" name="registrationFee"/>
					</div>
				</div>
				<div class="form-group col-sm-6 col-xs-12">
					<label class="col-sm-4 lable-for-input">起跑时间：</label>
					<div class="col-sm-8">
						<input class="form-control" name="startingTime"/>
					</div>
				</div>
				<div class="form-group col-sm-6 col-xs-12">
					<label class="col-sm-4 lable-for-input">关门时间：</label>
					<div class="col-sm-8">
						<input class="form-control" name="closingTime"/>
					</div>
				</div>
				<div class="form-group col-sm-6 col-xs-12">
					<label class="col-sm-4 lable-for-input">起点：</label>
					<div class="col-sm-8">
						<input class="form-control" name="startingPoint"/>
					</div>
				</div>
				<div class="form-group col-sm-6 col-xs-12">
					<label class="col-sm-4 lable-for-input">终点：</label>
					<div class="col-sm-8">
						<input class="form-control" name="terminalPoint"/>
					</div>
				</div>
				<input type="reset" style="display:none" id="resetBtn">
			</form>
		</div>

		<script type="text/javascript">
			var editDataStr = '${matchEvnet}';
			var editData = {};
			var editIndex = 0;
			var subOperationFlag = 'A';
			$(function(){
				if(editDataStr != null && editDataStr.length >0){
					var resData = JSON.parse(editDataStr);
					if(resData != null && resData.length>0){
						for(var i =0; i<resData.length;i++){
							appendHtmlToTbody(resData[i]);
						}
					}
				}
				validatorForm();
				validatorSubForm();
				
				$('.form_date').datetimepicker({
			        language:  'zh-CN',
			        format: "yyyy-mm-dd",
			        showMeridian: true,
			        autoclose: true,
			        todayBtn: true,
			        minView: 2
			    });
				$('.form_datetime').datetimepicker({
			        language:  'zh-CN',
			        format: "yyyy-mm-dd HH:mm:ss",
			        showMeridian: true,
			        autoclose: true,
			        todayBtn: true
			    });
				
				$('#fileInputHidden').change(function() {
					$('#imgCover').val($(this).val());  
				});
				initCitySelect("provinceSelect","citySelect",'${entity.province}','${entity.matchArea}');
				
			});
		</script>
	</body>
</html>