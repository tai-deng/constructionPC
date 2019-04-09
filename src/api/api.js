// 接口
import http from './request.js'
/**
 * 公共接口
 */
// 获取BIMFace的AccessToken接口
export const GetAccessToken = params => {
  return http.fetchGet('Home/GetAccessToken', params)
}
//登录接口
export const Login = params => {
  return http.fetchPost('Home/Login', params)
}

/**
 * 模型相关
 */
//获取用户默认模型ID
export const GetDefaultModelId = params => {
  return http.fetchGet('Project/GetDefaultModelId', params)
}
// 获取ViewToken
export const GetViewToken = params => {
  return http.fetchGet('Model/GetViewToken', params)
}
/**
 * 首页
 */


//根据楼栋获取模型的楼层
export const GetFloorbyBuilding = params => {
  return http.fetchGet('Element/GetFloorbyBuilding', params)
}
//根据楼栋获取模型的专业
export const GetSpecialtybyBuilding = params => {
  return http.fetchGet('/Element/GetSpecialtybyBuilding', params)
}
//根据楼栋获取模型的楼层的构件类型
export const GetElementTypebyBuilding = params => {
  return http.fetchGet('Element/GetElementTypebyBuilding', params)
}

/**
 * 主页
 */
//根据模型获取进度
export const GetHomeSchedulePlan = params => {
  return http.fetchGet('SchedulePlan/GetHomeSchedulePlan', params)
}
/**
 * 信息配置
 */
// 提交信息配置
export const SubModelEngingConfig = (getParams, postParams) => {
  return http.fetchPostAndGet2('EngingConfig/SubModelEngingConfig', getParams, postParams)
}
// 获取工程类型下拉列表
export const GetEngingTypeList = params => {
  return http.fetchGet('EngingConfig/GetEngingTypeList', params)
}
	
// 获取省下拉列表
export const GetProvinceList = params => {
  return http.fetchGet('EngingConfig/GetProvinceList', params)
}
// 获取市下拉列表
export const GetCityList = params => {
  return http.fetchGet('EngingConfig/GetCityList', params)
}
// 获取区下拉列表
export const GetCountryList = params => {
  return http.fetchGet('EngingConfig/GetCountryList', params)
}
// 根据所选工程类型获取信息配置
export const GetEngingConfigByTypeId = params => {
  return http.fetchGet('EngingConfig/GetEngingConfigByTypeId', params)
}
// 获取建筑单体数量
export const GetBuildMonCount = params => {
  return http.fetchGet('EngingConfig/GetBuildMonCount', params)
}

/**
 * 清单导入
 */
//施工图工程量清单导入
export const BOQImport = params => {
  return http.formDataUpLoad('ListImport/BOQImport', params)
}
//全费用清单导入
export const CostImport = params => {
  return http.formDataUpLoad('ListImport/CostImport', params)
}
//获取楼栋列表
export const GetBuilding = params => {
  return http.fetchGet('Element/GetBuilding', params)
}
//获取缓存中表数据
export const GetBOQTempTable = params => {
  return http.fetchGet('ListImport/GetBOQTempTable', params)
}
//确定导入 替换当前表单，新增表单
export const SaveImport = (getParams, postParams) => {
  return http.fetchPostAndGet('ListImport/SaveImport', getParams, postParams)
}
//获取所有的施工图工程量清单类型
export const GetAllBOQType = params => {
  return http.fetchGet('ListImport/GetAllBOQType', params)
}
//获取所有的施工图工程量清单楼层
export const GetAllBOQFloor = params => {
  return http.fetchGet('ListImport/GetAllBOQFloor', params)
}
//获取所有的施工图工程量清单构件
export const GetAllBOQElement = params => {
  return http.fetchGet('ListImport/GetAllBOQElement', params)
}
//根据楼栋获取施工图的楼层列表
export const GetContructFloorbyBuilding = params => {
  return http.fetchGet('Element/GetContructFloorbyBuilding', params)
}
//根据楼栋，类型 获取施工图的构件名称列表
export const GetConstructElementNamebyBuilding = params => {
  return http.fetchGet('Element/GetConstructElementNamebyBuilding', params)
}
//根据楼栋获取施工图的类型列表
export const GetContructTypebyBuilding = params => {
  return http.fetchGet('Element/GetContructTypebyBuilding', params)
}
//根据类型 楼层 构件名称 查询实施工图表数据列表
export const GetBOQList = params => {
  return http.fetchGet('ListImport/GetBOQList', params)
}
//获取全费用清单缓存列表
export const GetCostTempData = params => {
  return http.fetchGet('ListImport/GetCostTempData', params)
}
//全费用清单勾选后保存导入
export const SaveCostImport = (getParams, postParams)  => {
  return http.fetchPostAndGet('ListImport/SaveCostImport', getParams, postParams)
}
//全费用清单成功导入后 根据楼栋获取表数据
export const GetCostList = params => {
  return http.fetchGet('ListImport/GetCostList', params)
}
//获取所有的费用清单楼层
export const GetAllFeeListFloor = params => {
  return http.fetchGet('ListImport/GetAllFeeListFloor', params)
}
//获取构件清单楼栋
export const GetAllElementBuilding = params => {
  return http.fetchGet('ListImport/GetAllElementBuilding', params)
}
//获取构件清单专业
export const GetAllElementSpecialty = params => {
  return http.fetchGet('ListImport/GetAllElementSpecialty', params)
}
//获取构件清单楼层
export const GetAllElementFloor = params => {
  return http.fetchGet('ListImport/GetAllElementFloor', params)
}
//获取构件清单清单名称
export const GetAllElementName = params => {
  return http.fetchGet('ListImport/GetAllElementName', params)
}
// 生成构件清单
export const GenerateElementList = params => {
  return http.fetchPostGet('ListImport/GenerateElementList', params)
}
//获取构件清单列表
export const GetElementList = params => {
  return http.fetchGet('ListImport/GetElementList', params)
}





