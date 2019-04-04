<!-- 导入成功页面 -->
<template>
  <div class="container-success">
    <div class="wrapper">
      <div class="top">
        <div class="left" v-if="isCostImport!=2">
          <button class="but1" @click="replaceTable">替换当前表单</button>
          <button class="but2" @click="addTable">新增表单</button>
        </div>
        <div class="left" v-else>
          <button class="but1" @click="replaceTable">清空表单</button>
        </div>
        <div class="right">
          <div>
            <!-- 整体模型列表 -->
            <menu-el-select
              v-if="isCostImport==2"
              :list="totalModelList"
              @selected="totalModeld"
              placeholder="楼栋"
              :isEmpty="isempty"
            ></menu-el-select>
          </div>
          <div>
            <!-- 专业列表 -->
            <menu-el-select
              v-if="isCostImport==2"
              :list="majorList"
              @selected="majord"
              placeholder="专业"
              :isEmpty="isempty"
            ></menu-el-select>
          </div>
          <div>
            <!-- 楼栋列表 -->
            <menu-el-select
              v-if="isCostImport!=2"
              :list="BuildingList"
              @selected="selectBuilding"
              placeholder="请选择楼栋"
              :isEmpty="isempty"
            ></menu-el-select>
          </div>
          <div class="menu-1" v-if="isCostImport!=1&&isCostImport!=2">
            <!-- 类型列表 必须先选择楼栋 -->
            <menu-el-select
              :list="types"
              @selected="selectType"
              placeholder="请选择类型"
              :isEmpty="isempty"
            ></menu-el-select>
          </div>
          <div v-if="isCostImport!=1">
            <!-- 楼层列表 -->
            <menu-el-select
              :list="floorLists"
              @selected="selectFloor"
              placeholder="请选择楼层"
              :isEmpty="isempty"
            ></menu-el-select>
          </div>
          <div v-if="isCostImport!=1">
            <!-- 构件名称列表 -->
            <menu-el-select
              :list="BOQElements"
              @selected="selectBOQElements"
              placeholder="请选择构件名称"
              :isEmpty="isempty"
            ></menu-el-select>
          </div>
          <div>
            <!-- 资源名称列表 -->
            <menu-el-select
              v-if="isCostImport==2"
              :list="resourceList"
              @selected="resourced"
              placeholder="资源名称"
              :isEmpty="isempty"
            ></menu-el-select>
          </div>
          <div class="but-3">
            <button @click="empty" v-if="isCostImport!=2">清空表单</button>
            <button @click="empty" v-else>数据导出</button>
          </div>
        </div>
      </div>
      <div class="center">
        <el-table
          v-if="isCostImport==0"
          max-height="800"
          stripe
          fit
          highlight-current-row
          :header-cell-style="{background:'#435089',color:'#FFFFFF'}"
          :data="tableData"
          style="width: 100%"
        >
          <el-table-column
            :prop="item"
            :label="item"
            width="180"
            v-for="item in titles"
            :key="item.index"
          ></el-table-column>
        </el-table>
        <!-- 全费用表格 -->
        <div v-if="isCostImport==1" class="ci">
          <el-table
            height="750"
            stripe
            fit
            :data="tableData1"
            style="width: 100%"
            :header-cell-style="{background:'#435089',color:'#FFFFFF'}"
          >
            <el-table-column type="index" label="序号" width="80px"></el-table-column>
            <el-table-column prop="ProjectCode" label="项目编码" width="130">
              <template slot-scope="scope">
                <p v-if="scope.$index!=i">{{scope.row.ProjectCode}}</p>
                <el-input
                  v-else
                  :ref="`focus${scope.column.id}`"
                  v-model="scope.row.layerNumberUP"
                  :placeholder="scope.row.ProjectCode"
                ></el-input>
              </template>
            </el-table-column>
            <el-table-column prop="ProjectName" label="项目名称" width="200px">
              <template slot-scope="scope">
                <p v-if="scope.$index!=i">{{scope.row.ProjectName}}</p>
                <el-input
                  v-else
                  :ref="`focus${scope.column.id}`"
                  v-model="scope.row.layerNumberUP"
                  :placeholder="scope.row.ProjectName"
                ></el-input>
              </template>
            </el-table-column>
            <el-table-column prop="ProjectDescrib" label="项目特征描述">
              <template slot-scope="scope">
                <p v-if="scope.$index!=i">{{scope.row.ProjectDescrib}}</p>
                <el-input
                  v-else
                  autosize
                  :ref="`focus${scope.column.id}`"
                  type="textarea"
                  v-model="scope.row.layerNumberUP"
                  :placeholder="scope.row.ProjectDescrib"
                ></el-input>
              </template>
            </el-table-column>
            <el-table-column prop="MeasureUnit" label="计量单位" width="100">
              <template slot-scope="scope">
                <p v-if="scope.$index!=i">{{scope.row.MeasureUnit}}</p>
                <el-input
                  v-else
                  :ref="`focus${scope.column.id}`"
                  v-model="scope.row.layerNumberUP"
                  :placeholder="scope.row.MeasureUnit"
                ></el-input>
              </template>
            </el-table-column>
            <el-table-column prop="Quantities" label="工程量" width="120">
              <template slot-scope="scope">
                <p v-if="scope.$index!=i">{{scope.row.Quantities}}</p>
                <el-input
                  v-else
                  :ref="`focus${scope.column.id}`"
                  v-model="scope.row.layerNumberUP"
                  :placeholder="scope.row.Quantities"
                ></el-input>
              </template>
            </el-table-column>
            <el-table-column label="金额（元）">
              <el-table-column prop="CompPrice" label="综合单价" width="120">
                <template slot-scope="scope">
                  <p v-if="scope.$index!=i">{{scope.row.CompPrice}}</p>
                  <el-input
                    v-else
                    :ref="`focus${scope.column.id}`"
                    v-model="scope.row.layerNumberUP"
                    :placeholder="scope.row.CompPrice"
                  ></el-input>
                </template>
              </el-table-column>
              <el-table-column prop="SumPrice" label="合价" width="120">
                <template slot-scope="scope">
                  <p v-if="scope.$index!=i">{{scope.row.SumPrice}}</p>
                  <el-input
                    v-else
                    :ref="`focus${scope.column.id}`"
                    v-model="scope.row.layerNumberUP"
                    :placeholder="scope.row.SumPrice"
                  ></el-input>
                </template>
              </el-table-column>
              <el-table-column label="其中">
                <el-table-column prop="JAFee" label="建安费用" width="120">
                  <template slot-scope="scope">
                    <p v-if="scope.$index!=i">{{scope.row.JAFee}}</p>
                    <el-input
                      v-else
                      :ref="`focus${scope.column.id}`"
                      v-model="scope.row.layerNumberUP"
                      :placeholder="scope.row.JAFee"
                    ></el-input>
                  </template>
                </el-table-column>
                <el-table-column prop="SellAmount" label="销项税额" width="120">
                  <template slot-scope="scope">
                    <p v-if="scope.$index!=i">{{scope.row.SellAmount}}</p>
                    <el-input
                      v-else
                      :ref="`focus${scope.column.id}`"
                      v-model="scope.row.layerNumberUP"
                      :placeholder="scope.row.SellAmount"
                    ></el-input>
                  </template>
                </el-table-column>
                <el-table-column prop="AttachAmount" label="附加税额" width="120">
                  <template slot-scope="scope">
                    <p v-if="scope.$index!=i">{{scope.row.AttachAmount}}</p>
                    <el-input
                      v-else
                      :ref="`focus${scope.column.id}`"
                      v-model="scope.row.layerNumberUP"
                      :placeholder="scope.row.AttachAmount"
                    ></el-input>
                  </template>
                </el-table-column>
              </el-table-column>
            </el-table-column>
            <el-table-column prop label="编辑" width="100">
              <template slot-scope="scope">
                <el-button
                  type="text"
                  v-if="scope.$index!=i"
                  @click.stop="onEditor(scope.$index,scope.row)"
                  size="small"
                >编辑</el-button>
                <el-button type="text" v-else @click.stop="i=-1" size="small">完成</el-button>
              </template>
            </el-table-column>
          </el-table>
          <div>
            <!-- <el-pagination
              background
              layout="prev, pager, next"
              :page-size="pageSize"
              @current-change="currentChange"
              :total="Count"
            ></el-pagination>-->
          </div>
        </div>
        <!-- 构件生成表 -->
        <div class="element" v-if="isCostImport==2">
          <el-table :data="tableData2" style="width: 100%"
          :header-cell-style="{background:'#435089',color:'#FFFFFF'}"
          stripe
          fit
          highlight-current-row>
            <el-table-column type="index" label="序号" width="80px"></el-table-column>
            <el-table-column prop="BuildingID" label="楼栋" width="180"></el-table-column>
            <el-table-column prop="Floor" label="楼层" width="180"></el-table-column>
            <el-table-column prop="ElementName" label="构件名称"></el-table-column>
            <el-table-column prop="ResorceName" label="资源名称"></el-table-column>
            <el-table-column prop="Spec" label="型号规格"></el-table-column>
            <el-table-column prop="Unit" label="计量单位"></el-table-column>
            <el-table-column prop="BIMBOQ" label="BIM工程量"></el-table-column>
          </el-table>
          <el-pagination
            v-show="tableData2.length"
            background
            :page-size='tableParams.pageSize'
            layout="prev, pager, next"
            :current-page.sync='element_currentPage'
            @current-change="element_current_change"
            :total="tableData2Count">
          </el-pagination>
        </div>
      </div>
      <div class="bottom">
        <!-- <el-pagination background layout="prev, pager, next" :total="1000"></el-pagination> -->
      </div>
    </div>
    <!-- 表单选择上传弹窗 -->
    <import-form
      v-if="isShowBuildingListSelect&&[0,1].indexOf(toPageNum)!=-1"
      @closeBuildingListSelect="closeBuildingListSelect"
      @jumpto="jumptos"
    ></import-form>
  </div>
