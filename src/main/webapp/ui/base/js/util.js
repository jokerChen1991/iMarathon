/**
 * js工具文件
 * @author joker
 * @date 2016-07-03
 */

/**
 * 获取上下文路径
 * @returns
 */
function util_getContextPath(){
	var pathName = document.location.pathname;
	var index = pathName.substr(1).indexOf("/");
	var result = pathName.substr(0,index+1);
	return result;
}