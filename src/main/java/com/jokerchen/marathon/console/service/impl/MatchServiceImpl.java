package com.jokerchen.marathon.console.service.impl;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.alibaba.fastjson.JSONArray;
import com.jokerchen.base.constant.Constant;
import com.jokerchen.marathon.console.mapper.MatchMapper;
import com.jokerchen.marathon.console.model.Match;
import com.jokerchen.marathon.console.model.MatchEvent;
import com.jokerchen.marathon.console.service.MatchService;
import com.jokerchen.marathon.constant.MarathonConstant;
import com.jokerchen.marathon.util.UploadUrlUtil;

/**
 * 赛事管理逻辑层实现类
 * 
 * @author joker 2017-10-28
 */
@Service
public class MatchServiceImpl implements MatchService {

	@Autowired
	private MatchMapper matchMapper;

	@Autowired
	private UploadUrlUtil uplodUrlUtil;
	
	/**
	 * 通过条件查找赛事信息
	 * 
	 * @param match
	 *            赛事信息
	 * @return
	 */
	public List<Match> findMatch(Match match) {
		return matchMapper.findMatch(match);
	}

	/**
	 * 保存赛事信息
	 * 
	 * @param match
	 *            要保存的赛事信息
	 * @throws IOException 
	 */
	public void saveMatch(Match match,String matchItem,MultipartFile imgFile) throws IOException {
		//获取文件名
		String fileName = imgFile.getOriginalFilename();
		if(imgFile != null && fileName != null && !"".equals(fileName)){
			//获取文件的保存路径
			String path = uplodUrlUtil.fileNameWithTime(
					fileName.substring(fileName.lastIndexOf(".")),MarathonConstant.MARATHON_MATCH_LOGO);
			// 转存文件  
			imgFile.transferTo(new File(path));
			match.setMatchLogo(uplodUrlUtil.fileRelativePath(path));
		}else{
			if(match.getId() != null && match.getId() != 0){
				match.setMatchLogo(matchMapper.findMatchById(match.getId()).getMatchLogo());
			}
		}
		List<MatchEvent> list = new ArrayList<>(); 
		list = JSONArray.parseArray(matchItem, MatchEvent.class);
		if (match.getId() != null && match.getId() != 0) {
			matchMapper.updateMatch(match);
			matchMapper.deleteMatchEvent(match.getId());
		} else {
			match.setStatus(Constant.DATA_STATUS_ENABLE);
			matchMapper.addMatch(match);
			Integer id = match.getId();
			match.setId(id);
		}
		if(list != null && list.size() > 0){
			for(MatchEvent item : list){
				item.setMatchId(match.getId());
				matchMapper.addMatchEvent(item);
			}
		}
	}

	/**
	 * 批量删除数据字典
	 * 
	 * @param ids 赛事信息的ids
	 */
	public void deleteMatch(int[] ids) {
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("ids", ids);
		map.put("status", Constant.DATA_STATUS_DELETE);
		matchMapper.deleteMatch(map);
		if(ids != null && ids.length > 0){
			for(int id : ids){
				matchMapper.deleteMatchEvent(id);
			}
		}
	}

	/**
	 * 通过id获取赛事信息
	 * @param id
	 * @return
	 */
	public Match findMatchById(int id) {
		return matchMapper.findMatchById(id);
	}
	
	/**
	 * 通过matchId获取子项目信息
	 * @param matchId
	 * @return
	 */
	public List<MatchEvent> findMatchEvent(int matchId){
		return matchMapper.findMatchEvent(matchId);
	}
}
