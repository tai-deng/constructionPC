// 模型mixin
export default {
  data() {
    return {
      // 调整默认加载视点
      defaultViewer: '{"name":"persp","position":{"x":1438171.2793804337,"y":-862702.7507015291,"z":166080.3575532545},"target":{"x":2654606.0962352366,"y":353736.5506608591,"z":-1050350.0033448988},"up":{"x":0,"y":-0.0000036732049557848147,"z":0.9999999999932537},"version":1}',
      // 平面的视角
      // dt:'{"name":"persp","position":{"x":1661414.5306349697,"y":-767001.9012085485,"z":423260.1323685449},"target":{"x":1825414.6644911193,"y":-465381.0393853017,"z":-1655506.3605901974},"up":{"x":0,"y":-0.0000036732051910065553,"z":0.9999999999932537},"version":1}',
      // 高亮楼层的视角
      dt: '{"name":"persp","position":{"x":1422599.1549796513,"y":-710569.1774797002,"z":8275.551817240861},"target":{"x":3518809.5973896286,"y":-605826.0227975056,"z":-176311.10276123404},"up":{"x":0,"y":-0.0000036732051910065553,"z":0.9999999999932537},"version":1}',
    }
  },
  methods: {
    reFunctionNumber(arr) {
      console.log(arr)
      if (!arr) return
      if (arr.indexOf(29) != -1) {
        this.setCameraStatusAndElementIDs(this.ElementIDs)
      }
      if (arr.indexOf(30) != -1) {
        this.positioningComponentsHidden(this.ElementIDs)
      }
      if (arr.indexOf(31) != -1) {
        this.showComponentsById(this.ElementIDs)
      }
      if (arr.indexOf(32) != -1) {
        this.showComponentsByIdAndColor(this.ElementIDs, this.highLightElementIDs)
      }
      if (arr.indexOf(33) != -1) {
        this.positioningComponentsMakeOthers(this.ElementIDs, this.highLightElementIDs)
      }
      if (arr.indexOf(61) != -1) { //高亮楼层专用  61
        this.setCameraStatusFloor(this.ElementIDs, this.highLightElementIDs)
      }
      if (arr.indexOf(34) != -1) {
        this.showAllComponentss()
        this.reductionModule()
      }
      if (arr.indexOf(35) != -1) {
        this.createViewer()
      }
      if (arr.indexOf(36) != -1) {
        this.getCurrentStatee()
      }
      if (arr.indexOf(28) != -1) {
        let viewer = JSON.parse(this.ElementIDs[0]).camera
        console.log(viewer)
        this.setCamera(JSON.stringify(viewer))

      }
      if (arr.indexOf(27) != -1) {
        let positions = this.ElementIDs
        this.set3DMarker(positions)
      }
      if (arr.indexOf(37) != -1) {
        let ids = this.ElementIDs
        this.setMarkerHide(ids)
      }
      if (arr.indexOf(38) != -1) {
        let ids = this.ElementIDs
        this.setMarkerShow(ids)
      }
      if (arr.indexOf(39) != -1) {
        // this.reductionModule()
        this.setHideViewHouse()
      }
      if (arr.indexOf(40) != -1) {
        let components = this.ElementIDs
        this.setComponentColor(components)
      }
      if (arr.indexOf(41) != -1) {
        this.reductionModule()
      }
      if (arr.indexOf(42) != -1) {
        this.setShowViewHouse();
        this.reductionModule()
      }
      if (arr.indexOf(43) != -1) {
        let elementIDs = this.ElementIDs
        this.isolateComponents(elementIDs)
      }
      if (arr.indexOf(44) != -1) {
        let md = this.modelData
        this.positioningComponentsHidden(md.eles)
        this.marker.hideAllItems()
        this.setMarkerShow([md.markids])
      }
      if (arr.indexOf(88) != -1) {
        this.showComponentsByIdAndHighLightAndColor(this.ElementIDs, this.highLightElementIDs)
      }
      if (arr.indexOf(89) != -1) {
        this.highLightByElementIds(this.ElementIDs, this.highLightElementIDs)
      }
      // if(arr.indexOf(100) != -1){
      //   this.setCameraStatus()
      // }
    },
    /* eslint-disable */
    //定位到默认模型视点快照
    setCameraStatus() {
      console.log('定位到默认模型视点快照')
      //设置模型背景，但无法在加载时改变背景色
      this.viewer3D.setBackgroundColor(new Glodon.Web.Graphics.Color(255, 255, 255, 0))
      // this.viewer3D.setCameraStatus(JSON.parse(this.defaultViewer)) //定位到默认模型视点快照
    },
    // 定位构件(隔离-->高亮-->缩放视点)
    _positioningComponents(ElementIDs) {
      // console.log(ElementIDs)
      if (ElementIDs.length === 0) {
        console.log('%c ****恢复****', 'color:red')
        this.viewer3D.clearIsolation() //清除隔离
        // this.viewer3D.opaqueAllComponents()//取消所有构件半透明
        // this.viewer3D.clearOverrideColorComponents() // 恢复全部构件的原来颜色
        this.viewer3D.render()
        this.setCameraStatus()
      }
      this.viewer3D.setSelectedComponentsById(ElementIDs) //根据构件ID设置多个构件为选中集合
      this.viewer3D.zoomToSelectedComponents() //缩放到加入选中集合的构件
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
     * 定位到指定模型视点快照  28
     */
    setCamera(Viewer) {
      console.log('定位到指定模型视点快照', Viewer)
      //设置模型背景，但无法在加载时改变背景色
      //this.viewer3D.setBackgroundColor(new Glodon.Web.Graphics.Color(255, 255, 255, 0))
      this.viewer3D.setCameraStatus(JSON.parse(Viewer)) //定位到默认模型视点快照
      this.viewer3D.render()
    },
    /**
     * 定位到默认模型视点快照 且 显示构件 恢复显示全部构件 29
     * @param {*} ElementIDs 
     */
    setCameraStatusAndElementIDs(ElementIDs) {
      this.viewer3D.clearIsolation() //清除隔离
      this.viewer3D.clearArea() //清除空间
      this.viewer3D.setSelectedComponentsById(ElementIDs) //根据构件ID设置多个构件为选中集合
      this.viewer3D.zoomToSelectedComponents() //缩放到加入选中集合的构件
      this.viewer3D.removeSelectedId(ElementIDs) // 根据构件ID从选中集合中删除构件
      this.viewer3D.showExclusiveComponentsByObjectData([{
        'id': ''
      }]) //全隐藏
      this.viewer3D.showComponentsById(ElementIDs) //根据构件ID显示构件
      this.viewer3D.setComponentsOpacity(ElementIDs, Glodon.Bimface.Viewer.OpacityOption.Opaque) //根据构件ID设置构件半透明，或取消构件半透明   Translucent:半透明,Opaque:取消半透明  
      this.viewer3D.restoreComponentsColorById(ElementIDs) //根据构件ID恢复构件的原来颜色
      this.viewer3D.clearOverrideColorComponents() //恢复全部构件的原来颜色
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
    positioningComponentsHidden(ElementIDs) {
      // if ( ElementIDs.length != 0){// 如果模型已加载完成
      console.log('模型加载完成之后定位构件且其它组件隐藏', ElementIDs)
      this.viewer3D.clearIsolation() //清除隔离
      this.viewer3D.clearArea() //清除空间
      // this.viewer3D.setSelectedComponentsById(ElementIDs)//根据构件ID设置多个构件为选中集合
      // this.viewer3D.zoomToSelectedComponents()//缩放到加入选中集合的构件
      this.viewer3D.showExclusiveComponentsByObjectData([{
        'id': ''
      }]) //全隐藏
      this.viewer3D.showComponentsById(ElementIDs)
      this.viewer3D.setComponentsOpacity(ElementIDs, Glodon.Bimface.Viewer.OpacityOption.Opaque) //根据构件ID设置构件半透明，或取消构件半透明   Translucent:半透明,Opaque:取消半透明  
      this.viewer3D.restoreComponentsColorById(ElementIDs) //根据构件ID恢复构件的原来颜色
      this.viewer3D.clearOverrideColorComponents() //恢复全部构件的原来颜色
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
    showComponentsById(ElementIDs) {
      console.log('根据构件ID显示构件')
      console.log(ElementIDs, this.viewer3D)
      this.viewer3D.clearIsolation() //清除隔离
      this.viewer3D.clearArea() //清除空间
      // 必须选调这一步， 根据筛选条件显示构件，其余全部隐藏  ，把条件写成空或者随便写一个不符合的条件，剩下的都会被影藏
      // this.viewer3D.showExclusiveComponentsByObjectData([{'id':''}]) //全隐藏
      // this.viewer3D.showComponentsById(ElementIDs)
      // this.viewer3D.render()

      // this.viewer3D.showExclusiveComponentsByObjectData([{ 'id': '' }])
      // this.viewer3D.restoreDefault()
      // this.viewer3D.showComponentsById(ElementIDs)
      // // this.viewer3D.overrideComponentsColorById(highLightElementIDs, new Glodon.Web.Graphics.Color(65, 105, 225, 1))//作色某个构件（高亮）
      this.viewer3D.setSelectedComponentsById(ElementIDs) //根据构件ID设置多个构件为选中集合
      this.viewer3D.zoomToSelectedComponents() //缩放到加入选中集合的构件
      this.viewer3D.removeSelectedId(ElementIDs)
      this.viewer3D.showExclusiveComponentsByObjectData([{
        'id': ''
      }]) //全隐藏
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
      this.viewer3D.clearIsolation() //清除隔离
      this.viewer3D.clearArea() //清除空间
      // 必须选调这一步， 根据筛选条件显示构件，其余全部隐藏  ，把条件写成空或者随便写一个不符合的条件，剩下的都会被影藏
      this.viewer3D.showExclusiveComponentsByObjectData([{
        'id': ''
      }])
      this.viewer3D.showComponentsById(ElementIDs)
      this.viewer3D.clearOverrideColorComponents() //根据筛选条件恢复构件的原来颜色
      this.viewer3D.overrideComponentsColorById(highLightElementIDs, new Glodon.Web.Graphics.Color(65, 105, 225, 1)) //作色某个构件（高亮）
      this.viewer3D.setSelectedComponentsById(highLightElementIDs) //根据构件ID设置多个构件为选中集合
      this.viewer3D.zoomToSelectedComponents() //缩放到加入选中集合的构件
      //去模型背景色
      this.viewer3D.setBackgroundColor(new Glodon.Web.Graphics.Color(255, 255, 255, 0))
      this.viewer3D.render()
    },
    /** 
     * 模型加载完成之后 根据构件ID集显示构件 及 高亮某个构件且其它构件半隐藏  函数序号：33
     * ElementIDs：构件ID数组，可传多个
     */
    positioningComponentsMakeOthers(ElementIDs, highLightElementIDs) {
      if (ElementIDs.length != 0) { // 如果模型已加载完成
        console.log('模型加载完成之后 根据构件ID集显示构件 及 高亮某个构件且其它构件半隐藏')
        // 必须选调这一步， 根据筛选条件显示构件，其余全部隐藏  ，把条件写成空或者随便写一个不符合的条件，剩下的都会被影藏
        this.viewer3D.showExclusiveComponentsByObjectData([{
          'id': ''
        }])
        this.viewer3D.showComponentsById(ElementIDs)
        this.viewer3D.clearOverrideColorComponents() //根据筛选条件恢复构件的原来颜色
        this.viewer3D.setSelectedComponentsById(ElementIDs) //根据构件ID设置多个构件为选中集合
        this.viewer3D.zoomToSelectedComponents() //缩放到加入选中集合的构件
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
    showAllComponentss() {
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
      this.viewer3D.createSnapshotAsync(new Glodon.Web.Graphics.Color(255, 255, 255, 0), e => {
        sessionStorage.setItem('e', e)
      })
      sessionStorage.setItem('Viewer', Viewer)
    },

    /**
     * 获取当前模型的浏览状态，用于保存后恢复模型状态 36
     */

    getCurrentStatee() {
      console.log('获取当前模型的浏览状态 36')
      let state = this.viewer3D.getCurrentState()
      let stateStr = JSON.stringify(state)
      console.log(stateStr)
      sessionStorage.setItem('stateStr', stateStr)
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

      // 恢复默认显示，包括着色、选择、隔离、半透明、空间等
      this.viewer3D.restoreDefault()
      if (highLightElementIDs.length != 0) {
        // 根据构件ID设置多个构件为选中集合
        // this.viewer3D.setSelectedComponentsById(highLightElementIDs)
        // 根据构件ID隔离构件，其他全部隐藏或半透明
        this.viewer3D.isolateComponentsById(highLightElementIDs, Glodon.Bimface.Viewer.IsolateOption.MakeOthersTranslucent)
        // 设置被隔离构件的颜色
        this.viewer3D.setIsolatedComponentColor(new Glodon.Web.Graphics.Color(0, 0, 0, 1))
        // this.viewer3D.isolateComponentsById(highLightElementIDs, Glodon.Bimface.Viewer.IsolateOption.HideOthers)
        // this.viewer3D.setCameraStatus(JSON.parse(this.dt)) //定位到默认模型视点快照
        // 去模型背景色
        this.viewer3D.setBackgroundColor(new Glodon.Web.Graphics.Color(255, 255, 255, 0))
      }
      this.viewer3D.render()
    },
    /**
     * @name 设定三维标签  27
     * @param {Object} positions 标签对象
     * @msg 标签对象包括4个属性：imgTag（标签图标）、position（标签坐标）、markerID（标签ID）、tooltips（标签提示内容）
     */
    set3DMarker(positions) {
      this.viewer3D.restoreDefault() // 恢复默认显示，包括着色、选择、隔离、半透明、空间等
      // this.marker.hideAllItems()  //隐藏所有标签
      this.marker.clear() //清空所有三维标签
      let marker3dConfig = new Glodon.Bimface.Plugins.Marker3D.Marker3DConfig();
      let marker3ds = []
      console.log("=====27====", positions)
      for (let i = 0; i < positions.length; i++) {
        marker3dConfig.src = positions[i].imgTag;
        marker3dConfig.worldPosition = positions[i].position;
        marker3dConfig.id = positions[i].markerID;
        marker3dConfig.tooltip = positions[i].tooltips; //三维标签的提示内容
        marker3ds.push(new Glodon.Bimface.Plugins.Marker3D.Marker3D(marker3dConfig))
      }
      //  marker3dConfig.src = "http://static.bimface.com/resources/3DMarker/warner/warner_red.png";
      //  marker3dConfig.worldPosition = {"x":4899.36122482847,"y":23129.075092002924,"z":23224.95866207885};
      // //三维标签的提示
      //  marker3dConfig.tooltip = "this is 3DMarker5.";
      //  var marker3d = new Glodon.Bimface.Plugins.Marker3D.Marker3D(marker3dConfig);
      //  marker3d.onClick(function(item){
      //  //获取点击图片的postion
      //  var m=item.position;
      //  //自己设置一个boundingbox的对象
      //  var num=1.1; 
      //  var max=m.x*num;
      //  var may=m.y*num;
      //  var maz=m.z*num;
      //  var mix=m.x/num;
      //  var miy=m.y/num;
      //  var miz=m.z/num;
      //  var maxp=new Object();
      //  maxp={x:max,y:may,z:maz};
      //  var minp=new Object();
      //  minp={x:mix,y:miy,z:miz};
      //  var boundingbox=new Object();
      //  boundingbox={max:maxp,min:minp};
      //  //缩放到该boundingbox
      //  viewer3D.zoomToBoundingBox(boundingbox);
      //  })
      this.marker.addItems(marker3ds);
      this.viewer3D.render();
    },
    /**
     * @name 根据ID隐藏标签 37
     * @param {Array} ids 标签的ID集合
     */
    setMarkerHide(ids) {
      // console.log("=====getAllItems=======", this.marker.getAllItems())
      this.marker.hideItemsById(ids)
      this.viewer3D.render();
    },
    /**
     * @name 根据ID显示标签 38
     * @param {Array} ids 标签的ID集合
     */
    setMarkerShow(ids) {
      // console.log("=====getAllItems=======", this.marker.getAllItems())
      // this.marker.clear() //清空所有三维标签
      this.marker.showItemsById(ids)
      this.viewer3D.render();
    },
    /**
     * 
     * @name 设置隐藏viewerHouse 39
     */
    setHideViewHouse() {
      this.marker.clear() //清空所有三维标签
      this.viewer3D.hideViewHouse();
    },
    /**
     * 
     * @name 设置显示viewerHouse 42
     */
    setShowViewHouse() {
      // debugger
      // console.log(this.viewer3D)
      this.viewer3D.showViewHouse();
    },

    /**
     * 根据构件ID显示构件且高亮某个构件并给高亮的构件赋色  函数序号：88
     * @param {*} ElementIDs
     */
    showComponentsByIdAndHighLightAndColor(ElementIDs, highLightElementIDs) {
      // highLightElementIDs = highLightElementIDs.length > 0 ? highLightElementIDs : []
      this.viewer3D.restoreDefault()
      if (highLightElementIDs.length > 0) {
        let hElement = highLightElementIDs[0]
        // 隐藏所有标签
        this.marker.hideAllItems()
        // 
        this.viewer3D.hideAllComponents()
        // 根据构件ID显示构件
        this.viewer3D.showComponentsById(ElementIDs)
        // 根据构件ID设置构件为半透明
        // this.viewer3D.transparentComponentsById(highLightElementIDs[0].ElementList)
        // 根据构件ID设置多个构件为选中集合
        // 选中集合会给构件着默认颜色
        // this.viewer3D.setSelectedComponentsById(hElement.ElementList)
        // 缩放到加入选中集合的构件
        // this.viewer3D.zoomToSelectedComponents()
        // 根据构件ID隔离构件，其他全部隐藏或半透明
        // HideOthers: 隐藏其他的构件
        // MakeOthersTranslucent: 半透明其他的构件
        let makeOthersTranslucent = Glodon.Bimface.Viewer.IsolateOption.MakeOthersTranslucent
        let color = new Glodon.Web.Graphics.Color(hElement.colorCode)
        // 判断是否开启选中状态构件高亮颜色
        if (hElement.isShow) {
          // 根据构件id改变构件的颜色
          this.viewer3D.overrideComponentsColorById(hElement.ElementList, color)
          // 根据id隔离构件
          this.viewer3D.isolateComponentsById(hElement.ElementList, makeOthersTranslucent)
        } else {
          // 根据构件ID恢复构件的原来颜色
          this.viewer3D.restoreComponentsColorById(hElement.ElementList)
          // 把构件从选择集中移除
          this.viewer3D.removeSelectedId(hElement.ElementList)
          // 清楚隔离
          this.viewer3D.clearIsolation()
        }
      }
      // 渲染模型
      this.viewer3D.render()
    },
    /**
     * 根据构件ID显示构件且高亮某个构件并给高亮的构件赋色  函数序号：89
     * @param {*} ElementIDs
     */
    highLightByElementIds(ElementIDs, highLightElementIDs) {
      let makeOthersTranslucent = Glodon.Bimface.Viewer.IsolateOption.MakeOthersTranslucent
      if (highLightElementIDs.length < 1) {
        // 恢复默认显示，包括着色、选择、隔离、半透明、空间等
        this.viewer3D.restoreDefault()
        // 根据构件ID设置多个构件为选中集合
        this.viewer3D.setSelectedComponentsById(ElementIDs)
        // 缩放到加入选中集合的构件
        this.viewer3D.zoomToSelectedComponents()
      } else {
        // let color = new Glodon.Web.Graphics.Color('#11dab7', .8)
        // 根据构件id改变构件的颜色
        // this.viewer3D.overrideComponentsColorById(highLightElementIDs, color)
        // 根据id隔离构件
        this.viewer3D.isolateComponentsById(highLightElementIDs, makeOthersTranslucent)
        // 根据构件ID设置多个构件为选中集合
        // 选中集合会给构件着默认颜色
        this.viewer3D.setSelectedComponentsById(highLightElementIDs)
        // 缩放到加入选中集合的构件
        this.viewer3D.zoomToSelectedComponents()
      }
      this.viewer3D.render()
    },
    /**
     * @name 根据构件ID给构件着色 40
     * @param {Object} components 构件对象：属性包括【ElementID：构件ID和ColorName：颜色】
     */
    setComponentColor(components) {
      this.reductionModule();
      let makeOthersTranslucent = Glodon.Bimface.Viewer.IsolateOption.MakeOthersTranslucent

      // this.viewer3D.isolateComponentsById(components.ElementList, makeOthersTranslucent)
      // let color = new Glodon.Web.Graphics.Color(components.colorCode, 0.5);
      // this.viewer3D.overrideComponentsColorById(components.ElementList, color);

      components.forEach(item => {
        if (item.colorCode != null) {
          this.viewer3D.isolateComponentsById(item.ElementList, makeOthersTranslucent)
          let color = new Glodon.Web.Graphics.Color(item.colorCode, 0.5);
          this.viewer3D.overrideComponentsColorById(item.ElementList, color);
        }
      })
      this.viewer3D.render();
    },
    /**
     * @name 还原模型到初始化状态 41
     */
    reductionModule() {
      this.viewer3D.restoreDefault() // 恢复默认显示，包括着色、选择、隔离、半透明、空间等
      this.marker.clear() //清空所有三维标签
    },
    /**
     * @name 根据构件ID隔离构件，其他全部隐藏或半透明；设置被隔离构件的颜色 43
     * @param {Array} elementIDs 构件ID集合
     */
    isolateComponents(elementIDs) {
      // this.viewer3D.restoreDefault()
      let makeOthersTranslucent = Glodon.Bimface.Viewer.IsolateOption.MakeOthersTranslucent;
      // 根据构件ID隔离构件，其他全部隐藏或半透明
      this.viewer3D.isolateComponentsById(elementIDs, makeOthersTranslucent);
      // 设置被隔离构件的颜色
      this.viewer3D.setIsolatedComponentColor(new Glodon.Web.Graphics.Color(222, 22, 22, 1))
      this.viewer3D.render();
    }
  }
}