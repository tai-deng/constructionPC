
// vuex
//接口
import { infaces, infaces2, infaces3 } from "../modules/interfaces.js";
import {
  GetEngingTypeList,
  GetEngingConfigByTypeId,
  GetProvinceList,
  GetCityList,
  GetCountryList,
  SubModelEngingConfig,
  GetDefaultModelId
} from "@/api/api.js";
export default{
    methods: {
        /**
         * 获取默认模型ID
         * 根据是否有默认模型ID判断建筑单体与栋号是否可以编辑
         */
        async getDefaultModelId(ProjectID){
            let defaultModelId = await infaces3(this, GetDefaultModelId, {ProjectID});
            this.isHasDefaultModelId = defaultModelId.Result?true:false
            console.log("有默认模型ID",defaultModelId);
        },
        /**
         * 获取信息配置数据
         * @param {*} ProjectID 
         */
        getEngingConfigByTypeId(ProjectID){
          return new Promise(resolve=>{
            infaces(this, GetEngingConfigByTypeId, { ProjectID}).then(res=>{
                this.dataArr = res
                let data = res[0]
                if (this.dataArr.length){
                  this.formData.EngingTypeId = data.EngingTypeId;
                  this.formData.BuildMon = data.BuildMon;
                  this.tableData = data.StoriedBuildlList;
                  this.formData.Province = data.Province; //已选择的省份
                  this.formData.ProvinceId = data.ProvinceId; //已选择的省份
                  this.formData.City = data.City
                  this.formData.CityId = data.CityId
                  this.formData.Country = data.Country;
                  this.formData.CountryId = data.CountryId;
                  this.formData.Address = data.Address;
                }

                this.calculateTotalArea()
                
               if(data.City){
                  this.getMap(true, data.City);
                } else {
                  this.getMap(false, "");
                }
                resolve(res[0])
              })
          })

        }
    }
}