<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<c:set var="contextPath" value="<%=request.getContextPath()%>"/>
<!DOCTYPE html>
<html lang="zh-CN">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>home page</title>
    <link rel="stylesheet" href="${contextPath}/ui/bootstrap-3.3.5/css/bootstrap.min.css">
	<link rel="stylesheet" href="${contextPath}/ui/base/style/base.css"/>
  	<link rel="stylesheet" href="${contextPath}/ui/base/style/basebox.css"/>
  	<link rel="stylesheet" href="${contextPath}/ui/layout/style/layout.css"/>
  	<link rel="stylesheet" href="${contextPath}/ui/layout/style/dashboard.css"/>
  </head>
  <body>
    <nav class="navbar navbar-inverse navbar-fixed-top">
	   <div class="navbar-header">
	      <button type="button" class="navbar-toggle" data-toggle="collapse" 
	         data-target="#navbar-collapse">
	         <span class="sr-only">切换导航</span>
	         <span class="icon-bar"></span>
	         <span class="icon-bar"></span>
	         <span class="icon-bar"></span>
	      </button>
	   </div>
	   <div class="collapse navbar-collapse" id="navbar-collapse">
	      <ul class="nav navbar-nav navbar-left" id="narbar_ul">
	      </ul>
	      <ul class="nav navbar-nav navbar-right" style="margin-right: 0px; ">
			   <li class="dropdown">
		          <a href="#" class="dropdown-toggle" data-toggle="dropdown">
		             Java <b class="caret"></b>
		          </a>
		          <ul class="dropdown-menu" style="padding: 0px;">
		              <li class="dropdown_li">用户信息</li>
				      <li class="dropdown_li_divider"></li>
				      <li class="dropdown_li">修改密码</li>
		          </ul>
		       </li>
   			   <li><a href="<%=request.getContextPath() %>/sys/common/login/logout" >退出</a></li>
			</ul>
	   </div>
	</nav>

    <div class="container-fluid">
      <div class="row" id="content_container">
      	
      </div>
    </div>
    
    
	<script src="${contextPath}/ui/base/js/jquery-2.1.1.min.js"></script>
	<script src="${contextPath}/ui/bootstrap-3.3.5/js/bootstrap.min.js"></script>
	<script src="${contextPath}/ui/base/js/util.js"></script>
	<script src="${contextPath}/ui/base/js/scriptExtend.js"></script>
	<script src="${contextPath}/ui/layout/js/layout.js"></script>
	<script src="${contextPath}/ui/base/js/basebox.js"></script>
	
	
  </body>
</html>