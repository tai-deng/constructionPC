/**
 * 省市区下拉菜单
 */
import {list} from '@/utils/siteList.js'

export default {
  data(){
    return {
      
    }
  },
  computed:{
    
    
    // return
  },
 
  methods:{
    /**
     * 根据省ID查城市列表
     * @param {省ID} provinceID 
     */
    getCityList(provinceID){
      return list.filter(i=>{
         return provinceID==i[4]
      })
    },
    /**
     * 根据城市ID查区县列表
     * @param {省ID} cityID 
     */
    getTwonList(cityID){
      return list.filter(i=>{
         return cityID==i[5]
      })
    },
  }
}
