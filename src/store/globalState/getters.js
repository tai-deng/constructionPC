/**
 * 获取状态
 */
export default{
    getModelBox: state => state.modelBox,//模型状态
    getGanttState:state => state.ganttState, // gantt状态
    getToPageNum:state => state.toPageNum,// 清单导入页面 跳转到哪个页面 0 --plan1 , 2 --plan2 ,  3-- plan3
    getViewer3d:state => state.viewer3d,//获取模型实例
}