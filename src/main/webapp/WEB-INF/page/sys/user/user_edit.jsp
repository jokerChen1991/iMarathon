<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<c:set var="contextPath" value="<%=request.getContextPath()%>" />
<!DOCTYPE HTML>
<html lang="zh-CN">
	<head>
		<title>user edit</title>
		<meta charset="utf-8" />
	</head>
	<body>
		<form id="userEditForm" class="form-horizontal col-sm-12" 
			style="padding: 60px 0 10px 0;">
			
			<input type="hidden" value="${user.id}" name="id" id="userId">
			
			<div class="form-group" style="margin: 0px;">
				<div class="col-sm-6 col-xs-12" style="padding:5px 0 5px 0;">
					<label class="col-xs-3 lable-for-input">用户名：</label>
					<div class="col-xs-9">
						<%-- <input type="text" class="form-control" value="${user.userName}"
							placeholder="用户名" name="userName" > --%>
						<input class="form-control" name="userName"
							value="${user.userName}" type="text" placeholder="username"/>
					</div>
				</div>
				<div class="col-sm-6 col-xs-12" style="padding:5px 0 5px 0;">
					<label class="col-xs-3 lable-for-input">昵称：</label>
					<div class="col-xs-9">
						<input type="text" class="form-control" value="${user.nickname}"
							placeholder="昵称" name="nickname" >
					</div>
				</div>
				<c:if test="${user.id == null || user.id == ''}">
					<div class="col-sm-6 col-xs-12" style="padding:5px 0 5px 0;">
					<label class="col-xs-3 lable-for-input">密码：</label>
					<div class="col-xs-9">
						<input type="password" class="form-control" value="${user.password}"
							placeholder="密码" name="password" >
					</div>
					</div>
					<div class="col-sm-6 col-xs-12" style="padding:5px 0 5px 0;">
						<label class="col-xs-3 lable-for-input">确认密码：</label>
						<div class="col-xs-9">
							<input type="password" class="form-control" value="${user.password}"
								name="confirmPasswd" placeholder="确认密码">
						</div>
					</div>
				</c:if>
				<div class="col-sm-6 col-xs-12" style="padding:5px 0 5px 0;">
					<label class="col-xs-3 lable-for-input">电话：</label>
					<div class="col-xs-9">
						<input type="text" class="form-control" value="${user.tel}"
							placeholder="电话" name="tel" >
					</div>
				</div>
				<div class="col-sm-6 col-xs-12" style="padding:5px 0 5px 0;">
					<label class="col-xs-3 lable-for-input">邮箱：</label>
					<div class="col-xs-9">
						<input type="text" class="form-control" value="${user.email}"
							placeholder="邮箱" name="email" >
					</div>
				</div>
				<div class="col-sm-12 col-xs-12" style="padding:5px 0 5px 0;">
					<label class="col-sm-1p5 col-xs-3 lable-for-input">备注：</label>
					<div class="col-sm-10p5 col-xs-9">
						<textarea class="form-control"
							placeholder="备注" name="remark" >${user.remark}</textarea>
					</div>
				</div>
			</div>
		</form>
		<script type="text/javascript">
			$(function(){
				validatorUser();
			});
		</script>
	</body>
</html>