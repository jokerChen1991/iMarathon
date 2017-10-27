<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<c:set var="contextPath" value="<%=request.getContextPath()%>" />
<!DOCTYPE HTML>
<html lang="zh-CN">
	<head>
		<title>role edit</title>
		<meta charset="utf-8" />
	    <link rel="stylesheet" href="${contextPath}/ui/bootstrap-3.3.5/validator/css/bootstrapValidator.min.css">  
	    
    	<script src="${contextPath}/ui/bootstrap-3.3.5/js/bootstrap.min.js"></script>
    	<script src="${contextPath}/ui/bootstrap-3.3.5/validator/js/bootstrapValidator.js"></script>
	</head>
	<body>
		<form id="roleEditForm" class="form-horizontal col-sm-12" 
			style="padding: 30px 0 10px 0;">
			
			<input type="hidden" value="${role.roleCode}" name="oldCode" id="oldCode">
			
			<div class="form-group" style="margin: 0px;">
				<div class="col-sm-12 col-xs-12" style="padding:5px 0 5px 0;">
					<label class="col-xs-3 lable-for-input">角色代码：</label>
					<div class="col-xs-9">
						<input class="form-control" name="roleCode"
							value="${role.roleCode}" type="text" placeholder="roleCode"
							<c:if test="${role.roleCode != null && role.roleCode != ''}">disabled</c:if>
						/>
					</div>
				</div>
				<div class="col-sm-12 col-xs-12" style="padding:5px 0 5px 0;">
					<label class="col-xs-3 lable-for-input">角色名称：</label>
					<div class="col-xs-9">
						<input type="text" class="form-control" value="${role.roleName}"
							placeholder="roleName" name="roleName" >
					</div>
				</div>
			</div>
		</form>
		<script type="text/javascript">
			$(function(){
				validatorRole();
			});
		</script>
	</body>
</html>