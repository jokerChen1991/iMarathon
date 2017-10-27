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
	    <script src="${contextPath}/ui/base/js/ajaxfileupload.js"></script>	
	</head>
	<body>
		<div id="addApkWindows">
			<div id="result"></div>
			上传文件：<input type="file" id="apkFile" name="apkFile" />
			<input type="button" value="上传" onclick="ajaxFileUpload()" />
		</div>
		<script type="text/javascript">
		function ajaxFileUpload(){
			//开始上传文件时显示一个图片,文件上传完成将图片隐藏
			//$("#loading").ajaxStart(function(){$(this).show();}).ajaxComplete(function(){$(this).hide();});
			//执行上传文件操作的函数，使用encodeURI方法，防止传输中文字符的时候出现乱码
			//var uploadUrl = encodeURI(encodeURI(basePath + "uploadApk"));
			$.ajaxFileUpload({
				//处理文件上传操作的服务器端地址(可以传参数,已亲测可用)
				url:"${contextPath}/upload/uploadFile",
				secureuri:false,                   	//是否启用安全提交,默认为false 
				fileElementId:'apkFile',           	//文件选择框的id属性
				dataType:'text',                   	//服务器返回的格式,可以是json或xml等
				success:function(data){        		//服务器响应成功时的处理函数
					console.info(data);
				},
				error:function(data, status, e){ //服务器响应失败时的处理函数
					console.log(e);
					console.log(data);
				}
			});
		}
		</script>
	</body>
</html>