</template>

<script type='textecmascript-6'>
// 组件
import menuElSelect from "@/common/Selects/elSelect.vue";
import importForm from "./import_form";
// 接口
import {
  GetContructTypebyBuilding,
  GetContructFloorbyBuilding,
  GetConstructElementNamebyBuilding,
  GetBOQList,
  GetCostList,
  GetBuilding,
  GetAllElementName,
  GetAllElementResorceName
} from "@/api/api.js";
import { getBuildings } from "../modules/interfaces.js";
import CostImportMethods from "../modules/CostImport.js";
import getElementImports from "../modules/elementImport.js";
import elementImportWatchs from "../modules/elementImportWatchs.js";
import elementEvents from "../modules/elementEvents.js";
export default {
  mixins: [CostImportMethods, getElementImports, elementImportWatchs,elementEvents],
  data() {
    const projectid = localStorage.getItem("projectid");
    return {
      i: -1, //第几行编辑状态
      isempty: false, //清空
      toPageNum: 0, //跳转到哪个页面 0 --plan1 , 2 --plan2 ,  3-- plan3
      isShowBuildingListSelect: false, //是否显示楼栋选择器蒙层弹窗。
      totalModelList: [], //整体模型列表
      totalModel: "", //已选择的整体模型
      majorList: [], //专业列表
      major: "", //已选择的专业
      resourceList: [], //资源名称列表
      resource: "", //已选资源
      tableData: [], //施工图表
      tableData1: [], //全费用表
      tableData2: [], //构件生成表
      tableData2Count:0,//构件生成分页
      element_currentPage:8,//构件生成分页第几页
      floorLists: [], //所有楼层列表
      floor: "",
      projectid, //项目ID
      BOQElements: [], //构件名称列表
      element: "",
      BuildingList: [], //楼栋列表
      building: "",
      types: [], //类型列表
      type: "",
      tableParams: {
        // 根据类型 楼层 构件名称 查询实施工图表数据列表 的参数
        pageSize: 18,
        pageIndex: 1,
        projectid: localStorage.getItem("projectid"),
        buildname: "", //楼栋
        type: "", //导入类型
        floor: "", //楼层
        elementname: "" //构件名称
      },
      titles: [] //表头数组
    };
  },
  created() {
    this._initData();
  },
  computed: {
    /**
     * 0为施工图
     * 1为全费用清单
     * 2为清单生成
     */
    isCostImport() {
      return Number(localStorage.getItem("plan"));
    }
  },
  methods: {
    async _initData() {
      // this.load()

      console.log(this.isCostImport);
      if (this.isCostImport == 1) {
        //如果为全费用清单，则不要构件名称列表
        let projectid = localStorage.getItem("projectid");
        this.getCostFloors(projectid).then(res => {
          this.BuildingList = [];
          res.Detiel.forEach((i, index) => {
            this.BuildingList.push({
              id: index + 1,
              text: i
            });
          });
          console.log(this.BuildingList);
        });
        return;
      } else if (this.isCostImport == 0) {
        getBuildings(this, this.projectid).then(res => {
          console.log(res);
          this.BuildingList = res;
        });
        /**
         * 获取构件名称列表
         */
        let BOQElement = this.Request(
          GetConstructElementNamebyBuilding({ projectid: this.projectid })
        ).then(BOQElement => {
          console.log(BOQElement);
          if (BOQElement.StatusCode === 200) {
            this.BOQElements = BOQElement.Detiel;
            console.log(this.BOQElements);
          }
        });
      } else {
        //构件清单生成
        let projectid = localStorage.getItem("projectid"),
          userId = Number(localStorage.getItem("userId"));

        this.getElementInventoryMenuList({ projectid })(GetBuilding).then(
          arr => {
            this.totalModelList = arr;
          }
        );

        // this.getElementInventoryMenuList(projectid)(GetAllElementFloor).then(arr=>{this.floorLists = arr})
        // this.getElementInventoryMenuList(projectid)(GetAllElementName).then(arr=>{this.BOQElements = arr})
        // this.getElementInventoryMenuList(projectid)(GetAllElementResorceName).then(arr=>{this.resourceList = arr})
      }
    },
    /**
     * 选择楼栋
     */
    async selectBuilding(building) {
      console.log(building);
      //如果为全费用清单，则不要构件名称列表
      if (this.isCostImport == 1) {
        /**
         * 根据楼栋 获取全费用清单表数据
         *
         */
        let pas = {
          pageSize: this.tableParams.pageSize,
          pageIndex: this.tableParams.pageIndex,
          projectid: this.tableParams.projectid,
          userid: localStorage.getItem("userId"),
          buildname: building
        };
        let types = await this.Request(GetCostList(pas));
        console.log(types);
        if (types.StatusCode === 200) {
          this.tableData1 = types.Result.listCostList;
        }
        return;
      }

      // 清空类型和楼层
      this.types = [];
      this.floorLists = [];
      this.building = building;
      this.tableParams.buildname = building;
      // this.selectFun(this.tableParams)
      /**
       * 根据楼栋 类型 获取类型和楼层列表
       *
       */
      let types = await this.Request(
        GetContructTypebyBuilding({ projectid: this.projectid, building })
      );
      console.log(types);
      if (types.StatusCode === 200) {
        this.types = types.Detiel;
      }
    },
    /**
     * 选择类型
     */
    async selectType(type) {
      console.log(type);
      this.type = type;
      this.tableParams.type = type;
      this.selectFun(this.tableParams);
      /**
       * 根据楼栋 类型 获取类型和楼层列表
       *
       */
      let floorArr = await this.Request(
        GetContructFloorbyBuilding({
          projectid: this.projectid,
          building: this.building,
          type
        })
      );
      console.log(floorArr);
      if (floorArr.StatusCode === 200) {
        this.floorLists = floorArr.Detiel;
      }
    },
    /**
     * 选择楼层
     */
    selectFloor(floor) {
      console.log(floor);
      let plan = localStorage.getItem("plan");
      this.floor = this.tableParams.floor = floor;
      if (plan == 2) {
        let projectid = localStorage.getItem("projectid");
        this.getElementInventoryMenuList({
          projectid,
          building: this.totalModel,
          Specialty: d
        })(GetFloorbyBuilding).then(arr => {
          this.floorLists = arr;
        });
        //获取构件清单列表
        // this.getElementLists(this.tableParams.pageIndex,
        //   this.tableParams.pageSize,
        //   this.tableParams.projectid,this.totalModel,this.major,this.floor,
        //   this.tableParams.elementname, this.resource)
      } else {
        this.selectFun(this.tableParams);
      }
    },
    /**
     * 选择构件名称
     */
    selectBOQElements(elementname) {
      console.log(elementname);
      this.tableParams.elementname = elementname;
      this.selectFun(this.tableParams);
    },
    empty() {
      console.log("清空");
      this.isempty = true;
      this.tableData = [];
      this.floor = this.type = "";
      this.tableParams = {
        // 根据类型 楼层 构件名称 查询实施工图表数据列表 的参数
        pageSize: 10000,
        pageIndex: 1,
        projectid: localStorage.getItem("projectid"),
        buildname: "", //楼栋
        type: "", //导入类型
        floor: "", //楼层
        elementname: "" //构件名称
      };
    },

    /**
     * 条件查询成功导入的施工图表数据
     */
    selectFun(tableParams) {
      if (!this.type) {
        this.$message({ type: "error", message: "请选择类型", center: "true" });
        return;
      }
      this.load();
      this.Request(GetBOQList(tableParams)).then(res => {
        console.log(res);
        if (res.StatusCode === 200 && res.Result.length != 0) {
          this.tableData = res.Result;
          this.titles = Object.keys(res.Result[0]);
        }
        this.$toast.clear();
      });
    },
    /**
     * 返回
     */
    replaceTable() {
      console.log("替换当前表单");
      this.$confirm("是否确定返回?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
        center: true
      }).then(() => {
        this.$emit("back");
      });
    },
    /**
     * 新增表单
     *  在导入成功页面新增表单，效果跟首页一样，导入成功后在楼栋，类型，楼层，构件名称的下拉列表中增加新增的列表
     */
    addTable() {
      console.log("新增表单");
      localStorage.setItem("isAdd", 1); // 从成功页面点击新增表单 为追加表单
      this.isShowBuildingListSelect = true;
    },
    jumptos(toPageNum, detiel) {
      this.$emit("jump", toPageNum, detiel); //关闭入口页面组件,并将解析出的xlsx数据返回父组件
    },
    /**
     * 关闭楼栋选择蒙层
     */
    closeBuildingListSelect() {
      this.isShowBuildingListSelect = false;
    },
    /**
     * 点击编辑
     */
    onEditor(index, d) {
      console.log(index, d);
      this.i = index;
    }
  },
  components: {
    menuElSelect,
    importForm
  }
};
</script>
<style lang='stylus' scoped rel='stylesheet/stylus'>
@import '../../../../assets/stylus/variable.styl'

