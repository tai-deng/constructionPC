// 模型mixin
export default{
  data(){
    return {
      // 调整默认加载视点
      defaultViewer: '{"name":"persp","position":{"x":1438171.2793804337,"y":-862702.7507015291,"z":166080.3575532545},"target":{"x":2654606.0962352366,"y":353736.5506608591,"z":-1050350.0033448988},"up":{"x":0,"y":-0.0000036732049557848147,"z":0.9999999999932537},"version":1}',
      // 平面的视角
      // dt:'{"name":"persp","position":{"x":1661414.5306349697,"y":-767001.9012085485,"z":423260.1323685449},"target":{"x":1825414.6644911193,"y":-465381.0393853017,"z":-1655506.3605901974},"up":{"x":0,"y":-0.0000036732051910065553,"z":0.9999999999932537},"version":1}',
      // 高亮楼层的视角
      dt:'{"name":"persp","position":{"x":1422599.1549796513,"y":-710569.1774797002,"z":8275.551817240861},"target":{"x":3518809.5973896286,"y":-605826.0227975056,"z":-176311.10276123404},"up":{"x":0,"y":-0.0000036732051910065553,"z":0.9999999999932537},"version":1}',
    }
  },
  methods:{
     /* eslint-disable */
    //定位到默认模型视点快照
    setCameraStatus(){
      console.log('定位到默认模型视点快照')
      //设置模型背景，但无法在加载时改变背景色
      this.viewer3D.setBackgroundColor(new Glodon.Web.Graphics.Color(255, 255, 255, 0))
      // this.viewer3D.setCameraStatus(JSON.parse(this.defaultViewer)) //定位到默认模型视点快照
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
      //去模型背景色
      this.viewer3D.setBackgroundColor(new Glodon.Web.Graphics.Color(255, 255, 255, 0))
      this.viewer3D.render()

    },
    /**
     * 定位到默认模型视点快照 且 显示构件 恢复显示全部构件 29
     * @param {*} ElementIDs 
     */
    setCameraStatusAndElementIDs(ElementIDs){
      this.viewer3D.clearIsolation()//清除隔离
      this.viewer3D.clearArea()//清除空间
      this.viewer3D.setSelectedComponentsById(ElementIDs)//根据构件ID设置多个构件为选中集合
      this.viewer3D.zoomToSelectedComponents()//缩放到加入选中集合的构件
      this.viewer3D.removeSelectedId(ElementIDs) // 根据构件ID从选中集合中删除构件
      this.viewer3D.showExclusiveComponentsByObjectData([{'id':''}]) //全隐藏
      this.viewer3D.showComponentsById(ElementIDs) //根据构件ID显示构件
      this.viewer3D.setComponentsOpacity(ElementIDs, Glodon.Bimface.Viewer.OpacityOption.Opaque)//根据构件ID设置构件半透明，或取消构件半透明   Translucent:半透明,Opaque:取消半透明  
      this.viewer3D.restoreComponentsColorById(ElementIDs)//根据构件ID恢复构件的原来颜色
      this.viewer3D.clearOverrideColorComponents()//恢复全部构件的原来颜色
      // 放大
      // this.viewer3D.zoomIn()
      // this.viewer3D.zoomIn()
      // this.viewer3D.zoomIn()
      // this.viewer3D.zoomIn()
      this.viewer3D.setCameraStatus(JSON.parse(this.defaultViewer)) //定位到默认模型视点快照
      //去模型背景色
      this.viewer3D.setBackgroundColor(new Glodon.Web.Graphics.Color(255, 255, 255, 0))
      this.viewer3D.render()
    },

    /** 
     * 模型加载完成之后定位构件且其它组件隐藏   函数序号：30
     * ElementIDs：构件ID数组，可传多个
    */
    positioningComponentsHidden(ElementIDs){
      // if ( ElementIDs.length != 0){// 如果模型已加载完成
        console.log('模型加载完成之后定位构件且其它组件隐藏',ElementIDs)
        this.viewer3D.clearIsolation()//清除隔离
        this.viewer3D.clearArea()//清除空间
        // this.viewer3D.setSelectedComponentsById(ElementIDs)//根据构件ID设置多个构件为选中集合
        // this.viewer3D.zoomToSelectedComponents()//缩放到加入选中集合的构件
        this.viewer3D.showExclusiveComponentsByObjectData([{'id':''}]) //全隐藏
      this.viewer3D.showComponentsById(ElementIDs)
      this.viewer3D.setComponentsOpacity(ElementIDs, Glodon.Bimface.Viewer.OpacityOption.Opaque)//根据构件ID设置构件半透明，或取消构件半透明   Translucent:半透明,Opaque:取消半透明  
      this.viewer3D.restoreComponentsColorById(ElementIDs)//根据构件ID恢复构件的原来颜色
      this.viewer3D.clearOverrideColorComponents()//恢复全部构件的原来颜色
        // 根据构件ID隔离构件，其他全部隐藏或半透明
        // this.viewer3D.isolateComponentsById(ElementIDs, Glodon.Bimface.Viewer.IsolateOption.HideOthers)
        // 设置被隔离构件的颜色
        // this.viewer3D.setIsolatedComponentColor(new Glodon.Web.Graphics.Color(0, 0, 0, 0.1))
        //去模型背景色
      this.viewer3D.setBackgroundColor(new Glodon.Web.Graphics.Color(255, 255, 255, 0))
        this.viewer3D.render()
      // }
    },
    /**
     * 根据构件ID显示构件 且定位和恢复原色等 函数序号：31
     * @param {*} ElementIDs
     */
    showComponentsById(ElementIDs){
      console.log('根据构件ID显示构件')
      console.log(ElementIDs, this.viewer3D)
      this.viewer3D.clearIsolation()//清除隔离
      this.viewer3D.clearArea()//清除空间
      // 必须选调这一步， 根据筛选条件显示构件，其余全部隐藏  ，把条件写成空或者随便写一个不符合的条件，剩下的都会被影藏
      // this.viewer3D.showExclusiveComponentsByObjectData([{'id':''}]) //全隐藏
      // this.viewer3D.showComponentsById(ElementIDs)
      // this.viewer3D.render()

      // this.viewer3D.showExclusiveComponentsByObjectData([{ 'id': '' }])
      // this.viewer3D.restoreDefault()
      // this.viewer3D.showComponentsById(ElementIDs)
      // // this.viewer3D.overrideComponentsColorById(highLightElementIDs, new Glodon.Web.Graphics.Color(65, 105, 225, 1))//作色某个构件（高亮）
      this.viewer3D.setSelectedComponentsById(ElementIDs)//根据构件ID设置多个构件为选中集合
      this.viewer3D.zoomToSelectedComponents()//缩放到加入选中集合的构件
      this.viewer3D.removeSelectedId(ElementIDs)
      this.viewer3D.showExclusiveComponentsByObjectData([{'id':''}]) //全隐藏
      this.viewer3D.showComponentsById(ElementIDs)
      // 放大
      this.viewer3D.zoomIn()
      this.viewer3D.zoomIn()
      this.viewer3D.zoomIn()
      this.viewer3D.zoomIn()
      this.viewer3D.render()
      //去模型背景色
      this.viewer3D.setBackgroundColor(new Glodon.Web.Graphics.Color(255, 255, 255, 0))
    },
    /**
     * 根据构件ID显示构件且高亮某个构件  函数序号：32
     * @param {*} ElementIDs
     */
    showComponentsByIdAndColor(ElementIDs, highLightElementIDs) {
      console.log('根据构件ID显示构件')
      console.log(ElementIDs, this.viewer3D, highLightElementIDs)
      this.viewer3D.clearIsolation()//清除隔离
      this.viewer3D.clearArea()//清除空间
      // 必须选调这一步， 根据筛选条件显示构件，其余全部隐藏  ，把条件写成空或者随便写一个不符合的条件，剩下的都会被影藏
      this.viewer3D.showExclusiveComponentsByObjectData([{ 'id': '' }])
      this.viewer3D.showComponentsById(ElementIDs)
      this.viewer3D.clearOverrideColorComponents()//根据筛选条件恢复构件的原来颜色
      this.viewer3D.overrideComponentsColorById(highLightElementIDs, new Glodon.Web.Graphics.Color(65, 105, 225, 1))//作色某个构件（高亮）
      this.viewer3D.setSelectedComponentsById(highLightElementIDs)//根据构件ID设置多个构件为选中集合
      this.viewer3D.zoomToSelectedComponents()//缩放到加入选中集合的构件
      //去模型背景色
      this.viewer3D.setBackgroundColor(new Glodon.Web.Graphics.Color(255, 255, 255, 0))
      this.viewer3D.render()
    },
    /** 
     * 模型加载完成之后 根据构件ID集显示构件 及 高亮某个构件且其它构件半隐藏  函数序号：33
     * ElementIDs：构件ID数组，可传多个
    */
   positioningComponentsMakeOthers(ElementIDs, highLightElementIDs){
    if ( ElementIDs.length != 0){// 如果模型已加载完成
      console.log('模型加载完成之后 根据构件ID集显示构件 及 高亮某个构件且其它构件半隐藏')
      // 必须选调这一步， 根据筛选条件显示构件，其余全部隐藏  ，把条件写成空或者随便写一个不符合的条件，剩下的都会被影藏
      this.viewer3D.showExclusiveComponentsByObjectData([{ 'id': '' }])
      this.viewer3D.showComponentsById(ElementIDs)
      this.viewer3D.clearOverrideColorComponents()//根据筛选条件恢复构件的原来颜色
      this.viewer3D.setSelectedComponentsById(ElementIDs)//根据构件ID设置多个构件为选中集合
      this.viewer3D.zoomToSelectedComponents()//缩放到加入选中集合的构件
      // 根据构件ID隔离构件，其他全部隐藏或半透明
      this.viewer3D.isolateComponentsById(highLightElementIDs, Glodon.Bimface.Viewer.IsolateOption.MakeOthersTranslucent)
      // 设置被隔离构件的颜色
      this.viewer3D.setIsolatedComponentColor(new Glodon.Web.Graphics.Color(0, 0, 0, 0.1))
            // 放大
            this.viewer3D.zoomIn()
            this.viewer3D.zoomIn()
            this.viewer3D.zoomIn()
            this.viewer3D.zoomIn()
            this.viewer3D.zoomIn()
            this.viewer3D.zoomIn()
            this.viewer3D.render()
            //去模型背景色
      this.viewer3D.setBackgroundColor(new Glodon.Web.Graphics.Color(255, 255, 255, 0))
    }
  },
  /**
   *  显示模型全部构件 34
   */
  showAllComponentss(){
    console.log('显示模型全部构件 34')
    this.viewer3D.showAllComponents()
    this.viewer3D.render()
  },
  //
  
  /**
   *  获取视点及位置信息 35
   */
  createViewer() {
    let Viewer = this.viewer3D.getCameraStatus()
    //  创建快照获取Base64String 图片 
    this.viewer3D.createSnapshotAsync(new Glodon.Web.Graphics.Color(255, 255, 255, 0), e=>{
      console.log(e)
      sessionStorage.setItem('e',e)
    })
    sessionStorage.setItem('Viewer',Viewer)
  },

  /**
   * 获取当前模型的浏览状态，用于保存后恢复模型状态 36
   */

  getCurrentStatee(){
    console.log('获取当前模型的浏览状态 36')
    let state =  this.viewer3D.getCurrentState()
    let stateStr = JSON.stringify(state)
    console.log(stateStr)
    sessionStorage.setItem('stateStr',stateStr)
    this.viewer3D.render()
  },




    //定位到默认模型视点快照

    /**
     * 高亮楼层专用  61
     */
    setCameraStatusFloor(ElementIDs, highLightElementIDs) {
      // 必须选调这一步， 根据筛选条件显示构件，其余全部隐藏  ，把条件写成空或者随便写一个不符合的条件，剩下的都会被影藏
      // this.viewer3D.showExclusiveComponentsByObjectData([{ 'id': '' }])
      // this.viewer3D.showComponentsById(ElementIDs)
      // this.viewer3D.clearOverrideColorComponents()//根据筛选条件恢复构件的原来颜色
      // // this.viewer3D.overrideComponentsColorById(highLightElementIDs, new Glodon.Web.Graphics.Color(65, 105, 225, 1))//作色某个构件（高亮）
      // this.viewer3D.setSelectedComponentsById(highLightElementIDs)//根据构件ID设置多个构件为选中集合
      // this.viewer3D.zoomToSelectedComponents()//缩放到加入选中集合的构件
      // this.viewer3D.isolateComponentsById(ElementIDs, Glodon.Bimface.Viewer.IsolateOption.MakeOthersTranslucent)
      // // 设置被隔离构件的颜色
      // this.viewer3D.setIsolatedComponentColor(new Glodon.Web.Graphics.Color(0, 0, 0, 0.1))
      // this.viewer3D.setCameraStatus(JSON.parse(this.dt)) //定位到默认模型视点快照
      // this.viewer3D.render()

      if (highLightElementIDs.length != 0) {// 如果模型已加载完成
        console.log('模型加载完成之后定位构件且其它组件隐藏')
        this.viewer3D.setSelectedComponentsById(highLightElementIDs)//根据构件ID设置多个构件为选中集合
        this.viewer3D.zoomToSelectedComponents()//缩放到加入选中集合的构件
        // 根据构件ID隔离构件，其他全部隐藏或半透明
        this.viewer3D.isolateComponentsById(highLightElementIDs, Glodon.Bimface.Viewer.IsolateOption.MakeOthersTranslucent)
        // 设置被隔离构件的颜色
        this.viewer3D.setIsolatedComponentColor(new Glodon.Web.Graphics.Color(0, 0, 0, 0.1))
        // this.viewer3D.isolateComponentsById(highLightElementIDs, Glodon.Bimface.Viewer.IsolateOption.HideOthers)
        this.viewer3D.setCameraStatus(JSON.parse(this.dt)) //定位到默认模型视点快照
        //去模型背景色
      this.viewer3D.setBackgroundColor(new Glodon.Web.Graphics.Color(255, 255, 255, 0))
        this.viewer3D.render()
      }
    },
    
  }
}