/**
 * 清单调优
 */
// 清单调优列表
export const GetBIMList = params => {
  return http.fetchGet('Element/GetBIMList', params)
}
// export const GetFloorbyBuilding = params => {
//   return http.fetchGet('Element/GetFloorbyBuilding', params)
// }
// export const GetSpecialtybyBuilding = params => {
//   return http.fetchGet('Element/GetSpecialtybyBuilding', params)
// }
export const GetAllElementResorceName = params => {
  return http.fetchGet('ListImport/GetAllElementResorceName', params)
}
//一键修正工程量
export const UpdatePlanUse = params => {
  return http.fetchPostGet('Element/UpdatePlanUse', params)
}
//根据单个系数修改单条工程量
export const UpdateOnePlanUse = params => {
  return http.fetchPostGet('Element/UpdateOnePlanUse', params)
}

// 上传模型
//添加建筑单体--更改建筑单体的时候发起请求
export const AddSingBuilding = params => {
  return http.fetchPostGet('Model/AddSingBuilding', params)
}
//获取建筑单体列表
export const GetSingBuildingList = params => {
  return http.fetchGet('Model/GetSingBuildingList', params)
}
//修改建筑单体
export const UpdateSingBuilding = params => {
  return http.fetchPostGet('Model/UpdateSingBuilding', params)
}
//删除建筑单体 
export const DeleteSingBuilding = params => {
  return http.fetchPostGet('Model/DeleteSingBuilding', params)
}
//上传模型 formDataUpLoad
export const UploadBIMFaceAddModelFile = params => {
  return http.formDataUpLoad('Model/UploadBIMFaceAddModelFile', params)
}
//根据项目ID和建筑单体ID获取模型文件ID和名称列表  Model/GetList
export const GetList = params => {
  return http.fetchGet('Model/GetList', params)
}
//根据项目ID和建筑单体ID获取详情
export const GetDetailList = params => {
  return http.fetchGet('Model/GetDetailList', params)
}
//发起合并 
export const MergeFile = (params,post) => {
  return http.fetchPost('Model/MergeFile', params,post)
}



/**
 * 沟通管理
 */
// 保存沟通管理数据
export const SaveCommunicate = params => {
  return http.fetchPost('Communicate/SaveCommunicate', params)
}
// 获取沟通类型列表
export const GetComTypeList = params => {
  return http.fetchGet('Communicate/GetComTypeList', params)
}





/**
 * 范围管理 
 */
// 保存变更列表数据
export const SaveChange = params => {
  return http.fetchPost('RangeManage/SaveChange', params)
}



/**
 * 阻织单位
 */
//获取单位列表
export const GetOrgList = params => {
  return http.fetchGet('Org/GetOrgList', params)
}
//按公司获取部门数据列表
export const GetDeptList = params => {
  return http.fetchGet('Org/GetDeptList', params)
}




/**
 * 用户信息
 */
//根据项目ID和单位ID以及部门ID获取人员列表
export const GetUserListByDept = params => {
  return http.fetchGet('User/GetUserListByDept', params)
}







/**
 * 文件上传
 */
