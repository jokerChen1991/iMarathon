package com.jokerchen.marathon.util;

import java.io.File;
import java.io.IOException;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.jokerchen.marathon.constant.MarathonConstant;
import com.jokerchen.util.DateUtil;

/**
 * 上传文件到服务器时，此工具类用于生成上传文件的保存路径
 * @author joker
 * @date 2017-12-06
 */
@Component
public class UploadUrlUtil {

	@Autowired
	private HttpServletRequest request;
	
	/**
	 * 获取根目录
	 * @return
	 */
	public String contextPath(){
		String contextPath = request.getSession().getServletContext().getRealPath(""); 
		String urlSplit = urlSplitChar(contextPath);
		if(contextPath.substring(contextPath.length()-1).equals(urlSplit)){
			contextPath = contextPath.substring(0, contextPath.length()-1);
		}
		contextPath = contextPath.substring(0, contextPath.lastIndexOf(urlSplit));
		return contextPath;
	}
	
	/**
	 * 获取路径分隔符
	 * @param url
	 * @return
	 */
	public String urlSplitChar(String url){
		String urlSplit = "\\";
		if(url.indexOf("//")!= -1){
			urlSplit = "//";
		}
		return urlSplit;
	}
	
	/**
	 * 以当前时间为文件名保存文件
	 * @return
	 * @throws IOException 
	 */
	public String fileNameWithTime(String fileType,String... folders) throws IOException{
		String contextPath = contextPath(); 
		String urlSplit = urlSplitChar(contextPath);
		contextPath += urlSplit + MarathonConstant.UPLOAD_FOLDER_NAME;
		if(folders != null && folders.length>0){
			for(String folder : folders){
				contextPath += urlSplit+folder;
				this.createFolder(contextPath);
			}
		}
		return contextPath + urlSplit + DateUtil.currentTimeStamp() + fileType;
	}

	/**
	 * 获取相对路径
	 * @param fullPath
	 * @return
	 */
	public String fileRelativePath(String fullPath){
		return fullPath.replace(contextPath(), "");
	}
	
	/**
	 * 判断文件夹是否存在，如果不存在则创建文件夹
	 * @param path 文件夹路径
	 * @throws IOException
	 */
	public void createFolder(String path) throws IOException{
		File file = new File(path);
		if(!file.exists()){
			file.mkdirs();
		}
	}
	
	
	/**
     * 删除单个文件
     *
     * @param fileName
     *            要删除的文件的文件名
     * @return 单个文件删除成功返回true，否则返回false
     */
    public void deleteFile(String fileName) {
        File file = new File(fileName);
        // 如果文件路径所对应的文件存在，并且是一个文件，则直接删除
        if (file.exists() && file.isFile()) {
        	file.delete();
        }
    }
}
