<!-- 按模型购件 -->
<template>
  <el-form :model="form" label-width="100px">
    <div class="flex">
      <el-form-item label-width="40px">
        <el-button icon="el-icon-refresh" type="text" @click="onRefrsh">模型同步</el-button>
      </el-form-item>
    </div>
    <el-form-item label-width="40px">
      <div class="teble-wrapper">
        <el-table :data="listItems" border>
          <!-- <el-table-column label="任务名称" prop="TaskName"></el-table-column> -->
          <el-table-column label="物资名称" prop="ResourceName"></el-table-column>
          <el-table-column label="规格型号" prop="Spec"></el-table-column>
          <el-table-column label="施工预算量" prop="AdjustBOQ"></el-table-column>
          <el-table-column label="已采购量" prop="PurchaseNum"></el-table-column>
          <el-table-column label="本次采购量">
            <template slot-scope="scope">
              <el-input :placeholder="listItems[scope.$index].Unit" v-model="listItems[scope.$index].ThisPurchaseNum"></el-input>
            </template>
          </el-table-column>
          <!-- <el-table-column align="center" label="选择" width="50px">
            <template slot-scope="scope">
              <el-checkbox class="table-checkbox" size="medium" v-model="listItems[scope.$index].isSel"></el-checkbox>
            </template>
          </el-table-column> -->
        </el-table>
        <el-pagination :total="totalNum" @current-change="curChange" :page-size="paging.rows" :current-page.sync='paging.page' background layout="prev, pager, next" class="text-center"></el-pagination>
      </div>
    </el-form-item>
    <el-form-item label="需求时间">
      <el-date-picker v-model="form.DemandTime" type="date" placeholder="选择日期"></el-date-picker>
    </el-form-item>
    <Timeline v-model="listFlow" @getFlowList="getFlowList"/>
  </el-form>
</template>

<style lang="stylus" src="./index.styl">
</style>

<script type='textecmascript-6'>
import Timeline from "@/common/timeline/index";
import { SaveRangeInfo,QueryPurchaseInfo } from "../../../../../../api/api.js";
import {initPurchase} from '../../../util/util.js'

export default {
  components: {
    Timeline
  },
  data() {
    return {
      totalNum: 0,
      paging: { page: 1, rows: 5 }, // [采购列表分页]
      projectid:localStorage.getItem("projectid"),
      /**[表单类型]
       *  @progress   按进度计划
       *  @model      按模型购件
       *  @form       按清单
       */
      typeOptions: {
        progress: "progress",
        model: "model",
        form: "form"
      },
      type: "progress",
      /**[采购审核] */
      listFlow: [
        {
          bottom: [{ text: "发起" }],
          icoClassName: "hideIco"
        },
        {
          bottom: [{ text: "审核" }]
        },
        {
          bottom: [{ text: "审批" }]
        },
        {
          bottom: [{ text: "采购" }]
        }
      ],
      /**[时间快捷选项] */
      pickerOptions2: {
        shortcuts: [
          {
            text: "最近一周",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "最近一个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "最近三个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit("pick", [start, end]);
            }
          }
        ]
      },
      /**[表单] */
      filterForm: {
        buildname: "", // 楼栋
        starttime: "", // 开始时间
        endtime: "", // 结束时间
      },
      /**[表单] */
      form: {
        Type: "2",
        check: "-1",
        StartTime:'',
        EndTime:'',
        DemandTime:'',
      },
      /**[表格数据]
       *  @mergeTwoRow  {合并第二列}
       */
      listItems: [],
      elementids:[]
    };
  },
  methods: {
    onSubmit() {
      if(this.form.DemandTime==''){
        this.$message({
          type: 'warning',
          message: '请选择需求时间',
          center: 'true'
        })
        return false
      }
      initPurchase(this,SaveRangeInfo);
    },
    onRefrsh(){
      if(this.elementids.length>0){
        this.getData();
      }else{
        this.$message({
            type: 'warning', message: "请选择构件", center: 'true'
        })
      }
    },
    // 分页
    curChange(d) {
      this.paging.page = d;
      this.getData();
    },
    // 获取采购信息
    getData(){
      let elementids = this.elementids.join(',')
      let par=Object.assign(this.filterForm, {
        projectid:this.projectid,
        listtype:this.listtype,
        querytype:'2',
        elementids,
        page: this.paging.page, // 第几也页
        rows: this.paging.rows // 每页行数
      })
      QueryPurchaseInfo(par).then(res=>{
        if(res.StatusCode==200){
          this.listItems=res.Detiel.map(item=>{
            return Object.assign(item,{
              ThisPurchaseNum:'',
              Floor:this.filterForm.buildname,
              ProjectID:this.projectid,
              isSel:false,
            })
          })
          this.totalNum = Number(res.Count);
        }
      })
    },
    // 流程数据
    getFlowList(d){
      this.listFlow=d;
    },

    onElementIDs(val){
      let vi=this.elementids.indexOf(val);
      if(vi==-1){
        this.elementids.push(val);
      }else{
        this.elementids = this.elementids.filter(item=>{
          if(item!=val){
            return item;
          }
        })
      }
    },
  },
  computed:{
    elementID(){
      return this.$store.getters.getViewer3d.objectId;
    }
  },
  watch:{
    elementID(val,oldval){
      this.onElementIDs(val)
    }
  },
};
</script>