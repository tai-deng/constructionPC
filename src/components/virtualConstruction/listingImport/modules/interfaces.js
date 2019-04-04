

import { GetBuilding, SaveImport,SaveCostImport } from '@/api/api.js'
/**
 * 获取楼栋列表
 * @param {项目ID} projectid 
 * @param {this} that 
 */
export const getBuildings = (that, projectid) => {
  return new Promise((resolve, reject) => {
    that.getDataBySessionStorageAll(GetBuilding, { projectid }, "BuildingList", false
    ).then(list => {
      console.log(list);
      if (list.StatusCode === 200) {
        if (list.Detiel && list.Detiel.length != 0) {
          resolve(list.Detiel)
        }
      } else {
        reject('获取楼栋列表失败', new Error(list.Message))
      }
    });
  })
}
/**
 * 施工图确定导入 替换当前表单，新增表单
 * @param {this} that 
 * @param {项目ID} projectid 
 * @param {类型} type 
 * @param {	是否追加 1追加,0覆盖} isAdd 
 * @param {用户ID} userid 
 * @param {字段列表} listField 
 */
export const saveImportTable = (that, projectid, isAdd, userid, listField) => {
  return new Promise((resolve, reject) => {
    let getParams = {
      isAdd,
      projectid,
      userid,
    }
    // 确定导入接口
    that.Request(SaveImport(getParams, listField)).then(res => {
      if (res.StatusCode === 200) {
        resolve(res)
      } else {
        reject(new Error(res.Message))
      }
    })
  })
}
/**
 * 全费用确定导入 替换当前表单，新增表单
 * @param {this} that 
 * @param {项目ID} projectid 
 * @param {类型} type 
 * @param {	是否追加 1追加,0覆盖} isAdd 
 * @param {用户ID} userid 
 * @param {字段列表} listField 
 * buildname:楼栋名
 */
export const CostImportTable = (that, projectid, isAdd, userid, buildname,listField) => {
  console.log(buildname,listField )
  return new Promise((resolve, reject) => {
    let getParams = {
      isAdd,
      projectid,
      userid,
      buildname
    }
    // 确定导入接口
    that.Request(SaveCostImport(getParams, listField)).then(res => {
      if (res.StatusCode === 200) {
        resolve(res)
      } else {
        reject(new Error(res.Message))
      }
    })
  })
}