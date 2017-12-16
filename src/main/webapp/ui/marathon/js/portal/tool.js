/**
 * 门户工具
 * @author joker
 * @date 2017-10-28
 */

$(function(){
	
});

function active(dom){
	$(dom).parent().parent().find(".active").removeClass("active");
	$(dom).parent().addClass("active");
}

function paceActive(dom){
	$(dom).parent().find(".active").removeClass("active");
	$(dom).addClass("active");
}

function loadCountPace(dom){
	paceActive(dom);
}
function loadCountTime(dom){
	paceActive(dom);
}
function loadCountDistance(dom){
	paceActive(dom);
}


function loadScore(dom){
	$("#score").show();
	active(dom);
}

function loadPaceCalculation(dom){
	$("#paceCalculation").show();
	active(dom);
}

function loadPaceConversion(dom){
	$("#paceConversion").show();
	active(dom);
}

function loadMbi(dom){
	$("#mbi").show();
	active(dom);
}