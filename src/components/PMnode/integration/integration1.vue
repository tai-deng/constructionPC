<!-- 集成管理integration -->
<template>
  <div class="container-integration">
    <div class="leftBox">
      <div class="box-card">
        <div class="title">
          <i class="el-icon-menu icon"></i>
        </div>
        <div class="modelInfo">
          <span>某某的问题</span>
          <ul>
            <li>上传人:</li>
            <li>上传时间:</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="rightBox">
      <div class="box-card">
        <!-- 我的数据 -->
        <div class="myData">
          <el-row>
            <el-col :span="24">
              <i class="icon">
                <img src="../../../assets/imgs/data.png" alt>
              </i>我的数据
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="8">
              <div class="list">
                <div class="clearfix myDataTitle">任务</div>
                <div class="content">
                  <div>
                    <span class="num">
                      <span class="numColor1">2</span>项
                    </span>
                    <span class="info">待接收</span>
                  </div>
                  <div class="center">
                    <span class="num">
                      <span class="numColor2">10</span>项
                    </span>
                    <span class="info">进行中</span>
                  </div>
                  <div>
                    <span class="num">
                      <span class="numColor3">20</span>项
                    </span>
                    <span class="info">已完成</span>
                  </div>
                </div>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="list">
                <div class="clearfix myDataTitle">警告</div>
                <div class="content">
                  <div>
                    <span class="num">
                      <span class="numColor1">2</span>项
                    </span>
                    <span class="info">滞后任务数</span>
                  </div>
                  <div class="center">
                    <span class="num">
                      <span class="numColor2">10</span>项
                    </span>
                    <span class="info">正常任务数</span>
                  </div>
                  <div>
                    <span class="num">
                      <span class="numColor3">20</span>项
                    </span>
                    <span class="info">总报警数</span>
                  </div>
                </div>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="list">
                <div class="clearfix myDataTitle">动态</div>
                <div class="content">
                  <div>
                    <span class="num">
                      <span class="numColor1">2</span>项
                    </span>
                    <span class="info">浏览量</span>
                  </div>
                  <div class="center">
                    <span class="num">
                      <span class="numColor2">10</span>项
                    </span>
                    <span class="info">评论数</span>
                  </div>
                  <div>
                    <span class="num">
                      <span class="numColor3">20</span>项
                    </span>
                    <span class="info">点赞量</span>
                  </div>
                </div>
              </div>
            </el-col>
          </el-row>
        </div>
        <!-- 日常管理 -->
        <div class="dayManagement">
          <el-row>
            <el-col :span="24">
              <i class="icon">
                <img src="../../../assets/imgs/everyday.png" alt>
              </i>日常管理
            </el-col>
          </el-row>
          <div>
            <div class="titleBg notice">系统公告</div>
            <ul class="noticeList">
              <li>
                <span>
                  1.xx时间节点xx时间节点xx时间节点xx时间节点xx时间节点xx时间节点xx时间节点
                  <b>责任人:张三十</b>
                </span>
                <span>2019.01.01</span>
              </li>
              <li>
                <span>
                  1.xx时间节点xx时间节点xx时间节点xx时间节点xx时间节点xx时间节点xx时间节点
                  <b>责任人:张三十</b>
                </span>
                <span>2019.01.01</span>
              </li>
            </ul>
          </div>
        </div>
        <!-- 任务状态 -->
        <div class="missionState">
          <ul>
            <li v-for="(item,index) in collapseData" v-bind:key="index">
              <div class="titleBg notice" :id="item.id" @click="collapse(item)">
                <span>{{item.name}}({{item.statistics}})</span>
                <span>
                  <i v-if="!item.down" class="el-icon-arrow-down"></i>
                  <i v-if="item.up" class="el-icon-arrow-up"></i>
                </span>
              </div>
              <div v-show="!item.model" v-if="item.status == 1">
                <el-table :data="tableData1" style="width: 100%">
                  <el-table-column prop="number" label="序号"></el-table-column>
                  <el-table-column prop="tower" label="楼栋"></el-table-column>
                  <el-table-column prop="missionName" label="任务名称"></el-table-column>
                  <el-table-column prop="completeTime" label="计划完成时间"></el-table-column>
                  <el-table-column prop="state" label="状态"></el-table-column>
                  <el-table-column label="处理">
                    <el-button @click="receive()" type="text" size="small">接收</el-button>
                    <el-button type="text" @click="dispose()" size="small">处理</el-button>
                  </el-table-column>
                </el-table>
              </div>
              <div v-show="!item.model" v-if="item.status == 2">
                <el-table :data="tableData2" style="width: 100%">
                  <el-table-column prop="number" label="序号"></el-table-column>
                  <el-table-column prop="tower" label="楼栋"></el-table-column>
                  <el-table-column prop="missionName" label="任务名称"></el-table-column>
                  <el-table-column prop="completeTime" label="计划完成时间"></el-table-column>
                  <el-table-column prop="state" label="状态"></el-table-column>
                  <el-table-column label="处理">
                    <el-button @click="receive()" type="text" size="small">审核</el-button>
                    <el-button type="text" @click="dispose()" size="small">认证</el-button>
                  </el-table-column>
                </el-table>
              </div>
              <div v-show="!item.model" v-if="item.status == 3">
                <el-table :data="tableData3" style="width: 100%">
                  <el-table-column prop="number" label="序号"></el-table-column>
                  <el-table-column prop="tower" label="楼栋"></el-table-column>
                  <el-table-column prop="missionName" label="任务名称"></el-table-column>
                  <el-table-column prop="completeTime" label="计划完成时间"></el-table-column>
                  <el-table-column prop="state" label="状态"></el-table-column>
                  <el-table-column label="处理">
                    <el-button @click="receive()" type="text" size="small">已完成</el-button>
                    <el-button type="text" @click="dispose()" size="small">已拒接</el-button>
                    <el-button @click="receive()" type="text" size="small">已完成</el-button>
                  </el-table-column>
                </el-table>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script type='textecmascript-6'>
