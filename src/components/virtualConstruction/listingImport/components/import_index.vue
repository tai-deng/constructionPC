<!-- 清单导入首页index -->
<template>
  <div class="container-import-index">
    <div class="wrapper">
      <div class="top"></div>
      <div class="center">
        <header class="center-head">温馨提示</header>
        <div class="import-icon">
          <img src="@/assets/imgs/listingImport.png" alt>
        </div>
        <div class="content">
          <p>您可以选择导入施工图预算工程量清单或全费用清单与模型关联，进行项目成本控制；</p>
          <p>也可以通过模型自动提取工程量清单，进行项目成本控制。</p>
          <p>以下三种方案，只能选择其中一种进行配置。</p>
        </div>
        <div class="but">
          <el-button size="small" type="primary" @click="emitJump(0)">Plan1 施工图预算导入</el-button>
          <el-button size="small" type="primary" @click="emitJump(1)">Plan2 全费用清单导入</el-button>
          <el-button size="small" type="primary" @click="emitJump(2)">Plan3 构件清单生成</el-button>
        </div>
      </div>
    </div>
    <!-- 表单选择上传弹窗 -->
    <import-form
     v-if="isShowBuildingListSelect&&[0,1].indexOf(toPageNum)!=-1"
    @closeBuildingListSelect='closeBuildingListSelect'
    @jumpto='jumptos'
    ></import-form>
  </div>
</template>

<script type='textecmascript-6'>
import importForm from './import_form'
import {mapMutations} from 'vuex'
export default {
  data() {
    return {
      data: "清单导入首页",
      toPageNum: 0, //跳转到哪个页面 0 --plan1 , 2 --plan2 ,  3-- plan3
      isShowBuildingListSelect: false, //是否显示楼栋选择器蒙层弹窗。
    };
  },
  methods: {
    /**
     * 点击哪个按钮
     */
    async emitJump(id) {
      localStorage.setItem('isAdd',0) // 从入口进入上传文件，则为覆盖
      localStorage.setItem('plan',id) // 点击了哪个入口  0 --plan1 , 2 --plan2 ,  3-- plan3
      console.log(id);
      if(id==2){
        // 如果点击清单生成，直接跳转到与之相同的成功组件
       this.$emit("jump", 2, []);
       return
      }
      this.toPageNum = id;
      this.setPageNum(id)
      this.isShowBuildingListSelect = true;
    },
    /**
     * 关闭楼栋选择蒙层
     */
    closeBuildingListSelect() {
      this.isShowBuildingListSelect = false;
    },
    jumptos(toPageNum,detiel){
      console.log(toPageNum,detiel)
       this.$emit("jump", toPageNum, detiel); //关闭入口页面组件,并将解析出的xlsx数据返回父组件
    },
    ...mapMutations({
      setPageNum: "GET_TO_PAGE_NUM"
    }),
    
  },
  components:{
    importForm
  }
};
</script>
<style lang='stylus' scoped rel='stylesheet/stylus'>
@import '../../../../assets/stylus/variable.styl'

.container-import-index
  width 100%
  height 100%
  .wrapper
    width 100%
    height 100%
    .top
      width 100%
      height 100px
    .center
      box-sizing border-box
      width 1200px
      height 675px
      margin 0 auto
      background $color-default-background
      box-shadow 0px 3px 7px 0px rgba(216, 223, 238, 1)
      .center-head
        width 100%
        height 50px
        background-color $font-color-13
        text-align center
        color $font-color-03
        font-size $font-size-18
        font-family SourceHanSansCN-Normal
        font-weight 400
        line-height 50px
      .import-icon
        margin 0 auto
        width 76px
        height 136px
        margin-top 80px
        img
          height 76px
          width 76px
      .content
        height 120px
        p
          text-align center
          color $font-color-10
          font-size $font-size-18
          font-family SourceHanSansCN-Normal
          font-weight 400
          line-height 27px
      .but
        text-align center
        display flex
        width 650px
        margin 0 auto
        justify-content space-around
        .in-center
          margin 0 30px
  
</style>
<style>
.center .el-button--primary {
  background-color: #4775ca;
  border-color: #4775ca;
}
.center .el-button--primary span {
  font-size: 16px;
  font-family: SourceHanSansCN-Medium;
  font-weight: 500;
  color: rgba(255, 255, 255, 1);
  line-height: 24px;
}

</style>