//上传Base64String 图片
export const UploadBase64Img = params => {
  return http.fetchPost('File/UploadBase64Img', params)
}
//图片上传
export const UploadImages = params => {
  return http.formDataUpLoad('File/UploadImages', params)
}





//认证设定
//获取---方案类型列表
export const SchemeTypeList = params => {
  return http.fetchGet('AuthenticationSetting/SchemeTypeList', params)
}
//获取节点接口
export const ToSetNodeList = params => {
  return http.fetchGet('AuthenticationSetting/ToSetNodeList', params)
}
//获取  楼栋接口 
export const SetGetBuilding = params => {
  return http.fetchGet('Element/GetBuilding', params)
}
//获取认证设定任务列表
export const GetAuthenSetTaskList = params => {
  return http.fetchGet('AuthenticationSetting/GetAuthenSetTaskList', params)
}
//获取认证设定详情
export const GetAutSetListByTaskId = params => {
  return http.fetchGet('AuthenticationSetting/GetAutSetListByTaskId', params)
}
//新增 认证设定 AuthenticationSetting/EditModelAuthenticationSettings
export const AddModelAuthenticationSettings = (params,post)=> {
  return http.fetchPostAndGet('AuthenticationSetting/AddModelAuthenticationSettings', params,post)
}
//编辑 认证设定
export const EditModelAuthenticationSettings = (params,post)=> {
  return http.fetchPostAndGet('AuthenticationSetting/EditModelAuthenticationSettings', params,post)
}


//协同设定
//按公司获取部门数据列表
// export const GetOrgList = params=> {
//   return http.fetchGet('Org/GetOrgList', params)
// }
//获取岗位     User/GetPositionConfig
export const GetPositionConfig = (params,post)=> {
  return http.fetchGet('User/GetPositionConfig', params,post)
}
//添加单位 Org/AddOrgInfo
export const AddOrgInfo = params => {
  return http.fetchPostAndGet('Org/AddOrgInfo', params)
}
//删除单位 Org/DeleteOrg
export const DeleteOrg = (params,post)=> {
  return http.fetchPostAndGet('Org/DeleteOrg', params,post)
}
//修改单位 Org/UpdateOrgInfo
export const UpdateOrgInfo = (params,post)=> {
  return http.fetchPostAndGet('Org/UpdateOrgInfo', params,post)
}


// 案例
//获取用户最近完成(月)接口
// export const GetMonthRecentCompleted = params => {
//   return http.fetchGet('Mobile/GetMonthRecentCompleted', params)
// }
//登录接口
// export const Login = params => {
//   return http.fetchPost('Home/Login', params)
// }
// // 根据（质量，安全，进度）动态ID删除动态表及动态照片表记录 ids
// export const DeleteById = params => {
//   return http.fetchPostGet('Dynamic/DeleteById', params)
// }
// //文件上传
// export const UploadFiles = params => {
//   return http.formDataUpLoad('File/UploadAndSaveMyFile', params)
// }

/**
 * 进度规划
 */
