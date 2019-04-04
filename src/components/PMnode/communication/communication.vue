<!-- communication沟通管理 -->
<template>
  <div class="container-communication">
    <div class="wrapper">
      <el-row>
        <el-col :span="12">
          <div class="grid-content bg-purple">
            <div class="container-cost-left">
              <el-button @click="communication()">发起沟通</el-button>
              <!-- 模型box -->
              <div class="model-container">
                <div ref="modelContainer" class="model-container"></div>
              </div>
            </div>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="grid-content bg-purple-light">
            <div class="container-cost-right">
              <div class="container-cost-right">
                <el-table
                  ref="singleTable"
                  :data="tableData"
                  @row-click="goToDetail"
                  highlight-current-row
                  style="width: 100%"
                >
                  <el-table-column property="index" label="序号" width="50">
                    <template slot-scope="scope">
                      <div :class="scope.row.class">{{ scope.row.index }}</div>
                    </template>
                  </el-table-column>
                  <el-table-column property="type" label="类型"></el-table-column>
                  <el-table-column property="name" label="主题"></el-table-column>
                  <el-table-column property="problemType" label="发起时间"></el-table-column>
                  <el-table-column property="state" label="状态"></el-table-column>
                  <el-table-column property="location" label="定位">
                    <template slot-scope="scope">
                      <img src="../../../assets/imgs/detail.png" alt width="16" @click="view(scope.row)" height="16">
                    </template>
                  </el-table-column>
                </el-table>
              </div>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script type='textecmascript-6'>
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      data: "communication沟通管理",
      formInline: {
        user: "",
        region: ""
      },
      tableData: [
        {
          index: "1",
          type: "工程洽商",
          name: "地下室隐秘工程建设",
          problemType: "2019.01.01",
          state: "待设计确认",
          location: "图标"
        },
        {
          index: "2",
          type: "工程洽商",
          name: "地下室隐秘工程建设",
          problemType: "2019.01.01",
          state: "待设计确认",
          location: "图标"
        },
        {
          index: "3",
          type: "工程洽商",
          name: "地下室隐秘工程建设",
          problemType: "2019.01.01",
          state: "待设计确认",
          location: "图标"
        },
        {
          index: "4",
          type: "工程洽商",
          name: "地下室隐秘工程建设",
          problemType: "2019.01.01",
          state: "待设计确认",
          location: "图标"
        },
        {
          index: "5",
          type: "技术讨论",
          name: "地下室隐秘工程建设",
          problemType: "2019.01.01",
          state: "待设计确认",
          location: "图标"
        },
        {
          index: "6",
          type: "技术讨论",
          name: "地下室隐秘工程建设",
          problemType: "2019.01.01",
          state: "待设计确认",
          location: "图标"
        },
        {
          index: "7",
          type: "工程洽商",
          name: "地下室隐秘工程建设",
          problemType: "2019.01.01",
          state: "待设计确认",
          location: "图标"
        },
        {
          index: "8",
          type: "现场签证",
          name: "地下室隐秘工程建设",
          problemType: "2019.01.01",
          state: "待设计确认",
          location: "图标"
        }
      ],
      currentRow: null
    };
  },
  created(){
    this.initModel();
  },
  methods: {
    // 定位
    view() {},
    // 发起沟通
    communication() {
      this.$router.push({
        path: "communication2"
      });
    },
    // 跳转至详情
    goToDetail(row, event, column) {
      this.$router.push({
        path: "communication1"
      });
    },
    /**
     * 加载模型
     */
    initModel(){
      this.$nextTick(() => {
        this.$util.getDomLocation(this, "modelContainer").then(res => {
          console.log(res)
          this.modelBox({
            isShowModel: true, //是否显示模型 true:显示模型，如果模型已加载，则显示  false:隐藏模型
            isLoadModel: true, //是否加载模型  true：加载模型，如果已经加载，不会重新加载，  false:卸载模型
            top: res.top, //距离顶部距离‘px'
            left: res.left, //距离左边距离‘px'
            width: res.width, //模型宽‘px'
            height: res.height, //模型高 ‘px'
            zIndex: 100, //模型层级
            background: "",
            ElementIDs: [], // 所有要显示的构件数组，包括半隐藏构件
            highLightElementIDs: [], // 高亮显示的构件
            functionNumber: [] // 需要模型调用的函数编号数组
          });
        });
      });
    },
    ...mapMutations({
      modelBox: "GET_MODEL_BOX"
    })
  }
};
</script>
<style lang='stylus' rel='stylesheet/stylus'>
.container-communication {
  width: 100%;
  height: 100%;
}

.container-communication {
  background: #f5f6fa;
  padding: 20px;
  box-sizing: border-box;
}

.container-communication .grid-content .el-button {
  float: right;
  width: 120px;
  height: 40px;
  line-height: 40px;
  border: none !important;
  padding: 0;
  cursor: pointer;
  background: #FDA143 !important;
  color: #fff;
  text-align: center;
}

.container-communication .container-cost-left {
  background: #fff;
  height: 100%;
  margin-right: 20px;
  border: 1px solid #ecedf1;
  padding: 10px;
}

.container-communication .wrapper, .container-communication .el-row, .container-communication .el-col, .container-communication .grid-content {
  height: 100%;
}

.container-communication .el-form-item {
  width: 18%;
  height: 40px;
}

.width20 {
  width: 5%;
  position: absolute;
  right: 4px;
}

.container-communication .el-button {
  height: 38px;
  background: #4580fe;
}

.container-cost-right .el-select .el-input__inner {
  border: 1px solid #ecedf1;
  border-radius: 5px;
  overflow: hidden;
}

.container-communication .el-input__suffix {
  width: 50px;
  background: #44508a;
  border-radius: 0 5px 5px 0;
}

.container-communication .el-input--suffix {
  overflow: hidden;
}

.container-communication .el-select .el-input .el-select__caret {
  color: #fff;
}

.container-communication .el-table .has-gutter th {
  background: #44508a;
  color: #fff;
  text-align: center;
}

.container-communication .el-table--enable-row-transition .el-table__body td, .container-communication .el-table--enable-row-transition .el-table__body td .cell {
  text-align: center;
  padding: 0;
}

.container-communication .el-table--enable-row-transition .el-table__body td div {
  padding: 12px;
}

.blueBorder {
  border-left: 6px solid #4476cd;
}

.greenBorder {
  border-left: 6px solid #05a663;
}

.lightGreenBorder {
  border-left: 6px solid #9ce621;
}

.redBorder {
  border-left: 6px solid #e63837;
}

.pinkBorder {
  border-left: 6px solid #fe41b9;
}

.bottom {
  clear: both;
  text-align: center;
}

.item {
  margin: 4px;
}

.left .el-tooltip__popper, .right .el-tooltip__popper {
  padding: 8px 10px;
}

.new-form-inline {
  position: relative;
}
</style>
<style scoped>
.model-container {
  width: 98%;
  height: 900px;
  padding: 0 !important;
  z-index:90;
  margin-top: 50px;
}
</style>