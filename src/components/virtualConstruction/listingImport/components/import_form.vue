<!-- 新增表单弹窗 -->
<template>
 <div class='container-import-form'>
 <div class="dialog">
      <div class="select-monomer">
        <header class="head-title">选择单体</header>
        <div class="selectd">
          <el-select v-model="Building" placeholder="请选择">
            <el-option
              v-for="item in BuildingList"
              :key="item.id"
              :label="item.text"
              :value="item.text"
            ></el-option>
          </el-select>
        </div>
        <p>*选择楼栋后上传xlsx表数据</p>
        <div class="buts">
          <el-button type="info" @click="close">取消</el-button>&nbsp;&nbsp;&nbsp;
          <!-- <el-button type="primary" @click="sub">确定</el-button> -->
          <el-upload
            action
            :http-request="uploadFileXLSX"
            :file-list="fileList"
            :show-file-list="false"
            style="display: inline-block;"
          >
            <el-button size="small" type="primary" v-if="Building">确定</el-button>
          </el-upload>
        </div>
      </div>
    </div>
 </div>
</template>

<script type='textecmascript-6'>
import readxlsx from "../modules/readXLSX.js";
import {getBuildings} from '../modules/interfaces.js'
export default {
    mixins: [readxlsx],
 data() {
   return {
      fileList: [], //上传的文件数组
      BuildingList: [], //楼栋集
      Building: "", //选择的楼栋
   }
 },
 created(){
     //获取楼栋列表
      let projectid = localStorage.getItem("projectid");
      getBuildings(this,projectid).then(res=>{
        this.BuildingList = res
      })
 },
 watch:{
   Building(d){
     console.log(d)
     // 选择单体，此缓存仅用于全费用清单获取后台缓存数据
     localStorage.setItem('Building',d)
   }
 },
 methods:{
     close(){
        this.$emit('closeBuildingListSelect')
     }
 }

}

</script>
<style lang='stylus' scoped rel='stylesheet/stylus'>
@import '../../../../assets/stylus/variable.styl'
.container-import-form
  width 100%
  height 100%
  .dialog
    position fixed
    top 0
    left 0
    width 100%
    height 100%
    background-color rgba(0, 0, 0, 0.6)
    z-index 999
    .select-monomer
      width 600px
      height 400px
      margin 0 auto
      margin-top 100px
      background-color $font-color-03
      p
        font-size $font-size-16
        color $font-color-04
        box-sizing border-box
        padding-left 100px
        padding-top 10px
      .head-title
        width 100%
        height 40px
        background-color $font-color-13
        color $font-color-03
        font-size $font-size-16
        line-height 40px
        text-align center
      .selectd
        width 100%
        margin-top 100px
      .buts
        text-align center
        margin-top 100px
</style>
<style>
.selectd .el-select {
  margin: 0 auto;
  display: block;
  width: 400px;
}
.buts .el-button--small {
  font-size: 18px;
  padding: 12px 20px;
}
</style>
