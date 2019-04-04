<template>
  <div class="intelligenec_left_div">
    <ul class="intelligenec_building">
      <li style="width:8%">
        <el-checkbox v-model="buildChecked" @change="allBuildingChange()"></el-checkbox>
      </li>
      <li style="width:5%">序号</li>
      <!-- 332px -->
      <li style="width:40%">资料名称</li>
      <li style="width:10%">预览</li>
      <li style="width:37%">下载</li>
    </ul>
    <div class="intelligenec_expand" @click="showBuildingClick()">
      <!-- 点击时候，（已生成表格）显示与不显示的小图标  alredyBuilding1已生成的总数-->
      <i v-if="showbuilding1" class="el-icon-caret-bottom"></i>
      <i v-if="!showbuilding1" class="el-icon-caret-right"></i>
      已生成（{{alredyBuilding1}}）
    </div>
    <!-- 已生成表格（不显示表头）-->
    <el-table
      v-if="showbuilding1"
      style="width:100%;"
      ref="multipleTable"
      :show-header="false"
      :data="buildingDay"
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection"  align="center"></el-table-column>
      <el-table-column type="index" label="序号"  align="center" :index="indexMethod"></el-table-column>
      <el-table-column prop="name" label="资料名称"  align="center"></el-table-column>
      <el-table-column label="预览"  align="center">
        <template slot-scope="scope">
          <img
            src="../../../assets/imgs/blue_eye.png"
            @click="buildingClick(scope.$index, scope.row)"
            alt
          >
        </template>
      </el-table-column>
      <el-table-column label="下载"  align="center">
        <template slot-scope="scope">
          <img
            src="../../../assets/imgs/down_blue.png"
            @click="buildingDown(scope.$index, scope.row)"
            alt
          >
        </template>
      </el-table-column>
      <p
        slot="append"
        style="text-align:center; line-height:30px;border-bottom:1px solid #EBEEF5;"
        v-loading="loading"
      >
        <a href="javascript:;" @click="getMData()" class="blue01">查看更多</a>
      </p>
    </el-table>
    <div class="intelligenec_expand" @click="shownoBuildingClick()">
      <!-- 点击时候，（未生成表格）显示与不显示的小图标  alredyBuilding1已生成的总数-->
      <i v-if="shownobuilding1" class="el-icon-caret-bottom"></i>
      <i v-if="!shownobuilding1" class="el-icon-caret-right"></i>
      未生成（{{noBuilding1}}）
    </div>
    <el-table
      v-if="shownobuilding1"
      style="width:100%;"
      ref="nomultipleTable"
      :show-header="false"
      :data="nobuildingDay"
       @selection-change="handleSelectionChange1"
    >
      <el-table-column type="selection"  align="center"></el-table-column>
      <el-table-column type="index" label="序号"  align="center" :index="indexMethod"></el-table-column>
      <el-table-column prop="name" label="资料名称"  align="center"></el-table-column>
      <el-table-column label="预览"  align="center">
        <template slot-scope="scope">
          <img
            src="../../../assets/imgs/blue_eye.png"
            @click="nobuildingClick(scope.$index, scope.row)"
            alt
          >
        </template>
      </el-table-column>
      <el-table-column label="下载"  align="center">
        <template slot-scope="scope">
          <img
            src="../../../assets/imgs/down_grey.png"
            @click="nobuildingDown(scope.$index, scope.row)"
            alt
          >
        </template>
      </el-table-column>
      <p
        slot="append"
        style="text-align:center; line-height:30px;border-bottom:1px solid #EBEEF5;"
        v-loading="noloading"
      >
        <a href="javascript:;" @click="getNoData()" class="blue01">查看更多</a>
      </p>
    </el-table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      //施工日志-已生成
      // buildingDay: [ ],
      // nobuildingDay: [],
      buildChecked: false, //施工日志的全选
      loading: false, //点击查看更多的--已生成--加载中
      noloading: false, //点击查看更多的--未生成--加载中
      alredyBuilding1: "12", //施工日志中-已生成--数据总数
      showbuilding1: true, //施工日志中-已生成--是否显示
      shownobuilding1: true, //施工日志中-未生成--是否显示
      noBuilding1: "3", //施工日志中-未生成--数据总数

      multipleSelection:[],//大表格
      nomultipleTable:[],//小表格
      bigAllSelected:false,
      smallAllSelected:false,

    };
  },
  props:{buildingDay:Array,nobuildingDay:Array},
  methods:{
      //表格序号
    indexMethod(index){
      return index+1;
    },
    //施工日志--已生成-查看
    buildingClick(index,row){
      console.log(index);
      console.log(row);
    },
    //施工日志--已生成-下载
    buildingDown(index,row){
      console.log(index);
      console.log(row);
    },
    //施工日志-未生成--查看
    nobuildingClick(index,row){
      console.log(index);
      console.log(row);
    },
    //施工日志-未生成--下载
    nobuildingDown(index,row){
      console.log(index);
      console.log(row);
    },
    //点击加载更多----已生成
    getMData(){
      let that = this;
      that.loading = true;
      //然后再掉查询接口
    },
    //点击加载更多----未生成
    getNoData(){
      let that = this;
      that.noloading = true;
      //然后再掉查询接口
    },
    //点击-已生成-表格上门的--收缩栏
    showBuildingClick:function(){
      console.log('点击了-已生成上的div');
        this.showbuilding1=!this.showbuilding1;
    },
    //点击-未生成-表格上门的--收缩栏
    shownoBuildingClick:function(){
      console.log('点击了-未生成上的div');
      this.shownobuilding1=!this.shownobuilding1;
    },
    //点击施工日志的全选
    allBuildingChange(){
      if(this.buildChecked==true){
          this.$refs.multipleTable.clearSelection();
          this.$refs.nomultipleTable.clearSelection();
      }else{
          this.$refs.multipleTable.toggleAllSelection();
          this.$refs.nomultipleTable.toggleAllSelection();
      }
    },
    //已生成的表格的select的事件集合
    handleSelectionChange(val) {
        this.multipleSelection = val;
        if(this.multipleSelection.length == this.buildingDay.length){
            //如果相等的话，那么就是--已生成的表格全选中(如果大小表格全选中的话，那么buildChecked选中)
            this.bigAllSelected=true;
            this.smallAllSelected==true?this.buildChecked=true:this.buildChecked=false
        }else{
            this.bigAllSelected=false;
            this.buildChecked=false;
        }
    },
    //未生成的表格的select的事件集合
    handleSelectionChange1(val){
        this.nomultipleTable = val;
        if(this.nomultipleTable.length == this.nobuildingDay.length){
            //如果相等的话，那么就是--未生成的表格全选中
            this.smallAllSelected=true
            this.bigAllSelected==true?this.buildChecked=true:this.buildChecked=false
        }else{
            this.smallAllSelected=false;
            this.buildChecked=false;
        }
    },



  },

};
</script>
<style lang="stylus" scoped>
// 表格最上面的样式
  .intelligenec_left_div .intelligenec_building li
    display inline-block
    background-color  #435089
    color #ffffff
    height 40px
    line-height 40px
    text-align center
  .intelligenec_expand
    width 100%
    height 40px
    line-height 40px
    background-color #ffffff
    border 1px solid #EEEFF1
    box-sizing border-box
    padding-left 30px
  .intelligenec_expand i 
    margin-right 40px
  .el-table .success-row 
    background: #F4F6FF;
  
  .intelligenec_down_btn
    margin-top 30px
    color #ffffff
    background rgba(71,117,202,1)
    box-shadow 0px 3px 7px 0px rgba(161,192,250,1)
    border-radius 4px
    font-size 18px
    padding 11px 24px
    border 0

  .intelligenec_left_div .el-table td,.intelligenec_left_div .el-table th 
    padding  5px 0 


  .intelligenec_left_body li.active 
    color #ffffff
    background-color #4775CA

  .intelligenec_left_body .intelligenec_left_border
    border-right 1px solid #4775CA
  .intelligenec_left_div
    overflow-x hidden
    overflow-y scroll
    margin-top 30px
    width 100%
    height 1000px

    box-sizing border-box
  .el-table .cell  
    text-align center
</style>


