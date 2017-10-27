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
	<nav class="navbar navbar-default navbar-fixed-top">
      <div class="container-fluid">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" 
          	data-target="#navbar_menu" >
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <div class="navbar-brand project_logo">
          </div>
        </div>
        <div class="navbar-collapse collapse">
          <ul class="nav navbar-nav navbar-right">
            <li>
            	<div class="dropdown">
				   <button type="button" class="btn dropdown-toggle" id="loginUserDropdown" 
				      data-toggle="dropdown" style="padding: 0px;background-color: #f8f8f8;">
				      <div class="login_user"></div>
				   </button>
				   <ul class="dropdown-menu" style="padding: 0px;">
				      <li class="dropdown_li">用户信息</li>
				      <li class="dropdown_li_divider"></li>
				      <li class="dropdown_li">修改密码</li>
				   </ul>
				</div>
            </li>
            <li>
            	<button type="button" class="btn dropdown-toggle" id="loginUserDropdown" 
			      data-toggle="dropdown" style="padding: 0px;background-color: #f8f8f8;">
			      <div class="sign_out"></div>
			   </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-3 col-md-2 sidebar" id="navbar_menu">
        	<ul class="nav nav-sidebar">
	            <li>
	            	<div class="panel panel-info" style="margin-bottom: 2px;">
	            		<div class="panel-heading" style="padding: 0px;">
				         	<h4 class="panel-title">
			            		<a data-toggle="collapse" data-parent="#accordion" class="panel-heading"
			            		href="#collapse1" style="display: block;text-decoration: none;">
						           <span>菜单管理</span>
						           <span class="arrow_img_span arrow_up"></span>
			            		</a>
				         	</h4>
					    </div>
				      <div id="collapse1" class="panel-collapse collapse">
				         <div class="panel-body">
				            新增菜单<br>
				            修改菜单
				         </div>
				      </div>
				   </div>
	            </li>
	            <li>
	            	<div class="panel panel-info">
				      <div class="panel-heading">
				         <h4 class="panel-title">
				            <a data-toggle="collapse" data-parent="#accordion" href="#collapseThree">
				               <span>菜单管理</span>
					           <span class="arrow_img_span arrow_up"></span>
				            </a>
				         </h4>
				      </div>
				      <div id="collapseThree" class="panel-collapse collapse">
				         <div class="panel-body">
				            新增菜单<br>
				            修改菜单
				         </div>
				      </div>
				   </div>
	            </li>
          	</ul>
		</div>
      </div>
    </div>
	<script>
	</script>
	<script src="${contextPath}/ui/base/js/jquery-2.1.1.min.js"></script>
	<script src="${contextPath}/ui/bootstrap-3.3.5/js/bootstrap.min.js"></script>
	<script src="${contextPath}/ui/base/js/util.js"></script>
	<script src="${contextPath}/ui/base/js/scriptExtend.js"></script>
	<script src="${contextPath}/ui/layout/js/menu.js"></script>
	<script src="${contextPath}/ui/layout/js/layout.js"></script>
	<script src="${contextPath}/ui/base/js/basebox.js"></script>
  </body>
</html>