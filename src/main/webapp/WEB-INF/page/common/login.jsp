<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@taglib prefix="s" uri="http://www.springframework.org/tags" %>
<c:set var="contextPath" value="<%=request.getContextPath()%>"/>
<!DOCTYPE HTML>
<html lang="zh-CN">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="${contextPath}/ui/bootstrap-3.3.5/css/bootstrap.min.css">  
    <link rel="stylesheet" href="${contextPath}/ui/bootstrap-3.3.5/validator/css/bootstrapValidator.min.css">  
    <script src="${contextPath}/ui/base/js/jquery-2.1.1.min.js"></script>
    <script src="${contextPath}/ui/base/js/util.js"></script>
    <script src="${contextPath}/ui/bootstrap-3.3.5/js/bootstrap.min.js"></script>
    <script src="${contextPath}/ui/bootstrap-3.3.5/validator/js/bootstrapValidator.min.js"></script>
    
    <link rel="stylesheet" href="${contextPath}/ui/base/style/base.css"/>
    <script src="${contextPath}/ui/common/js/login.js" charset="utf-8"></script>
    <title>login</title>
    <style type="text/css">
    	html,body{
			background-color: #dfdfdf;
			height:100%;
		}
		
		body>div{
			height:100%;
		}
    </style>
  </head>
  <body>
	<div class="container-fluid">
		<div class="row row-height-xs-15 row-height-sm-20 ow-height-md-25 row-height-lg-25">
			<div class="col-lg-6 col-md-6 col-sm-3 col-xs-1"></div>
			<div class="col-lg-4 col-md-4 col-sm-6 col-xs-10" style="align:right">
				<a href="${contextPath}/language/language?language=en_US">English</a>
				<span>|</span>
				<a href="${contextPath}/language/language?language=zh_CN">中文</a>
				<span>|</span>
				<a href="${contextPath}/language/language?language=zh_TW">繁體</a>
			</div>
			<div class="col-lg-2 col-md-2 col-sm-3 col-xs-1"></div>
		</div>
		<div class="row">
			<div class="col-lg-6 col-md-6 col-sm-3 col-xs-1"></div>
			<div class="col-lg-4 col-md-4 col-sm-6 col-xs-10">
				<form id="loginForm" class="form-horizontal" action="${contextPath}/sys/common/login/doLogin" method="post">
					<div class="panel panel-primary">
						<div class="panel-heading">
							<h3 class="panel-title">
								<s:message code="base.login"/>
							</h3>
						</div>
						<div class="panel-body">
							<div class="form-group">
								<div class="col-sm-10 col-sm-offset-1">
									<div class="input-group">
										<span class="input-group-addon" style="padding: 3px 6px 3px 6px;">
											<img src="${contextPath}/ui/common/images/user.png">
										</span>
										<input class="form-control" id="userName" name="userName"
											value="${user.userName}"
											type="text" placeholder="username"/>
									</div>
								</div>
							</div>
							<div class="form-group">
								<div class="col-sm-10 col-sm-offset-1">
									<div class="input-group">
										<span class="input-group-addon" style="padding: 3px 6px 3px 6px;">
											<img src="${contextPath}/ui/common/images/password.png">
										</span>
										<input class="form-control" id="password" name="password"
											type="password" placeholder="password"/>
									</div>
								</div>
							</div>
							<div class="form-group">
								<div class="col-sm-10 col-sm-offset-1">
									<div class="input-group">
										<input class="form-control" id="captcha" name="captcha"
											type="text" placeholder="captcha"/>
										<span class="input-group-addon" style="padding: 0;">
											<img id="captchaImg" alt="loadding" onclick="changeCaptchaImage()"
												src="${contextPath}/captcha/getCaptcha" />
										</span>
									</div>
								</div>
							</div>
							<div class="form-group">
								<div class="col-sm-10 col-sm-offset-1">
									<div class="input-group error_font_color">
										<c:out value="${message}"/>
									</div>
								</div>
							</div>
						</div>
						<div class="panel-footer">
							<div class="form-group">
								<div class="col-sm-7 col-sm-offset-1 col-xs-7">
									<div class="checkbox">
										<label>
											<input type="checkbox" /> Remember me
										</label>
									</div>
								</div>
								<div class="col-sm-4 col-xs-5">
									<button type="submit" class="btn btn-default form-control">
										<s:message code="base.signin"/>
									</button>
								</div>
							</div>
						</div>
					</div>
				</form>
			</div>
			<div class="col-lg-2 col-md-2 col-sm-3 col-xs-1"></div>
		</div>
	</div>
  </body>
</html>
