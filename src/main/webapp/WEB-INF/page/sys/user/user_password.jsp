<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<c:set var="contextPath" value="<%=request.getContextPath()%>" />
<!DOCTYPE HTML>
<html lang="zh-CN">
	<head>
		<title>update password</title>
		<meta charset="utf-8" />
	</head>
	<body>
		<form id="userEditPasswordForm" class="form-horizontal col-sm-12" 
			style="padding: 30px 0 10px 0;">
			<div class="form-group" style="margin: 0px;">
				<div class="col-sm-12 col-xs-12" style="padding:5px 0 5px 0;">
					<label class="col-xs-3 lable-for-input">原密码：</label>
					<div class="col-xs-9">
						<input type="password" class="form-control"
							placeholder="原密码" name="oldPassword" >
					</div>
				</div>
				<div class="col-sm-12 col-xs-12" style="padding:5px 0 5px 0;">
					<label class="col-xs-3 lable-for-input">新密码：</label>
					<div class="col-xs-9">
						<input type="password" class="form-control"
							placeholder="新密码" name="newPassword" >
					</div>
				</div>
				<div class="col-sm-12 col-xs-12" style="padding:5px 0 5px 0;">
					<label class="col-xs-3 lable-for-input">确认密码：</label>
					<div class="col-xs-9">
						<input type="password" class="form-control"
							name="confirmPasswd" placeholder="确认密码">
					</div>
				</div>
			</div>
		</form>
		<script src="${contextPath}/ui/nice-validator-1.0.10/dist/jquery.validator.min.js?local=zh-CN"></script>
		
		<script type="text/javascript">
			$(function(){
				validatorUser();
			});
			
			function validatorUser(){
				$('#userEditPasswordForm').validator({
					theme:'yellow_top',
					fields: {
				        'oldPassword': 'required;',
				        'newPassword': 'required;length(0~32)',
				        'confirmPasswd': 'required;match(newPassword)'
				    }
				});
			}
		</script>
	</body>
</html>