<!-- listingImport清单导入 -->
<template>
  <div class="container-listing-import">
    <div class="wrapper" v-if="loading">
      <!-- 入口 -->
      <import-index @jump="jumpPages" v-if="statePage==0"></import-index>
      <!-- 施工图预算导入页面 -->
      <import-construction
        v-if="statePage==1"
        :XlsxTableNamelist="XlsxTableNamelist"
        @back="back"
        @toSuccessPage="successPage"
      ></import-construction>
      <!-- 导入成功页面 -->
      <import-success v-if="statePage==2" @back="back" @jump="jumpPages"></import-success>
    </div>
  </div>
</template>

<script type='textecmascript-6'>
// 子组件
import importIndex from "./components/import_index";
import importConstruction from "./components/import_construction";
import importSuccess from "./components/import_success";
import { GenerateElementList ,GetCurrentListType} from "@/api/api.js";
export default {
  data() {
    return {
      statePage: 0, // 0: 入口  1：施工图预算导入页面  2：导入成功页面
      XlsxTableNamelist: [], //xlsx表解析结果数组
      loading:false,//加载中
    };
  },
  components: {
    importIndex,
    importConstruction,
    importSuccess
  },
  created() {
    //隐藏模型
      this.$store.commit('GET_MODEL_BOX',{
        isShowModel: false, //是否显示模型 true:显示模型，如果模型已加载，则显示  false:隐藏模型
        isLoadModel: true, //是否加载模型  true：加载模型，如果已经加载，不会重新加载，  false:卸载模型
      })
      this.getCurrentListType()
    // try {
    //   let sp = localStorage.getItem(statePage);
    //   if (sp) {
    //     console.log(sp);
    //     this.statePage = Number(sp);
    //     localStorage.setItem("statePage", Number(sp)); //
    //   }
    // } catch (error) {
    //   this.statePage = 0;
    //   localStorage.setItem("statePage", 0); //
    // }
  },
  /**
   * TODO
   */
  methods: {
    /**
     * 获取显示位置
     */
    getCurrentListType(){
      this.Request(GetCurrentListType({projectid:localStorage.getItem('projectid')})).then(res=>{
        console.log(res)
        this.loading = true
        switch(res.Result){
            case 0:
              console.log('0.未导入')
              localStorage.setItem("statePage", 0);
              this.statePage = 0;
              // localStorage.getItem('plan') //选择的是哪个入口
            break
            case 1:
              console.log('1.施工图')
              localStorage.setItem("statePage", 2);//定位到成功页面
              localStorage.setItem("plan", 0);//定位到施工图导入成功页面
              this.statePage = 2;
            break
            case 2:
              console.log('1.全费用清单')
              localStorage.setItem("statePage", 2);//定位到成功页面
              localStorage.setItem("plan", 1);//定位到施工图导入成功页面
              this.statePage = 2;
            break
            case 3:
              console.log('1.构件生成')
              localStorage.setItem("statePage", 2);//定位到成功页面
              localStorage.setItem("plan", 2);//定位到施工图导入成功页面
              this.statePage = 2;
            break
          }
      })
    },
    /**FIXME
     * 选择入口
     * statePage:入口
     *  0：表示在入口页面
     *  1：表示在施工图和全费用（共用同一组件）
     *  2：表示构件清单生成
     */
    jumpPages(id, XlsxTableNamelist) {
      console.log(id, XlsxTableNamelist);

      this.XlsxTableNamelist = XlsxTableNamelist; //下拉表菜单
      switch (id) {
        case 0:
          // 施工图
          this.statePage = 1;
          localStorage.setItem("statePage", 1);
          break;
        case 1:
          // 全费用清单页面与施工图导入为同一组件
          this.statePage = 1;
          localStorage.setItem("statePage", 1);
          break;
        case 2:
          /**
           * 生成构件清单
           * @param {*} ProjectId
           * @param {*} UserId
           */
          var ProjectId = localStorage.getItem("projectid"),
            UserId = Number(localStorage.getItem("userId"));
          // 构件清单生成  与成功导入页面为同一组件
          this.generateing();
          this.Request(GenerateElementList({ ProjectId, UserId })).then(res => {
            console.log(res);
            if (res.StatusCode === 200) {
              this.statePage = 2;
            } else {
              this.$message({
                type: "error",
                message: res.Message,
                center: "true"
              });
            }
            this.$toast.clear();
          });

          localStorage.setItem("statePage", 2);
          break;
      }
    },
    back() {
      this.statePage = 0;
      localStorage.setItem("statePage", 0);
    },
    /**
     * 打开导入成功页面
     */
    successPage() {
      this.statePage = 2;
    },
  }
};
</script>
<style lang='stylus' scoped rel='stylesheet/stylus'>
.container-listing-import
  width 100%
  height 100%
  background-color #F5F6FA
</style>