export default {
  data() {
    return {
      data: "集成管理integration",
      activeNames: ["1", "2", "3"],
      tableData1: [
        //待接收
        {
          number: "1",
          tower: "A1",
          missionName: "3F主体结构",
          completeTime: "2019.01.01",
          state: "正常"
        },
        {
          number: "2",
          tower: "A1",
          missionName: "3F主体结构",
          completeTime: "2019.01.01",
          state: "正常"
        },
        {
          number: "3",
          tower: "A1",
          missionName: "3F主体结构",
          completeTime: "2019.01.01",
          state: "正常"
        }
      ],
      tableData2: [
        //进行中
        {
          number: "1",
          tower: "A1",
          missionName: "3F主体结构",
          completeTime: "2019.01.01",
          state: "正常"
        },
        {
          number: "2",
          tower: "A1",
          missionName: "3F主体结构",
          completeTime: "2019.01.01",
          state: "正常"
        },
        {
          number: "3",
          tower: "A1",
          missionName: "3F主体结构",
          completeTime: "2019.01.01",
          state: "正常"
        }
      ],
      tableData3: [
        //已完成
        {
          number: "1",
          tower: "A1",
          missionName: "3F主体结构",
          completeTime: "2019.01.01",
          state: "正常"
        },
        {
          number: "2",
          tower: "A1",
          missionName: "3F主体结构",
          completeTime: "2019.01.01",
          state: "正常"
        },
        {
          number: "3",
          tower: "A1",
          missionName: "3F主体结构",
          completeTime: "2019.01.01",
          state: "正常"
        }
      ],
      collapseData: [
        //折叠面板
        {
          id: "1",
          name: "待接收",
          statistics: "20",
          status: "1"
        },
        {
          id: "2",
          name: "进行中",
          statistics: "20",
          status: "2"
        },
        {
          id: "3",
          name: "已完成",
          statistics: "20",
          status: "3"
        }
      ]
    };
  },
  methods: {
    handleChange(val) {
      console.log(val);
    },
    collapse(item) {
      if (item.model) {
        this.$set(item, "model", false);
        this.$set(item, "down", false);
        this.$set(item, "up", false);
      } else {
        this.$set(item, "model", true);
        this.$set(item, "up", true);
        this.$set(item, "down", true);
      }
    }
  }
};
</script>
<style lang='stylus' rel='stylesheet/stylus'>
.container-integration {
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 1;
}

