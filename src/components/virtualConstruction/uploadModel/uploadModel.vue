<template>
  <div class="main1">
    <div class="message_div" >
      <div class="message_title">
        <p>温馨提示</p>
      </div>
      <div class="message_body">
        <div class='message_light'>
          <img src="../../../assets/imgs/light_model.png" alt="">
        </div>
        <div class="message_text">
          <p>你可以上传BIM模型，进行BIM模型的多岗位协同管理，实现项目全方位精细化管理；</p>
          <p>你也可以跳过模型上传，进行工程项目流程管理，现场管理，报表管理等。</p>
        </div>
        <div class="message_foot">
          <el-button class='btn_passed' @click="skip">跳过</el-button>
          <el-button class='btn_upload' @click="jump()">上传模型</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script  type='textecmascript-6'>
// vuex
import {GetDefaultModelId } from '@/api/api.js'
export default {
  
  data() {
    return {};
  },
  created() {
    this.getAll();
  },
  methods: {

    jump() {
      this.$router.push({path: './components/allModel'})
    },
    /**
     * 点击跳过，跳转到信息配置
     */
    skip(){
      this.$router.push({path:'/nav/to/information'})
    },
    getAll(){//判断是否存在默认模型
        this.Request(GetDefaultModelId({projectId:localStorage.getItem('projectid')})).then(res=>{
            if(res.StatusCode=='200'){
              if(res.Result !=""){
                this.$router.push({path: './components/allModel'})
              }
            }else{
              console.log('报错')
            }
        })
    },
  }
}
</script>

<style  lang='stylus' scoped rel='stylesheet/stylus'>
.main1
  background-color #F5F6FA
  width 100%
  height 100%
  box-sizing border-box
  padding-top 98px

  .message_div
    background-color #fff
    color #fff
    border-radius 5px
    border 1px solid #fff
    height 680px
    width  1200px
    margin auto
   
  .message_title
    border-bottom 1px solid #4775CA
    text-align center
    background-color #4775CA
    font-size 18px
    line-height 50px

  .message_body
    padding-top 81px
    
    .message_light
      margin-left 563px
    
    .message_text
      padding-top 61px
      width 520px
      height 114px
      margin-left 340px
      font-size 20px
    
    p
      text-align center
      color #333333
      font-size 18px
      line-height 27px
      font-weight 500


  .message_foot
    margin-top 110px

    .btn_passed
      border 1px solid #999999
      margin-left 472px
      width 120px
      height 40px
      padding 12px 28px
      color #fff
      font-size 16px
      background-color #999999
      border-radius 6px

    .btn_upload
      margin-left 42px
      border-radius 6px
      background-color #4775CA
      color #fff
      width 120px
      font-size 16px
      height 40px
      padding 12px 28px
</style>
