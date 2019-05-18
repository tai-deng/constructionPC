/**
 * 获取状态
 */
export default{
    getElementIDs:state => state.ElementIDs,//获取模型所有构件ID数组
    getModelBox: state => state.modelBox,//模型状态
    getGanttState:state => state.ganttState, // gantt状态
    getToPageNum:state => state.toPageNum,// 清单导入页面 跳转到哪个页面 0 --plan1 , 2 --plan2 ,  3-- plan3
    getViewer3d:state => state.viewer3d,//获取模型实例
    getIsViewAdded:state => state.isViewAdded,  //获取模型加载是否完成   true为已加载
    getSelAllID:state => state.selAllID,  //获取模型选择的构建ID
    getOptionObj:state => state.optionsObjList, //获取模型对象
    getUserLoginInfo:state => state.userLoginInfo,  //用户登陆成功信息
    getMenuAndOAuth:state => state.menuAndOAuth,  //获取当前登陆用户的菜单栏和权限状态
    getMenuType:state => state.menuType  //菜单权限类型
}