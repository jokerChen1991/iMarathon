<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<c:set var="contextPath" value="<%=request.getContextPath()%>" />
<!DOCTYPE HTML>
<html lang="zh-CN">
	<head>
		<title>user index</title>
		<meta charset="utf-8" />
	    <link rel="stylesheet" href="${contextPath}/ui/bootstrap-3.3.5/validator/css/bootstrapValidator.min.css">  
	    
    	<script src="${contextPath}/ui/bootstrap-3.3.5/js/bootstrap.min.js"></script>
    	<script src="${contextPath}/ui/bootstrap-3.3.5/validator/js/bootstrapValidator.js"></script>
	</head>
	<body>
		<form id="dictSortEditForm" class="form-horizontal col-sm-12" 
			style="padding: 30px 0 10px 0;">
			
			<input type="hidden" value="${dict.code}" name="oldCode" id="oldCode">
			
			<div class="form-group" style="margin: 0px;">
				<div class="col-sm-12 col-xs-12" style="padding:5px 0 5px 0;">
					<label class="col-xs-3 lable-for-input">字典类型编码：</label>
					<div class="col-xs-9">
						<input class="form-control" name="code"
							value="${dict.code}" type="text" placeholder="字典类型编码"
							<c:if test="${dict.code != null && dict.code != ''}">disabled</c:if>
						/>
					</div>
				</div>
				<div class="col-sm-12 col-xs-12" style="padding:5px 0 5px 0;">
					<label class="col-xs-3 lable-for-input">类型中文名称：</label>
					<div class="col-xs-9">
						<input type="text" class="form-control" value="${dict.nameZh}"
							placeholder="类型中文名称" name="nameZh" >
					</div>
				</div>
				<div class="col-sm-12 col-xs-12" style="padding:5px 0 5px 0;">
					<label class="col-xs-3 lable-for-input">类型繁体名称：</label>
					<div class="col-xs-9">
						<input type="text" class="form-control" value="${dict.nameTw}"
							placeholder="类型繁体名称" name="nameTw" >
					</div>
				</div>
				<div class="col-sm-12 col-xs-12" style="padding:5px 0 5px 0;">
					<label class="col-xs-3 lable-for-input">类型英文名称：</label>
					<div class="col-xs-9">
						<input type="text" class="form-control" value="${dict.nameEn}"
							placeholder="类型英文名称" name="nameEn" >
					</div>
				</div>
			</div>
			
		</form>
				
		<script type="text/javascript">
			$(function(){
				validatorDictSort();
			});
		</script>
	</body>
</html>