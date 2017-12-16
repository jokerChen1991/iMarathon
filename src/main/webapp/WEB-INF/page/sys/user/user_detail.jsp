<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<c:set var="contextPath" value="<%=request.getContextPath()%>" />
<!DOCTYPE HTML>
<html lang="zh-CN">
	<head>
		<title>user detail</title>
		<meta charset="utf-8" />
	</head>
	<body>
		<div class="col-md-10 col-md-offset-1" style="padding-top:10px;">
			<table class="table table-bordered">
				<tbody>
					<tr>
						<td style="width:20%;">用户名：</td>
						<td style="width:30%;">${user.userName}</td>
						<td style="width:20%;">昵称：</td>
						<td style="width:30%;">${user.nickname}</td>
					</tr>
					<tr>
						<td>电话：</td>
						<td>${user.tel}</td>
						<td>邮箱：</td>
						<td>${user.email}</td>
					</tr>
					<tr>
						<td>备注：</td>
						<td colspan="3">${user.remark}</td>
					</tr>
				</tbody>
			</table>
		</div>
	</body>
</html>