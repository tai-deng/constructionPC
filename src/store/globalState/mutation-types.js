/**
 * mutation.js 常量集
 */
export default{
    GET_ELEMENT_IDS:'GET_ELEMENT_IDS',//获取模型的所有构件ID数组
    GET_MODEL_BOX:'GET_MODEL_BOX',////模型状态
    GET_GANTT_STATE:'GET_GANTT_STATE', // gantt
    IS_VIEW_ADDED:'IS_VIEW_ADDED',//模型是否加载完成
    GET_TO_PAGE_NUM:'GET_TO_PAGE_NUM',// 清单导入页面 跳转到哪个页面 0 --plan1 , 2 --plan2 ,  3-- plan3
    VIEWER_3D:'VIEWER_3D',//模型实例
    SELECT_ALLID: 'SELECT_ALLID', // 模型选中状态构件ID  
    GET_OPTION_OBJ: 'GET_OPTION_OBJ', // 需要存储的模型对象
    SET_USERLOGIN_INFO: 'SET_USERLOGIN_INFO',  //用户登陆成功信息
    GET_MENU_OAUTH: 'GET_MENU_OAUTH',  //获取当前登陆用户的菜单栏和权限状态
    GET_MENU_TYPE: 'GET_MENU_TYPE',  //权限类型
    GET_MENU_NAME_STATE: 'GET_MENU_NAME_STATE'  //菜单名称是否修改状态
}