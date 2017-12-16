
function add(){
	$('#editDialog').dialog({
		url: util_getContextPath()+"/marathon/console/carousel/toEditPage",
		data:{
			operation: 'A'
		},
		title: '新增轮播图片信息',
		height: 360,
		width: 400,
		modal: true,
		buttons:[{
			text: '保存',
			click: function(){
				saveCarousel();
			}
		},{
			text: '关闭', 
			click: function(){
				$('#editDialog').dialog.close();
			}
		}]
	});
}

function remove(id){
	$.messager.confirm('是否删除',messager_type_warning,null,
		function(res){
			if(res){
				$.defAjax({
					url:util_getContextPath()+"/marathon/console/carousel/deleteCarousel",
					dataType: 'text',
					data:{
						'id' : id
					},
					success:function(res){
						debugger;
						$.messager.show("删除成功！");
						$("#current_div_id_"+id).remove();
						var html = $("#carousel_div").html();
						if(html == null || html.trim() == ""){
							$("#carousel_div").html(domHtml);
						}
					}
				});
			}
		}
	);
}

function edit(id){
	$('#editDialog').dialog({
		url: util_getContextPath()+"/marathon/console/carousel/toEditPage",
		data:{
			operation: 'U',
			id: id
		},
		title: '修改轮播图片信息',
		height: 360,
		width: 400,
		modal: true,
		buttons:[{
			text: '保存',
			click: function(){
				saveCarousel();
			}
		},{
			text: '关闭', 
			click: function(){
				$('#editDialog').dialog.close();
			}
		}]
	});
}

function saveCarousel(){
	$.defUploadFile({
		url:util_getContextPath()+"/marathon/console/carousel/saveCarousel",
		data: $('#editForm').serializeJson(),
		fileElementId:'fileInputHidden',
		dataType: 'text',
		success:function(res){
			loadImgDiv();
			$.messager.show("保存成功！");
			$('#editDialog').dialog.close();
		}
	});
}

/**
 * 加载页面的图片信息
 * @returns
 */
function loadImgDiv(){
	$.defAjax({
		url:util_getContextPath()+"/marathon/console/carousel/findCarousel",
		success:function(res){
			if(res != null && res.length > 0){
				$("#carousel_div").html("");
				for(var i in res){
					appendImgDiv(res[i]);
				}
			}
		}
	});
}

function appendImgDiv(obj){
	var reg = new RegExp("\n","g");
	var detail = obj.detail;
	if(detail == null){
		detail = "";
	}else{
		detail = detail.replace(reg,"<br/>");
	}
	var html ='<div class="col-sm-6 col-md-4" id="current_div_id_'+obj.id+'">'
		+ '<div class="thumbnail">'
			+ '<img src="'+util_getHostPath()+obj.imgUrl+'">'
			+ '<div class="caption">'
				+ '<h3>'+obj.title+'</h3>'
				+ '<p><div>'+detail+'</div></p>'
				+ '<p class="btn_p">'
	    			+ '<a onclick="add();" class="add_btn button"></a>'
	    			+ '<a onclick="remove('+obj.id+');" class="remove_btn button"></a>'
	    			+ '<a onclick="edit('+obj.id+');" class="edit_btn button"></a>'
				+ '</p>'
			+ '</div>'
		+ '</div>'
	+ '</div>';
	$("#carousel_div").append(html);
}
