<!-- modelStyle -->
<template>
  <div class="container-cycle">
    <div class="cycle_left_main">
      <ul>
        <li :class="currentList==2?'cycle_left_main_li':''" @click="jumpList(2)">
          三算对比
          <span :class="currentList==2?'cycle_left_main_span':''"></span>
        </li>
        <li :class="currentList==1?'cycle_left_main_li':''" @click="jumpList(1)">
          进度模型
          <span :class="currentList==1?'cycle_left_main_span':''"></span>
        </li>

      </ul>
    </div>

    <!-- 进度模型  -->
    <div v-if="currentList==1" class="cycle_right_main">
      <colorsetting :textItem="itemList[1]" :classType="currentList" :dataList="dataList" @SubColorStates="SubColorStates" style="height: 538px" />
    </div>

    <!-- 三算对比 -->
    <div v-if="currentList==2" class="cycle_right_main">
      <colorsetting :textItem="itemList[0]" :classType="currentList" />
    </div>
  </div>
</template>

<script type='textecmascript-6'>
  import colorsetting from './components/colorsetting'
  import { GetStatesColorList, TaskStatesList, SubColorStates } from '@/api/api.js'
  export default {
    data () {
      return {
        projectId: '',
        currentList: 1, //currentList为1-三算对比，为2-进度模型
        itemList: ['偏差率(%)', '时间状态'],
        dataList: [],
        addJdmxState: false  //是否新增进度模型数据
      }
    },
    components: {
      colorsetting
    },
    created () {
      this.projectId = localStorage.getItem('projectid')
      this.GetStatesColorList()
      // this.getInfo(); //周期管理
    },
    methods: {
      //点击切换页面（周期消息/颜色管理）
      jumpList (n) {
        this.currentList = n
      },
      /** 
       * 获取颜色列表
       * @param {String} ProjectID 项目编号
       */
      GetStatesColorList () {
        let param = { ProjectID: this.projectId }
        GetStatesColorList(param).then(data => {
          if (data.Count === 0) {
            this.TaskStatesList()
            this.addJdmxState = true;
          } else {
            let arr = []
            this.addJdmxState = false;
            data.Detiel.forEach(item => {
              arr.push({
                id: item.ID,
                States: item.States,
                text: item.StatesInfo,
                colorCode: item.ColorName
              })
            })
            this.dataList = arr
          }
        })
      },
      /**
       * 获取任务状态列表
       */
      TaskStatesList () {
        TaskStatesList().then(data => {
          this.dataList = data.Detiel
        })
      },
      /**
       * 保存颜色状态
       * @param {String} ProjectID
       * @param {String} States     1.未开始2.已完成3.提前开始4.提前完成5.正常开始6.正常完成7.延迟开始8.延迟完成
       * @param {String} ColorName  颜色值
       */
      SubColorStates (list) {
        if (sessionStorage.getItem('menuType') !== "2") {
          this.$message({
            type: "warning",
            message: "您没有权限操作",
            center: "true"
          });
          return;
        }
        // this.load()
        let param = []
        list.forEach(item => {
          param.push({
            ProjectID: this.projectId,
            ID: this.addJdmxState ? "" : item.id,
            States: item.States == null ? item.id : item.States,
            StatesInfo: item.text,
            ColorName: item.colorCode
          })
        })
        
        SubColorStates(param).then(data => {
          if (data.StatusCode == "200") {
            this.$message({ type: "success", message: data.Message, center: "true" })
          } else {
            this.$message({ type: "error", message: data.Message, center: "true" })
          }
          // this.$toast.clear()
        })
      }
    }
  };