.container-success
  width 100%
  height 100%
  .wrapper
    width 100%
    height 100%
    box-sizing border-box
    padding 0 20px
    .top
      width 100%
      height 80px
      box-sizing border-box
      padding-top 15px
      display flex
      justify-content space-between
      .left
        .but1
          height 40px
          background $font-color-13
          box-shadow 0px 2px 4px 0px rgba(161, 192, 250, 1)
          border-radius 4px
          font-size $font-size-16
          font-family SourceHanSansCN-Medium
          font-weight 500
          color $font-color-03
          line-height 24px
          padding 0 30px
        .but2
          height 40px
          background $font-color-14
          border-radius 4px
          font-size $font-size-16
          font-family SourceHanSansCN-Medium
          font-weight 500
          color $font-color-03
          line-height 24px
          padding 0 30px
          margin-left 20px
      .right
        display flex
        >div
          margin-left 20px
          margin-top 6px
        .menu-1
          width 343px
          height 40px
          background $font-color-03
          box-shadow 0px 3px 7px 0px rgba(229, 229, 229, 1)
          border-radius 4px
        .but-3
          margin-top 0
          button
            height 40px
            background $color-but-bg-01
            box-shadow 0px 2px 4px 0px rgba(176, 148, 119, 0.5)
            border-radius 4px
            font-size $font-size-16
            font-family SourceHanSansCN-Medium
            font-weight 500
            color $font-color-03
            // line-height:24px;
            padding 0 30px
    .center
      width 100%
      height 800px
    .bottom
      width 100%
      height 100px
