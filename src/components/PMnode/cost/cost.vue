<!-- 成本管理cost -->
<template>
  <div class="container-cost">
    <div class="wrapper">
      <el-row>
        <el-col :span="12">
          <div class="grid-content bg-purple">
            <div class="container-cost-left">
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
              <div class>
                <el-form
                  :inline="true"
                  :model="formInline"
                  class="demo-form-inline new-form-inline"
                >
                  <el-form-item>
                    <el-select v-model="formInline.region" placeholder="整体模型">
                      <el-option label="整体模型一" value="shanghai"></el-option>
                      <el-option label="整体模型二" value="beijing"></el-option>
                    </el-select>
                  </el-form-item>
                  <el-form-item>
                    <el-select v-model="formInline.region" placeholder="全部专业">
                      <el-option label="全部专业一" value="shanghai"></el-option>
                      <el-option label="全部专业二" value="beijing"></el-option>
                    </el-select>
                  </el-form-item>
                  <el-form-item>
                    <el-select v-model="formInline.region" placeholder="全部楼层">
                      <el-option label="全部楼层一" value="shanghai"></el-option>
                      <el-option label="全部楼层二" value="beijing"></el-option>
                    </el-select>
                  </el-form-item>
                  <el-form-item>
                    <el-select v-model="formInline.region" placeholder="全部资源">
                      <el-option label="全部资源一" value="shanghai"></el-option>
                      <el-option label="全部资源二" value="beijing"></el-option>
                    </el-select>
                  </el-form-item>
                  <el-form-item>
                    <el-select v-model="formInline.region" placeholder="进度节点">
                      <el-option label="进度节点一" value="shanghai"></el-option>
                      <el-option label="进度节点二" value="beijing"></el-option>
                    </el-select>
                  </el-form-item>
                  <el-form-item class="width20">
                    <el-button type="primary" @click="onSubmit">导出</el-button>
                  </el-form-item>
                </el-form>
              </div>
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
                  <el-table-column property="resourceName" label="资源名称" width="120"></el-table-column>
                  <el-table-column property="ConstructionPlansBudget" label="施工图预算量" width="120"></el-table-column>
                  <el-table-column property="coefficient" label="系数"></el-table-column>
                  <el-table-column property="constructionBudget" label="施工预算量"></el-table-column>
                  <el-table-column property="actualConsumption" label="实际消耗量"></el-table-column>
                  <el-table-column property="difference" label="差额">
                    <template slot="header" slot-scope="scope">
                      <el-tooltip
                        class="item"
                        effect="dark"
                        content="差额=施工预算量*偏差率"
                        placement="bottom"
                      >
                        <span>
                          差额
                          <i @click="view(scope.row)" class="el-icon-question"></i>
                        </span>
                      </el-tooltip>
                    </template>
                  </el-table-column>
                  <el-table-column property="deviationRate" label="偏差率">
                    <template slot="header" slot-scope="scope">
                      <el-tooltip
                        class="item"
                        effect="dark"
                        content="偏差率=差额/施工预算量"
                        placement="bottom"
                      >
                        <span>
                          偏差率
                          <i @click="view(scope.row)" class="el-icon-question"></i>
                        </span>
                      </el-tooltip>
                    </template>
                  </el-table-column>
                  <el-table-column label="详情">
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
<script ></script>
<script type='textecmascript-6'>
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      data: "成本管理cost",
      formInline: {
        user: "",
        region: ""
      },
      tableData: [
        {
          class: "blueBorder",
          index: "1",
          resourceName: "C20H混凝土",
          ConstructionPlansBudget: "100.00m",
          coefficient: "1.1",
          constructionBudget: "110.00m",
          actualConsumption: "120.00m",
          difference: "10.00m",
          deviationRate: "1.00%",
          detail: "图标"
        },
        {
          class: "greenBorder",
          index: "2",
          resourceName: "C20H混凝土",
          ConstructionPlansBudget: "100.00m",
          coefficient: "1.1",
          constructionBudget: "110.00m",
          actualConsumption: "120.00m",
          difference: "10.00m",
          deviationRate: "1.00%",
          detail: "图标"
        },
        {
          class: "lightGreenBorder",
          index: "3",
          resourceName: "C20H混凝土",
          ConstructionPlansBudget: "100.00m",
          coefficient: "1.1",
          constructionBudget: "110.00m",
          actualConsumption: "120.00m",
          difference: "10.00m",
          deviationRate: "1.00%",
          detail: "图标"
        },
        {
          class: "blueBorder",
          index: "4",
          resourceName: "C20H混凝土",
          ConstructionPlansBudget: "100.00m",
          coefficient: "1.1",
          constructionBudget: "110.00m",
          actualConsumption: "120.00m",
          difference: "10.00m",
          deviationRate: "1.00%",
          detail: "图标"
        },
        {
          class: "blueBorder",
          index: "5",
          resourceName: "C20H混凝土",
          ConstructionPlansBudget: "100.00m",
          coefficient: "1.1",
          constructionBudget: "110.00m",
          actualConsumption: "120.00m",
          difference: "10.00m",
          deviationRate: "1.00%",
          detail: "图标"
        },
        {
          class: "redBorder",
          index: "6",
          resourceName: "C20H混凝土",
          ConstructionPlansBudget: "100.00m",
          coefficient: "1.1",
          constructionBudget: "110.00m",
          actualConsumption: "120.00m",
          difference: "10.00m",
          deviationRate: "1.00%",
          detail: "图标"
        },
        {
          class: "pinkBorder",
          index: "7",
          resourceName: "C20H混凝土",
          ConstructionPlansBudget: "100.00m",
          coefficient: "1.1",
          constructionBudget: "110.00m",
          actualConsumption: "120.00m",
          difference: "10.00m",
          deviationRate: "1.00%",
          detail: "图标"
        }
      ],
      currentRow: null
    };
  },
  created(){
    this.initModel();
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    },
    goToDetail(row, event, column) {
      this.$router.push({
        path: "costdetail"
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
    }),
  }
};
</script>
<style lang='stylus' rel='stylesheet/stylus'>
.container-cost {
  width: 100%;
  height: 100%;
}

