package com.jokerchen.marathon.console.controller;

import java.io.IOException;
import java.lang.reflect.InvocationTargetException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.ModelAndView;

import com.alibaba.fastjson.JSONArray;
import com.jokerchen.base.annotation.OperationLogger;
import com.jokerchen.base.constant.Constant;
import com.jokerchen.base.context.PageContext;
import com.jokerchen.base.controller.BaseController;
import com.jokerchen.base.model.PageVO;
import com.jokerchen.marathon.console.model.Match;
import com.jokerchen.marathon.console.model.MatchEvent;
import com.jokerchen.marathon.console.service.MatchService;
import com.jokerchen.util.DictConvert;

/**
 * 赛事管理
 * @author joker
 * @date 2017-10-28
 */
@Controller
@RequestMapping("marathon/console/match")
public class MatchController extends BaseController{

	
	@Autowired
	private MatchService matchService;
	
	@Autowired
	private DictConvert dictConvert;
	
	/**
	 * 通过数据字典类型编码查找数据字典信息
	 * @param sortCode
	 * @return
	 * @throws InvocationTargetException 
	 * @throws IllegalArgumentException 
	 * @throws IllegalAccessException 
	 * @throws SecurityException 
	 * @throws NoSuchMethodException 
	 */
	@RequestMapping("/findMatch")
	@ResponseBody
	public PageVO findMatch(Match match) throws NoSuchMethodException, 
		SecurityException, IllegalAccessException, 
		IllegalArgumentException, InvocationTargetException{
		List<Match> list = matchService.findMatch(match);
		PageVO page = PageContext.getPage();
		dictConvert.convertListCodeToValue("/", list, "marathon_type", "matchEvent");
		page.setDatas(list);
		return page;
	}
	
	/**
	 * 保存数据字典
	 * @param dict 要保存的数据字典类型
	 * @throws IOException 
	 */
	@RequestMapping("/saveMatch")
	@ResponseBody
	@OperationLogger(operationType=Constant.OPERATION_SAVE,operationDesc="base.saveMatch")
	public void saveMatch(MultipartFile imgFile,Match match,String matchItem) throws IOException{
		matchService.saveMatch(match,matchItem,imgFile);
	}
	
	/**
	 * 批量删除赛事信息
	 * @param ids 赛事信息的ids
	 */
	@RequestMapping("/deleteMatch")
	@ResponseBody
	@OperationLogger(operationType=Constant.OPERATION_DELETE,operationDesc="base.deleteMatch")
	public void deleteMatch(@RequestParam(value = "ids[]")int[] ids){
		matchService.deleteMatch(ids);
	}
	
	/**
	 * 跳转到数据字典类型编辑界面
	 * @param operation 操作标志，a：新增，u：编辑，d:详情
	 * @return
	 * @throws InvocationTargetException 
	 * @throws IllegalArgumentException 
	 * @throws IllegalAccessException 
	 * @throws SecurityException 
	 * @throws NoSuchMethodException 
	 */
	@RequestMapping("/toEditMatchPage")
	public ModelAndView toEditMatchPage(
			String operation,Integer id) throws NoSuchMethodException,
			SecurityException, IllegalAccessException, 
			IllegalArgumentException, InvocationTargetException{
		ModelAndView view = new ModelAndView();
		view.setViewName("marathon/console/match_edit");
		if(Constant.OPERATION_UPDATE.equals(operation)){//说明是修改
			Match match = matchService.findMatchById(id);
			view.addObject("entity", match);
			List<MatchEvent> list = matchService.findMatchEvent(match.getId());
			dictConvert.convertListCodeToValue(list, "marathon_type", "text");
			view.addObject("matchEvnet",
					JSONArray.toJSONString(list));
		}
		return view;
	}
	
}
