/**
 * 同步
 */
import types from './mutation-types.js'
console.log(types.GET_MODEL_BOX)
export default{
    /**
     * 模型状态
     * @param {*} state 
     * @param {*} model 模型对象
     */
    [types.GET_MODEL_BOX](state,model){
       state.modelBox = model
    },
    // gantt 状态
    [types.GET_GANTT_STATE](state,model){
        state.ganttState = model
    },
    /**
     * 模型是否加载完成
     * @param {*} state 
     * @param {true：加载完成} isViewAdded 
     */
    [types.IS_VIEW_ADDED](state,isViewAdded){
       state.isViewAdded = isViewAdded
    },
    /**
     * // 清单导入页面 跳转到哪个页面 0 --plan1 , 2 --plan2 ,  3-- plan3
     * @param {*} state 
     * @param {*} num 
     */
    [types.GET_TO_PAGE_NUM](state,num){
      state.toPageNum = num
    },
    //模型实例
    [types.VIEWER_3D](state,view){
      state.viewer3d = view
    }
}