.container-cost {
  background: #f5f6fa;
  padding: 20px;
  box-sizing: border-box;
}

.container-cost-left {
  background: #fff;
  height: 100%;
  margin-right: 20px;
  border: 1px solid #ecedf1;
}

.container-cost .wrapper, .container-cost .el-row, .container-cost .el-col, .container-cost .grid-content {
  height: 100%;
}

.container-cost .el-form-item {
  width: 18%;
  height: 40px;
}

.container-cost .width20 {
  width: 5%;
  position: absolute;
  right: 4px;
}

.container-cost .el-button {
  height: 38px;
  background: #4580fe;
}

.container-cost-right .el-select .el-input__inner {
  border: 1px solid #ecedf1;
  border-radius: 5px;
  overflow: hidden;
}

.container-cost .el-input__suffix {
  width: 50px;
  background: #44508a;
  border-radius: 0 5px 5px 0;
}

.container-cost .el-input--suffix {
  overflow: hidden;
}

.container-cost .el-select .el-input .el-select__caret {
  color: #fff;
}

.container-cost .el-table th {
  background: #44508a;
  color: #fff;
  text-align: center;
}

.container-cost .el-table--enable-row-transition .el-table__body td, .container-cost .el-table--enable-row-transition .el-table__body td .cell {
  text-align: center;
  padding: 0;
}

.container-cost .el-table--enable-row-transition .el-table__body td div {
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

.container-cost .el-input__suffix {
  right: 0;
}

.container-cost .el-select .el-input__inner::placeholder {
  color: rgba(51, 51, 51, 1);
}
</style>
<style scoped>
.model-container {
  width: 98%;
  height: 966px;
  padding: 0 !important;
  z-index:90
}
</style>

