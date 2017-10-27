<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE HTML>
<html lang="zh-CN">
  <head>
    <meta charset="utf-8">
    <title>error page</title>
  </head>
  <body>
  	<c:out value="${responseMessage.code}"/>
  	<c:out value="${responseMessage.message}"/>
  </body>
</html>