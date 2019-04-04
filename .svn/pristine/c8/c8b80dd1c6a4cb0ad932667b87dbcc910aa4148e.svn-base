<!-- logMode 系统日志 -->

<template>
  <div class="logMode-container">
    <el-input
      class="logMode-search"
      placeholder="输入关键字查询"
      suffix-icon="el-icon-search"
      v-model="searchValue"
    ></el-input>
    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column prop="serial" label="序号" width="100" align="center"></el-table-column>
      <el-table-column prop="account" label="账号" align="center"></el-table-column>
      <el-table-column prop="name" label="用户名" align="center"></el-table-column>
      <el-table-column prop="ip" label="IP" align="center"></el-table-column>
      <el-table-column prop="date" label="登录时间" align="center"></el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  name: "logModes",
  data() {
    return {
      tableData: [
        {
          serial: "1",
          account: "15197266710",
          date: "2016-05-02",
          name: "王小虎",
          ip: "222.223.17.1"
        },
        {
          serial: "2",
          account: "15197266710",
          date: "2016-05-02",
          name: "王小虎",
          ip: "222.223.17.1"
        },
        {
          serial: "3",
          account: "15197266710",
          date: "2016-05-02",
          name: "王小虎",
          ip: "222.223.17.1"
        },
        {
          serial: "4",
          account: "15197266710",
          date: "2016-05-02",
          name: "王小虎",
          ip: "222.223.17.1"
        },
        {
          serial: "5",
          account: "15197266710",
          date: "2016-05-02",
          name: "王小虎",
          ip: "222.223.17.1"
        },
        {
          serial: "6",
          account: "15197266710",
          date: "2016-05-02",
          name: "王小虎",
          ip: "222.223.17.1"
        },
        {
          serial: "7",
          account: "15197266710",
          date: "2016-05-02",
          name: "王小虎",
          ip: "222.223.17.1"
        },
        {
          serial: "8",
          account: "15197266710",
          date: "2016-05-02",
          name: "王小虎",
          ip: "222.223.17.1"
        }
      ],
      searchValue: null
    };
  },
  methods: {}
};
</script>
<style>
.logMode-container {
  width: 98%;
  height: 96.8%;
  padding: 20px;
  background: rgba(245, 246, 250, 1);
}
.logMode-container .el-table {
  /* width: 100%; */
}
.logMode-container table thead tr th {
  background: rgba(67, 80, 137, 1);
  font-size: 18px;
  font-family: SourceHanSansCN-Medium;
  font-weight: 500;
  color: rgba(255, 255, 255, 1);
  height: 50px;
}
.logMode-container .el-table__row {
  height: 50px;
  background: rgba(255, 255, 255, 1);
  font-size: 18px;
  font-family: SourceHanSansCN-Medium;
  font-weight: 500;
  color: rgba(51, 51, 51, 1);
}
.logMode-container .el-table__row--striped {
  background: rgba(244, 246, 255, 1);
  height: 50px;
  font-size: 18px;
  font-family: SourceHanSansCN-Medium;
  font-weight: 500;
  color: rgba(51, 51, 51, 1);
}
.logMode-search {
  width: 300px;
  height: 40px;
  margin-bottom: 20px;
}
.logMode-search .el-input__inner {
  font-size: 18px;
  font-family: SourceHanSansCN-Normal;
  font-weight: 400;
  color: rgba(153, 153, 153, 1);
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 3px 7px 0px rgba(229, 229, 229, 1);
  border-radius: 4px;
  border-width: 0px;
}
.logMode-search .el-input__icon {
  margin-right: -6px;
  width: 50px;
  height: 40px;
  background: rgba(67, 80, 137, 1);
  border-radius: 0px 4px 4px 0px;
}
.logMode-search .el-input__suffix {
  background: rgba(67, 80, 137, 1);
  border-radius: 0px 4px 4px 0px;
}
.logMode-search
  .el-input__suffix
  .el-input__suffix-inner
  .el-icon-search:before {
  color: #fff;
}
</style>
