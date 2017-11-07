package com.jokerchen.marathon.match.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.jokerchen.base.annotation.OperationLogger;
import com.jokerchen.base.constant.Constant;
import com.jokerchen.base.context.PageContext;
import com.jokerchen.base.controller.BaseController;
import com.jokerchen.base.model.PageVO;
import com.jokerchen.marathon.match.model.Match;
import com.jokerchen.marathon.match.service.MatchService;

/**
 * 赛事管理
 * @author joker
 * @date 2017-10-28
 */
@Controller
@RequestMapping("marathon/match")
public class MatchController extends BaseController{

	
	@Autowired
	private MatchService matchService;
	
	/**
	 * 通过数据字典类型编码查找数据字典信息
	 * @param sortCode
	 * @return
	 */
	@RequestMapping("findMatch")
	@ResponseBody
	public PageVO findMatch(Match match){
		List<Match> list = matchService.findMatch(match);
		PageVO page = PageContext.getPage();
		page.setDatas(list);
		return page;
	}
	
	/**
	 * 保存数据字典
	 * @param dict 要保存的数据字典类型
	 */
	@RequestMapping("/saveMatch")
	@ResponseBody
	@OperationLogger(operationType=Constant.OPERATION_SAVE,operationDesc="base.saveMatch")
	public void saveMatch(Match match){
		matchService.saveMatch(match);
	}
	
	/**
	 * 批量删除赛事信息
	 * @param ids 赛事信息的ids
	 */
	@RequestMapping("/deleteMatch")
	@ResponseBody
	@OperationLogger(operationType=Constant.OPERATION_DELETE,operationDesc="base.deleteMatch")
	public void deleteMatch(int[] ids){
		matchService.deleteMatch(ids);
	}
	
	/**
	 * 跳转到数据字典类型编辑界面
	 * @param operation 操作标志，a：新增，u：编辑，d:详情
	 * @return
	 */
	@RequestMapping("/toEditMatchPage")
	public ModelAndView toEditMatchPage(
			String operation,Integer id){
		ModelAndView view = new ModelAndView();
		view.setViewName("marathon/match/match_edit");
		if(Constant.OPERATION_UPDATE.equals(operation)){//说明是修改
			view.addObject("match", matchService.findMatchById(id));
		}
		return view;
	}
	
}