// 获取列表
export const Get_JDGH_List = params => {
  return http.fetchGet('SchedulePlan/GetSchedule_PlanList', params)
}
// project 导入
export const project_JDGH_push = (postParams) => {
  return http.formDataUpLoad('SchedulePlan/SchedulePlanUpload', postParams)
}
// 删除选定
export const delete_JDGH_push=(postParams)=>{
  return http.fetchPostGet('SchedulePlan/DeleteByIds',postParams)
}
// 新增进度方案（手动新建）
export const add_scheme_hand=(gms)=>{
  return http.fetchPostGet('SchedulePlan/ManualAddModelSchedulePlan',gms)
}
// 新增进度方案（自动新建）
export const add_scheme_automation=(gms,pms)=>{
  return http.fetchPostAndGet('SchedulePlan/AutoMaticAddModelSchedulePlan',gms,pms)
}
// 获取列表-楼层类型
export const get_floor_list=(gms)=>{
  return http.fetchGet('SchedulePlan/GetFloor_TypeList',gms)
}
// 编辑-楼层类型
export const set_floor_list=(pms)=>{
  return http.fetchPost('SchedulePlan/SubFloorTypeList',pms)
}
// 删除-楼层类型
export const del_floor_list=(gms)=>{
  return http.fetchPostGet('SchedulePlan/DelFloorType',gms)
}
// 获取列表-工序类型
export const get_process_list=(gms)=>{
  return http.fetchGet('SchedulePlan/GetProcess_DefinitionList',gms)
}
// 编辑-工序类型
export const set_process_list=(pms)=>{
  return http.fetchPost('SchedulePlan/SubProcessDefinitionList',pms)
}
// 删除-工序类型
export const del_process_list=(gms)=>{
  return http.fetchPostGet('SchedulePlan/DelProcessDefinition',gms)
}
// 获取列表-时间类型
export const get_date_list=(gms)=>{
  return http.fetchGet('SchedulePlan/GetTimeDefinitionList',gms)
}
// 下拉-工序类型
export const pull_date_list=(gms)=>{
  return http.fetchGet('SchedulePlan/GetScheduleSettingToCbx',gms)
}
// 编辑-时间类型
export const set_date_list=(pms)=>{
  return http.fetchPost('SchedulePlan/SubTimeDefinitionList',pms)
}
// 删除-时间类型
export const del_date_list=(gms)=>{
  return http.fetchPostGet('SchedulePlan/DelTimeDefinition',gms)
}
// 获取列表-标准工序
export const get_standard_list=(gms)=>{
  return http.fetchGet('SchedulePlan/GetStandardProcedureList',gms)
}
// 编辑-标准工序
export const set_standard_list=(pms)=>{
  return http.fetchPost('SchedulePlan/SubStandardProcedureList',pms)
}
// 删除-标准工序
export const del_standard_list=(gms)=>{
  return http.fetchPostGet('SchedulePlan/DelStandardProcedure',gms)
}
// 前置下拉列表-标准工序
export const pullb_standard_list=(gms)=>{
  return http.fetchGet('SchedulePlan/GetFrontNodeList',gms)
}
// 批量保存标准工序定义-标准工序
export const getpre_standard_list=(pms)=>{
  return http.fetchPost('SchedulePlan/SubStandardProcedureList',pms)
}






/** 构件相关api */
// 获取构件清单数据
export const GetAllElementList = params => {
  return http.fetchGet('Element/GetAllElementList', params)
}
// 获取清单类型 0为未导入 1为施工图清单 2.全费用清单 3.构件生成清单
export const GetCurrentListType = params => {
  return http.fetchGet('ListImport/GetCurrentListType', params)
}
// 获取施工图清单导入中楼栋和导入类型（施工图下拉列表）
export const GetBuildImportType = params => {
  return http.fetchGet('ListImport/GetBuildImportType', params)
}
// 施工图一键关联
export const ConstructAutoRalation = params => {
  return http.fetchPost('Element/ConstructAutoRalation', params)
}
// 获取所有的费用清单列表数据
export const GetAllCostList = params => {
  return http.fetchGet('ListImport/GetAllCostList', params)
}
// 根据楼栋获取项目名称
export const GetProjectName = params => {
  return http.fetchGet('Element/GetProjectName', params)
}
// 根据楼层拆分工程量
export const SplitElementByFloor = params => {
  return http.fetchPost('Element/SplitElementByFloor', params)
}
// 根据数量拆分工程量
export const SplitElementByNum = params => {
  return http.fetchPost('Element/SplitElementByNum', params)
}


/**
 * 公共接口
 */
//根据项目ID获取所有人员信息（id和姓名）
export const GetAllUserList = params => {
  return http.fetchGet('User/GetAllUserList', params)
}
//获取当前登录用户详情
export const GetLoginUserInfo = params => {
  return http.fetchGet('User/GetLoginUserInfo', params)
}

/**
 * 质量管理部分
 */
//获取质量管理信息
export const GetQCManage = params => {
  return http.fetchGet('QCManage/GetQCManage', params)
}
//获取质量进度表数据
export const GetQCSchedulePlan = params => {
  return http.fetchPost('QCManage/QueryQCSchedulePlan', params)
}

/**
 * 风险管理部分
 */
//根据项目ID获取本月新增问题数
export const GetThisMonthCount = params => {
  return http.fetchGet('Risk/GetThisMonthCount', params)
}
//根据项目ID和状态获取风险管理问题列表
export const GetRiskList = params => {
  return http.fetchGet('Risk/GetRiskList', params)
}
//风险管理问题发布
export const PublishRisk = params => {
  return http.fetchPost('Risk/PublishRisk', params)
}
//获取风险管理问题类型
export const GetRiskTypeList = params => {
  return http.fetchGet('Risk/GetRiskTypeList', params)
}
//根据风险问题ID获取详情信息（含照片）
// export const GetRiskInfoByID = (getParams, postParams) => {
//   return http.fetchPostAndGet('Risk/GetRiskInfoByID', getParams, postParams)
// }
export const GetRiskInfoByID = params => {
  return http.fetchGet('Risk/GetRiskInfoByID', params)
}