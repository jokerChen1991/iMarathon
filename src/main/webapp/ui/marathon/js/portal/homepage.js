

function loadCarousel(){
	$.defAjax({
		url:util_getContextPath()+"/marathon/console/carousel/findCarousel",
		success:function(res){
			if(res != null && res.length > 0){
				for(var i in res){
					var activeClass = '';
					var active = '';
					if(i == 0){
						activeClass = 'class="active"';
						active = "active";
					}
					$("#carouselItemLi").append(
							'<li data-slide-to="'+i+'" data-target="#homepage_carousel" '+activeClass+'></li>');
					var detail = strRepalveAll(res[i].detail,"\n","<br/>");	
					var html = '<div class="item '+active+'">'
						+ '<img src="'+util_getHostPath()+res[i].imgUrl+'" />'
						+ '<div class="carousel-caption">'
						+ '<h4>'+res[i].title+'</h4>'
						+ '<p>'+detail+'</p>'
						+ '</div>'
						+ '</div>';
					$("#carouselItemImg").append(html);
				}
			}
		}
	});
}

function loadArticle(){
	$.defAjax({
		url:util_getContextPath()+"/marathon/console/article/findArticle",
		data:{pageSize:10,pageNo:1},
		success:function(res){
			var data = res.datas;
			if(data != null && data.length > 0){
				var html = "";
				for(var i in data){
					html += '<div class="col-md-6">'
						+ '<div class="col-md-9">'
						+ '【'+data[i].type+'】'+data[i].title
						+ '</div>'
						+ '<div class="col-md-3">'
						+ data[i].createTimeStr.split(" ")[0]
						+ '</div>'
						+ '</div>';
				}
				$("#article_div").append(html);
			}
		}
	});
}

function strRepalveAll(str, oldReg, newReg){
	var reg = new RegExp(oldReg,"g");
	if(str == null){
		str = "";
	}else{
		str = str.replace(reg,newReg);
	}
	return str;
}