.container-integration .modelInfo {
  width: 248px;
  height: 138px;
  background: rgba(0, 0, 0, 0.6);
  color: #F5F6FA;
  padding: 20px;
}

.container-integration .modelInfo span {
  font-size: 16px;
}

.container-integration .modelInfo ul {
  font-size: 16px;
  margin-top: 55px;
}

.container-integration .icon img {
  width: 22px;
  height: 22px;
  display: inline-block;
}

// 我的数据title bg
.container-integration .myDataTitle {
  background: #4775ca;
  font-size: 18px;
  height: 40px;
  line-height: 40px;
}

.container-integration .titleBg {
  background: #44508a;
}

.container-integration .myData .clearfix {
  color: #fff;
  text-align: center;
}

.container-integration .dayManagement {
  margin-bottom: 26px;
}

.container-integration .numColor1 {
  color: #396fd1;
}

.container-integration .numColor2 {
  color: #fda951;
}

.container-integration .numColor3 {
  color: #4572cf;
}

.container-integration .content {
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: center;
}

.container-integration .content div {
  width: 33.33%;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  margin: 20px 0;
}

.container-integration .num {
  color: #353535;
  font-size: 12px;
}

.container-integration .num span {
  font-size: 22px !important;
  padding-right: 10px;
}

.container-integration .info {
  color: #434343;
  font-size: 12px;
  padding-top: 15px;
}

.container-integration .list {
  background: #fff;
  border-radius: 6px;
}

.container-integration .el-row .el-col-24 {
  font-size: 22px;
  color: #28292b;
}

.container-integration .myData .el-row .el-col-24 {
  margin: 0px 0 24px 0;
}

.container-integration .dayManagement .el-row .el-col-24 {
  margin: 20px 0px;
}

.container-integration .el-row .el-col-24 i {
  margin-right: 25px;
}

.container-integration .notice {
  color: #fff;
  font-size: 20px;
  padding-left: 20px;
  height: 40px;
  line-height: 40px;
  display: flex;
}

.container-integration .notice span {
  width: 50%;
}

.container-integration .notice span:last-child {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 20px;
}

.container-integration .noticeList {
  background: #fff;
  color: #353535;
  font-size: 12px;
  padding: 15px 20px;
}

.container-integration .noticeList li {
  display: flex;
  flex-flow: row;
  align-items: center;
  line-height: 28px;
}

.container-integration .el-table__row td {
  padding: 0.08rem !important;
}

.container-integration .noticeList li span:first-child {
  width: 85%;
}

.container-integration .noticeList li span:first-child b {
  margin-left: 30px;
}

.container-integration .noticeList li span:last-child {
  width: 15%;
  display: flex;
  justify-content: flex-end;
}

.container-integration .center {
  border-left: 1px solid #e3e3e3;
  border-right: 1px solid #e3e3e3;
}

.el-collapse-item {
  max-height: 222px;
}

.container-integration .box-card .el-card__body {
  padding: 0 !important;
}

.el-table td, .el-table th.is-leaf {
  border-bottom: 1px dashed #EBEEF5;
}

.container-integration .leftBox, .container-integration .rightBox {
  width: 50%;
  height: 100%;
  position: absolute;
  top: 0;
  background: #f5f6fa;
}

.container-integration .leftBox {
  left: 0;
}

.container-integration .rightBox {
  right: 0;
}

.container-integration .leftBox .box-card {
  width: calc(100% - 30px);
  height: calc(100% - 42px);
  margin: 20px 10px 20px 20px;
  background: #fff;
}

.container-integration .rightBox .box-card {
  width: calc(100% - 30px);
  height: calc(100% - 42px);
  padding: 20px 20px 20px 10px;
  background: #f5f6fa;
  border: none;
  box-shadow: none;
  overflow: auto;
}
</style>