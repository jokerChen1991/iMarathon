

var city_data_info = {};
/**
 * 加载地级市区域信息
 * @param provinceDomId 省份的id 
 * @param cityDomId 区域的id 
 * @returns
 */
function initCitySelect(provinceDomId,cityDomId,provinceVal,cityVal){
	$("#"+provinceDomId).html('<option value="">--省--</option>');
	$("#"+cityDomId).html('<option value="">--市--</option>');
	$.defAjax({
		url:util_getContextPath()+"/sys/area/findChinaCity",
		success:function(res){
			if(res != null && res.length >0){
				for(var i in res){
					var html = '<option value="'+res[i].code+'">'+res[i].name+'</option>';
					$("#"+provinceDomId).append(html);
					city_data_info[res[i].code] = res[i].subArea;
				}
				f_area_change(provinceDomId,cityDomId);
				if(provinceVal != null && provinceVal != ""){
					//$("#"+provinceDomId).trigger("select",provinceVal);
					$("#"+provinceDomId).val(provinceVal);
					init_city_select(cityDomId,provinceVal);
					$("#"+cityDomId).val(cityVal);
				}else{
					$("#"+provinceDomId).val('');
					$("#"+cityDomId).html('<option value="">--市--</option>');
				}
			}
		}
	});
}

function f_area_change(mainId, subId){
	$("#"+mainId).change(function(){
		$("#"+subId).html('<option value="">--市--</option>');
		init_city_select(subId,this.options[this.options.selectedIndex].value);
		/*var cities = city_data_info[this.options[this.options.selectedIndex].value];
		if(cities != null && cities.length>0){
			for(var i in cities){
				var html = '<option value="'+cities[i].code+'">'+cities[i].name+'</option>';
				$("#"+subId).append(html);
			}
		}*/
	});
}

function init_city_select(cityId,index){
	var cities = city_data_info[index];
	if(cities != null && cities.length>0){
		for(var i in cities){
			var html = '<option value="'+cities[i].code+'">'+cities[i].name+'</option>';
			$("#"+cityId).append(html);
		}
	}
}
