<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<c:set var="contextPath" value="<%=request.getContextPath()%>" />
<!DOCTYPE HTML>
<html lang="zh-CN">
<head>
	<title>homepage</title>
	<meta charset="utf-8" />
    <link rel="stylesheet" type="text/css" media="screen" 
    	href="${contextPath}/ui/marathon/style/homepage.css" />
</head>
<body>
	<div class="container">
		<div class="row clearfix">
			<div class="col-md-9 no-padding">
				<div class="carousel slide roll_img" id="homepage_carousel">
					<ol class="carousel-indicators" id="carouselItemLi">
					</ol>
					<div class="carousel-inner" id="carouselItemImg">
						
					</div>
					<a class="left carousel-control" href="#homepage_carousel" data-slide="prev">
						<span class="glyphicon glyphicon-chevron-left"></span>
					</a>
					<a class="right carousel-control" href="#homepage_carousel" data-slide="next">
						<span class="glyphicon glyphicon-chevron-right"></span>
					</a>
				</div>
			</div>
			<div class="col-md-3">
				<div class="overseas-events"></div>
				<div style="height:5px;"></div>
				<div class="running-tool">
					<span>跑步小工具</span>
				</div>
			</div>
			<div class="col-md-12 no-padding">
				<table class="layout-title">
					<tr>
						<td class="layout-title-info">最新资讯</td>
						<td class="layout-title-more">更多</td>
					</tr>
					<tr>
						<td colspan="2">
							<div class="layout-gray-line">
								<div class="layout-blue-line"></div>
							</div>
						</td>
					</tr>
				</table>
			</div>
			<div class="col-md-12 no-padding" id="article_div">
				
			</div>

			<div class="col-md-12 no-padding">
				<table class="layout-title">
					<tr>
						<td class="layout-title-info">近期赛事</td>
						<td class="layout-title-more">更多</td>
					</tr>
					<tr>
						<td colspan="2">
							<div class="layout-gray-line">
								<div class="layout-blue-line"></div>
							</div>
						</td>
					</tr>
				</table>
			</div>
			<div class="col-md-3 no-padding">
				<table class="recent-match">
					<tr>
						<td rowspan="4">
							<img src="${contextPath}/ui/marathon/images/match/yangzhou.png">
						</td>
					</tr>
					<tr><td style="text-indent: 5px;">扬州鉴真国际半程马拉松赛</td></tr>
					<tr><td style="text-indent: 5px;">江苏 扬州</td></tr>
					<tr><td style="text-indent: 5px;">2017-04-23</td></tr>
				</table>
			</div>
			<div class="col-md-3 no-padding">
				<table class="recent-match">
					<tr>
						<td rowspan="4">
							<img src="${contextPath}/ui/marathon/images/match/yangzhou.png">
						</td>
					</tr>
					<tr><td style="text-indent: 5px;">扬州鉴真国际半程马拉松赛</td></tr>
					<tr><td style="text-indent: 5px;">江苏 扬州</td></tr>
					<tr><td style="text-indent: 5px;">2017-04-23</td></tr>
				</table>
			</div>
			<div class="col-md-3 no-padding">
				<table class="recent-match">
					<tr>
						<td rowspan="4">
							<img src="${contextPath}/ui/marathon/images/match/yangzhou.png">
						</td>
					</tr>
					<tr><td style="text-indent: 5px;">扬州鉴真国际半程马拉松赛</td></tr>
					<tr><td style="text-indent: 5px;">江苏 扬州</td></tr>
					<tr><td style="text-indent: 5px;">2017-04-23</td></tr>
				</table>
			</div>
			<div class="col-md-3 no-padding">
				<table class="recent-match">
					<tr>
						<td rowspan="4">
							<img src="${contextPath}/ui/marathon/images/match/yangzhou.png">
						</td>
					</tr>
					<tr><td style="text-indent: 5px;">扬州鉴真国际半程马拉松赛</td></tr>
					<tr><td style="text-indent: 5px;">江苏 扬州</td></tr>
					<tr><td style="text-indent: 5px;">2017-04-23</td></tr>
				</table>
			</div>
			<div class="col-md-12 no-padding">
				<table class="layout-title">
					<tr>
						<td class="layout-title-info">境外赛事</td>
						<td class="layout-title-more">更多</td>
					</tr>
					<tr>
						<td colspan="2">
							<div class="layout-gray-line">
								<div class="layout-blue-line"></div>
							</div>
						</td>
					</tr>
				</table>
			</div>
			<div class="col-md-12 no-padding">
				<table class="overseas-match">
					<tr>
						<td>
							<img src="${contextPath}/ui/marathon/images/match/jingdu.png">
						</td>
						<td>
							<img src="${contextPath}/ui/marathon/images/match/jingdu.png">
						</td>
						<td>
							<img src="${contextPath}/ui/marathon/images/match/jingdu.png">
						</td>
						<td>
							<img src="${contextPath}/ui/marathon/images/match/jingdu.png">
						</td>
						<td>
							<img src="${contextPath}/ui/marathon/images/match/jingdu.png">
						</td>
					</tr>
					<tr>
						<td>旧唐时代的狂奔</td>
						<td>旧唐时代的狂奔</td>
						<td>旧唐时代的狂奔</td>
						<td>旧唐时代的狂奔</td>
						<td>旧唐时代的狂奔</td>
					</tr>
				</table>
			</div>
		</div>
	</div>
	<script src="${contextPath}/ui/marathon/js/portal/homepage.js"
		type="text/javascript"></script>
	
	<script type="text/javascript">
		loadCarousel();
		loadArticle();
	</script>
</body>
</html>