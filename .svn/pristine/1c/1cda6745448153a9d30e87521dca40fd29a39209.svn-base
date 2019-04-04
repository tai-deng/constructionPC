<!-- progress -->
<template>
  <div class='container-progress'>
    <div
      class='wrapper'
      id="progress_list"
    >
      <el-tabs type="card">
        <el-tab-pane label="基施">
          <infrastructure></infrastructure>
        </el-tab-pane>
        <el-tab-pane label="支护土方">
          <shoring></shoring>

        </el-tab-pane>
        <el-tab-pane label="特殊">
          <particular></particular>

        </el-tab-pane>
        <el-tab-pane label="土建结构">
          <civilstructure></civilstructure>

        </el-tab-pane>
        <el-tab-pane label="特殊调整">
          <particularmodify></particularmodify>

        </el-tab-pane>
        <el-tab-pane label="竣工交付">
          <accomplish></accomplish>

        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script type='textecmascript-6'>
import infrastructure from "./components/infrastructure";
import particular from "./components/particular";
import particularmodify from "./components/particularModify";
import accomplish from "./components/accomplish";
import shoring from "./components/shoring";
import civilstructure from "./components/civilstructure";
export default {
  data() {
    return {
      data: "进度配置"
    };
  },
  components: {
    infrastructure,
    particular,
    accomplish,
    shoring,
    civilstructure,
    particularmodify
  }
};
</script>
<style lang='stylus' scoped rel='stylesheet/stylus'>
@import '../../../assets/stylus/variable.styl';

.container-progress {
  width: 100%;
  height: 100%;
  .wrapper {
    height 100%;
    .el-tabs {
      height: 100%;
    }
  }

  #progress_list {
    .el-tabs__item {
    }
  }
}
</style>
<style >
/* .container-progress {
  background-color: red;
} */
#progress_list .el-tabs--card>.el-tabs__header {
  margin: 0;
}
#progress_list .el-tabs__content {
  position: static;
  height: 100%;
  background-color: #eff3ff;
}
#progress_list .el-tabs__item {
  height: 46px;
  border-left: none;
  line-height: 30px;
  font-size: 18px;
}
#progress_list .el-tabs__item.is-active {
  border-bottom-color: transparent;
}
#progress_list .container-progress .el-tabs__nav {
  border: none;
}
#progress_list .el-tabs__nav-wrap {
  box-shadow: 0px 1px 7px 0px rgba(216, 223, 238, 0.75);
}
#progress_list .el-tabs__nav {
  border-right: none;
}
#progress_list .el-tab-pane {
  height: 100%;
}
</style>
