<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<c:set var="contextPath" value="<%=request.getContextPath()%>" />
<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>野兔体育</title>
<link rel="stylesheet"
	href="${contextPath}/ui/bootstrap-3.3.5/css/bootstrap.min.css">
<link rel="stylesheet" href="${contextPath}/ui/base/style/base.css" />
<link rel="stylesheet" href="${contextPath}/ui/base/style/basebox.css" />
<link rel="stylesheet" href="${contextPath}/ui/layout/style/layout.css" />
<link rel="stylesheet" href="${contextPath}/ui/marathon/style/layout.css" />
<link rel="stylesheet"
	href="${contextPath}/ui/layout/style/dashboard.css" />
</head>
<body>
	<div class="layout-header">
		<nav class="navbar navbar-fixed-top header-bg">
			<div class="collapse navbar-collapse" id="navbar-collapse">
				<div class="logo-area">
					<div class="logo-img"></div>
					<div class="logo-span"><span>野兔体育</span></div>
				</div>
				<div class="menu-area">
					<ul class="nav navbar-nav navbar-right" style="margin-right: 0px; ">
						<li class="dropdown">
							<a href="#" class="dropdown-toggle" data-toggle="dropdown"> Java 
								<b class="caret"></b>
							</a>
							<ul class="dropdown-menu" style="padding: 0px;">
								<li class="dropdown_li">用户信息</li>
								<li class="dropdown_li_divider"></li>
								<li class="dropdown_li">修改密码</li>
							</ul>
						</li>
						<%-- <li><a href="<%=request.getContextPath() %>/sys/common/login/logout" >退出</a></li> --%>
					</ul>
					<ul class="nav navbar-nav navbar-right" id="narbar_ul">
						<li class="active">
							<a onclick="menu_loadPage('0','test','/marathon/match/match_index')">首页	</a>
						</li>
						<li>
							<a onclick="menu_loadPage('0','test','/marathon/match/match_index')">赛事	</a>
						</li>
						<li>
							<a onclick="menu_loadPage('0','test','/marathon/match/match_index')">资讯	</a>
						</li>
						<li>
							<a onclick="menu_loadPage('0','test','/marathon/match/match_index')">旅行</a>
						</li>
						<li>
							<a onclick="menu_loadPage('0','test','/marathon/match/match_index')">工具</a>
						</li>
						<li>
							<a onclick="menu_loadPage('0','test','/marathon/match/match_index')">合作</a>
						</li>
						<li>
							<a onclick="menu_loadPage('0','test','/marathon/match/match_index')">关于我们</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	</div>
	
	<div class="container-fluid">
		<div class="row" id="content_container">
		
		</div>
	</div>

	<div class="layout-footer">
		<div class="footer-content">
			<table>
				<tr>
					<td colspan="5">
						<img src="${contextPath}/ui/marathon/images/layout/qrCode.jpg" style="width:77px;height:77px;">
					</td>
				</tr>
				<tr>
					<td colspan="5">
						<img src="${contextPath}/ui/marathon/images/layout/wechat.png" style="width:16px;height:16px;"/>
						订阅号：野兔跑步
					</td>
				</tr>
				<tr>
					<td><a>关于我们</a></td>
					<td><a>商务合作</a></td>
					<td><a>加入我们</a></td>
					<td><a>使用协议</a></td>
					<td><a>问题反馈</a></td>
				</tr>
				<tr>
					<td></td>
					<td><a>友情链接</a></td>
					<td><a>杰塔科技</a></td>
					<td><a>羚先户外</a></td>
					<td></td>
				</tr>
				<tr>
					<td colspan="5">版权所有 © 2017 上海杰塔科技有限公司</td>
				</tr>
				<tr>
					<td colspan="5">沪ICP备66666666号-6</td>
				</tr>
			</table>
		</div>
	</div>

	<script src="${contextPath}/ui/base/js/jquery-2.1.1.min.js"></script>
	<script src="${contextPath}/ui/bootstrap-3.3.5/js/bootstrap.min.js"></script>
	<script src="${contextPath}/ui/base/js/util.js"></script>
	<script src="${contextPath}/ui/base/js/scriptExtend.js"></script>
	<%-- <script src="${contextPath}/ui/layout/js/layout.js"></script> --%>
	<script src="${contextPath}/ui/base/js/basebox.js"></script>
</body>
</html>