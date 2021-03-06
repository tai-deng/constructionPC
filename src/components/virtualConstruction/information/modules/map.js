/**
 * 百度地图
 */
export default {
  data(){
		return {
			map: {}, //百度地图实例
      isMapLoaded: false, //地图是否加载完成
      entry: "", //搜索的词条
      markerPoint:{},//标注点
		}
	},
	methods:{
		/**
     * 搜索框地图
     */
    mapSearch() {
      console.log("搜索地图");
      this.centerAndZoomByAddress(this.entry, this.map, 18);
    },
    /**方法 */
    /**
     * 百度地图控件
     * flag:是否已选择工程类型，已选择则不用获取当前位置
     * city:没有选择工程类型，则没有城市信息
     */
    async getMap(flag,city) {
      this.Geolocation()
      /* eslint-disable */
      this.map = new BMap.Map(this.$refs.allmap, { enableMapClick: false }); // 创建Map实例
      this.map.setDefaultCursor('default')
      // this.centerAndZoomByAddress("北京", map, 10);
      let _userCurrentLocation={}
      let geoc = new BMap.Geocoder()
      if(flag){
        //  //获取用户当前坐标
        // _userCurrentLocation = await this.getUserCurrentLocation(BMap, map);
        // 定位到城市
        await this.centerAndZoomByAddress(city, this.map, 18);
        // this.selectProvince(data.ProvinceId)//选择了省
        // this.selectCity(data.CityId)
        // this.selectCountry(data.CountryId)
      }else{
        //获取用户当前坐标
        _userCurrentLocation = await this.getUserCurrentLocation(BMap, this.map);
        this.addMarker(_userCurrentLocation.point) //初始化定位
        // 定位到城市
        this.centerAndZoomByAddress(_userCurrentLocation.address.city, this.map, 18);
        
      /**
       * 获取点击地址
       */
      // 逆地址解析 经纬度转地址
      
      console.log(_userCurrentLocation.point.lng,_userCurrentLocation.point.lat)
        let pt = _userCurrentLocation.point
        console.log(pt)
        // let pt = {lat:Number(_userCurrentLocation.latitude),lng:Number(_userCurrentLocation.longitude)}
        geoc.getLocation(pt,rs=>{
          console.log(rs)
          let acp = rs.addressComponents
          console.log(acp)
        this.formData.Province = acp.province
        // this.formData.City = acp.city
        // this.formData.Country = acp.district
        
        /**
         * 通过省名，市名，区名，获取省ID,市ID ，区ID
         */
        console.log(this.provinceList )
        //获取省ID
        let selectPro = this.provinceList.filter(i=>acp.province==i.text)
        // console.log(selectPro)
        this.selectProvince(Number(selectPro[0].id)).then(cityList=>{
          // console.log(cityList,acp.city)
          let cityMe = cityList.filter(city=>acp.city==city.text)
          this.formData.City = acp.city
          this.selectCity(Number(cityMe[0].id)).then(countryList=>{
             console.log(countryList)
             let conul = countryList.filter(country=>acp.district==country.text)
             console.log(conul)
             this.formData.Country = acp.district
             this.selectCountry(Number(conul[0].id))
             this.formData.Address = acp.province+acp.city+acp.district+acp.street+acp.streetNumber
          })
        })

        })
      }
      /**
       * 点击地图
       */
      this.map.addEventListener('click',e=>{
        console.log(e.point.lng,e.point.lat)
        let pt = e.point
        this.addMarker(e.point)//添加标注点
        geoc.getLocation(pt,rs=>{
          console.log(rs)
          let acp = rs.addressComponents
          console.log(acp)
          this.formData.Province = acp.province
          this.formData.City = acp.city
          this.formData.Country = acp.district
          this.formData.Address = acp.province+acp.city+acp.district+acp.street+acp.streetNumber
        })
      })
      this.map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放 //map.setMapStyle({style:'midnight'});//地图风格
      console.log(this.map.getCenter());

      // 定义自动完成类（搜索下拉提示地址框）
      let ac = new BMap.Autocomplete({
        input: "input-entry",
        location: "中国"
      });
      /**
       * 获取搜索下拉菜单提示结果
       */
      ac.addEventListener("onconfirm", e => {
        console.log(e.item);
        this.entry =
          e.item.value.district + e.item.value.city + e.item.value.business;
        this.centerAndZoomByAddress(this.entry, this.map, 18);
      });
      
    },
    /**
     * 定义搜索类
     * map,地图实例
     * entry：搜索词条
     */
    searchControl(map, entry) {
      new BMap.LocalSearch(map, {
        renderOptions: { map }
      }).search(entry);
    },
    /**
     * H5方式获取定位点
     */
    Geolocation(){
      console.log(navigator)
      // if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(e=>{
          console.log(e)
        },r=>{
          console.log(r)
        })
      // }
    },
   
    /**
     * 在点击位置添加标注点
     * @param {坐标} point 
     */
  addMarker(point){

    console.log(this.markerPoint)
    this.map.clearOverlays()
    this.markerPoint = point
    // 设置不同点的背景图
    var myIcon=new BMap.Icon(require('./2.png') ,new BMap.Size(23,30),{  
      anchor: new BMap.Size(10, 30)  
      });
    var marker = new BMap.Marker(point);
    marker.setIcon(myIcon);
    marker.setOffset(20,200)
    this.map.addOverlay(marker);
    // marker.setShadow(none)
  },

    /**
     * 定位 到省市区
     * address：省市区
     * map:地图实例
     * zoom：(number)  9：定位到省 10:定位到城市 12~13：定位到区、县
     */
    centerAndZoomByAddress(address, map, zoom) {
      map.centerAndZoom(address, zoom);
      this.isMapLoaded = true; //地图加载完成
		},
		/**
     * 获取用户当前位置
     * BMap:百度地图实例
     */
    async getUserCurrentLocation(BMap, map) {
      let geolocation = new BMap.Geolocation(); // 返回用户当前的位置。此方法利用浏览器的geolocation接口获取用户当前位置，不支持的浏览器将无法获取。
      return new Promise((resolve, reject) => {
        geolocation.getCurrentPosition(location => {
          console.log(location);
          // this.isMapLoaded = true; //地图加载完成
          switch (geolocation.getStatus()) {
            case BMAP_STATUS_SUCCESS: //检索成功。对应数值“0”
              resolve(location);
              break;
            case BMAP_STATUS_CITY_LIST:
              console.log("城市列表。对应数值“1”");
              reject(null);
              break;
            //预留异常处理
            case BMAP_STATUS_UNKNOWN_LOCATION:
              console.log("位置结果未知。对应数值“2”");
              reject(null);
              break;
            case BMAP_STATUS_UNKNOWN_ROUTE:
              console.log("导航结果未知。对应数值“3”");
              reject(null);
              break;
            case BMAP_STATUS_INVALID_KEY:
              console.log("非法密钥。对应数值“4”");
              reject(null);
              break;
            case BMAP_STATUS_INVALID_REQUEST:
              console.log("非法请求。对应数值“5”");
              reject(null);
              break;
            case BMAP_STATUS_PERMISSION_DENIED:
              console.log("没有权限。对应数值“6”");
              reject(null);
              break;
            case BMAP_STATUS_SERVICE_UNAVAILABLE:
              console.log("服务不可用。对应数值“7”");
              reject(null);
              break;
            case BMAP_STATUS_TIMEOUT:
              console.log("超时。对应数值“8”");
              reject(null);
              break;
          }
        });
      });
    }
	}
}