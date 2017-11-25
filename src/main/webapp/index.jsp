<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<c:set var="contextPath" value="<%=request.getContextPath()%>"/>
<!DOCTYPE HTML>
<html lang="zh-CN">
  <head>
    <meta charset="utf-8">
    <title>home page</title>
  </head>
  <body>
  	<%-- <c:redirect url="/sys/common/login/toLogin"/> --%>
  	<c:redirect url="/marathon/page/layout"/>
  </body>
</html>