</style>
<style>
.center .el-table .cell,
.el-table th div {
  overflow: initial;
  text-overflow: initial;
}
.center .el-table td {
  border-bottom: initial;
}
.center .el-table .cell,
.el-table th div {
  text-align: center;
}
.bottom .el-pagination {
  text-align: center;
}
</style>
<style>
/* .ci .el-table th > .cell {
  white-space: nowrap;
} */
.ci .el-table .cell,
.el-table th div {
  overflow: initial;
  text-overflow: initial;
}
.ci .el-table td {
  border-bottom: initial;
}
.ci .el-table .cell,
.el-table th div {
  text-align: center;
}
.container-success .el-checkbox__label {
  color: white;
}
.buts .el-button span {
  padding: 0 30px;
}
.ci .el-table__footer-wrapper tbody td {
  background: #435089;
  color: #ffffff;
}
.ci .el-table--border th,
.ci .el-table__fixed-right-patch {
  border-bottom: 0.013333rem solid rgba(255, 255, 255, 0.1);
}
.ci .el-table--border th,
.ci .el-table--border td {
  border-right: 0.013333rem solid rgba(255, 255, 255, 0.1);
}
.ci .el-button--text {
  color: #4580ff;
}
.element .el-pagination{
  text-align: center;
  margin-top:20px;
}
</style>