</script>
<style lang='stylus' scoped rel='stylesheet/stylus'>
  .container-cycle {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    font-size: 16px;

    .cycle_left_main {
      width: 15%;
      height: 100%;
      background-color: #ffffff;
      float: left;
      border-right: 1px solid #F5F6FA;
      box-sizing: border-box;
    }

    .cycle_left_main li {
      width: 100%;
      text-align: center;
      height: 48px;
      line-height: 48px;
    }

    .cycle_left_main_li {
      background-color: #4775CA;
      color: #ffffff;
    }

    .cycle_left_main span {
      display: inline-block;
      width: 0;
      height: 0;
      border-width: 13px 13px 13px 0;
      border-style: solid;
      border-color: transparent;
      float: right;
      margin-top: 11px;
    }

    .cycle_left_main_li .cycle_left_main_span {
      border-color: transparent #F5F6FA transparent transparent;
    }

    .cycle_right_main {
      width: 85%;
      height: 100%;
      float: left;
      background-color: #F5F6FA;
    }

    // .cycle_right_body1 {
    // width: 54%;
    // margin-left: 23%;
    // margin-top: 200px;
    // // height: 426px;
    // box-shadow: 0px 1px 7px 0px rgba(216, 223, 238, 0.5);
    // background-color: #ffffff;
    // }
    // .cycle_right_align {
    // text-align: center;
    // }

    // .cycle_right_title {
    // color: #ffffff;
    // background-color: #435089;
    // font-size: 18px;
    // font-family: SourceHanSansCN-Regular;
    // font-weight: 400;
    // width: 100%;
    // height: 40px;
    // line-height: 40px;
    // }
    .cycle_right_align_input {
      width: 120px;
    }

    .cycle_right_body_foot {
      text-align: center;
    }

    .cycle_save_btn {
      background: rgba(71, 117, 202, 1);
      box-shadow: 0px 1px 7px 0px rgba(161, 192, 250, 0.75);
      border-radius: 4px;
      border: 0;
      color: #ffffff;
      padding: 10px 84px;
      font-size: 16px;
    }

    .cycle_right_img {
      width: 30px;
      height: 30px;
      border: 1px solid #ffffff;
      margin-top: 5px;
      border-radius: 4px;
      cursor: pointer;
      float: left;
    }

    .cycle_right_align_change {
      padding-left: 50px;
    }

    .cycle_right_body_color {
      width: 100%;
      height: 460px;
      overflow-y: auto;
      overflow-x: hidden;
    }

    .cycle_right_body_color li {
      width: 100%;
      height: 50px;
      line-height: 50px;
      font-size: 16px;
      font-weight: 400;
      border-bottom: 1px solid #F0F0F0;
      overflow: hidden;
    }

    .cycle_right_body2 {
      width: 60%;
      margin-left: 20%;
      margin-top: 160px;
      height: 600px;
      box-shadow: 0px 1px 7px 0px rgba(216, 223, 238, 0.5);
      background-color: #ffffff;
    }

    .cycle_right_message {
      width: 100%;
      height: 480px;
      border-bottom: 1px solid red;
    }

    .cycle_right_main_list {
      width: 100%;
      height: 160px;
      box-sizing: border-box;
      padding-top: 20px;
      padding-left: 60px;
    }

    .cycle_right_main_list li {
      display: inline-block;
      background-color: #ffffff;
      padding: 12px 25px;
      font-size: 18px;
      font-family: SourceHanSansCN-Medium;
      font-weight: 500;
      color: rgba(153, 153, 153, 1);
      cursor: pointer;
    }

    .cycle_right_main_list .cycle_right_main_li {
      color: #ffffff;
      background-color: #4775CA;
    }

    .cycle_right_main_div {
      width: 54%;
      margin-left: 23%;
      height: 600px;
      box-shadow: 0px 1px 7px 0px rgba(216, 223, 238, 0.5);
      background-color: #ffffff;
    }

    .cycle_right_form {
      width: 100%;
      height: 460px;
      padding-top: 50px;
      box-sizing: border-box;
      font-size: 18px;
      font-family: SourceHanSansCN-Medium;
      font-weight: 500;
    }

    .cycle_right_center {
      text-align: right;
      padding-right: 15px;
      line-height: 40px;
    }

    .cycle_right_red {
      color: red;
      padding-right: 5px;
    }

    .cycle_right_form_margin {
      margin-top: 30px;
    }

    .cycle_right_align_del {
      display: inline-block;
      width: 26px;
      height: 26px;
      font-size: 20px;
      text-align: center;
      border: 1px solid #7D86AD;
      color: #7D86AD;
      border-radius: 50%;
      line-height: 26px;
      cursor: pointer;
      position: relative;
      top: -14px;
    }
  }
</style>
