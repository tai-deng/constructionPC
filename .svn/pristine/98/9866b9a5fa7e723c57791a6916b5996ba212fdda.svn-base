// 模型mixin
export default{
  data(){
    return {
      // 调整默认加载视点
      defaultViewer: '{"name":"persp","position":{"x":1438171.2793804337,"y":-862702.7507015291,"z":166080.3575532545},"target":{"x":2654606.0962352366,"y":353736.5506608591,"z":-1050350.0033448988},"up":{"x":0,"y":-0.0000036732049557848147,"z":0.9999999999932537},"version":1}'
    }
  },
  methods:{
     /* eslint-disable */
    //定位到默认模型视点快照
    setCameraStatus(){
      this.viewer3D.setCameraStatus(JSON.parse(this.defaultViewer)) //定位到默认模型视点快照
    },
    // 定位构件(隔离-->高亮-->缩放视点)
    _positioningComponents(ElementIDs){
      // console.log(ElementIDs)
      if (ElementIDs.length === 0){
        console.log('%c ****恢复****','color:red')
        this.viewer3D.clearIsolation() //清除隔离
        // this.viewer3D.opaqueAllComponents()//取消所有构件半透明
        // this.viewer3D.clearOverrideColorComponents() // 恢复全部构件的原来颜色
        this.viewer3D.render()
        this.setCameraStatus()
      }
      this.viewer3D.setSelectedComponentsById(ElementIDs)//根据构件ID设置多个构件为选中集合
      this.viewer3D.zoomToSelectedComponents()//缩放到加入选中集合的构件
      // 放大
      // this.viewer3D.zoomIn()
      // this.viewer3D.zoomIn()
      // this.viewer3D.zoomIn()
      // this.viewer3D.zoomIn()
      // 根据构件ID隔离构件，其他全部隐藏或半透明
      this.viewer3D.isolateComponentsById(ElementIDs, Glodon.Bimface.Viewer.IsolateOption.MakeOthersTranslucent)
      // 设置被隔离构件的颜色
      this.viewer3D.setIsolatedComponentColor(new Glodon.Web.Graphics.Color(0, 0, 0, 0.1))
      this.viewer3D.render()

    },
    /** 
     * 模型加载完成之后定位构件且其它组件隐藏   函数序号：30
     * ElementIDs：构件ID数组，可传多个
    */
    positioningComponentsHidden(ElementIDs){
      if ( ElementIDs.length != 0){// 如果模型已加载完成
        this.viewer3D.setSelectedComponentsById(ElementIDs)//根据构件ID设置多个构件为选中集合
        this.viewer3D.zoomToSelectedComponents()//缩放到加入选中集合的构件
        // 根据构件ID隔离构件，其他全部隐藏或半透明
        this.viewer3D.isolateComponentsById(ElementIDs, Glodon.Bimface.Viewer.IsolateOption.HideOthers)
        // 设置被隔离构件的颜色
        // this.viewer3D.setIsolatedComponentColor(new Glodon.Web.Graphics.Color(0, 0, 0, 0.1))
        this.viewer3D.render()
      }
    }
  }
}