<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="d" uri="/WEB-INF/tag/dictTag.tld"%>
<c:set var="contextPath" value="<%=request.getContextPath()%>" />
<!DOCTYPE HTML>
<html lang="zh-CN">
	<head>
		<title>match edit</title>
		<meta charset="utf-8" />
	</head>
	<body>
		<form id="matchEditForm" class="form-horizontal col-sm-12" 
			style="padding: 60px 0 10px 0;">
			
			<input type="hidden" value="${match.id}" name="id" id="matchId">
			
			<div class="form-group" style="margin: 0px;">
				<div class="col-sm-6 col-xs-12" style="padding:5px 0 5px 0;">
					<label class="col-xs-3 lable-for-input">赛事名称：</label>
					<div class="col-xs-9">
						<input class="form-control" name="matchName"
							value="${match.matchName}" type="text" placeholder="赛事名称"/>
					</div>
				</div>
				<div class="col-sm-6 col-xs-12" style="padding:5px 0 5px 0;">
					<label class="col-xs-3 lable-for-input">比赛时间：</label>
					<div class="col-xs-9">
						<input type="text" class="form-control" value="${match.matchDate}"
							placeholder="比赛时间" name="matchDate" >
					</div>
				</div>
				<div class="col-sm-6 col-xs-12" style="padding:5px 0 5px 0;">
					<label class="col-xs-3 lable-for-input">报名开始时间：</label>
					<div class="col-xs-9">
						<input class="form-control" name="registStartTime"
							value="${match.registStartTime}" type="text" placeholder="报名开始时间"/>
					</div>
				</div>
				<div class="col-sm-6 col-xs-12" style="padding:5px 0 5px 0;">
					<label class="col-xs-3 lable-for-input">报名结束时间：</label>
					<div class="col-xs-9">
						<input type="text" class="form-control" value="${match.registEndTime}"
							placeholder="报名结束时间" name="registEndTime" >
					</div>
				</div>
				
				
				<div class="col-sm-6 col-xs-12" style="padding:5px 0 5px 0;">
					<label class="col-xs-3 lable-for-input">赛事名称：</label>
					<div class="col-xs-9">
						<d:select cssClass="form-control" sortCode="marathon_type"/>
					</div>
				</div>
				<div class="col-sm-6 col-xs-12" style="padding:5px 0 5px 0;">
					<label class="col-xs-3 lable-for-input">比赛时间：</label>
					<div class="col-xs-9">
						<input type="text" class="form-control" value="${match.matchDate}"
							placeholder="比赛时间" name="matchDate" >
					</div>
				</div>
				

				<div class="col-sm-12 col-xs-12" style="padding:5px 0 5px 0;">
					<label class="col-sm-1p5 col-xs-3 lable-for-input">备注：</label>
					<div class="col-sm-10p5 col-xs-9">
						<textarea class="form-control"
							placeholder="备注" name="remark" >${match.remark}</textarea>
					</div>
				</div>
			</div>
		</form>
		<script type="text/javascript">
			/* $(function(){
				validatorUser();
			}); */
		</script>
	</body>
</html>