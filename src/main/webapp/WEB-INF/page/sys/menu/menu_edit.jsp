<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<c:set var="contextPath" value="<%=request.getContextPath()%>" />
<!DOCTYPE HTML>
<html lang="zh-CN">
	<head>
		<title>menu edit</title>
		<meta charset="utf-8" />
	</head>
	<body>
		<form id="menuEditForm" class="form-horizontal col-sm-12" 
			style="padding: 60px 0 10px 0;">
			
			<input type="hidden" value="${menu.id}" name="id" id="menuId">
			
			<div class="form-group" style="margin: 0px;">
				<div class="col-sm-6 col-xs-12" style="padding:5px 0 5px 0;">
					<label class="col-xs-3 lable-for-input">名称：</label>
					<div class="col-xs-9">
						<input type="text" class="form-control" name="menuName"
							value="${menu.menuName}" placeholder="名称"/>
					</div>
				</div>
				<div class="col-sm-6 col-xs-12" style="padding:5px 0 5px 0;">
					<label class="col-xs-3 lable-for-input">编码：</label>
					<div class="col-xs-9">
						<input type="text" class="form-control" name="menuCode"
							value="${menu.menuCode}" placeholder="昵称">
					</div>
				</div>
				<div class="col-sm-6 col-xs-12" style="padding:5px 0 5px 0;">
					<label class="col-xs-3 lable-for-input">上级菜单：</label>
					<div class="col-xs-9">
						<select class="form-control" name="parentCode">
							<option value="ROOT"></option>
							<c:forEach var="m" items="${menuList}">
								<option value="${m.menuCode}" 
									<c:if test='${m.menuCode == menu.parentCode}'>selected</c:if>
								>${m.menuName}</option>
							</c:forEach>
						</select>
					</div>
				</div>
				<div class="col-sm-6 col-xs-12" style="padding:5px 0 5px 0;">
					<label class="col-xs-3 lable-for-input">显示顺序：</label>
					<div class="col-xs-9">
						<input type="text" class="form-control" value="${menu.sequence}"
							name="sequence" placeholder="显示顺序">
					</div>
				</div>
				<div class="col-sm-12 col-xs-12" style="padding:5px 0 5px 0;">
					<label class="col-sm-1p5 col-xs-3 lable-for-input">路径：</label>
					<div class="col-sm-10p5 col-xs-9">
						<input type="text" class="form-control" value="${menu.url}"
							placeholder="路径" name="url" >
					</div>
				</div>
			</div>
		</form>
		<script type="text/javascript">
			$(function(){
				validatorMenu();
			});
		</script>
	</body>
</html>