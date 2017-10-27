<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<c:set var="contextPath" value="<%=request.getContextPath()%>"/>
<!DOCTYPE HTML>
<html lang="zh-CN">
  <head>
    <title>home page</title>
  </head>
  <body>
	<div class="container">
      <div class="starter-template">
        <h1>Bootstrap starter template</h1>
        <p class="lead">Use this document as a way to quickly start any new project.<br> All you get is this text and a mostly barebones HTML document.</p>
        
        
        
<form class="form" data-validator-option="{timely:2, theme:'yellow_top'}">
    <h3>Tip on top</h3>
    <div class="form-item">
        <input type="text" name="user[email]" data-rule="required;email" placeholder="Email">
    </div>
    <div class="form-item">
        <button type="submit">Submit</button>
    </div>
</form>
      </div>
    </div><!-- /.container -->
  </body>
</html>